---
title: "The product, quotient and chain rules"
---

# The product, quotient and chain rules

*Change and motion · level 8, lesson 1 of 7*

## A question to start

A rectangle is 4 cm wide and 5 cm tall. Its width is growing at 2 cm per second and its height at 3 cm per second.

**How fast is its area growing?**

The tempting answer is $2 \times 3 = 6$ cm² per second. But that cannot be right. A rectangle 100 cm tall whose width
grows by 2 cm gains a strip of 200 cm², not 6. The rate at which the area grows must depend on how big the rectangle
already is. The correct answer, 22 cm² per second, comes from the **product rule**, and the picture that proves it is
the rectangle itself.

## The idea

The power rule and the sum rule ([level 7](../level-7/04-power-rule.md)) handle polynomials. Most functions are built
in three other ways: by **multiplying** two functions, by **dividing** one by another, and by putting one function
**inside** another. Each has its own rule.

### The product rule, from a growing rectangle

Let $u = f(x)$ and $v = g(x)$ be two functions of $x$, and draw a rectangle with width $u$ and height $v$. Its area is
$A = uv$, the product. Now nudge $x$ by a small amount $h$. The width grows by $\Delta u = f(x + h) - f(x)$ and the
height by $\Delta v = g(x + h) - g(x)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 230" role="img" aria-label="A rectangle of width u and height v, area u v. When u grows by delta u and v grows by delta v, three new pieces are added: a strip on the right of area v delta u, a strip on top of area u delta v, and a tiny corner square of area delta u times delta v.">
  <rect x="40" y="70" width="220" height="130" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="260" y="70" width="50" height="130" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <rect x="40" y="30" width="220" height="40" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <rect x="260" y="30" width="50" height="40" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" fill="currentColor"><text x="150.0" y="140.0" text-anchor="middle" font-size="15">uv</text><text x="285.0" y="140.0" text-anchor="middle">vΔu</text><text x="150.0" y="55.0" text-anchor="middle">uΔv</text><text x="285.0" y="55.0" text-anchor="middle" font-size="11">ΔuΔv</text><text x="150.0" y="218" text-anchor="middle">u</text><text x="285.0" y="218" text-anchor="middle">Δu</text><text x="32" y="140.0" text-anchor="end">v</text><text x="32" y="55.0" text-anchor="end">Δv</text></g>
</svg>
</div>

The new area is the old rectangle plus three new pieces:

$$\Delta A = v\,\Delta u + u\,\Delta v + \Delta u\,\Delta v.$$

Divide by $h$:

$$\frac{\Delta A}{h} = v\,\frac{\Delta u}{h} + u\,\frac{\Delta v}{h} + \frac{\Delta u}{h}\,\Delta v.$$

Now let $h \to 0$. The fractions $\frac{\Delta u}{h}$ and $\frac{\Delta v}{h}$ tend to $u'$ and $v'$. In the last term,
$\frac{\Delta u}{h} \to u'$ but $\Delta v \to 0$ (a differentiable function is continuous), so the whole corner piece
vanishes. That leaves

$$(uv)' = u'v + uv'.$$

**The product rule: derivative of the first times the second, plus the first times the derivative of the second.**

The picture explains it. The area grows along the right edge (height $v$, growing sideways at rate $u'$) and along the
top edge (width $u$, growing upwards at rate $v'$). The tiny corner square is "small times small" and disappears in the
limit. That is also why the naive guess $u'v'$ is wrong: $u'v'$ only measures the corner.

Check with $x^2 = x \cdot x$: $(x \cdot x)' = 1 \cdot x + x \cdot 1 = 2x$. ✓

The rectangle in the question: $u = 4$, $u' = 2$, $v = 5$, $v' = 3$. So $A' = 2 \times 5 + 4 \times 3 = 22$ cm²/s.

### The quotient rule

For $q = \dfrac{f}{g}$ (where $g \ne 0$), we can let the product rule do the work. Write $f = q\,g$ and differentiate
both sides with the product rule (assuming for now that $q$ has a derivative, which a full proof also checks):

$$f' = q'g + qg' \quad\Longrightarrow\quad q' = \frac{f' - qg'}{g} = \frac{f' - \frac{f}{g}g'}{g} = \frac{f'g - fg'}{g^2}.$$

$$\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}.$$

The order matters, because of the minus sign. A rhyme many students use: "**low d-high minus high d-low, over low
squared**" (low = bottom, high = top, "d" = derivative of).

### The chain rule: rates multiply

Now a function inside a function, like $y = (x^2 + 1)^{50}$. There is an **inside** function $u = x^2 + 1$ and an
**outside** function $y = u^{50}$.

Think of gears. If the big gear $y$ turns 3 times as fast as the middle gear $u$, and $u$ turns 2 times as fast as
the small gear $x$, then $y$ turns $3 \times 2 = 6$ times as fast as $x$. **Rates of change multiply along a chain.**
In Leibniz's notation this looks almost like cancelling fractions:

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}.$$

