/* The likelihood of a coin's chance of heads p after h heads in n flips: L(p) = pʰ (1 − p)ⁿ⁻ʰ, scaled so its top is 1.
   It peaks at p = h/n, the maximum likelihood estimate, and grows narrower as n grows: more data, more certainty.
   The dashed band is where L is at least 15% of its top, roughly a 95% likelihood interval. */
PLAY("likelihood", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 10, h = 7;
  function draw() {
    if (h > n) h = n;
    var ph = h / n, lmax = function (p) { var l = 0; if (h) l += h * Math.log(p); if (n - h) l += (n - h) * Math.log(1 - p); return l; }, top = (h && h < n) ? lmax(ph) : 0;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var L = 30, R = 410, T = 30, B = 250, lo = 1, hi = 0;
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(L, B); g.lineTo(R, B); g.stroke();
    g.strokeStyle = C.ice; g.lineWidth = 2.5; g.beginPath();
    for (var p = 0.001; p < 1; p += 0.002) { var v = Math.exp(lmax(p) - top); if (v >= 0.1465) { lo = Math.min(lo, p); hi = Math.max(hi, p); } var x = L + p * (R - L), y = B - v * (B - T); p < 0.002 ? g.moveTo(x, y) : g.lineTo(x, y); } g.stroke(); g.lineWidth = 1;
    g.fillStyle = "rgba(246,196,83,0.15)"; g.fillRect(L + lo * (R - L), T, (hi - lo) * (R - L), B - T);
    g.strokeStyle = C.gold; g.beginPath(); g.moveTo(L + ph * (R - L), T); g.lineTo(L + ph * (R - L), B); g.stroke();
    g.textAlign = "center"; g.font = F(17, 500); g.fillStyle = C.ink3; ["0", "0.5", "1"].forEach(function (t, i) { g.fillText(t, L + i / 2 * (R - L), 272); });
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(h + " heads in " + n, 430, 50);
    g.font = F(17, 500); g.fillStyle = C.gold; g.fillText("best p = " + ph.toFixed(2), 430, 82); g.fillText("band " + lo.toFixed(2) + " to " + hi.toFixed(2), 430, 108);
    out.textContent = "With " + h + " heads in " + n + " flips the most likely chance of heads is " + ph.toFixed(2) + "; anything from about " + lo.toFixed(2) + " to " + hi.toFixed(2) + " is still fairly likely.";
  }
  k.slider("Flips n", 1, 200, 1, n, function (v) { return v; }, function (v) { h = Math.round(h / n * v); n = v; draw(); });
  k.slider("Heads h", 0, 200, 1, h, function (v) { return Math.min(v, n); }, function (v) { h = Math.min(v, n); draw(); });
  st.draw = draw;
});
