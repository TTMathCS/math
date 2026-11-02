---
title: "Infinitely small"
---

# Infinitely small

*Infinity and strange math · level 8, lesson 6 of 7*

## A question to start

Is there a positive number smaller than every fraction $\tfrac12, \tfrac13, \tfrac14, \ldots$? A number bigger than 0
but smaller than $\tfrac1{1000}$, smaller than $\tfrac1{1\,000\,000}$, smaller than $\tfrac1n$ for **every** $n$?

Gottfried Wilhelm Leibniz, one of the two inventors of calculus, said yes, and built calculus on such "infinitely
small" numbers. A bishop called George Berkeley mocked them as "ghosts of departed quantities". Mathematicians of the
1800s threw them out and rebuilt calculus with limits. Then, in the 1960s, Abraham Robinson brought them back,
completely rigorous.

So which is it? Do infinitely small numbers exist or not? The honest answer is: **in the real numbers, no; in a larger
number system, yes**, and this lesson shows both.

## The idea

### Leibniz's infinitesimals

Leibniz (in papers from the 1680s) wrote $dx$ for an **infinitesimal** change in $x$: a quantity greater than zero
but smaller than any ordinary positive number. To find the slope of $y = x^2$ at a point, he let $x$ grow by $dx$, so
$y$ grows by

$$dy = (x + dx)^2 - x^2 = 2x\,dx + (dx)^2.$$

Dividing by $dx$:

$$\frac{dy}{dx} = 2x + dx.$$

Then, since $dx$ is infinitely small, he **dropped** it, leaving the slope $2x$. The answer is right. The method made
calculus easy to use, and Leibniz's notation $\tfrac{dy}{dx}$ is still used everywhere today. Isaac Newton's version
used "fluxions" and vanishing increments, with the same idea underneath.

### Berkeley's objection

In 1734 Berkeley published a pamphlet, *The Analyst*, attacking the logic. In the calculation above, $dx$ is treated
as **not zero** (otherwise you could not divide by it) and then as **zero** (so that it can be thrown away). It cannot
be both. Berkeley called these increments, neither something nor nothing, "the ghosts of departed quantities".

He was right that there was a gap. Calculus worked spectacularly well, but for more than a century nobody could say
exactly what $dx$ was.

### Limits replace infinitesimals

The 1800s answer, from Cauchy, Bolzano and Weierstrass, was to never use a nonzero quantity that is "also zero".
Instead, use an ordinary number $h \ne 0$ and take a **limit** (lesson 1):

