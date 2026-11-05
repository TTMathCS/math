---
title: "Area of a trapezoid"
---

# Area of a trapezoid

*Measurement · level 4, lesson 3 of 7*

## A question to start

A flower bed has a straight front edge 10 m long and a straight back edge 4 m long, parallel to the front, 3 m behind
it. Its two ends slope in. It is a **trapezoid**.

Its neighbour's flower bed is a plain rectangle, 7 m by 3 m. Which bed needs more soil to cover it?

They need **exactly the same**. Notice that 7 is halfway between 4 and 10. A trapezoid always has the same area as
the rectangle whose length is the **average** of its two parallel sides. This lesson shows why, in three different
ways.

## The idea

### What a trapezoid is

A **trapezoid** is a four-sided shape with (at least) one pair of **parallel** sides. The two parallel sides are
called its **bases**. We usually call their lengths $a$ and $b$. The **height** $h$ is the distance between the two
bases, measured at a right angle to them. The other two sides, the **legs**, can slope in any way, and their lengths
are not needed for the area. (In Britain this shape is called a trapezium. Geometry's
[quadrilateral family](../../geometry/level-3/05-quadrilateral-family.md) explains how it is related to the others:
every parallelogram counts as a trapezoid too.)

### Way 1: two copies make a parallelogram

This is the same trick that worked for triangles. Make an exact copy of the trapezoid, turn it a half turn, and fit
it against the original along one leg.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="A trapezoid with parallel sides a and b and height h, and the same trapezoid joined to an upside-down copy to make a parallelogram whose base is a plus b">
  <polygon points="30,120 150,120 110,50 60,50" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="60,110 70,110 70,120" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="85" y="42">a</text><text x="90" y="138">b</text><text x="50" y="90">h</text>
  </g>
  <text x="185" y="90" font-size="24" text-anchor="middle" fill="currentColor">→</text>
  <polygon points="220,120 340,120 300,50 250,50" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <polygon points="340,120 390,120 420,50 300,50" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="280" y="138">b</text><text x="365" y="138">a</text>
    <text x="275" y="42">a</text><text x="360" y="42">b</text>
  </g>
</svg>
</div>

Why do they make a parallelogram? Turning the copy a half turn keeps every side pointing in the same direction. The
copy's top is its long base $b$ and its bottom is its short base $a$. Along the bottom we now have $b$ then $a$, and
along the top $a$ then $b$: both lines are $a + b$ long, and both are parallel. The two outside legs are a leg of
the original and the same leg of the copy, turned, so they are equal and parallel too. That is a parallelogram with
base $a + b$ and height $h$.

Its area is $(a + b) \times h$. The trapezoid is half of it:

$$\text{area of a trapezoid} = \tfrac12 (a + b) \times h = \frac{a + b}{2} \times h$$

### Way 2: cut it into two triangles

Draw one **diagonal** (a line from one corner to the opposite corner). It cuts the trapezoid into two triangles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="A trapezoid cut by a diagonal into two triangles: one with base b and height h, the other with base a and height h">
  <polygon points="130,120 250,120 160,50" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <polygon points="160,50 210,50 250,120" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="185" y="42">a</text><text x="190" y="138">b</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="275" y="80">blue: ½ × b × h</text>
    <text x="275" y="100">green: ½ × a × h</text>
  </g>
</svg>
</div>

- The lower triangle has base $b$. Its top corner is on the top line, so its height is $h$. Its area is $\tfrac12 b h$.
- The upper triangle has base $a$ (turn the page upside down to see it standing on $a$). Its third corner is on the
  bottom line, so its height is also $h$. Its area is $\tfrac12 a h$.

Together: $\tfrac12 a h + \tfrac12 b h = \tfrac12 (a + b) h$, the same formula. Two completely different cuts give
the same answer, which is a good sign the formula is right.

### Way 3: the average width

The formula $\frac{a + b}{2} \times h$ can be read as "**the average of the two bases, times the height**". Here
is why that makes sense. Mark the middle point of each sloping leg, and through each one draw a line straight up
and down, at a right angle to the bases. Near each leg, this cuts a small right triangle off the bottom corner, and
leaves an empty triangle of exactly the same shape above it, at the top. Turn each small triangle a half turn about
the leg's middle point and it drops into the empty space. The shape becomes a **rectangle**, as tall as the
trapezoid. Its length is the distance between the two upright lines, which is the length of the line joining the
middles of the legs, the line halfway up. That halfway line is longer than $a$ and shorter than $b$, and it is
exactly halfway between them: their average. (For the flower bed it is 7 m: the bed is 6 m wider at the front than
at the back, and halfway back it is 3 m wider than the back, $4 + 3 = 7$.)

So a trapezoid is, for area, just a rectangle of length "average base". That answers the flower beds: the average
of 4 m and 10 m is 7 m, so the trapezoid's area is $7 \times 3 = 21$ m², the same as the 7 m by 3 m rectangle.

### One formula, three shapes

The trapezoid formula quietly contains two others.

- If the two bases are equal ($a = b$), the trapezoid is a **parallelogram**, and
  $\tfrac12 (b + b) h = \tfrac12 \times 2b \times h = b h$. That is the parallelogram rule.
- If the top base shrinks to nothing ($a = 0$), the top side becomes a single point, and the trapezoid becomes a
  **triangle**: $\tfrac12 (0 + b) h = \tfrac12 b h$. That is the triangle rule.

So the trapezoid formula is the "big" one, and the other two are special cases of it.

