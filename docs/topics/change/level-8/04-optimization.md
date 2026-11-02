---
title: "Optimization"
---

# Optimization

*Change and motion · level 8, lesson 4 of 7*

## A question to start

Take a square sheet of card, 30 cm by 30 cm. Cut a small square out of each corner and fold up the sides to make an
open box with no lid.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 225" role="img" aria-label="Left: a 30 centimetre square sheet with a square of side x cut from each corner and dashed fold lines; the middle base is 30 minus 2x across. Right: the open box made by folding up the sides, with base 30 minus 2x and height x.">
  <rect x="20" y="20" width="180" height="180" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <rect x="20" y="20" width="30" height="30" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <rect x="20" y="170" width="30" height="30" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <rect x="170" y="20" width="30" height="30" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <rect x="170" y="170" width="30" height="30" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <line x1="50" y1="50" x2="50" y2="170" stroke="currentColor" stroke-dasharray="5 4"/>
  <line x1="50" y1="50" x2="170" y2="50" stroke="currentColor" stroke-dasharray="5 4"/>
  <line x1="170" y1="50" x2="170" y2="170" stroke="currentColor" stroke-dasharray="5 4"/>
  <line x1="50" y1="170" x2="170" y2="170" stroke="currentColor" stroke-dasharray="5 4"/>
  <polygon points="280,150 400,150 400,105 280,105" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="400,150 432,126 432,81 400,105" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="280,105 312,81 432,81" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="312" y1="81" x2="312" y2="126" stroke="currentColor" stroke-dasharray="4 3"/>
  <polyline points="280,150 312,126 432,126" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
  <g font-size="13" fill="currentColor"><text x="35.0" y="216" text-anchor="middle">x</text><text x="110.0" y="216" text-anchor="middle">30 − 2x</text><text x="185.0" y="216" text-anchor="middle">x</text><text x="110.0" y="115.0" text-anchor="middle">base</text><text x="340.0" y="168" text-anchor="middle">30 − 2x</text><text x="274" y="131.5" text-anchor="end">x</text><text x="340.0" y="30" text-anchor="middle">fold up the sides</text></g>
</svg>
</div>

If you cut tiny squares, the box is wide but very shallow: almost no volume. If you cut big squares (nearly 15 cm),
the box is tall but almost no base: again almost no volume. Somewhere in between is the **best** cut, the one that
holds the most. What size should the corner squares be?

Try a few: cuts of 3, 5 and 7 cm give volumes $3 \times 24^2 = 1728$, $5 \times 20^2 = 2000$ and $7 \times 16^2 = 1792$
cm³. It looks like about 5 cm. But is it exactly 5, or 4.9, or 5.2? Calculus gives the exact answer and proves that
nothing beats it.

## The idea

### Optimization means finding the best

To **optimize** is to find the largest or smallest possible value of something: the most volume, the least
material, the shortest route, the biggest profit, the quickest time. These are some of the most useful questions in
science, engineering and business, and derivatives answer them all in the same way.

### Global maxima and minima

In the last lesson a local maximum was a hilltop, higher than its near neighbours. In optimization we want the
**global** (or **absolute**) maximum: the highest value of all, on the whole set of allowed inputs.

Where can it be? Suppose $f$ is continuous on a closed interval $[a, b]$. Then:

1. **A highest and a lowest value exist.** This is the **extreme value theorem**. (Without a closed interval it can
   fail: on the open interval $0 < x < 1$, the function $f(x) = x$ never reaches a largest value: 0.99, 0.999, ...
   always another is bigger.)
2. **They occur either at a critical point or at an endpoint.** At any point strictly inside the interval where the
   graph is smooth and not flat, you could step a little left or right to go higher, and a little the other way to go
   lower, so it cannot be the highest or lowest.

That gives the **closed interval method**: work out $f$ at every critical point inside the interval and at both
endpoints. The biggest of these numbers is the global maximum, the smallest is the global minimum.

### A method for word problems

