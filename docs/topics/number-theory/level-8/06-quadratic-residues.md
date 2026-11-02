---
title: "Quadratic residues"
---

# Quadratic residues

*Number theory · level 8, lesson 6 of 6*

## A question to start

On an ordinary number line, $-1$ has no square root: every square is 0 or positive. On a clock it is different.
Mod 5, $2^2 = 4 \equiv -1$. Mod 13, $5^2 = 25 \equiv -1$. Mod 17, $4^2 = 16 \equiv -1$. But mod 3, 7, 11 or 19, try
every number and none of them squares to $-1$.

What decides it? The primes where $-1$ has a square root are 5, 13, 17, 29, ...; the ones where it does not are 3, 7,
11, 19, ... You met these two lists in level 7: they are the primes of the form $4k + 1$ and $4k + 3$. This lesson
proves why, and with it finishes the proof of Fermat's two-square theorem.

## The idea

### Squares on a clock

Fix an odd prime $p$. A number $a$ that is not a multiple of $p$ is called a **quadratic residue** mod $p$ if it is a
square mod $p$, that is, if $x^2 \equiv a \pmod p$ for some $x$. Otherwise it is a **quadratic non-residue**.
("Quadratic" means "to do with squares"; "residue" is an old word for remainder.)

Square every number mod 11:

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $x^2 \bmod 11$ | 1 | 4 | 9 | 5 | 3 | 3 | 5 | 9 | 4 | 1 |

The squares are 1, 3, 4, 5, 9: **five** residues. The other five, 2, 6, 7, 8, 10, are non-residues. The second half of
the table is the first half backwards.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="A mod 11 clock with the numbers 0 to 10 round a circle. The squares 1, 3, 4, 5, 9 are orange, the non-squares 2, 6, 7, 8, 10 are blue. Green lines join each x to minus x: 1 and 10, 2 and 9, 3 and 8, 4 and 7, 5 and 6">
  <circle cx="160" cy="98" r="70" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="197.8" y1="39.1" x2="122.2" y2="39.1" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="223.7" y1="68.9" x2="96.3" y2="68.9" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="229.3" y1="108.0" x2="90.7" y2="108.0" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="212.9" y1="143.8" x2="107.1" y2="143.8" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="179.7" y1="165.2" x2="140.3" y2="165.2" stroke="#7ccf9a" stroke-width="2"/>
  <circle cx="160.0" cy="28.0" r="12" fill="none" stroke="currentColor"/><text x="160.0" y="32.5" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="197.8" cy="39.1" r="12" fill="#eea66f" stroke="currentColor"/><text x="197.8" y="43.6" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="223.7" cy="68.9" r="12" fill="#9cc9ea" stroke="currentColor"/><text x="223.7" y="73.4" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="229.3" cy="108.0" r="12" fill="#eea66f" stroke="currentColor"/><text x="229.3" y="112.5" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="212.9" cy="143.8" r="12" fill="#eea66f" stroke="currentColor"/><text x="212.9" y="148.3" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="179.7" cy="165.2" r="12" fill="#eea66f" stroke="currentColor"/><text x="179.7" y="169.7" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="140.3" cy="165.2" r="12" fill="#9cc9ea" stroke="currentColor"/><text x="140.3" y="169.7" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="107.1" cy="143.8" r="12" fill="#9cc9ea" stroke="currentColor"/><text x="107.1" y="148.3" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="90.7" cy="108.0" r="12" fill="#9cc9ea" stroke="currentColor"/><text x="90.7" y="112.5" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="96.3" cy="68.9" r="12" fill="#eea66f" stroke="currentColor"/><text x="96.3" y="73.4" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <circle cx="122.2" cy="39.1" r="12" fill="#9cc9ea" stroke="currentColor"/><text x="122.2" y="43.6" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <rect x="8" y="176" width="14" height="14" fill="#eea66f" stroke="currentColor"/><text x="28" y="188" font-size="11" fill="currentColor">square mod 11</text>
  <rect x="118" y="176" width="14" height="14" fill="#9cc9ea" stroke="currentColor"/><text x="138" y="188" font-size="11" fill="currentColor">not a square</text>
  <line x1="218" y1="183" x2="236" y2="183" stroke="#7ccf9a" stroke-width="2"/><text x="240" y="188" font-size="11" fill="currentColor">x and −x</text>
</svg>
</div>

### Exactly half are squares

