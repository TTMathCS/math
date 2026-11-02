---
title: "Margin of error and confidence intervals"
---

# Margin of error and confidence intervals

*Statistics and data · level 8, lesson 2 of 7*

## A question to start

Canadian news reports of polls often end with a sentence like this: "A probability sample of this size would be
accurate to within plus or minus 3.1 percentage points, 19 times out of 20."

Every part of that sentence means something precise. Where does 3.1 come from? What is "19 times out of 20" counting?
And what does the sentence **not** promise? By the end of this lesson you will be able to work out the 3.1 yourself,
and to explain why a poll can be "accurate within 3 points" and still be badly wrong.

## The idea

### From sampling distribution to estimate

In the last lesson the parameter was known and we asked where sample statistics would land. Real life is the other
way round: we have **one** sample and want to say something about the **unknown** parameter.

The bridge is this. For a large random sample, the sample proportion $\hat{p}$ is approximately normal, centred on
the true $p$, with standard deviation $\sqrt{p(1 - p)/n}$. By the 95% part of the normal curve (more exactly,
$z = 1.96$ from [level 7](../level-7/03-z-scores-percentiles.md)):

> In 95% of samples, $\hat{p}$ lands within $1.96\sqrt{p(1 - p)/n}$ of $p$.

"$\hat{p}$ is within that distance of $p$" is the same statement as "$p$ is within that distance of $\hat{p}$". So in
95% of samples, the interval

$$\hat{p} \pm 1.96\sqrt{\frac{\hat{p}(1 - \hat{p})}{n}}$$

contains the true $p$. (We put $\hat{p}$ in place of the unknown $p$ inside the square root; for large samples the
difference is tiny.) This interval is a **95% confidence interval** for $p$. The part after the $\pm$ is the **margin
of error**, and the quantity under the 1.96, $\sqrt{\hat{p}(1 - \hat{p})/n}$, is the **standard error**.

### "19 times out of 20" decoded

Picture twenty different polling companies, each taking its own random sample of the same population and each
building a 95% interval.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 258" role="img" aria-label="Twenty 95 percent confidence intervals from twenty different random samples, drawn as horizontal bars around their sample estimates. Nineteen of the bars cross the dashed vertical line at the true value; one bar lies entirely to the right of it and misses">
  <line x1="220" y1="10" x2="220" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <line x1="120.1" y1="18.0" x2="296.5" y2="18.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="208.3" cy="18.0" r="2.5" fill="currentColor"/>
  <line x1="154.8" y1="28.5" x2="331.1" y2="28.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="242.9" cy="28.5" r="2.5" fill="currentColor"/>
  <line x1="121.5" y1="39.0" x2="297.9" y2="39.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="209.7" cy="39.0" r="2.5" fill="currentColor"/>
  <line x1="117.4" y1="49.5" x2="293.8" y2="49.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="205.6" cy="49.5" r="2.5" fill="currentColor"/>
  <line x1="89.9" y1="60.0" x2="266.4" y2="60.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="178.2" cy="60.0" r="2.5" fill="currentColor"/>
  <line x1="122.4" y1="70.5" x2="298.8" y2="70.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="210.6" cy="70.5" r="2.5" fill="currentColor"/>
  <line x1="181.8" y1="81.0" x2="358.1" y2="81.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="269.9" cy="81.0" r="2.5" fill="currentColor"/>
  <line x1="150.7" y1="91.5" x2="327.1" y2="91.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="238.9" cy="91.5" r="2.5" fill="currentColor"/>
  <line x1="178.6" y1="102.0" x2="355.0" y2="102.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="266.8" cy="102.0" r="2.5" fill="currentColor"/>
  <line x1="143.1" y1="112.5" x2="319.4" y2="112.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="231.2" cy="112.5" r="2.5" fill="currentColor"/>
  <line x1="149.4" y1="123.0" x2="325.8" y2="123.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="237.6" cy="123.0" r="2.5" fill="currentColor"/>
  <line x1="140.3" y1="133.5" x2="316.8" y2="133.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="228.6" cy="133.5" r="2.5" fill="currentColor"/>
  <line x1="233.1" y1="144.0" x2="409.4" y2="144.0" stroke="#eea66f" stroke-width="3"/>
  <circle cx="321.2" cy="144.0" r="2.5" fill="currentColor"/>
  <line x1="170.5" y1="154.5" x2="346.9" y2="154.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="258.7" cy="154.5" r="2.5" fill="currentColor"/>
  <line x1="154.8" y1="165.0" x2="331.1" y2="165.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="242.9" cy="165.0" r="2.5" fill="currentColor"/>
  <line x1="154.3" y1="175.5" x2="330.7" y2="175.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="242.5" cy="175.5" r="2.5" fill="currentColor"/>
  <line x1="55.8" y1="186.0" x2="232.2" y2="186.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="143.9" cy="186.0" r="2.5" fill="currentColor"/>
  <line x1="53.5" y1="196.5" x2="229.9" y2="196.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="141.7" cy="196.5" r="2.5" fill="currentColor"/>
  <line x1="91.8" y1="207.0" x2="268.1" y2="207.0" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="179.9" cy="207.0" r="2.5" fill="currentColor"/>
  <line x1="110.7" y1="217.5" x2="287.1" y2="217.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="198.8" cy="217.5" r="2.5" fill="currentColor"/>
  <text x="220.0" y="248.0" font-size="11" text-anchor="middle" fill="currentColor">true value p</text>
  <text x="413.4" y="148.0" font-size="11" text-anchor="start" fill="currentColor">misses</text>
