# 6. Expectation and variance

*A distribution is a whole table of numbers. Often we want just one: what do we get on average? And a second: how far
from that average do we typically land? This chapter defines the expected value, proves the single most useful fact in
elementary probability (expectation is linear, whether or not the variables are independent), and uses it to solve
problems whose distributions are hopeless to write down: how many guests get their own hat back, how many boxes of
cereal you must buy to collect every toy. Then it measures spread with the variance, adds variances with the help of
covariance, and ends with a game whose expected value is infinite and the three centuries of argument about what that
means.*

!!! abstract "In this chapter"
    **You will learn:**

    - the expected value of a discrete random variable, when it exists, and the formula for $E[g(X)]$
    - linearity of expectation, with proof, and why it needs no independence
    - the indicator method: writing a count as a sum of 0-1 variables, then taking expectations term by term
    - the hat-check problem, the coupon collector, records, runs and empty boxes
    - variance and standard deviation, covariance, and the variance of a sum
    - the means and variances of the five families from Chapter 5
    - the St Petersburg paradox, what it does and does not show

    **You need:** [Chapter 5](05-Discrete-Random-Variables.md) (random variables, the five families, independence).
    Gentler versions: [Expected value](../../topics/probability/level-7/02-expected-value.md),
    [Spread of a random variable](../../topics/probability/level-7/03-variance-spread.md),
    [Expected counts](../../topics/probability/level-4/06-expected-counts.md). No calculus is needed; a few sums of
    series are worked out when they come up.

    **Levels:** 6.1 to 6.3 are beginner to intermediate; 6.4 and 6.5 are intermediate; 6.6 is intermediate, with an
    advanced remark at the end.

## 6.1 Expected value

A casino game: you pay 1 dollar, roll a die, and win 3 dollars if it shows a six (you keep nothing otherwise). Is it a
good deal? Imagine playing 600 times. You would expect about 100 sixes, so you would win about 300 dollars and pay 600.
Per game, you would lose about 50 cents. That "per game in the long run" figure is the **expected value**. Divide the
long-run reasoning by the number of games and the 600 disappears: each possible value is weighted by its probability.

**Definition.** The **expected value** (or **expectation**, or **mean**) of a discrete random variable $X$ with
values $x_1, x_2, \dots$ is

$$
E[X] = \sum_i x_i \, P(X = x_i),
$$

provided the sum converges absolutely, that is $\sum_i |x_i| \, P(X = x_i) < \infty$. If it does not, we say $E[X]$
**does not exist** (or, when all the large terms are positive, that $E[X] = \infty$). The Greek letter $\mu$ is often
used for $E[X]$.

