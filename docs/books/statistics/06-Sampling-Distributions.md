# 6. Sampling distributions

*Draw a random sample and compute its mean. Draw another, and the mean is different. A third, different again. If a
statistic changes every time we sample, how can it tell us anything reliable? The answer is that the changes
themselves follow a law. This chapter studies that law, the sampling distribution: its centre (the true value, for a
well-chosen statistic), its spread (the standard error, $\sigma/\sqrt{n}$ for a mean, which we prove) and its shape
(nearly normal, by the central limit theorem, often for quite small samples). You will see it for proportions, watch it
emerge in simulations, and end with the bootstrap, Bradley Efron's 1979 idea for finding a sampling distribution when
no formula is available: resample your own data.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a sampling distribution is, and why it is the bridge between one sample and the population
    - the mean and standard error of a sample mean, with proofs, including the finite population correction for
      sampling without replacement
    - how to use the central limit theorem in practice, when "$n \ge 30$" is and is not enough, and why skewness fades
      like $1/\sqrt{n}$
    - the sampling distribution of a sample proportion, the continuity correction, and the quick margin of error
      $1/\sqrt{n}$
    - how to see all of this by simulation in a few lines of Python
    - the bootstrap: the plug-in idea, its exact answer for the mean, how to use it for a median, and where it fails

    **You need:** [Chapter 3](03-Summaries.md) (mean, variance, standard deviation) and
    [Chapter 5](05-Sampling-and-Experiments.md) (simple random samples). From Probability:
    [Chapter 6](../probability/06-Expectation-and-Variance.md) (expectation, variance of sums),
    [Chapter 10](../probability/10-The-Normal-Distribution.md) (the normal law) and
    [Chapter 12](../probability/12-The-Central-Limit-Theorem.md) (the central limit theorem). Gentler version: the
    Topics lesson on [sampling distributions](../../topics/statistics/level-8/01-sampling-distributions.md).

    **Levels:** 6.1 is beginner; 6.2 is intermediate with an advanced part on finite populations; 6.3 and 6.4 are
    intermediate; 6.5 is beginner to intermediate; 6.6 is intermediate with advanced proofs.

## 6.1 Statistics vary from sample to sample

### A small population we can see whole

Usually the population is huge and unknown. To understand what sampling does, start with one so small we can list every
possible sample. A made-up population of four numbers:

$$
\{2,\ 4,\ 6,\ 8\}, \qquad \mu = 5, \qquad \sigma^2 = \frac{(2-5)^2 + (4-5)^2 + (6-5)^2 + (8-5)^2}{4} = 5 .
$$

(For a whole population we divide by $N$; the divisor $n-1$ belongs to samples, see [Chapter 7](07-Estimation.md).)

Take a simple random sample of size 2, without replacement. There are $\binom{4}{2} = 6$ possible samples, each with
probability $1/6$:

| Sample | 2, 4 | 2, 6 | 2, 8 | 4, 6 | 4, 8 | 6, 8 |
|---|---|---|---|---|---|---|
| Mean $\bar{x}$ | 3 | 4 | 5 | 5 | 6 | 7 |

So $\bar{x}$ is a **random variable**: before we sample, its value is uncertain, with the distribution

| $\bar{x}$ | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|
| probability | 1/6 | 1/6 | 2/6 | 1/6 | 1/6 |

This table is the **sampling distribution** of $\bar{x}$: the distribution of the values a statistic takes over all
possible samples, each weighted by its probability. Two facts stand out.

- Its centre is the truth: $E[\bar{x}] = (3 + 4 + 5 + 5 + 6 + 7)/6 = 5 = \mu$.
- It is less spread than the population: its variance is
  $\frac{(3-5)^2 + (4-5)^2 + 0 + 0 + (6-5)^2 + (7-5)^2}{6} = \frac{10}{6} \approx 1.67$, against $\sigma^2 = 5$.

### The words

- A **parameter** describes the population ($\mu$, $\sigma$, $p$). It is a fixed number.
- A **statistic** is computed from the sample ($\bar{x}$, $s$, $\hat{p}$, the median). It is a random variable,
  because the sample is random.
- The **sampling distribution** of a statistic is its probability distribution over repeated random sampling.
- The **standard error** (SE) of a statistic is the standard deviation of its sampling distribution. It answers: "how
  far from its centre is this statistic typically?"

Do not confuse three distributions that all appear in this chapter:

1. the **population distribution**: the values of all $N$ units;
2. the **data distribution**: the $n$ values in your one sample (what a histogram of your data shows);
3. the **sampling distribution**: the values a statistic would take over *all possible samples*. You never see it
   directly; you see one value from it.

Statistical inference, the rest of this book, is the art of reasoning from one draw of (3) back to (1).

## 6.2 The sampling distribution of the mean

### The standard model

From now on the usual model is: the data $X_1, \dots, X_n$ are **independent and identically distributed** (iid), each
with mean $\mu$ and variance $\sigma^2$. This describes sampling *with* replacement from a finite population, or sampling
from a population so large that removing a few units changes nothing, or repeated measurements of something with
random error.

**Theorem (mean and standard error of $\bar{X}$).** If $X_1, \dots, X_n$ are iid with mean $\mu$ and variance
$\sigma^2$, then the sample mean $\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$ satisfies

$$
E[\bar{X}] = \mu, \qquad \operatorname{Var}(\bar{X}) = \frac{\sigma^2}{n}, \qquad
\operatorname{SE}(\bar{X}) = \frac{\sigma}{\sqrt{n}} .
$$

*Proof.* Expectation is linear ([Probability, Chapter 6](../probability/06-Expectation-and-Variance.md)), so
$E[\bar{X}] = \frac{1}{n}\sum E[X_i] = \frac{1}{n} \cdot n\mu = \mu$.

For the variance, two rules: $\operatorname{Var}(cY) = c^2\operatorname{Var}(Y)$, and the variance of a sum of
*independent* variables is the sum of their variances (the covariances are zero). So

$$
\operatorname{Var}(\bar{X}) = \frac{1}{n^2}\operatorname{Var}\Big(\sum_{i=1}^n X_i\Big) = \frac{1}{n^2}\sum_{i=1}^n
\operatorname{Var}(X_i) = \frac{1}{n^2} \cdot n\sigma^2 = \frac{\sigma^2}{n}.
$$

Take the square root for the standard error. $\blacksquare$

Three lessons are packed into $\sigma/\sqrt{n}$.

1. **Averages are more stable than single values.** That is why we average.
2. **The square root law.** To halve the standard error you need four times the data; to cut it by ten, a hundred
   times. Precision is expensive.
3. **The population size does not appear.** A random sample of 1,000 is about as precise for a country of 40 million as
   for a city of 400,000. What matters is $n$, not $n/N$ (as long as $n$ is a small fraction of $N$).

**Example 6.1 (a die).** One roll of a fair die has $\mu = 3.5$ and $\sigma^2 = 35/12$, so $\sigma \approx 1.708$.
The mean of $n$ rolls has standard error $1.708/\sqrt{n}$:

| $n$ | 1 | 4 | 25 | 100 |
|---|---|---|---|---|
| SE of $\bar{X}$ | 1.708 | 0.854 | 0.342 | 0.171 |

