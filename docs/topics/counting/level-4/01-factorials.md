---
title: "Factorials"
---

# Factorials

*Counting and combinations · level 4, lesson 1 of 6*

## A question to start

Take an ordinary pack of 52 playing cards and shuffle it well. How many different orders could the cards be in?

The answer is a number with **68 digits**:

80 658 175 170 943 878 571 660 636 856 403 766 975 289 505 440 883 277 824 000 000 000 000.

That is about $8 \times 10^{67}$: an 8 followed by 67 zeros. The universe is about 13.8 billion years old, which is
roughly $4 \times 10^{17}$ seconds. If someone had shuffled a pack once every second since the very beginning, they
would have seen only a vanishingly small fraction of all the possible orders. So when you shuffle a pack properly, the
order in your hands has almost certainly **never existed before** in the history of cards.

How can such a gigantic number come from just 52 cards? In this lesson you will meet the short way to write it,
$52!$, and see why it grows so ridiculously fast.

## The idea

### Lining things up

In level 3 you counted codes with no repeats: 5 × 4 × 3, one fewer choice each time. The most important case is when
you keep going until **everything is used**: you are putting all of the things in a row.

How many ways can three people, A, B and C, stand in a line?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="A tree for lining up A, B and C. The first place has 3 branches, each splits into 2 for the second place, and each of those has 1 for the third place, giving the 6 lines ABC, ACB, BAC, BCA, CAB, CBA">
  <line x1="30" y1="100.0" x2="130" y2="40.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="130" y1="40.0" x2="230" y2="25.0" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="230" y1="25.0" x2="330" y2="25.0" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="130" y1="40.0" x2="230" y2="55.0" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="230" y1="55.0" x2="330" y2="55.0" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="30" y1="100.0" x2="130" y2="100.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="130" y1="100.0" x2="230" y2="85.0" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="230" y1="85.0" x2="330" y2="85.0" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="130" y1="100.0" x2="230" y2="115.0" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="230" y1="115.0" x2="330" y2="115.0" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="30" y1="100.0" x2="130" y2="160.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="130" y1="160.0" x2="230" y2="145.0" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="230" y1="145.0" x2="330" y2="145.0" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="130" y1="160.0" x2="230" y2="175.0" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="230" y1="175.0" x2="330" y2="175.0" stroke="#7ccf9a" stroke-width="2.5"/>
  <circle cx="130" cy="40.0" r="9" fill="#eea66f" stroke="currentColor"/>
  <text x="130" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="230" cy="25.0" r="9" fill="#9cc9ea" stroke="currentColor"/>
  <text x="230" y="29.0" font-size="11" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="330" cy="25.0" r="9" fill="#7ccf9a" stroke="currentColor"/>
  <text x="330" y="29.0" font-size="11" text-anchor="middle" fill="currentColor">C</text>
  <text x="346" y="29.0" font-size="13" fill="currentColor">ABC</text>
  <circle cx="230" cy="55.0" r="9" fill="#9cc9ea" stroke="currentColor"/>
  <text x="230" y="59.0" font-size="11" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="330" cy="55.0" r="9" fill="#7ccf9a" stroke="currentColor"/>
  <text x="330" y="59.0" font-size="11" text-anchor="middle" fill="currentColor">B</text>
  <text x="346" y="59.0" font-size="13" fill="currentColor">ACB</text>
  <circle cx="130" cy="100.0" r="9" fill="#eea66f" stroke="currentColor"/>
  <text x="130" y="104.0" font-size="11" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="230" cy="85.0" r="9" fill="#9cc9ea" stroke="currentColor"/>
  <text x="230" y="89.0" font-size="11" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="330" cy="85.0" r="9" fill="#7ccf9a" stroke="currentColor"/>
  <text x="330" y="89.0" font-size="11" text-anchor="middle" fill="currentColor">C</text>
  <text x="346" y="89.0" font-size="13" fill="currentColor">BAC</text>
  <circle cx="230" cy="115.0" r="9" fill="#9cc9ea" stroke="currentColor"/>
  <text x="230" y="119.0" font-size="11" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="330" cy="115.0" r="9" fill="#7ccf9a" stroke="currentColor"/>
  <text x="330" y="119.0" font-size="11" text-anchor="middle" fill="currentColor">A</text>
  <text x="346" y="119.0" font-size="13" fill="currentColor">BCA</text>
  <circle cx="130" cy="160.0" r="9" fill="#eea66f" stroke="currentColor"/>
  <text x="130" y="164.0" font-size="11" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="230" cy="145.0" r="9" fill="#9cc9ea" stroke="currentColor"/>
  <text x="230" y="149.0" font-size="11" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="330" cy="145.0" r="9" fill="#7ccf9a" stroke="currentColor"/>
  <text x="330" y="149.0" font-size="11" text-anchor="middle" fill="currentColor">B</text>
  <text x="346" y="149.0" font-size="13" fill="currentColor">CAB</text>
  <circle cx="230" cy="175.0" r="9" fill="#9cc9ea" stroke="currentColor"/>
  <text x="230" y="179.0" font-size="11" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="330" cy="175.0" r="9" fill="#7ccf9a" stroke="currentColor"/>
  <text x="330" y="179.0" font-size="11" text-anchor="middle" fill="currentColor">A</text>
  <text x="346" y="179.0" font-size="13" fill="currentColor">CBA</text>
  <circle cx="30" cy="100.0" r="3" fill="currentColor"/>
  <text x="130" y="208" font-size="12" text-anchor="middle" fill="currentColor">1st: 3 ways</text>
  <text x="230" y="208" font-size="12" text-anchor="middle" fill="currentColor">2nd: 2 ways</text>
  <text x="330" y="208" font-size="12" text-anchor="middle" fill="currentColor">3rd: 1 way</text>
