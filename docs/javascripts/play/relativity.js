/* Time dilation. A clock moving at speed v ticks slower by the factor γ = 1/√(1 − v²/c²). Two light clocks: in the
   moving one the light runs a longer, slanted path, so each tick takes longer. Moving lengths shrink by the same γ.
   Press Play. */
PLAY("relativity", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), b = 0.6;
  function draw(tt) {
    var gam = 1 / Math.sqrt(1 - b * b), t = tt * 10, h = 120;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    function clock(x0, moving) { var per = moving ? 2 * gam : 2, ph = (t % per) / per, up = ph < 0.5, y = up ? 240 - ph * 2 * h : 240 - (1 - ph) * 2 * h, x = moving ? x0 + (t * 20 * b) % 200 : x0, wd = moving ? 50 / gam : 50;
      g.strokeStyle = C.ink3; g.beginPath(); g.moveTo(x - wd / 2, 240 + 4); g.lineTo(x + wd / 2, 240 + 4); g.moveTo(x - wd / 2, 240 - h - 4); g.lineTo(x + wd / 2, 240 - h - 4); g.stroke();
      g.fillStyle = C.gold; g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); g.font = F(17, 600); g.fillStyle = C.ink2; g.textAlign = "center"; g.fillText("ticks: " + Math.floor(t / per), moving ? 400 : x0, 280); }
    clock(100, false); clock(300, true);
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText("γ = " + gam.toFixed(3), 20, 40);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("still", 85, 100); g.fillText("moving at " + Math.round(b * 100) + "% of light speed", 300, 100);
    out.textContent = "At " + Math.round(b * 100) + "% of light speed γ = " + gam.toFixed(3) + ": while the still clock ticks " + gam.toFixed(2) + " times, the moving one ticks once, and it is " + (1 / gam).toFixed(2) + " times as wide.";
  }
  var film = k.loop(10, draw, { label: "Time", start0: true });
  k.slider("Speed (share of c)", 0, 0.99, 0.01, b, function (x) { return Math.round(x * 100) + "%"; }, function (x) { b = x; st.draw(); });
  st.draw = function () { draw(film.t()); };
});
