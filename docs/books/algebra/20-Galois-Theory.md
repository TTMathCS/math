# 20. Galois theory

*There are formulas for the roots of every equation of degree 2, 3 and 4 ([Chapter 5](05-Quadratics.md),
[Chapter 11](11-Cubics-and-Quartics.md)). For three centuries after Cardano, the best mathematicians looked for one for
degree 5. In 1824 Abel proved there is none, and a few years later a teenager, Évariste Galois, explained exactly which
equations can be solved by radicals and why: it depends on a group, the symmetries of the roots, and on whether that
group can be taken apart into abelian pieces. This chapter builds his theory with modern tools, works one example
completely, proves that the general quintic has no formula, shows a specific quintic whose roots no radical expression
can reach, and ends with the 19-year-old Gauss constructing the regular 17-gon.*

!!! abstract "In this chapter"
    **You will learn:**

    - the Galois group of a field extension, and how it acts on the roots of a polynomial
    - normal and separable extensions, and four equivalent descriptions of a Galois extension (with proofs)
    - the fundamental theorem of Galois theory, worked completely for $\mathbb{Q}(\sqrt[3]2, \omega)$
    - solvable groups, and a proof that $A_5$ is simple and $S_5$ is not solvable
    - why "solvable by radicals" means "solvable group", why the general quintic has no formula, and why
      $x^5 - 4x + 2$ cannot be solved by radicals
    - why a regular $n$-gon is constructible exactly when $\varphi(n)$ is a power of 2, and how Gauss built the 17-gon

    **You need:** [Chapter 19](19-Fields-and-Extensions.md) (degrees, minimal polynomials, splitting fields),
    [Chapters 13 to 16](13-Groups.md) (groups, Lagrange, normal subgroups and quotients, Cauchy's theorem), and
    [Chapter 11](11-Cubics-and-Quartics.md) for the formulas this chapter explains.

    **Levels:** 20.1 is history anyone can read; 20.2 and 20.3 are advanced; 20.4 to 20.8 are expert, with full proofs
    except where a proof outline is marked as such.

## 20.1 The question

What exactly would a "quintic formula" be? The quadratic formula expresses the roots of $ax^2 + bx + c$ using the
coefficients, the four arithmetic operations and a square root. Cardano's formula for the cubic uses square roots and
cube roots; Ferrari's quartic method uses square and cube roots too ([Chapter 11](11-Cubics-and-Quartics.md)). Such an
expression is called a **solution by radicals**: from the coefficients, using $+, -, \times, \div$ and $n$-th roots
$\sqrt[n]{\ }$ for any $n$, nested as deeply as you like.

**The long search.** After Ferrari (1540s), the search for degree 5 went on for more than two centuries. In 1770-1771
Joseph-Louis Lagrange analysed *why* the methods for degrees 2, 3 and 4 work. He showed each one builds auxiliary
expressions in the roots ("resolvents") that take few values when the roots are permuted, and that for degree 5 the
same trick produces an equation of degree 6 rather than something smaller ([Chapter 11](11-Cubics-and-Quartics.md),
section 11.8). He suspected that no method existed, but did not prove it.

**Ruffini and Abel.** Paolo Ruffini published a proof of impossibility in 1799 and revised it several times; it was
long, had gaps, and was largely ignored, though Cauchy wrote to him in support. Niels Henrik Abel, a young Norwegian,
gave a complete proof in a pamphlet he paid to print in 1824, expanded in the first volume of Crelle's journal in 1826.
The theorem is called the **Abel-Ruffini theorem**: there is no formula in radicals for the roots of the general
equation of degree 5 or more. Abel died of tuberculosis in 1829, at 26.

**Galois.** Abel's theorem says there is no general formula. It does not say which *particular* equations can be solved
by radicals: $x^5 - 2 = 0$ obviously can ($x = \sqrt[5]2$). Évariste Galois (1811-1832) answered that question. He sent
memoirs to the Paris Academy in 1829 and 1830; the first was not reported on, and the second was lost after Fourier, who
was to referee it, died. A third, in 1831, was rejected by Siméon Poisson as too unclear to judge, with the suggestion
that he develop it further. Galois was politically active, was imprisoned for part of 1831-1832, and died on 31 May 1832
from a wound received in a duel the day before; he was 20. The night before the duel he wrote a long letter to his
friend Auguste Chevalier summarizing his results. The popular story that he invented his whole theory that night is a
legend: the main memoir existed already, and the letter summarized and extended it. Joseph Liouville published Galois's
papers in 1846, and by the 1870s, through Camille Jordan's *Traité des substitutions* (1870), his ideas had become the
foundation of modern algebra.

**The idea, in one sentence.** Attach to each polynomial a group, the permutations of its roots that preserve every
algebraic relation among them with rational coefficients. Then the polynomial can be solved by radicals exactly when that
group can be broken down, step by step, into abelian groups. The rest of this chapter makes that sentence precise and
proves it.

## 20.2 Automorphisms and the Galois group

*Level: advanced.* Complex conjugation $z \mapsto \bar z$ is a symmetry of $\mathbb{C}$: it respects addition and
multiplication, $\overline{z + w} = \bar z + \bar w$ and $\overline{zw} = \bar z \bar w$, and it fixes every real number.
That is why the non-real roots of a real polynomial come in conjugate pairs: if $f(\alpha) = 0$ with $f$ real, then
$f(\bar\alpha) = \overline{f(\alpha)} = 0$. Galois theory is this observation, for every field.

**Definitions.** An **automorphism** of a field $K$ is a bijective ring homomorphism $\sigma: K \to K$. For an extension
$K/F$, an **$F$-automorphism** is one that fixes every element of $F$. These form a group under composition,

$$
\operatorname{Aut}(K/F) = \{\sigma : K \to K \text{ automorphism} : \sigma(a) = a \text{ for all } a \in F\} .
$$

When $K/F$ is Galois (defined in 20.3) we call it the **Galois group** $\operatorname{Gal}(K/F)$. The Galois group of a
polynomial $f \in F[x]$ is $\operatorname{Gal}(K/F)$ for $K$ its splitting field.

**Lemma 20.1 (automorphisms permute roots).** If $f \in F[x]$, $\alpha \in K$ is a root of $f$ and
$\sigma \in \operatorname{Aut}(K/F)$, then $\sigma(\alpha)$ is a root of $f$.

*Proof.* Write $f = \sum c_k x^k$ with $c_k \in F$. Then
$f(\sigma(\alpha)) = \sum c_k \sigma(\alpha)^k = \sum \sigma(c_k)\sigma(\alpha^k) = \sigma\big(\sum c_k \alpha^k\big) = \sigma(0) = 0$.
$\blacksquare$

So if $K = F(\alpha_1, \ldots, \alpha_n)$ is the splitting field of $f$, an $F$-automorphism permutes the roots, and it is
determined by that permutation (since the roots generate $K$). **The Galois group of a polynomial of degree $n$ is a
subgroup of $S_n$.** Not every permutation need occur: an automorphism must preserve every polynomial relation among the
roots with coefficients in $F$.

**How many automorphisms?** The proof of uniqueness of splitting fields (Theorem 19.8) builds isomorphisms one root at a
time, and at each step the root $\alpha$ may go to any root of its minimal polynomial. Counting the choices gives:

**Theorem 20.2.** Let $K$ be a splitting field of $f$ over $F$. Then $|\operatorname{Aut}(K/F)| \le [K:F]$, with equality
if $f$ has no repeated roots in $K$.

*Proof.* As in 19.8, prove more generally: for an isomorphism $\varphi: F \to F'$ and splitting fields $K$, $K'$ of $f$ and
$\varphi(f)$, the number of isomorphisms $K \to K'$ extending $\varphi$ is at most $[K:F]$, with equality if $\varphi(f)$ has
distinct roots. Induct on $[K:F]$. Pick an irreducible factor $p$ of $f$ of degree $d \ge 2$ and a root $\alpha$ of it. An
extension must send $\alpha$ to a root $\beta$ of $\varphi(p)$ in $K'$; there are at most $d$ of these (exactly $d$ if roots
are distinct), and each gives an isomorphism $F(\alpha) \to F'(\beta)$. By induction each of those extends in at most
$[K : F(\alpha)]$ ways. Total at most $d \cdot [K:F(\alpha)] = [F(\alpha):F]\,[K:F(\alpha)] = [K:F]$. Take $F' = F$, $K' = K$,
$\varphi = \mathrm{id}$. $\blacksquare$

