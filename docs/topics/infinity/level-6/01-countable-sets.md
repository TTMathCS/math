---
title: "Countable sets"
---

# Countable sets

*Infinity and strange math · level 6, lesson 1 of 6*

## A question to start

In 1638, in his last book, *Two New Sciences*, Galileo Galilei wrote down a puzzle about square numbers.

Most whole numbers are **not** squares. Among 1 to 100 only ten are squares (1, 4, 9, ..., 100); among 1 to 10,000
only a hundred are. The further you go, the rarer the squares become. So surely there are **fewer** squares than whole
numbers?

But every whole number has its own square: 1 has 1, 2 has 4, 3 has 9, 4 has 16, and so on forever. Every square is
used exactly once. So surely there are **just as many** squares as whole numbers?

Both arguments look watertight. Galileo decided that words like "more", "fewer" and "as many" simply do not work for
infinite collections. About 240 years later Georg Cantor found a way to make them work, and this level follows his
idea.

## The idea

### Comparing without counting

How can you tell that a classroom has exactly as many chairs as children, without counting either? Ask everyone to
sit down. If every child has a chair and no chair is empty, the two groups are the same size. You paired them up.

This kind of pairing has a name. A **one-to-one correspondence** between two sets is a way of pairing their members so
that:

- every member of the first set has exactly one partner in the second set,
- every member of the second set has exactly one partner in the first set.

Nobody is left out, and nobody has two partners. (A **set** is just a collection of things, called its **members** or
**elements**. You met sets in [Logic](../../logic/level-5/01-sets.md).)

For finite sets, a one-to-one correspondence exists exactly when the two sets have the same number of members. That
is really what counting **is**: pairing the things with the numbers 1, 2, 3, ..., up to some number.

### Cantor's idea: use pairing for infinite sets too

Cantor's step, in the 1870s, was to make pairing the **definition** of "the same size" for every set, finite or
infinite:

> Two sets have the **same size** (mathematicians say the same **cardinality**) when there is a one-to-one
> correspondence between them.

We do not need to know "how many" to compare. We only need a pairing.

### Even numbers: the same size as all the numbers

Call the counting numbers $\mathbb{N} = \{1, 2, 3, 4, \ldots\}$ (the letter is a doubled N, for "natural numbers").
Pair each counting number $n$ with the even number $2n$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 125" role="img" aria-label="The counting numbers 1 to 6 on a top row, each with an arrow down to its double on a bottom row: 2, 4, 6, 8, 10, 12">
  <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs>
  <text x="40.0" y="30.0" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <text x="40.0" y="110.0" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <line x1="40.0" y1="38.0" x2="40.0" y2="92.0" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="110.0" y="30.0" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <text x="110.0" y="110.0" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <line x1="110.0" y1="38.0" x2="110.0" y2="92.0" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="180.0" y="30.0" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="180.0" y="110.0" font-size="15" text-anchor="middle" fill="currentColor">6</text>
  <line x1="180.0" y1="38.0" x2="180.0" y2="92.0" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="250.0" y="30.0" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <text x="250.0" y="110.0" font-size="15" text-anchor="middle" fill="currentColor">8</text>
  <line x1="250.0" y1="38.0" x2="250.0" y2="92.0" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="320.0" y="30.0" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <text x="320.0" y="110.0" font-size="15" text-anchor="middle" fill="currentColor">10</text>
  <line x1="320.0" y1="38.0" x2="320.0" y2="92.0" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="390.0" y="30.0" font-size="15" text-anchor="middle" fill="currentColor">6</text>
  <text x="390.0" y="110.0" font-size="15" text-anchor="middle" fill="currentColor">12</text>
  <line x1="390.0" y1="38.0" x2="390.0" y2="92.0" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="450.0" y="30.0" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <text x="450.0" y="110.0" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <text x="10.0" y="30.0" font-size="13" text-anchor="start" fill="currentColor">n</text>
  <text x="10.0" y="110.0" font-size="13" text-anchor="start" fill="currentColor">2n</text>
