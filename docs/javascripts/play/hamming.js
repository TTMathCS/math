/* The Hamming (7, 4) code: four data bits get three check bits, each check covering a different three of the data
   bits. Tap any bit to flip it, as noise would: the three checks that fail spell out, in binary, which bit was hit,
   so one error can always be fixed. */
PLAY("hamming", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, out, data = [1, 0, 1, 1], flip = -1;
  function code() { var d = data, c = [0, 0, d[0], 0, d[1], d[2], d[3]]; c[0] = c[2] ^ c[4] ^ c[6]; c[1] = c[2] ^ c[5] ^ c[6]; c[3] = c[4] ^ c[5] ^ c[6]; return c; }
  var st = k.stage(W, H, function (x, y) { if (y > 70 && y < 150) { var i = Math.floor((x - 40) / 70); if (i >= 0 && i < 7) { flip = flip === i ? -1 : i; draw(); } } });
  var g = st.g; out = k.out();
  function draw() {
    var c = code(); if (flip >= 0) c[flip] ^= 1;
    var s1 = c[0] ^ c[2] ^ c[4] ^ c[6], s2 = c[1] ^ c[2] ^ c[5] ^ c[6], s4 = c[3] ^ c[4] ^ c[5] ^ c[6], syn = s1 + 2 * s2 + 4 * s4;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "center";
    c.forEach(function (b, i) { var x = 40 + i * 70, check = i === 0 || i === 1 || i === 3; g.fillStyle = i === flip ? C.red : check ? C.bg2 : "rgba(246,196,83,0.2)"; g.fillRect(x, 75, 60, 70); g.strokeStyle = check ? C.ice : C.gold; g.strokeRect(x, 75, 60, 70); g.font = F(34, 700, "m"); g.fillStyle = C.ink; g.fillText(b, x + 30, 124); g.font = F(17, 500); g.fillStyle = C.ink3; g.fillText(i + 1, x + 30, 166); });
    g.font = F(17, 500); g.fillStyle = C.ice; g.fillText("check", 70, 60); g.fillText("check", 140, 60); g.fillText("check", 280, 60); g.fillStyle = C.gold; g.fillText("data", 210, 60); g.fillText("data", 420, 60);
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = syn ? C.red : C.green;
    g.fillText(syn ? "checks fail: " + s4 + s2 + s1 + " in binary = bit " + syn : "all checks pass", 40, 220);
    out.textContent = syn ? "The failing checks point at bit " + syn + ". Flip it back and the message is whole again." : "Tap a bit to flip it, as noise would, and watch the checks find it.";
  }
  k.buttons([["New data", function () { data = [0, 0, 0, 0].map(function () { return Math.random() < 0.5 ? 1 : 0; }); flip = -1; draw(); }]]);
  st.draw = draw; draw();
});
