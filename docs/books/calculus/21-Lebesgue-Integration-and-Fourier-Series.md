# 21. Lebesgue integration and Fourier series

*In 1807 Joseph Fourier claimed that any function on an interval, even one with jumps, can be written as a sum of sines and
cosines. The claim was half wrong and wholly fruitful: working out exactly when it is true took a century and produced
most of modern analysis, including the sets of Cantor, the uniform convergence of Chapter 19, and a new integral. This
chapter first shows where the Riemann integral runs out of strength, builds Lebesgue's integral (measure first, then
integral) and states its three great convergence theorems. Then it turns to Fourier series: how to compute the
coefficients, the square wave and its stubborn overshoot, the different senses in which the series converges, Parseval's
identity, and finally the problem Fourier was trying to solve, how heat spreads along a rod.*

!!! abstract "In this chapter"
    **You will learn:**

    - why limits of Riemann integrable functions need not be Riemann integrable, and why that matters
    - Lebesgue measure: length extended to complicated sets, sets of measure zero, and why some sets have no length
    - the Lebesgue integral as "slicing horizontally", and the monotone and dominated convergence theorems
    - Fourier coefficients from orthogonality, with the square wave and the saw-tooth worked in full
    - the Gibbs phenomenon: a 9 per cent overshoot that never goes away
    - convergence: Dirichlet's theorem, Fejér's theorem (proved), and $L^2$ convergence with Parseval's identity
    - the heat equation solved by Fourier's own method

    **You need:** [Chapter 18](18-The-Real-Numbers.md) (countable sets), [Chapter 19](19-Uniform-Convergence.md)
    (uniform convergence and the Weierstrass approximation theorem), [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md)
    (compactness, completeness, the Cantor set), and [Chapter 8](08-The-Integral.md) (Riemann integral and Darboux sums).
    Partial derivatives from [Chapter 15](15-Functions-of-Several-Variables.md) appear in 21.6.

    **Levels:** 21.1 is advanced; 21.2 and 21.3 are expert in content but written as an overview; 21.4 is intermediate to
    advanced; 21.5 is advanced; 21.6 is advanced.

## 21.1 The limits of the Riemann integral

*Level: advanced.* The Riemann integral of [Chapter 8](08-The-Integral.md) slices the $x$-axis into small pieces and adds
up (height) times (width). It handles continuous functions, monotone functions, functions with finitely many jumps. Where
does it fail?

**Failure 1: wild functions.** The Dirichlet function

$$
D(x) = \begin{cases} 1 & x \text{ rational}, \\ 0 & x \text{ irrational}, \end{cases}
$$

on $[0, 1]$ has every lower sum 0 and every upper sum 1 (every piece of every partition contains both kinds of number),
so it is not Riemann integrable. That might seem fair: it is a strange function. But common sense says its integral should
be 0, since the rationals are countable and "take up no room" (Chapter 18).

**Failure 2: limits.** List the rationals in $[0, 1]$ as $q_1, q_2, q_3, \ldots$ (Chapter 18). Let $D_n(x) = 1$ if $x$
is one of $q_1, \ldots, q_n$, and 0 otherwise. Each $D_n$ is zero except at $n$ points, so it is Riemann integrable with
integral 0. The $D_n$ increase, and $D_n(x) \to D(x)$ at every point. So an increasing sequence of integrable functions,
all with integral 0, converges pointwise to a function that has no Riemann integral at all.

Chapter 19 said: if the convergence is uniform, all is well. But in analysis, and especially in Fourier analysis and
probability, the limits we meet are often not uniform. We want a theorem of the form "if $f_n \to f$ pointwise and the
$f_n$ are controlled in some reasonable way, then $\int f_n \to \int f$", and the Riemann integral cannot have one, because
the limit may not be integrable.

**Failure 3: completeness.** On the Riemann integrable functions, use the distance $d(f, g) = \int_a^b |f - g|$. In this
metric there are Cauchy sequences with no limit among Riemann integrable functions. The space has holes, the way
$\mathbb{Q}$ does (Chapter 18). Filling the holes is exactly what Lebesgue's integral does.

**Failure 4: the fundamental theorem.** Vito Volterra found in 1881 a function $F$ that is differentiable everywhere with
a bounded derivative $F'$ that is not Riemann integrable. For it, $\int_a^b F' = F(b) - F(a)$ does not even make sense in
Riemann's terms.

## 21.2 Measure and the Lebesgue integral

*Level: expert (overview).* Henri Lebesgue's idea, in his thesis of 1902, has two parts. First, extend "length" from
intervals to as many sets as possible. Then, to integrate $f$, slice the *range* instead of the domain: for each height
$y$, ask how big the set $\{x : f(x) > y\}$ is, and add up.

### Measure

**Outer measure.** For any set $A \subseteq \mathbb{R}$, cover it by a countable collection of open intervals
$I_1, I_2, \ldots$, add up their lengths, and take the smallest possible total:

$$
m^*(A) = \inf \left\{ \sum_{k=1}^{\infty} \ell(I_k) : A \subseteq \bigcup_{k=1}^{\infty} I_k \right\}.
$$

Here $\ell(I)$ is the length of the interval $I$, and "inf" is the infimum of Chapter 18.

**Sets of measure zero.** A set has **measure zero** if it can be covered by countably many intervals of total length as
small as you like. Every countable set has measure zero: cover the $k$th point by an interval of length $\varepsilon/2^k$,
total length $\varepsilon$. So $\mathbb{Q}$ has measure zero. So does the Cantor set (Chapter 20), which is uncountable:
it lies inside $2^n$ intervals of total length $(2/3)^n$, for every $n$.

**Intervals get their length.** It is reassuring, and not obvious, that $m^*([a, b]) = b - a$. The inequality $\le$ is easy
(cover $[a, b]$ by one slightly bigger interval). For $\ge$: given a countable cover by open intervals, the Heine-Borel
theorem (Chapter 20) lets us keep only finitely many, and for finitely many intervals covering $[a, b]$ a counting argument
shows their lengths add up to more than $b - a$. So compactness is exactly what stops $[a, b]$ from being covered cheaply.
In particular $[0, 1]$ does not have measure zero, which gives another proof that it is uncountable.

