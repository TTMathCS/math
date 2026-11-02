---
title: "Sums of squares and cubes"
---

# Sums of squares and cubes

*Patterns and sequences · level 7, lesson 5 of 6*

## A question to start

Cannonballs used to be stacked in square pyramids: one ball on top, then a layer of 2 by 2, then 3 by 3, and so on
down to the bottom layer. A pyramid with a 10 by 10 base holds

$$1^2 + 2^2 + 3^2 + \cdots + 10^2 \text{ balls.}$$

How many is that? You can add it up (try it), but what about a pyramid with a 100 by 100 base? And here is something
stranger. Add up cubes instead:

$$1^3 = 1, \quad 1^3 + 2^3 = 9, \quad 1^3 + 2^3 + 3^3 = 36, \quad 1^3 + 2^3 + 3^3 + 4^3 = 100.$$

Every answer is a perfect square: $1^2, 3^2, 6^2, 10^2$. And the numbers being squared, 1, 3, 6, 10, are the
triangular numbers. Coincidence? This lesson finds formulas for both sums and proves why they are true.

## The idea

### Why the old trick does not work

For $1 + 2 + \cdots + n$ we wrote the sum forwards and backwards, and every column added to the same number (lesson 2).
Try that with squares: $1^2 + 2^2 + 3^2$ forwards and $3^2 + 2^2 + 1^2$ backwards give columns
$10, 8, 10$. Not equal. The squares are not evenly spaced, so pairing the ends fails. We need new ideas: first a way to
**guess** the formula, then a way to **prove** it.

### Step 1: guess the shape with differences

Let $S(n) = 1^2 + 2^2 + \cdots + n^2$. Make a table and take differences, as in [level 5](../level-5/index.md):

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $S(n)$ | 0 | 1 | 5 | 14 | 30 | 55 | 91 |
| 1st differences | | 1 | 4 | 9 | 16 | 25 | 36 |
| 2nd differences | | | 3 | 5 | 7 | 9 | 11 |
| 3rd differences | | | | 2 | 2 | 2 | 2 |

The first differences are just the squares (of course: each step adds the next square). The **third** differences are
constant, so $S(n)$ is a **cubic**: $S(n) = an^3 + bn^2 + cn + d$. (A quadratic has constant second differences;
a cubic has constant third differences.)

### Step 2: find the coefficients

Put in $n = 0, 1, 2, 3$:

- $n = 0$: $d = 0$.
- $n = 1$: $a + b + c = 1$.
- $n = 2$: $8a + 4b + 2c = 5$.
- $n = 3$: $27a + 9b + 3c = 14$.

Take twice the second equation from the third: $6a + 2b = 3$. Take three times the second from the fourth:
$24a + 6b = 11$. Then take three times $6a + 2b = 3$ from that: $6a = 2$, so $a = \frac13$, then $b = \frac12$, then
$c = 1 - \frac13 - \frac12 = \frac16$. So

$$S(n) = \frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6} = \frac{2n^3 + 3n^2 + n}{6} = \frac{n(n + 1)(2n + 1)}{6}.$$

This fits $n = 0, 1, 2, 3$ by construction. Check it on one we did not use: $n = 6$ gives
$\frac{6 \times 7 \times 13}{6} = 91$. ✓ But a guess that fits the table is still a guess. (Patterns can trick you,
as [level 3](../level-3/index.md) showed.) We need a proof.

### Step 3: prove it by telescoping

Here is a proof that needs nothing but algebra and the collapsing sums of [lesson 1](01-sigma-notation.md). Expand

$$(k + 1)^3 - k^3 = 3k^2 + 3k + 1.$$

Write this out for $k = 1, 2, \ldots, n$ and add all $n$ lines:

$$
\begin{aligned}
2^3 - 1^3 &= 3 \cdot 1^2 + 3 \cdot 1 + 1\\
3^3 - 2^3 &= 3 \cdot 2^2 + 3 \cdot 2 + 1\\
&\ \ \vdots\\
(n + 1)^3 - n^3 &= 3 \cdot n^2 + 3 \cdot n + 1
\end{aligned}
$$

