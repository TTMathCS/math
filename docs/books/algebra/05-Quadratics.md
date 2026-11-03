# 5. Quadratics

*A thrown stone, a jet of water, the cable of a suspension bridge under an even load, the area of a field with a
fixed length of fence: all of these lead to expressions with an $x^2$ in them. Quadratic equations are the first
equations that cannot be solved by the balance moves of Chapter 2 alone, and they have been solved, by one method
or another, for nearly four thousand years. This chapter draws the parabola, solves every quadratic by completing
the square (first with a picture, then with algebra), proves the quadratic formula, reads the discriminant, finds
maxima and minima, relates the roots to the coefficients, and solves equations that are quadratics in disguise. It
ends with the history, from Babylonian clay tablets to al-Khwarizmi.*

!!! abstract "In this chapter"
    **You will learn:**

    - the shape of the parabola $y = ax^2 + bx + c$, its vertex and its axis, and its focus-directrix definition
    - completing the square, as a picture and as algebra
    - the quadratic formula with two proofs, and how computers use it safely
    - what the discriminant says about the roots and the graph, and when the roots are rational
    - vertex form, and how to solve maximum and minimum problems and quadratic inequalities
    - the sum and product of the roots, and how to use them without solving
    - how to recognise and solve equations that reduce to quadratics

    **You need:** [Chapter 2](02-Equations-and-Inequalities.md) (safe and unsafe steps) and
    [Chapter 4](04-Polynomials-and-Factoring.md) (factoring, the zero product property). For a gentler version, see
    the Topics lessons [Quadratic relations](../../topics/algebra/level-7/01-quadratic-relations.md),
    [Completing the square](../../topics/algebra/level-7/02-completing-the-square.md) and
    [Solving quadratics](../../topics/algebra/level-7/03-solving-quadratics.md).

    **Levels:** 5.1 to 5.5 are intermediate; 5.6 and 5.7 are intermediate to advanced; the end of 5.1, the end of
    5.3 and the proof in 5.4 are advanced.

## 5.1 The parabola

A **quadratic** in $x$ is a polynomial of degree 2:

$$ax^2 + bx + c, \qquad a \neq 0.$$

Its graph $y = ax^2 + bx + c$ is a **parabola**. Start with the simplest, $y = x^2$:

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $y = x^2$ | 9 | 4 | 1 | 0 | 1 | 4 | 9 |

Three features stand out. The graph is **symmetric** about the $y$-axis, because $(-x)^2 = x^2$. It has a lowest
point, the **vertex** $(0, 0)$, because squares are never negative. And it is **not** a straight line: the steps
between consecutive $y$ values are $1, 3, 5, 7, \ldots$, growing steadily, so the curve gets steeper and steeper.
(The steps of the steps are all 2. For any quadratic, the "second differences" at equally spaced $x$ are constant,
just as the first differences of a line are constant.)

Multiplying by $a$ stretches the picture vertically. For $a > 1$ the parabola is narrower; for $0 < a < 1$ it is
wider; for $a < 0$ it is flipped upside down and has a highest point instead of a lowest.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="Three parabolas through the origin: y equals 2 x squared is the narrowest, y equals x squared is in the middle, and y equals one half x squared is the widest. All are symmetric about the vertical axis">
  <line x1="20" y1="165" x2="400" y2="165" stroke="currentColor" stroke-width="1.2"/>
  <line x1="210" y1="180" x2="210" y2="10" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="125.0,29.5 130.0,45.0 135.0,59.5 140.0,73.1 145.0,85.8 150.0,97.5 155.0,108.3 160.0,118.1 165.0,127.0 170.0,135.0 175.0,142.0 180.0,148.1 185.0,153.3 190.0,157.5 195.0,160.8 200.0,163.1 205.0,164.5 210.0,165.0 215.0,164.5 220.0,163.1 225.0,160.8 230.0,157.5 235.0,153.3 240.0,148.1 245.0,142.0 250.0,135.0 255.0,127.0 260.0,118.1 265.0,108.3 270.0,97.5 275.0,85.8 280.0,73.1 285.0,59.5 290.0,45.0 295.0,29.5"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="90,30.0 100,51.6 110,71.2 120,89.1 130,105.0 140,119.1 150,131.2 160,141.6 170,150.0 180,156.6 190,161.2 200,164.1 210,165.0 220,164.1 230,161.2 240,156.6 250,150.0 260,141.6 270,131.2 280,119.1 290,105.0 300,89.1 310,71.2 320,51.6 330,30.0"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2.5" points="50.0,45.0 70.0,73.1 90.0,97.5 110.0,118.1 130.0,135.0 150.0,148.1 170.0,157.5 190.0,163.1 210.0,165.0 230.0,163.1 250.0,157.5 270.0,148.1 290.0,135.0 310.0,118.1 330.0,97.5 350.0,73.1 370.0,45.0"/>
  <circle cx="210" cy="165" r="3.5" fill="currentColor"/>
  <text x="300" y="24" font-size="13" fill="currentColor">y = 2x²</text>
  <text x="336" y="44" font-size="13" fill="currentColor">y = x²</text>
  <text x="374" y="60" font-size="13" fill="currentColor">y = x²/2</text>
  <text x="218" y="182" font-size="12" fill="currentColor">vertex</text>
  <text x="214" y="20" font-size="12" fill="currentColor">axis</text>
</svg>
</div>

Section 5.5 shows that **every** parabola $y = ax^2 + bx + c$ is just $y = ax^2$ slid to a new position, so they all
have the same shape features: a vertex, a vertical **axis of symmetry** through it, and arms going up (if $a > 0$)
or down (if $a < 0$).

### Parabolas in the world

A ball thrown upwards at speed $v$ (metres per second) from height $h_0$ is, after $t$ seconds, at height

