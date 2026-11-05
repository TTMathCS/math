/* The ε–N game for a sequence. Dots are the terms aₙ; the band is L ± ε. Shrink ε: past some N every later term stays
   inside the band, and a smaller ε needs a bigger N. Pick the sequence: (1 + 1/n)ⁿ rises to e; aₙ₊₁ = √(2 + aₙ) from
   a₁ = 0 rises to 2 (bounded and increasing, so it converges); (−1)ⁿ/n zigzags in to 0. */
PLAY("seqlim", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), eps = 0.1, kind = 0, M = 40;
  var S = [
    ["(1 + 1/n)ⁿ → e", Math.E, function (n) { return Math.pow(1 + 1 / n, n); }, 1.9, 2.9],
    ["aₙ₊₁ = √(2 + aₙ) → 2", 2, function (n) { var a = 0; for (var i = 1; i < n; i++) a = Math.sqrt(2 + a); return a; }, -0.1, 2.3],
    ["(−1)ⁿ / n → 0", 0, function (n) { return Math.pow(-1, n) / n; }, -1.1, 0.7]
  ];
  function draw() {
    var s = S[kind], L = s[1], lo = s[3], hi = s[4], Y = function (v) { return 260 - (v - lo) / (hi - lo) * 210; }, X = function (n) { return 40 + (n - 1) / (M - 1) * 540; };
    var N = 1; for (var n = M; n >= 1; n--) if (Math.abs(s[2](n) - L) >= eps) { N = n + 1; break; }
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(156,201,234,0.14)"; g.fillRect(40, Y(L + eps), 540, Y(L - eps) - Y(L + eps));
    g.strokeStyle = C.ice; g.setLineDash([5, 5]); g.beginPath(); g.moveTo(40, Y(L)); g.lineTo(580, Y(L)); g.stroke(); g.setLineDash([]);
    if (N <= M) { g.strokeStyle = C.gold; g.beginPath(); g.moveTo(X(N), 40); g.lineTo(X(N), 270); g.stroke(); }
    for (n = 1; n <= M; n++) { var v = s[2](n); g.fillStyle = n >= N ? C.gold : C.rust; g.beginPath(); g.arc(X(n), Y(v), 4.5, 0, 7); g.fill(); }
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(s[0], 40, 28);
    g.font = F(17, 500); g.fillStyle = C.gold; g.fillText(N <= M ? "N = " + N : "N beyond 40", 40, 290);
    out.textContent = N <= M ? "With ε = " + eps + ", every term from n = " + N + " on stays within ε of " + (kind === 0 ? "e" : L) + " (gold). Smaller ε, bigger N." : "With ε = " + eps + ", the terms need more than 40 steps to settle inside the band.";
  }
  k.buttons([["e", function () { kind = 0; draw(); }], ["√(2 + a)", function () { kind = 1; draw(); }], ["Zigzag", function () { kind = 2; draw(); }]], true);
  var es = [0.5, 0.2, 0.1, 0.05, 0.03, 0.02];
  k.slider("Band ε", 0, es.length - 1, 1, 2, function (i) { return es[i]; }, function (i) { eps = es[i]; draw(); });
  st.draw = draw;
});
