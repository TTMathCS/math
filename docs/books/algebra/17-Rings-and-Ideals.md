# 17. Rings and ideals

*Groups have one operation. But the integers, the polynomials, the matrices and the clock numbers all have two: you can
add and you can multiply, and the two are tied together by the distributive law. A structure with both is a ring. This
chapter asks what can happen in a ring that cannot happen in ordinary arithmetic (a product of nonzero things can be
zero; a polynomial of degree one can have an inverse), and answers the question that drives the rest of the book: how do
you divide a ring by part of itself to get a new ring? The answer is the ideal, an idea born in the 19th-century struggle
with unique factorization. You will build the complex numbers, and a field with four elements, as quotient rings, and
learn which ideals give fields.*

!!! abstract "In this chapter"
    **You will learn:**

    - the ring axioms, the basic rules they force (such as $0 \cdot a = 0$ and $(-1)(-1) = 1$), and many examples
    - units, zero divisors, integral domains and fields, and why every finite integral domain is a field
    - ideals and quotient rings: $\mathbb{Z}/n\mathbb{Z}$, $\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$, a field with four
      elements
    - ring homomorphisms, the first isomorphism theorem for rings and the Chinese remainder theorem for ideals
    - prime and maximal ideals, with proofs that $R/P$ is a domain and $R/M$ is a field
    - the characteristic of a ring and the "freshman's dream" $(a+b)^p = a^p + b^p$
    - polynomial rings: degree, division with remainder, and why every ideal of $F[x]$ is principal

    **You need:** [Chapter 15](15-Homomorphisms-and-Quotients.md) (normal subgroups, quotients, the isomorphism theorems),
    which this chapter repeats with two operations instead of one. [Chapter 4](04-Polynomials-and-Factoring.md) and
    [Chapter 10](10-Roots-and-Coefficients.md) for polynomial division and the factor theorem;
    [Chapter 9](09-Complex-Numbers.md) for complex numbers.

    **Levels:** 17.1 and 17.2 are advanced but gentle; 17.3 to 17.6 are advanced, with full proofs; 17.7 is advanced
    with an expert ending.

## 17.1 Rings, examples

*Level: advanced.*

Look at the integers with both operations. Under addition they form an abelian group. Multiplication is associative and
has an identity, 1, but most integers have no multiplicative inverse. And the two operations interlock:
$a(b + c) = ab + ac$. Now look at 2 by 2 real matrices, at polynomials, at the clock numbers mod 12, at real functions:
the same pattern every time. We name the pattern.

**Definition.** A **ring** is a set $R$ with two operations, addition $+$ and multiplication $\cdot$, such that

1. $(R, +)$ is an abelian group (its identity is written $0$, the inverse of $a$ is $-a$);
2. multiplication is associative, $(ab)c = a(bc)$, and has an identity $1$, with $1a = a1 = a$;
3. the **distributive laws** hold: $a(b + c) = ab + ac$ and $(a + b)c = ac + bc$.

If also $ab = ba$ for all $a, b$, the ring is **commutative**.

A word on conventions. In this book every ring has a $1$; some authors do not require it (and would call our rings
"rings with unity"). Without a $1$, the even integers $2\mathbb{Z}$ would be a ring; for us they are not. Nothing deep
depends on the choice, but the statements of some theorems change, so check the convention when you read another book.

### Examples

- **Numbers.** $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ with the usual operations. Commutative.
- **Clock numbers.** $\mathbb{Z}_n = \mathbb{Z}/n\mathbb{Z}$, adding and multiplying mod $n$. Commutative, with $n$
  elements.
- **Polynomials.** $\mathbb{Z}[x]$, $\mathbb{R}[x]$, and in general $R[x]$, the polynomials with coefficients in a ring
  $R$ (§17.7). Also polynomials in several variables, $R[x, y]$.
- **Matrices.** $M_2(\mathbb{R})$, the 2 by 2 real matrices, with matrix addition and multiplication. **Not
  commutative**: with $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 1 & 1
  \end{pmatrix}$, $AB = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ but $BA = \begin{pmatrix} 1 & 1 \\ 1 & 2
  \end{pmatrix}$. Similarly $M_n(R)$ for any ring $R$.
- **Functions.** The real functions $f : \mathbb{R} \to \mathbb{R}$ with $(f + g)(x) = f(x) + g(x)$ and
  $(fg)(x) = f(x)g(x)$. The continuous functions form a smaller ring inside it.
- **Gaussian integers.** $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$, a ring inside $\mathbb{C}$, because
  $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$ has integer parts. Likewise
  $\mathbb{Z}[\sqrt 2] = \{a + b\sqrt 2 : a, b \in \mathbb{Z}\}$.
- **Quaternions.** Hamilton's quaternions $\mathbb{H} = \{a + bi + cj + dk : a, b, c, d \in \mathbb{R}\}$ with
  $i^2 = j^2 = k^2 = ijk = -1$. Not commutative ($ij = k$ but $ji = -k$), yet every nonzero element has an inverse. Such
  a ring is called a **division ring**. William Rowan Hamilton found these rules on 16 October 1843 and, as he later
  wrote, carved them into a stone of Brougham Bridge in Dublin.
- **Sets.** The subsets of a set $S$, with "addition" the symmetric difference $A \triangle B$ (elements in exactly one
  of $A$, $B$) and multiplication the intersection $A \cap B$. Zero is $\varnothing$, one is $S$. In this ring
  $A + A = 0$ and $A \cdot A = A$ for every $A$. Rings of this kind, called **Boolean rings**, model logic circuits.
- **The zero ring** $\{0\}$, where $1 = 0$. It satisfies the axioms but is the only ring with $1 = 0$ (see below), and
  most theorems exclude it.

A **subring** is a subset containing $1$ and closed under subtraction and multiplication; it is then a ring with the
same operations. $\mathbb{Z} \subset \mathbb{Z}[i] \subset \mathbb{C}$ and $\mathbb{Z}[x] \subset \mathbb{Q}[x]$ are
subrings.

### Rules that follow from the axioms

The familiar sign rules are not extra assumptions. They are forced.

**Theorem.** In any ring, for all $a, b$:

1. $0 \cdot a = a \cdot 0 = 0$;
2. $(-a)b = a(-b) = -(ab)$;
3. $(-a)(-b) = ab$, and in particular $(-1)(-1) = 1$;
4. if $1 = 0$ then $R = \{0\}$.

*Proof.* (1) $0 \cdot a = (0 + 0) \cdot a = 0 \cdot a + 0 \cdot a$ by distributivity; adding $-(0 \cdot a)$ to both
sides gives $0 = 0 \cdot a$. The other side is the same. (2) $ab + (-a)b = (a + (-a))b = 0 \cdot b = 0$, so $(-a)b$ is
the additive inverse of $ab$. Similarly for $a(-b)$. (3) Apply (2) twice: $(-a)(-b) = -(a(-b)) = -(-(ab)) = ab$.
(4) If $1 = 0$ then $a = 1 \cdot a = 0 \cdot a = 0$ for every $a$. $\square$

So "minus times minus is plus", the rule that puzzles school students, is a consequence of the distributive law: any
number system in which it failed would have to give up distributivity.

### Units

