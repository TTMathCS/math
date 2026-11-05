# 17. Algebraic number theory

*Many problems about whole numbers become easier in a bigger number system. To find which primes are $x^2 + y^2$,
factor in the Gaussian integers: $x^2 + y^2 = (x + iy)(x - iy)$. To solve Pell's equation, work with $a + b\sqrt d$. To
attack Fermat's last theorem, factor $x^p + y^p$ using $p$th roots of unity. Each time, the method needs unique
factorization in the bigger system, and in the 1840s it was found that unique factorization can fail: in
$\mathbb{Z}[\sqrt{-5}]$, $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$. This chapter builds the right setting (number
fields and their rings of integers), finds the integers of every quadratic field, shows how Kummer's and Dedekind's
ideals restore unique factorization, measures the failure by the class number, describes the units, and ends with
Gauss's question of 1801 about which fields have class number one, answered by Heegner, Baker and Stark.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a number field and an algebraic integer are, and why the algebraic integers form a ring
    - the ring of integers of every quadratic field $\mathbb{Q}(\sqrt d)$, with proof, and its discriminant
    - norms, irreducible elements, and exactly how unique factorization fails in $\mathbb{Z}[\sqrt{-5}]$
    - Dedekind's theorem that ideals factor uniquely into prime ideals, and how primes split in quadratic fields
    - the class group and class number, why it is finite, and how to compute it for small fields
    - units: Dirichlet's unit theorem, and fundamental units of real quadratic fields
    - Gauss's class number problem and the nine imaginary quadratic fields with class number 1

    **You need:** [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md) (the Legendre symbol),
    [Chapter 9](09-Diophantine-Equations.md) and [Chapter 10](10-Continued-Fractions.md) (Pell's equation),
    [Chapter 11](11-Sums-of-Squares.md) (Gaussian integers) and, for 17.4, [Chapter 15](15-Primes-in-Progressions.md)
    ($L$-functions). From algebra: rings, ideals and quotients ([Algebra, Chapter 17](../algebra/17-Rings-and-Ideals.md)),
    unique factorization domains ([Algebra, Chapter 18](../algebra/18-Factorization-in-Rings.md)) and field extensions
    ([Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md)).

    **Levels:** 17.1 and 17.2 are advanced; 17.3, 17.4 and 17.5 are expert; 17.6 is history and statements that anyone
    who has read 17.4 can follow.

## 17.1 Number fields

*Level: advanced.*

### Algebraic numbers and number fields

A complex number $\alpha$ is **algebraic** if it is a root of a nonzero polynomial with rational coefficients. Among all
such polynomials there is a unique monic one of smallest degree, the **minimal polynomial** of $\alpha$; it is
irreducible over $\mathbb{Q}$, and its degree is the **degree** of $\alpha$. For example $\sqrt2$ has minimal polynomial
$x^2 - 2$, the cube root $\sqrt[3]{2}$ has $x^3 - 2$, and $i$ has $x^2 + 1$.

A **number field** is a field $K$ containing $\mathbb{Q}$ that has finite dimension $n = [K:\mathbb{Q}]$ as a vector space
over $\mathbb{Q}$; $n$ is its **degree**. By the primitive element theorem every number field is $\mathbb{Q}(\alpha)$ for a
single algebraic number $\alpha$, and then $n$ is the degree of $\alpha$, with basis $1, \alpha, \ldots, \alpha^{n-1}$.
The main examples:

- **quadratic fields** $\mathbb{Q}(\sqrt d) = \{a + b\sqrt d : a, b \in \mathbb{Q}\}$, with $d \ne 0, 1$ a squarefree integer (no square
  factor $> 1$); **real** if $d > 0$, **imaginary** if $d < 0$;
- the **pure cubic** field $\mathbb{Q}(\sqrt[3]2)$ of degree 3;
- **cyclotomic fields** $\mathbb{Q}(\zeta_m)$, where $\zeta_m = e^{2\pi i/m}$, of degree $\varphi(m)$.

### Embeddings, norm and trace

A number field $K = \mathbb{Q}(\alpha)$ of degree $n$ has exactly $n$ **embeddings** (field homomorphisms) into $\mathbb{C}$:
one sends $\alpha$ to each of the $n$ roots $\alpha_1, \ldots, \alpha_n$ of its minimal polynomial. Say $r_1$ of them land
in $\mathbb{R}$ and the other $2r_2$ come in complex-conjugate pairs, so $n = r_1 + 2r_2$. The pair $(r_1, r_2)$ is the
**signature**. A real quadratic field has $(2, 0)$, an imaginary one $(0, 1)$, and $\mathbb{Q}(\sqrt[3]2)$ has $(1, 1)$: one
real cube root of 2 and two complex ones.

For $\beta \in K$ with images $\beta_1, \ldots, \beta_n$ under the embeddings, define the **norm** and **trace**

$$
N(\beta) = \beta_1\beta_2\cdots\beta_n, \qquad \operatorname{Tr}(\beta) = \beta_1 + \cdots + \beta_n .
$$

Both are rational numbers (they are symmetric functions of the conjugates), and the norm is **multiplicative**:
$N(\beta\gamma) = N(\beta)N(\gamma)$, since each embedding respects products. In a quadratic field the two embeddings
are the identity and $\sqrt d \mapsto -\sqrt d$, so

$$
N(a + b\sqrt d) = (a + b\sqrt d)(a - b\sqrt d) = a^2 - d b^2, \qquad \operatorname{Tr}(a + b\sqrt d) = 2a .
$$

For $d < 0$ this is $|a + b\sqrt d|^2$, the squared distance from 0. For $d > 0$ it can be negative.

### Algebraic integers

The rational numbers are too many: in $\mathbb{Q}$ every nonzero number divides every other, so there is no arithmetic of
primes. Inside $\mathbb{Q}$ we single out $\mathbb{Z}$. What is the analogue inside $K$?

**Definition.** A complex number is an **algebraic integer** if it is a root of a **monic** polynomial with **integer**
coefficients. The **ring of integers** $\mathcal{O}_K$ of a number field $K$ is the set of algebraic integers in $K$.

So $\sqrt2$ (root of $x^2 - 2$), $i$, $\sqrt[3]2$ and $\zeta_m$ (root of $x^m - 1$) are algebraic integers. So is the
**golden ratio** $\frac{1 + \sqrt5}{2}$, a root of $x^2 - x - 1$, although it has a 2 in the denominator. But $\frac12$ is
not, and in general:

**Lemma 17.1.** A rational number is an algebraic integer only if it is an integer. So $\mathcal{O}_K \cap \mathbb{Q} = \mathbb{Z}$.

*Proof.* Let $r = u/v$ in lowest terms satisfy $r^m + c_{m-1}r^{m-1} + \cdots + c_0 = 0$ with $c_i \in \mathbb{Z}$. Multiply by
$v^m$: $u^m = -v(c_{m-1}u^{m-1} + \cdots + c_0v^{m-1})$. So $v \mid u^m$; since $\gcd(u, v) = 1$, $v = \pm1$. $\blacksquare$

(The same argument is the rational root theorem of [Algebra, Chapter 10](../algebra/10-Roots-and-Coefficients.md).) A
useful test, which follows from Gauss's lemma ([Algebra, Chapter 18](../algebra/18-Factorization-in-Rings.md)): an
algebraic number is an algebraic integer **if and only if its minimal polynomial has integer coefficients.**

**Theorem 17.2.** Sums and products of algebraic integers are algebraic integers. So $\mathcal{O}_K$ is a ring.

It is not obvious: what monic integer polynomial has $\sqrt2 + \sqrt[3]2$ as a root? The trick avoids finding it.

*Proof.* **Step 1.** Claim: $\gamma$ is an algebraic integer if there is a finitely generated additive subgroup
$M = \mathbb{Z}m_1 + \cdots + \mathbb{Z}m_k$ of $\mathbb{C}$, not $\{0\}$, with $\gamma M \subseteq M$. Indeed,
$\gamma m_i = \sum_j a_{ij}m_j$ with $a_{ij} \in \mathbb{Z}$, so the vector $(m_1, \ldots, m_k)$, which is not zero, is in the
kernel of the matrix $\gamma I - A$. So $\det(\gamma I - A) = 0$, and expanding the determinant shows that $\gamma$ is a
root of the monic integer polynomial $\det(xI - A)$.

**Step 2.** If $\alpha$ satisfies a monic integer equation of degree $m$, and $\beta$ one of degree $l$, let $M$ be the set
of integer combinations of the products $\alpha^i\beta^j$ with $0 \le i < m$, $0 \le j < l$. The monic equations let you
rewrite $\alpha^m$ in terms of lower powers of $\alpha$ with integer coefficients, and the same for $\beta^l$, so
$\alpha M \subseteq M$ and $\beta M \subseteq M$. Hence $(\alpha + \beta)M \subseteq M$ and $\alpha\beta M \subseteq M$, and $M$
contains $1 \ne 0$. By Step 1, $\alpha + \beta$ and $\alpha\beta$ are algebraic integers. $\blacksquare$

The ring $\mathcal{O}_K$ is the right analogue of $\mathbb{Z}$. One can show it is a free abelian group of rank $n$: there
are $\omega_1, \ldots, \omega_n \in \mathcal{O}_K$, an **integral basis**, such that every element of $\mathcal{O}_K$ is uniquely
$a_1\omega_1 + \cdots + a_n\omega_n$ with $a_i \in \mathbb{Z}$. Geometrically, $\mathcal{O}_K$ is a **lattice**.

The **discriminant** $d_K = \det\left(\sigma_i(\omega_j)\right)^2$, where $\sigma_1, \ldots, \sigma_n$ are the embeddings, is a
nonzero integer that does not depend on the integral basis chosen. It measures how "spread out" the lattice
$\mathcal{O}_K$ is, and it controls which primes behave badly (17.3).

## 17.2 The integers of a quadratic field

*Level: advanced.*

**Theorem 17.3.** Let $d \ne 0, 1$ be squarefree and $K = \mathbb{Q}(\sqrt d)$. Then

$$
\mathcal{O}_K = \begin{cases} \mathbb{Z}[\sqrt d] = \{a + b\sqrt d : a, b \in \mathbb{Z}\} & \text{if } d \equiv 2 \text{ or } 3 \pmod 4, \\[4pt] \mathbb{Z}\left[\frac{1+\sqrt d}{2}\right] = \left\{\frac{A + B\sqrt d}{2} : A, B \in \mathbb{Z},\ A \equiv B \!\!\pmod 2\right\} & \text{if } d \equiv 1 \pmod 4. \end{cases}
$$

The discriminant is $d_K = 4d$ in the first case and $d_K = d$ in the second.

*Proof.* Take $\alpha = a + b\sqrt d$ with $a, b$ rational. If $b = 0$, $\alpha$ is rational, and Lemma 17.1 says it is in
$\mathcal{O}_K$ exactly when $a \in \mathbb{Z}$. If $b \ne 0$, $\alpha$ is irrational with minimal polynomial

$$
(x - a - b\sqrt d)(x - a + b\sqrt d) = x^2 - 2a\,x + (a^2 - db^2),
$$

so $\alpha \in \mathcal{O}_K$ exactly when $A = 2a$ and $a^2 - db^2$ are integers. Assume so. Then
$4(a^2 - db^2) = A^2 - d(2b)^2$ is an integer, so $d(2b)^2$ is an integer. Write $2b = u/v$ in lowest terms: $v^2$ divides
$du^2$, hence divides $d$ (as $\gcd(u, v) = 1$), and since $d$ is squarefree $v = 1$. So $B = 2b$ is an integer too, and

$$
A^2 - dB^2 = 4(a^2 - db^2) \equiv 0 \pmod 4 .
$$

Squares are $0$ or $1$ mod 4.

- If $d \equiv 2$ or $3 \pmod 4$: if $B$ were odd, $dB^2 \equiv d \equiv 2$ or $3$, and $A^2 \equiv 2$ or 3 is impossible. So $B$ is
  even, then $A^2 \equiv 0$, so $A$ is even: $a, b \in \mathbb{Z}$.
- If $d \equiv 1 \pmod 4$: the condition is $A^2 \equiv B^2 \pmod 4$, i.e. $A \equiv B \pmod 2$.

Conversely, all the listed numbers satisfy the conditions: for $d \equiv 1$ and $A \equiv B \pmod 2$,
$a^2 - db^2 = \frac{A^2 - dB^2}{4}$ is an integer because $A^2 - dB^2 \equiv A^2 - B^2 \equiv 0 \pmod 4$. And
$\frac{A + B\sqrt d}{2} = \frac{A - B}{2} + B\cdot\frac{1 + \sqrt d}{2}$ with $\frac{A-B}{2} \in \mathbb{Z}$, which is the ring
$\mathbb{Z}[\omega]$, $\omega = \frac{1+\sqrt d}{2}$.

For the discriminant with basis $1, \omega$: $\det\begin{pmatrix}1 & \omega\\ 1 & \bar\omega\end{pmatrix}^2 = (\bar\omega - \omega)^2$, which is
$(-2\sqrt d)^2 = 4d$ for $\omega = \sqrt d$ and $(-\sqrt d)^2 = d$ for $\omega = \frac{1+\sqrt d}{2}$. $\blacksquare$

*Examples.*

- $\mathbb{Q}(i)$: $d = -1 \equiv 3$, so $\mathcal{O}_K = \mathbb{Z}[i]$, the Gaussian integers, $d_K = -4$.
- $\mathbb{Q}(\sqrt{-3})$: $d = -3 \equiv 1$, so $\mathcal{O}_K = \mathbb{Z}[\omega]$ with $\omega = \frac{1 + \sqrt{-3}}{2}$, the **Eisenstein
  integers**, $d_K = -3$. The number $\frac{1 + \sqrt{-3}}{2}$, a primitive 6th root of unity, is an integer here.
- $\mathbb{Q}(\sqrt5)$: $\mathcal{O}_K = \mathbb{Z}[\frac{1+\sqrt5}{2}]$, $d_K = 5$.
- $\mathbb{Q}(\sqrt{-5})$: $d = -5 \equiv 3$, so $\mathcal{O}_K = \mathbb{Z}[\sqrt{-5}]$, $d_K = -20$.

The norm of an algebraic integer is an integer (it is $\pm$ the constant term of a power of the minimal polynomial). In
$\mathbb{Z}[\omega]$, $\omega = \frac{1 + \sqrt d}{2}$, the norm of $x + y\omega$ is

$$
N(x + y\omega) = \left(x + \frac y2\right)^2 - d\,\frac{y^2}{4} = x^2 + xy + \frac{1 - d}{4}\,y^2 ,
$$

a quadratic form with integer coefficients. For $d = -23$ it is $x^2 + xy + 6y^2$.

## 17.3 Unique factorization fails, and ideals rescue it

*Level: expert.*

### Units, irreducibles and the failure

In a ring $R$ like $\mathcal{O}_K$, a **unit** is an element with an inverse in $R$; a nonzero non-unit is
**irreducible** if it cannot be written as a product of two non-units. The norm detects both:

- $\varepsilon$ is a unit in $\mathcal{O}_K$ exactly when $N(\varepsilon) = \pm1$. (If $\varepsilon\eta = 1$ then $N(\varepsilon)N(\eta) = 1$ with both
  integers. Conversely, $\varepsilon$ times the product of its other conjugates is $N(\varepsilon) = \pm1$, and that product is an
  algebraic integer lying in $K$.)
- If $N(\alpha)$ is a prime number, $\alpha$ is irreducible: in any factorization $\alpha = \beta\gamma$ the norms multiply to a prime,
  so one of them is $\pm1$.

Now look at $\mathbb{Z}[\sqrt{-5}]$, where $N(a + b\sqrt{-5}) = a^2 + 5b^2$.

$$
6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5}) .
$$

