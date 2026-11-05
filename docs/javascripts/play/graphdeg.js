/* Euler's walk. The bridges of Königsberg: four land masses, seven bridges. A walk crossing every bridge once exists
   only if no more than two places have an odd number of bridges. Tap a bridge to remove it, and watch the odd
   corners: with zero or two of them, the walk becomes possible. The degrees always add up to twice the bridges. */
PLAY("graphdeg", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, out;
  var V = [[200, 40, "North bank"], [200, 260, "South bank"], [120, 150, "Island"], [330, 150, "East"]];
  var E0 = [[0, 2, -25], [0, 2, 25], [1, 2, -25], [1, 2, 25], [0, 3, 0], [1, 3, 0], [2, 3, 0]], on = E0.map(function () { return true; });
  function mid(e) { var a = V[e[0]], b = V[e[1]], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[1] - a[1], dy = a[0] - b[0], L = Math.hypot(dx, dy); return [mx + dx / L * e[2], my + dy / L * e[2]]; }
  var st = k.stage(W, H, function (x, y) { var best = -1, bd = 30; E0.forEach(function (e, i) { var m = mid(e), d = Math.hypot(m[0] - x, m[1] - y); if (d < bd) { bd = d; best = i; } }); if (best >= 0) { on[best] = !on[best]; draw(); } });
  var g = st.g; out = k.out();
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var deg = [0, 0, 0, 0], m = 0;
    E0.forEach(function (e, i) { var a = V[e[0]], b = V[e[1]], c = mid(e); g.strokeStyle = on[i] ? C.ice : "rgba(156,201,234,0.18)"; g.lineWidth = on[i] ? 4 : 2; g.setLineDash(on[i] ? [] : [6, 6]); g.beginPath(); g.moveTo(a[0], a[1]); g.quadraticCurveTo(2 * c[0] - (a[0] + b[0]) / 2, 2 * c[1] - (a[1] + b[1]) / 2, b[0], b[1]); g.stroke(); if (on[i]) { deg[e[0]]++; deg[e[1]]++; m++; } });
    g.setLineDash([]); g.lineWidth = 1; var odd = 0;
    V.forEach(function (v, i) { var o = deg[i] % 2; if (o) odd++; g.fillStyle = o ? C.red : C.green; g.beginPath(); g.arc(v[0], v[1], 18, 0, 7); g.fill(); g.fillStyle = C.bg; g.font = F(18, 700); g.textAlign = "center"; g.fillText(deg[i], v[0], v[1] + 6); });
    g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.ink; g.fillText(m + " bridges, " + odd + " odd places", 380, 60);
    g.font = F(17, 500); g.fillStyle = C.ink2; g.fillText("degrees add to " + (deg[0] + deg[1] + deg[2] + deg[3]) + " = 2 × " + m, 380, 92);
    g.fillStyle = odd <= 2 ? C.gold : C.red; g.fillText(odd === 0 ? "a closed walk exists" : odd === 2 ? "a walk exists (odd ends)" : "no such walk", 380, 124);
    out.textContent = "Red places have an odd number of bridges. Königsberg had four, so no walk crossed every bridge once. Tap a bridge to take it away.";
  }
  st.draw = draw; draw();
});
