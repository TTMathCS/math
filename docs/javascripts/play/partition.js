/* Partitions of n: ways to write n as a sum of whole numbers, order ignored, drawn as rows of dots (a Ferrers
   diagram). Flip the diagram over its diagonal and you get another partition, its conjugate. Euler: the partitions
   into odd parts are exactly as many as those into different parts. */
PLAY("partition", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 7, idx = 0, conj = false, all;
  function parts(m, max) { if (!m) return [[]]; var r = []; for (var a = Math.min(m, max); a >= 1; a--) parts(m - a, a).forEach(function (p) { r.push([a].concat(p)); }); return r; }
  all = parts(n, n);
  function draw() {
    var p = all[idx % all.length].slice();
    if (conj) { var q = []; for (var c = 0; c < p[0]; c++) q.push(p.filter(function (v) { return v > c; }).length); p = q; }
    var odd = all.filter(function (a) { return a.every(function (v) { return v % 2; }); }).length;
    var dist = all.filter(function (a) { return a.every(function (v, i) { return !i || v !== a[i - 1]; }); }).length;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var s = Math.min(22, 250 / Math.max(p.length, p[0]));
    p.forEach(function (v, r) { for (var c = 0; c < v; c++) { g.fillStyle = conj ? C.ice : C.gold; g.beginPath(); g.arc(40 + c * s, 40 + r * s, s * 0.38, 0, 7); g.fill(); } });
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText(n + " = " + p.join(" + "), 320, 50, 270);
    g.font = F(18, 500); g.fillStyle = C.ink2;
    g.fillText("Partition " + (idx % all.length + 1) + " of " + all.length, 320, 86);
    g.fillText("Into odd parts: " + odd, 320, 130); g.fillText("Into different parts: " + dist, 320, 158);
    out.textContent = "p(" + n + ") = " + all.length + ". " + (conj ? "Flipped over the diagonal: rows became columns." : "Each row is one part.");
  }
  k.slider("n", 1, 14, 1, n, function (v) { return v; }, function (v) { n = v; all = parts(n, n); idx = 0; conj = false; draw(); });
  k.buttons([["Next", function () { idx++; conj = false; draw(); }], ["Flip it", function () { conj = !conj; draw(); }]]);
  st.draw = draw;
});
