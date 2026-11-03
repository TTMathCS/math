# 2. Limits

*In Chapter 1 we kept saying that averages "approach" a speed and rectangle sums "approach" an area. That word
carried the whole weight of the argument, and we never said what it meant. This chapter makes it exact. You will
compute limits by algebra and by tables, learn the laws that let you break a hard limit into easy pieces, handle
one-sided and infinite limits, prove the famous limit $\frac{\sin x}{x} \to 1$ with a picture, and then meet the
definition that finally put calculus on solid ground: the epsilon-delta definition, with which you will prove the
limit laws themselves.*

!!! abstract "In this chapter"
    **You will learn:**

    - what $\lim_{x \to a} f(x) = L$ means in words, in tables and in pictures
    - the limit laws for sums, products and quotients, and the algebra tricks that unlock $\frac00$ forms
    - one-sided limits, infinite limits, limits at infinity and asymptotes
    - the squeeze theorem and a geometric proof that $\frac{\sin x}{x} \to 1$
    - the epsilon-delta definition, how to use it to prove a limit, and how to show a limit does not exist
    - complete proofs of the limit laws and the squeeze theorem

    **You need:** [Chapter 1](01-Rates-and-Areas.md), and functions and their graphs (the algebra book's
    [Chapter 6](../algebra/06-Functions.md)); for 2.4, sine, cosine and radians. Gentler versions on the Topics shelf:
    [Shrinking the interval](../../topics/change/level-6/02-shrinking-interval.md) and
    [Limits](../../topics/change/level-7/01-limits.md).

    **Levels:** 2.1 to 2.3 are beginner to intermediate; 2.4 is intermediate; 2.5 and 2.6 are advanced.

## 2.1 Approaching without arriving

Start with a function that has a hole in it:

$$
f(x) = \frac{x^2 - 1}{x - 1}.
$$

At $x = 1$ the formula gives $\frac00$, so $f(1)$ is not defined. Everywhere else it is. What happens *near*
$x = 1$?

| $x$ | 0.9 | 0.99 | 0.999 | 1 | 1.001 | 1.01 | 1.1 |
|---|---|---|---|---|---|---|---|
| $f(x)$ | 1.9 | 1.99 | 1.999 | undefined | 2.001 | 2.01 | 2.1 |

The values close in on 2 from both sides. Algebra says why: for $x \ne 1$, $x^2 - 1 = (x - 1)(x + 1)$, so
$f(x) = x + 1$. The graph of $f$ is the line $y = x + 1$ with one point, $(1, 2)$, punched out. Near the hole, the
values are near 2. We write

$$
\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = 2,
$$

read "the limit of $f(x)$ as $x$ tends to 1 is 2".

Here is the idea in words. **$\lim_{x \to a} f(x) = L$ means: you can make $f(x)$ as close to $L$ as you want by
taking $x$ close enough to $a$, but not equal to $a$.** Three things about that sentence matter.

1. **The value at $a$ is ignored.** The limit asks about $x$ *near* $a$, never *at* $a$. The function need not be
   defined at $a$ (our $f$ is not), and if it is, its value there can be anything. The function $g(x) = x + 1$ for
   $x \ne 1$, $g(1) = 17$, also has limit 2 at 1. This is exactly what Chapter 1 needed: the average speed
   $\frac{s(1+h) - s(1)}{h}$ is meaningless at $h = 0$, and we asked only what happens near $h = 0$.
2. **Both sides count.** $x$ may approach $a$ from the left or the right; the values must close in on $L$ either way.
3. **"Close enough" is a promise about *all* such $x$,** not about a list of sample points. A table can suggest a
   limit but cannot prove one. Section 2.5 shows how to prove one.

**Worked example.** $\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}$. Again $\frac00$ at $x = 0$. A table gives
$0.24846$ at $x = 0.1$, $0.24984$ at $x = 0.01$ and $0.25016$ at $x = -0.01$, suggesting $\tfrac14$. Algebra: multiply
top and bottom by the **conjugate** $\sqrt{x + 4} + 2$, which uses $(A - B)(A + B) = A^2 - B^2$:

$$
\frac{\sqrt{x+4} - 2}{x} \cdot \frac{\sqrt{x+4} + 2}{\sqrt{x+4} + 2} = \frac{(x + 4) - 4}{x(\sqrt{x+4} + 2)} = \frac{1}{\sqrt{x + 4} + 2}.
$$

As $x \to 0$ the denominator tends to $\sqrt4 + 2 = 4$, so the limit is $\tfrac14$. **Check:** $\tfrac14 = 0.25$,
squeezed between the table values.

### When a limit does not exist

Limits can fail in several ways.

- **A jump.** Let $\operatorname{sgn}(x)$ (the **sign** function) be $1$ for $x > 0$, $-1$ for $x < 0$ and $0$ at
  $0$. Near $0$ the values are $1$ on one side and $-1$ on the other. There is no single number they all approach,
  so $\lim_{x \to 0} \operatorname{sgn}(x)$ does not exist.
- **Blowing up.** $\frac1{x^2}$ grows without bound as $x \to 0$. No number $L$ works, so the limit does not exist as
  a number. (We will write $\lim = \infty$ as a shorthand in 2.3, but $\infty$ is not a number.)
- **Oscillation.** $\sin\frac1x$ near $0$: as $x$ shrinks, $\frac1x$ races through whole periods of the sine, so
  $\sin \frac1x$ swings between $-1$ and $1$ infinitely often in every interval around $0$. Sample values:
  $\sin 10 \approx -0.544$, $\sin 100 \approx -0.506$, $\sin 1000 \approx 0.827$. No limit.

The last example also shows why tables can fool you. At $x = \frac1{n\pi}$ for whole numbers $n$, $\sin \frac1x =
\sin(n\pi) = 0$ exactly. A table using only those $x$ would "show" the limit is $0$. It is not.

## 2.2 The limit laws

Computing every limit from scratch would be tiring. Fortunately limits respect arithmetic.

