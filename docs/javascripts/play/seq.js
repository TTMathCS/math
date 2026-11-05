/* A sequence, term by term. data-kind: arith (start a, add d), geom (start a, times r), square, tri (triangular),
   fib (each term is the two before added). Bars show the terms; the sum of the terms shown is given below. */
PLAY("seq", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 290, st = k.stage(W, H), g = st.g, out = k.out(), kind = fig.getAttribute("data-kind") || "arith", a = 2, d = 3, r = 2, n = 8;
  function terms() { var T = []; for (var i = 1; i <= n; i++) T.push(kind === "arith" ? a + (i - 1) * d : kind === "geom" ? a * Math.pow(r, i - 1) : kind === "square" ? i * i : kind === "tri" ? i * (i + 1) / 2 : 0);
    if (kind === "fib") { T = [1, 1]; while (T.length < n) T.push(T[T.length - 1] + T[T.length - 2]); T = T.slice(0, n); } return T; }
  function fmt(v) { return Math.abs(v) >= 1e6 ? v.toExponential(2) : +v.toFixed(3) + ""; }
  function draw() {
    var T = terms(), mx = Math.max.apply(0, T.map(Math.abs)) || 1, bw = 540 / n, sum = T.reduce(function (s, v) { return s + v; }, 0);
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 1; g.beginPath(); g.moveTo(30, 130); g.lineTo(580, 130); g.stroke();
    var neg = T.some(function (v) { return v < 0; }), base = neg ? 130 : 200, sc = neg ? 100 : 170;
    T.forEach(function (v, i) { var x = 30 + i * bw, h = v / mx * sc; g.fillStyle = i % 2 ? C.ice : C.gold; g.fillRect(x + 2, base - Math.max(h, 0), bw - 4, Math.abs(h)); g.fillStyle = C.ink; g.font = F(n > 12 ? 13 : 16, 700); g.textAlign = "center"; if (n <= 14) g.fillText(fmt(v), x + bw / 2, h >= 0 ? base - h - 6 : base - h + 16); g.fillStyle = C.ink3; g.font = F(13, 600); if (n <= 14) g.fillText(i + 1, x + bw / 2, base + 18); });
    var rule = { arith: "add " + d + " each time", geom: "times " + r + " each time", square: "n × n", tri: "1 + 2 + … + n", fib: "add the two before" }[kind];
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(18, 800); g.fillText(rule, 30, 26);
    out.textContent = "First " + n + " terms: " + T.slice(0, 10).map(fmt).join(", ") + (n > 10 ? ", …" : "") + ". Their sum is " + fmt(sum) + ".";
  }
  if (kind === "arith" || kind === "geom") k.slider("Start a", kind === "geom" ? 1 : -10, 10, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); });
  if (kind === "arith") k.slider("Add d", -5, 10, 1, d, function (v) { return v; }, function (v) { d = +v; draw(); });
  if (kind === "geom") k.slider("Times r", -2, 3, 0.25, r, function (v) { return v; }, function (v) { r = +v; draw(); });
  k.slider("Terms", 3, 20, 1, n, function (v) { return v; }, function (v) { n = +v; draw(); });
  st.draw = draw; draw();
});
