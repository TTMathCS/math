/* Nim with one pile (data-mode="one"): take 1, 2 or 3; whoever takes the last counter wins. The computer plays the
   winning strategy, leaving a multiple of 4 whenever it can. You go first. */
PLAY("nim", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 200, st = k.stage(W, H), g = st.g, out = k.out(), n = 15, msg;
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var i = 0; i < n; i++) { g.fillStyle = C.gold; g.beginPath(); g.arc(40 + (i % 12) * 44, 50 + Math.floor(i / 12) * 46, 17, 0, 7); g.fill(); }
    g.fillStyle = C.ink; g.font = F(20, 800); g.textAlign = "left"; g.fillText(n + " left", 20, 180); out.textContent = msg;
  }
  function take(t) { if (n === 0) return; if (t > n) { msg = "There are only " + n + " left."; draw(); return; } n -= t; if (n === 0) { msg = "You took the last one: you win!"; draw(); return; }
    var c = n % 4 || 1; n -= c; msg = "You took " + t + ". I take " + c + (n % 4 === 0 ? ", leaving a multiple of 4." : "."); if (n === 0) msg += " I took the last one: I win. Try to leave me a multiple of 4."; draw(); }
  k.buttons([["Take 1", function () { take(1); }], ["Take 2", function () { take(2); }], ["Take 3", function () { take(3); }], ["New game", function () { n = 13 + Math.floor(Math.random() * 8); msg = "New game: " + n + " counters. You go first."; draw(); }]]);
  msg = "15 counters. Take 1, 2 or 3; whoever takes the last one wins. You go first."; st.draw = draw; draw();
});
