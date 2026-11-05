# 5. The chain rule and special functions

*Chapter 4 gave us the derivative and rules for sums, products and quotients, so every polynomial and every
rational function can now be differentiated. But most functions that describe the world are built another way: one
function is fed into another. The height of a wave is $\sin$ of something, a cooling cup follows $e$ to the power of
something, air pressure on a mountain falls like an exponential of height. This chapter answers two questions. How do
you differentiate a function of a function? And what are the derivatives of the special functions (sine, cosine,
exponentials, logarithms and their inverses) that no finite combination of powers can build? You will prove the chain
rule carefully (the obvious proof has a hole), prove the derivatives of the trigonometric functions from two limits,
find the one base $e$ for which $e^x$ is its own derivative, differentiate inverse functions, and finish with the trick
of logarithmic differentiation.*

!!! abstract "In this chapter"
    **You will learn:**

    - the chain rule, why the quick "cancel the $du$" proof fails, and a careful proof that works
    - proofs that $\sin' = \cos$ and $\cos' = -\sin$, and why calculus insists on radians
    - why the derivative of $a^x$ is a constant times $a^x$, and how this picks out the number $e$
    - the derivative of an inverse function, with $\ln x$, $\arcsin x$ and $\arctan x$ as examples
    - the power rule $\frac{d}{dx} x^r = r x^{r-1}$ for every real exponent $r$, as promised in Chapter 4
    - implicit differentiation, for curves that are not graphs of a single formula
    - logarithmic differentiation, for products, quotients and powers like $x^x$

    **You need:** [Chapter 2](02-Limits.md) (limits, especially $\lim_{x \to 0} \frac{\sin x}{x} = 1$ from 2.4),
    [Chapter 3](03-Continuity.md) (continuity of compositions and inverses, 3.4) and
    [Chapter 4](04-The-Derivative.md) (the definition of the derivative and the sum, product and quotient rules).
    From the Algebra book: [functions and inverses](../algebra/06-Functions.md) and
    [exponents and logarithms](../algebra/07-Exponents-and-Logarithms.md). Gentler versions on the Topics shelf:
    [Product, quotient and chain rules](../../topics/change/level-8/01-product-quotient-chain.md) and
    [Derivatives of exp, log and trig](../../topics/change/level-8/02-exp-log-trig.md).

    **Levels:** 5.1 and 5.2 are intermediate (the careful chain rule proof is marked advanced); 5.3 to 5.5 are
    intermediate, with the inverse function theorem in 5.4 at the advanced end.

## 5.1 The chain rule

Here is a question the rules of Chapter 4 can answer only with a lot of work: what is the derivative of

$$
h(x) = (3x^2 + 1)^5 ?
$$

You could expand the fifth power into a polynomial of degree 10 and differentiate term by term. It works, but it is
slow, and it does not work at all for $\sqrt{1 + x^2}$ or $\sin(x^2)$, which are not polynomials. What all three have in
common is that they are **compositions**: there is an inside function and an outside function. For $h$, the inside is
$u = g(x) = 3x^2 + 1$ and the outside is $f(u) = u^5$, and $h(x) = f(g(x))$, written $h = f \circ g$ ("$f$ after $g$").

**Rates multiply.** Think of gears. If gear $U$ turns 3 times for every turn of gear $X$, and gear $Y$ turns 2 times
for every turn of gear $U$, then $Y$ turns $2 \times 3 = 6$ times for every turn of $X$. A derivative is a rate of turning,
so we expect: if $u$ changes $g'(x)$ times as fast as $x$, and $y$ changes $f'(u)$ times as fast as $u$, then $y$ changes
$f'(u) \cdot g'(x)$ times as fast as $x$.

!!! note "The chain rule"
    If $g$ is differentiable at $a$ and $f$ is differentiable at $g(a)$, then $f \circ g$ is differentiable at $a$, and

    $$
    (f \circ g)'(a) = f'(g(a)) \cdot g'(a) .
    $$

In words: the derivative of the outside, evaluated at the inside, times the derivative of the inside. In Leibniz's
notation, with $y = f(u)$ and $u = g(x)$,

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} ,
$$

which looks like cancelling fractions. It is not cancelling ($dy/du$ is not a fraction but a limit), but the notation
was designed to make the true rule look obvious, and that is one reason Leibniz's notation won.

**Example 1.** $h(x) = (3x^2 + 1)^5$. Outside $f(u) = u^5$, $f'(u) = 5u^4$. Inside $g(x) = 3x^2 + 1$, $g'(x) = 6x$. So

$$
h'(x) = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4 .
$$

Check at $x = 0$: $h'(0) = 0$, and indeed $h$ has a minimum at $x = 0$ (it is the smallest value of $3x^2 + 1$, raised to
the fifth power), so the tangent there is flat.

**Example 2.** $k(x) = \sqrt{1 + x^2} = (1 + x^2)^{1/2}$. We proved the power rule for $u^{1/2}$ in Chapter 4
($\frac{d}{du}\sqrt{u} = \frac{1}{2\sqrt{u}}$). So

$$
k'(x) = \frac{1}{2\sqrt{1 + x^2}} \cdot 2x = \frac{x}{\sqrt{1 + x^2}} .
$$

Check: for large $x$, $\sqrt{1 + x^2} \approx x$, a line of slope 1, and the formula gives $x / \sqrt{1 + x^2} \to 1$. Good.

**Example 3: a chain of three.** $m(x) = \sqrt{1 + (2x - 1)^3}$. Apply the rule twice, peeling from the outside in:

$$
m'(x) = \frac{1}{2\sqrt{1 + (2x-1)^3}} \cdot 3(2x - 1)^2 \cdot 2 = \frac{3(2x-1)^2}{\sqrt{1 + (2x - 1)^3}} .
$$

The rule for a chain of any length is the same: multiply the derivatives of all the links, each evaluated at what is
fed into it.

