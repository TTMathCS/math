/* Place value. A number as blocks: ones, tens (a row of ten), hundreds (a square of a hundred). data-mode="base" changes
   the base, so each place is worth base times the one to its right. */
PLAY("placeval", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), base = fig.getAttribute("data-mode") === "base", n = 347, bs = 10;
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var b = base ? bs : 10, d = [], m = n; while (m > 0 || !d.length) { d.unshift(m % b); m = Math.floor(m / b); }
    var col = [C.ice, C.gold, C.green, C.rust], x = 20, s = 6;
    d.forEach(function (dig, i) { var place = d.length - 1 - i, w = Math.pow(b, place); for (var j = 0; j < dig; j++) { g.fillStyle = col[place % 4];
      if (place === 0) g.fillRect(x, 200 - j * 14, 12, 12); else if (place === 1) g.fillRect(x + j * 14, 200 - b * s, 12, b * s); else g.fillRect(x + (j % 3) * (b * s * 0.6 + 6), 200 - b * s * 0.6 - Math.floor(j / 3) * (b * s * 0.6 + 6), b * s * 0.6, b * s * 0.6); }
      g.fillStyle = C.ink; g.font = F(22, 800); g.textAlign = "left"; g.fillText(dig.toString(b).toUpperCase(), x, 236); x += place === 0 ? 40 : place === 1 ? dig * 14 + 30 : 3 * (b * s * 0.6 + 6) + 24; });
    g.fillStyle = C.ink; g.font = F(20, 800); g.textAlign = "left"; g.fillText(base ? n + " in base " + b + ": " + n.toString(b).toUpperCase() : "", 300, 40);
    out.textContent = d.map(function (dig, i) { return dig + " × " + Math.pow(b, d.length - 1 - i); }).join(" + ") + " = " + n + (base ? " (base " + b + ")." : ".");
  }
  k.slider("Number", 0, base ? 200 : 999, 1, base ? 45 : n, function (v) { return v; }, function (v) { n = +v; draw(); });
  if (base) k.slider("Base", 2, 16, 1, bs, function (v) { return v; }, function (v) { bs = +v; draw(); });
  st.draw = draw; if (base) n = 45; draw();
});
