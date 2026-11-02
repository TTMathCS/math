---
title: "Primality tests"
---

# Primality tests

*Number theory · level 7, lesson 4 of 6*

## A question to start

Here is a strange fact about the internet. Every secure website uses prime numbers about 300 digits long. Computers
can **check** that such a number is prime in a fraction of a second. But if you multiply two of them together and
hand someone the 600-digit product, nobody on Earth knows how to **split it back** into its two primes, even with
every computer working for years.

How can it be easy to tell that a number is prime, but hard to find the factors of a number that is not? The answer
is that a good prime test never looks for factors at all. It looks for a **broken promise**: a number that fails
Fermat's little theorem cannot be prime.

## The idea

### Trial division, and why you can stop at the square root

The simplest test: divide $n$ by $2, 3, 4, \ldots$ and see whether anything goes in exactly. Two improvements make it
much faster.

**Only try primes.** If $n$ had a factor 6, it would also have the factors 2 and 3, which you tried first.

**Stop at $\sqrt n$.** If $n = ab$ with both $a$ and $b$ bigger than $\sqrt n$, then $ab > \sqrt n \times \sqrt n
= n$, which is impossible. So if $n$ is not prime, it has a factor **at most** $\sqrt n$, and that factor has a prime
factor at most $\sqrt n$ too. If no prime up to $\sqrt n$ divides $n$, then $n$ is prime.

For $n = 1009$: $\sqrt{1009} \approx 31.8$, so try the primes 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31. None divides
1009, so 1009 is prime. Eleven divisions instead of a thousand.

The same idea is why, in the sieve of Eratosthenes (level 2), you could stop crossing out after 7 for numbers up to
100: $\sqrt{100} = 10$, and the last prime below 10 is 7.

### Why trial division is too slow for big numbers

For a 300-digit $n$, $\sqrt n$ has about 150 digits. Even counting only primes, there are about $10^{147}$ of them
below $\sqrt n$ (level 8 shows how to estimate this). A computer doing a billion billion ($10^{18}$) divisions a
second would need about $10^{129}$ seconds. The universe is about $4 \times 10^{17}$ seconds old. Trial division
is hopeless.

### The Fermat test

Fermat's little theorem makes a **promise**: if $n$ is prime and $a$ is not a multiple of $n$, then
$a^{n-1} \equiv 1 \pmod n$. Turn it around:

> **The Fermat test.** Pick a base $a$ with $1 < a < n - 1$. Compute $a^{n-1} \bmod n$ by square and multiply.
> If the answer is **not** 1, then $n$ is **definitely not prime**.

When the test says "not prime", it is certain, but it gives no factor. It has only shown that $n$ broke a promise
every prime keeps. For $n = 91$: $2^{90} \equiv 64 \pmod{91}$, so 91 is not prime. And indeed $91 = 7 \times 13$,
though the test never found 7 or 13.

How fast is it? Square and multiply needs about $2\log_2 n$ multiplications. For a 300-digit $n$ that is about 2000
multiplications of 300-digit numbers: a blink for a computer. That is the whole secret of the opening question:
**checking primality is fast because it uses fast powers, not factor searching.**

### Liars: when the test is fooled

If $a^{n-1} \equiv 1 \pmod n$, can we say $n$ is prime? **No.** Some composite numbers pass.

$341 = 11 \times 31$, yet $2^{340} \equiv 1 \pmod{341}$. We say 341 is a **pseudoprime to base 2**, and 2 is a
**liar** for 341. (The smallest pseudoprimes to base 2 are 341, 561 and 645.) But try base 3: $3^{340} \equiv 56
\pmod{341}$. Base 3 is a **witness**: it proves 341 composite.

So the natural plan is: test several random bases. For most composite numbers, at least half of all bases are
witnesses, so a few tries catch them. For $n = 91$, only 36 of the 72 bases coprime to 91 are liars (for example
3 is one: $3^{90} \equiv 1 \pmod{91}$), and every base sharing a factor with 91 is a witness.

### Carmichael numbers: the perfect liars

Unfortunately some composite numbers fool the Fermat test for **every** base coprime to them. They are called
**Carmichael numbers**, after Robert Carmichael, who found the smallest one in 1910:

$$561 = 3 \times 11 \times 17.$$

**Why 561 fools every base.** Take any $a$ coprime to 561. Then $a$ is coprime to 3, 11 and 17, so by Fermat:

- mod 3: $a^{2} \equiv 1$, and $560 = 280 \times 2$, so $a^{560} = (a^2)^{280} \equiv 1$;
- mod 11: $a^{10} \equiv 1$, and $560 = 56 \times 10$, so $a^{560} \equiv 1$;
- mod 17: $a^{16} \equiv 1$, and $560 = 35 \times 16$, so $a^{560} \equiv 1$.

