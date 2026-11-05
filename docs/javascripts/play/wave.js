/* Waves. data-mode="standing": two equal waves running opposite ways add up to a standing wave, with nodes that never
   move; on a string fixed at both ends only whole numbers of half-wavelengths fit (harmonic n). "doppler": a source
   moving at a share of the wave speed bunches its wave crests ahead and spreads them behind, so the pitch heard in
   front is higher: f′ = f / (1 − v/c). Press Play; Sound plays the harmonic. */
PLAY("wave", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "standing", n = 2, vs = 0.5;
  function draw(tt) {
    var t = tt * 8; g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    if (mode === "standing") {
      var L = 30, R = 570, kx = n * Math.PI / (R - L);
      [[1, C.ice, 1], [-1, C.rust, 1]].forEach(function (d) { g.strokeStyle = d[1]; g.globalAlpha = 0.45; g.beginPath(); for (var x = L; x <= R; x += 3) { var y = 150 - 45 * Math.sin(kx * (x - L) - d[0] * t * 2); x === L ? g.moveTo(x, y) : g.lineTo(x, y); } g.stroke(); });
      g.globalAlpha = 1; g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); for (var x2 = L; x2 <= R; x2 += 3) { var y2 = 150 - 45 * (Math.sin(kx * (x2 - L) - t * 2) + Math.sin(kx * (x2 - L) + t * 2)); x2 === L ? g.moveTo(x2, y2) : g.lineTo(x2, y2); } g.stroke(); g.lineWidth = 1;
      for (var j = 0; j <= n; j++) { g.fillStyle = C.ink; g.beginPath(); g.arc(L + j * (R - L) / n, 150, 5, 0, 7); g.fill(); }
      g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText("harmonic " + n + ": " + n + " half-wave" + (n > 1 ? "s" : "") + ", " + (n + 1) + " nodes", 30, 30);
      out.textContent = "Blue and orange run opposite ways; their sum (gold) only swells and shrinks in place. Harmonic " + n + " has " + n + " times the frequency of the first.";
    } else {
      var c = 60, sx = 120 + (tt * 8 * c * vs);
      for (var e = 0; e < 14; e++) { var te = t - e * 0.55; if (te < 0) continue; var ex = 120 + (te * c * vs), r = (t - te) * c; if (te * c * vs > 360 * Math.floor(t * c * vs / 360) - 1e-9 || true) { g.strokeStyle = "rgba(156,201,234," + Math.max(0.1, 1 - e / 14) + ")"; g.beginPath(); g.arc(120 + (te * c * vs), 150, r, 0, 7); g.stroke(); } }
      g.fillStyle = C.gold; g.beginPath(); g.arc(120 + (t * c * vs), 150, 8, 0, 7); g.fill();
      g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText("source at " + Math.round(vs * 100) + "% of wave speed", 20, 30);
      g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("ahead: × " + (1 / (1 - vs)).toFixed(2) + "   behind: × " + (1 / (1 + vs)).toFixed(2), 20, 56);
      out.textContent = "Crests pile up in front of the moving source and spread out behind: a listener ahead hears " + (1 / (1 - vs)).toFixed(2) + " times the pitch, one behind " + (1 / (1 + vs)).toFixed(2) + " times.";
    }
  }
  var film = k.loop(8, draw, { label: "Time", repeat: true, start0: true });
  if (mode === "standing") { k.slider("Harmonic n", 1, 6, 1, n, function (x) { return x; }, function (x) { n = x; st.draw(); });
    k.buttons([["Sound", function () { var ac = k.audio(); if (!ac) return; var o = ac.createOscillator(), gn = ac.createGain(), t0 = ac.currentTime; o.frequency.value = 110 * n; gn.gain.setValueAtTime(0.0001, t0); gn.gain.exponentialRampToValueAtTime(0.15, t0 + 0.05); gn.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.2); o.connect(gn); gn.connect(ac.destination); o.start(t0); o.stop(t0 + 1.3); }]]); }
  else k.slider("Source speed", 0, 0.9, 0.05, vs, function (x) { return Math.round(x * 100) + "%"; }, function (x) { vs = x; st.draw(); });
  st.draw = function () { draw(film.t()); };
});
