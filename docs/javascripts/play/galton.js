/* probability/level-8/05-large-numbers-clt.md: a Galton board. Each ball meets 12 pins and goes left or right with
   even chances; where it lands is the number of rights, a binomial count. Many balls pile into the bell shape of the
   normal curve, as the central limit theorem says sums of many small random steps do. */
PLAY("galton", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 420, st = k.stage(W, H), g = st.g, out = k.out(), ROWS = 12, bins, balls, total, timer = 0;
  function reset() { bins = new Array(ROWS + 1).fill(0); balls = []; total = 0; }
  function step() {
    if (total < 600 && Math.random() < 0.6) { balls.push({ r: 0, x: 0, f: 0 }); total++; }
    balls.forEach(function (b) { b.f++; if (b.f % 4 === 0) { b.r++; if (Math.random() < 0.5) b.x++; } });
    balls = balls.filter(function (b) { if (b.r > ROWS) { bins[b.x]++; return false; } return true; });
    draw(); if (total >= 600 && !balls.length) { stop(); out.textContent = "600 balls: most land near the middle, few at the edges. The dashed line is the normal curve with the same mean and spread."; }
  }
  function stop() { cancelAnimationFrame(timer); timer = 0; }
  function loop() { step(); if (timer) timer = requestAnimationFrame(loop); }
  function draw() {
    var cx = 300, dx = 22, dy = 16, top = 30;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var r = 0; r < ROWS; r++) for (var i = 0; i <= r; i++) { g.fillStyle = C.ink3; g.beginPath(); g.arc(cx + (i - r / 2) * dx, top + r * dy, 2.5, 0, 7); g.fill(); }
    balls.forEach(function (b) { g.fillStyle = C.gold; g.beginPath(); g.arc(cx + (b.x - b.r / 2) * dx, top + b.r * dy - 8 + (b.f % 4) * 2, 4, 0, 7); g.fill(); });
    var base = H - 20, max = Math.max(10, Math.max.apply(null, bins)), sc = 170 / max;
    for (i = 0; i <= ROWS; i++) { g.fillStyle = C.rust; g.fillRect(cx + (i - ROWS / 2) * dx - 9, base - bins[i] * sc, 18, bins[i] * sc); }
    var n = bins.reduce(function (s, v) { return s + v; }, 0);
    if (n > 20) { var mu = ROWS / 2, sd = Math.sqrt(ROWS) / 2; g.setLineDash([4, 5]); g.strokeStyle = C.ice; g.lineWidth = 2; g.beginPath();
      for (var x = -0.5; x <= ROWS + 0.5; x += 0.1) { var y = n * Math.exp(-((x - mu) * (x - mu)) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI)); g[x === -0.5 ? "moveTo" : "lineTo"](cx + (x - ROWS / 2) * dx, base - y * sc); }
      g.stroke(); g.setLineDash([]); }
    g.font = F(17, 600, "m"); g.fillStyle = C.ink; g.fillText(n + " balls", 14, 26);
  }
  reset(); st.draw = draw; draw();
  k.buttons([["Drop 600 balls", function () { stop(); reset(); timer = requestAnimationFrame(loop); out.textContent = "Each ball goes left or right at every pin, like a coin toss."; }], ["Stop", stop]]);
  if (window.IntersectionObserver) new IntersectionObserver(function (es) { if (!es[0].isIntersecting) stop(); }).observe(fig);
});
