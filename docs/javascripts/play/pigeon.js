/* The pigeonhole principle. Put n + 1 pigeons into n holes, at random (the browser's random numbers) or however you
   like: some hole always ends up with two. Press Again as often as you want; it never fails. */
PLAY("pigeon", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 6, extra = 1, box = [];
  function make() { box = []; for (var i = 0; i < n; i++) box.push(0); for (i = 0; i < n + extra; i++) box[Math.floor(Math.random() * n)]++; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var bw = Math.min(70, 540 / n), most = Math.max.apply(null, box);
    box.forEach(function (c, i) { var x = 30 + i * bw; g.strokeStyle = c >= 2 ? C.gold : C.ink3; g.lineWidth = 2; g.strokeRect(x + 4, 80, bw - 8, 170); g.lineWidth = 1;
      for (var j = 0; j < c; j++) { g.fillStyle = c >= 2 ? C.gold : C.ice; g.beginPath(); g.arc(x + bw / 2, 236 - j * 22, Math.min(9, bw / 4), 0, 7); g.fill(); } });
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText((n + extra) + " pigeons, " + n + " holes", 30, 36);
    g.font = F(17, 500); g.fillStyle = C.gold; g.fillText("fullest hole: " + most + " (at least ⌈" + (n + extra) + "/" + n + "⌉ = " + Math.ceil((n + extra) / n) + ")", 30, 62);
    out.textContent = "With more pigeons than holes, some hole must hold at least two: if every hole held one at most, there would be room for only " + n + ".";
  }
  k.slider("Holes n", 2, 10, 1, n, function (v) { return v; }, function (v) { n = v; make(); draw(); });
  k.slider("Extra pigeons", 1, 12, 1, extra, function (v) { return v; }, function (v) { extra = v; make(); draw(); });
  k.buttons([["Again", function () { make(); draw(); }]]);
  st.draw = draw;
});
