---
title: "Distance and midpoint"
---

# Distance and midpoint

*Geometry · level 6, lesson 3 of 6*

## A question to start

Two friends live at the points $(1, 2)$ and $(7, 10)$ on a town map whose grid squares are 1 km wide. They want to
meet exactly halfway, and they want to know how far apart they are, as the crow flies.

You could draw the map carefully and use a ruler. But the coordinates already know the answer. The halfway point is
found by **averaging**: $(4, 6)$. The distance is found by **Pythagoras**: exactly 10 km. In this lesson you will see
why both rules work and use them to test shapes, check circles and find hidden points, all without drawing a single
thing to scale.

## The idea

### Distance is Pythagoras on a grid

Take two points, $A(x_1, y_1)$ and $B(x_2, y_2)$. (The small numbers below the letters are **subscripts**: $x_1$ is
just a name, "the $x$ of the first point".) Draw a horizontal line from $A$ and a vertical line from $B$. They meet
at a corner $C$ with a right angle, because grid lines are perpendicular. Now $AB$ is the hypotenuse of a right
triangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 210 220" role="img" aria-label="A grid with A at (1, 2) and B at (7, 10); a horizontal leg of 6 and a vertical leg of 8 meet at a right angle, and the hypotenuse AB has length 10; the midpoint M at (4, 6) sits halfway along AB">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.35"><line x1="30" y1="20" x2="30" y2="200"/><line x1="48" y1="20" x2="48" y2="200"/><line x1="66" y1="20" x2="66" y2="200"/><line x1="84" y1="20" x2="84" y2="200"/><line x1="102" y1="20" x2="102" y2="200"/><line x1="120" y1="20" x2="120" y2="200"/><line x1="138" y1="20" x2="138" y2="200"/><line x1="156" y1="20" x2="156" y2="200"/><line x1="174" y1="20" x2="174" y2="200"/><line x1="30" y1="200" x2="174" y2="200"/><line x1="30" y1="182" x2="174" y2="182"/><line x1="30" y1="164" x2="174" y2="164"/><line x1="30" y1="146" x2="174" y2="146"/><line x1="30" y1="128" x2="174" y2="128"/><line x1="30" y1="110" x2="174" y2="110"/><line x1="30" y1="92" x2="174" y2="92"/><line x1="30" y1="74" x2="174" y2="74"/><line x1="30" y1="56" x2="174" y2="56"/><line x1="30" y1="38" x2="174" y2="38"/><line x1="30" y1="20" x2="174" y2="20"/></g>
  <g stroke="currentColor" stroke-width="1.6"><line x1="30" y1="200" x2="180" y2="200"/><line x1="30" y1="200" x2="30" y2="14"/></g>
  <polygon points="48,164 156,164 156,20" fill="#9cc9ea" fill-opacity="0.4" stroke="none"/>
  <line x1="48" y1="164" x2="156" y2="164" stroke="#eea66f" stroke-width="3"/>
  <line x1="156" y1="164" x2="156" y2="20" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="48" y1="164" x2="156" y2="20" stroke="currentColor" stroke-width="2.5"/>
  <g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"><line x1="102" y1="92" x2="102" y2="164"/><line x1="102" y1="92" x2="156" y2="92"/></g>
  <rect x="146" y="154" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor"><circle cx="48" cy="164" r="3.5"/><circle cx="156" cy="20" r="3.5"/><circle cx="102" cy="92" r="4"/></g>
  <g font-size="12" fill="currentColor">
    <text x="20" y="160">A(1, 2)</text><text x="112" y="16">B(7, 10)</text><text x="64" y="88">M(4, 6)</text>
    <text x="96" y="180">6</text><text x="162" y="96">8</text><text x="160" y="170">C</text>
  </g>
</svg>
</div>

The horizontal leg is the change in $x$, $x_2 - x_1$. The vertical leg is the change in $y$, $y_2 - y_1$. So

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

For the friends: across $7 - 1 = 6$, up $10 - 2 = 8$, and $d = \sqrt{36 + 64} = \sqrt{100} = 10$ km.

**Negative steps do no harm.** If you go from $B$ to $A$ instead, the steps are $-6$ and $-8$. Squaring removes the
sign: $(-6)^2 = 36$. So it does not matter which point you call "first". That is why the formula has squares and not
plain differences: a length cannot be negative, and squaring takes care of it.

