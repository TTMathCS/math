---
title: "Old codes and why they break"
---

# Old codes and why they break

*Number theory · level 8, lesson 1 of 6*

## A question to start

Here is a secret message:

$$\texttt{GAF SXUFS ZFQG GAF EHRGNSFZ GX GAF GFDJ DG GAF KDZF}$$

It was made by a rule that turns each letter into another letter, the same way every time. You are not told the rule.
Can you read it? It looks hopeless: there are hundreds of possible rules of this kind. But notice that the
three-letter word GAF appears four times. In English, which three-letter word is that common? By the end of this
lesson you will crack it with a little clock arithmetic and one good guess.

## The idea

### Letters as numbers mod 26

All the codes in this lesson start the same way: number the letters from 0.

| A | B | C | D | E | F | G | H | I | J | K | L | M |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |

There are 26 letters, so after Z (25) we wrap round to A (0): this is arithmetic mod 26 (level 5). Some words: the
original message is the **plaintext**, the scrambled one the **ciphertext**, the rule is the **cipher**, and the
secret number(s) that pick out one rule are the **key**.

### The Caesar cipher: adding mod 26

The Roman writer Suetonius reports that Julius Caesar wrote private letters with each letter moved three places along
the alphabet: A becomes D, B becomes E, and at the end X, Y, Z wrap round to A, B, C.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 90" role="img" aria-label="The alphabet on top and, below each letter, the letter three places later: A to D, B to E, and so on, with X, Y, Z wrapping round to A, B, C">
  <rect x="4" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="10" y="27" font-size="9" text-anchor="middle" fill="currentColor">A</text>
  <rect x="4" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="10" y="71" font-size="9" text-anchor="middle" fill="currentColor">D</text>
  <line x1="10" y1="33" x2="10" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="16" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="22" y="27" font-size="9" text-anchor="middle" fill="currentColor">B</text>
  <rect x="16" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="22" y="71" font-size="9" text-anchor="middle" fill="currentColor">E</text>
  <line x1="22" y1="33" x2="22" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="28" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="34" y="27" font-size="9" text-anchor="middle" fill="currentColor">C</text>
  <rect x="28" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="34" y="71" font-size="9" text-anchor="middle" fill="currentColor">F</text>
  <line x1="34" y1="33" x2="34" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="40" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="46" y="27" font-size="9" text-anchor="middle" fill="currentColor">D</text>
  <rect x="40" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="46" y="71" font-size="9" text-anchor="middle" fill="currentColor">G</text>
  <line x1="46" y1="33" x2="46" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="52" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="58" y="27" font-size="9" text-anchor="middle" fill="currentColor">E</text>
  <rect x="52" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="58" y="71" font-size="9" text-anchor="middle" fill="currentColor">H</text>
  <line x1="58" y1="33" x2="58" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="64" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="70" y="27" font-size="9" text-anchor="middle" fill="currentColor">F</text>
  <rect x="64" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="70" y="71" font-size="9" text-anchor="middle" fill="currentColor">I</text>
  <line x1="70" y1="33" x2="70" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="76" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="82" y="27" font-size="9" text-anchor="middle" fill="currentColor">G</text>
  <rect x="76" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="82" y="71" font-size="9" text-anchor="middle" fill="currentColor">J</text>
  <line x1="82" y1="33" x2="82" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="88" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="94" y="27" font-size="9" text-anchor="middle" fill="currentColor">H</text>
  <rect x="88" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="94" y="71" font-size="9" text-anchor="middle" fill="currentColor">K</text>
  <line x1="94" y1="33" x2="94" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="100" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="106" y="27" font-size="9" text-anchor="middle" fill="currentColor">I</text>
  <rect x="100" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="106" y="71" font-size="9" text-anchor="middle" fill="currentColor">L</text>
  <line x1="106" y1="33" x2="106" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="112" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="118" y="27" font-size="9" text-anchor="middle" fill="currentColor">J</text>
  <rect x="112" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="118" y="71" font-size="9" text-anchor="middle" fill="currentColor">M</text>
  <line x1="118" y1="33" x2="118" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="124" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="130" y="27" font-size="9" text-anchor="middle" fill="currentColor">K</text>
  <rect x="124" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="130" y="71" font-size="9" text-anchor="middle" fill="currentColor">N</text>
  <line x1="130" y1="33" x2="130" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="136" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="142" y="27" font-size="9" text-anchor="middle" fill="currentColor">L</text>
  <rect x="136" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="142" y="71" font-size="9" text-anchor="middle" fill="currentColor">O</text>
  <line x1="142" y1="33" x2="142" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="148" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="154" y="27" font-size="9" text-anchor="middle" fill="currentColor">M</text>
  <rect x="148" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="154" y="71" font-size="9" text-anchor="middle" fill="currentColor">P</text>
  <line x1="154" y1="33" x2="154" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="160" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="166" y="27" font-size="9" text-anchor="middle" fill="currentColor">N</text>
  <rect x="160" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="166" y="71" font-size="9" text-anchor="middle" fill="currentColor">Q</text>
  <line x1="166" y1="33" x2="166" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="172" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="178" y="27" font-size="9" text-anchor="middle" fill="currentColor">O</text>
  <rect x="172" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="178" y="71" font-size="9" text-anchor="middle" fill="currentColor">R</text>
  <line x1="178" y1="33" x2="178" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="184" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="190" y="27" font-size="9" text-anchor="middle" fill="currentColor">P</text>
  <rect x="184" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="190" y="71" font-size="9" text-anchor="middle" fill="currentColor">S</text>
  <line x1="190" y1="33" x2="190" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="196" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="202" y="27" font-size="9" text-anchor="middle" fill="currentColor">Q</text>
  <rect x="196" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="202" y="71" font-size="9" text-anchor="middle" fill="currentColor">T</text>
  <line x1="202" y1="33" x2="202" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="208" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="214" y="27" font-size="9" text-anchor="middle" fill="currentColor">R</text>
  <rect x="208" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="214" y="71" font-size="9" text-anchor="middle" fill="currentColor">U</text>
  <line x1="214" y1="33" x2="214" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="220" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="226" y="27" font-size="9" text-anchor="middle" fill="currentColor">S</text>
  <rect x="220" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="226" y="71" font-size="9" text-anchor="middle" fill="currentColor">V</text>
  <line x1="226" y1="33" x2="226" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="232" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="238" y="27" font-size="9" text-anchor="middle" fill="currentColor">T</text>
  <rect x="232" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="238" y="71" font-size="9" text-anchor="middle" fill="currentColor">W</text>
  <line x1="238" y1="33" x2="238" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="244" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="250" y="27" font-size="9" text-anchor="middle" fill="currentColor">U</text>
  <rect x="244" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="250" y="71" font-size="9" text-anchor="middle" fill="currentColor">X</text>
  <line x1="250" y1="33" x2="250" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="256" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="262" y="27" font-size="9" text-anchor="middle" fill="currentColor">V</text>
  <rect x="256" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="262" y="71" font-size="9" text-anchor="middle" fill="currentColor">Y</text>
  <line x1="262" y1="33" x2="262" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="268" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="274" y="27" font-size="9" text-anchor="middle" fill="currentColor">W</text>
  <rect x="268" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="274" y="71" font-size="9" text-anchor="middle" fill="currentColor">Z</text>
  <line x1="274" y1="33" x2="274" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="280" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="286" y="27" font-size="9" text-anchor="middle" fill="currentColor">X</text>
  <rect x="280" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="286" y="71" font-size="9" text-anchor="middle" fill="currentColor">A</text>
  <line x1="286" y1="33" x2="286" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="292" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="298" y="27" font-size="9" text-anchor="middle" fill="currentColor">Y</text>
  <rect x="292" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="298" y="71" font-size="9" text-anchor="middle" fill="currentColor">B</text>
  <line x1="298" y1="33" x2="298" y2="57" stroke="currentColor" stroke-width="0.7"/>
  <rect x="304" y="14" width="12" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="0.5"/><text x="310" y="27" font-size="9" text-anchor="middle" fill="currentColor">Z</text>
  <rect x="304" y="58" width="12" height="18" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/><text x="310" y="71" font-size="9" text-anchor="middle" fill="currentColor">C</text>
  <line x1="310" y1="33" x2="310" y2="57" stroke="currentColor" stroke-width="0.7"/>
