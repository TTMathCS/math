/* The five Platonic solids, turning. Count corners V, edges E and faces F: for every one, V − E + F = 2 (Euler's
   formula). Drag the slider or press Play to turn them. */
PLAY("platonic", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 300, st = k.stage(W, H), g = st.g, out = k.out(), pick = 0;
  var p = (1 + Math.sqrt(5)) / 2, q = 1 / p;
  var S = [["Tetrahedron", [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]], 4],
    ["Cube", [[-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1], [1, -1, -1], [1, -1, 1], [1, 1, -1], [1, 1, 1]], 6],
    ["Octahedron", [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], 8],
    ["Dodecahedron", [], 12], ["Icosahedron", [], 20]];
  [-1, 1].forEach(function (a) { [-1, 1].forEach(function (b) { [-1, 1].forEach(function (c) { S[3][1].push([a, b, c]); }); }); });
  [-1, 1].forEach(function (a) { [-1, 1].forEach(function (b) { S[3][1].push([0, a * q, b * p], [a * q, b * p, 0], [a * p, 0, b * q]); S[4][1].push([0, a, b * p], [a, b * p, 0], [a * p, 0, b]); }); });
  function edges(V) { var d = 1e9, E = []; V.forEach(function (u, i) { V.forEach(function (v, j) { if (j > i) d = Math.min(d, Math.hypot(u[0] - v[0], u[1] - v[1], u[2] - v[2])); }); });
    V.forEach(function (u, i) { V.forEach(function (v, j) { if (j > i && Math.hypot(u[0] - v[0], u[1] - v[1], u[2] - v[2]) < d * 1.01) E.push([i, j]); }); }); return E; }
  S.forEach(function (s) { s.push(edges(s[1])); });
  function draw(t) {
    var s = S[pick], a = t * 2 * Math.PI, b = 0.5, R = 0; s[1].forEach(function (v) { R = Math.max(R, Math.hypot(v[0], v[1], v[2])); });
    var P = s[1].map(function (v) { var x = v[0] * Math.cos(a) + v[2] * Math.sin(a), z = -v[0] * Math.sin(a) + v[2] * Math.cos(a), y = v[1] * Math.cos(b) - z * Math.sin(b), z2 = v[1] * Math.sin(b) + z * Math.cos(b); return [150 + x / R * 110, 150 - y / R * 110, z2]; });
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    s[3].forEach(function (e) { var u = P[e[0]], v = P[e[1]], back = u[2] + v[2] < 0; g.strokeStyle = back ? "rgba(156,201,234,0.3)" : C.ice; g.lineWidth = back ? 1 : 2.5; g.beginPath(); g.moveTo(u[0], u[1]); g.lineTo(v[0], v[1]); g.stroke(); });
    g.lineWidth = 1; P.forEach(function (u) { g.fillStyle = C.gold; g.beginPath(); g.arc(u[0], u[1], 4, 0, 7); g.fill(); });
    var V = s[1].length, E = s[3].length, Fc = s[2];
    g.textAlign = "left"; g.font = F(22, 700); g.fillStyle = C.ink; g.fillText(s[0], 320, 60);
    g.font = F(19, 500); g.fillStyle = C.ink2; g.fillText("corners V = " + V, 320, 100); g.fillText("edges E = " + E, 320, 128); g.fillText("faces F = " + Fc, 320, 156);
    g.fillStyle = C.gold; g.font = F(20, 700); g.fillText(V + " − " + E + " + " + Fc + " = " + (V - E + Fc), 320, 200);
    out.textContent = "The " + s[0].toLowerCase() + ": " + V + " corners, " + E + " edges, " + Fc + " faces, and V − E + F = 2.";
  }
  var film = k.loop(12, draw, { label: "Turn", start0: true, repeat: true });
  k.buttons(S.map(function (s, i) { return [s[0].slice(0, 5) === "Dodec" ? "Dodeca" : s[0].slice(0, 5) === "Icosa" ? "Icosa" : s[0].slice(0, 5) === "Tetra" ? "Tetra" : s[0].slice(0, 5) === "Octah" ? "Octa" : "Cube", function () { pick = i; draw(film.t()); }]; }), true);
  st.draw = function () { draw(film.t()); };
});
