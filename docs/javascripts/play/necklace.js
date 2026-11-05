/* Counting necklaces with Burnside's lemma. A necklace of n beads in c colours can be coloured c^n ways, but turning
   it round gives the same necklace. Burnside: the number of different necklaces is the average, over all turns, of
   the colourings each turn leaves unchanged: (1/n) Σ c^gcd(k, n). The rings below are one of each. */
PLAY("necklace", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 4, c = 2;
  var COL = [C.gold, C.earth, C.rust];
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function draw() {
    var seen = {}, reps = [];
    for (var x = 0; x < Math.pow(c, n); x++) {
      var d = [], v = x; for (var i = 0; i < n; i++) { d.push(v % c); v = Math.floor(v / c); }
      var best = null; for (var r = 0; r < n; r++) { var s = d.slice(r).concat(d.slice(0, r)).join(""); if (best === null || s < best) best = s; }
      if (!seen[best]) { seen[best] = 1; reps.push(best); }
    }
    var sum = 0; for (r = 0; r < n; r++) sum += Math.pow(c, gcd(r, n));
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var per = 8, sz = 66, shown = Math.min(reps.length, 24);
    for (i = 0; i < shown; i++) {
      var cx = 40 + (i % per) * sz, cy = 36 + Math.floor(i / per) * sz, R = 21;
      g.strokeStyle = C.ink3; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke();
      for (var j = 0; j < n; j++) { var t = j / n * 2 * Math.PI - Math.PI / 2; g.fillStyle = COL[+reps[i][j]]; g.beginPath(); g.arc(cx + Math.cos(t) * R, cy + Math.sin(t) * R, Math.min(8, 56 / n), 0, 7); g.fill(); }
    }
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink;
    g.fillText(Math.pow(c, n) + " colourings, " + reps.length + " different necklaces", 24, 234);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("Burnside: " + sum + " ÷ " + n + " = " + sum / n + (reps.length > shown ? "  (first " + shown + " shown)" : ""), 24, 264, 440);
    out.textContent = "Turning a necklace round does not make a new one, so " + Math.pow(c, n) + " colourings give only " + reps.length + " necklaces.";
  }
  k.slider("Beads n", 2, 8, 1, n, function (v) { return v; }, function (v) { n = v; draw(); });
  k.slider("Colours c", 2, 3, 1, c, function (v) { return v; }, function (v) { c = v; draw(); });
  st.draw = draw;
});
