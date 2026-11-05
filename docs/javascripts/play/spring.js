/* A mass on a spring: x = A cos(ωt) with ω = √(k/m). The period 2π√(m/k) does not depend on how far you pull it
   (the amplitude). The bars show energy passing between the spring (potential) and the mass (kinetic); the total
   stays the same. Press Play. */
PLAY("spring", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), kk = 20, m = 1, A = 0.5;
  function draw(tt) {
    var w = Math.sqrt(kk / m), T = 2 * Math.PI / w, t = tt * 6, x = A * Math.cos(w * t), vv = -A * w * Math.sin(w * t), U = kk * x * x / 2, K = m * vv * vv / 2, E = kk * A * A / 2;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var X = 230 + x * 220, n = 14; g.strokeStyle = C.ink2; g.lineWidth = 2; g.beginPath(); g.moveTo(20, 140);
    for (var i = 1; i < n; i++) g.lineTo(20 + (X - 40 - 20) * i / n, 140 + (i % 2 ? -14 : 14)); g.lineTo(X - 40, 140); g.stroke(); g.lineWidth = 1;
    g.fillStyle = C.ink3; g.fillRect(10, 90, 10, 100); g.fillStyle = C.gold; g.fillRect(X - 40, 110, 60 + m * 6, 60);
    g.strokeStyle = C.line; g.setLineDash([4, 4]); g.beginPath(); g.moveTo(230, 80); g.lineTo(230, 200); g.stroke(); g.setLineDash([]);
    [[U, C.ice, "spring"], [K, C.rust, "mass"]].forEach(function (b, i) { var h = b[0] / E * 60; g.fillStyle = b[1]; g.fillRect(470 + i * 50, 80 - h, 36, h); g.font = F(17, 500); g.fillStyle = C.ink2; g.textAlign = "center"; g.fillText(b[2], 488 + i * 50, 100); });
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText("period " + T.toFixed(2) + " s", 20, 40);
    out.textContent = "k = " + kk + " N/m and m = " + m + " kg give a period of 2π√(m/k) = " + T.toFixed(2) + " s, whatever the amplitude.";
  }
  var film = k.loop(6, draw, { label: "Time" });
  k.slider("Spring k (N/m)", 5, 80, 1, kk, function (x) { return x; }, function (x) { kk = x; st.draw(); });
  k.slider("Mass m (kg)", 0.5, 5, 0.5, m, function (x) { return x; }, function (x) { m = x; st.draw(); });
  k.slider("Pull A (m)", 0.1, 0.8, 0.05, A, function (x) { return x.toFixed(2); }, function (x) { A = x; st.draw(); });
  st.draw = function () { draw(film.t()); };
});