**Examples.**

1. $\operatorname{Gal}(\mathbb{C}/\mathbb{R}) = \{\mathrm{id}, \text{conjugation}\}$, order $2 = [\mathbb{C}:\mathbb{R}]$.
2. $\mathbb{Q}(\sqrt2)/\mathbb{Q}$: an automorphism sends $\sqrt2$ to a root of $x^2 - 2$, so to $\pm\sqrt2$. Both work:
   $a + b\sqrt2 \mapsto a - b\sqrt2$ is an automorphism (check products: both sides of
   $(a + b\sqrt2)(c + d\sqrt2) = (ac + 2bd) + (ad + bc)\sqrt2$ change in the same way). Group of order 2.
3. $\mathbb{Q}(\sqrt[3]2)/\mathbb{Q}$: $\sqrt[3]2$ must go to a root of $x^3 - 2$ inside $\mathbb{Q}(\sqrt[3]2)$, a real field,
   and the only real root is $\sqrt[3]2$. So $\operatorname{Aut} = \{\mathrm{id}\}$, of order $1 < 3$. Something is missing
   from this extension: the other two roots. That is "normality", 20.3.
4. $\mathbb{Q}(\sqrt2, \sqrt3)/\mathbb{Q}$, degree 4: $\sqrt2 \mapsto \pm\sqrt2$ and $\sqrt3 \mapsto \pm\sqrt3$ independently,
   four automorphisms. Each has order 1 or 2, so the group is the Klein four-group $V \cong \mathbb{Z}/2 \times \mathbb{Z}/2$.
5. **Finite fields.** $\operatorname{Gal}(\mathbb{F}_{p^n}/\mathbb{F}_p)$ is cyclic of order $n$, generated by Frobenius
   $\phi(a) = a^p$. Proof: $\phi$ is an automorphism fixing $\mathbb{F}_p$ (by Fermat, $a^p = a$ there). If $\phi^k = \mathrm{id}$
   then every element is a root of $x^{p^k} - x$, which has at most $p^k$ roots, so $p^k \ge p^n$ and $k \ge n$. So $\phi$ has
   order $n$, and by Theorem 20.2 the group has order at most $n$.

## 20.3 Normal and separable extensions

*Level: advanced.* Example 3 shows that an extension can have too few automorphisms in two ways: roots can be **missing**
from the field, or roots can **coincide**. These are the two conditions to name.

**Normal.** An algebraic extension $K/F$ is **normal** if every irreducible polynomial in $F[x]$ that has one root in $K$
splits completely in $K$. $\mathbb{Q}(\sqrt[3]2)/\mathbb{Q}$ is not normal: $x^3 - 2$ has one root there, not three.

**Separable.** A polynomial is **separable** if it has no repeated roots in a splitting field. An algebraic element is
separable if its minimal polynomial is, and $K/F$ is separable if every element is.

The test for repeated roots uses the formal derivative $f' = \sum k c_k x^{k-1}$, which obeys the usual product rule.

**Lemma 20.3.** $f$ has a repeated root if and only if $f$ and $f'$ have a common factor of positive degree.

*Proof.* If $f = (x - a)^2 g$, then $f' = 2(x - a)g + (x-a)^2 g'$, and $x - a$ divides both. Conversely, if $f$ has only
simple roots, write $f = (x - a)g$ with $g(a) \ne 0$; then $f'(a) = g(a) \ne 0$, so no root of $f$ is a root of $f'$, and
(working in a splitting field, where common factors would have common roots) they have no common factor. $\blacksquare$

**Corollary 20.4.** In characteristic 0, every irreducible polynomial is separable. Over a finite field too.

