---
title: "Line of best fit by eye"
---

# Line of best fit by eye

*Statistics and data · level 6, lesson 3 of 6*

## A question to start

A new student joins the class from lesson 1 and plans to study for 3.5 hours. What score should she expect?

Nobody in the data studied exactly 3.5 hours. The two nearest students studied 3 hours (61 points) and 4 hours
(70 points), but they are just two people, and people vary. Can we use **all ten** students to make a better guess?
Yes: draw one straight line that sums up the whole cloud of dots, and read the answer off the line.

## The idea

### A line that sums up the cloud

When a scatter plot shows a roughly **linear** pattern (lesson 2), you can draw a single straight line through the
middle of the dots. It is called a **line of best fit** (or a **trend line**). It does two jobs:

- it **describes** the relationship in one simple rule ("about 5 more points per extra hour");
- it **predicts** a value of $y$ for any value of $x$.

The line will not go through every dot, and it does not have to go through any. It goes through the **middle** of the
cloud, like a path that the dots wander around.

### Drawing it by eye: balance

Here is the line for the study data, drawn by eye:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 300" role="img" aria-label="The same scatter plot with a straight line drawn by eye through the middle of the dots, from (0, 50) to (8, 88); those two points are marked on the line">
  <line x1="60" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="20" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="268" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="97.8" y1="250" x2="97.8" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="97.8" y="268" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="135.6" y1="250" x2="135.6" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="135.6" y="268" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="173.3" y1="250" x2="173.3" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="173.3" y="268" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="211.1" y1="250" x2="211.1" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="211.1" y="268" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="248.9" y1="250" x2="248.9" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="248.9" y="268" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="286.7" y1="250" x2="286.7" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="286.7" y="268" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="324.4" y1="250" x2="324.4" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="324.4" y="268" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="362.2" y1="250" x2="362.2" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="362.2" y="268" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="400" y1="250" x2="400" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="400" y="268" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <line x1="55" y1="250" x2="60" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="254" font-size="11" text-anchor="end" fill="currentColor">40</text>
  <line x1="55" y1="211.7" x2="60" y2="211.7" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="215.7" font-size="11" text-anchor="end" fill="currentColor">50</text>
  <line x1="55" y1="173.3" x2="60" y2="173.3" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="177.3" font-size="11" text-anchor="end" fill="currentColor">60</text>
  <line x1="55" y1="135" x2="60" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="139" font-size="11" text-anchor="end" fill="currentColor">70</text>
  <line x1="55" y1="96.7" x2="60" y2="96.7" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="100.7" font-size="11" text-anchor="end" fill="currentColor">80</text>
  <line x1="55" y1="58.3" x2="60" y2="58.3" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="62.3" font-size="11" text-anchor="end" fill="currentColor">90</text>
  <line x1="55" y1="20" x2="60" y2="20" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="24" font-size="11" text-anchor="end" fill="currentColor">100</text>
  <text x="230" y="292" font-size="12" text-anchor="middle" fill="currentColor">hours studied</text>
  <text x="16" y="135" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 16 135)">test score</text>
  <line x1="60" y1="211.7" x2="400" y2="47.8" stroke="#eea66f" stroke-width="2"/>
  <circle cx="97.8" cy="204" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="135.6" cy="181" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="135.6" cy="154.2" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="173.3" cy="169.5" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="211.1" cy="135" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="248.9" cy="142.7" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="248.9" cy="104.3" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="286.7" cy="96.7" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="324.4" cy="100.5" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="362.2" cy="58.3" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="60" cy="211.7" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="229.7" font-size="11" text-anchor="start" fill="currentColor">(0, 50)</text>
  <circle cx="362.2" cy="66" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="370.2" y="84" font-size="11" text-anchor="start" fill="currentColor">(8, 88)</text>
</svg>
</div>

How do you know where to put it? Use these guides.

1. **Follow the direction** of the cloud: rising for a positive correlation, falling for a negative one.
2. **Balance the dots.** Roughly as many dots should be above the line as below it, and the ones above should be
   about as far away, in total, as the ones below.
3. **Balance along the line too.** Do not let all the dots above be at the left end and all the dots below at the right
   end. If that happens, the line is too flat or too steep; turn it a little.
4. **A helpful point.** A good line passes close to the point $(\bar{x}, \bar{y})$, the mean of the $x$ values and
   the mean of the $y$ values. For the study data that point is (4.3, 70.1). Mark it first, then turn your ruler about
   that point until the dots balance.

