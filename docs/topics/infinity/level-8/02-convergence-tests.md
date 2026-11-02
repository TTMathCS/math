---
title: "Convergence tests"
---

# Convergence tests

*Infinity and strange math · level 8, lesson 2 of 7*

## A question to start

Two infinite sums look almost the same:

$$1 + \frac12 + \frac13 + \frac14 + \cdots \qquad\text{and}\qquad 1 + \frac14 + \frac19 + \frac1{16} + \cdots$$

In level 4 you proved that the first one, the **harmonic series**, grows without limit. The second adds the
reciprocals of the square numbers. Its terms shrink faster. Does it have a finite total?

It does, and in the 1730s Leonhard Euler astonished Europe by finding it exactly:

$$1 + \frac14 + \frac19 + \frac1{16} + \cdots = \frac{\pi^2}{6} \approx 1.6449.$$

A circle number from a sum of squares! Euler's proof is beyond this lesson, but proving that the sum is **finite** is
not. This lesson gives you the first tools for deciding whether an infinite sum adds up to a number: the
**convergence tests**.

## The idea

### Series, partial sums and convergence

An infinite sum $a_1 + a_2 + a_3 + \cdots$ is called a **series**, written

$$\sum_{n=1}^{\infty} a_n.$$

Nobody can do infinitely many additions, so we define the sum through a limit. The **partial sums** are

$$S_1 = a_1, \quad S_2 = a_1 + a_2, \quad S_3 = a_1 + a_2 + a_3, \quad \ldots, \quad S_N = \sum_{n=1}^{N} a_n.$$

The series **converges** to $S$ if $\lim_{N \to \infty} S_N = S$, in the exact $\varepsilon$-$N$ sense of the last
lesson. Otherwise it **diverges**. For example the geometric series $\tfrac12 + \tfrac14 + \tfrac18 + \cdots$ has
$S_N = 1 - \tfrac1{2^N}$, which has limit 1, so the series converges to 1.

### Test 0: the terms must shrink to zero

If $\sum a_n$ converges to $S$, then $a_N = S_N - S_{N-1}$, and both $S_N$ and $S_{N-1}$ approach $S$, so $a_N$
approaches $S - S = 0$. So:

**Divergence test.** If the terms $a_n$ do **not** tend to 0, the series diverges.

For example $\sum \tfrac{n}{n+1} = \tfrac12 + \tfrac23 + \tfrac34 + \cdots$ diverges, because its terms tend to 1.

But the test only works one way. The harmonic series has terms tending to 0 and still diverges. Terms shrinking to 0
is **necessary** for convergence, never **sufficient**.

### Why positive series are easier

If every term is positive, the partial sums only go up: $S_1 < S_2 < S_3 < \cdots$ Such a sequence can do only one of
two things:

- grow without limit (diverge to infinity), or
- stay below some ceiling, and then it converges.

The second point is a basic property of the real numbers, called **completeness** (the **monotone convergence
theorem**): an increasing sequence with a ceiling has a limit. It is exactly the property the rationals lack (the
increasing decimals $1, 1.4, 1.41, 1.414, \ldots$ have no rational limit, since $\sqrt2$ is irrational). So for a
positive series, convergence is just a question of whether the partial sums stay **bounded**.

### Test 1: the comparison test

**Comparison test.** Suppose $0 \le a_n \le b_n$ for every $n$.

- If $\sum b_n$ converges, then $\sum a_n$ converges too.
- If $\sum a_n$ diverges, then $\sum b_n$ diverges too.

**Why.** Every partial sum of $\sum a_n$ is at most the matching partial sum of $\sum b_n$, which is at most the total
$B$ of $\sum b_n$. So the partial sums of $\sum a_n$ increase and stay below $B$, and by completeness they converge.
The second part is the same fact turned round: if the smaller one grows without limit, so does the bigger.

### $\sum 1/n^2$ converges

Compare $\tfrac1{n^2}$ with something we can add exactly. For $n \ge 2$,

$$\frac{1}{n^2} < \frac{1}{n(n-1)} = \frac{1}{n-1} - \frac{1}{n}.$$

(Check the last step: $\tfrac1{n-1} - \tfrac1n = \tfrac{n - (n-1)}{n(n-1)} = \tfrac1{n(n-1)}$.) Adding these from
$n = 2$ to $N$, almost everything cancels, like a folding telescope:

$$\left(1 - \tfrac12\right) + \left(\tfrac12 - \tfrac13\right) + \cdots + \left(\tfrac1{N-1} - \tfrac1N\right) = 1 -
\frac1N < 1.$$

So $S_N = 1 + \sum_{n=2}^{N} \tfrac1{n^2} < 1 + 1 = 2$ for every $N$. The partial sums increase and stay below 2, so
the series converges, to some number at most 2. Euler's value $\tfrac{\pi^2}6 \approx 1.645$ is indeed below 2.

### Test 2: the ratio test

The geometric series $\sum r^n$ converges when $0 \le r < 1$ and diverges when $r \ge 1$. The ratio test says that a
series whose terms **eventually behave like** a geometric series does the same.

**Ratio test.** For a series of positive terms, let $r = \lim_{n \to \infty} \dfrac{a_{n+1}}{a_n}$.

- If $r < 1$, the series converges.
- If $r > 1$, the series diverges.
- If $r = 1$, the test tells you **nothing**.

**Why (for $r < 1$).** Pick a number $s$ with $r < s < 1$. Since the ratios approach $r$, from some point $N$ on each
ratio is less than $s$, so $a_{N+1} < s\,a_N$, $a_{N+2} < s^2 a_N$, and so on. From then on the terms are smaller
than those of the geometric series $a_N(s + s^2 + s^3 + \cdots)$, which converges because $s < 1$. By comparison, our
series converges. (For $r > 1$ the terms eventually grow, so they cannot tend to 0.)

The $r = 1$ case really is undecided: for $\sum \tfrac1n$ (diverges) and $\sum \tfrac1{n^2}$ (converges) the ratios
$\tfrac{n}{n+1}$ and $\tfrac{n^2}{(n+1)^2}$ both tend to 1.

### Alternating series

Now let the signs take turns. The **alternating harmonic series** is

$$1 - \frac12 + \frac13 - \frac14 + \frac15 - \cdots$$

Its partial sums jump right and left, each jump smaller than the last:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 250" role="img" aria-label="Partial sums of the alternating harmonic series jumping right and left, each jump smaller, closing in on ln 2, about 0.693">
  <line x1="170.7" y1="12" x2="170.7" y2="215" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="170.7" y="242" font-size="12" text-anchor="middle" fill="currentColor">ln 2 ≈ 0.693</text>
  <line x1="30.0" y1="222" x2="342.0" y2="222" stroke="currentColor" stroke-width="1.5"/>
  <line x1="78.0" y1="217" x2="78.0" y2="227" stroke="currentColor" stroke-width="1.5"/>
  <text x="78.0" y="242" font-size="12" text-anchor="middle" fill="currentColor">0.5</text>
  <line x1="318.0" y1="217" x2="318.0" y2="227" stroke="currentColor" stroke-width="1.5"/>
  <text x="318.0" y="242" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="318.0" cy="20" r="4" fill="#eea66f"/>
  <text x="326.0" y="24" font-size="11" text-anchor="start" fill="currentColor">S1</text>
  <line x1="318.0" y1="20" x2="78.0" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="78.0" cy="45" r="4" fill="#9cc9ea"/>
  <text x="70.0" y="49" font-size="11" text-anchor="end" fill="currentColor">S2</text>
  <line x1="78.0" y1="45" x2="238.0" y2="70" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="238.0" cy="70" r="4" fill="#eea66f"/>
  <text x="246.0" y="74" font-size="11" text-anchor="start" fill="currentColor">S3</text>
  <line x1="238.0" y1="70" x2="118.0" y2="95" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="118.0" cy="95" r="4" fill="#9cc9ea"/>
  <text x="110.0" y="99" font-size="11" text-anchor="end" fill="currentColor">S4</text>
  <line x1="118.0" y1="95" x2="214.0" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="214.0" cy="120" r="4" fill="#eea66f"/>
  <text x="222.0" y="124" font-size="11" text-anchor="start" fill="currentColor">S5</text>
  <line x1="214.0" y1="120" x2="134.0" y2="145" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="134.0" cy="145" r="4" fill="#9cc9ea"/>
  <text x="126.0" y="149" font-size="11" text-anchor="end" fill="currentColor">S6</text>
  <line x1="134.0" y1="145" x2="202.6" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="202.6" cy="170" r="4" fill="#eea66f"/>
  <text x="210.6" y="174" font-size="11" text-anchor="start" fill="currentColor">S7</text>
  <line x1="202.6" y1="170" x2="142.6" y2="195" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="142.6" cy="195" r="4" fill="#9cc9ea"/>
  <text x="134.6" y="199" font-size="11" text-anchor="end" fill="currentColor">S8</text>
