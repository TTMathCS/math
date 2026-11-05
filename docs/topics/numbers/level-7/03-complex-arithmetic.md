---
title: "Complex numbers a + bi"
---

# Complex numbers a + bi

*Numbers · level 7, lesson 3 of 6*

## A question to start

Find two numbers that add to 4 and multiply to 13.

If the numbers are $x$ and $4 - x$, then $x(4 - x) = 13$, which rearranges to $x^2 - 4x + 13 = 0$. The quadratic
formula gives $x = \dfrac{4 \pm \sqrt{16 - 52}}{2} = \dfrac{4 \pm \sqrt{-36}}{2}$. With the $i$ of the last lesson,
$\sqrt{-36} = 6i$, so the two numbers are

$$2 + 3i \qquad\text{and}\qquad 2 - 3i.$$

Neither is real and neither is purely imaginary. Each is a real number **plus** an imaginary number. Do they really
add to 4 and multiply to 13? To check, we need to know how to add and multiply numbers like these. That is this
lesson.

## The idea

### What a complex number is

A **complex number** is a number of the form

$$z = a + bi$$

where $a$ and $b$ are real numbers and $i^2 = -1$. The word *complex* here means "made of parts", as in a sports
complex, not "complicated".

- $a$ is the **real part**, written $\operatorname{Re}(z)$.
- $b$ is the **imaginary part**, written $\operatorname{Im}(z)$. Notice that the imaginary part is the real number
  $b$, not $bi$.

So for $z = 2 - 3i$, $\operatorname{Re}(z) = 2$ and $\operatorname{Im}(z) = -3$. The set of all complex numbers is
written $\mathbb{C}$.

Every real number is a complex number with imaginary part 0 ($7 = 7 + 0i$), and every imaginary number is a complex
number with real part 0 ($5i = 0 + 5i$). That is why $\mathbb{R} \subset \mathbb{C}$.

**When are two complex numbers equal?** Exactly when their real parts are equal **and** their imaginary parts are
equal:

$$a + bi = c + di \quad\text{exactly when}\quad a = c \text{ and } b = d.$$

Why? Suppose $a + bi = c + di$ but $b \ne d$. Rearranging, $i = \dfrac{a - c}{d - b}$, a real number. But no real
number squares to $-1$. So $b = d$, and then $a = c$ too. This fact is extremely useful: **one equation between
complex numbers is really two equations between real numbers**.

### Adding and subtracting

Treat $i$ like a letter in algebra and collect like terms: real parts with real parts, imaginary parts with
imaginary parts.

$$(a + bi) + (c + di) = (a + c) + (b + d)i \qquad (a + bi) - (c + di) = (a - c) + (b - d)i$$

For example, $(2 + 3i) + (2 - 3i) = 4 + 0i = 4$. The numbers from the start do add to 4.

### Multiplying

Expand the brackets as in algebra, then replace $i^2$ by $-1$:

$$(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i$$

You do not need to memorise the formula; just expand and tidy each time. Check the question's numbers:

$$(2 + 3i)(2 - 3i) = 4 - 6i + 6i - 9i^2 = 4 + 9 = 13.$$

They do multiply to 13. Two useful special cases:

- **A square:** $(a + bi)^2 = a^2 + 2abi + b^2 i^2 = (a^2 - b^2) + 2abi$.
- **A real number times a complex number** multiplies both parts: $3(2 - 5i) = 6 - 15i$.

All the usual laws still hold in $\mathbb{C}$: you can add and multiply in any order (commutative and associative laws),
and multiplying spreads over adding (distributive law). That is exactly what we demanded when we invented $i$.

### The conjugate

The **conjugate** of $z = a + bi$ is

$$\bar z = a - bi$$

the same number with the sign of the imaginary part flipped. (It is read "z bar".) The conjugate of $2 + 3i$ is
$2 - 3i$, the conjugate of $-4i$ is $4i$, and the conjugate of a real number is itself.

A number and its conjugate have three neat combinations:

$$z + \bar z = 2a \qquad z - \bar z = 2bi \qquad z\,\bar z = (a + bi)(a - bi) = a^2 - b^2 i^2 = a^2 + b^2$$

The last one is the key. **A complex number times its conjugate is always a real number, and never negative.** It is
zero only when $a = b = 0$, that is, only when $z = 0$. (In the next lesson, $\sqrt{a^2 + b^2}$ turns out to be the
distance from $z$ to 0.)

**The conjugate respects the operations.** For any complex $z$ and $w$:

$$\overline{z + w} = \bar z + \bar w \qquad\qquad \overline{z\,w} = \bar z\,\bar w$$

Proof of the second, with $z = a + bi$ and $w = c + di$. From the multiplying formula,
$zw = (ac - bd) + (ad + bc)i$, so $\overline{zw} = (ac - bd) - (ad + bc)i$. On the other side,
$\bar z\,\bar w = (a - bi)(c - di) = ac - adi - bci + bdi^2 = (ac - bd) - (ad + bc)i$. The two are equal. ∎

In words: changing every $i$ to $-i$ before or after a calculation gives the same result. This is the precise form of
the remark in the last lesson that $i$ and $-i$ are "completely alike". It will explain, in
[lesson 5](05-every-quadratic.md), why complex roots of real equations come in pairs.

### Dividing

To divide by a complex number, we want a real number on the bottom. The conjugate does it: **multiply the top and the
bottom by the conjugate of the bottom.** This is multiplying by $\dfrac{\bar w}{\bar w} = 1$, so the value does not
change.

$$\frac{z}{c + di} = \frac{z\,(c - di)}{(c + di)(c - di)} = \frac{z\,(c - di)}{c^2 + d^2}$$

The bottom is now the real number $c^2 + d^2$, and dividing by a real number just divides both parts. It is the same
idea as rationalising a denominator: $\dfrac{1}{\sqrt2} = \dfrac{\sqrt2}{2}$ (level 6). There, $\sqrt2$ times $\sqrt2$
was rational; here, $c + di$ times $c - di$ is real.

In particular, every complex number except 0 has a **reciprocal**:

$$\frac{1}{a + bi} = \frac{a - bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}\,i$$

So $\mathbb{C}$ is closed under all four operations (never dividing by 0), with the usual laws. In the language of
[lesson 1](01-why-new-numbers.md), it is a **field**, the next one after $\mathbb{R}$.

### A complex number is a pair of real numbers

Since $a + bi$ is completely described by the two real numbers $a$ and $b$, you can think of it as the pair $(a, b)$.
In the 1830s William Rowan Hamilton turned this into a definition with no mysterious $i$ at all: complex numbers are
pairs of reals, added and multiplied by

$$(a, b) + (c, d) = (a + c,\ b + d) \qquad (a, b)\times(c, d) = (ac - bd,\ ad + bc).$$

Then $(0, 1)\times(0, 1) = (0 - 1,\ 0 + 0) = (-1, 0)$, and the pair $(0, 1)$ plays the part of $i$. This is the same
trick as lesson 1: integers as pairs of counting numbers, fractions as pairs of integers, and now complex numbers as
pairs of reals. It also suggests drawing them as points, which is the next lesson.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 400" role="img" aria-labelledby="sk-m-complex-t"><title id="sk-m-complex-t">The complex numbers 2 + 3i and 2 − 3i drawn as points, mirror images across the real line; they add to 4 and multiply to 13</title><defs><filter id="sk-m-complex-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-complex-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-complex-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-complex-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-complex-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="400" filter="url(#sk-m-complex-paper)"/><g filter="url(#sk-m-complex-pen)"><text x="30" y="44" class="h">2 + 3i and 2 − 3i</text><path class="p" d="M92 220 L416 220" marker-end="url(#sk-m-complex-ah)"/><path class="p" d="M200 382.0 L200 58.0" marker-end="url(#sk-m-complex-ah)"/><text x="416" y="244" text-anchor="end" class="s">real</text><text x="208" y="65.20000000000002" class="s">imaginary</text><path class="p f" d="M236 215 L236 225"/><path class="p f" d="M272 215 L272 225"/><path class="p f" d="M308 215 L308 225"/><path class="p f" d="M344 215 L344 225"/><path class="p dash" d="M200 220 L272 112"/><circle cx="272" cy="112" r="6" class="p gold"/><text x="284" y="118" class="l">2 + 3i</text><path class="p dash" d="M200 220 L272 328"/><circle cx="272" cy="328" r="6" class="p gold"/><text x="284" y="334" class="l">2 − 3i</text><circle cx="344" cy="220" r="6" class="p rust"/><text x="344" y="248" text-anchor="middle" class="s">sum: 4</text><text x="420" y="300" class="s">mirror images across</text><text x="420" y="320" class="s">the real line: conjugates</text><text x="420" y="360" class="s">product: 4 + 9 = 13</text></g></svg><figcaption>Sketched for this page. To scale.</figcaption></figure>

## Worked examples

**1. Add, subtract, multiply.** With $z = 3 + 2i$ and $w = 5 - 7i$, find $z + w$, $z - w$ and $zw$.

1. $z + w = (3 + 5) + (2 - 7)i = 8 - 5i$.
2. $z - w = (3 - 5) + (2 - (-7))i = -2 + 9i$. Watch the double minus.
3. $zw = 15 - 21i + 10i - 14i^2 = 15 - 11i + 14 = 29 - 11i$.

**2. A power.** Work out $(1 + i)^4$.

1. Square first: $(1 + i)^2 = 1 + 2i + i^2 = 2i$.
2. Square again: $(2i)^2 = 4i^2 = -4$.

So $(1 + i)^4 = -4$, a real number. Squaring twice is much quicker than multiplying four brackets.

**3. Divide.** Work out $\dfrac{7 + 4i}{2 - i}$.

1. The conjugate of the bottom is $2 + i$. Multiply top and bottom by it.
2. Bottom: $(2 - i)(2 + i) = 2^2 + 1^2 = 5$.
3. Top: $(7 + 4i)(2 + i) = 14 + 7i + 8i + 4i^2 = 10 + 15i$.
4. Answer: $\dfrac{10 + 15i}{5} = 2 + 3i$.
5. Check by multiplying back: $(2 + 3i)(2 - i) = 4 - 2i + 6i - 3i^2 = 7 + 4i$. ✓

**4. An equation.** Solve $(1 + 2i)z = 3 - i$ for $z$.

1. $z = \dfrac{3 - i}{1 + 2i}$. Multiply top and bottom by $1 - 2i$.
2. Bottom: $1 + 4 = 5$. Top: $(3 - i)(1 - 2i) = 3 - 6i - i + 2i^2 = 1 - 7i$.
3. $z = \dfrac{1 - 7i}{5} = \tfrac15 - \tfrac75 i$.
4. Check: $(1 + 2i)\left(\tfrac15 - \tfrac75 i\right) = \tfrac15 - \tfrac75 i + \tfrac25 i - \tfrac{14}{5} i^2 =
   \tfrac{15}{5} - \tfrac55 i = 3 - i$. ✓

**5. Comparing parts.** Find real numbers $x$ and $y$ with $(x + yi)(2 - i) = 8 + i$.

1. Expand: $(x + yi)(2 - i) = 2x - xi + 2yi - yi^2 = (2x + y) + (2y - x)i$.
2. Equal complex numbers have equal parts: $2x + y = 8$ and $-x + 2y = 1$.
3. From the second, $x = 2y - 1$. Substitute: $2(2y - 1) + y = 8$, so $5y = 10$, $y = 2$, and $x = 3$.
4. Check: $(3 + 2i)(2 - i) = 6 - 3i + 4i - 2i^2 = 8 + i$. ✓

## Try it

1. With $z = 4 - 3i$ and $w = -1 + 6i$, find $z + w$ and $z - w$.
2. Work out $(4 - 3i)(4 + 3i)$ and $(2 - 3i)^2$.
3. Work out $(1 + 2i)^3$.
4. Work out $\dfrac{5 + i}{1 + i}$ and check your answer by multiplying back.
5. Work out $\dfrac{2 + 5i}{3 - 4i}$.
6. Find the reciprocal $\dfrac{1}{1 - 2i}$ in the form $a + bi$.
7. Find all complex numbers $z$ with $z^2 = -3 + 4i$. (Write $z = x + yi$ and compare parts.)
8. Prove that $\overline{z + w} = \bar z + \bar w$, and that $z\,\bar z = 0$ only when $z = 0$.

??? note "Answers"
    1. $z + w = 3 + 3i$. $z - w = (4 + 1) + (-3 - 6)i = 5 - 9i$.
    2. $(4 - 3i)(4 + 3i) = 16 + 9 = 25$ (a number times its conjugate). $(2 - 3i)^2 = 4 - 12i + 9i^2 = -5 - 12i$.
    3. $(1 + 2i)^2 = 1 + 4i - 4 = -3 + 4i$. Then $(-3 + 4i)(1 + 2i) = -3 - 6i + 4i + 8i^2 = -11 - 2i$.
    4. Multiply by $1 - i$: bottom $1 + 1 = 2$; top $(5 + i)(1 - i) = 5 - 5i + i - i^2 = 6 - 4i$. Answer $3 - 2i$.
       Check: $(3 - 2i)(1 + i) = 3 + 3i - 2i - 2i^2 = 5 + i$. ✓
    5. Multiply by $3 + 4i$: bottom $9 + 16 = 25$; top $(2 + 5i)(3 + 4i) = 6 + 8i + 15i + 20i^2 = -14 + 23i$. Answer
       $-\tfrac{14}{25} + \tfrac{23}{25}i$, which is $-0.56 + 0.92i$.
    6. $\dfrac{1 + 2i}{1^2 + 2^2} = \tfrac15 + \tfrac25 i$. Check: $(1 - 2i)(1 + 2i) = 5$, and $5 \times \tfrac15 = 1$. ✓
    7. $(x + yi)^2 = (x^2 - y^2) + 2xyi$. So $x^2 - y^2 = -3$ and $2xy = 4$, that is $y = \dfrac{2}{x}$. Substituting,
       $x^2 - \dfrac{4}{x^2} = -3$, so $x^4 + 3x^2 - 4 = 0$, which factors as $(x^2 + 4)(x^2 - 1) = 0$. Since $x$ is
       real, $x^2 = 1$: $x = 1, y = 2$ or $x = -1, y = -2$. So $z = 1 + 2i$ or $z = -1 - 2i$. (Check: question 3
       found $(1 + 2i)^2 = -3 + 4i$. ✓)
    8. With $z = a + bi$, $w = c + di$: $z + w = (a + c) + (b + d)i$, whose conjugate is $(a + c) - (b + d)i$. And
       $\bar z + \bar w = (a - bi) + (c - di) = (a + c) - (b + d)i$. Equal. Next, $z\,\bar z = a^2 + b^2$. A sum of two
       squares of real numbers is 0 only if both are 0, so $a = b = 0$ and $z = 0$.

## Common mistake

**Forgetting that $i^2 = -1$ changes a sign.** In $(3 + 2i)(5 - 7i)$ the last term is $2i \times (-7i) = -14i^2 =
+14$. Leaving it as $-14$ gives $1 - 11i$ instead of $29 - 11i$. After expanding, always hunt for every $i^2$ and
replace it before collecting terms.

**Multiplying only the bottom by the conjugate.** $\dfrac{7 + 4i}{2 - i}$ is not $\dfrac{7 + 4i}{5}$. Multiplying
the bottom alone changes the value of the fraction; you must multiply the top by the same thing, so that you are
multiplying by 1.

## Where it leads

- Back: [The number i](02-the-number-i.md) · Next: [The complex plane](04-complex-plane.md), where $a + bi$ becomes a
  point and every operation becomes a movement.
- [Level 7 page](index.md) · [Numbers topic page](../index.md)
- Expanding brackets and solving pairs of equations: [Algebra](../../algebra/index.md).
- Rationalising denominators with radicals, the same idea as dividing by a complex number:
  [level 6](../level-6/index.md).
- On the U of T shelf, $\mathbb{C}$ is one of the standard examples of a field:
  [MAT240 Unit 1 (fields and vector spaces)](../../../uoft/MAT240H1/unit01.md).
