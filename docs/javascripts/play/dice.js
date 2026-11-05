/* Roll dice in the browser (its random numbers stand in for real dice) and compare the tally with what the 36-square
   table, or the six faces, predict. data-n="1" or "2"; with two dice the totals 2 to 12 are counted. */
PLAY("dice", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, st = k.stage(W, H), g = st.g, out = k.out(), two = fig.getAttribute("data-n") === "2", R = [], timer = 0;
  var lo = two ? 2 : 1, hi = two ? 12 : 6;
  function p(v) { return two ? (6 - Math.abs(v - 7)) / 36 : 1 / 6; }
  function roll() { var a = 1 + Math.floor(Math.random() * 6); return two ? a + 1 + Math.floor(Math.random() * 6) : a; }
  function draw() {
    var n = R.length, cnt = {}; for (var v = lo; v <= hi; v++) cnt[v] = 0; R.forEach(function (r) { cnt[r]++; });
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var bw = 400 / (hi - lo + 1), mx = 0; for (v = lo; v <= hi; v++) mx = Math.max(mx, n ? cnt[v] / n : 0, p(v));
    for (v = lo; v <= hi; v++) { var x = 30 + (v - lo) * bw, h = n ? cnt[v] / n / mx * 180 : 0; g.fillStyle = C.ice; g.fillRect(x + 3, 220 - h, bw - 6, h);
      g.strokeStyle = C.gold; g.lineWidth = 3; var y = 220 - p(v) / mx * 180; g.beginPath(); g.moveTo(x + 1, y); g.lineTo(x + bw - 1, y); g.stroke();
      g.fillStyle = C.ink; g.font = F(17, 700); g.textAlign = "center"; g.fillText(v, x + bw / 2, 244); }
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(19, 700); g.fillText(n + " rolls", 30, 28);
    g.font = F(15, 600); g.fillStyle = C.ice; g.fillText("■ share of your rolls", 30, 270); g.fillStyle = C.gold; g.fillText("— what the faces predict", 220, 270);
    if (n) { var last = R.slice(-8).join(" "); g.fillStyle = C.ink2; g.font = F(17, 600, "m"); g.textAlign = "right"; g.fillText("last: " + last, 590, 28); }
  }
  function stop() { clearInterval(timer); timer = 0; }
  function many(m) { stop(); timer = setInterval(function () { for (var q = 0; q < Math.ceil(m / 60); q++) if (m-- > 0) R.push(roll()); draw(); if (m <= 0) stop(); }, 30); }
  k.buttons([["Roll once", function () { stop(); R.push(roll()); draw(); }], ["Roll 100", function () { many(100); }], ["Roll 1,000", function () { many(1000); }], ["Start again", function () { stop(); R = []; draw(); }]]);
  out.textContent = two ? "Each roll adds the two dice. Watch which totals pile up." : "Roll and watch the six bars even out as the rolls add up.";
  st.draw = draw; draw();
});