On the left, everything cancels except $(n + 1)^3 - 1$. On the right, we get three sums:

$$(n + 1)^3 - 1 = 3S(n) + 3 \cdot \frac{n(n + 1)}{2} + n.$$

Now solve for $S(n)$. Move the last two terms over, noting $-1 - n = -(n + 1)$:

$$3S(n) = (n + 1)^3 - (n + 1) - \frac{3n(n + 1)}{2} = (n + 1)\left[(n + 1)^2 - 1 - \frac{3n}{2}\right] = (n + 1)\left[n^2 + \frac{n}{2}\right].$$

And $n^2 + \frac{n}{2} = \frac{n(2n + 1)}{2}$, so $3S(n) = \frac{n(n + 1)(2n + 1)}{2}$, which gives

$$\boxed{\;1^2 + 2^2 + \cdots + n^2 = \sum_{k=1}^{n} k^2 = \frac{n(n + 1)(2n + 1)}{6}\;}$$

for **every** $n$, not just the ones in the table. The same trick with $(k + 1)^2 - k^2 = 2k + 1$ gives Gauss's sum
$\sum k = \frac{n(n+1)}{2}$, and with $(k + 1)^4 - k^4$ it gives the sum of cubes. Each formula is built from the one
before.

(There is also a lovely picture proof: three copies of the cannonball pyramid, made of unit cubes, can be fitted
together into a box measuring $n$ by $n + 1$ by $n + \frac12$. The volume of that box is three times the sum.)

### The cubes: a square made of L-shapes

Now the second surprise: $1^3 + 2^3 + \cdots + n^3 = (1 + 2 + \cdots + n)^2$. Here is the picture for $n = 3$. Take a
square of side $1 + 2 + 3 = 6$. Cut it into a small square and two L-shaped borders, at sides 1, 3 and 6 (the
triangular numbers).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 180" role="img" aria-label="A 6 by 6 square split into a 1 by 1 corner square, an L-shape of 8 unit squares around it making a 3 by 3 square, and an outer L-shape of 27 unit squares made of three 3 by 3 blocks">
  <rect x="20" y="15" width="150" height="150" fill="#7ccf9a"/>
  <rect x="20" y="15" width="75" height="75" fill="#9cc9ea"/>
  <rect x="20" y="15" width="25" height="25" fill="#eea66f"/>
  <g stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5">
    <line x1="45" y1="15" x2="45" y2="165"/><line x1="70" y1="15" x2="70" y2="165"/><line x1="95" y1="15" x2="95" y2="165"/>
    <line x1="120" y1="15" x2="120" y2="165"/><line x1="145" y1="15" x2="145" y2="165"/>
    <line x1="20" y1="40" x2="170" y2="40"/><line x1="20" y1="65" x2="170" y2="65"/><line x1="20" y1="90" x2="170" y2="90"/>
    <line x1="20" y1="115" x2="170" y2="115"/><line x1="20" y1="140" x2="170" y2="140"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="2">
    <rect x="20" y="15" width="150" height="150"/>
    <rect x="20" y="15" width="75" height="75"/>
    <rect x="20" y="15" width="25" height="25"/>
    <line x1="95" y1="90" x2="170" y2="90" stroke-dasharray="5 3"/>
    <line x1="95" y1="90" x2="95" y2="165" stroke-dasharray="5 3"/>
  </g>
  <text x="185" y="40" font-size="12" fill="currentColor">orange: 1 = 1³</text>
  <text x="185" y="75" font-size="12" fill="currentColor">blue L: 9 − 1 = 8 = 2³</text>
  <text x="185" y="110" font-size="12" fill="currentColor">green L: 36 − 9 = 27 = 3³</text>
  <text x="185" y="126" font-size="12" fill="currentColor">(three 3 by 3 blocks)</text>
  <text x="185" y="160" font-size="12" fill="currentColor">whole: 6² = 36</text>
