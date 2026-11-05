---
title: "Fermat's little theorem"
---

# Fermat's little theorem

*Number theory · level 7, lesson 1 of 6*

## A question to start

Take any whole number that is not a multiple of 7. Raise it to the 6th power and subtract 1:

$$2^6 - 1 = 63 = 7 \times 9, \qquad 3^6 - 1 = 728 = 7 \times 104, \qquad 4^6 - 1 = 4095 = 7 \times 585.$$

Every answer is a multiple of 7. Try 5: $5^6 - 1 = 15624 = 7 \times 2232$. Again. Try 10: $10^6 - 1 = 999999$, and
$999999 = 7 \times 142857$. It keeps happening, and it is no coincidence that the power, 6, is one less than 7.

Now a bigger version. What is the remainder when $2^{100}$ is divided by 101? The number $2^{100}$ has 31 digits, so
working it out and dividing is a lot of effort. By the end of this lesson you will answer it in one line.

## The idea

### Powers on a clock

In level 5 you met **clock arithmetic**: working **mod $n$** means keeping only the remainder on division by $n$. We
write $a \equiv b \pmod n$ ("$a$ is congruent to $b$ mod $n$") when $n$ divides $a - b$, and you may reduce mod $n$
at any step of a sum or a product.

This level is about **powers** on a clock. Look at the powers of 3 mod 7:

| $k$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $3^k \bmod 7$ | 3 | 2 | 6 | 4 | 5 | 1 | 3 | 2 |

Each entry is 3 times the one before, reduced mod 7: for example $3 \times 6 = 18 \equiv 4$. At $k = 6$ the power
comes back to 1, and from then on the pattern repeats, because multiplying 1 by 3 starts the same journey again. The
powers of 2 mod 7 go 2, 4, 1, 2, 4, 1, ... and come back to 1 even sooner, at $k = 3$. But $2^6 = (2^3)^2 \equiv 1$
too. Every number from 1 to 6 has its sixth power equal to 1 mod 7. That is the pattern in the opening question.

### The theorem

> **Fermat's little theorem.** If $p$ is a prime and $a$ is a whole number that is not a multiple of $p$, then
>
> $$a^{p-1} \equiv 1 \pmod p.$$

In words: $p$ divides $a^{p-1} - 1$. With $p = 7$ this is the opening puzzle. With $p = 101$ and $a = 2$ it says
$2^{100} \equiv 1 \pmod{101}$: the remainder is **1**. That is the one-line answer.

Pierre de Fermat, a French lawyer who did mathematics for pleasure, stated the theorem in a letter in 1640 without
a proof. The first published proof came from Leonhard Euler about a century later. The word "little" only separates
it from Fermat's **last** theorem, a much harder statement you will meet in level 8.

Two conditions matter. The modulus must be **prime**: mod 9, $2^8 = 256 \equiv 4$, not 1. And $a$ must **not** be a
multiple of $p$: $7^6 \equiv 0 \pmod 7$, not 1.

### Why it is true: the shuffle

Take $p = 7$ and $a = 3$. Multiply each of the numbers 1, 2, 3, 4, 5, 6 by 3 and reduce mod 7:

| $k$ | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| $3k \bmod 7$ | 3 | 6 | 2 | 5 | 1 | 4 |

The bottom row is the same six numbers, **shuffled**. The drawing shows each number sent to its new place.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 170" role="img" aria-label="The numbers 1 to 6 on top, each joined by a line to 3 times it mod 7 on the bottom row; every bottom number is hit exactly once">
  <text x="160" y="16" font-size="12" text-anchor="middle" fill="currentColor">k</text>
  <text x="160" y="164" font-size="12" text-anchor="middle" fill="currentColor">3k mod 7</text>
  <line x1="45" y1="42" x2="135" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <line x1="90" y1="42" x2="270" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <line x1="135" y1="42" x2="90" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <line x1="180" y1="42" x2="225" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <line x1="225" y1="42" x2="45" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <line x1="270" y1="42" x2="180" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="45" cy="32" r="12" fill="#9cc9ea"/><text x="45" y="37" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="90" cy="32" r="12" fill="#9cc9ea"/><text x="90" y="37" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="135" cy="32" r="12" fill="#9cc9ea"/><text x="135" y="37" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="180" cy="32" r="12" fill="#9cc9ea"/><text x="180" y="37" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="225" cy="32" r="12" fill="#9cc9ea"/><text x="225" y="37" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="270" cy="32" r="12" fill="#9cc9ea"/><text x="270" y="37" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="45" cy="136" r="12" fill="#eea66f"/><text x="45" y="141" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="90" cy="136" r="12" fill="#eea66f"/><text x="90" y="141" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="135" cy="136" r="12" fill="#eea66f"/><text x="135" y="141" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="180" cy="136" r="12" fill="#eea66f"/><text x="180" y="141" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="225" cy="136" r="12" fill="#eea66f"/><text x="225" y="141" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="270" cy="136" r="12" fill="#eea66f"/><text x="270" y="141" font-size="13" text-anchor="middle" fill="currentColor">6</text>
