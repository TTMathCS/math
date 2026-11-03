# 19. Fields and extensions

*Can you double a cube with a straightedge and compass? Trisect any angle? For two thousand years nobody could, and
nobody could prove it impossible. The proof, when it came in 1837, was not geometry at all: it was a count of
dimensions. This chapter builds the tool that does the counting, the degree of a field extension, and uses it to settle
those old problems. Then it builds every finite field there is, the arithmetic inside error-correcting codes and modern
ciphers, and ends at the edge of algebra itself: numbers like $\pi$ that no polynomial can catch.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a field extension is, why it is a vector space, and how its degree multiplies in towers (with proof)
    - algebraic elements and minimal polynomials, and how to compute inside $\mathbb{Q}(\alpha)$ (including inverses)
    - why doubling the cube, trisecting a $60^\circ$ angle and constructing a regular 7-gon or 9-gon are impossible
    - splitting fields: that they exist, that they are unique, and how to find their degree
    - every finite field: one of each size $p^n$, with a cyclic multiplicative group, and how to compute in $\mathbb{F}_8$
    - transcendental numbers: Liouville's proof that his number is one, and what is known about $e$ and $\pi$

    **You need:** [Chapter 18](18-Factorization-in-Rings.md) (irreducible polynomials, Eisenstein, PIDs) and
    [Chapter 17](17-Rings-and-Ideals.md) (quotient rings, maximal ideals give fields, characteristic). Basic linear
    algebra (span, linear independence, basis, dimension), as in MAT240 [Unit 3](../../uoft/MAT240H1/unit03.md).
    For the geometry of 19.3, the gentler [Compass and straightedge](../../topics/geometry/level-5/01-compass-straightedge.md).

    **Levels:** 19.1 and 19.2 are advanced; 19.3 is advanced but concrete; 19.4 and 19.5 are advanced to expert
    (full proofs); 19.6 is expert.

## 19.1 Field extensions, degree, and the tower law

*Level: advanced.* Start with a question you can answer by hand. Which numbers can you reach from the rationals if you
are also allowed to use $\sqrt2$, with $+$, $-$, $\times$ and $\div$? Things like $\tfrac{3}{1 + \sqrt2}$ or
$(5 - \sqrt2)^4$. Every such number simplifies to $a + b\sqrt2$ with $a, b \in \mathbb{Q}$:

$$
\frac{3}{1 + \sqrt2} = \frac{3(1 - \sqrt2)}{(1 + \sqrt2)(1 - \sqrt2)} = \frac{3 - 3\sqrt2}{-1} = -3 + 3\sqrt2 .
$$

So the set $\mathbb{Q}(\sqrt2) = \{a + b\sqrt2 : a, b \in \mathbb{Q}\}$ is closed under all four operations: it is a
**field**. It contains $\mathbb{Q}$, and every element is a combination of just two "basis" numbers, $1$ and $\sqrt2$,
with rational coefficients. That is the language of linear algebra, and it is the key to everything in this chapter.

**Definitions.** If $F \subseteq K$ are fields (with the same operations), $K$ is an **extension** of $F$, written
$K/F$ ("$K$ over $F$", not a quotient). Then $K$ is a vector space over $F$: you can add elements of $K$ and multiply
them by scalars from $F$, and the vector space rules hold because they are special cases of the field rules. The
**degree** of the extension is the dimension:

$$
[K : F] = \dim_F K .
$$

The extension is **finite** if the degree is finite. For a set $S \subseteq K$, $F(S)$ means the smallest subfield of
$K$ containing $F$ and $S$; for one element, $F(\alpha)$ is a **simple** extension.

**Examples.**

- $[\mathbb{C} : \mathbb{R}] = 2$, with basis $1, i$.
- $[\mathbb{Q}(\sqrt2) : \mathbb{Q}] = 2$, with basis $1, \sqrt2$ (independent because $\sqrt2$ is irrational).
- $[\mathbb{R} : \mathbb{Q}]$ is infinite (in fact $\mathbb{R}$ has uncountable dimension over $\mathbb{Q}$).
- $[F : F] = 1$, and $[K : F] = 1$ only when $K = F$.

**Theorem 19.1 (tower law).** If $F \subseteq K \subseteq L$ are fields with $[L:K]$ and $[K:F]$ finite, then

$$
[L : F] = [L : K]\,[K : F] .
$$

*Proof.* Let $\alpha_1, \ldots, \alpha_m$ be a basis of $K$ over $F$ and $\beta_1, \ldots, \beta_n$ a basis of $L$ over
$K$. We show the $mn$ products $\alpha_i \beta_j$ are a basis of $L$ over $F$.

*They span.* Any $x \in L$ is $x = \sum_j c_j \beta_j$ with $c_j \in K$, and each $c_j = \sum_i a_{ij} \alpha_i$ with
$a_{ij} \in F$. So $x = \sum_{i,j} a_{ij}\, \alpha_i \beta_j$.

*They are independent.* Suppose $\sum_{i,j} a_{ij} \alpha_i \beta_j = 0$ with $a_{ij} \in F$. Group by $j$:
$\sum_j \big( \sum_i a_{ij} \alpha_i \big) \beta_j = 0$. The inner sums are in $K$, and the $\beta_j$ are independent
over $K$, so each inner sum is $0$. Then, since the $\alpha_i$ are independent over $F$, every $a_{ij} = 0$.
$\blacksquare$

The tower law's most useful form is a divisibility: **if $F \subseteq K \subseteq L$, then $[K:F]$ divides $[L:F]$.**
It is the field version of Lagrange's theorem ([Chapter 14](14-Subgroups-Cosets-and-Lagrange.md)), and it will do the
same kind of work: proving that things cannot exist because the numbers do not divide.

**Worked example: $\mathbb{Q}(\sqrt2, \sqrt3)$.** First, $\sqrt3 \notin \mathbb{Q}(\sqrt2)$. If $\sqrt3 = a + b\sqrt2$
with $a, b$ rational, square: $3 = a^2 + 2b^2 + 2ab\sqrt2$. Since $\sqrt2$ is irrational, $ab = 0$. If $b = 0$,
$\sqrt3 = a$ is rational; if $a = 0$, $\sqrt3 = b\sqrt2$ gives $\sqrt6 = 2b$ rational. Both false. So $\sqrt3$ satisfies
$x^2 - 3$ over $\mathbb{Q}(\sqrt2)$ with no root there, and $[\mathbb{Q}(\sqrt2, \sqrt3) : \mathbb{Q}(\sqrt2)] = 2$. By
the tower law

