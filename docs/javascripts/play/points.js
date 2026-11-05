/* Two points on a grid. Tap to move the nearer point. The panel gives the distance (Pythagoras), the midpoint and the
   slope between them. */
PLAY("points", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 320, A = [-3, -2], B = [4, 3], u = 26, out;
  function X(x) { return 200 + x * u; } function Y(y) { return 160 - y * u; }
  var st = k.stage(W, H, function (x, y) { var p = [Math.round((x - 200) / u), Math.round((160 - y) / u)]; if (Math.abs(p[0]) > 7 || Math.abs(p[1]) > 5) return; var da = Math.hypot(p[0] - A[0], p[1] - A[1]), db = Math.hypot(p[0] - B[0], p[1] - B[1]); if (da < db) A = p; else B = p; draw(); }), g = st.g; out = k.out();
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.line; g.lineWidth = 1; for (var i = -7; i <= 7; i++) { g.beginPath(); g.moveTo(X(i), Y(5.5)); g.lineTo(X(i), Y(-5.5)); g.stroke(); } for (i = -5; i <= 5; i++) { g.beginPath(); g.moveTo(X(-7.5), Y(i)); g.lineTo(X(7.5), Y(i)); g.stroke(); }
    g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(X(-7.5), Y(0)); g.lineTo(X(7.5), Y(0)); g.moveTo(X(0), Y(5.5)); g.lineTo(X(0), Y(-5.5)); g.stroke();
    g.setLineDash([5, 4]); g.strokeStyle = C.ink2; g.beginPath(); g.moveTo(X(A[0]), Y(A[1])); g.lineTo(X(B[0]), Y(A[1])); g.lineTo(X(B[0]), Y(B[1])); g.stroke(); g.setLineDash([]);
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); g.moveTo(X(A[0]), Y(A[1])); g.lineTo(X(B[0]), Y(B[1])); g.stroke();
    var M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2], dx = B[0] - A[0], dy = B[1] - A[1], d = Math.hypot(dx, dy);
    [[A, C.ice, "A"], [B, C.rust, "B"], [M, C.green, "M"]].forEach(function (p) { g.fillStyle = p[1]; g.beginPath(); g.arc(X(p[0][0]), Y(p[0][1]), 8, 0, 7); g.fill(); });
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(16, 800); var tx = 410;
    g.fillText("A (" + A + ")", tx, 40); g.fillText("B (" + B + ")", tx, 66); g.fillStyle = C.gold; g.fillText("distance " + +d.toFixed(3), tx, 104); g.fillStyle = C.green; g.fillText("midpoint (" + M[0] + ", " + M[1] + ")", tx, 130); g.fillStyle = C.ink2; g.fillText("slope " + (dx ? +(dy / dx).toFixed(3) : "undefined"), tx, 156);
    out.textContent = "Across " + dx + ", up " + dy + ": distance √(" + dx + "² + " + dy + "²) = √" + (dx * dx + dy * dy) + " ≈ " + d.toFixed(3) + ". Tap the grid to move a point.";
  }
  st.draw = draw; draw();
});
