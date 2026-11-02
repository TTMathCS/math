---
title: "Master: Distributions and the normal curve"
---

# Master: Distributions and the normal curve

*Statistics and data · step 4 of 5*

## A question to start

Measure the heights of a thousand adults, sort them into groups (150 to 155 cm, 155 to 160 cm, and so on) and draw a
bar for each group. You get a hill: low at both ends, high in the middle, and nearly the same on both sides. Do the
same with the weights of a thousand apples, or with the errors in a thousand careful measurements, and the same hill
appears again. Why does this one shape keep turning up, and what can you do with it?

## The idea

### Distributions and histograms

The **distribution** of a set of data tells you which values occur and how often. For numbers that can take many
values, such as heights, you draw it with a **histogram**: split the number line into equal intervals (called
**bins** or classes), count how many values fall in each, and draw touching bars. Unlike the bar chart in
[Play](01-play.md), the bars touch, because the number line has no gaps.

### Shapes of distributions

- **Symmetric**: the left and right sides are mirror images. The mean and median are about the same.
- **Skewed right** (positively skewed): a long tail stretches out to the right. Incomes are the classic example: most
  people earn a moderate amount, and a few earn enormous amounts. The few huge values pull the **mean above the
  median**.
- **Skewed left**: a long tail to the left, for example scores on a very easy test, where most people do well and a
  few do badly. The **mean is below the median**.
- **Bimodal**: two humps. This often means two different groups have been mixed together.

So the shape tells you which average to trust, which connects back to the outliers of
[Explore](02-explore.md).

### The normal curve

Many measurements that come from adding up lots of small, independent effects (a person's height depends on many
genes and on many years of meals) have a distribution close to one perfect, smooth, symmetric shape: the **normal
distribution**, also called the **bell curve**.

A normal distribution is completely described by two numbers: its mean $\mu$ (the Greek letter mu), which sets the
centre, and its standard deviation $\sigma$, which sets how wide it is. The curve's equation is

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x - \mu)^2}{2\sigma^2}}$$

You will not need to use this formula here. What matters is that the **area** under the curve between two values
equals the **fraction** of the data between those values. The total area is exactly 1, which is all of the data.

### The 68–95–99.7 rule

For every normal distribution, whatever its mean and standard deviation:

- about **68%** of the values lie within 1 standard deviation of the mean (between $\mu - \sigma$ and $\mu + \sigma$);
- about **95%** lie within 2 standard deviations;
- about **99.7%** lie within 3 standard deviations.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 185" role="img" aria-label="Bell curve. The middle band within one standard deviation holds 68 percent; the bands between one and two standard deviations hold 13.5 percent each.">
  <polygon points="155,150 155.0,77.2 160.5,70.0 166.0,62.9 171.5,56.1 177.0,49.8 182.5,44.1 188.0,39.2 193.5,35.3 199.0,32.4 204.5,30.6 210.0,30.0 215.5,30.6 221.0,32.4 226.5,35.3 232.0,39.2 237.5,44.1 243.0,49.8 248.5,56.1 254.0,62.9 259.5,70.0 265.0,77.2 265,150" fill="#9cc9ea"/>
  <polygon points="100,150 100.0,133.8 104.1,131.2 108.2,128.3 113.8,124.0 119.2,119.2 124.8,113.9 130.2,108.1 135.8,101.8 141.2,95.1 146.8,88.1 152.2,80.9 155.0,77.2 155,150" fill="#7ccf9a"/>
  <polygon points="265,150 265.0,77.2 267.8,80.9 273.2,88.1 278.8,95.1 284.2,101.8 289.8,108.1 295.2,113.9 300.8,119.2 306.2,124.0 311.8,128.3 315.9,131.2 320.0,133.8 320,150" fill="#7ccf9a"/>
  <polyline fill="none" stroke="currentColor" stroke-width="2" points="18,150 27,150 34,149 43,149 50,148 59,147 66,146 72,145 78,143 85,141 91,138 98,135 104,131 111,127 117,121 123,115 130,109 136,101 143,93 149,85 155,77 162,68 168,60 175,52 181,45 188,40 194,35 200,32 207,30 210,30 213,30 220,32 226,35 232,40 239,45 245,52 252,60 258,68 265,77 271,85 277,93 284,101 290,109 297,115 303,121 309,127 316,131 322,135 329,138 335,141 342,143 348,145 354,146 361,147 370,148 377,149 386,149 393,150 402,150"/>
  <line x1="10" y1="150" x2="410" y2="150" stroke="currentColor" stroke-width="1"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="210" y="110">68%</text><text x="130" y="142">13.5%</text><text x="290" y="142">13.5%</text>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="45" y="168">μ−3σ</text><text x="100" y="168">μ−2σ</text><text x="155" y="168">μ−σ</text>
    <text x="210" y="168">μ</text><text x="265" y="168">μ+σ</text><text x="320" y="168">μ+2σ</text><text x="375" y="168">μ+3σ</text>
  </g>
