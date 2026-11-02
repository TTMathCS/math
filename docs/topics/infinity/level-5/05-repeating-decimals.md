---
title: "Repeating decimals and limits"
---

# Repeating decimals and limits

*Infinity and strange math · level 5, lesson 5 of 6*

## A question to start

Type $1 \div 3$ into a calculator. It shows something like 0.3333333333, and then it runs out of screen. We write

$$\frac13 = 0.333\ldots$$

with the dots meaning "threes forever". But is that equals sign really exact? Nobody can write infinitely many 3s.
Every string of 3s you could ever write down, however long, is a little **less** than $\frac13$.

In [level 4](../level-4/index.md) you met three arguments that $0.999\ldots = 1$, and maybe a nagging feeling that it
should be "just a tiny bit less". This lesson answers the deeper question underneath: **what does an endless decimal
actually mean?** Once that is clear, both equals signs are exact, and the nagging feeling has an explanation.

## The idea

### A decimal is a sum

Each digit of a decimal stands for a number of tenths, hundredths, thousandths and so on (place value, from
[Numbers](../../numbers/index.md)):

$$0.47 = \frac{4}{10} + \frac{7}{100}, \qquad 0.333 = \frac{3}{10} + \frac{3}{100} + \frac{3}{1000}.$$

A decimal that stops is an ordinary, finite sum. A decimal that never stops is an **endless** sum:

$$0.333\ldots = \frac{3}{10} + \frac{3}{100} + \frac{3}{1000} + \frac{3}{10000} + \cdots$$

And in [lesson 2](02-zeno-answered.md) we agreed what an endless sum means: the **limit of its partial sums**. For a
decimal, the partial sums are what you get by chopping the decimal off after 1 digit, 2 digits, 3 digits, ...:

$$0.3,\quad 0.33,\quad 0.333,\quad 0.3333,\quad \ldots$$

These chopped-off decimals are called **truncations** (to truncate is to cut short). So here is the definition:

> An endless decimal **means** the limit of its truncations.

The dots in $0.333\ldots$ are not a promise to keep writing. They name one number: the number that the truncations
close in on.

### 0.333... is exactly 1/3

Now we can **prove** the equals sign. How far is each truncation from $\frac13$?

| Truncation | 0.3 | 0.33 | 0.333 | 0.3333 |
| --- | --- | --- | --- | --- |
| Gap to $\frac13$ | $\frac{1}{30}$ | $\frac{1}{300}$ | $\frac{1}{3000}$ | $\frac{1}{30000}$ |

Check the first one: $\frac13 - \frac{3}{10} = \frac{10}{30} - \frac{9}{30} = \frac{1}{30}$. In general, with $n$
threes the gap is

$$\frac13 - 0.\underbrace{33\ldots3}_{n} = \frac{1}{3 \times 10^n}.$$

Here is why: $0.\underbrace{99\ldots9}_{n}$ is $1 - \frac{1}{10^n}$ (for example $0.999 = 1 - 0.001$), and dividing
everything by 3 turns $0.99\ldots9$ into $0.33\ldots3$, turns 1 into $\frac13$, and turns the gap $\frac{1}{10^n}$
into $\frac{1}{3 \times 10^n}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 115" role="img" aria-label="A zoomed number line from 0.3 to 0.34: dots at 0.3, 0.33 and 0.333 creep up towards one third, which sits just to the right of 0.333; a shaded strip from 0.33 to 0.334 shows where all later terms land">
  <rect x="325.0" y="40" width="38.0" height="30" fill="#7ccf9a" fill-opacity="0.3"/>
  <line x1="30.0" y1="55.0" x2="430.0" y2="55.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40.0" y1="48.0" x2="40.0" y2="62.0" stroke="currentColor" stroke-width="1"/>
  <circle cx="40.0" cy="55.0" r="4" fill="#eea66f"/>
  <text x="40.0" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">0.3</text>
  <line x1="325.0" y1="48.0" x2="325.0" y2="62.0" stroke="currentColor" stroke-width="1"/>
  <circle cx="325.0" cy="55.0" r="4" fill="#eea66f"/>
  <text x="325.0" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">0.33</text>
  <line x1="353.5" y1="48.0" x2="353.5" y2="62.0" stroke="currentColor" stroke-width="1"/>
  <circle cx="353.5" cy="55.0" r="4" fill="#eea66f"/>
  <text x="353.5" y="30.0" font-size="12" text-anchor="middle" fill="currentColor">0.333</text>
  <line x1="356.7" y1="48.0" x2="356.7" y2="62.0" stroke="currentColor" stroke-width="1"/>
  <circle cx="356.7" cy="55.0" r="4" fill="#9cc9ea"/>
  <text x="356.7" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">1/3</text>
  <line x1="420.0" y1="48.0" x2="420.0" y2="62.0" stroke="currentColor" stroke-width="1"/>
  <text x="420.0" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">0.34</text>
  <text x="230.0" y="105.0" font-size="11" text-anchor="middle" fill="currentColor">0.3333 and 0.33333 sit even closer to 1/3, inside the shaded strip</text>