A see-through ruler helps: you can see the dots on both sides while you turn it.

For the line drawn above, the vertical distances from each dot to the line are:

| Hours | 1 | 2 | 2 | 3 | 4 | 5 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Score | 52 | 58 | 65 | 61 | 70 | 68 | 78 | 80 | 79 | 90 |
| Above (+) or below (−) the line | −2.75 | −1.5 | +5.5 | −3.25 | +1 | −5.75 | +4.25 | +1.5 | −4.25 | +2 |

Five dots are above and five below, at all positions along the line, and the distances are all small: a well
balanced line.

Why is balance the right idea? The line is supposed to give the **typical** $y$ for each $x$. If most dots were
above it, the line would usually predict too low; if most were below, too high. Balancing the misses is the same idea
as the mean being the balance point of a list, now done for a whole line.

### Finding the equation from two points

A straight line has an equation $y = mx + b$, where

- $m$ is the **slope**: how much $y$ goes up for each 1 that $x$ goes across;
- $b$ is the **$y$-intercept**: the value of $y$ where the line crosses the $y$-axis, that is, when $x = 0$.

To find them for your line:

1. Choose **two points on the line** (not data dots!), far apart, where the line crosses grid lines neatly. On the
   line above, $(0, 50)$ and $(8, 88)$ are easy to read.
2. Slope $= \dfrac{\text{rise}}{\text{run}} = \dfrac{\text{change in } y}{\text{change in } x}$. Here
   $m = \dfrac{88 - 50}{8 - 0} = \dfrac{38}{8} = 4.75$.
3. Intercept: the line crosses the $y$-axis at $(0, 50)$, so $b = 50$. If neither point has $x = 0$, put one point
   into $y = mx + b$ and solve for $b$.
4. Equation: $y = 4.75x + 50$, or in words, **score = 4.75 × hours + 50**.

Why use points on the line and not data dots? Because the data dots are not on the line. Using two dots would give
the line through **those** dots, which is a different line, and it would depend entirely on two students out of ten.

### What the numbers mean

In a statistics problem, every number in the equation has a meaning with units.

- **Slope 4.75 points per hour**: for each extra hour of study, the score tends to be about 4.75 points higher.
- **Intercept 50 points**: the line's prediction for a student who studies 0 hours. Be careful: nobody in the data
  studied 0 hours, so this is a guess outside the data. Sometimes the intercept has no sensible meaning at all
  (lesson 4 says more).

### Predicting

To predict, put the $x$ value into the equation. For the new student who studies 3.5 hours:

$$y = 4.75 \times 3.5 + 50 = 16.625 + 50 = 66.625,$$

so about **67 points**. You can also read it off the graph: go across to 3.5, up to the line, and across to the
$y$-axis.

A prediction from a line is a **typical** value, not a promise. Students who studied 2 hours scored 58 and 65; the
line says about 59.5 for 2 hours. Real students scatter around the line by several points.

### Lines by eye and lines by computer

Two people drawing by eye will draw slightly different lines, and both can be good. There is also an exact method,
the **least-squares line**, which a calculator or spreadsheet can find. For the study data it gives about
$y = 4.78x + 49.6$, very close to our $y = 4.75x + 50$. You will learn how it works, and why it is "best", in
[level 7](../level-7/index.md).

<figure class="play" data-play="scatter"><span class="ai-tag">AI-created</span><figcaption><b>The line of best fit.</b> It follows the cloud of points.</figcaption></figure>

## Worked examples

**1. From the graph to the equation.** A line of best fit passes through $(2, 10)$ and $(6, 22)$. Find its equation.

1. Slope: $m = \dfrac{22 - 10}{6 - 2} = \dfrac{12}{4} = 3$.
2. Intercept: put $(2, 10)$ into $y = 3x + b$: $10 = 6 + b$, so $b = 4$.
3. Equation: $y = 3x + 4$. Check with the other point: $3 \times 6 + 4 = 22$. ✓

**2. A falling line.** The used cars of lesson 2: (1, 28), (2, 25), (3, 22), (5, 17), (6, 15), (8, 11), with age in
years and price in thousands of dollars. A line drawn by eye passes through $(0, 29.5)$ and $(10, 5.5)$.

1. Slope: $m = \dfrac{5.5 - 29.5}{10 - 0} = \dfrac{-24}{10} = -2.4$.
2. Intercept: $b = 29.5$ (the line crosses the $y$-axis at 29.5).
3. Equation: **price = −2.4 × age + 29.5**.
4. Meaning: these cars lose about 2.4 thousand dollars (2400 dollars) of value each year. A new one ($x = 0$) would
   cost about 29.5 thousand dollars.
