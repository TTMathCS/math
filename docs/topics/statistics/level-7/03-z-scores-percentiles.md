---
title: "z-scores and percentiles"
---

# z-scores and percentiles

*Statistics and data · level 7, lesson 3 of 7*

## A question to start

Maya scored 82 on her math test and 88 on her English test. Her English mark is higher, so it looks like her better
result. But the math test was hard: the class mean was 70 with a standard deviation of 6. The English test was
easier: the class mean was 80 with a standard deviation of 10.

Compared with her classmates, which result is more impressive? The raw marks cannot tell you, because the two tests
are on different scales. This lesson gives you a way to put any two measurements on the same scale, even a test mark
and a jump length.

## The idea

### How far from the mean, in standard deviations

A **z-score** (also called a **standard score**) says how many standard deviations a value is above or below the
mean:

$$z = \frac{x - \text{mean}}{\text{standard deviation}}$$

For a population with mean $\mu$ and standard deviation $\sigma$ this is $z = \dfrac{x - \mu}{\sigma}$; for a sample
with mean $\bar{x}$ and standard deviation $s$ it is $z = \dfrac{x - \bar{x}}{s}$.

- $z = 0$: the value equals the mean.
- $z = 2$: the value is 2 standard deviations **above** the mean.
- $z = -1.5$: the value is 1.5 standard deviations **below** the mean.

The units cancel: (centimetres minus centimetres) divided by centimetres is a plain number. That is why z-scores can
compare things measured in different units.

For Maya: math $z = \dfrac{82 - 70}{6} = 2$, English $z = \dfrac{88 - 80}{10} = 0.8$. Her math mark is 2 standard
deviations above her class; her English mark is less than one. The math result is the more impressive one.

Going the other way, a z-score turns back into a value with

$$x = \mu + z\sigma.$$

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 400" role="img" aria-labelledby="sk-m-z-t"><title id="sk-m-z-t">Maya's 82 in math, where the mean was 70 and the standard deviation 6, is 2 standard deviations above; her 88 in English, mean 80 and standard deviation 10, is 0.8 above</title><defs><filter id="sk-m-z-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-z-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-z-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-z-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-z-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="400" filter="url(#sk-m-z-paper)"/><g filter="url(#sk-m-z-pen)"><text x="30" y="44" class="h">Two tests on one scale</text><text x="40" y="90" class="l">Math: mean 70, standard deviation 6</text><path class="p" d="M56.00000000000006 120 L584.0 120"/><path class="p" d="M80.0 114 L80.0 126"/><text x="80.0" y="146" text-anchor="middle" class="s">52</text><path class="p" d="M160.0 114 L160.0 126"/><text x="160.0" y="146" text-anchor="middle" class="s">58</text><path class="p" d="M240.0 114 L240.0 126"/><text x="240.0" y="146" text-anchor="middle" class="s">64</text><path class="p" d="M320.0 114 L320.0 126"/><text x="320.0" y="146" text-anchor="middle" class="s">70</text><path class="p" d="M400.0 114 L400.0 126"/><text x="400.0" y="146" text-anchor="middle" class="s">76</text><path class="p" d="M480.0 114 L480.0 126"/><text x="480.0" y="146" text-anchor="middle" class="s">82</text><path class="p" d="M560.0 114 L560.0 126"/><text x="560.0" y="146" text-anchor="middle" class="s">88</text><circle cx="480.0" cy="120" r="8" class="p gold"/><text x="480.0" y="108" text-anchor="middle" class="b">82</text><text x="600" y="172" text-anchor="end" class="l">z = 2</text><text x="40" y="210" class="l">English: mean 80, standard deviation 10</text><path class="p" d="M56.0 240 L584.0 240"/><path class="p" d="M80.0 234 L80.0 246"/><text x="80.0" y="266" text-anchor="middle" class="s">50</text><path class="p" d="M160.0 234 L160.0 246"/><text x="160.0" y="266" text-anchor="middle" class="s">60</text><path class="p" d="M240.0 234 L240.0 246"/><text x="240.0" y="266" text-anchor="middle" class="s">70</text><path class="p" d="M320.0 234 L320.0 246"/><text x="320.0" y="266" text-anchor="middle" class="s">80</text><path class="p" d="M400.0 234 L400.0 246"/><text x="400.0" y="266" text-anchor="middle" class="s">90</text><path class="p" d="M480.0 234 L480.0 246"/><text x="480.0" y="266" text-anchor="middle" class="s">100</text><path class="p" d="M560.0 234 L560.0 246"/><text x="560.0" y="266" text-anchor="middle" class="s">110</text><circle cx="384.0" cy="240" r="8" class="p room"/><text x="384.0" y="228" text-anchor="middle" class="b">88</text><text x="600" y="292" text-anchor="end" class="l">z = 0.8</text><text x="30" y="386" class="s">The 82 is 2 standard deviations above its class; the 88 only 0.8. Math is the stronger result.</text></g></svg><figcaption>Sketched for this page from the numbers above. To scale.</figcaption></figure>

