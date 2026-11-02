---
title: "Pairs are countable"
---

# Pairs are countable

*Infinity and strange math · level 6, lesson 3 of 6*

## A question to start

Imagine a cinema with infinitely many rows, numbered 1, 2, 3, ..., and in every row infinitely many seats, also
numbered 1, 2, 3, ... Every seat is named by a pair of numbers: (row, seat). Row 1 alone already has as many seats as
there are counting numbers. And there are infinitely many rows.

An usher wants to give every seat a ticket number: 1, 2, 3, ..., one ticket per seat, with every seat getting a
ticket at some point. Surely that is impossible: the first row alone uses up all the ticket numbers.

In fact it is easy, once you stop going along the rows. This lesson shows how, and works out a formula for every
seat's ticket number.

## The idea

### Ordered pairs

An **ordered pair** $(m, n)$ is two numbers in a fixed order: $(2, 5)$ and $(5, 2)$ are different pairs, just as row
2 seat 5 is a different seat from row 5 seat 2. The set of all ordered pairs of counting numbers is written
$\mathbb{N} \times \mathbb{N}$, read "N cross N".

Lay the pairs out in an infinite grid: row $m$, column $n$.

### Row by row does not work

Listing $(1, 1), (1, 2), (1, 3), (1, 4), \ldots$ never finishes row 1, so $(2, 1)$ never gets a position. This is the
same trap as "positives first, then negatives" in [lesson 2](02-integers-countable.md): an endless first part
swallows the whole list.

### Walk the short diagonals

The trick, used by Cantor, is to walk along the **short diagonals** of the grid, each of which is **finite**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 260" role="img" aria-label="A grid of pairs (m, n): rows m from 1 to 5, columns n from 1 to 5; shaded bands run along each short diagonal from top right to bottom left, and the pairs on them are taken in order: (1,1), then (1,2) and (2,1), then (1,3), (2,2), (3,1), and so on">
  <text x="70.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="145.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="220.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="295.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="370.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="22.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="22.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="22.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="22.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="22.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <path d="M 145.0 40.0 L 70.0 85.0" fill="none" stroke="#9cc9ea" stroke-width="6" stroke-linecap="round" stroke-opacity="0.6"/>
  <path d="M 220.0 40.0 L 145.0 85.0 L 70.0 130.0" fill="none" stroke="#9cc9ea" stroke-width="6" stroke-linecap="round" stroke-opacity="0.6"/>
  <path d="M 295.0 40.0 L 220.0 85.0 L 145.0 130.0 L 70.0 175.0" fill="none" stroke="#9cc9ea" stroke-width="6" stroke-linecap="round" stroke-opacity="0.6"/>
  <path d="M 370.0 40.0 L 295.0 85.0 L 220.0 130.0 L 145.0 175.0 L 70.0 220.0" fill="none" stroke="#9cc9ea" stroke-width="6" stroke-linecap="round" stroke-opacity="0.6"/>
  <rect x="50.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1,1</text>
  <rect x="125.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="145.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1,2</text>
  <rect x="200.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="220.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1,3</text>
  <rect x="275.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="295.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1,4</text>
  <rect x="350.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="370.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1,5</text>
  <rect x="50.0" y="74.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2,1</text>
  <rect x="125.0" y="74.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="145.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2,2</text>
  <rect x="200.0" y="74.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="220.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2,3</text>
  <rect x="275.0" y="74.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="295.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2,4</text>
  <text x="370.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <rect x="50.0" y="119.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">3,1</text>
  <rect x="125.0" y="119.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="145.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">3,2</text>
  <rect x="200.0" y="119.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="220.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">3,3</text>
  <text x="295.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="370.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <rect x="50.0" y="164.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">4,1</text>
  <rect x="125.0" y="164.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="145.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">4,2</text>
  <text x="220.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="295.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="370.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <rect x="50.0" y="209.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">5,1</text>
  <text x="145.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="220.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="295.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="370.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="220.0" y="250.0" font-size="11" text-anchor="middle" fill="currentColor">row m = first number, column n = second number</text>
</svg>
</div>

- Diagonal 1 has just $(1, 1)$.
- Diagonal 2 has $(1, 2)$ and $(2, 1)$.
- Diagonal 3 has $(1, 3)$, $(2, 2)$, $(3, 1)$.
- Diagonal 4 has $(1, 4)$, $(2, 3)$, $(3, 2)$, $(4, 1)$.

On diagonal $d$ the two numbers always add up to $d + 1$, and there are exactly $d$ pairs on it. Finish each diagonal
(it is finite, so you can), then move to the next. The list begins

$$(1,1),\ (1,2),\ (2,1),\ (1,3),\ (2,2),\ (3,1),\ (1,4),\ (2,3),\ (3,2),\ (4,1),\ \ldots$$