**Measurable sets.** Outer measure is defined for every set, but it is only *additive* on a restricted family. A set $E$ is
**Lebesgue measurable** if it splits every set cleanly: $m^*(A) = m^*(A \cap E) + m^*(A \setminus E)$ for all $A$
(Carathéodory's definition, 1914). The measurable sets include all open sets, all closed sets, all sets of measure zero,
and they are closed under complements and countable unions and intersections (they form a **$\sigma$-algebra**). On them
$m = m^*$ is **countably additive**: if $E_1, E_2, \ldots$ are disjoint and measurable,

$$
m\left(\bigcup_{k} E_k\right) = \sum_{k} m(E_k).
$$

**Not every set is measurable.** Giuseppe Vitali showed in 1905 that, using the axiom of choice, there is a subset of
$[0, 1]$ with no sensible length. *Sketch:* call two numbers equivalent if their difference is rational, and choose one
number from each equivalence class in $[0, 1]$, forming a set $V$. The translates $V + q$ (mod 1) for rational $q$ are
disjoint and fill $[0, 1]$, and all have the same measure. Countably many copies of the same number must add to 1, which is
impossible whether that number is 0 or positive. So $V$ has no measure. This is why measure theory works with a
$\sigma$-algebra instead of all sets. Every set you can describe explicitly is measurable; non-measurable sets need choice.

**A fat Cantor set.** Not all Cantor-like sets have measure zero. From $[0, 1]$ remove an open middle interval of length
$1/4$; from each of the 2 remaining pieces remove a middle interval of length $1/16$; from each of the 4 pieces then left,
one of length $1/64$; and so on. The total removed is

$$
\frac14 + 2 \cdot \frac{1}{16} + 4 \cdot \frac{1}{64} + \cdots = \sum_{n \ge 1} \frac{2^{n-1}}{4^n} = \frac{1/4}{1 - 1/2} = \frac12,
$$

so what is left, the **Smith-Volterra-Cantor set**, has measure $1/2$ and still contains no interval.

### The integral

A **simple function** takes finitely many values, each on a measurable set: $s = \sum_{i=1}^{k} c_i \mathbf{1}_{E_i}$,
where $\mathbf{1}_E$ is the **indicator** of $E$ (1 on $E$, 0 off it). Its integral is the obvious one:

$$
\int s = \sum_{i=1}^{k} c_i \, m(E_i).
$$

A function $f$ is **measurable** if every set $\{x : f(x) > y\}$ is measurable. For measurable $f \ge 0$,

$$
\int f = \sup \left\{ \int s : s \text{ simple}, \ 0 \le s \le f \right\},
$$

and a general $f$ is split into positive and negative parts, $f = f^+ - f^-$. It is **integrable** if $\int |f| < \infty$.

The difference from Riemann is in the slicing. Riemann chops the domain into intervals and asks for the height over each.
Lebesgue chops the range into levels and asks for the size of the set where $f$ is at each level. Counting a pile of coins
by sorting them into denominations and counting each stack, instead of adding them in the order they lie on the table,
gives the same total, but the second way works for far messier piles. A neat formula captures it: for $f \ge 0$,

$$
\int f = \int_0^\infty m(\{x : f(x) > y\})\, dy.
$$

**Examples.**

- The Dirichlet function is the simple function $\mathbf{1}_{\mathbb{Q} \cap [0,1]}$, so its Lebesgue integral is
  $1 \cdot m(\mathbb{Q} \cap [0, 1]) = 0$. Common sense is restored.
- The indicator of the fat Cantor set has Lebesgue integral $1/2$. It is not Riemann integrable (it is discontinuous at
  every point of a set of measure $1/2$).

**Agreement.** Every Riemann integrable function on $[a, b]$ is Lebesgue integrable, with the same integral. So nothing
earlier in this book changes. Lebesgue also answered exactly which functions Riemann's integral handles:

**Lebesgue's criterion.** A bounded function on $[a, b]$ is Riemann integrable if and only if the set of points where it is
discontinuous has measure zero.

This explains Chapter 8 at a stroke: continuous functions (no discontinuities), monotone functions (countably many jumps),
and the Dirichlet function (discontinuous everywhere) all fall into place.

**Almost everywhere.** In Lebesgue's theory, sets of measure zero are invisible to integrals. A property holds **almost
everywhere** (a.e.) if it fails only on a set of measure zero. Two functions equal a.e. have the same integral, so one
usually treats them as the same element of the space $L^1$ of integrable functions. With that convention, the Riesz-Fischer
theorem says that $L^1$, with distance $\int |f - g|$, is complete. Failure 3 is repaired.

**The fundamental theorem, repaired.** For Lebesgue integrable $f$, the function $F(x) = \int_a^x f$ is differentiable
almost everywhere with $F' = f$ a.e. (Lebesgue's differentiation theorem). In the other direction,
$\int_a^b F' = F(b) - F(a)$ holds exactly for the **absolutely continuous** functions $F$. The Cantor function of
Chapter 20, with $F' = 0$ a.e. and $F(1) - F(0) = 1$, is continuous but not absolutely continuous.

**Probability.** A probability is a measure with total mass 1, and an expected value is a Lebesgue integral. That is the
language of [Probability Chapter 17](../probability/17-Measure-Theoretic-Probability.md), where Kolmogorov's 1933 axioms
build on exactly the ideas of this section.

## 21.3 The convergence theorems

*Level: expert (statements).* Here is the payoff, the theorems that the Riemann integral could not have. Proofs take a few
pages each after the construction of the integral; see Folland or Stein and Shakarchi in the Further reading.

**Monotone convergence theorem.** If $0 \le f_1 \le f_2 \le \cdots$ are measurable and $f_n \to f$ pointwise (a.e.), then

$$
\int f_n \to \int f,
$$

where both sides may be $+\infty$.

**Dominated convergence theorem.** If $f_n \to f$ pointwise a.e. and there is one integrable function $g$ with
$|f_n| \le g$ for all $n$, then $f$ is integrable and $\int |f_n - f| \to 0$; in particular $\int f_n \to \int f$.

**Fatou's lemma.** If $f_n \ge 0$ are measurable, then $\int \liminf f_n \le \liminf \int f_n$.

Fatou says mass can be lost in the limit but never created. Dominated convergence says that if the $f_n$ are all held under
one integrable roof, no mass is lost either.

**Example 1.** Failure 2 of 21.1 is now harmless: the $D_n$ increase to $D$, so by monotone convergence
$\int D = \lim \int D_n = 0$.

**Example 2.** Compute $\lim_{n \to \infty} \int_0^n \left(1 - \frac{x}{n}\right)^n dx$. Let
$f_n(x) = (1 - x/n)^n$ for $0 \le x \le n$ and 0 for $x > n$. For each fixed $x$, $f_n(x) \to e^{-x}$ (Chapter 5). And
$0 \le f_n(x) \le e^{-x}$, since $1 - t \le e^{-t}$. So $g(x) = e^{-x}$ dominates, and

