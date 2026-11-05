/* A clock face. Move the time and read both hands; the hour hand moves a little as the minutes pass. data-mode="elapsed"
   adds a time on: start at the set time and add minutes. */
PLAY("timeclock", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), el = fig.getAttribute("data-mode") === "elapsed", t = 3 * 60 + 15, add = 50;
  function hm(m) { m = ((m % 720) + 720) % 720; var h = Math.floor(m / 60), mm = m % 60; return (h || 12) + ":" + (mm < 10 ? "0" : "") + mm; }
  function face(cx, cy, R, m, col) { g.strokeStyle = C.ink3; g.lineWidth = 3; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke();
    for (var i = 1; i <= 12; i++) { var a = i / 12 * 2 * Math.PI - Math.PI / 2; g.fillStyle = C.ink; g.font = F(16, 800); g.textAlign = "center"; g.fillText(i, cx + Math.cos(a) * (R - 18), cy + Math.sin(a) * (R - 18) + 6); }
    var ma = (m % 60) / 60 * 2 * Math.PI - Math.PI / 2, ha = (m % 720) / 720 * 2 * Math.PI - Math.PI / 2; g.lineCap = "round";
    g.strokeStyle = col; g.lineWidth = 7; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(ha) * R * 0.5, cy + Math.sin(ha) * R * 0.5); g.stroke();
    g.lineWidth = 4; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(ma) * R * 0.8, cy + Math.sin(ma) * R * 0.8); g.stroke(); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); face(130, 130, 105, t, C.gold); g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(30, 800); g.fillText(hm(t), 270, 90);
    if (el) { face(470, 130, 80, t + add, C.ice); g.fillStyle = C.ink2; g.font = F(18, 700); g.fillText("+ " + add + " min →", 270, 200); out.textContent = hm(t) + " plus " + add + " minutes is " + hm(t + add) + (Math.floor((t % 60 + add) / 60) ? ": past the hour, so carry 60 minutes into 1 hour." : "."); }
    else out.textContent = "The short hand points between " + (Math.floor(t / 60) % 12 || 12) + " and " + ((Math.floor(t / 60) % 12) + 1) + "; the long hand points to " + (t % 60) + " minutes. It reads " + hm(t) + ".";
  }
  k.slider("Time", 0, 719, 5, t, function (v) { return hm(+v); }, function (v) { t = +v; draw(); });
  if (el) k.slider("Minutes to add", 5, 180, 5, add, function (v) { return v; }, function (v) { add = +v; draw(); });
  st.draw = draw; draw();
});
