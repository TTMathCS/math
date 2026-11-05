/* The tangent line and the derivative. data-f picks the curve: exp (eˣ), sin, cube (x³ − 3x), ln. Slide the point;
   the gold line touches the curve there, its slope is the derivative, and the blue curve below traces that slope.
   data-mode="mvt": the mean value theorem, with the chord from a to b and the point where the tangent is parallel. */
PLAY("tangent", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), fn = fig.getAttribute("data-f") || "exp", mvt = fig.getAttribute("data-mode") === "mvt", x0 = 0.5;
  var D = { exp: [function (x) { return Math.exp(x); }, function (x) { return Math.exp(x); }, -2.5, 2, -1, 6, "eˣ"],
    sin: [Math.sin, Math.cos, -4, 4, -1.6, 1.6, "sin x"],
    cube: [function (x) { return x * x * x - 3 * x; }, function (x) { return 3 * x * x - 3; }, -2.4, 2.4, -4, 4, "x³ − 3x"],
    ln: [Math.log, function (x) { return 1 / x; }, 0.1, 5, -2.5, 2, "ln x"] }[fn];
  var f = D[0], df = D[1], X0 = D[2], X1 = D[3], Y0 = D[4], Y1 = D[5];
  function sx(x) { return 20 + (x - X0) / (X1 - X0) * 400; }
  function sy(y) { return 285 - (y - Y0) / (Y1 - Y0) * 270; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.save(); g.beginPath(); g.rect(20, 10, 400, 280); g.clip();
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, sy(0)); g.lineTo(420, sy(0)); g.stroke();
    g.strokeStyle = C.ink; g.lineWidth = 2.5; g.beginPath(); for (var x = X0; x <= X1; x += (X1 - X0) / 300) { x === X0 ? g.moveTo(sx(x), sy(f(x))) : g.lineTo(sx(x), sy(f(x))); } g.stroke(); g.lineWidth = 1;
    var xt = x0, a = X0 + (X1 - X0) * 0.15, b = x0, slope;
    if (mvt) { b = Math.max(x0, a + 0.3); slope = (f(b) - f(a)) / (b - a); var best = a, bd = 1e9; for (x = a; x <= b; x += (b - a) / 500) { var dd = Math.abs(df(x) - slope); if (dd < bd) { bd = dd; best = x; } } xt = best;
      g.strokeStyle = C.ice; g.beginPath(); g.moveTo(sx(a), sy(f(a))); g.lineTo(sx(b), sy(f(b))); g.stroke(); [a, b].forEach(function (p) { g.fillStyle = C.ice; g.beginPath(); g.arc(sx(p), sy(f(p)), 5, 0, 7); g.fill(); }); }
    var m = df(xt);
    g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.moveTo(sx(X0), sy(f(xt) + m * (X0 - xt))); g.lineTo(sx(X1), sy(f(xt) + m * (X1 - xt))); g.stroke(); g.lineWidth = 1;
    g.fillStyle = C.gold; g.beginPath(); g.arc(sx(xt), sy(f(xt)), 7, 0, 7); g.fill(); g.restore();
    if (!mvt) { g.save(); g.beginPath(); g.rect(20, 10, 400, 280); g.clip(); g.setLineDash([6, 4]); g.strokeStyle = C.ice; g.lineWidth = 2; g.beginPath(); var on = false;
      for (x = X0; x <= x0; x += (X1 - X0) / 300) { on ? g.lineTo(sx(x), sy(df(x))) : g.moveTo(sx(x), sy(df(x))); on = true; } g.stroke(); g.setLineDash([]); g.lineWidth = 1; g.restore(); }
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("y = " + D[6], 440, 40);
    g.font = F(18, 500); g.fillStyle = C.gold; g.fillText("slope " + m.toFixed(3), 440, 80);
    if (mvt) { g.fillStyle = C.ice; g.fillText("chord " + slope.toFixed(3), 440, 110); }
    else { g.fillStyle = C.ice; g.fillText("dashed blue:", 440, 120); g.fillText("the slope so far", 440, 146); }
    out.textContent = mvt ? "The chord from a to b has slope " + slope.toFixed(3) + "; at x = " + xt.toFixed(3) + " the tangent has the same slope, as the mean value theorem promises." : "At x = " + x0.toFixed(2) + " the tangent's slope is " + m.toFixed(3) + (fn === "exp" ? ", the same as the height: eˣ is its own derivative." : ".");
  }
  k.slider(mvt ? "b" : "x", X0 + 0.01, X1 - 0.01, 0.01, mvt ? X1 - 0.2 : x0, function (v) { return v.toFixed(2); }, function (v) { x0 = v; draw(); });
  st.draw = draw;
});
