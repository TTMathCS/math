# 13. Likelihood theory

*In Part III we used many recipes: a $t$ interval here, a chi-square test there, maximum likelihood in Chapter 7 as a
good idea that seemed to work. This chapter asks the question behind all of them: given a model with an unknown
parameter, how much can a sample possibly tell us about it, and what is the best way to extract it? The answer is a
small, beautiful theory built on one function, the likelihood. You will measure the information in a sample, prove
that no unbiased estimator can beat a certain variance (the Cramér-Rao bound), see why maximum likelihood estimates
are approximately normal and as good as possible in large samples, build tests from likelihood ratios, find which
summaries of the data lose nothing (sufficiency), and prove the Neyman-Pearson lemma, which says exactly what the
most powerful test is.*

!!! abstract "In this chapter"
    **You will learn:**

    - what the likelihood and log-likelihood are, and why they are functions of the parameter, not of the data
    - the score and Fisher information, and the two identities that make them work
    - the Cramér-Rao lower bound, with a full proof, and when it is reached
    - why maximum likelihood estimates are approximately normal, with variance one over the information
    - likelihood ratio tests and Wilks' theorem, and how they compare with Wald and score tests
    - sufficiency, the factorisation theorem (proved for discrete data) and the Rao-Blackwell improvement
    - the Neyman-Pearson lemma, proved, and what "most powerful test" means

    **You need:** [Chapter 7](07-Estimation.md) (estimators, bias, mean squared error, maximum likelihood),
    [Chapter 9](09-Hypothesis-Tests.md) (tests, size, power, p-values) and [Chapter 8](08-Confidence-Intervals.md).
    From the Probability book: [expectation and variance](../probability/06-Expectation-and-Variance.md),
    [the normal distribution](../probability/10-The-Normal-Distribution.md) and
    [the central limit theorem](../probability/12-The-Central-Limit-Theorem.md). Calculus is used throughout:
    derivatives, Taylor's formula to second order, and differentiating under an integral sign.

    **Levels:** 13.1 is intermediate; 13.2 to 13.4 are advanced; 13.5 to 13.7 are advanced, with expert remarks at
    the ends of 13.4 and 13.5.

## 13.1 Likelihood and log-likelihood

### The question

You toss a coin 10 times and see 7 heads. What does that say about $p$, the chance of heads? Not "what is $p$?", which
no finite sample can settle, but "which values of $p$ fit these data well, and which badly?"

For a fixed $p$, the probability of exactly this result is the binomial probability

$$
P(7 \text{ heads} ; p) = \binom{10}{7} p^7 (1-p)^3 .
$$

Read this formula two ways. With $p$ fixed and the number of heads varying, it is a probability distribution: its
values over $0, 1, \dots, 10$ heads add up to 1. With the data fixed (7 heads, now in the past, not random any more) and
$p$ varying, it is a function of $p$ that says how probable the observed data would have been under each candidate
value. That second reading is the **likelihood**.

**Definition.** Let $X = (X_1, \dots, X_n)$ have a joint probability mass function or density $f(x; \theta)$ that
depends on a parameter $\theta$ in a set $\Theta$ (the **parameter space**). Having observed $X = x$, the
**likelihood function** is

$$
L(\theta) = L(\theta; x) = f(x; \theta), \qquad \theta \in \Theta ,
$$

and the **log-likelihood** is $\ell(\theta) = \log L(\theta)$ (natural logarithm). When $X_1, \dots, X_n$ are
independent with common density $f(x; \theta)$, the joint density is a product, so

$$
L(\theta) = \prod_{i=1}^n f(x_i; \theta), \qquad \ell(\theta) = \sum_{i=1}^n \log f(x_i; \theta) .
$$

The log turns a product of many small numbers into a sum, which is easier to differentiate, behaves well on a
computer, and, as we will see, lets the law of large numbers and the central limit theorem act on it.

Three warnings, which save a lot of confusion later.

1. **The likelihood is not a probability distribution for $\theta$.** For the coin, $\int_0^1 \binom{10}{7} p^7 (1-p)^3
   \, dp = 1/11$, not 1. Only ratios of likelihoods have meaning: $L(0.7)/L(0.5)$ says how much better $p = 0.7$
   explains the data than $p = 0.5$. Turning a likelihood into a distribution for $\theta$ needs a prior; that is
   [Chapter 14](14-Bayesian-Statistics.md).
2. **Constants do not matter.** The factor $\binom{10}{7}$ does not depend on $p$, so it cancels in every ratio and
   disappears when we differentiate $\ell$. We drop such factors freely.
3. **Likelihoods from different data sets cannot be compared.** $L(\theta; x)$ and $L(\theta; y)$ for different
   observations are different functions; only comparisons across $\theta$ for the same data mean anything.

### The coin

Dropping the constant, $\ell(p) = 7 \log p + 3 \log(1-p)$. Its derivative is

$$
\ell'(p) = \frac{7}{p} - \frac{3}{1-p},
$$

which is zero when $7(1-p) = 3p$, that is $p = 0.7$. The second derivative $-7/p^2 - 3/(1-p)^2$ is negative, so this
is a maximum: the **maximum likelihood estimate** (MLE) is $\hat p = 0.7$, the proportion of heads, as you would guess.

The picture below shows the **relative log-likelihood** $\ell(p) - \ell(\hat p)$, which is 0 at the top and negative
elsewhere. Values of $p$ where the curve is close to 0 explain the data almost as well as the best value; values where
it has dropped a long way explain them badly.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Relative log-likelihood for 7 heads in 10 tosses, highest at p equals 0.7; a horizontal line 1.92 below the top cuts the curve at about 0.39 and 0.92, the 95 percent likelihood interval">
  <line x1="50" y1="190" x2="390" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50" y1="30" x2="50" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50.0" y1="190" x2="50.0" y2="195" stroke="currentColor"/>
  <text x="50.0" y="207" text-anchor="middle" font-size="11" fill="currentColor">0.2</text>
  <line x1="135.0" y1="190" x2="135.0" y2="195" stroke="currentColor"/>
  <text x="135.0" y="207" text-anchor="middle" font-size="11" fill="currentColor">0.4</text>
  <line x1="220.0" y1="190" x2="220.0" y2="195" stroke="currentColor"/>
  <text x="220.0" y="207" text-anchor="middle" font-size="11" fill="currentColor">0.6</text>
  <line x1="305.0" y1="190" x2="305.0" y2="195" stroke="currentColor"/>
  <text x="305.0" y="207" text-anchor="middle" font-size="11" fill="currentColor">0.8</text>
  <line x1="390.0" y1="190" x2="390.0" y2="195" stroke="currentColor"/>
  <text x="390.0" y="207" text-anchor="middle" font-size="11" fill="currentColor">1.0</text>
  <text x="44" y="34.0" text-anchor="end" font-size="11" fill="currentColor">0</text>
  <text x="44" y="87.3" text-anchor="end" font-size="11" fill="currentColor">-2</text>
  <text x="44" y="140.7" text-anchor="end" font-size="11" fill="currentColor">-4</text>
  <text x="44" y="194.0" text-anchor="end" font-size="11" fill="currentColor">-6</text>
  <line x1="50" y1="81.2" x2="390" y2="81.2" stroke="#eea66f" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="132.2" y1="81.2" x2="132.2" y2="190" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="354.1" y1="81.2" x2="354.1" y2="190" stroke="#eea66f" stroke-width="1.5"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="50.0,185.4 52.1,181.3 54.2,177.3 56.4,173.4 58.5,169.6 60.6,165.9 62.8,162.4 64.9,158.9 67.0,155.5 69.1,152.1 71.3,148.9 73.4,145.7 75.5,142.6 77.6,139.6 79.8,136.7 81.9,133.8 84.0,131.0 86.1,128.3 88.3,125.6 90.4,122.9 92.5,120.4 94.6,117.9 96.8,115.4 98.9,113.0 101.0,110.7 103.1,108.3 105.3,106.1 107.4,103.9 109.5,101.7 111.6,99.6 113.8,97.5 115.9,95.5 118.0,93.5 120.1,91.6 122.3,89.7 124.4,87.8 126.5,86.0 128.6,84.2 130.8,82.4 132.9,80.7 135.0,79.0 137.1,77.4 139.3,75.7 141.4,74.2 143.5,72.6 145.6,71.1 147.8,69.6 149.9,68.2 152.0,66.7 154.1,65.3 156.3,64.0 158.4,62.7 160.5,61.3 162.6,60.1 164.8,58.8 166.9,57.6 169.0,56.4 171.1,55.3 173.3,54.1 175.4,53.0 177.5,51.9 179.6,50.9 181.8,49.9 183.9,48.9 186.0,47.9 188.1,46.9 190.3,46.0 192.4,45.1 194.5,44.2 196.6,43.4 198.8,42.6 200.9,41.8 203.0,41.0 205.1,40.3 207.3,39.5 209.4,38.9 211.5,38.2 213.6,37.5 215.8,36.9 217.9,36.3 220.0,35.8 222.1,35.2 224.3,34.7 226.4,34.2 228.5,33.7 230.6,33.3 232.8,32.9 234.9,32.5 237.0,32.1 239.1,31.8 241.3,31.5 243.4,31.2 245.5,31.0 247.6,30.7 249.8,30.6 251.9,30.4 254.0,30.2 256.1,30.1 258.3,30.1 260.4,30.0 262.5,30.0 264.6,30.0 266.8,30.1 268.9,30.1 271.0,30.3 273.1,30.4 275.3,30.6 277.4,30.8 279.5,31.1 281.6,31.4 283.8,31.7 285.9,32.1 288.0,32.5 290.1,33.0 292.3,33.5 294.4,34.0 296.5,34.6 298.6,35.3 300.8,36.0 302.9,36.7 305.0,37.5 307.1,38.4 309.3,39.3 311.4,40.3 313.5,41.3 315.6,42.4 317.8,43.6 319.9,44.9 322.0,46.3 324.1,47.7 326.3,49.2 328.4,50.8 330.5,52.5 332.6,54.4 334.8,56.3 336.9,58.4 339.0,60.6 341.1,62.9 343.3,65.4 345.4,68.1 347.5,71.0 349.6,74.0 351.8,77.3 353.9,80.9 356.0,84.7 358.1,88.9 360.3,93.4 362.4,98.3 364.5,103.7 366.6,109.7 368.8,116.3 370.9,123.8 373.0,132.2 375.1,141.9 377.3,153.3 379.4,166.9 381.5,183.8"/>
  <line x1="262.5" y1="30" x2="262.5" y2="190" stroke="#7ccf9a" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="267.5" y="44" font-size="11" fill="currentColor">MLE 0.7</text>
  <text x="105.0" y="75.2" font-size="11" fill="currentColor">−1.92</text>
  <text x="220" y="225" text-anchor="middle" font-size="11" fill="currentColor">p (chance of heads)</text>
