---
title: "Square roots and cube roots"
---

# Square roots and cube roots

*Numbers · level 5, lesson 6 of 7*

## A question to start

A square garden has an area of 49 square metres. How long is each side? You probably said 7 m at once, because
$7 \times 7 = 49$.

Now a square garden has an area of 40 square metres. How long is each side? No whole number works: $6 \times 6 = 36$
is too small and $7 \times 7 = 49$ is too big. The side is somewhere between 6 m and 7 m. Can you find it to the
nearest centimetre, with only multiplying and a bit of patience? You can, and this lesson shows how.

## The idea

### Squaring and its undo

**Squaring** a number means multiplying it by itself: $7^2 = 49$. The **square root** goes the other way. The square
root of 49 is the number that, squared, gives 49. We write it with the sign $\sqrt{\ }$, called a **radical sign**:

$$\sqrt{49} = 7 \quad \text{because} \quad 7^2 = 49$$

The square root is the **side of a square** whose area is the number. That is where the name comes from: the side is
the "root" the square grows from.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 170" role="img" aria-label="Three squares drawn from the same corner: side 6 with area 36, side about 6.32 with area 40, and side 7 with area 49; next to them a number line from 6 to 7 with the square root of 40 marked at about 6.32">
  <rect x="30" y="24" width="126" height="126" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="36.2" width="113.8" height="113.8" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="42" width="108" height="108" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="84" y="100" font-size="12" text-anchor="middle" fill="currentColor">36</text>
  <text x="84" y="164" font-size="11" text-anchor="middle" fill="currentColor">sides 6, √40, 7</text>
  <text x="168" y="30" font-size="11" fill="currentColor">49</text>
  <text x="150" y="46" font-size="11" fill="currentColor">40</text>
  <line x1="210" y1="100" x2="390" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="92" x2="220" y2="108" stroke="currentColor" stroke-width="2"/>
  <line x1="380" y1="92" x2="380" y2="108" stroke="currentColor" stroke-width="2"/>
  <circle cx="271.9" cy="100" r="6" fill="#7ccf9a"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="220" y="125">6</text><text x="380" y="125">7</text><text x="271.9" y="80">√40 ≈ 6.32</text>
  </g>
</svg>
</div>

Numbers like $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144$ are the squares of whole numbers. They are called
**perfect squares**, and their square roots are whole numbers. Knowing the perfect squares up to $15^2 = 225$ by heart
makes all the estimating in this lesson quick.

### Positive and negative

Both $7^2 = 49$ and $(-7)^2 = 49$ (negative times negative is positive, lesson 1). So 49 has **two** numbers that
square to it. The sign $\sqrt{49}$ means only the **non-negative** one, 7. When we want both, we write $\pm 7$
("plus or minus 7"). So:

- the equation $x^2 = 49$ has two solutions, $x = 7$ and $x = -7$;
- but $\sqrt{49}$ is just $7$.

What about $\sqrt{-9}$? We need a number that squares to $-9$. A positive number squared is positive, and a negative
number squared is also positive, and $0^2 = 0$. So **no number we know** squares to a negative. For now, square roots
of negative numbers have no answer. (In [level 7](../level-7/index.md) a whole new kind of number is invented to give
them one.)

### Roots of fractions and decimals

Squaring a fraction squares the top and bottom: $\left(\tfrac34\right)^2 = \tfrac9{16}$. So the square root works
on top and bottom: $\sqrt{\tfrac{9}{16}} = \tfrac34$.

For decimals, think about place value: $0.5^2 = 0.25$, so $\sqrt{0.25} = 0.5$. And $1.2^2 = 1.44$, so
$\sqrt{1.44} = 1.2$. A useful check: the square root of a number between 0 and 1 is **bigger** than the number,
because squaring a number between 0 and 1 makes it smaller.

### Estimating a square root: trap it, then squeeze

To estimate $\sqrt{40}$:

**Step 1. Trap it between perfect squares.** $36 < 40 < 49$, so $\sqrt{36} < \sqrt{40} < \sqrt{49}$, that is,
$6 < \sqrt{40} < 7$. (A bigger square has a bigger side, so the order of the areas is the order of the sides.)

