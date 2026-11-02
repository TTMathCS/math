---
title: "The power rule"
---

# The power rule

*Change and motion · level 7, lesson 4 of 6*

## A question to start

Find the derivative of $x^{100}$.

From first principles, you would have to expand $(x + h)^{100}$, which has 101 terms, some with numbers more than
25 digits long. Nobody wants to do that. Yet by the end of this lesson you will be able to write the answer in one
line, $100x^{99}$, and be completely sure it is right, without expanding anything.

A second surprise is waiting in the last lesson's results. The derivatives of $\frac{1}{x}$ and $\sqrt{x}$ look nothing
like the derivative of $x^3$. But they all follow the **same** rule.

## The idea

### The pattern

Here is everything we have found so far, plus the two simplest cases (a constant is a flat line, slope 0; the line
$y = x$ has slope 1):

| $f(x)$ | $1$ | $x$ | $x^2$ | $x^3$ | $x^4$ | $\frac{1}{x} = x^{-1}$ | $\sqrt{x} = x^{1/2}$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $f'(x)$ | $0$ | $1$ | $2x$ | $3x^2$ | $4x^3$ | $-\frac{1}{x^2} = -1\,x^{-2}$ | $\frac{1}{2\sqrt{x}} = \frac12 x^{-1/2}$ |

Every column follows one rule: **bring the power down in front, then lower the power by one.**

$$\frac{d}{dx}\left(x^n\right) = n\,x^{n-1}.$$

This is the **power rule**. Check the last two columns: for $n = -1$, the rule gives $-1 \cdot x^{-2}$; for
$n = \frac12$, it gives $\frac12 x^{-1/2}$. Both match the answers we worked out the long way. Even $x^0 = 1$ fits:
$0 \cdot x^{-1} = 0$.

### Why it works for whole numbers

**Proof for $n = 1, 2, 3, \ldots$** Multiply out $(x + h)^n = (x + h)(x + h)\cdots(x + h)$, with $n$ brackets. Each term
of the answer comes from choosing either $x$ or $h$ from every bracket and multiplying.

- Choose $x$ every time: you get $x^n$. There is one way to do this.
- Choose $h$ from exactly **one** bracket and $x$ from all the others: you get $x^{n-1}h$. There are $n$ ways (which
  bracket gives the $h$?), so together these make $n\,x^{n-1}h$.
- Every other choice takes $h$ from two or more brackets, giving a term with $h^2$, $h^3$, and so on.

So

$$(x + h)^n = x^n + n\,x^{n-1}h + (\text{terms with } h^2 \text{ or higher}).$$

Subtract $x^n$ and divide by $h$:

$$\frac{(x + h)^n - x^n}{h} = n\,x^{n-1} + (\text{terms with } h \text{ or higher}) \;\longrightarrow\; n\,x^{n-1}.$$

That is the power rule. The $n$ in front is just **the number of ways to pick which bracket supplies the $h$**: a
counting fact (see [Counting](../../counting/index.md)). For $x^{100}$, there are 100 brackets, so the answer is
$100x^{99}$, with no need to know any of the other 100 terms.

### Why it works for other powers

The rule holds for **every** real power $n$: negative, fractions, even $x^{\pi}$. You have checked $n = -1$ and
$n = \frac12$ by hand. A proof for all negative whole numbers uses the trick from $\frac{1}{x}$ (try $x^{-2}$ in the
exercises), and a proof for every power at once comes in [level 8](../level-8/index.md), using logarithms and the
chain rule. From now on, use it for any power.

### Three rules that let us do polynomials

**The constant rule.** If $f(x) = c$, then $f'(x) = 0$. Every difference quotient is $\frac{c - c}{h} = 0$. A flat line
has slope 0.

**The constant multiple rule.** $(c\,f)' = c\,f'$. A number in front stays in front:

$$\frac{c\,f(x + h) - c\,f(x)}{h} = c \cdot \frac{f(x + h) - f(x)}{h} \;\longrightarrow\; c\,f'(x).$$

