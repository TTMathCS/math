# 7. Estimation

*Chapter 6 asked how a statistic varies when we know the population. Now turn it around: we have data and want a
number for something unknown, a mean, a proportion, a rate, the size of a population. Any recipe that turns data into
such a number is an estimator, and there are always many to choose from. Which is best? This chapter gives the
yardsticks (bias, variance and mean squared error, with the decomposition that ties them together), settles the old
puzzle of why sample variances divide by $n-1$, and then builds estimators from two general principles: match the
moments, or choose the value that makes the data most likely. The second, maximum likelihood, is the workhorse of
modern statistics. We will use it on coins, heights and waiting times, and on a problem that mattered in the Second
World War: how many tanks is the enemy building, judged from the serial numbers of the ones captured?*

!!! abstract "In this chapter"
    **You will learn:**

    - what an estimator is, and the three measures of its quality: bias, variance and mean squared error, with the
      proof that MSE = variance + bias squared
    - why a biased estimator can be better than an unbiased one
    - a proof that dividing by $n-1$ makes the sample variance unbiased, and what that does and does not mean
    - the method of moments, with examples
    - maximum likelihood: the idea, how to find the maximum with calculus, and worked examples for the binomial,
      normal and exponential laws
    - the German tank problem: the estimator $m + m/k - 1$, its proof of unbiasedness, and the real wartime story
    - consistency: what it means for an estimator to home in on the truth, and an example where maximum likelihood fails
      to

    **You need:** [Chapter 6](06-Sampling-Distributions.md) (sampling distributions, standard error). From Probability:
    [Chapter 5](../probability/05-Discrete-Random-Variables.md) (binomial), [Chapter 6](../probability/06-Expectation-and-Variance.md)
    (expectation and variance), [Chapter 7](../probability/07-Inequalities-and-the-Law-of-Large-Numbers.md) (Chebyshev,
    the law of large numbers) and [Chapter 9](../probability/09-Continuous-Random-Variables.md) (densities, the
    exponential law). Calculus: derivatives and finding maxima (the MAT137 guide on
    [derivatives](../../uoft/MAT137/unit03.md) and [applications of derivatives](../../uoft/MAT137/unit06.md)); 7.4 also
    uses one integral.

    **Levels:** 7.1 and 7.2 are intermediate; 7.3 is intermediate; 7.4 is intermediate to advanced; 7.5 is advanced.

## 7.1 Estimators, bias, variance and mean squared error

### The question

A factory wants to know the average lifetime $\mu$ of its light bulbs. It tests 20 bulbs. It could report the sample
mean. Or the sample median. Or the mean after dropping the shortest and longest lives. Or, if it believes lifetimes are
exponential, $\log 2$ times the median... Each is a reasonable recipe, each gives a different number, and none is
exactly right. We need a way to say which recipe is better *before* knowing the answer.

### The words

The unknown number we want is a **parameter**, written with a Greek letter, often $\theta$ ("theta"). An **estimator**
is a rule that turns the data into a guess at $\theta$; we write it $\hat{\theta}$ ("theta hat"). Because the data are
random, $\hat{\theta}$ is a random variable, with a sampling distribution ([Chapter 6](06-Sampling-Distributions.md)).
The number it gives for our particular data is an **estimate**.

We judge an estimator by its sampling distribution: where it is centred, and how spread it is.

- The **bias** of $\hat{\theta}$ is $\operatorname{bias}(\hat{\theta}) = E[\hat{\theta}] - \theta$: how far the centre
  of its sampling distribution is from the truth. If the bias is zero for every possible $\theta$, the estimator is
  **unbiased**.
- The **variance** $\operatorname{Var}(\hat{\theta})$ measures its spread; its square root is the **standard error**.
- The **mean squared error** combines the two: $\operatorname{MSE}(\hat{\theta}) = E\big[(\hat{\theta} - \theta)^2\big]$,
  the average squared distance from the truth.

The classic picture is a target: the centre is $\theta$, and each shot is the estimate from a different sample.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 640 210" role="img" aria-label="Four targets, each hit by 8 shots. Low bias and low variance: shots tightly grouped on the centre. Low bias, high variance: shots spread widely around the centre. High bias, low variance: shots tightly grouped away from the centre. High bias, high variance: shots spread widely around a point away from the centre.">
<circle cx="85" cy="90" r="60" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="85" cy="90" r="40" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="85" cy="90" r="20" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="85" cy="90" r="3" fill="currentColor"/>
<circle cx="85.2" cy="92.8" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="82.2" cy="92.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="90.6" cy="92.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="94.4" cy="84.7" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="85.4" cy="85.8" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="80.3" cy="88.9" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="86.3" cy="92.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="88.0" cy="103.4" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<text x="85" y="175" text-anchor="middle" font-size="12" fill="currentColor">low bias</text>
<text x="85" y="191" text-anchor="middle" font-size="12" fill="currentColor">low variance</text>
<circle cx="242" cy="90" r="60" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="242" cy="90" r="40" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="242" cy="90" r="20" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="242" cy="90" r="3" fill="currentColor"/>
<circle cx="259.3" cy="58.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="246.1" cy="77.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="231.7" cy="116.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="237.5" cy="51.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="248.2" cy="84.2" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="218.5" cy="71.6" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="229.5" cy="89.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="233.5" cy="91.4" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<text x="242" y="175" text-anchor="middle" font-size="12" fill="currentColor">low bias</text>
<text x="242" y="191" text-anchor="middle" font-size="12" fill="currentColor">high variance</text>
<circle cx="399" cy="90" r="60" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="399" cy="90" r="40" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="399" cy="90" r="20" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="399" cy="90" r="3" fill="currentColor"/>
<circle cx="432.0" cy="72.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="416.2" cy="75.3" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="427.6" cy="72.6" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="429.6" cy="69.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="414.8" cy="76.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="415.8" cy="73.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="423.7" cy="81.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="421.7" cy="75.2" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<text x="399" y="175" text-anchor="middle" font-size="12" fill="currentColor">high bias</text>
<text x="399" y="191" text-anchor="middle" font-size="12" fill="currentColor">low variance</text>
<circle cx="556" cy="90" r="60" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="556" cy="90" r="40" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="556" cy="90" r="20" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
<circle cx="556" cy="90" r="3" fill="currentColor"/>
<circle cx="604.9" cy="84.9" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="573.3" cy="101.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="560.0" cy="80.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="591.2" cy="76.6" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="566.5" cy="83.8" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="567.2" cy="64.9" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="557.5" cy="102.9" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<circle cx="567.0" cy="99.9" r="4" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
<text x="556" y="175" text-anchor="middle" font-size="12" fill="currentColor">high bias</text>
<text x="556" y="191" text-anchor="middle" font-size="12" fill="currentColor">high variance</text>
</svg>
</div>

### The decomposition

**Theorem.** For any estimator with finite variance,

$$
\operatorname{MSE}(\hat{\theta}) = \operatorname{Var}(\hat{\theta}) + \big(\operatorname{bias}(\hat{\theta})\big)^2 .
$$

