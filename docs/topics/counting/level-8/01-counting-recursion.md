---
title: "Counting with recursion"
---

# Counting with recursion

*Counting and combinations · level 8, lesson 1 of 6*

## A question to start

The **Tower of Hanoi** is a puzzle with three pegs and a stack of discs, all of different sizes, on the first peg,
the largest at the bottom. You must move the whole stack to the third peg. You may move only one disc at a time, and
you may never put a disc on top of a smaller one.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 190" role="img" aria-label="Three pegs; three discs of different sizes on the first peg, largest at the bottom">
  <rect x="20" y="150" width="120" height="8" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <rect x="77" y="50" width="6" height="100" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="178" font-size="12" text-anchor="middle" fill="currentColor">start</text>
  <rect x="170" y="150" width="120" height="8" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <rect x="227" y="50" width="6" height="100" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="178" font-size="12" text-anchor="middle" fill="currentColor">spare</text>
  <rect x="320" y="150" width="120" height="8" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <rect x="377" y="50" width="6" height="100" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <text x="380" y="178" font-size="12" text-anchor="middle" fill="currentColor">goal</text>
  <rect x="30" y="132" width="100" height="16" rx="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <rect x="42" y="114" width="76" height="16" rx="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <rect x="54" y="96" width="52" height="16" rx="5" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

The puzzle was invented by the French mathematician Édouard Lucas and sold as a toy in 1883. The story goes that in a
temple far away, priests are moving a tower of 64 golden discs, one move a second, and when they finish the world
will end. Should we worry? With 3 discs the puzzle takes 7 moves. How many does it take with 64? You cannot try it, and
there is no formula from earlier levels that fits. You need a new way of counting.

## The idea

### Recursion: answering a big question with smaller ones

A **recursion** (or **recurrence relation**) is a rule that gives each term of a sequence from earlier terms. The
Fibonacci rule $F_n = F_{n-1} + F_{n-2}$ is one. A recursion alone is not enough: you also need **starting values**
(initial conditions), such as $F_1 = 1$ and $F_2 = 1$. Then the whole sequence is fixed, one term after another.

Counting by recursion goes like this:

1. Name the answer for size $n$, say $a_n$.
2. Look at **one particular part** of the object (the first move, the left edge, the largest disc) and split into
   cases according to what happens there.
3. In each case, recognise what remains as a **smaller copy** of the same problem.
4. Add the cases. Check that they do not overlap and that they cover everything.

It is the same idea as Pascal's rule ("is this person on the team or not?"), used now on new problems.

### Tiling a strip with dominoes

How many ways are there to cover a 2-by-$n$ strip with 1-by-2 dominoes? Call the answer $t_n$. Here are the
5 tilings of a 2-by-4 strip:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 180" role="img" aria-label="The five ways to tile a 2 by 4 strip with dominoes">
  <rect x="20" y="15" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="15" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="72" y="15" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="98" y="15" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="160" y="15" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="186" y="15" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="212" y="15" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="212" y="41" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="300" y="15" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="326" y="15" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="326" y="41" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="378" y="15" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="20" y="95" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="20" y="121" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="72" y="95" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="98" y="95" width="26" height="52" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="160" y="95" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="160" y="121" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="212" y="95" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <rect x="212" y="121" width="52" height="26" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="350" y="120" font-size="12" text-anchor="middle" fill="currentColor">starts with a</text>
  <text x="350" y="136" font-size="12" text-anchor="middle" fill="currentColor">vertical: 3 ways</text>
  <text x="350" y="152" font-size="12" text-anchor="middle" fill="currentColor">starts with two flat</text>
  <text x="350" y="168" font-size="12" text-anchor="middle" fill="currentColor">ones: 2 ways</text>
</svg>
</div>

Look at the **left edge**. Either a domino stands upright there, covering the whole edge, or it lies flat; and if one
lies flat in the top row, the square below it can only be covered by another flat domino exactly beneath it. So:

- **Case 1:** an upright domino at the left. What remains is a 2-by-$(n - 1)$ strip: $t_{n-1}$ ways.
- **Case 2:** two flat dominoes at the left. What remains is a 2-by-$(n - 2)$ strip: $t_{n-2}$ ways.

The cases cannot overlap (the left edge looks different) and nothing else can happen. So

$$t_n = t_{n-1} + t_{n-2}, \qquad t_1 = 1,\ t_2 = 2.$$

