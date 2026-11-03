# 12. Sequences and series

*What does it mean to add infinitely many numbers? Sometimes the answer is clear: $\frac12 + \frac14 + \frac18 + \cdots$
fills up exactly 1. Sometimes it is surprising: $1 + \frac12 + \frac13 + \frac14 + \cdots$, whose terms shrink to 0,
grows past every bound. And sometimes it is shocking: the terms of $1 - \frac12 + \frac13 - \frac14 + \cdots$ can be
reordered to add up to any number you like. This chapter makes "infinite sum" precise, through limits of sequences,
proves the standard tests that decide convergence, separates absolute from conditional convergence, and ends with
Euler's discovery that $1 + \frac14 + \frac19 + \frac1{16} + \cdots = \frac{\pi^2}{6}$, told honestly, followed by a
complete proof.*

!!! abstract "In this chapter"
    **You will learn:**

    - what it means for a sequence to converge, and the monotone convergence theorem (with proof)
    - why $(1 + 1/n)^n$ converges, and to what
    - geometric and telescoping series, the divergence test, and why the harmonic series diverges
    - the comparison, limit comparison, integral, ratio, root and alternating series tests, with proofs
    - absolute versus conditional convergence, and Riemann's rearrangement theorem
    - the Basel problem: Euler's argument, what was missing, and a complete elementary proof

    **You need:** [Chapter 2](02-Limits.md) (the $\varepsilon$–$\delta$ idea, which becomes $\varepsilon$–$N$ here),
    [Chapter 11](11-Applications-of-Integrals.md), Section 11.6 (improper integrals, for the integral test), and the
    geometric series from [Algebra, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md). Gentler versions on
    the Topics shelf: [Settling sequences](../../topics/infinity/level-5/01-settling-sequences.md),
    [Infinite geometric series](../../topics/patterns/level-7/03-infinite-geometric.md),
    [Sums that blow up](../../topics/infinity/level-4/03-sums-blow-up.md) and
    [Convergence tests](../../topics/infinity/level-8/02-convergence-tests.md).

    **Levels:** 12.1 and 12.2 are intermediate; 12.3 is intermediate with full proofs; 12.4 is advanced (the
    rearrangement theorem is proved in outline with all the key steps); 12.5 is advanced, with an expert-level remark on
    infinite products.

## 12.1 Sequences

A **sequence** is an infinite list $a_1, a_2, a_3, \dots$, formally a function from the positive integers to the real
numbers, written $(a_n)$. Examples: $a_n = \frac1n$ gives $1, \frac12, \frac13, \dots$; $a_n = (-1)^n$ gives
$-1, 1, -1, 1, \dots$; and a **recursive** rule such as $a_1 = 1$, $a_{n+1} = \sqrt{2 + a_n}$ gives
$1, \sqrt3, \sqrt{2 + \sqrt3}, \dots \approx 1, 1.732, 1.932, 1.983, 1.996, \dots$

The last one seems to settle down to 2. What exactly does "settle down" mean?

**Definition.** The sequence $(a_n)$ **converges** to the number $L$, written $a_n \to L$ or $\lim_{n\to\infty}a_n = L$,
if for every $\varepsilon > 0$ there is a whole number $N$ such that

$$
|a_n - L| < \varepsilon \quad\text{for all } n \ge N.
$$

A sequence that converges to no number **diverges**.

In words: whatever tolerance $\varepsilon$ you name, from some point on **every** term is within $\varepsilon$ of $L$.
It is the $\varepsilon$–$\delta$ definition of [Chapter 2](02-Limits.md) with "$x$ close to $a$" replaced by "$n$
large". The order of choices matters: $\varepsilon$ is given first, then $N$ may depend on it.

**Example 1.** $\frac1n \to 0$. Given $\varepsilon > 0$, choose $N > \frac1\varepsilon$. Then for $n \ge N$,
$\left|\frac1n - 0\right| = \frac1n \le \frac1N < \varepsilon$. (That such an $N$ exists, that the whole numbers are
not bounded, is the **Archimedean property** of the reals, [Chapter 18](18-The-Real-Numbers.md).)

