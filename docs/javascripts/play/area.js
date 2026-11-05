/* Area by sliders. data-shape: rect, para (parallelogram), tri, trap (trapezoid) or circle. Each square of the grid is
   1 square unit, so you can count to check the formula. */
PLAY("area", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, st = k.stage(W, H), g = st.g, out = k.out(), sh = fig.getAttribute("data-shape") || "rect", b = 8, h = 5, t = 4, s = 3, u = 26;
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var x0 = 40, y0 = 250; g.strokeStyle = C.line; g.lineWidth = 1;
    for (var i = 0; i <= 20; i++) { g.beginPath(); g.moveTo(x0 + i * u, y0); g.lineTo(x0 + i * u, y0 - 9 * u); g.stroke(); } for (i = 0; i <= 9; i++) { g.beginPath(); g.moveTo(x0, y0 - i * u); g.lineTo(x0 + 20 * u, y0 - i * u); g.stroke(); }
    var P, A, f; g.fillStyle = C.gold; g.globalAlpha = 0.55; g.beginPath();
    if (sh === "circle") { g.arc(x0 + 10 * u, y0 - 4.5 * u, h / 2 * u * 1, 0, 7); A = Math.PI * (h / 2) * (h / 2); f = "π × r² = π × " + h / 2 + "² ≈ " + A.toFixed(2); }
    else { P = sh === "rect" ? [[0, 0], [b, 0], [b, h], [0, h]] : sh === "para" ? [[0, 0], [b, 0], [b + s, h], [s, h]] : sh === "tri" ? [[0, 0], [b, 0], [s, h]] : [[0, 0], [b, 0], [s + t, h], [s, h]];
      P.forEach(function (p, i) { g[i ? "lineTo" : "moveTo"](x0 + p[0] * u, y0 - p[1] * u); }); g.closePath();
      A = sh === "rect" || sh === "para" ? b * h : sh === "tri" ? b * h / 2 : (b + t) * h / 2;
      f = sh === "rect" ? "length × width = " + b + " × " + h : sh === "para" ? "base × height = " + b + " × " + h : sh === "tri" ? "½ × base × height = ½ × " + b + " × " + h : "½ × (a + b) × h = ½ × (" + b + " + " + t + ") × " + h; }
    g.fill(); g.globalAlpha = 1; g.strokeStyle = C.gold; g.lineWidth = 3; g.stroke();
    if (sh !== "circle" && sh !== "rect") { g.setLineDash([5, 4]); g.strokeStyle = C.ink; g.lineWidth = 2; g.beginPath(); g.moveTo(x0 + s * u, y0); g.lineTo(x0 + s * u, y0 - h * u); g.stroke(); g.setLineDash([]); }
    g.fillStyle = C.bg; g.globalAlpha = 0.85; g.fillRect(x0 + 2, 6, 520, 30); g.globalAlpha = 1; g.fillStyle = C.ink; g.font = F(19, 800); g.textAlign = "left"; g.fillText(f + " = " + +A.toFixed(2) + " square units", x0 + 6, 28);
    out.textContent = sh === "para" ? "Sliding the top edge keeps the area the same: a parallelogram is a rectangle with one end moved to the other." : sh === "tri" ? "Moving the top corner sideways keeps the area: base and height stay the same." : sh === "circle" ? "Diameter " + h + ", radius " + h / 2 + ". Count the squares inside to check." : "Count the shaded squares to check. Perimeter 2 × (" + b + " + " + h + ") = " + 2 * (b + h) + " units.";
  }
  if (sh === "circle") k.slider("Diameter", 1, 9, 1, 6, function (v) { return v; }, function (v) { h = +v; draw(); });
  else { k.slider(sh === "trap" ? "Bottom a" : sh === "rect" ? "Length" : "Base", 1, 12, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); });
    k.slider(sh === "rect" ? "Width" : "Height", 1, 8, 1, h, function (v) { return v; }, function (v) { h = +v; draw(); });
    if (sh === "trap") k.slider("Top b", 1, 10, 1, t, function (v) { return v; }, function (v) { t = +v; draw(); });
    if (sh !== "rect") k.slider("Slide the top", 0, 6, 1, s, function (v) { return v; }, function (v) { s = +v; draw(); }); }
  st.draw = draw; draw();
});
