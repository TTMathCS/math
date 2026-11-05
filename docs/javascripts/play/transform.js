/* Slides, flips and turns of a flag shape on a grid. Each button moves the gold copy; the grey one stays where it
   started, so you can compare. The shape keeps its size and angles every time. */
PLAY("transform", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), u = 26, S0 = [[1, 1], [1, 5], [3, 4], [1, 3]], S, log;
  function reset() { S = S0.map(function (p) { return p.slice(); }); log = "Start: the grey and gold flags are the same."; draw(); }
  function X(x) { return 300 + x * u; } function Y(y) { return 150 - y * u; }
  function poly(P, col, fill) { g.beginPath(); P.forEach(function (p, i) { g[i ? "lineTo" : "moveTo"](X(p[0]), Y(p[1])); }); g.closePath(); if (fill) { g.fillStyle = col; g.globalAlpha = 0.55; g.fill(); g.globalAlpha = 1; } g.strokeStyle = col; g.lineWidth = 3; g.stroke(); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.line; g.lineWidth = 1;
    for (var i = -11; i <= 11; i++) { g.beginPath(); g.moveTo(X(i), 10); g.lineTo(X(i), 290); g.stroke(); } for (i = -5; i <= 5; i++) { g.beginPath(); g.moveTo(10, Y(i)); g.lineTo(590, Y(i)); g.stroke(); }
    g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(10, Y(0)); g.lineTo(590, Y(0)); g.moveTo(X(0), 10); g.lineTo(X(0), 290); g.stroke();
    poly(S0, C.ink3, false); poly(S, C.gold, true); out.textContent = log;
  }
  function apply(f, msg) { S = S.map(f); log = msg; draw(); }
  k.buttons([["Slide right 3", function () { apply(function (p) { return [p[0] + 3, p[1]]; }, "Slide (translation): every point moves 3 right."); }],
    ["Flip over y-axis", function () { apply(function (p) { return [-p[0], p[1]]; }, "Flip (reflection) in the y-axis: (x, y) becomes (−x, y). Now it faces the other way."); }],
    ["Flip over x-axis", function () { apply(function (p) { return [p[0], -p[1]]; }, "Flip in the x-axis: (x, y) becomes (x, −y)."); }],
    ["Turn 90°", function () { apply(function (p) { return [-p[1], p[0]]; }, "Turn (rotation) 90° anticlockwise about the origin: (x, y) becomes (−y, x)."); }],
    ["Start again", reset]]);
  st.draw = draw; reset();
});
