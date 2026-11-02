---
title: "From secant to tangent"
---

# From secant to tangent

*Change and motion · level 6, lesson 3 of 6*

## A question to start

In geometry, a **tangent** to a circle is a line that touches the circle at exactly one point, without cutting
through it. Like a wheel resting on a road.

Is that the right idea for **any** curve? Try it on the U-shaped curve $y = x^2$. The upright line $x = 1$ meets the
curve at exactly one point, $(1, 1)$, but it plainly is not "resting" on the curve: it slices straight through. And
on the curve $y = x^3$, the line that rests perfectly against the curve at $(1, 1)$ meets the curve again far away,
at $(-2, -8)$.

So "touches at one point" is the wrong test. What is a tangent line, really? The answer comes from the last lesson,
drawn as a picture, and it turns out to be the same thing as the rate of change at an instant.

## The idea

### Secant lines that swing

Take the curve $y = x^2$ and the point $P = (1, 1)$ on it. Pick a second point $Q$ on the curve, further along, and
draw the secant line through $P$ and $Q$. Its slope is the average rate of change between them (level 5,
[lesson 3](../level-5/03-average-rate-curve.md)).

Now slide $Q$ along the curve towards $P$. The secant line swings round, pivoting on $P$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="The curve y equals x squared with the point P at (1, 1). Three secant lines go from P to points Q further along the curve at x equals 2, 1.5 and 1.2, each less steep than the last. The tangent line at P, with slope 2, is drawn thicker.">
  <line x1="40" y1="172" x2="410" y2="172" stroke="currentColor" stroke-width="1.2"/>
  <line x1="70" y1="195" x2="70" y2="5" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="40.0,170.6 48.7,171.3 57.4,171.7 66.1,172.0 74.8,172.0 83.5,171.7 92.2,171.2 100.9,170.5 109.6,169.5 118.3,168.3 127.0,166.8 135.7,165.1 144.4,163.1 153.1,161.0 161.8,158.5 170.5,155.8 179.2,152.9 187.9,149.8 196.6,146.4 205.3,142.7 214.0,138.8 222.7,134.7 231.4,130.3 240.1,125.7 248.8,120.8 257.5,115.7 266.2,110.4 274.9,104.8 283.6,99.0 292.3,92.9 301.0,86.6 309.7,80.1 318.4,73.3 327.1,66.2 335.8,59.0 344.5,51.4 353.2,43.7 361.9,35.7 370.6,27.4 379.3,18.9 388.0,10.2" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="145.0" y1="190.0" x2="395.0" y2="10.0" stroke="#9cc9ea" stroke-width="1.8"/>
  <line x1="130.0" y1="190.0" x2="400.0" y2="28.0" stroke="#9cc9ea" stroke-width="1.8"/>
  <line x1="117.7" y1="190.0" x2="400.0" y2="41.0" stroke="#9cc9ea" stroke-width="1.8"/>
  <line x1="107.5" y1="190.0" x2="400.0" y2="49.6" stroke="#eea66f" stroke-width="3.5"/>
  <circle cx="370" cy="28" r="4" fill="#9cc9ea" stroke="currentColor"/><circle cx="295" cy="91" r="4" fill="#9cc9ea" stroke="currentColor"/><circle cx="250" cy="120.2" r="4" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="220" cy="136" r="5" fill="currentColor"/>
  <g font-size="12" fill="currentColor">
    <text x="200" y="128">P</text><text x="352" y="22">Q</text><text x="280" y="86">Q</text><text x="238" y="114">Q</text>
    <text x="300" y="150">tangent at P</text><text x="300" y="164">(slope 2)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="220" y="188">1</text><text x="370" y="188">2</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="64" y="140">1</text><text x="64" y="68">3</text>
  </g>
</svg>
</div>

