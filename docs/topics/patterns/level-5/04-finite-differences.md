---
title: "Finite differences"
---

# Finite differences

*Patterns and sequences · level 5, lesson 4 of 6*

## A question to start

Here are two sequences:

$$1,\ 4,\ 9,\ 16,\ 25,\ \ldots \qquad\qquad 2,\ 6,\ 12,\ 20,\ 30,\ \ldots$$

Neither is arithmetic: the gaps keep growing. So the formula $t_n = a + (n - 1)d$ is no help. Yet both have a hidden
regularity, and a simple trick (subtract, then subtract **again**) reveals it, predicts the next terms, and tells you
what kind of formula to look for. The same trick fails completely on $1, 2, 4, 8, 16$, and that failure tells you
something too.

## The idea

### First differences

The **first differences** of a sequence are the gaps between neighbouring terms: each term minus the one before. You
already used them to test for arithmetic sequences. If the first differences are all equal, the sequence is
arithmetic and its rule has the form $t_n = dn + c$, a **linear** rule (its graph is points on a straight line).

For the square numbers the first differences are not equal:

| $n$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $t_n$ | 1 | 4 | 9 | 16 | 25 |
| first differences | | 3 | 5 | 7 | 9 |

But look at the differences themselves: 3, 5, 7, 9. **They** form an arithmetic sequence. So take differences of the
differences.

### Second differences

The **second differences** are the differences of the first differences. Arrange everything in a triangle, each
number written between and below the two numbers it comes from:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 140" role="img" aria-label="A difference table: 1, 4, 9, 16, 25; first differences 3, 5, 7, 9; second differences 2, 2, 2">
  <g stroke="currentColor" stroke-width="1" opacity="0.5">
    <line x1="44" y1="36" x2="66" y2="58"/><line x1="96" y1="36" x2="74" y2="58"/>
    <line x1="104" y1="36" x2="126" y2="58"/><line x1="156" y1="36" x2="134" y2="58"/>
    <line x1="164" y1="36" x2="186" y2="58"/><line x1="216" y1="36" x2="194" y2="58"/>
    <line x1="224" y1="36" x2="246" y2="58"/><line x1="276" y1="36" x2="254" y2="58"/>
    <line x1="74" y1="78" x2="96" y2="100"/><line x1="126" y1="78" x2="104" y2="100"/>
    <line x1="134" y1="78" x2="156" y2="100"/><line x1="186" y1="78" x2="164" y2="100"/>
    <line x1="194" y1="78" x2="216" y2="100"/><line x1="246" y1="78" x2="224" y2="100"/>
  </g>
  <circle cx="40" cy="28" r="13" fill="#9cc9ea"/><circle cx="100" cy="28" r="13" fill="#9cc9ea"/>
  <circle cx="160" cy="28" r="13" fill="#9cc9ea"/><circle cx="220" cy="28" r="13" fill="#9cc9ea"/>
  <circle cx="280" cy="28" r="13" fill="#9cc9ea"/>
  <circle cx="70" cy="70" r="13" fill="#eea66f"/><circle cx="130" cy="70" r="13" fill="#eea66f"/>
  <circle cx="190" cy="70" r="13" fill="#eea66f"/><circle cx="250" cy="70" r="13" fill="#eea66f"/>
  <circle cx="100" cy="112" r="13" fill="#7ccf9a"/><circle cx="160" cy="112" r="13" fill="#7ccf9a"/>
  <circle cx="220" cy="112" r="13" fill="#7ccf9a"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="40" y="33">1</text><text x="100" y="33">4</text><text x="160" y="33">9</text>
    <text x="220" y="33">16</text><text x="280" y="33">25</text>
    <text x="70" y="75">3</text><text x="130" y="75">5</text><text x="190" y="75">7</text><text x="250" y="75">9</text>
    <text x="100" y="117">2</text><text x="160" y="117">2</text><text x="220" y="117">2</text>
  </g>
</svg>
</div>

The second differences are constant: 2, 2, 2. Now try $2, 6, 12, 20, 30$:

| $t_n$ | 2 | 6 | 12 | 20 | 30 |
| --- | --- | --- | --- | --- | --- |
| first differences | | 4 | 6 | 8 | 10 |
| second differences | | | 2 | 2 | 2 |

Constant again. A sequence whose second differences are constant (and not zero) is called **quadratic**, because, as
you will see below, its rule always has the form $t_n = an^2 + bn + c$, with an $n^2$ in it. ("Quadratic" comes from
the Latin for "square".)

