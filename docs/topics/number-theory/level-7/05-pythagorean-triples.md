---
title: "Pythagorean triples"
---

# Pythagorean triples

*Number theory · level 7, lesson 5 of 6*

## A question to start

The right triangle with sides 3, 4 and 5 is famous because all three sides are whole numbers: $3^2 + 4^2 = 9 + 16 =
25 = 5^2$. So is 5, 12, 13: $25 + 144 = 169$. And 8, 15, 17. And 20, 21, 29.

Look at these and see what you notice. In each one, a leg is even. A leg is a multiple of 3. And something is a
multiple of 5: the 5 in 3, 4, 5; the 5 in 5, 12, 13; the 15 in 8, 15, 17; the 20 in 20, 21, 29. Is that luck, or
must it always happen? And is there a recipe that makes **every** such triangle? Both answers are known, and this
lesson proves them.

## The idea

### Triples and primitive triples

A **Pythagorean triple** is three whole numbers $a, b, c$ (all at least 1) with

$$a^2 + b^2 = c^2.$$

By Pythagoras' theorem (see [Geometry level 6](../../geometry/level-6/01-pythagorean-proofs.md)) these are exactly the
right triangles with whole-number sides; $c$ is the **hypotenuse**, the longest side.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 170" role="img" aria-label="A right triangle with legs 3 and 4 and hypotenuse 5, drawn to scale">
  <polygon points="40,140 160,140 160,50" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <polyline points="148,140 148,128 160,128" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="100" y="160" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="174" y="100" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="88" y="86" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <text x="215" y="80" font-size="12" text-anchor="middle" fill="currentColor">9 + 16 = 25</text>
</svg>
</div>

Doubling every side of a triple gives another: 6, 8, 10. So does tripling: 9, 12, 15. These are the same triangle,
only bigger. A triple whose three numbers have no common factor (other than 1) is called **primitive**. Every triple
is a whole-number multiple of a primitive one: divide all three by their greatest common divisor $g$ (the equation
still holds, since $a^2 + b^2 = c^2$ divided by $g^2$ is $(a/g)^2 + (b/g)^2 = (c/g)^2$). So the real question is:
find all **primitive** triples.