| $Q$ at $x =$ | Rise $x^2 - 1$ | Run $x - 1$ | Slope of secant $PQ$ |
| --- | --- | --- | --- |
| 2 | 3 | 1 | 3 |
| 1.5 | 1.25 | 0.5 | 2.5 |
| 1.2 | 0.44 | 0.2 | 2.2 |
| 1.1 | 0.21 | 0.1 | 2.1 |
| 1.01 | 0.0201 | 0.01 | 2.01 |

With $Q$ at $x = 1 + h$, the slope is $\dfrac{(1 + h)^2 - 1}{h} = \dfrac{2h + h^2}{h} = 2 + h$. As $Q$ slides to $P$,
$h$ shrinks to 0, and the slopes head to **2**. The secant lines settle down onto one line through $P$ with slope 2.

That line is the **tangent line** to the curve at $P$:

**The tangent line at a point is the line through that point whose slope is the limit of the slopes of the secant
lines.**

Its slope is the **rate of change at that point**, also called the **instantaneous rate of change**. For the falling
stone, the slope of the tangent to the distance-time curve is the speed at that instant.

(If $Q$ comes from the other side, at $x = 1 - h$, the slopes are $2 - h$: 1.9, 1.99, ... The same limit, the same
line. A tangent must work from both sides.)

### The equation of the tangent

The tangent at $P = (1, 1)$ has slope 2. A line with slope 2 is $y = 2x + b$; it passes through $(1, 1)$, so
$1 = 2 + b$ and $b = -1$. The tangent line is

$$y = 2x - 1.$$

### Zoom in: why a smooth curve looks straight

Here is the curve $y = x^2$ (dark) and its tangent at $P$ (orange), seen through a zooming microscope centred on $P$.
Each window is narrower than the last.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 160" role="img" aria-label="Three zoomed views around the point P on y equals x squared, each with the tangent line. In the widest view the curve bends away from the tangent; in the middle view it bends a little; in the narrowest view the curve and the tangent are almost the same line.">
  <defs>
    <clipPath id="ch56z1"><rect x="10" y="10" width="120" height="120"/></clipPath>
    <clipPath id="ch56z2"><rect x="150" y="10" width="120" height="120"/></clipPath>
    <clipPath id="ch56z3"><rect x="290" y="10" width="120" height="120"/></clipPath>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1"><rect x="10" y="10" width="120" height="120"/><rect x="150" y="10" width="120" height="120"/><rect x="290" y="10" width="120" height="120"/></g>
  <g clip-path="url(#ch56z1)">
    <line x1="10.0" y1="124.5" x2="130.0" y2="15.5" stroke="#eea66f" stroke-width="3"/>
    <polyline points="10.0,97.3 15.0,97.1 20.0,96.5 25.0,95.6 30.0,94.2 35.0,92.5 40.0,90.5 45.0,88.0 50.0,85.2 55.0,81.9 60.0,78.3 65.0,74.4 70.0,70.0 75.0,65.3 80.0,60.2 85.0,54.7 90.0,48.8 95.0,42.5 100.0,35.9 105.0,28.9 110.0,21.5 115.0,13.8 120.0,5.6" fill="none" stroke="currentColor" stroke-width="2"/>
  </g>
  <g clip-path="url(#ch56z2)">
    <line x1="150.0" y1="124.5" x2="270.0" y2="15.5" stroke="#eea66f" stroke-width="3"/>
    <polyline points="150.0,116.4 155.0,113.1 160.0,109.8 165.0,106.3 170.0,102.7 175.0,99.0 180.0,95.2 185.0,91.3 190.0,87.3 195.0,83.1 200.0,78.9 205.0,74.5 210.0,70.0 215.0,65.4 220.0,60.7 225.0,55.9 230.0,50.9 235.0,45.9 240.0,40.7 245.0,35.4 250.0,30.0 255.0,24.5 260.0,18.9 265.0,13.1 270.0,7.3" fill="none" stroke="currentColor" stroke-width="2"/>
  </g>
  <g clip-path="url(#ch56z3)">
    <line x1="290.0" y1="124.5" x2="410.0" y2="15.5" stroke="#eea66f" stroke-width="3"/>
    <polyline points="290.0,122.4 295.0,118.2 300.0,113.9 305.0,109.7 310.0,105.4 315.0,101.1 320.0,96.7 325.0,92.3 330.0,87.9 335.0,83.5 340.0,79.0 345.0,74.5 350.0,70.0 355.0,65.4 360.0,60.8 365.0,56.2 370.0,51.6 375.0,46.9 380.0,42.2 385.0,37.4 390.0,32.7 395.0,27.9 400.0,23.0 405.0,18.2 410.0,13.3" fill="none" stroke="currentColor" stroke-width="2"/>
  </g>
  <circle cx="70" cy="70" r="3.5" fill="currentColor"/><circle cx="210" cy="70" r="3.5" fill="currentColor"/><circle cx="350" cy="70" r="3.5" fill="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="70" y="148">x from 0 to 2</text><text x="210" y="148">x from 0.7 to 1.3</text><text x="350" y="148">x from 0.92 to 1.08</text>
  </g>