$$
[\mathbb{Q}(\sqrt2, \sqrt3) : \mathbb{Q}] = 2 \cdot 2 = 4,
$$

with basis the products $\{1, \sqrt2\} \times \{1, \sqrt3\}$, that is $1, \sqrt2, \sqrt3, \sqrt6$. The intermediate
fields are drawn below; you will see in [Chapter 20](20-Galois-Theory.md) that there are exactly these three in between,
and why.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 260" role="img" aria-label="Field diagram: Q at the bottom; Q of root 2, Q of root 6 and Q of root 3 in the middle row; Q of root 2 and root 3 at the top. Every line is an extension of degree 2.">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="160" y1="222" x2="62" y2="148"/>
    <line x1="160" y1="222" x2="160" y2="148"/>
    <line x1="160" y1="222" x2="258" y2="148"/>
    <line x1="62" y1="118" x2="160" y2="48"/>
    <line x1="160" y1="118" x2="160" y2="48"/>
    <line x1="258" y1="118" x2="160" y2="48"/>
  </g>
  <g stroke="currentColor" stroke-width="1">
    <rect x="110" y="18" width="100" height="30" rx="6" fill="#eea66f"/>
    <rect x="22" y="118" width="80" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="120" y="118" width="80" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="218" y="118" width="80" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="130" y="222" width="60" height="30" rx="6" fill="#7ccf9a"/>
  </g>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="160" y="38">ℚ(√2, √3)</text>
    <text x="62" y="138">ℚ(√2)</text>
    <text x="160" y="138">ℚ(√6)</text>
    <text x="258" y="138">ℚ(√3)</text>
    <text x="160" y="242">ℚ</text>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="100" y="92">2</text><text x="170" y="92">2</text><text x="220" y="92">2</text>
    <text x="100" y="196">2</text><text x="170" y="196">2</text><text x="220" y="196">2</text>
  </g>
</svg>
</div>

## 19.2 Algebraic elements and minimal polynomials

*Level: advanced.* Why was $\mathbb{Q}(\sqrt2)$ only two-dimensional? Because $\sqrt2$ satisfies a polynomial of degree
2, so $(\sqrt2)^2$ is not new: it equals $2$. In general, powers of $\alpha$ stop being new as soon as $\alpha$ satisfies
a polynomial.

**Definitions.** Let $K/F$ be an extension and $\alpha \in K$. Then $\alpha$ is **algebraic** over $F$ if
$f(\alpha) = 0$ for some nonzero $f \in F[x]$, and **transcendental** over $F$ otherwise. The extension $K/F$ is
**algebraic** if every element of $K$ is algebraic over $F$.

**Theorem 19.2 (minimal polynomial).** Let $\alpha$ be algebraic over $F$. Then there is a unique monic polynomial
$m_\alpha \in F[x]$ of least degree with $m_\alpha(\alpha) = 0$. It is irreducible, it divides every $f \in F[x]$ with
$f(\alpha) = 0$, and

$$
F(\alpha) \cong F[x] / (m_\alpha), \qquad [F(\alpha) : F] = \deg m_\alpha,
$$

with basis $1, \alpha, \alpha^2, \ldots, \alpha^{d-1}$ where $d = \deg m_\alpha$.

*Proof.* Consider the **evaluation homomorphism** $\mathrm{ev}: F[x] \to K$, $f \mapsto f(\alpha)$. Its kernel $I$ is an
ideal of $F[x]$, nonzero because $\alpha$ is algebraic. $F[x]$ is a PID ([Chapter 18](18-Factorization-in-Rings.md)), so
$I = (m)$ for a unique monic $m$. Everything in $I$ is a multiple of $m$, which gives the "least degree" and "divides"
claims.

The image of $\mathrm{ev}$ is $F[\alpha]$, the polynomial expressions in $\alpha$. By the first isomorphism theorem
([Chapter 17](17-Rings-and-Ideals.md)), $F[x]/(m) \cong F[\alpha]$. This image sits inside the field $K$, so it has no
zero divisors, so $(m)$ is a prime ideal, so $m$ is irreducible (if $m = gh$ with smaller degrees, then
$g(\alpha)h(\alpha) = 0$ with neither factor $0$). In the PID $F[x]$, an irreducible generates a maximal ideal, so
$F[x]/(m)$ is a field. So $F[\alpha]$ is already a field, and it is the smallest field containing $F$ and $\alpha$:
$F[\alpha] = F(\alpha)$.

For the basis: divide any $f$ by $m$, $f = qm + r$ with $\deg r < d$; then $f(\alpha) = r(\alpha)$, so
$1, \alpha, \ldots, \alpha^{d-1}$ span. A dependence $\sum_{k<d} c_k \alpha^k = 0$ would be a nonzero polynomial of degree
less than $d$ vanishing at $\alpha$, impossible. $\blacksquare$

**In practice:** to find $[F(\alpha):F]$, find a monic polynomial with root $\alpha$ and **prove it irreducible** (by
Eisenstein, reduction mod $p$, or the rational root test, [Chapter 18](18-Factorization-in-Rings.md)). Then it is the
minimal polynomial.

**Worked example: $\alpha = \sqrt2 + \sqrt3$.** Find a polynomial:

$$
\alpha^2 = 5 + 2\sqrt6, \qquad (\alpha^2 - 5)^2 = 24, \qquad \alpha^4 - 10\alpha^2 + 1 = 0 .
$$

Is $x^4 - 10x^2 + 1$ irreducible over $\mathbb{Q}$? Its rational root candidates $\pm 1$ give $1 - 10 + 1 \ne 0$. For a
factorization into quadratics we can use degrees instead: $\alpha^3 = 11\sqrt2 + 9\sqrt3$ (expand and check), so
$\sqrt2 = \tfrac{\alpha^3 - 9\alpha}{2} \in \mathbb{Q}(\alpha)$, and then $\sqrt3 = \alpha - \sqrt2 \in \mathbb{Q}(\alpha)$.
So $\mathbb{Q}(\alpha) = \mathbb{Q}(\sqrt2, \sqrt3)$, which has degree 4 by 19.1. So the minimal polynomial has degree 4
and is $x^4 - 10x^2 + 1$. (Curiously, this polynomial factors mod every prime, just like $x^4 + 1$ in 18.6.)

This also shows something surprising: a field made by adjoining two numbers can be made by adjoining one. The
**primitive element theorem** says this always happens for finite extensions in characteristic 0 (Chapter 20 uses it).