*Proof.* Write $m = E[\hat{\theta}]$. Then $\hat{\theta} - \theta = (\hat{\theta} - m) + (m - \theta)$, where the second
bracket is a fixed number, the bias $b$. Squaring and taking expectations,

$$
E\big[(\hat{\theta} - \theta)^2\big] = E\big[(\hat{\theta} - m)^2\big] + 2b\,E[\hat{\theta} - m] + b^2
= \operatorname{Var}(\hat{\theta}) + 0 + b^2,
$$

because $E[\hat{\theta} - m] = m - m = 0$. $\blacksquare$

This is the same algebra as the decomposition of a population's variance into within and between parts in
[Chapter 5](05-Sampling-and-Experiments.md), and as the bias-variance trade-off of machine learning
([Chapter 19](19-Statistical-Learning.md)). It says that error has two sources, and that you can trade one for the other.

**Example 7.1.** The sample mean $\bar{X}$ of iid data is unbiased for $\mu$, with variance $\sigma^2/n$
([Chapter 6](06-Sampling-Distributions.md)). So $\operatorname{MSE}(\bar{X}) = \sigma^2/n$. The single first
observation $X_1$ is also unbiased, but has MSE $\sigma^2$. Both are unbiased; the mean is $n$ times better.

### Biased can beat unbiased

*Level: intermediate.*

Unbiasedness sounds like a virtue that every estimator should have. It is not that simple.

**Example 7.2 (the uniform maximum).** Suppose $X_1, \dots, X_n$ are uniform on the interval $[0, \theta]$ and we want
$\theta$, the upper end. (Imagine a random number generator that produces numbers up to some unknown limit.) Three
estimators:

1. $\hat{\theta}_1 = 2\bar{X}$, since the mean of the uniform is $\theta/2$;
2. $\hat{\theta}_2 = M = \max(X_1, \dots, X_n)$, the largest value seen;
3. $\hat{\theta}_3 = \frac{n+1}{n}M$, a stretched maximum.

*The first.* $E[2\bar{X}] = 2 \cdot \theta/2 = \theta$, unbiased. A uniform on $[0,\theta]$ has variance $\theta^2/12$,
so $\operatorname{Var}(2\bar{X}) = 4 \cdot \frac{\theta^2}{12n} = \frac{\theta^2}{3n}$, and that is its MSE.

*The second.* $M \le x$ exactly when all $n$ values are at most $x$, so $P(M \le x) = (x/\theta)^n$ for
$0 \le x \le \theta$, and $M$ has density $f(x) = n x^{n-1}/\theta^n$. Integrating,

$$
E[M] = \int_0^\theta x \cdot \frac{n x^{n-1}}{\theta^n}\,dx = \frac{n}{n+1}\theta, \qquad
E[M^2] = \frac{n}{n+2}\theta^2,
$$

so $M$ is biased low by $\theta/(n+1)$ (of course: the maximum can never exceed $\theta$). Its variance is
$\frac{n}{n+2}\theta^2 - \frac{n^2}{(n+1)^2}\theta^2 = \frac{n\theta^2}{(n+1)^2(n+2)}$, and by the theorem

$$
\operatorname{MSE}(M) = \frac{n\theta^2}{(n+1)^2(n+2)} + \frac{\theta^2}{(n+1)^2} = \frac{2\theta^2}{(n+1)(n+2)}.
$$

*The third.* $E[\hat{\theta}_3] = \frac{n+1}{n}\cdot\frac{n}{n+1}\theta = \theta$, unbiased, with MSE equal to its
variance, $\big(\frac{n+1}{n}\big)^2\frac{n\theta^2}{(n+1)^2(n+2)} = \frac{\theta^2}{n(n+2)}$.

For $n = 10$:

| estimator | bias | MSE (in units of $\theta^2$) |
|---|---|---|
| $2\bar{X}$ | 0 | $1/30 \approx 0.0333$ |
| $M$ | $-\theta/11$ | $2/132 \approx 0.0152$ |
| $\frac{11}{10}M$ | 0 | $1/120 \approx 0.0083$ |

The biased $M$ beats the unbiased $2\bar{X}$ by more than a factor of 2. Among multiples $cM$, calculus shows the MSE
is smallest at $c = \frac{n+2}{n+1}$, giving $\theta^2/(n+1)^2 = 1/121 \approx 0.0083$: slightly biased, and slightly
better than the unbiased $\hat{\theta}_3$. Also notice the *rate*: $2\bar{X}$ has MSE of order $1/n$, the maximum-based
estimators of order $1/n^2$. Using the right feature of the data matters more than unbiasedness.

So the goal is small MSE, or more generally small error in whatever sense matters for the problem. Unbiasedness is a
useful property, often a convenient one, but not sacred. Much of modern statistics (ridge regression and the lasso in
[Chapter 18](18-High-Dimensional-Statistics.md), Bayesian shrinkage in [Chapter 14](14-Bayesian-Statistics.md))
deliberately accepts a little bias for a big cut in variance.

## 7.2 Why divide by $n-1$

### The puzzle

[Chapter 3](03-Summaries.md) defined the sample variance as

$$
s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i - \bar{x})^2,
$$

with $n-1$ instead of the $n$ you might expect. Here is why.

If we knew the true mean $\mu$, the natural estimate of $\sigma^2$ would be $\frac{1}{n}\sum (X_i - \mu)^2$, and it is
unbiased, since each term has expectation $\sigma^2$. But we do not know $\mu$; we use $\bar{X}$ in its place. And
$\bar{X}$ is, by construction, the number closest to the data in squared distance ([Chapter 3](03-Summaries.md) proved
that the mean minimises $\sum (x_i - c)^2$). So $\sum (X_i - \bar{X})^2 \le \sum (X_i - \mu)^2$ always: measuring
spread around the sample's own centre makes the data look less spread than they are. Dividing by a slightly smaller
number corrects this.

### The proof

**Theorem.** If $X_1, \dots, X_n$ ($n \ge 2$) are iid with mean $\mu$ and variance $\sigma^2$, then

$$
E\Big[\sum_{i=1}^n (X_i - \bar{X})^2\Big] = (n-1)\sigma^2, \qquad\text{so}\qquad E[S^2] = \sigma^2
\quad\text{for}\quad S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2 .
$$

*Proof.* Start from the identity (expand the square and use $\sum (X_i - \bar{X}) = 0$):

$$
\sum_{i=1}^n (X_i - \mu)^2 = \sum_{i=1}^n (X_i - \bar{X})^2 + n(\bar{X} - \mu)^2 .
$$

To check it, write $X_i - \mu = (X_i - \bar{X}) + (\bar{X} - \mu)$ and square: the cross term is
$2(\bar{X} - \mu)\sum_i (X_i - \bar{X}) = 0$. Now take expectations. The left side is $n\sigma^2$. The last term is
$n\,E[(\bar{X} - \mu)^2] = n\operatorname{Var}(\bar{X}) = n \cdot \sigma^2/n = \sigma^2$. Therefore

