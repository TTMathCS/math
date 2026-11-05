# 10. Techniques of integration

*The fundamental theorem turns every definite integral into a search for an antiderivative. Differentiation is a
machine: feed in any formula, turn the handle, and the derivative comes out. Integration is not. Some antiderivatives
are found by recognising a pattern, some by clever rewriting, some take a page, and some, like that of
$e^{-x^2}$, cannot be written with the usual functions at all, however clever you are. This chapter gives you the
standard tools (substitution, integration by parts, trigonometric methods, partial fractions), proves that each one
works, shows where the impossible cases come from, and ends with the numerical rules that compute any integral to
any accuracy you like.*

!!! abstract "In this chapter"
    **You will learn:**

    - substitution, for indefinite and definite integrals, as the chain rule read backwards
    - integration by parts, as the product rule read backwards, with reduction formulas and Wallis's product
    - integrals of powers of sines, cosines, tangents and secants, and the three trigonometric substitutions
    - partial fractions: why every rational function has an elementary antiderivative, and how to find it
    - which integrals have no elementary antiderivative, Liouville's theorem, and a full proof for $e^{-x^2}$
    - the trapezoid, midpoint and Simpson rules, with their error bounds

    **You need:** [Chapter 9](09-The-Fundamental-Theorem.md) (antiderivatives and the fundamental theorem),
    [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md) (the chain rule and the derivatives of the special
    functions) and, for 10.4, polynomial division and factoring from
    [Algebra, Chapter 4](../algebra/04-Polynomials-and-Factoring.md). A short gentle preview is the Topics lesson
    [Areas under curves and the fundamental theorem](../../topics/change/level-8/06-area-fundamental-theorem.md).

    **Levels:** 10.1 to 10.4 are intermediate; 10.5 is advanced (the proof for $e^{-x^2}$ is complete, the general
    theorem is stated); 10.6 is intermediate, with error proofs sketched.

## 10.1 Substitution

Which function has derivative $2x\cos(x^2)$? If you remember the chain rule, you may spot the shape: $\cos$ of
something, times the derivative of that something. Indeed $\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x$. So

$$
\int 2x\cos(x^2)\,dx = \sin(x^2) + C.
$$

Substitution is this observation made into a method.

**Theorem 10.1 (substitution).** Let $u = g(x)$ be differentiable with $g'$ continuous on an interval, and let $f$
be continuous on the range of $g$, with antiderivative $F$. Then

$$
\int f\bigl(g(x)\bigr)\,g'(x)\,dx = F\bigl(g(x)\bigr) + C,
$$

and for definite integrals

$$
\int_a^b f\bigl(g(x)\bigr)\,g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du.
$$

*Proof.* By the chain rule, $\frac{d}{dx}F(g(x)) = F'(g(x))\,g'(x) = f(g(x))\,g'(x)$, which is the first formula.
For the second, the integrand $f(g(x))g'(x)$ is continuous, so FTC 2 applies with antiderivative $F\circ g$:
the left side is $F(g(b)) - F(g(a))$. The right side, by FTC 2 with antiderivative $F$, is also
$F(g(b)) - F(g(a))$. $\blacksquare$

**Leibniz's notation does the bookkeeping.** Write $u = g(x)$ and $du = g'(x)\,dx$. Then
$f(g(x))\,g'(x)\,dx$ becomes $f(u)\,du$, letter for letter. The symbols $du$ and $dx$ are not numbers here, but the
theorem says that treating them as if they were gives the right answer. That is one of the reasons Leibniz's
notation won ([Chapter 9](09-The-Fundamental-Theorem.md), Section 9.6).

**The recipe.**

1. Choose $u$ = some inner expression whose derivative (up to a constant factor) also appears.
2. Compute $du = u'(x)\,dx$ and rewrite the whole integrand in terms of $u$; no $x$ may remain.
3. Integrate in $u$.
4. Indefinite integral: put $u = g(x)$ back. Definite integral: change the limits to $g(a)$ and $g(b)$ instead,
   and never go back to $x$.

**Example 1.** $\displaystyle\int \frac{x}{1+x^2}\,dx$. Let $u = 1 + x^2$, $du = 2x\,dx$, so $x\,dx = \frac12du$:

$$
\int \frac{x}{1+x^2}\,dx = \frac12\int\frac{du}{u} = \frac12\ln|u| + C = \frac12\ln(1+x^2) + C.
$$

*Check:* $\frac{d}{dx}\frac12\ln(1+x^2) = \frac12\cdot\frac{2x}{1+x^2}$. ✓

**Example 2.** $\displaystyle\int\tan x\,dx = \int\frac{\sin x}{\cos x}\,dx$. Let $u = \cos x$, $du = -\sin x\,dx$:

$$
\int\tan x\,dx = -\int\frac{du}{u} = -\ln|\cos x| + C = \ln|\sec x| + C.
$$

**Example 3.** $\displaystyle\int \frac{dx}{x\ln x}$ for $x > 1$. Let $u = \ln x$, $du = dx/x$: the integral is
$\int du/u = \ln|\ln x| + C$. (This antiderivative grows without bound, but incredibly slowly. In
[Chapter 12](12-Sequences-and-Series.md) it shows that $\sum 1/(n\ln n)$ diverges.)

**Example 4 (definite, changing limits).** $\displaystyle\int_0^1 x\sqrt{1-x^2}\,dx$. Let $u = 1 - x^2$,
$du = -2x\,dx$. When $x = 0$, $u = 1$; when $x = 1$, $u = 0$:

$$
\int_0^1 x\sqrt{1-x^2}\,dx = -\frac12\int_1^0 \sqrt u\,du = \frac12\int_0^1 u^{1/2}\,du = \frac12\cdot\frac23 = \frac13.
$$

**Example 5.** $\displaystyle\int_0^1 x e^{x^2}\,dx = \frac12\int_0^1 e^u\,du = \frac{e - 1}{2}$ with $u = x^2$.

**Example 6 (substitution that is not "inner function").** $\displaystyle\int_{-1}^0 x(x+1)^{10}\,dx$. Expanding the
tenth power would be painful. Let $u = x + 1$, so $x = u - 1$ and $dx = du$; the limits become 0 and 1:

$$
\int_0^1 (u - 1)u^{10}\,du = \int_0^1 (u^{11} - u^{10})\,du = \frac1{12} - \frac1{11} = -\frac{1}{132}.
$$

**Example 7 (symmetry).** If $f$ is odd ($f(-x) = -f(x)$), then $\int_{-a}^{a} f = 0$. *Proof:* substitute $u = -x$
in $\int_{-a}^0 f(x)\,dx$ to get $\int_a^0 f(-u)(-du) = \int_0^a f(-u)\,du = -\int_0^a f(u)\,du$, which cancels
$\int_0^a f$. So, without any work, $\int_{-2}^{2} x^3\cos(x^2)e^{x^4}\,dx = 0$. Similarly, if $f$ is even then
$\int_{-a}^a f = 2\int_0^a f$.

