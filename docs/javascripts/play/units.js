/* The metric ladder: each step is ten times the next. Pick an amount and a unit; every other unit of the same kind is
   shown. data-kind: length (km to mm), mass (kg, g, mg), volume (L, mL), or imperial (inches, feet, miles to cm, m, km;
   1 inch = 2.54 cm exactly). */
PLAY("units", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 250, st = k.stage(W, H), g = st.g, out = k.out(), kind = fig.getAttribute("data-kind") || "length", v = 2.5, ui = 0;
  var U = { length: [["km", 1000], ["m", 1], ["cm", 0.01], ["mm", 0.001]], mass: [["kg", 1000], ["g", 1], ["mg", 0.001]], volume: [["L", 1], ["mL", 0.001]], imperial: [["mile", 1609.344], ["foot", 0.3048], ["inch", 0.0254], ["km", 1000], ["m", 1], ["cm", 0.01]] }[kind];
  function fmt(x) { return Math.abs(x) >= 1e7 || (Math.abs(x) < 1e-3 && x) ? x.toExponential(3) : (+x.toPrecision(6)).toLocaleString("en", { maximumFractionDigits: 6 }); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var base = v * U[ui][1]; g.textAlign = "left";
    U.forEach(function (u, i) { var y = 30 + i * (200 / U.length); g.fillStyle = i === ui ? C.gold : C.ink; g.font = F(20, 800, "m"); g.fillText(fmt(base / u[1]), 30, y + 14); g.fillStyle = C.ink2; g.font = F(18, 700); g.fillText(u[0], 280, y + 14); });
    out.textContent = kind === "imperial" ? "1 inch = 2.54 cm exactly, 1 foot = 12 inches, 1 mile = 5,280 feet." : "Going down one step multiplies by 10 (" + U.map(function (u) { return u[0]; }).join(" → ") + "); the digits stay, the decimal point moves.";
  }
  k.slider("Amount", 0.5, 100, 0.5, v, function (x) { return x; }, function (x) { v = +x; draw(); });
  k.buttons(U.map(function (u, i) { return [u[0], function () { ui = i; draw(); }]; }), true);
  st.draw = draw; draw();
});
