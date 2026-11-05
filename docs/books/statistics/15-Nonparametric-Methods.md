# 15. Nonparametric methods

*Almost every method so far began with a model: the data are normal, or binomial, or Poisson, with a few unknown
parameters. Real data often refuse. A few huge values, scores on a 1-to-5 scale, a sample of eight, a shape no
textbook family fits. This chapter asks what can be done when we are not willing to assume a distribution. The
surprising answer is: a great deal, and often with exact error rates. You will meet tests built on signs, ranks and
rearrangements, whose null distributions you can count by hand; prove that permutation tests are valid under one
simple condition; measure association by ranks; estimate a whole density without a formula; and see the bootstrap in
depth, including where it breaks.*

!!! abstract "In this chapter"
    **You will learn:**

    - when the usual assumptions fail and what "distribution-free" means
    - the sign test, the Wilcoxon signed-rank test and the Mann-Whitney test, with exact null distributions counted by hand
    - permutation tests, and a proof that they are valid whenever the data are exchangeable under the null
    - Spearman's and Kendall's rank correlations, with the formula for Spearman's proved
    - kernel density estimation, the bias-variance trade-off in the bandwidth, and why the best bandwidth shrinks like $n^{-1/5}$
    - the bootstrap in depth: the plug-in principle, exact bootstrap distributions, intervals, and a case where it fails

    **You need:** [Chapter 9](09-Hypothesis-Tests.md) (tests and p-values), [Chapter 6](06-Sampling-Distributions.md)
    and [Chapter 8](08-Confidence-Intervals.md) (the first look at the bootstrap), [Chapter 4](04-Relationships-and-Correlation.md)
    (correlation). From the Probability book: [counting](../probability/02-Counting-and-Equally-Likely-Outcomes.md),
    [discrete random variables](../probability/05-Discrete-Random-Variables.md) and
    [generating functions](../probability/08-Generating-Functions-in-Probability.md). Calculus (Taylor's formula and
    integrals) is used in 15.5.

    **Levels:** 15.1 and 15.2 are intermediate; 15.3 and 15.4 are intermediate to advanced; 15.5 and 15.6 are
    advanced, with expert remarks at the end of 15.6.

## 15.1 When assumptions fail

### Three kinds of trouble

The $t$ test and the $t$ interval of [Chapter 8](08-Confidence-Intervals.md) assume normal data, or a sample large
enough for the central limit theorem to rescue us. That rescue often works, but there are three common situations where
it does not.

1. **Heavy tails and outliers.** One wild value moves the mean and inflates the standard deviation. In the extreme, for
   the Cauchy distribution ([Probability, Chapter 12](../probability/12-The-Central-Limit-Theorem.md)) the sample mean
   of $n$ values has the same spread as a single value, and the $t$ test's error rates are not what it claims.
2. **Ordinal data.** Pain on a scale from 0 to 10, satisfaction from "very poor" to "very good": the order means
   something, but the gaps may not. Is the step from 1 to 2 the same as from 9 to 10? A mean of such scores is
   questionable; a method that uses only the order is safer.
3. **Small samples with unknown shape.** With eight observations you cannot check normality, and the CLT has not
   arrived yet.

### Distribution-free

A test is **distribution-free** (for a null hypothesis) if its null distribution is the same for every continuous
distribution in the null hypothesis. The tests of this chapter get that property by throwing away the actual values and
keeping only signs, ranks or the way the data could have been rearranged. The word **nonparametric** is used more
loosely, for any method whose model has no fixed, finite list of parameters: the density estimators of 15.5 and the
bootstrap of 15.6 are nonparametric in this sense even though they are not tests.

### The price, and why it is small

Throwing away values loses information. How much? The standard measure is **asymptotic relative efficiency** (ARE): if
test A needs $n_A$ observations to match the power of test B with $n_B$ observations, in the limit of large samples and
small effects, the ARE of A to B is $n_B/n_A$. For normal data:

- the sign test has ARE $2/\pi \approx 0.64$ against the $t$ test: it needs about 57% more data;
- the Wilcoxon tests have ARE $3/\pi \approx 0.955$: they lose only about 5%.

And for other shapes the Wilcoxon tests can be far better than $t$ (for heavy tails the ARE can be arbitrarily large),
while Hodges and Lehmann proved in 1956 that it is never below $108/125 = 0.864$ for any continuous symmetric
distribution. So the Wilcoxon tests are cheap insurance.

## 15.2 Sign, signed-rank and rank-sum tests

### The oldest test

In 1710 John Arbuthnot, a physician, looked at the London christening records for 82 consecutive years and noticed that
in every one of them more boys than girls were christened. If boys and girls were equally likely to be in the majority
each year, the chance of this would be $(1/2)^{82}$, an absurdly small number. He took it as evidence of design rather
than chance; whatever one makes of his conclusion, the calculation is a sign test, and it is often called the first
published significance test.

### The sign test

**Setting.** Paired data, such as the same person measured before and after something, or a single sample tested
against a hypothesised median $m_0$. Let $d_1, \dots, d_n$ be the differences (or $x_i - m_0$), and assume they are
independent and continuous, so none is exactly 0.

**Null hypothesis.** The median difference is 0: each $d_i$ is positive with probability $1/2$.

**Statistic.** $S$ = number of positive differences. Under the null, $S \sim \text{Binomial}(n, 1/2)$, exactly, whatever
the distribution of the $d_i$. That is the whole test.

**Worked example (made-up data).** Ten volunteers time a task before and after practice; the improvements in seconds are

$$
1.8,\ -0.4,\ 2.6,\ 0.9,\ 3.1,\ 1.2,\ -0.7,\ 2.2,\ 0.5,\ 4.0 .
$$

Eight are positive. Two-sided p-value: $2P(S \ge 8) = 2 \times \frac{45 + 10 + 1}{1024} = \frac{112}{1024} = 0.109$. Not
significant at 5%. The sign test ignores that the two negative values are small and the positive ones mostly large.

### The Wilcoxon signed-rank test

Frank Wilcoxon (1945) used the sizes as well, but only through their ranks.

**Assumption.** Under the null, each $d_i$ is symmetric about 0: $d_i$ and $-d_i$ have the same distribution. (This is
stronger than "median 0"; it is the price for using sizes.)

**Statistic.** Rank the absolute values $|d_1|, \dots, |d_n|$ from 1 (smallest) to $n$, and let $W^+$ be the sum of the
ranks belonging to positive $d_i$, $W^-$ the sum for negative ones. Since the ranks are $1, \dots, n$,
$W^+ + W^- = n(n+1)/2$.

**The exact null distribution.** Under symmetry, the sign of each $d_i$ is independent of its size, and is $+$ or $-$
with probability $1/2$. So, given the ranks, each of the $2^n$ ways of attaching signs to ranks $1, \dots, n$ is equally
likely, and

$$
W^+ = \sum_{k=1}^n k \, I_k, \qquad I_1, \dots, I_n \text{ independent Bernoulli}(1/2),
$$

where $I_k = 1$ if the observation with rank $k$ is positive. The number of sign patterns giving $W^+ = w$ is the number
of subsets of $\{1, \dots, n\}$ with sum $w$, which is the coefficient of $t^w$ in the generating function
$\prod_{k=1}^n (1 + t^k)$ ([Probability, Chapter 8](../probability/08-Generating-Functions-in-Probability.md)).

**Mean and variance.** From the representation, $E[W^+] = \sum k/2 = n(n+1)/4$ and, since the $I_k$ are independent with
variance $1/4$,