For $n = 2$ the sampling distribution is easy to list: the mean of two dice takes the values $1, 1.5, \dots, 6$ with
counts $1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1$ out of 36, a triangle. Already one roll's flat distribution has become peaked
in the middle.

### The estimated standard error

The formula $\sigma/\sqrt{n}$ needs $\sigma$, which we usually do not know. We replace it with the sample standard
deviation $s$ and report the **estimated standard error** $s/\sqrt{n}$. It is the number printed next to a mean in
almost every scientific table. Replacing $\sigma$ by $s$ costs something when $n$ is small; [Chapter 8](08-Confidence-Intervals.md)
shows exactly what (Student's $t$).

**Example 6.2.** A made-up sample of 25 measurements has $\bar{x} = 41.2$ and $s = 6.0$. The estimated standard error
is $6.0/\sqrt{25} = 1.2$. The data vary by about 6 around their mean; the *mean* would vary by only about 1.2 from one
sample of 25 to another.

### Sampling without replacement: the finite population correction

*Level: advanced.*

In the four-number example, the variance of $\bar{x}$ was $10/6$, not $\sigma^2/n = 5/2$. The difference is that we
sampled *without* replacement, so the draws were not independent: once 8 is drawn, it cannot be drawn again, and the
next draw tends to be smaller.

**Theorem (finite population correction).** For a simple random sample of size $n$ from a population of $N$ values with
mean $\mu$ and variance $\sigma^2$ (divisor $N$),

$$
E[\bar{X}] = \mu, \qquad \operatorname{Var}(\bar{X}) = \frac{\sigma^2}{n}\cdot\frac{N-n}{N-1}.
$$

*Proof.* Let $X_i$ be the value of the $i$-th unit drawn. By symmetry each $X_i$ is a uniformly random member of the
population, so $E[X_i] = \mu$ and $\operatorname{Var}(X_i) = \sigma^2$, which gives $E[\bar{X}] = \mu$. Also by
symmetry every pair $X_i, X_j$ with $i \ne j$ has the same covariance; call it $c$.

To find $c$, imagine drawing *all* $N$ units ($n = N$). Then $X_1 + \dots + X_N$ is the population total, a fixed
number, so its variance is zero:

$$
0 = \operatorname{Var}\Big(\sum_{i=1}^N X_i\Big) = N\sigma^2 + N(N-1)c, \qquad\text{so}\qquad c = -\frac{\sigma^2}{N-1}.
$$

The covariance of two draws depends only on the population, not on how many draws come after, so the same $c$ holds for
any $n$. Then

$$
\operatorname{Var}\Big(\sum_{i=1}^n X_i\Big) = n\sigma^2 + n(n-1)\Big(-\frac{\sigma^2}{N-1}\Big)
= n\sigma^2\Big(1 - \frac{n-1}{N-1}\Big) = n\sigma^2\,\frac{N-n}{N-1},
$$

and dividing by $n^2$ gives the result. $\blacksquare$

*Check:* for $\{2,4,6,8\}$ with $n = 2$: $\frac{5}{2}\cdot\frac{4-2}{4-1} = \frac{5}{2}\cdot\frac{2}{3} = \frac{5}{3} \approx 1.67$, as we found by listing.

The factor $\frac{N-n}{N-1}$, roughly $1 - n/N$, is the **finite population correction** (fpc). It matters only when
the sample is a sizeable fraction of the population. For a sample of 1,000 from 400,000 it is $0.9975$; we ignore it.
When $n = N$ it is zero: a census has no sampling error.

## 6.3 The central limit theorem in practice

### The statement we use

The theorem above gives the centre and spread of $\bar{X}$. The **central limit theorem** (CLT) gives the shape. It is
proved in [Probability, Chapter 12](../probability/12-The-Central-Limit-Theorem.md); here is the version statisticians
use.

**Central limit theorem.** If $X_1, X_2, \dots$ are iid with mean $\mu$ and finite variance $\sigma^2 > 0$, then for
every number $z$,

$$
P\Big(\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \le z\Big) \to \Phi(z) \quad \text{as } n \to \infty,
$$

where $\Phi$ is the standard normal cumulative distribution function.

In words: for large $n$, $\bar{X}$ is approximately normal with mean $\mu$ and standard deviation $\sigma/\sqrt{n}$,
**whatever the shape of the population**, as long as its variance is finite. We write
$\bar{X} \approx N(\mu, \sigma^2/n)$.

This is why the normal curve is everywhere in statistics. Individual measurements are often far from normal; averages
and totals of many of them are close to normal.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 260" role="img" aria-label="Density curves of the mean of n waiting times, each exponential with mean 2. For n = 1 the curve starts high at zero and falls steadily. For n = 5 it is a skewed hump peaking near 1.6. For n = 40 it is a narrow, nearly symmetric bell centred at 2.">
<line x1="60" y1="210" x2="560" y2="210" stroke="currentColor" stroke-width="1.5"/>
<line x1="60" y1="210" x2="60" y2="30" stroke="currentColor" stroke-width="1.5"/>
<line x1="60.0" y1="210" x2="60.0" y2="214" stroke="currentColor"/><text x="60.0" y="228" text-anchor="middle" font-size="11" fill="currentColor">0</text>
<line x1="143.3" y1="210" x2="143.3" y2="214" stroke="currentColor"/><text x="143.3" y="228" text-anchor="middle" font-size="11" fill="currentColor">1</text>
<line x1="226.7" y1="210" x2="226.7" y2="214" stroke="currentColor"/><text x="226.7" y="228" text-anchor="middle" font-size="11" fill="currentColor">2</text>
<line x1="310.0" y1="210" x2="310.0" y2="214" stroke="currentColor"/><text x="310.0" y="228" text-anchor="middle" font-size="11" fill="currentColor">3</text>
<line x1="393.3" y1="210" x2="393.3" y2="214" stroke="currentColor"/><text x="393.3" y="228" text-anchor="middle" font-size="11" fill="currentColor">4</text>
<line x1="476.7" y1="210" x2="476.7" y2="214" stroke="currentColor"/><text x="476.7" y="228" text-anchor="middle" font-size="11" fill="currentColor">5</text>
<line x1="560.0" y1="210" x2="560.0" y2="214" stroke="currentColor"/><text x="560.0" y="228" text-anchor="middle" font-size="11" fill="currentColor">6</text>
<line x1="56" y1="144.6" x2="60" y2="144.6" stroke="currentColor"/><text x="52" y="148.6" text-anchor="end" font-size="11" fill="currentColor">0.5</text>
<line x1="56" y1="79.2" x2="60" y2="79.2" stroke="currentColor"/><text x="52" y="83.2" text-anchor="end" font-size="11" fill="currentColor">1.0</text>
<polyline points="60.0,144.6 61.7,145.3 63.3,145.9 65.0,146.5 66.7,147.2 68.3,147.8 70.0,148.4 71.7,149.0 73.3,149.6 75.0,150.2 76.7,150.8 78.3,151.4 80.0,152.0 81.7,152.6 83.3,153.2 85.0,153.7 86.7,154.3 88.3,154.8 90.0,155.4 91.7,155.9 93.3,156.5 95.0,157.0 96.7,157.5 98.3,158.0 100.0,158.6 101.7,159.1 103.3,159.6 105.0,160.1 106.7,160.6 108.3,161.1 110.0,161.6 111.7,162.0 113.3,162.5 115.0,163.0 116.7,163.5 118.3,163.9 120.0,164.4 121.7,164.8 123.3,165.3 125.0,165.7 126.7,166.2 128.3,166.6 130.0,167.0 131.7,167.5 133.3,167.9 135.0,168.3 136.7,168.7 138.3,169.1 140.0,169.5 141.7,169.9 143.3,170.3 145.0,170.7 146.7,171.1 148.3,171.5 150.0,171.9 151.7,172.3 153.3,172.7 155.0,173.0 156.7,173.4 158.3,173.8 160.0,174.1 161.7,174.5 163.3,174.8 165.0,175.2 166.7,175.5 168.3,175.9 170.0,176.2 171.7,176.5 173.3,176.9 175.0,177.2 176.7,177.5 178.3,177.9 180.0,178.2 181.7,178.5 183.3,178.8 185.0,179.1 186.7,179.4 188.3,179.7 190.0,180.0 191.7,180.3 193.3,180.6 195.0,180.9 196.7,181.2 198.3,181.5 200.0,181.8 201.7,182.1 203.3,182.3 205.0,182.6 206.7,182.9 208.3,183.1 210.0,183.4 211.7,183.7 213.3,183.9 215.0,184.2 216.7,184.5 218.3,184.7 220.0,185.0 221.7,185.2 223.3,185.5 225.0,185.7 226.7,185.9 228.3,186.2 230.0,186.4 231.7,186.7 233.3,186.9 235.0,187.1 236.7,187.3 238.3,187.6 240.0,187.8 241.7,188.0 243.3,188.2 245.0,188.5 246.7,188.7 248.3,188.9 250.0,189.1 251.7,189.3 253.3,189.5 255.0,189.7 256.7,189.9 258.3,190.1 260.0,190.3 261.7,190.5 263.3,190.7 265.0,190.9 266.7,191.1 268.3,191.3 270.0,191.5 271.7,191.6 273.3,191.8 275.0,192.0 276.7,192.2 278.3,192.4 280.0,192.5 281.7,192.7 283.3,192.9 285.0,193.0 286.7,193.2 288.3,193.4 290.0,193.6 291.7,193.7 293.3,193.9 295.0,194.0 296.7,194.2 298.3,194.4 300.0,194.5 301.7,194.7 303.3,194.8 305.0,195.0 306.7,195.1 308.3,195.3 310.0,195.4 311.7,195.6 313.3,195.7 315.0,195.8 316.7,196.0 318.3,196.1 320.0,196.3 321.7,196.4 323.3,196.5 325.0,196.7 326.7,196.8 328.3,196.9 330.0,197.1 331.7,197.2 333.3,197.3 335.0,197.4 336.7,197.6 338.3,197.7 340.0,197.8 341.7,197.9 343.3,198.1 345.0,198.2 346.7,198.3 348.3,198.4 350.0,198.5 351.7,198.6 353.3,198.8 355.0,198.9 356.7,199.0 358.3,199.1 360.0,199.2 361.7,199.3 363.3,199.4 365.0,199.5 366.7,199.6 368.3,199.7 370.0,199.8 371.7,199.9 373.3,200.0 375.0,200.1 376.7,200.2 378.3,200.3 380.0,200.4 381.7,200.5 383.3,200.6 385.0,200.7 386.7,200.8 388.3,200.9 390.0,201.0 391.7,201.1 393.3,201.2 395.0,201.2 396.7,201.3 398.3,201.4 400.0,201.5 401.7,201.6 403.3,201.7 405.0,201.7 406.7,201.8 408.3,201.9 410.0,202.0 411.7,202.1 413.3,202.2 415.0,202.2 416.7,202.3 418.3,202.4 420.0,202.5 421.7,202.5 423.3,202.6 425.0,202.7 426.7,202.8 428.3,202.8 430.0,202.9 431.7,203.0 433.3,203.0 435.0,203.1 436.7,203.2 438.3,203.2 440.0,203.3 441.7,203.4 443.3,203.4 445.0,203.5 446.7,203.6 448.3,203.6 450.0,203.7 451.7,203.8 453.3,203.8 455.0,203.9 456.7,203.9 458.3,204.0 460.0,204.1 461.7,204.1 463.3,204.2 465.0,204.2 466.7,204.3 468.3,204.4 470.0,204.4 471.7,204.5 473.3,204.5 475.0,204.6 476.7,204.6 478.3,204.7 480.0,204.7 481.7,204.8 483.3,204.8 485.0,204.9 486.7,204.9 488.3,205.0 490.0,205.0 491.7,205.1 493.3,205.1 495.0,205.2 496.7,205.2 498.3,205.3 500.0,205.3 501.7,205.4 503.3,205.4 505.0,205.5 506.7,205.5 508.3,205.6 510.0,205.6 511.7,205.6 513.3,205.7 515.0,205.7 516.7,205.8 518.3,205.8 520.0,205.9 521.7,205.9 523.3,205.9 525.0,206.0 526.7,206.0 528.3,206.1 530.0,206.1 531.7,206.1 533.3,206.2 535.0,206.2 536.7,206.3 538.3,206.3 540.0,206.3 541.7,206.4 543.3,206.4 545.0,206.4 546.7,206.5 548.3,206.5 550.0,206.5 551.7,206.6 553.3,206.6 555.0,206.6 556.7,206.7 558.3,206.7 560.0,206.7" fill="none" stroke="#eea66f" stroke-width="3"/>
<polyline points="60.0,210.0 61.7,210.0 63.3,210.0 65.0,210.0 66.7,210.0 68.3,210.0 70.0,209.9 71.7,209.9 73.3,209.8 75.0,209.6 76.7,209.5 78.3,209.3 80.0,209.0 81.7,208.7 83.3,208.4 85.0,208.0 86.7,207.5 88.3,207.0 90.0,206.4 91.7,205.7 93.3,205.0 95.0,204.2 96.7,203.4 98.3,202.5 100.0,201.5 101.7,200.5 103.3,199.4 105.0,198.3 106.7,197.1 108.3,195.9 110.0,194.6 111.7,193.3 113.3,192.0 115.0,190.6 116.7,189.2 118.3,187.8 120.0,186.4 121.7,184.9 123.3,183.4 125.0,182.0 126.7,180.5 128.3,179.0 130.0,177.6 131.7,176.1 133.3,174.6 135.0,173.2 136.7,171.8 138.3,170.4 140.0,169.0 141.7,167.6 143.3,166.3 145.0,165.0 146.7,163.8 148.3,162.5 150.0,161.3 151.7,160.2 153.3,159.1 155.0,158.0 156.7,157.0 158.3,156.0 160.0,155.1 161.7,154.2 163.3,153.3 165.0,152.5 166.7,151.8 168.3,151.1 170.0,150.4 171.7,149.8 173.3,149.2 175.0,148.7 176.7,148.3 178.3,147.9 180.0,147.5 181.7,147.2 183.3,146.9 185.0,146.6 186.7,146.5 188.3,146.3 190.0,146.2 191.7,146.2 193.3,146.1 195.0,146.1 196.7,146.2 198.3,146.3 200.0,146.4 201.7,146.6 203.3,146.8 205.0,147.0 206.7,147.3 208.3,147.6 210.0,147.9 211.7,148.3 213.3,148.7 215.0,149.1 216.7,149.5 218.3,150.0 220.0,150.5 221.7,151.0 223.3,151.5 225.0,152.1 226.7,152.6 228.3,153.2 230.0,153.8 231.7,154.4 233.3,155.1 235.0,155.7 236.7,156.3 238.3,157.0 240.0,157.7 241.7,158.4 243.3,159.1 245.0,159.8 246.7,160.5 248.3,161.2 250.0,161.9 251.7,162.6 253.3,163.3 255.0,164.1 256.7,164.8 258.3,165.5 260.0,166.2 261.7,167.0 263.3,167.7 265.0,168.4 266.7,169.2 268.3,169.9 270.0,170.6 271.7,171.3 273.3,172.0 275.0,172.7 276.7,173.4 278.3,174.1 280.0,174.8 281.7,175.5 283.3,176.2 285.0,176.9 286.7,177.6 288.3,178.2 290.0,178.9 291.7,179.5 293.3,180.2 295.0,180.8 296.7,181.4 298.3,182.1 300.0,182.7 301.7,183.3 303.3,183.9 305.0,184.5 306.7,185.0 308.3,185.6 310.0,186.2 311.7,186.7 313.3,187.3 315.0,187.8 316.7,188.3 318.3,188.8 320.0,189.3 321.7,189.8 323.3,190.3 325.0,190.8 326.7,191.3 328.3,191.7 330.0,192.2 331.7,192.6 333.3,193.1 335.0,193.5 336.7,193.9 338.3,194.3 340.0,194.7 341.7,195.1 343.3,195.5 345.0,195.9 346.7,196.3 348.3,196.6 350.0,197.0 351.7,197.3 353.3,197.7 355.0,198.0 356.7,198.3 358.3,198.7 360.0,199.0 361.7,199.3 363.3,199.6 365.0,199.9 366.7,200.1 368.3,200.4 370.0,200.7 371.7,200.9 373.3,201.2 375.0,201.5 376.7,201.7 378.3,201.9 380.0,202.2 381.7,202.4 383.3,202.6 385.0,202.8 386.7,203.0 388.3,203.2 390.0,203.4 391.7,203.6 393.3,203.8 395.0,204.0 396.7,204.2 398.3,204.4 400.0,204.5 401.7,204.7 403.3,204.8 405.0,205.0 406.7,205.2 408.3,205.3 410.0,205.4 411.7,205.6 413.3,205.7 415.0,205.8 416.7,206.0 418.3,206.1 420.0,206.2 421.7,206.3 423.3,206.5 425.0,206.6 426.7,206.7 428.3,206.8 430.0,206.9 431.7,207.0 433.3,207.1 435.0,207.2 436.7,207.3 438.3,207.3 440.0,207.4 441.7,207.5 443.3,207.6 445.0,207.7 446.7,207.7 448.3,207.8 450.0,207.9 451.7,208.0 453.3,208.0 455.0,208.1 456.7,208.1 458.3,208.2 460.0,208.3 461.7,208.3 463.3,208.4 465.0,208.4 466.7,208.5 468.3,208.5 470.0,208.6 471.7,208.6 473.3,208.7 475.0,208.7 476.7,208.8 478.3,208.8 480.0,208.8 481.7,208.9 483.3,208.9 485.0,209.0 486.7,209.0 488.3,209.0 490.0,209.1 491.7,209.1 493.3,209.1 495.0,209.2 496.7,209.2 498.3,209.2 500.0,209.2 501.7,209.3 503.3,209.3 505.0,209.3 506.7,209.3 508.3,209.4 510.0,209.4 511.7,209.4 513.3,209.4 515.0,209.4 516.7,209.5 518.3,209.5 520.0,209.5 521.7,209.5 523.3,209.5 525.0,209.5 526.7,209.6 528.3,209.6 530.0,209.6 531.7,209.6 533.3,209.6 535.0,209.6 536.7,209.6 538.3,209.7 540.0,209.7 541.7,209.7 543.3,209.7 545.0,209.7 546.7,209.7 548.3,209.7 550.0,209.7 551.7,209.7 553.3,209.8 555.0,209.8 556.7,209.8 558.3,209.8 560.0,209.8" fill="none" stroke="#9cc9ea" stroke-width="3"/>
<polyline points="60.0,210.0 61.7,210.0 63.3,210.0 65.0,210.0 66.7,210.0 68.3,210.0 70.0,210.0 71.7,210.0 73.3,210.0 75.0,210.0 76.7,210.0 78.3,210.0 80.0,210.0 81.7,210.0 83.3,210.0 85.0,210.0 86.7,210.0 88.3,210.0 90.0,210.0 91.7,210.0 93.3,210.0 95.0,210.0 96.7,210.0 98.3,210.0 100.0,210.0 101.7,210.0 103.3,210.0 105.0,210.0 106.7,210.0 108.3,210.0 110.0,210.0 111.7,210.0 113.3,210.0 115.0,210.0 116.7,210.0 118.3,210.0 120.0,210.0 121.7,210.0 123.3,210.0 125.0,210.0 126.7,210.0 128.3,210.0 130.0,210.0 131.7,210.0 133.3,210.0 135.0,210.0 136.7,210.0 138.3,210.0 140.0,209.9 141.7,209.9 143.3,209.9 145.0,209.8 146.7,209.7 148.3,209.6 150.0,209.4 151.7,209.2 153.3,208.9 155.0,208.5 156.7,208.1 158.3,207.5 160.0,206.7 161.7,205.8 163.3,204.7 165.0,203.4 166.7,201.8 168.3,200.0 170.0,197.8 171.7,195.3 173.3,192.5 175.0,189.3 176.7,185.6 178.3,181.6 180.0,177.1 181.7,172.3 183.3,167.0 185.0,161.4 186.7,155.4 188.3,149.0 190.0,142.4 191.7,135.5 193.3,128.5 195.0,121.3 196.7,114.0 198.3,106.8 200.0,99.6 201.7,92.6 203.3,85.8 205.0,79.4 206.7,73.2 208.3,67.6 210.0,62.4 211.7,57.7 213.3,53.7 215.0,50.3 216.7,47.5 218.3,45.4 220.0,44.1 221.7,43.4 223.3,43.4 225.0,44.0 226.7,45.4 228.3,47.3 230.0,49.9 231.7,53.0 233.3,56.6 235.0,60.6 236.7,65.1 238.3,69.9 240.0,75.0 241.7,80.4 243.3,85.9 245.0,91.6 246.7,97.4 248.3,103.3 250.0,109.1 251.7,114.9 253.3,120.7 255.0,126.3 256.7,131.8 258.3,137.2 260.0,142.4 261.7,147.3 263.3,152.1 265.0,156.6 266.7,160.9 268.3,165.0 270.0,168.9 271.7,172.5 273.3,175.8 275.0,179.0 276.7,181.9 278.3,184.6 280.0,187.1 281.7,189.4 283.3,191.5 285.0,193.4 286.7,195.2 288.3,196.8 290.0,198.2 291.7,199.6 293.3,200.7 295.0,201.8 296.7,202.8 298.3,203.6 300.0,204.4 301.7,205.1 303.3,205.7 305.0,206.2 306.7,206.7 308.3,207.1 310.0,207.5 311.7,207.8 313.3,208.1 315.0,208.4 316.7,208.6 318.3,208.8 320.0,209.0 321.7,209.1 323.3,209.2 325.0,209.3 326.7,209.4 328.3,209.5 330.0,209.6 331.7,209.6 333.3,209.7 335.0,209.7 336.7,209.8 338.3,209.8 340.0,209.8 341.7,209.9 343.3,209.9 345.0,209.9 346.7,209.9 348.3,209.9 350.0,209.9 351.7,210.0 353.3,210.0 355.0,210.0 356.7,210.0 358.3,210.0 360.0,210.0 361.7,210.0 363.3,210.0 365.0,210.0 366.7,210.0 368.3,210.0 370.0,210.0 371.7,210.0 373.3,210.0 375.0,210.0 376.7,210.0 378.3,210.0 380.0,210.0 381.7,210.0 383.3,210.0 385.0,210.0 386.7,210.0 388.3,210.0 390.0,210.0 391.7,210.0 393.3,210.0 395.0,210.0 396.7,210.0 398.3,210.0 400.0,210.0 401.7,210.0 403.3,210.0 405.0,210.0 406.7,210.0 408.3,210.0 410.0,210.0 411.7,210.0 413.3,210.0 415.0,210.0 416.7,210.0 418.3,210.0 420.0,210.0 421.7,210.0 423.3,210.0 425.0,210.0 426.7,210.0 428.3,210.0 430.0,210.0 431.7,210.0 433.3,210.0 435.0,210.0 436.7,210.0 438.3,210.0 440.0,210.0 441.7,210.0 443.3,210.0 445.0,210.0 446.7,210.0 448.3,210.0 450.0,210.0 451.7,210.0 453.3,210.0 455.0,210.0 456.7,210.0 458.3,210.0 460.0,210.0 461.7,210.0 463.3,210.0 465.0,210.0 466.7,210.0 468.3,210.0 470.0,210.0 471.7,210.0 473.3,210.0 475.0,210.0 476.7,210.0 478.3,210.0 480.0,210.0 481.7,210.0 483.3,210.0 485.0,210.0 486.7,210.0 488.3,210.0 490.0,210.0 491.7,210.0 493.3,210.0 495.0,210.0 496.7,210.0 498.3,210.0 500.0,210.0 501.7,210.0 503.3,210.0 505.0,210.0 506.7,210.0 508.3,210.0 510.0,210.0 511.7,210.0 513.3,210.0 515.0,210.0 516.7,210.0 518.3,210.0 520.0,210.0 521.7,210.0 523.3,210.0 525.0,210.0 526.7,210.0 528.3,210.0 530.0,210.0 531.7,210.0 533.3,210.0 535.0,210.0 536.7,210.0 538.3,210.0 540.0,210.0 541.7,210.0 543.3,210.0 545.0,210.0 546.7,210.0 548.3,210.0 550.0,210.0 551.7,210.0 553.3,210.0 555.0,210.0 556.7,210.0 558.3,210.0 560.0,210.0" fill="none" stroke="#7ccf9a" stroke-width="3"/>
<line x1="400" y1="40" x2="430" y2="40" stroke="#eea66f" stroke-width="3"/><text x="438" y="44" font-size="12" fill="currentColor">n = 1</text>
<line x1="400" y1="62" x2="430" y2="62" stroke="#9cc9ea" stroke-width="3"/><text x="438" y="66" font-size="12" fill="currentColor">n = 5</text>
<line x1="400" y1="84" x2="430" y2="84" stroke="#7ccf9a" stroke-width="3"/><text x="438" y="88" font-size="12" fill="currentColor">n = 40</text>
<line x1="226.7" y1="210" x2="226.7" y2="40.0" stroke="currentColor" stroke-dasharray="4 4" stroke-width="1"/>
<text x="310" y="250" text-anchor="middle" font-size="12" fill="currentColor">value of the sample mean (true mean 2)</text>
</svg>
</div>

### Using it

**Example 6.3 (made-up waiting times).** Waiting times at a counter are exponential with mean 2 minutes (and so
standard deviation 2). What is the chance that the average of 40 waits exceeds 2.5 minutes?

The SE is $2/\sqrt{40} \approx 0.316$, so $z = (2.5 - 2)/0.316 \approx 1.58$, and the CLT gives
$P(\bar{X} > 2.5) \approx 1 - \Phi(1.58) \approx 0.057$.

Here we can check exactly. A sum of $n$ independent exponentials with mean 2 has a gamma distribution
([Probability, Chapter 11](../probability/11-Joint-Distributions.md)), and the exact answer, computed with that
gamma law, is about $0.065$. The approximation is decent but not perfect, because the exponential is strongly skewed.

**Example 6.4 (dice, with a continuity correction).** Roll 25 dice. What is the chance their average is at least 4,
that is, their sum is at least 100? The sum has mean $87.5$ and standard deviation $5 \times 1.708 = 8.54$.

- Without correction: $P(S \ge 100) \approx 1 - \Phi\big((100 - 87.5)/8.54\big) = 1 - \Phi(1.46) \approx 0.072$.
- The sum takes only whole values, so "at least 100" is better matched by the normal area above 99.5 (the
  **continuity correction**): $1 - \Phi\big((99.5 - 87.5)/8.54\big) = 1 - \Phi(1.41) \approx 0.080$.
- Exact (adding up all $6^{25}$ outcomes by computer convolution): $0.0803$.

The corrected approximation is excellent. The die is symmetric, so the CLT works fast.

### How large must $n$ be?

Textbooks often say "$n \ge 30$". That is a rough rule, not a theorem, and it can be badly wrong in both directions.

- For a **symmetric** population with light tails (a die, a uniform, a normal), $n = 5$ or $10$ is already fine.
- For a **skewed** population, convergence is slower. The table compares the exact probability that the mean of $n$
  exponential waits lands above $\mu + 1.645\,\sigma/\sqrt{n}$ (which the normal approximation says is 0.05) and below
  $\mu - 1.645\,\sigma/\sqrt{n}$ (also 0.05 by the normal):

| $n$ | upper tail, exact | lower tail, exact |
|---|---|---|
| 5 | 0.067 | 0.011 |
| 10 | 0.064 | 0.025 |
| 30 | 0.059 | 0.037 |
| 100 | 0.055 | 0.044 |

Even at $n = 100$ the two tails are unbalanced. For populations with heavier skew (incomes, insurance claims, file
sizes) you may need thousands.

- For populations with **infinite variance** (the Cauchy law, or very heavy-tailed data), the CLT does not apply at
  all: see the failures in [Probability, Chapter 12](../probability/12-The-Central-Limit-Theorem.md).

### Why skewness fades like $1/\sqrt{n}$

*Level: intermediate.*

The **skewness** of a random variable $Y$ with mean $m$ and standard deviation $\tau$ is
$\gamma(Y) = E[(Y - m)^3]/\tau^3$: zero for a symmetric law, positive when the right tail is longer. For the exponential
law it is 2.

**Proposition.** If $X_1, \dots, X_n$ are iid with skewness $\gamma$, then $\bar{X}$ has skewness $\gamma/\sqrt{n}$.

*Proof.* Skewness does not change when we shift or rescale by a positive number, so we may study the sum
$S = \sum Y_i$ of the centred variables $Y_i = X_i - \mu$. Expand $E[S^3] = \sum_{i,j,k} E[Y_iY_jY_k]$. If one index
differs from the other two, independence lets that factor split off with expectation $E[Y_i] = 0$. So only the terms
$i = j = k$ survive, and $E[S^3] = n\,E[Y_1^3] = n\gamma\sigma^3$. The variance of $S$ is $n\sigma^2$, so

$$
\gamma(S) = \frac{n\gamma\sigma^3}{(n\sigma^2)^{3/2}} = \frac{\gamma}{\sqrt{n}}. \qquad \blacksquare
$$

For exponential waits, the mean of 40 still has skewness $2/\sqrt{40} \approx 0.32$, which is why Example 6.3 was off.
A useful habit: the more skewed your data look, the more you should distrust the normal approximation for small $n$,
and the more attractive the bootstrap of 6.6 becomes.

### Other statistics

The CLT is about means, but many statistics behave like means for large $n$ and are approximately normal too. One
example, stated without proof: for a continuous population with density $f$ and median $m$ (with $f(m) > 0$), the
sample median is approximately normal with mean $m$ and standard error $\frac{1}{2f(m)\sqrt{n}}$. For a normal
population this is $\sqrt{\pi/2}\,\sigma/\sqrt{n} \approx 1.25\,\sigma/\sqrt{n}$: the median is about 25 percent noisier
than the mean for normal data, the price of its robustness ([Chapter 3](03-Summaries.md)). Formulas like this need
$f(m)$, which is hard to estimate; the bootstrap avoids it.

## 6.4 Proportions

### A proportion is a mean

Ask $n$ randomly chosen people a yes/no question. Code each answer $X_i = 1$ for yes and $0$ for no. If a fraction $p$
of the population would say yes, each $X_i$ is a **Bernoulli** variable with $E[X_i] = p$ and
$\operatorname{Var}(X_i) = p(1-p)$. The sample proportion is

$$
\hat{p} = \frac{\text{number of yes}}{n} = \bar{X}.
$$

So everything in 6.2 and 6.3 applies at once. The count $n\hat{p}$ has a binomial distribution
([Probability, Chapter 5](../probability/05-Discrete-Random-Variables.md)), and

$$
E[\hat{p}] = p, \qquad \operatorname{SE}(\hat{p}) = \sqrt{\frac{p(1-p)}{n}} .
$$

For large $n$, $\hat{p} \approx N\big(p,\ p(1-p)/n\big)$. A common rule says the approximation is reasonable when both
$np$ and $n(1-p)$ are at least 10 (some books say 5); like "$n \ge 30$", it is a guide, not a guarantee.

**Example 6.5.** In a population 30 percent own a bicycle (made up). In a random sample of 200, what is the chance that
25 percent or fewer own one?

- SE: $\sqrt{0.3 \times 0.7/200} \approx 0.0324$.
- Normal approximation: $\Phi\big((0.25 - 0.30)/0.0324\big) = \Phi(-1.54) \approx 0.061$.
- With continuity correction ($\hat{p} \le 0.25$ means count $\le 50$, so use 50.5): $\Phi\big((50.5/200 - 0.3)/0.0324\big) = \Phi(-1.47) \approx 0.071$.
- Exact binomial sum: $P(\text{count} \le 50) \approx 0.0695$.

### The largest standard error, and the quick margin of error

The function $p(1-p)$ is largest at $p = \tfrac12$, where it equals $\tfrac14$ (since
$p(1-p) = \tfrac14 - (p - \tfrac12)^2$). So for every $p$,

$$
\operatorname{SE}(\hat{p}) \le \frac{1}{2\sqrt{n}} .
$$

About 95 percent of a normal distribution lies within 2 standard deviations of its centre, so $\hat{p}$ is within
$2 \cdot \frac{1}{2\sqrt{n}} = \frac{1}{\sqrt{n}}$ of $p$ about 95 percent of the time, whatever $p$ is. This is the
pollster's **quick margin of error**: for $n = 1000$, $1/\sqrt{1000} \approx 0.032$, the familiar "plus or minus 3
points". It covers only random sampling error, not any of the biases of [Chapter 5](05-Sampling-and-Experiments.md).
[Chapter 8](08-Confidence-Intervals.md) makes it precise.

## 6.5 Simulation: seeing it happen

A sampling distribution is a statement about *all* the samples you could have drawn. A computer can draw thousands of
them in a second, so we can look at the distribution directly instead of trusting a formula.

The first person to do this was William Sealy Gosset ("Student"), in his 1908 paper on the $t$ distribution
([Chapter 8](08-Confidence-Intervals.md)). With no computer, he wrote the heights and finger measurements of 3,000
criminals (from a published anthropometric data set) on pieces of card, shuffled them, and drew 750 samples of 4, to
check his formula for the distribution of a standardised mean. Today it takes three lines.

### Means of exponential waits

```python
import random, statistics as st
random.seed(1)
for n in (1, 5, 40):
    means = [st.fmean(random.expovariate(0.5) for _ in range(n))   # mean-2 exponential waits
             for _ in range(10000)]                                 # 10,000 samples of size n
    print(n, round(st.fmean(means), 3), round(st.pstdev(means), 3))
```

The output, with the theoretical standard error $2/\sqrt{n}$ added:

| $n$ | average of the 10,000 means | SD of the 10,000 means | theory $2/\sqrt{n}$ |
|---|---|---|---|
| 1 | 1.999 | 2.009 | 2.000 |
| 5 | 2.018 | 0.900 | 0.894 |
| 40 | 1.998 | 0.315 | 0.316 |

The simulated centre matches $\mu = 2$ and the simulated spread matches $\sigma/\sqrt{n}$, up to the small error that
comes from using 10,000 samples rather than infinitely many. A histogram of the `means` list (try
`statistics.quantiles` or a plotting library) shows the shapes in the figure of 6.3: skewed for $n = 5$, nearly normal
for $n = 40$.

### Proportions

```python
random.seed(7)
props = [sum(random.random() < 0.3 for _ in range(200)) / 200 for _ in range(10000)]
print(st.fmean(props), st.pstdev(props), sum(p <= 0.25 for p in props) / 10000)
```

This prints about $0.300$, $0.032$ and $0.066$: the centre $p = 0.3$, the SE $0.0324$, and a tail probability close to
the exact $0.0695$ of Example 6.5.

### How accurate is a simulation?

A simulation is itself a sample, of size $B$ (here $B = 10{,}000$), from the sampling distribution. A probability
estimated as a fraction of $B$ simulated samples has standard error $\sqrt{q(1-q)/B}$, where $q$ is the true
probability. For $q \approx 0.07$ and $B = 10{,}000$ that is about $0.0026$, so $0.066$ against $0.0695$ is a perfectly
ordinary difference. To get one more decimal place, multiply $B$ by 100. This **Monte Carlo error** is separate from,
and usually much smaller than, the sampling error we are studying.

### What simulation is good for

Simulation answers "what if" questions that formulas cannot: the sampling distribution of a median, of a trimmed
mean, of a ratio, of a correlation; the effect of skewness, outliers or a small $n$; whether a method keeps its promised
error rate. Statisticians use it constantly to check methods before trusting them. Its one limitation is that it needs
the population to be known. With real data we do not know the population, which leads to the bootstrap.

## 6.6 The bootstrap idea

*Level: intermediate, with advanced proofs.*

### The problem

You have one sample, $x_1, \dots, x_n$. You compute a statistic, perhaps the median, and you want its standard error.
For the mean there is a formula, $s/\sqrt{n}$. For the median the formula in 6.3 needs the population density at the
median, which you do not know. For a trimmed mean, a ratio, or the largest eigenvalue of a correlation matrix there may
be no usable formula at all.

If you knew the population, you could simulate: draw many samples of size $n$, compute the statistic for each, and
look at the spread. You do not know the population. But you have the next best thing: the sample itself.

### The plug-in principle

The **empirical distribution** $\hat{F}$ of the data is the distribution that puts probability $1/n$ on each observed
value $x_1, \dots, x_n$. It is our best guess of the population. The **bootstrap** says: treat $\hat{F}$ as if it were
the population, and simulate from it.

Drawing a sample of size $n$ from $\hat{F}$ means drawing $n$ times **with replacement** from the data. Such a sample
is a **bootstrap resample**, written $x_1^*, \dots, x_n^*$. Some data values appear in it more than once, others not at
all.

**The bootstrap standard error.**

1. Draw $B$ resamples (typically $B$ = 1,000 to 10,000), each of size $n$, with replacement from the data.
2. For each, compute the statistic: $\hat{\theta}^*_1, \dots, \hat{\theta}^*_B$.
3. The standard deviation of these $B$ values is the bootstrap estimate of the standard error.

The name comes from the phrase "to pull oneself up by one's bootstraps": the data are used to assess themselves.
Bradley Efron introduced the method in "Bootstrap methods: another look at the jackknife" in the *Annals of Statistics*
in 1979. It was one of the first statistical methods designed around cheap computing, and it changed everyday practice.

### Example

**Example 6.6 (made-up data).** Ten walking times, in minutes:

$$
12,\ 15,\ 9,\ 22,\ 14,\ 31,\ 11,\ 17,\ 13,\ 19 .
$$

The mean is $16.3$, the median is $14.5$, $s \approx 6.447$, and the usual standard error of the mean is
$s/\sqrt{10} \approx 2.04$.

```python
import random, statistics as st
x = [12, 15, 9, 22, 14, 31, 11, 17, 13, 19]
random.seed(2026)
boot_means, boot_medians = [], []
for _ in range(2000):
    r = random.choices(x, k=len(x))          # one resample, with replacement
    boot_means.append(st.fmean(r))
    boot_medians.append(st.median(r))
print(st.stdev(boot_means), st.stdev(boot_medians))
```

This prints about $1.98$ for the mean and about $2.07$ for the median. The bootstrap SE of the mean agrees well with
the formula. For the median we had no formula, and now we have an answer.

### What the bootstrap gives for the mean, exactly

**Proposition.** With infinitely many resamples ($B \to \infty$), the bootstrap variance of the sample mean equals
$\hat{\sigma}^2/n$, where $\hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{x})^2$ is the variance of the data
computed with divisor $n$.