Written with function names, for $y = f\big(g(x)\big)$:

$$\Big(f\big(g(x)\big)\Big)' = f'\big(g(x)\big) \cdot g'(x).$$

**The chain rule: differentiate the outside (leaving the inside alone), then multiply by the derivative of the
inside.**

**Why.** Nudge $x$ by $h$; then $u$ changes by $\Delta u$ and $y$ by $\Delta y$. As long as $\Delta u \ne 0$,

$$\frac{\Delta y}{h} = \frac{\Delta y}{\Delta u} \cdot \frac{\Delta u}{h}.$$

As $h \to 0$, $\Delta u \to 0$ too, so the first fraction tends to $\frac{dy}{du}$ and the second to $\frac{du}{dx}$.
(A careful proof also handles functions where $\Delta u$ keeps hitting 0; that small repair is done on the U of T
shelf. The idea is exactly this.)

For $(x^2 + 1)^{50}$: outside $u^{50}$ has derivative $50u^{49}$; inside $x^2 + 1$ has derivative $2x$. So

$$\frac{d}{dx}(x^2 + 1)^{50} = 50(x^2 + 1)^{49} \cdot 2x = 100x(x^2 + 1)^{49}.$$

No expansion of a 51-term polynomial needed.

### Bonus: the power rule for roots

The chain rule proves the power rule for $x^{1/n}$. Let $y = x^{1/n}$, so $y^n = x$. Differentiate both sides with
respect to $x$, using the chain rule on the left (the inside is $y$):

$$n y^{n-1} \cdot y' = 1 \quad\Longrightarrow\quad y' = \frac{1}{n y^{n-1}} = \frac{1}{n}\,x^{-(n-1)/n} = \frac{1}{n}\,x^{\frac1n - 1}.$$

This is the power rule with power $\frac1n$. Differentiating an equation like this, instead of solving for $y$ first,
is called **implicit differentiation**, and it is the engine of [related rates](05-related-rates.md).

### Which rule first?

Look at the **last** operation you would do if you were working out the value with a calculator.

- $x^2(2x - 1)^3$: the last step is multiplying, so start with the **product** rule.
- $\dfrac{x}{x^2 + 1}$: the last step is dividing: **quotient** rule.
- $\sqrt{1 + x^2}$: the last step is the square root of something: **chain** rule.

Inside each, you may need another rule. That is normal: real derivatives are rules inside rules.

## Worked examples

**1. Product.** Differentiate $y = (3x^2 + 1)(x^3 - 2x)$.

1. $u = 3x^2 + 1$, $u' = 6x$; $v = x^3 - 2x$, $v' = 3x^2 - 2$.
2. $y' = 6x(x^3 - 2x) + (3x^2 + 1)(3x^2 - 2)$.
3. Expand: $6x^4 - 12x^2 + 9x^4 - 6x^2 + 3x^2 - 2 = 15x^4 - 15x^2 - 2$.
4. Check by multiplying out first: $y = 3x^5 - 5x^3 - 2x$, so $y' = 15x^4 - 15x^2 - 2$. ✓

**2. Quotient.** Differentiate $y = \dfrac{x}{x^2 + 1}$, and find where its tangent is flat.

1. Top $f = x$, $f' = 1$. Bottom $g = x^2 + 1$, $g' = 2x$.
2. $y' = \dfrac{1 \cdot (x^2 + 1) - x \cdot 2x}{(x^2 + 1)^2} = \dfrac{1 - x^2}{(x^2 + 1)^2}$.
3. Flat where the top is 0: $x = 1$ and $x = -1$, at the points $\left(1, \frac12\right)$ and $\left(-1, -\frac12\right)$.

**3. Chain.** Differentiate $y = \sqrt{1 + x^2}$.

Outside: $\sqrt{u} = u^{1/2}$, derivative $\frac12 u^{-1/2}$. Inside: $1 + x^2$, derivative $2x$.

$$y' = \frac{1}{2\sqrt{1 + x^2}} \cdot 2x = \frac{x}{\sqrt{1 + x^2}}.$$

