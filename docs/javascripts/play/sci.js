/* Scientific notation: a number between 1 and 10 times a power of ten. Move the power and see the same digits as an
   ordinary number, with a few real sizes for scale (sizes rounded). */
PLAY("sci", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 230, st = k.stage(W, H), g = st.g, out = k.out(), m = 3.8, e = 8;
  var REF = [[-10, "an atom, in metres (about 10⁻¹⁰)"], [-6, "a bacterium, in metres (a few × 10⁻⁶)"], [0, "a person's arm span, in metres"], [6, "the Moon's diameter, in metres (3.5 × 10⁶)"], [8, "Earth to the Moon, in metres (3.8 × 10⁸)"], [11, "Earth to the Sun, in metres (1.5 × 10¹¹)"]];
  function sup(x) { return String(x).split("").map(function (c) { return "⁰¹²³⁴⁵⁶⁷⁸⁹"["0123456789".indexOf(c)] || (c === "-" ? "⁻" : c); }).join(""); }
  function draw() {
    var v = m * Math.pow(10, e), plain = e >= 0 ? Math.round(v).toLocaleString("en") : v.toFixed(-e + 1); g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "left";
    g.fillStyle = C.gold; g.font = F(34, 800); g.fillText(m + " × 10" + sup(e), 24, 56); g.fillStyle = C.ink; g.font = F(e > 12 || e < -8 ? 14 : 20, 700, "m"); g.fillText("= " + plain, 24, 100);
    var near = REF.reduce(function (b, r) { return Math.abs(r[0] - e) < Math.abs(b[0] - e) ? r : b; }); g.fillStyle = C.ink2; g.font = F(17, 600); g.fillText("near 10" + sup(near[0]) + ": " + near[1], 24, 150);
    out.textContent = "The power " + e + " says how many places the decimal point moves " + (e >= 0 ? "right" : "left") + ". Each step of the power is ten times bigger.";
  }
  k.slider("First part", 1, 9.9, 0.1, m, function (v) { return (+v).toFixed(1); }, function (v) { m = +v; draw(); });
  k.slider("Power of ten", -10, 12, 1, e, function (v) { return v; }, function (v) { e = +v; draw(); });
  st.draw = draw; draw();
});