## 10.2 Integration by parts

Substitution undoes the chain rule. What undoes the product rule? Start from $(uv)' = u'v + uv'$, integrate, and
rearrange.

**Theorem 10.2 (integration by parts).** If $u$ and $v$ have continuous derivatives on $[a, b]$, then

$$
\int u\,v'\,dx = uv - \int u'\,v\,dx, \qquad \int_a^b u\,v'\,dx = \bigl[uv\bigr]_a^b - \int_a^b u'\,v\,dx.
$$

*Proof.* $uv$ is an antiderivative of $u'v + uv'$, which is continuous. By FTC 2,
$\int_a^b (u'v + uv') = [uv]_a^b$. Split the integral by linearity and move one term across. $\blacksquare$

In Leibniz's shorthand, with $du = u'\,dx$ and $dv = v'\,dx$: $\displaystyle\int u\,dv = uv - \int v\,du$.

The method trades one integral for another. It helps when $u$ gets simpler on differentiating and $dv$ does not get
worse on integrating. A rough guide for choosing $u$, in order of preference, is "LIATE": **L**ogarithms, **I**nverse
trigonometric functions, **A**lgebraic (powers and polynomials), **T**rigonometric, **E**xponential. It is a habit,
not a theorem.

**Example 8.** $\displaystyle\int xe^x\,dx$. Take $u = x$, $dv = e^x\,dx$, so $du = dx$, $v = e^x$:

$$
\int xe^x\,dx = xe^x - \int e^x\,dx = (x - 1)e^x + C.
$$

*Check:* $\frac{d}{dx}(x-1)e^x = e^x + (x - 1)e^x = xe^x$. ✓

**Example 9 (the hidden $dv = dx$).** $\displaystyle\int\ln x\,dx$. Take $u = \ln x$, $dv = dx$, so $du = dx/x$, $v = x$:

$$
\int \ln x\,dx = x\ln x - \int x\cdot\frac{dx}{x} = x\ln x - x + C.
$$

So $\int_1^e\ln x\,dx = (e - e) - (0 - 1) = 1$. The same trick gives
$\int\arctan x\,dx = x\arctan x - \frac12\ln(1+x^2) + C$ (use Example 1 for the leftover integral).

**Example 10 (twice).** $\displaystyle\int x^2\sin x\,dx$. With $u = x^2$, $dv = \sin x\,dx$:
$\int x^2\sin x\,dx = -x^2\cos x + \int 2x\cos x\,dx$. Again with $u = 2x$, $dv = \cos x\,dx$:
$\int 2x\cos x\,dx = 2x\sin x - \int 2\sin x\,dx = 2x\sin x + 2\cos x$. Altogether

$$
\int x^2\sin x\,dx = -x^2\cos x + 2x\sin x + 2\cos x + C.
$$

Each round lowers the power of $x$ by one; a polynomial of degree $n$ needs $n$ rounds. A **tabular** layout keeps
the signs straight: differentiate $x^2 \to 2x \to 2 \to 0$, integrate $\sin x \to -\cos x \to -\sin x \to \cos x$,
multiply diagonally with alternating signs $+, -, +$.

**Example 11 (the loop).** $\displaystyle I = \int e^x\sin x\,dx$. Parts with $u = \sin x$, $dv = e^x dx$:
$I = e^x\sin x - \int e^x\cos x\,dx$. Parts again on the new integral with $u = \cos x$:
$\int e^x\cos x\,dx = e^x\cos x + \int e^x\sin x\,dx = e^x\cos x + I$. So

$$
I = e^x\sin x - e^x\cos x - I, \qquad\text{hence}\qquad I = \frac{e^x(\sin x - \cos x)}{2} + C.
$$

The integral came back to itself, and we solved for it like an unknown in an equation.

### Reduction formulas and Wallis's product

Parts can lower an exponent step by step. Let $I_n = \int_0^{\pi/2}\sin^n x\,dx$. For $n \ge 2$ write
$\sin^n x = \sin^{n-1}x\cdot\sin x$ and take $u = \sin^{n-1}x$, $dv = \sin x\,dx$, so
$du = (n-1)\sin^{n-2}x\cos x\,dx$ and $v = -\cos x$. The boundary term $[-\sin^{n-1}x\cos x]_0^{\pi/2}$ is 0, so

$$
I_n = (n-1)\int_0^{\pi/2}\sin^{n-2}x\cos^2x\,dx = (n-1)\int_0^{\pi/2}\sin^{n-2}x\,(1 - \sin^2 x)\,dx = (n-1)(I_{n-2} - I_n).
$$

Solving, $I_n = \dfrac{n-1}{n}\,I_{n-2}$. With $I_0 = \pi/2$ and $I_1 = 1$:

$$
I_2 = \frac{\pi}{4},\quad I_3 = \frac23,\quad I_4 = \frac{3\pi}{16},\quad I_5 = \frac{8}{15},\quad I_6 = \frac{5\pi}{32}.
$$

In general, even powers carry a factor $\pi/2$ and odd ones do not:

$$
I_{2m} = \frac{1\cdot3\cdots(2m-1)}{2\cdot4\cdots(2m)}\cdot\frac{\pi}{2}, \qquad I_{2m+1} = \frac{2\cdot4\cdots(2m)}{3\cdot5\cdots(2m+1)}.
$$

*Wallis's product.* On $[0, \pi/2]$ we have $0 \le \sin x \le 1$, so $\sin^{2m+1} \le \sin^{2m} \le \sin^{2m-1}$, and
integrating, $I_{2m+1} \le I_{2m} \le I_{2m-1}$. Divide by $I_{2m+1}$ and use $I_{2m-1}/I_{2m+1} = (2m+1)/(2m)$:

$$
1 \le \frac{I_{2m}}{I_{2m+1}} \le \frac{2m+1}{2m} \to 1.
$$

So $I_{2m}/I_{2m+1} \to 1$ by the squeeze theorem. Writing out the ratio and solving for $\pi/2$ gives

$$
\frac{\pi}{2} = \lim_{m\to\infty} \frac{2\cdot2}{1\cdot3}\cdot\frac{4\cdot4}{3\cdot5}\cdot\frac{6\cdot6}{5\cdot7}\cdots\frac{(2m)(2m)}{(2m-1)(2m+1)}.
$$

John Wallis found this product in his *Arithmetica Infinitorum* (1656) by a bold interpolation, long before
integration by parts existed as a rule. The proof here is the modern one. The product converges slowly: with
$m = 1000$ factors it gives $\pi \approx 3.1408$.

## 10.3 Trigonometric integrals and substitutions

### Powers of sine and cosine

To integrate $\sin^m x\cos^n x$, the identity $\sin^2 + \cos^2 = 1$ and the derivatives $\sin' = \cos$,
$\cos' = -\sin$ do everything.

- **An odd power** (say of $\sin$): save one $\sin x$ for $du$, turn the rest into cosines, and substitute
  $u = \cos x$.
