/* Angles. data-mode="one": turn a ray and read the angle and its name. data-mode="triangle": change two angles of a
   triangle; the third is whatever makes 180°. data-mode="polygon": the angles inside a polygon add to (n − 2) × 180°. */
PLAY("angle", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "one", A = 50, B = 70, n = 5;
  function name(a) { return a < 90 ? "acute" : a === 90 ? "right" : a < 180 ? "obtuse" : a === 180 ? "straight" : a < 360 ? "reflex" : "full turn"; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.lineCap = "round";
    if (mode === "one") { var cx = 300, cy = 170, r = 120, t = -A * Math.PI / 180; g.fillStyle = C.gold; g.globalAlpha = 0.25; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, 60, 0, t, true); g.fill(); g.globalAlpha = 1;
      g.strokeStyle = C.ink; g.lineWidth = 5; g.beginPath(); g.moveTo(cx + r, cy); g.lineTo(cx, cy); g.lineTo(cx + Math.cos(t) * r, cy + Math.sin(t) * r); g.stroke();
      g.fillStyle = C.ink; g.font = F(26, 800); g.textAlign = "center"; g.fillText(A + "°", 300, 36); out.textContent = A + "° is " + (/^[ao]/.test(name(A)) ? "an " : "a ") + name(A) + " angle."; }
    else if (mode === "triangle") { var Cc = 180 - A - B; if (Cc <= 0) { out.textContent = "The two angles already make " + (A + B) + "°: no room for a third. A triangle's angles add to 180°."; g.fillStyle = C.red; g.font = F(22, 800); g.textAlign = "center"; g.fillText("no triangle", 300, 140); return; }
      var a = A * Math.PI / 180, b = B * Math.PI / 180, base = 380, x0 = 110, y0 = 230, hgt = base * Math.sin(a) * Math.sin(b) / Math.sin(a + b), px = x0 + hgt / Math.tan(a);
      var sc = Math.min(1, 200 / hgt); hgt *= sc; var bb = base * sc, pxx = x0 + (px - x0) * sc;
      g.fillStyle = C.ice; g.globalAlpha = 0.3; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + bb, y0); g.lineTo(pxx, y0 - hgt); g.closePath(); g.fill(); g.globalAlpha = 1; g.strokeStyle = C.ice; g.lineWidth = 3; g.stroke();
      g.font = F(19, 800); g.textAlign = "center"; g.fillStyle = C.gold; g.fillText(A + "°", x0 + 34, y0 - 10); g.fillStyle = C.green; g.fillText(B + "°", x0 + bb - 34, y0 - 10); g.fillStyle = C.rust; g.fillText(Cc + "°", pxx, y0 - hgt + 34);
      out.textContent = A + "° + " + B + "° + " + Cc + "° = 180°."; }
    else { var R = 100, cx2 = 200, cy2 = 140; g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); for (var i = 0; i <= n; i++) { var tt = i / n * 2 * Math.PI - Math.PI / 2; g[i ? "lineTo" : "moveTo"](cx2 + Math.cos(tt) * R, cy2 + Math.sin(tt) * R); } g.stroke();
      g.strokeStyle = C.ink3; g.lineWidth = 1.5; for (i = 2; i < n - 1 + 1; i++) { if (i >= n - 0) break; var t1 = -Math.PI / 2, t2 = i / n * 2 * Math.PI - Math.PI / 2; if (i < n - 1) { g.beginPath(); g.moveTo(cx2 + Math.cos(t1) * R, cy2 + Math.sin(t1) * R); g.lineTo(cx2 + Math.cos(t2) * R, cy2 + Math.sin(t2) * R); g.stroke(); } }
      g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(20, 800); g.fillText(n + " sides", 340, 80); g.fillText((n - 2) + " triangles", 340, 112); g.fillStyle = C.gold; g.fillText((n - 2) * 180 + "° in all", 340, 144); g.fillStyle = C.ink2; g.font = F(16, 600); g.fillText("each, if regular: " + +((n - 2) * 180 / n).toFixed(1) + "°", 340, 176);
      out.textContent = "Lines from one corner cut a " + n + "-sided polygon into " + (n - 2) + " triangles, so its angles add to (" + n + " − 2) × 180° = " + (n - 2) * 180 + "°."; }
  }
  if (mode === "one") k.slider("Angle", 0, 360, 5, A, function (v) { return v + "°"; }, function (v) { A = +v; draw(); });
  else if (mode === "triangle") { k.slider("Angle 1", 5, 170, 5, A, function (v) { return v + "°"; }, function (v) { A = +v; draw(); }); k.slider("Angle 2", 5, 170, 5, B, function (v) { return v + "°"; }, function (v) { B = +v; draw(); }); }
  else k.slider("Sides", 3, 12, 1, n, function (v) { return v; }, function (v) { n = +v; draw(); });
  st.draw = draw; draw();
});
