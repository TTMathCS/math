---
title: "The correlation coefficient r"
---

# The correlation coefficient r

*Statistics and data · level 7, lesson 4 of 7*

## A question to start

In 1973 the statistician Francis Anscombe published four small data sets, now called **Anscombe's quartet**. All four
have, to two decimal places, the same mean of $x$, the same mean of $y$, the same standard deviations, the same line
of best fit and the same correlation coefficient, about 0.82. Yet when you draw them, one is a loose upward cloud, one is a perfect curve, one
is a perfect line with one stray point, and one is a vertical stack of points with a single point far off to the
side.

How can one number be identical for four such different pictures? To answer that you need to know exactly what the
number measures, and what it cannot see.

## The idea

### Words first, then a number

In [level 6](../level-6/02-correlation.md) you described scatter plots in words: positive or negative, strong or
weak, straight or curved. The **correlation coefficient** $r$ (also called **Pearson's r**) puts a number on two of
those words: the **direction** and the **strength** of a **straight-line** pattern.

- $r$ is always between $-1$ and $1$.
- $r = 1$: every point lies exactly on an upward-sloping straight line.
- $r = -1$: every point lies exactly on a downward-sloping straight line.
- $r$ near 0: no straight-line pattern.
- The sign gives the direction; the size (ignoring the sign) gives the strength.

Rough words people use: $|r|$ above about 0.8 is "strong", about 0.5 to 0.8 "moderate", below about 0.3 "weak".
These are habits, not rules; a field like physics expects far stronger correlations than a field like psychology.

### Building r from z-scores

Here is the idea behind the formula. Draw a dashed vertical line at the mean $\bar{x}$ and a dashed horizontal line
at the mean $\bar{y}$. They cut the scatter plot into four **quadrants**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 235" role="img" aria-label="Scatter plot of five points split into four quadrants by dashed lines at the mean of x, 3, and the mean of y, 4. Points in the upper right and lower left quadrants give positive products of deviations; the other two quadrants give negative products">
  <line x1="40" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <rect x="170.0" y="20" width="130.0" height="60.0" fill="#7ccf9a" fill-opacity="0.25"/>
  <rect x="40" y="80.0" width="130.0" height="120.0" fill="#7ccf9a" fill-opacity="0.25"/>
  <line x1="170.0" y1="200.0" x2="170.0" y2="20.0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="40.0" y1="80.0" x2="300.0" y2="80.0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="83.3" cy="140.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="126.7" cy="80.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="170.0" cy="50.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="213.3" cy="80.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="256.7" cy="50.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="239.3" y="32.0" font-size="11" text-anchor="middle" fill="currentColor">+ × + = +</text>
  <text x="100.7" y="185.0" font-size="11" text-anchor="middle" fill="currentColor">− × − = +</text>
  <text x="100.7" y="32.0" font-size="11" text-anchor="middle" fill="currentColor">− × + = −</text>
  <text x="239.3" y="185.0" font-size="11" text-anchor="middle" fill="currentColor">+ × − = −</text>
  <text x="170.0" y="216.0" font-size="11" text-anchor="middle" fill="currentColor">x̄ = 3</text>
  <text x="318.0" y="84.0" font-size="11" text-anchor="middle" fill="currentColor">ȳ = 4</text>
  <text x="83.3" y="214.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="126.7" y="214.0" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <text x="170.0" y="228.0" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <text x="213.3" y="214.0" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <text x="256.7" y="214.0" font-size="10" text-anchor="middle" fill="currentColor">5</text>
</svg>
</div>

For each point, find its **deviations** $x - \bar{x}$ and $y - \bar{y}$ and multiply them.

- A point to the upper right has both deviations positive: product **positive**.
- A point to the lower left has both negative: product **positive** again.
- Points in the other two quadrants have one positive and one negative deviation: product **negative**.

If the cloud slopes upward, most points sit in the two positive quadrants, so the products add to a large positive
total. If it slopes down, the total is negative. If there is no straight-line trend, the positive and negative
products roughly cancel.

The total depends on the units (centimetres give bigger numbers than metres), so we first turn each deviation into a
z-score (lesson 3), which has no units. Then

$$r = \frac{1}{n - 1} \sum z_x z_y, \qquad z_x = \frac{x - \bar{x}}{s_x},\quad z_y = \frac{y - \bar{y}}{s_y}.$$

So $r$ is (almost) the **average product of the z-scores**. Writing $s_x$ and $s_y$ out and cancelling the $n - 1$
gives the formula you will usually compute with:

$$r = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sqrt{\sum (x - \bar{x})^2 \, \sum (y - \bar{y})^2}} = \frac{S_{xy}}{\sqrt{S_{xx} S_{yy}}}$$