</svg>
</div>

The first place can be any of the 3 people. Whoever is first, the second place has 2 people left. Then the last place
has just 1. By the multiplication rule there are 3 × 2 × 1 = **6** lines: ABC, ACB, BAC, BCA, CAB, CBA.

For 52 cards, the top card can be any of 52, the next any of the 51 left, then 50, and so on down to the last card,
which has only 1 choice. So the number of orders is

$$52 \times 51 \times 50 \times \cdots \times 3 \times 2 \times 1.$$

### The factorial symbol

Multiplying a whole number by every smaller whole number down to 1 is needed so often that it has its own symbol, an
exclamation mark:

$$n! = n \times (n - 1) \times (n - 2) \times \cdots \times 2 \times 1.$$

We say "$n$ **factorial**". For example $4! = 4 \times 3 \times 2 \times 1 = 24$.

> **The number of ways to put $n$ different things in a row is $n!$.**

Such an ordering of all the things is called a **permutation** (from Latin for "a complete change"). So $n!$ counts the
permutations of $n$ things.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $n!$ | 1 | 2 | 6 | 24 | 120 | 720 | 5040 | 40 320 | 362 880 | 3 628 800 |

### Each factorial is built from the one before

Look at $5!$ and $4!$:

$$5! = 5 \times \underbrace{4 \times 3 \times 2 \times 1}_{4!} = 5 \times 4!.$$

In general $n! = n \times (n - 1)!$. That is how the table is made: each entry is the one before times the next
number. $6! = 6 \times 120 = 720$, $7! = 7 \times 720 = 5040$.

There is a counting reason too. To line up 5 people, first choose who goes at the front (5 ways). Whoever it is, the
other 4 must then be lined up behind, and that can be done in $4!$ ways. So $5! = 5 \times 4!$.

This rule also makes fractions of factorials easy. Never multiply out both and divide; **cancel** instead:

$$\frac{9!}{7!} = \frac{9 \times 8 \times 7!}{7!} = 9 \times 8 = 72.$$

### What is $0!$?

The formula "multiply down to 1" does not make sense for 0, so we need to decide. Mathematicians agree that

$$0! = 1,$$

and there are three good reasons, which all point the same way.

1. **The pattern.** Going **down** the table, you divide: $4! = 24$, so $3! = 24 \div 4 = 6$, $2! = 6 \div 3 = 2$,
   $1! = 2 \div 2 = 1$. One more step: $0! = 1 \div 1 = 1$. The rule $n! = n \times (n - 1)!$ with $n = 1$ says
   $1! = 1 \times 0!$, and that only works if $0! = 1$.
2. **Counting.** $n!$ counts the ways to arrange $n$ things. How many ways are there to arrange **nothing**? Exactly
   one: the empty arrangement, where you do nothing at all. It is like asking how many ways there are to pack an empty
   suitcase: one, leave it empty.
3. **Formulas.** In the next lessons, formulas like $\dfrac{n!}{(n - r)!}$ appear. When $r = n$ they need $0!$, and
   they only give the right answer if $0! = 1$.

### How fast factorials grow

Factorials start slowly (1, 2, 6, 24) but then race away, because each step multiplies by a **bigger and bigger**
number. Compare them with doubling, $2^n$, which multiplies by the same 2 every time:

| $n$ | 1 | 2 | 3 | 4 | 5 | 10 | 13 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $2^n$ | 2 | 4 | 8 | 16 | 32 | 1024 | 8192 | 1 048 576 |
| $n!$ | 1 | 2 | 6 | 24 | 120 | 3 628 800 | 6 227 020 800 | 2 432 902 008 176 640 000 |

From $n = 4$ onwards, $n!$ is bigger than $2^n$, and the gap grows enormously. $13!$ is already more than six billion,
and $14!$ is about 87 billion, more than ten times the number of people on Earth. $20!$ has 19 digits, and $52!$ has 68. Factorials even overtake
$10^n$ eventually: $25!$ is bigger than $10^{25}$.

This is why "try every order" is hopeless for big problems. A delivery driver with 20 stops has $20!$ possible routes,
far too many for any computer to check one by one.

### Zeros at the end

$52!$ ends in exactly 12 zeros. Why 12? Each zero at the end comes from a factor of $10 = 2 \times 5$. There are plenty
of 2s in $52!$ (every even number gives one), so the number of zeros is the number of 5s.

