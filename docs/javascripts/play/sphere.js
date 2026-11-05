/* A triangle on a sphere: from the North Pole down two meridians to the equator, and along the equator between them.
   The two corners on the equator are right angles, so the angles add up to 180° plus the angle at the pole. The extra,
   in radians, is the triangle's area on a sphere of radius 1 (Girard's theorem). Drag to turn the globe. */
PLAY("sphere", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), lon = 90, spin = 0.5;
  function proj(la, lo) { var x = Math.cos(la) * Math.sin(lo - spin), y = Math.sin(la), z = Math.cos(la) * Math.cos(lo - spin), t = 0.35, y2 = y * Math.cos(t) - z * Math.sin(t), z2 = y * Math.sin(t) + z * Math.cos(t); return [150 + x * 120, 150 - y2 * 120, z2]; }
  function path(pts, col, w) { for (var i = 1; i < pts.length; i++) { var a = pts[i - 1], b = pts[i], back = a[2] < 0 && b[2] < 0; g.strokeStyle = col; g.globalAlpha = back ? 0.25 : 1; g.lineWidth = back ? 1 : w; g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); } g.globalAlpha = 1; g.lineWidth = 1; }
  function draw() {
    var L = lon * Math.PI / 180, i, mer = [];
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(91,143,201,0.14)"; g.beginPath(); g.arc(150, 150, 120, 0, 7); g.fill(); g.strokeStyle = C.line; g.stroke();
    for (var m = 0; m < 12; m++) { mer = []; for (i = -90; i <= 90; i += 5) mer.push(proj(i * Math.PI / 180, m * Math.PI / 6)); path(mer, "rgba(244,230,212,0.25)", 1); }
    var eq = []; for (i = 0; i <= 360; i += 5) eq.push(proj(0, i * Math.PI / 180)); path(eq, "rgba(244,230,212,0.35)", 1);
    var s1 = [], s2 = [], s3 = []; for (i = 0; i <= 90; i += 2) { s1.push(proj(i * Math.PI / 180, 0)); s2.push(proj(i * Math.PI / 180, L)); } for (i = 0; i <= lon; i += 2) s3.push(proj(0, i * Math.PI / 180));
    path(s1, C.gold, 3); path(s2, C.gold, 3); path(s3, C.gold, 3);
    var sum = 180 + lon;
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.gold; g.fillText("angles: 90° + 90° + " + lon + "°", 310, 60);
    g.fillStyle = C.ink; g.fillText("= " + sum + "°", 310, 92);
    g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("extra " + lon + "° = " + (L).toFixed(3) + " rad = area", 310, 134, 280);
    g.fillText("(sphere of radius 1; whole sphere 4π)", 310, 160, 280);
    out.textContent = "This triangle's angles add up to " + sum + "°, not 180°. Its area is " + L.toFixed(3) + ", which is " + (L / (4 * Math.PI) * 100).toFixed(1) + "% of the sphere.";
  }
  k.slider("Angle at the pole", 5, 180, 1, lon, function (v) { return v + "°"; }, function (v) { lon = v; draw(); });
  k.slider("Turn the globe", -3.14, 3.14, 0.01, spin, function (v) { return Math.round(v * 180 / Math.PI) + "°"; }, function (v) { spin = v; draw(); });
  st.draw = draw;
});
