---
title: "Beyond: Areas under curves"
---

# Beyond: Areas under curves, and the big link

*Change and motion · step 5 of 5*

## A question to start

A car's odometer (the meter that counts total distance) is broken, but its speedometer works, and a camera
filmed it for a whole trip. You can see the speed at every moment. Can you work out how far the car went?

If the speed never changed, it would be easy: distance = speed × time. But the speed changes all the time. This
page shows that the answer is an **area**, and that finding areas is the exact reverse of finding derivatives. That
link is called the **fundamental theorem of calculus**, and it is one of the most important facts in all of
mathematics.

## The idea

### Distance is the area under a speed-time graph

Draw a **speed-time graph**: time along the bottom, speed up the side.

- If a car goes at a steady 20 m/s for 30 seconds, the graph is a flat line at height 20. The region under it is a
  rectangle, 30 wide and 20 tall. Its area is $30 \times 20 = 600$, and the distance is $20 \times 30 = 600$ m. The
  **area is the distance**.
- If a stone is dropped, its speed is $v(t) = 9.8t$ (from the Master step). The graph is a sloping straight line.
  Up to time $t$, the region under it is a triangle with base $t$ and height $9.8t$, so its area is
  $\dfrac{1}{2} \times t \times 9.8t = 4.9t^2$. That is exactly the distance $d(t) = 4.9t^2$ the stone has fallen.

This is no accident. In a thin strip of time, the speed hardly changes, so the distance covered in that strip is
almost speed × (width of strip): the area of a thin rectangle. Add up all the thin strips and you get the total
distance, which is the total area.

### Areas under curves: add up thin rectangles

For a curved graph, cut the region into thin rectangles and add their areas. Here is the area under $y = x^2$ from
$x = 0$ to $x = 1$, cut into 4 rectangles. Each one is $\frac14$ wide, and its height is the curve's height at its
right edge.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="The curve y equals x squared from 0 to 1, with four rectangles under and slightly above it, each a quarter wide.">
  <g fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8">
    <rect x="60" y="179.375" width="75" height="10.625"/>
    <rect x="135" y="147.5" width="75" height="42.5"/>
    <rect x="210" y="94.375" width="75" height="95.625"/>
    <rect x="285" y="20" width="75" height="170"/>
  </g>
  <path d="M 60 190 Q 210 190 360 20" fill="none" stroke="#eea66f" stroke-width="3"/>
  <line x1="40" y1="190" x2="400" y2="190" stroke="currentColor" stroke-width="1.2"/>
  <line x1="60" y1="200" x2="60" y2="10" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="60" y="205">0</text><text x="135" y="205">¼</text><text x="210" y="205">½</text><text x="285" y="205">¾</text><text x="360" y="205">1</text>
    <text x="385" y="40">y = x²</text>
  </g>
</svg>
</div>

The total area of the rectangles is

$$\frac14\left(\frac{1}{16} + \frac{4}{16} + \frac{9}{16} + \frac{16}{16}\right) = \frac{30}{64} = 0.46875.$$

The rectangles poke out above the curve, so this is a bit too big. Use thinner rectangles and the overshoot gets
smaller:

| Number of rectangles $n$ | 4 | 10 | 100 | 1000 |
| --- | --- | --- | --- | --- |
| Total area | 0.46875 | 0.385 | 0.33835 | 0.3338335 |

The totals close in on $\frac13$. A sum of thin rectangles like this is called a **Riemann sum**, after the
19th-century mathematician Bernhard Riemann, and the number it closes in on is the **definite integral**, written

$$\int_0^1 x^2 \, dx = \frac13.$$

The tall S is a stretched letter S, for "sum". The $dx$ reminds you of the thin widths.

### Why the answer is exactly one third

With $n$ rectangles, each is $\frac1n$ wide and the heights are
$\left(\frac1n\right)^2, \left(\frac2n\right)^2, \ldots, \left(\frac nn\right)^2$. The total is

$$\frac{1}{n} \cdot \frac{1^2 + 2^2 + \cdots + n^2}{n^2} = \frac{1^2 + 2^2 + \cdots + n^2}{n^3}.$$

There is a formula for the sum of the first $n$ squares (it can be proved by induction, as on the
[Patterns Beyond step](../patterns/05-beyond.md)): $1^2 + 2^2 + \cdots + n^2 = \dfrac{n(n+1)(2n+1)}{6}$. So the
total is

$$\frac{(n+1)(2n+1)}{6n^2} = \frac13 + \frac{1}{2n} + \frac{1}{6n^2}.$$

As $n$ grows, the last two parts shrink towards 0, and the total heads to exactly $\frac13$.

### The fundamental theorem of calculus

Adding up rectangles every time would be slow. Here is the shortcut. Let $A(x)$ be the area under a curve $y = f(x)$
from a fixed starting point up to $x$. Move $x$ a tiny bit to the right, by $h$. The area grows by a thin strip,
about $f(x)$ tall and $h$ wide, so

