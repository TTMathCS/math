---
title: "Area of a triangle"
---

# Area of a triangle

*Measurement · level 4, lesson 2 of 7*

## A question to start

Here are three triangles. Each one has a base 3 cm long at the bottom, and each one has its top corner on the same
dashed line, 4 cm above the base. One is neat and pointy, one has a right angle, and one leans so far over that its
top is not even above its base.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 140" role="img" aria-label="Three triangles with equal bases on one line and their top corners on a parallel dashed line: a pointed one, a right triangle and one leaning far to the right">
  <line x1="10" y1="30" x2="430" y2="30" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="10" y1="110" x2="430" y2="110" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="20,110 80,110 50,30" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <polygon points="150,110 210,110 150,30" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <polygon points="280,110 340,110 420,30" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="50" y="128">A</text><text x="180" y="128">B</text><text x="310" y="128">C</text>
  </g>
</svg>
</div>

Which triangle has the biggest area? The leaning one looks biggest, because its long side stretches so far. But all
three have **exactly the same area**: 6 cm². This lesson shows why, and gives one rule that works for every triangle
there is.

## The idea

### Two triangles make a parallelogram

Take any triangle and make an exact copy of it. Turn the copy a half turn (upside down) and fit it against the
original, long side to long side. Together they make a **parallelogram**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="A triangle and an upside-down copy of it fitted together to make a parallelogram with the same base and height as the triangle">
  <polygon points="30,120 150,120 70,40" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="90" y="140" font-size="13" text-anchor="middle" fill="currentColor">a triangle</text>
  <text x="200" y="85" font-size="24" text-anchor="middle" fill="currentColor">→</text>
  <polygon points="240,120 360,120 280,40" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <polygon points="360,120 400,40 280,40" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <line x1="280" y1="40" x2="280" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="280,110 290,110 290,120" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="13" fill="currentColor">
    <text x="300" y="140" text-anchor="middle">base b</text>
    <text x="252" y="84" text-anchor="middle">h</text>
  </g>
</svg>
</div>

Why is it a parallelogram? The copy was turned a half turn, so each of its sides runs in exactly the same direction
as the matching side of the original, just the other way round. So the top side of the shape (from the copy) is
parallel to the base and the same length, and the two slanted sides are parallel and the same length too. Opposite
sides equal and parallel: that is a parallelogram.

The parallelogram has the **same base** $b$ as the triangle and the **same height** $h$. From the
[last lesson](01-parallelogram-area.md), its area is $b \times h$. It is made of two identical triangles, so each
triangle is exactly half:

$$\text{area of a triangle} = \tfrac12 \times \text{base} \times \text{height}, \qquad A = \tfrac12 b h$$

This works for **every** triangle: pointy, flat, right-angled or leaning. Any triangle and its turned copy always
make a parallelogram.

### The height of a triangle

The **height** of a triangle (also called the **altitude**) is the distance from the base to the opposite corner,
measured **at a right angle** to the base. Imagine the triangle standing on its base: the height is how tall it is,
measured straight up from the base line to the top corner.

- In a **right triangle**, the two sides that make the right angle are a base and its height. That makes right
  triangles the easiest: area = half of one short side × the other short side. A right triangle is plainly half a
  rectangle, cut corner to corner, just like the half squares in [level 3](../level-3/04-area-counting-squares.md).
- In a pointed (acute) triangle, the height falls **inside** the triangle.
- In a triangle with an obtuse angle (bigger than a right angle) at the base, the height falls **outside**.

### Obtuse triangles: the height outside

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="An obtuse triangle with base b. Its height h is drawn from the top corner down to the base line extended beyond the base">
  <polygon points="40,120 120,120 200,40" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <line x1="120" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="200" y1="40" x2="200" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="190,120 190,110 200,110" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="13" fill="currentColor">
    <text x="80" y="138" text-anchor="middle">base b</text>
    <text x="208" y="86">h</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="250" y="60">big right triangle</text>
    <text x="250" y="78">minus small right triangle</text>
    <text x="250" y="96">= the green triangle</text>
  </g>
