/* The volume of a ball of radius 1 in n dimensions, V(n) = π^(n/2) / Γ(n/2 + 1). It grows to a peak at n = 5
   (about 5.264) and then shrinks towards 0: in high dimensions almost all of a cube lies outside its ball. */
PLAY("nball", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), N = 5;
  function V(n) { return n === 0 ? 1 : n === 1 ? 2 : 2 * Math.PI / n * V(n - 2); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var n = 1; n <= 20; n++) { var v = V(n), x = 30 + (n - 1) * 27, h = v / 5.5 * 165; g.fillStyle = n === N ? C.gold : C.ice; g.globalAlpha = n === N ? 1 : 0.6; g.fillRect(x, 240 - h, 21, h); g.globalAlpha = 1; if ((n % 5 === 0 || n === 1) && n < 20) { g.font = F(17, 500); g.fillStyle = C.ink3; g.textAlign = "center"; g.fillText(n, x + 10, 264); } }
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.gold; g.fillText(N + " dimensions: V = " + V(N).toFixed(4), 30, 30);
    g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("share of the cube [−1, 1]^" + N + " inside: " + (V(N) / Math.pow(2, N) * 100).toPrecision(3) + "%", 30, 56);
    out.textContent = "The unit ball in " + N + " dimensions has volume " + V(N).toFixed(4) + ", which is " + (V(N) / Math.pow(2, N) * 100).toPrecision(3) + "% of the cube round it.";
  }
  k.slider("Dimension n", 1, 20, 1, N, function (v) { return v; }, function (v) { N = v; draw(); });
  st.draw = draw;
});
