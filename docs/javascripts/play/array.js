/* Dots in rows. data-mode="times": r rows of c is r × c. "share": share n dots into g equal groups, with what is left
   over. "rect": every rectangle you can make with n dots; its sides are the factors of n. */
PLAY("array", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "times", r = 3, c = 4, n = 12, gg = 4;
  function dots(R, Cc, x0, y0, s, col) { for (var i = 0; i < R; i++) for (var j = 0; j < Cc; j++) { g.fillStyle = col; g.beginPath(); g.arc(x0 + j * s, y0 + i * s, s * 0.36, 0, 7); g.fill(); } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "left";
    if (mode === "times") { dots(r, c, 40, 40, 30, C.gold); out.textContent = r + " rows of " + c + " = " + r + " × " + c + " = " + r * c + ". Turn it on its side and it is " + c + " rows of " + r + ": the same " + r * c + "."; }
    else if (mode === "share") { var each = Math.floor(n / gg), left = n - each * gg; for (var q = 0; q < gg; q++) { var x0 = 20 + (q % 4) * 140, y0 = 20 + Math.floor(q / 4) * 120; g.strokeStyle = C.ink3; g.lineWidth = 2; g.strokeRect(x0, y0, 128, 108); for (var i = 0; i < each; i++) { g.fillStyle = C.ice; g.beginPath(); g.arc(x0 + 16 + (i % 5) * 24, y0 + 18 + Math.floor(i / 5) * 24, 9, 0, 7); g.fill(); } }
      for (i = 0; i < left; i++) { g.fillStyle = C.rust; g.beginPath(); g.arc(30 + i * 24, 260, 9, 0, 7); g.fill(); }
      out.textContent = n + " shared into " + gg + " groups: " + each + " each" + (left ? ", with " + left + " left over (the red ones)." : ", nothing left over.") + " " + n + " ÷ " + gg + " = " + each + (left ? " remainder " + left : "") + "."; }
    else { var F2 = []; for (var d = 1; d <= n; d++) if (n % d === 0 && d <= n / d) F2.push(d); var x = 20;
      var sw = 0; F2.forEach(function (d) { sw += n / d; }); var s0 = Math.min(30, (540 - 24 * F2.length) / sw); F2.forEach(function (d) { var s = Math.min(s0, 200 / d); dots(d, n / d, x + s / 2, 30 + s / 2, s, C.gold); g.fillStyle = C.ink2; g.font = F(15, 700); g.fillText(d + " × " + n / d, x, 40 + d * s + 14); x += (n / d) * s + 24; });
      var all = []; for (d = 1; d <= n; d++) if (n % d === 0) all.push(d); out.textContent = n + " makes " + F2.length + " rectangle" + (F2.length > 1 ? "s" : "") + ". Its factors: " + all.join(", ") + (all.length === 2 ? ". Only one rectangle, a single row: " + n + " is prime." : "."); }
  }
  if (mode === "times") { k.slider("Rows", 1, 7, 1, r, function (v) { return v; }, function (v) { r = +v; draw(); }); k.slider("In each row", 1, 12, 1, c, function (v) { return v; }, function (v) { c = +v; draw(); }); }
  else { k.slider("Dots n", 1, mode === "share" ? 30 : 36, 1, n, function (v) { return v; }, function (v) { n = +v; draw(); }); if (mode === "share") k.slider("Groups", 2, 8, 1, gg, function (v) { return v; }, function (v) { gg = +v; draw(); }); }
  st.draw = draw; draw();
});
