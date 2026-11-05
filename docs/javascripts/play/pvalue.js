/* A p-value. Is a coin fair? Flip it n times and see h heads. The bars are the chances of each count if the coin is
   fair (binomial, p = ½); the p-value is the total of the gold bars, every count at least as far from n/2 as h. */
PLAY("pvalue", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 20, h = 15;
  function choose(a, b) { var r = 1; for (var i = 1; i <= b; i++) r = r * (a - b + i) / i; return r; }
  function draw() {
    if (h > n) h = n;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var pr = [], top = 0, pv = 0, d = Math.abs(h - n / 2);
    for (var x = 0; x <= n; x++) { var p = choose(n, x) / Math.pow(2, n); pr.push(p); top = Math.max(top, p); if (Math.abs(x - n / 2) >= d - 1e-9) pv += p; }
    var bw = 400 / (n + 1);
    pr.forEach(function (p, x) { var hh = p / top * 220; g.fillStyle = Math.abs(x - n / 2) >= d - 1e-9 ? C.gold : C.ice; g.globalAlpha = x === h ? 1 : 0.7; g.fillRect(30 + x * bw, 250 - hh, Math.max(1, bw - 1), hh); });
    g.globalAlpha = 1; g.textAlign = "center"; g.font = F(17, 500); g.fillStyle = C.ink3; [0, Math.round(n / 2), n].forEach(function (v) { g.fillText(v, 30 + v * bw + bw / 2, 274); });
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText(h + " heads in " + n, 450, 50);
    g.fillStyle = C.gold; g.fillText("p = " + pv.toFixed(3), 450, 86);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText(pv < 0.05 ? "below 0.05" : "not below 0.05", 450, 116);
    out.textContent = "If the coin were fair, a result at least this far from " + n / 2 + " heads would happen " + (pv * 100).toFixed(1) + "% of the time. That is the p-value; it is not the chance the coin is fair.";
  }
  k.slider("Flips n", 4, 100, 1, n, function (v) { return v; }, function (v) { n = v; draw(); });
  k.slider("Heads h", 0, 100, 1, h, function (v) { return Math.min(v, n); }, function (v) { h = Math.min(v, n); draw(); });
  st.draw = draw;
});