- **Both powers even:** lower the powers with the half-angle identities

$$
\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}.
$$

**Example 12 (odd power).** $\displaystyle\int\sin^3x\cos^2x\,dx = \int (1 - \cos^2 x)\cos^2 x\,\sin x\,dx$. With
$u = \cos x$, $du = -\sin x\,dx$:

$$
-\int(u^2 - u^4)\,du = -\frac{u^3}{3} + \frac{u^5}{5} + C = \frac{\cos^5 x}{5} - \frac{\cos^3x}{3} + C.
$$

**Example 13 (even powers).** $\displaystyle\int\cos^2x\,dx = \int\frac{1 + \cos2x}{2}\,dx = \frac x2 + \frac{\sin2x}{4} + C.$
So $\int_0^\pi\sin^2x\,dx = \int_0^\pi\cos^2x\,dx = \frac\pi2$, the value used in [Chapter 9](09-The-Fundamental-Theorem.md),
Example 20. (A quick way to see it: the two integrals are equal by symmetry, and they add up to $\int_0^\pi 1 = \pi$.)

**Example 14.** $\sin^2x\cos^2x = \frac14\sin^2 2x = \frac18(1 - \cos 4x)$, so
$\int\sin^2x\cos^2x\,dx = \frac x8 - \frac{\sin 4x}{32} + C$.

### Tangents and secants

The pair $\tan' = \sec^2$, $\sec' = \sec\tan$, with $1 + \tan^2 = \sec^2$, plays the same role. Two results worth
knowing:

$$
\int\tan^2 x\,dx = \int(\sec^2x - 1)\,dx = \tan x - x + C,
$$

$$
\int\sec x\,dx = \ln|\sec x + \tan x| + C.
$$

The second is a trick: multiply top and bottom by $\sec x + \tan x$, and the numerator
$\sec^2x + \sec x\tan x$ becomes the derivative of the denominator. *Check:* differentiate
$\ln|\sec x + \tan x|$ to get $\frac{\sec x\tan x + \sec^2 x}{\sec x + \tan x} = \sec x$. ✓ This integral has a
history: it is what Edward Wright needed in 1599 to compute the spacing of latitude lines on Mercator's map, which
sailors used long before anyone knew it was a logarithm.

**Example 15.** $\int_0^{\pi/4}\sec^4x\,dx = \int_0^{\pi/4}(1 + \tan^2x)\sec^2x\,dx$. With $u = \tan x$:
$\int_0^1 (1 + u^2)\,du = 1 + \frac13 = \frac43$.

### Trigonometric substitution

Square roots of quadratics turn into trigonometric functions under the right substitution, because of the Pythagorean
identities. Here $a > 0$.

| expression | substitute | identity used | $\theta$ range |
|---|---|---|---|
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ | $1 - \sin^2 = \cos^2$ | $-\frac\pi2 \le \theta \le \frac\pi2$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ | $1 + \tan^2 = \sec^2$ | $-\frac\pi2 < \theta < \frac\pi2$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ | $\sec^2 - 1 = \tan^2$ | $0 \le \theta < \frac\pi2$ (for $x \ge a$) |

The ranges are chosen so that the substitution is one-to-one and the square root comes out without a sign problem:
for example, with $x = a\sin\theta$ and $-\frac\pi2 \le \theta \le \frac\pi2$, $\cos\theta \ge 0$, so
$\sqrt{a^2 - a^2\sin^2\theta} = a\cos\theta$ exactly.

This is substitution run "backwards": instead of spotting $u = g(x)$ in the integrand, we put $x = g(\theta)$ and
$dx = g'(\theta)\,d\theta$. Theorem 10.1 still justifies it, read from right to left, as long as $g$ is one-to-one on
the range used.

**Example 16 (the area of a circle).** The quarter circle of radius $a$ has area $\int_0^a\sqrt{a^2 - x^2}\,dx$. With
$x = a\sin\theta$, $dx = a\cos\theta\,d\theta$, the limits $x = 0, a$ become $\theta = 0, \frac\pi2$:

$$
\int_0^{\pi/2} a\cos\theta\cdot a\cos\theta\,d\theta = a^2\int_0^{\pi/2}\cos^2\theta\,d\theta = a^2\cdot\frac{\pi}{4}.
$$

Four quarters make $\pi a^2$. This is not circular reasoning, if you are careful: here $\pi$ is *defined* as half the
length of the unit circle, or through the trigonometric functions, and the integral *proves* the area formula. For
$a = 2$: $\int_0^2\sqrt{4 - x^2}\,dx = \pi$.

**Example 17.** $\displaystyle\int_0^1\frac{dx}{(1+x^2)^2}$. With $x = \tan\theta$, $dx = \sec^2\theta\,d\theta$ and
$1 + x^2 = \sec^2\theta$; the limits become $0$ and $\pi/4$:

$$
\int_0^{\pi/4}\frac{\sec^2\theta}{\sec^4\theta}\,d\theta = \int_0^{\pi/4}\cos^2\theta\,d\theta = \Bigl[\frac\theta2 + \frac{\sin2\theta}{4}\Bigr]_0^{\pi/4} = \frac\pi8 + \frac14.
$$

**Example 18.** $\displaystyle\int_1^2\frac{\sqrt{x^2-1}}{x}\,dx$. With $x = \sec\theta$, $dx = \sec\theta\tan\theta\,d\theta$,
$\sqrt{x^2 - 1} = \tan\theta$, and limits $0$ to $\pi/3$ (since $\sec\frac\pi3 = 2$):

$$
\int_0^{\pi/3}\frac{\tan\theta}{\sec\theta}\sec\theta\tan\theta\,d\theta = \int_0^{\pi/3}\tan^2\theta\,d\theta = \bigl[\tan\theta - \theta\bigr]_0^{\pi/3} = \sqrt3 - \frac\pi3 \approx 0.685.
$$

### The half-angle substitution

Any rational expression in $\sin x$ and $\cos x$ becomes a rational function of $t$ under $t = \tan(x/2)$, because

$$
\sin x = \frac{2t}{1+t^2}, \qquad \cos x = \frac{1-t^2}{1+t^2}, \qquad dx = \frac{2\,dt}{1+t^2}.
$$

(These follow from the double-angle formulas with $\cos^2(x/2) = 1/(1+t^2)$.) It is often called the **Weierstrass
substitution**, though it is older. It always works, and it is rarely the fastest.

**Example 19.** $\displaystyle\int\frac{dx}{2 + \cos x}$. With the formulas, $2 + \cos x = \frac{3 + t^2}{1 + t^2}$, so

$$
\int\frac{dx}{2+\cos x} = \int\frac{2\,dt}{3 + t^2} = \frac{2}{\sqrt3}\arctan\frac{t}{\sqrt3} + C = \frac{2}{\sqrt3}\arctan\Bigl(\frac{\tan(x/2)}{\sqrt3}\Bigr) + C.
$$

