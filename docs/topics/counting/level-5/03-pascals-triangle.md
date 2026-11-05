---
title: "Pascal's triangle"
---

# Pascal's triangle

*Counting and combinations · level 5, lesson 3 of 6*

## A question to start

A ball is dropped onto a board of pegs. Each time it hits a peg it bounces either left or right, and then falls onto a
peg in the next row. After four rows of pegs it lands in one of five bins at the bottom.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="A peg board with four rows of pegs. Each peg shows the number of routes that reach it: 1; 1, 1; 1, 2, 1; 1, 3, 3, 1. The five bins below receive 1, 4, 6, 4 and 1 routes">
  <g stroke="currentColor" stroke-width="1" stroke-dasharray="3 3">
    <line x1="210" y1="30" x2="180" y2="70"/><line x1="210" y1="30" x2="240" y2="70"/>
    <line x1="180" y1="70" x2="150" y2="110"/><line x1="180" y1="70" x2="210" y2="110"/>
    <line x1="240" y1="70" x2="210" y2="110"/><line x1="240" y1="70" x2="270" y2="110"/>
    <line x1="150" y1="110" x2="120" y2="150"/><line x1="150" y1="110" x2="180" y2="150"/>
    <line x1="210" y1="110" x2="180" y2="150"/><line x1="210" y1="110" x2="240" y2="150"/>
    <line x1="270" y1="110" x2="240" y2="150"/><line x1="270" y1="110" x2="300" y2="150"/>
    <line x1="120" y1="150" x2="90" y2="185"/><line x1="120" y1="150" x2="150" y2="185"/>
    <line x1="180" y1="150" x2="150" y2="185"/><line x1="180" y1="150" x2="210" y2="185"/>
    <line x1="240" y1="150" x2="210" y2="185"/><line x1="240" y1="150" x2="270" y2="185"/>
    <line x1="300" y1="150" x2="270" y2="185"/><line x1="300" y1="150" x2="330" y2="185"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="210" cy="30" r="13"/>
    <circle cx="180" cy="70" r="13"/><circle cx="240" cy="70" r="13"/>
    <circle cx="150" cy="110" r="13"/><circle cx="210" cy="110" r="13"/><circle cx="270" cy="110" r="13"/>
    <circle cx="120" cy="150" r="13"/><circle cx="180" cy="150" r="13"/><circle cx="240" cy="150" r="13"/><circle cx="300" cy="150" r="13"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="210" y="35">1</text>
    <text x="180" y="75">1</text><text x="240" y="75">1</text>
    <text x="150" y="115">1</text><text x="210" y="115">2</text><text x="270" y="115">1</text>
    <text x="120" y="155">1</text><text x="180" y="155">3</text><text x="240" y="155">3</text><text x="300" y="155">1</text>
  </g>
  <g fill="#eea66f" fill-opacity="0.7" stroke="currentColor">
    <rect x="72" y="185" width="36" height="30"/><rect x="132" y="185" width="36" height="30"/>
    <rect x="192" y="185" width="36" height="30"/><rect x="252" y="185" width="36" height="30"/>
    <rect x="312" y="185" width="36" height="30"/>
  </g>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="90" y="206">1</text><text x="150" y="206">4</text><text x="210" y="206">6</text>
    <text x="270" y="206">4</text><text x="330" y="206">1</text>
  </g>
</svg>
</div>

The numbers show how many different routes reach each peg and each bin. The middle bin can be reached in 6 ways, but
each end bin in only 1 way, which is why balls pile up in the middle. Where do 1, 4, 6, 4, 1 come from? They are
$\dbinom{4}{0}, \dbinom{4}{1}, \dbinom{4}{2}, \dbinom{4}{3}, \dbinom{4}{4}$, and they sit in one of the most famous
pictures in mathematics.

## The idea

### Building the triangle