</svg>
</div>

When the triangle leans past its base, the height drawn from the top corner meets the base line **outside** the
triangle. Extend the base with a dashed line and measure the height to it. The rule is still $\tfrac12 b h$.

You might doubt it, since the height is not even touching the triangle. Here is a second reason. Put the green
triangle together with the small right triangle in the gap on the right (between the dashed lines). Together they
make a big right triangle. In the drawing, call the extra stretch of base line $x$. Then:

- the big right triangle has base $b + x$ and height $h$, so area $\tfrac12 (b + x) h$;
- the small right triangle has base $x$ and height $h$, so area $\tfrac12 x h$;
- the green triangle is the difference: $\tfrac12 (b + x) h - \tfrac12 x h = \tfrac12 b h$.

The $x$ cancels out. However far the triangle leans, its area depends only on $b$ and $h$. That answers the opening
question: the three triangles share a base length of 3 cm and a height of 4 cm (their tops are all on the line 4 cm
up), so each has area $\tfrac12 \times 3 \times 4 = 6$ cm².

### Three bases, three heights

A triangle has three sides, and **any** of them can be the base. Each base has its own height: the distance from
that side to the corner opposite it. The three products are different, but each gives the same area, because it is
the same triangle.

For example, a right triangle with short sides 6 cm and 8 cm has long side 10 cm. Using the short sides,
$A = \tfrac12 \times 6 \times 8 = 24$ cm². Using the long side as the base, $\tfrac12 \times 10 \times h = 24$, so
$5h = 24$ and the height onto the long side is $h = 4.8$ cm.

### A grid trick: the box method

When a triangle's corners sit on grid points but none of its sides lie along the grid, there is no easy height to
measure. Instead, draw the smallest rectangle (a **box**) around it, along the grid lines. The box is the triangle
plus some right triangles in the corners. Find the box's area and subtract the corner pieces.

<figure class="play" data-play="area" data-shape="tri"><span class="ai-tag">AI-created</span><figcaption><b>Half a parallelogram.</b> Move the top corner: the area does not change.</figcaption></figure>

## Worked examples

**1. The basic rule.** A triangle has base 10 cm and height 6 cm. Area $= \tfrac12 \times 10 \times 6 = 30$ cm².

**2. A right triangle.** A right triangle has short sides 5 m and 12 m, and long side 13 m. Its area?

The short sides are a base and its height: $\tfrac12 \times 5 \times 12 = 30$ m². The 13 m side is not needed.

**3. An obtuse triangle.** A triangle has base 5 cm. Its top corner is 4 cm above the base line, past the end of the
base. Area $= \tfrac12 \times 5 \times 4 = 10$ cm², exactly as for any other triangle.

**4. Missing height.** A triangle has area 36 cm² and base 8 cm. How tall is it?

$\tfrac12 \times 8 \times h = 36$, so $4h = 36$ and $h = 9$ cm. (Check: $\tfrac12 \times 8 \times 9 = 36$. ✓)

**5. The box method.** A triangle on squared paper has corners at $(0, 0)$, $(6, 2)$ and $(2, 5)$, where $(6, 2)$
means 6 squares right and 2 squares up. Find its area.

The box around it runs from 0 to 6 across and 0 to 5 up: area $6 \times 5 = 30$. The three corner triangles are all
right triangles:

- from $(0, 0)$ to $(6, 2)$: base 6, height 2, area $\tfrac12 \times 6 \times 2 = 6$;
- from $(6, 2)$ to $(2, 5)$: base 4, height 3, area $\tfrac12 \times 4 \times 3 = 6$;
- from $(2, 5)$ to $(0, 0)$: base 2, height 5, area $\tfrac12 \times 2 \times 5 = 5$.

Triangle $= 30 - 6 - 6 - 5 = 13$ squares.

