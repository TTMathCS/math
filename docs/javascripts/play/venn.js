/* Two sets in a Venn diagram, the whole numbers 1 to 20: A = multiples of a, B = multiples of b (pick them). Choose
   which region to light: A ∩ B, A ∪ B, not A, or not (A ∪ B), the De Morgan pair of (not A) ∩ (not B). */
PLAY("venn", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), a = 2, b = 3, reg = "A ∩ B";
  function inA(v) { return v % a === 0; } function inB(v) { return v % b === 0; }
  function on(v) { var A = inA(v), B = inB(v); return reg === "A ∩ B" ? A && B : reg === "A ∪ B" ? A || B : reg === "not A" ? !A : !(A || B); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 2; g.strokeRect(10, 10, 580, 240);
    g.strokeStyle = C.ice; g.lineWidth = 3; g.beginPath(); g.arc(230, 130, 100, 0, 7); g.stroke(); g.strokeStyle = C.rust; g.beginPath(); g.arc(370, 130, 100, 0, 7); g.stroke();
    g.font = F(18, 800); g.fillStyle = C.ice; g.fillText("A", 150, 46); g.fillStyle = C.rust; g.fillText("B", 440, 46);
    var spots = { A: [], B: [], AB: [], none: [] }; for (var v = 1; v <= 20; v++) spots[inA(v) && inB(v) ? "AB" : inA(v) ? "A" : inB(v) ? "B" : "none"].push(v);
    var pos = { A: [190, 90, 3], B: [380, 90, 3], AB: [285, 110, 1], none: [40, 280, 14] };
    var hit = []; for (var w = 1; w <= 20; w++) if (on(w)) hit.push(w); Object.keys(spots).forEach(function (key) { spots[key].forEach(function (v, i) { var p = pos[key], x = key === "none" ? (i < 6 ? 30 + (i % 2) * 34 : 530 + (i % 2) * 34) : p[0] + (i % p[2]) * 34, y = key === "none" ? 40 + Math.floor((i < 6 ? i : i - 6) / 2) * 40 : p[1] + Math.floor(i / p[2]) * 34;
      var lit = on(v); g.fillStyle = lit ? C.gold : C.ink3; g.font = F(17, 800); g.textAlign = "center"; g.fillText(v, x, y); }); });
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(17, 700); g.fillText(reg + " = {" + hit.slice(0, 9).join(", ") + (hit.length > 9 ? ", …" : "") + "}", 14, 280);
    out.textContent = "A = multiples of " + a + ", B = multiples of " + b + ", from 1 to 20. " + reg + " has " + hit.length + " numbers." + (reg === "not (A ∪ B)" ? " It is the same as (not A) ∩ (not B): De Morgan." : "");
  }
  k.slider("A: multiples of", 2, 6, 1, a, function (v) { return v; }, function (v) { a = +v; draw(); });
  k.slider("B: multiples of", 2, 7, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); });
  k.buttons([["A ∩ B", function () { reg = "A ∩ B"; draw(); }], ["A ∪ B", function () { reg = "A ∪ B"; draw(); }], ["not A", function () { reg = "not A"; draw(); }], ["not (A ∪ B)", function () { reg = "not (A ∪ B)"; draw(); }]], true);
  st.draw = draw; draw();
});