**Definition.** An element $u$ of a ring is a **unit** if it has a multiplicative inverse: some $v$ with
$uv = vu = 1$. The units form a group under multiplication, written $R^{\times}$.

| ring | units |
|---|---|
| $\mathbb{Z}$ | $\pm 1$ |
| $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ | everything except $0$ |
| $\mathbb{Z}_n$ | the residues coprime to $n$: the group $U(n)$ of [Chapter 14](14-Subgroups-Cosets-and-Lagrange.md) |
| $M_n(\mathbb{R})$ | matrices with nonzero determinant: $GL_n(\mathbb{R})$ |
| $\mathbb{Z}[i]$ | $\pm 1, \pm i$ |
| $\mathbb{Z}[\sqrt 2]$ | infinitely many: $\pm(1 + \sqrt 2)^n$ for all $n \in \mathbb{Z}$ |

For $\mathbb{Z}[i]$ the tool is the **norm** $N(a + bi) = a^2 + b^2 = |a + bi|^2$, which is multiplicative. If
$uv = 1$ then $N(u)N(v) = 1$ with both positive integers, so $N(u) = 1$, i.e. $a^2 + b^2 = 1$: four solutions. In
$\mathbb{Z}[\sqrt 2]$, $(1 + \sqrt 2)(-1 + \sqrt 2) = 2 - 1 = 1$, so $1 + \sqrt 2$ is a unit, and so are all its
powers, which are all different since $1 + \sqrt 2 > 1$. (Showing these are all the units is a classical result on
Pell's equation $a^2 - 2b^2 = \pm 1$.)

## 17.2 Integral domains and fields

*Level: advanced.*

In $\mathbb{Z}_{12}$, $3 \cdot 4 = 12 = 0$. Two nonzero numbers multiply to zero. That breaks a rule used constantly in
school algebra: "if $ab = 0$ then $a = 0$ or $b = 0$", the rule that lets you solve $(x - 2)(x - 3) = 0$. In
$\mathbb{Z}_{12}$ the equation $x^2 - 5x + 6 = 0$, that is $(x-2)(x-3) = 0$, has solutions $x = 2, 3$, but also
$x = 6$ ($36 - 30 + 6 = 12$) and $x = 11$ ($121 - 55 + 6 = 72$): four roots for a quadratic.

**Definitions.** In a commutative ring $R$, a nonzero $a$ is a **zero divisor** if $ab = 0$ for some nonzero $b$. An
**integral domain** (or just **domain**) is a commutative ring with $1 \ne 0$ and no zero divisors. A **field** is a
commutative ring with $1 \ne 0$ in which every nonzero element is a unit.

So $\mathbb{Z}$ is a domain but not a field; $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ are fields; $\mathbb{Z}_{12}$ is
neither; $\mathbb{Z}[x]$ and $\mathbb{Z}[i]$ are domains (they live inside the field $\mathbb{C}$ or $\mathbb{Q}(x)$,
where there are no zero divisors); the ring of real functions is not a domain (a function that is zero on the negatives
times one that is zero on the positives is the zero function).

**Every field is a domain.** If $a \ne 0$ and $ab = 0$, multiply by $a^{-1}$: $b = 0$.

**Cancellation.** In a domain, if $a \ne 0$ and $ab = ac$, then $b = c$. *Proof:* $a(b - c) = 0$ and $a \ne 0$ force
$b - c = 0$. $\square$ Cancellation is exactly what makes domains feel like the integers.

**Theorem.** $\mathbb{Z}_n$ is a field if $n$ is prime, and not even a domain if $n > 1$ is composite.

*Proof.* If $n = ab$ with $1 < a, b < n$, then $a \cdot b = 0$ in $\mathbb{Z}_n$ with $a, b \ne 0$. If $n = p$ is prime,
each nonzero residue $a$ is coprime to $p$, so by Bezout there are $x, y$ with $ax + py = 1$, and $x$ is an inverse of
$a$ mod $p$. $\square$

We write $\mathbb{F}_p$ for the field $\mathbb{Z}_p$, $p$ prime.

**Theorem.** Every finite integral domain is a field.

*Proof.* Let $D$ be a finite domain and $a \ne 0$. The map $D \to D$, $x \mapsto ax$, is one-to-one by cancellation.
A one-to-one map from a finite set to itself is onto, so some $x$ has $ax = 1$. $\square$

This is the same pigeonhole idea as the finite subgroup test of §14.1. It proves at once that $\mathbb{Z}_p$ is a field,
without Bezout, since $\mathbb{Z}_p$ is a domain ($p \mid ab$ forces $p \mid a$ or $p \mid b$).

**Other strange elements.** An element $a$ is **nilpotent** if $a^n = 0$ for some $n$ (in $\mathbb{Z}_{12}$,
$6^2 = 36 = 0$; in $M_2(\mathbb{R})$, $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}^2 = 0$). It is **idempotent** if
$a^2 = a$ (in $\mathbb{Z}_6$: $0, 1, 3, 4$). A domain has no nilpotents except 0, and no idempotents except 0 and 1
(from $a(a - 1) = 0$).

## 17.3 Ideals and quotient rings

*Level: advanced.*

In [Chapter 15](15-Homomorphisms-and-Quotients.md) the kernel of a group homomorphism turned out to be special (normal),
and exactly the special subgroups could be divided out. Rings repeat the story, with a twist. Take the map
$\mathbb{Z} \to \mathbb{Z}_{12}$. Its kernel $12\mathbb{Z}$ is an additive subgroup, but it also has a strong property
for multiplication: a multiple of 12 times **any** integer is again a multiple of 12. It absorbs multiplication by
everything. That property is the definition.

**Definition.** An **ideal** of a commutative ring $R$ is a subset $I$ such that

1. $I$ is an additive subgroup of $R$ (contains 0, closed under $+$ and $-$);
2. $I$ **absorbs** multiplication: if $a \in I$ and $r \in R$, then $ra \in I$.

(For noncommutative rings one distinguishes left, right and two-sided ideals. From here on, rings are commutative unless
said otherwise.)

### Examples

- $n\mathbb{Z}$ in $\mathbb{Z}$.
- In $\mathbb{R}[x]$, the polynomials with zero constant term, i.e. the multiples of $x$. More generally, the polynomials
  with $f(5) = 0$: if $f(5) = 0$ then $(gf)(5) = g(5) \cdot 0 = 0$.
- In the ring of real functions, those vanishing at a chosen point.
- $\{0\}$ and $R$ itself, in any ring.
- **Principal ideals.** For any $a \in R$, the multiples $(a) = aR = \{ra : r \in R\}$ form an ideal, the
  **principal ideal generated by $a$**. More generally $(a_1, \dots, a_k) = \{r_1a_1 + \cdots + r_ka_k\}$ is the ideal
  generated by $a_1, \dots, a_k$, the smallest ideal containing them.

**Non-example.** $\mathbb{Z}$ is a subring of $\mathbb{Q}$, but not an ideal: $1 \in \mathbb{Z}$, and
$\frac12 \cdot 1 \notin \mathbb{Z}$. Subrings and ideals are different things: a subring contains 1, while an ideal that
contains 1 contains every $r \cdot 1 = r$.

**Lemma.** If an ideal $I$ contains a unit $u$, then $I = R$. Consequently a field $F$ has exactly two ideals, $\{0\}$
and $F$.