**Horizontal or vertical segments** are the special case where one step is 0: the distance from $(2, 5)$ to $(9, 5)$
is just $9 - 2 = 7$.

### The midpoint is an average

The **midpoint** $M$ of $AB$ is the point exactly halfway along it. Its rule is:

$$M = \left( \frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2} \right)$$

In words: **average the $x$'s and average the $y$'s.**

**Why.** Halfway along the slanted segment should mean halfway across **and** halfway up. To check it, look at the
picture: the dashed lines from $M$ cut the big triangle into two small right triangles, $A$ to $(4, 2)$ to $M$, and
$M$ to $(7, 6)$ to $B$. Each has legs 3 across and 4 up, with a right angle between them, so by SAS
([level 5, lesson 5](../level-5/05-congruent-triangles.md)) they are congruent, and their hypotenuses $AM$ and $MB$ are
equal. So $M$ really is the midpoint. Halfway across from $x_1$ to $x_2$ is $x_1 + \tfrac12(x_2 - x_1)$, which
simplifies to $\tfrac12(x_1 + x_2)$, the average.

### Other fractions of the way

The same idea finds a point any fraction of the way along. To go $\tfrac13$ of the way from $A$ to $B$, take
$\tfrac13$ of each step: from $A(1, 2)$ to $B(10, 14)$ the steps are 9 across and 12 up, so a third of the way is
$(1 + 3,\ 2 + 4) = (4, 6)$.

### Three ways to use distance

**Testing shapes.** Find all the side lengths, then use what you know: two equal sides mean isosceles; all equal
means equilateral; and the converse of Pythagoras ([lesson 1](01-pythagorean-proofs.md)) tests for a right angle.
When you only need to compare lengths, compare the **squared** distances and skip the square roots.

**Circles.** A circle with centre $(a, b)$ and radius $r$ is all the points at distance $r$ from the centre. A point
$(x, y)$ is **on** the circle if $(x - a)^2 + (y - b)^2 = r^2$, **inside** if it is less, **outside** if it is more.
(Level 7 turns this into the equation of a circle.)

**Equal distances.** The points equally far from $A$ and $B$ make the perpendicular bisector of $AB$
([level 5, lesson 1](../level-5/01-compass-straightedge.md)), which always passes through the midpoint.

### In three dimensions

In space a point has three coordinates $(x, y, z)$, the third one for height. The box-diagonal rule from
[lesson 2](02-using-pythagoras.md) becomes the 3D distance formula:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$

<figure class="play" data-play="points"><span class="ai-tag">AI-created</span><figcaption><b>Distance and midpoint.</b> The distance is Pythagoras on the dashed right triangle; the midpoint averages the coordinates.</figcaption></figure>

## Worked examples

**1. A distance with negatives.** From $(-3, 5)$ to $(9, 0)$.

1. Across: $9 - (-3) = 12$. Up: $0 - 5 = -5$.
2. $d = \sqrt{12^2 + (-5)^2} = \sqrt{144 + 25} = \sqrt{169} = 13$.

**2. A midpoint.** Of $(-4, 7)$ and $(10, -1)$: $\left(\dfrac{-4 + 10}{2}, \dfrac{7 + (-1)}{2}\right) = (3, 3)$.

**3. Finding the other end.** $M(2, 5)$ is the midpoint of $AB$, and $A = (-1, 3)$. Find $B$.

1. From $A$ to $M$ is $2 - (-1) = 3$ across and $5 - 3 = 2$ up.
2. $B$ is the same step again beyond $M$: $(2 + 3,\ 5 + 2) = (5, 7)$.
3. Check: the average of $-1$ and $5$ is $2$, and of $3$ and $7$ is $5$.

**4. What kind of triangle?** $A(1, 1)$, $B(5, 3)$, $C(3, 7)$.

1. $AB^2 = 4^2 + 2^2 = 20$. $BC^2 = (-2)^2 + 4^2 = 20$. $AC^2 = 2^2 + 6^2 = 40$.
2. $AB = BC$, so it is isosceles.
3. $AB^2 + BC^2 = 20 + 20 = 40 = AC^2$, so by the converse of Pythagoras the angle at $B$ is a right angle.
4. It is an isosceles right triangle: half a square.

