/* A bar graph you can change: tap the top half of a bar to add one, the bottom half to take one away. data-mode="cut"
   adds a button that starts the scale at a higher number instead of 0, the trick that makes small differences look
   huge. Made-up counts of favourite fruit. */
PLAY("bars", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, cut = fig.getAttribute("data-mode") === "cut", base = 0, L = ["apple", "banana", "grape", "mango"], V = [12, 14, 9, 13], out;
  var st = k.stage(W, H, function (x, y) { var i = Math.floor((x - 55) / 110); if (i < 0 || i > 3) return; if (y < 120) V[i] = Math.min(20, V[i] + 1); else V[i] = Math.max(0, V[i] - 1); draw(); }), g = st.g; out = k.out();
  function Y(v) { return 230 - (v - base) / (20 - base) * 200; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.line; g.lineWidth = 1; g.textAlign = "right"; g.font = F(14, 600); g.fillStyle = C.ink3;
    for (var v = base; v <= 20; v += base ? 2 : 4) { g.beginPath(); g.moveTo(50, Y(v)); g.lineTo(500, Y(v)); g.stroke(); g.fillText(v, 44, Y(v) + 5); }
    V.forEach(function (v, i) { var x = 60 + i * 110, top = Y(Math.max(v, base)); g.fillStyle = [C.red, C.gold, C.ice, C.rust][i]; g.fillRect(x, top, 80, 230 - top); g.fillStyle = C.ink; g.font = F(17, 800); g.textAlign = "center"; g.fillText(v, x + 40, top - 8); g.fillStyle = C.ink2; g.font = F(15, 700); g.fillText(L[i], x + 40, 252); });
    var mx = Math.max.apply(0, V), mn = Math.min.apply(0, V);
    out.textContent = base ? "The scale starts at " + base + ", so " + mx + " looks " + ((mx - base) / Math.max(0.5, mn - base)).toFixed(1) + " times as tall as " + mn + ", though it is only " + (mx / Math.max(1, mn)).toFixed(1) + " times as many." : "Tap a bar's top half to add one, its bottom half to take one. Total: " + V.reduce(function (s, x) { return s + x; }, 0) + ". Made-up counts.";
  }
  if (cut) k.buttons([["Start at 0", function () { base = 0; draw(); }], ["Start at 8", function () { base = 8; draw(); }]], true);
  st.draw = draw; draw();
});