**Computing inverses.** In $\mathbb{Q}(\sqrt[3]2)$, every element is $a + b\sqrt[3]2 + c\sqrt[3]4$. What is
$\tfrac{1}{1 + \sqrt[3]2}$? Write $t = \sqrt[3]2$, so $t^3 = 2$. The identity $1 + t^3 = (1 + t)(1 - t + t^2)$ gives
$(1 + t)(1 - t + t^2) = 3$, so

$$
\frac{1}{1 + \sqrt[3]2} = \frac{1 - \sqrt[3]2 + \sqrt[3]4}{3} .
$$

Check numerically: $1 + \sqrt[3]2 \approx 2.2599$, and $(1 - 1.2599 + 1.5874)/3 \approx 0.4425 \approx 1/2.2599$. In
general, when no identity jumps out, solve $(1 + t)(c_0 + c_1 t + c_2 t^2) = 1$ as three linear equations after
replacing $t^3$ by $2$, or run the extended Euclidean algorithm on $1 + x$ and $x^3 - 2$ in $\mathbb{Q}[x]$; it gives
$r(x)(1 + x) + s(x)(x^3 - 2) = 1$, and then $r(t)$ is the inverse. That is the proof of Theorem 19.2 turned into an
algorithm.

**Finite implies algebraic.** If $[K:F] = n$, then any $n + 1$ elements $1, \alpha, \ldots, \alpha^n$ are dependent, so
$\alpha$ satisfies a polynomial of degree at most $n$. Combined with the tower law:

**Corollary 19.3.** If $\alpha$ and $\beta$ are algebraic over $F$, so are $\alpha + \beta$, $\alpha - \beta$,
$\alpha\beta$ and $\alpha/\beta$ ($\beta \ne 0$). So the algebraic numbers form a field.

*Proof.* $[F(\alpha, \beta) : F] = [F(\alpha)(\beta) : F(\alpha)]\,[F(\alpha):F] \le \deg m_\beta \cdot \deg m_\alpha$,
finite (the first factor is at most $\deg m_\beta$ because $m_\beta$ still kills $\beta$ over the bigger field $F(\alpha)$).
All four combinations lie in this finite extension, so they are algebraic. $\blacksquare$

Notice how odd this proof is: it shows $\sqrt2 + \sqrt[3]3$ satisfies a polynomial of degree at most 6 with rational
coefficients without finding it. (It is $x^6 - 6x^4 - 6x^3 + 12x^2 - 36x + 1$.) The field of all complex numbers algebraic
over $\mathbb{Q}$ is written $\overline{\mathbb{Q}}$.

## 19.3 Constructible numbers and three impossible problems

*Level: advanced.* Greek geometers set three problems with straightedge (an unmarked ruler) and compass:

1. **Doubling the cube:** given a cube's edge, construct the edge of a cube with twice the volume, that is,
   $\sqrt[3]2$ times as long.
2. **Trisecting the angle:** divide any given angle into three equal parts.
3. **Squaring the circle:** construct a square with the same area as a given circle, that is, a side $\sqrt\pi$ times
   the radius.

They found constructions using other tools (marked rulers, special curves), and they did not find straightedge and
compass constructions. The impossibility of the first two was proved by Pierre Wantzel in 1837; the third waited for
$\pi$ to be proved transcendental in 1882.

### What can be constructed

Make the rules precise. Start with two points in the plane, $0$ and $1$ (setting the unit). The moves are: draw the line
through two constructed points; draw the circle with a constructed centre through another constructed point. Each
intersection of lines and circles drawn is a new constructed point. A real number is **constructible** if it is a
coordinate of a constructed point (equivalently, a length between constructed points).

**Theorem 19.4.** The constructible numbers form a subfield of $\mathbb{R}$ that is closed under square roots of
positive elements.

*Sketch.* Sums and differences: mark lengths along a line with the compass. Products and quotients: similar triangles
(on two lines through a point, mark $1$ and $a$ on one and $b$ on the other; the parallel through $a$ to the line joining
$1$ and $b$ cuts off $ab$). Square roots: the figure. On a line mark lengths $1$ and $a$ end to end, draw the semicircle
on the whole segment of length $1 + a$ as diameter, and raise the perpendicular at the join. Its height $h$ satisfies
$h^2 = 1 \cdot a$ by similar triangles (the angle in a semicircle is a right angle), so $h = \sqrt a$. Parallels and
perpendiculars are themselves standard constructions. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 230" role="img" aria-label="Constructing a square root: a segment of length 1 then a segment of length a equal to 4, a semicircle over the whole segment, and the perpendicular at the join, whose height is root a, here 2.">
  <path d="M 20 200 A 140 140 0 0 1 300 200" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="20" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="76" y1="200" x2="76" y2="88" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="20" y1="200" x2="76" y2="88" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="300" y1="200" x2="76" y2="88" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="76,188 88,188 88,200" fill="none" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor">
    <circle cx="20" cy="200" r="3"/><circle cx="76" cy="200" r="3"/><circle cx="300" cy="200" r="3"/><circle cx="76" cy="88" r="3"/>
  </g>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="48" y="218">1</text>
    <text x="188" y="218">a = 4</text>
    <text x="96" y="148">√a = 2</text>
  </g>
</svg>
</div>

### What cannot be constructed

**Theorem 19.5 (Wantzel).** If $\alpha$ is constructible, then $[\mathbb{Q}(\alpha) : \mathbb{Q}]$ is a power of 2.

*Proof.* List the constructed points in the order they were made, and let $K_0 = \mathbb{Q}$ and $K_j$ the field generated
over $\mathbb{Q}$ by the coordinates of the first $j$ points. A new point is an intersection of lines and circles whose
equations have coefficients in $K_{j-1}$ (they are built from earlier points):

- line with line: solving two linear equations stays in $K_{j-1}$, degree 1;
- line with circle: substituting the line into $x^2 + y^2 + ax + by + c = 0$ gives a quadratic, so the new coordinates
  lie in an extension of degree 1 or 2;
- circle with circle: subtracting the two equations $x^2 + y^2 + \ldots$ cancels the squares and leaves a line, so this
  is the previous case.