*Proof.* $1 = u^{-1}u \in I$, and then every $r = r \cdot 1 \in I$. In a field every nonzero element is a unit. $\square$

**Ideals of $\mathbb{Z}$.** Every ideal is an additive subgroup, and every subgroup of $\mathbb{Z}$ is $n\mathbb{Z}$
(§14.2); conversely $n\mathbb{Z} = (n)$ is an ideal. So **every ideal of $\mathbb{Z}$ is principal**. For instance
$(4, 6) = (2)$, Bezout in ideal language: $\gcd$ becomes "the generator of the ideal generated by both".

**An ideal that is not principal.** In $\mathbb{Z}[x]$, consider $(2, x)$, the polynomials $2f + xg$, which are exactly
the integer polynomials with even constant term. Suppose $(2, x) = (h)$. Since $2 \in (h)$, $h$ divides 2, so (by
degrees) $h$ is a constant $\pm 1$ or $\pm 2$. If $h = \pm 1$, the ideal would be all of $\mathbb{Z}[x]$, but $1$ has odd
constant term. If $h = \pm 2$, then $x$ would be $2$ times an integer polynomial, which it is not. So $(2, x)$ needs two
generators. Whether every ideal can be generated by one element is a major dividing line between rings; it is the
subject of [Chapter 18](18-Factorization-in-Rings.md).

### Quotient rings

Given an ideal $I$, the cosets $a + I$ are the classes of the relation $a \equiv b \pmod I$, meaning $a - b \in I$.
"Congruence mod $n$" is the case $I = n\mathbb{Z}$.

**Theorem.** If $I$ is an ideal of $R$, the set $R/I$ of cosets is a ring with

$$
(a + I) + (b + I) = (a + b) + I, \qquad (a + I)(b + I) = ab + I .
$$

Its zero is $0 + I = I$, its one is $1 + I$, and $\pi : R \to R/I$, $a \mapsto a + I$, respects both operations.

*Proof.* Addition is well defined because $I$ is a subgroup of the abelian group $(R, +)$, hence normal (§15.5). For
multiplication, suppose $a' = a + i$ and $b' = b + j$ with $i, j \in I$. Then

$$
a'b' = ab + (aj + ib + ij),
$$

and each of $aj$, $ib$, $ij$ lies in $I$ by absorption, so $a'b' + I = ab + I$. The ring axioms for $R/I$ follow from
those of $R$, computed on representatives. $\square$

Absorption is exactly what was needed. If $I$ were only a subring (like $\mathbb{Z} \subset \mathbb{Q}$), the product of
cosets would depend on the representatives.

**Worked examples.**

1. $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$: arithmetic mod $n$ is a quotient ring.
2. $\mathbb{R}[x]/(x^2 + 1)$. Every polynomial $f$ can be divided by $x^2 + 1$ to leave a remainder $a + bx$ (§17.7), and
   $f \equiv a + bx$. So each coset has exactly one representative $a + bx$ (two different ones would differ by a
   nonzero multiple of $x^2+1$ of degree less than 2, which is impossible). Write $\bar x$ for the coset of $x$. Then
   $\bar x^2 + 1 = 0$, i.e. $\bar x^2 = -1$. Multiplying:
   $(a + b\bar x)(c + d\bar x) = ac + (ad + bc)\bar x + bd\bar x^2 = (ac - bd) + (ad + bc)\bar x$. That is the rule for
   complex numbers. So $\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}$, with $\bar x$ playing $i$. Instead of declaring "let
   $i$ be a number with $i^2 = -1$", we built one out of real polynomials: **adjoin a variable, then force it to satisfy
   the equation.** This construction, due to Augustin-Louis Cauchy (1847) for $\mathbb{C}$ and generalised by Leopold
   Kronecker, is how [Chapter 19](19-Fields-and-Extensions.md) creates roots of any polynomial.
3. $\mathbb{Z}[x]/(x^2 + 1) \cong \mathbb{Z}[i]$, by the same computation with integer coefficients.
4. **A field with four elements.** In $\mathbb{F}_2[x]$ (coefficients mod 2), take $I = (x^2 + x + 1)$. The cosets are
   represented by remainders of degree at most 1: $0, 1, \alpha, \alpha + 1$, where $\alpha = \bar x$ satisfies
   $\alpha^2 = \alpha + 1$ (since $-1 = 1$ mod 2). The multiplication table:

    | $\times$ | $1$ | $\alpha$ | $\alpha + 1$ |
    |---|---|---|---|
    | $1$ | $1$ | $\alpha$ | $\alpha + 1$ |
    | $\alpha$ | $\alpha$ | $\alpha + 1$ | $1$ |
    | $\alpha + 1$ | $\alpha + 1$ | $1$ | $\alpha$ |

    For instance $\alpha(\alpha + 1) = \alpha^2 + \alpha = 2\alpha + 1 = 1$. Every nonzero element has an inverse, so
    this is a field, $\mathbb{F}_4$. It is not $\mathbb{Z}_4$ (where $2 \cdot 2 = 0$). Its multiplicative group
    $\{1, \alpha, \alpha + 1\}$ is cyclic of order 3, generated by $\alpha$.

5. $\mathbb{Z}[x]/(x) \cong \mathbb{Z}$: setting $x = 0$ leaves the constant term. And $\mathbb{Z}[x]/(2, x) \cong
   \mathbb{F}_2$: setting $x = 0$ and $2 = 0$ leaves the constant term mod 2.

When does a quotient like example 4 give a field? §17.5 answers: exactly when the ideal is **maximal**, and for
$F[x]/(f)$ that means $f$ is irreducible.

### Error-correcting codes

Quotient rings of polynomials over finite fields are working tools. Radio signals from spacecraft arrive faint and
noisy, and the links from Mars orbiters and rovers to Earth rely on error-correcting codes. One classic family,
**Reed-Solomon codes** (Irving Reed and Gustave Solomon, 1960), treats a block of data as the coefficients of a
polynomial over the 256-element field $\mathbb{F}_{256} = \mathbb{F}_2[x]/(p(x))$, for an irreducible $p$ of degree 8,
and sends extra values of that polynomial; a polynomial of degree less than $k$ is fixed by any $k$ of its values
([Chapter 10](10-Roots-and-Coefficients.md), Lagrange interpolation), so several corrupted bytes can be found and
repaired. A Reed-Solomon code of length 255 is part of the CCSDS standards that space agencies use for telemetry. The
same codes protect CDs, DVDs and QR codes.

## 17.4 Ring homomorphisms and the isomorphism theorem

*Level: advanced.*

**Definition.** A **ring homomorphism** $\varphi : R \to S$ is a map with

$$
\varphi(a + b) = \varphi(a) + \varphi(b), \qquad \varphi(ab) = \varphi(a)\varphi(b), \qquad \varphi(1) = 1 .
$$

Its **kernel** is $\ker\varphi = \{a : \varphi(a) = 0\}$. A bijective homomorphism is an **isomorphism**.

**Examples.**

- $\mathbb{Z} \to \mathbb{Z}_n$, $a \mapsto a \bmod n$.
- **Evaluation.** For a fixed $c$, $\mathbb{R}[x] \to \mathbb{R}$, $f \mapsto f(c)$. Similarly $\mathbb{R}[x] \to
  \mathbb{C}$, $f \mapsto f(i)$. That evaluation respects products is the reason you may substitute numbers into
  factored polynomials.
