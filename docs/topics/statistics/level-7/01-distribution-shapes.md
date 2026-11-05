---
title: "Shapes of distributions"
---

# Shapes of distributions

*Statistics and data · level 7, lesson 1 of 7*

## A question to start

A news report says: "The average waiting time at the clinic is 5.5 minutes." Another report about the same clinic,
using the same data, says: "The typical patient waits 4 minutes." Nobody lied and nobody made an arithmetic error.
How can both be true at once?

The answer is not in the numbers alone. It is in the **shape** of the data: a few patients waited a very long time,
and that long tail pulls one kind of average away from the other. In this lesson you learn to read the shape of a
data set at a glance, and to know from the shape which average to trust.

## The idea

### A distribution is the whole picture

The **distribution** of a variable tells you which values it takes and how often each one happens. A list of 500
heights is data; the distribution is the pattern hidden in that list: where the values bunch up, where they thin
out, how far they reach.

For numerical data the usual picture of a distribution is a **histogram** (level 4): cut the number line into equal
intervals, called **bins**, count the values in each bin, and draw touching bars. The outline of the bars is the
**shape** of the distribution.

When you describe a distribution, say four things. A handy memory aid is **SOCS**:

- **Shape**: symmetric, skewed, uniform, one hump or two.
- **Outliers**: values far from the rest (the 1.5 × IQR rule from level 5 is one test).
- **Centre**: a typical value, the mean or the median.
- **Spread**: how far the values reach, measured by the range, the IQR or the standard deviation.

### Five shapes you will meet again and again

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 660 140" role="img" aria-label="Five histograms: symmetric, skewed right with a long tail to the right, skewed left with a long tail to the left, uniform with all bars equal, and bimodal with two humps">
  <rect x="15.0" y="104.0" width="12.0" height="6.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="27.0" y="92.0" width="12.0" height="18.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="39.0" y="68.0" width="12.0" height="42.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="51.0" y="38.0" width="12.0" height="72.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="63.0" y="20.0" width="12.0" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="75.0" y="38.0" width="12.0" height="72.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="87.0" y="68.0" width="12.0" height="42.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="99.0" y="92.0" width="12.0" height="18.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="111.0" y="104.0" width="12.0" height="6.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <line x1="11" y1="110" x2="127" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="69.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">symmetric</text>
  <rect x="143.0" y="74.0" width="9.8" height="36.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="152.8" y="26.0" width="9.8" height="84.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="162.6" y="20.0" width="9.8" height="90.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="172.5" y="38.0" width="9.8" height="72.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="182.3" y="56.0" width="9.8" height="54.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="192.1" y="74.0" width="9.8" height="36.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="201.9" y="86.0" width="9.8" height="24.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="211.7" y="92.0" width="9.8" height="18.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="221.5" y="98.0" width="9.8" height="12.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="231.4" y="104.0" width="9.8" height="6.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="241.2" y="104.0" width="9.8" height="6.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <line x1="139" y1="110" x2="255" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="197.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">skewed right</text>
  <rect x="271.0" y="104.0" width="9.8" height="6.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="280.8" y="104.0" width="9.8" height="6.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="290.6" y="98.0" width="9.8" height="12.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="300.5" y="92.0" width="9.8" height="18.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="310.3" y="86.0" width="9.8" height="24.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="320.1" y="74.0" width="9.8" height="36.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="329.9" y="56.0" width="9.8" height="54.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="339.7" y="38.0" width="9.8" height="72.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="349.5" y="20.0" width="9.8" height="90.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="359.4" y="26.0" width="9.8" height="84.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="369.2" y="74.0" width="9.8" height="36.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <line x1="267" y1="110" x2="383" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="325.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">skewed left</text>
  <rect x="399.0" y="20.0" width="13.5" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="412.5" y="20.0" width="13.5" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="426.0" y="20.0" width="13.5" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="439.5" y="20.0" width="13.5" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="453.0" y="20.0" width="13.5" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="466.5" y="20.0" width="13.5" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="480.0" y="20.0" width="13.5" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="493.5" y="20.0" width="13.5" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <line x1="395" y1="110" x2="511" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="453.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">uniform</text>
  <rect x="527.0" y="95.0" width="10.8" height="15.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="537.8" y="65.0" width="10.8" height="45.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="548.6" y="27.5" width="10.8" height="82.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="559.4" y="57.5" width="10.8" height="52.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="570.2" y="87.5" width="10.8" height="22.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="581.0" y="80.0" width="10.8" height="30.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="591.8" y="42.5" width="10.8" height="67.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="602.6" y="20.0" width="10.8" height="90.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="613.4" y="65.0" width="10.8" height="45.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="624.2" y="95.0" width="10.8" height="15.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <line x1="523" y1="110" x2="639" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="581.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">bimodal</text>
