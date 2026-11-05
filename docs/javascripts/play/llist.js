/* The same insert done two ways. In an array (a Python list) every item after the gap shifts one place right; in a
   linked list nothing moves: a new node is made and two arrows change. Pick where to insert; the count is the work. */
PLAY("llist", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), at = 2, vals = ["A", "B", "C", "D", "E"];
  function draw(t) {
    var n = vals.length, shift = n - at;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "left"; g.font = F(18, 600);
    g.fillStyle = C.rust; g.fillText("Array: " + shift + " item" + (shift === 1 ? "" : "s") + " move", 20, 28);
    for (var i = 0; i <= n; i++) { g.strokeStyle = C.line; g.strokeRect(20 + i * 62, 40, 58, 46); }
    vals.forEach(function (v, i) { var x = 20 + i * 62 + (i >= at ? 62 * Math.min(1, t * 2) : 0); g.fillStyle = i >= at ? C.rust : C.ink2; g.font = F(20, 600, "m"); g.textAlign = "center"; g.fillText(v, x + 29, 70); });
    if (t > 0.5) { g.fillStyle = C.gold; g.fillText("X", 20 + at * 62 + 29, 70); }
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ice; g.fillText("Linked list: 1 new node, 2 arrows change", 20, 140);
    var y = 170, sp = 560 / n;
    for (var j = 0; j < n; j++) {
      var x = 20 + j * sp;
      g.fillStyle = C.bg2; g.fillRect(x, y, 50, 40); g.fillStyle = C.ink; g.font = F(20, 600, "m"); g.textAlign = "center"; g.fillText(vals[j], x + 25, y + 27);
      if (j < n - 1) { var cut = j === at - 1 && t > 0.5; g.strokeStyle = cut ? C.line : C.ice; g.lineWidth = 2; g.beginPath(); g.moveTo(x + 50, y + 20); g.lineTo(x + sp - 4, y + 20); g.stroke(); g.lineWidth = 1; }
    }
    if (t > 0.25 && at > 0 && at < n) {
      var px = 20 + (at - 1) * sp, nx = 20 + at * sp, cx = (px + nx) / 2 + 25, my = 235;
      g.fillStyle = C.bg2; g.fillRect(cx - 25, my, 50, 40); g.fillStyle = C.gold; g.fillText("X", cx, my + 27);
      if (t > 0.5) { g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.moveTo(px + 25, y + 40); g.lineTo(cx - 12, my); g.moveTo(cx + 12, my); g.lineTo(nx + 25, y + 40); g.stroke(); g.lineWidth = 1; }
    }
    out.textContent = "Insert X at position " + at + ": the array moves " + shift + " of " + n + " items; the linked list changes 2 arrows, however long it is (once you are standing at the spot).";
  }
  var film = k.loop(2.5, draw, { label: "Time", start0: true });
  k.slider("Insert at position", 1, 4, 1, at, function (x) { return x; }, function (x) { at = x; film.set(0); });
  st.draw = function () { draw(film.t()); };
});
