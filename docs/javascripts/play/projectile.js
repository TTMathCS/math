/* A ball thrown at speed v and angle θ, with no air: x = v cos θ · t, y = v sin θ · t − ½ g t². The sideways motion and
   the falling are independent. Range v² sin 2θ / g, longest at 45°. Pick Earth (9.81 m/s²) or Mars (3.73 m/s², NASA's
   fact sheet): the same throw goes 2.6 times as far on Mars. Press Play to throw. */
PLAY("projectile", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), v = 15, th = 45, gr = 9.81;
  function draw(tt) {
    var a = th * Math.PI / 180, T = 2 * v * Math.sin(a) / gr, R = v * v * Math.sin(2 * a) / gr, top = v * v * Math.sin(a) * Math.sin(a) / (2 * gr), Rmax = 15 * 15 / 3.73 * 1.05, s = 540 / Math.max(Rmax * 0.55, R, top * 2), t = tt * T;
    s = Math.min(540 / Math.max(R, 1), 230 / Math.max(top, 1), 9);
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, 270); g.lineTo(580, 270); g.stroke();
    g.setLineDash([4, 5]); g.strokeStyle = C.ink3; g.beginPath(); for (var q = 0; q <= 1.0001; q += 0.01) { var tq = q * T, x = v * Math.cos(a) * tq, y = v * Math.sin(a) * tq - gr * tq * tq / 2; q ? g.lineTo(30 + x * s, 270 - y * s) : g.moveTo(30, 270); } g.stroke(); g.setLineDash([]);
    var X = v * Math.cos(a) * t, Y = v * Math.sin(a) * t - gr * t * t / 2;
    g.fillStyle = C.gold; g.beginPath(); g.arc(30 + X * s, 270 - Y * s, 8, 0, 7); g.fill();
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = gr < 5 ? C.mars : C.earth; g.fillText(gr < 5 ? "Mars, g = 3.73" : "Earth, g = 9.81", 30, 30);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("range " + R.toFixed(1) + " m, top " + top.toFixed(1) + " m, " + T.toFixed(2) + " s in the air", 30, 56);
    out.textContent = "At " + v + " m/s and " + th + "° the ball lands " + R.toFixed(1) + " m away after " + T.toFixed(2) + " s (no air; drawn to scale, scale changes with the throw).";
  }
  var film = k.loop(2.5, draw, { label: "Time" });
  k.slider("Speed v (m/s)", 2, 30, 1, v, function (x) { return x; }, function (x) { v = x; st.draw(); });
  k.slider("Angle θ", 5, 85, 1, th, function (x) { return x + "°"; }, function (x) { th = x; st.draw(); });
  k.buttons([["Earth", function () { gr = 9.81; st.draw(); }], ["Mars", function () { gr = 3.73; st.draw(); }]], true);
  st.draw = function () { draw(film.t()); };
});
