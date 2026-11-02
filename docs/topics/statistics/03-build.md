---
title: "Build: Spread"
---

# Build: Spread, how far from the middle

*Statistics and data · step 3 of 5*

## A question to start

Two basketball players each score an average of 10 points a game. Over their last five games:

- Player A scored 9, 10, 10, 11, 10.
- Player B scored 0, 20, 2, 18, 10.

Both means are $50 \div 5 = 10$. Both medians are 10. Yet the two players are clearly not the same. If your team
needs about 10 points tonight, you would pick Player A, because Player A is **steady**. Averages hide this. On this
page you will learn to measure how **spread out** data is, and to draw it.

## The idea

### Why the range is not enough

The range (largest minus smallest) is quick, but it uses only the two most extreme values. One strange value can
make it huge. We want measures of spread that look at the **bulk** of the data, or at every value.

### Quartiles: cutting the data into four

The median cuts sorted data into two halves. The **quartiles** cut it into four quarters.

- The **lower quartile**, $Q_1$, is the median of the lower half of the data.
- The **median** is sometimes called $Q_2$.
- The **upper quartile**, $Q_3$, is the median of the upper half.

There are a few slightly different conventions for quartiles. On this page we use a common school one: when the
number of values is odd, leave the median out of both halves.

The **interquartile range** (IQR) is the distance between the quartiles:

$$\text{IQR} = Q_3 - Q_1$$

It is the spread of the middle half of the data, so a few extreme values at either end do not affect it.

### The box plot

A **box plot** (or box-and-whisker plot) draws five numbers: the smallest value, $Q_1$, the median, $Q_3$ and the
largest value. The box goes from $Q_1$ to $Q_3$ with a line at the median; the **whiskers** reach out to the
smallest and largest values that are not outliers. Outliers are drawn as separate dots.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="Box plot: whisker from 3 to 6, box from 6 to 13 with median 9, whisker to 15, outlier dot at 30">
  <line x1="56" y1="45" x2="92" y2="45" stroke="currentColor" stroke-width="2"/>
  <line x1="56" y1="33" x2="56" y2="57" stroke="currentColor" stroke-width="2"/>
  <rect x="92" y="25" width="84" height="40" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <line x1="128" y1="25" x2="128" y2="65" stroke="#eea66f" stroke-width="4"/>
  <line x1="176" y1="45" x2="200" y2="45" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="33" x2="200" y2="57" stroke="currentColor" stroke-width="2"/>
  <circle cx="380" cy="45" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="20" y1="85" x2="400" y2="85" stroke="currentColor" stroke-width="1"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="56" y="102">3</text><text x="92" y="102">6</text><text x="128" y="102">9</text>
    <text x="176" y="102">13</text><text x="200" y="102">15</text><text x="380" y="102">30</text>
  </g>
</svg>
</div>

A box plot shows a lot at once: where the middle is, how wide the middle half is, whether one side is more stretched
than the other, and whether there are outliers.

### A rule for outliers

How far away must a value be to count as an outlier? A widely used rule says a value is an outlier if it is more
than $1.5 \times \text{IQR}$ beyond a quartile. In symbols, it is an outlier if it is

$$\text{below } Q_1 - 1.5 \times \text{IQR} \quad \text{or} \quad \text{above } Q_3 + 1.5 \times \text{IQR}.$$

These two cut-off values are called the **fences**. The rule is a convention, not a law of nature, but it is a
sensible one.

### Spread around the mean: deviations

Another way to measure spread uses **every** value. For each value, find how far it is from the mean. This
distance is the value's **deviation**. Then ask: how big is a typical deviation?

- The **mean absolute deviation** (MAD) is the mean of the distances, ignoring minus signs.
- The **standard deviation**, written $\sigma$ (the Greek letter sigma), squares the deviations first, takes their
  mean, and then takes the square root to get back to the original units:

$$\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}}$$

Here $x$ stands for each value in turn, $\bar{x}$ (read "x bar") is the mean, $n$ is the number of values, and
$\sum$ means "add them all up". The quantity under the square root, $\sigma^2$, is called the **variance**.

Why square? Deviations above the mean are positive and below are negative, and they always add up to exactly zero,
so their plain mean is useless. Squaring makes them all positive, and it gives extra weight to values far from the
mean. It also leads to beautiful mathematics later on (the normal curve, in the next step).

When the data is a **sample** from a bigger group and you want to estimate the spread of the whole group,
statisticians divide by $n - 1$ instead of $n$. Calculators often show both, as $\sigma$ and $s$. For now, dividing
by $n$ is fine.

## Worked examples

**1. Quartiles, box plot and outliers.** The data is

