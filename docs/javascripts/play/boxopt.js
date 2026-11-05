/* The open-box problem. Cut a square of side x from each corner of a 12 by 12 card and fold up the sides: the box holds
   V = x(12 − 2x)². The volume rises and then falls; the top, where the derivative is 0, is at x = 2 with V = 128. */
PLAY("boxopt", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), x = 1;
  function V(t) { return t * (12 - 2 * t) * (12 - 2 * t); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var s = 18, x0 = 30, y0 = 40;
    g.fillStyle = "rgba(238,166,111,0.35)"; g.fillRect(x0, y0, 12 * s, 12 * s);
    g.fillStyle = C.bg; [[0, 0], [12 - x, 0], [0, 12 - x], [12 - x, 12 - x]].forEach(function (p) { g.fillRect(x0 + p[0] * s, y0 + p[1] * s, x * s, x * s); });
    g.setLineDash([5, 4]); g.strokeStyle = C.rust; g.strokeRect(x0 + x * s, y0 + x * s, (12 - 2 * x) * s, (12 - 2 * x) * s); g.setLineDash([]);
    var L = 300, R = 570, T = 30, B = 230, vmax = 140;
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(L, T); g.lineTo(L, B); g.lineTo(R, B); g.stroke();
    g.strokeStyle = C.ice; g.lineWidth = 2; g.beginPath(); for (var t = 0; t <= 6; t += 0.05) { var p = [L + t / 6 * (R - L), B - V(t) / vmax * (B - T)]; t ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); } g.stroke(); g.lineWidth = 1;
    g.fillStyle = C.gold; g.beginPath(); g.arc(L + x / 6 * (R - L), B - V(x) / vmax * (B - T), 7, 0, 7); g.fill();
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("V = " + V(x).toFixed(1), 320, 270);
    g.font = F(17, 500); g.fillStyle = C.ink3; g.fillText("cut x = " + x.toFixed(2), 30, 284);
    out.textContent = "Cutting " + x.toFixed(2) + " from each corner gives a box " + (12 - 2 * x).toFixed(2) + " square and " + x.toFixed(2) + " high: volume " + V(x).toFixed(1) + ". V′(x) = 12(x − 2)(x − 6) is 0 at x = 2, the best cut.";
  }
  k.slider("Cut x", 0.1, 5.9, 0.05, x, function (v) { return v.toFixed(2); }, function (v) { x = v; draw(); });
  st.draw = draw;
});
