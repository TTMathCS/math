---
title: "Derangements"
---

# Derangements

*Counting and combinations · level 8, lesson 3 of 6*

## A question to start

At a party, everybody hangs their hat on a rack. At the end the hats are handed back completely at random. What is
the chance that **nobody** gets their own hat back?

With 3 guests the chance is $\frac{2}{6}$, about 0.333. With 10 guests it is about 0.367879. With 100 guests it is
still about 0.367879, and with a million guests the same. More guests means more chances for someone to be lucky,
but also more wrong hats to go around, and the two effects balance almost perfectly. The number the chance settles
on is $1/e$, where $e = 2.71828\ldots$ is the number from growth and compound interest. What is it doing at a party?

## The idea

### Permutations, fixed points and derangements

Number the guests $1, 2, \ldots, n$ and their hats the same way. Handing back the hats is a **permutation**: an
arrangement of the hats $1, \ldots, n$ in which each guest gets exactly one. There are $n!$ of them. A guest who gets
their own hat is a **fixed point** of the permutation. A permutation with **no** fixed points is called a
**derangement** (it "deranges" everything), and the number of derangements of $n$ things is written $D_n$.

For 3 guests A, B, C with hats a, b, c, here are all 6 permutations. Only the two green ones are derangements, so
$D_3 = 2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 445 222" role="img" aria-label="The six ways to hand three hats a, b, c back to people A, B, C; two of them, coloured green, give nobody their own hat">
  <rect x="15" y="15" width="130" height="80" rx="8" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <text x="40" y="37" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="40" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="40" cy="72" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="77" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <text x="80" y="37" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="80" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="80" cy="72" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="77" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <text x="120" y="37" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="120" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="120" cy="72" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="120" y="77" font-size="12" text-anchor="middle" fill="currentColor">c</text>
  <rect x="160" y="15" width="130" height="80" rx="8" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <text x="185" y="37" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="185" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="185" cy="72" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="185" y="77" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <text x="225" y="37" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="225" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="225" cy="72" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="225" y="77" font-size="12" text-anchor="middle" fill="currentColor">c</text>
  <text x="265" y="37" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="265" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="265" cy="72" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="265" y="77" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <rect x="305" y="15" width="130" height="80" rx="8" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <text x="330" y="37" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="330" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="330" cy="72" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="330" y="77" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <text x="370" y="37" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="370" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="370" cy="72" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="370" y="77" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <text x="410" y="37" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="410" y="55" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="410" cy="72" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="410" y="77" font-size="12" text-anchor="middle" fill="currentColor">c</text>
  <rect x="15" y="110" width="130" height="80" rx="8" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <text x="40" y="132" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="40" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="40" cy="167" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="172" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <text x="80" y="132" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="80" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="80" cy="167" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="172" font-size="12" text-anchor="middle" fill="currentColor">c</text>
  <text x="120" y="132" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="120" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="120" cy="167" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="120" y="172" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <rect x="160" y="110" width="130" height="80" rx="8" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <text x="185" y="132" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="185" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="185" cy="167" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="185" y="172" font-size="12" text-anchor="middle" fill="currentColor">c</text>
  <text x="225" y="132" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="225" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="225" cy="167" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="225" y="172" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <text x="265" y="132" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="265" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="265" cy="167" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="265" y="172" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <rect x="305" y="110" width="130" height="80" rx="8" fill="none" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <text x="330" y="132" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="330" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="330" cy="167" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="330" y="172" font-size="12" text-anchor="middle" fill="currentColor">c</text>
  <text x="370" y="132" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="370" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="370" cy="167" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="370" y="172" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <text x="410" y="132" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="410" y="150" font-size="13" text-anchor="middle" fill="currentColor">↓</text>
  <circle cx="410" cy="167" r="10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="410" y="172" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <text x="222" y="212" font-size="11" text-anchor="middle" fill="currentColor">orange hat: back with its owner · green boxes: nobody has their own hat</text>
</svg>
</div>

Small cases by hand: $D_1 = 0$ (one guest must get their own hat), $D_2 = 1$ (swap), $D_3 = 2$. For 4 guests listing is
already tiresome, and for 10 it is hopeless. We need a better way.

### Inclusion-exclusion for many sets

Level 6 counted things in at least one of two or three sets:

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|.$$