</svg>
</div>

The pieces have areas $1$, $8$ and $27$, which are $1^3$, $2^3$ and $3^3$, and together they make the $6 \times 6$
square. So $1^3 + 2^3 + 3^3 = 6^2$.

**Why this works for every $n$.** Write $T_k = \frac{k(k + 1)}{2}$ for the $k$th triangular number. The $k$th
L-shape is the square of side $T_k$ with the square of side $T_{k-1}$ removed, so its area is

$$T_k^2 - T_{k-1}^2 = (T_k - T_{k-1})(T_k + T_{k-1}).$$

Now $T_k - T_{k-1} = k$ (the triangle grows by a row of $k$), and
$T_k + T_{k-1} = \frac{k(k + 1)}{2} + \frac{(k - 1)k}{2} = \frac{k \cdot 2k}{2} = k^2$ (two neighbouring triangles make
a square, as in level 3). So the $k$th L-shape has area $k \cdot k^2 = k^3$. Stacking the L-shapes for
$k = 1, 2, \ldots, n$ fills the square of side $T_n$, so

$$\boxed{\;1^3 + 2^3 + \cdots + n^3 = \left(\frac{n(n + 1)}{2}\right)^2 = (1 + 2 + \cdots + n)^2\;}$$

This is sometimes called **Nicomachus's theorem**, after a Greek writer of about 100 CE who described the pattern
behind it.

## Worked examples

**1. The cannonballs.** A square pyramid with a 10 by 10 base:
$\frac{10 \times 11 \times 21}{6} = \frac{2310}{6} = 385$ balls. With a 100 by 100 base:
$\frac{100 \times 101 \times 201}{6} = 338\,350$ balls.

**2. A sum that does not start at 1.** Find $11^2 + 12^2 + \cdots + 20^2$.

$$\sum_{k=11}^{20} k^2 = \sum_{k=1}^{20} k^2 - \sum_{k=1}^{10} k^2 = \frac{20 \times 21 \times 41}{6} - 385 = 2870 - 385 = 2485.$$

**3. Mixing the formulas.** Find $1 \times 2 + 2 \times 3 + 3 \times 4 + \cdots + 10 \times 11$.

The $k$th term is $k(k + 1) = k^2 + k$, so the sum splits:

$$\sum_{k=1}^{10} (k^2 + k) = 385 + 55 = 440.$$

In general, $\sum_{k=1}^{n} k(k + 1) = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2} = \frac{n(n+1)}{6}(2n + 1 + 3) = \frac{n(n + 1)(n + 2)}{3}$.
For $n = 10$: $\frac{10 \times 11 \times 12}{3} = 440$. ✓

**4. The odd squares.** Find a formula for $1^2 + 3^2 + 5^2 + \cdots + (2n - 1)^2$.

$(2k - 1)^2 = 4k^2 - 4k + 1$, so the sum is

$$4 \cdot \frac{n(n+1)(2n+1)}{6} - 4 \cdot \frac{n(n+1)}{2} + n = \frac{n}{3}\bigl[2(n+1)(2n+1) - 6(n+1) + 3\bigr] = \frac{n}{3}(4n^2 - 1) = \frac{n(2n - 1)(2n + 1)}{3}.$$

Check $n = 3$: $1 + 9 + 25 = 35$ and $\frac{3 \times 5 \times 7}{3} = 35$. ✓

**5. A big sum of cubes.** $1^3 + 2^3 + \cdots + 100^3 = 5050^2 = 25\,502\,500$.

## Try it

1. Find $1^2 + 2^2 + \cdots + 20^2$.
2. Find $1^3 + 2^3 + \cdots + 20^3$.
3. Find $\displaystyle\sum_{k=1}^{10} (3k^2 - 2k)$.
4. How many squares of all sizes are there on an 8 by 8 chessboard? (Hint: count the $1 \times 1$, $2 \times 2$, ...
   squares. How many positions does a $7 \times 7$ square have?)
