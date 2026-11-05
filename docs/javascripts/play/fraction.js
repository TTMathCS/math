/* Fraction bars. data-mode="equiv": cut every piece of a fraction into more pieces and see the same amount.
   data-mode="add": two fractions on one bar after finding a common denominator. data-mode="compare": which is bigger. */
PLAY("fraction", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 250, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "equiv", n1 = 2, d1 = 3, n2 = 1, d2 = 4, m = 2;
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function bar(y, n, d, col, lab, off) { var w = 520; off = off || 0; for (var i = 0; i < d; i++) { var x = 40 + i * w / d; g.fillStyle = i >= off && i < off + n ? col : C.line; g.fillRect(x + 1, y, w / d - 2, 40); }
    g.fillStyle = C.ink; g.font = F(18, 800); g.textAlign = "right"; g.fillText(lab, 34, y + 27); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "left";
    if (mode === "equiv") { bar(30, n1, d1, C.gold, n1 + "/" + d1); bar(110, n1 * m, d1 * m, C.green, n1 * m + "/" + d1 * m); out.textContent = n1 + "/" + d1 + " = " + n1 * m + "/" + d1 * m + ": cutting each piece into " + m + " makes " + m + " times as many pieces, and " + m + " times as many are shaded. The amount is the same."; }
    else if (mode === "add") { var L = d1 * d2 / gcd(d1, d2), a = n1 * L / d1, b = n2 * L / d2; bar(20, n1, d1, C.gold, n1 + "/" + d1); bar(80, n2, d2, C.ice, n2 + "/" + d2);
      var w = 520; for (var i = 0; i < L; i++) { g.fillStyle = i < a ? C.gold : i < a + b ? C.ice : C.line; g.fillRect(40 + i * w / L + 1, 150, w / L - 2, 40); }
      var s = a + b, gg = gcd(s, L); g.fillStyle = C.ink; g.font = F(16, 800); g.textAlign = "right"; g.fillText("sum", 34, 177);
      out.textContent = n1 + "/" + d1 + " + " + n2 + "/" + d2 + " = " + a + "/" + L + " + " + b + "/" + L + " = " + s + "/" + L + (gg > 1 ? " = " + s / gg + "/" + L / gg : "") + (s > L ? " (more than one whole)" : "") + ". Same-size pieces first, then count."; }
    else { bar(30, n1, d1, C.gold, n1 + "/" + d1); bar(110, n2, d2, C.ice, n2 + "/" + d2); var c = n1 * d2 - n2 * d1; out.textContent = c > 0 ? n1 + "/" + d1 + " is bigger." : c < 0 ? n2 + "/" + d2 + " is bigger." : "They are equal."; }
  }
  k.slider("Top 1", 0, 12, 1, n1, function (v) { return v; }, function (v) { n1 = Math.min(+v, d1); draw(); });
  k.slider("Bottom 1", 1, 12, 1, d1, function (v) { return v; }, function (v) { d1 = +v; if (n1 > d1) n1 = d1; draw(); });
  if (mode === "equiv") k.slider("Cut each piece into", 1, 5, 1, m, function (v) { return v; }, function (v) { m = +v; draw(); });
  else { k.slider("Top 2", 0, 12, 1, n2, function (v) { return v; }, function (v) { n2 = Math.min(+v, d2); draw(); }); k.slider("Bottom 2", 1, 12, 1, d2, function (v) { return v; }, function (v) { d2 = +v; if (n2 > d2) n2 = d2; draw(); }); }
  st.draw = draw; draw();
});