The norms are $N(2) = 4$, $N(3) = 9$, $N(1 \pm \sqrt{-5}) = 6$. Is $2$ irreducible? A proper factor would have norm 2,
but $a^2 + 5b^2 = 2$ has no integer solutions ($b \ne 0$ makes it at least 5, and $b = 0$ needs $a^2 = 2$). Similarly no
element has norm 3, so $3$ and $1 \pm \sqrt{-5}$ (norm $6 = 2 \cdot 3$) are irreducible. The only units are $\pm1$
($a^2 + 5b^2 = 1$). So 2 is not a unit times $1 \pm \sqrt{-5}$ (the norms differ). **Two genuinely different
factorizations into irreducibles.**

Equivalently, 2 is irreducible but not **prime**: it divides $(1 + \sqrt{-5})(1 - \sqrt{-5}) = 6$ but divides neither
factor (since $\frac{1 \pm \sqrt{-5}}{2} \notin \mathbb{Z}[\sqrt{-5}]$). Euclid's lemma fails, and with it everything built on it
([Algebra, Chapter 18](../algebra/18-Factorization-in-Rings.md) shows that "irreducible = prime" is exactly what unique
factorization needs).

### Kummer's ideal numbers

In the 1840s Ernst Kummer, studying Fermat's equation $x^p + y^p = z^p$ through the factorization
$\prod_{j}(x + \zeta_p^j y) = z^p$, met this failure in the rings $\mathbb{Z}[\zeta_p]$. In 1847 Gabriel Lamé announced a proof
of Fermat's last theorem to the Paris Academy that silently assumed unique factorization in $\mathbb{Z}[\zeta_p]$; Kummer
had already shown it fails (first for $p = 23$). His remedy was to invent "ideal numbers": the factorizations become
unique if you allow factors that are not in the ring, the way $6$ in our example "really" factors as
$\mathfrak{p}^2\mathfrak{q}\mathfrak{q}'$ for four ideal primes, grouped in two ways. Richard Dedekind in 1871 made the
ideal numbers concrete: they are the **ideals** of the ring.

