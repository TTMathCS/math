---
title: "Gauss's trick: adding an arithmetic sequence"
---

# Gauss's trick: adding an arithmetic sequence

*Patterns and sequences · level 5, lesson 3 of 6*

## A question to start

The story goes that a schoolteacher in Germany, more than two hundred years ago, wanted a quiet hour. He told his
class to add up all the whole numbers from 1 to 100. Almost at once, a small boy named Carl Friedrich Gauss put his
slate on the desk with one number on it: **5050**. He was right. (Gauss grew up to be one of the greatest
mathematicians who ever lived. The details of the story change with each telling, but the trick is real.)

How could anyone add a hundred numbers in a few seconds? And does the trick work for other lists, like
$3 + 7 + 11 + \cdots + 79$, or the seats in a theatre? It does, and you will see exactly why.

## The idea

### The trick: pair the ends

Write the sum once forwards and once backwards, one line under the other:

$$
\begin{aligned}
S &= \;\;1 + \;\;2 + \;\;3 + \cdots + \;98 + \;99 + 100\\
S &= 100 + \;99 + \;98 + \cdots + \;\;3 + \;\;2 + \;\;1
\end{aligned}
$$

Now add the two lines **column by column**. The first column is $1 + 100 = 101$. The second is $2 + 99 = 101$. The
third is $3 + 98 = 101$. Every column is 101! That is because as you move one column to the right, the top number
goes **up** by 1 and the bottom number goes **down** by 1, so their total never changes.

There are 100 columns, each worth 101, so the two lines together make

$$2S = 100 \times 101 = 10\,100, \qquad\text{so}\qquad S = 5050.$$

We counted every number twice (once in each line), which is why we halve at the end.

### The same trick as a picture

Draw $1 + 2 + 3 + 4 + 5$ as a staircase of squares (orange). Make a second copy, turn it upside down, and fit it on
top (blue). The two staircases make a rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 165" role="img" aria-label="An orange staircase of 1, 2, 3, 4, 5 squares and an upside-down blue copy fit together into a 5 by 6 rectangle">
  <rect x="40" y="20" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="40" y="40" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="40" y="60" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="40" y="80" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="40" y="100" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="40" y="120" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="60" y="20" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="60" y="40" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="60" y="60" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="60" y="80" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="60" y="100" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="60" y="120" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="80" y="20" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="80" y="40" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="80" y="60" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="80" y="80" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="80" y="100" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="80" y="120" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="100" y="20" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="100" y="40" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="100" y="60" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="100" y="80" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="100" y="100" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="100" y="120" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="20" width="20" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="40" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="60" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="80" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="100" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="120" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="158" font-size="12" text-anchor="middle" fill="currentColor">5 columns</text>
  <text x="26" y="84" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <text x="235" y="60" font-size="12" text-anchor="middle" fill="currentColor">orange: 1 + 2 + 3 + 4 + 5</text>
  <text x="235" y="82" font-size="12" text-anchor="middle" fill="currentColor">blue: 5 + 4 + 3 + 2 + 1</text>
  <text x="235" y="104" font-size="12" text-anchor="middle" fill="currentColor">together: 5 × 6 = 30</text>
  <text x="235" y="126" font-size="12" text-anchor="middle" fill="currentColor">so the sum is 15</text>
</svg>
</div>

Each column has one orange part and one blue part that together make 6 squares, because the orange column grows by
one as the blue shrinks by one. Five columns of 6 make 30 squares, and the orange half is $30 \div 2 = 15$. This is the
same picture you saw for [triangular numbers](../level-3/03-triangular-numbers.md) in level 3: the sum
$1 + 2 + \cdots + n$ is the $n$th triangular number,

$$1 + 2 + 3 + \cdots + n = \frac{n(n + 1)}{2}.$$

### Why it works for any arithmetic sequence

Nothing in the trick needed the numbers to go up by 1. Take any arithmetic sequence with first term $a$, common
difference $d$ and $n$ terms, and call the last term $l$ (so $l = t_n = a + (n - 1)d$). Write the sum both ways:

$$
\begin{aligned}
S_n &= a + (a + d) + (a + 2d) + \cdots + (l - d) + l\\
S_n &= l + (l - d) + (l - 2d) + \cdots + (a + d) + a
\end{aligned}
$$

In every column the top number is some $a + kd$ and the bottom number is $l - kd$ with the **same** $k$. Their total
is $(a + kd) + (l - kd) = a + l$: the $kd$'s cancel. So every one of the $n$ columns adds to $a + l$, which gives
$2S_n = n(a + l)$ and

$$S_n = \frac{n(a + l)}{2}.$$

In words: **the number of terms, times the average of the first and last term.** This is a lovely way to remember it.
Pairing the ends shows that the average of all the terms is the same as the average of the first and last, so the
sum is "how many" times "the average".

### The second formula

Often you know $a$, $d$ and $n$ but not the last term. Then put $l = a + (n - 1)d$ into the formula:

$$S_n = \frac{n\,\big(a + a + (n - 1)d\big)}{2} = \frac{n}{2}\big[\,2a + (n - 1)d\,\big].$$

Both formulas are the same fact. Use the first when you know the last term, the second when you know $d$.

### Odd numbers of terms

If there is an odd number of terms, the pairing leaves the middle term alone, paired with itself. That is fine: the
algebra above never needed $n$ to be even. It also gives a shortcut: with an odd number of terms, the **middle term
is the average**, so the sum is $n$ times the middle term. For example, $4 + 7 + 10 + 13 + 16$ has middle term 10, so
the sum is $5 \times 10 = 50$.

