# 6. The Chinese remainder theorem and multiplicative functions

*If you know the remainders of a number when it is divided by 3, by 5 and by 7, do you know the number? This chapter
answers yes, up to a multiple of 105, and turns that answer into a tool: the Chinese remainder theorem lets you split
any question mod $n$ into questions mod the prime powers of $n$. You will prove it and build the solution by hand, then
use the same splitting to find formulas for the number of divisors, their sum and Euler's phi. With them you will
classify the even perfect numbers, meet the Möbius function, which undoes sums over divisors, and finish with
Dirichlet convolution, the multiplication that ties all of these functions together.*

!!! abstract "In this chapter"
    **You will learn:**

    - the Chinese remainder theorem, with a proof and two ways to build the solution
    - what happens when the moduli share a factor
    - multiplicative functions, and proved formulas for $\tau(n)$, $\sigma(n)$ and $\varphi(n)$
    - the Euclid-Euler theorem on even perfect numbers, and what is known about odd ones
    - the Möbius function and the Möbius inversion formula, with proofs
    - Dirichlet convolution: the algebra in which $\tau = 1 * 1$, $\sigma = \mathrm{id} * 1$ and $\varphi * 1 = \mathrm{id}$

    **You need:** [Chapter 3](03-GCD-and-Euclids-Algorithm.md) (gcd, Bézout, extended Euclid),
    [Chapter 4](04-Congruences.md) (congruences and inverses mod $n$) and [Chapter 5](05-Fermat-Euler-and-Wilson.md)
    (Euler's phi). [Chapter 2](02-Primes-and-Unique-Factorization.md) for unique factorization.
    The gentler versions are [The Chinese remainder theorem](../../topics/number-theory/level-6/05-chinese-remainder.md),
    [Counting factors](../../topics/number-theory/level-3/06-counting-factors.md) and
    [Perfect numbers](../../topics/number-theory/level-4/06-perfect-numbers.md).

    **Levels:** 6.1 and 6.2 are intermediate; 6.3 is intermediate with an advanced ending; 6.4 and 6.5 are advanced.

## 6.1 The Chinese remainder theorem

Here is a puzzle from a Chinese arithmetic book, the *Sunzi Suanjing* (Master Sun's Mathematical Manual), written some
time between the third and fifth centuries CE:

> There are certain things whose number is unknown. Counted by threes, two are left over; counted by fives, three are
> left over; counted by sevens, two are left over. How many things are there?

In the language of [Chapter 4](04-Congruences.md) we want a whole number $x$ with

$$
x \equiv 2 \pmod 3, \qquad x \equiv 3 \pmod 5, \qquad x \equiv 2 \pmod 7 .
$$

Such a list is called a **system of simultaneous congruences**. You could simply try numbers. The ones that leave 2
when divided by 7 are $2, 9, 16, 23, 30, \dots$; of these, the first that leaves 3 when divided by 5 is 23, and 23
also leaves 2 when divided by 3. So 23 works. So does $23 + 105 = 128$, because adding $105 = 3 \cdot 5 \cdot 7$
changes none of the three remainders. Two questions follow. Is there always a solution? And is 23 the only one up to
adding multiples of 105? The theorem says yes to both, provided the moduli share no factor.

### The statement

Two whole numbers are **coprime** (or relatively prime) when their greatest common divisor is 1. A list of numbers is
**pairwise coprime** when every two of them are coprime: 3, 5, 7 are; 4, 9, 25 are; 6, 10, 15 are not, even though no
prime divides all three.

!!! note "Theorem 6.1 (Chinese remainder theorem)"
    Let $m_1, m_2, \dots, m_k$ be pairwise coprime positive integers and $M = m_1 m_2 \cdots m_k$. For any integers
    $a_1, \dots, a_k$, the system $x \equiv a_i \pmod{m_i}$ for $i = 1, \dots, k$ has a solution, and any two
    solutions are congruent mod $M$. So there is exactly one solution in $\{0, 1, \dots, M - 1\}$.

We need one fact from [Chapter 3](03-GCD-and-Euclids-Algorithm.md): if $a$ divides $bc$ and $\gcd(a, b) = 1$, then
$a$ divides $c$ (Euclid's lemma in its general form; it follows from Bézout: write $1 = ua + vb$, multiply by $c$ to
get $c = uac + vbc$, and $a$ divides both terms). A consequence: if two coprime numbers $m$ and $n$ both divide $N$,
then $mn$ divides $N$. Indeed, $N = mt$, and $n \mid mt$ with $\gcd(n, m) = 1$ gives $n \mid t$, so $mn \mid N$. By
induction the same holds for any list of pairwise coprime divisors: their product divides $N$.

**Proof of uniqueness.** Suppose $x$ and $y$ are both solutions. Then $x - y \equiv 0 \pmod{m_i}$ for each $i$, so
every $m_i$ divides $x - y$. The $m_i$ are pairwise coprime, so their product $M$ divides $x - y$, that is,
$x \equiv y \pmod M$.

**Proof of existence (by construction).** For each $i$ put $M_i = M / m_i$, the product of all the *other* moduli.
Since $m_i$ shares no prime with any of the others, $\gcd(M_i, m_i) = 1$, so $M_i$ has an inverse mod $m_i$
([Chapter 4](04-Congruences.md)): a number $y_i$ with $M_i y_i \equiv 1 \pmod{m_i}$. Now set

$$
x = a_1 M_1 y_1 + a_2 M_2 y_2 + \cdots + a_k M_k y_k .
$$

Look at $x$ mod $m_1$. Every term except the first contains the factor $m_1$ (because $M_2, \dots, M_k$ all include
$m_1$), so those terms vanish mod $m_1$, and $x \equiv a_1 M_1 y_1 \equiv a_1 \cdot 1 = a_1 \pmod{m_1}$. The same
argument works for every $i$. $\square$

The term $e_i = M_i y_i$ is worth a name. It is $\equiv 1$ mod $m_i$ and $\equiv 0$ mod every other modulus: a
"switch" that turns on exactly one remainder. The solution is just $x = \sum a_i e_i$, the same way a vector is a sum
of its coordinates times the basis vectors.

**Worked example: Sunzi's puzzle.** $m = 3, 5, 7$ and $M = 105$.

- $M_1 = 35$. Mod 3, $35 \equiv 2$, and $2 \cdot 2 = 4 \equiv 1$, so $y_1 = 2$ and $e_1 = 70$.
- $M_2 = 21$. Mod 5, $21 \equiv 1$, so $y_2 = 1$ and $e_2 = 21$.
- $M_3 = 15$. Mod 7, $15 \equiv 1$, so $y_3 = 1$ and $e_3 = 15$.

Then $x = 2 \cdot 70 + 3 \cdot 21 + 2 \cdot 15 = 140 + 63 + 30 = 233$, and $233 - 2 \cdot 105 = 23$.
**Check:** $23 = 7 \cdot 3 + 2 = 4 \cdot 5 + 3 = 3 \cdot 7 + 2$.

The *Sunzi Suanjing* solves its puzzle in exactly this way, with the numbers 70, 21 and 15 written out. A later poem
taught the method as a rhyme for the three switch numbers. The general method, for any moduli, is in Qin Jiushao's
*Mathematical Treatise in Nine Sections* (1247), which calls it the *dayan* rule and gives a procedure for the inverses
that is essentially the extended Euclid algorithm. In India, Aryabhata (around 499) and later Brahmagupta solved the
closely related linear problems by the *kuttaka* ("pulveriser") method. In Europe the theorem was rediscovered several
times; Gauss gives it in his *Disquisitiones Arithmeticae* (1801).

**Worked example: bigger moduli.** Solve $x \equiv 1 \pmod 4$, $x \equiv 2 \pmod 9$, $x \equiv 3 \pmod{25}$. Here
$M = 900$.

- $M_1 = 225 \equiv 1 \pmod 4$, so $y_1 = 1$, $e_1 = 225$.
- $M_2 = 100 \equiv 1 \pmod 9$, so $y_2 = 1$, $e_2 = 100$.
- $M_3 = 36 \equiv 11 \pmod{25}$. The inverse of 11 mod 25: $11 \cdot 16 = 176 = 7 \cdot 25 + 1$, so $y_3 = 16$ and
  $e_3 = 576$.

So $x = 225 + 2 \cdot 100 + 3 \cdot 576 = 225 + 200 + 1728 = 2153 \equiv 353 \pmod{900}$.
**Check:** $353 = 88 \cdot 4 + 1 = 39 \cdot 9 + 2 = 14 \cdot 25 + 3$.

### The second method: one congruence at a time

The formula is tidy, but by hand it is often faster to absorb the congruences one at a time. Redo the last example.

From $x \equiv 3 \pmod{25}$, write $x = 3 + 25t$. Put this into $x \equiv 2 \pmod 9$: $3 + 25t \equiv 2$, so
$25t \equiv -1$, and since $25 \equiv 7 \pmod 9$, $7t \equiv 8 \pmod 9$. The inverse of 7 mod 9 is 4 ($28 = 3 \cdot
9 + 1$), so $t \equiv 32 \equiv 5 \pmod 9$. Write $t = 5 + 9s$, so $x = 3 + 25(5 + 9s) = 128 + 225s$. Now
$x \equiv 1 \pmod 4$: $128 + 225s \equiv 0 + s \equiv 1$, so $s \equiv 1 \pmod 4$, and $x = 128 + 225 = 353$, the same
answer, now mod $225 \cdot 4 = 900$.

This method needs only one inverse at each step, and it works even when the moduli are not coprime, as we see next.

### When the moduli share a factor

Try $x \equiv 1 \pmod 6$ and $x \equiv 2 \pmod 4$. The first says $x$ is odd; the second says $x$ is even. There is no
solution. Coprimality is not a fussy hypothesis; without it the congruences can contradict each other through their
common factor.

!!! note "Theorem 6.2 (two moduli, general case)"
    The system $x \equiv a \pmod m$, $x \equiv b \pmod n$ has a solution if and only if $\gcd(m, n)$ divides $a - b$.
    When it does, the solution is unique mod $\operatorname{lcm}(m, n)$.

*Proof.* Let $g = \gcd(m, n)$. If $x$ is a solution then $g \mid m \mid x - a$ and $g \mid n \mid x - b$, so $g$
divides $(x - b) - (x - a) = a - b$. Conversely, suppose $g \mid a - b$. By Bézout there are $u, v$ with
$um + vn = g$. Multiply by $(b - a)/g$, a whole number: $u' m + v' n = b - a$ where $u' = u(b-a)/g$ and
$v' = v(b-a)/g$. Then $x = a + u'm = b - v'n$ is $\equiv a$ mod $m$ and $\equiv b$ mod $n$. For uniqueness: two
solutions differ by a common multiple of $m$ and $n$, and every common multiple is a multiple of the lcm
([Chapter 3](03-GCD-and-Euclids-Algorithm.md)). $\square$

**Worked example.** $x \equiv 3 \pmod 6$ and $x \equiv 5 \pmod 8$. Here $g = 2$ and $5 - 3 = 2$, so there is a
solution, unique mod 24. The numbers $\equiv 5 \pmod 8$ below 24 are 5, 13, 21, and mod 6 they are 5, 1, 3. So
$x \equiv 21 \pmod{24}$. **Check:** $21 = 3 \cdot 6 + 3 = 2 \cdot 8 + 5$.

A practical rule: split every modulus into prime powers. Then two congruences mod powers of the *same* prime either
contradict each other or the one with the higher power implies the other. For example $x \equiv 3 \pmod 6$ means
$x \equiv 1 \pmod 2$ and $x \equiv 0 \pmod 3$, and $x \equiv 5 \pmod 8$ already implies $x \equiv 1 \pmod 2$. So the
system is just $x \equiv 0 \pmod 3$, $x \equiv 5 \pmod 8$, with coprime moduli.

### The theorem as a picture, and as a statement about rings

Take $m = 3$ and $n = 5$. Write each of $0, 1, \dots, 14$ in the cell of a $3 \times 5$ grid given by its remainder
mod 3 (the row) and its remainder mod 5 (the column):

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 170" role="img" aria-label="The numbers 0 to 14 placed in a 3 by 5 grid by their remainders mod 3 and mod 5; every cell gets exactly one number">
<g font-size="11" text-anchor="middle" fill="currentColor">
<text x="150" y="14">remainder mod 5</text>
<text x="70" y="34">0</text>
<text x="110" y="34">1</text>
<text x="150" y="34">2</text>
<text x="190" y="34">3</text>
<text x="230" y="34">4</text>
<text x="14" y="105" transform="rotate(-90 14 105)">remainder mod 3</text>
<text x="38" y="64">0</text>
<text x="38" y="104">1</text>
<text x="38" y="144">2</text>
</g>
<rect x="50" y="40" width="40" height="40" fill="#eea66f" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="90" y="40" width="40" height="40" fill="#eea66f" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="130" y="40" width="40" height="40" fill="#eea66f" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="170" y="40" width="40" height="40" fill="#eea66f" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="210" y="40" width="40" height="40" fill="#eea66f" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="50" y="80" width="40" height="40" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="90" y="80" width="40" height="40" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="130" y="80" width="40" height="40" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="170" y="80" width="40" height="40" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="210" y="80" width="40" height="40" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="50" y="120" width="40" height="40" fill="#7ccf9a" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="90" y="120" width="40" height="40" fill="#7ccf9a" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="130" y="120" width="40" height="40" fill="#7ccf9a" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="170" y="120" width="40" height="40" fill="#7ccf9a" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<rect x="210" y="120" width="40" height="40" fill="#7ccf9a" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.5"/>
<g font-size="14" text-anchor="middle" fill="currentColor">
<text x="70" y="65">0</text>
<text x="110" y="105">1</text>
<text x="150" y="145">2</text>
<text x="190" y="65">3</text>
<text x="230" y="105">4</text>
<text x="70" y="145">5</text>
<text x="110" y="65">6</text>
<text x="150" y="105">7</text>
<text x="190" y="145">8</text>
<text x="230" y="65">9</text>
<text x="70" y="105">10</text>
<text x="110" y="145">11</text>
<text x="150" y="65">12</text>
<text x="190" y="105">13</text>
<text x="230" y="145">14</text>
</g>
</svg>
</div>

Counting up from 0 moves one step down and one step right each time, wrapping around at the edges, like a billiard
ball bouncing round a torus. Because 3 and 5 are coprime the path visits every one of the 15 cells before it returns
to 0. (With a $2 \times 4$ grid, $\gcd = 2$, the path would visit only 4 of the 8 cells and the other 4 would be the
pairs of remainders no number has, like "odd and even" above.)

In the language of rings (see [Algebra, Chapter 17](../algebra/17-Rings-and-Ideals.md)): write $\mathbb{Z}/n$ for the
integers mod $n$, with their addition and multiplication. The map

$$
\mathbb{Z}/mn \to \mathbb{Z}/m \times \mathbb{Z}/n, \qquad x \mapsto (x \bmod m,\ x \bmod n)
$$

respects addition and multiplication (remainders of a sum or product are computed from the remainders), so it is a
**ring homomorphism**. The CRT says that when $\gcd(m, n) = 1$ it is a bijection, so it is an **isomorphism**: the two
rings are the same ring with different labels. Arithmetic mod 15 is arithmetic mod 3 and mod 5 done side by side.

This has a consequence we will use at once. A number $x$ has an inverse mod $mn$ exactly when it has one mod $m$ and
one mod $n$ (a pair has an inverse in a product ring exactly when both coordinates do). So the units, the invertible
elements, correspond too:

$$
(\mathbb{Z}/mn)^\times \cong (\mathbb{Z}/m)^\times \times (\mathbb{Z}/n)^\times .
$$

Counting both sides gives $\varphi(mn) = \varphi(m)\varphi(n)$ whenever $\gcd(m, n) = 1$, the multiplicativity of
Euler's phi function. We come back to this in 6.2.

### Splitting a problem

The real power of the CRT is the strategy it allows: to answer a question mod $n$, factor $n = p_1^{a_1} \cdots
p_k^{a_k}$, answer it mod each prime power, and glue.

**Worked example: square roots of 1.** How many $x$ mod 15 satisfy $x^2 \equiv 1$? Mod 3, the solutions are
$x \equiv \pm 1$ (two of them). Mod 5, $x^2 \equiv 1$ means $5 \mid (x-1)(x+1)$, and since 5 is prime it divides one
factor, so again $x \equiv \pm 1$: two solutions. The CRT pairs every choice mod 3 with every choice mod 5, so there
are $2 \times 2 = 4$ solutions mod 15:

| mod 3 | mod 5 | $x$ mod 15 |
|---|---|---|
| 1 | 1 | 1 |
| 1 | 4 | 4 |
| 2 | 1 | 11 |
| 2 | 4 | 14 |

**Check:** $4^2 = 16 = 15 + 1$ and $11^2 = 121 = 8 \cdot 15 + 1$. So mod a composite number a quadratic can have more
than two roots: $x^2 - 1$ has four roots mod 15, and $2^3 = 8$ roots mod $105 = 3 \cdot 5 \cdot 7$. Over a field it
could have only two. This is exactly why factoring $n$ is equivalent to finding square roots mod $n$: if you know
$4^2 \equiv 1^2 \pmod{15}$ with $4 \not\equiv \pm 1$, then $\gcd(4 - 1, 15) = 3$ is a factor. The Rabin cryptosystem
and many factoring algorithms (Chapter 12) rest on this.

**Worked example: a last-two-digits question.** What are the last two digits of $7^{2026}$? We need it mod
$100 = 4 \cdot 25$. Mod 4: $7 \equiv -1$, and the exponent is even, so $7^{2026} \equiv 1$. Mod 25: $\varphi(25) = 20$,
and $2026 = 101 \cdot 20 + 6$, so by Euler's theorem $7^{2026} \equiv 7^6 \pmod{25}$. Now $7^2 = 49 \equiv -1$, so
$7^6 = (7^2)^3 \equiv -1 \equiv 24$. Glue: $x \equiv 1 \pmod 4$ and $x \equiv 24 \pmod{25}$; the numbers $24, 49, 74,
99$ are $0, 1, 2, 3$ mod 4, so $x = 49$. **Check:** `pow(7, 2026, 100)` in Python gives 49.

The same idea makes RSA decryption about four times faster: the owner of the key computes mod $p$ and mod $q$
separately and glues (see the [cryptography book, chapter 13](https://cryptography.akadian.ca/book/13-RSA/)).

!!! tip "Try it in Python"
    ```python
    def crt(residues, moduli):
        """Solve x = r_i mod m_i for pairwise coprime m_i. Returns (x, M)."""
        x, M = 0, 1
        for r, m in zip(residues, moduli):
            # x is right mod M; find t with x + M*t = r (mod m)
            t = (r - x) * pow(M, -1, m) % m
            x, M = x + M * t, M * m
        return x % M, M

    print(crt([2, 3, 2], [3, 5, 7]))      # (23, 105)
    print(crt([1, 2, 3], [4, 9, 25]))     # (353, 900)
    ```
    This is the one-at-a-time method; `pow(M, -1, m)` (Python 3.8 or later) is the inverse of $M$ mod $m$.

<figure class="play" data-play="crt"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Two remainder conditions at once. When m and n share no factor, exactly one number below m·n fits both.</figcaption></figure>

## 6.2 Multiplicative functions

*Level: intermediate.*

How many divisors does 360 have, and what do they add up to? Listing them is slow: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12,
15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 180, 360. There are 24, with sum 1170. There is a much faster way,
and it rests on the factorization $360 = 2^3 \cdot 3^2 \cdot 5$.

An **arithmetic function** is any function $f$ from the positive integers to the real (or complex) numbers. Three of
them will be our main examples:

- $\tau(n)$, the number of positive divisors of $n$ (also written $d(n)$ or $\sigma_0(n)$);
- $\sigma(n)$, the sum of the positive divisors of $n$ (also $\sigma_1(n)$);
- $\varphi(n)$, Euler's phi function, the number of $k$ in $1, \dots, n$ with $\gcd(k, n) = 1$.

An arithmetic function $f$ is **multiplicative** if $f(1) = 1$ and $f(mn) = f(m) f(n)$ whenever $\gcd(m, n) = 1$. It
is **completely multiplicative** if $f(mn) = f(m)f(n)$ for all $m, n$. For example $f(n) = n^2$ is completely
multiplicative, while $\tau$ is multiplicative but not completely: $\tau(4) = 3$ but $\tau(2)\tau(2) = 4$.

The point of the definition: a multiplicative function is determined by its values on prime powers. If
$n = p_1^{a_1} \cdots p_k^{a_k}$ then the prime powers $p_i^{a_i}$ are pairwise coprime and

$$
f(n) = f(p_1^{a_1}) f(p_2^{a_2}) \cdots f(p_k^{a_k}) .
$$

So to understand $f$ we only need a formula for $f(p^a)$.

### Divisors of a product

The key lemma tells us what the divisors of $mn$ look like.

!!! note "Lemma 6.3"
    Let $\gcd(m, n) = 1$. Every positive divisor $d$ of $mn$ can be written in exactly one way as $d = d_1 d_2$ with
    $d_1 \mid m$ and $d_2 \mid n$; namely $d_1 = \gcd(d, m)$ and $d_2 = \gcd(d, n)$. Conversely every such product
    $d_1 d_2$ divides $mn$.

*Proof.* Use unique factorization. The primes dividing $m$ and those dividing $n$ form two separate sets. A divisor
$d$ of $mn$ is a product of prime powers $p^b$ where $p^b$ divides $mn$, and each such $p$ belongs to exactly one of
the two sets. Let $d_1$ be the product of the prime powers of $d$ at primes of $m$, and $d_2$ the rest. Then
$d_1 \mid m$, $d_2 \mid n$, $d = d_1 d_2$, and the split is forced, because a prime of $m$ cannot appear in $d_2$ (it
does not divide $n$) and vice versa. The converse is clear: $d_1 d_2$ divides $mn$ because $d_1 \mid m$ and
$d_2 \mid n$. $\square$

So, when $\gcd(m, n) = 1$, the divisors of $mn$ are in one-to-one correspondence with the pairs $(d_1, d_2)$ of
divisors of $m$ and of $n$. Two consequences follow immediately.

!!! note "Theorem 6.4"
    $\tau$ and $\sigma$ are multiplicative, and for a prime power

    $$
    \tau(p^a) = a + 1, \qquad \sigma(p^a) = 1 + p + p^2 + \cdots + p^a = \frac{p^{a+1} - 1}{p - 1} .
    $$

*Proof.* If $\gcd(m, n) = 1$, Lemma 6.3 gives a bijection between divisors of $mn$ and pairs $(d_1, d_2)$, so
$\tau(mn) = \tau(m)\tau(n)$. For the sum,

$$
\sigma(mn) = \sum_{d \mid mn} d = \sum_{d_1 \mid m} \sum_{d_2 \mid n} d_1 d_2 = \Big(\sum_{d_1 \mid m} d_1\Big)\Big(\sum_{d_2 \mid n} d_2\Big) = \sigma(m)\sigma(n) .
$$

The divisors of $p^a$ are $1, p, \dots, p^a$, which are $a + 1$ numbers whose sum is a geometric series with the
stated value. $\square$

**Worked example.** $360 = 2^3 \cdot 3^2 \cdot 5$, so

$$
\tau(360) = 4 \cdot 3 \cdot 2 = 24, \qquad \sigma(360) = \frac{2^4 - 1}{1} \cdot \frac{3^3 - 1}{2} \cdot \frac{5^2 - 1}{4} = 15 \cdot 13 \cdot 6 = 1170 .
$$

Both agree with the list above.

You can also read $\tau$ off a picture: a divisor of $2^3 \cdot 3^2 \cdot 5$ is $2^i 3^j 5^k$ with $0 \le i \le 3$,
$0 \le j \le 2$, $0 \le k \le 1$, a point in a $4 \times 3 \times 2$ box of lattice points. Expanding
$(1 + 2 + 4 + 8)(1 + 3 + 9)(1 + 5)$ produces each divisor exactly once, which is the formula for $\sigma$ in one line.

### Euler's phi

!!! note "Theorem 6.5"
    $\varphi$ is multiplicative, $\varphi(p^a) = p^a - p^{a-1}$, and so

    $$
    \varphi(n) = n \prod_{p \mid n} \Big(1 - \frac{1}{p}\Big) .
    $$

*Proof.* Multiplicativity is the CRT statement at the end of 6.1: $(\mathbb{Z}/mn)^\times$ is in bijection with
$(\mathbb{Z}/m)^\times \times (\mathbb{Z}/n)^\times$. In elementary words: by the CRT each $x$ in $0, \dots, mn - 1$
corresponds to exactly one pair $(x \bmod m, x \bmod n)$, and $\gcd(x, mn) = 1$ if and only if $\gcd(x, m) = 1$ and
$\gcd(x, n) = 1$, which holds if and only if $\gcd(x \bmod m, m) = 1$ and $\gcd(x \bmod n, n) = 1$. So the numbers
coprime to $mn$ correspond to pairs of numbers coprime to $m$ and to $n$, and there are $\varphi(m)\varphi(n)$ such
pairs.

For a prime power: among $1, \dots, p^a$, the numbers *not* coprime to $p^a$ are those divisible by $p$, namely
$p, 2p, \dots, p^{a-1} \cdot p$, and there are $p^{a-1}$ of them. So $\varphi(p^a) = p^a - p^{a-1} = p^a(1 - 1/p)$.
Multiplying over the prime powers of $n$ gives the product formula. $\square$

**Worked example.** $\varphi(360) = 360 \cdot \tfrac12 \cdot \tfrac23 \cdot \tfrac45 = 96$. **Check:** $\varphi(8)
\varphi(9) \varphi(5) = 4 \cdot 6 \cdot 4 = 96$.

The product formula has a probabilistic reading. Pick $x$ at random from $1, \dots, n$. The chance that a given prime
$p \mid n$ does not divide $x$ is $1 - 1/p$, and by the CRT these events for different primes are independent. So the
chance that $x$ is coprime to $n$ is the product.

### Some uses

**Which numbers have an odd number of divisors?** $\tau(n) = \prod (a_i + 1)$ is odd exactly when every $a_i$ is
even, that is, when $n$ is a perfect square. (This is the famous locker puzzle: in a corridor of 100 lockers, toggled
by student $k$ at every multiple of $k$, the lockers left open are the squares.)

**When is $\sigma(n)$ odd?** For an odd prime $p$, $\sigma(p^a) = 1 + p + \cdots + p^a$ is a sum of $a + 1$ odd
numbers, so it is odd exactly when $a$ is even. And $\sigma(2^a) = 2^{a+1} - 1$ is always odd. So $\sigma(n)$ is odd
exactly when every odd prime appears to an even power, that is, when $n$ is a square or twice a square.

**The smallest number with a given number of divisors.** To have $\tau(n) = 12$ we need $\prod (a_i + 1) = 12$, so the
exponents, largest first, are $(11)$, $(5, 1)$, $(3, 2)$ or $(2, 1, 1)$, from $12 = 12 = 6 \cdot 2 = 4 \cdot 3 =
3 \cdot 2 \cdot 2$. To make $n$ small, put the biggest exponents on the smallest primes: $2^{11} = 2048$,
$2^5 \cdot 3 = 96$, $2^3 \cdot 3^2 = 72$, $2^2 \cdot 3 \cdot 5 = 60$. The smallest is 60.

**A sum over divisors.** Gauss noticed that $\sum_{d \mid n} \varphi(d) = n$. For $n = 12$: $\varphi(1) + \varphi(2) +
\varphi(3) + \varphi(4) + \varphi(6) + \varphi(12) = 1 + 1 + 2 + 2 + 2 + 4 = 12$. Here is a proof by sorting. Sort the
fractions $\tfrac{1}{12}, \tfrac{2}{12}, \dots, \tfrac{12}{12}$ by their reduced denominators. A fraction $k/n$ in
lowest terms is $a/d$ with $d \mid n$, $1 \le a \le d$ and $\gcd(a, d) = 1$; each such $a/d$ occurs exactly once. So
the $n$ fractions split into groups of sizes $\varphi(d)$, one for each $d \mid n$. We will use this identity in
[Chapter 7](07-Primitive-Roots.md) to prove that primitive roots exist, and we will meet it again in 6.5 as
$\varphi * 1 = \mathrm{id}$.

!!! warning "Multiplicative needs coprime"
    $\varphi(4) = 2$, but $\varphi(2)\varphi(2) = 1$. The formulas $f(mn) = f(m)f(n)$ are only promised for coprime
    $m$ and $n$. Always split $n$ into its prime powers first.

## 6.3 Perfect numbers

*Level: intermediate; the end is advanced.*

The divisors of 6 other than 6 itself are 1, 2, 3, and they add up to 6. The same happens for 28: $1 + 2 + 4 + 7 + 14
= 28$. The Greeks called such numbers **perfect**. In terms of $\sigma$, which counts $n$ itself too, $n$ is perfect
when

$$
\sigma(n) = 2n .
$$

If $\sigma(n) < 2n$ the number is **deficient** (all primes are, since $\sigma(p) = p + 1$), and if $\sigma(n) > 2n$ it
is **abundant** (12 is the smallest: $1 + 2 + 3 + 4 + 6 = 16 > 12$). The perfect numbers below 10 000 are 6, 28, 496
and 8128, the four known to Nicomachus of Gerasa around 100 CE. The next is 33 550 336.

Look at their shape:

$$
6 = 2 \cdot 3, \quad 28 = 4 \cdot 7, \quad 496 = 16 \cdot 31, \quad 8128 = 64 \cdot 127, \quad 33\,550\,336 = 4096 \cdot 8191 .
$$

Each is $2^{p-1}(2^p - 1)$ with $2^p - 1$ prime: $p = 2, 3, 5, 7, 13$. A prime of the form $2^p - 1$ is a **Mersenne
prime** ([Chapter 2](02-Primes-and-Unique-Factorization.md)).

### The Euclid-Euler theorem

!!! note "Theorem 6.6 (Euclid-Euler)"
    If $2^p - 1$ is prime, then $2^{p-1}(2^p - 1)$ is perfect. Conversely, every even perfect number has this form.

The first half is Proposition 36 of Book IX of Euclid's *Elements* (about 300 BCE). The converse is due to Euler; it
was found among his papers and published after his death, in 1849. With $\sigma$ in hand both halves are short.

*Proof that these numbers are perfect.* Let $q = 2^p - 1$ be prime and $n = 2^{p-1} q$. The two factors are coprime
($q$ is odd), so

$$
\sigma(n) = \sigma(2^{p-1})\,\sigma(q) = (2^p - 1)(q + 1) = q \cdot 2^p = 2 \cdot 2^{p-1} q = 2n .
$$

*Proof that every even perfect number has this form.* Let $n$ be even and perfect. Write $n = 2^{k} m$ with $k \ge 1$
and $m$ odd. Then

$$
2^{k+1} m = 2n = \sigma(n) = \sigma(2^k)\sigma(m) = (2^{k+1} - 1)\sigma(m) .
$$

The number $2^{k+1} - 1$ is odd, so it is coprime to $2^{k+1}$, and it divides $2^{k+1} m$; by Euclid's lemma it
divides $m$. Write $m = (2^{k+1} - 1) c$. Substituting and cancelling $2^{k+1} - 1$ gives $\sigma(m) = 2^{k+1} c$, so

$$
\sigma(m) = 2^{k+1} c = (2^{k+1} - 1)c + c = m + c .
$$

Now $m$ and $c$ are both divisors of $m$. If $c \ne m$, which holds because $2^{k+1} - 1 \ge 3$, they are two
different divisors, and $\sigma(m) = m + c$ says they are the *only* divisors. If $c > 1$, then 1 would be a third
divisor, distinct from both. So $c = 1$, $m$ has exactly the two divisors 1 and $m$, and $m = 2^{k+1} - 1$ is prime.
Putting $p = k + 1$, we get $n = 2^{p-1}(2^p - 1)$ with $2^p - 1$ prime. $\square$

So finding even perfect numbers is the same as finding Mersenne primes. Two remarks from
[Chapter 2](02-Primes-and-Unique-Factorization.md) apply. First, $2^p - 1$ can only be prime when $p$ is prime, since
$2^{ab} - 1$ is divisible by $2^a - 1$. Second, $p$ prime is not enough: $2^{11} - 1 = 2047 = 23 \cdot 89$. As of the
end of 2024, 52 Mersenne primes are known, so 52 even perfect numbers; the largest found then was $2^{136\,279\,841} -
1$, discovered in October 2024 by the Great Internet Mersenne Prime Search (GIMPS). Nobody knows whether there are
infinitely many.

**Worked example.** Is $2^{12}(2^{13} - 1) = 33\,550\,336$ perfect? $8191$ is prime (trial division by the primes up to
$\sqrt{8191} \approx 90.5$ finds no factor), so yes. **Check in Python:** `sum(d for d in range(1, n) if n % d == 0)`
returns $n$ for $n = 33550336$, in a few seconds.

### Odd perfect numbers

Nobody has ever found an odd perfect number, and nobody has proved there are none. This may be the oldest open problem
in mathematics. What is known is a long list of conditions an odd perfect number would have to meet. The first is
Euler's, and we can prove it.

!!! note "Theorem 6.7 (Euler)"
    If $n$ is an odd perfect number, then $n = p^{a} m^2$ where $p$ is a prime with $p \equiv a \equiv 1 \pmod 4$ and
    $p \nmid m$.

*Proof.* Let $n = \prod q_i^{b_i}$ be odd with $\sigma(n) = 2n$. Since $n$ is odd, $2n \equiv 2 \pmod 4$: the number
$\sigma(n) = \prod \sigma(q_i^{b_i})$ is divisible by 2 exactly once. We saw in 6.2 that for an odd prime,
$\sigma(q^b)$ is odd when $b$ is even and even when $b$ is odd. So exactly one exponent, say the one at $p$, is odd,
and every other exponent is even; this gives $n = p^a m^2$. Moreover $\sigma(p^a)$ must be $\equiv 2 \pmod 4$. Here
$a$ is odd, so $\sigma(p^a) = 1 + p + \cdots + p^a$ has an even number $a + 1$ of terms. If $p \equiv 3 \pmod 4$ the
terms are $\equiv 1, 3, 1, 3, \dots$, which pair off into sums $\equiv 0 \pmod 4$, so $\sigma(p^a) \equiv 0 \pmod 4$:
impossible. So $p \equiv 1 \pmod 4$, every term is $\equiv 1$, and $\sigma(p^a) \equiv a + 1 \pmod 4$. This is $\equiv
2$ exactly when $a \equiv 1 \pmod 4$. $\square$

Modern conditions are far stronger. Ochem and Rao proved in 2012 that an odd perfect number would have to exceed
$10^{1500}$, and other papers bound the number of distinct prime factors from below. Still, no argument comes close to
ruling them out, and heuristic arguments (Pomerance has given one) suggest that none exist.

**A near miss.** Descartes noticed in 1638 that $D = 3^2 \cdot 7^2 \cdot 11^2 \cdot 13^2 \cdot 22\,021 = 198\,585\,576\,
189$ "would be" an odd perfect number if 22 021 were prime: then $\sigma(D)$ would be $\sigma(3^2)\sigma(7^2)
\sigma(11^2)\sigma(13^2) \cdot 22\,022 = 2D$. But $22\,021 = 19^2 \cdot 61$, so $D$ is not perfect. Numbers like this
are now called Descartes numbers ("spoof" odd perfect numbers).

!!! tip "Try it in Python"
    ```python
    def sigma(n):
        s, p = 1, 2
        while p * p <= n:
            if n % p == 0:
                pk, t = 1, 1
                while n % p == 0:
                    n //= p; pk *= p; t += pk
                s *= t
            p += 1
        return s * (n + 1 if n > 1 else 1)

    print([n for n in range(2, 10000) if sigma(n) == 2 * n])     # [6, 28, 496, 8128]
    print(min(n for n in range(1, 10000, 2) if sigma(n) > 2 * n))  # 945, the smallest odd abundant number
    ```

## 6.4 The Möbius function and inversion

*Level: advanced.*

Gauss's identity says $\sum_{d \mid n} \varphi(d) = n$. Suppose you knew only this, for every $n$. Could you recover
$\varphi$? Yes, step by step: $\varphi(1) = 1$; $\varphi(1) + \varphi(2) = 2$ gives $\varphi(2) = 1$; $\varphi(1) +
\varphi(2) + \varphi(4) = 4$ gives $\varphi(4) = 2$, and so on. The Möbius function turns this step-by-step undoing
into one formula.

### Definition

!!! note "Definition"
    The **Möbius function** is

    $$
    \mu(n) = \begin{cases} 1 & n = 1, \\ (-1)^k & n \text{ is a product of } k \text{ distinct primes}, \\ 0 & n \text{ is divisible by the square of a prime.} \end{cases}
    $$

A number not divisible by any square $p^2$ is **squarefree**. So $\mu(n)$ is 0 unless $n$ is squarefree, and then it
is $+1$ or $-1$ according to whether $n$ has an even or odd number of prime factors. The first values, for
$n = 1, \dots, 15$, are

$$
1, -1, -1, 0, -1, 1, -1, 0, 0, 1, -1, 0, -1, 1, 1 .
$$

For example $\mu(6) = \mu(2 \cdot 3) = 1$, $\mu(30) = \mu(2 \cdot 3 \cdot 5) = -1$, $\mu(12) = 0$ since $4 \mid 12$.
It is easy to check from the definition that $\mu$ is multiplicative: if $m$ and $n$ are coprime and squarefree, their
primes are disjoint and the counts add; if either has a square factor, so does $mn$.

The function is named after August Ferdinand Möbius, who introduced it in 1832 (the same Möbius as the strip), though
Euler and Gauss had used the sums it controls.

### The basic identity

!!! note "Theorem 6.8"

    $$
    \sum_{d \mid n} \mu(d) = \begin{cases} 1 & n = 1, \\ 0 & n > 1. \end{cases}
    $$

*Proof.* For $n = 1$ the sum is $\mu(1) = 1$. Let $n > 1$ have the $k \ge 1$ distinct prime factors $p_1, \dots,
p_k$. Divisors $d$ with a square factor contribute 0, so only the squarefree divisors count, and these are the products
of subsets of $\{p_1, \dots, p_k\}$. A subset of size $j$ contributes $(-1)^j$, and there are $\binom{k}{j}$ of them, so
by the binomial theorem

$$
\sum_{d \mid n} \mu(d) = \sum_{j=0}^{k} \binom{k}{j} (-1)^j = (1 - 1)^k = 0 . \qquad \square
$$

**Check for $n = 12$:** the divisors are 1, 2, 3, 4, 6, 12 with $\mu$-values $1, -1, -1, 0, 1, 0$, summing to 0.

The identity is a compact form of **inclusion-exclusion**. To count the numbers in $1, \dots, N$ coprime to $30$, start
with $N$, subtract the multiples of 2, of 3 and of 5, add back the multiples of 6, 10 and 15, which were subtracted
twice, and subtract the multiples of 30 once more. The signs are exactly $\mu(d)$ for $d \mid 30$. For $N = 30$:

$$
30 - 15 - 10 - 6 + 5 + 3 + 2 - 1 = 8 = \varphi(30) .
$$

### Möbius inversion

!!! note "Theorem 6.9 (Möbius inversion formula)"
    Let $f$ and $g$ be arithmetic functions. Then

    $$
    g(n) = \sum_{d \mid n} f(d) \ \text{ for all } n \qquad \text{if and only if} \qquad f(n) = \sum_{d \mid n} \mu(d)\, g\!\left(\frac{n}{d}\right) \ \text{ for all } n .
    $$

*Proof.* Assume the left side. Then

$$
\sum_{d \mid n} \mu(d)\, g\!\left(\frac{n}{d}\right) = \sum_{d \mid n} \mu(d) \sum_{e \mid n/d} f(e) .
$$

The pairs $(d, e)$ with $d \mid n$ and $e \mid n/d$ are exactly the pairs with $de \mid n$. Swap the order: for each
$e \mid n$, $d$ runs over the divisors of $n/e$. So the double sum is

$$
\sum_{e \mid n} f(e) \sum_{d \mid n/e} \mu(d) .
$$

By Theorem 6.8 the inner sum is 1 when $n/e = 1$ and 0 otherwise. Only $e = n$ survives, and the total is $f(n)$.

The converse is the same computation in the other direction: assuming the right side,
$\sum_{d \mid n} f(d) = \sum_{d \mid n} \sum_{e \mid d} \mu(e) g(d/e)$. Put $d = ec$; the pairs $(e, c)$ run over all
pairs with $ec \mid n$, so the sum is $\sum_{c \mid n} g(c) \sum_{e \mid n/c} \mu(e) = g(n)$. $\square$

In 6.5 we will see a shorter proof once the right algebra is in place.

**Example 1: phi from Gauss's identity.** With $g(n) = n$ and $f = \varphi$, Gauss's identity is the left side, so

$$
\varphi(n) = \sum_{d \mid n} \mu(d) \frac{n}{d} = n \sum_{d \mid n} \frac{\mu(d)}{d} .
$$

For $n = p_1^{a_1} \cdots p_k^{a_k}$, the squarefree divisors give $\sum \mu(d)/d = \prod (1 - 1/p_i)$ (expand the
product), which is the product formula of Theorem 6.5, obtained a second way. **Check for $n = 12$:**
$12 - 6 - 4 + 2 = 4 = \varphi(12)$.

**Example 2: counting irreducible polynomials.** This is a famous application. Let $q$ be a prime power and let
$N_q(n)$ be the number of monic irreducible polynomials of degree $n$ over the finite field $\mathbb{F}_q$ (see
[Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md)). A theorem about finite fields, proved there, says that
the polynomial $x^{q^n} - x$ is the product of all monic irreducible polynomials whose degree divides $n$. Comparing
degrees:

$$
q^n = \sum_{d \mid n} d\, N_q(d) .
$$

This is the left side of inversion with $g(n) = q^n$ and $f(d) = d N_q(d)$. Inverting,

$$
N_q(n) = \frac{1}{n} \sum_{d \mid n} \mu(d)\, q^{n/d} .
$$

For $q = 2$ this gives $2, 1, 2, 3, 6, 9, 18, 30$ irreducible polynomials of degrees $1, \dots, 8$. **Check for degree
2:** $(2^2 - 2)/2 = 1$, and indeed $x^2 + x + 1$ is the only irreducible quadratic over $\mathbb{F}_2$ (the other three
monic quadratics, $x^2$, $x^2 + 1 = (x+1)^2$ and $x^2 + x = x(x+1)$, factor). A bonus: since the $d = 1$ term $q^n$
dominates, $N_q(n) \approx q^n / n$. Among the $q^n$ monic polynomials of degree $n$, about one in $n$ is irreducible,
a "prime number theorem" for polynomials that is easy to prove, while the one for integers is hard
([Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md)).

**Example 3: necklaces.** The same formula counts **aperiodic necklaces**: arrangements of $n$ beads in $q$ colours
around a circle, counted up to rotation, that are not made of a shorter block repeated. A string of length $n$ has a
smallest period $d$ dividing $n$, and the strings of smallest period exactly $d$ come in rotation classes of size
exactly $d$; counting all $q^n$ strings this way gives $q^n = \sum_{d \mid n} d\, M(d)$, the same relation, so
$M(n) = N_q(n)$. For $q = 2$, $n = 4$ there are 3: $0001$, $0011$, $0111$.

### Coprime pairs and the number 6 over pi squared

*Level: expert, as a preview.* What fraction of pairs $(a, b)$ with $1 \le a, b \le N$ are coprime? Using Theorem 6.8 as
an indicator, $[\gcd(a,b) = 1] = \sum_{d \mid \gcd(a, b)} \mu(d)$, so the count is

$$
\sum_{a, b \le N} \sum_{d \mid a,\, d \mid b} \mu(d) = \sum_{d \le N} \mu(d) \left\lfloor \frac{N}{d} \right\rfloor^2 .
$$

Dividing by $N^2$ and letting $N \to \infty$, the fraction tends to $\sum_{d=1}^{\infty} \mu(d)/d^2$, which equals
$1/\zeta(2) = 6/\pi^2 \approx 0.6079$. (Making the limit rigorous takes a few lines of estimates; the value
$\zeta(2) = \pi^2/6$ and the link between $\mu$ and $1/\zeta$ are proved in
[Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).) So two "random" whole numbers are coprime about 61
percent of the time. **Check:** for $N = 1000$ a direct count gives 608 383 coprime pairs out of $10^6$.

## 6.5 Dirichlet convolution

*Level: advanced.*

Every formula in this chapter has the shape "sum over the divisors of $n$". There is an operation that makes all of
them into multiplication.

!!! note "Definition"
    The **Dirichlet convolution** of two arithmetic functions $f$ and $g$ is the arithmetic function

    $$
    (f * g)(n) = \sum_{d \mid n} f(d)\, g\!\left(\frac{n}{d}\right) = \sum_{ab = n} f(a)\, g(b) .
    $$

The second form, a sum over all ordered pairs $(a, b)$ of positive integers with $ab = n$, shows the symmetry best.

We need names for a few simple functions:

- $\varepsilon(n)$ is 1 if $n = 1$ and 0 otherwise (the "identity" for convolution);
- $\mathbf{1}(n) = 1$ for all $n$ (the constant function);
- $\mathrm{id}(n) = n$.

Then the identities of this chapter become:

| identity | in words |
|---|---|
| $\mathbf{1} * \mathbf{1} = \tau$ | count the divisors |
| $\mathrm{id} * \mathbf{1} = \sigma$ | add the divisors |
| $\varphi * \mathbf{1} = \mathrm{id}$ | Gauss: $\sum_{d \mid n} \varphi(d) = n$ |
| $\mu * \mathbf{1} = \varepsilon$ | Theorem 6.8 |
| $\mu * \mathrm{id} = \varphi$ | Example 1 above |

### The algebra

!!! note "Theorem 6.10"
    Dirichlet convolution is commutative and associative, $\varepsilon$ is its identity element, and an arithmetic
    function $f$ has an inverse $f^{-1}$ (with $f * f^{-1} = \varepsilon$) if and only if $f(1) \ne 0$.

*Proof.* Commutativity: the sum over pairs $ab = n$ is symmetric in $a$ and $b$. Associativity: both $((f * g) * h)(n)$
and $(f * (g * h))(n)$ equal $\sum_{abc = n} f(a)g(b)h(c)$, the sum over ordered triples with product $n$. Identity:
$(f * \varepsilon)(n) = \sum_{ab = n} f(a)\varepsilon(b) = f(n)$, since only $b = 1$ survives.

Inverse: if $f * g = \varepsilon$ then at $n = 1$, $f(1)g(1) = 1$, so $f(1) \ne 0$. Conversely if $f(1) \ne 0$, define
$g$ recursively: $g(1) = 1/f(1)$, and for $n > 1$

$$
g(n) = -\frac{1}{f(1)} \sum_{\substack{d \mid n \\ d > 1}} f(d)\, g\!\left(\frac{n}{d}\right) ,
$$

which uses only values $g(m)$ with $m < n$. Rearranged, this says exactly $\sum_{d \mid n} f(d)g(n/d) = 0$ for
$n > 1$, and the $n = 1$ value is 1. So $f * g = \varepsilon$. $\square$

In algebraic language: the arithmetic functions with pointwise addition and Dirichlet convolution form a commutative
ring (the distributive law $f * (g + h) = f * g + f * h$ is clear), and its units are the functions with $f(1) \ne 0$.

Now Möbius inversion is a one-line proof. Theorem 6.8 says $\mu * \mathbf{1} = \varepsilon$: the Möbius function is
the inverse of the constant function $\mathbf{1}$. If $g = f * \mathbf{1}$, convolve both sides with $\mu$:
$g * \mu = f * \mathbf{1} * \mu = f * \varepsilon = f$. Conversely $f = g * \mu$ gives
$f * \mathbf{1} = g * \mu * \mathbf{1} = g$. That is all of Theorem 6.9.

And some identities come free. From $\varphi * \mathbf{1} = \mathrm{id}$ and $\sigma = \mathrm{id} * \mathbf{1}$:

$$
\sigma = \mathrm{id} * \mathbf{1} = \varphi * \mathbf{1} * \mathbf{1} = \varphi * \tau ,
$$

that is, $\sigma(n) = \sum_{d \mid n} \varphi(d)\tau(n/d)$. **Check for $n = 6$:** $\varphi(1)\tau(6) +
\varphi(2)\tau(3) + \varphi(3)\tau(2) + \varphi(6)\tau(1) = 4 + 2 + 4 + 2 = 12 = \sigma(6)$.

### Multiplicative functions form a group

!!! note "Theorem 6.11"
    If $f$ and $g$ are multiplicative, so is $f * g$. The inverse of a multiplicative function is multiplicative.

*Proof.* Let $\gcd(m, n) = 1$. By Lemma 6.3, the divisors $d$ of $mn$ are exactly the products $d_1 d_2$ with
$d_1 \mid m$, $d_2 \mid n$, each once, and then $mn/d = (m/d_1)(n/d_2)$ with all four numbers $d_1, m/d_1$ coprime to
$d_2, n/d_2$. So

$$
(f * g)(mn) = \sum_{d_1 \mid m} \sum_{d_2 \mid n} f(d_1)f(d_2)\, g\!\left(\frac{m}{d_1}\right) g\!\left(\frac{n}{d_2}\right) = (f * g)(m)\,(f * g)(n) .
$$

For the inverse $h$ of a multiplicative $f$, define $h'$ as the multiplicative function that agrees with $h$ on prime
powers. Then $f * h'$ is multiplicative by the first part, and on a prime power $p^a$ it only involves values at powers
of $p$, where $h' = h$, so $(f * h')(p^a) = (f * h)(p^a) = \varepsilon(p^a)$. Two multiplicative functions that agree on
prime powers are equal, so $f * h' = \varepsilon$, and by uniqueness of inverses $h = h'$. $\square$

This gives a second proof that $\tau = \mathbf{1} * \mathbf{1}$ and $\sigma = \mathrm{id} * \mathbf{1}$ are
multiplicative (the constant function and the identity function are even completely multiplicative), and it reduces
every identity between multiplicative functions to a check on prime powers.

**Worked example: a quick check on prime powers.** Claim: $\sum_{d \mid n} \mu(d)\tau(n/d) = 1$ for every $n$. The
left side is $\mu * \tau = \mu * \mathbf{1} * \mathbf{1} = \varepsilon * \mathbf{1} = \mathbf{1}$. Done, with no
computation. Or on prime powers: $\mu(1)\tau(p^a) + \mu(p)\tau(p^{a-1}) = (a + 1) - a = 1$.

**Worked example: the inverse of $\tau$.** Since $\tau = \mathbf{1} * \mathbf{1}$, its inverse is $\mu * \mu$. On prime
powers: $(\mu * \mu)(p) = 2\mu(p) = -2$, $(\mu * \mu)(p^2) = \mu(p)^2 = 1$, and $(\mu * \mu)(p^a) = 0$ for $a \ge 3$
(every term has a factor $\mu(p^j)$ with $j \ge 2$). For example $(\mu * \mu)(12) = (\mu*\mu)(4)(\mu*\mu)(3) = 1 \cdot
(-2) = -2$.

### Where this leads: Dirichlet series

For an arithmetic function $f$ its **Dirichlet series** is $F(s) = \sum_{n=1}^{\infty} f(n)/n^s$. Multiply two of
them, and collect the terms with $ab = n$:

$$
\Big(\sum_{a} \frac{f(a)}{a^s}\Big)\Big(\sum_{b} \frac{g(b)}{b^s}\Big) = \sum_{n} \frac{(f * g)(n)}{n^s} .
$$

Dirichlet convolution is just the multiplication of Dirichlet series, the way the ordinary convolution
$\sum_{a + b = n}$ is the multiplication of power series. The series of $\mathbf{1}$ is the Riemann zeta function
$\zeta(s) = \sum 1/n^s$, so $\mu * \mathbf{1} = \varepsilon$ says

$$
\sum_{n=1}^{\infty} \frac{\mu(n)}{n^s} = \frac{1}{\zeta(s)} \qquad (s > 1),
$$

and $\tau = \mathbf{1} * \mathbf{1}$ says $\sum \tau(n)/n^s = \zeta(s)^2$. For a multiplicative $f$ the series even
factors over primes into an **Euler product**, which is how $\zeta$ becomes a tool for studying primes. That is the
road of [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md) and
[Chapter 15](15-Primes-in-Progressions.md).

!!! tip "Try it in Python"
    ```python
    def divisors(n):
        return [d for d in range(1, n + 1) if n % d == 0]

    def conv(f, g):
        return lambda n: sum(f(d) * g(n // d) for d in divisors(n))

    def mu(n):
        k, p = 0, 2
        while p * p <= n:
            if n % p == 0:
                n //= p
                if n % p == 0:
                    return 0
                k += 1
            p += 1
        return (-1) ** (k + (n > 1))

    one = lambda n: 1
    ident = lambda n: n
    phi = conv(mu, ident)
    print([phi(n) for n in range(1, 13)])          # 1 1 2 2 4 2 6 4 6 4 10 4
    print([conv(mu, one)(n) for n in range(1, 13)])  # 1 then zeros
    ```

## Check yourself

??? question "1. Solve $x \equiv 1 \pmod 5$ and $x \equiv 3 \pmod 7$."

    One at a time: $x = 3 + 7t$, and $3 + 7t \equiv 1 \pmod 5$ gives $2t \equiv -2 \equiv 3$, so $t \equiv 4$ (since
    $2 \cdot 4 = 8 \equiv 3$). Then $x = 3 + 28 = 31$, unique mod 35. Check: $31 = 6 \cdot 5 + 1 = 4 \cdot 7 + 3$.

??? question "2. Find $\tau(720)$, $\sigma(720)$ and $\varphi(720)$."

    $720 = 2^4 \cdot 3^2 \cdot 5$. $\tau = 5 \cdot 3 \cdot 2 = 30$. $\sigma = 31 \cdot 13 \cdot 6 = 2418$.
    $\varphi = 8 \cdot 6 \cdot 4 = 192$.

??? question "3. Does $x \equiv 5 \pmod{12}$, $x \equiv 11 \pmod{18}$ have a solution? If so, find all."

    $\gcd(12, 18) = 6$ and $11 - 5 = 6$, so yes, unique mod $\operatorname{lcm} = 36$. The numbers $\equiv 5 \pmod{12}$
    below 36 are 5, 17, 29, which are 5, 17, 11 mod 18. So $x \equiv 29 \pmod{36}$.

??? question "4. What is the smallest positive integer with exactly 12 divisors? With exactly 10?"

    For 12 the candidates are $2^{11}$, $2^5 \cdot 3$, $2^3 \cdot 3^2$, $2^2 \cdot 3 \cdot 5$, giving 2048, 96, 72, 60;
    the answer is 60. For 10, from $10 = 10 = 5 \cdot 2$, the candidates are $2^9 = 512$ and $2^4 \cdot 3 = 48$; the
    answer is 48.

??? question "5. How many solutions does $x^2 \equiv 1 \pmod{105}$ have? Find one besides $\pm 1$."

    $105 = 3 \cdot 5 \cdot 7$, and mod each prime there are two solutions $\pm 1$, so $2^3 = 8$ solutions. For one
    with $x \equiv 1 \pmod 3$, $x \equiv 1 \pmod 5$, $x \equiv -1 \pmod 7$: the numbers $\equiv 1 \pmod{15}$ are 1, 16,
    31, 46, 61, 76, ..., which are 1, 2, 3, 4, 5, 6 mod 7. So $x = 76$: $76^2 = 5776 = 55 \cdot 105 + 1$.

??? question "6. Show that $2^{10}(2^{11} - 1)$ is not perfect, and say which half of the Euclid-Euler theorem explains why."

    $2^{11} - 1 = 2047 = 23 \cdot 89$ is not prime. By the converse half, every even perfect number is
    $2^{p-1}(2^p - 1)$ with $2^p - 1$ prime; the number $2^{10} \cdot 2047$ has this shape only with $p = 11$, which
    fails. Directly: $\sigma = \sigma(2^{10})\sigma(23)\sigma(89) = 2047 \cdot 24 \cdot 90 = 4\,421\,520$, while
    $2n = 4\,192\,256$; the number is abundant.

??? question "7. Prove that $\sigma(n)$ is odd if and only if $n$ is a square or twice a square. List those $n \le 50$."

    $\sigma(2^a)$ is always odd. For odd $p$, $\sigma(p^a)$ is a sum of $a + 1$ odd terms, so it is odd iff $a$ is even.
    So $\sigma(n)$ is odd iff every odd prime has an even exponent, i.e. $n = 2^a m^2$ with $m$ odd: a square if $a$ is
    even, twice a square if $a$ is odd. For $n \le 50$: 1, 2, 4, 8, 9, 16, 18, 25, 32, 36, 49, 50.

??? question "8. Show that $\sum_{d \mid n} |\mu(d)| = 2^{\omega(n)}$, where $\omega(n)$ is the number of distinct primes of $n$."

    $|\mu|$ is multiplicative, so $|\mu| * \mathbf{1}$ is multiplicative. On a prime power,
    $\sum_{d \mid p^a} |\mu(d)| = |\mu(1)| + |\mu(p)| = 2$. Multiplying over the $\omega(n)$ prime powers gives
    $2^{\omega(n)}$. In words: it counts the squarefree divisors, which are the subsets of the set of primes.

??? question "9. Find all $n$ with $\varphi(n) = 12$."

    If $p^a \| n$ then $p - 1$ divides 12, so $p \in \{2, 3, 5, 7, 13\}$. Checking combinations: $\varphi(13) = 12$,
    $\varphi(21) = 2 \cdot 6$, $\varphi(26) = 1 \cdot 12$, $\varphi(28) = 2 \cdot 6$, $\varphi(36) = 6 \cdot 2$,
    $\varphi(42) = 1 \cdot 2 \cdot 6$. The answer is $n = 13, 21, 26, 28, 36, 42$ (a computer search up to 200 confirms
    there are no others; for a proof, note $\varphi(n) \ge \sqrt{n/2}$, so $n \le 288$).

??? question "10. How many monic irreducible polynomials of degree 6 are there over $\mathbb{F}_3$?"

    $N_3(6) = \tfrac16\big(\mu(1)3^6 + \mu(2)3^3 + \mu(3)3^2 + \mu(6)3^1\big) = \tfrac16(729 - 27 - 9 + 3) = 696/6 = 116$.

??? question "11. Prove that if $f$ is multiplicative then $\sum_{d \mid n} \mu(d) f(d) = \prod_{p \mid n} (1 - f(p))$."

    The function $d \mapsto \mu(d)f(d)$ is multiplicative, so $(\mu f) * \mathbf{1}$ is multiplicative. On a prime power
    $p^a$ with $a \ge 1$, only $d = 1$ and $d = p$ contribute: $1 - f(p)$. Multiply over the primes of $n$. With
    $f(d) = 1/d$ this is $\varphi(n)/n = \prod (1 - 1/p)$.

??? question "12. A function $f$ satisfies $\sum_{d \mid n} f(d) = n^2$ for all $n$. Find $f(p^a)$ and $f(12)$."

    By inversion $f = \mu * \mathrm{id}^2$, which is multiplicative, with $f(p^a) = p^{2a} - p^{2a-2}$ for $a \ge 1$.
    So $f(12) = f(4)f(3) = (16 - 4)(9 - 1) = 96$. Check: $f(1) + f(2) + f(3) + f(4) + f(6) + f(12) = 1 + 3 + 8 + 12 + 24
    + 96 = 144 = 12^2$.

## What you learned

- The Chinese remainder theorem: congruences with pairwise coprime moduli have exactly one common solution mod the
  product, built from "switch" numbers $M_i y_i$ or absorbed one congruence at a time.
- With a common factor $g$, two congruences are solvable exactly when $g$ divides the difference of the targets.
- In ring language $\mathbb{Z}/mn \cong \mathbb{Z}/m \times \mathbb{Z}/n$ for coprime $m, n$, so questions mod $n$ split
  into questions mod prime powers.
- Multiplicative functions are fixed by their values on prime powers: $\tau(p^a) = a + 1$,
  $\sigma(p^a) = (p^{a+1} - 1)/(p - 1)$, $\varphi(p^a) = p^a - p^{a-1}$.
- Even perfect numbers are exactly $2^{p-1}(2^p - 1)$ with $2^p - 1$ a Mersenne prime; odd ones are unknown and would
  have Euler's form $p^a m^2$.
- The Möbius function inverts sums over divisors: $g = \sum_{d \mid n} f(d)$ if and only if
  $f = \sum_{d \mid n} \mu(d) g(n/d)$.
- Dirichlet convolution makes the arithmetic functions a commutative ring in which $\mu$ is the inverse of $\mathbf{1}$
  and the multiplicative functions form a group.

**Next:** [Chapter 7](07-Primitive-Roots.md), where the multiplicative group mod $p$ turns out to be cyclic, and powers
of one number reach every nonzero remainder.

## Further reading

- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th edition (revised by D. R. Heath-Brown
  and J. H. Silverman), 2008. Chapters 8 and 16 cover congruences, the CRT and arithmetic functions.
- I. Niven, H. S. Zuckerman and H. L. Montgomery, *An Introduction to the Theory of Numbers*, 5th edition, 1991.
  Section 2.3 for the CRT and Chapter 4 for arithmetic functions and Dirichlet convolution.
- T. M. Apostol, *Introduction to Analytic Number Theory*, 1976. Chapter 2 is the standard treatment of Dirichlet
  convolution, Möbius inversion and multiplicative functions.
- K. Ireland and M. Rosen, *A Classical Introduction to Modern Number Theory*, 2nd edition, 1990. Chapter 2 (unique
  factorization and arithmetic functions) and Chapter 3 (congruences, the CRT).
- P. Ochem and M. Rao, "Odd perfect numbers are greater than $10^{1500}$", *Mathematics of Computation* 81, 2012.
- On this site: [The Chinese remainder theorem](../../topics/number-theory/level-6/05-chinese-remainder.md),
  [Counting factors](../../topics/number-theory/level-3/06-counting-factors.md),
  [Perfect numbers](../../topics/number-theory/level-4/06-perfect-numbers.md),
  [Euler's phi function](../../topics/number-theory/level-7/03-euler-phi.md),
  [Algebra, Chapter 17: Rings and ideals](../algebra/17-Rings-and-Ideals.md),
  [Algebra, Chapter 19: Fields and extensions](../algebra/19-Fields-and-Extensions.md).
- The CRT at work in RSA: [cryptography.akadian.ca/book, chapter 3](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/)
  and [chapter 13](https://cryptography.akadian.ca/book/13-RSA/).
