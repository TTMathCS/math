/* A magnet falls through a coil. The flux Φ through the coil rises as the magnet comes in and falls as it leaves; the
   voltage is −dΦ/dt (Faraday's law), so it pulses one way, then the other (Lenz's law: the current always pushes back
   against the change). Faster magnet, taller and shorter pulses. Made-up units; press Play. */
PLAY("faraday", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 320, st = k.stage(W, H), g = st.g, out = k.out(), sp = 1;
  function phi(z) { return 1 / Math.pow(1 + z * z, 1.5); }   // flux of a small magnet on the coil's axis, z in coil radii
  function draw(t) {
    var T = 6 / sp, zs = -3 + 6 * t, tx = function (z) { return 230 + (z + 3) / 6 * 350; };
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    // the coil and the magnet, drawn on the left
    g.strokeStyle = C.rust; g.lineWidth = 3; for (var i = 0; i < 6; i++) { g.beginPath(); g.ellipse(110, 140 + i * 9, 50, 12, 0, 0, Math.PI); g.stroke(); } g.lineWidth = 1;
    var my = 162 + zs * 40; g.fillStyle = C.earth; g.fillRect(98, my - 30, 24, 30); g.fillStyle = C.red; g.fillRect(98, my, 24, 30);
    g.fillStyle = C.ink; g.font = F(17, 700); g.textAlign = "center"; g.fillText("N", 110, my + 22); g.fillText("S", 110, my - 9);
    // graphs on the right
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(230, 120); g.lineTo(580, 120); g.moveTo(230, 240); g.lineTo(580, 240); g.stroke();
    g.textAlign = "left"; g.font = F(17, 600); g.fillStyle = C.ice; g.fillText("flux Φ", 230, 30); g.fillStyle = C.gold; g.fillText("voltage −dΦ/dt", 230, 160);
    g.lineWidth = 2; g.strokeStyle = C.ice; g.beginPath();
    for (var z = -3; z <= zs + 0.001; z += 0.02) { var y = 120 - phi(z) * 80; z === -3 ? g.moveTo(tx(z), y) : g.lineTo(tx(z), y); } g.stroke();
    g.strokeStyle = C.gold; g.beginPath();
    for (z = -3; z <= zs + 0.001; z += 0.02) { var d = 3 * z / Math.pow(1 + z * z, 2.5) * sp, y2 = 240 - d * 30; z === -3 ? g.moveTo(tx(z), y2) : g.lineTo(tx(z), y2); } g.stroke(); g.lineWidth = 1;
    out.textContent = "Flux rises as the magnet enters and falls as it leaves, so the voltage pulses one way then the other. At speed " + sp + " the biggest pulse is " + (0.86 * sp).toFixed(2) + " (made-up units); a faster magnet also makes shorter pulses.";
  }
  var film = k.loop(3, draw, { label: "Time", start0: true });
  k.slider("Magnet speed", 1, 3, 1, 1, function (x) { return x + "×"; }, function (x) { sp = x; film.set(0); });
  st.draw = function () { draw(film.t()); };
});
