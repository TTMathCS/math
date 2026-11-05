# 14. The zeta function and the prime number theorem

*Chapter 13 counted primes with whole-number tools and pinned $\pi(x)$, the number of primes up to $x$, between two
multiples of $x/\log x$. It could not say which multiple is right. The answer, that $\pi(x)/(x/\log x) \to 1$, needed
a new idea: study the primes through a function of a complex variable, $\zeta(s) = 1 + 2^{-s} + 3^{-s} + \cdots$. In
this chapter you meet that function as Euler did, as a product over the primes; you prove his famous
$1 + \frac14 + \frac19 + \cdots = \pi^2/6$; you follow Riemann's 1859 paper as it extends $\zeta$ to the whole complex
plane and finds that its zeros control the primes; you see the outline of the 1896 proof of the prime number theorem,
with its key step proved in full; and you meet the Riemann hypothesis, what it would give, and how its zeros are
checked by computer.*

!!! abstract "In this chapter"
    **You will learn:**

    - why the harmonic series diverges and how Euler's product turns unique factorization into a formula for $\zeta(s)$
    - a complete proof that $\sum 1/n^2 = \pi^2/6$, and what is known about $\zeta(3)$, $\zeta(4)$, ...
    - how $\zeta(s)$ is extended past $\operatorname{Re} s = 1$, its functional equation, its trivial and nontrivial zeros
    - the statement of the prime number theorem, the proof that $\zeta$ has no zeros on the line $\operatorname{Re} s = 1$, and an outline of the rest
    - the Riemann hypothesis, why it is the same as "the primes are as regular as they can be", and what it would give
    - how the zeros are computed and checked, and why no computation can prove the hypothesis

    **You need:** [Chapter 13](13-How-Primes-Are-Spread.md) ($\pi(x)$, $\theta(x)$, Chebyshev's bounds, the
    divergence of $\sum 1/p$) and [Chapter 2](02-Primes-and-Unique-Factorization.md) (unique factorization). From
    calculus: series, integrals, and for 14.3 onwards complex numbers and the idea of an analytic function
    ([Algebra, Chapter 9](../algebra/09-Complex-Numbers.md) for complex numbers; the U of T guides
    [Series](../../uoft/MAT137/unit13.md) and [Power series](../../uoft/MAT137/unit14.md) for the analysis). A
    gentle preview: [How the primes are spread out](../../topics/number-theory/level-8/04-spread-of-primes.md).

    **Levels:** 14.1 and 14.2 are advanced (first-year calculus with proofs); 14.3, 14.4 and 14.5 are expert
    (complex analysis); 14.6 is advanced and can be read straight after 14.3.

## 14.1 The harmonic series and Euler's product

Start with a question a first-year student can ask. Add up $1 + \tfrac12 + \tfrac13 + \tfrac14 + \cdots$. Does the
sum settle down to a number, or does it grow without end?

The terms shrink to zero, which tempts you to say it settles. It does not. Group the terms in blocks that end at
powers of 2:

$$
1 + \tfrac12 + \left(\tfrac13 + \tfrac14\right) + \left(\tfrac15 + \cdots + \tfrac18\right) + \left(\tfrac19 + \cdots + \tfrac1{16}\right) + \cdots
$$

Each bracket has $2^{k-1}$ terms, each at least $1/2^k$, so each bracket is at least $\tfrac12$. Infinitely many
halves make an infinite sum. This argument is Nicole Oresme's, from the fourteenth century.

A sharper count uses an integral. The **harmonic number** $H_N = 1 + \tfrac12 + \cdots + \tfrac1N$ lies between two
areas under the curve $y = 1/x$: the boxes of width 1 and height $1/n$ sit above the curve on $[n, n+1]$ and below it
on $[n-1, n]$. So

$$
\log(N+1) \le H_N \le 1 + \log N .
$$

(Here and in the rest of this book, $\log$ is the natural logarithm, to base $e$.) In fact $H_N - \log N$ tends to a
constant, **Euler's constant** $\gamma = 0.5772\ldots$. Check: $H_{1000} = 7.48547\ldots$ and
$\log 1000 + \gamma = 7.48497\ldots$, which agree to within $1/2000$, as they should.

### The zeta function

Now put an exponent on every term. For a real number $s > 1$ define

$$
\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s} = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \cdots .
$$

The Greek letter $\zeta$ is "zeta", and this is the **Riemann zeta function**, although Euler studied it a century
before Riemann. The same comparison with an integral shows it converges for $s > 1$ and pins it down near $s = 1$:

$$
\frac{1}{s-1} = \int_1^\infty \frac{dx}{x^s} \le \zeta(s) \le 1 + \int_1^\infty \frac{dx}{x^s} = 1 + \frac{1}{s-1} .
$$

So $\zeta(s)$ is finite for every $s > 1$, but it blows up like $1/(s-1)$ as $s$ comes down to 1. Remember that: the
blow-up at $s = 1$ is the harmonic series diverging, and it will turn out to be the reason there are infinitely many
primes.

### Euler's product

In 1737 Euler noticed that $\zeta(s)$ can be written using only the primes.

**Theorem 14.1 (Euler product).** For every real $s > 1$,

$$
\zeta(s) = \prod_{p \text{ prime}} \frac{1}{1 - p^{-s}} = \frac{1}{1-2^{-s}} \cdot \frac{1}{1-3^{-s}} \cdot \frac{1}{1-5^{-s}} \cdots
$$

*Why it should be true.* Each factor is a geometric series: $\frac{1}{1-p^{-s}} = 1 + p^{-s} + p^{-2s} + \cdots$. Multiply
the series for $p = 2$ and $p = 3$: you get every term $2^{-as} 3^{-bs} = (2^a 3^b)^{-s}$ once, that is, $n^{-s}$ for
every $n$ whose only prime factors are 2 and 3. Multiply in all the primes and you get $n^{-s}$ for every $n$, each
exactly once, because each $n$ factors into primes in exactly one way. Euler's product is unique factorization
([Chapter 2](02-Primes-and-Unique-Factorization.md)) written as an identity between functions.

*Proof.* Fix $s > 1$ and a number $N$. Multiply the finitely many series for the primes $p \le N$. Each series
converges absolutely, so the product of finitely many of them can be multiplied out term by term and rearranged:

$$
\prod_{p \le N} \frac{1}{1-p^{-s}} = \sum_{n \in S_N} \frac{1}{n^s},
$$

where $S_N$ is the set of whole numbers $n \ge 1$ all of whose prime factors are at most $N$, and each $n$ appears once by
unique factorization. Every $n \le N$ is in $S_N$. So the difference between $\zeta(s)$ and the partial product is a
sum over some of the $n > N$:

$$
0 \le \zeta(s) - \prod_{p \le N} \frac{1}{1-p^{-s}} \le \sum_{n > N} \frac{1}{n^s} ,
$$

which is the tail of a convergent series and tends to 0 as $N \to \infty$. $\blacksquare$

**Worked example.** At $s = 2$ the first three factors give

$$
\frac{1}{1-\frac14} \cdot \frac{1}{1-\frac19} \cdot \frac{1}{1-\frac1{25}} = \frac43 \cdot \frac98 \cdot \frac{25}{24} = \frac{900}{576} = 1.5625 .
$$

All 25 primes below 100 give $1.64195$. The full sum is $\zeta(2) = 1.64493\ldots$. Check: the product creeps up
towards the sum, as the proof says it must.

### Two corollaries

