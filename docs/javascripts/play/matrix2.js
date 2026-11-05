/* A 2 × 2 matrix acting on the plane. data-mode="map": the grid and the unit square go where the matrix sends them;
   the determinant is the signed area of the gold shape. "eigen": turn a vector v and watch Av; where they line up, v
   is an eigenvector. "circle": the unit circle becomes an ellipse whose half-axes are the singular values. "power":
   apply the matrix again and again; the direction settles on the biggest eigenvector. "rot": rotations and
   reflections, which keep every length. data-m="a,b,c,d" sets the starting matrix. */
PLAY("matrix2", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "map";
  var M = (fig.getAttribute("data-m") || "1.5,0.5,0.5,1").split(",").map(Number), th = 0.6, flip = false, steps = 0, v = [0.2, 1];
  var O = [150, 150], S = 40;
  function P(x, y) { return [O[0] + x * S, O[1] - y * S]; }
  function A(x, y) { return [M[0] * x + M[1] * y, M[2] * x + M[3] * y]; }
  function arrow(x, y, col, lw) { var p = P(x, y); g.strokeStyle = col; g.fillStyle = col; g.lineWidth = lw || 3; g.beginPath(); g.moveTo(O[0], O[1]); g.lineTo(p[0], p[1]); g.stroke(); var a = Math.atan2(p[1] - O[1], p[0] - O[0]); g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(p[0] - 11 * Math.cos(a - 0.4), p[1] - 11 * Math.sin(a - 0.4)); g.lineTo(p[0] - 11 * Math.cos(a + 0.4), p[1] - 11 * Math.sin(a + 0.4)); g.fill(); g.lineWidth = 1; }
  function eig() { var tr = M[0] + M[3], det = M[0] * M[3] - M[1] * M[2], disc = tr * tr / 4 - det; if (disc < 0) return null; var r = Math.sqrt(disc); return [tr / 2 + r, tr / 2 - r]; }
  function f2(x) { return (Math.round(x * 100) / 100).toString(); }
  function draw() {
    if (mode === "rot") { var c = Math.cos(th), s = Math.sin(th); M = flip ? [c, s, s, -c] : [c, -s, s, c]; }
    var det = M[0] * M[3] - M[1] * M[2];
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.save(); g.beginPath(); g.rect(0, 0, 300, 300); g.clip();
    g.strokeStyle = C.line; for (var i = -8; i <= 8; i++) { var a = P(i, -8), b = P(i, 8); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); a = P(-8, i); b = P(8, i); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); }
    if (mode === "map" || mode === "rot") {
      g.strokeStyle = "rgba(156,201,234,0.35)";
      for (i = -6; i <= 6; i++) { [[A(i, -6), A(i, 6)], [A(-6, i), A(6, i)]].forEach(function (L) { var p = P(L[0][0], L[0][1]), q = P(L[1][0], L[1][1]); g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); g.stroke(); }); }
      var sq = [[0, 0], [1, 0], [1, 1], [0, 1]].map(function (p) { return P.apply(null, A(p[0], p[1])); });
      g.fillStyle = det >= 0 ? "rgba(246,196,83,0.45)" : "rgba(217,96,59,0.45)"; g.beginPath(); sq.forEach(function (p, j) { j ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); }); g.closePath(); g.fill();
      arrow(M[0], M[2], C.gold); arrow(M[1], M[3], C.ice);
    } else if (mode === "circle") {
      g.strokeStyle = C.ink3; g.beginPath(); g.arc(O[0], O[1], S, 0, 7); g.stroke();
      g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath(); for (i = 0; i <= 100; i++) { var t = i / 100 * 2 * Math.PI, q = P.apply(null, A(Math.cos(t), Math.sin(t))); i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]); } g.stroke(); g.lineWidth = 1;
      var best = 0, bt = 0, low = 1e9, lt = 0; for (i = 0; i < 360; i++) { var tt = i / 360 * Math.PI, w = A(Math.cos(tt), Math.sin(tt)), L = Math.hypot(w[0], w[1]); if (L > best) { best = L; bt = tt; } if (L < low) { low = L; lt = tt; } }
      var u1 = A(Math.cos(bt), Math.sin(bt)), u2 = A(Math.cos(lt), Math.sin(lt)); arrow(u1[0], u1[1], C.rust); arrow(u2[0], u2[1], C.ice);
    } else {
      var e = eig();
      if (e) e.forEach(function (lam) { var x = M[1], y = lam - M[0]; if (Math.abs(x) < 1e-9 && Math.abs(y) < 1e-9) { x = lam - M[3]; y = M[2]; } if (Math.abs(x) < 1e-9 && Math.abs(y) < 1e-9) { x = 1; y = 0; } var n = Math.hypot(x, y); var p = P(-8 * x / n, -8 * y / n), q = P(8 * x / n, 8 * y / n); g.setLineDash([6, 6]); g.strokeStyle = C.green; g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); g.stroke(); g.setLineDash([]); });
      if (mode === "eigen") v = [Math.cos(th), Math.sin(th)];
      var Av = A(v[0], v[1]); arrow(v[0], v[1], C.ice); arrow(Av[0], Av[1], C.gold);
    }
    g.restore();
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink;
    g.fillText("[ " + f2(M[0]) + "   " + f2(M[1]) + " ]", 320, 46); g.fillText("[ " + f2(M[2]) + "   " + f2(M[3]) + " ]", 320, 76);
    g.font = F(18, 500); g.fillStyle = C.ink2;
    if (mode === "map" || mode === "rot") { g.fillText("determinant = " + f2(det), 320, 120); g.fillText(det < 0 ? "negative: the square is flipped" : det === 0 ? "zero: the plane is squashed flat" : "the square's area becomes " + f2(det), 320, 148, 270); out.textContent = "The gold arrow is where (1, 0) goes, the blue one where (0, 1) goes: the two columns of the matrix."; }
    if (mode === "circle") { g.fillText("longest stretch σ₁ ≈ " + f2(best), 320, 120); g.fillText("shortest σ₂ ≈ " + f2(low), 320, 148); g.fillText("σ₁ × σ₂ = |det| = " + f2(Math.abs(det)), 320, 176); out.textContent = "The circle of unit vectors becomes an ellipse; its half-axes are the singular values."; }
    if (mode === "eigen" || mode === "power") {
      var e2 = eig(), Av2 = A(v[0], v[1]), cross = v[0] * Av2[1] - v[1] * Av2[0];
      g.fillText(e2 ? "eigenvalues " + f2(e2[0]) + " and " + f2(e2[1]) : "no real eigenvalues: it turns everything", 320, 120, 270);
      g.fillStyle = Math.abs(cross) < 0.03 * Math.hypot(Av2[0], Av2[1]) ? C.gold : C.ink2;
      g.fillText(mode === "power" ? "step " + steps : Math.abs(cross) < 0.03 * Math.hypot(Av2[0], Av2[1]) ? "Av lines up with v!" : "Av points elsewhere", 320, 150);
      out.textContent = mode === "power" ? "Each press multiplies by the matrix and rescales; the direction creeps onto the dashed line of the biggest eigenvalue." : "Blue is v, gold is Av. The dashed green lines are the eigenvector directions: on them, Av is just a stretched v.";
    }
  }
  if (mode === "rot") { k.slider("Angle", -3.14, 3.14, 0.01, th, function (x) { return Math.round(x * 180 / Math.PI) + "°"; }, function (x) { th = x; draw(); }); k.buttons([["Rotation", function () { flip = false; draw(); }], ["Reflection", function () { flip = true; draw(); }]], true); }
  else if (mode === "eigen") k.slider("Turn v", 0, 3.14, 0.01, th, function (x) { return Math.round(x * 180 / Math.PI) + "°"; }, function (x) { th = x; draw(); });
  if (mode === "power") k.buttons([["Multiply by A", function () { var w = A(v[0], v[1]), n = Math.hypot(w[0], w[1]) / 1.5 || 1; v = [w[0] / n, w[1] / n]; steps++; draw(); }], ["Start again", function () { v = [0.2, 1]; steps = 0; draw(); }]]);
  if (mode === "map" || mode === "circle" || mode === "eigen") ["a", "b", "c", "d"].forEach(function (nm, i) { k.slider(nm, -2, 2, 0.1, M[i], function (x) { return x.toFixed(1); }, function (x) { M[i] = x; draw(); }); });
  st.draw = draw; draw();
});
