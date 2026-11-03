# 8. Confidence intervals

*An estimate on its own is a single number, and it is almost certainly wrong. "The average is 16.3" says nothing about
whether the truth might be 16.2 or 25. What we want is a range, together with an honest statement of how much to trust
it. A confidence interval is such a range, built so that the method that produces it catches the truth a stated
fraction of the time. This chapter builds intervals for means (first with a known standard deviation, then with
Student's $t$ for the realistic case), for proportions (where the textbook interval is surprisingly bad and a 1927
alternative is much better), shows how to choose a sample size before collecting data, and ends with intervals made by
the bootstrap. Throughout, we are careful about what "95 percent confident" does and does not mean, because it is one
of the most misunderstood phrases in science.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a 95 percent confidence interval means (a statement about the method, not about one interval), and the
      common ways it is misread
    - how to build an interval from a pivot, starting with the mean when $\sigma$ is known
    - Student's $t$ distribution: where it comes from, its story at the Guinness brewery, how to use it, and how
      badly the normal interval does without it in small samples
    - intervals for proportions: why the Wald interval fails, and the Wilson and Agresti-Coull intervals that fix it
    - how to plan a sample size for a desired margin of error
    - bootstrap intervals: percentile, basic and bootstrap-$t$, and when to trust them

    **You need:** [Chapter 6](06-Sampling-Distributions.md) (standard errors, the CLT, the bootstrap) and
    [Chapter 7](07-Estimation.md) (estimators, $S^2$ with divisor $n-1$). From Probability:
    [Chapter 10](../probability/10-The-Normal-Distribution.md) (the normal law and its table). Gentler version: the
    Topics lesson on [confidence intervals](../../topics/statistics/level-8/02-confidence-intervals.md).

    **Levels:** 8.1 and 8.2 are intermediate; 8.3 is intermediate with an advanced sketch; 8.4 is intermediate to
    advanced; 8.5 is intermediate; 8.6 is advanced.

## 8.1 What a 95 percent interval means, and does not

### The problem

A random sample of 25 gives a mean of 52.3. The true mean $\mu$ is unknown. From [Chapter 6](06-Sampling-Distributions.md)
we know that $\bar{X}$ is usually within about two standard errors of $\mu$. Turn that around: $\mu$ is usually within
about two standard errors of $\bar{X}$. A confidence interval makes "usually" precise.

### The definition

A **confidence interval** for a parameter $\theta$ with **confidence level** $1 - \alpha$ (for example $0.95$, when
$\alpha = 0.05$) is a pair of statistics $L$ and $U$, computed from the data, such that

$$
P(L \le \theta \le U) = 1 - \alpha \quad \text{for every possible value of } \theta .
$$

