---
title: "Curve sketching"
---

# Curve sketching

*Change and motion · level 8, lesson 3 of 7*

## A question to start

Here is a table of values for $f(x) = x^4 - 4x^3 + 10$:

| $x$ | $-1$ | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- | --- |
| $f(x)$ | 15 | 10 | 7 | $-6$ | $-17$ | 10 |

Join the dots and you get a curve that slides steadily downhill to a lowest point near $x = 3$, then shoots up. Is
that the whole story?

No. At $x = 0$ the graph goes perfectly **flat** for an instant, like a step on a staircase, and then carries on
down. And the way it bends changes twice, at $x = 0$ and at $x = 2$. Not one of these features can be seen in the
table. Plotting points shows you where the graph **is**; derivatives tell you what it **does** between the points.
This lesson puts everything together into a method for sketching a graph with every important feature in the right
place.

## The idea

### Going up and going down

A function is **increasing** on an interval if its values go up as $x$ goes right, and **decreasing** if they go
down. The first derivative tells you which:

- if $f'(x) > 0$ on an interval, $f$ is increasing there;
- if $f'(x) < 0$ on an interval, $f$ is decreasing there.

This is very believable (positive slope means going up), and it can be proved from a fact called the **mean value
theorem**: between any two points, the secant's slope equals the tangent's slope at some point in between. So if
every tangent slope is positive, every secant slope is positive, and the function goes up. The theorem itself is on
the U of T shelf.

### Critical points and the first derivative test

A **local maximum** is a point higher than all its near neighbours (a hilltop); a **local minimum** is lower than its
neighbours (a valley bottom). At a smooth hilltop or valley the tangent must be flat. So the candidates are the
**critical points**: the values of $x$ where $f'(x) = 0$ or $f'(x)$ does not exist.

Not every critical point is a hill or valley (think of $x^3$ at 0). To decide, check the sign of $f'$ on each side.
This is the **first derivative test**:

| Sign of $f'$: left, then right | What $f$ has at $c$ |
| --- | --- |
| $+$ then $-$ | a local maximum |
| $-$ then $+$ | a local minimum |
| same sign on both sides | neither: a flat moment on the way up or down |

### Concavity: which way the graph bends

The second derivative $f''$ tells you how the **slope** is changing.

- If $f''(x) > 0$, the slope is increasing: the graph bends **upwards**, like a cup. This is called **concave up**.
  Every tangent lies **below** the curve.
