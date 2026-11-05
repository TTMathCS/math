/* Colour a map so that neighbours differ. Each circle is a region, each line a shared border (a made-up map of nine
   regions). Tap a region to change its colour; clashing borders turn red. Four colours always suffice for a map on a
   plane (the four colour theorem); this one also needs four, as the middle region and its ring of five neighbours
   show. Press Greedy to let the computer try. */
PLAY("colour", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, out;
  var V = [[200, 150], [200, 60], [285, 115], [255, 230], [145, 230], [115, 115], [60, 40], [340, 40], [340, 260]];
  var E = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [2, 3], [3, 4], [4, 5], [5, 1], [6, 1], [6, 5], [7, 1], [7, 2], [8, 3], [8, 2]];
  var COL = [C.ink3, C.gold, C.ice, C.rust, C.green], c = V.map(function () { return 0; });
  var st = k.stage(W, H, function (x, y) { V.forEach(function (v, i) { if (Math.hypot(v[0] - x, v[1] - y) < 24) { c[i] = c[i] % 4 + 1; draw(); } }); });
  var g = st.g; out = k.out();
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var bad = 0;
    E.forEach(function (e) { var clash = c[e[0]] && c[e[0]] === c[e[1]]; if (clash) bad++; g.strokeStyle = clash ? C.red : C.line; g.lineWidth = clash ? 4 : 2; g.beginPath(); g.moveTo(V[e[0]][0], V[e[0]][1]); g.lineTo(V[e[1]][0], V[e[1]][1]); g.stroke(); });
    g.lineWidth = 1; V.forEach(function (v, i) { g.fillStyle = COL[c[i]]; g.beginPath(); g.arc(v[0], v[1], 20, 0, 7); g.fill(); });
    var used = {}; c.forEach(function (x) { if (x) used[x] = 1; }); var done = c.every(function (x) { return x; });
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(Object.keys(used).length + " colours used", 400, 60);
    g.font = F(17, 500); g.fillStyle = bad ? C.red : C.green; g.fillText(bad ? bad + " clashing border" + (bad > 1 ? "s" : "") : done ? "a proper colouring" : "no clashes yet", 400, 92);
    out.textContent = done && !bad ? "Every border has two different colours. Could you do it with three? The middle region touches a ring of five, and an odd ring already needs three." : "Tap the regions to colour them.";
  }
  k.buttons([["Greedy", function () { c = V.map(function () { return 0; }); V.forEach(function (v, i) { var taken = {}; E.forEach(function (e) { if (e[0] === i) taken[c[e[1]]] = 1; if (e[1] === i) taken[c[e[0]]] = 1; }); for (var x = 1; x <= 4; x++) if (!taken[x]) { c[i] = x; break; } }); draw(); }], ["Clear", function () { c = V.map(function () { return 0; }); draw(); }]]);
  st.draw = draw; draw();
});
