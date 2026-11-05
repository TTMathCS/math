/* The binomial distribution: n tries, each a success with chance p. Bars give the chance of each number of successes,
   n choose x · p^x · (1 − p)^(n − x). The gold line is the mean, n p. */
PLAY("binom", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), n = 10, p = 0.5;
  function choose(a, b) { var r = 1; for (var i = 1; i <= b; i++) r = r * (a - b + i) / i; return r; }
  function draw() {
    var P = []; for (var x = 0; x <= n; x++) P.push(choose(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x)); var mx = Math.max.apply(0, P), bw = 520 / (n + 1);
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    P.forEach(function (q, x) { var h = q / mx * 180; g.fillStyle = C.ice; g.fillRect(30 + x * bw + 1, 210 - h, bw - 2, h); if (n <= 20 || x % 5 === 0) { g.fillStyle = C.ink3; g.font = F(13, 700); g.textAlign = "center"; g.fillText(x, 30 + x * bw + bw / 2, 228); } });
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); g.moveTo(30 + (n * p + 0.5) * bw, 20); g.lineTo(30 + (n * p + 0.5) * bw, 210); g.stroke();
    var best = P.indexOf(mx); out.textContent = n + " tries, p = " + p + ": mean n p = " + +(n * p).toFixed(2) + ", standard deviation √(n p (1 − p)) = " + Math.sqrt(n * p * (1 - p)).toFixed(2) + ". Most likely: " + best + " successes (" + (100 * mx).toFixed(1) + "%).";
  }
  k.slider("Tries n", 1, 40, 1, n, function (v) { return v; }, function (v) { n = +v; draw(); });
  k.slider("Chance p", 0.05, 0.95, 0.05, p, function (v) { return (+v).toFixed(2); }, function (v) { p = +v; draw(); });
  st.draw = draw; draw();
});
