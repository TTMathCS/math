/* A truth table. Pick a connective (NOT, AND, OR, IF … THEN, XOR) and tap a row to switch the lamps P and Q; the table
   shows every row at once. data-gates="1" draws the rows as lamps, like a logic gate. */
PLAY("truth", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, op = "AND", out, sel = 0;
  var OPS = { "NOT P": function (p) { return !p; }, AND: function (p, q) { return p && q; }, OR: function (p, q) { return p || q; }, "IF P THEN Q": function (p, q) { return !p || q; }, XOR: function (p, q) { return p !== q; } };
  var st = k.stage(W, H, function (x, y) { var r = Math.floor((y - 50) / 44); if (r >= 0 && r < 4) { sel = r; draw(); } }), g = st.g; out = k.out();
  function lamp(x, y, on) { g.fillStyle = on ? C.gold : C.line; g.beginPath(); g.arc(x, y, 13, 0, 7); g.fill(); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "center"; g.fillStyle = C.ink2; g.font = F(17, 800);
    var one = op === "NOT P"; g.fillText("P", 80, 34); if (!one) g.fillText("Q", 170, 34); g.fillText(op, 330, 34);
    var rows = one ? [[true], [false]] : [[true, true], [true, false], [false, true], [false, false]];
    rows.forEach(function (r, i) { var y = 72 + i * 44, v = OPS[op](r[0], r[1]); if (i === sel) { g.fillStyle = C.line; g.fillRect(30, y - 22, 420, 40); }
      g.font = F(18, 800); g.fillStyle = r[0] ? C.green : C.red; g.fillText(r[0] ? "T" : "F", 60, y + 6); lamp(100, y, r[0]);
      if (!one) { g.fillStyle = r[1] ? C.green : C.red; g.fillText(r[1] ? "T" : "F", 150, y + 6); lamp(190, y, r[1]); }
      g.fillStyle = v ? C.green : C.red; g.fillText(v ? "T" : "F", 310, y + 6); lamp(350, y, v); });
    var r = rows[Math.min(sel, rows.length - 1)], v = OPS[op](r[0], r[1]);
    out.textContent = "P " + (r[0] ? "true" : "false") + (one ? "" : ", Q " + (r[1] ? "true" : "false")) + ": " + op + " is " + (v ? "true" : "false") + "." + (op === "IF P THEN Q" && !r[0] ? " A promise with a false 'if' is not broken, so it counts as true." : "");
  }
  k.buttons(Object.keys(OPS).map(function (o) { return [o, function () { op = o; sel = 0; draw(); }]; }), true);
  st.draw = draw; draw();
});
