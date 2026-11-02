---
title: "The derivative as a function"
---

# The derivative as a function

*Change and motion · level 7, lesson 5 of 6*

## A question to start

Here are three graphs, drawn on the same scale. One of them is a function $f$. Another is its derivative $f'$. The
third is the derivative of the derivative. There are no formulas, only pictures.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 620 200" role="img" aria-label="Three graphs side by side. A: a hill shape, highest at x equals 0 and crossing the axis at x equals minus 2 and 2. B: a straight line sloping down through the origin. C: a curve with a valley at x equals minus 2 and a hilltop at x equals 2.">
  <line x1="12" y1="95" x2="192" y2="95" stroke="currentColor" stroke-width="1.2"/>
  <line x1="102" y1="178" x2="102" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="47.5" y1="92" x2="47.5" y2="98" stroke="currentColor"/><text x="47.5" y="110" text-anchor="middle">-2</text><line x1="156.5" y1="92" x2="156.5" y2="98" stroke="currentColor"/><text x="156.5" y="110" text-anchor="middle">2</text><text x="192" y="89" text-anchor="end">x</text></g>
  <polyline points="14.2,176.1 16.5,169.4 18.8,162.9 21,156.6 23.2,150.4 25.5,144.4 27.7,138.6 30,132.9 32.2,127.4 34.5,122.1 36.8,117 39,112.1 41.2,107.3 43.5,102.7 45.7,98.2 48,94 50.2,89.9 52.5,86 54.8,82.3 57,78.7 59.2,75.3 61.5,72.1 63.7,69 66,66.2 68.2,63.5 70.5,61 72.8,58.6 75,56.4 77.2,54.4 79.5,52.6 81.8,51 84,49.5 86.2,48.2 88.5,47.1 90.8,46.1 93,45.3 95.2,44.7 97.5,44.3 99.8,44 102,43.9 104.2,44 106.5,44.3 108.8,44.7 111,45.3 113.2,46.1 115.5,47.1 117.8,48.2 120,49.5 122.2,51 124.5,52.6 126.7,54.4 129,56.4 131.2,58.6 133.5,61 135.8,63.5 138,66.2 140.2,69 142.5,72.1 144.8,75.3 147,78.7 149.2,82.3 151.5,86 153.8,89.9 156,94 158.2,98.2 160.5,102.7 162.8,107.3 165,112.1 167.2,117 169.5,122.1 171.8,127.4 174,132.9 176.2,138.6 178.5,144.4 180.8,150.4 183,156.6 185.2,162.9 187.5,169.4 189.8,176.1" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <text x="192" y="20" font-size="16" text-anchor="end" fill="currentColor">A</text>
  <line x1="222" y1="95" x2="402" y2="95" stroke="currentColor" stroke-width="1.2"/>
  <line x1="312" y1="178" x2="312" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="257.5" y1="92" x2="257.5" y2="98" stroke="currentColor"/><text x="257.5" y="110" text-anchor="middle">-2</text><line x1="366.5" y1="92" x2="366.5" y2="98" stroke="currentColor"/><text x="366.5" y="110" text-anchor="middle">2</text><text x="402" y="89" text-anchor="end">x</text></g>
  <polyline points="222,10.7 224.2,12.8 226.5,14.9 228.8,17 231,19.2 233.2,21.3 235.5,23.4 237.8,25.5 240,27.6 242.2,29.7 244.5,31.8 246.8,33.9 249,36 251.2,38.1 253.5,40.2 255.8,42.3 258,44.4 260.2,46.5 262.5,48.6 264.8,50.8 267,52.9 269.2,55 271.5,57.1 273.8,59.2 276,61.3 278.2,63.4 280.5,65.5 282.8,67.6 285,69.7 287.2,71.8 289.5,73.9 291.8,76 294,78.1 296.2,80.3 298.5,82.4 300.8,84.5 303,86.6 305.2,88.7 307.5,90.8 309.8,92.9 312,95 314.2,97.1 316.5,99.2 318.8,101.3 321,103.4 323.2,105.5 325.5,107.6 327.8,109.7 330,111.9 332.2,114 334.5,116.1 336.8,118.2 339,120.3 341.2,122.4 343.5,124.5 345.8,126.6 348,128.7 350.2,130.8 352.5,132.9 354.8,135 357,137.1 359.2,139.2 361.5,141.4 363.8,143.5 366,145.6 368.2,147.7 370.5,149.8 372.8,151.9 375,154 377.2,156.1 379.5,158.2 381.8,160.3 384,162.4 386.2,164.5 388.5,166.6 390.8,168.7 393,170.8 395.2,173 397.5,175.1 399.8,177.2 402,179.3" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <text x="402" y="20" font-size="16" text-anchor="end" fill="currentColor">B</text>
  <line x1="432" y1="95" x2="612" y2="95" stroke="currentColor" stroke-width="1.2"/>
  <line x1="522" y1="178" x2="522" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="467.5" y1="92" x2="467.5" y2="98" stroke="currentColor"/><text x="467.5" y="110" text-anchor="middle">-2</text><line x1="576.5" y1="92" x2="576.5" y2="98" stroke="currentColor"/><text x="576.5" y="110" text-anchor="middle">2</text><text x="612" y="89" text-anchor="end">x</text></g>
  <polyline points="432,110.6 434.2,117.6 436.5,124 438.8,129.8 441,135.2 443.2,140 445.5,144.3 447.8,148.2 450,151.5 452.2,154.4 454.5,156.9 456.8,158.9 459,160.5 461.2,161.7 463.5,162.6 465.8,163 468,163.1 470.2,162.8 472.5,162.3 474.8,161.4 477,160.2 479.2,158.7 481.5,156.9 483.8,154.9 486,152.6 488.2,150.1 490.5,147.4 492.8,144.5 495,141.4 497.2,138.2 499.5,134.7 501.8,131.2 504,127.5 506.2,123.7 508.5,119.8 510.8,115.8 513,111.7 515.2,107.6 517.5,103.4 519.8,99.2 522,95 524.2,90.8 526.5,86.6 528.8,82.4 531,78.3 533.2,74.2 535.5,70.2 537.8,66.3 540,62.5 542.2,58.8 544.5,55.3 546.8,51.8 549,48.6 551.2,45.5 553.5,42.6 555.8,39.9 558,37.4 560.2,35.1 562.5,33.1 564.8,31.3 567,29.8 569.2,28.6 571.5,27.7 573.8,27.2 576,26.9 578.2,27 580.5,27.4 582.8,28.3 585,29.5 587.2,31.1 589.5,33.1 591.8,35.6 594,38.5 596.2,41.8 598.5,45.7 600.8,50 603,54.8 605.2,60.2 607.5,66 609.8,72.4 612,79.4" fill="none" stroke="#eea66f" stroke-width="3"/>
  <text x="612" y="20" font-size="16" text-anchor="end" fill="currentColor">C</text>
