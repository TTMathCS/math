/* Three sides of a triangle. Choose the lengths: a triangle exists only when each side is shorter than the other two
   together (the triangle inequality). When it exists, the three sides fix it completely, angles and all (SSS). */
PLAY("tri3", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), a = 5, b = 4, c = 3;
  function ok0() { return 270 / Math.max(a, b, c); }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var ok = a < b + c && b < a + c && c < a + b, s = ok0(), x0 = 40, y0 = 250;
    g.textAlign = "left";
    if (ok) {
      var x = (b * b + a * a - c * c) / (2 * a), y = Math.sqrt(Math.max(0, b * b - x * x));
      var P = [[x0, y0], [x0 + a * s, y0], [x0 + x * s, y0 - y * s]];
      g.fillStyle = "rgba(246,196,83,0.15)"; g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); P.forEach(function (p, i) { i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); }); g.closePath(); g.fill(); g.stroke(); g.lineWidth = 1;
      function ang(o, p, q) { return Math.acos((o * o + p * p - q * q) / (2 * o * p)) * 180 / Math.PI; }
      g.font = F(18, 500); g.fillStyle = C.ink2;
      g.fillText("angles: " + ang(b, c, a).toFixed(1) + "°, " + ang(a, c, b).toFixed(1) + "°, " + ang(a, b, c).toFixed(1) + "°", 340, 100);
      out.textContent = "Sides " + a + ", " + b + ", " + c + " make exactly one triangle; every copy has the same angles.";
    } else {
      var big = Math.max(a, b, c), rest = a + b + c - big;
      g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + big * s, y0); g.stroke();
      g.strokeStyle = C.red; g.beginPath(); g.moveTo(x0, y0 - 14); g.lineTo(x0 + rest * s, y0 - 14); g.stroke(); g.lineWidth = 1;
      g.font = F(18, 500); g.fillStyle = C.red; g.fillText("the two short sides reach only " + rest, 340, 100, 250);
      out.textContent = "No triangle: " + big + " is not shorter than the other two together (" + rest + "). They cannot meet.";
    }
    g.font = F(20, 600); g.fillStyle = ok ? C.gold : C.red; g.fillText(ok ? "A triangle" : "No triangle", 340, 60);
  }
  ["a", "b", "c"].forEach(function (nm, i) { k.slider("Side " + nm, 1, 9, 0.5, [a, b, c][i], function (v) { return v; }, function (v) { if (i === 0) a = v; else if (i === 1) b = v; else c = v; draw(); }); });
  st.draw = draw;
});