$$
\lim_{n \to \infty} \int_0^n \left(1 - \frac{x}{n}\right)^n dx = \int_0^\infty e^{-x}\, dx = 1.
$$

*Check:* directly, with $u = 1 - x/n$, the integral is $n \int_0^1 u^n\, du = n/(n + 1) \to 1$.

**Example 3: what goes wrong without the hypotheses.**

- *Escaping upward:* $f_n = n \mathbf{1}_{(0, 1/n)}$. Then $f_n \to 0$ everywhere but $\int f_n = 1$ for all $n$. No
  integrable $g$ dominates, since the smallest candidate, $\sup_n f_n$, is about $1/x$ near 0, whose integral diverges.
- *Escaping sideways:* $f_n = \mathbf{1}_{[n, n+1]}$ on $\mathbb{R}$. Again $f_n \to 0$ pointwise, $\int f_n = 1$. The
  mass walks off to infinity.

In both cases Fatou's inequality is strict: $0 < 1$.

**Differentiating under the integral.** A consequence of dominated convergence: if $\partial f/\partial t$ exists and
$|\partial f(x,t)/\partial t| \le g(x)$ with $g$ integrable, then
$\frac{d}{dt} \int f(x, t)\, dx = \int \frac{\partial f}{\partial t}(x, t)\, dx$. This is the rule physicists use without a
second thought, and the theorem says when they are right.

## 21.4 Fourier series

*Level: intermediate to advanced.* A vibrating string, a musical note, the daily temperature cycle, the signal from a
spacecraft: all are periodic, or nearly so. Fourier's question was whether every periodic function is a sum of the
simplest periodic functions, sines and cosines.

Take functions with period $2\pi$. A **trigonometric series** is

$$
\frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos(nx) + b_n \sin(nx) \right).
$$

### Finding the coefficients: orthogonality

Suppose $f$ is such a sum. How do we find $a_n$ and $b_n$? The trick is that the building blocks are **orthogonal**: for
whole numbers $m, n \ge 1$,

$$
\int_{-\pi}^{\pi} \cos(mx) \cos(nx)\, dx = \int_{-\pi}^{\pi} \sin(mx)\sin(nx)\, dx = \begin{cases} \pi & m = n, \\ 0 & m \neq n, \end{cases} \qquad \int_{-\pi}^{\pi} \cos(mx)\sin(nx)\, dx = 0.
$$

*Proof of one of them.* For $m \neq n$, $\sin(mx)\sin(nx) = \tfrac12[\cos((m - n)x) - \cos((m + n)x)]$, and the integral
of $\cos(kx)$ over a full period is 0 for any whole $k \neq 0$. For $m = n$, $\sin^2(nx) = \tfrac12(1 - \cos(2nx))$
integrates to $\pi$. The others are alike. $\square$

Multiply the series by $\cos(mx)$, integrate over $[-\pi, \pi]$, and (assuming the integral can be taken term by term)
every term dies except one. That gives the **Fourier coefficients**

$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx, \qquad b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\, dx.
$$

(The $a_0/2$ convention makes the formula for $a_n$ work for $n = 0$ too; $a_0/2$ is the average value of $f$.)

Now turn it around: for any integrable $f$, *define* $a_n, b_n$ by these formulas, and call the series the **Fourier series
of $f$**. Whether it converges, and to what, is the question of 21.5.

It is often neater to use complex exponentials: $e^{inx} = \cos(nx) + i\sin(nx)$ (Chapter 13), with

$$
f(x) \sim \sum_{n = -\infty}^{\infty} c_n e^{inx}, \qquad c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x) e^{-inx}\, dx.
$$

Here $\sim$ means "has Fourier series", not "equals".

**Even and odd.** If $f$ is even ($f(-x) = f(x)$), all $b_n = 0$: a cosine series. If $f$ is odd, all $a_n = 0$: a sine
series. This halves the work.

### The square wave

Let $f(x) = 1$ for $0 < x < \pi$ and $f(x) = -1$ for $-\pi < x < 0$, extended with period $2\pi$. It is odd, so only sines
appear, and

$$
b_n = \frac{2}{\pi} \int_0^{\pi} \sin(nx)\, dx = \frac{2}{\pi} \cdot \frac{1 - \cos(n\pi)}{n} = \frac{2(1 - (-1)^n)}{\pi n},
$$

which is $4/(\pi n)$ for odd $n$ and 0 for even $n$. So

$$
f(x) \sim \frac{4}{\pi} \left( \sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \cdots \right) = \frac{4}{\pi} \sum_{k=0}^{\infty} \frac{\sin((2k+1)x)}{2k + 1}.
$$

A function with jumps is built from perfectly smooth waves. *Check at $x = \pi/2$:* $\sin((2k+1)\pi/2) = (-1)^k$, so if the
series converges to $f(\pi/2) = 1$ there, then

$$
1 - \frac13 + \frac15 - \frac17 + \cdots = \frac{\pi}{4},
$$