Read this sentence slowly. **The random things are $L$ and $U$**, because they are computed from random data. The
parameter $\theta$ is a fixed number. The probability describes the *procedure*: if you repeated the whole study many
times, drawing fresh data each time and computing a fresh interval, 95 percent of those intervals would contain
$\theta$. The fraction of intervals that catch the truth is the **coverage**. (When exact coverage is impossible, as
for proportions in 8.4, we ask for coverage of at least, or close to, $1 - \alpha$.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 300" role="img" aria-label="Twenty-five 95 percent confidence intervals from 25 simulated samples, drawn as horizontal bars stacked one above another, with a vertical line at the true mean 50. Twenty-three bars cross the line; two, drawn in orange, miss it.">
<line x1="296.8" y1="20.0" x2="460.2" y2="20.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="378.5" cy="20.0" r="2.5" fill="currentColor"/>
<line x1="252.9" y1="29.5" x2="416.2" y2="29.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="334.5" cy="29.5" r="2.5" fill="currentColor"/>
<line x1="272.6" y1="39.0" x2="436.0" y2="39.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="354.3" cy="39.0" r="2.5" fill="currentColor"/>
<line x1="272.5" y1="48.5" x2="435.8" y2="48.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="354.1" cy="48.5" r="2.5" fill="currentColor"/>
<line x1="256.1" y1="58.0" x2="419.5" y2="58.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="337.8" cy="58.0" r="2.5" fill="currentColor"/>
<line x1="187.6" y1="67.5" x2="351.0" y2="67.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="269.3" cy="67.5" r="2.5" fill="currentColor"/>
<line x1="239.3" y1="77.0" x2="402.6" y2="77.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="320.9" cy="77.0" r="2.5" fill="currentColor"/>
<line x1="237.7" y1="86.5" x2="401.0" y2="86.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="319.4" cy="86.5" r="2.5" fill="currentColor"/>
<line x1="223.8" y1="96.0" x2="387.1" y2="96.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="305.5" cy="96.0" r="2.5" fill="currentColor"/>
<line x1="235.1" y1="105.5" x2="398.4" y2="105.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="316.8" cy="105.5" r="2.5" fill="currentColor"/>
<line x1="326.1" y1="115.0" x2="489.5" y2="115.0" stroke="#eea66f" stroke-width="4"/>
<circle cx="407.8" cy="115.0" r="2.5" fill="currentColor"/>
<line x1="155.6" y1="124.5" x2="318.9" y2="124.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="237.2" cy="124.5" r="2.5" fill="currentColor"/>
<line x1="240.9" y1="134.0" x2="404.2" y2="134.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="322.5" cy="134.0" r="2.5" fill="currentColor"/>
<line x1="183.7" y1="143.5" x2="347.0" y2="143.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="265.3" cy="143.5" r="2.5" fill="currentColor"/>
<line x1="253.4" y1="153.0" x2="416.7" y2="153.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="335.1" cy="153.0" r="2.5" fill="currentColor"/>
<line x1="299.4" y1="162.5" x2="462.8" y2="162.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="381.1" cy="162.5" r="2.5" fill="currentColor"/>
<line x1="147.7" y1="172.0" x2="311.0" y2="172.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="229.4" cy="172.0" r="2.5" fill="currentColor"/>
<line x1="256.8" y1="181.5" x2="420.2" y2="181.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="338.5" cy="181.5" r="2.5" fill="currentColor"/>
<line x1="235.0" y1="191.0" x2="398.3" y2="191.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="316.7" cy="191.0" r="2.5" fill="currentColor"/>
<line x1="113.1" y1="200.5" x2="276.4" y2="200.5" stroke="#eea66f" stroke-width="4"/>
<circle cx="194.7" cy="200.5" r="2.5" fill="currentColor"/>
<line x1="200.8" y1="210.0" x2="364.1" y2="210.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="282.4" cy="210.0" r="2.5" fill="currentColor"/>
<line x1="205.4" y1="219.5" x2="368.8" y2="219.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="287.1" cy="219.5" r="2.5" fill="currentColor"/>
<line x1="221.8" y1="229.0" x2="385.1" y2="229.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="303.5" cy="229.0" r="2.5" fill="currentColor"/>
<line x1="259.2" y1="238.5" x2="422.5" y2="238.5" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="340.9" cy="238.5" r="2.5" fill="currentColor"/>
<line x1="276.2" y1="248.0" x2="439.5" y2="248.0" stroke="#9cc9ea" stroke-width="4"/>
<circle cx="357.9" cy="248.0" r="2.5" fill="currentColor"/>
<line x1="310.0" y1="10" x2="310.0" y2="257.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
<line x1="60" y1="257.5" x2="560" y2="257.5" stroke="currentColor" stroke-width="1"/>
<line x1="101.7" y1="257.5" x2="101.7" y2="261.5" stroke="currentColor"/><text x="101.7" y="274.5" text-anchor="middle" font-size="11" fill="currentColor">40</text>
<line x1="185.0" y1="257.5" x2="185.0" y2="261.5" stroke="currentColor"/><text x="185.0" y="274.5" text-anchor="middle" font-size="11" fill="currentColor">44</text>
<line x1="268.3" y1="257.5" x2="268.3" y2="261.5" stroke="currentColor"/><text x="268.3" y="274.5" text-anchor="middle" font-size="11" fill="currentColor">48</text>
<line x1="351.7" y1="257.5" x2="351.7" y2="261.5" stroke="currentColor"/><text x="351.7" y="274.5" text-anchor="middle" font-size="11" fill="currentColor">52</text>
<line x1="435.0" y1="257.5" x2="435.0" y2="261.5" stroke="currentColor"/><text x="435.0" y="274.5" text-anchor="middle" font-size="11" fill="currentColor">56</text>
<line x1="518.3" y1="257.5" x2="518.3" y2="261.5" stroke="currentColor"/><text x="518.3" y="274.5" text-anchor="middle" font-size="11" fill="currentColor">60</text>
<text x="316.0" y="14" font-size="12" fill="currentColor">true mean 50</text>
</svg>
</div>

The figure shows 25 intervals computed from 25 simulated samples (made up: normal population with mean 50 and
standard deviation 10, samples of 25, the interval of 8.2). Twenty-three catch the true mean; two miss. In the long run,
about 1 in 20 misses. Nothing about an individual interval tells you whether it is one of the misses.

### What it does not mean

Once you have computed an interval, say $(48.4, 56.2)$, the statement "$48.4 \le \mu \le 56.2$" is either true or
false. In the frequentist framework of this chapter, $\mu$ is not random, so there is no probability left to attach to
it. So the following, though commonly said, are **not** what a confidence interval means:

1. "There is a 95 percent probability that $\mu$ is between 48.4 and 56.2." (That is a statement about $\mu$ given the
   data. It requires a prior distribution for $\mu$ and is what a Bayesian *credible interval* provides; see
   [Chapter 14](14-Bayesian-Statistics.md). In simple cases with lots of data the two kinds of interval are
   numerically close, which is part of the confusion.)
2. "95 percent of the data lie in the interval." (The data are far more spread out; the interval is about the mean.)
3. "If we repeated the study, 95 percent of the new sample means would fall in this interval." (Not so: this interval is
   centred at one random $\bar{x}$, not at $\mu$.)
4. "The interval contains the plausible values, and values outside it are impossible." (Values just outside are only
   slightly less compatible with the data than values just inside.)

A good way to say it: "We are 95 percent confident that $\mu$ is between 48.4 and 56.2, in the sense that this interval
was produced by a method that captures the true mean in 95 percent of samples." A 2014 study by Rink Hoekstra and
colleagues gave researchers and students six false statements about a confidence interval; most of both groups endorsed
some of them. The misunderstanding is not a beginner's problem.

### What a confidence interval covers and what it does not

Like every method in this book, a confidence interval accounts for **random sampling error only**. If the sample was
biased ([Chapter 5](05-Sampling-and-Experiments.md)), the measurements flawed, or the model wrong, a 95 percent interval
can miss far more often than 1 time in 20, and it gives no warning.

## 8.2 Intervals for a mean with known $\sigma$

### The pivot

Suppose $X_1, \dots, X_n$ are iid normal with unknown mean $\mu$ and, unrealistically, *known* standard deviation
$\sigma$. (Measuring instruments with a well-established precision come close to this.) Then

$$
Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0, 1).
$$

$Z$ depends on the unknown $\mu$, but its *distribution* does not depend on anything unknown. A quantity like this is a
**pivot**, and pivots are the standard way to build intervals.

