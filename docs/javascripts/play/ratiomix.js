/* A ratio as tiles: for every a gold there are b blue. Make more batches and the ratio stays the same; data-mode="share"
   splits a total in the ratio a : b. */
PLAY("ratiomix", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), share = fig.getAttribute("data-mode") === "share", a = 2, b = 3, m = 3, T = 40;
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var per = a + b;
    if (!share) { for (var j = 0; j < m; j++) for (var i = 0; i < per; i++) { var x = 20 + i * 30, y = 20 + j * 34; g.fillStyle = i < a ? C.gold : C.ice; g.fillRect(x + (i >= a ? 10 : 0), y, 26, 28); }
      g.fillStyle = C.ink; g.font = F(20, 800); g.textAlign = "left"; g.fillText(a * m + " : " + b * m, 400, 60); g.fillStyle = C.ink2; g.font = F(16, 700); g.fillText("= " + a + " : " + b, 400, 90);
      out.textContent = m + " batch" + (m > 1 ? "es" : "") + " of " + a + " gold to " + b + " blue: " + a * m + " gold, " + b * m + " blue. Same ratio, " + a + " : " + b + ", just more of it."; }
    else { var part = T / per; g.fillStyle = C.gold; g.fillRect(20, 60, 540 * a / per, 50); g.fillStyle = C.ice; g.fillRect(20 + 540 * a / per, 60, 540 * b / per, 50);
      for (var i2 = 1; i2 < per; i2++) { g.strokeStyle = C.bg; g.lineWidth = 2; g.beginPath(); g.moveTo(20 + 540 * i2 / per, 60); g.lineTo(20 + 540 * i2 / per, 110); g.stroke(); }
      g.fillStyle = C.ink; g.font = F(19, 800); g.textAlign = "center"; g.fillText(+(a * part).toFixed(2), 20 + 270 * a / per, 150); g.fillText(+(b * part).toFixed(2), 20 + 540 * a / per + 270 * b / per, 150);
      out.textContent = "Share " + T + " in the ratio " + a + " : " + b + ": " + per + " equal parts of " + +part.toFixed(2) + ", so " + +(a * part).toFixed(2) + " and " + +(b * part).toFixed(2) + "."; }
  }
  k.slider("Gold a", 1, 6, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); });
  k.slider("Blue b", 1, 6, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); });
  if (share) k.slider("Total to share", 5, 100, 5, T, function (v) { return v; }, function (v) { T = +v; draw(); });
  else k.slider("Batches", 1, 6, 1, m, function (v) { return v; }, function (v) { m = +v; draw(); });
  st.draw = draw; draw();
});
