/* Young's double slit. Light of wavelength λ through two slits a distance d apart makes bright fringes where the two
   paths differ by whole wavelengths: d sin θ = mλ. The gold curve is the brightness on a screen 1 m away; wider
   slits apart make the fringes closer together, longer waves (redder light) spread them out. */
PLAY("slit", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), lam = 600, d = 0.1;
  function col(l) { var h = l < 440 ? 270 : l < 490 ? 240 - (l - 440) * 1.2 : l < 580 ? 180 - (l - 490) * 1.4 : Math.max(0, 55 - (l - 580) * 0.5); return "hsl(" + h + ",90%,60%)"; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var span = 0.04, L = 1, sp = lam * 1e-9 * L / (d * 1e-3);
    for (var x = 0; x < W; x++) { var y = (x - 300) / 300 * span, ph = Math.PI * d * 1e-3 * y / (lam * 1e-9 * L), b = Math.cos(ph); b *= b; g.fillStyle = col(lam); g.globalAlpha = b; g.fillRect(x, 30, 1, 120); }
    g.globalAlpha = 1; g.strokeStyle = C.gold; g.lineWidth = 2; g.beginPath();
    for (x = 0; x < W; x++) { var y2 = (x - 300) / 300 * span, ph2 = Math.PI * d * 1e-3 * y2 / (lam * 1e-9 * L), b2 = Math.cos(ph2); b2 *= b2; x ? g.lineTo(x, 255 - b2 * 75) : g.moveTo(x, 255 - b2 * 75); } g.stroke(); g.lineWidth = 1;
    g.textAlign = "left"; g.font = F(18, 600); g.fillStyle = C.ink; g.fillText("fringes " + (sp * 1000).toFixed(1) + " mm apart", 20, 170);
    out.textContent = "λ = " + lam + " nm through slits " + d + " mm apart: bright fringes every λL/d = " + (sp * 1000).toFixed(1) + " mm on a screen 1 m away (screen shown 8 cm wide).";
  }
  k.slider("Wavelength (nm)", 400, 700, 10, lam, function (x) { return x; }, function (x) { lam = x; draw(); });
  k.slider("Slit spacing (mm)", 0.05, 0.5, 0.01, d, function (x) { return x.toFixed(2); }, function (x) { d = x; draw(); });
  st.draw = draw;
});
