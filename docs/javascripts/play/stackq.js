/* A stack and a queue get the same arrivals. A stack hands back the newest first (last in, first out: undo, the call
   stack); a queue the oldest first (first in, first out: a print queue, a waiting line). Add and remove and compare. */
PLAY("stackq", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), S = [], Q = [], next = 1, gone = "";
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.textAlign = "center"; g.font = F(19, 600);
    g.fillStyle = C.rust; g.fillText("Stack", 130, 30); g.fillStyle = C.ice; g.fillText("Queue", 400, 30);
    g.strokeStyle = C.line; g.lineWidth = 2; g.beginPath(); g.moveTo(80, 60); g.lineTo(80, 270); g.lineTo(180, 270); g.lineTo(180, 60); g.stroke(); g.lineWidth = 1;
    S.forEach(function (v, i) { g.fillStyle = C.bg2; g.fillRect(86, 230 - i * 34, 88, 30); g.fillStyle = C.rust; g.font = F(19, 600, "m"); g.fillText(v, 130, 252 - i * 34); });
    g.strokeStyle = C.line; g.lineWidth = 2; g.beginPath(); g.moveTo(250, 120); g.lineTo(560, 120); g.moveTo(250, 170); g.lineTo(560, 170); g.stroke(); g.lineWidth = 1;
    Q.forEach(function (v, i) { g.fillStyle = C.bg2; g.fillRect(256 + i * 50, 126, 44, 38); g.fillStyle = C.ice; g.font = F(19, 600, "m"); g.fillText(v, 278 + i * 50, 152); });
    g.font = F(17, 500); g.fillStyle = C.ink3; g.fillText("out ←", 268, 200); g.fillText("← in", 520, 200); g.fillText("in, out ↓↑", 130, 54 + 0);
    g.textAlign = "left"; g.fillStyle = C.gold; g.font = F(18, 600); if (gone) g.fillText(gone, 250, 250);
    out.textContent = "Stack (top last): [" + S.join(", ") + "]. Queue (front first): [" + Q.join(", ") + "].";
  }
  k.buttons([
    ["Add", function () { if (S.length < 6) { S.push(next); Q.push(next); gone = "added " + next; next++; } draw(); }],
    ["Remove", function () { if (S.length) { gone = "stack gave " + S.pop() + ", queue gave " + Q.shift(); } else gone = "both empty"; draw(); }],
    ["Start again", function () { S = []; Q = []; next = 1; gone = ""; draw(); }]
  ]);
  st.draw = draw;
});
