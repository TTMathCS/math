---
title: "Build: Permutations"
---

# Build: Arranging things in order, permutations

*Counting and combinations · step 3 of 5*

## A question to start

Shuffle an ordinary pack of 52 playing cards. How many different orders could the cards end up in?

The answer is a 68-digit number that begins 80,658,175,170,943, ... and is about

$$8 \times 10^{67},$$

which means 8 followed by 67 zeros. That is so many that a well-shuffled pack is almost certainly in an order that no pack of cards has ever been in
before. On this page you will learn the short way to write that number, and how to count arrangements of all kinds.

## The idea

### Factorials

In the Explore step, a code with four different digits had $10 \times 9 \times 8 \times 7$ choices: each step had one
fewer choice than the step before. Multiplying a whole number by every smaller whole number down to 1 happens so often
that it has its own symbol, an exclamation mark, and its own name, **factorial**:

$$n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1.$$

Read $5!$ as "five factorial". So $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $n!$ | 1 | 2 | 6 | 24 | 120 | 720 | 5,040 | 40,320 | 362,880 | 3,628,800 |

Factorials grow astonishingly fast. Each one is the previous one times the next number: $n! = n \times (n-1)!$.

**What is $0!$?** We define $0! = 1$. There is exactly one way to arrange nothing: do nothing. It also keeps the rule
$n! = n \times (n-1)!$ working when $n = 1$: $1! = 1 \times 0!$ needs $0! = 1$.

### Arranging everything: $n!$

A **permutation** is an arrangement of things in a definite order. To put $n$ different things in a row, the first
place has $n$ choices, the second $n - 1$, and so on down to 1. By the multiplication principle:

> The number of ways to arrange $n$ different things in a row is $n!$.

The 52 cards can be arranged in $52!$ ways: that is the 68-digit number above.

### Arranging some of them: ${}^nP_r$

Often you only fill some of the places. Eight runners race; how many ways can the gold, silver and bronze medals go?

$$8 \times 7 \times 6 = 336.$$

In general, arranging $r$ things chosen from $n$ different things gives $n \times (n-1) \times \cdots$ with $r$
factors. Written with factorials, that is the full $n!$ with the unused part $(n-r)!$ divided away:

$$^{n}P_{r} = \frac{n!}{(n-r)!}.$$

For the medals: $^{8}P_{3} = \dfrac{8!}{5!} = \dfrac{40320}{120} = 336$. You can also see the cancelling directly:
$\dfrac{8 \times 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1}{5 \times 4 \times 3 \times 2 \times 1} = 8 \times 7 \times 6$.

The letter $P$ stands for permutation. Calculators often have an "nPr" key.

### Arranging when some things are the same

How many different "words" (any order of letters, real word or not) can you make from the letters of BOOK?

If the two Os were different, say $\text{O}_1$ and $\text{O}_2$, there would be $4! = 24$ arrangements. But
$\text{BO}_1\text{O}_2\text{K}$ and $\text{BO}_2\text{O}_1\text{K}$ look exactly the same. Every real word has been
counted twice, once for each order of the two Os. So the answer is $\dfrac{24}{2} = 12$.

In general:

> If $n$ things include $a$ that are all alike, $b$ others that are all alike, and so on, the number of different
> arrangements is $\dfrac{n!}{a!\,b!\,\cdots}$.

You divide by $a!$ because the $a$ alike things could be shuffled among themselves in $a!$ ways without changing
anything you can see.

### Arranging in a circle

Five people sit at a round table. If only who sits next to whom matters (not which chair), turning everyone one seat
to the left gives the "same" seating. Fix one person's seat to stop the turning; then arrange the other 4 in
$4! = 24$ ways. For $n$ people round a table: $(n-1)!$.

## Worked examples

**1. A queue.** In how many ways can 10 people stand in a line?

$10! = 3{,}628{,}800$. If they changed order once a second, day and night, it would take them about 42 days to try
every order.

**2. Letters with repeats.** How many arrangements of LETTER are there?

- 6 letters in total: L, E, T, T, E, R.
- E appears twice and T appears twice.
- $\dfrac{6!}{2!\,2!} = \dfrac{720}{4} = 180$.

And the famous one, MISSISSIPPI: 11 letters with 4 Is, 4 Ss and 2 Ps (and 1 M):

$$\frac{11!}{4!\,4!\,2!} = \frac{39{,}916{,}800}{24 \times 24 \times 2} = 34{,}650.$$

**3. Keeping two together.** Five friends line up for a photo, and Ana and Ben insist on standing next to each other.
How many lines are possible?

1. Glue Ana and Ben together into one block. Now there are 4 "things" to arrange: the block and the 3 others. That
   is $4! = 24$ ways.
2. Inside the block, Ana can be on the left or on the right: 2 ways.
3. Total: $24 \times 2 = 48$.

(Out of $5! = 120$ lines in all, so in 72 of them Ana and Ben are apart.)

## Try it

1. Work out $6!$ and $\dfrac{10!}{8!}$. (For the second, cancel first.)
2. Seven swimmers race. In how many ways can the gold, silver and bronze medals be given?
3. How many different arrangements are there of the letters of BANANA?
4. Six different books go on a shelf, two of them maths books. In how many orders do the two maths books stand side
   by side?
5. How many 4-letter "words" can you make from the letters A, B, C, D, E, F if no letter is used twice?
6. In how many ways can 6 children sit round a circular table, if only who sits next to whom matters?

??? note "Answers"
    1. $6! = 720$. $\dfrac{10!}{8!} = \dfrac{10 \times 9 \times 8!}{8!} = 10 \times 9 = 90$.
    2. $^{7}P_{3} = 7 \times 6 \times 5 = 210$.
    3. 6 letters, with 3 As and 2 Ns: $\dfrac{6!}{3!\,2!} = \dfrac{720}{12} = 60$.
    4. Glue the maths books into a block: 5 things, $5! = 120$ orders; times 2 for the order inside the block:
       **240**.
    5. $^{6}P_{4} = 6 \times 5 \times 4 \times 3 = 360$.
    6. $(6-1)! = 5! = 120$.

## Common mistake

**Forgetting to divide for things that are the same.** "BOOK has 4 letters, so $4! = 24$ arrangements" counts
$\text{BOOK}$ twice, once for each way of swapping the identical Os. Before using $n!$, ask: *are all the things
really different?* If not, divide by the factorial of each group of repeats.

## Where it leads

- Next step: [Master: combinations and Pascal's triangle](04-master.md), for when you choose a group and the order
  does **not** matter.
- Back a step: [Explore: the multiplication principle](02-explore.md)
- How a computer sorts a list, and why some ways of searching through arrangements are hopelessly slow, is on the
  U of T shelf: [CSC108 Unit 9 (searching, sorting and complexity)](../../uoft/CSC108H1/unit09.md).
- The chance that a shuffled deck has the ace of spades on top is a question for
  [Probability](../probability/02-explore.md).