> **Limit laws.** Suppose $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$. Then
>
> - $\lim_{x \to a} \big(f(x) + g(x)\big) = L + M$ and $\lim_{x \to a} \big(f(x) - g(x)\big) = L - M$,
> - $\lim_{x \to a} c\,f(x) = cL$ for any constant $c$,
> - $\lim_{x \to a} f(x)g(x) = LM$,
> - $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac LM$, **provided $M \ne 0$**.

Add two simple limits that are obvious from the meaning: $\lim_{x \to a} c = c$ (a constant stays put) and
$\lim_{x \to a} x = a$. Section 2.6 proves all of these from the precise definition. For now, use them.

**Polynomials.** Using the product law repeatedly, $\lim_{x \to a} x^n = a^n$. With the sum and constant laws, for
any polynomial $p(x) = c_n x^n + \cdots + c_1 x + c_0$,

$$
\lim_{x \to a} p(x) = p(a).
$$

For polynomials, the limit is just the value. The same holds for a **rational function** (a quotient of
polynomials) $\frac{p(x)}{q(x)}$ at any $a$ with $q(a) \ne 0$, by the quotient law.

**Worked example.** $\lim_{x \to 2} \frac{x^3 + 1}{x^2 + 5} = \frac{9}{9} = 1$. Nothing more to do.

The interesting cases are the ones where the quotient law does not apply because the denominator tends to 0. If the
numerator tends to a nonzero number, the quotient blows up (2.3). If both tend to 0, we have a $\frac00$ form,
which can tend to anything; the work is to rewrite the function so that the law applies. The main tricks:

1. **Factor and cancel.** $\lim_{x \to 3} \frac{x^2 - 9}{x^2 - 3x} = \lim_{x \to 3} \frac{(x - 3)(x + 3)}{x(x - 3)} =
   \lim_{x \to 3} \frac{x + 3}{x} = \frac63 = 2$. Cancelling $x - 3$ is legal because $x \ne 3$ throughout.
2. **Expand.** $\lim_{h \to 0} \frac{(2 + h)^3 - 8}{h} = \lim_{h \to 0} \frac{12h + 6h^2 + h^3}{h} = \lim_{h \to 0}
   (12 + 6h + h^2) = 12$. (Check: at $h = 0.01$ the original gives $12.0601$.) This is the slope of $y = x^3$ at
   $x = 2$, the kind of limit Chapter 4 is built on.
3. **Conjugates,** as in 2.1, for square roots.
4. **Common denominators.** $\lim_{x \to 0} \frac1x\left(\frac1{2 + x} - \frac12\right) = \lim_{x \to 0} \frac1x \cdot
   \frac{2 - (2 + x)}{2(2 + x)} = \lim_{x \to 0} \frac{-1}{2(2 + x)} = -\frac14$.

A warning about what the laws do *not* say. If $\lim f$ and $\lim g$ do not exist, $\lim (f + g)$ may still exist:
$\operatorname{sgn}(x) + (-\operatorname{sgn}(x)) = 0$ has limit 0. The laws only run one way: from limits of the
pieces to the limit of the whole.

## 2.3 One-sided and infinite limits

### One-sided limits

Sometimes only one side makes sense, or the two sides disagree. We write

$$
\lim_{x \to a^-} f(x) = L \quad\text{and}\quad \lim_{x \to a^+} f(x) = L
$$

for the **left-hand limit** ($x$ approaches $a$ from below, $x < a$) and the **right-hand limit** ($x > a$). For the
sign function, $\lim_{x \to 0^-} \operatorname{sgn}(x) = -1$ and $\lim_{x \to 0^+} \operatorname{sgn}(x) = 1$.

The connection is simple and worth stating: **$\lim_{x \to a} f(x) = L$ exactly when both one-sided limits exist and
equal $L$.** (One direction: if the values are close to $L$ for all $x$ near $a$, they are for $x$ on each side.
The other: if each side alone can be made close to $L$, take the stricter of the two "close enough" requirements.)

**Worked example.** The **floor** function $\lfloor x \rfloor$ is the largest whole number $\le x$. At $x = 2$,
$\lim_{x \to 2^-} \lfloor x \rfloor = 1$ and $\lim_{x \to 2^+} \lfloor x \rfloor = 2$. No two-sided limit. At
$x = 2.5$, both sides give 2 and the limit is 2.

**Worked example.** $\sqrt x$ is defined only for $x \ge 0$, so at $0$ only the right-hand limit makes sense:
$\lim_{x \to 0^+} \sqrt x = 0$.

### Infinite limits and vertical asymptotes

As $x \to 0^+$, $\frac1x$ takes the values $10, 100, 1000, \ldots$ at $x = 0.1, 0.01, 0.001$: it grows beyond any
bound. We write $\lim_{x \to 0^+} \frac1x = \infty$, and $\lim_{x \to 0^-} \frac1x = -\infty$. Remember this is
shorthand: it says *how* the limit fails to exist, not that it equals a number called infinity. Precisely,
$\lim_{x \to a} f(x) = \infty$ means: **$f(x)$ can be made larger than any number $M$ you choose by taking $x$ close
enough to $a$** ($x \ne a$).

The line $x = a$ is then a **vertical asymptote** of the graph: the curve runs up (or down) alongside it.

**Rule of thumb.** If the numerator tends to a nonzero number and the denominator tends to 0, the quotient blows up;
the sign of the infinity comes from the signs of the pieces. For $\lim_{x \to 3^+} \frac{x + 1}{x - 3}$, the numerator
tends to 4 and the denominator is small and positive, so the limit is $+\infty$; from the left, the denominator is
small and negative, so $-\infty$.

### Limits at infinity

We can also let $x$ itself grow without bound. $\lim_{x \to \infty} f(x) = L$ means **$f(x)$ can be made as close to
$L$ as you want by taking $x$ large enough**. Then $y = L$ is a **horizontal asymptote**.

The basic fact is $\lim_{x \to \infty} \frac1x = 0$, and with it the laws handle rational functions: divide top and
bottom by the highest power of $x$ in the denominator.

**Worked example.**

$$
\lim_{x \to \infty} \frac{3x^2 + 1}{2x^2 - x} = \lim_{x \to \infty} \frac{3 + 1/x^2}{2 - 1/x} = \frac{3 + 0}{2 - 0} = \frac32 .
$$