</svg>
</div>

Check both rules.

- Every counting number $n$ has exactly one partner, $2n$.
- Every even number has exactly one partner: the even number $2k$ is paired with $k$, and with nothing else.

So the even numbers and the counting numbers are **the same size**, even though the even numbers are only part of
the counting numbers, and the odd numbers are left out entirely. The rule "the part is smaller than the whole", true
for every finite set, fails for infinite ones. That is not a contradiction; it is a discovery about what infinite sets
are like. In fact the mathematician Richard Dedekind turned it into a definition in 1888: a set is **infinite**
exactly when it can be paired one-to-one with a part of itself.

### Galileo's squares, answered

Pair $n$ with $n^2$. Every counting number has one square; every square $k^2$ comes from exactly one counting number,
$k$. So by Cantor's definition **the squares and the counting numbers are the same size**.

Galileo's first argument (squares get rarer) is about how **spread out** the squares are, which is a real and
interesting property (it is called **density**). But it is not about size in Cantor's sense. Both arguments were
correct about different things.

### Countable sets

The pairing with $\mathbb{N}$ is so important that it gets its own name.

> A set is **countable** if its members can be put in a list, first, second, third, and so on, so that **every**
> member appears at some position in the list.

For an infinite set, such a list is exactly a one-to-one correspondence with $\mathbb{N}$: the member in position 1 is
paired with 1, the member in position 2 with 2, and so on. (Finite sets are countable too; their list just stops.)
Infinite countable sets are called **countably infinite**, and they all have the same size as $\mathbb{N}$. Cantor
named that size $\aleph_0$, read "aleph-null"; $\aleph$ is the first letter of the Hebrew alphabet.

The important words are **every** and **at some position**. Each member must be reached after finitely many steps:
at position 7, or 1000, or a trillion, but at some actual position. "After all the others" is not a position.

### The primes: a list without a formula

