---
title: "Every quadratic has roots"
---

# Every quadratic has roots

*Numbers · level 7, lesson 5 of 6*

## A question to start

Draw the graph of $y = x^2 + 2x + 5$. It is a U-shaped parabola whose lowest point is at $(-1, 4)$, so the whole curve
floats above the $x$-axis and never touches it. The equation $x^2 + 2x + 5 = 0$ has **no real solutions**.

Yet with complex numbers it has exactly two:

$$x = -1 + 2i \qquad\text{and}\qquad x = -1 - 2i.$$

Look at the real part, $-1$. That is exactly the $x$-coordinate of the lowest point of the graph. Coincidence? And
why do the two answers come as a mirror pair, $+2i$ and $-2i$? This lesson answers both questions.

## The idea

### Completing the square works in $\mathbb{C}$

Solve $x^2 + 2x + 5 = 0$ by **completing the square**: rewriting the $x^2$ and $x$ terms as a perfect square plus a
constant. Since $(x + 1)^2 = x^2 + 2x + 1$,

$$x^2 + 2x + 5 = (x + 1)^2 + 4.$$

So the equation says $(x + 1)^2 = -4$. In the real numbers we stop here: a square cannot be $-4$. In the complex
numbers, $-4$ has two square roots, $2i$ and $-2i$ (lesson 2). So

$$x + 1 = \pm 2i \qquad\Longrightarrow\qquad x = -1 \pm 2i.$$

Check $x = -1 + 2i$: $x^2 = 1 - 4i + 4i^2 = -3 - 4i$, and $2x = -2 + 4i$. So
$x^2 + 2x + 5 = (-3 - 4i) + (-2 + 4i) + 5 = 0$. ✓

### The quadratic formula, with nothing left out

The same steps on the general equation $ax^2 + bx + c = 0$ (with $a \ne 0$) give the quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

The derivation (divide by $a$, complete the square, take square roots) uses only the rules of arithmetic, which all
still hold in $\mathbb{C}$. The only step that could fail is "take the square root of $b^2 - 4ac$". In $\mathbb{R}$ it
fails when $b^2 - 4ac < 0$. In $\mathbb{C}$ it **never fails**, because every real number, positive or negative, has
square roots there. So:

> **Every quadratic equation with real coefficients has solutions in $\mathbb{C}$.**

(Coefficients are the numbers $a$, $b$, $c$ in front of the powers of $x$.) In fact the same is true for quadratics
whose coefficients are themselves complex; see the last section.

### The discriminant, read again

The number under the root, $D = b^2 - 4ac$, is the **discriminant**: it "discriminates" between the kinds of answer.
For real $a$, $b$, $c$:

| Discriminant | Solutions | Graph of $y = ax^2 + bx + c$ |
| --- | --- | --- |
| $D > 0$ | two different real numbers | crosses the $x$-axis twice |
| $D = 0$ | one real number, repeated: $x = -\dfrac{b}{2a}$ | touches the $x$-axis at its vertex |
| $D < 0$ | two **non-real** complex numbers, $-\dfrac{b}{2a} \pm \dfrac{\sqrt{-D}}{2a}\,i$ | misses the $x$-axis |

In the old real-number view, the bottom row said "no solutions". Now it says "two solutions, both off the real line".
The total is always two, if a repeated solution is counted twice. A quadratic always has two roots; the discriminant
only tells you **where** they are.

### Why the real part is the vertex

When $D < 0$, both roots have real part $-\dfrac{b}{2a}$. That is the $x$-coordinate of the vertex of the parabola,
which sits on its line of symmetry. So the two complex roots sit directly "above and below" the line of symmetry, in
the complex plane.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Left: the parabola y equals x squared plus 2x plus 5 floating above the x-axis with its lowest point at x equals minus 1. Right: the complex plane with the roots minus 1 plus 2i and minus 1 minus 2i, both on the vertical line through minus 1">
  <line x1="20" y1="190" x2="190" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="215" x2="120" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="36.0,46.5 42.0,63.1 48.0,78.0 54.0,91.1 60.0,102.5 66.0,112.1 72.0,120.0 78.0,126.1 84.0,130.5 90.0,133.1 96.0,134.0 102.0,133.1 108.0,130.5 114.0,126.1 120.0,120.0 126.0,112.1 132.0,102.5 138.0,91.1 144.0,78.0 150.0,63.1 156.0,46.5" fill="none" stroke="#eea66f" stroke-width="3"/>
  <line x1="96" y1="20" x2="96" y2="215" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.6"/>
  <circle cx="96" cy="134" r="5" fill="#eea66f"/>
  <line x1="230" y1="120" x2="410" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="330" y1="215" x2="330" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <line x1="300" y1="20" x2="300" y2="215" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.6"/>
  <circle cx="300" cy="60" r="6" fill="#9cc9ea"/>
  <circle cx="300" cy="180" r="6" fill="#9cc9ea"/>
  <g font-size="12" fill="currentColor">
    <text x="40" y="156">(−1, 4)</text>
    <text x="84" y="206">−1</text>
    <text x="24" y="30">y = x² + 2x + 5</text>
    <text x="196" y="194">x</text>
    <text x="236" y="56">−1 + 2i</text>
    <text x="238" y="196">−1 − 2i</text>
    <text x="388" y="136">real</text>
    <text x="336" y="30">imag.</text>
  </g>
