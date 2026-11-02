---
title: "The number i"
---

# The number i

*Numbers · level 7, lesson 2 of 6*

## A question to start

Here is an equation with an obvious answer:

$$x^3 = 15x + 4$$

Try $x = 4$: the left side is $64$ and the right side is $60 + 4 = 64$. It works.

In the 1500s, Italian mathematicians found a formula for equations like this one, a cubic formula, the way the
quadratic formula solves $ax^2 + bx + c = 0$. Put this equation into it and the formula says

$$x = \sqrt[3]{2 + \sqrt{-121}} + \sqrt[3]{2 - \sqrt{-121}}$$

The square root of a **negative** number, in the middle of the working, for an equation whose answer is the ordinary
number 4. Either the formula is broken, or the square root of a negative number means something. By the end of this
lesson you will be able to work this out and get exactly 4.

## The idea

### Defining a new number

In [lesson 1](01-why-new-numbers.md) we saw that no real number squares to a negative. So we do what was done for
negatives and fractions: we **invent** a number with the property we want, and insist that the usual rules of
arithmetic still hold.

> The number $i$ is a number with $i^2 = -1$.

That is the whole definition. Everything else comes from the ordinary rules: adding, multiplying, brackets, the
distributive law. The letter $i$ stands for *imaginary*. René Descartes called such roots "imaginary" in 1637, and the
name stuck long after anyone thought of them as fake. The letter $i$ itself was first used by Leonhard Euler, late in
the 1700s.

### Square roots of negative numbers

Once we have $i$, every negative number has square roots.

$(3i)^2 = 3^2 \times i^2 = 9 \times (-1) = -9$. And $(-3i)^2 = (-3)^2 \times i^2 = -9$ as well. So $-9$ has **two**
square roots, $3i$ and $-3i$, just as $9$ has two square roots, $3$ and $-3$.

As with positive numbers, the symbol $\sqrt{\phantom{x}}$ picks one of them. For a positive number $a$ we agree that

$$\sqrt{-a} = i\sqrt{a}$$

so $\sqrt{-9} = 3i$, $\sqrt{-2} = i\sqrt2$, $\sqrt{-1} = i$. Notice that $-i$ also squares to $-1$:
$(-i)^2 = (-1)^2 i^2 = -1$. The two numbers $i$ and $-i$ are completely alike in their arithmetic; calling one of them
"$i$" is a choice, like choosing which way along the number line is positive.

Numbers of the form $bi$, with $b$ real, are called **imaginary numbers** (or "pure imaginary"): $2i$, $-7i$,
$i\sqrt3$, $\tfrac12 i$. In [lesson 3](03-complex-arithmetic.md) we add real numbers to them and get the complex
numbers.

### The powers of $i$ go round in a cycle

Multiply by $i$ again and again, using only $i^2 = -1$:

| power | $i^1$ | $i^2$ | $i^3$ | $i^4$ | $i^5$ | $i^6$ | $i^7$ | $i^8$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| working | $i$ | $-1$ | $i^2 \cdot i$ | $i^2 \cdot i^2$ | $i^4 \cdot i$ | $i^4 \cdot i^2$ | $i^4 \cdot i^3$ | $i^4 \cdot i^4$ |
| value | $i$ | $-1$ | $-i$ | $1$ | $i$ | $-1$ | $-i$ | $1$ |