- If $f''(x) < 0$, the slope is decreasing: the graph bends **downwards**, like a cap: **concave down**. Every tangent
  lies **above** the curve.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 580 170" role="img" aria-label="Left: a cup-shaped curve, concave up, with three short tangent lines, each lying below the curve; their slopes increase from left to right. Right: a cap-shaped curve, concave down, with three tangent lines lying above the curve; their slopes decrease from left to right.">
  <polyline points="15.9,14.7 19,20.2 22.1,25.5 25.2,30.7 28.3,35.7 31.4,40.6 34.5,45.3 37.6,50 40.7,54.4 43.8,58.8 46.9,63 50,67 53.1,71 56.2,74.8 59.3,78.4 62.4,81.9 65.5,85.3 68.6,88.5 71.8,91.6 74.9,94.6 78,97.4 81.1,100.1 84.2,102.7 87.3,105.1 90.4,107.4 93.5,109.5 96.6,111.5 99.7,113.4 102.8,115.1 105.9,116.7 109,118.1 112.1,119.4 115.2,120.6 118.3,121.6 121.4,122.5 124.5,123.3 127.6,123.9 130.7,124.4 133.8,124.7 136.9,124.9 140,125 143.1,124.9 146.2,124.7 149.3,124.4 152.4,123.9 155.5,123.3 158.6,122.5 161.7,121.6 164.8,120.6 167.9,119.4 171,118.1 174.1,116.7 177.2,115.1 180.3,113.4 183.4,111.5 186.5,109.5 189.6,107.4 192.7,105.1 195.8,102.7 198.9,100.1 202,97.4 205.1,94.6 208.3,91.6 211.4,88.5 214.5,85.3 217.6,81.9 220.7,78.4 223.8,74.8 226.9,71 230,67 233.1,63 236.2,58.8 239.3,54.4 242.4,50 245.5,45.3 248.6,40.6 251.7,35.7 254.8,30.7 257.9,25.5 261,20.2 264.1,14.7" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="21.8" y1="34" x2="92.7" y2="118" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="57.3" cy="76" r="3" fill="currentColor"/>
  <line x1="104.5" y1="125" x2="175.5" y2="125" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="140" cy="125" r="3" fill="currentColor"/>
  <line x1="187.3" y1="118" x2="258.2" y2="34" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="222.7" cy="76" r="3" fill="currentColor"/>
  <text x="140" y="160" font-size="13" text-anchor="middle" fill="currentColor">concave up: f″ &gt; 0</text>
  <polyline points="315.9,135.2 319,129.8 322.1,124.5 325.2,119.3 328.3,114.3 331.4,109.4 334.5,104.7 337.6,100 340.7,95.6 343.8,91.2 346.9,87 350,83 353.1,79 356.2,75.2 359.3,71.6 362.4,68.1 365.5,64.7 368.6,61.5 371.8,58.4 374.9,55.4 378,52.6 381.1,49.9 384.2,47.3 387.3,44.9 390.4,42.6 393.5,40.5 396.6,38.5 399.7,36.6 402.8,34.9 405.9,33.3 409,31.9 412.1,30.6 415.2,29.4 418.3,28.4 421.4,27.5 424.5,26.7 427.6,26.1 430.7,25.6 433.8,25.3 436.9,25.1 440,25 443.1,25.1 446.2,25.3 449.3,25.6 452.4,26.1 455.5,26.7 458.6,27.5 461.7,28.4 464.8,29.4 467.9,30.6 471,31.9 474.1,33.3 477.2,34.9 480.3,36.6 483.4,38.5 486.5,40.5 489.6,42.6 492.7,44.9 495.8,47.3 498.9,49.9 502,52.6 505.1,55.4 508.2,58.4 511.4,61.5 514.5,64.7 517.6,68.1 520.7,71.6 523.8,75.2 526.9,79 530,83 533.1,87 536.2,91.2 539.3,95.6 542.4,100 545.5,104.7 548.6,109.4 551.7,114.3 554.8,119.3 557.9,124.5 561,129.8 564.1,135.2" fill="none" stroke="#eea66f" stroke-width="3"/>
  <line x1="321.8" y1="116" x2="392.7" y2="32" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="357.3" cy="74" r="3" fill="currentColor"/>
  <line x1="404.5" y1="25" x2="475.5" y2="25" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="440" cy="25" r="3" fill="currentColor"/>
  <line x1="487.3" y1="32" x2="558.2" y2="116" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="522.7" cy="74" r="3" fill="currentColor"/>
  <text x="440" y="160" font-size="13" text-anchor="middle" fill="currentColor">concave down: f″ &lt; 0</text>
</svg>
</div>

A point where the concavity changes (from cup to cap or back) is an **inflection point**. There $f'' = 0$ or does not
exist, and the sign of $f''$ changes. At an inflection point the graph crosses its own tangent line.

Concavity gives a quicker test for a critical point, the **second derivative test**: if $f'(c) = 0$ and $f''(c) > 0$,
the graph is a cup at $c$, so $c$ is a local **minimum**; if $f''(c) < 0$, a cap, so a local **maximum**. If
$f''(c) = 0$, the test says nothing, and you go back to the first derivative test.

### Asymptotes

For rational functions (fractions of polynomials) look for lines the graph approaches:

- a **vertical asymptote** $x = a$ where the bottom is 0 and the top is not: the function blows up there
  ([level 7, lesson 1](../level-7/01-limits.md));