**Step 2. Guess where in the gap.** 40 is 4 of the way from 36 towards 49, out of 13. So a first guess is about
$6 + \tfrac{4}{13} \approx 6.3$. (This guess is a little low, because square roots grow more slowly as numbers get
bigger, but it is a good start.)

**Step 3. Squeeze by guess and check.** Square your guesses:

| guess | square | too big or too small? |
| --- | --- | --- |
| 6.3 | 39.69 | too small |
| 6.4 | 40.96 | too big |
| 6.32 | 39.9424 | too small |
| 6.33 | 40.0689 | too big |

So $6.32 < \sqrt{40} < 6.33$. And 40 is closer to 39.9424 than to 40.0689, so $\sqrt{40} \approx 6.32$. A calculator
gives $6.32455\ldots$ Every new row gives one more correct decimal place. In [level 6](../level-6/07-approximating-roots.md)
you will meet a much faster method, nearly 4000 years old.

Will the decimals of $\sqrt{40}$ ever stop or repeat? They will not. Numbers like this are the subject of
[level 6](../level-6/index.md).

### A useful rule: roots of products

$\sqrt{4 \times 9} = \sqrt{36} = 6$, and $\sqrt4 \times \sqrt9 = 2 \times 3 = 6$. The same! In general, for numbers
that are not negative,

$$\sqrt{a \times b} = \sqrt{a} \times \sqrt{b}$$

**Why?** $\sqrt a \times \sqrt b$ is a number whose square is
$(\sqrt a \sqrt b)^2 = (\sqrt a)^2 (\sqrt b)^2 = a \times b$ (Law 4 from [Powers](03-powers.md)). And it is not
negative. So it **is** the square root of $ab$.

This lets you find roots of big numbers in your head: $\sqrt{900} = \sqrt{9} \times \sqrt{100} = 3 \times 10 = 30$.
In level 6 you will use this rule to simplify roots such as $\sqrt{72}$.

But there is **no** such rule for adding: $\sqrt{9 + 16} = \sqrt{25} = 5$, while $\sqrt9 + \sqrt{16} = 3 + 4 = 7$.

### Cube roots

The **cube root** of a number is the number that, cubed, gives it. It is the **edge of a cube** with that volume. We
write it $\sqrt[3]{\ }$:

$$\sqrt[3]{27} = 3 \quad \text{because} \quad 3^3 = 27$$

The **perfect cubes** are $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$.

Cube roots have one big difference from square roots: **negative numbers have cube roots**. $(-2)^3 = -8$, so
$\sqrt[3]{-8} = -2$. An odd number of negative factors gives a negative answer, so every number, positive or
negative, has exactly one cube root.

Cube roots can be estimated the same way. $64 < 100 < 125$, so $4 < \sqrt[3]{100} < 5$. Then $4.6^3 = 97.336$ and
$4.7^3 = 103.823$, so $\sqrt[3]{100}$ is between 4.6 and 4.7 (it is $4.64\ldots$).

## Worked examples

**1. Exact roots.** Find $\sqrt{144}$, $\sqrt{0.36}$ and $\sqrt{\tfrac{25}{49}}$.

1. $12^2 = 144$, so $\sqrt{144} = 12$.
2. $0.6^2 = 0.36$, so $\sqrt{0.36} = 0.6$.
3. $\sqrt{\tfrac{25}{49}} = \tfrac{\sqrt{25}}{\sqrt{49}} = \tfrac57$.

**2. Estimate $\sqrt{20}$ to two decimal places.**

1. Trap: $16 < 20 < 25$, so $4 < \sqrt{20} < 5$, and 20 is a bit under halfway.
2. Squeeze: $4.4^2 = 19.36$ (small), $4.5^2 = 20.25$ (big). So it is between 4.4 and 4.5.
3. Squeeze more: $4.47^2 = 19.9809$ (small), $4.48^2 = 20.0704$ (big). 20 is much closer to 19.9809.
4. So $\sqrt{20} \approx 4.47$.

**3. Fencing a square plot.** A square plot has area 50 m². How much fence goes round it?

1. Side $= \sqrt{50}$. Since $7^2 = 49$, the side is just over 7 m. In fact $7.07^2 = 49.9849$ and
   $7.08^2 = 50.1264$, so the side is about 7.07 m.
