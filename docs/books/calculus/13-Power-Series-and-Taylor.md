# 13. Power series and Taylor

*Your calculator gives $\sin 0.3$, $e^{1.7}$ and $\ln 5$ to ten digits, yet all a chip can really do is add and
multiply. How? The answer is that these functions are polynomials of infinite degree: sums like
$x - x^3/6 + x^5/120 - \dots$ that you can stop whenever you have enough digits. In this chapter you learn when such
an infinite polynomial (a power series) makes sense, how to find the right one for a given function, how to bound
the error when you stop early, and how the series for $e^x$, $\sin x$ and $\cos x$ turn out to be one series in
disguise. At the end you meet a function so flat at one point that its series says nothing about it at all.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a power series is, and why each one converges on an interval centred at its centre (the radius of convergence)
    - how to find the radius with the ratio and root tests, and what can happen at the two ends
    - that a power series can be differentiated and integrated term by term inside its interval
    - Taylor polynomials, and Taylor's theorem with the Lagrange remainder, with a full proof
    - the series for $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$ and $\arctan x$, and how to compute $\pi$ with them
    - Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$, straight from the series
    - why "smooth" does not mean "equal to its Taylor series": the function $e^{-1/x^2}$

    **You need:** [Chapter 12](12-Sequences-and-Series.md) (convergence of series, the comparison, ratio, root and
    alternating series tests), [Chapter 6](06-The-Mean-Value-Theorem.md) (Rolle's theorem) and
    [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md) (derivatives of $e^x$, $\sin$, $\ln$, $\arctan$).
    For 13.5, complex numbers as in [Algebra, Chapter 9](../algebra/09-Complex-Numbers.md).

    **Levels:** 13.1 and 13.3 to 13.4 are intermediate (first-year university); 13.2 and 13.5 are intermediate to
    advanced; 13.6 is advanced.

## 13.1 Power series and the radius of convergence

Start with a series you already know. For $|x| < 1$ the geometric series gives

$$
1 + x + x^2 + x^3 + \dots = \frac{1}{1-x}.
$$

Read it the other way round: the function $1/(1-x)$, which is not a polynomial, is *equal* to an endless polynomial,
as long as $|x| < 1$. Outside that interval the left side makes no sense (at $x = 2$ it is $1 + 2 + 4 + \dots$),
although the right side is a perfectly good number, $-1$. So the equality is true on an interval and false off it.
That is the whole story of this section in miniature.

**Definition.** A **power series** centred at $a$ is a series

$$
\sum_{n=0}^{\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots
$$

where the **coefficients** $c_0, c_1, c_2, \dots$ are fixed numbers and $x$ is a variable. For each value of $x$ it
is an ordinary series of numbers, which may converge or diverge. Where it converges, its sum is a function of $x$.

At $x = a$ every term after the first is zero, so a power series always converges at its centre. The question is
how far from $a$ it keeps converging. Four examples, all centred at 0, show the range of answers.

| Series | Converges for | Why |
| --- | --- | --- |
| $\sum x^n$ | $-1 < x < 1$ | geometric, ratio $x$ |
| $\sum x^n / n$ ($n \ge 1$) | $-1 \le x < 1$ | at $x = 1$ harmonic, at $x = -1$ alternating |
| $\sum x^n / n!$ | every $x$ | ratio test, below |
| $\sum n!\, x^n$ | only $x = 0$ | terms grow without bound |

In each case the set where the series converges is an interval centred at 0, perhaps of radius 0 or infinite
radius, perhaps with or without its ends. That is no accident.

**Lemma (Abel).** If $\sum c_n x_0^n$ converges for some $x_0 \ne 0$, then $\sum c_n x^n$ converges absolutely for
every $x$ with $|x| < |x_0|$.

*Proof.* The terms of a convergent series tend to 0, so $c_n x_0^n \to 0$, and in particular they are bounded:
$|c_n x_0^n| \le M$ for all $n$. Put $r = |x|/|x_0|$, which is less than 1. Then

$$
|c_n x^n| = |c_n x_0^n| \cdot \left|\frac{x}{x_0}\right|^n \le M r^n .
$$

The geometric series $\sum M r^n$ converges, so by comparison $\sum |c_n x^n|$ converges. $\square$

The same argument, turned around, says that if the series diverges at $x_1$, it diverges at every $x$ farther from
the centre (if it converged at such an $x$, the lemma would make it converge at $x_1$).

**Theorem (radius of convergence).** For every power series $\sum c_n (x-a)^n$ there is a number $R$ with
$0 \le R \le \infty$, called the **radius of convergence**, such that the series converges absolutely when
$|x - a| < R$ and diverges when $|x - a| > R$.

*Proof.* Shift so that $a = 0$. Let $S$ be the set of numbers $|x|$ for which the series converges. If $S$ is
unbounded, Abel's lemma gives convergence everywhere; put $R = \infty$. Otherwise let $R$ be the least upper bound
of $S$ (the smallest number that is at least every element of $S$; [Chapter 18](18-The-Real-Numbers.md) shows such
a number always exists). If $|x| < R$, there is a point $x_0$ with $|x| < |x_0|$ at which the series converges
(otherwise $|x|$ itself would be an upper bound smaller than $R$), and Abel's lemma gives absolute convergence at
$x$. If $|x| > R$, the series cannot converge at $x$, because then $|x|$ would be in $S$ and bigger than its least
upper bound. $\square$

The interval $(a - R, a + R)$ is the **open interval of convergence**. The theorem says nothing about the two
endpoints $x = a \pm R$; they must be checked one by one with the tests of [Chapter 12](12-Sequences-and-Series.md).

### Finding $R$

The ratio and root tests turn into formulas for $R$.

**Ratio formula.** If $\left| c_{n+1}/c_n \right| \to L$, then $R = 1/L$ (with $1/0 = \infty$ and $1/\infty = 0$).

*Proof.* Apply the ratio test to the series of numbers $\sum c_n x^n$ for a fixed $x \ne 0$:

$$
\left| \frac{c_{n+1} x^{n+1}}{c_n x^n} \right| = \left|\frac{c_{n+1}}{c_n}\right| |x| \to L|x| .
$$

The series converges absolutely if $L|x| < 1$, that is $|x| < 1/L$, and diverges if $L|x| > 1$ (the terms do not
tend to 0). So the radius is exactly $1/L$. $\square$

**Root formula (Cauchy–Hadamard).** If $|c_n|^{1/n} \to L$, then again $R = 1/L$. More generally, with no
assumption that a limit exists,

$$
\frac{1}{R} = \limsup_{n \to \infty} |c_n|^{1/n} .
$$

The **limit superior** $\limsup$ of a bounded sequence is the largest number that some subsequence converges to (for
an unbounded sequence it is $\infty$). The proof is the root test applied to $|c_n x^n|^{1/n} = |c_n|^{1/n}|x|$,
exactly as above. The root formula always works; the ratio formula needs the ratios to have a limit, which fails
for series with gaps such as $\sum x^{2n}$, where every other coefficient is 0.

**Example 1.** $\sum_{n \ge 0} \dfrac{x^n}{n!}$. Here $c_{n+1}/c_n = n!/(n+1)! = 1/(n+1) \to 0$, so $R = \infty$:
the series converges for every real $x$.

**Example 2.** $\sum_{n \ge 1} \dfrac{(x-3)^n}{n\, 2^n}$. The ratio is

$$
\frac{c_{n+1}}{c_n} = \frac{n\, 2^n}{(n+1) 2^{n+1}} = \frac{n}{2(n+1)} \to \frac12,
$$

so $R = 2$ and the series converges absolutely for $1 < x < 5$. Ends: at $x = 5$ the terms are $2^n/(n 2^n) = 1/n$,
the harmonic series, which diverges. At $x = 1$ they are $(-2)^n/(n 2^n) = (-1)^n/n$, which converges by the
alternating series test. The set of convergence is $[1, 5)$.

**Example 3.** $\sum_{n \ge 1} \dfrac{x^n}{n^2}$. The ratio $n^2/(n+1)^2 \to 1$ gives $R = 1$. At both ends
$|x^n/n^2| = 1/n^2$, and $\sum 1/n^2$ converges, so this series converges on the closed interval $[-1, 1]$.

So the four possibilities at the ends, (open, half-open both ways, closed), all happen: $\sum x^n$ converges on
$(-1,1)$, $\sum x^n/n$ on $[-1,1)$, $\sum (-x)^n/n$ on $(-1,1]$, and $\sum x^n/n^2$ on $[-1,1]$.

**Example 4.** $\sum_{n \ge 0} 2^n x^{2n}$. The odd coefficients are 0, so use the series as a geometric one in
$y = 2x^2$: it converges exactly when $2x^2 < 1$, so $R = 1/\sqrt 2$. Check with the root formula: the nonzero
coefficients are $c_{2n} = 2^n$, and $|c_{2n}|^{1/(2n)} = 2^{1/2}$, so $\limsup |c_n|^{1/n} = \sqrt 2$ and
$R = 1/\sqrt 2$.

## 13.2 Differentiating and integrating term by term

*Level: intermediate to advanced.*

A polynomial is differentiated one term at a time. Can you do the same with a power series, an infinite sum? Not
every infinite sum of functions behaves this well (Chapter 19 has sums of smooth functions whose sum has corners),
but power series do.

**Theorem (term-by-term calculus).** Suppose $f(x) = \sum_{n \ge 0} c_n (x-a)^n$ has radius of convergence $R > 0$.
Then on the open interval $|x - a| < R$:

1. $f$ is differentiable, and $f'(x) = \sum_{n \ge 1} n c_n (x-a)^{n-1}$;
2. $\int_a^x f(t)\,dt = \sum_{n \ge 0} \dfrac{c_n}{n+1}(x-a)^{n+1}$;
3. both new series have the same radius $R$.

Part 3 is easy and worth proving now. The differentiated series $\sum n c_n x^{n-1}$ converges at a point
$x \ne 0$ exactly when $\sum n c_n x^n$ does (multiply by the fixed number $x$), so it is enough to compare
$\limsup |n c_n|^{1/n}$ with $\limsup |c_n|^{1/n}$. Since $n^{1/n} \to 1$ (take logarithms: $\ln n / n \to 0$),
multiplying the $n$th root by $n^{1/n}$ does not change any subsequential limit, so the two $\limsup$s are equal.
The integrated series is the same argument with $1/(n+1)$.

Parts 1 and 2 need more than a single series of numbers: they are about a limit of functions, and the right tool is
**uniform convergence**. The full proof is in [Chapter 19](19-Uniform-Convergence.md), where the key fact is that a
power series converges uniformly on every closed interval $[a - r, a + r]$ with $r < R$. Here we use the theorem.

A consequence: $f'$ is again a power series with radius $R$, so it can be differentiated again, and again. **A power
series is infinitely differentiable inside its interval of convergence.** Differentiating $k$ times and putting
$x = a$ kills every term except the constant one:

$$
f^{(k)}(a) = k!\, c_k, \qquad\text{so}\qquad c_k = \frac{f^{(k)}(a)}{k!} .
$$

So the coefficients of a power series are fixed by the derivatives of its sum at the centre. In particular, **a
function has at most one power series at a given centre**: two series with the same sum near $a$ have the same
coefficients. This uniqueness is what lets you find series by any trick you like and be sure you have the right one.

**Example 5 (new series from old).** Differentiate the geometric series for $|x| < 1$:

$$
\frac{1}{(1-x)^2} = \frac{d}{dx}\frac{1}{1-x} = \sum_{n \ge 1} n x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \dots
$$

Multiply by $x$: $\sum_{n \ge 1} n x^n = \dfrac{x}{(1-x)^2}$. At $x = 1/2$ this gives a sum you might meet in
probability (the expected number of tosses of a fair coin up to the first head):

$$
\sum_{n \ge 1} \frac{n}{2^n} = \frac{1/2}{(1/2)^2} = 2 .
$$

Check: $\tfrac12 + \tfrac24 + \tfrac38 + \tfrac4{16} + \tfrac5{32} = 1.78$, and the partial sums keep climbing
towards 2.

**Example 6 (logarithm).** Replace $x$ by $-t$ in the geometric series: $\dfrac{1}{1+t} = 1 - t + t^2 - t^3 + \dots$
for $|t| < 1$. Integrate from 0 to $x$ term by term:

$$
\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots = \sum_{n \ge 1} \frac{(-1)^{n+1}}{n} x^n,
\qquad |x| < 1 .
$$

**Example 7 (arctangent).** Replace $x$ by $-t^2$: $\dfrac{1}{1+t^2} = 1 - t^2 + t^4 - \dots$ for $|t| < 1$. Since
$\arctan' t = 1/(1+t^2)$ and $\arctan 0 = 0$,

$$
\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \dots, \qquad |x| < 1 .
$$

Both of these also hold at $x = 1$, which gives two famous sums; that needs an extra argument, given in 13.4.

## 13.3 Taylor polynomials and Taylor's theorem

The previous section went from series to functions. Now go the other way: given a function, such as $\sin x$, that
you can differentiate as often as you like, which polynomial imitates it best near a point $a$?

The tangent line $f(a) + f'(a)(x-a)$ is the degree-1 answer from [Chapter 7](07-Applications-of-Derivatives.md):
it has the same value and the same slope as $f$ at $a$. Ask for the same value, slope, second derivative, and so on
up to the $n$th, and the formula for $c_k$ in 13.2 tells you the answer at once.

**Definition.** If $f$ has $n$ derivatives at $a$, its **Taylor polynomial** of degree $n$ at $a$ is

$$
P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k = f(a) + f'(a)(x-a) + \frac{f''(a)}{2}(x-a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n .
$$

It is the only polynomial of degree at most $n$ whose value and first $n$ derivatives at $a$ match those of $f$.
When $a = 0$ it is also called a **Maclaurin polynomial**. If $f$ has derivatives of every order, letting
$n \to \infty$ gives the **Taylor series** of $f$ at $a$.

**Example 8.** $f(x) = \sqrt{1+x}$ at $a = 0$. The derivatives are

$$
f' = \tfrac12 (1+x)^{-1/2},\quad f'' = -\tfrac14 (1+x)^{-3/2},\quad f''' = \tfrac38 (1+x)^{-5/2},
$$

so at 0 they are $1, \tfrac12, -\tfrac14, \tfrac38$, and dividing by $0!, 1!, 2!, 3!$:

$$
P_3(x) = 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} .
$$

At $x = 0.1$: $P_1 = 1.05$, $P_2 = 1.04875$, $P_3 = 1.0488125$, while $\sqrt{1.1} = 1.0488088\ldots$ Each extra
term gains roughly one more correct digit, because each term carries another factor of $x = 0.1$.

How good is $P_n$? The difference $R_n(x) = f(x) - P_n(x)$ is the **remainder**. Without a bound on it, a Taylor
polynomial is a guess. The theorem that bounds it is the most useful single result in this chapter.

**Taylor's theorem (Lagrange form of the remainder).** Suppose $f$ has $n+1$ derivatives on an open interval
containing $a$ and $x$. Then there is a number $c$ strictly between $a$ and $x$ such that

$$
f(x) = P_n(x) + \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1} .
$$

