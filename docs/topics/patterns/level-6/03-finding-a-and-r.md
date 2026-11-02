---
title: "Finding a and r"
---

# Finding a and r

*Patterns and sequences · level 6, lesson 3 of 6*

## A question to start

A geometric sequence has been half rubbed off a whiteboard. Only two terms are left:

> the **3rd** term is **4**, and the **5th** term is **36**.

What was the sequence? Try it before reading on. Most people find one answer. There are actually **two** different
geometric sequences that fit, and both are correct. By the end of this lesson you will see where the second one hides,
and when it can and cannot happen.

## The idea

### From two terms: divide, do not subtract

In level 5 you found $a$ and $d$ of an arithmetic sequence from two terms by **subtracting**: the difference between
the terms is $d$ times the number of steps. For a geometric sequence everything moves "one floor up":

- each step **multiplies** by $r$, so going several steps multiplies by a **power** of $r$;
- so you **divide** the terms instead of subtracting them, and take a **root** instead of dividing.

Try it with $t_2 = 12$ and $t_5 = 96$. From position 2 to position 5 is 3 steps:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 110" role="img" aria-label="Positions 2 to 5 joined by three hops each labelled times r, from 12 at position 2 to 96 at position 5">
  <line x1="30" y1="65" x2="290" y2="65" stroke="currentColor" stroke-width="2"/>
  <path d="M 50 61 Q 90 25 130 61" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 130 61 Q 170 25 210 61" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 210 61 Q 250 25 290 61" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="90" y="35" font-size="12" text-anchor="middle" fill="currentColor">× r</text>
  <text x="170" y="35" font-size="12" text-anchor="middle" fill="currentColor">× r</text>
  <text x="250" y="35" font-size="12" text-anchor="middle" fill="currentColor">× r</text>
  <circle cx="50" cy="65" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="130" cy="65" r="3" fill="currentColor"/>
  <circle cx="210" cy="65" r="3" fill="currentColor"/>
  <circle cx="290" cy="65" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="50" y="88" font-size="12" text-anchor="middle" fill="currentColor">t₂ = 12</text>
  <text x="280" y="88" font-size="12" text-anchor="middle" fill="currentColor">t₅ = 96</text>
  <text x="170" y="105" font-size="12" text-anchor="middle" fill="currentColor">12 × r × r × r = 96, so r³ = 8</text>
</svg>
</div>

$$r^3 = \frac{t_5}{t_2} = \frac{96}{12} = 8, \qquad\text{so}\qquad r = 2,$$

because $2 \times 2 \times 2 = 8$. Then step back once from the 2nd term: $a = t_2 \div r = 12 \div 2 = 6$. The
sequence is 6, **12**, 24, 48, **96**, ... and $t_n = 6 \times 2^{n-1}$.

In general, for terms $t_m$ and $t_k$ with $k > m$:

$$r^{\,k - m} = \frac{t_k}{t_m}.$$

With algebra, the two facts are $ar = 12$ and $ar^4 = 96$. Dividing the second by the first cancels $a$ and leaves
$r^3 = 8$: the same calculation. Dividing removes the shared start $a$, just as subtracting did for arithmetic
sequences.

### The hidden second answer: even numbers of steps

Now the whiteboard: $t_3 = 4$ and $t_5 = 36$. Two steps, so

$$r^2 = \frac{36}{4} = 9.$$

Which numbers square to 9? Both $3$ **and** $-3$, because $(-3) \times (-3) = 9$ too. So there are two sequences:

- $r = 3$: $a = t_3 \div r^2 = 4 \div 9 = \tfrac49$, giving $\tfrac49, \tfrac43, \mathbf{4}, 12, \mathbf{36}, 108, \ldots$
- $r = -3$: $a = 4 \div 9 = \tfrac49$ again (since $r^2 = 9$ either way), giving
  $\tfrac49, -\tfrac43, \mathbf{4}, -12, \mathbf{36}, -108, \ldots$

Both have 4 in position 3 and 36 in position 5. The terms in between, and the terms in even positions, differ in
sign. Whenever the number of steps between the two known terms is **even**, look for a positive and a negative ratio.

When the number of steps is **odd**, there is only one answer, and its sign is forced. For example, $t_1 = 2$ and
$t_4 = -54$ give $r^3 = -27$, so $r = -3$: a negative number cubed is negative, and no positive number cubed is $-27$.

