---
title: "Sums of odd numbers"
---

# Sums of odd numbers

*Patterns and sequences · level 4, lesson 6 of 6*

## A question to start

What is $1 + 3 + 5 + 7 + \cdots + 99$, all the odd numbers up to 99?

That is fifty numbers to add. With a calculator it takes a minute and one slip spoils it. In level 3 you met the
pattern that sums of odd numbers starting from 1 are square numbers, and you saw it for small squares. But level 3
also warned you that patterns can trick you. In this lesson you **prove** the pattern for every size at once, three
different ways, and then the answer, 2500, takes five seconds.

## The idea

### The $n$th odd number

The odd numbers are 1, 3, 5, 7, 9, ... They go up by 2 each time, so by lesson 2 their position rule has $2n$ in it.
The zero term is $1 - 2 = -1$, so

$$\text{the } n\text{th odd number} = 2n - 1$$

There is a simpler way to see it: the $n$th **even** number is $2n$ (2, 4, 6, ...), and each odd number is one
less than the even number in the same position. Check: the 5th odd number is $2 \times 5 - 1 = 9$. ✓ Running it
backwards: 99 is the $n$th odd number when $2n - 1 = 99$, so $n = 50$. There are 50 odd numbers from 1 to 99.

### The claim

Adding the first $n$ odd numbers gives $n$ squared:

$$1 + 3 + 5 + \cdots + (2n - 1) = n^2$$

The "$\cdots$" means "and all the odd numbers in between". In level 3 we checked this for small $n$: $1 = 1$,
$1 + 3 = 4$, $1 + 3 + 5 = 9$, $1 + 3 + 5 + 7 = 16$. Checking is not proving. Here are three proofs, each of which
works for **every** $n$.

### Proof 1: L-shapes (a picture proof)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 155" role="img" aria-label="A 5 by 5 square of small squares split into nested L-shapes coloured in turn. The L-shapes hold 1, 3, 5, 7 and 9 squares">
  <rect x="30" y="119" width="26" height="26" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="93" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="67" width="26" height="26" fill="#7ccf9a" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="41" width="26" height="26" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="15" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="56" y="119" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="56" y="93" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="56" y="67" width="26" height="26" fill="#7ccf9a" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="56" y="41" width="26" height="26" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="56" y="15" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="119" width="26" height="26" fill="#7ccf9a" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="93" width="26" height="26" fill="#7ccf9a" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="67" width="26" height="26" fill="#7ccf9a" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="41" width="26" height="26" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="15" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="108" y="119" width="26" height="26" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="108" y="93" width="26" height="26" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="108" y="67" width="26" height="26" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="108" y="41" width="26" height="26" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="108" y="15" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="134" y="119" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="134" y="93" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="134" y="67" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="134" y="41" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <rect x="134" y="15" width="26" height="26" fill="#9cc9ea" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
  <text x="43" y="137" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="69" y="111" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="95" y="85" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="121" y="59" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <text x="147" y="33" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <text x="195" y="40" font-size="13" text-anchor="start" fill="currentColor">1 + 3 + 5 + 7 + 9</text>
  <text x="195" y="65" font-size="12" text-anchor="start" fill="currentColor">each L wraps the square before</text>
  <text x="195" y="90" font-size="12" text-anchor="start" fill="currentColor">5 L-shapes make a 5 by 5 square</text>
  <text x="195" y="115" font-size="13" text-anchor="start" fill="currentColor">so the sum is 5 × 5 = 25</text>
</svg>
</div>

Build an $n$ by $n$ square out of L-shaped layers, starting from the corner. The L that turns a $(k - 1)$ by
$(k - 1)$ square into a $k$ by $k$ square has a bottom row of $k$ squares and a side column of $k - 1$ more (the
corner square is already in the row). That is $k + (k - 1) = 2k - 1$ squares: **the $k$th odd number**.

So the 1st L has 1 square, the 2nd has 3, the 3rd has 5, ..., and the $n$th has $2n - 1$. Together the $n$ L's fill
the $n$ by $n$ square exactly, with no gaps and no overlaps. Therefore the first $n$ odd numbers add to $n^2$.