For $n = 0$ this says $f(x) = f(a) + f'(c)(x - a)$: it is the mean value theorem. Taylor's theorem is the mean value
theorem with $n$ more terms, and the remainder looks exactly like "the next term", except that the derivative is
taken at an unknown point $c$ instead of at $a$.

*Proof.* Fix $x \ne a$. The trick is to treat the *centre* as the variable. For $t$ between $a$ and $x$ define

$$
g(t) = f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(t)}{k!}(x-t)^k - M (x-t)^{n+1},
$$

where the constant $M$ is chosen so that $g(a) = 0$, that is, $M = R_n(x)/(x-a)^{n+1}$. Also $g(x) = 0$: at
$t = x$ every power of $(x - t)$ vanishes except in the $k = 0$ term, which is $f(x)$, and $f(x) - f(x) = 0$.

Since $g(a) = g(x) = 0$, Rolle's theorem ([Chapter 6](06-The-Mean-Value-Theorem.md)) gives a $c$ strictly between
them with $g'(c) = 0$. Now differentiate $g$ with respect to $t$, using the product rule on each term of the sum:

$$
\frac{d}{dt}\left[\frac{f^{(k)}(t)}{k!}(x-t)^k\right] = \frac{f^{(k+1)}(t)}{k!}(x-t)^k - \frac{f^{(k)}(t)}{(k-1)!}(x-t)^{k-1}
$$

