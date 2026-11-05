# 9. Hypothesis tests

*A new drug seems to add sleep, a coin seems to favour heads, a machine seems to overfill its bags. Each time the
data show some effect, and each time the same doubt follows: could chance alone have produced a pattern this
large? A hypothesis test is the standard way to answer that doubt with a number. In this chapter you will learn the
logic of a test, what a p-value is and (just as important) what it is not, the two kinds of error a test can make
and how to plan a study so that it has a fair chance of finding a real effect. You will then run the workhorse tests
of science, the one-sample, paired and two-sample t tests, on a real dataset from 1905, see that every test is a
confidence interval in disguise, and finish with the trap that catches whole fields: running many tests and
reporting the lucky ones.*

!!! abstract "In this chapter"
    **You will learn:**

    - the logic of a test: a null hypothesis, an alternative, a test statistic and a rule
    - what a p-value is, why it is uniform when the null is true, and the six principles of the American
      Statistical Association's 2016 statement on p-values
    - type I and type II errors, power, and how to choose a sample size before collecting data
    - the one-sample, paired and two-sample t tests (pooled and Welch), with Student's own sleep data
    - why a test and a confidence interval are two views of one object (with proof)
    - multiple testing: the Bonferroni correction (proof), the false discovery rate and the Benjamini-Hochberg rule,
      and how p-hacking manufactures false results

    **You need:** [Chapter 6](06-Sampling-Distributions.md) (sampling distributions and the standard error),
    [Chapter 8](08-Confidence-Intervals.md) (confidence intervals and Student's t), and the normal law from the
    Probability book ([Chapter 10](../probability/10-The-Normal-Distribution.md)). From this chapter on, Part III uses
    some calculus (here only in 9.4, and lightly). A gentler version is the Topics lesson on
    [hypothesis tests](../../topics/statistics/level-8/03-hypothesis-tests.md).

    **Levels:** 9.1 and 9.2 are intermediate; 9.3 is intermediate with an advanced ending; 9.4 is intermediate,
    with an advanced proof; 9.5 is advanced; 9.6 is intermediate, with an advanced last part.

## 9.1 The logic: null and alternative

### A question about a machine

A machine fills bags of flour labelled 500 grams. (This example is made up.) Long experience says that each bag's
weight varies around the machine's setting with a standard deviation of $\sigma = 4$ grams, and the factory wants
the setting to be exactly 500. An inspector weighs 16 bags and finds an average of $\bar x = 502.1$ grams.

Is the machine overfilling? The average is above 500, but averages wobble. If the setting were exactly 500, the
average of 16 bags would still not be exactly 500; it would land somewhere near it. The real question is: **how
surprising is 502.1 if the setting is 500?**

That reversal is the whole idea of a test. We cannot directly measure how likely it is that the machine is
overfilling. What we can calculate is how likely data like ours would be *if* it were not. If such data would be
very rare in that case, we have evidence against it.

### The pieces of a test

A **hypothesis** is a statement about the population (or the process) that produced the data, usually about a
parameter such as a mean $\mu$.

- The **null hypothesis** $H_0$ is the "nothing is going on" statement: the setting is 500, the drug does nothing,
  the coin is fair. It is the statement we try to find evidence against. The word "null" comes from the idea of
  zero effect.
- The **alternative hypothesis** $H_1$ (also written $H_A$) is what we will believe instead if the evidence against
  $H_0$ is strong. It can be **two-sided** ($\mu \ne 500$: the machine is wrong in either direction) or
  **one-sided** ($\mu > 500$: we only care about overfilling).
- A **test statistic** is a number computed from the data that measures how far the data are from what $H_0$
  predicts, in a unit where we know its distribution under $H_0$.
- A **rejection rule** says which values of the statistic count as "too surprising to believe $H_0$".

For the flour, $H_0: \mu = 500$ and, since both overfilling and underfilling are problems, $H_1: \mu \ne 500$. The
sample mean of $n$ independent bags has standard error $\sigma/\sqrt n$ ([Chapter 6](06-Sampling-Distributions.md)),
here $4/\sqrt{16} = 1$ gram. Bag weights are close to normal, so if $H_0$ is true then $\bar X \sim N(500, 1^2)$ and
the **z statistic**

$$
Z = \frac{\bar X - \mu_0}{\sigma/\sqrt n}
$$

has the standard normal law $N(0,1)$. Here $\mu_0 = 500$ is the value named by the null hypothesis. With our data,
$z = (502.1 - 500)/1 = 2.1$. The average sits 2.1 standard errors above the null value.

Under $N(0,1)$, values at least 2.1 away from 0 in either direction have probability
$2(1 - \Phi(2.1)) \approx 0.036$, where $\Phi$ is the standard normal cumulative distribution function. So if the
machine were set correctly, only about 3.6 percent of inspections would produce an average as far from 500 as this
one. That is either a fairly rare accident or a sign that the setting has drifted.

### The courtroom picture

A test works like a criminal trial. The defendant ($H_0$) is presumed innocent. The prosecution (the data) must
produce evidence strong enough to convict "beyond reasonable doubt". Three features carry over exactly:

1. **The burden of proof is on the alternative.** We never set out to prove $H_0$.
2. **"Not guilty" is not "innocent".** If the evidence is weak, we **fail to reject** $H_0$. That does not show
   $H_0$ is true; the effect might be real but too small for our sample to see. A study of 5 patients that finds no
   effect has shown very little.
3. **The standard of proof is fixed in advance.** The **significance level** $\alpha$ (often 0.05) is the risk of
   convicting an innocent defendant that we agree to accept. It is chosen before looking at the data.

### The oldest test

The first published argument with this shape is usually credited to John Arbuthnot, physician to Queen Anne. In a
1710 paper in the *Philosophical Transactions of the Royal Society* he looked at the London christening records for
82 consecutive years and noted that in every one of them more boys than girls were christened. If each year were
equally likely to favour boys or girls, like a fair coin, the chance that all 82 years favour boys would be

$$
\left(\tfrac12\right)^{82} \approx 2.07 \times 10^{-25}.
$$

Arbuthnot concluded that chance was not the cause (he drew a theological conclusion from it, which is not a
statistical one). In modern words: $H_0$ was "each year is a fair coin", the statistic was the number of
boy-majority years, and the data were absurdly unlikely under $H_0$. This is also the first **sign test**, which
returns in [Chapter 15](15-Nonparametric-Methods.md).

### The recipe

Every test in this book follows the same five steps.

1. State $H_0$ and $H_1$ in terms of a parameter.
2. Choose the significance level $\alpha$.
3. Choose a test statistic whose distribution under $H_0$ is known (exactly or approximately).
4. Compute the statistic from the data, and the p-value (9.2).
5. Reject $H_0$ if the p-value is at most $\alpha$; otherwise fail to reject. Then say what this means in the
   language of the problem, with an estimate of the effect and its uncertainty.

The last half of step 5 matters most and is skipped most often. "We rejected $H_0$" is never the end of a report.

## 9.2 p-values

### The definition

**Definition.** The **p-value** of a test is the probability, computed assuming $H_0$ is true, of getting a test
statistic at least as extreme as the one actually observed. "Extreme" means "in the direction of $H_1$".

For a two-sided z test with observed $z$, the p-value is $P(|Z| \ge |z|) = 2(1 - \Phi(|z|))$. For a one-sided test
of $H_1: \mu > \mu_0$, it is $P(Z \ge z) = 1 - \Phi(z)$.

A small p-value says: if $H_0$ were true, data like these would be rare. So either a rare event happened, or $H_0$
is false.

**Example 1 (a coin).** A coin lands heads 60 times in 100 tosses. Test $H_0: p = \tfrac12$ against
$H_1: p \ne \tfrac12$, where $p$ is the chance of heads.

*Step 1: the exact p-value.* Under $H_0$ the number of heads is binomial with $n = 100$ and $p = \tfrac12$. By the
symmetry of this law, the two-sided p-value is twice the upper tail:

$$
2 \, P(X \ge 60) = 2 \sum_{k=60}^{100} \binom{100}{k} 2^{-100} \approx 2 \times 0.02844 = 0.0569 .
$$

*Step 2: the normal approximation.* Under $H_0$ the count has mean 50 and standard deviation
$\sqrt{100 \cdot \tfrac12 \cdot \tfrac12} = 5$. The z statistic is $(60 - 50)/5 = 2$, with two-sided p-value
$2(1 - \Phi(2)) \approx 0.0455$.

*Step 3: the continuity correction.* The count is a whole number, so "at least 60" is better approximated by "above
59.5" ([Probability, Chapter 10](../probability/10-The-Normal-Distribution.md)):
$z = (59.5 - 50)/5 = 1.9$, giving $2(1 - \Phi(1.9)) \approx 0.0574$, very close to the exact 0.0569.

Check: the crude approximation says "significant at 5 percent" and the exact answer says "not quite". A result that
flips between methods this easily is weak evidence either way, and that is the honest summary.

### Try it in Python

```python
from math import comb, erf, sqrt

def Phi(z):                     # standard normal cdf
    return 0.5 * (1 + erf(z / sqrt(2)))

exact = 2 * sum(comb(100, k) for k in range(60, 101)) / 2**100
print(exact)                    # 0.0569
print(2 * (1 - Phi(2.0)))       # 0.0455, no correction
print(2 * (1 - Phi(1.9)))       # 0.0574, with the continuity correction
```

### The p-value is uniform when the null is true

Here is the single most useful fact about p-values, and it explains why "reject when $p \le \alpha$" has error
rate exactly $\alpha$.

**Theorem.** Suppose the test statistic $T$ has a continuous distribution under $H_0$, and large values of $T$ count
as extreme. Let $F$ be its cumulative distribution function under $H_0$, and define the p-value as the random
variable $P = 1 - F(T)$. Then, if $H_0$ is true, $P$ is uniformly distributed on $[0, 1]$. In particular
$P(P \le \alpha) = \alpha$ for every $\alpha$ between 0 and 1.

*Proof.* Assume for simplicity that $F$ is strictly increasing where it matters (the general case uses the
generalised inverse and goes the same way). For $u \in (0, 1)$,

$$
P(P \le u) = P\big(1 - F(T) \le u\big) = P\big(F(T) \ge 1 - u\big) = P\big(T \ge F^{-1}(1 - u)\big)
= 1 - F\big(F^{-1}(1-u)\big) = u .
$$

The fourth step uses that $T$ has no atoms, so $P(T \ge t) = 1 - F(t)$. A random variable with $P(P \le u) = u$
for all $u$ is uniform on $[0, 1]$. $\square$

Two consequences:

- **The rule "reject when $p \le \alpha$" rejects a true null with probability exactly $\alpha$.** That is what the
  significance level promises.
- **When nothing is going on, every p-value between 0 and 1 is equally likely.** A p-value of 0.8 is not "evidence
  for $H_0$", and a p-value of 0.06 is not "almost significant evidence". Under $H_0$, 0.06 is exactly as ordinary as
  0.8. If 1000 researchers each test a true null, about 50 of them will get $p \le 0.05$. This fact is the engine of
  the problems in 9.6.

For a discrete statistic, such as a binomial count, the p-value can only take certain values, and then
$P(P \le \alpha) \le \alpha$: the test is **conservative**, rejecting a true null at most (and usually less than)
$\alpha$ of the time.

### What a p-value is not

The p-value is the most misread number in science. The common errors all confuse "the probability of the data,
given the hypothesis" with "the probability of the hypothesis, given the data". These are different, as Bayes'
theorem shows ([Probability, Chapter 4](../probability/04-Bayes-Theorem.md)).

- A p-value of 0.03 does **not** mean "there is a 3 percent chance that $H_0$ is true". The p-value is computed
  assuming $H_0$ is true, so it cannot also be the probability that $H_0$ is true. To get that probability you
  need a prior, as in [Chapter 14](14-Bayesian-Statistics.md).
- It does **not** mean "there is a 3 percent chance the result is due to chance".
- A small p-value does **not** mean a large or important effect. With a million observations, a difference of 0.01
  grams between two machines can have a tiny p-value and no practical meaning.
- A large p-value does **not** show that $H_0$ is true. It may just mean the sample was small.
- $p = 0.049$ and $p = 0.051$ are practically the same evidence. Treating one as a discovery and the other as a
  failure is a habit, not a law.

### The ASA statement of 2016

Worries about misuse grew so much that in 2016 the American Statistical Association (ASA) took the unusual step of
publishing a formal statement on one specific matter of statistical practice: "The ASA's statement on p-values:
context, process, and purpose", by Ronald Wasserstein and Nicole Lazar, in *The American Statistician*. It lists six
principles, which in paraphrase say:

1. P-values can indicate how incompatible the data are with a specified statistical model.
2. P-values do not measure the probability that the studied hypothesis is true, or the probability that the data
   were produced by random chance alone.
3. Scientific conclusions and business or policy decisions should not be based only on whether a p-value passes a
   specific threshold.
4. Proper inference requires full reporting and transparency.
5. A p-value, or statistical significance, does not measure the size of an effect or the importance of a result.
6. By itself, a p-value does not provide a good measure of evidence regarding a model or hypothesis.

Note what principle 1 says carefully: "incompatible with a *model*". The p-value is computed under the whole
model, including assumptions like independence and normality, not only under the claim $\mu = \mu_0$. A small
p-value may mean that $\mu \ne \mu_0$, or that the observations were not independent, or that the data were chosen
selectively. The test cannot tell which.

The statement did not ban p-values. A 2019 editorial in the same journal by Wasserstein, Allen Schirm and Lazar went
further and urged dropping the phrase "statistically significant"; that editorial expressed its authors' views, not
an official ASA position. In 2021 a task force appointed by the ASA's president published a separate statement
saying that p-values and significance tests, properly applied and interpreted, remain valid tools. The working
consensus that emerged: report the p-value as a number (not just "$p < 0.05$"), always alongside an estimate of the
effect and a confidence interval, and never let a threshold do the thinking.

### A short history

The p-value and the fixed-level test come from two rival schools that textbooks later glued together.

Ronald Fisher, in *Statistical Methods for Research Workers* (1925), treated the p-value as a continuous measure of
evidence against a null hypothesis. He suggested 0.05 as a convenient point for judging whether a deviation is
significant (it is about 2 standard deviations for a normal statistic), but he did not treat it as a rigid rule, and
he had no notion of an alternative hypothesis or of power.

Jerzy Neyman and Egon Pearson, in papers culminating in "On the problem of the most efficient tests of statistical
hypotheses" (1933), set things up as a decision problem: fix $\alpha$ in advance, specify an alternative, and choose
the test with the smallest chance of the other error (9.3). For them a single test result was not evidence about a
hypothesis but one use of a procedure with known long-run error rates. Their main theorem, the Neyman-Pearson lemma,
is proved in [Chapter 13](13-Likelihood-Theory.md).

Fisher and Neyman disagreed bitterly for decades. Modern practice uses Fisher's p-value with Neyman and Pearson's
$\alpha$, power and alternatives, which works well enough if you remember which idea each piece came from.

<figure class="play" data-play="pvalue"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Is the coin fair? The p-value is the chance, if it were fair, of a count at least as far from n/2 as the one you saw.</figcaption></figure>

## 9.3 Errors of type I and II, power

### Two ways to be wrong

A test makes a binary decision about a binary truth, so there are four cases.

| | $H_0$ is true | $H_0$ is false |
|---|---|---|
| **Reject $H_0$** | type I error (false alarm), probability $\alpha$ | correct, probability $1 - \beta$ (the power) |
| **Fail to reject** | correct, probability $1 - \alpha$ | type II error (a miss), probability $\beta$ |

- A **type I error** is rejecting a true null: convicting the innocent, a smoke alarm going off with no fire,
  declaring a useless drug effective. Its probability is the significance level $\alpha$.
- A **type II error** is failing to reject a false null: acquitting the guilty, a smoke alarm sleeping through a
  fire, missing a drug that works. Its probability is written $\beta$.
- The **power** of a test is $1 - \beta$: the probability of correctly rejecting $H_0$ when it is false.

There is a tension. Making the alarm less sensitive (smaller $\alpha$) means more missed fires (larger $\beta$), for
the same sample. The only way to reduce both at once is more information: a larger sample, or less noisy
measurements.

Power is not one number: $\beta$ depends on how false $H_0$ is. A machine set at 500.1 grams is "not 500", but no
reasonable inspection will notice. So we compute the **power function**: power as a function of the true
parameter.

### Power of the z test

Return to the flour. Test $H_0: \mu = 500$ against $H_1: \mu \ne 500$ at $\alpha = 0.05$, with $\sigma = 4$ and
$n = 16$, so the standard error is 1. We reject when $|Z| \ge 1.96$. Suppose the true mean is 502. What is the
chance we notice?

When $\mu = 502$, the statistic $Z = (\bar X - 500)/1$ is no longer standard normal: $\bar X \sim N(502, 1)$, so
$Z \sim N(2, 1)$. The power is

$$
P(|Z| \ge 1.96) = P(Z \ge 1.96) + P(Z \le -1.96) = \big(1 - \Phi(1.96 - 2)\big) + \Phi(-1.96 - 2)
\approx 0.516 + 0.00004 \approx 0.516 .
$$

So a drift of 2 grams, half a standard deviation of one bag, is caught only about half the time. The picture shows
both laws, with $\alpha$ and $\beta$ as areas.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="Two bell curves. The left one is the law of the test statistic if the null hypothesis is true, centred at 0; the right one is its law if the true mean is 2 standard errors higher. A vertical line at 1.96 is the cut-off. The small orange tail of the left curve beyond the line is alpha, the chance of a type I error. The blue part of the right curve left of the line is beta, the chance of a type II error">
  <path d="M30.0,180 L30.0,180.0 L32.1,180.0 L34.2,180.0 L36.3,180.0 L38.4,180.0 L40.6,180.0 L42.7,180.0 L44.8,180.0 L46.9,180.0 L49.0,180.0 L51.1,180.0 L53.2,180.0 L55.3,180.0 L57.4,180.0 L59.6,180.0 L61.7,180.0 L63.8,180.0 L65.9,180.0 L68.0,180.0 L70.1,180.0 L72.2,180.0 L74.3,180.0 L76.4,180.0 L78.6,180.0 L80.7,180.0 L82.8,180.0 L84.9,180.0 L87.0,180.0 L89.1,180.0 L91.2,180.0 L93.3,180.0 L95.4,179.9 L97.6,179.9 L99.7,179.9 L101.8,179.9 L103.9,179.9 L106.0,179.9 L108.1,179.8 L110.2,179.8 L112.3,179.8 L114.4,179.7 L116.6,179.7 L118.7,179.6 L120.8,179.5 L122.9,179.4 L125.0,179.3 L127.1,179.2 L129.2,179.1 L131.3,178.9 L133.4,178.8 L135.6,178.6 L137.7,178.3 L139.8,178.1 L141.9,177.8 L144.0,177.4 L146.1,177.0 L148.2,176.6 L150.3,176.1 L152.4,175.6 L154.6,175.0 L156.7,174.3 L158.8,173.6 L160.9,172.7 L163.0,171.8 L165.1,170.8 L167.2,169.7 L169.3,168.5 L171.4,167.1 L173.6,165.7 L175.7,164.1 L177.8,162.5 L179.9,160.6 L182.0,158.7 L184.1,156.6 L186.2,154.3 L188.3,152.0 L190.4,149.4 L192.6,146.8 L194.7,144.0 L196.8,141.0 L198.9,137.9 L201.0,134.7 L203.1,131.3 L205.2,127.9 L207.3,124.3 L209.4,120.6 L211.6,116.9 L213.7,113.1 L215.8,109.2 L217.9,105.3 L220.0,101.4 L222.1,97.4 L224.2,93.5 L226.3,89.7 L228.4,85.9 L230.6,82.1 L232.7,78.5 L234.8,75.0 L236.9,71.7 L239.0,68.5 L241.1,65.6 L243.2,62.8 L245.3,60.3 L247.4,58.0 L249.6,56.0 L251.7,54.3 L253.8,52.9 L255.9,51.8 L258.0,51.0 L260.1,50.5 L260.5,180 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="none"/>
  <path d="M260.5,180 L260.5,161.0 L262.6,162.8 L264.8,164.5 L266.9,166.0 L269.0,167.4 L271.1,168.7 L273.2,169.9 L275.3,171.0 L277.4,172.0 L279.5,172.9 L281.6,173.7 L283.8,174.4 L285.9,175.1 L288.0,175.7 L290.1,176.2 L292.2,176.7 L294.3,177.1 L296.4,177.5 L298.5,177.8 L300.6,178.1 L302.8,178.4 L304.9,178.6 L307.0,178.8 L309.1,179.0 L311.2,179.1 L313.3,179.2 L315.4,179.4 L317.5,179.5 L319.6,179.5 L321.8,179.6 L323.9,179.7 L326.0,179.7 L328.1,179.8 L330.2,179.8 L332.3,179.8 L334.4,179.9 L336.5,179.9 L338.6,179.9 L340.8,179.9 L342.9,179.9 L345.0,179.9 L347.1,180.0 L349.2,180.0 L351.3,180.0 L353.4,180.0 L355.5,180.0 L357.6,180.0 L359.8,180.0 L361.9,180.0 L364.0,180.0 L366.1,180.0 L368.2,180.0 L370.3,180.0 L372.4,180.0 L374.5,180.0 L376.6,180.0 L378.8,180.0 L380.9,180.0 L383.0,180.0 L385.1,180.0 L387.2,180.0 L389.3,180.0 L391.4,180.0 L393.5,180.0 L395.6,180.0 L397.8,180.0 L399.9,180.0 L402.0,180.0 L404.1,180.0 L406.2,180.0 L408.3,180.0 L410.0,180 Z" fill="#eea66f" fill-opacity="0.85" stroke="none"/>
  <polyline fill="none" stroke="currentColor" stroke-width="2" points="30.0,179.7 32.1,179.7 34.2,179.6 36.3,179.5 38.4,179.4 40.6,179.3 42.7,179.2 44.8,179.1 46.9,178.9 49.0,178.8 51.1,178.6 53.2,178.3 55.3,178.1 57.4,177.8 59.6,177.4 61.7,177.0 63.8,176.6 65.9,176.1 68.0,175.6 70.1,175.0 72.2,174.3 74.3,173.6 76.4,172.7 78.6,171.8 80.7,170.8 82.8,169.7 84.9,168.5 87.0,167.1 89.1,165.7 91.2,164.1 93.3,162.5 95.4,160.6 97.6,158.7 99.7,156.6 101.8,154.3 103.9,152.0 106.0,149.4 108.1,146.8 110.2,144.0 112.3,141.0 114.4,137.9 116.6,134.7 118.7,131.3 120.8,127.9 122.9,124.3 125.0,120.6 127.1,116.9 129.2,113.1 131.3,109.2 133.4,105.3 135.6,101.4 137.7,97.4 139.8,93.5 141.9,89.7 144.0,85.9 146.1,82.1 148.2,78.5 150.3,75.0 152.4,71.7 154.6,68.5 156.7,65.6 158.8,62.8 160.9,60.3 163.0,58.0 165.1,56.0 167.2,54.3 169.3,52.9 171.4,51.8 173.6,51.0 175.7,50.5 177.8,50.3 179.9,50.5 182.0,51.0 184.1,51.8 186.2,52.9 188.3,54.3 190.4,56.0 192.6,58.0 194.7,60.3 196.8,62.8 198.9,65.6 201.0,68.5 203.1,71.7 205.2,75.0 207.3,78.5 209.4,82.1 211.6,85.9 213.7,89.7 215.8,93.5 217.9,97.4 220.0,101.4 222.1,105.3 224.2,109.2 226.3,113.1 228.4,116.9 230.6,120.6 232.7,124.3 234.8,127.9 236.9,131.3 239.0,134.7 241.1,137.9 243.2,141.0 245.3,144.0 247.4,146.8 249.6,149.4 251.7,152.0 253.8,154.3 255.9,156.6 258.0,158.7 260.1,160.6 262.2,162.5 264.3,164.1 266.4,165.7 268.6,167.1 270.7,168.5 272.8,169.7 274.9,170.8 277.0,171.8 279.1,172.7 281.2,173.6 283.3,174.3 285.4,175.0 287.6,175.6 289.7,176.1 291.8,176.6 293.9,177.0 296.0,177.4 298.1,177.8 300.2,178.1 302.3,178.3 304.4,178.6 306.6,178.8 308.7,178.9 310.8,179.1 312.9,179.2 315.0,179.3 317.1,179.4 319.2,179.5 321.3,179.6 323.4,179.7 325.6,179.7 327.7,179.8 329.8,179.8 331.9,179.8 334.0,179.9 336.1,179.9 338.2,179.9 340.3,179.9 342.4,179.9 344.6,179.9 346.7,180.0 348.8,180.0 350.9,180.0 353.0,180.0 355.1,180.0 357.2,180.0 359.3,180.0 361.4,180.0 363.6,180.0 365.7,180.0 367.8,180.0 369.9,180.0 372.0,180.0 374.1,180.0 376.2,180.0 378.3,180.0 380.4,180.0 382.6,180.0 384.7,180.0 386.8,180.0 388.9,180.0 391.0,180.0 393.1,180.0 395.2,180.0 397.3,180.0 399.4,180.0 401.6,180.0 403.7,180.0 405.8,180.0 407.9,180.0 410.0,180.0"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2.5" points="30.0,180.0 32.1,180.0 34.2,180.0 36.3,180.0 38.4,180.0 40.6,180.0 42.7,180.0 44.8,180.0 46.9,180.0 49.0,180.0 51.1,180.0 53.2,180.0 55.3,180.0 57.4,180.0 59.6,180.0 61.7,180.0 63.8,180.0 65.9,180.0 68.0,180.0 70.1,180.0 72.2,180.0 74.3,180.0 76.4,180.0 78.6,180.0 80.7,180.0 82.8,180.0 84.9,180.0 87.0,180.0 89.1,180.0 91.2,180.0 93.3,180.0 95.4,179.9 97.6,179.9 99.7,179.9 101.8,179.9 103.9,179.9 106.0,179.9 108.1,179.8 110.2,179.8 112.3,179.8 114.4,179.7 116.6,179.7 118.7,179.6 120.8,179.5 122.9,179.4 125.0,179.3 127.1,179.2 129.2,179.1 131.3,178.9 133.4,178.8 135.6,178.6 137.7,178.3 139.8,178.1 141.9,177.8 144.0,177.4 146.1,177.0 148.2,176.6 150.3,176.1 152.4,175.6 154.6,175.0 156.7,174.3 158.8,173.6 160.9,172.7 163.0,171.8 165.1,170.8 167.2,169.7 169.3,168.5 171.4,167.1 173.6,165.7 175.7,164.1 177.8,162.5 179.9,160.6 182.0,158.7 184.1,156.6 186.2,154.3 188.3,152.0 190.4,149.4 192.6,146.8 194.7,144.0 196.8,141.0 198.9,137.9 201.0,134.7 203.1,131.3 205.2,127.9 207.3,124.3 209.4,120.6 211.6,116.9 213.7,113.1 215.8,109.2 217.9,105.3 220.0,101.4 222.1,97.4 224.2,93.5 226.3,89.7 228.4,85.9 230.6,82.1 232.7,78.5 234.8,75.0 236.9,71.7 239.0,68.5 241.1,65.6 243.2,62.8 245.3,60.3 247.4,58.0 249.6,56.0 251.7,54.3 253.8,52.9 255.9,51.8 258.0,51.0 260.1,50.5 262.2,50.3 264.3,50.5 266.4,51.0 268.6,51.8 270.7,52.9 272.8,54.3 274.9,56.0 277.0,58.0 279.1,60.3 281.2,62.8 283.3,65.6 285.4,68.5 287.6,71.7 289.7,75.0 291.8,78.5 293.9,82.1 296.0,85.9 298.1,89.7 300.2,93.5 302.3,97.4 304.4,101.4 306.6,105.3 308.7,109.2 310.8,113.1 312.9,116.9 315.0,120.6 317.1,124.3 319.2,127.9 321.3,131.3 323.4,134.7 325.6,137.9 327.7,141.0 329.8,144.0 331.9,146.8 334.0,149.4 336.1,152.0 338.2,154.3 340.3,156.6 342.4,158.7 344.6,160.6 346.7,162.5 348.8,164.1 350.9,165.7 353.0,167.1 355.1,168.5 357.2,169.7 359.3,170.8 361.4,171.8 363.6,172.7 365.7,173.6 367.8,174.3 369.9,175.0 372.0,175.6 374.1,176.1 376.2,176.6 378.3,177.0 380.4,177.4 382.6,177.8 384.7,178.1 386.8,178.3 388.9,178.6 391.0,178.8 393.1,178.9 395.2,179.1 397.3,179.2 399.4,179.3 401.6,179.4 403.7,179.5 405.8,179.6 407.9,179.7 410.0,179.7"/>
  <line x1="30" y1="180" x2="410" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="260.5" y1="30" x2="260.5" y2="180" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="51.1" y="196" text-anchor="middle" font-size="11" fill="currentColor">−3</text>
  <text x="93.3" y="196" text-anchor="middle" font-size="11" fill="currentColor">−2</text>
  <text x="135.6" y="196" text-anchor="middle" font-size="11" fill="currentColor">−1</text>
  <text x="177.8" y="196" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="220.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">1</text>
  <text x="262.2" y="196" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="304.4" y="196" text-anchor="middle" font-size="11" fill="currentColor">3</text>
  <text x="346.7" y="196" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <text x="388.9" y="196" text-anchor="middle" font-size="11" fill="currentColor">5</text>
  <text x="260.5" y="24" text-anchor="middle" font-size="11" fill="currentColor">cut-off 1.96</text>
  <text x="177.8" y="42.0" text-anchor="middle" font-size="12" fill="currentColor">if H₀ is true</text>
  <text x="302.2" y="42.0" text-anchor="middle" font-size="12" fill="currentColor">if the mean is 502</text>
  <text x="287.6" y="172" text-anchor="middle" font-size="12" fill="currentColor">α</text>
  <text x="228.4" y="150" text-anchor="middle" font-size="12" fill="currentColor">β</text>
  <text x="220" y="218" text-anchor="middle" font-size="11" fill="currentColor">test statistic z</text>
</svg>
</div>

In general, for a two-sided z test at level $\alpha$ with true mean $\mu$, write $\delta = \mu - \mu_0$ for the true
effect and $z_{\alpha/2}$ for the upper $\alpha/2$ point of $N(0,1)$ (1.96 when $\alpha = 0.05$). Then the same
calculation gives

$$
\text{power}(\mu) = \Phi\!\left(\frac{\delta\sqrt n}{\sigma} - z_{\alpha/2}\right) + \Phi\!\left(-\frac{\delta\sqrt n}{\sigma} - z_{\alpha/2}\right).
$$

Read the formula: power depends on the effect only through $\delta\sqrt n/\sigma$, the effect measured in standard
errors. Doubling the effect has the same impact as quadrupling the sample. The ratio $\delta/\sigma$ (effect divided
by the spread of one observation) is called the **standardised effect size**; in the flour example it is
$2/4 = 0.5$.

| $n$ | standard error | power at $\mu = 502$ |
|---|---|---|
| 16 | 1.00 | 0.516 |
| 32 | 0.71 | 0.807 |
| 64 | 0.50 | 0.979 |

### Choosing a sample size

Power analysis turns the formula around: decide the smallest effect worth detecting and the power you want, then
solve for $n$. When the effect is large compared with the noise, the second term in the power formula is tiny, so
we need $\Phi(\delta\sqrt n/\sigma - z_{\alpha/2}) = 1 - \beta$, that is $\delta\sqrt n/\sigma - z_{\alpha/2} = z_\beta$.
Solving,

$$
n = \left(\frac{(z_{\alpha/2} + z_\beta)\,\sigma}{\delta}\right)^2 .
$$

**Example 2.** The factory wants an 80 percent chance of detecting a drift of 2 grams at $\alpha = 0.05$. Then
$z_{0.025} = 1.960$, $z_{0.2} = 0.842$, and

$$
n = \left(\frac{(1.960 + 0.842) \times 4}{2}\right)^2 = (5.604)^2 \approx 31.4 ,
$$

so weigh 32 bags. Check: the table above gives power 0.807 at $n = 32$.

Power analysis should be done **before** collecting data. A study with low power has two problems, not one. It will
usually miss real effects; and when it does find "significance", the estimated effect is usually exaggerated,
because only the samples that happened to overshoot crossed the threshold. Andrew Gelman and John Carlin (2014) call
this the "type M" (magnitude) error. Low power is one of the main causes of the replication problems discussed in
[Chapter 20](20-Where-Statistics-Goes.md).

*Level: advanced.* A **post hoc** power calculation, plugging the observed effect into the power formula after a
non-significant result, adds nothing. For the z test the "observed power" is a fixed decreasing function of the
p-value, so it repeats the p-value in other units. This point was made clearly by John Hoenig and Dennis Heisey
(2001).

## 9.4 One- and two-sample t tests

### When $\sigma$ is unknown

The z test needs the population standard deviation $\sigma$, which is almost never known. The natural fix is to
replace it with the sample standard deviation $s$, and this is exactly the problem William Sealy Gosset solved at
the Guinness brewery in 1908, publishing as "Student" ([Chapter 8](08-Confidence-Intervals.md), section 8.3).

**Theorem (Student, 1908; proved rigorously by Fisher).** If $X_1, \dots, X_n$ are independent $N(\mu, \sigma^2)$,
then

$$
T = \frac{\bar X - \mu}{S/\sqrt n}
$$

has the **t distribution with $n - 1$ degrees of freedom**, written $t_{n-1}$. Here
$S^2 = \frac{1}{n-1}\sum (X_i - \bar X)^2$ is the sample variance.

*Proof sketch.* *Level: advanced.* Three facts combine.

1. $Z = \sqrt n(\bar X - \mu)/\sigma \sim N(0, 1)$, because a sum of independent normals is normal.
2. $V = (n-1)S^2/\sigma^2$ has the **chi-squared distribution with $n - 1$ degrees of freedom**, written
   $\chi^2_{n-1}$: the law of a sum of $n - 1$ squares of independent standard normals.
3. $\bar X$ and $S^2$ are **independent**.

Then $T = Z / \sqrt{V/(n-1)}$, and the t distribution is *defined* as the law of $Z/\sqrt{V/k}$ with
$Z \sim N(0,1)$ and $V \sim \chi^2_k$ independent; its density follows by a change of variables and one integral (done in
any of the books listed at the end).

Facts 2 and 3 come from one idea: rotation. Let $Y_i = (X_i - \mu)/\sigma$, independent standard normals. Choose an
orthogonal matrix $Q$ (a rotation: its rows are perpendicular unit vectors) whose first row is
$(1/\sqrt n, \dots, 1/\sqrt n)$. Set $W = QY$. The joint density of independent standard normals,
$(2\pi)^{-n/2} e^{-|y|^2/2}$, depends only on the length $|y|$, and rotations preserve length and volume, so the
$W_i$ are again independent standard normals. Now $W_1 = \sqrt n\,\bar Y$, and because rotation preserves length,

$$
W_2^2 + \dots + W_n^2 = |W|^2 - W_1^2 = |Y|^2 - n\bar Y^2 = \sum (Y_i - \bar Y)^2 = \frac{(n-1)S^2}{\sigma^2} .
$$

So $(n-1)S^2/\sigma^2$ is a sum of $n - 1$ squared independent standard normals (fact 2), and it depends only on
$W_2, \dots, W_n$, which are independent of $W_1$, which carries $\bar X$ (fact 3). $\square$

The t density is bell-shaped and symmetric like the normal, but with heavier tails, because $S$ sometimes
underestimates $\sigma$. As the degrees of freedom grow, $S$ settles near $\sigma$ and $t_k$ approaches $N(0,1)$.
The two-sided 5 percent points show it:

| degrees of freedom | 1 | 2 | 5 | 9 | 20 | 30 | 100 | $\infty$ (normal) |
|---|---|---|---|---|---|---|---|---|
| $t_{0.025}$ | 12.71 | 4.30 | 2.571 | 2.262 | 2.086 | 2.042 | 1.984 | 1.960 |

### The one-sample t test

To test $H_0: \mu = \mu_0$ with normal data and unknown $\sigma$, compute

$$
t = \frac{\bar x - \mu_0}{s/\sqrt n}
$$

and compare it with $t_{n-1}$. The two-sided p-value is $2\,P(T_{n-1} \ge |t|)$.

**Robustness.** The t test assumes normal data, but thanks to the central limit theorem
([Chapter 6](06-Sampling-Distributions.md)) it is close to correct for moderately large samples from most
distributions, provided the observations are independent. Its real weaknesses are strong skewness with small $n$,
heavy outliers (which inflate $s$ and pull $\bar x$), and above all dependence between observations, which no
sample size cures. For small skewed samples, the methods of [Chapter 15](15-Nonparametric-Methods.md) are safer.

### Student's sleep data and the paired test

In his 1908 paper, Gosset illustrated his method on data published in 1905 by the pharmacologists Arthur Cushny and
A. R. Peebles: the extra hours of sleep (compared with a night without a drug) of 10 patients, each of whom was
given each of two sleep-inducing drugs on different occasions. The data, as they appear in the dataset `sleep` that
ships with the statistics language R, are:

| patient | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| drug A | 0.7 | −1.6 | −0.2 | −1.2 | −0.1 | 3.4 | 3.7 | 0.8 | 0.0 | 2.0 |
| drug B | 1.9 | 0.8 | 1.1 | 0.1 | −0.1 | 4.4 | 5.5 | 1.6 | 4.6 | 3.4 |
| difference B − A | 1.2 | 2.4 | 1.3 | 1.3 | 0.0 | 1.0 | 1.8 | 0.8 | 4.6 | 1.4 |

(Historians have noted that the original labelling of the drugs in this table was muddled, so we call them A and
B. The numbers are what matter here.)

Is drug B better than drug A? The same patients took both, so the natural unit of analysis is the **difference**
for each patient. This removes the large differences between patients (patient 7 sleeps much more than patient 2
on either drug) and keeps only the comparison we care about. A test on the differences is called a **paired t
test**; it is simply a one-sample t test on the differences, with $H_0: \mu_d = 0$, where $\mu_d$ is the mean
difference in the population of patients.

*Step 1: summaries.* The 10 differences have mean $\bar d = 15.8/10 = 1.58$ hours and standard deviation
$s_d \approx 1.230$.

*Step 2: statistic.* The standard error is $1.230/\sqrt{10} \approx 0.389$, so

$$
t = \frac{1.58 - 0}{0.389} \approx 4.06 \quad \text{on } 9 \text{ degrees of freedom}.
$$

*Step 3: p-value.* $2\,P(T_9 \ge 4.06) \approx 0.0028$.

*Step 4: interval.* With $t_{0.025, 9} = 2.262$, a 95 percent confidence interval for $\mu_d$ is
$1.58 \pm 2.262 \times 0.389$, that is, from 0.70 to 2.46 hours.

*Step 5: in words.* If the drugs had the same average effect, a mean difference this large would happen in fewer
than 3 of every 1000 such experiments. Drug B added about 1.6 hours more sleep than drug A on average, and the data
are consistent with any true advantage from about 0.7 to 2.5 hours. Check: 0 is outside the interval, matching
$p < 0.05$ (section 9.5 explains why these always agree).

### Two independent samples

Often the two groups contain different subjects: a treatment group and a control group, chosen by randomisation
([Chapter 5](05-Sampling-and-Experiments.md)). Then there is no pairing. Suppose group 1 has $n_1$ observations
with mean $\bar x_1$ and standard deviation $s_1$, and group 2 likewise. We test $H_0: \mu_1 = \mu_2$.

The difference $\bar X_1 - \bar X_2$ has mean $\mu_1 - \mu_2$ and, because the groups are independent,

$$
\operatorname{Var}(\bar X_1 - \bar X_2) = \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}.
$$

