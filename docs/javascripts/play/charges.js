/* Two point charges and their electric field. Each arrow points the way a small positive test charge would be pushed;
   brighter means stronger. Field from each charge: E = kq/r², added as vectors (superposition). Like charges push the
   field lines apart, unlike charges join them. */
PLAY("charges", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), q2 = -1, d = 200;
  function draw() {
    var Q = [[300 - d / 2, 150, 1], [300 + d / 2, 150, q2]];
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var x = 15; x < W; x += 30) for (var y = 15; y < H; y += 30) {
      var ex = 0, ey = 0, near = false; Q.forEach(function (q) { var dx = x - q[0], dy = y - q[1], r2 = dx * dx + dy * dy; if (r2 < 400) near = true; var r = Math.sqrt(r2); ex += q[2] * dx / (r2 * r); ey += q[2] * dy / (r2 * r); });
      if (near) continue; var L = Math.hypot(ex, ey); if (!L) continue; var s = Math.min(1, L * 3000), ux = ex / L, uy = ey / L;
      g.strokeStyle = "rgba(246,196,83," + (0.15 + 0.85 * s) + ")"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x - ux * 10, y - uy * 10); g.lineTo(x + ux * 10, y + uy * 10); g.stroke();
      g.beginPath(); g.moveTo(x + ux * 10, y + uy * 10); g.lineTo(x + ux * 4 - uy * 4, y + uy * 4 + ux * 4); g.lineTo(x + ux * 4 + uy * 4, y + uy * 4 - ux * 4); g.fillStyle = g.strokeStyle; g.fill();
    }
    g.lineWidth = 1; Q.forEach(function (q) { if (!q[2]) return; g.fillStyle = q[2] > 0 ? C.red : C.earth; g.beginPath(); g.arc(q[0], q[1], 14, 0, 7); g.fill(); g.fillStyle = C.ink; g.font = F(22, 700); g.textAlign = "center"; g.fillText(q[2] > 0 ? "+" : "−", q[0], q[1] + 8); });
    out.textContent = q2 > 0 ? "Two like charges: the field between them cancels at the midpoint and the arrows turn away." : q2 < 0 ? "Opposite charges: the arrows run from + to −, strongest on the line between them." : "One charge alone: arrows point straight out, weakening with 1/r².";
  }
  k.buttons([["Opposite", function () { q2 = -1; draw(); }], ["Alike", function () { q2 = 1; draw(); }], ["One alone", function () { q2 = 0; draw(); }]], true);
  k.slider("Distance apart", 60, 400, 10, d, function (x) { return x; }, function (x) { d = x; draw(); });
  st.draw = draw;
});