Check: at $x = 1000$ the function is $1.50075$.

**Worked example.** $\lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right)$. Both terms grow, so this is an
"$\infty - \infty$" form, which can be anything. Use the conjugate:

$$
\sqrt{x^2 + x} - x = \frac{(x^2 + x) - x^2}{\sqrt{x^2 + x} + x} = \frac{x}{\sqrt{x^2 + x} + x} = \frac{1}{\sqrt{1 + 1/x} + 1},
$$

dividing top and bottom by $x$ (for $x > 0$, $\sqrt{x^2 + x}/x = \sqrt{1 + 1/x}$). The limit is $\frac1{1 + 1} =
\frac12$. Check: $x = 1000$ gives $0.49988$. Notice that the answer is not $0$, which is what careless
"$\infty - \infty = 0$" would claim.

The general pattern for rational functions: if the top has lower degree than the bottom, the limit at infinity is 0;
if the degrees are equal, it is the ratio of the leading coefficients; if the top has higher degree, the function
blows up.

## 2.4 The limit of sin x over x

*Level: intermediate.*

Here is a limit that no algebra trick can crack:

$$
\lim_{x \to 0} \frac{\sin x}{x}.
$$

It is a $\frac00$ form, and $\sin x$ is not a polynomial, so there is nothing to factor. A calculator (in radians)
gives $0.998334$ at $x = 0.1$ and $0.99998$ at $x = 0.01$: the limit looks like 1. It is, and this limit is the
foundation of the calculus of sine and cosine (Chapter 5 uses it to find their derivatives). The proof is
geometric, and it needs one new tool.

### The squeeze theorem

> **Squeeze theorem.** If $g(x) \le f(x) \le h(x)$ for all $x$ near $a$ (except possibly at $a$), and
> $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$, then $\lim_{x \to a} f(x) = L$.

The picture: $f$ is trapped between two functions that are both being squeezed to $L$, so $f$ has nowhere else to go.
(Some books call it the sandwich or pinching theorem.) The proof is in 2.6. It is the same logic as the rectangle
sums of Chapter 1, where an area was trapped between lower and upper sums.

**Worked example.** $\lim_{x \to 0} x^2 \sin\frac1x$. The sine factor oscillates wildly, but it stays between $-1$
and $1$, so $-x^2 \le x^2 \sin \frac1x \le x^2$. Both outer functions tend to 0. So the limit is 0. Multiplying by
$x^2$ tamed the oscillation.

### The geometric inequality

We measure angles in **radians**: an angle of $x$ radians at the centre of a circle of radius 1 cuts off an arc of
length $x$. A full turn is $2\pi$ radians. Radians are what makes the limit equal to exactly 1; in degrees it would
be $\frac{\pi}{180}$.

Take $0 < x < \frac\pi2$. In the unit circle (radius 1, centre $O$), let $A = (1, 0)$ and let $P = (\cos x, \sin x)$
be the point at angle $x$. Let $T$ be the point where the line $OP$ meets the vertical tangent line at $A$; by similar
triangles, $T = (1, \tan x)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 240" role="img" aria-label="A quarter of the unit circle centred at O. The blue triangle OAP sits inside the orange sector OAP, which sits inside the green triangle OAT. The height of P above OA is sin x, and the height of T above A is tan x">
  <polygon points="40.0,215.0 220.0,215.0 220.0,63.4" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <path d="M 40.0 215.0 L 220.0 215.0 A 180 180 0 0 0 177.7 99.0 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="40.0,215.0 220.0,215.0 177.7,99.0" fill="#9cc9ea" fill-opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <polyline points="220.0,215.0 219.9,210.7 219.8,206.3 219.5,202.0 219.2,197.6 218.7,193.3 218.1,189.0 217.4,184.7 216.6,180.4 215.8,176.2 214.8,171.9 213.7,167.7 212.5,163.5 211.2,159.4 209.8,155.3 208.3,151.2 206.7,147.1 205.0,143.1 203.2,139.1 201.4,135.2 199.4,131.3 197.3,127.5 195.2,123.7 192.9,120.0 190.6,116.4 188.1,112.7 185.6,109.2 183.0,105.7 180.3,102.3 177.6,98.9 174.7,95.6 171.8,92.4 168.8,89.3 165.7,86.2 162.6,83.2 159.4,80.3 156.1,77.4 152.7,74.7 149.3,72.0 145.8,69.4 142.2,66.9 138.6,64.4 135.0,62.1 131.2,59.8 127.5,57.7 123.6,55.6 119.8,53.6 115.8,51.8 111.9,50.0 107.9,48.3 103.8,46.7 99.7,45.2 95.6,43.8 91.5,42.5 87.3,41.3 83.1,40.2 78.8,39.2 74.6,38.4 70.3,37.6 66.0,36.9 61.7,36.3" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="177.7" y1="99.0" x2="177.7" y2="215.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <line x1="40.0" y1="215.0" x2="220.0" y2="63.4" stroke="currentColor" stroke-width="1.2"/>
  <text x="34.0" y="229.0" font-size="11" text-anchor="middle" fill="currentColor">O</text>
  <text x="228.0" y="229.0" font-size="11" text-anchor="start" fill="currentColor">A</text>
  <text x="228.0" y="67.4" font-size="11" text-anchor="start" fill="currentColor">T</text>
  <text x="173.7" y="91.0" font-size="11" text-anchor="end" fill="currentColor">P</text>
  <text x="172.7" y="171.0" font-size="11" text-anchor="end" fill="currentColor">sin x</text>
  <text x="228.0" y="139.2" font-size="11" text-anchor="start" fill="currentColor">tan x</text>
  <text x="80.0" y="205.0" font-size="12" text-anchor="start" fill="currentColor">x</text>
  <text x="130.0" y="233.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
</svg>
</div>

Three regions sit inside one another:

- the triangle $OAP$, with base $OA = 1$ and height $\sin x$, so area $\tfrac12 \sin x$;
- the circular sector $OAP$, which is the fraction $\frac{x}{2\pi}$ of the whole disc of area $\pi$, so area
  $\tfrac x2$;