</svg>
</div>

Because the bottom row holds the same numbers, the two rows have the same **product** mod 7:

$$(3 \cdot 1)(3 \cdot 2)(3 \cdot 3)(3 \cdot 4)(3 \cdot 5)(3 \cdot 6) \equiv 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \cdot 6 \pmod 7.$$

The left side has six 3s in it, so it is $3^6 \times 720$, and the right side is $720$. Since $720 = 6!$ ("6
factorial", the product $1 \cdot 2 \cdots 6$) shares no factor with 7, we may cancel it (it has an inverse mod 7,
level 6). What is left is $3^6 \equiv 1 \pmod 7$.

### The proof for every prime

Now the same argument in general. Let $p$ be prime and $a$ not a multiple of $p$. Look at the $p - 1$ numbers

$$a,\ 2a,\ 3a,\ \ldots,\ (p-1)a \pmod p.$$

**None of them is 0 mod $p$.** If $p$ divided $ka$, then by Euclid's lemma (level 6: a prime that divides a product
divides one of the factors) $p$ would divide $k$ or $a$. It does not divide $a$, and $k$ is between 1 and $p - 1$,
so it does not divide $k$ either.

**No two of them are equal mod $p$.** If $ia \equiv ja$ with $i \ne j$, then $p$ divides $ia - ja = (i - j)a$. By
Euclid's lemma again, $p$ divides $i - j$. But $i$ and $j$ are both between 1 and $p - 1$, so $i - j$ is between
$-(p-2)$ and $p - 2$ and not 0: it cannot be a multiple of $p$.

So the $p - 1$ numbers are $p - 1$ **different** non-zero remainders. There are only $p - 1$ non-zero remainders
altogether, so they are all of them, in some order: a shuffle of $1, 2, \ldots, p - 1$. Multiplying everything:

$$a \cdot 2a \cdot 3a \cdots (p-1)a \equiv 1 \cdot 2 \cdot 3 \cdots (p-1) \pmod p,$$

$$a^{p-1}\,(p-1)! \equiv (p-1)! \pmod p.$$

Every factor of $(p-1)!$ is coprime to $p$, so $(p-1)!$ is coprime to $p$ and has an inverse mod $p$. Multiply both
sides by that inverse and $a^{p-1} \equiv 1 \pmod p$. ∎

Notice where "prime" was used: in Euclid's lemma, twice. Mod 9 the shuffle fails. Multiply 1 to 8 by 3 and you get
3, 6, 0, 3, 6, 0, 3, 6: zeros and repeats, no shuffle.

### A second form that needs no condition

Multiply both sides of $a^{p-1} \equiv 1$ by $a$ and you get

$$a^p \equiv a \pmod p.$$

This version is true for **every** whole number $a$, even multiples of $p$ (then both sides are 0). For example
$2^7 = 128 = 18 \times 7 + 2$, so $2^7 \equiv 2 \pmod 7$.

### A second proof, by the binomial theorem

There is another reason, from algebra, for $a^p \equiv a$. The binomial theorem (see [Counting](../../counting/index.md))
expands $(a + 1)^p$ as

$$(a+1)^p = a^p + \binom{p}{1}a^{p-1} + \binom{p}{2}a^{p-2} + \cdots + \binom{p}{p-1}a + 1.$$

