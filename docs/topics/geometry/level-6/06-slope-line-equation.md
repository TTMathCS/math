---
title: "Slope and the equation of a line"
---

# Slope and the equation of a line

*Geometry · level 6, lesson 6 of 6*

## A question to start

Two wheelchair ramps are being built. The first rises 3 m over a horizontal distance of 8 m. The second rises 5 m
over 13 m. Which one is steeper?

The second one rises more, but it is also longer, so it is not obvious. Comparing the heights alone tells you
nothing; comparing the lengths alone tells you nothing. What matters is **how much it rises for each metre across**:
$3 \div 8 = 0.375$ against $5 \div 13 \approx 0.385$. The second ramp is steeper, just barely. That number, rise per
unit across, is the **slope**, and it turns every straight line into a short equation.

## The idea

### Slope: rise over run

Take two points on a line, $A(x_1, y_1)$ and $B(x_2, y_2)$. Going from $A$ to $B$, the **run** is the change across,
$x_2 - x_1$, and the **rise** is the change up, $y_2 - y_1$. The **slope**, usually called $m$, is

$$m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$$

It says how many units the line goes **up** for every **one** unit it goes **across** to the right.

- **Positive slope**: the line goes up from left to right. Slope 2 is steeper than slope $\tfrac12$.
- **Negative slope**: the line goes down from left to right. Slope $-3$ falls 3 for every 1 across.
- **Zero slope**: a horizontal line. The rise is 0.
- **Undefined slope**: a vertical line. The run is 0, and you cannot divide by 0.

Road signs show slope as a **grade**: a 12% grade means a rise of 12 m for every 100 m across, a slope of 0.12.

### Why a line has one slope everywhere

Would you get a different slope if you picked two other points on the same line? No, and here is why.

<div class="pattern-row" markdown="0">
<svg viewBox="20 20 220 170" role="img" aria-label="A straight line on a grid with two slope triangles under it: a small one with run 2 and rise 1, and a larger one with run 4 and rise 2; both have the same shape">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.35"><line x1="30" y1="30" x2="30" y2="180"/><line x1="55" y1="30" x2="55" y2="180"/><line x1="80" y1="30" x2="80" y2="180"/><line x1="105" y1="30" x2="105" y2="180"/><line x1="130" y1="30" x2="130" y2="180"/><line x1="155" y1="30" x2="155" y2="180"/><line x1="180" y1="30" x2="180" y2="180"/><line x1="205" y1="30" x2="205" y2="180"/><line x1="230" y1="30" x2="230" y2="180"/><line x1="30" y1="180" x2="230" y2="180"/><line x1="30" y1="155" x2="230" y2="155"/><line x1="30" y1="130" x2="230" y2="130"/><line x1="30" y1="105" x2="230" y2="105"/><line x1="30" y1="80" x2="230" y2="80"/><line x1="30" y1="55" x2="230" y2="55"/><line x1="30" y1="30" x2="230" y2="30"/></g>
  <polygon points="80,130 130,130 130,105" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <polygon points="130,105 230,105 230,55" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <line x1="30" y1="155" x2="230" y2="55" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="12" fill="currentColor"><text x="98" y="146">2</text><text x="136" y="122">1</text><text x="174" y="122">4</text><text x="236" y="84">2</text></g>
</svg>
</div>

Draw a right triangle under the line for each pair of points: a **slope triangle**, with a horizontal run and a
vertical rise. Any two slope triangles on the same line have the same angles: each has a right angle, and the angle
where the line meets the horizontal is the same for both (they are corresponding angles on parallel horizontal lines,
from [level 4](../level-4/index.md)). Triangles with the same angles are scaled copies of each other (the dilations of
[level 5](../level-5/04-dilations-scale-drawings.md)), so the ratio rise : run is the same in both. In the picture,
$\tfrac12 = \tfrac24$. One line, one slope.

### The equation of a line

The point where a line crosses the $y$-axis is its **$y$-intercept**, $(0, b)$. Take any other point $(x, y)$ on the
line. The slope from $(0, b)$ to $(x, y)$ is $\dfrac{y - b}{x - 0}$, and it must equal $m$:

$$\frac{y - b}{x} = m \quad\Longrightarrow\quad y - b = mx \quad\Longrightarrow\quad y = mx + b$$

This is the **slope-intercept form**. Every point on the line fits it, and every point that fits it is on the line. For
the line in the picture, $m = \tfrac12$ and it crosses the $y$-axis at 1, so $y = \tfrac12 x + 1$. Check with the point
$(4, 3)$: $\tfrac12 \times 4 + 1 = 3$. Yes.

If you know the slope $m$ and **any** point $(x_1, y_1)$ on the line, not necessarily the intercept, the same argument
gives the **point-slope form**:

$$y - y_1 = m(x - x_1)$$