3, 5, 6, 7, 8, 9, 10, 12, 13, 15, 30

1. It is already sorted. There are 11 values, so the median is the 6th: **9**.
2. Lower half (the 5 values before the median): 3, 5, 6, 7, 8. Its median is $Q_1 = 6$.
3. Upper half (the 5 values after the median): 10, 12, 13, 15, 30. Its median is $Q_3 = 13$.
4. $\text{IQR} = 13 - 6 = 7$, and $1.5 \times 7 = 10.5$.
5. Fences: $6 - 10.5 = -4.5$ and $13 + 10.5 = 23.5$. Nothing is below $-4.5$, but 30 is above 23.5, so **30 is an
   outlier**.
6. The box plot (drawn above) has whiskers from 3 and to 15, the largest value that is not an outlier, and a dot
   at 30.

The range is $30 - 3 = 27$, but the IQR is only 7. The range was blown up by one value; the IQR was not.

**2. The two basketball players.** Both means are 10.

| Player A score | Deviation | Squared | | Player B score | Deviation | Squared |
| --- | --- | --- | --- | --- | --- | --- |
| 9 | −1 | 1 | | 0 | −10 | 100 |
| 10 | 0 | 0 | | 20 | 10 | 100 |
| 10 | 0 | 0 | | 2 | −8 | 64 |
| 11 | 1 | 1 | | 18 | 8 | 64 |
| 10 | 0 | 0 | | 10 | 0 | 0 |
| **Total** | 0 | 2 | | **Total** | 0 | 328 |

- Player A: variance $= 2 \div 5 = 0.4$, so $\sigma = \sqrt{0.4} \approx 0.63$ points.
- Player B: variance $= 328 \div 5 = 65.6$, so $\sigma = \sqrt{65.6} \approx 8.1$ points.

The mean absolute deviations tell the same story: Player A's is $(1 + 0 + 0 + 1 + 0) \div 5 = 0.4$ and Player B's is
$(10 + 10 + 8 + 8 + 0) \div 5 = 7.2$. Player B's scores are spread out more than ten times as widely. Notice that
the deviations add to 0 in both columns, just as promised.

## Try it

1. Find the range, the quartiles and the IQR of 2, 4, 4, 5, 7, 8, 9, 12.
2. Using your answer to question 1, would a new value of 20 be an outlier?
3. Find the mean and the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.
4. You add 10 to every value in a data set. What happens to the mean? To the standard deviation?
5. You multiply every value in a data set by 3. What happens to the standard deviation?
6. Why is the IQR often a better measure of spread than the range?

??? note "Answers"
    1. Range: $12 - 2 = 10$. There are 8 values (an even number), so the median is halfway between the 4th and 5th:
       $(5 + 7) \div 2 = 6$, and the halves are 2, 4, 4, 5 and 7, 8, 9, 12. $Q_1 = (4 + 4) \div 2 = 4$ and
       $Q_3 = (8 + 9) \div 2 = 8.5$. $\text{IQR} = 8.5 - 4 = 4.5$.
    2. Upper fence: $8.5 + 1.5 \times 4.5 = 8.5 + 6.75 = 15.25$. Since 20 is above 15.25, yes, it would be an outlier.
    3. Sum $= 40$ and $n = 8$, so the mean is 5. The deviations are $-3, -1, -1, -1, 0, 0, 2, 4$; their squares are
       9, 1, 1, 1, 0, 0, 4, 16, which add to 32. Variance $= 32 \div 8 = 4$, so $\sigma = 2$.
    4. The mean goes up by 10. The standard deviation does not change: every value moves together, so the distances
       from the mean stay the same.
    5. It is multiplied by 3. Every distance from the mean is stretched 3 times. (The variance is multiplied by 9.)
    6. The range depends only on the two most extreme values, so a single outlier can make it huge. The IQR measures
       the middle half of the data and ignores the extremes.

## Common mistake

**Forgetting the square root.** After adding up the squared deviations and dividing by $n$, you have the
**variance**, not the standard deviation. The variance is in squared units (points squared, centimetres squared),
which makes no sense as a "typical distance". Take the square root to get back to the units of the data. Quick
check: the standard deviation should look like a typical distance from the mean. For Player B, 8.1 points does;
65.6 points does not.

## Where it leads

- Next step: [Master: distributions and the normal curve](04-master.md), where the mean and standard deviation
  together describe the famous bell shape.
- Back a step: [Explore: averages, mean, median and mode](02-explore.md)
- Squares and square roots are explained in [numbers](../numbers/index.md); the $\sum$ sign is used for adding up
  sequences in [patterns and sequences](../patterns/index.md).
