# 15. Homomorphisms and quotients

*Reading a clock throws information away: 3 o'clock and 15 o'clock look the same. Yet the arithmetic of the clock still
works, because forgetting "which day" respects addition. This chapter studies maps between groups that respect the
operation, called homomorphisms. You will see what they keep and what they forget, learn when two groups are "the same
group in different clothes", build new groups by dividing a group by a normal subgroup, and prove the isomorphism
theorems that tie these ideas together. At the end you will be able to list every finite abelian group.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a homomorphism is, with examples from numbers, matrices, permutations and clocks
    - kernels and images, and why a homomorphism is one-to-one exactly when its kernel is trivial
    - isomorphism: when two groups are the same, and how to prove two groups are different
    - normal subgroups, and how they let you build the quotient group $G/N$
    - the first, second and third isomorphism theorems, with proofs
    - direct products, the Chinese remainder theorem as a statement about groups, and the classification of finite
      abelian groups

    **You need:** [Chapter 14](14-Subgroups-Cosets-and-Lagrange.md) (subgroups, cosets, Lagrange) and
    [Chapter 13](13-Groups.md). For the Chinese remainder theorem the gentler version is
    [The Chinese remainder theorem](../../topics/number-theory/level-6/05-chinese-remainder.md), and for clock
    arithmetic [Clocks of any size](../../topics/number-theory/level-5/02-clocks-any-size.md).

    **Levels:** 15.1 to 15.3 are intermediate to advanced; 15.4 to 15.7 are advanced; 15.8 is expert (statement and
    idea of proof).

## 15.1 Maps that respect structure

Here are four familiar facts.

- $e^{x+y} = e^x e^y$.
- $\det(AB) = \det(A)\det(B)$ for square matrices.
- $(a + b) \bmod n$ can be computed as $(a \bmod n) + (b \bmod n)$, reduced again mod $n$.
- The sign of a product of permutations is the product of their signs.

They have the same shape. In each, a map $\varphi$ goes from one group to another, and doing the operation first and
then applying $\varphi$ gives the same answer as applying $\varphi$ first and then doing the operation:

$$
\varphi(ab) = \varphi(a)\varphi(b).
$$

**Definition.** Let $G$ and $H$ be groups. A **homomorphism** is a function $\varphi : G \to H$ with
$\varphi(ab) = \varphi(a)\varphi(b)$ for all $a, b \in G$. (The product on the left is in $G$, the one on the right is
in $H$.) The word comes from Greek *homos*, "same", and *morphe*, "shape".

So in the four facts:

| map | from | to |
|---|---|---|
| $x \mapsto e^x$ | $(\mathbb{R}, +)$ | $(\mathbb{R}_{>0}, \times)$ |
| $A \mapsto \det A$ | $GL_n(\mathbb{R})$ | $(\mathbb{R}^{\times}, \times)$ |
| $a \mapsto a \bmod n$ | $(\mathbb{Z}, +)$ | $(\mathbb{Z}_n, +)$ |
| $\sigma \mapsto \operatorname{sgn}\sigma$ | $S_n$ | $(\{1, -1\}, \times)$ |

Notice how the first one turns addition into multiplication. A homomorphism need not use the same kind of operation on
both sides; it only has to translate one into the other faithfully.

### What a homomorphism automatically keeps

**Theorem.** If $\varphi : G \to H$ is a homomorphism, then

1. $\varphi(e_G) = e_H$;
2. $\varphi(a^{-1}) = \varphi(a)^{-1}$;
3. $\varphi(a^n) = \varphi(a)^n$ for every integer $n$;
4. if $a$ has finite order, then $|\varphi(a)|$ divides $|a|$.

*Proof.* (1) $\varphi(e) = \varphi(ee) = \varphi(e)\varphi(e)$; multiply both sides by $\varphi(e)^{-1}$ to get
$e_H = \varphi(e)$. (2) $\varphi(a)\varphi(a^{-1}) = \varphi(aa^{-1}) = \varphi(e) = e_H$, so $\varphi(a^{-1})$ is the
inverse of $\varphi(a)$. (3) For $n \ge 1$ by induction, $\varphi(a^{n+1}) = \varphi(a^n)\varphi(a) =
\varphi(a)^n\varphi(a)$; for $n = 0$ it is (1); for negative $n$ combine with (2). (4) If $|a| = n$ then
$\varphi(a)^n = \varphi(a^n) = \varphi(e) = e_H$, so $|\varphi(a)|$ divides $n$ by Rule 1 of §14.5. $\square$

Fact 4 is a quick way to rule maps out. Is there a homomorphism from $\mathbb{Z}_3$ onto $\mathbb{Z}_2$? Every element
of $\mathbb{Z}_3$ has order 1 or 3, so its image has order dividing 3 inside $\mathbb{Z}_2$, where orders are 1 or 2.
So every image is 0: the only homomorphism is the zero map.

### Homomorphisms out of a cyclic group

If $G = \langle g \rangle$ is cyclic, a homomorphism $\varphi$ is decided by the single value $\varphi(g)$, because
$\varphi(g^k) = \varphi(g)^k$. Which values are allowed?

- From $\mathbb{Z}$: any value. For each $h \in H$ the map $k \mapsto h^k$ is a homomorphism, since
  $h^{j+k} = h^jh^k$.
- From $\mathbb{Z}_n$: $\varphi(1) = h$ is allowed exactly when $h^n = e$. (Necessary by Fact 4; sufficient because then
  $k \mapsto h^k$ does not depend on which representative of $k$ mod $n$ you use.)

**Example.** The homomorphisms $\mathbb{Z}_{12} \to \mathbb{Z}_{8}$: we need $12h \equiv 0 \pmod 8$, i.e.
$h \in \{0, 2, 4, 6\}$. Four homomorphisms, and $4 = \gcd(12, 8)$. In general there are $\gcd(m, n)$ homomorphisms
$\mathbb{Z}_m \to \mathbb{Z}_n$ (exercise 3).

## 15.2 Kernel and image

What does a homomorphism forget? Exactly what it sends to the identity.

**Definition.** For a homomorphism $\varphi : G \to H$,