So 3, 11 and 17 all divide $a^{560} - 1$, and since they are different primes, so does their product 561. The trick is
that $n - 1 = 560$ is a multiple of $3 - 1$, $11 - 1$ and $17 - 1$.

The same reasoning gives **Korselt's criterion**: a composite $n$ is a Carmichael number when it is a product of
different primes ("square-free") and $p - 1$ divides $n - 1$ for every prime $p$ dividing $n$. The next ones are
$1105 = 5 \times 13 \times 17$ and $1729 = 7 \times 13 \times 19$. In 1994 Alford, Granville and Pomerance proved
there are **infinitely many** Carmichael numbers, so the plain Fermat test can never be made perfect.

### A stronger test: square roots of 1

Real computers use an improved test (the **Miller-Rabin test**) built on one more fact about primes.

**Mod a prime $p$, the only numbers whose square is 1 are 1 and $-1$.** Reason: if $x^2 \equiv 1$, then $p$ divides
$x^2 - 1 = (x - 1)(x + 1)$, so by Euclid's lemma $p$ divides $x - 1$ or $x + 1$: $x \equiv 1$ or $x \equiv -1$.

Mod a composite number this can fail: mod 15, $4^2 = 16 \equiv 1$, but $4$ is neither 1 nor 14. So the strong test
watches the last few squarings on the way to $a^{n-1}$. Write $n - 1 = 2^s d$ with $d$ odd, compute $a^d$, and square
it $s$ times. For a prime, the list must either start at 1, or reach $-1$ before it reaches 1. If the list reaches
1 from a number that is not $\pm 1$, that number is a square root of 1 that a prime cannot have: $n$ is composite.

For 561 and base 2: $560 = 2^4 \times 35$. The list $2^{35}, 2^{70}, 2^{140}, 2^{280}, 2^{560}$ mod 561 is

$$263,\ 166,\ 67,\ 1,\ 1.$$

The number 67 squares to 1 but is neither 1 nor 560. So 561 is caught, even though Fermat's test was fooled. Better
still, $\gcd(67 - 1, 561) = 33$ and $\gcd(67 + 1, 561) = 17$, factors of 561.

For the strong test it is proved that at least three quarters of all bases are witnesses for every odd composite
number; there are no "Carmichael numbers" for it. Twenty random bases leave a chance below $(1/4)^{20}$, about one in
a trillion, of being fooled. And since 2002 a method (the AKS test, by Agrawal, Kayal and Saxena) is known that
decides primality with **certainty** in a number of steps that grows only like a power of the number of digits,
though in practice the strong test is used because it is faster.

### Why factoring is still hard

None of these tests finds a factor (except by luck, as with 561). To factor a 600-digit product of two primes, the
best known methods are enormously better than trial division but still take far longer than anyone can wait. No one
has proved that factoring **must** be hard; it is just that centuries of effort have found no fast method on
ordinary computers. Level 8 shows how RSA builds a lock out of exactly this gap: **finding primes is easy,
factoring is hard.**

## Worked examples

**1. Trial division.** Is 221 prime? $\sqrt{221} \approx 14.9$, so try 2, 3, 5, 7, 11, 13. 221 is odd; digit sum 5,
not a multiple of 3; does not end in 0 or 5; $221 = 7 \times 31 + 4$; $221 = 11 \times 20 + 1$;
$221 = 13 \times 17$. **Not prime.**

**2. Fermat test on 221.** $2^{220} \equiv 16 \pmod{221}$ (computed by square and multiply), not 1, so 221 is
composite. The test agrees with example 1 but did not need to find 13.

**3. Why 341 fools base 2.** $341 = 11 \times 31$. Since $2^{10} = 1024 = 3 \times 341 + 1$, we have
$2^{10} \equiv 1 \pmod{341}$. And $340 = 34 \times 10$, so $2^{340} = (2^{10})^{34} \equiv 1$. Base 2 is a liar
because its powers happen to cycle with length 10, which divides 340.

**4. Checking a Carmichael number.** Show $1105 = 5 \times 13 \times 17$ is a Carmichael number. It is square-free.
$1104 = 4 \times 276 = 12 \times 92 = 16 \times 69$, so $5 - 1$, $13 - 1$ and $17 - 1$ all divide $1104$. By
Korselt's criterion, $a^{1104} \equiv 1 \pmod{1105}$ for every $a$ coprime to 1105.