(The second coordinate is then found linearly from the line's equation.) So $[K_j : K_{j-1}] \in \{1, 2\}$, and by the
tower law $[K_n : \mathbb{Q}] = 2^k$. If $\alpha$ is a coordinate of the $n$-th point, then
$\mathbb{Q} \subseteq \mathbb{Q}(\alpha) \subseteq K_n$, so $[\mathbb{Q}(\alpha):\mathbb{Q}]$ divides $2^k$, and is a
power of 2. $\blacksquare$

(The converse fails in general: a number of degree 4 need not be constructible. The exact condition, a Galois group that
is a 2-group, is in [Chapter 20](20-Galois-Theory.md).)

**Doubling the cube is impossible.** $\sqrt[3]2$ has minimal polynomial $x^3 - 2$ (Eisenstein at 2), degree 3, not a power
of 2.

**Trisecting $60^\circ$ is impossible.** A $60^\circ$ angle is constructible (an equilateral triangle). Trisecting it would
construct $20^\circ$, and then $c = \cos 20^\circ$ (drop a perpendicular). The triple angle formula
$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$ with $\cos 60^\circ = \tfrac12$ gives

$$
4c^3 - 3c = \tfrac12, \qquad 8c^3 - 6c - 1 = 0 .
$$

With $y = 2c$ this is $y^3 - 3y - 1 = 0$, whose only possible rational roots are $\pm 1$: $1 - 3 - 1 = -3$ and
$-1 + 3 - 1 = 1$, so no rational roots, so (being a cubic) irreducible. Degree 3, not a power of 2. So no method can
trisect every angle. (Some angles can be trisected, for instance $90^\circ$, since $30^\circ$ is constructible.)

**The regular 7-gon is impossible.** Constructing it means constructing $2\cos\tfrac{2\pi}{7}$. If $\zeta = e^{2\pi i/7}$,
then $\eta = \zeta + \zeta^{-1} = 2\cos\tfrac{2\pi}{7}$, and dividing $1 + \zeta + \cdots + \zeta^6 = 0$ by $\zeta^3$ and
grouping gives $\eta^3 + \eta^2 - 2\eta - 1 = 0$. This cubic has no rational roots ($\pm 1$ give $-1$ and $1$), so it is
irreducible: degree 3. The same argument with $\cos 3\theta$ shows $2\cos 40^\circ$ is a root of $y^3 - 3y + 1$, also
irreducible, so the regular 9-gon is impossible too.

**Squaring the circle is impossible**, because $\sqrt\pi$ constructible would make $\pi$ algebraic (constructible numbers
have finite degree), and Lindemann proved in 1882 that $\pi$ is transcendental (19.6).

So three 2000-year-old questions are settled by one fact: **every step with straightedge and compass at most doubles the
degree.** This is the pattern of the rest of the book: turn a question about what can be done into a question about the
structure of a field.

## 19.4 Splitting fields

*Level: advanced.* Given a polynomial, is there always a field where it has all its roots? Over $\mathbb{Q}$ we can look
inside $\mathbb{C}$, by the fundamental theorem of algebra ([Chapter 12](12-The-Fundamental-Theorem-of-Algebra.md)). But
over $\mathbb{F}_2$ there is no $\mathbb{C}$ to look in. Kronecker's idea (1880s) is to *build* the roots.

**Theorem 19.6 (Kronecker).** If $f \in F[x]$ has degree at least 1, there is an extension $K/F$ in which $f$ has a root.

*Proof.* Let $p$ be an irreducible factor of $f$. Then $K = F[x]/(p)$ is a field (Chapter 18), it contains (a copy of)
$F$ as the constants, and the class $\bar x$ of $x$ satisfies $p(\bar x) = \overline{p(x)} = 0$. So $\bar x$ is a root of
$p$, hence of $f$. $\blacksquare$

It is the same move as inventing $i$ by declaring $i^2 = -1$: indeed $\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}$.

**Definition.** A **splitting field** of $f \in F[x]$ over $F$ is an extension $K$ in which $f$ factors into linear
factors, $f = c(x - \alpha_1) \cdots (x - \alpha_n)$, and which is generated by the roots: $K = F(\alpha_1, \ldots, \alpha_n)$.

**Theorem 19.7.** Every $f$ of degree $n \ge 1$ has a splitting field $K$, with $[K : F] \le n!$.

*Proof.* Induction on $n$. Adjoin one root $\alpha_1$ by Kronecker; $[F(\alpha_1) : F] \le n$. Over $F(\alpha_1)$,
$f = (x - \alpha_1) g$ with $\deg g = n - 1$; by induction $g$ has a splitting field over $F(\alpha_1)$ of degree at most
$(n-1)!$. It contains all roots of $f$ and is generated by them over $F$. Multiply degrees. $\blacksquare$

**Theorem 19.8 (uniqueness).** Any two splitting fields of $f$ over $F$ are isomorphic by an isomorphism that is the
identity on $F$.

*Proof.* We prove a stronger statement, because it is what the induction needs and what Galois theory uses. *Let
$\varphi: F \to F'$ be an isomorphism of fields, $f \in F[x]$, and $f' = \varphi(f)$ (apply $\varphi$ to the
coefficients). If $K$ is a splitting field of $f$ over $F$ and $K'$ of $f'$ over $F'$, then $\varphi$ extends to an
isomorphism $K \to K'$.*

Induct on $[K:F]$. If it is 1, $f$ splits over $F$, so $f'$ splits over $F'$, and $K = F$, $K' = F'$. Otherwise let $p$
be an irreducible factor of $f$ of degree at least 2, $\alpha \in K$ a root of $p$, and $\beta \in K'$ a root of
$p' = \varphi(p)$, which is irreducible because $\varphi$ is an isomorphism. By Theorem 19.2,

$$
F(\alpha) \cong F[x]/(p) \xrightarrow{\ \varphi\ } F'[x]/(p') \cong F'(\beta),
$$

an isomorphism sending $\alpha \mapsto \beta$ and extending $\varphi$. Now $K$ is a splitting field of $f$ over
$F(\alpha)$, $K'$ of $f'$ over $F'(\beta)$, and $[K : F(\alpha)] < [K:F]$. By induction the isomorphism extends to $K \to K'$.
$\blacksquare$

The proof also shows something Chapter 20 will count: **an isomorphism can send a root $\alpha$ only to a root of the same
irreducible polynomial**, and every such choice extends.

**Examples.**

- $x^2 - 2$ over $\mathbb{Q}$: splitting field $\mathbb{Q}(\sqrt2)$, degree 2.
- $x^3 - 2$ over $\mathbb{Q}$: roots $\sqrt[3]2$, $\omega\sqrt[3]2$, $\omega^2\sqrt[3]2$ with
  $\omega = e^{2\pi i/3} = \tfrac{-1 + \sqrt{-3}}{2}$. The splitting field is $\mathbb{Q}(\sqrt[3]2, \omega)$.
  $[\mathbb{Q}(\sqrt[3]2) : \mathbb{Q}] = 3$, and $\omega$ is not real, so it is not in the real field
  $\mathbb{Q}(\sqrt[3]2)$; it satisfies $x^2 + x + 1$, so it adds degree 2. Total degree $6 = 3!$, the maximum.