Once $i^4 = 1$, the pattern must repeat, because $i^{n+4} = i^n \times i^4 = i^n$. So the powers of $i$ run through
**four values forever**: $i, -1, -i, 1, i, -1, -i, 1, \ldots$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 220" role="img" aria-label="The four values 1, i, minus 1 and minus i placed on a circle at the right, top, left and bottom; arcs go round anticlockwise, each one a multiplication by i">
  <line x1="40" y1="110" x2="260" y2="110" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <line x1="150" y1="15" x2="150" y2="205" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <circle cx="150" cy="110" r="80" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
  <path d="M 222.3 75.6 A 80 80 0 0 0 184.4 37.7" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M 115.6 37.7 A 80 80 0 0 0 77.7 75.6" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M 77.7 144.4 A 80 80 0 0 0 115.6 182.3" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M 184.4 182.3 A 80 80 0 0 0 222.3 144.4" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="230" cy="110" r="7" fill="#7ccf9a"/>
  <circle cx="150" cy="30" r="7" fill="#9cc9ea"/>
  <circle cx="70" cy="110" r="7" fill="#7ccf9a"/>
  <circle cx="150" cy="190" r="7" fill="#9cc9ea"/>
  <g font-size="14" fill="currentColor">
    <text x="240" y="106">1</text>
    <text x="160" y="24">i</text>
    <text x="34" y="106">−1</text>
    <text x="160" y="208">−i</text>
    <text x="222" y="42">× i</text>
    <text x="56" y="42">× i</text>
    <text x="56" y="190">× i</text>
    <text x="222" y="190">× i</text>
  </g>
</svg>
</div>

The picture is a preview of [lesson 4](04-complex-plane.md): if $1$ sits to the right and $i$ sits straight up, each
multiplication by $i$ is a quarter turn, and four quarter turns bring you home.

**The rule for any power.** Divide the exponent by 4 and look only at the **remainder**:

| remainder of $n \div 4$ | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| $i^n$ | $1$ | $i$ | $-1$ | $-i$ |

For example $i^{27}$: $27 = 4 \times 6 + 3$, so $i^{27} = (i^4)^6 \times i^3 = 1 \times (-i) = -i$.

**Negative powers too.** What is $\dfrac{1}{i}$? Ask what times $i$ gives 1. Since $i \times (-i) = -i^2 = 1$, the
answer is $\dfrac1i = -i$. So $i^{-1} = -i$, which is also $i^3$, exactly what the cycle predicts if you keep going
backwards: $\ldots, i^{-1} = -i, \; i^0 = 1, \; i^1 = i, \ldots$ The rule "remainder after dividing by 4" works for
negative $n$ as long as you use a remainder of 0, 1, 2 or 3: $-1 = 4 \times (-1) + 3$, remainder 3, giving $-i$.

**Four in a row add to zero.** $i + i^2 + i^3 + i^4 = i - 1 - i + 1 = 0$. Any four consecutive powers are this same
block multiplied by some power of $i$, so they also add to 0.

### The honest history: cubic equations, not quadratics

You might guess that $\sqrt{-1}$ was invented to solve $x^2 + 1 = 0$. It was not. For a quadratic with no real
solutions, people simply said "no solution", and that is a perfectly reasonable answer when a quadratic describes a
real situation.

**Cardano's puzzle (1545).** In his book *Ars Magna* ("The Great Art"), Gerolamo Cardano asked for two numbers that
add to 10 and multiply to 40. The equations lead to $5 + \sqrt{-15}$ and $5 - \sqrt{-15}$. Cardano checked that they
work, calling the calculation as subtle as it is useless:

$$\big(5 + \sqrt{-15}\big) + \big(5 - \sqrt{-15}\big) = 10, \qquad \big(5 + \sqrt{-15}\big)\big(5 - \sqrt{-15}\big) = 25 - (-15) = 40.$$

**The cubic formula forced the issue.** The same book published a formula (found by Scipione del Ferro and Niccolò
Tartaglia) for cubics of the form $x^3 = px + q$:

$$x = \sqrt[3]{\frac q2 + \sqrt{\frac{q^2}{4} - \frac{p^3}{27}}} + \sqrt[3]{\frac q2 - \sqrt{\frac{q^2}{4} - \frac{p^3}{27}}}$$

For $x^3 = 15x + 4$ we have $p = 15$, $q = 4$, so $\dfrac{q^2}{4} = 4$ and $\dfrac{p^3}{27} = 125$, and the square
root is $\sqrt{4 - 125} = \sqrt{-121}$. This is the equation from the start of the lesson. Here "no solution" is
plainly wrong: $x = 4$ works. The square roots of negatives could not be thrown away.

