# 5. Sampling and experiments

*Part I described data that were already in front of us. But where did the data come from? A thousand answers to a
survey can tell you about millions of people, or about nobody at all, depending entirely on how those thousand were
chosen. A drug can look wonderful in a study and do nothing, depending on who got it and who decided. This chapter is
about the design that happens before any number is written down: how to choose a sample so that chance, and not our
own preferences, decides who is in it; how stratifying and clustering trade cost against precision; how a randomised,
controlled, blinded experiment lets us say "this caused that"; why the placebo effect is both real and overrated; and
how Ronald Fisher turned a conversation about tea into the first worked example of a randomisation test, with exact
probabilities you can count by hand.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a simple random sample is, why every unit has the same chance $n/N$ of being chosen, and why a huge
      biased sample loses to a small random one (the Literary Digest poll of 1936)
    - a one-line identity that measures the damage done by self-selection
    - stratified sampling (with a proof that it never does worse than simple random sampling under proportional
      allocation, and Neyman's optimal allocation) and cluster sampling (with the design effect)
    - what makes an experiment different from an observational study: control, randomisation, blinding, and a proof
      that randomisation balances every background variable on average
    - what the placebo effect is, and why much of what is called "placebo" is regression to the mean
    - Fisher's lady tasting tea: the design, the exact probabilities $1/70$ and $17/70$, and what they mean

    **You need:** [Chapter 1](01-What-Statistics-Is-For.md) (populations, samples, observational studies and experiments)
    and [Chapter 3](03-Summaries.md) (mean and variance). Counting with $\binom{n}{k}$ from
    [Probability, Chapter 2](../probability/02-Counting-and-Equally-Likely-Outcomes.md) and expectation and variance
    from [Probability, Chapter 6](../probability/06-Expectation-and-Variance.md). Gentler versions: the Topics lessons
    on [populations and samples](../../topics/statistics/level-5/04-populations-samples.md),
    [sampling methods](../../topics/statistics/level-5/05-sampling-methods.md), [bias](../../topics/statistics/level-5/06-bias.md)
    and [experiments and studies](../../topics/statistics/level-8/04-experiments-studies.md).

    **Levels:** 5.1 is beginner to intermediate, with an advanced identity at the end; 5.2 is intermediate with
    advanced proofs; 5.3 and 5.4 are intermediate; 5.5 is intermediate.

## 5.1 Random sampling and bias

### The question

Suppose you want to know what fraction of the adults in a country support some proposal. There are tens of millions
of them; you can ask perhaps a thousand. Which thousand?

The obvious answers are all bad. Ask the people near you, and you learn about your friends. Put a poll on a website,
and you learn about the people who visit that website and feel strongly enough to click. Stand outside a train station,
and you learn about commuters at that hour. Each of these is a **sample**, a part of the population we actually
observe, but the way it was chosen is tied to the very things we want to measure.

Some vocabulary, used for the rest of the book:

- The **population** is the whole group we want to learn about. It has $N$ **units** (people, households, fields,
  rocks, days).
- A **parameter** is a number describing the population, such as the population mean $\mu$ or the fraction $p$ who
  say yes. It is fixed but unknown.
- The **sampling frame** is the list we actually draw from: an electoral roll, a list of addresses, a phone directory.
  It is rarely the same as the population.
- A **sample** is the $n$ units we observe, and a **statistic** is a number computed from the sample, such as the
  sample mean $\bar{x}$ or the sample proportion $\hat{p}$ (read "p hat"; a hat means "an estimate of").
- **Bias** is a systematic tendency of a method to miss in one direction. It is a property of the *method*, not of one
  particular sample.

### Simple random samples

The cure is to let chance decide. A **simple random sample** (SRS) of size $n$ from a population of $N$ is chosen so
that every possible set of $n$ units has the same probability of being the sample. There are $\binom{N}{n}$ such sets,
so each has probability $1/\binom{N}{n}$.

In practice you number the frame $1, 2, \dots, N$ and let a random number generator pick $n$ different numbers. In
Python:

```python
import random
random.seed(5)                      # only so that you get the same answer as the text
frame = list(range(1, 501))         # a frame of 500 numbered units
sample = random.sample(frame, 10)   # 10 different units, every set of 10 equally likely
print(sorted(sample))
```

**Theorem (inclusion probability).** In a simple random sample of size $n$ from $N$ units, each unit is in the sample
with probability $n/N$.

*Proof.* Fix a unit $u$. The samples that contain $u$ are formed by choosing the other $n-1$ members from the
remaining $N-1$ units, so there are $\binom{N-1}{n-1}$ of them. Each sample has probability $1/\binom{N}{n}$, so

$$
P(u \text{ is chosen}) = \frac{\binom{N-1}{n-1}}{\binom{N}{n}}
= \frac{(N-1)!}{(n-1)!\,(N-n)!} \cdot \frac{n!\,(N-n)!}{N!} = \frac{n}{N}. \qquad \blacksquare
$$

So nobody is favoured. That alone does not make an SRS perfect: a particular sample can still be unlucky. What
randomness buys is that the luck is *measurable*. The sample mean $\bar{x}$ of an SRS has expected value exactly equal
to the population mean $\mu$ (we prove this in [Chapter 6](06-Sampling-Distributions.md)), and its typical error
shrinks like $1/\sqrt{n}$, at a rate we can compute. A method that chooses units by convenience has an error we cannot
compute at all.

**Example 5.1.** A frame of $N = 500$ households; we take an SRS of $n = 10$. The chance that one particular household
is included is $10/500 = 0.02$. The number of possible samples is $\binom{500}{10} \approx 2.46 \times 10^{20}$, so
the chance of getting any one specific sample is tiny, but every household's chance is the same 2 percent.

*Check:* $\binom{499}{9} / \binom{500}{10} = 10/500$, which Python's `math.comb` confirms.

### The kinds of bias

Statisticians name the usual ways a sample goes wrong.

- **Undercoverage** (or **frame bias**): some of the population is not on the frame at all. A survey by landline
  telephone misses people with only mobile phones.
- **Nonresponse bias**: chosen units do not answer, and the people who refuse differ from those who answer.
- **Voluntary response bias**: the sample chooses itself (call-in polls, online votes, product reviews). Strong
  opinions are over-represented.
- **Convenience sampling**: the units easiest to reach are taken.
- **Response bias**: people answer, but not truthfully or accurately, because of question wording, the interviewer,
  social pressure, or poor memory.

A random sample protects against the first four only if the frame is good and almost everyone responds. It does
nothing for the fifth.

### The Literary Digest poll of 1936

The most famous failure in polling history is worth telling carefully, because the usual short version gets a detail
wrong.

In 1936 the United States presidential election was between the sitting president, Franklin D. Roosevelt, and the
Republican Alfred Landon. The *Literary Digest*, a weekly magazine that had run straw polls in earlier elections with
a good record, mailed mock ballots to about ten million people. The names came from lists it had at hand, among them
its own subscribers, telephone directories and automobile registration lists. About 2.4 million ballots came back, an
enormous sample. The *Digest* predicted that Landon would win comfortably, with about 57 percent of the two-party vote.

Roosevelt won in one of the largest landslides in American history: about 61 percent of the popular vote and every
state but Maine and Vermont. The *Digest* had put Roosevelt's share about 18 percentage points too low, and the magazine closed not long
afterwards.

Meanwhile George Gallup, using a much smaller sample chosen by quota methods, predicted a Roosevelt victory. (His
estimate of Roosevelt's share was several points too low, but he got the winner and the size of the win roughly right.)

The usual explanation is the frame: in the middle of the Great Depression, people with telephones and cars were richer
than average, and richer voters leaned to Landon. That was part of it. But Peverill Squire, analysing a Gallup survey
from 1937 that asked people whether they had received and returned a *Digest* ballot, argued in 1988 that
**nonresponse** was at least as important: among people who got a ballot, Landon supporters were much more likely to
send it back. Only about a quarter of the ballots were returned, and the quarter who answered were not like the rest.

The lesson is the most important sentence in this chapter: **a larger sample does not cure bias.** Ten times the
sample size reduces random error by a factor of about $\sqrt{10} \approx 3.2$, and does nothing at all to systematic
error.

### Measuring the damage of self-selection

*Level: advanced.*

Here is a tidy way to see exactly how much a self-selected sample can mislead. Take a population of $N$ units with
values $y_1, \dots, y_N$, mean $\bar{y}_N$ and standard deviation $\sigma_y$ (computed with divisor $N$). Let
$R_i = 1$ if unit $i$ ends up in our data (chosen *and* responded) and $R_i = 0$ otherwise, and let
$n = \sum R_i$ and $f = n/N$, the fraction we observe. The mean of the data we have is
$\bar{y}_n = \frac{1}{n}\sum_i R_i y_i$.

Think of $R$ and $y$ as two lists over the population, and let $\rho_{R,y}$ be their correlation (the ordinary
correlation coefficient of [Chapter 4](04-Relationships-and-Correlation.md), computed over all $N$ units).

**Identity (Meng, 2018).**

$$
\bar{y}_n - \bar{y}_N = \rho_{R,y} \cdot \sqrt{\frac{1-f}{f}} \cdot \sigma_y .
$$

*Proof.* The population covariance of $R$ and $y$ is

$$
\operatorname{Cov}(R, y) = \frac{1}{N}\sum_i R_i y_i - \bar{R}\,\bar{y}_N = \frac{n}{N}\bar{y}_n - f \bar{y}_N
= f\,(\bar{y}_n - \bar{y}_N),
$$

because $\bar{R} = n/N = f$. A list of zeros and ones with a fraction $f$ of ones has variance $f(1-f)$, so
$\sigma_R = \sqrt{f(1-f)}$. Therefore

$$
\bar{y}_n - \bar{y}_N = \frac{\operatorname{Cov}(R,y)}{f} = \frac{\rho_{R,y}\,\sigma_R\,\sigma_y}{f}
= \rho_{R,y}\,\frac{\sqrt{f(1-f)}}{f}\,\sigma_y = \rho_{R,y}\sqrt{\frac{1-f}{f}}\,\sigma_y. \qquad \blacksquare
$$

The error is a product of three things: **data quality** ($\rho_{R,y}$, how strongly being in the data is tied to the
answer), **data quantity** ($\sqrt{(1-f)/f}$, which is small only when we see most of the population) and **problem
difficulty** ($\sigma_y$). In a simple random sample $\rho_{R,y}$ is zero on average and only of size about
$1/\sqrt{N}$, which is why random samples work. In a self-selected sample, $\rho_{R,y}$ does not shrink as the sample
grows.

**Example 5.2 (made-up numbers).** A population of $N = 1{,}000{,}000$; a yes/no question with half saying yes, so
$\sigma_y = 0.5$. A website collects $n = 100{,}000$ answers, so $f = 0.1$ and $\sqrt{(1-f)/f} = 3$. Suppose the
correlation between answering and saying yes is only $\rho_{R,y} = 0.05$, which sounds negligible. The error is
$0.05 \times 3 \times 0.5 = 0.075$: the website reports 57.5 percent yes instead of 50.

A simple random sample of only 1,000 people has a standard error of $\sqrt{0.25/1000} \approx 0.016$, under 2
percentage points. The 1,000 random people beat the 100,000 volunteers by a wide margin.

*Check:* $0.05 \cdot \sqrt{0.9/0.1} \cdot 0.5 = 0.075$.

## 5.2 Stratified and cluster sampling

### Stratified sampling

Often we know something about the population before we sample. A country has provinces; a school has grades; a city
has neighbourhoods of flats and neighbourhoods of houses. If the thing we measure differs a lot between these groups
but little within them, we can do better than an SRS.

In **stratified sampling** we split the population into non-overlapping groups called **strata** (singular
**stratum**), and take a separate simple random sample inside each one. Write

- $H$ for the number of strata, $N_h$ for the size of stratum $h$, and $W_h = N_h/N$ for its share of the population;
- $\mu_h$ and $\sigma_h^2$ for the mean and variance inside stratum $h$;
- $n_h$ for the sample size we choose in stratum $h$, with $n = \sum_h n_h$, and $\bar{y}_h$ for that stratum's sample
  mean.

The **stratified estimator** of the population mean $\mu = \sum_h W_h \mu_h$ is

$$
\bar{y}_{\text{st}} = \sum_{h=1}^{H} W_h\, \bar{y}_h .
$$

Each $\bar{y}_h$ is an SRS mean, so $E[\bar{y}_h] = \mu_h$, and by linearity $E[\bar{y}_{\text{st}}] = \mu$: no bias.

**Variance.** Assume the populations are large enough that we can ignore the finite population correction of
[Chapter 6](06-Sampling-Distributions.md) (or sample with replacement). Then $\operatorname{Var}(\bar{y}_h) = \sigma_h^2/n_h$, and because the samples in different strata are drawn independently, variances add:

$$
\operatorname{Var}(\bar{y}_{\text{st}}) = \sum_h W_h^2 \frac{\sigma_h^2}{n_h}.
$$

**Proportional allocation** takes $n_h = n W_h$, so each stratum is represented in its true proportion. Then
$W_h^2 \sigma_h^2/n_h = W_h \sigma_h^2/n$ and

$$
\operatorname{Var}_{\text{prop}} = \frac{1}{n}\sum_h W_h \sigma_h^2 .
$$

**Theorem.** Under proportional allocation, stratified sampling is never worse than simple random sampling (with
replacement) of the same size, and the gain is exactly the between-strata variance divided by $n$.

*Proof.* The variance of the whole population splits into a within-strata part and a between-strata part:

$$
\sigma^2 = \sum_h W_h \sigma_h^2 + \sum_h W_h (\mu_h - \mu)^2 .
$$

To see this, write $\sigma^2 = \frac{1}{N}\sum_h \sum_{i \in h} (y_i - \mu)^2$ and inside stratum $h$ write
$y_i - \mu = (y_i - \mu_h) + (\mu_h - \mu)$. Squaring gives three terms. The first sums to $N_h \sigma_h^2$. The cross
term is $2(\mu_h - \mu)\sum_{i\in h}(y_i - \mu_h) = 0$, since deviations from a mean sum to zero. The last term is
$N_h(\mu_h - \mu)^2$. Divide by $N$. (This is the law of total variance of
[Probability, Chapter 11](../probability/11-Joint-Distributions.md) in a finite form.)

An SRS of size $n$ (with replacement) has variance $\sigma^2/n$, so

$$
\operatorname{Var}_{\text{SRS}} - \operatorname{Var}_{\text{prop}} = \frac{1}{n}\sum_h W_h(\mu_h - \mu)^2 \ge 0. \qquad \blacksquare
$$

The more the strata differ in their means, the more we gain. If they all have the same mean, we gain nothing (and
lose nothing).

**Neyman allocation.** Can we beat proportional allocation? Yes, by sampling more where the values vary more.

**Theorem (Neyman, 1934).** For a fixed total $n$, the variance $\sum_h W_h^2\sigma_h^2/n_h$ is smallest when
$n_h$ is proportional to $W_h \sigma_h$:

$$
n_h = n \cdot \frac{W_h \sigma_h}{\sum_k W_k \sigma_k}, \qquad \text{giving} \qquad
\operatorname{Var}_{\text{Neyman}} = \frac{1}{n}\Big(\sum_h W_h \sigma_h\Big)^2 .
$$

*Proof.* By the Cauchy-Schwarz inequality, $(\sum_h a_h b_h)^2 \le (\sum_h a_h^2)(\sum_h b_h^2)$, with equality
exactly when the $a_h$ are proportional to the $b_h$. Take $a_h = W_h \sigma_h/\sqrt{n_h}$ and $b_h = \sqrt{n_h}$:

$$
\Big(\sum_h W_h \sigma_h\Big)^2 \le \Big(\sum_h \frac{W_h^2\sigma_h^2}{n_h}\Big)\Big(\sum_h n_h\Big)
= n \cdot \operatorname{Var}(\bar{y}_{\text{st}}).
$$

So every allocation has variance at least $(\sum W_h\sigma_h)^2/n$, and equality holds when $W_h\sigma_h/\sqrt{n_h}$ is
proportional to $\sqrt{n_h}$, that is, when $n_h \propto W_h\sigma_h$. $\blacksquare$

The formula says: sample a stratum more if it is large ($W_h$) or variable ($\sigma_h$). If sampling costs differ, a
similar argument puts $n_h \propto W_h\sigma_h/\sqrt{c_h}$ where $c_h$ is the cost per unit; Cochran's book has it.

**Example 5.3 (made-up town).** A town of $N = 1000$ households uses water as follows (in some unit per week):

| Stratum | Households $N_h$ | $W_h$ | Mean $\mu_h$ | SD $\sigma_h$ |
|---|---|---|---|---|
| Flats | 600 | 0.6 | 20 | 5 |
| Houses | 300 | 0.3 | 50 | 15 |
| Farms | 100 | 0.1 | 120 | 40 |

The overall mean is $\mu = 0.6(20) + 0.3(50) + 0.1(120) = 39$. The within-strata part of the variance is
$0.6(25) + 0.3(225) + 0.1(1600) = 242.5$ and the between part is
$0.6(19^2) + 0.3(11^2) + 0.1(81^2) = 216.6 + 36.3 + 656.1 = 909$, so $\sigma^2 = 1151.5$ and $\sigma \approx 33.9$.

With $n = 100$:

- SRS: standard error $\sqrt{1151.5/100} \approx 3.39$.
- Proportional allocation (60, 30, 10 households): $\sqrt{242.5/100} \approx 1.56$.
- Neyman allocation: $\sum W_h\sigma_h = 3 + 4.5 + 4 = 11.5$, so $n_h \approx 100 \cdot (3, 4.5, 4)/11.5 \approx (26, 39, 35)$, and the standard error is $11.5/\sqrt{100} = 1.15$.

Stratifying cut the error by more than half; Neyman allocation, which spends a third of the sample on the 10 percent of
households that are farms, cut it further. To get a standard error of 1.15 by SRS you would need about
$1151.5/1.15^2 \approx 871$ households instead of 100.

*Check:* $242.5 + 909 = 1151.5$, and $11.5^2/100 = 1.3225 = 1.15^2$.

### Cluster sampling

Stratifying needs a list of every unit. Often we do not have one, or the units are spread over a huge area. To survey
schoolchildren in a large country you cannot visit a random child in every town. Instead you pick some schools at
random and test all the children in them (or a sample of them). The schools are **clusters**; this is **cluster
sampling**. When we sample clusters and then sample within them, it is **multistage sampling**, and most large national
surveys work this way.

The two designs look alike but work in opposite ways:

- Stratifying: *every* stratum is sampled. It helps when strata *differ* from each other.
- Clustering: only *some* clusters are sampled. It hurts when clusters differ from each other, because the members of
  one cluster tend to be alike and so tell us less than the same number of independent units.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 620 240" role="img" aria-label="Three ways to choose 12 of 48 units. Left, simple random sampling: 12 dots scattered at random. Middle, stratified sampling: the grid is split into three coloured bands and 4 dots are chosen in each band. Right, cluster sampling: the grid is split into 8 columns of 6 and two whole columns are taken.">
<text x="100" y="22" text-anchor="middle" font-size="14" fill="currentColor">Simple random</text>
<circle cx="20" cy="40" r="6" fill="currentColor"/>
<circle cx="42" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="64" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="86" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="108" cy="40" r="6" fill="currentColor"/>
<circle cx="130" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="152" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="174" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="20" cy="70" r="6" fill="currentColor"/>
<circle cx="42" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="64" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="86" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="108" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="130" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="152" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="174" cy="70" r="6" fill="currentColor"/>
<circle cx="20" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="42" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="64" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="86" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="108" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="130" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="152" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="174" cy="100" r="6" fill="currentColor"/>
<circle cx="20" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="42" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="64" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="86" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="108" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="130" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="152" cy="130" r="6" fill="currentColor"/>
<circle cx="174" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="20" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="42" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="64" cy="160" r="6" fill="currentColor"/>
<circle cx="86" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="108" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="130" cy="160" r="6" fill="currentColor"/>
<circle cx="152" cy="160" r="6" fill="currentColor"/>
<circle cx="174" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="20" cy="190" r="6" fill="currentColor"/>
<circle cx="42" cy="190" r="6" fill="currentColor"/>
<circle cx="64" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="86" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="108" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="130" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="152" cy="190" r="6" fill="currentColor"/>
<circle cx="174" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="305" y="22" text-anchor="middle" font-size="14" fill="currentColor">Stratified</text>
<rect x="217" y="32" width="176" height="56" fill="#eea66f" opacity="0.35"/>
<rect x="217" y="92" width="176" height="56" fill="#9cc9ea" opacity="0.35"/>
<rect x="217" y="152" width="176" height="56" fill="#7ccf9a" opacity="0.35"/>
<circle cx="225" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="247" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="269" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="291" cy="40" r="6" fill="currentColor"/>
<circle cx="313" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="335" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="357" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="379" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="225" cy="70" r="6" fill="currentColor"/>
<circle cx="247" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="269" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="291" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="313" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="335" cy="70" r="6" fill="currentColor"/>
<circle cx="357" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="379" cy="70" r="6" fill="currentColor"/>
<circle cx="225" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="247" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="269" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="291" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="313" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="335" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="357" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="379" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="225" cy="130" r="6" fill="currentColor"/>
<circle cx="247" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="269" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="291" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="313" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="335" cy="130" r="6" fill="currentColor"/>
<circle cx="357" cy="130" r="6" fill="currentColor"/>
<circle cx="379" cy="130" r="6" fill="currentColor"/>
<circle cx="225" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="247" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="269" cy="160" r="6" fill="currentColor"/>
<circle cx="291" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="313" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="335" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="357" cy="160" r="6" fill="currentColor"/>
<circle cx="379" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="225" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="247" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="269" cy="190" r="6" fill="currentColor"/>
<circle cx="291" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="313" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="335" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="357" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="379" cy="190" r="6" fill="currentColor"/>
<text x="510" y="22" text-anchor="middle" font-size="14" fill="currentColor">Cluster</text>
<rect x="466" y="32" width="16" height="176" fill="#eea66f" opacity="0.45"/>
<rect x="532" y="32" width="16" height="176" fill="#eea66f" opacity="0.45"/>
<circle cx="430" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="452" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="474" cy="40" r="6" fill="currentColor"/>
<circle cx="496" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="518" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="540" cy="40" r="6" fill="currentColor"/>
<circle cx="562" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="584" cy="40" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="430" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="452" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="474" cy="70" r="6" fill="currentColor"/>
<circle cx="496" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="518" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="540" cy="70" r="6" fill="currentColor"/>
<circle cx="562" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="584" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="430" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="452" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="474" cy="100" r="6" fill="currentColor"/>
<circle cx="496" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="518" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="540" cy="100" r="6" fill="currentColor"/>
<circle cx="562" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="584" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="430" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="452" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="474" cy="130" r="6" fill="currentColor"/>
<circle cx="496" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="518" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="540" cy="130" r="6" fill="currentColor"/>
<circle cx="562" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="584" cy="130" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="430" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="452" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="474" cy="160" r="6" fill="currentColor"/>
<circle cx="496" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="518" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="540" cy="160" r="6" fill="currentColor"/>
<circle cx="562" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="584" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="430" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="452" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="474" cy="190" r="6" fill="currentColor"/>
<circle cx="496" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="518" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="540" cy="190" r="6" fill="currentColor"/>
<circle cx="562" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<circle cx="584" cy="190" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="310" y="232" text-anchor="middle" font-size="12" fill="currentColor">filled dot = in the sample</text>
</svg>
</div>

**The design effect.** Suppose every cluster has $m$ members, each value has variance $\sigma^2$, and any two members
of the same cluster have correlation $\rho$ (the **intraclass correlation**), while members of different clusters are
independent. The sum of one cluster's values has variance

$$
\operatorname{Var}\Big(\sum_{j=1}^m Y_j\Big) = \sum_j \operatorname{Var}(Y_j) + \sum_{j \ne k} \operatorname{Cov}(Y_j,Y_k)
= m\sigma^2 + m(m-1)\rho\sigma^2,
$$

so the cluster mean has variance $\frac{\sigma^2}{m}\big(1 + (m-1)\rho\big)$. Averaging over $c$ independent clusters
($n = cm$ units in all) divides by $c$:

$$
\operatorname{Var}(\bar{y}_{\text{cluster}}) = \frac{\sigma^2}{n}\big(1 + (m-1)\rho\big).
$$

The factor $\text{deff} = 1 + (m-1)\rho$ is the **design effect**: how many times larger the variance is than for an
SRS of the same size. The **effective sample size** is $n/\text{deff}$.

**Example 5.4.** Clusters of $m = 20$ pupils with intraclass correlation $\rho = 0.2$ give
$\text{deff} = 1 + 19(0.2) = 4.8$. A sample of 1,000 pupils is worth only about $1000/4.8 \approx 208$ independent
pupils. Even a small $\rho = 0.05$ nearly doubles the variance ($\text{deff} = 1.95$). That is the price of cheap
fieldwork; survey designers weigh it against travel costs.

**Systematic sampling**, taking every $k$-th unit on a list after a random start, is another cheap design. It behaves
like an SRS if the list order is unrelated to the variable, and can go badly wrong if the list has a period that
matches $k$ (every 7th day of a daily record is always the same weekday).

## 5.3 Randomised experiments, control and blinding

### Observing versus intervening

Sampling tells us what a population is like. Often we want something harder: what would happen if we *did*
something. Does a new fertiliser raise yields? Does a vaccine prevent a disease? As [Chapter 1](01-What-Statistics-Is-For.md)
explained, an **observational study** watches what people chose to do, while an **experiment** assigns the
**treatments** (the things being compared) to the **experimental units** (people, plots, animals) and then measures a
**response**.

The reason this matters is **confounding**: a background variable (a **confounder**) that affects both who gets the
treatment and the response. In an observational study of a vaccine, families who volunteer their children might be
richer, more health-conscious, and live in different conditions from those who do not. Any difference in disease rates
mixes the effect of the vaccine with the effect of everything else that differs between the groups.

An experiment has three main ingredients.

1. **Control.** Compare the treatment with something: a **control group** that gets no treatment, the standard
   treatment, or a placebo. Without a comparison there is no way to know what would have happened anyway.
2. **Randomisation.** Let chance decide which units get which treatment.
3. **Replication.** Use enough units that chance differences between groups are small compared with the effect we
   hope to see.

### Why randomise

If the experimenter chooses who gets the treatment, even with the best intentions, choices follow hunches: the
healthier-looking patient, the better-drained plot. Randomisation breaks every link between the assignment and any
property of the units, whether we have measured it or not.

**Theorem.** Take $N = 2m$ units and a background variable $x$ with values $x_1, \dots, x_N$ (age, soil quality,
anything; it need not be measured). Assign $m$ units to treatment by choosing a simple random sample, and the rest to
control. Let $D = \bar{x}_T - \bar{x}_C$ be the difference in group means of $x$. Then $E[D] = 0$, and

$$
\operatorname{Var}(D) = \frac{2S^2}{m}, \qquad S^2 = \frac{1}{N-1}\sum_{i=1}^{N}(x_i - \bar{x})^2 .
$$

*Proof.* Let $Z_i = 1$ if unit $i$ is treated. By the inclusion theorem in 5.1, $P(Z_i = 1) = m/N = 1/2$, so
$E[\bar{x}_T] = \frac{1}{m}\sum_i E[Z_i]x_i = \frac{1}{m}\cdot\frac{1}{2}\sum_i x_i = \bar{x}$. The same holds for the
control group, so $E[D] = 0$. Since $m\bar{x}_T + m\bar{x}_C = N\bar{x}$, we have $\bar{x}_C = 2\bar{x} - \bar{x}_T$
and $D = 2(\bar{x}_T - \bar{x})$. The treated group is an SRS of size $m$ from $N$, and the variance of an SRS mean
(proved in [Chapter 6](06-Sampling-Distributions.md)) is $\frac{S^2}{m}\big(1 - \frac{m}{N}\big) = \frac{S^2}{2m}$.
So $\operatorname{Var}(D) = 4 \cdot \frac{S^2}{2m} = \frac{2S^2}{m}$. $\blacksquare$

So randomisation does not make the groups identical. It makes them equal *on average*, for every background variable
at once, with chance differences whose size we can calculate and which shrink like $1/\sqrt{m}$. That is exactly what
the tests of [Chapter 9](09-Hypothesis-Tests.md) need.

**Example 5.5.** Four volunteers aged 20, 30, 40 and 50 (made up); two will be treated. There are $\binom{4}{2} = 6$
possible assignments:

| Treated | $\bar{x}_T$ | $\bar{x}_C$ | $D$ |
|---|---|---|---|
| 20, 30 | 25 | 45 | $-20$ |
| 20, 40 | 30 | 40 | $-10$ |
| 20, 50 | 35 | 35 | 0 |
| 30, 40 | 35 | 35 | 0 |
| 30, 50 | 40 | 30 | 10 |
| 40, 50 | 45 | 25 | 20 |

The average of $D$ is 0. Its variance is $(400+100+0+0+100+400)/6 = 1000/6 \approx 166.7$. The formula gives
$S^2 = (225+25+25+225)/3 = 500/3$ and $2S^2/m = 2(500/3)/2 = 500/3 \approx 166.7$. *Check:* they agree. With four
people the imbalance can be large; with four hundred it would be about ten times smaller in standard deviation.

### Blinding

People who know which treatment they got behave differently, and so do the people measuring them. **Blinding** hides
the assignment.

- **Single-blind:** the subjects do not know their group.
- **Double-blind:** neither the subjects nor the people who treat and assess them know.

Blinding matters most when the response is subjective (pain, mood, a doctor's judgement of "improved") and less for
hard outcomes such as death. To blind a drug trial the control group needs something that looks like the treatment: a
**placebo**, an inert pill or injection.

### A real example: the 1954 polio vaccine trial

The field trial of Jonas Salk's polio vaccine in 1954 was one of the largest public health experiments ever run, and it
contained, side by side, a good design and a weaker one. Freedman, Pisani and Purves's textbook *Statistics* tells the
story and gives the numbers below (rates are polio cases per 100,000 children, sizes rounded).

In some areas the trial was a **randomised controlled double-blind** experiment. Among children whose parents
consented, half were given the vaccine and half a salt-water placebo, by chance, and neither the families nor the
doctors diagnosing polio knew which:

| Group | Size | Rate |
|---|---|---|
| Vaccine | 200,000 | 28 |
| Placebo | 200,000 | 71 |
| No consent | 350,000 | 46 |

In other areas the National Foundation for Infantile Paralysis used an "observed control" design: all second-graders
whose parents consented were vaccinated, and first- and third-graders were the controls:

| Group | Size | Rate |
|---|---|---|
| Grade 2, vaccine | 225,000 | 25 |
| Grades 1 and 3, control | 725,000 | 54 |
| Grade 2, no consent | 125,000 | 44 |

Both designs show the vaccine works. But look at the "no consent" rows: children whose parents refused had *lower*
polio rates than the placebo group. Polio was, oddly, a disease that struck more often in cleaner, richer households
(children there met the virus later, without their mother's antibodies), and richer parents were more likely to
consent. The observed-control design compared consenting second-graders with *all* first- and third-graders, consenting
or not, so its control group contained many children from the lower-risk families. Its estimated effect (54 against 25)
is biased towards zero compared with the randomised one (71 against 28), and nobody could have known by how much
without the randomised half. Grade itself could also matter, and diagnosis was not blind.

The randomised design compared like with like: consenting families against consenting families, with chance deciding
the rest.

### Other landmarks

Comparison without randomisation is old. In 1747 the naval surgeon James Lind gave six different remedies to six pairs
of sailors with scurvy and found that the pair given oranges and lemons recovered quickly. It was a controlled
comparison, but with two patients per treatment and no random assignment.

Randomisation as a principle came from Fisher's agricultural work at Rothamsted in the 1920s, set out in *The Design of
Experiments* (1935). In medicine, the Medical Research Council's 1948 trial of streptomycin for tuberculosis, designed
with Austin Bradford Hill, is usually cited as the first published trial in which patients were allocated by a
properly concealed random scheme.

## 5.4 The placebo effect

### What it is

A **placebo** is a treatment with no active ingredient: a sugar pill, a saline injection, a sham procedure. The
**placebo effect** is the improvement caused by receiving a placebo, through expectation, conditioning, or the care and
attention that come with treatment. Its mirror image, harm caused by negative expectations, is the **nocebo effect**.

Why it matters for design is simple. If patients who get *something* improve partly because they got something, then a
drug must be compared with a placebo, not with nothing; otherwise the drug gets credit for the placebo effect too.

### How big is it? Honestly

A paper by the anaesthetist Henry Beecher, "The Powerful Placebo" (1955), pooled several trials and reported that
about a third of patients improved on placebo. That figure was quoted for decades. But it measured improvement *in the
placebo group*, and many things besides the placebo make a placebo group improve:

- **natural course**: many illnesses get better on their own;
- **regression to the mean** (explained below);
- **reporting bias**: patients tell a kind doctor what they think the doctor wants to hear;
- **other treatments** taken at the same time.

To isolate the placebo effect you need a third arm that gets *no* treatment at all. Asbjørn Hróbjartsson and Peter
Gøtzsche did this in 2001: they collected trials that had both a placebo group and an untreated group, 114 trials in
all. They found little evidence that placebos had powerful clinical effects in general. For binary outcomes (cured or
not) there was no significant effect; for continuous outcomes that patients report themselves, and for pain in
particular, there was a small effect. The debate continues, and later analyses by the same authors and others found
similar results, with real but modest effects on subjective symptoms.

So the honest summary is: the placebo effect is real for some subjective outcomes, usually modest, and much smaller
than the raw improvement in placebo groups suggests.

### Regression to the mean in a placebo arm

*Level: intermediate.*

Trials enrol people *because* their measurement is high: high blood pressure, bad pain, many symptoms. But any
measurement is part true value and part day-to-day noise. People selected for a high reading are, on average, people
whose noise happened to be positive that day. Measured again, the noise is fresh, and the average reading falls even if
nothing at all was done. This is **regression to the mean**, which Galton named (and which we study in
[Chapter 11](11-Linear-Regression.md)).

A simple model: each person's reading is $X = T + E$, a stable true value $T$ plus noise $E$, with independent noise on
each occasion. If $T$ and $E$ are normal, a reading $d$ units above the population mean predicts a second reading only
$r\,d$ units above it, where $r = \operatorname{Var}(T)/(\operatorname{Var}(T) + \operatorname{Var}(E))$ is the
correlation between two readings.

**Example 5.6 (made-up numbers).** Suppose true blood pressures have standard deviation 12, day-to-day noise has
standard deviation 9, so $r = 144/(144+81) = 0.64$. Enrol only people at least 20 above the mean on the first reading,
Their first readings are then $X = T + E$ with standard deviation $\sqrt{144+81} = 15$, and a normal-curve calculation
gives their average excess as about 27. Untreated, their average excess next time is expected to be about
$0.64 \times 27 \approx 17.3$: an "improvement" of nearly 10 units from doing nothing.

Try it in Python:

```python
import random
random.seed(1)
first, second = [], []
for _ in range(100000):
    t = random.gauss(0, 12)                     # true value, as a distance from the mean
    x1, x2 = t + random.gauss(0, 9), t + random.gauss(0, 9)
    if x1 >= 20:                                # enrolled only if the first reading is high
        first.append(x1); second.append(x2)
print(len(first), sum(first)/len(first), sum(second)/len(second))
```

It prints about 9,200 enrolled people, with average first reading about 26.9 and average second reading about 17.2:
the group's excess falls by roughly a third ($1 - 0.64 = 0.36$), with no treatment at all. A trial
without a control arm would call that an effect. A randomised placebo arm has the same regression, so comparing drug
with placebo cancels it.

## 5.5 The lady tasting tea

### The problem

In *The Design of Experiments* (1935), Fisher opens his second chapter with a small puzzle. A lady says that, by tasting
a cup of tea made with milk, she can tell whether the milk or the tea was poured into the cup first. How should we test
her claim?

Fisher's point was that this question, trivial as it sounds, contains all the problems of experimental design: what to
compare, how to stop other differences from giving the answer away, how many cups to use, and how to decide in advance
what result would convince us.

### Fisher's design

- Prepare **eight cups**: four with milk poured first, four with tea poured first.
- Present them to her in a **random order**, chosen, for instance, by shuffling.
- Tell her that there are four of each, and ask her to pick the four with milk first.

Every detail has a reason. The cups should be alike in everything else (temperature, strength, the china, how long they
stood), and where that cannot be guaranteed, randomising the order means no other difference can systematically line up
with the milk-first cups. Telling her there are four of each turns her task into choosing a set of four, which gives a
clean probability calculation.

### The exact probabilities

Suppose she has no ability at all: whatever she tastes, her choice of four cups is unrelated to how they were made. This
assumption is the **null hypothesis** (the "nothing is going on" explanation, studied properly in
[Chapter 9](09-Hypothesis-Tests.md)). Because the order was random, every set of four is then equally likely to be her
choice.

The number of ways to choose 4 cups from 8 is

$$
\binom{8}{4} = \frac{8 \cdot 7 \cdot 6 \cdot 5}{4 \cdot 3 \cdot 2 \cdot 1} = 70 .
$$

Only one of those sets is exactly the four milk-first cups. So

$$
P(\text{all four correct} \mid \text{guessing}) = \frac{1}{70} \approx 0.014 .
$$

More generally, the number of ways to pick exactly $k$ of the milk-first cups is the number of ways to choose $k$ of
the 4 milk-first cups times the number of ways to choose the other $4-k$ from the 4 tea-first cups:

$$
P(K = k) = \frac{\binom{4}{k}\binom{4}{4-k}}{\binom{8}{4}}, \qquad k = 0, 1, 2, 3, 4 .
$$

This is a **hypergeometric distribution**
([Probability, Chapter 2](../probability/02-Counting-and-Equally-Likely-Outcomes.md)). The values:

| $k$ correct | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| ways | 1 | 16 | 36 | 16 | 1 |
| probability | 1/70 | 16/70 | 36/70 | 16/70 | 1/70 |

*Check:* $1 + 16 + 36 + 16 + 1 = 70$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 250" role="img" aria-label="Bar chart of the chance of each number of milk-first cups correctly picked when the lady is only guessing: 0 right 1/70, 1 right 16/70, 2 right 36/70, 3 right 16/70, 4 right 1/70.">
<line x1="60" y1="200" x2="420" y2="200" stroke="currentColor" stroke-width="1.5"/>
<line x1="60" y1="200" x2="60" y2="20" stroke="currentColor" stroke-width="1.5"/>
<line x1="56" y1="200.0" x2="60" y2="200.0" stroke="currentColor"/><text x="52" y="204.0" text-anchor="end" font-size="11" fill="currentColor">0/70</text>
<line x1="56" y1="155.6" x2="60" y2="155.6" stroke="currentColor"/><text x="52" y="159.6" text-anchor="end" font-size="11" fill="currentColor">10/70</text>
<line x1="56" y1="111.1" x2="60" y2="111.1" stroke="currentColor"/><text x="52" y="115.1" text-anchor="end" font-size="11" fill="currentColor">20/70</text>
<line x1="56" y1="66.7" x2="60" y2="66.7" stroke="currentColor"/><text x="52" y="70.7" text-anchor="end" font-size="11" fill="currentColor">30/70</text>
<rect x="85" y="195.6" width="44" height="4.4" fill="#9cc9ea"/>
<text x="107" y="190.6" text-anchor="middle" font-size="11" fill="currentColor">1</text>
<text x="107" y="216" text-anchor="middle" font-size="12" fill="currentColor">0</text>
<rect x="153" y="128.9" width="44" height="71.1" fill="#9cc9ea"/>
<text x="175" y="123.9" text-anchor="middle" font-size="11" fill="currentColor">16</text>
<text x="175" y="216" text-anchor="middle" font-size="12" fill="currentColor">1</text>
<rect x="221" y="40.0" width="44" height="160.0" fill="#9cc9ea"/>
<text x="243" y="35.0" text-anchor="middle" font-size="11" fill="currentColor">36</text>
<text x="243" y="216" text-anchor="middle" font-size="12" fill="currentColor">2</text>
<rect x="289" y="128.9" width="44" height="71.1" fill="#9cc9ea"/>
<text x="311" y="123.9" text-anchor="middle" font-size="11" fill="currentColor">16</text>
<text x="311" y="216" text-anchor="middle" font-size="12" fill="currentColor">3</text>
<rect x="357" y="195.6" width="44" height="4.4" fill="#eea66f"/>
<text x="379" y="190.6" text-anchor="middle" font-size="11" fill="currentColor">1</text>
<text x="379" y="216" text-anchor="middle" font-size="12" fill="currentColor">4</text>
<text x="240" y="240" text-anchor="middle" font-size="12" fill="currentColor">milk-first cups correctly picked (out of 4)</text>
</svg>
</div>

### What the numbers mean

If she picks all four correctly, either she has the ability or she was lucky, and luck of that size happens only once
in 70 tries. Fisher took a result this rare as reasonable evidence against pure guessing. It is the same reasoning as a
**p-value** (Chapter 9): the probability, if nothing is going on, of a result at least as extreme as the one seen.

What if she gets three right and one wrong? The probability of a result at least that good under guessing is
$P(K \ge 3) = (16 + 1)/70 = 17/70 \approx 0.243$. About one guesser in four does this well, so three out of four is no
evidence at all. Fisher said exactly this: with eight cups, only a perfect score is convincing. The design cannot
reward partial skill.

### Choosing the size of the experiment

How many cups? The rarest result available decides how convincing the experiment can be:

- **Six cups**, three of each: $\binom{6}{3} = 20$, so even a perfect score has probability $1/20 = 0.05$ under
  guessing. Borderline.
- **Eight cups**, four of each: $1/70 \approx 0.014$.
- **Twelve cups**, six of each: $\binom{12}{6} = 924$. A perfect score has probability $1/924 \approx 0.001$, and
  five right out of six has $P(K \ge 5) = (1 + 36)/924 \approx 0.040$, so now one mistake can be forgiven.

An alternative design: flip a fair coin for each cup to decide how it is made, and do not tell her how many of each
there are. Then under guessing each cup is right with probability $\tfrac12$ independently, and eight right out of
eight has probability $1/2^8 = 1/256$. This gives more chances to show skill, but the number of milk-first cups is now
random and could be, say, seven out of eight, which makes her task strange. Fisher preferred the balanced design.

### Why this was a breakthrough

Look at what we did *not* assume. We did not assume anything about how tea tastes, or that her judgements follow a
normal distribution, or anything else about the world. The only probability in the calculation came from the
**randomisation that we did ourselves**. If the order of the cups was really random, then under the null hypothesis
every one of the 70 choices is equally likely, full stop. This is the idea of a **randomisation test** (or
**permutation test**), which [Chapter 15](15-Nonparametric-Methods.md) develops in general, and the exact calculation
is **Fisher's exact test**, which returns in [Chapter 10](10-Categorical-Data.md).

### Who was the lady?

Fisher's book does not name her and does not say how the test came out. According to the biography written by his
daughter, Joan Fisher Box (1978), the episode happened at Rothamsted Experimental Station in the 1920s, and the lady was
Muriel Bristol, a scientist who worked on algae there. David Salsburg's popular history, named after the story,
reports a later secondhand account that she identified every cup correctly. That account cannot be checked, so treat it
as a nice story rather than a result.

### A Python check

```python
from itertools import combinations
cups = range(8)
milk_first = {0, 1, 2, 3}                          # label which cups are milk-first
counts = [0] * 5
for choice in combinations(cups, 4):               # all 70 ways she could choose
    counts[len(milk_first & set(choice))] += 1
print(counts)                                      # [1, 16, 36, 16, 1]
```

## A short history

The idea that a small sample, if chosen properly, can stand for a whole population was resisted for a long time; many
officials thought only a complete census was trustworthy. The Norwegian statistician Anders Kiaer argued for
"representative" samples at the International Statistical Institute in the 1890s. In 1934 Jerzy Neyman published "On
the two different aspects of the representative method", which compared purposive selection (choosing districts that
looked typical) with random sampling, showed why random selection is needed for an honest measure of error, and gave the
optimal allocation for stratified samples that carries his name. (Alexander Chuprov had published the same allocation
earlier, in 1923.) Survey practice in the decades after, at the US Census Bureau and elsewhere,
built on that paper.

Fisher's *The Design of Experiments* did the same for experiments: control, replication and, above all,
randomisation as the source of valid probability statements.

## Check yourself

??? question "1. A school has 800 pupils. A simple random sample of 40 is chosen. What is the probability that a particular pupil is chosen? How many different samples are possible (give an expression)?"

    Each pupil is chosen with probability $n/N = 40/800 = 0.05$, by the inclusion theorem of 5.1. The number of
    possible samples is $\binom{800}{40}$, all equally likely.

??? question "2. A magazine asks readers to vote online on whether a new law is a good idea; 50,000 vote and 80 percent say no. Name the kind of bias and say what, if anything, the 80 percent tells you."

    Voluntary response bias: people choose themselves, and those with strong opinions (especially against) are more
    likely to vote. The 80 percent describes the 50,000 who chose to vote, not the readers and certainly not the
    population. The large sample size does not help, as the identity of 5.1 shows: the error does not shrink while
    the link between responding and the answer remains.

??? question "3. In 1936 the Literary Digest had about 2.4 million responses. Explain in two sentences why it still missed by about 18 points, naming two sources of bias."

    Its frame (its own subscribers, telephone and car owners) over-represented richer voters, who leaned to Landon;
    and of the roughly ten million people sent a ballot only about a quarter responded, with Landon supporters more
    likely to respond. Size reduces random error but does nothing for systematic error.

??? question "4. In Example 5.2, how large would the correlation $\rho_{R,y}$ have to be to give an error of only 0.016 (the standard error of a random sample of 1,000)?"

    We need $\rho \cdot 3 \cdot 0.5 = 0.016$, so $\rho = 0.016/1.5 \approx 0.0107$. Even a correlation of about one
    percent between answering and saying yes wipes out the advantage of 100,000 answers over a random 1,000.

??? question "5. A population has two strata of equal size with means 10 and 30, and standard deviations 4 and 4. For $n = 50$, compare the standard error of the SRS mean (with replacement) and of proportional stratified sampling."

    $\mu = 20$. Within-strata variance: $0.5(16) + 0.5(16) = 16$. Between: $0.5(10^2) + 0.5(10^2) = 100$. So
    $\sigma^2 = 116$. SRS: $\sqrt{116/50} \approx 1.523$. Proportional stratified: $\sqrt{16/50} \approx 0.566$.
    Here Neyman allocation is the same as proportional, since the standard deviations are equal.

??? question "6. In Example 5.3, suppose the farms' standard deviation were 10 instead of 40. Find the Neyman allocation for $n = 100$."

    $W_h\sigma_h$: $0.6 \cdot 5 = 3$, $0.3 \cdot 15 = 4.5$, $0.1 \cdot 10 = 1$; total 8.5. Allocation
    $100 \cdot (3, 4.5, 1)/8.5 \approx (35.3, 52.9, 11.8)$, so about 35 flats, 53 houses and 12 farms. Variance
    $8.5^2/100 = 0.7225$, standard error 0.85.

??? question "7. A survey takes 50 villages and interviews 30 people in each. The intraclass correlation is 0.1. What is the design effect and the effective sample size?"

    $\text{deff} = 1 + (30 - 1)(0.1) = 3.9$. The sample of $1500$ people is worth about $1500/3.9 \approx 385$
    independent people.

??? question "8. A doctor gives a new cream to her patients with the worst eczema, and a year later most are much better. Give two reasons, other than the cream, why they might have improved, and describe a better study."

    Regression to the mean (patients chosen at their worst tend to be less bad later), and the natural course of the
    disease (eczema often improves with time and season). Also the placebo effect on a subjective outcome. A better
    study: randomise eligible patients to the cream or an identical-looking cream without the active ingredient,
    double-blind, and compare improvement between the groups.

??? question "9. In the 1954 polio trial, why was the 'no consent' group's rate (46 per 100,000) lower than the placebo group's (71)? Why does this make the observed-control design misleading?"

    Consenting families were on average richer, and polio struck richer, cleaner households more often, so the
    consenting group (vaccinated or placebo) was at higher risk than non-consenters. The observed-control design
    compared consenting second-graders with all first- and third-graders, a group diluted by lower-risk
    non-consenters. Its control rate (54) was too low, so it understated the vaccine's effect.

??? question "10. Six cups, three milk-first; the lady is told this. Under guessing, give the distribution of the number she gets right, and the probability of at least two right."

    $P(K=k) = \binom{3}{k}\binom{3}{3-k}/\binom{6}{3}$: for $k = 0,1,2,3$ the counts are $1, 9, 9, 1$ out of 20. So
    $P(K \ge 2) = 10/20 = 0.5$. Only a perfect score (probability $1/20 = 0.05$) is even slightly unusual.

??? question "11. With 10 cups, five of each, what is the probability that a guesser gets all five milk-first cups right? At least four?"

    $\binom{10}{5} = 252$. All five: $1/252 \approx 0.004$. Exactly four: $\binom{5}{4}\binom{5}{1} = 25$ ways. So
    $P(K \ge 4) = 26/252 \approx 0.103$. One mistake is still not convincing.

??? question "12. Prove that in the balanced lady-tasting-tea design with $2m$ cups ($m$ of each), the expected number of milk-first cups she picks correctly by guessing is $m/2$."

    Let $I_j = 1$ if the $j$-th milk-first cup is among her $m$ chosen cups. Her choice is a random $m$-subset of
    $2m$ cups, so by the inclusion theorem $P(I_j = 1) = m/(2m) = 1/2$. By linearity, $E[K] = \sum_{j=1}^{m} E[I_j] = m/2$. For $m = 4$ this is 2, the centre of the distribution $1, 16, 36, 16, 1$.

## What you learned

- A simple random sample makes every set of $n$ units equally likely; each unit is chosen with probability $n/N$, and
  the error of the result can be calculated.
- Bias belongs to the method. Undercoverage, nonresponse and self-selection do not shrink with sample size, as the
  Literary Digest learned in 1936; Meng's identity shows the error is data quality times data quantity times problem
  difficulty.
- Stratified sampling with proportional allocation never does worse than an SRS, and Neyman allocation
  ($n_h \propto W_h\sigma_h$) is optimal; cluster sampling is cheaper but costs a design effect $1 + (m-1)\rho$.
- Experiments need control, randomisation and replication; randomisation balances every background variable on
  average, measured or not; blinding protects subjective outcomes.
- Improvement in a placebo group is mostly natural course and regression to the mean; the true placebo effect is real
  for some subjective outcomes and usually modest.
- Fisher's lady tasting tea gets its probabilities from the randomisation itself: $1/70$ for a perfect score, $17/70$
  for three or more right.

**Next:** [Chapter 6](06-Sampling-Distributions.md), how a statistic varies from one random sample to the next, and how
to measure that variation.

## Further reading

- W. G. Cochran, *Sampling Techniques*, 3rd edition, 1977. The classic text on stratified, cluster and multistage
  designs.
- S. L. Lohr, *Sampling: Design and Analysis*, 1999 (later editions 2010 and 2021). A modern, readable textbook.
- D. Freedman, R. Pisani and R. Purves, *Statistics*, 4th edition, 2007. Chapters 1 and 2 on the polio trial and other
  experiments; chapters 19 to 23 on sampling and the 1936 poll.
- R. A. Fisher, *The Design of Experiments*, 1935.
- J. Neyman, "On the two different aspects of the representative method", *Journal of the Royal Statistical Society*
  97(4), 1934.
- P. Squire, "Why the 1936 Literary Digest poll failed", *Public Opinion Quarterly* 52(1), 1988.
- X.-L. Meng, "Statistical paradises and paradoxes in big data (I): Law of large populations, big data paradox, and
  the 2016 US presidential election", *Annals of Applied Statistics* 12(2), 2018.
- H. K. Beecher, "The powerful placebo", *Journal of the American Medical Association* 159, 1955.
- A. Hróbjartsson and P. C. Gøtzsche, "Is the placebo powerless? An analysis of clinical trials comparing placebo
  with no treatment", *New England Journal of Medicine* 344, 2001.
- J. F. Box, *R. A. Fisher: The Life of a Scientist*, 1978; D. Salsburg, *The Lady Tasting Tea*, 2001.
- On this site: the Topics lessons on [populations and samples](../../topics/statistics/level-5/04-populations-samples.md),
  [sampling methods](../../topics/statistics/level-5/05-sampling-methods.md), [bias](../../topics/statistics/level-5/06-bias.md)
  and [experiments and studies](../../topics/statistics/level-8/04-experiments-studies.md);
  [Probability, Chapter 2](../probability/02-Counting-and-Equally-Likely-Outcomes.md) for counting; the
  [Probability book](../probability/index.md).
