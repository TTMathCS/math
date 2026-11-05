/* A factor tree. Split n into two factors, again and again, until every branch ends in a prime (gold). However you
   split, the primes at the ends are the same: unique factorisation. Press Split another way to try. */
PLAY("factree", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 360, pick = 0;
  function divs(m) { var D = []; for (var d = 2; d * d <= m; d++) if (m % d === 0) D.push(d); return D; }
  function tree(m, depth) { var D = divs(m); if (!D.length) return { v: m }; var d = D[(pick + depth) % D.length]; return { v: m, l: tree(d, depth + 1), r: tree(m / d, depth + 1) }; }
  function leaves(t) { return t.l ? leaves(t.l).concat(leaves(t.r)) : [t.v]; }
  function width(t) { return t.l ? width(t.l) + width(t.r) : 1; }
  function drawT(t, x0, x1, y) { var x = (x0 + x1) / 2; if (t.l) { var wl = width(t.l), wr = width(t.r), xm = x0 + (x1 - x0) * wl / (wl + wr); g.strokeStyle = C.ink3; g.lineWidth = 2;
      [[x0, xm, t.l], [xm, x1, t.r]].forEach(function (s) { g.beginPath(); g.moveTo(x, y + 12); g.lineTo((s[0] + s[1]) / 2, y + 42); g.stroke(); drawT(s[2], s[0], s[1], y + 54); }); }
    g.fillStyle = t.l ? C.ink : C.gold; g.font = F(18, 800); g.textAlign = "center"; g.fillText(t.v, x, y + 6); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var t = tree(n, 0), L = leaves(t).sort(function (a, b) { return a - b; }); drawT(t, 20, 460, 24);
    var cnt = {}; L.forEach(function (p) { cnt[p] = (cnt[p] || 0) + 1; }); var nd = 1; Object.keys(cnt).forEach(function (p) { nd *= cnt[p] + 1; });
    out.textContent = n + " = " + Object.keys(cnt).map(function (p) { return p + (cnt[p] > 1 ? "^" + cnt[p] : ""); }).join(" × ") + (L.length === 1 ? " (prime)" : "") + ". It has " + nd + " factors in all: multiply one more than each power.";
  }
  k.slider("n", 2, 500, 1, n, function (v) { return v; }, function (v) { n = +v; pick = 0; draw(); });
  k.buttons([["Split another way", function () { pick++; draw(); }]]);
  st.draw = draw; draw();
});