$$h = h_0 + vt - \tfrac{1}{2}gt^2,$$

ignoring air, where $g$ is the planet's surface gravity: about $9.81$ on Earth and $3.71$ on Mars. Height is a
quadratic in time with negative leading coefficient, so its graph is an upside-down parabola: up, a highest point,
down. Thrown sideways, the ball's path through the air is also a parabola. Galileo established both facts; he
published them in his *Two New Sciences* (1638). The same equation on Mars has a smaller $g$, so the parabola
is wider and taller; 5.5 computes by how much.

### The focus and the directrix

*Level: advanced.*

The Greeks met the parabola not as a graph but as a curve cut from a cone, and later defined it like this: given a
point $F$ (the **focus**) and a line $L$ (the **directrix**), the parabola is the set of points equally far from $F$
and from $L$.

**Theorem.** With focus $F = (0, p)$ and directrix $y = -p$ (where $p > 0$), the parabola is $x^2 = 4py$, that is,
$y = \frac{1}{4p}x^2$.

*Proof.* A point $P = (x, y)$ has distance $\sqrt{x^2 + (y - p)^2}$ from $F$ and distance $|y + p|$ from the line.
Setting them equal and squaring (both sides are nonnegative, so this is reversible here):
$x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2$, which simplifies to $x^2 = 4py$. $\square$

So $y = x^2$ has focus $(0, \frac{1}{4})$. The focus explains the most useful property of the parabola.

**Reflection property.** Rays coming in parallel to the axis bounce off the parabola and all pass through the
focus.

*Proof.* Take a point $P = (x_0, y_0)$ on $x^2 = 4py$, with $x_0 \neq 0$. The line $y = \frac{x_0}{2p}x - y_0$ passes
through $P$ (since $\frac{x_0^2}{2p} - y_0 = 2y_0 - y_0 = y_0$). Where does it meet the parabola? Substituting
$y = \frac{x^2}{4p}$ and multiplying by $4p$ gives $x^2 - 2x_0x + 4py_0 = 0$, that is, $x^2 - 2x_0x + x_0^2 = 0$, or
$(x - x_0)^2 = 0$. It meets the parabola only at $P$, touching without crossing: it is the **tangent line** at $P$.
It crosses the $y$-axis at $T = (0, -y_0)$. Now $FT = p + y_0$, and $FP$ equals the distance from $P$ to the
directrix, which is also $y_0 + p$. So triangle $FPT$ is isosceles, and its angles at $P$ and $T$ are equal. The
angle at $T$ equals the angle between the tangent and the vertical ray through $P$ (they are corresponding angles
along the tangent, since $TF$ and the ray are both vertical). So the tangent makes equal angles with the incoming
vertical ray and with the line $PF$: the ray reflects to the focus. $\square$

This is why car headlights, solar cookers and radio dishes are shaped like paraboloids (parabolas spun about their
axis). The big dishes on Earth that receive the faint signals from spacecraft at Mars collect parallel radio waves
from a whole dish and concentrate them at a receiver near the focus.

## 5.2 Completing the square

How do you solve $x^2 + 10x = 39$? The balance moves of Chapter 2 do not isolate $x$, because $x$ appears in two
different powers. The idea, nearly four thousand years old, is to turn the left side into a **perfect square**.

### The picture

Think of $x^2$ as a square of side $x$ and $10x$ as a rectangle $10$ by $x$. Cut the rectangle into two strips of
$5$ by $x$ and attach one to the right of the square and one below. The shape is almost a square of side $x + 5$;
only the $5 \times 5$ corner is missing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="A square of side x with two 5 by x strips on its right and bottom; the missing 5 by 5 corner is dashed. Adding it makes a square of side x plus 5">
  <rect x="60" y="60" width="90" height="90" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="60" width="50" height="90" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="60" y="150" width="90" height="50" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="150" width="50" height="50" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="105" y="52" text-anchor="middle" font-size="14" fill="currentColor">x</text>
  <text x="175" y="52" text-anchor="middle" font-size="14" fill="currentColor">5</text>
  <text x="46" y="110" text-anchor="middle" font-size="14" fill="currentColor">x</text>
  <text x="46" y="180" text-anchor="middle" font-size="14" fill="currentColor">5</text>
  <text x="105" y="110" text-anchor="middle" font-size="15" fill="currentColor">x²</text>
  <text x="175" y="110" text-anchor="middle" font-size="14" fill="currentColor">5x</text>
  <text x="105" y="180" text-anchor="middle" font-size="14" fill="currentColor">5x</text>
  <text x="175" y="180" text-anchor="middle" font-size="14" fill="currentColor">25</text>
  <text x="228" y="90" font-size="14" fill="currentColor">x² + 10x = 39</text>
  <text x="228" y="120" font-size="14" fill="currentColor">add 25: (x + 5)² = 64</text>
  <text x="228" y="150" font-size="14" fill="currentColor">x + 5 = 8, so x = 3</text>
</svg>
</div>

The L-shaped figure has area $x^2 + 10x = 39$. Add the missing corner, of area 25, and the whole square has area
$39 + 25 = 64$. So its side is $x + 5 = 8$, and $x = 3$. **Check:** $9 + 30 = 39$. ✓ This is the very example
al-Khwarizmi used, in words, around 820 CE (see 5.8).

The picture finds only the positive root, because a side length is positive. The algebra finds both: $(x + 5)^2 = 64$
means $x + 5 = 8$ **or** $x + 5 = -8$, so $x = 3$ or $x = -13$. **Check:** $169 - 130 = 39$. ✓

### The algebra

The picture is the identity

$$x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2,$$

which you can check by expanding the right side. In words: **halve the coefficient of $x$, square it, add and
subtract it.**

**Example 1.** Solve $x^2 - 6x + 2 = 0$.