Let $z_{\alpha/2}$ be the number with $P(Z > z_{\alpha/2}) = \alpha/2$ for a standard normal $Z$, so that
$P(-z_{\alpha/2} \le Z \le z_{\alpha/2}) = 1 - \alpha$. Common values:

| confidence | 90% | 95% | 99% |
|---|---|---|---|
| $z_{\alpha/2}$ | 1.645 | 1.960 | 2.576 |

Now solve the inequalities for $\mu$:

$$
-z_{\alpha/2} \le \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \le z_{\alpha/2}
\iff \bar{X} - z_{\alpha/2}\frac{\sigma}{\sqrt{n}} \le \mu \le \bar{X} + z_{\alpha/2}\frac{\sigma}{\sqrt{n}} .
$$

The two events are the same event, so they have the same probability, $1 - \alpha$. That proves:

**Theorem.** For iid normal data with known $\sigma$, the interval

$$
\bar{X} \pm z_{\alpha/2}\,\frac{\sigma}{\sqrt{n}}
$$

has coverage exactly $1 - \alpha$ for every $\mu$. For non-normal data with finite variance, the CLT
([Chapter 6](06-Sampling-Distributions.md)) makes the coverage tend to $1 - \alpha$ as $n \to \infty$.

The quantity $z_{\alpha/2}\,\sigma/\sqrt{n}$ is the **margin of error**: half the width.

**Example 8.1.** In the opening example, $n = 25$, $\bar{x} = 52.3$, and suppose $\sigma = 10$ is known. The standard
error is $10/5 = 2$. The 95 percent interval is $52.3 \pm 1.96 \times 2 = 52.3 \pm 3.92$, that is, $(48.38, 56.22)$.
At 90 percent it is $52.3 \pm 3.29$; at 99 percent, $52.3 \pm 5.15$.

### What controls the width

The width $2z_{\alpha/2}\sigma/\sqrt{n}$ shows the three levers.

- **Confidence.** More confidence means a wider interval. A 100 percent interval for a normal mean is the whole line,
  which is true and useless.
- **Variability** $\sigma$: noisier data, wider interval. Better measurement narrows it.
- **Sample size**: width falls like $1/\sqrt{n}$. Halving the width needs four times the data.

### One-sided intervals

Sometimes only one direction matters: "the mean breaking strength is at least ...". A one-sided 95 percent **lower
confidence bound** is $\bar{X} - z_{\alpha}\,\sigma/\sqrt{n}$ with $z_{0.05} = 1.645$, by the same argument using
$P(Z \le z_\alpha) = 1 - \alpha$.

## 8.3 Student's $t$

### The realistic problem

In practice $\sigma$ is unknown. The obvious move is to replace it by the sample standard deviation $S$ and use
$\bar{X} \pm 1.96\,S/\sqrt{n}$. For large samples this works, because $S$ is close to $\sigma$. For small samples it
does not: $S$ is itself random, sometimes too small, and when it is too small the interval is too narrow and misses.

How badly? For normal data, the true coverage of the interval $\bar{X} \pm 1.96\,S/\sqrt{n}$ is

| $n$ | 5 | 10 | 30 |
|---|---|---|---|
| actual coverage | 87.8% | 91.8% | 94.0% |

(computed exactly from the $t$ distribution below). A "95 percent" interval from five observations misses one time in
eight, not one in twenty.

### Gosset at Guinness

The person who solved this worked at a brewery. William Sealy Gosset joined Arthur Guinness and Son in Dublin in 1899,
one of several science graduates the company hired to put brewing on a scientific footing. His experiments, on barley
varieties, on hops and on counting yeast cells, often had very few observations, and he found that the large-sample
methods of the time, built around the normal curve with the standard deviation treated as known, overstated his
precision.