<figure class="play" data-play="seq" data-kind="arith"><span class="ai-tag">AI-created</span><figcaption><b>Add them all up.</b> The sum of n terms is n × (first + last) ÷ 2; check it below the bars.</figcaption></figure>

## Worked examples

**1. Gauss's sum, by formula.** $1 + 2 + \cdots + 100$: $n = 100$, $a = 1$, $l = 100$, so
$S = \dfrac{100 \times 101}{2} = 5050$.

**2. A sum where you must count the terms first.** Find $3 + 7 + 11 + \cdots + 79$.

- $a = 3$, $d = 4$. Number of terms: $3 + (n - 1) \times 4 = 79$ gives $n - 1 = 19$, so $n = 20$.
- $S_{20} = \dfrac{20 \times (3 + 79)}{2} = 10 \times 82 = 820$.

**3. A decreasing sequence with negative terms.** Find the sum of the first 30 terms of 50, 47, 44, ...

- $a = 50$, $d = -3$, $n = 30$. Use the second formula:
  $S_{30} = \dfrac{30}{2}\big[\,100 + 29 \times (-3)\,\big] = 15 \times (100 - 87) = 15 \times 13 = 195$.
- Sense check: the last term is $50 - 87 = -37$. The early terms are positive and the late ones negative, so they
  partly cancel, and a small total like 195 is believable.

**4. Working backwards from the sum.** How many terms of $4 + 7 + 10 + \cdots$ add up to exactly 1000?

- $S_n = \dfrac{n}{2}\big[\,8 + 3(n - 1)\,\big] = \dfrac{n(3n + 5)}{2}$.
- We need $n(3n + 5) = 2000$. Try values near the right size: $n = 25$ gives $25 \times 80 = 2000$. ✓
- So **25 terms**. The last one is $4 + 24 \times 3 = 76$, and indeed $\dfrac{25 \times (4 + 76)}{2} = 1000$.

**5. The sum of odd numbers.** In level 4 you saw with a picture that $1 + 3 + 5 + \cdots + (2n - 1) = n^2$. Gauss's
formula proves it in one line: $n$ terms, first 1, last $2n - 1$, so
$S = \dfrac{n(1 + 2n - 1)}{2} = \dfrac{n \times 2n}{2} = n^2$. ✓ For example, the 50 odd numbers from 1 to 99 add up
to $50^2 = 2500$.

## Try it

1. Find $1 + 2 + 3 + \cdots + 50$.
2. Find $2 + 4 + 6 + \cdots + 100$. How is it related to question 1?
3. Find the sum of the first 20 terms of 5, 9, 13, 17, ...
4. Find $100 + 95 + 90 + \cdots + 5$.
5. $1 + 2 + 3 + \cdots + n = 210$. Find $n$.
6. Find the sum of all the two-digit numbers (10 to 99).
7. Find the sum of all the multiples of 3 from 3 to 200.
8. Without adding them all, explain why $1 + 2 + \cdots + 100$ and $101 + 102 + \cdots + 200$ differ by exactly
   $100 \times 100$. Use it to find the second sum.

??? note "Answers"
    1. $\dfrac{50 \times 51}{2} = 1275$.
    2. 50 terms, first 2, last 100: $\dfrac{50 \times 102}{2} = 2550$. Each term is double a term of question 1, so the
       sum is double: $2 \times 1275 = 2550$. ✓
    3. $a = 5$, $d = 4$, $n = 20$: $S = 10 \times (10 + 19 \times 4) = 10 \times 86 = 860$.
    4. Terms: $100 + (n - 1)(-5) = 5$ gives $n - 1 = 19$, $n = 20$. $S = \dfrac{20 \times (100 + 5)}{2} = 1050$.
    5. $\dfrac{n(n + 1)}{2} = 210$, so $n(n + 1) = 420$. Two numbers next to each other that multiply to 420:
       $20 \times 21$. So $n = 20$.
    6. From 10 to 99 there are $99 - 10 + 1 = 90$ numbers. $S = \dfrac{90 \times (10 + 99)}{2} = 45 \times 109 = 4905$.
    7. The largest multiple of 3 up to 200 is 198, and $198 = 3 \times 66$, so there are 66 terms.
       $S = \dfrac{66 \times (3 + 198)}{2} = 33 \times 201 = 6633$.
    8. Pair them: $101$ is $1 + 100$, $102$ is $2 + 100$, ..., $200$ is $100 + 100$. Each of the 100 numbers in the
       second sum is 100 more than its partner in the first, so the second sum is $100 \times 100 = 10\,000$ more:
       $5050 + 10\,000 = 15\,050$. (By formula: $\dfrac{100 \times (101 + 200)}{2} = 15\,050$. ✓)

## Common mistake

**Forgetting to halve.** Pairing the ends gives $n(a + l)$, which counts every term **twice** (once in each line).
The sum is half of that. A sense check catches it: the sum of 100 numbers that average about 50 must be about 5000,
not 10 000.

**Guessing the number of terms.** In $3 + 7 + \cdots + 79$ the number of terms is not 79, not $79 \div 4$, but 20.
Always find $n$ from $a + (n - 1)d = l$ first.

## Where it leads

- Previous: [Working backwards](02-working-backwards.md) · Next: [Finite differences](04-finite-differences.md),
  for patterns whose differences are not constant.
- [Level 5 page](index.md) · [Patterns topic page](../index.md)
- Level 7 writes these sums with the symbol $\Sigma$ and handles harder cases, such as all multiples of 7 between
  100 and 500: [Level 7](../level-7/index.md).
- The triangular numbers $\dfrac{n(n + 1)}{2}$ also count handshakes and pairs: see
  [Counting](../../counting/index.md).