- **Complex conjugation** $\mathbb{C} \to \mathbb{C}$, $z \mapsto \bar z$, is an isomorphism from $\mathbb{C}$ to
  itself (an automorphism). These symmetries of fields are what Galois theory studies
  ([Chapter 20](20-Galois-Theory.md)).
- $\mathbb{Z}[x] \to \mathbb{F}_p[x]$, reducing every coefficient mod $p$. Used in [Chapter 18](18-Factorization-in-Rings.md)
  to test irreducibility.
- The determinant $M_n(\mathbb{R}) \to \mathbb{R}$ respects products but not sums, so it is not a ring homomorphism.

**Theorem.** The kernel of a ring homomorphism is an ideal, and the image is a subring.

*Proof.* The kernel is an additive subgroup (the kernel of the group homomorphism on $(R, +)$). If $a \in \ker\varphi$
and $r \in R$ then $\varphi(ra) = \varphi(r) \cdot 0 = 0$. The image contains $\varphi(1) = 1$ and is closed under
subtraction and products, since those are images of differences and products. $\square$

So, as with groups: **kernels are ideals, and every ideal is a kernel** (of $\pi : R \to R/I$). As with groups, $\varphi$
is one-to-one exactly when its kernel is $\{0\}$.

**Theorem (first isomorphism theorem for rings).** If $\varphi : R \to S$ is a ring homomorphism, then
$R/\ker\varphi \cong \operatorname{im}\varphi$, via $a + \ker\varphi \mapsto \varphi(a)$.

*Proof.* By the group version (§15.6), applied to $(R, +)$, the map $\bar\varphi(a + K) = \varphi(a)$ is a well-defined
bijective additive homomorphism onto the image. It also respects products, $\bar\varphi((a + K)(b + K)) =
\bar\varphi(ab + K) = \varphi(ab) = \varphi(a)\varphi(b)$, and sends $1 + K$ to $1$. $\square$

**Worked example: $\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$ again.** Let $\varphi : \mathbb{R}[x] \to \mathbb{C}$ be
evaluation at $i$. It is onto: $a + bx \mapsto a + bi$. Its kernel contains $x^2 + 1$, hence the ideal $(x^2 + 1)$.
Conversely, if $f(i) = 0$, divide: $f = q\cdot(x^2 + 1) + (a + bx)$ with $a, b$ real. Then $0 = f(i) = a + bi$, so
$a = b = 0$ and $f \in (x^2+1)$. So $\ker\varphi = (x^2 + 1)$, and the theorem gives the isomorphism with no need to
check multiplication by hand.

**Worked example: $\mathbb{Z}[i]/(2 + i) \cong \mathbb{F}_5$.** Define $\varphi : \mathbb{Z}[i] \to \mathbb{Z}_5$ by
$a + bi \mapsto a - 2b \bmod 5$, that is, "send $i$ to $-2$". It respects products because $(-2)^2 = 4 \equiv -1
\pmod 5$, so the rule $i^2 = -1$ is respected. It is onto (the integers alone hit everything). The kernel contains
$2 + i \mapsto 2 - 2 = 0$, and with a little more work one shows it is exactly $(2 + i)$ (exercise 9). So the quotient
is the field with 5 elements, matching the norm $N(2+i) = 5$.

### The Chinese remainder theorem for rings

Two ideals $I, J$ of $R$ are **coprime** (or comaximal) if $I + J = R$, i.e. $a + b = 1$ for some $a \in I$, $b \in J$.
In $\mathbb{Z}$, $(m) + (n) = (\gcd(m,n))$, so $(m)$ and $(n)$ are coprime exactly when $\gcd(m, n) = 1$.

**Theorem (Chinese remainder theorem).** If $I + J = R$, then

$$
R/(I \cap J) \cong R/I \times R/J .
$$

(The product ring $R/I \times R/J$ has coordinatewise operations.)

*Proof.* Let $\varphi : R \to R/I \times R/J$, $r \mapsto (r + I, r + J)$. It is a ring homomorphism with kernel
$I \cap J$. It is onto: write $1 = a + b$ with $a \in I$, $b \in J$. Given $(r + I, s + J)$, let $t = rb + sa$. Mod $I$,
$a \equiv 0$ and $b = 1 - a \equiv 1$, so $t \equiv r$. Mod $J$, likewise $t \equiv s$. The first isomorphism theorem
finishes. $\square$

For $R = \mathbb{Z}$, $I = (m)$, $J = (n)$ coprime, $I \cap J = (mn)$, and this is $\mathbb{Z}_{mn} \cong \mathbb{Z}_m
\times \mathbb{Z}_n$ as **rings**, upgrading §15.7. The proof even says how to solve: to find $x \equiv 2 \pmod 3$,
$x \equiv 3 \pmod 5$, write $1 = 6 + (-5)$ with $a = 6 \in (3)$, $b = -5 \in (5)$; then $t = 2 \cdot (-5) + 3 \cdot 6 =
8$. **Check:** $8 \equiv 2 \pmod 3$ and $8 \equiv 3 \pmod 5$.

The same theorem applies to polynomials: if $f$ and $g$ have no common factor in $F[x]$, then $F[x]/(fg) \cong F[x]/(f)
\times F[x]/(g)$. Lagrange interpolation is the case of several distinct linear factors $x - c_1, \dots, x - c_k$: a polynomial of degree
less than $k$ can be given any values at $c_1, \dots, c_k$.

The **correspondence theorem** holds too, with the same proof as for groups: the ideals of $R/I$ are exactly the $J/I$
for ideals $J \supseteq I$. For example the ideals of $\mathbb{Z}_{12} = \mathbb{Z}/(12)$ correspond to the ideals
$(d) \supseteq (12)$, that is, to the divisors $d$ of 12.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 240 225" role="img" aria-label="The six ideals of Z12 ordered by inclusion: (1) at the top, then (2) and (3), then (4) and (6), then (0) at the bottom">
<g stroke="currentColor" stroke-width="1.5">
<line x1="109.1" y1="38.1" x2="80.9" y2="71.9"/>
<line x1="130.9" y1="38.1" x2="159.1" y2="71.9"/>
<line x1="62.4" y1="100.2" x2="47.6" y2="129.8"/>
<line x1="82.9" y1="96.1" x2="127.1" y2="133.9"/>
<line x1="162.4" y1="100.2" x2="147.6" y2="129.8"/>
<line x1="51.4" y1="157.6" x2="78.6" y2="187.4"/>
<line x1="128.6" y1="157.6" x2="101.4" y2="187.4"/>
</g>
<circle cx="120" cy="25" r="17" fill="#7ccf9a" fill-opacity="0.35" stroke="#7ccf9a" stroke-width="2"/>
<circle cx="70" cy="85" r="17" fill="#eea66f" fill-opacity="0.35" stroke="#eea66f" stroke-width="2"/>
<circle cx="170" cy="85" r="17" fill="#eea66f" fill-opacity="0.35" stroke="#eea66f" stroke-width="2"/>
<circle cx="40" cy="145" r="17" fill="#7ccf9a" fill-opacity="0.35" stroke="#7ccf9a" stroke-width="2"/>
<circle cx="140" cy="145" r="17" fill="#7ccf9a" fill-opacity="0.35" stroke="#7ccf9a" stroke-width="2"/>
<circle cx="90" cy="200" r="17" fill="#9cc9ea" fill-opacity="0.35" stroke="#9cc9ea" stroke-width="2"/>
<g font-size="12" text-anchor="middle" fill="currentColor">
<text x="120" y="29">(1)</text>
<text x="70" y="89">(2)</text>
<text x="170" y="89">(3)</text>
<text x="40" y="149">(4)</text>
<text x="140" y="149">(6)</text>
<text x="90" y="204">(0)</text>
</g>
</svg>
</div>

