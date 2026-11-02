---
title: "Areas of curved regions"
---

# Areas of curved regions

*Measurement · level 8, lesson 4 of 6*

## A question to start

Every area formula you know is built from straight lines: rectangles, triangles, trapezoids. Even the circle's area,
$\pi r^2$, was found by cutting a circle into thin slices and rearranging them into something nearly a rectangle.

So here is a puzzle. Draw the curve $y = x^2$ from $x = 0$ to $x = 1$. What is the area between the curve and the
$x$-axis? There is no formula from any earlier lesson. And yet the answer is an exact, simple fraction: $\tfrac13$.

How can a region with a curved edge have an area that is exactly $\tfrac13$? Over two thousand years ago Archimedes
found the area of a region bounded by a parabola, exactly, with no calculus. The idea he used, trapping the answer
between estimates that get better and better, is the idea behind all of integral calculus.

## The idea

### Estimating with a grid

The simplest way to measure a curved region is to cover it with a grid of squares and count.

Take a quarter circle of radius 10 on a grid of 1-by-1 squares.

- Squares **completely inside** the quarter circle: 69. So the area is **at least** 69.
- Squares that are **inside or touching** it (at least partly inside): 86. So the area is **at most** 86.

The true area is between 69 and 86. (It is $\tfrac14 \pi \times 10^2 \approx 78.5$, and indeed $69 < 78.5 < 86$.)

These two numbers are a **lower bound** and an **upper bound**, just like the bounds of a measurement in
[level 7](../level-7/01-no-exact-measurement.md). The gap between them, $86 - 69 = 17$, is made of the squares that
straddle the curved edge. Use a finer grid, with squares half as wide, and the edge squares get smaller. Their number
roughly doubles (the edge is the same length, and twice as many small squares fit along it), but each has a quarter of
the area, so the gap roughly **halves**. Make the grid fine enough and the bounds squeeze together as tightly as you
like.

This is how people estimated areas on maps for centuries: lay a clear grid over a lake, a field or a crater on a map
of Mars, and count.

### Rectangles under a curve

For a region under a graph, rectangles fit better than squares. Split the interval from 0 to 1 into $n$ equal strips
of width $\tfrac1n$. On each strip, put a rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 225" role="img" aria-label="The curve y equals x squared from 0 to 1, with four strips. Tall blue rectangles reach the curve at the right end of each strip and stick out above it; short orange rectangles reach the curve at the left end and stay below it">
  <g stroke="currentColor" stroke-width="1">
    <rect x="40" y="188.75" width="80" height="11.25" fill="#9cc9ea" fill-opacity="0.6"/>
    <rect x="120" y="155" width="80" height="45" fill="#9cc9ea" fill-opacity="0.6"/>
    <rect x="200" y="98.75" width="80" height="101.25" fill="#9cc9ea" fill-opacity="0.6"/>
    <rect x="280" y="20" width="80" height="180" fill="#9cc9ea" fill-opacity="0.6"/>
    <rect x="120" y="188.75" width="80" height="11.25" fill="#eea66f"/>
    <rect x="200" y="155" width="80" height="45" fill="#eea66f"/>
    <rect x="280" y="98.75" width="80" height="101.25" fill="#eea66f"/>
  </g>
  <polyline fill="none" stroke="currentColor" stroke-width="2.5" points="40.0,200.0 48.0,199.9 56.0,199.6 64.0,199.0 72.0,198.2 80.0,197.2 88.0,195.9 96.0,194.5 104.0,192.8 112.0,190.9 120.0,188.8 128.0,186.4 136.0,183.8 144.0,181.0 152.0,177.9 160.0,174.7 168.0,171.2 176.0,167.5 184.0,163.6 192.0,159.4 200.0,155.0 208.0,150.4 216.0,145.5 224.0,140.5 232.0,135.2 240.0,129.7 248.0,123.9 256.0,118.0 264.0,111.8 272.0,105.4 280.0,98.8 288.0,91.9 296.0,84.8 304.0,77.5 312.0,70.0 320.0,62.2 328.0,54.2 336.0,46.0 344.0,37.6 352.0,28.9 360.0,20.0"/>
  <line x1="30" y1="200" x2="380" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="40" y="216">0</text><text x="120" y="216">¼</text><text x="200" y="216">½</text><text x="280" y="216">¾</text><text x="360" y="216">1</text>
    <text x="150" y="110">y = x²</text>
  </g>
