/* Counting primes. π(x) is how many primes there are up to x (gold steps); the prime number theorem says it grows
   like x / ln x (blue). data-mode="race": primes that leave 1 on division by 4 against those that leave 3; the 3s
   are ahead most of the time, but not always. */
PLAY("primecount", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), race = fig.getAttribute("data-mode") === "race";
  var MAX = 100000, sieve = new Uint8Array(MAX + 1), X = race ? 30000 : 1000;
  for (var i = 2; i * i <= MAX; i++) if (!sieve[i]) for (var j = i * i; j <= MAX; j += i) sieve[j] = 1;
  function draw() {
    var cnt = 0, c1 = 0, c3 = 0, pts = [], L = 40, R = 570, T = 30, B = 250, lead = 0;
    for (var x = 2; x <= X; x++) if (!sieve[x]) { cnt++; if (x % 4 === 1) c1++; else if (x % 4 === 3) c3++; pts.push([x, cnt, c3 - c1]); if (c1 > c3) lead++; }
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.beginPath(); g.moveTo(L, T); g.lineTo(L, B); g.lineTo(R, B); g.stroke();
    if (!race) {
      var top = cnt * 1.15;
      g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.moveTo(L, B);
      pts.forEach(function (p) { g.lineTo(L + (p[0] / X) * (R - L), B - p[1] / top * (B - T)); }); g.lineTo(R, B - cnt / top * (B - T)); g.stroke();
      g.strokeStyle = C.ice; g.beginPath();
      for (x = 3; x <= X; x += X / 200) { var yy = x / Math.log(x); g.lineTo(L + x / X * (R - L), B - yy / top * (B - T)); } g.stroke(); g.lineWidth = 1;
      g.font = F(20, 600); g.textAlign = "left"; g.fillStyle = C.gold; g.fillText("π(" + X.toLocaleString("en") + ") = " + cnt.toLocaleString("en"), 60, 54);
      g.fillStyle = C.ice; g.fillText("x / ln x ≈ " + Math.round(X / Math.log(X)).toLocaleString("en"), 60, 84);
      out.textContent = "Up to " + X.toLocaleString("en") + " there are " + cnt + " primes; x / ln x gives " + Math.round(X / Math.log(X)) + ", and the ratio, " + (cnt / (X / Math.log(X))).toFixed(3) + ", creeps towards 1 as x grows.";
    } else {
      var mx = 1; pts.forEach(function (p) { mx = Math.max(mx, Math.abs(p[2])); }); var mid = (T + B) / 2;
      g.strokeStyle = C.line; g.beginPath(); g.moveTo(L, mid); g.lineTo(R, mid); g.stroke();
      g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath(); g.moveTo(L, mid);
      pts.forEach(function (p) { g.lineTo(L + p[0] / X * (R - L), mid - p[2] / mx * (B - T) / 2.2); }); g.stroke(); g.lineWidth = 1;
      g.font = F(18, 500); g.textAlign = "left"; g.fillStyle = C.ink2; g.fillText("above the line: more primes of the form 4k + 3", 60, 26);
      g.fillStyle = C.gold; g.fillText("4k + 1: " + c1 + "    4k + 3: " + c3, 60, 280);
      out.textContent = "Up to " + X.toLocaleString("en") + ": " + c1 + " primes of the form 4k + 1 and " + c3 + " of the form 4k + 3. " + (lead ? "The 4k + 1s led " + lead + " times." : "The 4k + 1s have not led yet; they first do at 26,861.");
    }
  }
  k.slider("Up to x", race ? 1000 : 50, race ? 100000 : 100000, race ? 1000 : 50, X, function (v) { return v.toLocaleString("en"); }, function (v) { X = v; draw(); });
  st.draw = draw;
});