Half of $-6$ is $-3$, and $(-3)^2 = 9$. So $x^2 - 6x = (x - 3)^2 - 9$, and the equation becomes $(x - 3)^2 - 9 + 2 = 0$,
that is, $(x - 3)^2 = 7$. Then $x - 3 = \pm\sqrt{7}$ and $x = 3 \pm \sqrt{7}$ (about 5.646 and 0.354). This quadratic
does not factor over the integers, but completing the square solves it anyway.

**Example 2 (leading coefficient not 1).** Solve $2x^2 + 8x - 5 = 0$.

Divide by 2 first: $x^2 + 4x = \frac{5}{2}$. Half of 4 is 2; add 4 to both sides: $(x + 2)^2 = \frac{13}{2}$. So
$x = -2 \pm \sqrt{\frac{13}{2}} = -2 \pm \frac{\sqrt{26}}{2}$.

**Example 3 (no real solution).** $x^2 + 2x + 5 = 0$ becomes $(x + 1)^2 = -4$. No real number squared is negative, so
there is no real solution. (With complex numbers there are two, $-1 \pm 2i$; see
[Chapter 9](09-Complex-Numbers.md).)

Completing the square does more than solve equations: it rewrites a quadratic in a form that shows its vertex
(5.5), and it is used again for circles, for integrals in calculus, and for quadratic forms in linear algebra.

## 5.3 The quadratic formula, proved

Complete the square once and for all on the general equation.

**Theorem (quadratic formula).** If $a \neq 0$, the real solutions of $ax^2 + bx + c = 0$ are

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a},$$

provided $b^2 - 4ac \geq 0$; if $b^2 - 4ac < 0$ there are no real solutions.

*Proof.* Divide by $a$ (allowed since $a \neq 0$): $x^2 + \frac{b}{a}x + \frac{c}{a} = 0$. Complete the square with
half the coefficient of $x$, which is $\frac{b}{2a}$:

$$\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2} + \frac{c}{a} = 0, \qquad\text{so}\qquad \left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}.$$

The right side has positive denominator $4a^2$. If $b^2 - 4ac < 0$ it is negative, and no real square equals it. If
$b^2 - 4ac \geq 0$, then $x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$ (here $\sqrt{4a^2} = |2a|$, but the
$\pm$ covers both signs of $a$), and subtracting $\frac{b}{2a}$ gives the formula. Every step was reversible, so
these are exactly the solutions. $\square$

**A second proof, without fractions.** Multiply $ax^2 + bx + c = 0$ by $4a$: $4a^2x^2 + 4abx + 4ac = 0$. Add $b^2$
to both sides and move $4ac$ across:

$$4a^2x^2 + 4abx + b^2 = b^2 - 4ac, \qquad\text{that is,}\qquad (2ax + b)^2 = b^2 - 4ac.$$

So $2ax + b = \pm\sqrt{b^2 - 4ac}$, and dividing by $2a$ gives the formula. This version is attributed by the
twelfth-century Indian mathematician Bhaskara II to his predecessor Sridhara. Its last line, $(2ax + b)^2 = b^2 - 4ac$,
is worth remembering by itself.

**Example 4.** Solve $3x^2 - 5x - 2 = 0$.

$a = 3$, $b = -5$, $c = -2$. Then $b^2 - 4ac = 25 + 24 = 49$, and $x = \frac{5 \pm 7}{6}$, so $x = 2$ or
$x = -\frac{1}{3}$. **Check:** $12 - 10 - 2 = 0$. ✓ (The perfect square 49 says the quadratic factors:
$3x^2 - 5x - 2 = (3x + 1)(x - 2)$.)

**Example 5.** Solve $2x^2 + 3x - 4 = 0$.

$b^2 - 4ac = 9 + 32 = 41$, so $x = \frac{-3 \pm \sqrt{41}}{4}$, about $0.851$ and $-2.351$.

Two common slips: the $-b$ applies to the number $b$, so if $b = -5$ then $-b = 5$; and the $2a$ divides the
**whole** numerator, not only the square root.

### How computers solve quadratics

*Level: advanced.*

The formula is exact, but computers work with about 16 significant digits, and the formula can then go badly wrong.
Take $x^2 - 10^8x + 1 = 0$. Its roots are very close to $10^8$ and $10^{-8}$. The formula gives the small root as
$\frac{10^8 - \sqrt{10^{16} - 4}}{2}$: the difference of two numbers that agree in their first 16 digits. In
ordinary double-precision arithmetic the result is about $7.45 \times 10^{-9}$, 25% wrong. Subtracting nearly equal
numbers throws away the significant digits; this is called **catastrophic cancellation**.

The cure uses the product of the roots (5.6): $x_1x_2 = \frac{c}{a}$. Compute the root where the signs do **not**
cancel, $x_1 = \frac{-b - \operatorname{sign}(b)\sqrt{b^2 - 4ac}}{2a}$, then get the other as
$x_2 = \frac{c}{ax_1}$. Here $x_1 = 10^8$ and $x_2 = \frac{1}{10^8}$, correct to full precision.

```python
import math

def roots(a, b, c):
    d = b*b - 4*a*c
    if d < 0:
        return None                      # no real roots
    s = math.sqrt(d)
    x1 = (-b - s) / (2*a) if b >= 0 else (-b + s) / (2*a)   # no cancellation
    x2 = c / (a * x1) if x1 != 0 else -b / a                 # from x1 * x2 = c/a
    return x1, x2

print(roots(1, -1e8, 1))               # (100000000.0, 1e-08)
print((1e8 - math.sqrt(1e16 - 4)) / 2) # 7.450580596923828e-09, the naive formula
```

George Forsythe's 1966 report *How Do You Solve a Quadratic Equation?* made this example famous among numerical
analysts. The lesson is general: a formula that is correct in exact arithmetic is not automatically a good algorithm.