*A trap.* This formula is valid on $(-\pi, \pi)$ but jumps at $x = \pi$, where $\tan(x/2)$ blows up. If you
blindly evaluate $\int_0^{2\pi}$ with it you get $0 - 0 = 0$, which is absurd for a positive integrand. Correctly,
by symmetry, $\int_0^{2\pi} = 2\int_0^{\pi} = 2\cdot\frac{2}{\sqrt3}\cdot\frac\pi2 = \frac{2\pi}{\sqrt3} \approx 3.628$.
The lesson of [Chapter 9](09-The-Fundamental-Theorem.md), Example 14, again: FTC 2 needs an antiderivative on the
**whole** interval.

## 10.4 Partial fractions

A **rational function** is a quotient $p(x)/q(x)$ of two polynomials. Rational functions are the one large class
where integration is completely solved: every one has an antiderivative made of rational functions, logarithms and
arctangents. The method is to break $p/q$ into simple pieces we already know how to integrate.

**Step 0: make it proper.** If $\deg p \ge \deg q$, divide (long division,
[Algebra, Chapter 4](../algebra/04-Polynomials-and-Factoring.md)): $p = sq + r$ with $\deg r < \deg q$, so
$p/q = s + r/q$. The polynomial $s$ integrates at once. For example

$$
\frac{x^3 + x}{x - 1} = x^2 + x + 2 + \frac{2}{x - 1}, \qquad \int\frac{x^3+x}{x-1}\,dx = \frac{x^3}{3} + \frac{x^2}{2} + 2x + 2\ln|x - 1| + C.
$$

**Step 1: factor the denominator.** Over the real numbers, every polynomial factors into linear factors $(x - r)$ and
irreducible quadratics $(x^2 + bx + c)$ with $b^2 < 4c$. This is a consequence of the fundamental theorem of algebra:
complex roots come in conjugate pairs, and each pair multiplies to a real quadratic
([Algebra, Chapter 12](../algebra/12-The-Fundamental-Theorem-of-Algebra.md)). In practice, finding the factors may be
the hardest step.

**Step 2: the decomposition.**

**Theorem 10.3 (partial fractions).** Let $r/q$ be proper, with $q$ factored as above. Then $r/q$ is a sum of terms:

- for each factor $(x - a)^k$ in $q$: $\dfrac{A_1}{x - a} + \dfrac{A_2}{(x-a)^2} + \cdots + \dfrac{A_k}{(x-a)^k}$;
- for each factor $(x^2 + bx + c)^k$ in $q$: $\dfrac{B_1x + C_1}{x^2 + bx + c} + \cdots + \dfrac{B_kx + C_k}{(x^2 + bx + c)^k}$,

with real constants $A_i$, $B_i$, $C_i$, and these constants are unique.

*Proof sketch.* Two ingredients. (i) *Splitting coprime factors.* If $q = q_1q_2$ where $q_1$ and $q_2$ have no common
factor, Euclid's algorithm for polynomials gives polynomials $s_1, s_2$ with $s_1q_1 + s_2q_2 = 1$ (Bézout's identity,
the same as for whole numbers). Multiply by $r/q$: $\dfrac{r}{q} = \dfrac{rs_2}{q_1} + \dfrac{rs_1}{q_2}$. Make each
piece proper by division (the polynomial parts must cancel, because the left side is proper). Repeating, $r/q$
becomes a sum of proper fractions whose denominators are single prime powers $(x-a)^k$ or $(x^2 + bx + c)^k$.
(ii) *Expanding a prime power.* For $r/(x-a)^k$ with $\deg r < k$, write $r$ in powers of $(x - a)$ (Taylor expansion
of a polynomial): $r = c_0 + c_1(x-a) + \cdots + c_{k-1}(x-a)^{k-1}$, and divide term by term. For
$r/(x^2+bx+c)^k$, divide $r$ repeatedly by $x^2 + bx + c$ and keep the linear remainders. Uniqueness follows by
counting: the number of unknown constants equals $\deg q$, and the map from constants to numerators is a linear map
between spaces of the same dimension that is onto by (i) and (ii), hence one-to-one. $\blacksquare$

**Step 3: integrate each piece.** Only four kinds of integral are needed:

$$
\int\frac{dx}{x - a} = \ln|x - a|, \qquad \int\frac{dx}{(x-a)^k} = \frac{-1}{(k-1)(x-a)^{k-1}}\ (k \ge 2),
$$

and, after completing the square in the quadratic, $\int\frac{u\,du}{(u^2 + m^2)^k}$ (substitute $w = u^2 + m^2$) and
$\int\frac{du}{(u^2 + m^2)^k}$ (an arctangent for $k = 1$, a reduction formula from parts, or $u = m\tan\theta$, for
$k \ge 2$, as in Example 17). This proves:

**Corollary.** Every rational function has an antiderivative that is a rational function plus a sum of constant
multiples of logarithms of polynomials and arctangents of polynomials.

### Worked examples

**Example 20 (distinct linear factors).** $\displaystyle\frac{x + 5}{x^2 + x - 2} = \frac{x + 5}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}.$

Clear denominators: $x + 5 = A(x + 2) + B(x - 1)$. Put $x = 1$: $6 = 3A$, so $A = 2$. Put $x = -2$: $3 = -3B$, so
$B = -1$. (Putting in the roots is the quickest way; it is sometimes called the **cover-up method**, after Oliver
Heaviside, who used it a great deal.) Hence

$$
\int\frac{x+5}{x^2 + x - 2}\,dx = 2\ln|x - 1| - \ln|x + 2| + C.
$$

*Check:* $\frac{2}{x-1} - \frac{1}{x+2} = \frac{2(x+2) - (x-1)}{(x-1)(x+2)} = \frac{x + 5}{x^2 + x - 2}$. ✓

**Example 21.** $\displaystyle\frac{1}{x^2 - 1} = \frac{1/2}{x - 1} - \frac{1/2}{x + 1}$, so
$\displaystyle\int\frac{dx}{x^2 - 1} = \frac12\ln\Bigl|\frac{x - 1}{x + 1}\Bigr| + C$.

**Example 22 (a repeated factor).** $\displaystyle\frac{1}{x(x+1)^2} = \frac{A}{x} + \frac{B}{x+1} + \frac{C}{(x+1)^2}.$
Then $1 = A(x+1)^2 + Bx(x+1) + Cx$. Put $x = 0$: $A = 1$. Put $x = -1$: $1 = -C$, so $C = -1$. Compare the $x^2$
coefficients: $0 = A + B$, so $B = -1$. Hence

$$
\int\frac{dx}{x(x+1)^2} = \ln|x| - \ln|x+1| + \frac{1}{x + 1} + C.
$$

**Example 23 (an irreducible quadratic).** $\displaystyle\frac{2x^2 + 3}{x(x^2+1)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 1}.$
Then $2x^2 + 3 = A(x^2 + 1) + (Bx + C)x$. At $x = 0$: $A = 3$. Comparing $x^2$: $2 = A + B$, so $B = -1$; comparing
$x$: $0 = C$. So

