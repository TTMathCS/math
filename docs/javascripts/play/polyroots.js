/* A cubic from its roots: y = (x − r)(x − s)(x − t). Move the roots and watch the coefficients: by Vieta's formulas
   the x² coefficient is −(r + s + t), the x coefficient rs + rt + st, and the number at the end −rst. */
PLAY("polyroots", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), r = [-2, 0.5, 2];
  function draw() {
    var a = r[0], b = r[1], c = r[2], e1 = a + b + c, e2 = a * b + a * c + b * c, e3 = a * b * c;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var X0 = -4, X1 = 4, sx = function (x) { return 20 + (x - X0) / (X1 - X0) * 340; }, sy = function (y) { return 150 - y * 8; };
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, 150); g.lineTo(360, 150); g.moveTo(sx(0), 10); g.lineTo(sx(0), 290); g.stroke();
    g.save(); g.beginPath(); g.rect(20, 10, 340, 280); g.clip();
    g.strokeStyle = C.ice; g.lineWidth = 2.5; g.beginPath();
    for (var x = X0; x <= X1; x += 0.02) { var y = (x - a) * (x - b) * (x - c); x === X0 ? g.moveTo(sx(x), sy(y)) : g.lineTo(sx(x), sy(y)); }
    g.stroke(); g.restore(); g.lineWidth = 1;
    r.forEach(function (v) { g.fillStyle = C.gold; g.beginPath(); g.arc(sx(v), 150, 7, 0, 7); g.fill(); });
    function fm(v) { return (Math.round(v * 100) / 100).toString(); }
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink;
    g.fillText("x³ " + (e1 > 0 ? "− " + fm(e1) : "+ " + fm(-e1)) + "x²", 380, 50);
    g.fillText((e2 < 0 ? "− " + fm(-e2) : "+ " + fm(e2)) + "x " + (e3 > 0 ? "− " + fm(e3) : "+ " + fm(-e3)), 380, 80);
    g.font = F(17, 500); g.fillStyle = C.ink2;
    g.fillText("sum of roots: " + fm(e1), 380, 130); g.fillText("pairs multiplied: " + fm(e2), 380, 158); g.fillText("all three: " + fm(e3), 380, 186);
    out.textContent = "Roots " + r.map(fm).join(", ") + ": the sum " + fm(e1) + " appears (with its sign flipped) in front of x², and the product " + fm(e3) + " at the end.";
  }
  ["r", "s", "t"].forEach(function (nm, i) { k.slider("Root " + nm, -3.5, 3.5, 0.5, r[i], function (v) { return v; }, function (v) { r[i] = v; draw(); }); });
  st.draw = draw;
});