Write a 1 at the top. Each new row starts and ends with 1, and every other number is the **sum of the two numbers just
above it**, one to the upper left and one to the upper right.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="Pascal's triangle, rows 0 to 6: 1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1; 1 5 10 10 5 1; 1 6 15 20 15 6 1. The 4 and 6 in row 4 and the 10 below them are highlighted">
  <circle cx="210" cy="20" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="210" y="25" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="188" cy="50" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="188" y="55" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="232" cy="50" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="232" y="55" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="166" cy="80" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="166" y="85" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="210" cy="80" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="210" y="85" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="254" cy="80" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="254" y="85" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="144" cy="110" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="144" y="115" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="188" cy="110" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="188" y="115" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="232" cy="110" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="232" y="115" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="276" cy="110" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="276" y="115" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="122" cy="140" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="122" y="145" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="166" cy="140" r="14" fill="#7ccf9a" fill-opacity="0.8"/><text x="166" y="145" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="210" cy="140" r="14" fill="#7ccf9a" fill-opacity="0.8"/><text x="210" y="145" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="254" cy="140" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="254" y="145" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="298" cy="140" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="298" y="145" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="100" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="100" y="175" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="144" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="144" y="175" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="188" cy="170" r="14" fill="#eea66f" fill-opacity="0.8"/><text x="188" y="175" font-size="14" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="232" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="232" y="175" font-size="14" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="276" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="276" y="175" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="320" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="320" y="175" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="78" y="205" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="122" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="122" y="205" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="166" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="166" y="205" font-size="14" text-anchor="middle" fill="currentColor">15</text>
  <circle cx="210" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="210" y="205" font-size="14" text-anchor="middle" fill="currentColor">20</text>
  <circle cx="254" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="254" y="205" font-size="14" text-anchor="middle" fill="currentColor">15</text>
  <circle cx="298" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="298" y="205" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="342" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="342" y="205" font-size="14" text-anchor="middle" fill="currentColor">1</text>
</svg>
</div>

The green 4 and 6 add to the orange 10 below them. The rows continue for ever:

| Row | Numbers |
| --- | --- |
| 7 | 1, 7, 21, 35, 35, 21, 7, 1 |
| 8 | 1, 8, 28, 56, 70, 56, 28, 8, 1 |
| 9 | 1, 9, 36, 84, 126, 126, 84, 36, 9, 1 |
| 10 | 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1 |

The triangle is named after the French mathematician Blaise Pascal, who wrote a long study of it in the 1600s. But it
was known centuries earlier in India, Persia and China; in China it is called Yang Hui's triangle, after a
mathematician of the 1200s.

### The triangle is a table of choose numbers

Number the rows from 0 at the top (so the single 1 is row 0), and number the places in each row from 0 on the left.
Then:

> The number in row $n$, place $r$, is $\dbinom{n}{r}$.

Check a few. Row 5, place 2 is 10, and $\dbinom{5}{2} = \dfrac{5 \times 4}{2} = 10$. ✓ Row 6, place 3 is 20, and
$\dbinom{6}{3} = \dfrac{6 \times 5 \times 4}{6} = 20$. ✓ Row 10 is exactly the table from lesson 2.

But checking a few cases is not a reason. Why should "add the two above" produce "the number of ways to choose"?

### Why: is Dee on the team or not?

Look at $\dbinom{5}{2}$: choose 2 people from A, B, C, D, E. Fix your attention on one person, say D (Dee). Every
team of 2 either includes Dee or does not.

- **Dee is in.** Then you only have to choose her partner from the other 4: $\dbinom{4}{1} = 4$ teams
  (AD, BD, CD, DE).
- **Dee is out.** Then both members come from the other 4: $\dbinom{4}{2} = 6$ teams (AB, AC, AE, BC, BE, CE).

No team is in both lists, and every team is in one of them. So $\dbinom{5}{2} = 4 + 6 = 10$. And 4 and 6 are exactly
the two numbers above the 10 in row 5!

The same argument works for any $n$ and $r$. Choose $r$ people from $n$, and look at one particular person.

- If that person is **in**, choose the other $r - 1$ from the remaining $n - 1$: $\dbinom{n-1}{r-1}$ ways.
- If that person is **out**, choose all $r$ from the remaining $n - 1$: $\dbinom{n-1}{r}$ ways.

$$\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$$

This is called **Pascal's rule**. In the triangle, $\dbinom{n-1}{r-1}$ and $\dbinom{n-1}{r}$ are the two numbers just
above $\dbinom{n}{r}$ (row $n - 1$, places $r - 1$ and $r$). So the choose numbers obey the same adding rule as the
triangle.

