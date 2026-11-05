---
title: "Prime factorization"
---

# Prime factorization

*Number theory · level 3, lesson 5 of 6*

## A question to start

Ask two friends to break 360 into smaller and smaller factors, without looking at each other's work.

One friend starts with 360 = 36 × 10. The other starts with 360 = 8 × 45. They keep splitting until nothing will
split any more. Different starts, different steps, different-looking work.

Yet when they compare the numbers they end with, they have **exactly the same list**: three 2s, two 3s and one 5.
Not roughly the same. Exactly the same. Try it with a third start, 360 = 12 × 30, and you get the same list again.

Is that luck? This lesson shows how to do the splitting, and what the famous rule behind that "same list" says.

## The idea

### Primes, the numbers that will not split

Remember from [level 2](../level-2/index.md): a **prime number** is a whole number bigger than 1 with exactly two
factors, 1 and itself. It cannot be made into a rectangle of counters except a single line. The first few primes are

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ...

A whole number bigger than 1 that is not prime is **composite**. It can be split into two smaller factors: 12 = 3 × 4,
35 = 5 × 7. And 1 is neither prime nor composite. We will see below why it is left out.

### Factor trees

To break a number into primes, split it into any two factors, then split each factor that is not prime, and keep
going. Drawing it as a **factor tree** keeps track. Here are the two friends' trees for 360.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="Factor tree: 360 splits into 36 and 10; 36 into 6 and 6; each 6 into 2 and 3; 10 into 2 and 5">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="210" y1="28" x2="130" y2="62"/><line x1="210" y1="28" x2="300" y2="62"/>
    <line x1="130" y1="78" x2="80" y2="112"/><line x1="130" y1="78" x2="180" y2="112"/>
    <line x1="300" y1="78" x2="270" y2="107"/><line x1="300" y1="78" x2="330" y2="107"/>
    <line x1="80" y1="128" x2="55" y2="157"/><line x1="80" y1="128" x2="105" y2="157"/>
    <line x1="180" y1="128" x2="155" y2="157"/><line x1="180" y1="128" x2="205" y2="157"/>
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

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 190" role="img" aria-label="Factor tree: 360 splits into 8 and 45; 8 into 2 and 4; 4 into 2 and 2; 45 into 5 and 9; 9 into 3 and 3">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="180" y1="28" x2="100" y2="62"/><line x1="180" y1="28" x2="260" y2="62"/>
    <line x1="100" y1="80" x2="60" y2="107"/><line x1="100" y1="80" x2="140" y2="112"/>
    <line x1="140" y1="130" x2="115" y2="157"/><line x1="140" y1="130" x2="165" y2="157"/>
    <line x1="260" y1="80" x2="220" y2="107"/><line x1="260" y1="80" x2="300" y2="112"/>
    <line x1="300" y1="130" x2="275" y2="157"/><line x1="300" y1="130" x2="325" y2="157"/>
  </g>
  <g font-size="16" fill="currentColor" text-anchor="middle">
    <text x="180" y="22">360</text>
    <text x="100" y="76">8</text><text x="260" y="76">45</text>
    <text x="140" y="126">4</text><text x="300" y="126">9</text>
  </g>
  <g fill="#7ccf9a"><circle cx="60" cy="120" r="13"/><circle cx="220" cy="120" r="13"/>
    <circle cx="115" cy="170" r="13"/><circle cx="165" cy="170" r="13"/>
    <circle cx="275" cy="170" r="13"/><circle cx="325" cy="170" r="13"/></g>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="60" y="125">2</text><text x="220" y="125">5</text>
    <text x="115" y="175">2</text><text x="165" y="175">2</text><text x="275" y="175">3</text><text x="325" y="175">3</text>
  </g>
</svg>
</div>

The green circles are the **leaves**, where the splitting stops, and every leaf is a prime. In both trees the leaves
are 2, 2, 2, 3, 3, 5. Sorted from smallest to biggest:

360 = 2 × 2 × 2 × 3 × 3 × 5.

This is called the **prime factorization** of 360: writing it as a product (a multiplication) of primes.

### Why the splitting always stops

Could a factor tree go on forever? No. Each time you split a number into two factors, both factors are **smaller**
than the number (neither factor is 1, so each is at most half of it). The numbers keep getting smaller, and whole
numbers cannot keep getting smaller forever: they would hit 1. So every branch stops, and it stops at a number that
will not split: a prime.

That proves something important: **every whole number bigger than 1 can be written as a product of primes.** (A prime
itself counts: its factorization is just itself, like 7 = 7.)

### Why you always get the same primes

