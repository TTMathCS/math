/* Continued fractions. Take the whole part, flip what is left over, repeat: x = a0 + 1/(a1 + 1/(a2 + …)). Stopping
   early gives a fraction, a convergent, and each is the best approximation with a denominator that small. */
PLAY("contfrac", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), depth = 4;
  var X = [["π", Math.PI], ["√2", Math.SQRT2], ["e", Math.E], ["golden ratio", (1 + Math.sqrt(5)) / 2]], pick = 0;
  function draw() {
    var x = X[pick][1], v = x, a = [], P = [], Q = [], p0 = 1, q0 = 0, p1, q1;
    for (var i = 0; i < 9; i++) { var w = Math.floor(v + 1e-12); a.push(w); v = 1 / (v - w); }
    var pm = 0, qm = 1;
    p1 = 1; q1 = 0; pm = 0; qm = 1;
    for (i = 0; i < 9; i++) { var pn = a[i] * p1 + pm, qn = a[i] * q1 + qm; pm = p1; qm = q1; p1 = pn; q1 = qn; P.push(pn); Q.push(qn); }
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "left";
    g.font = F(22, 700); g.fillStyle = C.ink; g.fillText(X[pick][0] + " = [" + a[0] + "; " + a.slice(1, depth + 1).join(", ") + (depth < 8 ? ", …]" : "]"), 24, 40, 560);
    for (i = 0; i <= Math.min(depth, 6); i++) {
      var err = Math.abs(P[i] / Q[i] - x), y = 70 + i * 30, bw = Math.max(2, 300 + 30 * Math.log10(err + 1e-17));
      g.font = F(18, 600); g.fillStyle = i === depth ? C.gold : C.ink2; g.fillText(P[i] + "/" + Q[i], 24, y + 16);
      g.fillStyle = i === depth ? C.gold : C.ice; g.globalAlpha = 0.7; g.fillRect(170, y + 2, bw * 0.75, 18); g.globalAlpha = 1;
      g.font = F(17, 500); g.fillStyle = C.ink3; g.fillText("off by " + err.toExponential(1), 180 + bw * 0.75, y + 16);
    }
    out.textContent = "Convergent " + P[depth] + "/" + Q[depth] + " = " + (P[depth] / Q[depth]).toFixed(9) + ", against " + x.toFixed(9) + ". Shorter bars are closer.";
  }
  k.buttons(X.map(function (it, i) { return [it[0], function () { pick = i; draw(); }]; }), true);
  k.slider("Terms", 0, 6, 1, depth, function (v) { return v; }, function (v) { depth = v; draw(); });
  st.draw = draw;
});
