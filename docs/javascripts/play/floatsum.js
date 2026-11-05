/* Add 0.1 to itself n times in ordinary floating point (the same 64-bit numbers Python's float uses; this page does
   it live in your browser). 0.1 has no exact binary form, so each add lands on the nearest number the computer can
   store, and the small misses pile up. The chart shows the gap from the exact answer n ÷ 10. */
PLAY("floatsum", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, n = 10, st = k.stage(W, H), g = st.g, out = k.out(), pts = [];
  function run() { pts = []; var s = 0; for (var i = 1; i <= n; i++) { s += 0.1; pts.push(s - i / 10); } return s; }
  function draw() {
    var s = run(), mx = 1e-18; pts.forEach(function (e) { mx = Math.max(mx, Math.abs(e)); });
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(40, 185); g.lineTo(580, 185); g.stroke();
    g.strokeStyle = C.rust; g.lineWidth = 2; g.beginPath();
    pts.forEach(function (e, i) { var x = 40 + 540 * (i + 1) / n, y = 185 - 80 * e / mx; i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(18, 500, "m"); g.fillStyle = C.ink;
    g.fillText("total  = " + s.toPrecision(17), 40, 32);
    g.fillStyle = C.ink2; g.fillText("exact  = " + (n / 10), 40, 58);
    g.font = F(17, 500); g.fillStyle = C.rust; g.fillText("gap from the exact sum as you add (biggest " + mx.toExponential(1) + ")", 40, 88);
    out.textContent = "After " + n.toLocaleString() + " adds of 0.1 the total is " + s.toPrecision(17) + " instead of " + n / 10 + ". This is why money and == tests on floats need care.";
  }
  var steps = [3, 10, 30, 100, 1000, 10000, 100000, 1000000];
  k.slider("How many 0.1s", 0, steps.length - 1, 1, 1, function (i) { return steps[i].toLocaleString(); }, function (i) { n = steps[i]; draw(); });
  st.draw = draw;
});