- the triangle $OAT$, with base 1 and height $\tan x$, so area $\tfrac12 \tan x$.

Each contains the one before, so

$$
\tfrac12 \sin x < \tfrac12 x < \tfrac12 \tan x .
$$

Multiply by $\frac2{\sin x}$, which is positive for $0 < x < \frac\pi2$:

$$
1 < \frac{x}{\sin x} < \frac{1}{\cos x}, \qquad\text{so}\qquad \cos x < \frac{\sin x}{x} < 1 ,
$$

taking reciprocals (which reverses inequalities between positive numbers).

### The squeeze

For $-\frac\pi2 < x < 0$ the same inequality holds, because $\frac{\sin x}{x}$ and $\cos x$ are both **even**
functions: replacing $x$ by $-x$ does not change them ($\sin(-x) = -\sin x$, and the two minus signs cancel). So
for all $x$ with $0 < |x| < \frac\pi2$,

$$
\cos x < \frac{\sin x}x < 1 .
$$

It remains to see that $\cos x \to 1$ as $x \to 0$. From the first inequality, $0 < \sin x < x$ for small positive
$x$, so $|\sin x| \le |x|$ for all small $x$. Then the half-angle identity $1 - \cos x = 2\sin^2\frac x2$ gives

$$
0 \le 1 - \cos x = 2 \sin^2 \tfrac x2 \le 2 \left(\tfrac x2\right)^2 = \tfrac{x^2}2 ,
$$

and the squeeze theorem gives $\lim_{x \to 0} (1 - \cos x) = 0$, that is, $\lim_{x \to 0} \cos x = 1$. Now squeeze
$\frac{\sin x}x$ between $\cos x$ and $1$:

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1 . \qquad \square
$$

**An honest note.** We used the fact that a sector of angle $x$ has area $\frac x2$, which rests on the area of a
disc being $\pi r^2$ and on the meaning of "arc length". Those are facts of geometry that this chapter takes on
trust. A fully rigorous course defines $\sin$ and $\cos$ by power series (Chapter 13) or via integrals (Chapter 11's
arc length), and then proves this limit without pictures. The picture proof is still the right one to understand
first: it shows *why* the answer is 1.

### Consequences

**Worked example.** $\lim_{x \to 0} \frac{\sin 5x}{x}$. Put $u = 5x$; as $x \to 0$, $u \to 0$. Then
$\frac{\sin 5x}{x} = 5 \cdot \frac{\sin u}{u} \to 5$.

**Worked example.** $\lim_{x \to 0} \frac{\tan x}{x} = \lim_{x \to 0} \frac{\sin x}{x} \cdot \frac1{\cos x} = 1 \cdot 1
= 1$. Check: $1.000033$ at $x = 0.01$.

**Worked example.** $\lim_{x \to 0} \frac{1 - \cos x}{x^2}$. Multiply by the conjugate $1 + \cos x$:

$$
\frac{1 - \cos x}{x^2} = \frac{1 - \cos^2 x}{x^2(1 + \cos x)} = \left(\frac{\sin x}{x}\right)^2 \frac{1}{1 + \cos x} \to 1 \cdot \frac12 = \frac12 .
$$

Check: at $x = 0.01$ the value is $0.4999958$. It follows that $\frac{1 - \cos x}{x} = x \cdot \frac{1 - \cos x}{x^2}
\to 0 \cdot \tfrac12 = 0$. That limit, together with $\frac{\sin x}x \to 1$, is all Chapter 5 needs.

These two limits say something you can see: near $0$, $\sin x \approx x$ and $\cos x \approx 1 - \frac{x^2}2$. For a
pendulum swinging through small angles, replacing $\sin x$ by $x$ is the "small-angle approximation" that physics
uses all the time.

## 2.5 The epsilon-delta definition

*Level: advanced.*

"As close as you want, by taking $x$ close enough" is a good description, but it is not yet something you can prove
things with. In the 1800s mathematicians turned it into a precise challenge-and-response.

Measure closeness by distance: $|f(x) - L|$ is how far $f(x)$ is from $L$, and $|x - a|$ is how far $x$ is from $a$.
Write $\varepsilon$ (the Greek letter epsilon) for the tolerance you demand on the output and $\delta$ (delta) for the
window you allow on the input.

> **Definition.** Let $f$ be defined on an open interval containing $a$, except possibly at $a$ itself. We say
> $\lim_{x \to a} f(x) = L$ if for every $\varepsilon > 0$ there is a $\delta > 0$ such that
>
> for all $x$ with $0 < |x - a| < \delta$, we have $|f(x) - L| < \varepsilon$.