## 5.4 The discriminant

The number under the square root,

$$\Delta = b^2 - 4ac,$$

is the **discriminant** of the quadratic (the symbol $\Delta$ is the capital Greek letter delta). It discriminates
between the three possible cases, without solving.

| $\Delta$ | Real roots | The graph $y = ax^2 + bx + c$ |
|---|---|---|
| $\Delta > 0$ | two different: $\frac{-b \pm \sqrt{\Delta}}{2a}$ | crosses the $x$-axis twice |
| $\Delta = 0$ | one, repeated: $-\frac{b}{2a}$ | touches the $x$-axis at its vertex |
| $\Delta < 0$ | none | stays entirely above or below the axis |

These follow from $(2ax + b)^2 = \Delta$ (5.3): a square can equal a positive number in two ways, zero in one way,
a negative number in none. When $\Delta = 0$, the quadratic is a perfect square, $a\left(x + \frac{b}{2a}\right)^2$,
and its root is called a **double root** (the factor $x + \frac{b}{2a}$ appears twice).

**Example 6.** How many real roots has $4x^2 - 12x + 9 = 0$? $\Delta = 144 - 144 = 0$: one double root,
$x = \frac{12}{8} = \frac{3}{2}$. Indeed $4x^2 - 12x + 9 = (2x - 3)^2$.

**Example 7 (tangency).** For which $k$ does the line $y = x + k$ touch the parabola $y = x^2$?

They meet where $x^2 = x + k$, that is, $x^2 - x - k = 0$. A line touching a parabola meets it at exactly one point, a
double root, so $\Delta = 1 + 4k = 0$ and $k = -\frac{1}{4}$. The point of contact is at $x = \frac{1}{2}$. For
$k > -\frac{1}{4}$ the line cuts the parabola twice; for $k < -\frac{1}{4}$ it misses.

**Example 8.** For which slopes $m$ does the line $y = mx - 1$ meet $y = x^2$? We need $x^2 - mx + 1 = 0$ to have
real roots: $\Delta = m^2 - 4 \geq 0$, so $m \leq -2$ or $m \geq 2$.

### When are the roots rational?

*Level: advanced.*

**Theorem.** Let $a, b, c$ be integers with $a \neq 0$. The roots of $ax^2 + bx + c = 0$ are rational numbers if and
only if $\Delta = b^2 - 4ac$ is a perfect square (the square of an integer).

*Proof.* If $\Delta = k^2$ for an integer $k$, the roots $\frac{-b \pm k}{2a}$ are fractions of integers, so rational.
Conversely, suppose a root $r$ is rational. From $(2ar + b)^2 = \Delta$, the number $\sqrt{\Delta} = |2ar + b|$ is
rational. It remains to show that **a rational number whose square is an integer is itself an integer**. Write it in
lowest terms as $\frac{p}{q}$ with $q \geq 1$, and suppose $\frac{p^2}{q^2} = n$, an integer, so $p^2 = nq^2$. If
$q > 1$, some prime $\ell$ divides $q$; then $\ell$ divides $p^2$, and a prime dividing a product divides one of the
factors, so $\ell$ divides $p$. But then $\frac{p}{q}$ was not in lowest terms. So $q = 1$, and $\sqrt{\Delta}$ is an
integer. $\square$

This gives a test: **a quadratic with integer coefficients factors over the integers exactly when its discriminant
is a perfect square.** $2x^2 + 5x - 3$ has $\Delta = 25 + 24 = 49 = 7^2$ and factors as $(2x - 1)(x + 3)$;
$2x^2 + 5x - 1$ has $\Delta = 33$, not a square, and does not factor. (A factorisation with rational coefficients can
always be rescaled to one with integer coefficients, by Gauss's lemma, [Chapter 18](18-Factorization-in-Rings.md).)
As a by-product, the theorem shows that $\sqrt{2}$ is irrational: $x^2 - 2 = 0$ has $\Delta = 8$, not a perfect
square.

## 5.5 Vertex form and maximum and minimum problems

Completing the square on $ax^2 + bx + c$ itself, without setting it equal to zero, gives

$$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a} = a(x - h)^2 + k,$$

where

$$h = -\frac{b}{2a}, \qquad k = c - \frac{b^2}{4a}.$$

This is **vertex form**. Its graph is the graph of $y = ax^2$ moved $h$ units right and $k$ units up, so its vertex
is $(h, k)$ and its axis is the line $x = h$. Notice that $k$ is just the value of the quadratic at $x = h$, which is
often the easiest way to find it.

**Example 9.** Put $y = 2x^2 - 12x + 13$ in vertex form.

$2x^2 - 12x + 13 = 2(x^2 - 6x) + 13 = 2\big((x - 3)^2 - 9\big) + 13 = 2(x - 3)^2 - 5$. The vertex is $(3, -5)$, the
lowest point, since $a = 2 > 0$. **Check:** $h = -\frac{-12}{4} = 3$ and $y(3) = 18 - 36 + 13 = -5$. ✓

**Theorem (extreme value of a quadratic).** If $a > 0$, the quadratic $a(x - h)^2 + k$ has minimum value $k$, reached
only at $x = h$. If $a < 0$, it has maximum value $k$, reached only at $x = h$.

*Proof.* $(x - h)^2 \geq 0$, with equality only when $x = h$. If $a > 0$, multiplying keeps the direction:
$a(x - h)^2 \geq 0$, so the quadratic is at least $k$, with equality only at $h$. If $a < 0$ the inequality flips
([Chapter 2](02-Equations-and-Inequalities.md), Rule 3), and $k$ is the maximum. $\square$

No calculus is needed. Here are the classic problems.

**Example 10 (a fence).** With 100 m of fence, what rectangle encloses the largest area?