2. Fence $= 4 \times 7.07 \approx$ **28.3 m**. (Buy a little more, to be safe.)

**4. Cube roots.** Find $\sqrt[3]{-125}$ and $\sqrt[3]{0.001}$.

1. $(-5)^3 = -125$, so $\sqrt[3]{-125} = -5$.
2. $0.1^3 = 0.001$, so $\sqrt[3]{0.001} = 0.1$.

**5. Use the product rule.** Find $\sqrt{1600}$ and $\sqrt{0.09}$.

1. $\sqrt{1600} = \sqrt{16} \times \sqrt{100} = 4 \times 10 = 40$.
2. $\sqrt{0.09} = 0.3$, because $0.3 \times 0.3 = 0.09$. (Or: $0.09 = \tfrac{9}{100}$, so the root is
   $\tfrac{3}{10}$.)

## Try it

1. Find: (a) $\sqrt{81}$ (b) $\sqrt{169}$ (c) $\sqrt{0.49}$ (d) $\sqrt{\tfrac{4}{81}}$
2. Between which two whole numbers is $\sqrt{75}$? Which one is it closer to?
3. Estimate $\sqrt{30}$ to one decimal place by guess and check.
4. A square tile has area 2.25 m². How long is each side?
5. Find: (a) $\sqrt[3]{64}$ (b) $\sqrt[3]{-27}$ (c) $\sqrt[3]{1\,000\,000}$
6. Solve $x^2 = 121$. Then say what $\sqrt{121}$ is, and why the answers are different.
7. Which is bigger, $\sqrt{50}$ or $\sqrt[3]{300}$? Explain without a calculator.
8. Explain why $\sqrt{-16}$ has no answer among the numbers we know, but $\sqrt[3]{-64}$ does.

??? note "Answers"
    1. (a) 9. (b) 13. (c) 0.7, since $0.7^2 = 0.49$. (d) $\tfrac29$.
    2. $64 < 75 < 81$, so between **8 and 9**. 75 is 6 away from 81 and 11 away from 64, so it is closer to 9.
       (It is $8.66\ldots$)
    3. $25 < 30 < 36$, so between 5 and 6. $5.4^2 = 29.16$ and $5.5^2 = 30.25$, so between 5.4 and 5.5. 30 is
       closer to 30.25 (0.25 away) than to 29.16 (0.84 away), so about **5.5**. (It is $5.477\ldots$, which also
       rounds to 5.5.)
    4. $1.5^2 = 2.25$, so **1.5 m**.
    5. (a) 4. (b) $-3$. (c) 100, since $100^3 = 1\,000\,000$.
    6. $x = 11$ or $x = -11$, because both square to 121. But $\sqrt{121} = 11$ only: the root sign means the
       non-negative root.
    7. $\sqrt{50} > \sqrt{49} = 7$. And $\sqrt[3]{300} < \sqrt[3]{343} = 7$. So $\sqrt{50}$ is bigger.
    8. Any number squared is positive or zero (positive times positive and negative times negative are both
       positive), so nothing squares to $-16$. But $(-4)^3 = -64$, because three negative factors give a negative,
       so $\sqrt[3]{-64} = -4$.

## Common mistake

**Halving instead of rooting.** $\sqrt{16}$ is 4, not 8. The square root asks "what times **itself** gives 16?", not
"what times 2?". Check by squaring: $8^2 = 64$, not 16.

**Splitting a root over a sum.** $\sqrt{9 + 16}$ is $\sqrt{25} = 5$, not $3 + 4 = 7$. The rule
$\sqrt{ab} = \sqrt a \sqrt b$ is for products only. Always work out what is under the root sign first.

## Where it leads

- Back: [Scientific notation](05-scientific-notation.md) · Next: [Other bases](07-other-bases.md)
- [Level 5 page](index.md) · [Numbers topic page](../index.md)
- Square roots give the long side of a right triangle (Pythagoras): [Geometry](../../geometry/index.md).
- Simplifying roots like $\sqrt{72} = 6\sqrt2$, and the proof that $\sqrt2$ is not a fraction: [level 6](../level-6/index.md).
- Solving $x^2 = 49$ and other equations with squares: [Algebra](../../algebra/index.md).