*Proof.* Under $\hat{F}$, each resampled value $x_j^*$ is one of $x_1, \dots, x_n$ with probability $1/n$ each,
independently. So $E^*[x_j^*] = \bar{x}$ and $\operatorname{Var}^*(x_j^*) = \frac{1}{n}\sum_i (x_i - \bar{x})^2 = \hat{\sigma}^2$ (the star means "over resampling, with the data held fixed"). The resample mean $\bar{x}^*$ is a mean of
$n$ iid draws, so by the theorem of 6.2 its variance is $\hat{\sigma}^2/n$. $\blacksquare$

For Example 6.6, $\hat{\sigma}/\sqrt{n} = \sqrt{9/10}\cdot s/\sqrt{10} \approx 1.934$. The simulated $1.98$ differs
from it only by Monte Carlo error. The ideal bootstrap is slightly smaller than $s/\sqrt{n}$ because it uses divisor
$n$; for $n$ of 20 or more the difference hardly matters.

### Some facts about resamples

**How many different resamples are there?** A resample is determined by how many times each of the $n$ data points is
used: $n$ non-negative counts adding to $n$. By "stars and bars"
([Probability, Chapter 2](../probability/02-Counting-and-Equally-Likely-Outcomes.md)) there are $\binom{2n-1}{n}$ such
count patterns, which is $92{,}378$ for $n = 10$. They are not equally likely: the pattern using each point once has
probability $10!/10^{10} \approx 0.00036$, while a pattern using one point ten times has probability $10^{-10}$.
For $n = 20$ there are about $6.9 \times 10^{10}$ patterns, which is why we sample $B$ of them at random rather than
listing them all.

