---
title: "The complex plane"
---

# The complex plane

*Numbers · level 7, lesson 4 of 6*

## A question to start

Take the complex number $3 + i$ and multiply it by $i$. Multiply the answer by $i$ again, and again:

$$3 + i \;\xrightarrow{\times i}\; -1 + 3i \;\xrightarrow{\times i}\; -3 - i \;\xrightarrow{\times i}\; 1 - 3i \;\xrightarrow{\times i}\; 3 + i$$

Now plot these four as points, using the real part across and the imaginary part up: $(3, 1)$, $(-1, 3)$, $(-3, -1)$,
$(1, -3)$. They are the four corners of a perfect **square** centred at 0. Multiplying by $i$, a piece of pure
algebra, has turned the point round by a quarter turn each time. This lesson explains why, and shows that every
operation on complex numbers is also a movement in a plane.

## The idea

### A plane of numbers

The real numbers fill a line. A complex number $a + bi$ needs **two** real numbers, so it needs a **plane**: go $a$
across and $b$ up. This picture is called the **complex plane** (or an **Argand diagram**, after Jean-Robert Argand,
who published it in 1806; Caspar Wessel had described the same idea in 1799).

- The horizontal axis is the **real axis**. The real numbers live on it.
- The vertical axis is the **imaginary axis**. The imaginary numbers $bi$ live on it.
- The number 0 is the origin, where the axes cross.

It is often useful to think of $z$ not just as a point, but as an **arrow** from 0 to that point. An arrow with a
length and a direction is called a **vector**.

### Adding is moving

Adding complex numbers adds the real parts and the imaginary parts separately, which is exactly how you put two
arrows **nose to tail**. To find $z + w$, start at 0, follow the arrow $z$, then from where it ends follow the arrow
$w$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 230" role="img" aria-label="The complex plane with arrows z equals 3 plus i and w equals 1 plus 2i from zero; copies of each placed at the end of the other make a parallelogram whose diagonal is z plus w equals 4 plus 3i">
  <g stroke="currentColor" stroke-width="1" opacity="0.2">
    <line x1="80" y1="30" x2="80" y2="200"/><line x1="120" y1="30" x2="120" y2="200"/><line x1="160" y1="30" x2="160" y2="200"/><line x1="200" y1="30" x2="200" y2="200"/><line x1="240" y1="30" x2="240" y2="200"/>
    <line x1="20" y1="150" x2="280" y2="150"/><line x1="20" y1="110" x2="280" y2="110"/><line x1="20" y1="70" x2="280" y2="70"/>
  </g>
  <line x1="20" y1="190" x2="290" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="215" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="190" x2="160" y2="150" stroke="#eea66f" stroke-width="3"/>
  <line x1="40" y1="190" x2="80" y2="110" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="160" y1="150" x2="200" y2="70" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="80" y1="110" x2="200" y2="70" stroke="#eea66f" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="40" y1="190" x2="200" y2="70" stroke="#7ccf9a" stroke-width="3"/>
  <circle cx="160" cy="150" r="5" fill="#eea66f"/>
  <circle cx="80" cy="110" r="5" fill="#9cc9ea"/>
  <circle cx="200" cy="70" r="5" fill="#7ccf9a"/>
  <g font-size="13" fill="currentColor">
    <text x="166" y="166">z = 3 + i</text>
    <text x="22" y="100">w = 1 + 2i</text>
    <text x="206" y="62">z + w = 4 + 3i</text>
    <text x="262" y="206">real</text>
    <text x="46" y="28">imaginary</text>
  </g>
</svg>
</div>

Going $z$ then $w$, or $w$ then $z$, ends at the same place: the two routes are the two sides of a
**parallelogram**, and $z + w$ is its diagonal. This is the **parallelogram rule** for adding vectors, and it is why
complex numbers are used to add forces and velocities.

**Subtracting.** $w - z$ is the number you add to $z$ to reach $w$. As an arrow, it goes **from $z$ to $w$**. So the
**distance between** two complex numbers $z$ and $w$ is the length of $w - z$.

### The modulus: distance from 0

The **modulus** of $z = a + bi$, written $|z|$, is the length of its arrow, the distance from 0 to the point
$(a, b)$. The arrow is the long side of a right triangle with legs $a$ and $b$, so by Pythagoras

