---
title: "Perfect, abundant and deficient numbers"
---

# Perfect, abundant and deficient numbers

*Number theory · level 4, lesson 6 of 6*

## A question to start

The divisors of 6, apart from 6 itself, are 1, 2 and 3. Add them: 1 + 2 + 3 = **6**. The number is exactly the sum of
its own smaller divisors.

Try 28. Its divisors apart from itself are 1, 2, 4, 7 and 14, and 1 + 2 + 4 + 7 + 14 = **28**. It happens again!

The ancient Greeks called such numbers **perfect**. They knew four of them: 6, 28, 496 and 8,128. The next one is
33,550,336. Perfect numbers are rare and they get huge very fast.

Two questions about them are more than 2,000 years old. Is there a recipe that makes perfect numbers? (Yes, and Euclid
found it.) And is there a perfect number that is **odd**? Nobody knows. It is one of the oldest unsolved problems in
mathematics.

## The idea

### Proper divisors and their sum

The **proper divisors** of a number are all its divisors except the number itself. The proper divisors of 12 are 1, 2,
3, 4 and 6.

Add them up and compare with the number. There are three possibilities, and each has a name:

- **Perfect:** the sum is **equal** to the number. 6: 1 + 2 + 3 = 6.
- **Deficient:** the sum is **less** than the number. 8: 1 + 2 + 4 = 7. ("Deficient" means "falling short".)
- **Abundant:** the sum is **more** than the number. 12: 1 + 2 + 3 + 4 + 6 = 16. ("Abundant" means "more than
  enough".)

Here they are as rods. The grey rod is the number. Under it, the coloured rods are its proper divisors laid end to end.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 190" role="img" aria-label="Rods: 6 above its proper divisors 1, 2, 3 which exactly match its length; 8 above 1, 2, 4 which fall one short; 12 above 1, 2, 3, 4, 6 which go 4 past its end">
  <g fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1">
    <rect x="120" y="18" width="72" height="14"/>
    <rect x="120" y="78" width="96" height="14"/>
    <rect x="120" y="138" width="144" height="14"/>
  </g>
  <g stroke="currentColor" stroke-width="1">
    <rect x="120" y="36" width="12" height="14" fill="#eea66f"/><rect x="132" y="36" width="24" height="14" fill="#9cc9ea"/><rect x="156" y="36" width="36" height="14" fill="#7ccf9a"/>
    <rect x="120" y="96" width="12" height="14" fill="#eea66f"/><rect x="132" y="96" width="24" height="14" fill="#9cc9ea"/><rect x="156" y="96" width="48" height="14" fill="#7ccf9a"/>
    <rect x="120" y="156" width="12" height="14" fill="#eea66f"/><rect x="132" y="156" width="24" height="14" fill="#9cc9ea"/><rect x="156" y="156" width="36" height="14" fill="#7ccf9a"/>
    <rect x="192" y="156" width="48" height="14" fill="#eea66f"/><rect x="240" y="156" width="72" height="14" fill="#9cc9ea"/>
  </g>
  <g stroke="currentColor" stroke-width="1" stroke-dasharray="3 3">
    <line x1="192" y1="12" x2="192" y2="56"/><line x1="216" y1="72" x2="216" y2="116"/><line x1="264" y1="132" x2="264" y2="176"/>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="10" y="30">6: perfect</text><text x="10" y="47">1+2+3 = 6</text>
    <text x="10" y="90">8: deficient</text><text x="10" y="107">1+2+4 = 7</text>
    <text x="10" y="150">12: abundant</text><text x="10" y="167">sum = 16</text>
  </g>
</svg>
</div>

### Which numbers are which?

**Primes are deficient.** A prime's only proper divisor is 1, and 1 is less than the prime.

**Powers of 2 are deficient, but only just.** The proper divisors of 16 are 1, 2, 4, 8, and 1 + 2 + 4 + 8 = 15: one
short. That always happens. Why? Start with 1 + 1 = 2. Add the next power: 2 + 2 = 4. Then 4 + 4 = 8, then 8 + 8 = 16.
Each time, the total so far plus the next power doubles. So 1 + 1 + 2 + 4 + 8 = 16, which means 1 + 2 + 4 + 8 = 16 − 1.
In general,

$$1 + 2 + 4 + \cdots + 2^{k-1} = 2^k - 1.$$

Remember this: it is the key to the recipe below.

**Every multiple of 6 after 6 is abundant.** Take 6 × k with k at least 2, say 30 = 6 × 5. Among its proper divisors are
k, 2k and 3k (here 5, 10, 15), and these already add to 6k = 30. On top of those there is 1 (and usually more). So the
sum is more than the number. This shows there are infinitely many abundant numbers.

**Most numbers are deficient**, especially odd ones. The smallest abundant number is 12, and the smallest **odd**
abundant number is 945: its proper divisors add up to 975.

### A faster way to add up the divisors

In [level 3](../level-3/06-counting-factors.md) you saw how to add up **all** the divisors from the prime
factorization. For $12 = 2^2 \times 3$:

(1 + 2 + 4) × (1 + 3) = 7 × 4 = 28.

That is the sum of all the divisors, including 12. Take away 12 to get the proper divisors: 28 − 12 = 16. So:

- A number is **perfect** when the sum of **all** its divisors is **twice** the number.
- Abundant when it is more than twice; deficient when less.

Check with 28 $= 2^2 \times 7$: (1 + 2 + 4) × (1 + 7) = 7 × 8 = 56 = 2 × 28. Perfect. ✓

### Euclid's recipe for perfect numbers

Look at the perfect numbers as products:

| Perfect number | As a product |
| --- | --- |
| 6 | 2 × 3 |
| 28 | 4 × 7 |
| 496 | 16 × 31 |
| 8,128 | 64 × 127 |

The first factor is a power of 2. The second is **one less than the next power of 2**, and it is **prime**: 3 = 4 − 1,
7 = 8 − 1, 31 = 32 − 1, 127 = 128 − 1. Euclid noticed this and proved, in Book IX of the *Elements*:

> If $2^p - 1$ is prime, then $2^{p-1} \times (2^p - 1)$ is perfect.

**Why.** Call the prime $M = 2^p - 1$ and the number $N = 2^{p-1} \times M$. Do it for 28 first, with $M = 7$:

- The divisors of 28 are the powers of 2 up to 4, each with or without the 7: 1, 2, 4 and 7, 14, 28.
- Their sum is (1 + 2 + 4) × (1 + 7).
- The first bracket is $2^3 - 1 = 7$, by the powers-of-2 fact. The second is 7 + 1 = 8.
- So the sum is 7 × 8. And 28 is 4 × 7, so 7 × 8 is twice 28. Perfect.

For any $p$ it is the same. The sum of all divisors of $N$ is

$$(1 + 2 + \cdots + 2^{p-1}) \times (1 + M) = (2^p - 1) \times 2^p = M \times 2^p = 2 \times (2^{p-1} \times M) = 2N.$$

The first bracket is $2^p - 1 = M$, and the second is $M + 1 = 2^p$. So the divisors add to twice $N$, which means the
proper divisors add to $N$. That is the whole proof. (It needs $M$ to be prime: then the divisors of $N$ are exactly
"a power of 2, times 1 or $M$", as in the table method of level 3.)

### Mersenne primes

Primes of the form $2^p - 1$ are called **Mersenne primes**, after Marin Mersenne, a French monk who studied them in the
1600s. For $2^p - 1$ to be prime, $p$ itself must be prime ($2^4 - 1 = 15 = 3 \times 5$ and $2^6 - 1 = 63 = 7 \times 9$
are not). But $p$ being prime is **not enough**: $2^{11} - 1 = 2047 = 23 \times 89$.

The first Mersenne primes come from $p$ = 2, 3, 5, 7, 13, 17, 19, 31, ... Each one gives a perfect number by Euclid's
recipe. For example $p = 13$ gives $2^{12} \times 8191 = 33{,}550{,}336$, the fifth perfect number.

About 2,000 years after Euclid, Leonhard Euler proved the other half: **every even perfect number** comes from Euclid's
recipe. So even perfect numbers and Mersenne primes are matched one to one. As of late 2024, 52 Mersenne primes are
known, so 52 perfect numbers are known. (The biggest known prime, from [the last lesson](05-no-biggest-prime.md), is a
Mersenne prime.)

### What nobody knows

- **Are there infinitely many perfect numbers?** That is the same as asking whether there are infinitely many
  Mersenne primes. Nobody knows.
- **Is there an odd perfect number?** None has ever been found. Mathematicians have proved that if one exists it would
  have to be unimaginably large: more than 1,500 digits long. But nobody has proved that none exists. This question is
  over 2,000 years old.

## Worked examples

**1. Classify 18.**

Proper divisors: 1, 2, 3, 6, 9. Sum: 21, which is more than 18. **Abundant.** (Also: 18 = 6 × 3 is a multiple of 6 after
6, so it had to be.)

**2. Check that 496 is perfect, using the formula.**

$496 = 2^4 \times 31$. Sum of all divisors: (1 + 2 + 4 + 8 + 16) × (1 + 31) = 31 × 32 = 992 = 2 × 496. **Perfect.**

**3. What goes wrong when $2^p - 1$ is not prime?**

Take $p = 11$: $2^{11} - 1 = 2047 = 23 \times 89$, not prime. Euclid's recipe would give
$N = 2^{10} \times 2047 = 2{,}096{,}128$. But 2047 now has extra divisors, 23 and 89, so $N$ has many more divisors than the recipe expects. The
sum of all its divisors is $2047 \times (1 + 23 + 89 + 2047) = 2047 \times 2160$, while $2N = 2047 \times 2048$. The sum
is too big: $N$ is **abundant**, not perfect.

**4. Friendly numbers.** The proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110. They add to **284**.
The proper divisors of 284 are 1, 2, 4, 71, 142, and they add to **220**. Each number is the sum of the other's proper
divisors. A pair like this is called **amicable** (friendly). A perfect number is a number that is friends with itself.

**5. A deficient example.** 15: proper divisors 1, 3, 5, sum 9. **Deficient.** With the formula: $15 = 3 \times 5$,
(1 + 3)(1 + 5) = 24, minus 15 is 9. ✓

## Try it

1. Classify 10, 20 and 24 as perfect, abundant or deficient.
2. Show that 8,128 is perfect using the formula. ($8128 = 2^6 \times 127$.)
3. Show that $2^9 - 1$ is not prime. What does that tell you about $2^8 \times (2^9 - 1)$?
4. Explain why every prime number is deficient.
5. Check that 945 is abundant. (Hint: $945 = 3^3 \times 5 \times 7$.)
6. Use Euclid's recipe with $p = 13$ (you may use the fact that 8,191 is prime) to find a perfect number. Check the last
   digit.
7. Show that 1 + 2 + 4 + 8 + 16 + 32 = 63 using the doubling idea, without adding them one by one.
8. Explain why a number like 36, which is a multiple of 6 bigger than 6, must be abundant, by naming proper divisors
   that already add up to 36.

??? note "Answers"
    1. 10: 1 + 2 + 5 = 8, **deficient**. 20: 1 + 2 + 4 + 5 + 10 = 22, **abundant**. 24: 1 + 2 + 3 + 4 + 6 + 8 + 12 =
       36, **abundant**.
    2. (1 + 2 + 4 + 8 + 16 + 32 + 64) × (1 + 127) = 127 × 128 = 16,256 = 2 × 8,128. **Perfect.**
    3. $2^9 - 1 = 511 = 7 \times 73$. Not prime, so Euclid's recipe does not apply, and $2^8 \times 511 = 130{,}816$ is
       not perfect. (Its divisor sum is too big, as in worked example 3: it is abundant.)
    4. A prime's only proper divisor is 1, and every prime is at least 2, so the sum (1) is less than the number.
    5. Sum of all divisors: (1 + 3 + 9 + 27) × (1 + 5) × (1 + 7) = 40 × 6 × 8 = 1,920. Proper divisors: 1,920 − 945 =
       975, which is more than 945. **Abundant.**
    6. $2^{12} \times 8191 = 4096 \times 8191 =$ **33,550,336**. It ends in 6. (Every even perfect number ends in 6 or 8,
       which you can check for the ones in this lesson.)
    7. 1 + 1 = 2, 2 + 2 = 4, 4 + 4 = 8, 8 + 8 = 16, 16 + 16 = 32, 32 + 32 = 64. So 1 + (1 + 2 + 4 + 8 + 16 + 32) = 64,
       which gives 1 + 2 + 4 + 8 + 16 + 32 = 64 − 1 = **63**.
    8. 36 = 6 × 6, so 6, 12 and 18 (one, two and three sixes) are proper divisors, and 6 + 12 + 18 = 36. Add the
       proper divisor 1 and the sum is already more than 36. **Abundant.** (Its full proper divisor sum is 55.)

## Common mistake

**Including the number itself in the sum.** The proper divisors of 6 are 1, 2, 3, not 1, 2, 3, 6. If you include the
number, compare the total with **twice** the number instead.

**Thinking $2^p - 1$ is prime whenever $p$ is prime.** $2^{11} - 1 = 2047 = 23 \times 89$. Euclid's recipe only works
when $2^p - 1$ really is prime, and checking that is hard: finding new Mersenne primes takes huge computer searches.

## Where it leads

- Back: [There is no biggest prime](05-no-biggest-prime.md) · Next level: [Level 5: clock arithmetic](../level-5/index.md).
- [Level 4 page](index.md) · [Number theory topic page](../index.md)
- The divisor-sum formula comes from [level 3: how many factors?](../level-3/06-counting-factors.md).
- The sum $1 + 2 + 4 + \cdots$ is a geometric series: see [Patterns](../../patterns/index.md).
- Testing whether huge numbers like $2^p - 1$ are prime: [level 7](../level-7/index.md), primality tests. More famous
  open problems: [level 8](../level-8/index.md).
