/* Triangle centres. Tap anywhere to move the nearest corner. The centroid G (where the medians meet), the circumcentre O
   (centre of the circle through the corners) and the orthocentre H (where the altitudes meet) always lie on one line,
   the Euler line, with G a third of the way from O to H. */
PLAY("centres", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, out;
  var T = [[60, 250], [330, 250], [140, 50]];
  var st = k.stage(W, H, function (x, y) { if (x > 380) return; var best = 0, bd = 1e9; T.forEach(function (p, i) { var d = Math.hypot(p[0] - x, p[1] - y); if (d < bd) { bd = d; best = i; } }); T[best] = [x, Math.max(15, Math.min(285, y))]; draw(); });
  var g = st.g; out = k.out();
  function draw() {
    var A = T[0], B = T[1], Cc = T[2], d = 2 * (A[0] * (B[1] - Cc[1]) + B[0] * (Cc[1] - A[1]) + Cc[0] * (A[1] - B[1]));
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(244,230,212,0.06)"; g.strokeStyle = C.ink; g.lineWidth = 2; g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(B[0], B[1]); g.lineTo(Cc[0], Cc[1]); g.closePath(); g.fill(); g.stroke(); g.lineWidth = 1;
    if (Math.abs(d) < 1e-6) { out.textContent = "The corners are in a line: no triangle."; return; }
    function sq(p) { return p[0] * p[0] + p[1] * p[1]; }
    var O = [(sq(A) * (B[1] - Cc[1]) + sq(B) * (Cc[1] - A[1]) + sq(Cc) * (A[1] - B[1])) / d, (sq(A) * (Cc[0] - B[0]) + sq(B) * (A[0] - Cc[0]) + sq(Cc) * (B[0] - A[0])) / d];
    var G = [(A[0] + B[0] + Cc[0]) / 3, (A[1] + B[1] + Cc[1]) / 3], Hh = [A[0] + B[0] + Cc[0] - 2 * O[0], A[1] + B[1] + Cc[1] - 2 * O[1]];
    g.save(); g.beginPath(); g.rect(0, 0, 400, 300); g.clip();
    g.strokeStyle = "rgba(156,201,234,0.35)"; g.beginPath(); g.arc(O[0], O[1], Math.hypot(A[0] - O[0], A[1] - O[1]), 0, 7); g.stroke();
    var dx = Hh[0] - O[0], dy = Hh[1] - O[1]; g.strokeStyle = C.red; g.setLineDash([6, 5]); g.beginPath(); g.moveTo(O[0] - dx * 3, O[1] - dy * 3); g.lineTo(O[0] + dx * 4, O[1] + dy * 4); g.stroke(); g.setLineDash([]);
    [[O, C.ice, "O"], [G, C.gold, "G"], [Hh, C.green, "H"]].forEach(function (q) { g.fillStyle = q[1]; g.beginPath(); g.arc(q[0][0], q[0][1], 6, 0, 7); g.fill(); g.font = F(18, 700); g.fillText(q[2], q[0][0] + 8, q[0][1] - 8); });
    g.restore();
    T.forEach(function (p) { g.fillStyle = C.ink; g.beginPath(); g.arc(p[0], p[1], 5, 0, 7); g.fill(); });
    g.textAlign = "left"; g.font = F(18, 500); g.fillStyle = C.ice; g.fillText("O circumcentre", 420, 60); g.fillStyle = C.gold; g.fillText("G centroid", 420, 90); g.fillStyle = C.green; g.fillText("H orthocentre", 420, 120); g.fillStyle = C.red; g.fillText("Euler line", 420, 150);
    out.textContent = "OG = " + Math.hypot(G[0] - O[0], G[1] - O[1]).toFixed(1) + " and GH = " + Math.hypot(Hh[0] - G[0], Hh[1] - G[1]).toFixed(1) + ": G is always a third of the way from O to H.";
  }
  st.draw = draw; draw();
});