</svg>
</div>

**Alternating series test (Leibniz).** If the terms alternate in sign, shrink in size, and tend to 0, the series
converges.

**Why.** The odd partial sums $S_1, S_3, S_5, \ldots$ go **down** (each step subtracts a bigger amount than it then
adds back), the even ones $S_2, S_4, S_6, \ldots$ go **up**, and every even one is below every odd one. So the two
families close in on each other from both sides, and the gap between neighbours, the size of a term, tends to 0. They
squeeze in on one number. As a bonus, the true sum always lies between any two consecutive partial sums, so the error
after $N$ terms is less than the next term.

For the alternating harmonic series the limit is $\ln 2 \approx 0.6931$, where $\ln$ is the natural logarithm. (The
proof uses the series for $\ln(1 + x)$, from university calculus.)

### A warning from the edge

The alternating harmonic series converges only because of the cancelling: without the minus signs it is the harmonic
series, which diverges. Such a series is called **conditionally convergent**, and it behaves strangely. Rearrange the
same terms as "one positive, then two negatives":

$$1 - \frac12 - \frac14 + \frac13 - \frac16 - \frac18 + \frac15 - \frac1{10} - \frac1{12} + \cdots$$

Every term is used exactly once, yet the sum is now $\tfrac12 \ln 2$, half as much. (Group in threes:
$\left(1 - \tfrac12\right) - \tfrac14 = \tfrac12 - \tfrac14$, $\left(\tfrac13 - \tfrac16\right) - \tfrac18 = \tfrac16 -
\tfrac18$, and so on, which is half of the original series.) Bernhard Riemann proved that such a series can be
rearranged to add up to **any** number you like. For infinite sums, the order can matter.

## Worked examples

**1. The first partial sums of $\sum 1/n^2$.** $S_1 = 1$, $S_2 = 1.25$, $S_3 \approx 1.3611$, $S_4 \approx 1.4236$,
$S_5 \approx 1.4636$. They climb slowly towards $1.6449\ldots$, always below 2.

**2. Comparison.** Does $\sum \dfrac{1}{2^n + 1}$ converge? Each term is positive and $\tfrac{1}{2^n + 1} <
\tfrac{1}{2^n}$. The series $\sum \tfrac1{2^n} = \tfrac12 + \tfrac14 + \cdots$ converges (to 1). By comparison, so
does ours, to something less than 1.

**3. Comparison the other way.** Does $\sum \dfrac{1}{\sqrt n}$ converge? For $n \ge 1$, $\sqrt n \le n$, so
$\tfrac{1}{\sqrt n} \ge \tfrac1n$. The harmonic series diverges, so the bigger series $\sum \tfrac{1}{\sqrt n}$
diverges too.

**4. Ratio test.** Does $\sum \dfrac{n}{2^n} = \tfrac12 + \tfrac24 + \tfrac38 + \cdots$ converge?
$\dfrac{a_{n+1}}{a_n} = \dfrac{(n+1)/2^{n+1}}{n/2^n} = \dfrac{n+1}{2n}$, which tends to $\tfrac12 < 1$. It converges.
(Its sum is in fact 2.)

**5. Ratio test with factorials.** Does $\sum \dfrac{3^n}{n!}$ converge? $\dfrac{a_{n+1}}{a_n} = \dfrac{3^{n+1}}{(n+1)!}
\cdot \dfrac{n!}{3^n} = \dfrac{3}{n+1}$, which tends to $0 < 1$. It converges. (Starting from $n = 1$ its sum is
$e^3 - 1 \approx 19.0855$.) Factorials beat powers.

**6. Bracketing $\ln 2$.** The partial sums of the alternating harmonic series are $S_1 = 1$, $S_2 = 0.5$,
$S_3 \approx 0.8333$, $S_4 \approx 0.5833$, $S_5 \approx 0.7833$, $S_6 \approx 0.6167$. The true sum lies between
$S_5$ and $S_6$, and $\ln 2 \approx 0.6931$ does.

## Try it