</svg>
</div>

- **Symmetric.** The left half is a mirror image of the right half. Heights of adults of one sex, the weights of
  eggs from one farm and errors in careful repeated measurements are roughly symmetric, usually with one hump in the
  middle.
- **Skewed right** (also called **positively skewed**). Most values are bunched at the low end and a long, thin
  **tail** stretches to the right. The word "skewed" names the side of the **tail**, not the side of the hump. Waiting
  times, incomes, house prices and the sizes of cities are skewed right: they cannot go below zero, but a few can be
  huge.
- **Skewed left** (**negatively skewed**). The tail stretches to the left. Scores on an easy test are like this: most
  people score high, a few score low, and nobody can score above 100%.
- **Uniform.** Every bin holds about the same number of values. Rolling a fair die 600 times gives about 100 of each
  face: a flat histogram.
- **Bimodal.** Two humps, each called a **mode** (the word mode here means a peak, not only the single most common
  value). Two humps are a clue that two different groups have been mixed together. The arrival times of customers at
  a restaurant have one hump at lunch and one at dinner. A famous real data set is the time between eruptions of the
  Old Faithful geyser in Yellowstone: it has one hump of short waits and one hump of long waits.

A distribution with one hump is called **unimodal**. Real data never make perfect shapes; you look for the overall
pattern and ignore the small bumps that come from chance.

### Why a tail pulls the mean but not the median

The **mean** is the balance point of the data. Imagine each value as a one-gram weight placed on a long ruler at that
value. The ruler balances on a finger placed at the mean. The **median** is the middle value: half the weights are on
each side of it.

Now take the largest value and slide it further to the right by some distance $d$. What happens?

- The total of the data goes up by $d$, so the mean goes up by $\dfrac{d}{n}$, where $n$ is the number of values.
  The far weight has more leverage, so the balance point moves towards it.
- The median does not move at all. The largest value was above the middle before, and it is still above the middle.
  Only the **order** of the values matters to the median, not how far away they are.

So a long tail of large values drags the mean out towards the tail, while the median stays with the bulk of the data.
That gives the usual pattern:

| Shape | Where the mean sits |
| --- | --- |
| Symmetric | mean ≈ median (both at the centre of symmetry) |
| Skewed right | mean > median (the mean is pulled right, into the tail) |
| Skewed left | mean < median (the mean is pulled left, into the tail) |

In a smooth, single-humped skewed distribution the peak (the mode) is furthest from the tail, then the median, then
the mean: for skewed right, mode < median < mean. This is a rule of thumb, not a theorem. With small data sets or
with values that are whole numbers it can fail, so always check with the actual numbers.

### The clinic, solved

Here are the 13 waiting times, in minutes, behind the two news reports:

1, 2, 2, 3, 3, 3, 4, 4, 5, 6, 8, 12, 19

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 190" role="img" aria-label="Histogram of 13 waiting times in bins 2 minutes wide: tall bars on the left, a long thin tail to the right reaching 19 minutes; the mean 5.5 sits to the right of the median 4">
  <rect x="40.0" y="136.0" width="40.0" height="24.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="80.0" y="40.0" width="40.0" height="120.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="120.0" y="88.0" width="40.0" height="72.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="160.0" y="136.0" width="40.0" height="24.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200.0" y="136.0" width="40.0" height="24.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="240.0" y="160.0" width="40.0" height="0.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="280.0" y="136.0" width="40.0" height="24.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="320.0" y="160.0" width="40.0" height="0.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="360.0" y="160.0" width="40.0" height="0.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="400.0" y="136.0" width="40.0" height="24.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <line x1="36" y1="160" x2="444" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <text x="240.0" y="178" font-size="12" text-anchor="middle" fill="currentColor">waiting time (minutes)</text>
  <line x1="120.0" y1="34" x2="120.0" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="120.0" y="30" font-size="11" text-anchor="middle" fill="currentColor">median 4</text>
  <line x1="150.8" y1="18" x2="150.8" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="150.8" y="14" font-size="11" text-anchor="middle" fill="currentColor">mean 5.5</text>
  <text x="40.0" y="178.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="120.0" y="178.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="200.0" y="178.0" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <text x="280.0" y="178.0" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <text x="360.0" y="178.0" font-size="11" text-anchor="middle" fill="currentColor">16</text>
  <text x="440.0" y="178.0" font-size="11" text-anchor="middle" fill="currentColor">20</text>
