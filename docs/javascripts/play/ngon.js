/* Which regular polygons can be drawn with straightedge and compass? Gauss and Wantzel: exactly those whose number of
   sides is a power of 2 times different Fermat primes (3, 5, 17, 257, 65537). */
PLAY("ngon", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), n = 17;
  function draw() {
    var m = n, two = 0, fermat = [], bad = [];
    while (m % 2 === 0) { m /= 2; two++; }
    [3, 5, 17, 257].forEach(function (p) { if (m % p === 0) { m /= p; if (m % p === 0) { bad.push(p + "²"); while (m % p === 0) m /= p; } else fermat.push(p); } });
    for (var d = 3; d <= m; d += 2) if (m % d === 0) { var e = 0; while (m % d === 0) { m /= d; e++; } bad.push(d + (e > 1 ? "⁰¹²³⁴⁵⁶⁷⁸⁹"[e] : "")); }
    var ok = !bad.length;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = ok ? "rgba(246,196,83,0.15)" : "rgba(244,230,212,0.06)"; g.strokeStyle = ok ? C.gold : C.ink3; g.lineWidth = 2.5; g.beginPath();
    for (var i = 0; i <= n; i++) { var t = i / n * 2 * Math.PI - Math.PI / 2, x = 150 + Math.cos(t) * 120, y = 150 + Math.sin(t) * 120; i ? g.lineTo(x, y) : g.moveTo(x, y); }
    g.fill(); g.stroke(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(22, 700); g.fillStyle = ok ? C.gold : C.ink; g.fillText(n + " sides", 310, 54);
    g.font = F(18, 500); g.fillStyle = C.ink2;
    var parts = []; if (two) parts.push("2" + (two > 1 ? "⁰¹²³⁴⁵⁶⁷⁸⁹"[two] : "")); parts = parts.concat(fermat.map(String), bad);
    g.fillText(n + " = " + parts.join(" × "), 310, 90);
    g.fillStyle = ok ? C.gold : C.ink2; g.fillText(ok ? "Constructible" : "Not constructible:", 310, 130);
    if (!ok) g.fillText(bad.join(", ") + " is not allowed", 310, 158);
    out.textContent = ok ? "A regular " + n + "-gon can be drawn with straightedge and compass." : "A regular " + n + "-gon cannot: " + bad.join(" and ") + " is not a single Fermat prime.";
  }
  k.slider("Sides n", 3, 40, 1, n, function (v) { return v; }, function (v) { n = v; draw(); });
  st.draw = draw;
});