### Ideals and their products

Recall ([Algebra, Chapter 17](../algebra/17-Rings-and-Ideals.md)) that an **ideal** $I$ of a commutative ring $R$ is a
subgroup closed under multiplication by every element of $R$. Every element $\alpha$ gives the **principal ideal**
$(\alpha) = \alpha R$, the multiples of $\alpha$; we write $(\alpha_1, \ldots, \alpha_k)$ for the ideal of all combinations
$r_1\alpha_1 + \cdots + r_k\alpha_k$. The **product** $IJ$ is the ideal generated by all products $ab$ with $a \in I$, $b \in J$;
for principal ideals, $(\alpha)(\beta) = (\alpha\beta)$. Divisibility of elements becomes containment of ideals:
$\alpha \mid \beta$ iff $(\beta) \subseteq (\alpha)$. An ideal $\mathfrak{p} \ne R$ is **prime** if $ab \in \mathfrak{p}$ implies $a \in \mathfrak{p}$ or
$b \in \mathfrak{p}$.

In $R = \mathbb{Z}[\sqrt{-5}]$, let

$$
\mathfrak{p} = (2, 1 + \sqrt{-5}), \qquad \mathfrak{q} = (3, 1 + \sqrt{-5}), \qquad \mathfrak{q}' = (3, 1 - \sqrt{-5}) .
$$

**Claim:** $\mathfrak{p}^2 = (2)$, $\mathfrak{q}\mathfrak{q}' = (3)$, $\mathfrak{p}\mathfrak{q} = (1 + \sqrt{-5})$ and $\mathfrak{p}\mathfrak{q}' = (1 - \sqrt{-5})$.

*Check of $\mathfrak{p}^2$.* It is generated by the products of generators: $4$, $2(1 + \sqrt{-5}) = 2 + 2\sqrt{-5}$ and
$(1 + \sqrt{-5})^2 = -4 + 2\sqrt{-5}$. All three are multiples of 2, so $\mathfrak{p}^2 \subseteq (2)$. Conversely
$(2 + 2\sqrt{-5}) - (-4 + 2\sqrt{-5}) = 6 \in \mathfrak{p}^2$, and $6 - 4 = 2 \in \mathfrak{p}^2$. So $\mathfrak{p}^2 = (2)$.

*Check of $\mathfrak{p}\mathfrak{q}$.* Generators: $6$, $2 + 2\sqrt{-5}$, $3 + 3\sqrt{-5}$, $(1 + \sqrt{-5})^2 = -4 + 2\sqrt{-5}$. Each is a
multiple of $1 + \sqrt{-5}$: $6 = (1 + \sqrt{-5})(1 - \sqrt{-5})$, $2 + 2\sqrt{-5} = 2(1 + \sqrt{-5})$, and so on. And
$(3 + 3\sqrt{-5}) - (2 + 2\sqrt{-5}) = 1 + \sqrt{-5}$ lies in $\mathfrak{p}\mathfrak{q}$. So $\mathfrak{p}\mathfrak{q} = (1 + \sqrt{-5})$.
The other two are similar (exercise 4).

So the two factorizations of 6 are two groupings of one factorization into prime ideals:

$$
(6) = (2)(3) = \mathfrak{p}^2\,\mathfrak{q}\,\mathfrak{q}' = (\mathfrak{p}\mathfrak{q})(\mathfrak{p}\mathfrak{q}') = (1 + \sqrt{-5})(1 - \sqrt{-5}) .
$$

The ideals $\mathfrak{p}, \mathfrak{q}, \mathfrak{q}'$ are prime: $R/\mathfrak{p}$ has 2 elements and $R/\mathfrak{q}$ has 3 (exercise 5), so the
quotients are the fields $\mathbb{F}_2$ and $\mathbb{F}_3$. And $\mathfrak{p}$ is not principal: a generator would have norm 2,
and no element does.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="The lattice Z of root minus 5 drawn in the complex plane: points a plus b root minus 5 for a from minus 3 to 3 and b from minus 1 to 1. Points with a plus b even, which form the ideal p equals 2 comma 1 plus root minus 5, are orange; the others are blue. The orange points form a lattice with half as many points.">
  <line x1="20" y1="100" x2="300" y2="100" stroke="currentColor" stroke-width="0.8"/>
  <line x1="160" y1="5" x2="160" y2="195" stroke="currentColor" stroke-width="0.8"/>
  <g fill="#eea66f">
    <circle cx="40" cy="10.56" r="6"/><circle cx="120" cy="10.56" r="6"/><circle cx="200" cy="10.56" r="6"/><circle cx="280" cy="10.56" r="6"/>
    <circle cx="80" cy="100" r="6"/><circle cx="160" cy="100" r="6"/><circle cx="240" cy="100" r="6"/>
    <circle cx="40" cy="189.44" r="6"/><circle cx="120" cy="189.44" r="6"/><circle cx="200" cy="189.44" r="6"/><circle cx="280" cy="189.44" r="6"/>
  </g>
  <g fill="#9cc9ea">
    <circle cx="80" cy="10.56" r="6"/><circle cx="160" cy="10.56" r="6"/><circle cx="240" cy="10.56" r="6"/>
    <circle cx="40" cy="100" r="6"/><circle cx="120" cy="100" r="6"/><circle cx="200" cy="100" r="6"/><circle cx="280" cy="100" r="6"/>
    <circle cx="80" cy="189.44" r="6"/><circle cx="160" cy="189.44" r="6"/><circle cx="240" cy="189.44" r="6"/>
  </g>
  <g fill="currentColor" font-size="11" font-family="sans-serif">
    <text x="166" y="94">0</text>
    <text x="246" y="94">2</text>
    <text x="206" y="26">1+√−5</text>
    <text x="166" y="26">√−5</text>
  </g>
</svg>
</div>

*The ring $\mathbb{Z}[\sqrt{-5}]$ as a lattice (horizontal: real part; vertical: multiples of $\sqrt5$). Orange: the ideal
$\mathfrak{p} = (2, 1 + \sqrt{-5})$, the numbers $a + b\sqrt{-5}$ with $a + b$ even. It contains every other point, so its
index (norm) is 2. It is a lattice, but not the multiples of any single element.*

### Dedekind's theorem

**Theorem 17.4 (Dedekind).** In the ring of integers $\mathcal{O}_K$ of any number field, every nonzero ideal other than
$\mathcal{O}_K$ factors as a product of prime ideals, uniquely up to order.