- the **kernel** is $\ker \varphi = \{g \in G : \varphi(g) = e_H\}$;
- the **image** is $\operatorname{im} \varphi = \varphi(G) = \{\varphi(g) : g \in G\}$.

**Theorem.** $\ker\varphi$ is a subgroup of $G$, and $\operatorname{im}\varphi$ is a subgroup of $H$.

*Proof.* Use the one-step test of §14.1. The kernel contains $e$. If $a, b \in \ker\varphi$ then
$\varphi(ab^{-1}) = \varphi(a)\varphi(b)^{-1} = e\,e^{-1} = e$. The image contains $\varphi(e) = e_H$, and
$\varphi(a)\varphi(b)^{-1} = \varphi(ab^{-1})$ is again in the image. $\square$

Examples:

- $\ker(\det) = SL_n(\mathbb{R})$, the matrices of determinant 1; the image is all of $\mathbb{R}^{\times}$ (the diagonal
  matrix with entries $t, 1, \dots, 1$ has determinant $t$).
- $\ker(\operatorname{sgn}) = A_n$; for $n \ge 2$ the image is $\{1, -1\}$.
- The kernel of $\mathbb{Z} \to \mathbb{Z}_n$, $a \mapsto a \bmod n$, is $n\mathbb{Z}$.
- The map $\mathbb{C}^{\times} \to \mathbb{R}_{>0}$, $z \mapsto |z|$, is a homomorphism because $|zw| = |z||w|$. Its
  kernel is the unit circle.
- The map $\mathbb{R} \to \mathbb{C}^{\times}$, $t \mapsto e^{2\pi i t} = \cos 2\pi t + i\sin 2\pi t$, is a homomorphism
  by Euler's formula ([Chapter 9](09-Complex-Numbers.md)). Its image is the unit circle and its kernel is $\mathbb{Z}$:
  the map wraps the real line around the circle, once per unit.

### The kernel measures the failure to be one-to-one

**Theorem.** $\varphi(a) = \varphi(b)$ if and only if $a^{-1}b \in \ker\varphi$, that is, if and only if
$a\ker\varphi = b\ker\varphi$. In particular $\varphi$ is one-to-one exactly when $\ker\varphi = \{e\}$.

*Proof.* $\varphi(a) = \varphi(b) \iff \varphi(a)^{-1}\varphi(b) = e \iff \varphi(a^{-1}b) = e \iff a^{-1}b \in
\ker\varphi$. The coset statement is Fact 2 of §14.3. If the kernel is $\{e\}$, then $\varphi(a) = \varphi(b)$ forces
$a^{-1}b = e$, i.e. $a = b$. Conversely, if $\varphi$ is one-to-one, only $e$ maps to $e_H$. $\square$

So a homomorphism glues together exactly the elements in the same coset of the kernel, and keeps different cosets
apart. Each point of the image has a whole coset of the kernel sitting over it, all of the same size. For finite $G$,
counting gives already

$$
|G| = |\ker\varphi| \cdot |\operatorname{im}\varphi| ,
$$

a fact the first isomorphism theorem will explain.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 150" role="img" aria-label="The twelve elements of Z12 in three rows of four, each row sent by an arrow to one element of Z3">
<g fill-opacity="0.35" stroke-width="2">
<circle cx="30" cy="30" r="14" fill="#eea66f" stroke="#eea66f"/><circle cx="70" cy="30" r="14" fill="#eea66f" stroke="#eea66f"/>
<circle cx="110" cy="30" r="14" fill="#eea66f" stroke="#eea66f"/><circle cx="150" cy="30" r="14" fill="#eea66f" stroke="#eea66f"/>
<circle cx="30" cy="75" r="14" fill="#9cc9ea" stroke="#9cc9ea"/><circle cx="70" cy="75" r="14" fill="#9cc9ea" stroke="#9cc9ea"/>
<circle cx="110" cy="75" r="14" fill="#9cc9ea" stroke="#9cc9ea"/><circle cx="150" cy="75" r="14" fill="#9cc9ea" stroke="#9cc9ea"/>
<circle cx="30" cy="120" r="14" fill="#7ccf9a" stroke="#7ccf9a"/><circle cx="70" cy="120" r="14" fill="#7ccf9a" stroke="#7ccf9a"/>
<circle cx="110" cy="120" r="14" fill="#7ccf9a" stroke="#7ccf9a"/><circle cx="150" cy="120" r="14" fill="#7ccf9a" stroke="#7ccf9a"/>
<circle cx="280" cy="30" r="14" fill="#eea66f" stroke="#eea66f"/><circle cx="280" cy="75" r="14" fill="#9cc9ea" stroke="#9cc9ea"/>
<circle cx="280" cy="120" r="14" fill="#7ccf9a" stroke="#7ccf9a"/>
</g>
<g stroke="currentColor" stroke-width="1.5">
<line x1="172" y1="30" x2="248" y2="30"/><line x1="172" y1="75" x2="248" y2="75"/><line x1="172" y1="120" x2="248" y2="120"/>
</g>
<g fill="currentColor">
<polygon points="248,25 258,30 248,35"/><polygon points="248,70 258,75 248,80"/><polygon points="248,115 258,120 248,125"/>
</g>
<g font-size="12" text-anchor="middle" fill="currentColor">
<text x="30" y="34">0</text><text x="70" y="34">3</text><text x="110" y="34">6</text><text x="150" y="34">9</text>
<text x="30" y="79">1</text><text x="70" y="79">4</text><text x="110" y="79">7</text><text x="150" y="79">10</text>
<text x="30" y="124">2</text><text x="70" y="124">5</text><text x="110" y="124">8</text><text x="150" y="124">11</text>
<text x="280" y="34">0</text><text x="280" y="79">1</text><text x="280" y="124">2</text>
<text x="210" y="24" font-size="10">mod 3</text>
</g>
</svg>
</div>

The homomorphism $\mathbb{Z}_{12} \to \mathbb{Z}_3$, $k \mapsto k \bmod 3$ (well defined because 3 divides 12). The top
row is the kernel $\{0, 3, 6, 9\}$; each row is a coset of the kernel and goes to a single point. $12 = 4 \cdot 3$.

## 15.3 Isomorphism

When is a homomorphism perfect, forgetting nothing and missing nothing?