**6. A sail.** A sail is a right triangle 3 m along the boom (the bottom) and 5 m up the mast. Area
$= \tfrac12 \times 3 \times 5 = 7.5$ m².

## Try it

1. Find the area: (a) base 8 cm, height 7 cm; (b) base 12 m, height 2.5 m; (c) a right triangle with short sides
   9 cm and 4 cm.
2. A triangle has sides 13 cm, 13 cm and 10 cm. The height onto the 10 cm side is 12 cm. Find its area.
3. A triangle has area 45 m² and height 9 m. How long is its base?
4. A triangle has base 6 cm and height 6 cm, and leans so far that its height falls 10 cm past the end of its base.
   Find its area.
5. A right triangle has short sides 15 cm and 20 cm, and long side 25 cm. Find its area, then the height onto the
   long side.
6. Use the box method: a triangle has corners at $(0, 0)$, $(4, 1)$ and $(1, 3)$ on squared paper. Find its area.
7. A square with side 10 cm is cut along one diagonal. What is the area of each triangle? Why is this the same as
   $\tfrac12 \times 10 \times 10$?
8. Two triangles have the same base. The first is twice as tall as the second. How do their areas compare?

??? note "Answers"
    1. (a) $\tfrac12 \times 8 \times 7 = 28$ cm². (b) $\tfrac12 \times 12 \times 2.5 = 15$ m².
       (c) $\tfrac12 \times 9 \times 4 = 18$ cm².
    2. $\tfrac12 \times 10 \times 12 = 60$ cm². (The 13 cm sides are not used.)
    3. $\tfrac12 \times b \times 9 = 45$, so $4.5b = 45$ and $b = 10$ m.
    4. $\tfrac12 \times 6 \times 6 = 18$ cm². How far it leans does not matter.
    5. Area $= \tfrac12 \times 15 \times 20 = 150$ cm². On the long side: $\tfrac12 \times 25 \times h = 150$, so
       $12.5h = 150$ and $h = 12$ cm.
    6. Box: 4 across by 3 up, area 12. Corner triangles: $(0,0)$ to $(4,1)$: $\tfrac12 \times 4 \times 1 = 2$;
       $(4,1)$ to $(1,3)$: $\tfrac12 \times 3 \times 2 = 3$; $(1,3)$ to $(0,0)$: $\tfrac12 \times 1 \times 3 = 1.5$.
       Triangle $= 12 - 2 - 3 - 1.5 = 5.5$ squares.
    7. The square has area $10 \times 10 = 100$ cm², and the diagonal cuts it into two identical triangles, so each
       is $50$ cm². Each is a right triangle with short sides 10 and 10, so the rule gives
       $\tfrac12 \times 10 \times 10 = 50$ cm² too. The rule **is** "half the rectangle".
    8. The taller one has twice the area: $\tfrac12 \times b \times 2h = 2 \times (\tfrac12 \times b \times h)$.

## Common mistake

**Forgetting the half.** Base × height is the area of the whole parallelogram (or rectangle). The triangle is only
half of it. If your triangle's area equals the area of the box around it, something is wrong.

**Using a slanted side as the height.** The height must meet the base line at a right angle. In worked example 2
the height is 12 m, not the 13 m side. Only in a right triangle is one of the sides itself a height.

## Where it leads

- Previous: [Area of a parallelogram](01-parallelogram-area.md). Next: [Area of a trapezoid](03-trapezoid-area.md).
- [Level 4 page](index.md) · [Measurement topic page](../index.md)
- Triangles, their sides and their angles: [Triangles: sides and angles](../../geometry/level-3/04-triangles-sides-angles.md)
  in Geometry.
- The 6, 8, 10 and 5, 12, 13 right triangles are Pythagorean triples: see
  [Pythagoras](../../geometry/level-6/01-pythagorean-proofs.md) in Geometry.
- Corners at grid points like $(6, 2)$ are coordinates: [The coordinate grid](../../geometry/level-3/06-coordinates-grid.md).
