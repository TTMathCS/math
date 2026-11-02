---
title: "Combining functions"
---

# Combining functions

*Algebra · level 8, lesson 6 of 8*

## A question to start

A jacket costs 100 dollars. The shop offers 20 percent off, and you also have a coupon for 10 dollars off. Does it
matter which the cashier does first?

- 20 percent off first, then the coupon: $0.8 \times 100 - 10 = 70$ dollars.
- Coupon first, then 20 percent off: $0.8 \times (100 - 10) = 72$ dollars.

Two dollars' difference, just from the order! Each discount is a function of the price, and doing one after the other
is a new way to combine functions. Unlike adding, the order matters.

## The idea

### Adding, subtracting, multiplying, dividing

Two functions with the same inputs can be combined output by output:

$$(f + g)(x) = f(x) + g(x), \qquad (f - g)(x) = f(x) - g(x),$$

$$(fg)(x) = f(x)\,g(x), \qquad \left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}.$$

On a graph, $f + g$ is made by **adding the heights** at each $x$. If you earn money from two jobs, your total income
each month is the sum of two functions of time.

**Domain.** A combination only makes sense where **both** $f$ and $g$ are defined, so its domain is the overlap of
the two domains. For $\dfrac{f}{g}$, also remove every $x$ where $g(x) = 0$. Simplifying the formula afterwards does
not give those points back.

### Composition: one function after another

The **composition** $f \circ g$ (read "$f$ after $g$" or "$f$ of $g$") feeds the output of $g$ into $f$:

$$(f \circ g)(x) = f(g(x)).$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 115" role="img" aria-label="A composition machine: x goes into g, the output g(x) goes into f, and f(g(x)) comes out">
  <text x="20" y="64" font-size="15" fill="currentColor" font-style="italic">x</text>
  <line x1="36" y1="59" x2="78" y2="59" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="86,59 76.8,62.9 76.8,55.1" fill="currentColor"/>
  <rect x="90" y="34" width="70" height="50" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="125" y="65" font-size="16" text-anchor="middle" fill="currentColor" font-style="italic">g</text>
  <line x1="160" y1="59" x2="222" y2="59" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="230,59 220.8,62.9 220.8,55.1" fill="currentColor"/>
  <text x="195" y="50" font-size="13" text-anchor="middle" fill="currentColor">g(x)</text>
  <rect x="234" y="34" width="70" height="50" rx="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="269" y="65" font-size="16" text-anchor="middle" fill="currentColor" font-style="italic">f</text>
  <line x1="304" y1="59" x2="346" y2="59" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="354,59 344.8,62.9 344.8,55.1" fill="currentColor"/>
  <text x="360" y="64" font-size="15" fill="currentColor">f(g(x))</text>
  <text x="125" y="104" font-size="11" text-anchor="middle" fill="currentColor">first</text>
  <text x="269" y="104" font-size="11" text-anchor="middle" fill="currentColor">second</text>
</svg>
</div>

$g$ acts **first**, even though it is written second, just as in $\sin(2x)$ you double first and take the sine
second. In the jacket story, with $d(p) = 0.8p$ (discount) and $c(p) = p - 10$ (coupon):

- $c(d(p)) = 0.8p - 10$: discount first. $c(d(100)) = 70$.
- $d(c(p)) = 0.8(p - 10) = 0.8p - 8$: coupon first. $d(c(100)) = 72$.

So $c \circ d \ne d \circ c$. **Composition is not commutative**: the order matters, as it does for putting on socks
and shoes.

### The domain of a composition

For $f(g(x))$ to make sense, two things must hold:

1. $x$ must be in the domain of $g$ (so $g$ can act), and
2. $g(x)$ must be in the domain of $f$ (so $f$ can act on what $g$ gives).

