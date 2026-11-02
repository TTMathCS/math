---
title: "Factoring"
---

# Factoring

*Algebra · level 6, lesson 3 of 6*

## A question to start

Is 9991 a prime number?

To check by dividing, you would try 2, 3, 5, 7, 11, 13 and so on, a long and boring job. But notice that
$9991 = 10000 - 9$, and both of those are perfect squares: $100^2$ and $3^2$. From the last lesson,
$(a + b)(a - b) = a^2 - b^2$. Running it **backwards**:

$$9991 = 100^2 - 3^2 = (100 - 3)(100 + 3) = 97 \times 103.$$

So 9991 is not prime, and we found its factors without a single division. Running multiplication backwards like this
is called **factoring**, and it is one of the most powerful tools in algebra. In level 7 it is the main way to solve
equations with $x^2$ in them. This lesson teaches the five kinds of factoring you will use most.

## The idea

### What factoring means

To **factor** an expression means to write it as a **product** (things multiplied together). It is the reverse of
expanding:

$$\text{expanding: } (x + 2)(x + 3) \longrightarrow x^2 + 5x + 6, \qquad \text{factoring: } x^2 + 5x + 6 \longrightarrow (x + 2)(x + 3).$$

Why would you want a product? Because products are easy to reason about. If $(x + 2)(x + 3) = 0$, one of the brackets
must be zero, so $x = -2$ or $x = -3$. A sum like $x^2 + 5x + 6 = 0$ gives no such clue.

The great thing about factoring is that you can **always check** it: expand your answer and see whether you get back
to the start.

### Type 1: common factors (always look first)

You met this in level 5. Find the greatest common factor (GCF) of all the terms, numbers and letters, and take it
outside a bracket:

$$6x^3 - 9x^2 = 3x^2(2x - 3).$$

The GCF of 6 and 9 is 3; the lowest power of $x$ in both terms is $x^2$. Dividing each term by $3x^2$ gives what goes
in the bracket. **Always** check for a common factor before anything else: it makes the other types easier.

### Type 2: trinomials $x^2 + bx + c$

Expand a general product $(x + r)(x + s)$:

$$(x + r)(x + s) = x^2 + sx + rx + rs = x^2 + (r + s)x + rs.$$

So to factor $x^2 + bx + c$ you need two numbers $r$ and $s$ that

- **multiply** to $c$ (the constant term), and
- **add** to $b$ (the coefficient of $x$).

The tile picture shows why: the $x^2$ square, $b$ bars and $c$ unit squares must fit together into one rectangle.
For $x^2 + 5x + 6$, the 6 unit squares must form a rectangle in the corner, 2 by 3, and then the bars fill the two
sides: 3 along one side and 2 along the other, $2 + 3 = 5$ bars.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="Algebra tiles: one x squared tile, five x bars and six unit squares arranged into a rectangle with sides x plus 3 and x plus 2">
  <rect x="40" y="30" width="100" height="100" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <rect x="140" y="30" width="25" height="100"/><rect x="165" y="30" width="25" height="100"/><rect x="190" y="30" width="25" height="100"/>
    <rect x="40" y="130" width="100" height="25"/><rect x="40" y="155" width="100" height="25"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="1.5">
    <rect x="140" y="130" width="25" height="25"/><rect x="165" y="130" width="25" height="25"/><rect x="190" y="130" width="25" height="25"/>
    <rect x="140" y="155" width="25" height="25"/><rect x="165" y="155" width="25" height="25"/><rect x="190" y="155" width="25" height="25"/>
  </g>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="90" y="22">x</text><text x="177" y="22">3</text><text x="28" y="85">x</text><text x="28" y="160">2</text>
    <text x="90" y="85">x²</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="240" y="80">x² + 5x + 6</text><text x="240" y="104">= (x + 2)(x + 3)</text>
    <text x="240" y="140">2 × 3 = 6</text><text x="240" y="160">2 + 3 = 5</text>
  </g>
</svg>
</div>

**Signs.** The signs of $b$ and $c$ tell you the signs of $r$ and $s$:

| $c$ | $b$ | then $r$ and $s$ are | example |
| --- | --- | --- | --- |
| positive | positive | both positive | $x^2 + 7x + 12 = (x + 3)(x + 4)$ |
| positive | negative | both negative | $x^2 - 7x + 12 = (x - 3)(x - 4)$ |
| negative | either | one positive, one negative | $x^2 - 2x - 15 = (x - 5)(x + 3)$ |

When $c$ is negative, the two numbers have opposite signs, and the bigger one (ignoring signs) takes the sign of $b$.

**Method.** List the factor pairs of $c$, and find the pair with the right sum. For $x^2 - 2x - 15$: pairs that
multiply to $-15$ are $1, -15$; $-1, 15$; $3, -5$; $-3, 5$. Their sums are $-14$, $14$, $-2$, $2$. The pair with sum
$-2$ is $3$ and $-5$. So $x^2 - 2x - 15 = (x + 3)(x - 5)$.