**4. Product and chain together.** Differentiate $y = x^2(2x - 1)^3$.

1. Product rule with $u = x^2$ and $v = (2x - 1)^3$.
2. $v'$ needs the chain rule: $3(2x - 1)^2 \cdot 2 = 6(2x - 1)^2$.
3. $y' = 2x(2x - 1)^3 + x^2 \cdot 6(2x - 1)^2$.
4. Take out the common factor $2x(2x - 1)^2$: $y' = 2x(2x - 1)^2\big[(2x - 1) + 3x\big] = 2x(2x - 1)^2(5x - 1)$.

Factoring the answer is worth the effort: now you can see at once that the tangent is flat at $x = 0$, $\frac12$ and
$\frac15$.

**5. A power of a bracket underneath.** Differentiate $y = \dfrac{1}{(x^2 + 4)^3}$.

No need for the quotient rule: write $y = (x^2 + 4)^{-3}$. Chain rule:
$y' = -3(x^2 + 4)^{-4} \cdot 2x = \dfrac{-6x}{(x^2 + 4)^4}$.

## Try it

1. Use the product rule on $x^2 \cdot x^3$, and check your answer with the power rule.
2. Differentiate $y = (2x + 1)(x^2 - 3)$.
3. Differentiate $y = \dfrac{x + 1}{x - 1}$.
4. Differentiate $y = (5x - 2)^4$.
5. Differentiate $y = \sqrt{3x^2 + 1}$.
6. Differentiate $y = x\sqrt{x + 1}$ and write the answer as a single fraction.
7. Differentiate $y = \dfrac{x^2}{(x + 1)^2}$ and simplify.
8. A rectangle is 10 cm wide and 6 cm tall. The width is **shrinking** at 1 cm/s and the height is growing at
   2 cm/s. Is the area growing or shrinking, and how fast?

??? note "Answers"
    1. $2x \cdot x^3 + x^2 \cdot 3x^2 = 2x^4 + 3x^4 = 5x^4$. And $x^2 \cdot x^3 = x^5$, whose derivative is $5x^4$. ✓
    2. $2(x^2 - 3) + (2x + 1)(2x) = 2x^2 - 6 + 4x^2 + 2x = 6x^2 + 2x - 6$.
    3. $\dfrac{1 \cdot (x - 1) - (x + 1) \cdot 1}{(x - 1)^2} = \dfrac{-2}{(x - 1)^2}$. Always negative: the graph
       goes downhill on both sides of $x = 1$.
    4. $4(5x - 2)^3 \cdot 5 = 20(5x - 2)^3$.
    5. $\dfrac{1}{2\sqrt{3x^2 + 1}} \cdot 6x = \dfrac{3x}{\sqrt{3x^2 + 1}}$.
    6. $\sqrt{x + 1} + x \cdot \dfrac{1}{2\sqrt{x + 1}} = \dfrac{2(x + 1) + x}{2\sqrt{x + 1}} = \dfrac{3x + 2}{2\sqrt{x + 1}}$.
    7. $\dfrac{2x(x + 1)^2 - x^2 \cdot 2(x + 1)}{(x + 1)^4}$. Cancel one factor of $(x + 1)$:
       $\dfrac{2x(x + 1) - 2x^2}{(x + 1)^3} = \dfrac{2x}{(x + 1)^3}$.
    8. $u = 10$, $u' = -1$, $v = 6$, $v' = 2$. $A' = (-1)(6) + (10)(2) = 14$ cm²/s: **growing**, at 14 cm² per second,
       even though one side is shrinking.

## Common mistake

**Forgetting the inside derivative.** $\frac{d}{dx}(5x - 2)^4$ is not $4(5x - 2)^3$. The inside changes 5 times as
fast as $x$, so multiply by 5. Ask every time: "is there something other than plain $x$ inside?"

**Multiplying derivatives for a product.** $(uv)' \ne u'v'$. The growing rectangle shows why: $u'v'$ is only the
tiny corner, which vanishes in the limit.

## Where it leads

- Back: [Velocity and acceleration](../level-7/06-velocity-acceleration.md) · Next: [Derivatives of $e^x$, $\ln x$, $\sin x$ and $\cos x$](02-exp-log-trig.md)
- [Level 8 page](index.md) · [Change and motion topic page](../index.md)
- Functions inside functions: [Algebra: combining functions](../../algebra/level-8/06-combining-functions.md).
- On the U of T shelf: [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md), with careful proofs of all three rules.
