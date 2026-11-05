---
title: "Standard deviation"
---

# Standard deviation

*Statistics and data · level 6, lesson 6 of 6*

## A question to start

Two basketball players each scored a mean of 10 points a game over their last five games:

- Player A: 9, 10, 10, 11, 10
- Player B: 0, 20, 2, 18, 10

Both means are $50 \div 5 = 10$. Both medians are 10. Yet these players are completely different. If your team needs
about 10 points tonight, you pick Player A, who is **steady**. Player B might score 20, or 0.

The range ($2$ against $20$) and the IQR from level 5 can show this. But each of them uses only a few of the values.
Is there a measure of spread that uses **every** value, the way the mean uses every value? There is, and it is the
most important measure of spread in all of statistics: the **standard deviation**.

## The idea

### Deviations: how far each value is from the mean

Start with a small data set: 4, 8, 6, 5, 7. Its mean is $30 \div 5 = 6$.

The **deviation** of a value is how far it is from the mean, with a sign: value minus mean. Values above the mean have
positive deviations, values below have negative ones.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 195" role="img" aria-label="The values 4, 8, 6, 5, 7 drawn one per row with a dashed line at the mean 6; green bars show each deviation: minus 2, plus 2, 0, minus 1, plus 1">
  <line x1="30" y1="170" x2="410" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="170" x2="40" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="188" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="85" y1="170" x2="85" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="85" y="188" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="130" y1="170" x2="130" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="188" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="175" y1="170" x2="175" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="188" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="220" y1="170" x2="220" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="220" y="188" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="265" y1="170" x2="265" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="265" y="188" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="310" y1="170" x2="310" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="310" y="188" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="355" y1="170" x2="355" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="355" y="188" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <line x1="400" y1="170" x2="400" y2="175" stroke="currentColor" stroke-width="1"/>
  <text x="400" y="188" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="220" y1="20" x2="220" y2="165" stroke="#eea66f" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="220" y="14" font-size="12" text-anchor="middle" fill="currentColor">mean 6</text>
  <circle cx="130" cy="35" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="220" y1="35" x2="130" y2="35" stroke="#7ccf9a" stroke-width="2"/>
  <text x="175" y="29" font-size="11" text-anchor="middle" fill="currentColor">−2</text>
  <circle cx="310" cy="62" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="220" y1="62" x2="310" y2="62" stroke="#7ccf9a" stroke-width="2"/>
  <text x="265" y="56" font-size="11" text-anchor="middle" fill="currentColor">+2</text>
  <circle cx="220" cy="89" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="234" y="93" font-size="11" text-anchor="start" fill="currentColor">0</text>
  <circle cx="175" cy="116" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="220" y1="116" x2="175" y2="116" stroke="#7ccf9a" stroke-width="2"/>
  <text x="197.5" y="110" font-size="11" text-anchor="middle" fill="currentColor">−1</text>
  <circle cx="265" cy="143" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="220" y1="143" x2="265" y2="143" stroke="#7ccf9a" stroke-width="2"/>
  <text x="242.5" y="137" font-size="11" text-anchor="middle" fill="currentColor">+1</text>
</svg>
</div>

The deviations are $-2, +2, 0, -1, +1$. If the data were very spread out, the deviations would be large; if the data
were bunched together, they would be small. So a "typical deviation" is exactly what we want to measure.

### The obvious idea fails

The obvious idea is to take the mean of the deviations. Add them: $-2 + 2 + 0 - 1 + 1 = 0$. The mean deviation is 0.

That was not bad luck. **The deviations from the mean always add up to exactly 0**, for every data set. Here is why.
Suppose there are $n$ values with mean $\bar{x}$. Then the values add up to $n \times \bar{x}$ (that is what the mean
means: the total shared equally). The sum of the deviations is

$$(\text{sum of the values}) - n \times \bar{x} = n\bar{x} - n\bar{x} = 0.$$

In pictures: the mean is the **balance point** of the data. The amounts above it exactly balance the amounts below
it. So the plain mean of the deviations is always 0, and it tells us nothing about spread.

### Getting rid of the signs: squaring

We need to stop positives and negatives from cancelling. One way is to ignore the signs and average the distances
(this gives the **mean absolute deviation**). Statisticians mostly use a different way: **square** each deviation.
A square is never negative: $(-2)^2 = 4$ and $2^2 = 4$.

Why squares? They give extra weight to values far from the mean, they lead to much tidier algebra, and they connect
statistics to the rest of mathematics: the formula you are about to see is a cousin of Pythagoras's distance formula,
and it is exactly what the normal curve of [level 7](../level-7/index.md) needs.

### The standard deviation, step by step

1. Find the **mean**.
2. Find each **deviation** (value minus mean).
3. **Square** each deviation.
4. Find the **mean of the squares**. This is called the **variance**.
5. Take the **square root**. This is the **standard deviation**.

Why the square root at the end? Squaring changed the units. If the data are in points, the squared deviations are in
"points squared", which means nothing. The square root brings us back to points, so the standard deviation can be
read as a **typical distance from the mean**, in the same units as the data.