- $x^4 - 2$: splitting field $\mathbb{Q}(\sqrt[4]2, i)$, degree $4 \cdot 2 = 8$, less than $4! = 24$.
- $x^p - 1$, $p$ prime: the roots are the powers of $\zeta = e^{2\pi i/p}$, so the splitting field is
  $\mathbb{Q}(\zeta)$, of degree $p - 1$ because $\Phi_p$ is irreducible (Chapter 18).
- $x^4 + 1$: roots $e^{\pm i\pi/4}, e^{\pm 3i\pi/4}$, that is $\tfrac{\pm 1 \pm i}{\sqrt2}$. The splitting field is
  $\mathbb{Q}(i, \sqrt2)$, degree 4: one root generates everything.

**Algebraic closure.** A field $\overline{F}$ is **algebraically closed** if every nonconstant polynomial over it has a
root there. Every field has an **algebraic closure**: an algebraic extension that is algebraically closed, unique up to
isomorphism. (The proof needs Zorn's lemma for infinite fields; Steinitz gave it in 1910.) $\mathbb{C}$ is the algebraic
closure of $\mathbb{R}$, and $\overline{\mathbb{Q}}$, the algebraic numbers, that of $\mathbb{Q}$.

## 19.5 Finite fields

*Level: advanced, then expert.* You have met $\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}$. Are there other finite fields? A
field of 4 elements cannot be $\mathbb{Z}/4\mathbb{Z}$ (there $2 \cdot 2 = 0$). But Kronecker's construction makes one:
$x^2 + x + 1$ has no roots in $\mathbb{F}_2$, so it is irreducible, and

$$
\mathbb{F}_4 = \mathbb{F}_2[x]/(x^2 + x + 1) = \{0, 1, \alpha, \alpha + 1\}, \qquad \alpha^2 = \alpha + 1 .
$$

Check that it is a field: $\alpha(\alpha + 1) = \alpha^2 + \alpha = 2\alpha + 1 = 1$, so $\alpha$ and $\alpha + 1$ are
inverses. Here is the full answer to "which finite fields exist?"

**Theorem 19.9.** (a) A finite field has $p^n$ elements for some prime $p$ and $n \ge 1$. (b) For every prime power
$q = p^n$ there is a field with $q$ elements. (c) Any two fields with $q$ elements are isomorphic. (d) The multiplicative
group $\mathbb{F}_q^\times$ is cyclic.

The field is written $\mathbb{F}_q$, or $\mathrm{GF}(q)$ ("Galois field"); Galois himself constructed these fields in
1830.

*Proof of (a).* A finite field $F$ has a characteristic, the least $p$ with $1 + 1 + \cdots + 1$ ($p$ times) $= 0$, and it
is prime ([Chapter 17](17-Rings-and-Ideals.md)). The multiples of 1 form a copy of $\mathbb{F}_p$ inside $F$. Then $F$ is a
finite-dimensional vector space over $\mathbb{F}_p$, of some dimension $n$, so it has $p^n$ elements (each of $n$
coordinates takes $p$ values). $\square$

**The Frobenius map.** In characteristic $p$, $(a + b)^p = a^p + b^p$, because the binomial coefficients $\binom{p}{k}$
with $0 < k < p$ are divisible by $p$ (18.5) and so vanish. Together with $(ab)^p = a^p b^p$ this makes
$\mathrm{Frob}(a) = a^p$ a ring homomorphism $F \to F$. It is injective (a field homomorphism has kernel $0$), so on a
finite field it is a bijection: an **automorphism**. This "freshman's dream" is true, in characteristic $p$.

*Proof of (d).* Let $|F^\times| = q - 1$. By Lagrange, the order of every element divides $q - 1$. For each divisor $d$ of
$q - 1$, let $\psi(d)$ be the number of elements of order exactly $d$. If there is one such element $a$, then
$1, a, \ldots, a^{d-1}$ are $d$ distinct roots of $x^d - 1$, which has at most $d$ roots in a field
([Chapter 10](10-Roots-and-Coefficients.md)). So these are *all* the roots, and every element of order $d$ is among them.
In the cyclic group $\langle a \rangle$ of order $d$ exactly $\varphi(d)$ elements have order $d$ (Euler's $\varphi$). So
$\psi(d)$ is $0$ or $\varphi(d)$. But

$$
\sum_{d \mid q-1} \psi(d) = q - 1 = \sum_{d \mid q-1} \varphi(d),
$$

the first because every element has some order, the second by Gauss's identity $\sum_{d \mid n}\varphi(d) = n$ (sort the
fractions $\tfrac{1}{n}, \tfrac{2}{n}, \ldots, \tfrac{n}{n}$ by their denominator in lowest terms; exactly $\varphi(d)$ have
denominator $d$). Since $\psi(d) \le \varphi(d)$ for every $d$ and the sums agree, $\psi(d) = \varphi(d)$ for all $d$. In
particular $\psi(q - 1) = \varphi(q-1) \ge 1$: there is an element of order $q - 1$, a **generator**. $\square$

A generator is also called a **primitive element**. In $\mathbb{F}_7$, $3$ is one: its powers are $3, 2, 6, 4, 5, 1$.

*Proof of (b).* Let $q = p^n$ and let $K$ be a splitting field of $f = x^q - x$ over $\mathbb{F}_p$. Let $S$ be the set of
roots of $f$ in $K$.

1. **No repeated roots.** The formal derivative is $f' = q x^{q-1} - 1 = -1$, since $q = 0$ in $K$. If $a$ were a repeated
   root, $f = (x - a)^2 g$, then $f' = 2(x-a)g + (x-a)^2 g'$ would vanish at $a$; but $f' = -1$. So $|S| = q$.
2. **$S$ is a field.** $S$ is the set of fixed points of $\mathrm{Frob}^n : a \mapsto a^{q}$, which is a ring
   homomorphism. If $a^q = a$ and $b^q = b$, then $(a \pm b)^q = a \pm b$, $(ab)^q = ab$ and $(a^{-1})^q = a^{-1}$. And
   $0, 1 \in S$.
3. So $S$ is a field containing all the roots, and $K$ is generated by the roots, so $K = S$ has exactly $q$ elements.
   $\square$

*Proof of (c).* If $F$ has $q$ elements, every nonzero $a$ has $a^{q-1} = 1$ (Lagrange in $F^\times$), so every element of
$F$ (including 0) is a root of $x^q - x$. That gives $q$ roots, all of them, so $F$ is a splitting field of $x^q - x$
over $\mathbb{F}_p$. Splitting fields are unique (Theorem 19.8). $\blacksquare$