$$
E\Big[\sum_i (X_i - \bar{X})^2\Big] = n\sigma^2 - \sigma^2 = (n-1)\sigma^2 . \qquad \blacksquare
$$

The proof shows exactly what goes on: of the total spread $n\sigma^2$ around the true mean, an amount $\sigma^2$ on
average is "used up" by estimating the mean. The number $n - 1$ is called the **degrees of freedom**: the $n$ deviations
$X_i - \bar{X}$ must add to zero, so only $n - 1$ of them are free.

**Example 7.3 (two dice, exactly).** Roll a die twice. With $n = 2$, $\sum (X_i - \bar{X})^2 = (X_1 - X_2)^2/2$ (check:
each deviation is $\pm(X_1 - X_2)/2$). So $S^2 = (X_1 - X_2)^2/2$. Averaging over all 36 outcomes by computer gives
exactly $35/12$, which is $\sigma^2$ for one die. The divisor-$n$ version, $(X_1 - X_2)^2/4$, averages $35/24$, half of
the truth.

### What it does not mean

- **$S$ is not unbiased for $\sigma$.** The square root is a concave function, so by Jensen's inequality
  $E[S] \le \sqrt{E[S^2]} = \sigma$, with strict inequality unless $S$ is constant. For normal data with $n = 10$,
  $E[S] \approx 0.973\,\sigma$. Nobody worries much, because the bias is small and fades as $n$ grows.
- **$n-1$ is not "more accurate" in MSE.** For normal data, the divisor that minimises the MSE of the variance estimate is
  $n+1$ (a short calculation with $\operatorname{Var}(S^2) = 2\sigma^4/(n-1)$, which holds for normal data). Again,
  unbiasedness and smallest error are different goals.
- **For large $n$ it hardly matters.** The ratio $n/(n-1)$ is $1.01$ for $n = 101$. The divisor matters for small
  samples, where it is one of several corrections ([Chapter 8](08-Confidence-Intervals.md) on Student's $t$ is the
  important one).

<figure class="play" data-play="nminus1"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Why divide by n − 1: dividing by n comes out too small on average; n − 1 comes out right.</figcaption></figure>

## 7.3 The method of moments

### The idea

The oldest general recipe for estimators is to match averages. The $k$-th **moment** of a distribution is $E[X^k]$; the
$k$-th **sample moment** is $\frac{1}{n}\sum x_i^k$. By the law of large numbers, sample moments are close to the true
ones for large $n$. If the distribution has $r$ unknown parameters, the moments are functions of them; set the first $r$
moments equal to the sample moments and solve. That is the **method of moments**, used systematically by Karl Pearson
from the 1890s.

### Examples

**Uniform on $[0,\theta]$.** $E[X] = \theta/2$. Setting $\theta/2 = \bar{x}$ gives $\hat{\theta} = 2\bar{x}$, the first
estimator of Example 7.2. Unbiased, but, as we saw, not very good, and it can even give an impossible answer: if the
data are $1, 1, 9$, then $2\bar{x} = 22/3 \approx 7.3$, smaller than the observed 9.

**Exponential with rate $\lambda$** (mean $1/\lambda$). Setting $1/\lambda = \bar{x}$ gives $\hat{\lambda} = 1/\bar{x}$.

**Normal.** $E[X] = \mu$ and $E[X^2] = \sigma^2 + \mu^2$. Matching both gives $\hat{\mu} = \bar{x}$ and
$\hat{\sigma}^2 = \frac{1}{n}\sum x_i^2 - \bar{x}^2 = \frac{1}{n}\sum (x_i - \bar{x})^2$, the divisor-$n$ variance.

**Gamma.** The gamma law with shape $k$ and scale $s$ has mean $ks$ and variance $ks^2$. So variance divided by mean is
$s$, and mean squared divided by variance is $k$:

$$
\hat{s} = \frac{\hat{\sigma}^2}{\bar{x}}, \qquad \hat{k} = \frac{\bar{x}^2}{\hat{\sigma}^2}.
$$

**Example 7.4 (made-up rainfall amounts).** Ten rainy days gave amounts (in millimetres)
$2.1, 3.4, 1.2, 5.6, 2.8, 4.1, 1.9, 3.3, 2.5, 4.6$. Then $\bar{x} = 3.15$ and the divisor-$n$ variance is
$\hat{\sigma}^2 \approx 1.6105$. So $\hat{s} \approx 1.6105/3.15 \approx 0.511$ and $\hat{k} \approx 3.15^2/1.6105 \approx 6.16$.

*Check:* $\hat{k}\hat{s} \approx 6.16 \times 0.511 \approx 3.15 = \bar{x}$ and $\hat{k}\hat{s}^2 \approx 1.61$.

### Strengths and weaknesses

The method is easy: no calculus beyond solving equations, and it gives a starting point for anything. It is usually
**consistent** (7.5): sample moments converge to true moments, and if the parameters are continuous functions of the
moments, the estimates converge too. But it ignores most of the information in the data when the distribution is not
well summarised by its first moments (as for the uniform), and it can give impossible values. Maximum likelihood fixes
both problems in most cases, at the cost of more work.

## 7.4 Maximum likelihood

### The idea

Here is a question that turns estimation around. Suppose the data are fixed, and ask of each possible value of the
parameter: **if this were the truth, how probable would our data have been?** Then choose the value that makes the
data most probable.

This was proposed by Fisher in 1912 and developed by him in the 1920s. It is now the default method of estimation in
nearly every field.

### Definitions

Let the data $x_1, \dots, x_n$ come from a model with probability (or density) $f(x \mid \theta)$, independently. The
**likelihood function** is

$$
L(\theta) = \prod_{i=1}^n f(x_i \mid \theta),
$$

seen as a function of $\theta$ with the data held fixed. The **maximum likelihood estimate** (MLE) $\hat{\theta}$ is the
value of $\theta$ that makes $L(\theta)$ largest.

Two practical remarks.

- **Work with the log.** Products are awkward; logs turn them into sums. Since $\log$ is increasing, $L$ and the
  **log-likelihood** $\ell(\theta) = \log L(\theta) = \sum_i \log f(x_i \mid \theta)$ have their maximum at the same
  place.
- **Use calculus when you can.** If $\ell$ is smooth, the maximum is usually where $\ell'(\theta) = 0$ (the
  **likelihood equation**). Check that it is a maximum (for instance $\ell'' < 0$), and watch the boundaries: sometimes
  the maximum is at an endpoint where the derivative is not zero, as in the German tank problem below.

The likelihood is *not* a probability distribution for $\theta$; it need not integrate to 1, and only ratios of its
values mean anything. Turning it into a distribution for $\theta$ requires a prior, which is the Bayesian route of
[Chapter 14](14-Bayesian-Statistics.md). [Chapter 13](13-Likelihood-Theory.md) develops the theory of likelihood in
depth.

### Example: the binomial

**Example 7.5.** In 20 independent trials there are 7 successes. Estimate the success probability $p$.

The probability of the data is $\binom{20}{7}p^7(1-p)^{13}$. The binomial coefficient does not depend on $p$, so it does
not affect where the maximum is. The log-likelihood is