Read it as a game. A sceptic names a tolerance $\varepsilon$, as small as they like: "get $f(x)$ within $0.001$ of $L$."
You must answer with a window $\delta$: "fine, take any $x$ within $\delta$ of $a$." You win if every $x$ in the window
(other than $a$ itself, which is what $0 < |x - a|$ excludes) has $f(x)$ within $\varepsilon$ of $L$. The limit is $L$
when you can win **every** round, whatever $\varepsilon$ the sceptic picks. Usually your $\delta$ depends on
$\varepsilon$: the tighter the demand, the narrower the window.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 250" role="img" aria-label="A rising curve through the point (a, L). An orange horizontal band of half-width epsilon around the height L, and a blue vertical strip of half-width delta around a; inside the blue strip the curve stays inside the orange band">
  <rect x="30" y="115.0" width="310" height="60.0" fill="#eea66f" fill-opacity="0.35"/>
  <rect x="155.8" y="15" width="48.3" height="210" fill="#9cc9ea" fill-opacity="0.45"/>
  <polyline points="40.0,225.0 42.9,225.0 45.9,224.9 48.8,224.7 51.8,224.4 54.7,224.1 57.6,223.7 60.6,223.3 63.5,222.7 66.5,222.1 69.4,221.5 72.3,220.7 75.3,219.9 78.2,219.0 81.2,218.1 84.1,217.1 87.0,216.0 90.0,214.8 92.9,213.6 95.9,212.3 98.8,210.9 101.7,209.4 104.7,207.9 107.6,206.3 110.6,204.7 113.5,202.9 116.4,201.2 119.4,199.3 122.3,197.3 125.3,195.3 128.2,193.2 131.1,191.1 134.1,188.9 137.0,186.6 140.0,184.2 142.9,181.8 145.8,179.3 148.8,176.7 151.7,174.1 154.7,171.3 157.6,168.6 160.5,165.7 163.5,162.8 166.4,159.8 169.4,156.7 172.3,153.6 175.2,150.3 178.2,147.1 181.1,143.7 184.1,140.3 187.0,136.8 189.9,133.2 192.9,129.6 195.8,125.9 198.8,122.1 201.7,118.3 204.6,114.4 207.6,110.4 210.5,106.3 213.5,102.2 216.4,98.0 219.3,93.7 222.3,89.4 225.2,85.0 228.2,80.5 231.1,75.9 234.0,71.3 237.0,66.6 239.9,61.9 242.9,57.0 245.8,52.1 248.7,47.2 251.7,42.1 254.6,37.0 257.6,31.8 260.5,26.6 263.4,21.2" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="30.0" y1="225.0" x2="340.0" y2="225.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40.0" y1="235.0" x2="40.0" y2="10.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="180.0" y1="225.0" x2="180.0" y2="145.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="40.0" y1="145.0" x2="180.0" y2="145.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="180.0" cy="145.0" r="4" fill="#7ccf9a" stroke="currentColor"/>
  <text x="180.0" y="240.0" font-size="11" text-anchor="middle" fill="currentColor">a</text>
  <text x="152.8" y="240.0" font-size="10" text-anchor="end" fill="currentColor">a−δ</text>
  <text x="207.2" y="240.0" font-size="10" text-anchor="start" fill="currentColor">a+δ</text>
  <text x="34.0" y="149.0" font-size="11" text-anchor="end" fill="currentColor">L</text>
  <text x="34.0" y="119.0" font-size="10" text-anchor="end" fill="currentColor">L+ε</text>
  <text x="34.0" y="179.0" font-size="10" text-anchor="end" fill="currentColor">L−ε</text>
  <text x="330.0" y="109.0" font-size="11" text-anchor="end" fill="currentColor">the ε band</text>
  <text x="210.2" y="30.0" font-size="11" text-anchor="start" fill="currentColor">the δ window</text>
</svg>
</div>

In the picture, the $\varepsilon$ demand is a horizontal band around height $L$; the $\delta$ answer is a vertical strip
around $a$; winning means that inside the strip the graph stays inside the band.

### How to find delta: scratch work, then proof

Proving a limit has two stages. First, **scratch work**: start from $|f(x) - L|$, simplify, and see how it is
controlled by $|x - a|$. Second, **the proof**: write it in the forward direction, starting with "let $\varepsilon > 0$".

**Example 1.** Prove $\lim_{x \to 2} (3x + 1) = 7$.

*Scratch work.* $|f(x) - L| = |3x + 1 - 7| = |3x - 6| = 3|x - 2|$. To make this less than $\varepsilon$, we need
$|x - 2| < \frac\varepsilon3$.

*Proof.* Let $\varepsilon > 0$. Take $\delta = \frac\varepsilon3$. If $0 < |x - 2| < \delta$, then
$|(3x + 1) - 7| = 3|x - 2| < 3\delta = \varepsilon$. $\square$

**Check.** With $\varepsilon = 0.003$, $\delta = 0.001$: at $x = 2.0009$, $3x + 1 = 7.0027$, within $0.003$ of 7.

**Example 2.** Prove $\lim_{x \to 3} x^2 = 9$.

*Scratch work.* $|x^2 - 9| = |x - 3|\,|x + 3|$. The factor $|x - 3|$ is what we control; the other factor $|x + 3|$
must be kept from getting large. Trick: first agree to keep $\delta \le 1$. Then $|x - 3| < 1$ means $2 < x < 4$, so
$|x + 3| < 7$. Then $|x^2 - 9| < 7|x - 3|$, and it is enough to have $|x - 3| < \frac\varepsilon7$.

*Proof.* Let $\varepsilon > 0$ and take $\delta = \min\left(1, \frac\varepsilon7\right)$, the smaller of the two numbers.
Suppose $0 < |x - 3| < \delta$. Since $\delta \le 1$, $2 < x < 4$ and so $|x + 3| < 7$. Since $\delta \le
\frac\varepsilon7$,

$$
|x^2 - 9| = |x - 3|\,|x + 3| < \frac\varepsilon7 \cdot 7 = \varepsilon. \qquad \square
$$

The "$\min(1, \ldots)$" device is the standard way to tame a second factor; you will use it again and again.

**Example 3.** Prove $\lim_{x \to 2} \frac1x = \frac12$.

*Scratch work.* $\left|\frac1x - \frac12\right| = \frac{|2 - x|}{2|x|}$. Keep $x$ away from 0: with $|x - 2| < 1$ we
have $x > 1$, so $\frac1{2|x|} < \frac12$, and the whole thing is less than $\frac{|x - 2|}{2}$. That is below
$\varepsilon$ if $|x - 2| < 2\varepsilon$.

*Proof.* Let $\varepsilon > 0$ and $\delta = \min(1, 2\varepsilon)$. If $0 < |x - 2| < \delta$ then $x > 1$ and
$\left|\frac1x - \frac12\right| = \frac{|x - 2|}{2x} < \frac{|x - 2|}2 < \frac{2\varepsilon}2 = \varepsilon$. $\square$

**Example 4.** Prove $\lim_{x \to 4} \sqrt x = 2$.

*Scratch work.* Use the conjugate: $|\sqrt x - 2| = \frac{|x - 4|}{\sqrt x + 2} \le \frac{|x - 4|}{2}$, because the
denominator is at least 2. So $|x - 4| < 2\varepsilon$ is enough. We also need $x \ge 0$ for $\sqrt x$ to exist, so
keep $\delta \le 4$.