</svg>
</div>

- The mean is $\dfrac{72}{13} \approx 5.5$ minutes.
- The median is the 7th of 13 values: **4** minutes.
- The mode is 3 minutes.

The histogram is skewed right: most patients waited 2 to 5 minutes, and the 12 and 19 minute waits form a long tail.
Those two patients pull the mean above the median. "Average 5.5 minutes" and "typical wait 4 minutes" are both true;
the median describes the typical patient better, and the mean is what the clinic needs if it wants the total time
spent waiting ($13 \times 5.5 \approx 72$ minutes).

### Which summary goes with which shape

- **Roughly symmetric, no outliers**: use the **mean** for the centre and the **standard deviation** for the spread.
  They use every value and work well with the normal curve (next lesson).
- **Skewed, or with outliers**: use the **median** for the centre and the **IQR** for the spread. They resist the
  pull of the tail. A box plot shows them well.
- **Bimodal**: no single centre describes the data honestly. Split the data into the two groups if you can, and
  describe each one.

### Shape and bin width

The shape you see depends a little on the bin width you choose. Bins that are too wide (three bars for 500 values)
hide the shape; bins that are too narrow (one bar for every value) make a spiky mess of chance bumps. A common start
is about $\sqrt{n}$ bins for $n$ values, then adjust by eye. A real feature, such as two humps, survives a change of
bin width; a chance bump usually does not.

<figure class="play" data-play="galton"><span class="ai-tag">AI-created</span><figcaption><b>A shape from chance.</b> Many small random steps pile up into a symmetric bell.</figcaption></figure>

## Worked examples

**1. Describe a distribution with SOCS.** The waiting times above.

- **Shape**: skewed right, single hump at 2 to 4 minutes.
- **Outliers**: Q1 is 2.5 and Q3 is 7 (median of the lower six values 1, 2, 2, 3, 3, 3 and of the upper six 4, 5, 6,
  8, 12, 19), so IQR $= 7 - 2.5 = 4.5$. The upper fence is $7 + 1.5 \times 4.5 = 13.75$. The 19-minute wait is an
  outlier; the 12-minute wait is not.
- **Centre**: median 4 minutes (better than the mean 5.5 because of the skew).
- **Spread**: IQR 4.5 minutes; the range is $19 - 1 = 18$ minutes.

**2. A left-skewed test.** Fifteen students wrote an easy test. Their scores were

38, 55, 64, 70, 74, 78, 80, 82, 84, 85, 87, 88, 90, 92, 95

The total is 1162, so the mean is $1162 \div 15 \approx 77.5$. The median is the 8th value, **82**. The mean is below
the median, which fits a tail to the left: the 38 and the 55 pull the mean down. A teacher reporting "the class
average was 77" would make the class sound weaker than it is; most of the class scored above 80.

**3. Shape from two numbers.** In a city the mean house price is 720 000 dollars and the median is 610 000 dollars.
What is the shape?

The mean is well above the median, so some very expensive houses pull the mean up: the distribution is **skewed
right**. The median is the better "typical price": half the houses cost less than 610 000 dollars.

**4. Sliding one value.** A data set of 10 values has mean 50 and median 48. The largest value, 70, was typed wrongly
and should be 170. Find the new mean and median.

The total goes up by $170 - 70 = 100$, so the mean goes up by $100 \div 10 = 10$, to **60**. The median does not
change: it is still **48**, because the order of the middle values is the same. One wrong value moved the mean by
10 and the median by nothing.

