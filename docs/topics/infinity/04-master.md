---
title: "Master: Countable infinity"
---

# Master: Countable infinity, listing the infinite

*Infinity and strange math · step 4 of 5*

## A question to start

Back to Hilbert's hotel, full as always. This time **infinitely many buses** arrive: bus 1, bus 2, bus 3, ... and
each bus has infinitely many seats, numbered 1, 2, 3, ..., every one taken. Can the manager find a room for every
single passenger?

In the Explore step, one infinite bus was easy: move the old guests to the even rooms and put the passengers in the
odd rooms. But now there are infinitely many infinite buses. It seems certain that this time there are too many
people. Surprisingly, there are not.

## The idea

### Countable sets

A set is **countable** if its elements can be put in a list: a first, a second, a third, and so on, where every
element appears somewhere in the list (at some finite position). Putting a set in a list is the same as pairing it
with the counting numbers $1, 2, 3, \ldots$ (the set $\mathbb{N}$), which is the hotel's room numbering. So:

> A set is countable exactly when its members could all be given rooms in Hilbert's hotel, one per room.

Finite sets are countable. An infinite countable set is called **countably infinite**, and all countably infinite
sets have the same size as $\mathbb{N}$. The German mathematician Georg Cantor, who began the study of the sizes of
infinite sets in the 1870s, gave this size a name: $\aleph_0$, said "aleph-null" ($\aleph$ is the first letter of
the Hebrew alphabet).

You have already seen several countably infinite sets:

- The even numbers: list them 2, 4, 6, 8, ...
- The integers $\mathbb{Z}$, negatives too: list them $0, 1, -1, 2, -2, 3, -3, \ldots$
- The square numbers, the prime numbers, the multiples of 10: each is an infinite part of $\mathbb{N}$, and
  listing it in increasing order works.

The important word in the definition is **every**. A list like $0, 1, 2, 3, \ldots, -1, -2, -3, \ldots$ does not
work for the integers, because the negative numbers would never be reached at any finite position.

### Pairs of numbers: walk the diagonals

Think of every passenger as a pair (bus $b$, seat $s$). Lay all the pairs out in an infinite grid, with bus numbers
down the side and seat numbers along the top.

| | seat 1 | seat 2 | seat 3 | seat 4 | ... |
| --- | --- | --- | --- | --- | --- |
| **bus 1** | (1, 1) | (1, 2) | (1, 3) | (1, 4) | ... |
| **bus 2** | (2, 1) | (2, 2) | (2, 3) | ... | |
| **bus 3** | (3, 1) | (3, 2) | ... | | |
| **bus 4** | (4, 1) | ... | | | |

Going along the first row would take forever, and we would never reach bus 2. Instead, walk along the **short
diagonals**, where $b + s$ is the same:

- $b + s = 2$: (1, 1)
- $b + s = 3$: (1, 2), (2, 1)
- $b + s = 4$: (1, 3), (2, 2), (3, 1)
- $b + s = 5$: (1, 4), (2, 3), (3, 2), (4, 1)

Each diagonal is finite, so we finish it and move to the next. Every pair is on exactly one diagonal, so every pair
gets a place in the list:

$$(1,1),\ (1,2),\ (2,1),\ (1,3),\ (2,2),\ (3,1),\ (1,4),\ (2,3),\ \ldots$$

So the set of all pairs of counting numbers is countable. **Infinitely many countable sets, put together, are still
countable.** This idea is Cantor's.

### All the fractions

Every positive fraction is $\dfrac{p}{q}$ with $p$ and $q$ counting numbers, which is a pair $(p, q)$. So list the
fractions along the diagonals too, and **skip** any fraction that is not in lowest terms, because it is equal to one
we have already listed ($\frac22 = \frac11$, $\frac42 = \frac21$, and so on):

$$\frac11,\ \frac12,\ \frac21,\ \frac13,\ \frac31,\ \frac14,\ \frac23,\ \frac32,\ \frac41,\ \frac15,\ \ldots$$

So the positive rational numbers are countable. Then the trick used for the integers (0, then each one followed by
its negative) lists **all** rational numbers. This is astonishing: between any two whole numbers there are
infinitely many fractions, packed so tightly that between any two fractions there is always another, and yet there
are no more fractions than counting numbers.

## Worked example

**Solve the hotel puzzle.**

1. First, free up infinitely many rooms: *"Everyone in room $n$, move to room $2n$."* The old guests now fill the
   even rooms. The odd rooms 1, 3, 5, 7, ... are empty.
