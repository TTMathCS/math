---
title: "Countable unions of countable sets"
---

# Countable unions of countable sets

*Infinity and strange math · level 6, lesson 5 of 6*

## A question to start

Hilbert's hotel is full, as usual. Then **infinitely many buses** pull up: bus 1, bus 2, bus 3, ..., and every bus has
infinitely many passengers in seats 1, 2, 3, ... You met this crowd in [level 4](../level-4/index.md), where the
manager used prime numbers to find everyone a room. That trick works, but it leaves infinitely many rooms empty, which
seems wasteful for a hotel that likes to be full.

Can the manager fit everyone in **and** fill every room? And what is the general fact hiding behind the story? It
turns out to be one of the most useful facts about infinity: infinitely many lists, put together, still make one list.

## The idea

### Lists of lists

Suppose we have infinitely many sets, $A_1, A_2, A_3, \ldots$, one for each counting number, and each of them is
countable. So each one can be listed:

| | 1st | 2nd | 3rd | 4th | ... |
| --- | --- | --- | --- | --- | --- |
| $A_1$ | $a_{1,1}$ | $a_{1,2}$ | $a_{1,3}$ | $a_{1,4}$ | ... |
| $A_2$ | $a_{2,1}$ | $a_{2,2}$ | $a_{2,3}$ | ... | |
| $A_3$ | $a_{3,1}$ | $a_{3,2}$ | ... | | |
| ... | | | | | |

Here $a_{i,j}$ (read "a i j") means the $j$th member of the list of $A_i$. The **union** $A_1 \cup A_2 \cup A_3 \cup \cdots$
is the set of everything that belongs to at least one of them.

Look at the table: it is exactly the grid of pairs from [lesson 3](03-pairs-countable.md), with $a_{i,j}$ sitting in
row $i$, column $j$. So walk the short diagonals, just as before:

$$a_{1,1},\ a_{1,2},\ a_{2,1},\ a_{1,3},\ a_{2,2},\ a_{3,1},\ a_{1,4},\ \ldots$$

Every member of every set sits at some $(i, j)$ in the grid, and every $(i, j)$ gets a finite position. Two small
repairs make it a proper list:

- If something belongs to two of the sets, it appears twice in the grid. **Skip** it the second time.
- If one of the sets is finite, its row runs out. **Skip** the empty places.

Skipping only moves members earlier, so everybody still has a finite position. This proves:

> **The union of countably many countable sets is countable.**

("Countably many" means the sets themselves can be listed as $A_1, A_2, A_3, \ldots$) This is the theorem behind
everything else in this lesson.

### The hotel, filled completely

Back to the buses. Treat the old guests as one more "bus": call them row 1, and call bus $k$ row $k + 1$. Now every
person is a pair (row, seat), and the manager announces:

> "The person in row $m$, seat $n$, goes to room $\dfrac{(d - 1)d}{2} + m$, where $d = m + n - 1$."

That is lesson 3's position formula. Since it is a one-to-one correspondence between pairs and counting numbers,
every person gets their own room **and every room is used**. No room is empty.

Compare the prime trick from level 4: old guest in room $n$ goes to room $2^n$, and passenger $s$ of bus $k$ goes to
room $p^s$, where $p$ is the $(k + 1)$th prime (3 for bus 1, 5 for bus 2, 7 for bus 3, ...). Different people get
different rooms, because a power of one prime is never a power of another (unique factorisation). But rooms such as
1, 6, 10, 12 and 15 are never used: they are not a power of a single prime. Both methods prove the crowd fits. The
diagonal method fits it perfectly.

### Example: all the words

A **word** here means any finite string of the letters A to Z, sensible or not: CAT, QQX, A, ZZZZZZZZ. Is the set of
all words countable?

Group the words by length. $A_1$ is the one-letter words (26 of them), $A_2$ the two-letter words ($26^2 = 676$), $A_3$
the three-letter words ($26^3 = 17576$), and so on (counting them is a job for [Counting](../../counting/index.md)).
Each $A_L$ is finite, so certainly countable, and every word is in one of them. By the theorem, **the set of all words
is countable**.