There are two standard ways to estimate this.

**Pooled t test.** If we are willing to assume equal variances $\sigma_1 = \sigma_2 = \sigma$, estimate $\sigma^2$
by the **pooled variance**, a weighted average of the two sample variances:

$$
s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2},
\qquad
t = \frac{\bar x_1 - \bar x_2}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} .
$$

Under $H_0$ with normal data and equal variances, this has exactly a $t_{n_1 + n_2 - 2}$ distribution (the same
rotation argument, applied to each group, shows the numerator is normal and independent of a chi-squared with
$n_1 + n_2 - 2$ degrees of freedom).

**Welch's t test.** Without assuming equal variances, use

$$
t = \frac{\bar x_1 - \bar x_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} .
$$

Its exact null distribution is not a t distribution (this is the "Behrens-Fisher problem", which has no exact
solution of the simple kind). Bernard Welch (1947) showed it is very well approximated by $t_\nu$, with the
**Welch-Satterthwaite** degrees of freedom

$$
\nu = \frac{\left(\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}\right)^2}{\frac{(s_1^2/n_1)^2}{n_1 - 1} + \frac{(s_2^2/n_2)^2}{n_2 - 1}},
$$

which need not be a whole number. The idea behind it: match the mean and variance of the estimated variance to
those of a scaled chi-squared variable. Many statisticians now use Welch's test by default: when the variances are
equal it loses very little, and when they are not, the pooled test can be badly wrong, especially with unequal group
sizes.

