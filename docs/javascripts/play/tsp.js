/* A travelling salesman's tour through random points (the browser's random numbers). Nearest neighbour: always go to
   the closest unvisited point. Then 2-opt: wherever two legs cross, reverse the stretch between them; each fix makes
   the tour shorter. Neither is guaranteed to find the best tour, which is the hard part. */
PLAY("tsp", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 20, P = [], T = [], first = 0;
  function d(a, b) { return Math.hypot(P[a][0] - P[b][0], P[a][1] - P[b][1]); }
  function len() { var s = 0; for (var i = 0; i < T.length; i++) s += d(T[i], T[(i + 1) % T.length]); return s; }
  function nn() { var left = []; for (var i = 1; i < n; i++) left.push(i); T = [0]; while (left.length) { var last = T[T.length - 1], bi = 0; left.forEach(function (p, j) { if (d(last, p) < d(last, left[bi])) bi = j; }); T.push(left.splice(bi, 1)[0]); } first = len(); }
  function make() { P = []; for (var i = 0; i < n; i++) P.push([30 + Math.random() * 370, 20 + Math.random() * 260]); nn(); }
  function opt() { var better = true, rounds = 0; while (better && rounds < 50) { better = false; rounds++; for (var i = 0; i < n - 1; i++) for (var j = i + 2; j < n; j++) { var a = T[i], b = T[i + 1], c = T[j], e = T[(j + 1) % n]; if (d(a, c) + d(b, e) < d(a, b) + d(c, e) - 1e-9) { T = T.slice(0, i + 1).concat(T.slice(i + 1, j + 1).reverse(), T.slice(j + 1)); better = true; } } } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath(); T.forEach(function (p, i) { i ? g.lineTo(P[p][0], P[p][1]) : g.moveTo(P[p][0], P[p][1]); }); g.closePath(); g.stroke(); g.lineWidth = 1;
    P.forEach(function (p, i) { g.fillStyle = i ? C.ice : C.rust; g.beginPath(); g.arc(p[0], p[1], 6, 0, 7); g.fill(); });
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(n + " stops", 430, 50);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("first try " + Math.round(first), 430, 84); g.fillStyle = C.gold; g.fillText("now " + Math.round(len()), 430, 110);
    out.textContent = "The tour is " + Math.round(len()) + " long, " + ((1 - len() / first) * 100).toFixed(1) + "% shorter than nearest neighbour's first try. Checking every tour of " + n + " stops would mean about " + (function () { var f = 1; for (var i = 2; i < n; i++) f *= i; return (f / 2).toExponential(1); })() + " tours.";
  }
  k.slider("Stops", 5, 40, 1, n, function (v) { return v; }, function (v) { n = v; make(); draw(); });
  k.buttons([["Uncross (2-opt)", function () { opt(); draw(); }], ["New points", function () { make(); draw(); }]]);
  st.draw = draw;
});