</svg>
</div>

### Why non-real roots come in conjugate pairs

The two roots $-1 + 2i$ and $-1 - 2i$ are **conjugates**: reflections of each other in the real axis. This is no
accident, and the reason works for polynomials of **any** degree, not just quadratics.

Let $p(x) = a_n x^n + \cdots + a_1 x + a_0$ be a polynomial whose coefficients $a_0, \ldots, a_n$ are all **real**.
Suppose $p(z) = 0$ for some complex $z$. Take the conjugate of both sides. In lesson 3 we proved that the conjugate of
a sum is the sum of the conjugates and the conjugate of a product is the product of the conjugates, so
$\overline{z^k} = \bar z^{\,k}$; and a real coefficient is its own conjugate. Therefore

$$0 = \bar 0 = \overline{p(z)} = \overline{a_n z^n + \cdots + a_0} = a_n \bar z^{\,n} + \cdots + a_0 = p(\bar z).$$

So $\bar z$ is a root too. ∎

> **If a polynomial has real coefficients, its non-real roots come in conjugate pairs.**

Two consequences:

- If you know one non-real root, you know another one for free.
- A real polynomial of **odd** degree (a cubic, a quintic, ...) always has at least one **real** root. Its roots,
  counted properly, number an odd amount (level 8 shows a degree-$n$ polynomial has $n$ of them), and the non-real
  ones pair off, so at least one is left over and must be its own conjugate, that is, real.

The proof needed the coefficients to be real. With complex coefficients the pairing can fail: $(x - i)(x - 2) = x^2 -
(2 + i)x + 2i$ has roots $i$ and $2$, which are not a conjugate pair.

### Sum and product of the roots

If the roots of $ax^2 + bx + c = 0$ are $r$ and $s$, then $ax^2 + bx + c = a(x - r)(x - s) = a\big(x^2 - (r + s)x +
rs\big)$. Comparing coefficients,

$$r + s = -\frac ba \qquad rs = \frac ca$$

These hold in $\mathbb{C}$ as well. For a conjugate pair $r = p + qi$, $s = p - qi$: the sum is $2p$ and the product
is $p^2 + q^2 = |r|^2$, both real, as they must be. This lets you **build** a quadratic from a root: for the root
$3 - 2i$ (and hence also $3 + 2i$), the sum is 6 and the product is $9 + 4 = 13$, so the equation is
$x^2 - 6x + 13 = 0$.

### The discriminant in the complex world

What if $a$, $b$, $c$ are complex? The quadratic formula still works; the only new task is finding a square root of
a complex number $D$, which you did in lesson 3 by writing $(x + yi)^2 = D$ and comparing parts. So **every**
quadratic, with any complex coefficients, has two roots in $\mathbb{C}$ (counted with repetition). The discriminant
now has only two cases: $D = 0$ (one repeated root) and $D \ne 0$ (two different roots). "Positive" and "negative" no
longer make sense, because complex numbers have no order (lesson 1). Nothing outside $\mathbb{C}$ is ever needed;
level 8 shows this is true for polynomials of every degree.

## Worked examples

**1. Solve $2x^2 - 6x + 5 = 0$.**

1. $a = 2$, $b = -6$, $c = 5$. $D = 36 - 40 = -4$, so the roots are non-real.
2. $\sqrt{-4} = 2i$. So $x = \dfrac{6 \pm 2i}{4} = \dfrac32 \pm \dfrac12 i$.
3. Check with sum and product: sum $= 3 = -\dfrac{-6}{2}$ ✓; product $= \dfrac94 + \dfrac14 = \dfrac{10}{4} = \dfrac52 =
   \dfrac ca$ ✓.

**2. Classify without solving.** What kind of roots do these have?

1. $x^2 - 5x + 3 = 0$: $D = 25 - 12 = 13 > 0$, two different real roots.
2. $4x^2 + 4x + 1 = 0$: $D = 16 - 16 = 0$, one repeated real root, $x = -\tfrac12$.
3. $x^2 + x + 1 = 0$: $D = 1 - 4 = -3 < 0$, two non-real conjugate roots, $-\tfrac12 \pm \tfrac{\sqrt3}{2}i$.

**3. Build an equation.** Find a quadratic with real coefficients that has $2 + 5i$ as a root.

1. The other root must be the conjugate, $2 - 5i$.
2. Sum: $4$. Product: $4 + 25 = 29$.
3. Equation: $x^2 - 4x + 29 = 0$. (Any multiple, such as $3x^2 - 12x + 87 = 0$, also works.)

**4. A cubic with one known root.** Solve $x^3 - 3x^2 + 7x - 5 = 0$, given that $x = 1$ is a root.

