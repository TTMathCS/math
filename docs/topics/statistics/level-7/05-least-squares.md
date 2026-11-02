---
title: "Least-squares regression"
---

# Least-squares regression

*Statistics and data · level 7, lesson 5 of 7*

## A question to start

Give ten people the same scatter plot and a ruler, and ask each to draw the line of best fit by eye (as in
[level 6](../level-6/03-line-best-fit.md)). You will get ten slightly different lines. Each person will say theirs
looks best. Is there a single line that is, in a precise sense, **the** best one, so that everyone who follows the
same rule gets the same answer? There is, and you can find it with nothing more than squares and the vertex of a
parabola.

## The idea

### Predictions and residuals

A line $\hat{y} = a + bx$ (read "y-hat") gives a **predicted** value $\hat{y}$ for each $x$. The hat marks a
prediction, not a measurement. For each data point, the **residual** is the miss:

$$\text{residual} = e = y - \hat{y} = \text{actual} - \text{predicted}.$$

A positive residual means the point is **above** the line (the line under-predicted); a negative residual means the
point is **below** it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 225" role="img" aria-label="Five data points and the least-squares line y-hat equals 2.2 plus 0.6 x, which passes through the point of means (3, 4). Dashed vertical segments from each point to the line are the residuals">
  <line x1="40" y1="200" x2="320" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="54.0" y1="128.6" x2="310.7" y2="29.6" stroke="currentColor" stroke-width="2"/>
  <line x1="86.7" y1="140.0" x2="86.7" y2="116.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="133.3" y1="80.0" x2="133.3" y2="98.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="180.0" y1="50.0" x2="180.0" y2="80.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="226.7" y1="80.0" x2="226.7" y2="62.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="273.3" y1="50.0" x2="273.3" y2="44.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/>
  <circle cx="86.7" cy="140.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="133.3" cy="80.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="180.0" cy="50.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="226.7" cy="80.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="273.3" cy="50.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="180.0" cy="80.0" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="191.7" y="93.5" font-size="11" text-anchor="start" fill="currentColor">(x̄, ȳ)</text>
  <text x="282.7" y="20.0" font-size="11" text-anchor="middle" fill="currentColor">ŷ = 2.2 + 0.6x</text>
  <text x="186.0" y="65.0" font-size="10" text-anchor="start" fill="currentColor">+1.0</text>
  <text x="232.7" y="71.0" font-size="10" text-anchor="start" fill="currentColor">−0.6</text>
  <text x="92.7" y="128.0" font-size="10" text-anchor="start" fill="currentColor">−0.8</text>
  <text x="86.7" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="133.3" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <text x="180.0" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <text x="226.7" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <text x="273.3" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">5</text>
</svg>
</div>

### What "best" should mean

A good line has small residuals. But we need one number for the whole data set, to compare lines.

- **Adding the residuals** does not work: big positive and big negative misses cancel, and many bad lines give a total
  of 0.
- **Adding the sizes** (absolute values) works, but the algebra is awkward and the best line is not always unique.
- **Adding the squares** works and gives clean algebra. Squares are never negative, so misses cannot cancel, and big
  misses count extra: a miss of 4 costs 16, four times as much as a miss of 2.

The **least-squares regression line** is the line that makes the **sum of squared residuals**

$$\text{SSE} = \sum (y - \hat{y})^2$$

as small as possible. (SSE stands for "sum of squared errors".) The idea goes back to Legendre and Gauss, around 1805
to 1809, who used it to fit the orbits of planets and comets to telescope measurements.

### Step 1: the best single number is the mean

Before lines, a warm-up. Suppose you must predict every $y$ with one number $c$. Which $c$ makes $\sum (y - c)^2$
smallest?

Write each miss as $y - c = (y - \bar{y}) + (\bar{y} - c)$ and square:

$$\sum (y - c)^2 = \sum (y - \bar{y})^2 + 2(\bar{y} - c)\sum (y - \bar{y}) + n(\bar{y} - c)^2.$$

The middle sum is 0, because deviations from the mean always add to 0. So

$$\sum (y - c)^2 = \sum (y - \bar{y})^2 + n(\bar{y} - c)^2.$$

The first part does not depend on $c$. The second part is never negative and is 0 only when $c = \bar{y}$. So the
**mean is the best single prediction** in the least-squares sense. (This is also why the standard deviation is built
around the mean.)

### Step 2: the best line goes through the point of means

Now fix any slope $b$ and ask for the best intercept $a$. The residuals are $y - bx - a$: that is, we are predicting
the numbers $y - bx$ with a single number $a$. By Step 1 the best $a$ is their mean:

$$a = \bar{y} - b\bar{x}.$$

Rearranged, $\bar{y} = a + b\bar{x}$: **the least-squares line always passes through the point $(\bar{x}, \bar{y})$**.
It also means the residuals of the best line add to 0.

### Step 3: the best slope, from a parabola

Since the line passes through $(\bar{x}, \bar{y})$, measure from there: let $X = x - \bar{x}$ and $Y = y - \bar{y}$.
The residual is $Y - bX$, and

