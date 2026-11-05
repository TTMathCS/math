---
title: "Factors and subsets"
---

# Factors and subsets

*Counting and combinations · level 3, lesson 6 of 6*

## A question to start

A pizza shop offers 5 toppings: cheese, ham, mushroom, olive and pepper. You may have **any** mix of toppings on your
pizza: none at all (plain), just one, any two, and so on, up to all five. How many different pizzas can you order?

Most people start listing, and get lost somewhere around the two-topping pizzas. The answer is **32**, and it comes
from one quick thought: *for each topping, it is either on the pizza or not*.

And here is a strange twist. The same thought tells you how many **factors** a number has, without dividing at all.
The number 30 has 8 factors, and the number 72 has 12, and by the end of this lesson you will see why in a few
seconds.

## The idea

### Sets and subsets

A **set** is a collection of different things, like {cheese, ham, mushroom}. The curly brackets just mean "the group
made of these". A **subset** is any group you can make by picking some of the things in a set: none of them, some of
them, or all of them.

The subsets of {A, B, C} are:

- with no things: { } (this is called the **empty set**, and it counts: it is the plain pizza);
- with one thing: {A}, {B}, {C};
- with two things: {A, B}, {A, C}, {B, C};
- with three things: {A, B, C}.

That is 1 + 3 + 3 + 1 = **8** subsets. Order does not matter in a set: {A, B} and {B, A} are the same subset.

### In or out: a choice for each thing

Listing by size works, but it gets hard with more things. Here is a better way. To build a subset, go through the things
one at a time and make a decision for each: **in** or **out**. That is 2 choices for A, then 2 for B, then 2 for C. The
tree shows every way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 410 200" role="img" aria-label="A tree. The first split is A in or A out, then each branch splits into B in or B out, then C in or C out. The 8 ends are the subsets A B C, A B, A C, A, B C, B, C and the empty set">
  <line x1="30" y1="100.0" x2="120" y2="55.0" stroke="#eea66f" stroke-width="2.5"/>
  <text x="75.0" y="73.5" font-size="10" text-anchor="middle" fill="currentColor">A in</text>
  <line x1="120" y1="55.0" x2="210" y2="32.5" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="165.0" y="39.75" font-size="10" text-anchor="middle" fill="currentColor">B in</text>
  <line x1="210" y1="32.5" x2="300" y2="21.25" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="255.0" y="22.875" font-size="10" text-anchor="middle" fill="currentColor">C in</text>
  <text x="310" y="25.25" font-size="12" fill="currentColor">{A, B, C}</text>
  <line x1="210" y1="32.5" x2="300" y2="43.75" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="255.0" y="34.125" font-size="10" text-anchor="middle" fill="currentColor">C out</text>
  <text x="310" y="47.75" font-size="12" fill="currentColor">{A, B}</text>
  <circle cx="210" cy="32.5" r="3" fill="currentColor"/>
  <line x1="120" y1="55.0" x2="210" y2="77.5" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="165.0" y="62.25" font-size="10" text-anchor="middle" fill="currentColor">B out</text>
  <line x1="210" y1="77.5" x2="300" y2="66.25" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="255.0" y="67.875" font-size="10" text-anchor="middle" fill="currentColor">C in</text>
  <text x="310" y="70.25" font-size="12" fill="currentColor">{A, C}</text>
  <line x1="210" y1="77.5" x2="300" y2="88.75" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="255.0" y="79.125" font-size="10" text-anchor="middle" fill="currentColor">C out</text>
  <text x="310" y="92.75" font-size="12" fill="currentColor">{A}</text>
  <circle cx="210" cy="77.5" r="3" fill="currentColor"/>
  <circle cx="120" cy="55.0" r="3" fill="currentColor"/>
  <line x1="30" y1="100.0" x2="120" y2="145.0" stroke="#eea66f" stroke-width="2.5"/>
  <text x="75.0" y="118.5" font-size="10" text-anchor="middle" fill="currentColor">A out</text>
  <line x1="120" y1="145.0" x2="210" y2="122.5" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="165.0" y="129.75" font-size="10" text-anchor="middle" fill="currentColor">B in</text>
  <line x1="210" y1="122.5" x2="300" y2="111.25" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="255.0" y="112.875" font-size="10" text-anchor="middle" fill="currentColor">C in</text>
  <text x="310" y="115.25" font-size="12" fill="currentColor">{B, C}</text>
  <line x1="210" y1="122.5" x2="300" y2="133.75" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="255.0" y="124.125" font-size="10" text-anchor="middle" fill="currentColor">C out</text>
  <text x="310" y="137.75" font-size="12" fill="currentColor">{B}</text>
  <circle cx="210" cy="122.5" r="3" fill="currentColor"/>
  <line x1="120" y1="145.0" x2="210" y2="167.5" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="165.0" y="152.25" font-size="10" text-anchor="middle" fill="currentColor">B out</text>
  <line x1="210" y1="167.5" x2="300" y2="156.25" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="255.0" y="157.875" font-size="10" text-anchor="middle" fill="currentColor">C in</text>
  <text x="310" y="160.25" font-size="12" fill="currentColor">{C}</text>
  <line x1="210" y1="167.5" x2="300" y2="178.75" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="255.0" y="169.125" font-size="10" text-anchor="middle" fill="currentColor">C out</text>
  <text x="310" y="182.75" font-size="12" fill="currentColor">{ } (empty)</text>
  <circle cx="210" cy="167.5" r="3" fill="currentColor"/>
  <circle cx="120" cy="145.0" r="3" fill="currentColor"/>
  <circle cx="30" cy="100.0" r="3" fill="currentColor"/>