Why is this a proof and not just a check? Because nothing in the argument depended on $n$ being 5, or 10. The
description of the $k$th L works for any $k$, and the stacking works for any $n$. The picture shows one size, but the
**reasoning** is about all sizes.

### Proof 2: pairing the ends

Write the sum and pair the first number with the last, the second with the second-last, and so on:

- $1 + (2n - 1) = 2n$
- $3 + (2n - 3) = 2n$
- $5 + (2n - 5) = 2n$

Every pair adds to $2n$: as you move in from the ends, one number goes up by 2 and the other goes down by 2, so the
pair total stays the same. A clean way to count the pairs is to write the sum twice, once forwards and once
backwards, and add them term by term:

$$
\begin{aligned}
S &= 1 + 3 + \cdots + (2n - 3) + (2n - 1)\\
S &= (2n - 1) + (2n - 3) + \cdots + 3 + 1\\
2S &= 2n + 2n + \cdots + 2n + 2n
\end{aligned}
$$

There are $n$ columns, each adding to $2n$, so $2S = n \times 2n = 2n^2$ and $S = n^2$. This works whether $n$ is
even or odd: writing the sum twice avoids any worry about a middle number with no partner.

### Proof 3: a pyramid, made level

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 130" role="img" aria-label="A pyramid of squares with rows of 1, 3, 5 and 7, holding 16 squares, and a note pairing 1 with 7 and 3 with 5">
  <rect x="90" y="20" width="20" height="20" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="70" y="40" width="20" height="20" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="90" y="40" width="20" height="20" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="110" y="40" width="20" height="20" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="50" y="60" width="20" height="20" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="70" y="60" width="20" height="20" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="90" y="60" width="20" height="20" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="110" y="60" width="20" height="20" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="130" y="60" width="20" height="20" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="80" width="20" height="20" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="50" y="80" width="20" height="20" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="70" y="80" width="20" height="20" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="90" y="80" width="20" height="20" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="110" y="80" width="20" height="20" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="130" y="80" width="20" height="20" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="80" width="20" height="20" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="100" y="120" font-size="12" text-anchor="middle" fill="currentColor">rows 1, 3, 5, 7: 16 squares</text>
  <text x="220" y="45" font-size="12" text-anchor="start" fill="currentColor">pair from the ends:</text>
  <text x="220" y="70" font-size="12" text-anchor="start" fill="currentColor">1 + 7 = 8 and 3 + 5 = 8</text>
  <text x="220" y="95" font-size="12" text-anchor="start" fill="currentColor">2 pairs of 8 = 16 = 4 × 4</text>
</svg>
</div>

Stack rows of 1, 3, 5 and 7 squares, centred, to make a pyramid. Pair the top row with the bottom row
($1 + 7 = 8$) and the second row with the third ($3 + 5 = 8$). Each pair makes a row of 8, which is $2n$, and there are
$n \div 2$ pairs. So the 16 squares rearrange into 2 rows of 8, and $2 \times 8 = 16 = 4 \times 4$. (This is proof 2
again, but seen as a shape. When $n$ is odd, the middle row has $n$ squares on its own, half of $2n$, and the count
still works.)

### Using the result

**Sums that do not start at 1.** To add a run of odd numbers in the middle, like $11 + 13 + \cdots + 19$, take the
sum from 1 up to 19, and remove the sum from 1 up to 9:

- 19 is the 10th odd number, so $1 + \cdots + 19 = 10^2 = 100$.
- 9 is the 5th odd number, so $1 + \cdots + 9 = 5^2 = 25$.
- So $11 + 13 + 15 + 17 + 19 = 100 - 25 = 75$.

**Sums of even numbers.** Each even number is 1 more than an odd number: $2 = 1 + 1$, $4 = 3 + 1$, and so on. So the
first $n$ even numbers add to the first $n$ odd numbers plus $n$ extra ones:

$$2 + 4 + \cdots + 2n = n^2 + n = n(n + 1)$$

That is twice the $n$th triangular number from level 3, which makes sense: $2 + 4 + \cdots + 2n$ is
$2 \times (1 + 2 + \cdots + n)$.

## Worked examples

