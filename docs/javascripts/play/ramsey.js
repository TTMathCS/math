/* R(3, 3) = 6. Colour every line between n points gold or blue (at random, or tap a line to switch it). With 6 points
   there is always a triangle of one colour, shown thick; with 5 points the pentagon-and-star colouring has none. */
PLAY("ramsey", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, out, n = 6, col = {};
  function pos(i) { var t = i / n * 2 * Math.PI - Math.PI / 2; return [160 + Math.cos(t) * 120, 150 + Math.sin(t) * 120]; }
  function key(i, j) { return i < j ? i + "," + j : j + "," + i; }
  function rand() { col = {}; for (var i = 0; i < n; i++) for (var j = i + 1; j < n; j++) col[key(i, j)] = Math.random() < 0.5 ? 1 : 2; }
  function five() { n = 5; col = {}; for (var i = 0; i < 5; i++) for (var j = i + 1; j < 5; j++) col[key(i, j)] = (j - i === 1 || j - i === 4) ? 1 : 2; }
  var st = k.stage(W, H, function (x, y) { var best = null, bd = 14; for (var i = 0; i < n; i++) for (var j = i + 1; j < n; j++) { var a = pos(i), b = pos(j), t = Math.max(0, Math.min(1, ((x - a[0]) * (b[0] - a[0]) + (y - a[1]) * (b[1] - a[1])) / ((b[0] - a[0]) * (b[0] - a[0]) + (b[1] - a[1]) * (b[1] - a[1])))), dd = Math.hypot(a[0] + t * (b[0] - a[0]) - x, a[1] + t * (b[1] - a[1]) - y); if (dd < bd) { bd = dd; best = key(i, j); } } if (best) { col[best] = 3 - col[best]; draw(); } });
  var g = st.g; out = k.out();
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var tri = null; for (var a = 0; a < n && !tri; a++) for (var b = a + 1; b < n && !tri; b++) for (var c = b + 1; c < n && !tri; c++) { var x = col[key(a, b)]; if (x === col[key(b, c)] && x === col[key(a, c)]) tri = [a, b, c, x]; }
    for (var i = 0; i < n; i++) for (var j = i + 1; j < n; j++) { var p = pos(i), q = pos(j), inT = tri && tri.indexOf(i) >= 0 && tri.indexOf(j) >= 0 && tri.indexOf(i) < 3 && tri.indexOf(j) < 3; g.strokeStyle = col[key(i, j)] === 1 ? C.gold : C.earth; g.lineWidth = inT ? 7 : 2; g.globalAlpha = tri && !inT ? 0.45 : 1; g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); g.stroke(); }
    g.globalAlpha = 1; g.lineWidth = 1; for (i = 0; i < n; i++) { var pp = pos(i); g.fillStyle = C.ink; g.beginPath(); g.arc(pp[0], pp[1], 7, 0, 7); g.fill(); }
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(n + " points", 330, 60);
    g.font = F(17, 500); g.fillStyle = tri ? C.gold : C.green; g.fillText(tri ? "a one-colour triangle" : "no one-colour triangle", 330, 92);
    out.textContent = n === 6 ? "Try to colour the 15 lines with no one-colour triangle: it cannot be done. Each point has 5 lines, so 3 share a colour, and their ends close the trap." : "With 5 points it can be done: pentagon one colour, star the other.";
  }
  k.buttons([["6 points at random", function () { n = 6; rand(); draw(); }], ["5 points, no triangle", function () { five(); draw(); }]]);
  rand(); st.draw = draw; draw();
});