</svg>
</div>

- **Upper sum** (blue): each rectangle is as tall as the curve at the **right** end of its strip. The curve rises, so
  these rectangles poke out above it. Their total is **more** than the area.
- **Lower sum** (orange): each rectangle is as tall as the curve at the **left** end. These stay under the curve. Their
  total is **less** than the area.

With $n = 4$, the heights are $x^2$ at $x = 0, \tfrac14, \tfrac12, \tfrac34, 1$, which are
$0, \tfrac1{16}, \tfrac4{16}, \tfrac9{16}, 1$. Each width is $\tfrac14$.

$$\text{upper} = \tfrac14\left(\tfrac{1}{16} + \tfrac{4}{16} + \tfrac{9}{16} + \tfrac{16}{16}\right) = \tfrac{30}{64} = 0.46875,$$

$$\text{lower} = \tfrac14\left(0 + \tfrac{1}{16} + \tfrac{4}{16} + \tfrac{9}{16}\right) = \tfrac{14}{64} = 0.21875.$$

So $0.21875 < \text{area} < 0.46875$. Not very tight yet. Look at the gap: it is exactly the last blue rectangle,
$\tfrac14 \times 1 = 0.25$. Each orange rectangle is exactly as tall as the blue rectangle one strip to its
left, so the two sets are the same rectangles except for the tallest blue one, at the right end. With $n$ strips, the gap is $\tfrac1n \times 1 = \tfrac1n$.
So the gap shrinks to zero as $n$ grows.

| $n$ | lower sum | upper sum | gap |
| --- | --- | --- | --- |
| 4 | 0.21875 | 0.46875 | 0.25 |
| 10 | 0.285 | 0.385 | 0.1 |
| 100 | 0.32835 | 0.33835 | 0.01 |

Both sums close in on $0.333\ldots = \tfrac13$.

### Proving the area is exactly $\tfrac13$

The table suggests $\tfrac13$. To be sure, we work out the upper sum for **every** $n$ at once. With $n$ strips, the
heights at the right ends are $\left(\tfrac1n\right)^2, \left(\tfrac2n\right)^2, \ldots, \left(\tfrac nn\right)^2$,
and each width is $\tfrac1n$:

$$U_n = \frac1n\left(\frac{1^2 + 2^2 + \cdots + n^2}{n^2}\right) = \frac{1^2 + 2^2 + \cdots + n^2}{n^3}.$$

There is a known formula for the sum of the first $n$ squares (it can be proved by induction, see
[Patterns](../../patterns/index.md)):

$$1^2 + 2^2 + \cdots + n^2 = \frac{n(n+1)(2n+1)}{6}.$$

(Check: $n = 10$ gives $\tfrac{10 \times 11 \times 21}{6} = 385$, and $1 + 4 + 9 + \cdots + 100 = 385$. ✓) So

$$U_n = \frac{n(n+1)(2n+1)}{6n^3} = \frac{1}{6}\left(1 + \frac1n\right)\left(2 + \frac1n\right).$$

As $n$ gets larger and larger, $\tfrac1n$ gets as close to 0 as we like, so $U_n$ gets as close as we like to
$\tfrac16 \times 1 \times 2 = \tfrac13$. The lower sum is $U_n - \tfrac1n$, which closes in on $\tfrac13$ too.

The true area is trapped between the lower and upper sums for every $n$. The only number that is above every lower
sum and below every upper sum is $\tfrac13$. So the area is **exactly** $\tfrac13$.

The number that the sums approach is called a **limit**, and this area is written
$\displaystyle\int_0^1 x^2 \, dx = \tfrac13$, read "the integral of $x^2$ from 0 to 1". The long S stands for "sum",
and $dx$ for the thin width. This is the definition of the integral in first-year calculus.

### Archimedes and the parabola

Long before limits had a name, Archimedes (in the third century BC, in a work called *Quadrature of the Parabola*)
found the area of a **parabolic segment**: the region between a parabola and a straight line across it. His answer:
**the segment is exactly $\tfrac43$ of the largest triangle that fits inside it.**