**How much of the data is in a resample?** A given data point is missed by one draw with probability $1 - 1/n$, and by
all $n$ independent draws with probability $(1 - 1/n)^n$. This tends to $e^{-1} \approx 0.368$, a standard
limit from calculus. So a
resample contains, on average, about 63.2 percent of the distinct data points ($65.1$ percent for $n = 10$).

### When the bootstrap fails

The bootstrap works when the statistic depends smoothly on the whole distribution, as means, medians (with care),
correlations and regression coefficients do. It can fail badly when the statistic depends on the extreme of the data.

**Example: the maximum.** Suppose the data are uniform on $[0, \theta]$ and we estimate $\theta$ by the sample maximum
$M$ (we meet this estimator in the German tank problem of [Chapter 7](07-Estimation.md)). The true sampling
distribution of $M$ is continuous: $P(M = \theta) = 0$. But a resample's maximum equals the data maximum whenever the
largest data point is drawn at least once, which happens with probability $1 - (1 - 1/n)^n \to 1 - e^{-1} \approx 0.632$.
So the bootstrap distribution puts about 63 percent of its weight on a single value, and looks nothing like the truth.

Other failures: very small samples (the data are a poor picture of the population), heavy-tailed populations with
infinite variance, and data that are not independent (resampling single time points destroys the dependence; block
bootstraps exist for time series). [Chapter 15](15-Nonparametric-Methods.md) studies the bootstrap in depth, and
[Chapter 8](08-Confidence-Intervals.md) uses it to build confidence intervals.

