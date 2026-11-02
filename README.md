# Math

Math by course, shelf by shelf: https://math.akadian.ca/ (part of Mars – your new home, www.akadian.ca).
Built with MkDocs Material in the same look as cryptography.akadian.ca (TTMathCS/cryptography); GitHub Pages
publishes it on every push to `main` (`.github/workflows/pages.yml`), so a push here is a publish.

## Layout

```
mkdocs.yml            the site and its menu: one section per shelf
docs/index.md         the first page: the list of shelves
docs/<shelf>/         one folder per shelf; docs/uoft/ is the University of Toronto shelf
docs/stylesheets/     mars.css (the akadian.ca look, from the cryptography site), course.css (the course guides' look)
docs/images/          the banner and the background pictures, with their sources in images/README.md
overrides/home.html   the banner on the first page
tools/                convert_uoft.py, course_css.py, hero/ (how the banner is drawn)
```

## The U of T shelf

It comes from TTMathCS/UofT-Math, where the guides are written. After changing them there, run

```
python3 tools/convert_uoft.py ../UofT-Math
python3 tools/course_css.py ../UofT-Math/MAT137/style.css   # only when style.css changed
mkdocs build --strict
```

`convert_uoft.py` rewrites `docs/uoft/` and the U of T part of the menu. Each page keeps its own HTML and math, so
nothing is retyped. A guide joins the shelf when its code is added to the MATH or OTHER list at the top of the script.

## Adding a shelf (high school, fun math, ...)

1. Make a folder, for example `docs/high-school/`, with an `index.md` that lists its courses, and one folder per
   course with its pages in Markdown. Math is written between dollar signs as in the guides; a page that has math
   ends with `<script src="../assets/course-runtime.js"></script>` (copy `docs/uoft/assets/course-runtime.js` into the
   shelf's own `assets/`), or uses plain Markdown only.
2. Add a section for it in `mkdocs.yml` under `nav:`, after the U of T marks.
3. Add a row for it to the Shelves table in `docs/index.md`.
4. `mkdocs build --strict` must pass before the push.

To try it locally: `pip install "mkdocs-material>=9.6,<9.7"` then `mkdocs serve`.
