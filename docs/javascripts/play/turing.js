/* A Turing machine at work: a head on a tape of cells, a state, and a table of rules ("in state A reading 1: write 0,
   move left, stay in A"). data-mode="add1": add one to a binary number. "beaver": the two-state busy beaver, which
   writes four 1s on a blank tape in six steps and halts, the most any two-state machine can. */
PLAY("turing", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "add1";
  var R = mode === "beaver" ? { "A0": [1, 1, "B"], "A1": [1, -1, "B"], "B0": [1, -1, "A"], "B1": [1, 1, "H"] }
    : { "R0": [0, 1, "R"], "R1": [1, 1, "R"], "R_": [null, -1, "C"], "C1": [0, -1, "C"], "C0": [1, 0, "H"], "C_": [1, 0, "H"] };
  var tape, head, state, steps, last;
  function reset() { tape = {}; if (mode === "add1") { "1011".split("").forEach(function (c, i) { tape[i] = +c; }); head = 0; state = "R"; } else { head = 0; state = "A"; } steps = 0; last = ""; }
  function sym(i) { var v = tape[i]; return v === undefined ? (mode === "beaver" ? 0 : "_") : v; }
  function step() { if (state === "H") return; var r = R[state + sym(head)]; last = "In " + state + " reading " + sym(head) + ": write " + (r[0] === null ? sym(head) : r[0]) + ", move " + (r[1] > 0 ? "right" : r[1] < 0 ? "left" : "nowhere") + ", go to " + (r[2] === "H" ? "halt" : r[2]) + "."; if (r[0] !== null) tape[head] = r[0]; head += r[1]; state = r[2]; steps++; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "center";
    for (var i = -4; i <= 7; i++) { var x = 40 + (i + 4) * 44, s = sym(i); g.fillStyle = i === head ? "rgba(246,196,83,0.25)" : C.bg2; g.fillRect(x, 90, 40, 50); g.strokeStyle = C.line; g.strokeRect(x, 90, 40, 50); g.font = F(26, 700, "m"); g.fillStyle = s === 1 ? C.gold : C.ink3; g.fillText(s === "_" ? "" : s, x + 20, 125); }
    var hx = 40 + (head + 4) * 44 + 20; g.fillStyle = C.gold; g.beginPath(); g.moveTo(hx, 85); g.lineTo(hx - 10, 65); g.lineTo(hx + 10, 65); g.fill();
    g.font = F(18, 700); g.fillText(state === "H" ? "halt" : "state " + state, hx, 55);
    g.textAlign = "left"; g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("step " + steps, 40, 190);
    var ones = 0; for (var key in tape) if (tape[key] === 1) ones++;
    if (mode === "beaver") g.fillText("1s on the tape: " + ones, 40, 220);
    out.textContent = last || (mode === "add1" ? "The tape holds 1011 (eleven). The machine runs right to the end, then carries back to the left." : "A blank tape. Press Step.");
  }
  reset();
  k.buttons([["Step", function () { step(); draw(); }], ["Run", function () { var n = 0; while (state !== "H" && n++ < 50) step(); draw(); }], ["Start again", function () { reset(); draw(); }]]);
  st.draw = draw; draw();
});