### Two sources of error, kept apart

A bootstrap answer has two errors.

- **Bootstrap (statistical) error:** $\hat{F}$ is not the population. This depends on $n$, and no amount of computing
  removes it.
- **Monte Carlo error:** we used $B$ resamples, not all of them. This shrinks like $1/\sqrt{B}$ and is cheap to reduce.

For a standard error, $B = 1{,}000$ to $2{,}000$ is usually plenty; for the tails of a distribution (confidence
intervals), more is better.

## Check yourself

??? question "1. A population has mean 50 and standard deviation 12. For random samples of size 36 (from a large population), give the mean and standard error of the sample mean."

    $E[\bar{X}] = 50$ and $\operatorname{SE} = 12/\sqrt{36} = 2$.

??? question "2. How large a sample is needed to make the standard error of a mean one quarter of what it is with $n = 25$?"

    The standard error is proportional to $1/\sqrt{n}$. To divide it by 4 we must multiply $n$ by $16$: $n = 400$.

??? question "3. From the population $\{1, 2, 3, 4, 5\}$, list the sampling distribution of the mean of a simple random sample of size 2, and check the finite population correction formula."

    The 10 samples have means $1.5, 2, 2.5, 3, 2.5, 3, 3.5, 3.5, 4, 4.5$ (for $\{1,2\}, \{1,3\}, \{1,4\}, \{1,5\}, \{2,3\}, \{2,4\}, \{2,5\}, \{3,4\}, \{3,5\}, \{4,5\}$). Their mean is 3, and their variance is
    $(2.25 + 1 + 0.25 + 0 + 0.25 + 0 + 0.25 + 0.25 + 1 + 2.25)/10 = 7.5/10 = 0.75$. The population has $\mu = 3$ and
    $\sigma^2 = (4+1+0+1+4)/5 = 2$. The formula gives $\frac{2}{2}\cdot\frac{5-2}{5-1} = 0.75$. They agree.

