/* A made-up monthly series: a slow trend, a yearly season and noise. A moving average of w months smooths the noise
   away; a window of 12 months cancels the season too and leaves the trend. */
PLAY("smooth", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), w = 3, y = [], seed = 7;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  for (var i = 0; i < 96; i++) y.push(10 + i * 0.06 + 3 * Math.sin(i / 12 * 2 * Math.PI) + (rnd() - 0.5) * 3);
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    function sx(t) { return 30 + t / 95 * 540; } function sy(v) { return 270 - (v - 4) / 16 * 240; }
    g.strokeStyle = C.ink3; g.beginPath(); y.forEach(function (v, t) { t ? g.lineTo(sx(t), sy(v)) : g.moveTo(sx(t), sy(v)); }); g.stroke();
    g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath(); var on = false;
    for (var t = 0; t < 96; t++) { var a = t - Math.floor((w - 1) / 2), b = a + w; if (a < 0 || b > 96) continue; var s = 0; for (var j = a; j < b; j++) s += y[j]; var m = s / w; on ? g.lineTo(sx(t), sy(m)) : g.moveTo(sx(t), sy(m)); on = true; } g.stroke(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.gold; g.fillText("moving average of " + w + " months", 30, 26);
    out.textContent = w === 12 ? "A 12-month window holds one of every month, so the season cancels and only the trend is left." : w === 1 ? "No smoothing: trend, season and noise all together." : "A " + w + "-month window smooths the noise; try 12 to cancel the yearly season.";
  }
  k.slider("Window w", 1, 24, 1, w, function (v) { return v; }, function (v) { w = v; draw(); });
  st.draw = draw;
});