</svg>
</div>

The gap shrinks to 0, ten times smaller with every extra digit. So the truncations get as close as you like to
$\frac13$, and stay that close: their limit is $\frac13$. Since $0.333\ldots$ **means** that limit,

$$0.333\ldots = \frac13 \quad\text{exactly}.$$

No single truncation equals $\frac13$. The endless decimal does.

### 0.999... is exactly 1

The same reasoning, with nines. The truncations are $0.9, 0.99, 0.999, \ldots$, and the gap to 1 after $n$ digits is
$\frac{1}{10^n}$. You saw in [lesson 1](01-settling-sequences.md) that this sequence has limit 1. So

$$0.999\ldots = 1 \quad\text{exactly}.$$

Why does it feel wrong? Because we picture the **process**, the truncations, each one falling short. Every
truncation really is less than 1. But $0.999\ldots$ is not any of the truncations. It is the number they are heading
for, and that number is 1. The feeling "it never quite gets there" is true of the sequence and false of its limit.

Here is the same point as a challenge. If $0.999\ldots$ were less than 1, the gap $1 - 0.999\ldots$ would be some
positive number, say $g$. But the gap is smaller than $\frac{1}{10^n}$ for every $n$ (each truncation is below
$0.999\ldots$, and already within $\frac1{10^n}$ of 1). A positive number $g$ cannot be smaller than $\frac{1}{10}$,
$\frac{1}{100}$, $\frac{1}{1000}$, and every one of them: some $\frac{1}{10^n}$ is smaller than $g$. So the gap must be
0.

### The 10x − x trick, made honest

You may have learned this trick: let $x = 0.999\ldots$; then $10x = 9.999\ldots$; subtract, and the endless tails
cancel, leaving $9x = 9$, so $x = 1$.

It gives the right answer, but it quietly does arithmetic with endless decimals ("multiply by 10", "subtract") before
we said what they mean. Limits make it honest. Do the trick on the truncation $x_n$ with $n$ nines instead:

$$10x_n - x_n = 9.\underbrace{9\ldots9}_{n-1} - 0.\underbrace{9\ldots9}_{n} = 9 - \frac{9}{10^n}.$$

(For $n = 3$: $9.99 - 0.999 = 8.991 = 9 - 0.009$. ✓) So $9x_n = 9 - \frac{9}{10^n}$, which tends to 9. And
multiplying a sequence by a fixed number multiplies its limit by that number, so $9x_n$ tends to $9 \times$ (the
limit of $x_n$). Therefore $9 \times 0.999\ldots = 9$, and $0.999\ldots = 1$. The trick was right all along; limits
explain **why** it is allowed.

### Every repeating decimal is a fraction

The same idea turns any repeating decimal into a fraction. A bar over digits means "repeat these forever", so
$0.\overline{27} = 0.272727\ldots$

A block of $k$ repeating digits, read as a whole number $D$, gives an endless sum where each term is the one before
divided by $10^k$:

$$0.\overline{27} = \frac{27}{100} + \frac{27}{100^2} + \frac{27}{100^3} + \cdots$$