*Proof.* Let $\varepsilon > 0$ and $\delta = \min(4, 2\varepsilon)$. If $0 < |x - 4| < \delta$, then $x > 0$ and
$|\sqrt x - 2| = \frac{|x - 4|}{\sqrt x + 2} \le \frac{|x - 4|}{2} < \varepsilon$. $\square$

### Showing a limit does not exist

To prove that the statement "$\lim_{x \to a} f(x) = L$" is **false**, negate it carefully. "For every $\varepsilon$
there is a $\delta$ such that for all $x$ ..." becomes:

> there is an $\varepsilon > 0$ such that for every $\delta > 0$ there is some $x$ with $0 < |x - a| < \delta$ but
> $|f(x) - L| \ge \varepsilon$.

The sceptic wins with one well-chosen tolerance that no window can meet.

**Example 5.** $\lim_{x \to 0} \operatorname{sgn}(x)$ does not exist.

*Proof.* Suppose the limit were some number $L$. Take $\varepsilon = 1$. For any $\delta > 0$, the window contains
$x_1 = \frac\delta2$ with $\operatorname{sgn}(x_1) = 1$ and $x_2 = -\frac\delta2$ with $\operatorname{sgn}(x_2) = -1$.
If both were within 1 of $L$, then by the triangle inequality $2 = |1 - (-1)| \le |1 - L| + |L - (-1)| < 1 + 1 = 2$,
which is absurd. So for every $L$ the sceptic wins with $\varepsilon = 1$. $\square$

The **triangle inequality** used here says $|u + v| \le |u| + |v|$ for all real numbers $u, v$: the distance from
one point to another is at most the distance via a third point. It is the single most useful inequality in analysis.

### Limits must be unique

The definition would be useless if a function could have two different limits at the same point. It cannot.

**Theorem.** If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} f(x) = L'$, then $L = L'$.

*Proof.* Suppose $L \ne L'$ and let $\varepsilon = \frac{|L - L'|}{2} > 0$. There are windows $\delta_1$ and $\delta_2$
that make $f(x)$ within $\varepsilon$ of $L$ and of $L'$ respectively. Take an $x$ with $0 < |x - a| <
\min(\delta_1, \delta_2)$ (one exists, since $f$ is defined near $a$). Then $|L - L'| \le |L - f(x)| + |f(x) - L'| <
2\varepsilon = |L - L'|$, a contradiction. $\square$

### The other kinds of limit, precisely

The same game defines the other limits of 2.3; only the shape of the demand or the window changes.

- $\lim_{x \to a^+} f(x) = L$: as in the definition, but only for $x$ with $a < x < a + \delta$.
- $\lim_{x \to a} f(x) = \infty$: for every $M$ there is $\delta > 0$ such that $0 < |x - a| < \delta$ implies
  $f(x) > M$. For example $\frac1{x^2} > M$ as soon as $|x| < \frac1{\sqrt M}$ (for $M > 0$), so
  $\delta = \frac1{\sqrt M}$ works.
- $\lim_{x \to \infty} f(x) = L$: for every $\varepsilon > 0$ there is $N$ such that $x > N$ implies
  $|f(x) - L| < \varepsilon$. For example $\left|\frac{2x + 1}{x} - 2\right| = \frac1x < \varepsilon$ as soon as
  $x > \frac1\varepsilon$, so $N = \frac1\varepsilon$ works and $\lim_{x \to \infty} \frac{2x + 1}x = 2$.

### History

Newton described his "ultimate ratios" of vanishing quantities, and Leibniz his "infinitely small" differentials,
without ever making either precise. In *The Analyst* (1734), the philosopher George Berkeley mocked the vanishing
increments as "ghosts of departed quantities": the calculation divides by an increment as if it were not zero and then
throws it away as if it were. The criticism was fair, and the results were right anyway, which made the
foundations a puzzle for a century. In the 1700s d'Alembert argued that the notion of limit was the true foundation.
Bernard Bolzano in 1817 and Augustin-Louis Cauchy in his *Cours d'analyse* (1821) made limits and continuity central,
and Cauchy's proofs already contain $\varepsilon$ and $\delta$ arguments in words. The fully quantified definition, with
"for every $\varepsilon$ there exists $\delta$" stated exactly as above, became standard through Karl Weierstrass's
lectures in Berlin in the second half of the 1800s. Berkeley's objection is answered by the definition: we never
divide by zero and never "throw away" anything; we only ask what happens for nonzero $h$ close to zero.

## 2.6 Proving the limit laws

*Level: advanced.*

With the definition in hand, we can prove every law we used in 2.2 and the squeeze theorem of 2.4. Throughout,
$\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$. All the proofs follow one pattern: split the error
$|\text{(combination of } f, g) - \text{(same combination of } L, M)|$ into pieces, each controlled by
$|f(x) - L|$ or $|g(x) - M|$, using the triangle inequality.

**Constants and $x$.** $\lim_{x \to a} c = c$: any $\delta$ works, since $|c - c| = 0$. $\lim_{x \to a} x = a$: take
$\delta = \varepsilon$.

**Sum law.** *Proof.* Let $\varepsilon > 0$. Give each function half the tolerance: there are $\delta_1, \delta_2 > 0$
with $|f(x) - L| < \frac\varepsilon2$ when $0 < |x - a| < \delta_1$ and $|g(x) - M| < \frac\varepsilon2$ when
$0 < |x - a| < \delta_2$. Let $\delta = \min(\delta_1, \delta_2)$. For $0 < |x - a| < \delta$ both hold, and

$$
|(f(x) + g(x)) - (L + M)| \le |f(x) - L| + |g(x) - M| < \tfrac\varepsilon2 + \tfrac\varepsilon2 = \varepsilon. \qquad \square
$$

The "$\frac\varepsilon2$ trick" is legitimate because the definition promises a $\delta$ for *every* positive tolerance,
including $\frac\varepsilon2$.

**Constant multiple.** If $c = 0$ it is trivial. Otherwise choose $\delta$ for the tolerance $\frac{\varepsilon}{|c|}$;
then $|cf(x) - cL| = |c|\,|f(x) - L| < \varepsilon$. $\square$ (The difference law follows: $f - g = f + (-1)g$.)

