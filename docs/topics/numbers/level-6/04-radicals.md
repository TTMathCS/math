---
title: "Radicals"
---

# Radicals

*Numbers · level 6, lesson 4 of 7*

## A question to start

Which is bigger: $3\sqrt5$ or $4\sqrt3$? With a calculator it is easy. Without one, it looks hard: $\sqrt5$ is bigger
than $\sqrt3$, but 3 is smaller than 4. Which wins?

And here is a second puzzle. Work out $\sqrt{12} + \sqrt{27} - \sqrt{75}$. On a calculator you get
$3.4641\ldots + 5.1961\ldots - 8.6602\ldots$, which comes to 0, or something so tiny the calculator shows 0. Is it
exactly 0, or just very close? Calculators cannot tell you. By the end of this lesson you will answer both questions
exactly, in your head.

## The idea

### Words

An expression with a root sign in it, like $\sqrt{72}$ or $3\sqrt5$, is called a **radical** (from the Latin *radix*,
root). The number under the sign is the **radicand**. In $\sqrt[3]{20}$, the small 3 is the **index**: it says which
root. A square root has index 2, but we do not write it.

Since $\sqrt2$, $\sqrt3$, $\sqrt5$ and their friends are irrational (lesson 3), any decimal for them is only
approximate. Radicals let us write these numbers **exactly** and calculate with them **exactly**. That is the reason
for everything in this lesson.

### The two rules

In [level 5](../level-5/06-square-roots.md) you proved the product rule. There is a matching rule for division. For
$a, b \ge 0$ (and $b \ne 0$ in the second):

$$\sqrt{ab} = \sqrt a \, \sqrt b \qquad\qquad \sqrt{\frac ab} = \frac{\sqrt a}{\sqrt b}$$

The second has the same reason as the first: $\left(\tfrac{\sqrt a}{\sqrt b}\right)^2 = \tfrac{a}{b}$, and
$\tfrac{\sqrt a}{\sqrt b}$ is not negative, so it is the square root of $\tfrac ab$.

### Simplifying: pull out the perfect squares

To simplify $\sqrt{72}$, look for the **largest perfect square** that divides 72. Since $72 = 36 \times 2$,

$$\sqrt{72} = \sqrt{36 \times 2} = \sqrt{36} \times \sqrt2 = 6\sqrt2$$

If you do not spot the largest square at once, you can go in steps: $\sqrt{72} = \sqrt{4 \times 18} = 2\sqrt{18} =
2\sqrt{9 \times 2} = 2 \times 3\sqrt2 = 6\sqrt2$. Or use prime factors: $72 = 2 \times 2 \times 2 \times 3 \times 3$.
Each **pair** of equal primes comes out of the root as one copy: one pair of 2s gives a 2, the pair of 3s gives a 3,
and the leftover 2 stays inside. So $\sqrt{72} = 2 \times 3 \times \sqrt2 = 6\sqrt2$.

A radical is in **simplest form** when the radicand has no perfect square factor bigger than 1, and there is no
fraction under the root sign and no root in a denominator (we deal with that below).

**A picture of $\sqrt8 = 2\sqrt2$.** A square of area 2 has side $\sqrt2$. Put four of them together into a bigger
square: its side is $2\sqrt2$, and its area is $4 \times 2 = 8$. So the side of a square of area 8 is $2\sqrt2$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 170" role="img" aria-label="A big square made of four small squares; each small square has area 2 and side root 2, so the big square has area 8 and side 2 root 2">
  <g stroke="currentColor" stroke-width="2">
    <rect x="40" y="15" width="60" height="60" fill="#9cc9ea"/>
    <rect x="100" y="15" width="60" height="60" fill="#7ccf9a"/>
    <rect x="40" y="75" width="60" height="60" fill="#7ccf9a"/>
    <rect x="100" y="75" width="60" height="60" fill="#9cc9ea"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="70" y="50">2</text><text x="130" y="50">2</text><text x="70" y="110">2</text><text x="130" y="110">2</text>
    <text x="70" y="153">√2</text><text x="130" y="153">√2</text>
  </g>
  <text x="185" y="70" font-size="13" fill="currentColor">area 8</text>
  <text x="185" y="90" font-size="13" fill="currentColor">side 2√2 = √8</text>
</svg>
</div>

### Entire and mixed radicals

$\sqrt{72}$ is called an **entire radical**: the whole number is under the root sign. $6\sqrt2$ is a **mixed
radical**: a number times a root. Simplifying turns an entire radical into a mixed one. You can also go back, by
moving the number inside as its square:

$$3\sqrt5 = \sqrt9 \times \sqrt5 = \sqrt{45}$$

This answers the first puzzle. $3\sqrt5 = \sqrt{45}$ and $4\sqrt3 = \sqrt{16 \times 3} = \sqrt{48}$. Since
$45 < 48$, it follows that $3\sqrt5 < 4\sqrt3$. Entire radicals are easy to compare: just compare the radicands.

### Adding and subtracting: like radicals