1. Use the divergence test to show that $\sum \dfrac{2n}{n + 5}$ diverges.
2. Use comparison to show that $\sum \dfrac{1}{n^2 + 1}$ converges.
3. Use comparison to show that $\sum \dfrac{1}{2n - 1} = 1 + \tfrac13 + \tfrac15 + \cdots$ diverges.
4. Use the ratio test on $\sum \dfrac{n^2}{3^n}$.
5. Use the ratio test on $\sum \dfrac{n!}{10^n}$.
6. What does the ratio test say about $\sum \dfrac{1}{n^3}$? Does the series converge?
7. How many terms of the alternating harmonic series guarantee an error less than $0.01$?
8. Challenge: Leibniz's series $1 - \tfrac13 + \tfrac15 - \tfrac17 + \cdots$ is known to equal $\tfrac\pi4$. Explain why
   it converges, and use the first four partial sums to bracket $\pi$.

??? note "Answers"
    1. $\tfrac{2n}{n + 5} = \tfrac{2}{1 + 5/n}$, which tends to 2, not 0. So the series diverges.
    2. $0 < \tfrac1{n^2 + 1} < \tfrac1{n^2}$, and $\sum \tfrac1{n^2}$ converges, so by comparison so does
       $\sum \tfrac1{n^2 + 1}$.
    3. $2n - 1 < 2n$, so $\tfrac1{2n - 1} > \tfrac1{2n}$. And $\sum \tfrac1{2n} = \tfrac12 \sum \tfrac1n$ diverges
       (half of something unbounded is unbounded). So $\sum \tfrac1{2n-1}$ diverges.
    4. $\dfrac{a_{n+1}}{a_n} = \dfrac{(n+1)^2}{3^{n+1}} \cdot \dfrac{3^n}{n^2} = \dfrac13 \left(\dfrac{n+1}{n}\right)^2$,
       which tends to $\tfrac13 < 1$. It converges. (Its sum is $1.5$.)
    5. $\dfrac{a_{n+1}}{a_n} = \dfrac{(n+1)!}{10^{n+1}} \cdot \dfrac{10^n}{n!} = \dfrac{n+1}{10}$, which tends to
       infinity, more than 1. It diverges (the terms grow once $n \ge 10$).
    6. $\dfrac{n^3}{(n+1)^3}$ tends to 1, so the ratio test says nothing. But $\tfrac1{n^3} \le \tfrac1{n^2}$ and
       $\sum \tfrac1{n^2}$ converges, so by comparison $\sum \tfrac1{n^3}$ converges.
    7. The error after $N$ terms is less than the next term, $\tfrac1{N+1}$. We need $\tfrac1{N+1} \le 0.01$, so
       $N + 1 \ge 100$, $N = 99$ terms.
    8. The terms alternate, shrink ($1 > \tfrac13 > \tfrac15 > \cdots$) and tend to 0, so the alternating series test
       applies. Partial sums: $S_1 = 1$, $S_2 = \tfrac23 \approx 0.6667$, $S_3 = \tfrac{13}{15} \approx 0.8667$,
       $S_4 = \tfrac{76}{105} \approx 0.7238$. The sum $\tfrac\pi4$ is between $S_4$ and $S_3$, so $\pi$ is between
       $4 \times 0.7238 \approx 2.895$ and $4 \times 0.8667 \approx 3.467$. True, but slow: this series is a terrible
       way to compute $\pi$.

## Common mistake

**"The terms go to 0, so it converges."** The harmonic series is the standing counterexample. Terms tending to 0 is
needed but not enough.

**Using the ratio test when the limit is 1.** A limit of exactly 1 tells you nothing; switch to comparison (or another
test). Also, the ratio test needs the **limit** of the ratios: "each ratio is less than 1" is not enough
($\tfrac{n}{n+1} < 1$ for the divergent harmonic series).

## Where it leads

- Previous: [The formal definition of a limit](01-limit-definition.md). Next: [Gabriel's horn](03-gabriels-horn.md),
  where a convergent and a divergent quantity live in the same shape.
- [Level 8 page](index.md) · [Infinity topic page](../index.md) · The harmonic series and book stacking:
  [Sums that blow up](../level-4/03-sums-blow-up.md).
- Geometric series and sigma notation: [Patterns, level 7](../../patterns/level-7/index.md). Factorials:
  [Counting](../../counting/level-4/01-factorials.md).
- On the U of T shelf: [MAT137 Unit 13, series](../../../uoft/MAT137/unit13.md),
  [MAT137 Unit 14, power series](../../../uoft/MAT137/unit14.md), and
  [MAT159 Unit 5, infinite series](../../../uoft/MAT159H1/unit05.md).
