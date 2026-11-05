/* A thin converging lens of focal length f. Two rays from the top of the object find the image: one parallel to the
   axis bends through the far focus, one through the centre goes straight. 1/f = 1/d_o + 1/d_i. Inside the focal
   length the rays spread and the image is virtual, upright and on the same side, as with a magnifying glass. */
PLAY("lens", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), f = 80, d = 200, ho = 50;
  function draw() {
    var cx = 300, ay = 170, di = 1 / (1 / f - 1 / d), m = -di / d, hi = m * ho;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(0, ay); g.lineTo(W, ay); g.stroke();
    g.strokeStyle = C.ice; g.lineWidth = 3; g.beginPath(); g.ellipse(cx, ay, 8, 110, 0, 0, 7); g.stroke(); g.lineWidth = 1;
    [cx - f, cx + f].forEach(function (x) { g.fillStyle = C.ink2; g.beginPath(); g.arc(x, ay, 4, 0, 7); g.fill(); });
    var ox = cx - d, oy = ay - ho; g.strokeStyle = C.gold; g.lineWidth = 4; g.beginPath(); g.moveTo(ox, ay); g.lineTo(ox, oy); g.stroke(); g.lineWidth = 1.5;
    g.save(); g.beginPath(); g.rect(0, 0, W, H); g.clip();
    g.strokeStyle = C.rust; g.beginPath(); g.moveTo(ox, oy); g.lineTo(cx, oy); var sl = ho / f; g.lineTo(cx + 400, oy + sl * 400); g.stroke();
    g.beginPath(); g.moveTo(ox, oy); g.lineTo(cx + 400, oy + (ay - oy) / d * (d + 400)); g.stroke();
    if (di < 0) { g.setLineDash([5, 5]); g.strokeStyle = C.ink3; g.beginPath(); g.moveTo(cx, oy); g.lineTo(cx + di, ay - hi); g.moveTo(ox, oy); g.lineTo(cx + di, ay - hi); g.stroke(); g.setLineDash([]); }
    g.strokeStyle = di > 0 ? C.green : C.ink2; g.lineWidth = 4; g.beginPath(); g.moveTo(cx + di, ay); g.lineTo(cx + di, ay - hi); g.stroke(); g.restore(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("d_i = " + di.toFixed(0) + ", magnification " + m.toFixed(2), 20, 26);
    out.textContent = di > 0 ? "A real image " + di.toFixed(0) + " units behind the lens, " + (m < 0 ? "upside down" : "") + " and " + Math.abs(m).toFixed(2) + " times the size." : "Inside the focal length: the rays spread, and traced back they meet in front of the lens, a virtual upright image " + Math.abs(m).toFixed(2) + " times the size.";
  }
  k.slider("Object distance", 30, 290, 2, d, function (x) { return x; }, function (x) { d = Math.abs(x - f) < 2 ? x + 2 : x; draw(); });
  k.slider("Focal length", 40, 140, 2, f, function (x) { return x; }, function (x) { f = x; draw(); });
  st.draw = draw;
});
