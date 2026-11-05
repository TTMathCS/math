/* A number line. data-mode="add": start at a, hop b (a negative b hops left). data-mode="ineq": the numbers that make
   x > a, x ≥ a, x < a or x ≤ a true. */
PLAY("numline", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 205, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "add", a = 3, b = -5, op = ">";
  function X(v) { return 300 + v * 26; }
  function axis() { g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(20, 110); g.lineTo(580, 110); g.stroke(); g.textAlign = "center"; for (var v = -10; v <= 10; v++) { g.beginPath(); g.moveTo(X(v), 103); g.lineTo(X(v), 117); g.stroke(); g.fillStyle = v === 0 ? C.ink : C.ink3; if (v % 2 === 0) { g.font = F(v % 10 ? 14 : 16, 700); g.fillText(v, X(v), 138); } } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); axis();
    if (mode === "add") { var e = a + b; g.strokeStyle = b < 0 ? C.rust : C.green; g.lineWidth = 3; var s = b < 0 ? -1 : 1;
      for (var i = 0; i < Math.abs(b); i++) { var x0 = X(a + i * s), x1 = X(a + (i + 1) * s); g.beginPath(); g.moveTo(x0, 104); g.quadraticCurveTo((x0 + x1) / 2, 70, x1, 104); g.stroke(); }
      g.fillStyle = C.ice; g.beginPath(); g.arc(X(a), 110, 8, 0, 7); g.fill(); g.fillStyle = C.gold; g.beginPath(); g.arc(X(Math.max(-10, Math.min(10, e))), 110, 9, 0, 7); g.fill();
      g.fillStyle = C.ink; g.font = F(22, 800); g.fillText(a + " " + (b < 0 ? "− " + (-b) : "+ " + b) + " = " + e, 300, 40);
      out.textContent = "Start at " + a + " and take " + Math.abs(b) + " hop" + (Math.abs(b) === 1 ? "" : "s") + " to the " + (b < 0 ? "left" : "right") + ": you land on " + e + "."; }
    else { var closed = op.length > 1 || op === "≥" || op === "≤", right = op[0] === ">" || op === "≥"; g.strokeStyle = C.gold; g.lineWidth = 6; g.beginPath(); g.moveTo(X(a), 110); g.lineTo(right ? 580 : 20, 110); g.stroke();
      g.beginPath(); g.moveTo(right ? 572 : 28, 100); g.lineTo(right ? 586 : 14, 110); g.lineTo(right ? 572 : 28, 120); g.fillStyle = C.gold; g.fill();
      g.beginPath(); g.arc(X(a), 110, 9, 0, 7); g.fillStyle = closed ? C.gold : C.bg; g.fill(); g.strokeStyle = C.gold; g.lineWidth = 3; g.stroke();
      g.fillStyle = C.ink; g.font = F(24, 800); g.fillText("x " + op + " " + a, 300, 44);
      out.textContent = (closed ? "Filled dot: " + a + " itself counts." : "Open dot: " + a + " itself does not count.") + " Every number " + (right ? "to the right" : "to the left") + " works, fractions too."; }
  }
  if (mode === "add") { k.slider("Start a", -10, 10, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); }); k.slider("Hop b", -10, 10, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); }); }
  else { k.slider("a", -9, 9, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); }); k.buttons([[">", function () { op = ">"; draw(); }], ["≥", function () { op = "≥"; draw(); }], ["<", function () { op = "<"; draw(); }], ["≤", function () { op = "≤"; draw(); }]], true); }
  st.draw = draw; draw();
});