In a picture, multiplying $f$ by 3 stretches the graph upwards by 3, so every rise is 3 times bigger while the runs
stay the same, and every slope is 3 times bigger.

**The sum rule.** $(f + g)' = f' + g'$, and likewise for differences. The difference quotient of $f + g$ splits into
the difference quotient of $f$ plus that of $g$, and the sum law for limits finishes it. In words: if two amounts are
changing, their total changes at the sum of the two rates. If your savings grow by 30 dollars a week and your friend's
by 20 dollars a week, your combined savings grow by 50 dollars a week.

With these, any **polynomial** can be differentiated term by term:

$$\frac{d}{dx}\left(4x^5 - 3x^2 + 7x - 9\right) = 20x^4 - 6x + 7.$$

### Rewrite first, then differentiate

The power rule needs powers of $x$. So rewrite roots and fractions as powers before you start.

| Written as | Rewrite as | Derivative |
| --- | --- | --- |
| $\dfrac{1}{x^3}$ | $x^{-3}$ | $-3x^{-4} = -\dfrac{3}{x^4}$ |
| $\sqrt[3]{x}$ | $x^{1/3}$ | $\frac13 x^{-2/3}$ |
| $\dfrac{5}{\sqrt{x}}$ | $5x^{-1/2}$ | $-\frac52 x^{-3/2}$ |
| $\dfrac{x^2 + 3}{x}$ | $x + 3x^{-1}$ | $1 - 3x^{-2}$ |
| $(x + 2)^2$ | $x^2 + 4x + 4$ | $2x + 4$ |

### A rule that is not there

It is tempting to guess that the derivative of a product is the product of the derivatives. Test it on
$x^2 = x \cdot x$. The guess gives $1 \cdot 1 = 1$, but the truth is $2x$. **Wrong.** There is a product rule, but it is
different, and it is the first lesson of [level 8](../level-8/01-product-quotient-chain.md). Until then, multiply out
first.

### Tangent and normal lines

The **tangent** at $x = a$ has slope $m = f'(a)$. The **normal** is the line through the same point at right angles to
the tangent. Perpendicular lines have slopes that multiply to $-1$, so the normal's slope is $-\frac{1}{m}$ (when
$m \ne 0$). Normals point straight out from a curve, the way light bounces off a curved mirror.

## Worked examples

**1. Roots and fractions.** Differentiate $y = 3\sqrt{x} - \dfrac{2}{x^2} + \dfrac{1}{4x}$.

1. Rewrite: $y = 3x^{1/2} - 2x^{-2} + \frac14 x^{-1}$.
2. Power rule on each term: $y' = \frac32 x^{-1/2} + 4x^{-3} - \frac14 x^{-2}$.
3. Tidy up: $y' = \dfrac{3}{2\sqrt{x}} + \dfrac{4}{x^3} - \dfrac{1}{4x^2}$.

**2. Tangent and normal.** Find the tangent and normal to $y = x^3 - 2x$ at $x = 1$.

1. The point: $y = 1 - 2 = -1$, so $(1, -1)$.
2. Slope: $y' = 3x^2 - 2$, so at $x = 1$ the slope is $1$.
3. Tangent: $y = -1 + 1(x - 1)$, that is $y = x - 2$.
4. Normal: slope $-\frac{1}{1} = -1$, so $y = -1 - (x - 1)$, that is $y = -x$.

**3. A tangent with a given slope.** Where on $y = x^3$ is the tangent parallel to the line $y = 12x + 1$?

1. Parallel means the same slope, 12. So $3x^2 = 12$, $x^2 = 4$, $x = 2$ or $x = -2$.
2. The points are $(2, 8)$ and $(-2, -8)$. Two answers: the curve climbs at the same steepness at both.

**4. The tangent that meets the curve again.** Level 6 noted that the tangent to $y = x^3$ at $(1, 1)$ meets the curve
again at $(-2, -8)$. Now we can prove it.