</svg>
</div>

**Which is which?** You do not need any algebra; you need to read slopes off a picture. By the end of the lesson it
will take you about ten seconds. (The answer is worked example 4.)

## The idea

### A new function made from the old one

So far we have mostly found the derivative at one point, a single number $f'(a)$. But for $x^2$ we found $2x$, which
gives the slope at **every** point at once. That is a function in its own right:

- **input**: a number $x$;
- **output**: the slope of the graph of $f$ at $x$.

This function is called **the derivative of $f$**, written $f'$, or $\frac{dy}{dx}$ if $y = f(x)$. It is defined at
every $x$ where $f$ is differentiable, and nowhere else. For $f(x) = |x|$, for instance, $f'$ is not defined at 0
(the corner).

The derivative is a new graph, and the main skill of this lesson is to **draw the graph of $f'$ by looking at the
graph of $f$**, without any formula.

### Three things a graph tells you about its slope

1. **The sign.** Where $f$ is going **up** (left to right), its slope is positive, so $f'$ is **above** the $x$-axis.
   Where $f$ is going down, $f'$ is below the axis.
2. **The zeros.** Where the tangent to $f$ is **flat** (at the top of a hill, the bottom of a valley, or a level
   shelf), $f'$ is **zero**: $f'$ crosses or touches the $x$-axis there.
3. **The size.** Where $f$ is **steep**, $f'$ is far from the axis. Where $f$ is nearly flat, $f'$ is near 0.

### Sketching $f'$ from $f$, step by step

