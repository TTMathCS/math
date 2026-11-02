---
title: "Counting by a bijection"
---

# Counting by a bijection

*Counting and combinations · level 6, lesson 5 of 6*

## A question to start

The number 4 can be written as a sum of positive whole numbers, where the order of the parts matters, in these ways:

$$4, \quad 3+1, \quad 1+3, \quad 2+2, \quad 2+1+1, \quad 1+2+1, \quad 1+1+2, \quad 1+1+1+1.$$

That is 8 ways. In how many ways can you write 10 like this?

Listing them would take a long time: the answer is **512**. Notice $8 = 2^3$ and $512 = 2^9$. Why should powers of 2
appear? Because, as you will see, each of these sums secretly **is** a subset of something, and we already know how
to count subsets. Matching a hard collection with an easy one is called counting by a **bijection**.

## The idea

### What a bijection is

A **bijection** between two collections $A$ and $B$ is a way of pairing every element of $A$ with exactly one element
of $B$, so that every element of $B$ is paired with exactly one element of $A$. Nobody is left out, and nobody has two
partners. Think of a dance where every boy and every girl has exactly one partner.

If there is a bijection between $A$ and $B$, then $|A| = |B|$: they have the same size. You do not need to count either
one to know they are equal; then you count whichever is easier.

To check that a pairing really is a bijection, check **both directions**:

1. Each element of $A$ gives exactly one element of $B$ (a rule that turns one into the other).
2. Each element of $B$ comes from exactly one element of $A$ (you can **undo** the rule, without ambiguity).

You have already used bijections several times: grid routes and words of E and N (level 5), choosing who is in and
choosing who is out (level 5), and sharings of sweets and rows of stars and bars (lesson 2).

### Subsets and binary strings

A **binary string** is a row of 0s and 1s, like 1010. Take the set {a, b, c, d}. Match each subset with a string of
length 4: write 1 in a position if that letter is **in** the subset, 0 if it is **out**.

| Subset | String |
| --- | --- |
| { } | 0000 |
| {a, c} | 1010 |
| {b, c, d} | 0111 |
| {a, b, c, d} | 1111 |

Every subset gives one string, and every string can be read back as one subset. So subsets of a 4-element set and
binary strings of length 4 are in bijection. Strings are easy to count: 2 choices for each of 4 places, $2^4 = 16$.
So a set of $n$ things has $2^n$ subsets.

The bijection does more: subsets of **size 2** match strings with **exactly two 1s**. Strings with two 1s are counted
by choosing where the 1s go, $\dbinom{4}{2} = 6$. This is the same as choosing the subset directly, of course, but it
shows how one bijection carries every detail across.

### Sums and gaps

Back to the question. Write 4 as a row of 4 dots. Between the dots there are 3 gaps. A sum is made by putting a bar
in some of the gaps: the bars cut the dots into groups, and the group sizes are the parts.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 200" role="img" aria-label="Left: six dots in a row with bars in two of the five gaps, splitting them into groups of 2, 1 and 3, which stands for 6 = 2 + 1 + 3. Right: four points on a circle; the two diagonals of the four-sided shape they make cross at exactly one point">
  <circle cx="25" cy="80" r="9" fill="#eea66f" stroke="currentColor"/>
  <circle cx="55" cy="80" r="9" fill="#eea66f" stroke="currentColor"/>
  <circle cx="85" cy="80" r="9" fill="#eea66f" stroke="currentColor"/>
  <circle cx="115" cy="80" r="9" fill="#eea66f" stroke="currentColor"/>
  <circle cx="145" cy="80" r="9" fill="#eea66f" stroke="currentColor"/>
  <circle cx="175" cy="80" r="9" fill="#eea66f" stroke="currentColor"/>
  <text x="40" y="84" font-size="9" text-anchor="middle" fill="currentColor" fill-opacity="0.5">·</text>
  <line x1="70" y1="58" x2="70" y2="102" stroke="currentColor" stroke-width="3"/>
  <line x1="100" y1="58" x2="100" y2="102" stroke="currentColor" stroke-width="3"/>
  <text x="130" y="84" font-size="9" text-anchor="middle" fill="currentColor" fill-opacity="0.5">·</text>
  <text x="160" y="84" font-size="9" text-anchor="middle" fill="currentColor" fill-opacity="0.5">·</text>
  <text x="40" y="130" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <text x="85" y="130" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <text x="145" y="130" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="100" y="165" font-size="12" text-anchor="middle" fill="currentColor">bars in gaps 2 and 3:</text>
  <text x="100" y="183" font-size="12" text-anchor="middle" fill="currentColor">6 = 2 + 1 + 3</text>
  <circle cx="330" cy="95" r="75" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.6"/>
  <polygon points="265.0,57.5 367.5,30.0 400.5,120.7 304.3,165.5" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="265.0" y1="57.5" x2="400.5" y2="120.7" stroke="currentColor" stroke-width="2"/>
  <line x1="367.5" y1="30.0" x2="304.3" y2="165.5" stroke="currentColor" stroke-width="2"/>
  <circle cx="338.7" cy="91.8" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="265.0" cy="57.5" r="6" fill="#eea66f" stroke="currentColor"/>
  <circle cx="367.5" cy="30.0" r="6" fill="#eea66f" stroke="currentColor"/>
  <circle cx="400.5" cy="120.7" r="6" fill="#eea66f" stroke="currentColor"/>
  <circle cx="304.3" cy="165.5" r="6" fill="#eea66f" stroke="currentColor"/>
  <text x="330" y="192" font-size="12" text-anchor="middle" fill="currentColor">4 points give 1 crossing</text>
