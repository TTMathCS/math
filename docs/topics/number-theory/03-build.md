---
title: "Build: Prime factors, GCD and Euclid's algorithm"
---

# Build: Prime factors, GCD and Euclid's algorithm

*Number theory · step 3 of 5*

## A question to start

A garden is 84 metres long and 60 metres wide. You want to cut it into square plots, all the same size, with no
ground left over, and you want the squares to be **as big as possible**. How long is each side?

The side has to divide 84 exactly and divide 60 exactly. Lots of numbers do that: 1, 2, 3, 4, 6 and 12. The biggest
is 12, so the plots are 12 m by 12 m, and there are 7 × 5 = 35 of them. On this page you will learn three ways to
find that "biggest shared factor", including one that is more than 2,000 years old and still runs inside computers
today.

## The idea

### Breaking a number into primes

Any composite number can be split into two smaller factors. If either of those is composite, split it again. Keep
going until every piece is prime. Drawing it as a **factor tree** keeps track:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="Factor tree: 360 splits into 36 and 10; 36 into 6 and 6; each 6 into 2 and 3; 10 into 2 and 5">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="210" y1="28" x2="130" y2="62"/><line x1="210" y1="28" x2="300" y2="62"/>
    <line x1="130" y1="78" x2="80" y2="112"/><line x1="130" y1="78" x2="180" y2="112"/>
    <line x1="300" y1="78" x2="270" y2="112"/><line x1="300" y1="78" x2="330" y2="112"/>
    <line x1="80" y1="128" x2="55" y2="158"/><line x1="80" y1="128" x2="105" y2="158"/>
    <line x1="180" y1="128" x2="155" y2="158"/><line x1="180" y1="128" x2="205" y2="158"/>
  </g>
  <g font-size="16" fill="currentColor" text-anchor="middle">
    <text x="210" y="22">360</text>
    <text x="130" y="76">36</text><text x="300" y="76">10</text>
    <text x="80" y="126">6</text><text x="180" y="126">6</text>
  </g>
  <g fill="#7ccf9a"><circle cx="270" cy="120" r="13"/><circle cx="330" cy="120" r="13"/>
    <circle cx="55" cy="170" r="13"/><circle cx="105" cy="170" r="13"/>
    <circle cx="155" cy="170" r="13"/><circle cx="205" cy="170" r="13"/></g>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="270" y="125">2</text><text x="330" y="125">5</text>
    <text x="55" y="175">2</text><text x="105" y="175">3</text><text x="155" y="175">2</text><text x="205" y="175">3</text>
  </g>
</svg>
</div>

The green leaves are the primes: 2, 3, 2, 3, 2, 5. Sorted, 360 = 2 × 2 × 2 × 3 × 3 × 5. Repeated factors are
written with a small raised number called a **power** or **exponent**: $2^3$ means 2 × 2 × 2. So

$$360 = 2^3 \times 3^2 \times 5.$$

This is the **prime factorization** of 360.

### Every number has exactly one

Try a different first split: 360 = 8 × 45 = (2 × 2 × 2) × (3 × 3 × 5). The same primes come out. That is no
accident. The **Fundamental Theorem of Arithmetic** says:

> Every whole number bigger than 1 can be written as a product of primes in **exactly one way**, apart from the
> order of the factors.

Primes are the atoms of multiplication: everything is built from them, and in only one way. This is also why 1 is
not called prime. If it were, 6 could be written as 2 × 3, or 1 × 2 × 3, or 1 × 1 × 2 × 3, and "exactly one way"
would be false.

### The greatest common divisor

A **common divisor** of two numbers divides both of them. The biggest one is the **greatest common divisor**, or
**GCD**. (Some books call it the *highest common factor*, HCF.) We write $\gcd(84, 60) = 12$.

**Method 1: list the factors.** Factors of 84: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84. Factors of 60: 1, 2, 3, 4,
5, 6, 10, 12, 15, 20, 30, 60. The biggest number in both lists is 12. This is fine for small numbers but slow for
big ones.

**Method 2: use the prime factorizations.** Line them up:

$$84 = 2^2 \times 3 \times 7, \qquad 60 = 2^2 \times 3 \times 5.$$

A common divisor can only use primes that both numbers have, and no more copies than either one has. So take each
shared prime with the **smaller** power: $2^2 \times 3 = 12$.

### The least common multiple

The **least common multiple**, or **LCM**, is the smallest number that is a multiple of both. Two lighthouses flash
every 12 seconds and every 18 seconds, and they flash together right now. When do they next flash together? The
multiples of 12 are 12, 24, **36**, 48, ... and the multiples of 18 are 18, **36**, 54, ... so after 36 seconds:
$\operatorname{lcm}(12, 18) = 36$.

With prime factorizations, take **every** prime that appears in either number, with the **larger** power:

$$\operatorname{lcm}(84, 60) = 2^2 \times 3 \times 5 \times 7 = 420.$$

There is a neat link between the two. For any two whole numbers,

