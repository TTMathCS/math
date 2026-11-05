/* Why divide by n − 1. Take many small samples from a population with variance 1 (the browser's random numbers).
   Averaged over the samples, dividing the sum of squared gaps from the sample mean by n comes out too small, by the
   factor (n − 1)/n; dividing by n − 1 comes out right. */
PLAY("nminus1", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 3, A = 0, B = 0, reps = 0;
  function norm() { var u = 1 - Math.random(), v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function run(m) { for (var r = 0; r < m; r++) { var x = [], s = 0; for (var i = 0; i < n; i++) { x.push(norm()); s += x[i]; } var mu = s / n, ss = 0; x.forEach(function (v) { ss += (v - mu) * (v - mu); }); A += ss / n; B += ss / (n - 1); reps++; } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var a = reps ? A / reps : 0, b = reps ? B / reps : 0, sc = 220;
    function bar(x, v, col, lab) { g.fillStyle = col; g.fillRect(x, 260 - v * sc / 1.3, 90, v * sc / 1.3); g.textAlign = "center"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText(v.toFixed(3), x + 45, 250 - v * sc / 1.3); g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText(lab, x + 45, 284); }
    bar(60, a, C.rust, "÷ n"); bar(200, b, C.ice, "÷ (n − 1)");
    g.strokeStyle = C.gold; g.setLineDash([6, 5]); g.beginPath(); g.moveTo(40, 260 - sc / 1.3); g.lineTo(320, 260 - sc / 1.3); g.stroke(); g.setLineDash([]);
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.gold; g.fillText("true variance 1", 340, 260 - sc / 1.3 + 6);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText(reps.toLocaleString("en") + " samples of " + n, 340, 40); g.fillText("(n − 1)/n = " + ((n - 1) / n).toFixed(3), 340, 66);
    out.textContent = "Over " + reps.toLocaleString("en") + " samples of " + n + ": dividing by n averages " + a.toFixed(3) + ", dividing by n − 1 averages " + b.toFixed(3) + ". The sample mean sits closer to its own data than the true mean does, so the gaps look too small.";
  }
  k.slider("Sample size n", 2, 10, 1, n, function (v) { return v; }, function (v) { n = v; A = 0; B = 0; reps = 0; run(5000); draw(); });
  k.buttons([["5,000 more samples", function () { run(5000); draw(); }]]);
  st.draw = draw;
});