For 4, 8, 6, 5, 7:

| Value $x$ | Deviation $x - \bar{x}$ | Squared |
| --- | --- | --- |
| 4 | −2 | 4 |
| 8 | 2 | 4 |
| 6 | 0 | 0 |
| 5 | −1 | 1 |
| 7 | 1 | 1 |
| **Total** | **0** | **10** |

Variance $= 10 \div 5 = 2$. Standard deviation $= \sqrt{2} \approx 1.41$. The values are typically about 1.4 away from
the mean of 6, which matches the picture: some are 0 away, some 1, some 2.

### The formula

In symbols, the standard deviation of a whole population is written $\sigma$ (the Greek letter sigma):

$$\sigma = \sqrt{\frac{\sum (x - \mu)^2}{N}}$$

Read it from the inside out: $x - \mu$ is each deviation ($\mu$, the Greek letter mu, is the population mean);
$(x - \mu)^2$ squares it; $\sum$ (a capital sigma) means "add them all up"; divide by $N$, the number of values; take
the square root. Every part of the formula is one of the five steps.

### Population or sample: dividing by $n - 1$

There is one twist. Often your data are a **sample**, and you want to estimate the spread of the whole **population**
(level 5, lesson 4). Then statisticians divide by $n - 1$ instead of $n$:

$$s = \sqrt{\frac{\sum (x - \bar{x})^2}{n - 1}}$$

This is the **sample standard deviation**, written $s$. For 4, 8, 6, 5, 7 treated as a sample,
$s = \sqrt{10 \div 4} = \sqrt{2.5} \approx 1.58$, a little bigger than 1.41.

Why? The deviations in a sample are measured from the sample's **own** mean $\bar{x}$, and the sample mean always sits
right in the middle of the sample: it is the point that makes the squared deviations as small as they can be. The true
population mean is somewhere else, a bit off. So squared deviations from $\bar{x}$ are, on average, a little **too
small**. Dividing by the smaller number $n - 1$ makes up for that exactly.

You can check "exactly" with a tiny example. Take the population 1, 3, 5. Its mean is 3 and its variance is
$\frac{4 + 0 + 4}{3} = \frac{8}{3}$. Now draw a sample of 2 values with replacement (put the first back before drawing
the second). There are 9 equally likely samples:

| Sample | Sample mean | Sum of squared deviations from the sample mean |
| --- | --- | --- |
| (1, 1) | 1 | 0 |
| (1, 3) | 2 | 2 |
| (1, 5) | 3 | 8 |
| (3, 1) | 2 | 2 |
| (3, 3) | 3 | 0 |
| (3, 5) | 4 | 2 |
| (5, 1) | 3 | 8 |
| (5, 3) | 4 | 2 |
| (5, 5) | 5 | 0 |

The sums add to 24. Dividing each by $n = 2$ and averaging gives $\frac{24 \div 2}{9} = \frac{4}{3}$: only half the
true $\frac{8}{3}$, too small. Dividing each by $n - 1 = 1$ and averaging gives $\frac{24}{9} = \frac{8}{3}$: exactly
right on average.

When should you use which? If your data **are** the whole population you care about (all five of a player's games
this week), use $\sigma$ with $N$. If they are a sample used to estimate a bigger population, use $s$ with $n - 1$. For
large data sets the difference is tiny.

### With technology

For more than a handful of values, use a calculator or spreadsheet. They show both versions:

- Calculators with a statistics mode usually show $\sigma x$ (or $\sigma_n$) for the population version and $sx$ (or
  $\sigma_{n-1}$) for the sample version.
- Spreadsheets have `=STDEV.P(A1:A20)` for the population and `=STDEV.S(A1:A20)` for a sample (the older `=STDEV`
  is the sample version).
- In the Python language, `statistics.pstdev(data)` and `statistics.stdev(data)`.

Always know which one you are reading. Doing one small example by hand, like the ones here, is the best way to check
that you have pressed the right buttons.

<figure class="play" data-play="stats" data-show="sd"><span class="ai-tag">AI-created</span><figcaption><b>Standard deviation.</b> Spread the dots out and the band widens.</figcaption></figure>

## Worked examples

**1. The two players.** Both means are 10.

Player A: deviations $-1, 0, 0, 1, 0$; squares $1, 0, 0, 1, 0$; total 2. Variance $= 2 \div 5 = 0.4$, so
$\sigma = \sqrt{0.4} \approx 0.63$ points.

Player B: deviations $-10, 10, -8, 8, 0$; squares $100, 100, 64, 64, 0$; total 328. Variance $= 328 \div 5 = 65.6$,
so $\sigma = \sqrt{65.6} \approx 8.10$ points.

Player B's typical distance from the mean is about 8 points; Player A's is under 1 point. B is nearly 13 times as
spread out. (We used $N$ because these five games are all the games we are asking about.)

**2. Eight values.** Find $\sigma$ and $s$ for 2, 4, 4, 4, 5, 5, 7, 9.