Take the graph of $f(x) = x^3 - 3x$ (top panel). Line the $f'$ panel up underneath it, with the same $x$-scale.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 375" role="img" aria-label="Top: the graph of f of x equals x cubed minus 3x, with a hilltop at x equals minus 1 and a valley at x equals 1; short flat tangent lines at both, and a tangent of slope minus 3 at the origin. Bottom, lined up underneath: the derivative 3x squared minus 3, a U-shaped parabola crossing zero at x equals minus 1 and 1, lowest at minus 3 when x equals 0. Dashed lines join the flat points of f to the zeros of the derivative.">
  <line x1="30" y1="86" x2="325" y2="86" stroke="currentColor" stroke-width="1.2"/>
  <line x1="177.5" y1="160" x2="177.5" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="174.5" y1="128.3" x2="180.5" y2="128.3" stroke="currentColor"/><text x="171.5" y="132.3" text-anchor="end">-2</text><line x1="174.5" y1="43.7" x2="180.5" y2="43.7" stroke="currentColor"/><text x="171.5" y="47.7" text-anchor="end">2</text><text x="325" y="80" text-anchor="end">x</text></g>
  <line x1="113.4" y1="43.7" x2="113.4" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="241.6" y1="128.3" x2="241.6" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="41.1,154.7 44.8,142.2 48.4,130.7 52.1,120 55.8,110.1 59.5,101 63.2,92.7 66.9,85.1 70.6,78.3 74.2,72.1 77.9,66.6 81.6,61.8 85.3,57.6 89,54 92.7,51 96.4,48.6 100.1,46.6 103.8,45.2 107.4,44.3 111.1,43.8 114.8,43.7 118.5,44.1 122.2,44.9 125.9,46 129.6,47.4 133.2,49.2 136.9,51.2 140.6,53.5 144.3,56.1 148,58.9 151.7,61.8 155.4,65 159.1,68.3 162.8,71.7 166.4,75.2 170.1,78.7 173.8,82.4 177.5,86 181.2,89.6 184.9,93.3 188.6,96.8 192.2,100.3 195.9,103.7 199.6,107 203.3,110.2 207,113.1 210.7,115.9 214.4,118.5 218.1,120.8 221.8,122.8 225.4,124.6 229.1,126 232.8,127.1 236.5,127.9 240.2,128.3 243.9,128.2 247.6,127.7 251.3,126.8 254.9,125.4 258.6,123.4 262.3,121 266,118 269.7,114.4 273.4,110.2 277.1,105.4 280.8,99.9 284.4,93.7 288.1,86.9 291.8,79.3 295.5,71 299.2,61.9 302.9,52 306.6,41.3 310.2,29.8 313.9,17.3" fill="none" stroke="#eea66f" stroke-width="3"/>
  <text x="36.4" y="20.2" font-size="12" text-anchor="start" fill="currentColor">f(x) = x³ − 3x</text>
  <line x1="81.3" y1="43.7" x2="145.4" y2="43.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="209.6" y1="128.3" x2="273.7" y2="128.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="148.6" y1="57.5" x2="206.4" y2="114.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="296.3" x2="325" y2="296.3" stroke="currentColor" stroke-width="1.2"/>
  <line x1="177.5" y1="353" x2="177.5" y2="183" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="113.4" y1="293.3" x2="113.4" y2="299.3" stroke="currentColor"/><text x="113.4" y="311.3" text-anchor="middle">-1</text><line x1="241.6" y1="293.3" x2="241.6" y2="299.3" stroke="currentColor"/><text x="241.6" y="311.3" text-anchor="middle">1</text><line x1="174.5" y1="239.7" x2="180.5" y2="239.7" stroke="currentColor"/><text x="171.5" y="243.7" text-anchor="end">4</text><text x="325" y="290.3" text-anchor="end">x</text></g>
  <line x1="113.4" y1="183" x2="113.4" y2="296.3" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="241.6" y1="183" x2="241.6" y2="296.3" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="55.8,185.8 59.5,194.9 63.2,203.8 66.9,212.4 70.6,220.7 74.2,228.7 77.9,236.4 81.6,243.8 85.3,251 89,257.9 92.7,264.5 96.4,270.8 100.1,276.9 103.8,282.6 107.4,288.1 111.1,293.3 114.8,298.2 118.5,302.9 122.2,307.2 125.9,311.3 129.6,315.1 133.2,318.6 136.9,321.8 140.6,324.8 144.3,327.5 148,329.8 151.7,331.9 155.4,333.8 159.1,335.3 162.8,336.6 166.4,337.6 170.1,338.3 173.8,338.7 177.5,338.8 181.2,338.7 184.9,338.3 188.6,337.6 192.2,336.6 195.9,335.3 199.6,333.8 203.3,331.9 207,329.8 210.7,327.5 214.4,324.8 218.1,321.8 221.8,318.6 225.4,315.1 229.1,311.3 232.8,307.2 236.5,302.9 240.2,298.2 243.9,293.3 247.6,288.1 251.3,282.6 254.9,276.9 258.6,270.8 262.3,264.5 266,257.9 269.7,251 273.4,243.8 277.1,236.4 280.8,228.7 284.4,220.7 288.1,212.4 291.8,203.8 295.5,194.9 299.2,185.8" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <text x="206.4" y="347.3" font-size="12" text-anchor="start" fill="currentColor">f′(x) = 3x² − 3</text>
  <text x="169.5" y="342.8" font-size="12" text-anchor="end" fill="currentColor">−3</text>
  <circle cx="113.4" cy="296.3" r="4" fill="currentColor"/>
  <circle cx="241.6" cy="296.3" r="4" fill="currentColor"/>
  <circle cx="177.5" cy="338.8" r="4" fill="currentColor"/>