Leibniz's series from [Chapter 13](13-Power-Series-and-Taylor.md). At $x = 0$ every term is 0, and the series gives 0: the
average of the values $-1$ and $1$ on either side of the jump. That is no accident (21.5).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 190" role="img" aria-label="The square wave on the interval from minus pi to pi, minus 1 on the left half and plus 1 on the right half, with two partial sums of its Fourier series: one term, a single sine hump, and fifteen terms, which follows the square wave closely but overshoots near each jump.">
  <line x1="30" y1="95" x2="315" y2="95" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="15" x2="170" y2="178" stroke="currentColor" stroke-width="1"/>
  <g stroke="currentColor" stroke-width="2.4" fill="none">
    <line x1="30" y1="150" x2="170" y2="150"/><line x1="170" y1="40" x2="310" y2="40"/>
  </g>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="1.6" points="30.0,95.0 32.3,98.7 34.7,102.3 37.0,106.0 39.3,109.6 41.7,113.1 44.0,116.6 46.3,120.1 48.7,123.5 51.0,126.8 53.3,130.0 55.7,133.1 58.0,136.2 60.3,139.1 62.7,141.9 65.0,144.5 67.3,147.0 69.7,149.4 72.0,151.7 74.3,153.7 76.7,155.6 79.0,157.4 81.3,159.0 83.7,160.4 86.0,161.6 88.3,162.6 90.7,163.5 93.0,164.2 95.3,164.6 97.7,164.9 100.0,165.0 102.3,164.9 104.7,164.6 107.0,164.2 109.3,163.5 111.7,162.6 114.0,161.6 116.3,160.4 118.7,159.0 121.0,157.4 123.3,155.6 125.7,153.7 128.0,151.7 130.3,149.4 132.7,147.0 135.0,144.5 137.3,141.9 139.7,139.1 142.0,136.2 144.3,133.1 146.7,130.0 149.0,126.8 151.3,123.5 153.7,120.1 156.0,116.6 158.3,113.1 160.7,109.6 163.0,106.0 165.3,102.3 167.7,98.7 170.0,95.0 172.3,91.3 174.7,87.7 177.0,84.0 179.3,80.4 181.7,76.9 184.0,73.4 186.3,69.9 188.7,66.5 191.0,63.2 193.3,60.0 195.7,56.9 198.0,53.8 200.3,50.9 202.7,48.1 205.0,45.5 207.3,43.0 209.7,40.6 212.0,38.3 214.3,36.3 216.7,34.4 219.0,32.6 221.3,31.0 223.7,29.6 226.0,28.4 228.3,27.4 230.7,26.5 233.0,25.8 235.3,25.4 237.7,25.1 240.0,25.0 242.3,25.1 244.7,25.4 247.0,25.8 249.3,26.5 251.7,27.4 254.0,28.4 256.3,29.6 258.7,31.0 261.0,32.6 263.3,34.4 265.7,36.3 268.0,38.3 270.3,40.6 272.7,43.0 275.0,45.5 277.3,48.1 279.7,50.9 282.0,53.8 284.3,56.9 286.7,60.0 289.0,63.2 291.3,66.5 293.7,69.9 296.0,73.4 298.3,76.9 300.7,80.4 303.0,84.0 305.3,87.7 307.7,91.3 310.0,95.0"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="1.6" points="30.0,95.0 32.3,143.0 34.7,159.9 37.0,151.3 39.3,144.6 41.7,149.5 44.0,153.7 46.3,150.3 48.7,147.2 51.0,149.8 53.3,152.3 55.7,150.1 58.0,148.0 60.3,149.9 62.7,151.7 65.0,150.1 67.3,148.4 69.7,150.0 72.0,151.4 74.3,150.0 76.7,148.7 79.0,150.0 81.3,151.3 83.7,150.0 86.0,148.8 88.3,150.0 90.7,151.2 93.0,150.0 95.3,148.8 97.7,150.0 100.0,151.2 102.3,150.0 104.7,148.8 107.0,150.0 109.3,151.2 111.7,150.0 114.0,148.8 116.3,150.0 118.7,151.3 121.0,150.0 123.3,148.7 125.7,150.0 128.0,151.4 130.3,150.0 132.7,148.4 135.0,150.1 137.3,151.7 139.7,149.9 142.0,148.0 144.3,150.1 146.7,152.3 149.0,149.8 151.3,147.2 153.7,150.3 156.0,153.7 158.3,149.5 160.7,144.6 163.0,151.3 165.3,159.9 167.7,143.0 170.0,95.0 172.3,47.0 174.7,30.1 177.0,38.7 179.3,45.4 181.7,40.5 184.0,36.3 186.3,39.7 188.7,42.8 191.0,40.2 193.3,37.7 195.7,39.9 198.0,42.0 200.3,40.1 202.7,38.3 205.0,39.9 207.3,41.6 209.7,40.0 212.0,38.6 214.3,40.0 216.7,41.3 219.0,40.0 221.3,38.7 223.7,40.0 226.0,41.2 228.3,40.0 230.7,38.8 233.0,40.0 235.3,41.2 237.7,40.0 240.0,38.8 242.3,40.0 244.7,41.2 247.0,40.0 249.3,38.8 251.7,40.0 254.0,41.2 256.3,40.0 258.7,38.7 261.0,40.0 263.3,41.3 265.7,40.0 268.0,38.6 270.3,40.0 272.7,41.6 275.0,39.9 277.3,38.3 279.7,40.1 282.0,42.0 284.3,39.9 286.7,37.7 289.0,40.2 291.3,42.8 293.7,39.7 296.0,36.3 298.3,40.5 300.7,45.4 303.0,38.7 305.3,30.1 307.7,47.0 310.0,95.0"/>
  <g fill="currentColor" font-size="11">
    <text x="24" y="186">−π</text><text x="304" y="186">π</text><text x="174" y="36">1</text><text x="174" y="164">−1</text>
    <text x="232" y="20">1 term</text><text x="182" y="20">15 terms</text>
  </g>
</svg>
</div>

### The Gibbs phenomenon

Look at the 15-term curve near the jump at 0. It overshoots: it climbs past 1 before settling into ripples. Adding more
terms makes the ripples narrower and squeezes the overshoot closer to the jump, but it does not make it smaller.

The partial sum $S_N(x) = \frac{4}{\pi}\sum_{k=0}^{N-1} \frac{\sin((2k+1)x)}{2k+1}$ has its first maximum at
$x = \pi/(2N)$. There, the sum is a Riemann sum: with $t_k = (2k+1)\pi/(2N)$ and step $\pi/N$,

$$
S_N\!\left(\frac{\pi}{2N}\right) = \frac{2}{\pi} \sum_{k=0}^{N-1} \frac{\sin t_k}{t_k} \cdot \frac{\pi}{N} \to \frac{2}{\pi} \int_0^{\pi} \frac{\sin t}{t}\, dt = \frac{2}{\pi} \operatorname{Si}(\pi) \approx 1.17898.
$$

So the peak tends to about $1.179$, not to 1. The jump is from $-1$ to $1$, height 2, and the overshoot $0.179$ is about
$8.95$ per cent of it. *Check:* the computed peaks are $1.1823$ for $N = 5$, $1.1792$ for $N = 20$ and $1.1790$ for
$N = 100$.

This does not contradict convergence. At each fixed $x \neq 0$, the peak eventually passes to the left of $x$ and $S_N(x) \to 1$. What fails is uniform convergence near the jump, which was impossible anyway: a uniform limit of continuous
functions is continuous (Chapter 19). The phenomenon is named after J. Willard Gibbs, who described it in letters to
*Nature* in 1898 and 1899, prompted by Albert Michelson's harmonic analyser; Henry Wilbraham had analysed it in 1848.
Engineers meet it as "ringing" near sharp edges in filtered signals and compressed images.