If one side is $x$, the other is $50 - x$, and the area is $A = x(50 - x) = -x^2 + 50x = -(x - 25)^2 + 625$. The
maximum is 625 m², at $x = 25$: a square.

**Example 11 (a fence against a wall).** Now one side is a long straight wall, and the 100 m of fence makes the other
three sides. With the two sides perpendicular to the wall of length $x$, the side parallel to it is $100 - 2x$, and
$A = x(100 - 2x) = -2x^2 + 100x = -2(x - 25)^2 + 1250$. Best: $x = 25$, giving a 25 m by 50 m rectangle of
1250 m², twice the area of Example 10. The wall does a quarter of the work.

**Example 12 (a throw on Mars).** A ball is thrown straight up at 12 m/s from a height of 1.5 m. How high does it go
on Earth, and on Mars?

$h(t) = 1.5 + 12t - \frac{1}{2}gt^2$. The vertex is at $t = -\frac{12}{2 \cdot (-g/2)} = \frac{12}{g}$, and the height
there is $1.5 + 12 \cdot \frac{12}{g} - \frac{g}{2} \cdot \frac{144}{g^2} = 1.5 + \frac{144}{2g}$.

- Earth, $g = 9.81$: the top is reached after about 1.22 s, at about $1.5 + 7.34 = 8.84$ m.
- Mars, $g = 3.71$: the top is reached after about 3.23 s, at about $1.5 + 19.41 = 20.91$ m.

In general the rise is $\frac{v^2}{2g}$, so it is inversely proportional to $g$: the same throw rises about
$\frac{9.81}{3.71} \approx 2.6$ times as high on Mars, and stays up about 2.6 times as long.

**Example 13 (pricing).** A theatre charges 20 dollars a seat and sells 300 seats. Each 1 dollar rise in price loses
10 sales. What price maximises revenue?

With a rise of $n$ dollars, revenue is $R = (20 + n)(300 - 10n) = 6000 + 100n - 10n^2 = -10(n - 5)^2 + 6250$. The best
price is 25 dollars, selling 250 seats for 6250 dollars.

### The arithmetic-geometric mean inequality

Example 10 is a case of a famous inequality. For any real numbers $x, y$,

$$\left(\frac{x + y}{2}\right)^2 - xy = \frac{x^2 + 2xy + y^2 - 4xy}{4} = \left(\frac{x - y}{2}\right)^2 \geq 0.$$

So $xy \leq \left(\frac{x + y}{2}\right)^2$, with equality only when $x = y$. **Of all pairs with a given sum, the
product is largest when the two are equal.** For positive $x, y$, taking square roots gives
$\sqrt{xy} \leq \frac{x + y}{2}$: the **geometric mean** is at most the **arithmetic mean**. The fence problem is the
case $x + y = 50$.

### Quadratic inequalities

To solve $ax^2 + bx + c > 0$ (or $<$, $\leq$, $\geq$), find the roots, then use the shape of the parabola.

**Example 14.** $x^2 - 5x + 6 < 0$ means $(x - 2)(x - 3) < 0$. The parabola opens upwards and crosses the axis at 2
and 3, so it is below the axis between them: $2 < x < 3$.

**Example 15.** $2x^2 + x - 3 \geq 0$ means $(2x + 3)(x - 1) \geq 0$: outside or at the roots,
$x \leq -\frac{3}{2}$ or $x \geq 1$.

**Example 16.** $x^2 + x + 1 > 0$ for **every** $x$: the discriminant is $1 - 4 = -3 < 0$, so the parabola never meets
the axis, and since it opens upwards it is always above. In vertex form,
$x^2 + x + 1 = \left(x + \frac{1}{2}\right)^2 + \frac{3}{4} \geq \frac{3}{4}$.

## 5.6 The sum and product of the roots

*Level: intermediate.*

**Theorem (Vieta's formulas for quadratics).** If $r_1$ and $r_2$ are the roots of $ax^2 + bx + c = 0$ (counted
twice if repeated), then

$$r_1 + r_2 = -\frac{b}{a}, \qquad r_1r_2 = \frac{c}{a}.$$

*Proof 1.* If the roots are $r_1$ and $r_2$, the quadratic factors as $a(x - r_1)(x - r_2)$ (by the factor theorem of
[Chapter 4](04-Polynomials-and-Factoring.md), applied twice). Expanding,
$a(x - r_1)(x - r_2) = ax^2 - a(r_1 + r_2)x + ar_1r_2$. Comparing with $ax^2 + bx + c$: $b = -a(r_1 + r_2)$ and
$c = ar_1r_2$.

*Proof 2.* Add and multiply the two roots from the formula. The sum is $\frac{-2b}{2a} = -\frac{b}{a}$, since the
square roots cancel. The product is a difference of squares:
$\frac{(-b)^2 - (\sqrt{\Delta})^2}{4a^2} = \frac{b^2 - (b^2 - 4ac)}{4a^2} = \frac{c}{a}$. $\square$

For a monic quadratic $x^2 + px + q$, the roots add up to $-p$ and multiply to $q$. That is exactly the "product $c$,
sum $b$" search of factoring (4.4), seen from the other side. François Viète stated such relations in the 1590s;
[Chapter 10](10-Roots-and-Coefficients.md) extends them to every degree.

**Example 17 (building a quadratic).** Find a quadratic with integer coefficients whose roots are $2 \pm \sqrt{3}$.

Sum $4$, product $(2 + \sqrt{3})(2 - \sqrt{3}) = 4 - 3 = 1$. So $x^2 - 4x + 1$.

**Example 18 (two numbers).** Find two numbers whose sum is 10 and product 21.

They are the roots of $x^2 - 10x + 21 = 0$, that is, $(x - 3)(x - 7) = 0$: 3 and 7. Every "sum and product" problem
is a quadratic in disguise.