*Proof.* If $f$ is irreducible, its only factors are constants and multiples of $f$. In characteristic 0, $f'$ is nonzero
of lower degree, so $f$ cannot divide it, and $\gcd(f, f') = 1$. Over $\mathbb{F}_q$ the only danger is $f' = 0$, which
happens when $f(x) = g(x^p)$; but every element of a finite field is a $p$-th power (Frobenius is onto), so
$g(x^p) = \sum b_k x^{pk} = \big(\sum b_k^{1/p} x^k\big)^p$, not irreducible. $\blacksquare$

**Inseparability really happens.** Let $F = \mathbb{F}_p(t)$, the field of rational functions in a variable $t$, and
$f = x^p - t$. It is irreducible (Eisenstein with the prime $t$ of $\mathbb{F}_p[t]$), and in a splitting field with root
$a$, $x^p - t = x^p - a^p = (x - a)^p$: one root, repeated $p$ times. So $F(a)/F$ has degree $p$ and only the identity
automorphism. For the rest of this chapter **we work in characteristic 0** (or over finite fields), where everything is
separable and this does not arise.

**Theorem 20.5 (what "Galois" means).** For a finite extension $K/F$ with $G = \operatorname{Aut}(K/F)$, the following are
equivalent:

1. $K$ is the splitting field over $F$ of a separable polynomial;
2. $|G| = [K:F]$;
3. $K/F$ is normal and separable;
4. the **fixed field** $K^G = \{a \in K : \sigma(a) = a \text{ for all } \sigma \in G\}$ is exactly $F$.

Such an extension is called **Galois**.

*Proof.* (1) $\Rightarrow$ (2) is Theorem 20.2.

(1) $\Rightarrow$ (4). Let $E = K^G$, a field with $F \subseteq E \subseteq K$. $K$ is also the splitting field of the same
separable polynomial over $E$, so by Theorem 20.2, $|\operatorname{Aut}(K/E)| = [K:E]$. But every element of $G$ fixes $E$ by
definition, so $\operatorname{Aut}(K/E) = G$, which has order $[K:F]$. Hence $[K:E] = [K:F]$ and $E = F$.

(4) $\Rightarrow$ (3). Take $\alpha \in K$, and let $\alpha_1 = \alpha, \alpha_2, \ldots, \alpha_r$ be the *distinct* elements
of its orbit $\{\sigma(\alpha) : \sigma \in G\}$. Put $g(x) = \prod_{i=1}^r (x - \alpha_i)$. Any $\tau \in G$ permutes the
orbit, so it permutes the factors, so it fixes every coefficient of $g$. By (4), $g \in F[x]$. Since $g(\alpha) = 0$, the
minimal polynomial $m_\alpha$ divides $g$, so $m_\alpha$ has distinct roots, all in $K$: $\alpha$ is separable and $m_\alpha$
splits in $K$. That is normality and separability.

(3) $\Rightarrow$ (1). Let $\beta_1, \ldots, \beta_k$ be a basis of $K$ over $F$. Each minimal polynomial $m_{\beta_j}$ is
separable and splits in $K$. Let $f$ be the product of the *distinct* ones; it is separable, splits in $K$, and its roots
include the $\beta_j$, which generate $K$. So $K$ is its splitting field.

(2) $\Rightarrow$ (1) follows from Artin's theorem below, applied to $G$: it gives $[K : K^G] = |G| = [K:F]$, so $K^G = F$,
which is (4). $\blacksquare$

**Theorem 20.6 (Artin).** If $G$ is a finite group of automorphisms of a field $K$, then $[K : K^G] = |G|$, and
$\operatorname{Aut}(K/K^G) = G$.

*Proof.* Write $E = K^G$. The orbit argument of (4) $\Rightarrow$ (3) shows every $\alpha \in K$ has a minimal polynomial over
$E$ of degree at most $|G|$ (the orbit has at most $|G|$ elements) with distinct roots. If $[K:E]$ were bigger than $|G|$,
choose a finite subextension $E \subseteq L \subseteq K$ with $[L:E] > |G|$; by the primitive element theorem (below)
$L = E(\gamma)$ for one $\gamma$, whose degree $[L:E]$ exceeds $|G|$, a contradiction. So $[K:E] \le |G|$. On the other hand
$G \subseteq \operatorname{Aut}(K/E)$, and $|\operatorname{Aut}(K/E)| \le [K:E]$ by Theorem 20.2 ($K$ is a splitting field over
$E$ by the argument of (3) $\Rightarrow$ (1)). So $|G| \le [K:E] \le |G|$, and both inclusions are equalities. $\blacksquare$

**Theorem 20.7 (primitive element).** A finite separable extension $K/F$ is simple: $K = F(\gamma)$ for some $\gamma$.

*Idea of proof.* For a finite field, take $\gamma$ a generator of the cyclic group $K^\times$ (Theorem 19.9). For an infinite
$F$ it is enough to handle $K = F(\alpha, \beta)$. Try $\gamma = \alpha + c\beta$ with $c \in F$. Let $f$, $g$ be the minimal
polynomials of $\alpha$, $\beta$. Then $\beta$ is a common root of $g(x)$ and $f(\gamma - cx)$, both with coefficients in
$F(\gamma)$; for all but finitely many $c$, it is their *only* common root, so their gcd, computed in $F(\gamma)[x]$, is
$x - \beta$. Hence $\beta \in F(\gamma)$, and then $\alpha = \gamma - c\beta \in F(\gamma)$. The finitely many bad $c$ are those
with $\alpha_i + c\beta_j = \alpha + c\beta$ for some other roots $\alpha_i$ of $f$, $\beta_j \ne \beta$ of $g$. You met an example
in 19.2: $\mathbb{Q}(\sqrt2, \sqrt3) = \mathbb{Q}(\sqrt2 + \sqrt3)$. Full proof: Dummit and Foote, Theorem 14.25. $\square$

## 20.4 The fundamental theorem

*Level: expert.* Here is the dictionary Galois found.

**Theorem 20.8 (fundamental theorem of Galois theory).** Let $K/F$ be a finite Galois extension with group
$G = \operatorname{Gal}(K/F)$. Then:

1. There is a bijection between subgroups $H \le G$ and intermediate fields $F \subseteq E \subseteq K$, given by
   $H \mapsto K^H$ (the fixed field) and $E \mapsto \operatorname{Gal}(K/E)$; the two maps are inverse to each other.
2. It **reverses inclusions**: $H_1 \le H_2$ exactly when $K^{H_1} \supseteq K^{H_2}$. Bigger groups fix less.
3. **Degrees are indices:** $[K : K^H] = |H|$ and $[K^H : F] = [G : H]$.
4. **Conjugates:** for $\sigma \in G$, the field $\sigma(E)$ corresponds to $\sigma H \sigma^{-1}$.
5. **Normal subgroups:** $E = K^H$ is Galois over $F$ if and only if $H$ is a normal subgroup of $G$, and then
   $\operatorname{Gal}(E/F) \cong G/H$.

*Proof outline.* For an intermediate field $E$, $K$ is a splitting field over $E$ of the same separable polynomial, so $K/E$
is Galois, and Theorem 20.5 (4) says the fixed field of $\operatorname{Gal}(K/E)$ is $E$: going $E \to H \to K^H$ returns $E$.
For a subgroup $H$, Artin's theorem says $\operatorname{Gal}(K/K^H) = H$ and $[K:K^H] = |H|$: going $H \to E \to \operatorname{Gal}(K/E)$
returns $H$. That proves 1 and the first half of 3; the second half is the tower law and Lagrange,
$[K^H : F] = [K:F]/[K:K^H] = |G|/|H|$. Point 2 is immediate from the definitions. For 4: $\tau$ fixes $\sigma(E)$ exactly when
$\sigma^{-1}\tau\sigma$ fixes $E$, that is, when $\tau \in \sigma H \sigma^{-1}$.

For 5: $E/F$ is normal exactly when $\sigma(E) = E$ for all $\sigma \in G$ (every root of a minimal polynomial over $F$ of an
element of $E$ is some $\sigma$ of it, since $G$ acts transitively on the roots of an irreducible factor, by the extension
lemma of 19.8). By 4, that says $\sigma H \sigma^{-1} = H$ for all $\sigma$: $H$ is normal. Then restriction
$\sigma \mapsto \sigma|_E$ is a homomorphism $G \to \operatorname{Gal}(E/F)$ with kernel $H$, onto because every automorphism of
$E$ extends to $K$ (19.8 again). The first isomorphism theorem ([Chapter 15](15-Homomorphisms-and-Quotients.md)) gives
$G/H \cong \operatorname{Gal}(E/F)$. $\square$

So questions about fields between $F$ and $K$, infinitely many possible elements and no obvious structure, become
questions about the subgroups of a finite group, which you can list.

### The worked example: $\mathbb{Q}(\sqrt[3]2, \omega)$

Let $f = x^3 - 2$, with roots

$$
r_1 = \sqrt[3]2, \qquad r_2 = \omega\sqrt[3]2, \qquad r_3 = \omega^2\sqrt[3]2, \qquad \omega = e^{2\pi i/3} = \tfrac{-1 + \sqrt{-3}}{2} .
$$

Its splitting field $K = \mathbb{Q}(\sqrt[3]2, \omega)$ has degree 6 (19.4), so $G = \operatorname{Gal}(K/\mathbb{Q})$ has order 6
and is a subgroup of $S_3$ (it permutes three roots). So $G = S_3$: **every** permutation of the roots is an automorphism.

**Naming the elements.** An automorphism is fixed by where it sends $\sqrt[3]2$ (to $r_1, r_2$ or $r_3$) and $\omega$ (to
$\omega$ or $\omega^2$, the roots of $x^2 + x + 1$). Let

- $\sigma$: $\sqrt[3]2 \mapsto \omega\sqrt[3]2$, $\omega \mapsto \omega$. Then $\sigma(r_2) = \omega \cdot \omega\sqrt[3]2 = r_3$ and
  $\sigma(r_3) = \omega^2 \cdot \omega\sqrt[3]2 = r_1$. So $\sigma = (r_1\, r_2\, r_3)$, of order 3.
- $\tau$: complex conjugation, $\sqrt[3]2 \mapsto \sqrt[3]2$, $\omega \mapsto \omega^2 = \bar\omega$. So $\tau = (r_2\, r_3)$, of
  order 2.

Then $G = \{1, \sigma, \sigma^2, \tau, \sigma\tau, \tau\sigma\}$, where (applying the right-hand map first) $\sigma\tau = (r_1\, r_2)$
and $\tau\sigma = (r_1\, r_3)$. Check one: $\sigma\tau(r_3) = \sigma(r_2) = r_3$, so $\sigma\tau$ fixes $r_3$.

**The subgroups** of $S_3$: $\{1\}$; three of order 2, $\langle\tau\rangle$, $\langle\tau\sigma\rangle$, $\langle\sigma\tau\rangle$;
one of order 3, $\langle\sigma\rangle = A_3$; and $G$.

**The fields.** A transposition fixing root $r_k$ fixes the field $\mathbb{Q}(r_k)$, which has degree 3 $= [G : \text{order } 2]$,
so by the fundamental theorem that *is* its fixed field. And $\sigma$ fixes $\omega$, so the fixed field of $A_3$ contains
$\mathbb{Q}(\omega)$, which has degree $2 = [G : A_3]$; so it equals $\mathbb{Q}(\omega) = \mathbb{Q}(\sqrt{-3})$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 240" role="img" aria-label="The intermediate fields of Q(cube root of 2, omega): K at top; Q(cube root 2), Q(omega cube root 2), Q(omega squared cube root 2) of degree 3 and Q(omega) of degree 2 in the middle; Q at the bottom.">
  <g stroke="currentColor" stroke-width="1.3">
    <line x1="170" y1="44" x2="45" y2="104"/><line x1="170" y1="44" x2="128" y2="104"/>
    <line x1="170" y1="44" x2="212" y2="104"/><line x1="170" y1="44" x2="295" y2="104"/>
    <line x1="170" y1="196" x2="45" y2="134"/><line x1="170" y1="196" x2="128" y2="134"/>
    <line x1="170" y1="196" x2="212" y2="134"/><line x1="170" y1="196" x2="295" y2="134"/>
  </g>
  <g stroke="currentColor" stroke-width="1">
    <rect x="115" y="14" width="110" height="30" rx="6" fill="#eea66f"/>
    <rect x="8" y="104" width="74" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="91" y="104" width="74" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="175" y="104" width="74" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="258" y="104" width="74" height="30" rx="6" fill="#7ccf9a"/>
    <rect x="140" y="196" width="60" height="30" rx="6" fill="#eea66f"/>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="170" y="34">K = ℚ(∛2, ω)</text>
    <text x="45" y="124">ℚ(∛2)</text>
    <text x="128" y="124">ℚ(ω∛2)</text>
    <text x="212" y="124">ℚ(ω²∛2)</text>
    <text x="295" y="124">ℚ(ω)</text>
    <text x="170" y="216">ℚ</text>
  </g>
  <g fill="currentColor" font-size="11">
    <text x="236" y="70">3</text><text x="98" y="70">2</text>
    <text x="236" y="176">2</text><text x="98" y="176">3</text>
  </g>
</svg>
</div>

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 240" role="img" aria-label="The subgroups of S3, upside down to match: the trivial group at top; the three subgroups of order 2 generated by tau, tau sigma and sigma tau, and A3 generated by sigma, in the middle; S3 at the bottom.">
  <g stroke="currentColor" stroke-width="1.3">
    <line x1="170" y1="44" x2="45" y2="104"/><line x1="170" y1="44" x2="128" y2="104"/>
    <line x1="170" y1="44" x2="212" y2="104"/><line x1="170" y1="44" x2="295" y2="104"/>
    <line x1="170" y1="196" x2="45" y2="134"/><line x1="170" y1="196" x2="128" y2="134"/>
    <line x1="170" y1="196" x2="212" y2="134"/><line x1="170" y1="196" x2="295" y2="134"/>
  </g>
  <g stroke="currentColor" stroke-width="1">
    <rect x="130" y="14" width="80" height="30" rx="6" fill="#eea66f"/>
    <rect x="8" y="104" width="74" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="91" y="104" width="74" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="175" y="104" width="74" height="30" rx="6" fill="#9cc9ea"/>
    <rect x="258" y="104" width="74" height="30" rx="6" fill="#7ccf9a"/>
    <rect x="135" y="196" width="70" height="30" rx="6" fill="#eea66f"/>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="170" y="34">{1}</text>
    <text x="45" y="124">⟨τ⟩</text>
    <text x="128" y="124">⟨τσ⟩</text>
    <text x="212" y="124">⟨στ⟩</text>
    <text x="295" y="124">⟨σ⟩ = A₃</text>
    <text x="170" y="216">S₃</text>
  </g>
</svg>
</div>

Read the two pictures together, box for box:

| subgroup $H$ | order | fixed field $K^H$ | $[K^H : \mathbb{Q}]$ | $H$ normal? | $K^H/\mathbb{Q}$ Galois? |
|---|---|---|---|---|---|
| $\{1\}$ | 1 | $K$ | 6 | yes | yes |
| $\langle\tau\rangle$ | 2 | $\mathbb{Q}(\sqrt[3]2)$ | 3 | no | no |
| $\langle\tau\sigma\rangle$ | 2 | $\mathbb{Q}(\omega\sqrt[3]2)$ | 3 | no | no |
| $\langle\sigma\tau\rangle$ | 2 | $\mathbb{Q}(\omega^2\sqrt[3]2)$ | 3 | no | no |
| $A_3$ | 3 | $\mathbb{Q}(\omega)$ | 2 | yes | yes, group $S_3/A_3 \cong \mathbb{Z}/2$ |
| $S_3$ | 6 | $\mathbb{Q}$ | 1 | yes | yes |

Everything the theorem promised is visible. The three subgroups of order 2 are conjugate, and the three cubic fields
are "conjugate" (each is $\sigma$ of another). The theorem also guarantees **there are no other intermediate fields**: a
fact that would be hard to prove by hand.

**The discriminant.** Let $\delta = (r_1 - r_2)(r_1 - r_3)(r_2 - r_3)$. An even permutation of the roots fixes $\delta$, and an odd
one changes its sign. So $\delta$ is fixed exactly by $G \cap A_3$, and $\delta^2 = \Delta$, the **discriminant**, is fixed by all
of $G$, so it is rational. For $x^3 + px + q$, $\Delta = -4p^3 - 27q^2$ ([Chapter 11](11-Cubics-and-Quartics.md)); for
$x^3 - 2$, $\Delta = -108$, and $\delta = \pm\sqrt{-108} = \pm 6\sqrt{-3}$, which indeed generates the fixed field
$\mathbb{Q}(\sqrt{-3})$ of $A_3$.

**Corollary 20.9 (cubics).** Let $f$ be an irreducible cubic over $\mathbb{Q}$ with discriminant $\Delta$. Its Galois group is
$A_3$ (cyclic of order 3) if $\Delta$ is the square of a rational number, and $S_3$ otherwise.

*Proof.* $G$ is a transitive subgroup of $S_3$ (it moves a root to every other root, since the stabilizer has index
$[\mathbb{Q}(r_1):\mathbb{Q}] = 3$), so $G = A_3$ or $S_3$. By the fundamental theorem, $\delta \in \mathbb{Q}$ exactly when $\delta$ is fixed
by all of $G$, exactly when $G \subseteq A_3$. $\blacksquare$

Example: $y^3 - 3y + 1$ has $\Delta = -4(-3)^3 - 27 = 81 = 9^2$, so its group is $A_3$. Its splitting field is generated by any one
root: all three roots, $2\cos 40^\circ$, $2\cos 80^\circ$ and $2\cos 160^\circ$, are polynomials in each other. This is the fact
promised in [Chapter 11](11-Cubics-and-Quartics.md).

## 20.5 Solvable groups

*Level: expert.* The second ingredient is a property of groups.

**Definition.** A group $G$ is **solvable** if it has a chain of subgroups

$$
\{1\} = G_0 \trianglelefteq G_1 \trianglelefteq \cdots \trianglelefteq G_m = G
$$

in which each $G_{i}$ is normal in $G_{i+1}$ and each quotient $G_{i+1}/G_i$ is **abelian**. (For a finite group one can
refine the chain until each quotient is cyclic of prime order.)

The name comes from equations, as you will see in 20.6. Examples:

- Every abelian group: $\{1\} \trianglelefteq G$.
- $S_3$: $\{1\} \trianglelefteq A_3 \trianglelefteq S_3$, quotients $\mathbb{Z}/3$ and $\mathbb{Z}/2$.
- $S_4$: $\{1\} \trianglelefteq V \trianglelefteq A_4 \trianglelefteq S_4$, where $V = \{1, (12)(34), (13)(24), (14)(23)\}$. The quotients
  have orders $4, 3, 2$, so are $V$ (abelian), $\mathbb{Z}/3$ and $\mathbb{Z}/2$. ($V$ is normal in $S_4$ because conjugation
  preserves cycle type, and $V$ contains all elements of type $(ab)(cd)$.) This chain is the hidden reason Ferrari's method
  works for quartics.
- Every group of order $p^k$ ($p$ prime) is solvable: it has a nontrivial centre ([Chapter 16](16-Group-Actions-and-Sylow.md)),
  and induction on the order does the rest.

**Theorem 20.10.** (a) Subgroups and quotients of solvable groups are solvable. (b) If $N \trianglelefteq G$ and both $N$ and
$G/N$ are solvable, so is $G$.

*Proof.* (a) Let $H \le G$ with $G$ solvable as above. Put $H_i = H \cap G_i$. Then $H_i \trianglelefteq H_{i+1}$, and the map
$H_{i+1} \to G_{i+1}/G_i$, $h \mapsto hG_i$, has kernel $H_i$, so $H_{i+1}/H_i$ is isomorphic to a subgroup of the abelian group
$G_{i+1}/G_i$, hence abelian. For a quotient $G/N$, the images $G_iN/N$ form a chain whose successive quotients are images of
$G_{i+1}/G_i$ (by the isomorphism theorems), hence abelian.

(b) Take a chain for $G/N$; its subgroups are $\bar G_i = G_i/N$ for subgroups $N \le G_i \le G$ (correspondence theorem), with
$G_{i+1}/G_i \cong \bar G_{i+1}/\bar G_i$ abelian (third isomorphism theorem). Put a chain for $N$ underneath. $\blacksquare$

**Theorem 20.11.** $A_5$ is simple (its only normal subgroups are $\{1\}$ and $A_5$). Hence $A_5$ and $S_5$ are not solvable,
and neither is $S_n$ for any $n \ge 5$.

*Proof.* A normal subgroup is a union of conjugacy classes, including the class $\{1\}$, and its order divides 60. So we need
the conjugacy classes of $A_5$. The even permutations of $\{1, \ldots, 5\}$ are: the identity (1), 3-cycles (20),
double transpositions like $(12)(34)$ (15) and 5-cycles (24), total 60. In $S_5$ each type is one class. In $A_5$ a class can
split in two: the $A_5$-class of $x$ has size $|A_5| / |C_{A_5}(x)|$, so it is the whole $S_5$-class exactly when the
centralizer $C_{S_5}(x)$ contains an odd permutation.

- 3-cycle $(123)$: commutes with the odd permutation $(45)$. Class of size 20.
- $(12)(34)$: commutes with the odd permutation $(12)$. Class of size 15.
- 5-cycle $(12345)$: its centralizer in $S_5$ has order $120/24 = 5$, so it is $\langle (12345) \rangle$, all even. The 24
  five-cycles split into **two classes of 12**.

So the class sizes are $1, 15, 20, 12, 12$. A union containing $1$ has size $1$, $13$, $16$, $21$, $25$, $28$, $33$, $36$,
$40$, $45$, $48$ or $60$ (all ways of adding $1$ to a sub-collection of $15, 20, 12, 12$). Of these only $1$ and $60$ divide 60.
So $A_5$ is simple. It is not abelian, so its only chain $\{1\} \trianglelefteq A_5$ has a non-abelian quotient: $A_5$ is not
solvable. By Theorem 20.10 (a), neither is any group containing it: $S_5$, and $S_n$ for $n \ge 5$. $\blacksquare$

$A_5$ is the rotation group of the icosahedron, and it is the smallest non-abelian simple group (order 60). That 5 is the
first degree without a formula is the same fact as 60 being the order of the smallest non-abelian simple group.

## 20.6 Why the general quintic has no formula

*Level: expert.*

**Definition.** An extension $L/F$ is **radical** if there is a chain $F = L_0 \subseteq L_1 \subseteq \cdots \subseteq L_m = L$
with $L_{i+1} = L_i(a_i)$ and $a_i^{n_i} \in L_i$ for some $n_i \ge 1$: each step adjoins an $n$-th root of something already
there. A polynomial $f \in F[x]$ is **solvable by radicals** if its splitting field is contained in some radical extension
of $F$. This is the precise form of "the roots can be written with $+, -, \times, \div$ and $\sqrt[n]{\ }$".

**Theorem 20.12 (Galois).** Let $F$ have characteristic 0. Then $f \in F[x]$ is solvable by radicals if and only if its
Galois group is solvable.

Two lemmas show why roots of unity and abelian groups appear.

**Lemma 20.13.** $F(\zeta_n)/F$, where $\zeta_n$ is a primitive $n$-th root of unity, is Galois with **abelian** group.

*Proof.* The roots of $x^n - 1$ are the powers of $\zeta_n$, so $F(\zeta_n)$ is its splitting field, Galois (separable in
characteristic 0). An automorphism sends $\zeta_n$ to another primitive root $\zeta_n^{k}$, and is determined by $k \bmod n$.
Two of them compose to $\zeta_n \mapsto \zeta_n^{kl}$, so $\sigma \mapsto k$ is an injective homomorphism into the abelian
group $(\mathbb{Z}/n\mathbb{Z})^\times$. $\blacksquare$

**Lemma 20.14.** If $F$ contains a primitive $n$-th root of unity $\zeta$ and $a^n = b \in F$, then $F(a)/F$ is Galois with
**cyclic** group.

*Proof.* The roots of $x^n - b$ are $a, \zeta a, \ldots, \zeta^{n-1}a$, all in $F(a)$: it is a splitting field, so Galois. An
automorphism $\sigma$ sends $a$ to $\zeta^{k}a$ for some $k$; the map $\sigma \mapsto \sigma(a)/a = \zeta^k$ is an injective
homomorphism into the cyclic group $\langle\zeta\rangle$ (check: $\sigma\tau(a) = \sigma(\zeta^l a) = \zeta^l \zeta^k a$, since
$\sigma$ fixes $\zeta \in F$). Subgroups of cyclic groups are cyclic. $\blacksquare$

*Proof of "solvable by radicals $\Rightarrow$ solvable group" (outline with the key steps).* Let the splitting field $K$ of $f$ lie
in a radical extension $L$ with chain as above. Two adjustments:

1. Make the top field Galois over $F$: replace $L$ by the field generated by all images $\sigma(a_i)$ under all embeddings. This
   is still radical (adjoin the conjugates of $a_1$, then of $a_2$, and so on; each is an $n_i$-th root of a conjugate of an
   earlier element) and now normal over $F$, hence Galois.
2. Put the roots of unity first: let $n = n_1 n_2 \cdots n_m$ and start the chain with $F \subseteq F(\zeta_n)$.

Now the chain $F \subseteq F(\zeta_n) = M_0 \subseteq M_1 \subseteq \cdots \subseteq M_r = M$ has each step Galois with abelian group:
the first by Lemma 20.13, the others by Lemma 20.14 (each $M_j$ contains the needed roots of unity). By the fundamental
theorem, the subgroups $H_j = \operatorname{Gal}(M/M_j)$ form a chain $\{1\} = H_r \le \cdots \le H_0 \le \operatorname{Gal}(M/F)$, each
normal in the next with quotient $\operatorname{Gal}(M_{j}/M_{j-1})$ abelian (part 5 of the theorem). So $\operatorname{Gal}(M/F)$ is
solvable. Finally $F \subseteq K \subseteq M$ with $K/F$ Galois, so $\operatorname{Gal}(K/F) \cong \operatorname{Gal}(M/F)/\operatorname{Gal}(M/K)$
is a quotient of a solvable group, hence solvable (Theorem 20.10). $\square$

*The converse, in words.* If $\operatorname{Gal}(K/F)$ is solvable, refine its chain so each step is cyclic of prime order $p$. Adjoin
the needed roots of unity first (that is radical: $\zeta_p$ is a $p$-th root of $1$). Then each cyclic step of degree $p$ is
generated by a $p$-th root, and the element to take the root of is exactly a **Lagrange resolvent**
$\alpha + \zeta^{-1}\sigma(\alpha) + \cdots + \zeta^{-(p-1)}\sigma^{p-1}(\alpha)$, whose $p$-th power is fixed by $\sigma$
([Chapter 11](11-Cubics-and-Quartics.md), 11.8). This is how Cardano's and Ferrari's formulas look from above. The details are
in Stewart, *Galois Theory*, chapter 15. $\square$

### The general polynomial

Let $t_1, \ldots, t_n$ be independent variables and consider the **general polynomial**

$$
f(x) = (x - t_1)(x - t_2)\cdots(x - t_n) = x^n - s_1 x^{n-1} + s_2 x^{n-2} - \cdots + (-1)^n s_n,
$$

where $s_1, \ldots, s_n$ are the elementary symmetric polynomials ([Chapter 10](10-Roots-and-Coefficients.md)). A "formula for
degree $n$" would be a radical expression for the $t_i$ in terms of the coefficients, that is, over the field
$F = \mathbb{Q}(s_1, \ldots, s_n)$. The splitting field is $K = \mathbb{Q}(t_1, \ldots, t_n)$, and **every** permutation of the
$t_i$ is an automorphism of $K$ fixing $F$ (the variables have no relations to preserve). So $S_n \le \operatorname{Gal}(K/F)$, and
since the group embeds in $S_n$, $\operatorname{Gal}(K/F) = S_n$. (Its fixed field is $F$, which is the fundamental theorem on
symmetric polynomials of Chapter 10 in field form.)

**Corollary 20.15 (Abel-Ruffini).** For $n \ge 5$ there is no formula in radicals for the roots of the general polynomial of
degree $n$, because $S_n$ is not solvable. For $n \le 4$, $S_n$ is solvable, and the formulas exist.

### The casus irreducibilis

[Chapter 11](11-Cubics-and-Quartics.md) noted that Cardano's formula, for a cubic with three real roots, passes through
complex numbers even when all three roots are real, and claimed this cannot be avoided. Here is the proof.

**Theorem 20.16.** Let $f \in \mathbb{Q}[x]$ be an irreducible cubic with three real roots. Then no root of $f$ lies in a
radical extension of $\mathbb{Q}$ contained in $\mathbb{R}$.

*Proof.* We need one fact: **if $p$ is prime, $b \in E$, and $x^p - b$ has no root in the field $E$, then it is irreducible
over $E$.** (If $x^p - b = gh$ with $\deg g = k$, $0 < k < p$, the constant term of $g$ is $\pm$ a product of $k$ roots
$\zeta^j a$, so $d = \pm(\text{that}) = \zeta^{m} a^k$ lies in $E$ for some $m$, and $d^p = b^k$. Choose integers $u, v$ with
$uk + vp = 1$. Then $(d^u b^v)^p = b^{uk + vp} = b$, a root in $E$.)

Suppose a real radical tower $\mathbb{Q} = L_0 \subseteq \cdots \subseteq L_m \subseteq \mathbb{R}$ contains a root of $f$. We
may assume each step adjoins a $p$-th root with $p$ prime (split $\sqrt[nm]{\ }$ into steps), and we may put
$\sqrt{\Delta}$ in at the start: $\Delta > 0$ because the roots are real ($\Delta = \delta^2$ with $\delta$ real), so $\sqrt\Delta$ is real.
Let $L_j$ be the first field containing a root of $f$. Then $f$ has no root in $L_{j-1}$, so it is irreducible there (a
reducible cubic has a linear factor), and $L_j = L_{j-1}(a)$ with $a^p = b \in L_{j-1}$, $a \notin L_{j-1}$. The only $p$-th roots of $b$ that a real field can
contain are $\pm a$, so $x^p - b$ has no root in $L_{j-1}$, and by the fact
$[L_j : L_{j-1}] = p$. Since $L_j$ contains a root $r$ of the irreducible cubic, $3 \mid p$, so $p = 3$ and
$L_j = L_{j-1}(r)$.

Over $L_{j-1}$, which contains $\sqrt\Delta$, Corollary 20.9 (which works over any field of characteristic 0) says $f$ has Galois
group $A_3$: the splitting field is $L_{j-1}(r) = L_j$, so $L_j/L_{j-1}$ is Galois, hence normal. But $L_j$ contains the root $a$
of the irreducible $x^3 - b$, so normality forces it to contain all three roots $a, \omega a, \omega^2 a$, and $\omega a$ is not
real. This contradicts $L_j \subseteq \mathbb{R}$. $\blacksquare$

So for three real roots, any radical formula must pass through non-real numbers. This is the theorem that made complex
numbers unavoidable, and it explains why the trigonometric method of 11.5 is needed to write the roots with real
operations.

## 20.7 A quintic you cannot solve: $x^5 - 4x + 2$

*Level: expert.* Abel-Ruffini is about the *general* quintic, with variable coefficients. Is there a specific quintic with
integer coefficients whose roots cannot be written with radicals? Yes, and Galois theory shows it in a few lines.

**Theorem 20.17.** Let $p$ be prime and $f \in \mathbb{Q}[x]$ irreducible of degree $p$ with exactly two non-real roots. Then
$\operatorname{Gal}(f) = S_p$.

*Proof.* Let $G$ be the Galois group, a subgroup of $S_p$ acting on the roots.

1. **$G$ contains a $p$-cycle.** If $r$ is a root, $[\mathbb{Q}(r):\mathbb{Q}] = p$ divides $[K:\mathbb{Q}] = |G|$. By Cauchy's
   theorem ([Chapter 16](16-Group-Actions-and-Sylow.md)), $G$ has an element of order $p$. In $S_p$ the only elements of
   order $p$ are $p$-cycles (the order of a permutation is the lcm of its cycle lengths, all at most $p$).
2. **$G$ contains a transposition.** Complex conjugation maps $K$ to itself (it permutes the roots) and swaps the two
   non-real roots while fixing the $p - 2$ real ones.
3. **A $p$-cycle and a transposition generate $S_p$.** Number the roots so the transposition is $(1\ a)$. Some power of the
   $p$-cycle sends $1$ to $a$, and it is again a $p$-cycle because $p$ is prime; renumber so it is $(1\ 2\ \cdots\ p)$ and the
   transposition is $(1\ 2)$. Conjugating $(1\ 2)$ by the $p$-cycle gives $(2\ 3)$, then $(3\ 4)$, ..., $(p-1\ \ p)$. Adjacent
   transpositions generate $S_p$ (any permutation can be sorted by swapping neighbours, as in bubble sort). $\blacksquare$

Now take $f(x) = x^5 - 4x + 2$.

- **Irreducible:** Eisenstein at $p = 2$ ([Chapter 18](18-Factorization-in-Rings.md)).
- **At least three real roots:** $f(-2) = -22$, $f(-1) = 5$, $f(0) = 2$, $f(1) = -1$, $f(2) = 26$. Three sign changes, so roots
  in $(-2, -1)$, $(0, 1)$ and $(1, 2)$.
- **At most three real roots:** $f'(x) = 5x^4 - 4$ has exactly two real zeros, $\pm(4/5)^{1/4} \approx \pm 0.946$. Between two
  real roots of $f$ lies a zero of $f'$ (Rolle's theorem), so $f$ has at most three real roots.

