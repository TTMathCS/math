/* Monte Carlo: throw random points (the browser's random numbers) into a square; the share that land inside the
   quarter circle is close to π/4. Four times the share estimates π, with an error that shrinks like 1/√n. */
PLAY("montecarlo", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), P = [], n = 0, inside = 0;
  function add(m) { for (var i = 0; i < m; i++) { var x = Math.random(), y = Math.random(), on = x * x + y * y <= 1; n++; if (on) inside++; if (P.length < 4000) P.push([x, y, on]); } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.strokeRect(30, 20, 260, 260); g.strokeStyle = C.ink3; g.beginPath(); g.arc(30, 280, 260, -Math.PI / 2, 0); g.stroke();
    P.forEach(function (p) { g.fillStyle = p[2] ? C.gold : C.ice; g.fillRect(30 + p[0] * 260 - 1, 280 - p[1] * 260 - 1, 2.4, 2.4); });
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText(n.toLocaleString("en") + " points", 320, 50);
    g.font = F(17, 500); g.fillStyle = C.gold; g.fillText(inside.toLocaleString("en") + " inside", 320, 80);
    g.font = F(20, 700); g.fillStyle = C.ink; g.fillText("π ≈ " + (n ? (4 * inside / n).toFixed(4) : "?"), 320, 124);
    out.textContent = n ? "4 × " + inside + " ÷ " + n + " = " + (4 * inside / n).toFixed(4) + ", off by " + Math.abs(4 * inside / n - Math.PI).toFixed(4) + ". A hundred times more points makes the error about ten times smaller." : "Throw some points.";
  }
  k.buttons([["Add 100", function () { add(100); draw(); }], ["Add 10,000", function () { add(10000); draw(); }], ["Clear", function () { P = []; n = 0; inside = 0; draw(); }]]);
  st.draw = draw; draw();
});