1. **Draw a picture** and name the quantities with letters.
2. Write a formula for the quantity to be optimized.
3. If it has more than one variable, use the other facts given (the **constraint**) to rewrite it in terms of one
   variable.
4. Find the **domain**: which values of the variable make sense?
5. Differentiate, set the derivative to 0, and solve.
6. Check that you have the max or min you want: compare with the endpoints, or use the first or second derivative test.
7. Answer the question that was asked, with units.

## Worked examples

**1. The box.** Find the cut that gives the largest volume from a 30 cm square.

1. Let the corner squares have side $x$ cm. The base is $(30 - 2x)$ by $(30 - 2x)$ and the height is $x$.
2. Volume: $V(x) = x(30 - 2x)^2$.
3. Domain: $0 \le x \le 15$ (you cannot cut more than half the side).
4. Product and chain rules:
   $V'(x) = (30 - 2x)^2 + x \cdot 2(30 - 2x)(-2) = (30 - 2x)\big[(30 - 2x) - 4x\big] = (30 - 2x)(30 - 6x)$.
5. $V'(x) = 0$ at $x = 15$ or $x = 5$.
6. Compare: $V(0) = 0$, $V(15) = 0$, $V(5) = 5 \times 20^2 = 2000$.
7. The best cut is **exactly 5 cm**, giving a box 20 by 20 by 5 cm, holding **2000 cm³**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 210" role="img" aria-label="The graph of the volume x times 30 minus 2x squared, for x from 0 to 15. It rises from 0 to a peak of 2000 at x equals 5, where the tangent is flat, then falls back to 0 at x equals 15.">
  <line x1="40" y1="188" x2="325" y2="188" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40" y1="188" x2="40" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="121.4" y1="185" x2="121.4" y2="191" stroke="currentColor"/><text x="121.4" y="203" text-anchor="middle">5</text><line x1="202.9" y1="185" x2="202.9" y2="191" stroke="currentColor"/><text x="202.9" y="203" text-anchor="middle">10</text><line x1="284.3" y1="185" x2="284.3" y2="191" stroke="currentColor"/><text x="284.3" y="203" text-anchor="middle">15</text><line x1="37" y1="111.5" x2="43" y2="111.5" stroke="currentColor"/><text x="34" y="115.5" text-anchor="end">1000</text><line x1="37" y1="35" x2="43" y2="35" stroke="currentColor"/><text x="34" y="39" text-anchor="end">2000</text><text x="325" y="182" text-anchor="end">x (cm)</text><text x="46" y="22">V (cm³)</text></g>
  <line x1="121.4" y1="188" x2="121.4" y2="35" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="72.6" y1="35" x2="170.3" y2="35" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="40,188 43.1,175.4 46.1,163.4 49.2,152.1 52.2,141.4 55.3,131.3 58.3,121.7 61.4,112.7 64.4,104.3 67.5,96.5 70.5,89.1 73.6,82.3 76.6,76 79.7,70.3 82.8,65 85.8,60.1 88.9,55.8 91.9,51.9 95,48.4 98,45.4 101.1,42.7 104.1,40.5 107.2,38.7 110.2,37.2 113.3,36.1 116.3,35.4 119.4,35 122.4,35 125.5,35.2 128.6,35.8 131.6,36.7 134.7,37.8 137.7,39.2 140.8,40.9 143.8,42.8 146.9,45 149.9,47.4 153,50 156,52.8 159.1,55.7 162.1,58.9 165.2,62.2 168.2,65.6 171.3,69.2 174.4,72.9 177.4,76.8 180.5,80.7 183.5,84.7 186.6,88.8 189.6,93 192.7,97.2 195.7,101.5 198.8,105.7 201.8,110 204.9,114.3 207.9,118.6 211,122.9 214.1,127.2 217.1,131.4 220.2,135.5 223.2,139.6 226.3,143.6 229.3,147.5 232.4,151.3 235.4,154.9 238.5,158.5 241.5,161.9 244.6,165.2 247.6,168.2 250.7,171.2 253.8,173.9 256.8,176.4 259.9,178.7 262.9,180.8 266,182.6 269,184.2 272.1,185.5 275.1,186.6 278.2,187.4 281.2,187.8 284.3,188" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="121.4" cy="35" r="4" fill="currentColor"/>
  <text x="133.4" y="29" font-size="12" text-anchor="start" fill="currentColor">(5, 2000)</text>
