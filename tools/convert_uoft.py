"""Bring the U of T course guides (TTMathCS/UofT-Math) into this site as the "U of T" shelf, docs/uoft/.

Each course page keeps its own HTML and math exactly as written; only the page frame changes (this site's header,
menu, search and colours). Run again whenever UofT-Math changes:

    python3 tools/convert_uoft.py ../UofT-Math

It rewrites docs/uoft/ and the U of T part of mkdocs.yml's menu (between the "# uoft:" marks).
"""
import html
import json
import os
import re
import shutil
import subprocess
import sys

SRC = sys.argv[1] if len(sys.argv) > 1 else "../UofT-Math"
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(HERE, "docs", "uoft")
SHELF = "uoft"

# the finished guides, in the order the shelf shows them (MAT267H1 joins when its guide is written)
MATH = ["MAT137", "MAT158H1", "MAT159H1", "MAT240H1", "MAT247H1", "MAT257Y1"]
OTHER = ["PHY131H1", "PHY132H1", "CSC108H1", "CSC148H1", "ENG140Y1"]


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def title_of(page):
    t = re.search(r"<title>(.*?)</title>", page, re.S).group(1)
    return html.unescape(t).strip()


def body_of(page):
    """The page's content without its own frame: the sheet of a unit page, or the main column of a course page."""
    m = re.search(r'<div class="container">(.*)</div>\s*(?:<script|</body>)', page, re.S)
    if not m:
        m = re.search(r"<main[^>]*>(.*)</main>", page, re.S)
    return m.group(1).strip()


def scripts_of(page):
    """The page's own scripts (the math, the practice questions, the drawings), not the old theme switch."""
    out = []
    for src in re.findall(r'<script src="([^"]+)"></script>', page):
        src = src.split("?")[0]
        if src.endswith("theme.js"):
            continue
        out.append(f'<script src="{src}"></script>')
    return out


def md_page(title, body, scripts, kind):
    # the whole page is one HTML block: Markdown leaves it as written, so the math stays exactly as it is
    yaml_title = title.replace('"', '\\"')
    return (f'---\ntitle: "{yaml_title}"\n---\n\n<div class="uoft uoft-{kind}{' container' if kind == 'unit' else ''}" markdown="0">\n'
            + body + "\n</div>\n\n" + "\n".join(scripts) + "\n")


def unit_order(names):
    def key(n):
        if n.startswith("prologue"):
            return (0, n)
        m = re.match(r"unit(\d+)", n)
        if m:
            return (1, int(m.group(1)))
        return (2, n)
    return sorted(names, key=key)


def convert_course(code, nav):
    src = os.path.join(SRC, code)
    dst = os.path.join(OUT, code)
    os.makedirs(dst, exist_ok=True)
    pages = [n for n in os.listdir(src) if n.endswith(".html")]
    entries = []
    for name in ["index.html"] + unit_order([n for n in pages if n != "index.html"]):
        page = read(os.path.join(src, name))
        title = title_of(page)
        kind = "course" if name == "index.html" else "unit"
        md = os.path.join(dst, name[:-5] + ".md")
        with open(md, "w", encoding="utf-8") as f:
            f.write(md_page(title, body_of(page), scripts_of(page), kind))
        short = re.sub(r"\s*·\s*" + re.escape(code) + r"$", "", title)
        entries.append((short if kind == "unit" else "About the course", f"{SHELF}/{code}/{name[:-5]}.md"))
    for name in os.listdir(src):   # a course's own scripts (drawings, practice)
        if name.endswith(".js"):
            shutil.copy(os.path.join(src, name), dst)
    first = title_of(read(os.path.join(src, "index.html")))
    nav.append((code, first, entries))


def doc_page(name, target):
    """A plain reading page of the old catalog (the path guide, the course changes) as Markdown, through pandoc."""
    page = read(os.path.join(SRC, name))
    body = re.search(r"<main[^>]*>(.*)</main>", page, re.S).group(1)
    md = subprocess.run(["pandoc", "-f", "html", "-t", "gfm-raw_html", "--wrap=none"], input=body,
                        capture_output=True, text=True, check=True).stdout
    md = md.replace("](index.html", "](index.md").replace("](comprehensive_guide.html", "](comprehensive-guide.md")
    md = md.replace("](course_changes.html", "](course-changes.md")
    md = re.sub(r"\]\((MAT\w+|PHY\w+|CSC\w+|ENG\w+)/index\.html", r"](\1/index.md", md)
    with open(os.path.join(OUT, target), "w", encoding="utf-8") as f:
        f.write(f'---\ntitle: "{title_of(page).split(" — ")[0]}"\n---\n\n' + md)
    return title_of(page)