**Definition.** An **isomorphism** is a homomorphism that is a bijection (one-to-one and onto). If one exists, $G$ and
$H$ are **isomorphic**, written $G \cong H$. An isomorphism from $G$ to itself is an **automorphism**.

The inverse of an isomorphism is again a homomorphism: if $\varphi(a) = x$ and $\varphi(b) = y$ then
$\varphi(ab) = xy$, so $\varphi^{-1}(xy) = ab = \varphi^{-1}(x)\varphi^{-1}(y)$. So "isomorphic" is symmetric, and it is
clearly reflexive and transitive: an equivalence relation on groups.

Isomorphic groups are the same group with the elements renamed. Every property defined only from the operation
transfers: being abelian, being cyclic, the number of elements of each order, the number of subgroups of each size, the
centre, and so on. Group theory studies groups **up to isomorphism**.

### Proving two groups are isomorphic: find the map

- $(\mathbb{R}, +) \cong (\mathbb{R}_{>0}, \times)$ via $x \mapsto e^x$, a bijection with inverse $\ln$. This isomorphism
  is why logarithm tables worked: they translate multiplication into addition ([Chapter 7](07-Exponents-and-Logarithms.md)).
- Any two cyclic groups of the same order are isomorphic: if $G = \langle g \rangle$ and $H = \langle h \rangle$ both
  have order $n$, then $g^k \mapsto h^k$ is well defined and bijective. So every cyclic group of order $n$ is a copy of
  $\mathbb{Z}_n$, and every infinite cyclic group is a copy of $\mathbb{Z}$.
- $U(5) = \{1, 2, 3, 4\} \cong \mathbb{Z}_4$, since 2 has order 4 mod 5.
- $U(8) = \{1, 3, 5, 7\} \cong$ the Klein four-group $V$, since every non-identity element has order 2.
- The symmetric group $S_3$ is isomorphic to the symmetry group $D_3$ of an equilateral triangle: number the corners
  1, 2, 3 and send each symmetry to the permutation of corners it causes.

### Proving two groups are not isomorphic: find a difference

You cannot try every bijection. Instead, find a property one group has and the other lacks.

- $\mathbb{Z}_4 \not\cong V$: $\mathbb{Z}_4$ has an element of order 4.
- $\mathbb{Z}_6 \not\cong S_3$: one is abelian, the other not.
- $(\mathbb{Z}, +) \not\cong (\mathbb{Q}, +)$: $\mathbb{Z}$ is cyclic, but $\mathbb{Q}$ is not (if $\mathbb{Q} =
  \langle a/b \rangle$, then $a/(2b)$ would have to be an integer multiple of $a/b$, which it is not, unless $a=0$).
- $(\mathbb{Q}, +) \not\cong (\mathbb{Q}_{>0}, \times)$: in $\mathbb{Q}$ every element is twice something ($x = 2 \cdot
  \frac{x}{2}$), so in an isomorphic copy every element would be a square. But 2 is not the square of a positive
  rational.
- $U(15) \not\cong \mathbb{Z}_8$: $U(15) = \{1, 2, 4, 7, 8, 11, 13, 14\}$ has no element of order 8 (orders are 1, 4, 2,
  4, 4, 2, 4, 2).

## 15.4 Normal subgroups

*Level: advanced.*

In §14.3 we met a subgroup of $S_3$ whose left and right cosets differ. Kernels never behave like that.

**Theorem.** If $K = \ker\varphi$, then $gKg^{-1} = K$ for every $g \in G$, and so $gK = Kg$.

*Proof.* If $k \in K$ then $\varphi(gkg^{-1}) = \varphi(g)\,e\,\varphi(g)^{-1} = e$, so $gkg^{-1} \in K$. This shows
$gKg^{-1} \subseteq K$ for every $g$; applying it to $g^{-1}$ gives $g^{-1}Kg \subseteq K$, i.e. $K \subseteq gKg^{-1}$.
Multiplying $gKg^{-1} = K$ on the right by $g$ gives $gK = Kg$. $\square$

The element $gkg^{-1}$ is called the **conjugate** of $k$ by $g$. Conjugating is "changing your point of view": in
$S_n$, $g\sigma g^{-1}$ is $\sigma$ with the points renamed by $g$. For example if $\sigma = (1\,2)$ and $g = (1\,3)$,
then $g\sigma g^{-1} = (g(1)\;g(2)) = (3\,2)$. In a group of symmetries, conjugating a rotation about one axis gives a
rotation by the same angle about another axis.

**Definition.** A subgroup $N \le G$ is **normal**, written $N \trianglelefteq G$, if $gNg^{-1} = N$ for every
$g \in G$; equivalently, $gng^{-1} \in N$ for all $g \in G$, $n \in N$; equivalently, $gN = Ng$ for all $g$.

(The equivalence of "$\subseteq$ for all $g$" with "$=$ for all $g$" is the argument in the proof above.)

### Examples

- Every subgroup of an abelian group is normal, since $gng^{-1} = n$.
- Every kernel is normal. So $SL_n(\mathbb{R}) \trianglelefteq GL_n(\mathbb{R})$ and $A_n \trianglelefteq S_n$.
- **Index 2 subgroups are normal.** If $[G:H] = 2$, the left cosets are $H$ and $G \setminus H$, and so are the right
  cosets; so $gH = Hg$ either way (exercise 10 of Chapter 14). This gives $A_n \trianglelefteq S_n$ again, and the
  rotations of a regular polygon are normal in its full symmetry group.
- The **centre** $Z(G) = \{z : zg = gz \text{ for all } g\}$ is normal, since $gzg^{-1} = z$. For the square,
  $Z(D_4) = \{e, r^2\}$: the half-turn commutes with everything.
- $V = \{e, (1\,2)(3\,4), (1\,3)(2\,4), (1\,4)(2\,3)\}$ is normal in $S_4$: conjugation preserves cycle shape, and $V$
  contains all three permutations of shape "two 2-cycles".

**Non-example.** $H = \{e, (1\,2)\}$ in $S_3$ is not normal: $(1\,3)(1\,2)(1\,3)^{-1} = (2\,3) \notin H$.