$$
\ell(p) = \text{const} + 7\log p + 13\log(1-p), \qquad
\ell'(p) = \frac{7}{p} - \frac{13}{1-p} .
$$

Setting $\ell'(p) = 0$: $7(1-p) = 13p$, so $7 = 20p$ and $\hat{p} = 7/20 = 0.35$. And
$\ell''(p) = -7/p^2 - 13/(1-p)^2 < 0$, so it is a maximum.

In general, $x$ successes in $n$ trials give $\hat{p} = x/n$: the MLE is the sample proportion, as common sense
suggests. (If $x = 0$ or $x = n$ the maximum is at the endpoint $p = 0$ or $p = 1$, and the formula still holds.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 250" role="img" aria-label="The likelihood of p after 7 successes in 20 trials, drawn as a single hump over p from 0 to 1, scaled so its peak is 1. The peak is at p = 0.35, marked with a dashed line.">
<line x1="60" y1="200" x2="560" y2="200" stroke="currentColor" stroke-width="1.5"/>
<line x1="60" y1="200" x2="60" y2="30" stroke="currentColor" stroke-width="1.5"/>
<line x1="60.0" y1="200" x2="60.0" y2="204" stroke="currentColor"/><text x="60.0" y="218" text-anchor="middle" font-size="11" fill="currentColor">0.0</text>
<line x1="160.0" y1="200" x2="160.0" y2="204" stroke="currentColor"/><text x="160.0" y="218" text-anchor="middle" font-size="11" fill="currentColor">0.2</text>
<line x1="260.0" y1="200" x2="260.0" y2="204" stroke="currentColor"/><text x="260.0" y="218" text-anchor="middle" font-size="11" fill="currentColor">0.4</text>
<line x1="360.0" y1="200" x2="360.0" y2="204" stroke="currentColor"/><text x="360.0" y="218" text-anchor="middle" font-size="11" fill="currentColor">0.6</text>
<line x1="460.0" y1="200" x2="460.0" y2="204" stroke="currentColor"/><text x="460.0" y="218" text-anchor="middle" font-size="11" fill="currentColor">0.8</text>
<line x1="560.0" y1="200" x2="560.0" y2="204" stroke="currentColor"/><text x="560.0" y="218" text-anchor="middle" font-size="11" fill="currentColor">1.0</text>
<line x1="56" y1="120.0" x2="60" y2="120.0" stroke="currentColor"/><text x="52" y="124.0" text-anchor="end" font-size="11" fill="currentColor">0.5</text>
<line x1="56" y1="40.0" x2="60" y2="40.0" stroke="currentColor"/><text x="52" y="44.0" text-anchor="end" font-size="11" fill="currentColor">1.0</text>
<polyline points="60.0,200.0 61.2,200.0 62.5,200.0 63.8,200.0 65.0,200.0 66.2,200.0 67.5,200.0 68.8,200.0 70.0,200.0 71.2,200.0 72.5,200.0 73.8,200.0 75.0,200.0 76.2,200.0 77.5,200.0 78.8,200.0 80.0,200.0 81.2,200.0 82.5,200.0 83.8,200.0 85.0,200.0 86.2,200.0 87.5,200.0 88.8,199.9 90.0,199.9 91.2,199.9 92.5,199.9 93.8,199.8 95.0,199.8 96.2,199.7 97.5,199.7 98.8,199.6 100.0,199.5 101.2,199.4 102.5,199.3 103.8,199.2 105.0,199.1 106.2,198.9 107.5,198.7 108.8,198.5 110.0,198.3 111.2,198.0 112.5,197.8 113.8,197.5 115.0,197.1 116.2,196.7 117.5,196.3 118.8,195.9 120.0,195.4 121.2,194.9 122.5,194.3 123.8,193.7 125.0,193.1 126.2,192.4 127.5,191.7 128.8,190.9 130.0,190.0 131.2,189.1 132.5,188.2 133.8,187.2 135.0,186.1 136.2,185.0 137.5,183.8 138.8,182.6 140.0,181.3 141.2,179.9 142.5,178.5 143.8,177.0 145.0,175.5 146.2,173.9 147.5,172.3 148.8,170.6 150.0,168.8 151.2,167.0 152.5,165.1 153.8,163.1 155.0,161.2 156.2,159.1 157.5,157.0 158.8,154.9 160.0,152.7 161.2,150.4 162.5,148.1 163.8,145.8 165.0,143.4 166.2,141.0 167.5,138.6 168.8,136.1 170.0,133.6 171.2,131.1 172.5,128.6 173.8,126.0 175.0,123.4 176.2,120.8 177.5,118.2 178.8,115.6 180.0,112.9 181.2,110.3 182.5,107.7 183.8,105.1 185.0,102.5 186.2,99.9 187.5,97.3 188.8,94.7 190.0,92.2 191.2,89.7 192.5,87.2 193.8,84.8 195.0,82.4 196.2,80.0 197.5,77.7 198.8,75.4 200.0,73.2 201.2,71.0 202.5,68.9 203.8,66.8 205.0,64.8 206.2,62.9 207.5,61.0 208.8,59.2 210.0,57.5 211.2,55.8 212.5,54.2 213.8,52.7 215.0,51.3 216.2,49.9 217.5,48.7 218.8,47.5 220.0,46.4 221.2,45.4 222.5,44.4 223.8,43.6 225.0,42.8 226.2,42.2 227.5,41.6 228.8,41.1 230.0,40.7 231.2,40.4 232.5,40.2 233.8,40.0 235.0,40.0 236.2,40.0 237.5,40.2 238.8,40.4 240.0,40.7 241.2,41.1 242.5,41.6 243.8,42.1 245.0,42.7 246.2,43.5 247.5,44.2 248.8,45.1 250.0,46.1 251.2,47.1 252.5,48.2 253.8,49.3 255.0,50.5 256.2,51.8 257.5,53.2 258.8,54.6 260.0,56.1 261.2,57.6 262.5,59.2 263.8,60.8 265.0,62.5 266.2,64.2 267.5,66.0 268.8,67.8 270.0,69.7 271.2,71.6 272.5,73.5 273.8,75.4 275.0,77.4 276.2,79.4 277.5,81.5 278.8,83.5 280.0,85.6 281.2,87.7 282.5,89.8 283.8,91.9 285.0,94.1 286.2,96.2 287.5,98.4 288.8,100.5 290.0,102.7 291.2,104.8 292.5,107.0 293.8,109.1 295.0,111.3 296.2,113.4 297.5,115.5 298.8,117.6 300.0,119.7 301.2,121.8 302.5,123.9 303.8,125.9 305.0,128.0 306.2,130.0 307.5,132.0 308.8,133.9 310.0,135.9 311.2,137.8 312.5,139.7 313.8,141.5 315.0,143.3 316.2,145.1 317.5,146.9 318.8,148.6 320.0,150.3 321.2,152.0 322.5,153.7 323.8,155.3 325.0,156.9 326.2,158.4 327.5,159.9 328.8,161.4 330.0,162.8 331.2,164.2 332.5,165.6 333.8,166.9 335.0,168.2 336.2,169.5 337.5,170.7 338.8,171.9 340.0,173.1 341.2,174.2 342.5,175.3 343.8,176.4 345.0,177.4 346.2,178.4 347.5,179.4 348.8,180.3 350.0,181.2 351.2,182.1 352.5,182.9 353.8,183.7 355.0,184.5 356.2,185.3 357.5,186.0 358.8,186.7 360.0,187.4 361.2,188.0 362.5,188.6 363.8,189.2 365.0,189.8 366.2,190.3 367.5,190.9 368.8,191.4 370.0,191.8 371.2,192.3 372.5,192.7 373.8,193.1 375.0,193.5 376.2,193.9 377.5,194.3 378.8,194.6 380.0,195.0 381.2,195.3 382.5,195.6 383.8,195.8 385.0,196.1 386.2,196.4 387.5,196.6 388.8,196.8 390.0,197.0 391.2,197.2 392.5,197.4 393.8,197.6 395.0,197.8 396.2,197.9 397.5,198.1 398.8,198.2 400.0,198.3 401.2,198.5 402.5,198.6 403.8,198.7 405.0,198.8 406.2,198.9 407.5,199.0 408.8,199.0 410.0,199.1 411.2,199.2 412.5,199.3 413.8,199.3 415.0,199.4 416.2,199.4 417.5,199.5 418.8,199.5 420.0,199.6 421.2,199.6 422.5,199.6 423.8,199.7 425.0,199.7 426.2,199.7 427.5,199.8 428.8,199.8 430.0,199.8 431.2,199.8 432.5,199.8 433.8,199.9 435.0,199.9 436.2,199.9 437.5,199.9 438.8,199.9 440.0,199.9 441.2,199.9 442.5,199.9 443.8,199.9 445.0,199.9 446.2,200.0 447.5,200.0 448.8,200.0 450.0,200.0 451.2,200.0 452.5,200.0 453.8,200.0 455.0,200.0 456.2,200.0 457.5,200.0 458.8,200.0 460.0,200.0 461.2,200.0 462.5,200.0 463.8,200.0 465.0,200.0 466.2,200.0 467.5,200.0 468.8,200.0 470.0,200.0 471.2,200.0 472.5,200.0 473.8,200.0 475.0,200.0 476.2,200.0 477.5,200.0 478.8,200.0 480.0,200.0 481.2,200.0 482.5,200.0 483.8,200.0 485.0,200.0 486.2,200.0 487.5,200.0 488.8,200.0 490.0,200.0 491.2,200.0 492.5,200.0 493.8,200.0 495.0,200.0 496.2,200.0 497.5,200.0 498.8,200.0 500.0,200.0 501.2,200.0 502.5,200.0 503.8,200.0 505.0,200.0 506.2,200.0 507.5,200.0 508.8,200.0 510.0,200.0 511.2,200.0 512.5,200.0 513.8,200.0 515.0,200.0 516.2,200.0 517.5,200.0 518.8,200.0 520.0,200.0 521.2,200.0 522.5,200.0 523.8,200.0 525.0,200.0 526.2,200.0 527.5,200.0 528.8,200.0 530.0,200.0 531.2,200.0 532.5,200.0 533.8,200.0 535.0,200.0 536.2,200.0 537.5,200.0 538.8,200.0 540.0,200.0 541.2,200.0 542.5,200.0 543.8,200.0 545.0,200.0 546.2,200.0 547.5,200.0 548.8,200.0 550.0,200.0 551.2,200.0 552.5,200.0 553.8,200.0 555.0,200.0 556.2,200.0 557.5,200.0 558.8,200.0 560.0,200.0" fill="none" stroke="#eea66f" stroke-width="3"/>
<line x1="235.0" y1="200" x2="235.0" y2="40" stroke="currentColor" stroke-dasharray="4 4"/>
<text x="243.0" y="44" font-size="12" fill="currentColor">maximum at p = 0.35</text>
<text x="310" y="240" text-anchor="middle" font-size="12" fill="currentColor">p</text>
</svg>
</div>

### Example: the normal

**Example 7.6.** Data $x_1, \dots, x_n$ from a normal law $N(\mu, \sigma^2)$, both parameters unknown. The density is
$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-(x - \mu)^2/(2\sigma^2)}$, so

