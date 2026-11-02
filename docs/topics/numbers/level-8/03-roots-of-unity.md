---
title: "Roots of unity"
---

# Roots of unity

*Numbers · level 8, lesson 3 of 6*

## A question to start

Which numbers, cubed, give 1?

Among the real numbers there is only one: $1$ itself. ($2^3 = 8$ is too big, $0.5^3$ too small, and any negative
number cubed is negative.) But try this complex number:

$$\omega = -\frac12 + \frac{\sqrt3}{2}i.$$

Square it: $\omega^2 = \tfrac14 - \tfrac{\sqrt3}{2}i + \tfrac34 i^2 = -\tfrac12 - \tfrac{\sqrt3}{2}i$. Multiply by
$\omega$ once more: $\omega^3 = \left(-\tfrac12 - \tfrac{\sqrt3}{2}i\right)\left(-\tfrac12 + \tfrac{\sqrt3}{2}i\right) =
\tfrac14 + \tfrac34 = 1$. So 1 has at least three cube roots: $1$, $\omega$ and $\omega^2$. Plot them and they are the
corners of an equilateral triangle. Is that luck? This lesson shows that 1 has exactly $n$ different $n$th roots for
every $n$, and that they always sit at the corners of a regular polygon.

## The idea

### Solving $z^n = 1$

