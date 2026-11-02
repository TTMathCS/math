---
title: "Dilations and scale drawings"
---

# Dilations and scale drawings

*Geometry · level 5, lesson 4 of 6*

## A question to start

Olympus Mons on Mars is the tallest volcano known in the solar system: it rises about 22 km above the plains around
it, more than twice the height of Mount Everest above sea level. Now imagine a perfect globe of Mars, 30 cm across,
the size of a big beach ball, with every mountain and crater shrunk by exactly the right amount.

How high would Olympus Mons stand on that globe? A few centimetres? A finger's width?

The answer is about **1 millimetre**. You could barely feel it with your fingertip. A whole planet, shrunk to fit in
your arms, is smoother than an orange. Working that out needs one idea: **scaling**, where every length is multiplied
by the same number.

## The idea

### What a dilation is

A **dilation** (also called an **enlargement**, even when it shrinks) changes the size of a shape without changing
its shape. It needs two things:

- a **centre of dilation**, a fixed point $O$;
- a **scale factor** $k$, a positive number.

Each point $P$ moves along the ray from $O$ through $P$ to a new point $P'$, so that $P'$ is $k$ times as far from $O$
as $P$ was:

$$OP' = k \times OP$$

With $k = 2$ every point goes twice as far out; with $k = \tfrac12$ every point comes halfway in.

<div class="pattern-row" markdown="0">
<svg viewBox="0 30 240 160" role="img" aria-label="A small orange triangle PQR and its blue image P'Q'R' after a dilation with scale factor 2 from centre O; dashed rays from O pass through each point and its image, each image twice as far from O">
  <g stroke="currentColor" stroke-width="1" stroke-dasharray="4 3">
    <line x1="30" y1="170" x2="130" y2="110"/><line x1="30" y1="170" x2="210" y2="130"/><line x1="30" y1="170" x2="150" y2="50"/>
  </g>
  <polygon points="130,110 210,130 150,50" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/>
  <polygon points="80,140 120,150 90,110" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
  <circle cx="30" cy="170" r="4" fill="currentColor"/>
  <g font-size="13" fill="currentColor">
    <text x="16" y="184">O</text><text x="68" y="138">P</text><text x="114" y="166">Q</text><text x="80" y="106">R</text>
    <text x="114" y="104">P′</text><text x="214" y="136">Q′</text><text x="154" y="46">R′</text>
  </g>
</svg>
</div>

| Scale factor | What happens |
| --- | --- |
| $k > 1$ | the image is bigger (an enlargement) |
| $k = 1$ | nothing moves |
| $0 < k < 1$ | the image is smaller (a reduction) |

### Dilations on the grid

When the centre is the origin, the rule is as simple as it could be: **multiply both coordinates by $k$.**

$$(x, y) \to (kx,\ ky)$$

Why? The point $(x, y)$ is reached by going $x$ across and $y$ up. Going $k$ times as far along the same ray means
going $k$ times as far across and $k$ times as far up.

For a centre $C$ that is not the origin, use the same trick as for rotations: measure from $C$. If $P$ is $a$ across
and $b$ up from $C$, then $P'$ is $ka$ across and $kb$ up from $C$.

### What changes and what stays

Unlike the moves of the last lesson, a dilation is **not** an isometry: lengths change. But it changes them in the
most orderly way possible.

1. **Every length is multiplied by $k$.** Not only distances from the centre: every side, every diagonal, every
   perimeter.
2. **Every angle stays the same.** The shape is the same; only the size is different.
3. **Every line goes to a parallel line.** Each side of the image is parallel to the matching side of the object.
4. **Every area is multiplied by $k^2$.** This one surprises people, so here is why.

**Why lengths multiply by $k$:** take two points $P(x_1, y_1)$ and $Q(x_2, y_2)$, with the centre at the origin. The
step from $P$ to $Q$ is $x_2 - x_1$ across and $y_2 - y_1$ up. After the dilation, the step from $P'$ to $Q'$ is
$kx_2 - kx_1 = k(x_2 - x_1)$ across and $k(y_2 - y_1)$ up. Every step is $k$ times as long in each direction, so the
straight-line distance is $k$ times as long too, and its direction is unchanged (that is why lines stay parallel).