</svg>
</div>

1. **Flat points.** $f$ has a hilltop at $x = -1$ and a valley at $x = 1$. Mark $f' = 0$ at both (the dashed lines
   carry them down).
2. **Signs.** Left of $-1$, $f$ climbs, so $f' > 0$. Between $-1$ and $1$, $f$ falls, so $f' < 0$. Right of 1, $f$
   climbs again, so $f' > 0$.
3. **Steepness.** Between the hill and the valley, $f$ is steepest going down at $x = 0$: so $f'$ is most negative at
   0. Far out to the left and right, $f$ gets steeper and steeper: so $f'$ gets bigger and bigger.
4. **Join smoothly.** Positive and large, down through 0 at $-1$, lowest at 0, back up through 0 at 1, then large
   again: a U-shape. That is the bottom panel.

Check with the power rule: $f'(x) = 3x^2 - 3$. That is a U-shaped parabola, 0 at $x = \pm 1$ and lowest at $x = 0$,
where $f'(0) = -3$. And indeed $f(x) = x^3 - 3x$ falls with slope $-3$ as it passes through the origin.

### Patterns worth knowing

- A **straight line** has a constant slope, so its derivative is a **horizontal line**.
- A **parabola** has a derivative that is a **straight line** ($x^2 \to 2x$). A **cubic** has a **parabola** as its
  derivative. Differentiating a polynomial lowers its degree by one.
- A graph made of **straight pieces** has a derivative made of **flat steps**, with gaps at the corners.
- A **corner** in $f$ makes a **jump** in $f'$.
- Adding a constant to $f$ (sliding the graph up or down) does not change any slope. So $x^2$, $x^2 + 5$ and $x^2 - 7$
  all have derivative $2x$.

That last point has a big consequence. If you know $f'$, you know $f$ **only up to a vertical slide**. To pin $f$
down you need one extra fact, such as its value at one point. This "going backwards" is the start of integration
([level 8](../level-8/06-area-fundamental-theorem.md)).

### Going backwards: from $f'$ to $f$

Reading the other way works too. If you are given the graph of $f'$:

- where $f'$ is **above** the axis, $f$ is going up;
- where $f'$ **crosses from + to −**, $f$ goes from up to down: a **hilltop** (a **local maximum**);
- where $f'$ **crosses from − to +**, $f$ has a **valley** (a **local minimum**);
- where $f'$ **touches 0 without changing sign**, $f$ flattens for a moment but keeps going the same way, like $x^3$ at
  0.

This is the **first derivative test**. You will use it for real in [level 8](../level-8/03-curve-sketching.md).

### The derivative of the derivative

Since $f'$ is a function, it has its own derivative, the **second derivative**, written $f''$ or
$\frac{d^2y}{dx^2}$. It is the rate of change of the slope. For $f(x) = x^3 - 3x$: $f'(x) = 3x^2 - 3$ and
$f''(x) = 6x$. Where $f'' > 0$ the slope is increasing and the graph bends upwards like a cup; where $f'' < 0$ it bends
down like a cap. In motion, if $f$ is position, then $f'$ is velocity and $f''$ is acceleration: the subject of the
[next lesson](06-velocity-acceleration.md).

## Worked examples

**1. A formula check.** For $f(x) = x^2 - 4x + 3$, describe $f'$ from the graph, then check with the rule.

1. $f$ is a U-shaped parabola. Its lowest point is halfway between its roots 1 and 3, at $x = 2$.
2. So $f' < 0$ for $x < 2$, $f'(2) = 0$, and $f' > 0$ for $x > 2$. The steepness grows steadily as you move away from
   2, so $f'$ is a straight line through $(2, 0)$ going up.
3. Check: $f'(x) = 2x - 4$, a line of slope 2 through $(2, 0)$. ✓

