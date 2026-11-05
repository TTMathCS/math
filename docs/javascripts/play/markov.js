/* A three-state Markov chain: tomorrow's weather depends only on today's. Start certain it is sunny and step the
   chance of each state forward; whatever the start, the bars settle to the same stationary distribution. The
   transition chances are made up. */
PLAY("markov", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out();
  var N = ["Sunny", "Cloudy", "Rainy"], P = [[0.7, 0.2, 0.1], [0.3, 0.4, 0.3], [0.2, 0.4, 0.4]], COL = [C.gold, C.ink2, C.ice];
  var p = [1, 0, 0], day = 0;
  function stepP() { var q = [0, 0, 0]; for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) q[j] += p[i] * P[i][j]; p = q; day++; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "center";
    p.forEach(function (v, i) { var x = 50 + i * 110, h = v * 200; g.fillStyle = COL[i]; g.fillRect(x, 250 - h, 80, h); g.font = F(18, 600); g.fillStyle = C.ink; g.fillText(N[i], x + 40, 274); g.fillText(Math.round(v * 1000) / 10 + "%", x + 40, 240 - h); });
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("Day " + day, 400, 40);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("chances for tomorrow", 400, 80); g.fillText("sunny → 70 / 20 / 10%", 400, 106); g.fillText("cloudy → 30 / 40 / 30%", 400, 132); g.fillText("rainy → 20 / 40 / 40%", 400, 158);
    out.textContent = "Day " + day + ": " + p.map(function (v, i) { return N[i].toLowerCase() + " " + (v * 100).toFixed(1) + "%"; }).join(", ") + ". After a week or so the numbers stop changing: the stationary distribution.";
  }
  k.buttons([["Next day", function () { stepP(); draw(); }], ["Ten days", function () { for (var i = 0; i < 10; i++) stepP(); draw(); }], ["Start sunny", function () { p = [1, 0, 0]; day = 0; draw(); }], ["Start rainy", function () { p = [0, 0, 1]; day = 0; draw(); }]]);
  st.draw = draw; draw();
});