</svg>
</div>

Each path through the tree is one subset, and each subset is one path. So the number of subsets is 2 × 2 × 2 = **8**.
Every thing doubles the count.

For the pizza: 5 toppings, each in or out: 2 × 2 × 2 × 2 × 2 = **32** pizzas.

### Powers of 2

Multiplying 2 by itself again and again happens so often that there is a short way to write it. We write $2^5$ (say
"2 to the power 5") for 2 × 2 × 2 × 2 × 2. The small raised number says **how many 2s** are multiplied.

| Things in the set | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Subsets | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 1024 |

A set with $n$ things has $2^n$ subsets. Notice that a set with **0** things still has **1** subset: the empty set
itself.

### Why one more thing doubles the count

Say you know all 8 subsets of {A, B, C}, and now a new thing D arrives. Every subset of {A, B, C, D} either leaves D
out (and then it is one of the 8 old subsets) or puts D in (and then it is one of the 8 old subsets with D added). So
there are 8 + 8 = 16. Every new thing **doubles** the number of subsets. That is why the table goes 1, 2, 4, 8, 16, ...

### Sorting subsets by size

If you sort the subsets by how many things they have, a pattern appears:

| Things in the set | Size 0 | Size 1 | Size 2 | Size 3 | Size 4 | Total |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | 1 | 2 | 1 | | | 4 |
| 3 | 1 | 3 | 3 | 1 | | 8 |
| 4 | 1 | 4 | 6 | 4 | 1 | 16 |

The middle numbers for 4 things, 1, 4, 6, 4, 1, are a row of **Pascal's triangle**, which you will meet in level 5.
The 6 is the handshake number again: the number of ways to pick 2 things from 4.

### Factors: the same idea in disguise

A **factor** of a number divides it exactly, with no remainder. The factors of 30 are 1, 2, 3, 5, 6, 10, 15 and 30:
there are 8.

Why 8? Write 30 as a product of **prime numbers** (numbers with exactly two factors, 1 and themselves, like 2, 3, 5, 7,
11): $30 = 2 \times 3 \times 5$. Every factor of 30 is made by multiplying **some** of these primes, a subset of
{2, 3, 5}:

| Subset of primes | { } | {2} | {3} | {5} | {2, 3} | {2, 5} | {3, 5} | {2, 3, 5} |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Factor | 1 | 2 | 3 | 5 | 6 | 10 | 15 | 30 |

(The empty subset gives 1: multiplying no numbers together leaves you with 1.) Three primes, each in or out:
2 × 2 × 2 = 8 factors.

### When a prime appears more than once

What about $12 = 2 \times 2 \times 3$? Now the choice for the prime 2 is not just "in or out". A factor of 12 can
contain **no** 2s, **one** 2, or **two** 2s: **3** choices. It can contain no 3 or one 3: **2** choices.

3 × 2 = **6** factors. Check: 1, 2, 3, 4, 6, 12. ✓

The rule: write the number as primes, count how many times each prime appears, **add 1 to each count**, and multiply.
The "add 1" is for the choice "none of this prime".

For $72 = 2 \times 2 \times 2 \times 3 \times 3$: the 2s give 0, 1, 2 or 3 of them (4 choices), the 3s give 0, 1 or 2
(3 choices). 4 × 3 = **12** factors: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.

<figure class="play" data-play="factree"><span class="ai-tag">AI-created</span><figcaption><b>Factors from primes.</b> Each factor picks how many of each prime to use.</figcaption></figure>

## Worked examples