The second fact is harder: **the primes you end with are always the same, whatever splits you choose.** Only the order
can change. This is called the **Fundamental Theorem of Arithmetic**, and it is one of the most important facts in all
of number theory. "Fundamental" means it is the foundation everything else stands on.

Primes are like the atoms of multiplication. Every number is built from them, and each number has exactly one recipe.

Is this obvious? It is not, and here is a way to feel why. Imagine a world where only **even** numbers exist: 2, 4, 6,
8, ... In that world, call a number "e-prime" if it cannot be split into two smaller even numbers. 4 = 2 × 2 and
8 = 2 × 4 split, but 2, 6, 10, 14, 18 and 30 cannot (try: 6 is not even times even). Now look at 60:

60 = 6 × 10 and 60 = 2 × 30.

Both are splits into e-primes, and they are **different**. So in the even-number world, the "one recipe" rule is
**false**. The rule is true for ordinary whole numbers, but it needs a real reason. That reason, a proof by Euclid's
ideas, comes in [level 6](../level-6/index.md). For now we use the rule, knowing it is proved.

### Why 1 is not a prime

If 1 counted as a prime, then 6 could be written as 2 × 3, or 1 × 2 × 3, or 1 × 1 × 2 × 3, and so on forever. The
recipe would not be unique. Leaving 1 out of the primes keeps the Fundamental Theorem neat and true. That is the main
reason mathematicians agreed that 1 is not prime.

### Writing it short with powers

Writing 2 × 2 × 2 is slow. Instead we write $2^3$, said "2 to the power 3" or "2 cubed". The small raised number is
called the **power** or **exponent**, and it counts how many times the number is multiplied.

- $2^3 = 2 \times 2 \times 2 = 8$
- $3^2 = 3 \times 3 = 9$ ("3 squared")
- $5^1 = 5$ (we usually just write 5)

So the prime factorization of 360, written short, is

$$360 = 2^3 \times 3^2 \times 5.$$

Careful: $2^3$ is 8, **not** 6. It means 2 × 2 × 2, not 2 × 3.

### The ladder: a tidy way to do it

A factor tree can be messy. The **division ladder** is tidier: keep dividing by the **smallest prime that works**,
using the tests from lessons 1 to 4.

| Divide by | Answer | Why that prime |
| --- | --- | --- |
| 2 | 360 ÷ 2 = 180 | 360 is even |
| 2 | 180 ÷ 2 = 90 | still even |
| 2 | 90 ÷ 2 = 45 | still even |
| 3 | 45 ÷ 3 = 15 | 45 is odd; digit sum 9 |
| 3 | 15 ÷ 3 = 5 | digit sum 6 |
| 5 | 5 ÷ 5 = 1 | 5 is prime |

The primes down the left side are the factorization: 2, 2, 2, 3, 3, 5.

### When can you stop testing?

To check whether a number like 97 is prime, you try dividing by primes: 2 (97 is odd), 3 (digit sum 16), 5 (does not
end in 0 or 5), 7 (97 = 7 × 13 + 6). None work. Do you have to try 11, 13, 17, and so on, all the way up?

No. If 97 split into two factors, at least one of them would be **10 or less**, because two numbers both bigger than 10
multiply to more than 100. So you only need to try primes whose square is not bigger than 97. Since 11 × 11 = 121 is
already more than 97, you can stop after 7. **97 is prime.**

The rule: **test the primes up to the one whose square passes your number.** (This is the same reason the sieve of
Eratosthenes in level 2 could stop after 7 for numbers up to 100.)

<figure class="play" data-play="factree"><span class="ai-tag">AI-created</span><figcaption><b>A factor tree.</b> Split until every branch ends in a prime.</figcaption></figure>

## Worked examples

**1. Factorize 5,040 with a ladder.**

5,040 → 2,520 → 1,260 → 630 → 315 (divided by 2 four times; 315 is odd). 315 → 105 → 35 (divided by 3 twice; digit
sums 9 and 6). 35 → 7 (divided by 5). 7 is prime.

$$5040 = 2^4 \times 3^2 \times 5 \times 7.$$

Check: $16 \times 9 \times 5 \times 7 = 144 \times 35 = 5040$. ✓

**2. Factorize 1,001.**

It is odd, its digit sum is 2 (not a multiple of 3), and it does not end in 0 or 5. Try 7: 1,001 = 7 × 143. Now 143:
not 7 (7 × 20 = 140, remainder 3). Try 11: from the right,
3 − 4 + 1 = 0, so yes: 143 = 11 × 13.

$$1001 = 7 \times 11 \times 13.$$

**3. Factorize 2,024.**

