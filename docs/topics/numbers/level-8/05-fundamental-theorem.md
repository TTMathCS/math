---
title: "The fundamental theorem of algebra"
---

# The fundamental theorem of algebra

*Numbers · level 8, lesson 5 of 6*

## A question to start

The polynomial $x^4 + 1$ is never zero for real $x$: $x^4$ is never negative, so $x^4 + 1 \ge 1$. You might guess that
it cannot be broken into smaller pieces with real numbers either. Yet

$$x^4 + 1 = \big(x^2 + \sqrt2\,x + 1\big)\big(x^2 - \sqrt2\,x + 1\big).$$

Multiply it out and check: the $x^3$ terms cancel, the $x^2$ terms give $x^2 - 2x^2 + x^2 = 0$, and the $x$ terms
cancel. How would anyone find this? The answer is to step **outside** the real numbers, find the four complex roots of
$x^4 + 1$, and pair them up. Behind that method is one of the great theorems of mathematics: the complex numbers are
**enough**. No polynomial equation ever needs a bigger family of numbers.

## The idea

### The theorem

A **polynomial** of **degree** $n$ is an expression

$$p(z) = a_n z^n + a_{n-1}z^{n-1} + \cdots + a_1 z + a_0 \qquad (a_n \ne 0)$$

where the **coefficients** $a_0, \ldots, a_n$ are numbers (here: complex numbers, which includes real ones). A
**root** of $p$ is a number $r$ with $p(r) = 0$.

> **The fundamental theorem of algebra.** Every polynomial of degree $n \ge 1$ with complex coefficients has at least
> one complex root.

That sounds modest. But with one more fact it becomes much stronger.

### The factor theorem

**Factor theorem.** $p(r) = 0$ exactly when $(z - r)$ is a factor of $p(z)$, that is, $p(z) = (z - r)q(z)$ for some
polynomial $q$ of degree $n - 1$.

**Why.** If $p(z) = (z - r)q(z)$ then clearly $p(r) = 0$. For the other direction, look at

$$p(z) - p(r) = a_n(z^n - r^n) + a_{n-1}(z^{n-1} - r^{n-1}) + \cdots + a_1(z - r).$$

Each bracket $z^k - r^k$ has $z - r$ as a factor, because
$z^k - r^k = (z - r)(z^{k-1} + z^{k-2}r + \cdots + r^{k-1})$ (multiply out and everything cancels except the two end
terms). So $p(z) - p(r) = (z - r)q(z)$. If $p(r) = 0$, this says $p(z) = (z - r)q(z)$. ∎

### $n$ roots for degree $n$

Now combine the two. Take $p$ of degree $n \ge 1$. The theorem gives a root $r_1$; the factor theorem gives
$p(z) = (z - r_1)q_1(z)$ with $q_1$ of degree $n - 1$. If $n - 1 \ge 1$, the theorem applies to $q_1$: it has a root
$r_2$, and $q_1(z) = (z - r_2)q_2(z)$. Keep going. Each step lowers the degree by one, and after $n$ steps only a
constant is left, which must be $a_n$. So:

> **Every polynomial of degree $n \ge 1$ factors completely into $n$ linear factors:**
> $\;p(z) = a_n(z - r_1)(z - r_2)\cdots(z - r_n)$.

The roots $r_1, \ldots, r_n$ need not be different. If a factor $(z - r)$ appears $m$ times, $r$ is a root of
**multiplicity** $m$ (a double root for $m = 2$, a triple root for $m = 3$). Then the statement is:

> **A polynomial of degree $n$ has exactly $n$ complex roots, counted with multiplicity.**

It cannot have more: if $r$ is not among $r_1, \ldots, r_n$, then each $(r - r_k) \ne 0$, and a product of non-zero
complex numbers is not zero, so $p(r) \ne 0$.