### Type 3: trinomials $ax^2 + bx + c$ (decomposition)

When the $x^2$ term has a coefficient other than 1, guessing gets harder. **Decomposition** turns it into a routine:

1. Multiply $a \times c$.
2. Find two numbers that **multiply to $ac$** and **add to $b$**.
3. Use them to **split** the middle term into two terms.
4. **Group** the four terms in pairs and take a common factor out of each pair.
5. The two brackets should now match; take that bracket out as a common factor.

Take $6x^2 + 11x - 10$. Here $ac = 6 \times (-10) = -60$. Two numbers with product $-60$ and sum $11$: $15$ and $-4$.
Split and group:

$$
\begin{aligned}
6x^2 + 11x - 10 &= 6x^2 + 15x - 4x - 10\\
&= 3x(2x + 5) - 2(2x + 5)\\
&= (3x - 2)(2x + 5).
\end{aligned}
$$

Check: $(3x - 2)(2x + 5) = 6x^2 + 15x - 4x - 10 = 6x^2 + 11x - 10$ ✓.

**Why it works.** Expand a general product $(px + q)(rx + s) = prx^2 + psx + qrx + qs$. The middle term is made of two
pieces, $ps$ and $qr$, and their product is $ps \times qr = pr \times qs = a \times c$. So the two pieces of the middle
term **always** multiply to $ac$. Decomposition simply finds those two pieces again and undoes the expansion.

### Type 4: difference of squares

From $(a + b)(a - b) = a^2 - b^2$:

$$a^2 - b^2 = (a - b)(a + b).$$

Here is a picture proof. Cut a $b$ by $b$ square out of the corner of an $a$ by $a$ square; the area left is
$a^2 - b^2$. Slice the L-shape that remains into two rectangles and move one, and they form a single rectangle
$a + b$ long and $a - b$ wide.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 175" role="img" aria-label="Left: a square of side a with a small square of side b removed from a corner, leaving an L shape cut into two pieces. Right: the two pieces rearranged into a rectangle a plus b long and a minus b wide.">
  <rect x="20" y="20" width="120" height="70" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="90" width="70" height="50" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="90" y="90" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="80" y="14">a</text><text x="115" y="120">b²</text><text x="80" y="162">a² − b²</text>
  </g>
  <text x="170" y="85" font-size="20" fill="currentColor" text-anchor="middle">→</text>
  <rect x="200" y="45" width="120" height="70" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="320" y="45" width="50" height="70" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="285" y="38">a + b</text><text x="384" y="84">a − b</text>
    <text x="285" y="140">(a + b)(a − b)</text>
  </g>
</svg>
</div>

The blue piece is $a - b$ by $b$; standing it on end beside the orange piece (which is $a$ by $a - b$) makes the
rectangle. To use the pattern, check that the expression is **two perfect squares with a minus between them**:

$$4x^2 - 25 = (2x)^2 - 5^2 = (2x - 5)(2x + 5).$$

A **sum** of squares like $x^2 + 4$ does **not** factor this way (see question 8).

### Type 5: perfect square trinomials

From $(a + b)^2 = a^2 + 2ab + b^2$: if the first and last terms are perfect squares and the middle term is twice the
product of their square roots, the trinomial is a perfect square.

$$x^2 - 10x + 25 = (x - 5)^2, \qquad 9x^2 + 12x + 4 = (3x + 2)^2.$$

Check the second: $\sqrt{9x^2} = 3x$, $\sqrt{4} = 2$, and $2 \times 3x \times 2 = 12x$ ✓. (Methods 2 and 3 would also
find these; spotting the pattern is just quicker.)

### A plan for any expression

1. Take out any **common factor**.
2. Count the terms. **Two** terms: is it a difference of squares? **Three** terms: is it a perfect square? If not, use
   the $x^2 + bx + c$ method or decomposition.
3. Look at every bracket: can it be factored again? Factor **fully**.
4. **Check** by expanding.

Not every trinomial factors with whole numbers. $x^2 + x + 1$ needs two numbers with product 1 and sum 1, and there
are none among the whole numbers. In level 7 you will solve such cases with the quadratic formula.

## Worked examples

**1. Common factor.** $8a^2b + 12ab^2 = 4ab(2a + 3b)$. Check: $4ab \times 2a = 8a^2b$ and $4ab \times 3b = 12ab^2$ ✓.

**2. Simple trinomials.** Factor $x^2 + 7x + 12$ and $x^2 - 2x - 15$.

- $x^2 + 7x + 12$: product 12, sum 7: 3 and 4. So $(x + 3)(x + 4)$.
- $x^2 - 2x - 15$: product $-15$, sum $-2$: 3 and $-5$. So $(x + 3)(x - 5)$.
- Check the second: $x^2 - 5x + 3x - 15 = x^2 - 2x - 15$ ✓.

