/* sin x / x near 0, and the ε–δ game. The function is not defined at 0, but its values crowd towards 1. Pick a
   band ε round 1; the δ shown is the widest window round 0 inside which every value stays within the band. However
   thin you make the band, a window exists: that is what "the limit is 1" means. */
PLAY("limit", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), eps = 0.1;
  function f(x) { return Math.sin(x) / x; }
  var X0 = -7, X1 = 7, sx = function (x) { return 20 + (x - X0) / (X1 - X0) * 400; }, sy = function (y) { return 230 - y * 160; };
  function draw() {
    var d = 0; for (var x = 0.001; x < 7; x += 0.001) { if (Math.abs(f(x) - 1) >= eps) break; d = x; }
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(156,201,234,0.15)"; g.fillRect(sx(-d), 10, sx(d) - sx(-d), 280);
    g.fillStyle = "rgba(246,196,83,0.18)"; g.fillRect(20, sy(1 + eps), 400, sy(1 - eps) - sy(1 + eps));
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, sy(0)); g.lineTo(420, sy(0)); g.moveTo(sx(0), 10); g.lineTo(sx(0), 290); g.stroke();
    g.strokeStyle = C.ink; g.lineWidth = 2.5; g.beginPath(); var on = false;
    for (x = X0; x <= X1; x += 0.02) { if (Math.abs(x) < 1e-6) continue; var p = [sx(x), sy(f(x))]; on ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); on = true; } g.stroke(); g.lineWidth = 1;
    g.fillStyle = C.bg; g.strokeStyle = C.ink; g.beginPath(); g.arc(sx(0), sy(1), 6, 0, 7); g.fill(); g.stroke();
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("y = sin x / x", 440, 40);
    g.font = F(18, 500); g.fillStyle = C.gold; g.fillText("band: 1 ± " + eps, 440, 90); g.fillStyle = C.ice; g.fillText("window: |x| < " + d.toFixed(3), 440, 120);
    out.textContent = "Every x with 0 < |x| < " + d.toFixed(3) + " gives sin x / x within " + eps + " of 1. Shrink the band and the window shrinks, but never to nothing.";
  }
  k.slider("Band ε", 0.005, 0.5, 0.005, eps, function (v) { return v.toFixed(3); }, function (v) { eps = v; draw(); });
  st.draw = draw;
});
