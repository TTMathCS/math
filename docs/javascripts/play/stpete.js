/* The St Petersburg game: flip a fair coin until the first head; if that takes k flips you win 2^k coins. Every k
   adds ½ᵏ × 2ᵏ = 1 to the expected win, so the expectation is infinite, yet the average over many plays creeps up
   only slowly, about with log₂ of the number of plays. The flips use the browser's random numbers. */
PLAY("stpete", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), plays = 0, sum = 0, hist = [], best = 0;
  function play(m) { for (var i = 0; i < m; i++) { var f = 1; while (Math.random() < 0.5) f++; var w = Math.pow(2, f); plays++; sum += w; best = Math.max(best, w); if (plays % Math.max(1, Math.floor(plays / 200)) === 0) hist.push([plays, sum / plays]); } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var L = 30, R = 400, T = 30, B = 260, top = 2; hist.forEach(function (h) { top = Math.max(top, h[1]); }); top *= 1.1;
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(L, T); g.lineTo(L, B); g.lineTo(R, B); g.stroke();
    if (plays) { var lx = function (p) { return L + Math.log(p) / Math.log(Math.max(plays, 2)) * (R - L); };
      g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); hist.forEach(function (h, i) { var x = lx(h[0]), y = B - h[1] / top * (B - T); i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke(); g.lineWidth = 1; }
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText(plays.toLocaleString("en") + " plays", 420, 50);
    g.font = F(17, 500); g.fillStyle = C.gold; g.fillText("average win " + (plays ? (sum / plays).toFixed(2) : "0"), 420, 80);
    g.fillStyle = C.ink2; g.fillText("biggest win " + best.toLocaleString("en"), 420, 108); g.fillText("log₂ plays ≈ " + (plays ? Math.log2(plays).toFixed(1) : 0), 420, 136);
    out.textContent = "The average so far is " + (plays ? (sum / plays).toFixed(2) : 0) + " coins, though the expected value is infinite: huge wins are so rare that the average grows only like log₂ n.";
  }
  k.buttons([["Play 10", function () { play(10); draw(); }], ["Play 100,000", function () { play(100000); draw(); }], ["Start again", function () { plays = 0; sum = 0; hist = []; best = 0; draw(); }]]);
  st.draw = draw; draw();
});