</svg>
</div>

In numbers, a shift by $k$ is

$$E(x) = x + k \pmod{26}, \qquad D(y) = y - k \pmod{26}.$$

$E$ is the encryption rule and $D$ the decryption rule; subtracting undoes adding. For example, with $k = 3$ the word
MARS is 12, 0, 17, 18, which becomes 15, 3, 20, 21: **PDUV**.

**Why it breaks.** There are only 26 possible keys, and $k = 0$ does nothing, so an enemy can just try all 25 others.
A message as short as one word usually has only one shift that gives English. This is called a **brute-force attack**:
trying every key. A cipher is only as strong as its number of keys is large.

### The affine cipher: multiply, then add

To get more keys, also **multiply**:

$$E(x) = a x + b \pmod{26}.$$

The key is the pair $(a, b)$. But not every $a$ works. Try $a = 2$: then A (0) and N (13) both go to 0, since
$2 \times 13 = 26 \equiv 0$. Two letters land on the same ciphertext letter, and the receiver cannot tell which was
meant. The cipher must be a **shuffle** of the alphabet, and lesson 1 of level 7 showed when multiplying is a shuffle:

> $x \mapsto a x$ is a shuffle of $0, 1, \ldots, 25$ exactly when $\gcd(a, 26) = 1$, that is, when $a$ has an
> inverse mod 26.

