---
title: "Beyond: Complex numbers"
---

# Beyond: Complex numbers

*Numbers · step 5 of 5*

## A question to start

Find a number that, multiplied by itself, gives $-1$.

Every real number fails. A positive number times itself is positive. A negative number times itself is also
positive: $(-1)\times(-1) = 1$. Zero gives zero. So among the real numbers the equation $x^2 = -1$ has no answer.

Mathematicians have been here before. Each time an equation had no answer, they did not give up; they built a
bigger family of numbers in which it did. This page builds the last and biggest family you meet before university:
the **complex numbers**.

## The idea

### Every new family answers a question

Look back along this ladder:

| Equation | No answer among ... | So we added ... |
| --- | --- | --- |
| $x + 5 = 2$ | the counting numbers | negative numbers: $x = -3$ |
| $3x = 2$ | the integers | fractions: $x = \tfrac23$ |
| $x^2 = 2$ | the rational numbers | irrational numbers: $x = \sqrt2$ |
| $x^2 = -1$ | the real numbers | a new number, $i$ |

Each time, people at first distrusted the new numbers. Negative numbers were called "absurd" for centuries. The new
numbers won in the end because they made the mathematics simpler and they gave correct answers.

### The number $i$

We **define** a new number $i$ by one rule:

$$i^2 = -1$$

Everything else follows from the ordinary rules of arithmetic. For example, the powers of $i$ go round in a cycle
of four:

$$i^1 = i, \quad i^2 = -1, \quad i^3 = i^2 \cdot i = -i, \quad i^4 = (i^2)^2 = 1, \quad i^5 = i, \ \ldots$$

Square roots of other negative numbers follow: $\sqrt{-9} = 3i$, because $(3i)^2 = 9i^2 = -9$.

### Complex numbers

A **complex number** is a number of the form

$$z = a + bi$$

where $a$ and $b$ are real numbers. $a$ is the **real part** and $b$ is the **imaginary part**. The real numbers are
the complex numbers with $b = 0$. The word "imaginary" is left over from a time when people doubted these numbers
were real in any sense; today they are as solid as any other numbers, and engineers use them every day for
electric circuits and signals.

Their story begins in the 1500s, when Italian mathematicians solving cubic equations (equations with an $x^3$) kept
meeting square roots of negative numbers in the middle of their working, even when the final answer was an
ordinary real number. Rafael Bombelli worked out how to calculate with them, and the rules he found are the ones
below.

### Calculating with complex numbers

**Adding and subtracting:** add the real parts and the imaginary parts separately, as you would collect like terms.
$(2 + 3i) + (4 - i) = 6 + 2i$.

**Multiplying:** expand the brackets as usual, then replace $i^2$ by $-1$.

$$(2+3i)(4-i) = 8 - 2i + 12i - 3i^2 = 8 + 10i + 3 = 11 + 10i$$

**The conjugate** of $z = a + bi$ is $\bar z = a - bi$: the same number with the sign of the imaginary part flipped.
A number times its conjugate is always real:

$$(a+bi)(a-bi) = a^2 - b^2 i^2 = a^2 + b^2$$

**Dividing:** multiply the top and the bottom by the conjugate of the bottom. The bottom becomes real, and then you
can split the answer into its two parts.

### The complex plane

A real number is a point on a line. A complex number has two parts, so it is a point on a **plane**: go $a$ across
and $b$ up. The horizontal line is the **real axis**; the vertical line is the **imaginary axis**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 220" role="img" aria-label="The complex plane with the point 2 plus i, and the point negative 1 plus 2i, which is the first point turned a quarter turn about zero">
  <line x1="20" y1="150" x2="290" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="210" x2="150" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1" opacity="0.4">
    <line x1="110" y1="146" x2="110" y2="154"/><line x1="190" y1="146" x2="190" y2="154"/><line x1="230" y1="146" x2="230" y2="154"/>
    <line x1="146" y1="110" x2="154" y2="110"/><line x1="146" y1="70" x2="154" y2="70"/>
  </g>
  <line x1="150" y1="150" x2="230" y2="110" stroke="#eea66f" stroke-width="3"/>
  <line x1="150" y1="150" x2="110" y2="70" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="230" cy="110" r="6" fill="#eea66f"/>
  <circle cx="110" cy="70" r="6" fill="#9cc9ea"/>
  <path d="M 186 132 A 40 40 0 0 0 132 114" fill="none" stroke="#7ccf9a" stroke-width="2.5"/>
  <g font-size="14" fill="currentColor">
    <text x="238" y="106">2 + i</text>
    <text x="40" y="62">−1 + 2i</text>
    <text x="276" y="168">real</text>
    <text x="158" y="22">imaginary</text>
    <text x="176" y="100">× i</text>
  </g>
</svg>
</div>

The distance from 0 to $z = a + bi$ is called the **modulus**, written $|z|$. By Pythagoras,

$$|a + bi| = \sqrt{a^2 + b^2}$$

### Multiplying by $i$ is a quarter turn

Take $z = 2 + i$ and multiply by $i$: $i(2+i) = 2i + i^2 = -1 + 2i$. In the picture, the point has turned a quarter
of a full turn (90°) anticlockwise about 0, and its distance from 0 has not changed. This always happens. Multiplying
by $i$ twice turns 180°, which is why $i^2 = -1$: a half turn takes 1 to $-1$.

