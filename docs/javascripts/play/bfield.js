/* A charged particle in a steady magnetic field (pointing into the screen, the crosses). The force q v × B is always
   sideways to the motion, so it never speeds the particle up: it bends it into a circle of radius r = m v ÷ (q B).
   Faster or heavier means a bigger circle; a stronger field, a tighter one; the other sign of charge turns the other
   way. Made-up units; press Play. */
PLAY("bfield", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 340, m = 2, v = 3, B = 2, q = 1, st = k.stage(W, H), g = st.g, out = k.out();
  function draw(t) {
    var r = m * v / (Math.abs(q) * B) * 22, cx = 300, cy = 190 - q * r, x0 = 300, y0 = 190;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.lineWidth = 1.5;
    for (var i = 30; i < W; i += 50) for (var j = 25; j < H; j += 50) { g.beginPath(); g.moveTo(i - 5, j - 5); g.lineTo(i + 5, j + 5); g.moveTo(i + 5, j - 5); g.lineTo(i - 5, j + 5); g.stroke(); }
    g.setLineDash([4, 5]); g.strokeStyle = C.ink3; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.stroke(); g.setLineDash([]);
    var ang = t * 2 * Math.PI, px = cx + r * Math.sin(ang), py = cy + q * r * Math.cos(ang), vx = Math.cos(ang), vy = -q * Math.sin(ang);
    g.strokeStyle = q > 0 ? C.rust : C.ice; g.lineWidth = 3; g.beginPath();
    for (var s = 0; s <= ang + 0.001; s += 0.03) { var X = cx + r * Math.sin(s), Y = cy + q * r * Math.cos(s); s ? g.lineTo(X, Y) : g.moveTo(X, Y); } g.stroke();
    g.fillStyle = q > 0 ? C.rust : C.ice; g.beginPath(); g.arc(px, py, 9, 0, 7); g.fill();
    g.fillStyle = C.bg; g.font = F(17, 700); g.textAlign = "center"; g.fillText(q > 0 ? "+" : "−", px, py + 6);
    g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.moveTo(px, py); g.lineTo(px + vx * 45, py + vy * 45); g.stroke();
    g.strokeStyle = C.green; g.beginPath(); g.moveTo(px, py); g.lineTo(px + (cx - px) / r * 35, py + (cy - py) / r * 35); g.stroke(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(17, 500); g.fillStyle = C.gold; g.fillText("gold: velocity", 18, 28); g.fillStyle = C.green; g.fillText("green: force, always sideways", 18, 52);
    g.fillStyle = C.ink2; g.fillText("B into the screen", 18, 76);
    out.textContent = "r = m v ÷ (q B) = " + m + " × " + v + " ÷ " + B + " = " + (m * v / B).toFixed(2) + " (made-up units). The speed never changes; only the direction does.";
  }
  var film = k.loop(4, draw, { label: "Time", start0: true });
  k.slider("Mass m", 1, 4, 0.5, m, function (x) { return x; }, function (x) { m = x; st.draw(); });
  k.slider("Speed v", 1, 4, 0.5, v, function (x) { return x; }, function (x) { v = x; st.draw(); });
  k.slider("Field B", 1, 4, 0.5, B, function (x) { return x; }, function (x) { B = x; st.draw(); });
  k.buttons([["Positive", function () { q = 1; st.draw(); }], ["Negative", function () { q = -1; st.draw(); }]], true);
  st.draw = function () { draw(film.t()); };
});
