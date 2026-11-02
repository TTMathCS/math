---
title: "Beyond: Fermat's little theorem and secret codes"
---

# Beyond: Fermat's little theorem and secret codes

*Number theory · step 5 of 5*

## A question to start

Take any whole number that is not a multiple of 7. Raise it to the 6th power and subtract 1:

$$2^6 - 1 = 63 = 7 \times 9, \qquad 3^6 - 1 = 728 = 7 \times 104, \qquad 4^6 - 1 = 4095 = 7 \times 585.$$

Every answer is a multiple of 7. Try 5: $5^6 - 1 = 15624 = 7 \times 2232$. Again! And it is no coincidence that 6 is
one less than 7. On this page you will see why this always happens for every prime, and how the same fact keeps
online messages secret.

## The idea

### There is no biggest prime

Before using primes, a famous old proof that they never run out. It is in Euclid's *Elements*.

Suppose someone claims to have a **complete** list of the primes: $p_1, p_2, \ldots, p_k$. Multiply them all together
and add 1:

$$N = p_1 \times p_2 \times \cdots \times p_k + 1.$$

Divide $N$ by any prime on the list and the remainder is 1, so no prime on the list divides $N$. But $N$ is bigger
than 1, so it has at least one prime factor (by the Fundamental Theorem of Arithmetic from the Build step). That
prime is **not on the list**. So no finite list can contain every prime: there are infinitely many. ∎

This is a **proof by contradiction**: assume the opposite of what you want, and show it leads to something impossible.

### Dividing on a clock: inverses

In ordinary arithmetic, dividing by 7 is the same as multiplying by $\tfrac17$, the number that makes
$7 \times \tfrac17 = 1$. On a clock there are no fractions, but sometimes there is still a number that does the job.
An **inverse** of $a$ mod $n$ is a whole number $x$ with

$$a\,x \equiv 1 \pmod n.$$

For example, $3 \times 4 = 12 \equiv 1 \pmod{11}$, so 4 is the inverse of 3 mod 11. "Dividing by 3" mod 11 means
"multiplying by 4".

Not every number has an inverse. Mod 10, the number 2 has none: $2x$ is always even, and an even number is never
1 more than a multiple of 10. The rule is:

> $a$ has an inverse mod $n$ exactly when $\gcd(a, n) = 1$.

When $n$ is a **prime** $p$, every $a$ from 1 to $p-1$ has $\gcd(a, p) = 1$, so every one of them has an inverse.
Prime clocks are the ones where you can always divide.

### Finding inverses: Euclid run backwards

Euclid's algorithm can do more than find a GCD. Run it backwards and it writes the GCD as a combination of the two
numbers. This is called **Bézout's identity**: for any whole numbers $a$ and $b$ there are whole numbers $x$ and $y$
(possibly negative) with

$$a x + b y = \gcd(a, b).$$

If $\gcd(a, n) = 1$, this says $a x + n y = 1$. The term $n y$ is a multiple of $n$, so $a x \equiv 1 \pmod n$: $x$
is the inverse. The worked example below does this step by step.

### Fermat's little theorem

> **Fermat's little theorem.** If $p$ is a prime and $a$ is a whole number that is not a multiple of $p$, then
> $a^{p-1} \equiv 1 \pmod p$.

With $p = 7$ this is the opening puzzle: $a^6 \equiv 1 \pmod 7$, that is, $7$ divides $a^6 - 1$. Pierre de Fermat
stated it in a letter in 1640, without a proof; the first published proof came from Leonhard Euler about a century
later. ("Little" only separates it from Fermat's *last* theorem, a much harder statement.)

**Why it is true.** Take $p = 7$ and $a = 3$, and multiply each of 1, 2, 3, 4, 5, 6 by 3, mod 7:

| $k$ | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| $3k \bmod 7$ | 3 | 6 | 2 | 5 | 1 | 4 |

The bottom row is the same six numbers, **shuffled**. That always happens: if $ia \equiv ja$ then $p$ divides
$(i - j)a$; since $p$ is prime and does not divide $a$, it must divide $i - j$, which is impossible for two different
numbers between 1 and $p-1$. And none of the products is 0 for the same reason. So multiplying both rows together
gives the same product:

$$(1a)(2a)(3a)\cdots\big((p-1)a\big) \equiv 1 \cdot 2 \cdot 3 \cdots (p-1) \pmod p.$$

The left side is $a^{p-1}$ times the right side. The right side, $1 \cdot 2 \cdots (p-1)$, shares no factor with $p$,
so it has an inverse and we may cancel it. What is left is $a^{p-1} \equiv 1 \pmod p$. ∎

### A test for primes

Fermat's theorem gives a fast way to show a number is **not** prime. If $2^{n-1} \not\equiv 1 \pmod n$, then $n$
cannot be prime. For $n = 91$, a computer finds $2^{90} \equiv 64 \pmod{91}$, so 91 is not prime (indeed
$91 = 7 \times 13$), and we learn this without searching for a factor. A word of warning: passing the test does not
prove a number **is** prime. $341 = 11 \times 31$ passes it with base 2. Real prime tests used by computers add more
checks.

### Secret codes: RSA in miniature

The **RSA** system, published in 1977, lets anyone lock a message with a **public key** that only the owner can undo.
A toy version with tiny numbers:

1. Pick two primes, $p = 5$ and $q = 11$. Multiply: $n = 55$.
2. Work out $(p-1)(q-1) = 4 \times 10 = 40$.
3. Pick a locking number $e = 3$ that shares no factor with 40. Find its inverse mod 40:
   $3 \times 27 = 81 \equiv 1 \pmod{40}$, so the unlocking number is $d = 27$.
4. Publish $n = 55$ and $e = 3$. Keep $d = 27$ secret.

To send the message $m = 9$, anyone computes $9^3 = 729 \equiv 14 \pmod{55}$ and sends **14**. The owner computes
$14^{27} \bmod 55$, which comes out as **9** again. A version of Fermat's theorem for the number $n = pq$ (due to
Euler) is exactly what guarantees the lock and key undo each other. To find $d$ you need $(p-1)(q-1)$, and for that
you need to factor $n$. With $n = 55$ that is easy; real keys use primes hundreds of digits long, and nobody knows a
fast way to factor their product.

