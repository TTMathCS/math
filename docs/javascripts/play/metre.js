/* Hear the beat of a line of verse. Each syllable plays a short tone: a stressed one louder and higher, an unstressed
   one soft. Iambs go da-DUM (Shakespeare, Sonnet 18), trochees DUM-da (Blake, "The Tyger"), dactyls DUM-da-da
   (Longfellow, "Evangeline"). All three poems are long out of copyright. Press Play. */
PLAY("metre", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 220, st = k.stage(W, H), g = st.g, out = k.out(), lines = {
    iamb: ["Iambic pentameter", "Shall|I|com|pare|thee|to|a|sum|mer's|day?", "0101010101", "da-DUM × 5"],
    trochee: ["Trochaic tetrameter", "Ty|ger|Ty|ger,|burn|ing|bright", "1010101", "DUM-da × 4 (the last foot cut short)"],
    dactyl: ["Dactylic hexameter", "This|is the|for|est pri|me|val. The|mur|mur ing|pines|and the|hem|locks", "10010010010010010", "DUM-da-da × 5, then DUM-da"]
  }, cur = "iamb", last = -1;
  function syl() {   // split "is the" into two syllables that share one slot
    var L = lines[cur], parts = [], ss = L[1].split("|");
    ss.forEach(function (w) { w.split(" ").forEach(function (p) { parts.push(p); }); });
    return { parts: parts, st: L[2] };
  }
  function draw(t, live) {
    var s = syl(), n = s.parts.length, on = Math.min(n - 1, Math.floor(t * n)), w = 560 / n;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H); g.textAlign = "left"; g.font = F(19, 600); g.fillStyle = C.gold; g.fillText(lines[cur][0] + ": " + lines[cur][3], 20, 30);
    g.textAlign = "center";
    s.parts.forEach(function (p, i) {
      var x = 20 + i * w + w / 2, big = s.st[i] === "1", lit = t > 0 && i <= on;
      g.font = F(big ? 21 : 18, big ? 700 : 400); g.fillStyle = lit && i === on ? C.gold : big ? C.ink : C.ink3; g.fillText(p, x, 100);
      g.fillStyle = big ? C.rust : C.ink3; g.font = F(24, 700); g.fillText(big ? "/" : "˘", x, 150);
    });
    if (live && on !== last) { last = on; beep(s.st[on] === "1"); }
    if (!live) last = -1;
    out.textContent = s.parts.join(" ") + ". The marks under the words: / stressed, ˘ unstressed.";
  }
  function beep(big) {
    var ac = k.audio(); if (!ac) return;
    var o = ac.createOscillator(), gn = ac.createGain(), t0 = ac.currentTime;
    o.frequency.value = big ? 330 : 220; gn.gain.setValueAtTime(0.0001, t0); gn.gain.exponentialRampToValueAtTime(big ? 0.25 : 0.07, t0 + 0.02);
    gn.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.25); o.connect(gn); gn.connect(ac.destination); o.start(t0); o.stop(t0 + 0.3);
  }
  var film = k.loop(4, draw, { label: "Time", start0: true, onPlay: function () { k.audio(); last = -1; } });
  k.buttons([["Iambs", function () { cur = "iamb"; film.set(0); }], ["Trochees", function () { cur = "trochee"; film.set(0); }], ["Dactyls", function () { cur = "dactyl"; film.set(0); }]], true);
  st.draw = function () { draw(film.t(), false); };
});
