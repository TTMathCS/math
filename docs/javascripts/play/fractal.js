/* A fractal, level by level. data-kind="sierpinski": keep cutting the middle out of every triangle. "koch": put a bump
   on the middle third of every edge. "cantor": remove the middle third of every piece. The numbers say what happens
   as the levels go on for ever. */
PLAY("fractal", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), kind = fig.getAttribute("data-kind") || "sierpinski", L = 3;
  function tri(ax, ay, bx, by, cx, cy, n) { if (!n) { g.beginPath(); g.moveTo(ax, ay); g.lineTo(bx, by); g.lineTo(cx, cy); g.fill(); return; } var abx = (ax + bx) / 2, aby = (ay + by) / 2, bcx = (bx + cx) / 2, bcy = (by + cy) / 2, cax = (cx + ax) / 2, cay = (cy + ay) / 2;
    tri(ax, ay, abx, aby, cax, cay, n - 1); tri(abx, aby, bx, by, bcx, bcy, n - 1); tri(cax, cay, bcx, bcy, cx, cy, n - 1); }
  function koch(x1, y1, x2, y2, n) { if (!n) { g.lineTo(x2, y2); return; } var dx = (x2 - x1) / 3, dy = (y2 - y1) / 3, ax = x1 + dx, ay = y1 + dy, bx = x1 + 2 * dx, by = y1 + 2 * dy, px = ax + dx / 2 + dy * Math.sqrt(3) / 2, py = ay + dy / 2 - dx * Math.sqrt(3) / 2;
    koch(x1, y1, ax, ay, n - 1); koch(ax, ay, px, py, n - 1); koch(px, py, bx, by, n - 1); koch(bx, by, x2, y2, n - 1); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.fillStyle = C.gold;
    if (kind === "sierpinski") { tri(170, 270, 430, 270, 300, 45, L); out.textContent = "Level " + L + ": " + Math.pow(3, L) + " triangles, covering (3/4)^" + L + " = " + (100 * Math.pow(0.75, L)).toFixed(1) + "% of the first one. For ever: infinitely many triangles, zero area."; }
    else if (kind === "koch") { var A = [150, 220], B = [450, 220], Cc = [300, 220 - 300 * Math.sqrt(3) / 2]; A[1] += 40; B[1] += 40; Cc[1] += 40; g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.moveTo(A[0], A[1]); koch(A[0], A[1], Cc[0], Cc[1], L); koch(Cc[0], Cc[1], B[0], B[1], L); koch(B[0], B[1], A[0], A[1], L); g.globalAlpha = 0.3; g.fill(); g.globalAlpha = 1; g.stroke();
      out.textContent = "Level " + L + ": " + 3 * Math.pow(4, L) + " edges; the perimeter is (4/3)^" + L + " = " + Math.pow(4 / 3, L).toFixed(2) + " times the first. For ever: an endless edge around an area that stays finite (8/5 of the first triangle)."; }
    else { for (var r = 0; r <= L; r++) { var segs = [[40, 560]]; for (var j = 0; j < r; j++) segs = [].concat.apply([], segs.map(function (s) { var t = (s[1] - s[0]) / 3; return [[s[0], s[0] + t], [s[1] - t, s[1]]]; })); segs.forEach(function (s) { g.fillRect(s[0], 30 + r * 40, Math.max(1, s[1] - s[0]), 20); }); }
      out.textContent = "Step " + L + ": " + Math.pow(2, L) + " pieces, total length (2/3)^" + L + " = " + Math.pow(2 / 3, L).toFixed(3) + " of the start. For ever: length zero, yet as many points left as the whole line."; }
  }
  k.slider("Level", 0, kind === "cantor" ? 6 : kind === "koch" ? 5 : 7, 1, L, function (v) { return v; }, function (v) { L = +v; draw(); });
  st.draw = draw; draw();
});
