---
title: "Euler's phi function and Euler's theorem"
---

# Euler's phi function and Euler's theorem

*Number theory · level 7, lesson 3 of 6*

## A question to start

What are the last two digits of $3^{2026}$?

"Last two digits" means the remainder mod 100. Fermat's little theorem does not help directly, because 100 is not
prime. But Leonhard Euler found a version of Fermat's theorem that works for **any** modulus. With it, the power of
3 that is 1 mod 100 can be found without a single trial. By the end of this lesson you will see that $3^{2026}$ ends
in **29**, and why.

## The idea

### Which numbers are "friendly" to $n$?

Two whole numbers are **coprime** (or "relatively prime") when their greatest common divisor is 1: they share no
prime factor. In level 6 you saw that $a$ has an inverse mod $n$ exactly when $a$ and $n$ are coprime. So the numbers
coprime to $n$ are the ones you can **divide by** on the mod-$n$ clock.

> **Euler's phi function.** For a whole number $n \ge 1$, $\varphi(n)$ ("phi of $n$") is how many of the numbers
> $1, 2, \ldots, n$ are coprime to $n$.

The letter $\varphi$ is the Greek letter phi. Some small values, worked out by listing:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\varphi(n)$ | 1 | 1 | 2 | 2 | 4 | 2 | 6 | 4 | 6 | 4 | 10 | 4 |

For example, the numbers up to 12 coprime to 12 are 1, 5, 7, 11, so $\varphi(12) = 4$. (By convention
$\varphi(1) = 1$, since $\gcd(1, 1) = 1$.)

### Phi of a prime and of a prime power

If $p$ is prime, every number from 1 to $p - 1$ is coprime to $p$, and $p$ itself is not. So

$$\varphi(p) = p - 1.$$

If $n = p^k$ is a prime power, the only way to share a factor with $p^k$ is to be a multiple of $p$. Among
$1, 2, \ldots, p^k$ the multiples of $p$ are $p, 2p, \ldots, p^{k-1} \cdot p$: there are $p^{k-1}$ of them. So

$$\varphi(p^k) = p^k - p^{k-1}.$$

For example $\varphi(9) = 9 - 3 = 6$ and $\varphi(8) = 8 - 4 = 4$, matching the table.

### Phi of a product of two primes

Now take $n = pq$ with $p$ and $q$ two **different** primes. A number up to $pq$ fails to be coprime to $pq$ exactly
when it is a multiple of $p$ or a multiple of $q$. Count them:

- multiples of $p$ up to $pq$: $p, 2p, \ldots, qp$, that is $q$ of them;
- multiples of $q$ up to $pq$: $p$ of them;
- multiples of both: only $pq$ itself, because a number divisible by two different primes is divisible by their
  product. It was counted twice, so add it back once.

So the numbers that are **not** coprime number $q + p - 1$, and

$$\varphi(pq) = pq - p - q + 1 = (p - 1)(q - 1).$$

