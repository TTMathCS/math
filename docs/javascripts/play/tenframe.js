/* Two ten-frames. Add and take away counters and see the number: a full frame is ten. data-mode="pairs" shows the
   counters in pairs instead, so odd numbers have one left over. */
PLAY("tenframe", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 220, st = k.stage(W, H), g = st.g, out = k.out(), pairs = fig.getAttribute("data-mode") === "pairs", n = 7;
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var f = 0; f < 2; f++) for (var i = 0; i < 10; i++) { var idx = f * 10 + i, x = 20 + f * 270 + (pairs ? Math.floor(i / 2) : i % 5) * 50, y = 30 + (pairs ? i % 2 : Math.floor(i / 5)) * 54;
      g.strokeStyle = C.ink3; g.lineWidth = 2; g.strokeRect(x, y, 46, 50); if (idx < n) { g.fillStyle = f ? C.ice : C.gold; g.beginPath(); g.arc(x + 23, y + 25, 17, 0, 7); g.fill(); } }
    g.fillStyle = C.ink; g.font = F(34, 800); g.textAlign = "left"; g.fillText(n, 20, 190);
    g.fillStyle = C.ink2; g.font = F(18, 700); g.fillText(pairs ? (n % 2 ? "odd: one has no partner" : "even: everyone has a partner") : n >= 10 ? "10 and " + (n - 10) : (10 - n) + " more make ten", 80, 186);
    out.textContent = pairs ? n + " in pairs: " + Math.floor(n / 2) + " pairs" + (n % 2 ? " and 1 left over." : ".") : n + (n > 10 ? " is one full ten and " + (n - 10) + " more." : n === 10 ? " fills one frame: ten." : ": " + (10 - n) + " more would make ten.");
  }
  k.buttons([["Add 1", function () { if (n < 20) n++; draw(); }], ["Take 1", function () { if (n > 0) n--; draw(); }], ["Clear", function () { n = 0; draw(); }]]);
  st.draw = draw; draw();
});