> For an odd prime $p$, exactly $\dfrac{p-1}{2}$ of the numbers $1, 2, \ldots, p - 1$ are quadratic residues, and
> exactly $\dfrac{p-1}{2}$ are non-residues.

*Why.* The numbers $x$ and $-x$ (that is, $x$ and $p - x$) have the same square, since $(-x)^2 = x^2$. These are the
green pairs on the clock. Can two numbers **not** in the same pair have the same square? If $x^2 \equiv y^2$ then $p$
divides $x^2 - y^2 = (x - y)(x + y)$, so by Euclid's lemma $p$ divides $x - y$ or $x + y$: $y \equiv x$ or
$y \equiv -x$. So the $p - 1$ non-zero numbers fall into $\tfrac{p-1}{2}$ pairs, each pair gives one square, and
different pairs give different squares. There are exactly $\tfrac{p-1}{2}$ squares. ∎ (Note $x \ne -x$, since
$2x \equiv 0$ would need $p$ to divide $x$; that is where "odd" is used.)

The squares of $1, 2, \ldots, \tfrac{p-1}{2}$ give all the residues, each once.

### The Legendre symbol

Adrien-Marie Legendre introduced a short notation:

$$\left(\frac{a}{p}\right) = \begin{cases} \phantom{-}1 & \text{if } a \text{ is a quadratic residue mod } p,\\ -1 & \text{if } a \text{ is a non-residue mod } p,\\ \phantom{-}0 & \text{if } p \text{ divides } a. \end{cases}$$

It is read "$a$ on $p$", and it is **not** a fraction. So $\left(\frac{5}{11}\right) = 1$ and
$\left(\frac{2}{11}\right) = -1$.

### Euler's criterion: a test without searching

To decide whether $a$ is a square mod $p$, you could square everything up to $\tfrac{p-1}{2}$. Euler found a test with
one fast power.

> **Euler's criterion.** For an odd prime $p$ and $a$ not a multiple of $p$,
>
> $$a^{(p-1)/2} \equiv \left(\frac{a}{p}\right) \pmod p.$$
>
> That is, $a^{(p-1)/2}$ is $1$ for a residue and $-1$ for a non-residue.

*Why.* First, $a^{(p-1)/2}$ is always $\pm 1$: its square is $a^{p-1} \equiv 1$ (Fermat), and the only square roots of
1 mod $p$ are $\pm 1$ (shown above with $y = 1$).

If $a$ is a residue, $a \equiv x^2$, then $a^{(p-1)/2} \equiv x^{p-1} \equiv 1$ by Fermat.

For non-residues we need one more fact: **a polynomial of degree $d$ has at most $d$ roots mod a prime** (unless all
its coefficients are multiples of $p$). The reason is the factor theorem from algebra: if $r$ is a root of $f(t)$,
then $f(t) = (t - r)\,g(t)$ with $g$ of degree $d - 1$. At any other root $s$, $(s - r)\,g(s) \equiv 0$, and since
$s - r \not\equiv 0$, Euclid's lemma gives $g(s) \equiv 0$. So the other roots are roots of $g$, which has at most
$d - 1$ by the same argument, and so on down. (Mod a composite number this fails: mod 8, $t^2 - 1$ has four roots
1, 3, 5, 7.)

Now $t^{(p-1)/2} - 1$ has degree $\tfrac{p-1}{2}$, so at most $\tfrac{p-1}{2}$ roots. All $\tfrac{p-1}{2}$ residues
are roots. So there is no room left: a non-residue $a$ is **not** a root, so $a^{(p-1)/2} \not\equiv 1$, which means
$a^{(p-1)/2} \equiv -1$. ∎

Check mod 11, where $\tfrac{p-1}{2} = 5$: $3^5 = 243 = 22 \times 11 + 1 \equiv 1$ (3 is a square) and
$2^5 = 32 = 2 \times 11 + 10 \equiv -1$ (2 is not). ✓

### When is $-1$ a square?

Put $a = -1$ into Euler's criterion: $\left(\frac{-1}{p}\right) \equiv (-1)^{(p-1)/2}$.

- If $p = 4k + 1$, then $\tfrac{p-1}{2} = 2k$ is even, so $(-1)^{2k} = 1$: **$-1$ is a square**.
- If $p = 4k + 3$, then $\tfrac{p-1}{2} = 2k + 1$ is odd, so $(-1)^{2k+1} = -1$: **$-1$ is not a square**.

