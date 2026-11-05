/* The inscribed angle theorem. A and B are fixed on the circle; move P round the circle. The angle APB stays the same
   wherever P is on the same arc, and it is half the angle AOB at the centre. On the other arc it is 180° minus that. */
PLAY("inscribed", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), arc = 100, tp = 100;
  function draw() {
    var cx = 160, cy = 150, R = 120, ta = (270 - arc / 2) * Math.PI / 180, tb = (270 + arc / 2) * Math.PI / 180, t = tp * Math.PI / 180;
    function pt(u) { return [cx + R * Math.cos(u), cy - R * Math.sin(u)]; }
    var A = pt(ta), B = pt(tb), P = pt(t);
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke(); g.lineWidth = 1;
    g.strokeStyle = C.ice; g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(cx, cy); g.lineTo(B[0], B[1]); g.stroke();
    g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(P[0], P[1]); g.lineTo(B[0], B[1]); g.stroke(); g.lineWidth = 1;
    function angAt(V, X, Y) { var a1 = Math.atan2(X[1] - V[1], X[0] - V[0]), a2 = Math.atan2(Y[1] - V[1], Y[0] - V[0]), d = Math.abs(a1 - a2) * 180 / Math.PI; return d > 180 ? 360 - d : d; }
    var ap = angAt(P, A, B), ao = arc;
    [[A, "A"], [B, "B"], [P, "P"], [[cx, cy], "O"]].forEach(function (q, i) { g.fillStyle = i === 2 ? C.gold : i === 3 ? C.ice : C.ink; g.beginPath(); g.arc(q[0][0], q[0][1], 6, 0, 7); g.fill(); g.font = F(19, 700); g.fillText(q[1], q[0][0] + 9, q[0][1] - 9); });
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ice; g.fillText("angle AOB = " + ao + "°", 330, 60);
    g.fillStyle = C.gold; g.fillText("angle APB = " + ap.toFixed(1) + "°", 330, 96);
    out.textContent = "The angle at P is " + ap.toFixed(1) + "°, " + (Math.abs(ap - ao / 2) < 0.5 ? "half the centre angle, wherever P sits on this arc." : "180° minus half the centre angle: P is on the small arc.");
  }
  k.slider("Arc AB", 20, 170, 2, arc, function (v) { return v + "°"; }, function (v) { arc = v; draw(); });
  k.slider("Move P", 0, 359, 1, tp, function (v) { return v + "°"; }, function (v) { tp = v; draw(); });
  st.draw = draw;
});