**Normality is not transitive.** In the square's group, with $s$ a reflection, $K = \{e, s\}$ has index 2 in
$N = \{e, r^2, s, r^2s\}$, which has index 2 in $D_4$. So $K \trianglelefteq N \trianglelefteq D_4$. But $K$ is not
normal in $D_4$: $rsr^{-1} = r^2s \notin K$ (using $sr^{-1} = rs$).

**History.** Évariste Galois, in the letter he wrote to his friend Auguste Chevalier the night before his fatal duel in
1832, singled out the subgroups for which left and right cosets agree; he called the corresponding decomposition
"proper". They are exactly what makes his theory of equations work ([Chapter 20](20-Galois-Theory.md)).

## 15.5 Quotient groups

*Level: advanced.*

Here is the idea that turns normality from a curiosity into a tool. If $N$ is normal, the cosets of $N$ can be
multiplied, and they form a group.

Think of $\mathbb{Z}$ and $N = 12\mathbb{Z}$. The cosets $a + 12\mathbb{Z}$ are the hours of a clock. To add two hours
you add any representatives: $(9 + 12\mathbb{Z}) + (5 + 12\mathbb{Z}) = 14 + 12\mathbb{Z} = 2 + 12\mathbb{Z}$, and the
answer does not depend on which representatives you picked (21 and 17 give 38, again $2 + 12\mathbb{Z}$). The group of
hours is $\mathbb{Z}/12\mathbb{Z}$, which we have been calling $\mathbb{Z}_{12}$.

**Theorem.** Let $N \trianglelefteq G$. On the set $G/N$ of left cosets of $N$, the rule

$$
(aN)(bN) = abN
$$

is well defined, and makes $G/N$ a group, the **quotient group** (or factor group) "$G$ mod $N$". Its identity is
$N = eN$, the inverse of $aN$ is $a^{-1}N$, and $|G/N| = [G : N]$. The map $\pi : G \to G/N$, $\pi(a) = aN$, is a
homomorphism onto $G/N$ with kernel $N$.

*Proof.* *Well defined:* suppose $aN = a'N$ and $bN = b'N$, so $a' = an_1$ and $b' = bn_2$ with $n_1, n_2 \in N$. Then

$$
a'b' = an_1bn_2 = ab\,(b^{-1}n_1b)\,n_2 .
$$

Since $N$ is normal, $b^{-1}n_1b \in N$, so $a'b' \in abN$, and $a'b'N = abN$. *Group axioms:* they are inherited from
$G$: $(aN)(bN)(cN) = abcN$ either way you bracket, $(eN)(aN) = aN$, and $(a^{-1}N)(aN) = eN$. *The map $\pi$:*
$\pi(ab) = abN = (aN)(bN)$, it is onto by construction, and $\pi(a) = N$ exactly when $a \in N$. $\square$

Normality is exactly what makes the product well defined: you can check (exercise 7) that if the rule
$(aN)(bN) = abN$ is well defined, then $N$ must be normal.

So the two ideas meet: **every kernel is a normal subgroup, and every normal subgroup is a kernel** (of $\pi$).

### Examples

- $\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}_n$, the clock with $n$ hours.
- $S_n/A_n$ has two elements, "even" and "odd", and it is $\cong \mathbb{Z}_2$: odd times odd is even.
- $D_4/Z(D_4)$, with $Z = \{e, r^2\}$, has four cosets: $Z$, $rZ = \{r, r^3\}$, $sZ = \{s, r^2s\}$,
  $rsZ = \{rs, r^3s\}$. Each non-identity coset squared is $Z$ (for instance $(rZ)^2 = r^2Z = Z$), so the quotient is
  the Klein four-group, not $\mathbb{Z}_4$.
- $\mathbb{R}/\mathbb{Z}$: cosets $x + \mathbb{Z}$ are "real numbers up to whole numbers", i.e. fractional parts. Adding
  fractional parts and wrapping around at 1 is going around a circle. We will see $\mathbb{R}/\mathbb{Z}$ is isomorphic
  to the unit circle.
- $\mathbb{Z}^2/\langle(1,1)\rangle$: the coset of $(a, b)$ is determined by $a - b$, so this is $\cong \mathbb{Z}$.

A quotient is a way of **deliberately forgetting**: $G/N$ is $G$ seen by someone who cannot tell apart elements that
differ by something in $N$. Taking the remainder mod $n$, reading the angle of a rotation but not how many full turns
were made, keeping only the parity of a permutation: each is a quotient.

<figure class="play" data-play="cosets"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The cosets of H are the members of the quotient group: each colour is one element of Z<sub>n</sub>/H, and there are gcd(n, d) of them.</figcaption></figure>

## 15.6 The isomorphism theorems

*Level: advanced.*

### The first isomorphism theorem

The picture in §15.2 showed every homomorphism lining up the cosets of its kernel with the points of its image. The
first isomorphism theorem says that this line-up is itself an isomorphism.

**Theorem (first isomorphism theorem).** Let $\varphi : G \to H$ be a homomorphism with kernel $K$. Then

$$
G/K \cong \operatorname{im}\varphi ,
$$

by the isomorphism $\bar\varphi(gK) = \varphi(g)$.

