---
title: "Sampling distributions"
---

# Sampling distributions

*Statistics and data · level 8, lesson 1 of 7*

## A question to start

The adult women of a town have heights with mean 163 cm and standard deviation 7 cm. About one woman in six is
taller than 170 cm. Now pick 25 women at random and work out their **mean** height. How likely is it that this sample
mean is above 170 cm?

Most people guess "about one in six again". The true answer is far smaller than one in a million. A single person
can easily be tall; a whole random group of 25 averaging that tall almost never happens. Averages are much steadier
than single values, and this lesson measures exactly how much steadier. Every poll, survey and experiment in this
level rests on that one fact.

## The idea

### Parameters, statistics and sampling variability

A **parameter** is a number that describes a whole **population**: the true mean height $\mu$ of every woman in the
town, the true proportion $p$ of voters who support a plan. Usually we cannot measure it directly.

A **statistic** is a number computed from a **sample**: the sample mean $\bar{x}$, the sample proportion $\hat{p}$
("p-hat"). We use statistics to estimate parameters.

Different random samples give different statistics. That is **sampling variability**. It is not a mistake; it is
what happens when you look at part of a population chosen by chance. The question is how big it is.

### The sampling distribution

Imagine taking **every possible** random sample of size $n$ from the population and computing the statistic for each.
The distribution of all those values is the **sampling distribution** of the statistic. It answers: if I take one
sample, what values of the statistic might I get, and how likely is each?

You can see one exactly with dice. One roll of a fair die is a population with values 1 to 6, equally likely: mean
$\mu = 3.5$ and standard deviation $\sigma \approx 1.708$. Now take samples of 2 rolls and compute the mean of each
sample. There are 36 equally likely pairs, and their means run from 1 (a pair of 1s) to 6 (a pair of 6s). Then do
the same with samples of 5 rolls ($6^5 = 7776$ possible samples).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 570 145" role="img" aria-label="Three distributions on the same range from 1 to 6: a single die roll is flat; the mean of 2 rolls is a triangle; the mean of 5 rolls is a narrower bell centred on 3.5">
  <rect x="15.0" y="20.0" width="26.7" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="41.7" y="20.0" width="26.7" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="68.3" y="20.0" width="26.7" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="95.0" y="20.0" width="26.7" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="121.7" y="20.0" width="26.7" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148.3" y="20.0" width="26.7" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <line x1="11" y1="110" x2="179" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="95.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">one roll</text>
  <rect x="205.0" y="95.0" width="14.5" height="15.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="219.5" y="80.0" width="14.5" height="30.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="234.1" y="65.0" width="14.5" height="45.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="248.6" y="50.0" width="14.5" height="60.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="263.2" y="35.0" width="14.5" height="75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="277.7" y="20.0" width="14.5" height="90.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="292.3" y="35.0" width="14.5" height="75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="306.8" y="50.0" width="14.5" height="60.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="321.4" y="65.0" width="14.5" height="45.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="335.9" y="80.0" width="14.5" height="30.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="350.5" y="95.0" width="14.5" height="15.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <line x1="201" y1="110" x2="369" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="285.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">mean of 2 rolls</text>
  <rect x="395.0" y="109.9" width="6.2" height="0.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="401.2" y="109.4" width="6.2" height="0.6" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="407.3" y="108.3" width="6.2" height="1.7" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="413.5" y="106.0" width="6.2" height="4.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="419.6" y="101.9" width="6.2" height="8.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="425.8" y="95.5" width="6.2" height="14.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="431.9" y="86.3" width="6.2" height="23.7" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="438.1" y="74.8" width="6.2" height="35.2" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="444.2" y="61.5" width="6.2" height="48.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="450.4" y="47.7" width="6.2" height="62.3" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="456.5" y="34.9" width="6.2" height="75.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="462.7" y="25.2" width="6.2" height="84.8" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="468.8" y="20.0" width="6.2" height="90.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="475.0" y="20.0" width="6.2" height="90.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="481.2" y="25.2" width="6.2" height="84.8" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="487.3" y="34.9" width="6.2" height="75.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="493.5" y="47.7" width="6.2" height="62.3" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="499.6" y="61.5" width="6.2" height="48.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="505.8" y="74.8" width="6.2" height="35.2" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="511.9" y="86.3" width="6.2" height="23.7" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="518.1" y="95.5" width="6.2" height="14.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="524.2" y="101.9" width="6.2" height="8.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="530.4" y="106.0" width="6.2" height="4.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="536.5" y="108.3" width="6.2" height="1.7" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="542.7" y="109.4" width="6.2" height="0.6" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="548.8" y="109.9" width="6.2" height="0.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <line x1="391" y1="110" x2="559" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="475.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">mean of 5 rolls</text>
  <text x="19.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="171.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="209.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="361.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="399.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="551.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
</svg>
</div>

Three things happen as the sample size $n$ grows:

1. **Centre**: every sampling distribution is centred on 3.5, the population mean.
2. **Spread**: the spread shrinks. Means of 5 rolls rarely get far from 3.5.
3. **Shape**: the shape becomes a bell, even though the population is flat.