**Example 4: a chain in a word problem.** A square plate is heated and its side grows at 0.01 cm per second. How fast is
its area growing when the side is 20 cm? Area $A = s^2$, so $dA/ds = 2s = 40$ square cm per cm. And $ds/dt = 0.01$ cm per
second. So $dA/dt = 40 \times 0.01 = 0.4$ square cm per second. (Chapter 7 does many problems like this under the name
"related rates".)

### Why the quick proof fails

*Level: advanced.* The quick proof writes, with $u = g(x)$ and $b = g(a)$,

$$
\frac{f(g(x)) - f(g(a))}{x - a} = \frac{f(u) - f(b)}{u - b} \cdot \frac{g(x) - g(a)}{x - a} ,
$$

and lets $x \to a$: the first factor tends to $f'(b)$, the second to $g'(a)$. The flaw is the division by $u - b$. If
$g(x) = g(a)$ for some $x$ close to $a$, that factor is $0/0$. This really happens. Take $g(x) = x^2 \sin(1/x)$ with $g(0) = 0$,
whose derivative at 0 exists (it is 0: $|g(x)/x| = |x \sin(1/x)| \le |x| \to 0$). Every interval around 0 contains the points
$x = 1/(n\pi)$ where $g(x) = 0 = g(0)$. The quick proof divides by zero infinitely often near the point it cares about.

The repair, due in this form to Constantin Carathéodory, rewrites differentiability so that nothing is ever divided.

!!! note "Lemma (differentiability without division)"
    $f$ is differentiable at $a$ if and only if there is a function $\varphi$, defined where $f$ is and **continuous at
    $a$**, such that

    $$
    f(x) - f(a) = \varphi(x)\,(x - a) \quad \text{for all } x .
    $$

    When this holds, $\varphi(a) = f'(a)$.

*Proof.* Suppose $f'(a)$ exists. Define $\varphi(x) = \frac{f(x) - f(a)}{x - a}$ for $x \ne a$ and $\varphi(a) = f'(a)$. The
equation $f(x) - f(a) = \varphi(x)(x - a)$ holds for $x \ne a$ by algebra, and for $x = a$ because both sides are 0.
Continuity of $\varphi$ at $a$ says $\varphi(x) \to \varphi(a)$, which is exactly the statement that the difference
quotient tends to $f'(a)$.

Conversely, suppose such a $\varphi$ exists. For $x \ne a$ we may divide: $\frac{f(x) - f(a)}{x - a} = \varphi(x)$, and as
$x \to a$ this tends to $\varphi(a)$ by continuity. So $f'(a)$ exists and equals $\varphi(a)$. $\square$

*Proof of the chain rule.* Let $b = g(a)$. By the lemma there are functions $\varphi$ continuous at $a$ and $\psi$
continuous at $b$ with

$$
g(x) - g(a) = \varphi(x)(x - a), \qquad f(u) - f(b) = \psi(u)(u - b) .
$$

Put $u = g(x)$ into the second equation:

$$
f(g(x)) - f(g(a)) = \psi(g(x))\,\bigl(g(x) - g(a)\bigr) = \psi(g(x))\,\varphi(x)\,(x - a) .
$$

The function $x \mapsto \psi(g(x))\varphi(x)$ is continuous at $a$: $g$ is continuous at $a$ (differentiable functions are
continuous, Chapter 4.3), $\psi$ is continuous at $g(a)$, so $\psi \circ g$ is continuous at $a$ (Chapter 3.4), and a product
of functions continuous at $a$ is continuous at $a$. So by the lemma, $f \circ g$ is differentiable at $a$ with derivative
$\psi(g(a))\varphi(a) = f'(b)\,g'(a)$. $\square$

No division by $g(x) - g(a)$ ever happened. The lemma also says something worth remembering: being differentiable at $a$
means that near $a$, $f(x) - f(a)$ is "a slope that settles down, times $x - a$".

## 5.2 Derivatives of sine, cosine and tangent

Look at the graph of $\sin x$ in the figure below. At $x = 0$ it climbs at slope 1; at $x = \pi/2$ it is at its top, slope
0; at $x = \pi$ it falls at slope $-1$. Those slopes, $1, 0, -1$, are exactly the values of $\cos x$ at $0, \pi/2, \pi$. The
picture suggests $\sin' = \cos$. Now we prove it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 220" role="img" aria-label="Graphs of sine (solid orange) and cosine (blue) from 0 to 2 pi. Short tangent lines to the sine curve at 0, pi over 2 and pi have slopes 1, 0 and minus 1, matching the heights of the cosine curve 1, 0 and minus 1 at those points">
  <line x1="30" y1="110" x2="350" y2="110" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40" y1="20" x2="40" y2="200" stroke="currentColor" stroke-width="1.2"/>
  <line x1="37" y1="30" x2="43" y2="30" stroke="currentColor" stroke-width="1.2"/>
  <text x="33" y="34" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <line x1="37" y1="190" x2="43" y2="190" stroke="currentColor" stroke-width="1.2"/>
  <text x="33" y="194" font-size="11" text-anchor="end" fill="currentColor">−1</text>
  <line x1="115" y1="107" x2="115" y2="113" stroke="currentColor" stroke-width="1.2"/>
  <text x="115" y="126" font-size="11" text-anchor="middle" fill="currentColor">π/2</text>
  <line x1="190" y1="107" x2="190" y2="113" stroke="currentColor" stroke-width="1.2"/>
  <text x="196" y="126" font-size="11" text-anchor="middle" fill="currentColor">π</text>
  <line x1="265" y1="107" x2="265" y2="113" stroke="currentColor" stroke-width="1.2"/>
  <text x="265" y="100" font-size="11" text-anchor="middle" fill="currentColor">3π/2</text>
  <line x1="340" y1="107" x2="340" y2="113" stroke="currentColor" stroke-width="1.2"/>
  <text x="340" y="126" font-size="11" text-anchor="middle" fill="currentColor">2π</text>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="5 3" points="40.0,30.0 50.0,31.7 60.0,36.9 70.0,45.3 80.0,56.5 90.0,70.0 100.0,85.3 110.0,101.6 115.0,110.0 120.0,118.4 130.0,134.7 140.0,150.0 150.0,163.5 160.0,174.7 170.0,183.1 180.0,188.3 190.0,190.0 200.0,188.3 210.0,183.1 220.0,174.7 230.0,163.5 240.0,150.0 250.0,134.7 260.0,118.4 265.0,110.0 270.0,101.6 280.0,85.3 290.0,70.0 300.0,56.5 310.0,45.3 320.0,36.9 330.0,31.7 340.0,30.0"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.4" points="40.0,110.0 50.0,93.4 60.0,77.5 70.0,63.0 80.0,50.5 90.0,40.7 100.0,33.9 110.0,30.4 115.0,30.0 120.0,30.4 130.0,33.9 140.0,40.7 150.0,50.5 160.0,63.0 170.0,77.5 180.0,93.4 190.0,110.0 200.0,126.6 210.0,142.5 220.0,157.0 230.0,169.5 240.0,179.3 250.0,186.1 260.0,189.6 265.0,190.0 270.0,189.6 280.0,186.1 290.0,179.3 300.0,169.5 310.0,157.0 320.0,142.5 330.0,126.6 340.0,110.0"/>
  <line x1="11.4" y1="158.0" x2="68.6" y2="62.0" stroke="currentColor" stroke-width="1.4"/>
  <line x1="86.4" y1="30.0" x2="143.6" y2="30.0" stroke="currentColor" stroke-width="1.4"/>
  <line x1="161.4" y1="62.0" x2="218.6" y2="158.0" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="40" cy="110" r="3" fill="currentColor"/>
  <circle cx="115" cy="30" r="3" fill="currentColor"/>
  <circle cx="190" cy="110" r="3" fill="currentColor"/>
  <text x="300" y="196" font-size="12" fill="#eea66f">sin x</text>
  <text x="300" y="24" font-size="12" fill="#9cc9ea">cos x</text>