where $S_{xy}$, $S_{xx}$ and $S_{yy}$ are short names for the three sums.

### Why r can never go past 1 (a real proof)

The standardised values satisfy $\sum z_x^2 = n - 1$, because $s_x^2 = \dfrac{\sum (x - \bar{x})^2}{n - 1}$ means
$\sum \left(\dfrac{x - \bar{x}}{s_x}\right)^2 = n - 1$. The same holds for $z_y$.

Now look at the squares $(z_x - z_y)^2$. A square is never negative, so their sum is never negative:

$$0 \le \sum (z_x - z_y)^2 = \sum z_x^2 - 2\sum z_x z_y + \sum z_y^2 = (n - 1) - 2(n - 1)r + (n - 1).$$

The right side is $2(n - 1)(1 - r)$. It is at least 0, so $r \le 1$. Doing the same with $(z_x + z_y)^2$ gives
$2(n - 1)(1 + r) \ge 0$, so $r \ge -1$.

The proof also tells you **when** $r = 1$: only when every $z_x - z_y$ is 0, so every point has $z_y = z_x$. That
means every point lies on one straight line with positive slope. A perfect correlation is a perfect line, nothing
else.

### What r does not notice

- **Units and scale.** Changing centimetres to inches, or Celsius to Fahrenheit, does not change the z-scores, so it
  does not change $r$. Swapping $x$ and $y$ does not change it either.
- **Curves.** $r$ measures only straight-line patterns. Five points exactly on the parabola $y = x^2$, at
  $x = -2, -1, 0, 1, 2$, have $r = 0$: the left half slopes down, the right half slopes up, and the products cancel
  perfectly. There is a perfect relationship, but no straight-line one.
- **Outliers.** One point far from the rest can make $r$ large or small almost on its own.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 205" role="img" aria-label="Left: five points lying exactly on the parabola y equals x squared, which have correlation zero. Right: five scattered points with correlation 0.14, plus one far-away point that raises the correlation to 0.91">
  <line x1="30" y1="170" x2="230" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="20" x2="30" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="1" points="46.0,22.7 48.8,31.4 51.6,39.8 54.4,47.8 57.2,55.6 60.0,63.1 62.8,70.3 65.6,77.2 68.4,83.9 71.2,90.2 74.0,96.2 76.8,101.9 79.6,107.4 82.4,112.5 85.2,117.4 88.0,121.9 90.8,126.2 93.6,130.2 96.4,133.8 99.2,137.2 102.0,140.3 104.8,143.1 107.6,145.6 110.4,147.8 113.2,149.7 116.0,151.3 118.8,152.6 121.6,153.7 124.4,154.4 127.2,154.9 130.0,155.0 132.8,154.9 135.6,154.4 138.4,153.7 141.2,152.6 144.0,151.3 146.8,149.7 149.6,147.8 152.4,145.6 155.2,143.1 158.0,140.3 160.8,137.2 163.6,133.8 166.4,130.2 169.2,126.2 172.0,121.9 174.8,117.4 177.6,112.5 180.4,107.4 183.2,101.9 186.0,96.2 188.8,90.2 191.6,83.9 194.4,77.2 197.2,70.3 200.0,63.1 202.8,55.6 205.6,47.8 208.4,39.8 211.2,31.4 214.0,22.7"/>
  <circle cx="50.0" cy="35.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="90.0" cy="125.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="130.0" cy="155.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="170.0" cy="125.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="210.0" cy="35.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="130.0" y="192.0" font-size="11" text-anchor="middle" fill="currentColor">y = x²: a perfect curve, r = 0</text>
  <line x1="290" y1="170" x2="490" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="20" x2="290" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="305.4" cy="135.4" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="320.8" cy="158.5" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="336.2" cy="123.8" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="351.5" cy="146.9" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="366.9" cy="135.4" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="474.6" cy="31.5" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="390.0" y="192.0" font-size="11" text-anchor="middle" fill="currentColor">one far point: r jumps 0.14 → 0.91</text>