Every pair $(m, n)$ is on exactly one diagonal, number $d = m + n - 1$, and there are only finitely many pairs on the
diagonals before it. So every pair gets a finite position. **$\mathbb{N} \times \mathbb{N}$ is countable.**

### A formula for the position

Let us find the exact position of $(m, n)$.

1. It lies on diagonal $d = m + n - 1$.
2. The diagonals before it hold $1 + 2 + 3 + \cdots + (d - 1)$ pairs. By Gauss's trick
   ([Patterns](../../patterns/level-5/03-gauss-trick.md)) that is $\dfrac{(d - 1)d}{2}$.
3. Along its own diagonal we go in order of the first number $m = 1, 2, 3, \ldots$, so $(m, n)$ is the $m$th pair on
   it.

So the position of $(m, n)$ is

$$k = \frac{(d - 1)d}{2} + m, \qquad \text{where } d = m + n - 1.$$

Check with $(2, 3)$: $d = 4$, so $k = \frac{3 \times 4}{2} + 2 = 6 + 2 = 8$. In the list above, $(2, 3)$ is indeed
8th. ✓

The numbers $\frac{(d-1)d}{2}$, that is $0, 1, 3, 6, 10, 15, 21, 28, \ldots$, are the **triangular numbers**
([Patterns](../../patterns/level-3/03-triangular-numbers.md)): each diagonal adds one more row to a growing triangle.

### Going backwards: which pair is at position k?

To be a true one-to-one correspondence, every position must hold exactly one pair. Given a position $k$:

1. Find the diagonal: the largest triangular number **less than** $k$. If it is $\frac{(d - 1)d}{2}$, then $k$ is on
   diagonal $d$.
2. Then $m = k - \frac{(d - 1)d}{2}$ and $n = d + 1 - m$.

Example: $k = 20$. The triangular numbers are $\ldots, 10, 15, 21, \ldots$ The largest one less than 20 is
$15 = \frac{5 \times 6}{2}$, so $d = 6$. Then $m = 20 - 15 = 5$ and $n = 6 + 1 - 5 = 2$. Position 20 holds
$(5, 2)$. Check forward: $d = 5 + 2 - 1 = 6$, $k = 15 + 5 = 20$. ✓

Each position falls in exactly one diagonal's stretch, and in one place within it, so each position holds exactly one
pair. Together with the forward formula, that proves the pairing is perfect.

### A second pairing: powers of 2 times odd numbers

Here is a completely different way to match pairs with counting numbers, with no diagonals at all. Send

$$(m, n) \longmapsto 2^{m - 1} \times (2n - 1).$$

For example $(1, 1) \mapsto 1$, $(2, 1) \mapsto 2$, $(1, 2) \mapsto 3$, $(3, 1) \mapsto 4$, $(2, 2) \mapsto 6$.

Why does every counting number come from exactly one pair? Take any counting number, say 40. Halve it as long as you
can: $40 \to 20 \to 10 \to 5$. Three halvings, then an odd number. So $40 = 2^3 \times 5$, which means $m - 1 = 3$
and $2n - 1 = 5$: the pair is $(4, 3)$. Every counting number splits **in exactly one way** into a power of 2 times an
odd number (you halve until you cannot), so this rule is a one-to-one correspondence too. (It is a small case of
unique prime factorisation, from [Number theory](../../number-theory/level-6/06-unique-factorisation.md).)

There are many different pairings between $\mathbb{N} \times \mathbb{N}$ and $\mathbb{N}$. One is enough to show they
are the same size.

### Triples, and longer lists of numbers

What about triples $(a, b, c)$? Think of a triple as a pair whose first part is itself a pair: $((a, b), c)$. Replace
$(a, b)$ by its position $p$ in the diagonal list; now you have an ordinary pair $(p, c)$, and that has a position
too. Different triples give different pairs, so different positions. So triples are countable, and by the same idea,
lists of any fixed length: quadruples, lists of 10 numbers, and so on.

## Worked examples

**1. Forward.** Find the position of $(4, 3)$.

$d = 4 + 3 - 1 = 6$, so the earlier diagonals hold $\frac{5 \times 6}{2} = 15$ pairs, and $k = 15 + 4 =$ **19**.

**2. Backward.** Which pair is at position 12?

1. Triangular numbers: 0, 1, 3, 6, 10, 15, ... The largest less than 12 is $10 = \frac{4 \times 5}{2}$, so $d = 5$.
2. $m = 12 - 10 = 2$, $n = 5 + 1 - 2 = 4$. The pair is $(2, 4)$.
3. Check: $d = 2 + 4 - 1 = 5$, $k = 10 + 2 = 12$. ✓

**3. The other pairing.** Under $(m, n) \mapsto 2^{m-1}(2n - 1)$, where does $(3, 5)$ go, and which pair goes to 40?