The six ideals of $\mathbb{Z}_{12}$, each joined to the ideals just below it (contained in it). The two orange ones,
$(2)$ and $(3)$, are maximal: nothing fits between them and the whole ring. They correspond to the primes 2 and 3.

## 17.5 Prime and maximal ideals

*Level: advanced.*

In $\mathbb{Z}$, the prime $p$ has a famous property (Euclid's lemma): if $p \mid ab$ then $p \mid a$ or $p \mid b$. In
ideal language, "$p \mid ab$" is "$ab \in (p)$". This gives the general definition.

**Definitions.** Let $R$ be commutative and $P, M$ ideals different from $R$.

- $P$ is **prime** if $ab \in P$ implies $a \in P$ or $b \in P$.
- $M$ is **maximal** if there is no ideal strictly between $M$ and $R$: whenever $M \subseteq J \subseteq R$ with $J$ an
  ideal, $J = M$ or $J = R$.

In $\mathbb{Z}$: $(n)$ with $n \ge 2$ is prime exactly when $n$ is a prime number (if $n = ab$ with $1 < a, b < n$ then
$ab \in (n)$ but neither factor is), and $(0)$ is prime because $\mathbb{Z}$ is a domain. The maximal ideals are the
$(p)$: an ideal containing $(p)$ is $(d)$ with $d \mid p$, so $d = 1$ or $p$.

The two definitions look unrelated. The quotient ring sees them both at once.

**Theorem.** Let $I \ne R$ be an ideal of a commutative ring $R$.

1. $R/I$ is an integral domain if and only if $I$ is prime.
2. $R/I$ is a field if and only if $I$ is maximal.

*Proof of 1.* $R/I$ has $1 \ne 0$ because $1 \notin I$. In $R/I$, the statement "$(a + I)(b + I) = 0$" means
"$ab \in I$", and "$a + I = 0$" means "$a \in I$". So "no zero divisors in $R/I$" (if $(a+I)(b+I) = 0$ then
$a + I = 0$ or $b + I = 0$) translates word for word into "$ab \in I$ implies $a \in I$ or $b \in I$". $\square$

*Proof of 2.* Suppose $I$ is maximal, and let $a + I \ne 0$, i.e. $a \notin I$. The ideal $I + (a) = \{i + ra\}$
strictly contains $I$, so it is $R$, and $1 = i + ra$ for some $i \in I$, $r \in R$. Then $(r + I)(a + I) = ra + I =
1 - i + I = 1 + I$: $a + I$ has an inverse. So $R/I$ is a field.

Conversely, suppose $R/I$ is a field, and let $J$ be an ideal with $I \subsetneq J$. Take $a \in J \setminus I$. Then
$a + I \ne 0$, so it has an inverse $b + I$: $ab - 1 \in I \subseteq J$. Since $ab \in J$, also $1 = ab - (ab - 1) \in J$,
so $J = R$. Hence $I$ is maximal. $\square$

**Corollary.** Every maximal ideal is prime (a field is a domain).

The converse fails. In $\mathbb{Z}[x]$:

- $(x)$ is prime, since $\mathbb{Z}[x]/(x) \cong \mathbb{Z}$ is a domain; it is not maximal, since $\mathbb{Z}$ is not a
  field. Indeed $(x) \subsetneq (2, x) \subsetneq \mathbb{Z}[x]$.
- $(2, x)$ is maximal, since $\mathbb{Z}[x]/(2, x) \cong \mathbb{F}_2$ is a field.
- $(x^2 + 1)$ is prime, since $\mathbb{Z}[x]/(x^2 + 1) \cong \mathbb{Z}[i]$ is a domain, but not maximal: it lies inside
  $(3, x^2 + 1)$, and $\mathbb{Z}[x]/(3, x^2 + 1) \cong \mathbb{F}_3[x]/(x^2 + 1)$ is a field with 9 elements
  ($x^2 + 1$ has no root mod 3, so it is irreducible; see §17.7).

The prime ideals of $\mathbb{Z}[x]$ can all be listed, and they come in "layers": $(0)$; principal primes such as $(x)$,
$(2)$, $(x^2+1)$; and maximal ideals $(p, f)$ with $f$ irreducible mod $p$. Drawn as a picture, this is David Mumford's
famous "arithmetic surface", one of the first images of algebraic geometry over the integers
([Chapter 22](22-Where-Algebra-Goes.md)).

**Do maximal ideals always exist?** In a finite ring, clearly: keep enlarging a proper ideal until you cannot. In
general, **every nonzero commutative ring has a maximal ideal**, and every proper ideal lies inside one. The proof
(Wolfgang Krull, 1929) needs the axiom of choice, in the form of Zorn's lemma, to "keep enlarging" infinitely often. We
state it without proof.

**History.** Ideals were invented to rescue unique factorization. In the 1840s Ernst Kummer, working on Fermat's last
theorem, found that numbers built from roots of unity can factor into irreducibles in more than one way, and introduced
"ideal numbers" to restore uniqueness. Richard Dedekind turned these into sets, the ideals, in 1871, in a supplement to
Dirichlet's lectures on number theory, and proved that in the rings he studied every nonzero ideal factors uniquely into
prime ideals. The abstract notion of a ring came later: David Hilbert used the word *Zahlring* in his 1897 report on
number theory, Abraham Fraenkel gave an axiomatic definition in 1914, and Emmy Noether's 1921 paper *Idealtheorie in
Ringbereichen* made ideals of abstract commutative rings the centre of modern algebra. That story continues in
[Chapter 18](18-Factorization-in-Rings.md).

## 17.6 Characteristic

*Level: advanced.*

In $\mathbb{Z}_5$, adding 1 to itself five times gives 0. In $\mathbb{Q}$ it never does. This difference is the first
thing to know about any ring.

**Definition.** The **characteristic** of a ring $R$ is the smallest positive integer $n$ with
$n \cdot 1 = 1 + 1 + \cdots + 1$ ($n$ terms) $= 0$, or $0$ if there is no such $n$.

Examples: $\mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$ have characteristic 0; $\mathbb{Z}_n$ has characteristic $n$;
$\mathbb{F}_4$ and $\mathbb{F}_2[x]$ have characteristic 2 (an infinite ring can have positive characteristic).

Another way to see it: there is exactly one ring homomorphism $\mathbb{Z} \to R$, $k \mapsto k \cdot 1$ (it must send
1 to 1). Its kernel is an ideal of $\mathbb{Z}$, so it is $(n)$, and $n$ is the characteristic. By the first isomorphism
theorem, $R$ contains a copy of $\mathbb{Z}/(n)$: of $\mathbb{Z}$ if $n = 0$, of $\mathbb{Z}_n$ otherwise.

**Theorem.** The characteristic of an integral domain is 0 or a prime.

*Proof.* Suppose the characteristic is $n = ab$ with $1 < a, b < n$. Then $(a \cdot 1)(b \cdot 1) = n \cdot 1 = 0$, so
$a \cdot 1 = 0$ or $b \cdot 1 = 0$ in a domain, contradicting the minimality of $n$. And $n \ne 1$ because $1 \ne 0$.
$\square$

So every field contains either $\mathbb{Q}$ (characteristic 0: the copy of $\mathbb{Z}$ has inverses, so it generates a
copy of $\mathbb{Q}$) or $\mathbb{F}_p$ (characteristic $p$). These are the **prime fields**, the smallest fields of
all, and every field is built on one of them. A finite field must have prime characteristic $p$, and since it is then a
vector space over $\mathbb{F}_p$ of some dimension $n$, it has $p^n$ elements: there is no field with 6 or 10 elements.
[Chapter 19](19-Fields-and-Extensions.md) shows there is one of every size $p^n$.

### The freshman's dream

Students sometimes write $(a + b)^2 = a^2 + b^2$. It is wrong in $\mathbb{R}$. It is right in characteristic 2, and
the prime-$p$ version is a theorem.

**Theorem.** If $R$ is commutative of prime characteristic $p$, then for all $a, b$,

$$
(a + b)^p = a^p + b^p .
$$

So the **Frobenius map** $F(a) = a^p$ is a ring homomorphism $R \to R$.

*Proof.* By the binomial theorem ([Chapter 8](08-Sequences-Series-and-Induction.md)), which holds in any commutative
ring, $(a + b)^p = \sum_{k=0}^{p} \binom{p}{k} a^k b^{p-k}$. For $0 < k < p$,

$$
\binom{p}{k} = \frac{p!}{k!\,(p-k)!}
$$

is an integer with $p$ in the numerator and no factor $p$ in the denominator ($k!$ and $(p-k)!$ are products of numbers
less than $p$), so $p$ divides it, and the term is 0 in characteristic $p$. Only $k = 0$ and $k = p$ survive.
Multiplicativity $F(ab) = (ab)^p = a^pb^p$ is commutativity, and $F(1) = 1$. $\square$

**Fermat's little theorem, a third time.** In $\mathbb{F}_p$, apply the freshman's dream repeatedly:
$a^p = (1 + 1 + \cdots + 1)^p = 1^p + \cdots + 1^p = a$ for $a = 1 + \cdots + 1$. So $a^p = a$ for every
$a \in \mathbb{F}_p$, which is Fermat. The first proof was Lagrange's theorem ([Chapter 14](14-Subgroups-Cosets-and-Lagrange.md)).

On a finite field, the Frobenius map is one-to-one (its kernel is $\{0\}$, as a field has no nilpotents) and hence onto.
It is an automorphism, and in [Chapter 20](20-Galois-Theory.md) it turns out to generate the whole Galois group of a
finite field.

## 17.7 Polynomial rings

*Level: advanced; the end of the section is expert.*

### What a polynomial is

In school a polynomial is a function. Over a finite field that view breaks: over $\mathbb{F}_2$, the polynomials
$x^2 + x$ and $0$ give the same function (both are 0 at $x = 0$ and $x = 1$), yet we want $x^2 + x \ne 0$, because it is
$x(x+1)$ and has degree 2. So we define polynomials as formal expressions, really as their lists of coefficients.

**Definition.** For a commutative ring $R$, the **polynomial ring** $R[x]$ consists of expressions
$f = a_0 + a_1x + \cdots + a_nx^n$ with $a_i \in R$, two being equal when all coefficients agree. They are added
coefficientwise and multiplied by

$$
\Big(\sum_i a_ix^i\Big)\Big(\sum_j b_jx^j\Big) = \sum_k \Big(\sum_{i + j = k} a_ib_j\Big)x^k .
$$

(Formally, a polynomial is a sequence $(a_0, a_1, a_2, \dots)$ with only finitely many nonzero terms, and $x$ is the
sequence $(0, 1, 0, 0, \dots)$.) The **degree** of $f \ne 0$ is the largest $n$ with $a_n \ne 0$; $a_n$ is the
**leading coefficient**, and $f$ is **monic** if it is 1.

### Degree and units

**Theorem.** If $R$ is an integral domain, then for nonzero $f, g \in R[x]$,
$\deg(fg) = \deg f + \deg g$. Consequently $R[x]$ is an integral domain, and its units are the units of $R$ (as
constants).

*Proof.* If $f$ has leading term $a_mx^m$ and $g$ has $b_nx^n$, the coefficient of $x^{m+n}$ in $fg$ is $a_mb_n$, which
is nonzero in a domain, and no higher power appears. So $fg \ne 0$ and the degrees add. If $fg = 1$ then
$\deg f + \deg g = 0$, so both are constants, units of $R$. $\square$

Without "domain" this fails dramatically. In $\mathbb{Z}_4[x]$:

$$
(1 + 2x)^2 = 1 + 4x + 4x^2 = 1 ,
$$

so $1 + 2x$ is a unit of degree 1, its own inverse. The culprit is the nilpotent 2.

### Division with remainder

**Theorem (division algorithm).** Let $F$ be a field, $f, g \in F[x]$, $g \ne 0$. There are unique $q, r \in F[x]$
with

$$
f = qg + r, \qquad r = 0 \text{ or } \deg r < \deg g .
$$

(The same holds over any commutative ring if $g$ is monic.)

*Proof.* *Existence,* by induction on $\deg f$. If $f = 0$ or $\deg f < \deg g$, take $q = 0$, $r = f$. Otherwise let
$f$ have leading term $a x^m$ and $g$ have leading term $bx^n$, $m \ge n$. The polynomial
$f_1 = f - \frac{a}{b}x^{m-n}g$ has its $x^m$ term cancelled, so $f_1 = 0$ or $\deg f_1 < m$. By induction
$f_1 = q_1g + r$, so $f = (q_1 + \frac{a}{b}x^{m-n})g + r$. (Dividing by $b$ is where we need a field, or $b = 1$.)
*Uniqueness:* if $qg + r = q'g + r'$ then $(q - q')g = r' - r$. If $q \ne q'$ the left side has degree at least
$\deg g$, the right side less. So $q = q'$ and $r = r'$. $\square$

This is long division from [Chapter 4](04-Polynomials-and-Factoring.md), now proved. With $g = x - c$ it gives the
remainder theorem $f = q(x - c) + f(c)$ and the factor theorem of [Chapter 10](10-Roots-and-Coefficients.md), which
hold in any commutative ring because $x - c$ is monic.

### Every ideal of $F[x]$ is principal

**Theorem.** If $F$ is a field, every ideal of $F[x]$ is principal: $I = (g)$, where $g$ is any nonzero element of $I$
of smallest degree (or $g = 0$ if $I = \{0\}$).

*Proof.* Let $I \ne \{0\}$ and $g \in I$ nonzero of smallest degree. Certainly $(g) \subseteq I$. For $f \in I$, divide:
$f = qg + r$. Then $r = f - qg \in I$, and $r = 0$ or $\deg r < \deg g$; minimality forces $r = 0$. So $f \in (g)$.
$\square$

It is the same argument as for subgroups of $\mathbb{Z}$, with degree in place of size. A domain in which every ideal is
principal is a **principal ideal domain (PID)**; $\mathbb{Z}$ and $F[x]$ are the two basic examples, and
$\mathbb{Z}[x]$ is not (§17.3). Choosing $g$ monic makes it unique: for example, in $\mathbb{Q}[x]$ the ideal
$(x^2 - 1, x^2 - 3x + 2)$ contains their difference $3x - 3$, hence $(x - 1)$; and both generators are multiples of
$x - 1$; so the ideal is $(x - 1)$, the gcd.

### Quotients of $F[x]$: when do we get a field?

A nonconstant polynomial $p \in F[x]$ is **irreducible** if it is not a product of two polynomials of smaller degree.
Units of $F[x]$ are the nonzero constants, so this is the polynomial version of "prime".

**Theorem.** For $p \in F[x]$ nonconstant, $F[x]/(p)$ is a field if and only if $p$ is irreducible.

*Proof.* By §17.5 we need: $(p)$ is maximal $\iff$ $p$ is irreducible. If $p = gh$ with smaller degrees, then
$(p) \subsetneq (g) \subsetneq F[x]$ ($g$ is not a multiple of $p$ by degree, and not a unit since it is nonconstant), so
$(p)$ is not maximal. Conversely, if $p$ is irreducible and $(p) \subseteq J$, then $J = (g)$ since $F[x]$ is a PID, so
$p = gh$ for some $h$. Irreducibility makes $g$ or $h$ a nonzero constant. If $g$ is a constant, $J = F[x]$; if $h$ is
a constant, $J = (p)$. So $(p)$ is maximal. $\square$

For degree 2 or 3, irreducible means "no root in $F$" (a factorization would include a linear factor $x - c$, giving a
root $c$). So:

- $x^2 + 1$ has no real root, so $\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}$ is a field. Over $\mathbb{C}$ it factors.
- $x^2 + x + 1$ has no root in $\mathbb{F}_2$ ($0 \mapsto 1$, $1 \mapsto 1$), giving $\mathbb{F}_4$.
- $x^2 + 1$ has no root mod 3 ($0, 1, 2 \mapsto 1, 2, 2$), giving a field with 9 elements; but mod 5, $2^2 + 1 = 5 = 0$,
  so $\mathbb{F}_5[x]/(x^2+1)$ is not a field, and by the CRT it is $\cong \mathbb{F}_5 \times \mathbb{F}_5$.
- $x^3 + x + 1$ has no root in $\mathbb{F}_2$, so $\mathbb{F}_2[x]/(x^3+x+1)$ is a field with 8 elements.
- $x^2 - 2$ has no rational root, so $\mathbb{Q}[x]/(x^2 - 2) \cong \mathbb{Q}(\sqrt 2) = \{a + b\sqrt 2 : a, b \in
  \mathbb{Q}\}$ is a field.

This is the engine of [Chapter 19](19-Fields-and-Extensions.md): to get a root of an irreducible polynomial, divide by it.

### Several variables, and Hilbert's basis theorem

*Level: expert.*

Polynomials in two variables, $F[x, y] = (F[x])[y]$, are not a PID: the ideal $(x, y)$ (polynomials with zero constant
term) needs two generators, by the same argument as for $(2, x)$ in $\mathbb{Z}[x]$. But something weaker and very
useful survives.

**Theorem (Hilbert's basis theorem, 1890).** If every ideal of $R$ is finitely generated, then so is every ideal of
$R[x]$. Hence every ideal of $F[x_1, \dots, x_n]$ and of $\mathbb{Z}[x_1, \dots, x_n]$ is generated by finitely many
polynomials.

The proof (in every graduate algebra text; Atiyah and Macdonald, Chapter 7, or Dummit and Foote, Section 9.6) looks at
the ideals formed by the leading coefficients of the polynomials of each degree in a given ideal. Its meaning: any
system of polynomial equations, even infinitely many, is equivalent to a finite system. Rings with this property are
called **Noetherian**, after Emmy Noether, who showed that this "finiteness of ideals" is the key to much of the theory.
When Hilbert published his proof, which shows that a finite generating set exists without saying how to find one, Paul
Gordan, the expert on invariant theory whose problem it solved, is often quoted as calling it "theology, not
mathematics"; the quotation is widely repeated but its exact source is uncertain. Computing the generators explicitly is
the job of **Gröbner bases** ([Chapter 22](22-Where-Algebra-Goes.md)).

## Check yourself

??? question "1. Which are rings (with 1)? (a) the even integers; (b) $\{a + b\sqrt 3 : a, b \in \mathbb{Z}\}$; (c) the $2 \times 2$ real matrices with determinant 1; (d) the upper triangular $2 \times 2$ real matrices."

    (a) No: no multiplicative identity (1 is odd).
    (b) Yes: $(a + b\sqrt 3)(c + d\sqrt 3) = (ac + 3bd) + (ad + bc)\sqrt 3$; it contains 1 and is closed under
    subtraction.
    (c) No: not closed under addition ($I + I = 2I$ has determinant 4) and the zero matrix is missing.
    (d) Yes: sums and products of upper triangular matrices are upper triangular, and $I$ is one.

??? question "2. Find all units, zero divisors and nilpotent elements of $\mathbb{Z}_{12}$."

    Units: $1, 5, 7, 11$ (coprime to 12). Zero divisors: $2, 3, 4, 6, 8, 9, 10$ (each shares a factor with 12, e.g.
    $2 \cdot 6 = 0$, $9 \cdot 4 = 36 = 0$). Nilpotent: $0$ and $6$ ($6^2 = 36 = 0$; any nilpotent must be divisible by
    both 2 and 3).

??? question "3. Solve $x^2 = x$ in $\mathbb{Z}_6$ and in $\mathbb{Z}_7$. Why are the answers different?"

    $\mathbb{Z}_6$: $0, 1, 3, 4$ ($9 = 3$, $16 = 4$). $\mathbb{Z}_7$: only $0, 1$. In a domain $x(x - 1) = 0$ forces
    $x = 0$ or $1$; $\mathbb{Z}_7$ is a field, but $\mathbb{Z}_6$ has zero divisors ($3 \cdot 2 = 0$).

??? question "4. Show that in a commutative ring, the nilpotent elements form an ideal."

    If $a^m = 0$ and $b^n = 0$, then $(a - b)^{m+n-1} = \sum \binom{m+n-1}{k} a^k(-b)^{m+n-1-k}$, and in every term
    either $k \ge m$ or $m + n - 1 - k \ge n$, so every term is 0. And $(ra)^m = r^ma^m = 0$. With $0$ nilpotent, this
    is an ideal (the **nilradical**).

??? question "5. Is $(x^2 + 1)$ a maximal ideal of $\mathbb{R}[x]$? Of $\mathbb{C}[x]$? Is $(x^2 - 2)$ maximal in $\mathbb{Q}[x]$? In $\mathbb{R}[x]$?"

    $\mathbb{R}[x]$: yes, $x^2+1$ is irreducible over $\mathbb{R}$ (no real root). $\mathbb{C}[x]$: no,
    $x^2 + 1 = (x - i)(x + i)$. $\mathbb{Q}[x]$: yes, $\sqrt 2$ is irrational. $\mathbb{R}[x]$: no,
    $x^2 - 2 = (x - \sqrt 2)(x + \sqrt 2)$.

??? question "6. Show that $(x)$ is a prime ideal of $\mathbb{Z}[x]$ that is not maximal, and find a maximal ideal containing it."

    $\mathbb{Z}[x]/(x) \cong \mathbb{Z}$ via $f \mapsto f(0)$ (onto, kernel $(x)$). $\mathbb{Z}$ is a domain but not a
    field, so $(x)$ is prime, not maximal. $(x) \subset (3, x)$, and $\mathbb{Z}[x]/(3, x) \cong \mathbb{F}_3$ is a
    field, so $(3, x)$ is maximal (any $(p, x)$ with $p$ prime works).

??? question "7. Compute $(1 + \alpha)^{-1}$ and $\alpha^3$ in $\mathbb{F}_4 = \mathbb{F}_2[x]/(x^2+x+1)$, where $\alpha = \bar x$."

    $\alpha(1 + \alpha) = \alpha + \alpha^2 = \alpha + \alpha + 1 = 1$, so $(1+\alpha)^{-1} = \alpha$. And
    $\alpha^3 = \alpha \cdot \alpha^2 = \alpha(\alpha + 1) = 1$. So $\alpha$ has multiplicative order 3.

??? question "8. Use the Chinese remainder theorem to find all $x \in \mathbb{Z}_{30}$ with $x^2 = x$."

    $\mathbb{Z}_{30} \cong \mathbb{Z}_2 \times \mathbb{Z}_3 \times \mathbb{Z}_5$ as rings, and in each field $x^2 = x$
    means $x \in \{0, 1\}$. So there are $2^3 = 8$ solutions, one for each choice of 0 or 1 mod 2, 3, 5: they are
    $0, 1, 6, 10, 15, 16, 21, 25$. (Check, e.g. $6^2 = 36 \equiv 6$, $16^2 = 256 = 8 \cdot 30 + 16$.)

??? question "9. Show that the kernel of $\varphi : \mathbb{Z}[i] \to \mathbb{Z}_5$, $a + bi \mapsto a - 2b \bmod 5$, is exactly $(2 + i)$."

    $(2 + i)$ is in the kernel, hence so is the ideal it generates. Conversely, suppose $a - 2b \equiv 0 \pmod 5$,
    say $a - 2b = 5k$. Write $a + bi = (a - 2b) + b(2 + i)$. Since $5 = (2 + i)(2 - i)$, the first part is
    $5k = k(2 - i)(2 + i) \in (2 + i)$, and the second part is visibly in $(2 + i)$. So $a + bi \in (2 + i)$.

??? question "10. Give two non-isomorphic rings with four elements and characteristic 2, only one of which is a field."

    $\mathbb{F}_2 \times \mathbb{F}_2$ has characteristic 2 and four elements but zero divisors: $(1,0)(0,1) = 0$.
    $\mathbb{F}_4$ is a field of order 4 and characteristic 2. They are not isomorphic (one is a field). A third:
    $\mathbb{F}_2[x]/(x^2)$, where $\bar x$ is nilpotent.

??? question "11. Show that in a PID, every nonzero prime ideal is maximal."

    Let $(p) \ne 0$ be prime and $(p) \subseteq (m) \subsetneq R$. Then $p = mr$. Since $(p)$ is prime, $m \in (p)$
    or $r \in (p)$. If $m \in (p)$ then $(m) = (p)$. If $r = ps$, then $p = mps$, so $ms = 1$ (cancel $p \ne 0$ in a
    domain), so $m$ is a unit and $(m) = R$, contradiction. So $(p)$ is maximal. (This is why in $\mathbb{Z}$ and in
    $F[x]$, "prime" and "maximal" agree for nonzero ideals.)

??? question "12. Find the quotient and remainder of $f = x^4 + 3x^2 + x$ by $g = x^2 + 1$ in $\mathbb{Q}[x]$, and say what $f$ is in $\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$."

    $x^4 + 3x^2 + x = (x^2 + 2)(x^2 + 1) + (x - 2)$. Quotient $x^2 + 2$, remainder $x - 2$. In $\mathbb{C}$, $f$
    becomes $f(i) = 1 - 3 + i = -2 + i$, matching the remainder at $x = i$.

## What you learned

- A ring has addition (an abelian group) and multiplication (associative, with 1), tied by distributivity; the sign
  rules follow from the axioms.
- Units, zero divisors and nilpotents; a domain has no zero divisors, a field has inverses; finite domains are fields,
  and $\mathbb{Z}_n$ is a field exactly when $n$ is prime.
- Ideals absorb multiplication; they are exactly the kernels of ring homomorphisms, and $R/I$ is a ring.
- $\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$, $\mathbb{F}_2[x]/(x^2+x+1) = \mathbb{F}_4$; the first isomorphism theorem
  and the Chinese remainder theorem hold for rings.
- $R/P$ is a domain iff $P$ is prime; $R/M$ is a field iff $M$ is maximal; maximal implies prime.
- The characteristic of a domain is 0 or prime, and in characteristic $p$, $(a+b)^p = a^p + b^p$.
- Over a field, polynomials have division with remainder, $F[x]$ is a PID, and $F[x]/(p)$ is a field iff $p$ is
  irreducible.

**Next:** [Chapter 18](18-Factorization-in-Rings.md), which rings have unique factorization like the integers, which do
not, and what that has to do with Fermat's last theorem.

## Further reading

- D. S. Dummit and R. M. Foote, *Abstract Algebra*, 3rd edition, 2004. Chapters 7 to 9.
- M. Artin, *Algebra*, 2nd edition, 2011. Chapter 11, with good pictures of quotient rings.
- C. C. Pinter, *A Book of Abstract Algebra*, 2nd edition, 1990. Gentle, with many exercises on rings and ideals.
- M. F. Atiyah and I. G. Macdonald, *Introduction to Commutative Algebra*, 1969. The graduate standard; Chapter 1 on
  prime and maximal ideals.
- E. Noether, "Idealtheorie in Ringbereichen", *Mathematische Annalen* 83, 1921.
- I. Kleiner, "From numbers to rings: the early history of ring theory", *Elemente der Mathematik* 53, 1998.
- I. S. Reed and G. Solomon, "Polynomial codes over certain finite fields", *Journal of the Society for Industrial and
  Applied Mathematics* 8, 1960.
- On this site: [Fields and vector spaces (MAT240H1 unit 1)](../../uoft/MAT240H1/unit01.md),
  [Polynomials, UFD and resultants (MAT240H1 unit 9)](../../uoft/MAT240H1/unit09.md),
  [Inverses mod n](../../topics/number-theory/level-6/04-inverses-mod-n.md),
  [Factoring](../../topics/algebra/level-6/03-factoring.md), the [Algebra book](index.md).
- Finite fields and polynomial rings in cryptography (AES works in $\mathbb{F}_{256}$):
  [cryptography.akadian.ca/book](https://cryptography.akadian.ca/book/).
