---
title: "Iteration and fixed points"
---

# Iteration and fixed points

*Patterns and sequences · level 8, lesson 5 of 6*

## A question to start

Set a calculator to **radians**. Type any number, say 1, and press the **cos** button. Then press cos again, and again,
and again. The display goes

$$0.5403,\ 0.8576,\ 0.6543,\ 0.7935,\ 0.7014,\ 0.7640,\ 0.7221,\ 0.7504,\ \ldots$$

swinging up and down, closer each time, and after about thirty presses it sits still at

$$0.739085\ldots$$

Start from 0.1, or 5, or $-20$: you end up at the same number. Why does pressing one button over and over always lead
to the same place? And why do other buttons behave so differently: pressing "square" ($x^2$) from 2 shoots off to
huge numbers, while from 0.5 it sinks to 0? This lesson explains what decides it.

## The idea

### Iteration

**Iterating** a function $g$ means applying it again and again, feeding each output back in as the next input:

$$x_0, \quad x_1 = g(x_0), \quad x_2 = g(x_1), \quad x_3 = g(x_2), \quad \ldots$$

The result is a sequence given by the first-order recurrence $x_{n+1} = g(x_n)$. You have done this before: the rule
$t_n = 3t_{n-1} - 1$ from [level 6](../level-6/index.md) iterates $g(x) = 3x - 1$, and the bouncing ball's heights
iterate $g(h) = 0.6h$.

### Fixed points

A **fixed point** of $g$ is a number $L$ with $g(L) = L$: once you are there, iterating leaves you there.

Here is why fixed points matter. If the iteration settles down to some number $L$, and $g$ is a continuous function
(small changes in input give small changes in output, which is true of cos, of polynomials, and of most functions you
know), then $L$ must be a fixed point: in $x_{n+1} = g(x_n)$, the left side approaches $L$ and the right side
approaches $g(L)$, so $L = g(L)$. So **the only possible places to settle are fixed points**.

For the calculator: the fixed point of cos solves $\cos L = L$. That equation cannot be solved with algebra, but
iterating solves it to as many decimal places as you like: $L \approx 0.739085$. (Some people call this number the
Dottie number.)

### Picturing iteration: the cobweb diagram

Draw the graph $y = g(x)$ and the diagonal line $y = x$. Fixed points are where they cross. Now follow these rules,
starting at $x_0$ on the horizontal axis:

1. Go **vertically** to the curve. You are at height $g(x_0) = x_1$.
2. Go **horizontally** to the diagonal. You are now at $(x_1, x_1)$, so you are standing above $x_1$.
3. Repeat: vertically to the curve (height $x_2$), horizontally to the diagonal, and so on.

The diagonal is what turns an output into the next input. Here is the cobweb for cos, starting at $x_0 = 0.1$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 310" role="img" aria-label="Cobweb diagram for y equals cos x and the line y equals x: starting at x = 0.1, the path goes up to the curve, across to the line, and spirals inwards to the crossing point near 0.739">
  <g stroke="currentColor" stroke-width="1.2">
    <line x1="30" y1="290" x2="315" y2="290"/>
    <line x1="30" y1="290" x2="30" y2="10"/>
  </g>
  <line x1="30" y1="290" x2="305" y2="15" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="6 4"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="30.0,40.0 41.0,40.2 52.0,41.0 63.0,42.2 74.0,43.9 85.0,46.0 96.0,48.7 107.0,51.8 118.0,55.3 129.0,59.3 140.0,63.8 151.0,68.7 162.0,74.0 173.0,79.8 184.0,86.0 195.0,92.5 206.0,99.4 217.0,106.7 228.0,114.4 239.0,122.4 250.0,130.7 261.0,139.3 272.0,148.3 283.0,157.5 294.0,166.9 305.0,176.6"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="1.8" points="55.0,290.0 55.0,41.2 278.8,41.2 278.8,153.9 166.1,153.9 166.1,76.2 243.8,76.2 243.8,126.0 194.0,126.0 194.0,91.9 228.1,91.9 228.1,114.5 205.5,114.5 205.5,99.1 220.9,99.1 220.9,109.4 210.6,109.4"/>
  <circle cx="214.8" cy="105.2" r="4" fill="currentColor"/>
  <g font-size="12" fill="currentColor">
    <text x="30" y="305" text-anchor="middle">0</text>
    <text x="280" y="305" text-anchor="middle">1</text>
    <text x="22" y="44" text-anchor="end">1</text>
    <text x="55" y="305" text-anchor="middle">x₀</text>
    <text x="250" y="190">y = cos x</text>
    <text x="250" y="30">y = x</text>
    <text x="222" y="95">0.739</text>
  </g>