Here $|A|$ means the number of things in $A$, $A \cup B$ (A **union** B) means "in $A$ or $B$ or both", and $A \cap B$
(A **intersection** B) means "in both". The pattern continues for any number of sets: add the single sets, subtract
all the pairs, add all the triples, subtract all the quadruples, and so on.

**Why it counts each thing exactly once.** Take a thing that lies in exactly $m$ of the sets, $m \ge 1$. It is
counted in $\dbinom{m}{1}$ single sets, $\dbinom{m}{2}$ pairs, $\dbinom{m}{3}$ triples, and so on. With the signs, its
total count is

$$\binom{m}{1} - \binom{m}{2} + \binom{m}{3} - \cdots = 1 - \left[\binom{m}{0} - \binom{m}{1} + \binom{m}{2} - \cdots\right] = 1 - 0 = 1,$$

using the alternating-sum identity of [level 7, lesson 3](../level-7/03-identities-from-theorem.md): the bracket is
$(1 - 1)^m = 0$. So every thing in the union is counted exactly once, and things in none of the sets are not counted
at all.

### Counting the derangements

Let $A_i$ be the set of permutations in which guest $i$ gets their own hat. A derangement is a permutation in **none**
of the $A_i$, so

$$D_n = n! - |A_1 \cup A_2 \cup \cdots \cup A_n|.$$

Now the intersections are easy. If $k$ particular guests must get their own hats, the other $n - k$ hats can go
anywhere among the other $n - k$ guests: $(n - k)!$ ways. And there are $\dbinom{n}{k}$ ways to pick which $k$ guests.
So the sum over all intersections of $k$ sets is $\dbinom{n}{k}(n - k)! = \dfrac{n!}{k!}$. Inclusion-exclusion gives

$$D_n = n! - \frac{n!}{1!} + \frac{n!}{2!} - \frac{n!}{3!} + \cdots + (-1)^n\frac{n!}{n!} = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}.$$

Check $n = 3$: $6 - 6 + 3 - 1 = 2$. ✓ And $n = 4$: $24 - 24 + 12 - 4 + 1 = 9$.

### Where $1/e$ comes from

The chance that nobody gets their own hat is

$$\frac{D_n}{n!} = 1 - 1 + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \cdots + \frac{(-1)^n}{n!}.$$

As $n$ grows, this is just the same sum with more terms. The terms shrink very fast: $\frac{1}{10!}$ is less than
one three-millionth. So the sum settles down to a limit, and that limit is a famous one. In calculus you will meet
the series

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots,$$

and putting $x = -1$ gives exactly our sum: the limit is $e^{-1} = 1/e = 0.367879\ldots$ The hat chance hardly
depends on $n$ because adding a guest only adds a term like $\pm\frac{1}{(n+1)!}$, which is tiny. In fact the error is
always less than the first term left out, so for $n \ge 1$, $D_n$ is the **whole number nearest to $n!/e$**.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $D_n$ | 0 | 1 | 2 | 9 | 44 | 265 | 1854 | 14 833 |
| $D_n/n!$ | 0 | 0.5 | 0.333 | 0.375 | 0.3667 | 0.3681 | 0.36786 | 0.36788 |

### A recursion too

There is also a recursion, found by thinking about guest 1. Guest 1 gets the hat of some other guest $j$: $n - 1$
choices. Then either:

- **guest $j$ gets hat 1**: the two have simply swapped, and the other $n - 2$ guests must be deranged among
  themselves: $D_{n-2}$ ways; or
- **guest $j$ does not get hat 1**: then pretend hat 1 is "guest $j$'s own hat" (the one $j$ must not get). Now the
  $n - 1$ guests other than guest 1 must each avoid one forbidden hat: $D_{n-1}$ ways.

So

$$D_n = (n - 1)\left(D_{n-1} + D_{n-2}\right).$$

Check: $D_4 = 3(2 + 1) = 9$ ✓ and $D_5 = 4(9 + 2) = 44$.

## Worked examples

**1. Four guests, listed.** With guests A, B, C, D, write a permutation as the hats that A, B, C, D receive, in order.
The 9 derangements are BADC, BCDA, BDAC, CADB, CDAB, CDBA, DABC, DCAB, DCBA. That matches the formula, 9. ✓