The prime numbers are $2, 3, 5, 7, 11, 13, \ldots$ There is no simple formula for the $n$th prime. But there are
infinitely many of them (Euclid's proof is in [Number theory](../../number-theory/level-4/05-no-biggest-prime.md)),
and we can list them in increasing order. That list reaches every prime: the prime 29 is in position 10, the prime 97
in position 25. So the primes are countable. A list does not need a formula; it needs a rule that reaches everyone.

### Every infinite set of counting numbers is countable

The primes are one example of a general fact.

> Any infinite collection of counting numbers is countable: list it in increasing order.

Why does every member get a finite position? Take any member $m$. The members listed before $m$ are all smaller than
$m$, so there are fewer than $m$ of them. So $m$ is in position $m$ or earlier. A finite position, every time. (For the
squares, 49 is in position 7, which is indeed at most 49.)

So the squares, the cubes, the primes, the multiples of 10, the numbers ending in 7, the powers of 2: all of them are
countably infinite, all exactly the same size as $\mathbb{N}$.

## Worked examples

**1. The odd numbers.** Give a listing of the odd numbers, a rule for the $n$th one, and the position of 99.

1. List: $1, 3, 5, 7, \ldots$ The $n$th odd number is $2n - 1$ (check: $n = 1$ gives 1, $n = 4$ gives 7).
2. Position of 99: solve $2n - 1 = 99$, so $n = 50$. 99 is **50th**.
3. Every odd number $m$ has the position $\frac{m + 1}{2}$, a whole number. So every odd number is reached, and the
   odd numbers are countable.

**2. Numbers ending in 7.** List $7, 17, 27, 37, \ldots$ Find the rule and the position of 2027.

1. Each term is 10 more than the one before, starting at 7. The $n$th term is $7 + 10(n - 1) = 10n - 3$
   (arithmetic sequences: [Patterns](../../patterns/level-5/01-arithmetic-sequences.md)).
2. $10n - 3 = 2027$ gives $10n = 2030$, $n = 203$. So 2027 is **203rd**.

**3. Powers of 2.** List $2, 4, 8, 16, \ldots$ What is the position of 1024?

The $n$th term is $2^n$, and $1024 = 2^{10}$, so it is **10th**. These numbers get far apart very fast (the 30th is
over a billion), but each one still has a finite position.

**4. Primes.** At which position is 29 in the list of primes?

Count them: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. It is **10th**.

**5. A list that fails.** Someone lists the counting numbers as "all the even numbers first, then all the odd
numbers". Is that a listing in our sense?

No. Where is 1? It comes after every even number, and there is no finite position after all of them. The odd numbers
are never reached. The **set** is countable (the ordinary list $1, 2, 3, \ldots$ works), but this particular
attempt is not a list.

## Try it

1. Pair the counting numbers with the multiples of 5. What is the rule? At which position is 135?
2. Pair the counting numbers $\{1, 2, 3, \ldots\}$ with $\{11, 12, 13, \ldots\}$. What does this have to do with
   Hilbert's hotel?
3. List the cubes $1, 8, 27, \ldots$ At which position is 1000? Is 1,000,000 in the list, and where?
4. Is the set of counting numbers greater than one million countable? Give a listing.
5. At which position is 97 in the list of primes?
6. Is the set $\{2, 4, 6\}$ countable? Is it countably infinite?
7. Show that the numbers made only of the digit 1 (1, 11, 111, 1111, ...) form a countable set, and find the
   position of the number with 20 ones.
8. In the increasing list of square numbers, the square 2500 is at some position $p$. Find $p$, and check that
   $p \le 2500$, as the general argument promised.

??? note "Answers"
    1. $n \leftrightarrow 5n$. $135 = 5 \times 27$, so it is at position **27**.
    2. $n \leftrightarrow n + 10$. Every number from 11 on is reached ($m$ comes from $m - 10$). In Hilbert's hotel,
       this is the move "everyone in room $n$ moves to room $n + 10$", which frees rooms 1 to 10 for ten new guests.
    3. The $n$th cube is $n^3$, and $1000 = 10^3$, so it is **10th**. $1000000 = 100^3$, so it is in the list, at
       position **100**.
    4. Yes: $1000001, 1000002, 1000003, \ldots$; the $n$th term is $1000000 + n$, and $m$ is at position
       $m - 1000000$.
    5. The primes up to 97 are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
       83, 89, 97: there are 25, so 97 is **25th**.
    6. It is countable (list it: 2, 4, 6, and stop), but it is **finite**, so it is not countably infinite.
    7. The $n$th term is the number with $n$ ones, so list them by how many ones they have: every such number is at
       the position equal to its number of digits. The one with 20 ones is **20th**.
    8. $2500 = 50^2$, so $p = 50$, and $50 \le 2500$. ✓ (The argument only promised "at most"; usually it is far
       less.)

## Common mistake

**"The even numbers are half of all numbers, so there are fewer of them."** For finite stretches that is true: from
1 to 100 there are 50 evens. But "same size" for infinite sets means "can be paired", and $n \leftrightarrow 2n$ pairs
them perfectly. Halfway-ness is about spacing (density), not size.

**Thinking a listing must reach everything "eventually" in some loose sense.** "First all the evens, then all the
odds" never reaches the odds. Test a listing by picking any member and asking: at which **number** position is it?

## Where it leads

- Next: [The integers are countable](02-integers-countable.md), where negative numbers join the list.
- [Level 6 page](index.md) · [Infinity topic page](../index.md) · Before this: [Level 5: limits](../level-5/index.md),
  and Hilbert's hotel in [level 3](../level-3/index.md).
- Pairing as a way to count things: [Counting by a bijection](../../counting/level-6/05-counting-bijection.md) in Counting.
  Sets and their language: [Sets](../../logic/level-5/01-sets.md) in Logic.
- On the U of T shelf, one-to-one correspondences (bijections) and sets:
  [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md) and
  [MAT158 Unit 1: logic, sets and proof](../../../uoft/MAT158H1/unit01.md).