**Multiplicity on a graph.** For a real polynomial, a real root of odd multiplicity is where the graph **crosses** the
$x$-axis; a root of even multiplicity is where it **touches** and turns back.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 240" role="img" aria-label="Graph of y equals x cubed minus 3x plus 2, which crosses the x-axis at minus 2 and touches it at 1, a double root">
  <line x1="20" y1="130" x2="305" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <line x1="170" y1="230" x2="170" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="45.0,215.8 50.0,194.7 55.0,175.7 60.0,158.7 65.0,143.5 70.0,130.0 75.0,118.2 80.0,108.0 85.0,99.4 90.0,92.1 95.0,86.2 100.0,81.6 105.0,78.2 110.0,75.8 115.0,74.4 120.0,74.0 125.0,74.4 130.0,75.6 135.0,77.4 140.0,79.8 145.0,82.8 150.0,86.1 155.0,89.8 160.0,93.7 165.0,97.8 170.0,102.0 175.0,106.2 180.0,110.3 185.0,114.2 190.0,117.9 195.0,121.3 200.0,124.2 205.0,126.6 210.0,128.4 215.0,129.6 220.0,130.0 225.0,129.6 230.0,128.2 235.0,125.8 240.0,122.4 245.0,117.7 250.0,111.9 255.0,104.6 260.0,96.0 265.0,85.8 270.0,74.0 275.0,60.5 280.0,45.3" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="70" cy="130" r="6" fill="#9cc9ea"/>
  <circle cx="220" cy="130" r="6" fill="#7ccf9a"/>
  <g font-size="12" fill="currentColor">
    <text x="24" y="150">−2: crosses</text>
    <text x="196" y="152">1: touches (double)</text>
    <text x="186" y="34">y = (x − 1)²(x + 2)</text>
  </g>
</svg>
</div>

### What the theorem says, and what it does not

- **It says roots exist.** It does **not** give a formula for them. There are formulas for degrees 2, 3 and 4 (the
  cubic one is in [level 7](../level-7/02-the-number-i.md)). For degree 5 and higher there is **no** general formula
  using only $+$, $-$, $\times$, $\div$ and roots; Niels Henrik Abel proved this in 1824. The roots exist, but in
  general they can only be calculated numerically.
- **It is about complex coefficients and complex roots.** Over $\mathbb{R}$ it is false ($x^2 + 1$ has no real root).
  So the theorem is really a statement about how good $\mathbb{C}$ is: building one new number $i$ was enough to solve
  **every** polynomial equation, even ones whose coefficients involve $i$. Mathematicians say $\mathbb{C}$ is
  **algebraically closed**. This is where the ladder of [level 7, lesson 1](../level-7/01-why-new-numbers.md) stops for
  polynomial equations.
- **It is hard to prove.** Many mathematicians attempted it in the 1700s. Carl Friedrich Gauss's doctoral thesis of
  1799 is often counted as the first serious proof, although by modern standards it has a gap; complete proofs came in
  the 1800s. Every known proof uses some idea from outside algebra, such as continuity or the "no holes" property of
  $\mathbb{R}$, which is why it sits more naturally in analysis than its name suggests.

### A picture of why it is true (not a proof)

Think of $p(z) = z^n + \cdots + a_0$ as a machine that sends each point $z$ of the plane to a point $p(z)$. Let $z$ walk
once round a circle of radius $R$ centred at 0, and watch the path traced by $p(z)$.

- **A huge circle.** When $R$ is very large, the term $z^n$ is far bigger than all the others, so $p(z)$ behaves like
  $z^n$. By De Moivre, as $z$ goes round once, $z^n$ goes round 0 **$n$ times**. So the path of $p(z)$ winds round 0
  $n$ times.
- **A tiny circle.** When $R$ is very small, $p(z)$ stays close to $p(0) = a_0$. If $a_0 \ne 0$, the path is a small loop
  near $a_0$ that does not go round 0 at all.

Now shrink the circle slowly from huge to tiny. The path changes smoothly, from winding $n$ times round 0 to winding
0 times. A loop cannot "unwind" from round a point without passing **through** that point at some stage. At that
moment some $z$ on the circle has $p(z) = 0$: a root. Making "winding" and "passing through" exact is the work of a
real proof, which you will meet in university analysis.

### Real polynomials: linear and quadratic factors

If the coefficients are **real**, [level 7](../level-7/05-every-quadratic.md) showed the non-real roots come in
conjugate pairs $w$, $\bar w$. Multiply each pair's factors together:

$$(z - w)(z - \bar w) = z^2 - (w + \bar w)z + w\bar w = z^2 - 2\operatorname{Re}(w)\,z + |w|^2,$$

a quadratic with **real** coefficients (and negative discriminant). So:

> **Every polynomial with real coefficients factors into real linear factors and real quadratic factors with no real
> roots.**

That is exactly how the opening factorisation of $x^4 + 1$ is found.

### Sums and products of roots

Expanding $a_n(z - r_1)\cdots(z - r_n)$ and comparing with $p(z)$ gives the relations named after François Viète. The
two simplest are

$$r_1 + r_2 + \cdots + r_n = -\frac{a_{n-1}}{a_n}, \qquad r_1 r_2 \cdots r_n = (-1)^n\frac{a_0}{a_n}.$$

For $z^n - 1$ the coefficient of $z^{n-1}$ is 0 (when $n \ge 2$), so the roots of unity add to 0: a third proof of the
fact in [lesson 3](03-roots-of-unity.md).

## Worked examples

**1. Factor $x^4 + 1$.**

1. Roots: $x^4 = -1 = e^{i\pi}$. By [lesson 3](03-roots-of-unity.md) the roots have length 1 and angles
   $\tfrac\pi4, \tfrac{3\pi}4, \tfrac{5\pi}4, \tfrac{7\pi}4$, that is $\dfrac{\pm1 \pm i}{\sqrt2}$ (all four sign
   choices).
2. Pair conjugates. $w = e^{i\pi/4} = \tfrac{1 + i}{\sqrt2}$ and $\bar w$: $2\operatorname{Re}(w) = \sqrt2$ and
   $|w|^2 = 1$, giving $x^2 - \sqrt2\,x + 1$.
3. $w = e^{3i\pi/4} = \tfrac{-1 + i}{\sqrt2}$ and $\bar w$: $2\operatorname{Re}(w) = -\sqrt2$, giving $x^2 + \sqrt2\,x + 1$.
4. So $x^4 + 1 = (x^2 - \sqrt2\,x + 1)(x^2 + \sqrt2\,x + 1)$ over $\mathbb{R}$, and over $\mathbb{C}$ it is the product
   of the four factors $\left(x - \tfrac{\pm 1 \pm i}{\sqrt2}\right)$.
5. A purely algebraic route, for comparison: $x^4 + 1 = (x^4 + 2x^2 + 1) - 2x^2 = (x^2 + 1)^2 - (\sqrt2\,x)^2$, a
   difference of two squares. The complex roots told us that such a trick must exist.

**2. Factor $x^3 - 8$ over $\mathbb{R}$ and over $\mathbb{C}$.**

1. $x = 2$ is a root, so $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$.
2. $x^2 + 2x + 4$ has $D = 4 - 16 = -12 < 0$, so it is the real quadratic factor. Over $\mathbb{R}$ we stop.
3. Its roots are $\dfrac{-2 \pm 2i\sqrt3}{2} = -1 \pm i\sqrt3$. Over $\mathbb{C}$:
   $x^3 - 8 = (x - 2)(x + 1 - i\sqrt3)(x + 1 + i\sqrt3)$. (These are 2, $2\omega$, $2\omega^2$.)

**3. Multiplicity.** Find the roots of $p(x) = x^3 - 3x + 2$ with their multiplicities.

1. Try small integers: $p(1) = 1 - 3 + 2 = 0$. So $(x - 1)$ is a factor: $p(x) = (x - 1)(x^2 + x - 2)$.
2. $x^2 + x - 2 = (x - 1)(x + 2)$. So $p(x) = (x - 1)^2(x + 2)$.
3. Roots: $1$ with multiplicity 2, and $-2$ with multiplicity 1. Count: $2 + 1 = 3$, the degree. ✓ The graph above
   touches at 1 and crosses at $-2$.

**4. Build a polynomial.** Find the real polynomial of lowest degree, with leading coefficient 1, that has a double
root at 1 and a root at $2i$.

1. Real coefficients force $-2i$ to be a root too. So the roots are $1, 1, 2i, -2i$: degree 4.
2. $(x - 2i)(x + 2i) = x^2 + 4$ and $(x - 1)^2 = x^2 - 2x + 1$.
3. $p(x) = (x^2 - 2x + 1)(x^2 + 4) = x^4 - 2x^3 + 5x^2 - 8x + 4$.