**1. The opening question.** 99 is the 50th odd number, so $1 + 3 + \cdots + 99 = 50^2 = 2500$.

**2. The first 12 odd numbers.** $12^2 = 144$. (The last one is $2 \times 12 - 1 = 23$.)

**3. $21 + 23 + \cdots + 39$.**

- 39 is the 20th odd number: $1 + \cdots + 39 = 400$.
- 19 is the 10th odd number: $1 + \cdots + 19 = 100$.
- So the sum is $400 - 100 = 300$. (There are 10 numbers, and their average is $(21 + 39) \div 2 = 30$, so
  $10 \times 30 = 300$ ✓.)

**4. The even numbers up to 100.** $2 + 4 + \cdots + 100$ has 50 terms: $50 \times 51 = 2550$.

**5. Running it backwards.** You add odd numbers, starting at 1, until the total is exactly 400. How many did you
add, and what was the last one? $n^2 = 400$ gives $n = 20$, and the last is $2 \times 20 - 1 = 39$.

## Try it

1. Work out $1 + 3 + 5 + \cdots + 19$.
2. What is the 15th odd number?
3. Work out the sum of the first 30 odd numbers.
4. Work out $1 + 3 + 5 + \cdots + 79$.
5. Work out $11 + 13 + \cdots + 29$.
6. Work out $2 + 4 + 6 + \cdots + 40$.
7. Write the odd numbers in rows: 1 | 3 + 5 | 7 + 9 + 11 | 13 + 15 + 17 + 19 | ... Add up each row. What do you
   notice? Predict the next row's total and check it.
8. Use the L-shape picture to explain why $n^2 - (n - 1)^2 = 2n - 1$. Then use it to find $50^2 - 49^2$ without
   squaring.

??? note "Answers"
    1. 19 is the 10th odd number ($2 \times 10 - 1 = 19$), so the sum is $10^2 = 100$.
    2. $2 \times 15 - 1 = 29$.
    3. $30^2 = 900$.
    4. $2n - 1 = 79$ gives $n = 40$: $40^2 = 1600$.
    5. 29 is the 15th odd number and 9 is the 5th: $15^2 - 5^2 = 225 - 25 = 200$.
    6. 20 terms: $20 \times 21 = 420$.
    7. The row totals are 1, 8, 27, 64: these are $1 \times 1 \times 1$, $2 \times 2 \times 2$, $3 \times 3 \times 3$,
       $4 \times 4 \times 4$ (the **cube** numbers). The next row is $21 + 23 + 25 + 27 + 29 = 125 = 5 \times 5 \times 5$.
       ✓ (Proving this for every row is a good challenge; level 7 of this topic uses it.)
    8. An $n$ by $n$ square is an $(n - 1)$ by $(n - 1)$ square plus one more L-shape, the $n$th, which has
       $2n - 1$ squares. So the difference between the two squares is $2n - 1$. For $n = 50$:
       $50^2 - 49^2 = 99$. (Check: $2500 - 2401 = 99$ ✓.)

## Common mistake

**Squaring the last number instead of the count.** $1 + 3 + \cdots + 19$ is **not** $19^2$. The rule squares the
**number of terms**, $n$, and 19 is only the 10th odd number. First find $n$ from $2n - 1 = \text{last}$, then square
$n$.

**Calling a few checks a proof.** "It works for 1, 2, 3, 4 and 5" is evidence, not proof. The L-shape argument is a
proof because it explains why the $k$th layer always has $2k - 1$ squares, for any $k$.

## Where it leads

- Back: [Comparing two patterns](05-comparing-two-patterns.md) · Next level: [Level 5: arithmetic sequences](../level-5/index.md)
- [Level 4 page](index.md) · [Patterns topic page](../index.md)
- Back in level 3: [Square numbers](../level-3/02-square-numbers.md) and
  [Patterns that trick you](../level-3/06-patterns-that-trick.md).
- Proof 2 (write it twice and add) is Gauss's trick, used for every list with a constant difference in level 5.
  In level 8 the same fact is proved a fourth way, by induction.
- Squares and cubes as numbers are in [Numbers](../../numbers/index.md); the shapes are in
  [Geometry](../../geometry/index.md).