### Centre: the sample mean is unbiased

The mean of the sampling distribution of $\bar{x}$ is exactly $\mu$. A statistic whose sampling distribution is
centred on the parameter is called **unbiased**: it does not systematically overshoot or undershoot. Any single sample
mean misses $\mu$ a little, but the misses balance out over all possible samples.

Bias and variability are different things. Think of shots at a target:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 135" role="img" aria-label="Four targets. Low bias and low variability: shots tightly clustered on the centre. Low bias, high variability: shots scattered widely around the centre. High bias, low variability: a tight cluster off to one side. High bias, high variability: scattered and off-centre">
  <circle cx="65" cy="50" r="14" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="65" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="65" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="62" cy="52" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="67" cy="46" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="69" cy="53" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="63" cy="48" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="66" cy="55" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="65" cy="49" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="65.0" y="110.0" font-size="11" text-anchor="middle" fill="currentColor">low bias,</text>
  <text x="65.0" y="124.0" font-size="11" text-anchor="middle" fill="currentColor">low variability</text>
  <circle cx="195" cy="50" r="14" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="195" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="195" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="170" cy="60" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="213" cy="28" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="225" cy="64" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="183" cy="20" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="203" cy="78" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="165" cy="42" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="195.0" y="110.0" font-size="11" text-anchor="middle" fill="currentColor">low bias,</text>
  <text x="195.0" y="124.0" font-size="11" text-anchor="middle" fill="currentColor">high variability</text>
  <circle cx="325" cy="50" r="14" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="325" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="325" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="345" cy="32" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="349" cy="36" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="343" cy="28" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="351" cy="30" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="347" cy="34" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="344" cy="37" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="325.0" y="110.0" font-size="11" text-anchor="middle" fill="currentColor">high bias,</text>
  <text x="325.0" y="124.0" font-size="11" text-anchor="middle" fill="currentColor">low variability</text>
  <circle cx="455" cy="50" r="14" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="455" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="455" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="480" cy="45" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="450" cy="20" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="490" cy="20" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="465" cy="55" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="485" cy="15" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="460" cy="35" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="455.0" y="110.0" font-size="11" text-anchor="middle" fill="currentColor">high bias,</text>
  <text x="455.0" y="124.0" font-size="11" text-anchor="middle" fill="currentColor">high variability</text>
</svg>
</div>

**Bias** is aiming at the wrong place; it comes from **how** the sample is chosen (level 5) and a bigger sample does
not fix it. **Variability** is scatter; a bigger random sample does reduce it.

### Spread: the square-root law

The standard deviation of the sampling distribution of $\bar{x}$ is

$$\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}.$$

It is often called the **standard error** of the mean. Here is why it is true.

The mean is the sum divided by $n$: $\bar{x} = \dfrac{X_1 + X_2 + \dots + X_n}{n}$, where the $X$s are the $n$
randomly chosen values. For values chosen **independently**, a basic fact of probability says that **variances add**
(the variance is the square of the standard deviation; see [Probability, level 7: variance](../../probability/level-7/03-variance-spread.md)).
So the sum has variance $\sigma^2 + \sigma^2 + \dots + \sigma^2 = n\sigma^2$.

Dividing a quantity by $n$ divides its standard deviation by $n$, and so its variance by $n^2$. So

$$\text{variance of } \bar{x} = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}, \qquad \text{standard deviation of } \bar{x} = \frac{\sigma}{\sqrt{n}}.$$

Why do variances add, rather than standard deviations? Because independent values partly cancel: a high roll is often
paired with a low one. Adding standard deviations would assume they always push the same way.

Check with two dice: the 36 equally likely means have variance $\dfrac{35}{24} \approx 1.458$, which is exactly half
of a single die's variance $\dfrac{35}{12} \approx 2.917$. Standard deviation $\dfrac{1.708}{\sqrt{2}} \approx 1.208$.
✓

The square root is important and a little disappointing: to halve the standard error you need **four** times as many
values; to cut it to a tenth you need a hundred times as many.

### Shape: the central limit theorem

The **central limit theorem** says that for a large enough random sample, the sampling distribution of $\bar{x}$ is
close to **normal**, whatever the shape of the population. The more skewed the population, the larger $n$ must be; a
common rule of thumb is $n \ge 30$, and for symmetric populations much smaller samples are fine. If the population
itself is normal, $\bar{x}$ is exactly normal for every $n$.

So with three facts (centre $\mu$, spread $\sigma/\sqrt{n}$, shape normal) you know the whole sampling distribution,
and you can use z-scores and the 68–95–99.7 rule from level 7.

### Sample proportions

For a yes-or-no question, code "yes" as 1 and "no" as 0. Then the sample proportion $\hat{p}$ is just the sample mean
of the 0s and 1s, and the population of 0s and 1s has mean $p$ and standard deviation $\sqrt{p(1 - p)}$. So the
square-root law gives

$$\text{standard deviation of } \hat{p} = \sqrt{\frac{p(1 - p)}{n}},$$

centred on $p$, and close to normal when $np$ and $n(1 - p)$ are both at least about 10.

