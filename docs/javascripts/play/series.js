/* Partial sums of a series, term by term. The harmonic series 1 + 1/2 + 1/3 + … creeps up for ever; 1 + 1/4 + 1/9 + …
   settles at π²/6 (Euler's Basel problem); 1 − 1/2 + 1/3 − … zigzags in to ln 2; 1 + 1/2 + 1/4 + … reaches 2. */
PLAY("series", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), N = 30, pick = 0;
  var S = [["Harmonic", function (n) { return 1 / n; }, null, "never settles"], ["Squares", function (n) { return 1 / (n * n); }, Math.PI * Math.PI / 6, "π²/6"], ["Alternating", function (n) { return (n % 2 ? 1 : -1) / n; }, Math.LN2, "ln 2"], ["Halves", function (n) { return Math.pow(2, 1 - n); }, 2, "2"]];
  function draw() {
    var s = S[pick], sum = 0, pts = [], top = 0;
    for (var n = 1; n <= N; n++) { sum += s[1](n); pts.push(sum); top = Math.max(top, sum); }
    top = Math.max(top, s[2] || 0) * 1.15;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var L = 30, R = 420, B = 270, T = 20, bw = (R - L) / N;
    if (s[2]) { g.setLineDash([6, 5]); g.strokeStyle = C.gold; g.beginPath(); g.moveTo(L, B - s[2] / top * (B - T)); g.lineTo(R, B - s[2] / top * (B - T)); g.stroke(); g.setLineDash([]); }
    pts.forEach(function (v, i) { g.fillStyle = C.ice; g.globalAlpha = 0.8; g.fillRect(L + i * bw + 1, B - v / top * (B - T), Math.max(1, bw - 2), v / top * (B - T)); });
    g.globalAlpha = 1; g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText(["Σ 1/n", "Σ 1/n²", "Σ ±1/n", "Σ 1/2ⁿ⁻¹"][pick], 440, 44);
    g.font = F(18, 500); g.fillStyle = C.ice; g.fillText(N + " terms: " + sum.toFixed(4), 440, 82);
    g.fillStyle = C.gold; g.fillText("limit: " + s[3], 440, 112); if (s[2]) g.fillText("= " + s[2].toFixed(4), 440, 138);
    out.textContent = s[2] ? "After " + N + " terms the sum is " + sum.toFixed(5) + ", " + Math.abs(sum - s[2]).toExponential(1) + " from its limit." : "After " + N + " terms the harmonic sum is " + sum.toFixed(3) + ", about ln " + N + " + 0.577: it grows without bound, only very slowly.";
  }
  k.buttons(S.map(function (s, i) { return [s[0], function () { pick = i; draw(); }]; }), true);
  k.slider("Terms", 1, 200, 1, N, function (v) { return v; }, function (v) { N = v; draw(); });
  st.draw = draw;
});