For a prime $p$ and $0 < k < p$, the number $\binom{p}{k} = \dfrac{p!}{k!\,(p-k)!}$ is a multiple of $p$: the
top has a factor $p$, and the bottom is a product of numbers smaller than $p$, none of which can cancel it. (For
$p = 5$ the row of Pascal's triangle is 1, 5, 10, 10, 5, 1, and 5, 10, 10, 5 are all multiples of 5.) So mod $p$
all the middle terms vanish:

$$(a+1)^p \equiv a^p + 1 \pmod p.$$

Now climb. $0^p \equiv 0$. If $a^p \equiv a$, then $(a+1)^p \equiv a^p + 1 \equiv a + 1$. So the fact passes from
each number to the next: $1^p \equiv 1$, $2^p \equiv 2$, $3^p \equiv 3$, and so on forever. This "climbing" argument
is called **proof by induction**. Two completely different proofs of the same fact are a good sign that the fact is
deep.

### Using it: cut the exponent down

The main use of the theorem is to make huge powers small. Mod a prime $p$ (with $a$ not a multiple of $p$), the
powers of $a$ repeat every $p - 1$ steps at most, so

$$a^{n} \equiv a^{r} \pmod p, \quad \text{where } r \text{ is the remainder of } n \text{ on division by } p - 1.$$

The reason: write $n = q(p-1) + r$. Then $a^n = \big(a^{p-1}\big)^q \cdot a^r \equiv 1^q \cdot a^r = a^r$.

The rule is: **reduce the base mod $p$, but reduce the exponent mod $p - 1$**. Mixing these up is the most common
mistake with this theorem.

<figure class="play" data-play="clock" data-mode="times"><span class="ai-tag">AI-created</span><figcaption><b>Multiplying on a prime clock.</b> With n = 7, every number from 1 to 6 has a partner that gives 1.</figcaption></figure>

## Worked examples

**1. $3^{100} \bmod 7$.** 7 is prime and 3 is not a multiple of 7, so $3^6 \equiv 1$. Divide the exponent by 6:
$100 = 16 \times 6 + 4$. So $3^{100} = (3^6)^{16} \cdot 3^4 \equiv 3^4 = 81 = 11 \times 7 + 4$. The remainder is
**4**. (Check against the table of powers of 3 above: $3^4 \equiv 4$. ✓)

**2. $7^{222} \bmod 11$.** 11 is prime, so $7^{10} \equiv 1$. $222 = 22 \times 10 + 2$, so
$7^{222} \equiv 7^2 = 49 = 4 \times 11 + 5$. The remainder is **5**.

**3. $5^{38} \bmod 13$.** $5^{12} \equiv 1$ and $38 = 3 \times 12 + 2$, so $5^{38} \equiv 5^2 = 25 \equiv 12$.
Since $12 \equiv -1$, this says $5^{38} + 1$ is a multiple of 13.

**4. A huge base.** Find $123^{456} \bmod 7$. First the base: $123 = 17 \times 7 + 4$, so $123 \equiv 4$. Then the
exponent mod 6: $456 = 76 \times 6$, remainder 0. So $123^{456} \equiv 4^{0} = 1 \pmod 7$.

**5. Every number $n^5 - n$ is a multiple of 30.** We need factors 2, 3 and 5.

- By $a^p \equiv a$ with $p = 5$: $n^5 \equiv n \pmod 5$, so 5 divides $n^5 - n$.
- With $p = 3$: $n^3 \equiv n$, so $n^5 = n^3 \cdot n^2 \equiv n \cdot n^2 = n^3 \equiv n \pmod 3$.
- With $p = 2$: $n^2 \equiv n$, so $n^5 \equiv n \pmod 2$ in the same way.

2, 3 and 5 are different primes and all divide $n^5 - n$, so their product 30 does. Check: $2^5 - 2 = 30$,
$3^5 - 3 = 240 = 8 \times 30$. ✓

**6. Repunits.** The number made of eighteen 9s is $10^{18} - 1$. Since 19 is prime and does not divide 10,
$10^{18} \equiv 1 \pmod{19}$, so 19 divides $999\,999\,999\,999\,999\,999$. Dividing by 9 shows 19 also divides
$111\,111\,111\,111\,111\,111$ (eighteen 1s), because 19 and 9 share no factor.

## Try it

1. Without a calculator, what is $2^{40} \bmod 41$? (41 is prime.)
2. Write out the shuffle table for $p = 5$ and $a = 2$ (the numbers $2k \bmod 5$ for $k = 1, 2, 3, 4$), and check
   that it is a shuffle.
3. Find $2^{100} \bmod 13$.
4. Find $4^{1000} \bmod 7$.
5. Find $6^{2026} \bmod 5$ and $8^{2026} \bmod 5$.
6. Show that $n^7 - n$ is a multiple of 42 for every whole number $n$.
7. Mod 9, the number 2 is not a multiple of 9, but $2^8 \not\equiv 1$. Explain which step of the proof breaks.
8. Show that if $p$ is prime and $p > 5$, then $p$ divides the number made of $p - 1$ ones,
   $11\ldots1$. (Hint: worked example 6.)

??? note "Answers"
    1. **1.** Fermat's little theorem with $p = 41$ and $a = 2$: $2^{40} \equiv 1 \pmod{41}$.
    2. $2 \times 1 = 2$, $2 \times 2 = 4$, $2 \times 3 = 6 \equiv 1$, $2 \times 4 = 8 \equiv 3$. The row is 2, 4, 1, 3:
       each of 1, 2, 3, 4 exactly once, so it is a shuffle. The products agree:
       $2 \cdot 4 \cdot 1 \cdot 3 = 24 = 1 \cdot 2 \cdot 3 \cdot 4$, and also $2^4 \cdot 24 \equiv 24$, so
       $2^4 = 16 \equiv 1 \pmod 5$. ✓
    3. $2^{12} \equiv 1 \pmod{13}$. $100 = 8 \times 12 + 4$, so $2^{100} \equiv 2^4 = 16 \equiv$ **3**.
    4. $4^6 \equiv 1 \pmod 7$. $1000 = 166 \times 6 + 4$, so $4^{1000} \equiv 4^4 = 256 = 36 \times 7 + 4$. The
       answer is **4**.
    5. $6 \equiv 1 \pmod 5$, so $6^{2026} \equiv 1^{2026} =$ **1**. For 8: $8 \equiv 3$, and $3^4 \equiv 1 \pmod 5$.
       $2026 = 506 \times 4 + 2$, so $8^{2026} \equiv 3^2 = 9 \equiv$ **4**.
    6. $42 = 2 \times 3 \times 7$. Mod 7: $n^7 \equiv n$ (Fermat, form $a^p \equiv a$). Mod 3: $n^3 \equiv n$, so
       $n^7 = n^3 \cdot n^3 \cdot n \equiv n \cdot n \cdot n = n^3 \equiv n$. Mod 2: $n^2 \equiv n$, so every power
       $n^k \equiv n$, in particular $n^7 \equiv n$. So 2, 3 and 7 all divide $n^7 - n$, and so does their product 42.
       Check: $2^7 - 2 = 126 = 3 \times 42$. ✓
    7. The numbers $2k \bmod 9$ for $k = 1, \ldots, 8$ are 2, 4, 6, 8, 1, 3, 5, 7: a shuffle, so the products give
       $2^8 \cdot 8! \equiv 8! \pmod 9$. The step that breaks is the **cancelling**. We may cancel $8! = 40320$ only
       if it is coprime to 9, and it is not: it contains $3 \times 6 = 18$, so $8! \equiv 0 \pmod 9$. The line then
       says $0 \equiv 0$, which tells us nothing about $2^8$. The deeper cause is that 9 is not prime, so Euclid's
       lemma fails: 9 divides $3 \times 3$ without dividing 3.
    8. The number of $p - 1$ ones is $\dfrac{10^{p-1} - 1}{9}$. Since $p$ is prime and $p \ne 2, 5$, $p$ does not
       divide 10, so by Fermat $p$ divides $10^{p-1} - 1$, which is 9 times our number. Since $p > 5$, $p$ does not
       divide 9 (its only prime factor is 3), so by Euclid's lemma $p$ divides the number of ones. For $p = 7$:
       $111111 = 7 \times 15873$. ✓

## Common mistake

**Reducing the exponent mod $p$ instead of mod $p - 1$.** For $3^{100} \bmod 7$, some people reduce
$100 \equiv 2 \pmod 7$ and answer $3^2 = 9 \equiv 2$. Wrong: the powers repeat every **6** steps, not every 7. The
base lives on the mod-7 clock; the exponent lives on the mod-6 clock. The correct answer is 4.

**Using the theorem when $p$ is not prime, or divides $a$.** Mod 9 or mod 15 the theorem says nothing (lesson 3 gives
the right power for those). And $14^{6} \equiv 0 \pmod 7$, because 7 divides 14.

## Where it leads

- Next: [Fast powers](02-fast-powers.md), how to compute $a^n \bmod m$ when Fermat does not apply or the numbers are
  hundreds of digits long.
- Later in this level: [Euler's theorem](03-euler-phi.md), the version for any modulus, and
  [Primality tests](04-primality-tests.md), which turn this theorem into a way to spot non-primes.
- [Level 7 page](index.md) · [Number theory topic page](../index.md) · Inverses mod $p$ and Euclid's lemma:
  [Level 6](../level-6/index.md)
- Pascal's triangle and binomial coefficients: [Counting](../../counting/index.md). Proof by induction:
  [Logic](../../logic/index.md).
- On the U of T shelf, "a prime clock where you can always divide" is called a **field**, and the integers mod $p$
  are a first example: [MAT240 Unit 1 (fields and vector spaces)](../../../uoft/MAT240H1/unit01.md).
- Fermat's theorem is the engine of the RSA code: [cryptography.akadian.ca](https://cryptography.akadian.ca/).