(for $k = 0$ the second part is absent). Summed from $k = 0$ to $n$, these telescope: the second part of term $k$
cancels the first part of term $k-1$, and only the first part of the last term survives. So

$$
g'(t) = -\frac{f^{(n+1)}(t)}{n!}(x-t)^n + M(n+1)(x-t)^n .
$$

Setting $g'(c) = 0$ and dividing by $(x-c)^n \neq 0$ gives $M = f^{(n+1)}(c)/(n+1)!$. Since $M$ was
$R_n(x)/(x-a)^{n+1}$, this is exactly the claimed formula. $\square$

In practice you rarely know $c$. You use the theorem as a bound: if $|f^{(n+1)}| \le K$ between $a$ and $x$, then

$$
|R_n(x)| \le \frac{K}{(n+1)!}|x-a|^{n+1} .
$$

**Example 9 (how many terms for $e$?).** Take $f = e^x$, $a = 0$, $x = 1$. Every derivative is $e^t$, which is at
most $e < 3$ on $[0, 1]$. So

$$
\left| e - \left(1 + 1 + \frac{1}{2!} + \dots + \frac{1}{n!}\right) \right| \le \frac{3}{(n+1)!} .
$$

For six correct decimals you need the error below $5 \times 10^{-7}$. With $n = 9$ the bound is
$3/10! \approx 8.3 \times 10^{-7}$, not enough; with $n = 10$ it is $3/11! \approx 7.5 \times 10^{-8}$, enough. So
eleven terms (up to $1/10!$) give $e = 2.718282$ to six decimals.

**Example 10 (sine of a small angle).** Approximate $\sin 0.1$ by $0.1 - 0.1^3/6 = 0.0998333\ldots$ Because the
$x^4$ coefficient of sine is 0, $P_3 = P_4$, so you may use the remainder with $n = 4$: it is at most
$|\sin^{(5)}| \cdot 0.1^5/5! \le 0.1^5/120 \approx 8.3 \times 10^{-8}$. Check: $\sin 0.1 = 0.0998334166\ldots$, and
the error is $8.3 \times 10^{-8}$, right at the bound.

There is a second form of the remainder that needs no unknown point.

**Taylor's theorem (integral form).** If $f^{(n+1)}$ is continuous between $a$ and $x$, then

$$
R_n(x) = \frac{1}{n!}\int_a^x f^{(n+1)}(t)(x-t)^n\,dt .
$$

*Proof.* For $n = 0$ this is the fundamental theorem of calculus: $f(x) - f(a) = \int_a^x f'(t)\,dt$. Suppose it
holds for $n - 1$. Integrate by parts, with $u = f^{(n)}(t)$ and $dv = (x-t)^{n-1}dt/(n-1)!$, so
$v = -(x-t)^n/n!$:

$$
\frac{1}{(n-1)!}\int_a^x f^{(n)}(t)(x-t)^{n-1}dt = \frac{f^{(n)}(a)}{n!}(x-a)^n + \frac{1}{n!}\int_a^x f^{(n+1)}(t)(x-t)^n dt .
$$