- $(3, 5) \mapsto 2^2 \times 9 = 36$.
- 40 halves three times to the odd number 5: $40 = 2^3 \times 5$, so $m = 4$ and $2n - 1 = 5$, $n = 3$: the pair
  $(4, 3)$.

**4. The cinema.** In the diagonal order, which seat gets ticket 50?

1. The largest triangular number less than 50 is $45 = \frac{9 \times 10}{2}$, so $d = 10$.
2. $m = 50 - 45 = 5$, $n = 10 + 1 - 5 = 6$. Ticket 50 is **row 5, seat 6**.
3. Check: $d = 5 + 6 - 1 = 10$, position $45 + 5 = 50$. ✓

## Try it

1. Write the first 10 pairs in the diagonal list without looking.
2. Find the positions of $(1, 5)$ and $(5, 1)$.
3. Which pair is at position 25?
4. Find the position of $(10, 10)$.
5. Under the pairing $(m, n) \mapsto 2^{m-1}(2n - 1)$, which number does $(2, 5)$ go to? Which pair goes to 48?
6. Explain why the rule "halve until you get an odd number" always stops, and why it shows that every counting number
   comes from exactly one pair under the pairing of question 5.
7. A cinema with infinitely many rows and seats hands out tickets in diagonal order. Which ticket does row 3, seat 7
   get? Which seat gets ticket 100?
8. Show that the set of pairs of **integers** $(a, b)$, like $(-2, 5)$, is countable. (Hint: use lesson 2.)

??? note "Answers"
    1. $(1,1), (1,2), (2,1), (1,3), (2,2), (3,1), (1,4), (2,3), (3,2), (4,1)$.
    2. Both are on diagonal $d = 5$, after $\frac{4 \times 5}{2} = 10$ pairs. $(1, 5)$ is at $10 + 1 =$ **11**;
       $(5, 1)$ is at $10 + 5 =$ **15**.
    3. The largest triangular number less than 25 is $21 = \frac{6 \times 7}{2}$, so $d = 7$, $m = 25 - 21 = 4$,
       $n = 7 + 1 - 4 = 4$: the pair **(4, 4)**. Check: $21 + 4 = 25$. ✓
    4. $d = 19$, earlier diagonals hold $\frac{18 \times 19}{2} = 171$ pairs, so the position is $171 + 10 =$
       **181**.
    5. $(2, 5) \mapsto 2^1 \times 9 = 18$. $48 \to 24 \to 12 \to 6 \to 3$: four halvings, so $48 = 2^4 \times 3$,
       giving $m = 5$ and $2n - 1 = 3$, $n = 2$: the pair **(5, 2)**.
    6. Each halving makes the number smaller, and a counting number cannot get smaller forever, so the halving stops,
       and it stops exactly when the number is odd. The number of halvings is forced (you must halve while the
       number is even, and you cannot halve an odd number), so $m - 1$ and the odd number $2n - 1$ are both forced:
       exactly one pair.
    7. Row 3, seat 7: $d = 9$, earlier diagonals hold $\frac{8 \times 9}{2} = 36$, so ticket $36 + 3 =$ **39**.
       Ticket 100: the largest triangular number less than 100 is $91 = \frac{13 \times 14}{2}$, so $d = 14$,
       $m = 100 - 91 = 9$, $n = 14 + 1 - 9 = 6$: **row 9, seat 6**.
    8. Each integer has a position in the zigzag list $0, 1, -1, 2, -2, \ldots$ Replace the pair of integers
       $(a, b)$ by the pair of their zigzag positions $(p, q)$, an ordered pair of counting numbers; for example
       $(-2, 5) \to (5, 10)$. Different integer pairs give different counting-number pairs, and those have different
       positions in the diagonal list. So every pair of integers gets its own position (some positions are not used,
       which is fine: skip them).

## Common mistake

**Going along a row.** Any list that starts by running along a whole infinite row (or column) never comes back. Every
step of a good list must stay inside a **finite** piece, like a diagonal, before moving on.

**Forgetting that order matters in a pair.** $(2, 5)$ and $(5, 2)$ are different pairs with different positions (17
and 20 in the diagonal list). If you merge them you are listing something else, such as sets $\{2, 5\}$.

## Where it leads

- Back: [The integers are countable](02-integers-countable.md) · Next: [The rational numbers are countable](04-rationals-countable.md),
  where each pair becomes a fraction.
- [Level 6 page](index.md) · [Infinity topic page](../index.md)
- Triangular numbers and Gauss's trick: [Patterns](../../patterns/level-5/03-gauss-trick.md). Grids of pairs in
  coordinate geometry: [Algebra](../../algebra/index.md).
- Cartesian products like $\mathbb{N} \times \mathbb{N}$, and proofs about functions between sets:
  [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
