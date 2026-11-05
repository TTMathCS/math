---
title: "Continuous compounding and the number e"
---

# Continuous compounding and the number e

*Ratio, rates and money · level 8, lesson 5 of 6*

## A question to start

Imagine a very generous bank that pays **100% interest a year**. Put in 1 dollar, and after a year you have 2 dollars.

Now ask the bank to compound twice a year: 50% each half-year. You get $1.5^2 = 2.25$ dollars. Monthly: $\left(1 +
\tfrac{1}{12}\right)^{12} \approx 2.61$ dollars. Every second? Every instant? Does the amount grow without limit, so that
compounding fast enough would make you rich?

The Swiss mathematician Jacob Bernoulli studied this question in the 1680s. The answer is no: the amounts creep up
towards a limit, a little under 2.72 dollars. That limit is one of the most important numbers in mathematics, the
number $e = 2.718281828\ldots$. This lesson shows why the limit exists, and how it gives the formula for
**continuous compounding**.

## The idea

### Compounding more and more often

At 100% a year compounded $n$ times, each period pays $\tfrac1n$, and there are $n$ periods. One dollar grows to

$$\left(1 + \frac1n\right)^{n}.$$

| $n$ | 1 | 2 | 4 | 12 | 100 | 365 | 8760 (hourly) | 1 000 000 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\left(1 + \frac1n\right)^n$ | 2 | 2.25 | 2.4414 | 2.6130 | 2.7048 | 2.7146 | 2.71813 | 2.718280 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 220" role="img" aria-label="Dots for (1 + 1/n) to the power n, for n from 1 to 30, rising quickly at first and then levelling off just under a dashed line at e, about 2.718">
  <line x1="40" y1="200" x2="350" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="200" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="36.3" x2="350" y2="36.3" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="346" y="30" font-size="11" text-anchor="end" fill="currentColor">e ≈ 2.718</text>
  <line x1="36" y1="180" x2="44" y2="180" stroke="currentColor"/>
  <text x="32" y="184" font-size="10" text-anchor="end" fill="currentColor">2</text>
  <line x1="36" y1="80" x2="44" y2="80" stroke="currentColor"/>
  <text x="32" y="84" font-size="10" text-anchor="end" fill="currentColor">2.5</text>
  <circle cx="50" cy="180.0" r="3.5" fill="#eea66f"/>
  <circle cx="60" cy="130.0" r="3.5" fill="#eea66f"/>
  <circle cx="70" cy="105.9" r="3.5" fill="#eea66f"/>
  <circle cx="80" cy="91.7" r="3.5" fill="#eea66f"/>
  <circle cx="90" cy="82.3" r="3.5" fill="#eea66f"/>
  <circle cx="100" cy="75.7" r="3.5" fill="#eea66f"/>
  <circle cx="120" cy="66.8" r="3.5" fill="#eea66f"/>
  <circle cx="140" cy="61.3" r="3.5" fill="#eea66f"/>
  <circle cx="160" cy="57.4" r="3.5" fill="#eea66f"/>
  <circle cx="190" cy="53.4" r="3.5" fill="#eea66f"/>
  <circle cx="240" cy="49.3" r="3.5" fill="#eea66f"/>
  <circle cx="290" cy="46.8" r="3.5" fill="#eea66f"/>
  <circle cx="340" cy="45.1" r="3.5" fill="#eea66f"/>
  <text x="50" y="214" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="140" y="214" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="240" y="214" font-size="10" text-anchor="middle" fill="currentColor">20</text>
  <text x="340" y="214" font-size="10" text-anchor="middle" fill="currentColor">30</text>
  <text x="200" y="120" font-size="11" text-anchor="middle" fill="currentColor">(1 + 1/n)ⁿ, n = number of periods</text>
</svg>
</div>

The values keep rising, but by less and less, and they settle towards $e$. (The vertical axis starts at 1.9 so the
small differences can be seen.)

### Why there is a limit

Two facts together guarantee a limit: the values **always increase** as $n$ grows, and they **never pass 3**. A list of
numbers that keeps increasing but stays below a ceiling must settle down to some limit; this is a basic property of
the real numbers, proved in a first university calculus course.