- a **horizontal asymptote** $y = L$ if $f(x) \to L$ as $x \to \infty$ or $x \to -\infty$. To find it, divide top and
  bottom by the highest power of $x$ on the bottom.

### The checklist

1. **Domain**: where is $f$ defined?
2. **Intercepts**: $f(0)$, and where $f(x) = 0$ if you can solve it.
3. **Symmetry**: is $f(-x) = f(x)$ (mirror in the $y$-axis) or $f(-x) = -f(x)$ (half-turn about the origin)?
4. **Asymptotes**: vertical and horizontal.
5. **First derivative**: critical points, a sign table, increasing and decreasing intervals, local maxima and minima.
6. **Second derivative**: a sign table, concavity, inflection points.
7. **Plot** the special points, draw the asymptotes, and join them with the right shapes.

<figure class="play" data-play="graph" data-form="quad"><span class="ai-tag">AI-created</span><figcaption><b>Sketch from the formula.</b> Where it turns, where it crosses, which way it opens.</figcaption></figure>

## Worked examples

**1. A cubic.** Sketch $f(x) = x^3 - 3x^2 - 9x + 5$.

1. Domain: all $x$. $y$-intercept: $f(0) = 5$. No simple symmetry, no asymptotes (a polynomial).
2. $f'(x) = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$. Critical points $x = -1$ and $x = 3$.
3. Signs of $f'$: positive for $x < -1$, negative for $-1 < x < 3$, positive for $x > 3$. So a local **maximum** at
   $x = -1$, with $f(-1) = -1 - 3 + 9 + 5 = 10$, and a local **minimum** at $x = 3$, with
   $f(3) = 27 - 27 - 27 + 5 = -22$.
4. $f''(x) = 6x - 6$: negative for $x < 1$ (cap), positive for $x > 1$ (cup). Inflection point at $x = 1$, with
   $f(1) = 1 - 3 - 9 + 5 = -6$.