**Example 3 (the wrong analysis).** Suppose we forgot that the sleep data are paired and treated the two columns as
independent groups of 10. Then $\bar x_A = 0.75$, $s_A \approx 1.789$, $\bar x_B = 2.33$, $s_B \approx 2.002$.

*Step 1.* $s_A^2/10 + s_B^2/10 = 0.3201 + 0.4009 = 0.7210$, with square root $0.849$.

*Step 2.* $t = (2.33 - 0.75)/0.849 \approx 1.86$.

*Step 3.* The Welch degrees of freedom work out to $\nu \approx 17.8$, and the two-sided p-value is about $0.079$.

The pooled test gives the same $t$ here (with equal group sizes the two formulas for the standard error agree, see
exercise 11) on 18 degrees of freedom, and $p \approx 0.079$.

Check the lesson: the same numbers give $p = 0.003$ when analysed correctly and $p = 0.08$ when the pairing is
ignored. Ignoring the pairing throws away the fact that the patient-to-patient differences cancel, and the
between-patient spread swamps the drug effect. **The design of the study decides the test**, not the other way
round.

### Try it in Python

```python
import statistics as st
from math import sqrt

A = [0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0]
B = [1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4]
d = [b - a for a, b in zip(A, B)]
t_paired = st.mean(d) / (st.stdev(d) / sqrt(len(d)))
se = sqrt(st.variance(A) / 10 + st.variance(B) / 10)
t_welch = (st.mean(B) - st.mean(A)) / se
print(round(t_paired, 3), round(t_welch, 3))   # 4.062 and 1.861
```

