---
title: "Master: Polynomials and quadratics"
---

# Master: Polynomials and quadratics

*Algebra · step 4 of 5*

## A question to start

You stand on a cliff top 25 m above the sea and throw a stone straight up at 20 m per second. If we round the pull of
Earth's gravity to 10 m per second squared, the stone's height above the sea after $t$ seconds is

$$h = -5t^2 + 20t + 25.$$

When does the stone hit the water, and how high does it go? The $t^2$ means no straight line can describe this
flight. You need a new kind of equation, the **quadratic**, and new tools to solve it.

## The idea

### Polynomials

A **polynomial** is a sum of terms, each a number times a whole-number power of the variable, such as
$4x^3 - x^2 + 7x - 2$. The highest power is the **degree**. Degree 1 is linear ($3x + 1$), degree 2 is
**quadratic** ($x^2 - 5x + 6$), degree 3 is cubic. The standard form of a quadratic is

$$ax^2 + bx + c, \qquad a \ne 0.$$

### Expanding

To **expand** a product of brackets, multiply every term in the first bracket by every term in the second:

$$(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15.$$

Three patterns are worth knowing by heart:

$$(a + b)^2 = a^2 + 2ab + b^2, \qquad (a - b)^2 = a^2 - 2ab + b^2, \qquad (a + b)(a - b) = a^2 - b^2.$$

The last one is the **difference of squares**. A rectangle picture shows the first: a square of side $a + b$ splits
into an $a \times a$ square, a $b \times b$ square and two $a \times b$ rectangles.

### Factoring: expanding backwards

**Factoring** writes a polynomial as a product. Always look first for a **common factor**:
$6x^2 + 9x = 3x(2x + 3)$. For $x^2 + bx + c$, look for two numbers that **multiply to $c$** and **add to $b$**:

$$x^2 + 8x + 15 = (x + 3)(x + 5) \quad \text{because } 3 \times 5 = 15 \text{ and } 3 + 5 = 8.$$

### Solving by factoring: the zero product rule

If two numbers multiply to give 0, at least one of them must be 0. So once a quadratic equation reads
$(\text{something})(\text{something}) = 0$, each bracket gives a solution. To solve $x^2 - 5x + 6 = 0$: factor to
$(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$. The solutions of an equation $p(x) = 0$ are called its **roots**.

### Completing the square

Not every quadratic factors neatly. **Completing the square** always works. Use $(x + k)^2 = x^2 + 2kx + k^2$
backwards: take half the coefficient of $x$, square it, and add and subtract it.

$$x^2 + 6x + 2 = (x^2 + 6x + 9) - 9 + 2 = (x + 3)^2 - 7.$$

A square is never negative, so the smallest value of $(x + 3)^2 - 7$ is $-7$, reached at $x = -3$.

### The quadratic formula

Completing the square on the general equation $ax^2 + bx + c = 0$ gives a formula that solves every quadratic. Divide
by $a$, move $\tfrac{c}{a}$ across, and add $\left(\tfrac{b}{2a}\right)^2$ to both sides:

$$
\begin{aligned}
x^2 + \frac{b}{a}x &= -\frac{c}{a}\\
\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2}\\
x + \frac{b}{2a} &= \pm\frac{\sqrt{b^2 - 4ac}}{2a}
\end{aligned}
$$

and so

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$

The $\pm$ ("plus or minus") gives two answers, one with $+$ and one with $-$.

### The discriminant

The part under the square root, $\Delta = b^2 - 4ac$ (Δ is the Greek capital delta), tells you how many real
solutions there are before you do any more work:

- $\Delta > 0$: two different real solutions;
- $\Delta = 0$: one (repeated) solution;
- $\Delta < 0$: no real solutions, because no real number squares to a negative.

### Parabolas

The graph of $y = ax^2 + bx + c$ is a **parabola**, a symmetric U-shaped curve. It opens upward if $a > 0$ and
downward if $a < 0$. Its turning point, the **vertex**, sits on the line of symmetry

$$x = -\frac{b}{2a}.$$

In **vertex form** $y = a(x - p)^2 + q$, the vertex is simply $(p, q)$. The roots are where the parabola crosses the
$x$-axis; the discriminant tells you whether it crosses twice, touches once, or misses.

## Worked examples

**1. The stone from the cliff.** Solve $-5t^2 + 20t + 25 = 0$.

- Divide every term by $-5$: $t^2 - 4t - 5 = 0$.
- Two numbers that multiply to $-5$ and add to $-4$: $-5$ and $1$. So $(t - 5)(t + 1) = 0$.
- $t = 5$ or $t = -1$. Time cannot be negative here, so the stone hits the water after **5 seconds**.
- Highest point: the vertex is at $t = -\dfrac{20}{2 \times (-5)} = 2$ seconds, where
  $h = -5(4) + 40 + 25 = 45$ m above the sea.

On Mars, gravity is about 3.7 m per second squared, so the $-5$ becomes about $-1.85$. Solving
$-1.85t^2 + 20t + 25 = 0$ with the formula gives $t \approx 11.9$ seconds, and the stone rises to about
$25 + \dfrac{20^2}{4 \times 1.85} \approx 79$ m. Same equation shape, a gentler planet.

**2. The formula.** Solve $2x^2 + 3x - 2 = 0$.

- $a = 2$, $b = 3$, $c = -2$. Discriminant: $\Delta = 9 - 4(2)(-2) = 9 + 16 = 25$.
- $x = \dfrac{-3 \pm 5}{4}$, so $x = \dfrac{2}{4} = \dfrac12$ or $x = \dfrac{-8}{4} = -2$.
- Check $x = \tfrac12$: $2 \times \tfrac14 + \tfrac32 - 2 = \tfrac12 + \tfrac32 - 2 = 0$.

**3. Vertex form.** Write $y = x^2 - 6x + 5$ in vertex form, and find its vertex and roots.

- Half of $-6$ is $-3$; $(-3)^2 = 9$. So $y = (x^2 - 6x + 9) - 9 + 5 = (x - 3)^2 - 4$.
- Vertex $(3, -4)$. It opens upward, so $-4$ is the minimum.
- Roots: $(x - 3)^2 = 4$ gives $x - 3 = \pm 2$, so $x = 1$ or $x = 5$, both 2 steps either side of the line of
  symmetry $x = 3$.

## Try it

1. Expand $(x + 4)(x - 3)$.
2. Factor $x^2 - 9x + 20$.
3. Solve $x^2 - 49 = 0$.
4. Solve $3x^2 - 5x - 1 = 0$, giving answers to 2 decimal places.
5. How many real solutions does $x^2 + 4x + 7 = 0$ have?
6. Find the vertex of $y = x^2 - 8x + 3$.

??? note "Answers"
    1. $x^2 - 3x + 4x - 12 = x^2 + x - 12$.
    2. Two numbers that multiply to 20 and add to $-9$: $-4$ and $-5$. So $(x - 4)(x - 5)$.
    3. Difference of squares: $(x - 7)(x + 7) = 0$, so $x = 7$ or $x = -7$.
    4. $\Delta = 25 - 4(3)(-1) = 37$. $x = \dfrac{5 \pm \sqrt{37}}{6}$, so $x \approx 1.85$ or $x \approx -0.18$.
    5. None. $\Delta = 16 - 28 = -12 < 0$. (In vertex form it is $(x + 2)^2 + 3$, which is always at least 3.)
    6. Half of $-8$ is $-4$, and $(-4)^2 = 16$, so $y = (x - 4)^2 - 16 + 3 = (x - 4)^2 - 13$. The vertex is
       $(4, -13)$.

## Common mistake

**Thinking $(a + b)^2 = a^2 + b^2$.** It is not: the middle term $2ab$ is missing. Test with numbers:
$(3 + 4)^2 = 49$, but $3^2 + 4^2 = 25$. The square of a sum always has the two "rectangles" $ab$ in it. A close
cousin: in the quadratic formula, the whole of $-b \pm \sqrt{\Delta}$ is divided by $2a$, not just the square root.

## Where it leads

- Next step: [Beyond: exponentials and logarithms](05-beyond.md), where the unknown climbs into the exponent.
- Back a step: [Build: equations, functions and straight lines](03-build.md)
- Parabolas are the shape of every thrown object, studied in [change and motion](../change/index.md); the area
  picture of $(a + b)^2$ belongs to [geometry](../geometry/index.md).
- Polynomials as objects in their own right, with factorisation and division, appear in
  [MAT240 Unit 9 (polynomials)](../../uoft/MAT240H1/unit09.md); throwing things in physics is
  [PHY131 Unit 2 (kinematics in one dimension)](../../uoft/PHY131H1/unit02.md).
