/* A small data set you can change. Tap the line to add a value, tap a dot to remove it. data-show picks what is marked:
   centre (mean, median, mode), spread (range, quartiles, box plot) or sd (mean and standard deviation). Values made up. */
PLAY("stats", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, show = fig.getAttribute("data-show") || "centre", D = [3, 5, 5, 6, 8, 9, 14], out;
  function X(v) { return 40 + v * 26; }
  var st = k.stage(W, H, function (x, y) { var v = Math.round((x - 40) / 26); if (v < 0 || v > 20) return; var cnt = D.filter(function (d) { return d === v; }).length, top = 150 - (cnt - 1) * 22;
      if (cnt && Math.abs(y - top) < 14) D.splice(D.indexOf(v), 1); else if (D.length < 30) D.push(v); D.sort(function (a, b) { return a - b; }); draw(); }), g = st.g; out = k.out();
  function q(p) { var s = D, i = (s.length - 1) * p, lo = Math.floor(i); return s[lo] + (s[Math.ceil(i)] - s[lo]) * (i - lo); }
  function med(arr) { var n = arr.length; return n % 2 ? arr[(n - 1) / 2] : (arr[n / 2 - 1] + arr[n / 2]) / 2; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.strokeStyle = C.ink3; g.lineWidth = 2; g.beginPath(); g.moveTo(30, 166); g.lineTo(570, 166); g.stroke();
    g.textAlign = "center"; for (var v = 0; v <= 20; v++) { g.fillStyle = C.ink3; g.font = F(13, 600); if (v % 2 === 0) g.fillText(v, X(v), 186); }
    var seen = {}; D.forEach(function (d) { seen[d] = (seen[d] || 0) + 1; g.fillStyle = C.ice; g.beginPath(); g.arc(X(d), 150 - (seen[d] - 1) * 22, 9, 0, 7); g.fill(); });
    if (!D.length) { out.textContent = "Tap the line to add values."; return; }
    var n = D.length, mean = D.reduce(function (s, x) { return s + x; }, 0) / n, m = med(D), mo = Object.keys(seen).filter(function (x) { return seen[x] === Math.max.apply(0, Object.values(seen)); });
    function mark(v, col, lab, y) { g.strokeStyle = col; g.lineWidth = 3; g.beginPath(); g.moveTo(X(v), 30); g.lineTo(X(v), 166); g.stroke(); g.fillStyle = col; g.font = F(15, 800); g.fillText(lab, X(v), y); }
    var sd = Math.sqrt(D.reduce(function (s, x) { return s + (x - mean) * (x - mean); }, 0) / n);
    if (show === "centre") { mark(mean, C.gold, "mean " + +mean.toFixed(2), 24); mark(m, C.green, "median " + m, 44);
      out.textContent = n + " values. Mean " + +mean.toFixed(2) + ", median " + m + ", mode " + (mo.length === Object.keys(seen).length ? "none (all tie)" : mo.join(" and ")) + ". Add a big value and watch the mean move more than the median."; }
    else if (show === "spread") { var q1 = q(0.25), q3 = q(0.75); g.strokeStyle = C.gold; g.lineWidth = 3; g.strokeRect(X(q1), 206, X(q3) - X(q1), 30); g.beginPath(); g.moveTo(X(m), 206); g.lineTo(X(m), 236); g.moveTo(X(D[0]), 221); g.lineTo(X(q1), 221); g.moveTo(X(q3), 221); g.lineTo(X(D[n - 1]), 221); g.stroke();
      out.textContent = "Range " + (D[n - 1] - D[0]) + ". Quartiles " + +q1.toFixed(2) + ", " + m + ", " + +q3.toFixed(2) + "; IQR " + +(q3 - q1).toFixed(2) + ". (Quartiles here: the halfway-between rule; books differ slightly.)"; }
    else { g.fillStyle = C.gold; g.globalAlpha = 0.2; g.fillRect(X(mean - sd), 30, X(mean + sd) - X(mean - sd), 136); g.globalAlpha = 1; mark(mean, C.gold, "mean " + +mean.toFixed(2), 24);
      out.textContent = "Mean " + +mean.toFixed(2) + ", standard deviation " + sd.toFixed(2) + " (dividing by n = " + n + "). The band is one standard deviation each side."; }
  }
  st.draw = draw; draw();
});
