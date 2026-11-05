/* A function from a set A to a set B: one arrow from every member of A. One-to-one: no two arrows land together.
   Onto: every member of B is hit. Both: a bijection, which can be run backwards (an inverse), and then A and B are
   the same size. Press New for another function at random. */
PLAY("funcmap", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), m = 4, n = 4, f = [];
  function make() { f = []; for (var i = 0; i < m; i++) f.push(Math.floor(Math.random() * n)); }
  function yy(i, c) { return 150 + (i - (c - 1) / 2) * 44; }
  function draw() {
    var hit = {}, inj = true; f.forEach(function (v) { if (hit[v]) inj = false; hit[v] = 1; });
    var sur = Object.keys(hit).length === n;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "center";
    g.font = F(20, 700); g.fillStyle = C.ink2; g.fillText("A", 70, 26); g.fillText("B", 290, 26);
    g.strokeStyle = C.gold; g.lineWidth = 2;
    f.forEach(function (v, i) { var y1 = yy(i, m), y2 = yy(v, n); g.beginPath(); g.moveTo(84, y1); g.lineTo(270, y2); g.stroke(); g.beginPath(); g.moveTo(270, y2); g.lineTo(260, y2 - 6); g.lineTo(261, y2 + 6); g.closePath(); g.fillStyle = C.gold; g.fill(); });
    g.lineWidth = 1;
    for (var i = 0; i < m; i++) { g.fillStyle = C.ice; g.beginPath(); g.arc(70, yy(i, m), 14, 0, 7); g.fill(); g.fillStyle = C.bg; g.font = F(17, 700); g.fillText(i + 1, 70, yy(i, m) + 6); }
    for (i = 0; i < n; i++) { g.fillStyle = hit[i] ? C.rust : C.bg2; g.beginPath(); g.arc(290, yy(i, n), 14, 0, 7); g.fill(); g.strokeStyle = C.rust; g.stroke(); g.fillStyle = hit[i] ? C.bg : C.ink; g.fillText("abcdef"[i], 290, yy(i, n) + 6); }
    g.textAlign = "left"; g.font = F(19, 600);
    g.fillStyle = inj ? C.green : C.ink3; g.fillText((inj ? "✓" : "✗") + " one-to-one", 360, 80);
    g.fillStyle = sur ? C.green : C.ink3; g.fillText((sur ? "✓" : "✗") + " onto", 360, 114);
    g.fillStyle = inj && sur ? C.gold : C.ink3; g.fillText(inj && sur ? "a bijection: it has an inverse" : "no inverse", 360, 160, 230);
    out.textContent = !inj ? "Two arrows land together, so you could not tell where they came from: not one-to-one." : !sur ? "Some of B is never hit: not onto." : "Every member of B is hit exactly once: reverse the arrows to get the inverse.";
  }
  k.slider("Size of A", 1, 6, 1, m, function (v) { return v; }, function (v) { m = v; make(); draw(); });
  k.slider("Size of B", 1, 6, 1, n, function (v) { return v; }, function (v) { n = v; make(); draw(); });
  k.buttons([["New function", function () { make(); draw(); }]]);
  st.draw = draw;
});