$$\frac{(x + h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h \qquad (h \ne 0),$$

and then

$$\lim_{h \to 0} (2x + h) = 2x.$$

Dividing by $h$ is fine, because $h$ is never zero. Removing the extra $h$ is fine too, because a limit is about what
happens as $h$ gets close to 0, made exact by $\varepsilon$ and $\delta$. Nothing is both zero and not zero. This is
how calculus is taught today.

### The real numbers have no infinitesimals

In fact the limit approach had no choice, because the real numbers simply do not contain any infinitesimals.

**Archimedean property.** For every real number $\varepsilon > 0$ there is a counting number $n$ with $\tfrac1n <
\varepsilon$.

**Why.** Suppose instead that some $\varepsilon > 0$ had $\tfrac1n \ge \varepsilon$ for every $n$. Then $n \le
\tfrac1\varepsilon$ for every $n$: the counting numbers would all lie below the fixed number $\tfrac1\varepsilon$. By
completeness of the reals (the property from lesson 2), a set of reals with a ceiling has a **least** ceiling; call it
$M$. Then $M - 1$ is not a ceiling, so some counting number $n > M - 1$. But then $n + 1 > M$, and $n + 1$ is a
counting number above the ceiling. Contradiction. ∎

So no positive real number is smaller than every $\tfrac1n$. Within $\mathbb{R}$, Berkeley wins: there are no ghosts.

### Robinson's hyperreal numbers

In the 1960s the logician Abraham Robinson asked a different question: is there a **larger** number system, containing
all the real numbers, that also contains infinitesimals and in which everything still works? He showed that there is,
and his book *Non-standard Analysis* appeared in 1966.

The new system is called the **hyperreal numbers**, written ${}^*\mathbb{R}$. It contains:

- all the ordinary real numbers;
- **infinitesimals**: numbers $\varepsilon$ with $0 < \varepsilon < \tfrac1n$ for every counting number $n$;
- **infinite** numbers: $H = \tfrac1\varepsilon$, bigger than every counting number;
- all their sums, products and so on, such as $3 + \varepsilon$ or $H^2 - 7$.

(It escapes the Archimedean property because that property is about **counting numbers**, and in ${}^*\mathbb{R}$ there
are also infinite "hyper-counting numbers" like $H$; the property survives in the form "for every $\varepsilon > 0$
there is a hyper-counting number $N$ with $\tfrac1N < \varepsilon$".)

Two ideas make it work.

- **The transfer principle.** Every statement of a certain basic logical form (first-order statements) that is true
  of the real numbers is also true of the hyperreals. So the usual algebra still holds: $a + b = b + a$, fractions
  work, and so on. This is what took Robinson's logic to prove; it is why the system does not fall apart.
- **The standard part.** Every hyperreal that is not infinite is **infinitely close** to exactly one real number, called
  its **standard part**, written $\operatorname{st}$. For example $\operatorname{st}(3 + \varepsilon) = 3$ and
  $\operatorname{st}(2x + \varepsilon) = 2x$ for a real $x$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 190" role="img" aria-label="A number line with the point x marked; a magnifying circle above it shows that, enlarged infinitely, x and x plus epsilon are two separate points">
  <line x1="10" y1="160" x2="350" y2="160" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="154" x2="40" y2="166" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="182" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="140" y1="154" x2="140" y2="166" stroke="currentColor" stroke-width="1.5"/>
  <text x="140" y="182" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <line x1="240" y1="154" x2="240" y2="166" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="182" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="190" cy="160" r="4" fill="#eea66f"/>
  <text x="190" y="182" font-size="12" text-anchor="middle" fill="currentColor">x</text>
  <circle cx="190" cy="160" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="196" y1="153" x2="225" y2="112" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="199" y1="160" x2="248" y2="124" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="260" cy="70" r="55" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
  <line x1="209" y1="70" x2="311" y2="70" stroke="currentColor" stroke-width="2"/>
  <circle cx="238" cy="70" r="4" fill="#eea66f"/>
  <circle cx="282" cy="70" r="4" fill="#7ccf9a"/>
  <text x="238" y="92" font-size="12" text-anchor="middle" fill="currentColor">x</text>
  <text x="282" y="92" font-size="12" text-anchor="middle" fill="currentColor">x + ε</text>
  <text x="260" y="40" font-size="11" text-anchor="middle" fill="currentColor">infinite zoom</text>
</svg>
</div>

Now Leibniz's calculation becomes exactly correct. With a nonzero infinitesimal $\varepsilon$:

$$\frac{(x + \varepsilon)^2 - x^2}{\varepsilon} = 2x + \varepsilon, \qquad \frac{dy}{dx} = \operatorname{st}(2x + \varepsilon)
= 2x.$$

"Dropping the $dx$" is no longer a guilty trick; it is taking the standard part, a precise operation. The infinitesimal
is never zero, and nothing is set equal to zero. Berkeley's objection is answered.

Building ${}^*\mathbb{R}$ needs advanced tools from logic and set theory (one construction uses infinite sequences of
reals and an object called an ultrafilter, which needs the axiom of choice). But using it is easy, and in the 1970s
H. Jerome Keisler wrote a first-year calculus textbook entirely in infinitesimals. Every theorem proved this way can
also be proved with limits, and the other way round; the two approaches are equally rigorous, and the choice between
them is about convenience and taste.

### A simpler cousin: numbers with $\varepsilon^2 = 0$

There is a much simpler system that captures part of Leibniz's idea. The **dual numbers** are expressions $a +
b\varepsilon$, with the rule $\varepsilon^2 = 0$ (and $\varepsilon \ne 0$). They are not ordered like the hyperreals,
so $\varepsilon$ is not "small" in any sense, but they compute derivatives automatically:

$$(x + \varepsilon)^2 = x^2 + 2x\varepsilon + \varepsilon^2 = x^2 + 2x\,\varepsilon.$$

The number in front of $\varepsilon$ is the derivative. Computers use exactly this trick, called **automatic
differentiation**, to compute derivatives in science and machine learning.

## Worked examples

**1. Leibniz's way for $y = x^3$.** $dy = (x + dx)^3 - x^3 = 3x^2\,dx + 3x\,(dx)^2 + (dx)^3$. Dividing by $dx$:
$\tfrac{dy}{dx} = 3x^2 + 3x\,dx + (dx)^2$. Drop the terms with $dx$: $3x^2$.

**2. The same with a limit.** For $h \ne 0$, $\dfrac{(x+h)^3 - x^3}{h} = 3x^2 + 3xh + h^2$. As $h \to 0$ the last two
terms tend to 0, so the limit is $3x^2$.

**3. The Archimedean property in numbers.** Find $n$ with $\tfrac1n < 0.0003$. We need $n > \tfrac{1}{0.0003} =
3333.3\ldots$, so $n = 3334$ works: $\tfrac1{3334} \approx 0.00029994$.

**4. Dual numbers.** Find the derivative of $f(x) = x^2 + 3x$ at $x = 2$. Compute $f(2 + \varepsilon) = (2 +
\varepsilon)^2 + 3(2 + \varepsilon) = 4 + 4\varepsilon + 6 + 3\varepsilon = 10 + 7\varepsilon$ (using $\varepsilon^2 =
0$). The derivative is 7. Check: $f'(x) = 2x + 3$, and $f'(2) = 7$. ✓

**5. Standard parts.** Let $\varepsilon$ be a positive infinitesimal and $H = \tfrac1\varepsilon$. Find
$\operatorname{st}\left(\tfrac{H}{H + 1}\right)$. Divide top and bottom by $H$: $\tfrac{1}{1 + \varepsilon}$. This is
infinitely close to 1 (the difference $\tfrac{\varepsilon}{1 + \varepsilon}$ is infinitesimal), so the standard part is
1. Compare: $\lim_{n \to \infty} \tfrac{n}{n+1} = 1$.

## Try it

1. Use Leibniz's method to find the slope of $y = 5x^2$.
2. Do the same with a limit, writing $h$ instead of $dx$.
3. Find a counting number $n$ with $\tfrac1n < 0.00001$.
4. Use dual numbers to find the derivative of $x^3$ at $x = 1$.
5. Let $\varepsilon$ be a positive infinitesimal. Find $\operatorname{st}(3 + \varepsilon^2)$ and
   $\operatorname{st}\left(\tfrac{6\varepsilon + \varepsilon^2}{\varepsilon}\right)$.
6. Let $H$ be an infinite hyperreal. Find $\operatorname{st}\left(\tfrac{2H + 1}{H - 3}\right)$.
7. Explain Berkeley's objection in your own words, and say how the limit method avoids it.
8. Challenge: is there a largest infinitesimal? (Hint: if $\varepsilon$ is infinitesimal, what about $2\varepsilon$?)

??? note "Answers"
    1. $dy = 5(x + dx)^2 - 5x^2 = 10x\,dx + 5(dx)^2$. Divide by $dx$: $10x + 5\,dx$. Drop $dx$: slope $10x$.
    2. For $h \ne 0$, $\dfrac{5(x+h)^2 - 5x^2}{h} = \dfrac{10xh + 5h^2}{h} = 10x + 5h$, and
       $\lim_{h \to 0}(10x + 5h) = 10x$.
    3. Any $n > 100\,000$, for example $n = 100\,001$.
    4. $(1 + \varepsilon)^3 = 1 + 3\varepsilon + 3\varepsilon^2 + \varepsilon^3 = 1 + 3\varepsilon$, since
       $\varepsilon^2 = 0$ and so $\varepsilon^3 = 0$ too. The derivative is 3. Check: $3x^2 = 3$ at $x = 1$. ✓
    5. $\varepsilon^2$ is infinitesimal (even smaller than $\varepsilon$), so $\operatorname{st}(3 + \varepsilon^2) =
       3$. And $\tfrac{6\varepsilon + \varepsilon^2}{\varepsilon} = 6 + \varepsilon$, whose standard part is 6.
    6. Divide top and bottom by $H$: $\dfrac{2 + 1/H}{1 - 3/H}$. Since $\tfrac1H$ is infinitesimal, this is infinitely
       close to $\tfrac21 = 2$. The standard part is 2.
    7. Leibniz divided by $dx$, which needs $dx \ne 0$, and then threw $dx$ away as if $dx = 0$. A quantity cannot be
       both. The limit method uses $h \ne 0$ throughout, so the division is legal, and then asks what number the
       expression approaches as $h$ gets close to 0, without ever setting $h = 0$.
    8. **No.** If $\varepsilon$ is a positive infinitesimal, then $2\varepsilon$ is bigger. And $2\varepsilon$ is still
       infinitesimal: for every $n$, $\varepsilon < \tfrac{1}{2n}$, so $2\varepsilon < \tfrac1n$. So no infinitesimal is
       the largest, just as there is no smallest positive real.

## Common mistake

**"Infinitesimals were wrong, so Leibniz was wrong."** His answers were right; his justification was incomplete. Two
different repairs exist: limits (1800s) and non-standard analysis (1960s). Both are rigorous.

**Thinking an infinitesimal is a real number very close to 0.** Every positive real number, however small, is bigger
than some $\tfrac1n$. An infinitesimal is smaller than all of them, so it cannot be a real number; it lives only in a
larger system like ${}^*\mathbb{R}$.

## Where it leads

- Previous: [Ordinals and cardinals](05-ordinals-cardinals.md). Next: [The point at infinity](07-point-at-infinity.md),
  where infinity becomes a place you can draw.
- [Level 8 page](index.md) · [Infinity topic page](../index.md) · The $\varepsilon$-$\delta$ definition that replaced
  infinitesimals: [The formal definition of a limit](01-limit-definition.md).
- Derivatives, slopes and instant speed: [Change](../../change/index.md), especially
  [shrinking the interval](../../change/level-6/02-shrinking-interval.md).
- On the U of T shelf: derivatives defined by limits in [MAT137 Unit 3](../../../uoft/MAT137/unit03.md), and least upper
  bounds and the Archimedean property in [MAT158 Unit 2](../../../uoft/MAT158H1/unit02.md).
