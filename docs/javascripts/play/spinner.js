/* A spinner with coloured parts (data-parts="red:1,blue:1,gold:2": colour and size). Spin it and tally where it stops;
   the browser's random numbers stand in for a real spin. */
PLAY("spinner", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, st = k.stage(W, H), g = st.g, out = k.out(), ang = 0, spinning = false;
  var P = (fig.getAttribute("data-parts") || "red:1,blue:1").split(",").map(function (s) { var a = s.split(":"); return { c: a[0], w: +a[1], n: 0 }; }), tot = 0;
  P.forEach(function (q) { tot += q.w; }); var COL = { red: C.red, blue: C.ice, gold: C.gold, green: C.green, orange: C.rust };
  function at(a) { var f = ((a / (2 * Math.PI)) % 1 + 1) % 1, s = 0; for (var i = 0; i < P.length; i++) { s += P[i].w / tot; if (f < s) return i; } return P.length - 1; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var cx = 140, cy = 140, r = 110, a0 = 0;
    P.forEach(function (q) { var a1 = a0 + q.w / tot * 2 * Math.PI; g.fillStyle = COL[q.c] || C.ink3; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, r, a0 - Math.PI / 2, a1 - Math.PI / 2); g.fill(); g.strokeStyle = C.bg; g.lineWidth = 3; g.stroke(); a0 = a1; });
    g.strokeStyle = C.ink; g.lineWidth = 5; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.sin(ang) * (r - 12), cy - Math.cos(ang) * (r - 12)); g.stroke(); g.fillStyle = C.ink; g.beginPath(); g.arc(cx, cy, 8, 0, 7); g.fill();
    var n = 0; P.forEach(function (q) { n += q.n; }); g.textAlign = "left"; g.font = F(18, 700); g.fillStyle = C.ink; g.fillText(n + " spins", 300, 34);
    P.forEach(function (q, i) { var y = 60 + i * 40; g.fillStyle = C.ink; g.font = F(17, 700); g.fillText(q.c + " " + q.n, 300, y + 20); g.fillStyle = COL[q.c] || C.ink3; g.fillRect(400, y + 2, Math.max(2, n ? 180 * q.n / n : 0), 24); if (n) { g.fillStyle = C.ink2; g.font = F(15, 600); g.fillText(Math.round(100 * q.n / n) + "%", 400 + Math.max(2, 180 * q.n / n) - 40 < 404 ? 404 : 400 + 180 * q.n / n - 44, y + 20); } });
  }
  function spin(times) { if (spinning) return; if (times > 1) { for (var t = 0; t < times; t++) { ang = Math.random() * 2 * Math.PI; P[at(ang)].n++; } draw(); return; }
    spinning = true; var start = ang, end = ang + 6 * Math.PI + Math.random() * 2 * Math.PI, t0 = performance.now();
    (function step(now) { var u = Math.min(1, (now - t0) / 1500); ang = start + (end - start) * (1 - Math.pow(1 - u, 3)); draw(); if (u < 1) requestAnimationFrame(step); else { P[at(ang)].n++; spinning = false; draw(); } })(t0); }
  k.buttons([["Spin", function () { spin(1); }], ["Spin 100", function () { spin(100); }], ["Start again", function () { P.forEach(function (q) { q.n = 0; }); draw(); }]]);
  out.textContent = "Bigger parts catch the arrow more often. " + P.map(function (q) { return q.c + " is " + q.w + "/" + tot + " of the circle"; }).join(", ") + ".";
  st.draw = draw; draw();
});
