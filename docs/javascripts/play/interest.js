/* Money that grows. Simple interest adds the same amount each year; compound interest adds interest on the interest
   too. data-mode="both" compares them; data-mode="periods" compares compounding yearly, monthly and daily.
   Made-up amounts. */
PLAY("interest", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "both", P = 1000, r = 6, T = 20;
  function money(v) { return "$" + Math.round(v).toLocaleString("en"); }
  function draw() {
    var lines = mode === "both" ? [["simple", function (t) { return P * (1 + r / 100 * t); }, C.ice], ["compound yearly", function (t) { return P * Math.pow(1 + r / 100, t); }, C.gold]]
      : [["yearly", function (t) { return P * Math.pow(1 + r / 100, t); }, C.ice], ["monthly", function (t) { return P * Math.pow(1 + r / 1200, 12 * t); }, C.green], ["daily", function (t) { return P * Math.pow(1 + r / 36500, 365 * t); }, C.gold]];
    var mx = Math.max.apply(0, lines.map(function (l) { return l[1](T); }));
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(40, 220); g.lineTo(580, 220); g.moveTo(40, 220); g.lineTo(40, 20); g.stroke();
    lines.forEach(function (l, i) { g.strokeStyle = l[2]; g.lineWidth = 3; g.beginPath(); for (var s = 0; s <= 100; s++) { var t = T * s / 100, y = 220 - l[1](t) / mx * 190; g[s ? "lineTo" : "moveTo"](40 + s * 5.2, y); } g.stroke();
      g.fillStyle = l[2]; g.font = F(16, 800); g.textAlign = "left"; g.fillText(l[0] + ": " + money(l[1](T)), 60, 40 + i * 24); });
    g.fillStyle = C.ink3; g.font = F(14, 600); g.textAlign = "center"; g.fillText("years: 0 to " + T, 300, 246);
    out.textContent = money(P) + " at " + r + "% for " + T + " years. " + lines.map(function (l) { return l[0] + " " + money(l[1](T)); }).join(", ") + ".";
  }
  k.slider("Rate (% a year)", 1, 15, 0.5, r, function (v) { return v + "%"; }, function (v) { r = +v; draw(); });
  k.slider("Years", 1, 50, 1, T, function (v) { return v; }, function (v) { T = +v; draw(); });
  st.draw = draw; draw();
});