</svg>
</div>

Because the curve is symmetric, you can split these numbers in half. Between $\mu$ and $\mu + \sigma$ is 34%. Between
$\mu + \sigma$ and $\mu + 2\sigma$ is $(95 - 68) \div 2 = 13.5\%$. Above $\mu + 2\sigma$ is $(100 - 95) \div 2 = 2.5\%$.

### z-scores: how many standard deviations away

The **z-score** of a value says how many standard deviations it is above (positive) or below (negative) the mean:

$$z = \frac{x - \mu}{\sigma}$$

A z-score of 2 means "2 standard deviations above the mean", wherever the data came from. That lets you compare
things measured on completely different scales. For values that are not whole numbers of standard deviations, a
**z-table** (or a calculator) gives the fraction below any z. A few useful values, to one decimal place:

| $z$ | −2 | −1 | 0 | 0.5 | 1 | 1.5 | 2 | 3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| % of values below $z$ | 2.3 | 15.9 | 50 | 69.1 | 84.1 | 93.3 | 97.7 | 99.9 |

The percent of values below a given value is its **percentile**. A z-score of 1 is about the 84th percentile.

## Worked examples

Suppose the heights of the adults in a town are normally distributed with mean $\mu = 170$ cm and standard
deviation $\sigma = 8$ cm. (These are made-up but realistic numbers.)

**1. What fraction are between 162 cm and 178 cm?**
$162 = 170 - 8$ and $178 = 170 + 8$, so this is within 1 standard deviation of the mean: about **68%**.

**2. What fraction are taller than 186 cm?**
$z = \dfrac{186 - 170}{8} = 2$. By the 68–95–99.7 rule about 2.5% are above $z = 2$; the table gives the more exact
$100 - 97.7 = 2.3\%$.

**3. How tall must you be to be in the tallest 16%?**
16% above means 84% below, which is $z = 1$ in the table. So $x = \mu + 1 \times \sigma = 170 + 8 = 178$, that is **178 cm**.
In general, turning a z-score back into a value uses $x = \mu + z\sigma$.

**4. Comparing two tests.** Amir scored 80 on a history test where the class mean was 70 and the standard deviation
was 5. Bea scored 85 on a science test where the mean was 75 and the standard deviation was 10. Who did better
compared with their class?

- Amir: $z = \dfrac{80 - 70}{5} = 2$.
- Bea: $z = \dfrac{85 - 75}{10} = 1$.

Both scored 10 points above their class mean, but Amir's 10 points were 2 standard deviations, far rarer than Bea's
1. Relative to their classes, **Amir** did better: about the 98th percentile against about the 84th.

## Try it

A test is scaled so that scores are normally distributed with mean 100 and standard deviation 15.

1. About what percent of people score between 85 and 115? About what percent score above 130?
2. What is the z-score of a score of 112?
3. About what percent score between 100 and 145?
4. On a different test the standard deviation is 6, and a score of 64 has a z-score of −2. What is the mean?
5. House prices in a city are strongly skewed right. Which is likely to be larger, the mean price or the median
   price? Which would you quote as the "typical" price?

??? note "Answers"
    1. 85 to 115 is $\mu - \sigma$ to $\mu + \sigma$, so about 68%. 130 is $\mu + 2\sigma$, so about 2.5% score
       above it (2.3% from the table).
    2. $z = \dfrac{112 - 100}{15} = \dfrac{12}{15} = 0.8$.
    3. 145 is $\mu + 3\sigma$. Within 3 standard deviations on both sides is 99.7%, so from the mean up to $\mu + 3\sigma$
       is half of that: about 49.85%, or roughly 50%.
    4. $x = \mu + z\sigma$ gives $64 = \mu + (-2)(6) = \mu - 12$, so $\mu = 76$.
    5. The mean is larger, because a few very expensive houses pull it up. The median is the better "typical" price:
       half of the houses cost less and half cost more.

## Common mistake

**Using the 68–95–99.7 rule on data that is not normal.** The rule is a property of the bell curve. For skewed data,
such as incomes or the time people wait in a queue, the percentages can be badly wrong, and the mean plus or minus
two standard deviations might even include impossible negative values. Draw a histogram first and look at its shape
before you reach for the normal curve.

## Where it leads

- Next step: [Beyond: reading data honestly](05-beyond.md), where you ask where the data came from and whether
  two things really are related.
- Back a step: [Build: spread, how far from the middle](03-build.md)
- The normal curve is also the shape of many random totals in [probability](../probability/index.md): add up the
  scores of many dice and a bell appears. The number $e$ in its formula is explained in
  [algebra](../algebra/index.md), in its Beyond step on exponentials and logarithms.
- The area under a curve is an *integral*, the central idea of [MAT137 Unit 7](../../uoft/MAT137/unit07.md).
