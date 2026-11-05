/* The normal curve. Move the mean and the standard deviation; the shaded part is within k standard deviations of the
   mean: about 68% for k = 1, 95% for k = 2, 99.7% for k = 3. */
PLAY("normal", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), mu = 0, sd = 1, kk = 1;
  function erf(x) { var t = 1 / (1 + 0.3275911 * Math.abs(x)), y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x); return x < 0 ? -y : y; }
  function X(x) { return 300 + x * 45; }
  function pdf(x) { return Math.exp(-0.5 * Math.pow((x - mu) / sd, 2)) / (sd * Math.sqrt(2 * Math.PI)); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(20, 210); g.lineTo(580, 210); g.stroke();
    g.fillStyle = C.ink3; g.font = F(14, 600); g.textAlign = "center"; for (var v = -6; v <= 6; v += 2) g.fillText(v, X(v), 230);
    var sc = 160 / pdf(mu) * Math.min(1, 1 / sd); g.fillStyle = C.gold; g.globalAlpha = 0.4; g.beginPath(); g.moveTo(X(mu - kk * sd), 210);
    for (var x = mu - kk * sd; x <= mu + kk * sd; x += 0.02) g.lineTo(X(x), 210 - pdf(x) * sc * sd); g.lineTo(X(mu + kk * sd), 210); g.fill(); g.globalAlpha = 1;
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); for (x = -6.5; x <= 6.5; x += 0.02) g[x === -6.5 ? "moveTo" : "lineTo"](X(x), 210 - pdf(x) * sc * sd); g.stroke();
    var pr = erf(kk / Math.SQRT2); g.fillStyle = C.ink; g.font = F(20, 800); g.textAlign = "left"; g.fillText((100 * pr).toFixed(1) + "% within " + kk + " SD", 24, 34);
    out.textContent = "Mean " + mu + ", standard deviation " + sd + ": " + (100 * pr).toFixed(1) + "% of values lie between " + +(mu - kk * sd).toFixed(2) + " and " + +(mu + kk * sd).toFixed(2) + ".";
  }
  k.slider("Mean", -3, 3, 0.5, mu, function (v) { return v; }, function (v) { mu = +v; draw(); });
  k.slider("Standard deviation", 0.5, 2.5, 0.25, sd, function (v) { return v; }, function (v) { sd = +v; draw(); });
  k.slider("Within k SD", 0.5, 3, 0.5, kk, function (v) { return v; }, function (v) { kk = +v; draw(); });
  st.draw = draw; draw();
});