</svg>
</div>

The more you zoom, the less the curve bends away from the line. Under a strong enough microscope, the curve and its
tangent cannot be told apart. A curve that behaves like this at a point is called **smooth** there. This is the deep
reason calculus works: **close up, a smooth curve is a straight line**, and straight lines are something we fully
understand.

Why does it happen? Compare the curve and the tangent a small step $h$ away from $P$. The curve has height
$(1 + h)^2 = 1 + 2h + h^2$; the tangent has height $2(1 + h) - 1 = 1 + 2h$. The gap between them is exactly $h^2$.

- For $h = 0.1$, the gap is 0.01: a tenth of the step.
- For $h = 0.01$, the gap is 0.0001: a hundredth of the step.

The gap shrinks **much faster** than the step. So when you zoom in (making the window, and so $h$, small, then blowing
the picture up to fill the screen), the gap becomes a smaller and smaller part of the picture, and vanishes.

### Where there is no tangent: corners

Not every curve is smooth everywhere. A V shape, like the graph of $y = |x|$ (the size of $x$ without its sign), has a
sharp corner at $(0, 0)$. Secants from the right all have slope $+1$; secants from the left all have slope $-1$. The
two sides never agree, and however far you zoom, the corner stays a corner. There is **no tangent** there, and no
single rate of change.

A real example: a ball bouncing on the floor. Its height-time graph has a sharp corner at each bounce, because its
velocity flips from down to up almost instantly. At the exact instant of the bounce, "its velocity" has no one value.

## Worked examples

**1. Tangent to $y = x^2$ at $x = 3$.**

1. Secant slope from $(3, 9)$ to $(3 + h, (3 + h)^2)$: $\dfrac{6h + h^2}{h} = 6 + h \to 6$.
2. Tangent: $y = 6x + b$ through $(3, 9)$: $9 = 18 + b$, so $b = -9$. **$y = 6x - 9$**.

**2. The stone's tangent.** For $d = 4.9t^2$, the tangent at $t = 2$ has slope 19.6 (lesson 2) and passes through
$(2, 19.6)$. Its equation: $d = 19.6t + b$ with $19.6 = 39.2 + b$, so $b = -19.6$: **$d = 19.6t - 19.6$**.

Meaning: if gravity were switched off at $t = 2$, the stone would carry on at a steady 19.6 m/s, and its graph would
follow this straight line. At $t = 3$ it would be at $58.8 - 19.6 = 39.2$ m instead of the real 44.1 m: the real stone
is ahead because it keeps speeding up.

**3. A tangent that meets the curve again.** For $y = x^3$, the tangent at $(1, 1)$ has slope 3 (last lesson,
question 8), so it is $y = 3x - 2$. Where else does it meet the curve? Try $x = -2$: the curve gives $(-2)^3 = -8$, the
line gives $3 \times (-2) - 2 = -8$. They meet again at $(-2, -8)$. So a tangent can meet a curve more than once; what
makes it a tangent is that it matches the curve's **direction** at the point, not how often it meets it.

