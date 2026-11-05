/* probability/level-1/05-coin-flip-experiment.md: flip a fair coin many times (the browser's random numbers stand in
   for the coin). The line is the share of heads so far: jumpy at first, then settling near one half. */
PLAY("coins", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 320, st = k.stage(W, H), g = st.g, out = k.out(), flips = [], timer = 0;
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var n = flips.length, heads = 0, N = 1000;
    g.strokeStyle = C.line; g.lineWidth = 1; g.beginPath(); g.moveTo(40, 160); g.lineTo(580, 160); g.stroke();
    g.font = F(14, 500); g.fillStyle = C.ink3; g.fillText("half", 6, 164); g.fillText("all heads", 6, 44); g.fillText("no heads", 6, 284);
    g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath();
    for (var i = 0; i < n; i++) { heads += flips[i]; g[i ? "lineTo" : "moveTo"](40 + i / N * 540, 280 - heads / (i + 1) * 240); } g.stroke();
    var last = flips.slice(-12).map(function (f) { return f ? "H" : "T"; }).join(" ");
    g.font = F(20, 600, "m"); g.fillStyle = C.ink; g.fillText(n + " flips: " + heads + " heads (" + (n ? Math.round(heads / n * 100) : 0) + "%)", 110, 30);
    g.font = F(16, 500, "m"); g.fillStyle = C.ink2; g.fillText(last, 110, 306);
  }
  function stop() { clearInterval(timer); timer = 0; }
  st.draw = draw; draw();
  k.buttons([["Flip 1", function () { stop(); if (flips.length < 1000) flips.push(Math.random() < 0.5 ? 1 : 0); draw(); }],
    ["Flip 1,000", function () { stop(); flips = []; timer = setInterval(function () { for (var q = 0; q < 8 && flips.length < 1000; q++) flips.push(Math.random() < 0.5 ? 1 : 0); draw(); if (flips.length >= 1000) stop(); }, 30); }],
    ["Start again", function () { stop(); flips = []; draw(); }]]);
  out.textContent = "Flip and watch the share of heads. A few flips can be far from half; a thousand rarely are.";
});
