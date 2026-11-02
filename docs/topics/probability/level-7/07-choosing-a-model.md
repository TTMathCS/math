---
title: "Uniform distributions and choosing a model"
---

# Uniform distributions and choosing a model

*Probability · level 7, lesson 7 of 7*

## A question to start

Here are five questions. Each one is about a count, and each one needs a different distribution.

1. A die is rolled once. What number comes up?
2. A die is rolled 12 times. How many sixes?
3. A die is rolled until a six appears. How many rolls?
4. Five cards are dealt from a deck. How many hearts?
5. A help desk gets 2 calls an hour on average. How many calls in the next hour?

The first four use distributions you have met in this level. The fifth needs one more. Can you
match each question to its model before reading on? Picking the right model is the real skill: once the model is
right, the arithmetic is a formula, a calculator key or one spreadsheet cell.

## The idea

### The discrete uniform distribution

The simplest distribution of all gives every value the **same** probability. A random variable that takes each of the
values $1, 2, \dots, n$ with probability $\tfrac1n$ has a **discrete uniform distribution**. A fair die is uniform on
1 to 6; a random digit is uniform on 0 to 9; a 20-sided die is uniform on 1 to 20.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 170" role="img" aria-label="Bar chart of a fair die: six bars of equal height 1/6">
  <line x1="40" y1="130" x2="288" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="18" x2="40" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <rect x="45.0" y="55.3" width="31.4" height="74.7" fill="#7ccf9a"/>
  <text x="60.7" y="145.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="60.7" y="51.3" font-size="10" text-anchor="middle" fill="currentColor">1/6</text>
  <rect x="86.3" y="55.3" width="31.4" height="74.7" fill="#7ccf9a"/>
  <text x="102.0" y="145.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="102.0" y="51.3" font-size="10" text-anchor="middle" fill="currentColor">1/6</text>
  <rect x="127.6" y="55.3" width="31.4" height="74.7" fill="#7ccf9a"/>
  <text x="143.3" y="145.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="143.3" y="51.3" font-size="10" text-anchor="middle" fill="currentColor">1/6</text>
  <rect x="169.0" y="55.3" width="31.4" height="74.7" fill="#7ccf9a"/>
  <text x="184.7" y="145.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="184.7" y="51.3" font-size="10" text-anchor="middle" fill="currentColor">1/6</text>
  <rect x="210.3" y="55.3" width="31.4" height="74.7" fill="#7ccf9a"/>
  <text x="226.0" y="145.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="226.0" y="51.3" font-size="10" text-anchor="middle" fill="currentColor">1/6</text>
  <rect x="251.6" y="55.3" width="31.4" height="74.7" fill="#7ccf9a"/>
  <text x="267.3" y="145.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="267.3" y="51.3" font-size="10" text-anchor="middle" fill="currentColor">1/6</text>
  <text x="164.0" y="164.0" font-size="12" text-anchor="middle" fill="currentColor">face</text>
</svg>
</div>

**Mean.** By symmetry the balance point is in the middle:

$$E(X) = \frac{1 + 2 + \dots + n}{n} = \frac{n(n + 1)/2}{n} = \frac{n + 1}{2}.$$

(The sum $1 + 2 + \dots + n = \tfrac{n(n + 1)}{2}$ is the triangle-number formula from
[Patterns](../../patterns/index.md).) For a die, $\tfrac72 = 3.5$.

**Variance.** Using the sum of squares $1^2 + 2^2 + \dots + n^2 = \tfrac{n(n + 1)(2n + 1)}{6}$,

$$E(X^2) = \frac{(n + 1)(2n + 1)}{6}, \qquad \operatorname{Var}(X) = \frac{(n + 1)(2n + 1)}{6} - \frac{(n + 1)^2}{4} = \frac{n^2 - 1}{12}.$$

(Put both fractions over 12: $\tfrac{(n + 1)\left(2(2n + 1) - 3(n + 1)\right)}{12} = \tfrac{(n + 1)(n - 1)}{12}$.) For a
die, $\tfrac{36 - 1}{12} = \tfrac{35}{12}$, which matches lesson 3. ✓

If the values are $a, a + 1, \dots, b$ instead, shift: the mean is $\tfrac{a + b}{2}$ and the variance is
$\tfrac{m^2 - 1}{12}$ where $m = b - a + 1$ is the number of values (shifting does not change spread).