He spent the academic year 1906 to 1907 in Karl Pearson's laboratory in London, and in 1908 published "The probable
error of a mean" in *Biometrika*. Guinness let its scientists publish only under conditions that protected the
company, and Gosset's paper appeared under the pseudonym **"Student"**. In it he found the distribution of the
standardised mean when the standard deviation is estimated, checked it against the card-shuffling experiment described
in [Chapter 6](06-Sampling-Distributions.md), and gave a table. His derivation was not fully rigorous. Fisher later
gave a complete proof, reworked the statistic into the form used today (dividing by $n-1$ and introducing "degrees of
freedom"), and made it central to his 1925 book *Statistical Methods for Research Workers*, where the letter $t$ became
standard.

### The $t$ distribution

**Definition.** If $Z \sim N(0,1)$ and $V$ has a chi-square distribution with $\nu$ degrees of freedom (the
distribution of a sum of $\nu$ squared independent standard normals), and $Z$ and $V$ are independent, then

$$
T = \frac{Z}{\sqrt{V/\nu}}
$$

has the **$t$ distribution with $\nu$ degrees of freedom**, written $t_\nu$. Its density is

$$
f(t) = \frac{\Gamma\big(\frac{\nu+1}{2}\big)}{\sqrt{\nu\pi}\,\Gamma\big(\frac{\nu}{2}\big)}
\Big(1 + \frac{t^2}{\nu}\Big)^{-(\nu+1)/2},
$$

where $\Gamma$ is the gamma function ($\Gamma(k) = (k-1)!$ for whole numbers $k$). It is symmetric and bell-shaped like
the normal but with **heavier tails**: the denominator $\sqrt{V/\nu}$ is sometimes small, which throws $T$ far out. As
$\nu \to \infty$, $V/\nu \to 1$ by the law of large numbers, and indeed
$\big(1 + t^2/\nu\big)^{-(\nu+1)/2} \to e^{-t^2/2}$, so $t_\nu$ approaches $N(0,1)$. With $\nu = 1$ it is the Cauchy
distribution, which has no mean at all.

**Theorem (Student, Fisher).** If $X_1, \dots, X_n$ are iid $N(\mu, \sigma^2)$, then

1. $\bar{X}$ and $S^2$ are independent;
2. $(n-1)S^2/\sigma^2$ has a chi-square distribution with $n - 1$ degrees of freedom;
3. therefore $T = \dfrac{\bar{X} - \mu}{S/\sqrt{n}}$ has the $t_{n-1}$ distribution.

*Level: advanced.*

*Proof sketch.* Part 3 follows from 1 and 2: $T = \frac{(\bar{X} - \mu)/(\sigma/\sqrt{n})}{\sqrt{S^2/\sigma^2}} = \frac{Z}{\sqrt{V/(n-1)}}$ with $Z$ standard normal and $V = (n-1)S^2/\sigma^2$.

For $n = 2$, parts 1 and 2 can be seen directly. Here $\bar{X} = (X_1 + X_2)/2$ and
$S^2 = (X_1 - X_2)^2/2$ (as in [Chapter 7](07-Estimation.md)). The pair $X_1 + X_2$ and $X_1 - X_2$ are jointly normal
with covariance $\operatorname{Var}(X_1) - \operatorname{Var}(X_2) = 0$, and jointly normal variables with zero
covariance are independent ([Probability, Chapter 11](../probability/11-Joint-Distributions.md)). So $\bar{X}$ and $S^2$
are independent. And $(X_1 - X_2)/(\sigma\sqrt{2})$ is standard normal, so $S^2/\sigma^2 = \big((X_1 - X_2)/(\sigma\sqrt2)\big)^2$
is a squared standard normal: chi-square with 1 degree of freedom.

For general $n$, the same idea works after a rotation. Choose an orthogonal change of coordinates (a rotation of
$n$-dimensional space) whose first new coordinate is $\sqrt{n}\,\bar{X}$. A rotation of independent normals with equal
variances gives independent normals with equal variances (the joint density depends only on distance from the centre,
which rotations preserve). The other $n - 1$ coordinates do not involve $\bar{X}$, and the sum of their squares turns
out to be exactly $\sum (X_i - \bar{X})^2$. That gives both parts at once. The full proof, using the Helmert
rotation, is in Casella and Berger (section 5.3) and most mathematical statistics texts; [Chapter 12](12-Multiple-Regression.md)
uses the same geometry. $\blacksquare$

Note what the theorem needs: **normal data**. The independence of $\bar{X}$ and $S^2$ in fact characterises the normal
distribution. For other populations the $t$ interval is an approximation, discussed below.

### The $t$ interval

Let $t_{\nu,\alpha/2}$ be the number with $P(T > t_{\nu,\alpha/2}) = \alpha/2$ for $T \sim t_\nu$. Exactly as in 8.2,

$$
\bar{X} \pm t_{n-1,\alpha/2}\,\frac{S}{\sqrt{n}}
$$

has coverage exactly $1 - \alpha$ for normal data, whatever $\mu$ and $\sigma$ are. Values of $t_{\nu, 0.025}$, for 95
percent intervals:

| $\nu$ | 1 | 2 | 4 | 9 | 19 | 29 | 99 | $\infty$ |
|---|---|---|---|---|---|---|---|---|
| $t_{\nu,0.025}$ | 12.706 | 4.303 | 2.776 | 2.262 | 2.093 | 2.045 | 1.984 | 1.960 |

With two observations ($\nu = 1$) you must go out 12.7 estimated standard errors to be 95 percent sure: two numbers
tell you almost nothing about spread. By $\nu = 30$ the difference from 1.96 is small.

**Example 8.2 (made-up data).** Ten measurements of the weight of a coin, in grams:
$9.8, 10.4, 10.1, 9.6, 10.7, 10.2, 9.9, 10.5, 10.0, 10.3$. Then $\bar{x} = 10.15$, $s \approx 0.3375$, the standard
error is $s/\sqrt{10} \approx 0.1067$, and with $t_{9, 0.025} = 2.262$:

$$
10.15 \pm 2.262 \times 0.1067 = 10.15 \pm 0.241, \quad\text{that is}\quad (9.91,\ 10.39).
$$

Using 1.96 instead would give $10.15 \pm 0.209$, an interval about 13 percent too narrow.

Try it in Python (the standard library has no $t$ quantile function, so we take the value from the table):

```python
import statistics as st, math
x = [9.8, 10.4, 10.1, 9.6, 10.7, 10.2, 9.9, 10.5, 10.0, 10.3]
m, s, n = st.fmean(x), st.stdev(x), len(x)
t = 2.262                                  # t_{9, 0.025} from the table
print(m - t*s/math.sqrt(n), m + t*s/math.sqrt(n))     # about 9.909 and 10.391
```

### Robustness

What if the data are not normal? Two facts guide practice.

- The $t$ interval is fairly **robust to non-normality** when the population is roughly symmetric, because $\bar{X}$ is
  close to normal by the CLT and $S$ is close to $\sigma$ for moderate $n$.
- It is **not robust to strong skewness or outliers** in small samples: one huge value inflates both $\bar{X}$ and $S$,
  and with skewed data the two tails of the true coverage are unbalanced, as in the exponential example of
  [Chapter 6](06-Sampling-Distributions.md). It is also not robust to **dependence**: correlated observations make
  $S/\sqrt{n}$ too small, and no distributional fix helps.

For skewed data, a transformation (often the logarithm), a bootstrap interval (8.6) or a method based on ranks
([Chapter 15](15-Nonparametric-Methods.md)) is safer. Always plot the data first.

## 8.4 Intervals for proportions

### The textbook interval

For $x$ successes in $n$ trials, $\hat{p} = x/n$ has standard error $\sqrt{p(1-p)/n}$ ([Chapter 6](06-Sampling-Distributions.md)).
Replacing the unknown $p$ by $\hat{p}$ gives the interval taught in most introductory courses, called the **Wald
interval** (after Abraham Wald, who studied this kind of interval in general):

$$
\hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}} .
$$

