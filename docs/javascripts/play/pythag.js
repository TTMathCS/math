/* geometry/level-6/01-pythagorean-proofs.md: the rearrangement proof. A square of side a + b holds four copies of the
   right triangle. Arranged one way they leave a tilted square of area c²; slid into another arrangement they leave
   two squares, a² and b². The four triangles never change, so c² = a² + b². */
PLAY("pythag", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 340, st = k.stage(W, H), g = st.g, out = k.out(), A = 3, B = 4;
  function draw(t) {
    var S = 280 / (A + B), a = A * S, b = B * S, L = 30, T = 30, s = (a + b), u = t < 0.3 ? 0 : t > 0.7 ? 1 : (t - 0.3) / 0.4; u = u * u * (3 - 2 * u);
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.ink3; g.lineWidth = 2; g.strokeRect(L, T, s, s);
    // each triangle as [right-angle corner, end of its b leg, end of its a leg]: first round the edge leaving c² in the
    // middle, then in two rectangles leaving a² and b². It slides and turns as one piece, never stretched.
    var P1 = [[[0, 0], [0, b], [a, 0]], [[s, 0], [a, 0], [s, a]], [[s, s], [s, a], [b, s]], [[0, s], [b, s], [0, b]]];
    var P2 = [[[0, 0], [0, b], [a, 0]], [[a, b], [a, 0], [0, b]], [[a, s], [s, s], [a, b]], [[s, b], [a, b], [s, s]]];
    var cols = ["rgba(238,166,111,0.75)", "rgba(156,201,234,0.75)", "rgba(246,196,83,0.75)", "rgba(159,201,138,0.75)"];
    function ang(T) { return Math.atan2(T[1][1] - T[0][1], T[1][0] - T[0][0]); }
    for (var i = 0; i < 4; i++) {
      var u0 = Math.max(0, Math.min(1, (t - 0.15 - i * 0.17) / 0.17)); u = u0 * u0 * (3 - 2 * u0);   // one triangle at a time
      var a1 = ang(P1[i]), a2 = ang(P2[i]), d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      var th = a1 + d * u, rx = P1[i][0][0] + (P2[i][0][0] - P1[i][0][0]) * u, ry = P1[i][0][1] + (P2[i][0][1] - P1[i][0][1]) * u;
      var hand = Math.sign((P1[i][1][0] - P1[i][0][0]) * (P1[i][2][1] - P1[i][0][1]) - (P1[i][1][1] - P1[i][0][1]) * (P1[i][2][0] - P1[i][0][0]));
      g.fillStyle = cols[i]; g.beginPath(); g.moveTo(L + rx, T + ry);
      g.lineTo(L + rx + Math.cos(th) * b, T + ry + Math.sin(th) * b);
      g.lineTo(L + rx + Math.cos(th + hand * Math.PI / 2) * a, T + ry + Math.sin(th + hand * Math.PI / 2) * a);
      g.closePath(); g.fill(); }
    g.font = F(26, 600, "d"); g.fillStyle = C.ink; g.textAlign = "center";
    u = Math.max(0, Math.min(1, (t - 0.15) / 0.68));
    if (u < 0.02) g.fillText("c²", L + s / 2, T + s / 2 + 8);
    if (u > 0.98) { g.fillText("b²", L + a + b / 2, T + b / 2 + 8); g.fillText("a²", L + a / 2, T + b + a / 2 + 8); }
    g.textAlign = "left"; g.font = F(19, 600, "m"); g.fillStyle = C.ink;
    g.fillText("a = " + A + ", b = " + B, 360, 80); g.fillText("a² + b² = " + (A * A + B * B), 360, 120); g.fillText("c = " + Math.sqrt(A * A + B * B).toFixed(2), 360, 160);
    g.font = F(15, 500); g.fillStyle = C.ink2; g.fillText("the same four triangles,", 360, 220); g.fillText("so the empty space is equal", 360, 242);
  }
  st.draw = function () { draw(film.t()); };
  var film = k.loop(8, draw, { start0: true, label: "Slide" });
  k.slider("a", 1, 6, 1, A, function (v) { return v; }, function (v) { A = v; draw(film.t()); });
  k.slider("b", 1, 6, 1, B, function (v) { return v; }, function (v) { B = v; draw(film.t()); });
  out.textContent = "Press Play to slide the triangles.";
});
