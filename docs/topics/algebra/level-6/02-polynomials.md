---
title: "Polynomials"
---

# Polynomials

*Algebra · level 6, lesson 2 of 6*

## A question to start

Work out $23 \times 47$ by splitting each number into tens and ones:

$$23 \times 47 = (20 + 3)(40 + 7).$$

Draw a rectangle 23 by 47, and cut it into four pieces: $20 \times 40 = 800$, $20 \times 7 = 140$, $3 \times 40 = 120$
and $3 \times 7 = 21$. Add them: $800 + 140 + 120 + 21 = 1081$.

Now look at $(2x + 3)(4x + 7)$. Cut its rectangle the same way: $8x^2 + 14x + 12x + 21 = 8x^2 + 26x + 21$. Put
$x = 10$ in and you get $800 + 260 + 21 = 1081$ again. Of course: when $x = 10$, $2x + 3$ **is** 23 and $4x + 7$
**is** 47.

The long multiplication you learned in primary school is algebra in disguise, with $x = 10$. In this lesson you meet
the expressions that this multiplication produces, **polynomials**, and learn to add, subtract and multiply them.

## The idea

### The words

A **monomial** is a single term made of a number times letters with whole-number exponents: $7$, $-3x$, $5x^2y$,
$\tfrac12 a^3$. The number in front is the **coefficient**.

A **polynomial** is a sum of monomials, such as $4x^3 - x^2 + 7x - 2$. Its pieces are its **terms**. Special names
count the terms:

| Number of terms | Name | Example |
| --- | --- | --- |
| 1 | monomial | $6x^2$ |
| 2 | binomial ("two names") | $x + 5$ |
| 3 | trinomial | $x^2 - 5x + 6$ |
| more | polynomial | $x^4 + x^3 - 2x + 1$ |

A term with no letter, like the $-2$, is the **constant term**.

### Degree

The **degree of a term** is the total of its exponents: $5x^2y$ has degree $2 + 1 = 3$, and a constant like 7 has
degree 0 (think of it as $7x^0$). The **degree of a polynomial** is the highest degree of any of its terms. Degree 1 is
called **linear** ($3x + 1$), degree 2 **quadratic** ($x^2 - 5x + 6$), degree 3 **cubic**, degree 4 **quartic**.

A polynomial in one letter is in **standard form** when its terms are written from the highest power down:
$-x^2 + 4x^3 + 7 - 2x$ becomes $4x^3 - x^2 - 2x + 7$. Standard form makes degree and coefficients easy to read, and
makes like terms easy to line up.

### What is not a polynomial

Exponents in a polynomial must be whole numbers 0, 1, 2, .... So these are **not** polynomials: $\tfrac{1}{x}$ (which
is $x^{-1}$), $\sqrt{x}$ (which is $x^{1/2}$, as you will see in level 7), and $2^x$ (the letter is in the exponent).

### Adding and subtracting

Adding polynomials is just collecting like terms (level 4): $x^2$ terms with $x^2$ terms, $x$ terms with $x$ terms,
numbers with numbers.

$$(3x^2 - 2x + 5) + (x^2 + 7x - 8) = 4x^2 + 5x - 3.$$

**Subtracting** a polynomial means subtracting **every** term of it. The minus in front of the bracket flips every sign
inside (it is $-1$ times the bracket, by the distributive law):

$$(5a^2 + 3a - 1) - (2a^2 - 4a + 6) = 5a^2 + 3a - 1 - 2a^2 + 4a - 6 = 3a^2 + 7a - 7.$$

### Multiplying a monomial by a polynomial

Use the distributive law, and the exponent laws for each product:

$$-2x(3x^2 - x + 4) = -6x^3 + 2x^2 - 8x.$$

Each term of the bracket is multiplied by $-2x$: $-2x \times 3x^2 = -6x^3$, $-2x \times (-x) = +2x^2$,
$-2x \times 4 = -8x$.

### Multiplying two binomials: the area model

To multiply $(x + 3)(x + 5)$, draw a rectangle whose sides are $x + 3$ and $x + 5$. Split each side into its two parts.
The rectangle splits into **four** smaller rectangles, and the total area is the sum of the four.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Area model: a rectangle with sides x plus 3 and x plus 5 split into four parts: x squared, 3x, 5x and 15">
  <rect x="60" y="30" width="120" height="120" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="180" y="30" width="45" height="120" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="150" width="120" height="75" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="180" y="150" width="45" height="75" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="120" y="22">x</text><text x="202" y="22">3</text>
    <text x="46" y="95">x</text><text x="46" y="192">5</text>
    <text x="120" y="95">x²</text><text x="202" y="95">3x</text>
    <text x="120" y="192">5x</text><text x="202" y="192">15</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="245" y="90">(x + 3)(x + 5)</text>
    <text x="245" y="115">= x² + 3x + 5x + 15</text>
    <text x="245" y="140">= x² + 8x + 15</text>
  </g>