## Worked example

**Find the inverse of 7 mod 26, and use it to solve $7x \equiv 3 \pmod{26}$.**

*Step 1: Euclid's algorithm.*

$$
\begin{aligned}
26 &= 3 \times 7 + 5\\
7 &= 1 \times 5 + 2\\
5 &= 2 \times 2 + 1
\end{aligned}
$$

The GCD is 1, so an inverse exists.

*Step 2: run it backwards.* Start from the last line and replace each remainder using the line above it:

$$
\begin{aligned}
1 &= 5 - 2 \times 2\\
  &= 5 - 2 \times (7 - 5) = 3 \times 5 - 2 \times 7\\
  &= 3 \times (26 - 3 \times 7) - 2 \times 7 = 3 \times 26 - 11 \times 7.
\end{aligned}
$$

*Step 3: read off the inverse.* Mod 26 the term $3 \times 26$ vanishes, leaving $-11 \times 7 \equiv 1$. So the
inverse of 7 is $-11 \equiv 15 \pmod{26}$. Check: $7 \times 15 = 105 = 4 \times 26 + 1$. ✓

*Step 4: solve.* Multiply both sides of $7x \equiv 3$ by 15: $x \equiv 45 \equiv 19 \pmod{26}$. Check:
$7 \times 19 = 133 = 5 \times 26 + 3$. ✓

Mod 26 is no accident: there are 26 letters in the alphabet, and "multiply each letter's number by 7" is a real
(if weak) code. The inverse 15 is its key for decoding.

## Try it

1. Without a calculator, what is $2^{40} \bmod 41$? (41 is prime.)
2. Use Fermat's little theorem to find $3^{100} \bmod 7$.
3. Find the inverse of 3 mod 11 and the inverse of 5 mod 12.
4. $2 \times 3 \times 5 \times 7 \times 11 + 1 = 2311$, which is prime. But
   $2 \times 3 \times 5 \times 7 \times 11 \times 13 + 1 = 30031 = 59 \times 509$. Does this break Euclid's proof?
5. With the toy RSA key above ($n = 55$, $e = 3$), lock the message $m = 2$.
6. Explain why 6 has no inverse mod 9.

??? note "Answers"
    1. **1.** By Fermat's little theorem with $p = 41$ and $a = 2$, $2^{40} \equiv 1 \pmod{41}$.
    2. $3^6 \equiv 1 \pmod 7$. $100 = 16 \times 6 + 4$, so $3^{100} = (3^6)^{16} \times 3^4$,
       which is $\equiv 3^4 = 81 \equiv 4 \pmod 7$. The answer is **4**.
    3. $3 \times 4 = 12 \equiv 1 \pmod{11}$, so the inverse of 3 is **4**. $5 \times 5 = 25 = 2 \times 12 + 1$, so
       5 is its own inverse mod 12.
    4. No. The proof never said $N$ is prime, only that its prime factors are not on the list. Here 59 and 509 are
       both primes bigger than 13, so they really are new primes.
    5. $2^3 = 8$, and $8 < 55$, so the locked message is **8**. (A computer confirms $8^{27} \equiv 2 \pmod{55}$,
       unlocking it.)
    6. $\gcd(6, 9) = 3$, not 1. If $6x \equiv 1 \pmod 9$, then $6x - 1$ would be a multiple of 9, and so a multiple
       of 3. But $6x$ is a multiple of 3, so $6x - 1$ is always 1 short of one. It can never be.

## Common mistake

**Using Fermat's little theorem when the modulus is not prime.** $2^{8} = 256 \equiv 4 \pmod 9$, not 1: the theorem
says nothing about mod 9, because 9 is not prime. (For a composite modulus there is Euler's version, which uses a
different power.) Also check that $a$ is not a multiple of $p$: $7^{6} \equiv 0 \pmod 7$, not 1.

## Where it leads

- Back a step: [Master: clock arithmetic](04-master.md)
- How RSA, Diffie-Hellman and other real ciphers are built from exactly these ideas:
  [cryptography.akadian.ca](https://cryptography.akadian.ca/).
- On the U of T shelf, "a prime clock where you can always divide" is called a *field*, and the integers mod $p$
  are a first example: [MAT240 Unit 1 (fields and vector spaces)](../../uoft/MAT240H1/unit01.md). Unique
  factorization comes back for polynomials in [MAT240 Unit 9](../../uoft/MAT240H1/unit09.md), and proof by
  contradiction in [MAT137 Unit 1 (logic, sets and proofs)](../../uoft/MAT137/unit01.md).
- The other topics: [all topics](../index.md).
