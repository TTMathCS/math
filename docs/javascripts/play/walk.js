/* Random walks: each step goes up or down by 1 with even chances (the browser's random numbers). data-mode="line":
   ten walkers at once; their typical distance after n steps is about √n. "brown": the same walk with more and
   smaller steps squeezed into the same time looks the same at every scale: Brownian motion. "ruin": a gambler with
   a coins plays fair rounds until reaching 0 or N; the chance of reaching N first is a / N. */
PLAY("walk", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "line", n = 200, a = 3, NN = 10, wins = 0, games = 0, paths = [];
  var COL = [C.gold, C.ice, C.rust, C.green, C.mars, C.earth, C.ink2, C.red, "#c9a6e8", "#a6e8d8"];
  function make() { paths = []; var m = mode === "ruin" ? 10 : mode === "brown" ? 1 : 10; for (var w = 0; w < m; w++) { var p = [mode === "ruin" ? a : 0], x = p[0]; for (var i = 0; i < (mode === "ruin" ? 2000 : n); i++) { if (mode === "ruin" && (x <= 0 || x >= NN)) break; x += Math.random() < 0.5 ? -1 : 1; p.push(x); } paths.push(p); if (mode === "ruin") { games++; if (x >= NN) wins++; } } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var L = 30, R = 420, mid = 150, len = 1, top = 1;
    paths.forEach(function (p) { len = Math.max(len, p.length - 1); p.forEach(function (v) { top = Math.max(top, Math.abs(mode === "ruin" ? v - NN / 2 : v)); }); });
    if (mode === "line") top = Math.max(top, 3 * Math.sqrt(n));
    var sy = mode === "ruin" ? function (v) { return 270 - v / NN * 240; } : function (v) { return mid - v / top * 125; };
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(L, sy(0)); g.lineTo(R, sy(0)); if (mode === "ruin") { g.moveTo(L, sy(NN)); g.lineTo(R, sy(NN)); } g.stroke();
    if (mode === "line") { g.strokeStyle = "rgba(246,196,83,0.4)"; g.setLineDash([5, 5]); g.beginPath(); for (var i = 0; i <= n; i += 2) { var x = L + i / len * (R - L); i ? g.lineTo(x, sy(Math.sqrt(i))) : g.moveTo(x, sy(0)); } g.stroke(); g.beginPath(); for (i = 0; i <= n; i += 2) { x = L + i / len * (R - L); i ? g.lineTo(x, sy(-Math.sqrt(i))) : g.moveTo(x, sy(0)); } g.stroke(); g.setLineDash([]); }
    paths.forEach(function (p, w) { g.strokeStyle = COL[w % 10]; g.lineWidth = mode === "brown" ? 1.2 : 1.6; g.beginPath(); p.forEach(function (v, i) { var X = L + i / len * (R - L); i ? g.lineTo(X, sy(v)) : g.moveTo(X, sy(v)); }); g.stroke(); });
    g.lineWidth = 1; g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink;
    if (mode === "line") { var rms = Math.sqrt(paths.reduce(function (s, p) { return s + p[p.length - 1] * p[p.length - 1]; }, 0) / paths.length); g.fillText(n + " steps", 432, 50); g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("typical distance", 432, 84); g.fillText(rms.toFixed(1) + " (√n = " + Math.sqrt(n).toFixed(1) + ")", 432, 108); out.textContent = "The dashed curves are ±√n: most walkers stay inside them, though every one keeps wandering."; }
    if (mode === "brown") { g.fillText(n + " steps", 432, 50); g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("each step 1/√n", 432, 84); g.fillText("as tall as before", 432, 108); out.textContent = "With " + n + " steps squeezed into the same width and each step scaled by 1/√n, the path looks just as rough: zoom in and it never smooths out."; }
    if (mode === "ruin") { g.fillText("start " + a + ", goal " + NN, 432, 50, 160); g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("reached the goal:", 432, 84); g.fillText(wins + " of " + games + " games", 432, 108); g.fillText("theory a/N = " + (a / NN).toFixed(2), 432, 136); out.textContent = "In " + games + " fair games starting with " + a + " of " + NN + ", the gambler reached " + NN + " in " + (games ? (wins / games * 100).toFixed(0) : 0) + "%; the theory says " + (a / NN * 100).toFixed(0) + "%."; }
  }
  if (mode === "ruin") k.slider("Start a", 1, 9, 1, a, function (v) { return v; }, function (v) { a = v; wins = 0; games = 0; make(); draw(); });
  else k.slider("Steps n", mode === "brown" ? 50 : 10, mode === "brown" ? 20000 : 1000, mode === "brown" ? 50 : 10, n, function (v) { return v; }, function (v) { n = v; make(); draw(); });
  k.buttons([[mode === "ruin" ? "Ten more games" : "Walk again", function () { make(); draw(); }]]);
  st.draw = draw;
});