$$\text{SSE}(b) = \sum (Y - bX)^2 = \sum Y^2 - 2b\sum XY + b^2 \sum X^2 = S_{yy} - 2bS_{xy} + b^2 S_{xx}.$$

This is a quadratic in $b$ with a positive $b^2$ coefficient, so its graph is an upward parabola. Its lowest point
is at the vertex, $b = -\dfrac{(-2S_{xy})}{2S_{xx}}$, which gives the slope

$$b = \frac{S_{xy}}{S_{xx}} = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sum (x - \bar{x})^2}, \qquad a = \bar{y} - b\bar{x}.$$

Because $r = \dfrac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$ (last lesson), the slope can also be written

$$b = r\,\frac{s_y}{s_x}.$$

This says: for every standard deviation that $x$ goes up, the prediction of $y$ goes up by only $r$ standard
deviations. Since $|r| < 1$ for real data, predictions are pulled towards the mean. Francis Galton noticed this in
the 1880s with the heights of parents and children: very tall parents tend to have children who are tall, but less
extremely so. He called it **regression towards the mean**, and that is where the word "regression" comes from.

### r squared: the share of variation explained

Put the best slope back into SSE. With $b = S_{xy}/S_{xx}$:

$$\text{SSE} = S_{yy} - \frac{S_{xy}^2}{S_{xx}} = S_{yy}\left(1 - \frac{S_{xy}^2}{S_{xx}S_{yy}}\right) = S_{yy}(1 - r^2).$$

$S_{yy} = \sum (y - \bar{y})^2$ is the total variation in $y$ (the SSE you get by ignoring $x$ and predicting
$\bar{y}$ every time; call it SST). So

$$r^2 = 1 - \frac{\text{SSE}}{\text{SST}}.$$

$r^2$, the **coefficient of determination**, is the **fraction of the variation in $y$ that the line explains**. If
$r = 0.8$, then $r^2 = 0.64$: the line accounts for 64% of the variation, and 36% is left in the residuals. Note how
much smaller that is than "0.8" sounds.

### Reading a regression line

- The **slope** $b$: the predicted change in $y$ for each increase of 1 in $x$, in the units of $y$ per unit of $x$.
- The **intercept** $a$: the predicted $y$ when $x = 0$. Often meaningless if $x = 0$ is far outside the data.
- The line predicts $y$ from $x$. To predict $x$ from $y$ you need a **different** line (it minimises horizontal
  misses instead of vertical ones), unless $r = \pm 1$.

## Worked examples

**1. The full calculation.** Practice hours $x$ and points $y$: (1, 2), (2, 4), (3, 5), (4, 4), (5, 5).

From the last lesson: $\bar{x} = 3$, $\bar{y} = 4$, $S_{xy} = 6$, $S_{xx} = 10$, $S_{yy} = 6$.

- $b = 6 \div 10 = 0.6$ points per hour; $a = 4 - 0.6 \times 3 = 2.2$. Line: $\hat{y} = 2.2 + 0.6x$.
- Predictions at $x = 1, \dots, 5$: 2.8, 3.4, 4.0, 4.6, 5.2.
- Residuals: $-0.8, 0.6, 1.0, -0.6, -0.2$. They add to 0, as Step 2 promised.
- SSE $= 0.64 + 0.36 + 1 + 0.36 + 0.04 = 2.4$. SST $= S_{yy} = 6$.
- $r^2 = 1 - 2.4 \div 6 = 0.6$, and indeed $r = 0.7746$ gives $r^2 = 0.6$. ✓ The line explains 60% of the variation
  in points.

**2. Study time and marks.** Eight students record hours studied $x$ and test mark $y$:

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $y$ | 52 | 55 | 61 | 60 | 68 | 70 | 69 | 77 |

$\bar{x} = 4.5$, $\bar{y} = 64$, $S_{xx} = 42$, $S_{xy} = 140$, $S_{yy} = 496$.

- $b = 140 \div 42 \approx 3.33$ marks per hour; $a = 64 - 3.333 \times 4.5 = 49$. Line: $\hat{y} = 49 + 3.33x$.
- $r = \dfrac{140}{\sqrt{42 \times 496}} \approx 0.970$, $r^2 \approx 0.94$: 94% of the variation in marks goes with
  study time in this group.
- The student who studied 7 hours and got 69: predicted $49 + 3.333 \times 7 \approx 72.3$, residual
  $69 - 72.3 = -3.3$. This student did 3.3 marks worse than the line predicts.
- Interpretation: each extra hour goes with about 3.3 more marks. The intercept 49 is the predicted mark for 0 hours,
  just outside the data, so treat it with care.

**3. From summary numbers only.** In a large class, test 1 has mean 70 and standard deviation 8, test 2 has mean 60
and standard deviation 12, and $r = 0.6$. Predict the test 2 mark of a student who got 80 on test 1.

$b = r\dfrac{s_y}{s_x} = 0.6 \times \dfrac{12}{8} = 0.9$, $a = 60 - 0.9 \times 70 = -3$. Prediction:
$-3 + 0.9 \times 80 =$ **69**.