</svg>
</div>

- Each choice of gaps gives exactly one sum (read off the group sizes).
- Each sum gives exactly one choice of gaps (cut after the first part, after the second, and so on).

So the sums of 4 are in bijection with **subsets of the 3 gaps**, and there are $2^3 = 8$ of them. ✓ For 10 there
are 9 gaps, so $2^9 = 512$ sums. In general, $n$ can be written in $2^{n-1}$ ways. Sums like these, where the order of
parts matters, are called **compositions** of $n$.

The bijection also tells you how many sums have a given number of parts. A sum of 10 with exactly 3 parts uses
exactly 2 bars: $\dbinom{9}{2} = 36$. That matches lesson 2: sharing 10 sweets among 3 children with each getting at
least one is exactly a sum of 10 with 3 parts.

### Crossings inside a circle

Put 6 points on a circle (spread so that no three chords meet at a single point inside) and join every pair with a
straight line. How many crossing points are there inside the circle?

Any crossing is made by two chords, and those two chords have 4 different ends on the circle. In the other direction,
any 4 points on the circle make a four-sided shape, and of the three ways to pair them into two chords, exactly one
pair (the two diagonals) crosses. So **each set of 4 points gives exactly one crossing** (the right picture above),
and each crossing comes from exactly one set of 4 points. Bijection! The number of crossings is
$\dbinom{6}{4} = 15$.

### Even and odd subsets

Here is a cleverer bijection. Among the 16 subsets of {a, b, c, d}, how many have an **even** number of elements
(0, 2 or 4) and how many an **odd** number (1 or 3)?

Pair each subset with the subset you get by **switching a**: if a is in, take it out; if a is out, put it in. So
{b, c} is paired with {a, b, c}, and {a} with { }. Switching a changes the size by exactly 1, so it pairs every even
subset with an odd subset. Switching twice brings you back, so the pairing can be undone: it is a bijection. Hence
even and odd subsets are equally many: 8 each.

From row 4 of Pascal's triangle: even sizes $1 + 6 + 1 = 8$, odd sizes $4 + 4 = 8$. ✓ The same works for any set
with at least one element, which proves that the alternate sum of any row, such as $1 - 4 + 6 - 4 + 1$, is 0.

### When the matching is not one-to-one

Sometimes a natural matching sends **several** things to each target, always the same number. In level 5, every team
of 3 received exactly 6 podiums. Then you do not get equality but **division**: podiums $= 6 \times$ teams. A
"$k$-to-1" matching divides by $k$. A bijection is the special case $k = 1$.

## Worked examples

**1. Choosing with no two neighbours.** In how many ways can you choose 3 numbers from 1 to 10 with no two of them
consecutive (next to each other)?

- Write the chosen numbers in order, $a < b < c$. "No two consecutive" means $b \ge a + 2$ and $c \ge b + 2$.
- Squeeze them together: map $(a, b, c)$ to $(a, b - 1, c - 2)$. Since $b - 1 \ge a + 1$ and $c - 2 \ge (b - 1) + 1$,
  the new numbers are still increasing, and they lie between 1 and 8.
- Undo it by adding back 0, 1, 2. Any 3 different numbers from 1 to 8 spread back out to a choice with no neighbours
  from 1 to 10.
- So the count is $\dbinom{8}{3} = 56$. For example {2, 5, 9} ↔ {2, 4, 7}.

**2. Divisors.** How many divisors (whole numbers that divide exactly) does $72$ have?

- $72 = 2^3 \times 3^2$. Every divisor is $2^i \times 3^j$ with $i$ from 0 to 3 and $j$ from 0 to 2, and different
  pairs $(i, j)$ give different divisors.
- So divisors are in bijection with pairs $(i, j)$: $4 \times 3 = 12$ divisors. (They are 1, 2, 3, 4, 6, 8, 9, 12, 18,
  24, 36, 72.)