A complex number $z$ with $z^n = 1$ is called an **$n$th root of unity**. ("Unity" is an old word for the number 1.)
Polar form and [De Moivre's theorem](02-de-moivre.md) find all of them.

Write $z = r\operatorname{cis}\theta$. Then $z^n = r^n\operatorname{cis}(n\theta)$, and we want this to equal
$1 = 1\operatorname{cis}0$.

**When are two numbers in polar form equal?** When they have the same length, and angles that point the same way, that
is, angles that differ by a whole number of full turns. So we need

$$r^n = 1 \qquad\text{and}\qquad n\theta = 2\pi k \text{ for some integer } k.$$

Since $r$ is a positive real number, $r^n = 1$ forces $r = 1$: every root of unity lies on the **unit circle**. And
$\theta = \dfrac{2\pi k}{n}$. Taking $k = 0, 1, 2, \ldots, n - 1$ gives $n$ different angles between 0 and $2\pi$.
Taking $k = n$ gives angle $2\pi$, the same point as $k = 0$, and from then on the points repeat. So:

> **The equation $z^n = 1$ has exactly $n$ solutions:** $\;z = \operatorname{cis}\dfrac{2\pi k}{n}$ for $k = 0, 1, \ldots, n - 1$.

### They form a regular polygon

The roots all lie on the unit circle, and neighbouring roots are separated by the same angle $\dfrac{2\pi}{n}$. Points
equally spaced round a circle are the corners of a **regular polygon**. One corner is always at $1$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 220" role="img" aria-label="The six sixth roots of unity on the unit circle forming a regular hexagon with one corner at 1; every other corner, at 1, omega and omega squared, is highlighted as the three cube roots of unity forming an equilateral triangle">
  <line x1="40" y1="110" x2="270" y2="110" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="150" y1="210" x2="150" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <circle cx="150" cy="110" r="80" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  <polygon points="230,110 190,40.7 110,40.7 70,110 110,179.3 190,179.3" fill="#9cc9ea" fill-opacity="0.2" stroke="#9cc9ea" stroke-width="2"/>
  <polygon points="230,110 110,40.7 110,179.3" fill="#eea66f" fill-opacity="0.2" stroke="#eea66f" stroke-width="2.5"/>
  <g fill="#9cc9ea"><circle cx="190" cy="40.7" r="5"/><circle cx="70" cy="110" r="5"/><circle cx="190" cy="179.3" r="5"/></g>
  <g fill="#eea66f"><circle cx="230" cy="110" r="6"/><circle cx="110" cy="40.7" r="6"/><circle cx="110" cy="179.3" r="6"/></g>
  <g font-size="13" fill="currentColor">
    <text x="238" y="106">1</text>
    <text x="74" y="32">ω = cis 120°</text>
    <text x="64" y="200">ω² = cis 240°</text>
    <text x="196" y="34">cis 60°</text>
    <text x="196" y="196">cis 300°</text>
    <text x="34" y="106">−1</text>
  </g>
</svg>
</div>

The six sixth roots of unity make a regular hexagon. Every other one of them is a cube root of unity (an angle of
$120°$ is two steps of $60°$), and those three make the equilateral triangle from the opening question.

**The roots are powers of one root.** Let $\omega = \operatorname{cis}\dfrac{2\pi}{n}$, the first root after 1 going
anticlockwise. By De Moivre, $\omega^k = \operatorname{cis}\dfrac{2\pi k}{n}$, so the $n$ roots are simply

$$1, \ \omega, \ \omega^2, \ \ldots, \ \omega^{n-1}.$$

Each multiplication by $\omega$ turns one step round the polygon. ($\omega$ is the Greek letter omega.)

### The cube roots of unity

For $n = 3$, $\omega = \operatorname{cis}\dfrac{2\pi}{3} = -\tfrac12 + \tfrac{\sqrt3}{2}i$ and
$\omega^2 = \operatorname{cis}\dfrac{4\pi}{3} = -\tfrac12 - \tfrac{\sqrt3}{2}i$. Some facts worth knowing:

- $\omega^2 = \bar\omega$: the two non-real roots are conjugates (as they must be, since $z^3 - 1$ has real
  coefficients; level 7, lesson 5).
- $\omega^2 = \dfrac1\omega$, since $\omega \cdot \omega^2 = \omega^3 = 1$.
- $1 + \omega + \omega^2 = 0$.

The last fact also comes from algebra. Factor: $z^3 - 1 = (z - 1)(z^2 + z + 1)$. The root $z = 1$ comes from the first
bracket; $\omega$ and $\omega^2$ are the roots of $z^2 + z + 1 = 0$, which gives $z = \dfrac{-1 \pm \sqrt{-3}}{2}$, the
same two numbers. And $\omega^2 + \omega + 1 = 0$ is exactly that equation.

### The roots of unity add to zero

**Theorem.** For $n \ge 2$, the $n$th roots of unity add to 0:

$$1 + \omega + \omega^2 + \cdots + \omega^{n-1} = 0.$$

**Proof 1 (a geometric series).** The sum is a geometric series with ratio $\omega$. Since $\omega \ne 1$ (because
$n \ge 2$), the sum formula from [Patterns](../../patterns/04-master.md) applies, and it works for complex numbers
because its proof uses only algebra:

$$1 + \omega + \cdots + \omega^{n-1} = \frac{\omega^n - 1}{\omega - 1} = \frac{1 - 1}{\omega - 1} = 0.$$

**Proof 2 (a turn of the polygon).** Call the sum $S$. Multiplying every root by $\omega$ moves each corner of the
polygon one step round, so the list $\omega, \omega^2, \ldots, \omega^n = 1$ is the same set of numbers in a different
order. So $\omega S = S$, which means $(\omega - 1)S = 0$. Since $\omega \ne 1$, $S = 0$. ∎

Proof 2 has a physical picture: $n$ equal forces pulling outwards from the centre of a regular polygon towards its
corners balance perfectly. Nothing moves.

### Solving $z^n = w$ for any $w$

The same method solves $z^n = w$ for any non-zero complex $w = R\operatorname{cis}\phi$. We need
$r^n = R$ and $n\theta = \phi + 2\pi k$, so

$$z = R^{1/n}\operatorname{cis}\frac{\phi + 2\pi k}{n}, \qquad k = 0, 1, \ldots, n - 1.$$

Every non-zero complex number has exactly $n$ different $n$th roots. They sit on a circle of radius $R^{1/n}$, at the
corners of a regular $n$-gon, one corner at angle $\dfrac\phi n$. Equivalently: take any one root and multiply it by
each of the $n$th roots of unity.

This is why the symbol $\sqrt[n]{w}$ is slippery for complex $w$: there is no single obvious choice among the $n$
roots. It also explains the warning in [level 7](../level-7/02-the-number-i.md) about $\sqrt a\sqrt b$.

### A famous application

In 1796, the 18-year-old Carl Friedrich Gauss showed that a regular 17-sided polygon can be constructed with only a
straight edge and compasses, something nobody had known for two thousand years. His method studied the 17th roots of
unity and how they can be grouped and added. Today roots of unity also drive the **fast Fourier transform**, the
algorithm that splits sound and signals into frequencies inside phones and computers.

## Worked examples

**1. Fourth roots of unity.** Solve $z^4 = 1$.

$z = \operatorname{cis}\dfrac{2\pi k}{4}$ for $k = 0, 1, 2, 3$: angles $0$, $\tfrac\pi2$, $\pi$, $\tfrac{3\pi}2$. So
$z = 1, i, -1, -i$: a square. These are the four values of the cycle of powers of $i$ from level 7. Check:
$1 + i - 1 - i = 0$. ✓

**2. Sixth roots of unity.** List them in the form $a + bi$.

Angles $0°, 60°, 120°, 180°, 240°, 300°$:

$$1, \quad \tfrac12 + \tfrac{\sqrt3}{2}i, \quad -\tfrac12 + \tfrac{\sqrt3}{2}i, \quad -1, \quad -\tfrac12 - \tfrac{\sqrt3}{2}i, \quad \tfrac12 - \tfrac{\sqrt3}{2}i.$$

They pair off into opposites ($z$ and $-z$), so they clearly add to 0.

**3. Cube roots of $8i$.** Solve $z^3 = 8i$.

1. $8i = 8\operatorname{cis}\tfrac\pi2$, so $R = 8$, $\phi = 90°$.
2. Length of each root: $8^{1/3} = 2$. Angles: $\dfrac{90° + 360°k}{3} = 30°, 150°, 270°$.
3. Roots: $2\operatorname{cis}30° = \sqrt3 + i$, $2\operatorname{cis}150° = -\sqrt3 + i$, $2\operatorname{cis}270° = -2i$.
4. Check the easiest: $(-2i)^3 = -8i^3 = -8(-i) = 8i$. ✓

**4. Fourth roots of $-16$.** Solve $z^4 = -16$.

$-16 = 16\operatorname{cis}180°$. Length $16^{1/4} = 2$; angles $\dfrac{180° + 360°k}{4} = 45°, 135°, 225°, 315°$. So
$z = \sqrt2 + \sqrt2 i$, $-\sqrt2 + \sqrt2 i$, $-\sqrt2 - \sqrt2 i$, $\sqrt2 - \sqrt2 i$: a square tilted by 45°.

**5. An exact value from a pentagon.** Use the fifth roots of unity to find $\cos72°$ exactly.

1. The fifth roots are at $0°, 72°, 144°, 216°, 288°$, and they add to 0.
2. Real parts: $1 + \cos72° + \cos144° + \cos216° + \cos288° = 0$. Since $\cos288° = \cos72°$ and
   $\cos216° = \cos144°$, this is $1 + 2\cos72° + 2\cos144° = 0$.
3. Let $c = \cos72°$. By the double-angle formula (lesson 2), $\cos144° = 2c^2 - 1$. So $1 + 2c + 4c^2 - 2 = 0$, that
   is $4c^2 + 2c - 1 = 0$.
4. $c = \dfrac{-2 \pm \sqrt{4 + 16}}{8} = \dfrac{-1 \pm \sqrt5}{4}$. Since $\cos72° > 0$, $\cos72° = \dfrac{\sqrt5 - 1}{4}
   \approx 0.309$. (A calculator agrees.) The golden ratio is hiding here: $\dfrac{\sqrt5 - 1}{2}$ is
   $\dfrac{1}{\varphi}$.

## Try it

1. Check that $\omega^2 = -\tfrac12 - \tfrac{\sqrt3}{2}i$ also cubes to 1, by computing $(\omega^2)^3$ two ways.
2. Find all eighth roots of unity in the form $a + bi$.
3. Solve $z^3 = -27$.
4. Solve $z^2 = 2i$ using polar form, and check one answer by squaring.
5. Solve $z^6 = -64$.
6. If $\omega$ is a non-real cube root of unity, simplify $\omega^{100} + \omega^{200}$.
7. Show that $(1 + \omega)^3 = -1$ for a non-real cube root of unity $\omega$. (Hint: $1 + \omega = -\omega^2$.)
8. Find the product of all the fourth roots of unity, and of all the cube roots of unity. Can you guess the rule?

??? note "Answers"
    1. $(\omega^2)^3 = (\omega^3)^2 = 1^2 = 1$. Directly: $\omega^2 = \operatorname{cis}240°$, cubed is
       $\operatorname{cis}720° = 1$. ✓
    2. Angles $0°, 45°, \ldots, 315°$: $1$, $\tfrac{\sqrt2}{2} + \tfrac{\sqrt2}{2}i$, $i$, $-\tfrac{\sqrt2}{2} +
       \tfrac{\sqrt2}{2}i$, $-1$, $-\tfrac{\sqrt2}{2} - \tfrac{\sqrt2}{2}i$, $-i$, $\tfrac{\sqrt2}{2} - \tfrac{\sqrt2}{2}i$.
    3. $-27 = 27\operatorname{cis}180°$. Length 3, angles $60°, 180°, 300°$: $\tfrac32 + \tfrac{3\sqrt3}{2}i$, $-3$,
       $\tfrac32 - \tfrac{3\sqrt3}{2}i$.
    4. $2i = 2\operatorname{cis}90°$. Length $\sqrt2$, angles $45°$ and $225°$: $z = 1 + i$ or $z = -1 - i$. Check:
       $(1 + i)^2 = 1 + 2i - 1 = 2i$. ✓
    5. $-64 = 64\operatorname{cis}180°$. Length $64^{1/6} = 2$, angles $30° + 60°k$: $\sqrt3 + i$, $2i$, $-\sqrt3 + i$,
       $-\sqrt3 - i$, $-2i$, $\sqrt3 - i$.
    6. $\omega^3 = 1$, so only the remainder of the exponent after dividing by 3 matters. $100 = 99 + 1$ and
       $200 = 198 + 2$, so the sum is $\omega + \omega^2 = -1$ (because $1 + \omega + \omega^2 = 0$).
    7. From $1 + \omega + \omega^2 = 0$, $1 + \omega = -\omega^2$. So $(1 + \omega)^3 = -\omega^6 = -(\omega^3)^2 = -1$.
    8. Fourth roots: $1 \times i \times (-1) \times (-i) = -1$ (since $i \times (-i) = 1$). Cube roots:
       $1 \times \omega \times \omega^2 = \omega^3 = 1$. The rule: the product of the $n$th roots of unity is
       $(-1)^{n+1}$, that is $1$ for odd $n$ and $-1$ for even $n$. (For even $n$, the roots pair off into conjugates
       with product 1, except $1$ and $-1$.)

## Common mistake

**Stopping after one root.** $z^3 = 8$ does not just mean $z = 2$. There are three cube roots, $2$, $2\omega$ and
$2\omega^2$, and in the complex numbers all three count. Always look for $n$ roots of an $n$th power equation.

**Dividing only the first angle by $n$.** In $z^3 = 8i$, it is tempting to find $30°$ and then add $360°$ to get more
roots. But $30° + 360°$ is the same point. Add the full turn **before** dividing: $\dfrac{90° + 360°k}{3}$, so the
roots are $120°$ apart.

## Where it leads

- Back: [De Moivre's theorem](02-de-moivre.md) · Next: [Euler's formula](04-euler-formula.md).
- [Level 8 page](index.md) · [Numbers topic page](../index.md)
- Regular polygons and their angles: [Geometry](../../geometry/index.md). Geometric series: [Patterns](../../patterns/index.md).
- Remainders of exponents, as in Try it question 6, are clock arithmetic: [Number theory](../../number-theory/index.md).
- On the U of T shelf, $z^n - 1$ and its factors over different fields appear with polynomials in
  [MAT240 Unit 9](../../../uoft/MAT240H1/unit09.md).