</svg>
</div>

We need two limits, both with $h$ measured in **radians**:

$$
\lim_{h \to 0} \frac{\sin h}{h} = 1, \qquad \lim_{h \to 0} \frac{\cos h - 1}{h} = 0 .
$$

The first is Chapter 2.4, proved by squeezing areas in the unit circle. The second follows from the first. Multiply top
and bottom by $\cos h + 1$, and use $\cos^2 h - 1 = -\sin^2 h$:

$$
\frac{\cos h - 1}{h} = \frac{\cos^2 h - 1}{h(\cos h + 1)} = -\frac{\sin h}{h} \cdot \frac{\sin h}{\cos h + 1} .
$$

As $h \to 0$ the first factor tends to 1 and the second to $\frac{0}{2} = 0$ (sine and cosine are continuous). So the limit
is $-1 \cdot 0 = 0$.

!!! note "Theorem"
    For every real $x$ (in radians), $\frac{d}{dx}\sin x = \cos x$ and $\frac{d}{dx}\cos x = -\sin x$.

*Proof.* By the addition formula $\sin(x + h) = \sin x \cos h + \cos x \sin h$,

$$
\frac{\sin(x+h) - \sin x}{h} = \sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h} \;\longrightarrow\; \sin x \cdot 0 + \cos x \cdot 1 = \cos x .
$$

For cosine, $\cos(x + h) = \cos x \cos h - \sin x \sin h$, so

$$
\frac{\cos(x+h) - \cos x}{h} = \cos x \cdot \frac{\cos h - 1}{h} - \sin x \cdot \frac{\sin h}{h} \;\longrightarrow\; -\sin x . \qquad \square
$$

**Why radians.** Everything rested on $\sin h / h \to 1$, and that is true only when $h$ is in radians, where an angle is
the length of arc it cuts from a unit circle. If $x$ is measured in degrees, then $\sin(x^\circ) = \sin(\pi x / 180)$, and the
chain rule gives $\frac{d}{dx}\sin(x^\circ) = \frac{\pi}{180}\cos(x^\circ)$. The ugly factor $\pi/180 \approx 0.01745$ would appear in every
formula. Radians are the unit in which sine's slope at 0 is exactly 1; that is why calculus uses them.

**Tangent and the others.** The quotient rule (Chapter 4.4) does the rest. With $\tan x = \sin x / \cos x$,

$$
\frac{d}{dx}\tan x = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x ,
$$

wherever $\cos x \ne 0$. Here $\sec x = 1/\cos x$ (the **secant**), $\csc x = 1/\sin x$ (the **cosecant**) and
$\cot x = \cos x / \sin x$ (the **cotangent**). The same method gives the full table:

| $f(x)$ | $f'(x)$ |
|---|---|
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |

For instance $\sec x = (\cos x)^{-1}$, so by the chain rule $\sec' x = -(\cos x)^{-2}(-\sin x) = \frac{\sin x}{\cos^2 x} = \sec x \tan x$.

**Example 5.** $\frac{d}{dx}\sin(3x) = 3\cos(3x)$. A wave three times as fast has slopes three times as steep.

**Example 6.** $\frac{d}{dx}\sin(x^2) = \cos(x^2) \cdot 2x$, while $\frac{d}{dx}\sin^2 x = 2\sin x \cos x$. Read the notation
carefully: $\sin^2 x$ means $(\sin x)^2$, so the square is on the outside.

**Example 7.** $\frac{d}{dx}\cos^2 x = 2\cos x \cdot (-\sin x) = -2\sin x\cos x$. Add Example 6: $\frac{d}{dx}(\sin^2 x + \cos^2 x) = 0$,
as it must be, since $\sin^2 x + \cos^2 x = 1$ is constant.

**Example 8: second derivatives.** Differentiate $\sin$ twice: $\sin'' = \cos' = -\sin$. So $y = \sin x$ solves
$y'' = -y$, and so does $\cos x$, and so does $y = A\sin(\omega t) + B\cos(\omega t)$ with $y'' = -\omega^2 y$. This equation
is the spring, the pendulum (for small swings) and every oscillation in physics, and Chapter 14 solves it completely.