- The multiples of 5 up to 52 are 5, 10, 15, ..., 50: that is 10 numbers, each giving one 5.
- But $25 = 5 \times 5$ and $50 = 2 \times 5 \times 5$ each give an **extra** 5.
- Total: $10 + 2 = 12$ fives, so 12 zeros.

<figure class="play" data-play="arrange" data-mode="perm"><span class="ai-tag">AI-created</span><figcaption><b>Every order.</b> Take k = n to see all n! orders.</figcaption></figure>

## Worked examples

**1. A bookshelf.** In how many orders can 8 different books stand on a shelf?

$8! = 8 \times 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 = 40\,320$.

**2. Cancelling.** Work out $\dfrac{7!}{5!}$ and $\dfrac{10!}{8! \times 2!}$.

1. $\dfrac{7!}{5!} = \dfrac{7 \times 6 \times 5!}{5!} = 7 \times 6 = 42$.
2. $\dfrac{10!}{8!} = 10 \times 9 = 90$, and $2! = 2$, so the answer is $90 \div 2 = 45$.

**3. Working backwards.** Which number has factorial 5040?

Divide by 2, 3, 4, ... in turn until you reach 1: $5040 \div 2 = 2520$, $\div 3 = 840$, $\div 4 = 210$,
$\div 5 = 42$, $\div 6 = 7$, $\div 7 = 1$. The last divisor was 7, so $7! = 5040$.

**4. Zeros at the end of 25!.** Multiples of 5 up to 25: 5, 10, 15, 20, 25, which is 5 numbers; 25 gives one extra 5.
Total 6 fives, so $25!$ ends in **6** zeros. (Indeed $25! = 15\,511\,210\,043\,330\,985\,984\,000\,000$.)

**5. A queue in time.** If 10 people changed the order of their queue once a second, day and night, how long would it
take to try every order? $10! = 3\,628\,800$ seconds. A day has $60 \times 60 \times 24 = 86\,400$ seconds, and
$3\,628\,800 \div 86\,400 = 42$. Exactly **42 days**.

## Try it

1. Work out $6!$ and $8!$.
2. Work out $\dfrac{9!}{7!}$ and $\dfrac{100!}{98!}$ without a calculator.
3. Which $n$ has $n! = 720$?
4. What is the smallest $n$ for which $n!$ is more than one million?
5. How many zeros are at the end of $30!$? And of $100!$?
6. Six runners finish a race with no ties. In how many orders can they finish?
7. Write $7 \times 6 \times 5$ as a fraction of two factorials.
8. Show that $\dfrac{0!}{1!} = 1$ and explain in words why $2! = 2$.

??? note "Answers"
    1. $6! = 720$. $8! = 8 \times 7 \times 720 = 40\,320$.
    2. $\dfrac{9!}{7!} = 9 \times 8 = 72$. $\dfrac{100!}{98!} = 100 \times 99 = 9900$.
    3. $720 \div 2 \div 3 \div 4 \div 5 \div 6 = 1$, so $n = 6$.
    4. $9! = 362\,880$ is less than a million; $10! = 3\,628\,800$ is more. So $n = 10$.
    5. $30!$: multiples of 5 up to 30 are 6 numbers (5, 10, 15, 20, 25, 30), and 25 gives an extra 5: 7 zeros.
       $100!$: 20 multiples of 5, and 4 multiples of 25 (25, 50, 75, 100) each give an extra 5: 24 zeros.
    6. $6! = 720$.
    7. $7 \times 6 \times 5 = \dfrac{7!}{4!}$, because $7! = 7 \times 6 \times 5 \times 4!$.
    8. $0! = 1$ and $1! = 1$, so the fraction is $1 \div 1 = 1$. $2! = 2$ because two things, A and B, can be
       lined up in exactly two ways: AB and BA.

## Common mistake

**Multiplying out huge factorials before dividing.** $\dfrac{100!}{98!}$ is impossible to do by working out $100!$
first (it has 158 digits). Write the bigger factorial as "a few numbers times the smaller factorial", then cancel.

**Thinking $0! = 0$.** It looks natural, but it breaks the rule $n! = n \times (n - 1)!$ and the counting meaning.
$0! = 1$: there is one way to arrange nothing.

## Where it leads

- Next: [Arranging some](02-arranging-some.md), when only some of the things are lined up.
- [Level 4 page](index.md) · [Counting topic page](../index.md)
- Back in level 3: [Repeats allowed or not](../level-3/01-repeats-or-not.md), where 5 × 4 × 3 × 2 × 1 first appeared.
- The chance that a shuffled pack has the ace of spades on top is a question for
  [Probability](../../probability/index.md).
- The rule $n! = n \times (n - 1)!$ defines a thing in terms of a smaller copy of itself. Programmers call that
  **recursion**: [CSC148 Unit 5 (recursion)](../../../uoft/CSC148H1/unit05.md) on the U of T shelf, and why trying
  every order is too slow in [CSC108 Unit 9 (searching, sorting and complexity)](../../../uoft/CSC108H1/unit09.md).