$$
\int\frac{2x^2+3}{x(x^2+1)}\,dx = 3\ln|x| - \frac12\ln(x^2 + 1) + C.
$$

**Example 24 (completing the square).** $\displaystyle\int\frac{dx}{x^2 + 2x + 5} = \int\frac{dx}{(x+1)^2 + 4} = \frac12\arctan\frac{x + 1}{2} + C,$
using $\int\frac{du}{u^2 + m^2} = \frac1m\arctan\frac um$ with $u = x + 1$, $m = 2$.

**Example 25 (all the pieces at once).** Since $x^3 + 1 = (x + 1)(x^2 - x + 1)$, one finds

$$
\frac{1}{x^3+1} = \frac{1/3}{x+1} - \frac13\cdot\frac{x - 2}{x^2 - x + 1},
$$

and with $x^2 - x + 1 = (x - \frac12)^2 + \frac34$ the result is
$\int_0^1\frac{dx}{1 + x^3} = \frac{\ln 2}{3} + \frac{\pi}{3\sqrt3} \approx 0.8356$. A logarithm and $\pi$ in one
answer: that is what rational integrands produce in general.

### Try it in Python

`sympy` (not in the standard library; say `pip install sympy`) does partial fractions and integrals symbolically, and
is a good way to check hand work:

```python
from sympy import symbols, apart, integrate
x = symbols('x')
print(apart(1 / (x * (x + 1)**2)))        # 1/x - 1/(x + 1) - 1/(x + 1)**2
print(integrate(1 / (1 + x**3), (x, 0, 1)))  # log(2)/3 + sqrt(3)*pi/9
```

($\frac{\sqrt3\pi}{9}$ is the same number as $\frac{\pi}{3\sqrt3}$.)

## 10.5 When there is no elementary antiderivative

*Level: advanced.*

Try to integrate $e^{-x^2}$. Substitution has nothing to grab: there is no $x$ in front to make $du$. Parts goes in
circles. Partial fractions does not apply. After an afternoon you start to suspect that the problem is not your skill.
It is not. **There is no formula**, in a precise sense.

**Definition.** The **elementary functions** are those built from $x$ and constants by finitely many additions,
subtractions, multiplications, divisions, compositions, and the taking of $\exp$, $\log$ and roots of polynomial
equations (algebraic functions). Since, over the complex numbers, $\sin$, $\cos$ and their inverses are made from
$\exp$ and $\log$ (for example $\cos x = (e^{ix} + e^{-ix})/2$), they are elementary too.

Derivatives of elementary functions are always elementary (the rules of Chapters 4 and 5 never leave the class).
Antiderivatives are another story.

**Theorem 10.4 (Liouville, in the form for $fe^g$).** Let $f$ and $g$ be rational functions, with $g$ not constant
and $f$ not identically zero. Then $\int f(x)e^{g(x)}\,dx$ is an elementary function if and only if there is a
rational function $R$ with

$$
R' + g'R = f,
$$

and in that case $\int fe^g\,dx = R\,e^g + C$.