</svg>
</div>

Each sample gives a different centre, so each interval sits in a different place. The true value never moves. In the
long run about 19 of every 20 intervals cross it, and about 1 in 20 misses. "19 times out of 20" is 95%, described as
a success rate of the **method**.

### What a 95% confidence interval does and does not mean

**Does mean**: "I used a method that captures the true value in 95% of samples."

**Does not mean**:

- "There is a 95% chance that $p$ is in **this** interval." Once the sample is taken, the interval is fixed and $p$
  is fixed; the interval either contains $p$ or it does not. The 95% describes the method before the sample was
  drawn, like a fair coin about to be flipped (the coin has a 50% chance; after it lands, it is heads or it is not).
- "95% of the data are in the interval." The interval is about the **parameter**, not about individual values.
- "The poll can be off by at most 3 points." It can be off by more, about 1 time in 20, and much more if there is
  bias.

### The rule of thumb $1/\sqrt{n}$

The margin of error is largest when $\hat{p} = 0.5$, because $p(1 - p)$ is biggest there (its graph is a parabola
with peak $0.25$ at $p = 0.5$). Pollsters usually report this largest value:

$$1.96\sqrt{\frac{0.25}{n}} = \frac{1.96 \times 0.5}{\sqrt{n}} = \frac{0.98}{\sqrt{n}} \approx \frac{1}{\sqrt{n}}.$$

For $n = 1000$: $\dfrac{0.98}{\sqrt{1000}} \approx 0.031$, which is the 3.1 points in the news sentence. Two things
follow:

- The margin depends on the **sample size**, not on the size of the population (as long as the sample is a small part
  of it). A random sample of 1000 Canadians is as precise as a random sample of 1000 people from a town.
- Halving the margin needs four times the sample, as in the last lesson.

### Other confidence levels

Change 1.96 to the z-value for the level you want:

| Confidence level | 90% | 95% | 99% |
| --- | --- | --- | --- |
| $z^*$ | 1.645 | 1.96 | 2.576 |

More confidence means a wider interval. A 100% interval would be useless: "between 0% and 100%".

### Intervals for a mean

The same idea works for a population mean: $\bar{x} \pm 1.96\dfrac{\sigma}{\sqrt{n}}$. In practice $\sigma$ is not
known, so we use the sample standard deviation $s$. For small samples that adds extra uncertainty, and statisticians
replace 1.96 with a slightly larger number from the **t-distribution** (for example about 2.09 for a sample of 20,
and very close to 1.96 for samples of a few hundred). Technology handles this.

### What the margin of error leaves out

The margin of error measures only **random sampling error**. It does not include:

- **bias** from a sample that is not random (level 5);
- people who refuse to answer (non-response) or answer untruthfully;
- badly worded questions;
- opinions changing between the poll and the vote.

These can be bigger than the margin of error, and no formula measures them.

## Worked examples

**1. Decoding the news sentence.** A poll of 1000 randomly chosen adults. The largest possible margin of error at 95%:

$1.96 \times \sqrt{\dfrac{0.5 \times 0.5}{1000}} = 1.96 \times 0.01581 \approx 0.031$, that is **3.1 percentage
points**.

**2. A real interval.** A random sample of 1200 voters finds 42% support a plan.

- Standard error: $\sqrt{\dfrac{0.42 \times 0.58}{1200}} = \sqrt{0.000203} \approx 0.01425$.
- Margin of error: $1.96 \times 0.01425 \approx 0.0279$, about 2.8 points.
- 95% confidence interval: $42\% \pm 2.8\%$, that is **39.2% to 44.8%**.

Since the whole interval is below 50%, the poll gives good evidence that fewer than half support the plan (assuming
no bias).

**3. Planning a sample size.** How many people must a poll ask for a margin of error of 2 points at 95%?