5. For which $n$ is $1^3 + 2^3 + \cdots + n^3 = 2025$?
6. Find $2^2 + 4^2 + 6^2 + \cdots + 20^2$.
7. A rectangle on a chessboard is fixed by choosing two of the 9 vertical grid lines and two of the 9 horizontal ones.
   Show that an 8 by 8 board has $36^2$ rectangles, and explain why this equals $1^3 + 2^3 + \cdots + 8^3$.
8. Show that $1^3 + 3^3 + 5^3 + \cdots + (2n - 1)^3 = n^2(2n^2 - 1)$, by taking the even cubes away from all the
   cubes up to $(2n)^3$.

??? note "Answers"
    1. $\frac{20 \times 21 \times 41}{6} =$ **2870**.
    2. $\left(\frac{20 \times 21}{2}\right)^2 = 210^2 =$ **44 100**.
    3. $3 \times 385 - 2 \times 55 = 1155 - 110 =$ **1045**.
    4. A $k \times k$ square can start in $9 - k$ places across and $9 - k$ places down, so there are $(9 - k)^2$ of
       them: $64$ of size 1, $49$ of size 2, ..., $1$ of size 8. The total is $1^2 + 2^2 + \cdots + 8^2 = \frac{8 \times 9 \times 17}{6} =$ **204**.
    5. We need $\left(\frac{n(n+1)}{2}\right)^2 = 2025 = 45^2$, so $\frac{n(n+1)}{2} = 45$, $n(n + 1) = 90$,
       **$n = 9$**.
    6. $2^2(1^2 + 2^2 + \cdots + 10^2) = 4 \times 385 =$ **1540**.
    7. Two of 9 lines can be chosen in $\frac{9 \times 8}{2} = 36$ ways, both across and down, so there are
       $36 \times 36 = 36^2 = 1296$ rectangles. And $36 = 1 + 2 + \cdots + 8$, so by Nicomachus's theorem
       $36^2 = 1^3 + 2^3 + \cdots + 8^3$. (Two ways of counting the same thing must agree: a favourite trick in
       [Counting](../../counting/index.md).)
    8. All cubes up to $(2n)^3$: $\left(\frac{2n(2n+1)}{2}\right)^2 = n^2(2n + 1)^2$. The even cubes:
       $2^3 + 4^3 + \cdots + (2n)^3 = 8(1^3 + \cdots + n^3) = 8 \cdot \frac{n^2(n+1)^2}{4} = 2n^2(n + 1)^2$. The odd
       cubes are the difference: $n^2\bigl[(2n + 1)^2 - 2(n + 1)^2\bigr] = n^2(4n^2 + 4n + 1 - 2n^2 - 4n - 2) = n^2(2n^2 - 1)$.
       Check $n = 2$: $1 + 27 = 28 = 4 \times 7$. ✓

## Common mistake

**Thinking the sum of squares is the square of the sum.** $1^2 + 2^2 + 3^2 = 14$, but $(1 + 2 + 3)^2 = 36$. For
**cubes**, by a lucky theorem, the sum is the square of $1 + 2 + \cdots + n$; for squares it is not.

**Trusting a fitted formula without proof.** Four points always fit some cubic. That the cubic keeps working for every
$n$ needs a proof, such as the telescoping argument, or the induction proof you will write in level 8.

## Where it leads

- Back: [Recursion and the golden ratio](04-golden-ratio.md) · Next: [Sequences as functions](06-sequences-functions.md).
- [Level 7 page](index.md) · [Patterns topic page](../index.md)
- Differences and quadratic patterns: [Level 5](../level-5/index.md). Square and triangular numbers as dots:
  [Level 3](../level-3/index.md).
- Proving formulas like these by induction: [Level 8](../level-8/index.md).
- The sum of squares is what you need to find the area under $y = x^2$ with thin rectangles, the first integral in
  calculus: [MAT137 Unit 7](../../../uoft/MAT137/unit07.md).
