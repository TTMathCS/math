# 19. Uniform convergence

*Calculus is full of functions defined as limits: power series, Fourier series, solutions of differential equations
built by iteration, integrals with a parameter. We have often differentiated such limits term by term, or integrated them
term by term, and it has worked. But it does not always work. A limit of continuous functions can jump, the integrals of a
sequence can converge to the wrong number, and the derivatives can run away. This chapter finds the condition that makes
everything work, uniform convergence; proves the theorems that Chapter 13 promised about power series; builds a continuous
function with no derivative anywhere; and proves Weierstrass's theorem that every continuous function on an interval is
a uniform limit of polynomials.*

!!! abstract "In this chapter"
    **You will learn:**

    - the difference between pointwise and uniform convergence, with the standard counterexamples
    - the sup norm, and the uniform Cauchy criterion
    - why a uniform limit of continuous functions is continuous (the epsilon-over-three proof)
    - when limits may be passed through integrals and derivatives, with proofs
    - the Weierstrass M-test, and the proof that power series can be differentiated term by term
    - a continuous function that is differentiable nowhere, with a complete proof
    - the Weierstrass approximation theorem, proved with Bernstein polynomials

    **You need:** [Chapter 18](18-The-Real-Numbers.md) (completeness, uniform continuity), [Chapter 12](12-Sequences-and-Series.md)
    (series and their tests), [Chapter 13](13-Power-Series-and-Taylor.md) (power series), and
    [Chapter 9](09-The-Fundamental-Theorem.md) (the fundamental theorem). The binomial distribution from
    [Probability Chapter 5](../probability/05-Discrete-Random-Variables.md) helps in 19.6.

    **Levels:** 19.1 to 19.4 are advanced; 19.5 and 19.6 are advanced with expert remarks.

## 19.1 Pointwise versus uniform convergence

*Level: advanced.* Start with a sequence of functions $f_1, f_2, f_3, \ldots$, all defined on the same set $D$ (usually an
interval). What should "$f_n$ converges to $f$" mean?

The first idea is to look one point at a time.

**Definition.** $f_n \to f$ **pointwise** on $D$ if for every $x \in D$ the sequence of numbers $f_n(x)$ converges to
$f(x)$. In symbols: for every $x$ and every $\varepsilon > 0$ there is an $N$ such that $|f_n(x) - f(x)| < \varepsilon$ for
all $n \ge N$.

Here $N$ may depend on $x$ as well as $\varepsilon$, exactly as $\delta$ could depend on the point in the definition of
continuity (18.7). That freedom turns out to be the problem.

### Example 1: a limit of continuous functions that jumps

Let $f_n(x) = x^n$ on $[0, 1]$. For $0 \le x < 1$, $x^n \to 0$; at $x = 1$, $1^n = 1$. So the pointwise limit is

$$
f(x) = \begin{cases} 0 & 0 \le x < 1, \\ 1 & x = 1. \end{cases}
$$

Every $f_n$ is a polynomial, as continuous as can be, yet the limit has a jump.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 200" role="img" aria-label="Graphs of x to the power n on the interval from 0 to 1 for n equal to 1, 2, 4, 8 and 16. As n grows the curves hug the x axis further and further to the right before shooting up to 1 at x equal to 1.">
  <line x1="30" y1="170" x2="320" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="30" y1="170" x2="30" y2="12" stroke="currentColor" stroke-width="1"/>
  <g fill="none" stroke-width="1.8">
    <polyline stroke="#7ccf9a" points="30,170.0 310,20.0"/>
    <polyline stroke="#9cc9ea" points="30,170.0 44,169.6 58,168.5 72,166.6 86,164.0 100,160.6 114,156.5 128,151.6 142,146.0 156,139.6 170,132.5 184,124.6 198,116.0 212,106.6 226,96.5 240,85.6 254,74.0 268,61.6 282,48.5 296,34.6 310,20.0"/>
    <polyline stroke="#9cc9ea" points="30,170.0 44,170.0 58,170.0 72,169.9 86,169.8 100,169.4 114,168.8 128,167.7 142,166.2 156,163.8 170,160.6 184,156.3 198,150.6 212,143.2 226,134.0 240,122.5 254,108.6 268,91.7 282,71.6 296,47.8 310,20.0"/>
    <polyline stroke="#eea66f" points="30,170.0 142,169.9 156,169.7 170,169.4 184,168.7 198,167.5 212,165.2 226,161.4 240,155.0 254,144.8 268,129.1 282,105.4 296,70.5 310,20.0"/>
    <polyline stroke="#eea66f" points="30,170.0 198,170.0 212,169.8 226,169.5 240,168.5 254,165.8 268,158.9 282,142.2 296,104.0 310,20.0"/>
  </g>
  <circle cx="310" cy="20" r="3" fill="currentColor"/>
  <g fill="currentColor" font-size="11">
    <text x="26" y="186">0</text><text x="306" y="186">1</text><text x="14" y="24">1</text>
    <text x="150" y="88">n = 1</text><text x="200" y="135">n = 2</text><text x="236" y="160">n = 4</text>
    <text x="40" y="160">n = 8, 16 hug the axis</text>
  </g>
</svg>
</div>

Look at the picture and you see what went wrong. For each fixed $x < 1$, the curves eventually drop to near 0. But how
long you have to wait depends badly on $x$: to get $x^n < 0.01$ at $x = 0.9$ you need $n \ge 44$; at $x = 0.99$, $n \ge 459$;
at $x = 0.999$, $n \ge 4603$. There is no single $N$ that works on the whole interval. For every $n$, there are points just
below 1 where $x^n$ is still close to 1.

### The cure

**Definition.** $f_n \to f$ **uniformly** on $D$ if for every $\varepsilon > 0$ there is an $N$ such that

$$
|f_n(x) - f(x)| < \varepsilon \quad \text{for all } n \ge N \text{ and all } x \in D.
$$