</svg>
</div>

The dashed line is drawn 1.92 below the top. The values of $p$ whose relative log-likelihood is above it, roughly
$0.39 \le p \le 0.92$, form a **likelihood interval**. In 13.5 you will see why 1.92 (half of 3.84, the 95% point of a
chi-square with one degree of freedom) makes this an approximate 95% confidence interval. Notice already that it is
not symmetric about 0.7: the curve falls steeply towards $p = 1$, because a coin with $p$ near 1 would rarely give 3
tails.

### Counts: a Poisson example

A made-up example: a technician counts flaws on 8 sheets of glass and finds

$$
2,\ 4,\ 3,\ 0,\ 5,\ 2,\ 3,\ 1 .
$$

Model the counts as independent Poisson with mean $\lambda$, so $f(x; \lambda) = e^{-\lambda} \lambda^x / x!$. With
$n = 8$ and total $s = \sum x_i = 20$,

$$
\ell(\lambda) = \sum_{i=1}^n \left( x_i \log \lambda - \lambda - \log x_i! \right) = s \log \lambda - n \lambda + \text{const}.
$$

Setting $\ell'(\lambda) = s/\lambda - n = 0$ gives $\hat\lambda = s/n = 2.5$. Again the MLE is the obvious estimate, the
sample mean. **Check:** $\ell''(\lambda) = -s/\lambda^2 < 0$, a maximum.

Notice something that will matter in 13.6: the log-likelihood depends on the data only through $s$ and $n$. Two
technicians with different counts but the same total would have the same likelihood function, and so would draw the
same conclusions about $\lambda$.

### The score

**Definition.** For a one-dimensional parameter, the **score** is the derivative of the log-likelihood,

$$
S(\theta) = \ell'(\theta) = \frac{\partial}{\partial \theta} \log f(X; \theta).
$$

When we write the score with the random $X$ in it, it is a random variable for each $\theta$. The MLE usually solves
the **likelihood equation** $S(\hat\theta) = 0$. "Usually" hides real conditions: the maximum must be inside $\Theta$,
not on its edge, and $\ell$ must be differentiable. The German tank problem of [Chapter 7](07-Estimation.md) is the
standard case where it fails: the likelihood of a uniform distribution on $\{1, \dots, N\}$ is $N^{-n}$ for $N$ at least
the largest serial number seen and 0 below it, so the maximum is at the edge and no derivative is zero.

For a vector parameter $\theta = (\theta_1, \dots, \theta_k)$ the score is the gradient, the vector of partial
derivatives $\partial \ell / \partial \theta_j$, and the likelihood equation is a system of $k$ equations.

### A short history

The word "likelihood" and the method of maximum likelihood are Ronald Fisher's. He used the method in a 1912 paper, and set out the theory, together with the words consistency, efficiency and sufficiency,
in "On the mathematical foundations of theoretical statistics" (*Philosophical Transactions of the Royal Society A*,
1922). Fisher insisted that likelihood was not probability, and that the likelihood function itself, not only its
maximum, carried the evidence. Earlier writers, including Daniel Bernoulli and Gauss, had used ideas close to maximum
likelihood in special cases; Fisher made it a general method with a theory.

## 13.2 Fisher information

*Level: advanced.*

### How sharp is the peak?

Compare two coins. One gave 7 heads in 10 tosses, the other 70 heads in 100. Both have $\hat p = 0.7$, but the second
log-likelihood, $70 \log p + 30 \log(1-p)$, is exactly ten times the first, so it falls ten times as fast away from the
peak. A sharp peak means the data rule out values far from $\hat p$; a flat one means many values fit almost equally
well. The natural measure of sharpness is the curvature at the top, $-\ell''(\hat\theta)$, called the
**observed information**. For 7 heads in 10, $-\ell''(0.7) = 7/0.49 + 3/0.09 = 47.6$; for 70 in 100 it is 476.

Fisher's idea was to take the expected value of this curvature before the data are seen, at the true parameter. That
gives a number that depends on the model and the sample size, not on the luck of one sample.

### Two identities

From now on we assume **regularity conditions**: the set of $x$ where $f(x; \theta) > 0$ does not depend on $\theta$,
$f$ is twice differentiable in $\theta$, and we may differentiate $\int f(x; \theta)\,dx$ under the integral sign
(for discrete data, read sums for integrals). These hold for the binomial, Poisson, normal, exponential and most models
you will meet; they fail for the uniform on $[0, \theta]$, whose support moves with $\theta$.

**Lemma 1 (the score has mean zero).** For one observation with density $f(x; \theta)$,
$E_\theta[S(\theta)] = 0$, where $E_\theta$ means the expectation when $\theta$ is the true value.

*Proof.* Since $\frac{\partial}{\partial\theta} \log f = \frac{1}{f} \frac{\partial f}{\partial \theta}$,

$$
E_\theta\!\left[\frac{\partial}{\partial \theta} \log f(X;\theta)\right] = \int \frac{1}{f}\frac{\partial f}{\partial\theta} \, f \, dx = \int \frac{\partial f}{\partial \theta}\, dx = \frac{\partial}{\partial \theta} \int f(x;\theta)\,dx = \frac{\partial}{\partial\theta} 1 = 0 . \qquad \blacksquare
$$

In words: at the true parameter, the log-likelihood is on average flat. Sometimes the data push the estimate up,
sometimes down, with no systematic direction.

**Definition.** The **Fisher information** in one observation is the variance of the score,

$$
I(\theta) = \operatorname{Var}_\theta\big(S(\theta)\big) = E_\theta\!\left[\left(\frac{\partial}{\partial\theta}\log f(X;\theta)\right)^{2}\right].
$$

**Lemma 2 (the information identity).** Under the regularity conditions,

$$
I(\theta) = -E_\theta\!\left[\frac{\partial^2}{\partial \theta^2} \log f(X; \theta)\right].
$$

*Proof.* Lemma 1 says $\int \frac{\partial \log f}{\partial \theta} f \, dx = 0$ for every $\theta$. Differentiate this
identity in $\theta$, using the product rule inside the integral:

$$
\int \frac{\partial^2 \log f}{\partial \theta^2} \, f \, dx + \int \frac{\partial \log f}{\partial \theta} \, \frac{\partial f}{\partial \theta} \, dx = 0 .
$$

In the second integral write $\frac{\partial f}{\partial\theta} = \frac{\partial \log f}{\partial \theta} f$. It
becomes $E_\theta[(\partial \log f / \partial\theta)^2] = I(\theta)$, and the first integral is
$E_\theta[\partial^2 \log f / \partial\theta^2]$. So $E[\ell''] + I = 0$. $\blacksquare$

So the information is both "how much the score wobbles" and "how curved the log-likelihood is on average". The two
views agree, which is what makes the theory click.

**Independent observations add information.** If $X_1, \dots, X_n$ are independent with the same density, the score of
the sample is a sum of $n$ independent scores, each with mean 0 and variance $I(\theta)$, so the sample's information is

$$
I_n(\theta) = n \, I(\theta).
$$

Ten times the data, ten times the information: exactly the coin comparison above.

### Worked examples

**Bernoulli.** $\log f(x; p) = x \log p + (1-x)\log(1-p)$ for $x \in \{0, 1\}$. Then
$\partial^2 \log f / \partial p^2 = -x/p^2 - (1-x)/(1-p)^2$, and taking expectations with $E[X] = p$:

$$
I(p) = \frac{p}{p^2} + \frac{1-p}{(1-p)^2} = \frac{1}{p} + \frac{1}{1-p} = \frac{1}{p(1-p)} .
$$

Information is smallest at $p = 1/2$ (where $I = 4$) and grows without bound near 0 and 1. A coin that almost always
lands heads tells you a lot about its $p$ from a few tosses; a fair-looking coin is the hardest case. **Check** against
the observed information above: $10 \, I(0.7) = 10/0.21 = 47.6$.

**Poisson.** $\log f = x \log\lambda - \lambda - \log x!$, so $\partial^2 / \partial\lambda^2 = -x/\lambda^2$, and
$I(\lambda) = E[X]/\lambda^2 = 1/\lambda$.

**Normal mean, known variance.** $\log f = -(x-\mu)^2/(2\sigma^2) + \text{const}$, so the second derivative in $\mu$ is
$-1/\sigma^2$ and $I(\mu) = 1/\sigma^2$. Smaller noise, more information, as you would hope.

**Exponential with rate $\lambda$.** $\log f = \log\lambda - \lambda x$, second derivative $-1/\lambda^2$, so
$I(\lambda) = 1/\lambda^2$.

### Changing the parameter

If you describe the same model by a different parameter $\eta = g(\theta)$, with $g$ smooth and increasing, the chain
rule gives $\partial \ell / \partial\theta = (\partial\ell/\partial\eta)\, g'(\theta)$. Squaring and taking
expectations,

$$
I_\theta(\theta) = I_\eta(\eta)\, g'(\theta)^2 .
$$