## 5.3 Exponentials and the number $e$

Bacteria that double every hour number $N(t) = N_0 \cdot 2^t$ after $t$ hours. How fast is the colony growing at a given
moment? We need the derivative of $a^x$ for a base $a > 0$. Go straight to the definition:

$$
\frac{a^{x+h} - a^x}{h} = \frac{a^x a^h - a^x}{h} = a^x \cdot \frac{a^h - 1}{h} .
$$

The factor $a^x$ does not depend on $h$; it comes straight out of the limit. What is left does not depend on $x$ at all.
So, provided the limit exists,

$$
\frac{d}{dx}a^x = L(a) \cdot a^x, \qquad \text{where } L(a) = \lim_{h \to 0}\frac{a^h - 1}{h} .
$$

This is a remarkable fact: **the rate of growth of an exponential is proportional to its present size**. The constant of
proportionality $L(a)$ is the slope of $a^x$ at $x = 0$. A colony twice as big grows twice as fast.

What is $L(a)$? Compute it with small $h$:

| $a$ | $\frac{a^h - 1}{h}$ at $h = 10^{-8}$ |
|---|---|
| 2 | 0.693147... |
| 2.5 | 0.916290... |
| 3 | 1.098612... |
| 10 | 2.302585... |

So $L(2) < 1 < L(3)$. Somewhere between 2 and 3 is a base whose slope at 0 is exactly 1. That base is called $e$:

!!! note "Definition"
    $e$ is the number $a > 0$ with $L(a) = 1$, that is, $\displaystyle \lim_{h \to 0}\frac{e^h - 1}{h} = 1$. Its value is
    $e = 2.718281828459045\ldots$

With this base the constant disappears:

$$
\frac{d}{dx}e^x = e^x .
$$

The function $e^x$ (also written $\exp x$) is its own derivative. Its graph has height equal to slope at every point.

**An honest gap.** We have assumed three things: that $L(a)$ exists for each $a > 0$, that it depends continuously on $a$,
and that it increases with $a$ (so exactly one $a$ gives 1, by the intermediate value theorem of Chapter 3). All are true,
but proving them from scratch needs a careful definition of $a^x$ for irrational $x$, which is harder than it looks. The
clean way is to turn the story around: Chapter 9 defines $\ln x$ as an area under $1/t$ and gets $e^x$ as its inverse; Chapter
13 defines $e^x$ by a power series. Both give everything here with full proofs. One relation we can prove now: for any whole
number $k$,

$$
L(a^k) = \lim_{h \to 0}\frac{a^{kh} - 1}{h} = k \lim_{h \to 0}\frac{a^{kh} - 1}{kh} = k\,L(a) ,
$$

(substitute $t = kh$, which also tends to 0). So $L$ turns powers into multiples, exactly as a logarithm does. In 5.4 we
will see that $L(a)$ *is* the natural logarithm $\ln a$.

**Example 9.** $\frac{d}{dx}e^{3x} = 3e^{3x}$ (chain rule, inside $3x$). In general $\frac{d}{dx}e^{kx} = k e^{kx}$: the function
$y = Ce^{kx}$ satisfies $y' = ky$. This one line is the mathematics of compound interest, population growth ($k > 0$) and
radioactive decay ($k < 0$).

**Example 10.** $\frac{d}{dx}e^{-x^2} = e^{-x^2}\cdot(-2x) = -2xe^{-x^2}$. This bell-shaped function is the heart of the normal
distribution. It rises for $x < 0$, falls for $x > 0$, and has its peak at $x = 0$, where the derivative is 0.

**Example 11.** $\frac{d}{dx}\left(x e^{-x}\right) = e^{-x} - x e^{-x} = (1 - x)e^{-x}$, which is 0 only at $x = 1$. This function
rises to a peak of $1/e$ at $x = 1$ and then decays; Chapter 7 sketches it.

<figure class="play" data-play="tangent" data-f="exp"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The tangent to y = eˣ: wherever you put the point, its slope equals its height. The blue curve, the slope (dashed), lies exactly on top of the curve.</figcaption></figure>

## 5.4 Logarithms, inverse functions and implicit differentiation

### The derivative of an inverse function

The natural logarithm $\ln x$ is the inverse of $e^x$: $y = \ln x$ means $e^y = x$ (for $x > 0$). To differentiate it we need
a general fact about inverses. Look at the picture: the graph of an inverse function is the mirror image of the original
in the line $y = x$. Mirroring swaps the two coordinates, so a tangent line that rises $m$ for each 1 across becomes one that
rises 1 for each $m$ across: the slope becomes $1/m$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 335" role="img" aria-label="The graph of e to the x (orange) and its mirror image ln x (blue) in the dashed line y equals x. The tangent to e to the x at (1, e) has slope e; the mirrored tangent to ln x at (e, 1) has slope 1 over e">
  <line x1="20" y1="200" x2="350" y2="200" stroke="currentColor" stroke-width="1.2"/>
  <line x1="150" y1="5" x2="150" y2="330" stroke="currentColor" stroke-width="1.2"/>
  <line x1="200" y1="197" x2="200" y2="203" stroke="currentColor" stroke-width="1.2"/>
  <text x="200" y="216" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="147" y1="150" x2="153" y2="150" stroke="currentColor" stroke-width="1.2"/>
  <text x="143" y="154" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <line x1="25" y1="325" x2="340" y2="10" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="318" y="45" font-size="11" fill="currentColor">y = x</text>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.4" points="25.0,195.9 37.0,194.8 49.0,193.4 61.0,191.6 72.9,189.3 84.9,186.4 96.9,182.7 108.9,178.0 120.9,172.1 132.9,164.5 144.8,154.9 156.8,142.7 168.8,127.2 180.8,107.4 192.8,82.4 204.8,50.5 216.8,10.0"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.4" points="154.1,325.0 155.7,309.0 157.2,296.9 158.8,287.1 160.3,279.0 163.4,265.8 166.5,255.4 169.6,246.8 172.7,239.5 175.8,233.1 180.4,224.8 186.6,215.5 192.8,207.7 199.0,201.0 205.2,195.0 214.5,187.3 223.8,180.5 236.2,172.8 248.6,166.0 261.0,160.1 276.5,153.6 292.0,147.8 307.5,142.6 323.0,137.9 340.0,133.2"/>
  <line x1="182.5" y1="111.7" x2="217.5" y2="16.5" stroke="currentColor" stroke-width="1.4"/>
  <line x1="240.9" y1="166.6" x2="330.9" y2="133.4" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="200" cy="64.1" r="3" fill="currentColor"/>
  <circle cx="285.9" cy="150" r="3" fill="currentColor"/>
  <text x="222" y="70" font-size="11" fill="currentColor">(1, e), slope e</text>
  <text x="250" y="190" font-size="11" fill="currentColor">(e, 1), slope 1/e</text>
  <text x="60" y="180" font-size="12" fill="#eea66f">eˣ</text>
  <text x="168" y="300" font-size="12" fill="#9cc9ea">ln x</text>