Two special lines do not fit $y = mx + b$ in the usual way: a **horizontal** line through $(0, c)$ is $y = c$ (slope 0),
and a **vertical** line through $(c, 0)$ is $x = c$ (no slope at all).

### Parallel lines have equal slopes

**Parallel** lines never meet. If two lines have the same slope, they rise at the same rate, so the gap between them
never changes and they never meet. If their slopes differ, one rises faster than the other and they must cross
somewhere. So (for lines that are not vertical):

> Two lines are parallel exactly when their slopes are equal.

$y = 2x + 1$ and $y = 2x - 5$ are parallel. Only the intercept differs: one is the other slid down 6.

### Perpendicular lines: slopes multiply to $-1$

Take a line with slope $m = \dfrac{\text{rise}}{\text{run}}$, and its slope triangle. Turn the whole picture a quarter
turn anticlockwise. In [level 5, lesson 3](../level-5/03-transformations-grid.md) a quarter turn sends a step of
$(\text{run}, \text{rise})$ to $(-\text{rise}, \text{run})$. The turned line is perpendicular to the first one, and its
slope is

$$\frac{\text{run}}{-\text{rise}} = -\frac{1}{m}$$

<div class="pattern-row" markdown="0">
<svg viewBox="50 15 235 185" role="img" aria-label="Two perpendicular lines crossing at P; the orange slope triangle on the first line has run 4 and rise 2; turned a quarter turn about P it becomes the blue slope triangle on the second line, with run -2 and rise 4">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.35"><line x1="55" y1="20" x2="55" y2="195"/><line x1="80" y1="20" x2="80" y2="195"/><line x1="105" y1="20" x2="105" y2="195"/><line x1="130" y1="20" x2="130" y2="195"/><line x1="155" y1="20" x2="155" y2="195"/><line x1="180" y1="20" x2="180" y2="195"/><line x1="205" y1="20" x2="205" y2="195"/><line x1="230" y1="20" x2="230" y2="195"/><line x1="255" y1="20" x2="255" y2="195"/><line x1="280" y1="20" x2="280" y2="195"/><line x1="55" y1="195" x2="280" y2="195"/><line x1="55" y1="170" x2="280" y2="170"/><line x1="55" y1="145" x2="280" y2="145"/><line x1="55" y1="120" x2="280" y2="120"/><line x1="55" y1="95" x2="280" y2="95"/><line x1="55" y1="70" x2="280" y2="70"/><line x1="55" y1="45" x2="280" y2="45"/><line x1="55" y1="20" x2="280" y2="20"/></g>
  <polygon points="155,145 255,145 255,95" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <polygon points="155,145 155,45 105,45" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <g stroke="currentColor" stroke-width="2.5"><line x1="55" y1="195" x2="280" y2="82.5"/><line x1="92.5" y1="20" x2="180" y2="195"/></g>
  <circle cx="155" cy="145" r="3.5" fill="currentColor"/>
  <g font-size="12" fill="currentColor">
    <text x="140" y="160">P</text><text x="200" y="160">run 4</text><text x="260" y="124">rise 2</text>
    <text x="160" y="96">4</text><text x="124" y="40">−2</text>
  </g>
</svg>
</div>

In the picture the first line has slope $\tfrac24 = \tfrac12$ and the turned line has slope $\tfrac{4}{-2} = -2$. And
$\tfrac12 \times (-2) = -1$. In general:

> Two lines (neither of them vertical or horizontal) are perpendicular exactly when their slopes multiply to $-1$:
> $m_1 \times m_2 = -1$, that is, $m_2 = -\dfrac{1}{m_1}$.

In words: **flip the fraction and change the sign.** The perpendicular to slope $\tfrac23$ has slope $-\tfrac32$. A
horizontal line and a vertical line are also perpendicular, but the rule does not apply because a vertical line has
no slope.

## Worked examples

**1. Slope from two points.** Through $(1, 2)$ and $(7, 10)$: $m = \dfrac{10 - 2}{7 - 1} = \dfrac86 = \dfrac43$. The
line climbs 4 for every 3 across.

**2. Equation from a slope and a point.** Slope 3, through $(2, 5)$.

1. Point-slope form: $y - 5 = 3(x - 2)$.
2. Multiply out: $y - 5 = 3x - 6$, so $y = 3x - 1$.
3. Check with $x = 2$: $3 \times 2 - 1 = 5$. Correct.

**3. Equation from two points.** Through $(-1, 4)$ and $(3, -4)$.

1. $m = \dfrac{-4 - 4}{3 - (-1)} = \dfrac{-8}{4} = -2$.
2. $y - 4 = -2(x + 1)$, so $y = -2x - 2 + 4 = -2x + 2$.
3. Check with $(3, -4)$: $-2 \times 3 + 2 = -4$. Correct.

**4. Parallel, perpendicular or neither?** Write each line as $y = mx + b$ first.

