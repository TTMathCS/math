/* geometry/level-8/03-sine-cosine-graphs.md: a point going round the unit circle. Its height is the sine of the
   angle and its distance across is the cosine; as the angle grows, the height draws the sine wave. "Hear it" plays a
   sine wave as a sound: a pure tone, 440 times round the circle each second. */
PLAY("unitwave", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), R = 90, cx = 120, cy = 150, x0 = 240, X = 330;
  function draw(t) {
    var a = t * 2 * Math.PI * 1.5, px = cx + Math.cos(a) * R, py = cy - Math.sin(a) * R;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.lineWidth = 1; g.beginPath(); g.moveTo(cx - R - 20, cy); g.lineTo(W - 10, cy); g.moveTo(cx, cy - R - 20); g.lineTo(cx, cy + R + 20); g.stroke();
    g.strokeStyle = "rgba(244,230,212,0.4)"; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke();
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); for (var u = 0; u <= a; u += 0.03) g[u ? "lineTo" : "moveTo"](x0 + u / (3 * Math.PI) * X, cy - Math.sin(u) * R); g.stroke();
    g.strokeStyle = C.ice; g.lineWidth = 2; g.beginPath(); g.moveTo(cx, cy); g.lineTo(px, py); g.stroke();
    g.strokeStyle = C.rust; g.beginPath(); g.moveTo(px, cy); g.lineTo(px, py); g.stroke();
    g.setLineDash([4, 5]); g.strokeStyle = "rgba(244,230,212,0.4)"; g.beginPath(); g.moveTo(px, py); g.lineTo(x0 + a / (3 * Math.PI) * X, py); g.stroke(); g.setLineDash([]);
    g.fillStyle = C.gold; g.beginPath(); g.arc(px, py, 6, 0, 7); g.fill(); g.beginPath(); g.arc(x0 + a / (3 * Math.PI) * X, py, 5, 0, 7); g.fill();
    var deg = Math.round(a * 180 / Math.PI) % 360;
    g.font = F(17, 600, "m"); g.fillStyle = C.ink; g.fillText("angle " + deg + "°", 14, 26); g.fillStyle = C.rust; g.fillText("sin = " + Math.sin(a).toFixed(2), 14, H - 34); g.fillStyle = C.ice; g.fillText("cos = " + Math.cos(a).toFixed(2), 14, H - 12);
    out.textContent = "At " + deg + "°, the point is " + Math.cos(a).toFixed(2) + " across and " + Math.sin(a).toFixed(2) + " up: the cosine and the sine.";
  }
  st.draw = function () { draw(film.t()); };
  var film = k.loop(12, draw, { start0: true, label: "Angle" });
  k.buttons([["Hear a sine wave", function () { var a = k.audio(); if (!a) return; var o = a.createOscillator(), e = a.createGain(); o.frequency.value = 440; e.gain.setValueAtTime(0, a.currentTime);
    e.gain.linearRampToValueAtTime(0.15, a.currentTime + 0.05); e.gain.linearRampToValueAtTime(0, a.currentTime + 1.5); o.connect(e); e.connect(a.destination); o.start(); o.stop(a.currentTime + 1.6); }]]);
});