The simplified formula can hide condition 1. For example, with $f(x) = x^2$ and $g(x) = \sqrt{x}$,
$f(g(x)) = \left(\sqrt{x}\right)^2$, which "simplifies" to $x$, but only $x \ge 0$ can go into $g$ in the first place.
So $f \circ g$ is the line $y = x$ for $x \ge 0$ only: half a line.

### Composition and inverses

In level 7 you saw that an inverse undoes a function. Now we can say it precisely: $f$ and $g$ are **inverses** when

$$f(g(x)) = x \quad \text{and} \quad g(f(x)) = x$$

for every $x$ in the right domains. This is the cleanest way to check that you found an inverse correctly.

### Decomposing

Going backwards, you can break a complicated function into a chain of simple ones. $h(x) = (3x - 1)^5$ is "first
$3x - 1$, then the fifth power": $h = f \circ g$ with $g(x) = 3x - 1$ and $f(x) = x^5$. This skill is the key to the
**chain rule** in calculus, which finds how fast a composition changes.

## Worked examples

**1. Arithmetic of functions.** $f(x) = x^2 - 1$ and $g(x) = x + 1$.

- $(f + g)(x) = x^2 + x$.
- $(fg)(x) = (x^2 - 1)(x + 1) = x^3 + x^2 - x - 1$.
- $\left(\dfrac{f}{g}\right)(x) = \dfrac{(x - 1)(x + 1)}{x + 1} = x - 1$, **with $x \ne -1$**: the graph is a line with a
  hole at $(-1, -2)$.

**2. Two orders.** $f(x) = 2x + 3$ and $g(x) = x^2$.

- $f(g(2)) = f(4) = 11$. $g(f(2)) = g(7) = 49$.
- $f(g(x)) = 2x^2 + 3$. $g(f(x)) = (2x + 3)^2 = 4x^2 + 12x + 9$.

**3. Domain of a composition.** $f(x) = \sqrt{x}$ and $g(x) = x - 4$.

- $f(g(x)) = \sqrt{x - 4}$: need $x - 4 \ge 0$, so domain $x \ge 4$.
- $g(f(x)) = \sqrt{x} - 4$: need $x \ge 0$, so domain $x \ge 0$.

**4. A hidden restriction.** $f(x) = \dfrac{1}{x - 2}$ and $g(x) = \sqrt{x}$. Find the domain of $f(g(x))$.

- Condition 1: $x \ge 0$ for $\sqrt{x}$.
- Condition 2: $g(x) \ne 2$ (the input to $f$ cannot be 2), so $\sqrt{x} \ne 2$, so $x \ne 4$.
- $f(g(x)) = \dfrac{1}{\sqrt{x} - 2}$ with domain $x \ge 0$, $x \ne 4$.

**5. A spreading ripple.** A stone dropped in a pond makes a circular ripple whose radius grows at 2 m per second:
$r(t) = 2t$. The area inside is $A(r) = \pi r^2$. Then $A(r(t)) = \pi(2t)^2 = 4\pi t^2$ gives the area directly as a
function of time. After 3 seconds, $A = 36\pi \approx 113$ m².

**6. Decomposing.** Write each as $f(g(x))$.

- $h(x) = (3x - 1)^5$: $g(x) = 3x - 1$, $f(x) = x^5$.
- $k(x) = \sqrt{x^2 + 9}$: $g(x) = x^2 + 9$, $f(x) = \sqrt{x}$.
- $m(x) = 2^{\sin x}$: $g(x) = \sin x$, $f(x) = 2^x$.

## Try it

