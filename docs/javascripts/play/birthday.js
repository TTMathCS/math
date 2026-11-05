/* The birthday problem: the chance that at least two of n people share a birthday, 1 − (365 × 364 × … ÷ 365ⁿ),
   ignoring 29 February and assuming every day equally likely. It passes one half at 23 people. */
PLAY("birthday", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 240, st = k.stage(W, H), g = st.g, out = k.out(), n = 23;
  function P(m) { var q = 1; for (var i = 0; i < m; i++) q *= (365 - i) / 365; return 1 - q; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(40, 20); g.lineTo(40, 200); g.lineTo(560, 200); g.stroke();
    g.setLineDash([5, 5]); g.strokeStyle = C.line; g.beginPath(); g.moveTo(40, 110); g.lineTo(560, 110); g.stroke(); g.setLineDash([]); g.fillStyle = C.ink3; g.font = F(14, 600); g.textAlign = "right"; g.fillText("½", 34, 115); g.fillText("1", 34, 26);
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); for (var m = 1; m <= 80; m++) g[m > 1 ? "lineTo" : "moveTo"](40 + m * 6.5, 200 - P(m) * 180); g.stroke();
    g.fillStyle = C.rust; g.beginPath(); g.arc(40 + n * 6.5, 200 - P(n) * 180, 8, 0, 7); g.fill(); g.textAlign = "center"; g.fillStyle = C.ink3; g.fillText("people →", 300, 222);
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(20, 800); g.fillText(n + " people: " + (100 * P(n)).toFixed(1) + "%", 60, 40);
    out.textContent = "With " + n + " people there are " + n * (n - 1) / 2 + " pairs, each a chance to match: that is why it rises so fast. " + (100 * P(n)).toFixed(1) + "% for at least one shared birthday.";
  }
  k.slider("People", 2, 80, 1, n, function (v) { return v; }, function (v) { n = +v; draw(); });
  st.draw = draw; draw();
});