??? question "4. A population has standard deviation 15. Using the CLT, find the approximate probability that the mean of a random sample of 36 is more than 5 away from the population mean."

    $\operatorname{SE} = 15/6 = 2.5$, so 5 is 2 standard errors. $P(|Z| > 2) = 2(1 - \Phi(2)) \approx 0.0455$.

??? question "5. Why can't the CLT be used to say that the mean of 10 incomes from a very skewed income distribution is approximately normal? What would you do instead?"

    The CLT is a limit statement; how fast it takes hold depends on the shape. A strongly skewed population gives
    sample means with skewness $\gamma/\sqrt{n}$, still large for $n = 10$ if $\gamma$ is large. Use a larger sample,
    a transformation (such as the logarithm), or the bootstrap, and check by simulation.

??? question "6. A poll of 400 people finds 52 percent in favour. Give the estimated standard error of the proportion and the quick margin of error."

    $\sqrt{0.52 \times 0.48/400} \approx 0.0250$. The quick margin is $1/\sqrt{400} = 0.05$, that is, plus or minus
    5 points. (Two estimated standard errors, $0.0500$, agree.)

??? question "7. Prove that $p(1-p) \le 1/4$ for every $p$ between 0 and 1, and say when equality holds."

    $\frac14 - p(1-p) = \frac14 - p + p^2 = (p - \frac12)^2 \ge 0$, with equality exactly when $p = \frac12$.