**3. Decomposition.** Factor $6x^2 + 11x - 10$: done above, $(3x - 2)(2x + 5)$.

**4. Common factor first, then difference of squares.** Factor $2x^3 - 18x$ fully.

- Common factor $2x$: $2x(x^2 - 9)$.
- $x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3)$.
- Answer: $2x(x - 3)(x + 3)$. Check with $x = 4$: $128 - 72 = 56$ and $8 \times 1 \times 7 = 56$ ✓.

**5. Common factor first, then a trinomial.** Factor $2x^2 - 8x - 42$ fully.

- Common factor 2: $2(x^2 - 4x - 21)$.
- Product $-21$, sum $-4$: $-7$ and 3. So $2(x - 7)(x + 3)$.

**6. Mental arithmetic.** $51^2 - 49^2 = (51 - 49)(51 + 49) = 2 \times 100 = 200$. Much easier than $2601 - 2401$.

## Try it

1. Factor $8a^2 + 12a$ fully.
2. Factor: (a) $x^2 + 9x + 20$; (b) $x^2 - x - 12$; (c) $x^2 - 11x + 24$.
3. Factor $2x^2 + 7x + 3$ by decomposition.
4. Factor $3x^2 - 10x + 8$ by decomposition.
5. Factor: (a) $49y^2 - 1$; (b) $3x^2 - 75$.
6. Factor $x^2 + 14x + 49$ and $4x^2 - 20x + 25$.
7. Use the difference of squares to show that 391 is not prime. (Hint: 391 is $400 - 9$.)
8. Explain why $x^2 + 4$ cannot be written as $(x + r)(x + s)$ for any whole numbers $r$ and $s$.

??? note "Answers"
    1. GCF $4a$: $4a(2a + 3)$.
    2. (a) Product 20, sum 9: 4 and 5, so $(x + 4)(x + 5)$. (b) Product $-12$, sum $-1$: $-4$ and 3, so
       $(x - 4)(x + 3)$. (c) Product 24, sum $-11$: $-3$ and $-8$, so $(x - 3)(x - 8)$.
    3. $ac = 6$; product 6 and sum 7: 6 and 1. Split: $2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$.
       Check: $2x^2 + 6x + x + 3$ ✓.
    4. $ac = 24$; product 24 and sum $-10$: $-4$ and $-6$. Split: $3x^2 - 4x - 6x + 8$, then group: $x(3x - 4) - 2(3x - 4)$,
       which is $(x - 2)(3x - 4)$. Check: $3x^2 - 4x - 6x + 8 = 3x^2 - 10x + 8$ ✓. (Careful with the sign in $-2(3x - 4)$: it
       gives $-6x + 8$.)
    5. (a) $(7y)^2 - 1^2 = (7y - 1)(7y + 1)$. (b) Common factor 3 first: $3(x^2 - 25) = 3(x - 5)(x + 5)$.
    6. $x^2 + 14x + 49 = (x + 7)^2$, since $2 \times x \times 7 = 14x$. $4x^2 - 20x + 25 = (2x - 5)^2$, since
       $2 \times 2x \times 5 = 20x$.
    7. $391 = 20^2 - 3^2 = (20 - 3)(20 + 3) = 17 \times 23$. Check: $17 \times 23 = 391$ ✓.
    8. Expanding $(x + r)(x + s)$ gives $x^2 + (r + s)x + rs$. To match $x^2 + 0x + 4$ we would need $r + s = 0$, so
       $s = -r$, and then $rs = -r^2$. But $-r^2$ is never positive, so it cannot equal 4. So no such numbers exist
       (in fact, not even among fractions or decimals).

## Common mistake

**Stopping too early.** $2x^3 - 18x = 2x(x^2 - 9)$ is factored, but not **fully**: $x^2 - 9$ still factors. Always
look inside every bracket once more.

**Getting signs wrong and not checking.** $x^2 - 2x - 15$ is $(x - 5)(x + 3)$, not $(x + 5)(x - 3)$, which expands to
$x^2 + 2x - 15$. The check by expanding takes ten seconds and catches every sign slip.

## Where it leads

- Previous: [Polynomials](02-polynomials.md) · Next: [Linear systems by graphing](04-systems-graphing.md)
- [Level 6 page](index.md) · [Algebra topic page](../index.md)
- Taking out a common factor began in [The distributive law](../level-5/01-distributive-law.md).
- In level 7, factoring solves quadratic equations by the zero product property, and finds where a parabola crosses
  the $x$-axis.
- Factoring numbers into primes is the same idea for whole numbers: [Number theory](../../number-theory/index.md).
  Polynomials that cannot be factored, and how to tell: [MAT240 Unit 9 (polynomials)](../../../uoft/MAT240H1/unit09.md).
