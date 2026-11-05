/* Pythagorean triples from two whole numbers m > n: a = m² − n², b = 2mn, c = m² + n². Then a² + b² = c² always,
   since (m² − n²)² + (2mn)² = (m² + n²)². */
PLAY("triples", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), m = 2, n = 1;
  function draw() {
    var nn = Math.min(n, m - 1), a = m * m - nn * nn, b = 2 * m * nn, c = m * m + nn * nn, s = Math.min(300 / a, 230 / b, 300 / b);
    s = Math.min(240 / Math.max(a, 1), 230 / b);
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var x0 = 30, y0 = 260;
    g.fillStyle = "rgba(246,196,83,0.15)"; g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + a * s, y0); g.lineTo(x0, y0 - b * s); g.closePath(); g.fill(); g.stroke(); g.lineWidth = 1;
    g.strokeStyle = C.ink3; g.strokeRect(x0, y0 - 14, 14, 14);
    g.font = F(18, 600); g.fillStyle = C.ink; g.textAlign = "center"; g.fillText("a = " + a, x0 + a * s / 2, y0 + 24 > 290 ? 288 : y0 + 24);
    g.textAlign = "left"; g.fillText("b = " + b, x0 + 8, y0 - b * s - 8 < 18 ? 18 : y0 - b * s - 8);
    g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("m = " + m + ", n = " + nn, 330, 50);
    g.font = F(19, 500); g.fillStyle = C.ink2;
    g.fillText("a = m² − n² = " + a, 330, 90); g.fillText("b = 2mn = " + b, 330, 120); g.fillText("c = m² + n² = " + c, 330, 150);
    g.fillStyle = C.gold; g.font = F(20, 700); g.fillText(a * a + " + " + b * b + " = " + c * c, 330, 196, 260);
    out.textContent = a + "² + " + b + "² = " + c + "²: a right triangle with whole-number sides " + a + ", " + b + " and " + c + ".";
  }
  k.slider("m", 2, 9, 1, m, function (v) { return v; }, function (v) { m = v; draw(); });
  k.slider("n (below m)", 1, 8, 1, n, function (v) { return v; }, function (v) { n = v; draw(); });
  st.draw = draw;
});