**Example 19 (without solving).** Let $\alpha$ and $\beta$ be the roots of $x^2 - 7x + 3 = 0$, so
$\alpha + \beta = 7$ and $\alpha\beta = 3$. Then, without finding $\alpha$ and $\beta$:

- $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 49 - 6 = 43$;
- $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{7}{3}$;
- $(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta = 49 - 12 = 37$ (the discriminant, for a monic quadratic);
- $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = 343 - 63 = 280$.

And the quadratic whose roots are $\alpha^2$ and $\beta^2$ has sum 43 and product $\alpha^2\beta^2 = 9$: it is
$x^2 - 43x + 9$.

These expressions are all **symmetric**: they do not change if $\alpha$ and $\beta$ are swapped. That is why they can
be written in terms of $\alpha + \beta$ and $\alpha\beta$. That every symmetric polynomial in the roots can be so
written is a theorem ([Chapter 10](10-Roots-and-Coefficients.md)), and the study of what happens when the roots are
**not** treated symmetrically is the beginning of Galois theory ([Chapter 20](20-Galois-Theory.md)).

**Example 20 (the other root).** One root of $x^2 - 4x + 3 = 0$ is plainly 1 (the coefficients add to 0). The product
of the roots is 3, so the other is 3.

## 5.7 Equations that reduce to quadratics

*Level: intermediate to advanced.*

Many equations that are not quadratic become quadratic after a substitution. The skill is to spot the hidden
quadratic, solve it, and then **undo the substitution**, checking that each answer is allowed.

**Example 21 (biquadratic).** Solve $x^4 - 13x^2 + 36 = 0$.

Put $u = x^2$: $u^2 - 13u + 36 = 0$, so $(u - 4)(u - 9) = 0$ and $u = 4$ or $9$. Then $x^2 = 4$ or $x^2 = 9$:
$x = \pm 2, \pm 3$. Four roots, as a quartic may have.

**Example 22 (square roots).** Solve $x - 5\sqrt{x} + 6 = 0$.

Put $u = \sqrt{x}$ (so $u \geq 0$ and $x = u^2$): $u^2 - 5u + 6 = 0$, so $u = 2$ or $3$, both allowed. Then $x = 4$ or
$9$. **Check:** $4 - 10 + 6 = 0$ ✓ and $9 - 15 + 6 = 0$ ✓.

**Example 23 (exponentials).** Solve $4^x - 6 \cdot 2^x + 8 = 0$.

Since $4^x = (2^x)^2$, put $u = 2^x$ (which is always positive): $u^2 - 6u + 8 = 0$, so $u = 2$ or $4$, and $x = 1$
or $2$. **Check** $x = 2$: $16 - 24 + 8 = 0$. ✓

**Example 24 (a radical equation).** Solve $\sqrt{2x + 3} = x$.

Square: $2x + 3 = x^2$, so $x^2 - 2x - 3 = 0$ and $x = 3$ or $x = -1$. Squaring is one-way
([Chapter 2](02-Equations-and-Inequalities.md), 2.7), so check: $\sqrt{9} = 3$ ✓, but $\sqrt{1} = 1 \neq -1$ ✗.
Only $x = 3$.

**Example 25 (a rational equation).** Solve $\dfrac{1}{x} + \dfrac{1}{x + 2} = \dfrac{5}{12}$.

Multiply by $12x(x + 2)$, with $x \neq 0, -2$: $12(x + 2) + 12x = 5x(x + 2)$, so $5x^2 - 14x - 24 = 0$. Then
$\Delta = 196 + 480 = 676 = 26^2$ and $x = \frac{14 \pm 26}{10}$: $x = 4$ or $x = -\frac{6}{5}$. Both are allowed.
**Check** $x = 4$: $\frac{1}{4} + \frac{1}{6} = \frac{5}{12}$ ✓. And $x = -\frac{6}{5}$:
$-\frac{5}{6} + \frac{5}{4} = \frac{5}{12}$ ✓.

**Example 26 (a repeated block).** Solve $(x^2 - 3x)^2 - 2(x^2 - 3x) - 8 = 0$.

Put $u = x^2 - 3x$: $u^2 - 2u - 8 = 0$, so $u = 4$ or $u = -2$. Then $x^2 - 3x - 4 = 0$ gives $x = 4, -1$, and
$x^2 - 3x + 2 = 0$ gives $x = 1, 2$.

**Example 27 (a palindromic quartic).** Solve $x^4 - 5x^3 + 6x^2 - 5x + 1 = 0$.

The coefficients read the same backwards (1, $-5$, 6, $-5$, 1). Since $x = 0$ is not a root, divide by $x^2$:

$$x^2 - 5x + 6 - \frac{5}{x} + \frac{1}{x^2} = 0, \qquad\text{that is,}\qquad \left(x^2 + \frac{1}{x^2}\right) - 5\left(x + \frac{1}{x}\right) + 6 = 0.$$

Put $t = x + \frac{1}{x}$. Then $t^2 = x^2 + 2 + \frac{1}{x^2}$, so $x^2 + \frac{1}{x^2} = t^2 - 2$, and the equation
becomes $t^2 - 5t + 4 = 0$: $t = 1$ or $t = 4$. Now undo: $x + \frac{1}{x} = 4$ gives $x^2 - 4x + 1 = 0$, so
$x = 2 \pm \sqrt{3}$; and $x + \frac{1}{x} = 1$ gives $x^2 - x + 1 = 0$, with $\Delta = -3$, so no real roots. The real
solutions are $2 \pm \sqrt{3}$. (Notice that they are reciprocals of each other, as palindromic equations force.)

**Example 28 (a system).** Solve $x + y = 7$, $x^2 + y^2 = 25$.

Substitute $y = 7 - x$: $x^2 + (7 - x)^2 = 25$, so $2x^2 - 14x + 24 = 0$, $x^2 - 7x + 12 = 0$, and $x = 3$ or $4$.
The solutions are $(3, 4)$ and $(4, 3)$: the points where a line crosses a circle of radius 5.

**Example 29 (the golden ratio).** Which positive number is one more than its own reciprocal? $x = 1 + \frac{1}{x}$
gives $x^2 - x - 1 = 0$, and the positive root is $\varphi = \frac{1 + \sqrt{5}}{2} \approx 1.618$, the **golden
ratio**. Similarly, if the infinite nested root $\sqrt{2 + \sqrt{2 + \sqrt{2 + \cdots}}}$ has a value $x$, then
$x = \sqrt{2 + x}$, so $x^2 - x - 2 = 0$ and $x = 2$ (the root $-1$ is impossible for a square root). The "if it has a
value" is a real condition; [Chapter 8](08-Sequences-Series-and-Induction.md) explains how to check it.

## 5.8 History: from Babylon to al-Khwarizmi

Quadratic problems are among the oldest mathematics that survive in writing.

**Babylon.** Clay tablets from the Old Babylonian period (roughly 2000 to 1600 BCE), written in cuneiform in the
base-60 number system, contain worked problems that we would call quadratic equations. A well-known tablet in the
British Museum, BM 13901, begins: "I have added the area and the side of my square: 0;45." In base 60, 0;45 means
$\frac{45}{60} = \frac{3}{4}$, so the problem is $x^2 + x = \frac{3}{4}$. The scribe's recipe: take half of 1 (the
coefficient of the side), which is 0;30; square it, 0;15; add it to 0;45, giving 1; its square root is 1; subtract
the 0;30, and the side is 0;30, that is, $\frac{1}{2}$. Step by step this is completing the square:
$\left(x + \frac{1}{2}\right)^2 = \frac{3}{4} + \frac{1}{4} = 1$. Historians such as Jens Høyrup have argued that the
scribes thought of it in terms of cutting and pasting real figures, much like the picture in 5.2. The problems were
stated with particular numbers, without a general formula, and only positive answers were sought.