The ends match too: $\dbinom{n}{0} = 1$ and $\dbinom{n}{n} = 1$. So the choose numbers and the triangle start with
the same top, have the same 1s down both edges, and are built row by row by the same rule. Then they must agree in
every row, all the way down: row 1 agrees, so row 2 (made from row 1) agrees, so row 3 agrees, and so on for ever.
This "and so on for ever" kind of proof is called **induction**.

### Every row adds up to a power of 2

Add the rows: $1$, $1 + 1 = 2$, $1 + 2 + 1 = 4$, $1 + 3 + 3 + 1 = 8$, $1 + 4 + 6 + 4 + 1 = 16$. They double each
time, so row $n$ adds up to $2^n$. Two reasons, both worth knowing:

- **By counting.** Row $n$ lists how many groups of each size you can choose from $n$ things: groups of 0, of 1,
  of 2, ..., of $n$. Added together, that is the number of **all** possible groups, of any size. And to make a group,
  you go through the $n$ things and say "in" or "out" to each one: 2 choices, $n$ times, so $2^n$ groups (level 3).
- **By adding.** Every number in a row is used twice when you build the next row: once by the number below-left
  and once by the number below-right. So the next row's total is twice this row's total.

A group chosen from a set, of any size, is called a **subset**. So a set of $n$ things has $2^n$ subsets, and
row $n$ of Pascal's triangle sorts them by size.

### Paths down the triangle

The peg board explains another meaning. To reach row $n$, place $r$ from the top, a ball makes $n$ bounces, and
exactly $r$ of them must be to the right. A route is fixed by choosing **which** $r$ of the $n$ bounces go right:
$\dbinom{n}{r}$ ways. And the adding rule is clear here too: every route to a peg arrives from the peg above-left or
the peg above-right. This idea, "choose which steps go which way", is the key to the next lesson.

<figure class="play" data-play="pascal"><span class="ai-tag">AI-created</span><figcaption><b>Pascal's triangle.</b> Each number is the sum of the two above. Tap a row.</figcaption></figure>

## Worked examples

**1. Two new rows.** Build rows 7 and 8 from row 6 (1, 6, 15, 20, 15, 6, 1).

- Row 7: $1$, $1 + 6 = 7$, $6 + 15 = 21$, $15 + 20 = 35$, $20 + 15 = 35$, $15 + 6 = 21$, $6 + 1 = 7$, $1$.
- Row 8: $1$, $8$, $7 + 21 = 28$, $21 + 35 = 56$, $35 + 35 = 70$, $56$, $28$, $8$, $1$.
- Check row 8 adds to $2^8 = 256$: $1 + 8 + 28 + 56 + 70 + 56 + 28 + 8 + 1 = 256$. ✓

**2. Pascal's rule with bigger numbers.** Find $\dbinom{9}{4}$ from row 8.

$\dbinom{9}{4} = \dbinom{8}{3} + \dbinom{8}{4} = 56 + 70 = 126$. Check with the formula:
$\dfrac{9 \times 8 \times 7 \times 6}{24} = \dfrac{3024}{24} = 126$. ✓

**3. All the subsets of a set.** List every subset of {a, b, c, d}, sorted by size.

| Size | Subsets | How many |
| --- | --- | --- |
| 0 | { } (the empty set) | 1 |
| 1 | {a}, {b}, {c}, {d} | 4 |
| 2 | {a,b}, {a,c}, {a,d}, {b,c}, {b,d}, {c,d} | 6 |
| 3 | {a,b,c}, {a,b,d}, {a,c,d}, {b,c,d} | 4 |
| 4 | {a,b,c,d} | 1 |

The counts are row 4, and the total is $16 = 2^4$. ✓

**4. Pizza with any toppings.** A shop has 8 toppings and lets you have any number of them, from none (plain) to all
eight. How many different pizzas? Each topping is in or out: $2^8 = 256$. How many have **at least 2** toppings? Take
away the plain one and the 8 one-topping pizzas: $256 - 1 - 8 = 247$.

## Try it