More generally, when you multiply two complex numbers, **the lengths multiply and the angles add**. That is the
geometric meaning of complex multiplication, and it is why complex numbers are so useful for anything that turns
or waves.

### Every quadratic now has answers

The quadratic formula solves $ax^2 + bx + c = 0$:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

When $b^2 - 4ac$ is negative, there are no real answers. With complex numbers there always are, and they come as a
conjugate pair. Even better, the **fundamental theorem of algebra** says that every polynomial equation of degree
$n$ (highest power $x^n$, with $n \ge 1$) has exactly $n$ complex solutions, if repeated ones are counted. Building
one new number, $i$, was enough: no equation of this kind ever needs another.

## Worked examples

**1. Solve $x^2 - 4x + 13 = 0$.**

1. Here $a = 1$, $b = -4$, $c = 13$. The part under the root is $b^2 - 4ac = 16 - 52 = -36$.
2. $\sqrt{-36} = 6i$.
3. $x = \dfrac{4 \pm 6i}{2} = 2 \pm 3i$.
4. Check $x = 2 + 3i$: $x^2 = 4 + 12i + 9i^2 = -5 + 12i$. Then $x^2 - 4x + 13 = (-5 + 12i) - (8 + 12i) + 13 = 0$. ✓

**2. Work out $\dfrac{5 + 5i}{1 + 2i}$.**

1. The conjugate of the bottom is $1 - 2i$. Multiply top and bottom by it.
2. Bottom: $(1 + 2i)(1 - 2i) = 1 + 4 = 5$.
3. Top: $(5 + 5i)(1 - 2i) = 5 - 10i + 5i - 10i^2 = 5 - 5i + 10 = 15 - 5i$.
4. So the answer is $\dfrac{15 - 5i}{5} = 3 - i$.
5. Check by multiplying back: $(3 - i)(1 + 2i) = 3 + 6i - i - 2i^2 = 5 + 5i$. ✓

**3. The modulus of $3 + 4i$** is $\sqrt{3^2 + 4^2} = \sqrt{25} = 5$. Squaring it: $(3+4i)^2 = 9 + 24i - 16 = -7 + 24i$,
whose modulus is $\sqrt{49 + 576} = \sqrt{625} = 25 = 5^2$. The lengths multiplied, as promised.

## Try it

1. Work out $(3 + 2i) + (1 - 5i)$ and $(3 + 2i)(1 - 5i)$.
2. Work out $(1 + i)^2$ and $i^{10}$.
3. Find $|5 - 12i|$.
4. Solve $x^2 + 2x + 5 = 0$.
5. Work out $\dfrac{4 + 2i}{1 - i}$.
6. Plot $1 + 3i$ and $i(1 + 3i)$. What has happened to the point?

??? note "Answers"
    1. Sum: $4 - 3i$. Product: $3 - 15i + 2i - 10i^2 = 3 - 13i + 10 = 13 - 13i$.
    2. $(1 + i)^2 = 1 + 2i + i^2 = 2i$. And $i^{10} = i^8 \cdot i^2 = 1 \cdot (-1) = -1$, since the powers repeat
       every 4.
    3. $\sqrt{25 + 144} = \sqrt{169} = 13$.
    4. $b^2 - 4ac = 4 - 20 = -16$ and $\sqrt{-16} = 4i$, so $x = \dfrac{-2 \pm 4i}{2} = -1 \pm 2i$.
    5. Multiply top and bottom by $1 + i$. Bottom: $1 + 1 = 2$. Top: $4 + 4i + 2i + 2i^2 = 2 + 6i$. Answer:
       $1 + 3i$. Check: $(1 + 3i)(1 - i) = 1 - i + 3i - 3i^2 = 4 + 2i$. ✓
    6. $i(1 + 3i) = i + 3i^2 = -3 + i$. The point $(1, 3)$ has moved to $(-3, 1)$: a quarter turn anticlockwise
       about 0. Both are $\sqrt{10}$ from 0.

## Common mistake

**Using $\sqrt a \times \sqrt b = \sqrt{ab}$ with negative numbers.** It seems to give
$\sqrt{-1}\times\sqrt{-1} = \sqrt{(-1)(-1)} = \sqrt1 = 1$, but $i \times i = -1$. The rule is only safe when $a$ and
$b$ are not negative. With negative numbers, first write each root using $i$ ($\sqrt{-4} = 2i$), then multiply.

## Where it leads

- Back a step: [Master: powers, roots and the real numbers](04-master.md)
- The quadratic formula and polynomials: [Algebra](../algebra/index.md).
- Turning, angles and arrows on a plane: [Geometry](../geometry/index.md), whose last step is vectors.
- Writing $z$ by its length and angle leads to Euler's formula $e^{i\pi} + 1 = 0$, which links $e$, $i$, $\pi$, 1
  and 0; the guide to $e$ is [MAT137 Unit 4 (transcendental functions)](../../uoft/MAT137/unit04.md).
- On the U of T shelf, the complex numbers are one of the number systems called *fields*:
  [MAT240 Unit 1 (fields and vector spaces)](../../uoft/MAT240H1/unit01.md), and the fundamental theorem of algebra
  returns in [MAT240 Unit 9](../../uoft/MAT240H1/unit09.md).
- The other topics: [all topics](../index.md).