## Worked examples

**1. The tall sample, solved.** Heights: $\mu = 163$, $\sigma = 7$. Samples of $n = 25$.

- Standard error: $\dfrac{7}{\sqrt{25}} = \dfrac{7}{5} = 1.4$ cm.
- About 95% of sample means lie within 2 standard errors of 163: between $163 - 2.8 = 160.2$ and $163 + 2.8 = 165.8$
  cm.
- A sample mean of 170 is $z = \dfrac{170 - 163}{1.4} = 5$ standard errors above $\mu$. The chance is about 3 in 10
  million.

A single woman above 170 cm: $z = 1$, about 16%. A sample mean above 170: almost never.

**2. How big a sample?** How large must $n$ be for the standard error of the mean height to be 0.5 cm?

$\dfrac{7}{\sqrt{n}} = 0.5$ gives $\sqrt{n} = 14$, so $n = 196$.

**3. A poll.** In a city, 40% of adults support a new bike lane ($p = 0.4$). A pollster asks a random sample of 100.

- The sampling distribution of $\hat{p}$ is centred on 0.40 with standard deviation
  $\sqrt{\dfrac{0.4 \times 0.6}{100}} = \sqrt{0.0024} \approx 0.049$, about 4.9 percentage points.
- About 95% of such polls give between $40 - 9.8 \approx 30\%$ and $40 + 9.8 \approx 50\%$. A single poll of 100
  people could easily say 33% or 47%. With $n = 1000$ the standard deviation drops to about 1.5 points.

**4. A skewed population.** Waiting times at a clinic are skewed right with $\mu = 6$ minutes and $\sigma = 5$
minutes. For samples of 50 patients, describe the sampling distribution of the mean wait.

Centre 6 minutes; standard error $\dfrac{5}{\sqrt{50}} \approx 0.71$ minutes; shape close to normal by the central
limit theorem (the sample is large), even though single waits are skewed. So about 95% of sample means fall between
about 4.6 and 7.4 minutes.

## Try it

1. Say whether each number is a parameter or a statistic: (a) 52% of the 1000 people surveyed said yes; (b) the
   mean age of all Canadians recorded by the census; (c) the mean mass of 30 apples picked at random from a truck.
2. A population has $\sigma = 20$. Find the standard error of $\bar{x}$ for $n = 4$, $n = 16$, $n = 100$, $n = 400$.
3. Exam marks have $\mu = 68$ and $\sigma = 12$. For random samples of 36 students, between what two values do about
   95% of sample means lie?
4. Why does doubling the sample size not halve the standard error? What does it do?
5. A population of 0s and 1s has $p = 0.5$. Find the standard deviation of $\hat{p}$ for $n = 100$ and $n = 2500$.
6. A website asks visitors to vote, and 50 000 do. Does the square-root law tell you the result is within a fraction
   of a percent of the true view of all Canadians? Explain using bias and variability.
7. In example 1, what is the chance that a sample of 25 women has mean height above 165 cm? (Use technology or the
   z-table.)

??? note "Answers"
    1. (a) statistic (from a sample); (b) parameter (the whole population, if the census counted everyone); (c)
       statistic.
    2. $20 \div 2 = 10$; $20 \div 4 = 5$; $20 \div 10 = 2$; $20 \div 20 = 1$.
    3. Standard error $12 \div 6 = 2$. About 95% lie within $2 \times 2 = 4$ of 68: between **64 and 72**.
    4. The standard error is $\sigma / \sqrt{n}$. Doubling $n$ multiplies $\sqrt{n}$ by $\sqrt{2} \approx 1.41$, so
       the standard error is divided by 1.41: it falls by about 29%, not 50%.
    5. $\sqrt{0.25/100} = 0.05$ (5 points); $\sqrt{0.25/2500} = 0.01$ (1 point).
    6. No. The square-root law only measures **variability** of **random** samples. A voluntary online vote is
       biased: the people who choose to vote are not like Canadians in general. A large biased sample gives a tight
       cluster of shots in the wrong place.
    7. $z = \dfrac{165 - 163}{1.4} \approx 1.43$. About 92.3% are below, so about **7.7%** are above.

## Common mistake

**Using $\sigma$ instead of $\sigma/\sqrt{n}$.** Questions about one value use the population standard deviation.
Questions about a **sample mean** use the standard error. Ask: is this about one person or about the average of a
group?

**Thinking a big sample cures bias.** A bigger sample shrinks random scatter only. If the sampling method is unfair,
a bigger sample is just more confidently wrong.

## Where it leads

- Back: [Level 7: organising large data sets](../level-7/07-large-data-sets.md) · Next: [Margin of error and confidence intervals](02-confidence-intervals.md)
- [Level 8 page](index.md) · [Statistics topic page](../index.md)
- Sampling methods and bias: [Level 5: sampling methods](../level-5/05-sampling-methods.md) and
  [bias](../level-5/06-bias.md).
- The proof of the central limit theorem's ideas, and the law of large numbers:
  [Probability, level 8](../../probability/level-8/05-large-numbers-clt.md).