1. $f(x) = 3x - 1$ and $g(x) = x^2 + 2$. Find $(f + g)(2)$ and $(fg)(-1)$.
2. With the same $f$ and $g$, find $f(g(x))$ and $g(f(x))$.
3. $f(x) = \sqrt{x + 1}$ and $g(x) = \dfrac1x$. Find $f(g(x))$ and $g(f(x))$, each with its domain.
4. Write $h(x) = \dfrac{1}{(x + 5)^2}$ as $f(g(x))$.
5. $f(x) = 2x + 1$. Find a function $g$ with $f(g(x)) = 6x - 5$.
6. Show that $f(x) = \dfrac{x - 1}{2}$ and $g(x) = 2x + 1$ are inverses.
7. $f(x) = x^2 - 9$ and $g(x) = x - 3$. Find $\left(\dfrac{f}{g}\right)(x)$ and its domain.
8. $f(x) = x^2$ and $g(x) = x + 1$. For which $x$ is $f(g(x)) = g(f(x))$?

??? note "Answers"
    1. $f(2) = 5$, $g(2) = 6$, so $(f + g)(2) = 11$. $f(-1) = -4$, $g(-1) = 3$, so $(fg)(-1) = -12$.
    2. $f(g(x)) = 3(x^2 + 2) - 1 = 3x^2 + 5$. $g(f(x)) = (3x - 1)^2 + 2 = 9x^2 - 6x + 3$.
    3. $f(g(x)) = \sqrt{\dfrac1x + 1}$. Need $x \ne 0$ and $\dfrac1x + 1 \ge 0$, that is $\dfrac{1 + x}{x} \ge 0$. A
       sign chart with critical numbers $-1$ and 0 gives $x \le -1$ or $x > 0$. And $g(f(x)) = \dfrac{1}{\sqrt{x + 1}}$:
       need $x + 1 \ge 0$ and $\sqrt{x + 1} \ne 0$, so $x > -1$.
    4. $g(x) = x + 5$ and $f(x) = \dfrac{1}{x^2}$. (Another answer: $g(x) = (x + 5)^2$ and $f(x) = \dfrac1x$.)
    5. $2g(x) + 1 = 6x - 5$, so $2g(x) = 6x - 6$, so $g(x) = 3x - 3$.
    6. $f(g(x)) = \dfrac{(2x + 1) - 1}{2} = x$ and $g(f(x)) = 2 \cdot \dfrac{x - 1}{2} + 1 = x$. Both give $x$, so they
       are inverses.
    7. $\dfrac{(x - 3)(x + 3)}{x - 3} = x + 3$, with domain $x \ne 3$.
    8. $(x + 1)^2 = x^2 + 1$, so $x^2 + 2x + 1 = x^2 + 1$, so $2x = 0$, so $x = 0$ only. (Check: $f(g(0)) = 1$ and
       $g(f(0)) = 1$.)

## Common mistake

**Doing the functions in the written order.** In $f(g(x))$ the inner function $g$ acts first. Read from the inside
out.

**Confusing composition with multiplication.** $f(g(x))$ is not $f(x) \cdot g(x)$. With $f(x) = x^2$ and
$g(x) = x + 1$: $f(g(x)) = (x + 1)^2$, but $f(x)g(x) = x^3 + x^2$.

**Finding the domain from the simplified formula.** Always check both conditions on the original pieces, as in
example 4.

## Where it leads

- Back: [Exponential and logarithmic equations](05-exp-log-equations.md) · Next: [Trigonometric identities and
  equations](07-trig-identities-equations.md).
- [Level 8 page](index.md) · [Algebra topic page](../index.md)
- Functions, domain and range: [Functions](../level-7/04-functions.md). Inverses: [Inverse
  functions](../level-7/06-inverse-functions.md). Transformations are compositions with simple functions:
  [Transformations of functions](../level-7/05-transformations.md).
- Composing transformations of shapes, like a reflection after a rotation: [Transformations on a
  grid](../../geometry/level-5/03-transformations-grid.md).
- The chain rule for compositions: [Change](../../change/index.md), and [MAT137 Unit 3
  (derivatives)](../../../uoft/MAT137/unit03.md). At university, linear maps compose like functions, and that is matrix
  multiplication: [MAT240 Unit 4 (linear transformations)](../../../uoft/MAT240H1/unit04.md).