So $f$ has three real roots and two complex conjugate ones, and its Galois group is $S_5$, which is not solvable. **The roots of
$x^5 - 4x + 2$ cannot be expressed in radicals.** They exist, of course, and numerically they are

$$
-1.5185, \qquad 0.5085, \qquad 1.2436, \qquad -0.1168 \pm 1.4384\,i .
$$

Check: the five roots sum to $0$ (the $x^4$ coefficient), as Vieta says: $-1.5185 + 0.5085 + 1.2436 - 0.2336 = 0.0000$.

**Try it in Python** (with sympy, a free library for symbolic algebra; `pip install sympy`):

```python
from sympy import symbols, Poly
x = symbols("x")
for f in (x**5 - 4*x + 2, x**5 - 2, x**5 - 5*x + 12):
    print(f, Poly(f).galois_group(by_name=True)[0].name)
# x**5 - 4*x + 2  S5    not solvable
# x**5 - 2        M20   order 20, solvable: x = 2**(1/5) times fifth roots of unity
# x**5 - 5*x + 12 D5    order 10, solvable: its roots do have a radical formula
```

So "quintic" does not mean "unsolvable": some quintics have solvable groups and radical solutions. Most do not: a
"random" quintic with integer coefficients has group $S_5$ (a consequence of Hilbert's irreducibility theorem). Being
unsolvable by radicals says nothing about computing the roots; Newton's method
([Chapter 12](12-The-Fundamental-Theorem-of-Algebra.md)) finds them to any accuracy.

## 20.8 Constructible regular polygons and Gauss's 17-gon

*Level: expert.* In 1796, at 18, Carl Friedrich Gauss found that the regular 17-sided polygon can be constructed with
straightedge and compass, the first new constructible polygon since Euclid's list (3, 4, 5, 15 and their doublings). The
discovery is the first entry in his mathematical diary, and the theory appeared in the last section of his
*Disquisitiones Arithmeticae* (1801). Galois theory explains it in a page.

**Theorem 20.18 (Gauss-Wantzel).** The regular $n$-gon is constructible if and only if $\varphi(n)$ is a power of 2, that is,
if and only if

$$
n = 2^k p_1 p_2 \cdots p_r
$$

where the $p_i$ are **distinct Fermat primes**, primes of the form $2^{2^m} + 1$.

*Proof.* Constructing the $n$-gon is constructing $\cos\tfrac{2\pi}{n}$, or equivalently (one more square root)
$\zeta = e^{2\pi i/n}$. The field $\mathbb{Q}(\zeta)$ is Galois over $\mathbb{Q}$ with group $(\mathbb{Z}/n\mathbb{Z})^\times$ of
order $\varphi(n)$. (Lemma 20.13 gives an injection; that it is onto is the irreducibility of the cyclotomic polynomial
$\Phi_n$, proved in Chapter 18 for prime $n$ and true for all $n$; see Dummit and Foote, section 13.6.)

*Only if.* If $\zeta$ is constructible, $[\mathbb{Q}(\zeta):\mathbb{Q}] = \varphi(n)$ is a power of 2 (Theorem 19.5).

*If.* If $|G| = \varphi(n) = 2^s$, then $G$, a 2-group, has a chain of subgroups $\{1\} = H_s < H_{s-1} < \cdots < H_0 = G$ with each
of index 2 in the next (for an abelian group of order $2^s$ this is easy; for any 2-group it follows from Chapter 16). By the
fundamental theorem the fixed fields form a tower $\mathbb{Q} = E_0 \subset E_1 \subset \cdots \subset E_s = \mathbb{Q}(\zeta)$ with every
step of degree 2. A degree-2 extension is obtained by adjoining a square root (complete the square), so $\zeta$ is reached by
square roots: constructible (Theorem 19.4).

*The arithmetic.* $\varphi(p^a) = p^{a-1}(p - 1)$ is multiplicative over coprime factors. For it to be a power of 2, each odd
prime must appear once ($a = 1$) with $p - 1$ a power of 2. And if $2^j + 1$ is prime then $j$ is a power of 2: if $j = cb$ with
$b > 1$ odd, then $2^c + 1$ divides $2^{cb} + 1$ (since $y + 1$ divides $y^b + 1$ for odd $b$). $\blacksquare$

**Fermat primes.** $F_m = 2^{2^m} + 1$ gives $3, 5, 17, 257, 65537$ for $m = 0, \ldots, 4$, all prime. Fermat believed all were
prime, but Euler found in 1732 that $F_5 = 4294967297 = 641 \times 6700417$. Every Fermat number from $F_5$ to $F_{32}$ is
known to be composite, and no other Fermat prime is known. So the known constructible polygons with an odd number of sides
are the $2^{5} - 1 = 31$ products of distinct members of $\{3, 5, 17, 257, 65537\}$.

### The 17-gon, step by step

$\mathbb{Q}(\zeta)$, $\zeta = e^{2\pi i/17}$, has Galois group $(\mathbb{Z}/17)^\times$, cyclic of order 16. A generator is 3: its
powers mod 17 are

$$
3^0, 3^1, \ldots, 3^{15} \equiv 1, 3, 9, 10, 13, 5, 15, 11, 16, 14, 8, 7, 4, 12, 2, 6 .
$$

The chain of subgroups of orders $16, 8, 4, 2, 1$ gives a tower of four quadratic steps. Gauss's idea was to add up the roots
over each subgroup's orbits, now called **Gaussian periods**. Write $\zeta^{(k)}$ for $\zeta^{3^k}$.

**Step 1 (degree 2).** Split the 16 roots into the even and odd positions in the list:

$$
\eta_0 = \sum_{k \text{ even}} \zeta^{(k)}, \qquad \eta_1 = \sum_{k \text{ odd}} \zeta^{(k)} .
$$

Since all sixteen roots sum to $-1$, $\eta_0 + \eta_1 = -1$, and a calculation (multiply out and count) gives
$\eta_0 \eta_1 = -4$. So they are the roots of $y^2 + y - 4 = 0$:
$\eta_0 = \tfrac{-1 + \sqrt{17}}{2} \approx 1.5616$ and $\eta_1 = \tfrac{-1 - \sqrt{17}}{2} \approx -2.5616$.

**Step 2 (degree 2 over that).** Split again by $k \bmod 4$: $\eta_0 = \mu_0 + \mu_2$ and $\eta_1 = \mu_1 + \mu_3$, where $\mu_j$ sums
$\zeta^{(k)}$ over $k \equiv j \pmod 4$. Then $\mu_0\mu_2 = -1$ and $\mu_1\mu_3 = -1$, so $\mu_0$, $\mu_2$ are the roots of
$y^2 - \eta_0 y - 1$ and $\mu_1$, $\mu_3$ of $y^2 - \eta_1 y - 1$. Numerically $\mu_0 \approx 2.0495$ and $\mu_1 \approx 0.3442$.

**Step 3 (degree 2 again).** $\mu_0 = \zeta^{1} + \zeta^{16} + \zeta^{13} + \zeta^{4} = \nu_0 + \nu_4$ with
$\nu_0 = \zeta + \zeta^{16} = 2\cos\tfrac{2\pi}{17}$ and $\nu_4 = \zeta^{4} + \zeta^{13} = 2\cos\tfrac{8\pi}{17}$. Their product
works out to $\mu_1$. So $2\cos\tfrac{2\pi}{17}$ is the larger root of

$$
y^2 - \mu_0 y + \mu_1 = 0, \qquad 2\cos\frac{2\pi}{17} = \frac{\mu_0 + \sqrt{\mu_0^2 - 4\mu_1}}{2} \approx 1.8649 .
$$

**Step 4.** $\zeta$ itself is a root of $z^2 - \nu_0 z + 1$, one more square root.

Unwinding the square roots gives Gauss's formula,

$$
16\cos\frac{2\pi}{17} = -1 + \sqrt{17} + \sqrt{34 - 2\sqrt{17}} + 2\sqrt{17 + 3\sqrt{17} - \sqrt{34 - 2\sqrt{17}} - 2\sqrt{34 + 2\sqrt{17}}} .
$$

Check: both sides equal $14.9195556\ldots$ ($\cos\tfrac{2\pi}{17} \approx 0.9324722$). Only square roots appear, so a
straightedge and compass can build it. Gauss proved the "if" direction; he stated the "only if" but did not publish a proof,
and Wantzel supplied it in 1837 with the degree argument.

**Try it in Python** (standard library only), checking the periods numerically:

```python
import cmath, math
z = cmath.exp(2j * math.pi / 17)
pw = [pow(3, k, 17) for k in range(16)]                 # 1, 3, 9, 10, 13, ...
period = lambda r, m: sum(z ** pw[k] for k in range(r, 16, m)).real
eta0, eta1 = period(0, 2), period(1, 2)
mu0, mu1 = period(0, 4), period(1, 4)
print(round(eta0 + eta1, 9), round(eta0 * eta1, 9))    # -1.0 -4.0
print((mu0 + math.sqrt(mu0**2 - 4*mu1)) / 2, 2 * math.cos(2 * math.pi / 17))   # both 1.8649444588...
```

<figure class="play" data-play="ngon"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Which regular polygons can be constructed: 2<sup>k</sup> times different Fermat primes, as Gauss found and Wantzel proved.</figcaption></figure>

## Check yourself

??? question "1. List the four elements of $\operatorname{Gal}(\mathbb{Q}(\sqrt2, \sqrt3)/\mathbb{Q})$ and the fixed field of each subgroup of order 2."

    The automorphisms are $\mathrm{id}$; $\alpha$: $\sqrt2 \mapsto -\sqrt2$, $\sqrt3 \mapsto \sqrt3$; $\beta$: $\sqrt2 \mapsto \sqrt2$,
    $\sqrt3 \mapsto -\sqrt3$; and $\alpha\beta$: both signs change. $\langle\alpha\rangle$ fixes $\mathbb{Q}(\sqrt3)$, $\langle\beta\rangle$
    fixes $\mathbb{Q}(\sqrt2)$, and $\langle\alpha\beta\rangle$ fixes $\sqrt2\sqrt3 = \sqrt6$, so $\mathbb{Q}(\sqrt6)$. Three subgroups of
    order 2, three quadratic subfields, as in the picture of 19.1, and no others.

??? question "2. Why is $\mathbb{Q}(\sqrt[4]2)/\mathbb{Q}$ not Galois? Which condition of Theorem 20.5 fails?"

    $x^4 - 2$ is irreducible (Eisenstein) with roots $\pm\sqrt[4]2$, $\pm i\sqrt[4]2$; the field is real, so it contains only two of
    them. Not normal. Its automorphisms send $\sqrt[4]2$ to $\pm\sqrt[4]2$ only, so $|\operatorname{Aut}| = 2 < 4$, and the fixed field of
    $\operatorname{Aut}$ is $\mathbb{Q}(\sqrt2) \ne \mathbb{Q}$. Conditions 2, 3 and 4 all fail.

??? question "3. Describe $\operatorname{Gal}(\mathbb{F}_{16}/\mathbb{F}_2)$ and the fields between $\mathbb{F}_2$ and $\mathbb{F}_{16}$."

    Cyclic of order 4, generated by Frobenius $\phi(a) = a^2$. Its subgroups are $\{1\}$, $\langle\phi^2\rangle$ (order 2) and
    the whole group. Fixed fields: $\mathbb{F}_{16}$, the fixed field of $\phi^2$, $\{a : a^4 = a\} = \mathbb{F}_4$, and $\mathbb{F}_2$.
    So the only intermediate field is $\mathbb{F}_4$, matching "$\mathbb{F}_{2^d} \subseteq \mathbb{F}_{2^4}$ iff $d \mid 4$".

??? question "4. Find the Galois groups of $x^3 - 3x + 1$, $x^3 - 3x - 1$ and $x^3 - 4x + 1$."

    Discriminant of $x^3 + px + q$ is $-4p^3 - 27q^2$. For $x^3 - 3x \pm 1$: $108 - 27 = 81 = 9^2$, a square, and both are
    irreducible (no roots $\pm 1$), so the group is $A_3$. For $x^3 - 4x + 1$: irreducible ($\pm 1$ give $-2$ and $4$), and
    $\Delta = 256 - 27 = 229$, not a square (229 is prime), so the group is $S_3$.

??? question "5. The splitting field of $x^4 - 2$ has degree 8 and Galois group $D_4$. How many fields lie strictly between $\mathbb{Q}$ and $K$?"

    $D_4$ (symmetries of a square, order 8) has 10 subgroups: the trivial one, five of order 2 (four reflections and the
    half-turn), three of order 4 (the rotations, and two Klein four-groups), and $D_4$. Excluding $\{1\}$ and $D_4$, which
    correspond to $K$ and $\mathbb{Q}$, there are 8 intermediate fields: five of degree 4 over $\mathbb{Q}$ and three of degree 2
    ($\mathbb{Q}(i)$, $\mathbb{Q}(\sqrt2)$, $\mathbb{Q}(i\sqrt2)$).

??? question "6. Show that $x^5 - 6x + 3$ is not solvable by radicals."

    Irreducible by Eisenstein at 3. $f(-2) = -17$, $f(-1) = 8$, $f(0) = 3$, $f(1) = -2$, $f(2) = 23$: three real roots, and
    $f' = 5x^4 - 6$ has two real zeros, so at most three. Degree 5 prime, two non-real roots: Theorem 20.17 gives $S_5$, not solvable.

??? question "7. Write down a chain showing $S_4$ is solvable, and say why a quartic is solvable by radicals."

    $\{1\} \trianglelefteq V \trianglelefteq A_4 \trianglelefteq S_4$ with quotients $V$, $\mathbb{Z}/3$, $\mathbb{Z}/2$, all abelian. Any
    quartic's Galois group is a subgroup of $S_4$, hence solvable (Theorem 20.10), so by Galois's theorem it is solvable by radicals.
    (The fixed field of $V$ is generated by the roots of Ferrari's resolvent cubic.)

??? question "8. Which regular polygons with 51, 45, 60 and 85 sides are constructible?"

    $51 = 3 \cdot 17$: yes (distinct Fermat primes). $45 = 3^2 \cdot 5$: no ($3$ twice; $\varphi(45) = 24$). $60 = 4 \cdot 3 \cdot 5$:
    yes ($\varphi(60) = 16$). $85 = 5 \cdot 17$: yes ($\varphi(85) = 64$).

??? question "9. Can an irreducible quartic over $\mathbb{Q}$ have Galois group $\mathbb{Z}/3$?"

    No. If $r$ is a root, $[\mathbb{Q}(r):\mathbb{Q}] = 4$ divides $|G|$, and $4 \nmid 3$.

??? question "10. Let $\zeta = e^{2\pi i/7}$. Use the fundamental theorem to find the degree of $\mathbb{Q}(\cos\frac{2\pi}{7})$ over $\mathbb{Q}$ and the number of fields between $\mathbb{Q}$ and $\mathbb{Q}(\zeta)$."

    $G = (\mathbb{Z}/7)^\times$ is cyclic of order 6. Complex conjugation is $\zeta \mapsto \zeta^{-1} = \zeta^6$, of order 2; its fixed
    field is the real subfield $\mathbb{Q}(\zeta + \zeta^{-1}) = \mathbb{Q}(\cos\tfrac{2\pi}{7})$, of degree $6/2 = 3$ (matching the cubic of
    19.3). A cyclic group of order 6 has one subgroup of each order $1, 2, 3, 6$, so there are exactly two intermediate fields:
    the cubic real field and a quadratic field, which is $\mathbb{Q}(\sqrt{-7})$.

??? question "11. Prove that every extension of degree 2 in characteristic 0 is Galois."

    $K = F(\alpha)$ for any $\alpha \in K \setminus F$, with minimal polynomial $x^2 + bx + c$. The other root is $-b - \alpha \in K$
    (sum of roots $= -b$), so $K$ is the splitting field of a separable quadratic. By Theorem 20.5 it is Galois, with group of
    order 2.

??? question "12. Show that the regular pentagon's construction matches the subgroup chain of $(\mathbb{Z}/5)^\times$."

    $(\mathbb{Z}/5)^\times = \{1, 2, 4, 3\}$ is cyclic of order 4, generated by 2, with subgroup $\{1, 4\}$ of order 2. The fixed field
    of $\{1, 4\}$ (that is, $\zeta \mapsto \zeta^{\pm 1}$) contains $\zeta + \zeta^4 = 2\cos 72^\circ = \tfrac{-1 + \sqrt5}{2}$, the quadratic
    field $\mathbb{Q}(\sqrt5)$. Then $\zeta$ is a root of $z^2 - (2\cos 72^\circ)z + 1$ over it. Two square roots, $\varphi(5) = 4 = 2^2$.

## What you learned

- Automorphisms of a field fixing $F$ permute the roots of every polynomial over $F$; the Galois group of a polynomial is
  a group of permutations of its roots, of order at most the degree of the splitting field.
- An extension is Galois when it is normal and separable, equivalently a splitting field of a separable polynomial,
  equivalently has as many automorphisms as its degree, equivalently has fixed field exactly $F$.
- The fundamental theorem matches subgroups with intermediate fields, reversing inclusion, turning indices into degrees, and
  normal subgroups into Galois subextensions. For $x^3 - 2$, $S_3$'s six subgroups give exactly six fields.
- A polynomial is solvable by radicals exactly when its Galois group is solvable. $A_5$ is simple, so $S_5$ is not solvable,
  so there is no quintic formula, and $x^5 - 4x + 2$ (group $S_5$) has no radical solution.
- For a cubic with three real roots, a radical formula must use non-real numbers.
- The regular $n$-gon is constructible exactly when $\varphi(n)$ is a power of 2; Gauss's 17-gon comes from the chain
  $16 \supset 8 \supset 4 \supset 2 \supset 1$ in the cyclic Galois group.

**Next:** [Chapter 21](21-Modules-and-Representations.md), linear algebra over rings and groups acting on vector spaces.

## Further reading

- E. Artin, *Galois Theory*, Notre Dame Mathematical Lectures 2, 1942 (the modern approach, short and classic).
- I. Stewart, *Galois Theory*, 4th ed., 2015 (history and mathematics together; radicals in full detail).
- D. S. Dummit and R. M. Foote, *Abstract Algebra*, 3rd ed., 2004, chapter 14.
- J.-P. Tignol, *Galois' Theory of Algebraic Equations*, 2nd ed., 2016 (the history from Lagrange to Galois, with the original
  methods).
- P. M. Neumann, *The Mathematical Writings of Évariste Galois*, 2011 (the texts, translated, with the true story of their
  survival).
- C. F. Gauss, *Disquisitiones Arithmeticae*, 1801, section 7 (cyclotomy and the 17-gon).
- On this site: [Rotational symmetry](../../topics/geometry/level-4/06-rotational-symmetry.md) and
  [Compass and straightedge](../../topics/geometry/level-5/01-compass-straightedge.md) (Topics); finite fields and their
  Frobenius in the cryptography book, <https://cryptography.akadian.ca/book/>.