To turn $t$ into a p-value without a table you need the t distribution's cdf; the library `scipy.stats` has it, or
you can simulate it as in [Chapter 6](06-Sampling-Distributions.md).

## 9.5 Tests and intervals as two views

*Level: advanced.*

In the sleep example, the 95 percent interval excluded 0 and the 5 percent test rejected $\mu_d = 0$. This is not a
coincidence. A confidence interval and a family of tests are the same object seen from two sides.

### The duality theorem

Let $\theta$ be a parameter. Suppose that for every possible value $\theta_0$ we have a test of
$H_0: \theta = \theta_0$ at level $\alpha$. Write $A(\theta_0)$ for its **acceptance region**: the set of datasets
for which this test does *not* reject.

**Theorem (inverting tests).**

1. The set $C(x) = \{\theta_0 : x \in A(\theta_0)\}$, all parameter values that the data do not reject, is a
   confidence set with confidence level at least $1 - \alpha$.
2. Conversely, if $C(X)$ is a $1 - \alpha$ confidence set, then the rule "reject $H_0: \theta = \theta_0$ when
   $\theta_0 \notin C(x)$" is a test of level $\alpha$.

*Proof.* The key is that the two events are the same event, by the definition of $C$:

$$
\theta_0 \in C(X) \iff X \in A(\theta_0).
$$