Think of $\sqrt2$ as a unit, like "apples". Three apples and five apples make eight apples, so

$$3\sqrt2 + 5\sqrt2 = 8\sqrt2$$

This is the distributive law: $3\sqrt2 + 5\sqrt2 = (3 + 5)\sqrt2$. Radicals with the **same radicand** (after
simplifying) are called **like radicals**, and only like radicals can be combined. $\sqrt2 + \sqrt3$ cannot be
written more simply: it is about $1.414 + 1.732 = 3.146$, and it is not $\sqrt5 \approx 2.236$.

Often radicals only look unlike until you simplify them. That answers the second puzzle:

$$\sqrt{12} + \sqrt{27} - \sqrt{75} = 2\sqrt3 + 3\sqrt3 - 5\sqrt3 = 0\sqrt3 = 0$$

It is **exactly** 0. The calculator was right, but only the radicals could prove it.

### Multiplying

Multiply the numbers in front together and the radicands together (the product rule), then simplify:

$$2\sqrt3 \times 5\sqrt6 = (2 \times 5)\sqrt{3 \times 6} = 10\sqrt{18} = 10 \times 3\sqrt2 = 30\sqrt2$$

Remember that $\sqrt a \times \sqrt a = a$ (that is what a square root means). Brackets expand just as in algebra,
each term times each term:

$$(1 + \sqrt2)(3 - \sqrt2) = 3 - \sqrt2 + 3\sqrt2 - 2 = 1 + 2\sqrt2$$

A special case is worth noticing. When the two brackets differ only in a sign, the middle terms cancel and the roots
disappear:

$$(\sqrt5 + \sqrt3)(\sqrt5 - \sqrt3) = 5 - \sqrt{15} + \sqrt{15} - 3 = 2$$

This is the pattern $(a + b)(a - b) = a^2 - b^2$. The pair $\sqrt5 + \sqrt3$ and $\sqrt5 - \sqrt3$ are called
**conjugates**.

### Rationalising the denominator

$\tfrac{1}{\sqrt2}$ and $\tfrac{\sqrt2}{2}$ are the same number. To see it, multiply top and bottom by $\sqrt2$ (that is
multiplying by $\tfrac{\sqrt2}{\sqrt2} = 1$, which changes nothing):

$$\frac{1}{\sqrt2} = \frac{1 \times \sqrt2}{\sqrt2 \times \sqrt2} = \frac{\sqrt2}{2}$$

Moving the root from the bottom to the top is called **rationalising the denominator**, because the denominator
becomes a rational number. Why bother? Before calculators, people worked out roots by hand. Dividing 1.41421 by 2 is
easy; dividing 1 by 1.41421 by hand is slow and error-prone. Today the main reasons are that it gives one standard way
to write each answer (so you can see that two answers agree), and it makes like radicals easy to spot and combine.

When the denominator is a sum or difference, multiply top and bottom by the **conjugate**, so that the roots cancel
underneath:

$$\frac{1}{\sqrt3 - 1} = \frac{1}{\sqrt3 - 1} \times \frac{\sqrt3 + 1}{\sqrt3 + 1} = \frac{\sqrt3 + 1}{3 - 1} = \frac{\sqrt3 + 1}{2}$$

## Worked examples

**1. Simplify** $\sqrt{50}$, $\sqrt{200}$ and $\sqrt{\tfrac{18}{25}}$.

1. $\sqrt{50} = \sqrt{25 \times 2} = 5\sqrt2$.
2. $\sqrt{200} = \sqrt{100 \times 2} = 10\sqrt2$.
3. $\sqrt{\tfrac{18}{25}} = \dfrac{\sqrt{18}}{\sqrt{25}} = \dfrac{3\sqrt2}{5}$.

**2. Add after simplifying:** $\sqrt8 + \sqrt{18} + \sqrt{32}$.

1. $\sqrt8 = 2\sqrt2$, $\sqrt{18} = 3\sqrt2$, $\sqrt{32} = \sqrt{16 \times 2} = 4\sqrt2$.
2. All like radicals: $(2 + 3 + 4)\sqrt2 = 9\sqrt2$.
3. Check with decimals: $2.828 + 4.243 + 5.657 = 12.728$, and $9 \times 1.4142 = 12.728$. ✓

**3. Expand** $(1 + \sqrt2)^2$.

1. $(1 + \sqrt2)(1 + \sqrt2) = 1 + \sqrt2 + \sqrt2 + \sqrt2 \times \sqrt2$.
2. $= 1 + 2\sqrt2 + 2 = 3 + 2\sqrt2$.
3. Note that it is **not** $1 + 2 = 3$: squaring a sum is not squaring each part.

**4. Rationalise** $\dfrac{6}{\sqrt3}$ and $\dfrac{4}{\sqrt5 + 1}$.

1. $\dfrac{6}{\sqrt3} \times \dfrac{\sqrt3}{\sqrt3} = \dfrac{6\sqrt3}{3} = 2\sqrt3$.
2. Multiply by the conjugate $\sqrt5 - 1$: $\dfrac{4(\sqrt5 - 1)}{(\sqrt5 + 1)(\sqrt5 - 1)} = \dfrac{4(\sqrt5 - 1)}{5 - 1}
   = \sqrt5 - 1$.