This is a geometric series (lesson 2), and its sum is $\dfrac{27/100}{1 - 1/100} = \dfrac{27}{99} = \dfrac{3}{11}$.
In general:

$$0.\overline{D} = \frac{D}{10^k - 1} = \frac{D}{99\ldots9} \quad (k \text{ nines}).$$

So $0.\overline{3} = \frac39 = \frac13$, $0.\overline{9} = \frac99 = 1$ (again!), and
$0.\overline{142857} = \frac{142857}{999999} = \frac17$.

The reverse is also true: every fraction gives a decimal that either stops or repeats, because long division can only
produce finitely many different remainders, so a remainder must come round again. That is proved in
[Repeating decimals to fractions](../../numbers/level-6/01-repeating-decimals.md). Together: **the fractions are exactly
the decimals that stop or repeat.**

### Two names for one number

Since $0.999\ldots = 1$, any decimal that **stops** has a twin that ends in endless 9s:

$$0.5 = 0.4999\ldots, \qquad 2.37 = 2.36999\ldots, \qquad 1 = 0.999\ldots$$

(Check the first: $0.4999\ldots = 0.4 + 0.0999\ldots = 0.4 + 0.1 \times 0.999\ldots = 0.4 + 0.1 = 0.5$.) Decimals that
do not stop have only one name. This small fact matters later: in [level 7](../level-7/index.md), Cantor's famous
argument has to dodge these twins.

### Decimals that never repeat

$\pi = 3.14159\ldots$ and $\sqrt2 = 1.41421\ldots$ have decimals that go on forever **without** repeating. They are
still limits of their truncations: $1, 1.4, 1.41, 1.414, 1.4142, \ldots$ closes in on $\sqrt2$. Every truncation is a
fraction ($1.414 = \frac{1414}{1000}$), but the limit is not a fraction ([why $\sqrt2$ is
irrational](../../numbers/level-6/03-root-two-irrational.md)). So limits of fractions can land on numbers that are not
fractions. Filling in all such limits is exactly how mathematicians build the **real numbers**, the complete number
line ([The real numbers](../../numbers/level-6/05-real-numbers.md)).

## Worked examples

**1. A two-digit block.** Write $0.\overline{12}$ as a fraction in lowest terms.

1. The block is 12, with 2 digits, so $0.\overline{12} = \dfrac{12}{99}$.
2. Both are divisible by 3: $\dfrac{12}{99} = \dfrac{4}{33}$.
3. Check: $4 \div 33 = 0.121212\ldots$ ✓

**2. A delayed repeat.** Write $0.1\overline{6} = 0.1666\ldots$ as a fraction.

1. Split off the part before the repeat: $0.1666\ldots = 0.1 + 0.0666\ldots$
2. $0.0666\ldots$ is $\frac{1}{10}$ of $0.666\ldots = \frac69 = \frac23$, so it is $\frac{2}{30} = \frac{1}{15}$.
3. Add: $\dfrac{1}{10} + \dfrac{1}{15} = \dfrac{3}{30} + \dfrac{2}{30} = \dfrac{5}{30} = \dfrac16$.
4. Check: $1 \div 6 = 0.1666\ldots$ ✓

**3. How good is a truncation?** How far is the truncation 0.142857 from $\frac17$?

1. $\dfrac17 - \dfrac{142857}{1000000} = \dfrac{1000000 - 7 \times 142857}{7000000} = \dfrac{1000000 - 999999}{7000000}$.
2. That is $\dfrac{1}{7000000}$, about 0.00000014. Six digits already get within a seven-millionth, and each further
   block of six digits makes the gap a million times smaller.

**4. Why 1/3 needs infinitely many digits.** Could $\frac13$ be a decimal that stops?

A decimal that stops after $n$ digits is a whole number over $10^n$, like $0.375 = \frac{375}{1000}$. If
$\frac13 = \frac{N}{10^n}$, then $10^n = 3N$, so $10^n$ would be a multiple of 3. But $10^n = 2^n \times 5^n$ has no
factor 3 (its digits add to 1, and multiples of 3 have digit sums that are multiples of 3). So no stopping decimal
equals $\frac13$; it needs the endless one, and that endless one is a limit.