**3. Rectangles on a chessboard.** How many rectangles (of all sizes) are drawn on an 8 by 8 chessboard?

- A chessboard is drawn with 9 vertical lines and 9 horizontal lines.
- A rectangle is fixed by its left and right sides (2 of the 9 vertical lines) and its top and bottom (2 of the 9
  horizontal lines), and every such choice gives one rectangle.
- $\dbinom{9}{2} \times \dbinom{9}{2} = 36 \times 36 = 1296$, the number from [level 3](../level-3/04-chessboard-squares.md), now with a reason.

## Try it

1. In how many ways can 5 be written as a sum of positive whole numbers, order mattering? How many of these have
   exactly 3 parts? List the 3-part ones.
2. In how many ways can 10 be written as an ordered sum of exactly 3 positive whole numbers? Explain the bijection with
   stars and bars.
3. Eight points are on a circle, with no three chords meeting at one point inside. How many chords are there? How
   many crossing points inside the circle?
4. How many binary strings of length 8 have exactly three 1s? Which subsets do they match?
5. How many divisors does $360 = 2^3 \times 3^2 \times 5$ have?
6. In how many ways can you choose 4 numbers from 1 to 12 with no two consecutive?
7. A set has 5 elements. How many of its subsets have an even number of elements? Check with row 5 of Pascal's
   triangle.
8. Explain why the number of shortest grid routes 5 east and 3 north equals the number of 3-element subsets of
   {1, 2, ..., 8}. Describe the pairing in both directions.

??? note "Answers"
    1. 4 gaps between 5 dots: $2^4 = 16$ sums. Exactly 3 parts means 2 bars in 4 gaps: $\dbinom{4}{2} = 6$. They are
       $3+1+1$, $1+3+1$, $1+1+3$, $2+2+1$, $2+1+2$, $1+2+2$.
    2. $\dbinom{9}{2} = 36$. A sum $a + b + c = 10$ with each part at least 1 is a sharing of 10 sweets among 3
       children where each gets at least one; the bars sit in 2 of the 9 gaps between the 10 stars.
    3. Chords: $\dbinom{8}{2} = 28$. Crossings: $\dbinom{8}{4} = 70$.
    4. Choose the 3 positions of the 1s: $\dbinom{8}{3} = 56$. They match the 3-element subsets of an 8-element set.
    5. Exponents of 2: 0 to 3 (4 choices); of 3: 0 to 2 (3 choices); of 5: 0 or 1 (2 choices). $4 \times 3 \times 2 = 24$.
    6. Squeeze $a < b < c < d$ to $a, b - 1, c - 2, d - 3$, four different numbers from 1 to 9: $\dbinom{9}{4} = 126$.
    7. Half of $2^5 = 32$, so 16. Row 5 is 1, 5, 10, 10, 5, 1; even sizes $1 + 10 + 5 = 16$. ✓
    8. A route has 8 steps. Pair it with the set of step numbers that go north, such as ENEENNEE ↔ {2, 5, 6}. Given
       any 3-element subset of {1, ..., 8}, make those steps N and the rest E: that is one route back. Both directions
       work, so it is a bijection, and both counts are $\dbinom{8}{3} = 56$.

## Common mistake

**Checking only one direction.** A rule that turns each $A$ into a $B$ is not enough. If two different $A$s could give
the same $B$ (the pairing is not one-to-one), or some $B$ is never reached, the sizes differ. Always describe how to go
**back** from $B$ to $A$, and make sure the way back is unique.

**Forgetting a condition that makes the matching work.** The crossings count $\dbinom{n}{4}$ needs "no three chords
through one point". With 6 equally spaced points, the three long diagonals all meet at the centre, and there are
fewer crossing points (13, not 15). Bijections are exact, so their conditions matter.

## Where it leads

- Back: [The generalised pigeonhole principle](04-generalised-pigeonhole.md) · Next: [Counting outcomes for
  probability](06-counting-for-probability.md)
- [Level 6 page](index.md) · [Counting topic page](../index.md)
- Two ways of counting the same collection prove identities in [Level 7, double counting](../level-7/05-double-counting.md).
  Bijections with paths that never cross a line give the Catalan numbers in [Level 8](../level-8/index.md).
- The divisor count, $(3 + 1)(2 + 1)$ for $2^3 \times 3^2$, comes from prime factors: [Number theory](../../number-theory/index.md).
- Bijections are how mathematicians compare the sizes of **infinite** sets, which leads to some very strange results:
  [Infinity](../../infinity/index.md).
- One-to-one and onto functions, and their inverses, are studied in
  [MAT158 Unit 8 (inverse functions)](../../../uoft/MAT158H1/unit08.md).