**Why areas multiply by $k^2$:** cover the shape with tiny unit squares. A dilation turns each 1 by 1 square into a
$k$ by $k$ square, whose area is $k \times k = k^2$. Every little square gets $k^2$ times bigger, so the whole area
does. Double every length of a rectangle and you can fit **four** copies of the original inside the image, not two.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 120" role="img" aria-label="A small square of side 1 next to a square of side 2 made of four small squares, and a square of side 3 made of nine small squares">
  <rect x="20" y="80" width="30" height="30" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <rect x="80" y="50" width="30" height="30"/><rect x="110" y="50" width="30" height="30"/><rect x="80" y="80" width="30" height="30"/><rect x="110" y="80" width="30" height="30"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="1.5">
    <rect x="170" y="20" width="30" height="30"/><rect x="200" y="20" width="30" height="30"/><rect x="230" y="20" width="30" height="30"/>
    <rect x="170" y="50" width="30" height="30"/><rect x="200" y="50" width="30" height="30"/><rect x="230" y="50" width="30" height="30"/>
    <rect x="170" y="80" width="30" height="30"/><rect x="200" y="80" width="30" height="30"/><rect x="230" y="80" width="30" height="30"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="35" y="70">k = 1</text><text x="110" y="40">k = 2: 4×</text><text x="215" y="12">k = 3: 9×</text>
  </g>
</svg>
</div>

(For solids, volumes multiply by $k^3$, for the same reason with little cubes. Level 7 takes this further.)

### Scale drawings, maps and blueprints

A **scale drawing** is a dilation of something real. Its **scale** is written as a ratio, drawing length : real
length, using the **same units on both sides**. A scale of **1 : 50** means 1 cm on the drawing stands for 50 cm in
real life, so the scale factor from the real thing to the drawing is $k = \tfrac{1}{50}$.

- **House plans and blueprints** often use 1 : 50 or 1 : 100.
- **Walking maps** often use 1 : 25 000 or 1 : 50 000. At 1 : 25 000, 1 cm on the map is 25 000 cm, which is
  250 m.
- **Model cars** are often 1 : 18 or 1 : 43.

To go from the drawing to real life, **multiply** by the second number. To go from real life to the drawing,
**divide** by it. Then convert units at the end: 100 cm = 1 m and 1000 m = 1 km, so 100 000 cm = 1 km.

Because areas scale by $k^2$, a 1 : 50 plan shows areas $50^2 = 2500$ times smaller than the real ones. Get this
wrong and you buy a fiftieth of the carpet you need.

## Worked examples

**1. A dilation from the origin.** Triangle $A(1, 2)$, $B(3, 2)$, $C(3, 5)$, scale factor 3.

1. Multiply every coordinate by 3: $A'(3, 6)$, $B'(9, 6)$, $C'(9, 15)$.
2. Check: $AB$ runs from $x = 1$ to $x = 3$, length 2. $A'B'$ runs from 3 to 9, length 6. That is $3 \times 2$.
   $BC$ is 3 long and $B'C'$ is 9 long.
3. The area was $\tfrac12 \times 2 \times 3 = 3$; now it is $\tfrac12 \times 6 \times 9 = 27 = 3^2 \times 3$.

**2. A dilation from another centre.** Centre $C(1, 1)$, scale factor 2, point $P(3, 4)$.

1. From $C$ to $P$ is 2 across and 3 up.
2. Double it: 4 across and 6 up.
3. $P' = (1 + 4,\ 1 + 6) = (5, 7)$.

**3. A map.** On a 1 : 25 000 map two lakes are 4.2 cm apart. The real distance is
$4.2 \times 25\,000 = 105\,000$ cm. Divide by 100 000 to get kilometres: 1.05 km.

**4. A blueprint.** On a 1 : 50 plan, a room measures 8 cm by 6 cm.

1. Real size: $8 \times 50 = 400$ cm $= 4$ m, and $6 \times 50 = 300$ cm $= 3$ m.
2. Real floor area: $4 \times 3 = 12$ m². The drawing's area is $8 \times 6 = 48$ cm².
3. Check with $k^2$: $12$ m² is $120\,000$ cm², and $120\,000 \div 48 = 2500 = 50^2$.

**5. Finding the centre and the scale factor.** $A(2, 1)$ goes to $A'(5, 1)$ and $B(2, 3)$ goes to $B'(5, 9)$.

1. $AB$ is 2 long (from $y = 1$ to $y = 3$). $A'B'$ is 8 long. So $k = 8 \div 2 = 4$.
2. The centre lies on the line through $A$ and $A'$, which is the horizontal line $y = 1$, and on the line through $B$
   and $B'$. From $B$ to $B'$ is 3 across and 6 up, so that line climbs 2 for every 1 across. Going back from
   $B(2, 3)$ by 1 across and 2 down reaches $(1, 1)$, which is on $y = 1$. The centre is $(1, 1)$.
