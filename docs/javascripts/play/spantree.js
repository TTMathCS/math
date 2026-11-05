/* A minimum spanning tree by Kruskal's method: take the edges from shortest to longest and keep each one that does not
   close a loop. The points are scattered at random (the browser's random numbers); edge length is distance. With n
   points the tree always has n − 1 edges. */
PLAY("spantree", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 12, P = [], E = [], kept = [], step = 0;
  function make() { P = []; for (var i = 0; i < n; i++) P.push([30 + Math.random() * 370, 20 + Math.random() * 260]); E = []; for (i = 0; i < n; i++) for (var j = i + 1; j < n; j++) E.push([Math.hypot(P[i][0] - P[j][0], P[i][1] - P[j][1]), i, j]); E.sort(function (a, b) { return a[0] - b[0]; }); kept = []; step = 0; }
  function tree(upto) { var par = []; for (var i = 0; i < n; i++) par.push(i); function f(x) { while (par[x] !== x) x = par[x] = par[par[x]]; return x; } var t = []; for (i = 0; i < upto && i < E.length; i++) { var a = f(E[i][1]), b = f(E[i][2]); if (a !== b) { par[a] = b; t.push(E[i]); } } return t; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    kept = tree(step); var total = 0;
    g.strokeStyle = "rgba(244,230,212,0.07)"; E.forEach(function (e) { g.beginPath(); g.moveTo(P[e[1]][0], P[e[1]][1]); g.lineTo(P[e[2]][0], P[e[2]][1]); g.stroke(); });
    g.strokeStyle = C.gold; g.lineWidth = 3; kept.forEach(function (e) { total += e[0]; g.beginPath(); g.moveTo(P[e[1]][0], P[e[1]][1]); g.lineTo(P[e[2]][0], P[e[2]][1]); g.stroke(); }); g.lineWidth = 1;
    P.forEach(function (p) { g.fillStyle = C.ice; g.beginPath(); g.arc(p[0], p[1], 6, 0, 7); g.fill(); });
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(kept.length + " of " + (n - 1) + " edges", 430, 60);
    g.font = F(17, 500); g.fillStyle = C.gold; g.fillText("length " + Math.round(total), 430, 92);
    out.textContent = kept.length === n - 1 ? "Done: " + (n - 1) + " edges join all " + n + " points with the least total length, and there are no loops." : "Kruskal has looked at the " + step + " shortest edges so far and kept those that join two separate pieces.";
  }
  k.slider("Points", 4, 25, 1, n, function (v) { return v; }, function (v) { n = v; make(); draw(); });
  k.buttons([["Next edge", function () { var before = tree(step).length; while (step < E.length && tree(step).length === before) step++; draw(); }], ["Finish", function () { step = E.length; draw(); }], ["New points", function () { make(); draw(); }]]);
  st.draw = draw;
});