1. Slope at $x = 1$: $3 \times 1^2 = 3$. Tangent: $y = 1 + 3(x - 1) = 3x - 2$.
2. Where does it meet the curve? Solve $x^3 = 3x - 2$, that is $x^3 - 3x + 2 = 0$.
3. We know $x = 1$ is a solution, and in fact a **double** one (a tangent touches), so $(x - 1)^2$ is a factor:
   $x^3 - 3x + 2 = (x - 1)^2(x + 2)$. Check by expanding: $(x^2 - 2x + 1)(x + 2) = x^3 - 3x + 2$. ✓
4. The other solution is $x = -2$, giving the point $(-2, -8)$. A tangent touches the curve at its point, but it can
   cross the curve somewhere else.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 260" role="img" aria-label="The curve y equals x cubed and its tangent line y equals 3x minus 2 at the point (1, 1). The tangent touches the curve at (1, 1) and crosses it again at (minus 2, minus 8).">
  <line x1="30" y1="81.5" x2="325" y2="81.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="189.8" y1="238" x2="189.8" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="66.9" y1="78.5" x2="66.9" y2="84.5" stroke="currentColor"/><text x="66.9" y="96.5" text-anchor="middle">-2</text><line x1="128.3" y1="78.5" x2="128.3" y2="84.5" stroke="currentColor"/><text x="128.3" y="96.5" text-anchor="middle">-1</text><line x1="251.2" y1="78.5" x2="251.2" y2="84.5" stroke="currentColor"/><text x="251.2" y="96.5" text-anchor="middle">1</text><line x1="312.7" y1="78.5" x2="312.7" y2="84.5" stroke="currentColor"/><text x="312.7" y="96.5" text-anchor="middle">2</text><line x1="186.8" y1="220.6" x2="192.8" y2="220.6" stroke="currentColor"/><text x="183.8" y="224.6" text-anchor="end">-8</text><line x1="186.8" y1="151.1" x2="192.8" y2="151.1" stroke="currentColor"/><text x="183.8" y="155.1" text-anchor="end">-4</text><line x1="186.8" y1="12" x2="192.8" y2="12" stroke="currentColor"/><text x="183.8" y="16" text-anchor="end">4</text><text x="325" y="75.5" text-anchor="end">x</text><text x="195.8" y="22">y</text></g>
  <line x1="45.4" y1="238.9" x2="312.7" y2="12" stroke="#eea66f" stroke-width="2.5"/>
  <polyline points="63.2,233.5 66.9,220.6 70.6,208.5 74.2,197.1 77.9,186.3 81.6,176.3 85.3,166.9 89,158.2 92.7,150.1 96.4,142.6 100.1,135.6 103.8,129.2 107.4,123.4 111.1,118 114.8,113.1 118.5,108.7 122.2,104.7 125.9,101.1 129.6,97.9 133.2,95.1 136.9,92.6 140.6,90.4 144.3,88.6 148,87 151.7,85.7 155.4,84.6 159.1,83.7 162.8,83 166.4,82.5 170.1,82.1 173.8,81.8 177.5,81.7 181.2,81.6 184.9,81.5 188.6,81.5 192.2,81.5 195.9,81.5 199.6,81.5 203.3,81.4 207,81.2 210.7,80.9 214.4,80.4 218.1,79.8 221.7,79.1 225.4,78.1 229.1,77 232.8,75.6 236.5,73.9 240.2,72 243.9,69.7 247.6,67.1 251.2,64.2 254.9,60.8 258.6,57.1 262.3,53 266,48.4 269.7,43.3 273.4,37.8 277.1,31.8 280.8,25.2 284.4,18 288.1,10.3" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="251.2" cy="64.2" r="4.5" fill="currentColor"/>
  <circle cx="66.9" cy="220.6" r="4.5" fill="currentColor"/>
  <text x="259.2" y="76.2" font-size="12" text-anchor="start" fill="currentColor">(1, 1)</text>
  <text x="74.9" y="224.6" font-size="12" text-anchor="start" fill="currentColor">(−2, −8)</text>
  <text x="220.5" y="133.7" font-size="12" text-anchor="start" fill="currentColor">tangent y = 3x − 2</text>
