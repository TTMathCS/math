---
title: "Arithmetic series, carefully"
---

# Arithmetic series, carefully

*Patterns and sequences · level 7, lesson 2 of 6*

## A question to start

What is the sum of all the multiples of 7 between 100 and 500?

You could list them and add: 105, 112, 119, ... and so on for a long time. Or you could answer in three short lines,
with no chance of missing one. This lesson gives you those three lines, and more importantly shows you **why** they
work, so that you can rebuild the method from nothing in an exam, years from now, without remembering any formula.

## The idea

### Sequence and series

A **sequence** is a list of numbers in order: $5, 9, 13, 17$. A **series** is what you get when you add the terms of a
sequence: $5 + 9 + 13 + 17 = 44$. An **arithmetic series** is the sum of an arithmetic sequence, one where each term
is the one before plus the same **common difference** $d$.

In [level 5](../level-5/index.md) you met the standard names, which we keep:

- $a$ is the first term, $d$ the common difference, $n$ the number of terms;
- the $k$th term is $t_k = a + (k - 1)d$ (to reach term $k$ you take $k - 1$ steps of size $d$);
- $l$ is the last term, so $l = t_n = a + (n - 1)d$;
- $S_n$ is the sum of the first $n$ terms.

### The derivation: write it twice

Write the sum forwards, then write it again backwards, underneath:

$$
\begin{aligned}
S_n &= a + (a + d) + (a + 2d) + \cdots + (l - d) + l\\
S_n &= l + (l - d) + (l - 2d) + \cdots + (a + d) + a
\end{aligned}
$$

Now add the two lines **column by column**. In the first column, $a + l$. In the second, $(a + d) + (l - d) = a + l$:
the $+d$ and the $-d$ cancel. In the third, $(a + 2d) + (l - 2d) = a + l$ again. Going along the top line adds $d$ at
each step, going along the bottom line takes $d$ away, so **every column adds to the same total**, $a + l$. There are
$n$ columns, so

$$2S_n = n(a + l), \qquad\text{that is}\qquad S_n = \frac{n(a + l)}{2}.$$

Here is the same argument as a picture, for $3 + 5 + 7 + 9 + 11$. The sum is a staircase of blocks. A second copy,
turned upside down, fits on top of it exactly, and the two together make a rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 210" role="img" aria-label="A staircase of columns of heights 3, 5, 7, 9 and 11 blocks, with an upside-down copy of heights 11, 9, 7, 5, 3 stacked on top; every column becomes 14 blocks tall, a 5 by 14 rectangle">
  <g stroke="currentColor" stroke-width="1">
    <rect x="40" y="152" width="40" height="36" fill="#eea66f"/>
    <rect x="80" y="128" width="40" height="60" fill="#eea66f"/>
    <rect x="120" y="104" width="40" height="84" fill="#eea66f"/>
    <rect x="160" y="80" width="40" height="108" fill="#eea66f"/>
    <rect x="200" y="56" width="40" height="132" fill="#eea66f"/>
    <rect x="40" y="20" width="40" height="132" fill="#9cc9ea"/>
    <rect x="80" y="20" width="40" height="108" fill="#9cc9ea"/>
    <rect x="120" y="20" width="40" height="84" fill="#9cc9ea"/>
    <rect x="160" y="20" width="40" height="60" fill="#9cc9ea"/>
    <rect x="200" y="20" width="40" height="36" fill="#9cc9ea"/>
  </g>
  <text x="60" y="176" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="100" y="164" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="140" y="152" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <text x="180" y="140" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <text x="220" y="128" font-size="12" text-anchor="middle" fill="currentColor">11</text>
  <text x="60" y="90" font-size="12" text-anchor="middle" fill="currentColor">11</text>
  <text x="100" y="78" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <text x="140" y="66" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <text x="180" y="54" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="220" y="42" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="140" y="205" font-size="12" text-anchor="middle" fill="currentColor">5 columns</text>
  <text x="255" y="100" font-size="12" fill="currentColor">each column</text>
  <text x="255" y="116" font-size="12" fill="currentColor">3 + 11 = 14</text>
</svg>
</div>

The rectangle has $5 \times 14 = 70$ blocks, and it is two copies of the sum, so the sum is 35. In the formula:
$n = 5$, $a = 3$, $l = 11$, and $\frac{5 \times 14}{2} = 35$.

### Read the formula in words

$$S_n = n \times \frac{a + l}{2}$$

says: **the sum is the number of terms times the average of the first and last terms.** For an arithmetic sequence,
the average of all the terms equals the average of the first and last, because the terms are spread out evenly on both
sides of the middle. If $n$ is odd, $\frac{a + l}{2}$ is the middle term itself: $3 + 5 + 7 + 9 + 11$ is five 7s.