1. $y = 2x + 3$ and $4x + 2y = 7$. The second: $2y = -4x + 7$, $y = -2x + 3.5$. Slopes 2 and $-2$: not equal, and
   $2 \times (-2) = -4 \ne -1$. Neither.
2. $y = 2x + 3$ and $x + 2y = 6$. The second: $2y = -x + 6$, $y = -\tfrac12 x + 3$. Slopes 2 and $-\tfrac12$, product
   $-1$. Perpendicular.

**5. A right angle, tested with slopes.** In [lesson 3](03-distance-midpoint.md), $A(1, 1)$, $B(5, 3)$, $C(3, 7)$ had a
right angle at $B$. Slopes: $AB$: $\dfrac{3 - 1}{5 - 1} = \dfrac12$. $BC$: $\dfrac{7 - 3}{3 - 5} = -2$. The product is
$-1$, so $AB \perp BC$ (the symbol $\perp$ means "is perpendicular to"). Two methods, one answer.

**6. A perpendicular bisector as an equation.** For $A(1, 2)$ and $B(7, 10)$:

1. Midpoint: $(4, 6)$. Slope of $AB$: $\dfrac43$, so the perpendicular slope is $-\dfrac34$.
2. $y - 6 = -\tfrac34(x - 4)$, so $y = -\tfrac34 x + 3 + 6 = -\tfrac34 x + 9$.
3. Check: $(0, 9)$ is on this line. Its distance to $A$ is $\sqrt{1 + 49} = \sqrt{50}$ and to $B$ is
   $\sqrt{49 + 1} = \sqrt{50}$. Equal, as every point on a perpendicular bisector must be.

## Try it

1. Find the slope through $(2, 3)$ and $(6, 11)$.
2. Find the slope through $(-3, 5)$ and $(3, 2)$. Does the line go up or down from left to right?
3. Write the equation of the line with slope $-2$ and $y$-intercept 7.
4. Find the equation of the line through $(1, 3)$ and $(4, 9)$.
5. What is the slope of a line perpendicular to one with slope $\tfrac35$? Of one perpendicular to slope $-4$?
6. Find the equation of the line parallel to $y = 4x - 1$ that passes through $(2, 3)$.
7. A road has a 7% grade. How many metres does it rise over 2 km measured horizontally?
8. Harder: find the equation of the perpendicular bisector of $(-2, 1)$ and $(4, 5)$.

??? note "Answers"
    1. $\dfrac{11 - 3}{6 - 2} = \dfrac84 = 2$.
    2. $\dfrac{2 - 5}{3 - (-3)} = \dfrac{-3}{6} = -\dfrac12$. Negative, so it goes down from left to right.
    3. $y = -2x + 7$.
    4. $m = \dfrac{9 - 3}{4 - 1} = 2$. $y - 3 = 2(x - 1)$, so $y = 2x + 1$. Check $(4, 9)$: $8 + 1 = 9$.
    5. $-\dfrac53$ (flip and change sign; $\tfrac35 \times (-\tfrac53) = -1$). For $-4$: $\dfrac14$.
    6. Same slope, 4. $y - 3 = 4(x - 2)$, so $y = 4x - 5$.
    7. Slope 0.07. Over $2000$ m: $0.07 \times 2000 = 140$ m.
    8. Midpoint $\left(\dfrac{-2 + 4}{2}, \dfrac{1 + 5}{2}\right) = (1, 3)$. Slope of the segment
       $\dfrac{5 - 1}{4 + 2} = \dfrac46 = \dfrac23$. Perpendicular slope $-\dfrac32$. $y - 3 = -\tfrac32(x - 1)$, so
       $y = -\tfrac32 x + \tfrac32 + 3 = -\tfrac32 x + 4.5$.

## Common mistake

**Putting run over rise.** Slope is **rise over run**: change in $y$ on top. A line through $(0, 0)$ and $(4, 2)$ has
slope $\tfrac24 = \tfrac12$, not 2. Sanity check: a gentle line has a slope smaller than 1.

**Subtracting in different orders.** If you take $y_2 - y_1$ on top, you must take $x_2 - x_1$ underneath, with the
points in the same order. Mixing them ($y_2 - y_1$ over $x_1 - x_2$) flips the sign of the slope.

**Forgetting to change the sign for perpendicular.** The perpendicular to slope 3 is $-\tfrac13$, not $\tfrac13$.
Check: the product must be $-1$.

## Where it leads

- Previous lesson: [Area of a circle, sectors and arcs](05-circle-area-sectors.md).
- Next level: [Level 7: similarity and trigonometry](../level-7/index.md). The slope of a line is the **tangent** of the
  angle it makes with the horizontal, and the similar slope triangles here are the start of trigonometry.
- Straight-line graphs, solving two line equations together, and functions: [Algebra](../../algebra/index.md).
  Slope as a rate of change: [Change](../../change/index.md).
- The slope of a curve at a point is the derivative: [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md).
- This level: [Level 6: Pythagoras and circles](index.md).