Now $N$ depends only on $\varepsilon$. Picture a band of half-width $\varepsilon$ around the graph of $f$: uniform
convergence says that from some $N$ on, the whole graph of $f_n$ lies inside the band.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 190" role="img" aria-label="A smooth curve f with a band of width epsilon above and below it, and a wiggly curve f_n that stays entirely inside the band.">
  <g fill="none" stroke-width="1.2" stroke-dasharray="4 3" stroke="currentColor">
    <polyline points="30,80.0 37,73.0 44,66.1 51,59.6 58,53.5 65,48.2 72,43.6 79,39.9 86,37.2 93,35.6 100,35.0 107,35.6 114,37.2 121,39.9 128,43.6 135,48.2 142,53.5 149,59.6 156,66.1 163,73.0 170,80.0 177,87.0 184,93.9 191,100.4 198,106.5 205,111.8 212,116.4 219,120.1 226,122.8 233,124.4 240,125.0 247,124.4 254,122.8 261,120.1 268,116.4 275,111.8 282,106.5 289,100.4 296,93.9 303,87.0 310,80.0"/>
    <polyline points="30,110.0 37,103.0 44,96.1 51,89.6 58,83.5 65,78.2 72,73.6 79,69.9 86,67.2 93,65.6 100,65.0 107,65.6 114,67.2 121,69.9 128,73.6 135,78.2 142,83.5 149,89.6 156,96.1 163,103.0 170,110.0 177,117.0 184,123.9 191,130.4 198,136.5 205,141.8 212,146.4 219,150.1 226,152.8 233,154.4 240,155.0 247,154.4 254,152.8 261,150.1 268,146.4 275,141.8 282,136.5 289,130.4 296,123.9 303,117.0 310,110.0"/>
  </g>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.2" points="30,95.0 37,88.0 44,81.1 51,74.6 58,68.5 65,63.2 72,58.6 79,54.9 86,52.2 93,50.6 100,50.0 107,50.6 114,52.2 121,54.9 128,58.6 135,63.2 142,68.5 149,74.6 156,81.1 163,88.0 170,95.0 177,102.0 184,108.9 191,115.4 198,121.5 205,126.8 212,131.4 219,135.1 226,137.8 233,139.4 240,140.0 247,139.4 254,137.8 261,135.1 268,131.4 275,126.8 282,121.5 289,115.4 296,108.9 303,102.0 310,95.0"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="1.6" points="30,95.0 37,78.6 44,72.6 51,76.2 58,78.5 65,70.6 72,55.3 79,44.5 86,46.0 93,55.3 100,60.5 107,55.3 114,46.0 121,44.5 128,55.3 135,70.6 142,78.5 149,76.2 156,72.6 163,78.6 170,95.0 177,111.4 184,117.4 191,113.8 198,111.5 205,119.4 212,134.7 219,145.5 226,144.0 233,134.7 240,129.5 247,134.7 254,144.0 261,145.5 268,134.7 275,119.4 282,111.5 289,113.8 296,117.4 303,111.4 310,95.0"/>
  <g fill="currentColor" font-size="11">
    <text x="92" y="26">f + ε</text><text x="232" y="172">f − ε</text>
    <text x="280" y="88">f</text><text x="196" y="102">fₙ</text>
  </g>
</svg>
</div>

A neat way to say this uses one number per function. The **sup norm** of a bounded function $g$ on $D$ is

$$
\|g\|_\infty = \sup_{x \in D} |g(x)|,
$$

the height of the highest point of $|g|$. Then $f_n \to f$ uniformly exactly when $\|f_n - f\|_\infty \to 0$: the largest
gap between $f_n$ and $f$ shrinks to zero.

For Example 1, $\|x^n - f\|_\infty = \sup_{0 \le x < 1} x^n = 1$ for every $n$. It does not shrink: not uniform.

On a smaller interval $[0, b]$ with $b < 1$, though, $\|x^n\|_\infty = b^n \to 0$. So $x^n \to 0$ uniformly on $[0, b]$.
Uniform convergence depends on the domain, and trouble often lives at one bad point.

### Example 2: a bump that runs into the wall

Let $f_n(x) = n x (1 - x^2)^n$ on $[0, 1]$. At $x = 0$ and $x = 1$, $f_n = 0$. For $0 < x < 1$, $(1 - x^2)^n$ shrinks
geometrically while $n$ only grows linearly, so $f_n(x) \to 0$. Pointwise limit: $f = 0$.

But setting the derivative to zero, $(1 - x^2)^n = 2n x^2 (1 - x^2)^{n - 1}$, so $1 - x^2 = 2nx^2$ and the peak is at
$x = 1/\sqrt{2n + 1}$, with height

$$
\frac{n}{\sqrt{2n+1}} \left(\frac{2n}{2n+1}\right)^n,
$$

which grows without bound (about $\sqrt{n/2}\, e^{-1/2}$). *Check:* for $n = 1, 5, 50$ the heights are $0.385$, $0.936$,
$3.025$. The bump gets taller and thinner and slides towards 0. Very much not uniform.

### Example 3: shrinking wiggles

Let $f_n(x) = \dfrac{\sin(nx)}{\sqrt n}$ on $\mathbb{R}$. Then $|f_n(x)| \le 1/\sqrt n$ for every $x$, so
$\|f_n\|_\infty = 1/\sqrt n \to 0$: uniform convergence to 0. Hold on to this one; it causes trouble in 19.3.

### The uniform Cauchy criterion

Often we do not know the limit in advance (it is the function we are trying to define). Then we need a test that only
compares the $f_n$ with each other, the analogue of a Cauchy sequence (18.3).

**Theorem (uniform Cauchy criterion).** A sequence of functions $f_n$ on $D$ converges uniformly (to some function) if and
only if for every $\varepsilon > 0$ there is an $N$ with $|f_m(x) - f_n(x)| < \varepsilon$ for all $m, n \ge N$ and all
$x \in D$.

*Proof.* If $f_n \to f$ uniformly, choose $N$ with $|f_n(x) - f(x)| < \varepsilon/2$ for $n \ge N$ and all $x$; the
triangle inequality gives $|f_m(x) - f_n(x)| < \varepsilon$.