**Subfields and irreducible polynomials.** Two more facts, which follow from the same ideas (exercises in Dummit and Foote
section 14.3):

- $\mathbb{F}_{p^d}$ is a subfield of $\mathbb{F}_{p^n}$ exactly when $d \mid n$. (If it is, the tower law gives $d \mid n$;
  conversely, if $d \mid n$ the roots of $x^{p^d} - x$ inside $\mathbb{F}_{p^n}$ form the subfield.)
- $x^{p^n} - x$ is the product of **all** monic irreducible polynomials over $\mathbb{F}_p$ whose degree divides $n$.

For example, over $\mathbb{F}_2$,

$$
x^8 - x = x\,(x + 1)\,(x^3 + x + 1)\,(x^3 + x^2 + 1) .
$$

Comparing degrees gives $\sum_{d \mid n} d\, I_p(d) = p^n$, where $I_p(d)$ is the number of monic irreducibles of degree
$d$, and Möbius inversion turns this into Gauss's formula
$I_p(n) = \tfrac{1}{n}\sum_{d \mid n} \mu(d)\, p^{n/d}$. Over $\mathbb{F}_2$ the counts for degrees 1 to 6 are
$2, 1, 2, 3, 6, 9$. Roughly $1$ in $n$ monic polynomials of degree $n$ is irreducible, much like the prime number theorem.

### Computing in $\mathbb{F}_8$

Take $\mathbb{F}_8 = \mathbb{F}_2[x]/(x^3 + x + 1)$, with $\alpha$ the class of $x$, so $\alpha^3 = \alpha + 1$ (signs do
not matter in characteristic 2). Elements are $a + b\alpha + c\alpha^2$ with bits $a, b, c$; adding is XOR of bit
patterns. Since $\mathbb{F}_8^\times$ has prime order 7, every element other than 1 generates it. Powers of $\alpha$:

| power | $\alpha^0$ | $\alpha^1$ | $\alpha^2$ | $\alpha^3$ | $\alpha^4$ | $\alpha^5$ | $\alpha^6$ | $\alpha^7$ |
|---|---|---|---|---|---|---|---|---|
| element | $1$ | $\alpha$ | $\alpha^2$ | $\alpha + 1$ | $\alpha^2 + \alpha$ | $\alpha^2 + \alpha + 1$ | $\alpha^2 + 1$ | $1$ |

Each row follows from the one before by multiplying by $\alpha$ and replacing $\alpha^3$ with $\alpha + 1$; for example
$\alpha^5 = \alpha \cdot \alpha^4 = \alpha^3 + \alpha^2 = \alpha^2 + \alpha + 1$. With this table, multiplication is adding
exponents mod 7, like a slide rule (a "log table"):

$$
(\alpha^2 + 1)(\alpha^2 + \alpha) = \alpha^6 \cdot \alpha^4 = \alpha^{10} = \alpha^3 = \alpha + 1 .
$$

Check directly: $(\alpha^2 + 1)(\alpha^2 + \alpha) = \alpha^4 + \alpha^3 + \alpha^2 + \alpha = (\alpha^2 + \alpha) + (\alpha + 1) +
\alpha^2 + \alpha = \alpha + 1$, since pairs cancel.