Take the parabola $y = 1 - x^2$ and the line $y = 0$. The segment runs from $x = -1$ to $x = 1$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 220" role="img" aria-label="A parabolic segment above a horizontal chord. A large triangle inside it has its top at the vertex of the parabola. Two smaller triangles fill the gaps on each side, each with its top on the parabola">
  <polyline fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5" points="40.0,200.0 48.0,184.4 56.0,169.6 64.0,155.6 72.0,142.4 80.0,130.0 88.0,118.4 96.0,107.6 104.0,97.6 112.0,88.4 120.0,80.0 128.0,72.4 136.0,65.6 144.0,59.6 152.0,54.4 160.0,50.0 168.0,46.4 176.0,43.6 184.0,41.6 192.0,40.4 200.0,40.0 208.0,40.4 216.0,41.6 224.0,43.6 232.0,46.4 240.0,50.0 248.0,54.4 256.0,59.6 264.0,65.6 272.0,72.4 280.0,80.0 288.0,88.4 296.0,97.6 304.0,107.6 312.0,118.4 320.0,130.0 328.0,142.4 336.0,155.6 344.0,169.6 352.0,184.4 360.0,200.0"/>
  <polygon points="40,200 360,200 200,40" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="40,200 120,80 200,40" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="360,200 280,80 200,40" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="200" y="160">area 1</text><text x="112" y="118">⅛</text><text x="288" y="118">⅛</text>
    <text x="40" y="216">−1</text><text x="360" y="216">1</text><text x="200" y="32">(0, 1)</text>
  </g>
</svg>
</div>

1. **Stage 1.** The big triangle has corners $(-1, 0)$, $(1, 0)$ and $(0, 1)$: base 2, height 1, area **1**.
2. **Stage 2.** Two gaps are left, one each side. In each gap, put a triangle whose top is on the parabola halfway
   across: at $x = \pm\tfrac12$, where $y = \tfrac34$. The left one has corners $(-1, 0)$, $(-\tfrac12, \tfrac34)$,
   $(0, 1)$, and its area works out to $\tfrac18$. The two together: $\tfrac14$. **Each stage adds a quarter of the
   one before.**
3. **Stage 3.** Four smaller gaps, four smaller triangles, total $\tfrac1{16}$. And so on.

Archimedes proved the "quarter" pattern holds at every stage, for every parabola. So the area is

$$1 + \frac14 + \frac1{16} + \frac1{64} + \cdots$$

He did not add infinitely many terms (the Greeks avoided that). Instead he showed, by a double argument, that the area
could not be more than $\tfrac43$ and could not be less than $\tfrac43$. In modern terms, this is a **geometric series**
with ratio $\tfrac14$, and its sum is $\dfrac{1}{1 - \tfrac14} = \dfrac43$. (Why: if $S = 1 + \tfrac14 + \tfrac1{16} + \cdots$,
then $\tfrac14 S = \tfrac14 + \tfrac1{16} + \cdots$, and subtracting gives $\tfrac34 S = 1$.)

Check with today's tools: the area under $y = 1 - x^2$ from $-1$ to $1$ is the rectangle $2 \times 1 = 2$ minus the
area under $x^2$ on both sides, $2 \times \tfrac13$. That is $2 - \tfrac23 = \tfrac43$. ✓ Archimedes and the
rectangles agree.

## Worked examples

**1. A better estimate from the same rectangles.** With $n = 4$ for $y = x^2$, average the lower and upper sums.

$(0.21875 + 0.46875) \div 2 = 0.34375$. This is the same as using trapezoids instead of rectangles (each trapezoid is
the average of a short and a tall rectangle). Error: $0.34375 - 0.3333 \approx 0.0104$, much better than either sum
alone (each was off by at least 0.11).

**2. Upper sum for $n = 5$.** For $y = x^2$ on $[0, 1]$:

$U_5 = \dfrac{1 + 4 + 9 + 16 + 25}{125} = \dfrac{55}{125} = 0.44$. The formula agrees:
$\tfrac16 \times \tfrac65 \times \tfrac{11}{5} = \tfrac{66}{150} = 0.44$. ✓ Lower sum: $0.44 - \tfrac15 = 0.24$.

**3. Scaling the answer.** Find the area under $y = x^2$ from 0 to 2, using the square-cube idea instead of new sums.

Stretch the region from $[0, 1]$ to $[0, 2]$: every $x$ doubles, and the heights $x^2$ become 4 times as big. So the
region is stretched by 2 sideways and by 4 upwards, and its area is multiplied by $2 \times 4 = 8$:
$8 \times \tfrac13 = \tfrac83 \approx 2.67$.