The left side is $R_{n-1}(x)$ by the induction hypothesis, and $R_{n-1}(x) - \frac{f^{(n)}(a)}{n!}(x-a)^n = R_n(x)$.
$\square$

**A short history.** James Gregory knew series of this kind in the 1670s, and Isaac Newton used them freely. Brook
Taylor published the general formula in *Methodus Incrementorum* (1715), deriving it from finite differences
without any discussion of convergence. Colin Maclaurin used the special case at 0 heavily in his *Treatise of
Fluxions* (1742), which is why that case carries his name. The remainder in the form above is due to Joseph-Louis
Lagrange, in his *Théorie des fonctions analytiques* (1797). Lagrange hoped to build all of calculus on power
series; 13.6 shows why that hope could not work.

<figure class="play" data-play="taylor" data-f="sin"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Taylor polynomials of sin x round 0: each extra term keeps the polynomial close to the curve over a wider stretch.</figcaption></figure>

## 13.4 The great series

A function equals its Taylor series at $x$ exactly when $R_n(x) \to 0$ as $n \to \infty$. For the functions below we
check this directly from the remainder.

### The exponential

All derivatives of $e^x$ equal $e^x$, which is 1 at 0, so the Taylor series is $\sum x^n/n!$. On the interval
between 0 and $x$, $e^t \le e^{|x|}$, so

$$
|R_n(x)| \le e^{|x|}\frac{|x|^{n+1}}{(n+1)!} .
$$

For a fixed $x$, the factorial wins: once $n + 1 > 2|x|$, each further step multiplies $|x|^{n+1}/(n+1)!$ by less
than $\tfrac12$, so it tends to 0. Therefore, for **every** real $x$,

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots = \sum_{n=0}^{\infty}\frac{x^n}{n!} .
$$

### Sine and cosine

The derivatives of $\sin$ cycle through $\sin, \cos, -\sin, -\cos$, which at 0 are $0, 1, 0, -1$. Every derivative
is bounded by 1, so $|R_n(x)| \le |x|^{n+1}/(n+1)! \to 0$ for every $x$, and

$$
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots, \qquad \cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots,
$$

for all real $x$. Sine has only odd powers and cosine only even ones, which matches $\sin(-x) = -\sin x$ and
$\cos(-x) = \cos x$. Differentiating the sine series term by term gives the cosine series, as it must.

**Example 11.** $\cos 0.5$. The degree-4 polynomial gives $1 - 0.125 + 0.0026042 = 0.8776042$. Since the $x^5$
coefficient is 0, the remainder can be taken with $n = 5$: at most $0.5^6/720 \approx 2.2 \times 10^{-5}$. Check:
$\cos 0.5 = 0.8775826$, error $2.2 \times 10^{-5}$.

### The logarithm, including at $x = 1$

Example 6 gave $\ln(1+x) = x - x^2/2 + x^3/3 - \dots$ for $|x| < 1$. At $x = 1$ the series is the alternating
harmonic series, which converges; but does it converge to $\ln 2$? Term-by-term integration was only promised inside
the interval. Here is a direct argument. The finite geometric sum gives, for $t \ne -1$,

$$
\frac{1}{1+t} = 1 - t + t^2 - \dots + (-t)^{n-1} + \frac{(-t)^n}{1+t} .
$$

(Check: multiply by $1+t$; the sum telescopes to $1 - (-t)^n$.) Integrate from 0 to $x$ with $0 \le x \le 1$:

$$
\ln(1+x) = x - \frac{x^2}{2} + \dots + (-1)^{n-1}\frac{x^n}{n} + (-1)^n\int_0^x \frac{t^n}{1+t}\,dt .
$$

The last integral is between 0 and $\int_0^x t^n\,dt = x^{n+1}/(n+1) \le 1/(n+1)$, which tends to 0. So the series
converges to $\ln(1+x)$ on $[0,1]$, and in particular

$$
\ln 2 = 1 - \frac12 + \frac13 - \frac14 + \dots
$$

It converges painfully slowly: the error after $n$ terms is about $1/(2n)$. For computing, $x$ should be small.
**Example 12:** $\ln 1.2 \approx 0.2 - 0.02 + 0.0026667 - 0.0004 = 0.1822667$; the error is at most
$0.2^5/5 = 6.4 \times 10^{-5}$. Check: $\ln 1.2 = 0.1823216$, error $5.5 \times 10^{-5}$.

### The arctangent and $\pi$

The same argument with $1/(1+t^2)$ shows that the arctangent series of Example 7 converges to $\arctan x$ on
$[-1, 1]$; the remainder is $\pm\int_0^x t^{2n}/(1+t^2)\,dt$, at most $1/(2n+1)$ in size. At $x = 1$,
$\arctan 1 = \pi/4$, so

$$
\frac{\pi}{4} = 1 - \frac13 + \frac15 - \frac17 + \dots
$$

This is the **Leibniz series** (also called the Madhava–Leibniz or Gregory–Leibniz series). Gottfried Leibniz found
it in the 1670s; James Gregory had the arctangent series a few years earlier; and Kerala texts of the sixteenth
century attribute the series to Madhava of Sangamagrama, around 1400, together with corrections that speed it up.

It is beautiful and useless for computing: 1000 terms give $3.1405926\ldots$, still wrong in the third decimal,
because the error after $n$ terms is about $1/n$. The fix is to use $\arctan$ at small $x$, where the terms shrink
like powers of $x^2$. In 1706 John Machin found

$$
\frac{\pi}{4} = 4\arctan\frac15 - \arctan\frac{1}{239} .
$$

*Proof.* Let $\theta = \arctan\frac15$. The double-angle formula $\tan 2\theta = 2\tan\theta/(1-\tan^2\theta)$ gives
$\tan 2\theta = \frac{2/5}{24/25} = \frac{5}{12}$, and again $\tan 4\theta = \frac{10/12}{119/144} = \frac{120}{119}$.
Then by the subtraction formula

$$
\tan\left(4\theta - \frac{\pi}{4}\right) = \frac{\frac{120}{119} - 1}{1 + \frac{120}{119}} = \frac{1/119}{239/119} = \frac{1}{239} .
$$

Since $0 < 4\theta - \pi/4 < \pi/2$ (because $\tan 4\theta$ is just above 1), this says
$4\theta - \pi/4 = \arctan\frac{1}{239}$. $\square$

Each term of the $\arctan\frac15$ series is about 25 times smaller than the last, so every term gains about 1.4
digits. Machin computed 100 digits of $\pi$ this way by hand, and formulas of this kind held the record until the
age of computers.

