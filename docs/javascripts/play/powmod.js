/* Powers modulo a prime p. Row a lists a, a², a³, … mod p, each value its own colour; the 1s are white. Every row
   reaches 1 by the power p − 1 (Fermat's little theorem). Rows that meet every number before coming back to 1 are the
   primitive roots, marked gold. Tap a row to read it. */
PLAY("powmod", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, ps = [5, 7, 11, 13, 17, 19, 23], p = 11, sel = 2;
  var st = k.stage(W, H, function (x, y) { var cs = 270 / (p - 1), r = Math.floor((y - 20) / cs) + 1; if (x < 300 && r >= 1 && r < p) { sel = r; draw(); } });
  var g = st.g, out = k.out();
  function pw(a, e) { var r = 1; for (var i = 0; i < e; i++) r = r * a % p; return r; }
  function ord(a) { for (var e = 1; e < p; e++) if (pw(a, e) === 1) return e; }
  function draw() {
    var cs = 270 / (p - 1), roots = [];
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var a = 1; a < p; a++) {
      var prim = ord(a) === p - 1; if (prim) roots.push(a);
      for (var e = 1; e < p; e++) {
        var v = pw(a, e);
        g.fillStyle = v === 1 ? "#ffffff" : "hsl(" + Math.round(v / p * 300) + ",55%,55%)";
        g.fillRect(24 + (e - 1) * cs, 20 + (a - 1) * cs, cs - 1, cs - 1);
      }
      if (prim || a === sel) { g.strokeStyle = a === sel ? C.ink : C.gold; g.lineWidth = 2; g.strokeRect(23 + 0, 19 + (a - 1) * cs, cs * (p - 1) + 1, cs + 1); g.lineWidth = 1; }
    }
    g.textAlign = "left"; g.font = F(20, 600); g.fillStyle = C.ink; g.fillText("mod " + p, 320, 44);
    g.font = F(18, 500); g.fillStyle = C.ink2;
    g.fillText("Every row ends in 1 (white)", 320, 80);
    g.fillStyle = C.gold; g.fillText("Primitive roots: " + roots.join(", "), 320, 116, 270);
    g.fillStyle = C.ink2; g.fillText(sel + " comes back to 1 after " + ord(sel), 320, 160);
    g.fillText("steps; " + ord(sel) + " divides " + (p - 1), 320, 186);
    var row = []; for (var e2 = 1; e2 < p; e2++) row.push(pw(sel, e2));
    out.textContent = "Powers of " + sel + " mod " + p + ": " + row.join(", ") + ".";
  }
  k.slider("Prime p", 0, ps.length - 1, 1, 2, function (v) { return ps[v]; }, function (v) { p = ps[v]; if (sel >= p) sel = 2; draw(); });
  st.draw = draw;
});