*Proof outline.* Three properties of $\mathcal{O}_K$ do the work: every ideal is finitely generated (it is a subgroup of a
lattice); every nonzero prime ideal is maximal (if $\mathfrak{p} \ne 0$ is prime, $\mathcal{O}_K/\mathfrak{p}$ is a finite integral
domain, hence a field); and $\mathcal{O}_K$ is **integrally closed** (anything in $K$ that is an algebraic integer is already
in $\mathcal{O}_K$, by definition). Rings with these properties are called **Dedekind domains**. The key lemma is that
every nonzero ideal $I$ has an inverse: there is a "fractional ideal" $I^{-1}$ (a set of the form $\frac{1}{c}J$ with $J$ an
ideal) with $II^{-1} = \mathcal{O}_K$. Then "to contain is to divide": $I \supseteq J$ iff $J = IM$ for some ideal $M$, and
prime ideals behave like primes in $\mathbb{Z}$, so the usual proof of unique factorization goes through. The full proof
takes several pages; see Marcus, chapter 3, or Neukirch, chapter I. $\blacksquare$

The **norm of an ideal** is $N(I) = |\mathcal{O}_K / I|$, the number of residue classes. It is multiplicative,
$N(IJ) = N(I)N(J)$, and for a principal ideal $N((\alpha)) = |N(\alpha)|$. In the example, $N(\mathfrak{p}) = 2$ and
$N(\mathfrak{q}) = N(\mathfrak{q}') = 3$, and $N(\mathfrak{p}\mathfrak{q}) = 6 = N(1 + \sqrt{-5})$.

### How primes factor in a quadratic field

Every prime ideal $\mathfrak{p}$ of $\mathcal{O}_K$ contains exactly one prime number $p$ (the generator of
$\mathfrak{p} \cap \mathbb{Z}$), so to find all prime ideals, factor each $(p) = p\mathcal{O}_K$. In a quadratic field the norms
of the factors multiply to $N((p)) = p^2$, so there are only three possibilities:

- $(p) = \mathfrak{p}\mathfrak{p}'$ with $\mathfrak{p} \ne \mathfrak{p}'$, each of norm $p$: $p$ **splits**;
- $(p)$ is itself prime, of norm $p^2$: $p$ is **inert**;
- $(p) = \mathfrak{p}^2$: $p$ **ramifies**.

**Theorem 17.5.** Let $K = \mathbb{Q}(\sqrt d)$ with discriminant $d_K$, and $p$ an odd prime. Then $p$ ramifies if $p \mid d$,
splits if $\left(\frac{d}{p}\right) = 1$, and is inert if $\left(\frac{d}{p}\right) = -1$. (For $p = 2$: 2 ramifies if
$d \equiv 2, 3 \pmod 4$, splits if $d \equiv 1 \pmod 8$, and is inert if $d \equiv 5 \pmod 8$.)

*Proof for odd $p$.* Because $p$ is odd, 2 is invertible mod $p$, and one checks
$\mathcal{O}_K/(p) \cong \mathbb{Z}[\sqrt d]/(p) \cong \mathbb{F}_p[x]/(x^2 - d)$ (send $\sqrt d$ to $x$). The ideals of $\mathcal{O}_K$
containing $p$ correspond to the ideals of this quotient, which correspond to the factors of $x^2 - d$ over $\mathbb{F}_p$.

- If $\left(\frac{d}{p}\right) = -1$, $x^2 - d$ is irreducible, the quotient is the field $\mathbb{F}_{p^2}$, so $(p)$ is maximal:
  inert.
- If $d \equiv c^2$ with $c \not\equiv 0$, then $x^2 - d = (x - c)(x + c)$ with $c \not\equiv -c$. Put
  $\mathfrak{p} = (p, \sqrt d - c)$ and $\mathfrak{p}' = (p, \sqrt d + c)$. Their product is generated by $p^2$, $p(\sqrt d + c)$,
  $p(\sqrt d - c)$ and $d - c^2$, all multiples of $p$; and it contains $p(\sqrt d + c) - p(\sqrt d - c) = 2cp$ and $p^2$,
  hence $p\gcd(2c, p) = p$. So $\mathfrak{p}\mathfrak{p}' = (p)$, and $\mathfrak{p} \ne \mathfrak{p}'$ (otherwise it would contain
  $2c$ and $p$, hence 1): split.
- If $p \mid d$, $x^2 - d \equiv x^2$, and $\mathfrak{p} = (p, \sqrt d)$ has $\mathfrak{p}^2 = (p^2, p\sqrt d, d) = (p)$, using
  $\gcd(p^2, d) = p$ ($d$ is squarefree): ramified. $\blacksquare$

*Examples.* In $\mathbb{Z}[i]$ ($d = -1$): 2 ramifies, $(2) = (1+i)^2$ up to a unit; $p \equiv 1 \pmod 4$ splits, e.g.
$5 = (2+i)(2-i)$; $p \equiv 3 \pmod 4$ stays prime. This is Fermat's two-squares theorem of
[Chapter 11](11-Sums-of-Squares.md) in new clothes: $p = a^2 + b^2 = N(a + bi)$ exactly when $p$ splits into principal
ideals. In $\mathbb{Z}[\sqrt{-5}]$: 2 and 5 ramify; 3, 7, 23, 29, 41 split ($-5$ is a square mod each); 11 and 13 are inert.

Note what the theorem says: the splitting of $p$ depends only on $p$ modulo $|d_K|$ (by quadratic reciprocity,
[Chapter 8](08-Quadratic-Residues-and-Reciprocity.md), $\left(\frac{d}{p}\right)$ is a Dirichlet character of $p$ mod $|d_K|$).
That a prime's behaviour in an extension is governed by a congruence condition is the first case of **class field theory**,
and the search for such laws for every extension is the Langlands programme ([Chapter 21](21-Where-Number-Theory-Goes.md)).

<figure class="play" data-play="twosq" data-mode="gauss"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The Gaussian integers, where factoring into primes is still unique: 5 splits as (2 + i)(2 − i), 3 does not.</figcaption></figure>

## 17.4 The class number

*Level: expert.*

### The class group

How far is $\mathcal{O}_K$ from having unique factorization of elements? Unique factorization of elements holds exactly
when every ideal is principal (a principal ideal domain is a UFD, and for Dedekind domains the converse also holds).
So measure the non-principal ideals.

Call two nonzero ideals $I, J$ **equivalent** if $\alpha I = \beta J$ for some nonzero $\alpha, \beta \in \mathcal{O}_K$. The
equivalence classes form a group under multiplication of ideals, the **ideal class group** $\mathrm{Cl}(K)$. Its
identity is the class of principal ideals, and inverses exist by Dedekind's key lemma. Its order $h_K$ is the
**class number**.

$$
h_K = 1 \iff \text{every ideal is principal} \iff \mathcal{O}_K \text{ has unique factorization}.
$$

**Theorem 17.6.** The class group of a number field is finite.

*Proof for imaginary quadratic fields.* Let $\mathcal{O}_K$ have integral basis $1, \omega$ and let $I$ be a nonzero ideal of
norm $N = N(I)$. Let $m = \lfloor\sqrt N\rfloor$. The $(m+1)^2 > N$ elements $a + b\omega$ with $0 \le a, b \le m$ cannot all lie in
different classes mod $I$ (there are only $N$ classes), so two of them differ by a nonzero $\alpha = a + b\omega \in I$ with
$|a|, |b| \le m$. Then $|N(\alpha)| = |a + b\omega|^2 \le (m + m|\omega|)^2 \le C\cdot N$, where $C = (1 + |\omega|)^2$ depends
only on $K$. Since $\alpha \in I$, $(\alpha) = IJ$ for some ideal $J$ ("to contain is to divide"), with
$N(J) = |N(\alpha)|/N(I) \le C$. So the class of $J$, which is the inverse of the class of $I$, contains an ideal of norm at
most $C$. There are only finitely many ideals of norm at most $C$ (each contains its norm, and $(n)$ has finitely many
ideal divisors). As $I$ runs over all ideals, the inverse classes run over all classes, so there are finitely many. $\blacksquare$

Minkowski sharpened the constant using his theorem on lattice points in convex bodies (the **geometry of numbers**):

**Theorem 17.7 (Minkowski bound).** Every ideal class of a number field $K$ of degree $n$ and signature $(r_1, r_2)$
contains an ideal of norm at most

$$
M_K = \frac{n!}{n^n}\left(\frac{4}{\pi}\right)^{r_2}\sqrt{|d_K|} .
$$

For an imaginary quadratic field $M_K = \frac{2}{\pi}\sqrt{|d_K|}$; for a real one $M_K = \frac12\sqrt{d_K}$. Since an ideal of
norm at most $M_K$ is a product of prime ideals of norm at most $M_K$, **the class group is generated by the prime ideals
above the primes $p \le M_K$.** This turns computing $h_K$ into a finite check.

A side benefit: $M_K \ge 1$ for every $K \ne \mathbb{Q}$ (there is always a class), which forces $|d_K| > 1$: **every number
field other than $\mathbb{Q}$ has a ramified prime** (Minkowski's theorem).

### Small examples

*$\mathbb{Q}(i)$, $\mathbb{Q}(\sqrt{-2})$, $\mathbb{Q}(\sqrt{-3})$, $\mathbb{Q}(\sqrt{-7})$.* The bounds are $\frac2\pi\sqrt4 = 1.27$,
$\frac2\pi\sqrt8 = 1.80$, $\frac2\pi\sqrt3 = 1.10$, $\frac2\pi\sqrt7 = 1.68$, all less than 2. Every class contains an ideal of
norm 1, which is $\mathcal{O}_K$ itself. So $h = 1$: these rings have unique factorization.

*$\mathbb{Q}(\sqrt{-5})$, $d_K = -20$.* The bound is $\frac2\pi\sqrt{20} = 2.85$, so only primes above 2 matter. Since
$-5 \equiv 3 \pmod 4$, 2 ramifies: $(2) = \mathfrak{p}^2$ with $\mathfrak{p} = (2, 1 + \sqrt{-5})$. It is not principal (no element of
norm 2), and $\mathfrak{p}^2 = (2)$ is. So the class group is $\{[\mathcal{O}_K], [\mathfrak{p}]\}$, cyclic of order 2: $h = 2$.
In a field with class number 2, factorizations into irreducibles can differ, but they always have the **same length**
(a theorem of Carlitz, 1960): $2 \cdot 3$ and $(1+\sqrt{-5})(1 - \sqrt{-5})$ both have two factors.

*$\mathbb{Q}(\sqrt{-23})$, $d_K = -23$.* The bound is $\frac2\pi\sqrt{23} = 3.05$: primes 2 and 3. The norm form is
$x^2 + xy + 6y^2$. Since $-23 \equiv 1 \pmod 8$, 2 splits: $(2) = \mathfrak{p}\mathfrak{p}'$. No element has norm 2 (for
$y \ne 0$, $x^2 + xy + 6y^2 = (x + y/2)^2 + \frac{23}{4}y^2 \ge 5.75$), so $\mathfrak{p}$ is not principal. What about
$\mathfrak{p}^2$, of norm 4? Norm 4 elements are $\pm 2$ only, which generate $\mathfrak{p}\mathfrak{p}'$, not $\mathfrak{p}^2$; so
$\mathfrak{p}^2$ is not principal either. But $x = 1, y = 1$ gives an element $1 + \omega = \frac{3 + \sqrt{-23}}{2}$ of norm 8, and
since it is not divisible by 2, its ideal must be $\mathfrak{p}^3$ or $\mathfrak{p}'^3$. So $[\mathfrak{p}]$ has order exactly 3.
The prime 3 splits too ($-23 \equiv 1 \pmod 3$ is a square), and its factors land in the same cyclic group (an element of
norm $6$, $x = 0, y = 1$, i.e. $\omega$, links them to $\mathfrak{p}$). So $\mathrm{Cl}(K)$ is cyclic of order 3: $h = 3$.

*$\mathbb{Q}(\sqrt{10})$, $d_K = 40$.* The bound is $\frac12\sqrt{40} = 3.16$: primes 2 and 3. 2 ramifies,
$(2) = \mathfrak{p}^2$, $\mathfrak{p} = (2, \sqrt{10})$; 3 splits ($10 \equiv 1 \pmod 3$). Norms are $a^2 - 10b^2$, and modulo 5 these
are squares $0, \pm1$, never $\pm2$ or $\pm3$. So the prime ideals of norm 2 and 3 are not principal. But
$N(2 + \sqrt{10}) = 4 - 10 = -6$, so $\mathfrak{p}\mathfrak{q}$ is principal for one of the factors $\mathfrak{q}$ of 3: the classes of
$\mathfrak{p}$ and $\mathfrak{q}$ are inverse, and $[\mathfrak{p}]^2 = 1$ means they are equal. $h = 2$.

Here is a short table, computed by counting reduced binary quadratic forms (Gauss's method, which is equivalent):

| $d$ | $-1$ | $-2$ | $-3$ | $-5$ | $-6$ | $-7$ | $-14$ | $-23$ | $-26$ | $-47$ | $-71$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $h(\mathbb{Q}(\sqrt d))$ | 1 | 1 | 1 | 2 | 2 | 1 | 4 | 3 | 6 | 5 | 7 |

### The analytic class number formula

Dirichlet found that the class number is an $L$-value ([Chapter 15](15-Primes-in-Progressions.md)). Let $\chi_K$ be the
character $p \mapsto \left(\frac{d_K}{p}\right)$ of Theorem 17.5, extended to all integers (the Kronecker symbol). For an
imaginary quadratic field with $w$ roots of unity ($w = 4$ for $\mathbb{Q}(i)$, $6$ for $\mathbb{Q}(\sqrt{-3})$, 2 otherwise),

$$
h_K = \frac{w\sqrt{|d_K|}}{2\pi}\,L(1, \chi_K) ,
$$

and for a real quadratic field with fundamental unit $\varepsilon$ (17.5), $h_K = \frac{\sqrt{d_K}}{2\log\varepsilon}L(1, \chi_K)$.

*Checks.* $\mathbb{Q}(i)$: $L(1,\chi_{-4}) = \frac\pi4$, so $h = \frac{4\cdot2}{2\pi}\cdot\frac\pi4 = 1$. $\mathbb{Q}(\sqrt{-3})$:
$L(1, \chi_{-3}) = \frac{\pi}{3\sqrt3}$, so $h = \frac{6\sqrt3}{2\pi}\cdot\frac{\pi}{3\sqrt3} = 1$. $\mathbb{Q}(\sqrt2)$:
$L(1,\chi_8) = \frac{\log(1+\sqrt2)}{\sqrt2}$ and $\varepsilon = 1 + \sqrt2$, so $h = \frac{\sqrt8}{2\log(1+\sqrt2)}\cdot\frac{\log(1+\sqrt2)}{\sqrt2} = 1$.

Since $h_K \ge 1$, the formula proves $L(1, \chi_K) > 0$: this is how Dirichlet settled the hard, real-character case of
his theorem on primes in progressions. For $d_K < -4$ it can be turned into a finite sum,
$h_K = -\frac{1}{|d_K|}\sum_{a=1}^{|d_K|-1}\chi_K(a)\,a$. For $d_K = -7$: the residues $1, 2, 4$ have $\chi = 1$ and $3, 5, 6$ have
$\chi = -1$, so $h = -\frac17\left((1 + 2 + 4) - (3 + 5 + 6)\right) = 1$. For $d_K = -23$ the same sum gives 3.

## 17.5 Units and Dirichlet's unit theorem

*Level: expert.*

The units of $\mathcal{O}_K$ form a group $\mathcal{O}_K^\times$, the solutions of $N(\varepsilon) = \pm1$. In $\mathbb{Z}$ it is $\{\pm1\}$.

**Imaginary quadratic fields.** The norm is a positive definite form, so $N(\varepsilon) = 1$ has few solutions: in
$\mathbb{Z}[\sqrt d]$ with $d < -1$, $a^2 + |d|b^2 = 1$ forces $\pm1$. In $\mathbb{Z}[i]$ there are 4 units $\pm1, \pm i$; in the
Eisenstein integers, 6, the sixth roots of unity. Otherwise just $\pm 1$.

**Real quadratic fields.** Now $N(a + b\sqrt d) = a^2 - db^2 = \pm1$ is **Pell's equation**
([Chapter 9](09-Diophantine-Equations.md)), which has infinitely many solutions, found by continued fractions
([Chapter 10](10-Continued-Fractions.md)). In ring language:

**Theorem 17.8.** If $d > 1$, there is a unit $\varepsilon > 1$, the **fundamental unit**, such that every unit of
$\mathcal{O}_K$ is $\pm\varepsilon^k$ for a unique integer $k$. So $\mathcal{O}_K^\times \cong \{\pm1\}\times\mathbb{Z}$.

*Proof that units are powers, given that some unit $\ne \pm1$ exists.* The units greater than 1 have the form
$a + b\sqrt d$ with $a, b > 0$ (look at the four sign choices of $\pm a \pm b\sqrt d$ and their product $\pm1$), so there is
a smallest one, $\varepsilon$. If $\eta > 1$ is a unit, choose $k$ with $\varepsilon^k \le \eta < \varepsilon^{k+1}$; then $\eta\varepsilon^{-k}$ is a unit in
$[1, \varepsilon)$, so it is 1 by minimality. Negative units are $-1$ times positive ones, and units in $(0,1)$ are inverses of
units greater than 1. The existence of a nontrivial unit is the solvability of Pell's equation (Chapter 10). $\blacksquare$

| $d$ | 2 | 3 | 5 | 6 | 7 | 10 | 13 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $\varepsilon$ | $1 + \sqrt2$ | $2 + \sqrt3$ | $\frac{1 + \sqrt5}{2}$ | $5 + 2\sqrt6$ | $8 + 3\sqrt7$ | $3 + \sqrt{10}$ | $\frac{3 + \sqrt{13}}{2}$ |
| $N(\varepsilon)$ | $-1$ | $1$ | $-1$ | $1$ | $1$ | $-1$ | $-1$ |

Check: $(1 + \sqrt2)(1 - \sqrt2) = 1 - 2 = -1$, and $\varepsilon^2 = 3 + 2\sqrt2$ gives the Pell solution $3^2 - 2\cdot2^2 = 1$. For
$d = 5$: $\frac{1 + \sqrt5}{2}\cdot\frac{1 - \sqrt5}{2} = \frac{1 - 5}{4} = -1$; its powers involve the Fibonacci numbers.

**The general theorem.** Dirichlet proved in 1846:

**Theorem 17.9 (Dirichlet's unit theorem).** For a number field of signature $(r_1, r_2)$,

$$
\mathcal{O}_K^\times \cong \mu_K \times \mathbb{Z}^{\,r_1 + r_2 - 1},
$$

where $\mu_K$ is the finite cyclic group of roots of unity in $K$. That is, there are $r = r_1 + r_2 - 1$ **fundamental units**
$\varepsilon_1, \ldots, \varepsilon_r$ such that every unit is uniquely $\zeta\,\varepsilon_1^{k_1}\cdots\varepsilon_r^{k_r}$ with $\zeta \in \mu_K$.

*Idea of the proof.* Map a unit $\varepsilon$ to the vector of $\log|\sigma(\varepsilon)|$ over the $r_1 + r_2$ embeddings (one from each
complex pair). Since $|N(\varepsilon)| = 1$, the logs sum to 0 (with the complex ones counted twice), so the image lies in a
hyperplane of dimension $r_1 + r_2 - 1$. The kernel is finite (an element all of whose conjugates have absolute value 1 is
a root of unity, by a theorem of Kronecker), the image is discrete (a bounded region contains only finitely many
algebraic integers of bounded degree), so it is a lattice of rank at most $r_1 + r_2 - 1$. The hard part is that the rank is
exactly that, which needs Minkowski's lattice-point theorem to manufacture enough units. See Marcus, chapter 5.

Checks: imaginary quadratic $(0, 1)$: rank 0, only roots of unity. Real quadratic $(2, 0)$: rank 1, Theorem 17.8.
$\mathbb{Q}(\sqrt[3]2)$ with signature $(1, 1)$: rank 1. A unit there is $\sqrt[3]2 - 1$: its norm is the product of
$\alpha_j - 1$ over the three cube roots $\alpha_j$ of 2, which is $-f(1)$ for $f(x) = x^3 - 2$, i.e. $1$. Its inverse is
$\sqrt[3]4 + \sqrt[3]2 + 1$, since $(\sqrt[3]2 - 1)(\sqrt[3]4 + \sqrt[3]2 + 1) = 2 - 1 = 1$.

The **regulator** $R_K$, the volume of the unit lattice, enters the general class number formula: the Dedekind zeta function
$\zeta_K(s) = \sum_I N(I)^{-s}$ has a simple pole at $s = 1$ with residue

$$
\frac{2^{r_1}(2\pi)^{r_2}\, h_K\, R_K}{w_K\sqrt{|d_K|}} ,
$$

which ties together all the invariants of this chapter. For a quadratic field $\zeta_K(s) = \zeta(s)L(s, \chi_K)$, and this
becomes the formula of 17.4.

## 17.6 Gauss's class number problem

*Level: expert (history and statements).*

### Gauss's conjectures

In his *Disquisitiones Arithmeticae* of 1801 Gauss studied binary quadratic forms $ax^2 + bxy + cy^2$, grouping them into
classes under changes of variables. In modern language, the classes of forms of discriminant $d_K < 0$ correspond to
the ideal classes of $\mathbb{Q}(\sqrt{d_K})$. From extensive tables he conjectured, in our language:

1. The class number $h(d)$ of $\mathbb{Q}(\sqrt d)$, $d < 0$, tends to infinity as $|d| \to \infty$. So for each $h$ there are
   only finitely many imaginary quadratic fields with class number $h$.
2. The imaginary quadratic fields with class number 1 are exactly the nine with
   $d = -1, -2, -3, -7, -11, -19, -43, -67, -163$.
3. There are infinitely many real quadratic fields with class number 1.

Check 2 against a computation: among squarefree $d$ from $-1$ to $-400$, the ones with $h = 1$ are exactly the nine on
Gauss's list.

### Answers

**The first conjecture** was proved by Hans Heilbronn in 1934, building on work of Hecke, Deuring and Mordell. Siegel's
theorem of 1935 gave the growth rate: $h(d) = |d|^{1/2 + o(1)}$. But the proofs were **ineffective**: because of a possible
Siegel zero ([Chapter 15](15-Primes-in-Progressions.md)), they could not say how large $|d|$ must be before $h(d) > 1$, so
they could not rule out a tenth field.

**The tenth field does not exist.** Three proofs came in quick succession.

- **Kurt Heegner**, a German schoolteacher and radio engineer, published a proof in 1952 using modular functions. It was
  thought to contain gaps (in part because it relied on unproved claims of Weber's) and was largely ignored. Heegner died in
  1965.
- **Alan Baker** proved it in 1966 with his theory of linear forms in logarithms of algebraic numbers, part of the work for
  which he received the Fields Medal in 1970.
- **Harold Stark** proved it in 1967, by a method close to Heegner's, and then showed that Heegner's proof was essentially
  correct. Max Deuring had reached the same conclusion. Heegner is now credited with the first proof, and the special
  points his method uses are called **Heegner points**; they returned in the work on the Birch and Swinnerton-Dyer
  conjecture ([Chapter 19](19-Elliptic-Curves.md)).

Baker and Stark, independently, settled class number 2 in 1971. An effective solution for every $h$ came from combining
Dorian Goldfeld's 1976 reduction with the theorem of Benedict Gross and Don Zagier (1986) on heights of Heegner points;
Mark Watkins (2004) used it to list every imaginary quadratic field with class number up to 100.

**The third conjecture is open.** Real quadratic fields seem to have class number 1 most of the time (for prime
discriminants, heuristics by Henri Cohen and Hendrik Lenstra in 1984 predict about 75.4 percent), but it is not even proved
that infinitely many number fields of any fixed degree have class number 1.

### Euler's prime-producing polynomial and $e^{\pi\sqrt{163}}$

Two famous curiosities are explained by $h(-163) = 1$.

- Euler noticed in 1772 that $n^2 + n + 41$ is prime for $n = 0, 1, \ldots, 39$ (at $n = 40$ it is $1681 = 41^2$). In 1913
  Georg Rabinowitsch proved that $n^2 + n + q$ is prime for all $0 \le n \le q - 2$ exactly when $\mathbb{Q}(\sqrt{1 - 4q})$ has
  class number 1. With $q = 41$, $1 - 4q = -163$. *Why:* if $n^2 + n + q = N\left(n + \frac{1 + \sqrt{-163}}{2}\right)$ were
  composite with a small prime factor $p < q$, then $p$ would split in $\mathbb{Q}(\sqrt{-163})$, and with class number 1 the
  factor would be principal, giving an element of norm $p$; but every non-rational element has norm at least
  $\frac{163}{4} > 40$.
- $e^{\pi\sqrt{163}} = 262537412640768743.99999999999925\ldots$, astonishingly close to the integer
  $640320^3 + 744$. The reason is that the modular $j$-function takes an integer value at $\frac{1 + \sqrt{-163}}{2}$ because
  the class number is 1, and $e^{\pi\sqrt{163}}$ is that integer plus a tiny correction of size about $e^{-\pi\sqrt{163}}$
  times a constant. It is not a coincidence, and it is not an integer.

### Cyclotomic fields and Fermat

Kummer called a prime $p$ **regular** if $p$ does not divide the class number of $\mathbb{Q}(\zeta_p)$, and proved in 1850
that Fermat's last theorem holds for regular prime exponents. All primes below 37 are regular; 37, 59 and 67 are the first
irregular ones. It is known that infinitely many primes are irregular (Jensen, 1915), and believed, but unproved, that
infinitely many are regular. The ring $\mathbb{Z}[\zeta_p]$ itself has unique factorization exactly for $p \le 19$
(Montgomery and Uchida, 1971); for $p = 23$ the class number is 3, which is where Kummer first saw unique factorization
fail. The full proof of Fermat's last theorem took a different road: [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md).

## Check yourself

??? question "1. Show that $\frac{1 + \sqrt{-3}}{2}$ and $\frac{1 + \sqrt{5}}{2}$ are algebraic integers, but $\frac{1 + \sqrt{-1}}{2}$ is not."

    $\frac{1 \pm\sqrt{-3}}{2}$ are the roots of $x^2 - x + 1$, and $\frac{1 \pm \sqrt5}{2}$ of $x^2 - x - 1$: monic with integer coefficients.
    The minimal polynomial of $\frac{1 + i}{2}$ is $x^2 - x + \frac12$, which does not have integer coefficients, so it is not an
    algebraic integer. (This matches Theorem 17.3: $-3 \equiv 5 \equiv 1 \pmod 4$, but $-1 \equiv 3$.)

??? question "2. Find the ring of integers and discriminant of $\mathbb{Q}(\sqrt{-7})$, $\mathbb{Q}(\sqrt6)$, $\mathbb{Q}(\sqrt{13})$ and $\mathbb{Q}(\sqrt{-10})$."

    $-7 \equiv 1 \pmod 4$: $\mathbb{Z}[\frac{1+\sqrt{-7}}{2}]$, $d_K = -7$. $6 \equiv 2$: $\mathbb{Z}[\sqrt6]$, $d_K = 24$. $13 \equiv 1$:
    $\mathbb{Z}[\frac{1+\sqrt{13}}{2}]$, $d_K = 13$. $-10 \equiv 2$: $\mathbb{Z}[\sqrt{-10}]$, $d_K = -40$.

??? question "3. In $\mathbb{Z}[\sqrt{-5}]$, show that $3$ and $1 + \sqrt{-5}$ are irreducible but not prime."

    $N(3) = 9$, $N(1 + \sqrt{-5}) = 6$. A proper factor would have norm 3 (or 2 for the second), but $a^2 + 5b^2 \in \{2, 3\}$ has no
    solutions. So both are irreducible. Not prime: $3 \mid (1 + \sqrt{-5})(1 - \sqrt{-5}) = 6$ but $\frac{1 \pm \sqrt{-5}}{3} \notin \mathbb{Z}[\sqrt{-5}]$;
    and $1 + \sqrt{-5} \mid 2\cdot3$ but it divides neither (norms 6 does not divide 4 or 9).

??? question "4. Check that $\mathfrak{q}\mathfrak{q}' = (3)$ and $\mathfrak{p}\mathfrak{q}' = (1 - \sqrt{-5})$ in $\mathbb{Z}[\sqrt{-5}]$."

    $\mathfrak{q}\mathfrak{q}'$ is generated by $9$, $3(1 - \sqrt{-5})$, $3(1 + \sqrt{-5})$ and $(1+\sqrt{-5})(1-\sqrt{-5}) = 6$: all multiples
    of 3, and $9 - 6 = 3$ is in it. So it is $(3)$.

    $\mathfrak{p}\mathfrak{q}'$ is generated by $6$, $2(1 - \sqrt{-5})$, $3(1 + \sqrt{-5})$ and $(1 + \sqrt{-5})(1 - \sqrt{-5}) = 6$. Each is a
    multiple of $1 - \sqrt{-5}$: $6 = (1 - \sqrt{-5})(1 + \sqrt{-5})$, and $3(1 + \sqrt{-5}) = (1 - \sqrt{-5})(-2 + \sqrt{-5})$ (multiply
    out: $-2 + \sqrt{-5} + 2\sqrt{-5} + 5 = 3 + 3\sqrt{-5}$). Conversely $6 - 3(1 + \sqrt{-5}) = 3(1 - \sqrt{-5})$ is in the ideal, and
    so is $3(1 - \sqrt{-5}) - 2(1 - \sqrt{-5}) = 1 - \sqrt{-5}$. So $\mathfrak{p}\mathfrak{q}' = (1 - \sqrt{-5})$.

??? question "5. Show that $\mathbb{Z}[\sqrt{-5}]/\mathfrak{p}$ has 2 elements and $\mathbb{Z}[\sqrt{-5}]/\mathfrak{q}$ has 3, where $\mathfrak{p} = (2, 1+\sqrt{-5})$ and $\mathfrak{q} = (3, 1+\sqrt{-5})$."

    Mod $\mathfrak{p}$: $\sqrt{-5} \equiv -1$, so $a + b\sqrt{-5} \equiv a - b$, and $2 \equiv 0$: every element is $\equiv 0$ or $1$. And
    $1 \notin \mathfrak{p}$ (every element $2x + (1 + \sqrt{-5})y$ has $a + b$ even, as the picture shows). So 2 classes. Mod $\mathfrak{q}$:
    again $a + b\sqrt{-5} \equiv a - b$, now modulo 3, giving classes $0, 1, 2$, and they are distinct because $\mathfrak{q} \cap \mathbb{Z} = 3\mathbb{Z}$
    (if $1 \in \mathfrak{q}$, then $\mathfrak{q}\mathfrak{q}' = (3)$ would give $\mathfrak{q}' \subseteq (3)$, false since $1 - \sqrt{-5} \notin (3)$).

??? question "6. Use Theorem 17.5 to decide how 3, 5, 7 and 11 factor in $\mathbb{Z}[\sqrt{-2}]$, and write the split ones as norms."

    $\left(\frac{-2}{p}\right) = 1$ exactly when $p \equiv 1, 3 \pmod 8$. So 3 and 11 split, 5 and 7 are inert. Since $h = 1$, split
    primes are norms $a^2 + 2b^2$: $3 = 1 + 2$, $11 = 9 + 2$. And $(2) = (\sqrt{-2})^2$ ramifies.

??? question "7. Prove that $\mathbb{Q}(\sqrt{-7})$ and $\mathbb{Q}(\sqrt{-11})$ have class number 1."

    Minkowski bounds $\frac2\pi\sqrt7 = 1.68$ and $\frac2\pi\sqrt{11} = 2.11$. For $-7$ the bound is below 2, so $h = 1$. For $-11$ we must
    look at 2: $-11 \equiv 5 \pmod 8$, so 2 is inert, and $(2)$ is principal. Every class contains an ideal of norm 1 or a
    product of primes of norm $\le 2.11$; there is none of norm 2. So $h = 1$.

??? question "8. In $\mathbb{Q}(\sqrt{-14})$, let $\mathfrak{q}$ be a prime ideal above 3. Show that its class has order 4. (Hint: $N(5 + 2\sqrt{-14}) = 81$.)"

    $-14 \equiv 1 \pmod 3$ is a square, so 3 splits: $(3) = \mathfrak{q}\mathfrak{q}'$. Norms are $a^2 + 14b^2$. $\mathfrak{q}$ is not principal
    (no element has norm 3). $\mathfrak{q}^2$, of norm 9, is not principal: the only elements of norm 9 are $\pm3$, which generate
    $\mathfrak{q}\mathfrak{q}' \ne \mathfrak{q}^2$. $\mathfrak{q}^3$ is not principal: $a^2 + 14b^2 = 27$ has no solution ($b = 0$ gives 27,
    $b = 1$ gives 13, neither a square). Now $5 + 2\sqrt{-14}$ has norm $25 + 56 = 81 = 3^4$, so its ideal is $\mathfrak{q}^a\mathfrak{q}'^b$
    with $a + b = 4$; if $a, b \ge 1$ it would be divisible by $\mathfrak{q}\mathfrak{q}' = (3)$, but $5 + 2\sqrt{-14}$ is not a multiple of
    3. So it is $\mathfrak{q}^4$ or $\mathfrak{q}'^4$, and since $[\mathfrak{q}'] = [\mathfrak{q}]^{-1}$, either way $[\mathfrak{q}]^4 = 1$. The
    class has order exactly 4, so 4 divides $h$; in fact $h = 4$, as the table says.

??? question "9. Find the fundamental unit of $\mathbb{Q}(\sqrt3)$ and the smallest solution of $x^2 - 3y^2 = 1$ with $y > 1$."

    The smallest unit $a + b\sqrt3 > 1$ is $2 + \sqrt3$ ($4 - 3 = 1$). There is no unit of norm $-1$ ($a^2 - 3b^2 = -1$ would mean
    $a^2 \equiv -1 \equiv 2 \pmod 3$, impossible). Its square $(2 + \sqrt3)^2 = 7 + 4\sqrt3$: $49 - 48 = 1$, so $(7, 4)$.

??? question "10. Show that $1 + \sqrt[3]2 + \sqrt[3]4$ is a unit of $\mathbb{Z}[\sqrt[3]2]$. What does the unit theorem say about all units of $\mathbb{Q}(\sqrt[3]2)$?"

    $(\sqrt[3]2 - 1)(\sqrt[3]4 + \sqrt[3]2 + 1) = (\sqrt[3]2)^3 - 1 = 1$, so it is a unit with inverse $\sqrt[3]2 - 1$. The signature is
    $(1, 1)$, so the unit rank is $1 + 1 - 1 = 1$, and the only real roots of unity are $\pm1$: every unit is $\pm\varepsilon^k$ for a
    fundamental unit $\varepsilon$ (which turns out to be $1 + \sqrt[3]2 + \sqrt[3]4$ itself).

??? question "11. Check that $n^2 + n + 41$ is prime for $n = 39$ and composite for $n = 40$ and $n = 41$. Why does the class number argument stop working there?"

    $39^2 + 39 + 41 = 1601$, prime. $40^2 + 40 + 41 = 1681 = 41^2$, and $41^2 + 41 + 41 = 41\cdot 43$. The argument showed that no prime
    $p < 41$ divides $n^2 + n + 41$ (such a $p$ would be a norm, but norms of non-rational elements are at least 41). A value below
    $41^2$ with no prime factor below 41 must be prime; at $n = 40$ the value reaches $41^2$ and the factor 41 itself is allowed.

??? question "12. Use the finite class number formula $h = -\frac{1}{|d|}\sum_{a=1}^{|d|-1}\chi(a)a$ to compute $h$ for $d_K = -11$. ($\chi(a) = \left(\frac{a}{11}\right)$.)"

    The squares mod 11 are $1, 3, 4, 5, 9$ ($\chi = +1$); the non-squares are $2, 6, 7, 8, 10$ ($\chi = -1$). Sums: $1 + 3 + 4 + 5 + 9 = 22$ and
    $2 + 6 + 7 + 8 + 10 = 33$. So $h = -\frac{1}{11}(22 - 33) = 1$, agreeing with exercise 7.

## What you learned

- A number field is a finite extension of $\mathbb{Q}$; its ring of integers $\mathcal{O}_K$ (roots of monic integer polynomials) is a
  ring, a lattice of rank $n$, with discriminant $d_K$.
- For $K = \mathbb{Q}(\sqrt d)$: $\mathcal{O}_K = \mathbb{Z}[\sqrt d]$ if $d \equiv 2, 3 \pmod 4$ and $\mathbb{Z}[\frac{1 + \sqrt d}{2}]$ if
  $d \equiv 1$, with $d_K = 4d$ or $d$.
- Unique factorization of elements can fail ($6 = 2\cdot3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$), but ideals always factor uniquely into
  prime ideals (Dedekind); in a quadratic field, $p$ splits, stays inert or ramifies according to $\left(\frac{d}{p}\right)$.
- The class group measures the failure; it is finite, the Minkowski bound computes it, and Dirichlet's formula expresses
  $h_K$ through $L(1, \chi_K)$.
- Units form $\mu_K \times \mathbb{Z}^{r_1 + r_2 - 1}$ (Dirichlet); in real quadratic fields they are the solutions of Pell's equation.
- Gauss's nine imaginary quadratic fields with class number 1 are the only ones (Heegner, Baker, Stark), which explains
  $n^2 + n + 41$ and $e^{\pi\sqrt{163}}$; whether infinitely many real quadratic fields have class number 1 is open.

**Next:** [Chapter 18](18-p-adic-Numbers.md), which builds new completions of $\mathbb{Q}$, one for each prime, and the
local-global principle.

## Further reading

- D. A. Marcus, *Number Fields*, 1977 (2nd edition 2018). The friendliest full course; chapters 2-5 cover this chapter.
- K. Ireland and M. Rosen, *A Classical Introduction to Modern Number Theory*, 2nd edition, 1990, chapters 12-14.
- I. Stewart and D. Tall, *Algebraic Number Theory and Fermat's Last Theorem*, 4th edition, 2015.
- J. Neukirch, *Algebraic Number Theory*, 1999. The graduate standard.
- H. Cohen, *A Course in Computational Algebraic Number Theory*, 1993, for computing class groups and units.
- D. A. Cox, *Primes of the Form $x^2 + ny^2$*, 1989 (2nd edition 2013). From Fermat and Gauss to class field theory and
  complex multiplication, including $e^{\pi\sqrt{163}}$.
- D. Goldfeld, "Gauss's class number problem for imaginary quadratic fields", *Bulletin of the American Mathematical
  Society* 13, 1985.
- H. M. Stark, "On the 'gap' in a theorem of Heegner", *Journal of Number Theory* 1, 1969.
- On this site: [Algebra, Chapter 18](../algebra/18-Factorization-in-Rings.md) (Euclidean domains, $\mathbb{Z}[\sqrt{-5}]$, Kummer),
  [Algebra, Chapter 22](../algebra/22-Where-Algebra-Goes.md) (class groups and where algebra goes),
  [Geometry book](../geometry/index.md) for lattices; the U of T guide
  [Polynomials, UFD and resultants](../../uoft/MAT240H1/unit09.md); the gentle lessons
  [Unique factorisation, proved](../../topics/number-theory/level-6/06-unique-factorisation.md) and
  [Sums of two squares](../../topics/number-theory/level-7/06-sums-two-squares.md).
- Number fields in cryptography: the [cryptography book](https://cryptography.akadian.ca/book/); the number field sieve,
  the fastest known way to factor RSA moduli, works in rings of integers like these
  ([Chapter 12](12-Primality-Factoring-and-RSA.md)).
