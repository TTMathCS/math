/* Curvature on an ellipse x = 3 cos t, y = 1.6 sin t. At each point the circle that hugs the curve best, the
   osculating circle, has radius 1/κ. The ellipse bends hardest at the ends of its long axis and least at the ends of
   its short one. */
PLAY("curvature", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), t = 0.5, a = 3, b = 1.6, S = 55;
  function draw() {
    var x = a * Math.cos(t), y = b * Math.sin(t), dx = -a * Math.sin(t), dy = b * Math.cos(t), ddx = -a * Math.cos(t), ddy = -b * Math.sin(t);
    var sp = Math.hypot(dx, dy), kap = (dx * ddy - dy * ddx) / Math.pow(sp, 3), Rr = 1 / kap, nx = -dy / sp, ny = dx / sp;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.save(); g.beginPath(); g.rect(0, 0, 400, 300); g.clip();
    g.strokeStyle = C.ink; g.lineWidth = 2.5; g.beginPath(); g.ellipse(200, 150, a * S, b * S, 0, 0, 7); g.stroke(); g.lineWidth = 1;
    var ox = x + nx * Rr, oy = y + ny * Rr;
    g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.arc(200 + ox * S, 150 - oy * S, Rr * S, 0, 7); g.stroke(); g.lineWidth = 1;
    g.strokeStyle = C.ice; g.beginPath(); g.moveTo(200 + x * S, 150 - y * S); g.lineTo(200 + ox * S, 150 - oy * S); g.stroke();
    g.fillStyle = C.gold; g.beginPath(); g.arc(200 + x * S, 150 - y * S, 6, 0, 7); g.fill(); g.restore();
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.gold; g.fillText("κ = " + kap.toFixed(3), 420, 60);
    g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("radius 1/κ = " + Rr.toFixed(2), 420, 92);
    out.textContent = "Here the curvature is " + kap.toFixed(3) + ": the best-fitting circle has radius " + Rr.toFixed(2) + ". It ranges from " + (a / (b * b)).toFixed(2) + " at the long ends to " + (b / (a * a)).toFixed(2) + " at the short ends.";
  }
  k.slider("Point t", 0, 6.28, 0.01, t, function (v) { return v.toFixed(2); }, function (v) { t = v; draw(); });
  st.draw = draw;
});
