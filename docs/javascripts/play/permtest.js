/* A permutation test, with made-up scores for two groups of eight. If the treatment did nothing, the labels are
   arbitrary: shuffle them many times (the browser's random numbers) and see how often a shuffle gives a gap in means
   at least as big as the real one. That share is the p-value; no bell-curve assumption needed. */
PLAY("permtest", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out();
  var A = [12, 15, 14, 17, 13, 18, 16, 15], Bv = [11, 12, 10, 13, 14, 11, 12, 13], diffs = [], obs;
  function mean(x) { return x.reduce(function (s, v) { return s + v; }, 0) / x.length; }
  obs = mean(A) - mean(Bv);
  function shuffle(m) { var all = A.concat(Bv); for (var r = 0; r < m; r++) { for (var i = all.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = all[i]; all[i] = all[j]; all[j] = t; } diffs.push(mean(all.slice(0, 8)) - mean(all.slice(8))); } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var lo = -4, hi = 4, Bn = 32, bins = []; for (var i = 0; i < Bn; i++) bins.push(0);
    diffs.forEach(function (d) { var b = Math.floor((d - lo) / (hi - lo) * Bn); if (b >= 0 && b < Bn) bins[b]++; });
    var top = Math.max(1, Math.max.apply(null, bins)) * 1.1, bw = 380 / Bn, ext = diffs.filter(function (d) { return Math.abs(d) >= obs - 1e-9; }).length;
    bins.forEach(function (c, i) { var mid = lo + (i + 0.5) * (hi - lo) / Bn, hh = c / top * 200; g.fillStyle = Math.abs(mid) >= obs ? C.gold : C.ice; g.globalAlpha = 0.75; g.fillRect(30 + i * bw, 240 - hh, bw - 1, hh); }); g.globalAlpha = 1;
    var xo = 30 + (obs - lo) / (hi - lo) * 380; g.strokeStyle = C.red; g.lineWidth = 2; g.beginPath(); g.moveTo(xo, 30); g.lineTo(xo, 240); g.stroke(); g.lineWidth = 1;
    g.textAlign = "center"; g.font = F(17, 500); g.fillStyle = C.ink3; [-4, -2, 0, 2, 4].forEach(function (v) { g.fillText(v, 30 + (v - lo) / (hi - lo) * 380, 264); });
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.red; g.fillText("real gap " + obs.toFixed(2), 430, 50);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText(diffs.length.toLocaleString("en") + " shuffles", 430, 84); g.fillStyle = C.gold; g.fillText("as big: " + ext, 430, 110);
    g.fillText("p ≈ " + (diffs.length ? (ext / diffs.length).toFixed(4) : "?"), 430, 136);
    out.textContent = diffs.length ? "Only " + ext + " of " + diffs.length + " shuffles gave a gap of " + obs.toFixed(2) + " or more either way, so chance alone rarely explains it." : "Press Shuffle.";
  }
  k.buttons([["Shuffle 100", function () { shuffle(100); draw(); }], ["Shuffle 10,000", function () { shuffle(10000); draw(); }], ["Clear", function () { diffs = []; draw(); }]]);
  st.draw = draw; draw();
});
