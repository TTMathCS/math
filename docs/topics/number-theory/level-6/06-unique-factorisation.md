---
title: "Unique factorisation, proved"
---

# Unique factorisation, proved

*Number theory · level 6, lesson 6 of 6*

## A question to start

In [level 3](../level-3/05-prime-factorization.md) you split 360 into primes with a factor tree. Start with
$360 = 36 \times 10$ or with $360 = 8 \times 45$ or with $360 = 2 \times 180$: the leaves are always
$2, 2, 2, 3, 3, 5$. Every number seems to have **only one** prime factorisation.

But is that a fact, or just something that has always happened so far? Here is a reason to worry. Look only at the
numbers $1, 5, 9, 13, 17, 21, \ldots$ (one more than a multiple of 4). Multiply two of them and you get another one.
Call such a number "prime" if it cannot be split into two smaller numbers **from this list**. Then 9, 21 and 49 are all
"prime" in this world (9 = 3 × 3, but 3 is not on the list). And

$$441 = 9 \times 49 = 21 \times 21.$$

Two different factorisations into "primes"! So uniqueness is **not** automatic. It needs a proof, and the proof needs
something special about ordinary whole numbers. This lesson finds that special thing and gives the proof.

## The idea

### The theorem

> **The fundamental theorem of arithmetic.** Every whole number greater than 1 can be written as a product of
> primes, and in only one way, apart from the order of the factors.

"Fundamental" is a strong word, and it is earned: the gcd and lcm from prime factorisations, the factor-counting rule
from level 3, and much of the rest of number theory rest on it. There are two halves to prove: **existence** (there is
at least one factorisation) and **uniqueness** (there is at most one).

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

### Existence: every number splits into primes

Suppose some numbers greater than 1 could **not** be written as a product of primes. Then there would be a smallest
such number; call it $N$.

- $N$ is not prime, because a prime is a product of primes already (a product with one factor).
- So $N = a \times b$ with $a$ and $b$ both between 1 and $N$ (neither is 1 or $N$).
- $a$ and $b$ are smaller than $N$, and $N$ was the smallest failure, so $a$ and $b$ **can** be written as products of
  primes.
- Put the two products side by side: that is a product of primes equal to $N$. Contradiction.

So there is no failure: every number greater than 1 is a product of primes. (This style of proof, "take the smallest
counterexample and show it cannot exist", is called the **well-ordering principle**, and it is a close relative of
proof by induction.)

### Euclid's lemma: the special thing about primes

Here is the property that the "1 more than a multiple of 4" world lacks.

> **Euclid's lemma.** If a prime $p$ divides a product $ab$, then $p$ divides $a$ or $p$ divides $b$.

(A **lemma** is a small theorem used as a step towards a bigger one. This one appears in Euclid's *Elements*, Book
VII.) It is false for numbers that are not prime: 6 divides $4 \times 9 = 36$, but 6 divides neither 4 nor 9. The 6
"split up": the 2 went into the 4 and the 3 went into the 9. A prime cannot split up, and that is the whole point. But
"cannot split up" needs a proof, and the proof uses Bézout.