5. Check with the second derivative test: $f''(-1) = -12 < 0$, a maximum ✓; $f''(3) = 12 > 0$, a minimum ✓.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 270" role="img" aria-label="The graph of x cubed minus 3 x squared minus 9 x plus 5: rising to a local maximum at (minus 1, 10), falling through the y-intercept 5 and the inflection point (1, minus 6), down to a local minimum at (3, minus 22), then rising steeply.">
  <line x1="30" y1="104.3" x2="365" y2="104.3" stroke="currentColor" stroke-width="1.2"/>
  <line x1="152.6" y1="248" x2="152.6" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="70.9" y1="101.3" x2="70.9" y2="107.3" stroke="currentColor"/><text x="70.9" y="119.3" text-anchor="middle">-2</text><line x1="111.7" y1="101.3" x2="111.7" y2="107.3" stroke="currentColor"/><text x="111.7" y="119.3" text-anchor="middle">-1</text><line x1="193.4" y1="101.3" x2="193.4" y2="107.3" stroke="currentColor"/><text x="193.4" y="119.3" text-anchor="middle">1</text><line x1="234.3" y1="101.3" x2="234.3" y2="107.3" stroke="currentColor"/><text x="234.3" y="119.3" text-anchor="middle">2</text><line x1="275.1" y1="101.3" x2="275.1" y2="107.3" stroke="currentColor"/><text x="275.1" y="119.3" text-anchor="middle">3</text><line x1="316" y1="101.3" x2="316" y2="107.3" stroke="currentColor"/><text x="316" y="119.3" text-anchor="middle">4</text><line x1="356.8" y1="101.3" x2="356.8" y2="107.3" stroke="currentColor"/><text x="356.8" y="119.3" text-anchor="middle">5</text><line x1="149.6" y1="207" x2="155.6" y2="207" stroke="currentColor"/><text x="146.6" y="211" text-anchor="end">-20</text><line x1="149.6" y1="155.7" x2="155.6" y2="155.7" stroke="currentColor"/><text x="146.6" y="159.7" text-anchor="end">-10</text><line x1="149.6" y1="53" x2="155.6" y2="53" stroke="currentColor"/><text x="146.6" y="57" text-anchor="end">10</text><text x="365" y="98.3" text-anchor="end">x</text><text x="158.6" y="22">y</text></g>
  <polyline points="40.2,174.8 44.2,160.3 48.1,146.9 52.1,134.5 56,123.2 60,112.8 64,103.3 67.9,94.7 71.9,87.1 75.8,80.3 79.8,74.3 83.7,69.1 87.7,64.7 91.7,61.1 95.6,58.1 99.6,55.9 103.5,54.3 107.5,53.4 111.5,53 115.4,53.3 119.4,54.1 123.3,55.4 127.3,57.2 131.2,59.5 135.2,62.2 139.2,65.4 143.1,68.9 147.1,72.8 151,77 155,81.5 158.9,86.3 162.9,91.3 166.9,96.5 170.8,101.9 174.8,107.5 178.7,113.2 182.7,119.1 186.6,125 190.6,130.9 194.6,136.9 198.5,142.8 202.5,148.7 206.4,154.6 210.4,160.4 214.4,166 218.3,171.5 222.3,176.8 226.2,181.9 230.2,186.8 234.1,191.4 238.1,195.8 242.1,199.8 246,203.4 250,206.7 253.9,209.6 257.9,212.1 261.8,214.1 265.8,215.7 269.8,216.7 273.7,217.2 277.7,217.1 281.6,216.4 285.6,215.1 289.5,213.2 293.5,210.5 297.5,207.2 301.4,203.1 305.4,198.2 309.3,192.6 313.3,186.2 317.3,178.9 321.2,170.7 325.2,161.6 329.1,151.6 333.1,140.6 337,128.6 341,115.7 345,101.6 348.9,86.6 352.9,70.4 356.8,53" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="111.7" cy="53" r="4.5" fill="currentColor"/>
  <text x="111.7" y="43" font-size="12" text-anchor="middle" fill="currentColor">max (−1, 10)</text>
  <circle cx="275.1" cy="217.2" r="4.5" fill="currentColor"/>
  <text x="283.1" y="235.2" font-size="12" text-anchor="start" fill="currentColor">min (3, −22)</text>
  <circle cx="193.4" cy="135.1" r="4.5" fill="#eea66f"/>
  <text x="201.4" y="151.1" font-size="12" text-anchor="start" fill="currentColor">inflection (1, −6)</text>
  <circle cx="152.6" cy="78.7" r="3.5" fill="currentColor"/>
</svg>
</div>

Every cubic with two turning points looks like this, and its inflection point is always exactly halfway between them
(here $1$ is halfway between $-1$ and $3$). The cubic is symmetric under a half-turn about that point.

**2. A rational function.** Sketch $f(x) = \dfrac{x^2}{x^2 - 4}$.

1. Domain: all $x$ except $\pm 2$. Intercept: $f(0) = 0$, and $f(x) = 0$ only at $x = 0$.
2. Symmetry: $f(-x) = f(x)$, so the graph is a mirror image in the $y$-axis.
3. Vertical asymptotes $x = 2$ and $x = -2$ (bottom 0, top 4). Horizontal: divide by $x^2$:
   $f(x) = \dfrac{1}{1 - 4/x^2} \to 1$ as $x \to \pm\infty$. So $y = 1$.
4. Quotient rule: $f'(x) = \dfrac{2x(x^2 - 4) - x^2 \cdot 2x}{(x^2 - 4)^2} = \dfrac{-8x}{(x^2 - 4)^2}$. The bottom is
   never negative, so $f'$ has the sign of $-8x$: increasing for $x < 0$, decreasing for $x > 0$ (apart from the
   breaks at $\pm 2$). Local **maximum** at $(0, 0)$.
5. $f''(x) = \dfrac{8(3x^2 + 4)}{(x^2 - 4)^3}$ (quotient rule again, then simplify). The top is always positive, so
   the sign is that of $(x^2 - 4)^3$: concave **up** for $|x| > 2$, concave **down** for $|x| < 2$. No inflection
   points (the concavity only changes across the asymptotes, where $f$ is not defined).
