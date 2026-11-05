/* Two carts collide on a straight track. Momentum m₁v₁ + m₂v₂ is the same before and after, always. In an elastic
   collision kinetic energy is kept too; in a perfectly inelastic one the carts stick and some energy turns to heat
   and sound. Press Play. */
PLAY("collide", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), m1 = 2, m2 = 1, u1 = 3, u2 = -1, stick = false;
  function after() { if (stick) { var v = (m1 * u1 + m2 * u2) / (m1 + m2); return [v, v]; } return [((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2), ((m2 - m1) * u2 + 2 * m1 * u1) / (m1 + m2)]; }
  function draw(tt) {
    var t = tt * 4 - 2, v = after(), x1 = t < 0 ? u1 * t : v[0] * t, x2 = t < 0 ? u2 * t : v[1] * t, s = 22;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(10, 180); g.lineTo(590, 180); g.stroke();
    var w1 = 30 + m1 * 10, w2 = 30 + m2 * 10;
    g.fillStyle = C.gold; g.fillRect(300 + x1 * s - w1, 140, w1, 38); g.fillStyle = C.ice; g.fillRect(300 + x2 * s, 140, w2, 38);
    g.font = F(17, 700); g.fillStyle = C.bg; g.textAlign = "center"; g.fillText(m1 + " kg", 300 + x1 * s - w1 / 2, 165); g.fillText(m2 + " kg", 300 + x2 * s + w2 / 2, 165);
    var p0 = m1 * u1 + m2 * u2, k0 = (m1 * u1 * u1 + m2 * u2 * u2) / 2, k1 = (m1 * v[0] * v[0] + m2 * v[1] * v[1]) / 2;
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText(t < 0 ? "before" : "after", 20, 40);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("momentum " + p0.toFixed(2) + " kg·m/s" + (t < 0 ? "" : " (same)"), 20, 70);
    g.fillText("kinetic energy " + (t < 0 ? k0 : k1).toFixed(2) + " J", 20, 96);
    out.textContent = "After: " + v[0].toFixed(2) + " and " + v[1].toFixed(2) + " m/s. Momentum stays " + p0.toFixed(2) + "; kinetic energy goes from " + k0.toFixed(2) + " to " + k1.toFixed(2) + " J" + (stick ? ", the rest lost to heat and sound." : ", all kept.");
  }
  var film = k.loop(3, draw, { label: "Time", start0: true });
  k.slider("Mass 1 (kg)", 1, 5, 1, m1, function (x) { return x; }, function (x) { m1 = x; st.draw(); });
  k.slider("Mass 2 (kg)", 1, 5, 1, m2, function (x) { return x; }, function (x) { m2 = x; st.draw(); });
  k.buttons([["Elastic", function () { stick = false; st.draw(); }], ["They stick", function () { stick = true; st.draw(); }]], true);
  st.draw = function () { draw(film.t()); };
});
