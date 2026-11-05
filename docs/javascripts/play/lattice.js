/* Lattice paths on an n × n grid, from the bottom-left corner to the top-right, one step right or up at a time:
   (2n choose n) of them. Those that never go above the diagonal number the Catalan number (2n choose n)/(n + 1).
   Press New path for a random one (the browser's random numbers); gold ones stay on or below the line. */
PLAY("lattice", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 5, path = [];
  function choose(a, b) { var r = 1; for (var i = 1; i <= b; i++) r = r * (a - b + i) / i; return Math.round(r); }
  function make() { var s = []; for (var i = 0; i < n; i++) s.push(1, 0); for (i = s.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = s[i]; s[i] = s[j]; s[j] = t; } path = s; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var s = 240 / n, x0 = 30, y0 = 270, x = 0, y = 0, good = true;
    g.strokeStyle = C.line; for (var i = 0; i <= n; i++) { g.beginPath(); g.moveTo(x0 + i * s, y0); g.lineTo(x0 + i * s, y0 - n * s); g.moveTo(x0, y0 - i * s); g.lineTo(x0 + n * s, y0 - i * s); g.stroke(); }
    g.strokeStyle = C.ink3; g.setLineDash([5, 5]); g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + n * s, y0 - n * s); g.stroke(); g.setLineDash([]);
    path.forEach(function (st1) { if (st1) x++; else y++; if (y > x) good = false; });
    g.strokeStyle = good ? C.gold : C.ice; g.lineWidth = 4; g.beginPath(); g.moveTo(x0, y0); x = 0; y = 0;
    path.forEach(function (st1) { if (st1) x++; else y++; g.lineTo(x0 + x * s, y0 - y * s); }); g.stroke(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(n + " × " + n + " grid", 310, 50);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("all paths: (" + 2 * n + " choose " + n + ") = " + choose(2 * n, n), 310, 86);
    g.fillStyle = C.gold; g.fillText("never above the line: " + choose(2 * n, n) / (n + 1), 310, 114);
    g.fillStyle = good ? C.gold : C.ice; g.fillText(good ? "this one stays below" : "this one crosses above", 310, 150);
    out.textContent = "Of the " + choose(2 * n, n) + " paths, " + choose(2 * n, n) / (n + 1) + " (the Catalan number) never rise above the diagonal: exactly 1 in " + (n + 1) + ".";
  }
  k.slider("Size n", 1, 10, 1, n, function (v) { return v; }, function (v) { n = v; make(); draw(); });
  k.buttons([["New path", function () { make(); draw(); }]]);
  st.draw = draw;
});
