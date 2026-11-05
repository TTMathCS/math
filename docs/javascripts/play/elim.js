/* Gaussian elimination, one row operation at a time, on three equations in x, y and z (a made-up system whose answer is
   x = 1, y = 2, z = 3). Each step subtracts a multiple of one row from another to clear a number below the diagonal;
   then back substitution reads off z, y and x. */
PLAY("elim", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out();
  var start = [[2, 1, 1, 7], [4, 3, 3, 19], [-2, 2, 1, 5]], A, step, msg, hi;
  function reset() { A = start.map(function (r) { return r.slice(); }); step = 0; msg = "The augmented matrix: each row is one equation."; hi = -1; }
  var plan = [[1, 0, 0], [2, 0, 0], [2, 1, 1]];
  function next() {
    if (step < plan.length) { var p = plan[step], r = p[0], s = p[1], c = p[2], f = A[r][c] / A[s][c]; for (var j = 0; j < 4; j++) A[r][j] -= f * A[s][j]; msg = "Row " + (r + 1) + " minus " + (Math.round(f * 100) / 100) + " × row " + (s + 1) + ": clears the " + "xyz"[c] + " below the diagonal."; hi = r; }
    else if (step === plan.length) { var z = A[2][3] / A[2][2], y = (A[1][3] - A[1][2] * z) / A[1][1], x = (A[0][3] - A[0][1] * y - A[0][2] * z) / A[0][0]; msg = "Back substitution: z = " + z + ", then y = " + y + ", then x = " + x + "."; hi = -1; }
    step = Math.min(step + 1, plan.length + 1); draw();
  }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "right";
    A.forEach(function (r, i) {
      var y = 70 + i * 60; if (i === hi) { g.fillStyle = "rgba(246,196,83,0.18)"; g.fillRect(40, y - 34, 520, 50); }
      r.forEach(function (v, j) { var vv = Math.round(v * 100) / 100; g.font = F(26, 600, "m"); g.fillStyle = j === 3 ? C.ice : j < i && Math.abs(v) < 1e-9 ? C.green : C.ink; g.fillText(vv, 120 + j * 110 + (j === 3 ? 40 : 0), y); });
      g.strokeStyle = C.line; g.beginPath(); g.moveTo(470, y - 30); g.lineTo(470, y + 12); g.stroke();
    });
    g.font = F(18, 500); g.fillStyle = C.ink3; ["x", "y", "z", "="].forEach(function (t, j) { g.fillText(t, 120 + j * 110 + (j === 3 ? 40 : 0), 24); }); g.textAlign = "left";
    g.font = F(18, 600); g.fillStyle = C.gold; g.fillText(step > plan.length ? "x = 1, y = 2, z = 3" : "Step " + step + " of " + (plan.length + 1), 40, 260);
    out.textContent = msg;
  }
  reset();
  k.buttons([["Next step", next], ["Start again", function () { reset(); draw(); }]]);
  st.draw = draw; draw();
});
