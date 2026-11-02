---
title: "The Chinese remainder theorem"
---

# The Chinese remainder theorem

*Number theory · level 6, lesson 5 of 6*

## A question to start

An old Chinese book, the *Sunzi suanjing* (Master Sun's Mathematical Manual), written some time between the 3rd and
5th centuries AD, asks a puzzle like this:

> There is a pile of things; we do not know how many. Counted in threes, 2 are left over. Counted in fives, 3 are left
> over. Counted in sevens, 2 are left over. How many things are there?

The book's answer is **23**. Check: $23 = 7 \times 3 + 2$, $23 = 4 \times 5 + 3$, $23 = 3 \times 7 + 2$. ✓

But is 23 the only answer? (No: 128 works too.) How could you find it without guessing? And is there **always** an
answer to puzzles like this? The theorem that answers all three questions is named after this book: the **Chinese
remainder theorem**.

## The idea

### The puzzle as clock equations

In the language of congruence, the puzzle asks for a whole number $x$ with

$$x \equiv 2 \pmod 3, \qquad x \equiv 3 \pmod 5, \qquad x \equiv 2 \pmod 7.$$

Three clocks, one number. We want a number that sits at position 2 on the 3-clock, position 3 on the 5-clock and
position 2 on the 7-clock, all at once.

### Method 1: sieving

Start with the biggest modulus. The numbers that leave 2 on division by 7 are

$$2, \; 9, \; 16, \; 23, \; 30, \; 37, \ldots$$

Go along them, testing the other two conditions. 2 leaves 2 on division by 5: no. 9 leaves 4: no. 16 leaves 1: no.
23 leaves 3 on division by 5 and 2 on division by 3: **yes**. This works well for small numbers, but it is slow when
the moduli are big.

### Two clocks at once: the grid picture

To see why there is always an answer, start with two clocks, 3 and 5. Place each of the numbers 0 to 14 in a grid:
**row** = its remainder mod 3, **column** = its remainder mod 5.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 185" role="img" aria-label="A grid with 3 rows for the remainders 0 to 2 mod 3 and 5 columns for the remainders 0 to 4 mod 5. Each of the numbers 0 to 14 sits in its own cell, and every cell is filled exactly once; the number 8 in row 2, column 3 is highlighted">
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="237" y="12">remainder mod 5</text>
    <text x="30" y="100">mod 3</text>
    <rect x="90" y="40" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="117" y="65">0</text>
    <rect x="150" y="40" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="177" y="65">6</text>
    <rect x="210" y="40" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="237" y="65">12</text>
    <rect x="270" y="40" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="297" y="65">3</text>
    <rect x="330" y="40" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="357" y="65">9</text>
    <rect x="90" y="84" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="117" y="109">10</text>
    <rect x="150" y="84" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="177" y="109">1</text>
    <rect x="210" y="84" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="237" y="109">7</text>
    <rect x="270" y="84" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="297" y="109">13</text>
    <rect x="330" y="84" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="357" y="109">4</text>
    <rect x="90" y="128" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="117" y="153">5</text>
    <rect x="150" y="128" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="177" y="153">11</text>
    <rect x="210" y="128" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="237" y="153">2</text>
    <rect x="270" y="128" width="54" height="38" rx="4" fill="#eea66f" fill-opacity="0.6"/><text x="297" y="153">8</text>
    <rect x="330" y="128" width="54" height="38" rx="4" fill="#9cc9ea" fill-opacity="0.6"/><text x="357" y="153">14</text>
    <text x="117" y="30">0</text>
    <text x="177" y="30">1</text>
    <text x="237" y="30">2</text>
    <text x="297" y="30">3</text>
    <text x="357" y="30">4</text>
    <text x="70" y="65">0</text>
    <text x="70" y="109">1</text>
    <text x="70" y="153">2</text>
  </g>
</svg>
</div>

Every one of the 15 cells holds **exactly one** of the numbers 0 to 14. So whatever remainders you ask for, mod 3 and
mod 5, exactly one number from 0 to 14 has them. For example, $x \equiv 2 \pmod 3$ and $x \equiv 3 \pmod 5$: row 2,
column 3, the number **8**.

**Why must every cell be filled?** Two steps.

1. **No two numbers share a cell.** If two numbers $x$ and $y$ from 0 to 14 were in the same cell, then 3 divides
   $x - y$ and 5 divides $x - y$. Since 3 and 5 share no factor, $15$ divides $x - y$ (this is question 8 of
   [lesson 1](01-bezout-identity.md)). But $x - y$ is between $-14$ and 14, so it must be 0: $x = y$.
2. **So every cell is used.** There are 15 numbers and 15 cells, and no cell gets two numbers. So no cell can be
   empty: 15 things in 15 boxes with no box doubled means each box gets exactly one.

The same argument works for any two coprime moduli, and then (by joining clocks one at a time) for any number of them.

### The theorem

> **The Chinese remainder theorem.** Let $m_1, m_2, \ldots, m_k$ be whole numbers, each pair of which is coprime,
> and let $M = m_1 m_2 \cdots m_k$. Then for any remainders $r_1, r_2, \ldots, r_k$, the equations
> $x \equiv r_1 \pmod{m_1}$, ..., $x \equiv r_k \pmod{m_k}$ have a solution, and all the solutions are congruent
> mod $M$: there is exactly one solution from 0 to $M - 1$.

For Sunzi's puzzle, $M = 3 \times 5 \times 7 = 105$. The solutions are $23, 128, 233, \ldots$ and also $-82$, and so on:
all the numbers $23 + 105t$. **Why unique mod 105?** If $x$ and $y$ are both solutions, then 3, 5 and 7 all divide
$x - y$, and since they are coprime, so does 105.

### Method 2: one clock at a time

Here is a method that always works and needs no guessing. Solve the equations one at a time, each time writing the
answer so far with a letter.

- $x \equiv 2 \pmod 3$ means $x = 2 + 3k$ for some whole number $k$.
- Put that into the second equation: $2 + 3k \equiv 3 \pmod 5$, so $3k \equiv 1 \pmod 5$. The inverse of 3 mod 5 is
  2 ([lesson 4](04-inverses-mod-n.md)), so $k \equiv 2 \pmod 5$, that is, $k = 2 + 5m$. Then
  $x = 2 + 3(2 + 5m) = 8 + 15m$.
- Put that into the third: $8 + 15m \equiv 2 \pmod 7$. Since $8 \equiv 1$ and $15 \equiv 1 \pmod 7$, this is
  $1 + m \equiv 2$, so $m \equiv 1 \pmod 7$, that is, $m = 1 + 7t$. Then $x = 8 + 15(1 + 7t) = 23 + 105t$.

So $x \equiv 23 \pmod{105}$. Notice that after two steps we found 8, the number in the grid.

### Method 3: building blocks (Sunzi's own way)

Sunzi's book solves it with three special numbers. Find:

- a number that is 1 mod 3 but 0 mod 5 and mod 7: a multiple of 35 that leaves 1 on division by 3. $35 \equiv 2$, but
  $70 \equiv 1 \pmod 3$. So **70**.
- a number that is 1 mod 5 but 0 mod 3 and mod 7: a multiple of 21 that leaves 1 mod 5. $21 \equiv 1$. So **21**.
- a number that is 1 mod 7 but 0 mod 3 and mod 5: a multiple of 15 that leaves 1 mod 7. $15 \equiv 1$. So **15**.

Each building block "switches on" one clock and leaves the others at 0. So to get remainders 2, 3, 2, take

$$x = 2 \times 70 + 3 \times 21 + 2 \times 15 = 140 + 63 + 30 = 233,$$

and reduce mod 105: $233 - 210 = 23$. The building blocks work for **any** remainders: for remainders $r_1, r_2, r_3$
the answer is $70r_1 + 21r_2 + 15r_3$, reduced mod 105. Finding each block is an inverse problem: for the first, you
need the inverse of 35 mod 3.

### When the moduli share a factor

If the moduli are not coprime, there may be no answer at all. $x \equiv 1 \pmod 4$ and $x \equiv 2 \pmod 6$ is
impossible: the first says $x$ is odd, the second says $x$ is even. The shared factor 2 makes the two clocks argue.
If they happen to agree on the shared part, there is an answer, unique mod the **lcm**. For example
$x \equiv 1 \pmod 4$ and $x \equiv 3 \pmod 6$ (both say "odd") have the solutions $x \equiv 9 \pmod{12}$.

## Worked examples

**1. Two clocks.** Find all $x$ with $x \equiv 1 \pmod 3$ and $x \equiv 2 \pmod 4$.

- $x = 1 + 3k$. Then $1 + 3k \equiv 2 \pmod 4$, so $3k \equiv 1 \pmod 4$.
- $3 \times 3 = 9 \equiv 1 \pmod 4$, so the inverse of 3 is 3 and $k \equiv 3$: $k = 3 + 4m$.
- $x = 1 + 3(3 + 4m) = 10 + 12m$. So $x \equiv$ **10** (mod 12). Check: $10 = 3 \times 3 + 1$, $10 = 2 \times 4 + 2$. ✓

**2. The basket of eggs.** A basket of eggs, taken out 2, 3, 4, 5 or 6 at a time, always leaves 1 egg. Taken out 7
at a time, it leaves none. What is the smallest possible number of eggs?

- Leaving 1 for each of 2, 3, 4, 5, 6 means $x - 1$ is a multiple of all of them, so of their lcm, 60:
  $x \equiv 1 \pmod{60}$.
- Also $x \equiv 0 \pmod 7$. Since 60 and 7 are coprime, there is one answer mod 420.
- Sieve: $61, 121, 181, 241, 301$ leave $5, 2, 6, 3, 0$ on division by 7. So **301 eggs**.

**3. Building blocks for two clocks.** Solve $x \equiv 3 \pmod 4$ and $x \equiv 5 \pmod 9$.

- Block for mod 4: a multiple of 9 that is 1 mod 4. $9 \equiv 1$. So 9.
- Block for mod 9: a multiple of 4 that is 1 mod 9. $4, 8, 12, 16, 20, 24, 28$; $28 = 27 + 1$. So 28.
- $x = 3 \times 9 + 5 \times 28 = 27 + 140 = 167 \equiv 167 - 144 = 23 \pmod{36}$.
- Check: $23 = 5 \times 4 + 3$ and $23 = 2 \times 9 + 5$. ✓

**4. All the same remainder.** Find the smallest positive $x$ that leaves 3 on division by 4, 4 on division by 5 and 5
on division by 6.

- Each remainder is one less than the divisor: $x \equiv -1 \pmod 4$, $\pmod 5$ and $\pmod 6$.
- So $x + 1$ is a multiple of 4, 5 and 6, hence of $\operatorname{lcm}(4, 5, 6) = 60$. The smallest is $x = 59$.
- (Here 4 and 6 are not coprime, but the conditions agree, so the answer is unique mod the lcm, 60.)

## Try it

1. Find the smallest positive $x$ with $x \equiv 2 \pmod 3$ and $x \equiv 1 \pmod 5$. Find it in the grid.
2. Solve Sunzi's puzzle with remainders 1, 1, 1 instead of 2, 3, 2.
3. Use Sunzi's building blocks 70, 21, 15 to find $x$ with $x \equiv 1 \pmod 3$, $x \equiv 4 \pmod 5$,
   $x \equiv 6 \pmod 7$.
4. Solve $x \equiv 2 \pmod 6$ and $x \equiv 5 \pmod 9$. (The moduli share a factor: check they agree first.)
5. Show that $x \equiv 1 \pmod 6$ and $x \equiv 2 \pmod{10}$ have no solution.
6. A marching band has between 100 and 200 members. In rows of 4, one is left over; in rows of 5, two are left over;
   in rows of 7, three are left over. How many members?
7. Solve $x \equiv 3 \pmod 7$ and $x \equiv 7 \pmod{11}$ by the one-clock-at-a-time method.
8. Harder: draw (or imagine) the grid for the clocks 4 and 6, placing 0 to 23 by (remainder mod 4, remainder mod 6).
   Explain why some of the 24 cells get two numbers and some get none. Which cells are empty?

??? note "Answers"
    1. Numbers $\equiv 1 \pmod 5$: 1, 6, 11. Their remainders mod 3 are 1, 0, 2. So $x =$ **11**. In the grid, row 2,
       column 1 holds 11. ✓
    2. $x = 70 + 21 + 15 = 106 \equiv 1 \pmod{105}$. So $x = 1$ (or 106, 211, ...). Of course: 1 leaves 1 on division
       by anything bigger than 1.
    3. $x = 1 \times 70 + 4 \times 21 + 6 \times 15 = 70 + 84 + 90 = 244 \equiv 244 - 210 = 34 \pmod{105}$. Check:
       $34 = 11 \times 3 + 1$, $34 = 6 \times 5 + 4$, $34 = 4 \times 7 + 6$. ✓
    4. Both clocks see mod 3: $2 \equiv 2$ and $5 \equiv 2 \pmod 3$, so they agree. Numbers $\equiv 5 \pmod 9$: 5, 14;
       $5 \equiv 5$ and $14 \equiv 2 \pmod 6$. So $x \equiv$ **14** (mod 18), since $\operatorname{lcm}(6, 9) = 18$.
    5. $x \equiv 1 \pmod 6$ makes $x$ odd; $x \equiv 2 \pmod{10}$ makes $x$ even. A number cannot be both.
    6. One clock at a time: $x = 1 + 4k$; $1 + 4k \equiv 2 \pmod 5$ gives $4k \equiv 1$, $k \equiv 4$, so
       $x = 17 + 20m$; $17 + 20m \equiv 3 \pmod 7$ gives $3 + 6m \equiv 3$, so $6m \equiv 0$ and $m \equiv 0$. So
       $x \equiv 17 \pmod{140}$. Between 100 and 200: **157**. Check:
       $157 = 39 \times 4 + 1 = 31 \times 5 + 2 = 22 \times 7 + 3$. ✓
    7. $x = 3 + 7k$; $3 + 7k \equiv 7 \pmod{11}$, so $7k \equiv 4$. The inverse of 7 mod 11 is 8 ($56 = 55 + 1$), so
       $k \equiv 32 \equiv 10$, $k = 10 + 11m$, and $x = 73 + 77m$. So $x \equiv$ **73** (mod 77). Check:
       $73 = 70 + 3$ and $73 = 66 + 7$. ✓
    8. If $x$ and $y$ share a cell, 4 and 6 divide $x - y$, which only forces 12 (the lcm) to divide it. So
       $x$ and $x + 12$ always share a cell: the 24 numbers fill only **12** cells, two each. The empty cells are the
       ones where the remainders disagree about odd and even, such as (remainder 0 mod 4, remainder 1 mod 6). Exactly
       the cells with one remainder even and the other odd are empty.

## Common mistake

**Forgetting the "+ multiple of $M$".** The answer to a Chinese remainder problem is a whole family, $23 + 105t$, not
just 23. A question with a range ("between 100 and 200") needs the right member of the family.

**Using the theorem when the moduli share a factor.** Without coprime moduli, there may be no answer (question 5), or
the answer repeats after the lcm, not the product (worked example 4).

## Where it leads

- Back: [Inverses mod n](04-inverses-mod-n.md) · Next: [Unique factorisation, proved](06-unique-factorisation.md).
- [Level 6 page](index.md) · [Number theory topic page](../index.md)
- Grids and "$n$ things in $n$ boxes" arguments are part of [Counting](../../counting/index.md).
- Computers use the Chinese remainder theorem to speed up RSA codes, by doing the work on two smaller clocks:
  [Level 8](../level-8/index.md) and [cryptography.akadian.ca](https://cryptography.akadian.ca/).
- When do cycles of different lengths line up again? That is the lcm from [Level 4](../level-4/index.md).