3. Check: from $(1, 1)$ to $A$ is 1 across; to $A'$ is 4 across. Four times as far. Good.

**6. The globe of Mars.** Mars is about 6779 km across, and the globe is 30 cm across.

1. Same units: 6779 km is $677\,900\,000$ cm. The scale factor is $k = 30 \div 677\,900\,000$, about 1 : 22.6
   million.
2. Olympus Mons is about 22 km $= 2\,200\,000$ cm high. On the globe: $2\,200\,000 \div 22\,600\,000 \approx 0.097$
   cm, about 1 mm.
3. The volcano is about 600 km wide, which on the globe is $60\,000\,000 \div 22\,600\,000 \approx 2.7$ cm: a very
   low, very wide bump. Real Olympus Mons is like that too: its slopes are gentle, just very, very long.

## Try it

1. Dilate $(-2, 3)$ by scale factor 4 with centre at the origin.
2. A 3 cm by 5 cm rectangle is enlarged by scale factor 2.5. Find the new side lengths and both areas. By what number
   was the area multiplied?
3. On a 1 : 50 000 map, how far apart are two towns that are 7 km apart in real life?
4. A model car is built at 1 : 18. The real car is 4.5 m long. How long is the model, in centimetres?
5. A line segment 12 cm long becomes 3 cm long after a dilation. What is the scale factor?
6. A photo 10 cm by 15 cm is enlarged so that its short side becomes 25 cm. How long is the long side?
7. On a 1 : 200 plan, a square patio has an area of 6 cm². What is its real area in m²?
8. Harder: a dilation has centre $(2, 0)$ and scale factor 3. Where does $(4, 1)$ go? Which point goes to $(5, 6)$?

??? note "Answers"
    1. $(4 \times (-2),\ 4 \times 3) = (-8, 12)$.
    2. $3 \times 2.5 = 7.5$ cm and $5 \times 2.5 = 12.5$ cm. Areas: $3 \times 5 = 15$ cm² and $7.5 \times 12.5 = 93.75$
       cm². The area was multiplied by $93.75 \div 15 = 6.25 = 2.5^2$.
    3. 7 km $= 700\,000$ cm. On the map: $700\,000 \div 50\,000 = 14$ cm.
    4. 4.5 m $= 450$ cm. $450 \div 18 = 25$ cm.
    5. $k = 3 \div 12 = \tfrac14$. It is a reduction.
    6. $k = 25 \div 10 = 2.5$, so the long side is $15 \times 2.5 = 37.5$ cm.
    7. Areas scale by $200^2 = 40\,000$. Real area $6 \times 40\,000 = 240\,000$ cm². One m² is
       $100 \times 100 = 10\,000$ cm², so this is $240\,000 \div 10\,000 = 24$ m².
    8. From $(2, 0)$ to $(4, 1)$ is 2 across and 1 up; tripled, 6 across and 3 up: $(8, 3)$. For the second, go
       backwards: from $(2, 0)$ to $(5, 6)$ is 3 across and 6 up; divide by 3: 1 across and 2 up, so the point was
       $(3, 2)$.

## Common mistake

**Scaling areas by $k$ instead of $k^2$.** Doubling the side of a square does not double its area; it makes it four
times as big. A pizza 40 cm across has four times the area of one 20 cm across, not twice. Lengths scale by $k$,
areas by $k^2$, volumes by $k^3$.

**Mixing units in a scale.** "1 cm to 5 km" is fine as words, but as a ratio it must be in one unit:
1 : 500 000. Convert first, then multiply or divide.

## Where it leads

- Previous lesson: [Transformations on the grid](03-transformations-grid.md).
- Next lesson: [Congruent triangles](05-congruent-triangles.md), shapes that match exactly, with $k = 1$.
- Same shape, different size is called **similar**; similar triangles carry geometry to trigonometry in
  [level 7](../level-7/index.md).
- Why $\pi$ is the same for every circle is a dilation argument: [level 6, lesson 4](../level-6/04-pi-circumference.md).
- Scale factors are ratios: [Ratio and proportion](../../ratio/index.md). Units and areas:
  [Measurement](../../measurement/index.md).
- This level: [Level 5: constructions and transformations](index.md).