**Greece.** Euclid's *Elements* (around 300 BCE) contains propositions that solve, in the language of areas and
lengths, problems equivalent to quadratic equations (for instance in Books II and VI), without algebraic symbols.
How far it is right to read these as "geometric algebra" is a long-running debate among historians.

**India.** Brahmagupta, in his *Brahmasphutasiddhanta* of 628 CE, gave a rule in words for solving a quadratic,
equivalent to $x = \frac{\sqrt{4ac + b^2} - b}{2a}$ for $ax^2 + bx = c$, and he worked with negative numbers and zero
as numbers in their own right. Later Indian mathematicians, including Sridhara and Bhaskara II, gave the method of
5.3's second proof and discussed when a problem has two answers.

**Baghdad.** Muhammad ibn Musa al-Khwarizmi, working at the House of Wisdom in Baghdad, wrote his book on *al-jabr
wal-muqabala* around 820 CE. Because he allowed only positive coefficients and positive solutions, he sorted
equations into six types, such as "squares and roots equal numbers" ($x^2 + 10x = 39$), "squares and numbers equal
roots" ($x^2 + 21 = 10x$, for which he gave both solutions, 3 and 7) and "roots and numbers equal squares". For each he
gave a rule in words and a geometric proof by completing a square, as in 5.2. His book was clear, systematic and
widely copied, translated into Latin in the twelfth century, and it gave the subject its name.

**After.** The step to a single formula needed negative numbers to be accepted as coefficients and answers, and
symbols to write it. Both came slowly in Europe, with Viète in the 1590s and Descartes in 1637; Descartes's
*La Géométrie* solves quadratics geometrically but in recognisably modern notation. The roots that are "impossible"
when $\Delta < 0$ were the last to be accepted. The story of how they came to be, through the cubic equation, is
the subject of [Chapter 9](09-Complex-Numbers.md) and [Chapter 11](11-Cubics-and-Quartics.md).

## Check yourself

??? question "1. Solve $x^2 + 8x + 3 = 0$ by completing the square."

    $x^2 + 8x = -3$; add 16: $(x + 4)^2 = 13$; so $x = -4 \pm \sqrt{13}$ (about $-0.394$ and $-7.606$).

??? question "2. Solve $5x^2 - 3x - 2 = 0$ by the formula, then check by factoring."

    $\Delta = 9 + 40 = 49$; $x = \frac{3 \pm 7}{10}$, so $x = 1$ or $x = -\frac{2}{5}$. Factoring:
    $5x^2 - 3x - 2 = (5x + 2)(x - 1)$. ✓

??? question "3. Write $y = -3x^2 + 12x - 7$ in vertex form. What is its largest value?"

    $-3(x^2 - 4x) - 7 = -3\big((x - 2)^2 - 4\big) - 7 = -3(x - 2)^2 + 5$. Since $a = -3 < 0$, the largest value is 5,
    at $x = 2$.

??? question "4. For which $k$ does $x^2 + kx + 9 = 0$ have a double root? Two real roots?"

    $\Delta = k^2 - 36$. A double root when $k^2 = 36$: $k = 6$ (root $-3$) or $k = -6$ (root 3). Two real roots
    when $k^2 > 36$: $k < -6$ or $k > 6$.

??? question "5. The roots of $2x^2 - 6x + 1 = 0$ are $\alpha$ and $\beta$. Find $\alpha^2 + \beta^2$ and $\frac{1}{\alpha^2} + \frac{1}{\beta^2}$."

    $\alpha + \beta = 3$ and $\alpha\beta = \frac{1}{2}$. So $\alpha^2 + \beta^2 = 9 - 1 = 8$, and
    $\frac{1}{\alpha^2} + \frac{1}{\beta^2} = \frac{\alpha^2 + \beta^2}{(\alpha\beta)^2} = \frac{8}{1/4} = 32$.