**5. Two humps.** A survey records the ages of everyone at a children's swimming lesson, including the parents
watching. The histogram has one hump at ages 6 to 9 and another at 32 to 42. The mean age is about 22, an age that
almost nobody in the building has. Split the data: describe the children and the parents separately.

## Try it

1. Name the likely shape (symmetric, skewed right, skewed left, uniform or bimodal):
   (a) the number of days in each month for many years; (b) the age at which people retire; (c) the prices of all
   cars sold in a year; (d) the last digit of many phone numbers; (e) the weights of one brand of 500 g flour bags.
2. A distribution has mean 30 and median 42. Which way is it skewed? Which side has the long tail?
3. The data 2, 3, 3, 4, 5, 5, 6, 40. Find the mean and median. Which better describes a typical value?
4. Six values have mean 10. One value is changed from 12 to 30. What is the new mean? Can you say what happens to the
   median without more information?
5. Explain, using the idea of a balance point, why the mean of a right-skewed data set is usually bigger than the
   median.
6. A histogram of the heights of all students in a school, from kindergarten to grade 12, has two humps. Suggest a
   reason.
7. Make up a data set of 5 whole numbers that is skewed right, has median 10 and has mean 20.
8. Shoe sizes of a class are 5, 6, 6, 7, 7, 7, 8, 8, 9. Draw a quick tally of the values. Is the distribution
   symmetric? What are the mean, median and mode?

??? note "Answers"
    1. (a) Not one of the smooth shapes: 28, 29, 30 or 31 only, with 30 and 31 the most common; the closest of the
       five is left-skewed (most months are long, a few are short). (b) Roughly symmetric around the 60s, often
       slightly skewed left, since some people retire early and few retire very late. (c) Skewed right: most cars
       cost a moderate amount, a few cost a fortune. (d) Uniform: each digit 0 to 9 about equally often. (e)
       Symmetric, a narrow hump around 500 g.
    2. The mean is below the median, so it is **skewed left**: the long tail is on the left, at small values.
    3. Total $= 2 + 3 + 3 + 4 + 5 + 5 + 6 + 40 = 68$, mean $= 68 \div 8 = 8.5$. The median is the average of the 4th
       and 5th values: $(4 + 5) \div 2 = 4.5$. The **median** is better; the mean 8.5 is bigger than every value
       except one.
    4. The total was $6 \times 10 = 60$; it rises by $30 - 12 = 18$, to 78, so the new mean is $78 \div 6 = 13$. The
       median might change or not: if 12 was one of the two middle values it changes, if 12 was already in the top
       half it does not. You need the other values to know.
    5. The mean is the point where the data would balance like weights on a ruler. Values far out in the right tail
       are far from the centre, so they have a lot of leverage, and the balance point has to move right to stay level.
       The median only counts values on each side, so far-out values do not move it.
    6. Two groups are mixed: young children (one hump of short heights) and teenagers (a hump of taller heights).
       More precisely, heights grow with age, and the mix of grades is not smooth.
    7. One answer: 1, 2, 10, 11, 76. Median 10 (the middle value). The total must be $5 \times 20 = 100$, and
       $1 + 2 + 10 + 11 + 76 = 100$ ✓. The one large value makes a long right tail.
    8. Tally: 5 (one), 6 (two), 7 (three), 8 (two), 9 (one). It is **symmetric** about 7. Mean $= 63 \div 9 = 7$,
       median 7 (the 5th value), mode 7: in a symmetric single hump all three agree.

## Common mistake

**Naming the skew after the hump.** "Skewed right" means the **tail** points right; the big hump of data is on the
**left**. Think of the tail as the skew: where the tail goes, the mean follows.

**Quoting the mean of skewed data as "typical".** Incomes, house prices and waiting times are skewed right, so
their means are above what a typical person sees. When a report gives an average of skewed data, ask for the median.

## Where it leads

- Back: [Level 6: two variables](../level-6/index.md) · Next: [The normal curve as a model of data](02-normal-curve.md)
- [Level 7 page](index.md) · [Statistics topic page](../index.md)
- Shapes of the distributions of chance (a die is uniform, the total of many dice is a bell) are studied in
  [Probability](../../probability/index.md).
- The mean as a balance point is the same idea as the centre of mass of a rod in physics; the
  [Change and motion](../../change/index.md) topic meets it again.