2,024 → 1,012 → 506 → 253 (three 2s). 253: odd, digit sum 10, does not end in 0 or 5; 7? 7 × 36 = 252, remainder 1.
11? From the right, 3 − 5 + 2 = 0, so 253 = 11 × 23. And 23 is prime.

$$2024 = 2^3 \times 11 \times 23.$$

**4. Is 391 prime?**

20 × 20 = 400 is more than 391, so test the primes up to 19. Not 2, 3 (digit sum 13), 5, 7 (7 × 55 = 385, remainder
6), 11 (1 − 9 + 3 = −5), 13 (13 × 30 = 390, remainder 1). Try 17: 17 × 23 = 391. **Not prime**: 391 = 17 × 23.

**5. Which number is $2^2 \times 3 \times 5^2$?**

$4 \times 3 \times 25 = 300$. Every number has exactly one factorization, so 300 is the only answer.

## Try it

1. Write the prime factorization of 84, using powers.
2. Write the prime factorization of 150 and of 1,000.
3. Draw two different factor trees for 72. Check that the leaves are the same.
4. Is 143 prime? Is 2,026 prime? (Hint for 2,026: it is even. What about half of it? You may use the fact that 1,013
   is prime.)
5. Write 729 and 1,024 using powers of a single prime.
6. Which number has prime factorization $2 \times 3 \times 5 \times 7 \times 11$?
7. To check whether 899 is prime, which primes do you need to test? Is it prime?
8. In the even-number world, find two different ways to write 180 as a product of e-primes (2, 6, 10, 14, 18, 22, 30,
   ...).

??? note "Answers"
    1. 84 → 42 → 21 (two 2s), 21 = 3 × 7. So $84 = 2^2 \times 3 \times 7$.
    2. $150 = 2 \times 3 \times 5^2$ (150 → 75 → 25 → 5). $1000 = 2^3 \times 5^3$ (since 1000 = 10 × 10 × 10 and
       each 10 is 2 × 5).
    3. For example 72 = 8 × 9 = (2 × 2 × 2) × (3 × 3), or 72 = 6 × 12 = (2 × 3) × (2 × 2 × 3). Both give
       $2^3 \times 3^2$.
    4. 143 = 11 × 13, **not prime**. 2,026 = 2 × 1,013, **not prime** (it is even and bigger than 2). Its
       factorization is $2 \times 1013$.
    5. 729 → 243 → 81 → 27 → 9 → 3 → 1: six 3s, so $729 = 3^6$. 1,024 halves ten times to 1, so $1024 = 2^{10}$.
    6. $2 \times 3 = 6$, $6 \times 5 = 30$, $30 \times 7 = 210$, $210 \times 11 =$ **2,310**.
    7. 30 × 30 = 900 is just more than 899, so test the primes up to 29. It fails 2, 3 (digit sum 26), 5, 7
       (7 × 128 = 896, remainder 3), 11 (9 − 9 + 8 = 8), 13 (13 × 69 = 897, remainder 2), 17 (17 × 52 = 884,
       remainder 15), 19 (19 × 47 = 893, remainder 6), 23 (23 × 39 = 897, remainder 2). Then 29: 29 × 31 = 899. So
       **899 = 29 × 31**, not prime. (A nice trick: 899 = 900 − 1 = 30 × 30 − 1 × 1 = 29 × 31.)
    8. 180 = 18 × 10 and 180 = 6 × 30. (Both 18 and 10 are e-primes, and so are 6 and 30.) There is even a third
       way, 180 = 2 × 90: 90 is an e-prime, because 90 = 2 × 45 and 45 is odd, so 90 is not even times even.

## Common mistake

**Stopping before every leaf is prime.** "360 = 2 × 2 × 90" is not a prime factorization, because 90 still splits.
Keep going until every number is prime.

**Reading a power as multiplication.** $2^3$ means 2 × 2 × 2 = 8, not 2 × 3 = 6. And $3^2 = 9$, not 6.

## Where it leads

- Back: [Divisibility by 6, 11 and others](04-tests-6-11-more.md) · Next: [How many factors?](06-counting-factors.md),
  where the factorization tells you how many factors a number has without listing them.
- [Level 3 page](index.md) · [Number theory topic page](../index.md)
- Prime factorizations are the quickest way to the greatest common divisor and least common multiple:
  [level 4](../level-4/index.md).
- The proof that the factorization is unique: [level 6](../level-6/index.md).
- Powers and exponents in general: [Algebra](../../algebra/index.md).
- At university, "every integer bigger than 1 is a product of primes" is a first example of proof by strong
  induction: [U of T MAT158, Unit 1: Logic, Sets & Proof](../../../uoft/MAT158H1/unit01.md).
