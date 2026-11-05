/* Cosets on a clock of n hours. Keep adding d: you land on the multiples of gcd(n, d), a subgroup H with n ÷ gcd
   members. Shifting H round the clock gives its cosets, one colour each: they never overlap and they fill the clock,
   so the size of H times the number of cosets is n (Lagrange's theorem). */
PLAY("cosets", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 12, d = 8;
  var COL = [C.gold, C.ice, C.rust, C.green, C.mars, C.earth, C.ink2, C.red, "#c9a6e8", "#e8a6c9", "#a6e8d8", "#e8dca6"];
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function draw() {
    var gg = gcd(n, d), size = n / gg, cx = 150, cy = 150, R = 115;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke(); g.lineWidth = 1;
    g.strokeStyle = C.gold; g.beginPath();   // the path of adding d
    for (var j = 0; j <= size; j++) { var v = j * d % n, t = v / n * 2 * Math.PI - Math.PI / 2; j ? g.lineTo(cx + Math.cos(t) * R, cy + Math.sin(t) * R) : g.moveTo(cx + Math.cos(t) * R, cy + Math.sin(t) * R); }
    g.stroke(); g.textAlign = "center";
    for (var i = 0; i < n; i++) {
      var t = i / n * 2 * Math.PI - Math.PI / 2, x = cx + Math.cos(t) * R, y = cy + Math.sin(t) * R;
      g.fillStyle = COL[i % gg]; g.beginPath(); g.arc(x, y, n > 16 ? 10 : 14, 0, 7); g.fill();
      g.fillStyle = C.bg; g.font = F(n > 16 ? 12 : 16, 700); g.fillText(i, x, y + 5);
    }
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink;
    g.fillText("H = the multiples of " + gg, 310, 60);
    g.font = F(18, 500); g.fillStyle = C.ink2;
    g.fillText(size + " members in H", 310, 100); g.fillText(gg + " coset" + (gg > 1 ? "s" : "") + ", one colour each", 310, 130);
    g.fillStyle = C.gold; g.font = F(22, 700); g.fillText(size + " × " + gg + " = " + n, 310, 180);
    out.textContent = "Adding " + d + " again and again on a " + n + "-hour clock reaches " + size + " hours, the multiples of gcd(" + n + ", " + d + ") = " + gg + ". Its " + gg + " cosets split the clock into equal parts.";
  }
  k.slider("Hours n", 4, 24, 1, n, function (v) { return v; }, function (v) { n = v; if (d >= n) d = n - 1; draw(); });
  k.slider("Step d", 1, 23, 1, d, function (v) { return v; }, function (v) { d = Math.min(v, n - 1); draw(); });
  st.draw = draw;
});