Conversely, suppose the condition holds. For each fixed $x$, the numbers $f_n(x)$ form a Cauchy sequence, so they converge
(Chapter 18: Cauchy sequences of reals converge). Call the limit $f(x)$. Given $\varepsilon$, choose $N$ as in the
condition, fix $n \ge N$ and $x$, and let $m \to \infty$ in $|f_m(x) - f_n(x)| < \varepsilon$. This gives
$|f(x) - f_n(x)| \le \varepsilon$, for all $x$ and all $n \ge N$. That is uniform convergence. $\square$

This is completeness again, now one level up: the space of bounded functions with the sup norm is complete. Chapter 20
will turn that sentence into a precise and powerful theorem.

<figure class="play" data-play="unif"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> xⁿ on [0, 1] converges at every point, but not uniformly: near x = 1 the curve always escapes the band.</figcaption></figure>

## 19.2 Uniform limits of continuous functions are continuous

*Level: advanced.* Example 1 shows that pointwise limits can break continuity. Uniform limits cannot.

**Theorem.** If each $f_n$ is continuous at $c$ and $f_n \to f$ uniformly on $D$, then $f$ is continuous at $c$. In
particular a uniform limit of continuous functions is continuous.

*Proof (the epsilon-over-three argument).* Let $\varepsilon > 0$. Choose one $n$ with $\|f_n - f\|_\infty < \varepsilon/3$
(possible by uniform convergence). This $f_n$ is continuous at $c$, so there is $\delta > 0$ with
$|f_n(x) - f_n(c)| < \varepsilon/3$ whenever $|x - c| < \delta$. For such $x$,

$$
|f(x) - f(c)| \le |f(x) - f_n(x)| + |f_n(x) - f_n(c)| + |f_n(c) - f(c)| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon. \quad \square
$$

Read the three terms as a journey: from $f(x)$ to the nearby $f_n(x)$ (small because uniform), along the continuous curve
$f_n$ to $f_n(c)$ (small because continuous), and back up to $f(c)$ (small because uniform). The first step needs the
same $n$ to work at the moving point $x$ and at $c$; that is exactly what "uniform" supplies.

**Use it backwards.** Since the limit in Example 1 is discontinuous, the convergence of $x^n$ on $[0, 1]$ cannot be
uniform. That is a quick way to prove non-uniformity.