### Why z-scores always have mean 0 and standard deviation 1

Turn every value of a data set into a z-score. The new list always has mean 0 and standard deviation 1. Here is the
reason, in two steps.

**Step 1: subtract the mean.** Subtracting the same number $c$ from every value slides the whole data set along the
number line. The mean slides by $c$ too (the total drops by $nc$, so the mean drops by $c$). Distances between the
values do not change, so the deviations from the mean and the standard deviation do not change. Subtracting the mean
itself makes the new mean exactly 0.

**Step 2: divide by the standard deviation.** Dividing every value by a positive number $k$ divides every deviation
by $k$, every squared deviation by $k^2$, the mean of the squares by $k^2$, and so (after the square root) the
standard deviation by $k$. Dividing by the standard deviation itself makes the new standard deviation exactly 1. The
mean was 0 and stays 0.

Check with a small population: 2, 4, 4, 4, 5, 5, 7, 9. The mean is $40 \div 8 = 5$. The squared deviations are 9, 1,
1, 1, 0, 0, 4, 16, total 32, so the (population) standard deviation is $\sqrt{32 \div 8} = 2$. The z-scores are

$-1.5,\ -0.5,\ -0.5,\ -0.5,\ 0,\ 0,\ 1,\ 2$

Their total is 0, so their mean is 0. Their squares are 2.25, 0.25, 0.25, 0.25, 0, 0, 1, 4, total 8, so their
standard deviation is $\sqrt{8 \div 8} = 1$. ✓

This is why every normal curve becomes the **same** curve after standardising: the **standard normal curve**, with
mean 0 and standard deviation 1. One table of areas serves every normal distribution.

### Percentiles and percentile ranks

The **percentile rank** of a value is the percent of the data **below** it. If your score has percentile rank 85,
then 85% of scores are lower than yours. The value with percentile rank $p$ is called the **$p$th percentile**. The
median is the 50th percentile, Q1 is the 25th and Q3 the 75th.

For a list of data, count: percentile rank $= \dfrac{\text{number of values below}}{n} \times 100\%$. (Some books and
programs count half of the values equal to it as well, so answers can differ by a little. Say which rule you use.)

For a normal distribution, use areas: the percentile rank of a value is the area to the left of its z-score.

### The standard normal table

A **z-table** gives the percent of a standard normal distribution below each z. Calculators and spreadsheets give the
same numbers (for example `NORM.S.DIST(z, TRUE)` in a spreadsheet). Some useful values, to two decimals:

| $z$ | −2 | −1.5 | −1 | −0.5 | 0 | 0.5 | 0.84 | 1 | 1.28 | 1.5 | 1.645 | 1.96 | 2 | 2.5 | 3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| % below | 2.28 | 6.68 | 15.87 | 30.85 | 50 | 69.15 | 79.95 | 84.13 | 89.97 | 93.32 | 95.00 | 97.50 | 97.72 | 99.38 | 99.87 |

Three uses:

- **Below a value**: read the table at its z.
- **Above a value**: $100\%$ minus the table value. (Symmetry also helps: the percent above $z$ equals the percent
  below $-z$.)
- **Between two values**: subtract the two table values.

Three z-scores worth remembering: 1.28 cuts off the top 10%, 1.645 the top 5%, and 1.96 the top 2.5% (so
$\pm 1.96$ holds the middle 95%). You will use 1.96 again in [level 8](../level-8/index.md).

<figure class="play" data-play="stats" data-show="sd"><span class="ai-tag">AI-created</span><figcaption><b>How far from the mean?</b> A z-score counts standard deviations: the band is one each side.</figcaption></figure>

## Worked examples

Women's heights in a town: normal, $\mu = 163$ cm, $\sigma = 7$ cm.

**1. A percentile from a value.** What is the percentile rank of a height of 174 cm?

$z = \dfrac{174 - 163}{7} = \dfrac{11}{7} \approx 1.57$. Technology gives about 94.2% below. So 174 cm is about the
**94th percentile**: taller than about 94% of the women.

**2. A value from a percentile.** How tall must a woman be to be in the tallest 10%?

The tallest 10% are above the 90th percentile, which is $z \approx 1.28$. Then
$x = \mu + z\sigma = 163 + 1.28 \times 7 = 163 + 8.96 \approx$ **172 cm**.

**3. Between two values.** What percent are between 159.5 cm and 173.5 cm?

$z_1 = \dfrac{159.5 - 163}{7} = -0.5$ and $z_2 = \dfrac{173.5 - 163}{7} = 1.5$. From the table:
$93.32 - 30.85 =$ **62.47%**.

**4. Percentile rank from a list.** Twenty test scores, in order:

52, 58, 61, 63, 65, 67, 68, 70, 71, 72, 74, 75, 77, 78, 80, 82, 85, 88, 91, 96

