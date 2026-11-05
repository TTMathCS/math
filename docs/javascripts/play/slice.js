/* Python slicing, s[a:b:c]: start at index a, stop before b, step c. A negative index counts from the end; a negative
   step walks backwards (and then the blank start and stop mean "from the end" and "to the front"). Move the sliders; the
   gold letters are the ones the slice keeps, in order. */
PLAY("slice", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 220, s = fig.getAttribute("data-s") || "Olympus Mons", n = s.length, a = 0, b = n, c = 1, st = k.stage(W, H), g = st.g, out = k.out();
  function picks() {   // Python's rules for a slice; a = null / b = null mean blank
    var A = a, B = b, r = [];
    if (c > 0) { A = A === null ? 0 : A < 0 ? Math.max(A + n, 0) : Math.min(A, n); B = B === null ? n : B < 0 ? Math.max(B + n, 0) : Math.min(B, n); for (var i = A; i < B; i += c) r.push(i); }
    else { A = A === null ? n - 1 : A < 0 ? Math.max(A + n, -1) : Math.min(A, n - 1); B = B === null ? -1 : B < 0 ? Math.max(B + n, -1) : Math.min(B, n - 1); for (var j = A; j > B; j += c) r.push(j); }
    return r;
  }
  function show(x) { return x === null ? "" : String(x); }
  function draw() {
    var r = picks(), w = Math.min(40, 560 / n), x0 = (W - w * n) / 2;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "center";
    for (var i = 0; i < n; i++) {
      var on = r.indexOf(i) >= 0;
      g.fillStyle = on ? "rgba(246,196,83,0.18)" : C.bg2; g.fillRect(x0 + i * w + 1, 70, w - 2, 50);
      g.font = F(22, 600, "m"); g.fillStyle = on ? C.gold : C.ink3; g.fillText(s[i] === " " ? "␣" : s[i], x0 + i * w + w / 2, 104);
      g.font = F(17, 500, "m"); g.fillStyle = C.ink3; g.fillText(i, x0 + i * w + w / 2, 58);
      g.fillText(i - n, x0 + i * w + w / 2, 142 + (i % 2) * 18);
    }
    g.textAlign = "left"; g.font = F(19, 600, "m"); g.fillStyle = C.ink;
    var expr = 's[' + show(a) + ':' + show(b) + (c === 1 ? '' : ':' + c) + ']';
    g.fillText(expr + '  →  "' + r.map(function (i) { return s[i]; }).join("") + '"', 20, 30);
    out.textContent = expr + " keeps index " + (r.length ? r.join(", ") : "nothing") + ". Top numbers count from the front, bottom ones from the end.";
  }
  function pos(v, lo) { return v === lo ? null : v; }
  k.slider("Start a", -n - 1, n, 1, -n - 1, function (x) { return x === -n - 1 ? "blank" : x; }, function (x) { a = pos(x, -n - 1); draw(); });
  k.slider("Stop b", -n - 1, n, 1, -n - 1, function (x) { return x === -n - 1 ? "blank" : x; }, function (x) { b = pos(x, -n - 1); draw(); });
  var cs = [-3, -2, -1, 1, 2, 3];
  k.slider("Step c", 0, 5, 1, 3, function (i) { return cs[i]; }, function (i) { c = cs[i]; draw(); });
  st.draw = draw;
});