The z-score view: 80 is $z = 1.25$ on test 1; the prediction is $z = 0.6 \times 1.25 = 0.75$ on test 2, that is
$60 + 0.75 \times 12 = 69$. ✓ A student 1.25 standard deviations above average is predicted to be only 0.75 above
average next time: regression towards the mean.

**4. Why not use the line backwards?** Using the same summary numbers, predict test 1 from a test 2 mark of 69. The
correct line is $\hat{x} = \bar{x} + r\dfrac{s_x}{s_y}(y - \bar{y}) = 70 + 0.6 \times \dfrac{8}{12} \times 9 = 73.6$,
not 80. The two regression lines are different.

## Try it

1. A line is $\hat{y} = 12 + 2.5x$. A data point is (4, 25). Find the predicted value and the residual. Is the point
   above or below the line?
2. Find the least-squares line for (1, 1), (2, 3), (3, 2), (4, 4). (Hint: from the last lesson, $S_{xy} = 4$,
   $S_{xx} = 5$.)
3. For question 2, find all four residuals, check that they add to 0, and find SSE and $r^2$.
4. A regression of house price (thousands of dollars) on floor area (square metres) gives $\hat{y} = 40 + 3.2x$ with
   $r = 0.7$. Interpret the slope. What fraction of the variation in price does floor area explain?
5. Summary numbers: $\bar{x} = 20$, $s_x = 4$, $\bar{y} = 50$, $s_y = 10$, $r = -0.5$. Find the regression line of
   $y$ on $x$ and predict $y$ at $x = 28$.
6. Show that the point $(\bar{x}, \bar{y})$ is on the line $\hat{y} = a + bx$ with $a = \bar{y} - b\bar{x}$.
7. Explain in words why the least-squares line is strongly affected by an outlier far above the rest of the data.
8. Use the formula $\text{SSE} = S_{yy}(1 - r^2)$ to explain what happens when $r = \pm 1$, and when $r = 0$.

??? note "Answers"
    1. $\hat{y} = 12 + 2.5 \times 4 = 22$; residual $= 25 - 22 = 3$. Positive: the point is **above** the line.
    2. $\bar{x} = \bar{y} = 2.5$. $b = 4 \div 5 = 0.8$, $a = 2.5 - 0.8 \times 2.5 = 0.5$. Line: $\hat{y} = 0.5 + 0.8x$.
    3. Predictions: 1.3, 2.1, 2.9, 3.7. Residuals: $-0.3, 0.9, -0.9, 0.3$; total 0 ✓. SSE
       $= 0.09 + 0.81 + 0.81 + 0.09 = 1.8$. $S_{yy} = 5$, so $r^2 = 1 - 1.8 \div 5 = 0.64$ (and $r = 0.8$ ✓).
    4. Each extra square metre goes with about 3.2 thousand dollars (3200 dollars) more in price, on average.
       $r^2 = 0.49$: floor area explains about **49%** of the variation in price.
    5. $b = -0.5 \times \dfrac{10}{4} = -1.25$, $a = 50 - (-1.25)(20) = 75$. Line $\hat{y} = 75 - 1.25x$. At
       $x = 28$: $75 - 35 = 40$.
    6. Put $x = \bar{x}$: $\hat{y} = a + b\bar{x} = (\bar{y} - b\bar{x}) + b\bar{x} = \bar{y}$. ✓
    7. The line minimises the sum of **squared** residuals. A point far from the line would have a huge squared
       residual (a miss of 10 costs 100), so the line tilts towards it to make that one square smaller, even if
       every other point gets a slightly bigger residual.
    8. If $r = \pm 1$, SSE $= 0$: every residual is 0, all points are on the line. If $r = 0$, SSE $= S_{yy}$: the line
       does no better than predicting $\bar{y}$ every time (and indeed $b = 0$, so the line is $\hat{y} = \bar{y}$).

## Common mistake

**Getting the residual backwards.** Residual is actual minus predicted, $y - \hat{y}$. With the order reversed, every
sign flips and "above the line" becomes "below".

**Reading $r^2$ as "the chance the line is right".** $r^2$ is a share of variation explained. It says nothing about
whether the relationship is causal, or whether a straight line is the right shape (the next lesson's residual plots
check that).

## Where it leads

- Back: [The correlation coefficient r](04-correlation-coefficient.md) · Next: [Non-linear models](06-non-linear-models.md)
- [Level 7 page](index.md) · [Statistics topic page](../index.md)
- Predicting outside the data: [Level 6: interpolation and extrapolation](../level-6/04-interpolation-extrapolation.md).
- Finding the minimum of a quadratic by its vertex: [Algebra](../../algebra/index.md). With calculus you can find it
  by setting a derivative to zero: [MAT137 Unit 6 (applications of derivatives)](../../../uoft/MAT137/unit06.md).
- The least-squares line is an orthogonal projection:
  [MAT247 Unit 2 (orthogonality and Gram–Schmidt)](../../../uoft/MAT247H1/unit02.md).