For part 1, suppose the true value is $\theta_0$. The test of $\theta_0$ has level $\alpha$, so
$P_{\theta_0}(X \in A(\theta_0)) \ge 1 - \alpha$, and therefore $P_{\theta_0}(\theta_0 \in C(X)) \ge 1 - \alpha$.
Since this holds whatever the true $\theta_0$ is, $C$ covers the truth with probability at least $1 - \alpha$.

For part 2, if $H_0: \theta = \theta_0$ is true, the chance of rejecting is
$P_{\theta_0}(\theta_0 \notin C(X)) \le \alpha$, because $C$ has coverage at least $1 - \alpha$. $\square$

**Example 4.** The one-sample t test at level $\alpha$ does not reject $\mu_0$ when
$|\bar x - \mu_0| / (s/\sqrt n) < t_{\alpha/2, n-1}$. Rearranged, that is

$$
\bar x - t_{\alpha/2,n-1}\frac{s}{\sqrt n} < \mu_0 < \bar x + t_{\alpha/2,n-1}\frac{s}{\sqrt n},
$$

the familiar t interval of [Chapter 8](08-Confidence-Intervals.md). The set of values not rejected *is* the
interval.

### What duality buys you

- **An interval says more than a test.** The test says only whether one value, $\mu_0$, is plausible. The
  interval lists *all* plausible values at once. "The drug adds between 0.7 and 2.5 hours" contains the test result
  (0 is not plausible) and also the size of the effect and its uncertainty. This is why the ASA statement and most
  journals now ask for intervals.