$$
\ell(\mu, \sigma^2) = -\frac{n}{2}\log(2\pi) - \frac{n}{2}\log\sigma^2 - \frac{1}{2\sigma^2}\sum_{i=1}^n (x_i - \mu)^2 .
$$

With two parameters we set both **partial derivatives** to zero (a partial derivative differentiates with respect to
one variable while holding the other fixed).

*In $\mu$:* $\frac{\partial \ell}{\partial \mu} = \frac{1}{\sigma^2}\sum (x_i - \mu) = 0$ gives $\hat{\mu} = \bar{x}$.
(Directly: for any $\sigma^2$, maximising $\ell$ means minimising $\sum (x_i - \mu)^2$, which the mean does.)

*In $\sigma^2$:* write $v = \sigma^2$ and put $\mu = \bar{x}$. Then
$\frac{\partial \ell}{\partial v} = -\frac{n}{2v} + \frac{1}{2v^2}\sum (x_i - \bar{x})^2 = 0$ gives

$$
\hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{x})^2 .
$$

As a function of $v$, $\ell$ increases up to this point and decreases after, so it is the maximum.

So the MLE of the variance uses divisor $n$, and by 7.2 it is biased: $E[\hat{\sigma}^2] = \frac{n-1}{n}\sigma^2$.
Maximum likelihood does not promise unbiasedness. It promises something else, good behaviour for large $n$
([Chapter 13](13-Likelihood-Theory.md)), and the bias here vanishes as $n$ grows.

*Numbers (made up):* heights 168, 175, 171, 180, 166, 173 cm give $\hat{\mu} \approx 172.17$ and
$\hat{\sigma}^2 \approx 21.14$, while $s^2 \approx 25.37$. *Check:* $21.14 \times 6/5 \approx 25.37$.

### Example: the exponential

**Example 7.7.** Waiting times $x_1, \dots, x_n$ from an exponential law with rate $\lambda$, density
$\lambda e^{-\lambda x}$ for $x > 0$. Then

$$
\ell(\lambda) = n\log\lambda - \lambda\sum_i x_i, \qquad \ell'(\lambda) = \frac{n}{\lambda} - \sum_i x_i = 0
\quad\Longrightarrow\quad \hat{\lambda} = \frac{n}{\sum x_i} = \frac{1}{\bar{x}},
$$

and $\ell''(\lambda) = -n/\lambda^2 < 0$. The same as the method of moments.

Made-up data: $1.2, 0.4, 3.1, 0.8, 2.2, 0.5, 1.6, 0.6$ (minutes between arrivals). The sum is $10.4$, $\bar{x} = 1.3$
and $\hat{\lambda} = 1/1.3 \approx 0.769$ arrivals per minute.