The "if" part is easy: $(Re^g)' = R'e^g + Rg'e^g = fe^g$. The "only if" part is the deep half. Joseph Liouville proved
results of this kind in the 1830s; his general theorem says that if an elementary antiderivative exists, it must have
a very restricted shape (the integrand's own functions plus a sum of constant multiples of logarithms), and for $fe^g$
that shape forces the antiderivative to be $Re^g$. The proof uses differential algebra and is several pages long; a
readable modern account is in Rosenlicht's 1972 paper and in Conrad's notes listed below. We take the theorem as given
and use it.

**Corollary 10.5.** $e^{-x^2}$ has no elementary antiderivative.

*Proof.* Here $f = 1$ and $g = -x^2$, so we must show that **no** rational function $R$ satisfies
$R' - 2xR = 1$. Suppose one did.

*Step 1: $R$ has no poles.* Suppose $R$ had a pole of order $k \ge 1$ at some complex number $a$, meaning
$R = \frac{h(x)}{(x - a)^k}$ with $h$ rational, finite and nonzero at $a$. Then $R'$ has a pole of order exactly
$k + 1$ at $a$ (differentiating $(x-a)^{-k}$ gives $-k(x - a)^{-k-1}$, which dominates). The term $2xR$ has a pole of
order at most $k$ at $a$. So $R' - 2xR$ has a pole of order $k + 1$ at $a$, and cannot equal the constant 1. So $R$ is
a polynomial.

*Step 2: no polynomial works.* If $R$ is a nonzero polynomial of degree $d$, then $2xR$ has degree $d + 1$ and $R'$ has
degree less than $d$, so $R' - 2xR$ has degree $d + 1 \ge 1$, not the constant 1. If $R = 0$, the left side is
$0 \ne 1$. Contradiction. $\blacksquare$

So the "error function"

$$
\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,dt
$$

is a new function, not a disguised old one. It exists (FTC 1 guarantees that), it is perfectly computable, and it
appears everywhere in probability ([Chapter 11](11-Applications-of-Integrals.md), Section 11.5) and in heat flow. We
simply give it a name, just as $\ln x$ is a name for $\int_1^x dt/t$.

**Corollary 10.6.** $\dfrac{e^x}{x}$ has no elementary antiderivative, and neither does $\dfrac{1}{\ln x}$.

*Proof.* For $e^x/x$: $f = 1/x$, $g = x$, so we need rational $R$ with $R' + R = 1/x$. If $R$ had a pole of order
$k \ge 1$ at $a$, then $R' + R$ would have a pole of order $k + 1 \ge 2$ there; but $1/x$ has only a simple pole. So $R$
is a polynomial, and then $R' + R$ is a polynomial, which is never $1/x$. For $1/\ln x$, substitute $x = e^u$:
$\int\frac{dx}{\ln x} = \int\frac{e^u}{u}\,du$, and an elementary antiderivative of one would give one of the other.
$\blacksquare$

The function $\operatorname{li}(x) = \int_2^x\frac{dt}{\ln t}$ (with a lower limit chosen to avoid $t = 1$) is the best
simple estimate of the number of primes up to $x$; see the
[Number Theory book, Chapter 13](../number-theory/13-How-Primes-Are-Spread.md).

**More impossible integrals.** By similar arguments (the complex form of Liouville's theorem for $\sin x/x$):

- $\displaystyle\int\frac{\sin x}{x}\,dx$ (the sine integral, used in signal processing and in the Gibbs phenomenon of
  [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md));
- $\displaystyle\int\sin(x^2)\,dx$ (the Fresnel integral of [Chapter 9](09-The-Fundamental-Theorem.md), Example 3);
- $\displaystyle\int\sqrt{1 - k^2\sin^2\theta}\,d\theta$ for $0 < k < 1$, an **elliptic integral**, which is what you
  get when you try to find the length of an ellipse ([Chapter 11](11-Applications-of-Integrals.md), Section 11.3).

For integrands of the form $x^m(a + bx^n)^p$ with rational exponents there is a complete answer, due to Chebyshev
(1853): the antiderivative is elementary exactly when one of $p$, $\frac{m+1}{n}$, $\frac{m+1}{n} + p$ is an integer.
For $\sqrt{1 + x^3}$ ($m = 0$, $n = 3$, $p = \frac12$) the three numbers are $\frac12$, $\frac13$, $\frac56$, none an
integer, so $\int\sqrt{1+x^3}\,dx$ is not elementary.

**Can a computer decide?** Yes, for a large class. In 1969 Robert Risch described an algorithm that, given an
elementary function built from $\exp$, $\log$ and rational operations, either finds an elementary antiderivative or
proves that none exists. Computer algebra systems implement parts of it; the full algorithm, especially with algebraic
functions, is very complicated, and no system implements all of it.

*Why we care.* The impossibility is not a defeat. It tells us when to stop searching and do something else: name the
function and study it (erf, li, Fresnel and elliptic integrals all became important functions), expand it in a series
([Chapter 13](13-Power-Series-and-Taylor.md)), or compute it numerically, which is the next section.

## 10.6 Numerical integration

Even when an antiderivative exists, it may be too messy to use; and data from an experiment has no formula at all. A
numerical rule approximates $\int_a^b f$ from a finite number of values of $f$. Split $[a, b]$ into $n$ equal pieces of
width $h = (b - a)/n$, with points $x_k = a + kh$.

**Midpoint rule.** Use the height at the middle of each piece:

$$
M_n = h\sum_{k=1}^{n} f\Bigl(\frac{x_{k-1} + x_k}{2}\Bigr).
$$

**Trapezoid rule.** Join neighbouring points of the graph by straight lines and add the areas of the trapezoids:

$$
T_n = h\Bigl(\tfrac12 f(x_0) + f(x_1) + \cdots + f(x_{n-1}) + \tfrac12 f(x_n)\Bigr).
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 210" role="img" aria-label="The curve y equals e to the minus x squared on the interval from 0 to 1, with four trapezoids under it whose slanted tops are chords of the curve; the chords lie just below the curve because the curve bends downward there">
  <polygon points="40.0,180.0 40.0,30.0 100.0,39.1 100.0,180.0" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <polygon points="100.0,180.0 100.0,39.1 160.0,63.2 160.0,180.0" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <polygon points="160.0,180.0 160.0,63.2 220.0,94.5 220.0,180.0" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <polygon points="220.0,180.0 220.0,94.5 280.0,124.8 280.0,180.0" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <path d="M 28.0 30.4 L 30.4 30.2 L 32.8 30.1 L 35.2 30.1 L 37.6 30.0 L 40.0 30.0 L 42.4 30.0 L 44.8 30.1 L 47.2 30.1 L 49.6 30.2 L 52.0 30.4 L 54.4 30.5 L 56.8 30.7 L 59.2 31.0 L 61.6 31.2 L 64.0 31.5 L 66.4 31.8 L 68.8 32.1 L 71.2 32.5 L 73.6 32.9 L 76.0 33.3 L 78.4 33.8 L 80.8 34.3 L 83.2 34.8 L 85.6 35.3 L 88.0 35.9 L 90.4 36.5 L 92.8 37.1 L 95.2 37.7 L 97.6 38.4 L 100.0 39.1 L 102.4 39.8 L 104.8 40.5 L 107.2 41.3 L 109.6 42.1 L 112.0 42.9 L 114.4 43.7 L 116.8 44.6 L 119.2 45.5 L 121.6 46.4 L 124.0 47.3 L 126.4 48.2 L 128.8 49.2 L 131.2 50.2 L 133.6 51.2 L 136.0 52.2 L 138.4 53.2 L 140.8 54.3 L 143.2 55.3 L 145.6 56.4 L 148.0 57.5 L 150.4 58.6 L 152.8 59.7 L 155.2 60.9 L 157.6 62.0 L 160.0 63.2 L 162.4 64.4 L 164.8 65.5 L 167.2 66.7 L 169.6 67.9 L 172.0 69.2 L 174.4 70.4 L 176.8 71.6 L 179.2 72.8 L 181.6 74.1 L 184.0 75.3 L 186.4 76.6 L 188.8 77.9 L 191.2 79.1 L 193.6 80.4 L 196.0 81.7 L 198.4 83.0 L 200.8 84.3 L 203.2 85.5 L 205.6 86.8 L 208.0 88.1 L 210.4 89.4 L 212.8 90.7 L 215.2 92.0 L 217.6 93.2 L 220.0 94.5 L 222.4 95.8 L 224.8 97.1 L 227.2 98.4 L 229.6 99.6 L 232.0 100.9 L 234.4 102.2 L 236.8 103.4 L 239.2 104.7 L 241.6 105.9 L 244.0 107.2 L 246.4 108.4 L 248.8 109.6 L 251.2 110.9 L 253.6 112.1 L 256.0 113.3 L 258.4 114.5 L 260.8 115.7 L 263.2 116.8 L 265.6 118.0 L 268.0 119.2 L 270.4 120.3 L 272.8 121.5 L 275.2 122.6 L 277.6 123.7 L 280.0 124.8 L 282.4 125.9 L 284.8 127.0 L 287.2 128.1 L 289.6 129.1 L 292.0 130.2 L 294.4 131.2 L 296.8 132.3 L 299.2 133.3 L 301.6 134.3 L 304.0 135.3 L 306.4 136.2 L 308.8 137.2 L 311.2 138.2 L 313.6 139.1 L 316.0 140.0" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="20" y1="180" x2="310" y2="180" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40" y1="190" x2="40" y2="15" stroke="currentColor" stroke-width="1.2"/>
  <text x="40.0" y="198" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="100.0" y="198" font-size="11" text-anchor="middle" fill="currentColor">1/4</text>
  <text x="160.0" y="198" font-size="11" text-anchor="middle" fill="currentColor">1/2</text>
  <text x="220.0" y="198" font-size="11" text-anchor="middle" fill="currentColor">3/4</text>
  <text x="280.0" y="198" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="34" y="34" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <text x="188.8" y="65.9" font-size="13" text-anchor="start" fill="currentColor">y = e^(−x²)</text>
</svg>
</div>

**Simpson's rule** ($n$ even). On each *pair* of pieces, replace $f$ by the parabola through the three points and
integrate that exactly. The result:

$$
S_n = \frac h3\Bigl(f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \cdots + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_n)\Bigr).
$$

Why the weights $1, 4, 1$? For a single pair of pieces on $[-h, h]$, a parabola $p(x) = \alpha + \beta x + \gamma x^2$
has $\int_{-h}^h p = 2h\alpha + \frac23 h^3\gamma$, and one checks that this equals
$\frac h3\bigl(p(-h) + 4p(0) + p(h)\bigr) = \frac h3(6\alpha + 2\gamma h^2)$. ✓ Adding neighbouring pairs makes the
inner endpoints count twice, hence the pattern $1, 4, 2, 4, \dots, 2, 4, 1$. A pleasant bonus: the rule is exact for
cubics too, since $x^3$ is odd and both sides give 0 on $[-h, h]$. That extra degree of exactness is why Simpson is so
much better than its derivation promises. (Simpson's rule is named after Thomas Simpson, who published it in 1743;
the formula itself was known earlier, to Cavalieri and James Gregory among others.)

**Theorem 10.7 (error bounds).** Suppose $|f''| \le K_2$ and $|f^{(4)}| \le K_4$ on $[a, b]$. Then

$$
\Bigl|\int_a^b f - T_n\Bigr| \le \frac{K_2(b-a)^3}{12n^2}, \qquad \Bigl|\int_a^b f - M_n\Bigr| \le \frac{K_2(b-a)^3}{24n^2}, \qquad \Bigl|\int_a^b f - S_n\Bigr| \le \frac{K_4(b-a)^5}{180n^4}.
$$

*Idea of the proof.* On one piece of width $h$, the chord differs from $f$ by an amount controlled by $f''$, through
the error formula for linear interpolation (a consequence of Rolle's theorem): the error on one piece is
$-\frac{h^3}{12}f''(\xi)$ for some $\xi$ in it. Summing $n$ such errors, with $nh = b - a$, gives the trapezoid bound.
The midpoint and Simpson bounds come from the same idea with Taylor's theorem
([Chapter 13](13-Power-Series-and-Taylor.md)); full proofs are in Burden and Faires or in Davis and Rabinowitz (below).
The important part is the **powers of $n$**: doubling $n$ cuts the trapezoid error by about 4 and the Simpson error by
about 16.

**Example 26 ($e^{-x^2}$ on $[0, 1]$).** The true value, from the error function, is
$\int_0^1 e^{-x^2}dx = \frac{\sqrt\pi}{2}\operatorname{erf}(1) = 0.746824132\ldots$ With $n = 4$:

| rule | value | actual error |
|---|---|---|
| trapezoid $T_4$ | 0.742984 | $-0.00384$ |
| midpoint $M_4$ | 0.748747 | $+0.00192$ |
| Simpson $S_4$ | 0.746855 | $+0.000031$ |

The midpoint error is about half the trapezoid error and of opposite sign. That is no accident: for smooth $f$ the
leading error terms are $-\frac{(b-a)h^2}{12}\overline{f''}$ and $+\frac{(b-a)h^2}{24}\overline{f''}$, and indeed
$S_{2n} = \frac{2M_n + T_n}{3}$ exactly, which cancels them.

The bounds: here $f'' = (4x^2 - 2)e^{-x^2}$ and $f^{(4)} = (16x^4 - 48x^2 + 12)e^{-x^2}$, whose largest absolute values
on $[0,1]$ are $K_2 = 2$ and $K_4 = 12$ (both at $x = 0$). The trapezoid bound for $n = 4$ is
$\frac{2}{12\cdot16} \approx 0.0104$, and Simpson's is $\frac{12}{180\cdot256} \approx 0.00026$. Both are honest
(larger than the actual errors) and somewhat pessimistic.

How many points for six-decimal accuracy, error below $10^{-6}$? Trapezoid: $\frac{2}{12n^2} < 10^{-6}$ needs
$n \ge 409$. Simpson: $\frac{12}{180n^4} < 10^{-6}$ needs $n \ge 18$ (even). *Check:* $S_8$ already has actual error
about $2\times10^{-6}$.

**Example 27 ($\ln 2$).** $\ln 2 = \int_1^2\frac{dx}{x} = 0.693147\ldots$ Simpson with $n = 4$ gives $0.693254$ (error
$1.1\times10^{-4}$), and with $n = 10$ gives $0.6931502$ (error $3.1\times10^{-6}$).

### Try it in Python

```python
import math

def simpson(f, a, b, n):          # n must be even
    h = (b - a) / n
    s = f(a) + f(b)
    s += 4 * sum(f(a + k * h) for k in range(1, n, 2))
    s += 2 * sum(f(a + k * h) for k in range(2, n, 2))
    return s * h / 3

f = lambda x: math.exp(-x * x)
print(simpson(f, 0, 1, 4))                     # 0.7468553797909873
print(math.sqrt(math.pi) / 2 * math.erf(1))    # 0.746824132812427
```

Modern software uses **adaptive** rules (more points where $f$ wiggles) and **Gaussian quadrature** (cleverly placed
points that make $n$ points exact for polynomials of degree $2n - 1$), but the ideas are the ones above.

<figure class="play" data-play="sums" data-mode="rules"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Numerical integration on the same strips: left rectangles, the trapezoid rule and Simpson's rule, against the exact area.</figcaption></figure>

## Check yourself

??? question "1. Compute $\int_0^1 x^2e^{x^3}\,dx$."

    Let $u = x^3$, $du = 3x^2\,dx$; limits 0 to 1. The integral is $\frac13\int_0^1 e^u\,du = \frac{e - 1}{3}$.

??? question "2. Compute $\int_0^{\pi/2} x\cos x\,dx$."

    Parts with $u = x$, $dv = \cos x\,dx$: $[x\sin x]_0^{\pi/2} - \int_0^{\pi/2}\sin x\,dx = \frac\pi2 - 1 \approx 0.571$.

??? question "3. Compute $\int_0^{\pi/2}\sin^5 x\,dx$ and $\int_0^{\pi/2}\cos^4 x\,dx$."

    By the reduction formula, $I_5 = \frac45\cdot\frac23\cdot 1 = \frac{8}{15}$. For $\cos^4$, substitute
    $x = \frac\pi2 - y$ to get the same integral as $\sin^4$: $I_4 = \frac34\cdot\frac12\cdot\frac\pi2 = \frac{3\pi}{16}$.

??? question "4. Compute $\int_4^5\frac{dx}{x^2 - 5x + 6}$."

    $x^2 - 5x + 6 = (x-2)(x-3)$ and $\frac{1}{(x-2)(x-3)} = \frac{1}{x - 3} - \frac{1}{x - 2}$. So the integral is
    $\bigl[\ln|x-3| - \ln|x-2|\bigr]_4^5 = (\ln 2 - \ln 3) - (0 - \ln 2) = 2\ln2 - \ln3 = \ln\frac43 \approx 0.288$.

??? question "5. Compute $\int_0^3\frac{x^2}{\sqrt{9 - x^2}}\,dx$."

    This is an improper integral at $x = 3$ (the integrand blows up), but the substitution settles it. With
    $x = 3\sin\theta$: $dx = 3\cos\theta\,d\theta$, $\sqrt{9 - x^2} = 3\cos\theta$, limits 0 to $\frac\pi2$:
    $\int_0^{\pi/2} 9\sin^2\theta\,d\theta = 9\cdot\frac\pi4 = \frac{9\pi}{4}$.

??? question "6. Compute $\int_0^1 e^{\sqrt x}\,dx$."

    Substitute $x = t^2$, $dx = 2t\,dt$: $\int_0^1 2te^t\,dt = 2[(t-1)e^t]_0^1 = 2(0 - (-1)) = 2$.

??? question "7. Find $\int_2^3\frac{dx}{x^2(x-1)}$."

    $\frac{1}{x^2(x-1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x - 1}$ with $1 = Ax(x-1) + B(x - 1) + Cx^2$. At $x=0$:
    $B = -1$. At $x = 1$: $C = 1$. The $x^2$ coefficient: $A + C = 0$, $A = -1$. So the antiderivative is
    $-\ln x + \frac1x + \ln(x - 1)$, and the integral is
    $\bigl(-\ln3 + \frac13 + \ln2\bigr) - \bigl(-\ln2 + \frac12 + 0\bigr) = 2\ln2 - \ln3 - \frac16 \approx 0.121$.

??? question "8. Show that $\int\sec^3x\,dx = \frac12(\sec x\tan x + \ln|\sec x + \tan x|) + C$."

    Parts with $u = \sec x$, $dv = \sec^2 x\,dx$: $J = \sec x\tan x - \int\sec x\tan^2x\,dx = \sec x\tan x - \int\sec x(\sec^2 x - 1)\,dx = \sec x\tan x - J + \int\sec x\,dx$. Solve:
    $2J = \sec x\tan x + \ln|\sec x + \tan x|$.

??? question "9. Someone writes $\int_0^{\pi}\cos^2 x\,dx$ with $u = \sin x$, $du = \cos x\,dx$, getting $\int_0^0\sqrt{1-u^2}\,du = 0$. Find the error."

    Writing $\cos x = \sqrt{1 - \sin^2 x}$ is wrong on $(\frac\pi2, \pi)$, where $\cos x < 0$. Also, $u = \sin x$ is not
    one-to-one on $[0, \pi]$, so the rewriting in terms of $u$ is not legitimate (Theorem 10.1 needs the integrand to
    be a function of $u$ times $du$, and here $\cos x = \pm\sqrt{1 - u^2}$ depending on where you are). The true value
    is $\frac\pi2$.

??? question "10. Use Theorem 10.4 to decide whether $\int xe^{-x^2}\,dx$ and $\int x^2e^{-x^2}\,dx$ are elementary."

    For $xe^{-x^2}$: we need $R' - 2xR = x$; $R = -\frac12$ works, and indeed $\int xe^{-x^2}dx = -\frac12e^{-x^2} + C$.
    For $x^2e^{-x^2}$: by the pole argument $R$ must be a polynomial; degrees force $R$ to have degree 1, $R = \alpha x + \beta$.
    Then $R' - 2xR = \alpha - 2\alpha x^2 - 2\beta x$. Matching $x^2$: $\alpha = -\frac12$; matching $x$: $\beta = 0$;
    matching constants: $\alpha = 0$. Contradiction, so it is not elementary. (Parts shows why:
    $\int x^2e^{-x^2} = -\frac x2 e^{-x^2} + \frac12\int e^{-x^2}$, which contains the impossible integral.)

??? question "11. How large must $n$ be for the trapezoid rule to give $\ln 2 = \int_1^2 dx/x$ with error below $10^{-4}$, by Theorem 10.7?"

    $f'' = 2/x^3$, so $K_2 = 2$ on $[1, 2]$. We need $\frac{2\cdot1}{12n^2} < 10^{-4}$, i.e. $n^2 > 1667$, so $n \ge 41$.

??? question "12. Prove that Simpson's rule is exact for every cubic polynomial on any interval $[a, b]$ with $n = 2$."

    Shift so the interval is $[-h, h]$ (a substitution $x = u + m$ does not change the degree). A cubic is
    $p = \alpha + \beta x + \gamma x^2 + \delta x^3$. Both $\int_{-h}^h$ and $\frac h3(p(-h) + 4p(0) + p(h))$ are linear
    in $p$. For the odd terms $x$ and $x^3$, both give 0. For $1$: $2h$ versus $\frac h3\cdot 6 = 2h$. For $x^2$:
    $\frac23h^3$ versus $\frac h3(h^2 + h^2) = \frac23h^3$. All agree, so the rule is exact. (For $x^4$ it fails:
    $\frac25h^5$ versus $\frac23h^5$.)

## What you learned

- Substitution is the chain rule backwards; in a definite integral, change the limits and never return to $x$.
- Integration by parts is the product rule backwards; it lowers powers, can loop back to the original integral, and
  gives reduction formulas such as $I_n = \frac{n-1}{n}I_{n-2}$ and Wallis's product.
- Powers of sine and cosine yield to odd-power substitution or half-angle identities; square roots of quadratics yield
  to $x = a\sin\theta$, $a\tan\theta$, $a\sec\theta$.
- Every rational function integrates in terms of rational functions, logarithms and arctangents, by partial fractions.
- Some elementary functions, such as $e^{-x^2}$, $e^x/x$, $1/\ln x$ and $\sqrt{1+x^3}$, have no elementary
  antiderivative; Liouville's theorem proves it.
- The trapezoid and midpoint rules have error of order $1/n^2$; Simpson's rule has error of order $1/n^4$ and is exact
  for cubics.

**Next:** [Chapter 11](11-Applications-of-Integrals.md), what integrals measure: areas, volumes, lengths, work,
probability, and integrals over infinite ranges.

## Further reading

- M. Spivak, *Calculus*, 4th edition, 2008, Chapter 19 ("Integration in elementary terms").
- G. B. Thomas, M. D. Weir and J. Hass, *Thomas' Calculus*, any recent edition, the chapter on techniques of integration (many more exercises).
- J. F. Ritt, *Integration in Finite Terms: Liouville's Theory of Elementary Methods*, 1948.
- M. Rosenlicht, "Integration in finite terms", *American Mathematical Monthly* 79, 1972.
- R. H. Risch, "The problem of integration in finite terms", *Transactions of the American Mathematical Society* 139, 1969.
- B. Conrad, "Impossibility theorems for elementary integration", expository notes.
- P. J. Davis and P. Rabinowitz, *Methods of Numerical Integration*, 2nd edition, 1984.
- R. L. Burden and J. D. Faires, *Numerical Analysis*, any recent edition, the chapter on numerical integration (error formulas with proofs).
- On this site: the U of T guides [MAT137 Unit 9: Integration Methods](../../uoft/MAT137/unit09.md) and
  [MAT159H1 Unit 1: FTC, Transcendentals and Integration Techniques](../../uoft/MAT159H1/unit01.md); the
  [Algebra book, Chapter 4](../algebra/04-Polynomials-and-Factoring.md) for polynomial division; and the
  [Calculus book's contents](index.md).
