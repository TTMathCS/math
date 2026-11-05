/* A tiled floor drawn in perspective. Lines that run away from you are parallel on the floor, yet in the picture they
   all meet at one vanishing point on the horizon; the diagonals meet at another. Projective geometry adds these
   meeting points "at infinity" to the plane. */
PLAY("perspective", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), eye = 1.6, turn = 0;
  function draw() {
    var hz = 90, f = 260, cx = 300 + turn * 200;
    function P(x, z) { return [cx + (x - turn * z * 0) * f / z, hz + eye * f / z * 0.55]; }
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(193,103,63,0.12)"; g.fillRect(0, hz, W, H - hz);
    g.strokeStyle = C.ice; g.lineWidth = 1.5;
    for (var x = -6; x <= 6; x++) { var a = P(x, 1), b = P(x, 400); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); }
    for (var z = 1; z <= 30; z++) { var c = P(-60, z), d = P(60, z); if (c[1] > H + 50) continue; g.strokeStyle = "rgba(156,201,234,0.5)"; g.beginPath(); g.moveTo(c[0], c[1]); g.lineTo(d[0], d[1]); g.stroke(); }
    g.strokeStyle = C.gold; for (x = -6; x <= 6; x += 2) { var e = P(x, 1), q = P(x + 300, 301); g.beginPath(); g.moveTo(e[0], e[1]); g.lineTo(q[0], q[1]); g.stroke(); }
    g.lineWidth = 1; g.strokeStyle = C.ink; g.beginPath(); g.moveTo(0, hz); g.lineTo(W, hz); g.stroke();
    g.fillStyle = C.ink; g.beginPath(); g.arc(cx, hz, 6, 0, 7); g.fill(); g.fillStyle = C.gold; g.beginPath(); g.arc(cx + f, hz, 6, 0, 7); g.fill();
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText("horizon", 16, hz - 10);
    out.textContent = "The blue lines run straight away from you and meet at the white point; the gold diagonals meet further along the horizon. Raise your eye and the floor tilts, but the meeting points stay on the horizon.";
  }
  k.slider("Eye height", 0.6, 3, 0.05, eye, function (v) { return v.toFixed(2); }, function (v) { eye = v; draw(); });
  st.draw = draw;
});
