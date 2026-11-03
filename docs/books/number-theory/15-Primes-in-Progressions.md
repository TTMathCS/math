# 15. Primes in progressions

*Look at the last digits of primes past 5: they end in 1, 3, 7 or 9, never in 0, 2, 4, 5, 6 or 8. Are there infinitely
many primes ending in 7? In each of the four digits, equally often? More generally, if $a$ and $n$ share no factor,
does the progression $a, a+n, a+2n, \ldots$ contain infinitely many primes? Euclid's trick answers a few cases but not
all. In 1837 Peter Gustav Lejeune Dirichlet answered every case at once, and in doing so invented characters and
$L$-functions, two of the central tools of modern number theory. In this chapter you prove the special cases by hand,
build the characters and prove their orthogonality, meet the $L$-functions, follow Dirichlet's proof to its hard heart
(that $L(1, \chi) \ne 0$) and prove that too, and end with the Green-Tao theorem on progressions made entirely of primes.*

!!! abstract "In this chapter"
    **You will learn:**

    - the statement of Dirichlet's theorem, and Euclid-style proofs for the progressions $4k+1$, $4k+3$ and $nk+1$
    - what a Dirichlet character is, how to list all of them mod $n$, and why they are orthogonal
    - Dirichlet $L$-functions, their Euler products, and values such as $L(1,\chi) = \pi/4$
    - the whole structure of Dirichlet's proof, including a complete proof that $L(1,\chi) \ne 0$
    - Chebyshev's bias: why primes $\equiv 3 \pmod 4$ usually lead the race
    - the Green-Tao theorem and the longest known progressions of primes

    **You need:** [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md) (the zeta function, the Euler
    product and how $\sum p^{-s}$ behaves as $s \to 1$), [Chapter 7](07-Primitive-Roots.md) (orders and primitive roots),
    [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md) (the Legendre symbol) and
    [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md) (the Chinese remainder theorem). For
    the group theory: [Algebra, Chapter 13](../algebra/13-Groups.md) and, for characters of general groups,
    [Algebra, Chapter 21](../algebra/21-Modules-and-Representations.md).

    **Levels:** 15.1 is intermediate; 15.2 and 15.3 are advanced; 15.4 is expert; 15.5 is a statement with its story.

## 15.1 Dirichlet's theorem

Which arithmetic progressions $a, a + n, a + 2n, \ldots$ can contain infinitely many primes? If $d = \gcd(a, n) > 1$,
every term is divisible by $d$, so at most one term (the number $d$ itself, if it is prime and in the list) can be prime.
For example $6k + 3$ gives $3, 9, 15, 21, \ldots$, all multiples of 3, and only 3 is prime. So the only progressions with a
chance are those with $\gcd(a, n) = 1$. Dirichlet proved they all succeed.

**Theorem 15.1 (Dirichlet, 1837).** If $\gcd(a, n) = 1$, there are infinitely many primes $p \equiv a \pmod n$. In fact
$\sum_{p \equiv a \ (n)} \frac{1}{p}$ diverges.

The stronger form, proved by de la Vallée Poussin in 1896 alongside the prime number theorem, says the primes are
**evenly spread** over the $\varphi(n)$ allowed classes:

$$
\pi(x; n, a) = \#\{p \le x : p \equiv a \!\!\pmod n\} \sim \frac{1}{\varphi(n)}\cdot\frac{x}{\log x} .
$$

Here $\varphi(n)$ is Euler's function from [Chapter 5](05-Fermat-Euler-and-Wilson.md), the number of classes mod $n$
coprime to $n$. Check with last digits: among the primes from 7 to $10^6$, those ending in 1, 3, 7, 9 number
$19{,}617$, $19{,}664$, $19{,}621$ and $19{,}593$. Very nearly a quarter each.

### Euclid-style proofs for special progressions

Before the general machine, see how far Euclid's idea goes.

**Primes $\equiv 3 \pmod 4$.** [Chapter 2](02-Primes-and-Unique-Factorization.md) proved this: given primes
$p_1, \ldots, p_k \equiv 3 \pmod 4$, the number $N = 4p_1\cdots p_k - 1$ is $\equiv 3 \pmod 4$, so it has a prime factor
$\equiv 3 \pmod 4$ (a product of numbers $\equiv 1$ is $\equiv 1$), and that factor is none of the $p_i$.

**Primes $\equiv 1 \pmod 4$.** Given $p_1, \ldots, p_k \equiv 1 \pmod 4$, let $N = (2p_1 \cdots p_k)^2 + 1$. Let $q$ be any
prime factor of $N$. Then $q$ is odd (as $N$ is odd) and not any $p_i$. And $(2p_1\cdots p_k)^2 \equiv -1 \pmod q$, so $-1$
is a square mod $q$, which by [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md) happens only when $q \equiv 1 \pmod 4$.
A new prime $\equiv 1 \pmod 4$.

**Primes $\equiv 1 \pmod n$, for every $n$.** This needs the **cyclotomic polynomial** $\Phi_n(x)$, the monic polynomial
whose roots are the primitive $n$th roots of unity. It has integer coefficients, degree $\varphi(n)$, and
$x^n - 1 = \prod_{d \mid n}\Phi_d(x)$ ([Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md)). For instance
$\Phi_4(x) = x^2 + 1$ and $\Phi_5(x) = x^4 + x^3 + x^2 + x + 1$.

**Lemma 15.2.** If a prime $p$ divides $\Phi_n(m)$ for some whole number $m$, and $p \nmid n$, then $p \equiv 1 \pmod n$.

*Proof.* Since $\Phi_n(x)$ divides $x^n - 1$, we get $m^n \equiv 1 \pmod p$; so $p \nmid m$, and the order of $m$ mod $p$
([Chapter 7](07-Primitive-Roots.md)) is some divisor $d$ of $n$. Suppose $d < n$. Then $m$ is a root mod $p$ of
$x^d - 1 = \prod_{e \mid d}\Phi_e(x)$, which is a factor of $x^n - 1$ that does not include $\Phi_n$. So $m$ is a root
mod $p$ both of $\Phi_n$ and of another factor of $x^n - 1$: a repeated root of $x^n - 1$ mod $p$. A repeated root is
also a root of the derivative $nx^{n-1}$; but $n m^{n-1} \not\equiv 0 \pmod p$ because $p \nmid n$ and $p \nmid m$.
Contradiction. So the order is exactly $n$, and since the order divides $p - 1$ (Fermat), $n \mid p - 1$. $\blacksquare$

