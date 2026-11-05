/* Areas under y = f(x) by strips. data-mode="lower": the lower and upper sums squeeze the area between them as the
   strips get thinner. "rules": left rectangles against the trapezoid rule and Simpson's rule on the same strips.
   "accum": the area from 0 up to x, A(x), drawn as a curve of its own: its slope is f(x), the fundamental theorem.
   The curve is y = 1 + sin x on 0 to 3, whose exact area is 4 − cos 3 ≈ 4.98999. */
PLAY("sums", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "lower", n = 6, X = 2;
  function f(x) { return 1 + Math.sin(x); }
  var exact = 4 - Math.cos(3);
  function sx(x) { return 30 + x / 3 * 380; } function sy(y) { return 250 - y * 100; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var h = 3 / n, lo = 0, up = 0, left = 0, trap = 0, simp = 0;
    for (var i = 0; i < n; i++) {
      var a = i * h, b = a + h, mn = 1e9, mx = -1e9; for (var t = a; t <= b + 1e-9; t += h / 40) { mn = Math.min(mn, f(t)); mx = Math.max(mx, f(t)); }
      lo += mn * h; up += mx * h; left += f(a) * h; trap += (f(a) + f(b)) / 2 * h; simp += (f(a) + 4 * f((a + b) / 2) + f(b)) / 6 * h;
      if (mode === "lower") { g.fillStyle = "rgba(156,201,234,0.25)"; g.fillRect(sx(a), sy(mx), sx(b) - sx(a), sy(0) - sy(mx)); g.fillStyle = "rgba(246,196,83,0.6)"; g.fillRect(sx(a), sy(mn), sx(b) - sx(a), sy(0) - sy(mn)); }
      if (mode === "rules") { g.fillStyle = "rgba(156,201,234,0.3)"; g.fillRect(sx(a), sy(f(a)), sx(b) - sx(a), sy(0) - sy(f(a))); g.strokeStyle = C.gold; g.beginPath(); g.moveTo(sx(a), sy(0)); g.lineTo(sx(a), sy(f(a))); g.lineTo(sx(b), sy(f(b))); g.lineTo(sx(b), sy(0)); g.stroke(); }
    }
    if (mode === "accum") { g.fillStyle = "rgba(246,196,83,0.4)"; g.beginPath(); g.moveTo(sx(0), sy(0)); for (t = 0; t <= X; t += 0.01) g.lineTo(sx(t), sy(f(t))); g.lineTo(sx(X), sy(0)); g.fill();
      g.strokeStyle = C.ice; g.lineWidth = 2; g.beginPath(); for (t = 0; t <= 3; t += 0.01) { var A = t + 1 - Math.cos(t); t ? g.lineTo(sx(t), sy(A / 2.5)) : g.moveTo(sx(t), sy(A / 2.5)); } g.stroke(); g.lineWidth = 1; }
    g.strokeStyle = C.ink; g.lineWidth = 2.5; g.beginPath(); for (t = 0; t <= 3; t += 0.01) t ? g.lineTo(sx(t), sy(f(t))) : g.moveTo(sx(t), sy(f(t))); g.stroke(); g.lineWidth = 1;
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(sx(0), sy(0)); g.lineTo(sx(3), sy(0)); g.stroke();
    g.textAlign = "left"; g.font = F(18, 600);
    if (mode === "lower") { g.fillStyle = C.ice; g.fillText("upper " + up.toFixed(4), 430, 60); g.fillStyle = C.ink; g.fillText("exact " + exact.toFixed(4), 430, 92); g.fillStyle = C.gold; g.fillText("lower " + lo.toFixed(4), 430, 124);
      out.textContent = n + " strips: the area is trapped between " + lo.toFixed(4) + " and " + up.toFixed(4) + ", a gap of " + (up - lo).toFixed(4) + ". The gap shrinks to 0, so the integral exists."; }
    if (mode === "rules") { g.fillStyle = C.ink; g.fillText("exact    " + exact.toFixed(5), 430, 50); g.fillStyle = C.ice; g.fillText("left     " + left.toFixed(5), 430, 84); g.fillStyle = C.gold; g.fillText("trapezoid " + trap.toFixed(5), 430, 114); g.fillStyle = C.green; g.fillText("Simpson  " + simp.toFixed(5), 430, 144);
      out.textContent = "Errors with " + n + " strips: left " + Math.abs(left - exact).toExponential(1) + ", trapezoid " + Math.abs(trap - exact).toExponential(1) + ", Simpson " + Math.abs(simp - exact).toExponential(1) + "."; }
    if (mode === "accum") { var Ax = X + 1 - Math.cos(X); g.fillStyle = C.gold; g.fillText("A(x) = " + Ax.toFixed(3), 430, 60); g.fillStyle = C.ice; g.fillText("blue: A drawn", 430, 92); g.fillText("(scaled)", 430, 116);
      out.textContent = "The shaded area up to x = " + X.toFixed(2) + " is " + Ax.toFixed(3) + ". Nudge x and the area grows at the rate f(x) = " + f(X).toFixed(3) + ": A′(x) = f(x)."; }
  }
  if (mode === "accum") k.slider("x", 0.01, 3, 0.01, X, function (v) { return v.toFixed(2); }, function (v) { X = v; draw(); });
  else k.slider("Strips", 1, 40, 1, n, function (v) { return v; }, function (v) { n = v; draw(); });
  st.draw = draw;
});