**There are infinitely many primes (Euler's proof).** If there were only finitely many, the product at $s = 1$ would
be a finite product of numbers $\frac{1}{1-1/p}$, a finite number $C$. But for every $N$, multiplying out shows the
product is at least $H_N$ (all $n \le N$ appear), and $H_N \to \infty$. So $C \ge H_N$ for all $N$, which is impossible.

**The sum of $1/p$ diverges, and how fast.** Take logarithms in Euler's product, using
$-\log(1-u) = u + u^2/2 + u^3/3 + \cdots$:

$$
\log \zeta(s) = \sum_p \sum_{k \ge 1} \frac{1}{k\, p^{ks}} = \sum_p \frac{1}{p^s} + \sum_p \sum_{k \ge 2} \frac{1}{k\,p^{ks}} .
$$

The double sum on the right is at most $\sum_p \frac{1}{p^{2s}} \cdot \frac{1}{1 - p^{-s}} \le 2 \sum_n \frac1{n^2}$, a
bounded amount, for all $s \ge 1$. And $\log \zeta(s) \approx \log \frac{1}{s-1}$, which tends to infinity. So
$\sum_p p^{-s} = \log\frac{1}{s-1} + O(1)$ as $s \to 1^{+}$. (The notation $O(1)$ means "a quantity that stays bounded".)
If $\sum_p 1/p$ converged, $\sum_p p^{-s}$ would stay below it for $s > 1$. It does not, so $\sum 1/p$ diverges, which
Chapter 13 proved another way.

This is the first lesson of the chapter: **information about the primes is stored in the behaviour of $\zeta(s)$**,
and the blow-up at $s = 1$ already "knows" that the primes are infinitely many and fairly dense.

## 14.2 $\zeta(2) = \pi^2/6$

*Level: advanced.*

In 1644 Pietro Mengoli asked for the exact value of $1 + \frac14 + \frac19 + \frac1{16} + \cdots$. The question
became known as the **Basel problem**, after the home town of the Bernoulli brothers, who tried and failed. Euler
solved it in the 1730s. His answer, $\pi^2/6 = 1.6449\ldots$, astonished everyone: why would the circle constant appear
in a sum of reciprocal squares?

### Euler's idea

A polynomial with roots $a_1, \ldots, a_n$ and constant term 1 factors as
$(1 - x/a_1)(1 - x/a_2)\cdots(1 - x/a_n)$. Euler boldly treated $\frac{\sin x}{x}$ as a "polynomial of infinite degree".
Its roots are $\pm\pi, \pm 2\pi, \pm 3\pi, \ldots$ and its value at 0 is 1, so he wrote

$$
\frac{\sin x}{x} = \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{4\pi^2}\right)\left(1 - \frac{x^2}{9\pi^2}\right)\cdots
$$

Multiply out and look at the coefficient of $x^2$: on the right it is
$-\frac{1}{\pi^2}\left(1 + \frac14 + \frac19 + \cdots\right)$. On the left, the Taylor series
$\frac{\sin x}{x} = 1 - \frac{x^2}{6} + \frac{x^4}{120} - \cdots$ gives $-\frac16$. Setting them equal:
$\sum 1/n^2 = \pi^2/6$.