1. Mean: $40 \div 8 = 5$.
2. Deviations: $-3, -1, -1, -1, 0, 0, 2, 4$. (Check: they add to 0. ✓)
3. Squares: $9, 1, 1, 1, 0, 0, 4, 16$; total 32.
4. Population: $\sigma = \sqrt{32 \div 8} = \sqrt{4} = 2$.
5. Sample: $s = \sqrt{32 \div 7} \approx \sqrt{4.571} \approx 2.14$.

**3. Shifting and stretching.** Add 10 to every value of 2, 4, 4, 4, 5, 5, 7, 9. The mean becomes 15, but every
deviation stays the same, so $\sigma$ is still **2**. Spread does not care where the data sit, only how far apart they
are. Now multiply every value by 3 instead: the mean becomes 15, every deviation is multiplied by 3, every square by
9, the variance by 9 (to 36), and $\sigma$ by 3 (to **6**).

**4. Reading a standard deviation.** Two classes wrote a test with mean 70. Class P has $\sigma = 4$, class Q has
$\sigma = 15$. In class P almost everyone scored in the 60s and 70s; in class Q scores range from very low to very
high. A score of 85 is ordinary in Q (one standard deviation above the mean) but remarkable in P (almost four
standard deviations above). This idea, measuring distances in standard deviations, becomes the z-score of
[level 7](../level-7/index.md).

## Try it

1. Find the mean and the population standard deviation $\sigma$ of 3, 5, 7. Then find $s$.
2. Find $\sigma$ and $s$ for 10, 12, 14, 16, 18.
3. Add 100 to each value in question 2. What are the new mean and $\sigma$?
4. Multiply each value in question 2 by 5. What are the new mean and $\sigma$?
5. What is the standard deviation of 7, 7, 7, 7? Can a standard deviation ever be negative?
6. Without calculating, which has the larger standard deviation: 1, 5, 9 or 4, 5, 6? Then check.
7. Show that the deviations of 3, 8, 10 from their mean add to 0.
8. A teacher measures the heights of 30 students, chosen at random, to estimate the spread of heights of all 900
   students in the school. Which spreadsheet function should she use, `STDEV.P` or `STDEV.S`? Why?

??? note "Answers"
    1. Mean 5. Deviations $-2, 0, 2$; squares $4, 0, 4$; total 8.
       $\sigma = \sqrt{8 \div 3} \approx \sqrt{2.667} \approx 1.63$. $s = \sqrt{8 \div 2} = \sqrt{4} = 2$.
    2. Mean $70 \div 5 = 14$. Deviations $-4, -2, 0, 2, 4$; squares $16, 4, 0, 4, 16$; total 40.
       $\sigma = \sqrt{40 \div 5} = \sqrt{8} \approx 2.83$. $s = \sqrt{40 \div 4} = \sqrt{10} \approx 3.16$.
    3. Mean $114$; $\sigma$ is unchanged, **about 2.83**: every deviation is the same as before.
    4. Mean $14 \times 5 = 70$; $\sigma = 5 \times \sqrt{8} \approx 14.14$. Every deviation is 5 times as big.
    5. **0**: every deviation is 0. No: it is a square root of a mean of squares, which is never negative. It is 0
       only when all values are equal.
    6. 1, 5, 9 is more spread out, so it has the larger one. Check: both have mean 5. First: squares $16, 0, 16$,
       total 32, $\sigma = \sqrt{32 \div 3} \approx 3.27$. Second: squares $1, 0, 1$, total 2,
       $\sigma = \sqrt{2 \div 3} \approx 0.82$.
    7. Mean $= 21 \div 3 = 7$. Deviations: $3 - 7 = -4$, $8 - 7 = 1$, $10 - 7 = 3$. Sum: $-4 + 1 + 3 = 0$. ✓
    8. `STDEV.S`: the 30 students are a **sample** used to estimate the spread of the population of 900, so she
       divides by $n - 1$.

## Common mistake

**Forgetting the square root.** After dividing the total of the squares, you have the **variance**, in squared units.
Take the square root to get the standard deviation. Quick check: the standard deviation should look like a typical
distance from the mean. For Player B, 8.1 points does; 65.6 points does not.

**Squaring the values instead of the deviations.** The squares must be of $x - \bar{x}$, not of $x$. Squaring the
values themselves (16, 64, 36, ...) gives a number that measures size, not spread.

## Where it leads

- Back: [Correlation is not causation](05-correlation-causation.md) · Next level:
  [Level 7: distributions and regression](../level-7/index.md), where the mean and standard deviation describe the
  normal curve.
- [Level 6 page](index.md) · [Statistics topic page](../index.md)
- The resistant partner of the standard deviation is the IQR: [level 5](../level-5/03-iqr-outliers.md).
- Squares and square roots: [numbers level 5](../../numbers/level-5/06-square-roots.md).
- In probability, the same calculation measures the spread of a random variable:
  [probability level 7](../../probability/level-7/index.md).
