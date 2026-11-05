/* Adding points on the elliptic curve y² = x³ − x + 1. Draw the line through P and Q; it meets the curve once more;
   reflect that point in the x-axis to get P + Q. With P = Q the line is the tangent. data-mode="fp": the same curve
   over the whole numbers mod p, where it is a scatter of points; their count stays within 2√p of p + 1 (Hasse). */
PLAY("ellcurve", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), fp = fig.getAttribute("data-mode") === "fp";
  var px = -1, qx = 1.2, qdown = false, ps = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], p = 13;
  function f(x) { return x * x * x - x + 1; }
  var X0 = -2.2, X1 = 3.4, Y0 = -5.5, Y1 = 5.5;
  function sx(x) { return 20 + (x - X0) / (X1 - X0) * 400; }
  function sy(y) { return 150 - y / (Y1 - Y0) * 280; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "left";
    if (fp) {
      var n = 1, s = 270 / p;
      for (var x = 0; x < p; x++) for (var y = 0; y < p; y++) if ((y * y - (x * x * x - x + 1)) % p === 0 || (((y * y - (x * x * x - x + 1)) % p) + p) % p === 0) {
        n++; g.fillStyle = C.gold; g.beginPath(); g.arc(30 + x * s + s / 2, 285 - y * s - s / 2, Math.max(3, s * 0.3), 0, 7); g.fill();
      }
      g.strokeStyle = C.line; g.strokeRect(30, 15, 270, 270);
      g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("mod " + p + ": " + n + " points", 330, 50);
      g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("(counting one at infinity)", 330, 78);
      g.fillText("p + 1 = " + (p + 1), 330, 120); g.fillText("2√p ≈ " + (2 * Math.sqrt(p)).toFixed(1), 330, 150);
      g.fillStyle = C.gold; g.fillText("off by " + Math.abs(n - p - 1) + ", within the bound", 330, 190);
      out.textContent = "Over the numbers mod " + p + " the curve y² = x³ − x + 1 has " + n + " points. Hasse's theorem says the count is within 2√p of p + 1.";
      return;
    }
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(20, sy(0)); g.lineTo(420, sy(0)); g.stroke();
    g.strokeStyle = C.ice; g.lineWidth = 2;
    [1, -1].forEach(function (sg) { g.beginPath(); var st0 = false; for (var x = -1.3247; x <= X1; x += 0.005) { var v = f(x); if (v < 0) continue; var y = sg * Math.sqrt(v); if (!st0) { g.moveTo(sx(x), sy(y)); st0 = true; } else g.lineTo(sx(x), sy(y)); } g.stroke(); });
    g.lineWidth = 1;
    var P = [px, Math.sqrt(f(px))], Q = [qx, (qdown ? -1 : 1) * Math.sqrt(f(qx))], lam;
    if (Math.abs(P[0] - Q[0]) < 1e-9) { if (Math.abs(P[1] + Q[1]) < 1e-9) lam = null; else lam = (3 * P[0] * P[0] - 1) / (2 * P[1]); }
    else lam = (Q[1] - P[1]) / (Q[0] - P[0]);
    function dot(pt, col, lab) { g.fillStyle = col; g.beginPath(); g.arc(sx(pt[0]), sy(pt[1]), 7, 0, 7); g.fill(); g.font = F(18, 700); g.fillText(lab, sx(pt[0]) + 9, sy(pt[1]) - 8); }
    g.save(); g.beginPath(); g.rect(20, 10, 400, 280); g.clip();
    if (lam !== null) {
      var x3 = lam * lam - P[0] - Q[0], y3 = lam * (P[0] - x3) - P[1];
      g.strokeStyle = C.rust; g.beginPath(); g.moveTo(sx(X0), sy(P[1] + lam * (X0 - P[0]))); g.lineTo(sx(X1), sy(P[1] + lam * (X1 - P[0]))); g.stroke();
      g.setLineDash([5, 5]); g.strokeStyle = C.ink3; g.beginPath(); g.moveTo(sx(x3), sy(-y3)); g.lineTo(sx(x3), sy(y3)); g.stroke(); g.setLineDash([]);
      dot([x3, -y3], C.ink3, ""); dot([x3, y3], C.gold, "P+Q");
      out.textContent = "P + Q = (" + x3.toFixed(2) + ", " + y3.toFixed(2) + "). The line through P and Q meets the curve a third time; flipping that point over gives the sum.";
    } else out.textContent = "Q is P flipped over: the line through them is upright and never meets the curve again, so P + Q is the point at infinity, the zero of the group.";
    g.restore();
    dot(P, C.earth, "P"); dot(Q, C.mars, "Q");
    g.font = F(18, 600); g.fillStyle = C.ink; g.fillText("y² = x³ − x + 1", 432, 40);
  }
  if (fp) k.slider("Prime p", 0, ps.length - 1, 1, 3, function (v) { return ps[v]; }, function (v) { p = ps[v]; draw(); });
  else {
    k.slider("P across", -1.32, 2.6, 0.02, px, function (v) { return v.toFixed(2); }, function (v) { px = v; draw(); });
    k.slider("Q across", -1.32, 2.6, 0.02, qx, function (v) { return v.toFixed(2); }, function (v) { qx = v; draw(); });
    k.buttons([["Q on top", function () { qdown = false; draw(); }], ["Q below", function () { qdown = true; draw(); }]], true);
  }
  st.draw = draw;
});