Information is not a property of the experiment alone; it depends on the scale in which you measure the parameter. This
will matter for choosing priors in [Chapter 14](14-Bayesian-Statistics.md) (Jeffreys' rule).

### Several parameters

For $\theta \in \mathbb{R}^k$ the **Fisher information matrix** is the $k \times k$ matrix with entries

$$
I_{jk}(\theta) = E_\theta\!\left[\frac{\partial \log f}{\partial \theta_j}\frac{\partial \log f}{\partial \theta_k}\right] = -E_\theta\!\left[\frac{\partial^2 \log f}{\partial \theta_j \partial \theta_k}\right],
$$

the covariance matrix of the score vector; the same two lemmas hold with the same proofs. For the normal with both
$\mu$ and $\sigma^2$ unknown it is the diagonal matrix with entries $1/\sigma^2$ and $1/(2\sigma^4)$. The zero
off-diagonal entries say that, to first order, learning about the mean and learning about the spread do not interfere.

## 13.3 The Cramér-Rao bound

*Level: advanced.*

### The question

In [Chapter 7](07-Estimation.md) we compared estimators by their mean squared error. Among unbiased estimators, the
error is the variance. Could some clever unbiased estimator of $p$ beat the sample proportion, whose variance is
$p(1-p)/n$? The Cramér-Rao bound says no, and it says so for every regular model at once.

### The theorem

**Theorem (Cramér-Rao lower bound).** Let $X = (X_1, \dots, X_n)$ have joint density $f_n(x;\theta)$ satisfying the
regularity conditions, with information $I_n(\theta)$. Let $T = T(X)$ be any statistic with finite variance and
$E_\theta[T] = \psi(\theta)$, where we may differentiate under the integral sign in $\int T f_n \, dx$. Then

$$
\operatorname{Var}_\theta(T) \ge \frac{\psi'(\theta)^2}{I_n(\theta)} .
$$

In particular, if $T$ is unbiased for $\theta$ itself ($\psi(\theta) = \theta$) and the observations are independent
and identically distributed, then $\operatorname{Var}_\theta(T) \ge 1/(n I(\theta))$.

*Proof.* Let $S = \partial \log f_n(X;\theta)/\partial\theta$ be the score of the whole sample. By Lemma 1, $E[S] = 0$,
and $\operatorname{Var}(S) = I_n(\theta)$. Differentiate $\psi(\theta) = \int T(x) f_n(x;\theta) \, dx$:

$$
\psi'(\theta) = \int T(x) \frac{\partial f_n}{\partial\theta} \, dx = \int T(x) \, \frac{\partial \log f_n}{\partial \theta}\, f_n \, dx = E_\theta[T S] .
$$

Since $E[S] = 0$, $E[TS] = \operatorname{Cov}(T, S)$. The **Cauchy-Schwarz inequality** for random variables says
$\operatorname{Cov}(T,S)^2 \le \operatorname{Var}(T)\operatorname{Var}(S)$ (it is the statement $|r| \le 1$ for the
correlation, proved in [Chapter 4](04-Relationships-and-Correlation.md)). So

$$
\psi'(\theta)^2 = \operatorname{Cov}(T,S)^2 \le \operatorname{Var}(T) \, I_n(\theta),
$$

and dividing by $I_n(\theta) > 0$ gives the bound. $\blacksquare$

The proof is three lines once the score is in hand, and it explains the bound: an unbiased estimator must "move with"
the score (its covariance with $S$ is forced to be $\psi'(\theta)$), and a variable that is correlated with $S$ cannot
have small variance when $S$ has small variance. Little information means a quiet score, so every estimator must be
noisy.

### When is the bound reached?

Equality in Cauchy-Schwarz holds exactly when $T - \psi(\theta)$ is a constant multiple of $S$:
$T - \psi(\theta) = a(\theta)\, S(\theta)$ with probability 1. An unbiased estimator that reaches the bound is called
**efficient**.

**Bernoulli.** The sample proportion $\bar X$ is unbiased for $p$ with variance $p(1-p)/n$, and the bound is
$1/(nI(p)) = p(1-p)/n$. Equal: $\bar X$ is efficient, and no unbiased estimator of $p$ does better.

**Poisson.** $\bar X$ has variance $\lambda/n = 1/(n I(\lambda))$. Efficient.

**Normal mean.** $\bar X$ has variance $\sigma^2/n = 1/(nI(\mu))$. Efficient.

**Where it is not reached.** For exponential data with rate $\lambda$, the sum $S_n = \sum X_i$ has a gamma
distribution, and a calculation with the gamma density gives $E[1/S_n] = \lambda/(n-1)$ and
$E[1/S_n^2] = \lambda^2/((n-1)(n-2))$ for $n \ge 3$. So $T = (n-1)/S_n$ is unbiased for $\lambda$, with

$$
\operatorname{Var}(T) = (n-1)^2 \cdot \frac{\lambda^2}{(n-1)(n-2)} - \lambda^2 = \lambda^2 \left( \frac{n-1}{n-2} - 1\right) = \frac{\lambda^2}{n-2},
$$

while the bound is $1/(nI(\lambda)) = \lambda^2/n$. The ratio $(n-2)/n$, called the **efficiency**, tends to 1: in
large samples nothing is lost. (One can show that no unbiased estimator of $\lambda$ attains the bound here, because
the score $n/\lambda - S_n$ is linear in $S_n$, not in $1/S_n$.)

The equality condition has a deeper consequence: the bound can be reached only when the log-likelihood has the form
$\log f = A(\theta) T(x) + B(\theta) + C(x)$, an **exponential family**. Outside exponential families, no unbiased
estimator is exactly efficient; the theory of 13.4 says the MLE is efficient in the limit instead.

### When the conditions fail

For $X_1, \dots, X_n$ uniform on $[0, \theta]$, the estimator $\frac{n+1}{n} \max X_i$ is unbiased with variance
$\theta^2/(n(n+2))$, which shrinks like $1/n^2$, far faster than any $1/n$ bound. This does not contradict the theorem:
the support $[0, \theta]$ moves with $\theta$, so Lemma 1 fails and the bound does not apply. (The German tank estimator
of [Chapter 7](07-Estimation.md) is the discrete version of this.) Distributions with a sharp edge that depends on the
parameter are easier to estimate than regular ones, because the edge itself is a sharp clue.

### History

The inequality was found independently in the 1940s. C. R. Rao published it in "Information and the accuracy
attainable in the estimation of statistical parameters" (*Bulletin of the Calcutta Mathematical Society*, 1945), and
Harald Cramér gave it in *Mathematical Methods of Statistics* (1946). Maurice Fréchet (1943) and Georges Darmois (1945)
had versions too, so French texts sometimes call it the Fréchet-Darmois-Cramér-Rao inequality. Rao's 1945 paper also
contained the Rao-Blackwell idea of 13.6 and the first steps of information geometry.

## 13.4 Asymptotic normality of the MLE

*Level: advanced, with an expert remark.*

### The statement

The MLE is not always unbiased, and for small samples it need not be the best estimator. Its strength is in large
samples, where it becomes approximately normal, centred at the truth, with the smallest variance the Cramér-Rao bound
allows.

**Theorem (asymptotic normality of the MLE).** Let $X_1, X_2, \dots$ be independent with density $f(x;\theta_0)$,
where $\theta_0$ is an interior point of $\Theta \subseteq \mathbb{R}$, the model is identifiable (different $\theta$
give different distributions), and the regularity conditions hold (including a bound on the third derivative of
$\log f$ near $\theta_0$). Let $\hat\theta_n$ be a consistent root of the likelihood equation. Then

$$
\sqrt{n}\,(\hat\theta_n - \theta_0) \xrightarrow{d} N\!\left(0, \frac{1}{I(\theta_0)}\right),
$$

where $\xrightarrow{d}$ means convergence in distribution
([Probability, Chapter 12](../probability/12-The-Central-Limit-Theorem.md)). For a vector parameter the limit is
multivariate normal with covariance matrix $I(\theta_0)^{-1}$.

In practice we read this as: $\hat\theta$ is approximately $N(\theta_0, 1/(n I(\theta_0)))$, and the **standard
error** of the MLE is estimated by $1/\sqrt{n I(\hat\theta)}$ or by $1/\sqrt{-\ell''(\hat\theta)}$, the observed
information. Both are used; Efron and Hinkley (1978) gave reasons to prefer the observed one.

### The idea of the proof

The full proof has several careful steps; here is its skeleton, which is worth knowing because the same skeleton
proves Wilks' theorem in 13.5.

**Step 1: expand the score.** Write $S_n(\theta) = \ell_n'(\theta)$ for the total score. Since
$S_n(\hat\theta) = 0$, Taylor's formula around $\theta_0$ (in its mean value form) gives

$$
0 = S_n(\hat\theta) = S_n(\theta_0) + (\hat\theta - \theta_0)\, S_n'(\tilde\theta)
$$

for some $\tilde\theta$ between $\hat\theta$ and $\theta_0$.

**Step 2: rearrange and scale.**

$$
\sqrt{n}\,(\hat\theta - \theta_0) = \frac{S_n(\theta_0)/\sqrt{n}}{-S_n'(\tilde\theta)/n} .
$$

**Step 3: the numerator, by the central limit theorem.** $S_n(\theta_0)$ is a sum of $n$ independent scores with
mean 0 and variance $I(\theta_0)$ (Lemma 1 and the definition), so $S_n(\theta_0)/\sqrt n \to N(0, I(\theta_0))$.

**Step 4: the denominator, by the law of large numbers.** $-S_n'(\theta_0)/n$ is an average of $n$ independent
copies of $-\partial^2 \log f/\partial\theta^2$, whose mean is $I(\theta_0)$ by Lemma 2. Because $\hat\theta$ is
consistent, $\tilde\theta$ is squeezed towards $\theta_0$, and the bound on the third derivative shows that replacing
$\theta_0$ by $\tilde\theta$ changes the average by an amount that tends to 0. So the denominator tends to
$I(\theta_0)$ in probability.

**Step 5: combine.** A sequence tending in distribution to $N(0, I)$, divided by one tending in probability to the
constant $I$, tends in distribution to $N(0, I)/I = N(0, 1/I)$ (this step is **Slutsky's theorem**).

The step we skipped is consistency: showing that the likelihood equation has a root that converges to $\theta_0$. Wald
proved consistency of the MLE in 1949 under general conditions; full proofs are in Lehmann and Casella, *Theory of Point
Estimation*, chapter 6, and van der Vaart, *Asymptotic Statistics*, chapter 5.

### Using it

**The flaw counts.** $\hat\lambda = 2.5$ with $n = 8$ and $I(\lambda) = 1/\lambda$, so the standard error is
$\sqrt{\hat\lambda/n} = \sqrt{2.5/8} = 0.559$. An approximate 95% interval (the **Wald interval**) is

$$
2.5 \pm 1.96 \times 0.559 = (1.40,\ 3.60).
$$

**The coin.** $\hat p = 0.7$, standard error $\sqrt{0.7 \times 0.3/10} = 0.145$, Wald interval $(0.42, 0.98)$. Compare
the likelihood interval $(0.39, 0.92)$ from 13.1. They differ noticeably because $n = 10$ is small and the
log-likelihood is far from the symmetric parabola that the normal approximation assumes. The Wald interval for
proportions was criticised in [Chapter 8](08-Confidence-Intervals.md) for exactly this reason.

**Invariance and the delta method.** If $\hat\theta$ is the MLE of $\theta$, then $g(\hat\theta)$ is the MLE of
$g(\theta)$ for any function $g$: maximising over $\theta$ and then applying $g$ is the same as maximising over the
values of $g$. So the MLE of the odds $p/(1-p)$ for the coin is $0.7/0.3 = 7/3$. For a standard error, the **delta
method** says that if $\hat\theta \approx N(\theta, \tau^2)$ and $g$ is differentiable with $g'(\theta) \ne 0$, then
$g(\hat\theta) \approx N(g(\theta), g'(\theta)^2 \tau^2)$; the proof is the first-order Taylor expansion
$g(\hat\theta) \approx g(\theta) + g'(\theta)(\hat\theta - \theta)$. Note how this matches the reparametrisation rule
for information in 13.2.

### Expert remark: efficiency and its limits

Since $1/I(\theta_0)$ is the Cramér-Rao bound for one observation, the theorem says the MLE is **asymptotically
efficient**: in large samples no regular estimator does better. Making "regular" precise is subtle. J. L. Hodges found
in 1951 (Le Cam published it in 1953) an estimator that equals $\bar X$ unless $|\bar X| < n^{-1/4}$, in which case it returns 0; at
$\theta = 0$ it beats the bound, yet near 0 it behaves badly. Le Cam's work (from the 1950s) and Hájek's convolution
theorem (1970) explain this: the MLE is optimal among estimators whose behaviour does not jump under tiny changes of the
parameter, and superefficiency like Hodges' can only happen on a set of parameter values of measure zero. The modern
statement is the local asymptotic minimax theorem (van der Vaart, chapter 8).

The theorem also needs the model to be **correct**. If the data come from some other distribution, the MLE converges to
the parameter value whose model is closest to the truth in Kullback-Leibler divergence
([Probability, Chapter 18](../probability/18-Information-and-Entropy.md)), and its variance is given by the "sandwich"
formula $A^{-1} B A^{-1}$, with $A = -E[\ell'']$ and $B = E[(\ell')^2]$, which no longer coincide (White, 1982).

## 13.5 Likelihood ratio tests and Wilks' theorem

*Level: advanced.*

### Three ways to test with a likelihood

To test $H_0\colon \theta = \theta_0$ against $H_1\colon \theta \ne \theta_0$, the likelihood offers three natural
statistics. Each asks, in its own way, whether $\theta_0$ is far from the peak.

- **Wald:** how far is $\hat\theta$ from $\theta_0$, in standard errors? $W = (\hat\theta - \theta_0)^2 \, n I(\hat\theta)$.
- **Score** (Rao, 1948): how steep is the log-likelihood at $\theta_0$? $R = S_n(\theta_0)^2 / (n I(\theta_0))$. It
  needs only the null value, not the MLE.
- **Likelihood ratio:** how much higher is the peak than the log-likelihood at $\theta_0$?

$$
\Lambda = 2\left[\ell(\hat\theta) - \ell(\theta_0)\right] = -2 \log \frac{L(\theta_0)}{L(\hat\theta)} .
$$

More generally, for a null hypothesis that restricts $\theta$ to a subset $\Theta_0$ of the full parameter space
$\Theta$, the **likelihood ratio statistic** is

$$
\Lambda = 2\left[ \sup_{\theta \in \Theta} \ell(\theta) - \sup_{\theta \in \Theta_0} \ell(\theta) \right] \ge 0 ,
$$

twice the log of how much better the best unrestricted model explains the data than the best model allowed by the
null. Large $\Lambda$ is evidence against $H_0$.

### Wilks' theorem

**Theorem (Wilks, 1938).** Under the regularity conditions of 13.4, if $H_0$ fixes $r$ of the parameters (more
precisely, $\Theta_0$ is a smooth subset of dimension $k - r$ inside the $k$-dimensional $\Theta$) and the true
parameter is an interior point of $\Theta_0$, then

$$
\Lambda \xrightarrow{d} \chi^2_r ,
$$

the chi-square distribution with $r$ degrees of freedom. The Wald and score statistics have the same limit.

*Idea of the proof for one parameter.* Expand $\ell$ around its maximum, where $\ell'(\hat\theta) = 0$:

$$
\ell(\theta_0) \approx \ell(\hat\theta) + \tfrac12 (\theta_0 - \hat\theta)^2 \ell''(\hat\theta) .
$$

So $\Lambda \approx (\hat\theta - \theta_0)^2 \cdot \big({-\ell''(\hat\theta)}\big)$. By 13.4,
$-\ell''(\hat\theta) \approx n I(\theta_0)$ and $\sqrt{n I(\theta_0)}\,(\hat\theta - \theta_0) \approx Z \sim N(0,1)$,
so $\Lambda \approx Z^2$, which is $\chi^2_1$ by definition. The general case diagonalises the information matrix and
gets a sum of $r$ independent squared normals. A full proof is in van der Vaart, chapter 16. $\blacksquare$

**An exact case.** For $X_1, \dots, X_n$ normal with known $\sigma$, testing $\mu = \mu_0$:
$\ell(\mu) = -\sum (x_i - \mu)^2/(2\sigma^2)$, and using $\sum (x_i - \mu_0)^2 = \sum (x_i - \bar x)^2 + n(\bar x - \mu_0)^2$
gives $\Lambda = n(\bar x - \mu_0)^2/\sigma^2$, the square of the usual $z$ statistic. Here $\Lambda \sim \chi^2_1$
exactly, for every $n$. Wilks' theorem says every regular model looks like this one when $n$ is large.

### Worked example: the coin again

Test $p = 0.5$ after 7 heads in 10.

$$
\Lambda = 2\left[7 \log\frac{0.7}{0.5} + 3 \log\frac{0.3}{0.5}\right] = 2\,[2.3553 - 1.5325] = 1.646 .
$$

The chance that a $\chi^2_1$ variable exceeds 1.646 is $P(|Z| > \sqrt{1.646}) = P(|Z| > 1.283) = 0.20$. The data are
quite compatible with a fair coin. **Check** against exact binomial calculation: $P(X \ge 7) = 176/1024 = 0.172$, so
the exact two-sided p-value is $0.344$. With only 10 tosses the asymptotic answer is rough; with 60 heads in 100,
$\Lambda = 4.03$ and the asymptotic p-value is $0.045$ against an exact $0.057$, much closer.

The three tests for 7 in 10: Wald $W = (0.2)^2 \times 10/0.21 = 1.90$, score $R = (0.2)^2 \times 10/0.25 = 1.60$,
likelihood ratio $\Lambda = 1.65$. They agree to first order and differ at small $n$; the likelihood ratio is usually
the most reliable of the three, and unlike Wald it does not change when you reparametrise.

### Intervals from tests

Inverting the test gives the likelihood interval of 13.1: the set of $\theta_0$ not rejected at 5% is

$$
\{\theta_0 : 2[\ell(\hat\theta) - \ell(\theta_0)] \le 3.84\} = \{\theta_0 : \ell(\theta_0) \ge \ell(\hat\theta) - 1.92\}.
$$

For the coin this is $(0.393, 0.915)$; for the flaw counts it is $(1.56, 3.76)$, compared with the Wald interval
$(1.40, 3.60)$. Likelihood intervals follow the skew of the log-likelihood, which is why they are usually better than
Wald intervals in small samples.

### Expert remark: when Wilks fails

The theorem needs the true parameter to be inside $\Theta_0$, not on the boundary of $\Theta$. Testing whether a
variance component is zero, or whether a mixture has one component or two, breaks this: in the first case the limit is
a 50:50 mixture of a point mass at 0 and $\chi^2_1$ (Self and Liang, 1987); in the second the limit is far more
complicated, and the testing of the number of components in a mixture is still an active research area.

## 13.6 Sufficiency and the factorisation theorem

*Level: advanced.*

### What can you throw away?

For the coin, does the order of heads and tails matter, or only the count? For the flaw counts, do we need the eight
numbers, or only their total? Intuition says the count and the total are enough. Sufficiency makes this precise.

**Definition.** A statistic $T = T(X)$ is **sufficient** for $\theta$ if the conditional distribution of $X$ given
$T(X) = t$ does not depend on $\theta$.

The meaning: once you know $T$, the remaining detail of the data is pure noise, a lottery whose odds are the same
whatever $\theta$ is. You could even regenerate a fake data set with the same distribution as the real one from $T$
alone, by running that lottery, without knowing $\theta$. So anything you can do with $X$ you can do with $T$.

**Bernoulli.** Let $X_1, \dots, X_n$ be independent Bernoulli($p$) and $T = \sum X_i$. For a sequence $x$ of 0s and 1s
with $\sum x_i = t$,

$$
P(X = x \mid T = t) = \frac{P(X = x)}{P(T = t)} = \frac{p^t (1-p)^{n-t}}{\binom{n}{t} p^t (1-p)^{n-t}} = \frac{1}{\binom{n}{t}} .
$$

Given the count, every arrangement is equally likely, whatever $p$ is. So $T$ is sufficient: the order carries no
information about $p$. (It can carry information about whether the model is right, for instance whether tosses are
really independent. Sufficiency is always relative to a model.)

### The factorisation theorem

Computing conditional distributions each time is tedious. The theorem below lets you read sufficiency off the formula
for the likelihood.

**Theorem (factorisation, discrete case).** Let $X$ be discrete with probability mass function $f(x;\theta)$. A
statistic $T(X)$ is sufficient for $\theta$ if and only if there are functions $g$ and $h$ with

$$
f(x;\theta) = g\big(T(x); \theta\big)\, h(x) \quad \text{for all } x \text{ and } \theta ,
$$

where $h$ does not depend on $\theta$ and $g$ depends on $x$ only through $T(x)$.

*Proof.* **If.** Suppose the factorisation holds. Fix $t$ with $P_\theta(T = t) > 0$ and $x$ with $T(x) = t$ (if
$T(x) \ne t$ the conditional probability is 0 for every $\theta$). Then

$$
P_\theta(X = x \mid T = t) = \frac{f(x;\theta)}{\sum_{y: T(y) = t} f(y; \theta)} = \frac{g(t;\theta)\,h(x)}{\sum_{y: T(y)=t} g(t;\theta)\,h(y)} = \frac{h(x)}{\sum_{y : T(y) = t} h(y)},
$$

since $g(T(y);\theta) = g(t;\theta)$ for every $y$ in the sum, and it cancels. The result does not involve $\theta$, so
$T$ is sufficient.

**Only if.** Suppose $T$ is sufficient, so $k(x) = P_\theta(X = x \mid T = T(x))$ does not depend on $\theta$. Since
the event $\{X = x\}$ is contained in $\{T = T(x)\}$,

$$
f(x;\theta) = P_\theta(X = x) = P_\theta\big(T = T(x)\big)\, P_\theta\big(X = x \mid T = T(x)\big) = g\big(T(x);\theta\big)\, k(x),
$$

with $g(t;\theta) = P_\theta(T = t)$ and $h = k$. (When $P_\theta(T = T(x)) = 0$ both sides are 0.) $\blacksquare$

For continuous data the same statement holds with densities, but the proof needs conditional distributions given a
continuous statistic, which is measure theory; Halmos and Savage proved the general version in 1949.

### Worked examples

**Poisson.** $f(x;\lambda) = \prod e^{-\lambda}\lambda^{x_i}/x_i! = \left(e^{-n\lambda}\lambda^{\sum x_i}\right) \cdot
\left(\prod 1/x_i!\right)$. The first factor is $g(\sum x_i; \lambda)$, the second is $h(x)$. So the total is
sufficient, as the log-likelihood in 13.1 suggested.

**Normal, both parameters unknown.**

$$
f(x;\mu,\sigma^2) = (2\pi\sigma^2)^{-n/2} \exp\!\left( -\frac{\sum x_i^2 - 2\mu \sum x_i + n\mu^2}{2\sigma^2} \right),
$$

which depends on $x$ only through the pair $\left(\sum x_i, \sum x_i^2\right)$, equivalently $(\bar x, s^2)$. Here $h = 1$.
Two numbers summarise any normal sample of any size without loss, which is why the $t$ test uses only $\bar x$ and $s$.

**Uniform on $[0,\theta]$.** $f(x;\theta) = \theta^{-n}$ if all $0 \le x_i \le \theta$, and 0 otherwise, which is
$\theta^{-n}\,\mathbf{1}\{\max x_i \le \theta\} \cdot \mathbf{1}\{\min x_i \ge 0\}$. The maximum is sufficient. The
German tank analysts needed only the largest serial number and the sample size.

A sufficient statistic is never unique (the whole data set is always sufficient). A **minimal sufficient statistic** is
one that is a function of every other sufficient statistic: the most compressed summary that loses nothing. In the
examples above, $\sum x_i$, $(\bar x, s^2)$ and $\max x_i$ are minimal.

### Rao-Blackwell: sufficiency improves estimators

**Theorem (Rao-Blackwell).** Let $T$ be sufficient and $U$ any estimator of $\psi(\theta)$ with finite variance. Then
$U^* = E[U \mid T]$ is an estimator (it does not depend on $\theta$), $E[U^*] = E[U]$, and
$\operatorname{Var}(U^*) \le \operatorname{Var}(U)$, with equality only if $U$ is already a function of $T$.

*Proof.* Because $T$ is sufficient, the conditional distribution of $X$ given $T$, and so of $U$ given $T$, is free of
$\theta$; so $U^*$ can be computed from the data. The tower property gives $E[U^*] = E[E[U\mid T]] = E[U]$. The law of
total variance gives
$\operatorname{Var}(U) = \operatorname{Var}(E[U\mid T]) + E[\operatorname{Var}(U\mid T)] \ge \operatorname{Var}(U^*)$,
with equality exactly when $\operatorname{Var}(U \mid T) = 0$, that is when $U$ is a function of $T$. $\blacksquare$

**Example.** For Poisson counts, estimate $e^{-\lambda} = P(X = 0)$, the chance that a sheet has no flaws. A crude
unbiased estimator is $U = 1$ if the first sheet had no flaws and 0 otherwise. Given $T = \sum X_i = t$, the counts are
multinomial with $t$ flaws spread evenly over $n$ sheets, so the chance that sheet 1 got none is $((n-1)/n)^t$. Hence

$$
U^* = \left(\frac{n-1}{n}\right)^{T} .
$$

With $\lambda = 2$ and $n = 10$, $\operatorname{Var}(U) = e^{-2}(1 - e^{-2}) = 0.117$, while
$\operatorname{Var}(U^*) = e^{-2\lambda}(e^{\lambda/n} - 1) = 0.0041$, about 29 times smaller. (Both are unbiased; the
second is close to, but slightly above, the Cramér-Rao bound $\lambda e^{-2\lambda}/n = 0.0037$.) For our flaw data,
$U^* = (7/8)^{20} = 0.069$.

The Lehmann-Scheffé theorem (1950) adds that if $T$ is also **complete** (no nonzero function of $T$ has mean zero
for every $\theta$), the Rao-Blackwellised estimator is the unique unbiased estimator of minimum variance. Rao's 1945
paper and David Blackwell's 1947 paper found the improvement independently.

## 13.7 The Neyman-Pearson lemma

*Level: advanced.*

### The simplest testing problem

Suppose there are only two possible distributions: $H_0$, density $f_0$, and $H_1$, density $f_1$. A **test** is a rule
that, for each possible data set $x$, says reject or not; write it as a function $\phi(x)$ equal to 1 (reject) or 0
(keep). It is convenient to allow values in between: $\phi(x) = 0.3$ means "reject with probability 0.3", a
**randomised test**, which is needed with discrete data to hit a size exactly. The **size** of the test is
$\alpha = E_0[\phi(X)]$, the chance of rejecting when $H_0$ is true; its **power** is $E_1[\phi(X)]$. We want high
power with size at most $\alpha$.

Which data sets should we put in the rejection region? Each one "costs" its probability $f_0(x)$ under the null and
"earns" its probability $f_1(x)$ under the alternative. Like packing a knapsack, we should take the items with the best
earnings per unit of cost first: the data sets with the largest **likelihood ratio** $f_1(x)/f_0(x)$.

### The lemma

**Theorem (Neyman-Pearson lemma).** For a constant $k \ge 0$, let $\phi^*$ be a test with

$$
\phi^*(x) = \begin{cases} 1 & \text{if } f_1(x) > k f_0(x), \\ 0 & \text{if } f_1(x) < k f_0(x), \end{cases}
$$

(any value in $[0,1]$ where $f_1 = k f_0$), and let $\alpha = E_0[\phi^*(X)]$ be its size. Then every test $\phi$ with
size $E_0[\phi(X)] \le \alpha$ has power $E_1[\phi(X)] \le E_1[\phi^*(X)]$.

*Proof.* Look at the function $(\phi^*(x) - \phi(x))(f_1(x) - k f_0(x))$. Where $f_1 > k f_0$, $\phi^* = 1 \ge \phi$, so
both factors are $\ge 0$. Where $f_1 < k f_0$, $\phi^* = 0 \le \phi$, so both factors are $\le 0$. Where
$f_1 = k f_0$ the second factor is 0. So the product is never negative, and integrating (or summing) over all $x$:

$$
\int (\phi^* - \phi) f_1 \, dx \;\ge\; k \int (\phi^* - \phi) f_0 \, dx .
$$

The left side is the power of $\phi^*$ minus the power of $\phi$. The right side is $k$ times
$(\alpha - E_0[\phi]) \ge 0$. So the power of $\phi^*$ is at least that of $\phi$. $\blacksquare$

The proof is a single inequality, yet it settles a whole question: the likelihood ratio is the right way to order the
evidence. Neyman and Pearson's 1933 paper "On the problem of the most efficient tests of statistical hypotheses"
(*Philosophical Transactions of the Royal Society A*) also set out the language of the two kinds of error used in
[Chapter 9](09-Hypothesis-Tests.md).

### Worked example: normal means

Let $X_1, \dots, X_9$ be normal with $\sigma = 1$; $H_0\colon \mu = 0$ against $H_1\colon \mu = 1$. The ratio is

$$
\frac{f_1(x)}{f_0(x)} = \exp\!\left( \sum x_i - \frac{9}{2}\right) ,
$$

which increases with $\sum x_i$, so "ratio large" is the same as "$\bar x$ large". Under $H_0$, $\bar X \sim N(0, 1/9)$,
and the size-0.05 test rejects when $\bar x > 1.645/3 = 0.548$. Its power is

$$
P_1(\bar X > 0.548) = P\!\left(Z > \frac{0.548 - 1}{1/3}\right) = P(Z > -1.355) = 0.912 .
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Sampling densities of the mean of 9 observations under mu equals 0 and mu equals 1. The test rejects to the right of 0.548; the shaded tail of the null curve has area 0.05 and the shaded part of the alternative curve, the power, has area about 0.91">
  <polygon points="220.6,175.0 220.6,121.5 220.8,121.1 223.2,116.7 225.5,112.1 227.8,107.4 230.2,102.6 232.5,97.8 234.8,92.9 237.2,88.0 239.5,83.2 241.8,78.4 244.2,73.8 246.5,69.4 248.8,65.1 251.2,61.1 253.5,57.3 255.8,53.9 258.2,50.8 260.5,48.1 262.8,45.8 265.2,43.9 267.5,42.5 269.8,41.5 272.2,41.0 274.5,41.0 276.8,41.5 279.2,42.5 281.5,43.9 283.8,45.8 286.2,48.1 288.5,50.8 290.8,53.9 293.2,57.3 295.5,61.1 297.8,65.1 300.2,69.4 302.5,73.8 304.8,78.4 307.2,83.2 309.5,88.0 311.8,92.9 314.2,97.8 316.5,102.6 318.8,107.4 321.2,112.1 323.5,116.7 325.8,121.1 328.2,125.4 330.5,129.5 332.8,133.4 335.2,137.1 337.5,140.6 339.8,143.9 342.2,147.0 344.5,149.9 346.8,152.5 349.2,155.0 351.5,157.2 353.8,159.3 356.2,161.1 358.5,162.8 360.8,164.3 363.2,165.7 365.5,166.9 367.8,168.0 370.2,169.0 372.5,169.8 374.8,170.6 377.2,171.2 379.5,171.8 381.8,172.3 384.2,172.7 386.5,173.1 388.8,173.4 390.0,175.0" fill="#7ccf9a" fill-opacity="0.35"/>
  <polygon points="220.6,175.0 220.6,140.3 220.8,140.6 223.2,143.9 225.5,147.0 227.8,149.9 230.2,152.5 232.5,155.0 234.8,157.2 237.2,159.3 239.5,161.1 241.8,162.8 244.2,164.3 246.5,165.7 248.8,166.9 251.2,168.0 253.5,169.0 255.8,169.8 258.2,170.6 260.5,171.2 262.8,171.8 265.2,172.3 267.5,172.7 269.8,173.1 272.2,173.4 274.5,173.6 276.8,173.9 279.2,174.1 281.5,174.2 283.8,174.4 286.2,174.5 288.5,174.6 290.8,174.7 293.2,174.7 295.5,174.8 297.8,174.8 300.2,174.9 302.5,174.9 304.8,174.9 307.2,174.9 309.5,174.9 311.8,175.0 314.2,175.0 316.5,175.0 318.8,175.0 321.2,175.0 323.5,175.0 325.8,175.0 328.2,175.0 330.5,175.0 332.8,175.0 335.2,175.0 337.5,175.0 339.8,175.0 342.2,175.0 344.5,175.0 346.8,175.0 349.2,175.0 351.5,175.0 353.8,175.0 356.2,175.0 358.5,175.0 360.8,175.0 363.2,175.0 365.5,175.0 367.8,175.0 370.2,175.0 372.5,175.0 374.8,175.0 377.2,175.0 379.5,175.0 381.8,175.0 384.2,175.0 386.5,175.0 388.8,175.0 390.0,175.0" fill="#eea66f" fill-opacity="0.9"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="40.0,173.5 42.3,173.2 44.7,172.9 47.0,172.5 49.3,172.0 51.7,171.5 54.0,170.9 56.3,170.2 58.7,169.4 61.0,168.5 63.3,167.5 65.7,166.3 68.0,165.0 70.3,163.6 72.7,162.0 75.0,160.2 77.3,158.3 79.7,156.1 82.0,153.8 84.3,151.2 86.7,148.5 89.0,145.5 91.3,142.3 93.7,138.9 96.0,135.3 98.3,131.5 100.7,127.5 103.0,123.3 105.3,118.9 107.7,114.4 110.0,109.8 112.3,105.0 114.7,100.2 117.0,95.3 119.3,90.4 121.7,85.6 124.0,80.8 126.3,76.1 128.7,71.6 131.0,67.2 133.3,63.0 135.7,59.1 138.0,55.5 140.3,52.3 142.7,49.4 145.0,46.9 147.3,44.8 149.7,43.1 152.0,41.9 154.3,41.2 156.7,41.0 159.0,41.2 161.3,41.9 163.7,43.1 166.0,44.8 168.3,46.9 170.7,49.4 173.0,52.3 175.3,55.5 177.7,59.1 180.0,63.0 182.3,67.2 184.7,71.6 187.0,76.1 189.3,80.8 191.7,85.6 194.0,90.4 196.3,95.3 198.7,100.2 201.0,105.0 203.3,109.8 205.7,114.4 208.0,118.9 210.3,123.3 212.7,127.5 215.0,131.5 217.3,135.3 219.7,138.9 222.0,142.3 224.3,145.5 226.7,148.5 229.0,151.2 231.3,153.8 233.7,156.1 236.0,158.3 238.3,160.2 240.7,162.0 243.0,163.6 245.3,165.0 247.7,166.3 250.0,167.5 252.3,168.5 254.7,169.4 257.0,170.2 259.3,170.9 261.7,171.5 264.0,172.0 266.3,172.5 268.7,172.9 271.0,173.2 273.3,173.5 275.7,173.8 278.0,174.0 280.3,174.1 282.7,174.3 285.0,174.4 287.3,174.5 289.7,174.6 292.0,174.7 294.3,174.7 296.7,174.8 299.0,174.8 301.3,174.9 303.7,174.9 306.0,174.9 308.3,174.9 310.7,174.9 313.0,175.0 315.3,175.0 317.7,175.0 320.0,175.0 322.3,175.0 324.7,175.0 327.0,175.0 329.3,175.0 331.7,175.0 334.0,175.0 336.3,175.0 338.7,175.0 341.0,175.0 343.3,175.0 345.7,175.0 348.0,175.0 350.3,175.0 352.7,175.0 355.0,175.0 357.3,175.0 359.7,175.0 362.0,175.0 364.3,175.0 366.7,175.0 369.0,175.0 371.3,175.0 373.7,175.0 376.0,175.0 378.3,175.0 380.7,175.0 383.0,175.0 385.3,175.0 387.7,175.0 390.0,175.0"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2.5" points="40.0,175.0 42.3,175.0 44.7,175.0 47.0,175.0 49.3,175.0 51.7,175.0 54.0,175.0 56.3,175.0 58.7,175.0 61.0,175.0 63.3,175.0 65.7,175.0 68.0,175.0 70.3,175.0 72.7,175.0 75.0,175.0 77.3,175.0 79.7,175.0 82.0,175.0 84.3,175.0 86.7,175.0 89.0,175.0 91.3,175.0 93.7,175.0 96.0,175.0 98.3,175.0 100.7,175.0 103.0,175.0 105.3,175.0 107.7,175.0 110.0,175.0 112.3,175.0 114.7,175.0 117.0,175.0 119.3,174.9 121.7,174.9 124.0,174.9 126.3,174.9 128.7,174.9 131.0,174.8 133.3,174.8 135.7,174.7 138.0,174.7 140.3,174.6 142.7,174.5 145.0,174.4 147.3,174.3 149.7,174.1 152.0,174.0 154.3,173.8 156.7,173.5 159.0,173.2 161.3,172.9 163.7,172.5 166.0,172.0 168.3,171.5 170.7,170.9 173.0,170.2 175.3,169.4 177.7,168.5 180.0,167.5 182.3,166.3 184.7,165.0 187.0,163.6 189.3,162.0 191.7,160.2 194.0,158.3 196.3,156.1 198.7,153.8 201.0,151.2 203.3,148.5 205.7,145.5 208.0,142.3 210.3,138.9 212.7,135.3 215.0,131.5 217.3,127.5 219.7,123.3 222.0,118.9 224.3,114.4 226.7,109.8 229.0,105.0 231.3,100.2 233.7,95.3 236.0,90.4 238.3,85.6 240.7,80.8 243.0,76.1 245.3,71.6 247.7,67.2 250.0,63.0 252.3,59.1 254.7,55.5 257.0,52.3 259.3,49.4 261.7,46.9 264.0,44.8 266.3,43.1 268.7,41.9 271.0,41.2 273.3,41.0 275.7,41.2 278.0,41.9 280.3,43.1 282.7,44.8 285.0,46.9 287.3,49.4 289.7,52.3 292.0,55.5 294.3,59.1 296.7,63.0 299.0,67.2 301.3,71.6 303.7,76.1 306.0,80.8 308.3,85.6 310.7,90.4 313.0,95.3 315.3,100.2 317.7,105.0 320.0,109.8 322.3,114.4 324.7,118.9 327.0,123.3 329.3,127.5 331.7,131.5 334.0,135.3 336.3,138.9 338.7,142.3 341.0,145.5 343.3,148.5 345.7,151.2 348.0,153.8 350.3,156.1 352.7,158.3 355.0,160.2 357.3,162.0 359.7,163.6 362.0,165.0 364.3,166.3 366.7,167.5 369.0,168.5 371.3,169.4 373.7,170.2 376.0,170.9 378.3,171.5 380.7,172.0 383.0,172.5 385.3,172.9 387.7,173.2 390.0,173.5"/>
  <line x1="35" y1="175" x2="395" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <text x="40.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">-1</text>
  <text x="156.7" y="190" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="273.3" y="190" text-anchor="middle" font-size="11" fill="currentColor">1</text>
  <text x="390.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <line x1="220.6" y1="30" x2="220.6" y2="175" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="220.6" y="24" text-anchor="middle" font-size="11" fill="currentColor">cut-off 0.548</text>
  <text x="96.7" y="50" font-size="11" fill="currentColor">H0: μ = 0</text>
  <text x="313.3" y="50" font-size="11" fill="currentColor">H1: μ = 1</text>
  <text x="210" y="208" text-anchor="middle" font-size="11" fill="currentColor">sample mean of 9 observations</text>
</svg>
</div>

No other test using these 9 observations with size 0.05 has power above 0.912 against $\mu = 1$.

**Uniformly most powerful tests.** The rejection region "$\bar x > 0.548$" did not depend on the alternative value 1;
any $\mu_1 > 0$ gives the same region. So this one test is most powerful against every $\mu > 0$ at once: it is
**uniformly most powerful** (UMP) for $H_1\colon \mu > 0$. The same happens whenever the likelihood ratio is increasing
in some statistic $T$ (a **monotone likelihood ratio**), which holds for one-parameter exponential families (the
Karlin-Rubin theorem). For two-sided alternatives no UMP test exists: the best test against $\mu = 1$ looks right, the
best against $\mu = -1$ looks left, and no single test does both. Restricting to unbiased tests restores optimality;
this is the subject of Lehmann and Romano's *Testing Statistical Hypotheses*.

### Worked example: a discrete case

Ten tosses; $H_0\colon p = 0.5$ against $H_1\colon p = 0.8$. The ratio $(0.8/0.5)^x (0.2/0.5)^{10-x}$ increases with
the number of heads $x$, so the best tests reject for large $x$. But the sizes jump: $P_0(X \ge 9) = 11/1024 = 0.011$
and $P_0(X \ge 8) = 56/1024 = 0.055$. No non-randomised test of this form has size exactly 0.05. A randomised test
rejects for $X \ge 9$, and when $X = 8$ rejects with the probability $\gamma$ that brings the size to 0.05:
$\gamma = (0.05 - 11/1024)/(45/1024) = 0.893$. In practice people report a p-value instead of randomising, but the
lemma shows why discrete tests are slightly conservative.

## Check yourself

??? question "1. In 12 independent trials you see 3 successes. Find the MLE of $p$, the observed information, and the Wald standard error."

    $\ell(p) = 3\log p + 9\log(1-p)$, so $\ell'(p) = 3/p - 9/(1-p) = 0$ gives $\hat p = 3/12 = 0.25$.
    Observed information: $-\ell''(\hat p) = 3/0.25^2 + 9/0.75^2 = 48 + 16 = 64$. Standard error $1/\sqrt{64} = 0.125$.
    **Check:** $\sqrt{\hat p(1-\hat p)/n} = \sqrt{0.1875/12} = \sqrt{0.015625} = 0.125$.

??? question "2. Find the Fisher information in one exponential observation with rate $\lambda$, and the approximate variance of the MLE from $n$ observations."

    $\log f = \log\lambda - \lambda x$, so $\partial^2 \log f/\partial\lambda^2 = -1/\lambda^2$ and $I(\lambda) = 1/\lambda^2$.
    The MLE solves $n/\lambda - \sum x_i = 0$, so $\hat\lambda = 1/\bar x$, with approximate variance
    $1/(nI(\lambda)) = \lambda^2/n$.

??? question "3. Show directly that $E[S] = 0$ and $\operatorname{Var}(S) = 1/\sigma^2$ for one normal observation with unknown mean $\mu$ and known $\sigma$."

    $S = \partial/\partial\mu \left(-(X-\mu)^2/(2\sigma^2)\right) = (X - \mu)/\sigma^2$. Then $E[S] = (E[X] - \mu)/\sigma^2 = 0$
    and $\operatorname{Var}(S) = \operatorname{Var}(X)/\sigma^4 = \sigma^2/\sigma^4 = 1/\sigma^2$, which also equals
    $-E[\partial S/\partial\mu] = 1/\sigma^2$, as Lemma 2 promises.

??? question "4. For exponential data with $n = 10$, what is the efficiency of the unbiased estimator $(n-1)/\sum X_i$ of $\lambda$?"

    Its variance is $\lambda^2/(n-2) = \lambda^2/8$, and the Cramér-Rao bound is $\lambda^2/n = \lambda^2/10$. Efficiency
    $= (\lambda^2/10)/(\lambda^2/8) = 8/10 = 0.8$.

??? question "5. Use the factorisation theorem to find a sufficient statistic for the geometric distribution $P(X = x) = (1-p)^{x-1}p$, $x = 1, 2, \dots$, from $n$ independent observations."

    $\prod (1-p)^{x_i - 1} p = p^n (1-p)^{\sum x_i - n}$. This is $g(\sum x_i; p)$ with $h(x) = 1$, so $T = \sum X_i$
    is sufficient.

??? question "6. For independent Poisson($\lambda$) counts, show that given $T = \sum X_i = t$, the vector $(X_1, \dots, X_n)$ is multinomial with $t$ trials and equal probabilities $1/n$."

    $T$ is Poisson($n\lambda$). For $x$ with $\sum x_i = t$:
    $P(X = x \mid T = t) = \dfrac{\prod e^{-\lambda}\lambda^{x_i}/x_i!}{e^{-n\lambda}(n\lambda)^t/t!} = \dfrac{t!}{\prod x_i!}\, n^{-t}$,
    which is the multinomial probability with $t$ trials and cell probabilities $1/n$. It does not involve $\lambda$,
    confirming sufficiency directly.

??? question "7. For the flaw counts ($n = 8$, total 20), compute the likelihood ratio statistic for $H_0\colon \lambda = 1.5$ and its approximate p-value."

    $\Lambda = 2[s\log(\hat\lambda/\lambda_0) - n(\hat\lambda - \lambda_0)] = 2[20 \log(2.5/1.5) - 8 \times 1] = 2[10.217 - 8] = 4.43$.
    $P(\chi^2_1 > 4.43) = P(|Z| > 2.105) \approx 0.035$. The value 1.5 is rejected at the 5% level, consistent with the
    likelihood interval $(1.56, 3.76)$ found in 13.5 not containing it.

??? question "8. Ten tosses, $H_0\colon p = 0.5$ against $H_1\colon p = 0.8$. What are the size and power of the test that rejects when $X \ge 9$?"

    Size: $P_{0.5}(X \ge 9) = (10 + 1)/1024 = 0.0107$. Power: $P_{0.8}(X \ge 9) = 10 (0.8)^9 (0.2) + 0.8^{10} = 0.2684 + 0.1074 = 0.376$.
    By the Neyman-Pearson lemma no test of size at most 0.0107 has more power.

??? question "9. For the coin with 7 heads in 10, give the MLE of the log-odds $\log(p/(1-p))$ and its delta-method standard error."

    By invariance the MLE is $\log(0.7/0.3) = \log(7/3) = 0.847$. With $g(p) = \log(p/(1-p))$, $g'(p) = 1/(p(1-p))$, so
    the standard error is $g'(\hat p)\sqrt{\hat p(1-\hat p)/n} = 1/\sqrt{n\hat p(1-\hat p)} = 1/\sqrt{2.1} = 0.690$.

??? question "10. Why does the Cramér-Rao bound not apply to estimating $\theta$ from uniform$[0,\theta]$ data? Which step of the proof fails?"

    The support $\{x : f(x;\theta) > 0\} = [0,\theta]$ depends on $\theta$. Then
    $\frac{d}{d\theta}\int_0^\theta f\,dx$ picks up a boundary term $f(\theta;\theta) = 1/\theta$ that the interchange
    of derivative and integral ignores, so Lemma 1 ($E[S] = 0$) fails; indeed $S = -n/\theta$ is a constant, not mean
    zero. Without Lemma 1, $E[TS]$ is not a covariance and the Cauchy-Schwarz step gives nothing.

??? question "11. Show that for testing $\mu = \mu_0$ with normal data and known $\sigma$, the likelihood ratio statistic equals $z^2$, where $z = \sqrt{n}(\bar x - \mu_0)/\sigma$."

    $\ell(\mu) = -\frac{1}{2\sigma^2}\sum (x_i - \mu)^2$ is maximised at $\bar x$. Using
    $\sum (x_i - \mu_0)^2 = \sum (x_i - \bar x)^2 + n(\bar x - \mu_0)^2$,
    $\Lambda = 2[\ell(\bar x) - \ell(\mu_0)] = \frac{1}{\sigma^2}\left[\sum(x_i - \mu_0)^2 - \sum (x_i - \bar x)^2\right] = \frac{n(\bar x - \mu_0)^2}{\sigma^2} = z^2$.

??? question "12. (Harder.) Prove that if an unbiased estimator $T$ of $\theta$ attains the Cramér-Rao bound for all $\theta$ in an i.i.d. model, then $T$ is the MLE whenever the likelihood equation has a solution."

    Equality in Cauchy-Schwarz forces $T - \theta = a(\theta)\,S_n(\theta)$ for all $\theta$. Taking covariances with
    $S_n$: $1 = \operatorname{Cov}(T, S_n) = a(\theta) I_n(\theta)$, so $a(\theta) = 1/I_n(\theta) > 0$. Hence
    $S_n(\theta) = I_n(\theta)(T - \theta)$, which is zero exactly at $\theta = T$, positive below and negative above.
    So the log-likelihood rises up to $\theta = T$ and falls after it, and its maximum is at $\hat\theta = T$.

## What you learned

- The likelihood $L(\theta) = f(x;\theta)$ is the probability of the observed data as a function of the parameter;
  only ratios matter, and it is not a distribution for $\theta$.
- The score has mean zero, and its variance, the Fisher information, equals the expected curvature
  $-E[\ell'']$; independent observations add information.
- Cramér-Rao: an unbiased estimator of $\psi(\theta)$ has variance at least $\psi'(\theta)^2/I_n(\theta)$; the proof
  is Cauchy-Schwarz applied to the estimator and the score, and equality needs an exponential family.
- The MLE is approximately $N(\theta, 1/(nI(\theta)))$ in large regular models, so it is asymptotically efficient;
  the proof expands the score and uses the CLT and the LLN.
- Wald, score and likelihood ratio tests agree to first order; Wilks' theorem gives $\Lambda \to \chi^2_r$, and
  inverting the test gives likelihood intervals.
- A sufficient statistic keeps all the information about $\theta$; the factorisation theorem finds it, and
  Rao-Blackwell uses it to improve any estimator.
- The Neyman-Pearson lemma: for two simple hypotheses, rejecting when the likelihood ratio is large gives the most
  powerful test of its size.

**Next:** [Chapter 14](14-Bayesian-Statistics.md), what happens when we multiply the likelihood by a prior and treat
the parameter as uncertain.

## Further reading

- R. A. Fisher, "On the mathematical foundations of theoretical statistics", *Philosophical Transactions of the Royal
  Society A* 222, 1922. Where likelihood, sufficiency and efficiency were set out.
- J. Neyman and E. S. Pearson, "On the problem of the most efficient tests of statistical hypotheses",
  *Philosophical Transactions of the Royal Society A* 231, 1933.
- C. R. Rao, "Information and the accuracy attainable in the estimation of statistical parameters", *Bulletin of the
  Calcutta Mathematical Society* 37, 1945.
- H. Cramér, *Mathematical Methods of Statistics*, Princeton University Press, 1946.
- S. S. Wilks, "The large-sample distribution of the likelihood ratio for testing composite hypotheses",
  *Annals of Mathematical Statistics* 9, 1938.
- G. Casella and R. L. Berger, *Statistical Inference*, 2nd edition, Duxbury, 2002. The standard first course at this
  level; chapters 6 to 8 cover this chapter.
- E. L. Lehmann and G. Casella, *Theory of Point Estimation*, 2nd edition, Springer, 1998, and E. L. Lehmann and
  J. P. Romano, *Testing Statistical Hypotheses*, 3rd edition, Springer, 2005.
- A. W. van der Vaart, *Asymptotic Statistics*, Cambridge University Press, 1998. Full proofs of 13.4 and 13.5.
- Y. Pawitan, *In All Likelihood: Statistical Modelling and Inference Using Likelihood*, Oxford University Press, 2001.
  A friendly book built around the likelihood function itself.
- On this site: [Hypothesis tests](../../topics/statistics/level-8/03-hypothesis-tests.md) and
  [Confidence intervals](../../topics/statistics/level-8/02-confidence-intervals.md) (gentler),
  [Applications of derivatives](../../uoft/MAT137/unit06.md) (maximising a function),
  [Information and entropy](../probability/18-Information-and-Entropy.md) in the Probability book, and the
  [Statistics book's contents](index.md).
