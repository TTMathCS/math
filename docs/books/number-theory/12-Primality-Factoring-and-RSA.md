# 12. Primality, factoring and RSA

*Is $2^{127} - 1 = 170141183460469231731687303715884105727$ prime? Édouard Lucas proved in 1876 that it is, by hand,
and it stayed the largest known prime for 75 years. Now take a 600-digit number made by multiplying two 300-digit
primes. A laptop can confirm in a fraction of a second that it is* not *prime, yet no one on Earth can find its two
factors. This chapter is about that strange gap. You will see why trial division is hopeless for large numbers, how
the Fermat and Miller–Rabin tests decide primality quickly, what the 2002 AKS theorem proved, how factoring
methods (Fermat's, Pollard's rho, and the sieves) work and why they are slow, and how the RSA cryptosystem turns the
gap into a lock that anyone can close but only one person can open.*

!!! abstract "In this chapter"
    **You will learn:**

    - why trial division costs about $\sqrt n$ steps, and why that is far too many
    - the Fermat test, its blind spot (Carmichael numbers), and the Miller–Rabin test with a proof of why it works
    - what the AKS theorem (2002) says: primality can be decided in polynomial time, without any unproved hypothesis
    - three factoring ideas: Fermat's difference of squares, Pollard's rho, and the congruence-of-squares sieves
    - RSA on one page: keys, encryption, decryption, and a proof that decryption undoes encryption
    - where discrete logarithms and elliptic curves enter cryptography

    **You need:** [Chapter 5](05-Fermat-Euler-and-Wilson.md) (Fermat, Euler, fast powering, Carmichael numbers),
    [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md) (the Chinese remainder theorem and
    $\varphi$), [Chapter 3](03-GCD-and-Euclids-Algorithm.md) (gcd and inverses). For gentler versions, see the
    Topics lessons [Fast powers](../../topics/number-theory/level-7/02-fast-powers.md),
    [Primality tests](../../topics/number-theory/level-7/04-primality-tests.md) and
    [RSA: a lock anyone can close](../../topics/number-theory/level-8/02-rsa.md).

    **Levels:** 12.1 is intermediate; 12.2 and 12.4 are advanced (proofs of why the methods work, with costs
    stated); 12.3 is expert (statement and the key lemma); 12.5 is intermediate to advanced; 12.6 is a pointer.

## 12.1 Trial division

*Level: intermediate.*

The obvious way to test whether $n$ is prime is to try dividing it by $2, 3, 4, \dots$. You only need to go up to
$\sqrt n$:

**Fact.** If $n > 1$ is composite, it has a prime factor $p \leq \sqrt n$.

*Proof.* Write $n = ab$ with $1 < a \leq b$. Then $a^2 \leq ab = n$, so $a \leq \sqrt n$, and any prime factor of $a$
is at most $a$. $\square$

So to test $391$: $\sqrt{391} \approx 19.8$, try the primes $2, 3, 5, 7, 11, 13, 17$; and $391 = 17 \cdot 23$. Trial
division also *factors*: divide out each prime you find and continue.

**How long does it take?** For $n \approx 10^{12}$ you try the primes up to $10^6$, and there are 78498 of them: a
computer does that in a blink. But the work grows like $\sqrt n$, which is *exponential in the number of digits*: a
number with $d$ digits needs about $10^{d/2}$ trial divisions (or about $10^{d/2}/\ln 10^{d/2}$ if you only use
primes). For $d = 40$ that is already $10^{20}$ divisions; for the 600-digit numbers of RSA it is $10^{300}$, vastly
more than the number of atoms in the observable universe (about $10^{80}$).

This is the right way to measure an algorithm in number theory: its cost as a function of the **size** of $n$, that
is, its number of digits or bits, $\log n$. An algorithm is **polynomial time** if its cost is at most a fixed power
of $\log n$. Trial division is not. The tests in 12.2 are.

**Why fast tests matter.** By the prime number theorem ([Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md)),
about one number in $\ln n$ near $n$ is prime. Near $2^{1024}$, $\ln n \approx 710$, so about one odd number in 355
is prime. If testing is fast, you find a 300-digit prime by testing random odd 300-digit numbers until one passes: a
few hundred tries. That is how every RSA key is made.

## 12.2 The Fermat and Miller–Rabin tests

*Level: advanced.*

### Fermat's test

Fermat's little theorem ([Chapter 5](05-Fermat-Euler-and-Wilson.md)) says: if $n$ is prime and $\gcd(a, n) = 1$,
then $a^{n-1} \equiv 1 \pmod n$. Turned around:

**Fermat test.** Pick $a$ with $1 < a < n - 1$. If $a^{n-1} \not\equiv 1 \pmod n$, then $n$ is certainly
**composite**. Such an $a$ is a **Fermat witness** for $n$.

Fast powering (square and multiply, [Chapter 5](05-Fermat-Euler-and-Wilson.md)) computes $a^{n-1} \bmod n$ with about
$2 \log_2 n$ multiplications, so the test is polynomial time.