So $a$ must be odd and not 13: $a \in \{1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25\}$. That is $\varphi(26) = 12$
choices (level 7, lesson 3). With 26 choices of $b$ there are $12 \times 26 = 312$ keys.

To decrypt, solve $y = ax + b$ for $x$: subtract $b$, then multiply by the inverse $a^{-1}$ of $a$ mod 26:

$$D(y) = a^{-1}(y - b) \pmod{26}.$$

The inverses mod 26 (found with extended Euclid, level 6, or by trying):

| $a$ | 1 | 3 | 5 | 7 | 9 | 11 | 15 | 17 | 19 | 21 | 23 | 25 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $a^{-1}$ | 1 | 9 | 21 | 15 | 3 | 19 | 7 | 23 | 11 | 5 | 17 | 25 |

For example $7 \times 15 = 105 = 4 \times 26 + 1$. Notice the inverses come in pairs (3 and 9, 5 and 21, ...), and
25 is its own inverse because $25 \equiv -1$ and $(-1)^2 = 1$.

312 keys are still easy for a computer, or for a patient person, to try one by one. But there is a much faster attack.

### Frequency analysis

In ordinary English, letters are far from equally common. E is the most common letter (about one letter in eight),
then T, A, O, I, N. Letters like J, Q, X, Z are rare. Every cipher in this lesson sends each plaintext letter to the
**same** ciphertext letter every time, so it only renames the letters: it keeps their counts. The most common
ciphertext letter is very likely E or T.

The method was first described, as far as we know, by the scholar al-Kindi in Baghdad in the 9th century. It breaks
every cipher that swaps letter for letter, even a completely random shuffle with
$26! \approx 4 \times 10^{26}$ keys.

For an affine cipher two good guesses are enough, because the key has two unknowns. Each guess "plaintext letter $x$
became ciphertext letter $y$" gives an equation $ax + b \equiv y \pmod{26}$. Two equations, two unknowns: subtract to
get rid of $b$, then divide (multiply by an inverse) to find $a$. This is the level 6 skill of solving congruences.

### Why "known structure" is the enemy

The lesson of all old codes: if the cipher keeps any pattern of the plaintext (letter counts, repeated words, word
lengths), an attacker can use it. Later ciphers such as the Vigenère cipher (several Caesar shifts in turn) hid letter
counts better, but still broke once people found their patterns. Modern codes are designed so that the ciphertext looks
random, and so that even knowing the method, and many plaintext and ciphertext pairs, does not reveal the key. The
next two lessons show codes built on hard problems about whole numbers instead.

## Worked examples

**1. A Caesar shift.** Decrypt WKLV LV D VHFUHW, which was shifted by 3. Subtract 3 from each letter: W (22) $\to$
19 = T, K (10) $\to$ 7 = H, and so on: **THIS IS A SECRET**.

**2. Encrypting with an affine key.** Encrypt ROVER with $E(x) = 5x + 8$. R = 17: $5 \times 17 + 8 = 93 = 3 \times 26
+ 15$, so P. O = 14: $78 \equiv 0$, so A. V = 21: $113 = 4 \times 26 + 9$, so J. E = 4: $28 \equiv 2$, so C. R again
gives P. The ciphertext is **PAJCP**. Notice R became P both times: that is the weakness.

**3. Decrypting it.** $a = 5$ has inverse 21 ($5 \times 21 = 105 \equiv 1$). So $D(y) = 21(y - 8)$. P = 15:
$21 \times 7 = 147 = 5 \times 26 + 17$, so R. ✓ A = 0: $21 \times (-8) = -168$, and $-168 + 7 \times 26 = 14$, so
O. ✓

**4. Cracking the opening message.** Count the letters of the ciphertext: G and F each appear 9 times, far more than
any other. The four-times word GAF is a strong hint: in English, the commonest three-letter word is THE. So guess
G = T and F = E (and A = H).

As numbers: T (19) became G (6), and E (4) became F (5):

$$19a + b \equiv 6, \qquad 4a + b \equiv 5 \pmod{26}.$$