def shelf_index(reg):
    """The shelf's first page: every finished guide, then every course still to come, by subject."""
    courses = {c["code"]: c for c in reg["courses"]}
    other = {c["code"]: c for c in reg["other"]}
    lines = ["---", 'title: "U of T"', "---", "",
             "# University of Toronto: mathematics and statistics", "",
             "Course guides for the University of Toronto's mathematics and statistics courses. Each guide follows the "
             "course chapter by chapter: definitions, theorems with the reasoning spelled out, worked examples, "
             "pitfalls and practice questions with answers.", "",
             "Start with [the path through the program](comprehensive-guide.md) or "
             "[how MAT137 and MAT157 were replaced](course-changes.md).", "",
             "## Mathematics", "", "| Course | Title | Year | Chapters | What it covers |", "| --- | --- | --- | --- | --- |"]
    for code in MATH:
        c = courses[code]
        lines.append(f"| [{code}]({code}/index.md) | {c['title']} | {c['term']} | {c['chapters']} | {c['description']} |")
    lines += ["", "## Beside the math", "", "| Course | Title | Subject | Chapters |", "| --- | --- | --- | --- |"]
    for code in OTHER:
        c = other[code]
        lines.append(f"| [{code}]({code}/index.md) | {c['title']} | {c['subject']} | {c['chapters']} |")
    lines += ["", "## Still to be written", "",
              "These courses are listed so the whole program can be seen at once; their guides come later.", ""]
    by = {}
    for c in reg["courses"]:
        if not c["path"] and c["status"] == "Planned guide":
            by.setdefault(c["subject"], []).append(c)
    for subject in sorted(by):
        lines += [f"??? note \"{subject} ({len(by[subject])})\"", ""]
        lines += ["    | Course | Title | Year |", "    | --- | --- | --- |"]
        for c in by[subject]:
            lines.append(f"    | {c['code']} | {c['title']} | {c['term']} |")
        lines.append("")
    with open(os.path.join(OUT, "index.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")


def write_nav(nav, docs):
    """The U of T part of the menu in mkdocs.yml, between its marks."""
    out = ["  - University courses:", f"      - {SHELF}/index.md", f"      - {SHELF}/comprehensive-guide.md",
           f"      - {SHELF}/course-changes.md"]
    for code, _, entries in nav:
        out.append(f"      - {code}:")
        for label, path in entries:
            out.append(f"          - {json.dumps(label, ensure_ascii=False)}: {path}")
    cfg = os.path.join(HERE, "mkdocs.yml")
    text = read(cfg)
    text = re.sub(r"(  # uoft: start\n).*?(  # uoft: end\n)", lambda m: m.group(1) + "\n".join(out) + "\n" + m.group(2),
                  text, flags=re.S)
    with open(cfg, "w", encoding="utf-8") as f:
        f.write(text)


def main():
    reg_js = subprocess.run(["node", "-e", """
global.window = {};
for (const f of ["structure", "courses", "other-courses"]) require(process.argv[1] + "/assets/" + f + ".js");
process.stdout.write(JSON.stringify({courses: window.UOFT_COURSES, other: window.UOFT_OTHER_COURSES}));
""", os.path.abspath(SRC)], capture_output=True, text=True, check=True).stdout
    reg = json.loads(reg_js)
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(os.path.join(OUT, "assets"))
    for name in ["course-runtime.js", "mat137-practice.js"]:
        shutil.copy(os.path.join(SRC, "assets", name), os.path.join(OUT, "assets", name))
    # the math runtime does not know \prime (written as f\prime(x) on some pages): it showed as raw text
    rt = os.path.join(OUT, "assets", "course-runtime.js")
    text = read(rt)
    if 'prime: ["mo"' not in text:
        text = text.replace('  approx: ["mo", "≈"],', '  approx: ["mo", "≈"],\n  prime: ["mo", "′"],', 1)
        assert 'prime: ["mo"' in text
        with open(rt, "w", encoding="utf-8") as f:
            f.write(text)
    nav = []
    for code in MATH + OTHER:
        convert_course(code, nav)
    doc_page("comprehensive_guide.html", "comprehensive-guide.md")
    doc_page("course_changes.html", "course-changes.md")
    shelf_index(reg)
    write_nav(nav, OUT)
    print(f"U of T shelf: {len(nav)} courses, {sum(len(e) for _, _, e in nav)} pages")


main()
