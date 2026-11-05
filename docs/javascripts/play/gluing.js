/* Surfaces from a square. Glue the left edge to the right and the top to the bottom, arrows matching, and you get a
   torus: a point walking off one edge comes back on the opposite edge. With the top and bottom glued the other way
   round (data-mode="klein") you get a Klein bottle: coming back over the top, the walker is mirrored. Press Play. */
PLAY("gluing", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), klein = fig.getAttribute("data-mode") === "klein";
  var x0 = 40, y0 = 30, S = 240;
  function arrow(x1, y1, x2, y2, col, n) { g.strokeStyle = col; g.fillStyle = col; g.lineWidth = 4; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.lineWidth = 1; var mx = (x1 + x2) / 2, my = (y1 + y2) / 2, a = Math.atan2(y2 - y1, x2 - x1); for (var i = 0; i < n; i++) { var cx = mx + Math.cos(a) * (i * 12 - 6 * (n - 1)), cy = my + Math.sin(a) * (i * 12 - 6 * (n - 1)); g.beginPath(); g.moveTo(cx + Math.cos(a) * 9, cy + Math.sin(a) * 9); g.lineTo(cx - Math.cos(a) * 6 + Math.sin(a) * 8, cy - Math.sin(a) * 6 - Math.cos(a) * 8); g.lineTo(cx - Math.cos(a) * 6 - Math.sin(a) * 8, cy - Math.sin(a) * 6 + Math.cos(a) * 8); g.fill(); } }
  function draw(t) {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(91,143,201,0.12)"; g.fillRect(x0, y0, S, S);
    arrow(x0, y0 + S, x0, y0, C.gold, 1); arrow(x0 + S, y0 + S, x0 + S, y0, C.gold, 1);
    arrow(x0, y0, x0 + S, y0, C.ice, 2); if (klein) arrow(x0 + S, y0 + S, x0, y0 + S, C.ice, 2); else arrow(x0, y0 + S, x0 + S, y0 + S, C.ice, 2);
    var u = 0.3, v = 0, flips = 0, trail = [];   // walk up and to the right, wrapping round the edges
    for (var s = 0; s <= t * 400; s++) { u += 0.004; v += (flips % 2 ? -1 : 1) * 0.006; if (u > 1) u -= 1; if (v > 1) { v -= 1; if (klein) { u = 1 - u; flips++; } } if (v < 0) { v += 1; if (klein) { u = 1 - u; flips++; } } trail.push([u, v]); }
    g.fillStyle = C.rust; trail.forEach(function (p, i) { if (i % 3) return; g.globalAlpha = 0.2 + 0.8 * i / trail.length; g.fillRect(x0 + p[0] * S - 1.5, y0 + S - p[1] * S - 1.5, 3, 3); }); g.globalAlpha = 1;
    var p = trail[trail.length - 1] || [u, v]; g.fillStyle = C.gold; g.beginPath(); g.arc(x0 + p[0] * S, y0 + S - p[1] * S, 8, 0, 7); g.fill();
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText(klein ? "Klein bottle" : "Torus", 310, 60);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("one arrow: left and right glued", 310, 96); g.fillText("two arrows: top and bottom", 310, 122); g.fillText(klein ? "glued with a twist" : "glued straight", 310, 148);
    out.textContent = klein ? "Each time the walker crosses the top edge it comes back mirrored: a surface with no inside or outside." : "The walker never meets an edge: it wraps round, as an ant on a doughnut would.";
  }
  var film = k.loop(10, draw, { label: "Time", start0: true });
  st.draw = function () { draw(film.t()); };
});
