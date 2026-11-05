/* Pascal's triangle: each number is the two above added. Colour the odd numbers (data-mode="odd") to see a Sierpinski
   pattern, or tap a row to see its sum, a power of 2. */
PLAY("pascal", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, rows = 10, odd = fig.getAttribute("data-mode") === "odd", sel = -1, out, T;
  var st = k.stage(W, H, function (x, y) { sel = Math.floor((y - 10) / (250 / rows)); if (sel >= rows) sel = -1; draw(); }), g = st.g; out = k.out();
  function build() { T = [[1]]; for (var r = 1; r < rows; r++) { var p = T[r - 1], q = [1]; for (var i = 1; i < r; i++) q.push(p[i - 1] + p[i]); q.push(1); T.push(q); } }
  function draw() {
    build(); g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var dy = 250 / rows, dx = Math.min(48, 440 / rows), fs = Math.max(9, Math.min(18, dx * 0.4));
    T.forEach(function (row, r) { row.forEach(function (v, i) { var x = 270 + (i - r / 2) * dx, y = 10 + r * dy + dy / 2; g.fillStyle = r === sel ? C.gold : odd ? (v % 2 ? C.rust : C.line) : C.ice; g.globalAlpha = odd || r === sel ? 1 : 0.35; g.beginPath(); g.arc(x, y, Math.min(dx, dy) * 0.45, 0, 7); g.fill(); g.globalAlpha = 1;
      if (rows <= 16) { g.fillStyle = C.ink; g.font = F(fs, 700); g.textAlign = "center"; g.fillText(v, x, y + fs * 0.35); } }); });
    out.textContent = sel >= 0 ? "Row " + sel + ": " + T[sel].join(" + ") + " = " + Math.pow(2, sel) + " = 2^" + sel + "." : odd ? "Odd numbers coloured. More rows make the triangles-within-triangles clearer." : "Tap a row to add it up.";
  }
  k.slider("Rows", 4, odd ? 32 : 14, 1, rows, function (v) { return v; }, function (v) { rows = +v; sel = -1; draw(); });
  st.draw = draw; draw();
});