!!! note "Try it in Python"
    Watch the Gibbs overshoot refuse to shrink.

    ```python
    from math import sin, pi
    def S(N, x):
        return 4 / pi * sum(sin((2 * k + 1) * x) / (2 * k + 1) for k in range(N))
    for N in (5, 20, 100, 1000):
        print(N, round(S(N, pi / (2 * N)), 5))
    # 5 1.18233   20 1.17919   100 1.17899   1000 1.17898
    ```

### The saw-tooth

Let $f(x) = x$ on $(-\pi, \pi)$, repeated with period $2\pi$: a saw-tooth with a jump of $2\pi$ at each odd multiple of
$\pi$. It is odd, and integrating by parts,

$$
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin(nx)\, dx = \frac{2(-1)^{n+1}}{n}, \qquad x \sim 2\left( \sin x - \frac{\sin 2x}{2} + \frac{\sin 3x}{3} - \cdots \right).
$$

At $x = \pi/2$ this gives Leibniz's series again. This is the series Abel used in 1826 to show that a convergent sum of
continuous functions can jump (Chapter 19).

## 21.5 When does a Fourier series converge?

*Level: advanced.* The answer depends on what "converge" means, and the different answers are among the deepest results of
analysis.

### Pointwise: Dirichlet's theorem

Write $S_N f(x) = \sum_{|n| \le N} c_n e^{inx}$ for the partial sum. Substituting the integral for $c_n$ and summing the
geometric series gives

$$
S_N f(x) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x - t)\, D_N(t)\, dt, \qquad D_N(t) = \sum_{|n| \le N} e^{int} = \frac{\sin\big((N + \tfrac12)t\big)}{\sin(t/2)}.
$$

$D_N$ is the **Dirichlet kernel**. It has a tall spike at $t = 0$ (height $2N + 1$) and total integral $2\pi$, but it also
takes negative values and oscillates, and $\int |D_N|$ grows like $\log N$. That last fact is the source of all the trouble.

**The Riemann-Lebesgue lemma.** If $f$ is integrable on $[-\pi, \pi]$, its Fourier coefficients tend to 0 as
$|n| \to \infty$. (*Idea:* for a step function it is a direct computation, the integral of $e^{-inx}$ over an interval
being at most $2/|n|$; general $f$ are approximated by step functions in the $\int |\cdot|$ distance.)

**Dirichlet's theorem (1829).** Let $f$ be $2\pi$-periodic and piecewise continuously differentiable (finitely many
pieces on each period, each with a continuous derivative up to its ends). Then at every $x$ the Fourier series converges to

$$
\frac{f(x^+) + f(x^-)}{2},
$$

the average of the one-sided limits. In particular it converges to $f(x)$ wherever $f$ is continuous.

*Proof sketch.* Since $\frac{1}{2\pi}\int D_N = 1$ and $D_N$ is even, write
$S_N f(x) - \frac{f(x^+) + f(x^-)}{2}$ as $\frac{1}{2\pi}\int_0^\pi [f(x - t) - f(x^-) + f(x + t) - f(x^+)]\, D_N(t)\, dt$.
The bracket divided by $\sin(t/2)$ stays bounded near $t = 0$ because $f$ has one-sided derivatives there. So the
integrand is (a bounded integrable function) times $\sin((N + \frac12)t)$, and the Riemann-Lebesgue lemma sends it to 0.
$\square$

So the square wave series converges to 1 on $(0, \pi)$, to $-1$ on $(-\pi, 0)$, and to 0 at the jumps, exactly as observed.

**Continuity is not enough.** Paul du Bois-Reymond constructed in 1873 a continuous periodic function whose Fourier series
diverges at a point. Andrey Kolmogorov found in 1923 an integrable function whose Fourier series diverges almost everywhere
(and in 1926 one diverging everywhere). For a time it seemed possible that even continuous functions might have
everywhere divergent Fourier series. Then in 1966 Lennart Carleson proved the opposite: **the Fourier series of every
square-integrable function (in particular every continuous function) converges almost everywhere.** His proof is famously
hard, and the result is one of the high points of twentieth-century analysis.

### Averaging: Fejér's theorem

In 1900 Lipót Fejér, then a student, found that the trouble disappears if you average the partial sums. Let

$$
\sigma_N f(x) = \frac{S_0 f(x) + S_1 f(x) + \cdots + S_N f(x)}{N + 1}
$$

be the **Cesàro means**. The same computation gives $\sigma_N f(x) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x - t) F_N(t)\, dt$
with the **Fejér kernel**

$$
F_N(t) = \frac{1}{N + 1} \left( \frac{\sin\big((N+1)t/2\big)}{\sin(t/2)} \right)^2.
$$

**Theorem (Fejér).** If $f$ is continuous and $2\pi$-periodic, then $\sigma_N f \to f$ uniformly.

*Proof.* The Fejér kernel has three properties: (i) $F_N \ge 0$ (it is a square); (ii)
$\frac{1}{2\pi}\int_{-\pi}^{\pi} F_N = 1$ (it is an average of Dirichlet kernels, each with this integral); (iii) it
concentrates at 0: for any $\delta > 0$, on $\delta \le |t| \le \pi$ we have $\sin^2(t/2) \ge \sin^2(\delta/2)$, so
$F_N(t) \le \frac{1}{(N+1)\sin^2(\delta/2)} \to 0$ uniformly there.

Let $\varepsilon > 0$. Being continuous and periodic, $f$ is bounded, $|f| \le M$, and uniformly continuous (Heine-Cantor,
Chapter 18): choose $\delta$ with $|f(x - t) - f(x)| < \varepsilon/2$ for $|t| < \delta$. By (ii),

$$
|\sigma_N f(x) - f(x)| = \left| \frac{1}{2\pi} \int_{-\pi}^{\pi} \big(f(x - t) - f(x)\big) F_N(t)\, dt \right| \le \frac{1}{2\pi} \int_{-\pi}^{\pi} |f(x - t) - f(x)|\, F_N(t)\, dt,
$$

using (i) to move the absolute value inside. On $|t| < \delta$ the integrand is at most $\frac{\varepsilon}{2} F_N(t)$, which
contributes at most $\varepsilon/2$ by (ii). On $\delta \le |t| \le \pi$ it is at most $2M \cdot \frac{1}{(N+1)\sin^2(\delta/2)}$,
which contributes at most that much; for large $N$ it is below $\varepsilon/2$. Neither bound depends on $x$. $\square$

This is the same proof as Bernstein's in Chapter 19: a positive kernel with total mass 1 that concentrates at a point,
plus uniform continuity. Kernels with these properties are called **approximate identities**, and they appear all over
analysis.

