/* What "95% confidence" means. Draw 40 samples of n from a population whose mean we know is 50 (spread 10; the
   browser's random numbers), and work out x̄ ± 1.96 × 10/√n for each. About 95 in 100 of the intervals catch the
   true mean; the red ones miss it. */
PLAY("cicover", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 10, z = 1.96, iv = [], total = 0, hit = 0;
  function norm() { var u = 1 - Math.random(), v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function make() { iv = []; for (var r = 0; r < 40; r++) { var s = 0; for (var i = 0; i < n; i++) s += 50 + 10 * norm(); var m = s / n, e = z * 10 / Math.sqrt(n); iv.push([m - e, m + e]); total++; if (m - e <= 50 && 50 <= m + e) hit++; } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    function sx(v) { return 30 + (v - 35) / 30 * 380; }
    g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.moveTo(sx(50), 10); g.lineTo(sx(50), 290); g.stroke(); g.lineWidth = 3;
    iv.forEach(function (a, i) { var y = 16 + i * 6.8, ok = a[0] <= 50 && 50 <= a[1]; g.strokeStyle = ok ? C.ice : C.red; g.beginPath(); g.moveTo(sx(Math.max(35, a[0])), y); g.lineTo(sx(Math.min(65, a[1])), y); g.stroke(); });
    g.lineWidth = 1; var now = iv.filter(function (a) { return a[0] <= 50 && 50 <= a[1]; }).length;
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText(now + " of 40 caught 50", 430, 50);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("so far: " + hit + " of " + total, 430, 84); g.fillText("= " + (hit / total * 100).toFixed(1) + "%", 430, 110);
    out.textContent = "Each line is one sample's interval. The method catches the true mean about 95% of the time; any single interval either caught it or did not.";
  }
  k.slider("Sample size n", 4, 100, 1, n, function (v) { return v; }, function (v) { n = v; make(); draw(); });
  k.buttons([["40 more samples", function () { make(); draw(); }]]);
  st.draw = draw;
});
