/* Monty Hall: a prize behind one of three doors. You pick, the host (who knows) opens another door with no prize,
   and you may switch. Play it, or play 1,000 games each way in a moment; the browser's random numbers place the prize. */
PLAY("monty", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 240, st = k.stage(W, H), g = st.g, out = k.out(), car, pick, opened, done, stats = { stay: [0, 0], sw: [0, 0] };
  function newGame() { car = Math.floor(Math.random() * 3); pick = -1; opened = -1; done = false; out.textContent = "Pick a door."; draw(); }
  function choose(d) { if (pick < 0) { pick = d; var c = [0, 1, 2].filter(function (x) { return x !== pick && x !== car; }); opened = c[Math.floor(Math.random() * c.length)]; out.textContent = "The host opens door " + (opened + 1) + ": empty. Stay with " + (pick + 1) + " or switch?"; draw(); } }
  function finish(sw) { if (pick < 0 || done) return; if (sw) pick = [0, 1, 2].filter(function (x) { return x !== pick && x !== opened; })[0]; done = true; var win = pick === car; stats[sw ? "sw" : "stay"][win ? 0 : 1]++; out.textContent = (win ? "You win! " : "No prize. ") + rate(); draw(); }
  function rate() { function r(s) { var t = s[0] + s[1]; return t ? Math.round(100 * s[0] / t) + "% of " + t : "none yet"; } return "Staying won " + r(stats.stay) + "; switching won " + r(stats.sw) + "."; }
  function many() { for (var i = 0; i < 1000; i++) { var c = Math.floor(Math.random() * 3), p = Math.floor(Math.random() * 3); stats.stay[p === c ? 0 : 1]++; stats.sw[p !== c ? 0 : 1]++; } out.textContent = rate() + " Switching wins about 2 times in 3."; draw(); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var d = 0; d < 3; d++) { var x = 40 + d * 180; g.fillStyle = d === opened || done ? (d === car ? C.gold : C.line) : d === pick ? C.ice : C.rust; g.fillRect(x, 30, 140, 170);
      g.fillStyle = C.bg; g.font = F(26, 800); g.textAlign = "center"; g.fillText(d === opened || done ? (d === car ? "prize" : "empty") : d + 1, x + 70, 125); }
  }
  k.buttons([["Door 1", function () { choose(0); }], ["Door 2", function () { choose(1); }], ["Door 3", function () { choose(2); }], ["Stay", function () { finish(false); }], ["Switch", function () { finish(true); }], ["New game", newGame], ["1,000 games", many]]);
  st.draw = draw; newGame();
});