That is the Fibonacci rule, and the answers are $1, 2, 3, 5, 8, 13, 21, 34, 55, 89, \ldots$. The 2-by-10 strip has 89
tilings. (If you like, set $t_0 = 1$: the empty strip has one tiling, "do nothing", and then $t_2 = t_1 + t_0$ too.)

### The Tower of Hanoi, solved and proved

Let $H_n$ be the **smallest** number of moves that moves $n$ discs from one peg to another.

**A strategy.** To move $n$ discs from *start* to *goal*: first move the top $n - 1$ discs to *spare* (using *goal* as
the helper), taking $H_{n-1}$ moves; then move the largest disc to *goal* (1 move); then move the $n - 1$ discs from
*spare* onto it ($H_{n-1}$ moves). This takes $2H_{n-1} + 1$ moves, so $H_n \le 2H_{n-1} + 1$.

**No strategy can do better.** The largest disc has to move at least once. At the moment of its **first** move, it
leaves its peg and lands on an empty peg (nothing may be on top of it or under it on the new peg), so all $n - 1$ smaller
discs must be stacked on the third peg. Getting them there took at least $H_{n-1}$ moves. After the largest disc's
**last** move, the $n - 1$ smaller discs still have to be moved onto it: at least $H_{n-1}$ more moves. So
$H_n \ge 2H_{n-1} + 1$.

Together, $H_n = 2H_{n-1} + 1$ with $H_1 = 1$. The values are 1, 3, 7, 15, 31, 63, ...: one less than a power of 2.

**Proving the formula by induction.** Claim: $H_n = 2^n - 1$ for every $n \ge 1$. Base case: $H_1 = 1 = 2^1 - 1$. ✓
Step: if $H_{n-1} = 2^{n-1} - 1$, then $H_n = 2(2^{n-1} - 1) + 1 = 2^n - 2 + 1 = 2^n - 1$. ✓ So the claim holds for
every $n$.

(How could you **guess** $2^n - 1$? Add 1 to both sides of the recursion: $H_n + 1 = 2(H_{n-1} + 1)$. So $H_n + 1$
doubles every time, starting from $H_1 + 1 = 2$: it is $2^n$.)

**The 64 golden discs.** $2^{64} - 1 = 18\,446\,744\,073\,709\,551\,615$ moves. At one move a second that is about
585 billion years, roughly 40 times the age of the universe so far. The world is safe.

### Binary strings with no two 1s together

How many strings of 0s and 1s of length $n$ have no two 1s next to each other? Call it $a_n$. Look at the **first**
digit. If it is 0, the rest is any good string of length $n - 1$. If it is 1, the next digit must be 0, and then the
rest is any good string of length $n - 2$. So $a_n = a_{n-1} + a_{n-2}$ again, with $a_1 = 2$ (0, 1) and $a_2 = 3$
(00, 01, 10). The values are $2, 3, 5, 8, 13, \ldots$: Fibonacci, shifted. (This is no accident: add one extra 0 at the
end, then cut the string into pieces "10" and "0". Reading "10" as a flat pair and "0" as an upright domino turns
it into a tiling of a 2-by-$(n + 1)$ strip, so $a_n = t_{n+1}$.)

### Recursions that add more each time

Not every recursion is Fibonacci. Draw $n$ straight lines in the plane so that no two are parallel and no three meet at
one point. Into how many regions do they cut the plane? With 0 lines there is 1 region. When line number $n$ is drawn,
it crosses the $n - 1$ earlier lines at $n - 1$ different points, which cut it into $n$ pieces. Each piece splits one
old region into two, so the number of regions grows by $n$:

$$R_n = R_{n-1} + n, \qquad R_0 = 1.$$

So $R_n = 1 + (1 + 2 + \cdots + n) = 1 + \dfrac{n(n+1)}{2}$. Ten lines make $1 + 55 = 56$ regions.

## Worked examples

**1. A 2-by-6 strip.** Continue $t_n = t_{n-1} + t_{n-2}$ from $t_1 = 1$, $t_2 = 2$: $t_3 = 3$, $t_4 = 5$, $t_5 = 8$,
$t_6 = 13$. There are 13 tilings.

**2. Five discs.** $H_5 = 2^5 - 1 = 31$. Step by step from the recursion: $1, 3, 7, 15, 31$. ✓

**3. Strings of length 5.** $a_1 = 2$, $a_2 = 3$, $a_3 = 5$, $a_4 = 8$, $a_5 = 13$. The 13 strings are 00000, 00001,
00010, 00100, 00101, 01000, 01001, 01010, 10000, 10001, 10010, 10100, 10101.

