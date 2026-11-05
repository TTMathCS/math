/* Inversion in a circle of radius 1: a point at distance r from the centre goes to the point on the same ray at
   distance 1/r. Inside swaps with outside. Slide a straight line (gold) across: its image (blue) is a circle through
   the centre, and a line through the centre stays a line. */
PLAY("invert", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), d = 1.6, tilt = 0.3;
  var cx = 200, cy = 150, S = 70;
  function inv(x, y) { var r2 = x * x + y * y; return [x / r2, y / r2]; }
  function P(x, y) { return [cx + x * S, cy - y * S]; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, S, 0, 7); g.stroke(); g.lineWidth = 1;
    g.fillStyle = C.ink; g.beginPath(); g.arc(cx, cy, 4, 0, 7); g.fill();
    var nx = Math.cos(tilt), ny = Math.sin(tilt);
    g.save(); g.beginPath(); g.rect(0, 0, 420, 300); g.clip();
    g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath(); for (var t = -8; t <= 8; t += 0.02) { var x = d * nx - t * ny, y = d * ny + t * nx, p = P(x, y); t === -8 ? g.moveTo(p[0], p[1]) : g.lineTo(p[0], p[1]); } g.stroke();
    g.strokeStyle = C.ice; g.beginPath(); var first = true;
    for (t = -60; t <= 60; t += 0.01) { var X = d * nx - t * ny, Y = d * ny + t * nx; if (Math.abs(d) < 1e-6 && Math.abs(t) < 0.05) { first = true; continue; } var q = inv(X, Y), pp = P(q[0], q[1]); first ? g.moveTo(pp[0], pp[1]) : g.lineTo(pp[0], pp[1]); first = false; } g.stroke();
    [-1.2, 0.4, 1.5].forEach(function (tt) { var X = d * nx - tt * ny, Y = d * ny + tt * nx, q = inv(X, Y), a = P(X, Y), b = P(q[0], q[1]); g.setLineDash([3, 4]); g.strokeStyle = C.ink3; g.beginPath(); g.moveTo(cx, cy); g.lineTo(a[0], a[1]); g.stroke(); g.setLineDash([]); g.fillStyle = C.gold; g.beginPath(); g.arc(a[0], a[1], 5, 0, 7); g.fill(); g.fillStyle = C.ice; g.beginPath(); g.arc(b[0], b[1], 5, 0, 7); g.fill(); });
    g.restore(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(18, 500); g.fillStyle = C.gold; g.fillText("a line", 440, 60); g.fillStyle = C.ice; g.fillText(Math.abs(d) < 0.02 ? "its image: the same line" : "its image: a circle", 440, 90, 150); g.fillText(Math.abs(d) < 0.02 ? "" : "through the centre", 440, 116);
    out.textContent = Math.abs(d) < 0.02 ? "A line through the centre inverts to itself (its two halves swap ends)." : "The line is " + Math.abs(d).toFixed(2) + " from the centre; its image is a circle of diameter " + (1 / Math.abs(d)).toFixed(2) + " through the centre.";
  }
  k.slider("Distance", -2.5, 2.5, 0.02, d, function (v) { return v.toFixed(2); }, function (v) { d = Math.abs(v) < 0.02 ? 0 : v; draw(); });
  k.slider("Turn", 0, 3.14, 0.01, tilt, function (v) { return Math.round(v * 180 / Math.PI) + "°"; }, function (v) { tilt = v; draw(); });
  st.draw = draw;
});
