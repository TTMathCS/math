/* List and count. data-mode="perm": every order of k things chosen from n (n!/(n−k)!). data-mode="comb": every group of
   k chosen from n, order ignored (n choose k). The letters stand for any n different things. */
PLAY("arrange", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "perm", n = 4, kk = 2;
  function fact(m) { var r = 1; for (var i = 2; i <= m; i++) r *= i; return r; }
  function list() { var L = "ABCDEFGH".slice(0, n).split(""), R = [];
    (function go(cur, rest) { if (cur.length === kk) { R.push(cur.join("")); return; } rest.forEach(function (c, i) { go(cur.concat([c]), mode === "perm" ? rest.slice(0, i).concat(rest.slice(i + 1)) : rest.slice(i + 1)); }); })([], L); return R; }
  function draw() {
    var R = list(), cnt = mode === "perm" ? fact(n) / fact(n - kk) : fact(n) / fact(kk) / fact(n - kk); g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var cols = Math.max(1, Math.floor(560 / ((kk + 1) * 16))), shown = Math.min(R.length, cols * 9); g.font = F(18, 700, "m"); g.textAlign = "left";
    for (var i = 0; i < shown; i++) { g.fillStyle = i % 2 ? C.ice : C.gold; g.fillText(R[i], 20 + (i % cols) * (kk + 1) * 16, 30 + Math.floor(i / cols) * 26); }
    if (R.length > shown) { g.fillStyle = C.ink3; g.fillText("… " + (R.length - shown) + " more", 20, 268); }
    out.textContent = mode === "perm" ? "Orders of " + kk + " from " + n + ": " + Array.from({ length: kk }, function (_, i) { return n - i; }).join(" × ") + " = " + cnt + "." : "Groups of " + kk + " from " + n + ": " + n + "! ÷ (" + kk + "! × " + (n - kk) + "!) = " + cnt + ". Each group would appear " + fact(kk) + " times if order mattered.";
  }
  k.slider("Things n", 1, 8, 1, n, function (v) { return v; }, function (v) { n = +v; if (kk > n) kk = n; draw(); });
  k.slider("Take k", 1, 8, 1, kk, function (v) { return v; }, function (v) { kk = Math.min(+v, n); draw(); });
  st.draw = draw; draw();
});
