/* Volume and surface area. data-shape: box (rectangular prism), cyl (cylinder), cone, sphere, pyr (square pyramid). For
   the cone and pyramid the volume is a third of the matching cylinder or box. data-mode="scale" grows every length by
   the same factor: area by its square, volume by its cube. */
PLAY("solid", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 250, st = k.stage(W, H), g = st.g, out = k.out(), sh = fig.getAttribute("data-shape") || "box", scale = fig.getAttribute("data-mode") === "scale", a = 4, b = 3, h = 5, s = 2;
  function num(v) { return +v.toFixed(2); }
  function calc() { var r = a / 2; switch (sh) { case "box": return [a * b * h, 2 * (a * b + a * h + b * h), "length × width × height", "2(lw + lh + wh)"];
      case "cyl": return [Math.PI * r * r * h, 2 * Math.PI * r * r + 2 * Math.PI * r * h, "π r² h", "2π r² + 2π r h"]; case "cone": var l = Math.hypot(r, h); return [Math.PI * r * r * h / 3, Math.PI * r * r + Math.PI * r * l, "⅓ π r² h", "π r² + π r l"];
      case "sphere": return [4 / 3 * Math.PI * r * r * r, 4 * Math.PI * r * r, "4/3 π r³", "4 π r²"]; case "pyr": var sl = Math.hypot(a / 2, h); return [a * a * h / 3, a * a + 2 * a * sl, "⅓ × base × height", "a² + 2 a × slant"]; } }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); var u = 16, cx = 130, cy = 200, r = a / 2 * u, hh = h * u; g.strokeStyle = C.gold; g.lineWidth = 3; g.fillStyle = C.gold; g.globalAlpha = 0.25;
    g.beginPath(); if (sh === "box") { var w = a * u, d = b * u * 0.5; g.rect(cx - w / 2, cy - hh, w, hh); g.moveTo(cx - w / 2, cy - hh); g.lineTo(cx - w / 2 + d, cy - hh - d); g.lineTo(cx + w / 2 + d, cy - hh - d); g.lineTo(cx + w / 2, cy - hh); g.moveTo(cx + w / 2 + d, cy - hh - d); g.lineTo(cx + w / 2 + d, cy - d); g.lineTo(cx + w / 2, cy); }
    else if (sh === "cyl") { g.ellipse(cx, cy, r, r * 0.3, 0, 0, 7); g.moveTo(cx - r, cy); g.lineTo(cx - r, cy - hh); g.moveTo(cx + r, cy); g.lineTo(cx + r, cy - hh); g.moveTo(cx + r, cy - hh); g.ellipse(cx, cy - hh, r, r * 0.3, 0, 0, 7); }
    else if (sh === "cone" || sh === "pyr") { g.ellipse(cx, cy, r, r * 0.3, 0, 0, sh === "cone" ? 7 : 0); if (sh === "pyr") { g.moveTo(cx - r, cy); g.lineTo(cx + r * 0.6, cy + r * 0.25); g.lineTo(cx + r, cy - r * 0.2); g.lineTo(cx - r * 0.6, cy - r * 0.35); g.closePath(); } g.moveTo(cx - r, cy); g.lineTo(cx, cy - hh); g.lineTo(cx + r, cy); if (sh === "pyr") { g.moveTo(cx, cy - hh); g.lineTo(cx + r * 0.6, cy + r * 0.25); } }
    else { g.arc(cx, cy - r, r, 0, 7); g.moveTo(cx + r, cy - r); g.ellipse(cx, cy - r, r, r * 0.3, 0, 0, 7); }
    g.fill(); g.globalAlpha = 1; g.stroke();
    var v = calc(); g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(19, 800); g.fillText("volume " + num(v[0]), 280, 60); g.fillStyle = C.ink2; g.font = F(16, 600); g.fillText("= " + v[2], 280, 86);
    g.fillStyle = C.ink; g.font = F(19, 800); g.fillText("surface " + num(v[1]), 280, 130); g.fillStyle = C.ink2; g.font = F(16, 600); g.fillText("= " + v[3], 280, 156);
    out.textContent = scale ? "Every length × " + s + ": surface area × " + s * s + ", volume × " + s * s * s + "." : (sh === "cone" || sh === "pyr" ? "Exactly a third of the " + (sh === "cone" ? "cylinder" : "box") + " with the same base and height. " : "") + "Units: lengths in cm give area in cm² and volume in cm³.";
  }
  var lab = sh === "box" ? "Length" : sh === "pyr" ? "Base side" : "Diameter";
  k.slider(lab, 1, 8, 1, a, function (v) { return v; }, function (v) { a = +v; if (scale) { b = a * 0.75; h = a * 1.25; } draw(); });
  if (sh === "box") k.slider("Width", 1, 8, 1, b, function (v) { return v; }, function (v) { b = +v; draw(); });
  if (sh !== "sphere") k.slider("Height", 1, 9, 1, h, function (v) { return v; }, function (v) { h = +v; draw(); });
  if (scale) k.slider("Scale factor", 1, 4, 1, s, function (v) { return "× " + v; }, function (v) { s = +v; draw(); });
  st.draw = draw; draw();
});
