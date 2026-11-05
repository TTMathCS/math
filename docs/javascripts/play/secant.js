/* change/level-6/03-secant-tangent.md: from secant to tangent on y = x². The secant through x = 1 and x = 1 + h has
   slope ((1 + h)² − 1²) ÷ h = 2 + h. Slide h toward 0 and the line turns into the tangent, slope 2. */
PLAY("secant", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 380, st = k.stage(W, H), g = st.g, out = k.out(), h = 1.5;
  function X(x) { return 60 + (x + 0.5) * 160; } function Y(y) { return 340 - y * 45; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.lineWidth = 1; g.beginPath(); g.moveTo(X(-0.5), Y(0)); g.lineTo(X(2.9), Y(0)); g.moveTo(X(0), Y(-0.3)); g.lineTo(X(0), Y(7)); g.stroke();
    g.strokeStyle = C.ice; g.lineWidth = 3; g.beginPath(); for (var x = -0.4; x <= 2.7; x += 0.02) g[x === -0.4 ? "moveTo" : "lineTo"](X(x), Y(x * x)); g.stroke();
    var m = 2 + h; g.save(); g.beginPath(); g.rect(0, 0, W, H); g.clip();
    g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath(); g.moveTo(X(-0.5), Y(1 + m * (-1.5))); g.lineTo(X(2.9), Y(1 + m * 1.9)); g.stroke();
    g.setLineDash([4, 6]); g.strokeStyle = "rgba(244,230,212,0.35)"; g.beginPath(); g.moveTo(X(-0.5), Y(1 - 3)); g.lineTo(X(2.9), Y(1 + 3.8)); g.stroke(); g.setLineDash([]); g.restore();
    g.fillStyle = C.ink; g.beginPath(); g.arc(X(1), Y(1), 6, 0, 7); g.fill(); g.fillStyle = C.gold; g.beginPath(); g.arc(X(1 + h), Y((1 + h) * (1 + h)), 6, 0, 7); g.fill();
    g.font = F(20, 600, "m"); g.fillStyle = C.ink; g.fillText("h = " + h.toFixed(3), 20, 32); g.fillStyle = C.gold; g.fillText("slope = " + m.toFixed(3), 20, 60);
    g.font = F(15, 500); g.fillStyle = C.ink3; g.fillText("dashed: the tangent, slope 2", 20, 86);
  }
  st.draw = draw;
  k.slider("h", 0, 1000, 1, 700, function (v) { return Math.max(0.001, Math.pow(v / 1000, 3) * 1.6).toFixed(3); }, function (v) {
    h = Math.max(0.001, Math.pow(v / 1000, 3) * 1.6); draw(); out.textContent = "The line through x = 1 and x = " + (1 + h).toFixed(3) + " has slope 2 + h = " + (2 + h).toFixed(3) + ". As h shrinks, it heads for 2: the slope of the tangent."; });
});
