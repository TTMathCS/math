/* change/level-8/06-area-fundamental-theorem.md: the area under y = x² from 0 to 2 with rectangles. More, thinner
   rectangles get closer to the exact area, 8/3 ≈ 2.667, which the antiderivative x³/3 gives at once. */
PLAY("riemann", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 360, st = k.stage(W, H), g = st.g, out = k.out(), n = 4;
  function X(x) { return 60 + x * 240; } function Y(y) { return 320 - y * 66; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var w = 2 / n, sum = 0;
    for (var i = 0; i < n; i++) { var x = i * w, hgt = (x + w / 2) * (x + w / 2); sum += hgt * w;   // the height at the middle of each strip
      g.fillStyle = "rgba(238,166,111,0.45)"; g.fillRect(X(x), Y(hgt), X(w) - X(0), Y(0) - Y(hgt)); g.strokeStyle = "rgba(238,166,111,0.9)"; g.lineWidth = 1; g.strokeRect(X(x), Y(hgt), X(w) - X(0), Y(0) - Y(hgt)); }
    g.strokeStyle = C.ice; g.lineWidth = 3; g.beginPath(); for (x = 0; x <= 2.001; x += 0.02) g[x ? "lineTo" : "moveTo"](X(x), Y(x * x)); g.stroke();
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(X(0), Y(0)); g.lineTo(X(2.1), Y(0)); g.stroke();
    g.font = F(19, 600, "m"); g.fillStyle = C.ink; g.fillText(n + " rectangles: " + sum.toFixed(4), 20, 30); g.fillStyle = C.gold; g.fillText("exact: 8/3 = 2.6667", 20, 56);
  }
  st.draw = draw;
  k.slider("Rectangles", 1, 100, 1, n, function (v) { return v; }, function (v) { n = v; draw(); var e = 8 / 3, s = 0, w = 2 / n; for (var i = 0; i < n; i++) s += Math.pow((i + 0.5) * w, 2) * w;
    out.textContent = n + " rectangles give " + s.toFixed(4) + ", off by " + Math.abs(e - s).toFixed(4) + ". Double the rectangles and the error drops to about a quarter."; });
});
