"""Write the Topics part of the menu (mkdocs.yml, between the "# topics:" marks) and each deep topic's front page.

A topic is "deep" when it has docs/topics/<slug>/level-1/ ... level-8/, each with an index.md (the level page) and
its lessons NN-<name>.md. A topic without levels keeps its older five step pages (01-play.md ... 05-beyond.md).

    python3 tools/topics.py
"""
import glob
import os
import re

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = os.path.join(HERE, "docs", "topics")
ORDER = ["numbers", "patterns", "geometry", "measurement", "number-theory", "counting", "probability", "statistics",
         "algebra", "ratio", "logic", "change", "infinity"]
# the topics whose levels are finished and checked (a topic joins when all 8 levels are written)
DEEP = ["geometry", "numbers", "number-theory", "counting", "probability"]
STEPS = ["01-play", "02-explore", "03-build", "04-master", "05-beyond"]


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def title(p):
    m = re.search(r'^title:\s*"?(.*?)"?\s*$', read(p), re.M)
    return m.group(1).replace('\\"', '"')


def levels(slug):
    if slug not in DEEP:
        return []
    return sorted(glob.glob(os.path.join(T, slug, "level-*")), key=lambda d: int(d.rsplit("-", 1)[1]))


def lessons(d):
    return sorted(os.path.basename(p) for p in glob.glob(os.path.join(d, "[0-9][0-9]-*.md")))


def nav():
    out = ["  - Topics:", "      - topics/index.md"]
    for slug in ORDER:
        out.append(f"      - {title(os.path.join(T, slug, 'index.md'))}:")
        out.append(f"          - topics/{slug}/index.md")
        lv = levels(slug)
        if lv:
            for d in lv:
                n = os.path.basename(d)
                out.append(f"          - \"{title(os.path.join(d, 'index.md'))}\":")
                out.append(f"              - topics/{slug}/{n}/index.md")
                out += [f"              - topics/{slug}/{n}/{f}" for f in lessons(d)]
        else:
            out += [f"          - topics/{slug}/{s}.md" for s in STEPS]
    cfg = os.path.join(HERE, "mkdocs.yml")
    text = read(cfg)
    text = re.sub(r"(  # topics: start\n).*?(  # topics: end\n)", lambda m: m.group(1) + "\n".join(out) + "\n" + m.group(2),
                  text, flags=re.S)
    with open(cfg, "w", encoding="utf-8") as f:
        f.write(text)


def front_page(slug):
    """The topic's first page: its own opening words (kept), then a table of its levels."""
    p = os.path.join(T, slug, "index.md")
    page = read(p)
    head = re.split(r"\n(?=\| (?:Step|Level) \||\d+ levels, \d+ lessons\.)", page, maxsplit=1)[0].rstrip()
    rows = ["| Level | Rough age | Lessons |", "| --- | --- | --- |"]
    total = 0
    for d in levels(slug):
        n = os.path.basename(d)
        lp = os.path.join(d, "index.md")
        age = re.search(r"rough age ([^(]+?)\s*\(", read(lp))
        ls = lessons(d)
        total += len(ls)
        names = "; ".join(f"[{title(os.path.join(d, f))}]({n}/{f})" for f in ls)
        rows.append(f"| [{title(lp)}]({n}/index.md) | {age.group(1) if age else ''} | {names} |")
    note = (f"\n\n{len(levels(slug))} levels, {total} lessons. The ages are only a rough guide for parents and "
            "teachers; anyone can start at any level.\n\n")
    with open(p, "w", encoding="utf-8") as f:
        f.write(head + note + "\n".join(rows) + "\n")
    # the older five step pages are replaced by the levels
    for s in STEPS:
        old = os.path.join(T, slug, s + ".md")
        if os.path.exists(old):
            os.remove(old)


for slug in ORDER:
    if levels(slug):
        front_page(slug)
nav()
print("topics:", ", ".join(f"{s} ({'levels' if levels(s) else 'steps'})" for s in ORDER))