The picture shows $n = 15 = 3 \times 5$. The multiples of 3 are orange, the multiples of 5 blue, and 15 (a multiple
of both) green. The 8 plain ones are coprime to 15, and $8 = (3 - 1)(5 - 1)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 170" role="img" aria-label="The numbers 1 to 15 in three rows of five. Multiples of 3 are orange, multiples of 5 are blue, 15 is green; the eight plain numbers 1, 2, 4, 7, 8, 11, 13, 14 are coprime to 15">
  <rect x="25" y="15" width="44" height="40" fill="none" stroke="currentColor"/><text x="47" y="41" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <rect x="79" y="15" width="44" height="40" fill="none" stroke="currentColor"/><text x="101" y="41" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <rect x="133" y="15" width="44" height="40" fill="#eea66f" stroke="currentColor"/><text x="155" y="41" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <rect x="187" y="15" width="44" height="40" fill="none" stroke="currentColor"/><text x="209" y="41" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <rect x="241" y="15" width="44" height="40" fill="#9cc9ea" stroke="currentColor"/><text x="263" y="41" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <rect x="25" y="65" width="44" height="40" fill="#eea66f" stroke="currentColor"/><text x="47" y="91" font-size="15" text-anchor="middle" fill="currentColor">6</text>
  <rect x="79" y="65" width="44" height="40" fill="none" stroke="currentColor"/><text x="101" y="91" font-size="15" text-anchor="middle" fill="currentColor">7</text>
  <rect x="133" y="65" width="44" height="40" fill="none" stroke="currentColor"/><text x="155" y="91" font-size="15" text-anchor="middle" fill="currentColor">8</text>
  <rect x="187" y="65" width="44" height="40" fill="#eea66f" stroke="currentColor"/><text x="209" y="91" font-size="15" text-anchor="middle" fill="currentColor">9</text>
  <rect x="241" y="65" width="44" height="40" fill="#9cc9ea" stroke="currentColor"/><text x="263" y="91" font-size="15" text-anchor="middle" fill="currentColor">10</text>
  <rect x="25" y="115" width="44" height="40" fill="none" stroke="currentColor"/><text x="47" y="141" font-size="15" text-anchor="middle" fill="currentColor">11</text>
  <rect x="79" y="115" width="44" height="40" fill="#eea66f" stroke="currentColor"/><text x="101" y="141" font-size="15" text-anchor="middle" fill="currentColor">12</text>
  <rect x="133" y="115" width="44" height="40" fill="none" stroke="currentColor"/><text x="155" y="141" font-size="15" text-anchor="middle" fill="currentColor">13</text>
  <rect x="187" y="115" width="44" height="40" fill="none" stroke="currentColor"/><text x="209" y="141" font-size="15" text-anchor="middle" fill="currentColor">14</text>
  <rect x="241" y="115" width="44" height="40" fill="#7ccf9a" stroke="currentColor"/><text x="263" y="141" font-size="15" text-anchor="middle" fill="currentColor">15</text>
</svg>
</div>

The counting trick, "add the two groups, then take away the overlap counted twice", is called
**inclusion-exclusion**; it has a whole lesson in [Counting](../../counting/index.md).

### The general formula

The same reasoning, with more primes, gives a formula for every $n$. If the different primes dividing $n$ are
$p_1, p_2, \ldots, p_r$, then

$$\varphi(n) = n\left(1 - \frac{1}{p_1}\right)\left(1 - \frac{1}{p_2}\right)\cdots\left(1 - \frac{1}{p_r}\right).$$

Here is a way to feel why. A fraction $\tfrac{1}{p}$ of the numbers up to $n$ are multiples of $p$, so a fraction
$1 - \tfrac1p$ are not. For different primes these "not a multiple" events behave independently (this is what the
Chinese remainder theorem of level 6 guarantees), so the fractions multiply. Check with $n = 12 = 2^2 \times 3$:
$12 \times \tfrac12 \times \tfrac23 = 4$. ✓ And $n = 100 = 2^2 \times 5^2$: $100 \times \tfrac12 \times \tfrac45 = 40$.

A useful consequence: if $m$ and $n$ are coprime, $\varphi(mn) = \varphi(m)\,\varphi(n)$. We say $\varphi$ is
**multiplicative**. For example $\varphi(36) = \varphi(4)\,\varphi(9) = 2 \times 6 = 12$. But be careful: this needs
$m$ and $n$ coprime. $\varphi(4) = 2$, not $\varphi(2)\varphi(2) = 1$.

### Euler's theorem

> **Euler's theorem.** If $a$ and $n$ are coprime, then
>
> $$a^{\varphi(n)} \equiv 1 \pmod n.$$

When $n = p$ is prime, $\varphi(p) = p - 1$ and this is exactly Fermat's little theorem. So Euler's theorem is
Fermat's theorem for every modulus. Euler published it in the 1760s.

**Why it is true.** The proof is the same shuffle as in lesson 1, using only the numbers coprime to $n$. Call them
$r_1, r_2, \ldots, r_k$, where $k = \varphi(n)$. Multiply each by $a$ and reduce mod $n$.

- Each $a r_i$ is still coprime to $n$ (neither $a$ nor $r_i$ shares a prime with $n$, so their product does not).
- No two are equal: if $a r_i \equiv a r_j$, multiply by the inverse of $a$ (it exists, because $a$ is coprime to
  $n$) to get $r_i \equiv r_j$, so $i = j$.

So $a r_1, \ldots, a r_k$ are $k$ different numbers coprime to $n$: a shuffle of $r_1, \ldots, r_k$. Multiplying
both lists,

