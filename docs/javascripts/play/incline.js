/* A block on a ramp with friction. Gravity pulls it down the slope with g sin θ; friction can hold back up to
   μs g cos θ. It stays put while tan θ ≤ μs; once it slips it speeds up at a = g (sin θ − μk cos θ). The friction numbers
   are made-up but typical (μk a little below μs). Earth 9.81 m/s², Mars 3.73 m/s²: the angle where it slips is the same
   on both, only the speed differs. */
PLAY("incline", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 320, th = 25, mus = 0.5, gr = 9.81, st = k.stage(W, H), g = st.g, out = k.out();
  function draw(t) {
    var a = th * Math.PI / 180, mk = mus * 0.8, slips = Math.tan(a) > mus, acc = slips ? gr * (Math.sin(a) - mk * Math.cos(a)) : 0;
    var L = 420, x0 = 90, y0 = 290, x1 = x0 + L * Math.cos(a), y1 = y0 - L * Math.sin(a);
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = C.bg2; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y0); g.lineTo(x1, y1); g.closePath(); g.fill();
    g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x0, y0); g.lineTo(x1 + 20, y0); g.stroke(); g.lineWidth = 1;
    var tt = t * 3, d = Math.min(0.5 * acc * tt * tt, L - 60), s = L - 40 - d, bx = x0 + s * Math.cos(a), by = y0 - s * Math.sin(a);
    g.save(); g.translate(bx, by); g.rotate(-a); g.fillStyle = slips ? C.rust : C.ice; g.fillRect(-24, -40, 48, 40);
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -20); g.lineTo(-70, -20); g.stroke();
    g.fillStyle = C.gold; g.beginPath(); g.moveTo(-78, -20); g.lineTo(-66, -27); g.lineTo(-66, -13); g.fill();
    g.strokeStyle = C.green; g.beginPath(); g.moveTo(0, -20); g.lineTo(70, -20); g.stroke();
    g.fillStyle = C.green; g.beginPath(); g.moveTo(78, -20); g.lineTo(66, -27); g.lineTo(66, -13); g.fill(); g.restore();
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = gr < 5 ? C.mars : C.earth; g.fillText(gr < 5 ? "Mars, g = 3.73" : "Earth, g = 9.81", 24, 34);
    g.font = F(17, 500); g.fillStyle = C.gold; g.fillText("gold: pull down the slope, g sin θ", 24, 60);
    g.fillStyle = C.green; g.fillText("green: friction holding it back", 24, 84);
    g.fillStyle = slips ? C.rust : C.ice; g.font = F(19, 600); g.fillText(slips ? "slides, a = " + acc.toFixed(2) + " m/s²" : "stays put", 24, 112);
    out.textContent = "θ = " + th + "°, tan θ = " + Math.tan(a).toFixed(2) + ", μs = " + mus.toFixed(2) + ". " + (slips ? "tan θ is larger, so friction cannot hold it: it slides at " + acc.toFixed(2) + " m/s² (μk = " + mk.toFixed(2) + ")." : "Friction holds it: it would slip above " + (Math.atan(mus) * 180 / Math.PI).toFixed(0) + "°, on Earth and Mars alike.");
  }
  var film = k.loop(3, draw, { label: "Time", start0: true });
  k.slider("Ramp angle θ", 5, 60, 1, th, function (x) { return x + "°"; }, function (x) { th = x; film.set(0); });
  k.slider("Grip μs", 0.1, 1, 0.05, mus, function (x) { return x.toFixed(2); }, function (x) { mus = x; film.set(0); });
  k.buttons([["Earth", function () { gr = 9.81; film.set(0); }], ["Mars", function () { gr = 3.73; film.set(0); }]], true);
  st.draw = function () { draw(film.t()); };
});