??? question "8. A simulation estimates a probability as 0.20 from $B = 2{,}500$ simulated samples. What is the Monte Carlo standard error? How large must $B$ be to make it about 0.002?"

    $\sqrt{0.2 \times 0.8/2500} = 0.4/50 = 0.008$. To divide it by 4 we need $16$ times as many: $B = 40{,}000$.

??? question "9. The data are 3, 7, 8. List all the distinct bootstrap resamples (as count patterns), give the number, and compute the ideal bootstrap variance of the mean."

    Count patterns $(a, b, c)$ with $a + b + c = 3$: there are $\binom{5}{3} = 10$: $(3,0,0), (0,3,0), (0,0,3), (2,1,0), (2,0,1), (1,2,0), (0,2,1), (1,0,2), (0,1,2), (1,1,1)$. The data have mean 6 and divisor-$n$ variance
    $\hat{\sigma}^2 = (9 + 1 + 4)/3 = 14/3$. The ideal bootstrap variance of the mean is $\hat{\sigma}^2/n = 14/9 \approx 1.556$.

??? question "10. For $n = 5$, what is the probability that a particular data point is missing from a bootstrap resample? What is the expected number of distinct points in a resample?"

    $(1 - 1/5)^5 = 0.8^5 = 0.32768$. Each point is present with probability $0.67232$, so by linearity the expected
    number of distinct points is $5 \times 0.67232 \approx 3.36$.

