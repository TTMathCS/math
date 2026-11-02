---
title: "Adding a geometric sequence"
---

# Adding a geometric sequence

*Patterns and sequences · level 6, lesson 4 of 6*

## A question to start

Back to the chessboard from lesson 2: 1 grain on the first square, 2 on the second, 4 on the third, doubling up to
the 64th square. How many grains are there **altogether**?

$$1 + 2 + 4 + 8 + \cdots + 2^{63} = \ ?$$

Adding 64 numbers, some of them 19 digits long, would take a while. Gauss's pairing trick from level 5 does not help,
because the pairs $1 + 2^{63}$ and $2 + 2^{62}$ are not equal. A different trick, just as short, does the whole sum in
one line. The answer is a number you have already met.

## The idea

### A picture first: each term is one more than all before it

Lay the doubling numbers end to end as bars:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 130" role="img" aria-label="A bar of length 16 above bars of length 1, 2, 4 and 8 laid end to end, which fall short of 16 by exactly 1">
  <rect x="30" y="25" width="256" height="24" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="42" font-size="12" text-anchor="middle" fill="currentColor">16</text>
  <rect x="30" y="65" width="16" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="46" y="65" width="32" height="24" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="78" y="65" width="64" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="142" y="65" width="128" height="24" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="270" y="65" width="16" height="24" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="38" y="82" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="62" y="82" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="110" y="82" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="206" y="82" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <text x="278" y="108" font-size="11" text-anchor="middle" fill="currentColor">1 short</text>
  <text x="150" y="122" font-size="12" text-anchor="middle" fill="currentColor">1 + 2 + 4 + 8 = 16 − 1 = 15</text>
</svg>
</div>

Why does it always fall short by exactly 1? Start with $1 + 1 = 2$. Add the 2: $2 + 2 = 4$. Add the 4: $4 + 4 = 8$.
Add the 8: $8 + 8 = 16$. If you had **one extra 1** at the start, each new term would double the running total. Without
that extra 1, the total is always one less than the next power of 2:

$$1 + 2 + 4 + \cdots + 2^{n-1} = 2^n - 1.$$

So the chessboard holds $2^{64} - 1$ grains. Before computing it, here is a method that works for **every** geometric
sequence, not just doubling.

### The trick: multiply by r and subtract

Let $S_n$ be the sum of the first $n$ terms of a geometric sequence with first term $a$ and ratio $r$:

$$S_n = a + ar + ar^2 + \cdots + ar^{n-1}.$$

Multiply **every** term by $r$. Each term turns into the next one, and a new term appears at the end:

$$rS_n = ar + ar^2 + ar^3 + \cdots + ar^{n}.$$

Now line the two up and subtract the first from the second:

$$
\begin{aligned}
rS_n &= \phantom{a + {}} ar + ar^2 + \cdots + ar^{n-1} + ar^n\\
S_n &= a + ar + ar^2 + \cdots + ar^{n-1}\\
rS_n - S_n &= -a \phantom{{}+ ar + ar^2 + \cdots + ar^{n-1}} + ar^n
\end{aligned}
$$

Everything in the middle appears in both lines and cancels. Only the last term of the top line and the first term of
the bottom line survive. So $(r - 1)S_n = ar^n - a = a(r^n - 1)$, and dividing by $r - 1$:

$$S_n = \frac{a(r^n - 1)}{r - 1} \qquad (r \ne 1)$$

That is the whole proof. The idea is the same as Gauss's in spirit (write the sum twice, cleverly, and combine the
two lines) but the combining is a **subtraction** of a **shifted** copy, because shifting is what multiplying by $r$
does to a geometric sequence.

### Two forms, and the case r = 1

Multiplying the top and bottom of the fraction by $-1$ gives the same formula in another form:

$$S_n = \frac{a(1 - r^n)}{1 - r}.$$

They are equal; use whichever keeps the numbers positive. When $r > 1$ the first form is neater; when $r$ is between 0
and 1 the second is.

We had to divide by $r - 1$, so the formula does not work for $r = 1$. But that case is easy: every term is $a$, so
$S_n = na$.

### Checking the formula on the chessboard

$a = 1$, $r = 2$, $n = 64$:

$$S_{64} = \frac{1 \times (2^{64} - 1)}{2 - 1} = 2^{64} - 1 = 18\,446\,744\,073\,709\,551\,615.$$

About $1.8 \times 10^{19}$ grains, matching the bar picture. With roughly 40 000 to 50 000 grains to a kilogram, that
is several hundred billion tonnes of rice, hundreds of years of the whole world's harvest. Notice that the total is
only about **twice the last square**. With doubling, the last term is about half of everything.

### Halves that never reach 1

Now take $r = \tfrac12$: $\tfrac12 + \tfrac14 + \tfrac18 + \cdots + \tfrac{1}{2^n}$. Here $a = \tfrac12$, and the
second form gives

$$S_n = \frac{\tfrac12\left(1 - \tfrac{1}{2^n}\right)}{1 - \tfrac12} = 1 - \frac{1}{2^n}.$$

Picture a chocolate bar: eat half, then half of what is left, then half again. After $n$ bites you have eaten all but
$\tfrac{1}{2^n}$ of it. The sum creeps up towards 1 but never gets there with a finite number of terms. What happens
if you add **forever** is a question for [level 7](../level-7/index.md) and for the [Infinity](../../infinity/index.md)
topic.

## Worked examples

**1. A doubling sum.** $3 + 6 + 12 + \cdots$ (10 terms).

$a = 3$, $r = 2$, $n = 10$: $S_{10} = \dfrac{3(2^{10} - 1)}{2 - 1} = 3 \times 1023 = 3069$.