*Infinitely many.* Given finitely many primes $p_1, \ldots, p_k$, let $Q = n p_1\cdots p_k$ and look at $\Phi_n(tQ)$ for
a large whole number $t$. Its constant term is $\Phi_n(0) = \pm 1$, so $\Phi_n(tQ) \equiv \pm 1 \pmod q$ for every prime
$q \mid Q$. Once $t$ is large, $|\Phi_n(tQ)| > 1$, so it has a prime factor $p$, which divides neither $n$ nor any $p_i$.
By the lemma $p \equiv 1 \pmod n$, and it is new. $\blacksquare$

Check: $\Phi_5(10) = 11111 = 41 \times 271$, and $41 = 8\cdot 5 + 1$, $271 = 54 \cdot 5 + 1$. Also
$\Phi_{12}(x) = x^4 - x^2 + 1$ and $\Phi_{12}(12) = 20593$, a prime, and $20593 = 1716 \cdot 12 + 1$.

How far can this go? M. Ram Murty showed in 1988 that, for a precise meaning of "Euclid-style proof" (a polynomial whose
prime divisors fall mostly in the right class), such a proof exists for the progression $a \pmod n$ exactly when
$a^2 \equiv 1 \pmod n$. So primes $\equiv 2 \pmod 5$, for instance, are out of reach of Euclid's trick. Something
genuinely new is needed.

### Dirichlet's idea, in one line

Euler proved infinitely many primes by showing $\sum_p p^{-s} \to \infty$ as $s \to 1^{+}$ (Chapter 14). Dirichlet wanted
the same for $\sum_{p \equiv a} p^{-s}$. The trouble is that "$p \equiv a \pmod n$" is not multiplicative, so there is no Euler
product for it. His solution: write the **indicator** of the class $a$ (the function that is 1 on numbers $\equiv a$ and 0
elsewhere) as a combination of functions that *are* multiplicative. Those functions are the characters.

### Chebyshev's bias

"Evenly spread" is a statement about limits, and it hides a surprise. In 1853 Chebyshev noticed that primes
$\equiv 3 \pmod 4$ seem always to be ahead of primes $\equiv 1 \pmod 4$. Up to 50 there are 8 of the first kind
($3, 7, 11, 19, 23, 31, 43, 47$) and 6 of the second ($5, 13, 17, 29, 37, 41$); up to $10^6$ the counts are $39{,}322$
and $39{,}175$. The lead first changes hands at $x = 26861$, found by John Leech in 1957, and changes infinitely often
(Littlewood, 1914), but the $3 \bmod 4$ team is ahead most of the time. For the race mod 3, primes $\equiv 2$ lead
primes $\equiv 1$ until $608{,}981{,}813{,}029$ (Bays and Hudson, 1978).

Michael Rubinstein and Peter Sarnak explained this in 1994. Assuming the generalized Riemann hypothesis and that the
zeros of the relevant $L$-functions satisfy no linear relations, they proved that the set of $x$ where the
$3 \bmod 4$ team leads has logarithmic density about $0.9959$. The reason is that non-residues (like 3 mod 4) get an
extra push from the squares of primes, which all fall in the residue class 1.

## 15.2 Characters mod $n$

*Level: advanced.*

### Definition and first examples

**Definition.** A **Dirichlet character mod $n$** is a function $\chi$ from the integers to the complex numbers such that

1. $\chi(m + n) = \chi(m)$ for all $m$ (it repeats with period $n$);
2. $\chi(m_1 m_2) = \chi(m_1)\chi(m_2)$ for all $m_1, m_2$ (it is **completely multiplicative**);
3. $\chi(m) \ne 0$ exactly when $\gcd(m, n) = 1$.