**5. A diagonal.** A square has side 6 cm. Its diagonal is $\sqrt{6^2 + 6^2}$ by Pythagoras. Write it in simplest
form.

$\sqrt{36 + 36} = \sqrt{72} = 6\sqrt2$ cm, about 8.49 cm. In general a square of side $s$ has diagonal $s\sqrt2$.

## Try it

1. Simplify: (a) $\sqrt{48}$ (b) $\sqrt{98}$ (c) $\sqrt{180}$ (d) $\sqrt{\tfrac{27}{4}}$
2. Write $5\sqrt2$ and $4\sqrt3$ as entire radicals. Which is bigger?
3. Simplify: (a) $4\sqrt5 + 2\sqrt5 - \sqrt5$ (b) $\sqrt{20} + \sqrt{45} - \sqrt{80}$
4. Multiply and simplify: (a) $\sqrt6 \times \sqrt{15}$ (b) $3\sqrt2 \times 4\sqrt{10}$
5. Expand and simplify: (a) $(\sqrt7 + 2)(\sqrt7 - 2)$ (b) $(3 - \sqrt2)^2$
6. Rationalise: (a) $\dfrac{5}{\sqrt5}$ (b) $\dfrac{3}{2\sqrt6}$ (c) $\dfrac{2}{3 - \sqrt7}$
7. A square has area 75 cm². Write its side in simplest radical form, and estimate it.
8. Is $\sqrt2 + \sqrt8$ equal to $\sqrt{10}$? Work out what it really is.

??? note "Answers"
    1. (a) $\sqrt{16 \times 3} = 4\sqrt3$. (b) $\sqrt{49 \times 2} = 7\sqrt2$. (c) $\sqrt{36 \times 5} = 6\sqrt5$.
       (d) $\dfrac{\sqrt{27}}{\sqrt4} = \dfrac{3\sqrt3}{2}$.
    2. $5\sqrt2 = \sqrt{25 \times 2} = \sqrt{50}$ and $4\sqrt3 = \sqrt{48}$. $50 > 48$, so $5\sqrt2$ is bigger.
    3. (a) $(4 + 2 - 1)\sqrt5 = 5\sqrt5$. (b) $2\sqrt5 + 3\sqrt5 - 4\sqrt5 = \sqrt5$.
    4. (a) $\sqrt{90} = \sqrt{9 \times 10} = 3\sqrt{10}$. (b) $12\sqrt{20} = 12 \times 2\sqrt5 = 24\sqrt5$.
    5. (a) Conjugates: $7 - 4 = 3$. (b) $9 - 3\sqrt2 - 3\sqrt2 + 2 = 11 - 6\sqrt2$.
    6. (a) $\dfrac{5\sqrt5}{5} = \sqrt5$. (b) $\dfrac{3\sqrt6}{2 \times 6} = \dfrac{3\sqrt6}{12} = \dfrac{\sqrt6}{4}$.
       (c) $\dfrac{2(3 + \sqrt7)}{(3 - \sqrt7)(3 + \sqrt7)} = \dfrac{2(3 + \sqrt7)}{9 - 7} = 3 + \sqrt7$.
    7. $\sqrt{75} = \sqrt{25 \times 3} = 5\sqrt3$ cm. Since $\sqrt3 \approx 1.732$, about **8.66 cm**. (Check:
       $8.66^2 \approx 75.0$.)
    8. **No.** $\sqrt2 + \sqrt8 = \sqrt2 + 2\sqrt2 = 3\sqrt2 = \sqrt{18} \approx 4.24$, while $\sqrt{10} \approx 3.16$.
       You cannot add radicands.

## Common mistake

**Adding under the root.** $\sqrt{a} + \sqrt{b}$ is **not** $\sqrt{a + b}$. A quick test: $\sqrt9 + \sqrt{16} = 7$,
but $\sqrt{25} = 5$. Only like radicals combine, and they combine by adding the numbers in front, not the radicands.

**Stopping too early when simplifying.** $\sqrt{72} = 2\sqrt{18}$ is true, but not finished: 18 still has the square
factor 9. Keep going until the radicand has no square factor: $6\sqrt2$.

## Where it leads

- Back: [Proof that √2 is irrational](03-root-two-irrational.md) · Next: [The real numbers](05-real-numbers.md)
- [Level 6 page](index.md) · [Numbers topic page](../index.md)
- Diagonals, Pythagoras and exact lengths like $6\sqrt2$: [Geometry](../../geometry/index.md).
- $(a + b)(a - b) = a^2 - b^2$ and expanding brackets: [Algebra](../../algebra/index.md). The quadratic formula
  gives answers like $\tfrac{-1 + \sqrt5}{2}$, which are radicals.
- Conjugates come back with complex numbers in [level 7](../level-7/index.md), where dividing by $a + bi$ uses
  exactly the same trick.