5. Balance check: the distances of the dots from the line are $+0.9, +0.3, -0.3, -0.5, -0.1, +0.7$. Three above,
   three below, all small. ✓
6. Prediction for a 4-year-old car: $-2.4 \times 4 + 29.5 = 19.9$, about 20 thousand dollars.

**3. Working backwards.** Using score = 4.75 × hours + 50, how long should a student study to expect 75 points?

$75 = 4.75x + 50$, so $4.75x = 25$ and $x = 25 \div 4.75 \approx 5.3$ hours.

**4. A bad line.** A student draws the line through the first and last dots, (1, 52) and (8, 90). Its slope is
$\dfrac{38}{7} \approx 5.4$. Of the other eight dots, five are above it and three below, and the line is decided
entirely by two students. If either of them had had a bad day, the line would swing. A line of best fit should use
**all** the dots.

## Try it

1. A line of best fit passes through $(0, 12)$ and $(5, 32)$. Find its equation.
2. Using score = 4.75 × hours + 50, predict the score for 6 hours and for 2.5 hours.
3. In the car equation price = −2.4 × age + 29.5, what do −2.4 and 29.5 mean, with units?
4. For the arm span and height data of lesson 1, a line by eye passes through (150, 147) and (175, 178), with arm span
   $a$ on the $x$-axis and height $h$ on the $y$-axis. Find the equation and predict the height of a person with an arm
   span of 168 cm.
5. A student's line has 8 dots above it and 2 below. What is wrong, and how should it be moved?
6. A friend says: "My line must go through the origin (0, 0)." Is that right for the study data?
7. A line passes through $(1, 40)$ and $(4, 25)$. Find its equation. Is the correlation positive or negative?

??? note "Answers"
    1. $m = \dfrac{32 - 12}{5 - 0} = 4$ and $b = 12$, so $y = 4x + 12$.
    2. 6 hours: $4.75 \times 6 + 50 = 28.5 + 50 = 78.5$, about 79 points. 2.5 hours:
       $4.75 \times 2.5 + 50 = 11.875 + 50 = 61.875$, about 62 points.
    3. −2.4: the price tends to drop by 2.4 thousand dollars for each extra year of age. 29.5: the line's price for a
       car of age 0, that is, about 29.5 thousand dollars new.
    4. $m = \dfrac{178 - 147}{175 - 150} = \dfrac{31}{25} = 1.24$. Using $(150, 147)$:
       $147 = 1.24 \times 150 + b = 186 + b$, so $b = -39$. Equation: $h = 1.24a - 39$. For $a = 168$:
       $1.24 \times 168 - 39 = 208.32 - 39 = 169.32$, about **169 cm**. (Here the intercept −39 has no meaning: nobody has an arm span of 0. It only fixes
       where the line sits.)
    5. The line is too **low**: it would usually predict too small a $y$. Move it up (keeping its direction) until
       the dots are balanced, about half above and half below.
    6. No. Nothing forces a score of 0 for 0 hours of study; the line through the middle of the dots crosses the
       $y$-axis near 50. Forcing it through (0, 0) would make it miss the dots badly.
    7. $m = \dfrac{25 - 40}{4 - 1} = \dfrac{-15}{3} = -5$. Using $(1, 40)$: $40 = -5 + b$, so $b = 45$. Equation
       $y = -5x + 45$. The slope is negative, so the correlation is **negative**.

## Common mistake

**Using two data dots to find the slope.** Choose two points that lie **on your drawn line**, far apart, at places
where you can read them accurately. The data dots are usually not on the line.

**Joining the dots.** A line of best fit is one straight line through the middle of the cloud, not a zigzag through
every dot, and not a line from the first dot to the last.

## Where it leads

- Back: [Correlation](02-correlation.md) · Next: [Interpolation and extrapolation](04-interpolation-extrapolation.md)
- [Level 6 page](index.md) · [Statistics topic page](../index.md)
- Slope and the equation $y = mx + b$: [geometry level 6](../../geometry/level-6/06-slope-line-equation.md) and
  [algebra](../../algebra/index.md).
- The exact least-squares line, and why "squares": [level 7](../level-7/index.md). At university, least squares is
  explained as a projection in linear algebra, for example in
  [MAT247 Unit 2 (orthogonality and Gram–Schmidt)](../../../uoft/MAT247H1/unit02.md).