Every random-number generator starts here. A spreadsheet's `RANDBETWEEN(1,6)` is meant to be uniform on 1 to 6, and
the simulations in [level 4](../level-4/05-simulations.md) and the Monte Carlo methods of
[level 8](../level-8/07-monte-carlo.md) are all built from uniform random numbers.

### Rare events: a first look at the Poisson distribution

Question 5 is different from the others. Calls arrive at random moments; there is no fixed number of "trials". Yet we
can think of the hour as 3600 seconds, each one a tiny trial with a tiny chance of a call. That is binomial with $n$
huge and $p$ tiny, with $np = 2$. As $n$ grows and $p$ shrinks with $np = \lambda$ kept fixed, the binomial
probabilities settle down to

$$P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}, \qquad k = 0, 1, 2, \dots$$

This is the **Poisson distribution** with mean $\lambda$ (Greek "lambda"). Here $e \approx 2.71828$ is the number from
[Change](../../change/index.md) and $k!$ is a factorial. Its mean **and** its variance are both $\lambda$. (The
variance makes sense: the binomial variance $np(1 - p)$ is almost $np$ when $p$ is tiny.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="Bar chart of a Poisson distribution with mean 2: tallest bars at 1 and 2, then falling away">
  <line x1="40" y1="180" x2="408" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="18" x2="40" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <rect x="44.4" y="107.7" width="28.0" height="72.3" fill="#9cc9ea"/>
  <text x="58.4" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="58.4" y="103.7" font-size="10" text-anchor="middle" fill="currentColor">0.135</text>
  <rect x="81.2" y="35.4" width="28.0" height="144.6" fill="#9cc9ea"/>
  <text x="95.2" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="95.2" y="31.4" font-size="10" text-anchor="middle" fill="currentColor">0.271</text>
  <rect x="118.0" y="35.4" width="28.0" height="144.6" fill="#9cc9ea"/>
  <text x="132.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="132.0" y="31.4" font-size="10" text-anchor="middle" fill="currentColor">0.271</text>
  <rect x="154.8" y="83.6" width="28.0" height="96.4" fill="#9cc9ea"/>
  <text x="168.8" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="168.8" y="79.6" font-size="10" text-anchor="middle" fill="currentColor">0.180</text>
  <rect x="191.6" y="131.8" width="28.0" height="48.2" fill="#9cc9ea"/>
  <text x="205.6" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="205.6" y="127.8" font-size="10" text-anchor="middle" fill="currentColor">0.090</text>
  <rect x="228.4" y="160.7" width="28.0" height="19.3" fill="#9cc9ea"/>
  <text x="242.4" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="242.4" y="156.7" font-size="10" text-anchor="middle" fill="currentColor">0.036</text>
  <rect x="265.2" y="173.6" width="28.0" height="6.4" fill="#9cc9ea"/>
  <text x="279.2" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="279.2" y="169.6" font-size="10" text-anchor="middle" fill="currentColor">0.012</text>
  <rect x="302.0" y="178.2" width="28.0" height="1.8" fill="#9cc9ea"/>
  <text x="316.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="338.8" y="179.5" width="28.0" height="0.5" fill="#9cc9ea"/>
  <text x="352.8" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="375.6" y="179.9" width="28.0" height="0.1" fill="#9cc9ea"/>
  <text x="389.6" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <text x="224.0" y="214.0" font-size="12" text-anchor="middle" fill="currentColor">number of events k</text>
</svg>
</div>

For the help desk with $\lambda = 2$: $P(\text{no calls}) = e^{-2} \approx 0.135$ and
$P(\text{at least 3}) = 1 - (0.1353 + 0.2707 + 0.2707) \approx 0.323$.

The Poisson model fits counts of **rare, independent events** in a fixed stretch of time or space: calls per hour,
typing errors per page, radioactive decays per second, faulty items in a large batch. It is also a handy shortcut for a
binomial with large $n$ and small $p$: the 50 chips with 2% faulty from lesson 4 have $\lambda = 50 \times 0.02 = 1$, and
$P(0) \approx e^{-1} \approx 0.368$, close to the exact $0.98^{50} \approx 0.364$.

### Choosing the model

Ask these questions in order.

| What is being counted? | Key features | Model | Mean |
| --- | --- | --- | --- |
| one value, all equally likely | no value favoured | uniform on $1..n$ | $\tfrac{n + 1}{2}$ |
| successes in a **fixed** number $n$ of trials | independent, same $p$ (with replacement) | binomial $\operatorname{B}(n, p)$ | $np$ |
| successes in a sample of $n$ from a **small** population | without replacement, $K$ successes in $N$ | hypergeometric | $n\tfrac{K}{N}$ |
| **trials until** the first success | independent, same $p$ | geometric $\operatorname{Geo}(p)$ | $\tfrac1p$ |
| rare events in a stretch of time or space | independent, steady average rate $\lambda$ | Poisson | $\lambda$ |

So: question 1 is uniform, 2 binomial $\operatorname{B}(12, \tfrac16)$, 3 geometric $\operatorname{Geo}(\tfrac16)$, 4
hypergeometric ($N = 52$, $K = 13$, $n = 5$), 5 Poisson ($\lambda = 2$).

A model is a **simplification**. Real free throws may not be independent; real calls may bunch up at lunchtime; real
dice are very slightly uneven. A model is good if its assumptions are close enough to the truth for the question
being asked. Checking that against real data is the job of [Statistics](../../statistics/index.md).

### Using a calculator or spreadsheet

You will rarely add up twenty binomial terms by hand. Common tools (check your own device's manual, as names vary):

| Distribution | Spreadsheet (Excel, LibreOffice Calc) | TI-84 calculator |
| --- | --- | --- |
| binomial $P(X = k)$ | `BINOM.DIST(k, n, p, FALSE)` | `binompdf(n, p, k)` |
| binomial $P(X \le k)$ | `BINOM.DIST(k, n, p, TRUE)` | `binomcdf(n, p, k)` |
| geometric $P(X = k)$ | `NEGBINOM.DIST(k-1, 1, p, FALSE)` or the formula | `geometpdf(p, k)` |
| hypergeometric $P(X = k)$ | `HYPGEOM.DIST(k, n, K, N, FALSE)` | use the formula |
| Poisson $P(X = k)$ | `POISSON.DIST(k, λ, FALSE)` | `poissonpdf(λ, k)` |

Two traps. First, the cumulative versions give "at most $k$"; for "at least $k$" use $1 - P(X \le k - 1)$. Second,
`NEGBINOM.DIST` counts **failures** before the first success, so the trial number $k$ becomes $k - 1$.

In Python, the `scipy.stats` library has `binom.pmf(k, n, p)`, `geom.pmf(k, p)` (counting trials, starting at 1),
`hypergeom.pmf(k, N, K, n)` and `poisson.pmf(k, lam)`, with `.cdf` for "at most".

## Worked examples

**1. A 20-sided die.** $X$ is uniform on 1 to 20. Mean $\tfrac{21}{2} = 10.5$. Variance $\tfrac{400 - 1}{12} = 33.25$,
so $\sigma \approx 5.77$. Chance of rolling more than 15: $\tfrac{5}{20} = \tfrac14$.

**2. Choose and compute.** A multiple-choice exam has 30 questions with 5 options each; a student guesses all of them.
Fixed number of independent trials with the same $p = 0.2$: **binomial** $\operatorname{B}(30, 0.2)$. Expected score
$30 \times 0.2 = 6$. Chance of at least 10: `=1-BINOM.DIST(9,30,0.2,TRUE)`, which gives about 0.061.

**3. Choose and compute.** A quality inspector takes 10 bolts from a batch of 40, of which 6 are bad. Without
replacement, and 10 is a quarter of the batch, so **hypergeometric** with $N = 40$, $K = 6$, $n = 10$. Expected bad bolts
in the sample: $10 \times \tfrac{6}{40} = 1.5$. Chance of none:
$\dfrac{\binom{34}{10}}{\binom{40}{10}} \approx 0.155$.

**4. Choose and compute.** A book has on average 3 typing errors per 100 pages. In a 100-page section, the chance of
at most one error: **Poisson** with $\lambda = 3$: $e^{-3}(1 + 3) = 4e^{-3} \approx 0.199$.

**5. Why the Poisson is a limit.** Compare $\operatorname{B}(500, 0.004)$ (so $np = 2$) with Poisson($2$):

| $k$ | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| $\operatorname{B}(500, 0.004)$ | 0.1348 | 0.2707 | 0.2712 | 0.1808 |
| Poisson(2) | 0.1353 | 0.2707 | 0.2707 | 0.1804 |

Almost identical, and the Poisson needs no $\dbinom{500}{k}$.

## Try it

1. A random digit $D$ is uniform on 0 to 9. Find $E(D)$ and $\operatorname{Var}(D)$.
2. Name the model (with its numbers) for each: (a) the number of heads in 50 coin tosses; (b) the number of tosses until
   the first head; (c) the number of red cards in a 4-card hand; (d) the number of meteors seen in an hour when the
   average is 5; (e) the result of spinning a spinner with 8 equal sectors numbered 1 to 8.
3. For each part of question 2, give the expected value.
4. Write a spreadsheet formula for the chance of **at least** 3 sixes in 10 rolls of a die. Then work out the answer
   with the complement by hand or calculator.
5. A help desk averages 2 calls an hour (Poisson). Find the chance of exactly 2 calls in an hour, and explain why the
   chance of exactly 2 is the same as the chance of exactly 1.
6. Two fair dice are rolled. Is the **sum** uniform? Is the **pair** (first die, second die) uniform over its 36 values?
7. A spinner is uniform on 1 to $n$ and has variance 10. Find $n$.
8. Explain why a Poisson model would be a poor choice for the number of people arriving at a bus stop in the minute
   before the bus leaves.

??? note "Answers"
    1. Shift of a uniform on 10 values: $E(D) = \tfrac{0 + 9}{2} = 4.5$, $\operatorname{Var}(D) = \tfrac{10^2 - 1}{12} = 8.25$.
    2. (a) Binomial $\operatorname{B}(50, 0.5)$. (b) Geometric $\operatorname{Geo}(0.5)$. (c) Hypergeometric, $N = 52$,
       $K = 26$, $n = 4$. (d) Poisson, $\lambda = 5$. (e) Uniform on 1 to 8.
    3. (a) 25. (b) 2. (c) $4 \times \tfrac{26}{52} = 2$. (d) 5. (e) $\tfrac92 = 4.5$.
    4. `=1-BINOM.DIST(2,10,1/6,TRUE)`. By hand: $P(0) = \left(\tfrac56\right)^{10} \approx 0.1615$,
       $P(1) = 10 \cdot \tfrac16 \left(\tfrac56\right)^9 \approx 0.3230$,
       $P(2) = 45 \cdot \tfrac{1}{36} \left(\tfrac56\right)^8 \approx 0.2907$. So $P(\ge 3) \approx 1 - 0.7752 = 0.2248$.
    5. $P(2) = e^{-2}\tfrac{2^2}{2!} = 2e^{-2} \approx 0.271$. And $P(1) = e^{-2}\tfrac{2^1}{1!} = 2e^{-2}$ as well:
       when $\lambda$ is a whole number, $\tfrac{\lambda^\lambda}{\lambda!} = \tfrac{\lambda^{\lambda - 1}}{(\lambda - 1)!}$, so the two
       bars at $\lambda - 1$ and $\lambda$ are equal.
    6. The sum is **not** uniform (7 is six times as likely as 2). The pair **is** uniform: each of the 36 ordered pairs
       has probability $\tfrac{1}{36}$.
    7. $\tfrac{n^2 - 1}{12} = 10$, so $n^2 = 121$ and $n = 11$.
    8. The arrivals are not independent and the rate is not steady: people hurry to catch the bus, so arrivals bunch up
       just before it leaves (and groups of friends arrive together). The Poisson model assumes a steady rate of
       independent events.

## Common mistake

**Grabbing the binomial for everything.** The binomial needs a fixed number of independent trials with the same chance.
"Until" means geometric; "without replacement from a small group" means hypergeometric; "per hour" with no fixed number
of trials suggests Poisson.

**Reading a cumulative value as "exactly".** `BINOM.DIST(k, n, p, TRUE)` and `binomcdf` give $P(X \le k)$, not
$P(X = k)$. Many wrong answers come from one wrong TRUE or FALSE.

## Where it leads

- Back: [The hypergeometric distribution](06-hypergeometric-distribution.md) · Next level: [Level 8](../level-8/index.md),
  starting with [Bayes' theorem](../level-8/01-bayes-theorem.md)
- [Level 7 page](index.md) · [Probability topic page](../index.md)
- The number $e$ and the limit behind the Poisson formula: [Change](../../change/index.md) and
  [U of T MAT137, unit 4](../../../uoft/MAT137/unit04.md) (transcendental functions).
- Fitting a model to real data and testing it: [Statistics](../../statistics/index.md).