??? question "6. Solve $x^4 - 10x^2 + 9 = 0$."

    With $u = x^2$: $u^2 - 10u + 9 = (u - 1)(u - 9) = 0$, so $x^2 = 1$ or $9$, and $x = \pm 1, \pm 3$.

??? question "7. Solve $\sqrt{x + 7} = x - 5$."

    Square: $x + 7 = x^2 - 10x + 25$, so $x^2 - 11x + 18 = 0$, $(x - 2)(x - 9) = 0$. Check: $x = 9$ gives
    $\sqrt{16} = 4 = 9 - 5$ ✓; $x = 2$ gives $\sqrt{9} = 3$ but $2 - 5 = -3$ ✗. Only $x = 9$.

??? question "8. A rectangle has perimeter 34 cm and diagonal 13 cm. Find its sides."

    With sides $x, y$: $x + y = 17$ and $x^2 + y^2 = 169$. Then $2xy = (x + y)^2 - (x^2 + y^2) = 289 - 169 = 120$,
    so $xy = 60$, and $x, y$ are the roots of $t^2 - 17t + 60 = 0$: 5 cm and 12 cm. Check: $25 + 144 = 169$. ✓

??? question "9. A ball is thrown straight up at $v$ m/s. Show that it rises $\frac{v^2}{2g}$ metres, and find this for $v = 10$ on Earth and on Mars."

    Height gained $h(t) = vt - \frac{g}{2}t^2 = -\frac{g}{2}\left(t - \frac{v}{g}\right)^2 + \frac{v^2}{2g}$ (complete
    the square). The maximum is $\frac{v^2}{2g}$ at $t = \frac{v}{g}$. For $v = 10$: Earth
    $\frac{100}{19.62} \approx 5.10$ m; Mars $\frac{100}{7.42} \approx 13.48$ m.

??? question "10. Prove that if $a$ and $c$ have opposite signs, then $ax^2 + bx + c = 0$ has two real roots, one positive and one negative."

    $ac < 0$, so $-4ac > 0$ and $\Delta = b^2 - 4ac > 0$: two different real roots. Their product $\frac{c}{a}$ is
    negative, so one is positive and the other negative.

??? question "11. Without solving, decide whether $6x^2 - x - 15$ factors over the integers, and if so factor it."

    $\Delta = 1 + 360 = 361 = 19^2$, a perfect square, so it factors. Roots $\frac{1 \pm 19}{12}$: $\frac{5}{3}$
    and $-\frac{3}{2}$. So $6x^2 - x - 15 = (3x - 5)(2x + 3)$. Check: $6x^2 + 9x - 10x - 15$. ✓

??? question "12. Solve $(x^2 - 3x)^2 - 2(x^2 - 3x) - 8 = 0$ in a second way: expand and look for roots among small integers."

    Expanding: $x^4 - 6x^3 + 9x^2 - 2x^2 + 6x - 8 = x^4 - 6x^3 + 7x^2 + 6x - 8$. Trying $x = 1$: $1 - 6 + 7 + 6 - 8 = 0$;
    $x = -1$: $1 + 6 + 7 - 6 - 8 = 0$; $x = 2$: $16 - 48 + 28 + 12 - 8 = 0$; $x = 4$: $256 - 384 + 112 + 24 - 8 = 0$.
    Four roots for a quartic, so these are all: $-1, 1, 2, 4$, matching Example 26. The substitution was much
    quicker.

## What you learned

- The graph of $ax^2 + bx + c$ is a parabola with a vertex and a vertical axis of symmetry; it is the set of points
  equidistant from a focus and a directrix, and it reflects parallel rays to its focus.
- Completing the square, $x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \frac{b^2}{4}$, solves every quadratic; the
  picture is four thousand years old.
- The quadratic formula is completing the square done once in general; in floating point, compute one root
  without cancellation and the other from the product.
- The discriminant $b^2 - 4ac$ gives two, one or no real roots; with integer coefficients, the roots are rational
  exactly when it is a perfect square.
- Vertex form $a(x - h)^2 + k$ gives maxima and minima without calculus, and proves the AM-GM inequality.
- The roots have sum $-\frac{b}{a}$ and product $\frac{c}{a}$, so symmetric expressions in them can be found
  without solving.
- A substitution turns many equations into quadratics; undo it and check every candidate.

**Next:** [Chapter 6](06-Functions.md), the idea that ties all these graphs together: functions, their graphs,
transformations and inverses.

## Further reading

- Jens Høyrup, *Lengths, Widths, Surfaces: A Portrait of Old Babylonian Algebra and Its Kin*, Springer, 2002.
- Eleanor Robson, *Mathematics in Ancient Iraq: A Social History*, Princeton University Press, 2008.
- Jacques Sesiano, *An Introduction to the History of Algebra: Solving Equations from Mesopotamian Times to the
  Renaissance*, American Mathematical Society, 2009.
- Frederic Rosen (translator), *The Algebra of Mohammed ben Musa*, 1831.
- I. M. Gelfand and A. Shen, *Algebra*, Birkhäuser, 1993, the chapter on quadratic equations.
- George E. Forsythe, *How Do You Solve a Quadratic Equation?*, Stanford University Computer Science technical
  report, 1966; and Nicholas J. Higham, *Accuracy and Stability of Numerical Algorithms*, 2nd edition, SIAM, 2002.
- On this site: the Topics lessons [Functions](../../topics/algebra/level-7/04-functions.md),
  [Transformations](../../topics/algebra/level-7/05-transformations.md) and
  [Polynomial inequalities](../../topics/algebra/level-8/02-polynomial-inequalities.md); and the U of T guide
  [MAT137 Unit 1: Logic, Sets and Proofs](../../uoft/MAT137/unit01.md) for the style of proof used in 5.4.
