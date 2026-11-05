/* Squares modulo a prime p. Each number x from 1 to p − 1 sends a line to x² mod p. Only half the numbers are hit
   (gold): the quadratic residues. −1, which is p − 1, is among them exactly when p leaves 1 on division by 4. */
PLAY("qres", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), ps = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41], p = 13;
  function draw() {
    var cx = 150, cy = 150, R = 118, sq = {};
    for (var x = 1; x < p; x++) sq[x * x % p] = 1;
    function pt(v) { var t = v / p * 2 * Math.PI - Math.PI / 2; return [cx + Math.cos(t) * R, cy + Math.sin(t) * R]; }
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = "rgba(156,201,234,0.35)";
    for (x = 1; x < p; x++) { var a = pt(x), b = pt(x * x % p); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); }
    g.textAlign = "center";
    for (x = 0; x < p; x++) { var q = pt(x); g.fillStyle = sq[x] ? C.gold : x === 0 ? C.ink3 : C.bg2; g.beginPath(); g.arc(q[0], q[1], p > 23 ? 9 : 13, 0, 7); g.fill(); g.strokeStyle = C.line; g.stroke(); g.fillStyle = sq[x] ? C.bg : C.ink2; g.font = F(p > 23 ? 11 : 15, 700); g.fillText(x, q[0], q[1] + 5); }
    var list = Object.keys(sq).map(Number).sort(function (u, v) { return u - v; });
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("Squares mod " + p + ":", 310, 50);
    g.font = F(18, 500); g.fillStyle = C.gold; g.fillText(list.join(", "), 310, 80, 280);
    g.fillStyle = C.ink2; g.fillText(list.length + " of the " + (p - 1) + " non-zero numbers", 310, 120);
    g.fillText("−1 = " + (p - 1) + (sq[p - 1] ? " is a square" : " is not a square"), 310, 160);
    g.fillText(p + " = 4 × " + Math.floor(p / 4) + " + " + p % 4, 310, 190);
    out.textContent = "Mod " + p + ", x and p − x have the same square, so exactly half the non-zero numbers, " + list.length + ", are squares.";
  }
  k.slider("Prime p", 0, ps.length - 1, 1, 3, function (v) { return ps[v]; }, function (v) { p = ps[v]; draw(); });
  st.draw = draw;
});
