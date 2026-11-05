/* Taylor polynomials. Add terms of the series round 0 and watch the polynomial hug the curve over a wider and wider
   stretch. data-f: sin (x − x³/3! + x⁵/5! − …), exp (1 + x + x²/2! + …) or ln (ln(1 + x) = x − x²/2 + x³/3 − …,
   which only works for −1 < x ≤ 1, its radius of convergence). */
PLAY("taylor", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), fn = fig.getAttribute("data-f") || "sin", N = 3;
  var D = { sin: [Math.sin, function (j) { return j % 2 ? Math.pow(-1, (j - 1) / 2) : 0; }, -8, 8, -2.5, 2.5, "sin x"],
    exp: [Math.exp, function () { return 1; }, -4, 3, -2, 12, "eˣ"],
    ln: [function (x) { return Math.log(1 + x); }, null, -0.99, 2.5, -3, 2, "ln(1 + x)"] }[fn];
  function fact(j) { var r = 1; for (var i = 2; i <= j; i++) r *= i; return r; }
  function T(x) { var s = 0; for (var j = 0; j <= N; j++) { var c = fn === "ln" ? (j ? Math.pow(-1, j + 1) / j : 0) : D[1](j) / fact(j); s += c * Math.pow(x, j); } return s; }
  function sx(x) { return 20 + (x - D[2]) / (D[3] - D[2]) * 400; } function sy(y) { return 150 - (y - (D[4] + D[5]) / 2) / (D[5] - D[4]) * 270; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.save(); g.beginPath(); g.rect(20, 10, 400, 280); g.clip();
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, sy(0)); g.lineTo(420, sy(0)); g.moveTo(sx(0), 10); g.lineTo(sx(0), 290); g.stroke();
    [[D[0], C.ink, 2.5], [T, C.gold, 2]].forEach(function (c) { g.strokeStyle = c[1]; g.lineWidth = c[2]; g.beginPath(); var on = false; for (var x = D[2]; x <= D[3]; x += (D[3] - D[2]) / 400) { var y = c[0](x); if (!isFinite(y)) continue; on ? g.lineTo(sx(x), sy(y)) : g.moveTo(sx(x), sy(y)); on = true; } g.stroke(); });
    g.restore(); g.lineWidth = 1;
    var good = 0; for (var x = 0; x <= D[3]; x += 0.01) { if (Math.abs(T(x) - D[0](x)) > 0.05) break; good = x; }
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("y = " + D[6], 440, 44);
    g.fillStyle = C.gold; g.font = F(18, 500); g.fillText("degree " + N, 440, 80); g.fillText("good to 0.05 up to", 440, 110); g.fillText("x = " + good.toFixed(2), 440, 136);
    out.textContent = "The degree " + N + " Taylor polynomial stays within 0.05 of " + D[6] + " from 0 up to x = " + good.toFixed(2) + (fn === "ln" ? "; beyond x = 1 no number of terms helps." : "; more terms reach further.");
  }
  k.slider("Degree", 0, 21, 1, N, function (v) { return v; }, function (v) { N = v; draw(); });
  st.draw = draw;
});