</svg>
</div>

For a square of any side $s$ the same algebra gives $V' = (s - 2x)(s - 6x)$, so the best cut is always $\frac{s}{6}$:
one sixth of the side.

**2. The cheapest can.** A can must hold 500 cm³ (half a litre). What shape uses the least metal?

1. Radius $r$, height $h$. Metal = surface area: two circles and a curved side, $A = 2\pi r^2 + 2\pi r h$.
2. Constraint: volume $\pi r^2 h = 500$, so $h = \dfrac{500}{\pi r^2}$.
3. Substitute: $A(r) = 2\pi r^2 + 2\pi r \cdot \dfrac{500}{\pi r^2} = 2\pi r^2 + \dfrac{1000}{r}$, for $r > 0$.
4. $A'(r) = 4\pi r - \dfrac{1000}{r^2} = 0$ gives $4\pi r^3 = 1000$, so $r^3 = \dfrac{250}{\pi}$ and
   $r = \sqrt[3]{250/\pi} \approx 4.30$ cm.
5. Check: $A''(r) = 4\pi + \dfrac{2000}{r^3} > 0$, so a minimum. (Also $A \to \infty$ as $r \to 0$, a thin pipe, and as
   $r \to \infty$, a flat pancake, so there are no endpoints to worry about.)
6. Then $h = \dfrac{500}{\pi r^2} \approx 8.60$ cm, and $A \approx 349$ cm².

Look at the answer: $h \approx 8.60 = 2 \times 4.30$. **The best can is exactly as tall as it is wide.** (This is no
accident: at the optimum $4\pi r^3 = 1000 = 2 \times 500 = 2\pi r^2 h$, which simplifies to $h = 2r$.) Real drink cans
are taller and thinner; makers also care about the thick ends, the seams, stacking and how a can fits in a hand. A
model is only as good as what it includes.

**3. The shortest path via a river.** You are at $A$, 3 km from a straight river. You must walk to the river to fill
a bucket, then to a barn $B$, 5 km from the river. Measured along the river, $B$ is 8 km further on than $A$. Where
should you touch the river?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 270" role="img" aria-label="A straight river along the bottom. Point A is 3 kilometres above it and point B is 5 kilometres above it, 8 kilometres further along. The best path goes from A down to the river at a distance x equals 3 along, then up to B, making equal angles with the river. B is reflected across the river to B prime, 5 kilometres below, and the dashed straight line from the touching point to B prime continues the line from A.">
  <polygon points="10,132.8 350,132.8 350,143.8 10,143.8" fill="#9cc9ea" fill-opacity="0.6" stroke="none"/>
  <line x1="10" y1="132.8" x2="350" y2="132.8" stroke="currentColor" stroke-width="1.5"/>
  <line x1="42.4" y1="132.8" x2="42.4" y2="67" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="301.4" y1="132.8" x2="301.4" y2="23.2" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="139.5" y1="132.8" x2="301.4" y2="242.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="301.4" y1="132.8" x2="301.4" y2="242.5" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="42.4" y1="67" x2="139.5" y2="132.8" stroke="#eea66f" stroke-width="3"/>
  <line x1="139.5" y1="132.8" x2="301.4" y2="23.2" stroke="#eea66f" stroke-width="3"/>
  <circle cx="42.4" cy="67" r="4" fill="currentColor"/>
  <circle cx="301.4" cy="23.2" r="4" fill="currentColor"/>
  <circle cx="139.5" cy="132.8" r="5" fill="#eea66f"/>
  <circle cx="301.4" cy="242.5" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="38.4" y="59" font-size="12" text-anchor="end" fill="currentColor">A</text>
  <text x="309.4" y="27.2" font-size="12" text-anchor="start" fill="currentColor">B</text>
  <text x="309.4" y="246.5" font-size="12" text-anchor="start" fill="currentColor">B′</text>
  <text x="36.4" y="99.9" font-size="12" text-anchor="end" fill="currentColor">3</text>
  <text x="307.4" y="78" font-size="12" text-anchor="start" fill="currentColor">5</text>
  <text x="307.4" y="187.6" font-size="12" text-anchor="start" fill="currentColor">5</text>
  <text x="91" y="126.8" font-size="12" text-anchor="middle" fill="currentColor">x</text>
  <text x="220.5" y="126.8" font-size="12" text-anchor="middle" fill="currentColor">8 − x</text>
  <text x="16.5" y="142.3" font-size="12" text-anchor="start" fill="currentColor">river</text>