**4. Five lines.** $R_5 = 1 + \dfrac{5 \times 6}{2} = 16$. From the recursion: $1, 2, 4, 7, 11, 16$. ✓

**5. Stairs with 1, 2 or 3 steps at a time.** Let $s_n$ count the ways to climb $n$ stairs. The first move is 1, 2 or
3 steps, leaving $n - 1$, $n - 2$ or $n - 3$ stairs:

$$s_n = s_{n-1} + s_{n-2} + s_{n-3}, \qquad s_0 = 1,\ s_1 = 1,\ s_2 = 2.$$

Then $s_3 = 4$, $s_4 = 7$, $s_5 = 13$, $s_6 = 24$. Check $s_3$ by listing: 1+1+1, 1+2, 2+1, 3. ✓

## Try it

1. How many ways are there to tile a 2-by-8 strip with dominoes?
2. How many moves does the Tower of Hanoi need with 10 discs?
3. How many strings of 0s and 1s of length 6 have no two 1s next to each other?
4. Into how many regions do 8 lines cut the plane (no two parallel, no three through one point)?
5. Find the number of ways to climb 7 stairs taking 1, 2 or 3 steps at a time.
6. A 1-by-$n$ strip is tiled with red squares, blue squares and 1-by-2 dominoes. Find a recursion for the number of
   tilings $b_n$, and work out $b_4$.
7. In a stricter Tower of Hanoi, a disc may only move to a **neighbouring** peg: start ↔ spare or spare ↔ goal, never
   straight from start to goal. Explain why moving $n$ discs from start to goal can be done in $J_n = 3J_{n-1} + 2$
   moves with $J_1 = 2$, and show that $J_n = 3^n - 1$.

??? note "Answers"
    1. $t_7 = 21$, $t_8 = 34$ (continuing 1, 2, 3, 5, 8, 13). **34**.
    2. $2^{10} - 1 = 1023$.
    3. $a_6 = a_5 + a_4 = 13 + 8 = 21$.
    4. $R_8 = 1 + \frac{8 \times 9}{2} = 37$.
    5. $s_7 = s_6 + s_5 + s_4 = 24 + 13 + 7 = 44$.
    6. Look at the left end: a red square ($b_{n-1}$ ways for the rest), a blue square ($b_{n-1}$) or a domino
       ($b_{n-2}$). So $b_n = 2b_{n-1} + b_{n-2}$, with $b_1 = 2$ and $b_2 = 5$ (RR, RB, BR, BB, domino). Then
       $b_3 = 2 \times 5 + 2 = 12$ and $b_4 = 2 \times 12 + 5 = 29$.
    7. The largest disc must go start → spare → goal. Before it moves to spare, the other $n - 1$ discs must all be on
       goal: $J_{n-1}$ moves (start to goal, the same kind of trip). Move the largest to spare (1). Now the $n - 1$
       discs must get out of the way to start: $J_{n-1}$ moves (goal to start). Move the largest to goal (1). Finally move
       the $n - 1$ discs from start to goal: $J_{n-1}$. Total $3J_{n-1} + 2$. With one disc: start → spare → goal, 2 moves.
       Induction: $J_1 = 2 = 3^1 - 1$, and if $J_{n-1} = 3^{n-1} - 1$ then $J_n = 3^n - 3 + 2 = 3^n - 1$. ✓
       (So $J_2 = 8$, $J_3 = 26$.)

## Common mistake

**Cases that overlap or miss something.** A recursion is only right if the cases split **every** object into **exactly
one** case. For the dominoes, "a flat domino at the left" forces a second flat domino under it; if you count "one flat
domino" as a case on its own, you are counting impossible tilings. Always check the recursion against a small case you
can list by hand.

**Forgetting the starting values.** $t_n = t_{n-1} + t_{n-2}$ also describes $1, 3, 4, 7, 11, \ldots$ (start 1, 3). The
recursion and the starting values together fix the answer.

## Where it leads

- Back: [Level 7: multinomial coefficients](../level-7/06-multinomial-coefficients.md) · Next:
  [Catalan numbers](02-catalan-numbers.md)
- [Level 8 page](index.md) · [Counting topic page](../index.md)
- The Fibonacci numbers also hide in Pascal's triangle: [patterns in Pascal's triangle](../level-7/04-pascal-patterns.md).
- Sequences defined by rules like these are the heart of [Patterns](../../patterns/index.md); doubling sequences like
  $2^n$ grow the way the chessboard rice does there.
- Induction is set out carefully in [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md), and
  sequences given by recursions are studied in [MAT137 Unit 11: sequences](../../../uoft/MAT137/unit11.md).