</svg>
</div>

*Level: advanced (the proof).*

!!! note "Theorem (derivative of an inverse)"
    Let $f$ be continuous and strictly increasing (or strictly decreasing) on an open interval $I$, so that it has an
    inverse $f^{-1}$ on the interval $f(I)$. If $f$ is differentiable at $a \in I$ with $f'(a) \ne 0$, then $f^{-1}$ is
    differentiable at $b = f(a)$, and

    $$
    (f^{-1})'(b) = \frac{1}{f'(a)} = \frac{1}{f'(f^{-1}(b))} .
    $$

*Proof.* Write $g = f^{-1}$. By Chapter 3.4, $g$ is continuous on $f(I)$. By the lemma of 5.1 there is $\varphi$, continuous
at $a$, with $f(x) - f(a) = \varphi(x)(x - a)$ and $\varphi(a) = f'(a) \ne 0$. For $x \ne a$ we have $\varphi(x) \ne 0$ too,
because $f$ is one-to-one, so $f(x) \ne f(a)$. Now put $x = g(y)$, so $f(x) = y$:

$$
y - b = \varphi(g(y))\,\bigl(g(y) - g(b)\bigr), \quad \text{so} \quad g(y) - g(b) = \frac{1}{\varphi(g(y))}\,(y - b) .
$$

The function $y \mapsto 1/\varphi(g(y))$ is continuous at $b$ ($g$ continuous at $b$, $\varphi$ continuous at $g(b) = a$, and
$\varphi(a) \ne 0$). By the lemma, $g$ is differentiable at $b$ with $g'(b) = 1/\varphi(a) = 1/f'(a)$. $\square$

The condition $f'(a) \ne 0$ matters. The function $f(x) = x^3$ is strictly increasing with $f'(0) = 0$; its inverse $\sqrt[3]{y}$
has a vertical tangent at $y = 0$ and no derivative there. A horizontal tangent mirrors to a vertical one.

**A practical way to remember it.** If $y = g(x)$ is the inverse of $f$, then $f(y) = x$. Differentiate both sides with respect
to $x$ using the chain rule: $f'(y)\,y' = 1$, so $y' = 1/f'(y)$. (This assumes $y'$ exists; the theorem guarantees it.)

### The natural logarithm

Let $y = \ln x$, so $e^y = x$. Then $\frac{dy}{dx} = \frac{1}{e^y} = \frac{1}{x}$:

$$
\frac{d}{dx}\ln x = \frac{1}{x} \quad (x > 0) .
$$

For $x < 0$, $\ln|x| = \ln(-x)$ and the chain rule gives $\frac{1}{-x}\cdot(-1) = \frac{1}{x}$ again. So

$$
\frac{d}{dx}\ln|x| = \frac{1}{x} \quad (x \ne 0) .
$$

This fills a hole you may have noticed: the power rule $\frac{d}{dx}x^n = nx^{n-1}$ never produces $x^{-1}$ (it would need
$n = 0$, which gives 0). The function whose derivative is $1/x$ is not a power at all; it is the logarithm.

**$L(a)$ is $\ln a$.** Any base can be written as a power of $e$: $a = e^{\ln a}$, so $a^x = e^{x\ln a}$. By the chain rule,

$$
\frac{d}{dx}a^x = e^{x \ln a}\cdot \ln a = a^x \ln a .
$$

Comparing with 5.3, $L(a) = \ln a$. Check with the table: $\ln 2 = 0.693147\ldots$, $\ln 3 = 1.098612\ldots$, $\ln 10 = 2.302585\ldots$
The bacteria doubling every hour grow at $\ln 2 \approx 0.693$ times their current number per hour, about 69% per hour at
that instant, not 100%.

The logarithm to base $a$ is $\log_a x = \frac{\ln x}{\ln a}$ (change of base, [Algebra 7](../algebra/07-Exponents-and-Logarithms.md)),
so $\frac{d}{dx}\log_a x = \frac{1}{x \ln a}$.

**The two definitions of $e$ agree.** The Algebra book met $e$ as the limit of compound interest,
$\left(1 + \frac{1}{n}\right)^n$. Here $e$ is the base with slope 1 at 0. They are the same number. Since $\ln$ has derivative
$1/x$, its derivative at 1 is 1, which says

$$
\lim_{h \to 0}\frac{\ln(1 + h) - \ln 1}{h} = \lim_{h \to 0}\frac{\ln(1+h)}{h} = 1 .
$$

Put $h = 1/n$: $n\ln\!\left(1 + \frac{1}{n}\right) \to 1$. Then $\left(1 + \frac{1}{n}\right)^n = e^{n\ln(1 + 1/n)} \to e^1 = e$,
because $\exp$ is continuous. The convergence is slow:

| $n$ | $\left(1 + \frac{1}{n}\right)^n$ |
|---|---|
| 1 | 2 |
| 10 | 2.5937... |
| 100 | 2.7048... |
| 1000 | 2.7169... |
| 1 000 000 | 2.7182804... |

**Mars: air pressure with height.** In an atmosphere at roughly constant temperature, pressure falls exponentially with
height: $p(h) = p_0 e^{-h/H}$, where $H$ is the **scale height**. For Mars $H$ is about 11 km. Then

$$
\frac{dp}{dh} = -\frac{p_0}{H}e^{-h/H} = -\frac{p(h)}{H} ,
$$

so pressure drops at a rate of $1/H \approx 1/11$ of its current value per kilometre, about 9% per kilometre near the ground.
The model is only approximate (the real temperature changes with height), but it explains why the rate of loss is
proportional to what is there.

**The power rule for every real exponent.** Chapter 4 proved $\frac{d}{dx}x^n = nx^{n-1}$ for whole and some rational $n$,
and promised the rest. For $x > 0$ and any real $r$, $x^r = e^{r\ln x}$, so

$$
\frac{d}{dx}x^r = e^{r\ln x}\cdot\frac{r}{x} = x^r\cdot\frac{r}{x} = r x^{r-1} .
$$

For example $\frac{d}{dx}x^{\pi} = \pi x^{\pi - 1}$ and $\frac{d}{dx}x^{\sqrt 2} = \sqrt 2\,x^{\sqrt 2 - 1}$.

### Inverse trigonometric functions

Sine is not one-to-one on all of $\mathbb{R}$, but it is strictly increasing on $[-\pi/2, \pi/2]$, taking every value in
$[-1, 1]$ once. Its inverse there is $\arcsin$: $y = \arcsin x$ means $\sin y = x$ and $-\pi/2 \le y \le \pi/2$. By the
theorem, for $-1 < x < 1$,

$$
\frac{d}{dx}\arcsin x = \frac{1}{\cos y} = \frac{1}{\sqrt{1 - \sin^2 y}} = \frac{1}{\sqrt{1 - x^2}} .
$$

We chose the positive square root because $\cos y > 0$ for $-\pi/2 < y < \pi/2$. At $x = \pm 1$, $\cos y = 0$ and the graph of
$\arcsin$ has vertical tangents.

Tangent is strictly increasing on $(-\pi/2, \pi/2)$ and takes every real value, so $\arctan: \mathbb{R} \to (-\pi/2, \pi/2)$
is its inverse. With $y = \arctan x$, $\tan y = x$:

$$
\frac{d}{dx}\arctan x = \frac{1}{\sec^2 y} = \frac{1}{1 + \tan^2 y} = \frac{1}{1 + x^2} .
$$

Similarly $\frac{d}{dx}\arccos x = -\frac{1}{\sqrt{1 - x^2}}$.

Notice something strange and important: $\arctan x$ is built from circles and angles, but its derivative $\frac{1}{1 + x^2}$
is a plain rational function. This is why $\pi$ turns up in problems with no circle in sight; Chapter 13 uses it to compute
$\pi$ from the series for $\arctan$.

**Example 12.** $\frac{d}{dx}\arctan(2x) = \frac{2}{1 + 4x^2}$. And $\frac{d}{dx}\arcsin(x/3) = \frac{1/3}{\sqrt{1 - x^2/9}} = \frac{1}{\sqrt{9 - x^2}}$
for $|x| < 3$.

### Implicit differentiation

Some curves are not the graph of one formula $y = f(x)$. The circle $x^2 + y^2 = 25$ fails the vertical line test: above
$x = 3$ it has both $(3, 4)$ and $(3, -4)$. But near the point $(3, 4)$ it *is* a graph, the upper half $y = \sqrt{25 - x^2}$.
**Implicit differentiation** finds the slope there without solving for $y$: treat $y$ as an unknown function of $x$ and
differentiate the whole equation, using the chain rule on every $y$.

**Example 13.** $x^2 + y^2 = 25$. Differentiating, $2x + 2y\,y' = 0$, so $y' = -x/y$. At $(3, 4)$ the slope is $-3/4$, and the
tangent line is $y - 4 = -\frac{3}{4}(x - 3)$. Check with the explicit formula: $\frac{d}{dx}\sqrt{25 - x^2} = \frac{-x}{\sqrt{25 - x^2}}$,
which is $-3/4$ at $x = 3$. And geometrically: the radius to $(3, 4)$ has slope $4/3$, and a tangent to a circle is
perpendicular to the radius, so its slope is $-3/4$.

**Example 14 (folium of Descartes).** $x^3 + y^3 = 6xy$. Here solving for $y$ would need the cubic formula. Differentiate:

$$
3x^2 + 3y^2 y' = 6y + 6x y' \quad\Longrightarrow\quad y' = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x} .
$$

The point $(3, 3)$ is on the curve ($27 + 27 = 54 = 6 \cdot 9$), and there $y' = \frac{6 - 9}{9 - 6} = -1$.

**Why is this allowed?** We assumed that near the point the curve is the graph of a differentiable function $y(x)$. That is
guaranteed by the **implicit function theorem**, a result about functions of several variables (Part V of this book),
whenever the partial derivative with respect to $y$ is not zero:
for the circle that means $2y \ne 0$, and indeed at $(5, 0)$, where $y = 0$, the circle has a vertical tangent and is not a
graph of $y$ over $x$ nearby. Where the formula for $y'$ has a zero denominator, something special happens to the curve.

## 5.5 Logarithmic differentiation

How do you differentiate $y = x^x$? It is not a power function ($x^r$ has a fixed exponent) and not an exponential ($a^x$ has
a fixed base). Neither rule applies. The trick: take logarithms first, which turns exponents into factors and products into
sums.

**Example 15.** For $x > 0$, $\ln y = x\ln x$. Differentiate both sides (the left by the chain rule):

$$
\frac{y'}{y} = \ln x + x\cdot\frac{1}{x} = \ln x + 1, \qquad\text{so}\qquad y' = x^x(\ln x + 1) .
$$

Check: at $x = 1$, $y' = 1 \cdot (0 + 1) = 1$. And $y' = 0$ exactly when $\ln x = -1$, $x = 1/e$: the function $x^x$ has its
smallest value $(1/e)^{1/e} = e^{-1/e} \approx 0.6922$ there.

The quantity $y'/y = (\ln y)'$ is called the **logarithmic derivative**. It is the *relative* rate of change: the growth
rate as a fraction of the current size. For $Ce^{kx}$ it is the constant $k$.

**Example 16.** $y = x^{\sin x}$ for $x > 0$. Then $\ln y = \sin x\ln x$ and

$$
y' = x^{\sin x}\left(\cos x\ln x + \frac{\sin x}{x}\right) .
$$

**Example 17: a messy product.** Let

$$
y = \frac{(x+1)^2(x-2)^3}{\sqrt{x^2+1}} .
$$

The quotient and product rules would work but would be long. Take logarithms of absolute values (so that negative factors
cause no trouble):

$$
\ln|y| = 2\ln|x+1| + 3\ln|x-2| - \tfrac{1}{2}\ln(x^2+1) .
$$

Differentiate:

$$
\frac{y'}{y} = \frac{2}{x+1} + \frac{3}{x-2} - \frac{x}{x^2+1} .
$$

At $x = 0$: $y(0) = \frac{1 \cdot (-8)}{1} = -8$ and $\frac{y'}{y} = 2 - \frac{3}{2} - 0 = \frac{1}{2}$, so $y'(0) = -4$. Check by sympy:
`diff(y, x).subs(x, 0)` gives $-4$.

**The product rule, seen again.** For $y = f_1 f_2 \cdots f_n$, logarithmic differentiation gives

$$
\frac{y'}{y} = \frac{f_1'}{f_1} + \frac{f_2'}{f_2} + \cdots + \frac{f_n'}{f_n} :
$$

relative rates of change add when quantities multiply. If a country's population grows 1% a year and income per person
grows 2% a year, total income grows about 3% a year. This is the product rule in the language of percentages.

!!! tip "Try it in Python (sympy)"
    The sympy library (not in the standard library; install it with `pip install sympy`) differentiates symbolically,
    which is a good way to check hand work:

    ```python
    import sympy as sp
    x = sp.symbols('x', positive=True)
    print(sp.diff(x**x, x))                        # x**x*(log(x) + 1)
    print(sp.diff(sp.atan(x), x))                  # 1/(x**2 + 1)
    print(sp.diff(sp.exp(-x**2), x))               # -2*x*exp(-x**2)
    print(sp.nsolve(sp.diff(x**x, x), x, 0.4))     # 0.367879... = 1/e
    ```

## A little history

The chain rule is built into Leibniz's calculus from his first published paper on it (1684), where the notation of
differentials makes it look almost automatic; Newton used the same idea in his language of "fluxions". The derivatives of sine and cosine were worked out
in the decades that followed, and Leonhard Euler's *Introductio in analysin infinitorum* (1748) gathered exponentials,
logarithms and trigonometric functions into one family of functions defined by series. Euler used the letter $e$ for the base
of natural logarithms, and his books made it standard. The rigorous treatment of differentiability belongs to the nineteenth
century; the "no division" form of the derivative used in 5.1 is associated with Constantin Carathéodory in the twentieth.

## Check yourself

??? question "1. Differentiate $f(x) = (x^3 - 2x)^4$."

    Outside $u^4$, inside $u = x^3 - 2x$ with $u' = 3x^2 - 2$. So $f'(x) = 4(x^3 - 2x)^3(3x^2 - 2)$.

??? question "2. Differentiate $g(x) = \cos(5x^2 + 1)$ and $h(x) = \tan^3 x$."

    $g'(x) = -\sin(5x^2 + 1)\cdot 10x = -10x\sin(5x^2 + 1)$.
    $h(x) = (\tan x)^3$, so $h'(x) = 3\tan^2 x\sec^2 x$.

??? question "3. Find the slope of the tangent to $y = e^{2x}\sin x$ at $x = 0$, and write the tangent line."

    Product rule: $y' = 2e^{2x}\sin x + e^{2x}\cos x$. At 0: $y' = 0 + 1 = 1$ and $y(0) = 0$. The tangent is $y = x$.

??? question "4. Using the definition of the derivative, show that if a function measured in degrees is $s(x) = \sin(x^\circ)$, then $s'(0) = \pi/180$."

    $s(x) = \sin(\pi x/180)$, so $\frac{s(h) - s(0)}{h} = \frac{\sin(\pi h/180)}{h} = \frac{\pi}{180}\cdot\frac{\sin t}{t}$ with
    $t = \pi h/180 \to 0$. The limit is $\frac{\pi}{180}\cdot 1 = \frac{\pi}{180} \approx 0.01745$.

??? question "5. Differentiate $\ln(\cos x)$ on $(-\pi/2, \pi/2)$ and $\log_{10}(x^2 + 1)$."

    $\frac{d}{dx}\ln(\cos x) = \frac{-\sin x}{\cos x} = -\tan x$.
    $\frac{d}{dx}\log_{10}(x^2 + 1) = \frac{2x}{(x^2+1)\ln 10}$.

??? question "6. Find the slope of the curve $x^2 + xy + y^2 = 7$ at the point $(1, 2)$."

    Check the point: $1 + 2 + 4 = 7$. Differentiate: $2x + y + xy' + 2yy' = 0$, so $y' = -\frac{2x + y}{x + 2y}$.
    At $(1, 2)$: $y' = -\frac{4}{5}$.

??? question "7. Show that $\frac{d}{dx}\arccos x = -\frac{1}{\sqrt{1-x^2}}$ for $-1 < x < 1$, and explain why $\arcsin x + \arccos x$ is constant."

    $y = \arccos x$ means $\cos y = x$ with $0 \le y \le \pi$. By the inverse rule, $y' = \frac{1}{-\sin y}$, and
    $\sin y = \sqrt{1 - x^2}$ (positive since $0 < y < \pi$). So $y' = -\frac{1}{\sqrt{1-x^2}}$.
    Then $\frac{d}{dx}(\arcsin x + \arccos x) = 0$ on $(-1, 1)$. A function with zero derivative on an interval is constant
    (Chapter 6 proves this); at $x = 0$ the value is $0 + \frac{\pi}{2}$, so $\arcsin x + \arccos x = \frac{\pi}{2}$.

??? question "8. Let $f(x) = x^3 + x$. Find $(f^{-1})'(2)$ without finding a formula for $f^{-1}$."

    $f$ is strictly increasing ($f'(x) = 3x^2 + 1 > 0$). $f(1) = 2$, so $f^{-1}(2) = 1$, and
    $(f^{-1})'(2) = \frac{1}{f'(1)} = \frac{1}{4}$.

??? question "9. Differentiate $y = (1 + x)^{1/x}$ for $x > 0$ by logarithmic differentiation."

    $\ln y = \frac{\ln(1+x)}{x}$. Then $\frac{y'}{y} = \frac{\frac{x}{1+x} - \ln(1+x)}{x^2}$ (quotient rule), so

    $$
    y' = (1+x)^{1/x}\cdot\frac{x - (1+x)\ln(1+x)}{x^2(1+x)} .
    $$

??? question "10. A ladder's top is at height $y = 5\sin\theta$ metres, where $\theta$ is the angle with the ground. The angle shrinks at 0.1 radian per second. How fast is the top falling when $\theta = \pi/3$?"

    $\frac{dy}{dt} = 5\cos\theta\cdot\frac{d\theta}{dt} = 5\cdot\frac{1}{2}\cdot(-0.1) = -0.25$ metres per second. The top falls
    at 0.25 m/s at that moment.

??? question "11. Show that $y = e^{-t}\cos t$ satisfies $y'' + 2y' + 2y = 0$."

    $y' = -e^{-t}\cos t - e^{-t}\sin t = -e^{-t}(\cos t + \sin t)$.
    $y'' = e^{-t}(\cos t + \sin t) - e^{-t}(-\sin t + \cos t) = 2e^{-t}\sin t$.
    Then $y'' + 2y' + 2y = 2e^{-t}\sin t - 2e^{-t}\cos t - 2e^{-t}\sin t + 2e^{-t}\cos t = 0$.
    This is a damped oscillation, studied in Chapter 14.

??? question "12. (Harder) Let $g(x) = x^2\sin(1/x)$ for $x \ne 0$ and $g(0) = 0$. Find $g'(x)$ for every $x$, and show $g'$ is not continuous at 0."

    For $x \ne 0$, product and chain rules: $g'(x) = 2x\sin(1/x) + x^2\cos(1/x)\cdot(-1/x^2) = 2x\sin(1/x) - \cos(1/x)$.
    At 0, from the definition: $\frac{g(h)}{h} = h\sin(1/h)$, and $|h\sin(1/h)| \le |h| \to 0$, so $g'(0) = 0$.
    As $x \to 0$, $2x\sin(1/x) \to 0$ but $\cos(1/x)$ keeps swinging between $-1$ and $1$ (at $x = 1/(2n\pi)$ it is 1, at
    $x = 1/((2n+1)\pi)$ it is $-1$). So $g'(x)$ has no limit at 0: $g$ is differentiable everywhere, but its derivative is
    not continuous. This is the function that broke the quick chain rule proof in 5.1.

## What you learned

- The chain rule: $(f \circ g)' = (f' \circ g)\cdot g'$. Rates multiply along a chain.
- The obvious proof divides by something that can be zero; writing $f(x) - f(a) = \varphi(x)(x - a)$ with $\varphi$
  continuous gives a proof with no division.
- $\sin' = \cos$, $\cos' = -\sin$, $\tan' = \sec^2$, all resting on $\frac{\sin h}{h} \to 1$, which needs radians.
- $\frac{d}{dx}a^x = a^x\ln a$; the base $e$ is the one with $\frac{d}{dx}e^x = e^x$, and it equals the compound interest limit.
- The derivative of an inverse is the reciprocal of the derivative: $(\ln x)' = 1/x$, $(\arcsin x)' = 1/\sqrt{1-x^2}$,
  $(\arctan x)' = 1/(1+x^2)$.
- $\frac{d}{dx}x^r = rx^{r-1}$ for every real $r$.
- Implicit differentiation finds slopes on curves like $x^3 + y^3 = 6xy$; logarithmic differentiation handles $x^x$ and long
  products, and shows that relative rates of change add.

**Next:** [Chapter 6](06-The-Mean-Value-Theorem.md), the theorem that turns information about the derivative into
information about the function itself.

## Further reading

- Michael Spivak, *Calculus*, 4th edition (2008): chapters on the chain rule, inverse functions and the trigonometric functions,
  with the same level of care as this chapter and many hard problems.
- Tom M. Apostol, *Calculus*, Volume 1, 2nd edition (1967).
- Stephen Kuhn, "The derivative à la Carathéodory", *The American Mathematical Monthly* 98 (1991): the "no division"
  definition of 5.1 and what it simplifies.
- Eli Maor, *e: The Story of a Number* (1994): the history of $e$, logarithms and compound interest.
- G. H. Hardy, *A Course of Pure Mathematics* (first edition 1908): a classic, careful treatment of logarithms and
  exponentials.
- On this site: [Unit 3: Derivatives](../../uoft/MAT137/unit03.md) and
  [Unit 4: Transcendental functions](../../uoft/MAT137/unit04.md) (MAT137), and
  [Unit 8: Inverse functions](../../uoft/MAT158H1/unit08.md) and
  [Unit 11: Transcendental functions](../../uoft/MAT158H1/unit11.md) (MAT158) in the U of T guides.
- Topics shelf: [Product, quotient and chain rules](../../topics/change/level-8/01-product-quotient-chain.md),
  [Derivatives of exp, log and trig](../../topics/change/level-8/02-exp-log-trig.md).
- Other books here: [Algebra](../algebra/index.md) (functions in Chapter 6, exponents and logarithms in Chapter 7) and
  [Probability](../probability/index.md).