A score of 80 has 14 scores below it: percentile rank $\dfrac{14}{20} = 70\%$, the **70th percentile**. A score of 63
has 3 below it: the **15th percentile**. Notice that the percentile rank is not the score: 80 marks out of 100 is
the 70th percentile in this class.

**5. Comparing across sports.** In a school competition, the long jump has mean 4.2 m and standard deviation 0.5 m;
the 100 m run has mean 14.0 s and standard deviation 0.8 s. Ari jumps 5.0 m and runs 12.8 s. Which result is better
relative to the others?

- Long jump: $z = \dfrac{5.0 - 4.2}{0.5} = 1.6$.
- 100 m: $z = \dfrac{12.8 - 14.0}{0.8} = -1.5$. A **negative** z is good here, because a lower time is better: Ari is
  1.5 standard deviations **faster** than the mean.

The jump (1.6) is a little more exceptional than the run (1.5). Decathlon scoring uses tables in a similar spirit,
so that a great throw and a great sprint can be added fairly.

## Try it

Use the table above or technology.

1. A value has $z = -2$ in a distribution with mean 50 and standard deviation 4. What is the value?
2. Convert to z-scores: (a) 130 when $\mu = 100, \sigma = 15$; (b) 9.1 when $\mu = 10, \sigma = 0.6$.
3. Scores are normal with mean 100 and standard deviation 15. What percent score below 92.5? Above 124? Between 85
   and 122.5?
4. Same scores. What score is needed to be in the top 5%?
5. Lee scored 74 in a class with mean 65 and standard deviation 6. Sam scored 84 in a class with mean 72 and standard
   deviation 10. Who did better relative to their class?
6. In the list of 20 scores above, find the percentile rank of 88 and of 52. Which score is the 50th percentile?
7. A data set has mean 30 and standard deviation 5. Every value is converted to a z-score, and then each z-score is
   multiplied by 10 and has 50 added. What are the mean and standard deviation of the final list?
8. A z-score of 0.67 is about the 75th percentile of a normal distribution. Use this to find the IQR of a normal
   distribution in terms of $\sigma$. Then use the 1.5 × IQR rule to find how many standard deviations from the
   mean the outlier fences are.

??? note "Answers"
    1. $x = \mu + z\sigma = 50 + (-2)(4) = 42$.
    2. (a) $z = \dfrac{130 - 100}{15} = 2$. (b) $z = \dfrac{9.1 - 10}{0.6} = \dfrac{-0.9}{0.6} = -1.5$.
    3. 92.5 gives $z = -0.5$: **30.85%** below. 124 gives $z = 1.6$: technology gives 94.52% below, so
       **5.48%** above. 85 gives $z = -1$ and 122.5 gives $z = 1.5$: $93.32 - 15.87 =$ **77.45%**.
    4. The top 5% starts at $z = 1.645$: $100 + 1.645 \times 15 \approx 124.7$. A score of about **125**.
    5. Lee: $z = \dfrac{74 - 65}{6} = 1.5$. Sam: $z = \dfrac{84 - 72}{10} = 1.2$. **Lee** did better relative to
       the class.
    6. 88 has 17 scores below: $\dfrac{17}{20} = 85\%$, the 85th percentile. 52 has none below: the 0th
       percentile (by this rule). The median is the average of the 10th and 11th values, $(72 + 74) \div 2 = 73$:
       that is the 50th percentile (10 of 20 values are below it).
    7. The z-scores have mean 0 and standard deviation 1. Multiplying by 10 gives mean 0 and standard deviation 10.
       Adding 50 slides the list: mean **50**, standard deviation still **10**. (This is how some exams report
       "T-scores".)
    8. Q1 and Q3 are at $\mu - 0.67\sigma$ and $\mu + 0.67\sigma$, so IQR $\approx 1.35\sigma$. The upper fence is
       $Q3 + 1.5 \times \text{IQR} \approx 0.67\sigma + 2.02\sigma = 2.7\sigma$ above the mean (and the lower fence
       $2.7\sigma$ below). In normal data only about 0.7% of values are beyond the fences.

## Common mistake

**Thinking a bigger z-score is always better.** A z-score says "how unusual and in which direction". For running
times, golf scores or prices, a **negative** z-score is the good one.

**Mixing up percent and percentile.** A score of 80% on a test and the 80th percentile are different things: one is
how many marks you got, the other is how many people you beat.

## Where it leads

- Back: [The normal curve as a model of data](02-normal-curve.md) · Next: [The correlation coefficient r](04-correlation-coefficient.md),
  which is built from z-scores.
- [Level 7 page](index.md) · [Statistics topic page](../index.md)
- Quartiles as the 25th and 75th percentiles: [Level 5: quartiles](../level-5/01-quartiles-five-number.md).
- Standardising a random variable, and the normal table as a probability tool:
  [Probability, level 8: the normal distribution](../../probability/level-8/03-normal-distribution.md).