> $-1$ is a quadratic residue mod an odd prime $p$ exactly when $p \equiv 1 \pmod 4$.

That is the opening puzzle, and it is the fact that level 7, lesson 6 borrowed to prove that every prime $4k + 1$ is
a sum of two squares. With it, Fermat's Christmas theorem is now fully proved.

### Finding the square root of $-1$: Wilson's theorem

Euler's criterion says a square root of $-1$ exists, but does not say what it is. A neat formula does.

> **Wilson's theorem.** For a prime $p$, $(p - 1)! \equiv -1 \pmod p$.

*Why.* Each number from 1 to $p - 1$ has an inverse mod $p$. Only 1 and $p - 1$ are their own inverses (if
$x \cdot x \equiv 1$ then $x \equiv \pm 1$). So the numbers $2, 3, \ldots, p - 2$ split into pairs $\{x, x^{-1}\}$,
each pair multiplying to 1. What is left in $(p-1)!$ is $1 \times (p - 1) \equiv -1$. ∎ (Mod 11:
$2 \cdot 6$, $3 \cdot 4$, $5 \cdot 9$, $7 \cdot 8$ each give 1, leaving $1 \times 10$.)

Now pair $k$ with $p - k \equiv -k$ instead:

$$(p-1)! = \prod_{k=1}^{(p-1)/2} k\,(p - k) \equiv \prod_{k=1}^{(p-1)/2} k\,(-k) = (-1)^{(p-1)/2} \left[\left(\tfrac{p-1}{2}\right)!\right]^2 \pmod p.$$

When $p \equiv 1 \pmod 4$ the sign is $+1$, and Wilson gives $\left[\left(\tfrac{p-1}{2}\right)!\right]^2 \equiv -1$.
So $x = \left(\tfrac{p-1}{2}\right)!$ is a square root of $-1$. For $p = 13$: $6! = 720 = 55 \times 13 + 5$, and
$5^2 = 25 \equiv -1$. ✓

### Quadratic reciprocity: the golden theorem

The deepest fact in this lesson links two different primes.

> **Quadratic reciprocity.** For different odd primes $p$ and $q$:
> if at least one of them is $1 \bmod 4$, then $q$ is a square mod $p$ exactly when $p$ is a square mod $q$; if both
> are $3 \bmod 4$, then exactly one of the two is a square mod the other. In symbols,
>
> $$\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}.$$

It was guessed by Euler and Legendre, and first proved by Gauss in 1796, when he was 18. Gauss called it the
"golden theorem" and went on to find several more proofs. The proof is beyond this lesson, but using it is easy: it
lets you **flip** a hard question ("is 5 a square mod 1013?") into an easy one ("is 1013 a square mod 5?"). A
companion rule, also stated without proof: 2 is a square mod $p$ exactly when $p \equiv 1$ or $7 \pmod 8$.

## Worked examples

**1. The squares mod 13.** Square 1 to 6: $1, 4, 9, 16 \equiv 3, 25 \equiv 12, 36 \equiv 10$. The residues are
$1, 3, 4, 9, 10, 12$: six of them, as $\tfrac{13 - 1}{2} = 6$ promises. Since $12 \equiv -1$ is on the list, $-1$ is a
square mod 13 ($13 = 4 \times 3 + 1$). ✓

**2. Euler's criterion.** Is 7 a square mod 23? Compute $7^{11} \bmod 23$: $7^2 = 49 \equiv 3$, $7^4 \equiv 9$,
$7^8 \equiv 81 \equiv 12$. $11 = 8 + 2 + 1$, so $7^{11} \equiv 12 \times 3 \times 7 = 252 = 10 \times 23 + 22 \equiv
-1$. So 7 is **not** a square mod 23.

**3. Solving a quadratic congruence.** Solve $x^2 \equiv 10 \pmod{13}$. From example 1, $36 \equiv 10$, so $x \equiv
6$, and also $x \equiv -6 \equiv 7$. Exactly two solutions, as the pairing argument says.

**4. Reciprocity in action.** Is 5 a square mod 11? Since $5 \equiv 1 \pmod 4$, reciprocity says it is the same
question as: is 11 a square mod 5? $11 \equiv 1 \pmod 5$, and 1 is a square. So yes. Check: $4^2 = 16 \equiv 5
\pmod{11}$. ✓