**Consequences.** Trigonometric polynomials are uniformly dense in continuous periodic functions (the Weierstrass theorem in
its trigonometric form). Two continuous functions with the same Fourier coefficients are equal (their Fejér means are
equal). And because the kernel is positive, Fejér means never overshoot: for the square wave, every $\sigma_N$ stays
between $-1$ and $1$. No Gibbs phenomenon.

### In the mean: Parseval's identity

The third sense is energy. For square-integrable $f$, the **$L^2$ norm** is
$\|f\|_2 = \left(\frac{1}{\pi}\int_{-\pi}^{\pi} |f|^2\right)^{1/2}$ (with this normalisation), a measure of the total energy
of a signal.

**Bessel's inequality.** For any square-integrable $f$,

$$
\frac{a_0^2}{2} + \sum_{n=1}^{N} (a_n^2 + b_n^2) \le \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2\, dx.
$$

*Proof.* Let $S_N$ be the partial sum. Expanding $0 \le \int (f - S_N)^2 = \int f^2 - 2\int f S_N + \int S_N^2$ and using
orthogonality together with the coefficient formulas, both $\int f S_N$ and $\int S_N^2$ equal
$\pi \left( \frac{a_0^2}{2} + \sum_{n \le N} (a_n^2 + b_n^2) \right)$. So $0 \le \int f^2 - \pi(\ldots)$. $\square$

**Parseval's identity.** Equality holds in the limit:

$$
\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2\, dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty} (a_n^2 + b_n^2),
$$

and $S_N f \to f$ in the $L^2$ sense: $\int (f - S_N f)^2 \to 0$.