- **Significance versus importance becomes visible.** Picture four 95 percent intervals for the effect of a
  treatment where only effects above 1 unit matter in practice: $(0.1, 0.3)$ is significant but unimportant;
  $(2, 5)$ is significant and important; $(-0.2, 3)$ is not significant but cannot rule out an important effect (the
  study was too small); $(-0.1, 0.1)$ is not significant and does rule out any important effect. Two
  "non-significant" results can mean opposite things. Only the interval tells them apart.
- **Equivalence testing.** Sometimes the goal is to show that two treatments are practically the same (a cheaper
  generic drug against the brand). Failing to reject "no difference" does not show that. Instead, fix a margin
  $\Delta$ of differences too small to matter, and conclude equivalence if a $1 - 2\alpha$ confidence interval lies
  entirely inside $(-\Delta, \Delta)$. This is the "two one-sided tests" procedure, used by drug regulators.
- **Caution with approximations.** For proportions, the Wald interval and the score test are not exact duals of
  each other; the Wilson interval of [Chapter 8](08-Confidence-Intervals.md) is exactly the inversion of the score
  test, which is one reason it behaves better.

## 9.6 Multiple testing and p-hacking

### The problem of many tests

A test at level 0.05 has a 5 percent chance of a false alarm. Run 20 independent tests of true null hypotheses and
the chance of **at least one** false alarm is

$$
1 - 0.95^{20} \approx 0.64 .
$$

With 100 tests it is about 0.994. If you test 20 foods for a link with some illness, and none has any effect, you
will probably still find "a significant link" with one of them. Report only that one, and you have published a
false finding while every individual calculation was correct.

This is the **multiple comparisons problem**, and it appears everywhere: many outcomes measured in one trial, many
subgroups (men, women, over 60, under 60, ...), many time points, many genes ([Chapter 18](18-High-Dimensional-Statistics.md)
meets tests on 20 000 genes at once), many ways to analyse one dataset.

### The family-wise error rate and Bonferroni

Suppose we test $m$ null hypotheses $H_1, \dots, H_m$. The **family-wise error rate (FWER)** is the probability of
rejecting at least one true null hypothesis.

**Theorem (Bonferroni correction).** If each hypothesis is tested at level $\alpha/m$ (reject $H_i$ when
$p_i \le \alpha/m$), then FWER $\le \alpha$, whatever the dependence between the tests.

