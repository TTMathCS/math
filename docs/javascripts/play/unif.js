/* Pointwise against uniform convergence: fₙ(x) = xⁿ on [0, 1]. Each fixed x below 1 sends xⁿ to 0, but the limit
   jumps to 1 at x = 1. Put a band of width ε round the limit: however big n is, part of the curve near 1 stays
   outside it, so the convergence is not uniform. */
PLAY("unif", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 5, eps = 0.1;
  function sx(x) { return 30 + x * 380; } function sy(y) { return 260 - y * 230; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(156,201,234,0.15)"; g.fillRect(sx(0), sy(eps), 380, sy(0) - sy(eps));
    g.strokeStyle = C.ice; g.lineWidth = 3; g.beginPath(); g.moveTo(sx(0), sy(0)); g.lineTo(sx(1), sy(0)); g.stroke(); g.fillStyle = C.ice; g.beginPath(); g.arc(sx(1), sy(1), 5, 0, 7); g.fill();
    g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath(); for (var x = 0; x <= 1; x += 0.002) x ? g.lineTo(sx(x), sy(Math.pow(x, n))) : g.moveTo(sx(x), sy(0)); g.stroke(); g.lineWidth = 1;
    var bad = Math.pow(eps, 1 / n);
    g.strokeStyle = C.red; g.lineWidth = 3; g.beginPath(); g.moveTo(sx(bad), sy(-0.04)); g.lineTo(sx(1), sy(-0.04)); g.stroke(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.gold; g.fillText("y = xⁿ, n = " + n, 440, 44);
    g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("outside the band", 440, 84); g.fillText("for x > " + bad.toFixed(3), 440, 110);
    out.textContent = "With n = " + n + ", xⁿ is more than " + eps + " for every x from " + bad.toFixed(3) + " to 1 (red). That stretch shrinks as n grows but never vanishes.";
  }
  k.slider("n", 1, 200, 1, n, function (v) { return v; }, function (v) { n = v; draw(); });
  k.slider("Band ε", 0.02, 0.5, 0.01, eps, function (v) { return v.toFixed(2); }, function (v) { eps = v; draw(); });
  st.draw = draw;
});
