/* A hundred chart. data-mode="multiples": shade the multiples of a number. data-mode="sieve": cross out multiples of 2,
   3, 5, 7 in turn; what is left (after 1) are the primes up to 100. data-mode="squares": the square numbers. */
PLAY("hundred", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 365, st = k.stage(W, H), g = st.g, out = k.out(), mode = fig.getAttribute("data-mode") || "multiples", m = 3, film;
  function cell(v, col, txt) { var i = v - 1, x = 50 + (i % 10) * 50, y = 6 + Math.floor(i / 10) * 32; g.fillStyle = col; g.fillRect(x, y, 46, 29); g.fillStyle = txt; g.font = F(16, 800); g.textAlign = "center"; g.fillText(v, x + 23, y + 21); }
  function draw(t) {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    if (mode === "sieve") { var P = [2, 3, 5, 7], step = Math.floor((t || 0) * 5.999), cnt = 0;
      for (var v = 1; v <= 100; v++) { var out1 = v === 1, by = 0; for (var j = 0; j < Math.min(step, 4); j++) if (v !== P[j] && v % P[j] === 0) { out1 = true; by = P[j]; break; } if (!out1 && step >= 5) cnt++;
        cell(v, out1 ? C.line : step >= 5 ? C.green : C.ink3, out1 ? C.ink3 : C.bg); }
      out.textContent = step < 1 ? "Press Play: cross out 1, then the multiples of 2, 3, 5 and 7." : step < 5 ? "Crossing out the multiples of " + P[step - 1] + " (but not " + P[step - 1] + " itself)." : "What is left are the " + cnt + " primes up to 100. Every composite number up to 100 has a factor of 7 or less, since 11 × 11 > 100."; return; }
    var c = 0; for (v = 1; v <= 100; v++) { var on = mode === "squares" ? Math.sqrt(v) % 1 === 0 : v % m === 0; if (on) c++; cell(v, on ? C.gold : C.line, on ? C.bg : C.ink2); }
    out.textContent = mode === "squares" ? "The 10 square numbers up to 100: 1, 4, 9 … 100. Each is a number times itself." : c + " multiples of " + m + " up to 100." + (m === 9 ? " The digits of each add to 9 (or 18)." : m === 5 ? " They all end in 0 or 5." : "");
  }
  if (mode === "sieve") { film = k.loop(10, draw, { label: "Steps" }); st.draw = function () { draw(film.t()); }; }
  else { if (mode === "multiples") k.slider("Multiples of", 2, 12, 1, m, function (v) { return v; }, function (v) { m = +v; draw(); }); st.draw = draw; draw(); }
});