*Proof.* *Well defined and one-to-one:* by §15.2, $gK = g'K \iff \varphi(g) = \varphi(g')$. Reading the arrow
"$\Rightarrow$" says $\bar\varphi$ is well defined; reading "$\Leftarrow$" says it is one-to-one. *Onto the image:*
every $\varphi(g)$ is $\bar\varphi(gK)$. *Homomorphism:* $\bar\varphi(gK\,g'K) = \bar\varphi(gg'K) = \varphi(gg') =
\varphi(g)\varphi(g') = \bar\varphi(gK)\bar\varphi(g'K)$. $\square$

For finite groups it gives $|G|/|\ker\varphi| = |\operatorname{im}\varphi|$, the counting formula of §15.2. Its real
power is as a machine for recognising quotients: **to identify $G/N$, find a homomorphism out of $G$ with kernel $N$ and
compute its image.**

**Worked examples.**

1. $\mathbb{Z} \to \mathbb{Z}_n$, $a \mapsto a \bmod n$: onto, kernel $n\mathbb{Z}$. So $\mathbb{Z}/n\mathbb{Z} \cong
   \mathbb{Z}_n$.
2. $\det : GL_n(\mathbb{R}) \to \mathbb{R}^{\times}$: onto, kernel $SL_n(\mathbb{R})$. So
   $GL_n(\mathbb{R})/SL_n(\mathbb{R}) \cong \mathbb{R}^{\times}$.
3. $t \mapsto e^{2\pi it}$ from $\mathbb{R}$ onto the unit circle $S^1$, kernel $\mathbb{Z}$. So
   $\mathbb{R}/\mathbb{Z} \cong S^1$. The real line, rolled up.
4. $z \mapsto |z|$ from $\mathbb{C}^{\times}$ onto $\mathbb{R}_{>0}$, kernel $S^1$. So $\mathbb{C}^{\times}/S^1 \cong
   \mathbb{R}_{>0}$: forget the direction of a complex number and keep its length.
5. $z \mapsto z^n$ from $S^1$ onto $S^1$ (every point of the circle has an $n$th root), kernel the $n$th roots of unity
   $\mu_n$. So $S^1/\mu_n \cong S^1$, a quotient of a group isomorphic to the group itself, something impossible for
   finite groups.

### The second and third

**Theorem (second isomorphism theorem).** Let $H \le G$ and $N \trianglelefteq G$. Then $HN = \{hn : h \in H, n \in N\}$
is a subgroup of $G$, $H \cap N \trianglelefteq H$, and

$$
HN/N \cong H/(H \cap N).
$$

*Proof.* $HN$ is a subgroup: it contains $e$, and $(h_1n_1)(h_2n_2)^{-1} = h_1n_1n_2^{-1}h_2^{-1} =
(h_1h_2^{-1})\,(h_2 n_1 n_2^{-1} h_2^{-1})$, a product of an element of $H$ and an element of $N$ (by normality). Since
$N \le HN$ and $N$ is normal in $G$, it is normal in $HN$. Define $\varphi : H \to HN/N$ by $\varphi(h) = hN$. It is a
homomorphism (the restriction of $\pi$). It is onto: a coset $hnN$ equals $hN$. Its kernel is $\{h \in H : h \in N\} =
H \cap N$. The first isomorphism theorem finishes. $\square$

For finite groups, comparing sizes gives the useful product formula $|HN| = \dfrac{|H|\,|N|}{|H \cap N|}$ (which in
fact holds for any two subgroups $H, K$ as a count of the set $HK$, even when it is not a subgroup).

**Example.** In $\mathbb{Z}$ take $H = 6\mathbb{Z}$ and $N = 4\mathbb{Z}$. Then $H + N = 2\mathbb{Z}$ and $H \cap N =
12\mathbb{Z}$, and the theorem says $2\mathbb{Z}/4\mathbb{Z} \cong 6\mathbb{Z}/12\mathbb{Z}$. Both have two elements.
**Check.**

**Theorem (third isomorphism theorem).** Let $K \le H \le G$ with $K$ and $H$ both normal in $G$. Then $H/K$ is a normal
subgroup of $G/K$, and

$$
(G/K)/(H/K) \cong G/H .
$$

*Proof.* Define $\varphi : G/K \to G/H$ by $\varphi(gK) = gH$. Well defined: if $gK = g'K$ then $g^{-1}g' \in K
\subseteq H$, so $gH = g'H$. It is a homomorphism and onto. Its kernel is $\{gK : g \in H\} = H/K$, which is therefore
normal, and the first isomorphism theorem gives the result. $\square$

It is "cancelling" in fractions: $(\mathbb{Z}/12\mathbb{Z})/(4\mathbb{Z}/12\mathbb{Z}) \cong \mathbb{Z}/4\mathbb{Z}$. A
clock with 12 hours, read only mod 4, is a clock with 4 hours.

The same proof idea gives the **correspondence theorem**: the subgroups of $G/N$ are exactly the $H/N$ for subgroups
$H$ with $N \le H \le G$, and normal ones correspond to normal ones. Quotienting by $N$ keeps the part of the subgroup
picture above $N$ and throws away the rest.

**History.** Quotient groups as groups in their own right were made explicit by Otto Hölder in 1889, in his work on
composition series. The three isomorphism theorems were stated in the general form used today, for groups, rings and
modules alike, by Emmy Noether and her school in the 1920s.

## 15.7 Direct products and the Chinese remainder theorem

*Level: advanced.*

Quotients break groups down. Products build them up.

**Definition.** The **direct product** of groups $G$ and $H$ is the set of pairs $G \times H = \{(g, h)\}$ with the
operation done in each coordinate: $(g, h)(g', h') = (gg', hh')$.

It is a group with identity $(e, e)$ and inverse $(g^{-1}, h^{-1})$, of order $|G|\,|H|$. The **order of a pair** is
the lcm of the orders of its coordinates, since $(g, h)^k = (g^k, h^k)$ is the identity exactly when both coordinates
are.

**Example.** $\mathbb{Z}_2 \times \mathbb{Z}_2 = \{(0,0), (1,0), (0,1), (1,1)\}$: all three non-identity elements have
order 2, so it is the Klein four-group. And $\mathbb{Z}_2 \times \mathbb{Z}_3$: the element $(1, 1)$ has order
$\operatorname{lcm}(2, 3) = 6$, so it generates, and $\mathbb{Z}_2 \times \mathbb{Z}_3 \cong \mathbb{Z}_6$.

**Theorem.** $\mathbb{Z}_m \times \mathbb{Z}_n$ is cyclic if and only if $\gcd(m, n) = 1$, in which case it is
$\cong \mathbb{Z}_{mn}$.

*Proof.* Every element $(a, b)$ has order $\operatorname{lcm}(|a|, |b|)$, which divides $\operatorname{lcm}(m, n)$. If
$\gcd(m, n) = d > 1$ then $\operatorname{lcm}(m, n) = mn/d < mn$, so no element has order $mn$ and the group is not
cyclic. If $\gcd(m, n) = 1$, then $(1, 1)$ has order $\operatorname{lcm}(m, n) = mn$ and generates. $\square$

### The Chinese remainder theorem

Write the isomorphism of the theorem as a map out of $\mathbb{Z}_{mn}$:

$$
\psi : \mathbb{Z}_{mn} \to \mathbb{Z}_m \times \mathbb{Z}_n, \qquad x \mapsto (x \bmod m,\; x \bmod n).
$$

It is a homomorphism. Its kernel is the set of $x$ divisible by both $m$ and $n$, hence by $mn$ when they are coprime,
so the kernel is $\{0\}$ and $\psi$ is one-to-one; both sides have $mn$ elements, so it is onto. That last word is the
**Chinese remainder theorem**: *if $\gcd(m, n) = 1$, then for any $a, b$ the system $x \equiv a \pmod m$,
$x \equiv b \pmod n$ has a solution, unique mod $mn$.* (The problem goes back to the *Sunzi Suanjing*, a Chinese
mathematical text of roughly the 3rd to 5th century, which asks for a number leaving remainders 2, 3, 2 on division by
3, 5, 7.)

**Worked example.** Solve $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$. The numbers $\equiv 3 \pmod 5$ are
$3, 8, 13, \dots$; of these, $8 \equiv 2 \pmod 3$. So $x \equiv 8 \pmod{15}$. **Check:** $8 = 2 \cdot 3 + 2 = 1 \cdot 5
+ 3$.

The map $\psi$ also respects multiplication, so it restricts to an isomorphism of the unit groups:

$$
U(mn) \cong U(m) \times U(n) \qquad \text{when } \gcd(m, n) = 1 .
$$

Counting elements gives the multiplicativity of Euler's phi function, $\varphi(mn) = \varphi(m)\varphi(n)$ for coprime
$m, n$. For example $U(15) \cong U(3) \times U(5) \cong \mathbb{Z}_2 \times \mathbb{Z}_4$, matching the element orders
listed in §15.3. The ring version of this story is in [Chapter 17](17-Rings-and-Ideals.md).

### Recognising a product from inside

**Theorem (internal direct product).** Let $H, K \trianglelefteq G$ with $H \cap K = \{e\}$ and $HK = G$. Then
$G \cong H \times K$.

*Proof.* First, elements of $H$ and $K$ commute: for $h \in H$, $k \in K$, the **commutator** $hkh^{-1}k^{-1}$ equals
$(hkh^{-1})k^{-1} \in K$ (normality of $K$) and $h(kh^{-1}k^{-1}) \in H$ (normality of $H$), so it lies in
$H \cap K = \{e\}$, i.e. $hk = kh$. Now define $\varphi : H \times K \to G$, $\varphi(h, k) = hk$. It is a homomorphism:
$\varphi((h,k)(h',k')) = hh'kk' = hkh'k'$ using the commuting. It is onto because $HK = G$. Its kernel: $hk = e$ means
$h = k^{-1} \in H \cap K$, so $h = k = e$. $\square$

**Example.** In $\mathbb{Z}_6$, $H = \{0, 3\}$ and $K = \{0, 2, 4\}$ meet only in 0 and together generate, so
$\mathbb{Z}_6 \cong \mathbb{Z}_2 \times \mathbb{Z}_3$ again. In $D_6$, the symmetries of a regular hexagon (order 12),
the centre $\{e, r^3\}$ and the subgroup of symmetries of one of the two inscribed triangles (order 6, index 2) are both
normal and meet trivially, so $D_6 \cong \mathbb{Z}_2 \times S_3$.

If only one of the two subgroups is normal, you get a twisted version, the **semidirect product**; $S_3$ and all
dihedral groups are built that way from a rotation subgroup and a reflection. You will meet it again in
[Chapter 16](16-Group-Actions-and-Sylow.md), where the nonabelian group of order 21 is one.

## 15.8 Finite abelian groups classified

*Level: expert (statement and idea of the proof).*

For abelian groups, direct products of cyclic groups are the whole story.

**Theorem (fundamental theorem of finite abelian groups).** Every finite abelian group is isomorphic to a direct product
of cyclic groups of prime-power order,

$$
\mathbb{Z}_{p_1^{a_1}} \times \mathbb{Z}_{p_2^{a_2}} \times \cdots \times \mathbb{Z}_{p_r^{a_r}},
$$

where the primes need not be different. The list of prime powers (the **elementary divisors**) is unique up to order.
Equivalently, it is isomorphic to exactly one product $\mathbb{Z}_{d_1} \times \cdots \times \mathbb{Z}_{d_s}$ with
$d_1 \mid d_2 \mid \cdots \mid d_s$ and $d_1 > 1$ (the **invariant factors**).

**How to use it.** To list the abelian groups of order $n$, factor $n = \prod p^{a}$, and for each prime choose a
**partition** of the exponent $a$ (a way of writing $a$ as a sum of positive integers, order not mattering). So the
number of abelian groups of order $n$ is the product of the numbers of partitions of the exponents.

**Worked example: order $72 = 2^3 \cdot 3^2$.** Partitions of 3: $3$, $2+1$, $1+1+1$; of 2: $2$, $1+1$. So
$3 \times 2 = 6$ groups:

| elementary divisors | invariant factors |
|---|---|
| $\mathbb{Z}_8 \times \mathbb{Z}_9$ | $\mathbb{Z}_{72}$ |
| $\mathbb{Z}_8 \times \mathbb{Z}_3 \times \mathbb{Z}_3$ | $\mathbb{Z}_3 \times \mathbb{Z}_{24}$ |
| $\mathbb{Z}_4 \times \mathbb{Z}_2 \times \mathbb{Z}_9$ | $\mathbb{Z}_2 \times \mathbb{Z}_{36}$ |
| $\mathbb{Z}_4 \times \mathbb{Z}_2 \times \mathbb{Z}_3 \times \mathbb{Z}_3$ | $\mathbb{Z}_6 \times \mathbb{Z}_{12}$ |
| $\mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_9$ | $\mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_{18}$ |
| $\mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_3 \times \mathbb{Z}_3$ | $\mathbb{Z}_2 \times \mathbb{Z}_6 \times \mathbb{Z}_6$ |

To pass from left to right, take the largest power of each prime and multiply them for $d_s$, then the next largest for
$d_{s-1}$, and so on (allowed because of the CRT: $\mathbb{Z}_4 \times \mathbb{Z}_9 \cong \mathbb{Z}_{36}$).

**The idea of the proof.** There are two steps.

1. *Split by primes.* For each prime $p$ dividing $|G| = n$, let $G_p = \{g : g^{p^k} = e \text{ for some } k\}$, the
   elements of $p$-power order. In an abelian group this is a subgroup, and $G$ is the internal direct product of the
   $G_p$. (If $n = m_1m_2$ with $\gcd(m_1, m_2) = 1$, write $1 = um_1 + vm_2$; then every $g = g^{um_1}g^{vm_2}$, where
   $g^{vm_2}$ is killed by $m_1$ and $g^{um_1}$ by $m_2$. This is the CRT once more.)
2. *Split a $p$-group.* An abelian group of order $p^a$ is a product of cyclic groups. One takes an element $g$ of the
   largest order, shows that $\langle g \rangle$ has a "complement" $K$ with $G = \langle g \rangle \times K$, and uses
   induction on $|G|$. The delicate point is finding $K$; it takes about a page.

Uniqueness comes from counting: the number of elements with $g^{p^k} = e$, for each $k$, can be read off from the
partition and determines it.

A cleaner route sees an abelian group as a module over the ring $\mathbb{Z}$ and proves a single **structure theorem for
modules over a principal ideal domain**. The same theorem, applied to a different ring, gives the Jordan normal form of a
matrix. That is [Chapter 21](21-Modules-and-Representations.md). Historically, Leopold Kronecker proved the decomposition
in 1870 while studying class groups of number fields, and Ferdinand Georg Frobenius and Ludwig Stickelberger gave the
full uniqueness statement in 1879.

**Consequences.**

- The converse of Lagrange holds for finite abelian groups: if $d$ divides $|G|$, pick a sub-product of the right size
  inside each $\mathbb{Z}_{p^a}$ factor.
- A finite abelian group is cyclic exactly when, for each prime, it has only one elementary divisor, i.e. when it has at
  most $p - 1$ elements of order $p$ for every $p$.
- A finite subgroup of the multiplicative group of a field is cyclic. (Sketch: it is abelian; in a field the equation
  $x^m = 1$ has at most $m$ roots ([Chapter 10](10-Roots-and-Coefficients.md)); a product
  $\mathbb{Z}_{d_1} \times \cdots \times \mathbb{Z}_{d_s}$ with $s \ge 2$ would have at least $d_1 d_s > d_s$ solutions of
  $x^{d_s} = 1$.) So $U(p)$ is cyclic for every prime $p$: there is always a **primitive root** mod $p$. This is the
  fact behind Diffie-Hellman key exchange on [cryptography.akadian.ca](https://cryptography.akadian.ca/book/).

## Check yourself

??? question "1. Which maps are homomorphisms? (a) $\mathbb{R} \to \mathbb{R}$, $x \mapsto 3x$; (b) $\mathbb{R} \to \mathbb{R}$, $x \mapsto x + 1$; (c) $\mathbb{R}^{\times} \to \mathbb{R}^{\times}$, $x \mapsto x^2$; (d) $S_3 \to \mathbb{Z}_2$, sending even permutations to 0 and odd ones to 1."

    (a) Yes: $3(x + y) = 3x + 3y$. It is an isomorphism.
    (b) No: it sends 0 to 1, but a homomorphism sends the identity to the identity.
    (c) Yes: $(xy)^2 = x^2y^2$. Kernel $\{1, -1\}$, image $\mathbb{R}_{>0}$.
    (d) Yes: it is the sign map written additively. Kernel $A_3$.

??? question "2. Find the kernel and image of $\varphi : \mathbb{Z}_{12} \to \mathbb{Z}_{12}$, $\varphi(x) = 8x$, and check the first isomorphism theorem."

    Image: $\{0, 8, 16 \equiv 4\} = \{0, 4, 8\}$, of order 3. Kernel: $8x \equiv 0 \pmod{12}$ means $3 \mid 2x$, so
    $3 \mid x$: $\{0, 3, 6, 9\}$, of order 4. And $12/4 = 3$, as the theorem says ($\mathbb{Z}_{12}/\langle 3\rangle
    \cong \mathbb{Z}_3$).

??? question "3. Prove there are exactly $\gcd(m, n)$ homomorphisms $\mathbb{Z}_m \to \mathbb{Z}_n$."

    A homomorphism is fixed by $h = \varphi(1)$, and any $h$ with $mh \equiv 0 \pmod n$ works. Let $d = \gcd(m,n)$.
    $n \mid mh \iff \frac{n}{d} \mid \frac{m}{d}h \iff \frac{n}{d} \mid h$ (coprimality). The multiples of $n/d$ in
    $\{0, \dots, n-1\}$ number exactly $d$.

??? question "4. Show that $\mathbb{Z}_3 \times \mathbb{Z}_3 \not\cong \mathbb{Z}_9$ and that $\mathbb{Z}_4 \times \mathbb{Z}_{9} \cong \mathbb{Z}_{36}$."

    Every element of $\mathbb{Z}_3 \times \mathbb{Z}_3$ has order 1 or 3 (lcm of orders 1 or 3), but $\mathbb{Z}_9$ has an
    element of order 9. And $\gcd(4, 9) = 1$, so $\mathbb{Z}_4 \times \mathbb{Z}_9 \cong \mathbb{Z}_{36}$ by §15.7.

??? question "5. Is $\{e, (1\,2\,3), (1\,3\,2)\}$ normal in $S_3$? Is $\{e, (1\,2)(3\,4)\}$ normal in $S_4$?"

    The first is $A_3$, of index 2, so yes. The second is not: conjugating by $(1\,3)$ gives $(3\,2)(1\,4) =
    (1\,4)(2\,3)$, which is not in it.

??? question "6. Identify $(\mathbb{Z}_4 \times \mathbb{Z}_2)/\langle (2, 0)\rangle$ and $(\mathbb{Z}_4 \times \mathbb{Z}_2)/\langle (1, 1)\rangle$."

    The first quotient has order $8/2 = 4$. Every element $(a, b)$ doubled is $(2a, 0) \in \langle(2,0)\rangle$, so
    every coset has order at most 2: it is $\mathbb{Z}_2 \times \mathbb{Z}_2$ (or use $(a,b) \mapsto (a \bmod 2, b)$,
    onto with kernel $\langle (2,0) \rangle$).
    The second: $(1,1)$ has order 4, so the quotient has order 2 and is $\mathbb{Z}_2$.

??? question "7. Prove: if $N \le G$ and the rule $(aN)(bN) = abN$ is well defined on left cosets, then $N$ is normal."

    Take $g \in G$ and $n \in N$. Since $nN = eN$, well-definedness gives $(nN)(g^{-1}N) = (eN)(g^{-1}N)$, that
    is, $ng^{-1}N = g^{-1}N$. By Fact 2 of §14.3, $xN = yN$ means $x^{-1}y \in N$; here
    $(ng^{-1})^{-1}g^{-1} = gn^{-1}g^{-1} \in N$. As $n$ runs through $N$ so does $n^{-1}$, so $gNg^{-1} \subseteq N$
    for every $g$, which is normality.

??? question "8. Let $G$ be a group with $G/Z(G)$ cyclic. Prove $G$ is abelian."

    Let $G/Z = \langle gZ \rangle$. Every element of $G$ lies in some coset $g^iZ$, so it is $g^iz$ with $z \in Z$.
    Then $(g^iz)(g^jw) = g^{i+j}zw = (g^jw)(g^iz)$, because $z, w$ commute with everything and powers of $g$ commute
    with each other. (So $G/Z(G)$ is never cyclic of order more than 1. Used in Chapter 16.)

??? question "9. How many abelian groups of order 360 are there? List them by invariant factors."

    $360 = 2^3 \cdot 3^2 \cdot 5$; partitions: 3 of the exponent 3, 2 of the exponent 2, 1 of the exponent 1. So
    $3 \cdot 2 \cdot 1 = 6$: $\mathbb{Z}_{360}$; $\mathbb{Z}_3 \times \mathbb{Z}_{120}$; $\mathbb{Z}_2 \times
    \mathbb{Z}_{180}$; $\mathbb{Z}_6 \times \mathbb{Z}_{60}$; $\mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_{90}$;
    $\mathbb{Z}_2 \times \mathbb{Z}_6 \times \mathbb{Z}_{30}$.

??? question "10. Show that $U(16)$ and $U(20)$ are both isomorphic to $\mathbb{Z}_2 \times \mathbb{Z}_4$, and that $U(21) \cong \mathbb{Z}_2 \times \mathbb{Z}_6$."

    $U(16) = \{1, 3, 5, 7, 9, 11, 13, 15\}$, abelian of order 8, with orders 1, 4, 4, 2, 2, 4, 4, 2: three elements of
    order 2 and no element of order 8, so by the classification it is $\mathbb{Z}_2 \times \mathbb{Z}_4$ (the other
    candidates $\mathbb{Z}_8$ and $\mathbb{Z}_2^3$ have one and seven elements of order 2).
    $U(20) \cong U(4) \times U(5) \cong \mathbb{Z}_2 \times \mathbb{Z}_4$ by the CRT.
    $U(21) \cong U(3) \times U(7) \cong \mathbb{Z}_2 \times \mathbb{Z}_6$ (as $U(7)$ is cyclic, generated by 3).

??? question "11. Prove that every group of order $p^2$ whose centre is not trivial is abelian, for $p$ prime."

    $|Z(G)|$ divides $p^2$ and is not 1, so it is $p$ or $p^2$. If $p$, then $G/Z(G)$ has order $p$, so is cyclic,
    and by question 8 $G$ is abelian, so $Z(G) = G$, contradicting $|Z(G)| = p$. Hence $Z(G) = G$. (Chapter 16 shows
    the centre of a $p$-group is never trivial, so every group of order $p^2$ is abelian.)

## What you learned

- A homomorphism respects the operation; it sends $e$ to $e$, inverses to inverses, and divides orders.
- Its kernel is a normal subgroup, its image a subgroup, and it is one-to-one exactly when the kernel is $\{e\}$.
- Isomorphic groups are the same up to renaming; to prove two groups differ, find a property one lacks.
- Normal subgroups ($gNg^{-1} = N$) are exactly the kernels, and exactly the subgroups you can divide by: $G/N$ is a
  group.
- First isomorphism theorem: $G/\ker\varphi \cong \operatorname{im}\varphi$; the second and third follow from it.
- $\mathbb{Z}_m \times \mathbb{Z}_n \cong \mathbb{Z}_{mn}$ when $\gcd(m,n) = 1$, which is the Chinese remainder theorem.
- Every finite abelian group is a product of cyclic groups of prime-power order, in exactly one way.

**Next:** [Chapter 16](16-Group-Actions-and-Sylow.md), groups acting on sets: counting with symmetry, and Sylow's
theorems on the subgroups of prime-power order.

## Further reading

- D. S. Dummit and R. M. Foote, *Abstract Algebra*, 3rd edition, 2004. Chapter 3 (quotients and isomorphism theorems)
  and Section 5.2 (finite abelian groups).
- M. Artin, *Algebra*, 2nd edition, 2011. Chapter 2, with a geometric flavour.
- J. J. Rotman, *An Introduction to the Theory of Groups*, 4th edition, 1995. Thorough on isomorphism theorems and
  abelian groups.
- J. A. Gallian, *Contemporary Abstract Algebra*. Chapters on isomorphisms, external and internal direct products.
- I. Kleiner, "The evolution of group theory: a brief survey", *Mathematics Magazine* 59, 1986.
- On this site: [The Chinese remainder theorem](../../topics/number-theory/level-6/05-chinese-remainder.md),
  [Clocks of any size](../../topics/number-theory/level-5/02-clocks-any-size.md),
  [Linear transformations (MAT240H1 unit 4)](../../uoft/MAT240H1/unit04.md), where kernels and images first appear for
  vector spaces, and [Dual spaces and quotient spaces (MAT247H1 unit 8)](../../uoft/MAT247H1/unit08.md), the same
  quotient idea for vector spaces.
- Primitive roots and the groups $U(p)$ in cryptography: [cryptography.akadian.ca/book](https://cryptography.akadian.ca/book/),
  chapters 3 and 12.
