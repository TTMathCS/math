/* Clock arithmetic. A clock with n hours: start at a and add b, going round as often as needed. The answer is the
   remainder of a + b after dividing by n. data-mode="times" multiplies instead: a × b on the clock. */
PLAY("clock", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, st = k.stage(W, H), g = st.g, out = k.out(), times = fig.getAttribute("data-mode") === "times", n = 12, a = 9, b = 7;
  function draw() {
    var cx = 160, cy = 140, R = 110, res = ((times ? a * b : a + b) % n + n) % n; g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.lineWidth = 3; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke();
    for (var i = 0; i < n; i++) { var t = i / n * 2 * Math.PI - Math.PI / 2, x = cx + Math.cos(t) * R, y = cy + Math.sin(t) * R; g.fillStyle = i === res ? C.gold : i === a % n ? C.ice : C.ink3; g.beginPath(); g.arc(x, y, n > 16 ? 9 : 14, 0, 7); g.fill(); g.fillStyle = C.bg; g.font = F(n > 16 ? 11 : 15, 800); g.textAlign = "center"; g.fillText(i, x, y + 5); }
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(22, 800); g.fillText(a + (times ? " × " : " + ") + b + " = " + (times ? a * b : a + b), 320, 90);
    g.fillStyle = C.gold; g.fillText("≡ " + res + " (mod " + n + ")", 320, 130); g.fillStyle = C.ink2; g.font = F(16, 600); g.fillText((times ? a * b : a + b) + " = " + Math.floor((times ? a * b : a + b) / n) + " × " + n + " + " + res, 320, 168);
    out.textContent = "On a " + n + "-hour clock, " + (times ? a + " × " + b : a + " + " + b) + " lands on " + res + ": the remainder after dividing by " + n + ".";
  }
  k.slider("Hours n", 2, 24, 1, n, function (v) { return v; }, function (v) { n = +v; draw(); });
  k.slider("a", 0, 30, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); });
  k.slider("b", 0, 30, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); });
  st.draw = draw; draw();
});