### Predicting the next term by building back up

The table works in reverse. Since the second differences stay at 2, the next first difference for the squares is
$9 + 2 = 11$, and the next term is $25 + 11 = 36$. ✓ For $2, 6, 12, 20, 30$: next first difference $10 + 2 = 12$, next
term $30 + 12 = 42$. (It is $6 \times 7$; all its terms are $n(n + 1)$.)

You can keep going as far as you like, adding along the bottom row and climbing back up. This is how people made
printed tables of squares and other values long before calculators: once the bottom row is constant, every new entry
needs only additions.

### Why constant second differences mean quadratic

Here is the reason, with letters. Suppose $t_n = an^2 + bn + c$ for some numbers $a$, $b$, $c$. The first difference
at position $n$ is

$$t_{n+1} - t_n = a(n + 1)^2 + b(n + 1) + c - (an^2 + bn + c).$$

Multiply out $(n + 1)^2 = n^2 + 2n + 1$ and cancel everything that appears twice:

$$t_{n+1} - t_n = a(2n + 1) + b = 2an + (a + b).$$

That is a **linear** rule in $n$: the first differences form an arithmetic sequence whose common difference is $2a$.
So the second differences are all exactly $2a$. Two consequences:

- Every quadratic rule gives constant second differences, equal to **twice the number in front of** $n^2$.
- Going the other way, if the second differences are a constant $D$, then $a = D \div 2$. The next lesson shows how to
  find $b$ and $c$ too, so every sequence with constant second differences really does have a quadratic rule.

Check with the squares: $t_n = n^2$ has $a = 1$, and the second difference is $2 \times 1 = 2$. ✓

### The ladder: linear, quadratic, cubic

The pattern continues one level further each time:

| Constant at | Kind of rule | Example |
| --- | --- | --- |
| first differences | linear, $dn + c$ | 3, 7, 11, 15 |
| second differences | quadratic, $an^2 + bn + c$ | 1, 4, 9, 16 |
| third differences | cubic, with an $n^3$ | 1, 8, 27, 64 |

For the cubes $1, 8, 27, 64, 125$: first differences 7, 19, 37, 61; second differences 12, 18, 24; third differences
6, 6. For $t_n = an^3 + \cdots$ the third difference is always $6a$; for the cubes $a = 1$ and it is 6.

The rule of thumb: **if the $k$th differences are constant, the rule is a polynomial whose highest power is $n^k$.**

### When the differences never settle

Try the doubling sequence $1, 2, 4, 8, 16, 32$:

| $t_n$ | 1 | 2 | 4 | 8 | 16 | 32 |
| --- | --- | --- | --- | --- | --- | --- |
| first differences | | 1 | 2 | 4 | 8 | 16 |
| second differences | | | 1 | 2 | 4 | 8 |

The differences are **the same sequence again**, shifted along. Each time you subtract, you get the doubling numbers
back, so no row is ever constant. That tells you the sequence is not linear, not quadratic, not any polynomial at all.
Doubling grows faster than every polynomial. It is a geometric sequence, the subject of [level 6](../level-6/index.md).

### Two warnings

1. **The positions must go up by 1.** The method compares neighbouring terms at positions $n$ and $n + 1$. If a
   table skips positions (say $n = 1, 2, 4, 8$), the differences mean nothing.
2. **A few rows prove nothing on their own.** If you only have four terms, the third differences are a single number,
   so they are "constant" automatically. Constant differences found from a handful of terms suggest a rule; the rule
   of the pattern, or a reason from a picture, is what makes it certain. (Remember the circle-cutting puzzle in
   [Patterns that trick you](../level-3/06-patterns-that-trick.md).)

## Worked examples

**1. Linear.** $3, 7, 11, 15, 19$: first differences 4, 4, 4, 4. Linear, $t_n = 4n - 1$.

**2. Quadratic, then predict.** $5, 8, 14, 23, 35$.

- First differences: 3, 6, 9, 12. Second differences: 3, 3, 3. Quadratic, with $a = 3 \div 2 = 1.5$.
- Next first difference: $12 + 3 = 15$, so $t_6 = 35 + 15 = 50$. Then $t_7 = 50 + 18 = 68$.

**3. Cubic.** $0, 6, 24, 60, 120$.

- First: 6, 18, 36, 60. Second: 12, 18, 24. Third: 6, 6. Cubic.
- Build up: next second difference $24 + 6 = 30$; next first difference $60 + 30 = 90$; next term $120 + 90 = 210$.
- (These are $n^3 - n$: $6^3 - 6 = 210$. ✓)