</svg>
</div>

That is Anscombe's lesson: **always draw the scatter plot**. $r$ summarises a picture; it does not replace it.

## Worked examples

**1. A perfect line.** $x$: 1, 2, 3, 4 and $y = 2x + 1$: 3, 5, 7, 9.

$\bar{x} = 2.5$, $\bar{y} = 6$. Deviations: $x$: $-1.5, -0.5, 0.5, 1.5$; $y$: $-3, -1, 1, 3$.
$S_{xy} = 4.5 + 0.5 + 0.5 + 4.5 = 10$, $S_{xx} = 2.25 + 0.25 + 0.25 + 2.25 = 5$, $S_{yy} = 9 + 1 + 1 + 9 = 20$.

$r = \dfrac{10}{\sqrt{5 \times 20}} = \dfrac{10}{10} =$ **1**, as the proof promised for a perfect upward line.

**2. A real-looking set, two ways.** Hours of practice $x$ and points $y$: (1, 2), (2, 4), (3, 5), (4, 4), (5, 5).

$\bar{x} = 3$, $\bar{y} = 4$. Deviations: $x$: $-2, -1, 0, 1, 2$; $y$: $-2, 0, 1, 0, 1$.
$S_{xy} = 4 + 0 + 0 + 0 + 2 = 6$, $S_{xx} = 10$, $S_{yy} = 6$.

$r = \dfrac{6}{\sqrt{60}} \approx$ **0.77**: a moderately strong positive correlation.

The z-score way gives the same: $s_x = \sqrt{10/4} \approx 1.581$, $s_y = \sqrt{6/4} \approx 1.225$, so
$\sum z_x z_y = \dfrac{S_{xy}}{s_x s_y} = \dfrac{6}{1.936} \approx 3.10$, and $r \approx 3.10 \div 4 \approx 0.77$.
✓

**3. A negative correlation.** $x$: 2, 4, 6, 8; $y$: 9, 7, 8, 4.

$\bar{x} = 5$, $\bar{y} = 7$. Deviations: $x$: $-3, -1, 1, 3$; $y$: $2, 0, 1, -3$.
$S_{xy} = -6 + 0 + 1 - 9 = -14$, $S_{xx} = 20$, $S_{yy} = 4 + 0 + 1 + 9 = 14$.

$r = \dfrac{-14}{\sqrt{280}} \approx$ **−0.84**: strong and negative.

**4. The parabola.** $x$: $-2, -1, 0, 1, 2$, $y = x^2$: 4, 1, 0, 1, 4.

$\bar{x} = 0$, $\bar{y} = 2$. $S_{xy} = (-2)(2) + (-1)(-1) + 0 + (1)(-1) + (2)(2) = -4 + 1 + 0 - 1 + 4 = 0$. So
$r = 0$, although $y$ is completely decided by $x$.

**5. One outlier.** The five points (1, 3), (2, 1), (3, 4), (4, 2), (5, 3) are a shapeless cloud: technology gives
$r \approx 0.14$. Add a sixth point (12, 12), far out to the upper right. Now $r \approx 0.91$. One point created a
"strong correlation" that the other five do not show. Before reporting $r$, look for points like this and ask if they
belong.

## Try it

1. Without calculating, give $r$ for: (a) Celsius and Fahrenheit temperatures of the same 20 days; (b) the price of
   an item and the price after a 10% discount; (c) the time left in a race and the distance already run, at a steady
   speed.