## Try it

1. How many complex roots, counted with multiplicity, does $3z^7 - z + 5$ have? Must at least one be real? Why?
2. Factor $x^4 - 16$ completely over $\mathbb{C}$, and over $\mathbb{R}$.
3. Find the roots and multiplicities of $(x^2 - 1)^3$.
4. Factor $x^4 + 4$ into two real quadratics. (Hint: find the roots of $x^4 = -4$, or write it as
   $(x^2 + 2)^2 - (2x)^2$.)
5. Given that $2i$ is a root of $x^4 - 2x^3 + 6x^2 - 8x + 8$, find all its roots.
6. Factor $x^6 - 1$ into real linear and quadratic factors.
7. Without solving, find the sum and the product of the roots of $2x^3 - 5x^2 + 4x - 7$.
8. Explain why a real polynomial of degree 4 cannot have exactly three non-real roots (counted with multiplicity).

??? note "Answers"
    1. Degree 7, so 7 roots counted with multiplicity. The coefficients are real, so the non-real roots pair off.
       Seven is odd, so at least one root is left unpaired, and it must be real.
    2. $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$ over $\mathbb{R}$. Over $\mathbb{C}$, also split
       $x^2 + 4 = (x - 2i)(x + 2i)$.
    3. $(x^2 - 1)^3 = (x - 1)^3(x + 1)^3$: root $1$ with multiplicity 3 and root $-1$ with multiplicity 3. Total 6,
       the degree.
    4. $(x^2 + 2)^2 - (2x)^2 = (x^2 + 2x + 2)(x^2 - 2x + 2)$. (The roots of $x^4 = -4$ are $\pm1 \pm i$; the pair
       $1 \pm i$ gives $x^2 - 2x + 2$, the pair $-1 \pm i$ gives $x^2 + 2x + 2$.)
    5. Real coefficients, so $-2i$ is also a root, and $(x - 2i)(x + 2i) = x^2 + 4$ is a factor. Dividing:
       $x^4 - 2x^3 + 6x^2 - 8x + 8 = (x^2 + 4)(x^2 - 2x + 2)$. The second factor has roots $1 \pm i$. All roots:
       $2i, -2i, 1 + i, 1 - i$.
    6. $x^6 - 1 = (x^3 - 1)(x^3 + 1) = (x - 1)(x^2 + x + 1)(x + 1)(x^2 - x + 1)$. The two quadratics have negative
       discriminants ($1 - 4 = -3$), so this is complete over $\mathbb{R}$. Their roots are the four non-real sixth
       roots of unity.
    7. Sum $= -\dfrac{-5}{2} = \dfrac52$. Product $= (-1)^3\dfrac{-7}{2} = \dfrac72$.
    8. Non-real roots of a real polynomial come in conjugate pairs, each pair with matching multiplicities, so the
       number of non-real roots is even. Three is odd.

## Common mistake

**Thinking the theorem gives a way to find the roots.** It only promises that they exist. For most polynomials of
degree 5 or more, the roots can only be found approximately, by numerical methods such as Newton's method.

**Forgetting multiplicity when counting.** $(x - 1)^2(x + 2)$ has only two **different** roots, but three roots
counted with multiplicity. "Degree $n$ means $n$ roots" is only true with that counting.

## Where it leads

- Back: [Euler's formula](04-euler-formula.md) · Next: [Beyond the complex numbers](06-quaternions.md), where we ask
  what comes after $\mathbb{C}$ and what it costs.
- [Level 8 page](index.md) · [Numbers topic page](../index.md)
- Polynomials, the factor theorem and long division: [Algebra](../../algebra/index.md).
- On the U of T shelf: the fundamental theorem used in linear algebra in
  [MAT240 Unit 9 (polynomials)](../../../uoft/MAT240H1/unit09.md) and
  [MAT240 Unit 10 (eigenvalues)](../../../uoft/MAT240H1/unit10.md); continuity, which every proof needs, in
  [MAT158 Unit 4 (continuous functions)](../../../uoft/MAT158H1/unit04.md).
