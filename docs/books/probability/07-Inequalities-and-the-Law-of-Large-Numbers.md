# 7. Inequalities and the law of large numbers

*Flip a fair coin a thousand times and you will get close to 500 heads, though almost never exactly 500. Why "close",
and how close? Chapter 6 gave every random variable a mean and a spread. This chapter turns those two numbers into
guarantees. Markov's and Chebyshev's inequalities say how unlikely it is to land far from the mean, knowing nothing
else about the distribution. From Chebyshev you will prove the weak law of large numbers, which makes "probability is
long-run frequency" a theorem rather than a definition. Then you will see what the law does not say (the gambler's
fallacy), sharpen the bounds from polynomial to exponential with Chernoff's method, and use all of it to estimate
$\pi$ by throwing random points at a square, with an honest account of the error.*

!!! abstract "In this chapter"
    **You will learn:**

    - Markov's inequality and Chebyshev's inequality, with proofs, and examples showing they cannot be improved in general
    - what "convergence in probability" means, and the weak law of large numbers, with a full proof
    - what the law of large numbers does not say: no "law of averages" that evens things out, no rate, no help without a finite mean
    - Chernoff's method: exponential tail bounds, proved for coin flips and for sums of independent 0-1 variables
    - how Monte Carlo simulation estimates a number, and why its error shrinks like $1/\sqrt{n}$

    **You need:** [Chapter 6](06-Expectation-and-Variance.md) (expectation, variance, the variance of a sum, the
    mean of $n$ i.i.d. values). The series for $e^x$ is used in 7.4. Gentler versions:
    [The law of large numbers and the central limit theorem](../../topics/probability/level-8/05-large-numbers-clt.md),
    [Monte Carlo methods](../../topics/probability/level-8/07-monte-carlo.md),
    [The gambler's fallacy](../../topics/probability/level-5/06-gamblers-fallacy.md).

    **Levels:** 7.1, 7.2, 7.3 and 7.5 are intermediate; 7.4 is advanced.

## 7.1 Markov and Chebyshev

Suppose all you know about the households in a town is that their average income is 60,000 dollars. Can half of them
earn 300,000 dollars or more? No: those households alone would contribute at least $\tfrac12 \cdot 300{,}000 = 150{,}000$
dollars to the average, and incomes are not negative. In fact at most one household in five can earn that much. This
little argument is the first and most basic inequality of probability.

**Theorem 7.1 (Markov's inequality).** If $X \ge 0$ and $a > 0$, then

$$
P(X \ge a) \le \frac{E[X]}{a}.
$$

*Proof.* Compare $X$ with the random variable $a\,\mathbf{1}_{\{X \ge a\}}$, which is $a$ when $X \ge a$ and 0
otherwise. In the first case $X \ge a$, and in the second $X \ge 0$; so in every outcome
$X \ge a\,\mathbf{1}_{\{X \ge a\}}$. Taking expectations (a larger variable has a larger mean) gives
$E[X] \ge a\,P(X \ge a)$. $\square$

For the town, $P(\text{income} \ge 300{,}000) \le 60{,}000/300{,}000 = 1/5$.

**It cannot be improved** without more information. Let $X = a$ with probability $\mu/a$ and $X = 0$ otherwise (with
$0 < \mu \le a$). Then $E[X] = \mu$ and $P(X \ge a) = \mu/a$ exactly. But for most distributions Markov is very weak:
it uses only the mean, and it needs $X \ge 0$ (for a variable that can be negative it says nothing at all).

Markov's inequality becomes powerful when applied not to $X$ but to some well-chosen function of $X$. The first such
choice is the squared distance from the mean.

**Theorem 7.2 (Chebyshev's inequality).** If $X$ has mean $\mu$ and finite variance $\sigma^2$, then for every
$a > 0$,

$$
P(|X - \mu| \ge a) \le \frac{\sigma^2}{a^2}, \qquad \text{equivalently} \qquad P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}.
$$

*Proof.* The events $\{|X - \mu| \ge a\}$ and $\{(X - \mu)^2 \ge a^2\}$ are the same. Apply Markov's inequality to the
nonnegative variable $(X - \mu)^2$, whose mean is $\sigma^2$:
$P\big((X - \mu)^2 \ge a^2\big) \le \sigma^2/a^2$. For the second form put $a = k\sigma$. $\square$

In words: **whatever the distribution, at most 1/4 of the probability lies 2 or more standard deviations from the mean,
at most 1/9 lies 3 or more away, at most 1/100 lies 10 or more away.** This is the precise sense in which the standard
deviation is the "typical distance from the mean".

**Example 7.1.** Flip a fair coin 100 times; the number of heads $X$ is $\text{Bin}(100, 1/2)$ with mean 50, variance
25, standard deviation 5. Chebyshev: $P(|X - 50| \ge 10) \le 25/100 = 0.25$. The exact value, by adding binomial
probabilities, is about 0.057. Chebyshev is correct but cautious: it must hold for every distribution with this mean and
variance, including strange ones.

**It cannot be improved either.** For $k \ge 1$ let $X = -k$ or $k$ with probability $\frac{1}{2k^2}$ each, and
$X = 0$ otherwise. Then $\mu = 0$, $\sigma^2 = k^2 \cdot \frac{1}{k^2} = 1$, and $P(|X| \ge k) = 1/k^2$ exactly.

**Example 7.2 (the coupon collector is predictable).** In Example 6.7, collecting $n$ coupons took $T$ boxes with
$E[T] = nH_n$ and (Example 6.17) $\operatorname{Var}(T) < \frac{\pi^2}{6}n^2$. Chebyshev gives, for any $c > 0$,

$$
P\big(|T - nH_n| \ge cn\big) < \frac{\pi^2}{6c^2}.
$$

With $c = 4$ this is about 0.10. For $n = 1000$ coupons: $nH_n \approx 7485$, and with probability at least 0.9 the
collection takes between about 3485 and 11485 boxes. More interesting is the relative statement: take $c = \varepsilon H_n$
for a fixed $\varepsilon > 0$. Then $P\big(|T - nH_n| \ge \varepsilon\, nH_n\big) < \frac{\pi^2}{6\varepsilon^2 H_n^2} \to 0$
as $n \to \infty$, because $H_n \to \infty$. So $T/(nH_n)$ is close to 1 with probability tending to 1, and since
$H_n/\ln n \to 1$, the time to collect $n$ coupons is $n\ln n$ "to first order" with high probability, not just on
average.

## 7.2 The weak law of large numbers

Chapter 1 described probability, in one of its three views, as long-run frequency: if an event has probability $p$,
then in many independent repetitions it happens about a fraction $p$ of the time. With Chebyshev's inequality we can
now prove this, from the axioms, as a theorem.

First we need to say precisely what "about" means for random quantities.

**Definition.** A sequence of random variables $Y_1, Y_2, \dots$ **converges in probability** to a constant $c$ if, for
every $\varepsilon > 0$,

$$
P(|Y_n - c| \ge \varepsilon) \to 0 \quad \text{as } n \to \infty.
$$

In words: however small a tolerance $\varepsilon$ you choose, the chance that $Y_n$ misses $c$ by more than
$\varepsilon$ becomes negligible as $n$ grows.

**Theorem 7.3 (weak law of large numbers).** Let $X_1, X_2, \dots$ be random variables with the same mean $\mu$ and
with variances at most $\sigma^2$, and suppose they are pairwise uncorrelated (for instance, independent). Let
$\bar X_n = (X_1 + \dots + X_n)/n$. Then $\bar X_n \to \mu$ in probability. More precisely, for every $\varepsilon > 0$,

$$
P\big(|\bar X_n - \mu| \ge \varepsilon\big) \le \frac{\sigma^2}{n\varepsilon^2}.
$$

*Proof.* By linearity $E[\bar X_n] = \mu$. Because the covariances are zero, Corollary 6.7 gives
$\operatorname{Var}(X_1 + \dots + X_n) = \sum \operatorname{Var}(X_i) \le n\sigma^2$, so
$\operatorname{Var}(\bar X_n) = \frac{1}{n^2}\operatorname{Var}(X_1 + \dots + X_n) \le \frac{\sigma^2}{n}$. Chebyshev's
inequality applied to $\bar X_n$ gives the bound, and $\sigma^2/(n\varepsilon^2) \to 0$ as $n \to \infty$. $\square$

That is the whole proof: the spread of the average shrinks like $\sigma/\sqrt{n}$, and Chebyshev converts small spread
into high probability of being close.

**Corollary 7.4 (Bernoulli's theorem).** In $n$ independent trials each succeeding with probability $p$, the proportion
of successes converges in probability to $p$.

*Proof.* Apply Theorem 7.3 to the indicators $X_i$ of success on trial $i$: mean $p$, variance $p(1-p) \le 1/4$. $\square$

So the frequency view of probability is not an extra assumption: given the axioms and independence, frequencies
*must* settle down to probabilities. (The argument is not circular, but it is worth noticing what it uses: the
conclusion is itself a statement about probability, "with probability close to 1". Chapter 1's discussion of the three
views applies here too.)

**Example 7.3 (how many flips?).** How many flips of a fair coin make us 95% sure that the proportion of heads is within
0.01 of 1/2? The bound gives $P(|\bar X_n - \tfrac12| \ge 0.01) \le \frac{1/4}{n \cdot 0.0001}$, and this is at most
0.05 once $n \ge 50{,}000$. That is guaranteed, but it is pessimistic: the central limit theorem (Chapters 10 and 12)
shows that about 9,600 flips are enough, and Chernoff's bound (7.4) proves that 18,445 are enough.

**Bigger laws.** Theorem 7.3 needs finite variances. For i.i.d. variables this is more than necessary.

**Theorem 7.5 (Khinchin's weak law; statement).** If $X_1, X_2, \dots$ are i.i.d. with finite mean $\mu$ (the variance
may be infinite), then $\bar X_n \to \mu$ in probability.

The proof (Khinchin, 1929) cuts each $X_i$ into a bounded part, to which the Chebyshev argument applies, and a rare
large part, controlled by the finite mean. It is in Durrett's *Probability: Theory and Examples*, Chapter 2. There is
also a **strong law** (Kolmogorov, 1933): under the same hypothesis, $\bar X_n \to \mu$ *with probability 1*, a
stronger kind of convergence. Chapter 12 states it and explains the difference, and Chapter 17 makes the kinds of
convergence precise.

<figure class="play" data-play="coinruns"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The law of large numbers: the share of heads in n flips crowds ever closer to one half as n grows.</figcaption></figure>

## 7.3 What the law does and does not say

The law of large numbers is one of the most quoted and most misquoted results in mathematics. Here is what it does not
say.

**It does not say that luck evens out.** After ten heads in a row, many people feel tails is "due", by "the law of
averages". But the coin has no memory: the next flip is independent of the first ten, and has probability 1/2 of being
heads, exactly as before (Theorem 5.4 is the same fact for waiting times). This mistake is the **gambler's fallacy**.

How does the proportion of heads still go to 1/2, then? Not by compensation but by **swamping**. Suppose the first 10
flips were all heads. In the next 1000 flips you expect 500 heads, so you expect $510$ heads in $1010$ flips, a proportion
of $0.505$; after another million flips, $0.500005$. The extra 10 heads are never taken back. They are just
diluted.

In fact the raw *difference* between heads and tails does not shrink at all; it grows. If $H_n$ is the number of heads
in $n$ fair flips, then $|H_n - n/2|$ is typically of size $\sqrt{n}$ (its standard deviation is $\sqrt{n}/2$). Exact
computation gives

| $n$ | $E\,\lvert H_n - n/2\rvert$ | $E\,\lvert H_n/n - 1/2\rvert$ |
|---|---|---|
| 100 | 3.98 | 0.040 |
| 10,000 | 39.9 | 0.0040 |

A hundred times more flips makes the expected gap between heads and tails ten times *larger*, while the gap in
*proportions* becomes ten times *smaller*. (The values are close to $\sqrt{n/(2\pi)}$, which the central limit theorem
explains.) The law of large numbers is a statement about proportions only.

**It does not say anything about small samples.** In a classic experiment, Amos Tversky and Daniel Kahneman (1974)
asked people this. One hospital has about 45 births a day, another about 15. Over a year, which records more days on
which more than 60% of the babies born are boys? Most people answered "about the same". But small samples vary more.
Taking each birth to be a boy with probability 1/2 independently, the chance of more than 60% boys is
$P(\text{Bin}(15, \tfrac12) \ge 10) \approx 0.151$ for the small hospital and $P(\text{Bin}(45, \tfrac12) \ge 28) \approx 0.068$
for the large one: the small hospital has more than twice as many such days. Tversky and Kahneman called the
expectation that small samples resemble the population "the law of small numbers", as a joke.

**It does not give a rate, by itself.** "Converges in probability" says the chance of a miss goes to 0, not how fast.
Chebyshev gives the rate $1/n$; 7.4 gives an exponential rate; the central limit theorem (Chapter 12) gives the exact
shape of the errors.

**It needs a finite mean.** For the St Petersburg game (6.6) the mean is infinite and the average payout does not
settle down; it grows like $\log_2 n$. For the Cauchy distribution (Chapter 12) the average of $n$ samples has exactly
the same distribution as one sample, and it never settles at all.

**It needs independence, or something like it.** If $X_2 = X_3 = \dots = X_1$ (the same coin result copied over and
over), then $\bar X_n = X_1$ for every $n$, which is 0 or 1, never close to 1/2. The proof used independence only
through the zero covariances; weaker conditions, such as covariances that die away with distance, are enough, and
this is why the law applies to many dependent processes, such as the Markov chains of Chapter 13.

## 7.4 Chernoff bounds

*Level: advanced.*

Chebyshev says the chance that 1000 fair flips give 600 or more heads, or 400 or fewer, is at most
$250/100^2 = 0.025$. The truth is about $2.7 \times 10^{-10}$. Chebyshev is off by a factor of ten million, because it
uses only the variance. Using the whole distribution gives far better bounds, and the trick is again Markov's
inequality, applied this time to an exponential.

**Theorem 7.6 (Chernoff's method).** For any random variable $X$, any number $a$ and any $t > 0$,

$$
P(X \ge a) \le e^{-ta}\, E\big[e^{tX}\big].
$$

*Proof.* Since $t > 0$, the function $x \mapsto e^{tx}$ is increasing, so $\{X \ge a\} = \{e^{tX} \ge e^{ta}\}$. Apply
Markov's inequality to the positive variable $e^{tX}$. $\square$

The function $M(t) = E[e^{tX}]$ is the **moment generating function**, studied in Chapter 8. The power of the method
comes from two facts: for a sum of independent variables, $E[e^{t(X_1 + \dots + X_n)}] = \prod_i E[e^{tX_i}]$ (Theorem
6.6 applied to the independent variables $e^{tX_i}$), so the bound is a product of $n$ equal factors; and we may choose
the best $t$ afterwards.

### Fair coins

**Lemma 7.7.** For every real $x$, $\cosh x = \frac{e^x + e^{-x}}{2} \le e^{x^2/2}$.

*Proof.* Use the series $e^x = \sum_k x^k/k!$. The odd powers cancel in $\cosh x$, leaving
$\cosh x = \sum_{k \ge 0} \frac{x^{2k}}{(2k)!}$, while $e^{x^2/2} = \sum_{k \ge 0}\frac{x^{2k}}{2^k k!}$. Compare term
by term: $(2k)! = (2k)(2k-1)\cdots(k+1) \cdot k! \ge 2^k\, k!$, because each of the $k$ factors $2k, 2k-1, \dots, k+1$ is at least 2.
So each term of the first series is at most the matching term of the second. $\square$

**Theorem 7.8 (Chernoff-Hoeffding bound for fair coins).** Let $H_n$ be the number of heads in $n$ fair flips. For every
$\delta > 0$,

$$
P\Big(H_n \ge \big(\tfrac12 + \delta\big)n\Big) \le e^{-2\delta^2 n}, \qquad P\Big(\big|H_n - \tfrac n2\big| \ge \delta n\Big) \le 2e^{-2\delta^2 n}.
$$

*Proof.* Write $H_n - n/2 = \sum_{i=1}^n Y_i$ with $Y_i = X_i - \tfrac12 = \pm\tfrac12$, each with probability $1/2$,
independent. For $t > 0$,
$E[e^{tY_i}] = \tfrac12(e^{t/2} + e^{-t/2}) = \cosh(t/2) \le e^{t^2/8}$ by the lemma. By Theorem 7.6 and independence,

$$
P\Big(\sum Y_i \ge \delta n\Big) \le e^{-t\delta n}\prod_{i=1}^n E[e^{tY_i}] \le e^{-t\delta n + nt^2/8}.
$$

The exponent $-t\delta n + nt^2/8$ is a parabola in $t$, smallest at $t = 4\delta$, where it equals $-2\delta^2 n$. This
proves the first bound. The lower tail $P(H_n \le (\tfrac12 - \delta)n)$ is the same, because the number of tails
$n - H_n$ has the same distribution as $H_n$; adding the two tails gives the second bound. $\square$

Compare the three answers for 1000 flips and a deviation of 100 or more ($\delta = 0.1$):

| method | bound on $P(\lvert H_n - 500\rvert \ge 100)$ |
|---|---|
| Chebyshev | 0.025 |
| Chernoff-Hoeffding $2e^{-20}$ | $4.1 \times 10^{-9}$ |
| exact | $2.7 \times 10^{-10}$ |

The bound now has the right *kind* of behaviour, decaying exponentially in $n$, and it is within a factor of about 15
of the truth. In Example 7.3, $2e^{-2\delta^2 n} \le 0.05$ with $\delta = 0.01$ needs $n \ge \ln(40)/(2 \cdot 0.0001)$,
about 18,445 flips, compared with Chebyshev's 50,000.

Wassily Hoeffding (1963) proved the same bound for any independent variables with values in intervals: if
$a_i \le X_i \le b_i$, then $P\big(\sum (X_i - E X_i) \ge s\big) \le \exp\big(-2s^2/\sum (b_i - a_i)^2\big)$. Its proof
replaces Lemma 7.7 by "Hoeffding's lemma", which needs a little calculus; it is in Mitzenmacher and Upfal's book,
Chapter 4. We will use the statement in 7.5.

### Rare successes

When success is rare, Hoeffding's bound is poor, because it sees only the range $[0, 1]$ of each trial and not the
small probability. Herman Chernoff's (1952) bound, in the form computer scientists use, measures deviations relative
to the mean.

**Theorem 7.9 (multiplicative Chernoff bound).** Let $X = X_1 + \dots + X_n$ with $X_i$ independent and
$X_i \sim \text{Bernoulli}(p_i)$, and let $\mu = E[X] = \sum p_i$. For every $\delta > 0$,

$$
P\big(X \ge (1 + \delta)\mu\big) \le \left(\frac{e^{\delta}}{(1 + \delta)^{1 + \delta}}\right)^{\mu},
$$

and for $0 < \delta \le 1$ this is at most $e^{-\delta^2\mu/3}$.

*Proof.* For $t > 0$, $E[e^{tX_i}] = 1 - p_i + p_i e^t = 1 + p_i(e^t - 1) \le \exp\big(p_i(e^t - 1)\big)$, using
$1 + y \le e^y$ (true for all real $y$: the curve $e^y$ lies above its tangent line at 0). Multiplying,
$E[e^{tX}] \le \exp\big(\mu(e^t - 1)\big)$. Theorem 7.6 with $a = (1+\delta)\mu$ gives

$$
P\big(X \ge (1+\delta)\mu\big) \le \exp\big(\mu(e^t - 1) - t(1+\delta)\mu\big).
$$

Choose $t = \ln(1 + \delta) > 0$; then $e^t - 1 = \delta$ and the exponent becomes $\mu\big(\delta - (1+\delta)\ln(1+\delta)\big)$,
which is the first bound.

For the second, we need $(1+\delta)\ln(1+\delta) \ge \delta + \delta^2/3$ on $[0, 1]$. Let
$f(\delta) = (1+\delta)\ln(1+\delta) - \delta - \delta^2/3$. Then $f(0) = 0$ and $f'(\delta) = \ln(1+\delta) - 2\delta/3$,
with $f'(0) = 0$ and $f''(\delta) = \frac{1}{1+\delta} - \frac23$. So $f'' > 0$ on $[0, \tfrac12)$ and $f'' < 0$ on
$(\tfrac12, 1]$: $f'$ rises from 0 and then falls, ending at $f'(1) = \ln 2 - \tfrac23 \approx 0.026 > 0$. Hence $f' \ge 0$
on $[0, 1]$, and $f \ge 0$ there. $\square$

**Example 7.4.** 10,000 independent trials, each succeeding with probability 0.001: $\mu = 10$. What is the chance of
20 or more successes? Hoeffding, which sees only that each trial lies in $[0, 1]$, gives
$\exp(-2 \cdot 10^2/10^4) \approx 0.98$: useless. The multiplicative bound with $\delta = 1$ gives
$(e/4)^{10} \approx 0.021$. The exact binomial value is about 0.0034. The simple form $e^{-\delta^2\mu/3} = e^{-10/3}
\approx 0.036$ is weaker but easy to remember.

**How sharp can it get?** Chernoff's method is sharp in the exponent. For fair coins, Harald Cramér's theorem (1938)
says that for $\tfrac12 < a < 1$,

$$
P(H_n \ge an) = e^{-n I(a) + o(n)}, \qquad I(a) = a\ln(2a) + (1-a)\ln\big(2(1-a)\big),
$$

where $o(n)$ stands for a term that is small compared with $n$. The rate $I(a)$ is exactly what Chernoff's method gives
when the best $t$ is chosen for the exact moment generating function (Exercise 10), and it is the **relative entropy**
of a coin with bias $a$ from a fair coin, which Chapter 18 studies under the name Kullback-Leibler divergence. For
$a = 0.6$ and $n = 1000$, $nI(a) \approx 20.1$, so Chernoff gives $e^{-20.1} \approx 1.8 \times 10^{-9}$ for the one
tail, compared with the exact $1.4 \times 10^{-10} \approx e^{-22.7}$; the gap is the $o(n)$ term, which here is of order
$\ln n$.

Chernoff bounds are the everyday tool of the analysis of randomized algorithms ([Chapter 19](19-Randomness-in-Computing.md))
and of the probabilistic method ([Combinatorics, Chapter 17](../combinatorics/17-The-Probabilistic-Method.md)), and
the start of the subject of **concentration of measure** (Chapter 20).

## 7.5 Monte Carlo estimation of pi

The law of large numbers turns any probability into something you can measure by simulation, and so any number that
can be written as a probability into something you can estimate. Here is the classic first example.

Choose a point $(U, V)$ uniformly at random in the unit square $[0, 1] \times [0, 1]$, by choosing $U$ and $V$
independently and uniformly in $[0, 1]$. (Uniform random numbers in an interval are continuous random variables,
treated properly in Chapter 9; here all we need is that the probability of landing in a region of the square is its
area.) The point lies inside the quarter circle $U^2 + V^2 \le 1$ with probability

$$
p = \frac{\text{area of quarter disc}}{\text{area of square}} = \frac{\pi/4}{1} = \frac{\pi}{4}.
$$

So if we throw $n$ independent points and $K$ of them land inside, $K/n$ estimates $\pi/4$ and $\hat\pi_n = 4K/n$
estimates $\pi$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 235" role="img" aria-label="A unit square with a quarter circle centred at its lower left corner. Eighty random points are scattered in the square: green ones inside the quarter circle, orange ones outside. 57 of the 80 are inside, giving the estimate 4 times 57 over 80, which is 2.85">
<rect x="120" y="15" width="200" height="200" fill="none" stroke="currentColor" stroke-width="1.5"/>
<path d="M120,15 A200,200 0 0 1 320,215" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
<circle cx="244.6" cy="66.6" r="3" fill="#7ccf9a"/>
<circle cx="279.0" cy="26.5" r="3" fill="#eea66f"/>
<circle cx="268.0" cy="30.5" r="3" fill="#eea66f"/>
<circle cx="125.8" cy="121.9" r="3" fill="#7ccf9a"/>
<circle cx="308.7" cy="85.2" r="3" fill="#eea66f"/>
<circle cx="300.2" cy="192.4" r="3" fill="#7ccf9a"/>
<circle cx="213.8" cy="165.7" r="3" fill="#7ccf9a"/>
<circle cx="228.8" cy="100.2" r="3" fill="#7ccf9a"/>
<circle cx="122.6" cy="171.7" r="3" fill="#7ccf9a"/>
<circle cx="175.9" cy="31.7" r="3" fill="#7ccf9a"/>
<circle cx="273.1" cy="183.1" r="3" fill="#7ccf9a"/>
<circle cx="279.4" cy="187.2" r="3" fill="#7ccf9a"/>
<circle cx="243.5" cy="189.7" r="3" fill="#7ccf9a"/>
<circle cx="120.4" cy="40.7" r="3" fill="#7ccf9a"/>
<circle cx="161.9" cy="171.9" r="3" fill="#7ccf9a"/>
<circle cx="316.5" cy="40.5" r="3" fill="#eea66f"/>
<circle cx="177.9" cy="22.7" r="3" fill="#eea66f"/>
<circle cx="227.8" cy="79.4" r="3" fill="#7ccf9a"/>
<circle cx="161.0" cy="26.8" r="3" fill="#7ccf9a"/>
<circle cx="258.1" cy="21.7" r="3" fill="#eea66f"/>
<circle cx="298.7" cy="155.2" r="3" fill="#7ccf9a"/>
<circle cx="192.2" cy="181.8" r="3" fill="#7ccf9a"/>
<circle cx="149.1" cy="202.0" r="3" fill="#7ccf9a"/>
<circle cx="180.3" cy="94.4" r="3" fill="#7ccf9a"/>
<circle cx="120.7" cy="79.4" r="3" fill="#7ccf9a"/>
<circle cx="187.6" cy="153.0" r="3" fill="#7ccf9a"/>
<circle cx="283.7" cy="118.9" r="3" fill="#7ccf9a"/>
<circle cx="183.2" cy="118.8" r="3" fill="#7ccf9a"/>
<circle cx="260.9" cy="203.6" r="3" fill="#7ccf9a"/>
<circle cx="315.0" cy="210.4" r="3" fill="#7ccf9a"/>
<circle cx="270.0" cy="46.0" r="3" fill="#eea66f"/>
<circle cx="123.6" cy="57.5" r="3" fill="#7ccf9a"/>
<circle cx="193.2" cy="99.3" r="3" fill="#7ccf9a"/>
<circle cx="121.8" cy="205.7" r="3" fill="#7ccf9a"/>
<circle cx="156.2" cy="24.0" r="3" fill="#7ccf9a"/>
<circle cx="159.3" cy="63.9" r="3" fill="#7ccf9a"/>
<circle cx="305.9" cy="26.6" r="3" fill="#eea66f"/>
<circle cx="188.9" cy="144.0" r="3" fill="#7ccf9a"/>
<circle cx="224.9" cy="59.9" r="3" fill="#7ccf9a"/>
<circle cx="141.6" cy="65.3" r="3" fill="#7ccf9a"/>
<circle cx="279.4" cy="43.1" r="3" fill="#eea66f"/>
<circle cx="127.3" cy="25.8" r="3" fill="#7ccf9a"/>
<circle cx="138.2" cy="146.9" r="3" fill="#7ccf9a"/>
<circle cx="242.2" cy="31.4" r="3" fill="#eea66f"/>
<circle cx="188.0" cy="30.2" r="3" fill="#7ccf9a"/>
<circle cx="229.0" cy="152.5" r="3" fill="#7ccf9a"/>
<circle cx="183.4" cy="179.5" r="3" fill="#7ccf9a"/>
<circle cx="135.6" cy="185.2" r="3" fill="#7ccf9a"/>
<circle cx="257.8" cy="15.7" r="3" fill="#eea66f"/>
<circle cx="152.3" cy="205.3" r="3" fill="#7ccf9a"/>
<circle cx="317.3" cy="108.3" r="3" fill="#eea66f"/>
<circle cx="201.2" cy="167.5" r="3" fill="#7ccf9a"/>
<circle cx="238.8" cy="49.7" r="3" fill="#eea66f"/>
<circle cx="211.1" cy="130.6" r="3" fill="#7ccf9a"/>
<circle cx="131.1" cy="31.8" r="3" fill="#7ccf9a"/>
<circle cx="126.5" cy="116.3" r="3" fill="#7ccf9a"/>
<circle cx="287.7" cy="188.9" r="3" fill="#7ccf9a"/>
<circle cx="266.3" cy="25.0" r="3" fill="#eea66f"/>
<circle cx="246.1" cy="57.4" r="3" fill="#eea66f"/>
<circle cx="141.3" cy="128.1" r="3" fill="#7ccf9a"/>
<circle cx="149.8" cy="46.1" r="3" fill="#7ccf9a"/>
<circle cx="179.0" cy="124.4" r="3" fill="#7ccf9a"/>
<circle cx="319.9" cy="44.5" r="3" fill="#eea66f"/>
<circle cx="315.2" cy="124.3" r="3" fill="#eea66f"/>
<circle cx="217.6" cy="69.1" r="3" fill="#7ccf9a"/>
<circle cx="215.8" cy="156.8" r="3" fill="#7ccf9a"/>
<circle cx="200.8" cy="185.7" r="3" fill="#7ccf9a"/>
<circle cx="195.4" cy="17.3" r="3" fill="#eea66f"/>
<circle cx="312.0" cy="89.6" r="3" fill="#eea66f"/>
<circle cx="219.9" cy="147.3" r="3" fill="#7ccf9a"/>
<circle cx="137.8" cy="160.5" r="3" fill="#7ccf9a"/>
<circle cx="276.4" cy="41.5" r="3" fill="#eea66f"/>
<circle cx="192.3" cy="57.8" r="3" fill="#7ccf9a"/>
<circle cx="275.0" cy="76.1" r="3" fill="#eea66f"/>
<circle cx="252.8" cy="63.1" r="3" fill="#eea66f"/>
<circle cx="192.7" cy="74.1" r="3" fill="#7ccf9a"/>
<circle cx="176.2" cy="117.9" r="3" fill="#7ccf9a"/>
<circle cx="273.9" cy="76.8" r="3" fill="#eea66f"/>
<circle cx="178.8" cy="25.9" r="3" fill="#7ccf9a"/>
<circle cx="249.9" cy="98.9" r="3" fill="#7ccf9a"/>
<text x="120" y="230" text-anchor="middle" font-size="11" fill="currentColor">0</text>
<text x="320" y="230" text-anchor="middle" font-size="11" fill="currentColor">1</text>
<text x="112" y="19" text-anchor="end" font-size="11" fill="currentColor">1</text>
<text x="330" y="60" font-size="11" fill="currentColor">80 points</text>
<text x="330" y="78" font-size="11" fill="currentColor">57 inside</text>
<text x="330" y="96" font-size="11" fill="currentColor">4 · 57/80 = 2.85</text>
</svg>
</div>

With only 80 points the estimate in the picture is 2.85, which is poor. More points:

```python
import random

random.seed(7)
hits = 0
n = 0
for target in (100, 10_000, 1_000_000):
    while n < target:
        x, y = random.random(), random.random()
        if x * x + y * y <= 1:
            hits += 1
        n += 1
    est = 4 * hits / n
    print(n, est, abs(est - 3.141592653589793))
```

On Python 3 with this seed the output is

| $n$ | estimate | error |
|---|---|---|
| 100 | 3.16 | 0.018 |
| 10,000 | 3.1496 | 0.0080 |
| 1,000,000 | 3.141236 | 0.00036 |

(A different seed gives different numbers; that is the point of the next paragraph.)

**How big is the error?** $K \sim \text{Bin}(n, \pi/4)$, so

$$
\operatorname{Var}(\hat\pi_n) = \frac{16}{n^2}\cdot n\,\frac{\pi}{4}\Big(1 - \frac{\pi}{4}\Big) = \frac{\pi(4 - \pi)}{n}, \qquad \operatorname{sd}(\hat\pi_n) = \frac{\sqrt{\pi(4 - \pi)}}{\sqrt n} \approx \frac{1.64}{\sqrt n}.
$$

For $n = 100$, 10,000, 1,000,000 the standard deviations are about 0.16, 0.016 and 0.0016, and the errors in the table
are all within one standard deviation, as they usually will be. The key fact is the $\sqrt{n}$: **to gain one more
correct decimal digit you need a hundred times as many points.** Monte Carlo is a slow way to compute $\pi$ (a
series does far better), but the same $1/\sqrt n$ holds for estimating an area or volume in any number of dimensions,
while grid-based methods get much worse as the dimension grows. That is why simulation is the standard tool for
high-dimensional integrals in physics, statistics and finance.

**How many points for a guarantee?** Say we want $|\hat\pi_n - \pi| < 0.01$ with probability at least 95%.

- *Chebyshev:* $P(|\hat\pi_n - \pi| \ge 0.01) \le \frac{\pi(4-\pi)}{n \cdot 10^{-4}} \le 0.05$ needs $n \ge 539{,}354$.
- *Hoeffding:* each term $4\cdot\mathbf{1}_{\text{inside}}$ lies in $[0, 4]$, so
  $P(|\hat\pi_n - \pi| \ge \varepsilon) \le 2\exp(-2n\varepsilon^2/16) = 2e^{-n\varepsilon^2/8}$; with
  $\varepsilon = 0.01$ this is at most 0.05 once $n \ge 8\ln 40 \cdot 10^4 \approx 295{,}111$.
- *Central limit theorem (Chapter 12), an approximation rather than a guarantee:* about
  $1.96^2\,\pi(4 - \pi)/10^{-4} \approx 103{,}600$ points.

All three agree on the shape, a constant over $\varepsilon^2$; they disagree on the constant, because the first two are
proofs valid for every $n$ and the third is a limit.

**A note on "random".** A computer's `random.random()` is not random at all: it is a deterministic **pseudo-random
number generator** (Python uses the Mersenne Twister), which produces numbers that pass many statistical tests. For
Monte Carlo this is usually fine; for cryptography it is not. Chapter 19 and the
[cryptography book](https://cryptography.akadian.ca/book/04-Randomness-and-Perfect-Secrecy/) explain the difference.

**History.** Estimating a number by random experiment is old: Buffon's needle problem (Chapter 9), published by
Georges-Louis Leclerc, Comte de Buffon, in 1777, was later used by several people to estimate $\pi$ by dropping
needles. The systematic method was developed at Los Alamos in the late 1940s by Stanislaw Ulam, John von Neumann and
Nicholas Metropolis, for problems of neutron diffusion that had no closed-form answer, and was among the first big
uses of electronic computers. Metropolis suggested the name "Monte Carlo"; the first paper under it is Metropolis and
Ulam, 1949.

## A short history

Jacob Bernoulli proved the law of large numbers for repeated trials in *Ars Conjectandi* (1713), with an explicit (and
very large) bound on how many trials suffice; he regarded it as the key to applying probability to real life. Poisson
gave the name "law of large numbers" (*la loi des grands nombres*) in 1837. Irénée-Jules Bienaymé stated the
inequality now usually named after Chebyshev in 1853, and Pafnuty Chebyshev proved it independently in 1867 and used it
for a general law of large numbers; it is sometimes called the Bienaymé-Chebyshev inequality. His student Andrei Markov
gave the inequality that bears his name and extended the law to dependent variables. Khinchin's law with only a finite
mean is from 1929 and Kolmogorov's strong law from 1933 (its first version, for coin flips, is Émile Borel's, 1909).
The exponential bounds came with the study of large deviations: Cramér (1938), Chernoff (1952), Hoeffding (1963).

## Check yourself

??? question "1. A nonnegative random variable has mean 4. Bound $P(X \ge 10)$. If you also know its variance is 2, give a better bound."

    Markov: $P(X \ge 10) \le 4/10 = 0.4$. Chebyshev: $X \ge 10$ implies $|X - 4| \ge 6$, so
    $P(X \ge 10) \le 2/36 = 1/18 \approx 0.056$.

??? question "2. Roll a fair die 100 times and let $S$ be the total. Use Chebyshev to bound $P(|S - 350| \ge 50)$."

    One die has mean 3.5 and variance $35/12$, so $S$ has mean 350 and variance $100 \cdot 35/12 \approx 291.7$
    (standard deviation about 17.1). Chebyshev: $P(|S - 350| \ge 50) \le 291.7/2500 \approx 0.117$.

??? question "3. Using Chebyshev, how many rolls of a fair die make you 99% sure that the proportion of sixes is within 0.01 of $1/6$?"

    The proportion has variance $\frac{(1/6)(5/6)}{n} = \frac{5}{36n}$. We need $\frac{5/36}{n \cdot 0.01^2} \le 0.01$,
    that is $n \ge \frac{5}{36} \cdot 10^6 \approx 138{,}889$.

??? question "4. Explain why the weak law of large numbers fails if $X_1$ is a fair coin flip (0 or 1) and $X_2 = X_3 = \dots = X_1$. Which hypothesis of Theorem 7.3 fails?"

    $\bar X_n = X_1$ for every $n$, which is 0 or 1 with probability 1/2 each, so $P(|\bar X_n - \tfrac12| \ge \tfrac14) = 1$
    for all $n$. The variables are not uncorrelated: $\operatorname{Cov}(X_i, X_j) = \operatorname{Var}(X_1) = 1/4$.
    Then $\operatorname{Var}(\bar X_n) = 1/4$ does not shrink.

??? question "5. The first 20 flips of a fair coin gave 15 heads. What is the expected proportion of heads after 1000 more flips? Is the coin 'catching up'?"

    Expected heads: $15 + 500 = 515$ out of 1020, a proportion of about 0.5049. The expected number of extra heads
    stays at 5 above half (515 versus 510); the proportion approaches 1/2 because the excess is diluted, not because
    tails become more likely.

??? question "6. Prove the lower-tail version of Theorem 7.8 directly: $P(H_n \le (\tfrac12 - \delta)n) \le e^{-2\delta^2 n}$."

    $H_n \le (\tfrac12 - \delta)n$ means $\sum (-Y_i) \ge \delta n$ with $Y_i = X_i - \frac12$. The variables $-Y_i$
    are again $\pm\frac12$ with probability $\frac12$ each, so the same proof applies word for word:
    $E[e^{-tY_i}] = \cosh(t/2) \le e^{t^2/8}$, and the choice $t = 4\delta$ gives $e^{-2\delta^2 n}$.

??? question "7. Use the Chernoff-Hoeffding bound to show that 1,000,000 fair flips give strictly between 499,000 and 501,000 heads with probability at least $1 - 2e^{-2}$. What does Chebyshev give?"

    Here $\delta = 1000/10^6 = 0.001$, so $2e^{-2\delta^2 n} = 2e^{-2}\approx 0.27$, and the probability of staying
    inside is at least $0.73$. Chebyshev: variance $n/4 = 250{,}000$, so $P(|H_n - n/2| \ge 1000) \le 250{,}000/10^6 = 0.25$,
    giving at least 0.75. (At only two standard deviations, Chebyshev can beat Chernoff; Chernoff wins far out in the
    tails. The true probability of staying inside is about 0.95.)

??? question "8. You estimate $p$ = P(three dice total 10) by simulating 10,000 throws of three dice. The true value is $27/216 = 0.125$. What is the standard deviation of your estimate?"

    The estimate is $K/n$ with $K \sim \text{Bin}(10^4, 0.125)$, so its standard deviation is
    $\sqrt{0.125 \cdot 0.875/10^4} \approx 0.0033$. Expect answers like 0.12 to 0.13.

??? question "9. (Second moment method.) Show that for any random variable $X \ge 0$ with $E[X^2] > 0$, $P(X > 0) \ge \dfrac{(E[X])^2}{E[X^2]}$."

    $X = X\,\mathbf{1}_{\{X > 0\}}$. By the Cauchy-Schwarz inequality $(E[UV])^2 \le E[U^2]E[V^2]$ (proved in Theorem
    6.8 in the form $|\rho| \le 1$; the same proof works without centring), $(E[X])^2 = (E[X\mathbf 1_{\{X>0\}}])^2 \le E[X^2]\,E[\mathbf{1}_{\{X>0\}}] = E[X^2]\,P(X > 0)$.
    Divide by $E[X^2]$. This is the lower-bound partner of Chebyshev used in
    [Combinatorics, Chapter 17](../combinatorics/17-The-Probabilistic-Method.md).

??? question "10. (Harder.) For fair coins, show that the best Chernoff bound $\inf_{t > 0} e^{-tan}\,E[e^{tH_n}]$ for $P(H_n \ge an)$, $\frac12 < a < 1$, equals $e^{-nI(a)}$ with $I(a) = a\ln(2a) + (1-a)\ln(2(1-a))$."

    $E[e^{tH_n}] = \left(\frac{1 + e^t}{2}\right)^n$, so we minimise $g(t) = -ta + \ln\frac{1 + e^t}{2}$. Setting
    $g'(t) = -a + \frac{e^t}{1 + e^t} = 0$ gives $e^t = \frac{a}{1-a}$, which is $> 1$, so $t > 0$. Then
    $\frac{1 + e^t}{2} = \frac{1}{2(1-a)}$ and
    $g(t) = -a\ln\frac{a}{1-a} - \ln\big(2(1-a)\big) = -\big(a\ln a - a\ln(1-a) + \ln 2 + \ln(1-a)\big) = -\big(a\ln(2a) + (1-a)\ln(2(1-a))\big)$,
    using $\ln 2 = a\ln 2 + (1-a)\ln 2$. So the bound is $e^{n g(t)} = e^{-nI(a)}$.

## What you learned

- Markov: $P(X \ge a) \le E[X]/a$ for $X \ge 0$. Chebyshev: $P(|X - \mu| \ge k\sigma) \le 1/k^2$. Both are best
  possible in general and both are proved in one line.
- Convergence in probability: the chance of missing by more than $\varepsilon$ tends to 0.
- The weak law: averages of uncorrelated variables with a common mean and bounded variances converge in probability to
  the mean, with error probability at most $\sigma^2/(n\varepsilon^2)$; Khinchin needs only a finite mean for i.i.d.
  variables.
- The law works by swamping, not compensation: the gap between heads and tails grows like $\sqrt n$, while the gap in
  proportions shrinks like $1/\sqrt n$; small samples vary a lot; infinite means and strong dependence break the law.
- Chernoff's method, Markov applied to $e^{tX}$, gives exponential bounds: $2e^{-2\delta^2 n}$ for coins,
  $(e^\delta/(1+\delta)^{1+\delta})^\mu$ for rare successes, sharp in the exponent by Cramér's theorem.
- Monte Carlo estimates have error of order $1/\sqrt n$ in any dimension; $\pi \approx 4K/n$ with standard deviation
  $1.64/\sqrt n$.

**Next:** [Chapter 8](08-Generating-Functions-in-Probability.md) packs a whole distribution into one function, and uses
it to add random variables, to decide whether a family name dies out, and to decide whether a random walk comes home.

## Further reading

- W. Feller, *An Introduction to Probability Theory and Its Applications*, Volume I, 3rd edition, 1968: Chapter X on
  the law of large numbers.
- G. Grimmett and D. Welsh, *Probability: An Introduction*, 2nd edition, 2014: Chapter 8 on the main limit theorems at
  this level.
- M. Mitzenmacher and E. Upfal, *Probability and Computing*, 2nd edition, 2017: Chapter 3 (Markov and Chebyshev) and
  Chapter 4 (Chernoff and Hoeffding bounds) with many algorithmic applications.
- H. Chernoff, "A measure of asymptotic efficiency for tests of a hypothesis based on the sum of observations",
  *Annals of Mathematical Statistics* 23, 1952.
- W. Hoeffding, "Probability inequalities for sums of bounded random variables", *Journal of the American Statistical
  Association* 58, 1963.
- N. Metropolis and S. Ulam, "The Monte Carlo method", *Journal of the American Statistical Association* 44, 1949.
- A. Tversky and D. Kahneman, "Judgment under uncertainty: heuristics and biases", *Science* 185, 1974.
- R. Durrett, *Probability: Theory and Examples*, 5th edition, 2019: Chapter 2 for the weak and strong laws in full
  generality.
- On this site: [The law of large numbers and the central limit theorem](../../topics/probability/level-8/05-large-numbers-clt.md),
  [Monte Carlo methods](../../topics/probability/level-8/07-monte-carlo.md),
  [Simulations](../../topics/probability/level-4/05-simulations.md);
  [Combinatorics, Chapter 17](../combinatorics/17-The-Probabilistic-Method.md) for Chernoff bounds and the second
  moment method in action.
