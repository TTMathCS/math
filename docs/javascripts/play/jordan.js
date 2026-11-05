/* Inside or outside? A closed curve that never crosses itself splits the plane in two (the Jordan curve theorem).
   Tap anywhere: a ray goes from your point off to the right, and counts how often it crosses the curve. Odd means
   inside, even means outside. */
PLAY("jordan", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, out, pt = [205, 150], poly = [];
  for (var i = 0; i < 240; i++) { var t = i / 240 * 2 * Math.PI, r = 110 + 38 * Math.sin(5 * t) + 18 * Math.cos(3 * t); poly.push([210 + r * Math.cos(t) * 1.15, 150 + r * Math.sin(t) * 0.95]); }
  var st = k.stage(W, H, function (x, y) { pt = [x, y]; draw(); });
  var g = st.g; out = k.out();
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.ice; g.lineWidth = 2.5; g.beginPath(); poly.forEach(function (p, i) { i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); }); g.closePath(); g.stroke(); g.lineWidth = 1;
    var hits = [];
    for (var i = 0; i < poly.length; i++) { var a = poly[i], b = poly[(i + 1) % poly.length]; if ((a[1] > pt[1]) !== (b[1] > pt[1])) { var x = a[0] + (pt[1] - a[1]) / (b[1] - a[1]) * (b[0] - a[0]); if (x > pt[0]) hits.push(x); } }
    var inside = hits.length % 2 === 1;
    g.strokeStyle = C.gold; g.setLineDash([6, 5]); g.beginPath(); g.moveTo(pt[0], pt[1]); g.lineTo(W, pt[1]); g.stroke(); g.setLineDash([]);
    hits.forEach(function (x) { g.fillStyle = C.rust; g.beginPath(); g.arc(x, pt[1], 6, 0, 7); g.fill(); });
    g.fillStyle = inside ? C.green : C.red; g.beginPath(); g.arc(pt[0], pt[1], 8, 0, 7); g.fill();
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = inside ? C.green : C.red; g.fillText(hits.length + " crossing" + (hits.length === 1 ? "" : "s") + ": " + (inside ? "inside" : "outside"), 420, 30, 170);
    out.textContent = "The ray crosses the curve " + hits.length + " time" + (hits.length === 1 ? "" : "s") + ". Each crossing swaps inside and outside, so " + (inside ? "an odd number means inside." : "an even number means outside.");
  }
  st.draw = draw; draw();
});