Why insist on absolute convergence? Because a series that converges only conditionally can be rearranged to add up to
any number you like (Riemann's rearrangement theorem), and the values $x_i$ have no natural order. Absolute convergence
makes the answer independent of how we list the values.

For the casino game, the net gain $G$ is $+2$ with probability $1/6$ and $-1$ with probability $5/6$, so
$E[G] = 2 \cdot \tfrac16 - 1 \cdot \tfrac56 = -\tfrac12$: minus 50 cents per game, as the story said.

The expected value need not be a possible value: a fair die has

$$
E[X] = \frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5.
$$

Think of $E[X]$ as the **balance point**: if you put weights $P(X = x_i)$ at positions $x_i$ on a weightless ruler, the
ruler balances at $E[X]$. Chapter 7 makes "the long-run average" precise as the law of large numbers.

**Example 6.1 (roulette).** An American roulette wheel has 38 equally likely pockets: 18 red, 18 black, 2 green. A
1-dollar bet on red wins 1 dollar with probability $18/38$ and loses 1 dollar with probability $20/38$:
$E = 18/38 - 20/38 = -1/19 \approx -0.053$. The house keeps about 5.3 cents of every dollar bet on red, on average.
Every bet on that wheel has the same expectation; they differ only in spread (6.3).

**Example 6.2 (an expectation that does not exist).** Let $P(X = k) = \dfrac{1}{k(k+1)}$ for $k = 1, 2, 3, \dots$.
These add to 1, because $\frac{1}{k(k+1)} = \frac1k - \frac1{k+1}$ and the sum telescopes. But
$\sum_k k \cdot \frac{1}{k(k+1)} = \sum_k \frac{1}{k+1} = \infty$ (the harmonic series diverges). So $X$ is a perfectly
good random variable, finite every time, with infinite expected value. 6.6 is about a famous example of this kind.

**The means of the families.** Here are the first computations, done directly from the definition; 6.2 will redo
several of them in one line.

- *Bernoulli($p$):* $E[X] = 1 \cdot p + 0 \cdot q = p$.
*Binomial($n, p$):* use the identity $k\binom{n}{k} = n\binom{n-1}{k-1}$ (choose a team of $k$ and a captain in two
  orders). Then

$$
E[X] = \sum_{k=1}^{n} k\binom{n}{k}p^k q^{n-k} = np \sum_{k=1}^{n}\binom{n-1}{k-1}p^{k-1}q^{n-k} = np\,(p+q)^{n-1} = np.
$$

- *Poisson($\lambda$):* $E[X] = \sum_{k \ge 1} k e^{-\lambda}\frac{\lambda^k}{k!} = \lambda e^{-\lambda}\sum_{k \ge 1}\frac{\lambda^{k-1}}{(k-1)!} = \lambda e^{-\lambda} e^{\lambda} = \lambda$.
  So the parameter $\lambda$ is the mean, which is why Bortkiewicz chose $\lambda$ = (total deaths)/(corps-years) in
  Chapter 5.

For the geometric distribution a neat trick avoids differentiating a series.

**Theorem 6.1 (tail sum formula).** If $X$ takes values in $\{0, 1, 2, \dots\}$, then

$$
E[X] = \sum_{k=1}^{\infty} P(X \ge k),
$$

both sides possibly infinite.

*Proof.* Write each value as a sum of ones: $j = \sum_{k=1}^{j} 1$. Then

$$
E[X] = \sum_{j \ge 0} j\,P(X = j) = \sum_{j \ge 1}\sum_{k=1}^{j} P(X = j) = \sum_{k \ge 1}\sum_{j \ge k} P(X = j) = \sum_{k \ge 1} P(X \ge k).
$$

Swapping the order of summation is allowed because all the terms are nonnegative. $\square$

- *Geometric($p$):* $P(X \ge k) = q^{k-1}$, so $E[X] = \sum_{k \ge 1} q^{k-1} = 1/p$. You wait on average 6 rolls for a
  six, 2 flips for a head.

**Example 6.3.** The larger of two dice (Example 5.2) has $P(M \ge k) = 1 - ((k-1)/6)^2$. So
$E[M] = \sum_{k=1}^{6}\left(1 - \frac{(k-1)^2}{36}\right) = 6 - \frac{0 + 1 + 4 + 9 + 16 + 25}{36} = \frac{161}{36}
\approx 4.47$. *Check* from the pmf: $\sum_k k(2k - 1)/36 = (1 + 6 + 15 + 28 + 45 + 66)/36 = 161/36$.

### The expectation of a function

If $Y = g(X)$, we could find the distribution of $Y$ first (Theorem 5.11) and then its mean. There is a shortcut.

**Theorem 6.2.** If $X$ is discrete and $g$ is a function, then

$$
E[g(X)] = \sum_i g(x_i)\, P(X = x_i),
$$

whenever the sum converges absolutely.

*Proof.* Group the values $x_i$ according to the value $y = g(x_i)$:
$\sum_i g(x_i) P(X = x_i) = \sum_y y \sum_{i : g(x_i) = y} P(X = x_i) = \sum_y y\, P(Y = y) = E[Y]$, using Theorem 5.11.
Regrouping is allowed because of absolute convergence. $\square$

(This is sometimes called the "law of the unconscious statistician", because people use it without noticing it needs
a proof.) For a fair die, $E[X^2] = (1 + 4 + 9 + 16 + 25 + 36)/6 = 91/6$. Notice that $91/6 \approx 15.2$ is not
$3.5^2 = 12.25$: in general **$E[g(X)] \ne g(E[X])$**. The difference between these two will be the variance.

There is also a version on the sample space itself. If $\Omega$ is countable, then

$$
E[X] = \sum_{\omega \in \Omega} X(\omega)\, P(\{\omega\}),
$$

again by grouping the outcomes $\omega$ according to the value $X(\omega)$. This formula is what makes the next section
almost effortless.

## 6.2 Linearity

Here is the key property, with a proof that is one line once the sample-space formula is in hand.

**Theorem 6.3 (linearity of expectation).** If $X$ and $Y$ are random variables on the same sample space with finite
expectations, and $a, b$ are numbers, then

$$
E[aX + bY] = a\,E[X] + b\,E[Y].
$$

By induction, $E[X_1 + \dots + X_n] = E[X_1] + \dots + E[X_n]$ for any finite number of random variables.

*Proof* (for countable $\Omega$; Chapter 17 does the general case).

$$
E[aX + bY] = \sum_{\omega}\big(aX(\omega) + bY(\omega)\big)P(\{\omega\}) = a\sum_\omega X(\omega)P(\{\omega\}) + b\sum_\omega Y(\omega)P(\{\omega\}) = aE[X] + bE[Y].
$$

The two sums converge absolutely by assumption, so splitting is allowed, and the left side converges absolutely by the
triangle inequality $|aX + bY| \le |a||X| + |b||Y|$. $\square$

**Nothing in this proof uses independence.** $X$ and $Y$ can be tangled together in any way at all. That is what makes
linearity so powerful: to find the mean of a complicated count, break it into simple pieces, find the mean of each
piece, and add, ignoring how the pieces depend on each other.

**Example 6.4 (the binomial again).** If $X \sim \text{Bin}(n, p)$, write $X = X_1 + \dots + X_n$ where $X_i$ is 1 if
trial $i$ succeeds. Each $E[X_i] = p$, so $E[X] = np$. Compare the identity-juggling of 6.1.

**Example 6.5 (the negative binomial).** The number of trials to the $r$-th success is the time to the first success,
plus the further time to the second, and so on: $X = T_1 + \dots + T_r$ with each $T_j \sim \text{Geom}(p)$. So
$E[X] = r/p$. On average, 18 rolls to see three sixes.

**Example 6.6 (the hat-check problem).** $n$ guests leave their hats at a cloakroom; the attendant hands them back in
a uniformly random order (a random permutation). How many guests get their own hat, on average?

The number $N$ of guests with their own hat has a complicated distribution: in [Combinatorics, Chapter 5](../combinatorics/05-Inclusion-Exclusion.md)
inclusion-exclusion shows that $P(N = 0) = \sum_{j=0}^{n} (-1)^j/j! \to 1/e \approx 0.368$. But the mean is easy. Let
$X_i = 1$ if guest $i$ gets their own hat. In a random permutation, guest $i$ is equally likely to receive any of the
$n$ hats, so $E[X_i] = P(X_i = 1) = 1/n$. By linearity,

$$
E[N] = E[X_1] + \dots + E[X_n] = n \cdot \frac{1}{n} = 1.
$$

Exactly 1, for every $n$: two guests or two million. The $X_i$ are far from independent (if all but one guest have
their own hats, so does the last one), and it does not matter.

*Check* for $n = 3$: the six permutations of $\{1, 2, 3\}$ have $3, 1, 1, 1, 0, 0$ fixed points (identity, three
swaps, two 3-cycles), total 6, average 1.

**Example 6.7 (the coupon collector).** A cereal company puts one of $n$ different toys in each box, each equally
likely, independently. How many boxes do you expect to buy to collect all $n$?

Split the wait into stages. Stage $i$ (for $i = 1, \dots, n$) starts when you have $i - 1$ different toys and ends when
you get the $i$-th new one. During stage $i$, each box is new with probability $p_i = (n - i + 1)/n$, so the length
$T_i$ of stage $i$ is $\text{Geom}(p_i)$ with mean $n/(n - i + 1)$. The total is $T = T_1 + \dots + T_n$, and by
linearity

$$
E[T] = \frac{n}{n} + \frac{n}{n-1} + \dots + \frac{n}{1} = n\left(1 + \frac12 + \frac13 + \dots + \frac1n\right) = n H_n,
$$

where $H_n = 1 + \frac12 + \dots + \frac1n$ is the $n$-th **harmonic number**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Bar chart of the expected length of each stage when collecting all six faces of a die: 1, 1.2, 1.5, 2, 3 and 6 rolls. The last stage alone takes as long on average as the first five together after the first">
<line x1="55" y1="180" x2="400" y2="180" stroke="currentColor" stroke-width="1.5"/>
<line x1="55" y1="180" x2="55" y2="20" stroke="currentColor" stroke-width="1.5"/>
<line x1="51" y1="130" x2="55" y2="130" stroke="currentColor"/><text x="47" y="134" text-anchor="end" font-size="11" fill="currentColor">2</text>
<line x1="51" y1="80" x2="55" y2="80" stroke="currentColor"/><text x="47" y="84" text-anchor="end" font-size="11" fill="currentColor">4</text>
<line x1="51" y1="30" x2="55" y2="30" stroke="currentColor"/><text x="47" y="34" text-anchor="end" font-size="11" fill="currentColor">6</text>
<text x="47" y="184" text-anchor="end" font-size="11" fill="currentColor">0</text>
<rect x="70" y="155" width="40" height="25" fill="#9cc9ea"/>
<rect x="125" y="150" width="40" height="30" fill="#9cc9ea"/>
<rect x="180" y="142.5" width="40" height="37.5" fill="#9cc9ea"/>
<rect x="235" y="130" width="40" height="50" fill="#9cc9ea"/>
<rect x="290" y="105" width="40" height="75" fill="#7ccf9a"/>
<rect x="345" y="30" width="40" height="150" fill="#eea66f"/>
<text x="90" y="150" text-anchor="middle" font-size="11" fill="currentColor">1</text>
<text x="145" y="145" text-anchor="middle" font-size="11" fill="currentColor">1.2</text>
<text x="200" y="137" text-anchor="middle" font-size="11" fill="currentColor">1.5</text>
<text x="255" y="125" text-anchor="middle" font-size="11" fill="currentColor">2</text>
<text x="310" y="100" text-anchor="middle" font-size="11" fill="currentColor">3</text>
<text x="365" y="25" text-anchor="middle" font-size="11" fill="currentColor">6</text>
<text x="90" y="196" text-anchor="middle" font-size="11" fill="currentColor">1</text>
<text x="145" y="196" text-anchor="middle" font-size="11" fill="currentColor">2</text>
<text x="200" y="196" text-anchor="middle" font-size="11" fill="currentColor">3</text>
<text x="255" y="196" text-anchor="middle" font-size="11" fill="currentColor">4</text>
<text x="310" y="196" text-anchor="middle" font-size="11" fill="currentColor">5</text>
<text x="365" y="196" text-anchor="middle" font-size="11" fill="currentColor">6</text>
<text x="228" y="218" text-anchor="middle" font-size="12" fill="currentColor">stage i: waiting for the i-th new face</text>
</svg>
</div>

For a die ($n = 6$): $E[T] = 6 \cdot \frac{49}{20} = 14.7$ rolls to see every face. The picture shows where the time
goes: the last face alone takes 6 rolls on average. For $n = 50$, $E[T] = 50 H_{50} \approx 225$.

How big is $H_n$? Comparing the sum with the area under $1/x$ shows $\ln(n + 1) \le H_n \le 1 + \ln n$, and in fact
$H_n = \ln n + \gamma + \frac{1}{2n} + O(1/n^2)$ where $\gamma \approx 0.5772$ is the Euler-Mascheroni constant (a
statement from analysis; see the MAT137 guide on [series](../../uoft/MAT137/unit13.md)). So
$E[T] \approx n\ln n + 0.5772\,n + \tfrac12$: for $n = 50$ this gives 224.96, matching the exact value
$224.960\ldots$ to two decimals. Collecting $n$ things takes about $n \ln n$ tries, not $n$. The same $n\ln n$ appears
in hashing, in load balancing, and in the number of random edges needed to make a graph connected
([Combinatorics, Chapter 17](../combinatorics/17-The-Probabilistic-Method.md)).

**Try it in Python.**

```python
import random

def collect(n):
    seen, t = set(), 0
    while len(seen) < n:
        seen.add(random.randrange(n)); t += 1
    return t

random.seed(1)
runs = [collect(6) for _ in range(100_000)]
print(sum(runs) / len(runs))   # close to 14.7
```

## 6.3 Variance and standard deviation

Two bets on the roulette wheel: 1 dollar on red, or 1 dollar on the single number 17 (which pays 35 to 1). Both have
expected gain $-1/19$ dollars. They are obviously different: the first rarely changes your wealth much, the second
usually loses and occasionally wins big. We need a number that measures **spread**.

The natural idea is the average distance from the mean, $E|X - \mu|$, but absolute values are awkward to compute with.
Squares are much friendlier.

**Definition.** If $E[X] = \mu$ is finite, the **variance** of $X$ is

$$
\operatorname{Var}(X) = E\big[(X - \mu)^2\big],
$$

and the **standard deviation** is $\sigma = \sqrt{\operatorname{Var}(X)}$. (The variance is often written $\sigma^2$.)

The variance is measured in squared units (dollars squared); the standard deviation is back in the original units,
and is the number to quote as "typical distance from the mean". Chapter 7 shows why: by Chebyshev's inequality, $X$ is
rarely more than a few standard deviations from $\mu$.

**Theorem 6.4.** (a) $\operatorname{Var}(X) = E[X^2] - (E[X])^2$. (b) $\operatorname{Var}(aX + b) = a^2\operatorname{Var}(X)$.
(c) $\operatorname{Var}(X) \ge 0$, with equality exactly when $P(X = \mu) = 1$.

*Proof.* (a) Expand the square and use linearity, remembering that $\mu$ is a constant:
$E[(X - \mu)^2] = E[X^2] - 2\mu E[X] + \mu^2 = E[X^2] - 2\mu^2 + \mu^2 = E[X^2] - \mu^2$.
(b) $aX + b$ has mean $a\mu + b$, so $(aX + b) - (a\mu + b) = a(X - \mu)$, whose square is $a^2(X-\mu)^2$; take
expectations. (c) $\operatorname{Var}(X) = \sum_i (x_i - \mu)^2 P(X = x_i)$ is a sum of nonnegative terms, and it is
zero exactly when every value $x_i$ with positive probability equals $\mu$. $\square$

Part (a) is the usual way to compute. Part (b) says that shifting does not change the spread and that scaling by $a$
scales the standard deviation by $|a|$. A consequence of (a) and (c) is the useful inequality
$E[X^2] \ge (E[X])^2$.

**Example 6.8 (a die).** $E[X^2] = 91/6$, so $\operatorname{Var}(X) = 91/6 - 49/4 = 35/12 \approx 2.92$ and
$\sigma \approx 1.71$.

**Example 6.9 (the two roulette bets).** On red, the gain $G$ is $\pm 1$, so $G^2 = 1$ always and
$\operatorname{Var}(G) = 1 - (1/19)^2 \approx 0.997$, $\sigma \approx 1.0$ dollar. On the single number, $G = 35$ with
probability $1/38$ and $-1$ with probability $37/38$, so $E[G^2] = (1225 + 37)/38 = 1262/38$ and
$\operatorname{Var}(G) = 1262/38 - (1/19)^2 \approx 33.2$, $\sigma \approx 5.76$ dollars. Same mean, standard
deviations differing by a factor of almost six.

**The variances of the families.** For counts, the **factorial moment** $E[X(X-1)]$ is often easier than $E[X^2]$,
and then $\operatorname{Var}(X) = E[X(X-1)] + E[X] - (E[X])^2$.

- *Bernoulli($p$):* $X^2 = X$, so $\operatorname{Var}(X) = p - p^2 = pq$. It is largest, $1/4$, for a fair coin.
- *Poisson($\lambda$):* $E[X(X-1)] = \sum_{k \ge 2} k(k-1)e^{-\lambda}\frac{\lambda^k}{k!} = \lambda^2 e^{-\lambda}\sum_{k\ge2}\frac{\lambda^{k-2}}{(k-2)!} = \lambda^2$,
  so $\operatorname{Var}(X) = \lambda^2 + \lambda - \lambda^2 = \lambda$. **For a Poisson count the variance equals the
  mean.** (Bortkiewicz's horse-kick data: mean 0.61, and the sample variance of the 200 counts is about 0.61 too. A
  count whose variance is much bigger than its mean is a sign that the Poisson model is wrong, for example because the
  events come in clusters.)
- *Geometric($p$):* differentiating the geometric series $\sum_{k\ge0} x^k = 1/(1-x)$ twice (allowed inside the radius
  of convergence) gives $\sum_{k \ge 2}k(k-1)x^{k-2} = 2/(1-x)^3$. So
  $E[X(X-1)] = \sum_k k(k-1)q^{k-1}p = pq \cdot \frac{2}{p^3} = \frac{2q}{p^2}$, and
  $\operatorname{Var}(X) = \frac{2q}{p^2} + \frac1p - \frac1{p^2} = \frac{q}{p^2}$. For the wait for a six,
  $\operatorname{Var} = (5/6)/(1/36) = 30$, $\sigma \approx 5.5$: almost as big as the mean of 6. Waiting times are very
  spread out.
- *Binomial($n, p$):* $\operatorname{Var}(X) = npq$. A direct computation works, but 6.4 gives a one-line proof.

## 6.4 Covariance and the variance of a sum

Expectation is linear. Variance is not: $\operatorname{Var}(X + Y)$ depends on how $X$ and $Y$ move together. Expand
it and see what appears. With $\mu_X = E[X]$, $\mu_Y = E[Y]$:

$$
\operatorname{Var}(X + Y) = E\big[((X - \mu_X) + (Y - \mu_Y))^2\big] = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2E\big[(X - \mu_X)(Y - \mu_Y)\big].
$$

The cross term gets a name.

**Definition.** The **covariance** of $X$ and $Y$ (both with finite variance) is

$$
\operatorname{Cov}(X, Y) = E\big[(X - \mu_X)(Y - \mu_Y)\big] = E[XY] - E[X]\,E[Y].
$$

(The second form follows by expanding and using linearity, exactly as in Theorem 6.4(a).) It is positive when $X$ and
$Y$ tend to be above their means together, negative when one tends to be above while the other is below. Note
$\operatorname{Cov}(X, X) = \operatorname{Var}(X)$, and covariance is linear in each slot:
$\operatorname{Cov}(aX + bY, Z) = a\operatorname{Cov}(X, Z) + b\operatorname{Cov}(Y, Z)$.

(Why is $E[XY]$ finite? Because $|XY| \le \tfrac12(X^2 + Y^2)$, which has finite expectation.)

**Theorem 6.5 (variance of a sum).** For random variables $X_1, \dots, X_n$ with finite variances,

$$
\operatorname{Var}\Big(\sum_{i=1}^n X_i\Big) = \sum_{i=1}^n \operatorname{Var}(X_i) + 2\sum_{i < j}\operatorname{Cov}(X_i, X_j).
$$

*Proof.* $\operatorname{Var}(\sum X_i) = \operatorname{Cov}(\sum_i X_i, \sum_j X_j) = \sum_{i}\sum_{j}\operatorname{Cov}(X_i, X_j)$
by linearity in each slot. The $n$ diagonal terms $i = j$ are the variances; the off-diagonal terms come in equal pairs
$(i, j)$ and $(j, i)$. $\square$

When are the covariances zero? Independence is enough.

**Theorem 6.6.** If $X$ and $Y$ are independent with finite expectations, then $E[XY] = E[X]\,E[Y]$, and so
$\operatorname{Cov}(X, Y) = 0$.

*Proof.* Using independence in the second step,

$$
E[XY] = \sum_{x, y} xy\,P(X = x, Y = y) = \sum_{x, y} xy\,P(X = x)P(Y = y) = \Big(\sum_x x P(X = x)\Big)\Big(\sum_y y P(Y = y)\Big).
$$

The double sum converges absolutely because the same computation with $|x||y|$ gives $E|X|\,E|Y| < \infty$, so the
rearrangement is allowed. $\square$

**Corollary 6.7.** If $X_1, \dots, X_n$ are independent (or merely pairwise uncorrelated, meaning every covariance is
0), then $\operatorname{Var}(X_1 + \dots + X_n) = \operatorname{Var}(X_1) + \dots + \operatorname{Var}(X_n)$.

Applications come at once.

- *Binomial:* a sum of $n$ independent Bernoulli($p$) variables, so $\operatorname{Var} = npq$. Ten fair flips:
  variance 2.5, standard deviation about 1.58.
- *Negative binomial:* a sum of $r$ independent geometrics, so $\operatorname{Var} = rq/p^2$.
**The sample mean.** If $X_1, \dots, X_n$ are i.i.d. with mean $\mu$ and variance $\sigma^2$, their average
  $\bar X_n = (X_1 + \dots + X_n)/n$ has

$$
E[\bar X_n] = \mu, \qquad \operatorname{Var}(\bar X_n) = \frac{1}{n^2}\cdot n\sigma^2 = \frac{\sigma^2}{n}.
$$

Averaging $n$ measurements divides the standard deviation by $\sqrt{n}$. This one formula drives Chapter 7: four
times the data halves the error.

**The converse is false.** Zero covariance does not imply independence. Let $X$ be uniform on $\{-1, 0, 1\}$ and
$Y = X^2$. Then $E[X] = 0$ and $E[XY] = E[X^3] = 0$, so $\operatorname{Cov}(X, Y) = 0$; but $Y$ is a function of $X$,
as dependent as can be ($P(X = 0, Y = 1) = 0 \ne P(X = 0)P(Y = 1) = \frac13 \cdot \frac23$). Covariance only detects
*linear* tendencies.

**Correlation.** Covariance depends on units (measure $X$ in centimetres instead of metres and it grows a hundredfold).
The **correlation coefficient** removes the units:

$$
\rho(X, Y) = \frac{\operatorname{Cov}(X, Y)}{\sigma_X\,\sigma_Y}.
$$

**Theorem 6.8.** $-1 \le \rho(X, Y) \le 1$, with $|\rho| = 1$ exactly when $Y = aX + b$ for some constants
$a \ne 0$, $b$ (with probability 1).

*Proof.* Let $U = (X - \mu_X)/\sigma_X$ and $V = (Y - \mu_Y)/\sigma_Y$, the **standardised** versions, with mean 0 and
variance 1. Then $\rho = E[UV]$, and

$$
0 \le \operatorname{Var}(U \pm V) = 1 + 1 \pm 2\rho.
$$

The plus sign gives $\rho \ge -1$ and the minus sign gives $\rho \le 1$. If $\rho = 1$ then $\operatorname{Var}(U - V) = 0$,
so $U - V$ is a constant (Theorem 6.4(c)), which is 0 since both have mean 0; so $U = V$, and solving gives $Y$ as a
linear function of $X$. The case $\rho = -1$ is the same with $U + V$. $\square$

This is the Cauchy-Schwarz inequality $|E[UV]|^2 \le E[U^2]E[V^2]$ in disguise. Chapter 11 returns to correlation, and
to the fact that a correlation between two quantities, however strong, does not by itself show that one causes the
other.

**Example 6.10.** Roll two dice, $D_1$ and $D_2$, and let $S = D_1 + D_2$. Then
$\operatorname{Cov}(D_1, S) = \operatorname{Cov}(D_1, D_1) + \operatorname{Cov}(D_1, D_2) = \frac{35}{12} + 0$, and
$\operatorname{Var}(S) = \frac{35}{6}$, so $\rho(D_1, S) = \frac{35/12}{\sqrt{35/12}\sqrt{35/6}} = \frac{1}{\sqrt 2}
\approx 0.71$.

## 6.5 The indicator method

*Level: intermediate.*

Examples 6.4 to 6.7 all used the same move, which deserves a name and a full statement.

**Definition.** The **indicator method**: to find the mean of a count $N$, write $N = \sum_i \mathbf{1}_{A_i}$ where
$A_i$ are the events being counted, and use

$$
E[\mathbf{1}_A] = P(A), \qquad \text{so} \qquad E[N] = \sum_i P(A_i).
$$

For the variance, one more fact: $\mathbf{1}_A \mathbf{1}_B = \mathbf{1}_{A \cap B}$, so
$\operatorname{Cov}(\mathbf{1}_A, \mathbf{1}_B) = P(A \cap B) - P(A)P(B)$, and Theorem 6.5 becomes

$$
\operatorname{Var}(N) = \sum_i P(A_i)\big(1 - P(A_i)\big) + 2\sum_{i<j}\big(P(A_i \cap A_j) - P(A_i)P(A_j)\big).
$$

The method needs only the probabilities of single events and of pairs, never the full distribution. Here is a gallery.

**Example 6.11 (hat-check variance).** With $A_i$ = "guest $i$ gets their own hat": $P(A_i) = 1/n$, and for $i \ne j$,
$P(A_i \cap A_j) = \frac{1}{n(n-1)}$ (guest $i$ gets hat $i$, then guest $j$ gets hat $j$ from the remaining $n - 1$).
So, for $n \ge 2$,

$$
\operatorname{Var}(N) = n\cdot\frac1n\Big(1 - \frac1n\Big) + 2\binom{n}{2}\Big(\frac{1}{n(n-1)} - \frac{1}{n^2}\Big) = \Big(1 - \frac1n\Big) + \Big(1 - \frac{n-1}{n}\Big) = 1.
$$

Mean 1 and variance 1, for every $n \ge 2$: just like Poisson(1). That is no coincidence: the number of fixed points of
a random permutation does tend to Poisson(1) as $n \to \infty$, and $P(N = 0) \to e^{-1}$ is the case $k = 0$.

**Example 6.12 (pairs sharing a birthday).** Among $k$ people (birthdays independent, uniform on 365 days), let $N$ be
the number of *pairs* with the same birthday. There are $\binom{k}{2}$ pairs, each matching with probability $1/365$,
so $E[N] = \binom{k}{2}/365$. For $k = 23$, $E[N] = 253/365 \approx 0.69$. Compare the birthday problem of
[Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md), where $P(N \ge 1) \approx 0.507$ for 23 people: the expected
number of matching pairs passes 1 at $k = 28$, while the probability of some match passes 1/2 already at 23.

**Example 6.13 (empty boxes and distinct values).** Throw $k$ balls independently and uniformly into $n$ boxes. Box $i$
is empty with probability $(1 - 1/n)^k$, so the expected number of empty boxes is $n(1 - 1/n)^k$. For 10 balls in 10
boxes, $10 \cdot 0.9^{10} \approx 3.49$ empty boxes. In the language of birthdays, 365 people have on average
$365\big(1 - (364/365)^{365}\big) \approx 230.9$ different birthdays: about 37% of the days, roughly $1 - 1/e$ of
them, are missed.

**Example 6.14 (runs).** Flip a fair coin $n$ times. A **run** is a maximal block of equal results; $HHTHHHT$ has 4
runs. The number of runs is 1 plus the number of positions $i \in \{1, \dots, n-1\}$ where flip $i + 1$ differs from
flip $i$. Each such change has probability $1/2$, so $E[\text{runs}] = 1 + (n - 1)/2 = (n + 1)/2$.

**Example 6.15 (records).** Shuffle the numbers $1, \dots, n$ into a random order and read them left to right. Position
$i$ is a **record** if its number is larger than every number before it. Among the first $i$ entries, each is equally
likely to be the largest (by symmetry: every ordering of those $i$ values is equally likely), so position $i$ is a
record with probability $1/i$. Hence

$$
E[\text{number of records}] = 1 + \frac12 + \dots + \frac1n = H_n \approx \ln n.
$$

For $n = 100$, about 5.19 records. If yearly rainfall totals were i.i.d. with no ties, a century would bring only about
five record-wet years; noticeably more is evidence against "i.i.d.". (The record events are in fact independent of each
other, a classical fact that is a good exercise once Chapter 11 is done.)

**Example 6.16 (the hypergeometric mean).** Draw $n$ balls without replacement from an urn with $K$ red among $N$. Let
$A_i$ be "draw $i$ is red". By symmetry each draw, considered alone, is equally likely to be any of the $N$ balls, so
$P(A_i) = K/N$ and $E[\text{reds}] = nK/N$, exactly as for the binomial. The draws are dependent, but linearity does
not care. (The variance does care: it is $n\frac{K}{N}\frac{N-K}{N}\frac{N-n}{N-1}$, smaller than the binomial's by the
factor $\frac{N-n}{N-1}$. Exercise 9 asks for the proof.)

**Example 6.17 (coupon collector, spread).** The stage lengths $T_i$ in Example 6.7 are independent (each stage only
looks at fresh boxes), so

$$
\operatorname{Var}(T) = \sum_{i=1}^{n}\frac{1 - p_i}{p_i^2} \le \sum_{i=1}^n \frac{1}{p_i^2} = n^2 \sum_{j=1}^{n}\frac{1}{j^2} < \frac{\pi^2}{6}\,n^2,
$$

using the substitution $j = n - i + 1$ and Euler's sum $\sum 1/j^2 = \pi^2/6$. So the standard deviation is less than
$1.29\,n$, much smaller than the mean $n \ln n$ when $n$ is large. Chapter 7 turns this into a statement that $T$ is
almost always close to $n\ln n$. For a die: $\operatorname{Var}(T) = 38.99$, standard deviation about 6.2 rolls around
the mean of 14.7.

## 6.6 The St Petersburg paradox

*Level: intermediate, with an advanced remark at the end.*

In 1713 Nicolaus Bernoulli (a nephew of Jacob) proposed a problem in a letter to Pierre Rémond de Montmort, who printed
it in the second edition of his *Essay d'analyse sur les jeux de hazard* that year. In its common modern form: a fair
coin is flipped until it first lands heads. If that happens on flip $k$, you are paid $2^k$ dollars. How much should you
pay to play?

The number of flips $K$ is Geom(1/2), so $P(K = k) = 2^{-k}$, and the expected payout is

$$
E[2^K] = \sum_{k=1}^{\infty} 2^k \cdot 2^{-k} = 1 + 1 + 1 + \dots = \infty.
$$

By the rule "pay up to the expected value", you should pay any price at all: your house, everything. Yet almost nobody
would pay even 25 dollars, and they are right: the payout is at most 4 dollars with probability $3/4$, and the chance of
getting back more than 25 dollars is the chance of at least 4 tails first, $1/16$.

The game is called after Daniel Bernoulli (Nicolaus's cousin), whose 1738 paper in the journal of the Imperial Academy
in St Petersburg proposed a resolution. Several answers have been given since; each is honest about a different flaw in
"pay the expected value".

**1. Money is not the same as value (utility).** Daniel Bernoulli argued that an extra dollar matters less to a rich
person than to a poor one, and proposed measuring the value (later called **utility**) of wealth $w$ by $\ln w$.
(Gabriel Cramer had suggested a similar idea, with a square root, in a 1728 letter that Bernoulli quotes.) The
simplest version: the expected *logarithm* of the payout is

$$
E[\log_2 2^K] = E[K] = 2,
$$

so the "typical" payout in the sense of the geometric mean is $2^2 = 4$ dollars. Bernoulli's own analysis includes the
player's existing wealth $w$: the fair price $c$ is the one with $E[\ln(w - c + 2^K)] = \ln w$. Solving numerically,
$c \approx 7.79$ dollars for $w = 100$, about 10.95 for $w = 1000$, about 20.87 for a millionaire. These are prices that
real people find sensible. The objection: if the payouts are made to grow even faster, say $e^{2^k}$, the expected
utility is infinite again. Utility explains reluctance, but not every version of the paradox.

**2. Nobody can pay infinity.** The expected value is infinite only because of astronomically rare, astronomically
large payouts. Any real casino has finite wealth. If the payout is capped at $2^{30}$ dollars (about 1.07 billion) then

$$
E[\text{payout}] = \sum_{k=1}^{30} 2^k 2^{-k} + \sum_{k=31}^{\infty} 2^{30}2^{-k} = 30 + 1 = 31 \text{ dollars}.
$$

Each doubling of the bank adds only 1 dollar to the fair price. The infinite expectation comes entirely from outcomes
that cannot happen.

**3. The expected value does not describe what you will see.** Chapter 7 shows that for variables with a *finite* mean,
the average of many independent plays approaches the mean. Here the mean is infinite, and the average of $n$ plays does
grow without bound, but slowly. William Feller proved in 1945 that if $S_n$ is the total payout of $n$ independent
games, then $S_n / (n \log_2 n) \to 1$ in probability (the kind of convergence defined in Chapter 7). So a "fair"
entry fee, if you play $n$ times, is about $\log_2 n$ dollars per game: about 10 for a thousand games, 20 for a
million. The fair price depends on how many times you play, which is exactly what an infinite mean means.

None of these "solves" the paradox once and for all; together they show that the expected value is a good guide to a
decision only when the mean is finite, the variance is not enormous, and the game is repeated many times. When those
fail, other summaries (utility, medians, the whole distribution) must take over.

*Advanced remark.* Behind point 3 is a whole theory: the **stable laws** of Lévy and Khinchin, which describe sums of
i.i.d. variables with infinite variance, and in which the St Petersburg game is a classic awkward case (its sums
have no limiting distribution under any normalisation; limits exist only along special subsequences such as
$n = 2^m$, a result of Anders Martin-Löf, 1985). See Feller, Volume II, for stable laws, and Chapter 12 of this book for
the case of finite variance.

<figure class="play" data-play="stpete"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The St Petersburg game: an infinite expected win, yet the average over many plays creeps up only slowly.</figcaption></figure>

## A short history

The idea of an expected value is older than the word "probability" in its modern sense. Christiaan Huygens's short
treatise *De ratiociniis in ludo aleae* ("On reasoning in games of chance", 1657), written after he heard of the
Pascal-Fermat correspondence, is built on the "value of a chance" (in Latin *expectatio*): the fair price of a gamble.
Jacob Bernoulli's *Ars Conjectandi* (1713) reprinted Huygens's treatise with commentary. Linearity was used freely from
the start, for instance in Montmort's work on the matching problem (the hat-check problem in another form), which he
studied in the 1708 first edition of his *Essay*. Variance as a measure of spread came much later; the word
"variance" was introduced by R. A. Fisher in 1918, though the standard deviation (named by Karl Pearson in 1894) and
the rule that variances of independent errors add were in use throughout the nineteenth century.

## Check yourself

??? question "1. Let $X$ be uniform on $\{1, 2, \dots, n\}$. Find $E[X]$ and $\operatorname{Var}(X)$."

    $E[X] = \frac1n \cdot \frac{n(n+1)}{2} = \frac{n+1}{2}$. $E[X^2] = \frac1n\cdot\frac{n(n+1)(2n+1)}{6} = \frac{(n+1)(2n+1)}{6}$.
    So $\operatorname{Var}(X) = \frac{(n+1)(2n+1)}{6} - \frac{(n+1)^2}{4} = \frac{(n+1)\big(2(2n+1) - 3(n+1)\big)}{12} = \frac{(n+1)(n-1)}{12} = \frac{n^2-1}{12}$.
    Check with $n = 6$: $35/12$.

??? question "2. A lottery ticket costs 2 dollars. It wins 1,000,000 dollars with probability 1 in 10,000,000 and 100 dollars with probability 1 in 10,000; otherwise nothing. What is the expected net gain?"

    Expected winnings: $10^6 \cdot 10^{-7} + 100 \cdot 10^{-4} = 0.1 + 0.01 = 0.11$ dollars. Net: $0.11 - 2 = -1.89$
    dollars per ticket.

??? question "3. Roll a die 10 times. Find the mean and the variance of the number of sixes."

    $\text{Bin}(10, 1/6)$: mean $10/6 \approx 1.67$, variance $10 \cdot \frac16 \cdot \frac56 = \frac{50}{36} \approx 1.39$.

??? question "4. A poker hand is 5 cards from a shuffled 52-card deck. What is the expected number of aces? Of hearts?"

    Let $A_i$ be "card $i$ of the hand is an ace"; each card is equally likely to be any of the 52, so
    $P(A_i) = 4/52$ and the expected number of aces is $5 \cdot 4/52 = 5/13 \approx 0.385$. Hearts: $5 \cdot 13/52 = 1.25$.

??? question "5. Roll a die 6 times. What is the expected number of different faces you see?"

    Face $j$ is missed with probability $(5/6)^6$, so it is seen with probability $1 - (5/6)^6$. Summing over the 6 faces,
    $E = 6\big(1 - (5/6)^6\big) \approx 3.99$.

??? question "6. Let $X$ and $Y$ be independent rolls of a die. Show that $\operatorname{Cov}(X + Y, X - Y) = 0$, but that $X + Y$ and $X - Y$ are not independent."

    By bilinearity, $\operatorname{Cov}(X + Y, X - Y) = \operatorname{Var}(X) - \operatorname{Cov}(X, Y) + \operatorname{Cov}(Y, X) - \operatorname{Var}(Y) = \operatorname{Var}(X) - \operatorname{Var}(Y) = 0$.
    But $P(X + Y = 12, X - Y = 0) = 1/36$ while $P(X + Y = 12)P(X - Y = 0) = \frac{1}{36}\cdot\frac{6}{36}$, which is
    different. (Also, $X + Y = 12$ forces $X - Y = 0$.)

??? question "7. Roll a die until some face appears for the second time. Find the expected number of rolls."

    Let $T$ be the number of rolls. $T > k$ means the first $k$ rolls are all different, which has probability
    $\frac{6 \cdot 5 \cdots (6 - k + 1)}{6^k}$ for $k \le 6$ and 0 for $k \ge 7$. By the tail sum formula (in the form
    $E[T] = \sum_{k \ge 0}P(T > k)$),
    $E[T] = 1 + 1 + \frac56 + \frac{5\cdot4}{36} + \frac{5\cdot4\cdot3}{216} + \frac{5\cdot4\cdot3\cdot2}{1296} + \frac{5!}{7776} = \frac{1223}{324} \approx 3.77$.

??? question "8. Show that if $N$ is the number of fixed points of a random permutation of $n \ge 2$ objects, then $E[N^2] = 2$."

    From Example 6.11, $E[N] = 1$ and $\operatorname{Var}(N) = 1$, so $E[N^2] = \operatorname{Var}(N) + (E[N])^2 = 2$.

??? question "9. Prove the hypergeometric variance: drawing $n$ without replacement from $N$ balls of which $K$ are red, the number of reds has variance $n\frac{K}{N}\frac{N-K}{N}\frac{N-n}{N-1}$."

    Let $A_i$ = "draw $i$ is red", $p = K/N$. Then $P(A_i) = p$, and for $i \ne j$ the pair of draws $(i, j)$ is
    equally likely to be any ordered pair of distinct balls, so $P(A_i \cap A_j) = \frac{K(K-1)}{N(N-1)}$. The covariance
    of each pair is $\frac{K(K-1)}{N(N-1)} - \frac{K^2}{N^2} = -\frac{K(N-K)}{N^2(N-1)}$. So
    $\operatorname{Var} = np(1-p) - n(n-1)\frac{K(N-K)}{N^2(N-1)} = n\frac{K(N-K)}{N^2}\Big(1 - \frac{n-1}{N-1}\Big) = n\frac{K}{N}\frac{N-K}{N}\frac{N-n}{N-1}$.

??? question "10. A random permutation of $n$ objects is written in cycles. Show that the expected number of cycles of length $k$ is $1/k$, and deduce that the expected total number of cycles is $H_n$."

    A particular $k$-cycle is a choice of $k$ objects ($\binom{n}{k}$ ways) and a cyclic order on them ($(k-1)!$ ways).
    A given $k$-cycle appears in the permutation exactly when the permutation does that on those $k$ objects, which
    leaves $(n - k)!$ choices for the rest, so it appears with probability $(n-k)!/n!$. By the indicator method the
    expected number of $k$-cycles is $\binom{n}{k}(k-1)!\frac{(n-k)!}{n!} = \frac{(k-1)!}{k!} = \frac1k$. Summing over
    $k = 1, \dots, n$ gives $H_n$. (The case $k = 1$ is the hat-check answer, 1.)

??? question "11. Show that for any random variable with finite variance, the number $c$ minimising $E[(X - c)^2]$ is $c = E[X]$."

    $E[(X - c)^2] = E[(X - \mu)^2] + 2(\mu - c)E[X - \mu] + (\mu - c)^2 = \operatorname{Var}(X) + (\mu - c)^2$, because
    $E[X - \mu] = 0$. This is smallest exactly when $c = \mu$. (So the mean is the best single guess under squared
    error; under absolute error the best guess is a median.)

??? question "12. (Harder.) In the St Petersburg game with payout $2^K$, show that $P(\text{payout} > x) \ge 1/x$ for every $x \ge 2$, and explain why this tail alone forces an infinite mean."

    For $x \ge 2$ let $m = \lfloor \log_2 x \rfloor \ge 1$, so $2^m \le x < 2^{m+1}$. Payout $> x$ happens whenever
    $K \ge m + 1$, which has probability $2^{-m} \ge 1/x$. For a nonnegative variable $Y$,
    $E[Y] \ge \sum_{j \ge 1} P(Y \ge j)$ (tail sum on $\lfloor Y \rfloor$), and $\sum_j P(Y > j) \ge \sum_{j \ge 2} 1/j = \infty$.
    A tail as heavy as $1/x$ always gives an infinite mean.

## What you learned

- $E[X] = \sum x\,P(X = x)$ when the sum converges absolutely; for counts, $E[X] = \sum_{k \ge 1}P(X \ge k)$; and
  $E[g(X)] = \sum g(x)P(X = x)$.
- Expectation is linear, with no independence needed. With indicators, the mean of any count is the sum of the
  probabilities of the events counted: hat-check (mean 1), coupon collector ($nH_n$), records ($H_n$).
- $\operatorname{Var}(X) = E[X^2] - (E[X])^2$; $\operatorname{Var}(aX + b) = a^2\operatorname{Var}(X)$.
- Means and variances: Bernoulli $p, pq$; binomial $np, npq$; geometric $1/p, q/p^2$; Poisson $\lambda, \lambda$.
- $\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y)$; independence
  gives zero covariance, but not conversely; the mean of $n$ i.i.d. values has variance $\sigma^2/n$.
- The correlation lies in $[-1, 1]$, with $\pm 1$ only for exact linear relations.
- An infinite expected value (St Petersburg) is a warning that the mean no longer describes what happens.

**Next:** [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md) uses the mean and variance to bound how far a
random variable can stray, and proves that averages of many trials settle down to the mean.

## Further reading

- S. Ross, *A First Course in Probability*, 10th edition, 2019: Chapters 4 and 7 (expectation, with a large stock of
  indicator problems).
- J. Pitman, *Probability*, 1993: Chapter 3 and Chapter 6.
- W. Feller, *An Introduction to Probability Theory and Its Applications*, Volume I, 3rd edition, 1968: Chapter IX
  (with the St Petersburg game in Section X.4).
- W. Feller, "Note on the law of large numbers and 'fair' games", *Annals of Mathematical Statistics* 16, 1945.
- D. Bernoulli, "Exposition of a new theory on the measurement of risk" (English translation of the 1738 paper),
  *Econometrica* 22, 1954.
- M. Mitzenmacher and E. Upfal, *Probability and Computing*, 2nd edition, 2017: Chapters 2 and 3 for the coupon
  collector and other indicator arguments in computer science.
- On this site: [Expected value](../../topics/probability/level-7/02-expected-value.md),
  [Spread of a random variable](../../topics/probability/level-7/03-variance-spread.md);
  [Combinatorics, Chapter 5](../combinatorics/05-Inclusion-Exclusion.md) for derangements and
  [Chapter 17](../combinatorics/17-The-Probabilistic-Method.md) for linearity of expectation as a proof method;
  the MAT137 guide on [series](../../uoft/MAT137/unit13.md) for the harmonic and geometric series.
