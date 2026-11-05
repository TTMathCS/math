/* Order of quantifiers. Rows are four people, columns four songs; a gold square means that person likes that song.
   Tap squares to change them. "Everyone likes some song" (∀x ∃y) needs a gold square in every row. "Some song is
   liked by everyone" (∃y ∀x) needs a whole gold column, which is much stronger. */
PLAY("quant", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, out, M = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 1], [1, 0, 0, 1]];
  var st = k.stage(W, H, function (x, y) { var c = Math.floor((x - 110) / 50), r = Math.floor((y - 60) / 50); if (c >= 0 && c < 4 && r >= 0 && r < 4) { M[r][c] ^= 1; draw(); } });
  var g = st.g; out = k.out();
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var P = ["Ana", "Ben", "Cy", "Dee"], S = ["s1", "s2", "s3", "s4"];
    g.textAlign = "center"; g.font = F(17, 500); g.fillStyle = C.ink3; S.forEach(function (s, j) { g.fillText(s, 135 + j * 50, 50); });
    var allRows = true, fullCol = -1;
    M.forEach(function (r, i) { g.textAlign = "right"; g.fillStyle = C.ink2; g.fillText(P[i], 100, 92 + i * 50); var any = false; r.forEach(function (v, j) { g.fillStyle = v ? C.gold : C.bg2; g.fillRect(112 + j * 50, 62 + i * 50, 46, 46); if (v) any = true; }); if (!any) allRows = false; });
    for (var j = 0; j < 4; j++) if (M.every(function (r) { return r[j]; })) fullCol = j;
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = allRows ? C.green : C.red; g.fillText((allRows ? "✓" : "✗") + " ∀x ∃y: everyone likes some song", 330, 100, 260);
    g.fillStyle = fullCol >= 0 ? C.green : C.red; g.fillText((fullCol >= 0 ? "✓" : "✗") + " ∃y ∀x: one song all like", 330, 140, 260);
    out.textContent = fullCol >= 0 ? "Song " + (fullCol + 1) + " is liked by everyone, so both statements are true: the second always implies the first." : allRows ? "Everyone likes some song, but no single song is liked by all: swapping the quantifiers changed the meaning." : "Someone likes no song at all, so neither statement holds.";
  }
  st.draw = draw; draw();
});