### The second form

If you do not know $l$ but you do know $d$, replace $l$ by $a + (n - 1)d$:

$$S_n = \frac{n}{2}\bigl[2a + (n - 1)d\bigr].$$

This also comes straight from sigma notation and the rules of [lesson 1](01-sigma-notation.md). Writing $j = k - 1$,

$$S_n = \sum_{k=1}^{n} \bigl(a + (k - 1)d\bigr) = na + d\sum_{j=0}^{n-1} j = na + d\,\frac{(n - 1)n}{2},$$

which is the same as $\frac{n}{2}\bigl[2a + (n - 1)d\bigr]$. Two derivations, one answer: a good sign.

Which form to use? If you know the last term, use $\frac{n(a + l)}{2}$. If you know the common difference, use
$\frac{n}{2}[2a + (n - 1)d]$. Either way, **you must know $n$**, and finding $n$ is where most of the care goes.

### Sums with conditions: the three-line method

Most real questions do not hand you $a$, $d$ and $n$. They describe the terms by a condition, such as "multiples of 7
between 100 and 500". The method is always:

1. **Find the first and last terms** that meet the condition.
2. **Count the terms.** With first term $a$, last term $l$ and difference $d$, the number of terms is
   $n = \frac{l - a}{d} + 1$ (the number of steps, plus one: the fence-post idea again).
3. **Add**, with $S_n = \frac{n(a + l)}{2}$.

### Sums with "not": take away

"Add the numbers from 1 to 100 that are **not** multiples of 3" is easiest as: everything, minus the multiples of 3.
And "not a multiple of 3 **or** 5" needs one more idea. If you take away the multiples of 3 and then the multiples of
5, the multiples of 15 (like 15, 30, 45) have been taken away twice, so you must add them back once. Counting things
this way is called **inclusion and exclusion**; it lives in [Counting](../../counting/index.md).

## Worked examples

**1. The question from the start.** Add all the multiples of 7 between 100 and 500.

1. $100 \div 7 \approx 14.3$, so the first multiple above 100 is $7 \times 15 = 105$. $500 \div 7 \approx 71.4$, so
   the last below 500 is $7 \times 71 = 497$.
2. The terms are $7 \times 15, 7 \times 16, \ldots, 7 \times 71$: that is $71 - 15 + 1 = 57$ terms. (By the formula:
   $\frac{497 - 105}{7} + 1 = 56 + 1 = 57$.)
3. $S = \frac{57 \times (105 + 497)}{2} = \frac{57 \times 602}{2} = 57 \times 301 = 17\,157$.

**2. Finding $n$ from the sum.** How many terms of $3 + 7 + 11 + \cdots$ must be added to make 465?

Here $a = 3$ and $d = 4$, so

$$S_n = \frac{n}{2}\bigl[6 + 4(n - 1)\bigr] = \frac{n}{2}(4n + 2) = n(2n + 1).$$

Set $n(2n + 1) = 465$, that is $2n^2 + n - 465 = 0$. The quadratic formula gives

$$n = \frac{-1 \pm \sqrt{1 + 3720}}{4} = \frac{-1 \pm 61}{4},$$

so $n = 15$ (the other answer, $-15.5$, is not a number of terms). Check: $15 \times 31 = 465$. ✓

**3. A "not" sum.** Add the whole numbers from 1 to 100 that are divisible by neither 3 nor 5.

- All of them: $\frac{100 \times 101}{2} = 5050$.
- Multiples of 3 up to 100: $3, 6, \ldots, 99$, that is $3 \times (1 + 2 + \cdots + 33) = 3 \times 561 = 1683$.
- Multiples of 5: $5 \times (1 + \cdots + 20) = 5 \times 210 = 1050$.
- Multiples of 15 (removed twice, so add back once): $15 \times (1 + \cdots + 6) = 15 \times 21 = 315$.

$$5050 - 1683 - 1050 + 315 = 2632.$$

**4. A series with negative terms.** How many terms of $51 + 48 + 45 + \cdots$ add to exactly 0?

$a = 51$, $d = -3$: $S_n = \frac{n}{2}\bigl[102 - 3(n - 1)\bigr] = \frac{n}{2}(105 - 3n)$. This is 0 when
$105 - 3n = 0$, so $n = 35$. The 35th term is $51 + 34 \times (-3) = -51$. The picture makes sense: the terms run
from 51 down to $-51$, evenly spaced, so they cancel in pairs (51 with $-51$, 48 with $-48$, ...) and the middle term
is 0.

**5. From the sum back to the terms.** An arithmetic series has $S_{10} = 120$ and $S_{20} = 440$. Find $a$ and $d$.

