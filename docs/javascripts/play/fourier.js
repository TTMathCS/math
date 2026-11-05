/* A square wave from sine waves: (4/π)(sin x + sin 3x / 3 + sin 5x / 5 + …). Add terms and the sum hugs the square
   wave, except for an overshoot of about 9% at each jump that never goes away (the Gibbs phenomenon). Press Sound to
   hear the sum played as a note. */
PLAY("fourier", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), N = 3;
  function S(x) { var s = 0; for (var j = 0; j < N; j++) { var m = 2 * j + 1; s += Math.sin(m * x) / m; } return 4 / Math.PI * s; }
  function sx(x) { return 20 + x / (4 * Math.PI) * 560; } function sy(y) { return 150 - y * 90; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.ink3; g.beginPath(); for (var q = 0; q < 4; q++) { var a = q * Math.PI, y = q % 2 ? -1 : 1; g.moveTo(sx(a), sy(y)); g.lineTo(sx(a + Math.PI), sy(y)); } g.stroke();
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, 150); g.lineTo(580, 150); g.stroke();
    g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath(); for (var x = 0; x <= 4 * Math.PI; x += 0.01) x ? g.lineTo(sx(x), sy(S(x))) : g.moveTo(sx(x), sy(S(x))); g.stroke(); g.lineWidth = 1;
    var mx = 0; for (x = 0.001; x < Math.PI; x += 0.001) mx = Math.max(mx, S(x));
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(N + " sine wave" + (N > 1 ? "s" : ""), 30, 30);
    g.fillStyle = C.ink2; g.font = F(18, 500); g.fillText("highest point " + mx.toFixed(3), 30, 280);
    out.textContent = "With " + N + " terms the sum overshoots the square wave's height 1 by " + ((mx - 1) * 100).toFixed(1) + "%; with many terms it stays near 9%.";
  }
  k.slider("Terms", 1, 60, 1, N, function (v) { return v; }, function (v) { N = v; draw(); });
  k.buttons([["Sound", function () { var ac = k.audio(); if (!ac) return; var t0 = ac.currentTime, gn = ac.createGain(); gn.gain.setValueAtTime(0.0001, t0); gn.gain.exponentialRampToValueAtTime(0.12, t0 + 0.05); gn.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.2); gn.connect(ac.destination);
    for (var j = 0; j < Math.min(N, 30); j++) { var m = 2 * j + 1; if (220 * m > 12000) break; var o = ac.createOscillator(), gg = ac.createGain(); o.frequency.value = 220 * m; gg.gain.value = 1 / m; o.connect(gg); gg.connect(gn); o.start(t0); o.stop(t0 + 1.25); } }]]);
  st.draw = draw;
});