Subtract: $15a \equiv 1 \pmod{26}$, so $a = 15^{-1} = 7$. Then $b \equiv 5 - 4 \times 7 = -23 \equiv 3$. The key is
$E(x) = 7x + 3$. Check the third guess: H = 7 gives $7 \times 7 + 3 = 52 \equiv 0$ = A. ✓ Decrypt with
$D(y) = 15(y - 3)$: **THE ROVER SENT THE PICTURES TO THE TEAM AT THE BASE**.

**5. A key that fails.** Why is $E(x) = 13x + 1$ a bad cipher? Every even $x$ gives $13x \equiv 0$, and every odd $x$
gives $13x \equiv 13$. So the whole alphabet is sent to only two letters, B and O. Nobody, not even the receiver, can
decrypt it. $\gcd(13, 26) = 13 \ne 1$.

## Try it

1. Encrypt OLYMPUS MONS with a Caesar shift of 3.
2. A Caesar ciphertext reads KHOOR. Find the shift and the plaintext.
3. Which of these are allowed as the multiplier $a$ in an affine cipher mod 26: 4, 9, 13, 17, 24?
4. Find the inverse of 11 mod 26 by extended Euclid, and check it against the table.
5. Encrypt MEET AT THE CRATER with $E(x) = 7x + 3$.
6. An affine cipher sends E to R and T to K. Find the key and the decryption rule.
7. If we used an alphabet of 29 symbols (26 letters, space, full stop and comma), how many affine keys would there be?
   Why is a prime alphabet size neat?

??? note "Answers"
    1. O $\to$ R, L $\to$ O, Y $\to$ B, M $\to$ P, P $\to$ S, U $\to$ X, S $\to$ V; M $\to$ P, O $\to$ R, N $\to$ Q,
       S $\to$ V. **ROBPSXV PRQV**.
    2. A 5-letter word with a double letter in the middle: HELLO fits, since H (7) $\to$ K (10) is a shift of
       **3**, and E $\to$ H, L $\to$ O, O $\to$ R agree. Plaintext **HELLO**.
    3. Allowed: **9, 17** (odd and not 13). 4 and 24 are even; 13 shares the factor 13 with 26.
    4. $26 = 2 \times 11 + 4$, $11 = 2 \times 4 + 3$, $4 = 1 \times 3 + 1$. Backwards: $1 = 4 - 3 = 4 - (11 - 2 \times 4)
       = 3 \times 4 - 11 = 3 \times (26 - 2 \times 11) - 11 = 3 \times 26 - 7 \times 11$. So $11^{-1} \equiv -7 \equiv$
       **19**. Check: $11 \times 19 = 209 = 8 \times 26 + 1$. ✓
    5. M (12) $\to 87 \equiv 9$ = J; E (4) $\to 31 \equiv 5$ = F; T (19) $\to 136 \equiv 6$ = G; A $\to 3$ = D;
       H (7) $\to 52 \equiv 0$ = A; C (2) $\to 17$ = R; R (17) $\to 122 \equiv 18$ = S. **JFFG DG GAF RSDGFS**.
    6. $4a + b \equiv 17$ and $19a + b \equiv 10$. Subtract: $15a \equiv -7 \equiv 19$. Multiply by $15^{-1} = 7$:
       $a \equiv 133 = 5 \times 26 + 3$, so $a = 3$. Then $b \equiv 17 - 12 = 5$. Key $E(x) = 3x + 5$; check
       T: $57 + 5 = 62 \equiv 10$ = K. ✓ Decryption: $3^{-1} = 9$, so $D(y) = 9(y - 5)$.
    7. 29 is prime, so every $a$ from 1 to 28 has an inverse: $28 \times 29 = 812$ keys. With a prime modulus every
       non-zero multiplier works, so there is no list of forbidden values to remember (mod 29 is a field).

## Common mistake

**Using a multiplier that shares a factor with 26.** With $a = 2$, 4, 6, ... or 13, two letters encrypt to the same
letter and the message cannot be decrypted. Always check $\gcd(a, 26) = 1$.

**Undoing $ax + b$ in the wrong order.** Encryption multiplies first, then adds. Decryption must subtract $b$
**first**, then multiply by $a^{-1}$. Writing $a^{-1}y - b$ is wrong.

## Where it leads

- Next: [RSA](02-rsa.md), a code where everyone may know how to lock a message but only one person can unlock it.
- [Level 8 page](index.md) · [Number theory topic page](../index.md) · Inverses and extended Euclid:
  [Level 6](../level-6/index.md) · $\varphi(26) = 12$: [Euler's phi function](../level-7/03-euler-phi.md)
- Counting letters and comparing with expected frequencies is a statistics question: [Statistics](../../statistics/index.md).
- Many more historical ciphers, and how they were broken: [cryptography.akadian.ca](https://cryptography.akadian.ca/).
