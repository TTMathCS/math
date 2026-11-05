/* Buffon's needle: drop needles of length 1 on a floor with lines 1 apart. A needle crosses a line with chance 2/π,
   so π ≈ 2 × drops ÷ crossings. The drops use the browser's random numbers. */
PLAY("buffon", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), N = [], drops = 0, hits = 0, S = 40;
  function drop(m) { for (var i = 0; i < m; i++) { var x = 20 + Math.random() * 360, y = 20 + Math.random() * 260, a = Math.random() * Math.PI, dx = Math.cos(a) * S / 2, dy = Math.sin(a) * S / 2, y1 = (y - dy) / S, y2 = (y + dy) / S, hit = Math.floor(y1) !== Math.floor(y2); drops++; if (hit) hits++; N.push([x - dx, y - dy, x + dx, y + dy, hit]); if (N.length > 400) N.shift(); } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.ink3; for (var y = 0; y <= 300; y += S) { g.beginPath(); g.moveTo(0, y); g.lineTo(400, y); g.stroke(); }
    N.forEach(function (n) { g.strokeStyle = n[4] ? C.gold : "rgba(156,201,234,0.6)"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(n[0], n[1]); g.lineTo(n[2], n[3]); g.stroke(); }); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText(drops + " needles", 420, 50);
    g.font = F(17, 500); g.fillStyle = C.gold; g.fillText(hits + " cross a line", 420, 80);
    g.fillStyle = C.ink; g.font = F(20, 700); g.fillText("π ≈ " + (hits ? (2 * drops / hits).toFixed(4) : "?"), 420, 124);
    out.textContent = drops ? "2 × " + drops + " ÷ " + hits + " = " + (2 * drops / hits).toFixed(4) + ". The estimate wanders and slowly settles: its error shrinks like 1/√n." : "Drop some needles.";
  }
  k.buttons([["Drop 10", function () { drop(10); draw(); }], ["Drop 1,000", function () { drop(1000); draw(); }], ["Clear", function () { N = []; drops = 0; hits = 0; draw(); }]]);
  st.draw = draw; draw();
});