**Is it unbiased?** No. The sum $T = \sum X_i$ of $n$ independent exponentials with rate $\lambda$ has the gamma density
$\frac{\lambda^n t^{n-1}e^{-\lambda t}}{(n-1)!}$ ([Probability, Chapter 11](../probability/11-Joint-Distributions.md)).
For $n \ge 2$,

$$
E\Big[\frac{1}{T}\Big] = \int_0^\infty \frac{1}{t}\cdot\frac{\lambda^n t^{n-1}e^{-\lambda t}}{(n-1)!}\,dt
= \frac{\lambda}{n-1}\int_0^\infty \frac{\lambda^{n-1}t^{n-2}e^{-\lambda t}}{(n-2)!}\,dt = \frac{\lambda}{n-1},
$$

because the last integrand is the gamma density with $n-1$ in place of $n$, which integrates to 1. So
$E[\hat{\lambda}] = E[n/T] = \frac{n}{n-1}\lambda$, biased high. The estimator $(n-1)/T$ is unbiased; for the data above
it gives $7/10.4 \approx 0.673$. The difference fades as $n$ grows.

### A useful property: invariance

If $\hat{\theta}$ is the MLE of $\theta$, then for any function $g$, the MLE of $g(\theta)$ is $g(\hat{\theta})$. (For
a one-to-one $g$ this is immediate: re-labelling the parameter does not move the peak of the likelihood. For other $g$
it holds with a suitable definition.) So the MLE of the mean waiting time $1/\lambda$ is $\bar{x}$, and the MLE of
$\sigma$ for normal data is $\sqrt{\hat{\sigma}^2}$. Unbiasedness has no such property, as $S$ versus $S^2$ showed.

### The German tank problem

*Level: intermediate to advanced.*

**The setting.** An enemy numbers its tanks $1, 2, \dots, N$ as they are built. You have captured $k$ tanks, and their
serial numbers are a random sample, without replacement, from $\{1, \dots, N\}$. Estimate $N$.

Let $m$ be the largest serial number seen.

**The MLE.** Under the model, every set of $k$ distinct numbers from $1$ to $N$ is equally likely, so any particular
observed set has probability $1/\binom{N}{k}$, as long as $N \ge m$ (otherwise probability 0). So

$$
L(N) = \begin{cases} 0, & N < m, \\ 1/\binom{N}{k}, & N \ge m. \end{cases}
$$

Since $\binom{N}{k}$ grows with $N$, $L(N)$ is largest at the smallest allowed value: $\hat{N}_{\text{MLE}} = m$. The
maximum is at a boundary, not at a zero of a derivative. And this MLE is obviously too small: the true $N$ is at least
$m$, and almost always more.

**The distribution of the maximum.** $M \le j$ exactly when all $k$ numbers are among $1, \dots, j$, so
$P(M \le j) = \binom{j}{k}/\binom{N}{k}$, and $P(M = j) = \binom{j-1}{k-1}/\binom{N}{k}$ (the maximum is $j$, and the
other $k-1$ numbers come from $1, \dots, j-1$).

**Theorem.** $E[M] = \dfrac{k(N+1)}{k+1}$. Hence

$$
\hat{N} = M\Big(1 + \frac{1}{k}\Big) - 1 = M + \frac{M}{k} - 1
$$

is an unbiased estimator of $N$.

*Proof.* Using $j\binom{j-1}{k-1} = k\binom{j}{k}$ (both sides equal $\frac{j!}{(k-1)!\,(j-k)!}$),

$$
E[M] = \sum_{j=k}^{N} j\,\frac{\binom{j-1}{k-1}}{\binom{N}{k}} = \frac{k}{\binom{N}{k}}\sum_{j=k}^{N}\binom{j}{k}
= \frac{k}{\binom{N}{k}}\binom{N+1}{k+1},
$$

by the **hockey-stick identity** $\sum_{j=k}^{N}\binom{j}{k} = \binom{N+1}{k+1}$ (choose $k+1$ numbers from
$1, \dots, N+1$ and sort by the largest one, $j+1$; the other $k$ come from $1, \dots, j$). Finally
$\binom{N+1}{k+1}/\binom{N}{k} = \frac{N+1}{k+1}$, so $E[M] = \frac{k(N+1)}{k+1}$.

Then $E[\hat{N}] = \frac{k+1}{k}E[M] - 1 = (N+1) - 1 = N$. $\blacksquare$

The formula has an intuitive reading. The $k$ observed numbers split $1, \dots, N$ into $k+1$ gaps, which are equally
long on average. The gap above $m$ is unseen; estimate it by the average gap below, which is about $m/k$. Add it on and
subtract 1 for the counting.

It can be shown (a similar sum) that $\operatorname{Var}(\hat{N}) = \frac{(N-k)(N+1)}{k(k+2)}$, so the standard error
falls roughly like $N/k$: about as fast as possible. In fact this estimator has the smallest variance of all unbiased
estimators of $N$ (it is the "minimum variance unbiased estimator", a fact proved with the tools of
[Chapter 13](13-Likelihood-Theory.md)).

**Example 7.8 (made-up numbers).** Four captured tanks carry serial numbers 23, 51, 87 and 104. Then $m = 104$, $k = 4$
and $\hat{N} = 104 + 104/4 - 1 = 129$. The MLE says 104; the unbiased estimate says 129.

*Check by computer:* for $N = 200$ and $k = 4$, summing over all possible maxima gives $E[M] = 160.8 = 4 \times 201/5$
and $E[\hat{N}] = 200$ exactly, with variance $1641.5 = 196 \times 201/24$.

### The real story

During the Second World War, the Allies needed to know how much military equipment Germany was producing. The usual
sources (spies, aerial reconnaissance, reports from prisoners) gave estimates that turned out to be far too high.

Economists working for the Allies in London, among them Richard Ruggles and Henry Brodie, noticed that German equipment carried serial numbers and other markings, assigned in an orderly way:
on tank chassis, engines and gearboxes, and even on the road wheels. From the
markings on captured and destroyed equipment they estimated production, for tanks and other items. After the war,
German production records became available, and the serial-number estimates turned out to be much closer to the
recorded figures than the conventional intelligence estimates, which had been too large by a wide margin. Ruggles and
Brodie described the work in "An Empirical Approach to Economic Intelligence in World War II", in the *Journal of the
American Statistical Association* in 1947.

Their methods were more elaborate than the formula above. Serial numbers were not always a simple sequence starting at
1; different factories used different blocks of numbers; and they had to work out the numbering systems before
estimating anything. But the heart of the method was the one here: when items are numbered in order, a random sample of
the numbers tells you how many there are.

## 7.5 Consistency

*Level: advanced.*

### Homing in on the truth

Bias and MSE describe an estimator at one sample size. **Consistency** is about what happens as the data grow: an
estimator is good, at least, if with enough data it is almost sure to be close to the truth.

**Definition.** A sequence of estimators $\hat{\theta}_n$ (one for each sample size $n$) is **consistent** for $\theta$
if for every $\varepsilon > 0$,

$$
P\big(|\hat{\theta}_n - \theta| > \varepsilon\big) \to 0 \quad\text{as } n \to \infty .
$$

