# 7. Primitive roots

*Write down the powers of 3 mod 7: 3, 2, 6, 4, 5, 1. Every nonzero remainder appears, each exactly once. The powers of
2 mod 7 do not do this: 2, 4, 1, and then they repeat. Is there always a number whose powers run through every
nonzero remainder mod a prime? This chapter proves there is, finds out for which moduli the same is true, and shows
what such a number buys you: a "logarithm" mod $p$ that turns multiplication into addition. You will use it to solve
equations like $x^4 \equiv 3 \pmod{13}$, meet a conjecture of Artin's that is still unproved, and see the same
logarithm become the hard problem behind the Diffie-Hellman key exchange.*

!!! abstract "In this chapter"
    **You will learn:**

    - the order of a number mod $n$, and the rules it obeys
    - why every prime $p$ has a primitive root, with a full proof, and how many it has
    - exactly which moduli have primitive roots: $1, 2, 4, p^k, 2p^k$
    - index arithmetic (discrete logarithms) and how to solve $x^k \equiv a$ with it
    - Artin's conjecture, what is proved about it and what is not
    - why the discrete logarithm makes Diffie-Hellman work, and the first algorithms that attack it

    **You need:** [Chapter 4](04-Congruences.md) (congruences and inverses), [Chapter 5](05-Fermat-Euler-and-Wilson.md)
    (Fermat's little theorem, Euler's theorem and phi, fast powering) and [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)
    (the CRT and Gauss's identity $\sum_{d \mid n} \varphi(d) = n$). Group language helps but is not required:
    [Algebra, Chapter 13](../algebra/13-Groups.md) (cyclic groups) and
    [Algebra, Chapter 14](../algebra/14-Subgroups-Cosets-and-Lagrange.md) (orders and Lagrange's theorem).
    The gentler versions are [Fast powers](../../topics/number-theory/level-7/02-fast-powers.md) and
    [Diffie-Hellman](../../topics/number-theory/level-8/03-diffie-hellman.md).

    **Levels:** 7.1 is intermediate; 7.2, 7.3, 7.4 and 7.6 are advanced; 7.5 is expert (statements only).

## 7.1 The order of an element

Take any $a$ coprime to $n$ and look at its powers $a, a^2, a^3, \dots$ mod $n$. There are only finitely many
remainders, so the powers must eventually repeat, and by Euler's theorem $a^{\varphi(n)} \equiv 1 \pmod n$, so 1 does
come back. The first time it does is the order.

!!! note "Definition"
    Let $\gcd(a, n) = 1$. The **order** of $a$ mod $n$, written $\operatorname{ord}_n(a)$, is the smallest positive
    integer $k$ with $a^k \equiv 1 \pmod n$.

Here is the full table mod 7. Each row lists $a^1, a^2, \dots, a^6$; the order is the position of the first 1.

| $a$ | $a^1$ | $a^2$ | $a^3$ | $a^4$ | $a^5$ | $a^6$ | order |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 2 | 2 | 4 | 1 | 2 | 4 | 1 | 3 |
| 3 | 3 | 2 | 6 | 4 | 5 | 1 | 6 |
| 4 | 4 | 2 | 1 | 4 | 2 | 1 | 3 |
| 5 | 5 | 4 | 6 | 2 | 3 | 1 | 6 |
| 6 | 6 | 1 | 6 | 1 | 6 | 1 | 2 |

Two things stand out. Every order (1, 3, 6, 3, 6, 2) divides 6. And once a row hits 1, it starts over: the powers of
$a$ are periodic with period exactly $\operatorname{ord}(a)$. Both are general facts.

!!! note "Theorem 7.1 (rules for orders)"
    Let $\gcd(a, n) = 1$ and $d = \operatorname{ord}_n(a)$.

    1. $a^k \equiv 1 \pmod n$ if and only if $d \mid k$.
    2. $a^j \equiv a^k \pmod n$ if and only if $j \equiv k \pmod d$. In particular $1, a, \dots, a^{d-1}$ are distinct.
    3. $d$ divides $\varphi(n)$; for a prime $p$, $d$ divides $p - 1$.
    4. $\operatorname{ord}_n(a^k) = d / \gcd(d, k)$.

*Proof.* (1) Divide $k$ by $d$: $k = qd + r$ with $0 \le r < d$. Then $a^k = (a^d)^q a^r \equiv a^r$. If
$a^k \equiv 1$ then $a^r \equiv 1$ with $0 \le r < d$, and since $d$ is the *smallest* positive exponent giving 1, $r$
must be 0. Conversely if $d \mid k$ then $a^k = (a^d)^{k/d} \equiv 1$.

(2) Say $j \ge k$. Since $a$ is invertible mod $n$, $a^j \equiv a^k$ is the same as $a^{j-k} \equiv 1$, which by (1) is
the same as $d \mid j - k$.

(3) Euler's theorem says $a^{\varphi(n)} \equiv 1$; apply (1). For a prime, $\varphi(p) = p - 1$.

(4) Let $g = \gcd(d, k)$. By (1), $(a^k)^m \equiv 1$ if and only if $d \mid km$, if and only if $(d/g) \mid (k/g)m$.
Since $d/g$ and $k/g$ are coprime, this holds if and only if $(d/g) \mid m$ (Euclid's lemma). The smallest such
positive $m$ is $d/g$. $\square$

In group language: the numbers coprime to $n$, multiplied mod $n$, form a group $(\mathbb{Z}/n)^\times$ of size
$\varphi(n)$; the order of $a$ is the size of the cyclic subgroup $\{1, a, a^2, \dots\}$ it generates; and (3) is
Lagrange's theorem ([Algebra, Chapter 14](../algebra/14-Subgroups-Cosets-and-Lagrange.md)).

**Worked example: decimal periods.** Why does $1/7 = 0.\overline{142857}$ repeat with period 6, while $1/13 =
0.\overline{076923}$ has period 6 as well, and $1/17$ has period 16? Long division by $p$ produces remainders
$1, 10, 10^2, \dots$ mod $p$, and the decimals repeat exactly when the remainder returns to 1. So for a prime $p \ne
2, 5$ the period of $1/p$ is $\operatorname{ord}_p(10)$, which divides $p - 1$. Here $\operatorname{ord}_7(10) = 6$,
$\operatorname{ord}_{13}(10) = 6$ (since $10^6 = 76\,923 \cdot 13 + 1$) and $\operatorname{ord}_{17}(10) = 16$.
**Check:** $1/13 = 0.076923\,076923\ldots$

**Worked example: finding an order quickly.** Find $\operatorname{ord}_{41}(2)$. By rule (3) it divides 40, so it is
one of 1, 2, 4, 5, 8, 10, 20, 40. Compute: $2^5 = 32$, $2^{10} = 1024 = 24 \cdot 41 + 40 \equiv -1$, so
$2^{20} \equiv 1$. The order divides 20 but not 10 (since $2^{10} \equiv -1$), and the divisors of 20 that do not
divide 10 are 4 and 20; $2^4 = 16 \not\equiv 1$. So $\operatorname{ord}_{41}(2) = 20$.

## 7.2 Primitive roots mod a prime

*Level: advanced.*

!!! note "Definition"
    An integer $g$ coprime to $n$ is a **primitive root** mod $n$ if $\operatorname{ord}_n(g) = \varphi(n)$. Then the
    powers $g^0, g^1, \dots, g^{\varphi(n)-1}$ are $\varphi(n)$ distinct numbers coprime to $n$ (by rule 2), so they are
    *all* of them: every unit mod $n$ is a power of $g$.

So 3 and 5 are primitive roots mod 7, and 2, 4, 6 are not. The name is old (Euler used it); in group language, a
primitive root is a generator of the group $(\mathbb{Z}/n)^\times$, and "$n$ has a primitive root" means this group is
cyclic.

The main theorem of the chapter:

!!! note "Theorem 7.2 (primitive roots exist)"
    For every prime $p$ there is a primitive root mod $p$. In fact, for each divisor $d$ of $p - 1$ there are exactly
    $\varphi(d)$ residues of order $d$ mod $p$; in particular there are $\varphi(p - 1)$ primitive roots.

The proof needs one more tool: a polynomial cannot have too many roots mod a prime.

!!! note "Lemma 7.3 (Lagrange)"
    Let $p$ be prime and $f(x) = c_k x^k + \cdots + c_1 x + c_0$ a polynomial with integer coefficients and
    $c_k \not\equiv 0 \pmod p$. Then $f(x) \equiv 0 \pmod p$ has at most $k$ solutions mod $p$.

*Proof.* Induction on $k$. For $k = 0$, $f = c_0 \not\equiv 0$ has no roots. Suppose $k \ge 1$ and $f(r) \equiv 0$ for
some $r$ (if there is no root we are done). Since $x^j - r^j = (x - r)(x^{j-1} + x^{j-2}r + \cdots + r^{j-1})$, we have

$$
f(x) - f(r) = \sum_{j} c_j (x^j - r^j) = (x - r)\, g(x)
$$

for a polynomial $g$ of degree $k - 1$ with the same leading coefficient $c_k$. So $f(x) \equiv (x - r)g(x)$. If $s$
is another root, then $p \mid (s - r)g(s)$, and since $p$ is prime, either $s \equiv r$ or $g(s) \equiv 0$. So every
root other than $r$ is a root of $g$, which by induction has at most $k - 1$ of them. In total at most $k$. $\square$

The primality of $p$ is essential; it is where "$p$ divides a product, so it divides a factor" was used. Mod 15,
$x^2 - 1$ has four roots ([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)), and mod 8 it
has four roots too: 1, 3, 5, 7.

*Proof of Theorem 7.2.* For each $d \mid p - 1$, let $\psi(d)$ be the number of residues mod $p$ of order exactly
$d$. Every nonzero residue has some order dividing $p - 1$, so

$$
\sum_{d \mid p-1} \psi(d) = p - 1 .
$$

**Claim: $\psi(d) \le \varphi(d)$ for every $d$.** If $\psi(d) = 0$ there is nothing to prove. Otherwise pick $a$ of
order $d$. The numbers $1, a, a^2, \dots, a^{d-1}$ are distinct (rule 2) and each is a root of $x^d - 1$, since
$(a^j)^d = (a^d)^j \equiv 1$. By Lagrange's lemma $x^d - 1$ has at most $d$ roots, so these are *all* of its roots.
Every element of order $d$ is a root of $x^d - 1$, so it is one of the $a^j$. By rule (4), $a^j$ has order
$d/\gcd(d, j)$, which equals $d$ exactly when $\gcd(d, j) = 1$. So there are exactly $\varphi(d)$ elements of order
$d$, and the claim holds (with equality).

**Now count.** Gauss's identity ([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)) says
$\sum_{d \mid p - 1} \varphi(d) = p - 1$. So

$$
\sum_{d \mid p-1} \psi(d) = p - 1 = \sum_{d \mid p-1} \varphi(d), \qquad \psi(d) \le \varphi(d) \text{ for each } d .
$$

A sum of terms each at most the matching term of another sum, with equal totals, forces every term to be equal:
$\psi(d) = \varphi(d)$ for every $d \mid p - 1$. In particular $\psi(p - 1) = \varphi(p - 1) \ge 1$. $\square$

The argument never builds a primitive root; it proves one exists by counting. No formula for a primitive root mod $p$
is known, and none is expected.

**Check with $p = 13$.** The divisors of 12 are 1, 2, 3, 4, 6, 12, and $\varphi$ of them is 1, 1, 2, 2, 2, 4. Counting
orders mod 13 directly gives exactly these numbers: one element of order 1 (namely 1), one of order 2 (namely 12),
two of order 3 (3 and 9), two of order 4 (5 and 8), two of order 6 (4 and 10), and four primitive roots, 2, 6, 7, 11.

### A picture

Place the powers of the primitive root 2 mod 13 around a circle in order, $2^0 = 1$ at the top, then $2^1, 2^2, \dots$
clockwise:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 240 240" role="img" aria-label="The powers of 2 mod 13 placed around a circle in order; the powers of 3 form a triangle and the powers of 5 form a square">
<circle cx="120" cy="120" r="90" fill="none" stroke="currentColor" stroke-opacity="0.3"/>
<polygon points="120.0,30.0 197.9,165.0 42.1,165.0" fill="#eea66f" fill-opacity="0.2" stroke="#eea66f" stroke-width="2"/>
<polygon points="120.0,30.0 210.0,120.0 120.0,210.0 30.0,120.0" fill="#9cc9ea" fill-opacity="0.2" stroke="#9cc9ea" stroke-width="2"/>
<circle cx="120.0" cy="30.0" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="165.0" cy="42.1" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="197.9" cy="75.0" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="210.0" cy="120.0" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="197.9" cy="165.0" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="165.0" cy="197.9" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="120.0" cy="210.0" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="75.0" cy="197.9" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="42.1" cy="165.0" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="30.0" cy="120.0" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="42.1" cy="75.0" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<circle cx="75.0" cy="42.1" r="11" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.6"/>
<g font-size="11" text-anchor="middle" fill="currentColor">
<text x="120.0" y="34.0">1</text>
<text x="165.0" y="46.1">2</text>
<text x="197.9" y="79.0">4</text>
<text x="210.0" y="124.0">8</text>
<text x="197.9" y="169.0">3</text>
<text x="165.0" y="201.9">6</text>
<text x="120.0" y="214.0">12</text>
<text x="75.0" y="201.9">11</text>
<text x="42.1" y="169.0">9</text>
<text x="30.0" y="124.0">5</text>
<text x="42.1" y="79.0">10</text>
<text x="75.0" y="46.1">7</text>
<text x="120" y="124">× 2 each step</text>
</g>
</svg>
</div>

Multiplying by 2 turns the circle one step. All twelve nonzero residues sit on it. The powers of 3 (orange) are
$1, 3, 9$, every fourth position, a triangle; the powers of 5 (blue) are $1, 5, 12, 8$, every third position, a
square. In general the powers of $g^j$ visit every $\gcd(12, j)$-th position, which is rule (4) drawn as a polygon.
Arithmetic mod 13 with multiplication looks exactly like arithmetic mod 12 with addition, turned around a clock.

### Finding a primitive root

There is no formula, but there is a fast test.

!!! note "Theorem 7.4 (test for a primitive root)"
    Let $p$ be prime and $q_1, \dots, q_r$ the distinct primes dividing $p - 1$. Then $g$ (not divisible by $p$) is a
    primitive root mod $p$ if and only if $g^{(p-1)/q_i} \not\equiv 1 \pmod p$ for every $i$.

*Proof.* If $g$ is a primitive root, no exponent smaller than $p - 1$ gives 1, so the condition holds. Conversely,
suppose $d = \operatorname{ord}_p(g)$ is smaller than $p - 1$. Then $d$ is a proper divisor of $p - 1$, so
$(p - 1)/d > 1$ has some prime factor $q_i$, and then $d$ divides $(p-1)/q_i$. By rule (1), $g^{(p-1)/q_i} \equiv 1$,
contradicting the condition. $\square$

**Worked example.** Find the smallest primitive root mod 41. Here $40 = 2^3 \cdot 5$, so test the exponents
$40/2 = 20$ and $40/5 = 8$.

| $g$ | $g^{20}$ mod 41 | $g^{8}$ mod 41 | primitive root? |
|---|---|---|---|
| 2 | 1 | 10 | no |
| 3 | 40 | 1 | no |
| 4 | 1 | 18 | no |
| 5 | 1 | 18 | no |
| 6 | 40 | 10 | yes |

So the smallest primitive root mod 41 is 6. The smallest primitive roots of the primes from 3 to 59 are

| $p$ | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47 | 53 | 59 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| least $g$ | 2 | 2 | 3 | 2 | 2 | 3 | 2 | 5 | 2 | 3 | 2 | 6 | 3 | 5 | 2 | 2 |

Since there are $\varphi(p - 1)$ primitive roots among $p - 1$ residues, a random choice succeeds with probability
$\varphi(p-1)/(p-1)$, which is never tiny (it is at least about $c/\log \log p$), so in practice one tries
$g = 2, 3, 5, \dots$ until the test passes. The test does need the factorization of $p - 1$, which is why
cryptographers often choose primes with $p - 1$ of a known shape, such as $p = 2q + 1$ with $q$ prime.

!!! tip "Try it in Python"
    ```python
    def prime_factors(n):
        f, p = set(), 2
        while p * p <= n:
            while n % p == 0:
                f.add(p); n //= p
            p += 1
        if n > 1:
            f.add(n)
        return f

    def is_primitive_root(g, p):
        return all(pow(g, (p - 1) // q, p) != 1 for q in prime_factors(p - 1))

    def least_primitive_root(p):
        return next(g for g in range(2, p) if is_primitive_root(g, p))

    print([least_primitive_root(p) for p in [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]])
    ```

<figure class="play" data-play="powmod"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The powers of every number mod p. Each row comes back to 1 after a number of steps that divides p − 1; the gold rows are the primitive roots.</figcaption></figure>

## 7.3 Which moduli have primitive roots

*Level: advanced.*

Mod 8 the units are 1, 3, 5, 7, and every one of them squares to 1: $3^2 = 9$, $5^2 = 25$, $7^2 = 49$ are all
$\equiv 1 \pmod 8$. So no element has order $\varphi(8) = 4$, and 8 has no primitive root. Mod 15 the orders of the
eight units are 1, 4, 2, 4, 4, 2, 4, 2: none reaches 8. Yet 9, 25, 18 and 50 do have primitive roots (2 works for 9,
25 and, as 2 is not coprime to 18 and 50, take 5 for 18 and 3 for 50). The full answer is due to Gauss.

!!! note "Theorem 7.5 (Gauss)"
    A primitive root mod $n$ exists if and only if $n$ is $1, 2, 4, p^k$ or $2p^k$, where $p$ is an odd prime and
    $k \ge 1$.

We prove it in four steps. Steps 3 and 4 are complete; steps 1 and 2 contain the one real computation.

**Step 1: from $p$ to $p^2$.** Let $g$ be a primitive root mod the odd prime $p$. We show that $g$ or $g + p$ is a
primitive root mod $p^2$. Let $d = \operatorname{ord}_{p^2}(g)$. Since $g^d \equiv 1 \pmod{p^2}$ implies
$g^d \equiv 1 \pmod p$, we get $p - 1 \mid d$; and $d \mid \varphi(p^2) = p(p - 1)$. So $d = p - 1$ or
$d = p(p - 1)$. In the second case $g$ is a primitive root mod $p^2$. In the first case, $g^{p-1} \equiv 1
\pmod{p^2}$; look at $g + p$, which is also a primitive root mod $p$. By the binomial theorem

$$
(g + p)^{p-1} = g^{p-1} + (p-1) g^{p-2} p + (\text{terms divisible by } p^2) \equiv 1 - p\, g^{p-2} \pmod{p^2} ,
$$

and $p\, g^{p-2} \not\equiv 0 \pmod{p^2}$ because $p \nmid g$. So $(g + p)^{p-1} \not\equiv 1 \pmod{p^2}$, and by the
same dichotomy $g + p$ has order $p(p - 1)$ mod $p^2$.

**Step 2: from $p^2$ to every $p^k$.** Let $g$ be a primitive root mod $p^2$. Then $g^{p-1} = 1 + tp$ with $p \nmid t$
(otherwise $g^{p-1} \equiv 1 \pmod{p^2}$). Raising to the $p$-th power and using the binomial theorem,

$$
(1 + tp)^p = 1 + tp^2 + \binom{p}{2} t^2 p^2 + \cdots = 1 + t' p^2 \quad \text{with } t' \equiv t \pmod p,
$$

because $\binom p2 p^2$ is divisible by $p^3$ for odd $p$, and the later terms by even higher powers. Repeating,
$g^{p^{k-2}(p-1)} = 1 + t_k p^{k-1}$ with $p \nmid t_k$, so $g^{p^{k-2}(p-1)} \not\equiv 1 \pmod{p^k}$. Now
$\operatorname{ord}_{p^k}(g)$ is a multiple of $p - 1$ (reduce mod $p$) and divides $\varphi(p^k) = p^{k-1}(p-1)$, so
it is $p^j(p-1)$ for some $j \le k-1$. The display rules out $j \le k - 2$. So the order is $\varphi(p^k)$: $g$ is a
primitive root mod every $p^k$. (This is where $p$ odd was needed; for $p = 2$ the term $\binom 22 t^2 2^2$ is not
divisible by $2^3$.)

**Step 3: $2p^k$.** Since $\varphi(2p^k) = \varphi(p^k)$, take a primitive root $g$ mod $p^k$ and make it odd (replace
it by $g + p^k$ if needed). Its order mod $2p^k$ is a multiple of its order mod $p^k$, which is already the largest
possible value $\varphi(2p^k)$. So it is a primitive root mod $2p^k$. The cases $n = 1, 2, 4$ are checked by hand
(3 is a primitive root mod 4).

**Step 4: nothing else works.** Every other $n$ is either $2^k$ with $k \ge 3$, or a product $n = ab$ of coprime
numbers $a, b > 2$.

- For $n = ab$ with $\gcd(a, b) = 1$ and $a, b > 2$: both $\varphi(a)$ and $\varphi(b)$ are even (for $m > 2$,
  $\varphi(m)$ is even, since $x \mapsto m - x$ pairs off the units and has no fixed point). Let
  $L = \operatorname{lcm}(\varphi(a), \varphi(b))$. Two even numbers have $\operatorname{lcm} \le$ their product over 2,
  so $L \le \varphi(a)\varphi(b)/2 = \varphi(n)/2$. For any $x$ coprime to $n$, Euler gives $x^L \equiv 1$ mod $a$ and
  mod $b$, hence mod $n$ by the CRT. So every order is at most $\varphi(n)/2$.
- For $n = 2^k$, $k \ge 3$: we show $x^{2^{k-2}} \equiv 1 \pmod{2^k}$ for every odd $x$. For $k = 3$ this is the
  observation $x^2 \equiv 1 \pmod 8$ (indeed $x^2 - 1 = (x-1)(x+1)$ is a product of consecutive even numbers, one of
  them divisible by 4). If $x^{2^{k-2}} = 1 + 2^k s$, squaring gives $x^{2^{k-1}} = 1 + 2^{k+1}s + 2^{2k}s^2 \equiv 1
  \pmod{2^{k+1}}$. So every order is at most $2^{k-2} = \varphi(2^k)/2$. $\square$

So for $n = 2^k$ ($k \ge 3$) the group $(\mathbb{Z}/2^k)^\times$ is not cyclic; one can show it is the product of a
cyclic group of order 2 (generated by $-1$) and a cyclic group of order $2^{k-2}$ (generated by 5). For other $n$, the
CRT splits $(\mathbb{Z}/n)^\times$ into the product of the groups for the prime powers of $n$. The largest order of
any unit mod $n$ is called the **Carmichael function** $\lambda(n)$; for example $\lambda(15) = \operatorname{lcm}(2,
4) = 4$ and $\lambda(8) = 2$. Every unit satisfies $x^{\lambda(n)} \equiv 1$, which sharpens Euler's theorem, and
$\lambda(n) = \varphi(n)$ exactly for the $n$ of Theorem 7.5.

**Worked example.** 3 is a primitive root mod 7. Is it one mod 49? By step 1 we only need $3^6 \bmod 49$: $3^6 = 729 =
14 \cdot 49 + 43$, which is not 1. So 3 has order 42 mod 49, and by step 2 it is a primitive root mod $7^k$ for every
$k$. On the other hand $19 \equiv 5 \pmod 7$ is a primitive root mod 7 but $19^6 \equiv 1 \pmod{49}$, so 19 has order
6 mod 49; step 1's repair $19 + 7 = 26$ has order 42. Cases like 19, where $g^{p-1} \equiv 1 \pmod{p^2}$, are rare.

## 7.4 Index arithmetic: the discrete logarithm

*Level: advanced.*

Ordinary logarithms turn multiplication into addition: $\log(xy) = \log x + \log y$. Before calculators, this is how
people multiplied large numbers, with tables. A primitive root gives the same trick mod $p$.

!!! note "Definition"
    Let $g$ be a primitive root mod $p$. For $a \not\equiv 0 \pmod p$, the **index** (or **discrete logarithm**) of $a$
    to the base $g$, written $\operatorname{ind}_g(a)$, is the unique $k$ in $\{0, 1, \dots, p - 2\}$ with
    $g^k \equiv a \pmod p$.

Since the powers of $g$ are periodic with period $p - 1$, rule (2) of Theorem 7.1 gives the logarithm laws, with
exponents taken **mod $p - 1$**:

$$
\operatorname{ind}(ab) \equiv \operatorname{ind}(a) + \operatorname{ind}(b), \qquad \operatorname{ind}(a^k) \equiv k \operatorname{ind}(a) \pmod{p - 1} .
$$

(Proof: $g^{\operatorname{ind} a + \operatorname{ind} b} = g^{\operatorname{ind} a} g^{\operatorname{ind} b} \equiv ab$,
so the two exponents give the same power of $g$ and are congruent mod $p - 1$.)

Here is the table mod 13 with $g = 2$, read off the circle above:

| $a$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $\operatorname{ind}_2 a$ | 0 | 1 | 4 | 2 | 9 | 5 | 11 | 3 | 8 | 10 | 7 | 6 |

Gauss's *Disquisitiones* (1801) printed tables like this, and later C. G. J. Jacobi published a whole book of them, the
*Canon Arithmeticus* (1839), for all primes below 1000.

**Worked example: a product.** $7 \cdot 11 \bmod 13$. Indices $11 + 7 = 18 \equiv 6 \pmod{12}$, and the residue with
index 6 is 12. **Check:** $77 = 5 \cdot 13 + 12$.

**Worked example: a linear-looking power equation.** Solve $3x^5 \equiv 7 \pmod{13}$. Take indices:

$$
\operatorname{ind} 3 + 5 \operatorname{ind} x \equiv \operatorname{ind} 7 \pmod{12}, \qquad 4 + 5y \equiv 11, \qquad 5y \equiv 7 \pmod{12} .
$$

The inverse of 5 mod 12 is 5 ($25 = 2 \cdot 12 + 1$), so $y \equiv 35 \equiv 11$, and the residue with index 11 is 7.
So $x \equiv 7$. **Check:** $7^2 = 49 \equiv 10$, $7^4 \equiv 100 \equiv 9$, $7^5 \equiv 63 \equiv 11$, and
$3 \cdot 11 = 33 \equiv 7$.

**Worked example: several solutions.** Solve $x^4 \equiv 3 \pmod{13}$. Indices: $4y \equiv 4 \pmod{12}$. A linear
congruence $4y \equiv 4 \pmod{12}$ ([Chapter 4](04-Congruences.md)) has $\gcd(4, 12) = 4$ solutions mod 12: $y \equiv
1 \pmod 3$, so $y = 1, 4, 7, 10$. The residues with these indices are 2, 3, 11, 10. **Check:** $2^4 = 16 \equiv 3$,
$3^4 = 81 = 6 \cdot 13 + 3$.

**Worked example: no solutions.** Solve $x^3 \equiv 2 \pmod{13}$. Indices: $3y \equiv 1 \pmod{12}$, impossible since
$\gcd(3, 12) = 3$ does not divide 1. So 2 is not a cube mod 13. (The cubes mod 13 are exactly the residues whose index
is a multiple of 3: 1, 8, 12, 5.)

This gives a general rule.

!!! note "Theorem 7.6 ($k$-th power residues)"
    Let $p$ be prime, $p \nmid a$, and $d = \gcd(k, p - 1)$. The congruence $x^k \equiv a \pmod p$ has a solution if and
    only if $a^{(p-1)/d} \equiv 1 \pmod p$, and then it has exactly $d$ solutions.

*Proof.* With $y = \operatorname{ind} x$ and $b = \operatorname{ind} a$ the congruence becomes $ky \equiv b \pmod{p-1}$,
which is solvable if and only if $d \mid b$, and then has $d$ solutions mod $p - 1$ ([Chapter 4](04-Congruences.md)).
And $a^{(p-1)/d} = g^{b(p-1)/d} \equiv 1$ if and only if $p - 1 \mid b(p-1)/d$, if and only if $d \mid b$. $\square$

The case $k = 2$ is **Euler's criterion**: for odd $p$, $a$ is a square mod $p$ if and only if $a^{(p-1)/2} \equiv 1$.
It is the starting point of [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md). Note also that for $k$ coprime to
$p - 1$, every $a$ has exactly one $k$-th root: $x \mapsto x^k$ is a bijection mod $p$. This is the fact behind RSA's
encryption map, and behind the choice of exponent there.

**A quick use: Wilson's theorem again.** Let $g$ be a primitive root mod an odd prime $p$. The product of all nonzero
residues is

$$
(p-1)! \equiv g^0 g^1 \cdots g^{p-2} = g^{(p-2)(p-1)/2} \pmod p .
$$

Now $g^{(p-1)/2}$ squares to 1 but is not 1 (its exponent is less than the order), so it is $-1$ by Lagrange's lemma
(the only square roots of 1 mod $p$ are $\pm 1$). Since $p - 2$ is odd, $(p-1)! \equiv (-1)^{p-2} = -1$. This is
Wilson's theorem from [Chapter 5](05-Fermat-Euler-and-Wilson.md), proved again in two lines.

## 7.5 Artin's conjecture

*Level: expert (statements; the proofs are research papers).*

The decimal expansion of $1/p$ has the longest possible period $p - 1$ exactly when 10 is a primitive root mod $p$.
Below 100 this happens for $p = 7, 17, 19, 23, 29, 47, 59, 61, 97$. Gauss studied these periods in the
*Disquisitiones* and tabulated such primes. Whether there are infinitely many is still unknown.

In 1927 Emil Artin made a precise conjecture:

!!! note "Artin's conjecture on primitive roots"
    Let $a$ be an integer that is not $-1$ and not a perfect square. Then $a$ is a primitive root mod infinitely many
    primes $p$. Moreover, the proportion of such primes is a positive constant; for $a = 2$ (and many other $a$) it is
    Artin's constant

    $$
    A = \prod_{p \text{ prime}} \Big(1 - \frac{1}{p(p-1)}\Big) \approx 0.3739558 .
    $$

The two excluded cases are honest: $-1$ has order 2, and a square $b^2$ has $(b^2)^{(p-1)/2} = b^{p-1} \equiv 1$, so it
is never a primitive root mod an odd prime $p \nmid b$, since $(p-1)/2 < p - 1$.

**Where the constant comes from.** $a$ fails to be a primitive root mod $p$ exactly when, for some prime $q$ dividing
$p - 1$, $a$ is a $q$-th power mod $p$ (Theorem 7.4 combined with Theorem 7.6). For a "random" prime $p$, the chance
that $q \mid p - 1$ is about $1/(q - 1)$ (the primes are spread evenly among the $q - 1$ classes mod $q$ that are
coprime to $q$, by Dirichlet's theorem, [Chapter 15](15-Primes-in-Progressions.md)), and given that, the chance that
$a$ is a $q$-th power is $1/q$. So $a$ escapes the prime $q$ with probability $1 - 1/(q(q-1))$, and treating the
different $q$ as independent gives the product $A$. Making this heuristic into a proof is exactly what nobody can do.

**Check numerically.** Among the primes from 3 to $10^6$, the fraction for which 2 is a primitive root is $0.37378$,
close to $A$.

What is known:

- **Under the generalised Riemann hypothesis**, Christopher Hooley proved Artin's conjecture in 1967, with the predicted
  density. (The generalised Riemann hypothesis is a still unproved statement about the zeros of certain L-functions,
  [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).)
- **Unconditionally**, building on work of Gupta and Ram Murty (1984), Roger Heath-Brown proved in 1986 that there are
  at most two primes $a$ for which the conjecture fails. So at least one of 2, 3, 5 is a primitive root for infinitely
  many primes, but the proof cannot tell which one.
- **Not one specific number** is known to be a primitive root mod infinitely many primes. For $a = 2$ it is open.
- The constant needs a correction for some $a$. Artin's original heuristic gives the wrong density for some bases,
  for instance $a = 5$, because of a hidden dependence between the conditions at different $q$ (for $a = 5$, the
  condition at $q = 2$ is linked to $p \bmod 5$). Numerical work by Derrick and Emma Lehmer exposed the discrepancy,
  and the corrected densities are the ones Hooley proved under GRH.

This is a good example of a pattern in number theory: an easy-to-state question about integers, strong numerical
evidence, a heuristic built on "independent" primes, a proof conditional on the Riemann hypothesis, and an
unconditional result that is remarkable and still falls short.

## 7.6 Discrete logarithms and Diffie-Hellman

*Level: advanced.*

Computing $g^k \bmod p$ is fast: square-and-multiply ([Chapter 5](05-Fermat-Euler-and-Wilson.md)) needs about
$2 \log_2 k$ multiplications, so even for $p$ with 600 digits it takes a fraction of a second. Going backwards, from
$g^k$ to $k$, is the **discrete logarithm problem**, and for well-chosen large primes nobody knows a fast method. That
gap is a trapdoor-free one-way street, and it is what Whitfield Diffie and Martin Hellman used in 1976 to let two
people agree on a secret over a public line.

**The exchange.** Alice and Bob publicly agree on a prime $p$ and a primitive root $g$ (or an element of large prime
order).

1. Alice picks a secret $a$ and sends $A = g^a \bmod p$.
2. Bob picks a secret $b$ and sends $B = g^b \bmod p$.
3. Alice computes $B^a$, Bob computes $A^b$. Both equal $g^{ab} \bmod p$, their shared secret.

An eavesdropper sees $p, g, A, B$. To get $g^{ab}$ the obvious way is to find $a = \operatorname{ind}_g A$, a discrete
logarithm.

**Worked example (toy size).** $p = 23$, $g = 5$ (a primitive root mod 23). Alice's secret $a = 6$, Bob's $b = 15$.

- $A = 5^6 \bmod 23 = 8$ and $B = 5^{15} \bmod 23 = 19$.
- Alice: $19^6 \bmod 23 = 2$. Bob: $8^{15} \bmod 23 = 2$. Shared secret: 2.

**Check:** $5^{90} = 5^{6 \cdot 15}$ and $90 \equiv 2 \pmod{22}$, so the secret is $5^2 = 25 \equiv 2$. Here the index
laws, exponents mod $p - 1$, are visible directly.

### How hard is the discrete logarithm?

Trying $k = 0, 1, 2, \dots$ takes up to $p - 1$ steps. Two classical ideas do much better, and both explain choices made
in practice.

**Baby step, giant step (Shanks, 1971).** Let $m = \lceil \sqrt{p - 1} \rceil$. Any exponent $k < p - 1$ can be
written $k = im + j$ with $0 \le i, j < m$. Then $g^k = y$ becomes

$$
y \cdot (g^{-m})^i \equiv g^j \pmod p .
$$

Make a list of the $m$ "baby steps" $g^j$, then walk the "giant steps" $y, y g^{-m}, y g^{-2m}, \dots$ until one lands
in the list. That takes about $2\sqrt{p}$ multiplications instead of $p$.

*Example:* solve $2^k \equiv 3 \pmod{101}$ (2 is a primitive root mod 101). $m = 10$. Baby steps $2^0, \dots, 2^9$ mod
101: 1, 2, 4, 8, 16, 32, 64, 27, 54, 7. Now $2^{10} \equiv 14$, whose inverse mod 101 is 65 ($14 \cdot 65 = 910 = 9
\cdot 101 + 1$). Giant steps $3 \cdot 65^i$: 3, 94, 50, 18, 59, 98, 7. The seventh entry ($i = 6$) is 7, which is
$2^9$. So $k = 6 \cdot 10 + 9 = 69$. **Check:** `pow(2, 69, 101)` returns 3.

**Pohlig-Hellman (1978).** If $p - 1$ factors into small primes, the CRT splits the problem. Knowing $k$ mod each
prime power $q^e \| p - 1$ gives $k$ mod $p - 1$; and $k \bmod q$ can be found inside the subgroup of order $q$, since
$(g^{(p-1)/q})^k = y^{(p-1)/q}$, which is a discrete log in a group of only $q$ elements. So the real difficulty is
only as large as the largest prime factor of $p - 1$. This is why Diffie-Hellman uses primes $p$ where $p - 1$ has a
very large prime factor, typically a "safe prime" $p = 2q + 1$.

For large well-chosen $p$ the best known methods are **index calculus** algorithms (the number field sieve for
discrete logarithms), which are much faster than $\sqrt p$ but still far slower than polynomial time. That is also why
elliptic curve groups ([Chapter 19](19-Elliptic-Curves.md)) are popular: there, no index calculus is known, and the
best general attacks are still the square-root ones. And on a large quantum computer Shor's algorithm (1994) would
compute discrete logarithms in polynomial time; this is part of why cryptography is moving to other problems.

For the full story, with real parameter sizes, attacks on bad choices and code, see the cryptography book:
[Diffie-Hellman](https://cryptography.akadian.ca/book/12-Diffie-Hellman/) and
[Discrete-log systems](https://cryptography.akadian.ca/book/14-Discrete-Log-Systems/).

!!! tip "Try it in Python"
    ```python
    from math import isqrt

    def bsgs(g, y, p):
        """Find k with g^k = y mod p, or None."""
        m = isqrt(p - 1) + 1
        baby = {pow(g, j, p): j for j in range(m)}
        step = pow(g, -m, p)          # g^(-m) mod p (Python 3.8+)
        for i in range(m):
            if y in baby:
                return i * m + baby[y]
            y = y * step % p
        return None

    print(bsgs(2, 3, 101))            # 69
    print(bsgs(5, 8, 23))             # 6, Alice's secret in the toy example
    ```

## Check yourself

??? question "1. Find $\operatorname{ord}_{11}(2)$ and $\operatorname{ord}_{11}(3)$. Which of them is a primitive root?"

    The order divides 10. $2^2 = 4$, $2^5 = 32 \equiv 10 \equiv -1$, so the order of 2 is not 1, 2 or 5: it is 10, and
    2 is a primitive root. $3^5 = 243 = 22 \cdot 11 + 1$, so $\operatorname{ord}_{11}(3) = 5$ (it is not 1); 3 is not a
    primitive root.

??? question "2. List all primitive roots mod 13, given that 2 is one."

    They are $2^j$ with $\gcd(j, 12) = 1$, i.e. $j = 1, 5, 7, 11$: $2^1 = 2$, $2^5 = 32 \equiv 6$, $2^7 = 128 \equiv 11$,
    $2^{11} = 2048 \equiv 7$. So 2, 6, 7, 11, which is $\varphi(12) = 4$ of them.

??? question "3. Show that 3 is a primitive root mod 17 using only one computation."

    $16 = 2^4$ has only the prime factor 2, so by Theorem 7.4, 3 is a primitive root iff $3^8 \not\equiv 1$. Now
    $3^4 = 81 \equiv 13 \equiv -4$, so $3^8 \equiv 16 \equiv -1$. Yes.

??? question "4. Which of 18, 25, 36, 54, 100 have a primitive root?"

    $18 = 2 \cdot 3^2$: yes. $25 = 5^2$: yes. $36 = 4 \cdot 9$: no (two coprime parts above 2). $54 = 2 \cdot 3^3$: yes.
    $100 = 4 \cdot 25$: no.

??? question "5. Using the index table mod 13, solve $x^4 \equiv 3$ and $x^3 \equiv 5$."

    $\operatorname{ind} 3 = 4$: $4y \equiv 4 \pmod{12}$, so $y \in \{1, 4, 7, 10\}$ and $x \in \{2, 3, 11, 10\}$.
    $\operatorname{ind} 5 = 9$: $3y \equiv 9 \pmod{12}$, so $y \equiv 3 \pmod 4$, $y \in \{3, 7, 11\}$ and
    $x \in \{8, 11, 7\}$. Check: $7^3 = 343 = 26 \cdot 13 + 5$.

??? question "6. Let $g$ be a primitive root mod an odd prime $p$. Show $g^{(p-1)/2} \equiv -1$, and deduce that $-1$ is a square mod $p$ if and only if $p \equiv 1 \pmod 4$."

    $h = g^{(p-1)/2}$ satisfies $h^2 \equiv 1$, so $h \equiv \pm 1$ (Lagrange), and $h \not\equiv 1$ because
    $(p-1)/2 < p - 1$. So $\operatorname{ind}(-1) = (p-1)/2$. A residue is a square iff its index is even (Theorem 7.6
    with $k = 2$), so $-1$ is a square iff $(p-1)/2$ is even, iff $p \equiv 1 \pmod 4$.

??? question "7. Find the smallest primitive root mod 41, explaining which powers you test and why."

    $40 = 2^3 \cdot 5$, so test $g^{20}$ and $g^8$. 2: $2^{20} \equiv 1$. 3: $3^8 \equiv 1$. 4 and 5: their 20th powers
    are 1 (4 is a square; and $5^{20} \equiv 1$). 6: $6^{20} \equiv 40$ and $6^8 \equiv 10$, neither 1. So 6.

??? question "8. In a Diffie-Hellman exchange with $p = 23$, $g = 5$, Alice picks $a = 4$ and Bob picks $b = 9$. What do they send, and what is the shared secret?"

    $A = 5^4 = 625 = 27 \cdot 23 + 4$, so $A = 4$. $B = 5^9 \bmod 23 = 11$. Shared secret $B^a = 11^4 \bmod 23 = 13$,
    and $A^b = 4^9 \bmod 23 = 13$. Check: $5^{36} = 5^{36 - 22} = 5^{14} \equiv 13$.

??? question "9. Show that 2 is a primitive root mod $3^k$ for every $k \ge 1$."

    2 is a primitive root mod 3. By step 1 of 7.3 we need $2^{2} \not\equiv 1 \pmod 9$: indeed $4 \ne 1$. So 2 is a
    primitive root mod 9, and by step 2 mod every $3^k$.

??? question "10. Prove that for a prime $p > 3$, the product of all primitive roots mod $p$ is $\equiv 1$."

    If $g$ is a primitive root so is $g^{-1}$ (same order), and $g \ne g^{-1}$ because $g^2 \not\equiv 1$ when the order
    is $p - 1 > 2$. So the primitive roots pair off as $\{g, g^{-1}\}$ and each pair has product 1.

??? question "11. Prove that the sum of the primitive roots mod a prime $p$ is $\equiv \mu(p - 1) \pmod p$."

    Let $S(d)$ be the sum of the residues of order exactly $d$, for $d \mid p - 1$. The roots of $x^d - 1$ are exactly
    the elements of order dividing $d$, so $\sum_{e \mid d} S(e)$ is the sum of the $d$ roots of $x^d - 1$. That
    polynomial factors as $\prod (x - r)$ over its roots, and comparing the $x^{d-1}$ coefficients, the sum of the roots
    is 0 for $d > 1$ and 1 for $d = 1$. So $S * \mathbf{1} = \varepsilon$ on the divisors of $p - 1$, and Möbius inversion
    ([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)) gives $S(d) \equiv \mu(d)$. Check:
    mod 11 the primitive roots 2, 6, 7, 8 sum to $23 \equiv 1 = \mu(10)$; mod 13, $2 + 6 + 7 + 11 = 26 \equiv 0 = \mu(12)$.

??? question "12. Use baby step, giant step to solve $5^k \equiv 8 \pmod{23}$."

    $m = \lceil \sqrt{22} \rceil = 5$. Baby steps $5^0, \dots, 5^4$: 1, 5, 2, 10, 4. $5^5 \equiv 20$, whose inverse is 15
    ($20 \cdot 15 = 300 = 13 \cdot 23 + 1$). Giant steps $8 \cdot 15^i$: $i = 0$: 8; $i = 1$: $120 \equiv 5$, which is
    $5^1$. So $k = 1 \cdot 5 + 1 = 6$. Check: $5^6 \equiv 8$, as in the worked example.

## What you learned

- The order of $a$ mod $n$ is the first exponent giving 1; $a^k \equiv 1$ exactly when the order divides $k$, and the
  order divides $\varphi(n)$.
- Every prime has primitive roots, exactly $\varphi(p - 1)$ of them, proved by counting with Lagrange's lemma and
  $\sum_{d \mid n} \varphi(d) = n$; a fast test checks $g^{(p-1)/q} \ne 1$ for the primes $q \mid p - 1$.
- Primitive roots exist mod $n$ exactly for $n = 1, 2, 4, p^k, 2p^k$.
- Indices turn multiplication mod $p$ into addition mod $p - 1$, and decide when $x^k \equiv a$ is solvable and how many
  solutions it has.
- Artin's conjecture (2 is a primitive root for infinitely many primes) is open; Hooley proved it under GRH and
  Heath-Brown showed at most two prime bases can fail.
- The discrete logarithm is easy to define and, for good primes, hard to compute; Diffie-Hellman rests on that, and
  baby step giant step and Pohlig-Hellman show which primes are good.

**Next:** [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md), which asks which numbers are squares mod $p$ and
proves Gauss's golden theorem, quadratic reciprocity.

## Further reading

- C. F. Gauss, *Disquisitiones Arithmeticae*, 1801 (English translation by A. A. Clarke, 1966). Section III is on
  powers and primitive roots.
- K. Ireland and M. Rosen, *A Classical Introduction to Modern Number Theory*, 2nd edition, 1990. Chapter 4 is on the
  structure of $(\mathbb{Z}/n)^\times$.
- I. Niven, H. S. Zuckerman and H. L. Montgomery, *An Introduction to the Theory of Numbers*, 5th edition, 1991.
  Section 2.8 for primitive roots and indices.
- C. Hooley, "On Artin's conjecture", *Journal für die reine und angewandte Mathematik* 225, 1967.
- D. R. Heath-Brown, "Artin's conjecture for primitive roots", *Quarterly Journal of Mathematics* 37, 1986.
- P. Moree, "Artin's primitive root conjecture: a survey", *Integers* 12, 2012.
- W. Diffie and M. Hellman, "New directions in cryptography", *IEEE Transactions on Information Theory* 22, 1976.
- S. Pohlig and M. Hellman, "An improved algorithm for computing logarithms over GF(p) and its cryptographic
  significance", *IEEE Transactions on Information Theory* 24, 1978.
- On this site: [Fast powers](../../topics/number-theory/level-7/02-fast-powers.md),
  [Fermat's little theorem](../../topics/number-theory/level-7/01-fermats-little-theorem.md),
  [Diffie-Hellman](../../topics/number-theory/level-8/03-diffie-hellman.md),
  [Algebra, Chapter 13: Groups](../algebra/13-Groups.md),
  [Algebra, Chapter 14: Subgroups, cosets and Lagrange](../algebra/14-Subgroups-Cosets-and-Lagrange.md),
  [Algebra, Chapter 19: Fields and extensions](../algebra/19-Fields-and-Extensions.md) (the multiplicative group of
  every finite field is cyclic, by the same proof).
- Cryptography: [cryptography.akadian.ca/book](https://cryptography.akadian.ca/book/), chapters
  [12](https://cryptography.akadian.ca/book/12-Diffie-Hellman/) and
  [14](https://cryptography.akadian.ca/book/14-Discrete-Log-Systems/).