**A partial converse (Dini's theorem).** If continuous functions $f_n$ on a closed bounded interval $[a, b]$ *decrease*
pointwise to a *continuous* limit $f$, then the convergence is uniform.

*Proof.* Let $g_n = f_n - f$, so $g_n \ge 0$, $g_n$ decreases in $n$, and $g_n \to 0$ pointwise. Suppose the convergence
were not uniform: then for some $\varepsilon > 0$ and infinitely many $n$, there is $x_n$ with $g_n(x_n) \ge \varepsilon$;
since the $g_n$ decrease, we may take this for every $n$. By Bolzano-Weierstrass a subsequence $x_{n_k} \to c \in [a, b]$.
For any fixed $m$, when $n_k \ge m$ we have $g_m(x_{n_k}) \ge g_{n_k}(x_{n_k}) \ge \varepsilon$, so by continuity of $g_m$,
$g_m(c) \ge \varepsilon$. This holds for all $m$, contradicting $g_m(c) \to 0$. $\square$

Example 1 does not contradict Dini: the $x^n$ do decrease, but their limit is not continuous.

## 19.3 Integrating and differentiating limits

*Level: advanced.* We want to know when

$$
\lim_{n \to \infty} \int_a^b f_n(x)\, dx = \int_a^b \lim_{n \to \infty} f_n(x)\, dx \qquad \text{and} \qquad \Big(\lim_{n\to\infty} f_n\Big)' = \lim_{n \to \infty} f_n'.
$$

Both are "swapping two limits" (an integral is a limit of Riemann sums, a derivative a limit of difference quotients),
and swapping limits is never free.

### Integrals

Example 2 shows the danger. With $f_n(x) = n x(1 - x^2)^n$, substitute $u = 1 - x^2$:

$$
\int_0^1 n x (1 - x^2)^n \, dx = \frac{n}{2} \int_0^1 u^n \, du = \frac{n}{2(n + 1)} \to \frac{1}{2},
$$

while the integral of the pointwise limit is $\int_0^1 0 \, dx = 0$. The area of the bump does not disappear, even though
the bump vanishes at each point.

**Theorem.** If each $f_n$ is integrable on $[a, b]$ and $f_n \to f$ uniformly, then $f$ is integrable and

$$
\int_a^b f_n(x)\, dx \to \int_a^b f(x)\, dx.
$$

*Proof.* We prove it when each $f_n$ is continuous, which is the case we need (then $f$ is continuous by 19.2, hence
integrable by Chapter 18). The general case adds an argument with upper and lower sums; see Rudin, Theorem 7.16. With
$f$ integrable,

$$
\left| \int_a^b f_n - \int_a^b f \right| \le \int_a^b |f_n(x) - f(x)|\, dx \le (b - a)\, \|f_n - f\|_\infty \to 0. \quad \square
$$

The proof is one line, and it shows why uniformity is the right condition: the integral of the error is at most the
length times the *largest* error.

**For series.** Apply the theorem to partial sums. If $\sum_k g_k$ converges uniformly on $[a, b]$ and each $g_k$ is
continuous, then

$$
\int_a^b \sum_{k=0}^{\infty} g_k(x)\, dx = \sum_{k=0}^{\infty} \int_a^b g_k(x)\, dx.
$$

**Example.** On $[0, 1/2]$, $\sum_{k \ge 0} x^k = 1/(1 - x)$ converges uniformly (the tail after $n$ terms is
$x^{n}/(1 - x) \le 2 \cdot 2^{-n}$). Integrating term by term,

$$
\ln 2 = \int_0^{1/2} \frac{dx}{1 - x} = \sum_{k=0}^{\infty} \frac{(1/2)^{k+1}}{k+1} = \frac{1}{2} + \frac{1}{8} + \frac{1}{24} + \frac{1}{64} + \cdots
$$

*Check:* the first six terms add to $0.6911$, and $\ln 2 = 0.6931\ldots$; the tail is less than $2^{-7} \cdot 2/7 \approx 0.002$.

The same argument works for every power series inside its radius of convergence; the general statements for power series,
term-by-term integration and term-by-term differentiation, are proved in 19.4, once the M-test gives the uniform convergence
they need.

### Derivatives

Here uniform convergence of the functions is *not* enough. Example 3 converges uniformly to 0, but
$f_n'(x) = \sqrt{n} \cos(nx)$, and at $x = 0$ that is $\sqrt n \to \infty$. Uniformly small functions can have wild slopes.

Even if the derivatives converge, they may converge to the wrong thing. Let $f_n(x) = \dfrac{x}{1 + n x^2}$ on $\mathbb{R}$.
The maximum of $|f_n|$ is at $x = 1/\sqrt n$, value $1/(2\sqrt n)$, so $f_n \to 0$ uniformly. The derivatives are

$$
f_n'(x) = \frac{1 - nx^2}{(1 + nx^2)^2},
$$

which tend to 0 for $x \neq 0$ but equal 1 at $x = 0$ for every $n$. So $\lim f_n'$ is 1 at 0, while $(\lim f_n)' = 0$
everywhere.

The right theorem puts the uniformity on the *derivatives*.

**Theorem.** Let each $f_n$ be continuously differentiable on $[a, b]$. Suppose $f_n'$ converges uniformly to some $g$,
and $f_n(x_0)$ converges for at least one point $x_0$. Then $f_n$ converges uniformly to a function $f$, which is
differentiable with $f' = g$.

*Proof.* By the fundamental theorem of calculus ([Chapter 9](09-The-Fundamental-Theorem.md)),

$$
f_n(x) = f_n(x_0) + \int_{x_0}^{x} f_n'(t)\, dt.
$$

As $n \to \infty$, $f_n(x_0) \to$ some number $A$, and by the integral theorem the integral tends to
$\int_{x_0}^x g(t)\, dt$, uniformly in $x$ (the error is at most $(b - a)\|f_n' - g\|_\infty$). So $f_n \to f$ uniformly,
where

$$
f(x) = A + \int_{x_0}^{x} g(t)\, dt.
$$

Here $g$ is continuous, as a uniform limit of continuous functions, so by the fundamental theorem again $f' = g$. $\square$

(The theorem stays true without assuming the $f_n'$ continuous, with a proof by the mean value theorem; see Rudin,
Theorem 7.17.)

## 19.4 The Weierstrass M-test

*Level: advanced.* For series of functions, the most useful test for uniform convergence is a comparison with a series
of numbers.

**Weierstrass M-test.** Suppose $|g_k(x)| \le M_k$ for all $x \in D$ and all $k$, where $\sum M_k$ is a convergent series
of numbers. Then $\sum g_k(x)$ converges absolutely and uniformly on $D$.

*Proof.* For $m > n$ and every $x$,

$$
\left| \sum_{k=n+1}^{m} g_k(x) \right| \le \sum_{k=n+1}^{m} M_k \le \sum_{k=n+1}^{\infty} M_k.
$$

The right side is the tail of a convergent series, so it tends to 0 as $n \to \infty$, and it does not depend on $x$. So
the partial sums satisfy the uniform Cauchy criterion. $\square$

**Example 1.** $F(x) = \sum_{k=1}^{\infty} \dfrac{\sin(kx)}{k^2}$. Here $|\sin(kx)/k^2| \le 1/k^2$, and $\sum 1/k^2$
converges (to $\pi^2/6$, Chapter 12). So the series converges uniformly on all of $\mathbb{R}$, and $F$ is continuous.

Can we differentiate it term by term? The differentiated series is $\sum \cos(kx)/k$, and $|\cos(kx)/k| \le 1/k$ gives only
a divergent bound. The M-test is silent, and with reason: at $x = 0$ the differentiated series is the harmonic series. By
contrast, $G(x) = \sum \cos(kx)/k^3$ can be differentiated once term by term (the derivatives are bounded by $1/k^2$),
giving $G'(x) = -\sum \sin(kx)/k^2$.

**Example 2: the zeta function.** For $s > 1$, $\zeta(s) = \sum_{k \ge 1} k^{-s}$. On any half-line $s \ge 1 + \delta$
with $\delta > 0$, $k^{-s} \le k^{-1-\delta}$, a convergent series. So the convergence is uniform on $[1 + \delta, \infty)$
and $\zeta$ is continuous for $s > 1$ (every $s > 1$ lies in such a half-line). The function is the hero of
[Number Theory Chapter 14](../number-theory/14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).

### Power series: the proof promised in Chapter 13

[Chapter 13](13-Power-Series-and-Taylor.md) stated that a power series can be differentiated and integrated term by term
inside its interval of convergence. Now we prove it.

**Lemma.** If $\sum a_k x^k$ has radius of convergence $R > 0$, then it converges uniformly on $[-r, r]$ for every
$0 < r < R$.

*Proof.* Choose $\rho$ with $r < \rho < R$. The series converges at $x = \rho$, so its terms are bounded:
$|a_k| \rho^k \le C$. For $|x| \le r$, $|a_k x^k| \le C (r/\rho)^k$, and $\sum C (r/\rho)^k$ is a convergent geometric
series. Apply the M-test. $\square$

**Theorem.** If $f(x) = \sum_{k \ge 0} a_k x^k$ has radius $R > 0$, then $f$ is differentiable on $(-R, R)$ with

$$
f'(x) = \sum_{k \ge 1} k a_k x^{k-1},
$$

and this series also has radius $R$. Consequently $f$ has derivatives of all orders, and $a_k = f^{(k)}(0)/k!$.

*Proof.* The differentiated series has the same radius: by the root test the radius is $1/\limsup |k a_k|^{1/k}$, and
$k^{1/k} \to 1$, so this equals $1/\limsup |a_k|^{1/k} = R$. Given $x$ with $|x| < R$, choose $r$ with $|x| < r < R$. On
$[-r, r]$ the partial sums $\sum_{k \le n} a_k t^k$ are polynomials, and their derivatives $\sum_{k \le n} k a_k t^{k-1}$
converge uniformly by the lemma (applied to the differentiated series). The partial sums converge at $t = 0$. The
derivative theorem of 19.3 says the limit $f$ is differentiable on $[-r, r]$ with the derivative obtained term by term.
Repeat for higher derivatives; setting $x = 0$ in the $k$th derivative gives $f^{(k)}(0) = k!\, a_k$. $\square$

**Theorem (term-by-term integration).** Under the same hypothesis, for every $x$ with $|x| < R$,

$$
\int_0^x f(t)\, dt = \sum_{k \ge 0} \frac{a_k}{k+1}\, x^{k+1}.
$$

*Proof.* Choose $r$ with $|x| < r < R$. By the lemma the partial sums converge uniformly on $[-r, r]$, hence on the interval
between 0 and $x$, and each partial sum is a continuous polynomial. The integral theorem of 19.3, applied to the partial
sums, lets us integrate term by term, and $\int_0^x a_k t^k\, dt = a_k x^{k+1}/(k+1)$. $\square$

**Example.** Differentiate $\sum_{k \ge 0} x^k = \dfrac{1}{1 - x}$ for $|x| < 1$:

$$
\sum_{k \ge 1} k x^{k-1} = \frac{1}{(1 - x)^2}.
$$

*Check:* at $x = 1/2$, $\sum k 2^{-(k-1)} = 1 + 1 + 3/4 + 1/2 + 5/16 + \cdots = 4$, and $1/(1/2)^2 = 4$.

Note the honest limit of the lemma: convergence is uniform on each closed interval *inside* $(-R, R)$, not necessarily on
all of it. The geometric series converges on $(-1, 1)$ but not uniformly there, because its partial sums are bounded by
$n$ while the limit $1/(1 - x)$ is unbounded near 1 (Exercise 7).

## 19.5 A continuous function that is nowhere differentiable

*Level: advanced, with an expert remark.* Until the 1870s most mathematicians believed, and some textbooks "proved", that a
continuous function must be differentiable at most points, with perhaps a few corners like $|x|$. In 1872 Karl
Weierstrass presented to the Berlin Academy a counterexample:

$$
W(x) = \sum_{n=0}^{\infty} a^n \cos(b^n \pi x),
$$

with $0 < a < 1$, $b$ an odd integer, and $ab > 1 + \tfrac{3\pi}{2}$. By the M-test (with $M_n = a^n$) the series
converges uniformly, so $W$ is continuous. Weierstrass proved it has no derivative at any point. G. H. Hardy showed in
1916 that $ab \ge 1$ is enough. The full proof of either is a few pages of careful estimates; the idea is that the $n$th
term has amplitude $a^n$ but slope of size about $(ab)^n \pi$, so when $ab > 1$ the slopes of later terms swamp the earlier
ones and the difference quotients cannot settle.

Here is an example of the same kind with a short complete proof, using a saw-tooth instead of a cosine.

**The Takagi function.** Let $s(x)$ be the distance from $x$ to the nearest integer: a saw-tooth with $s = 0$ at the
integers, $s = 1/2$ at the half-integers, and slope $\pm 1$ in between. Define

$$
T(x) = \sum_{n=0}^{\infty} \frac{s(2^n x)}{2^n}.
$$

Each term is continuous with $0 \le s(2^n x)/2^n \le 2^{-n-1}$, so by the M-test $T$ is continuous. (Teiji Takagi published
this function in 1903; its graph is often called the blancmange curve, from its rippled shape.)

*Check:* $T(1/2) = s(1/2) + 0 + 0 + \cdots = 1/2$, and $T(1/3) = 2/3$ (Exercise 10), which is in fact the maximum.

**Theorem.** $T$ is not differentiable at any point.

*Proof.* We need a small lemma about difference quotients.

*Lemma.* If $f$ is differentiable at $x$ and $u_k \le x \le v_k$ with $u_k < v_k$ and $v_k - u_k \to 0$, then

$$
\frac{f(v_k) - f(u_k)}{v_k - u_k} \to f'(x).
$$

*Proof of lemma.* Write $\lambda = (v_k - x)/(v_k - u_k)$, a number in $[0, 1]$. Then the quotient equals
$(1 - \lambda) \dfrac{f(v_k) - f(x)}{v_k - x} + \lambda \dfrac{f(x) - f(u_k)}{x - u_k}$ (drop a term if its denominator is
0), a weighted average of two quotients each close to $f'(x)$ for large $k$. So it is close to $f'(x)$ too. $\square$

Now fix any $x$, and for each $k \ge 1$ let $[u_k, v_k]$ be the dyadic interval $[j/2^k, (j+1)/2^k]$ containing $x$. Look
at each term of $T$ on this interval.

- For $n \ge k$: $2^n u_k$ and $2^n v_k$ are integers, so $s(2^n u_k) = s(2^n v_k) = 0$. These terms contribute nothing to
  $T(v_k) - T(u_k)$.
- For $n < k$: as $t$ runs over $[u_k, v_k]$, $2^n t$ runs over an interval of length $2^{n-k} \le 1/2$ whose ends are
  multiples of $2^{n-k}$, so it contains no half-integer or integer in its interior. On it, $s$ is a straight line of slope
  $+1$ or $-1$, so the term $s(2^n t)/2^n$ is a line of slope $\pm 1$ in $t$.

So

$$
\frac{T(v_k) - T(u_k)}{v_k - u_k} = \sum_{n=0}^{k-1} (\pm 1),
$$

a sum of $k$ terms each $+1$ or $-1$. Such a sum is an integer that is even when $k$ is even and odd when $k$ is odd. So
consecutive quotients differ by at least 1, and the sequence cannot converge. By the lemma, $T$ is not differentiable at
$x$. $\square$

*Check:* at $x = 0.3$ the quotients for $k = 1, 2, \ldots, 7$ are $1, 0, 1, 2, 1, 0, 1$: alternately odd and even, as
promised.

*Expert remark.* Such functions are not rare monsters. Stefan Banach and Stefan Mazurkiewicz showed in 1931, using the
Baire category theorem, that in the space of continuous functions on $[0, 1]$ with the sup norm, the nowhere
differentiable ones form a "generic" set: in a precise sense, most continuous functions are like this. The paths of
Brownian motion ([Probability Chapter 16](../probability/16-Brownian-Motion.md)) are nowhere differentiable with
probability 1.

## 19.6 The Weierstrass approximation theorem

*Level: advanced.* Polynomials are the simplest functions: you can compute them with additions and multiplications. Taylor
polynomials ([Chapter 13](13-Power-Series-and-Taylor.md)) approximate a function well near one point, but only if the
function is very smooth, and $e^{-1/x^2}$ showed that even smoothness is not enough. What about a function that is merely
continuous, like $|x - 1/2|$ or the Takagi function? Can a polynomial be uniformly close to it on a whole interval?

**Weierstrass approximation theorem (1885).** If $f$ is continuous on $[a, b]$, then for every $\varepsilon > 0$ there is
a polynomial $p$ with $|f(x) - p(x)| < \varepsilon$ for all $x \in [a, b]$. Equivalently, every continuous function on
$[a, b]$ is a uniform limit of polynomials.

So the nowhere differentiable function of 19.5 is a uniform limit of polynomials, each of which is differentiable
everywhere. Uniform convergence keeps continuity, but nothing more.

Weierstrass's own proof smoothed $f$ by averaging it against a narrow Gaussian. The proof below, by Sergei Bernstein
(1912), is constructive and comes from probability. Rescaling $x \mapsto a + (b - a)x$, it is enough to treat $[0, 1]$.

**Bernstein polynomials.** For $f$ on $[0, 1]$ define

$$
B_n f(x) = \sum_{k=0}^{n} f\!\left(\frac{k}{n}\right) \binom{n}{k} x^k (1 - x)^{n - k}.
$$

The idea: toss a coin with probability $x$ of heads $n$ times, and let $K$ be the number of heads. Then
$P(K = k) = \binom{n}{k} x^k (1 - x)^{n-k}$, and $B_n f(x)$ is the expected value of $f(K/n)$. By the law of large numbers
([Probability Chapter 7](../probability/07-Inequalities-and-the-Law-of-Large-Numbers.md)), $K/n$ is usually close to $x$,
so $f(K/n)$ is usually close to $f(x)$, so its average is close to $f(x)$. The proof makes "usually" precise, uniformly
in $x$.

**Three identities.** Write $p_k(x) = \binom{n}{k} x^k (1-x)^{n-k}$. Then

$$
\sum_{k=0}^{n} p_k(x) = 1, \qquad \sum_{k=0}^{n} \frac{k}{n}\, p_k(x) = x, \qquad \sum_{k=0}^{n} \left(\frac{k}{n} - x\right)^2 p_k(x) = \frac{x(1 - x)}{n}.
$$

*Proof.* The first is the binomial theorem: $(x + (1 - x))^n = 1$. In probability language, the second says the mean of
$K$ is $nx$ and the third says its variance is $nx(1-x)$. Directly: differentiate
$\sum_k \binom{n}{k} x^k y^{n-k} = (x + y)^n$ with respect to $x$ and multiply by $x$ to get
$\sum_k k \binom{n}{k} x^k y^{n-k} = n x (x + y)^{n-1}$; doing it twice gives
$\sum_k k(k-1)\binom{n}{k} x^k y^{n-k} = n(n-1)x^2 (x + y)^{n-2}$. Put $y = 1 - x$. Then
$\sum k p_k = nx$ and $\sum k^2 p_k = n(n-1)x^2 + nx$, and expanding $(k/n - x)^2$:

$$
\sum \left(\frac{k}{n} - x\right)^2 p_k = \frac{n(n-1)x^2 + nx}{n^2} - 2x \cdot x + x^2 = \frac{x - x^2}{n}. \quad \square
$$

*Check:* for $n = 3$, a computer algebra system expands the third sum to $-x(x - 1)/3$, which is $x(1 - x)/3$.

**Theorem (Bernstein).** If $f$ is continuous on $[0, 1]$, then $B_n f \to f$ uniformly on $[0, 1]$.

*Proof.* Let $\varepsilon > 0$. Since $f$ is continuous on a closed bounded interval, it is bounded, $|f| \le M$ (EVT), and
uniformly continuous (Heine-Cantor, Chapter 18): there is $\delta > 0$ with $|f(t) - f(x)| < \varepsilon/2$ whenever
$|t - x| < \delta$.

Fix $x$. Using the first identity, $f(x) = \sum f(x) p_k(x)$, so

$$
|B_n f(x) - f(x)| = \left| \sum_{k=0}^{n} \Big(f\big(\tfrac{k}{n}\big) - f(x)\Big) p_k(x) \right| \le \sum_{k=0}^{n} \Big|f\big(\tfrac{k}{n}\big) - f(x)\Big|\, p_k(x).
$$

Split the sum into the "near" $k$, with $|k/n - x| < \delta$, and the "far" $k$.

- Near terms: each $|f(k/n) - f(x)| < \varepsilon/2$, and the $p_k$ add to at most 1, so the near part is less than
  $\varepsilon/2$.
- Far terms: each $|f(k/n) - f(x)| \le 2M$, and for these $k$, $(k/n - x)^2/\delta^2 \ge 1$. So the far part is at most

$$
2M \sum_{\text{far}} p_k(x) \le 2M \sum_{k} \frac{(k/n - x)^2}{\delta^2} p_k(x) = \frac{2M\, x(1-x)}{n \delta^2} \le \frac{M}{2 n \delta^2},
$$

using the third identity and $x(1 - x) \le 1/4$. (This step is Chebyshev's inequality in disguise.)

So $|B_n f(x) - f(x)| < \varepsilon/2 + M/(2n\delta^2)$, and the right side does not depend on $x$. Choose $N$ with
$M/(2N\delta^2) < \varepsilon/2$; then $\|B_n f - f\|_\infty < \varepsilon$ for all $n \ge N$. $\square$

**Example.** For $f(x) = x^2$, $B_n f(x) = x^2 + x(1 - x)/n$ (that is the third identity rearranged). The error is
$x(1-x)/n$, largest at $x = 1/2$, where it is $1/(4n)$. For $f(x) = |x - 1/2|$, $B_2 f(x) = x^2 - x + 1/2$, which is
$1/4$ at $x = 1/2$ where $f$ is 0. The convergence is slow at the corner: the error there shrinks like $1/\sqrt{2\pi n}$.

!!! note "Try it in Python"
    Measure how close Bernstein polynomials get to $|x - 1/2|$.

    ```python
    from math import comb
    def bern(f, n, x):
        return sum(f(k / n) * comb(n, k) * x**k * (1 - x)**(n - k) for k in range(n + 1))
    f = lambda t: abs(t - 0.5)
    for n in (10, 100, 1000):
        err = max(abs(bern(f, n, i / 2000) - f(i / 2000)) for i in range(2001))
        print(n, round(err, 4))
    # 10 0.123   100 0.0398   1000 0.0126
    ```

    Ten times as many terms buys only about three times the accuracy: Bernstein polynomials are a proof, not an efficient
    method. Chebyshev interpolation does much better in practice.

*Expert remark.* Marshall Stone generalised the theorem in 1937 and 1948 to continuous functions on any compact space:
any algebra of continuous functions that contains the constants and separates points is uniformly dense (the
Stone-Weierstrass theorem). One consequence is that trigonometric polynomials $\sum_{|k| \le n} c_k e^{ikx}$ are uniformly
dense in the continuous $2\pi$-periodic functions, which is the starting point for Fourier series in
[Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md).

## A short history

Cauchy's *Cours d'analyse* of 1821 contains a theorem saying that a convergent sum of continuous functions is continuous.
Stated for pointwise convergence it is false, and in 1826 Niels Henrik Abel pointed out that Fourier's series for the
saw-tooth function (Chapter 21) is a counterexample. It took decades to see that the missing hypothesis was uniformity.
Philipp Ludwig von Seidel (1847) and George Stokes (1847) isolated versions of it independently; Weierstrass, who had
written about uniform convergence in an unpublished manuscript of 1841, made it a standard tool in his Berlin lectures from
the 1860s, and his students spread it.

Weierstrass's nowhere differentiable function was presented in 1872 and first published by Paul du Bois-Reymond in 1875.
Bernard Bolzano had constructed a similar function in the 1830s, but his manuscript was not published until the twentieth
century. The approximation theorem appeared in 1885, when Weierstrass was seventy; Bernstein's probabilistic proof
appeared in 1912.

## Check yourself

??? question "1. Does $f_n(x) = x^n$ converge uniformly on $[0, 1/2]$? On $[0, 1)$?"

    On $[0, 1/2]$: the limit is 0 and $\|x^n\|_\infty = (1/2)^n \to 0$, so yes. On $[0, 1)$: the limit is still 0, but
    $\sup_{0 \le x < 1} x^n = 1$ for every $n$, so no.

??? question "2. Let $f_n(x) = \dfrac{nx}{1 + n^2 x^2}$ on $[0, 1]$. Find the pointwise limit and decide whether the convergence is uniform. What about on $[a, 1]$ with $0 < a < 1$?"

    $f_n(0) = 0$, and for $x > 0$, $f_n(x) \approx 1/(nx) \to 0$. Pointwise limit 0. But $f_n(1/n) = 1/2$ for every $n$,
    so $\|f_n\|_\infty \ge 1/2$: not uniform on $[0, 1]$. On $[a, 1]$, $0 \le f_n(x) \le nx/(n^2x^2) = 1/(nx) \le 1/(na)$,
    which tends to 0 independently of $x$: uniform.

??? question "3. Show $f_n(x) = x^n (1 - x)$ converges uniformly on $[0, 1]$."

    The pointwise limit is 0 (at $x = 1$ every $f_n$ is 0). The maximum: $f_n' = x^{n-1}(n - (n+1)x) = 0$ at
    $x = n/(n+1)$, where $f_n = \left(\frac{n}{n+1}\right)^n \frac{1}{n+1} \le \frac{1}{n+1}$. So $\|f_n\|_\infty \to 0$.
    (Multiplying by $1 - x$ tames the bad point $x = 1$.)

??? question "4. Prove that $f_n(x) = \sqrt{x^2 + 1/n}$ converges uniformly to $|x|$ on $\mathbb{R}$. What does this say about uniform limits of differentiable functions?"

    $\sqrt{x^2 + c} - |x| = \dfrac{c}{\sqrt{x^2 + c} + |x|} \le \dfrac{c}{\sqrt c} = \sqrt c$, so with $c = 1/n$ the gap is
    at most $1/\sqrt n$ everywhere. Each $f_n$ is differentiable, but the limit $|x|$ is not differentiable at 0: uniform
    limits of differentiable functions need not be differentiable.

??? question "5. Compute $\lim_n \int_0^1 n x (1 - x^2)^n\, dx$ and $\int_0^1 \lim_n n x(1 - x^2)^n \, dx$. Why does this not contradict the integral theorem?"

    With $u = 1 - x^2$, the integral is $\frac{n}{2}\int_0^1 u^n\,du = \frac{n}{2(n+1)} \to \frac12$. The pointwise limit is
    0, with integral 0. The theorem needs uniform convergence, and here $\|f_n\|_\infty \to \infty$ (the peak height grows
    like $\sqrt n$).

??? question "6. Show that $G(x) = \sum_{k \ge 1} \cos(kx)/k^3$ is differentiable on $\mathbb{R}$ and find $G'$."

    $|\cos(kx)/k^3| \le 1/k^3$, so by the M-test the series converges uniformly, in particular at $x = 0$. The
    differentiated terms $-\sin(kx)/k^2$ are continuous and bounded by $1/k^2$, so their sum converges uniformly. By the
    derivative theorem, $G'(x) = -\sum_{k \ge 1} \sin(kx)/k^2$.

??? question "7. Prove that $\sum_{k \ge 0} x^k$ does not converge uniformly on $(-1, 1)$."

    The partial sums $s_n(x) = \sum_{k < n} x^k$ satisfy $|s_n(x)| \le n$ on $(-1,1)$, but the limit $1/(1-x)$ is unbounded
    as $x \to 1$. If $\|s_n - f\|_\infty < 1$ for some $n$, then $|f| \le n + 1$, which is false. So the sup distance never
    drops below 1.

??? question "8. Compute $B_2 f$ and $B_3 f$ for $f(x) = x^3$. Are they equal to $x^3$?"

    $B_2 f(x) = 0 \cdot (1-x)^2 + \frac18 \cdot 2x(1-x) + 1 \cdot x^2 = \frac{x}{4} + \frac{3x^2}{4}$.
    $B_3 f(x) = \frac{1}{27} \cdot 3x(1-x)^2 + \frac{8}{27} \cdot 3x^2(1-x) + x^3 = \frac{x}{9} + \frac{2x^2}{3} + \frac{2x^3}{9}$.
    Neither is $x^3$: Bernstein polynomials reproduce exactly only the linear functions. *Check:* at $x = 1$ both give 1;
    at $x = 1/2$, $B_3 f = 1/18 + 1/6 + 1/36 = 0.25$, while $f(1/2) = 0.125$.

??? question "9. Prove that a uniform limit of bounded functions is bounded. Is this true for pointwise limits?"

    Choose $n$ with $\|f_n - f\|_\infty < 1$. If $|f_n| \le M$, then $|f(x)| \le |f(x) - f_n(x)| + |f_n(x)| < 1 + M$. For
    pointwise limits it fails: $f_n(x) = \min(n, 1/x)$ on $(0, 1]$ (with each $f_n \le n$) converges pointwise to $1/x$,
    which is unbounded.

??? question "10. Show that the Takagi function satisfies $T(1/3) = 2/3$ and $T(1/4) = 1/2$."

    Doubling $1/3$ repeatedly gives $2/3, 4/3, 8/3, \ldots$, each at distance $1/3$ from the nearest integer. So
    $T(1/3) = \sum_{n \ge 0} \frac{1/3}{2^n} = \frac13 \cdot 2 = \frac23$. For $1/4$: $s(1/4) = 1/4$, $s(1/2)/2 = 1/4$, and
    $s(2^n/4) = 0$ for $n \ge 2$. So $T(1/4) = 1/2$.

??? question "11. Let $f$ be continuous on $[0, 1]$ with $\int_0^1 f(x)\, x^n\, dx = 0$ for every $n = 0, 1, 2, \ldots$. Prove $f = 0$."

    By linearity, $\int_0^1 f p = 0$ for every polynomial $p$. By Weierstrass choose polynomials $p_n \to f$ uniformly.
    Then $f p_n \to f^2$ uniformly (as $|f p_n - f^2| \le \|f\|_\infty \|p_n - f\|_\infty$), so
    $\int_0^1 f^2 = \lim \int_0^1 f p_n = 0$. A continuous non-negative function with integral 0 is identically 0, so
    $f^2 = 0$ and $f = 0$.

??? question "12. Use term-by-term integration of $\frac{1}{1 + t^2} = \sum_{k \ge 0} (-1)^k t^{2k}$ to show $\arctan x = \sum_{k \ge 0} (-1)^k \frac{x^{2k+1}}{2k+1}$ for $|x| < 1$. Where exactly is uniform convergence used?"

    For $|x| < 1$ the geometric series converges uniformly on the interval between 0 and $x$ (it lies in some $[-r, r]$ with
    $r < 1$, by the lemma in 19.4). So integrating from 0 to $x$ term by term is allowed:
    $\arctan x = \int_0^x \frac{dt}{1+t^2} = \sum_k (-1)^k \frac{x^{2k+1}}{2k+1}$. Uniformity is used in the swap of sum
    and integral. (At $x = 1$ the result still holds, giving Leibniz's series for $\pi/4$, but that needs Abel's theorem.)

## What you learned

- Pointwise convergence lets the speed of convergence depend on the point; uniform convergence, $\|f_n - f\|_\infty \to 0$,
  does not.
- Uniform limits of continuous functions are continuous; pointwise limits need not be ($x^n$ on $[0,1]$).
- Integrals pass to uniform limits; derivatives pass when the *derivatives* converge uniformly.
- The Weierstrass M-test gives uniform convergence of series; with it, power series are differentiable term by term inside
  their radius.
- There are continuous functions differentiable nowhere: Weierstrass's cosine series and Takagi's saw-tooth series, whose
  difference quotients alternate in parity.
- Every continuous function on $[a, b]$ is a uniform limit of polynomials; Bernstein's proof is the law of large numbers in
  disguise.

**Next:** [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md), the ideas of distance, openness, compactness and
completeness in general, and the contraction mapping theorem that solves differential equations.

## Further reading

- W. Rudin, *Principles of Mathematical Analysis*, 3rd edition, 1976, Chapter 7 (sequences and series of functions).
- S. Abbott, *Understanding Analysis*, 2nd edition, 2015, Chapter 6.
- G. H. Hardy, "Weierstrass's non-differentiable function", *Transactions of the American Mathematical Society* 17, 1916.
- P. Billingsley, "Van der Waerden's continuous nowhere differentiable function", *American Mathematical Monthly* 89, 1982
  (the parity argument of 19.5).
- S. Bernstein, "Démonstration du théorème de Weierstrass fondée sur le calcul des probabilités", *Communications de la
  Société mathématique de Kharkow*, 1912.
- T. W. Körner, *Fourier Analysis*, 1988 (several approximation theorems, told with their history).
- U of T guides: [MAT159 Unit 6, Uniform convergence](../../uoft/MAT159H1/unit06.md),
  [MAT159 Unit 7, Power series](../../uoft/MAT159H1/unit07.md),
  [MAT137 Unit 14, Power series and Taylor series](../../uoft/MAT137/unit14.md).
- Topics lessons: [The limit definition](../../topics/infinity/level-8/01-limit-definition.md),
  [Convergence tests](../../topics/infinity/level-8/02-convergence-tests.md).
- Other books on this site: [Probability, the law of large numbers](../probability/07-Inequalities-and-the-Law-of-Large-Numbers.md),
  [Probability, Brownian motion](../probability/16-Brownian-Motion.md), [Algebra, sequences and series](../algebra/08-Sequences-Series-and-Induction.md).
