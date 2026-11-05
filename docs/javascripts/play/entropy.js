/* Entropy of a coin, H(p) = −p log₂ p − (1 − p) log₂(1 − p) bits per flip. A fair coin carries a full bit; a coin
   that almost always lands heads tells you almost nothing new, and its flips can be packed into far fewer bits. */
PLAY("entropy", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), p = 0.5;
  function Hb(q) { return q <= 0 || q >= 1 ? 0 : -q * Math.log2(q) - (1 - q) * Math.log2(1 - q); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var L = 40, R = 400, T = 30, B = 250;
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(L, T); g.lineTo(L, B); g.lineTo(R, B); g.stroke();
    g.strokeStyle = C.ice; g.lineWidth = 2.5; g.beginPath(); for (var q = 0; q <= 1.0001; q += 0.005) { var x = L + q * (R - L), y = B - Hb(q) * (B - T); q ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); g.lineWidth = 1;
    g.fillStyle = C.gold; g.beginPath(); g.arc(L + p * (R - L), B - Hb(p) * (B - T), 7, 0, 7); g.fill();
    g.textAlign = "center"; g.font = F(17, 500); g.fillStyle = C.ink3; g.fillText("0", L, 272); g.fillText("½", (L + R) / 2, 272); g.fillText("1", R, 272); g.fillText("chance of heads", (L + R) / 2, 292);
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.gold; g.fillText("H = " + Hb(p).toFixed(3) + " bits", 420, 60);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("1,000 flips fit in", 420, 100); g.fillText("about " + Math.ceil(Hb(p) * 1000) + " bits", 420, 126);
    out.textContent = "A coin with heads " + (p * 100).toFixed(0) + "% of the time carries " + Hb(p).toFixed(3) + " bits per flip: Shannon's limit for how tightly its flips can be compressed.";
  }
  k.slider("Chance of heads", 0, 1, 0.01, p, function (v) { return v.toFixed(2); }, function (v) { p = v; draw(); });
  st.draw = draw;
});