**Where finite fields work.** The cipher AES computes in $\mathbb{F}_{256} = \mathbb{F}_2[x]/(x^8 + x^4 + x^3 + x + 1)$,
one byte per field element (see the cryptography book's AES chapter at <https://cryptography.akadian.ca/book/>).
Reed-Solomon codes treat a block of data as the values of a polynomial over a finite field, so that a few corrupted
values can be found and repaired; the standard of the Consultative Committee for Space Data Systems (CCSDS), used by many
deep-space missions, includes a Reed-Solomon code over $\mathbb{F}_{256}$ that corrects up to 16
wrong bytes in each block of 255. The same mathematics protects QR codes and data on discs.

**Try it in Python.** Multiplication in $\mathbb{F}_8$ with bits, and a check that $\alpha$ generates:

```python
def mul(a, b, mod=0b1011, n=3):      # elements are 3-bit numbers; mod is x^3 + x + 1
    r = 0
    while b:
        if b & 1:
            r ^= a                   # add (XOR) a shifted copy
        b >>= 1
        a <<= 1
        if a >> n & 1:
            a ^= mod                 # replace x^3 by x + 1
    return r

p = 1
for k in range(8):
    print(k, format(p, "03b"))       # alpha^k as bits c b a: 001, 010, 100, 011, 110, 111, 101, 001
    p = mul(p, 0b010)
```

## 19.6 Transcendental numbers

*Level: expert.* Is every real number algebraic? Liouville gave the first example of one that is not, in 1844 (with the
simplest version in 1851). Then in 1874 Georg Cantor showed with a counting argument that **almost every** real number is
transcendental: the polynomials with integer coefficients can be listed (there are countably many), each has finitely
many roots, so the algebraic numbers can be listed; but the real numbers cannot be listed. The paradox is that proving
any *particular* number transcendental is very hard.

**Theorem 19.10 (Liouville).** Let $\alpha$ be a real algebraic number of degree $d \ge 2$. There is a constant $c > 0$
such that

$$
\left| \alpha - \frac{p}{q} \right| > \frac{c}{q^d} \quad \text{for all integers } p, q \text{ with } q > 0 .
$$

In words: algebraic irrationals cannot be approximated *too* well by fractions.

*Proof.* Let $f(x) = a_d x^d + \cdots + a_0$ be the minimal polynomial of $\alpha$ multiplied by a common denominator, so
it has integer coefficients and is irreducible over $\mathbb{Q}$ of degree $d \ge 2$, hence has no rational roots. Let
$M$ be the maximum of $|f'(x)|$ on the interval $[\alpha - 1, \alpha + 1]$.

Take a fraction $p/q$. If $|\alpha - p/q| \ge 1$, the inequality holds for any $c < 1$. Otherwise $p/q$ is in the interval.
Since $f(p/q) \ne 0$ and

$$
q^d f(p/q) = a_d p^d + a_{d-1} p^{d-1} q + \cdots + a_0 q^d
$$

is a nonzero **integer**, $|f(p/q)| \ge 1/q^d$. By the mean value theorem, $f(p/q) = f(p/q) - f(\alpha) = f'(\xi)(p/q - \alpha)$
for some $\xi$ between them, so

$$
\frac{1}{q^d} \le |f(p/q)| \le M \left| \alpha - \frac{p}{q} \right| .
$$

So $|\alpha - p/q| \ge \tfrac{1}{M q^d}$. Taking $c$ smaller than both $1$ and $1/M$ gives the strict inequality.
$\blacksquare$

**Liouville's number.**

$$
L = \sum_{k=1}^{\infty} 10^{-k!} = 0.110001000000000000000001000\ldots
$$

has 1s in decimal places $1, 2, 6, 24, 120, \ldots$ and 0s elsewhere. Its decimal expansion does not repeat, so $L$ is
irrational. Cut the sum after $n$ terms: $p/q = \sum_{k=1}^{n} 10^{-k!}$ with $q = 10^{n!}$. The error is

$$
0 < L - \frac{p}{q} = \sum_{k > n} 10^{-k!} < 2 \cdot 10^{-(n+1)!} = \frac{2}{q^{n+1}} .
$$

If $L$ were algebraic of degree $d$ (necessarily $d \ge 2$), Liouville's theorem would give
$\tfrac{c}{q^d} < \tfrac{2}{q^{n+1}}$, that is $c < 2 q^{d - n - 1}$, for every $n$. As $n \to \infty$ with $n > d$, the right
side goes to $0$, and a fixed $c > 0$ cannot stay below it. So **$L$ is transcendental**. $\blacksquare$

**$e$ and $\pi$.** Charles Hermite proved $e$ transcendental in 1873. Ferdinand von Lindemann proved $\pi$
transcendental in 1882, by showing that $e^{\alpha}$ is transcendental for every nonzero algebraic $\alpha$; if $\pi$
were algebraic, so would be $i\pi$, and then $e^{i\pi} = -1$ would be transcendental, which it is not. Karl Weierstrass
extended this in 1885 (the Lindemann-Weierstrass theorem). The proofs are a few pages of clever analysis with integrals
of polynomials; they are given in full in Ian Stewart's *Galois Theory* (the chapter on transcendental numbers) and in
Alan Baker's *Transcendental Number Theory*. They are too long to give honestly here, so we only state them.

**What is known, and what is not.**

- **Gelfond-Schneider (1934):** if $a$ and $b$ are algebraic, $a \ne 0, 1$, and $b$ is irrational, then $a^b$ is
  transcendental. So $2^{\sqrt2}$ is transcendental, and so is $e^\pi$, since $e^\pi = (-1)^{-i}$. This answered part of
  Hilbert's seventh problem (1900).
- **Unknown:** whether $e + \pi$ or $e\pi$ is transcendental, or even irrational. (At least one of them is transcendental:
  if both were algebraic, $e$ and $\pi$ would be roots of $x^2 - (e+\pi)x + e\pi$, a polynomial with algebraic
  coefficients, and so algebraic.)
- **Unknown:** whether Euler's constant $\gamma = 0.5772\ldots$ is irrational. Roger Apéry proved $\zeta(3)$ irrational
  in 1978; whether it is transcendental is unknown.

## Check yourself

??? question "1. Find the minimal polynomial of $\sqrt2 + \sqrt3$ over $\mathbb{Q}(\sqrt2)$, and explain why its degree agrees with the tower law."

    Let $\alpha = \sqrt2 + \sqrt3$. Then $\alpha - \sqrt2 = \sqrt3$, so $(\alpha - \sqrt2)^2 = 3$, i.e.
    $\alpha^2 - 2\sqrt2\,\alpha - 1 = 0$. So $\alpha$ is a root of $x^2 - 2\sqrt2\,x - 1$, which has coefficients in
    $\mathbb{Q}(\sqrt2)$. It is irreducible there because $\alpha \notin \mathbb{Q}(\sqrt2)$ (else $\sqrt3$ would be). Tower law:
    $[\mathbb{Q}(\alpha):\mathbb{Q}] = 4 = [\mathbb{Q}(\alpha) : \mathbb{Q}(\sqrt2)] \cdot [\mathbb{Q}(\sqrt2):\mathbb{Q}] = 2 \cdot 2$.

??? question "2. Write $\dfrac{1}{2 + \sqrt[3]2}$ as $a + b\sqrt[3]2 + c\sqrt[3]4$."

    With $t = \sqrt[3]2$: $8 + t^3 = 10$, and $8 + t^3 = (2 + t)(4 - 2t + t^2)$. So
    $\dfrac{1}{2+t} = \dfrac{4 - 2t + t^2}{10} = \dfrac25 - \dfrac15\sqrt[3]2 + \dfrac1{10}\sqrt[3]4$.
    Check numerically: $2 + 1.2599 = 3.2599$; $(4 - 2.5198 + 1.5874)/10 = 0.30676$; $3.2599 \times 0.30676 \approx 1.0000$.

??? question "3. Show that $[\mathbb{Q}(\sqrt2, \sqrt[3]3) : \mathbb{Q}] = 6$."

    The field contains $\mathbb{Q}(\sqrt2)$ (degree 2) and $\mathbb{Q}(\sqrt[3]3)$ (degree 3, $x^3 - 3$ is Eisenstein at 3). By the
    tower law both 2 and 3 divide the degree, so 6 divides it. And it is at most
    $[\mathbb{Q}(\sqrt[3]3)(\sqrt2) : \mathbb{Q}(\sqrt[3]3)] \cdot 3 \le 2 \cdot 3 = 6$. So it is exactly 6.

??? question "4. Find the degree of the splitting field of $x^4 - 2$ over $\mathbb{Q}$."

    The roots are $\pm\sqrt[4]2$, $\pm i\sqrt[4]2$, so the splitting field is $\mathbb{Q}(\sqrt[4]2, i)$.
    $[\mathbb{Q}(\sqrt[4]2) : \mathbb{Q}] = 4$ (Eisenstein at 2), and $i$ is not real, so adjoining it (root of $x^2 + 1$) gives
    degree 2 more. Total $8$.

??? question "5. Show that the regular pentagon is constructible by finding $2\cos 72^\circ$ explicitly."

    With $\zeta = e^{2\pi i/5}$ and $\eta = \zeta + \zeta^{-1} = 2\cos 72^\circ$: divide $1 + \zeta + \zeta^2 + \zeta^3 + \zeta^4 = 0$
    by $\zeta^2$ to get $\zeta^2 + \zeta^{-2} + \zeta + \zeta^{-1} + 1 = 0$, and $\zeta^2 + \zeta^{-2} = \eta^2 - 2$. So
    $\eta^2 + \eta - 1 = 0$, $\eta = \tfrac{-1 + \sqrt5}{2} \approx 0.618$ (the positive root, since $\cos 72^\circ > 0$). Built from
    rationals with one square root, so constructible.

??? question "6. Show the regular 9-gon cannot be constructed."

    It needs the angle $40^\circ$, so $y = 2\cos 40^\circ$. From $\cos 120^\circ = -\tfrac12 = 4c^3 - 3c$: $8c^3 - 6c + 1 = 0$, so
    $y^3 - 3y + 1 = 0$. Rational root candidates $\pm 1$ give $-1$ and $3$, not 0, so the cubic is irreducible and $y$ has
    degree 3, not a power of 2.

??? question "7. Build $\mathbb{F}_4$ and write out its multiplication table."

    $\mathbb{F}_4 = \{0, 1, \alpha, \alpha+1\}$ with $\alpha^2 = \alpha + 1$. Nonzero products: $1 \cdot x = x$;
    $\alpha \cdot \alpha = \alpha + 1$; $\alpha(\alpha + 1) = \alpha^2 + \alpha = 1$; $(\alpha+1)^2 = \alpha^2 + 1 = \alpha$.
    So $\mathbb{F}_4^\times = \{1, \alpha, \alpha^2 = \alpha + 1\}$ is cyclic of order 3, as Theorem 19.9 says.

??? question "8. In $\mathbb{F}_8 = \mathbb{F}_2[x]/(x^3 + x + 1)$, find $\alpha^{-1}$ and $(\alpha + 1)^{-1}$."

    $\alpha^7 = 1$, so $\alpha^{-1} = \alpha^6 = \alpha^2 + 1$. Check: $\alpha(\alpha^2 + 1) = \alpha^3 + \alpha = (\alpha + 1) + \alpha = 1$.
    $\alpha + 1 = \alpha^3$, so its inverse is $\alpha^4 = \alpha^2 + \alpha$. Check: $(\alpha+1)(\alpha^2+\alpha) = \alpha^3 + \alpha^2 + \alpha^2 + \alpha = \alpha^3 + \alpha = 1$.

??? question "9. How many monic irreducible quadratics are there over $\mathbb{F}_3$? List them."

    There are $9$ monic quadratics $x^2 + bx + c$. The reducible ones are $(x - r)(x - s)$ with $\{r, s\}$ a multiset from
    $\mathbb{F}_3$: $3$ with $r = s$ and $3$ with $r \ne s$, so 6. That leaves $3$ irreducible: $x^2 + 1$, $x^2 + x + 2$,
    $x^2 + 2x + 2$. (Gauss's formula: $\tfrac12(3^2 - 3) = 3$.) Check none has a root: e.g. $x^2 + x + 2$ at $0, 1, 2$
    gives $2, 4 \equiv 1, 8 \equiv 2$.

??? question "10. Find a generator of $\mathbb{F}_{11}^\times$, and explain why $\mathbb{F}_{11}^\times$ has exactly $\varphi(10) = 4$ generators."

    Try 2: powers $2, 4, 8, 5, 10, 9, 7, 3, 6, 1$, all ten nonzero elements, so 2 is a generator. In a cyclic group of order 10
    generated by $g$, $g^k$ is a generator exactly when $\gcd(k, 10) = 1$, i.e. $k = 1, 3, 7, 9$: the generators are
    $2, 8, 7, 6$.

??? question "11. Prove that $\sum_{k \ge 1} 2^{-k!}$ is transcendental."

    The same proof as for $L$ works in base 2. With $q = 2^{n!}$ and $p/q$ the $n$-th partial sum,
    $0 < x - p/q < 2 \cdot 2^{-(n+1)!} = 2/q^{n+1}$. The number is irrational (its binary digits never repeat), so if
    it were algebraic of degree $d \ge 2$, Liouville gives $c/q^d < 2/q^{n+1}$ for all $n$, impossible as $n \to \infty$.

??? question "12. Explain why a field with 6 elements cannot exist, and why any two fields with 9 elements are 'the same'."

    A finite field has $p^n$ elements (Theorem 19.9a), and 6 is not a prime power. Any field with 9 elements is a splitting
    field of $x^9 - x$ over $\mathbb{F}_3$, and splitting fields are unique up to isomorphism, so any two are isomorphic.
    Concretely, $\mathbb{F}_3[x]/(x^2 + 1)$ and $\mathbb{F}_3[x]/(x^2 + x + 2)$ are isomorphic though they look different.

## What you learned

- An extension $K/F$ is a vector space over $F$; its dimension is the degree $[K:F]$, and degrees multiply in towers.
- An algebraic $\alpha$ has an irreducible minimal polynomial $m$, and $F(\alpha) \cong F[x]/(m)$ has degree $\deg m$;
  inverses come from Euclid's algorithm. Algebraic numbers form a field.
- Straightedge and compass at most double the degree at each step, so constructible numbers have degree $2^k$; this rules
  out doubling the cube, trisecting $60^\circ$, the regular 7-gon and 9-gon, and (with Lindemann) squaring the circle.
- Every polynomial has a splitting field, unique up to isomorphism, of degree at most $n!$.
- There is exactly one finite field of each prime power order, its multiplicative group is cyclic, and Frobenius
  $a \mapsto a^p$ is an automorphism.
- Liouville's inequality proves specific numbers transcendental; $e$ and $\pi$ are transcendental, but $e + \pi$ is still a
  mystery.

**Next:** [Chapter 20](20-Galois-Theory.md), the symmetries of a field extension, and why the quintic has no formula.

## Further reading

- I. Stewart, *Galois Theory*, 4th ed., 2015 (extensions, constructions, transcendence of $\pi$, all very readable).
- D. S. Dummit and R. M. Foote, *Abstract Algebra*, 3rd ed., 2004, chapter 13 (field theory) and section 14.3 (finite
  fields).
- R. Lidl and H. Niederreiter, *Introduction to Finite Fields and Their Applications*, revised ed., 1994.
- A. Baker, *Transcendental Number Theory*, 1975.
- P. L. Wantzel, "Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et
  le compas", *Journal de Mathématiques Pures et Appliquées* 2, 1837.
- On this site: [Compass and straightedge](../../topics/geometry/level-5/01-compass-straightedge.md) and
  [Regular polygons](../../topics/geometry/level-2/01-regular-polygons.md) (Topics); MAT240
  [Unit 1: Fields and vector spaces](../../uoft/MAT240H1/unit01.md) and [Unit 3: Bases and dimension](../../uoft/MAT240H1/unit03.md)
  (U of T); finite fields at work in AES and elliptic curves in the cryptography book, <https://cryptography.akadian.ca/book/>.