$$\gcd(a, b) \times \operatorname{lcm}(a, b) = a \times b.$$

Check: 12 × 420 = 5040 and 84 × 60 = 5040. (Each prime's smaller power goes into the GCD and its larger power into
the LCM, so between them they use every factor exactly once.)

### Euclid's algorithm

Factorizing huge numbers is very hard, even for computers. Luckily there is a way to find a GCD **without**
factorizing. Euclid of Alexandria wrote it down in his book the *Elements* around 300 BC. An **algorithm** is a
recipe of steps that always ends with the answer.

The key fact: **if a number divides both $a$ and $b$, it also divides $a - b$.** (If $a$ and $b$ are both made of
7s, so is what is left when you take one from the other.) So $a$ and $b$ have exactly the same common divisors as
$b$ and $a - b$. Taking $b$ away as many times as possible leaves the **remainder** when $a$ is divided by $b$. So:

> To find $\gcd(a, b)$: divide $a$ by $b$ and keep the remainder $r$. Then $\gcd(a, b) = \gcd(b, r)$. Repeat with the
> smaller pair until the remainder is 0. The last remainder that was not 0 is the GCD.

## Worked examples

**1. The garden, by Euclid.** Find $\gcd(84, 60)$.

- 84 = 1 × 60 + **24**. So $\gcd(84, 60) = \gcd(60, 24)$.
- 60 = 2 × 24 + **12**. So it equals $\gcd(24, 12)$.
- 24 = 2 × 12 + **0**. Remainder 0: stop.

The last non-zero remainder is **12**. Same answer as the lists, in three lines.

**2. Bigger numbers.** Find $\gcd(1071, 462)$.

- 1071 = 2 × 462 + 147
- 462 = 3 × 147 + 21
- 147 = 7 × 21 + 0

So $\gcd(1071, 462) = 21$. Check: 1071 = 21 × 51 and 462 = 21 × 22, and 51 and 22 share no factor except 1.

**3. Simplifying a fraction.** To write $\dfrac{462}{1071}$ in lowest terms, divide top and bottom by the GCD:

$$\frac{462}{1071} = \frac{462 \div 21}{1071 \div 21} = \frac{22}{51}.$$

## Try it

1. Write the prime factorization of 252, using powers.
2. Find $\gcd(18, 24)$ and $\operatorname{lcm}(18, 24)$.
3. Use Euclid's algorithm to find $\gcd(391, 299)$.
4. One bus leaves every 15 minutes and another every 20 minutes. Both leave at 8:00. When do they next leave
   together?
5. Write $\dfrac{84}{120}$ in lowest terms.
6. Two numbers have GCD 6 and LCM 72. One of them is 18. What is the other?

??? note "Answers"
    1. 252 = 2 × 126 = 2 × 2 × 63 = 2 × 2 × 3 × 21 = 2 × 2 × 3 × 3 × 7, so $252 = 2^2 \times 3^2 \times 7$.
    2. $18 = 2 \times 3^2$ and $24 = 2^3 \times 3$. GCD: smaller powers, $2 \times 3 = 6$. LCM: larger powers,
       $2^3 \times 3^2 = 72$. Check: 6 × 72 = 432 = 18 × 24.
    3. 391 = 1 × 299 + 92; 299 = 3 × 92 + 23; 92 = 4 × 23 + 0. So the GCD is **23**. (In fact 391 = 17 × 23 and
       299 = 13 × 23.)
    4. $\operatorname{lcm}(15, 20) = 60$ minutes, so at **9:00**. ($15 = 3 \times 5$, $20 = 2^2 \times 5$, LCM
       $= 2^2 \times 3 \times 5 = 60$.)
    5. $\gcd(84, 120) = 12$, so $\dfrac{84}{120} = \dfrac{7}{10}$.
    6. GCD × LCM = product, so the other number is $\dfrac{6 \times 72}{18} = 24$. Check: $\gcd(18, 24) = 6$ and
       $\operatorname{lcm}(18, 24) = 72$, as in question 2.

## Common mistake

**Mixing up GCD and LCM.** The GCD divides both numbers, so it can never be bigger than the smaller one. The LCM is a
multiple of both, so it can never be smaller than the bigger one. For 18 and 24, an "answer" of 72 for the GCD or 6
for the LCM fails this quick check at once. With prime factorizations: **GCD takes the smaller powers of shared
primes, LCM takes the larger powers of all primes.**

## Where it leads

- Next step: [Master: clock arithmetic](04-master.md), where remainders become numbers you can add and multiply.
- Back a step: [Explore: factors, multiples and divisibility tricks](02-explore.md)
- Counting the factors of a number from its prime factorization is a counting puzzle: see
  [Counting and combinations](../counting/02-explore.md).
- Euclid's algorithm is one of the oldest algorithms still in daily use: a version of it helps make the keys that
  keep messages secret online. See [cryptography.akadian.ca](https://cryptography.akadian.ca/).