**4. Never constant.** $3, 6, 12, 24, 48$: first differences 3, 6, 12, 24, which is the sequence again. No row will
ever be constant; this is geometric (multiply by 2).

**5. Filling a gap.** A quadratic sequence begins $4, 7, \square, 19, 28$. Find the missing term.

- Call it $x$. First differences: $3$, $x - 7$, $19 - x$, $9$.
- Second differences: $x - 10$, $26 - 2x$, $x - 10$. They must be equal: $x - 10 = 26 - 2x$, so $3x = 36$, $x = 12$.
- Check: 4, 7, 12, 19, 28 has first differences 3, 5, 7, 9 and second differences 2, 2, 2. ✓

## Try it

1. Is $4, 9, 14, 19, 24$ linear, quadratic or neither? Find the next term.
2. Make a difference table for $1, 3, 6, 10, 15, 21$ (the triangular numbers). What kind is it? Find the next two
   terms.
3. Find the next term of $3, 6, 11, 18, 27$ using differences.
4. $2, 5, 10, 17, 26$: continue the difference table until you reach the 10th term.
5. For $t_n = 3n^2$, what will the second differences be, without working out any terms? Check with the first four
   terms.
6. Find the next term of $1, 5, 14, 30, 55$, and say what kind of sequence it is.
7. Is $2, 6, 18, 54$ quadratic? What happens to its differences?
8. A sequence has second differences that are all $-4$, $t_1 = 10$ and $t_2 = 15$. Write its first five terms. What
   happens to the terms eventually?

??? note "Answers"
    1. First differences 5, 5, 5, 5: linear. Next term $24 + 5 = 29$.
    2. First differences 2, 3, 4, 5, 6; second differences 1, 1, 1, 1. Quadratic. Next first differences 7 and 8, so
       the next terms are $21 + 7 = 28$ and $28 + 8 = 36$.
    3. First differences 3, 5, 7, 9; second 2, 2, 2. Next first difference 11, next term $27 + 11 = 38$.
    4. First differences 3, 5, 7, 9, then 11, 13, 15, 17, 19. Terms: 26, 37, 50, 65, 82, 101. So $t_{10} = 101$. (The
       rule is $n^2 + 1$: $10^2 + 1 = 101$. ✓)
    5. $a = 3$, so the second differences are $2 \times 3 = 6$. Terms 3, 12, 27, 48; first differences 9, 15, 21; second
       differences 6, 6. ✓
    6. First differences 4, 9, 16, 25 (the squares!); second 5, 7, 9; third 2, 2. Cubic. Next: second $9 + 2 = 11$,
       first $25 + 11 = 36$, term $55 + 36 = 91$. (These are the sums of squares $1^2 + 2^2 + \cdots + n^2$, which
       level 7 adds up with a formula.)
    7. No. First differences 4, 12, 36; second 8, 24. Each row is the sequence again times a number, so no row ever
       becomes constant. It is geometric with ratio 3.
    8. First difference $15 - 10 = 5$, then $5 - 4 = 1$, $1 - 4 = -3$, $-3 - 4 = -7$. Terms 10, 15, 16, 13, 6. The
       first differences keep falling by 4, so after a while every step is a big drop: the terms rise to a peak and
       then fall forever, below zero. (A negative second difference means the graph is shaped like a hill.)

## Common mistake

**Subtracting in the wrong order.** Always do "later minus earlier". If you mix orders you get signs that jump around,
and a quadratic sequence will look like it has no pattern.

**Reading $a$ as the second difference itself.** The second difference is $2a$, so $a$ is **half** of it. For the
squares, the second difference is 2 but $t_n = 1 \times n^2$.

## Where it leads

- Previous: [Gauss's trick](03-gauss-trick.md) · Next: [Quadratic patterns](05-quadratic-patterns.md), finding the
  whole rule $an^2 + bn + c$.
- [Level 5 page](index.md) · [Patterns topic page](../index.md)
- The square numbers and their odd-number differences: [Square numbers](../level-3/02-square-numbers.md) in level 3.
- Quadratic rules as graphs (parabolas): [Algebra level 7](../../algebra/level-7/01-quadratic-relations.md).
- Differences are the whole-number cousin of the derivative in calculus, which measures change:
  [Change](../../change/index.md) and, on the U of T shelf, [MAT137 Unit 3](../../../uoft/MAT137/unit03.md).