**Example.** $n = 91$: $2^{90} \equiv 64 \pmod{91}$, not 1, so 91 is composite (indeed $91 = 7 \cdot 13$), even
though we never found a factor. That is the remarkable thing about these tests: they prove a number composite
without factoring it.

But passing the test proves nothing. $n = 341 = 11 \cdot 31$ satisfies $2^{340} \equiv 1 \pmod{341}$: it is a
**Fermat pseudoprime to base 2**. Base 3 exposes it ($3^{340} \equiv 56$). Worse, there are composite $n$ that pass for
*every* base coprime to $n$: the **Carmichael numbers** $561, 1105, 1729, 2465, 2821, 6601, 8911, \dots$
([Chapter 5](05-Fermat-Euler-and-Wilson.md), Korselt's criterion). Alford, Granville and Pomerance proved in 1994
that there are infinitely many. So the Fermat test alone can be fooled forever.

### Square roots of 1

The fix comes from one extra fact about primes.

**Lemma 12.1.** If $p$ is prime and $x^2 \equiv 1 \pmod p$, then $x \equiv 1$ or $x \equiv -1 \pmod p$.

*Proof.* $p \mid x^2 - 1 = (x - 1)(x + 1)$, and a prime dividing a product divides a factor (Euclid's lemma,
[Chapter 2](02-Primes-and-Unique-Factorization.md)). $\square$

For composite $n$ this fails: modulo $561$, the number $67$ satisfies $67^2 = 4489 = 8 \cdot 561 + 1 \equiv 1$, but
$67 \not\equiv \pm 1$. A square root of 1 other than $\pm 1$ is called **nontrivial**, and finding one gives a
factor: if $x^2 \equiv 1$ and $x \not\equiv \pm 1 \pmod n$, then $n$ divides $(x-1)(x+1)$ but neither factor, so
$\gcd(x - 1, n)$ is a proper factor. Here $\gcd(66, 561) = 33$ and $\gcd(68, 561) = 17$.

### Miller–Rabin

Let $n$ be odd and write $n - 1 = 2^s d$ with $d$ odd. Computing $a^{n-1}$ by first computing $a^d$ and then squaring
$s$ times produces the sequence

$$
a^d, \; a^{2d}, \; a^{4d}, \; \dots, \; a^{2^s d} = a^{n-1} \pmod n .
$$

**Theorem 12.2.** If $n$ is an odd prime and $n \nmid a$, then either $a^d \equiv 1 \pmod n$, or $a^{2^r d} \equiv -1
\pmod n$ for some $r$ with $0 \leq r < s$.

*Proof.* The last term is $a^{n-1} \equiv 1$ by Fermat. Walk back from the end. Each term is the square of the one
before it. If the first term $a^d$ is 1, we are done. Otherwise there is a last term that is not 1, and the term after
it is 1; that term is a square root of 1 which is not 1, so by Lemma 12.1 it is $-1$. Its position $r$ is below $s$
because the last term is 1. $\square$

**Miller–Rabin test.** Write $n - 1 = 2^s d$. Pick $a$; compute the sequence. If it neither starts with 1 nor
contains $-1$ before the end, $n$ is **composite** and $a$ is a **strong witness**. Otherwise $n$ is a **strong
probable prime** to base $a$; if $n$ is in fact composite, $a$ is a **strong liar** and $n$ a **strong pseudoprime to
base $a$**.

**Example ($n = 561$, $a = 2$).** $560 = 2^4 \cdot 35$. The sequence is

$$
2^{35} \equiv 263, \quad 263^2 \equiv 166, \quad 166^2 \equiv 67, \quad 67^2 \equiv 1, \quad 1^2 \equiv 1 \pmod{561}.
$$

It does not start with 1 and $-1 = 560$ never appears, so 561 is composite. The Carmichael number that fooled Fermat
is caught, and the term just before the first 1 is the nontrivial square root 67, which factors it.

**Example ($n = 2047 = 23 \cdot 89$).** $2046 = 2 \cdot 1023$. With $a = 2$: $2^{1023} \equiv 1$, so 2047 is a strong
pseudoprime to base 2 (it is the smallest one). With $a = 3$: $3^{1023} \equiv 1565$ and $1565^2 \equiv 1013$, neither
$\pm 1$, so base 3 is a strong witness.

**How many liars?** The point of Miller–Rabin is that it cannot be fooled by most bases.

**Theorem 12.3 (Monier; Rabin, 1980).** If $n > 9$ is odd and composite, at most $\varphi(n)/4$ of the bases
$1 \leq a < n$ are strong liars.

*Idea of the proof.* The strong liars live inside a subgroup of the unit group $(\mathbb{Z}/n\mathbb{Z})^\times$ (or
a union of a few cosets of one), and the Chinese remainder theorem shows that this subgroup is a proper one of index at
least 4, unless $n$ is a prime power, which is handled separately. The full proof is about two pages; see Crandall and
Pomerance, *Prime Numbers: A Computational Perspective*, Theorem 3.5.4.

The bound is sharp: for $n = 703 = 19 \cdot 37$, exactly 162 bases are strong liars, and $\varphi(703)/4 = 648/4 =
162$. For most composites the liars are far fewer: for $n = 561$, only 10 of the 560 bases lie.

So if you test $k$ random bases, a composite slips through with probability at most $4^{-k}$. Forty rounds give
$4^{-40} \approx 10^{-24}$, smaller than the chance of a hardware error during the computation.

**Making it deterministic.** If the generalized Riemann hypothesis ([Chapter 15](15-Primes-in-Progressions.md)) is
true, every odd composite $n$ has a strong witness $a \leq 2(\ln n)^2$ (Miller, 1976, with this constant by Bach,
1990), so testing those bases is a deterministic polynomial-time test, but only conditionally. For numbers of
practical size, fixed sets of bases are known to work: for instance bases $2, 3, 5, 7$ correctly decide every
$n < 3215031751$, and that bound is sharp, because $3215031751 = 151 \cdot 751 \cdot 28351$ is a strong pseudoprime
to all four (base 11 catches it).

!!! note "Try it in Python"
    ```python
    import random

    def miller_rabin(n, rounds=40):
        if n < 4: return n in (2, 3)
        if n % 2 == 0: return False
        d, s = n - 1, 0
        while d % 2 == 0:
            d //= 2; s += 1
        for _ in range(rounds):
            a = random.randrange(2, n - 1)
            x = pow(a, d, n)
            if x in (1, n - 1): continue
            for _ in range(s - 1):
                x = x * x % n
                if x == n - 1: break
            else:
                return False          # a is a strong witness: n is composite
        return True                   # probably prime

    print(miller_rabin(561), miller_rabin(2**127 - 1))   # False True
    ```

## 12.3 AKS: primality is in P

*Level: expert.*

For decades the question stood: is there a primality test that is deterministic, runs in polynomial time, and
depends on no unproved conjecture? In August 2002 Manindra Agrawal and his students Neeraj Kayal and Nitin Saxena, at
the Indian Institute of Technology Kanpur, answered yes, in a paper titled "PRIMES is in P" (published in the
*Annals of Mathematics* in 2004). It is short and uses only undergraduate algebra.

The starting point is a polynomial version of Fermat's theorem.

**Lemma 12.4.** Let $n \geq 2$ and $\gcd(a, n) = 1$. Then $n$ is prime if and only if

$$
(X + a)^n \equiv X^n + a \pmod n
$$

as polynomials in $X$ (meaning every coefficient of the difference is divisible by $n$).

*Proof.* The coefficient of $X^k$ in $(X + a)^n - (X^n + a)$ is $\binom nk a^{n-k}$ for $0 < k < n$, and
$a^n - a$ for $k = 0$. If $n$ is prime, $p = n$ divides each $\binom nk$ with $0 < k < n$ (the numerator $n!$ has the
factor $p$, the denominator $k!(n-k)!$ does not), and $a^n \equiv a$ by Fermat. If $n$ is composite, let $q$ be a
prime factor and $q^e$ the exact power of $q$ dividing $n$. Then $q^e$ does not divide $\binom nq = \frac{n(n-1)\cdots(n-q+1)}{q!}$
(the numerator has exactly $e$ factors of $q$, all from $n$, and the denominator has one), and $q \nmid a^{n-q}$,
so the coefficient of $X^q$ is not divisible by $n$. $\square$

Check with $n = 6$, $a = 1$: the coefficients of $(X + 1)^6$ modulo 6 are $1, 0, 3, 2, 3, 0, 1$, not those of
$X^6 + 1$; so 6 is composite. With $n = 7$ they are $1, 0, 0, 0, 0, 0, 0, 1$.

This is a perfect test but a useless algorithm: $(X + a)^n$ has $n + 1$ coefficients. AKS's idea is to compute
modulo $X^r - 1$ as well, for a small $r$, which keeps only $r$ coefficients. That loses information, so one must
check several values of $a$, and the heart of the paper is the proof that a few suffice.

**Theorem 12.5 (Agrawal, Kayal and Saxena, 2002).** Let $n > 1$. Suppose $n$ is not a perfect power; let $r$ be the
smallest number such that the order of $n$ modulo $r$ exceeds $(\log_2 n)^2$; suppose $n > r$ and $n$ has no prime factor up to
$r$; and suppose $(X + a)^n \equiv X^n + a$ modulo $X^r - 1$ and $n$, for every $a$ from 1 to
$\lfloor \sqrt{\varphi(r)} \log_2 n \rfloor$. Then $n$ is prime. Moreover $r$ is at most a constant times
$(\log n)^5$, so the whole test runs in polynomial time.

The original running-time bound was about $(\log n)^{12}$; Lenstra and Pomerance later reduced it to about
$(\log n)^6$. The authors received the Gödel Prize in 2006. In practice, however, Miller–Rabin (for "almost certainly
prime") and elliptic-curve primality proving (ECPP, for a certificate anyone can check) are much faster, and AKS's
importance is theoretical: it settled the complexity of the question.

For numbers of special shape, there have long been fast deterministic tests. The **Lucas–Lehmer test** decides
whether a Mersenne number $2^p - 1$ is prime ([Chapter 2](02-Primes-and-Unique-Factorization.md)): with
$s_0 = 4$ and $s_{k+1} = s_k^2 - 2$, the number $M_p = 2^p - 1$ (for an odd prime $p$) is prime exactly when
$s_{p-2} \equiv 0 \pmod{M_p}$. That is why the largest known primes are Mersenne primes.

## 12.4 Factoring

*Level: advanced.*

Testing is fast; factoring is not. Here are three ideas that do much better than trial division, and still not well
enough to break RSA.

### Fermat's method: differences of squares

If $n = x^2 - y^2$, then $n = (x - y)(x + y)$. For odd $n = ab$ the converse holds too: $x = (a+b)/2$,
$y = (b - a)/2$. When the two factors are close, $x$ is just above $\sqrt n$ and $y$ is small. So: start at
$x = \lceil \sqrt n \rceil$ and step up until $x^2 - n$ is a perfect square.

**Example ($n = 5959$).** $\sqrt{5959} \approx 77.2$.

| $x$ | $x^2 - n$ | square? |
| --- | --- | --- |
| 78 | 125 | no |
| 79 | 282 | no |
| 80 | 441 | $21^2$ |

So $5959 = (80 - 21)(80 + 21) = 59 \cdot 101$. For $n = 8051$, the first try $x = 90$ gives $8100 - 8051 = 49 = 7^2$,
so $8051 = 83 \cdot 97$ at once.

The number of steps is about $(\sqrt b - \sqrt a)^2 / 2$, tiny when $a \approx b$, enormous otherwise. That is why
RSA key generation must not choose $p$ and $q$ too close together.

### Pollard's rho method (1975)

Pick a simple map such as $f(x) = x^2 + 1$ and iterate it modulo $n$: $x_0 = 2$, $x_{k+1} = f(x_k) \bmod n$. Let $p$
be an unknown prime factor of $n$. The same sequence reduced modulo $p$ takes values in a set of only $p$ elements, so
it must eventually repeat, and from then on it cycles. Drawn out, the sequence modulo $p$ has a tail and a loop, like
the Greek letter $\rho$. Here is the sequence $2, 5, 26, 677, \dots$ reduced modulo 83:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 320" role="img" aria-label="The sequence 2, 5, 26, 13, 4, 17, 41, 22, 70 modulo 83, drawn as the Greek letter rho: a tail of four values leading into a loop of five values that repeats forever.">
  <line x1="150.0" y1="286.0" x2="150.0" y2="269.0" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150.0,269.0 154.0,277.0 146.0,277.0" fill="currentColor"/>
  <line x1="150.0" y1="241.0" x2="150.0" y2="224.0" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150.0,224.0 154.0,232.0 146.0,232.0" fill="currentColor"/>
  <line x1="150.0" y1="196.0" x2="150.0" y2="179.0" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150.0,179.0 154.0,187.0 146.0,187.0" fill="currentColor"/>
  <line x1="150.0" y1="151.0" x2="150.0" y2="138.0" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150.0,138.0 154.0,146.0 146.0,146.0" fill="currentColor"/>
  <line x1="161.3" y1="115.8" x2="188.1" y2="96.3" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="188.1,96.3 184.0,104.2 179.3,97.8" fill="currentColor"/>
  <line x1="195.1" y1="74.8" x2="184.9" y2="43.2" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="184.9,43.2 191.2,49.6 183.6,52.1" fill="currentColor"/>
  <line x1="166.6" y1="29.9" x2="133.4" y2="29.9" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="133.4,29.9 141.4,25.9 141.4,33.9" fill="currentColor"/>
  <line x1="115.1" y1="43.2" x2="104.9" y2="74.8" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="104.9,74.8 103.5,65.9 111.1,68.4" fill="currentColor"/>
  <line x1="111.9" y1="96.3" x2="138.7" y2="115.8" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="138.7,115.8 129.9,114.3 134.6,107.8" fill="currentColor"/>
  <circle cx="150.0" cy="300.0" r="14" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="150.0" y="304.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="150.0" cy="255.0" r="14" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="150.0" y="259.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="150.0" cy="210.0" r="14" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="150.0" y="214.0" font-size="11" text-anchor="middle" fill="currentColor">26</text>
  <circle cx="150.0" cy="165.0" r="14" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="150.0" y="169.0" font-size="11" text-anchor="middle" fill="currentColor">13</text>
  <circle cx="150.0" cy="124.0" r="14" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="150.0" y="128.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="199.5" cy="88.1" r="14" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="199.5" y="92.1" font-size="11" text-anchor="middle" fill="currentColor">17</text>
  <circle cx="180.6" cy="29.9" r="14" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="180.6" y="33.9" font-size="11" text-anchor="middle" fill="currentColor">41</text>
  <circle cx="119.4" cy="29.9" r="14" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="119.4" y="33.9" font-size="11" text-anchor="middle" fill="currentColor">22</text>
  <circle cx="100.5" cy="88.1" r="14" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.5" y="92.1" font-size="11" text-anchor="middle" fill="currentColor">70</text>
  <text x="175" y="235" font-size="11" fill="currentColor">tail</text>
  <text x="215" y="40" font-size="11" fill="currentColor">cycle of 5</text>
</svg>
</div>

The **birthday paradox** says that among about $\sqrt p$ random values modulo $p$ two are likely to coincide (with 23
people, two probably share a birthday, and $\sqrt{365} \approx 19$). Treating $f$ as random, the tail plus loop has
length about $\sqrt{\pi p / 2}$.

How do we detect a repeat modulo $p$ when we do not know $p$? If $x_i \equiv x_j \pmod p$, then $p$ divides
$x_i - x_j$, so $\gcd(x_i - x_j, n)$ is probably $p$ (or a multiple of it). To avoid storing the sequence, use
**Floyd's cycle-finding trick**: move a tortoise $x = x_k$ one step at a time and a hare $y = x_{2k}$ two steps at a
time; once both are in the loop, the hare catches up within one lap. Compute $\gcd(x - y, n)$ at each step.

**Example ($n = 8051$).**

| $k$ | $x_k$ | $x_{2k}$ | $\gcd(x_k - x_{2k}, 8051)$ |
| --- | --- | --- | --- |
| 1 | 5 | 26 | 1 |
| 2 | 26 | 7474 | 1 |
| 3 | 677 | 871 | 97 |

Check: $871 - 677 = 194 = 2 \cdot 97$. So $8051 = 97 \cdot 83$. Modulo 97 the sequence is $2, 5, 26, 95, 5, 26, 95,
\dots$, a loop of length 3, which is why it was found so fast.

The cost is about $\sqrt p \leq n^{1/4}$ steps: a factor of 20 digits falls in about $10^{10}$ steps, in minutes. Still
exponential in the number of digits, but it finds small factors of huge numbers. Pollard also gave the **$p - 1$
method**: if $p - 1$ has only small prime factors, then $p - 1$ divides $M = \operatorname{lcm}(1, 2, \dots, B)$ for a
modest $B$, so $2^M \equiv 1 \pmod p$ and $\gcd(2^M - 1, n)$ reveals $p$. For $n = 1403 = 23 \cdot 61$ with $B = 5$:
$M = 60$ and $60 = p - 1$ for $p = 61$, so $\gcd(2^{60} - 1 \bmod 1403, 1403) = \gcd(1342, 1403) = 61$. Lenstra's
**elliptic curve method** (1985) replaces the group of units modulo $p$, whose size $p - 1$ you cannot change, by an
elliptic curve modulo $p$ ([Chapter 19](19-Elliptic-Curves.md)), whose size you can change by changing the curve until
it is smooth.

### Sieves: congruences of squares

The fastest general methods find $x$ and $y$ with

$$
x^2 \equiv y^2 \pmod n, \qquad x \not\equiv \pm y \pmod n .
$$

Then $n \mid (x - y)(x + y)$ but divides neither factor, and $\gcd(x - y, n)$ is a proper factor, exactly as with
the nontrivial square roots of 1 in 12.2. (For $n = pq$, a random pair with $x^2 \equiv y^2$ works half the time.)

How do we find such pairs? Look for numbers $x$ whose square modulo $n$ factors completely into small primes, then
multiply several of them so that every prime appears to an even power.

**Example ($n = 1649$).** Just above $\sqrt{1649} \approx 40.6$:

| $x$ | $x^2 \bmod 1649$ | factored |
| --- | --- | --- |
| 41 | 32 | $2^5$ |
| 42 | 115 | $5 \cdot 23$ |
| 43 | 200 | $2^3 \cdot 5^2$ |
| 44 | 287 | $7 \cdot 41$ |

Neither 32 nor 200 is a square, but their product $2^8 \cdot 5^2 = 6400 = 80^2$ is. So
$(41 \cdot 43)^2 \equiv 80^2$. Since $41 \cdot 43 = 1763 \equiv 114$, we have $114^2 \equiv 80^2 \pmod{1649}$, and
$\gcd(114 - 80, 1649) = \gcd(34, 1649) = 17$. So $1649 = 17 \cdot 97$.

In general you fix a **factor base** of small primes, collect many $x$ whose $x^2 \bmod n$ factors over it (they are
called **smooth**), record each exponent vector modulo 2, and find a subset adding to zero by linear algebra over the
field with two elements. The **quadratic sieve** (Pomerance, 1981) finds the smooth values quickly by sieving, like
Eratosthenes. The **number field sieve** (developed around 1990 by Pollard, Lenstra, Lenstra, Manasse and others)
does the same in a number field ([Chapter 17](17-Algebraic-Number-Theory.md)) and has running time about

$$
\exp\!\left( \left(\tfrac{64}{9}\right)^{1/3} (\ln n)^{1/3} (\ln \ln n)^{2/3} \right),
$$

"sub-exponential": far better than $\sqrt n$, far worse than polynomial. With it, the 250-digit (829-bit) challenge
number RSA-250 was factored in February 2020 by Boudot, Gaudry, Guillevic, Heninger, Thomé and Zimmermann, using about
2700 core-years of computing. A 2048-bit RSA modulus (617 digits) is far beyond such methods.

Whether factoring can be done in polynomial time on an ordinary computer is unknown. On a quantum computer it can:
**Shor's algorithm** (1994) factors in polynomial time, which is why cryptographers are moving to other problems (see
[Quantum computers](https://cryptography.akadian.ca/book/20-Quantum-Computers/) in the cryptography book).

## 12.5 RSA in one page

*Level: intermediate to advanced.*

In 1977 Ron Rivest, Adi Shamir and Leonard Adleman turned the gap between testing and factoring into a public-key
cryptosystem. (Clifford Cocks had found the same idea in 1973 at the British GCHQ, but it was kept secret until 1997.)

**Making keys.** Choose two large random primes $p$ and $q$ (found with Miller–Rabin). Let $n = pq$ and
$\varphi(n) = (p - 1)(q - 1)$. Choose $e$ with $\gcd(e, \varphi(n)) = 1$ (commonly $e = 65537$) and compute
$d = e^{-1} \bmod \varphi(n)$ by the extended Euclidean algorithm. The **public key** is $(n, e)$; the **private key**
is $d$ (and $p$, $q$, which are then no longer needed).

**Encrypting and decrypting.** A message is a number $m$ with $0 \leq m < n$. Anyone can encrypt it as
$c = m^e \bmod n$. The key owner decrypts with $m = c^d \bmod n$.

**Worked example.** $p = 61$, $q = 53$: $n = 3233$, $\varphi(n) = 60 \cdot 52 = 3120$. Take $e = 17$; Euclid gives
$d = 2753$ (check: $17 \cdot 2753 = 46801 = 15 \cdot 3120 + 1$). Encrypt $m = 65$: $65^{17} \equiv 2790 \pmod{3233}$.
Decrypt: $2790^{2753} \equiv 65 \pmod{3233}$.

**Theorem 12.6.** With keys as above, $(m^e)^d \equiv m \pmod n$ for **every** whole number $m$.

*Proof.* Since $ed \equiv 1 \pmod{\varphi(n)}$, write $ed = 1 + k(p-1)(q-1)$ with $k \geq 0$. Work modulo $p$ first.
If $p \mid m$, both sides are $0 \bmod p$. If not, Fermat gives $m^{p-1} \equiv 1$, so
$m^{ed} = m \cdot (m^{p-1})^{k(q-1)} \equiv m \pmod p$. Either way $m^{ed} \equiv m \pmod p$. The same holds modulo $q$.
Since $p$ and $q$ are distinct primes, the Chinese remainder theorem
([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)) gives $m^{ed} \equiv m \pmod{pq}$. $\square$

(The proof handles $m$ sharing a factor with $n$, which Euler's theorem alone would not.)

**Why it is secure, as far as anyone knows.** Anyone who can factor $n$ can compute $\varphi(n)$ and then $d$. Conversely
knowing $\varphi(n)$ gives the factors (exercise 10), and knowing $d$ also lets one factor $n$ quickly with a
randomized algorithm. Whether one can decrypt *without* in effect factoring is not proved either way; it is the
"RSA problem", believed to be as hard as factoring.

**What real RSA adds.** Encrypting $m$ directly ("textbook RSA") is insecure: it is deterministic, and
$(m_1 m_2)^e = m_1^e m_2^e$ lets an attacker manipulate ciphertexts. Real systems pad messages with randomness (OAEP)
and sign hashes with a padding scheme (PSS), use the Chinese remainder theorem to speed decryption by about four
times, and must avoid many implementation pitfalls. All of this is in
[the cryptography book's RSA chapter](https://cryptography.akadian.ca/book/13-RSA/).

## 12.6 Discrete logarithms and elliptic curves

*Level: pointer.*

RSA rests on factoring. The other half of public-key cryptography rests on the **discrete logarithm problem**: given a
prime $p$, a primitive root $g$ ([Chapter 7](07-Primitive-Roots.md)) and $h = g^x \bmod p$, find $x$. Powering is
fast; undoing it seems hard. The **Diffie–Hellman key exchange** (1976) uses it: Alice sends $g^a$, Bob sends $g^b$,
and both compute $g^{ab}$, which an eavesdropper seeing only $g^a$ and $g^b$ apparently cannot.

The number theory of the attacks parallels factoring:

- **Baby-step giant-step** (Shanks) and Pollard's rho for logarithms take about $\sqrt p$ steps in any group of size
  about $p$.
- **Pohlig–Hellman**: if $p - 1$ has only small prime factors, the Chinese remainder theorem splits the problem into
  small ones. So $p - 1$ must have a large prime factor.
- **Index calculus**: express many small powers of $g$ in terms of a factor base and solve linear equations, a
  sub-exponential method much like the sieves of 12.4.

Index calculus is why discrete-log keys modulo $p$ must be as large as RSA keys (about 3072 bits for a common
security target). In the group of points of an **elliptic curve** over a finite field ([Chapter 19](19-Elliptic-Curves.md)),
no index calculus is known for well-chosen curves, so only the $\sqrt p$ attacks apply, and a 256-bit curve gives
about the same security as 3072-bit RSA. That is why elliptic-curve cryptography now protects most web traffic.
Shor's algorithm breaks discrete logarithms too, in both settings.

For the full treatment, see the cryptography book's chapters on
[Diffie–Hellman](https://cryptography.akadian.ca/book/12-Diffie-Hellman/),
[discrete-log systems](https://cryptography.akadian.ca/book/14-Discrete-Log-Systems/) and
[elliptic curves](https://cryptography.akadian.ca/book/15-Elliptic-Curves/).

### A short history

Gauss wrote in the *Disquisitiones* (1801) that distinguishing primes from composites and factoring composites is
"one of the most important and useful" problems in arithmetic. For 170 years it was a pursuit of hand computers and
mechanical sieves. The arrival of RSA in 1977 changed its status overnight: Martin Gardner's column that August
printed a challenge on a 129-digit modulus, which was factored in 1994 by a team coordinating hundreds of volunteers'
computers with the quadratic sieve. Since then, factoring records have tracked both better algorithms (the number field
sieve) and more computers, while primality testing moved from probabilistic to provably polynomial with AKS.

## Check yourself

??? question "1. Use trial division to factor 391, and say which primes you had to try."
    $\sqrt{391} \approx 19.8$, so try primes up to 19: $391$ is odd, digit sum 13 (not divisible by 3), does not end in
    0 or 5; $391 = 7 \cdot 55 + 6$; $391 = 11 \cdot 35 + 6$; $391 = 13 \cdot 30 + 1$; $391 = 17 \cdot 23$. Found at 17.

??? question "2. Show with the Fermat test (base 2) that 91 is composite, given $2^{90} \equiv 64 \pmod{91}$. Why don't we need to know a factor?"
    If 91 were prime, Fermat's little theorem would force $2^{90} \equiv 1$. It is 64, so 91 is not prime. The
    argument is a contradiction with a property of primes; it never constructs a factor.

??? question "3. Run Miller–Rabin on $n = 1105$ with base 2, given $2^{69} \equiv 967$. What factors does it reveal?"
    $1104 = 2^4 \cdot 69$. The sequence is $967, 259, 781, 1, 1$ (each the square of the one before modulo 1105). It
    does not start at 1 and never hits $-1 = 1104$, so 1105 is composite. The term before the first 1 is 781, a
    nontrivial square root of 1: $\gcd(780, 1105) = 65$ and $\gcd(782, 1105) = 17$. Indeed $1105 = 5 \cdot 13 \cdot 17$.

??? question "4. Show that 2047 is a strong pseudoprime to base 2 without a computer, using $2^{11} = 2048$."
    $2^{11} = 2048 \equiv 1 \pmod{2047}$. So $2^{1023} = (2^{11})^{93} \equiv 1$. Since $2046 = 2 \cdot 1023$, the
    Miller–Rabin sequence starts with $2^{1023} \equiv 1$: base 2 is a strong liar. But $2047 = 23 \cdot 89$.

??? question "5. Factor 200819 with Fermat's method."
    $\sqrt{200819} \approx 448.1$. $x = 449$: $449^2 - 200819 = 201601 - 200819 = 782$, not a square. $x = 450$:
    $202500 - 200819 = 1681 = 41^2$. So $200819 = (450 - 41)(450 + 41) = 409 \cdot 491$.

??? question "6. Why does Pollard's rho take about $\sqrt p$ steps and not $\sqrt n$? What does that mean for $n$ with a 10-digit factor?"
    The collision we need happens modulo $p$, where the sequence has only $p$ possible values; by the birthday
    argument a repeat appears after about $\sqrt p$ steps, whatever the size of $n$. A 10-digit factor $p \approx 10^{10}$
    is found in about $10^5$ steps, even if $n$ has 100 digits.

??? question "7. Apply Pollard's $p - 1$ method to $n = 1403$ with $B = 11$, so $M = \operatorname{lcm}(1, \dots, 11) = 27720$. What goes wrong, and why?"
    Both $23 - 1 = 22 = 2 \cdot 11$ and $61 - 1 = 60 = 2^2 \cdot 3 \cdot 5$ divide 27720, so $2^M \equiv 1$ modulo both
    23 and 61, hence modulo 1403: the gcd is 1403 itself, a trivial factor. The method needs $p - 1$ smooth but $q - 1$
    not (for that $B$); with $B = 5$, only $60$ divides $M = 60$, and the gcd is 61.

??? question "8. Find a congruence of squares that factors 77, starting from $9^2 \bmod 77$."
    $9^2 = 81 \equiv 4 = 2^2 \pmod{77}$, and $9 \not\equiv \pm 2$. So $\gcd(9 - 2, 77) = 7$ and $\gcd(9 + 2, 77) = 11$:
    $77 = 7 \cdot 11$.

??? question "9. Make an RSA key with $p = 5$, $q = 11$, $e = 3$. Encrypt $m = 2$ and decrypt."
    $n = 55$, $\varphi = 4 \cdot 10 = 40$, $\gcd(3, 40) = 1$, and $d = 27$ since $3 \cdot 27 = 81 = 2 \cdot 40 + 1$.
    Encrypt: $2^3 = 8$. Decrypt: $8^{27} \bmod 55$. Since $8^{27} = 2^{81}$ and $2^{81} \equiv 2$ by Theorem 12.6, the
    result is 2; a direct computation confirms $8^{27} \equiv 2 \pmod{55}$.

??? question "10. Show that knowing $n = pq$ and $\varphi(n)$ lets you find $p$ and $q$. Try $n = 3233$, $\varphi(n) = 3120$."
    $\varphi(n) = pq - p - q + 1$, so $p + q = n - \varphi(n) + 1$. Then $p$ and $q$ are the roots of
    $t^2 - (p + q)t + n = 0$. Here $p + q = 3233 - 3120 + 1 = 114$, and $t^2 - 114t + 3233 = 0$ has discriminant
    $114^2 - 4 \cdot 3233 = 12996 - 12932 = 64$, so $t = (114 \pm 8)/2 = 61$ or $53$.

??? question "11. Use Lemma 12.4 to show that 4 is composite, with $a = 1$."
    $(X + 1)^4 = X^4 + 4X^3 + 6X^2 + 4X + 1$. Modulo 4 this is $X^4 + 2X^2 + 1$, which differs from $X^4 + 1$ by $2X^2$.
    So 4 is not prime. (The proof's recipe: $q = 2$, $e = 2$, and the coefficient $\binom 42 = 6$ is not divisible by 4.)

??? question "12. Why must the Miller–Rabin sequence be checked for $-1$ only before its last term?"
    The last term is $a^{n-1}$. If it is $-1$, then $a^{n-1} \not\equiv 1$ and Fermat's test already shows $n$ is
    composite; if it is anything other than 1, likewise. So a $-1$ in the final position is not a pass. Only a $-1$ at
    position $r < s$, followed by 1s, matches the pattern Theorem 12.2 proves for primes.

## What you learned

- Trial division needs about $\sqrt n$ steps, exponential in the number of digits; good algorithms are measured
  against $\log n$.
- The Fermat test proves compositeness without finding a factor, but Carmichael numbers fool it for every base.
- Miller–Rabin adds the fact that $\pm 1$ are the only square roots of 1 modulo a prime; at most a quarter of bases
  lie, so a few rounds give near certainty, and a nontrivial square root of 1 even yields a factor.
- AKS (2002) proved primality is decidable in deterministic polynomial time, from a polynomial form of Fermat's
  theorem.
- Fermat's method, Pollard's rho and $p - 1$, and the sieves (congruences of squares) factor far faster than trial
  division, but the best known methods are still sub-exponential; RSA-250 (829 bits) is the current style of record.
- RSA encrypts with $m^e$ and decrypts with $c^d$ modulo $n = pq$; Fermat plus the Chinese remainder theorem proves
  it works for every $m$, and its security rests on factoring.
- Discrete logarithms, modulo $p$ or on elliptic curves, are the other pillar of public-key cryptography; Shor's
  quantum algorithm would break both.

**Next:** [Chapter 13](13-How-Primes-Are-Spread.md), how many primes there are up to $x$, Chebyshev's bounds, Bertrand's
postulate and bounded gaps between primes.

## Further reading

- R. Crandall and C. Pomerance, *Prime Numbers: A Computational Perspective* (2nd edition, 2005). The standard
  reference for everything in this chapter.
- M. Agrawal, N. Kayal and N. Saxena, "PRIMES is in P", *Annals of Mathematics* 160 (2004).
- M. O. Rabin, "Probabilistic algorithm for testing primality", *Journal of Number Theory* 12 (1980); G. L. Miller,
  "Riemann's hypothesis and tests for primality", *Journal of Computer and System Sciences* 13 (1976).
- J. M. Pollard, "A Monte Carlo method for factorization", *BIT* 15 (1975).
- C. Pomerance, "A tale of two sieves", *Notices of the AMS* 43 (1996). A readable history of the quadratic and number
  field sieves.
- R. Rivest, A. Shamir and L. Adleman, "A method for obtaining digital signatures and public-key cryptosystems",
  *Communications of the ACM* 21 (1978).
- N. Koblitz, *A Course in Number Theory and Cryptography* (2nd edition, 1994).
- The cryptography book: [The arithmetic of secrets](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/),
  [RSA](https://cryptography.akadian.ca/book/13-RSA/) and
  [Quantum computers](https://cryptography.akadian.ca/book/20-Quantum-Computers/).
- On this site: the Topics lessons [Primality tests](../../topics/number-theory/level-7/04-primality-tests.md),
  [Fast powers](../../topics/number-theory/level-7/02-fast-powers.md),
  [RSA: a lock anyone can close](../../topics/number-theory/level-8/02-rsa.md) and
  [Diffie-Hellman key exchange](../../topics/number-theory/level-8/03-diffie-hellman.md);
  [Algebra, chapter 14](../algebra/14-Subgroups-Cosets-and-Lagrange.md) for the group theory behind Fermat's and
  Euler's theorems.