Here is why the values stay below 3. Expand with the binomial theorem (from [Counting](../../counting/index.md)):

$$\left(1 + \frac1n\right)^{n} = \sum_{k=0}^{n} \binom{n}{k}\frac{1}{n^k}.$$

The $k$-th term is

$$\binom{n}{k}\frac{1}{n^k} = \frac{n(n-1)\cdots(n-k+1)}{k!\; n^k} = \frac{1}{k!}\cdot 1 \cdot \left(1 - \frac1n\right)\left(1 - \frac2n\right)\cdots\left(1 - \frac{k-1}{n}\right).$$

Every bracket is between 0 and 1, so each term is **at most** $\tfrac{1}{k!}$. Therefore

$$\left(1 + \frac1n\right)^{n} \le 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \cdots < 1 + 1 + \frac12 + \frac14 + \frac18 + \cdots = 3,$$

using $k! \ge 2^{k-1}$ and the geometric series $\tfrac12 + \tfrac14 + \cdots = 1$. The same expansion shows the values
increase: as $n$ grows, every bracket $\left(1 - \tfrac jn\right)$ gets bigger and there are more terms. It also shows
what the limit is: as $n \to \infty$ each bracket goes to 1, and

$$e = \lim_{n \to \infty}\left(1 + \frac1n\right)^{n} = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \cdots = 2.718281828\ldots$$

The series converges very fast: seven terms already give 2.71806.

### Any rate, any time

At a rate $r$ compounded $n$ times a year for $t$ years, the factor is $\left(1 + \tfrac rn\right)^{nt}$. Put
$m = \tfrac nr$, so that $\tfrac rn = \tfrac1m$ and $nt = m\,rt$:

$$\left(1 + \frac rn\right)^{nt} = \left[\left(1 + \frac1m\right)^{m}\right]^{rt}.$$

As $n \to \infty$, $m \to \infty$ too, and the bracket tends to $e$. So the limit of compounding ever more often,
called **continuous compounding**, is

$$A = P\,e^{rt}.$$

### What continuous compounding is worth

The effective annual rate of a nominal rate $r$ compounded continuously is $e^{r} - 1$. At 5% that is about 5.127%,
barely above daily compounding's 5.1267%. Continuous compounding is a ceiling, not a jackpot.

Its real value is that it makes the mathematics clean. For example, solving $e^{rt} = 2$ gives the doubling time

$$t = \frac{\ln 2}{r} \approx \frac{0.693}{r},$$

exactly the "rule of 69.3" from [level 7](../level-7/02-doubling-half-life.md), with no approximation at all. The
natural logarithm $\ln$ is called natural precisely because it undoes $e^x$.

### Continuous growth in nature

Radioactive atoms do not wait for the end of a year to decay; populations do not grow in yearly jumps. Many natural
processes change continuously, and they are written with $e$:

$$N(t) = N_0\,e^{kt} \quad (\text{growth}, k > 0), \qquad N(t) = N_0\,e^{-kt} \quad (\text{decay}).$$

For decay with half-life $h$, $e^{-kh} = \tfrac12$ gives $k = \tfrac{\ln 2}{h}$. The special property of $e^x$, proved
in calculus, is that **its rate of change equals itself**: at every moment, $e^{kt}$ grows at a rate of $k$ times its
current size. That is exactly "change proportional to amount", the reason for exponential behaviour in
[level 7](../level-7/01-growth-decay-world.md).

<figure class="play" data-play="interest" data-mode="periods"><span class="ai-tag">AI-created</span><figcaption><b>Towards e.</b> Compounding more and more often gives less and less extra. Made-up amounts.</figcaption></figure>

## Worked examples

**1. Ever more often.** 1000 dollars at 5% for 10 years:

| Compounded | Amount |
| --- | --- |
| yearly | $1000 \times 1.05^{10} \approx 1628.89$ |
| monthly | $1000\left(1 + \tfrac{0.05}{12}\right)^{120} \approx 1647.01$ |
| daily | $1000\left(1 + \tfrac{0.05}{365}\right)^{3650} \approx 1648.66$ |
| continuously | $1000\,e^{0.5} \approx 1648.72$ |