</svg>
</div>

The path spirals inwards to the crossing point. Because the cos curve slopes **downwards** there, each step lands on
the other side of the fixed point: that is why the calculator display swings up and down.

### When does iteration settle?

Look at what happens near a fixed point $L$. Suppose $x_n$ is a small distance $e_n = x_n - L$ away from it. Near $L$,
the graph of $g$ is almost a straight line through $(L, L)$ with some slope $s$. (In calculus, $s$ is the
**derivative** $g'(L)$.) So

$$x_{n+1} - L = g(x_n) - g(L) \approx s\,(x_n - L), \qquad\text{that is}\qquad e_{n+1} \approx s\,e_n.$$

Near the fixed point, **the distance is multiplied by about $s$ at every step**: a geometric sequence. You know from
[level 7](../level-7/03-infinite-geometric.md) what that does.

- If $|s| < 1$, the distance shrinks to 0: the fixed point **attracts** nearby starts, and the iteration settles there.
- If $|s| > 1$, the distance grows: the fixed point **repels**, and the iteration runs away from it, however close you
  start.
- If $s$ is negative, the sign of the distance flips each step: the iteration hops from side to side (a spiral in the
  cobweb). If $s$ is positive, it approaches from one side (a staircase).
- If $s = 0$, the distance shrinks extremely fast, because the next error is much smaller than $s$ times the current
  one (it is roughly proportional to its **square**).

For cos at $L \approx 0.739$, the slope of $y = \cos x$ is $-\sin L \approx -0.674$. That is negative (the swinging)
with size less than 1 (the settling): each step shrinks the error to about two-thirds of what it was, which is why it
takes about thirty presses to fix six decimal places.

For $g(x) = 3x - 1$, the fixed point is $L = \frac12$ and the slope is 3. The fixed point repels: starting at 2 gives
$2, 5, 14, 41, \ldots$, rushing away, exactly as you found in level 6. In [lesson 4](04-solving-recurrences.md) you
saw the exact version of this: $t_n - \frac12 = 3(t_{n-1} - \frac12)$.

### Cycles

Iteration need not settle on a fixed point or run away. It can settle into a **cycle**, visiting the same few values
over and over. The **logistic map** $g(x) = rx(1 - x)$, a simple model of a population that grows but is held back
by crowding, shows this beautifully. Starting at $x_0 = 0.2$ and iterating many times:

| $r$ | where the iteration ends up |
| --- | --- |
| 2.5 | settles at 0.6 (a fixed point) |
| 3.2 | a 2-cycle: 0.5130, 0.7995, 0.5130, 0.7995, ... |
| 3.5 | a 4-cycle: 0.5009, 0.8750, 0.3828, 0.8269, ... |
| 4 | no pattern at all: it wanders forever |

The slope explains the change from settling to cycling. The fixed point (other than 0) is $L = 1 - \frac1r$, and the
slope there works out to $2 - r$. For $r = 2.5$ that is $-0.5$: attracting. For $r = 3.2$ it is $-1.2$: repelling, so
the iteration cannot settle there, and it falls into a cycle around it instead. At $r = 4$ the behaviour is called
**chaos**: two starts that differ by $0.0000001$ follow each other for a while, then end up completely different
within about 25 steps. Tiny differences grow geometrically, the same way a repelling fixed point pushes nearby points
away.

## Worked examples

**1. The Babylonian square root.** Iterate $g(x) = \frac{x}{2} + \frac{1}{x}$ from $x_0 = 1$.

$$x_1 = 1.5, \quad x_2 = 1.416667, \quad x_3 = 1.414215686, \quad x_4 = 1.414213562373.$$

The fixed point solves $\frac{L}{2} + \frac{1}{L} = L$, that is $\frac1L = \frac{L}{2}$, so $L^2 = 2$ and
$L = \sqrt2 = 1.41421356237\ldots$. The digits that are right roughly **double** every step (1, then 3, then 6, then
12). That is the $s = 0$ case: the slope of $g$ at $\sqrt2$ is $\frac12 - \frac{1}{L^2} = \frac12 - \frac12 = 0$. This
method of taking square roots is very old, and it is a special case of Newton's method, which calculators and computers
still use today.

**2. Finding and testing fixed points.** For $g(x) = x^2$: the fixed points solve $x^2 = x$, so $x = 0$ or $x = 1$. The
slope of $y = x^2$ is 0 at $x = 0$ (attracting) and 2 at $x = 1$ (repelling). So from 0.5 the iteration sinks to 0
($0.25, 0.0625, \ldots$), from 2 it runs away ($4, 16, 256, \ldots$), and only a start of exactly 1 (or $-1$, which
lands on 1) stays at 1. That answers the second question at the start.

**3. A linear iteration, exactly.** For $g(x) = 0.5x + 3$, the fixed point is $L = 0.5L + 3$, so $L = 6$, with slope
0.5. From $x_0 = 0$: $3, 4.5, 5.25, 5.625, \ldots$, approaching 6 from below (a staircase), with the distance from 6
halving each step: $6, 3, 1.5, 0.75, 0.375, \ldots$. Here "$e_{n+1} \approx s\,e_n$" is exact, because the graph
really is a straight line.

**4. The logistic map at $r = 2.5$.** Fixed points: $2.5x(1 - x) = x$ gives $x = 0$ or $2.5(1 - x) = 1$, $x = 0.6$.
Slope of $g(x) = 2.5x - 2.5x^2$ is $2.5 - 5x$: at 0 it is 2.5 (repelling, so populations do not die out), at 0.6 it
is $-0.5$ (attracting, with hopping). So any start strictly between 0 and 1 ends at 0.6.

## Try it

1. Find the fixed point of $g(x) = 0.8x + 2$. Is it attracting? Iterate three times from $x_0 = 0$.
2. Find the fixed points of $g(x) = x^2 - 2$ and the slope of the graph at each. Are they attracting or repelling?
3. Iterate $g(x) = \frac{x}{2} + \frac{3}{x}$ from $x_0 = 2$ four times. What number is it finding, and why?
4. On a calculator in radians, iterate $\sin$ from $x_0 = 1$. What happens, and how fast? (Hint: the slope of
   $y = \sin x$ at 0 is 1.)
5. Show that $g(x) = 1 - x$ has a fixed point but that iterating from 0 gives a 2-cycle. What is the slope at the
   fixed point, and why does neither rule ($|s| < 1$ or $|s| > 1$) apply?
6. Check that $0.5130$ and $0.7995$ form a 2-cycle for $g(x) = 3.2x(1 - x)$: compute $g(0.5130)$ and $g(0.7995)$.
7. The rule $x \to \sqrt{1 + x}$ from level 7 settles on $\varphi$. Verify that $\varphi$ is a fixed point, and use
   the slope of $\sqrt{1 + x}$ at $\varphi$, which is $\frac{1}{2\sqrt{1 + \varphi}} = \frac{1}{2\varphi}$, to explain
   why it attracts.
8. Why can't the iteration of cos settle anywhere except 0.739085, whatever the start?

??? note "Answers"
    1. $L = 0.8L + 2$ gives $0.2L = 2$, **$L = 10$**. The slope is 0.8, size less than 1, so it **attracts**.
       Iterates: $2, 3.6, 4.88$ (distances from 10: $10, 8, 6.4, 5.12$, each times 0.8).
    2. $x^2 - 2 = x$ gives $x^2 - x - 2 = (x - 2)(x + 1) = 0$, so **$x = 2$ or $x = -1$**. The slope of $y = x^2 - 2$
       is $2x$: **4** at $x = 2$ and **$-2$** at $x = -1$. Both have size more than 1, so **both repel**.
    3. $x_1 = 1 + 1.5 = 2.5$, $x_2 = 1.25 + 1.2 = 2.45$, $x_3 \approx 2.449490$, $x_4 \approx 2.449490$ (to 6
       decimals). The fixed point solves $\frac{L}{2} + \frac3L = L$, so $L^2 = 6$: it is finding **$\sqrt6 \approx 2.449490$**.
    4. It creeps towards 0, the only solution of $\sin x = x$, but **very slowly**: after 100 presses it is still
       about 0.17. The slope at 0 is exactly 1, so each step shrinks the distance by only a tiny amount; the rule
       "multiply by $s$" gives no shrinking at all to first order, and only the curve's bending pulls it in.
    5. $1 - L = L$ gives **$L = \frac12$**. From 0: $1, 0, 1, 0, \ldots$, a 2-cycle. The slope is **$-1$**: the distance
       from $\frac12$ is multiplied by $-1$ each step, so it neither shrinks nor grows, it just flips side. The case
       $|s| = 1$ is the borderline where the slope alone does not decide.
    6. $3.2 \times 0.5130 \times 0.4870 \approx 0.7995$ and $3.2 \times 0.7995 \times 0.2005 \approx 0.5130$. ✓
    7. $\sqrt{1 + \varphi} = \sqrt{\varphi^2} = \varphi$, using $\varphi^2 = \varphi + 1$. ✓ The slope there is
       $\frac{1}{2\varphi} \approx 0.309$, positive and less than 1, so it attracts (from one side, like a staircase),
       and each step shrinks the error to about a third.
    8. If the iteration settles, the limit must be a fixed point (shown in the lesson), so it must solve $\cos L = L$.
       Since $\cos L$ is between $-1$ and 1, so is $L$. If $L < 0$, then $\cos L > 0 > L$, so there is no solution
       there. On $[0, 1]$, $\cos x$ falls while $x$ rises, so $\cos x - x$ is always falling: it is $1$ at $x = 0$ and
       about $-0.46$ at $x = 1$, so it is zero **exactly once**. And the iteration really does settle: after one press
       any start lands in $[-1, 1]$, after two in $[\cos 1, 1] \approx [0.54, 1]$, and there the slope of cos has
       size at most $\sin 1 \approx 0.84 < 1$, so every step shrinks the distance to the fixed point. So it always
       ends at **0.739085**.

## Common mistake

**Thinking every fixed point is where the iteration goes.** A repelling fixed point is a fixed point, but the
iteration only stays there if it starts there exactly. For $g(x) = x^2$, the fixed point 1 is never reached from 0.9 or
1.1.

**Forgetting radians.** In degree mode, iterating cos settles on a different number, about 0.99985, because
$\cos x°$ is a different function.

## Where it leads

- Back: [Solving recurrences](04-solving-recurrences.md) · Next: [Unsolved patterns](06-unsolved-patterns.md).
- [Level 8 page](index.md) · [Patterns topic page](../index.md)
- The fixed point of a recursive rule first appeared in [Level 6: recursive sequences](../level-6/index.md).
- The slope of a curve at a point is the derivative: [Change](../../change/index.md) and
  [MAT137 Unit 3 (derivatives)](../../../uoft/MAT137/unit03.md). That a continuous iteration can only settle on a
  fixed point uses limits: [MAT137 Unit 11 (sequences)](../../../uoft/MAT137/unit11.md).