**5. Both primes $3 \bmod 4$.** Is 19 a square mod 23? Both are $3 \bmod 4$, so the answers are opposite. Is 23 a
square mod 19? $23 \equiv 4 = 2^2$: yes. So 19 is **not** a square mod 23. (Euler's criterion agrees:
$19^{11} \equiv -1 \pmod{23}$.)

## Try it

1. Find the quadratic residues mod 7 and mod 17. Check the count in each case.
2. Use Euler's criterion to decide whether 2 is a square mod 7 and whether 3 is a square mod 7.
3. Find both solutions of $x^2 \equiv 2 \pmod{17}$.
4. Use Wilson's theorem to find a square root of $-1$ mod 17. Check it.
5. Explain why $x^2 \equiv -1 \pmod{19}$ has no solution, without squaring anything.
6. Show that the product of two non-residues mod $p$ is a residue. (Hint: Euler's criterion.) Check with 2 and 6 mod 11.
7. Use reciprocity to decide whether 13 is a square mod 17, then find a square root.

??? note "Answers"
    1. Mod 7: $1, 4, 9 \equiv 2$, so residues **1, 2, 4** (three, $= \tfrac{7-1}{2}$). Mod 17: squares of 1 to 8 are
       $1, 4, 9, 16, 8, 2, 15, 13$, so residues **1, 2, 4, 8, 9, 13, 15, 16** (eight, $= \tfrac{17-1}{2}$).
    2. $2^3 = 8 \equiv 1 \pmod 7$: 2 **is** a square ($3^2 = 9 \equiv 2$). $3^3 = 27 = 3 \times 7 + 6 \equiv -1$:
       3 is **not** a square.
    3. From the mod-17 list, $6^2 = 36 = 2 \times 17 + 2$. So $x \equiv 6$ or $x \equiv -6 \equiv 11$. Check:
       $11^2 = 121 = 7 \times 17 + 2$. ✓
    4. $\tfrac{17 - 1}{2} = 8$, so take $8! = 40320$. $40320 = 2371 \times 17 + 13$, so $x \equiv 13$. Check:
       $13^2 = 169 = 9 \times 17 + 16 \equiv -1$. ✓ (The other root is $-13 \equiv 4$: $4^2 = 16$. ✓)
    5. $19 = 4 \times 4 + 3$, so $\tfrac{19 - 1}{2} = 9$ is odd and $(-1)^9 = -1$: by Euler's criterion $-1$ is a
       non-residue mod 19.
    6. If $a$ and $b$ are non-residues, $a^{(p-1)/2} \equiv -1$ and $b^{(p-1)/2} \equiv -1$, so
       $(ab)^{(p-1)/2} \equiv (-1)(-1) = 1$, and $ab$ is a residue. Mod 11: $2 \times 6 = 12 \equiv 1 = 1^2$. ✓
    7. $13 \equiv 1 \pmod 4$, so 13 is a square mod 17 exactly when 17 is a square mod 13. $17 \equiv 4 = 2^2$: yes.
       From the list in answer 1, $8^2 = 64 = 3 \times 17 + 13$, so $x \equiv 8$ (or 9).

## Common mistake

**Reading $\left(\frac{a}{p}\right)$ as a fraction.** The Legendre symbol is a label, $1$, $-1$ or $0$, saying whether
$a$ is a square mod $p$. $\left(\frac{4}{7}\right) = 1$, not $0.571\ldots$

**Using these facts mod a composite number.** Mod 8, the number 1 has four square roots (1, 3, 5, 7), and the "exactly
half" count fails. Everything in this lesson needs a **prime** modulus, because every proof used Euclid's lemma.

## Where it leads

- Previous: [Famous open problems](05-open-problems.md) · This is the last lesson of the number theory levels.
- Back to [Sums of two squares](../level-7/06-sums-two-squares.md), whose missing step this lesson supplied.
- [Level 8 page](index.md) · [Number theory topic page](../index.md)
- Polynomials and their roots, the same factor theorem one level up:
  [MAT240 Unit 9 (polynomials, UFD and resultants)](../../../uoft/MAT240H1/unit09.md); the integers mod $p$ as a field:
  [MAT240 Unit 1](../../../uoft/MAT240H1/unit01.md). Quadratic forms, a far-reaching generalisation of $x^2 + y^2$:
  [MAT247 Unit 10](../../../uoft/MAT247H1/unit10.md).
- Square roots mod $p$ are used in real cryptosystems and in elliptic-curve codes:
  [cryptography.akadian.ca](https://cryptography.akadian.ca/).