In a primitive triple, any two of the numbers are already coprime. If a prime $p$ divided $a$ and $b$, it would divide
$a^2 + b^2 = c^2$, so (Euclid's lemma) it would divide $c$, and the triple would not be primitive. The same works for
any other pair.

### One leg is always even

Squares mod 4 can only be 0 or 1: an even number $2k$ has square $4k^2 \equiv 0$, and an odd number $2k + 1$ has
square $4k^2 + 4k + 1 \equiv 1 \pmod 4$.

- **Both legs even?** Then 2 divides $a$ and $b$, so the triple is not primitive.
- **Both legs odd?** Then $a^2 + b^2 \equiv 1 + 1 = 2 \pmod 4$. But $c^2$ is 0 or 1 mod 4, never 2. Impossible.

So in a primitive triple exactly one leg is even and the other is odd, and then $c^2 \equiv 0 + 1 = 1$, so $c$ is
odd. From now on we call the odd leg $a$ and the even leg $b$.

### The recipe

> **All primitive triples.** Choose whole numbers $m > n \ge 1$ that are coprime and not both odd. Then
>
> $$a = m^2 - n^2, \qquad b = 2mn, \qquad c = m^2 + n^2$$
>
> is a primitive triple. Every primitive triple arises this way, exactly once.

First, the formula always gives a triple. Expand:

$$(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = m^4 + 2m^2n^2 + n^4 = (m^2 + n^2)^2.$$

Here are the first few:

| $m$ | $n$ | $a = m^2 - n^2$ | $b = 2mn$ | $c = m^2 + n^2$ |
| --- | --- | --- | --- | --- |
| 2 | 1 | 3 | 4 | 5 |
| 3 | 2 | 5 | 12 | 13 |
| 4 | 1 | 15 | 8 | 17 |
| 4 | 3 | 7 | 24 | 25 |
| 5 | 2 | 21 | 20 | 29 |
| 5 | 4 | 9 | 40 | 41 |
| 6 | 1 | 35 | 12 | 37 |
| 6 | 5 | 11 | 60 | 61 |

The conditions on $m$ and $n$ matter. With $m = 3$, $n = 1$ (both odd) you get 8, 6, 10: a triple, but not primitive.
With $m = 4$, $n = 2$ (not coprime) you get 12, 16, 20, also not primitive.

### Why every primitive triple comes from the recipe

Start with a primitive triple, $a$ odd, $b$ even, $c$ odd. Move $a^2$ across and factor a difference of squares:

$$b^2 = c^2 - a^2 = (c - a)(c + a).$$

Both $c - a$ and $c + a$ are even (odd minus odd, odd plus odd). So set

$$u = \frac{c + a}{2}, \qquad v = \frac{c - a}{2}, \qquad \text{so} \qquad \left(\frac b2\right)^2 = u v.$$

**$u$ and $v$ are coprime.** A common factor of $u$ and $v$ divides $u + v = c$ and $u - v = a$, and $a$ and $c$ are
coprime. So the only common factor is 1.

**Two coprime numbers whose product is a square are each squares.** Look at the prime factorisation (level 6: it is
unique). In a square, every prime appears an even number of times. Since $u$ and $v$ share no prime, each prime of
$uv$ comes wholly from $u$ or wholly from $v$, so each prime appears an even number of times in $u$, or in $v$. So
$u = m^2$ and $v = n^2$ for some whole numbers $m > n \ge 1$.

Now undo: $c = u + v = m^2 + n^2$, $a = u - v = m^2 - n^2$, and $(b/2)^2 = m^2 n^2$, so $b = 2mn$. Since $u = m^2$ and
$v = n^2$ are coprime, so are $m$ and $n$; and if both were odd, $c = m^2 + n^2$ would be even. ∎

### A picture: points on a circle

Divide $a^2 + b^2 = c^2$ by $c^2$: $\left(\tfrac ac\right)^2 + \left(\tfrac bc\right)^2 = 1$. So each triple gives a
point $(x, y)$ with **fraction** coordinates on the circle of radius 1. Here is a geometric way to find all of them.
Draw a line through the point $(-1, 0)$ with a fraction slope $t$. It meets the circle at one more point:

$$x = \frac{1 - t^2}{1 + t^2}, \qquad y = \frac{2t}{1 + t^2}.$$

With $t = \tfrac nm$ this is $x = \dfrac{m^2 - n^2}{m^2 + n^2}$, $y = \dfrac{2mn}{m^2 + n^2}$: the recipe again.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="A circle of radius 1. A line with slope one half through the point minus 1, 0 meets the circle again at the point three fifths, four fifths">
  <line x1="60" y1="100" x2="270" y2="100" stroke="currentColor" stroke-width="1"/>
  <line x1="160" y1="185" x2="160" y2="12" stroke="currentColor" stroke-width="1"/>
  <circle cx="160" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="100" x2="250" y2="15" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="208" y1="36" x2="208" y2="100" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="80" cy="100" r="4" fill="currentColor"/>
  <circle cx="208" cy="36" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="62" y="118" font-size="12" text-anchor="middle" fill="currentColor">(−1, 0)</text>
  <text x="250" y="48" font-size="12" text-anchor="middle" fill="currentColor">(3/5, 4/5)</text>
  <text x="125" y="70" font-size="12" text-anchor="middle" fill="currentColor">slope 1/2</text>
</svg>
</div>

With slope $\tfrac12$ the line hits $\left(\tfrac35, \tfrac45\right)$: the 3, 4, 5 triangle. Every fraction slope
between 0 and 1 gives a point, and every point with fraction coordinates in that quarter comes from some slope (the
slope of the line from $(-1, 0)$ to a point with fraction coordinates is a fraction). This is the same answer, found by
geometry instead of factoring.

### Hidden factors 3, 4 and 5

The recipe explains the patterns in the opening question. In every primitive triple:

- **A leg is a multiple of 4.** $b = 2mn$, and one of $m$, $n$ is even, so $b$ is a multiple of 4.
- **A leg is a multiple of 3.** Squares mod 3 are 0 or 1. If neither $m$ nor $n$ is a multiple of 3, then
  $m^2 \equiv n^2 \equiv 1$, so $a = m^2 - n^2 \equiv 0 \pmod 3$. Otherwise $b = 2mn$ is a multiple of 3.
- **Some side is a multiple of 5.** Squares mod 5 are 0, 1 or 4. If 5 divides $m$ or $n$, it divides $b$. If not,
  $m^2$ and $n^2$ are each 1 or 4 mod 5. If they are equal, $a = m^2 - n^2 \equiv 0$; if one is 1 and the other 4,
  $c = m^2 + n^2 \equiv 5 \equiv 0$.

So $abc$ is always a multiple of $3 \times 4 \times 5 = 60$, and the product of the two legs (twice the area) is
always a multiple of 12. These facts carry over to every triple, primitive or not, since multiplying all sides by a
whole number keeps divisibility.

A clay tablet from ancient Babylon, now called Plimpton 322 (from about 1800 BCE), lists numbers closely tied to
Pythagorean triples, including large ones. The recipe itself appears in Euclid's *Elements*, Book X.

<figure class="play" data-play="pythag"><span class="ai-tag">AI-created</span><figcaption><b>a² + b² = c².</b> The rearrangement proof behind every Pythagorean triple.</figcaption></figure>

## Worked examples

**1. From $m$ and $n$.** $m = 7$, $n = 4$ (coprime, not both odd): $a = 49 - 16 = 33$, $b = 56$, $c = 49 + 16 = 65$.
Check: $33^2 + 56^2 = 1089 + 3136 = 4225 = 65^2$. ✓

**2. Back to $m$ and $n$.** Which $m$, $n$ give 20, 21, 29? The odd leg is 21 and the hypotenuse 29, so
$u = (29 + 21)/2 = 25 = 5^2$ and $v = (29 - 21)/2 = 4 = 2^2$. So $m = 5$, $n = 2$, and $b = 2 \times 5 \times 2 = 20$. ✓

**3. All triples with a leg of 12.** Primitive ones need 12 as the even leg $2mn$, so $mn = 6$: $(m, n) = (6, 1)$ gives
35, 12, 37; $(3, 2)$ gives 5, 12, 13. Non-primitive ones are multiples of smaller primitive triples with a leg
dividing 12: from 3, 4, 5 we get $\times 3$: 9, 12, 15 and $\times 4$: 12, 16, 20. All together:
**(5, 12, 13), (9, 12, 15), (12, 16, 20), (12, 35, 37)**.

**4. A hypotenuse of 25.** Primitive: $m^2 + n^2 = 25$ with $m > n$, so $(m, n) = (4, 3)$: 7, 24, 25. Non-primitive:
$5 \times (3, 4, 5) = 15, 20, 25$. These are the only two.

**5. No triple has both legs odd: a numerical check.** $3^2 + 5^2 = 34$, $5^2 + 7^2 = 74$, $7^2 + 9^2 = 130$: each is
2 more than a multiple of 4, so none is a square. Squares are never 2 mod 4.

## Try it

1. Use the recipe with $(m, n) = (7, 2)$ and $(8, 3)$. Check each triple.
2. Is 9, 40, 41 primitive? Find its $m$ and $n$.
3. Find all Pythagorean triples with a leg of 15.
4. Why does $(m, n) = (5, 3)$ not give a primitive triple? What does it give?
5. Look at 3, 4, 5 and 5, 12, 13 and 8, 15, 17. In a primitive triple with even leg $b$, is $c - b$ always a perfect
   square? Prove your answer.
6. Find a primitive triple whose hypotenuse is 65 in two different ways. (Hint: $65 = 8^2 + 1^2 = 7^2 + 4^2$.)
7. Prove that the hypotenuse of a primitive triple is never a multiple of 3.

??? note "Answers"
    1. $(7, 2)$: $45, 28, 53$; check $2025 + 784 = 2809 = 53^2$. ✓ $(8, 3)$: $55, 48, 73$; check
       $3025 + 2304 = 5329 = 73^2$. ✓
    2. Yes: 9 and 40 share no factor. $u = (41 + 9)/2 = 25$, $v = (41 - 9)/2 = 16$, so $m = 5$, $n = 4$.
    3. 15 is odd, so in a primitive triple it would be $m^2 - n^2 = (m - n)(m + n)$: $(m - n, m + n) = (1, 15)$ gives
       $m = 8$, $n = 7$: 15, 112, 113; and $(3, 5)$ gives $m = 4$, $n = 1$: 15, 8, 17. Non-primitive: $3 \times$
       (5, 12, 13) = 15, 36, 39 and $5 \times$ (3, 4, 5) = 15, 20, 25. So **(8, 15, 17), (15, 20, 25), (15, 36, 39),
       (15, 112, 113)**.
    4. Both are odd. It gives $25 - 9 = 16$, $30$, $34$: the triple 16, 30, 34, which is $2 \times$ (8, 15, 17).
    5. Yes. $c - b = m^2 + n^2 - 2mn = (m - n)^2$, a perfect square. Examples: $5 - 4 = 1$, $13 - 12 = 1$,
       $17 - 8 = 9$, $29 - 20 = 9$. (Also $c - a = 2n^2$, twice a square.)
    6. $(m, n) = (8, 1)$: 63, 16, 65. $(7, 4)$: 33, 56, 65. Both primitive. (The non-primitive ones with
       hypotenuse 65 are 25, 60, 65 and 39, 52, 65.)
    7. $c = m^2 + n^2$. $m$ and $n$ are coprime, so not both multiples of 3. Squares mod 3 are 0 or 1, so
       $m^2 + n^2 \equiv 0 + 1$, $1 + 0$ or $1 + 1$: that is 1, 1 or 2, never 0. So 3 never divides $c$.

## Common mistake

**Forgetting the conditions on $m$ and $n$.** The recipe with any $m > n$ gives a triple, but only coprime $m$, $n$ of
opposite parity give a **primitive** one, and only then is each primitive triple made once. With $(3, 1)$ you get
$(8, 6, 10)$, a doubled 3, 4, 5.

**Thinking the recipe gives every triple.** It gives every **primitive** triple. 9, 12, 15 is not of the form
$m^2 - n^2, 2mn, m^2 + n^2$ for any whole $m$, $n$; it is 3 times a recipe triple.

## Where it leads

- Previous: [Primality tests](04-primality-tests.md) · Next: [Sums of two squares](06-sums-two-squares.md), which
  asks which numbers can be a hypotenuse.
- [Level 7 page](index.md) · [Number theory topic page](../index.md)
- Pythagoras' theorem and its proofs: [Geometry level 6](../../geometry/level-6/01-pythagorean-proofs.md) and
  [using Pythagoras](../../geometry/level-6/02-using-pythagoras.md). The circle picture: the unit circle in
  [Geometry level 8](../../geometry/level-8/02-radians-unit-circle.md).
- What happens with cubes instead of squares ($a^3 + b^3 = c^3$ has no solutions): Fermat's last theorem, in
  [level 8](../level-8/index.md).
- Factoring $x^2 - y^2 = (x - y)(x + y)$: [Algebra](../../algebra/index.md).