**2. A walk with straight pieces.** Sam walks 800 m to a shop in 10 minutes at a steady pace, spends 5 minutes inside,
then walks home in 10 minutes at the same pace. Sketch the graph of his distance from home, $s(t)$, and its derivative.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 620 190" role="img" aria-label="Left: Sam's distance from home against time, rising in a straight line to 800 metres at 10 minutes, flat until 15 minutes, then falling in a straight line to 0 at 25 minutes. Right: its derivative, three flat steps at 80, 0 and minus 80 metres per minute, with gaps at 10 and 15 minutes.">
  <line x1="30" y1="168" x2="285" y2="168" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="168" x2="30" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="112.3" y1="165" x2="112.3" y2="171" stroke="currentColor"/><text x="112.3" y="183" text-anchor="middle">10</text><line x1="153.4" y1="165" x2="153.4" y2="171" stroke="currentColor"/><text x="153.4" y="183" text-anchor="middle">15</text><line x1="235.6" y1="165" x2="235.6" y2="171" stroke="currentColor"/><text x="235.6" y="183" text-anchor="middle">25</text><line x1="27" y1="105.6" x2="33" y2="105.6" stroke="currentColor"/><text x="24" y="109.6" text-anchor="end">400</text><line x1="27" y1="43.2" x2="33" y2="43.2" stroke="currentColor"/><text x="24" y="47.2" text-anchor="end">800</text><text x="285" y="162" text-anchor="end">t (min)</text><text x="36" y="22">s (m)</text></g>
  <line x1="30" y1="168" x2="112.3" y2="43.2" stroke="#eea66f" stroke-width="3"/>
  <line x1="112.3" y1="43.2" x2="153.4" y2="43.2" stroke="#eea66f" stroke-width="3"/>
  <line x1="153.4" y1="43.2" x2="235.6" y2="168" stroke="#eea66f" stroke-width="3"/>
  <line x1="350" y1="90" x2="605" y2="90" stroke="currentColor" stroke-width="1.2"/>
  <line x1="350" y1="168" x2="350" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="444.4" y1="87" x2="444.4" y2="93" stroke="currentColor"/><text x="444.4" y="105" text-anchor="middle">10</text><line x1="491.7" y1="87" x2="491.7" y2="93" stroke="currentColor"/><text x="491.7" y="105" text-anchor="middle">15</text><line x1="586.1" y1="87" x2="586.1" y2="93" stroke="currentColor"/><text x="586.1" y="105" text-anchor="middle">25</text><line x1="347" y1="146.7" x2="353" y2="146.7" stroke="currentColor"/><text x="344" y="150.7" text-anchor="end">-80</text><line x1="347" y1="33.3" x2="353" y2="33.3" stroke="currentColor"/><text x="344" y="37.3" text-anchor="end">80</text><text x="605" y="84" text-anchor="end">t</text><text x="356" y="22">s′ (m/min)</text></g>
  <line x1="350" y1="33.3" x2="444.4" y2="33.3" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="444.4" y1="90" x2="491.7" y2="90" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="491.7" y1="146.7" x2="586.1" y2="146.7" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="444.4" cy="33.3" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="444.4" cy="90" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="491.7" cy="90" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="491.7" cy="146.7" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
</svg>
</div>

1. From 0 to 10 min, $s$ rises in a straight line from 0 to 800: slope $\frac{800}{10} = 80$ m/min.
2. From 10 to 15 min, $s$ is flat: slope 0.
3. From 15 to 25 min, $s$ falls from 800 to 0: slope $-80$ m/min.
4. So $s'$ is a set of steps: 80, then 0, then $-80$. The negative value means he is heading back towards home. At
   $t = 10$ and $t = 15$ the graph of $s$ has corners, so $s'$ has no value there. (A real person does not stop
   instantly; the corners are where our simple model is rough.)

**3. From $f'$ to $f$.** The derivative of some function is $f'(x) = (x + 1)(x - 2)$. Describe the graph of $f$.

1. $f' = 0$ at $x = -1$ and $x = 2$.
2. Signs: for $x < -1$ both brackets are negative, so $f' > 0$. For $-1 < x < 2$, one bracket is positive and one
   negative, so $f' < 0$. For $x > 2$, $f' > 0$.
3. So $f$ rises, has a hilltop at $x = -1$ (+ to −), falls, has a valley at $x = 2$ (− to +), then rises. A cubic
   shape, like the top panel above. We cannot say how high it sits without more information.

**4. The opening puzzle.** Look for flat points and match them with zeros.

