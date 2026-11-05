/* The Chinese remainder theorem on a grid of 0 to m·n − 1. Blue: numbers that leave a when divided by m. Orange: those
   that leave b when divided by n. Gold: both. When m and n share no factor there is always exactly one gold number. */
PLAY("crt", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), m = 3, n = 5, a = 2, b = 3;
  function gcd(x, y) { return y ? gcd(y, x % y) : x; }
  function draw() {
    var N = m * n, cols = Math.ceil(Math.sqrt(N * 1.6)), rows = Math.ceil(N / cols), cs = Math.min(36, 260 / rows, 360 / cols), both = [];
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "center";
    for (var i = 0; i < N; i++) {
      var x = 20 + (i % cols) * cs, y = 20 + Math.floor(i / cols) * cs, A = i % m === a, B = i % n === b;
      if (A && B) both.push(i);
      g.fillStyle = A && B ? C.gold : A ? C.earth : B ? C.mars : C.bg2; g.fillRect(x, y, cs - 2, cs - 2);
      if (cs >= 22) { g.fillStyle = A || B ? C.bg : C.ink3; g.font = F(cs > 30 ? 15 : 12, 600); g.fillText(i, x + cs / 2 - 1, y + cs / 2 + 4); }
    }
    g.textAlign = "left"; g.font = F(18, 500); g.fillStyle = C.ink2;
    g.fillText("x ≡ " + a + " (mod " + m + ")", 400, 50); g.fillText("x ≡ " + b + " (mod " + n + ")", 400, 80);
    g.font = F(20, 700); g.fillStyle = C.gold; g.fillText(both.length ? "x = " + both.join(", ") : "no x at all", 400, 124, 190);
    g.font = F(17, 500); g.fillStyle = C.ink3; g.fillText("gcd(" + m + ", " + n + ") = " + gcd(m, n), 400, 160);
    out.textContent = gcd(m, n) === 1 ? "Because " + m + " and " + n + " share no factor, exactly one number below " + N + " fits both: " + both[0] + "." : m + " and " + n + " share a factor, so there are " + (both.length ? both.length + " answers" : "no answers") + " below " + N + ".";
  }
  k.slider("m", 2, 9, 1, m, function (v) { return v; }, function (v) { m = v; a = Math.min(a, m - 1); draw(); });
  k.slider("n", 2, 9, 1, n, function (v) { return v; }, function (v) { n = v; b = Math.min(b, n - 1); draw(); });
  k.slider("a", 0, 8, 1, a, function (v) { return Math.min(v, m - 1); }, function (v) { a = Math.min(v, m - 1); draw(); });
  k.slider("b", 0, 8, 1, b, function (v) { return Math.min(v, n - 1); }, function (v) { b = Math.min(v, n - 1); draw(); });
  st.draw = draw;
});
