/* Which whole numbers are a sum of two squares? The circle x² + y² = n passes through a grid point (gold) exactly
   when n is one. data-mode="gauss" shows the Gaussian primes instead: a + bi that cannot be split into smaller
   Gaussian integers. */
PLAY("twosq", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), gauss = fig.getAttribute("data-mode") === "gauss", n = 25;
  function isP(m) { if (m < 2) return false; for (var d = 2; d * d <= m; d++) if (m % d === 0) return false; return true; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var cx = 150, cy = 150, R = gauss ? n : 11, s = 130 / R, pts = [];
    for (var x = -R; x <= R; x++) for (var y = -R; y <= R; y++) {
      var N = x * x + y * y, on, X = cx + x * s, Y = cy - y * s;
      if (gauss) on = (x === 0 || y === 0) ? (isP(Math.abs(x + y)) && Math.abs(x + y) % 4 === 3) : isP(N);
      else { on = N === n; if (on && x >= 0 && y >= x) pts.push(x + "² + " + y + "²"); }
      g.fillStyle = on ? C.gold : C.line; g.beginPath(); g.arc(X, Y, on ? Math.max(2.5, s * 0.35) : Math.max(1.2, s * 0.08), 0, 7); g.fill();
    }
    g.textAlign = "left";
    if (gauss) {
      g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("Gaussian primes", 310, 50);
      g.font = F(18, 500); g.fillStyle = C.ink2; g.fillText("a + bi with |a|, |b| up to " + n, 310, 80);
      g.fillText("On the axes: primes 3, 7, 11, …", 310, 120); g.fillText("(they leave 3 on division by 4)", 310, 146);
      g.fillText("Elsewhere: a² + b² is prime", 310, 180);
      out.textContent = "2 = (1 + i)(1 − i) and 5 = (2 + i)(2 − i) split, but 3 and 7 stay prime among the Gaussian integers.";
    } else {
      g.strokeStyle = C.ice; g.beginPath(); g.arc(cx, cy, Math.sqrt(n) * s, 0, 7); g.stroke();
      g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("x² + y² = " + n, 310, 50);
      g.font = F(18, 500); g.fillStyle = pts.length ? C.gold : C.ink2;
      g.fillText(pts.length ? n + " = " + pts.join(" = ") : "no grid point: not a sum of two squares", 310, 86, 280);
      var f = [], m = n; for (var d = 2; d <= m; d++) { var e = 0; while (m % d === 0) { m /= d; e++; } if (e) f.push(d + (e > 1 ? "⁰¹²³⁴⁵⁶⁷⁸⁹"[e] : "")); }
      g.fillStyle = C.ink2; g.fillText(n + " = " + (f.join(" × ") || "1"), 310, 126, 280);
      out.textContent = "A number is a sum of two squares exactly when every prime that leaves 3 on division by 4 appears in it an even number of times.";
    }
  }
  k.slider(gauss ? "Size" : "n", gauss ? 5 : 1, gauss ? 20 : 120, 1, gauss ? 12 : n, function (v) { return v; }, function (v) { n = v; draw(); });
  st.draw = draw;
});
