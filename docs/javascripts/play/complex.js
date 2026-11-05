/* The complex plane. data-mode="times": a point z = a + b i; multiplying by i turns it a quarter turn about 0, and
   squaring doubles its angle. data-mode="roots": the n-th roots of 1 sit evenly around the unit circle. */
PLAY("complex", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), roots = fig.getAttribute("data-mode") === "roots", a = 2, b = 1, n = 6, u = 34;
  function X(x) { return 230 + x * u; } function Y(y) { return 150 - y * u; }
  function dot(p, col, lab) { g.fillStyle = col; g.beginPath(); g.arc(X(p[0]), Y(p[1]), 8, 0, 7); g.fill(); if (lab) { g.font = F(15, 800); g.textAlign = "left"; g.fillText(lab, X(p[0]) + 10, Y(p[1]) - 8); } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(20, Y(0)); g.lineTo(440, Y(0)); g.moveTo(X(0), 10); g.lineTo(X(0), 290); g.stroke();
    g.fillStyle = C.ink3; g.font = F(14, 700); g.textAlign = "left"; g.fillText("real", 400, Y(0) - 8); g.fillText("imaginary", X(0) + 8, 22);
    if (roots) { g.strokeStyle = C.line; g.beginPath(); g.arc(X(0), Y(0), 3 * u, 0, 7); g.stroke(); var s = 3; for (var j = 0; j < n; j++) { var t = 2 * Math.PI * j / n; dot([s * Math.cos(t), s * Math.sin(t)], j ? C.gold : C.green); }
      out.textContent = "The " + n + " roots of zⁿ = 1 (circle drawn at 3 times its size): angles 0, 360°/" + n + ", 2 × 360°/" + n + " … each " + +(360 / n).toFixed(2) + "° apart. Raised to the power " + n + ", each goes round to 1."; return; }
    var z = [a, b], iz = [-b, a], z2 = [a * a - b * b, 2 * a * b]; dot(z, C.ice, "z"); dot(iz, C.rust, "i z"); if (Math.abs(z2[0]) < 7 && Math.abs(z2[1]) < 4.2) dot(z2, C.green, "z²");
    out.textContent = "z = " + a + (b < 0 ? " − " + -b : " + " + b) + "i, i z = " + -b + (a < 0 ? " − " + -a : " + " + a) + "i (a quarter turn), z² = " + z2[0] + (z2[1] < 0 ? " − " + -z2[1] : " + " + z2[1]) + "i. |z| = √" + (a * a + b * b) + ".";
  }
  if (roots) k.slider("n", 2, 12, 1, n, function (v) { return v; }, function (v) { n = +v; draw(); });
  else { k.slider("a (real)", -3, 3, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); }); k.slider("b (imaginary)", -3, 3, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); }); }
  st.draw = draw; draw();
});