**A lemma: functions with limits are bounded near the point.** There is $\delta_0 > 0$ such that
$|f(x)| < |L| + 1$ when $0 < |x - a| < \delta_0$. *Proof:* use the definition with $\varepsilon = 1$; then
$|f(x)| \le |f(x) - L| + |L| < 1 + |L|$. $\square$

**Product law.** *Scratch work.* Add and subtract $f(x)M$:

$$
f(x)g(x) - LM = f(x)\big(g(x) - M\big) + M\big(f(x) - L\big).
$$

The first term is small because $g(x) - M$ is small and $f(x)$ stays bounded (by the lemma); the second because
$f(x) - L$ is small.

*Proof.* Let $\varepsilon > 0$ and let $K = |L| + 1$. Choose $\delta_0$ from the lemma, $\delta_1$ so that
$|g(x) - M| < \frac{\varepsilon}{2K}$, and $\delta_2$ so that $|f(x) - L| < \frac{\varepsilon}{2(|M| + 1)}$ (the $+1$
avoids dividing by zero when $M = 0$). For $0 < |x - a| < \min(\delta_0, \delta_1, \delta_2)$,

$$
|f(x)g(x) - LM| \le |f(x)|\,|g(x) - M| + |M|\,|f(x) - L| < K \cdot \frac{\varepsilon}{2K} + |M| \cdot \frac{\varepsilon}{2(|M| + 1)} < \frac\varepsilon2 + \frac\varepsilon2 = \varepsilon. \qquad \square
$$

**Reciprocal law.** If $M \ne 0$, then $\lim_{x \to a} \frac1{g(x)} = \frac1M$.

*Scratch work.* $\left|\frac1{g(x)} - \frac1M\right| = \frac{|g(x) - M|}{|g(x)|\,|M|}$. The top is small. The danger is
the bottom: we must stop $g(x)$ from getting close to 0. Since $g(x) \to M \ne 0$, $g(x)$ eventually stays at least
$\frac{|M|}2$ away from 0.

*Proof.* Choose $\delta_1$ for the tolerance $\frac{|M|}2$: for $0 < |x - a| < \delta_1$, $|g(x) - M| < \frac{|M|}2$, so
$|g(x)| \ge |M| - |g(x) - M| > \frac{|M|}2$. (In particular $g(x) \ne 0$, so $\frac1{g(x)}$ is defined there.) Now let
$\varepsilon > 0$ and choose $\delta_2$ with $|g(x) - M| < \frac{|M|^2 \varepsilon}{2}$. For
$0 < |x - a| < \min(\delta_1, \delta_2)$,

$$
\left|\frac1{g(x)} - \frac1M\right| = \frac{|g(x) - M|}{|g(x)|\,|M|} < \frac{|M|^2 \varepsilon / 2}{(|M|/2)\,|M|} = \varepsilon. \qquad \square
$$

**Quotient law.** $\frac fg = f \cdot \frac1g$, so it follows from the product and reciprocal laws. $\square$

**Squeeze theorem.** *Proof.* Suppose $g(x) \le f(x) \le h(x)$ for $0 < |x - a| < \delta_0$, and $g, h \to L$. Let
$\varepsilon > 0$. Choose $\delta_1, \delta_2$ so that $|g(x) - L| < \varepsilon$ and $|h(x) - L| < \varepsilon$ in their
windows. For $0 < |x - a| < \min(\delta_0, \delta_1, \delta_2)$,

$$
L - \varepsilon < g(x) \le f(x) \le h(x) < L + \varepsilon ,
$$

so $|f(x) - L| < \varepsilon$. $\square$

**Polynomials and rational functions.** By induction on $n$, $\lim_{x \to a} x^n = a^n$: it holds for $n = 1$, and if it
holds for $n$, the product law applied to $x^n \cdot x$ gives it for $n + 1$. Sums and constant multiples then give
$\lim p(x) = p(a)$ for every polynomial, and the quotient law gives $\lim \frac{p(x)}{q(x)} = \frac{p(a)}{q(a)}$ when
$q(a) \ne 0$. Every limit computed in 2.2 is now proved, not merely believed.

**Limits preserve non-strict inequalities.** If $f(x) \le g(x)$ near $a$, then $L \le M$. (*Proof:* if $L > M$, take
$\varepsilon = \frac{L - M}2$; near $a$ we would get $f(x) > L - \varepsilon = M + \varepsilon > g(x)$, a contradiction.)
Strict inequalities can turn into equalities in the limit: $0 < x^2$ for $x \ne 0$, but both sides tend to 0.

## Check yourself

??? question "1. Find $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$ and $\lim_{x \to 9} \frac{\sqrt x - 3}{x - 9}$."

    First: for $x \ne 2$ the fraction is $x + 2$, so the limit is $4$.
    Second: $x - 9 = (\sqrt x - 3)(\sqrt x + 3)$ for $x \ge 0$, so the fraction is $\frac1{\sqrt x + 3} \to \frac16$.
    Check: at $x = 9.01$ the value is $0.16662$, and $\tfrac16 \approx 0.16667$.

??? question "2. Find $\lim_{x \to 0} \frac{\sin 5x}{\sin 2x}$."

    Write it as $\frac{\sin 5x}{5x} \cdot \frac{2x}{\sin 2x} \cdot \frac{5x}{2x}$. The first two factors tend to 1 and
    the last is $\frac52$ for every $x \ne 0$. The limit is $\frac52$. Check: $2.49913$ at $x = 0.01$.

??? question "3. Find both one-sided limits of $\frac{|x|}{x}$ at 0, and of $\frac{x + 1}{x - 3}$ at 3."

    $\frac{|x|}{x} = 1$ for $x > 0$ and $-1$ for $x < 0$: right limit 1, left limit $-1$, no two-sided limit.
    $\frac{x+1}{x-3}$: numerator tends to 4, denominator to 0, positive from the right and negative from the left,
    so $+\infty$ from the right and $-\infty$ from the left. The line $x = 3$ is a vertical asymptote.