This is **convergence in probability**, the mode of convergence in the weak law of large numbers
([Probability, Chapter 7](../probability/07-Inequalities-and-the-Law-of-Large-Numbers.md)).

### A sufficient condition

**Theorem.** If $\operatorname{MSE}(\hat{\theta}_n) \to 0$, then $\hat{\theta}_n$ is consistent. Equivalently, by the
decomposition, it is enough that both the bias and the variance tend to zero.

*Proof.* By Markov's inequality applied to the non-negative variable $(\hat{\theta}_n - \theta)^2$,

$$
P\big(|\hat{\theta}_n - \theta| > \varepsilon\big) = P\big((\hat{\theta}_n - \theta)^2 > \varepsilon^2\big)
\le \frac{E[(\hat{\theta}_n - \theta)^2]}{\varepsilon^2} = \frac{\operatorname{MSE}(\hat{\theta}_n)}{\varepsilon^2} \to 0 .
\qquad \blacksquare
$$

### Examples

- **The sample mean.** $\operatorname{MSE}(\bar{X}_n) = \sigma^2/n \to 0$, so $\bar{X}_n$ is consistent for $\mu$.
  This is the weak law of large numbers.
- **The sample variance.** Both $S^2$ and the divisor-$n$ $\hat{\sigma}^2$ are consistent for $\sigma^2$ (when the
  fourth moment is finite, their variances tend to zero; the bias of $\hat{\sigma}^2$ is $-\sigma^2/n \to 0$). So the
  $n$ versus $n-1$ argument does not matter for large samples.
- **The uniform maximum.** For uniform data on $[0, \theta]$ and $0 < \varepsilon < \theta$,
  $P(M_n < \theta - \varepsilon) = \big(\frac{\theta - \varepsilon}{\theta}\big)^n \to 0$, and $M_n \le \theta$ always,
  so $M_n$ is consistent although biased for every $n$.
- **Continuous functions.** If $\hat{\theta}_n$ is consistent for $\theta$ and $g$ is continuous at $\theta$, then
  $g(\hat{\theta}_n)$ is consistent for $g(\theta)$ (the **continuous mapping theorem**; the proof is a direct
  $\varepsilon$-$\delta$ argument). So $1/\bar{X}_n$ is consistent for the exponential rate $\lambda$, and $S_n$ for
  $\sigma$. This is also why the method of moments is usually consistent.

A non-example: $\hat{\mu} = X_1$, the first observation, is unbiased for every $n$ and never consistent; its
distribution does not change as $n$ grows. Unbiased does not imply consistent, and (as $M_n$ shows) consistent does not
imply unbiased.

### When maximum likelihood is not consistent

Under regularity conditions (a fixed, finite number of parameters, a smooth likelihood, and a few more), MLEs are
consistent, approximately normal and, for large samples, as precise as any reasonable estimator can be.
[Chapter 13](13-Likelihood-Theory.md) states this carefully. The conditions are not decoration, as an example of Jerzy
Neyman and Elizabeth Scott (1948) shows.

**Example 7.9 (Neyman and Scott).** Each of $n$ objects is measured twice, with normal error of the same unknown
variance $\sigma^2$, but each object has its own unknown true value $\mu_i$: $X_{i1}, X_{i2} \sim N(\mu_i, \sigma^2)$,
all independent. Here the number of parameters, $n + 1$, grows with the data.

The MLE of $\mu_i$ is the pair's mean $\bar{X}_i$. The MLE of $\sigma^2$, by the same calculation as Example 7.6, is
the average squared deviation over all $2n$ measurements:

$$
\hat{\sigma}^2 = \frac{1}{2n}\sum_{i=1}^n\sum_{j=1}^2 (X_{ij} - \bar{X}_i)^2 = \frac{1}{2n}\sum_{i=1}^n \frac{(X_{i1} - X_{i2})^2}{2}.
$$

Each $(X_{i1} - X_{i2})^2/2$ has expectation $\sigma^2$ (it is the unbiased $S^2$ of a pair, from 7.2). So
$E[\hat{\sigma}^2] = \sigma^2/2$, and by the law of large numbers $\hat{\sigma}^2 \to \sigma^2/2$: with more and more
data, the MLE converges *to the wrong answer*. Each pair spends one of its two degrees of freedom on its own mean, and
maximum likelihood never notices. The fix here is simple (double it, which is the $n-1$ correction again), but the
lesson is general: when the number of parameters grows with the data, as in many modern problems
([Chapter 18](18-High-Dimensional-Statistics.md)), classical guarantees can fail.

## A short history

The method of least squares, published by Legendre in 1805 and justified probabilistically by Gauss in 1809, was the
first general estimation method; Gauss's argument already contained the idea of choosing the most probable value.
Karl Pearson developed the method of moments in the 1890s to fit his family of curves to biological data. Fisher's
first paper on maximum likelihood appeared in 1912, while he was a student, and his long 1922 paper "On the mathematical
foundations of theoretical statistics" introduced much of the vocabulary of this chapter: consistency, efficiency
and sufficiency. Fisher argued strongly for maximum likelihood over
Pearson's moments, which led to a long and bitter dispute between them. The German tank problem became a standard
textbook example after the war; Leo Goodman analysed the estimation of the number of serial numbers in papers in the
early 1950s.

## Check yourself

??? question "1. An estimator has bias 0.3 and standard error 0.4. What is its mean squared error and root mean squared error?"

    $\operatorname{MSE} = 0.4^2 + 0.3^2 = 0.16 + 0.09 = 0.25$, so the root MSE is $0.5$.

??? question "2. Two unbiased estimators of $\mu$: $\bar{X}$ from $n = 10$ observations, and $\frac{1}{2}(X_1 + X_2)$. Compare their MSEs."

    $\operatorname{MSE}(\bar{X}) = \sigma^2/10$ and $\operatorname{MSE}\big(\tfrac12(X_1 + X_2)\big) = \sigma^2/2$. The
    mean of all ten is five times better.

??? question "3. Consider $c\bar{X}$ as an estimator of $\mu$ for iid data with variance $\sigma^2$. Find its MSE and the value of $c$ that minimises it. Why can't you use this $c$ in practice?"

    Bias $(c - 1)\mu$, variance $c^2\sigma^2/n$, so $\operatorname{MSE} = c^2\sigma^2/n + (c-1)^2\mu^2$. Differentiating
    in $c$: $2c\sigma^2/n + 2(c-1)\mu^2 = 0$, so $c = \frac{\mu^2}{\mu^2 + \sigma^2/n}$, which is less than 1: it
    shrinks towards 0. It depends on the unknown $\mu$ and $\sigma^2$, so it cannot be computed; estimating them
    changes the properties. (This idea, done carefully, leads to shrinkage estimators.)

??? question "4. For the data 4, 7, 10, compute the divisor-$n$ variance and $s^2$, and check the identity $\sum (x_i - \mu)^2 = \sum (x_i - \bar{x})^2 + n(\bar{x} - \mu)^2$ with $\mu = 5$."

    $\bar{x} = 7$; deviations $-3, 0, 3$; $\sum (x_i - \bar{x})^2 = 18$; divisor $n$: $6$; $s^2 = 9$. With $\mu = 5$:
    $\sum (x_i - 5)^2 = 1 + 4 + 25 = 30$, and $18 + 3(7 - 5)^2 = 18 + 12 = 30$. It checks.

