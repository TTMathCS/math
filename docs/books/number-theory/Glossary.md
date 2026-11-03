# Glossary

*Short definitions of the terms this book uses, from A to Z, each with a link to the chapter that teaches it.*

## A

**abc conjecture**
For every $\varepsilon > 0$ there are only finitely many coprime triples $a + b = c$ with $c > \operatorname{rad}(abc)^{1+\varepsilon}$. It was stated by Masser and Oesterlé in 1985; Mochizuki's claimed proof is not accepted by most experts.
See [Chapter 21](21-Where-Number-Theory-Goes.md#212-the-abc-conjecture).

**abc hit**
A triple of positive integers with $a + b = c$, $\gcd(a, b) = 1$ and $c > \operatorname{rad}(abc)$, such as $1 + 8 = 9$. There are infinitely many of them.
See [Chapter 21](21-Where-Number-Theory-Goes.md#212-the-abc-conjecture).

**Absolute value**
A function $|\cdot|$ on a field with $|x| = 0$ only for $x = 0$, $|xy| = |x||y|$ and $|x + y| \le |x| + |y|$. On $\mathbb{Q}$ the usual one and the $p$-adic ones are the examples.
See [Chapter 18](18-p-adic-Numbers.md#184-ostrowskis-theorem).

**Abundant number**
A positive integer $n$ with $\sigma(n) > 2n$, so that its proper divisors add up to more than $n$. The smallest is 12.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#63-perfect-numbers).

**AKS test**
The primality test of Agrawal, Kayal and Saxena (2002), the first that is deterministic, unconditional and runs in polynomial time. It rests on the congruence $(x + a)^n \equiv x^n + a$ modulo $n$ and a small polynomial.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#123-aks-primality-is-in-p).

**Algebraic integer**
A complex number that is a root of a monic polynomial with integer coefficients, such as $\sqrt2$ or $\frac{1 + \sqrt5}{2}$. The algebraic integers in a number field form its ring of integers.
See [Chapter 17](17-Algebraic-Number-Theory.md#172-the-integers-of-a-quadratic-field).

**Algebraic number**
A complex number that is a root of a nonzero polynomial with rational (equivalently, integer) coefficients. Its degree is the smallest degree of such a polynomial.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Alternating zeta function**
The series $1 - 2^{-s} + 3^{-s} - 4^{-s} + \cdots$, which converges for $\operatorname{Re} s > 0$ and equals $(1 - 2^{1-s})\zeta(s)$. It extends $\zeta$ to the half-plane $\sigma > 0$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Analytic function**
A function of a complex variable that has a derivative in the complex sense on an open set (also called holomorphic). Such a function is determined everywhere by its values on any small piece.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Arithmetic function**
Any function from the positive integers to the real or complex numbers, such as $\tau$, $\sigma$, $\varphi$ and $\mu$.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#62-multiplicative-functions).

**Arithmetic progression**
A sequence $a, a + n, a + 2n, \ldots$ with a constant difference $n$. Dirichlet's theorem says it holds infinitely many primes when $\gcd(a, n) = 1$.
See [Chapter 15](15-Primes-in-Progressions.md#151-dirichlets-theorem).

**Artin's conjecture**
Every integer other than $-1$ and the perfect squares is a primitive root modulo infinitely many primes, and for a positive proportion of them. Hooley proved it in 1967 assuming the generalised Riemann hypothesis; unconditionally not one number is known to work.
See [Chapter 7](07-Primitive-Roots.md#75-artins-conjecture).

**Automorphic representation**
The object Langlands attaches to the group $\mathrm{GL}_n$ that generalises a modular form. The Langlands conjectures predict that Galois representations correspond to automorphic representations.
See [Chapter 21](21-Where-Number-Theory-Goes.md#211-the-langlands-programme-the-number-theory-side).

## B

**Baby-step giant-step**
Shanks's 1971 method for discrete logarithms: write the unknown exponent as $k = im + j$ with $m \approx \sqrt p$, list the baby steps $g^j$, and walk giant steps until one matches. It takes about $\sqrt p$ steps and as much memory.
See [Chapter 7](07-Primitive-Roots.md#74-index-arithmetic-the-discrete-logarithm).

**Bad reduction**
A prime $p$ dividing the discriminant of an elliptic curve with integer coefficients, so that the curve reduced modulo $p$ is singular. There are only finitely many such primes.
See [Chapter 19](19-Elliptic-Curves.md#194-curves-over-finite-fields).

**Badly approximable number**
An irrational $x$ for which $|x - p/q| \ge c/q^2$ for some constant $c > 0$ and every fraction $p/q$. These are exactly the numbers with bounded partial quotients; quadratic irrationals are examples.
See [Chapter 10](10-Continued-Fractions.md#106-how-well-can-numbers-be-approximated).

**Balanced ternary**
Writing numbers in base 3 with digits $-1, 0, 1$. It explains why weights $1, 3, 9, 27$ grams, placed in either pan, weigh every whole number from 1 to 40.
See [Chapter 1](01-Divisibility.md#15-number-bases).

**Base**
The number $b \ge 2$ whose powers a positional numeral uses: $n = d_k b^k + \cdots + d_1 b + d_0$ with digits $0 \le d_i < b$. Every positive integer has exactly one such representation.
See [Chapter 1](01-Divisibility.md#15-number-bases).

**Basel problem**
The problem of finding $1 + \frac14 + \frac19 + \cdots$, solved by Euler in 1734: the sum is $\pi^2/6$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#142-zeta2-pi26).

**Beal conjecture**
If $x^p + y^q = z^r$ in positive integers with $p, q, r \ge 3$, then $x$, $y$, $z$ have a common prime factor. It is open, with a prize offered for its proof.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#205-what-remains-generalised-fermat-equations).

**Bernoulli numbers**
The rational numbers $B_0 = 1$, $B_1 = -\frac12$, $B_2 = \frac16, \ldots$ defined by $\frac{x}{e^x - 1} = \sum B_k \frac{x^k}{k!}$. They give the even zeta values $\zeta(2k)$ as rational multiples of $\pi^{2k}$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#142-zeta2-pi26).

**Bertrand's postulate**
For every $n \ge 1$ there is a prime $p$ with $n < p \le 2n$. Chebyshev proved it around 1850; the chapter gives Erdős's proof with $\binom{2n}{n}$.
See [Chapter 13](13-How-Primes-Are-Spread.md#133-bertrands-postulate).

**Best approximation**
A fraction $p/q$ is a best approximation of the first kind to $x$ if every fraction closer to $x$ has a larger denominator, and of the second kind if the same holds for $|qx - p|$. The best approximations of the second kind are exactly the convergents.
See [Chapter 10](10-Continued-Fractions.md#103-best-approximations).

**Bézout's identity**
For any integers $a$, $b$, not both 0, there are integers $x$, $y$ with $ax + by = \gcd(a, b)$. The extended Euclidean algorithm finds $x$ and $y$.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#33-bezouts-identity-and-the-extended-algorithm).

**Bijection**
A one-to-one pairing between two sets, so that they have the same size. Partition identities are often proved by a bijection between diagrams, such as conjugation.
See [Chapter 16](16-Partitions.md#161-partitions-and-ferrers-diagrams).

**Binary**
Base 2, with digits 0 and 1. Fast powering reads the exponent in binary.
See [Chapter 1](01-Divisibility.md#15-number-bases).

**Birch and Swinnerton-Dyer conjecture**
The rank of an elliptic curve $E$ over $\mathbb{Q}$ equals the order of vanishing of $L(E, s)$ at $s = 1$; the strong form also predicts the leading coefficient. It is one of the Millennium Prize Problems, known only for rank 0 and 1.
See [Chapter 19](19-Elliptic-Curves.md#196-the-birch-and-swinnerton-dyer-conjecture).

**Birthday paradox**
Among about $\sqrt p$ random values modulo $p$, two are likely to coincide. It is why Pollard's rho method finds a factor $p$ in about $\sqrt p$ steps.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#124-factoring).

**Bombieri-Vinogradov theorem**
A theorem that the primes are evenly spread over the residue classes modulo $n$, on average over $n$ up to about $\sqrt x$, as well as the generalised Riemann hypothesis would give. It is a key input to the work on bounded gaps between primes.
See [Chapter 15](15-Primes-in-Progressions.md#153-l-functions).

**Brahmagupta-Fibonacci identity**
The identity $(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2$, showing that a product of sums of two squares is again one. It is the multiplicativity of the norm of Gaussian integers.
See [Chapter 11](11-Sums-of-Squares.md#111-which-numbers-are-sums-of-two-squares).

**Brun's theorem**
The sum of the reciprocals of the twin primes converges (Brun, 1919). So twin primes, if infinitely many, are much rarer than primes.
See [Chapter 13](13-How-Primes-Are-Spread.md#136-gaps-between-primes).

## C

**Canonical form**
The factorization $n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$ with distinct primes $p_1 < \cdots < p_k$ and exponents $a_i \ge 1$, obtained by grouping equal primes.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#23-the-fundamental-theorem-of-arithmetic).

**Carmichael function**
The smallest exponent $\lambda(n)$ with $a^{\lambda(n)} \equiv 1 \pmod n$ for every unit $a$ modulo $n$. It divides $\varphi(n)$, and equals it exactly when $n$ has a primitive root.
See [Chapter 7](07-Primitive-Roots.md#73-which-moduli-have-primitive-roots).

**Carmichael number**
A composite $n$ with $a^{n-1} \equiv 1 \pmod n$ for every $a$ coprime to $n$, so that it fools the Fermat test for every base. The smallest is $561 = 3 \cdot 11 \cdot 17$, and there are infinitely many.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#55-pseudoprimes-and-carmichael-numbers).

**Catalan's conjecture**
The only consecutive perfect powers are 8 and 9: $x^a - y^b = 1$ with $a, b \ge 2$ has only $3^2 - 2^3 = 1$. Mihăilescu proved it in 2002.
See [Chapter 9](09-Diophantine-Equations.md#94-markovs-equation-and-other-famous-equations).

**Cauchy sequence**
A sequence whose terms eventually stay within any given distance $\varepsilon$ of each other. A space is complete when every Cauchy sequence converges.
See [Chapter 18](18-p-adic-Numbers.md#182-the-p-adic-numbers-mathbbq_p).

**Character**
See Dirichlet character.
See [Chapter 15](15-Primes-in-Progressions.md#152-characters-mod-n).

**Chebyshev function**
The weighted prime count $\theta(x) = \sum_{p \le x} \ln p$, together with its relative $\psi(x) = \sum_{p^k \le x} \ln p$. The prime number theorem is equivalent to $\theta(x) \sim x$.
See [Chapter 13](13-How-Primes-Are-Spread.md#132-chebyshevs-bounds).

**Chebyshev's bounds**
Upper and lower bounds of the right shape for the prime-counting function: $\pi(x)$ lies between two constant multiples of $x/\ln x$. They are proved by looking at the primes dividing $\binom{2n}{n}$.
See [Chapter 13](13-How-Primes-Are-Spread.md#132-chebyshevs-bounds).

**Check digit**
An extra digit computed from the others so that a congruence holds, catching typing errors. ISBN-10 works modulo 11; ISBN-13, barcodes and the Luhn algorithm work modulo 10.
See [Chapter 4](04-Congruences.md#45-check-digits).

**Chen's theorem**
Every sufficiently large even number is the sum of a prime and a number with at most two prime factors (Chen Jingrun, 1973). It is the nearest result to Goldbach's conjecture.
See [Chapter 21](21-Where-Number-Theory-Goes.md#213-goldbachs-conjecture).

**Chinese remainder theorem**
If $m_1, \ldots, m_k$ are pairwise coprime, the system $x \equiv a_i \pmod{m_i}$ has a solution, unique modulo $M = m_1 \cdots m_k$. As a statement about rings, $\mathbb{Z}/M\mathbb{Z} \cong \mathbb{Z}/m_1\mathbb{Z} \times \cdots \times \mathbb{Z}/m_k\mathbb{Z}$.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#61-the-chinese-remainder-theorem).

**Circle method**
The analytic method of Hardy, Littlewood and Ramanujan: write a count as an integral of a power series or exponential sum around the unit circle, and evaluate it near the roots of unity. It gave the Hardy-Ramanujan formula, results on Waring's problem and Vinogradov's three-primes theorem.
See [Chapter 16](16-Partitions.md#165-the-size-of-pn-hardy-and-ramanujan).

**Class field theory**
The theory, completed by Takagi and Artin, describing how primes split in a number field with abelian Galois group by congruence conditions. It is the abelian case of the Langlands programme.
See [Chapter 21](21-Where-Number-Theory-Goes.md#211-the-langlands-programme-the-number-theory-side).

**Class number**
The order $h_K$ of the ideal class group of a number field. It is 1 exactly when the ring of integers has unique factorization, and it is always finite.
See [Chapter 17](17-Algebraic-Number-Theory.md#174-the-class-number).

**Class number formula**
A formula expressing $L(1, \chi)$ for a real character, or more generally the residue of the Dedekind zeta function, through the class number, the regulator and the discriminant. Dirichlet used it to prove $L(1, \chi) \ne 0$ for real characters.
See [Chapter 17](17-Algebraic-Number-Theory.md#174-the-class-number).

**Collatz problem**
Start with $n$; if it is even halve it, if odd replace it by $3n + 1$. The open question is whether every start eventually reaches 1.
See [Chapter 1](01-Divisibility.md#11-what-number-theory-asks).

**Compact**
A space in which every sequence has a convergent subsequence. The $p$-adic integers $\mathbb{Z}_p$ are compact.
See [Chapter 18](18-p-adic-Numbers.md#182-the-p-adic-numbers-mathbbq_p).

**Complete**
A space with a distance in which every Cauchy sequence converges. $\mathbb{R}$ and $\mathbb{Q}_p$ are complete; $\mathbb{Q}$ is not.
See [Chapter 18](18-p-adic-Numbers.md#182-the-p-adic-numbers-mathbbq_p).

**Complete residue system**
A set of $n$ integers containing exactly one member of each residue class modulo $n$, such as $\{0, 1, \ldots, n - 1\}$.
See [Chapter 4](04-Congruences.md#41-clock-arithmetic).

**Completed zeta function**
The function $\xi(s) = \pi^{-s/2}\Gamma(s/2)\zeta(s)$, which satisfies the functional equation $\xi(s) = \xi(1 - s)$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Completely multiplicative**
An arithmetic function with $f(mn) = f(m)f(n)$ for all $m$ and $n$, coprime or not, such as $n^2$ or a Dirichlet character.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#62-multiplicative-functions).

**Completion**
The complete space obtained from $\mathbb{Q}$ by adding limits of all Cauchy sequences for an absolute value. The completion for the usual absolute value is $\mathbb{R}$, and for $|\cdot|_p$ it is $\mathbb{Q}_p$.
See [Chapter 18](18-p-adic-Numbers.md#182-the-p-adic-numbers-mathbbq_p).

**Composite**
An integer $n > 1$ that is not prime, so that $n = ab$ with $1 < a, b < n$.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#21-primes-and-the-sieve-of-eratosthenes).

**Composition**
A way of writing $n$ as an ordered sum of positive integers, so that $3 + 1$ and $1 + 3$ count as different. There are $2^{n-1}$ compositions of $n$.
See [Chapter 16](16-Partitions.md#161-partitions-and-ferrers-diagrams).

**Conductor (of a character)**
The smallest modulus $d$ from which a Dirichlet character comes. A character whose conductor is its own modulus is primitive.
See [Chapter 15](15-Primes-in-Progressions.md#152-characters-mod-n).

**Conductor (of an elliptic curve)**
A positive integer $N_E$ built from the primes of bad reduction of an elliptic curve. By modularity it is the level of the matching modular form.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#203-the-frey-curve-ribet-and-taniyama-shimura).

**Congruence**
The statement $a \equiv b \pmod n$, meaning $n \mid a - b$: $a$ and $b$ leave the same remainder on division by $n$. Gauss introduced the notation in 1801.
See [Chapter 4](04-Congruences.md#41-clock-arithmetic).

**Congruent number**
A positive integer that is the area of a right triangle whose three sides are rational, such as 6 (sides 3, 4, 5) or 5. $n$ is congruent exactly when the elliptic curve $y^2 = x^3 - n^2 x$ has positive rank.
See [Chapter 19](19-Elliptic-Curves.md#195-the-congruent-number-problem).

**Conic**
A curve of degree 2. A conic with rational coefficients and one rational point has infinitely many, all found by lines through that point.
See [Chapter 19](19-Elliptic-Curves.md#191-rational-points-on-a-conic-and-on-a-cubic).

**Conjugate (of a partition)**
The partition read from the columns of a Ferrers diagram instead of its rows. Conjugation shows that "at most $k$ parts" and "largest part at most $k$" give equal counts.
See [Chapter 16](16-Partitions.md#161-partitions-and-ferrers-diagrams).

**Conjugate (of a quadratic number)**
For $\alpha = x + y\sqrt d$, the number $\bar\alpha = x - y\sqrt d$, the other root of the same quadratic.
See [Chapter 9](09-Diophantine-Equations.md#93-pells-equation).

**Continued fraction**
An expression $a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cdots}}$ with integer partial quotients, written $[a_0; a_1, a_2, \ldots]$. It is finite exactly for rational numbers.
See [Chapter 10](10-Continued-Fractions.md#101-the-algorithm).

**Convergent**
The fraction $p_n/q_n = [a_0; a_1, \ldots, a_n]$ got by stopping a continued fraction after $n$ steps. Convergents satisfy $p_n q_{n-1} - p_{n-1} q_n = \pm 1$ and approximate $x$ to within $1/q_n^2$.
See [Chapter 10](10-Continued-Fractions.md#102-convergents-and-their-properties).

**Coprime**
Integers $a$ and $b$ with $\gcd(a, b) = 1$, also called relatively prime. A list is pairwise coprime if every two of its members are coprime.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#31-the-gcd-and-the-lcm).

**Cramér's conjecture**
The conjecture that the gap after a prime $p$ is at most about $(\ln p)^2$. It is suggested by a random model of the primes and is open.
See [Chapter 13](13-How-Primes-Are-Spread.md#136-gaps-between-primes).

**Crank**
A statistic of partitions found by Andrews and Garvan in 1988, after Dyson predicted it, that splits the partitions of $11n + 6$ into 11 equal classes and so explains all three of Ramanujan's congruences.
See [Chapter 16](16-Partitions.md#164-ramanujans-congruences).

**Critical line**
The line $\operatorname{Re} s = \frac12$, about which the nontrivial zeros of $\zeta$ are symmetric. The Riemann hypothesis says they all lie on it.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Critical strip**
The strip $0 \le \operatorname{Re} s \le 1$ of the complex plane, which contains all the nontrivial zeros of $\zeta$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Cusp form**
A modular form whose $q$-expansion has constant term 0, so that it vanishes at infinity. The discriminant form $\Delta$ is the first example, of weight 12.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Cyclotomic field**
The number field $\mathbb{Q}(\zeta_m)$ generated by $\zeta_m = e^{2\pi i/m}$, of degree $\varphi(m)$. Kummer used the fields $\mathbb{Q}(\zeta_p)$ to attack Fermat's last theorem.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Cyclotomic polynomial**
The minimal polynomial $\Phi_n(x)$ of a primitive $n$-th root of unity, of degree $\varphi(n)$. Its prime divisors give an elementary proof that there are infinitely many primes $\equiv 1 \pmod n$.
See [Chapter 15](15-Primes-in-Progressions.md#151-dirichlets-theorem).

## D

**Dedekind domain**
A ring, like the ring of integers of a number field, that is Noetherian, integrally closed and in which every nonzero prime ideal is maximal. In it every nonzero ideal factors uniquely into prime ideals.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Deficient number**
A positive integer $n$ with $\sigma(n) < 2n$. All primes and prime powers are deficient.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#63-perfect-numbers).

**Degree (of a number field)**
The dimension $n = [K : \mathbb{Q}]$ of a number field $K$ as a vector space over $\mathbb{Q}$. Quadratic fields have degree 2.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Dense**
A subset is dense if every point is a limit of points of the subset. $\mathbb{Q}$ is dense in $\mathbb{R}$ and in each $\mathbb{Q}_p$.
See [Chapter 18](18-p-adic-Numbers.md#182-the-p-adic-numbers-mathbbq_p).

**Descent**
See Infinite descent.
See [Chapter 9](09-Diophantine-Equations.md#92-fermats-descent).

**Diffie-Hellman key exchange**
The 1976 method by which two people agree on a secret over an open line: Alice sends $g^a$, Bob sends $g^b$, and both compute $g^{ab}$. Its security rests on the difficulty of the discrete logarithm problem.
See [Chapter 7](07-Primitive-Roots.md#76-discrete-logarithms-and-diffie-hellman).

**Digits**
The coefficients $d_i$, with $0 \le d_i < b$, in a base-$b$ representation $n = (d_k \ldots d_1 d_0)_b$.
See [Chapter 1](01-Divisibility.md#15-number-bases).

**Diophantine equation**
An equation for which only integer (or sometimes rational) solutions are wanted, named after Diophantus of Alexandria.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#34-linear-diophantine-equations).

**Diophantine set**
A set of positive integers $a$ defined by the solvability of $P(a, x_1, \ldots, x_m) = 0$ in non-negative integers, for a fixed integer polynomial $P$. The MRDP theorem says these are exactly the listable sets.
See [Chapter 9](09-Diophantine-Equations.md#95-hilberts-tenth-problem).

**Dirichlet character**
A function $\chi$ on the integers that is periodic modulo $n$, completely multiplicative, and zero exactly on numbers not coprime to $n$. Its values are 0 or roots of unity, and there are $\varphi(n)$ characters modulo $n$.
See [Chapter 15](15-Primes-in-Progressions.md#152-characters-mod-n).

**Dirichlet convolution**
The product $(f * g)(n) = \sum_{d \mid n} f(d)\, g(n/d)$ of two arithmetic functions. It is commutative and associative with identity $\varepsilon$, and matches the product of Dirichlet series.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#65-dirichlet-convolution).

**Dirichlet $L$-function**
The series $L(s, \chi) = \sum_{n \ge 1} \chi(n) n^{-s}$ for a Dirichlet character $\chi$, which has an Euler product over primes. Dirichlet's theorem comes down to showing $L(1, \chi) \ne 0$ for $\chi \ne \chi_0$.
See [Chapter 15](15-Primes-in-Progressions.md#153-l-functions).

**Dirichlet series**
A series $\sum_{n \ge 1} f(n)/n^s$ attached to an arithmetic function $f$. Multiplying two Dirichlet series corresponds to the Dirichlet convolution of their coefficients.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#65-dirichlet-convolution).

**Dirichlet's approximation theorem**
For every irrational $x$ there are infinitely many fractions $p/q$ with $|x - p/q| < 1/q^2$ (Dirichlet, 1842). It follows from the pigeonhole principle.
See [Chapter 10](10-Continued-Fractions.md#106-how-well-can-numbers-be-approximated).

**Dirichlet's theorem**
Every arithmetic progression $a, a + n, a + 2n, \ldots$ with $\gcd(a, n) = 1$ contains infinitely many primes (Dirichlet, 1837). The primes are in fact spread evenly among the $\varphi(n)$ classes.
See [Chapter 15](15-Primes-in-Progressions.md#151-dirichlets-theorem).

**Dirichlet's unit theorem**
The unit group of the ring of integers of a number field of signature $(r_1, r_2)$ is $\mu_K \times \mathbb{Z}^{r_1 + r_2 - 1}$: finitely many roots of unity times $r_1 + r_2 - 1$ fundamental units.
See [Chapter 17](17-Algebraic-Number-Theory.md#175-units-and-dirichlets-unit-theorem).

**Discrete logarithm**
For a primitive root $g$ modulo $p$, the exponent $k$ (taken modulo $p - 1$) with $g^k \equiv a$, also called the index of $a$. It turns multiplication into addition, as an ordinary logarithm does.
See [Chapter 7](07-Primitive-Roots.md#74-index-arithmetic-the-discrete-logarithm).

**Discrete logarithm problem**
Given $g$ and $g^k$ in a group, find $k$. No fast method is known for well-chosen large primes or elliptic curves, which is what Diffie-Hellman relies on.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#126-discrete-logarithms-and-elliptic-curves).

**Discriminant form**
The cusp form $\Delta(z) = q\prod_{n \ge 1}(1 - q^n)^{24}$ of weight 12, whose coefficients are Ramanujan's tau function.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Discriminant (of a number field)**
The integer $d_K = \det(\sigma_i(\omega_j))^2$ built from an integral basis and the embeddings. For $\mathbb{Q}(\sqrt d)$ it is $d$ if $d \equiv 1 \pmod 4$ and $4d$ otherwise; the primes dividing it are those that ramify.
See [Chapter 17](17-Algebraic-Number-Theory.md#172-the-integers-of-a-quadratic-field).

**Discriminant (of an elliptic curve)**
The number $\Delta = -16(4a^3 + 27b^2)$ for $y^2 = x^3 + ax + b$. It is nonzero exactly when the curve has no singular points.
See [Chapter 19](19-Elliptic-Curves.md#191-rational-points-on-a-conic-and-on-a-cubic).

**Divides**
An integer $a$ divides $b$, written $a \mid b$, if $b = ak$ for some integer $k$. Then $a$ is a divisor (or factor) of $b$ and $b$ is a multiple of $a$; $a \mid b$ is a statement, not a number.
See [Chapter 1](01-Divisibility.md#12-divides-multiples-and-the-divisibility-rules).

**Divisibility rules**
Tests for divisibility by small numbers from the digits: by 3 or 9 through the digit sum, by 11 through the alternating digit sum, by 2, 4, 5, 8 and 10 through the last digits. They all follow from congruences such as $10 \equiv 1 \pmod 9$.
See [Chapter 1](01-Divisibility.md#12-divides-multiples-and-the-divisibility-rules).

**Division algorithm**
For integers $a$ and $b > 0$ there are unique integers $q$ (the quotient) and $r$ (the remainder) with $a = bq + r$ and $0 \le r < b$.
See [Chapter 1](01-Divisibility.md#13-the-division-algorithm).

**Divisor**
See Divides.
See [Chapter 1](01-Divisibility.md#12-divides-multiples-and-the-divisibility-rules).

**Divisor function**
The function $\tau(n)$, the number of positive divisors of $n$ (also written $d(n)$). It is multiplicative, with $\tau(p^a) = a + 1$.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#62-multiplicative-functions).

## E

**Eisenstein series**
The modular form $G_k(z) = \sum_{(m, n) \ne (0, 0)} (mz + n)^{-k}$ of weight $k$, for even $k \ge 4$, usually normalised as $E_k$ with constant term 1. Its $q$-expansion coefficients are divisor sums $\sigma_{k-1}(n)$.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Elementary proof**
A proof of the prime number theorem without complex analysis, found by Selberg and Erdős in 1948.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#144-the-prime-number-theorem).

**Elliptic curve**
A curve $y^2 = x^3 + ax + b$ with $4a^3 + 27b^2 \ne 0$, together with a point at infinity $O$. Its points form an abelian group under the chord-and-tangent law.
See [Chapter 19](19-Elliptic-Curves.md#191-rational-points-on-a-conic-and-on-a-cubic).

**Elliptic curve cryptography**
Public-key cryptography in the group of points of an elliptic curve over a large finite field, resting on the difficulty of finding $k$ from $P$ and $kP$. It needs much shorter keys than RSA for the same security.
See [Chapter 19](19-Elliptic-Curves.md#194-curves-over-finite-fields).

**Elliptic curve method**
Lenstra's 1985 factoring method, which replaces the group $(\mathbb{Z}/p\mathbb{Z})^\times$ in Pollard's $p - 1$ method by the points of a random elliptic curve. It is best at finding medium-sized prime factors.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#124-factoring).

**Embedding**
A field homomorphism from a number field into $\mathbb{C}$. A field $\mathbb{Q}(\alpha)$ of degree $n$ has exactly $n$ of them, sending $\alpha$ to each root of its minimal polynomial.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Equivalence relation**
A relation that is reflexive, symmetric and transitive, such as congruence modulo $n$. It splits a set into disjoint classes.
See [Chapter 4](04-Congruences.md#41-clock-arithmetic).

**Equivalent absolute values**
Two absolute values that define the same convergent sequences, or equivalently one is a positive power of the other.
See [Chapter 18](18-p-adic-Numbers.md#184-ostrowskis-theorem).

**Equivalent ideals**
Nonzero ideals $I$, $J$ with $\alpha I = \beta J$ for some nonzero $\alpha$, $\beta$ in the ring of integers. The classes form the ideal class group.
See [Chapter 17](17-Algebraic-Number-Theory.md#174-the-class-number).

**Erdős-Straus conjecture**
Every $4/n$ with $n \ge 2$ is a sum of three unit fractions $1/x + 1/y + 1/z$. It is open.
See [Chapter 21](21-Where-Number-Theory-Goes.md#216-open-problems).

**Euclid-Euler theorem**
If $2^p - 1$ is prime then $2^{p-1}(2^p - 1)$ is perfect, and every even perfect number has this form.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#63-perfect-numbers).

**Euclid's algorithm**
Finding $\gcd(a, b)$ by repeated division: replace $(a, b)$ by $(b, r)$ where $r$ is the remainder, until the remainder is 0; the last nonzero remainder is the gcd. It is fast, taking a number of steps at most about five times the number of digits (Lamé).
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#32-euclids-algorithm).

**Euclid's lemma**
If a prime $p$ divides a product $ab$, then $p \mid a$ or $p \mid b$. It is the key step in the uniqueness of prime factorization.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#23-the-fundamental-theorem-of-arithmetic).

**Euler product**
The factorization of a Dirichlet series of a multiplicative function into a product over primes, above all $\zeta(s) = \prod_p (1 - p^{-s})^{-1}$ for $\operatorname{Re} s > 1$. It is the analytic form of unique factorization.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#141-the-harmonic-series-and-eulers-product).

**Euler's constant**
The limit $\gamma = \lim_{N \to \infty} (H_N - \ln N) = 0.5772\ldots$. Whether it is irrational is unknown.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#141-the-harmonic-series-and-eulers-product).

**Euler's criterion**
For an odd prime $p$, $\left(\frac ap\right) \equiv a^{(p-1)/2} \pmod p$. So $a$ is a quadratic residue exactly when $a^{(p-1)/2} \equiv 1$.
See [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md#82-the-legendre-symbol-and-eulers-criterion).

**Euler's four-square identity**
The identity writing $(a^2 + b^2 + c^2 + d^2)(e^2 + f^2 + g^2 + h^2)$ as a sum of four squares. It reduces Lagrange's four-square theorem to primes.
See [Chapter 11](11-Sums-of-Squares.md#114-four-squares).

**Euler's phi function**
The number $\varphi(n)$ of $k$ in $1, \ldots, n$ with $\gcd(k, n) = 1$, which is the number of units modulo $n$. It is multiplicative, with $\varphi(p^a) = p^a - p^{a-1}$ and $\varphi(n) = n\prod_{p \mid n}(1 - 1/p)$.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#52-eulers-theorem-and-the-phi-function).

**Euler's theorem**
If $\gcd(a, n) = 1$ then $a^{\varphi(n)} \equiv 1 \pmod n$ (Euler, 1763). For prime $n$ it is Fermat's little theorem.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#52-eulers-theorem-and-the-phi-function).

**Even**
An integer $n$ with $2 \mid n$, that is $n = 2k$.
See [Chapter 1](01-Divisibility.md#14-even-and-odd-and-other-remainder-arguments).

**Explicit formula**
Riemann's formula $\psi(x) = x - \sum_\rho x^\rho/\rho - \log 2\pi - \frac12\log(1 - x^{-2})$, which writes the prime count as a main term minus one wave per zero of $\zeta$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Extended Euclidean algorithm**
Euclid's algorithm run while keeping track of each remainder as a combination $ax + by$, so that it ends with Bézout coefficients for $\gcd(a, b)$. It is how inverses modulo $n$ are computed.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#33-bezouts-identity-and-the-extended-algorithm).

## F

**Factor base**
A set of small primes used in sieve factoring methods: collect many numbers that factor completely over it, then combine them by linear algebra modulo 2 into a congruence of squares.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#124-factoring).

**Fast powering**
Computing $a^k \bmod n$ by repeated squaring, reading $k$ in binary and reducing after every multiplication. It takes about $2\log_2 k$ multiplications.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#54-fast-powering).

**Fermat number**
A number $F_n = 2^{2^n} + 1$. $F_0, \ldots, F_4$ are prime, $F_5 = 641 \cdot 6700417$ is not, and no other Fermat prime is known. Distinct Fermat numbers are coprime.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#26-mersenne-and-fermat-primes).

**Fermat prime**
A prime of the form $2^m + 1$, which forces $m$ to be a power of 2. A regular $n$-gon is constructible by ruler and compass exactly when $n$ is a power of 2 times distinct Fermat primes.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#26-mersenne-and-fermat-primes).

**Fermat pseudoprime**
A composite $n$ with $a^{n-1} \equiv 1 \pmod n$, which passes the Fermat test to base $a$. The smallest to base 2 is $341 = 11 \cdot 31$.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#55-pseudoprimes-and-carmichael-numbers).

**Fermat test**
Pick $a$ and compute $a^{n-1} \bmod n$; if it is not 1, $n$ is certainly composite, and $a$ is a Fermat witness. It proves compositeness without finding a factor, but Carmichael numbers fool it.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#51-fermats-little-theorem).

**Fermat's factoring method**
Look for $x$ with $x^2 - n$ a perfect square $y^2$, so that $n = (x - y)(x + y)$. It is fast when $n$ has two factors close to $\sqrt n$.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#124-factoring).

**Fermat's last theorem**
For $n \ge 3$ the equation $x^n + y^n = z^n$ has no solution in positive integers. Fermat claimed it around 1637; Wiles, with Taylor, proved it in 1994-95 through the modularity of semistable elliptic curves.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#201-fermats-claim-and-350-years).

**Fermat's little theorem**
If $p$ is prime and $p \nmid a$, then $a^{p-1} \equiv 1 \pmod p$; equivalently $a^p \equiv a$ for every $a$.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#51-fermats-little-theorem).

**Fermat's two-square theorem**
An odd prime $p$ is a sum of two squares if and only if $p \equiv 1 \pmod 4$. The chapter gives several proofs, including Zagier's one-sentence proof.
See [Chapter 11](11-Sums-of-Squares.md#111-which-numbers-are-sums-of-two-squares).

**Ferrers diagram**
A picture of a partition as left-aligned rows of dots, one row per part, longest on top.
See [Chapter 16](16-Partitions.md#161-partitions-and-ferrers-diagrams).

**Fibonacci numbers**
The numbers $F_1 = F_2 = 1$, $F_{k+1} = F_k + F_{k-1}$. Consecutive Fibonacci numbers are the worst case for Euclid's algorithm.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#32-euclids-algorithm).

**Field**
A ring in which every nonzero element has a multiplicative inverse. $\mathbb{Z}/n\mathbb{Z}$ is a field exactly when $n$ is prime.
See [Chapter 4](04-Congruences.md#43-inverses-modulo-n).

**Fixed point**
An element $s$ with $f(s) = s$. For an involution on a finite set, the number of fixed points has the same parity as the size of the set, which is the engine of Zagier's proof.
See [Chapter 11](11-Sums-of-Squares.md#111-which-numbers-are-sums-of-two-squares).

**Floor**
The largest integer at most $x$, written $\lfloor x \rfloor$. The quotient in the division algorithm is $\lfloor a/b \rfloor$.
See [Chapter 1](01-Divisibility.md#13-the-division-algorithm).

**Formal power series**
An expression $\sum a_n x^n$ treated as a list of coefficients, added and multiplied like polynomials, without asking whether it converges. Generating functions for partitions are formal power series.
See [Chapter 16](16-Partitions.md#162-generating-functions-and-eulers-odd-distinct-theorem).

**Franklin's involution**
Franklin's 1881 bijection, moving the base or the slope of a Ferrers diagram, that pairs up partitions into an even and an odd number of distinct parts. It proves Euler's pentagonal number theorem.
See [Chapter 16](16-Partitions.md#163-the-pentagonal-number-theorem).

**Frey curve**
The elliptic curve $y^2 = x(x - a^p)(x + b^p)$ built from a supposed solution $a^p + b^p = c^p$. Ribet showed it cannot be modular, so modularity rules the solution out.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#203-the-frey-curve-ribet-and-taniyama-shimura).

**Frobenius map**
The map $(x, y) \mapsto (x^p, y^p)$ on the points of a curve over $\overline{\mathbb{F}}_p$. Its fixed points are the points over $\mathbb{F}_p$, which is how Hasse's theorem is proved.
See [Chapter 19](19-Elliptic-Curves.md#194-curves-over-finite-fields).

**Frobenius number**
The largest amount $ab - a - b$ that cannot be paid with coins of coprime values $a$ and $b$ (Sylvester, 1884). Exactly $(a - 1)(b - 1)/2$ amounts cannot be paid.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#35-the-coin-problem).

**Functional equation**
The symmetry $\xi(s) = \xi(1 - s)$ of the completed zeta function. It extends $\zeta$ to all of $\mathbb{C}$ and forces its zeros to be symmetric about the critical line.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Fundamental domain**
A region of the upper half-plane containing one point of each orbit of the modular group (apart from the boundary): $|\operatorname{Re} z| \le \frac12$, $|z| \ge 1$.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Fundamental solution**
The smallest solution $\varepsilon = x_1 + y_1\sqrt d > 1$ of Pell's equation. Every solution is $\pm\varepsilon^k$ for an integer $k$.
See [Chapter 9](09-Diophantine-Equations.md#93-pells-equation).

**Fundamental theorem of arithmetic**
Every integer $n \ge 2$ is a product of primes, and the factorization is unique apart from the order of the factors.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#23-the-fundamental-theorem-of-arithmetic).

**Fundamental unit**
A unit of infinite order that generates the units of a ring of integers up to roots of unity, such as $1 + \sqrt2$ in $\mathbb{Z}[\sqrt2]$. A real quadratic field has one; in general there are $r_1 + r_2 - 1$.
See [Chapter 17](17-Algebraic-Number-Theory.md#175-units-and-dirichlets-unit-theorem).

## G

**Gamma function**
The function $\Gamma(s) = \int_0^\infty t^{s-1}e^{-t}\,dt$ extending the factorial, $\Gamma(n) = (n - 1)!$. It has simple poles at $0, -1, -2, \ldots$ and enters the functional equation of $\zeta$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Gauss circle problem**
The question of how close the number of lattice points with $a^2 + b^2 \le N$ is to $\pi N$. The error is known to be much smaller than $\sqrt N$, but the true size is open.
See [Chapter 11](11-Sums-of-Squares.md#112-the-view-from-the-gaussian-integers).

**Gaussian integers**
The complex numbers $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$. They have a division algorithm, hence unique factorization, with units $\pm 1$, $\pm i$ and norm $N(a + bi) = a^2 + b^2$.
See [Chapter 11](11-Sums-of-Squares.md#112-the-view-from-the-gaussian-integers).

**Gaussian prime**
A prime of $\mathbb{Z}[i]$. Up to units these are $1 + i$, the ordinary primes $q \equiv 3 \pmod 4$, and the two factors $a \pm bi$ of each prime $p = a^2 + b^2 \equiv 1 \pmod 4$.
See [Chapter 11](11-Sums-of-Squares.md#112-the-view-from-the-gaussian-integers).

**Gauss's class number problem**
Gauss's conjectures on the class numbers of quadratic fields. The imaginary quadratic fields with class number 1 are exactly the nine with $d = -1, -2, -3, -7, -11, -19, -43, -67, -163$ (Heegner, Baker, Stark).
See [Chapter 17](17-Algebraic-Number-Theory.md#176-gausss-class-number-problem).

**Gauss's lemma**
For an odd prime $p \nmid a$, reduce $a, 2a, \ldots, \frac{p-1}{2}a$ modulo $p$ and let $n$ be the number landing above $p/2$; then $\left(\frac ap\right) = (-1)^n$.
See [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md#83-gausss-lemma-and-the-two-supplements).

**gcd**
See Greatest common divisor.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#31-the-gcd-and-the-lcm).

**Generalised Fermat equation**
The equation $Ax^p + By^q = Cz^r$, most often $x^p + y^q = z^r$. Its behaviour depends on the sign of $\chi = \frac1p + \frac1q + \frac1r - 1$.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#205-what-remains-generalised-fermat-equations).

**Generalised Riemann hypothesis**
The statement that the nontrivial zeros of every Dirichlet $L$-function lie on the line $\operatorname{Re} s = \frac12$. Many results, such as fast deterministic primality tests and Artin's conjecture, are proved assuming it.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#145-the-riemann-hypothesis-and-what-it-would-give).

**Generating function**
A power series $\sum a_n x^n$ whose coefficients are a sequence of counts. The partition numbers have $\sum p(n)x^n = \prod_{k \ge 1}(1 - x^k)^{-1}$.
See [Chapter 16](16-Partitions.md#162-generating-functions-and-eulers-odd-distinct-theorem).

**Geometry of numbers**
Minkowski's method of counting lattice points in convex bodies, used to bound the norms of ideals and to prove that the class number is finite.
See [Chapter 17](17-Algebraic-Number-Theory.md#174-the-class-number).

**Goldbach's conjecture**
Every even number greater than 2 is the sum of two primes (the strong or binary form). The weak form, that every odd number greater than 5 is a sum of three primes, was proved by Helfgott in 2013.
See [Chapter 21](21-Where-Number-Theory-Goes.md#213-goldbachs-conjecture).

**Good reduction**
A prime $p$ not dividing the discriminant of an elliptic curve, so that the curve reduced modulo $p$ is again an elliptic curve.
See [Chapter 19](19-Elliptic-Curves.md#194-curves-over-finite-fields).

**Greatest common divisor**
The largest integer $\gcd(a, b)$ dividing both $a$ and $b$ (not both 0). It is the smallest positive integer combination $ax + by$, and every common divisor divides it.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#31-the-gcd-and-the-lcm).

**Green-Tao theorem**
For every $k$ there are infinitely many arithmetic progressions of $k$ primes (Green and Tao, 2004).
See [Chapter 15](15-Primes-in-Progressions.md#155-the-green-tao-theorem).

**Gregorian calendar**
The calendar of 1582, with $365 + 97/400 = 365.2425$ days a year on average: leap years every 4 years except three centuries in four.
See [Chapter 10](10-Continued-Fractions.md#107-calendars-and-gears).

## H

**Hardy-Ramanujan formula**
The asymptotic formula $p(n) \sim \frac{1}{4n\sqrt3}e^{\pi\sqrt{2n/3}}$ for the partition numbers (1918). Rademacher's exact series grew from it.
See [Chapter 16](16-Partitions.md#165-the-size-of-pn-hardy-and-ramanujan).

**Harmonic number**
The partial sum $H_N = 1 + \frac12 + \cdots + \frac1N$. It grows like $\ln N + \gamma$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#141-the-harmonic-series-and-eulers-product).

**Hasse principle**
See Local-global principle.
See [Chapter 18](18-p-adic-Numbers.md#185-local-global-the-hasse-minkowski-theorem).

**Hasse-Minkowski theorem**
A quadratic form over $\mathbb{Q}$ represents zero over $\mathbb{Q}$ if and only if it does over $\mathbb{R}$ and over every $\mathbb{Q}_p$. It is the model case of the local-global principle.
See [Chapter 18](18-p-adic-Numbers.md#185-local-global-the-hasse-minkowski-theorem).

**Hasse's theorem**
For an elliptic curve over $\mathbb{F}_p$, $|p + 1 - \#E(\mathbb{F}_p)| \le 2\sqrt p$ (1933). It is the Riemann hypothesis for elliptic curves over finite fields.
See [Chapter 19](19-Elliptic-Curves.md#194-curves-over-finite-fields).

**Heegner points**
Special points on elliptic curves coming from imaginary quadratic fields, first used in Heegner's solution of the class number 1 problem and later in the work of Gross, Zagier and Kolyvagin on Birch and Swinnerton-Dyer.
See [Chapter 17](17-Algebraic-Number-Theory.md#176-gausss-class-number-problem).

**Height**
A measure of the size of a rational point, roughly the number of digits of its coordinates. On an elliptic curve the height of $nP$ grows like $n^2$.
See [Chapter 19](19-Elliptic-Curves.md#192-the-group-law).

**Hensel's lemma**
If $f(a) \equiv 0 \pmod p$ and $f'(a) \not\equiv 0 \pmod p$, then $f$ has a unique root in $\mathbb{Z}_p$ congruent to $a$. Newton's method lifts the root, doubling the number of correct digits at each step.
See [Chapter 18](18-p-adic-Numbers.md#183-hensels-lemma).

**Hexadecimal**
Base 16, with digits 0 to 9 and A to F for 10 to 15.
See [Chapter 1](01-Divisibility.md#15-number-bases).

**Hilbert's tenth problem**
Hilbert's 1900 request for a general method to decide whether a polynomial equation with integer coefficients has an integer solution. The MRDP theorem (1970) shows no such method exists.
See [Chapter 9](09-Diophantine-Equations.md#95-hilberts-tenth-problem).

**Holomorphic at infinity**
Of a function on the upper half-plane: staying bounded as $\operatorname{Im} z \to \infty$, so that its $q$-expansion has no negative powers of $q$. It is one of the conditions in the definition of a modular form.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Horner's rule**
Converting a numeral to a number by reading the digits from left to right, multiplying by the base and adding the next digit.
See [Chapter 1](01-Divisibility.md#15-number-bases).

**Hundred fowls problem**
A fifth-century Chinese puzzle from Zhang Qiujian: buy a hundred birds for a hundred coins at given prices. It is a pair of linear Diophantine equations with several non-negative solutions.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#34-linear-diophantine-equations).

**Hurwitz's theorem**
Every irrational $x$ has infinitely many fractions with $|x - p/q| < 1/(\sqrt5\,q^2)$, and $\sqrt5$ cannot be replaced by any larger constant, because of the golden ratio (1891).
See [Chapter 10](10-Continued-Fractions.md#106-how-well-can-numbers-be-approximated).

**Hyperbola method**
Dirichlet's trick for sums over pairs $de \le x$: count the pairs with $d \le \sqrt x$ and those with $e \le \sqrt x$, and subtract the overlap. It gives $\sum_{n \le x}\tau(n) = x\ln x + O(x)$.
See [Chapter 15](15-Primes-in-Progressions.md#154-the-proof-why-l1-chi-ne-0).

## I

**Ideal**
A subgroup $I$ of a commutative ring $R$ closed under multiplication by every element of $R$. Kummer's "ideal numbers" became Dedekind's ideals, which restore unique factorization in rings of integers.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Ideal class group**
The group $\mathrm{Cl}(K)$ of classes of nonzero ideals of $\mathcal{O}_K$ under equivalence, with multiplication of ideals. It is finite, and trivial exactly when $\mathcal{O}_K$ has unique factorization.
See [Chapter 17](17-Algebraic-Number-Theory.md#174-the-class-number).

**Imaginary quadratic field**
A quadratic field $\mathbb{Q}(\sqrt d)$ with $d < 0$. Its unit group is finite.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Inclusion-exclusion**
Counting the members of a union by adding the sizes of the sets, subtracting the pairwise overlaps, adding the triple overlaps, and so on. Möbius inversion is a compact form of it.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#64-the-mobius-function-and-inversion).

**Index**
See Discrete logarithm.
See [Chapter 7](07-Primitive-Roots.md#74-index-arithmetic-the-discrete-logarithm).

**Index calculus**
A method for discrete logarithms: find the logarithms of a factor base of small primes by linear algebra, then reduce any other number to them. It makes discrete logarithms modulo $p$ much easier than on elliptic curves.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#126-discrete-logarithms-and-elliptic-curves).

**Ineffective**
A proof is ineffective when it shows something is finite or bounded without giving any way to compute the bound. Siegel's theorem on class numbers and Faltings's theorem are examples.
See [Chapter 15](15-Primes-in-Progressions.md#154-the-proof-why-l1-chi-ne-0).

**Inert**
A prime $p$ is inert in a quadratic field when $(p)$ stays a prime ideal there, of norm $p^2$.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Infinite descent**
Fermat's method: show that any solution gives a strictly smaller positive one, so that by well-ordering there is none. It proves that $x^4 + y^4 = z^2$ has no solution in positive integers.
See [Chapter 9](09-Diophantine-Equations.md#92-fermats-descent).

**Integer**
A whole number that may be negative: $\ldots, -2, -1, 0, 1, 2, \ldots$, forming the set $\mathbb{Z}$.
See [Chapter 1](01-Divisibility.md#12-divides-multiples-and-the-divisibility-rules).

**Integer linear combination**
An expression $bx + cy$ with integers $x$ and $y$. Anything dividing $b$ and $c$ divides every such combination.
See [Chapter 1](01-Divisibility.md#12-divides-multiples-and-the-divisibility-rules).

**Integral basis**
Elements $\omega_1, \ldots, \omega_n$ of $\mathcal{O}_K$ such that every element of $\mathcal{O}_K$ is uniquely $a_1\omega_1 + \cdots + a_n\omega_n$ with integer $a_i$. For $\mathbb{Q}(\sqrt d)$ one is $1, \sqrt d$ or $1, \frac{1 + \sqrt d}{2}$.
See [Chapter 17](17-Algebraic-Number-Theory.md#172-the-integers-of-a-quadratic-field).

**Integrally closed**
A domain that contains every element of its field of fractions that is an algebraic integer. $\mathbb{Z}[\sqrt{-3}]$ is not; the ring of integers of a number field always is.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Inverse limit**
The construction $\mathbb{Z}_p = \varprojlim \mathbb{Z}/p^n\mathbb{Z}$: a $p$-adic integer is a sequence of residues modulo $p, p^2, p^3, \ldots$, each reducing to the one before.
See [Chapter 18](18-p-adic-Numbers.md#182-the-p-adic-numbers-mathbbq_p).

**Inverse modulo $n$**
A number $a'$ with $aa' \equiv 1 \pmod n$, written $a^{-1}$. It exists exactly when $\gcd(a, n) = 1$, and the extended Euclidean algorithm finds it.
See [Chapter 4](04-Congruences.md#43-inverses-modulo-n).

**Involution**
A map $f$ of a set to itself with $f(f(s)) = s$ for every $s$. It splits the set into pairs and fixed points.
See [Chapter 11](11-Sums-of-Squares.md#111-which-numbers-are-sums-of-two-squares).

**Irreducible element**
A nonzero non-unit that cannot be written as a product of two non-units. In $\mathbb{Z}[\sqrt{-5}]$, 2 is irreducible but not prime.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

## J

**Jacobi symbol**
For odd positive $n = p_1^{e_1}\cdots p_r^{e_r}$, the product $\left(\frac an\right) = \prod \left(\frac{a}{p_i}\right)^{e_i}$ of Legendre symbols. It obeys reciprocity, so it can be computed fast without factoring, but value 1 does not mean $a$ is a square modulo $n$.
See [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md#85-the-jacobi-symbol-and-computing).

**Jacobi's two-square formula**
The number $r_2(n)$ of ways to write $n$ as $a^2 + b^2$ with integers $a$, $b$ (order and signs counting) is $4(d_1(n) - d_3(n))$, where $d_i(n)$ counts the divisors of $n$ that are $\equiv i \pmod 4$.
See [Chapter 11](11-Sums-of-Squares.md#111-which-numbers-are-sums-of-two-squares).

**Julian calendar**
The calendar with a leap day every 4 years, $365.25$ days a year on average. It gains about three days every four centuries on the tropical year.
See [Chapter 10](10-Continued-Fractions.md#107-calendars-and-gears).

## K

**Korselt's criterion**
A composite $n$ is a Carmichael number if and only if it is squarefree and $p - 1 \mid n - 1$ for every prime $p \mid n$ (1899).
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#55-pseudoprimes-and-carmichael-numbers).

## L

**Lagrange's four-square theorem**
Every non-negative integer is a sum of four squares (Lagrange, 1770).
See [Chapter 11](11-Sums-of-Squares.md#114-four-squares).

**Lamé's theorem**
The number of division steps in Euclid's algorithm is at most five times the number of decimal digits of the smaller number (1844).
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#32-euclids-algorithm).

**Langlands programme**
A web of conjectures relating Galois representations, which carry the arithmetic of number fields, to automorphic representations, which generalise modular forms. Class field theory and the modularity theorem are cases of it.
See [Chapter 21](21-Where-Number-Theory-Goes.md#211-the-langlands-programme-the-number-theory-side).

**Lattice**
A grid $\{a_1\omega_1 + \cdots + a_n\omega_n : a_i \in \mathbb{Z}\}$ in $\mathbb{R}^n$. The ring of integers of a number field sits in $\mathbb{R}^n$ as a lattice.
See [Chapter 17](17-Algebraic-Number-Theory.md#172-the-integers-of-a-quadratic-field).

**Lattice points**
Points of the plane (or of space) with integer coordinates. Counting them proves quadratic reciprocity and bounds the size of sums of two squares.
See [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md#84-quadratic-reciprocity).

**lcm**
See Least common multiple.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#31-the-gcd-and-the-lcm).

**Least common multiple**
The smallest positive integer $\operatorname{lcm}(a, b)$ that both $a$ and $b$ divide. For positive $a$, $b$ it satisfies $\gcd(a, b)\operatorname{lcm}(a, b) = ab$.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#31-the-gcd-and-the-lcm).

**Legendre symbol**
For an odd prime $p$, $\left(\frac ap\right)$ is 1 if $a$ is a quadratic residue modulo $p$, $-1$ if a nonresidue, and 0 if $p \mid a$. It is completely multiplicative in $a$.
See [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md#82-the-legendre-symbol-and-eulers-criterion).

**Legendre's conjecture**
There is a prime between $n^2$ and $(n + 1)^2$ for every $n \ge 1$. It is open, even assuming the Riemann hypothesis.
See [Chapter 13](13-How-Primes-Are-Spread.md#133-bertrands-postulate).

**Legendre's formula**
The exponent of a prime $p$ in $m!$ is $\lfloor m/p \rfloor + \lfloor m/p^2 \rfloor + \lfloor m/p^3 \rfloor + \cdots$ (1808).
See [Chapter 13](13-How-Primes-Are-Spread.md#132-chebyshevs-bounds).

**Level**
The number $N$ in the subgroup $\Gamma_0(N)$ under which a modular form of level $N$ transforms. The modular form attached to an elliptic curve has level equal to the curve's conductor.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Level lowering**
Ribet's theorem that, under conditions, a Galois representation coming from a modular form of level $N$ comes from one of a smaller level. Applied to the Frey curve it would give a cusp form of weight 2 and level 2, which does not exist.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#203-the-frey-curve-ribet-and-taniyama-shimura).

**$L$-function of an elliptic curve**
The function $L(E, s) = \prod_p (1 - a_p p^{-s} + p^{1-2s})^{-1}$ (with modified factors at bad primes), where $a_p = p + 1 - \#E(\mathbb{F}_p)$. By modularity it extends to all of $\mathbb{C}$.
See [Chapter 19](19-Elliptic-Curves.md#196-the-birch-and-swinnerton-dyer-conjecture).

**Linear congruence**
A congruence $ax \equiv b \pmod n$. It is solvable exactly when $d = \gcd(a, n)$ divides $b$, and then it has $d$ solutions modulo $n$.
See [Chapter 4](04-Congruences.md#44-solving-linear-congruences).

**Linear Diophantine equation**
An equation $ax + by = c$ to be solved in integers. It has a solution exactly when $\gcd(a, b) \mid c$, and then all solutions are one particular solution plus multiples of $(b/g, -a/g)$.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#34-linear-diophantine-equations).

**Liouville's theorem**
An algebraic number $x$ of degree $d \ge 2$ satisfies $|x - p/q| > c/q^d$ for some $c > 0$ (1844). So a number approximated too well, like $\sum 10^{-k!}$, is transcendental.
See [Chapter 10](10-Continued-Fractions.md#106-how-well-can-numbers-be-approximated).

**Listable set**
A set of positive integers that a computer program can list (recursively enumerable). By the MRDP theorem the listable sets are exactly the Diophantine sets.
See [Chapter 9](09-Diophantine-Equations.md#95-hilberts-tenth-problem).

**Local field**
One of the completions $\mathbb{R}$ and $\mathbb{Q}_p$ of $\mathbb{Q}$, also called its places. Local questions ask about solutions in these fields.
See [Chapter 18](18-p-adic-Numbers.md#184-ostrowskis-theorem).

**Local-global principle**
The idea that an equation should have a rational solution when it has one in $\mathbb{R}$ and in every $\mathbb{Q}_p$. It holds for quadratic forms (Hasse-Minkowski) but fails for some cubics, such as Selmer's $3x^3 + 4y^3 + 5z^3 = 0$.
See [Chapter 18](18-p-adic-Numbers.md#185-local-global-the-hasse-minkowski-theorem).

**Logarithmic integral**
The function $\operatorname{li}(x) = \int_2^x dt/\ln t$, the best simple approximation to $\pi(x)$.
See [Chapter 13](13-How-Primes-Are-Spread.md#131-counting-primes).

**Lucas-Lehmer test**
For an odd prime $p$, set $s_0 = 4$ and $s_{i+1} = s_i^2 - 2$; then $2^p - 1$ is prime if and only if it divides $s_{p-2}$. It is why the largest known primes are Mersenne primes.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#26-mersenne-and-fermat-primes).

**Luhn algorithm**
The check-digit rule for credit card numbers: double every second digit moving left from the check digit, subtract 9 from any result above 9, and require a total divisible by 10.
See [Chapter 4](04-Congruences.md#45-check-digits).

## M

**Markov numbers**
The numbers $1, 2, 5, 13, 29, 34, 89, \ldots$ occurring in positive solutions of Markov's equation $x^2 + y^2 + z^2 = 3xyz$. All solutions grow from $(1, 1, 1)$ by Vieta jumping.
See [Chapter 9](09-Diophantine-Equations.md#94-markovs-equation-and-other-famous-equations).

**Markov uniqueness conjecture**
Each Markov number is the largest member of exactly one Markov triple, up to order. It is open.
See [Chapter 9](09-Diophantine-Equations.md#94-markovs-equation-and-other-famous-equations).

**Mason-Stothers theorem**
The abc theorem for polynomials: if $a + b = c$ with coprime polynomials, not all constant, then the degree of $c$ is less than the number of distinct roots of $abc$. It implies Fermat's last theorem for polynomials.
See [Chapter 21](21-Where-Number-Theory-Goes.md#212-the-abc-conjecture).

**Mazur's theorem**
The torsion subgroup of an elliptic curve over $\mathbb{Q}$ is one of fifteen groups: $\mathbb{Z}/n\mathbb{Z}$ for $n = 1, \ldots, 10, 12$, or $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2n\mathbb{Z}$ for $n = 1, \ldots, 4$.
See [Chapter 19](19-Elliptic-Curves.md#193-mordells-theorem-rank-and-torsion).

**Meissel-Mertens constant**
The constant $M \approx 0.2615$ in Mertens' estimate $\sum_{p \le x} 1/p = \ln\ln x + M + o(1)$.
See [Chapter 13](13-How-Primes-Are-Spread.md#135-mertens-theorems).

**Mersenne number**
A number $M_n = 2^n - 1$. If it is prime then $n$ is prime, but not conversely: $2^{11} - 1 = 23 \cdot 89$.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#26-mersenne-and-fermat-primes).

**Mersenne prime**
A prime of the form $2^p - 1$. They give all even perfect numbers, and almost every record prime since the 1950s has been one.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#26-mersenne-and-fermat-primes).

**Mertens' theorems**
Three estimates: $\sum_{p \le x} \frac{\ln p}{p} = \ln x + O(1)$, $\sum_{p \le x} \frac1p = \ln\ln x + M + o(1)$, and $\prod_{p \le x}(1 - 1/p) \sim e^{-\gamma}/\ln x$.
See [Chapter 13](13-How-Primes-Are-Spread.md#135-mertens-theorems).

**Meyer's theorem**
A quadratic form over $\mathbb{Q}$ in at least five variables that is indefinite represents zero (1884).
See [Chapter 18](18-p-adic-Numbers.md#185-local-global-the-hasse-minkowski-theorem).

**Miller-Rabin test**
A strengthening of the Fermat test: write $n - 1 = 2^s d$ and look at $a^d, a^{2d}, \ldots$ modulo $n$, which for a prime must start at 1 or pass through $-1$. At most a quarter of the bases lie for a composite $n$.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#122-the-fermat-and-millerrabin-tests).

**Minimal polynomial**
The unique monic polynomial of smallest degree with rational coefficients having $\alpha$ as a root. It is irreducible, and its degree is the degree of $\alpha$.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Minkowski bound**
Every ideal class of a number field contains an ideal of norm at most $\frac{n!}{n^n}\left(\frac4\pi\right)^{r_2}\sqrt{|d_K|}$. It makes the class group finite and computable.
See [Chapter 17](17-Algebraic-Number-Theory.md#174-the-class-number).

**Möbius function**
The function $\mu(n)$ equal to $(-1)^k$ if $n$ is a product of $k$ distinct primes and 0 if $n$ has a square factor. Its divisor sums are 1 for $n = 1$ and 0 otherwise.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#64-the-mobius-function-and-inversion).

**Möbius inversion**
If $g(n) = \sum_{d \mid n} f(d)$ for all $n$, then $f(n) = \sum_{d \mid n} \mu(d)\, g(n/d)$, and conversely. In convolution language, $\mu$ is the inverse of the constant function $\mathbf 1$.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#64-the-mobius-function-and-inversion).

**Möbius transformation**
The map $z \mapsto \frac{az + b}{cz + d}$ by which a matrix of $\mathrm{SL}_2(\mathbb{Z})$ acts on the upper half-plane.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Mod $p$ Galois representation**
The action of the absolute Galois group of $\mathbb{Q}$ on the points of order $p$ of an elliptic curve, a homomorphism to $\mathrm{GL}_2(\mathbb{F}_p)$ written $\bar\rho_{E,p}$. Ribet's level lowering is a statement about these.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#203-the-frey-curve-ribet-and-taniyama-shimura).

**Modular curve**
A curve such as $X_1(N)$ whose points classify elliptic curves with extra structure, for instance a point of order $N$. Mazur's theorem is proved by studying their rational points.
See [Chapter 19](19-Elliptic-Curves.md#193-mordells-theorem-rank-and-torsion).

**Modular form**
A holomorphic function on the upper half-plane with $f\left(\frac{az + b}{cz + d}\right) = (cz + d)^k f(z)$ for $\left(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right)$ in the modular group, and holomorphic at infinity; $k$ is its weight. The forms of each weight make a finite-dimensional space.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Modular group**
The group $\mathrm{SL}_2(\mathbb{Z})$ of $2 \times 2$ integer matrices of determinant 1, acting on the upper half-plane by Möbius transformations. It is generated by $z \mapsto z + 1$ and $z \mapsto -1/z$.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Modularity theorem**
Every elliptic curve over $\mathbb{Q}$ is modular: its numbers $a_p$ are the coefficients of a cusp form of weight 2 and level equal to its conductor. It was conjectured by Taniyama, Shimura and Weil, proved for semistable curves by Wiles and Taylor (1995) and in full in 2001.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#203-the-frey-curve-ribet-and-taniyama-shimura).

**Modulus**
The number $n$ in a congruence $a \equiv b \pmod n$.
See [Chapter 4](04-Congruences.md#41-clock-arithmetic).

**Mordell's theorem**
The group $E(\mathbb{Q})$ of rational points on an elliptic curve is finitely generated: $E(\mathbb{Q}) \cong T \times \mathbb{Z}^r$ with $T$ finite (1922).
See [Chapter 19](19-Elliptic-Curves.md#193-mordells-theorem-rank-and-torsion).

**MRDP theorem**
The theorem of Matiyasevich, Robinson, Davis and Putnam (1970): a set is listable exactly when it is Diophantine. So Hilbert's tenth problem has no solution.
See [Chapter 9](09-Diophantine-Equations.md#95-hilberts-tenth-problem).

**Multiple**
See Divides.
See [Chapter 1](01-Divisibility.md#12-divides-multiples-and-the-divisibility-rules).

**Multiplicative function**
An arithmetic function with $f(1) = 1$ and $f(mn) = f(m)f(n)$ whenever $\gcd(m, n) = 1$, such as $\tau$, $\sigma$, $\varphi$ and $\mu$. It is determined by its values on prime powers.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#62-multiplicative-functions).

## N

**Nagell-Lutz theorem**
A rational point of finite order on $y^2 = x^3 + ax + b$ (integer $a$, $b$) has integer coordinates, and $y = 0$ or $y^2$ divides $4a^3 + 27b^2$. It makes the torsion subgroup easy to find.
See [Chapter 19](19-Elliptic-Curves.md#193-mordells-theorem-rank-and-torsion).

**Non-archimedean**
An absolute value satisfying the strong triangle inequality $|x + y| \le \max(|x|, |y|)$, such as $|\cdot|_p$.
See [Chapter 18](18-p-adic-Numbers.md#181-a-new-size-for-numbers).

**Nontrivial zero**
A zero of $\zeta(s)$ other than the trivial zeros $-2, -4, -6, \ldots$. They all lie in the critical strip, are written $\rho = \beta + i\gamma$, and control the error in the prime number theorem.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Norm (in a number field)**
The product $N(\beta) = \beta_1\cdots\beta_n$ of the images of $\beta$ under the embeddings. It is rational and multiplicative; for $x + y\sqrt d$ it is $x^2 - dy^2$.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Norm of an ideal**
The number $N(I) = |\mathcal{O}_K/I|$ of residue classes modulo $I$. It is multiplicative, and for a principal ideal equals $|N(\alpha)|$.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Number field**
A field $K$ containing $\mathbb{Q}$ of finite dimension as a vector space over $\mathbb{Q}$. Every number field is $\mathbb{Q}(\alpha)$ for a single algebraic number $\alpha$.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Number field sieve**
The fastest known general factoring method (around 1990), finding congruences of squares by working in a number field as well as in $\mathbb{Z}$. It is also used for discrete logarithms.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#124-factoring).

**Numeral**
A string of symbols naming a number, such as "2026" in base 10. Different bases give different numerals for the same number.
See [Chapter 1](01-Divisibility.md#15-number-bases).

## O

**Octal**
Base 8.
See [Chapter 1](01-Divisibility.md#15-number-bases).

**Odd**
An integer of the form $n = 2k + 1$.
See [Chapter 1](01-Divisibility.md#14-even-and-odd-and-other-remainder-arguments).

**Odd perfect number**
A perfect number that is odd. None is known; Euler showed any such number has the form $p^a m^2$ with $p \equiv a \equiv 1 \pmod 4$.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#63-perfect-numbers).

**Order (modulo $n$)**
For $\gcd(a, n) = 1$, the smallest positive $d$ with $a^d \equiv 1 \pmod n$, written $\operatorname{ord}_n(a)$. Then $a^k \equiv 1$ exactly when $d \mid k$, and $d$ divides $\varphi(n)$.
See [Chapter 7](07-Primitive-Roots.md#71-the-order-of-an-element).

**Orrery**
A mechanical model of the solar system. Its gear ratios are good fractional approximations, found with continued fractions, of the ratios of planetary periods.
See [Chapter 10](10-Continued-Fractions.md#107-calendars-and-gears).

**Orthogonality relations**
The sums of a nonprincipal character over a full period are 0, and summing $\overline{\chi(a)}\chi(m)$ over all characters picks out $m \equiv a$. They let Dirichlet isolate one residue class.
See [Chapter 15](15-Primes-in-Progressions.md#152-characters-mod-n).

**Ostrowski's theorem**
Every nontrivial absolute value on $\mathbb{Q}$ is equivalent to the usual one or to $|\cdot|_p$ for exactly one prime $p$.
See [Chapter 18](18-p-adic-Numbers.md#184-ostrowskis-theorem).

## P

**$p$-adic absolute value**
The size $|x|_p = p^{-v_p(x)}$ of a nonzero rational, with $|0|_p = 0$. Numbers divisible by a high power of $p$ are small.
See [Chapter 18](18-p-adic-Numbers.md#181-a-new-size-for-numbers).

**$p$-adic integers**
The ring $\mathbb{Z}_p = \{x \in \mathbb{Q}_p : |x|_p \le 1\}$, whose elements are expansions $a_0 + a_1 p + a_2 p^2 + \cdots$ with digits $0 \le a_i < p$, running infinitely to the left. Its units are the $x$ with $|x|_p = 1$.
See [Chapter 18](18-p-adic-Numbers.md#182-the-p-adic-numbers-mathbbq_p).

**$p$-adic numbers**
The field $\mathbb{Q}_p$, the completion of $\mathbb{Q}$ for the $p$-adic absolute value. Each element is $p^k$ times a $p$-adic unit.
See [Chapter 18](18-p-adic-Numbers.md#182-the-p-adic-numbers-mathbbq_p).

**$p$-adic valuation**
The exponent $v_p(x)$ of the prime $p$ in a nonzero rational $x$: the number of times $p$ divides it, negative when $p$ is in the denominator.
See [Chapter 18](18-p-adic-Numbers.md#181-a-new-size-for-numbers).

**Pairwise coprime**
A list of integers in which every two are coprime. The Chinese remainder theorem needs pairwise coprime moduli.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#61-the-chinese-remainder-theorem).

**Parity**
Whether an integer is even or odd. Many impossibility proofs come down to comparing parities.
See [Chapter 1](01-Divisibility.md#14-even-and-odd-and-other-remainder-arguments).

**Parity problem**
Selberg's observation that sieve methods alone cannot tell numbers with an even number of prime factors from those with an odd number. It is why twin primes seem to need a new idea.
See [Chapter 13](13-How-Primes-Are-Spread.md#136-gaps-between-primes).

**Partial quotients**
The integers $a_0, a_1, a_2, \ldots$ in a continued fraction $[a_0; a_1, a_2, \ldots]$. All but $a_0$ are positive.
See [Chapter 10](10-Continued-Fractions.md#101-the-algorithm).

**Partial summation**
A discrete form of integration by parts, used to pass from sums weighted by $\ln p$ to sums weighted by $1/p$ or to $\pi(x)$.
See [Chapter 13](13-How-Primes-Are-Spread.md#135-mertens-theorems).

**Partition**
A way of writing $n$ as a sum of positive integers, its parts, with order ignored. The number of partitions of $n$ is $p(n)$: $p(4) = 5$ and $p(100)$ is about 190 million million.
See [Chapter 16](16-Partitions.md#161-partitions-and-ferrers-diagrams).

**Pell's equation**
The equation $x^2 - dy^2 = 1$ with $d$ a positive non-square, solved in integers. It always has infinitely many solutions, all powers of the fundamental solution, found from the continued fraction of $\sqrt d$.
See [Chapter 9](09-Diophantine-Equations.md#93-pells-equation).

**Pentagonal number theorem**
Euler's identity $\prod_{k \ge 1}(1 - x^k) = \sum_{k \in \mathbb{Z}}(-1)^k x^{k(3k-1)/2}$. It gives a fast recurrence for $p(n)$.
See [Chapter 16](16-Partitions.md#163-the-pentagonal-number-theorem).

**Pentagonal numbers**
The numbers $k(3k - 1)/2 = 1, 5, 12, 22, \ldots$; with negative $k$ too they are the generalised pentagonal numbers in Euler's theorem.
See [Chapter 16](16-Partitions.md#163-the-pentagonal-number-theorem).

**Perfect number**
A positive integer equal to the sum of its proper divisors, so that $\sigma(n) = 2n$, such as 6, 28, 496 and 8128.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#63-perfect-numbers).

**Phi function**
See Euler's phi function.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#52-eulers-theorem-and-the-phi-function).

**Place**
See Local field.
See [Chapter 18](18-p-adic-Numbers.md#184-ostrowskis-theorem).

**Pohlig-Hellman**
A method for discrete logarithms when $p - 1$ has only small prime factors: the Chinese remainder theorem splits the problem into small ones. It is why Diffie-Hellman uses primes where $p - 1$ has a large prime factor.
See [Chapter 7](07-Primitive-Roots.md#74-index-arithmetic-the-discrete-logarithm).

**Point at infinity**
The extra point $O$ of an elliptic curve, where all vertical lines meet in the projective plane. It is the identity of the group law.
See [Chapter 19](19-Elliptic-Curves.md#191-rational-points-on-a-conic-and-on-a-cubic).

**Polignac conjecture**
Every even number occurs infinitely often as a gap between consecutive primes.
See [Chapter 21](21-Where-Number-Theory-Goes.md#214-twin-primes).

**Pollard's rho method**
A factoring method (1975) that iterates $x \mapsto x^2 + c$ modulo $n$ and looks for a cycle modulo an unknown prime factor $p$ with Floyd's trick. By the birthday paradox it takes about $\sqrt p$ steps.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#124-factoring).

**Polynomial time**
An algorithm runs in polynomial time if its cost is at most a fixed power of the size of its input, which for a number $n$ is its number of digits $\log n$. Trial division is not polynomial time; Miller-Rabin and AKS are.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#121-trial-division).

**Prime**
An integer $p > 1$ whose only positive divisors are 1 and $p$. The number 1 is not prime, so that factorization is unique.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#21-primes-and-the-sieve-of-eratosthenes).

**Prime gap**
The difference $g_n = p_{n+1} - p_n$ between consecutive primes. On average it is about $\ln p_n$, but gaps can be arbitrarily long, and since 2013 infinitely many are at most 246.
See [Chapter 13](13-How-Primes-Are-Spread.md#136-gaps-between-primes).

**Prime ideal**
An ideal $\mathfrak p \ne R$ such that $ab \in \mathfrak p$ implies $a \in \mathfrak p$ or $b \in \mathfrak p$. In a ring of integers every nonzero ideal factors uniquely into prime ideals.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Prime number theorem**
$\pi(x) \sim x/\ln x$, that is, the ratio tends to 1; more precisely $\pi(x)$ is close to $\operatorname{li}(x)$. Hadamard and de la Vallée Poussin proved it in 1896 by showing $\zeta$ has no zeros on the line $\operatorname{Re} s = 1$.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#144-the-prime-number-theorem).

**Prime-counting function**
The number $\pi(x)$ of primes $p \le x$. For example $\pi(100) = 25$.
See [Chapter 13](13-How-Primes-Are-Spread.md#131-counting-primes).

**Primitive character**
A Dirichlet character modulo $n$ that does not come from any character of a smaller modulus.
See [Chapter 15](15-Primes-in-Progressions.md#152-characters-mod-n).

**Primitive Pythagorean triple**
A Pythagorean triple with $\gcd(a, b, c) = 1$. Every one is $(m^2 - n^2, 2mn, m^2 + n^2)$, up to swapping $a$ and $b$, with $m > n > 0$ coprime and of opposite parity.
See [Chapter 9](09-Diophantine-Equations.md#91-pythagorean-triples).

**Primitive root**
An integer $g$ whose order modulo $n$ is $\varphi(n)$, so that its powers run through all units modulo $n$. Primitive roots exist exactly for $n = 1, 2, 4, p^k$ and $2p^k$ with $p$ an odd prime.
See [Chapter 7](07-Primitive-Roots.md#72-primitive-roots-mod-a-prime).

**Principal character**
The Dirichlet character $\chi_0$ modulo $n$ that is 1 on numbers coprime to $n$ and 0 elsewhere. Its $L$-function has a pole at $s = 1$ that drives Dirichlet's theorem.
See [Chapter 15](15-Primes-in-Progressions.md#152-characters-mod-n).

**Principal ideal**
The ideal $(\alpha) = \alpha R$ of all multiples of one element. In $\mathbb{Z}$ every ideal is principal; a ring of integers has class number 1 exactly when all its ideals are.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Private key**
In RSA, the secret exponent $d$ with $ed \equiv 1 \pmod{\varphi(n)}$, used to decrypt. Finding it from the public key is as hard as factoring $n$.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#125-rsa-in-one-page).

**Public key**
In RSA, the pair $(n, e)$ published so that anyone can encrypt a message $m$ as $m^e \bmod n$.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#125-rsa-in-one-page).

**Pythagorean triple**
A triple $(a, b, c)$ of positive integers with $a^2 + b^2 = c^2$, such as $(3, 4, 5)$.
See [Chapter 9](09-Diophantine-Equations.md#91-pythagorean-triples).

## Q

**$q$-expansion**
The Fourier series $f(z) = \sum_{n \ge 0} a_n q^n$ of a modular form, with $q = e^{2\pi iz}$. Its coefficients are often arithmetic, such as divisor sums or Ramanujan's $\tau(n)$.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Quadratic field**
A number field $\mathbb{Q}(\sqrt d)$ with $d \ne 0, 1$ a squarefree integer; real if $d > 0$ and imaginary if $d < 0$.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Quadratic form**
A homogeneous polynomial of degree 2, such as $3x^2 + 5y^2 - 7z^2$. Over $\mathbb{Q}$ it can be diagonalised to $a_1x_1^2 + \cdots + a_nx_n^2$.
See [Chapter 18](18-p-adic-Numbers.md#185-local-global-the-hasse-minkowski-theorem).

**Quadratic irrational**
An irrational root of a quadratic equation with integer coefficients, of the form $(P + \sqrt D)/Q$. Its continued fraction is eventually periodic, and only such numbers have one (Euler; Lagrange).
See [Chapter 10](10-Continued-Fractions.md#104-periodic-continued-fractions-and-quadratic-irrationals).

**Quadratic nonresidue**
A number $a$ coprime to $n$ for which $x^2 \equiv a \pmod n$ has no solution.
See [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md#81-squares-mod-p).

**Quadratic reciprocity**
For distinct odd primes $p$ and $q$, $\left(\frac pq\right)\left(\frac qp\right) = (-1)^{\frac{p-1}{2}\frac{q-1}{2}}$. So the two symbols are equal unless both primes are $\equiv 3 \pmod 4$. Gauss proved it in 1796.
See [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md#84-quadratic-reciprocity).

**Quadratic residue**
A number $a$ coprime to $n$ for which $x^2 \equiv a \pmod n$ has a solution. Modulo an odd prime $p$ exactly half of the nonzero residues are quadratic residues.
See [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md#81-squares-mod-p).

**Quadratic sieve**
Pomerance's 1981 factoring method, which finds smooth values of $x^2 - n$ by sieving and combines them into a congruence of squares.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#124-factoring).

**Quality (of an abc triple)**
The number $q(a, b, c) = \log c / \log \operatorname{rad}(abc)$. The abc conjecture says that for every $\varepsilon > 0$ only finitely many triples have quality above $1 + \varepsilon$.
See [Chapter 21](21-Where-Number-Theory-Goes.md#212-the-abc-conjecture).

**Quotient**
The number $q = \lfloor a/b \rfloor$ in the division algorithm $a = bq + r$.
See [Chapter 1](01-Divisibility.md#13-the-division-algorithm).

## R

**Radical**
The product $\operatorname{rad}(n)$ of the distinct primes dividing $n$, such as $\operatorname{rad}(72) = 6$.
See [Chapter 21](21-Where-Number-Theory-Goes.md#212-the-abc-conjecture).

**Ramanujan's congruences**
$p(5n + 4) \equiv 0 \pmod 5$, $p(7n + 5) \equiv 0 \pmod 7$ and $p(11n + 6) \equiv 0 \pmod{11}$ for every $n \ge 0$.
See [Chapter 16](16-Partitions.md#164-ramanujans-congruences).

**Ramanujan's tau function**
The coefficients $\tau(n)$ of the discriminant form $\Delta = \sum \tau(n)q^n$: $\tau(1) = 1$, $\tau(2) = -24$, $\tau(3) = 252$. It is multiplicative, and $|\tau(p)| \le 2p^{11/2}$ (Deligne). Whether it is ever 0 is Lehmer's question.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Ramify**
A prime $p$ ramifies in a quadratic field when $(p) = \mathfrak p^2$. The ramified primes are exactly those dividing the discriminant.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Rank (of a partition)**
Dyson's statistic: the largest part minus the number of parts. It explains Ramanujan's congruences modulo 5 and 7 but not modulo 11.
See [Chapter 16](16-Partitions.md#164-ramanujans-congruences).

**Rank (of an elliptic curve)**
The number $r$ in Mordell's theorem $E(\mathbb{Q}) \cong T \times \mathbb{Z}^r$: the number of independent rational points of infinite order. There is no known algorithm guaranteed to compute it.
See [Chapter 19](19-Elliptic-Curves.md#193-mordells-theorem-rank-and-torsion).

**Rational point**
A point on a curve whose coordinates are both rational numbers.
See [Chapter 19](19-Elliptic-Curves.md#191-rational-points-on-a-conic-and-on-a-cubic).

**Real quadratic field**
A quadratic field $\mathbb{Q}(\sqrt d)$ with $d > 0$. Its units are $\pm$ the powers of a fundamental unit, found from Pell's equation.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Reduced quadratic irrational**
A quadratic irrational $x > 1$ whose conjugate lies between $-1$ and 0. These are exactly the numbers with purely periodic continued fractions.
See [Chapter 10](10-Continued-Fractions.md#104-periodic-continued-fractions-and-quadratic-irrationals).

**Reduced residue system**
A set of $\varphi(n)$ integers, one from each residue class coprime to $n$. Multiplying it by a unit permutes it, which proves Euler's theorem.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#52-eulers-theorem-and-the-phi-function).

**Regular prime**
A prime $p$ that does not divide the class number of $\mathbb{Q}(\zeta_p)$. Kummer proved Fermat's last theorem for regular prime exponents in 1850; 37 is the first irregular prime.
See [Chapter 17](17-Algebraic-Number-Theory.md#176-gausss-class-number-problem).

**Regulator**
The volume of the lattice of units of a number field, measuring how large the fundamental units are. It enters the class number formula and, for elliptic curves, the Birch and Swinnerton-Dyer formula.
See [Chapter 17](17-Algebraic-Number-Theory.md#175-units-and-dirichlets-unit-theorem).

**Relatively prime**
See Coprime.
See [Chapter 3](03-GCD-and-Euclids-Algorithm.md#31-the-gcd-and-the-lcm).

**Remainder**
The number $r$ with $0 \le r < b$ in the division algorithm $a = bq + r$.
See [Chapter 1](01-Divisibility.md#13-the-division-algorithm).

**Residue class**
The set of all integers congruent to $a$ modulo $n$, written $\bar a$ or $[a]$. There are $n$ classes, and they form the ring $\mathbb{Z}/n\mathbb{Z}$.
See [Chapter 4](04-Congruences.md#41-clock-arithmetic).

**Ribet's theorem**
If the Frey curve of a solution to Fermat's equation with prime exponent $p \ge 5$ were modular, its mod $p$ representation would come from a cusp form of weight 2 and level 2, which does not exist (1986). So modularity implies Fermat's last theorem.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#203-the-frey-curve-ribet-and-taniyama-shimura).

**Riemann hypothesis**
All nontrivial zeros of $\zeta(s)$ have real part $\frac12$ (Riemann, 1859). It is equivalent to $\pi(x) = \operatorname{li}(x) + O(\sqrt x\log x)$, the best possible error in the prime number theorem.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#145-the-riemann-hypothesis-and-what-it-would-give).

**Riemann hypothesis for curves over finite fields**
The statement that the numbers controlling the point counts of a curve over $\mathbb{F}_p$ all have absolute value $\sqrt p$. For elliptic curves it is Hasse's theorem; Weil proved it for all curves.
See [Chapter 19](19-Elliptic-Curves.md#194-curves-over-finite-fields).

**Riemann zeta function**
The function $\zeta(s) = \sum_{n \ge 1} n^{-s} = \prod_p (1 - p^{-s})^{-1}$ for $\operatorname{Re} s > 1$, extended to all of $\mathbb{C}$ except a simple pole at $s = 1$. Its zeros govern the distribution of the primes.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#141-the-harmonic-series-and-eulers-product).

**Riemann-Siegel formula**
A fast approximation to $\zeta(\frac12 + it)$, a sum of about $\sqrt{t/2\pi}$ terms, used to locate zeros on the critical line.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#146-checking-zeros-numerically).

**Ring**
A set with addition and multiplication obeying the usual rules, such as $\mathbb{Z}$ or $\mathbb{Z}/n\mathbb{Z}$.
See [Chapter 4](04-Congruences.md#42-the-rules-of-congruence).

**Ring of integers**
The set $\mathcal{O}_K$ of algebraic integers in a number field $K$. For $\mathbb{Q}(\sqrt d)$ it is $\mathbb{Z}[\sqrt d]$ if $d \equiv 2, 3 \pmod 4$ and $\mathbb{Z}\left[\frac{1 + \sqrt d}{2}\right]$ if $d \equiv 1 \pmod 4$.
See [Chapter 17](17-Algebraic-Number-Theory.md#172-the-integers-of-a-quadratic-field).

**Rogers-Ramanujan identities**
The number of partitions of $n$ into parts differing by at least 2 equals the number into parts $\equiv \pm 1 \pmod 5$, together with a companion identity.
See [Chapter 16](16-Partitions.md#162-generating-functions-and-eulers-odd-distinct-theorem).

**Roth's theorem**
For an algebraic irrational $x$ and any $\varepsilon > 0$, there are only finitely many fractions with $|x - p/q| < 1/q^{2 + \varepsilon}$ (1955). Roth received a Fields Medal for it.
See [Chapter 10](10-Continued-Fractions.md#106-how-well-can-numbers-be-approximated).

**RSA**
The public-key system of Rivest, Shamir and Adleman (1977): choose primes $p$, $q$, set $n = pq$, encrypt by $m \mapsto m^e \bmod n$ and decrypt with $d = e^{-1} \bmod \varphi(n)$. Its security rests on the difficulty of factoring $n$.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#125-rsa-in-one-page).

## S

**Sato-Tate conjecture**
For an elliptic curve without complex multiplication, the normalised numbers $a_p/(2\sqrt p)$ are distributed like $\cos\theta$ with density $\frac2\pi\sin^2\theta$. It was proved in 2008-2011 by Clozel, Harris, Shepherd-Barron and Taylor.
See [Chapter 21](21-Where-Number-Theory-Goes.md#211-the-langlands-programme-the-number-theory-side).

**Self-conjugate partition**
A partition equal to its own conjugate, with a diagram symmetric about the diagonal. There are as many of them as partitions into distinct odd parts.
See [Chapter 16](16-Partitions.md#161-partitions-and-ferrers-diagrams).

**Semiconvergent**
A fraction $\frac{p_{n-1} + kp_n}{q_{n-1} + kq_n}$ between two convergents, also called an intermediate fraction. Some semiconvergents are best approximations of the first kind.
See [Chapter 10](10-Continued-Fractions.md#103-best-approximations).

**Semistable**
An elliptic curve whose conductor is squarefree, so that at each bad prime the reduction has only a node. Wiles proved modularity for semistable curves, which is enough for Fermat.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#203-the-frey-curve-ribet-and-taniyama-shimura).

**Siegel zero**
A hypothetical real zero of $L(s, \chi)$, for a real character $\chi$, very close to 1. Ruling them out is open without the generalised Riemann hypothesis, and they make some bounds ineffective.
See [Chapter 15](15-Primes-in-Progressions.md#154-the-proof-why-l1-chi-ne-0).

**Siegel-Walfisz theorem**
The primes are evenly spread among the classes modulo $n$, with a good error term, for $n$ up to a power of $\log x$.
See [Chapter 15](15-Primes-in-Progressions.md#153-l-functions).

**Sieve of Eratosthenes**
Listing the primes up to $N$ by crossing out the multiples of each prime up to $\sqrt N$; what remains is prime.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#21-primes-and-the-sieve-of-eratosthenes).

**Sigma function**
The function $\sigma(n)$, the sum of the positive divisors of $n$. It is multiplicative, with $\sigma(p^a) = 1 + p + \cdots + p^a$.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#62-multiplicative-functions).

**Signature**
The pair $(r_1, r_2)$ for a number field of degree $n = r_1 + 2r_2$: $r_1$ real embeddings and $r_2$ pairs of complex ones.
See [Chapter 17](17-Algebraic-Number-Theory.md#175-units-and-dirichlets-unit-theorem).

**Singular point**
A point of a curve with a cusp or a self-crossing. An elliptic curve has none, which is what the condition $4a^3 + 27b^2 \ne 0$ ensures.
See [Chapter 19](19-Elliptic-Curves.md#191-rational-points-on-a-conic-and-on-a-cubic).

**Smooth number**
A number all of whose prime factors are small (below a given bound). Sieve factoring and index calculus collect smooth numbers.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#124-factoring).

**Sol**
The Martian solar day, about 24 hours 39 minutes 35 seconds.
See [Chapter 10](10-Continued-Fractions.md#107-calendars-and-gears).

**Splits**
A prime $p$ splits in a quadratic field when $(p) = \mathfrak p\mathfrak p'$ with two different prime ideals, each of norm $p$.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Squarefree**
An integer not divisible by the square of any prime, such as 30. The Möbius function is nonzero exactly on squarefree numbers.
See [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md#64-the-mobius-function-and-inversion).

**Strong pseudoprime**
A composite $n$ that passes the Miller-Rabin test to base $a$; then $a$ is a strong liar. A base that proves $n$ composite is a strong witness.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#122-the-fermat-and-millerrabin-tests).

**Strong triangle inequality**
The inequality $|x + y|_p \le \max(|x|_p, |y|_p)$, also called the ultrametric inequality. In it every triangle is isosceles and every point of a disc is a centre.
See [Chapter 18](18-p-adic-Numbers.md#181-a-new-size-for-numbers).

**Sum of three squares**
Legendre and Gauss: a positive integer is a sum of three squares if and only if it is not of the form $4^a(8b + 7)$.
See [Chapter 11](11-Sums-of-Squares.md#113-three-squares).

**Sum of two squares**
A positive integer is a sum of two squares if and only if every prime $\equiv 3 \pmod 4$ appears to an even power in its factorization.
See [Chapter 11](11-Sums-of-Squares.md#111-which-numbers-are-sums-of-two-squares).

## T

**Tate-Shafarevich group**
The group Ш of an elliptic curve measuring the failure of the local-global principle: curves related to $E$ with points everywhere locally but none over $\mathbb{Q}$. It appears in the strong Birch and Swinnerton-Dyer formula and is conjectured to be finite.
See [Chapter 19](19-Elliptic-Curves.md#196-the-birch-and-swinnerton-dyer-conjecture).

**Tauberian theorem**
A result that turns good behaviour of a transform, such as a Dirichlet series near $s = 1$, into the size of the original function. Newman's short proof of the prime number theorem uses one.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#144-the-prime-number-theorem).

**Teichmüller representatives**
The $p - 1$ roots of unity in $\mathbb{Z}_p$, one in each nonzero residue class modulo $p$, found by Hensel's lemma.
See [Chapter 18](18-p-adic-Numbers.md#183-hensels-lemma).

**Torsion subgroup**
The finite subgroup $T$ of points of finite order in $E(\mathbb{Q})$. Nagell-Lutz finds it and Mazur lists the possibilities.
See [Chapter 19](19-Elliptic-Curves.md#193-mordells-theorem-rank-and-torsion).

**Trace**
The sum $\operatorname{Tr}(\beta) = \beta_1 + \cdots + \beta_n$ of the images of $\beta$ under the embeddings of a number field. It is rational, and an integer for algebraic integers.
See [Chapter 17](17-Algebraic-Number-Theory.md#171-number-fields).

**Transcendental number**
A real or complex number that is not algebraic. Liouville built the first examples in 1844; $e$ and $\pi$ are transcendental.
See [Chapter 10](10-Continued-Fractions.md#106-how-well-can-numbers-be-approximated).

**Trial division**
Testing whether $n$ is prime by dividing it by each prime up to $\sqrt n$. It works because a composite $n$ has a prime factor at most $\sqrt n$, but takes exponential time in the number of digits.
See [Chapter 12](12-Primality-Factoring-and-RSA.md#121-trial-division).

**Triangular numbers**
The numbers $T_k = k(k + 1)/2 = 0, 1, 3, 6, 10, \ldots$. Gauss's "Eureka" theorem says every whole number is a sum of three of them.
See [Chapter 11](11-Sums-of-Squares.md#113-three-squares).

**Triple product identity**
Jacobi's identity $\prod_{n \ge 1}(1 - x^{2n})(1 + x^{2n-1}z)(1 + x^{2n-1}z^{-1}) = \sum_{k \in \mathbb{Z}} x^{k^2}z^k$. The pentagonal number theorem and one of Ramanujan's congruences follow from it.
See [Chapter 16](16-Partitions.md#164-ramanujans-congruences).

**Trivial absolute value**
The absolute value with $|x| = 1$ for every $x \ne 0$.
See [Chapter 18](18-p-adic-Numbers.md#184-ostrowskis-theorem).

**Trivial zeros**
The zeros $s = -2, -4, -6, \ldots$ of $\zeta(s)$, forced by the poles of the gamma function in the functional equation.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#143-riemanns-1859-paper).

**Tropical year**
The time from one spring equinox to the next, about $365.24219$ days. Its continued fraction explains the leap-year rules of calendars.
See [Chapter 10](10-Continued-Fractions.md#107-calendars-and-gears).

**Tunnell's theorem**
A criterion, by counting solutions of simple quadratic equations, that an odd squarefree $n$ is not congruent unless $A(n) = 2B(n)$. Assuming Birch and Swinnerton-Dyer, the converse holds as well.
See [Chapter 19](19-Elliptic-Curves.md#195-the-congruent-number-problem).

**Twin prime conjecture**
There are infinitely many twin primes. It is open; since 2013 it is known that infinitely many pairs of primes differ by at most 246.
See [Chapter 21](21-Where-Number-Theory-Goes.md#214-twin-primes).

**Twin primes**
Pairs of primes $p$, $p + 2$, such as $(11, 13)$ or $(17, 19)$.
See [Chapter 2](02-Primes-and-Unique-Factorization.md#25-gaps-and-patterns).

## U

**Ultrametric inequality**
See Strong triangle inequality.
See [Chapter 18](18-p-adic-Numbers.md#181-a-new-size-for-numbers).

**Unit (in a ring)**
An element with a multiplicative inverse in the ring. The units of $\mathbb{Z}[i]$ are $\pm1$, $\pm i$; those of $\mathbb{Z}[\sqrt2]$ are $\pm(1 + \sqrt2)^k$.
See [Chapter 17](17-Algebraic-Number-Theory.md#173-unique-factorization-fails-and-ideals-rescue-it).

**Unit (modulo $n$)**
A number with an inverse modulo $n$, that is, one coprime to $n$. The units form the group $(\mathbb{Z}/n\mathbb{Z})^\times$ of size $\varphi(n)$.
See [Chapter 4](04-Congruences.md#43-inverses-modulo-n).

**Upper half-plane**
The set $\mathbb{H} = \{z \in \mathbb{C} : \operatorname{Im} z > 0\}$, on which the modular group acts and modular forms live.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

## V

**Valence formula**
For a nonzero modular form of weight $k$, the zeros in the fundamental domain, counted with weights at $i$ and $\rho$, add up to $k/12$. It shows the spaces of modular forms are finite-dimensional.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Vieta jumping**
Replacing one root of a quadratic equation by the other, using the sum or product of roots, to move from one solution to a smaller or larger one. It generates all solutions of Markov's equation.
See [Chapter 9](09-Diophantine-Equations.md#94-markovs-equation-and-other-famous-equations).

**Vinogradov's theorem**
Every sufficiently large odd number is the sum of three primes (1937), proved by the circle method.
See [Chapter 21](21-Where-Number-Theory-Goes.md#213-goldbachs-conjecture).

## W

**Waring's problem**
For each $k$, is there a number $s$ such that every positive integer is a sum of $s$ $k$-th powers? Hilbert proved yes in 1909; $g(k)$ is the least such $s$ and $G(k)$ the least for all sufficiently large integers.
See [Chapter 11](11-Sums-of-Squares.md#115-warings-problem).

**Weight**
The exponent $k$ in the rule $f(\gamma z) = (cz + d)^k f(z)$ for a modular form.
See [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md#202-modular-forms).

**Well defined**
Of an operation on residue classes: giving an answer that does not depend on which representatives are chosen. Addition and multiplication modulo $n$ are well defined.
See [Chapter 4](04-Congruences.md#42-the-rules-of-congruence).

**Well-ordering principle**
Every nonempty set of non-negative integers has a smallest member. It is the basis of the division algorithm and of proofs by descent.
See [Chapter 1](01-Divisibility.md#13-the-division-algorithm).

**Wilson's theorem**
If $p$ is prime then $(p - 1)! \equiv -1 \pmod p$; conversely, for $n > 4$ composite, $(n - 1)! \equiv 0 \pmod n$.
See [Chapter 5](05-Fermat-Euler-and-Wilson.md#53-wilsons-theorem).

## Z

**Zagier's proof**
Don Zagier's one-sentence proof (1990) of Fermat's two-square theorem, using an involution on the solutions of $x^2 + 4yz = p$ with exactly one fixed point.
See [Chapter 11](11-Sums-of-Squares.md#111-which-numbers-are-sums-of-two-squares).

**Zero divisor**
A nonzero $a$ with $ab \equiv 0 \pmod n$ for some nonzero $b$. Modulo $n$, every nonzero non-unit is a zero divisor.
See [Chapter 4](04-Congruences.md#43-inverses-modulo-n).

**Zeta function**
See Riemann zeta function.
See [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md#141-the-harmonic-series-and-eulers-product).
