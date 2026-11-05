/* Archimedes' squeeze on π (about 250 BC). Draw a regular polygon inside a circle of diameter 1 and another outside:
   the circle's perimeter, π, lies between their perimeters, n sin(180°/n) and n tan(180°/n). He doubled from 6 sides
   to 96 and proved 3 10/71 < π < 3 1/7. */
PLAY("archpi", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 6;
  function poly(R, rot) { g.beginPath(); for (var i = 0; i <= n; i++) { var a = rot + i * 2 * Math.PI / n, x = 160 + R * Math.cos(a), y = 150 + R * Math.sin(a); i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); }
  function draw() {
    var r = 120, lo = n * Math.sin(Math.PI / n), hi = n * Math.tan(Math.PI / n);
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.lineWidth = 2; g.strokeStyle = C.ink2; g.beginPath(); g.arc(160, 150, r, 0, 7); g.stroke();
    g.strokeStyle = C.ice; poly(r, -Math.PI / 2); g.strokeStyle = C.rust; poly(r / Math.cos(Math.PI / n), -Math.PI / 2 + Math.PI / n); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText(n + " sides", 320, 50);
    g.font = F(19, 500, "m"); g.fillStyle = C.rust; g.fillText("outside " + hi.toFixed(5), 320, 100);
    g.fillStyle = C.ink2; g.fillText("π       " + Math.PI.toFixed(5), 320, 132);
    g.fillStyle = C.ice; g.fillText("inside  " + lo.toFixed(5), 320, 164);
    g.font = F(17, 500); g.fillStyle = C.ink3; g.fillText("gap " + (hi - lo).toFixed(5), 320, 200);
    out.textContent = "With " + n + " sides: " + lo.toFixed(5) + " < π < " + hi.toFixed(5) + "." + (n === 96 ? " Archimedes' own bounds, 3 10/71 ≈ 3.14085 and 3 1/7 ≈ 3.14286, sit just outside these, because he rounded his square roots safely." : " Each doubling roughly quarters the gap.");
  }
  var ns = [6, 12, 24, 48, 96];
  k.slider("Sides", 0, 4, 1, 0, function (i) { return ns[i]; }, function (i) { n = ns[i]; draw(); });
  st.draw = draw;
});