**Example 8.3.** 7 successes in 20 trials: $\hat{p} = 0.35$, standard error
$\sqrt{0.35 \times 0.65/20} \approx 0.1067$, and the 95 percent Wald interval is $0.35 \pm 0.209$, that is
$(0.141, 0.559)$.

### Why Wald fails

Because $x$ can only take the values $0, 1, \dots, n$, the coverage of any interval for $p$ can be computed exactly:
for a given true $p$, add up the binomial probabilities of the values of $x$ whose interval contains $p$. Doing this for
the Wald interval reveals serious problems, documented in detail by Lawrence Brown, Tony Cai and Anirban DasGupta in
2001.

**1. It fails near 0 and 1.** If $x = 0$, then $\hat{p} = 0$ and the interval is $(0, 0)$: it claims certainty about $p$
from 20 failures, which is absurd. More generally, when $p$ is small the distribution of $\hat{p}$ is skewed and the
estimated standard error is often too small. Exact coverage of the nominal 95 percent Wald interval:

| $n$ | $p$ | Wald coverage | Wilson coverage |
|---|---|---|---|
| 20 | 0.1 | 87.6% | 95.7% |
| 50 | 0.1 | 87.9% | 97.0% |
| 100 | 0.05 | 87.8% | 96.6% |
| 100 | 0.01 | 63.3% | 92.1% |
| 500 | 0.01 | 87.1% | 96.2% |

Even with $n = 500$, a "95 percent" Wald interval for a 1 percent rate misses about one time in eight.

**2. It is erratic.** Coverage jumps up and down as $n$ changes, because of the discreteness of $x$. For $p = 0.1$, the
Wald coverage is 95.0 percent at $n = 47$ and 86.4 percent at $n = 48$. Even at $p = 0.5$, the easiest case, it
wanders: 93.5 percent at $n = 11$, 85.4 percent at $n = 12$, 95.1 percent at $n = 17$. Brown, Cai and DasGupta call
these "lucky" and "unlucky" sample sizes. There is no $n$ beyond which you can be sure the problem has gone.

The underlying mistake is that the Wald interval uses $\hat{p}$ twice: as the centre, and to estimate the standard
error. When $\hat{p}$ is near 0 by chance, the interval is both off-centre and too narrow.

### The Wilson interval

In 1927 Edwin Bidwell Wilson proposed a better idea: do not plug $\hat{p}$ into the standard error. Instead, collect all
values of $p$ that are not too far from $\hat{p}$ *measured in their own standard errors*:

$$
\{\, p : |\hat{p} - p| \le z\sqrt{p(1-p)/n} \,\} .
$$

(Write $z$ for $z_{\alpha/2}$.) This is a pivot argument, like 8.2, with the exact standard error at each candidate $p$.
Squaring, the condition is

$$
(\hat{p} - p)^2 \le \frac{z^2}{n}\,p(1-p)
\iff \Big(1 + \frac{z^2}{n}\Big)p^2 - \Big(2\hat{p} + \frac{z^2}{n}\Big)p + \hat{p}^2 \le 0 ,
$$

a quadratic in $p$ with positive leading coefficient, so the solution set is the interval between its two roots. The
quadratic formula gives the **Wilson interval**:

$$
\frac{\hat{p} + \frac{z^2}{2n}}{1 + \frac{z^2}{n}} \;\pm\; \frac{z}{1 + \frac{z^2}{n}}
\sqrt{\frac{\hat{p}(1-\hat{p})}{n} + \frac{z^2}{4n^2}} .
$$

Look at the centre: it is $\hat{p}$ pulled towards $\tfrac12$. With $z \approx 2$, the centre is roughly
$(x + 2)/(n + 4)$, as if we had added two successes and two failures. The interval is never empty, never goes outside
$[0, 1]$, and is not degenerate at $x = 0$.

**Example 8.4.** For 7 of 20 the Wilson interval is $(0.181, 0.567)$, compared with Wald's $(0.141, 0.559)$. It is
shifted towards $\tfrac12$. For 0 of 20, Wilson gives $(0, 0.161)$ while Wald gives the useless $(0, 0)$.

### The Agresti-Coull interval

Alan Agresti and Brent Coull (1998) turned the "add two successes and two failures" observation into a simple recipe:
let $\tilde{n} = n + z^2$ and $\tilde{p} = (x + z^2/2)/\tilde{n}$ (with $z = 1.96$, about $(x + 2)/(n + 4)$), and use
the Wald formula with these:

$$
\tilde{p} \pm z\sqrt{\frac{\tilde{p}(1 - \tilde{p})}{\tilde{n}}} .
$$

It has the same centre as Wilson and is a little wider, so its coverage is a little higher. For 7 of 20 it gives
$(0.180, 0.568)$. It is easy to compute by hand, and Brown, Cai and DasGupta recommend it (or Wilson) over Wald for
everyday use.

### When there are no successes: the rule of three

If $x = 0$ in $n$ trials, a natural one-sided 95 percent upper bound for $p$ is the value at which zero successes has
probability exactly 0.05: $(1 - p)^n = 0.05$, so $p = 1 - 0.05^{1/n}$. Since $\log 0.05 \approx -3.0$ and
$1 - e^{-a} \approx a$ for small $a$, this is about $3/n$: the **rule of three**. For $n = 20$ it gives $0.15$ (exact:
$0.139$); for 300 uneventful trials of a procedure, the rate of a serious complication is plausibly below 1 percent.

