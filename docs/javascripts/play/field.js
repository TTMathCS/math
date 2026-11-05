/* A vector field in the plane: an arrow at each point. data-mode picks the field: "spin" (−y, x) turns round the
   middle (curl, no divergence); "source" (x, y) flows straight out (divergence, no curl); "grad", the gradient of
   x² − y², is conservative: no curl, and the work round any closed loop is 0. Press Play to let dust drift along it. */
PLAY("field", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), pick = fig.getAttribute("data-mode") || "spin";
  var FS = { spin: [function (x, y) { return [-y, x]; }, "(−y, x)", "curl 2, divergence 0"], source: [function (x, y) { return [x, y]; }, "(x, y)", "curl 0, divergence 2"], grad: [function (x, y) { return [2 * x, -2 * y]; }, "∇(x² − y²)", "curl 0, divergence 0"] };
  var dust = []; for (var i = 0; i < 40; i++) dust.push([Math.cos(i * 2.4) * (0.3 + (i % 7) * 0.3), Math.sin(i * 2.4) * (0.3 + (i % 7) * 0.3)]);
  function sx(x) { return 150 + x * 55; } function sy(y) { return 150 - y * 55; }
  function draw(t) {
    var f = FS[pick][0];
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.ink3; g.fillStyle = C.ink3;
    for (var x = -2.5; x <= 2.51; x += 0.5) for (var y = -2.5; y <= 2.51; y += 0.5) { var v = f(x, y), L = Math.hypot(v[0], v[1]); if (L < 1e-9) continue; var s = Math.min(18, 8 + L * 3) / L, X = sx(x), Y = sy(y), ex = X + v[0] * s, ey = Y - v[1] * s; g.beginPath(); g.moveTo(X, Y); g.lineTo(ex, ey); g.stroke(); g.beginPath(); g.arc(ex, ey, 2.2, 0, 7); g.fill(); }
    var T = (t || 0) * 1.6;
    dust.forEach(function (p) { var q = p.slice(); for (var j = 0; j < Math.round(T * 100); j++) { var w = f(q[0], q[1]); q[0] += w[0] * 0.01; q[1] += w[1] * 0.01; if (Math.abs(q[0]) > 9 || Math.abs(q[1]) > 9) break; } if (Math.abs(q[0]) < 2.7 && Math.abs(q[1]) < 2.7) { g.fillStyle = C.gold; g.beginPath(); g.arc(sx(q[0]), sy(q[1]), 4, 0, 7); g.fill(); } });
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("F = " + FS[pick][1], 330, 50);
    g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText(FS[pick][2], 330, 84);
    out.textContent = pick === "spin" ? "Everything goes round: a small paddle wheel would spin. Work round a circle is not 0." : pick === "source" ? "Everything spreads out: more flows out of any small box than in." : "Dust runs from one valley to another; going round a loop and back gains nothing.";
  }
  var film = k.loop(4, draw, { label: "Time", start0: true });
  k.buttons([["Spin", function () { pick = "spin"; film.set(0); }], ["Source", function () { pick = "source"; film.set(0); }], ["Gradient", function () { pick = "grad"; film.set(0); }]])
  st.draw = function () { draw(film.t()); };
});