**Try it in Python.** Exact fractions avoid any rounding:

```python
from fractions import Fraction as F

def arctan_inv(m, terms):             # arctan(1/m) by its series
    return sum(F((-1)**k, (2*k + 1) * m**(2*k + 1)) for k in range(terms))

for n in (2, 5, 10):
    approx = 4 * (4 * arctan_inv(5, n) - arctan_inv(239, n))
    print(n, float(approx))
```

With $n = 5$ terms the result is $3.14159268$, already within $3 \times 10^{-8}$ of $\pi$; with $n = 10$ it is
correct to all the digits a float can show.

### The binomial series

One of Newton's early discoveries (around 1665, described in his letters of 1676 to Leibniz, sent through Henry Oldenburg) was that
$(1+x)^\alpha$ has a series for every real exponent $\alpha$, not just whole numbers:

$$
(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \frac{\alpha(\alpha-1)(\alpha-2)}{3!}x^3 + \dots,
\qquad |x| < 1 .
$$

The coefficients are the derivatives at 0 divided by $k!$, as always: the $k$th derivative of $(1+x)^\alpha$ is
$\alpha(\alpha-1)\cdots(\alpha-k+1)(1+x)^{\alpha-k}$. When $\alpha$ is a whole number the coefficients become 0 after
$k = \alpha$ and you get the ordinary binomial theorem. Example 8 is the case $\alpha = \tfrac12$. (Proving that the
remainder tends to 0 for every $|x| < 1$ is fiddly with the Lagrange form; a clean route is to show that the series
$g(x)$ satisfies $(1+x)g' = \alpha g$, as $(1+x)^\alpha$ does, and that this forces $g(x)/(1+x)^\alpha$ to be
constant.)

### Using series to compute

Series are not only for evaluating functions. Because they can be multiplied, substituted and integrated, they solve
problems that have no closed form.

**Example 13 (an integral with no formula).** $\int_0^1 e^{-x^2}dx$ has no elementary antiderivative
([Chapter 10](10-Techniques-of-Integration.md)). Substitute $-x^2$ into the series for $e^x$ and integrate term by
term:

$$
\int_0^1 e^{-x^2}dx = \int_0^1 \left(1 - x^2 + \frac{x^4}{2!} - \frac{x^6}{3!} + \dots\right)dx = 1 - \frac13 + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} - \dots
$$

The series alternates with decreasing terms, so the error is less than the first term left out. Five terms give
$0.74749$; the next term is $1/1320 \approx 0.00076$, so the true value lies between $0.74673$ and $0.74749$. It is
$0.746824\ldots$

**Example 14 (a limit).** $\displaystyle\lim_{x\to 0}\frac{\sin x - x}{x^3}$. Replace $\sin x$ by its series:
$\dfrac{-x^3/6 + x^5/120 - \dots}{x^3} = -\dfrac16 + \dfrac{x^2}{120} - \dots \to -\dfrac16$. Three uses of
L'Hôpital's rule give the same answer, with more work.

## 13.5 Euler's formula

*Level: intermediate to advanced.*

Look at the three series side by side:

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!} + \dots, \qquad
\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots, \qquad
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots
$$

The exponential has every term, and the trigonometric functions share its terms between them, with signs that
alternate in pairs. The signs are exactly what powers of $i = \sqrt{-1}$ produce: $i^0 = 1$, $i^1 = i$, $i^2 = -1$,
$i^3 = -i$, $i^4 = 1$, and then the cycle repeats.

To use complex numbers in a series you need convergence for complex terms. Say $\sum z_n$ converges to $s$ if the
partial sums get close to $s$, where "close" uses the complex modulus $|z|$, the distance from 0 in the plane. Every
fact used above carries over: in particular, if $\sum |z_n|$ converges, so does $\sum z_n$ (apply the real result to
the real and imaginary parts). The series $\sum z^n/n!$ converges absolutely for every complex $z$, so we may
**define**

$$
e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!}\quad\text{for every complex } z .
$$

Now put $z = i\theta$ with $\theta$ real and sort the terms by the cycle of powers of $i$ (rearranging is allowed
because the series converges absolutely, [Chapter 12](12-Sequences-and-Series.md)):

$$
e^{i\theta} = \left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \dots\right) + i\left(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \dots\right) .
$$

**Euler's formula.** For every real $\theta$,

$$
e^{i\theta} = \cos\theta + i\sin\theta .
$$

Geometrically, $e^{i\theta}$ is the point at angle $\theta$ on the unit circle. At $\theta = \pi$ it gives
$e^{i\pi} = -1$, often written $e^{i\pi} + 1 = 0$: five basic constants in one line. Leonhard Euler published the
formula in his *Introductio in analysin infinitorum* (1748); Roger Cotes had found an equivalent statement in
logarithmic form around 1714.

The formula is useful, not just pretty. One more fact about the series is needed: $e^{z}e^{w} = e^{z+w}$ for all
complex $z, w$. *Proof:* multiply the two absolutely convergent series and collect the terms of total degree $n$
(the Cauchy product, allowed for absolutely convergent series):

$$
\sum_{k=0}^{n}\frac{z^k}{k!}\frac{w^{n-k}}{(n-k)!} = \frac{1}{n!}\sum_{k=0}^{n}\binom{n}{k}z^k w^{n-k} = \frac{(z+w)^n}{n!}
$$

by the binomial theorem. $\square$

**Example 15 (addition formulas for free).** $e^{i(a+b)} = e^{ia}e^{ib}$. Expand both sides with Euler's formula:

$$
\cos(a+b) + i\sin(a+b) = (\cos a + i\sin a)(\cos b + i\sin b) = (\cos a\cos b - \sin a\sin b) + i(\sin a\cos b + \cos a\sin b) .
$$

Comparing real and imaginary parts gives both addition formulas at once.

**Example 16 (de Moivre).** $(\cos\theta + i\sin\theta)^n = (e^{i\theta})^n = e^{in\theta} = \cos n\theta + i\sin n\theta$.
With $n = 3$, expanding the left side and taking the real part:
$\cos 3\theta = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta - 3\cos\theta$.

**Example 17 (cosine as an average).** Adding $e^{i\theta} = \cos\theta + i\sin\theta$ and
$e^{-i\theta} = \cos\theta - i\sin\theta$:

$$
\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i} .
$$

This is how the differential equations of [Chapter 14](14-Differential-Equations.md) turn oscillations into
exponentials, and how Fourier series ([Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md)) are usually
written. Compare the hyperbolic functions $\cosh x = (e^x + e^{-x})/2$ and $\sinh x = (e^x - e^{-x})/2$: the same
formulas without the $i$, which is why $\cosh$ and $\sinh$ have the series of $\cos$ and $\sin$ with every sign $+$.