**Proof.** Suppose $p$ divides $ab$ but does not divide $a$. The only positive divisors of $p$ are 1 and $p$, and $p$
does not divide $a$, so $\gcd(p, a) = 1$. By [Bézout's identity](01-bezout-identity.md) there are whole numbers $x$,
$y$ with

$$px + ay = 1.$$

Multiply both sides by $b$:

$$b = pbx + aby.$$

Now $p$ divides $pbx$ (it has a factor $p$), and $p$ divides $aby$ (since $p$ divides $ab$). So $p$ divides their sum,
which is $b$. ∎

The lemma extends to longer products: if $p$ divides $a_1 a_2 \cdots a_k$, then $p$ divides one of the $a_i$.
(Apply the lemma to $a_1 \times (a_2 \cdots a_k)$: either $p$ divides $a_1$, or it divides the rest, and then repeat.)

### Uniqueness: no number has two factorisations

Suppose a number has two prime factorisations:

$$p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s,$$

where all the $p$'s and $q$'s are primes (repeats allowed).

1. $p_1$ divides the left side, so it divides the right side, $q_1 q_2 \cdots q_s$.
2. By Euclid's lemma, $p_1$ divides one of the $q$'s, say $q_j$.
3. But $q_j$ is prime, so its only divisors are 1 and $q_j$. Since $p_1 > 1$, we get $p_1 = q_j$.
4. **Cancel** this prime from both sides. We get a shorter equation of the same kind.
5. Repeat. Each step removes one prime from each side, and they always match. When one side runs out of primes it
   equals 1, so the other side must also have run out (a product of primes is never 1).

So the two lists contain exactly the same primes, the same number of times. ∎

### Why the "1 more than a multiple of 4" world fails

In that world (they are called **Hilbert numbers**, after David Hilbert, who used this example), 21 is "prime", and
21 divides $9 \times 49 = 441$, but 21 divides neither 9 nor 49 (as Hilbert numbers: $9 \div 21$ and $49 \div 21$ are
not whole). Euclid's lemma fails there, and with it uniqueness. The lemma needed Bézout, and Bézout needs
**subtraction** and the whole of the number line. The Hilbert numbers are not closed under subtraction ($9 - 5 = 4$
is not one of them), so the proof cannot even start.

### What uniqueness buys us

Many facts you have used depend on uniqueness:

- **gcd and lcm from factorisations** ([level 4](../level-4/01-greatest-common-divisor.md)): the "take the smaller
  powers" rule assumes every divisor's primes come from the number's one factorisation.
- **Counting factors** ([level 3](../level-3/06-counting-factors.md)): $2^3 \times 3^2 \times 5$ has
  $4 \times 3 \times 2 = 24$ factors because each factor is a choice of powers, and different choices give different
  numbers. That last part is uniqueness.
- **Irrational square roots.** Here is a famous one, next.

### $\sqrt{2}$ is not a fraction

Suppose $\sqrt 2 = \frac{a}{b}$ with whole numbers $a$, $b$. Square and multiply up: $a^2 = 2b^2$. Now count the 2s in
the prime factorisation of each side.

- $a^2$: whatever number of 2s $a$ has, $a^2$ has twice as many. An **even** number of 2s.
- $2b^2$: $b^2$ has an even number of 2s, and the extra 2 makes it **odd**.

By uniqueness the same number cannot have both an even and an odd number of 2s. So there are no such $a$, $b$:
$\sqrt 2$ is **irrational** (not a fraction). The same argument works for $\sqrt 3$, $\sqrt 5$, and the square root of
any whole number that is not a perfect square.

## Worked examples

**1. Using Euclid's lemma.** Show that if 7 divides $13n$, then 7 divides $n$.

- 7 is prime and divides the product $13 \times n$.
- By Euclid's lemma, 7 divides 13 or 7 divides $n$. It does not divide 13. So **7 divides $n$**.

**2. When the lemma does not apply.** Does 12 dividing $9n$ mean 12 divides $n$?

- No: 12 is not prime. For example $n = 4$: $9 \times 4 = 36 = 3 \times 12$, but 12 does not divide 4.
- What is true: $12 = 4 \times 3$, and 9 has the 3 already, so 4 must divide $n$.

**3. Two factorisations in Hilbert's world.** Find another number with two different factorisations into Hilbert
primes.

- Hilbert primes include 9 (= 3 × 3), 21 (= 3 × 7), 33 (= 3 × 11) and 77 (= 7 × 11), since none of them splits into
  two smaller numbers that are 1 more than a multiple of 4.
- $9 \times 77 = 693$ and $21 \times 33 = 693$. In ordinary primes both are $3 \times 3 \times 7 \times 11$, grouped
  differently.

**4. Squares and prime factors.** If $n^2$ is a multiple of 12, must $n$ be a multiple of 6? Of 12?

- 12 divides $n^2$, so 2 divides $n^2 = n \times n$; by Euclid's lemma, 2 divides $n$. Likewise 3 divides $n$.
- 2 and 3 both divide $n$ and are coprime, so **6 divides $n$**.
- Not necessarily 12: $n = 6$ gives $n^2 = 36 = 3 \times 12$, but 12 does not divide 6.

**5. Powers that never end in 0.** Can a power of 12 ever end in the digit 0?

- Ending in 0 means being a multiple of 10, so having 5 as a prime factor.
- $12^k = 2^{2k} \times 3^k$. By uniqueness, that is its only factorisation, and it has no 5. So **never**.

## Try it

1. Show that Euclid's lemma fails for 4: find $a$, $b$ with 4 dividing $ab$ but neither $a$ nor $b$.
2. If 11 divides $6n$, explain why 11 divides $n$.
3. Prove that $\sqrt 3$ is irrational, by counting the 3s.
4. Explain why no power of 6 ends in 5.
5. List the Hilbert numbers up to 50 (1, 5, 9, ...). Which of them are Hilbert primes?
6. If $n^2$ is a multiple of 18, must $n$ be a multiple of 6? Must it be a multiple of 18?
7. Suppose $a$ and $b$ are positive, $\gcd(a, b) = 1$, and $ab$ is a perfect square. Explain, using prime
   factorisations, why $a$ and $b$ must both be perfect squares. Show by an example that "gcd = 1" is needed.
8. Harder: show there are no positive whole numbers $p$, $q$ with $10^p = 2^q$. (This proves that the number $x$ with
   $10^x = 2$, which is about 0.30103, is not a fraction.)

??? note "Answers"
    1. For example $a = 2$, $b = 6$: $4$ divides $12$, but 4 divides neither 2 nor 6. (Or $a = b = 2$.)
    2. 11 is prime and divides $6 \times n$, so by Euclid's lemma it divides 6 or $n$. It does not divide 6, so it
       divides $n$.
    3. Suppose $\sqrt 3 = \frac{a}{b}$. Then $a^2 = 3b^2$. The number of 3s in $a^2$ is even; in $3b^2$ it is odd.
       By uniqueness that is impossible, so $\sqrt 3$ is not a fraction.
    4. A number ending in 5 is a multiple of 5. But $6^k = 2^k \times 3^k$ has no 5 in its (only) prime factorisation.
       In fact powers of 6 always end in 6.
    5. Hilbert numbers up to 50: 1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49. Not prime: $25 = 5 \times 5$ and
       $45 = 5 \times 9$ (and 1, which we leave out, as with ordinary primes). Hilbert primes: **5, 9, 13, 17, 21, 29,
       33, 37, 41, 49**.
    6. 18 divides $n^2$, so 2 and 3 divide $n^2$, so (Euclid's lemma) 2 and 3 divide $n$, so **6 divides $n$**. Not
       necessarily 18: $n = 6$ gives $36 = 2 \times 18$, but 18 does not divide 6.
    7. In a perfect square, every prime appears an even number of times. Since $\gcd(a, b) = 1$, each prime of $ab$
       comes wholly from $a$ or wholly from $b$, never split between them. So each prime of $a$ appears in $a$ as
       often as in $ab$, an even number of times; the same for $b$. A number in which every prime appears an even
       number of times is a perfect square. Without gcd 1: $a = 2$, $b = 8$, $ab = 16$ is a square, but 2 and 8 are
       not.
    8. $10^p = 2^p \times 5^p$ contains the prime 5 (as $p \ge 1$), but $2^q$ does not. By uniqueness they cannot be
       equal. If $x = \frac{p}{q}$ with $10^x = 2$, raising both sides to the power $q$ would give $10^p = 2^q$, which
       is impossible.

## Common mistake

**Using Euclid's lemma for a number that is not prime.** "6 divides $ab$, so 6 divides $a$ or $b$" is false
($6 \mid 4 \times 9$). The lemma is exactly the property that makes primes special.

**Thinking uniqueness is obvious.** The Hilbert numbers show that "every number splits into unsplittable pieces" does
not by itself give "in only one way". The proof needs Euclid's lemma, which needs Bézout, which needs Euclid's
algorithm: the whole of this level fits together.

## Where it leads

- Back: [The Chinese remainder theorem](05-chinese-remainder.md) · Next level:
  [Level 7: Powers on a clock](../level-7/index.md), starting with
  [Fermat's little theorem](../level-7/01-fermats-little-theorem.md).
- [Level 6 page](index.md) · [Number theory topic page](../index.md)
- Factor trees and prime factorisations, first met: [Level 3: Prime factorisation](../level-3/05-prime-factorization.md).
- Why the primes never run out: [Level 4: There is no biggest prime](../level-4/05-no-biggest-prime.md).
- Irrational numbers like $\sqrt 2$: [Numbers](../../numbers/index.md) and [Infinity](../../infinity/index.md).
- At university, number systems where factorisation is unique are called **unique factorisation domains**; polynomials
  are the next example: [MAT240 Unit 9: Polynomials, UFD and resultants](../../../uoft/MAT240H1/unit09.md).