And sometimes there is **no** answer: if $t_1 = 2$ and $t_3 = -18$, then $r^2 = -9$, but no real number squares to a
negative number. These two terms cannot belong to the same geometric sequence (two terms an even number of steps
apart always have the same sign).

### The middle of three: the geometric mean

If $x$, $y$, $z$ are three terms in a row of a geometric sequence, then $\dfrac{y}{x} = \dfrac{z}{y}$ (both are $r$).
Multiply both sides by $xy$:

$$y^2 = xz.$$

The middle term squared equals the product of its neighbours. The positive number whose square is $xz$, that is
$\sqrt{xz}$, is called the **geometric mean** of $x$ and $z$. Compare the arithmetic mean $\dfrac{x + z}{2}$ from
level 5. For 4 and 25: the arithmetic mean is 14.5 (halfway by **adding**), while the geometric mean is
$\sqrt{100} = 10$ ("halfway" by **multiplying**: $4 \times 2.5 = 10$ and $10 \times 2.5 = 25$).

### Arithmetic, geometric or neither?

To classify a sequence, run both tests:

1. **Differences** (later minus earlier). All equal: arithmetic.
2. **Ratios** (later divided by earlier). All equal: geometric.
3. Neither all equal: neither. (Then lesson 4 of level 5 may still help: maybe the **second** differences are
   constant, and it is quadratic.)

A sequence can be **both** only if it is constant and not zero, like 5, 5, 5: difference 0 and ratio 1. Any sequence
containing 0 (after the first term) is not geometric.

You can also classify from the rule. $t_n = 3n + 2$ is arithmetic ($n$ is multiplied by a number). $t_n = 5 \times 2^n$
is geometric ($n$ is an **exponent**): each step multiplies by 2. $t_n = n^2$ is neither ($n$ is the base, not the
exponent). And $t_n = 2^n + 1$ is neither: the ratios are $\tfrac53, \tfrac95, \tfrac{17}{9}, \ldots$ The "+1" spoils
the multiplying.

## Worked examples

**1. A shrinking sequence.** $t_3 = 100$ and $t_6 = 12.5$. Find $a$ and $r$.

$r^3 = 12.5 \div 100 = 0.125 = \tfrac18$, so $r = \tfrac12$. Back two steps: $a = 100 \div \left(\tfrac12\right)^2 = 100 \times 4 = 400$.
The sequence is 400, 200, 100, 50, 25, 12.5, ...

**2. Two answers.** $t_2 = 6$ and $t_4 = 54$. Find all possible sequences.

$r^2 = 54 \div 6 = 9$, so $r = 3$ or $r = -3$. Then $a = 6 \div r$:

- $r = 3$, $a = 2$: 2, 6, 18, 54, 162, ...
- $r = -3$, $a = -2$: −2, 6, −18, 54, −162, ...

**3. Inserting geometric means.** Put two numbers between 4 and 108 so that all four make a geometric sequence.

Four terms, 3 steps: $r^3 = 108 \div 4 = 27$, so $r = 3$. The sequence is 4, **12, 36**, 108.

**4. An unknown inside.** The numbers $x$, $x + 3$, $x + 9$ form a geometric sequence. Find $x$.

Middle squared equals the product of the neighbours: $(x + 3)^2 = x(x + 9)$. Multiply out:
$x^2 + 6x + 9 = x^2 + 9x$. The $x^2$ cancels, leaving $9 = 3x$, so $x = 3$. The sequence is **3, 6, 12**, ratio 2. ✓

**5. Classify.**

| Sequence | Differences | Ratios | Kind |
| --- | --- | --- | --- |
| 3, 9, 27, 81 | 6, 18, 54 | 3, 3, 3 | geometric |
| 3, 9, 15, 21 | 6, 6, 6 | 3, 1.67, 1.4 | arithmetic |
| 3, 9, 18, 30 | 6, 9, 12 | 3, 2, 1.67 | neither (quadratic) |
| 81, −27, 9, −3 | −108, 36, −12 | $-\tfrac13$, $-\tfrac13$, $-\tfrac13$ | geometric |

## Try it