6. Behaviour near the asymptotes: just right of 2, the top is about 4 and the bottom a small positive number, so
   $f \to +\infty$; just left of 2 the bottom is small and negative, so $f \to -\infty$. Far out, $f$ is slightly above
   1 (the bottom is smaller than the top).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 260" role="img" aria-label="The graph of x squared over x squared minus 4, with dashed vertical asymptotes at x equals minus 2 and 2 and a dashed horizontal asymptote y equals 1. The middle piece is a cap with its top at the origin, falling to minus infinity at both asymptotes. The outer pieces come down from plus infinity near the asymptotes and level off just above y equals 1.">
  <line x1="30" y1="137.6" x2="365" y2="137.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="197.5" y1="238" x2="197.5" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="85.8" y1="134.6" x2="85.8" y2="140.6" stroke="currentColor"/><text x="85.8" y="152.6" text-anchor="middle">-4</text><line x1="309.2" y1="134.6" x2="309.2" y2="140.6" stroke="currentColor"/><text x="309.2" y="152.6" text-anchor="middle">4</text><line x1="194.5" y1="187.8" x2="200.5" y2="187.8" stroke="currentColor"/><text x="191.5" y="191.8" text-anchor="end">-2</text><line x1="194.5" y1="87.3" x2="200.5" y2="87.3" stroke="currentColor"/><text x="191.5" y="91.3" text-anchor="end">2</text><line x1="194.5" y1="37.1" x2="200.5" y2="37.1" stroke="currentColor"/><text x="191.5" y="41.1" text-anchor="end">4</text><text x="365" y="131.6" text-anchor="end">x</text><text x="203.5" y="22">y</text></g>
  <line x1="141.7" y1="238" x2="141.7" y2="12" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="253.3" y1="238" x2="253.3" y2="12" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="30" y1="112.4" x2="365" y2="112.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <polyline points="30,109.3 30.7,109.3 31.5,109.2 32.2,109.2 33,109.2 33.7,109.1 34.4,109.1 35.2,109.1 35.9,109 36.7,109 37.4,109 38.1,108.9 38.9,108.9 39.6,108.9 40.4,108.8 41.1,108.8 41.9,108.7 42.6,108.7 43.3,108.7 44.1,108.6 44.8,108.6 45.6,108.5 46.3,108.5 47,108.4 47.8,108.4 48.5,108.3 49.3,108.3 50,108.2 50.7,108.2 51.5,108.1 52.2,108.1 53,108 53.7,108 54.4,107.9 55.2,107.9 55.9,107.8 56.7,107.8 57.4,107.7 58.1,107.6 58.9,107.6 59.6,107.5 60.4,107.5 61.1,107.4 61.9,107.3 62.6,107.3 63.3,107.2 64.1,107.1 64.8,107 65.6,107 66.3,106.9 67,106.8 67.8,106.7 68.5,106.7 69.3,106.6 70,106.5 70.7,106.4 71.5,106.3 72.2,106.2 73,106.1 73.7,106 74.4,105.9 75.2,105.8 75.9,105.7 76.7,105.6 77.4,105.5 78.1,105.4 78.9,105.3 79.6,105.2 80.4,105.1 81.1,104.9 81.9,104.8 82.6,104.7 83.3,104.6 84.1,104.4 84.8,104.3 85.6,104.1 86.3,104 87,103.8 87.8,103.7 88.5,103.5 89.3,103.3 90,103.2 90.7,103 91.5,102.8 92.2,102.6 93,102.4 93.7,102.2 94.4,102 95.2,101.8 95.9,101.6 96.7,101.3 97.4,101.1 98.1,100.9 98.9,100.6 99.6,100.3 100.4,100.1 101.1,99.8 101.9,99.5 102.6,99.2 103.3,98.8 104.1,98.5 104.8,98.1 105.6,97.8 106.3,97.4 107,97 107.8,96.6 108.5,96.1 109.3,95.7 110,95.2 110.7,94.7 111.5,94.2 112.2,93.6 113,93 113.7,92.4 114.4,91.7 115.2,91 115.9,90.3 116.7,89.5 117.4,88.7 118.1,87.8 118.9,86.9 119.6,85.9 120.4,84.8 121.1,83.6 121.8,82.4 122.6,81.1 123.3,79.6 124.1,78 124.8,76.3 125.6,74.4 126.3,72.4 127,70.1 127.8,67.6 128.5,64.8 129.3,61.6 130,58.1 130.7,54 131.5,49.4 132.2,44 133,37.7 133.7,30.3 134.4,21.3 135.2,10.3" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <polyline points="147.4,241.7 148.1,227.7 148.9,216.6 149.6,207.6 150.3,200.1 151.1,193.9 151.8,188.5 152.5,183.9 153.3,179.8 154,176.3 154.8,173.1 155.5,170.3 156.2,167.8 157,165.5 157.7,163.5 158.4,161.6 159.2,159.9 159.9,158.4 160.6,156.9 161.4,155.6 162.1,154.4 162.9,153.3 163.6,152.2 164.3,151.2 165.1,150.3 165.8,149.5 166.5,148.7 167.3,148 168,147.3 168.8,146.6 169.5,146 170.2,145.4 171,144.9 171.7,144.4 172.4,143.9 173.2,143.4 173.9,143 174.7,142.6 175.4,142.2 176.1,141.9 176.9,141.5 177.6,141.2 178.3,140.9 179.1,140.6 179.8,140.4 180.5,140.1 181.3,139.9 182,139.6 182.8,139.4 183.5,139.2 184.2,139.1 185,138.9 185.7,138.7 186.4,138.6 187.2,138.4 187.9,138.3 188.7,138.2 189.4,138.1 190.1,138 190.9,137.9 191.6,137.8 192.3,137.8 193.1,137.7 193.8,137.7 194.6,137.6 195.3,137.6 196,137.6 196.8,137.6 197.5,137.6 198.2,137.6 199,137.6 199.7,137.6 200.4,137.6 201.2,137.7 201.9,137.7 202.7,137.8 203.4,137.8 204.1,137.9 204.9,138 205.6,138.1 206.3,138.2 207.1,138.3 207.8,138.4 208.6,138.6 209.3,138.7 210,138.9 210.8,139.1 211.5,139.2 212.2,139.4 213,139.6 213.7,139.9 214.5,140.1 215.2,140.4 215.9,140.6 216.7,140.9 217.4,141.2 218.1,141.5 218.9,141.9 219.6,142.2 220.3,142.6 221.1,143 221.8,143.4 222.6,143.9 223.3,144.4 224,144.9 224.8,145.4 225.5,146 226.2,146.6 227,147.3 227.7,148 228.5,148.7 229.2,149.5 229.9,150.3 230.7,151.2 231.4,152.2 232.1,153.3 232.9,154.4 233.6,155.6 234.3,156.9 235.1,158.4 235.8,159.9 236.6,161.6 237.3,163.5 238,165.5 238.8,167.8 239.5,170.3 240.2,173.1 241,176.3 241.7,179.8 242.5,183.9 243.2,188.5 243.9,193.9 244.7,200.1 245.4,207.6 246.1,216.6 246.9,227.7 247.6,241.7" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <polyline points="259.8,10.3 260.6,21.3 261.3,30.3 262,37.7 262.8,44 263.5,49.4 264.3,54 265,58.1 265.7,61.6 266.5,64.8 267.2,67.6 268,70.1 268.7,72.4 269.4,74.4 270.2,76.3 270.9,78 271.7,79.6 272.4,81.1 273.2,82.4 273.9,83.6 274.6,84.8 275.4,85.9 276.1,86.9 276.9,87.8 277.6,88.7 278.3,89.5 279.1,90.3 279.8,91 280.6,91.7 281.3,92.4 282,93 282.8,93.6 283.5,94.2 284.3,94.7 285,95.2 285.7,95.7 286.5,96.1 287.2,96.6 288,97 288.7,97.4 289.4,97.8 290.2,98.1 290.9,98.5 291.7,98.8 292.4,99.2 293.1,99.5 293.9,99.8 294.6,100.1 295.4,100.3 296.1,100.6 296.9,100.9 297.6,101.1 298.3,101.3 299.1,101.6 299.8,101.8 300.6,102 301.3,102.2 302,102.4 302.8,102.6 303.5,102.8 304.3,103 305,103.2 305.7,103.3 306.5,103.5 307.2,103.7 308,103.8 308.7,104 309.4,104.1 310.2,104.3 310.9,104.4 311.7,104.6 312.4,104.7 313.1,104.8 313.9,104.9 314.6,105.1 315.4,105.2 316.1,105.3 316.9,105.4 317.6,105.5 318.3,105.6 319.1,105.7 319.8,105.8 320.6,105.9 321.3,106 322,106.1 322.8,106.2 323.5,106.3 324.3,106.4 325,106.5 325.7,106.6 326.5,106.7 327.2,106.7 328,106.8 328.7,106.9 329.4,107 330.2,107 330.9,107.1 331.7,107.2 332.4,107.3 333.1,107.3 333.9,107.4 334.6,107.5 335.4,107.5 336.1,107.6 336.9,107.6 337.6,107.7 338.3,107.8 339.1,107.8 339.8,107.9 340.6,107.9 341.3,108 342,108 342.8,108.1 343.5,108.1 344.3,108.2 345,108.2 345.7,108.3 346.5,108.3 347.2,108.4 348,108.4 348.7,108.5 349.4,108.5 350.2,108.6 350.9,108.6 351.7,108.7 352.4,108.7 353.1,108.7 353.9,108.8 354.6,108.8 355.4,108.9 356.1,108.9 356.9,108.9 357.6,109 358.3,109 359.1,109 359.8,109.1 360.6,109.1 361.3,109.1 362,109.2 362.8,109.2 363.5,109.2 364.3,109.3 365,109.3" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <circle cx="197.5" cy="137.6" r="4" fill="currentColor"/>
  <text x="365" y="106.4" font-size="12" text-anchor="end" fill="currentColor">y = 1</text>
  <text x="258.3" y="22" font-size="12" text-anchor="start" fill="currentColor">x = 2</text>
  <text x="136.7" y="22" font-size="12" text-anchor="end" fill="currentColor">x = −2</text>