1. Since $x = 1$ is a root, $x - 1$ is a factor. Divide: $x^3 - 3x^2 + 7x - 5 = (x - 1)(x^2 - 2x + 5)$. Check by
   expanding: $x^3 - 2x^2 + 5x - x^2 + 2x - 5 = x^3 - 3x^2 + 7x - 5$. ✓
2. Solve $x^2 - 2x + 5 = 0$: $D = 4 - 20 = -16$, so $x = \dfrac{2 \pm 4i}{2} = 1 \pm 2i$.
3. The roots are $1$, $1 + 2i$, $1 - 2i$: one real root and a conjugate pair, as the odd-degree argument promised.

**5. Complex coefficients.** Solve $z^2 - 3z + (3 - i) = 0$.

1. $D = 9 - 4(3 - i) = 9 - 12 + 4i = -3 + 4i$.
2. A square root of $-3 + 4i$: from lesson 3 (Try it question 7), $(1 + 2i)^2 = -3 + 4i$.
3. $z = \dfrac{3 \pm (1 + 2i)}{2}$, so $z = 2 + i$ or $z = 1 - i$.
4. Check with sum and product: $(2 + i) + (1 - i) = 3$ ✓ and $(2 + i)(1 - i) = 2 - 2i + i - i^2 = 3 - i$ ✓. The roots
   are not conjugates, which is fine: the coefficients are not real.

## Try it

1. Solve $x^2 - 6x + 13 = 0$.
2. Solve $x^2 - 4x + 8 = 0$ by completing the square.
3. Solve $3x^2 + x + 2 = 0$.
4. Without solving, describe the roots of $9x^2 - 12x + 4 = 0$, $x^2 + x - 1 = 0$ and $5x^2 + 2x + 1 = 0$.
5. Find a quadratic with real coefficients and a root $-3 + i$.
6. Solve $x^3 + 8 = 0$ completely. (Hint: $x = -2$ is a root.)
7. For which real numbers $k$ does $x^2 + kx + 9 = 0$ have non-real roots?
8. A cubic with real coefficients has roots $2$ and $1 - i$. What is its third root? Write the cubic with leading
   coefficient 1.

??? note "Answers"
    1. $D = 36 - 52 = -16$, $x = \dfrac{6 \pm 4i}{2} = 3 \pm 2i$.
    2. $x^2 - 4x + 8 = (x - 2)^2 + 4$, so $(x - 2)^2 = -4$, $x - 2 = \pm 2i$, $x = 2 \pm 2i$.
    3. $D = 1 - 24 = -23$, $x = \dfrac{-1 \pm i\sqrt{23}}{6}$.
    4. $D = 144 - 144 = 0$: one repeated real root, $x = \tfrac{12}{18} = \tfrac23$. $D = 1 + 4 = 5$: two different
       real roots. $D = 4 - 20 = -16$: two non-real conjugate roots ($-\tfrac15 \pm \tfrac25 i$).
    5. The other root is $-3 - i$. Sum $-6$, product $9 + 1 = 10$: $x^2 + 6x + 10 = 0$.
    6. $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$ (check: $x^3 - 2x^2 + 4x + 2x^2 - 4x + 8$ ✓). The quadratic has $D = 4 - 16 =
       -12$, so $x = \dfrac{2 \pm 2i\sqrt3}{2} = 1 \pm i\sqrt3$. Roots: $-2$, $1 + i\sqrt3$, $1 - i\sqrt3$.
    7. Non-real roots need $D = k^2 - 36 < 0$, that is $k^2 < 36$: $-6 < k < 6$.
    8. Real coefficients, so $1 + i$ is also a root. The cubic is $(x - 2)(x - (1 - i))(x - (1 + i))$. The last two
       multiply to $x^2 - 2x + 2$ (sum 2, product $1 + 1 = 2$). Then $(x - 2)(x^2 - 2x + 2) = x^3 - 4x^2 + 6x - 4$.

## Common mistake

**Writing the roots with the wrong denominator.** In $x = \dfrac{-b \pm \sqrt D}{2a}$ the $2a$ divides **both**
parts. For $2x^2 - 6x + 5 = 0$ the roots are $\dfrac{6 \pm 2i}{4} = \dfrac32 \pm \dfrac12 i$, not $6 \pm \dfrac{2i}{4}$
and not $\dfrac64 \pm 2i$.

**Using the conjugate pair rule when the coefficients are not real.** The pairing came from taking conjugates of real
coefficients. For an equation like $z^2 - 3z + (3 - i) = 0$ the roots ($2 + i$ and $1 - i$) are not conjugates, and
assuming they are gives wrong answers.

## Where it leads

- Back: [The complex plane](04-complex-plane.md) · Next: [Intervals and absolute value](06-intervals-absolute-value.md).
- [Level 7 page](index.md) · [Numbers topic page](../index.md)
- Quadratics, completing the square and the factor theorem: [Algebra](../../algebra/index.md).
- That **every** polynomial, of any degree, has all its roots in $\mathbb{C}$ is the fundamental theorem of algebra,
  in [level 8](../level-8/index.md).
- On the U of T shelf, polynomials and their roots over a field:
  [MAT240 Unit 9 (polynomials)](../../../uoft/MAT240H1/unit09.md).