**2. A halving sum.** $\tfrac12 + \tfrac14 + \cdots + \tfrac{1}{1024}$ (10 terms).

$S_{10} = 1 - \dfrac{1}{2^{10}} = 1 - \dfrac{1}{1024} = \dfrac{1023}{1024}$.

**3. Alternating signs.** $2 - 6 + 18 - 54 + 162 - 486$.

$a = 2$, $r = -3$, $n = 6$: $S_6 = \dfrac{2\big((-3)^6 - 1\big)}{-3 - 1} = \dfrac{2 \times 728}{-4} = -364$.

Check by adding directly: $2 - 6 = -4$, $+18 = 14$, $-54 = -40$, $+162 = 122$, $-486 = -364$. ✓

**4. A phone tree.** A coach calls 3 players. Each of them calls 3 more, and so on, for 7 rounds of calls in all
(counting the coach as round 1). How many people are in the tree?

The rounds have 1, 3, 9, ..., $3^6$ people: $S_7 = \dfrac{3^7 - 1}{3 - 1} = \dfrac{2186}{2} = 1093$.

**5. How many terms?** How many terms of $5 + 10 + 20 + \cdots$ are needed for the sum to pass 10 000?

$S_n = 5(2^n - 1) > 10\,000$ means $2^n - 1 > 2000$, so $2^n > 2001$. $2^{10} = 1024$ is too small, $2^{11} = 2048$
works: **11 terms** (sum 10 235; 10 terms give only 5115).

## Try it

1. Find $1 + 3 + 9 + \cdots + 3^7$ (8 terms).
2. Find $4 + 8 + 16 + \cdots$ (8 terms).
3. Find $1 + \tfrac13 + \tfrac19 + \tfrac{1}{27} + \tfrac{1}{81}$ as a fraction.
4. Find $5 - 10 + 20 - 40 + 80 - 160$ with the formula, and check by adding.
5. You put 1 dollar in a jar in week 1, 2 dollars in week 2, 4 dollars in week 3, doubling each week. How much is in
   the jar after 12 weeks?
6. In binary (base 2), $2^n - 1$ is written as $n$ ones: $111_2 = 7$, $1111_2 = 15$. Use the doubling sum to explain
   why.
7. On how many squares of the chessboard (counting from the first) must you put rice before the total passes a
   million grains?
8. You save 1000 dollars at the start of every year, and each deposit grows by 5% a year. After 10 years the first
   deposit is worth $1000 \times 1.05^{10}$, the second $1000 \times 1.05^9$, ..., the last $1000 \times 1.05$.
   Find the total, to the nearest dollar.

??? note "Answers"
    1. $a = 1$, $r = 3$, $n = 8$: $\dfrac{3^8 - 1}{3 - 1} = \dfrac{6560}{2} = 3280$.
    2. $\dfrac{4(2^8 - 1)}{2 - 1} = 4 \times 255 = 1020$.
    3. $a = 1$, $r = \tfrac13$, $n = 5$: $\dfrac{1 - \frac{1}{243}}{1 - \frac13} = \dfrac{242}{243} \times \dfrac32 = \dfrac{121}{81}$.
    4. $a = 5$, $r = -2$, $n = 6$: $\dfrac{5\big((-2)^6 - 1\big)}{-2 - 1} = \dfrac{5 \times 63}{-3} = -105$. Adding:
       $5 - 10 = -5$, $+20 = 15$, $-40 = -25$, $+80 = 55$, $-160 = -105$. ✓
    5. $1 + 2 + \cdots + 2^{11} = 2^{12} - 1 = 4095$ dollars. (The deposit in week 12 alone is 2048 dollars.)
    6. In binary, the digits stand for $1, 2, 4, 8, \ldots$ So $n$ ones mean $1 + 2 + 4 + \cdots + 2^{n-1}$, which
       is $2^n - 1$. It is like $999 = 1000 - 1$ in base 10.
    7. After $n$ squares the total is $2^n - 1$. We need $2^n - 1 > 1\,000\,000$. $2^{19} - 1 = 524\,287$ is short;
       $2^{20} - 1 = 1\,048\,575$ passes. **20 squares**.
    8. Reading from the last deposit up: $a = 1000 \times 1.05 = 1050$, $r = 1.05$, $n = 10$.
       $S = \dfrac{1050(1.05^{10} - 1)}{0.05} \approx 13\,207$ dollars. (You put in 10 000 dollars; the rest is
       growth.)

## Common mistake

**Using $n - 1$ in the sum formula.** The general term has $r^{n-1}$, but the sum formula has $r^n$: the subtraction
left over the term $ar^n$, one beyond the last term. Check with a small case: $1 + 2 + 4$ has $n = 3$ and
$2^3 - 1 = 7$. ✓

**Dropping the brackets with a negative ratio.** $(-3)^6 = 729$, but $-3^6 = -729$ (the power is done before the
minus sign). Always put a negative ratio in brackets.

## Where it leads

- Previous: [Finding a and r](03-finding-a-and-r.md) · Next: [Recursive sequences](05-recursive-sequences.md).
- [Level 6 page](index.md) · [Patterns topic page](../index.md)
- The arithmetic version: [Gauss's trick](../level-5/03-gauss-trick.md) in level 5.
- What happens when you add infinitely many halves: [Level 7](../level-7/index.md) (the formula) and
  [Infinity](../../infinity/index.md) (the puzzles, like Zeno and 0.999...).
- Base 2 and binary numbers: [Numbers](../../numbers/index.md).
- On the U of T shelf, geometric series are the first series studied: [MAT137 Unit 13](../../../uoft/MAT137/unit13.md).
