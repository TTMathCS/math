"""Make docs/stylesheets/course.css from the course guides' own style.css (UofT-Math, the same in every course folder):
every rule is kept, scoped to the course pages (.md-typeset .uoft), and its colours follow this site's two schemes.
The guides' page frame (desk, sheet, side menu, theme button) is left out: this site's header and menu replace it.

    python3 tools/course_css.py ../UofT-Math/MAT137/style.css
"""
import re
import sys

src = open(sys.argv[1], encoding="utf-8").read()
src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)

FRAME = re.compile(r"^(\*|html|body|::selection|a:focus-visible|\.theme-toggle|\.wrap|nav\.side|main|\.container|:root|"
                   r"\[data-theme=\"dark\"\]$|h1$|h1 em|footer\.end)")


def rules(text):
    """Split CSS into (selector, body) at the top level; an @media block comes back with its own rules."""
    out, i = [], 0
    while i < len(text):
        j = text.find("{", i)
        if j < 0:
            break
        sel = text[i:j].strip()
        depth, k = 1, j + 1
        while depth:
            depth += {"{": 1, "}": -1}.get(text[k], 0)
            k += 1
        out.append((sel, text[j + 1:k - 1]))
        i = k
    return out


def scope(sel):
    parts = []
    for s in sel.split(","):
        s = s.strip()
        if not s or FRAME.match(s.replace('[data-theme="dark"] ', "")):
            continue
        dark = s.startswith('[data-theme="dark"]')
        s = s.replace('[data-theme="dark"] ', "")
        if s == "h1":
            continue
        parts.append(('[data-md-color-scheme="slate"] ' if dark else "") + ".md-typeset .uoft " + s)
    return ",\n".join(parts)


def emit(items, indent=""):
    out = []
    for sel, body in items:
        if sel.startswith("@keyframes"):
            out.append(f"{indent}{sel}{{{body.strip()}}}")
        elif sel.startswith("@media"):
            inner = emit(rules(body), indent + "  ")
            if inner.strip():
                out.append(f"{indent}{sel}{{\n{inner}\n{indent}}}")
        else:
            s = scope(sel)
            if s:
                out.append(f"{indent}{s}{{{' '.join(body.split())}}}")
    return "\n".join(out)


HEAD = """/* The course guides' own look (UofT-Math style.css, made by tools/course_css.py; do not edit by hand), inside this
   site's frame. Pen-case colour code: blue = definitions, indigo = theorems, green = examples, red = warnings.
   The panels are see-through so the page's Mars colours show under them, in both schemes. */
.md-typeset .uoft{
  --sheet:var(--md-default-bg-color);--well:rgba(255,255,255,.38);--desk:var(--md-default-bg-color);
  --ink:var(--md-typeset-color);--ink-soft:var(--md-default-fg-color--light);
  --line:var(--md-default-fg-color--lighter);--line-soft:var(--md-default-fg-color--lightest);
  --grid:rgba(31,90,140,.08);
  --blue:#1f5a8c;--indigo:#46409f;--green:#2e7d4f;--red:#b23a20;--amber:#a35f00;
  --tint-blue:rgba(31,90,140,.09);--tint-indigo:rgba(70,64,159,.09);--tint-green:rgba(46,125,79,.1);
  --tint-red:rgba(178,58,32,.09);--tint-amber:rgba(163,95,0,.1);
  font-size:.85rem;line-height:1.65}
[data-md-color-scheme="slate"] .md-typeset .uoft{
  --well:rgba(244,230,212,.05);--grid:rgba(156,201,234,.07);
  --blue:#9cc9ea;--indigo:#b3aef0;--green:#7ccf9a;--red:#ef8a6e;--amber:#ffb74d;
  --tint-blue:rgba(156,201,234,.08);--tint-indigo:rgba(179,174,240,.08);--tint-green:rgba(124,207,154,.08);
  --tint-red:rgba(239,138,110,.09);--tint-amber:rgba(255,183,77,.08)}
/* Material's own spacing and heading styles step back inside the guides */
.md-typeset .uoft h1,.md-typeset .uoft h2,.md-typeset .uoft h3,.md-typeset .uoft h4{margin:0;border:0;padding:0;color:var(--ink)}
.md-typeset .uoft h1.ch-title,.md-typeset .uoft header.hero h1{font-family:var(--mars-display);font-weight:700;
  font-size:clamp(1.6rem,3.6vw,2.4rem);line-height:1.08;margin-bottom:.6rem;letter-spacing:0}
.md-typeset .uoft header.hero h1 em{font-style:italic;color:var(--blue)}
.md-typeset .uoft ul,.md-typeset .uoft ol{margin-top:0;margin-bottom:0}
.md-typeset .uoft li{margin-left:0}
.md-typeset .uoft .goals ul li,.md-typeset .uoft .units li{margin:0}
.md-typeset .uoft details{border:0;box-shadow:none;background:none;padding:0;font-size:inherit;overflow:visible}
.md-typeset .uoft details summary{min-height:0}
.md-typeset .uoft details summary::after{display:none}
.md-typeset .uoft details summary::before{position:static;width:auto;height:auto;transform:none;background:none;
  -webkit-mask-image:none;mask-image:none;top:auto;left:auto}
.md-typeset .uoft details summary{padding:4px 10px}
.md-typeset .uoft table:not([class]){font-size:inherit}
.md-typeset .uoft footer.end{border-top:2px solid var(--ink);padding-top:1rem;margin-top:2rem;
  font-family:var(--md-code-font-family);font-size:.6rem;color:var(--ink-soft);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}
"""

open("docs/stylesheets/course.css", "w", encoding="utf-8").write(HEAD + emit(rules(src)) + "\n")
print("course.css written")
