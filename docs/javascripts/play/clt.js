/* The central limit theorem by simulation. The population is lopsided: waiting times with an exponential spread,
   mean 1. Take a sample of n, average it, and repeat 2,000 times (the browser's random numbers). The averages pile
   up in a bell shape round 1, narrower as n grows, with spread 1/√n (the gold curve). */
PLAY("clt", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 1, means = [];
  function make() { means = []; for (var r = 0; r < 2000; r++) { var s = 0; for (var i = 0; i < n; i++) s += -Math.log(1 - Math.random()); means.push(s / n); } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var B = 60, lo = 0, hi = 3, bins = []; for (var i = 0; i < B; i++) bins.push(0);
    means.forEach(function (m) { var b = Math.floor((m - lo) / (hi - lo) * B); if (b >= 0 && b < B) bins[b]++; });
    var top = Math.max.apply(null, bins) * 1.1, bw = 400 / B;
    bins.forEach(function (c, i) { var h = c / top * 230; g.fillStyle = C.ice; g.globalAlpha = 0.7; g.fillRect(30 + i * bw, 260 - h, bw - 1, h); }); g.globalAlpha = 1;
    var sd = 1 / Math.sqrt(n); g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath();
    for (var x = lo; x <= hi; x += 0.01) { var d = Math.exp(-(x - 1) * (x - 1) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI)), y = d * 2000 * (hi - lo) / B / top * 230; x === lo ? g.moveTo(30 + (x - lo) / (hi - lo) * 400, 260 - y) : g.lineTo(30 + (x - lo) / (hi - lo) * 400, 260 - Math.min(y, 250)); }
    if (n >= 5) g.stroke(); g.lineWidth = 1;
    g.textAlign = "center"; g.font = F(17, 500); g.fillStyle = C.ink3; [0, 1, 2, 3].forEach(function (v) { g.fillText(v, 30 + v / 3 * 400, 284); });
    var mu = means.reduce(function (s, m) { return s + m; }, 0) / means.length, v2 = Math.sqrt(means.reduce(function (s, m) { return s + (m - mu) * (m - mu); }, 0) / means.length);
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText("samples of " + n, 450, 50);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("mean " + mu.toFixed(3), 450, 84); g.fillText("spread " + v2.toFixed(3), 450, 110); g.fillStyle = C.gold; g.fillText("1/√n = " + sd.toFixed(3), 450, 136);
    out.textContent = "2,000 averages of " + n + " lopsided waiting times: " + (n === 1 ? "with one value each, the lopsided shape itself." : "already close to the bell curve, centred on 1 with spread about " + sd.toFixed(3) + ".");
  }
  k.slider("Sample size n", 1, 60, 1, n, function (v) { return v; }, function (v) { n = v; make(); draw(); });
  k.buttons([["Sample again", function () { make(); draw(); }]]);
  st.draw = draw;
});
