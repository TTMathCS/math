/* Euclid's algorithm, step by step: replace the bigger number by its remainder after dividing by the smaller, until
   the remainder is 0. The last non-zero number is the greatest common divisor; a × b ÷ gcd is the least common
   multiple. */
PLAY("euclid", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), a = 252, b = 105;
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var x = a, y = b, rows = [];
    if (y > x) { var t = x; x = y; y = t; } while (y > 0) { rows.push([x, y, Math.floor(x / y), x % y]); var r = x % y; x = y; y = r; }
    g.textAlign = "left"; g.font = F(19, 700, "m");
    rows.slice(0, 7).forEach(function (rw, i) { g.fillStyle = i === rows.length - 1 ? C.gold : C.ink; g.fillText(rw[0] + " = " + rw[2] + " × " + rw[1] + " + " + rw[3], 24, 34 + i * 30); });
    var gcd = x, lcm = a / gcd * b; g.fillStyle = C.green; g.font = F(20, 800); g.fillText("gcd = " + gcd, 24, 34 + Math.min(rows.length, 7) * 30 + 10);
    out.textContent = "gcd(" + a + ", " + b + ") = " + gcd + " after " + rows.length + " step" + (rows.length > 1 ? "s" : "") + ". lcm = " + a + " × " + b + " ÷ " + gcd + " = " + lcm + ".";
  }
  k.slider("a", 1, 400, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); });
  k.slider("b", 1, 400, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); });
  st.draw = draw; draw();
});