**4. A grid count.** On a map with 1 km squares, a crater covers 21 squares completely and touches 35 in total. Give
bounds and a best estimate for its area.

Bounds: between 21 and 35 km². A sensible single estimate is the middle, about 28 km², with uncertainty about
$\pm 7$ km². A finer grid would narrow it.

## Try it

1. Find the lower and upper sums for $y = x^2$ on $[0, 1]$ with $n = 2$.
2. Use the formula $U_n = \tfrac16(1 + \tfrac1n)(2 + \tfrac1n)$ to find $U_{1000}$. How close to $\tfrac13$ is it?
3. How many strips are needed for the gap between lower and upper sums to be less than 0.001?
4. Find the area of the parabolic segment between $y = 4 - x^2$ and the $x$-axis, using Archimedes' rule. (First find
   the big triangle.)
5. Add the first five terms of $1 + \tfrac14 + \tfrac1{16} + \cdots$. How far from $\tfrac43$ is it?
6. For $y = x$ on $[0, 1]$, find the upper sum with $n$ strips (use $1 + 2 + \cdots + n = \tfrac{n(n+1)}{2}$), and
   show it closes in on the triangle's area $\tfrac12$.
7. Use the scaling idea of worked example 3 to find the area under $y = x^2$ from 0 to 3.
8. Explain why, for a rising curve, the lower sum is always below the true area and the upper sum above it.

??? note "Answers"
    1. Heights at $0, \tfrac12, 1$: $0, \tfrac14, 1$. Width $\tfrac12$. Lower $= \tfrac12(0 + \tfrac14) = \tfrac18 = 0.125$.
       Upper $= \tfrac12(\tfrac14 + 1) = \tfrac58 = 0.625$.
    2. $\tfrac16 \times 1.001 \times 2.001 = \tfrac{2.003001}{6} \approx 0.33383$, about 0.0005 above $\tfrac13$.
    3. The gap is $\tfrac1n < 0.001$, so $n > 1000$: **1001 strips** or more.
    4. The parabola meets the axis at $x = \pm 2$ and has its top at $(0, 4)$. Big triangle: base 4, height 4, area 8.
       Segment: $\tfrac43 \times 8 = \tfrac{32}{3} \approx 10.67$. (Check: $4 \times 4 - 2 \times \tfrac83 = 16 - \tfrac{16}{3} = \tfrac{32}{3}$. ✓)
    5. $1 + 0.25 + 0.0625 + 0.015625 + 0.00390625 = 1.33203125$; $\tfrac43 - 1.33203125 \approx 0.0013$.
    6. $U_n = \tfrac1n\left(\tfrac1n + \tfrac2n + \cdots + \tfrac nn\right) = \tfrac{1 + 2 + \cdots + n}{n^2} = \tfrac{n(n+1)}{2n^2} = \tfrac12\left(1 + \tfrac1n\right)$,
       which gets as close as we like to $\tfrac12$ as $n$ grows.
    7. Sideways $\times 3$, upwards $\times 9$: area $\times 27$, so $27 \times \tfrac13 = 9$.
    8. On each strip a rising curve is lowest at the left end and highest at the right end. The left-height rectangle
       lies under the curve on that strip, and the right-height rectangle covers it, so adding up strip by strip,
       lower $\le$ area $\le$ upper.

## Common mistake

**Thinking more strips give the exact answer.** No finite number of rectangles gives exactly $\tfrac13$; every upper
sum is a little too big. The exact value comes from the **limit**, the one number trapped between all the lower and
all the upper sums.

**Forgetting the strip width.** The area of each rectangle is height **times width**. Adding the heights alone gives a
number $n$ times too big.

## Where it leads

- Back: [Parallax](03-parallax.md) · Next: [The SI system](05-si-system.md)
- [Level 8 page](index.md) · [Measurement topic page](../index.md)
- Rates and areas under graphs, and how they undo each other: [Change](../../change/index.md).
- Geometric series and infinite sums: [Infinity](../../infinity/index.md) and [Patterns](../../patterns/index.md).
- The rigorous version at U of T: [MAT137 Unit 7: the definition of the integral](../../../uoft/MAT137/unit07.md)
  and [Unit 8: the fundamental theorem of calculus](../../../uoft/MAT137/unit08.md).
