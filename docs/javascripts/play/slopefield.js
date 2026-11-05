/* A slope field for dy/dx = x − y, and Euler's method. Each little line has the slope the equation gives there; a
   solution follows them. Euler's method walks in straight steps of size h: smaller steps stay closer to the exact
   solution, y = x − 1 + (y₀ + 1)e^(−x) from y(0) = y₀ (blue). */
PLAY("slopefield", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), y0 = 2, h = 0.5;
  function f(x, y) { return x - y; }
  function sx(x) { return 20 + x / 5 * 400; } function sy(y) { return 150 - y * 45; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.ink3; for (var x = 0.25; x < 5; x += 0.4) for (var y = -2.8; y <= 3; y += 0.4) { var m = f(x, y), a = Math.atan(m * 45 / 80), L = 9; g.beginPath(); g.moveTo(sx(x) - L * Math.cos(a), sy(y) + L * Math.sin(a)); g.lineTo(sx(x) + L * Math.cos(a), sy(y) - L * Math.sin(a)); g.stroke(); }
    g.strokeStyle = C.ice; g.lineWidth = 2.5; g.beginPath(); for (x = 0; x <= 5; x += 0.02) { var e = x - 1 + (y0 + 1) * Math.exp(-x); x ? g.lineTo(sx(x), sy(e)) : g.moveTo(sx(x), sy(e)); } g.stroke();
    g.strokeStyle = C.gold; g.beginPath(); var X = 0, Y = y0; g.moveTo(sx(X), sy(Y)); while (X < 5 - 1e-9) { Y += h * f(X, Y); X += h; g.lineTo(sx(X), sy(Y)); } g.stroke(); g.lineWidth = 1;
    var ex = 5 - 1 + (y0 + 1) * Math.exp(-5);
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("dy/dx = x − y", 440, 40);
    g.font = F(18, 500); g.fillStyle = C.gold; g.fillText("Euler: " + Y.toFixed(3), 440, 80); g.fillStyle = C.ice; g.fillText("exact: " + ex.toFixed(3), 440, 108); g.fillStyle = C.ink3; g.fillText("(at x = 5)", 440, 136);
    out.textContent = "With steps of " + h + ", Euler's method ends " + Math.abs(Y - ex).toFixed(3) + " away from the exact answer at x = 5. Halve the step and the error roughly halves.";
  }
  k.slider("Start y(0)", -2, 3, 0.1, y0, function (v) { return v.toFixed(1); }, function (v) { y0 = v; draw(); });
  k.slider("Step h", 0.05, 1, 0.05, h, function (v) { return v.toFixed(2); }, function (v) { h = v; draw(); });
  st.draw = draw;
});