**Bombelli's answer (1572).** In his *Algebra*, Rafael Bombelli had the bold idea of simply calculating with these
roots by the usual rules. He noticed that

$$(2 + i)^3 = 2 + 11i \qquad\text{and}\qquad (2 - i)^3 = 2 - 11i$$

(you will check the first in worked example 4). Since $\sqrt{-121} = 11i$, the formula becomes

$$x = \sqrt[3]{2 + 11i} + \sqrt[3]{2 - 11i} = (2 + i) + (2 - i) = 4.$$

The imaginary parts cancel and the true answer appears. This is the moment complex numbers became necessary: a
route **through** them led to a real answer that no route around them could reach with that formula. It took
another two hundred years, and the work of Euler and Gauss, before they were fully accepted.

## Worked examples

**1. Powers of $i$.** Find $i^{50}$, $i^{100}$, $i^{2027}$ and $i^{-3}$.

1. $50 = 4 \times 12 + 2$, remainder 2: $i^{50} = -1$.
2. $100 = 4 \times 25$, remainder 0: $i^{100} = 1$.
3. Only the last two digits matter for the remainder after dividing by 4 (because 100 is a multiple of 4). $27 = 4
   \times 6 + 3$, remainder 3: $i^{2027} = -i$.
4. $i^{-3} = \dfrac{1}{i^3} = \dfrac{1}{-i}$. Since $\dfrac1i = -i$, we get $\dfrac{1}{-i} = i$. Check with the cycle:
   $-3 = 4 \times (-1) + 1$, remainder 1, giving $i$. ✓

**2. Square roots of negatives.** Simplify $\sqrt{-50}$ and $\sqrt{-\tfrac{4}{9}}$.

1. $\sqrt{-50} = i\sqrt{50} = i\sqrt{25 \times 2} = 5i\sqrt2$. Check: $(5i\sqrt2)^2 = 25 \times i^2 \times 2 = -50$. ✓
2. $\sqrt{-\tfrac49} = i\sqrt{\tfrac49} = \tfrac23 i$. Check: $\left(\tfrac23 i\right)^2 = \tfrac49 \times (-1)$. ✓

**3. Multiplying roots of negatives.** Work out $\sqrt{-4} \times \sqrt{-9}$.

Write each with $i$ first: $\sqrt{-4} = 2i$ and $\sqrt{-9} = 3i$. Then $2i \times 3i = 6i^2 = -6$.

The tempting shortcut $\sqrt{-4}\times\sqrt{-9} = \sqrt{(-4)(-9)} = \sqrt{36} = 6$ gives the **wrong sign**. See the
common mistake below.

**4. Bombelli's check.** Show that $(2 + i)^3 = 2 + 11i$.

1. First square: $(2 + i)^2 = 4 + 4i + i^2 = 4 + 4i - 1 = 3 + 4i$.
2. Then multiply by $2 + i$ once more: $(3 + 4i)(2 + i) = 6 + 3i + 8i + 4i^2 = 6 + 11i - 4 = 2 + 11i$. ✓

Changing every $i$ to $-i$ in the same working gives $(2 - i)^3 = 2 - 11i$.

**5. Solving with $i$.** Solve $x^2 + 16 = 0$ and $3x^2 + 75 = 0$.

1. $x^2 = -16$, so $x = \pm\sqrt{-16} = \pm 4i$. Check: $(4i)^2 + 16 = -16 + 16 = 0$. ✓
2. $3x^2 = -75$, $x^2 = -25$, so $x = \pm 5i$.

## Try it

