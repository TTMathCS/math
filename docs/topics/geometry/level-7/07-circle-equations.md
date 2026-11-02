---
title: "Equations of circles"
---

# Equations of circles

*Geometry · level 7, lesson 7 of 7*

## A question to start

You are lost in flat open country, but your phone tells you two things: you are exactly 5 km from radio tower $A$,
and exactly $\sqrt{13} \approx 3.6$ km from tower $B$, which is 6 km east of $A$. Where are you?

Everywhere 5 km from $A$ makes a circle. Everywhere 3.6 km from $B$ makes another. You are where they cross, and
there are only two such points. Satellite navigation works on the same idea, with spheres in space instead of
circles on a map. To find those crossing points exactly, you need circles written as **equations**, and that is the
whole of this lesson. (The answer is in Worked example 5.)

## The idea

### A circle is a rule about distance

A **circle** is every point that is the same distance $r$ (the **radius**) from one fixed point (the **centre**). On a
coordinate grid, put the centre at $(a, b)$ and let $(x, y)$ be any point. The distance between them, from the
distance formula (which is Pythagoras on the grid, from [level 6](../level-6/03-distance-midpoint.md)), is

$$\sqrt{(x - a)^2 + (y - b)^2}$$

The point is on the circle exactly when this distance equals $r$. Squaring both sides (both are positive, so nothing
is lost):

$$(x - a)^2 + (y - b)^2 = r^2$$

This is the **standard form** of a circle's equation. Every point on the circle makes it true, and every point that
makes it true is on the circle. The equation **is** the circle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 250" role="img" aria-label="A coordinate grid with a circle of centre (a, b). A point (x, y) on the circle is joined to the centre by a radius r. A right triangle below the radius has a horizontal leg x minus a and a vertical leg y minus b">
  <line x1="10" y1="180" x2="250" y2="180" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="40" y1="10" x2="40" y2="245" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <circle cx="100" cy="140" r="100" fill="#9cc9ea" opacity="0.25" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="140" x2="160" y2="140" stroke="#eea66f" stroke-width="3"/>
  <line x1="160" y1="140" x2="160" y2="60" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="100" y1="140" x2="160" y2="60" stroke="currentColor" stroke-width="2.5"/>
  <rect x="148" y="128" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="100" cy="140" r="3.5" fill="currentColor"/><circle cx="160" cy="60" r="3.5" fill="currentColor"/>
  <g font-size="13" fill="currentColor">
    <text x="62" y="158">(a, b)</text><text x="166" y="56">(x, y)</text>
    <text x="114" y="96">r</text><text x="108" y="156">x − a</text><text x="166" y="104">y − b</text>
  </g>
</svg>
</div>

If the centre is the origin, $a = b = 0$ and the equation is simply $x^2 + y^2 = r^2$.

### Watch the signs

In $(x - 3)^2 + (y + 2)^2 = 25$, the centre is $(3, -2)$, not $(3, 2)$. Write $y + 2$ as $y - (-2)$ to see it. The
numbers inside the brackets are the centre's coordinates **with their signs flipped**. And the right side is $r^2$,
so here $r = 5$, not 25.

### Inside, on, or outside

For any point, work out the left side $(x - a)^2 + (y - b)^2$. This is the **square of its distance** from the
centre. Compare it with $r^2$:

- less than $r^2$: the point is **inside**;
- equal to $r^2$: the point is **on** the circle;
- more than $r^2$: the point is **outside**.

### The expanded form, and getting back

Multiply out $(x - 3)^2 + (y + 4)^2 = 36$:

$$x^2 - 6x + 9 + y^2 + 8y + 16 = 36 \quad\Longrightarrow\quad x^2 + y^2 - 6x + 8y - 11 = 0$$

Equations of circles often arrive in this **expanded** (or general) form, $x^2 + y^2 + Dx + Ey + F = 0$, where the
centre and radius are hidden. To find them, reverse the steps by **completing the square**: for each letter, take half
the coefficient (the number in front of it), and use it to build a perfect square.

- $x^2 - 6x$: half of $-6$ is $-3$, and $(x - 3)^2 = x^2 - 6x + 9$. So $x^2 - 6x = (x - 3)^2 - 9$.
- $y^2 + 8y$: half of $8$ is $4$, and $(y + 4)^2 = y^2 + 8y + 16$. So $y^2 + 8y = (y + 4)^2 - 16$.