The product formula is true, but in 1735 Euler had no proof that an infinite product is determined by its roots (it
isn't in general: $e^x \sin x / x$ has the same roots). He checked the answer numerically to many decimals and later
gave other arguments. A rigorous proof of the product came with Weierstrass's theory a century later. Here is a proof
that needs only trigonometry and squeezing.

### A complete proof

**Step 1: an inequality.** For $0 < x < \pi/2$ we have $\sin x < x < \tan x$ (compare the areas of a triangle, a sector and
a larger triangle in the unit circle). Squaring and taking reciprocals,

$$
\cot^2 x < \frac{1}{x^2} < \frac{1}{\sin^2 x} = 1 + \cot^2 x .
$$

**Step 2: an exact finite sum.** Let $m \ge 1$ and $n = 2m+1$. We claim

$$
\sum_{k=1}^{m} \cot^2\left(\frac{k\pi}{2m+1}\right) = \frac{m(2m-1)}{3} .
$$

By de Moivre's formula, $\cos nx + i \sin nx = (\cos x + i \sin x)^n$. Expand by the binomial theorem and keep the
imaginary part (the terms with an odd power of $i \sin x$):

$$
\sin nx = \sum_{j=0}^{m} (-1)^j \binom{n}{2j+1} \cos^{n-2j-1}x \, \sin^{2j+1} x = \sin^n x \sum_{j=0}^{m} (-1)^j \binom{n}{2j+1} (\cot^2 x)^{m-j} .
$$

(Divide each term by $\sin^n x$: $\cos^{n-2j-1}x / \sin^{n-2j-1}x = \cot^{2(m-j)} x$.) So $\sin nx = \sin^n x \cdot P(\cot^2 x)$
where

$$
P(t) = \binom{n}{1} t^m - \binom{n}{3} t^{m-1} + \binom{n}{5} t^{m-2} - \cdots .
$$

Now put $x_k = k\pi/n$ for $k = 1, \ldots, m$. These lie in $(0, \pi/2)$, so $\sin x_k \ne 0$, while $\sin(n x_k) = \sin(k\pi) = 0$.
So $P(\cot^2 x_k) = 0$. The numbers $\cot^2 x_k$ are different from one another, because $\cot^2$ is strictly
decreasing on $(0, \pi/2)$. So they are $m$ different roots of a polynomial of degree $m$, hence all its roots, and by
the rule "sum of the roots $= -$(next coefficient)/(leading coefficient)" ([Algebra, Chapter 10](../algebra/10-Roots-and-Coefficients.md)):

$$
\sum_{k=1}^m \cot^2 x_k = \frac{\binom{n}{3}}{\binom{n}{1}} = \frac{(2m+1)(2m)(2m-1)/6}{2m+1} = \frac{m(2m-1)}{3} .
$$

Check with $m = 2$: $\cot^2(\pi/5) + \cot^2(2\pi/5) = 1.8944 + 0.1056 = 2 = \frac{2 \cdot 3}{3}$.

**Step 3: squeeze.** Apply Step 1 at each $x_k$, where $1/x_k^2 = n^2/(k^2 \pi^2)$, and add over $k = 1, \ldots, m$:

$$
\frac{m(2m-1)}{3} < \frac{(2m+1)^2}{\pi^2} \sum_{k=1}^m \frac{1}{k^2} < m + \frac{m(2m-1)}{3} = \frac{2m(m+1)}{3} .
$$

Multiply through by $\pi^2/(2m+1)^2$:

$$
\frac{\pi^2}{6}\cdot \frac{2m(2m-1)}{(2m+1)^2} < \sum_{k=1}^m \frac{1}{k^2} < \frac{\pi^2}{6} \cdot \frac{4m(m+1)}{(2m+1)^2} .
$$

Both fractions on the outside tend to 1 as $m \to \infty$ (top and bottom both behave like $4m^2$). So the middle tends
to $\pi^2/6$. $\blacksquare$

### What else is known

The same method, or Euler's, gives every even value. With the **Bernoulli numbers** $B_0 = 1$, $B_1 = -\tfrac12$,
$B_2 = \tfrac16$, $B_4 = -\tfrac1{30}$, $B_6 = \tfrac1{42}, \ldots$ (defined by $\frac{x}{e^x - 1} = \sum B_k x^k/k!$),

$$
\zeta(2k) = \frac{(-1)^{k+1} B_{2k} (2\pi)^{2k}}{2\,(2k)!}, \qquad \zeta(2) = \frac{\pi^2}{6},\quad \zeta(4) = \frac{\pi^4}{90}, \quad \zeta(6) = \frac{\pi^6}{945} .
$$

The odd values are a mystery. In 1978 Roger Apéry proved that $\zeta(3) = 1.2020569\ldots$ is irrational. It is still
not known whether $\zeta(5)$ is irrational, although Wadim Zudilin proved in 2001 that at least one of $\zeta(5)$,
$\zeta(7)$, $\zeta(9)$, $\zeta(11)$ is, and Tanguy Rivoal proved in 2000 that infinitely many of the odd values are.

### Two random numbers are coprime with probability $6/\pi^2$

Here is a striking use of $\zeta(2)$. Pick two whole numbers "at random". The chance that 2 divides both is
$\frac12 \cdot \frac12$, so the chance that 2 is not a common factor is $1 - \frac14$. Likewise for 3: $1 - \frac19$.
If these events were independent (for different primes they are, in the limit), the chance that no prime divides both,
that is, that the numbers are **coprime**, would be

$$
\prod_p \left(1 - \frac{1}{p^2}\right) = \frac{1}{\zeta(2)} = \frac{6}{\pi^2} = 0.6079\ldots
$$

This heuristic can be made into a theorem: the fraction of pairs $(a, b)$ with $1 \le a, b \le N$ and $\gcd(a,b) = 1$
tends to $6/\pi^2$ as $N \to \infty$. (The proof counts with the Möbius function of
[Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md): the number of coprime pairs is
$\sum_{d \le N} \mu(d) \lfloor N/d \rfloor^2$, and $\sum \mu(d)/d^2 = 1/\zeta(2)$.) Check: of the $10{,}000$ pairs with
$a, b \le 100$, exactly $6087$ are coprime, a fraction $0.6087$.

## 14.3 Riemann's 1859 paper

*Level: expert.*

In November 1859 Bernhard Riemann, newly elected to the Berlin Academy, sent it a report of eight pages, "On the number
of primes less than a given magnitude". It was his only paper on number theory. It changed the subject for good.

Riemann's first step was to let $s$ be a **complex** number, $s = \sigma + it$ with real part $\sigma$ and imaginary part $t$
(the letters $\sigma$ and $t$ for these are Riemann's and everyone still uses them). The definition
$n^{-s} = e^{-s \log n} = n^{-\sigma}\left(\cos(t\log n) - i \sin(t \log n)\right)$ makes sense, and
$|n^{-s}| = n^{-\sigma}$. So the series $\sum n^{-s}$ converges absolutely whenever $\sigma > 1$, and the proof of
Theorem 14.1 works word for word: **the Euler product holds for $\operatorname{Re} s > 1$.**

A function of a complex variable that has a derivative in the complex sense on an open set is called **analytic** (or
holomorphic) there. Analytic functions are extraordinarily rigid: one that is known on a small open set is determined
everywhere it can be extended. Riemann's discovery was that $\zeta$ extends from the half-plane $\sigma > 1$ to the
whole complex plane, with a single bad point at $s = 1$, and that its zeros in the new region carry the deepest
information about primes.

### Extending zeta, first step: to $\sigma > 0$

Here is a direct way to push $\zeta$ past the line $\sigma = 1$. For $\sigma > 1$ we can write
$n^{-s} = s\int_n^\infty x^{-s-1}\,dx$, so

$$
\zeta(s) = \sum_{n \ge 1} s \int_n^\infty \frac{dx}{x^{s+1}} = s \int_1^\infty \frac{\lfloor x \rfloor}{x^{s+1}}\, dx ,
$$

because the number $x$ lies in $[n, \infty)$ for exactly $\lfloor x\rfloor$ values of $n$ (here $\lfloor x \rfloor$ is
the whole-number part of $x$). Write $\lfloor x \rfloor = x - \{x\}$, where $\{x\}$ is the fractional part, between 0
and 1. The $x$ part integrates exactly: $s\int_1^\infty x^{-s}\,dx = \frac{s}{s-1}$. So

$$
\zeta(s) = \frac{s}{s-1} - s \int_1^\infty \frac{\{x\}}{x^{s+1}}\, dx \qquad (\sigma > 1).
$$

Now look at the right side. Since $0 \le \{x\} < 1$, the integrand is at most $x^{-\sigma-1}$ in size, so the integral
converges for every $\sigma > 0$ and defines an analytic function there. The right side therefore makes sense on the
bigger half-plane $\sigma > 0$, except at $s = 1$ where $\frac{s}{s-1}$ blows up. Because analytic continuation is unique,
this *is* $\zeta(s)$ there. We have learned:

- $\zeta(s)$ is analytic on $\sigma > 0$ apart from a **simple pole** at $s = 1$, where $\zeta(s) - \frac{1}{s-1}$ stays
  bounded (it tends to Euler's $\gamma$);
- for example $\zeta(\tfrac12) = -1.4603545\ldots$, a value the original series ($1 + 1/\sqrt2 + 1/\sqrt3 + \cdots$, which
  diverges) could never give.

Another route to the same region is the **alternating zeta function**
$\eta(s) = 1 - 2^{-s} + 3^{-s} - 4^{-s} + \cdots$, which converges for $\sigma > 0$. Subtracting twice the even terms
from $\zeta$ shows $\eta(s) = (1 - 2^{1-s})\zeta(s)$ for $\sigma > 1$, and so $\zeta(s) = \eta(s)/(1-2^{1-s})$ extends.
Check at $s = 2$: $\eta(2) = \frac{1}{2}\zeta(2) = \pi^2/12 = 0.822467\ldots$, and summing the alternating series agrees.

### The functional equation

To go further left, Riemann found a symmetry. Recall the **gamma function**
$\Gamma(s) = \int_0^\infty e^{-u} u^{s-1}\, du$, which extends the factorial ($\Gamma(n) = (n-1)!$), has no zeros, and has
simple poles at $s = 0, -1, -2, \ldots$ Define the **completed zeta function**

$$
\xi(s) = \tfrac12 s(s-1)\, \pi^{-s/2}\, \Gamma\!\left(\tfrac{s}{2}\right) \zeta(s) .
$$

**Theorem 14.2 (Riemann, 1859).** $\xi(s)$ extends to an analytic function on the whole complex plane (an **entire**
function), and

$$
\xi(s) = \xi(1-s) .
$$

*Proof sketch.* Substituting $u = \pi n^2 t$ in the gamma integral gives
$\pi^{-s/2}\Gamma(s/2)\, n^{-s} = \int_0^\infty e^{-\pi n^2 t}\, t^{s/2}\, \frac{dt}{t}$. Summing over $n$ (fine for
$\sigma > 1$),

$$
\pi^{-s/2}\Gamma\!\left(\tfrac{s}{2}\right)\zeta(s) = \int_0^\infty \omega(t)\, t^{s/2}\,\frac{dt}{t}, \qquad \omega(t) = \sum_{n=1}^\infty e^{-\pi n^2 t}.
$$

The theta function $\vartheta(t) = \sum_{n \in \mathbb{Z}} e^{-\pi n^2 t} = 1 + 2\omega(t)$ satisfies the remarkable identity
$\vartheta(1/t) = \sqrt{t}\, \vartheta(t)$, which follows from the Poisson summation formula of Fourier analysis (the
function $e^{-\pi x^2}$ is its own Fourier transform). Split the integral at $t = 1$, use the identity to turn the
piece over $(0,1)$ into one over $(1, \infty)$, and after a few lines of algebra you get

$$
\pi^{-s/2}\Gamma\!\left(\tfrac{s}{2}\right)\zeta(s) = \frac{1}{s(s-1)} + \int_1^\infty \omega(t) \left(t^{s/2} + t^{(1-s)/2}\right)\frac{dt}{t} .
$$

The integral converges for every complex $s$, because $\omega(t) \le 2e^{-\pi t}$ for $t \ge 1$ decays faster than any
power grows. So the right side is analytic everywhere except at $s = 0, 1$; multiplying by $\tfrac12 s(s-1)$ removes
those. And the right side is visibly unchanged when $s$ is replaced by $1 - s$. $\blacksquare$ (Every step is written out
in Edwards's book or in chapter 2 of Titchmarsh, listed at the end.)

### What the functional equation tells us

- **$\zeta$ extends to all of $\mathbb{C}$** except the simple pole at $s = 1$: for $\sigma < 0$, compute $\zeta(s)$ from
  $\zeta(1-s)$, where $\operatorname{Re}(1-s) > 1$.
- **The trivial zeros.** At $s = -2, -4, -6, \ldots$ the factor $\Gamma(s/2)$ has a pole, but $\xi(s)$ is finite there
  (it equals $\xi(1-s)$, a nonzero value since $1-s > 1$; see exercise 7). The only way out is $\zeta(s) = 0$. These
  are the **trivial zeros**.
- **Special values.** At $s = 0$ the pole of $\Gamma(s/2)$ is cancelled by the factor $s$, and one finds
  $\zeta(0) = -\tfrac12$. At $s = -1$ the functional equation gives $\zeta(-1) = -\tfrac1{12}$. (This is the precise
  content of the slogan "$1 + 2 + 3 + \cdots = -1/12$": the series diverges, and $-1/12$ is the value of the analytic
  continuation of a function that the series defines only for $\sigma > 1$. It is not a sum in the ordinary sense.)
- **No zeros for $\sigma > 1$.** A convergent product of nonzero factors is nonzero; precisely,
  $|\zeta(s)| \ge \prod_p (1 + p^{-\sigma})^{-1} = \zeta(2\sigma)/\zeta(\sigma) > 0$ (exercise 5).
- **So no nontrivial zeros for $\sigma < 0$** either: by the functional equation they would mirror zeros with
  $\sigma > 1$.

Every other zero, called a **nontrivial zero**, lies in the **critical strip** $0 \le \sigma \le 1$. Because
$\xi(s) = \xi(1-s)$ and $\zeta(\bar s) = \overline{\zeta(s)}$, the nontrivial zeros are symmetric about the real axis and
about the **critical line** $\sigma = \tfrac12$. They are usually written $\rho = \beta + i\gamma$ (the Greek letter rho).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 300" role="img" aria-label="The complex plane with the critical strip between real part 0 and 1 shaded. The first five nontrivial zeros lie on the line real part one half, at heights 14.13, 21.02, 25.01, 30.42 and 32.94. The trivial zeros are at minus 2, minus 4 and minus 6 on the real axis, and the pole is at 1.">
  <rect x="236" y="30" width="28" height="220" fill="#9cc9ea" fill-opacity="0.35"/>
  <line x1="30" y1="250" x2="335" y2="250" stroke="currentColor" stroke-width="1"/>
  <line x1="236" y1="270" x2="236" y2="25" stroke="currentColor" stroke-width="1"/>
  <line x1="250" y1="250" x2="250" y2="30" stroke="#eea66f" stroke-width="1.5" stroke-dasharray="4 3"/>
  <g fill="#eea66f">
    <circle cx="250" cy="165.2" r="4"/><circle cx="250" cy="123.9" r="4"/><circle cx="250" cy="99.9" r="4"/>
    <circle cx="250" cy="67.5" r="4"/><circle cx="250" cy="52.4" r="4"/>
  </g>
  <g fill="#7ccf9a">
    <circle cx="180" cy="250" r="4"/><circle cx="124" cy="250" r="4"/><circle cx="68" cy="250" r="4"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="259" y1="245" x2="269" y2="255"/><line x1="259" y1="255" x2="269" y2="245"/>
  </g>
  <g fill="currentColor" font-size="11" font-family="sans-serif">
    <text x="232" y="266" text-anchor="end">0</text>
    <text x="268" y="266">1</text>
    <text x="180" y="266" text-anchor="middle">−2</text>
    <text x="124" y="266" text-anchor="middle">−4</text>
    <text x="68" y="266" text-anchor="middle">−6</text>
    <text x="258" y="169">14.13</text>
    <text x="258" y="128">21.02</text>
    <text x="258" y="104">25.01</text>
    <text x="258" y="71">30.42</text>
    <text x="258" y="56">32.94</text>
    <text x="250" y="22" text-anchor="middle">σ = 1/2</text>
    <text x="40" y="236">trivial zeros</text>
    <text x="280" y="244">pole</text>
    <text x="330" y="244" text-anchor="end">σ</text>
    <text x="226" y="40" text-anchor="end">t</text>
  </g>
</svg>
</div>

*The upper half of the complex plane. Shaded: the critical strip $0 \le \sigma \le 1$. Orange: the first five nontrivial
zeros, on the critical line. Green: trivial zeros. The cross marks the pole at $s = 1$. The lower half is a mirror image.*

### How many zeros, and why they matter

Riemann stated, and Hans von Mangoldt proved in 1905, that the number $N(T)$ of nontrivial zeros with
$0 < \gamma \le T$ is

$$
N(T) = \frac{T}{2\pi}\log\frac{T}{2\pi} - \frac{T}{2\pi} + \frac78 + S(T) + O\!\left(\frac1T\right),
$$

where $S(T)$ is a small, slowly growing correction (it is $O(\log T)$). Check: the formula without $S(T)$ gives
$29.0$ at $T = 100$, and there are exactly 29 zeros up to height 100; at $T = 1000$ it gives $648.6$, and there are
649. So there are infinitely many nontrivial zeros, and they get denser as you go up.

Why do they matter for primes? Use the weighted count of Chapter 13,

$$
\psi(x) = \sum_{p^k \le x} \log p ,
$$

which counts each prime power $p^k \le x$ with weight $\log p$. Riemann's method, made rigorous by von Mangoldt in 1895,
gives the **explicit formula**: for $x > 1$ not a prime power,

$$
\psi(x) = x - \sum_{\rho} \frac{x^\rho}{\rho} - \log(2\pi) - \tfrac12 \log\left(1 - x^{-2}\right),
$$

with the sum over the nontrivial zeros taken in order of $|\gamma|$. Read it as a piece of music. The main term $x$ comes
from the pole at $s = 1$. Each zero $\rho = \beta + i\gamma$ adds a wave $x^\rho/\rho$, whose size is $x^\beta/|\rho|$ and
which oscillates like $\cos(\gamma \log x)$. The primes are the sum of a smooth main term and infinitely many waves,
one for each zero. **The real parts $\beta$ decide how loud the waves are.** That is the whole point of the next two
sections.

## 14.4 The prime number theorem

*Level: expert.*

**Theorem 14.3 (prime number theorem).**

$$
\pi(x) \sim \frac{x}{\log x}, \qquad \text{that is,} \qquad \lim_{x \to \infty} \frac{\pi(x)}{x / \log x} = 1 .
$$

Gauss, as a teenager in the 1790s, looked at tables of primes and guessed that the density of primes near $x$ is about
$1/\log x$, so that $\pi(x)$ should be close to the **logarithmic integral**

$$
\operatorname{li}(x) = \int_0^x \frac{dt}{\log t}
$$

(the integral is taken as a principal value through the bad point $t = 1$; many books use $\int_2^x$ instead, which
differs by about $1.045$). Legendre in 1798 proposed $x/(\log x - 1.08366)$. Integrating by parts,
$\operatorname{li}(x) = \frac{x}{\log x} + \frac{x}{\log^2 x} + O\!\left(\frac{x}{\log^3 x}\right)$, so
$\pi(x) \sim \operatorname{li}(x)$ and $\pi(x) \sim x/\log x$ say the same thing. But $\operatorname{li}(x)$ is far more
accurate:

| $x$ | $\pi(x)$ | $x/\log x$ | $\operatorname{li}(x)$ | $\operatorname{li}(x) - \pi(x)$ |
| --- | --- | --- | --- | --- |
| $10^3$ | 168 | 145 | 178 | 10 |
| $10^4$ | 1,229 | 1,086 | 1,246 | 17 |
| $10^6$ | 78,498 | 72,382 | 78,628 | 130 |
| $10^9$ | 50,847,534 | 48,254,942 | 50,849,235 | 1,701 |

(Values rounded to whole numbers. The error of $x/\log x$ at $10^9$ is about 2.6 million; the error of
$\operatorname{li}(x)$ is 1,701.)

Chebyshev proved around 1850 that if $\pi(x)/(x/\log x)$ has a limit, it must be 1 (Chapter 13). The existence of the
limit was proved in 1896, independently, by **Jacques Hadamard** and **Charles-Jean de la Vallée Poussin**, both
following Riemann's programme. Both proofs rest on one fact about the zeros.

### Equivalent forms

Chapter 13 showed that $\pi(x) \sim x/\log x$ is equivalent to $\theta(x) \sim x$, where
$\theta(x) = \sum_{p \le x} \log p$, and to $\psi(x) \sim x$. Here is the direction we need. If $\theta(x) \sim x$, then
on the one hand $\theta(x) \le \pi(x) \log x$; on the other, for any small $\varepsilon > 0$, the primes between
$x^{1-\varepsilon}$ and $x$ each contribute at least $(1-\varepsilon)\log x$, so

$$
\theta(x) \ge (1-\varepsilon)\log x \left(\pi(x) - x^{1-\varepsilon}\right) .
$$

Divide both inequalities by $x$ and let $x \to \infty$ (note $x^{1-\varepsilon}\log x / x \to 0$): the limit of
$\pi(x)\log x / x$ is squeezed between 1 and $1/(1-\varepsilon)$, for every $\varepsilon$, so it is 1. A pleasant
consequence: the $n$th prime satisfies $p_n \sim n\log n$. Check: the millionth prime is $15{,}485{,}863$, while
$10^6 \log 10^6 = 13{,}815{,}511$; the better approximation $n(\log n + \log\log n - 1)$ gives $15{,}441{,}302$.

### The key fact: no zeros on the line $\sigma = 1$

The explicit formula suggests why: if a zero had $\beta = 1$, its wave $x^\rho/\rho$ would be as large as the main term
$x$ and could cancel it. So the prime number theorem needs at least this.

**Theorem 14.4 (Hadamard, de la Vallée Poussin, 1896).** $\zeta(1 + it) \ne 0$ for every real $t \ne 0$.

The proof below is due to Franz Mertens (1898) and rests on a schoolbook inequality: for every real $\theta$,

$$
3 + 4\cos\theta + \cos 2\theta = 3 + 4\cos\theta + 2\cos^2\theta - 1 = 2(1 + \cos\theta)^2 \ge 0 .
$$

*Proof.* Let $\sigma > 1$. Taking the real part of the logarithm of the Euler product,

$$
\log|\zeta(\sigma + it)| = \operatorname{Re} \sum_p \sum_{k \ge 1} \frac{p^{-ikt}}{k\,p^{k\sigma}} = \sum_p \sum_{k \ge 1} \frac{\cos(kt\log p)}{k\, p^{k\sigma}} .
$$

Form the combination $3\log\zeta(\sigma) + 4\log|\zeta(\sigma+it)| + \log|\zeta(\sigma + 2it)|$. Term by term it is

$$
\sum_p\sum_k \frac{3 + 4\cos(kt\log p) + \cos(2kt\log p)}{k\,p^{k\sigma}} \ge 0 ,
$$

by the inequality with $\theta = kt\log p$. Exponentiating,

$$
\zeta(\sigma)^3\, |\zeta(\sigma + it)|^4\, |\zeta(\sigma+2it)| \ge 1 \qquad \text{for all } \sigma > 1 .
$$

Now suppose $\zeta(1 + it) = 0$ for some $t \ne 0$. Let $\sigma \to 1^{+}$:

- $\zeta(\sigma)^3 \le \left(1 + \frac1{\sigma-1}\right)^3 \le \frac{8}{(\sigma - 1)^3}$ for $\sigma$ close to 1;
- $\zeta$ is analytic near $1 + it$ and vanishes there, so $|\zeta(\sigma+it)| \le C(\sigma-1)$ for some constant $C$, and
  its fourth power is at most $C^4(\sigma-1)^4$;
- $\zeta$ is analytic at $1 + 2it$ (the only pole is at 1, and $2t \ne 0$), so $|\zeta(\sigma+2it)| \le D$.

The product is at most $8C^4D(\sigma - 1)$, which tends to 0, contradicting "$\ge 1$". $\blacksquare$

The proof is a contest between a pole of order 3 and a zero of order at least 4. The weights $3, 4, 1$ are exactly those
that make the trigonometric polynomial nonnegative with the zero winning.

### Outline of the rest of the proof

From Theorem 14.4 to $\theta(x) \sim x$ takes a **Tauberian theorem**: a result that turns good behaviour of a
transform (here $\zeta$ on $\sigma \ge 1$) back into good behaviour of the function (here $\theta$). The cleanest route
is Donald J. Newman's of 1980, as written up by Don Zagier in 1997. Its steps:

1. **Chebyshev's bound** $\theta(x) \le Cx$ (Chapter 13).
2. **A function made from primes.** Let $\Phi(s) = \sum_p \frac{\log p}{p^s}$ for $\sigma > 1$. Differentiating the log of the
   Euler product gives $-\frac{\zeta'(s)}{\zeta(s)} = \sum_p \frac{\log p}{p^s - 1} = \Phi(s) + \sum_p \frac{\log p}{p^s(p^s-1)}$,
   and the last sum converges for $\sigma > \frac12$. Since $\zeta$ has a simple pole at 1 and (Theorem 14.4) no zeros
   on $\sigma = 1$, the function $\Phi(s) - \frac{1}{s-1}$ extends analytically to a neighbourhood of the closed
   half-plane $\sigma \ge 1$.
3. **The analytic theorem.** If $f$ is bounded and locally integrable on $[0, \infty)$ and
   $g(z) = \int_0^\infty f(t) e^{-zt}\,dt$ (defined for $\operatorname{Re} z > 0$) extends analytically to a
   neighbourhood of $\operatorname{Re} z \ge 0$, then $\int_0^\infty f(t)\,dt$ converges and equals $g(0)$. Newman's proof is
   a single contour integral over a cleverly chosen path, about a page long; see Zagier's paper.
4. **Apply it** to $f(t) = \theta(e^t)e^{-t} - 1$, bounded by step 1. A substitution $x = e^t$ shows
   $g(z) = \frac{\Phi(z+1)}{z+1} - \frac{1}{z}$, which extends by step 2. Conclusion: the integral
   $\int_1^\infty \frac{\theta(x) - x}{x^2}\,dx$ converges.
5. **From the integral to the limit.** This last step is elementary, and it is written out in full just below.

*Step 5 in full.* Suppose that for some $\lambda > 1$ there are arbitrarily large $x$ with $\theta(x) \ge \lambda x$. Since
$\theta$ never decreases, for $x \le t \le \lambda x$ we have $\theta(t) \ge \theta(x) \ge \lambda x$, so (substituting
$t = xu$)

$$
\int_x^{\lambda x} \frac{\theta(t) - t}{t^2}\,dt \ge \int_x^{\lambda x} \frac{\lambda x - t}{t^2}\,dt = \int_1^\lambda \frac{\lambda - u}{u^2}\,du ,
$$

a fixed positive number. But for a convergent integral, the pieces over $[x, \lambda x]$ must tend to 0 as
$x \to \infty$. Contradiction. The case $\theta(x) \le \lambda x$ with $\lambda < 1$ is the mirror image (integrate over
$[\lambda x, x]$). So $\theta(x)/x \to 1$, and by the equivalence above, $\pi(x) \sim x/\log x$. $\blacksquare$

Numerically, $\theta(x)/x$ is $0.956$ at $x = 1000$, $0.9969$ at $10^5$ and $0.9985$ at $10^6$.

### Error terms and other proofs

De la Vallée Poussin went further in 1899: he showed there are no zeros in a thin region
$\sigma > 1 - \frac{c}{\log(|t|+2)}$ and deduced

$$
\pi(x) = \operatorname{li}(x) + O\!\left(x e^{-c\sqrt{\log x}}\right)
$$

for some constant $c > 0$. Later work (Vinogradov and Korobov, 1958) widened the zero-free region a little, but
nobody has shown that $\zeta$ has no zeros with $\sigma > 1 - \delta$ for any fixed $\delta > 0$.

For decades it was believed that complex analysis was unavoidable. In 1948 Atle Selberg found an elementary
inequality (no complex numbers) and, with a contribution from Paul Erdős, an **elementary proof** of the prime number
theorem appeared in 1949. "Elementary" means no complex analysis, not easy; the proof is longer than the analytic one.
The episode led to a well-known priority dispute between the two, which is best read in Goldfeld's account listed at the
end rather than in summaries.

<figure class="play" data-play="primecount"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The prime number theorem in a picture: the prime count and x / ln x keep pace as x grows, though x / ln x stays a little low.</figcaption></figure>

## 14.5 The Riemann hypothesis and what it would give

*Level: expert.*

Riemann computed the first few zeros by hand and wrote that it was "very probable" that all the nontrivial zeros lie on
the critical line, adding that he had put aside the search for a proof after some fleeting attempts.

**The Riemann hypothesis (RH).** Every nontrivial zero of $\zeta(s)$ has real part $\tfrac12$.

David Hilbert put it on his list of 23 problems in 1900 (problem 8). In 2000 the Clay Mathematics Institute made it one
of its seven Millennium Prize Problems, with a prize of one million dollars. It is open.

### RH is a statement about the primes

The explicit formula says each zero contributes a wave of size about $x^\beta$. If all $\beta = \frac12$, every wave has
size about $\sqrt x$, and the error in the prime count is as small as it could possibly be. In 1901 Helge von Koch made
this exact:

**Theorem 14.5 (von Koch).** The Riemann hypothesis is true if and only if

$$
\pi(x) = \operatorname{li}(x) + O\left(\sqrt{x}\,\log x\right).
$$

In 1976 Lowell Schoenfeld turned the "$O$" into a number: if RH holds, then
$|\pi(x) - \operatorname{li}(x)| < \frac{1}{8\pi}\sqrt x\log x$ for all $x \ge 2657$. Check at $x = 10^6$: the bound is
$\sqrt{10^6}\cdot\log 10^6/(8\pi) \approx 550$, and the true difference is 130.

*Why "if and only if".* One direction is the explicit formula: on RH, $\sum_\rho x^\rho/\rho$ has terms of size
$\sqrt{x}/|\rho|$, and with the zero count $N(T)$ the sum (cut off at a suitable height) is $O(\sqrt x \log^2 x)$, which
gives $\psi(x) = x + O(\sqrt x \log^2 x)$ and, by partial summation, the bound for $\pi$. The other direction: if
$\pi(x) - \operatorname{li}(x)$ is that small, then $\int_1^\infty (\psi(x) - x)x^{-s-1}\,dx$ converges for $\sigma > \frac12$,
and this integral equals $-\frac{\zeta'(s)}{s\,\zeta(s)} - \frac{1}{s-1}$, so $\zeta'/\zeta$ is analytic there and $\zeta$ has
no zeros with $\sigma > \frac12$; by the symmetry, none with $\sigma < \frac12$ either.

### What RH would give

Hundreds of theorems are proved "assuming RH". A few:

- **Primes in short intervals.** Harald Cramér showed in 1920 that RH implies $p_{n+1} - p_n = O(\sqrt{p_n}\log p_n)$:
  every interval $[x, x + C\sqrt x \log x]$ contains a prime. Unconditionally the best known is much weaker (intervals of
  length $x^{0.525}$, by Baker, Harman and Pintz, 2001). Even RH would not prove Legendre's conjecture that there is a
  prime between consecutive squares.
- **Divisor sums.** Guy Robin proved in 1984 that RH is equivalent to $\sigma(n) < e^\gamma n \log\log n$ for all
  $n > 5040$, where $\sigma(n)$ is the sum of the divisors of $n$. A statement about divisors, equivalent to a statement
  about zeros.
- **Algorithms.** The **generalized Riemann hypothesis** (GRH), the same statement for the $L$-functions of
  [Chapter 15](15-Primes-in-Progressions.md), implies that the Miller-Rabin test of
  [Chapter 12](12-Primality-Factoring-and-RSA.md) becomes a deterministic test if you try every base up to
  $2(\log n)^2$ (Eric Bach, 1990), and that the least quadratic non-residue mod $p$ is small.

### What is proved

- G. H. Hardy proved in 1914 that **infinitely many** zeros lie on the critical line.
- Atle Selberg proved in 1942 that a **positive proportion** of them do. Norman Levinson raised the proportion to more than
  one third in 1974, and Brian Conrey to more than two fifths in 1989.
- All but a tiny fraction of zeros lie very close to the line (density theorems).
- J. E. Littlewood proved in 1914 that $\pi(x) - \operatorname{li}(x)$ changes sign infinitely often, even though it is
  negative for every $x$ ever checked. Stanley Skewes gave the first explicit upper bound for the first sign change in
  1933 (assuming RH), an absurdly large number; later work brought the bound down to around $10^{316}$. It is a
  standing warning that numerical evidence in number theory can mislead.

### Why people believe it

Besides the computations of the next section, there is structure. Hugh Montgomery found in 1973 a formula for how the
spacings between zeros are distributed, and in a now-famous conversation at Princeton, Freeman Dyson recognised it as
the formula for the spacings between eigenvalues of large random Hermitian matrices, which physicists use for the
energy levels of heavy nuclei. Andrew Odlyzko's computations in the 1980s showed the match to be uncannily good. This
suggests (but does not prove) that the zeros are the eigenvalues of some unknown operator, an idea attributed to Hilbert
and Pólya. And the analogue of RH for curves over finite fields was proved by André Weil (1940s) and for varieties by
Pierre Deligne (1974), which convinces many that RH is a true structural statement and not a numerical coincidence.

## 14.6 Checking zeros numerically

*Level: advanced.*

How do you find a zero of $\zeta(\frac12 + it)$ and, harder, prove that you found every zero up to some height and that
all of them are exactly on the line?

### The Z function

A clever trick turns the complex problem into a real one. There is a real-valued function $\vartheta(t)$ (built from
the gamma function, not the theta function above) such that

$$
Z(t) = e^{i\vartheta(t)}\, \zeta\left(\tfrac12 + it\right)
$$

is **real** for real $t$, and $|Z(t)| = |\zeta(\frac12 + it)|$. So zeros on the critical line are exactly the real
zeros of a real function, and a **sign change** of $Z$ between $t_1$ and $t_2$ proves, by the intermediate value theorem,
that there is a zero on the line in between. This is called Hardy's $Z$ function, and it was the tool of Hardy's 1914
proof.

For instance $Z(14) = -0.1056$ and $Z(14.2) = 0.0520$, so a zero sits on the line between them; it is at
$t = 14.134725\ldots$. Likewise $Z(21) = 0.0251$, $Z(21.1) = -0.0882$ (zero at $21.022040\ldots$) and
$Z(25) = -0.0149$, $Z(25.1) = 0.1236$ (zero at $25.010858\ldots$).

To evaluate $Z(t)$ fast for large $t$ one uses the **Riemann-Siegel formula**, a sum of about $\sqrt{t/2\pi}$ cosine terms
plus a small correction. Carl Ludwig Siegel found it in 1932 in Riemann's unpublished notes in Göttingen: Riemann had
computed the first zeros with a method far ahead of anything he published.

### Counting: none missed

A sign change proves a zero on the line. But a pair of zeros off the line would show up as no sign change at all, so
sign changes alone prove nothing about completeness. The fix is to compare with $N(T)$, the total number of zeros in
the strip up to height $T$, which can be computed exactly by the argument principle of complex analysis (counting how
many times a contour winds). If the number of sign changes found equals $N(T)$, all zeros up to height $T$ are on the
line and simple. Alan Turing devised in 1953 a practical way to certify $N(T)$ from values of $Z$ alone; **Turing's
method** is still in use.

### The records, honestly

- Jørgen Gram in 1903 located the first 15 zeros.
- Turing's 1953 computation, one of the first uses of an electronic computer in pure mathematics, went to about 1,100
  zeros.
- By the 1980s, Jan van de Lune, Herman te Riele and Dik Winter had checked the first 1.5 billion.
- David Platt and Tim Trudgian (published 2021) verified that every zero with $0 < \gamma \le 3 \times 10^{12}$ lies on the
  critical line: that is more than ten trillion zeros, checked with rigorous interval arithmetic.
- Odlyzko computed large batches of zeros far up the line, near the $10^{20}$th zero and beyond, to test the
  random-matrix statistics.

Not one zero off the line has ever been found. But **no computation can prove RH**, since there are infinitely many
zeros. The phenomenon Derrick Lehmer noticed in 1956, pairs of zeros so close together that $Z$ barely crosses zero
between them, shows how delicate the situation is: a counterexample, if there were one, might look like a Lehmer pair
that fails to cross. And the Littlewood and Skewes story above shows that a pattern can hold past $10^{20}$ and still be
false.

### Try it in Python

This uses `mpmath`, which comes with sympy. It finds the zeros below height 50 from sign changes of $Z$, then asks
`mpmath` for the zeros themselves and for the count $N(50)$.

```python
import mpmath as mp

t, step = 1.0, 0.05
prev = mp.siegelz(t)
changes = []
while t < 50:
    t += step
    z = mp.siegelz(t)          # Hardy's Z(t), a real number
    if z * prev < 0:
        changes.append(round(t, 2))
    prev = z
print(len(changes), changes)   # 10 sign changes
print(mp.nzeros(50))           # 10 zeros in the strip up to height 50: none missed
print(mp.zetazero(1))          # (0.5 + 14.1347251417347j)
```

The ten sign changes appear just after $14.13, 21.02, 25.01, 30.42, 32.94, 37.59, 40.92, 43.33, 48.01$ and $49.77$, and
the count $N(50) = 10$ confirms that every zero below height 50 is on the line.

## Check yourself

??? question "1. Multiply the Euler factors for $p = 2, 3, 5, 7$ at $s = 2$ and compare with $\zeta(2)$."

    The factors are $\frac43, \frac98, \frac{25}{24}, \frac{49}{48}$. Their product is $\frac{900}{576}\cdot\frac{49}{48} = 1.5625 \times 1.020833 = 1.59505$.
    The full value is $\pi^2/6 = 1.64493$. The product is smaller, as it must be: it is the sum of $1/n^2$ over only those $n$
    whose prime factors are all at most 7.

??? question "2. Find $1 + \frac19 + \frac1{25} + \frac1{49} + \cdots$, the sum of $1/n^2$ over odd $n$."

    The even terms are $\sum 1/(2m)^2 = \frac14\zeta(2)$. So the odd terms sum to $\zeta(2) - \frac14\zeta(2) = \frac34\cdot\frac{\pi^2}{6} = \frac{\pi^2}{8} = 1.2337\ldots$
    The same idea in the Euler product: removing the factor for $p = 2$ multiplies by $1 - \frac14$.

??? question "3. Using $\zeta(4) = \pi^4/90$, find the sum of $1/n^4$ over odd $n$, and the sum of $(-1)^{n+1}/n^4$."

    Odd $n$: $(1 - \frac1{16})\zeta(4) = \frac{15}{16}\cdot\frac{\pi^4}{90} = \frac{\pi^4}{96}$.
    Alternating: $\eta(4) = (1 - 2^{1-4})\zeta(4) = \frac78\cdot\frac{\pi^4}{90} = \frac{7\pi^4}{720}$.

??? question "4. In the proof of $\zeta(2) = \pi^2/6$, check the identity $\sum_{k=1}^m \cot^2\frac{k\pi}{2m+1} = \frac{m(2m-1)}{3}$ for $m = 1$ and $m = 3$."

    $m = 1$: $\cot^2(\pi/3) = (1/\sqrt3)^2 = \frac13$, and $\frac{1\cdot 1}{3} = \frac13$.
    $m = 3$: $\cot^2(\pi/7) + \cot^2(2\pi/7) + \cot^2(3\pi/7) = 4.3119 + 0.6360 + 0.0521 = 5.0000$, and $\frac{3 \cdot 5}{3} = 5$.

??? question "5. Prove that $\zeta(s) \ne 0$ when $\operatorname{Re} s > 1$, by showing $|\zeta(s)| \ge \zeta(2\sigma)/\zeta(\sigma)$."

    Each factor satisfies $|1 - p^{-s}| \le 1 + p^{-\sigma}$, so $|1/(1-p^{-s})| \ge 1/(1+p^{-\sigma})$. Multiply over $p$ (the
    products converge): $|\zeta(s)| \ge \prod_p \frac{1}{1+p^{-\sigma}}$. Now $\frac{1}{1+u} = \frac{1-u}{1-u^2}$, so
    $\prod_p \frac{1}{1 + p^{-\sigma}} = \prod_p \frac{1 - p^{-\sigma}}{1 - p^{-2\sigma}} = \frac{\zeta(2\sigma)}{\zeta(\sigma)}$,
    a positive number. So $\zeta(s)$ is not zero.

??? question "6. The relation $\zeta(s) = \eta(s)/(1 - 2^{1-s})$ has a denominator that vanishes at $s = 1 + \frac{2\pi i k}{\log 2}$ for every whole number $k$. Why is $\zeta$ not infinite at those points (for $k \ne 0$)?"

    The formula from the fractional part, $\zeta(s) = \frac{s}{s-1} - s\int_1^\infty \{x\}x^{-s-1}dx$, shows $\zeta$ is
    analytic on $\sigma > 0$ except at $s = 1$. So at $s_k = 1 + 2\pi i k/\log 2$ with $k \ne 0$, $\zeta$ is finite, and
    the relation forces $\eta(s_k) = 0$: the zeros of the denominator are cancelled by zeros of $\eta$. At $k = 0$ there is
    no cancellation: $\eta(1) = \log 2 \ne 0$, and $\zeta$ has its pole.

??? question "7. Use the functional equation to show $\zeta(-2) = 0$. Where exactly is it used that $\zeta(3) \ne 0$?"

    $\xi(-2) = \xi(3) = \frac12\cdot 3 \cdot 2\cdot\pi^{-3/2}\,\Gamma(\frac32)\,\zeta(3)$, which is a finite nonzero number because
    $\Gamma(\frac32) = \frac{\sqrt\pi}{2} \ne 0$ and $\zeta(3) \ne 0$ (exercise 5). On the other side,
    $\xi(-2) = \frac12(-2)(-3)\pi\,\Gamma(-1)\,\zeta(-2)$, and $\Gamma$ has a pole at $-1$. A finite value equal to "pole
    times $\zeta(-2)$" forces $\zeta(-2) = 0$, and in fact a simple zero. The nonvanishing of $\zeta(3)$ is what makes
    the zero of $\zeta$ at $-2$ simple; even if it vanished, $\zeta(-2) = 0$ would still follow.

??? question "8. Prove that $3 + 4\cos\theta + \cos 2\theta \ge 0$ and find when it equals 0. Why would $1 + \cos\theta$ alone not be enough for the proof of Theorem 14.4?"

    $\cos 2\theta = 2\cos^2\theta - 1$, so the expression is $2 + 4\cos\theta + 2\cos^2\theta = 2(1+\cos\theta)^2 \ge 0$, with
    equality when $\cos\theta = -1$. With $1 + \cos\theta \ge 0$ you would get $\zeta(\sigma)|\zeta(\sigma+it)| \ge 1$: a pole of
    order 1 against a zero of order at least 1, and $(\sigma-1)^{-1}\cdot C(\sigma-1) = C$ need not tend to 0. No
    contradiction. The extra $\cos 2\theta$ lets the zero appear to the 4th power against a pole to the 3rd.

??? question "9. Use the prime number theorem to estimate how many primes lie between $10^9$ and $10^9 + 10^5$. (The true number is 4832.)"

    Near $x$, the density of primes is about $1/\log x$, so the count is about $10^5/\log(10^9) = 10^5/20.723 \approx 4825$. The true
    count, 4832, is within 0.2 percent. (The prime number theorem alone does not guarantee this in such a short interval;
    the success is evidence for the much stronger regularity RH predicts.)

??? question "10. If RH failed because of a single zero at $\rho = 0.8 + i\gamma$ (and its mirror images), how big would the error $\psi(x) - x$ become, roughly? What would happen to Schoenfeld's bound?"

    By the symmetries, $0.2 \pm i\gamma$ and $0.8 - i\gamma$ would also be zeros. In the explicit formula the terms for
    $0.8 \pm i\gamma$ combine to $-2x^{0.8}\cos(\gamma\log x - \arg\rho)/|\rho|$, so the error would swing up and down with
    amplitude about $2x^{0.8}/|\rho|$, infinitely often. Since $x^{0.8}$ eventually exceeds any multiple of
    $\sqrt x \log x$, the bound $|\pi(x) - \operatorname{li}(x)| < \frac{1}{8\pi}\sqrt x \log x$ would fail for some large $x$.

??? question "11. Show that if $\theta(x) \sim x$ then $\psi(x) \sim x$. (Hint: $\psi(x) = \theta(x) + \theta(x^{1/2}) + \theta(x^{1/3}) + \cdots$.)"

    Each $p^k \le x$ with $k \ge 2$ is a prime $p \le x^{1/k}$, so the hint holds, and the sum stops once $x^{1/k} < 2$, i.e.
    after $\log_2 x$ terms. By Chebyshev, $\theta(y) \le Cy$, so
    $0 \le \psi(x) - \theta(x) \le C(x^{1/2} + x^{1/3} + \cdots) \le C\sqrt{x}\,\log_2 x$. Divided by $x$ this tends to 0, so
    $\psi(x)/x$ and $\theta(x)/x$ have the same limit, 1.

??? question "12. Riemann-von Mangoldt predicts the number of zeros up to height 30 as $\frac{30}{2\pi}\log\frac{30}{2\pi} - \frac{30}{2\pi} + \frac78$. Compute it and compare with the zeros you know."

    $\frac{30}{2\pi} = 4.7746$ and $\log 4.7746 = 1.5633$, so the value is $4.7746 \times 1.5633 - 4.7746 + 0.875 = 7.4642 - 4.7746 + 0.875 = 3.56$.
    The true count is 3 (at heights $14.13, 21.02, 25.01$; the next is at $30.42$). The difference, $-0.56$, is the term
    $S(T)$, which is small and oscillates.

## What you learned

- $\zeta(s) = \sum n^{-s}$ equals the Euler product $\prod_p (1 - p^{-s})^{-1}$ for $\operatorname{Re} s > 1$: unique
  factorization as an identity. Its pole at $s = 1$ encodes the divergence of $\sum 1/n$ and of $\sum 1/p$.
- $\zeta(2) = \pi^2/6$, proved by squeezing a cotangent sum; all even values are rational multiples of powers of $\pi$;
  $\zeta(3)$ is irrational (Apéry).
- $\zeta$ extends to the whole plane with one pole; the completed function satisfies $\xi(s) = \xi(1-s)$; there are
  trivial zeros at $-2, -4, \ldots$ and infinitely many nontrivial zeros in the critical strip.
- The explicit formula writes $\psi(x)$ as $x$ minus one wave per zero; the real parts of the zeros set the size of the
  error in counting primes.
- The prime number theorem $\pi(x) \sim x/\log x$ (1896) follows from "no zeros on $\sigma = 1$", which the $3$-$4$-$1$
  inequality proves, plus a Tauberian argument.
- The Riemann hypothesis is equivalent to $\pi(x) = \operatorname{li}(x) + O(\sqrt x \log x)$. It is supported by
  trillions of computed zeros and deep analogies, and it is unproved.

**Next:** [Chapter 15](15-Primes-in-Progressions.md), where characters and $L$-functions show that every fair
arithmetic progression contains infinitely many primes.

## Further reading

- B. Riemann, "Ueber die Anzahl der Primzahlen unter einer gegebenen Grösse", *Monatsberichte der Berliner Akademie*,
  1859. An English translation is an appendix of Edwards's book.
- H. M. Edwards, *Riemann's Zeta Function*, 1974. Reads Riemann's paper line by line and fills in every proof.
- E. C. Titchmarsh, *The Theory of the Riemann Zeta-Function*, 2nd edition revised by D. R. Heath-Brown, 1986.
- H. Davenport, *Multiplicative Number Theory*, 3rd edition revised by H. L. Montgomery, 2000. Chapters 1-18 cover this
  chapter and the next.
- T. M. Apostol, *Introduction to Analytic Number Theory*, 1976. The gentlest full treatment.
- D. Zagier, "Newman's short proof of the prime number theorem", *American Mathematical Monthly* 104, 1997.
- D. Goldfeld, "The elementary proof of the prime number theorem: an historical perspective", in *Number Theory: New
  York Seminar 2003*, 2004.
- J. Derbyshire, *Prime Obsession*, 2003, and M. du Sautoy, *The Music of the Primes*, 2003. Popular accounts of
  Riemann's hypothesis.
- D. Platt and T. Trudgian, "The Riemann hypothesis is true up to $3 \cdot 10^{12}$", *Bulletin of the London
  Mathematical Society* 53, 2021.
- On this site: the gentle lesson [How the primes are spread out](../../topics/number-theory/level-8/04-spread-of-primes.md)
  and [Famous open problems](../../topics/number-theory/level-8/05-open-problems.md); the U of T guides
  [Series](../../uoft/MAT137/unit13.md), [Power series and Taylor series](../../uoft/MAT137/unit14.md) and
  [Uniform convergence](../../uoft/MAT159H1/unit06.md); the [Algebra book](../algebra/index.md) for complex numbers.
- Why the size of primes matters in practice: the [cryptography book](https://cryptography.akadian.ca/book/), whose
  RSA chapter needs large random primes, and the prime number theorem says how many there are to choose from.