1. Find $i^6$, $i^{11}$, $i^{40}$ and $i^{93}$.
2. Simplify $\sqrt{-36}$, $\sqrt{-7}$ and $\sqrt{-12}$.
3. Work out $(3i)^2$, $(-2i)^3$ and $i^3 \times i^5$.
4. Work out $\sqrt{-2}\times\sqrt{-8}$ correctly.
5. Solve $x^2 = -81$ and $2x^2 + 18 = 0$.
6. Find $\dfrac{1}{i^2}$, $\dfrac{1}{i^3}$ and $i^{-10}$.
7. Find the sum $i + i^2 + i^3 + \cdots + i^{102}$.
8. Check Cardano's numbers another way: show that $x = 5 + \sqrt{-15}$ solves $x^2 - 10x + 40 = 0$.

??? note "Answers"
    1. $6 = 4 + 2$: $-1$. $11 = 8 + 3$: $-i$. $40 = 4 \times 10$: $1$. $93 = 92 + 1$: $i$.
    2. $\sqrt{-36} = 6i$. $\sqrt{-7} = i\sqrt7$. $\sqrt{-12} = i\sqrt{12} = 2i\sqrt3$.
    3. $(3i)^2 = 9i^2 = -9$. $(-2i)^3 = (-2)^3 i^3 = -8 \times (-i) = 8i$. $i^3 \times i^5 = i^8 = 1$.
    4. $\sqrt{-2} = i\sqrt2$ and $\sqrt{-8} = i\sqrt8 = 2i\sqrt2$. Product: $i\sqrt2 \times 2i\sqrt2 = 2 \times 2 \times
       i^2 = -4$. (Not $\sqrt{16} = 4$.)
    5. $x = \pm 9i$. And $2x^2 = -18$, $x^2 = -9$, $x = \pm 3i$.
    6. $\dfrac{1}{i^2} = \dfrac{1}{-1} = -1$. $\dfrac{1}{i^3} = \dfrac{1}{-i} = i$ (since $i \times (-i) = 1$, so
       $\dfrac{1}{-i} = i$). $i^{-10}$: $-10 = 4 \times (-3) + 2$, remainder 2, so $-1$. Or $i^{-10} = \dfrac{1}{i^{10}} =
       \dfrac{1}{-1} = -1$.
    7. The first 100 powers make 25 blocks of four, each adding to 0. What is left is $i^{101} + i^{102} = i + (-1)
       = -1 + i$.
    8. $x^2 = 25 + 10\sqrt{-15} + (\sqrt{-15})^2 = 25 + 10\sqrt{-15} - 15 = 10 + 10\sqrt{-15}$. Then
       $x^2 - 10x + 40 = 10 + 10\sqrt{-15} - 50 - 10\sqrt{-15} + 40 = 0$. ✓

## Common mistake

**Using $\sqrt a \times \sqrt b = \sqrt{ab}$ when $a$ and $b$ are both negative.** It would "prove"

$$-1 = i \times i = \sqrt{-1}\times\sqrt{-1} = \sqrt{(-1)(-1)} = \sqrt{1} = 1,$$

which is false. The rule $\sqrt a\sqrt b = \sqrt{ab}$ was proved for $a, b \ge 0$ and does not carry over. The safe
habit: **always rewrite $\sqrt{-a}$ as $i\sqrt a$ first**, then multiply.

**Getting the cycle wrong by starting at $i^0$.** The remainder 1 gives $i$ and remainder 0 gives 1. Students
sometimes count "first value, second value, ..." and slip by one. A quick check: $i^4 = 1$, and 4 has remainder 0.

## Where it leads

- Back: [Why each family of numbers was invented](01-why-new-numbers.md) · Next: [Complex numbers a + bi](03-complex-arithmetic.md),
  where real and imaginary numbers are added together.
- [Level 7 page](index.md) · [Numbers topic page](../index.md)
- Cycles that repeat with a fixed period, like $i, -1, -i, 1$: remainders and clock arithmetic in
  [Number theory](../../number-theory/index.md), and repeating sequences in [Patterns](../../patterns/index.md).
- The quadratic and cubic equations themselves: [Algebra](../../algebra/index.md).
- The cycle of four becomes the four **fourth roots of unity** in [level 8](../level-8/index.md).
