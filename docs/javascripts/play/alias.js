/* Names point at objects. "b = a" makes a second name for the same list, so a change through either name shows in
   both; "b = a[:]" (or list(a)) makes a new list with the same items. Press the buttons in any order and watch the
   arrows. (The picture holds six items per list.) */
PLAY("alias", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), lists, names, msg;
  function reset() { lists = [[1, 2, 3]]; names = { a: 0 }; msg = "a = [1, 2, 3]"; }
  reset();
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var rows = {};
    lists.forEach(function (L, i) {
      var y = 50 + i * 110, x0 = 250;
      rows[i] = y;
      g.fillStyle = C.ink3; g.font = F(17, 500); g.textAlign = "left"; g.fillText("list object #" + (i + 1), x0, y - 10);
      L.forEach(function (v, j) { g.fillStyle = C.bg2; g.fillRect(x0 + j * 50, y, 46, 46); g.fillStyle = C.ink; g.font = F(20, 600, "m"); g.textAlign = "center"; g.fillText(v, x0 + j * 50 + 23, y + 30); });
    });
    var ny = { a: 62, b: 172 };
    Object.keys(names).forEach(function (nm) {
      var y = ny[nm], ty = rows[names[nm]] + 23;
      g.fillStyle = nm === "a" ? C.rust : C.ice; g.font = F(24, 700, "m"); g.textAlign = "center"; g.fillText(nm, 60, y + 8);
      g.strokeStyle = g.fillStyle; g.lineWidth = 2.5; g.beginPath(); g.moveTo(85, y); g.bezierCurveTo(160, y, 170, ty, 240, ty); g.stroke();
      g.beginPath(); g.moveTo(246, ty); g.lineTo(234, ty - 7); g.lineTo(234, ty + 7); g.fill(); g.lineWidth = 1;
    });
    g.textAlign = "left"; g.font = F(18, 600, "m"); g.fillStyle = C.gold; g.fillText(">>> " + msg, 20, 240);
    var same = names.b !== undefined && names.a === names.b;
    out.textContent = "a is " + JSON.stringify(lists[names.a]).replace(/,/g, ", ") + (names.b !== undefined ? ", b is " + JSON.stringify(lists[names.b]).replace(/,/g, ", ") + (same ? ". a is b: True (one list, two names)." : ". a is b: False (two lists).") : ".");
  }
  k.buttons([
    ["b = a", function () { names.b = names.a; msg = "b = a"; tidy(); draw(); }],
    ["b = a[:]", function () { lists.push(lists[names.a].slice()); names.b = lists.length - 1; msg = "b = a[:]"; tidy(); draw(); }],
    ["a.append(4)", function () { if (lists[names.a].length < 6) lists[names.a].push(4); msg = "a.append(4)"; draw(); }],
    ["b.append(9)", function () { if (names.b === undefined) { msg = "NameError: b"; } else { if (lists[names.b].length < 6) lists[names.b].push(9); msg = "b.append(9)"; } draw(); }],
    ["Start again", function () { reset(); draw(); }]
  ]);
  function tidy() {   // drop a list no name points at, as Python's garbage collector would
    var keep = [], map = {};
    lists.forEach(function (L, i) { if (names.a === i || names.b === i) { map[i] = keep.length; keep.push(L); } });
    lists = keep; Object.keys(names).forEach(function (nm) { names[nm] = map[names[nm]]; });
  }
  st.draw = draw;
});