## 13.6 A smooth function that is not its Taylor series

*Level: advanced.*

So far every function we tried equalled its Taylor series. Is that always so, as long as the function has
derivatives of every order? Lagrange, building calculus on series, assumed something close to it. Augustin-Louis
Cauchy showed in his 1823 lectures that it is false, with this example:

$$
f(x) = \begin{cases} e^{-1/x^2} & x \neq 0, \\ 0 & x = 0 . \end{cases}
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Graph of e to the minus one over x squared for x from minus 3 to 3. The curve is extremely flat near zero, touching the axis at the origin, then rises and levels off towards the dashed line y equals 1 on both sides.">
  <line x1="20" y1="170" x2="400" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="210" y1="185" x2="210" y2="20" stroke="currentColor" stroke-width="1"/>
  <line x1="20" y1="40" x2="400" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="200" y="44" text-anchor="end" font-size="12" fill="currentColor">1</text>
  <text x="396" y="186" text-anchor="end" font-size="12" fill="currentColor">x</text>
  <text x="390" y="160" text-anchor="end" font-size="12" fill="currentColor">3</text>
  <text x="30" y="160" text-anchor="start" font-size="12" fill="currentColor">−3</text>
  <polyline points="20.0,53.7 21.6,53.9 23.2,54.1 24.8,54.3 26.3,54.6 27.9,54.8 29.5,55.1 31.1,55.3 32.7,55.6 34.2,55.8 35.8,56.1 37.4,56.4 39.0,56.7 40.6,57.0 42.2,57.3 43.8,57.6 45.3,57.9 46.9,58.2 48.5,58.5 50.1,58.9 51.7,59.2 53.2,59.6 54.8,59.9 56.4,60.3 58.0,60.7 59.6,61.1 61.2,61.5 62.7,62.0 64.3,62.4 65.9,62.8 67.5,63.3 69.1,63.8 70.7,64.3 72.3,64.8 73.8,65.3 75.4,65.8 77.0,66.4 78.6,66.9 80.2,67.5 81.8,68.1 83.3,68.8 84.9,69.4 86.5,70.1 88.1,70.7 89.7,71.5 91.2,72.2 92.8,72.9 94.4,73.7 96.0,74.5 97.6,75.4 99.2,76.2 100.8,77.1 102.3,78.0 103.9,79.0 105.5,80.0 107.1,81.0 108.7,82.0 110.2,83.1 111.8,84.3 113.4,85.4 115.0,86.6 116.6,87.9 118.2,89.2 119.8,90.6 121.3,92.0 122.9,93.4 124.5,94.9 126.1,96.5 127.7,98.1 129.2,99.7 130.8,101.5 132.4,103.2 134.0,105.1 135.6,107.0 137.2,109.0 138.8,111.0 140.3,113.1 141.9,115.3 143.5,117.5 145.1,119.8 146.7,122.2 148.2,124.6 149.8,127.1 151.4,129.6 153.0,132.2 154.6,134.8 156.2,137.4 157.8,140.1 159.3,142.8 160.9,145.4 162.5,148.0 164.1,150.6 165.7,153.1 167.2,155.5 168.8,157.8 170.4,160.0 172.0,161.9 173.6,163.7 175.2,165.2 176.8,166.5 178.3,167.6 179.9,168.5 181.5,169.1 183.1,169.5 184.7,169.7 186.2,169.9 187.8,170.0 189.4,170.0 191.0,170.0 192.6,170.0 194.2,170.0 195.8,170.0 197.3,170.0 198.9,170.0 200.5,170.0 202.1,170.0 203.7,170.0 205.2,170.0 206.8,170.0 208.4,170.0 210.0,170.0 211.6,170.0 213.2,170.0 214.8,170.0 216.3,170.0 217.9,170.0 219.5,170.0 221.1,170.0 222.7,170.0 224.2,170.0 225.8,170.0 227.4,170.0 229.0,170.0 230.6,170.0 232.2,170.0 233.8,169.9 235.3,169.7 236.9,169.5 238.5,169.1 240.1,168.5 241.7,167.6 243.2,166.5 244.8,165.2 246.4,163.7 248.0,161.9 249.6,160.0 251.2,157.8 252.8,155.5 254.3,153.1 255.9,150.6 257.5,148.0 259.1,145.4 260.7,142.8 262.2,140.1 263.8,137.4 265.4,134.8 267.0,132.2 268.6,129.6 270.2,127.1 271.8,124.6 273.3,122.2 274.9,119.8 276.5,117.5 278.1,115.3 279.7,113.1 281.2,111.0 282.8,109.0 284.4,107.0 286.0,105.1 287.6,103.2 289.2,101.5 290.8,99.7 292.3,98.1 293.9,96.5 295.5,94.9 297.1,93.4 298.7,92.0 300.2,90.6 301.8,89.2 303.4,87.9 305.0,86.6 306.6,85.4 308.2,84.3 309.8,83.1 311.3,82.0 312.9,81.0 314.5,80.0 316.1,79.0 317.7,78.0 319.2,77.1 320.8,76.2 322.4,75.4 324.0,74.5 325.6,73.7 327.2,72.9 328.8,72.2 330.3,71.5 331.9,70.7 333.5,70.1 335.1,69.4 336.7,68.8 338.2,68.1 339.8,67.5 341.4,66.9 343.0,66.4 344.6,65.8 346.2,65.3 347.8,64.8 349.3,64.3 350.9,63.8 352.5,63.3 354.1,62.8 355.7,62.4 357.2,62.0 358.8,61.5 360.4,61.1 362.0,60.7 363.6,60.3 365.2,59.9 366.8,59.6 368.3,59.2 369.9,58.9 371.5,58.5 373.1,58.2 374.7,57.9 376.2,57.6 377.8,57.3 379.4,57.0 381.0,56.7 382.6,56.4 384.2,56.1 385.8,55.8 387.3,55.6 388.9,55.3 390.5,55.1 392.1,54.8 393.7,54.6 395.2,54.3 396.8,54.1 398.4,53.9 400.0,53.7" fill="none" stroke="#eea66f" stroke-width="3" stroke-linejoin="round"/>
  <text x="300" y="100" text-anchor="middle" font-size="13" fill="currentColor">y = e^(−1/x²)</text>
  <text x="210" y="198" text-anchor="middle" font-size="11" fill="currentColor">flat to every order at 0</text>
</svg>
</div>