1. Build rows 9 and 10 from row 8 (1, 8, 28, 56, 70, 56, 28, 8, 1).
2. Use Pascal's rule and row 10 to find $\dbinom{11}{4}$ and $\dbinom{11}{5}$. Check one with the formula.
3. You are told $\dbinom{11}{4} = 330$ and $\dbinom{11}{5} = 462$. Find $\dbinom{12}{5}$ without the formula.
4. What do the numbers in row 12 add up to?
5. A set has 5 things. How many subsets does it have? How many have at least 2 things?
6. In a group of 7 people, how many committees of 3 include Ana? How many do not? Check that your two answers add up
   to $\dbinom{7}{3}$.
7. Work out $1 - 5 + 10 - 10 + 5 - 1$ (row 5 with alternate signs). Explain from the symmetry of the row why the
   answer is the same for every odd row.
8. In the peg board, a ball goes through 6 rows of pegs, so it makes 6 bounces. How many bins are there? How many
   routes end in the middle bin, and how many routes are there altogether?

??? note "Answers"
    1. Row 9: 1, 9, 36, 84, 126, 126, 84, 36, 9, 1 (for example $28 + 56 = 84$ and $56 + 70 = 126$). Row 10:
       1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1 (for example $126 + 126 = 252$).
    2. Row 10 places 3, 4, 5 are 120, 210, 252. So $\dbinom{11}{4} = 120 + 210 = 330$ and
       $\dbinom{11}{5} = 210 + 252 = 462$. Check: $\dbinom{11}{4} = \dfrac{11 \times 10 \times 9 \times 8}{24} = \dfrac{7920}{24} = 330$. ✓
    3. $\dbinom{12}{5} = \dbinom{11}{4} + \dbinom{11}{5} = 330 + 462 = 792$.
    4. $2^{12} = 4096$.
    5. $2^5 = 32$ subsets. Take away the empty set and the 5 single ones: $32 - 1 - 5 = 26$.
    6. With Ana: choose 2 others from 6, $\dbinom{6}{2} = 15$. Without Ana: choose 3 from 6, $\dbinom{6}{3} = 20$.
       $15 + 20 = 35 = \dbinom{7}{3}$. ✓ This is Pascal's rule for row 7.
    7. $1 - 5 + 10 - 10 + 5 - 1 = 0$. An odd row has an even number of entries, and the row is a mirror image. The
       entry in place $r$ and its mirror in place $n - r$ are equal, and since $n$ is odd, one of $r$ and $n - r$ is
       even and the other odd, so they get opposite signs and cancel in pairs. (It also comes out 0 for even rows,
       such as $1 - 4 + 6 - 4 + 1 = 0$, but that needs a different reason: see level 7.)
    8. 6 bounces give 7 bins (0 to 6 bounces to the right). The middle bin is 3 rights out of 6:
       $\dbinom{6}{3} = 20$ routes. Altogether $2^6 = 64$ routes.

## Common mistake

**Counting rows and places from 1 instead of 0.** The row 1, 4, 6, 4, 1 is row **4**, not row 5, and the 6 is in
place **2**, not place 3. If you count from 1, every answer is off by one row. A quick check: the second number in
row $n$ is always $n$.

**Adding numbers that are not directly above.** Each entry is the sum of the two numbers touching it from above, not
two numbers next to each other in its own row. Keep the triangle neatly lined up so the "parents" of each number are
clear.

## Where it leads

- Back: [Choosing who is in is choosing who is out](02-in-or-out.md) · Next: [Paths on a grid](04-grid-paths.md)
- [Level 5 page](index.md) · [Counting topic page](../index.md)
- In-or-out counting of subsets first appeared in [Level 3, factors and subsets](../level-3/06-factors-and-subsets.md).
- Pascal's triangle multiplies out brackets like $(a + b)^5$ and hides the hockey stick, the triangle numbers, the
  Fibonacci numbers and a Sierpinski pattern: [Level 7, the binomial theorem](../level-7/index.md) and its [patterns in Pascal's triangle](../level-7/04-pascal-patterns.md).
- The peg board leads to the bell-shaped curve of chances: [Probability](../../probability/index.md) and
  [Statistics](../../statistics/index.md).
- Building row after row, each from the one before, is a number pattern of a new kind: [Patterns](../../patterns/index.md).
- Proof by induction, the "and so on for ever" argument above, is made precise in
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