??? question "4. Find $\lim_{x \to \infty} \frac{5x^3 - x}{2x^3 + 7}$ and $\lim_{x \to \infty} \frac{x^2 + 1}{x^3}$."

    Divide by $x^3$: $\frac{5 - 1/x^2}{2 + 7/x^3} \to \frac52$. Second: $\frac{1/x + 1/x^3}{1} \to 0$
    (lower degree on top). Check: the first is $2.49994$ at $x = 100$.

??? question "5. Use the squeeze theorem to find $\lim_{x \to 0} x \cos\frac1{x^2}$."

    $-|x| \le x\cos\frac1{x^2} \le |x|$ because $|\cos| \le 1$, and $\pm|x| \to 0$. So the limit is 0.

??? question "6. Find $\lim_{x \to 0} \frac{1 - \cos x}{x \sin x}$."

    Divide top and bottom by $x^2$: $\frac{(1 - \cos x)/x^2}{(\sin x)/x} \to \frac{1/2}{1} = \frac12$.

??? question "7. Prove from the definition that $\lim_{x \to 1} (5x - 2) = 3$."

    Let $\varepsilon > 0$ and take $\delta = \frac\varepsilon5$. If $0 < |x - 1| < \delta$ then
    $|(5x - 2) - 3| = 5|x - 1| < 5\delta = \varepsilon$.

??? question "8. Prove from the definition that $\lim_{x \to 2} x^2 = 4$."

    Scratch: $|x^2 - 4| = |x - 2|\,|x + 2|$, and if $|x - 2| < 1$ then $1 < x < 3$ and $|x + 2| < 5$.
    Proof: let $\varepsilon > 0$, $\delta = \min(1, \frac\varepsilon5)$. If $0 < |x - 2| < \delta$ then
    $|x^2 - 4| < 5 \cdot \frac\varepsilon5 = \varepsilon$.

??? question "9. For $\lim_{x \to 4} \sqrt x = 2$ and $\varepsilon = 0.01$, give a $\delta$ that works, and check it at the edge."

    From Example 4, $\delta = \min(4, 0.02) = 0.02$. At $x = 4.02$: $\sqrt{4.02} \approx 2.004994$, within $0.01$ of 2.
    At $x = 3.98$: $\sqrt{3.98} \approx 1.994994$, also within $0.01$. (In fact $\delta$ could be a little larger;
    the definition only asks for some $\delta$ that works, not the largest.)

??? question "10. Prove that $\lim_{x \to 0} \sin\frac1x$ does not exist."

    Suppose it were $L$. Take $\varepsilon = \tfrac12$. Every window $0 < |x| < \delta$ contains points
    $x = \frac{1}{\pi/2 + 2n\pi}$ (where $\sin\frac1x = 1$) and $x = \frac1{3\pi/2 + 2n\pi}$ (where it is $-1$), for $n$ large.
    Both values would be within $\tfrac12$ of $L$, so $2 = |1 - (-1)| < \tfrac12 + \tfrac12 = 1$, which is false.

??? question "11. Prove: if $\lim_{x \to a} f(x) = L > 0$, then $f(x) > \frac L2$ for all $x \ne a$ close enough to $a$."

    Use the definition with $\varepsilon = \frac L2$: there is $\delta$ with $|f(x) - L| < \frac L2$ for
    $0 < |x - a| < \delta$, and then $f(x) > L - \frac L2 = \frac L2$. (This "positive limits stay positive nearby"
    fact is used constantly, for instance in the reciprocal law and in Chapter 3.)

??? question "12. Prove from the definition that $\lim_{x \to 0^+} \frac1{\sqrt x} = \infty$, and that $\lim_{x \to \infty} \frac{x}{x + 1} = 1$."

    First: given $M > 0$, $\frac1{\sqrt x} > M$ exactly when $0 < x < \frac1{M^2}$, so $\delta = \frac1{M^2}$ works.
    Second: $\left|\frac{x}{x+1} - 1\right| = \frac1{x+1} < \frac1x$ for $x > 0$, so given $\varepsilon > 0$ take
    $N = \frac1\varepsilon$: for $x > N$, the error is less than $\varepsilon$.

## What you learned

- $\lim_{x \to a} f(x) = L$ means $f(x)$ can be made as close to $L$ as you like by taking $x \ne a$ close enough
  to $a$; the value at $a$ plays no part.
- The limit laws turn limits of sums, products and quotients into sums, products and quotients of limits (with a
  nonzero denominator); for polynomials the limit is the value.
- $\frac00$ forms are resolved by factoring, expanding, conjugates or common denominators.
- One-sided limits, infinite limits and limits at infinity describe jumps, vertical asymptotes and horizontal
  asymptotes.
- The squeeze theorem and the picture $\sin x < x < \tan x$ prove $\frac{\sin x}x \to 1$; also $\frac{1 - \cos x}{x^2}
  \to \frac12$.
- The epsilon-delta definition turns "close enough" into a game you must win for every tolerance; it proves the limit
  laws, the squeeze theorem and uniqueness, and answers Berkeley's objection.

**Next:** [Chapter 3](03-Continuity.md) studies the functions whose limits are simply their values: continuity, the
intermediate and extreme value theorems, and bisection.

## Further reading

- M. Spivak, *Calculus* (4th edition, 2008), chapter 5 (limits).
- G. H. Hardy, *A Course of Pure Mathematics* (1908; centenary edition 2008).
- J. V. Grabiner, *The Origins of Cauchy's Rigorous Calculus* (1981).
- G. Berkeley, *The Analyst* (1734), for the objection in its own words.
- S. Abbott, *Understanding Analysis* (2nd edition, 2015), chapter 4.
- On this site: the U of T guides [MAT137, Unit 2: Limits & Continuity](../../uoft/MAT137/unit02.md) and
  [MAT158, Unit 3: Limits](../../uoft/MAT158H1/unit03.md); the Topics lessons
  [Limits](../../topics/change/level-7/01-limits.md) and
  [From secant to tangent](../../topics/change/level-6/03-secant-tangent.md); the algebra book's
  [Chapter 6](../algebra/06-Functions.md) on functions.