<figure class="play" data-play="area" data-shape="trap"><span class="ai-tag">AI-created</span><figcaption><b>A trapezoid.</b> The average of the two parallel sides times the height.</figcaption></figure>

## Worked examples

**1. The flower bed.** $a = 4$ m, $b = 10$ m, $h = 3$ m.

Area $= \tfrac12 (4 + 10) \times 3 = \tfrac12 \times 14 \times 3 = 7 \times 3 = 21$ m².

**2. Do the half first, or last.** A trapezoid has bases 5 cm and 8 cm and height 6 cm.

Average base first: $(5 + 8) \div 2 = 6.5$, then $6.5 \times 6 = 39$ cm². Or half last: $(5 + 8) \times 6 = 78$,
then $78 \div 2 = 39$ cm². Same answer; pick whichever is easier.

**3. Missing height.** A trapezoid has bases 9 m and 15 m, and area 72 m². How far apart are the bases?

The average base is $(9 + 15) \div 2 = 12$. Then $12 \times h = 72$, so $h = 6$ m.

**4. Missing base.** A trapezoid has area 50 cm², height 5 cm, and one base 6 cm. How long is the other base?

$\frac{6 + b}{2} \times 5 = 50$. Divide by 5: the average base is 10. The average of 6 and $b$ is 10, so $6 + b = 20$
and $b = 14$ cm. (Check: $\tfrac12 (6 + 14) \times 5 = 10 \times 5 = 50$. ✓)

**5. A ditch.** A ditch has a cross-section shaped like an upside-down trapezoid: 3 m wide at the top, 1 m wide at the
bottom, and 1.5 m deep. What is the area of the cross-section?

The bases are 3 m and 1 m (the depth is the height): $\tfrac12 (3 + 1) \times 1.5 = 2 \times 1.5 = 3$ m². If the
ditch is 40 m long, it holds $3 \times 40 = 120$ cubic metres of water when full (more on volume in
[lesson 5](05-volume-cubes.md)).

**6. A roof.** One face of a roof is a trapezoid 12 m along the bottom edge, 6 m along the ridge at the top, and 4 m
from bottom to top, measured up the slope at a right angle to the edges. Shingles come in bundles that each cover
3 m². How many bundles?

Area $= \tfrac12 (12 + 6) \times 4 = 9 \times 4 = 36$ m². Bundles: $36 \div 3 = 12$.

## Try it

1. Find the area of a trapezoid with bases 6 cm and 10 cm and height 4 cm.
2. Find the area of a trapezoid with bases 2.5 m and 5.5 m and height 3 m.
3. A trapezoid has bases 7 cm and 13 cm, legs of 5 cm and 8 cm, and height 4 cm. Find its area. Which numbers did
   you not need?
4. A trapezoid has bases 8 m and 12 m and area 60 m². Find its height.
5. A trapezoid has area 42 cm², height 6 cm and one base 4 cm. Find the other base.
6. On squared paper, a trapezoid has its bottom base along the grid from $(0, 0)$ to $(8, 0)$ and its top base from
   $(2, 4)$ to $(5, 4)$. Find its area with the formula, then check by cutting it into a rectangle and two right
   triangles.
7. Use the formula with $a = b$ to find the area of a parallelogram with base 9 and height 4, and with $a = 0$ to
   find the area of a triangle with base 9 and height 4.

??? note "Answers"
    1. $\tfrac12 (6 + 10) \times 4 = 8 \times 4 = 32$ cm².
    2. $\tfrac12 (2.5 + 5.5) \times 3 = 4 \times 3 = 12$ m².
    3. $\tfrac12 (7 + 13) \times 4 = 10 \times 4 = 40$ cm². The legs (5 cm and 8 cm) are not needed.
    4. Average base $(8 + 12) \div 2 = 10$, so $10 \times h = 60$ and $h = 6$ m.
    5. $\frac{4 + b}{2} \times 6 = 42$, so the average base is $42 \div 6 = 7$. Then $4 + b = 14$ and $b = 10$ cm.
    6. Bases 8 and 3, height 4: $\tfrac12 (8 + 3) \times 4 = 22$ squares. Cutting: drop lines straight down from
       $(2, 4)$ and $(5, 4)$. The middle rectangle is 3 by 4, area 12. The left triangle has base 2 and height 4,
       area 4. The right triangle has base $8 - 5 = 3$ and height 4, area 6. Total $12 + 4 + 6 = 22$. ✓
    7. $a = b = 9$: $\tfrac12 (9 + 9) \times 4 = 36$, which is $9 \times 4$. ✓ $a = 0$, $b = 9$:
       $\tfrac12 (0 + 9) \times 4 = 18$, which is $\tfrac12 \times 9 \times 4$. ✓

## Common mistake

**Adding all four sides.** Only the two **parallel** sides go into the formula. The legs are used for the perimeter,
never for the area.

**Forgetting the half, or halving twice.** $\frac{a + b}{2}$ already includes the half. Either average the bases and
multiply by $h$, or add the bases, multiply by $h$ and then halve, but not both.

## Where it leads

- Previous: [Area of a triangle](02-triangle-area.md). Next: [Composite shapes](04-composite-shapes.md), where you
  put rectangles, triangles and trapezoids together.
- [Level 4 page](index.md) · [Measurement topic page](../index.md)
- Averages: [Statistics](../../statistics/index.md). The "average height of the sides" idea is also how the
  trapezoid rule estimates areas under curves, a step towards calculus in level 8 of this topic and in
  [Change](../../change/index.md).
- Solving $\frac{6 + b}{2} \times 5 = 50$ is an equation: more in [Algebra](../../algebra/index.md).