**4. Using a tangent as a shortcut.** Close to $P$, the curve and its tangent are nearly the same. Estimate
$1.03^2$ using the tangent $y = 2x - 1$ at $(1, 1)$.

Tangent at $x = 1.03$: $2.06 - 1 = 1.06$. True value: $1.0609$. The error is $0.03^2 = 0.0009$, just as the gap rule
says.

## Try it

1. For $y = x^2$, work out the slope of the secant from $(1, 1)$ to $(1.05, 1.1025)$. Is it close to 2?
2. Find the tangent line to $y = x^2$ at $(2, 4)$.
3. Find the tangent line to $y = x^2$ at $(-1, 1)$. Which way does it slope, and why does that make sense?
4. Find the tangent line to the stone's graph $d = 4.9t^2$ at $t = 1$. Where would the stone be at $t = 2$ if it carried
   on at that steady speed?
5. The tangent to $y = x^2$ at $(0, 0)$ is $y = 0$, the $x$-axis. How big is the gap between the curve and this
   tangent at $x = 0.1$ and at $x = 0.01$?
6. Use the tangent at $(1, 1)$ to estimate $0.98^2$. What is the error?
7. Explain why the graph of $y = |x|$ has no tangent at $(0, 0)$.
8. The line $x = 1$ meets $y = x^2$ only at $(1, 1)$. Explain why it is not the tangent there.

??? note "Answers"
    1. $(1.1025 - 1) \div 0.05 = 0.1025 \div 0.05 = 2.05$. Yes ($2 + h$ with $h = 0.05$).
    2. Slope $\dfrac{(2 + h)^2 - 4}{h} = 4 + h \to 4$. Line: $y = 4x + b$, $4 = 8 + b$, $b = -4$: **$y = 4x - 4$**.
    3. Slope $\dfrac{(-1 + h)^2 - 1}{h} = -2 + h \to -2$. Line: $1 = 2 + b$, $b = -1$: **$y = -2x - 1$**. It slopes
       down: at $x = -1$ the curve is still going down towards its lowest point at 0.
    4. Slope 9.8, through $(1, 4.9)$: $4.9 = 9.8 + b$, $b = -4.9$, so $d = 9.8t - 4.9$. At $t = 2$: $19.6 - 4.9 = 14.7$
       m (the real stone is at 19.6 m).
    5. The gap is $x^2$: 0.01 at $x = 0.1$ and 0.0001 at $x = 0.01$.
    6. Tangent at $x = 0.98$: $1.96 - 1 = 0.96$. True: $0.9604$. Error $0.0004 = 0.02^2$.
    7. From the right, all secants through $(0, 0)$ have slope 1; from the left, slope $-1$. They never agree, so there
       is no single limit slope, and zooming in always shows the same sharp corner.
    8. Its slope is undefined (upright), but the secant slopes near $(1, 1)$ all approach 2. The tangent must have
       the limit slope, 2. The line $x = 1$ crosses the curve instead of matching its direction.

## Common mistake

**Defining a tangent as "touches the curve once".** That works for circles, but not for most curves: upright lines can
cross once without being tangents, and tangents can meet the curve again elsewhere. A tangent is the line with the
**limit of the secant slopes**.

**Drawing the tangent through two points of the curve.** That is a secant. A tangent goes through **one** point of
interest and points the way the curve is heading there.

## Where it leads

- Back: [Shrinking the interval](02-shrinking-interval.md) · Next: [Estimating instantaneous rates from data and graphs](04-estimating-rates.md).
- [Level 6 page](index.md) · [Change and motion topic page](../index.md)
- Tangents to circles: [Geometry](../../geometry/index.md); lines and their equations:
  [Slope and the equation of a line](../../geometry/level-6/06-slope-line-equation.md).
- The slope of the tangent gets a name and a symbol, $f'(a)$, the **derivative**: [level 7](../level-7/index.md).
- On the U of T shelf: [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md).