*Proof.* Let $I_0$ be the set of true null hypotheses, with $m_0 \le m$ members. A family-wise error is the union of
the events "$p_i \le \alpha/m$" for $i \in I_0$. The probability of a union is at most the sum of the probabilities
(the union bound, also called Boole's inequality), and each true-null p-value satisfies
$P(p_i \le \alpha/m) \le \alpha/m$ (9.2). So

$$
\text{FWER} = P\Big(\bigcup_{i \in I_0} \{p_i \le \alpha/m\}\Big) \le \sum_{i \in I_0} P(p_i \le \alpha/m)
\le m_0 \cdot \frac{\alpha}{m} \le \alpha . \qquad \square
$$

No independence was used, which is Bonferroni's great strength. Its weakness is power: with $m = 20\,000$ genes and
$\alpha = 0.05$, each gene must reach $p \le 2.5 \times 10^{-6}$, and real but modest effects are missed. The name
honours Carlo Emilio Bonferroni, who proved inequalities of this kind in the 1930s; its use for multiple tests was
popularised by Olive Jean Dunn around 1960.

A uniformly better method with the same guarantee is **Holm's step-down procedure** (Sture Holm, 1979): sort the
p-values $p_{(1)} \le \dots \le p_{(m)}$, compare $p_{(1)}$ with $\alpha/m$, $p_{(2)}$ with $\alpha/(m-1)$, and so on,
rejecting until the first failure. It rejects everything Bonferroni rejects and sometimes more.

### The false discovery rate

When we screen thousands of hypotheses, insisting on *no* false alarms at all is too strict. A biologist following
up 100 candidate genes can live with 5 of them being duds, as long as she knows the proportion is small. This leads to
a different target.

Let $R$ be the number of rejections ("discoveries") and $V$ the number of those that are false (true nulls
rejected). The **false discovery proportion** is $V/R$ (taken as 0 when $R = 0$), and the **false discovery rate
(FDR)** is its expected value, $E[V/R]$.

**The Benjamini-Hochberg (BH) procedure** (Yoav Benjamini and Yosef Hochberg, 1995) controls the FDR at level $q$:

1. Sort the p-values: $p_{(1)} \le p_{(2)} \le \dots \le p_{(m)}$.
2. Find the largest $k$ with $p_{(k)} \le \frac{k}{m} q$.
3. Reject the hypotheses with the $k$ smallest p-values (all of them, even any earlier ones that were above their own
   line).

**Theorem (Benjamini and Hochberg, 1995).** If the p-values of the true null hypotheses are independent of each other
and of the false ones, the BH procedure has $\text{FDR} = \frac{m_0}{m}q \le q$.

*Idea of the proof.* *Level: advanced.* Write $V = \sum_{i \in I_0} \mathbf{1}[H_i \text{ rejected}]$, so
$E[V/R] = \sum_{i \in I_0} E\big[\mathbf{1}[H_i \text{ rejected}]/R\big]$. For one true null $i$, split by the
number of rejections $R = k$: $H_i$ is rejected with $R = k$ exactly when $p_i \le kq/m$ and the other $m - 1$
p-values produce $k - 1$ further rejections. Fixing the other p-values, that second event does not depend on $p_i$
(once $p_i$ is small enough to be rejected), so by independence and uniformity of $p_i$ each term contributes
$\frac{1}{k}\cdot\frac{kq}{m}$ times the probability of the corresponding event for the others, and these
probabilities add up to 1 over $k$. Each true null therefore contributes exactly $q/m$, and there are $m_0$ of them.
The full argument is a page; see Benjamini and Hochberg (1995). Benjamini and Daniel Yekutieli (2001) showed BH still
controls the FDR under a common kind of positive dependence, and that dividing $q$ by
$1 + \frac12 + \dots + \frac1m$ makes it safe under any dependence.

**Example 5.** Twelve hypotheses (made-up p-values) are tested with $q = 0.05$. Sorted, with BH lines $\frac{k}{12}
\times 0.05$:

| $k$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $p_{(k)}$ | 0.0004 | 0.003 | 0.009 | 0.011 | 0.019 | 0.04 | 0.07 | 0.15 | 0.33 | 0.62 | 0.71 | 0.94 |
| line $0.05k/12$ | 0.0042 | 0.0083 | 0.0125 | 0.0167 | 0.0208 | 0.025 | 0.0292 | 0.0333 | 0.0375 | 0.0417 | 0.0458 | 0.05 |
| below line? | yes | yes | yes | yes | yes | no | no | no | no | no | no | no |

The largest $k$ with $p_{(k)}$ below its line is $k = 5$, so BH rejects 5 hypotheses. Bonferroni (threshold
$0.05/12 \approx 0.0042$) rejects only 2. Unadjusted testing at 0.05 would reject 6, including the one at 0.04.

Which correction to use depends on the cost of a false alarm. For a confirmatory drug trial with a few pre-named
outcomes, control the FWER. For a screening study whose findings will be checked again, control the FDR.

### p-hacking and the garden of forking paths

Multiple testing is not only about the tests a researcher reports. It is about the tests they *could* have run.

**p-hacking** is the practice, often innocent, of trying analyses until one gives $p < 0.05$: measuring several
outcomes and reporting the one that worked; adding subjects a few at a time and stopping as soon as $p$ dips below
0.05; dropping "outliers" after seeing their effect; trying the analysis with and without a control variable. Each
choice looks reasonable alone. Together they multiply the chances of a false positive.

In 2011, Joseph Simmons, Leif Nelson and Uri Simonsohn published "False-positive psychology" in *Psychological
Science*. By simulation they showed that combining a few such common freedoms (two outcome measures, optional extra
subjects, an optional covariate, dropping a condition) could push the real false-positive rate of a nominal 5 percent
test far above 50 percent. They also ran a real (deliberately absurd) experiment that "showed" listening to a
particular song made people younger, using only legal-looking flexibility, to make the point vivid.

The stopping-rule trap is easy to understand from 9.2. Under $H_0$ the running p-value wanders randomly as data
arrive; checking it after every new subject gives it many chances to dip below 0.05, and stopping at the first dip
makes the dip certain to be reported. In fact, by the law of the iterated logarithm, if you check after every
observation and are willing to wait forever, a true null will eventually be rejected with probability 1.

Andrew Gelman and Eric Loken coined the phrase **garden of forking paths** for the subtler version: a researcher who
runs only one analysis, but would have chosen a different one had the data looked different, faces the same
multiplicity, even without any conscious fishing.

The remedies are procedural more than mathematical, and they appear again in [Chapter 20](20-Where-Statistics-Goes.md):

- **Preregistration**: write down the hypotheses, outcomes, sample size and analysis before seeing the data.
- **Report everything**: all outcomes, all analyses tried, all conditions (ASA principle 4).
- **Correct for the tests you do run** (Bonferroni, Holm, BH).
- **Separate exploration from confirmation**: an interesting pattern found while exploring is a hypothesis for the
  next study, not a conclusion of this one.
- **Replicate.**

## Check yourself

??? question "1. A study reports $p = 0.02$ for the effect of a fertiliser on yield. Which of these is correct? (a) There is a 2 percent chance the fertiliser has no effect. (b) If the fertiliser had no effect, results at least this extreme would occur about 2 percent of the time. (c) The fertiliser increases yield by a large amount."

    Only (b). The p-value is a probability of data (at least this extreme) computed assuming the null is true; it is
    not the probability that the null is true, which (a) claims, and it says nothing about the size of the effect,
    which (c) claims. A large study can give $p = 0.02$ for a tiny effect.

??? question "2. With $\sigma = 10$ known, 25 measurements have mean 104. Test $H_0: \mu = 100$ against $\mu \ne 100$."

    The standard error is $10/\sqrt{25} = 2$, so $z = (104 - 100)/2 = 2$. The two-sided p-value is
    $2(1 - \Phi(2)) \approx 0.0455$. At $\alpha = 0.05$ we reject (narrowly). The 95 percent interval
    $104 \pm 1.96 \times 2 = (100.08, 107.92)$ just excludes 100, as duality requires.

??? question "3. A smoke alarm is a test of $H_0$: there is no fire. Describe its type I and type II errors. A manufacturer makes it more sensitive. What happens to $\alpha$ and $\beta$?"

    Type I: the alarm sounds with no fire (burnt toast). Type II: there is a fire and it stays silent. More sensitivity
    means it sounds more easily, so $\alpha$ (false alarms) goes up and $\beta$ (missed fires) goes down. For the
    same sensor you cannot lower both; a better sensor (more information) is the only way.

??? question "4. In exercise 2's setting ($\sigma = 10$, $n = 25$, two-sided, $\alpha = 0.05$), what is the power if the true mean is 105?"

    The effect is $\delta = 5$, which is $5/2 = 2.5$ standard errors. Power
    $= \Phi(2.5 - 1.96) + \Phi(-2.5 - 1.96) = \Phi(0.54) + \Phi(-4.46) \approx 0.7054 + 0.0000 \approx 0.705$.
    So there is about a 30 percent chance of missing a true effect of 5.

??? question "5. How many measurements are needed for 90 percent power to detect an effect of 5 when $\sigma = 10$, with a two-sided test at 5 percent?"

    Use $n = ((z_{0.025} + z_{0.10})\sigma/\delta)^2$ with $z_{0.025} = 1.960$ and $z_{0.10} = 1.282$:
    $n = (3.242 \times 10/5)^2 = 6.484^2 \approx 42.03$. Round up: 43 measurements.

??? question "6. Six made-up measurements are 12.1, 11.4, 12.8, 12.5, 13.2, 12.6. Test $H_0: \mu = 12$ with a two-sided t test at 5 percent, and give the 95 percent interval."

    The mean is $74.6/6 \approx 12.433$; the deviations from it squared sum to about 1.933, so
    $s = \sqrt{1.933/5} \approx 0.622$. The standard error is $0.622/\sqrt 6 \approx 0.254$ and
    $t = 0.433/0.254 \approx 1.71$ on 5 degrees of freedom. Since $t_{0.025,5} = 2.571$ and $1.71 < 2.571$, we do not
    reject; the p-value is about 0.15. The interval $12.433 \pm 2.571 \times 0.254$ is about $(11.78, 13.09)$, which
    contains 12. With only six measurements the data are consistent with a mean anywhere from about 11.8 to 13.1.

??? question "7. A lab runs 1000 independent experiments, every one on a treatment that in fact does nothing, and tests each at $\alpha = 0.05$. About how many 'significant' results appear? If the journal publishes only those, what fraction of its published findings in this area are false?"

    Under each true null the p-value is uniform, so each test is significant with probability 0.05, and about
    $1000 \times 0.05 = 50$ are significant. All 50 published findings are false: 100 percent. Significance at 5
    percent says nothing by itself about the fraction of published results that are true; that depends on how many of
    the tested hypotheses were true to begin with, and on the power.

??? question "8. A 95 percent confidence interval for a mean is $(1.2, 3.8)$. Without other information, what do two-sided tests at 5 percent conclude for $H_0: \mu = 1$ and for $H_0: \mu = 2$?"

    By duality, the interval is the set of values not rejected at 5 percent. Since 1 is outside it, $H_0: \mu = 1$
    is rejected; since 2 is inside it, $H_0: \mu = 2$ is not rejected.

??? question "9. A trial measures 8 outcomes. (a) If all nulls are true and the tests are independent, what is the chance of at least one $p \le 0.05$? (b) What is the Bonferroni threshold for a family-wise rate of 0.05?"

    (a) $1 - 0.95^8 \approx 0.337$, about one chance in three. (b) $0.05/8 = 0.00625$: reject an outcome's null only
    if its p-value is at most 0.00625.

??? question "10. Apply Bonferroni and Benjamini-Hochberg (both at 0.05) to the five p-values 0.001, 0.012, 0.014, 0.030, 0.20."

    Bonferroni: threshold $0.05/5 = 0.01$, so only 0.001 is rejected. BH: the lines are $0.01, 0.02, 0.03, 0.04,
    0.05$ for $k = 1, \dots, 5$. Compare: $0.001 \le 0.01$, $0.012 \le 0.02$, $0.014 \le 0.03$, $0.030 \le 0.04$, but
    $0.20 > 0.05$. The largest $k$ below its line is 4, so BH rejects the four smallest. Holm, for comparison, checks
    $0.001 \le 0.01$ (reject), then $0.012 \le 0.05/4 = 0.0125$ (reject), then $0.014 \le 0.05/3 \approx 0.0167$ (reject), then
    $0.030 > 0.05/2 = 0.025$ (stop). Holm rejects three.

??? question "11. Show that when $n_1 = n_2 = n$, the pooled and Welch t statistics are equal."

    With equal sizes, $s_p^2 = \frac{(n-1)(s_1^2 + s_2^2)}{2n - 2} = \frac{s_1^2 + s_2^2}{2}$, so the pooled standard
    error is $s_p\sqrt{2/n} = \sqrt{\frac{s_1^2 + s_2^2}{2}\cdot\frac{2}{n}} = \sqrt{\frac{s_1^2}{n} + \frac{s_2^2}{n}}$,
    which is Welch's. The statistics are equal; only the degrees of freedom used for the p-value differ ($2n - 2$
    against Welch's $\nu$, which is at most $2n - 2$).

??? question "12. (Harder.) For a one-sided z test of $H_0: \mu = \mu_0$ against $\mu > \mu_0$, the p-value is $1 - \Phi(Z)$ with $Z \sim N(\theta, 1)$, where $\theta = \sqrt n(\mu - \mu_0)/\sigma$. Find $P(p \le u)$ as a function of $u$ and $\theta$, check that it is $u$ when $\theta = 0$, and evaluate the power at $u = 0.05$ when $\theta = 2$."

    $p \le u$ means $1 - \Phi(Z) \le u$, that is $Z \ge z_u$, where $z_u = \Phi^{-1}(1 - u)$. Since $Z - \theta$ is
    standard normal, $P(p \le u) = P(Z - \theta \ge z_u - \theta) = 1 - \Phi(z_u - \theta)$. When $\theta = 0$ this
    is $1 - \Phi(z_u) = u$: uniform, as proved in 9.2. With $u = 0.05$, $z_{0.05} = 1.645$ and $\theta = 2$, the power
    is $1 - \Phi(-0.355) = \Phi(0.355) \approx 0.639$. Under the alternative the p-values pile up near 0 instead of
    being spread evenly.

## What you learned

- A test asks how surprising the data would be if the null hypothesis were true; evidence against $H_0$ is not
  proof of $H_1$, and failing to reject is not proof of $H_0$.
- The p-value is the probability, under $H_0$, of a result at least as extreme as the one seen; for a continuous
  statistic it is uniform under $H_0$, so the rule "reject when $p \le \alpha$" has false-alarm rate $\alpha$.
- The ASA's 2016 statement: p-values measure incompatibility with a model, not the probability of a hypothesis or
  the size of an effect; decisions should not rest on a threshold alone.
- Type I error (false alarm, $\alpha$), type II error (miss, $\beta$), power $1 - \beta$; power depends on the
  effect in standard errors, $\delta\sqrt n/\sigma$, and $n = ((z_{\alpha/2} + z_\beta)\sigma/\delta)^2$ plans a
  sample size.
- t tests: one-sample, paired (a one-sample test on differences), pooled and Welch two-sample; the design decides
  the test, as the sleep data showed ($p = 0.003$ paired against $0.08$ unpaired).
- Tests and confidence intervals are duals: the interval is the set of null values the test does not reject, and
  it shows the size of the effect too.
- Many tests produce false alarms: Bonferroni controls the family-wise error under any dependence, Benjamini-Hochberg
  controls the false discovery rate, and p-hacking is multiple testing in disguise.

**Next:** [Chapter 10](10-Categorical-Data.md), tests for counts in categories: chi-square tests, Mendel's peas,
Fisher's exact test, and odds ratios.

## Further reading

- Student (W. S. Gosset), "The probable error of a mean", *Biometrika* 6, 1908.
- R. A. Fisher, *Statistical Methods for Research Workers*, 1925 (many later editions).
- J. Neyman and E. S. Pearson, "On the problem of the most efficient tests of statistical hypotheses",
  *Philosophical Transactions of the Royal Society A* 231, 1933.
- B. L. Welch, "The generalization of 'Student's' problem when several different population variances are
  involved", *Biometrika* 34, 1947.
- Y. Benjamini and Y. Hochberg, "Controlling the false discovery rate: a practical and powerful approach to multiple
  testing", *Journal of the Royal Statistical Society B* 57, 1995.
- Y. Benjamini and D. Yekutieli, "The control of the false discovery rate in multiple testing under dependency",
  *Annals of Statistics* 29, 2001.
- S. Holm, "A simple sequentially rejective multiple test procedure", *Scandinavian Journal of Statistics* 6, 1979.
- R. L. Wasserstein and N. A. Lazar, "The ASA's statement on p-values: context, process, and purpose", *The American
  Statistician* 70, 2016.
- J. P. Simmons, L. D. Nelson and U. Simonsohn, "False-positive psychology", *Psychological Science* 22, 2011.
- J. M. Hoenig and D. M. Heisey, "The abuse of power: the pervasive fallacy of power calculations for data
  analysis", *The American Statistician* 55, 2001.
- A. Gelman and J. Carlin, "Beyond power calculations: assessing type S (sign) and type M (magnitude) errors",
  *Perspectives on Psychological Science* 9, 2014.
- E. L. Lehmann and J. P. Romano, *Testing Statistical Hypotheses*, 3rd ed., 2005 (the full theory).
- G. Casella and R. L. Berger, *Statistical Inference*, 2nd ed., 2002 (chapters 8 and 9: tests and their inversion
  into intervals).
- On this site: the Topics lessons on [hypothesis tests](../../topics/statistics/level-8/03-hypothesis-tests.md) and
  [margin of error and confidence intervals](../../topics/statistics/level-8/02-confidence-intervals.md); the
  Probability book on [the normal distribution](../probability/10-The-Normal-Distribution.md) and
  [Bayes' theorem](../probability/04-Bayes-Theorem.md); this book's [index](index.md).
