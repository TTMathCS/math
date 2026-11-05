/* Square roots by halving the gap. Start with a low guess and a high guess for √n; try the middle; keep the half where
   the square crosses n. data-mode="newton" averages the guess with n ÷ guess instead, which closes in much faster. */
PLAY("sqrt", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), newton = fig.getAttribute("data-mode") === "newton", n = 2, steps = 1;
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var lo = 0, hi = Math.max(1, n), rows = [], x = n;
    for (var i = 0; i < steps; i++) { if (newton) { x = (x + n / x) / 2; rows.push(x); } else { var m = (lo + hi) / 2; if (m * m < n) lo = m; else hi = m; rows.push([lo, hi]); } }
    g.textAlign = "left"; g.font = F(18, 700, "m");
    rows.slice(-8).forEach(function (r, i) { g.fillStyle = C.ink; g.fillText(newton ? "guess " + (rows.length - Math.min(8, rows.length) + i + 1) + ": " + r.toFixed(12) : r[0].toFixed(9) + " < √" + n + " < " + r[1].toFixed(9), 24, 34 + i * 26); });
    var est = newton ? x : (lo + hi) / 2, tru = Math.sqrt(n);
    out.textContent = "After " + steps + " step" + (steps > 1 ? "s" : "") + ": " + est.toFixed(10) + ", off by " + Math.abs(est - tru).toExponential(1) + ". " + (newton ? "Each step roughly doubles the correct digits." : "Each step halves the gap: about 3 steps per decimal digit.");
  }
  k.slider("n", 2, 50, 1, n, function (v) { return v; }, function (v) { n = +v; draw(); });
  k.slider("Steps", 1, newton ? 6 : 30, 1, steps, function (v) { return v; }, function (v) { steps = +v; draw(); });
  st.draw = draw; draw();
});
