/* A balance for an equation a·x + b = c: x-boxes and 1-blocks on the left, 1-blocks on the right. Do the same to both
   sides and keep it level until one box stands alone. Whole-number answers only. */
PLAY("balance", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 250, st = k.stage(W, H), g = st.g, out = k.out(), x = 3, a = 2, b = 4, A, B, R, msg;
  function reset() { A = a; B = b; R = a * x + b; msg = "Solve " + a + "x + " + b + " = " + R + ". Take the loose blocks off both sides first."; draw(); }
  function side(cx, nx, n1) { var items = []; for (var i = 0; i < nx; i++) items.push("x"); for (i = 0; i < n1; i++) items.push(1);
    items.forEach(function (it, i) { var col = i % 6, row = Math.floor(i / 6), px = cx - 75 + col * 26, py = 140 - row * 26; g.fillStyle = it === "x" ? C.gold : C.ice; g.fillRect(px, py, 22, 22); if (it === "x") { g.fillStyle = C.bg; g.font = F(15, 800); g.textAlign = "center"; g.fillText("x", px + 11, py + 16); } }); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 4; g.beginPath(); g.moveTo(300, 200); g.lineTo(300, 170); g.moveTo(110, 168); g.lineTo(490, 168); g.stroke();
    g.fillStyle = C.ink3; g.beginPath(); g.moveTo(280, 210); g.lineTo(320, 210); g.lineTo(300, 192); g.fill();
    side(190, A, B); side(420, 0, R); g.fillStyle = C.ink; g.font = F(22, 800, "m"); g.textAlign = "center";
    g.fillText((A ? (A > 1 ? A : "") + "x" : "") + (B ? " + " + B : "") + " = " + R, 300, 236); out.textContent = msg;
  }
  k.buttons([["Take 1 off both", function () { if (B > 0 && R > 0) { B--; R--; msg = "Still level: the same came off each side."; } else msg = "No loose block left on the left side."; draw(); }],
    ["Halve both", function () { if (A > 1 && A % 2 === 0 && B % 2 === 0 && R % 2 === 0) { A /= 2; B /= 2; R /= 2; msg = "Split each side in two: still level."; } else msg = "Can't split evenly now."; draw(); }],
    ["Share by the boxes", function () { if (B === 0 && A > 1 && R % A === 0) { R /= A; A = 1; msg = "One box balances " + R + " blocks: x = " + R + "."; } else if (A === 1 && B === 0) msg = "Done: x = " + R + "."; else msg = "Take the loose blocks off first."; draw(); }],
    ["New one", function () { a = 1 + Math.floor(Math.random() * 3); x = 1 + Math.floor(Math.random() * 5); b = Math.floor(Math.random() * 6); reset(); }]]);
  st.draw = draw; reset();
});