$S_{10} = 5(2a + 9d) = 120$ gives $2a + 9d = 24$. $S_{20} = 10(2a + 19d) = 440$ gives $2a + 19d = 44$. Subtracting,
$10d = 20$, so $d = 2$ and then $2a = 24 - 18 = 6$, $a = 3$. The series is $3 + 5 + 7 + \cdots$. Check:
$S_{10} = \frac{10(3 + 21)}{2} = 120$. ✓

## Try it

1. Find $5 + 9 + 13 + \cdots + 101$.
2. Find the sum of all the multiples of 6 from 1 to 1000.
3. Show that the sum of the first $n$ even numbers, $2 + 4 + \cdots + 2n$, is $n(n + 1)$. Then find the sum of the
   first $n$ odd numbers by taking $n$ away from it.
4. An arithmetic series has $a = -8$ and $d = 3$. Find $S_{20}$.
5. How many terms of $2 + 5 + 8 + \cdots$ add to 155?
6. Find the sum of the whole numbers from 1 to 200 that are **not** multiples of 4.
7. Find the sum of all three-digit numbers (100 to 999).
8. The sum of the first $n$ terms of a sequence is $S_n = n^2 + 2n$ for every $n$. Explain why $t_n = S_n - S_{n-1}$,
   find a formula for $t_n$, and show that the sequence is arithmetic.

??? note "Answers"
    1. $a = 5$, $l = 101$, $d = 4$: $n = \frac{101 - 5}{4} + 1 = 25$. Sum $= \frac{25 \times 106}{2} =$ **1325**.
    2. First 6, last $6 \times 166 = 996$ (since $1000 \div 6 \approx 166.7$). $n = 166$. Sum
       $= \frac{166 \times (6 + 996)}{2} = 166 \times 501 =$ **83 166**.
    3. $2 + 4 + \cdots + 2n = 2(1 + 2 + \cdots + n) = 2 \times \frac{n(n+1)}{2} = n(n + 1)$. The odd numbers
       $1, 3, \ldots, 2n - 1$ are each one less than the even numbers $2, 4, \ldots, 2n$, so their sum is
       $n(n + 1) - n = n^2$. (The odd numbers make squares, as you saw in level 4.)
    4. $S_{20} = \frac{20}{2}\bigl[-16 + 19 \times 3\bigr] = 10 \times 41 =$ **410**.
    5. $S_n = \frac{n}{2}\bigl[4 + 3(n - 1)\bigr] = \frac{n(3n + 1)}{2} = 155$, so $3n^2 + n - 310 = 0$, and
       $n = \frac{-1 \pm \sqrt{1 + 3720}}{6} = \frac{-1 \pm 61}{6}$, giving **$n = 10$**. Check: $10 \times 31 \div 2 = 155$. ✓
    6. All: $\frac{200 \times 201}{2} = 20\,100$. Multiples of 4: $4(1 + \cdots + 50) = 4 \times 1275 = 5100$.
       Answer: $20\,100 - 5100 =$ **15 000**.
    7. $n = 999 - 100 + 1 = 900$ terms, sum $= \frac{900 \times (100 + 999)}{2} = 450 \times 1099 =$ **494 550**.
    8. $S_n$ is the first $n$ terms and $S_{n-1}$ is the first $n - 1$, so their difference is the $n$th term
       alone. $t_n = (n^2 + 2n) - \bigl((n - 1)^2 + 2(n - 1)\bigr) = n^2 + 2n - (n^2 - 1) = 2n + 1$ (for $n \ge 2$;
       also $t_1 = S_1 = 3 = 2 \times 1 + 1$). Consecutive terms differ by $(2n + 3) - (2n + 1) = 2$, a constant, so the
       sequence $3, 5, 7, \ldots$ is arithmetic.

## Common mistake

**Counting the terms as $\frac{l - a}{d}$.** That counts the steps, not the terms. From 105 to 497 in steps of 7
there are 56 steps but 57 terms. Always add 1, and if in doubt check with a tiny case: from 7 to 14 in steps of 7
is one step and two terms.

**Using the "edges" of the condition as terms.** "Between 100 and 500" does not make 100 or 500 terms unless they
meet the condition. The first multiple of 7 is 105, not 100.

## Where it leads

- Back: [Sigma notation](01-sigma-notation.md) · Next: [Infinite geometric series](03-infinite-geometric.md).
- [Level 7 page](index.md) · [Patterns topic page](../index.md)
- The first meeting with these sums: [Level 5: arithmetic sequences](../level-5/index.md).
- Counting with inclusion and exclusion: [Counting](../../counting/index.md). Solving the quadratic for $n$:
  [Algebra](../../algebra/index.md).
- In lesson 5 the same "write it twice" idea fails for squares, and you will need a new trick:
  [Sums of squares and cubes](05-squares-cubes.md).