??? question "11. Show that the sum of the third central moments argument in 6.3 fails without independence: give two identically distributed variables with $E[(Y_1 + Y_2)^3] \ne E[Y_1^3] + E[Y_2^3]$."

    Take $Y_1 = Y_2 = Y$, any centred variable with $E[Y^3] \ne 0$ (for example $Y = X - 1$ with $X$ exponential with
    mean 1, so $E[Y^3] = 2$). Then $E[(2Y)^3] = 8E[Y^3] = 16$, while $E[Y_1^3] + E[Y_2^3] = 4$. The cross terms
    $3E[Y_1^2Y_2] + 3E[Y_1Y_2^2]$ do not vanish.

??? question "12. Data are uniform on $[0, \theta]$, $n = 20$. What is the probability that a bootstrap resample has the same maximum as the data? Why does this show the bootstrap fails here?"

    $1 - (1 - 1/20)^{20} = 1 - 0.95^{20} \approx 1 - 0.358 = 0.642$. So about 64 percent of the bootstrap
    distribution of the maximum sits on one value, while the true sampling distribution of the maximum is continuous
    with no atoms. The bootstrap picture of the variability is badly wrong.

## What you learned

- A statistic is a random variable; its sampling distribution describes its values over all possible samples, and its
  standard deviation is the standard error.
- For iid data, $E[\bar{X}] = \mu$ and $\operatorname{SE}(\bar{X}) = \sigma/\sqrt{n}$; without replacement multiply the
  variance by $(N-n)/(N-1)$. We estimate the SE by $s/\sqrt{n}$.
- The CLT makes $\bar{X}$ approximately normal for large $n$; how large depends on skewness, which fades like
  $1/\sqrt{n}$. "$n \ge 30$" is a rough guide only.
- A proportion is a mean of zeros and ones, with SE $\sqrt{p(1-p)/n} \le 1/(2\sqrt{n})$; the quick 95 percent margin of
  error is $1/\sqrt{n}$.
- Simulation lets you see sampling distributions directly, with a Monte Carlo error of order $1/\sqrt{B}$.
- The bootstrap resamples the data with replacement to estimate a sampling distribution; for the mean it reproduces
  $\hat{\sigma}/\sqrt{n}$, and it fails for statistics like the maximum.

**Next:** [Chapter 7](07-Estimation.md), what makes an estimator good, and two general ways to build one: the method of
moments and maximum likelihood.

## Further reading

- B. Efron, "Bootstrap methods: another look at the jackknife", *Annals of Statistics* 7(1), 1979.
- B. Efron and R. J. Tibshirani, *An Introduction to the Bootstrap*, 1993.
- A. C. Davison and D. V. Hinkley, *Bootstrap Methods and their Application*, 1997.
- Student (W. S. Gosset), "The probable error of a mean", *Biometrika* 6(1), 1908. Section on his card-shuffling
  experiment.
- J. A. Rice, *Mathematical Statistics and Data Analysis*, 3rd edition, 2007. Chapter 7 treats survey sampling with the
  finite population correction.
- L. Wasserman, *All of Statistics*, 2004. Chapter 8 is a short rigorous account of the bootstrap.
- On this site: the Topics lesson on [sampling distributions](../../topics/statistics/level-8/01-sampling-distributions.md)
  and on [large numbers and the CLT](../../topics/probability/level-8/05-large-numbers-clt.md);
  [Probability, Chapter 12](../probability/12-The-Central-Limit-Theorem.md) for the proof of the CLT; the MAT137 guide
  to [sequences](../../uoft/MAT137/unit11.md) for the limit $(1 - 1/n)^n \to e^{-1}$; the
  [Probability book](../probability/index.md).
