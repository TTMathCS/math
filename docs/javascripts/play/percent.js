/* Percent on a 100-square. data-mode="of": p% of an amount. "change": an amount goes up or down by p%. "twice": up by
   p% then down by q% (or the other way) does not come back to the start. Made-up amounts. */
PLAY("percent", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "of", A = 80, p = 25, q = 25;
  function money(v) { return "$" + (+v.toFixed(2)).toLocaleString("en", { minimumFractionDigits: v % 1 ? 2 : 0 }); }
  function grid(x0, y0, n, col) { for (var i = 0; i < 100; i++) { g.fillStyle = i < n ? col : C.line; g.fillRect(x0 + (i % 10) * 20, y0 + Math.floor(i / 10) * 20, 18, 18); } }
  function bar(y, v, mx, col, lab) { g.fillStyle = col; g.fillRect(260, y, 300 * v / mx, 28); g.fillStyle = C.ink; g.font = F(17, 800); g.textAlign = "left"; g.fillText(lab, 260, y - 8); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); grid(20, 20, Math.min(100, Math.round(p)), mode === "change" && p < 0 ? C.red : C.gold);
    if (mode === "of") { var v = A * p / 100; bar(60, A, A, C.line, "whole: " + money(A)); bar(140, v, A, C.gold, p + "% of it: " + money(v)); out.textContent = p + "% means " + p + " out of every 100. " + p + "% of " + money(A) + " = " + p + "/100 × " + A + " = " + money(v) + "."; }
    else if (mode === "change") { var nv = A * (1 + p / 100); bar(60, A, Math.max(A, nv), C.ice, "before: " + money(A)); bar(140, nv, Math.max(A, nv), p < 0 ? C.red : C.green, "after: " + money(nv)); out.textContent = (p >= 0 ? "Up " : "Down ") + Math.abs(p) + "%: multiply by " + +(1 + p / 100).toFixed(2) + ". " + money(A) + " → " + money(nv) + "."; }
    else { var a1 = A * (1 + p / 100), a2 = a1 * (1 - q / 100), mx = Math.max(A, a1); bar(50, A, mx, C.ice, "start: " + money(A)); bar(120, a1, mx, C.green, "up " + p + "%: " + money(a1)); bar(190, a2, mx, C.red, "then down " + q + "%: " + money(a2));
      out.textContent = "Up " + p + "% then down " + q + "%: × " + +(1 + p / 100).toFixed(2) + " × " + +(1 - q / 100).toFixed(2) + " = × " + +((1 + p / 100) * (1 - q / 100)).toFixed(4) + ". The second percent is of a different amount."; }
  }
  k.slider("Amount", 10, 200, 5, A, function (v) { return "$" + v; }, function (v) { A = +v; draw(); });
  k.slider(mode === "change" ? "Change %" : mode === "twice" ? "Up %" : "Percent", mode === "change" ? -90 : 0, 100, 1, p, function (v) { return v + "%"; }, function (v) { p = +v; draw(); });
  if (mode === "twice") k.slider("Then down %", 0, 90, 1, q, function (v) { return v + "%"; }, function (v) { q = +v; draw(); });
  st.draw = draw; draw();
});