*Proof idea.* The partial sum $S_N f$ is the trigonometric polynomial of degree $N$ *closest* to $f$ in the $L^2$
distance (orthogonal projection: the computation in Bessel's proof shows any other choice of coefficients does worse). By
Fejér, trigonometric polynomials come uniformly close to any continuous $f$, hence close in $L^2$; and continuous functions
come $L^2$-close to any square-integrable $f$. So the best approximations $S_N f$ get arbitrarily close, which is
equality in Bessel. $\square$

Geometrically: the functions $\frac{1}{\sqrt 2}, \cos x, \sin x, \cos 2x, \ldots$ form an **orthonormal basis** of the
space $L^2$, and Parseval is Pythagoras's theorem with infinitely many perpendicular directions. Chapter 22 takes this
picture further. (The Riesz-Fischer theorem completes it: every square-summable sequence of coefficients comes from some
$f$ in $L^2$, which needs Lebesgue's integral, since $L^2$ of Riemann integrable functions is not complete.)

**Example: the Basel problem by Parseval.** For $f(x) = x$, $b_n = 2(-1)^{n+1}/n$ and

$$
\frac{1}{\pi}\int_{-\pi}^{\pi} x^2\, dx = \frac{2\pi^2}{3} = \sum_{n=1}^{\infty} \frac{4}{n^2}, \qquad \text{so} \qquad \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}.
$$

Euler's result from [Chapter 12](12-Sequences-and-Series.md), now with a complete proof.

## 21.6 The heat equation

*Level: advanced.* This is the problem that started it all. A thin metal rod of length $\pi$ lies along $0 \le x \le \pi$.
Its ends are held at temperature 0, and at time 0 its temperature is some given $f(x)$. How does the temperature
$u(x, t)$ evolve?

**The equation.** Heat flows from hot to cold, at a rate proportional to the temperature gradient (Fourier's law): the flux
is $-K\, \partial u/\partial x$. The heat in a small piece $[x, x + \Delta x]$ changes by what flows in at one end minus
what flows out at the other; dividing by $\Delta x$ and letting it shrink gives the **heat equation**

$$
\frac{\partial u}{\partial t} = \kappa\, \frac{\partial^2 u}{\partial x^2},
$$

where $\kappa > 0$, the **diffusivity**, depends on the material. Choose units so $\kappa = 1$. The conditions are
$u(0, t) = u(\pi, t) = 0$ and $u(x, 0) = f(x)$.

**Separation of variables.** Look for solutions of the form $u = X(x)\, T(t)$. Then $X T' = X'' T$, so

$$
\frac{T'(t)}{T(t)} = \frac{X''(x)}{X(x)}.
$$

The left side depends only on $t$ and the right only on $x$, so both equal a constant, say $-\lambda$. Then
$X'' = -\lambda X$ with $X(0) = X(\pi) = 0$. The solutions that are not identically zero are $X = \sin(nx)$ with
$\lambda = n^2$, $n = 1, 2, 3, \ldots$ (Chapter 14), and then $T' = -n^2 T$ gives $T = e^{-n^2 t}$. So each

$$
u_n(x, t) = e^{-n^2 t} \sin(nx)
$$

solves the equation and the boundary conditions. Each is a standing sine shape that fades, and higher frequencies fade
faster: the $n$th mode decays like $e^{-n^2 t}$.

**Superposition.** The equation is linear, so sums of solutions are solutions. Try

$$
u(x, t) = \sum_{n=1}^{\infty} b_n e^{-n^2 t} \sin(nx).
$$

At $t = 0$ this must equal $f(x)$: so the $b_n$ must be the coefficients of the sine series of $f$ on $(0, \pi)$,

$$
b_n = \frac{2}{\pi} \int_0^{\pi} f(x) \sin(nx)\, dx.
$$

This is exactly where Fourier needed his series. And this is why he insisted, against the doubts of his examiners, that
even a discontinuous $f$ could be expanded: physically, a rod can certainly start with a jump in temperature.

**Example.** A rod at temperature 1 throughout, with ends suddenly put on ice. The sine coefficients of $f = 1$ on
$(0, \pi)$ are those of the square wave: $b_n = 4/(\pi n)$ for odd $n$. So

$$
u(x, t) = \frac{4}{\pi} \left( e^{-t} \sin x + \frac{e^{-9t}}{3} \sin 3x + \frac{e^{-25t}}{5} \sin 5x + \cdots \right).
$$

At the middle of the rod at time $t = 1$, the first term is $\frac{4}{\pi}e^{-1} \approx 0.46840$, and the full sum is
$0.46835$: after a short time, only the slowest mode matters, and the rod cools in the shape of a single sine arch. At
$t = 0.1$ the middle is still at $0.9991$, almost untouched.

**Why it is legitimate.** For $t > 0$ the factors $e^{-n^2 t}$ shrink so fast that the series and all its term-by-term
derivatives converge uniformly (M-test, with the $b_n$ bounded), so by Chapter 19 the sum really does satisfy the equation.
At $t = 0$ the series converges to $f$ in the sense of 21.5. A consequence worth noticing: for every $t > 0$, $u$ is
infinitely differentiable in $x$, even if $f$ had jumps. The heat equation smooths instantly. (Run backwards in time, it
would multiply high frequencies by $e^{+n^2 t}$, which is why the backward heat equation is hopelessly unstable.)

**A periodic boundary: daily and yearly waves in the ground.** If the surface of the ground has temperature
$A\cos(\omega t)$, the heat equation in the half-line $x \ge 0$ (depth $x$) has the solution

$$
u(x, t) = A\, e^{-x/d} \cos\left(\omega t - \frac{x}{d}\right), \qquad d = \sqrt{\frac{2\kappa}{\omega}}.
$$

(*Check:* with $\varphi = \omega t - x/d$, differentiating gives $u_t = -A\omega\, e^{-x/d}\sin\varphi$ and
$u_{xx} = -\frac{2A}{d^2}\, e^{-x/d}\sin\varphi$, and these agree after multiplying the second by $\kappa$, because
$\omega = 2\kappa/d^2$.) The temperature wave dies off with depth and arrives late. The **skin depth** $d$ grows like
the square root of the period. On Mars the year lasts about 669 sols, so the yearly wave reaches $\sqrt{669} \approx 26$
times deeper than the daily one, whatever the soil is made of. The same formula explains why an instrument that wants to measure the
slow flow of heat out of a planet's interior has to be buried below the reach of the daily swing.

## A short history

Fourier presented his memoir on heat to the Paris Institute in 1807; the examiners, who included Lagrange and Laplace, were
not satisfied with his treatment of series, and it was not published then. A revised version won the Institute's prize in
1811, and his book *Théorie analytique de la chaleur* appeared in 1822. Much earlier, Daniel Bernoulli had proposed that a
vibrating string's motion is a sum of sine modes, and Euler and d'Alembert had argued about whether arbitrary shapes could
be represented that way.

Dirichlet gave the first rigorous convergence theorem in 1829. Riemann's 1854 Habilitation thesis, written on Fourier
series, introduced the Riemann integral to handle the coefficients. Cantor began his work on sets while studying where a
trigonometric series can fail to be unique, which led to the point sets of Chapter 20 and the infinities of Chapter 18.
Lebesgue's thesis of 1902 created measure and the new integral, and he applied it at once to Fourier series. Riesz and
Fischer proved their theorem in 1907; Fejér's theorem dates from 1900; Carleson's from 1966. In the same years, the needs of
probability led Kolmogorov to put probability on Lebesgue's foundation (1933).

## Check yourself

??? question "1. Cover the rationals in $[0, 1]$ by intervals of total length at most $0.01$."

    List them as $q_1, q_2, \ldots$ and cover $q_k$ by the open interval of length $0.01/2^k$ centred at $q_k$. The total
    length is $0.01 \sum_{k \ge 1} 2^{-k} = 0.01$. Since $0.01$ could be any positive number, $\mathbb{Q} \cap [0,1]$ has
    measure zero.

??? question "2. Show that the fat Cantor set (remove middle intervals of length $4^{-n}$ at stage $n$) has measure $1/2$. Check that each removal fits."

    At stage $n$ we remove $2^{n-1}$ intervals of length $4^{-n}$, total $\sum_{n \ge 1} 2^{n-1} 4^{-n} = \frac{1/4}{1 - 1/2} = \frac12$.
    The removals fit: after stage $n$ the pieces have length $(1 - \sum_{j \le n} 2^{j-1}4^{-j})/2^n > \frac{1}{2^{n+1}}$, which
    exceeds the next removal length $4^{-(n+1)}$. The remaining set has measure $1 - 1/2 = 1/2$.

??? question "3. Compute $\lim_{n\to\infty} \int_0^1 \frac{n x}{1 + n^2 x^2}\, dx$ directly, and then by dominated convergence."

    With $u = nx$: $\int_0^1 \frac{nx}{1+n^2x^2}dx = \frac{1}{2n}\ln(1 + n^2) \to 0$. By the theorem: the pointwise limit
    is 0 (at $x = 0$ every term is 0; for $x > 0$ the term is about $1/(nx)$). Writing $y = nx$, each term is
    $\frac{y}{1 + y^2} \le \frac12$, so the constant $g = \frac12$ dominates on $[0, 1]$ and is integrable there. So the limit
    is $\int_0^1 0 = 0$. (The convergence is not uniform: the value at $x = 1/n$ is always $\frac12$. Dominated convergence
    does not need uniformity.)

??? question "4. Let $f_n = n\, \mathbf{1}_{(0, 1/n)}$. Compute $\int \liminf f_n$ and $\liminf \int f_n$, and compare with Fatou."

    For each $x > 0$, $f_n(x) = 0$ once $n > 1/x$, so $\liminf f_n = 0$ and $\int \liminf f_n = 0$. But $\int f_n = 1$ for
    all $n$, so $\liminf \int f_n = 1$. Fatou's inequality $0 \le 1$ holds, and it is strict: mass escaped.

??? question "5. Find the Fourier series of $f(x) = |x|$ on $(-\pi, \pi)$ and deduce $\sum_{k \ge 0} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$."

    $f$ is even, so $b_n = 0$. $a_0 = \frac{2}{\pi}\int_0^\pi x\,dx = \pi$. For $n \ge 1$, by parts,
    $a_n = \frac{2}{\pi}\int_0^\pi x\cos(nx)\,dx = \frac{2((-1)^n - 1)}{\pi n^2}$, which is $-\frac{4}{\pi n^2}$ for odd $n$
    and 0 for even $n$. So $|x| = \frac{\pi}{2} - \frac{4}{\pi}\sum_{k \ge 0}\frac{\cos((2k+1)x)}{(2k+1)^2}$ (the series
    converges uniformly by the M-test, and $|x|$ is continuous, so equality holds). At $x = 0$:
    $0 = \frac{\pi}{2} - \frac{4}{\pi}\sum \frac{1}{(2k+1)^2}$, giving $\frac{\pi^2}{8}$.

??? question "6. From Exercise 5, deduce $\sum 1/n^2 = \pi^2/6$ without Parseval."

    Let $S = \sum_{n \ge 1} 1/n^2$. The even terms give $\sum 1/(2m)^2 = S/4$, so the odd terms give $3S/4 = \pi^2/8$ and
    $S = \pi^2/6$.

??? question "7. Apply Parseval to $|x|$ to find $\sum_{k \ge 0} \frac{1}{(2k+1)^4}$, and then $\sum_{n \ge 1} \frac{1}{n^4}$."

    $\frac{1}{\pi}\int_{-\pi}^{\pi} x^2\,dx = \frac{2\pi^2}{3}$. Parseval: $\frac{2\pi^2}{3} = \frac{\pi^2}{2} + \frac{16}{\pi^2}\sum_{\text{odd } n}\frac{1}{n^4}$.
    So $\sum_{\text{odd}} \frac{1}{n^4} = \frac{\pi^2}{6}\cdot\frac{\pi^2}{16} = \frac{\pi^4}{96}$. Since the odd terms are
    $1 - \frac{1}{16} = \frac{15}{16}$ of the whole, $\sum \frac{1}{n^4} = \frac{16}{15}\cdot\frac{\pi^4}{96} = \frac{\pi^4}{90}$.

??? question "8. To what value does the square wave's Fourier series converge at $x = \pi$? Explain with Dirichlet's theorem."

    At $x = \pi$ every term $\sin((2k+1)\pi) = 0$, so the series converges to 0. Dirichlet's theorem agrees: the one-sided
    limits there are $1$ (from the left, inside $(0, \pi)$) and $-1$ (from the right, which by periodicity is like
    $(-\pi, 0)$), with average 0.

??? question "9. Prove that $\int_{-\pi}^{\pi} \cos(mx)\cos(nx)\,dx = 0$ for whole numbers $m \neq n$, $m, n \ge 0$."

    $\cos(mx)\cos(nx) = \frac12[\cos((m-n)x) + \cos((m+n)x)]$. Both $m - n$ and $m + n$ are non-zero integers, and
    $\int_{-\pi}^{\pi}\cos(kx)\,dx = \frac{2\sin(k\pi)}{k} = 0$ for every non-zero integer $k$.

??? question "10. Solve the heat equation $u_t = u_{xx}$ on $[0, \pi]$ with zero ends and $u(x, 0) = \sin x + 3\sin 2x$. When is the second mode less than 1 per cent of the first at their peaks?"

    The initial data is already a sine series, so $u = e^{-t}\sin x + 3e^{-4t}\sin 2x$. *Check:* $u_t = -e^{-t}\sin x - 12e^{-4t}\sin 2x = u_{xx}$.
    Ratio of amplitudes: $3e^{-4t}/e^{-t} = 3e^{-3t} < 0.01$ when $t > \frac{\ln 300}{3} \approx 1.90$.

??? question "11. Explain why the Fejér means of the square wave satisfy $-1 \le \sigma_N(x) \le 1$ for all $x$ and $N$."

    $\sigma_N f(x) = \frac{1}{2\pi}\int f(x - t)F_N(t)\,dt$ is a weighted average of values of $f$, with non-negative weights
    $F_N$ of total mass 1. All values of $f$ lie in $[-1, 1]$, so the average does too. The Dirichlet kernel has negative
    parts, which is why $S_N$ can overshoot.

??? question "12. Use dominated convergence to show $\lim_{n \to \infty} \int_0^\infty \frac{n \sin(x/n)}{x(1 + x^2)}\, dx = \frac{\pi}{2}$."

    For each $x > 0$, $n\sin(x/n) \to x$, so the integrand tends to $\frac{1}{1+x^2}$. Since $|\sin y| \le |y|$,
    $\left|\frac{n\sin(x/n)}{x(1+x^2)}\right| \le \frac{1}{1+x^2}$, which is integrable on $[0, \infty)$. By dominated
    convergence the limit is $\int_0^\infty \frac{dx}{1+x^2} = \frac{\pi}{2}$.

## What you learned

- The Riemann integral cannot handle many pointwise limits, and the space of Riemann integrable functions is not complete.
- Lebesgue measure extends length to countable unions and much more; countable sets and the Cantor set have measure zero,
  and non-measurable sets exist only through the axiom of choice.
- The Lebesgue integral slices the range; it agrees with Riemann's where both exist, and a bounded function is Riemann
  integrable exactly when its discontinuities have measure zero.
- Monotone and dominated convergence let limits pass through integrals under simple, checkable conditions.
- Fourier coefficients come from orthogonality; the square wave and saw-tooth give Leibniz's series, and partial sums
  overshoot jumps by about 9 per cent (Gibbs).
- Piecewise smooth functions have pointwise convergent Fourier series (Dirichlet); continuous functions have uniformly
  convergent Fejér means; square-integrable functions converge in $L^2$, with Parseval's identity, and almost everywhere
  (Carleson).
- Separation of variables and sine series solve the heat equation: each mode decays like $e^{-n^2 t}$, and the solution is
  smooth at once.

**Next:** [Chapter 22](22-Where-Analysis-Goes.md), a tour of where analysis goes next: complex analysis, functional
analysis, partial differential equations, wavelets, chaos and the open problems.

## Further reading

- H. Lebesgue, *Intégrale, longueur, aire* (thesis), *Annali di Matematica*, 1902.
- J. Fourier, *Théorie analytique de la chaleur*, 1822 (English translation by A. Freeman, *The Analytical Theory of
  Heat*, 1878).
- L. Carleson, "On convergence and growth of partial sums of Fourier series", *Acta Mathematica* 116, 1966.
- E. M. Stein and R. Shakarchi, *Fourier Analysis: An Introduction*, 2003, and *Real Analysis: Measure Theory, Integration,
  and Hilbert Spaces*, 2005.
- G. B. Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd edition, 1999.
- T. W. Körner, *Fourier Analysis*, 1988.
- E. Hewitt and R. E. Hewitt, "The Gibbs-Wilbraham phenomenon: an episode in Fourier analysis", *Archive for History of
  Exact Sciences* 21, 1979.
- U of T guides: [MAT159 Unit 2, Improper integrals](../../uoft/MAT159H1/unit02.md),
  [MAT257 Unit 9, The Riemann integral in R^n](../../uoft/MAT257Y1/unit09.md).
- Other books on this site: [Probability, measure-theoretic probability](../probability/17-Measure-Theoretic-Probability.md),
  [Probability, continuous random variables](../probability/09-Continuous-Random-Variables.md),
  [Statistics, time series](../statistics/16-Time-Series.md) (spectra of signals).
- Topics lessons: [Gabriel's horn](../../topics/infinity/level-8/03-gabriels-horn.md) (finite volume, infinite surface area),
  [Infinitely small](../../topics/infinity/level-8/06-infinitely-small.md).