</svg>
</div>

**3. The opening question.** For $f(x) = x^4 - 4x^3 + 10$:

1. $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$. Critical points $x = 0$ and $x = 3$.
2. Since $4x^2 \ge 0$, $f'$ has the sign of $x - 3$: negative on both sides of 0 and positive after 3. So $x = 0$ is
   **not** a turning point (a flat moment on the way down), and $x = 3$ is a minimum, $f(3) = -17$.
3. $f''(x) = 12x^2 - 24x = 12x(x - 2)$: positive for $x < 0$, negative for $0 < x < 2$, positive for $x > 2$.
   Inflection points at $(0, 10)$ and $(2, -6)$.
4. The second derivative test fails at $x = 0$ ($f''(0) = 0$); the first derivative test settled it.

## Try it

1. For $f(x) = x^2 - 6x + 5$, find where it is increasing and decreasing, and its minimum point.
2. Sketch $f(x) = x^3 - 12x$: critical points, maximum, minimum, inflection point.
3. Use the second derivative test to classify the critical points of $f(x) = 2x^3 - 3x^2 - 12x$.
4. Where is $f(x) = x^4 - 6x^2$ concave up, and where are its inflection points?
5. Find the asymptotes of $f(x) = \dfrac{3x + 1}{x - 2}$.
6. For $f(x) = xe^{-x}$, find the maximum point and the inflection point. What happens as $x \to \infty$?
7. Sketch a graph that has $f(0) = 2$, $f'(x) > 0$ for $x < 1$, $f'(x) < 0$ for $x > 1$, and $f''(x) < 0$ everywhere.
8. Show that $f''(0) = 0$ for both $x^3$ and $x^4$. What does each graph have at $x = 0$? What does this say about the
   second derivative test?