$$a^{k}\, r_1 r_2 \cdots r_k \equiv r_1 r_2 \cdots r_k \pmod n.$$

The product $r_1 \cdots r_k$ is coprime to $n$, so it has an inverse and can be cancelled: $a^{k} \equiv 1$. ∎

For $n = 15$ and $a = 2$: the coprime numbers 1, 2, 4, 7, 8, 11, 13, 14 become 2, 4, 8, 14, 1, 7, 11, 13 after
doubling mod 15. Same eight numbers, shuffled. So $2^8 \equiv 1 \pmod{15}$; indeed $2^8 = 256 = 17 \times 15 + 1$.

### Using it: exponents mod $\varphi(n)$

Just as with Fermat, if $a$ is coprime to $n$, exponents can be reduced mod $\varphi(n)$:

$$a^{m} \equiv a^{r} \pmod n \quad \text{where } r \text{ is the remainder of } m \text{ on division by } \varphi(n).$$

The power that brings $a$ back to 1 is sometimes **smaller** than $\varphi(n)$. The smallest such power is called the
**order** of $a$ mod $n$, and it always divides $\varphi(n)$. (If the order $d$ did not divide $\varphi(n)$, write
$\varphi(n) = qd + r$ with $0 < r < d$; then $1 \equiv a^{\varphi(n)} = (a^d)^q a^r \equiv a^r$, a smaller power
equal to 1, which contradicts $d$ being the smallest.)

## Worked examples

**1. The last two digits of $3^{2026}$.** $\varphi(100) = 40$ and $\gcd(3, 100) = 1$, so $3^{40} \equiv 1
\pmod{100}$. $2026 = 50 \times 40 + 26$, so $3^{2026} \equiv 3^{26}$. Now square and multiply (lesson 2):
$3^{10} = 59049 \to 49$, $3^{20} \equiv 49^2 = 2401 \to 1$. So the order of 3 mod 100 is in fact 20, and
$3^{26} \equiv 3^{6} = 729 \to 29$. The last two digits are **29**.

**2. Phi of some numbers.** $\varphi(77) = \varphi(7 \times 11) = 6 \times 10 = 60$.
$\varphi(360)$: $360 = 2^3 \times 3^2 \times 5$, so $\varphi(360) = 360 \times \tfrac12 \times \tfrac23 \times
\tfrac45 = 96$. $\varphi(1000) = 1000 \times \tfrac12 \times \tfrac45 = 400$.

**3. $2^{1000} \bmod 77$.** $\gcd(2, 77) = 1$ and $\varphi(77) = 60$. $1000 = 16 \times 60 + 40$, so $2^{1000}
\equiv 2^{40} \pmod{77}$. Square and multiply: $2^8 = 256 \equiv 25$, $2^{16} \equiv 625 \equiv 9$,
$2^{32} \equiv 81 \equiv 4$. Then $2^{40} = 2^{32} \cdot 2^8 \equiv 4 \times 25 = 100 \equiv 23$. Answer: **23**.

**4. A shortcut by splitting.** Still $2^{40} \bmod 77$, another way. Mod 7: $2^3 = 8 \equiv 1$, so $2^{40} =
(2^3)^{13} \cdot 2 \equiv 2$. Mod 11: $2^{10} \equiv 1$ (Fermat), so $2^{40} \equiv 1$. Which number mod 77 is 2 mod 7
and 1 mod 11? Try $1, 12, 23, \ldots$ (the numbers that are 1 mod 11): $23 = 3 \times 7 + 2$. ✓ The Chinese remainder
theorem (level 6) glues the two answers into 23, the same as before.

**5. Why the condition "coprime" matters.** Try $a = 2$, $n = 12$: $\varphi(12) = 4$ but $2^4 = 16 \equiv 4
\pmod{12}$, not 1. In fact no power of 2 is ever 1 mod 12: every power of 2 is even, and an even number minus 1 is
odd, so never a multiple of 12.

## Try it

