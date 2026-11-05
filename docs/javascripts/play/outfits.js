/* Every outfit: a shirts and b trousers (and c hats if you add them). Each row is one shirt with every trouser: a × b
   outfits, then × c. */
PLAY("outfits", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), a = 3, b = 2, c = 1, COL = [C.red, C.ice, C.gold, C.green, C.rust];
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var tot = a * b * c, cols = b * c, s = Math.min(70, 520 / cols, 250 / a);
    for (var i = 0; i < a; i++) for (var j = 0; j < b; j++) for (var h = 0; h < c; h++) { var x = 30 + (j * c + h) * s, y = 20 + i * s;
      g.fillStyle = COL[i]; g.fillRect(x + 4, y + s * 0.3, s - 8, s * 0.3); g.fillStyle = COL[(j + 2) % 5]; g.fillRect(x + 4 + (s - 8) * 0.15, y + s * 0.6, (s - 8) * 0.7, s * 0.32); if (c > 1) { g.fillStyle = COL[(h + 1) % 5]; g.fillRect(x + s * 0.3, y + 2, s * 0.4, s * 0.24); } }
    out.textContent = a + " shirts × " + b + " trousers" + (c > 1 ? " × " + c + " hats" : "") + " = " + tot + " outfits. Each row is one shirt with every choice after it.";
  }
  k.slider("Shirts", 1, 5, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); });
  k.slider("Trousers", 1, 5, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); });
  k.slider("Hats", 1, 3, 1, c, function (v) { return v; }, function (v) { c = +v; draw(); });
  st.draw = draw; draw();
});