2. Put the passengers in the diagonal order above: (1, 1) is 1st, (1, 2) is 2nd, (2, 1) is 3rd, and so on.
3. The passenger who is $k$th in the list goes to the $k$th odd room, which is room $2k - 1$.

Where does the passenger in bus 2, seat 3 go? Here $b + s = 5$. The diagonals before it hold $1 + 2 + 3 = 6$ pairs,
and on its own diagonal the pairs go (1, 4), (2, 3), ..., so (2, 3) is 2nd. That makes it 8th in the list, and it
goes to room $2 \times 8 - 1 = 15$.

In general, the diagonal $b + s = d + 1$ is the $d$th diagonal, the diagonals before it hold
$1 + 2 + \cdots + (d - 1) = \dfrac{(d-1)d}{2}$ pairs (Gauss's sum, from
[Patterns and sequences](../patterns/level-5/index.md)), and $(b, s)$ is the $b$th pair on its diagonal. So its
position is

$$k = \frac{(d-1)d}{2} + b, \qquad \text{where } d = b + s - 1.$$

Check with (2, 3): $d = 4$, $k = 6 + 2 = 8$. Correct.

## Try it

1. In the list of integers $0, 1, -1, 2, -2, \ldots$, at which position is $5$? At which position is $-5$?
2. In the diagonal list of pairs, which pair is 7th? Which is 10th?
3. In the list of fractions above (skipping those not in lowest terms), what are the 10th and 11th fractions?
4. An empty Hilbert's hotel receives infinitely many buses. This manager uses the rule: *bus $b$, seat $s$ goes to
   room $2^b \times 3^s$.* Which room does bus 2, seat 3 get? Can two passengers ever be given the same room? Is
   every room used?
5. Is the set of all words that can be made from the letters A to Z (any length, sensible or not, like CAT, QQX,
   ZEBRA) countable? Describe a list.
6. Show that the set of all integers $\mathbb{Z}$ and the set $\mathbb{N}$ are the same size, by giving a rule for
   the position of each integer in the list of question 1.

??? note "Answers"
    1. The list goes $0$ (1st), $1$ (2nd), $-1$ (3rd), $2$ (4th), $-2$ (5th), ... A positive $k$ is at position
       $2k$ and $-k$ is at position $2k + 1$. So $5$ is **10th** and $-5$ is **11th**.
    2. The diagonals before $b + s = 5$ hold $1 + 2 + 3 = 6$ pairs, so the 7th pair is the first on that diagonal,
       **(1, 4)**, and the 10th is the last one, **(4, 1)**.
    3. After $\frac41$ (9th) comes the diagonal $p + q = 6$: first $\frac15$, then $\frac24$, $\frac33$ and
       $\frac42$ are skipped, then $\frac51$. So the 10th is $\dfrac15$ and the 11th is $\dfrac51 = 5$.
    4. Room $2^2 \times 3^3 = 4 \times 27 = 108$. Two passengers never share: every whole number breaks into primes
       in only one way, so from the room number you can read off $b$ (how many 2s) and $s$ (how many 3s). Not every
       room is used (room 5, for example, is empty), but that is fine: everyone has a room of their own.
    5. **Yes.** List them by length, and alphabetically within each length: first the 26 one-letter words, then
       the $26^2 = 676$ two-letter words, then the 17,576 three-letter words, and so on. Each length is a finite
       group, so every word is reached at some finite position.
    6. Use the rule from answer 1: $0 \mapsto 1$, $k \mapsto 2k$ and $-k \mapsto 2k + 1$ for $k \ge 1$. Every
       integer gets exactly one position, and every counting number is used exactly once (1 by 0, the even numbers
       by the positives, the odd numbers from 3 on by the negatives).

## Common mistake

**Making a list that never gets there.** Listing all of bus 1 first, then bus 2, looks like a list, but every
passenger on bus 2 would be at position "infinity plus something", which is not a position. A real list must put
every element at some **finite** place: the 7th, the 1000th, the trillionth. That is why the diagonal walk, with its
finite pieces, is the key trick.

## Where it leads

- Next step: [Beyond: Cantor's diagonal argument](05-beyond.md), which shows that some infinite sets can **not**
  be listed at all.
- Back a step: [Build: Zeno, limits and sums that never end](03-build.md)
- Writing every number as a product of primes in only one way, used in question 4, is a key fact of
  [Number theory](../number-theory/index.md). Counting the words of each length, $26^n$, is from
  [Counting and combinations](../counting/index.md).
- Countable sets and the structure of the number line, with full proofs: [MAT158 Unit 2: real numbers and least
  upper bounds](../../uoft/MAT158H1/unit02.md).