Equivalently, $\chi$ is a group homomorphism from the group of units $(\mathbb{Z}/n\mathbb{Z})^\times$ to the nonzero
complex numbers under multiplication, extended by 0 on the numbers not coprime to $n$. Since $m^{\varphi(n)} \equiv 1$
(Euler's theorem), $\chi(m)^{\varphi(n)} = 1$: **every value of a character is 0 or a root of unity.**

The **principal character** $\chi_0$ is 1 on everything coprime to $n$ and 0 elsewhere. A character whose values are all
real (so $0$ or $\pm 1$) is **real**; otherwise it is **complex**.

*Mod 4.* The units are 1 and 3. Since $3^2 \equiv 1$, $\chi(3)^2 = 1$, so $\chi(3) = \pm 1$. Two characters: $\chi_0$ and

$$
\chi_{-4}(m) = \begin{cases} 1 & m \equiv 1 \pmod 4, \\ -1 & m \equiv 3 \pmod 4, \\ 0 & m \text{ even}. \end{cases}
$$

*Mod 3.* Similarly $\chi_0$ and $\chi_{-3}$, with $\chi_{-3}(1) = 1$, $\chi_{-3}(2) = -1$. This one is the Legendre symbol
$\left(\frac{m}{3}\right)$.

*Mod 5.* The units $1, 2, 3, 4$ form a cyclic group generated by 2: $2^0 = 1$, $2^1 = 2$, $2^2 = 4$, $2^3 = 8 \equiv 3$. A
character is fixed by its value at the generator, which must satisfy $\chi(2)^4 = 1$, so $\chi(2) \in \{1, i, -1, -i\}$.
Each choice works. Writing $\chi_j(2^k) = i^{jk}$:

| $m$ | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| $\chi_0$ | 1 | 1 | 1 | 1 |
| $\chi_1$ | 1 | $i$ | $-i$ | $-1$ |
| $\chi_2$ | 1 | $-1$ | $-1$ | 1 |
| $\chi_3$ | 1 | $-i$ | $i$ | $-1$ |

($m = 3 = 2^3$ gives $\chi_1(3) = i^3 = -i$; $m = 4 = 2^2$ gives $\chi_1(4) = i^2 = -1$.) Here $\chi_2$ is the Legendre
symbol mod 5, and $\chi_1$, $\chi_3$ are complex and conjugate to each other.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 230" role="img" aria-label="The unit circle with the four values of the character chi one mod 5: chi of 1 equals 1 on the right, chi of 2 equals i at the top, chi of 4 equals minus 1 on the left, chi of 3 equals minus i at the bottom. Arrows show that multiplying by 2 mod 5 turns a quarter turn.">
  <circle cx="160" cy="115" r="75" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="115" x2="250" y2="115" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <line x1="160" y1="25" x2="160" y2="205" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <g fill="#eea66f">
    <circle cx="235" cy="115" r="6"/><circle cx="160" cy="40" r="6"/><circle cx="85" cy="115" r="6"/><circle cx="160" cy="190" r="6"/>
  </g>
  <g fill="none" stroke="#7ccf9a" stroke-width="2">
    <path d="M 222 75 Q 205 52 182 44"/>
    <path d="M 138 44 Q 115 52 98 75"/>
    <path d="M 98 155 Q 115 178 138 186"/>
  </g>
  <g fill="#7ccf9a">
    <polygon points="182,44 192,40 189,50"/>
    <polygon points="98,75 96,64 104,70"/>
    <polygon points="138,186 128,190 131,180"/>
  </g>
  <g fill="currentColor" font-size="12" font-family="sans-serif">
    <text x="246" y="119">χ(1) = 1</text>
    <text x="160" y="22" text-anchor="middle">χ(2) = i</text>
    <text x="74" y="119" text-anchor="end">χ(4) = −1</text>
    <text x="160" y="222" text-anchor="middle">χ(3) = −i</text>
    <text x="205" y="58">×2</text>
    <text x="100" y="58" text-anchor="end">×2</text>
    <text x="100" y="182" text-anchor="end">×2</text>
  </g>
</svg>
</div>

*The character $\chi_1$ mod 5. Multiplying by the generator 2 mod 5 ($1 \to 2 \to 4 \to 3$) turns the value a quarter
turn around the unit circle.*

*Mod 8.* The units $1, 3, 5, 7$ all square to 1, so every value is $\pm 1$ and the group is not cyclic. There are four
characters:

| $m$ | 1 | 3 | 5 | 7 |
| --- | --- | --- | --- | --- |
| $\chi_0$ | 1 | 1 | 1 | 1 |
| $\chi_{-4}$ | 1 | $-1$ | 1 | $-1$ |
| $\chi_8$ | 1 | $-1$ | $-1$ | 1 |
| $\chi_{-8}$ | 1 | 1 | $-1$ | $-1$ |

Here $\chi_{-4}(m) = (-1)^{(m-1)/2}$, $\chi_8(m) = (-1)^{(m^2-1)/8}$ and $\chi_{-8} = \chi_{-4}\chi_8$. You met two of
them in Chapter 8: for an odd prime $p$, the supplements say $\left(\frac{-1}{p}\right) = \chi_{-4}(p)$ and
$\left(\frac{2}{p}\right) = \chi_8(p)$.

### How many characters, and the group they form

The product of two characters mod $n$ is a character mod $n$, the conjugate $\bar\chi$ (complex conjugate values) is
the inverse of $\chi$ since $|\chi(m)| = 1$ on units, and $\chi_0$ is the identity. So the characters mod $n$ form a group.

**Theorem 15.3.** There are exactly $\varphi(n)$ characters mod $n$. Moreover, for every unit $a \not\equiv 1 \pmod n$
there is a character with $\chi(a) \ne 1$.

*Proof.* First a cyclic group $C$ of order $m$ with generator $g$. A homomorphism to $\mathbb{C}^\times$ is fixed by
$\chi(g)$, which must be an $m$th root of unity, and each of the $m$ choices $\chi_j(g^k) = e^{2\pi i jk/m}$ works. So
there are $m$ characters. If $g^k \ne 1$, that is $m \nmid k$, then $\chi_1(g^k) = e^{2\pi i k/m} \ne 1$.

Next a product $G = C_1 \times \cdots \times C_r$ of cyclic groups. Characters of the factors multiply to characters of
$G$, namely $\chi(c_1, \ldots, c_r) = \chi^{(1)}(c_1)\cdots\chi^{(r)}(c_r)$, and every character of $G$ arises this way
from its restrictions to the factors. So the number of characters is $|C_1|\cdots|C_r| = |G|$. If an element
$(c_1, \ldots, c_r)$ is not the identity, some $c_j \ne 1$; use a character of $C_j$ that is not 1 at $c_j$, and the
principal character on the other factors.

Finally, $(\mathbb{Z}/n\mathbb{Z})^\times$ is such a product. By the Chinese remainder theorem it is the product of the groups
$(\mathbb{Z}/p^k\mathbb{Z})^\times$ over the prime powers $p^k$ exactly dividing $n$. For odd $p$ these are cyclic (primitive
roots exist, [Chapter 7](07-Primitive-Roots.md)); $(\mathbb{Z}/2\mathbb{Z})^\times$ and $(\mathbb{Z}/4\mathbb{Z})^\times$ are
cyclic; and for $k \ge 3$, $(\mathbb{Z}/2^k\mathbb{Z})^\times = \{\pm 1\} \times \langle 5 \rangle$, a product of two cyclic
groups of orders 2 and $2^{k-2}$. (For every finite abelian group this is the structure theorem of
[Algebra, Chapter 21](../algebra/21-Modules-and-Representations.md).) $\blacksquare$

### Orthogonality

**Theorem 15.4 (orthogonality relations).** Let $\chi$ be a character mod $n$ and $a$ a whole number. Then

$$
\sum_{m \bmod n} \chi(m) = \begin{cases} \varphi(n) & \chi = \chi_0, \\ 0 & \chi \ne \chi_0, \end{cases}
\qquad\qquad
\sum_{\chi \bmod n} \chi(a) = \begin{cases} \varphi(n) & a \equiv 1 \pmod n, \\ 0 & \text{otherwise}. \end{cases}
$$

The first sum is over a full set of residues $m$ mod $n$; the second over all $\varphi(n)$ characters.

*Proof of the first.* For $\chi_0$ each of the $\varphi(n)$ units contributes 1. If $\chi \ne \chi_0$, pick a unit $b$ with
$\chi(b) \ne 1$. As $m$ runs over the units mod $n$, so does $bm$ (multiplying by a unit permutes the units). Hence

$$
S = \sum_m \chi(m) = \sum_m \chi(bm) = \chi(b) \sum_m \chi(m) = \chi(b) S ,
$$

so $(1 - \chi(b))S = 0$ and $S = 0$. (Non-units contribute 0 throughout.)

*Proof of the second.* If $\gcd(a, n) > 1$, every term is 0. If $a \equiv 1$, every term is 1. Otherwise, by
Theorem 15.3 there is a character $\psi$ with $\psi(a) \ne 1$. As $\chi$ runs over the group of characters, so does
$\psi\chi$, so $T = \sum_\chi \chi(a) = \sum_\chi (\psi\chi)(a) = \psi(a) T$, and $T = 0$. $\blacksquare$

Check against the mod 5 table: the row of $\chi_1$ sums to $1 + i - i - 1 = 0$; the column of $m = 2$ sums to
$1 + i - 1 - i = 0$; the column of $m = 1$ sums to $4 = \varphi(5)$.

### The indicator of a class

Here is the formula Dirichlet needed. Let $\gcd(a, n) = 1$ and let $\bar a$ be an inverse of $a$ mod $n$. For any $m$,
$\bar\chi(a)\chi(m) = \chi(\bar a m)$ (because $\bar\chi(a) = \chi(a)^{-1} = \chi(\bar a)$), and $\bar a m \equiv 1$
exactly when $m \equiv a$. So the second orthogonality relation gives

$$
\frac{1}{\varphi(n)} \sum_{\chi} \bar\chi(a)\,\chi(m) = \begin{cases} 1 & m \equiv a \pmod n, \\ 0 & \text{otherwise}. \end{cases}
$$

The indicator of the class $a$, which is not multiplicative, is an average of characters, which are. This is the
finite-group version of a Fourier series, and the characters are the "pure frequencies" of the group
$(\mathbb{Z}/n\mathbb{Z})^\times$.

*Worked example.* Mod 4: $\frac12(\chi_0(m) + \chi_{-4}(m))$ is 1 for $m \equiv 1$ and 0 for $m \equiv 3$, while
$\frac12(\chi_0(m) - \chi_{-4}(m))$ picks out $m \equiv 3$. (Here $\bar\chi_{-4}(3) = -1$.)

### Primitive characters

If $d \mid n$, a character mod $d$ gives a character mod $n$ by setting it to 0 on numbers sharing a factor with $n$. A
character mod $n$ that does not arise this way from any smaller modulus is **primitive**, and the smallest $d$ from which
$\chi$ comes is its **conductor**. For example the principal character mod 12 comes from the trivial character mod 1,
and the character mod 12 that is $\chi_{-4}$ on units comes from mod 4. Primitive characters are the ones with the
cleanest $L$-functions, below.

## 15.3 $L$-functions

*Level: advanced.*

**Definition.** For a character $\chi$ mod $n$, the **Dirichlet $L$-function** is

$$
L(s, \chi) = \sum_{m=1}^\infty \frac{\chi(m)}{m^s} \qquad (\operatorname{Re} s > 1).
$$

Since $|\chi(m)| \le 1$, the series converges absolutely for $\operatorname{Re} s > 1$, like $\zeta$.

**Euler product.** Because $\chi$ is completely multiplicative, the proof of Theorem 14.1 goes through word for word, with
$\frac{1}{1 - \chi(p)p^{-s}} = \sum_k \chi(p)^k p^{-ks} = \sum_k \chi(p^k)p^{-ks}$:

$$
L(s, \chi) = \prod_p \frac{1}{1 - \chi(p)p^{-s}} \qquad (\operatorname{Re} s > 1).
$$

**The principal character** gives almost $\zeta$: removing the primes dividing $n$,

$$
L(s, \chi_0) = \zeta(s)\prod_{p \mid n}\left(1 - p^{-s}\right),
$$

so $L(s, \chi_0)$ has a simple pole at $s = 1$, like $\zeta$.

**The others converge further left.** If $\chi \ne \chi_0$, the first orthogonality relation says $\chi$ sums to 0 over any
block of $n$ consecutive integers, so the partial sums $A(x) = \sum_{m \le x}\chi(m)$ are bounded: $|A(x)| \le \varphi(n)$.
A series $\sum c_m m^{-s}$ with bounded partial sums of the $c_m$ converges for every real $s > 0$ (this is Dirichlet's
test, proved by summation by parts: $\sum_{m=M}^{N} \chi(m)m^{-s} = \sum A(m)(m^{-s} - (m+1)^{-s})$ plus boundary terms, and
$\sum (m^{-s} - (m+1)^{-s})$ telescopes). Indeed for complex $s$ with $\operatorname{Re} s > 0$ it converges to an analytic
function. So **for $\chi \ne \chi_0$, $L(s,\chi)$ is analytic on $\operatorname{Re} s > 0$ and $L(1, \chi)$ is a
finite number.** The same argument gives, for $s = 1$, the tail estimate

$$
\left|\sum_{m > z} \frac{\chi(m)}{m}\right| \le \frac{2\varphi(n)}{z},
$$

which we will use in 15.4, and similarly $\left|\sum_{m > z}\chi(m)/\sqrt m\right| \le 2\varphi(n)/\sqrt z$.

### Two values

**$L(1, \chi_{-4}) = \pi/4$.** This is the Leibniz series $1 - \frac13 + \frac15 - \frac17 + \cdots$, found by Madhava of
Sangamagrama in fourteenth-century Kerala and rediscovered by Gregory and Leibniz in the 1670s. Proof: for $0 \le x < 1$,
$\frac{1}{1+x^2} = 1 - x^2 + x^4 - \cdots \pm x^{2N} \mp \frac{x^{2N+2}}{1+x^2}$. Integrate from 0 to 1:

$$
\frac{\pi}{4} = \arctan 1 = 1 - \frac13 + \frac15 - \cdots \pm \frac{1}{2N+1} \mp \int_0^1 \frac{x^{2N+2}}{1+x^2}\,dx ,
$$

and the last integral is at most $\int_0^1 x^{2N+2}\,dx = \frac{1}{2N+3} \to 0$.

**$L(1, \chi_{-3}) = \pi/(3\sqrt3)$.** The series is $1 - \frac12 + \frac14 - \frac15 + \frac17 - \cdots$. In the same way,
$\sum_{k \ge 0}(x^{3k} - x^{3k+1}) = \frac{1-x}{1-x^3} = \frac{1}{1 + x + x^2}$, and integrating term by term (justified as
above by keeping a remainder),

$$
L(1,\chi_{-3}) = \int_0^1 \frac{dx}{x^2 + x + 1} = \frac{2}{\sqrt3}\left[\arctan\frac{2x+1}{\sqrt3}\right]_0^1 = \frac{2}{\sqrt3}\left(\frac\pi3 - \frac\pi6\right) = \frac{\pi}{3\sqrt3} = 0.6046\ldots
$$

Both values are positive. That is not an accident, and proving it in general is the heart of Dirichlet's theorem.
In [Chapter 17](17-Algebraic-Number-Theory.md) you will see that $L(1, \chi)$ for real $\chi$ equals a class number times
simple factors, which is how Dirichlet himself proved it nonzero.

### Beyond $\operatorname{Re} s > 0$

For a primitive character $\chi$ mod $n$, $L(s, \chi)$ extends to an entire function (no pole at all) and satisfies a
functional equation relating $L(s, \chi)$ to $L(1-s, \bar\chi)$, proved in the same way as for $\zeta$ but with a twisted
theta function. Its nontrivial zeros lie in the strip $0 \le \operatorname{Re} s \le 1$. The **generalized Riemann
hypothesis** (GRH) asserts that they all have real part $\frac12$. Under GRH the error in the count of primes in each
class is $O(\sqrt x \log(nx))$, just as RH controls $\pi(x)$.

Two results come close to GRH in practice. The **Siegel-Walfisz theorem** gives the even spread of primes in classes
mod $n$ uniformly for $n$ up to any power of $\log x$ (with an ineffective constant, see 15.4). The
**Bombieri-Vinogradov theorem** (1965) says the even spread holds, with the quality GRH would give, *on average* over
moduli $n$ up to about $\sqrt x$. It was a key input in Yitang Zhang's 2013 work on bounded prime gaps (Chapter 13).

## 15.4 The proof: why $L(1, \chi) \ne 0$

*Level: expert.*

Fix $n$ and a class $a$ with $\gcd(a, n) = 1$. Throughout, $s$ is real and $s > 1$, tending to 1.

### Step 1: logarithms of $L$-functions

From the Euler product, a logarithm of $L(s, \chi)$ is

$$
\log L(s, \chi) = \sum_p \sum_{k \ge 1} \frac{\chi(p)^k}{k\,p^{ks}} = \sum_p \frac{\chi(p)}{p^s} + R(s, \chi),
$$

where $|R(s,\chi)| \le \sum_p\sum_{k \ge 2}\frac{1}{p^{k}} = \sum_p \frac{1}{p(p-1)} < 1$. (The series on the left is an
honest logarithm: its exponential is the Euler product.)

### Step 2: pick out the class with orthogonality

Multiply by $\bar\chi(a)$, sum over all characters, and use the indicator formula of 15.2:

$$
\sum_\chi \bar\chi(a)\log L(s,\chi) = \varphi(n)\sum_{p \equiv a \ (n)} \frac{1}{p^s} + R(s),
\qquad |R(s)| < \varphi(n).
$$

### Step 3: the principal character drives everything

For $\chi_0$, $\log L(s, \chi_0) = \log\zeta(s) + \sum_{p \mid n}\log(1 - p^{-s})$, and $\log\zeta(s) \ge \log\frac{1}{s-1}$,
which tends to infinity as $s \to 1^{+}$ (Chapter 14).

### Step 4: if no other $L$-function vanishes at 1, we are done

Suppose $L(1, \chi) \ne 0$ for every $\chi \ne \chi_0$. Each such $L(s,\chi)$ is continuous at $s = 1$ and nonzero there,
so $\log L(s, \chi)$ stays bounded as $s \to 1^{+}$. In Step 2 the left side is then
$\log\frac{1}{s-1}$ plus a bounded amount, so

$$
\sum_{p \equiv a \ (n)} \frac{1}{p^s} = \frac{1}{\varphi(n)}\log\frac{1}{s-1} + O(1) \longrightarrow \infty .
$$

If there were finitely many primes $p \equiv a$, the left side would stay bounded. So there are infinitely many, and
$\sum_{p \equiv a}1/p$ diverges. Notice that the main term does not depend on $a$: each class gets the same share
$1/\varphi(n)$, a first sign of the even spread. Check numerically: up to $10^6$, $\sum 1/p$ over $p \equiv 1 \pmod 4$ is
$1.026$ and over $p \equiv 3 \pmod 4$ is $1.361$. Both grow (very slowly, like $\frac12\log\log x$); the difference
stays bounded, mostly because $\frac13$ belongs to the second sum.

Everything now rests on one statement.

**Theorem 15.5.** For every character $\chi \ne \chi_0$ mod $n$, $L(1, \chi) \ne 0$.

There are two cases, and they need different ideas.

### Step 5: complex characters

**Lemma 15.6.** For real $s > 1$, $\prod_\chi L(s,\chi) \ge 1$ (the product over all characters mod $n$).

*Proof.* Sum the logarithms from Step 1 over all $\chi$ and use the second orthogonality relation with $a = 1$:

$$
\sum_\chi \log L(s,\chi) = \sum_p\sum_k \frac{1}{k\,p^{ks}}\sum_\chi \chi(p^k) = \varphi(n)\sum_{p^k \equiv 1 \ (n)} \frac{1}{k\,p^{ks}} \ge 0 .
$$

Exponentiate. $\blacksquare$

Now let $\chi$ be complex, so $\chi \ne \bar\chi$, and suppose $L(1, \chi) = 0$. Then also
$L(1, \bar\chi) = \overline{L(1, \chi)} = 0$ (conjugate the series). In the product of Lemma 15.6, as $s \to 1^{+}$:

- $L(s, \chi_0)$ has a simple pole: $|L(s,\chi_0)| \le \frac{C_0}{s-1}$;
- $L(s,\chi)$ and $L(s, \bar\chi)$ are differentiable at 1 and vanish there: each is at most $C_1(s-1)$;
- every other factor is bounded.

So the product is at most $C(s-1) \to 0$, contradicting "$\ge 1$". So $L(1, \chi) \ne 0$ for complex $\chi$. $\blacksquare$

(This is the same "zeros beat the pole" contest as the $3$-$4$-$1$ proof of Theorem 14.4. For a *real* $\chi$ it fails: then
$\chi = \bar\chi$, only one factor would vanish, and one zero against one pole gives no contradiction.)

### Step 6: real characters

Let $\chi \ne \chi_0$ be real, so its values are $0, \pm 1$. Define

$$
r(m) = \sum_{d \mid m} \chi(d) .
$$

**Lemma 15.7.** $r(m) \ge 0$ for all $m$, and $r(k^2) \ge 1$ for all $k$.

*Proof.* $r$ is multiplicative (it is the Dirichlet convolution $1 * \chi$ of two multiplicative functions,
[Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)), so look at a prime power:
$r(p^e) = 1 + \chi(p) + \chi(p)^2 + \cdots + \chi(p)^e$. If $\chi(p) = 1$ this is $e + 1$; if $\chi(p) = 0$ it is 1; if
$\chi(p) = -1$ it is $1 - 1 + 1 - \cdots$, which is 1 for even $e$ and 0 for odd $e$. All are $\ge 0$, and all are
$\ge 1$ when $e$ is even. A square has only even exponents. $\blacksquare$

(For $\chi = \chi_{-4}$, $r(m)$ is a quarter of the number of ways to write $m = x^2 + y^2$ with integers $x, y$, which is
how sums of two squares, [Chapter 11](11-Sums-of-Squares.md), connect to $L$-functions. Check: $25 = (\pm3)^2 + (\pm4)^2 = (\pm 4)^2 + (\pm 3)^2 = (\pm 5)^2 + 0^2 = 0^2 + (\pm5)^2$ in 12 ways, and $r(25) = 1 + 1 + 1 = 3$.)

Now consider

$$
G(x) = \sum_{m \le x} \frac{r(m)}{\sqrt m} .
$$

**Lower bound.** Drop every term except the squares: $G(x) \ge \sum_{k \le \sqrt x} \frac{1}{k} \ge \log\sqrt x = \frac12\log x$.
So $G(x) \to \infty$.

**Upper bound.** Write $m = de$, so $G(x) = \sum_{de \le x}\frac{\chi(d)}{\sqrt{d}\sqrt{e}}$, a sum over lattice points under
the hyperbola $de = x$. Let $y = \sqrt x$ and split the points into those with $d \le y$ and those with $d > y$ (which then
have $e < y$). This is Dirichlet's **hyperbola method**:

$$
G(x) = \sum_{d \le y}\frac{\chi(d)}{\sqrt d}\sum_{e \le x/d}\frac{1}{\sqrt e} \;+\; \sum_{e < y}\frac{1}{\sqrt e}\sum_{y < d \le x/e}\frac{\chi(d)}{\sqrt d} .
$$

Two simple estimates finish it. First, comparing with $\int dt/\sqrt t$, $\sum_{e \le z}\frac{1}{\sqrt e} = 2\sqrt z + c + O(1/\sqrt z)$
for a constant $c$. Second, from 15.3, $\sum_{d > z}\chi(d)/\sqrt d = O(1/\sqrt z)$ and $\sum_{d > z}\chi(d)/d = O(1/z)$.

- The first double sum is $\sum_{d \le y}\frac{\chi(d)}{\sqrt d}\left(2\sqrt{x/d} + c + O(\sqrt{d/x})\right)
  = 2\sqrt x\sum_{d \le y}\frac{\chi(d)}{d} + c\sum_{d \le y}\frac{\chi(d)}{\sqrt d} + O\!\left(\frac{y}{\sqrt x}\right)$.
  The first piece is $2\sqrt x\,(L(1,\chi) + O(1/y)) = 2\sqrt x\,L(1,\chi) + O(1)$; the second is $O(1)$ (bounded
  partial sums); the third is $O(1)$ as $y = \sqrt x$.
- In the second double sum the inner sum is $O(1/\sqrt y)$, so the whole is $O\!\left(\frac{1}{\sqrt y}\sum_{e < y}\frac{1}{\sqrt e}\right) = O(1)$.

So $G(x) = 2\sqrt x\,L(1,\chi) + O(1)$. If $L(1, \chi)$ were 0, $G(x)$ would be bounded, contradicting $G(x) \ge \frac12\log x$.
Hence $L(1, \chi) \ne 0$. $\blacksquare$

Check the formula numerically for $\chi_{-4}$, where $L(1,\chi) = \pi/4$: at $x = 10^4$, $G(x) = 156.107$ while
$2\sqrt x\,\pi/4 = 157.080$; at $x = 10^5$, $G(x) = 495.784$ against $496.729$. The difference stays near $-1$, bounded,
exactly as proved.

With Steps 5 and 6, Theorem 15.5 is proved, and with it Dirichlet's theorem. $\blacksquare$

### The shadow of real characters: Siegel zeros

The real-character case is the delicate one in every refinement. Proving $L(1, \chi) \ne 0$ is one thing; proving it is
not *tiny* is another. A real zero $\beta$ of $L(s, \chi)$ very close to 1 (a hypothetical **Siegel zero**, also called a
Landau-Siegel zero) would make $L(1, \chi)$ tiny and would distort the distribution of primes mod $n$. Carl Ludwig Siegel
proved in 1935 that for every $\varepsilon > 0$, $L(1, \chi) > C(\varepsilon)\,n^{-\varepsilon}$, but his proof gives no way to
compute $C(\varepsilon)$: it is **ineffective**. GRH would rule Siegel zeros out; nobody has managed to without it. This is
one of the main obstacles in analytic number theory, and it reappears in Gauss's class number problem
([Chapter 17](17-Algebraic-Number-Theory.md)).

A related question: how far must you go to find the *first* prime $\equiv a \pmod n$? Yuri Linnik proved in 1944 that it
is at most $C n^L$ for absolute constants $C$ and $L$. The exponent $L$ has been pushed down over the decades to about 5;
GRH would give roughly $L = 2$ (more precisely, a bound of order $(n\log n)^2$), and it is conjectured that $L = 1 + \varepsilon$
is enough.

### History

Dirichlet's paper was presented to the Berlin Academy in 1837. Legendre had tried to prove the theorem around 1808 and
had relied on an unproved and harder claim. Dirichlet's proof used characters for prime moduli, then for all moduli, and
proved $L(1, \chi) \ne 0$ for real $\chi$ through his **class number formula** for binary quadratic forms. The use of
analysis to prove a statement about whole numbers was new and controversial, and it founded analytic number theory.
The elementary proof of Step 6 is a later simplification in the spirit of Mertens and Landau; it appears in many
textbooks, Apostol's among them.

## 15.5 The Green-Tao theorem

*Level: expert (statement).*

Dirichlet's theorem fixes the progression and asks for primes in it. Turn the question around: can you find
progressions made **entirely** of primes? With three terms it is easy: $3, 5, 7$ or $3, 7, 11$. A longer one:

$$
199,\ 409,\ 619,\ 829,\ 1039,\ 1249,\ 1459,\ 1669,\ 1879,\ 2089
$$

is ten primes with common difference 210. Why 210? If a prime $q$ does not divide the difference $d$, the terms
$a, a+d, \ldots, a + (q-1)d$ run through all classes mod $q$, so one of any $q$ consecutive terms is divisible by $q$.
In a list of 10 primes all larger than 7, every prime $q \le 7$ must therefore divide $d$, so $2 \cdot 3 \cdot 5 \cdot 7 = 210$
divides $d$.

**Theorem 15.8 (Green and Tao, 2004).** For every $k$, there are infinitely many arithmetic progressions of $k$ primes.

The background is combinatorial. Endre Szemerédi proved in 1975 that every set of whole numbers with **positive upper
density** (a positive proportion of $1, \ldots, N$ for infinitely many $N$) contains arbitrarily long progressions. The
primes have density 0 (prime number theorem), so Szemerédi's theorem does not apply. Ben Green and Terence Tao showed
that the primes sit inside a "pseudorandom" set of almost-primes, built with ideas of Goldston, Pintz and Yıldırım from
their work on prime gaps, in which they have positive *relative* density, and proved a relative version of Szemerédi's
theorem that applies there. The paper appeared in the *Annals of Mathematics* in 2008; Tao received the Fields Medal in
2006, citing this work among others.

Earlier, J. G. van der Corput had proved in 1939 that there are infinitely many three-term progressions of primes. Green,
Tao and Tamar Ziegler later went further and counted the progressions of length $k$ up to $N$ asymptotically.

The proof gives no useful size for where the first progression of length $k$ appears. Finding long ones is a computer
search: as of 2024 the longest known has 27 primes, found in 2019 by a distributed computing project (PrimeGrid).

What remains open is the general conjecture of Erdős: if a set $A$ of whole numbers has $\sum_{a \in A} 1/a = \infty$, must it
contain arbitrarily long progressions? The primes satisfy the hypothesis (Chapter 13), so Green-Tao is a special case.
For progressions of length 3 it was proved by Thomas Bloom and Olof Sisask in 2020; for longer ones it is open.

## Check yourself

??? question "1. Which of these progressions contain infinitely many primes: $6k+3$, $10k+7$, $15k+10$, $14k+9$?"

    $6k+3$: $\gcd(3, 6) = 3$, every term is a multiple of 3, only 3 itself is prime. $10k+7$: $\gcd = 1$, infinitely many
    (Dirichlet). $15k+10$: $\gcd(10,15) = 5$, all multiples of 5, and none is 5, so no primes at all. $14k+9$: $\gcd(9,14)=1$,
    infinitely many (the first are $23, 37, 79$).

??? question "2. Use $\Phi_5(x) = x^4 + x^3 + x^2 + x + 1$ to find two primes $\equiv 1 \pmod 5$, starting from $x = 2 \cdot 3 \cdot 5 \cdot 7 = 210$."

    $\Phi_5(210) = 210^4 + 210^3 + 210^2 + 210 + 1 = 1944810000 + 9261000 + 44100 + 211 = 1954115311$. It factors as
    $151 \times 701 \times 18461$, and $151 = 30\cdot5+1$, $701 = 140\cdot5+1$, $18461 = 3692\cdot5+1$. All $\equiv 1 \pmod 5$, as the
    lemma promises (5 does not divide $\Phi_5(210)$, which is $\equiv 1 \pmod 5$).

??? question "3. List the characters mod 6 and mod 10."

    Mod 6 the units are 1 and 5, with $5^2 \equiv 1$: two characters, $\chi_0$ and the one with $\chi(5) = -1$ (it is $\chi_{-3}$
    lifted to modulus 6). Mod 10 the units $1, 3, 9, 7$ are the powers $3^0, 3^1, 3^2, 3^3$ of 3: a cyclic group of order 4.
    The characters are $\chi_j(3^k) = i^{jk}$ for $j = 0, 1, 2, 3$, giving at $(1,3,7,9)$ the rows $(1,1,1,1)$,
    $(1, i, -i, -1)$, $(1,-1,-1,1)$, $(1,-i,i,-1)$ (since $7 = 3^3$ and $9 = 3^2$).

??? question "4. How many characters are there mod 15, and how many are real?"

    $\varphi(15) = 8$ characters. By the Chinese remainder theorem $(\mathbb{Z}/15)^\times \cong (\mathbb{Z}/3)^\times \times (\mathbb{Z}/5)^\times$,
    cyclic of orders 2 and 4. A real character has values $\pm1$, so it sends each generator to $\pm 1$: 2 choices on the
    first factor, 2 on the second ($\chi(2) = \pm 1$ mod 5). So 4 real characters and 4 complex ones.

??? question "5. Using the mod 4 characters, write the indicator of $m \equiv 3 \pmod 4$ and check it at $m = 7$ and $m = 9$."

    $\frac12\left(\chi_0(m) - \chi_{-4}(m)\right)$. At $m = 7$: $\frac12(1 - (-1)) = 1$. At $m = 9$: $\frac12(1 - 1) = 0$.
    At even $m$ both characters are 0, giving 0.

??? question "6. Prove that every prime divisor of $m^2 + m + 1$ (for whole $m$) is 3 or $\equiv 1 \pmod 3$, and deduce that there are infinitely many primes $\equiv 1 \pmod 3$."

    $m^2 + m + 1 = \Phi_3(m)$. By Lemma 15.2, a prime divisor $p \ne 3$ has $p \equiv 1 \pmod 3$. Given primes
    $p_1, \ldots, p_k \equiv 1 \pmod 3$, take $m = 3p_1\cdots p_k$: then $m^2 + m + 1 \equiv 1$ modulo 3 and modulo each $p_i$, so
    its prime factors are new and are not 3, hence $\equiv 1 \pmod 3$.

??? question "7. For $\chi = \chi_8$ (values $1, -1, -1, 1$ at $1, 3, 5, 7$ mod 8), $L(1,\chi) = \frac{\log(1+\sqrt2)}{\sqrt2}$. Compute the first two blocks of 8 of the series and compare."

    $1 - \frac13 - \frac15 + \frac17 = 0.60952$, then $+\frac19 - \frac1{11} - \frac1{13} + \frac1{15} = +0.00995$: total $0.61947$. The
    exact value is $\log(2.41421)/1.41421 = 0.88137/1.41421 = 0.62323$. The partial sums approach it slowly, with error about
    the size of the next block. (This value comes from the class number formula for $\mathbb{Q}(\sqrt2)$, with fundamental
    unit $1 + \sqrt2$; see Chapter 17.)

??? question "8. Compute $r(m) = \sum_{d \mid m}\chi_{-4}(d)$ for $m = 3, 9, 45, 65$, and check that $4r(m)$ counts the ways to write $m$ as $x^2 + y^2$."

    $r(3) = 1 - 1 = 0$: no ways. $r(9) = 1 - 1 + 1 = 1$: $9 = (\pm3)^2 + 0^2 = 0^2 + (\pm 3)^2$, 4 ways. $r(45)$: divisors
    $1,3,5,9,15,45$ give $1 - 1 + 1 + 1 - 1 + 1 = 2$, and $45 = (\pm 3)^2 + (\pm 6)^2 = (\pm6)^2 + (\pm3)^2$, 8 ways. $r(65)$: divisors
    $1, 5, 13, 65$ all $\equiv 1 \pmod 4$, so $r = 4$, and $65 = 1 + 64 = 16 + 49$ gives $4 \times 4 = 16$ ordered signed ways.

??? question "9. Explain why Lemma 15.6 cannot prove $L(1,\chi) \ne 0$ for a real character, and what the proof in Step 6 uses instead."

    For real $\chi$, $\bar\chi = \chi$, so a zero at 1 would be one vanishing factor against one simple pole in the product;
    $\frac{C}{s-1}\cdot C'(s-1)$ stays bounded, no contradiction with "$\ge 1$". Step 6 uses positivity instead: $1 * \chi \ge 0$
    with value $\ge 1$ on squares makes $\sum_{m \le x} r(m)/\sqrt m$ grow like $\log x$, while $L(1,\chi) = 0$ would make it bounded.

??? question "10. Show that an arithmetic progression of 6 primes, all larger than 5, must have common difference divisible by 30. Find one."

    For $q = 2, 3, 5$: if $q \nmid d$, then among $q \le 6$ consecutive terms one is $\equiv 0 \pmod q$, and it is larger than $q$, so
    not prime. Hence $2, 3, 5$ all divide $d$, so $30 \mid d$. Example: $7, 37, 67, 97, 127, 157$, all prime, difference 30.

??? question "11. Show directly that for $\chi \ne \chi_0$ mod $n$, $\left|\sum_{m > z}\chi(m)/m\right| \le 2\varphi(n)/z$."

    Let $A(t) = \sum_{m \le t}\chi(m)$, so $|A(t)| \le \varphi(n)$ (complete blocks of $n$ sum to 0, and a partial block has at
    most $\varphi(n)$ nonzero terms of size 1). Summation by parts: $\sum_{z < m \le N}\frac{\chi(m)}{m} = \frac{A(N)}{N} - \frac{A(z)}{z} + \int_z^N \frac{A(t)}{t^2}\,dt$.
    Each boundary term is at most $\varphi(n)/z$ in size, and the integral at most $\varphi(n)\int_z^\infty t^{-2}dt = \varphi(n)/z$. As
    $N \to \infty$ the first term vanishes, leaving at most $2\varphi(n)/z$.

??? question "12. Count primes $\equiv 1$ and $\equiv 3 \pmod 4$ up to 50. Is the result consistent with Dirichlet's theorem and with Chebyshev's bias?"

    $\equiv 1$: $5, 13, 17, 29, 37, 41$ (six). $\equiv 3$: $3, 7, 11, 19, 23, 31, 43, 47$ (eight). Consistent with both:
    Dirichlet only says the ratio tends to 1 in the limit, and Chebyshev's bias says the $3 \bmod 4$ class is usually ahead.
    The first time the $1 \bmod 4$ class leads is at 26861.

## What you learned

- If $\gcd(a, n) = 1$, the progression $a + kn$ contains infinitely many primes, evenly spread over the $\varphi(n)$ classes;
  cyclotomic polynomials prove the case $a = 1$ by Euclid's method.
- A Dirichlet character is a homomorphism $(\mathbb{Z}/n)^\times \to \mathbb{C}^\times$; there are $\varphi(n)$ of them, and they are
  orthogonal in both directions.
- Orthogonality writes the indicator of a residue class as an average of characters, the finite Fourier analysis behind
  Dirichlet's proof.
- $L(s,\chi) = \sum\chi(m)m^{-s}$ has an Euler product; for $\chi \ne \chi_0$ it converges at $s = 1$, with values like
  $\pi/4$ and $\pi/(3\sqrt3)$.
- The whole proof reduces to $L(1,\chi) \ne 0$: for complex $\chi$ by the product of all $L$-functions, for real $\chi$ by the
  positivity of $1 * \chi$ and the hyperbola method.
- Chebyshev's bias, Siegel zeros and Linnik's theorem show the finer questions still open; Green and Tao proved that the
  primes contain progressions of every length.

**Next:** [Chapter 16](16-Partitions.md), which leaves the primes for the ways of splitting a number into parts, and finds
generating functions, Euler's pentagonal numbers and Ramanujan's congruences.

## Further reading

- P. G. L. Dirichlet, "Beweis des Satzes, dass jede unbegrenzte arithmetische Progression ... unendlich viele Primzahlen
  enthält", *Abhandlungen der Königlichen Preussischen Akademie der Wissenschaften*, 1837.
- T. M. Apostol, *Introduction to Analytic Number Theory*, 1976, chapters 6 and 7: characters and the proof of
  Dirichlet's theorem, including the real-character case of 15.4.
- H. Davenport, *Multiplicative Number Theory*, 3rd edition, 2000, chapters 1-6 and 21-22.
- J.-P. Serre, *A Course in Arithmetic*, 1973, chapter VI: a short proof of Dirichlet's theorem with characters and
  $L$-functions.
- M. R. Murty, "Primes in certain arithmetic progressions", *Journal of the Madras University*, 1988, on Euclid-style
  proofs.
- M. Rubinstein and P. Sarnak, "Chebyshev's bias", *Experimental Mathematics* 3, 1994; A. Granville and G. Martin,
  "Prime number races", *American Mathematical Monthly* 113, 2006.
- B. Green and T. Tao, "The primes contain arbitrarily long arithmetic progressions", *Annals of Mathematics* 167, 2008.
- On this site: [Algebra, Chapter 21](../algebra/21-Modules-and-Representations.md) for characters of finite groups;
  the gentle lessons [How the primes are spread out](../../topics/number-theory/level-8/04-spread-of-primes.md) and
  [Quadratic residues](../../topics/number-theory/level-8/06-quadratic-residues.md); the U of T guide
  [Infinite series](../../uoft/MAT159H1/unit05.md) for the convergence tests used in 15.3.
- Characters and discrete logs at work: the [cryptography book](https://cryptography.akadian.ca/book/), whose
  [arithmetic of secrets](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/) chapter uses the
  structure of $(\mathbb{Z}/n)^\times$ that 15.2 relies on.