??? note "Answers"
    1. $f'(x) = 2x - 6$: decreasing for $x < 3$, increasing for $x > 3$. Minimum at $(3, f(3)) = (3, -4)$.
    2. $f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$. Signs $+, -, +$. Local maximum $(-2, 16)$, local minimum $(2, -16)$.
       $f''(x) = 6x$: inflection at $(0, 0)$. It is odd: $f(-x) = -f(x)$. It crosses the $x$-axis at 0 and
       $\pm\sqrt{12} \approx \pm 3.46$.
    3. $f'(x) = 6x^2 - 6x - 12 = 6(x - 2)(x + 1)$, critical points $-1$ and 2. $f''(x) = 12x - 6$.
       $f''(-1) = -18 < 0$: local **maximum** at $(-1, 7)$. $f''(2) = 18 > 0$: local **minimum** at $(2, -20)$.
    4. $f''(x) = 12x^2 - 12 = 12(x - 1)(x + 1)$. Concave up for $x < -1$ and $x > 1$; concave down between.
       Inflection points $(-1, -5)$ and $(1, -5)$.
    5. Vertical: $x = 2$ (the bottom is 0, the top is 7). Horizontal: divide by $x$: $\dfrac{3 + 1/x}{1 - 2/x} \to 3$,
       so $y = 3$.
    6. $f'(x) = e^{-x} - xe^{-x} = e^{-x}(1 - x)$: $+$ then $-$ at $x = 1$, a maximum at $\left(1, \frac1e\right)$, about
       $(1, 0.368)$. $f''(x) = e^{-x}(x - 2)$: changes sign at 2, inflection at $\left(2, \frac{2}{e^2}\right)$, about
       $(2, 0.271)$. As $x \to \infty$, $e^{-x}$ shrinks much faster than $x$ grows, so $f(x) \to 0$: the $x$-axis is a
       horizontal asymptote on the right.
    7. A cap-shaped hill: rising through $(0, 2)$, peaking at $x = 1$, then falling, bending downwards the whole time
       (an upside-down U, like $f(x) = 2 + 2x - x^2$, which has all these properties).
    8. $(x^3)'' = 6x$ and $(x^4)'' = 12x^2$, both 0 at $x = 0$. $x^3$ has an inflection point at 0 (no turn); $x^4$
       has a minimum at 0. So when $f''(c) = 0$ the second derivative test cannot decide: anything can happen. Use
       the first derivative test.

## Common mistake

**Calling every critical point a maximum or minimum.** $f'(c) = 0$ only makes $c$ a **candidate**. Check the signs of
$f'$ on both sides, as in worked example 3.

**Calling every zero of $f''$ an inflection point.** $x^4$ has $f''(0) = 0$ but is a cup on both sides. An inflection
point needs $f''$ to **change sign**.

## Where it leads

- Back: [Derivatives of $e^x$, $\ln x$, $\sin x$ and $\cos x$](02-exp-log-trig.md) · Next: [Optimization](04-optimization.md),
  where the largest and smallest values solve real problems.
- [Level 8 page](index.md) · [Change and motion topic page](../index.md)
- Reading $f'$ from $f$: [level 7, the derivative as a function](../level-7/05-derivative-function.md).
- Polynomial and rational functions without calculus: [Algebra: polynomial functions](../../algebra/level-8/01-polynomial-functions.md)
  and [Algebra: rational functions](../../algebra/level-8/03-rational-functions.md).
- On the U of T shelf: [MAT137 Unit 5: the mean value theorem](../../../uoft/MAT137/unit05.md) and
  [Unit 6: applications of derivatives](../../../uoft/MAT137/unit06.md).
