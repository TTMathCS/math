// Where each page of math.akadian.ca sits on the shared ladder Start, Student, University, Expert, Research.
// reader.js (the same on cs, math and cryptography) draws the badge; only this file differs per site.
// path: the page's path; ch: its chapter number in its book (0 if not a chapter); n: chapters in that book.
window.akadianLevel = function (path, ch, n) {
  var lv = path.match(/\/topics\/[^\/]+\/level-(\d)\//);
  if (lv) return +lv[1] <= 4 ? "Start" : "Student";                  // levels 1-4: ages about 5-11; 5-8: 12-17
  if (/\/books\/[^\/]+\/\d+-/.test(path) && ch && n) {
    if (ch === n) return "Research";                                   // the last chapter: where the branch goes
    if (ch <= Math.ceil(n * 0.2)) return "Student";
    if (ch > n * 0.75) return "Expert";
    return "University";
  }
  if (/\/uoft\/./.test(path)) return "University";
  return null;
};