</svg>
</div>

1. Let $x$ be the distance along the river from the point nearest $A$ to where you touch it.
2. Total distance (Pythagoras twice): $D(x) = \sqrt{9 + x^2} + \sqrt{25 + (8 - x)^2}$, for $0 \le x \le 8$.
3. Chain rule: $D'(x) = \dfrac{x}{\sqrt{9 + x^2}} - \dfrac{8 - x}{\sqrt{25 + (8 - x)^2}}$.
4. $D' = 0$ means $\dfrac{x}{\sqrt{9 + x^2}} = \dfrac{8 - x}{\sqrt{25 + (8 - x)^2}}$. Each side is the cosine of the angle a
   path makes with the river, so **the two angles are equal**: you leave the river at the same angle you arrived,
   like light bouncing off a mirror. Equal angles make the two right triangles similar, so $\dfrac{x}{3} = \dfrac{8 - x}{5}$,
   giving $5x = 24 - 3x$ and $x = 3$.
5. $D(3) = \sqrt{18} + \sqrt{50} = 3\sqrt2 + 5\sqrt2 = 8\sqrt2 \approx 11.31$ km. Endpoints: $D(0) \approx 12.43$ and
   $D(8) \approx 13.54$. So the minimum is **11.31 km**, touching the river 3 km along.

A beautiful check without calculus: reflect $B$ in the river to $B'$, 5 km on the other side. Any path $A \to$ river
$\to B$ has the same length as $A \to$ river $\to B'$, and the shortest of those is the straight line, of length
$\sqrt{8^2 + 8^2} = 8\sqrt2$. ✓

**4. Do not forget the endpoints.** Find the largest and smallest values of $f(x) = x^3 - 3x$ on $[0, 2]$.

$f'(x) = 3x^2 - 3 = 0$ at $x = 1$ (and $-1$, outside the interval). Values: $f(0) = 0$, $f(1) = -2$, $f(2) = 2$. The
global minimum is $-2$ at $x = 1$, but the global maximum is **2, at the endpoint** $x = 2$, where $f' \ne 0$. Setting
the derivative to zero alone would have missed it.

## Try it

1. Two positive numbers add to 20. What is the largest their product can be?
2. A farmer has 400 m of fence to make a rectangular field along a straight river, fencing only three sides. What is
   the largest area she can enclose?
3. Find the global maximum and minimum of $f(x) = x^3 - 6x^2 + 9x$ on $[0, 5]$.
4. Find the best cut and the largest volume for an open box made from a 12 cm square sheet.
5. Find the points on the curve $y = x^2$ that are closest to the point $(0, 2)$. (Hint: minimize the **square** of
   the distance; it has its minimum in the same place and has no square root.)
6. An open-topped cylinder (no lid) must hold 1000 cm³. Find the radius and height that use the least material.
7. A rectangle sits on the diameter of a semicircle of radius 1, with its top corners on the curve. What is its largest
   possible area?
8. In the cheapest-can problem, show that for **any** volume $V$ the best can has $h = 2r$.