## 8.5 Planning the sample size

Before collecting data, you can decide how precise you need to be and work backwards. Set the margin of error
$E = z_{\alpha/2}\,\sigma/\sqrt{n}$ and solve for $n$:

$$
n = \Big(\frac{z_{\alpha/2}\,\sigma}{E}\Big)^2, \quad\text{rounded up.}
$$

**Example 8.5.** You want to estimate a mean to within 2 units with 95 percent confidence, and a pilot study suggests
$\sigma \approx 15$. Then $n = (1.96 \times 15/2)^2 = 216.09$, so $n = 217$.

You need a guess at $\sigma$ before you start: from a pilot study, earlier research, or a range (for roughly normal
data, $\sigma$ is about a quarter of the range of typical values). If the guess is too small, the final interval will
be wider than planned. It is common to be conservative.

**For proportions**, $\sigma = \sqrt{p(1-p)} \le \tfrac12$, so the conservative choice is

$$
n = \frac{z_{\alpha/2}^2}{4E^2} .
$$

**Example 8.6.** A margin of error of 3 percentage points at 95 percent confidence needs
$n = 1.96^2/(4 \times 0.03^2) \approx 1067.1$, so $n = 1068$. That is why so many national polls have about a thousand
respondents. For 1 point, $n = 9604$: three times the precision costs nine times the sample. If you know $p$ is near
0.1, then $n = 1.96^2 \times 0.1 \times 0.9/0.03^2 \approx 384.2$, so 385 is enough.

Three warnings.

- The formula covers sampling error only. A thousand people chosen badly are no better than a thousand chosen badly.
- With a complex design (clusters, [Chapter 5](05-Sampling-and-Experiments.md)), multiply by the design effect.
- If you plan to report results for subgroups (by region or age), each subgroup needs its own sample size. A national
  poll of 1,000 with 80 people from one region has a margin of about 11 points for that region.

Planning for a hypothesis test is similar but also needs the size of effect you want to detect; that is **power**, in
[Chapter 9](09-Hypothesis-Tests.md).

## 8.6 Bootstrap intervals

*Level: advanced.*

### The problem

The intervals above need a formula for the standard error and a known shape (normal or $t$) for the sampling
distribution. For a median, a trimmed mean, a ratio, or a correlation, we may have neither. The bootstrap of
[Chapter 6](06-Sampling-Distributions.md) gives an estimate of the whole sampling distribution, so it can give intervals
too. There are several ways to turn it into an interval; here are the three main ones.

Throughout, $\hat{\theta}$ is the estimate from the data, and $\hat{\theta}^*_1, \dots, \hat{\theta}^*_B$ are the
estimates from $B$ bootstrap resamples. Write $q^*_{a}$ for the $a$-quantile of the bootstrap values (the value below
which a fraction $a$ of them lie).

### The percentile interval

The simplest idea: take the middle 95 percent of the bootstrap values,

$$
\big(q^*_{0.025},\ q^*_{0.975}\big).
$$

**Example 8.7.** For the walking times of [Chapter 6](06-Sampling-Distributions.md) (made up:
$12, 15, 9, 22, 14, 31, 11, 17, 13, 19$; mean 16.3, median 14.5), with $B = 10{,}000$ resamples:

```python
import random, statistics as st
x = [12, 15, 9, 22, 14, 31, 11, 17, 13, 19]
random.seed(8)
boot = [st.fmean(random.choices(x, k=len(x))) for _ in range(10000)]
q = st.quantiles(boot, n=40)          # cut points at 2.5%, 5%, ..., 97.5%
print(q[0], q[-1])                    # the 2.5% and 97.5% points
```

This gives a percentile interval of about $(12.9, 20.4)$ for the mean. The same with `st.median` in place of `st.fmean`
(and seed 9) gives about $(12.0, 19.5)$ for the median. For comparison, the $t$ interval for the mean is
$16.3 \pm 2.262 \times 2.039 = (11.7, 20.9)$.

Why does the percentile interval work? If there is some increasing transformation $g$ that makes the sampling
distribution of $g(\hat{\theta})$ normal and centred at $g(\theta)$, then a short argument shows the percentile interval
has the right coverage, and you never need to know $g$. When no such $g$ exists (especially with bias or skewness that
changes with $\theta$), it can undercover.

### The basic interval

A different argument. The quantity we care about is the error $\hat{\theta} - \theta$. The bootstrap imitates it by
$\hat{\theta}^* - \hat{\theta}$. If the quantiles of $\hat{\theta}^* - \hat{\theta}$ are about the same as those of
$\hat{\theta} - \theta$, then with 95 percent probability
$q^*_{0.025} - \hat{\theta} \le \hat{\theta} - \theta \le q^*_{0.975} - \hat{\theta}$. Solving for $\theta$:

$$
\big(2\hat{\theta} - q^*_{0.975},\ 2\hat{\theta} - q^*_{0.025}\big).
$$

This is the **basic** (or **reverse percentile**) bootstrap interval. Note it flips the tails. In Example 8.7 it gives
$(2 \times 16.3 - 20.4,\ 2 \times 16.3 - 12.9) = (12.2, 19.7)$ for the mean. When the bootstrap distribution is
symmetric about $\hat{\theta}$, basic and percentile agree; when it is skewed, they disagree, and neither is right in
general.

### The bootstrap-$t$ interval

The best-behaved simple method imitates Student. For each resample compute not just $\hat{\theta}^*$ but the
**studentised** value

$$
T^* = \frac{\hat{\theta}^* - \hat{\theta}}{\widehat{\text{se}}^*},
$$

