/* Algebra tiles. A rectangle (x + a) by (x + b) cut into an x² square, a + b strips of x and a·b unit squares:
   (x + a)(x + b) = x² + (a + b)x + ab. data-mode="square": x² + bx cut into a square and two half-strips; the corner
   it lacks, (b/2)², is what completing the square adds. */
PLAY("tiles", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), sq = fig.getAttribute("data-mode") === "square", a = 3, b = 2, u = 18, X = 150;
  function rect(x, y, w, h, col) { g.fillStyle = col; g.globalAlpha = 0.75; g.fillRect(x, y, w, h); g.globalAlpha = 1; g.strokeStyle = C.bg; g.strokeRect(x, y, w, h); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "left";
    var x0 = 30, y0 = 30;
    if (!sq) {
      rect(x0, y0, X, X, C.earth);
      for (var i = 0; i < b; i++) rect(x0 + X + i * u, y0, u, X, C.gold);
      for (i = 0; i < a; i++) rect(x0, y0 + X + i * u, X, u, C.gold);
      for (i = 0; i < a; i++) for (var j = 0; j < b; j++) rect(x0 + X + j * u, y0 + X + i * u, u, u, C.rust);
      g.font = F(20, 700); g.fillStyle = C.ink; g.fillText("(x + " + a + ")(x + " + b + ")", 330, 60);
      g.fillStyle = C.gold; g.fillText("= x² + " + (a + b) + "x + " + a * b, 330, 96);
      g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("blue: x², gold: x strips,", 330, 140); g.fillText("orange: unit squares", 330, 166);
      out.textContent = "The strips: " + b + " + " + a + " = " + (a + b) + " of them make " + (a + b) + "x; the corner holds " + a + " × " + b + " = " + a * b + " unit squares.";
    } else {
      var h = b / 2;
      rect(x0, y0, X, X, C.earth);
      rect(x0 + X, y0, h * u, X, C.gold); rect(x0, y0 + X, X, h * u, C.gold);
      g.setLineDash([6, 5]); g.strokeStyle = C.ink; g.strokeRect(x0 + X, y0 + X, h * u, h * u); g.setLineDash([]);
      g.font = F(20, 700); g.fillStyle = C.ink; g.fillText("x² + " + b + "x", 330, 60);
      g.fillStyle = C.gold; g.fillText("= (x + " + h + ")² − " + (h * h), 330, 96);
      g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("Each half-strip is " + h + " wide;", 330, 140); g.fillText("the missing corner is " + h + "² = " + h * h, 330, 166);
      out.textContent = "Split the " + b + "x strip in half and move one half underneath: the square of side x + " + h + " is complete except for the dashed corner of area " + h * h + ".";
    }
  }
  if (sq) { b = 6; } if (sq) k.slider("b", 2, 10, 2, b, function (v) { return v; }, function (v) { b = v; draw(); });
  else {
    k.slider("a", 0, 5, 1, a, function (v) { return v; }, function (v) { a = v; draw(); });
    k.slider("b", 0, 5, 1, b, function (v) { return v; }, function (v) { b = v; draw(); });
  }
  st.draw = draw;
});
