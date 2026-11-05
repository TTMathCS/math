/* Cantor's diagonal argument. Suppose someone lists infinite strings of 0s and 1s (here a random start of a list).
   Go down the diagonal and flip each digit: the new string differs from row n in place n, so it is nowhere in the
   list. No list can hold them all: there are more such strings than whole numbers. */
PLAY("diagonal", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), N = 8, rows, shown = 0;
  function make() { rows = []; for (var i = 0; i < N; i++) { var r = []; for (var j = 0; j < 12; j++) r.push(Math.random() < 0.5 ? 0 : 1); rows.push(r); } shown = 0; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "center"; var s = 26;
    rows.forEach(function (r, i) { g.font = F(17, 500); g.fillStyle = C.ink3; g.fillText(i + 1, 26, 34 + i * s); r.forEach(function (d, j) { var on = i === j; if (on) { g.fillStyle = j < shown ? "rgba(246,196,83,0.35)" : "rgba(244,230,212,0.10)"; g.fillRect(72 + j * s - 11, 15 + i * s, 22, 24); } g.font = F(19, on ? 700 : 500, "m"); g.fillStyle = on ? C.ink : C.ink2; g.fillText(d, 72 + j * s, 33 + i * s); }); g.fillStyle = C.ink3; g.fillText("…", 72 + 12 * s, 33 + i * s); });
    var y = 34 + N * s + 14; g.font = F(17, 600); g.fillStyle = C.gold; g.textAlign = "left"; g.fillText("new", 8, y);
    g.textAlign = "center"; for (var j = 0; j < shown; j++) { g.font = F(19, 700, "m"); g.fillText(1 - rows[j][j], 72 + j * s, y); }
    out.textContent = shown < N ? "Press Next digit: each new digit is the flip of the gold one on the diagonal." : "The new string differs from every row in the list at that row's own place, so it is not in the list.";
  }
  make();
  k.buttons([["Next digit", function () { shown = Math.min(N, shown + 1); draw(); }], ["New list", function () { make(); draw(); }]]);
  st.draw = draw; draw();
});