</svg>
</div>

$$(x + 3)(x + 5) = x^2 + 3x + 5x + 15 = x^2 + 8x + 15.$$

The two middle pieces are like terms, so they combine. That is why the answer has three terms, not four.

### Why every term meets every term

The area model is the distributive law used twice. Treat $(x + 5)$ as a single number first:

$$(x + 3)(x + 5) = x(x + 5) + 3(x + 5) = x^2 + 5x + 3x + 15.$$

Each term of the first bracket multiplies each term of the second. That is the rule for multiplying **any** two
polynomials: every term of one meets every term of the other once. Two terms times two terms gives $2 \times 2 = 4$
products; two terms times three terms gives 6; and so on. A grid with one row per term of the first bracket and one
column per term of the second keeps track of them, even when there are negative terms (the "areas" are then just
products, some negative).

### FOIL: a shortcut, not a rule

For two binomials, people often remember the four products as **FOIL**: **F**irst terms, **O**uter terms, **I**nner
terms, **L**ast terms. For $(2x - 3)(x + 4)$: First $2x \cdot x = 2x^2$, Outer $2x \cdot 4 = 8x$, Inner
$-3 \cdot x = -3x$, Last $-3 \cdot 4 = -12$. Total $2x^2 + 5x - 12$.

FOIL is just a way of not forgetting one of the four rectangles. It only works for binomial times binomial. For
$(x + 2)(x^2 - 3x + 1)$ there are six products, and FOIL has no letters for them, so use the grid or the "every term
meets every term" rule.

### Three special products

Three products come up so often that they are worth knowing on sight:

$$(a + b)^2 = a^2 + 2ab + b^2, \qquad (a - b)^2 = a^2 - 2ab + b^2, \qquad (a + b)(a - b) = a^2 - b^2.$$

The picture for the first: a square of side $a + b$ splits into an $a$ by $a$ square, a $b$ by $b$ square, and **two**
$a$ by $b$ rectangles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 175" role="img" aria-label="A square of side a plus b split into a squared, b squared and two rectangles a b">
  <rect x="40" y="20" width="100" height="100" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="140" y="20" width="40" height="100" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="40" y="120" width="100" height="40" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="140" y="120" width="40" height="40" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="90" y="14">a</text><text x="160" y="14">b</text><text x="28" y="74">a</text><text x="28" y="145">b</text>
    <text x="90" y="75">a²</text><text x="160" y="75">ab</text><text x="90" y="145">ab</text><text x="160" y="145">b²</text>
  </g>
  <text x="252" y="80" font-size="13" text-anchor="middle" fill="currentColor">(a + b)²</text>
  <text x="252" y="100" font-size="13" text-anchor="middle" fill="currentColor">= a² + 2ab + b²</text>
</svg>
</div>

