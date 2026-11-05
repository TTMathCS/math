/* Making change: how many ways can you pay an amount with coins of 1, 5, 10 and 25 cents? Each new coin updates the
   table: ways(a) += ways(a − coin). It is the coefficient of xᵃ in 1/((1 − x)(1 − x⁵)(1 − x¹⁰)(1 − x²⁵)), the
   generating function. */
PLAY("change", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), amt = 100, used = 4;
  var coins = [1, 5, 10, 25], COL = [C.ink2, C.ice, C.gold, C.rust];
  function ways(m, upto) { var w = [1]; for (var a = 1; a <= m; a++) w.push(0); coins.slice(0, upto).forEach(function (c) { for (var a = c; a <= m; a++) w[a] += w[a - c]; }); return w; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var L = 30, R = 400, T = 30, B = 260, all = ways(100, 4), top = all[100];
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(L, T); g.lineTo(L, B); g.lineTo(R, B); g.stroke();
    for (var u = 1; u <= used; u++) { var w = ways(100, u); g.strokeStyle = COL[u - 1]; g.lineWidth = 2; g.beginPath(); w.forEach(function (v, a) { var x = L + a / 100 * (R - L), y = B - v / top * (B - T); a ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke(); }
    g.lineWidth = 1; var cur = ways(amt, used)[amt];
    g.fillStyle = C.ink; g.beginPath(); g.arc(L + amt / 100 * (R - L), B - cur / top * (B - T), 6, 0, 7); g.fill();
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText(amt + "¢: " + cur + " ways", 420, 50);
    g.font = F(17, 500); for (u = 0; u < 4; u++) { g.fillStyle = u < used ? COL[u] : C.ink3; g.fillText((u < used ? "✓ " : "  ") + coins[u] + "¢", 420, 90 + u * 26); }
    out.textContent = "With coins of " + coins.slice(0, used).join(", ") + " cents there are " + cur + " ways to make " + amt + " cents." + (used === 4 && amt === 100 ? " A dollar can be paid in 242 ways." : "");
  }
  k.slider("Amount (cents)", 1, 100, 1, amt, function (v) { return v; }, function (v) { amt = v; draw(); });
  k.slider("Coin kinds", 1, 4, 1, used, function (v) { return coins.slice(0, v).join(", "); }, function (v) { used = v; draw(); });
  st.draw = draw;
});
