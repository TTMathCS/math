/* The winding-number picture. Left: a circle of radius r in the plane of z, with the three roots of
   p(z) = z³ − 2z + 2 marked. Right: where p sends that circle. The number of times the image winds round 0 equals the
   number of roots inside the circle; for a big circle it is 3, the degree, so roots must exist. */
PLAY("winding", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), r = 0.6;
  function p(x, y) { var x2 = x * x - y * y, y2 = 2 * x * y, x3 = x2 * x - y2 * y, y3 = x2 * y + y2 * x; return [x3 - 2 * x + 2, y3 - 2 * y]; }
  var roots = [[-1.7693, 0], [0.8846, 0.5897], [0.8846, -0.5897]];
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var s1 = 50, c1 = [150, 150];
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, 150); g.lineTo(280, 150); g.moveTo(150, 20); g.lineTo(150, 280); g.stroke();
    g.strokeStyle = C.ice; g.lineWidth = 2.5; g.beginPath(); g.arc(c1[0], c1[1], r * s1, 0, 7); g.stroke(); g.lineWidth = 1;
    var inside = 0;
    roots.forEach(function (z) { var on = Math.hypot(z[0], z[1]) < r; if (on) inside++; g.fillStyle = on ? C.gold : C.ink3; g.beginPath(); g.arc(c1[0] + z[0] * s1, c1[1] - z[1] * s1, 6, 0, 7); g.fill(); });
    var big = 2; for (var t = 0; t < 6.3; t += 0.05) { var w = p(r * Math.cos(t), r * Math.sin(t)); big = Math.max(big, Math.abs(w[0]), Math.abs(w[1])); }
    var s2 = 120 / big, c2 = [445, 150], tot = 0, prev = null;
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(310, 150); g.lineTo(580, 150); g.moveTo(445, 20); g.lineTo(445, 280); g.stroke();
    g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath();
    for (var i = 0; i <= 720; i++) { var a = i / 720 * 2 * Math.PI, q = p(r * Math.cos(a), r * Math.sin(a)), ang = Math.atan2(q[1], q[0]);
      if (prev !== null) { var d = ang - prev; if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI; tot += d; } prev = ang;
      i ? g.lineTo(c2[0] + q[0] * s2, c2[1] - q[1] * s2) : g.moveTo(c2[0] + q[0] * s2, c2[1] - q[1] * s2); }
    g.stroke(); g.lineWidth = 1;
    g.fillStyle = C.red; g.beginPath(); g.arc(c2[0], c2[1], 5, 0, 7); g.fill();
    var wn = Math.round(tot / (2 * Math.PI));
    g.font = F(18, 600); g.textAlign = "left"; g.fillStyle = C.ink2; g.fillText("z", 30, 30); g.fillText("p(z)", 320, 30);
    g.fillStyle = C.gold; g.fillText("winds " + wn + "×", 470, 40);
    out.textContent = "Radius " + r.toFixed(2) + ": " + inside + " root" + (inside === 1 ? "" : "s") + " inside, and the image winds round 0 " + wn + " time" + (wn === 1 ? "" : "s") + ".";
  }
  k.slider("Radius r", 0.2, 2.4, 0.02, r, function (v) { return v.toFixed(2); }, function (v) { r = v; draw(); });
  st.draw = draw;
});