$$\frac{A(x + h) - A(x)}{h} \approx f(x), \quad \text{and as } h \to 0, \quad A'(x) = f(x).$$

**The derivative of the area function is the original function.** Finding areas is the reverse of finding
derivatives. A function $F$ with $F' = f$ is called an **antiderivative** of $f$, and the theorem says

$$\int_a^b f(x)\,dx = F(b) - F(a).$$

For $f(x) = x^2$, the power rule run backwards gives $F(x) = \dfrac{x^3}{3}$ (check: its derivative is
$\dfrac{3x^2}{3} = x^2$). So $\displaystyle\int_0^1 x^2\,dx = \frac{1}{3} - 0 = \frac13$, with no rectangles at all.
This link between slopes and areas was found by Isaac Newton and Gottfried Leibniz, working separately, in the
second half of the 1600s.

## Worked examples

**1. Distance from a changing speed.** A cart's speed is $v(t) = 3t^2$ m/s. How far does it go from $t = 0$ to
$t = 2$?

1. Distance is the area under the speed graph: $\displaystyle\int_0^2 3t^2\,dt$.
2. An antiderivative of $3t^2$ is $t^3$ (its derivative is $3t^2$).
3. Distance $= 2^3 - 0^3 = 8$ m.

**2. An area between two points.** Find $\displaystyle\int_1^2 x^2\,dx$.

$$F(2) - F(1) = \frac{8}{3} - \frac{1}{3} = \frac{7}{3} \approx 2.33.$$

Sense check: on $[1, 2]$ the curve goes from height 1 to height 4, and the interval is 1 wide, so the area must be
between 1 and 4. It is.

**3. A tank filling up.** Water flows into a tank at a rate of $r(t) = 6t$ litres per minute. How much flows in
during the first 4 minutes? The total is the area under the rate graph: an antiderivative of $6t$ is $3t^2$, so the
total is $3 \times 16 - 0 = 48$ litres. (The graph is a triangle, base 4, height 24: area
$\frac12 \times 4 \times 24 = 48$. Same answer.)

## Try it

1. A car drives at a steady 25 m/s for 40 seconds. Sketch the speed-time graph. How far does it go?
2. A sled's speed is $v(t) = 2t$ m/s. Use a triangle to find how far it goes from $t = 0$ to $t = 5$.
3. Estimate $\displaystyle\int_0^1 x^2\,dx$ with 4 rectangles whose heights come from their **left** edges. Is
   this too big or too small? Average it with the right-edge answer, 0.46875.
4. Use the fundamental theorem to find $\displaystyle\int_0^3 x^2\,dx$.
5. Find $\displaystyle\int_0^2 (3x^2 + 1)\,dx$.
6. Check that $F(x) = \dfrac{x^4}{4}$ is an antiderivative of $x^3$, and use it to find $\displaystyle\int_0^2 x^3\,dx$.

??? note "Answers"
    1. A flat line at 25 for 40 seconds: a rectangle of area $25 \times 40 = 1000$. It goes **1000 m**.
    2. A triangle with base 5 and height $v(5) = 10$: area $\frac12 \times 5 \times 10 = 25$ m.
    3. Left heights are $0, \frac{1}{16}, \frac{4}{16}, \frac{9}{16}$, so the area is
       $\frac14 \times \frac{14}{16} = \frac{14}{64} = 0.21875$. Too **small**: these rectangles sit under the
       curve. The average is $\frac{0.21875 + 0.46875}{2} = 0.34375$, already close to $\frac13$.
    4. $\dfrac{3^3}{3} - 0 = 9$.
    5. An antiderivative is $x^3 + x$. So $(8 + 2) - 0 = 10$.
    6. The derivative of $\dfrac{x^4}{4}$ is $\dfrac{4x^3}{4} = x^3$. So the integral is $\dfrac{16}{4} - 0 = 4$.

## Common mistake

**Forgetting to subtract $F(a)$.** $\displaystyle\int_1^2 x^2\,dx$ is not just $F(2) = \frac83$. It is the area
from 1 to 2, so the area from 0 to 1 must be taken off: $F(2) - F(1) = \frac73$. Only when the lower limit gives
$F(a) = 0$ can you leave it out, and it is good practice to write it every time anyway.

## Where it leads

- Back a step: [Master: speed at an instant, the derivative](04-master.md)
- Riemann sums are infinitely many thinner and thinner pieces, which is the kind of thing
  [Infinity and strange math](../infinity/index.md) is about. Areas of shapes without calculus are in
  [Geometry](../geometry/index.md).
- This is where the topic ladders hand over to the U of T calculus guides:
  [MAT137 Unit 7: the definition of the integral](../../uoft/MAT137/unit07.md),
  [Unit 8: the fundamental theorem of calculus](../../uoft/MAT137/unit08.md) and
  [Unit 10: applications of the integral](../../uoft/MAT137/unit10.md). For full proofs, see
  [MAT158 Unit 9: the Riemann integral](../../uoft/MAT158H1/unit09.md).
- The other topics: [all topics](../index.md).