**Example 2.** $\frac{3n^2 + 1}{2n^2 - n} \to \frac32$. Divide top and bottom by $n^2$: $\frac{3 + 1/n^2}{2 - 1/n}$, and
the limit laws (exactly as for functions in Chapter 2: limits of sums, products and quotients are the sums, products
and quotients of limits, provided the denominator's limit is not 0) give $\frac{3 + 0}{2 - 0}$.

**Example 3.** $(-1)^n$ diverges. If it converged to $L$, take $\varepsilon = 1$: from some $N$ on, every term would be
within 1 of $L$. Then $|1 - (-1)| \le |1 - L| + |L - (-1)| < 2$, but $|1 - (-1)| = 2$. Contradiction.

**Example 4 (geometric sequences).** If $|r| < 1$, then $r^n \to 0$. *Proof:* for $r = 0$ it is clear. Otherwise write
$|r| = \frac{1}{1 + h}$ with $h > 0$. By the binomial theorem (or Bernoulli's inequality, proved by induction),
$(1 + h)^n \ge 1 + nh > nh$, so $|r^n| < \frac{1}{nh}$, which is less than $\varepsilon$ once $n > \frac{1}{h\varepsilon}$.
If $|r| > 1$, $|r^n| \to \infty$ and the sequence diverges; $r = 1$ gives a constant sequence; $r = -1$ is Example 3.

**Theorem 12.1 (basic facts).**

1. A sequence has at most one limit.
2. A convergent sequence is bounded: there is $M$ with $|a_n| \le M$ for all $n$.
3. (Squeeze) If $a_n \le b_n \le c_n$ for all $n$ and $a_n \to L$, $c_n \to L$, then $b_n \to L$.

*Proof.* (1) If $a_n \to L$ and $a_n \to L'$ with $L \ne L'$, take $\varepsilon = \frac{|L - L'|}{2}$. For $n$ large,
both $|a_n - L| < \varepsilon$ and $|a_n - L'| < \varepsilon$, so $|L - L'| \le |L - a_n| + |a_n - L'| < 2\varepsilon = |L - L'|$.
Contradiction. (2) With $\varepsilon = 1$, $|a_n| < |L| + 1$ for $n \ge N$; take $M$ to be the largest of
$|a_1|, \dots, |a_{N-1}|, |L| + 1$. (3) For $n$ large, $L - \varepsilon < a_n \le b_n \le c_n < L + \varepsilon$.
$\blacksquare$

### Monotone sequences

A sequence is **increasing** (more precisely non-decreasing) if $a_1 \le a_2 \le a_3 \le \cdots$, **decreasing** if the
inequalities go the other way, and **monotone** if it is one or the other. It is **bounded above** if some number $M$
has $a_n \le M$ for all $n$.

Here is the theorem that lets us prove convergence **without knowing the limit in advance**, which is exactly what we
will need for series.

**Theorem 12.2 (monotone convergence).** An increasing sequence that is bounded above converges, to the least upper
bound of its terms. Likewise a decreasing sequence that is bounded below converges.

*Proof.* We use the **least upper bound property** of the real numbers: every nonempty set of reals that is bounded
above has a least upper bound, called its **supremum**. (This is the property that distinguishes the reals from the
rationals; here we take it as an axiom, and [Chapter 18](18-The-Real-Numbers.md) discusses where it comes from.) Let
$L = \sup\{a_n\}$. Given $\varepsilon > 0$, the number $L - \varepsilon$ is *not* an upper bound, because $L$ is the
least one. So some term $a_N > L - \varepsilon$. Since the sequence increases, every later term satisfies
$L - \varepsilon < a_N \le a_n \le L$. Hence $|a_n - L| < \varepsilon$ for all $n \ge N$. The decreasing case follows by
applying this to $(-a_n)$. $\blacksquare$

**Example 5.** Back to $a_1 = 1$, $a_{n+1} = \sqrt{2 + a_n}$.

- *Bounded above by 2:* $a_1 = 1 < 2$, and if $a_n < 2$ then $a_{n+1} < \sqrt{4} = 2$. (Induction.)
- *Increasing:* $a_{n+1} > a_n$ means $\sqrt{2 + a_n} > a_n$, i.e. $2 + a_n > a_n^2$, i.e. $(2 - a_n)(1 + a_n) > 0$,
  true since $0 < a_n < 2$.

So $a_n \to L$ for some $L$. Now take limits in the rule: $L = \sqrt{2 + L}$, so $L^2 - L - 2 = 0$, $L = 2$ or $-1$,
and since all terms are positive, $L = 2$. Notice the order: we proved the limit **exists** first. Taking limits in a
rule for a divergent sequence gives nonsense: $a_{n+1} = -a_n$ would "give" $L = -L$, so $L = 0$, for the divergent
$1, -1, 1, \dots$

**Example 6 (the number $e$).** Let $a_n = \left(1 + \frac1n\right)^n$: $a_1 = 2$, $a_{10} \approx 2.5937$,
$a_{100} \approx 2.7048$, $a_{1000} \approx 2.7169$. By the binomial theorem,

$$
a_n = \sum_{k=0}^{n}\binom nk\frac{1}{n^k} = \sum_{k=0}^{n}\frac{1}{k!}\Bigl(1 - \frac1n\Bigr)\Bigl(1 - \frac2n\Bigr)\cdots\Bigl(1 - \frac{k-1}{n}\Bigr).
$$

When $n$ grows, each bracket grows, and there are more (positive) terms; so $(a_n)$ is increasing. Each product of
brackets is at most 1, so $a_n \le \sum_{k=0}^n\frac1{k!} \le 1 + 1 + \frac12 + \frac14 + \cdots + \frac{1}{2^{n-1}} < 3$,
using $k! \ge 2^{k-1}$. By Theorem 12.2 the limit exists; it is the number $e \approx 2.71828$, and it equals
$\sum_{k=0}^\infty\frac1{k!}$ (Exercise 12 sketches why; [Chapter 13](13-Power-Series-and-Taylor.md) does it properly).
This is the "compound interest" definition of $e$; [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md) met $e$
through the derivative of $e^x$, and the two agree.

### Subsequences and Cauchy sequences, briefly

A **subsequence** keeps infinitely many terms in their original order: $a_{n_1}, a_{n_2}, \dots$ with
$n_1 < n_2 < \cdots$. If $a_n \to L$ then every subsequence tends to $L$ (the same $N$ works). So a sequence with two
subsequences tending to different limits diverges, as $(-1)^n$ does.

A sequence is **Cauchy** if its terms get close *to each other*: for every $\varepsilon > 0$ there is $N$ with
$|a_m - a_n| < \varepsilon$ for all $m, n \ge N$. Every convergent sequence is Cauchy (both terms are near $L$). The
converse, **every Cauchy sequence of reals converges**, is another form of completeness; it is proved in
[Chapter 18](18-The-Real-Numbers.md) from the Bolzano–Weierstrass theorem. We will use it once, in 12.4.

## 12.2 Series

**Definition.** Given a sequence $(a_n)$, the **series** $\sum_{n=1}^\infty a_n$ is the sequence of **partial sums**

$$
s_N = a_1 + a_2 + \cdots + a_N.
$$

The series **converges** to $S$, and we write $\sum_{n=1}^\infty a_n = S$, if $s_N \to S$. Otherwise it **diverges**.

So an infinite sum is not something you "do"; it is a limit of things you can do. Everything about series is a
statement about the sequence $(s_N)$.

**Theorem 12.3 (geometric series).** If $|r| < 1$, then $\displaystyle\sum_{n=0}^\infty ar^n = \frac{a}{1 - r}$. If
$|r| \ge 1$ and $a \ne 0$, the series diverges.

*Proof.* $s_N = a + ar + \cdots + ar^{N} = a\,\dfrac{1 - r^{N+1}}{1 - r}$ for $r \ne 1$ (multiply by $1 - r$ and watch
the terms cancel). By Example 4, $r^{N+1}\to0$ when $|r| < 1$, so $s_N \to \frac{a}{1-r}$. When $|r| \ge 1$, the terms
$ar^n$ do not tend to 0, and the next theorem shows divergence. $\blacksquare$

For example, $\sum_{n=0}^\infty 3\left(\frac25\right)^n = \frac{3}{1 - 2/5} = 5$, and $0.999\ldots = \sum_{n=1}^\infty \frac{9}{10^n} = \frac{9/10}{1 - 1/10} = 1$.

**Telescoping series.** If $a_n = b_n - b_{n+1}$, then $s_N = b_1 - b_{N+1}$, so the series converges exactly when
$(b_n)$ does, to $b_1 - \lim b_n$.

**Example 7.** $\displaystyle\frac{1}{n(n+1)} = \frac1n - \frac{1}{n+1}$, so $s_N = 1 - \frac{1}{N+1}$ and
$\displaystyle\sum_{n=1}^\infty\frac{1}{n(n+1)} = 1$.

**Theorem 12.4 (divergence test).** If $\sum a_n$ converges, then $a_n \to 0$. Equivalently, if $a_n \not\to 0$, the
series diverges.

*Proof.* $a_n = s_n - s_{n-1}$, and if $s_n \to S$ then also $s_{n-1}\to S$, so $a_n \to S - S = 0$. $\blacksquare$

So $\sum\frac{n}{n + 1}$ and $\sum(-1)^n$ diverge. But the converse is false, and the most important example of that
is the next one.

### The harmonic series diverges

**Theorem 12.5.** $\displaystyle\sum_{n=1}^\infty\frac1n = 1 + \frac12 + \frac13 + \frac14 + \cdots$ diverges.

*Proof (Oresme's grouping).* Group the terms in blocks that end at powers of 2:

$$
1 + \frac12 + \Bigl(\frac13 + \frac14\Bigr) + \Bigl(\frac15 + \frac16 + \frac17 + \frac18\Bigr) + \Bigl(\frac19 + \cdots + \frac1{16}\Bigr) + \cdots
$$

Each block has $2^{k-1}$ terms, each at least $\frac{1}{2^k}$, so each block is at least $\frac12$. Hence
$s_{2^k} \ge 1 + \frac k2$, which is unbounded. An increasing unbounded sequence diverges. $\blacksquare$

Nicole Oresme gave this argument in the fourteenth century, more than two centuries before calculus. A second proof,
with an estimate, uses the integral: on $[n, n+1]$ we have $\frac1x \le \frac1n$, so

$$
H_N = \sum_{n=1}^N\frac1n \ge \int_1^{N+1}\frac{dx}{x} = \ln(N + 1),
$$

and similarly $H_N \le 1 + \ln N$. The **harmonic numbers** $H_N$ grow like $\ln N$; in fact $H_N - \ln N$ decreases to
a limit $\gamma \approx 0.5772$, the **Euler–Mascheroni constant**, of which we do not even know whether it is
rational. The growth is extraordinarily slow: $H_N$ first exceeds 5 at $N = 83$, and first exceeds 10 at
$N = 12{,}367$. Exceeding 100 would need about $e^{99.42}\approx 1.5\times10^{43}$ terms.

**Example 8 (overhanging books).** Stack identical books of length 1 at the edge of a table, each as far out over the
one below as balance allows. With $n$ books, the top one can stick out $\frac12H_n$ beyond the table's edge (the
centre of mass of the top $k$ books must sit exactly over the edge of the book below; this gives offsets $\frac12, \frac14, \frac16, \dots$). Since $H_4 = 2.083\ldots > 2$, four books already let the top one hang completely beyond the
table; and since $H_n\to\infty$, the overhang can be as large as you like, given enough books.

## 12.3 Convergence tests

Most series cannot be summed exactly. The tests below decide whether a series converges without finding its sum.
The first three are for series of **nonnegative** terms. For those, the partial sums increase, so by Theorem 12.2:

**A series of nonnegative terms converges if and only if its partial sums are bounded.**

Every test for positive series is a way to bound the partial sums.

### Comparison

**Theorem 12.6 (comparison test).** Suppose $0 \le a_n \le b_n$ for all $n$ (or for all large $n$). If $\sum b_n$
converges, so does $\sum a_n$. If $\sum a_n$ diverges, so does $\sum b_n$.

*Proof.* $\sum_{n\le N}a_n \le \sum_{n\le N}b_n \le \sum_{n=1}^\infty b_n$, so the partial sums of $\sum a_n$ are
bounded. The second statement is the contrapositive. Changing finitely many terms changes the partial sums by a fixed
amount, which does not affect convergence, so "for all large $n$" is enough. $\blacksquare$

**Theorem 12.7 (limit comparison).** If $a_n, b_n > 0$ and $\frac{a_n}{b_n}\to L$ with $0 < L < \infty$, then
$\sum a_n$ and $\sum b_n$ converge or diverge together.

*Proof.* For $n$ large, $\frac L2 < \frac{a_n}{b_n} < 2L$, so $a_n < 2Lb_n$ and $b_n < \frac2La_n$. Apply Theorem 12.6
in both directions. $\blacksquare$

**Example 9.** $\sum\frac{1}{2^n + n}$ converges: compare with $\sum\frac{1}{2^n}$. $\sum\frac{n + 1}{n^2 + 5}$ diverges:
the ratio to $\frac1n$ tends to 1. $\sum\sin\frac1n$ diverges: $\frac{\sin(1/n)}{1/n}\to1$ by [Chapter 2](02-Limits.md).

### The integral test

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 210" role="img" aria-label="The curve y equals 1 over x from 1 to 7. Orange rectangles of width 1 with heights 1, 1/2, 1/3, 1/4, 1/5, 1/6 stick out above the curve; blue rectangles with heights 1/2 up to 1/7 sit below it. The curve's area is trapped between the two sums">
  <rect x="30" y="30.0" width="42" height="150.0" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <rect x="72" y="105.0" width="42" height="75.0" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <rect x="114" y="130.0" width="42" height="50.0" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <rect x="156" y="142.5" width="42" height="37.5" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <rect x="198" y="150.0" width="42" height="30.0" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <rect x="240" y="155.0" width="42" height="25.0" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <rect x="30" y="105.0" width="42" height="75.0" fill="#9cc9ea" fill-opacity="0.85" stroke="currentColor" stroke-width="0.8"/>
  <rect x="72" y="130.0" width="42" height="50.0" fill="#9cc9ea" fill-opacity="0.85" stroke="currentColor" stroke-width="0.8"/>
  <rect x="114" y="142.5" width="42" height="37.5" fill="#9cc9ea" fill-opacity="0.85" stroke="currentColor" stroke-width="0.8"/>
  <rect x="156" y="150.0" width="42" height="30.0" fill="#9cc9ea" fill-opacity="0.85" stroke="currentColor" stroke-width="0.8"/>
  <rect x="198" y="155.0" width="42" height="25.0" fill="#9cc9ea" fill-opacity="0.85" stroke="currentColor" stroke-width="0.8"/>
  <rect x="240" y="158.6" width="42" height="21.4" fill="#9cc9ea" fill-opacity="0.85" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 30.0 30.0 L 30.8 32.9 L 31.7 35.8 L 32.5 38.5 L 33.4 41.1 L 34.2 43.6 L 35.0 46.1 L 35.9 48.4 L 36.7 50.7 L 37.6 52.9 L 38.4 55.0 L 39.2 57.0 L 40.1 59.0 L 40.9 61.0 L 41.8 62.8 L 42.6 64.6 L 43.4 66.4 L 44.3 68.1 L 45.1 69.7 L 46.0 71.3 L 46.8 72.9 L 47.6 74.4 L 48.5 75.8 L 49.3 77.3 L 50.2 78.6 L 51.0 80.0 L 51.8 81.3 L 52.7 82.6 L 53.5 83.8 L 54.4 85.1 L 55.2 86.2 L 56.0 87.4 L 56.9 88.5 L 57.7 89.6 L 58.6 90.7 L 59.4 91.8 L 60.2 92.8 L 61.1 93.8 L 61.9 94.8 L 62.8 95.7 L 63.6 96.7 L 64.4 97.6 L 65.3 98.5 L 66.1 99.4 L 67.0 100.2 L 67.8 101.1 L 68.6 101.9 L 69.5 102.7 L 70.3 103.5 L 71.2 104.2 L 72.0 105.0 L 72.8 105.7 L 73.7 106.5 L 74.5 107.2 L 75.4 107.9 L 76.2 108.6 L 77.0 109.2 L 77.9 109.9 L 78.7 110.6 L 79.6 111.2 L 80.4 111.8 L 81.2 112.4 L 82.1 113.0 L 82.9 113.6 L 83.8 114.2 L 84.6 114.8 L 85.4 115.3 L 86.3 115.9 L 87.1 116.4 L 88.0 117.0 L 88.8 117.5 L 89.6 118.0 L 90.5 118.5 L 91.3 119.0 L 92.2 119.5 L 93.0 120.0 L 93.8 120.5 L 94.7 120.9 L 95.5 121.4 L 96.4 121.9 L 97.2 122.3 L 98.0 122.7 L 98.9 123.2 L 99.7 123.6 L 100.6 124.0 L 101.4 124.4 L 102.2 124.9 L 103.1 125.3 L 103.9 125.7 L 104.8 126.0 L 105.6 126.4 L 106.4 126.8 L 107.3 127.2 L 108.1 127.6 L 109.0 127.9 L 109.8 128.3 L 110.6 128.6 L 111.5 129.0 L 112.3 129.3 L 113.2 129.7 L 114.0 130.0 L 114.8 130.3 L 115.7 130.7 L 116.5 131.0 L 117.4 131.3 L 118.2 131.6 L 119.0 131.9 L 119.9 132.2 L 120.7 132.5 L 121.6 132.8 L 122.4 133.1 L 123.2 133.4 L 124.1 133.7 L 124.9 134.0 L 125.8 134.3 L 126.6 134.5 L 127.4 134.8 L 128.3 135.1 L 129.1 135.4 L 130.0 135.6 L 130.8 135.9 L 131.6 136.1 L 132.5 136.4 L 133.3 136.6 L 134.2 136.9 L 135.0 137.1 L 135.8 137.4 L 136.7 137.6 L 137.5 137.9 L 138.4 138.1 L 139.2 138.3 L 140.0 138.6 L 140.9 138.8 L 141.7 139.0 L 142.6 139.2 L 143.4 139.5 L 144.2 139.7 L 145.1 139.9 L 145.9 140.1 L 146.8 140.3 L 147.6 140.5 L 148.4 140.7 L 149.3 140.9 L 150.1 141.1 L 151.0 141.3 L 151.8 141.5 L 152.6 141.7 L 153.5 141.9 L 154.3 142.1 L 155.2 142.3 L 156.0 142.5 L 156.8 142.7 L 157.7 142.9 L 158.5 143.1 L 159.4 143.2 L 160.2 143.4 L 161.0 143.6 L 161.9 143.8 L 162.7 143.9 L 163.6 144.1 L 164.4 144.3 L 165.2 144.5 L 166.1 144.6 L 166.9 144.8 L 167.8 145.0 L 168.6 145.1 L 169.4 145.3 L 170.3 145.4 L 171.1 145.6 L 172.0 145.8 L 172.8 145.9 L 173.6 146.1 L 174.5 146.2 L 175.3 146.4 L 176.2 146.5 L 177.0 146.7 L 177.8 146.8 L 178.7 147.0 L 179.5 147.1 L 180.4 147.2 L 181.2 147.4 L 182.0 147.5 L 182.9 147.7 L 183.7 147.8 L 184.6 147.9 L 185.4 148.1 L 186.2 148.2 L 187.1 148.4 L 187.9 148.5 L 188.8 148.6 L 189.6 148.8 L 190.4 148.9 L 191.3 149.0 L 192.1 149.1 L 193.0 149.3 L 193.8 149.4 L 194.6 149.5 L 195.5 149.6 L 196.3 149.8 L 197.2 149.9 L 198.0 150.0 L 198.8 150.1 L 199.7 150.2 L 200.5 150.4 L 201.4 150.5 L 202.2 150.6 L 203.0 150.7 L 203.9 150.8 L 204.7 150.9 L 205.6 151.0 L 206.4 151.2 L 207.2 151.3 L 208.1 151.4 L 208.9 151.5 L 209.8 151.6 L 210.6 151.7 L 211.4 151.8 L 212.3 151.9 L 213.1 152.0 L 214.0 152.1 L 214.8 152.2 L 215.6 152.3 L 216.5 152.4 L 217.3 152.5 L 218.2 152.6 L 219.0 152.7 L 219.8 152.8 L 220.7 152.9 L 221.5 153.0 L 222.4 153.1 L 223.2 153.2 L 224.0 153.3 L 224.9 153.4 L 225.7 153.5 L 226.6 153.6 L 227.4 153.7 L 228.2 153.8 L 229.1 153.9 L 229.9 154.0 L 230.8 154.0 L 231.6 154.1 L 232.4 154.2 L 233.3 154.3 L 234.1 154.4 L 235.0 154.5 L 235.8 154.6 L 236.6 154.7 L 237.5 154.7 L 238.3 154.8 L 239.2 154.9 L 240.0 155.0 L 240.8 155.1 L 241.7 155.2 L 242.5 155.2 L 243.4 155.3 L 244.2 155.4 L 245.0 155.5 L 245.9 155.6 L 246.7 155.6 L 247.6 155.7 L 248.4 155.8 L 249.2 155.9 L 250.1 156.0 L 250.9 156.0 L 251.8 156.1 L 252.6 156.2 L 253.4 156.3 L 254.3 156.3 L 255.1 156.4 L 256.0 156.5 L 256.8 156.6 L 257.6 156.6 L 258.5 156.7 L 259.3 156.8 L 260.2 156.9 L 261.0 156.9 L 261.8 157.0 L 262.7 157.1 L 263.5 157.1 L 264.4 157.2 L 265.2 157.3 L 266.0 157.3 L 266.9 157.4 L 267.7 157.5 L 268.6 157.5 L 269.4 157.6 L 270.2 157.7 L 271.1 157.7 L 271.9 157.8 L 272.8 157.9 L 273.6 157.9 L 274.4 158.0 L 275.3 158.1 L 276.1 158.1 L 277.0 158.2 L 277.8 158.3 L 278.6 158.3 L 279.5 158.4 L 280.3 158.4 L 281.2 158.5 L 282.0 158.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="20" y1="180" x2="310" y2="180" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="190" x2="30" y2="20" stroke="currentColor" stroke-width="1.2"/>
  <text x="30" y="196" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="72" y="196" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="114" y="196" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="156" y="196" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="198" y="196" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="240" y="196" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="282" y="196" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <text x="24" y="34" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <text x="97" y="56" font-size="13" text-anchor="start" fill="currentColor">y = 1/x</text>
</svg>
</div>

**Theorem 12.8 (integral test).** Let $f$ be positive, continuous and decreasing on $[1, \infty)$, and $a_n = f(n)$.
Then $\sum_{n=1}^\infty a_n$ converges if and only if $\int_1^\infty f(x)\,dx$ converges. Moreover

$$
\int_1^{N+1}f(x)\,dx \le \sum_{n=1}^N a_n \le a_1 + \int_1^Nf(x)\,dx.
$$

*Proof.* On $[n, n+1]$, since $f$ decreases, $f(n+1) \le f(x) \le f(n)$. Integrating over that interval of length 1:
$a_{n+1} \le \int_n^{n+1}f \le a_n$. These are the blue and orange rectangles in the picture. Summing the right
inequality for $n = 1, \dots, N$ gives the left inequality of the theorem; summing the left one for
$n = 1, \dots, N-1$ and adding $a_1$ gives the right inequality. So the partial sums are bounded if and only if the
integrals $\int_1^bf$ are bounded, which (since $f > 0$) is convergence of the improper integral. $\blacksquare$

**Corollary 12.9 ($p$-series).** $\displaystyle\sum_{n=1}^\infty\frac{1}{n^p}$ converges if and only if $p > 1$.

*Proof.* For $p \le 0$ the terms do not tend to 0. For $p > 0$, $f(x) = x^{-p}$ is positive and decreasing, and
$\int_1^\infty x^{-p}\,dx$ converges iff $p > 1$ ([Chapter 11](11-Applications-of-Integrals.md), Theorem 11.2).
$\blacksquare$

So $\sum\frac1{n^2}$ and $\sum\frac{1}{n^{1.01}}$ converge; $\sum\frac{1}{\sqrt n}$ diverges.

**Example 10.** $\displaystyle\sum_{n=2}^\infty\frac{1}{n\ln n}$ diverges, because $\int_2^b\frac{dx}{x\ln x} = \ln\ln b - \ln\ln 2\to\infty$
([Chapter 10](10-Techniques-of-Integration.md), Example 3). It diverges *very* slowly: the partial sums grow like
$\ln\ln N$. But $\sum\frac{1}{n(\ln n)^2}$ converges, since $\int_2^\infty\frac{dx}{x(\ln x)^2} = \frac{1}{\ln 2}$. There is
no "slowest diverging series": between any divergent and convergent series there are always others.

### Ratio and root tests

The comparison test needs something to compare with. The geometric series is the natural yardstick, and two tests
compare automatically with it.

**Theorem 12.10 (ratio test).** Let $a_n > 0$ and suppose $\dfrac{a_{n+1}}{a_n}\to\rho$.

- If $\rho < 1$, $\sum a_n$ converges.
- If $\rho > 1$ (including $\rho = \infty$), $\sum a_n$ diverges.
- If $\rho = 1$, the test says nothing.

*Proof.* If $\rho < 1$, pick $r$ with $\rho < r < 1$. For $n \ge N$, $\frac{a_{n+1}}{a_n} < r$, so
$a_{N+k} < a_Nr^k$. The tail $\sum_{k\ge0}a_{N+k}$ is bounded by the convergent geometric series $a_N\sum r^k$.
If $\rho > 1$, then $a_{n+1} > a_n$ for large $n$, so the terms do not tend to 0. For $\rho = 1$: both $\sum\frac1n$
(divergent) and $\sum\frac1{n^2}$ (convergent) have ratio tending to 1. $\blacksquare$

**Theorem 12.11 (root test).** Let $a_n \ge 0$ and suppose $\sqrt[n]{a_n}\to\rho$. If $\rho < 1$ the series converges;
if $\rho > 1$ it diverges; if $\rho = 1$, no conclusion.

*Proof.* If $\rho < r < 1$, then $a_n < r^n$ for large $n$: compare with the geometric series. If $\rho > 1$,
$a_n > 1$ for large $n$, so $a_n\not\to0$. $\blacksquare$

(Both tests have stronger versions with $\limsup$ in place of the limit; the root test is then strictly stronger than
the ratio test. [Chapter 13](13-Power-Series-and-Taylor.md) uses the root test to find radii of convergence.)

**Example 11.** $\displaystyle\sum\frac{n}{2^n}$: $\frac{a_{n+1}}{a_n} = \frac{n+1}{2n}\to\frac12$. Converges. (Its sum is
2; see Exercise 11.)

**Example 12.** $\displaystyle\sum\frac{n!}{n^n}$: $\frac{a_{n+1}}{a_n} = \frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!} = \Bigl(\frac{n}{n+1}\Bigr)^n = \frac{1}{(1 + 1/n)^n}\to\frac1e < 1$.
Converges. This also shows $n!$ is much smaller than $n^n$.

**Example 13.** $\displaystyle\sum\Bigl(\frac{n}{2n + 1}\Bigr)^n$: $\sqrt[n]{a_n} = \frac{n}{2n+1}\to\frac12$. Converges.

**Example 14.** $\displaystyle\sum\frac{2^n}{n^{10}}$ diverges: the ratio tends to 2. Exponentials beat powers.

### Alternating series

An **alternating series** has terms of alternating sign: $b_1 - b_2 + b_3 - b_4 + \cdots$ with all $b_n > 0$.

**Theorem 12.12 (alternating series test, Leibniz).** If $b_n$ is decreasing and $b_n\to0$, then
$\sum_{n=1}^\infty(-1)^{n+1}b_n$ converges. Moreover, the sum $S$ lies between any two consecutive partial sums, so

$$
|S - s_N| \le b_{N+1}.
$$

*Proof.* Look at the even partial sums: $s_{2k+2} = s_{2k} + (b_{2k+1} - b_{2k+2}) \ge s_{2k}$, so they increase. And
$s_{2k} = b_1 - (b_2 - b_3) - \cdots - (b_{2k-2} - b_{2k-1}) - b_{2k} \le b_1$, so they are bounded above. By monotone
convergence, $s_{2k}\to S$. The odd sums satisfy $s_{2k+1} = s_{2k} + b_{2k+1}\to S + 0 = S$. Since both the even and
the odd partial sums tend to $S$, so does the whole sequence. For the error: the odd sums decrease
($s_{2k+1} - s_{2k-1} = -b_{2k} + b_{2k+1} \le 0$), the even sums increase, and $s_{2k} \le s_{2k+1}$; so every even
sum is $\le S \le$ every odd sum. $S$ lies between $s_N$ and $s_{N+1}$, which differ by $b_{N+1}$. $\blacksquare$

**Example 15.** The **alternating harmonic series** $1 - \frac12 + \frac13 - \frac14 + \cdots$ converges, though the
harmonic series does not. Its sum is $\ln 2 \approx 0.6931$ ([Chapter 13](13-Power-Series-and-Taylor.md) proves it from
the series for $\ln(1 + x)$). The error bound says that the first 1000 terms give $\ln 2$ to within $\frac{1}{1001}$:
a correct but slow method.

**Example 16.** How many terms of $\sum\frac{(-1)^{n+1}}{n!}$ (which equals $1 - \frac1e$) give six correct decimals?
Need $\frac{1}{(N+1)!} < 5\times10^{-7}$: $10! \approx 3.6\times10^6$ works, so $N = 9$ terms suffice.

### Try it in Python

```python
import math
s = 0.0
for n in range(1, 1001):
    s += (-1) ** (n + 1) / n
print(s, math.log(2), abs(s - math.log(2)) < 1 / 1001)
# 0.6926474305598223 0.6931471805599453 True
```

## 12.4 Absolute and conditional convergence

*Level: advanced.*

**Definition.** $\sum a_n$ **converges absolutely** if $\sum|a_n|$ converges. It **converges conditionally** if it
converges but not absolutely.

So $\sum\frac{(-1)^{n+1}}{n^2}$ converges absolutely, while the alternating harmonic series converges conditionally.

**Theorem 12.13.** Absolute convergence implies convergence.

*Proof.* Let $a_n^+ = \max(a_n, 0)$ and $a_n^- = \max(-a_n, 0)$, the **positive and negative parts**. Both are
$\ge 0$, both are $\le|a_n|$, and $a_n = a_n^+ - a_n^-$. If $\sum|a_n|$ converges, then $\sum a_n^+$ and $\sum a_n^-$
converge by comparison, and so does their difference. $\blacksquare$

**Absolutely convergent series behave like finite sums.** In particular:

**Theorem 12.14 (rearrangements of absolutely convergent series).** If $\sum a_n$ converges absolutely to $S$, then
every rearrangement (the same terms in a different order) also converges to $S$.

*Proof.* Let $\sum b_n$ be a rearrangement, so $b_n = a_{\sigma(n)}$ for a bijection $\sigma$ of the positive integers.
Given $\varepsilon > 0$, choose $N$ with $\sum_{n > N}|a_n| < \varepsilon$. Choose $M$ so large that
$\sigma(1), \dots, \sigma(M)$ include all of $1, \dots, N$. For $m \ge M$, the difference
$\sum_{n\le m}b_n - \sum_{n\le N}a_n$ is a sum of distinct terms $a_k$ with $k > N$, so it is at most
$\sum_{k>N}|a_k| < \varepsilon$ in absolute value. Also $\left|\sum_{n\le N}a_n - S\right| \le \sum_{n>N}|a_n| < \varepsilon$.
So $\left|\sum_{n\le m}b_n - S\right| < 2\varepsilon$ for all $m \ge M$. $\blacksquare$

Dirichlet noticed in 1837 that this property holds for absolutely convergent series and fails for the alternating
harmonic series. Here is the failure, in numbers. Write the alternating harmonic series as
$1 - \frac12 + \frac13 - \frac14 + \cdots = \ln 2$ and rearrange it as "one positive term, then two negative terms":

$$
1 - \frac12 - \frac14 + \frac13 - \frac16 - \frac18 + \frac15 - \frac1{10} - \frac1{12} + \cdots
$$

Group each block: $\left(\frac{1}{2k-1} - \frac{1}{4k-2}\right) - \frac{1}{4k} = \frac{1}{4k-2} - \frac{1}{4k} = \frac12\left(\frac{1}{2k-1} - \frac{1}{2k}\right)$.
So the rearranged series is $\frac12\left(1 - \frac12 + \frac13 - \frac14 + \cdots\right) = \frac12\ln 2$. **The same
terms, in a different order, give half the sum.** (The grouping is legitimate because the terms tend to 0: the partial
sums inside a block differ from the block-end sums by terms that tend to 0.) *Check numerically:* 200,000 blocks give
$0.346573$, against $\frac12\ln2 = 0.346574$.

**Theorem 12.15 (Riemann's rearrangement theorem).** If $\sum a_n$ converges conditionally, then for every real number
$T$ there is a rearrangement converging to $T$, and there are rearrangements diverging to $+\infty$ and to $-\infty$.

*Proof, with the key steps.* (1) *Both $\sum a_n^+$ and $\sum a_n^-$ diverge.* If both converged, $\sum|a_n| = \sum a_n^+ + \sum a_n^-$ would converge; if exactly one converged, $\sum a_n = \sum a_n^+ - \sum a_n^-$ would diverge. So the
positive terms alone add up to $+\infty$, and the negative terms alone to $-\infty$. (2) *The terms tend to 0*
(Theorem 12.4). (3) *The greedy construction.* Take positive terms, in their original order, until the running total
first exceeds $T$; this is possible by (1). Then take negative terms until it first drops below $T$; possible by (1)
again. Then positive terms until it exceeds $T$, and so on. Every term is eventually used, because each stage uses at
least one new term and both supplies are infinite. (4) *Convergence to $T$.* At each switch, the running total
overshoots $T$ by at most the size of the last term added; between switches it stays between the last two overshoots.
Since the terms tend to 0 by (2), the overshoots tend to 0, so the running totals tend to $T$. For $+\infty$, aim for
$1$, then $2$, then $3$, and so on, taking just one negative term between targets. $\blacksquare$

Riemann proved this in his 1854 paper on trigonometric series, which was published only after his death. The moral: for conditionally
convergent series, **the order of the terms is part of the data**. A conditionally convergent series is a delicate
balance between two infinite piles; reordering decides which pile is used faster.

## 12.5 The Basel problem

*Level: advanced.*

By the $p$-test, $\sum\frac{1}{n^2}$ converges. To what? The partial sums creep upward: $s_{10} \approx 1.5498$,
$s_{100} \approx 1.6350$, $s_{1000} \approx 1.6439$. The error after $N$ terms is about $\frac1N$ (by the integral
test's bounds), so direct summation gives only a few digits. Pietro Mengoli posed the question in 1650; Jakob Bernoulli
publicised it in 1689 and admitted he could not solve it. It became known as the **Basel problem**, after the Bernoullis'
home town.

### Euler's argument

Leonhard Euler, then in his twenties, found the answer in 1734–1735: $\frac{\pi^2}{6} = 1.644934\ldots$ First he computed
the sum numerically to many decimals with a clever acceleration method, and then he found this argument.

A polynomial with roots $r_1, \dots, r_m$ (none zero) and constant term 1 factors as
$\left(1 - \frac{x}{r_1}\right)\cdots\left(1 - \frac{x}{r_m}\right)$. The function

$$
\frac{\sin x}{x} = 1 - \frac{x^2}{3!} + \frac{x^4}{5!} - \cdots
$$

(the series comes from [Chapter 13](13-Power-Series-and-Taylor.md)) has value 1 at $x = 0$ and roots exactly
$\pm\pi, \pm2\pi, \pm3\pi, \dots$ Treating it as "a polynomial of infinite degree", Euler wrote

$$
\frac{\sin x}{x} = \Bigl(1 - \frac{x}{\pi}\Bigr)\Bigl(1 + \frac{x}{\pi}\Bigr)\Bigl(1 - \frac{x}{2\pi}\Bigr)\Bigl(1 + \frac{x}{2\pi}\Bigr)\cdots = \Bigl(1 - \frac{x^2}{\pi^2}\Bigr)\Bigl(1 - \frac{x^2}{4\pi^2}\Bigr)\Bigl(1 - \frac{x^2}{9\pi^2}\Bigr)\cdots
$$

Now compare the coefficients of $x^2$ on both sides. On the left it is $-\frac16$. On the right, multiplying out, the
$x^2$ terms come from choosing the $x^2$ part of one bracket and 1 from all the others:
$-\frac{1}{\pi^2}\left(1 + \frac14 + \frac19 + \cdots\right)$. Equating,

$$
\sum_{n=1}^\infty\frac{1}{n^2} = \frac{\pi^2}{6}.
$$

**What was missing.** The argument is brilliant, and not a proof. A function is not determined by its zeros:
$e^x\frac{\sin x}{x}$ has exactly the same zeros and the same value at 0, but it is not equal to the product. Nor is it
clear that an infinite product can be multiplied out term by term like a finite one. Euler knew there was a gap; he
checked the answer numerically, used the same method to obtain $\sum\frac{1}{n^4} = \frac{\pi^4}{90}$ and other values
that also checked out numerically, and later gave other derivations. The product formula for $\sin x$ is in fact
true; a full justification needs complex analysis (the Weierstrass factorization theorem, 1876, or a direct argument
with uniform convergence; see [Chapter 19](19-Uniform-Convergence.md) and [Chapter 22](22-Where-Analysis-Goes.md)).
Euler's argument is a superb example of how discoveries are often made: by a daring analogy, checked by calculation,
proved later.

### A complete elementary proof

Here is a proof with nothing beyond trigonometry and the squeeze theorem. It appears in Aigner and Ziegler's
*Proofs from THE BOOK* (listed below), among several others.

*Step 1: an identity.* Let $m \ge 1$ and $x_k = \frac{k\pi}{2m+1}$ for $k = 1, \dots, m$. We show

$$
\sum_{k=1}^m\cot^2x_k = \frac{m(2m-1)}{3}.
$$

By de Moivre's formula ([Algebra, Chapter 9](../algebra/09-Complex-Numbers.md)),
$\cos(nx) + i\sin(nx) = (\cos x + i\sin x)^n$ with $n = 2m + 1$. Expanding the right side by the binomial theorem and
taking imaginary parts:

$$
\sin\bigl((2m+1)x\bigr) = \sum_{j=0}^{m}(-1)^j\binom{2m+1}{2j+1}\cos^{2m-2j}x\,\sin^{2j+1}x = \sin^{2m+1}x\,\sum_{j=0}^m(-1)^j\binom{2m+1}{2j+1}\cot^{2m-2j}x.
$$

At $x = x_k$ the left side is $\sin(k\pi) = 0$, and $\sin x_k \ne 0$. So each $t_k = \cot^2x_k$ is a root of the
polynomial

$$
P(t) = \binom{2m+1}{1}t^m - \binom{2m+1}{3}t^{m-1} + \binom{2m+1}{5}t^{m-2} - \cdots
$$

The $x_k$ lie in $(0, \frac\pi2)$, where $\cot^2$ is strictly decreasing, so the $m$ numbers $t_k$ are distinct, and a
polynomial of degree $m$ has no other roots. By the relation between roots and coefficients
([Algebra, Chapter 10](../algebra/10-Roots-and-Coefficients.md)), their sum is

$$
\frac{\binom{2m+1}{3}}{\binom{2m+1}{1}} = \frac{(2m+1)(2m)(2m-1)/6}{2m+1} = \frac{m(2m-1)}{3}.
$$

*Check:* for $m = 2$, $\cot^2\frac\pi5 + \cot^2\frac{2\pi}5 \approx 1.8944 + 0.1056 = 2 = \frac{2\cdot3}{3}$. ✓

*Step 2: squeeze.* For $0 < x < \frac\pi2$ we have $\sin x < x < \tan x$ (the area argument of
[Chapter 2](02-Limits.md), Section 2.4). Squaring and inverting, $\cot^2x < \frac{1}{x^2} < \frac{1}{\sin^2x} = 1 + \cot^2x$.
Put $x = x_k$ and add over $k = 1, \dots, m$:

$$
\frac{m(2m-1)}{3} < \frac{(2m+1)^2}{\pi^2}\sum_{k=1}^m\frac1{k^2} < m + \frac{m(2m-1)}{3}.
$$

Multiply through by $\frac{\pi^2}{(2m+1)^2}$:

$$
\frac{\pi^2}{(2m+1)^2}\cdot\frac{m(2m-1)}{3} < \sum_{k=1}^m\frac{1}{k^2} < \frac{\pi^2}{(2m+1)^2}\cdot\frac{m(2m+2)}{3}.
$$

As $m\to\infty$, both outer expressions behave like $\frac{\pi^2}{4m^2}\cdot\frac{2m^2}{3}\to\frac{\pi^2}{6}$. By the
squeeze theorem, $\sum_{k=1}^\infty\frac{1}{k^2} = \frac{\pi^2}{6}$. $\blacksquare$

### What came after

Euler's method gives $\sum\frac{1}{n^{2k}}$ for every $k$ as a rational multiple of $\pi^{2k}$ (involving the Bernoulli
numbers): $\frac{\pi^2}{6}, \frac{\pi^4}{90}, \frac{\pi^6}{945}, \dots$ The odd values are another matter. Nobody knows
a closed form for $\sum\frac{1}{n^3} = 1.2020569\ldots$; Roger Apéry proved in 1978 that it is irrational, a result
that astonished the experts. Whether $\sum\frac{1}{n^5}$ is irrational is still unknown. Viewed as a function of the
exponent, $\zeta(s) = \sum\frac{1}{n^s}$ is the **Riemann zeta function**, whose behaviour for complex $s$ controls the
distribution of the primes; see the [Number Theory book, Chapter 14](../number-theory/14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).
A taste of that connection was also Euler's: since every integer factors uniquely into primes,
$\sum\frac{1}{n^s} = \prod_p\frac{1}{1 - p^{-s}}$ for $s > 1$, and letting $s\to1$ (where the harmonic series diverges)
shows that there are infinitely many primes.

## Check yourself

??? question "1. Prove from the definition that $\frac{3n^2+1}{2n^2-n}\to\frac32$."

    $\left|\frac{3n^2 + 1}{2n^2 - n} - \frac32\right| = \left|\frac{2(3n^2+1) - 3(2n^2 - n)}{2(2n^2 - n)}\right| = \frac{3n + 2}{2n(2n-1)}$.
    For $n \ge 1$, $3n + 2 \le 5n$ and $2n - 1 \ge n$, so this is at most $\frac{5n}{2n\cdot n} = \frac{5}{2n}$. Given
    $\varepsilon > 0$, take $N > \frac{5}{2\varepsilon}$; then $n \ge N$ gives an error below $\varepsilon$.

??? question "2. Find $\sum_{n=2}^\infty\frac{1}{n^2 - 1}$."

    $\frac{1}{n^2-1} = \frac12\left(\frac{1}{n-1} - \frac{1}{n+1}\right)$. The partial sum up to $N$ telescopes to
    $\frac12\left(1 + \frac12 - \frac1N - \frac{1}{N+1}\right)\to\frac12\cdot\frac32 = \frac34$.

??? question "3. Let $a_1 = 2$ and $a_{n+1} = \frac12\left(a_n + \frac{2}{a_n}\right)$. Show that $a_n$ converges, and find the limit."

    All terms are positive. By AM–GM, $a_{n+1} \ge \sqrt{a_n\cdot\frac{2}{a_n}} = \sqrt2$, so $a_n \ge \sqrt2$ for all
    $n$ ($a_1 = 2 \ge \sqrt2$ too). Then $a_{n+1} - a_n = \frac{2 - a_n^2}{2a_n} \le 0$, so the sequence decreases. Bounded
    below and decreasing, it converges to some $L \ge \sqrt2 > 0$, and $L = \frac12\left(L + \frac2L\right)$ gives
    $L^2 = 2$, $L = \sqrt2$. (This is Newton's method for $x^2 - 2$, Chapter 7.)

??? question "4. Decide convergence: (a) $\sum\frac{n^2}{3^n}$, (b) $\sum\frac{1}{\sqrt{n}}$, (c) $\sum\frac{\ln n}{n^2}$, (d) $\sum\frac{n!}{2^n}$, (e) $\sum\frac{1}{n^2 - 3n + 5}$."

    (a) Ratio $\frac{(n+1)^2}{3n^2}\to\frac13$: converges. (b) $p = \frac12 \le 1$: diverges. (c) For large $n$,
    $\ln n < \sqrt n$, so $\frac{\ln n}{n^2} < \frac{1}{n^{3/2}}$: converges. (d) Ratio $\frac{n+1}{2}\to\infty$:
    diverges. (e) Limit comparison with $\frac1{n^2}$ (ratio $\to1$), and all terms are positive since the quadratic
    has negative discriminant: converges.

??? question "5. Classify as absolutely convergent, conditionally convergent or divergent: (a) $\sum\frac{(-1)^n}{\sqrt n}$, (b) $\sum\frac{(-1)^n}{n^2}$, (c) $\sum(-1)^n\frac{n}{n+1}$."

    (a) Conditionally: the alternating test applies ($\frac{1}{\sqrt n}$ decreases to 0) but $\sum\frac{1}{\sqrt n}$
    diverges. (b) Absolutely, since $\sum\frac1{n^2}$ converges. (c) Divergent: the terms do not tend to 0.

??? question "6. How many terms of $\sum\frac{(-1)^{n+1}}{n^2}$ guarantee an error below 0.001? What is the sum?"

    By Theorem 12.12 the error after $N$ terms is at most $\frac{1}{(N+1)^2}$, which is below 0.001 when
    $(N+1)^2 > 1000$, i.e. $N + 1 \ge 32$, $N = 31$. The sum is $\left(1 - \frac{2}{4}\right)\frac{\pi^2}{6} = \frac{\pi^2}{12}$:
    subtracting twice the even terms $\frac14\sum\frac{1}{n^2}$ from $\sum\frac1{n^2}$.

??? question "7. Use the integral test bounds to estimate $\sum_{n=1}^\infty\frac{1}{n^3}$ to within 0.01."

    For $f(x) = x^{-3}$ the tail after $N$ terms satisfies $\int_{N+1}^\infty f \le \sum_{n>N}\frac{1}{n^3} \le \int_N^\infty f$,
    i.e. between $\frac{1}{2(N+1)^2}$ and $\frac{1}{2N^2}$. With $N = 5$: $s_5 = 1 + \frac18 + \frac1{27} + \frac1{64} + \frac1{125} \approx 1.18566$,
    and the tail is between $0.0139$ and $0.02$. So the sum is between $1.1995$ and $1.2057$; the midpoint $1.2026$ is
    within $0.001$ of the true value $1.20206$.

??? question "8. Show that if $\sum a_n$ converges absolutely and $(b_n)$ is bounded, then $\sum a_nb_n$ converges absolutely."

    If $|b_n| \le M$, then $|a_nb_n| \le M|a_n|$, and $\sum M|a_n|$ converges. By comparison $\sum|a_nb_n|$ converges.

??? question "9. Rearrange $1 - \frac12 + \frac13 - \frac14 + \cdots$ as two positive terms then one negative term: $1 + \frac13 - \frac12 + \frac15 + \frac17 - \frac14 + \cdots$. Find the sum."

    Let $H_n$ be the harmonic numbers. After $k$ blocks we have used the odd reciprocals up to $\frac1{4k-1}$ and the
    even reciprocals up to $\frac{1}{2k}$. The sum of odd reciprocals up to $\frac{1}{4k-1}$ is $H_{4k} - \frac12H_{2k}$,
    and the sum of even reciprocals up to $\frac1{2k}$ is $\frac12H_k$. With $H_n = \ln n + \gamma + o(1)$, the partial
    sum is $\ln(4k) - \frac12\ln(2k) - \frac12\ln k + o(1) = \ln4 - \frac12\ln 2 + o(1) = \frac32\ln2 + o(1)$. So the
    sum is $\frac32\ln 2 \approx 1.0397$ (a numerical check with 200,000 blocks gives 1.039720).

??? question "10. Explain why the integral test needs $f$ to be decreasing, using $f(x) = \sin^2(\pi x)$."

    For this $f$, $f(n) = 0$ for every integer $n$, so $\sum f(n) = 0$ converges, while $\int_1^\infty\sin^2(\pi x)\,dx$
    diverges (each unit interval contributes $\frac12$). The comparison of rectangles with the area under the curve
    used monotonicity on each $[n, n+1]$; without it the values at integers say nothing about the integral.

??? question "11. Show that $\sum_{n=1}^\infty\frac{n}{2^n} = 2$."

    Let $S$ be the sum (it converges by Example 11). Then $S - \frac12S = \sum\frac{n}{2^n} - \sum\frac{n}{2^{n+1}} = \frac12 + \sum_{n\ge2}\frac{n - (n-1)}{2^n} = \frac12 + \frac12 = 1$, using the geometric series
    $\sum_{n\ge2}2^{-n} = \frac12$. So $S = 2$. (Subtracting term by term is allowed because both series converge.)

??? question "12. From $\sum\frac{1}{n^2} = \frac{\pi^2}{6}$, find $\sum\frac{1}{(2n-1)^2}$. Then use Euler's product and the $x^4$ coefficient of $\frac{\sin x}{x}$ to guess $\sum\frac{1}{n^4}$."

    The even terms give $\sum\frac{1}{(2n)^2} = \frac14\cdot\frac{\pi^2}{6}$, so the odd terms give
    $\frac34\cdot\frac{\pi^2}{6} = \frac{\pi^2}{8}$.

    The $x^4$ coefficient of $\frac{\sin x}{x}$ is $\frac{1}{120}$. In the product it is
    $\sum_{j<k}\frac{1}{j^2k^2\pi^4} = \frac{1}{2\pi^4}\left(\left(\sum\frac1{n^2}\right)^2 - \sum\frac{1}{n^4}\right)$.
    Equating, $\frac{\pi^4}{60} = \frac{\pi^4}{36} - \sum\frac1{n^4}$, so $\sum\frac{1}{n^4} = \frac{\pi^4}{36} - \frac{\pi^4}{60} = \frac{\pi^4}{90}$,
    which is correct (and is proved rigorously by Fourier series in [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md)).

## What you learned

- A sequence converges to $L$ if, for every $\varepsilon > 0$, all terms from some $N$ on are within $\varepsilon$ of
  $L$; bounded monotone sequences converge, by the least upper bound property.
- A series is the sequence of its partial sums. Geometric series converge iff $|r| < 1$; the terms of a convergent
  series tend to 0, but the harmonic series shows the converse is false.
- For positive series, convergence means bounded partial sums; comparison, the integral test ($\sum n^{-p}$ converges
  iff $p > 1$), and the ratio and root tests (comparison with a geometric series) decide most cases.
- Alternating series with terms decreasing to 0 converge, with error at most the first omitted term.
- Absolute convergence implies convergence and makes the sum independent of order; conditionally convergent series
  can be rearranged to any sum (Riemann).
- $\sum\frac{1}{n^2} = \frac{\pi^2}{6}$: Euler's product argument found it; a squeeze with $\cot^2$ proves it.

**Next:** [Chapter 13](13-Power-Series-and-Taylor.md), series whose terms are powers of $x$, which turn functions like
$e^x$, $\sin x$ and $\ln(1+x)$ into infinite polynomials.

## Further reading

- K. Knopp, *Theory and Application of Infinite Series*, 2nd English edition, 1951.
- M. Spivak, *Calculus*, 4th edition, 2008, Chapters 22 and 23 (infinite sequences, infinite series).
- S. Abbott, *Understanding Analysis*, 2nd edition, 2015, Chapter 2 (with rearrangements and the Cauchy criterion).
- D. M. Bressoud, *A Radical Approach to Real Analysis*, 2nd edition, 2007 (series, told through their history).
- M. Aigner and G. M. Ziegler, *Proofs from THE BOOK*, the chapter on $\pi^2/6$ (several proofs of the Basel sum).
- W. Dunham, *Euler: The Master of Us All*, 1999 (Euler's Basel argument in his own words, explained).
- R. Apéry, "Irrationalité de $\zeta(2)$ et $\zeta(3)$", *Astérisque* 61, 1979; and A. van der Poorten, "A proof that Euler missed", *The Mathematical Intelligencer* 1, 1979.
- On this site: the Topics lessons [Convergence tests](../../topics/infinity/level-8/02-convergence-tests.md),
  [The limit definition](../../topics/infinity/level-8/01-limit-definition.md) and
  [Zeno answered](../../topics/infinity/level-5/02-zeno-answered.md); the U of T guides
  [MAT137 Unit 11: Sequences](../../uoft/MAT137/unit11.md), [MAT137 Unit 13: Series](../../uoft/MAT137/unit13.md),
  [MAT159H1 Unit 3: Sequences and Cauchy Sequences](../../uoft/MAT159H1/unit03.md) and
  [MAT159H1 Unit 5: Infinite Series](../../uoft/MAT159H1/unit05.md); the
  [Algebra book, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md); and the
  [Calculus book's contents](index.md).
