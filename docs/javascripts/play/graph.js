/* A graph to play with. data-form picks the family: line (y = m x + b), quad (y = a x² + b x + c), vertex
   (y = a (x − h)² + k), exp (y = a · bˣ), sine (y = a sin(b x) + k), power (y = xⁿ), recip (y = a / x). Move the
   sliders and watch the curve. */
PLAY("graph", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 340, st = k.stage(W, H), g = st.g, out = k.out(), form = fig.getAttribute("data-form") || "line";
  var D = { line: [["m", -4, 4, 0.5, 1], ["b", -6, 6, 1, 2]], quad: [["a", -3, 3, 0.5, 1], ["b", -6, 6, 1, 0], ["c", -6, 6, 1, -3]], vertex: [["a", -3, 3, 0.5, 1], ["h", -5, 5, 1, 2], ["k", -6, 6, 1, -1]],
    exp: [["a", 0.5, 4, 0.5, 1], ["b", 0.25, 3, 0.25, 2]], sine: [["a", 0.5, 4, 0.5, 2], ["b", 0.5, 3, 0.5, 1], ["k", -3, 3, 1, 0]], power: [["n", 1, 5, 1, 2]], recip: [["a", -6, 6, 1, 4]] }[form];
  var V = {}; D.forEach(function (d) { V[d[0]] = d[4]; });
  var X = 8, Y = form === "exp" || form === "power" ? 10 : 8;
  function f(x) { switch (form) { case "line": return V.m * x + V.b; case "quad": return V.a * x * x + V.b * x + V.c; case "vertex": return V.a * (x - V.h) * (x - V.h) + V.k; case "exp": return V.a * Math.pow(V.b, x); case "sine": return V.a * Math.sin(V.b * x) + V.k; case "power": return Math.pow(x, V.n); case "recip": return V.a / x; } }
  function eq() { var s = function (v) { return v < 0 ? "− " + (-v) : "+ " + v; }; switch (form) { case "line": return "y = " + V.m + "x " + s(V.b); case "quad": return "y = " + V.a + "x² " + s(V.b) + "x " + s(V.c); case "vertex": return "y = " + V.a + "(x " + s(-V.h) + ")² " + s(V.k); case "exp": return "y = " + V.a + " · " + V.b + "ˣ"; case "sine": return "y = " + V.a + " sin(" + V.b + "x) " + s(V.k); case "power": return "y = x" + "⁰¹²³⁴⁵"[V.n]; case "recip": return "y = " + V.a + " / x"; } }
  function px(x) { return 300 + x / X * 280; } function py(y) { return 170 - y / Y * 150; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.line; g.lineWidth = 1;
    for (var i = -X; i <= X; i++) { g.beginPath(); g.moveTo(px(i), 20); g.lineTo(px(i), 320); g.stroke(); } for (i = -Y; i <= Y; i += Y > 8 ? 2 : 1) { g.beginPath(); g.moveTo(20, py(i)); g.lineTo(580, py(i)); g.stroke(); }
    g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(20, py(0)); g.lineTo(580, py(0)); g.moveTo(px(0), 20); g.lineTo(px(0), 320); g.stroke();
    g.fillStyle = C.ink3; g.font = F(14, 600); g.textAlign = "center"; for (i = -X + 2; i <= X - 2; i += 2) if (i) g.fillText(i, px(i), py(0) + 18);
    g.strokeStyle = C.gold; g.lineWidth = 3.5; g.beginPath(); var on = false;
    for (var s = 0; s <= 560; s++) { var x = -X + s / 560 * 2 * X, y = f(x); if (!isFinite(y) || Math.abs(y) > Y * 3 || (form === "recip" && Math.abs(x) < 0.02)) { on = false; continue; } g[on ? "lineTo" : "moveTo"](px(x), py(Math.max(-Y * 1.2, Math.min(Y * 1.2, y)))); on = true; } g.stroke();
    if (form === "vertex") { g.fillStyle = C.rust; g.beginPath(); g.arc(px(V.h), py(V.k), 7, 0, 7); g.fill(); }
    if (form === "line") { g.fillStyle = C.rust; g.beginPath(); g.arc(px(0), py(V.b), 7, 0, 7); g.fill(); }
    g.fillStyle = C.bg; g.globalAlpha = 0.8; g.fillRect(24, 22, 290, 34); g.globalAlpha = 1; g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(20, 800, "m"); g.fillText(eq(), 30, 46);
    var extra = { line: "Slope " + V.m + ": up " + V.m + " for every 1 across. It crosses the y-axis at " + V.b + ".", vertex: "The turning point (red) is at (" + V.h + ", " + V.k + "). " + (V.a > 0 ? "It opens up." : V.a < 0 ? "It opens down." : "a = 0 makes it flat."), quad: "Discriminant b² − 4ac = " + (V.b * V.b - 4 * V.a * V.c) + ": " + (V.a === 0 ? "a = 0 gives a line." : V.b * V.b - 4 * V.a * V.c > 0 ? "two x-intercepts." : V.b * V.b - 4 * V.a * V.c === 0 ? "one x-intercept." : "no x-intercepts."), exp: V.b > 1 ? "b > 1: it grows, multiplying by " + V.b + " for each step right." : V.b < 1 ? "b < 1: it decays, multiplying by " + V.b + " each step." : "b = 1: flat.", sine: "Height " + V.a + ", repeats every " + (2 * Math.PI / V.b).toFixed(2) + ", centre line y = " + V.k + ".", power: V.n % 2 ? "An odd power: it keeps the sign of x." : "An even power: never below zero.", recip: "It never touches either axis: x = 0 has no value." }[form];
    out.textContent = extra;
  }
  st.draw = draw;
  D.forEach(function (d) { k.slider(d[0], d[1], d[2], d[3], d[4], function (v) { return v; }, function (v) { V[d[0]] = +v; draw(); }); });
  draw();
});
