/* Random events in time: on average λ arrivals per minute, each one independent of the others (the browser's random
   numbers). Top: one hour of arrivals. Bottom: how many came in each minute, against the Poisson chances
   e^(−λ) λᵏ / k! (gold dots). The gaps between arrivals have an exponential spread, mean 1/λ. */
PLAY("poisson", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), lam = 3, times = [];
  function make() { times = []; var t = 0; for (;;) { t += -Math.log(1 - Math.random()) / lam; if (t > 60) break; times.push(t); } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, 50); g.lineTo(580, 50); g.stroke();
    g.strokeStyle = C.ice; times.forEach(function (t) { var x = 20 + t / 60 * 560; g.beginPath(); g.moveTo(x, 34); g.lineTo(x, 66); g.stroke(); });
    var cnt = []; for (var m = 0; m < 60; m++) cnt.push(0); times.forEach(function (t) { cnt[Math.floor(t)]++; });
    var tally = []; for (var j = 0; j <= 14; j++) tally.push(0); cnt.forEach(function (c) { tally[Math.min(c, 14)]++; });
    var top = 22, bw = 26, fact = 1;
    for (j = 0; j <= 14; j++) { if (j) fact *= j; var x = 30 + j * 28, h = tally[j] / top * 160; g.fillStyle = C.ice; g.globalAlpha = 0.6; g.fillRect(x, 260 - h, bw, h); g.globalAlpha = 1; var e = 60 * Math.exp(-lam) * Math.pow(lam, j) / fact; g.fillStyle = C.gold; g.beginPath(); g.arc(x + bw / 2, 260 - e / top * 160, 5, 0, 7); g.fill(); if (j % 2 === 0) { g.font = F(17, 500); g.fillStyle = C.ink3; g.textAlign = "center"; g.fillText(j, x + bw / 2, 284); } }
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText(times.length + " arrivals in 60 minutes", 20, 24);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("bars: minutes", 440, 100); g.fillText("with k arrivals", 440, 124); g.fillStyle = C.gold; g.fillText("dots: Poisson", 440, 150);
    out.textContent = "At " + lam + " a minute on average, this hour had " + times.length + " arrivals. Some minutes had none and some several, just as the Poisson chances say.";
  }
  k.slider("Rate λ per minute", 0.5, 8, 0.5, lam, function (v) { return v; }, function (v) { lam = v; make(); draw(); });
  k.buttons([["Another hour", function () { make(); draw(); }]]);
  st.draw = draw;
});