2. Compute $r$ for $x$: 1, 2, 3, 4 and $y$: 1, 3, 2, 4.
3. Compute $r$ for $x$: 1, 2, 3 and $y$: 5, 3, 1. Explain the answer from a sketch.
4. A data set of heights in centimetres and weights in kilograms has $r = 0.62$. What is $r$ if heights are changed
   to metres and weights to pounds?
5. Explain why five points on $y = (x - 2)^2$ at $x = 0, 1, 2, 3, 4$ have $r = 0$. Then, with technology, find $r$
   for $y = x^2$ at $x = 1, 2, 3, 4, 5, 6$. What does this show?
6. For each statement, say true or false and why. (a) $r = 0.9$ means 90% of the points are on the line. (b) $r = -0.9$
   is a weaker correlation than $r = 0.5$. (c) $r = 0$ means $x$ and $y$ are not related.
7. Use the proof above to show that if $r = -1$, then $z_y = -z_x$ for every point.

??? note "Answers"
    1. (a) $r = 1$: $F = 1.8C + 32$ is an exact upward line. (b) $r = 1$: the new price is $0.9 \times$ the old one.
       (c) $r = -1$: distance run goes up exactly as time left goes down, in a straight line.
    2. Means 2.5 and 2.5. Deviations $x$: $-1.5, -0.5, 0.5, 1.5$; $y$: $-1.5, 0.5, -0.5, 1.5$.
       $S_{xy} = 2.25 - 0.25 - 0.25 + 2.25 = 4$, $S_{xx} = S_{yy} = 5$. $r = \dfrac{4}{\sqrt{25}} = 0.8$.
    3. Means 2 and 3. Deviations $x$: $-1, 0, 1$; $y$: $2, 0, -2$. $S_{xy} = -2 + 0 - 2 = -4$, $S_{xx} = 2$,
       $S_{yy} = 8$. $r = \dfrac{-4}{\sqrt{16}} = -1$. The points lie exactly on the line $y = 7 - 2x$, sloping
       down.
    4. Still **0.62**. Changing units multiplies each variable by a positive number, which does not change the
       z-scores.
    5. $y$: 4, 1, 0, 1, 4, mean 2; $x$ deviations $-2, -1, 0, 1, 2$; $y$ deviations $2, -1, -2, -1, 2$. Products:
       $-4 + 1 + 0 - 1 + 4 = 0$, so $r = 0$. For $y = x^2$ at 1 to 6, $r \approx 0.98$: a curved pattern can still
       give a large $r$. A large $r$ does not prove the pattern is straight; draw it.
    6. (a) False: $r$ is not a percent of points; it measures how closely the whole cloud follows a line. (b) False:
       strength is the size, so $-0.9$ is stronger than $0.5$. (c) False: it means no **straight-line** relation;
       there may be a curved one (as in the parabola).
    7. $\sum (z_x + z_y)^2 = 2(n - 1)(1 + r)$. If $r = -1$, this sum is 0. A sum of squares is 0 only if every
       square is 0, so $z_x + z_y = 0$, that is $z_y = -z_x$, for every point: all points lie on one downward line.

## Common mistake

**Reporting r without looking at the graph.** A single number cannot tell a line from a curve, or a real trend from
one stray point. Draw the scatter plot first, every time.

**Reading a strong r as a cause.** Even $r = 0.95$ says nothing about which variable affects which, or whether a third
variable drives both. See [level 6: correlation is not causation](../level-6/05-correlation-causation.md).

## Where it leads

- Back: [z-scores and percentiles](03-z-scores-percentiles.md) · Next: [Least-squares regression](05-least-squares.md)
- [Level 7 page](index.md) · [Statistics topic page](../index.md)
- The idea of $r$ as a "dot product" of two lists, and the proof that $|r| \le 1$, is the Cauchy–Schwarz inequality
  of [MAT247 Unit 1 (inner product spaces)](../../../uoft/MAT247H1/unit01.md): $r$ is the cosine of the angle between
  the two lists of deviations.
- Covariance and correlation of random variables: [Probability](../../probability/index.md).