Then $(x - 3)^2 - 9 + (y + 4)^2 - 16 - 11 = 0$, which is $(x - 3)^2 + (y + 4)^2 = 36$.

**A warning sign.** Not every equation of this shape is a circle. If completing the square leaves a negative number on
the right, no point can satisfy it (two squares are never negative), and the "circle" is empty. If it leaves zero,
the only point is the centre itself. Also, the $x^2$ and $y^2$ must have the **same** coefficient and there must be no
$xy$ term; otherwise the shape is something else (an ellipse, for example).

### Where a line meets a circle

To find where the line $y = mx + c$ meets a circle, **substitute** the line into the circle's equation. You get a
quadratic equation in $x$. A quadratic has 2, 1 or 0 real solutions, depending on its **discriminant**
$\Delta = B^2 - 4AC$ (for $Ax^2 + Bx + C = 0$):

| Discriminant | Solutions | The line is... |
| --- | --- | --- |
| $\Delta > 0$ | 2 | a **secant**: it cuts through the circle |
| $\Delta = 0$ | 1 (a double root) | a **tangent**: it just touches |
| $\Delta < 0$ | 0 | it misses the circle |

The algebra and the picture agree exactly: "touches once" in the picture is "one repeated root" in the algebra.

### The tangent at a point

From [the circle theorems](06-circle-theorems.md), the tangent at a point $P$ is perpendicular to the radius to $P$.
Perpendicular lines have slopes that multiply to $-1$ (from [level 6](../level-6/06-slope-line-equation.md)). So:

1. find the slope of the radius from the centre to $P$;
2. the tangent's slope is the **negative reciprocal** (flip it and change the sign);
3. write the line through $P$ with that slope.

### Where two circles meet

Two circles with different centres meet in 0, 1 or 2 points. To find them, **subtract** one equation from the other.
The $x^2$ and $y^2$ terms cancel, leaving the equation of a straight line through both crossing points. Then solve that
line with either circle, as above. This is the method behind locating yourself from known distances.

## Worked examples

**1. Writing the equation.** Find the circle with centre $(3, -2)$ and radius 5. Is $(6, 2)$ on it?

1. $(x - 3)^2 + (y - (-2))^2 = 5^2$, that is $(x - 3)^2 + (y + 2)^2 = 25$.
2. Test $(6, 2)$: $(6 - 3)^2 + (2 + 2)^2 = 9 + 16 = 25$. Yes, it is on the circle.

**2. From expanded form.** Find the centre and radius of $x^2 + y^2 + 10x - 4y + 20 = 0$.

1. Group: $(x^2 + 10x) + (y^2 - 4y) = -20$.
2. Complete the squares: $x^2 + 10x = (x + 5)^2 - 25$ and $y^2 - 4y = (y - 2)^2 - 4$.
3. So $(x + 5)^2 + (y - 2)^2 = -20 + 25 + 4 = 9$.
4. Centre $(-5, 2)$, radius $\sqrt9 = 3$.

**3. A line and a circle.** Where does $y = x + 1$ meet $x^2 + y^2 = 25$?

1. Substitute: $x^2 + (x + 1)^2 = 25$, so $2x^2 + 2x + 1 = 25$, so $2x^2 + 2x - 24 = 0$.
2. Divide by 2: $x^2 + x - 12 = 0$, which factors as $(x + 4)(x - 3) = 0$.
3. $x = 3$ gives $y = 4$; $x = -4$ gives $y = -3$. The points are $(3, 4)$ and $(-4, -3)$.
4. Check: $9 + 16 = 25$ and $16 + 9 = 25$.

**4. A tangent line.** Find the tangent to $x^2 + y^2 = 25$ at the point $(3, 4)$.

1. The radius goes from $(0, 0)$ to $(3, 4)$: slope $\dfrac43$.
2. The tangent's slope is $-\dfrac34$.
3. Through $(3, 4)$: $y - 4 = -\dfrac34(x - 3)$. Multiply by 4: $4y - 16 = -3x + 9$, so $3x + 4y = 25$.
4. Check it touches only once: from the line, $y = \dfrac{25 - 3x}{4}$. Substituting gives
   $16x^2 + (25 - 3x)^2 = 400$, that is $25x^2 - 150x + 225 = 0$, or $25(x - 3)^2 = 0$. One double root, at $x = 3$.

**5. The lost walker.** Put tower $A$ at $(0, 0)$ and tower $B$ at $(6, 0)$, in km. You are on $x^2 + y^2 = 25$ and on
$(x - 6)^2 + y^2 = 13$.

