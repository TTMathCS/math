/* A made-up scatter plot. Move the strength and direction of the link and watch the points, the line of best fit
   (least squares) and the correlation r. */
PLAY("scatter", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), s = 0.7, seed = 1, P;
  function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
  function gauss() { return Math.sqrt(-2 * Math.log(rnd() + 1e-9)) * Math.cos(2 * Math.PI * rnd()); }
  function make() { seed = 7; P = []; for (var i = 0; i < 40; i++) { var x = gauss(), e = gauss(); P.push([x, s * x + Math.sqrt(Math.max(0, 1 - s * s)) * e]); } }
  function draw() {
    make(); var n = P.length, mx = 0, my = 0; P.forEach(function (p) { mx += p[0] / n; my += p[1] / n; }); var sxy = 0, sxx = 0, syy = 0; P.forEach(function (p) { sxy += (p[0] - mx) * (p[1] - my); sxx += (p[0] - mx) * (p[0] - mx); syy += (p[1] - my) * (p[1] - my); });
    var m = sxy / sxx, b = my - m * mx, r = sxy / Math.sqrt(sxx * syy); function X(v) { return 300 + v * 80; } function Y(v) { return 150 - v * 45; }
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.line; g.lineWidth = 1.5; g.beginPath(); g.moveTo(40, 150); g.lineTo(560, 150); g.moveTo(300, 10); g.lineTo(300, 290); g.stroke();
    P.forEach(function (p) { g.fillStyle = C.ice; g.beginPath(); g.arc(X(p[0]), Y(p[1]), 6, 0, 7); g.fill(); });
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); g.moveTo(X(-3), Y(m * -3 + b)); g.lineTo(X(3), Y(m * 3 + b)); g.stroke();
    g.fillStyle = C.ink; g.font = F(20, 800); g.textAlign = "left"; g.fillText("r = " + r.toFixed(2), 30, 34);
    out.textContent = "r = " + r.toFixed(2) + ": " + (Math.abs(r) > 0.7 ? "a strong" : Math.abs(r) > 0.3 ? "a moderate" : "little or no") + (Math.abs(r) > 0.3 ? (r > 0 ? " positive" : " negative") + " link" : " straight-line link") + ". The gold line makes the squared vertical gaps as small as possible. Made-up points.";
  }
  k.slider("Link", -1, 1, 0.05, s, function (v) { return (+v).toFixed(2); }, function (v) { s = +v; draw(); });
  st.draw = draw; draw();
});