**2. Five guests.** By the formula: $120 - 120 + 60 - 20 + 5 - 1 = 44$. By the recursion: $4(9 + 2) = 44$. ✓

**3. Exactly two right.** With 5 guests, in how many permutations do **exactly** 2 get their own hats? Choose the lucky
2: $\dbinom{5}{2} = 10$ ways. The other 3 must all get wrong hats: $D_3 = 2$ ways. Total $10 \times 2 = 20$.

**4. Ten guests.** $D_{10} = 1\,334\,961$ and $10! = 3\,628\,800$, so the chance is
$\dfrac{1\,334\,961}{3\,628\,800} = 0.3678794\ldots$, while $1/e = 0.3678794\ldots$ They share their first 7 decimal places.

**5. Nearest whole number.** $7!/e = 5040/2.71828\ldots = 1854.11\ldots$, and the nearest whole number is 1854. That
is $D_7$. ✓

## Try it

1. Work out $D_5$ from the formula $n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}$, showing every term.
2. Use the recursion to find $D_6$ and $D_7$.
3. Six friends draw names from a hat for a gift exchange. What is the chance that nobody draws their own name?
4. With 4 guests, in how many permutations does exactly 1 guest get their own hat?
5. For 5 guests, count the permutations with exactly $k$ fixed points for $k = 0, 1, 2, 3, 4, 5$, and check that they
   add to $5!$. Why is the number for $k = 4$ zero?
6. Another recursion is $D_n = nD_{n-1} + (-1)^n$. Check it for $n = 5$ and $n = 6$.
7. Five letters are put into five addressed envelopes at random. In how many ways does **at least one** letter go into
   the right envelope?

??? note "Answers"
    1. $120\left(1 - 1 + \frac12 - \frac16 + \frac1{24} - \frac1{120}\right) = 120 - 120 + 60 - 20 + 5 - 1 = 44$.
    2. $D_6 = 5(D_5 + D_4) = 5(44 + 9) = 265$. $D_7 = 6(265 + 44) = 6 \times 309 = 1854$.
    3. $\frac{D_6}{6!} = \frac{265}{720} \approx 0.368$, just over a third.
    4. Choose the lucky guest (4 ways); the other 3 are deranged ($D_3 = 2$): $4 \times 2 = 8$.
    5. $\binom{5}{k}D_{5-k}$: $k = 0$: $44$; $k = 1$: $5 \times 9 = 45$; $k = 2$: $10 \times 2 = 20$; $k = 3$:
       $10 \times 1 = 10$; $k = 4$: $5 \times D_1 = 0$; $k = 5$: $1$. Sum: $44 + 45 + 20 + 10 + 0 + 1 = 120 = 5!$. ✓
       Exactly 4 right is impossible: if 4 guests have their own hats, the only hat left is the fifth guest's own.
    6. $n = 5$: $5 \times 9 - 1 = 44$. ✓ $n = 6$: $6 \times 44 + 1 = 265$. ✓
    7. All ways minus derangements: $120 - 44 = 76$.

## Common mistake

**Subtracting only the single sets.** "Permutations where somebody gets their own hat" is not $n \times (n - 1)!$:
that counts a permutation with 2 lucky guests twice, one with 3 lucky guests three times, and so on. That is exactly why
inclusion-exclusion keeps going with pairs, triples and more. For $n = 3$, $3 \times 2! = 6$ would say every
permutation has a fixed point, but 2 of them do not.

**"Exactly $k$" versus "at least $k$".** Inclusion-exclusion counts "at least one". For "exactly $k$ right", choose the
$k$ lucky guests and **derange** the rest, as in worked example 3; do not just let the rest go anywhere.

## Where it leads

- Back: [Catalan numbers](02-catalan-numbers.md) · Next: [Partitions of a number](04-partitions.md)
- [Level 8 page](index.md) · [Counting topic page](../index.md)
- Inclusion-exclusion for two and three sets: [level 6](../level-6/index.md).
- The number $e$ and $e^{i\pi}$: [Euler's formula](../../numbers/level-8/04-euler-formula.md) in Numbers.
- The hat chance as a probability: [Probability](../../probability/index.md).
- The series for $e^x$ is a Taylor series: [MAT137 Unit 14: power series and Taylor series](../../../uoft/MAT137/unit14.md).
