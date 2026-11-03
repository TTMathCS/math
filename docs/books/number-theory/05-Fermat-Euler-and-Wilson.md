# 5. Fermat, Euler and Wilson

*Raise any number to the 7th power and subtract the number: $2^7 - 2 = 126$, $3^7 - 3 = 2184$, $10^7 - 10 = 9{,}999{,}990$.
Every answer is divisible by 7. Multiply $1 \cdot 2 \cdot 3 \cdots 10$ and add 1: $3{,}628{,}801$, which is divisible by 11.
These are not accidents but the two oldest theorems about arithmetic modulo a prime, Fermat's little theorem and
Wilson's theorem. This chapter proves both (Fermat's in two quite different ways), extends Fermat's theorem to every
modulus with Euler's phi function, shows how to compute enormous powers modulo $n$ in a few steps, and ends with the
numbers that pretend to be prime: pseudoprimes and Carmichael numbers.*

!!! abstract "In this chapter"

    **You will learn:**

    - Fermat's little theorem, $a^p \equiv a \pmod p$, with a counting proof (necklaces) and an algebraic proof
    - Euler's phi function and Euler's theorem $a^{\varphi(n)} \equiv 1 \pmod n$
    - Wilson's theorem, $(p - 1)! \equiv -1 \pmod p$, its converse, and when $-1$ is a square modulo $p$
    - square-and-multiply, which computes $a^k \bmod n$ with about $2 \log_2 k$ multiplications
    - why Fermat's theorem cannot be turned around: pseudoprimes, Carmichael numbers and Korselt's criterion

    **You need:** [Chapter 4](04-Congruences.md) (congruences, inverses, cancellation) and
    [Chapter 3](03-GCD-and-Euclids-Algorithm.md). For a gentler version, see the Topics lessons
    [Fermat's little theorem](../../topics/number-theory/level-7/01-fermats-little-theorem.md),
    [Fast powers: square and multiply](../../topics/number-theory/level-7/02-fast-powers.md),
    [Euler's phi function and Euler's theorem](../../topics/number-theory/level-7/03-euler-phi.md) and
    [Primality tests](../../topics/number-theory/level-7/04-primality-tests.md).

    **Levels:** 5.1 to 5.4 are intermediate; 5.5 is advanced (the "only if" half of Korselt's criterion borrows
    results from Chapters 6 and 7).

## 5.1 Fermat's little theorem

### The pattern

Take a prime $p$ and look at powers modulo $p$. Here are $a^k \bmod 7$ for $a = 1, \dots, 6$:

| $a$ | $a^1$ | $a^2$ | $a^3$ | $a^4$ | $a^5$ | $a^6$ |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 2 | 2 | 4 | 1 | 2 | 4 | 1 |
| 3 | 3 | 2 | 6 | 4 | 5 | 1 |
| 4 | 4 | 2 | 1 | 4 | 2 | 1 |
| 5 | 5 | 4 | 6 | 2 | 3 | 1 |
| 6 | 6 | 1 | 6 | 1 | 6 | 1 |

The last column is all 1s. Modulo 7, every nonzero number raised to the 6th power is 1. Try 11 and you will find
$a^{10} \equiv 1$ for $a = 1, \dots, 10$. Try 6, a composite, and it fails: $2^5 = 32 \equiv 2 \pmod 6$.

**Theorem 5.1 (Fermat's little theorem).** Let $p$ be prime. For every integer $a$,

$$a^p \equiv a \pmod p .$$

Equivalently, if $p \nmid a$, then $a^{p-1} \equiv 1 \pmod p$.

The two forms are equivalent: if $p \nmid a$, $a$ has an inverse mod $p$ and we can cancel one $a$ from $a^p \equiv a$
(Theorem 4.3); conversely multiplying $a^{p-1} \equiv 1$ by $a$ gives $a^p \equiv a$, and if $p \mid a$ both sides
are $\equiv 0$. The theorem is "little" only to distinguish it from Fermat's Last Theorem; it is used far more.

### First proof: necklaces

Here is a proof by counting, published by Solomon Golomb in 1956.

Take beads in $a$ colours and make strings of $p$ beads. There are $a^p$ strings, since each of the $p$ positions
has $a$ choices. Exactly $a$ of them use a single colour. Now close each string into a necklace, so that strings that
differ by a rotation give the same necklace. The picture shows $p = 3$ beads and $a = 2$ colours.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 140" role="img" aria-label="The 8 strings of 3 beads in 2 colours, closed into necklaces: 2 single-colour necklaces, and two groups of 3 strings that are rotations of each other">
  <circle cx="40" cy="55" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="40.0" cy="39.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="53.9" cy="63.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="26.1" cy="63.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="98" text-anchor="middle" font-size="12" fill="currentColor">AAA</text>
  <circle cx="90" cy="55" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="90.0" cy="39.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="103.9" cy="63.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="76.1" cy="63.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="98" text-anchor="middle" font-size="12" fill="currentColor">BBB</text>
  <circle cx="170" cy="55" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="170.0" cy="39.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="183.9" cy="63.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="156.1" cy="63.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="98" text-anchor="middle" font-size="12" fill="currentColor">AAB</text>
  <circle cx="220" cy="55" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="220.0" cy="39.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="233.9" cy="63.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="206.1" cy="63.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="220" y="98" text-anchor="middle" font-size="12" fill="currentColor">ABA</text>
  <circle cx="270" cy="55" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="270.0" cy="39.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="283.9" cy="63.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="256.1" cy="63.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="270" y="98" text-anchor="middle" font-size="12" fill="currentColor">BAA</text>
  <circle cx="350" cy="55" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="350.0" cy="39.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="363.9" cy="63.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="336.1" cy="63.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="350" y="98" text-anchor="middle" font-size="12" fill="currentColor">ABB</text>
  <circle cx="400" cy="55" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="400.0" cy="39.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="413.9" cy="63.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="386.1" cy="63.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="400" y="98" text-anchor="middle" font-size="12" fill="currentColor">BAB</text>
  <circle cx="450" cy="55" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="450.0" cy="39.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="463.9" cy="63.0" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="436.1" cy="63.0" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="450" y="98" text-anchor="middle" font-size="12" fill="currentColor">BBA</text>
  <line x1="130" y1="20" x2="130" y2="130" stroke="currentColor" stroke-dasharray="4 4"/>
  <line x1="310" y1="20" x2="310" y2="130" stroke="currentColor" stroke-dasharray="4 4"/>
  <text x="65" y="125" text-anchor="middle" font-size="12" fill="currentColor">one colour: a = 2</text>
  <text x="220" y="125" text-anchor="middle" font-size="12" fill="currentColor">one orbit of p = 3</text>
  <text x="400" y="125" text-anchor="middle" font-size="12" fill="currentColor">one orbit of p = 3</text>
</svg>
</div>

The $2^3 = 8$ strings fall into the 2 single-colour ones and two groups of 3 rotations each: $8 - 2 = 6 = 2 \cdot 3$.

*Proof.* Let $R$ be "rotate the string by one place" (the last bead moves to the front). Applying $R$ $p$ times gives
back the string. For a string $s$, its **orbit** is the set $\{s, Rs, R^2 s, \dots, R^{p-1} s\}$ of its rotations.

*Claim: if $s$ uses at least two colours, its $p$ rotations are all different.* Suppose $R^i s = R^j s$ with
$0 \le i < j \le p - 1$. Applying $R$ another $p - j$ times on both sides gives $R^k s = s$ with $k = p - (j - i)$, and
$1 \le k \le p - 1$. So $s$ is unchanged by rotating $k$ places, hence also by rotating $2k, 3k, \dots$ places, that is
by $mk$ places for every $m$. Since $p$ is prime, $\gcd(k, p) = 1$, so $k$ has an inverse mod $p$ and some $m$ has
$mk \equiv 1 \pmod p$. Then $s$ is unchanged by rotating one place: every bead equals the one before it, and $s$ uses
only one colour. Contradiction.

So the $a^p - a$ strings with at least two colours split into orbits of exactly $p$ strings each (two orbits are either
equal or disjoint, since each string determines its orbit). Hence $p \mid a^p - a$ for every $a \ge 1$. For $a = 0$ it is
trivial, and for negative $a$ use $a \equiv a + mp$ with $a + mp > 0$. $\square$

The proof also counts necklaces: there are $a + \frac{a^p - a}{p}$ different necklaces of $p$ beads in $a$ colours
(each necklace is an orbit). For $p = 3$, $a = 2$: $2 + 2 = 4$. Where did primality matter? In the step "$\gcd(k, p) = 1$".
For 4 beads, the string $ABAB$ is unchanged by rotating two places, and has an orbit of size 2: the count fails.

### Second proof: multiplying all the residues

*Proof.* Let $p \nmid a$. Consider the $p - 1$ numbers

$$a, \; 2a, \; 3a, \; \dots, \; (p - 1)a \pmod p .$$

None is $\equiv 0$ (by Euclid's lemma, $p \nmid ka$ for $1 \le k \le p - 1$). No two are congruent: $ia \equiv ja$ implies
$i \equiv j$ by cancelling $a$, which is allowed because $\gcd(a, p) = 1$. So these are $p - 1$ different nonzero
residues, which means they are exactly $1, 2, \dots, p - 1$ in some order. (Look at the multiplication table mod 5 in
[Chapter 4](04-Congruences.md): each nonzero row is a rearrangement of $1, 2, 3, 4$.) Multiply them all:

$$a \cdot 2a \cdots (p-1)a \equiv 1 \cdot 2 \cdots (p - 1) \pmod p, \quad\text{that is}\quad a^{p-1}(p - 1)! \equiv (p - 1)! \pmod p .$$

Since $(p - 1)!$ is a product of numbers coprime to $p$, it is coprime to $p$ and can be cancelled: $a^{p-1} \equiv 1$.
$\square$

**The group view.** The nonzero residues mod $p$ form a group under multiplication with $p - 1$ elements. The powers
$1, a, a^2, \dots$ eventually return to 1; the first exponent $d$ with $a^d \equiv 1$ is the **order** of $a$, and
$\{1, a, \dots, a^{d-1}\}$ is a subgroup with $d$ elements. Lagrange's theorem
([Algebra, chapter 14](../algebra/14-Subgroups-Cosets-and-Lagrange.md)) says $d$ divides $p - 1$, so
$a^{p-1} = (a^d)^{(p-1)/d} \equiv 1$. In the table above, 2 and 4 have order 3, 6 has order 2, and 3 and 5 have order 6;
all divide 6. Orders are the subject of [Chapter 7](07-Primitive-Roots.md).

### A third proof, by the binomial theorem

For $0 < k < p$, the binomial coefficient $\binom{p}{k} = \frac{p!}{k!\,(p-k)!}$ is divisible by $p$: the prime $p$ divides
the numerator, and does not divide the denominator, which is a product of numbers smaller than $p$. So in the binomial
expansion ([Algebra, chapter 8](../algebra/08-Sequences-Series-and-Induction.md)),

$$(a + 1)^p = a^p + \binom{p}{1}a^{p-1} + \dots + \binom{p}{p-1}a + 1 \equiv a^p + 1 \pmod p .$$

Now induction on $a \ge 0$: $0^p \equiv 0$, and if $a^p \equiv a$ then $(a + 1)^p \equiv a^p + 1 \equiv a + 1$. This is
close to Euler's proof of 1736, the first published proof.

### Using Fermat's theorem

**Reducing exponents.** If $p \nmid a$, exponents of $a$ can be reduced modulo $p - 1$: if $k \equiv k' \pmod{p-1}$ then
$a^k \equiv a^{k'} \pmod p$.

**Example 1.** $3^{100} \bmod 7$: $100 = 16 \cdot 6 + 4$, so $3^{100} \equiv 3^4 = 81 \equiv 4 \pmod 7$.

**Example 2.** $5^{2026} \bmod 13$: $2026 = 168 \cdot 12 + 10$, so $5^{2026} \equiv 5^{10}$. Since $5^2 = 25 \equiv -1$,
$5^{10} = (5^2)^5 \equiv (-1)^5 = -1 \equiv 12 \pmod{13}$.

**Proving a number composite without factoring it.** If $a^{n-1} \not\equiv 1 \pmod n$ for some $a$ with
$\gcd(a, n) = 1$, then $n$ is not prime. For $n = 91$, section 5.4 computes $2^{90} \equiv 64 \pmod{91}$, so 91 is
composite (it is $7 \cdot 13$), and we never had to look for a factor. This **Fermat test** is how primality testing
starts; section 5.5 shows its weakness.

## 5.2 Euler's theorem and the phi function

### The question

Fermat's theorem needs a prime modulus. Is there something like it modulo 10, or modulo 100? The last digits of
powers of 3 are $3, 9, 7, 1, 3, 9, 7, 1, \dots$: $3^4 \equiv 1 \pmod{10}$. Powers of 2 never reach 1 mod 10, because
$\gcd(2, 10) \neq 1$. The right exponent turns out to be the number of residues coprime to $n$.

**Definition.** Euler's **phi function** (or totient) $\varphi(n)$ is the number of integers $k$ with $1 \le k \le n$
and $\gcd(k, n) = 1$.

By Theorem 4.4, $\varphi(n)$ is also the number of units (invertible classes) modulo $n$. Examples:

- $\varphi(10) = 4$: the numbers $1, 3, 7, 9$.
- $\varphi(12) = 4$: $1, 5, 7, 11$.
- $\varphi(p) = p - 1$ for a prime $p$: every $1 \le k \le p - 1$ is coprime to $p$.
- $\varphi(1) = 1$ by the definition ($\gcd(1, 1) = 1$).

### Formulas for phi

**Theorem 5.2.** (a) For a prime power, $\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p - 1)$.
(b) For distinct primes $p, q$, $\varphi(pq) = (p - 1)(q - 1)$.
(c) In general, if $n = p_1^{a_1} \cdots p_r^{a_r}$, then

$$\varphi(n) = n \prod_{i=1}^{r} \Bigl(1 - \frac{1}{p_i}\Bigr) = \prod_{i=1}^{r} p_i^{a_i - 1}(p_i - 1) .$$

*Proof of (a).* $k$ fails to be coprime to $p^k$ exactly when $p \mid k$. Among $1, \dots, p^k$ the multiples of $p$ are
$p, 2p, \dots, p^{k-1} \cdot p$: there are $p^{k-1}$ of them. Remove them.

*Proof of (b).* Among $1, \dots, pq$, the multiples of $p$ number $q$, the multiples of $q$ number $p$, and the only
number divisible by both is $pq$ itself (a common multiple of distinct primes is a multiple of $pq$, Corollary 3.7).
So the numbers sharing a factor with $pq$ number $q + p - 1$, and $\varphi(pq) = pq - p - q + 1 = (p - 1)(q - 1)$.

*About (c).* The same inclusion-exclusion counting works for any number of primes, and the cleanest proof is that
$\varphi$ is **multiplicative**: $\varphi(mn) = \varphi(m)\varphi(n)$ whenever $\gcd(m, n) = 1$. That fact is proved with
the Chinese remainder theorem in [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md), and (c)
follows from it and (a). $\square$

**Examples.** $\varphi(100) = \varphi(2^2)\varphi(5^2) = 2 \cdot 20 = 40$. $\varphi(360) = \varphi(2^3 \cdot 3^2 \cdot 5) = 4 \cdot 6 \cdot 4 = 96$.
$\varphi(1001) = \varphi(7 \cdot 11 \cdot 13) = 6 \cdot 10 \cdot 12 = 720$. $\varphi(2026) = \varphi(2)\varphi(1013) = 1012$
(1013 is prime).

### A sum formula

**Theorem 5.3 (Gauss).** For every $n \ge 1$, $\sum_{d \mid n} \varphi(d) = n$, the sum running over the positive
divisors of $n$.

*Proof.* Write the $n$ fractions $\frac{1}{n}, \frac{2}{n}, \dots, \frac{n}{n}$ in lowest terms. Each becomes $\frac{a}{d}$
with $d \mid n$, $1 \le a \le d$ and $\gcd(a, d) = 1$. Conversely each such $\frac{a}{d}$ equals $\frac{a(n/d)}{n}$, one of our
fractions, and different fractions in lowest terms are different numbers. So the $n$ fractions correspond exactly to
the pairs $(d, a)$, and for each $d$ there are $\varphi(d)$ choices of $a$. $\square$

*Check* for $n = 12$: the fractions $\frac{k}{12}$ reduce to denominators $1, 2, 3, 4, 6, 12$, and
$\varphi(1) + \varphi(2) + \varphi(3) + \varphi(4) + \varphi(6) + \varphi(12) = 1 + 1 + 2 + 2 + 2 + 4 = 12$.

### Euler's theorem

**Theorem 5.4 (Euler, 1763).** If $\gcd(a, n) = 1$, then

$$a^{\varphi(n)} \equiv 1 \pmod n .$$

*Proof.* Copy the second proof of Fermat's theorem, using only the units. Let $r_1, \dots, r_{\varphi(n)}$ be the integers
in $[1, n]$ coprime to $n$ (a **reduced residue system**). The numbers $ar_1, \dots, ar_{\varphi(n)}$ are again coprime to
$n$ (a product of units is a unit), and pairwise incongruent mod $n$ (cancel $a$). So they are the $r_i$ in another
order, and

$$a^{\varphi(n)} \, r_1 r_2 \cdots r_{\varphi(n)} \equiv r_1 r_2 \cdots r_{\varphi(n)} \pmod n .$$

The product $r_1 \cdots r_{\varphi(n)}$ is a unit, so it cancels. $\square$

When $n = p$ is prime, $\varphi(p) = p - 1$ and this is Fermat's theorem. In group language, $\varphi(n)$ is the size of
the group of units, and Lagrange's theorem gives the result at once.

**Example 1.** The last two digits of $13^{2026}$. $\gcd(13, 100) = 1$ and $\varphi(100) = 40$, so exponents reduce mod 40:
$2026 = 50 \cdot 40 + 26$ and $13^{2026} \equiv 13^{26} \pmod{100}$. Now $13^2 = 169 \equiv 69$,
$13^4 \equiv 69^2 = 4761 \equiv 61$, $13^8 \equiv 61^2 = 3721 \equiv 21$, $13^{16} \equiv 21^2 = 441 \equiv 41$, and
$13^{26} = 13^{16} \cdot 13^8 \cdot 13^2 \equiv 41 \cdot 21 \cdot 69$. Then $41 \cdot 21 = 861 \equiv 61$ and
$61 \cdot 69 = 4209 \equiv 9$. The last two digits are 09. *Check:* `pow(13, 2026, 100)` gives 9.

**Example 2.** Euler's theorem is the reason RSA decryption works. A public key is a product $n = pq$ of two large
primes and an exponent $e$ with $\gcd(e, \varphi(n)) = 1$; the private exponent is $d \equiv e^{-1} \pmod{\varphi(n)}$. Then
$ed = 1 + k\varphi(n)$ and $(m^e)^d = m \cdot (m^{\varphi(n)})^k \equiv m \pmod n$ for $m$ coprime to $n$. Computing $d$ needs
$\varphi(n) = (p - 1)(q - 1)$, which needs the factors. See [Chapter 12](12-Primality-Factoring-and-RSA.md) and the
cryptography book's [RSA chapter](https://cryptography.akadian.ca/book/13-RSA/).

The exponent $\varphi(n)$ is not always the smallest that works: $13^{20} \equiv 1 \pmod{100}$ already. The smallest
exponent that works for every unit, Carmichael's function $\lambda(n)$, divides $\varphi(n)$; Chapter 7 explains it.

## 5.3 Wilson's theorem

### The pattern

Compute $(p - 1)! \bmod p$: $1! = 1 \equiv -1 \pmod 2$; $2! = 2 \equiv -1 \pmod 3$; $4! = 24 \equiv -1 \pmod 5$;
$6! = 720 = 103 \cdot 7 - 1 \equiv -1 \pmod 7$; $10! = 3{,}628{,}800 \equiv -1 \pmod{11}$. For composites it fails:
$3! = 6 \equiv 2 \pmod 4$, $5! = 120 \equiv 0 \pmod 6$.

**Theorem 5.5 (Wilson's theorem).** If $p$ is prime, then $(p - 1)! \equiv -1 \pmod p$.

*Proof.* For $p = 2$ and $p = 3$ check directly. Let $p \ge 5$. Every $a$ in $\{1, \dots, p - 1\}$ has an inverse mod $p$ in
the same set (Corollary 4.5). Which numbers are their own inverses? $a^2 \equiv 1$ means $p \mid (a - 1)(a + 1)$, so
$a \equiv 1$ or $a \equiv -1$ (Euclid's lemma). So the numbers $2, 3, \dots, p - 2$ split into pairs $\{a, a^{-1}\}$ with
$a \neq a^{-1}$, and each pair multiplies to $\equiv 1$. Therefore

$$(p - 1)! = 1 \cdot \bigl(2 \cdot 3 \cdots (p - 2)\bigr) \cdot (p - 1) \equiv 1 \cdot 1 \cdot (p - 1) \equiv -1 \pmod p . \qquad \square$$

**Example.** For $p = 11$ the pairs from [Chapter 4](04-Congruences.md) are $\{2, 6\}, \{3, 4\}, \{5, 9\}, \{7, 8\}$. So
$10! = 1 \cdot (2 \cdot 6)(3 \cdot 4)(5 \cdot 9)(7 \cdot 8) \cdot 10 \equiv 1 \cdot 1 \cdot 1 \cdot 1 \cdot 1 \cdot 10 \equiv -1 \pmod{11}$.

### The converse

**Theorem 5.6.** If $n \ge 2$ and $(n - 1)! \equiv -1 \pmod n$, then $n$ is prime. In fact, for composite $n > 4$,
$(n - 1)! \equiv 0 \pmod n$.

*Proof.* Suppose $n$ is composite, with a divisor $a$, $1 < a < n$. Then $a$ is one of the factors of $(n - 1)!$, so
$a \mid (n - 1)!$. If also $n \mid (n - 1)! + 1$, then $a \mid (n - 1)! + 1$, so $a \mid 1$: impossible.

For the stronger claim, let $n > 4$ be composite. If $n = ab$ with $1 < a < b < n$, both $a$ and $b$ appear in
$(n - 1)!$, so $n = ab$ divides it. Otherwise $n = p^2$ for a prime $p$, and since $n > 4$, $p \ge 3$ and $2p < p^2 = n$;
then $p$ and $2p$ both appear in $(n - 1)!$, so $2p^2$ divides it. $\square$

So Wilson's theorem is a perfect test for primality: $n$ is prime if and only if $(n - 1)! \equiv -1 \pmod n$. It is
also useless in practice, because nobody knows how to compute $(n - 1)! \bmod n$ quickly for large $n$; it needs
about $n$ multiplications, far worse than trial division's $\sqrt n$.

### When is $-1$ a square?

Wilson's theorem answers a question that will matter in Chapters 8 and 11: for which primes $p$ is there an $x$ with
$x^2 \equiv -1 \pmod p$?

**Theorem 5.7.** Let $p$ be an odd prime. The congruence $x^2 \equiv -1 \pmod p$ has a solution if and only if
$p \equiv 1 \pmod 4$. When $p \equiv 1 \pmod 4$, one solution is $x = \bigl(\frac{p-1}{2}\bigr)!$.

*Proof.* Let $h = \frac{p-1}{2}$. Pair the factors of $(p - 1)!$ as $k$ and $p - k$ for $k = 1, \dots, h$:

$$(p - 1)! = \prod_{k=1}^{h} k\,(p - k) \equiv \prod_{k=1}^{h} k\,(-k) = (-1)^h (h!)^2 \pmod p .$$

By Wilson, $(-1)^h (h!)^2 \equiv -1$. If $p \equiv 1 \pmod 4$, $h$ is even, so $(h!)^2 \equiv -1$.

If $p \equiv 3 \pmod 4$, $h$ is odd. Suppose $x^2 \equiv -1$. Then $p \nmid x$, and by Fermat,
$1 \equiv x^{p-1} = (x^2)^h \equiv (-1)^h = -1 \pmod p$, so $p \mid 2$, which is false. $\square$

**Example.** $p = 13$: $h = 6$ and $6! = 720 = 55 \cdot 13 + 5$, so $x = 5$, and indeed $5^2 = 25 = 26 - 1 \equiv -1$.
For $p = 17$: $8! = 40320 \equiv 13$, and $13^2 = 169 = 10 \cdot 17 - 1 \equiv -1$. For $p = 7$ there is no solution:
the squares mod 7 are $1, 4, 2$.

This is the fact behind exercise 11, which proves at last that there are infinitely many primes of the form $4k + 1$,
as promised in [Chapter 2](02-Primes-and-Unique-Factorization.md).

## 5.4 Fast powering

### The problem

To use Fermat's or Euler's theorem on real numbers you must compute $a^k \bmod n$ with $k$ and $n$ of hundreds of
digits. Multiplying $a$ by itself $k - 1$ times is impossible: $k$ might be $10^{300}$. And computing $a^k$ first and
reducing afterwards is impossible too: the number $a^k$ would have more digits than there are atoms in the universe.

Two ideas solve it. **Reduce after every multiplication** (Theorem 4.2), so numbers never exceed $n^2$. And
**square repeatedly**: $a^2, a^4 = (a^2)^2, a^8, a^{16}, \dots$ take one multiplication each, so $a^{2^j}$ needs only $j$
squarings. Every exponent is a sum of powers of 2 (its binary expansion, [Chapter 1](01-Divisibility.md)), so multiply
together the right squares.

### Square and multiply

**Example.** $2^{90} \bmod 91$. In binary, $90 = (1011010)_2 = 64 + 16 + 8 + 2$. Square repeatedly, reducing mod 91:

| $j$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $2^{2^j} \bmod 91$ | 2 | 4 | 16 | 74 | 16 | 74 | 16 |

(For example $2^8 = 256 = 2 \cdot 91 + 74$ and $74^2 = 5476 = 60 \cdot 91 + 16$.) Then

$$2^{90} = 2^{64} \cdot 2^{16} \cdot 2^{8} \cdot 2^{2} \equiv 16 \cdot 16 \cdot 74 \cdot 4 \pmod{91}.$$

$16 \cdot 16 = 256 \equiv 74$; $74 \cdot 74 \equiv 16$; $16 \cdot 4 = 64$. So $2^{90} \equiv 64 \pmod{91}$, not 1, and by
Fermat's theorem 91 cannot be prime. That took 6 squarings and 3 multiplications instead of 89 multiplications.

**The count.** If $k$ has $L$ binary digits, square and multiply uses $L - 1$ squarings and at most $L - 1$ further
multiplications: at most $2 \log_2 k$ steps. For a 2048-bit exponent that is at most about 4096 multiplications of
2048-bit numbers, which a laptop does in milliseconds.

An equivalent way to organise it reads the binary digits from left to right: start with 1; for each bit, square the
running result, and if the bit is 1, also multiply by $a$. For $90 = 1011010_2$ the running exponent goes
$1, 2, 5, 11, 22, 45, 90$.

!!! note "Try it in Python"

    ```python
    def power_mod(a, k, n):
        result = 1
        a %= n
        while k > 0:
            if k & 1:                  # lowest binary digit of k is 1
                result = result * a % n
            a = a * a % n              # next square
            k >>= 1                    # drop the lowest digit
        return result

    print(power_mod(2, 90, 91), pow(2, 90, 91))   # 64 64
    ```

    Python's built-in three-argument `pow` does the same thing, faster.

The idea is very old: Pingala's work on prosody (India, about 200 BC) computes $2^n$ by halving $n$ and squaring, and
the method appears in many later sources. It works in any setting where multiplication is associative, from matrices
(fast Fibonacci numbers) to elliptic curves ([Chapter 19](19-Elliptic-Curves.md)).

## 5.5 Pseudoprimes and Carmichael numbers

*Level: advanced.*

### Fermat's theorem does not run backwards

If $n$ is prime, $2^{n-1} \equiv 1 \pmod n$. Is the converse true? It is a natural guess (the "Chinese hypothesis", a
name resting on a misreading of old sources rather than on any real ancient claim). It is false.

**Example.** $n = 341 = 11 \cdot 31$. Note $2^{10} = 1024 = 3 \cdot 341 + 1$, so $2^{10} \equiv 1 \pmod{341}$, and therefore
$2^{340} = (2^{10})^{34} \equiv 1 \pmod{341}$. Yet 341 is composite. (Pierre Frédéric Sarrus found this in 1819.)

**Definition.** A composite $n$ with $a^{n-1} \equiv 1 \pmod n$ is a **Fermat pseudoprime to base $a$**. The base-2
pseudoprimes below 3000 are $341, 561, 645, 1105, 1387, 1729, 1905, 2047, 2465, 2701, 2821$. They are rare compared with
primes, which is why the Fermat test is useful, but they exist.

One remedy is to try other bases: $3^{340} \equiv 56 \pmod{341}$, which exposes 341. Does some base always expose a
composite? Not quite, and the exceptions are fascinating.

### Carmichael numbers

**Definition.** A composite $n$ is a **Carmichael number** if $a^{n-1} \equiv 1 \pmod n$ for **every** $a$ with
$\gcd(a, n) = 1$.

A Carmichael number fools the Fermat test for every base coprime to it; only a base sharing a factor with $n$ exposes it,
and finding such a base is as hard as finding a factor. The smallest is $561 = 3 \cdot 11 \cdot 17$. Checking all 320
bases coprime to 561 by hand would be tedious; the next theorem does it in one line.

**Theorem 5.8 (Korselt's criterion, 1899).** A composite number $n$ is a Carmichael number if and only if $n$ is
**squarefree** (no square of a prime divides it) and $p - 1 \mid n - 1$ for every prime $p \mid n$. In that case
$a^n \equiv a \pmod n$ for **every** integer $a$, coprime to $n$ or not.

*Proof of "if".* Let $n = p_1 p_2 \cdots p_r$ with distinct primes and $p_i - 1 \mid n - 1$. Fix $a$ and one $p = p_i$. If
$p \mid a$, then $a^n \equiv 0 \equiv a \pmod p$. If not, Fermat gives $a^{p-1} \equiv 1$, and since $n - 1 = (p - 1)m$,
$a^{n-1} = (a^{p-1})^m \equiv 1$, so $a^n \equiv a \pmod p$. Thus every $p_i$ divides $a^n - a$, and since the $p_i$ are
distinct primes, their product $n$ divides it (Corollary 3.7, repeatedly). For $a$ coprime to $n$, cancel $a$ to get
$a^{n-1} \equiv 1 \pmod n$: $n$ is a Carmichael number.

*Proof of "only if".* Let $n$ be a Carmichael number and $p$ a prime factor of $n$.

*Squarefree.* Suppose $p^2 \mid n$, and let $a = 1 + \frac{n}{p}$. Every prime factor $q$ of $n$ divides $\frac{n}{p}$ (for
$q = p$ because $p^2 \mid n$), so $a \equiv 1 \pmod q$ and $a$ is coprime to $n$. By the binomial theorem,

$$a^{n-1} = 1 + (n - 1)\frac{n}{p} + \binom{n-1}{2}\Bigl(\frac{n}{p}\Bigr)^2 + \dots$$

Every term from the third on contains $\bigl(\frac{n}{p}\bigr)^2 = n \cdot \frac{n}{p^2}$, a multiple of $n$. And
$(n - 1)\frac{n}{p} = n \cdot \frac{n}{p} - \frac{n}{p} \equiv -\frac{n}{p}$. So $a^{n-1} \equiv 1 - \frac{n}{p} \pmod n$, which is
not $\equiv 1$ because $0 < \frac{n}{p} < n$. This contradicts the Carmichael property.

*$p - 1$ divides $n - 1$.* By [Chapter 7](07-Primitive-Roots.md) there is a **primitive root** $g$ modulo $p$: a number
whose powers $g, g^2, \dots, g^{p-1}$ run through all nonzero residues mod $p$, so that $g^m \equiv 1 \pmod p$ exactly when
$p - 1 \mid m$. Since $n$ is squarefree, $n = pm$ with $\gcd(p, m) = 1$, and the Chinese remainder theorem
([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)) gives an $a$ with $a \equiv g \pmod p$ and
$a \equiv 1 \pmod m$. This $a$ is coprime to $n$, so $a^{n-1} \equiv 1 \pmod n$, hence $g^{n-1} \equiv a^{n-1} \equiv 1 \pmod p$,
and therefore $p - 1 \mid n - 1$. $\square$

The "only if" half borrows two results from the next two chapters; nothing in them depends on this one, so the
argument is not circular.

**Example.** $561 = 3 \cdot 11 \cdot 17$ is squarefree, and $560 = 2^4 \cdot 5 \cdot 7$ is divisible by $2$, $10$ and $16$. So
561 is a Carmichael number. The next two are $1105 = 5 \cdot 13 \cdot 17$ ($1104 = 2^4 \cdot 3 \cdot 23$, divisible by
$4, 12, 16$) and $1729 = 7 \cdot 13 \cdot 19$ ($1728 = 12^3$, divisible by $6, 12, 18$).

**Corollary 5.9.** Every Carmichael number is odd and has at least three prime factors.

*Proof.* If $n$ is even and composite, it is squarefree, so it has an odd prime factor $p$ (otherwise $n = 2$). Then
$p - 1$ is even and divides $n - 1$, which is odd: impossible. If $n = pq$ with primes $p < q$, then $q - 1 \mid n - 1$, and
$n - 1 = pq - 1 = p(q - 1) + (p - 1)$, so $q - 1 \mid p - 1$. But $0 < p - 1 < q - 1$: impossible. $\square$

### How many are there?

Václav Šimerka listed the first seven Carmichael numbers in 1885, unnoticed for a century; Robert Carmichael rediscovered
561 in 1910, and the name stuck. In 1994 W. R. Alford, Andrew Granville and Carl Pomerance proved that **there are
infinitely many Carmichael numbers**, and in fact more than $x^{2/7}$ of them below $x$ once $x$ is large enough. A simple
family, due to Jack Chernick (1939): if $6k + 1$, $12k + 1$ and $18k + 1$ are all prime, their product is a Carmichael
number (exercise 12). With $k = 1$ it gives $1729$.

Carmichael numbers kill the Fermat test as a proof of primality, but a small strengthening survives: if $p$ is prime
and $x^2 \equiv 1 \pmod p$ then $x \equiv \pm 1$ (Chapter 4), so the square roots of 1 that appear while computing
$a^{n-1}$ give extra checks. For $n = 561$, write $560 = 2^4 \cdot 35$ and $a = 2$: then $2^{35} \equiv 263$, and squaring
repeatedly gives $263^2 \equiv 166$, $166^2 \equiv 67$, $67^2 \equiv 1 \pmod{561}$. So 67 is a square root of 1 modulo 561
that is not $\pm 1$, which is impossible modulo a prime: 561 is composite. (Even better, $\gcd(67 - 1, 561) = 33$ hands
us a factor.) That is the
**Miller-Rabin test** of [Chapter 12](12-Primality-Factoring-and-RSA.md), used to make every RSA key.

## A short history thread

Pierre de Fermat stated the little theorem in a letter to Bernard Frénicle de Bessy dated 18 October 1640, without
proof, as was his habit. Leibniz left an unpublished proof in manuscripts from around 1683. Leonhard Euler gave the first
proof in a paper presented in 1736 (essentially the binomial argument), introduced the function now written $\varphi$ and proved the
general theorem in 1763; the symbol $\varphi(n)$ is from Gauss's *Disquisitiones* (1801), and the name "totient" from
J. J. Sylvester (1879).

Wilson's theorem is named after John Wilson, a student of Edward Waring, who announced it in his *Meditationes
Algebraicae* (1770); neither could prove it. Joseph-Louis Lagrange published the first proof in 1771. Ibn al-Haytham, in
Cairo around 1000, is reported to have used the fact in solving remainder problems, and Leibniz again seems to have
known it.

The search for converses began early. Sarrus found the pseudoprime 341 in 1819; Korselt gave his criterion in 1899
without an example; Šimerka (1885) and Carmichael (1910) found the examples. The infinitude of Carmichael numbers was
proved in 1994.

## Check yourself

??? question "1. Compute $3^{100} \bmod 13$ and $5^{2026} \bmod 7$."

    $3^3 = 27 \equiv 1 \pmod{13}$, so $3^{100} = (3^3)^{33} \cdot 3 \equiv 3$. (Fermat's exponent 12 would also work:
    $100 \equiv 4 \pmod{12}$ and $3^4 = 81 \equiv 3$.)

    Mod 7, exponents reduce mod 6: $2026 = 337 \cdot 6 + 4$, so $5^{2026} \equiv 5^4 = 625 = 89 \cdot 7 + 2 \equiv 2$.

??? question "2. Compute $\varphi(72)$, $\varphi(97)$ and $\varphi(1000)$, and list the units mod 18."

    $\varphi(72) = \varphi(2^3)\varphi(3^2) = 4 \cdot 6 = 24$. $\varphi(97) = 96$ (97 is prime).
    $\varphi(1000) = \varphi(2^3)\varphi(5^3) = 4 \cdot 100 = 400$. Units mod 18: $1, 5, 7, 11, 13, 17$, six of them, and
    $\varphi(18) = \varphi(2)\varphi(9) = 1 \cdot 6 = 6$.

??? question "3. Find the last two digits of $7^{2026}$."

    $7^4 = 2401 \equiv 1 \pmod{100}$. Since $2026 = 4 \cdot 506 + 2$, $7^{2026} \equiv 7^2 = 49$. (Euler's theorem gives
    exponent 40, which also works, but the order of 7 is only 4.)

??? question "4. Find $15! \bmod 17$ and $17! \bmod 19$."

    Wilson: $16! \equiv -1 \pmod{17}$, and $16! = 16 \cdot 15! \equiv -15!$, so $15! \equiv 1 \pmod{17}$.

    $18! \equiv -1 \pmod{19}$. And $18! = 18 \cdot 17! \equiv -17!$, so $17! \equiv 1 \pmod{19}$.

??? question "5. Use square and multiply to compute $3^{45} \bmod 101$, counting the multiplications."

    $45 = (101101)_2 = 32 + 8 + 4 + 1$. Squares mod 101: $3, 9, 81, 81^2 = 6561 \equiv 97 \;(\equiv -4)$,
    $(-4)^2 = 16$, $16^2 = 256 \equiv 54$. So $3^1, 3^2, 3^4, 3^8, 3^{16}, 3^{32} \equiv 3, 9, 81, 97, 16, 54$.
    Then $3^{45} \equiv 54 \cdot 97 \cdot 81 \cdot 3$. $54 \cdot 97 \equiv 54 \cdot (-4) = -216 \equiv -216 + 303 = 87$;
    $87 \cdot 81 = 7047 = 69 \cdot 101 + 78$; $78 \cdot 3 = 234 \equiv 32$. Answer 32, with 5 squarings and 3
    multiplications. *Check:* `pow(3, 45, 101)` is 32.

??? question "6. Show that 1105 is a Carmichael number."

    $1105 = 5 \cdot 13 \cdot 17$ is squarefree, and $1104 = 16 \cdot 69$ is divisible by $4$, by $12$ ($1104 = 12 \cdot 92$)
    and by $16$. By Korselt's criterion, 1105 is a Carmichael number.

??? question "7. Find a solution of $x^2 \equiv -1 \pmod{29}$ using Wilson's theorem, and check it."

    $29 \equiv 1 \pmod 4$ and $h = 14$, so $x \equiv 14! \pmod{29}$. Compute step by step mod 29:
    $2, 6, 24, 120 \equiv 4, 24, 168 \equiv 23, 184 \equiv 10, 90 \equiv 3, 30 \equiv 1, 11, 132 \equiv 16, 208 \equiv 5, 70 \equiv 12$.
    So $14! \equiv 12$. *Check:* $12^2 = 144 = 5 \cdot 29 - 1 \equiv -1$.

??? question "8. Prove that $a^{13} \equiv a \pmod{2730}$ for every integer $a$."

    $2730 = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 13$. For each of these primes $p$, $p - 1 \in \{1, 2, 4, 6, 12\}$ divides 12.
    So by the argument in the proof of Korselt's criterion, $a^{13} \equiv a \pmod p$: if $p \mid a$ both sides are 0, and
    otherwise $a^{12} = (a^{p-1})^{12/(p-1)} \equiv 1$. Since the primes are distinct, their product 2730 divides
    $a^{13} - a$.

??? question "9. Show that $1^{p-1} + 2^{p-1} + \dots + (p - 1)^{p-1} \equiv -1 \pmod p$ for every prime $p$."

    By Fermat each term is $\equiv 1$, and there are $p - 1$ terms, so the sum is $\equiv p - 1 \equiv -1$.

??? question "10. Check Gauss's formula $\sum_{d \mid n} \varphi(d) = n$ for $n = 30$, and list the fractions $k/30$ that reduce to denominator 6."

    Divisors of 30: $1, 2, 3, 5, 6, 10, 15, 30$, with $\varphi = 1, 1, 2, 4, 2, 4, 8, 8$. Sum: $30$.
    Denominator 6: $\frac{5}{30} = \frac16$ and $\frac{25}{30} = \frac56$, two fractions, matching $\varphi(6) = 2$.

??? question "11. Prove that there are infinitely many primes of the form $4k + 1$."

    Let $p_1, \dots, p_k$ be any primes of the form $4k + 1$, and $N = (2p_1 \cdots p_k)^2 + 1$. $N > 1$ is odd, so it has an
    odd prime factor $q$. Then $(2p_1 \cdots p_k)^2 \equiv -1 \pmod q$, so $-1$ is a square mod $q$, and by Theorem 5.7,
    $q \equiv 1 \pmod 4$. If $q$ were some $p_i$, it would divide $N - (2p_1 \cdots p_k)^2 = 1$. So $q$ is a new prime of the
    form $4k + 1$. Example: from $\{5\}$, $N = 101$, prime and $\equiv 1 \pmod 4$.

??? question "12. (Chernick) Show that if $6k + 1$, $12k + 1$ and $18k + 1$ are all prime, their product $n$ is a Carmichael number. Find the example with $k = 1$."

    Multiply out: $n = (6k + 1)(12k + 1)(18k + 1) = 1296k^3 + 396k^2 + 36k + 1$, so
    $n - 1 = 36k(36k^2 + 11k + 1)$. This is divisible by $6k$, $12k$ and $18k$ (all divide $36k$). The three primes are
    distinct, so $n$ is squarefree, and Korselt's criterion applies. For $k = 1$: $7 \cdot 13 \cdot 19 = 1729$. (For
    $k = 2$, $25$ is not prime; $k = 6$ gives $37 \cdot 73 \cdot 109 = 294{,}409$.)

## What you learned

- Fermat: $a^p \equiv a \pmod p$ for prime $p$; proved by counting necklaces, by multiplying all nonzero residues, and by
  the binomial theorem. Exponents of $a$ can be reduced mod $p - 1$.
- Euler: $a^{\varphi(n)} \equiv 1 \pmod n$ when $\gcd(a, n) = 1$, where $\varphi(n)$ counts the units mod $n$;
  $\varphi(p^k) = p^{k-1}(p - 1)$ and $\sum_{d \mid n}\varphi(d) = n$.
- Wilson: $(p - 1)! \equiv -1 \pmod p$ exactly when $p$ is prime; from it, $-1$ is a square mod an odd prime $p$ exactly
  when $p \equiv 1 \pmod 4$.
- Square and multiply computes $a^k \bmod n$ with about $2\log_2 k$ multiplications, which makes these theorems usable
  on numbers of hundreds of digits.
- Fermat's theorem has no converse: pseudoprimes like 341 and Carmichael numbers like 561, characterised by Korselt's
  criterion, of which there are infinitely many.

**Next:** [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md), solving several congruences at
once, and the multiplicative functions $\tau$, $\sigma$ and $\varphi$ with their formulas proved.

## Further reading

- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th edition, 2008. Chapter 6.
- Kenneth Ireland and Michael Rosen, *A Classical Introduction to Modern Number Theory*, 2nd edition, 1990. Chapters 3
  and 4, from the group point of view.
- Solomon W. Golomb, "Combinatorial proof of Fermat's 'little' theorem", *American Mathematical Monthly* 63 (1956).
- W. R. Alford, Andrew Granville and Carl Pomerance, "There are infinitely many Carmichael numbers", *Annals of
  Mathematics* 139 (1994).
- Richard Crandall and Carl Pomerance, *Prime Numbers: A Computational Perspective*, 2nd edition, 2005. Chapter 3 on
  pseudoprimes and Carmichael numbers.
- André Weil, *Number Theory: An Approach Through History from Hammurapi to Legendre*, 1984. Fermat and Euler in their
  own words.
- On this site: [Algebra, chapter 14](../algebra/14-Subgroups-Cosets-and-Lagrange.md) for Lagrange's theorem;
  the Topics lesson [RSA: a lock anyone can close](../../topics/number-theory/level-8/02-rsa.md); and the cryptography
  book's [The arithmetic of secrets](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/) and
  [RSA](https://cryptography.akadian.ca/book/13-RSA/), where these theorems are put to work.
