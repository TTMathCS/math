/* The symmetries of a square. Turn it a quarter turn or flip it over its upright middle line, in any order; the corner
   letters show where each corner went. However you combine the two moves you only ever reach 8 positions: the group
   of the square, called D4. */
PLAY("group", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out();
  var s = ["A", "B", "C", "D"], moves = "", seen = {};
  function name() {
    var r = ["A", "B", "C", "D"];
    for (var q = 0; q < 4; q++) { if (s.join("") === r.join("")) return ["no change", "a quarter turn", "a half turn", "three quarter turns"][q]; r.unshift(r.pop()); }
    if (s[0] === "A") return "a flip over the diagonal through A";
    if (s[1] === "B") return "a flip over the diagonal through B";
    if (s[0] === "B") return "a flip over the upright middle line";
    return "a flip over the level middle line";
  }
  function draw() {
    var P = [[50, 50], [230, 50], [230, 230], [50, 230]];
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(156,201,234,0.12)"; g.strokeStyle = C.ice; g.lineWidth = 3; g.beginPath();
    P.forEach(function (p, i) { i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); }); g.closePath(); g.fill(); g.stroke(); g.lineWidth = 1;
    g.textAlign = "center";
    P.forEach(function (p, i) { g.fillStyle = s[i] === "A" ? C.gold : C.ink; g.beginPath(); g.arc(p[0], p[1], 20, 0, 7); g.fill(); g.fillStyle = C.bg; g.font = F(22, 700); g.fillText(s[i], p[0], p[1] + 8); });
    g.textAlign = "left"; seen[s.join("")] = 1; var n = Object.keys(seen).length;
    g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("Moves: " + (moves.slice(-14) || "none yet"), 290, 60);
    g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("All together: " + name(), 290, 100, 300);
    g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("Positions found: " + n + " of 8", 290, 150);
    for (var i = 0; i < 8; i++) { g.fillStyle = i < n ? C.gold : C.line; g.fillRect(290 + i * 22, 166, 16, 16); }
    out.textContent = "T is a quarter turn clockwise, F a flip over the upright middle line. Your moves add up to " + name() + ".";
  }
  function turn() { s.unshift(s.pop()); moves += "T"; draw(); }
  function flip() { s = [s[1], s[0], s[3], s[2]]; moves += "F"; draw(); }
  k.buttons([["Turn (T)", turn], ["Flip (F)", flip], ["Start again", function () { s = ["A", "B", "C", "D"]; moves = ""; seen = {}; draw(); }]]);
  st.draw = draw; draw();
});