Daily and continuous differ by 6 cents in 10 years.

**2. Effective rate.** The effective annual rate of 5% compounded continuously is $e^{0.05} - 1 \approx 5.127\%$.

**3. Doubling.** At 5% compounded continuously, money doubles in $\tfrac{\ln 2}{0.05} \approx 13.86$ years.

**4. Carbon-14 as a continuous decay.** With half-life 5730 years, $k = \tfrac{\ln 2}{5730} \approx 0.000121$ per year.
After 1000 years, $e^{-0.000121 \times 1000} \approx 0.886$: about 88.6% remains. This agrees with
$\left(\tfrac12\right)^{1000/5730}$, as it must, since $e^{-kt} = \left(e^{-kh}\right)^{t/h} = \left(\tfrac12\right)^{t/h}$.

**5. Equivalent continuous rate.** What continuous rate matches 6% compounded yearly? Need $e^{r} = 1.06$, so
$r = \ln 1.06 \approx 5.827\%$.

## Try it

1. Work out $\left(1 + \tfrac1n\right)^n$ for $n = 10$ and $n = 100$.
2. 2500 dollars is invested at 4% compounded continuously for 8 years. Find the amount.
3. 5000 dollars at 3% for 20 years: compare compounding daily and continuously.
4. Find the effective annual rate of 8% compounded continuously.
5. What continuous rate is equivalent to 10% compounded yearly?
6. How long does money take to triple at 6% compounded continuously?
7. Add $1 + 1 + \tfrac1{2!} + \tfrac1{3!} + \tfrac1{4!} + \tfrac1{5!} + \tfrac1{6!}$ and compare with $e$.
8. (Harder.) Explain why $k! \ge 2^{k-1}$ for every whole number $k \ge 1$, the step used to show
   $\left(1 + \tfrac1n\right)^n < 3$.

??? note "Answers"
    1. $1.1^{10} \approx 2.5937$; $1.01^{100} \approx 2.7048$.
    2. $2500\,e^{0.32} \approx 3442.82$ dollars.
    3. Daily: $5000\left(1 + \tfrac{0.03}{365}\right)^{7300} \approx 9110.37$. Continuously: $5000\,e^{0.6} \approx
       9110.59$. A difference of about 22 cents.
    4. $e^{0.08} - 1 \approx 8.33\%$.
    5. $\ln 1.1 \approx 9.53\%$.
    6. $e^{0.06t} = 3$ gives $t = \dfrac{\ln 3}{0.06} \approx 18.3$ years.
    7. $1 + 1 + 0.5 + 0.16667 + 0.04167 + 0.00833 + 0.00139 \approx 2.71806$, just $0.00023$ below
       $e \approx 2.71828$.
    8. $k! = 1 \times 2 \times 3 \times \cdots \times k$. Apart from the first factor 1, there are $k - 1$ factors,
       each at least 2. So the product is at least $2^{k-1}$.

## Common mistake

**Thinking faster compounding gives unlimited growth.** Compounding more often always helps a little, but the amount
is capped by $Pe^{rt}$. At ordinary rates, monthly, daily and continuous compounding give almost the same answer.

**Using $e^{rt}$ with a rate in percent.** In $e^{rt}$, $r$ is a decimal: 5% is $0.05$. $e^{5 \times 10}$ is about
$5 \times 10^{21}$, which is not what the bank owes you.

## Where it leads

- Back: [Real versus nominal rates](04-real-nominal.md) · Next: [Ratio in nature and art](06-ratio-nature-art.md)
- [Level 8 page](index.md) · [Ratio, rates and money topic page](../index.md)
- The exponential function and the logarithm as functions: [Algebra](../../algebra/index.md). Rates of change at an
  instant: [Change](../../change/index.md).
- $e$ also appears in $e^{i\pi} + 1 = 0$: [Euler's formula](../../numbers/level-8/04-euler-formula.md) in Numbers.
- Why increasing bounded sequences converge, and why $\left(1 + \frac1n\right)^n \to e$:
  [MAT137 Unit 11 (sequences)](../../../uoft/MAT137/unit11.md). Why $e^x$ is its own derivative:
  [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md).