1. A geometric sequence has $t_1 = 5$ and $t_4 = 40$. Find $r$ and $t_n$.
2. A geometric sequence has $t_2 = 10$ and $t_4 = 250$. Find both possible sequences (first four terms each).
3. A geometric sequence has $t_4 = 2$ and $t_7 = -\tfrac{1}{4}$. Find $r$ and $a$.
4. Classify each as arithmetic, geometric, both or neither: (a) 2, 2, 2, 2; (b) 1, 2, 4, 7, 11; (c) 10, 1, 0.1,
   0.01; (d) 0, 3, 6, 9; (e) 0, 3, 9, 27.
5. Find the geometric mean of 2 and 32, and the arithmetic mean. Which is bigger?
6. The numbers $x$, $x + 4$, $x + 12$ form a geometric sequence. Find $x$ and the ratio.
7. Is 1458 a term of 2, 6, 18, 54, ...? Is 1000?
8. A sequence has $t_n = 3 \times 2^n$. Write its first three terms and give $a$ and $r$. Why is $a$ not 3?

??? note "Answers"
    1. 3 steps: $r^3 = 40 \div 5 = 8$, so $r = 2$ and $t_n = 5 \times 2^{n-1}$.
    2. $r^2 = 250 \div 10 = 25$, so $r = 5$ or $r = -5$. With $r = 5$: $a = 2$, giving 2, 10, 50, 250. With $r = -5$:
       $a = -2$, giving −2, 10, −50, 250.
    3. 3 steps: $r^3 = -\tfrac14 \div 2 = -\tfrac18$, so $r = -\tfrac12$ (odd number of steps: only one answer).
       Back 3 steps: $a = 2 \div \left(-\tfrac12\right)^3 = 2 \div \left(-\tfrac18\right) = -16$. Check: −16, 8, −4,
       2, −1, $\tfrac12$, $-\tfrac14$. ✓
    4. (a) Both: difference 0, ratio 1. (b) Differences 1, 2, 3, 4: neither (but quadratic, second difference 1).
       (c) Ratios all 0.1: geometric. (d) Differences all 3: arithmetic. (e) Not arithmetic (differences 3, 6, 18) and
       not geometric (a zero term, and $3 \div 0$ is undefined): neither.
    5. Geometric mean $\sqrt{2 \times 32} = \sqrt{64} = 8$ (and 2, 8, 32 has ratio 4). Arithmetic mean
       $\dfrac{2 + 32}{2} = 17$. The arithmetic mean is bigger. (For two different positive numbers it always is; this
       is a famous inequality you can prove later.)
    6. $(x + 4)^2 = x(x + 12)$: $x^2 + 8x + 16 = x^2 + 12x$, so $16 = 4x$ and $x = 4$. The sequence is 4, 8, 16 with
       ratio 2.
    7. $t_n = 2 \times 3^{n-1}$. For 1458: $3^{n-1} = 729 = 3^6$, so $n = 7$: yes, the 7th term. For 1000:
       $3^{n-1} = 500$, but $3^5 = 243$ and $3^6 = 729$, so no power of 3 equals 500: not a term.
    8. $t_1 = 3 \times 2 = 6$, $t_2 = 12$, $t_3 = 24$. So $a = 6$ and $r = 2$. The formula has $2^n$, not
       $2^{n-1}$, so even the first term has one factor of 2 in it: $3 \times 2^n = 6 \times 2^{n-1}$.

## Common mistake

**Forgetting the negative ratio.** If $r^2 = 9$ you must consider $r = -3$ as well as $r = 3$. It happens whenever
the two known terms are an even number of steps apart.

**Subtracting instead of dividing.** For $t_2 = 12$ and $t_5 = 96$, the difference $96 - 12 = 84$ means nothing for a
geometric sequence. Divide: $96 \div 12 = 8 = r^3$.

## Where it leads

- Previous: [Why geometric sequences get huge](02-why-they-get-huge.md) · Next:
  [Adding a geometric sequence](04-geometric-sums.md).
- [Level 6 page](index.md) · [Patterns topic page](../index.md)
- The arithmetic version of this lesson: [Working backwards](../level-5/02-working-backwards.md) in level 5, and
  second differences in [Finite differences](../level-5/04-finite-differences.md).
- Square roots, cube roots and why $r^2 = 9$ has two answers: [Algebra](../../algebra/index.md) and
  [Numbers](../../numbers/index.md).