??? note "Answers"
    1. Numbers $x$ and $20 - x$, product $P = 20x - x^2$, $P' = 20 - 2x = 0$ at $x = 10$. Product $10 \times 10 = 100$
       (endpoints 0 and 20 give 0).
    2. Let the two sides at right angles to the river be $w$; the side along it is $400 - 2w$.
       $A = w(400 - 2w) = 400w - 2w^2$, $A' = 400 - 4w = 0$ at $w = 100$. Field 100 m by 200 m, area **20 000 m²**.
    3. $f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$. Values: $f(0) = 0$, $f(1) = 4$, $f(3) = 0$, $f(5) = 20$. Global max
       **20** at $x = 5$ (an endpoint); global min **0**, at both $x = 0$ and $x = 3$.
    4. $V = x(12 - 2x)^2$, $V' = (12 - 2x)(12 - 6x)$, so $x = 2$ cm ($= \frac{12}{6}$). $V = 2 \times 8^2 = 128$ cm³.
    5. $D = x^2 + (x^2 - 2)^2 = x^4 - 3x^2 + 4$. $D' = 4x^3 - 6x = 2x(2x^2 - 3)$, zero at $x = 0$ and
       $x = \pm\sqrt{3/2} \approx \pm 1.225$. $D(0) = 4$ but $D\left(\pm\sqrt{3/2}\right) = \frac94 - \frac92 + 4 = \frac74$,
       smaller. Closest points $\left(\pm\sqrt{3/2}, \frac32\right)$, at distance $\frac{\sqrt7}{2} \approx 1.32$. (The
       point $(0, 0)$, straight below, is **not** the closest: it is 2 away.)
    6. $A = \pi r^2 + 2\pi r h$ with $h = \frac{1000}{\pi r^2}$: $A = \pi r^2 + \frac{2000}{r}$. $A' = 2\pi r - \frac{2000}{r^2} = 0$
       gives $r^3 = \frac{1000}{\pi}$, $r \approx 6.83$ cm, and $h = \frac{1000}{\pi r^2} \approx 6.83$ cm. Without a lid,
       the best height **equals the radius**.
    7. Half-width $x$, height $\sqrt{1 - x^2}$, area $A = 2x\sqrt{1 - x^2}$ for $0 \le x \le 1$. Easier: maximize
       $A^2 = 4x^2 - 4x^4$. Derivative $8x - 16x^3 = 8x(1 - 2x^2) = 0$ at $x = \frac{1}{\sqrt2}$. Then
       $A = 2 \cdot \frac{1}{\sqrt2} \cdot \frac{1}{\sqrt2} = 1$. Largest area **1**: a rectangle $\sqrt2 \approx 1.414$ wide and $\frac{1}{\sqrt2} \approx 0.707$ tall.
    8. $A = 2\pi r^2 + \frac{2V}{r}$, $A' = 4\pi r - \frac{2V}{r^2} = 0$ gives $2\pi r^3 = V = \pi r^2 h$. Divide by
       $\pi r^2$: $2r = h$.

## Common mistake

**Forgetting the endpoints.** The best value can be at the edge of the domain, where the derivative is not zero
(worked example 4, question 3). Always list the endpoints along with the critical points.

**Optimizing the wrong thing, or answering the wrong question.** In the river problem the question asks **where** to
touch the river (3 km along) and perhaps how far you walk (11.31 km). Re-read the question before you write the
answer.

## Where it leads

- Back: [Curve sketching](03-curve-sketching.md) · Next: [Related rates](05-related-rates.md)
- [Level 8 page](index.md) · [Change and motion topic page](../index.md)
- Best shapes without calculus: [Measurement: best shapes](../../measurement/level-6/04-best-shapes.md).
- Pythagoras and reflections: [Geometry: using Pythagoras](../../geometry/level-6/02-using-pythagoras.md).
- On the U of T shelf: [MAT137 Unit 6: applications of derivatives](../../../uoft/MAT137/unit06.md).