??? question "5. Data from a Poisson law with mean $\lambda$: 2, 0, 3, 1, 4. Find the MLE of $\lambda$, with the derivation."

    $\ell(\lambda) = \sum (x_i\log\lambda - \lambda - \log x_i!) = (\sum x_i)\log\lambda - n\lambda + \text{const}$.
    $\ell'(\lambda) = \sum x_i/\lambda - n = 0$ gives $\hat{\lambda} = \bar{x} = 10/5 = 2$; $\ell'' < 0$, so a maximum.

??? question "6. Use the method of moments to estimate $p$ from data on the number of trials until the first success (geometric law, mean $1/p$): 3, 1, 4, 2, 5."

    $\bar{x} = 3$, so $1/\hat{p} = 3$ and $\hat{p} = 1/3$. (This is also the MLE.)

??? question "7. A sample of $n$ from the uniform law on $[0, \theta]$ has maximum 8.2 with $n = 9$. Give the MLE and the unbiased estimate of $\theta$, and the root MSE of each in terms of $\theta$."

    The likelihood is $\theta^{-n}$ for $\theta \ge \max x_i$ and 0 otherwise, so the MLE is $M = 8.2$. Unbiased:
    $\frac{10}{9}\times 8.2 \approx 9.11$. Root MSE of $M$: $\theta\sqrt{2/(10 \cdot 11)} \approx 0.135\theta$; of
    $\frac{10}{9}M$: $\theta/\sqrt{9 \cdot 11} \approx 0.101\theta$.

??? question "8. Captured serial numbers are 15, 62, 37, 81, 44 (made up). Estimate the total number by the German tank estimator."

    $m = 81$, $k = 5$: $\hat{N} = 81 + 81/5 - 1 = 96.2$, about 96.

??? question "9. Prove that $j\binom{j-1}{k-1} = k\binom{j}{k}$ and the hockey-stick identity for $N = 4$, $k = 2$."

    $j\binom{j-1}{k-1} = \frac{j\,(j-1)!}{(k-1)!\,(j-k)!} = \frac{j!}{(k-1)!\,(j-k)!} = k\cdot\frac{j!}{k!\,(j-k)!} = k\binom{j}{k}$.
    Hockey stick: $\binom{2}{2} + \binom{3}{2} + \binom{4}{2} = 1 + 3 + 6 = 10 = \binom{5}{3}$.

??? question "10. Show that the MLE of $\lambda$ for exponential data is consistent, and that $(n-1)/\sum X_i$ is too."

    $\bar{X}_n \to 1/\lambda$ in probability (weak law), and $g(x) = 1/x$ is continuous at $1/\lambda > 0$, so
    $\hat{\lambda} = 1/\bar{X}_n \to \lambda$. And $(n-1)/\sum X_i = \frac{n-1}{n}\cdot\hat{\lambda}$, where
    $\frac{n-1}{n} \to 1$, so it converges to $\lambda$ too.

??? question "11. In the Neyman-Scott problem with $n = 1000$ pairs and true $\sigma^2 = 4$, what value will the MLE of $\sigma^2$ be close to? What is a consistent estimator?"

    Close to $\sigma^2/2 = 2$. A consistent (and unbiased) estimator is $2\hat{\sigma}^2 = \frac{1}{n}\sum_i \frac{(X_{i1} - X_{i2})^2}{2}$, whose expectation is $\sigma^2$ and which converges to $\sigma^2 = 4$ by the law
    of large numbers.

??? question "12. For normal data, $\operatorname{Var}(S^2) = 2\sigma^4/(n-1)$. Consider $cS^2$ as an estimator of $\sigma^2$, and find the $c$ that minimises its MSE. What divisor does it correspond to?"

    $\operatorname{MSE}(cS^2) = c^2\cdot\frac{2\sigma^4}{n-1} + (c - 1)^2\sigma^4$. Differentiating in $c$:
    $\frac{4c}{n-1} + 2(c - 1) = 0$, so $c\big(\frac{2}{n-1} + 1\big) = 1$ and $c = \frac{n-1}{n+1}$. Then
    $cS^2 = \frac{1}{n+1}\sum (X_i - \bar{X})^2$: divisor $n+1$.

## What you learned

- An estimator is judged by its sampling distribution: bias (where it is centred), variance (how spread it is), and
  mean squared error, with MSE = variance + bias squared.
- A biased estimator can beat an unbiased one: the uniform maximum beats twice the mean by a factor that grows with $n$.
- Dividing by $n-1$ makes $S^2$ unbiased because estimating the mean uses up, on average, one $\sigma^2$ of the spread;
  it does not make $S$ unbiased, nor give the smallest MSE.
- The method of moments matches sample moments to theoretical ones; it is simple, usually consistent, sometimes poor.
- Maximum likelihood picks the parameter value under which the data are most probable; it gives $x/n$ for the binomial,
  $\bar{x}$ and the divisor-$n$ variance for the normal, $1/\bar{x}$ for the exponential, and the maximum for the German
  tank problem, where $m + m/k - 1$ is the unbiased correction.
- Consistency means homing in on the truth as $n$ grows; MSE tending to zero is enough. MLEs are consistent under
  conditions that can fail when parameters multiply with the data.

**Next:** [Chapter 8](08-Confidence-Intervals.md), turning an estimate and its standard error into an interval with a
stated chance of catching the truth.

## Further reading

- R. A. Fisher, "On the mathematical foundations of theoretical statistics", *Philosophical Transactions of the Royal
  Society A* 222, 1922.
- R. Ruggles and H. Brodie, "An empirical approach to economic intelligence in World War II", *Journal of the American
  Statistical Association* 42, 1947.
- L. A. Goodman, "Serial number analysis", *Journal of the American Statistical Association* 47, 1952.
- J. Neyman and E. L. Scott, "Consistent estimates based on partially consistent observations", *Econometrica* 16(1),
  1948.
- G. Casella and R. L. Berger, *Statistical Inference*, 2nd edition, 2002. Chapter 7 covers the methods of this chapter
  at full depth.
- J. A. Rice, *Mathematical Statistics and Data Analysis*, 3rd edition, 2007, chapter 8.
- S. M. Stigler, "The epic story of maximum likelihood", *Statistical Science* 22(4), 2007.
- On this site: [Chapter 13](13-Likelihood-Theory.md) for the theory of likelihood;
  [Probability, Chapter 7](../probability/07-Inequalities-and-the-Law-of-Large-Numbers.md) for Markov's inequality and
  the weak law; the MAT137 guides on [derivatives](../../uoft/MAT137/unit03.md) and
  [applications of derivatives](../../uoft/MAT137/unit06.md); the Topics lesson on
  [sampling distributions](../../topics/statistics/level-8/01-sampling-distributions.md); the
  [Probability book](../probability/index.md).