1. List the numbers up to 20 that are coprime to 20, and check that there are $\varphi(20) = 8$ of them.
2. Find $\varphi(35)$, $\varphi(81)$, $\varphi(97)$ (97 is prime) and $\varphi(1001)$ ($1001 = 7 \times 11 \times 13$).
3. Find the last two digits of $9^{1203}$.
4. Find $3^{100} \bmod 35$.
5. Show that $\varphi(n)$ is even for every $n \ge 3$. (Hint: if $a$ is coprime to $n$, so is $n - a$.)
6. The divisors of 12 are 1, 2, 3, 4, 6, 12. Add up $\varphi(d)$ for each of them. What do you notice?
7. Find the last digit of $12345^{6789}$ using Euler's theorem with $n = 10$. Why do you have to be careful?

??? note "Answers"
    1. 1, 3, 7, 9, 11, 13, 17, 19: eight numbers. Formula: $20 \times \tfrac12 \times \tfrac45 = 8$. ✓
    2. $\varphi(35) = 4 \times 6 = 24$. $\varphi(81) = 81 - 27 = 54$. $\varphi(97) = 96$.
       $\varphi(1001) = 6 \times 10 \times 12 = 720$.
    3. $\gcd(9, 100) = 1$ and $\varphi(100) = 40$. $1203 = 30 \times 40 + 3$, so $9^{1203} \equiv 9^3 = 729$. The last
       two digits are **29**.
    4. $\varphi(35) = 24$, $\gcd(3, 35) = 1$. $100 = 4 \times 24 + 4$, so $3^{100} \equiv 3^4 = 81 = 2 \times 35 + 11$.
       The answer is **11**.
    5. If $\gcd(a, n) = 1$ then $\gcd(n - a, n) = 1$ too (a common factor of $n - a$ and $n$ would divide
       $n - (n - a) = a$). So the coprime numbers come in pairs $\{a, n - a\}$. A number cannot pair with itself unless
       $a = n - a$, that is $n = 2a$; but then $\gcd(a, n) = a$, which is 1 only when $a = 1$ and $n = 2$. So for
       $n \ge 3$ the coprime numbers split into pairs, and their count is even.
    6. $\varphi(1) + \varphi(2) + \varphi(3) + \varphi(4) + \varphi(6) + \varphi(12) = 1 + 1 + 2 + 2 + 2 + 4 = 12$.
       The sum is 12 itself. This is true for every $n$ (a theorem of Gauss): sort the fractions
       $\tfrac{1}{n}, \tfrac{2}{n}, \ldots, \tfrac{n}{n}$ by their denominator in lowest terms, and exactly
       $\varphi(d)$ of them end up with denominator $d$.
    7. $12345 \equiv 5 \pmod{10}$, and 5 is **not** coprime to 10, so Euler's theorem does not apply. Instead notice
       that every power of 5 ends in 5: $5 \times 5 = 25$, and $5 \times 5 \equiv 5 \pmod{10}$. So the last digit is
       **5**. The care: always check $\gcd(a, n) = 1$ first.

## Common mistake

**Thinking $\varphi$ multiplies for every product.** $\varphi(mn) = \varphi(m)\varphi(n)$ only when $m$ and $n$ are
coprime. $\varphi(8) = 4$, but $\varphi(2)\varphi(4) = 1 \times 2 = 2$. For prime powers use $p^k - p^{k-1}$.

**Thinking $\varphi(n)$ is the first power that gives 1.** It is **a** power that gives 1, not always the smallest.
Mod 100 the powers of 3 return to 1 already at 20, and the powers of 7 at 4 ($7^4 = 2401$). The smallest one always
divides $\varphi(n)$.

## Where it leads

- Previous: [Fast powers](02-fast-powers.md) · Next: [Primality tests](04-primality-tests.md)
- The formula $\varphi(pq) = (p-1)(q-1)$ and Euler's theorem are the heart of RSA:
  [level 8](../level-8/index.md), lesson 2.
- [Level 7 page](index.md) · [Number theory topic page](../index.md)
- Inclusion-exclusion for counting: [Counting](../../counting/index.md).
- The numbers coprime to $n$, with multiplication mod $n$, form a **group**; Euler's theorem is a special case of
  Lagrange's theorem about groups, met in a first abstract algebra course. On the U of T shelf, the integers mod $p$
  as a field: [MAT240 Unit 1](../../../uoft/MAT240H1/unit01.md).
- Real-world use: [cryptography.akadian.ca](https://cryptography.akadian.ca/).
