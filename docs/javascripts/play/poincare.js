/* A triangle in the Poincaré disc. Straight lines of hyperbolic geometry are arcs that meet the rim at right angles.
   Push the three corners out towards the rim: the triangle's angles shrink, and their sum is always less than 180°.
   The shortfall, π minus the angle sum, is the triangle's area. */
PLAY("poincare", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), r = 0.5;
  var cx = 150, cy = 150, R = 125;
  function geo(p, q) {   // the circle orthogonal to the rim through p and q, or null for a straight line
    var a1 = p[0], b1 = p[1], c1 = (p[0] * p[0] + p[1] * p[1] + 1) / 2, a2 = q[0], b2 = q[1], c2 = (q[0] * q[0] + q[1] * q[1] + 1) / 2, d = a1 * b2 - a2 * b1;
    if (Math.abs(d) < 1e-9) return null; var c = [(c1 * b2 - c2 * b1) / d, (a1 * c2 - a2 * c1) / d]; return { c: c, r: Math.hypot(p[0] - c[0], p[1] - c[1]) };
  }
  function tang(p, q) { var G = geo(p, q); if (!G) return [q[0] - p[0], q[1] - p[1]]; var t = [-(p[1] - G.c[1]), p[0] - G.c[0]]; if (t[0] * (q[0] - p[0]) + t[1] * (q[1] - p[1]) < 0) t = [-t[0], -t[1]]; return t; }
  function draw() {
    var V = [90, 210, 330].map(function (a) { return [r * Math.cos(a * Math.PI / 180), r * Math.sin(a * Math.PI / 180)]; });
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(91,143,201,0.12)"; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.fill(); g.strokeStyle = C.ink3; g.lineWidth = 2; g.stroke();
    g.strokeStyle = C.gold; g.lineWidth = 2.5;
    for (var i = 0; i < 3; i++) { var p = V[i], q = V[(i + 1) % 3], G = geo(p, q); g.beginPath();
      if (!G) { g.moveTo(cx + p[0] * R, cy - p[1] * R); g.lineTo(cx + q[0] * R, cy - q[1] * R); }
      else { var a = Math.atan2(p[1] - G.c[1], p[0] - G.c[0]), b = Math.atan2(q[1] - G.c[1], q[0] - G.c[0]), dlt = b - a; while (dlt > Math.PI) dlt -= 2 * Math.PI; while (dlt < -Math.PI) dlt += 2 * Math.PI;
        for (var s = 0; s <= 60; s++) { var t = a + dlt * s / 60, x = G.c[0] + G.r * Math.cos(t), y = G.c[1] + G.r * Math.sin(t); s ? g.lineTo(cx + x * R, cy - y * R) : g.moveTo(cx + x * R, cy - y * R); } }
      g.stroke(); }
    g.lineWidth = 1;
    var sum = 0; for (i = 0; i < 3; i++) { var t1 = tang(V[i], V[(i + 1) % 3]), t2 = tang(V[i], V[(i + 2) % 3]); sum += Math.acos((t1[0] * t2[0] + t1[1] * t2[1]) / Math.hypot(t1[0], t1[1]) / Math.hypot(t2[0], t2[1])); }
    V.forEach(function (v) { g.fillStyle = C.ink; g.beginPath(); g.arc(cx + v[0] * R, cy - v[1] * R, 5, 0, 7); g.fill(); });
    var deg = sum * 180 / Math.PI;
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.gold; g.fillText("angle sum " + deg.toFixed(1) + "°", 310, 60);
    g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("each angle " + (deg / 3).toFixed(1) + "°", 310, 92); g.fillText("area π − sum = " + (Math.PI - sum).toFixed(3), 310, 124);
    out.textContent = "The angles add up to " + deg.toFixed(1) + "°, short of 180° by " + (180 - deg).toFixed(1) + "°. As the corners reach the rim, every angle goes to 0 and the area to π.";
  }
  k.slider("Corners out", 0.02, 0.97, 0.01, r, function (v) { return v.toFixed(2); }, function (v) { r = v; draw(); });
  st.draw = draw;
});