Here the list is easy to describe without diagonals, because every group is finite: list all the one-letter words in
alphabetical order, then all the two-letter words, then the three-letter words, and so on. A dictionary that is
sorted first by length and then alphabetically. Every word is reached, since only finitely many words come before it.

### Example: every computer program

A computer program, a recipe, a book, a proof, a description of a number in words: each is a finite string of
symbols from a finite keyboard. Exactly the argument for words shows that **the set of all possible programs is
countable**, and so is the set of all possible finite descriptions.

That fact has a striking consequence that you will be able to prove in [level 7](../level-7/index.md). There, Cantor
shows that the real numbers are **not** countable. Since the programs are countable, there are not enough programs to
go round: most real numbers cannot be computed by any program at all. (This links to the limits of computing in
[Turing and the halting problem](../../logic/level-8/05-halting-problem.md).)

### Example: the rationals again, a second proof

In lesson 4 we listed the fractions with a grid. The theorem gives another proof in two lines. For each bottom number
$q = 1, 2, 3, \ldots$ let $A_q$ be the fractions with bottom $q$: $\ldots, -\frac2q, -\frac1q, \frac0q, \frac1q, \frac2q, \ldots$
Each $A_q$ is a copy of the integers, so it is countable (lesson 2's zigzag). Every rational number is
in some $A_q$. So $\mathbb{Q}$, the union of countably many countable sets, is countable.

### A fine point

The proof used a list for each $A_i$ at the same time. When the sets are described clearly, as above, we can always
say what the lists are. In the most general setting, picking one list for each of infinitely many sets at once needs
an extra rule of set theory, called the **axiom of countable choice**. Almost all mathematicians accept it, and you
will meet axioms like this in [Logic level 8](../../logic/level-8/index.md).

## Worked examples

**1. The rationals, listed by bottom number.** Use the diagonal walk over $A_1, A_2, A_3, \ldots$ (each listed by the
zigzag $\frac0q, \frac1q, -\frac1q, \frac2q, -\frac2q, \ldots$) to write the first terms of a list of $\mathbb{Q}$.

1. The grid: row $q$, column $j$ holds the $j$th member of the zigzag with bottom $q$.
2. Diagonal 1: $\frac01 = 0$.
3. Diagonal 2: $\frac11 = 1$, then $\frac02 = 0$ (a repeat, skip).
4. Diagonal 3: $-\frac11 = -1$, $\frac12$, $\frac03$ (skip).
5. Diagonal 4: $\frac21 = 2$, $-\frac12$, $\frac13$, $\frac04$ (skip).
6. So the list starts $0, 1, -1, \frac12, 2, -\frac12, \frac13, \ldots$, and every rational number appears exactly
   once (all repeats skipped).

**2. Rooms by diagonals.** With the old guests as row 1 and bus $k$ as row $k + 1$, which room does bus 3, seat 2 get?

Bus 3 is row 4, so the pair is $(4, 2)$. Then $d = 4 + 2 - 1 = 5$ and the room is $\frac{4 \times 5}{2} + 4 = 10 + 4 =$
**14**.

**3. Rooms by primes.** With the prime trick, where do the old guest from room 3 and bus 2, seat 3 go?

- Old guest from room 3 goes to $2^3 = 8$.
- Bus 2 uses the 3rd prime, 5: seat 3 goes to $5^3 =$ **125**.

**4. A word's position.** In the "by length, then alphabetical" list, at which position is CAT?

1. Before all three-letter words come $26 + 676 = 702$ shorter words.
2. Among three-letter words, think of A to Z as digits 0 to 25. CAT is C = 2, A = 0, T = 19, so the number of
   three-letter words before it is $2 \times 676 + 0 \times 26 + 19 = 1371$. CAT is the 1372nd three-letter word.
3. Its position is $702 + 1372 =$ **2074**.

## Try it

1. With the diagonal method (old guests row 1, bus $k$ row $k + 1$), which room does bus 1, seat 1 get? Where does the
   old guest from room 5 go?
2. With the prime trick, which room does bus 3, seat 2 get? Which of the rooms 1 to 10 stay empty?
3. In the "by length, then alphabetical" list of words, at which positions are Z and BA?
4. How many words have length at most 3?
5. Show that the set of all **finite** sets of counting numbers (like $\{2, 7\}$, $\{1, 2, 3, 100\}$ or the empty set)
   is countable. (Hint: group them by their largest member.)
6. Explain why, for each length $L$, the set of lists of $L$ counting numbers is countable, and deduce that the set of
   **all** finite lists of counting numbers is countable.
7. Show that the set of all numbers $a + b\sqrt2$, where $a$ and $b$ are integers, is countable.
8. Explain why the prime trick must leave room 6 empty, but the diagonal method fills it. Who is in room 6 under the
   diagonal method?

??? note "Answers"
    1. Bus 1 is row 2: the pair $(2, 1)$, with $d = 2$, gets room $\frac{1 \times 2}{2} + 2 =$ **3**. The old guest
       from room 5 is $(1, 5)$, with $d = 5$: room $10 + 1 =$ **11**.
    2. Bus 3 uses the 4th prime, 7: seat 2 gets $7^2 =$ **49**. Rooms 1 to 10 used: 2, 4, 8 (old guests 1, 2, 3),
       3, 9 (bus 1), 5 (bus 2), 7 (bus 3). Empty: **1, 6 and 10**.
    3. Z is the 26th one-letter word: position **26**. BA is the 27th two-letter word (after AA to AZ): position
       $26 + 27 =$ **53**.
    4. $26 + 676 + 17576 =$ **18,278**.
    5. Let $A_m$ be the finite sets whose largest member is $m$, and $A_0$ the empty set alone. $A_m$ holds only
       subsets of $\{1, \ldots, m\}$, which is finitely many ($2^m$ subsets in total, from
       [Counting](../../counting/index.md)), so each $A_m$ is finite. Every finite set is in exactly one $A_m$. So
       the union is countable.
    6. Lists of length 1 are just $\mathbb{N}$. Lists of length 2 are pairs (lesson 3). A list of length 3 is a pair
       (a list of length 2, a number), and so on: each length is countable, by building on the one before. The set of
       all finite lists is the union over $L = 1, 2, 3, \ldots$ of these countably many countable sets, so it is
       countable.
    7. Each such number is named by a pair of integers $(a, b)$, and pairs of integers are countable (lesson 3,
       question 8). Some pairs might name the same number, but repeats are just skipped. (In fact they never do,
       because $\sqrt2$ is irrational.) So the set is countable.
    8. Room 6 is $2 \times 3$, not a power of a single prime, and the prime trick only uses rooms that are powers of
       one prime. The diagonal formula is a one-to-one correspondence, so every room, 6 included, has someone. Room 6
       is position 6 in the pair list, the pair $(3, 1)$: row 3, which is **bus 2, seat 1**.

## Common mistake

**"Infinitely many infinite sets must make something bigger."** Not if each set is countable and there are only
countably many of them: the grid and the diagonal walk list the lot. Bigger infinities do exist (level 7), but you
cannot reach them this way.

**Listing one set completely before starting the next.** "All of $A_1$, then all of $A_2$" never reaches $A_2$ when
$A_1$ is infinite. Only when every set is **finite**, as with the words of each length, can you go one group at a
time.

## Where it leads

- Back: [The rational numbers are countable](04-rationals-countable.md) · Next: [Algebraic numbers are countable](06-algebraic-numbers.md),
  the biggest countable set in this level.
- [Level 6 page](index.md) · [Infinity topic page](../index.md) · The hotel's first infinite buses:
  [level 4](../level-4/index.md).
- Unique factorisation, behind the prime trick: [Number theory](../../number-theory/level-6/06-unique-factorisation.md).
  What programs can and cannot do: [Logic level 8](../../logic/level-8/index.md).
- On the U of T shelf, sets, unions and functions between them:
  [MAT158 Unit 1: logic, sets and proof](../../../uoft/MAT158H1/unit01.md).
