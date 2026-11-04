// Where each page of math.akadian.ca sits on the shared ladder Beginner, Intermediate, Expert.
// reader.js (the same on cs, math and cryptography) draws the badge; only this file differs per site.
// path: the page's path; ch: its chapter number in its book (0 if not a chapter); n: chapters in that book.
window.akadianLevel = function (path, ch, n) {
  if (/\/start\.html$/.test(path)) return "Beginner";                     // the first-lessons page
  var lv = path.match(/\/topics\/[^\/]+\/level-(\d)\//);
  if (lv) return +lv[1] <= 4 ? "Beginner" : "Intermediate";                  // levels 1-4: ages about 5-11; 5-8: 12-17
  if (/\/books\/[^\/]+\/\d+-/.test(path) && ch && n) {
    if (ch === n) return "Expert";                                   // the last chapter: where the branch goes
    if (ch <= Math.ceil(n * 0.2)) return "Intermediate";
    if (ch > n * 0.75) return "Expert";
    return "Intermediate";
  }
  if (/\/uoft\/./.test(path)) return "Intermediate";
  return null;
};