1. Subtract the second from the first: $x^2 - (x - 6)^2 = 25 - 13$, so $x^2 - (x^2 - 12x + 36) = 12$, so
   $12x - 36 = 12$ and $x = 4$.
2. Then $16 + y^2 = 25$, so $y = 3$ or $y = -3$.
3. You are at $(4, 3)$ or $(4, -3)$: 4 km east of $A$ and 3 km north or south of the line between the towers. A third
   tower would decide which.

## Try it

1. Write the equation of the circle with centre $(-1, 4)$ and radius 3.
2. Find the centre and radius of $x^2 + y^2 - 6x + 8y - 11 = 0$ by completing the square.
3. Is the point $(2, 7)$ inside, on, or outside $(x - 1)^2 + (y - 3)^2 = 16$?
4. A circle has a diameter from $(-2, 1)$ to $(4, 9)$. Find its equation.
5. Where does the line $x + y = 7$ meet $x^2 + y^2 = 25$?
6. Check that $(5, -1)$ is on $(x - 2)^2 + (y - 3)^2 = 25$ and find the tangent there.
7. For which values of $k$ is the line $y = 2x + k$ a tangent to $x^2 + y^2 = 5$?
8. Does $x^2 + y^2 - 2x + 4y + 10 = 0$ describe a circle?

??? note "Answers"
    1. $(x + 1)^2 + (y - 4)^2 = 9$.
    2. $(x - 3)^2 - 9 + (y + 4)^2 - 16 - 11 = 0$, so $(x - 3)^2 + (y + 4)^2 = 36$: centre $(3, -4)$, radius 6.
    3. $(2 - 1)^2 + (7 - 3)^2 = 1 + 16 = 17 > 16$: outside, just barely.
    4. The centre is the midpoint, $\left(\dfrac{-2 + 4}{2}, \dfrac{1 + 9}{2}\right) = (1, 5)$. The radius is the distance from
       $(1, 5)$ to $(4, 9)$: $\sqrt{9 + 16} = 5$. Equation: $(x - 1)^2 + (y - 5)^2 = 25$.
    5. $y = 7 - x$, so $x^2 + (7 - x)^2 = 25$, that is $2x^2 - 14x + 24 = 0$, or $x^2 - 7x + 12 = 0$. So $x = 3$ or $4$:
       the points $(3, 4)$ and $(4, 3)$.
    6. $(5 - 2)^2 + (-1 - 3)^2 = 9 + 16 = 25$, so it is on the circle. The radius from $(2, 3)$ to $(5, -1)$ has slope
       $\dfrac{-4}{3}$, so the tangent has slope $\dfrac34$: $y + 1 = \dfrac34(x - 5)$, which tidies to $3x - 4y = 19$.
    7. Substitute: $x^2 + (2x + k)^2 = 5$, so $5x^2 + 4kx + k^2 - 5 = 0$. Tangent means $\Delta = 0$:
       $16k^2 - 20(k^2 - 5) = 0$, so $-4k^2 + 100 = 0$ and $k = 5$ or $k = -5$.
    8. Completing the square: $(x - 1)^2 + (y + 2)^2 = -10 + 1 + 4 = -5$. A sum of squares cannot be negative, so no
       point fits: it is not a circle (it is empty).

## Common mistake

**Wrong signs and forgetting the square root.** $(x + 5)^2 + (y - 2)^2 = 9$ has centre $(-5, 2)$ and radius 3. Reading
the centre as $(5, -2)$ or the radius as 9 are the two most common slips in this whole topic.

**Completing the square on one side only.** When you add 25 and 4 to build the squares on the left, the same 25 and 4
must be added on the right.

## Where it leads

- Previous lesson: [Circle theorems](06-circle-theorems.md).
- The level page: [Level 7: Similarity and trigonometry](index.md). Next level:
  [Level 8: Proof, radians and vectors](../level-8/index.md), which starts with
  [How to write a geometric proof](../level-8/01-geometric-proof.md).
- The circle $x^2 + y^2 = 1$ becomes the home of all trigonometry: [Radians and the unit circle](../level-8/02-radians-unit-circle.md).
- Completing the square and the discriminant: [Algebra](../../algebra/index.md).
- Distance as the foundation of geometry, in any number of dimensions, on the U of T shelf:
  [MAT257 Unit 1 (the topology of R^n)](../../../uoft/MAT257Y1/unit01.md).