The graph is flat near 0 to an astonishing degree: $f(0.1) = e^{-100} \approx 3.7 \times 10^{-44}$.

**Claim.** $f$ has derivatives of every order at every point, and $f^{(n)}(0) = 0$ for all $n$.

*Proof.* Away from 0, $f$ is a composition of smooth functions, so it has all derivatives there. By induction on
$n$, for $x \ne 0$,

$$
f^{(n)}(x) = p_n\!\left(\frac1x\right)e^{-1/x^2}
$$

for some polynomial $p_n$. For $n = 0$, $p_0 = 1$. If it holds for $n$, differentiate with the chain and product
rules, writing $u = 1/x$ so that $du/dx = -u^2$:

$$
f^{(n+1)}(x) = \left(-u^2 p_n'(u) + 2u^3 p_n(u)\right)e^{-1/x^2},
$$

since $\frac{d}{dx}e^{-1/x^2} = 2x^{-3}e^{-1/x^2} = 2u^3 e^{-1/x^2}$. That is a polynomial in $u$ times
$e^{-1/x^2}$, as claimed. (For example $f''(x) = (4x^{-6} - 6x^{-4})e^{-1/x^2}$.)

Next, a limit: for every whole number $m$, $\dfrac{e^{-1/x^2}}{x^m} \to 0$ as $x \to 0$. Put $y = 1/x^2$; for
$x \ne 0$, $|1/x^m| = y^{m/2}$, so the expression has size $y^{m/2}e^{-y}$, and as $x \to 0$, $y \to \infty$.
An exponential beats any power: from the series, $e^y > y^k/k!$ for $y > 0$ and any $k$, so with $k > m/2$,
$y^{m/2}e^{-y} < k!\, y^{m/2 - k} \to 0$.

Now show $f^{(n)}(0) = 0$ by induction. For $n = 0$ it is the definition. If $f^{(n)}(0) = 0$, then

$$
f^{(n+1)}(0) = \lim_{x \to 0}\frac{f^{(n)}(x) - 0}{x} = \lim_{x\to 0}\frac{p_n(1/x)\,e^{-1/x^2}}{x} = 0,
$$

since $p_n(1/x)/x$ is a finite sum of terms $c/x^m$, each of which, times $e^{-1/x^2}$, tends to 0. $\square$

So the Taylor series of $f$ at 0 is $0 + 0x + 0x^2 + \dots$, which converges everywhere, to the zero function. But
$f(x) > 0$ for every $x \ne 0$. **The Taylor series converges, and to the wrong function.** All the information in
the derivatives at 0 does not determine $f$ even a tiny distance away.

**Words.** A function with derivatives of every order is **smooth**, or $C^\infty$. A function that equals a
convergent power series near every point of its domain is **real analytic**, or $C^\omega$. Every analytic function
is smooth (13.2), and Cauchy's example shows that not every smooth function is analytic.

Why should anyone care? Three reasons.

- **Bump functions.** Using $f$, the function $g(x) = f(x)$ for $x > 0$ and $g(x) = 0$ for $x \le 0$ is smooth, and
  so is $g(x)\,g(1-x)$, which is positive on $(0,1)$ and zero elsewhere. Smooth functions that switch on and off
  like this are impossible for analytic functions: an analytic function that is zero on an interval is zero on
  its whole interval of convergence (all its derivatives vanish there, so all its coefficients vanish). Bump
  functions are the basic tool for gluing local constructions together in analysis and geometry (the "partitions of
  unity" of [MAT257Y1 Unit 10](../../uoft/MAT257Y1/unit10.md)).
- **No free lunch from derivatives.** Émile Borel proved in 1895 that *every* sequence of numbers is the sequence of
  derivatives at 0 of some smooth function. So a Taylor series can even diverge everywhere except at its centre,
  for a perfectly smooth function. We state this without proof.
- **The complex contrast.** For functions of a complex variable, having one derivative everywhere in a disc already
  forces the function to equal its power series in that disc. This rigidity is the heart of complex analysis
  ([Chapter 22](22-Where-Analysis-Goes.md)). Cauchy's example shows why: as a function of complex $z$,
  $e^{-1/z^2}$ at $z = iy$ is $e^{1/y^2}$, which blows up as $y \to 0$, so in the complex plane it is not even
  continuous at 0.

This also explains a puzzle about radius of convergence. The series of $1/(1+x^2) = 1 - x^2 + x^4 - \dots$ has
radius 1, though the function is perfectly smooth on the whole real line. The reason is in the complex plane:
$1/(1+z^2)$ blows up at $z = \pm i$, which are at distance 1 from 0. In general the radius of convergence of a
Taylor series is the distance from the centre to the nearest complex point where the function misbehaves; that is a
theorem of complex analysis.

## Check yourself

??? question "1. Find the radius and the exact set of convergence of $\sum_{n \ge 1} \frac{(x+1)^n}{3^n \sqrt n}$."

    Ratio: $\frac{3^n\sqrt n}{3^{n+1}\sqrt{n+1}} \to \frac13$, so $R = 3$, centre $-1$, and the open interval is
    $(-4, 2)$. At $x = 2$ the terms are $1/\sqrt n$, a $p$-series with $p = \tfrac12$, which diverges. At $x = -4$
    they are $(-1)^n/\sqrt n$, which converges by the alternating series test. The set is $[-4, 2)$.

??? question "2. Find the radius of convergence of $\sum_{n \ge 1} \frac{n^n}{n!}x^n$."

    Ratio: $\frac{(n+1)^{n+1}}{(n+1)!}\cdot\frac{n!}{n^n} = \left(\frac{n+1}{n}\right)^n = \left(1 + \frac1n\right)^n \to e$.
    So $R = 1/e$.

??? question "3. Use known series to find the Maclaurin series of $x^2 e^{-x}$ and give its 10th derivative at 0."

    $x^2 e^{-x} = x^2\sum \frac{(-x)^n}{n!} = \sum_{n \ge 0}\frac{(-1)^n}{n!}x^{n+2}$. The coefficient of $x^{10}$
    comes from $n = 8$: $\frac{1}{8!}$. Since $c_{10} = f^{(10)}(0)/10!$, $f^{(10)}(0) = \frac{10!}{8!} = 90$.

??? question "4. Find the sum of $\sum_{n \ge 1} \frac{n^2}{2^n}$."

    From $\sum n x^n = x/(1-x)^2$, differentiate and multiply by $x$: $\sum n^2 x^n = x\frac{d}{dx}\frac{x}{(1-x)^2} = \frac{x(1+x)}{(1-x)^3}$.
    At $x = \tfrac12$: $\frac{(1/2)(3/2)}{1/8} = 6$. Check: the partial sums $0.5, 1.5, 2.625, 3.625, \dots$ approach 6.

??? question "5. Write the Taylor polynomial of degree 3 of $\ln x$ at $a = 1$, and bound its error at $x = 1.1$."

    Derivatives: $1/x, -1/x^2, 2/x^3, -6/x^4$; at 1 they are $1, -1, 2$. So
    $P_3 = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3}$, and $P_3(1.1) = 0.1 - 0.005 + 0.000333 = 0.0953333$.
    Remainder: $|f^{(4)}(c)|/4! \cdot 0.1^4 = \frac{6}{c^4 \cdot 24}\cdot 10^{-4} \le 2.5 \times 10^{-5}$ for $c \ge 1$.
    Check: $\ln 1.1 = 0.0953102$, error $2.3 \times 10^{-5}$.

??? question "6. How many terms of the series for $\sin x$ guarantee $\sin 1$ to within $10^{-6}$?"

    Using $P_{2m+1}$ and the remainder with $n = 2m+2$ (the next coefficient is 0), the error is at most
    $1/(2m+3)!$. Need $(2m+3)! > 10^6$: $9! = 362880$ is too small, $11! = 39916800$ works, so $2m + 3 = 11$,
    $m = 4$: the polynomial up to $x^9$, five nonzero terms: $1 - \frac16 + \frac1{120} - \frac1{5040} + \frac1{362880} = 0.8414710$.
    Check: $\sin 1 = 0.8414710$.

??? question "7. Use series to find $\lim_{x\to0}\frac{e^x - 1 - x - x^2/2}{x^3}$ and $\lim_{x \to 0}\frac{1-\cos x}{x^2}$."

    $e^x - 1 - x - x^2/2 = x^3/6 + x^4/24 + \dots$, so the first limit is $\tfrac16$.
    $1 - \cos x = x^2/2 - x^4/24 + \dots$, so the second is $\tfrac12$.

??? question "8. Verify Machin-type formula $\frac{\pi}{4} = \arctan\frac12 + \arctan\frac13$ (Euler's) and say why it converges more slowly than Machin's."

    $\tan(A+B) = \frac{1/2 + 1/3}{1 - 1/6} = \frac{5/6}{5/6} = 1$, and $0 < A + B < \pi$, so $A + B = \pi/4$.
    The terms of $\arctan\frac12$ shrink by a factor of about 4 per step, against about 25 for $\arctan\frac15$,
    so each term gains about 0.6 digits instead of about 1.4.

??? question "9. Use Euler's formula to compute $(1+i)^8$ and to express $\sin^2\theta$ without squares."

    $1 + i = \sqrt2\,e^{i\pi/4}$, so $(1+i)^8 = 16\,e^{2\pi i} = 16$.
    $\sin^2\theta = \left(\frac{e^{i\theta} - e^{-i\theta}}{2i}\right)^2 = \frac{e^{2i\theta} - 2 + e^{-2i\theta}}{-4} = \frac{1 - \cos 2\theta}{2}$.

??? question "10. Show that the Taylor series of $\frac{1}{1-x}$ at $a = 3$ has radius 2, and explain why with the picture of 13.6."

    $\frac{1}{1-x} = \frac{1}{-2 - (x-3)} = -\frac12\cdot\frac{1}{1 + (x-3)/2} = -\frac12\sum_{n\ge0}\left(-\frac{x-3}{2}\right)^n$,
    which converges when $|x-3| < 2$. The function blows up at $x = 1$, at distance 2 from the centre 3, and the
    radius is exactly the distance to that bad point.

??? question "11. Let $g(x) = e^{-1/x^2}$ for $x > 0$ and $g(x) = 0$ for $x \le 0$. Is $g$ smooth? Is it analytic at 0?"

    Smooth: for $x > 0$ its derivatives are those of $e^{-1/x^2}$; for $x < 0$ they are 0; and at 0 every one-sided
    derivative is 0 by the argument of 13.6, so all derivatives exist and are continuous. It is not analytic at 0:
    its Taylor series there is 0, but $g(x) > 0$ for every $x > 0$, so no power series equals $g$ on any interval
    around 0.

## What you learned

- A power series converges absolutely inside an interval $|x-a| < R$ and diverges outside it; the ends must be
  checked separately, and every combination happens.
- $R$ comes from the ratio test or, always, from $1/R = \limsup |c_n|^{1/n}$.
- Inside the interval a power series can be differentiated and integrated term by term (proof in Chapter 19), so
  its coefficients are $f^{(k)}(a)/k!$ and the series is unique.
- Taylor's theorem: $f(x) = P_n(x) + f^{(n+1)}(c)(x-a)^{n+1}/(n+1)!$, the mean value theorem with more terms; the
  remainder bound tells you how many terms you need.
- $e^x$, $\sin x$ and $\cos x$ equal their series everywhere; $\ln(1+x)$ and $\arctan x$ on $(-1, 1]$ and
  $[-1, 1]$; Machin's formula turns the arctangent series into a fast way to compute $\pi$.
- Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ follows from the series and gives trigonometric
  identities for free.
- Smooth is not analytic: $e^{-1/x^2}$ has all derivatives 0 at 0 but is not the zero function.

**Next:** [Chapter 14](14-Differential-Equations.md), equations whose unknown is a function, and how to solve them
exactly, approximately and in principle.

## Further reading

- M. Spivak, *Calculus*, 4th edition (2008), chapters 20, 23 and 24: Taylor's theorem and power series, with full
  proofs.
- T. M. Apostol, *Calculus*, Volume 1, 2nd edition (1967), chapters 7, 10 and 11.
- E. Hairer and G. Wanner, *Analysis by Its History* (1996): the series of Newton, Leibniz, Euler and Taylor in their
  historical order.
- G. H. Hardy, *A Course of Pure Mathematics* (1908; 10th edition 1952), chapters 8 and 9.
- J. M. Borwein and P. B. Borwein, *Pi and the AGM* (1987), for how $\pi$ was computed from Machin to the present.
- On this site: [MAT137 Unit 14: Power Series & Taylor Series](../../uoft/MAT137/unit14.md),
  [MAT159H1 Unit 4: Taylor's Theorem](../../uoft/MAT159H1/unit04.md),
  [MAT159H1 Unit 7: Power Series](../../uoft/MAT159H1/unit07.md); the gentler
  [convergence tests lesson](../../topics/infinity/level-8/02-convergence-tests.md);
  [Algebra, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md) and
  [Chapter 9](../algebra/09-Complex-Numbers.md) for series and complex numbers.