1. Graph **B** is a straight line, crossing 0 at $x = 0$. Graph **A** is a hill shape whose top, its only flat point,
   is at $x = 0$. A is going up for $x < 0$ (where B is positive) and down for $x > 0$ (where B is negative). So B is
   the derivative of A.
2. Graph **A** crosses 0 at $x = -2$ and $x = 2$. Graph **C** has a valley at $x = -2$ and a hilltop at $x = 2$. C goes
   down where A is negative and up where A is positive. So A is the derivative of C.
3. So **C is $f$**, **A is $f'$** and **B is $f''$**. (They were $f(x) = 4x - \frac{x^3}{3}$, $f'(x) = 4 - x^2$ and
   $f''(x) = -2x$.)

## Try it

1. For $f(x) = x^2 - 4x$, find $f'(x)$. For which $x$ is $f$ increasing?
2. The graph of $f$ is a straight line with slope $-3$. Describe the graph of $f'$.
3. A function $f$ rises until $x = 1$, falls until $x = 4$, then rises again, with flat tangents at 1 and 4. Sketch a
   possible graph of $f'$.
4. The derivative of $f$ is $f'(x) = (x - 1)(x - 3)$. Where is $f$ increasing, where decreasing, and where are its
   hilltop and valley?
5. Sketch $f(x) = |x|$ and its derivative. Where is $f'$ undefined?
6. True or false: if $f'(x) > 0$ for every $x$, then $f(x) > 0$ for every $x$.
7. Give two different functions whose derivative is $2x$. How are their graphs related?
8. A toy car's position on a track is $s(t) = t^3 - 6t^2 + 9t$ metres at time $t$ seconds. Find $s'(t)$, and say
   when the car moves forwards and when it moves backwards.

??? note "Answers"
    1. $f'(x) = 2x - 4$. $f$ is increasing where $f' > 0$, that is for $x > 2$.
    2. A horizontal line at height $-3$: the slope is $-3$ everywhere.
    3. $f'$ is positive for $x < 1$, crosses 0 at $x = 1$, is negative between 1 and 4 (dipping lowest somewhere in
       between, where $f$ is steepest going down), crosses 0 at 4, and is positive after. A U-shape that dips
       below the axis between 1 and 4 will do, like the parabola $(x - 1)(x - 4)$.
    4. $f' > 0$ when both brackets have the same sign: $x < 1$ or $x > 3$. There $f$ is increasing. $f' < 0$ for
       $1 < x < 3$: decreasing. Hilltop (+ to −) at $x = 1$; valley (− to +) at $x = 3$.
    5. A V-shape. $f'(x) = -1$ for $x < 0$ and $f'(x) = 1$ for $x > 0$: two flat steps. $f'$ is undefined at 0, the
       corner.
    6. **False.** $f(x) = x$ has $f'(x) = 1 > 0$ everywhere, but $f(-5) = -5 < 0$. A positive derivative says the
       function is **going up**, not that it is **above** the axis.
    7. For example $x^2$ and $x^2 + 5$ (any $x^2 + C$ works). Their graphs are the same parabola, one slid 5 units
       above the other; at every $x$ they have the same slope.
    8. $s'(t) = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t - 1)(t - 3)$. Forwards ($s' > 0$) for $0 \le t < 1$ and
       $t > 3$; backwards ($s' < 0$) for $1 < t < 3$. It stops for an instant at $t = 1$ and $t = 3$ to turn round.

## Common mistake

**Copying the shape of $f$ instead of its slope.** Where $f$ is high, $f'$ is not necessarily high. At the top of a
hill, $f$ is at its highest but $f'$ is **zero**. Always ask "is it going up or down here, and how steeply?", never
"is it high or low?".

**Thinking $f' = 0$ always means a hilltop or valley.** $x^3$ has $f'(0) = 0$, but it carries on upwards: a flat
moment, not a turning point. Check whether $f'$ changes sign.

## Where it leads

- Back: [The power rule](04-power-rule.md) · Next: [Velocity and acceleration](06-velocity-acceleration.md)
- [Level 7 page](index.md) · [Change and motion topic page](../index.md)
- The first derivative test and full curve sketching: [level 8, curve sketching](../level-8/03-curve-sketching.md).
- Functions as input-output machines: [Algebra: functions](../../algebra/level-7/04-functions.md).
- Distance-time and speed-time graphs, the first version of this idea: [level 4](../level-4/index.md) and
  [level 5](../level-5/index.md).
- On the U of T shelf: [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md).