$$
\operatorname{Var}(W^+) = \frac14\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{24} .
$$

For large $n$, $W^+$ is approximately normal (a sum of independent bounded terms, Lindeberg's CLT).

**The example again.** The absolute improvements in order are $0.4, 0.5, 0.7, 0.9, 1.2, 1.8, 2.2, 2.6, 3.1, 4.0$, with
ranks 1 to 10. The negative ones, $-0.4$ and $-0.7$, have ranks 1 and 3, so $W^- = 4$ and $W^+ = 55 - 4 = 51$. How
many subsets of $\{1, \dots, 10\}$ have sum at most 4? Sum 0: the empty set. Sum 1: $\{1\}$. Sum 2: $\{2\}$. Sum 3:
$\{3\}, \{1,2\}$. Sum 4: $\{4\}, \{1,3\}$. Seven in all, so

$$
P(W^- \le 4) = \frac{7}{1024} = 0.0068, \qquad \text{two-sided p} = 0.0137 .
$$

Using the sizes of the differences made the evidence much stronger than the sign test's 0.109. For comparison, the paired
$t$ test gives $t = 1.52/(1.509/\sqrt{10}) = 3.19$ on 9 degrees of freedom, two-sided p $= 0.011$: similar, as the ARE
of 0.955 suggests for data that look roughly normal.

**Small samples cannot be significant.** With $n$ differences the smallest two-sided p-value is $2/2^n$ (all signs
equal). For $n = 5$ that is 0.0625, so no data set of 5 pairs can reach 5% significance; $n = 6$ is the first that can
(0.031). It is worth knowing before running a tiny study.

### The Mann-Whitney test (Wilcoxon rank-sum)

**Setting.** Two independent samples, $X_1, \dots, X_m$ and $Y_1, \dots, Y_n$. Null hypothesis: both come from the same
continuous distribution.

**Statistic.** Pool all $N = m + n$ values and rank them from 1 to $N$. Let $W$ be the sum of the ranks of the $X$
sample. Equivalently, let

$$
U = \#\{(i, j) : X_i > Y_j\},
$$

the number of pairs in which the $X$ value wins. The two are linked by $W = U + m(m+1)/2$: the $X$ with the $k$-th
smallest rank among the $X$s has rank $k$ plus the number of $Y$s below it, and summing over $k$ gives
$m(m+1)/2 + U$. Henry Mann and Donald Whitney (1947) worked with $U$; Wilcoxon (1945) with $W$.

**The exact null distribution.** Under the null all $N$ values are exchangeable, so the set of ranks held by the $X$
sample is equally likely to be any of the $\binom{N}{m}$ subsets of $\{1, \dots, N\}$. Counting subsets by their sum gives
the distribution of $W$.

**Mean and variance.** The $X$ ranks are a simple random sample of size $m$, drawn without replacement, from the
population $\{1, \dots, N\}$, which has mean $(N+1)/2$ and variance $\sigma^2 = (N^2 - 1)/12$. For a sum of $m$ values
drawn without replacement from a population of $N$, the mean is $m$ times the population mean and the variance is
$m\sigma^2 (N-m)/(N-1)$ (the factor $(N-m)/(N-1)$ is the finite population correction). This gives

$$
E[W] = \frac{m(N+1)}{2}, \qquad \operatorname{Var}(W) = m \cdot \frac{N^2-1}{12} \cdot \frac{N - m}{N - 1} = \frac{mn(N+1)}{12} .
$$

So $E[U] = mn/2$ and $\operatorname{Var}(U) = mn(m+n+1)/12$.

**Worked example (made-up data).** Recovery times in days for two small groups:

$$
A:\ 12,\ 15,\ 9,\ 20 \qquad\qquad B:\ 22,\ 18,\ 25,\ 30,\ 17 .
$$

Pooled order: 9, 12, 15, 17, 18, 20, 22, 25, 30. Group A holds ranks 1, 2, 3, 6, so $W = 12$ and
$U = 12 - 10 = 2$. **Check** directly: A beats B only in the pairs $(20, 18)$ and $(20, 17)$, so $U = 2$. How many of the
$\binom94 = 126$ rank sets give $U \le 2$? $U = 0$: $\{1,2,3,4\}$. $U = 1$: $\{1,2,3,5\}$. $U = 2$: $\{1,2,3,6\}$ and
$\{1,2,4,5\}$. Four sets, so the one-sided p-value is $4/126 = 0.032$ and the two-sided one $0.063$.

**What it tests.** $U/(mn)$ estimates $P(X > Y)$, the probability that a random $X$ beats a random $Y$. Strictly, the test
has the right size only when the two distributions are identical; if they differ in spread but not in location, it can
reject more often than it should. Reporting $P(X > Y)$ (here $2/20 = 0.1$) is usually more useful than the p-value
alone.

### Ties

With real data, values tie. The usual fix is to give tied values the average of the ranks they span ("midranks") and
to adjust the variance; exact p-values can still be computed by enumerating rearrangements, which is the permutation
idea of the next section.

## 15.3 Permutation tests

*Level: intermediate to advanced.*

### The idea

The rank tests are special cases of a more general idea, Fisher's from *The Design of Experiments* (1935), developed by
E. J. G. Pitman in 1937 and 1938: if the null hypothesis says that group labels do not matter, then **every relabelling
of the data was equally likely to have been observed**, and the observed statistic should look like a typical one among
all relabellings.

**Worked example (made-up data).** Ten plants were randomly split, five fed a new fertiliser:

$$
\text{treated: } 23,\ 31,\ 27,\ 35,\ 29 \qquad \text{control: } 21,\ 25,\ 19,\ 24,\ 28 .
$$

The difference in means is $29 - 23.4 = 5.6$ cm. If the fertiliser does nothing, each plant would have grown the same
whichever group it was in, so the ten heights are fixed and only the labels were random. There are $\binom{10}{5} = 252$
ways to choose which five are "treated". For each, compute the difference in means. Exactly 9 of the 252 give a
difference of 5.6 or more, so the one-sided p-value is $9/252 = 0.036$; 18 give a difference at least 5.6 in absolute
value, so the two-sided p-value is $18/252 = 0.071$. (The pooled two-sample $t$ test gives $t = 2.20$ on 8 degrees of
freedom and two-sided p $= 0.059$, close but resting on a normality assumption the permutation test does not need.)

### Try it in Python

```python
from itertools import combinations

treated = [23, 31, 27, 35, 29]
control = [21, 25, 19, 24, 28]
data = treated + control
observed = sum(treated) / 5 - sum(control) / 5

count = total = 0
for idx in combinations(range(10), 5):           # every possible "treated" group
    t = sum(data[i] for i in idx)
    diff = t / 5 - (sum(data) - t) / 5
    total += 1
    count += abs(diff) >= abs(observed) - 1e-9    # two-sided
print(observed, count, total, count / total)      # 5.6 18 252 0.0714...
```

### Exchangeability and the validity theorem

**Definition.** Let $G$ be a finite group of rearrangements of the data vector $Z = (Z_1, \dots, Z_N)$ (for example all
permutations of the positions, or all ways of flipping signs). $Z$ is **exchangeable under $G$** if $gZ$ has the same
distribution as $Z$ for every $g \in G$.

For two independent samples that come, under the null, from the same distribution, $Z = (X_1, \dots, X_m, Y_1, \dots, Y_n)$
is i.i.d., hence exchangeable under all permutations. In a randomised experiment like the fertiliser one, exchangeability
holds because the labels were assigned at random, even if the plants are not a random sample of anything. For paired
data under symmetry, $G$ is the group of $2^n$ sign flips.

Let $T$ be any statistic (large values are evidence against the null), let $M = |G|$, and define the **permutation
p-value**

$$
p(Z) = \frac{1}{M}\,\#\{g \in G : T(gZ) \ge T(Z)\} .
$$

**Theorem (validity of permutation tests).** If $Z$ is exchangeable under $G$, then for every $\alpha \in [0, 1]$,

$$
P\big(p(Z) \le \alpha\big) \le \alpha .
$$

So rejecting when $p(Z) \le \alpha$ has type I error at most $\alpha$, for every distribution of the data satisfying the
null, every sample size and every statistic $T$.

*Proof.* **Step 1: a counting fact for a fixed data set.** Fix any data vector $z$. Because $G$ is a group, as $g$ runs
over $G$ so does $gh$, for any fixed $h \in G$. Hence

$$
p(hz) = \frac1M\,\#\{g : T(ghz) \ge T(hz)\} = \frac1M\,\#\{g' : T(g'z) \ge T(hz)\} .
$$

So $p(hz)$ is the fraction of the $M$ values $T(g'z)$, $g' \in G$, that are at least $T(hz)$. List these $M$ values
from largest to smallest. If $T(hz)$ sits at position $r$ in this list (counting ties generously, so all tied values get
the largest position among them), then at least $r$ values are $\ge T(hz)$, so $p(hz) \ge r/M$. Therefore
$p(hz) \le \alpha$ forces $r \le \alpha M$, and at most $\lfloor \alpha M\rfloor$ of the $M$ choices of $h$ can have
$p(hz) \le \alpha$:

$$
\frac1M\,\#\{h \in G : p(hz) \le \alpha\} \le \alpha \quad \text{for every } z .
$$

**Step 2: average over the data.** By exchangeability, $hZ$ has the same distribution as $Z$, so
$P(p(Z) \le \alpha) = P(p(hZ) \le \alpha)$ for every $h$. Averaging over $h$:

$$
P\big(p(Z) \le \alpha\big) = \frac1M\sum_{h \in G} P\big(p(hZ) \le \alpha\big) = E\!\left[\frac1M\,\#\{h : p(hZ) \le \alpha\}\right] \le \alpha ,
$$

by Step 1 applied to each possible value of $Z$. $\blacksquare$

The proof uses nothing about the distribution except exchangeability. That is why permutation tests are exact in
small samples and why a randomised experiment justifies them with no model at all: the randomisation itself creates the
exchangeability.

### When there are too many permutations

For two groups of 50, $\binom{100}{50} \approx 10^{29}$ relabellings is too many to list. Draw $B$ random elements
$g_1, \dots, g_B$ of $G$ instead, and use

$$
\hat p = \frac{1 + \#\{b : T(g_b Z) \ge T(Z)\}}{1 + B} .
$$

The "+1"s are not a fudge: they count the observed data as one of the $B + 1$ exchangeable values (the identity
rearrangement), and with them the same argument as above shows $P(\hat p \le \alpha) \le \alpha$ exactly. Without them
a p-value of 0 can occur, which is never honest.

### What permutation tests do not do

Exchangeability is the whole assumption, and it can fail. If two groups have different spreads, permuting labels
mixes the spreads and the test of "equal means" is no longer exact. If observations are correlated in time or in
clusters, plain permutation breaks the dependence; permute whole clusters or blocks instead. And a permutation test
gives a p-value, not an estimate of the size of the effect; for that, invert it or use the bootstrap.

<figure class="play" data-play="permtest"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A permutation test on made-up scores: shuffle the group labels many times and see how often chance alone gives a gap as big.</figcaption></figure>

## 15.4 Rank correlation

*Level: intermediate to advanced.*

### Spearman's rank correlation

Pearson's correlation $r$ ([Chapter 4](04-Relationships-and-Correlation.md)) measures straight-line association and is
pulled hard by single extreme points. Charles Spearman (1904) proposed computing the ordinary correlation of the
**ranks** instead. The result, $r_s$, measures monotone association: $r_s = 1$ exactly when $y$ always increases with $x$,
straight or not.

**Theorem.** With no ties, if $d_i$ is the difference between the rank of $x_i$ and the rank of $y_i$, then

$$
r_s = 1 - \frac{6\sum_{i=1}^n d_i^2}{n(n^2-1)} .
$$

*Proof.* Let $a_i$ and $b_i$ be the ranks. Both lists are permutations of $1, \dots, n$, so both have mean
$\bar a = (n+1)/2$ and the same sum of squared deviations

$$
\sum (a_i - \bar a)^2 = \sum_{k=1}^n k^2 - n\left(\frac{n+1}{2}\right)^2 = \frac{n(n+1)(2n+1)}{6} - \frac{n(n+1)^2}{4} = \frac{n(n^2-1)}{12} .
$$

Call this $Q$. Since $d_i = a_i - b_i = (a_i - \bar a) - (b_i - \bar a)$,

$$
\sum d_i^2 = \sum (a_i - \bar a)^2 + \sum(b_i - \bar a)^2 - 2\sum (a_i - \bar a)(b_i - \bar a) = 2Q - 2C,
$$

where $C$ is the sum of cross-products. Pearson's correlation of the ranks is $C/\sqrt{Q \cdot Q} = C/Q$, and
$C = Q - \frac12\sum d_i^2$, so

$$
r_s = 1 - \frac{\sum d_i^2}{2Q} = 1 - \frac{6\sum d_i^2}{n(n^2 - 1)} . \qquad \blacksquare
$$

**Worked example (made-up data).** Eight students' weekly hours of practice and test scores:

| hours $x$ | 2 | 4 | 5 | 7 | 8 | 10 | 12 | 30 |
|---|---|---|---|---|---|---|---|---|
| score $y$ | 55 | 60 | 58 | 70 | 66 | 75 | 80 | 82 |
| rank of $y$ | 1 | 3 | 2 | 5 | 4 | 6 | 7 | 8 |

The $x$ ranks are $1, \dots, 8$ in order, so the $d_i$ are $0, -1, 1, -1, 1, 0, 0, 0$ and $\sum d_i^2 = 4$. Then
$r_s = 1 - 24/(8 \times 63) = 1 - 24/504 = 0.952$. Pearson's $r$ is 0.803: the student with 30 hours is far to the
right, where a straight line through the others would predict a score above 100, so the linear fit suffers. Without that
student, Pearson's $r$ is 0.963. Spearman's coefficient does not care how far right the point is, only that it is
rightmost and its score is highest.

### Kendall's tau

Maurice Kendall (1938) counted pairs. A pair of observations $(i, j)$ is **concordant** if $x$ and $y$ move in the same
direction from $i$ to $j$, **discordant** if they move in opposite directions. With $n_c$ concordant and $n_d$ discordant
pairs among the $\binom n2$,

$$
\tau = \frac{n_c - n_d}{\binom n2} .
$$

In the example, the discordant pairs are exactly the two swapped neighbours (scores 60 and 58, and 70 and 66), so
$n_d = 2$, $n_c = 26$, and $\tau = 24/28 = 0.857$. Kendall's tau has a direct meaning: if you pick two students at random,
$\tau = P(\text{concordant}) - P(\text{discordant})$. It is usually smaller in size than $r_s$ for the same data.

### Exact tests

Under the null hypothesis that $x$ and $y$ are independent (and continuous), the ranks of $y$, listed in the order of
$x$, are a uniformly random permutation of $1, \dots, n$. So the exact null distribution of $r_s$ or $\tau$ comes from
listing all $n!$ permutations. For $n = 8$ there are $40{,}320$; of these, 23 have $\sum d_i^2 \le 4$, so the
one-sided p-value for Spearman's coefficient is $23/40320 = 0.00057$. For Kendall's, 35 permutations have $\tau \ge 0.857$,
giving $35/40320 = 0.00087$. Strong evidence of a positive association, without any assumption about the shape of the
relation or the distribution of scores.

## 15.5 Kernel density estimation

*Level: advanced.*

### From histogram to smooth curve

A histogram estimates a density, but its shape depends on where the bins start, and it jumps at every bin edge. A
**kernel density estimate** replaces each data point by a small smooth bump and adds the bumps.

**Definition.** Let $K$ be a **kernel**: a probability density, symmetric about 0, usually the standard normal
$K(u) = e^{-u^2/2}/\sqrt{2\pi}$. Given data $x_1, \dots, x_n$ and a **bandwidth** $h > 0$,

$$
\hat f_h(x) = \frac{1}{nh}\sum_{i=1}^n K\!\left(\frac{x - x_i}{h}\right) .
$$

Each term $\frac1h K((x - x_i)/h)$ is a density centred at $x_i$ with spread $h$, so $\hat f_h$ is the average of $n$
densities, and is itself a density (it is non-negative and integrates to 1).

The bandwidth is everything. Here are ten made-up values, $1.2, 1.9, 2.1, 2.4, 2.8, 3.0, 3.3, 5.6, 6.0, 6.5$, marked as
ticks on the axis, with three bandwidths:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Kernel density estimates of ten made-up values with bandwidths 0.3, 0.6 and 1.06. The smallest bandwidth gives a wiggly curve with several bumps, 0.6 shows two clear groups, and 1.06 blurs the two groups into one broad hump">
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2" points="40.0,175.0 41.8,175.0 43.5,175.0 45.2,174.9 47.0,174.9 48.8,174.8 50.5,174.8 52.2,174.6 54.0,174.4 55.8,174.2 57.5,173.8 59.2,173.3 61.0,172.7 62.8,171.8 64.5,170.7 66.2,169.4 68.0,167.7 69.8,165.8 71.5,163.5 73.2,160.9 75.0,157.9 76.8,154.8 78.5,151.4 80.2,148.0 82.0,144.6 83.8,141.4 85.5,138.4 87.2,135.7 89.0,133.5 90.8,131.7 92.5,130.4 94.2,129.6 96.0,129.2 97.8,129.0 99.5,128.8 101.2,128.7 103.0,128.3 104.8,127.4 106.5,126.1 108.2,124.1 110.0,121.4 111.8,118.0 113.5,114.0 115.2,109.4 117.0,104.5 118.8,99.4 120.5,94.3 122.2,89.3 124.0,84.7 125.8,80.6 127.5,77.2 129.2,74.5 131.0,72.5 132.8,71.2 134.5,70.6 136.2,70.7 138.0,71.1 139.8,72.0 141.5,73.0 143.2,74.1 145.0,75.1 146.8,76.0 148.5,76.5 150.2,76.7 152.0,76.5 153.8,76.0 155.5,75.1 157.2,73.9 159.0,72.6 160.8,71.3 162.5,70.0 164.2,68.9 166.0,68.2 167.8,68.0 169.5,68.3 171.2,69.3 173.0,70.9 174.8,73.3 176.5,76.4 178.2,80.1 180.0,84.5 181.8,89.4 183.5,94.9 185.2,100.7 187.0,106.8 188.8,113.1 190.5,119.4 192.2,125.7 194.0,131.8 195.8,137.6 197.5,143.1 199.2,148.2 201.0,152.7 202.8,156.8 204.5,160.3 206.2,163.3 208.0,165.9 209.8,168.0 211.5,169.7 213.2,171.1 215.0,172.1 216.8,172.9 218.5,173.5 220.2,174.0 222.0,174.3 223.8,174.5 225.5,174.7 227.2,174.8 229.0,174.9 230.8,174.9 232.5,174.9 234.3,174.9 236.0,174.9 237.7,174.9 239.5,174.9 241.2,174.8 243.0,174.7 244.8,174.6 246.5,174.4 248.2,174.2 250.0,173.8 251.8,173.3 253.5,172.6 255.2,171.8 257.0,170.6 258.8,169.2 260.5,167.5 262.2,165.4 264.0,162.9 265.8,160.1 267.5,156.8 269.2,153.2 271.0,149.2 272.8,145.0 274.5,140.7 276.2,136.2 278.0,131.8 279.8,127.5 281.5,123.4 283.2,119.6 285.0,116.2 286.8,113.2 288.5,110.7 290.2,108.6 292.0,107.1 293.8,106.0 295.5,105.4 297.2,105.2 299.0,105.3 300.8,105.7 302.5,106.3 304.2,107.1 306.0,108.0 307.8,109.0 309.5,110.1 311.2,111.2 313.0,112.3 314.8,113.4 316.5,114.7 318.2,116.1 320.0,117.7 321.8,119.5 323.5,121.7 325.2,124.1 327.0,127.0 328.8,130.1 330.5,133.5 332.2,137.2 334.0,141.0 335.8,144.9 337.5,148.7 339.2,152.4 341.0,155.9 342.8,159.1 344.5,162.0 346.2,164.5 348.0,166.7 349.8,168.6 351.5,170.1 353.2,171.3 355.0,172.3 356.8,173.0 358.5,173.6 360.2,174.0 362.0,174.3 363.8,174.5 365.5,174.7 367.2,174.8 369.0,174.9 370.8,174.9 372.5,175.0 374.2,175.0 376.0,175.0 377.8,175.0 379.5,175.0 381.2,175.0 383.0,175.0 384.8,175.0 386.5,175.0 388.2,175.0 390.0,175.0"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2.5" points="40.0,172.0 41.8,171.6 43.5,171.1 45.2,170.5 47.0,170.0 48.8,169.3 50.5,168.6 52.2,167.8 54.0,167.0 55.8,166.1 57.5,165.1 59.2,164.1 61.0,163.0 62.8,161.8 64.5,160.6 66.2,159.3 68.0,157.9 69.8,156.5 71.5,155.0 73.2,153.5 75.0,151.9 76.8,150.3 78.5,148.6 80.2,146.8 82.0,145.0 83.8,143.2 85.5,141.3 87.2,139.4 89.0,137.4 90.8,135.5 92.5,133.5 94.2,131.4 96.0,129.4 97.8,127.3 99.5,125.2 101.2,123.1 103.0,121.0 104.8,118.9 106.5,116.7 108.2,114.6 110.0,112.5 111.8,110.4 113.5,108.4 115.2,106.3 117.0,104.3 118.8,102.4 120.5,100.5 122.2,98.6 124.0,96.8 125.8,95.1 127.5,93.5 129.2,91.9 131.0,90.5 132.8,89.1 134.5,87.9 136.2,86.7 138.0,85.7 139.8,84.8 141.5,84.0 143.2,83.3 145.0,82.8 146.8,82.4 148.5,82.2 150.2,82.1 152.0,82.2 153.8,82.4 155.5,82.7 157.2,83.3 159.0,83.9 160.8,84.8 162.5,85.8 164.2,86.9 166.0,88.3 167.8,89.7 169.5,91.4 171.2,93.1 173.0,95.1 174.8,97.1 176.5,99.3 178.2,101.6 180.0,104.0 181.8,106.6 183.5,109.2 185.2,111.9 187.0,114.6 188.8,117.4 190.5,120.2 192.2,123.1 194.0,125.9 195.8,128.7 197.5,131.5 199.2,134.3 201.0,137.0 202.8,139.6 204.5,142.1 206.2,144.6 208.0,146.9 209.8,149.2 211.5,151.3 213.2,153.3 215.0,155.1 216.8,156.8 218.5,158.4 220.2,159.8 222.0,161.1 223.8,162.2 225.5,163.2 227.2,164.0 229.0,164.7 230.8,165.3 232.5,165.7 234.3,165.9 236.0,166.0 237.7,166.0 239.5,165.8 241.2,165.5 243.0,165.1 244.8,164.5 246.5,163.8 248.2,163.0 250.0,162.1 251.8,161.1 253.5,159.9 255.2,158.7 257.0,157.3 258.8,155.9 260.5,154.4 262.2,152.8 264.0,151.2 265.8,149.5 267.5,147.8 269.2,146.0 271.0,144.3 272.8,142.5 274.5,140.7 276.2,139.0 278.0,137.3 279.8,135.6 281.5,134.0 283.2,132.5 285.0,131.0 286.8,129.7 288.5,128.4 290.2,127.3 292.0,126.3 293.8,125.4 295.5,124.6 297.2,124.0 299.0,123.6 300.8,123.3 302.5,123.1 304.2,123.1 306.0,123.3 307.8,123.6 309.5,124.0 311.2,124.6 313.0,125.4 314.8,126.2 316.5,127.2 318.2,128.3 320.0,129.5 321.8,130.8 323.5,132.2 325.2,133.7 327.0,135.3 328.8,136.9 330.5,138.6 332.2,140.2 334.0,142.0 335.8,143.7 337.5,145.4 339.2,147.2 341.0,148.9 342.8,150.6 344.5,152.2 346.2,153.9 348.0,155.4 349.8,157.0 351.5,158.4 353.2,159.8 355.0,161.1 356.8,162.4 358.5,163.6 360.2,164.7 362.0,165.7 363.8,166.7 365.5,167.6 367.2,168.4 369.0,169.2 370.8,169.9 372.5,170.5 374.2,171.0 376.0,171.5 377.8,172.0 379.5,172.4 381.2,172.8 383.0,173.1 384.8,173.4 386.5,173.6 388.2,173.8 390.0,174.0"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="40.0,163.3 41.8,162.6 43.5,161.8 45.2,161.1 47.0,160.3 48.8,159.5 50.5,158.6 52.2,157.7 54.0,156.8 55.8,155.9 57.5,154.9 59.2,153.9 61.0,152.9 62.8,151.9 64.5,150.8 66.2,149.7 68.0,148.6 69.8,147.5 71.5,146.3 73.2,145.1 75.0,143.9 76.8,142.7 78.5,141.5 80.2,140.3 82.0,139.0 83.8,137.7 85.5,136.5 87.2,135.2 89.0,133.9 90.8,132.7 92.5,131.4 94.2,130.1 96.0,128.8 97.8,127.6 99.5,126.3 101.2,125.1 103.0,123.9 104.8,122.7 106.5,121.5 108.2,120.4 110.0,119.3 111.8,118.2 113.5,117.1 115.2,116.1 117.0,115.1 118.8,114.1 120.5,113.2 122.2,112.4 124.0,111.6 125.8,110.8 127.5,110.1 129.2,109.4 131.0,108.8 132.8,108.3 134.5,107.8 136.2,107.4 138.0,107.0 139.8,106.7 141.5,106.5 143.2,106.3 145.0,106.2 146.8,106.1 148.5,106.2 150.2,106.2 152.0,106.4 153.8,106.6 155.5,106.9 157.2,107.2 159.0,107.6 160.8,108.1 162.5,108.6 164.2,109.1 166.0,109.8 167.8,110.4 169.5,111.2 171.2,112.0 173.0,112.8 174.8,113.6 176.5,114.5 178.2,115.5 180.0,116.4 181.8,117.4 183.5,118.5 185.2,119.5 187.0,120.6 188.8,121.7 190.5,122.8 192.2,123.9 194.0,125.0 195.8,126.1 197.5,127.2 199.2,128.3 201.0,129.4 202.8,130.5 204.5,131.5 206.2,132.6 208.0,133.6 209.8,134.6 211.5,135.5 213.2,136.5 215.0,137.4 216.8,138.2 218.5,139.0 220.2,139.8 222.0,140.6 223.8,141.3 225.5,141.9 227.2,142.5 229.0,143.1 230.8,143.6 232.5,144.0 234.3,144.4 236.0,144.8 237.7,145.1 239.5,145.4 241.2,145.6 243.0,145.8 244.8,145.9 246.5,146.0 248.2,146.1 250.0,146.1 251.8,146.0 253.5,146.0 255.2,145.9 257.0,145.8 258.8,145.6 260.5,145.4 262.2,145.2 264.0,145.0 265.8,144.8 267.5,144.5 269.2,144.3 271.0,144.0 272.8,143.7 274.5,143.5 276.2,143.2 278.0,142.9 279.8,142.7 281.5,142.4 283.2,142.2 285.0,142.0 286.8,141.8 288.5,141.6 290.2,141.4 292.0,141.3 293.8,141.2 295.5,141.1 297.2,141.0 299.0,141.0 300.8,141.0 302.5,141.1 304.2,141.1 306.0,141.2 307.8,141.4 309.5,141.6 311.2,141.8 313.0,142.0 314.8,142.3 316.5,142.6 318.2,143.0 320.0,143.3 321.8,143.8 323.5,144.2 325.2,144.7 327.0,145.2 328.8,145.7 330.5,146.3 332.2,146.8 334.0,147.4 335.8,148.1 337.5,148.7 339.2,149.3 341.0,150.0 342.8,150.7 344.5,151.4 346.2,152.1 348.0,152.8 349.8,153.5 351.5,154.2 353.2,154.9 355.0,155.6 356.8,156.4 358.5,157.1 360.2,157.8 362.0,158.5 363.8,159.2 365.5,159.8 367.2,160.5 369.0,161.2 370.8,161.8 372.5,162.4 374.2,163.1 376.0,163.7 377.8,164.2 379.5,164.8 381.2,165.4 383.0,165.9 384.8,166.4 386.5,166.9 388.2,167.4 390.0,167.8"/>
  <line x1="35" y1="175" x2="395" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <line x1="92.5" y1="168" x2="92.5" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="123.1" y1="168" x2="123.1" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="131.9" y1="168" x2="131.9" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="145.0" y1="168" x2="145.0" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="162.5" y1="168" x2="162.5" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="171.2" y1="168" x2="171.2" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="184.4" y1="168" x2="184.4" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="285.0" y1="168" x2="285.0" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="302.5" y1="168" x2="302.5" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <line x1="324.4" y1="168" x2="324.4" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <text x="40.0" y="197" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="127.5" y="197" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="215.0" y="197" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <text x="302.5" y="197" text-anchor="middle" font-size="11" fill="currentColor">6</text>
  <text x="390.0" y="197" text-anchor="middle" font-size="11" fill="currentColor">8</text>
  <line x1="260" y1="22" x2="280" y2="22" stroke="#9cc9ea" stroke-width="2"/><text x="285" y="26" font-size="11" fill="currentColor">h = 0.3</text>
  <line x1="260" y1="40" x2="280" y2="40" stroke="#7ccf9a" stroke-width="2.5"/><text x="285" y="44" font-size="11" fill="currentColor">h = 0.6</text>
  <line x1="260" y1="58" x2="280" y2="58" stroke="#eea66f" stroke-width="2.5"/><text x="285" y="62" font-size="11" fill="currentColor">h = 1.06 (Silverman)</text>
</svg>
</div>

With $h = 0.3$ the curve has a bump for almost every point: too wiggly, chasing noise (**undersmoothing**). With
$h = 0.6$ two groups appear clearly. With $h = 1.06$ the two groups melt into one broad hump with a shoulder
(**oversmoothing**).

### Bias and variance

Why can no bandwidth be perfect? Fix a point $x$ and assume the true density $f$ is twice differentiable.

**Bias.** Since the $x_i$ are i.i.d. with density $f$,

$$
E[\hat f_h(x)] = \frac1h\int K\!\left(\frac{x - y}{h}\right) f(y)\,dy = \int K(u)\, f(x - hu)\,du ,
$$

substituting $y = x - hu$. Taylor's formula gives $f(x - hu) = f(x) - hu f'(x) + \frac12 h^2u^2 f''(x) + o(h^2)$. Since
$\int K = 1$, $\int uK = 0$ (symmetry) and $\mu_2 = \int u^2 K(u)\,du$ (the kernel's variance),

$$
\operatorname{Bias} = E[\hat f_h(x)] - f(x) = \frac{h^2}{2}\,\mu_2\, f''(x) + o(h^2) .
$$

The estimate is biased: it flattens peaks ($f'' < 0$) and fills valleys ($f'' > 0$), more for larger $h$.

**Variance.** $\hat f_h(x)$ is an average of $n$ i.i.d. terms $\frac1h K((x - x_i)/h)$, so its variance is $\frac1n$
times the variance of one term, which is at most its second moment:

$$
\frac1n \cdot \frac1{h^2}\int K\!\left(\frac{x-y}{h}\right)^2 f(y)\,dy = \frac{1}{nh}\int K(u)^2 f(x - hu)\,du \approx \frac{f(x)\,R(K)}{nh},
$$

where $R(K) = \int K(u)^2\,du$. (Subtracting the squared mean changes only a smaller term of order $1/n$.) Small $h$ means
few points near $x$ contribute, so the estimate is noisy.

**The trade-off.** Adding squared bias and variance and integrating over $x$ gives the **asymptotic mean integrated
squared error**

$$
\text{AMISE}(h) = \frac{h^4}{4}\,\mu_2^2\,R(f'') + \frac{R(K)}{nh}, \qquad R(f'') = \int f''(x)^2\,dx .
$$

Setting the derivative in $h$ to zero, $h^3\mu_2^2 R(f'') = R(K)/(nh^2)$, so

$$
h^* = \left(\frac{R(K)}{\mu_2^2\,R(f'')\,n}\right)^{1/5} \propto n^{-1/5}, \qquad \text{AMISE}(h^*) \propto n^{-4/5} .
$$

Two lessons. The best bandwidth shrinks slowly, like $n^{-1/5}$: with 32 times the data, halve $h$. And the error
shrinks like $n^{-4/5}$, slower than the $n^{-1}$ of a parametric model: the price of not assuming a shape. (In $d$
dimensions the rate becomes $n^{-4/(4+d)}$, a first sight of the curse of dimensionality of
[Chapter 18](18-High-Dimensional-Statistics.md).)

### Choosing $h$ in practice

$h^*$ depends on the unknown $R(f'')$. If $f$ were normal with standard deviation $\sigma$ and $K$ the normal kernel,
then $R(K) = 1/(2\sqrt\pi)$, $\mu_2 = 1$ and $R(f'') = 3/(8\sqrt\pi\,\sigma^5)$, and the formula gives

$$
h^* = \left(\frac43\right)^{1/5}\sigma\, n^{-1/5} \approx 1.06\,\sigma\,n^{-1/5} .
$$

**Silverman's rule of thumb** (1986) uses $h = 0.9\min(s, \text{IQR}/1.34)\,n^{-1/5}$, a slightly smaller and more
robust version. For the ten values above, $s = 1.87$ and the IQR is 3.65 (quartiles 2.05 and 5.70 by one common
convention), giving $h = 0.9 \times 1.87 \times 10^{-1/5} = 1.06$, the oversmoothed curve in the picture. Rules based on a
normal reference assume one hump, so they oversmooth data with two. Data-driven methods (least-squares
cross-validation, or the plug-in method of Sheather and Jones, 1991) estimate $R(f'')$ from the data and do better on
such shapes, at the cost of more noise.

The choice of kernel matters much less than the bandwidth. The Epanechnikov kernel $K(u) = \frac34(1 - u^2)$ on $[-1, 1]$
minimises AMISE among kernels, but the normal kernel is only about 5% less efficient. Murray Rosenblatt (1956) and
Emanuel Parzen (1962) introduced and analysed kernel estimators.

## 15.6 The bootstrap in depth

*Level: advanced, with expert remarks.*

### The plug-in principle

[Chapter 6](06-Sampling-Distributions.md) and [Chapter 8](08-Confidence-Intervals.md) introduced Bradley Efron's
bootstrap (1979) as "resample the data with replacement and watch the statistic vary". Here is why that is a principled
thing to do.

The standard error of a statistic $\hat\theta = s(X_1, \dots, X_n)$ is a property of the unknown distribution $F$: it is
$\operatorname{sd}_F(\hat\theta)$. We do not know $F$, but we have a natural estimate of it: the **empirical
distribution** $\hat F_n$, which puts probability $1/n$ on each observed value. The bootstrap estimate is the same
quantity with $\hat F_n$ plugged in for $F$:

$$
\widehat{\operatorname{se}} = \operatorname{sd}_{\hat F_n}(\hat\theta^*),
$$

where $\hat\theta^* = s(X_1^*, \dots, X_n^*)$ and $X_1^*, \dots, X_n^*$ are drawn i.i.d. from $\hat F_n$, that is, with
replacement from the data. That is the whole idea; the resampling is only a way to compute
$\operatorname{sd}_{\hat F_n}$ when no formula exists.

### When the bootstrap can be done exactly

**The mean.** Each $X_i^*$ has mean $\bar x$ and variance $\hat\sigma^2 = \frac1n\sum (x_i - \bar x)^2$ under $\hat F_n$,
so the bootstrap variance of $\bar X^*$ is exactly $\hat\sigma^2/n$. No resampling is needed, and the answer is the
textbook standard error with divisor $n$ instead of $n - 1$.

**Worked example (made-up data).** Fifteen commuting times in minutes:

$$
12,\ 15,\ 17,\ 18,\ 20,\ 21,\ 22,\ 24,\ 25,\ 27,\ 30,\ 34,\ 41,\ 55,\ 70 .
$$

The mean is 28.73 with $s = 15.85$, so $s/\sqrt{15} = 4.09$; the exact bootstrap standard error is
$\sqrt{\hat\sigma^2/15} = 3.95$. They differ by the factor $\sqrt{14/15}$.

**The median.** For odd $n = 2k - 1$, the bootstrap median is at most $x_{(j)}$ (the $j$-th smallest value) exactly
when at least $k$ of the $n$ draws are among the $j$ smallest values, and the number of such draws is
Binomial($n$, $j/n$). So

$$
P^*\big(\text{median}^* \le x_{(j)}\big) = P\big(\text{Bin}(n, j/n) \ge k\big),
$$

which gives the bootstrap distribution exactly. For the commuting times ($n = 15$, $k = 8$, sample median 24) this gives
a bootstrap standard error of 3.31 for the median, and the bootstrap median is at most 18 with probability 0.026 and at
most 30 with probability 0.974. So the exact 95% percentile interval is $(18, 34)$: the median's bootstrap
distribution lives on the data values, and is lumpy. Ten thousand random resamples gave a standard error of about 3.2,
close to the exact value, as it should be.

**How many resamples are possible?** A resample is determined by how many times each of the $n$ values is drawn, and
the number of ways to write $n$ as an ordered sum of $n$ non-negative counts is $\binom{2n-1}{n}$; for $n = 15$ that is
$77{,}558{,}760$, not equally likely. In practice $B = 1{,}000$ to $10{,}000$ random resamples are enough for standard
errors; percentile intervals need more, because they depend on the tails.

### Bootstrap intervals

Let $\hat\theta^*_{(\alpha)}$ be the $\alpha$ quantile of the bootstrap distribution.

- **Percentile interval:** $(\hat\theta^*_{(0.025)}, \hat\theta^*_{(0.975)})$. Simple, and it respects transformations
  (the interval for $\log\theta$ is the log of the interval for $\theta$).
- **Basic (pivotal) interval:** $(2\hat\theta - \hat\theta^*_{(0.975)},\ 2\hat\theta - \hat\theta^*_{(0.025)})$. It assumes
  that $\hat\theta - \theta$ behaves like $\hat\theta^* - \hat\theta$, and reflects the bootstrap distribution about
  $\hat\theta$.
- **Bootstrap-$t$:** bootstrap the studentised quantity $(\hat\theta^* - \hat\theta)/\widehat{\operatorname{se}}^*$. When a
  good standard error formula exists, this is more accurate.
- **BCa** (bias-corrected and accelerated; Efron, 1987): adjusts the percentile interval for bias and for a standard error
  that changes with $\theta$. Under smoothness conditions, one-sided bootstrap-$t$ and BCa intervals have coverage errors of
  order $1/n$, while one-sided percentile and basic intervals, like the normal-theory interval, have errors of order
  $1/\sqrt n$ (Hall, 1992).

### When the bootstrap fails

The plug-in principle works when the statistic depends smoothly on $F$ (the formal conditions are in Bickel and
Freedman, 1981). Here is a case where it does not.

**The sample maximum.** Let $X_1, \dots, X_n$ be uniform on $[0, \theta]$ and $\hat\theta = X_{(n)}$, the maximum. The true
sampling distribution is continuous: $n(\theta - X_{(n)})/\theta$ tends to an exponential distribution. But a bootstrap
resample has maximum equal to $X_{(n)}$ unless the largest value is never drawn, which happens with probability
$(1 - 1/n)^n$. So

$$
P^*\big(\hat\theta^* = \hat\theta\big) = 1 - \left(1 - \frac1n\right)^n \to 1 - e^{-1} \approx 0.632 .
$$

The bootstrap distribution has an atom of probability about 0.63 at the observed value, for every $n$, while the true
distribution has no atom at all. The bootstrap is inconsistent here. The culprit is that the maximum depends on the
extreme edge of $F$, which $\hat F_n$ estimates badly. The **$m$-out-of-$n$ bootstrap**, which draws resamples of a size
$m$ with $m \to \infty$ and $m/n \to 0$, repairs this and many similar cases.

Other failures: heavy-tailed data with infinite variance (the bootstrap of the mean fails; Athreya, 1987), statistics at
the boundary of the parameter space, and dependent data resampled as if independent. For time series
([Chapter 16](16-Time-Series.md)) one resamples **blocks** of consecutive observations instead of single points, which
keeps short-range dependence (Künsch, 1989).

### Expert remarks

Why should the bootstrap be accurate at all? For a statistic such as the mean, Edgeworth expansions write the
distribution of the standardised statistic as the normal plus correction terms of order $1/\sqrt n$ involving the
skewness. The bootstrap distribution has the same expansion with the sample skewness in place of the true one, so for a
studentised (pivotal) statistic it matches the true distribution to order $1/n$, better than the normal approximation's
$1/\sqrt n$. This "second-order accuracy" is the theoretical reason for preferring bootstrap-$t$ and BCa intervals; Hall's
*The Bootstrap and Edgeworth Expansion* (1992) is the full account. The jackknife (Quenouille, 1949; named by Tukey in
1958), which recomputes the statistic leaving out one observation at a time, is an older relative that can be seen as a
linear approximation to the bootstrap.

## Check yourself

??? question "1. In a paired study with 12 pairs, 9 differences are positive and 3 negative. What is the two-sided sign test p-value?"

    Under the null, $S \sim \text{Bin}(12, 1/2)$. $P(S \ge 9) = \frac{\binom{12}{9} + \binom{12}{10} + \binom{12}{11} + \binom{12}{12}}{4096} = \frac{220 + 66 + 12 + 1}{4096} = \frac{299}{4096} = 0.073$.
    Two-sided: $0.146$.

??? question "2. Write out the exact null distribution of the signed-rank statistic $W^+$ for $n = 3$. Can a two-sided test ever reject at 5%?"

    Subsets of $\{1, 2, 3\}$ by sum: 0: $\{\}$; 1: $\{1\}$; 2: $\{2\}$; 3: $\{3\}, \{1,2\}$; 4: $\{1,3\}$; 5: $\{2,3\}$; 6: $\{1,2,3\}$.
    So $P(W^+ = w) = 1, 1, 1, 2, 1, 1, 1$ out of 8 for $w = 0, \dots, 6$. The most extreme outcomes, 0 and 6, give a
    two-sided p-value of $2/8 = 0.25$. No: with 3 pairs a 5% test can never reject.

??? question "3. Check that $E[W^+] = n(n+1)/4$ and $\operatorname{Var}(W^+) = n(n+1)(2n+1)/24$ for $n = 3$ using the distribution in question 2."

    Mean: $(0 + 1 + 2 + 2 \cdot 3 + 4 + 5 + 6)/8 = 24/8 = 3 = 3 \cdot 4/4$. Second moment:
    $(0 + 1 + 4 + 2 \cdot 9 + 16 + 25 + 36)/8 = 100/8 = 12.5$, so variance $12.5 - 9 = 3.5$, and the formula gives
    $3 \cdot 4 \cdot 7/24 = 3.5$.

??? question "4. Groups $X$: 3.1, 4.5, 2.2 and $Y$: 5.0, 3.9, 6.3, 4.8. Compute $U$, $W$, and the exact one-sided p-value for $X$ tending to be smaller."

    Pooled order: 2.2, 3.1, 3.9, 4.5, 4.8, 5.0, 6.3. $X$ ranks: 1, 2, 4, so $W = 7$ and $U = 7 - 3\cdot4/2 = 1$ (only
    $4.5 > 3.9$). Of the $\binom73 = 35$ rank sets, $W \le 7$ happens for $\{1,2,3\}$ ($W = 6$) and $\{1,2,4\}$ ($W = 7$):
    p $= 2/35 = 0.057$.

??? question "5. For $m = 4$, $n = 5$, find the null mean and variance of $U$, and use them for a normal approximation to the example in 15.2 ($U = 2$)."

    $E[U] = mn/2 = 10$, $\operatorname{Var}(U) = mn(m+n+1)/12 = 20 \times 10/12 = 16.67$, sd 4.08. With a continuity
    correction, $z = (2.5 - 10)/4.08 = -1.84$, one-sided p $\approx 0.033$, close to the exact $4/126 = 0.032$.

??? question "6. In a paired design with $n$ pairs, the permutation test flips signs of differences. What is the smallest possible one-sided p-value, and why is the sign-flip group the right $G$?"

    $|G| = 2^n$; the observed data are always counted, so the smallest p-value is $1/2^n$ (when no other sign pattern
    gives a statistic as large). Under the null of symmetry about 0, each difference $d_i$ has the same distribution as
    $-d_i$, independently, so flipping any set of signs leaves the joint distribution unchanged: the data are
    exchangeable under sign flips.

??? question "7. Two judges rank five dishes: judge 1 gives 1, 2, 3, 4, 5 and judge 2 gives 2, 1, 4, 3, 5. Compute Spearman's $r_s$ and Kendall's $\tau$."

    $d = (-1, 1, -1, 1, 0)$, $\sum d^2 = 4$, $r_s = 1 - 24/(5 \cdot 24) = 0.8$. Discordant pairs: (dish 1, dish 2) and
    (dish 3, dish 4), so $n_d = 2$, $n_c = 8$, $\tau = 6/10 = 0.6$.

??? question "8. Show that a kernel density estimate with a density kernel $K$ is itself a probability density."

    Each term $\frac1h K((x - x_i)/h) \ge 0$, and substituting $u = (x - x_i)/h$, $\int \frac1h K((x - x_i)/h)\,dx = \int K(u)\,du = 1$.
    An average of $n$ densities is non-negative and integrates to $\frac1n \cdot n = 1$.

??? question "9. If the sample size is multiplied by 10, by what factor should the kernel bandwidth change, and by what factor does the optimal AMISE fall?"

    $h^* \propto n^{-1/5}$: factor $10^{-1/5} = 0.63$. AMISE $\propto n^{-4/5}$: factor $10^{-4/5} = 0.158$, compared with
    $0.1$ for a correct parametric model.

??? question "10. What is the probability that a particular observation does not appear in a bootstrap resample of size $n = 15$? What is the limit as $n \to \infty$?"

    Each draw misses it with probability $14/15$, so $(14/15)^{15} = 0.355$. The limit is $e^{-1} = 0.368$; on average
    about 63% of the distinct observations appear in each resample.

??? question "11. Prove that the bootstrap variance of the sample mean is exactly $\hat\sigma^2/n$, where $\hat\sigma^2 = \frac1n\sum (x_i - \bar x)^2$."

    Under $\hat F_n$, $X^*$ takes each value $x_i$ with probability $1/n$, so $E^*[X^*] = \bar x$ and
    $\operatorname{Var}^*(X^*) = \frac1n\sum (x_i - \bar x)^2 = \hat\sigma^2$. The $X_i^*$ are independent draws, so
    $\operatorname{Var}^*(\bar X^*) = \hat\sigma^2/n$. For the commuting times, $\sqrt{\hat\sigma^2/15} = 3.95$.

??? question "12. (Harder.) Explain why the Monte Carlo permutation p-value $(1 + \#\{b : T_b \ge T_0\})/(1 + B)$ is valid, where $T_0$ is the observed statistic and $T_1, \dots, T_B$ come from random rearrangements."

    Under the null, $Z$ is exchangeable under $G$; and if $g_1, \dots, g_B$ are drawn uniformly from $G$, independently
    of $Z$, then $(Z, g_1Z, \dots, g_BZ)$ are exchangeable as a list of $B + 1$ data sets (each is a uniformly rearranged
    copy of the same orbit). So $T_0, T_1, \dots, T_B$ are exchangeable, and the rank of $T_0$ among them is uniform on
    $\{1, \dots, B+1\}$ (with ties broken against rejection). The p-value is the rank of $T_0$ from the top divided by
    $B + 1$, so $P(\hat p \le \alpha) \le \lfloor \alpha(B+1)\rfloor/(B+1) \le \alpha$, the same counting as in the
    theorem.

## What you learned

- Distribution-free tests keep only signs, ranks or rearrangements, and their null distributions are exact for every
  continuous distribution in the null; the Wilcoxon tests lose only about 5% efficiency against $t$ for normal data.
- The sign test is binomial; the signed-rank statistic is $\sum k I_k$ with independent fair signs; the rank-sum
  statistic is a sample without replacement from $\{1, \dots, N\}$, and $U/(mn)$ estimates $P(X > Y)$.
- A permutation test is valid whenever the data are exchangeable under the rearrangements used; a randomised
  experiment guarantees this by design. Monte Carlo versions stay exact with the "+1".
- Spearman's $r_s = 1 - 6\sum d^2/(n(n^2-1))$ is Pearson's correlation of the ranks; Kendall's $\tau$ counts concordant
  minus discordant pairs; both have exact permutation tests.
- Kernel density estimates trade bias (order $h^2$) against variance (order $1/(nh)$); the best bandwidth is of order
  $n^{-1/5}$ and the error of order $n^{-4/5}$.
- The bootstrap plugs the empirical distribution in for the true one; it can sometimes be computed exactly, its better
  intervals are second-order accurate, and it fails for non-smooth statistics such as the sample maximum.

**Next:** [Chapter 16](16-Time-Series.md), data that come in time order, where neighbouring observations are not
independent.

## Further reading

- J. Arbuthnot, "An argument for Divine Providence, taken from the constant regularity observ'd in the births of both
  sexes", *Philosophical Transactions of the Royal Society* 27, 1710.
- F. Wilcoxon, "Individual comparisons by ranking methods", *Biometrics Bulletin* 1, 1945, and H. B. Mann and
  D. R. Whitney, "On a test of whether one of two random variables is stochastically larger than the other",
  *Annals of Mathematical Statistics* 18, 1947.
- E. L. Lehmann, *Nonparametrics: Statistical Methods Based on Ranks*, Holden-Day, 1975 (revised edition Springer, 2006).
- P. Good, *Permutation, Parametric and Bootstrap Tests of Hypotheses*, 3rd edition, Springer, 2005.
- C. Spearman, "The proof and measurement of association between two things", *American Journal of Psychology* 15,
  1904, and M. G. Kendall, "A new measure of rank correlation", *Biometrika* 30, 1938.
- B. W. Silverman, *Density Estimation for Statistics and Data Analysis*, Chapman and Hall, 1986.
- B. Efron, "Bootstrap methods: another look at the jackknife", *Annals of Statistics* 7, 1979, and B. Efron and
  R. J. Tibshirani, *An Introduction to the Bootstrap*, Chapman and Hall, 1993.
- A. C. Davison and D. V. Hinkley, *Bootstrap Methods and Their Application*, Cambridge University Press, 1997.
- P. Hall, *The Bootstrap and Edgeworth Expansion*, Springer, 1992.
- L. Wasserman, *All of Nonparametric Statistics*, Springer, 2006.
- On this site: [Hypothesis tests](../../topics/statistics/level-8/03-hypothesis-tests.md) and
  [Sampling distributions](../../topics/statistics/level-8/01-sampling-distributions.md) (gentler),
  [Monte Carlo methods](../../topics/probability/level-8/07-monte-carlo.md),
  [Generating functions in probability](../probability/08-Generating-Functions-in-Probability.md), the
  [Combinatorics book](../combinatorics/index.md) for the counting behind exact null distributions, and the
  [Statistics book's contents](index.md).
