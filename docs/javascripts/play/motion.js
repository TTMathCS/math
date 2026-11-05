/* A trip as two graphs. data-mode="steady": two legs at two steady speeds. Left: distance against time (steeper is
   faster). Right: speed against time; the shaded area is the distance. data-mode="accel": speeding up steadily, as a
   dropped stone does on Earth (9.8 m/s each second). Made-up trips. */
PLAY("motion", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 285, st = k.stage(W, H), g = st.g, out = k.out(), acc = fig.getAttribute("data-mode") === "accel", v1 = 60, v2 = 20, t1 = 2, t2 = 2, a = 9.8, T = 4;
  function axes(x0, lab) { g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(x0, 20); g.lineTo(x0, 210); g.lineTo(x0 + 240, 210); g.stroke(); g.fillStyle = C.ink2; g.font = F(15, 700); g.textAlign = "left"; g.fillText(lab, x0 + 6, 24); g.textAlign = "right"; g.fillText("time →", x0 + 240, 232); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); axes(30, "distance"); axes(320, "speed");
    var tt = acc ? T : t1 + t2, D = function (t) { return acc ? a * t * t / 2 : t <= t1 ? v1 * t : v1 * t1 + v2 * (t - t1); }, V = function (t) { return acc ? a * t : t <= t1 ? v1 : v2; };
    var dm = D(tt), vm = acc ? a * T : Math.max(v1, v2), sx = 230 / tt;
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); for (var i = 0; i <= 100; i++) { var t = tt * i / 100; g[i ? "lineTo" : "moveTo"](30 + t * sx, 210 - D(t) / dm * 180); } g.stroke();
    g.fillStyle = C.ice; g.globalAlpha = 0.35; g.beginPath(); g.moveTo(320, 210); for (i = 0; i <= 100; i++) { t = tt * i / 100; g.lineTo(320 + t * sx, 210 - V(t) / vm * 180); } g.lineTo(320 + tt * sx, 210); g.fill(); g.globalAlpha = 1;
    g.strokeStyle = C.ice; g.beginPath(); for (i = 0; i <= 100; i++) { t = tt * i / 100; g[i ? "lineTo" : "moveTo"](320 + t * sx, 210 - V(t) / vm * 180); } g.stroke();
    out.textContent = acc ? "After " + T + " s: speed " + +(a * T).toFixed(1) + " m/s, distance ½ × " + a + " × " + T + "² = " + +(a * T * T / 2).toFixed(1) + " m, the shaded triangle. Average speed " + +(a * T / 2).toFixed(1) + " m/s."
      : v1 + " km/h for " + t1 + " h, then " + v2 + " km/h for " + t2 + " h: " + dm + " km in " + tt + " h, an average of " + +(dm / tt).toFixed(1) + " km/h (not the average of the two speeds unless the times match).";
  }
  if (acc) { k.slider("Seconds", 1, 10, 1, T, function (v) { return v + " s"; }, function (v) { T = +v; draw(); }); k.slider("Speed-up (m/s each second)", 1, 20, 0.2, a, function (v) { return v; }, function (v) { a = +v; draw(); }); }
  else { k.slider("Speed 1 (km/h)", 0, 100, 5, v1, function (v) { return v; }, function (v) { v1 = +v; draw(); }); k.slider("Hours at speed 1", 1, 5, 1, t1, function (v) { return v; }, function (v) { t1 = +v; draw(); });
    k.slider("Speed 2 (km/h)", 0, 100, 5, v2, function (v) { return v; }, function (v) { v2 = +v; draw(); }); k.slider("Hours at speed 2", 1, 5, 1, t2, function (v) { return v; }, function (v) { t2 = +v; draw(); }); }
  st.draw = draw; draw();
});