$$|a + bi| = \sqrt{a^2 + b^2}$$

For a real number, $|a + 0i| = \sqrt{a^2}$, which is the usual absolute value: $|-5| = 5$. So the modulus is the
absolute value, extended to the plane. Comparing with the last lesson, $z\,\bar z = a^2 + b^2$, so

$$|z|^2 = z\,\bar z$$

**The distance between $z$ and $w$** is $|w - z|$. For $z = 1 + 2i$ and $w = 4 - 2i$: $w - z = 3 - 4i$, and the
distance is $\sqrt{9 + 16} = 5$. This is the distance formula from coordinate geometry, in new clothes.

**The modulus of a product is the product of the moduli.** For any $z$ and $w$:

$$|zw| = |z|\,|w|$$

Proof, using $|z|^2 = z\bar z$ and $\overline{zw} = \bar z\,\bar w$ from the last lesson:

$$|zw|^2 = (zw)\,\overline{(zw)} = z\,w\,\bar z\,\bar w = (z\,\bar z)(w\,\bar w) = |z|^2\,|w|^2$$

Both sides are lengths (not negative), so taking square roots gives $|zw| = |z|\,|w|$. ∎

Written out with $z = a + bi$ and $w = c + di$, this says something surprising about ordinary whole numbers:

$$(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2$$

**A sum of two squares times a sum of two squares is again a sum of two squares.** For example $5 = 1^2 + 2^2$ and
$13 = 2^2 + 3^2$, and $(1 + 2i)(2 + 3i) = -4 + 7i$, so $65 = 4^2 + 7^2$. Brahmagupta knew this identity in the 600s,
long before complex numbers.

### Simple movements

Each basic operation moves the point in a simple way.

| Operation on $z = a + bi$ | Result | Movement |
| --- | --- | --- |
| $z + w$ | add parts | slide by the arrow $w$ |
| $\bar z$ | $a - bi$ | reflect in the real axis |
| $-z$ | $-a - bi$ | half turn about 0 |
| $kz$ ($k > 0$ real) | $ka + kbi$ | stretch away from 0 by factor $k$ |
| $iz$ | $-b + ai$ | quarter turn anticlockwise about 0 |

### Multiplying by $i$ is a quarter turn

Why does $iz$ turn $z$ by a quarter turn? Work it out: $i(a + bi) = ai + bi^2 = -b + ai$. So the point $(a, b)$
moves to $(-b, a)$. Two checks:

1. **Same length:** $\sqrt{(-b)^2 + a^2} = \sqrt{a^2 + b^2}$. (Or: $|iz| = |i|\,|z| = 1 \times |z|$.)
2. **At right angles:** the arrow to $(a, b)$ has slope $\dfrac{b}{a}$ and the arrow to $(-b, a)$ has slope
   $\dfrac{a}{-b}$. The product of the slopes is $-1$, which is the test for perpendicular lines. (If $a$ or $b$ is 0,
   one arrow is on an axis and the other on the other axis, also perpendicular.)

And the turn is **anticlockwise**: $1$ (pointing right) goes to $i$ (pointing up). So multiplying by $i$ is a
rotation of 90° anticlockwise about 0.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 300" role="img" aria-label="The points 3 plus i, minus 1 plus 3i, minus 3 minus i and 1 minus 3i, each a quarter turn from the last, forming a square centred at zero">
  <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="280" x2="150" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="240,120 120,60 60,180 180,240" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="150" y1="150" x2="240" y2="120" stroke="#eea66f" stroke-width="3"/>
  <line x1="150" y1="150" x2="120" y2="60" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="150" y1="150" x2="60" y2="180" stroke="#eea66f" stroke-width="3"/>
  <line x1="150" y1="150" x2="180" y2="240" stroke="#7ccf9a" stroke-width="3"/>
  <circle cx="240" cy="120" r="5" fill="#eea66f"/>
  <circle cx="120" cy="60" r="5" fill="#7ccf9a"/>
  <circle cx="60" cy="180" r="5" fill="#eea66f"/>
  <circle cx="180" cy="240" r="5" fill="#7ccf9a"/>
  <path d="M 197 134 A 50 50 0 0 0 134 103" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" fill="currentColor">
    <text x="232" y="108">3 + i</text>
    <text x="78" y="50">−1 + 3i</text>
    <text x="14" y="200">−3 − i</text>
    <text x="188" y="258">1 − 3i</text>
    <text x="176" y="100">× i</text>
  </g>
</svg>
</div>

This is the deep reason why $i^2 = -1$: two quarter turns make a half turn, and a half turn takes 1 to $-1$. The
mysterious rule from lesson 2 is simply the geometry of turning.

Multiplying by a general complex number does a turn **and** a stretch at the same time. For example
$(2 + i)(1 + i) = 1 + 3i$: the length goes from $\sqrt5$ to $\sqrt{10}$ (stretched by $|1 + i| = \sqrt2$) and the
arrow turns by 45°. Level 8 makes this exact: lengths multiply, angles add.

### Circles

The set of all $z$ with $|z - c| = r$ is all points at distance $r$ from the point $c$: a **circle** with centre $c$
and radius $r$. And $|z - c| < r$ is the inside of that circle (a **disc**). This is a compact way to describe
regions of the plane, and the real-number version of it, $|x - c| < r$, is the subject of
[lesson 6](06-intervals-absolute-value.md).

<figure class="play" data-play="complex" data-mode="times"><span class="ai-tag">AI-created</span><figcaption><b>The complex plane.</b> a goes across, b goes up.</figcaption></figure>

## Worked examples

**1. Modulus.** Find $|3 + 4i|$, $|-5 + 12i|$, $|1 - 2i|$ and $|(3 + 4i)(1 - 2i)|$.

1. $|3 + 4i| = \sqrt{9 + 16} = 5$.
2. $|-5 + 12i| = \sqrt{25 + 144} = \sqrt{169} = 13$.
3. $|1 - 2i| = \sqrt{1 + 4} = \sqrt5$.
4. Without multiplying: $|(3 + 4i)(1 - 2i)| = 5\sqrt5$. Check by multiplying: $(3 + 4i)(1 - 2i) = 3 - 6i + 4i - 8i^2 =
   11 - 2i$, and $\sqrt{121 + 4} = \sqrt{125} = 5\sqrt5$. ✓

**2. Distance.** How far apart are $-2 + i$ and $4 - 7i$?

$w - z = (4 - (-2)) + (-7 - 1)i = 6 - 8i$, so the distance is $\sqrt{36 + 64} = 10$.

**3. The fourth corner.** A parallelogram has corners $0$, $2 + i$ and $1 + 3i$, with 0 opposite the missing corner.
Find it.

The missing corner is the end of the diagonal from 0, so it is the sum: $(2 + i) + (1 + 3i) = 3 + 4i$.

**4. A square from one corner.** A square is centred at 0 and one corner is $2 + 5i$. Find the other three corners.

Each corner is a quarter turn of the last, so multiply by $i$ repeatedly:

1. $i(2 + 5i) = 2i + 5i^2 = -5 + 2i$.
2. $i(-5 + 2i) = -5i + 2i^2 = -2 - 5i$. (This is $-(2 + 5i)$, the half turn.)
3. $i(-2 - 5i) = -2i - 5i^2 = 5 - 2i$.

**5. Describe a set.** Describe all $z$ with $|z - 1 - i| = 2$, and all $z$ with $|z - 3| = |z + 1|$.

1. $|z - (1 + i)| = 2$: the points at distance 2 from $1 + i$, a **circle** with centre $(1, 1)$ and radius 2.
2. $|z - 3| = |z - (-1)|$: the points the same distance from $3$ and from $-1$. That is the perpendicular bisector of
   the segment from $-1$ to $3$: the **vertical line** through $1$, all numbers $1 + bi$.

## Try it

1. Plot $2 + 3i$, its conjugate, its negative, and $i$ times it. What shape do the four points make?
2. Find $|6 - 8i|$, $|-7i|$ and $|\tfrac35 + \tfrac45 i|$.
3. Find the distance between $1 + 5i$ and $-4 - 7i$.
4. Without multiplying out, find $|(1 + i)^{10}|$.
5. Multiply $4 - i$ by $-i$. What movement does multiplying by $-i$ do? Explain using $-i = i^3$.
6. Write $10 = 1^2 + 3^2$ and $13 = 2^2 + 3^2$. Use complex numbers to write $130$ as a sum of two squares.
7. Describe the set of all $z$ with $|z + 2i| \le 3$.
8. Show that $|\bar z| = |z|$ and $|z + w|^2 = |z|^2 + |w|^2 + z\bar w + \bar z w$. (Hint for the second: write
   $|z + w|^2 = (z + w)\overline{(z + w)}$.)

??? note "Answers"
    1. $2 + 3i$ at $(2, 3)$; conjugate $2 - 3i$ at $(2, -3)$; negative $-2 - 3i$ at $(-2, -3)$; $i(2 + 3i) = -3 + 2i$ at
       $(-3, 2)$. The first three are three corners of a rectangle (with $-2 + 3i$ it would be complete). The point
       $-3 + 2i$ is $2 + 3i$ turned a quarter turn. All four are $\sqrt{13}$ from 0, so they lie on one circle.
    2. $\sqrt{36 + 64} = 10$. $|-7i| = 7$. $\sqrt{\tfrac{9}{25} + \tfrac{16}{25}} = 1$.
    3. $(-4 - 7i) - (1 + 5i) = -5 - 12i$, distance $\sqrt{25 + 144} = 13$.
    4. $|1 + i| = \sqrt2$, and moduli multiply, so $|(1 + i)^{10}| = (\sqrt2)^{10} = 2^5 = 32$.
    5. $-i(4 - i) = -4i + i^2 = -1 - 4i$. Multiplying by $-i = i^3$ is three quarter turns anticlockwise, which is the
       same as one quarter turn **clockwise**. Check: $(4, -1)$ to $(-1, -4)$ is a clockwise quarter turn.
    6. $(1 + 3i)(2 + 3i) = 2 + 3i + 6i + 9i^2 = -7 + 9i$, so $130 = 7^2 + 9^2 = 49 + 81$. ✓ (Using the conjugate
       $(1 + 3i)(2 - 3i) = 2 - 3i + 6i + 9 = 11 + 3i$ gives another way: $130 = 11^2 + 3^2 = 121 + 9$. ✓)
    7. $|z - (-2i)| \le 3$: all points at distance at most 3 from $-2i$, the point $(0, -2)$. A filled disc with
       centre $(0, -2)$ and radius 3, including its edge.
    8. $\bar z = a - bi$ has modulus $\sqrt{a^2 + (-b)^2} = |z|$. For the second,
       $(z + w)(\bar z + \bar w) = z\bar z + z\bar w + w\bar z + w\bar w = |z|^2 + |w|^2 + z\bar w + \bar z w$. (The last
       two terms are conjugates of each other, so their sum is real: $2\operatorname{Re}(z\bar w)$.)

## Common mistake

**Taking the modulus of each part separately.** $|3 - 4i|$ is not $3 + 4$ or $3 - 4$. It is a length, found by
Pythagoras: $\sqrt{3^2 + 4^2} = 5$. And it is never negative.

**Thinking $|z + w| = |z| + |w|$.** Lengths of arrows do not simply add, any more than two sides of a triangle add
to the third. $|3| + |4i| = 7$, but $|3 + 4i| = 5$. They are equal only when the arrows point the same way. In
lesson 6 this becomes the **triangle inequality**, $|z + w| \le |z| + |w|$.

## Where it leads

- Back: [Complex numbers a + bi](03-complex-arithmetic.md) · Next: [Every quadratic has roots](05-every-quadratic.md).
- [Level 7 page](index.md) · [Numbers topic page](../index.md)
- Turning and stretching in general, as **length and angle**, is the first lesson of [level 8](../level-8/index.md).
- Vectors, coordinates, Pythagoras and rotations: [Geometry](../../geometry/index.md).
- Which numbers are sums of two squares, the question behind the identity above: [Number theory](../../number-theory/index.md).
- On the U of T shelf, lengths defined from $z\bar z$ grow into inner products:
  [MAT247 Unit 1 (inner product spaces)](../../../uoft/MAT247H1/unit01.md).