**1. Subsets of four things.** A set {A, B, C, D} has 2 × 2 × 2 × 2 = **16** subsets. Sorted by size:

- size 0: { } (1)
- size 1: {A}, {B}, {C}, {D} (4)
- size 2: {A, B}, {A, C}, {A, D}, {B, C}, {B, D}, {C, D} (6)
- size 3: {B, C, D}, {A, C, D}, {A, B, D}, {A, B, C} (4): each one is "everything but one thing"
- size 4: {A, B, C, D} (1)

1 + 4 + 6 + 4 + 1 = 16. ✓

**2. Light switches.** A room has 6 light switches, each up or down. How many patterns can the switches show? Each
switch is like a thing that is "in" (up) or "out" (down): $2^6$ = 2 × 2 × 2 × 2 × 2 × 2 = **64** patterns.

**3. Factors of 60.** $60 = 2 \times 2 \times 3 \times 5$.

1. The prime 2 appears twice: 3 choices (none, one, two).
2. The prime 3 appears once: 2 choices. The prime 5 appears once: 2 choices.
3. 3 × 2 × 2 = **12** factors: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.

**4. A sandwich with at least one filling.** A sandwich bar has 4 fillings. How many sandwiches have at least one
filling? All subsets: 16. Take away the empty one (just bread): 16 − 1 = **15**. That is the complement trick from
lesson 3.

## Try it

1. List all the subsets of {X, Y}. How many are there?
2. How many subsets does a set of 7 things have?
3. The pizza shop adds a 6th topping. How many pizzas now? How many have at least one topping?
4. Find the number of factors of $100 = 2 \times 2 \times 5 \times 5$, then list them.
5. How many factors does $210 = 2 \times 3 \times 5 \times 7$ have?
6. How many factors does 36 have? Is the number odd or even? Can you see why a square number always has an odd number
   of factors? (Hint: factors come in pairs that multiply to 36, like 4 and 9.)
7. Find the smallest number that has exactly 6 factors.
8. A number has exactly **3** factors. What can you say about it? Give two examples.

??? note "Answers"
    1. { }, {X}, {Y}, {X, Y}: 4 subsets, which is 2 × 2.
    2. $2^7$ = 128.
    3. $2^6$ = 64 pizzas; 63 with at least one topping.
    4. Two 2s (3 choices) and two 5s (3 choices): 3 × 3 = 9 factors: 1, 2, 4, 5, 10, 20, 25, 50, 100.
    5. Four different primes, each in or out: 2 × 2 × 2 × 2 = 16 factors.
    6. $36 = 2 \times 2 \times 3 \times 3$: 3 × 3 = 9 factors (1, 2, 3, 4, 6, 9, 12, 18, 36). 9 is odd. Factors pair
       up: 1 with 36, 2 with 18, 3 with 12, 4 with 9. But 6 pairs with **itself** (6 × 6 = 36), so it has no partner.
       Every square number has one factor like that, so the count is odd.
    7. 12 (factors 1, 2, 3, 4, 6, 12). Check smaller numbers: none of 1 to 11 has 6 factors.
    8. With the rule, the "add 1 and multiply" answer must be 3, and 3 can only be made as 3 itself, so the number is
       one prime appearing twice: a prime times itself. Examples: 4 (1, 2, 4), 9 (1, 3, 9), 25, 49.

## Common mistake

**Forgetting the empty set (or the whole set).** "The subsets of {A, B, C} are the groups of 1 and 2 things" misses
{ } and {A, B, C}. The in-or-out rule counts them both: "everything out" is the empty set, and "everything in" is the
whole set. If a question says "at least one", subtract the empty set at the end.

**Counting factors with "in or out" when a prime repeats.** For 12 = 2 × 2 × 3, treating the two 2s as different
things gives 2 × 2 × 2 = 8, but 12 has only 6 factors. The two 2s are the same, so "one 2" is a single choice, not two.
Count how many of each prime, and use (count + 1) choices.

## Where it leads

- Back: [Counting by symmetry](05-counting-by-symmetry.md) · Next level: [Level 4: arranging, permutations](../level-4/index.md)
- [Level 3 page](index.md) · [Counting topic page](../index.md)
- Prime numbers and writing a number as a product of primes belong to [Number theory](../../number-theory/index.md).
- The row 1, 4, 6, 4, 1 is part of Pascal's triangle in [Level 5](../level-5/index.md).
- On a computer, a set of 30 things already has more than a billion subsets; programs that try every subset get slow
  very fast. Sets in programming are on the U of T shelf:
  [CSC108 Unit 6 (dictionaries and sets)](../../../uoft/CSC108H1/unit06.md).