**5. On the circle or not?** A circle has centre $(2, -1)$ and radius 5.

1. $(5, 3)$: $(5 - 2)^2 + (3 + 1)^2 = 9 + 16 = 25 = 5^2$. On the circle.
2. $(6, 1)$: $4^2 + 2^2 = 20 < 25$. Inside.

**6. A rover's drive.** On a map of a crater floor with 1 km grid squares, a rover is at $(2, 3)$ and a rock it wants
to sample is at $(14, 8)$. The straight-line distance is $\sqrt{12^2 + 5^2} = \sqrt{169} = 13$ km. Halfway, where it
might stop to recharge, is $(8, 5.5)$.

## Try it

1. Find the distance from $(2, 3)$ to $(8, 11)$.
2. Find the distance from $(-5, -2)$ to $(7, 3)$.
3. Find the midpoint of $(-6, 4)$ and $(2, -8)$.
4. $M(1, -2)$ is the midpoint of $AB$ and $A = (4, 3)$. Find $B$.
5. Is the triangle $(0, 0)$, $(4, 0)$, $(2, 5)$ isosceles? Find all three sides.
6. Show that $O(0, 0)$, $A(3, 4)$, $B(-4, 3)$ make an isosceles right triangle. Where is the right angle?
7. Find the exact distance from $(1, 1)$ to $(4, 7)$ in simplest form, and to two decimal places.
8. Harder: find every point on the $x$-axis that is exactly 10 units from $(3, 8)$.

??? note "Answers"
    1. Across 6, up 8: $\sqrt{36 + 64} = 10$.
    2. Across 12, up 5: $\sqrt{144 + 25} = 13$.
    3. $\left(\dfrac{-6 + 2}{2}, \dfrac{4 - 8}{2}\right) = (-2, -2)$.
    4. From $A$ to $M$: $1 - 4 = -3$ across, $-2 - 3 = -5$ up. Again from $M$: $B = (1 - 3,\ -2 - 5) = (-2, -7)$.
    5. Base from $(0, 0)$ to $(4, 0)$: 4. From $(0, 0)$ to $(2, 5)$: $\sqrt{4 + 25} = \sqrt{29}$. From $(4, 0)$ to
       $(2, 5)$: $\sqrt{4 + 25} = \sqrt{29}$. Two equal sides: yes, isosceles.
    6. $OA^2 = 9 + 16 = 25$, $OB^2 = 16 + 9 = 25$, so $OA = OB = 5$. $AB^2 = 7^2 + 1^2 = 50 = 25 + 25$. By the converse
       of Pythagoras the right angle is at $O$, opposite $AB$. ($B$ is $A$ turned a quarter turn about $O$, the
       rule $(x, y) \to (-y, x)$ from [level 5](../level-5/03-transformations-grid.md).)
    7. $\sqrt{3^2 + 6^2} = \sqrt{45} = \sqrt{9 \times 5} = 3\sqrt5 \approx 6.71$.
    8. A point on the $x$-axis is $(x, 0)$. Its distance squared from $(3, 8)$ is $(x - 3)^2 + 64$, which must be
       $100$. So $(x - 3)^2 = 36$, and $x - 3 = 6$ or $x - 3 = -6$. The points are $(9, 0)$ and $(-3, 0)$. (The
       circle of radius 10 around $(3, 8)$ crosses the axis twice.)

## Common mistake

**Subtracting inside the midpoint.** The midpoint **adds** and halves: $\tfrac12(x_1 + x_2)$. The distance
**subtracts**. Mixing them up gives nonsense, such as a "midpoint" outside the segment.

**Losing a minus sign.** From $-3$ to $9$ is $9 - (-3) = 12$, not 6. Write the subtraction out with brackets around
negative numbers before you calculate.

## Where it leads

- Previous lesson: [Using Pythagoras](02-using-pythagoras.md).
- Next lesson: [Pi and the circumference](04-pi-circumference.md).
- How steep the segment $AB$ is, and its equation: [lesson 6, slope](06-slope-line-equation.md).
- Equations of circles from the distance formula: [level 7](../level-7/index.md); distance between vectors:
  [level 8](../level-8/index.md).
- Graphs and coordinates: [Algebra](../../algebra/index.md).
- This level: [Level 6: Pythagoras and circles](index.md).