The third one is surprising: the middle terms cancel. $(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$. It gives a
mental arithmetic trick: $53 \times 47 = (50 + 3)(50 - 3) = 2500 - 9 = 2491$.

### Degrees add when you multiply

When you multiply two polynomials, the highest-degree term of the answer comes from multiplying the two
highest-degree terms, and exponents add. So a degree 2 polynomial times a degree 3 polynomial has degree 5. This is a
quick check: $(x + 2)(x^2 - 3x + 1)$ must have degree $1 + 2 = 3$.

## Worked examples

**1. Adding.** $(3x^2 - 2x + 5) + (x^2 + 7x - 8) = 4x^2 + 5x - 3$.

- Check with $x = 1$: $6 + 0 = 6$, and $4 + 5 - 3 = 6$ ✓.

**2. Subtracting.** $(5a^2 + 3a - 1) - (2a^2 - 4a + 6) = 3a^2 + 7a - 7$ (shown above).

- Check with $a = 1$: $7 - 4 = 3$, and $3 + 7 - 7 = 3$ ✓.

**3. Two binomials with negatives.** Expand $(2x - 3)(x + 4)$.

| | $x$ | $+4$ |
| --- | --- | --- |
| $2x$ | $2x^2$ | $8x$ |
| $-3$ | $-3x$ | $-12$ |

- Add the four cells: $2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$.
- Check with $x = 2$: $(1)(6) = 6$, and $8 + 10 - 12 = 6$ ✓.

**4. Binomial times trinomial.** Expand $(x + 2)(x^2 - 3x + 1)$.

- $x$ times each: $x^3 - 3x^2 + x$. Then $2$ times each: $2x^2 - 6x + 2$.
- Collect: $x^3 - x^2 - 5x + 2$. (Degree 3, as predicted.)
- Check with $x = 1$: $3 \times (-1) = -3$, and $1 - 1 - 5 + 2 = -3$ ✓.

**5. Special products.** $(x - 4)^2 = x^2 - 8x + 16$ and $(x + 6)(x - 6) = x^2 - 36$.

- In the first, the middle term is $2 \times x \times (-4) = -8x$, and the last is $(-4)^2 = +16$.

**6. Expand and simplify.** $(x + 1)(x + 2) - (x - 3)^2$.

- $(x + 1)(x + 2) = x^2 + 3x + 2$ and $(x - 3)^2 = x^2 - 6x + 9$.
- Subtract (flip every sign of the second): $x^2 + 3x + 2 - x^2 + 6x - 9 = 9x - 7$. The $x^2$ terms cancel.
- Check with $x = 0$: $2 - 9 = -7$ ✓.

## Try it

1. Give the degree of each and say whether it is a monomial, binomial or trinomial: (a) $4x^3 - x + 2$;
   (b) $7a^2b^3$; (c) $5$.
2. Simplify $(2x^2 + 3x - 4) + (5x^2 - x + 9)$.
3. Simplify $(4y^2 - 3y + 2) - (y^2 + 5y - 7)$.
4. Expand $3a(2a^2 - 5a + 1)$.
5. Expand: (a) $(x + 7)(x - 2)$; (b) $(3x - 1)(2x + 5)$.
6. Expand $(2x + 3)^2$, and draw the area picture.
7. Expand $(x - 1)(x^2 + x + 1)$. What do you notice?
8. Use $(a + b)(a - b) = a^2 - b^2$ to work out $102 \times 98$ in your head.

??? note "Answers"
    1. (a) Degree 3, trinomial. (b) Degree $2 + 3 = 5$, monomial. (c) Degree 0, monomial (a constant).
    2. $7x^2 + 2x + 5$.
    3. Flip the signs of the second bracket: $4y^2 - 3y + 2 - y^2 - 5y + 7 = 3y^2 - 8y + 9$. Check with $y = 1$:
       $3 - (-1) = 4$, and $3 - 8 + 9 = 4$ ✓.
    4. $6a^3 - 15a^2 + 3a$.
    5. (a) $x^2 - 2x + 7x - 14 = x^2 + 5x - 14$. (b) $6x^2 + 15x - 2x - 5 = 6x^2 + 13x - 5$. Check (b) with $x = 1$:
       $2 \times 7 = 14$, and $6 + 13 - 5 = 14$ ✓.
    6. $(2x + 3)^2 = 4x^2 + 12x + 9$: a $2x$ by $2x$ square ($4x^2$), two $2x$ by 3 rectangles ($6x$ each) and a 3 by 3
       square (9). Not $4x^2 + 9$.
    7. $x^3 + x^2 + x - x^2 - x - 1 = x^3 - 1$. Almost everything cancels in pairs. (This is the "difference of cubes"
       pattern, which you will factor in later levels.)
    8. $102 \times 98 = (100 + 2)(100 - 2) = 10000 - 4 = 9996$.

## Common mistake

**Forgetting the middle term.** $(x + 5)^2$ is **not** $x^2 + 25$. Write it as $(x + 5)(x + 5)$ and you get four
products: $x^2 + 5x + 5x + 25 = x^2 + 10x + 25$. The picture shows the two rectangles that the short version leaves out.
Test with $x = 1$: $36$ against $26$.

**Only flipping the first sign when subtracting.** $(4y^2 - 3y + 2) - (y^2 + 5y - 7)$ needs **all three** signs of the
second bracket changed: $-y^2 - 5y + 7$. A useful habit is to rewrite the subtraction as adding the flipped polynomial
before collecting.

## Where it leads

- Previous: [Exponent laws with variables](01-exponent-laws.md) · Next: [Factoring](03-factoring.md), which runs the area
  model backwards.
- [Level 6 page](index.md) · [Algebra topic page](../index.md)
- The single-bracket version: [The distributive law](../level-5/01-distributive-law.md). Collecting like terms with
  tiles: [Like terms](../level-4/03-like-terms.md).
- Quadratic polynomials become parabolas in level 7, and polynomial functions of any degree in level 8.
- Polynomials as objects in their own right: [MAT240 Unit 9 (polynomials)](../../../uoft/MAT240H1/unit09.md).