## Try it

1. Write $0.777\ldots$ as a fraction.
2. Write $0.\overline{45}$ as a fraction in lowest terms.
3. Write $0.\overline{123}$ as a fraction in lowest terms.
4. Write $2.\overline{3} = 2.333\ldots$ as a fraction.
5. Write $0.8\overline{3} = 0.8333\ldots$ as a fraction.
6. The truncation of $0.666\ldots$ with $n$ sixes is $\frac{2}{3 \times 10^n}$ below $\frac23$. How many sixes do you
   need for the gap to be less than one millionth?
7. Write 0.25 as a decimal that ends in endless 9s, and check your answer.
8. Explain why $\frac17$ cannot be written as a decimal that stops, but $\frac18$ can.

??? note "Answers"
    1. One repeating digit: $0.\overline{7} = \dfrac79$.
    2. $\dfrac{45}{99} = \dfrac{5}{11}$ (dividing by 9). Check: $5 \div 11 = 0.4545\ldots$ ✓
    3. $\dfrac{123}{999} = \dfrac{41}{333}$ (dividing by 3; 41 is prime and does not divide 333, so this is lowest
       terms).
    4. $2 + 0.\overline{3} = 2 + \dfrac13 = \dfrac73$.
    5. $0.8 + 0.0333\ldots = \dfrac{8}{10} + \dfrac{1}{10} \times \dfrac13 = \dfrac{24}{30} + \dfrac{1}{30} = \dfrac{25}{30} = \dfrac56$.
       Check: $5 \div 6 = 0.8333\ldots$ ✓
    6. We need $\dfrac{2}{3 \times 10^n} < \dfrac{1}{1000000}$. With $n = 5$ the gap is $\frac{2}{300000} \approx 0.0000067$,
       too big. With $n = 6$ it is $\frac{2}{3000000} \approx 0.00000067$, small enough. So **6 sixes**.
    7. $0.25 = 0.24999\ldots$ Check: $0.24999\ldots = 0.24 + 0.00999\ldots = 0.24 + 0.01 \times 0.999\ldots = 0.24 + 0.01 = 0.25$.
       ✓
    8. A stopping decimal is $\frac{N}{10^n}$, and $10^n = 2^n \times 5^n$ has only the prime factors 2 and 5. If
       $\frac17 = \frac{N}{10^n}$ then $10^n = 7N$, a multiple of 7, which is impossible. But
       $\frac18 = \frac{125}{1000} = 0.125$, because $8 = 2^3$ divides $1000$. (In general, a fraction in lowest
       terms stops exactly when its bottom has no prime factors other than 2 and 5.)

## Common mistake

**"0.999... is the closest number to 1, but not 1."** There is no "closest number to 1" below it: for any number
below 1, their average is closer still. And $0.999\ldots$ is not a moving target creeping up on 1; it is the limit of
the truncations, which is 1 itself.

**Doing the 10x − x trick on a decimal that does not repeat, or that does not exist.** The trick works for repeating
decimals because they really are limits. Someone who tries it on "$\ldots999$" (nines going forever to the **left**)
gets $x = -1$, which is nonsense, because that string is not the limit of anything: its truncations 9, 99, 999, ...
grow without end.

## Where it leads

- Back: [Approaching asymptotes](04-approaching-asymptotes.md) · Next: [Paradoxes of the infinite](06-paradoxes.md)
- [Level 5 page](index.md) · [Infinity topic page](../index.md)
- Fractions to decimals by long division, and why they repeat:
  [Repeating decimals to fractions](../../numbers/level-6/01-repeating-decimals.md) in Numbers. Geometric series:
  [Patterns level 7](../../patterns/level-7/03-infinite-geometric.md).
- Decimals with only 9s at the end come back in Cantor's diagonal argument: [level 7](../level-7/index.md).
- On the U of T shelf, the real numbers built with limits and least upper bounds:
  [MAT158 Unit 2: real numbers and least upper bounds](../../../uoft/MAT158H1/unit02.md).