where $\widehat{\text{se}}^*$ is a standard error estimated from that resample (for a mean, $s^*/\sqrt{n}$). Let
$t^*_a$ be the quantiles of the $T^*$ values. The interval is

$$
\big(\hat{\theta} - t^*_{0.975}\,\widehat{\text{se}},\ \ \hat{\theta} - t^*_{0.025}\,\widehat{\text{se}}\big),
$$

where $\widehat{\text{se}}$ is the standard error from the original data. It is like the $t$ interval, but the table of
$t$ values is replaced by quantiles learned from the data, which adapt to skewness. Theory (Peter Hall's work in the
1980s and 1990s, using expansions beyond the CLT) shows that its coverage error shrinks faster with $n$ than that of the
percentile, basic or normal intervals, *when* a good standard error formula is available. Without one, you need a
second, nested bootstrap inside each resample, which is expensive.

Efron's **BCa** interval ("bias-corrected and accelerated") adjusts the percentile interval for bias and for a standard
error that changes with $\theta$, and has the same improved accuracy without needing a standard error formula. Its
formulas are longer; Efron and Tibshirani give them.

### When to trust a bootstrap interval

- With small samples (say $n < 20$), all bootstrap intervals tend to be **too narrow**, because the data underrepresent
  the tails of the population. The percentile interval for the mean in Example 8.7 is narrower than the $t$ interval
  partly for this reason.
- They fail where the bootstrap itself fails ([Chapter 6](06-Sampling-Distributions.md)): extremes such as the maximum,
  heavy tails with infinite variance, dependent data.
- Use enough resamples: interval endpoints are tail quantiles, which are noisier than standard deviations; $B$ of
  several thousand is usual.
- Compare methods. If the percentile, basic and bootstrap-$t$ intervals disagree badly, the sample is telling you that
  the sampling distribution is skewed or the sample is too small, and that is worth knowing.

[Chapter 15](15-Nonparametric-Methods.md) returns to the bootstrap with the theory of why it works.

## A short history

Confidence intervals in their modern form were introduced by Jerzy Neyman in a 1934 paper on sampling (the one cited in
[Chapter 5](05-Sampling-and-Experiments.md)) and developed in full in his 1937 "Outline of a theory of statistical
estimation based on the classical theory of probability". Fisher had proposed a rival idea, "fiducial probability",
which tried to give a probability distribution for the parameter without a prior; the two men disagreed sharply, and
fiducial inference never became standard, though it still has defenders and modern descendants. Wilson's 1927 interval
was largely ignored in teaching for decades while the simpler Wald interval spread through textbooks; the 2001 paper by
Brown, Cai and DasGupta, with its plots of jagged coverage, did much to change that.

## Check yourself

??? question "1. A 95 percent interval for a mean is (12.1, 15.7). Which of these is a correct reading? (a) There is a 95 percent chance the mean is in (12.1, 15.7). (b) 95 percent of the data lie in it. (c) The method used gives intervals that contain the true mean 95 percent of the time."

    Only (c). In the frequentist sense the true mean is fixed, so (a) is not a meaningful probability statement about
    this interval (it would be about a Bayesian credible interval). (b) confuses the spread of the data with the
    uncertainty of the mean.

??? question "2. A machine fills bags with a known standard deviation of 4 grams. A sample of 16 bags has mean 502 grams. Give 95 and 99 percent intervals for the mean fill."

    Standard error $4/4 = 1$. 95 percent: $502 \pm 1.96$, that is $(500.04, 503.96)$. 99 percent: $502 \pm 2.576$,
    that is $(499.42, 504.58)$.

??? question "3. How large a sample is needed to make the 95 percent margin of error for a mean at most 0.5, if $\sigma = 4$?"

    $n = (1.96 \times 4/0.5)^2 = 15.68^2 \approx 245.9$, so $n = 246$.

??? question "4. Sixteen measurements have mean 4.2 and standard deviation 0.8. Give a 95 percent $t$ interval ($t_{15,0.025} = 2.131$)."

    Standard error $0.8/4 = 0.2$. Interval $4.2 \pm 2.131 \times 0.2 = 4.2 \pm 0.426$, that is $(3.774, 4.626)$.

??? question "5. Why is the $t$ multiplier for 2 observations (12.7) so much larger than for 30 (2.05)?"

    With 2 observations, $S$ is estimated from one degree of freedom and is extremely variable: it is often much
    smaller than $\sigma$ (the two values may happen to be close). To keep 95 percent coverage, the interval must
    allow for that, which needs a very large multiplier. With 30 observations, $S$ is close to $\sigma$ and the
    multiplier is close to 1.96.

??? question "6. Show that for $n = 2$, $S^2 = (X_1 - X_2)^2/2$."

    $\bar{X} = (X_1 + X_2)/2$, so $X_1 - \bar{X} = (X_1 - X_2)/2$ and $X_2 - \bar{X} = -(X_1 - X_2)/2$. Their squares
    add to $(X_1 - X_2)^2/2$, and dividing by $n - 1 = 1$ leaves $S^2 = (X_1 - X_2)^2/2$.

??? question "7. A survey of 400 finds 120 who agree. Give the 95 percent Wald and Wilson intervals."

    $\hat{p} = 0.3$. Wald: $0.3 \pm 1.96\sqrt{0.3 \times 0.7/400} = 0.3 \pm 0.0449$, that is $(0.255, 0.345)$. Wilson:
    $z^2/n = 0.0096$; centre $(0.3 + 0.0048)/1.0096 \approx 0.3019$; half-width
    $\frac{1.96}{1.0096}\sqrt{0.000525 + 0.000006} \approx 0.0447$; interval about $(0.257, 0.347)$. With $n$ this large
    and $p$ not near 0 or 1 they are close.