**5. The strong test on 1105.** $1104 = 2^4 \times 69$. With base 2 the list $2^{69}, 2^{138}, 2^{276}, 2^{552},
2^{1104}$ mod 1105 is $967, 259, 781, 1, 1$. The number 781 squares to 1 but is not $\pm 1$, so 1105 is composite.
(And $\gcd(780, 1105) = 65$, $\gcd(782, 1105) = 17$.)

## Try it

1. Is 1001 prime? Is 997? (Use trial division; $\sqrt{997} < 32$.)
2. To prove a number below one million is prime by trial division, which is the largest prime you might need to try?
3. Use the Fermat test with base 2 to show 15 is composite. Then show 4 is a liar for 15.
4. Show that $1729 = 7 \times 13 \times 19$ is a Carmichael number.
5. Mod 25, find all $x$ between 1 and 24 with $x^{24} \equiv 1$. Use your answer to explain why the Fermat test with
   any base coprime to 25 except 1, 7, 18 and 24 catches 25.
6. Explain why a Carmichael number must be odd. (Hint: if $n$ is even, try the base $a = n - 1 \equiv -1$.)
7. Mod 21, find a number other than 1 and 20 whose square is 1. What does that tell you about 21?

??? note "Answers"
    1. $1001 = 7 \times 143 = 7 \times 11 \times 13$: **not prime**. For 997 try 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
       31: the remainders are 1, 1, 2, 3, 7, 9, 11, 9, 8, 11, 5, none zero, so **997 is prime**.
    2. $\sqrt{1\,000\,000} = 1000$, so you need the primes up to 1000; the largest is **997**.
    3. $2^4 = 16 \equiv 1 \pmod{15}$, so $2^{14} = (2^4)^3 \cdot 2^2 \equiv 4 \ne 1$: 15 is composite. For base 4:
       $4^2 = 16 \equiv 1$, so $4^{14} = (4^2)^7 \equiv 1$. Base 4 passes, so it is a liar for 15.
    4. Square-free (three different primes). $n - 1 = 1728 = 6 \times 288 = 12 \times 144 = 18 \times 96$, so
       $7 - 1$, $13 - 1$ and $19 - 1$ all divide 1728. By Korselt's criterion it is a Carmichael number. (1729 is also
       the "taxicab number" $1^3 + 12^3 = 9^3 + 10^3$.)
    5. Only **1, 7, 18, 24**. ($7^2 = 49 \equiv -1$, so $7^4 \equiv 1$ and $7^{24} \equiv 1$; $18 \equiv -7$ and
       $24 \equiv -1$ work the same way.) Every other base coprime to 25 gives $a^{24} \not\equiv 1$, which exposes 25
       as composite. So 16 of the 20 coprime bases are witnesses.
    6. If $n$ is even (and $n > 2$), then $n - 1$ is odd. The base $a = n - 1$ is coprime to $n$, and
       $a^{n-1} \equiv (-1)^{\text{odd}} = -1 \not\equiv 1$. So base $n - 1$ is always a witness, and an even composite
       number is never a Carmichael number.
    7. $8^2 = 64 = 3 \times 21 + 1$, so $8^2 \equiv 1$ (also $13^2 = 169 = 8 \times 21 + 1$). A prime has only $\pm 1$
       as square roots of 1, so 21 is **not prime**; and $\gcd(8 - 1, 21) = 7$, $\gcd(8 + 1, 21) = 3$ give its factors.

## Common mistake

**Believing "passes the Fermat test" means "prime".** The test can prove a number is composite; passing it proves
nothing. 341 passes with base 2, and 561 passes with every coprime base. Even the strong test only makes "prime"
extremely likely, unless you use a proof method.

**Trial dividing past the square root.** Once you have tried every prime up to $\sqrt n$, stop. Any factor bigger than
$\sqrt n$ would have a partner smaller than $\sqrt n$, which you have already ruled out.

## Where it leads

- Previous: [Euler's phi function and Euler's theorem](03-euler-phi.md) · Next:
  [Pythagorean triples](05-pythagorean-triples.md)
- The gap between fast prime testing and slow factoring is what makes RSA safe: [level 8](../level-8/index.md).
- [Level 7 page](index.md) · [Number theory topic page](../index.md) · The sieve of Eratosthenes:
  [Level 2](../level-2/index.md)
- "At least three quarters of the bases are witnesses" is a probability statement: [Probability](../../probability/index.md).
- Measuring how the number of steps grows with the size of the input:
  [CSC148 Unit 9 (efficiency analysis)](../../../uoft/CSC148H1/unit09.md).
- Prime tests in real cryptography: [cryptography.akadian.ca](https://cryptography.akadian.ca/).
