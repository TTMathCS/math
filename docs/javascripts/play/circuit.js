/* Two resistors and a battery. In series the same current goes through both and R = R₁ + R₂; in parallel each gets
   the full voltage and 1/R = 1/R₁ + 1/R₂, so the total is less than either. Ohm's law: I = V / R. */
PLAY("circuit", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), V = 12, r1 = 4, r2 = 6, par = false;
  function res(x, y, w, horiz) { g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); g.moveTo(x, y); for (var i = 1; i < 8; i++) horiz ? g.lineTo(x + w * i / 8, y + (i % 2 ? -10 : 10)) : g.lineTo(x + (i % 2 ? -10 : 10), y + w * i / 8); horiz ? g.lineTo(x + w, y) : g.lineTo(x, y + w); g.stroke(); g.lineWidth = 1; }
  function draw() {
    var R = par ? 1 / (1 / r1 + 1 / r2) : r1 + r2, I = V / R, I1 = par ? V / r1 : I, I2 = par ? V / r2 : I;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 2;
    g.beginPath(); g.moveTo(40, 130); g.lineTo(40, 40); g.lineTo(330, 40); g.lineTo(330, 260); g.lineTo(40, 260); g.lineTo(40, 170); g.stroke();
    g.strokeStyle = C.ink; g.lineWidth = 3; g.beginPath(); g.moveTo(20, 130); g.lineTo(60, 130); g.moveTo(30, 170); g.lineTo(50, 170); g.stroke(); g.lineWidth = 1;
    g.font = F(17, 600); g.fillStyle = C.ink; g.textAlign = "left"; g.fillText(V + " V", 64, 156);
    if (!par) { g.fillStyle = C.bg; g.fillRect(150, 30, 90, 20); res(150, 40, 90, true); g.fillRect(320, 110, 20, 90); res(330, 110, 90, false); g.fillStyle = C.ink; g.fillText(r1 + " Ω", 175, 76); g.fillText(r2 + " Ω", 346, 160); }
    else { g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(330, 40); g.lineTo(230, 40); g.lineTo(230, 260); g.stroke(); g.lineWidth = 1; g.fillStyle = C.bg; g.fillRect(220, 110, 20, 90); g.fillRect(320, 110, 20, 90); res(230, 110, 90, false); res(330, 110, 90, false); g.fillStyle = C.ink; g.fillText(r1 + " Ω", 160, 160); g.fillText(r2 + " Ω", 346, 160); }
    g.font = F(19, 600); g.fillStyle = C.gold; g.fillText("total " + R.toFixed(2) + " Ω", 410, 60);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("battery current " + I.toFixed(2) + " A", 410, 92); g.fillText("through " + r1 + " Ω: " + I1.toFixed(2) + " A", 410, 118); g.fillText("through " + r2 + " Ω: " + I2.toFixed(2) + " A", 410, 144);
    out.textContent = par ? "In parallel each resistor has the full " + V + " V across it; their currents add to " + I.toFixed(2) + " A." : "In series " + I.toFixed(2) + " A flows through both; the " + V + " V splits as " + (I * r1).toFixed(1) + " V and " + (I * r2).toFixed(1) + " V.";
  }
  k.buttons([["Series", function () { par = false; draw(); }], ["Parallel", function () { par = true; draw(); }]], true);
  k.slider("R₁ (Ω)", 1, 20, 1, r1, function (x) { return x; }, function (x) { r1 = x; draw(); });
  k.slider("R₂ (Ω)", 1, 20, 1, r2, function (x) { return x; }, function (x) { r2 = x; draw(); });
  st.draw = draw;
});