??? question "8. Out of 50 patients, none had a serious side effect. Give the rule-of-three upper bound and the exact one-sided 95 percent bound."

    Rule of three: $3/50 = 0.06$. Exact: $1 - 0.05^{1/50} \approx 0.058$.

??? question "9. Derive the Wilson interval's centre and show it always lies strictly between 0 and 1."

    The roots of $(1 + z^2/n)p^2 - (2\hat{p} + z^2/n)p + \hat{p}^2 = 0$ average to half the sum of roots,
    $\frac{2\hat{p} + z^2/n}{2(1 + z^2/n)} = \frac{\hat{p} + z^2/(2n)}{1 + z^2/n}$. This is a weighted average of
    $\hat{p}$ (weight $\frac{1}{1 + z^2/n}$) and $\tfrac12$ (weight $\frac{z^2/n}{1 + z^2/n}$), both weights positive,
    so it lies strictly between $\hat{p}$ and $\tfrac12$, hence strictly between 0 and 1.

??? question "10. A pollster wants a 95 percent margin of error of 4 points for each of 5 regions reported separately. About how many people must she interview in all?"

    For one region: $n = 1.96^2/(4 \times 0.04^2) \approx 600.25$, so 601. For five regions: about $5 \times 601 = 3005$. (A single national estimate would need only 601.)

??? question "11. Bootstrap estimates of a median, sorted, have 2.5 and 97.5 percent points 41 and 55, and the sample median is 46. Give the percentile and basic intervals. Which way does the skewness point?"

    Percentile: $(41, 55)$. Basic: $(2 \times 46 - 55,\ 2 \times 46 - 41) = (37, 51)$. The bootstrap distribution
    stretches further above the estimate (9 units) than below (5 units): it is skewed to the right. The basic interval
    reflects this skewness to the left of the estimate, the percentile interval keeps it on the right; the two
    methods make opposite assumptions about how the skewness carries over.

??? question "12. Using the $t_\nu$ density, show that for $\nu = 1$ the $t$ distribution is the Cauchy distribution $f(t) = \frac{1}{\pi(1 + t^2)}$."

    With $\nu = 1$: $\Gamma(1) = 1$ and $\Gamma(1/2) = \sqrt{\pi}$, so the constant is
    $\frac{\Gamma(1)}{\sqrt{\pi}\,\Gamma(1/2)} = \frac{1}{\sqrt{\pi}\sqrt{\pi}} = \frac{1}{\pi}$, and the power is
    $(1 + t^2)^{-1}$. So $f(t) = \frac{1}{\pi(1 + t^2)}$.

## What you learned

- A $1 - \alpha$ confidence interval comes from a procedure that covers the true parameter with probability $1 - \alpha$;
  the probability is about the method, not about one computed interval.
- With known $\sigma$ and normal data, $\bar{X} \pm z_{\alpha/2}\sigma/\sqrt{n}$ is exact; it comes from inverting a
  pivot.
- With unknown $\sigma$, Student's $t$ (Gosset, 1908; Fisher's proof) gives exact intervals for normal data,
  $\bar{X} \pm t_{n-1,\alpha/2}S/\sqrt{n}$; using 1.96 instead undercovers badly in small samples.
- The Wald interval for a proportion can badly undercover near 0 or 1 and behaves erratically in $n$; the Wilson and
  Agresti-Coull intervals, centred near $(x+2)/(n+4)$, are much better. With zero successes, the rule of three gives
  about $3/n$.
- Sample size for a margin $E$ is $(z\sigma/E)^2$, or $z^2/(4E^2)$ for a proportion; precision costs the square.
- Bootstrap intervals (percentile, basic, bootstrap-$t$, BCa) need no formula, but undercover with small samples and fail
  where the bootstrap fails.

**Next:** [Chapter 9](09-Hypothesis-Tests.md), hypothesis tests and p-values, the other face of the same reasoning.

## Further reading

- Student (W. S. Gosset), "The probable error of a mean", *Biometrika* 6(1), 1908.
- R. A. Fisher, *Statistical Methods for Research Workers*, 1925.
- J. Neyman, "Outline of a theory of statistical estimation based on the classical theory of probability",
  *Philosophical Transactions of the Royal Society A* 236, 1937.
- E. B. Wilson, "Probable inference, the law of succession, and statistical inference", *Journal of the American
  Statistical Association* 22, 1927.
- A. Agresti and B. A. Coull, "Approximate is better than 'exact' for interval estimation of binomial proportions",
  *The American Statistician* 52(2), 1998.
- L. D. Brown, T. T. Cai and A. DasGupta, "Interval estimation for a binomial proportion", *Statistical Science* 16(2),
  2001.
- R. Hoekstra, R. D. Morey, J. N. Rouder and E.-J. Wagenmakers, "Robust misinterpretation of confidence intervals",
  *Psychonomic Bulletin and Review* 21, 2014.
- B. Efron and R. J. Tibshirani, *An Introduction to the Bootstrap*, 1993; P. Hall, *The Bootstrap and Edgeworth
  Expansion*, 1992.
- G. Casella and R. L. Berger, *Statistical Inference*, 2nd edition, 2002, chapters 5 and 9.
- On this site: the Topics lessons on [confidence intervals](../../topics/statistics/level-8/02-confidence-intervals.md)
  and [the normal distribution](../../topics/probability/level-8/03-normal-distribution.md);
  [Probability, Chapter 10](../probability/10-The-Normal-Distribution.md); [Chapter 14](14-Bayesian-Statistics.md)
  for credible intervals; the [Probability book](../probability/index.md).