Use the worst case $p = 0.5$: $1.96\sqrt{\dfrac{0.25}{n}} = 0.02$. Divide by 1.96 and square:
$\dfrac{0.25}{n} = \left(\dfrac{0.02}{1.96}\right)^2$, so
$n = 0.25 \times \left(\dfrac{1.96}{0.02}\right)^2 = 0.25 \times 98^2 = 2401$ people.

**4. An interval for a mean.** A machine fills bags; the standard deviation of fills is known to be 2.5 g. A random
sample of 40 bags has mean 502.3 g. Find a 95% interval for the machine's true mean fill.

Margin: $1.96 \times \dfrac{2.5}{\sqrt{40}} \approx 1.96 \times 0.395 \approx 0.77$ g. Interval:
$502.3 \pm 0.77$, that is **501.5 g to 503.1 g**. The whole interval is above 500 g.

**5. Is the race "a tie"?** A poll of 1000 has candidate A at 42% and B at 38%, margin of error 3.1 points. Each
candidate's interval overlaps the other's, but the margin for the **gap** between them is bigger than 3.1: technology
gives about 5.5 points. The lead of 4 points is smaller than that, so the poll cannot say who is ahead. A rough rule:
the margin for a lead between two candidates is up to about twice the reported margin.

## Try it

1. Use the rule of thumb to estimate the margin of error for random samples of 400, 2500 and 10 000.
2. A random sample of 400 finds 55% in favour. Find the 95% confidence interval. Can you conclude that a majority are
   in favour?
3. Find a 99% confidence interval for example 2 above (42% of 1200). Is it wider or narrower than the 95% one?
4. How many people are needed for a margin of error of 1 point at 95%?
5. A town of 5000 and a country of 40 million are each polled with a random sample of 1000. Compare the margins of
   error.
6. Say whether each statement about the interval 39.2% to 44.8% is correct. (a) There is a 95% chance the true
   support is between 39.2% and 44.8%. (b) If we repeated the poll many times, about 95% of the intervals made this
   way would contain the true support. (c) 95% of voters have support between 39.2% and 44.8%.
7. A sample of 64 students has mean sleep 7.1 hours; assume $\sigma = 1.2$ hours. Find a 95% interval for the mean.
8. A newspaper runs an online poll: 20 000 readers vote and 70% agree. It reports a margin of error of 0.7 points.
   What is wrong?

??? note "Answers"
    1. $1/\sqrt{400} = 0.05$ (5 points); $1/\sqrt{2500} = 0.02$ (2 points); $1/\sqrt{10\,000} = 0.01$ (1 point).
    2. Standard error $\sqrt{0.55 \times 0.45 / 400} \approx 0.0249$; margin $1.96 \times 0.0249 \approx 0.049$.
       Interval about **50.1% to 59.9%**. It is just above 50%, so the poll gives (just) enough evidence of a
       majority, if there is no bias.
    3. Margin $2.576 \times 0.01425 \approx 0.0367$. Interval $42 \pm 3.7$: **38.3% to 45.7%**, wider than the 95%
       interval, as more confidence requires.
    4. $n = 0.25 \times (1.96 / 0.01)^2 = 0.25 \times 196^2 = 0.25 \times 38\,416 = 9604$ people.
    5. Almost the same, about 3.1 points each. The margin depends on the sample size, not the population size. (For
       the town, the sample is a fifth of the population, which in fact makes the margin a little smaller still.)
    6. (a) Not correct in the strict sense: after the sample, the true value is in the interval or not; the 95% is
       about the method. (b) Correct. (c) Wrong: the interval is about the population proportion, not about
       individual voters.
    7. Margin $1.96 \times 1.2 / \sqrt{64} = 1.96 \times 0.15 = 0.294$. Interval **6.81 to 7.39 hours**.
    8. The margin-of-error formula assumes a **random** sample. Readers who choose to vote online are a voluntary
       response sample, which is biased. The formula's 0.7 is meaningless here; the true error could be huge.

## Common mistake

**Saying "95% chance the true value is in this interval".** The 95% belongs to the method: 19 intervals out of 20
catch the truth. Say: "We are 95% confident", meaning that we used a method that works 95% of the time.

**Treating the margin of error as the total error.** It covers only the luck of the random draw. Bias, non-response
and bad questions are extra and are not in the formula.

## Where it leads

- Back: [Sampling distributions](01-sampling-distributions.md) · Next: [Hypothesis tests](03-hypothesis-tests.md)
- [Level 8 page](index.md) · [Statistics topic page](../index.md)
- The normal approximation to counts of yes answers: [Probability, level 8: the normal approximation](../../probability/level-8/04-normal-approximation.md).
- The 1936 poll that had a huge sample and a huge error: [Level 5: bias](../level-5/06-bias.md).