</svg>
</div>

## Try it

1. Differentiate: (a) $x^7$; (b) $5x^4$; (c) $-2x$; (d) $8$.
2. For $f(x) = x^3 - 6x^2 + 9x - 4$, find $f'(x)$, $f'(0)$ and $f'(2)$. What do the signs tell you?
3. Differentiate $y = 6\sqrt{x} + \dfrac{4}{x}$.
4. Differentiate $y = (2x + 3)^2$ (multiply out first).
5. Differentiate $y = \dfrac{x^3 + 2x}{x}$.
6. Find the equation of the tangent to $y = x^2 - 4x + 1$ at $x = 3$.
7. Find the points on $y = x^3 - 3x$ where the tangent is horizontal.
8. (a) Show that the tangent to $y = x^2$ at $x = a$ crosses the $y$-axis at $-a^2$. (b) Use the method of the last
   lesson to prove the power rule for $x^{-2}$ from first principles.

??? note "Answers"
    1. (a) $7x^6$; (b) $20x^3$; (c) $-2$; (d) $0$.
    2. $f'(x) = 3x^2 - 12x + 9$. $f'(0) = 9$ (going up steeply at $x = 0$) and $f'(2) = 12 - 24 + 9 = -3$ (going
       down at $x = 2$).
    3. $y = 6x^{1/2} + 4x^{-1}$, so $y' = 3x^{-1/2} - 4x^{-2} = \dfrac{3}{\sqrt{x}} - \dfrac{4}{x^2}$.
    4. $y = 4x^2 + 12x + 9$, so $y' = 8x + 12$.
    5. For $x \ne 0$, $y = x^2 + 2$, so $y' = 2x$.
    6. $y' = 2x - 4 = 2$ at $x = 3$, and $y = 9 - 12 + 1 = -2$. Tangent: $y = -2 + 2(x - 3)$, so $y = 2x - 8$.
    7. $y' = 3x^2 - 3 = 0$ gives $x = 1$ or $x = -1$. The points are $(1, -2)$ and $(-1, 2)$.
    8. (a) Tangent: $y = a^2 + 2a(x - a) = 2ax - a^2$. At $x = 0$, $y = -a^2$. (b)
       $\dfrac{1}{(x + h)^2} - \dfrac{1}{x^2} = \dfrac{x^2 - (x + h)^2}{x^2(x + h)^2} = \dfrac{-2xh - h^2}{x^2(x + h)^2}$.
       Divide by $h$: $\dfrac{-2x - h}{x^2(x + h)^2} \to \dfrac{-2x}{x^4} = -\dfrac{2}{x^3} = -2x^{-3}$, as the
       power rule says.

## Common mistake

**Lowering a negative power the wrong way.** The derivative of $x^{-2}$ is $-2x^{-3}$, not $-2x^{-1}$. "Lower by one"
means subtract 1: $-2 - 1 = -3$.

**Differentiating $\frac{1}{x^3}$ as $\frac{1}{3x^2}$.** The power rule works on powers of $x$, not on the bottom of a
fraction. Rewrite as $x^{-3}$ first: the answer is $-3x^{-4}$.

## Where it leads

- Back: [The derivative from first principles](03-first-principles.md) · Next: [The derivative as a function](05-derivative-function.md)
- [Level 7 page](index.md) · [Change and motion topic page](../index.md)
- Powers with negative and fraction exponents: [Algebra: exponent laws](../../algebra/level-6/01-exponent-laws.md) and
  [Numbers: zero and negative exponents](../../numbers/level-5/04-zero-negative-exponents.md).
- Products, quotients and functions inside functions: [level 8, lesson 1](../level-8/01-product-quotient-chain.md).
- On the U of T shelf: [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md).
