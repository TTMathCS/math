# 14. The circle and covering spaces

*Chapter 13 built the fundamental group but computed it only for spaces where every loop shrinks. The first space
with an interesting group is the circle, and proving what its group is takes a new idea: unwind the circle onto the
real line, like peeling the thread off a spool, and watch where each loop ends up. In this chapter you will prove
that the fundamental group of the circle is the integers, generalise the unwinding to covering spaces, and then spend
the result: a proof that every polynomial has a complex root, Brouwer's fixed point theorem in the plane, and the
Borsuk-Ulam theorem, which says that at any moment there are two opposite points on a planet with the same
temperature and the same pressure.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to lift paths and homotopies from the circle to the real line, and why lifts are unique
    - the proof that $\pi_1(S^1) \cong \mathbb{Z}$, and the degree (winding number) of a loop
    - what a covering space is, with examples, and the general lifting lemmas
    - how coverings compute fundamental groups, including $\pi_1(\mathbb{R}P^2) \cong \mathbb{Z}/2$
    - a topological proof of the fundamental theorem of algebra
    - Brouwer's fixed point theorem for the disc, and the Borsuk-Ulam theorem for the sphere, with proofs

    **You need:** [Chapter 13](13-The-Fundamental-Group.md) (loops, path homotopy, $\pi_1$, induced maps),
    [Chapter 8](08-Compactness.md) (compactness and the Lebesgue number lemma), [Chapter 7](07-Connectedness.md)
    (connectedness) and [Chapter 6](06-Building-New-Spaces.md) (the projective plane as a quotient). Complex numbers in
    polar form, as in [Algebra Chapter 9](../algebra/09-Complex-Numbers.md).

    **Levels:** 14.1 and 14.2 are advanced; 14.3 and 14.4 are advanced but short once 14.1 is in place; 14.5 is
    advanced, with the general covering space theory in 14.2 reaching expert level (statements only).

## 14.1 The fundamental group of the circle

*Level: advanced.*

Here is the claim. Write $b = (1, 0)$ for the base point of the circle $S^1$, and $\omega_n(s) = (\cos 2\pi ns, \sin 2\pi ns)$
for the loop that goes $n$ times around.

**Theorem 14.1.** $\pi_1(S^1, b) \cong \mathbb{Z}$. The isomorphism sends $[\omega_n]$ to $n$, and every loop at $b$
is path homotopic to exactly one $\omega_n$.

Two things must be proved: that every loop is homotopic to some $\omega_n$ (so there are no other classes), and that
$\omega_m$ and $\omega_n$ are not homotopic when $m \ne n$ (so the classes are all different). The second is the hard
part, because it says that a homotopy cannot exist, and there are uncountably many candidate homotopies to rule out.
The trick is to find a number, attached to each loop, that cannot change during a homotopy.

### Unwinding the circle

Define the map

$$
p : \mathbb{R} \to S^1, \qquad p(x) = (\cos 2\pi x, \sin 2\pi x).
$$

Picture the real line as an infinitely long spring (a helix) sitting above the circle, and $p$ as squashing the spring
flat. Every whole number lands on $b$; every interval of length 1 wraps once around. Two numbers have the same image
exactly when they differ by a whole number:

$$
p(x) = p(y) \iff x - y \in \mathbb{Z}.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 230" role="img" aria-label="Above: the real line with marks at minus 1, 0, 1, 2 and 3. The segment from 0 to 2 is thick and orange, labelled the lift of the loop that goes twice around, from 0 to 2. Below: a circle with base point b on the right, and an arrow labelled p pointing down from the line to the circle.">
  <line x1="40" y1="50" x2="440" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <line x1="160" y1="50" x2="320" y2="50" stroke="#eea66f" stroke-width="6"/>
  <line x1="80" y1="42" x2="80" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <line x1="160" y1="42" x2="160" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <line x1="240" y1="42" x2="240" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <line x1="320" y1="42" x2="320" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <line x1="400" y1="42" x2="400" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="76" font-size="13" text-anchor="middle" fill="currentColor">-1</text>
  <text x="160" y="76" font-size="13" text-anchor="middle" fill="currentColor">0</text>
  <text x="240" y="76" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="320" y="76" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="400" y="76" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="240" y="30" font-size="12" text-anchor="middle" fill="currentColor">lift of the loop that goes twice around: from 0 to 2</text>
  <line x1="240" y1="88" x2="240" y2="118" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="234,112 246,112 240,124" fill="currentColor"/>
  <text x="252" y="108" font-size="13" fill="currentColor">p</text>
  <circle cx="240" cy="172" r="40" fill="none" stroke="#9cc9ea" stroke-width="4"/>
  <circle cx="280" cy="172" r="4" fill="currentColor"/>
  <text x="290" y="176" font-size="13" fill="currentColor">b</text>
  <text x="140" y="176" font-size="13" text-anchor="middle" fill="currentColor">the circle</text>
</svg>
</div>

The key property of $p$ is local. Take any point $z$ of the circle and let $U = S^1 \setminus \{-z\}$ be the circle
with the opposite point removed: an open arc. Pick $a$ with $p(a) = z$. Then

$$
p^{-1}(U) = \bigcup_{n \in \mathbb{Z}} \big(a + n - \tfrac12,\ a + n + \tfrac12\big),
$$

a disjoint union of open intervals, and $p$ maps each of these intervals **homeomorphically** onto $U$. (It is a
continuous bijection; its inverse is a continuous choice of angle, $\tfrac{1}{2\pi}$ times the angle measured within
a window of width $2\pi$ around $2\pi a$.) The intervals are called the **sheets** over $U$, and $U$ is said to be
**evenly covered**.

A **lift** of a map $f : Y \to S^1$ is a map $\tilde f : Y \to \mathbb{R}$ with $p \circ \tilde f = f$. For a path
$f$, a lift is a way of following the path on the spring: at each time, $\tilde f(s)$ is a number whose image is
$f(s)$, chosen continuously. It is a continuous angle function, measured in full turns.

### Lifting paths

**Lemma 14.2 (path lifting).** Let $f : I \to S^1$ be a path and $x_0 \in \mathbb{R}$ with $p(x_0) = f(0)$. There is
exactly one lift $\tilde f : I \to \mathbb{R}$ with $\tilde f(0) = x_0$.

*Proof.* **Uniqueness.** If $\tilde f$ and $\tilde g$ are two lifts with the same start, then for each $s$,
$p(\tilde f(s)) = p(\tilde g(s))$, so $\tilde f(s) - \tilde g(s)$ is an integer. A continuous function from the
connected space $I$ to $\mathbb{R}$ that only takes integer values is constant (its image is a connected subset of
$\mathbb{Z}$, so a single point; [Chapter 7](07-Connectedness.md)). The constant is $\tilde f(0) - \tilde g(0) = 0$.

**Existence.** Cover $S^1$ by two open arcs $U_1 = S^1 \setminus \{(-1, 0)\}$ and $U_2 = S^1 \setminus \{(1, 0)\}$,
both evenly covered. The sets $f^{-1}(U_1)$ and $f^{-1}(U_2)$ form an open cover of the compact metric space $I$. By
the **Lebesgue number lemma** ([Chapter 8](08-Compactness.md)) there is a $\delta > 0$ such that every subinterval of
length less than $\delta$ lies inside one of them. Choose $0 = s_0 < s_1 < \dots < s_m = 1$ with all gaps less than
$\delta$; then each $f([s_{i-1}, s_i])$ lies in $U_1$ or in $U_2$.

Build $\tilde f$ one piece at a time. Suppose it is already defined on $[0, s_{i-1}]$ (at the start, on $\{0\}$, by
$\tilde f(0) = x_0$). The piece $f([s_{i-1}, s_i])$ lies in some $U_j$. The point $\tilde f(s_{i-1})$ lies over
$f(s_{i-1}) \in U_j$, so it lies in exactly one sheet $V$ over $U_j$. Define

$$
\tilde f(s) = (p|_V)^{-1}\big(f(s)\big) \quad \text{for } s \in [s_{i-1}, s_i].
$$

This is continuous (a composite of continuous maps), lies over $f$, and agrees with the earlier definition at
$s_{i-1}$. By the pasting lemma, $\tilde f$ is now a continuous lift on $[0, s_i]$. After $m$ steps it is defined
on all of $I$. $\square$

**Worked example.** Lift $\omega_n$ starting at $0$. The guess $\tilde\omega_n(s) = ns$ works: it is continuous,
starts at $0$, and $p(ns) = (\cos 2\pi ns, \sin 2\pi ns) = \omega_n(s)$. By uniqueness it is **the** lift. It ends at
$n$. Check for $n = -1$: the lift runs from $0$ down to $-1$, one turn clockwise.

**Worked example.** Lift the half-circle path $h(s) = (\cos \pi s, \sin \pi s)$ from $b$ to $(-1, 0)$, starting at
$0$. The lift is $s / 2$, ending at $\tfrac12$. Starting instead at $3$, the lift is $3 + s/2$. Lifts with different
starting points over the same point differ by a constant integer.

### Lifting homotopies

**Lemma 14.3 (homotopy lifting).** Let $F : I \times I \to S^1$ be continuous and $x_0 \in \mathbb{R}$ with
$p(x_0) = F(0, 0)$. There is exactly one continuous $\tilde F : I \times I \to \mathbb{R}$ with $p \circ \tilde F = F$
and $\tilde F(0, 0) = x_0$. If $F$ is a path homotopy, so is $\tilde F$.

*Proof.* Uniqueness is as before: two lifts differ by a continuous integer-valued function on the connected square,
which is zero at a corner. For existence, apply the Lebesgue number lemma to the cover
$\{F^{-1}(U_1), F^{-1}(U_2)\}$ of the compact square: cut the square into an $m \times m$ grid of small squares
$R_{ij}$, each mapped by $F$ into $U_1$ or $U_2$. Lift the small squares one at a time, row by row from the bottom,
left to right in each row.

When it is the turn of $R_{ij}$, the lift is already defined on the part $L$ of its boundary shared with earlier
squares: its bottom edge, its left edge, or both (for the very first square, just the corner $(0,0)$). In every
case $L$ is connected. The lift on $L$ is continuous, so its image is a connected subset of $p^{-1}(U_j)$, the
disjoint union of the open sheets; hence it lies in a single sheet $V$. Define $\tilde F = (p|_V)^{-1} \circ F$ on
$R_{ij}$. It agrees with the existing lift on $L$, because both lie in $V$ over the same points and $p|_V$ is
one-to-one. Continuity of the whole lift follows from the pasting lemma (finitely many closed pieces).

Finally, suppose $F$ is a path homotopy, so $F(0, t)$ is the constant path at $F(0,0)$. Then $t \mapsto \tilde F(0, t)$
is a lift of a constant path, and the constant path at $x_0$ is another; by uniqueness of path lifts they agree, so
$\tilde F(0, t) = x_0$ for all $t$. The same argument at $s = 1$ shows that $\tilde F(1, t)$ is constant. $\square$

**Corollary 14.4.** If $f \simeq g$ are path homotopic paths in $S^1$, and $\tilde f$, $\tilde g$ are their lifts
starting at the same point, then $\tilde f(1) = \tilde g(1)$.

*Proof.* Lift a path homotopy $F$ from $f$ to $g$, starting at $\tilde f(0)$. The bottom edge $\tilde F(s, 0)$ is a
lift of $f$ starting at $\tilde f(0)$, so it is $\tilde f$; the left edge is constant, so the top edge $\tilde F(s, 1)$
is a lift of $g$ starting at $\tilde f(0)$, so it is $\tilde g$. The right edge is constant, so
$\tilde f(1) = \tilde F(1, 0) = \tilde F(1, 1) = \tilde g(1)$. $\square$

### The proof of Theorem 14.1

For a loop $f$ at $b$, let $\tilde f$ be its lift starting at $0$. Since $p(\tilde f(1)) = f(1) = b$, the endpoint
$\tilde f(1)$ is an integer. Define

$$
\deg : \pi_1(S^1, b) \to \mathbb{Z}, \qquad \deg[f] = \tilde f(1).
$$

This number is the **degree** or **winding number** of the loop: the net number of turns, anticlockwise counted
positive.

**Well defined.** By Corollary 14.4, homotopic loops give the same endpoint.

**Homomorphism.** Let $f, g$ be loops at $b$ with $\tilde f(1) = m$ and $\tilde g(1) = n$. The path $m + \tilde g$
(add $m$ to every value) is also a lift of $g$, because $p(m + x) = p(x)$; it starts at $m$. So the path
$\tilde f \cdot (m + \tilde g)$ is defined, starts at $0$, and lies over $f \cdot g$. By uniqueness it is the lift of
$f \cdot g$, and it ends at $m + n$. So $\deg([f][g]) = \deg[f] + \deg[g]$.

**Surjective.** $\deg[\omega_n] = n$, by the worked example.

**Injective.** Suppose $\deg[f] = 0$, so $\tilde f$ is a loop at $0$ in $\mathbb{R}$. The straight-line homotopy
$G(s, t) = (1 - t)\tilde f(s)$ is a path homotopy in $\mathbb{R}$ from $\tilde f$ to the constant loop at $0$. Then
$p \circ G$ is a path homotopy in $S^1$ from $p \circ \tilde f = f$ to the constant loop at $b$. So $[f] = 1$.

A bijective homomorphism is an isomorphism. Since $\deg[f] = \deg[\omega_n]$ for $n = \deg[f]$, injectivity also
shows $f \simeq \omega_n$: every loop is homotopic to exactly one standard loop. $\square$

The proof contains a principle worth stating. **The lift turns a question about homotopy, which is hard, into a
question about where a path in $\mathbb{R}$ ends, which is easy.** The real line is simply connected and has no
interesting loops; all the interest of the circle is in the many points of $\mathbb{R}$ lying over $b$.

### Degree of a map of the circle

Any continuous $h : S^1 \to S^1$ has a degree too. Lift the loop $s \mapsto h(p(s))$ (which may not be based at $b$)
to any $\tilde\gamma : I \to \mathbb{R}$ and set $\deg h = \tilde\gamma(1) - \tilde\gamma(0)$. This integer does not
depend on the choice of lift (two lifts differ by a constant), and it does not change if $h$ is deformed through a
homotopy of maps $S^1 \to S^1$ (lift the homotopy as in Lemma 14.3: the difference of the end values is a continuous
integer-valued function of $t$, hence constant). Examples:

- $z \mapsto z^n$ (in complex notation, $S^1 = \{z \in \mathbb{C} : |z| = 1\}$) has degree $n$;
- $z \mapsto \bar z$, reflection in the horizontal axis, has degree $-1$;
- a rotation $z \mapsto e^{i\theta}z$ has degree $1$, and a constant map has degree $0$.

Since homotopic maps have equal degrees, $z \mapsto \bar z$ is not homotopic to the identity, and $z \mapsto z^2$ is not
homotopic to $z \mapsto z^3$. Degree in higher dimensions is the subject of
[Chapter 17](17-Applications-of-Algebraic-Topology.md).

<figure class="play" data-play="winding"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The winding number, the integer that the fundamental group of the circle counts: it jumps only when the loop passes through a root.</figcaption></figure>

## 14.2 Covering spaces and the lifting lemmas

*Level: advanced; the classification at the end is expert, stated without proof.*

Nothing in the proofs of Lemmas 14.2 and 14.3 used anything special about $\mathbb{R}$ and $S^1$ except that every
point of the circle has an evenly covered neighbourhood. That suggests a definition.

**Definition.** A **covering map** is a continuous surjection $p : E \to B$ such that every point $b \in B$ has an open
neighbourhood $U$ that is **evenly covered**: $p^{-1}(U)$ is a union of disjoint open sets $V_\alpha$ (the **sheets**),
each of which $p$ maps homeomorphically onto $U$. The space $E$ is a **covering space** of $B$, and $p^{-1}(b)$ is the
**fibre** over $b$.

Above a small enough patch of $B$, the covering looks like a stack of copies of the patch. Globally the stack may be
twisted, as the spring is.

### Examples

1. **The spring.** $p : \mathbb{R} \to S^1$, with fibre $\mathbb{Z}$ over every point. Infinitely many sheets.
2. **The $n$-fold circle.** $p_n : S^1 \to S^1$, $p_n(z) = z^n$ (complex notation), for $n \ge 1$. The fibre over $1$
   is the $n$ roots of unity. Over a small arc around $w$, the preimage is $n$ small arcs around the $n$-th roots of $w$.
3. **The plane over the torus.** $p : \mathbb{R}^2 \to T^2 = S^1 \times S^1$, $p(x, y) = (p(x), p(y))$. The fibre is
   the integer lattice $\mathbb{Z}^2$. Picture the plane tiled by unit squares, each of which is wrapped onto the torus
   by the square-with-sides-glued picture of [Chapter 6](06-Building-New-Spaces.md).
4. **The sphere over the projective plane.** The real projective plane $\mathbb{R}P^2$ is the sphere $S^2$ with each
   pair of antipodal points $x$ and $-x$ glued into one point ([Chapter 6](06-Building-New-Spaces.md)). The quotient map
   $q : S^2 \to \mathbb{R}P^2$ is a 2-sheeted covering: a small open cap $C$ around $x$ (smaller than a hemisphere) is
   disjoint from its antipodal cap $-C$, and $q$ maps each of $C$ and $-C$ homeomorphically onto the same open set.
   The same works for $S^n \to \mathbb{R}P^n$.
5. **Trivial coverings.** For any space $B$ and discrete space $F$, the projection $B \times F \to B$ is a covering.
   Its sheets are untwisted, global copies of $B$.

**A non-example.** Restrict the spring to an interval: $p|_{(0, 1.5)} : (0, 1.5) \to S^1$. It is continuous, surjective
and a local homeomorphism. But no neighbourhood of $b = p(0) = p(1)$ is evenly covered: the preimage of a small arc
around $b$ is a whole interval around $1$, mapped homeomorphically, plus a half-interval $(0, \epsilon)$, which maps
onto only half the arc. Covering maps must not have "loose ends" like this.

### The lifting lemmas in general

**Theorem 14.5.** Let $p : E \to B$ be a covering map and $e_0 \in E$ with $p(e_0) = b_0$.

- **Path lifting.** Every path $f$ in $B$ starting at $b_0$ has a unique lift $\tilde f$ starting at $e_0$.
- **Homotopy lifting.** Every map $F : I \times I \to B$ with $F(0, 0) = b_0$ has a unique lift $\tilde F$ with
  $\tilde F(0, 0) = e_0$; if $F$ is a path homotopy, so is $\tilde F$.

*Proof.* Existence is word for word the proofs of Lemmas 14.2 and 14.3, using a cover of $B$ by evenly covered open
sets in place of $U_1, U_2$. Uniqueness needs a different argument, because "two lifts differ by an integer" has no
meaning in general. Let $\tilde f$ and $\tilde g$ be lifts of the same map from a connected space $Y$ (here $I$ or
$I \times I$) that agree at one point. Let $A = \{y : \tilde f(y) = \tilde g(y)\}$. For any $y \in Y$, take an evenly
covered $U$ around $f(y)$, and the sheets $V$ and $V'$ containing $\tilde f(y)$ and $\tilde g(y)$. By continuity there
is a neighbourhood $N$ of $y$ that $\tilde f$ maps into $V$ and $\tilde g$ maps into $V'$. If $y \in A$, then $V = V'$,
and since $p$ is one-to-one on $V$, $\tilde f = \tilde g$ on $N$: so $A$ is open. If $y \notin A$, then $V \ne V'$
(two different points over the same point of $U$ lie in different sheets), the sheets are disjoint, and
$\tilde f \ne \tilde g$ on $N$: so the complement of $A$ is open. As $Y$ is connected and $A$ is not empty, $A = Y$.
$\square$

### What coverings tell us about $\pi_1$

**Proposition 14.6.** If $p : (E, e_0) \to (B, b_0)$ is a covering, then $p_* : \pi_1(E, e_0) \to \pi_1(B, b_0)$ is
injective.

*Proof.* Suppose $\tilde f$ is a loop at $e_0$ whose image $f = p \circ \tilde f$ is homotopic to the constant loop, by
a path homotopy $F$. Lift $F$ to $\tilde F$ starting at $e_0$. Its bottom edge is a lift of $f$ starting at $e_0$, so it
is $\tilde f$; its other three edges are lifts of constant paths, so they are constant at $e_0$. Thus $\tilde F$ is a
path homotopy from $\tilde f$ to the constant loop. $\square$

So a covering space's group is (isomorphic to) a subgroup of the base's group. For example the $n$-fold covering
$p_n$ of the circle has $p_{n*}[\omega] = [\omega_n]$, so its image is $n\mathbb{Z}$, a subgroup of index $n$; and $n$
is also the number of sheets. That is not a coincidence:

**Proposition 14.7 (lifting correspondence).** Let $p : E \to B$ be a covering with $E$ path connected, and
$p(e_0) = b_0$. Define $\Phi : \pi_1(B, b_0) \to p^{-1}(b_0)$ by $\Phi[f] = \tilde f(1)$, where $\tilde f$ is the lift of
$f$ starting at $e_0$. Then $\Phi$ is well defined and surjective. If $E$ is simply connected, $\Phi$ is a bijection.

*Proof.* Well defined: homotopic loops have lifts with the same endpoint, by the argument of Corollary 14.4 (lift the
homotopy). Surjective: for $e \in p^{-1}(b_0)$, take a path $\tilde f$ in $E$ from $e_0$ to $e$ (path connected); then
$f = p \circ \tilde f$ is a loop at $b_0$ whose lift is $\tilde f$, so $\Phi[f] = e$. Injective when $E$ is simply
connected: if $\tilde f(1) = \tilde g(1)$, then $\tilde f$ and $\tilde g$ are paths in $E$ with the same ends, so they are
path homotopic (Proposition 13.10); pushing the homotopy down by $p$ gives $f \simeq g$. $\square$

More generally, without simple connectivity, $\Phi$ induces a bijection from the cosets of $p_*\pi_1(E, e_0)$ in
$\pi_1(B, b_0)$ to the fibre, so **the number of sheets equals the index of the subgroup** (Hatcher, Proposition 1.32).

**Corollary 14.8.** $\pi_1(\mathbb{R}P^2) \cong \mathbb{Z}/2$, and more generally $\pi_1(\mathbb{R}P^n) \cong \mathbb{Z}/2$
for $n \ge 2$.

*Proof.* The covering $S^n \to \mathbb{R}P^n$ has two points in each fibre, and $S^n$ is simply connected for $n \ge 2$
(Theorem 13.12). By Proposition 14.7, $\pi_1(\mathbb{R}P^n)$ has exactly two elements. The only group with two elements is
$\mathbb{Z}/2$. $\square$

The nontrivial element is easy to draw: on the sphere, take a path from the north pole to the south pole. In
$\mathbb{R}P^2$ the two poles are the same point, so the path becomes a loop. It is not null-homotopic, because its lift
does not close up; but going around it twice gives a loop whose lift runs north to south and then (applying the
antipodal map to the lift) south back to north, which closes up, so the double loop is trivial. A loop that you cannot
shrink but whose double you can is a real phenomenon. There is a physical illustration often called the plate trick
or belt trick, related to the fact that the space of rotations of three-dimensional space is $\mathbb{R}P^3$, so its
fundamental group is also $\mathbb{Z}/2$.

**Worked example: the torus again.** For $\mathbb{R}^2 \to T^2$ the fibre over the base point is $\mathbb{Z}^2$ and
$\mathbb{R}^2$ is simply connected, so $\Phi$ is a bijection $\pi_1(T^2) \to \mathbb{Z}^2$; and as in Theorem 14.1 it is a
homomorphism (translate lifts by lattice vectors). This agrees with the product formula of Chapter 13.

### Deck transformations and the universal cover

A **deck transformation** of a covering $p : E \to B$ is a homeomorphism $\tau : E \to E$ with $p \circ \tau = p$: a
symmetry of the stack that moves each point within its own fibre. They form a group under composition.

- For the spring $\mathbb{R} \to S^1$ the deck transformations are the translations $x \mapsto x + k$, $k \in \mathbb{Z}$: the group $\mathbb{Z}$.
- For $\mathbb{R}^2 \to T^2$ they are the lattice translations: $\mathbb{Z}^2$.
- For $S^2 \to \mathbb{R}P^2$ they are the identity and the antipodal map: $\mathbb{Z}/2$.
- For $p_n : S^1 \to S^1$ they are the rotations by multiples of $2\pi/n$: $\mathbb{Z}/n$.

In the first three examples the covering space is simply connected, and the deck group is the fundamental group of the
base. A simply connected covering space is called a **universal cover**, and the pattern holds in general:

**Theorem 14.9 (statement).** Let $B$ be path connected, locally path connected and semilocally simply connected (every
point has a neighbourhood in which every loop is null-homotopic in $B$; manifolds and graphs have this property). Then:

- $B$ has a universal cover $\tilde B \to B$, unique up to isomorphism of coverings;
- the deck transformation group of $\tilde B \to B$ is isomorphic to $\pi_1(B)$;
- (the **Galois correspondence**) connected coverings of $B$, up to isomorphism, correspond to subgroups of $\pi_1(B, b_0)$
  up to conjugacy, a covering $E$ corresponding to the subgroup $p_*\pi_1(E)$.

The proof is in Hatcher, Section 1.3 (Theorems 1.38 and 1.39 and Proposition 1.40), and takes about ten pages. The name
"Galois" is apt: just as subfields of a field extension correspond to subgroups of a Galois group
([Algebra Chapter 20](../algebra/20-Galois-Theory.md)), covering spaces correspond to subgroups of $\pi_1$, and bigger
covers correspond to smaller subgroups.

A useful part of the theory that can be stated simply is the **lifting criterion** (Hatcher, Proposition 1.33): if $Y$
is path connected and locally path connected, a map $\varphi : (Y, y_0) \to (B, b_0)$ lifts to $(E, e_0)$ exactly when
$\varphi_*\pi_1(Y, y_0) \subseteq p_*\pi_1(E, e_0)$. In particular **every map from a simply connected space lifts.** For
instance every map $S^2 \to S^1$ lifts to $\mathbb{R}$, and since $\mathbb{R}$ is contractible, every map $S^2 \to S^1$
is homotopic to a constant.

## 14.3 The fundamental theorem of algebra

*Level: advanced.*

**Theorem 14.10.** Every polynomial of degree $n \ge 1$ with complex coefficients has a complex root.

The algebra book proves this with a minimum-modulus argument ([Algebra Chapter 12](../algebra/12-The-Fundamental-Theorem-of-Algebra.md))
and describes the winding-number picture in [section 12.4](../algebra/12-The-Fundamental-Theorem-of-Algebra.md#124-the-winding-number-picture).
Here is that picture turned into a proof, using only Theorem 14.1.

The idea: watch where the circle of radius $r$ goes under the polynomial. For huge $r$, the polynomial looks like its
top term $z^n$, so the image curve winds $n$ times around $0$. For $r = 0$ the image is a single point, winding $0$
times. If the polynomial never vanished, the curve could be shrunk from one to the other without crossing $0$, and the
winding number could not change. Since $n \ne 0$, it must cross $0$ somewhere.

*Proof.* Dividing by the top coefficient, we may assume $P(z) = z^n + a_{n-1}z^{n-1} + \dots + a_1 z + a_0$. Suppose,
for a contradiction, that $P(z) \ne 0$ for all $z \in \mathbb{C}$.

**Step 1: a family of loops.** For each $r \ge 0$ define a loop in the unit circle at $1$:

$$
f_r(s) = \frac{P(re^{2\pi i s}) / |P(re^{2\pi i s})|}{P(r)/|P(r)|}.
$$

The numerator is the direction of $P$ at the point $re^{2\pi i s}$; dividing by the direction at $s = 0$ makes
$f_r(0) = f_r(1) = 1$. Everything is continuous in $(r, s)$ because $P$ never vanishes.

**Step 2: all these loops are trivial.** For a fixed $r$, the map $F(s, t) = f_{tr}(s)$ is a path homotopy from
$f_0$ to $f_r$ (each $f_{tr}$ is a loop at $1$). And $f_0$ is constant, because at $r = 0$ the numerator is
$P(0)/|P(0)|$ for every $s$. So every $f_r$ is null-homotopic: $\deg[f_r] = 0$.

**Step 3: for large $r$ the loop winds $n$ times.** Fix $r > \max(1, |a_0| + |a_1| + \dots + |a_{n-1}|)$. For
$|z| = r$,

$$
|a_{n-1}z^{n-1} + \dots + a_0| \le \big(|a_{n-1}| + \dots + |a_0|\big) r^{n-1} < r \cdot r^{n-1} = |z^n|,
$$

using $r^k \le r^{n-1}$ for $k \le n-1$, which holds because $r > 1$. Now consider
$P_t(z) = z^n + t(a_{n-1}z^{n-1} + \dots + a_0)$ for $t \in [0, 1]$. On the circle $|z| = r$ the inequality shows
$|P_t(z)| \ge |z^n| - t|a_{n-1}z^{n-1} + \dots| > 0$, so no $P_t$ vanishes there. Replacing $P$ by $P_t$ in the
formula of Step 1 gives loops $g_t$ at $1$ that vary continuously with $t$: a path homotopy from $g_0$ to $g_1 = f_r$. And
$P_0(z) = z^n$, so $g_0(s) = (re^{2\pi is})^n / r^n = e^{2\pi i n s}$, which is $\omega_n$. So $\deg[f_r] = n$.

Steps 2 and 3 give $0 = n$, contradicting $n \ge 1$. $\square$

**Worked example.** Take $P(z) = z^2 - 3z + 2 = (z - 1)(z - 2)$. Its image of the circle of radius $r$ winds around $0$
as many times as there are roots inside the circle (this is the **argument principle** of complex analysis, which we do
not prove here). So the winding number is $0$ for $r = 0.5$, $1$ for $r = 1.5$ and $2$ for $r = 3$. The proof above
uses only the two extremes, $r = 0$ and $r$ large.

### Try it in Python

```python
import cmath, math

def winding_of_poly(coeffs, r, n=4000):
    """Turns made by P(r e^{2 pi i s}) around 0, for s from 0 to 1."""
    def P(z):
        v = 0
        for c in coeffs:          # coefficients from the top degree down
            v = v * z + c
        return v
    total, prev = 0.0, P(r)
    for k in range(1, n + 1):
        cur = P(r * cmath.exp(2j * math.pi * k / n))
        total += cmath.phase(cur / prev)   # small change of angle
        prev = cur
    return round(total / (2 * math.pi))

for r in (0.5, 1.5, 3):
    print(r, winding_of_poly([1, -3, 2], r))   # 0, 1, 2
```

Try `[1, 0, -2, 2]`, that is $z^3 - 2z + 2$: its roots have sizes about $1.06$, $1.06$ and $1.77$, so the winding number
is $0$ for $r = 1$, $2$ for $r = 1.5$ and $3$ for $r = 2$.

**History.** Gauss's doctoral dissertation of 1799 gave a proof of the fundamental theorem of algebra that rests on a
claim about how algebraic curves cross a disc; by modern standards that claim needed its own proof, which was supplied
by Alexander Ostrowski in 1920. The argument above is a descendant of the same geometric idea, with the topology made
rigorous by the fundamental group.

## 14.4 The Brouwer fixed point theorem in two dimensions

*Level: advanced.*

Stir a cup of coffee gently, so the surface moves as a continuous sheet, and let it settle. Crumple a sheet of paper
and lay it back on top of where it lay before, without tearing it. Lay a paper map of a park on the grass inside that
park. In each case some point ends up where it started: in the last case, some point of the map sits exactly on the
place it represents. All of these are idealised versions of one theorem, and the last is the most honest (the paper map
really is a continuous map of a region into itself).

A **fixed point** of a map $f : X \to X$ is a point $x$ with $f(x) = x$. Write $D^2 = \{x \in \mathbb{R}^2 : |x| \le 1\}$
for the closed disc, with boundary circle $S^1$.

**The one-dimensional case.** Every continuous $f : [-1, 1] \to [-1, 1]$ has a fixed point. Proof: $g(x) = f(x) - x$
has $g(-1) = f(-1) + 1 \ge 0$ and $g(1) = f(1) - 1 \le 0$, so by the intermediate value theorem
([Chapter 7](07-Connectedness.md)) $g$ has a zero. In two dimensions there is no intermediate value theorem to call on,
and the fundamental group takes its place.

**Theorem 14.11 (no retraction).** There is no retraction $r : D^2 \to S^1$, that is, no continuous map of the disc onto
its boundary circle that fixes every point of the circle.

*Proof.* If $r$ existed, then by Proposition 13.18 the inclusion $i : S^1 \to D^2$ would induce an injective map
$i_* : \pi_1(S^1) \to \pi_1(D^2)$. But $\pi_1(S^1) \cong \mathbb{Z}$ and $\pi_1(D^2)$ is trivial, and there is no
injective map from an infinite group to a one-element group. $\square$

Intuitively: you cannot press a drum skin flat onto its rim without tearing it.

**Theorem 14.12 (Brouwer, dimension 2).** Every continuous map $f : D^2 \to D^2$ has a fixed point.

*Proof.* Suppose $f(x) \ne x$ for every $x$. For each $x$, draw the ray that starts at $f(x)$ and passes through $x$,
and let $r(x)$ be the point where it leaves the disc. We show $r$ is a retraction of $D^2$ onto $S^1$, contradicting
Theorem 14.11.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 260" role="img" aria-label="A disc. Inside it a point f of x and a point x. A ray starts at f of x, passes through x and meets the boundary circle at the point r of x.">
  <circle cx="150" cy="130" r="110" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="170" x2="227.8" y2="52.2" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="110" cy="170" r="4" fill="currentColor"/>
  <circle cx="160" cy="120" r="4" fill="currentColor"/>
  <circle cx="227.8" cy="52.2" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="190" font-size="13" fill="currentColor">f(x)</text>
  <text x="168" y="134" font-size="13" fill="currentColor">x</text>
  <text x="236" y="48" font-size="13" fill="currentColor">r(x)</text>
</svg>
</div>

The point $(227.8, 52.2)$ in the picture is where the ray meets the circle: with centre $(150, 130)$ and radius $110$,
the ray from $(110, 170)$ through $(160, 120)$ has direction $(1, -1)/\sqrt2$, and solving gives that point. Now the
formula. Put $u = x - f(x) \ne 0$. The ray is $x + tu$ for $t \ge 0$, and it meets the circle when
$|x + tu|^2 = 1$, that is,

$$
|u|^2 t^2 + 2(x \cdot u)\,t + |x|^2 - 1 = 0 .
$$

Since $|x|^2 - 1 \le 0$, this quadratic has a root $t \ge 0$, namely

$$
t(x) = \frac{-(x \cdot u) + \sqrt{(x \cdot u)^2 + |u|^2(1 - |x|^2)}}{|u|^2},
$$

and $r(x) = x + t(x)\,u$. Because $u$ never vanishes, $t(x)$ is a continuous function of $x$, and so is $r$. If
$|x| = 1$, then $x \cdot u = 1 - x \cdot f(x) \ge 0$, because $x \cdot f(x) \le |x||f(x)| \le 1$; so the square root is
$|x \cdot u| = x \cdot u$ and $t(x) = 0$, giving $r(x) = x$. Thus $r$ fixes the circle, and it maps the disc into the
circle by construction. This is a retraction, which cannot exist. $\square$

The theorem applies to any space homeomorphic to the disc: a square, a triangle, a filled-in ellipse, a pancake.

**Worked example.** $f(x, y) = \big(\tfrac{y}{2}, \tfrac{x + 1}{2}\big)$ maps the disc into itself: if
$x^2 + y^2 \le 1$ then $|f|^2 = \tfrac14\big(y^2 + x^2 + 2x + 1\big) \le \tfrac14(1 + 2 + 1) = 1$. The fixed point solves
$x = y/2$ and $y = (x + 1)/2$: substituting, $y = y/4 + 1/2$, so $y = \tfrac23$ and $x = \tfrac13$. Check:
$f(\tfrac13, \tfrac23) = (\tfrac13, \tfrac23)$. Here we could solve the equations; the theorem says a fixed point exists
even when we cannot.

**Where the hypotheses matter.**

- **Not closed:** on the open disc, $f(x) = \tfrac12\big(x + (1, 0)\big)$ maps the open disc into itself (since
  $|x + (1, 0)| < 2$), but its only fixed point in the plane, $(1, 0)$, is not in the open disc.
- **A hole:** on the annulus $1 \le |x| \le 2$, a rotation by any angle that is not a multiple of $2\pi$ has no fixed
  point. The analogue of Theorem 14.11 is false there: the annulus does retract onto its outer circle (by
  $x \mapsto 2x/|x|$), since its own fundamental group is already $\mathbb{Z}$.
- **Not continuous:** reflecting the left half of the disc and shifting the right half can avoid all fixed points; the
  ray construction needs continuity.

**The theorem is not constructive.** The proof is by contradiction and gives no way to find the point. For computing,
there is a combinatorial route: **Sperner's lemma** (Emanuel Sperner, 1928) about colourings of triangulated triangles
gives a proof of Brouwer's theorem that also yields an algorithm for approximate fixed points. Finding them can still be
slow in general; this is an active topic in computational complexity.

**History.** L. E. J. Brouwer published the theorem for all dimensions in 1912, in the same years in which he proved the
invariance of dimension ([Chapter 11](11-Manifolds.md)). An equivalent statement had appeared earlier, in work of Piers
Bohl in 1904.
Brouwer's theorem in all dimensions is proved with homology in [Chapter 17](17-Applications-of-Algebraic-Topology.md).
John Nash's 1951 paper "Non-cooperative games" used Brouwer's theorem to prove that equilibria exist in finite games.

## 14.5 The Borsuk-Ulam theorem in two dimensions

*Level: advanced.*

On a great circle of a planet, say the equator of Mars, think of the temperature $T$ as a continuous function of the
position. Is there always a pair of **antipodal** points (exact opposites) with the same temperature?

Yes, and the proof is a one-liner. Parametrise the equator by angle and put $g(\theta) = T(\theta) - T(\theta + \pi)$.
Then $g(\theta + \pi) = -g(\theta)$. So either $g(0) = 0$, or $g(0)$ and $g(\pi)$ have opposite signs and the
intermediate value theorem gives a zero in between. A zero of $g$ is an antipodal pair with equal temperatures.

The two-dimensional version asks for more: two quantities, on the whole sphere.

**Theorem 14.13 (Borsuk-Ulam, dimension 2).** For every continuous map $f : S^2 \to \mathbb{R}^2$ there is a point
$x \in S^2$ with $f(x) = f(-x)$.

The physical reading: if temperature and air pressure at the surface of a planet, idealised as a sphere, are continuous
functions of position at a given instant, then at that instant there are two antipodal points with the same temperature
**and** the same pressure. For Mars this is an honest mathematical statement about an idealised model: real fields are
measured on a grid and change with time, so the theorem says that the continuous model has such a pair at each instant,
not where it is.

The proof turns on a lemma about the circle. A map $h : S^1 \to S^1$ is **odd** (or antipode-preserving) if
$h(-z) = -h(z)$ for all $z$. The identity is odd; so is $z \mapsto z^3$ (in complex notation, $(-z)^3 = -z^3$); the map
$z \mapsto z^2$ is not.

**Lemma 14.14.** An odd map $h : S^1 \to S^1$ has odd degree. In particular it is not homotopic to a constant map, and
it does not extend to a continuous map of the disc $D^2 \to S^1$.

*Proof.* Let $\gamma(s) = h(e^{2\pi is})$ and let $\tilde\gamma : I \to \mathbb{R}$ be a lift, so
$\gamma(s) = p(\tilde\gamma(s))$, writing $p(x) = e^{2\pi ix}$ for the spring. Oddness says
$\gamma(s + \tfrac12) = -\gamma(s)$ for $0 \le s \le \tfrac12$. Since $-1 = e^{i\pi} = p(\tfrac12)$, both
$\tilde\gamma(s + \tfrac12)$ and $\tilde\gamma(s) + \tfrac12$ lie over the same point. So

$$
\tilde\gamma(s + \tfrac12) - \tilde\gamma(s) = \tfrac12 + q(s), \qquad q(s) \in \mathbb{Z} .
$$

The function $q$ is continuous on the connected interval $[0, \tfrac12]$ and integer valued, so it is a constant $q$.
Then

$$
\deg h = \tilde\gamma(1) - \tilde\gamma(0) = \big[\tilde\gamma(1) - \tilde\gamma(\tfrac12)\big] + \big[\tilde\gamma(\tfrac12) - \tilde\gamma(0)\big] = \big(\tfrac12 + q\big) + \big(\tfrac12 + q\big) = 2q + 1,
$$

using the formula at $s = \tfrac12$ and at $s = 0$. This is odd, so not $0$. A map homotopic to a constant has degree $0$.
If $h$ extended to $H : D^2 \to S^1$, then $h_t(z) = H(tz)$ would be a homotopy from the constant map $h_0 = H(0)$ to
$h_1 = h$, so again $\deg h = 0$. $\square$

Check with $z \mapsto z^3$: the lift is $\tilde\gamma(s) = 3s$, and $\tilde\gamma(s + \tfrac12) - \tilde\gamma(s) = \tfrac32 = \tfrac12 + 1$,
so $q = 1$ and the degree is $3 = 2 \cdot 1 + 1$.

*Proof of Theorem 14.13.* Suppose $f(x) \ne f(-x)$ for every $x$. Then

$$
g(x) = \frac{f(x) - f(-x)}{|f(x) - f(-x)|}
$$

is a continuous map $S^2 \to S^1$, and it is odd: $g(-x) = -g(x)$. Restrict $g$ to the equator
$\{(x_1, x_2, 0)\} \cong S^1$; the restriction $h$ is still odd, so by Lemma 14.14 it has odd degree. But the equator is
the boundary of the upper hemisphere $\{x \in S^2 : x_3 \ge 0\}$, which is homeomorphic to the disc $D^2$ by vertical
projection $(x_1, x_2, x_3) \mapsto (x_1, x_2)$, and $g$ is defined on the whole hemisphere. So $h$ extends to a map of the
disc into $S^1$, which Lemma 14.14 forbids. $\square$

### Consequences

**No sphere in the plane.** There is no continuous one-to-one map $S^2 \to \mathbb{R}^2$: by Borsuk-Ulam it would send
some $x$ and $-x$ to the same point. So no subset of the plane is homeomorphic to the sphere. This is one honest reason
why **no flat map of a whole planet can be continuous and one-to-one**: every world map tears the sphere somewhere (at
the date line, at the poles) or sends different places to the same point. [Geometry Chapter 16](../geometry/16-Spherical-Geometry.md#165-maps-why-no-flat-map-is-perfect)
(section 16.5) explains the different, metric reason why no flat map preserves distances even on a small region.

**Three closed sets (Lusternik-Schnirelmann, dimension 2).** If the sphere is covered by three closed sets
$A_1, A_2, A_3$, then one of them contains a pair of antipodal points.

*Proof.* Let $d(x, A)$ be the distance from $x$ to the set $A$, a continuous function. Apply Borsuk-Ulam to
$f(x) = (d(x, A_1), d(x, A_2))$: there is $x$ with $d(x, A_1) = d(-x, A_1)$ and $d(x, A_2) = d(-x, A_2)$. If
$d(x, A_1) = 0$, then $x$ and $-x$ are both at distance $0$ from the closed set $A_1$, so both lie in it. Likewise for
$A_2$. Otherwise neither $x$ nor $-x$ is in $A_1 \cup A_2$, so both are in $A_3$. $\square$

The number three is sharp: a sphere can be covered by four closed sets with no antipodal pair in any of them (the four
faces of a tetrahedron projected radially onto the sphere work, since each face is smaller than a hemisphere). Both the
covering and the Borsuk-Ulam theorem generalise to $S^n$ with $n + 1$ and $n + 2$ sets; see
[Chapter 17](17-Applications-of-Algebraic-Topology.md).

**No odd map from the sphere to the circle.** The proof showed that there is no continuous odd $g : S^2 \to S^1$. That
statement is in fact equivalent to Theorem 14.13, and it is the form that generalises: there is no odd map
$S^n \to S^{n-1}$.

**History.** The theorem is named after Karol Borsuk, who proved it in all dimensions in a 1933 paper, and Stanislaw
Ulam, who had proposed the statement. Lazar Lusternik and Lev Schnirelmann proved the covering version in 1930. The ham
sandwich theorem, which slices three objects in half with one plane, is one of its best-known consequences; it appears in
[Chapter 17](17-Applications-of-Algebraic-Topology.md).

## Check yourself

??? question "1. Find the lift starting at $0$ of the path $f(s) = (\cos 3\pi s, \sin 3\pi s)$ in $S^1$. Is $f$ a loop?"

    $\tilde f(s) = \tfrac32 s$: it is continuous, starts at $0$, and $p(\tfrac32 s) = (\cos 3\pi s, \sin 3\pi s)$.
    It ends at $\tfrac32$, not an integer, so $f(1) = (\cos 3\pi, \sin 3\pi) = (-1, 0) \ne b$: $f$ is not a loop. It
    goes one and a half times around.

??? question "2. What is the degree of $h(z) = z^2\bar z^5$ on the unit circle (complex notation)?"

    On $|z| = 1$, $\bar z = z^{-1}$, so $h(z) = z^{2 - 5} = z^{-3}$. Its loop $e^{-6\pi is}$ lifts to $-3s$, so the degree
    is $-3$.

??? question "3. Show that $\deg(g \circ h) = \deg g \cdot \deg h$ for $g(z) = z^m$ and $h(z) = z^n$, and that the identity map of the circle is not homotopic to a constant."

    $g \circ h(z) = (z^n)^m = z^{mn}$, whose degree is $mn$. The identity has degree $1$ and a constant map has degree $0$;
    homotopic maps have equal degrees, so they are not homotopic.

??? question "4. For the covering $p_3(z) = z^3$ of the circle, find $p_{3*}\pi_1(S^1)$, the fibre over $1$, and the deck group."

    $p_{3*}[\omega] = [\omega_3]$, so the image is $3\mathbb{Z}$, of index $3$. The fibre is the three cube roots of unity
    $1, e^{2\pi i/3}, e^{4\pi i/3}$, three points, matching the index. The deck transformations are the rotations by
    $0$, $2\pi/3$ and $4\pi/3$ (each satisfies $(e^{2\pi ik/3}z)^3 = z^3$), a group $\mathbb{Z}/3$.

??? question "5. Show that the 2-sheeted covering $p_2(z) = z^2$ of the circle is not a trivial covering, that is, not the same as $S^1 \times \{1, 2\} \to S^1$."

    A homeomorphism over $S^1$ between the two would be a homeomorphism between their total spaces. The total space of
    $p_2$ is a circle, which is connected; $S^1 \times \{1, 2\}$ is two disjoint circles, which is not. So they are
    different coverings, although both have two points in every fibre: the stack of sheets is twisted.

??? question "6. For $P(z) = z^2 - 3z + 2$, what does the proof of 14.3 need $r$ to be, and what are the winding numbers of $P$ on circles of radius 0.5, 1.5 and 3?"

    The proof uses any $r > \max(1, |{-3}| + |2|) = 5$. The winding numbers count the roots inside (roots $1$ and $2$):
    $0$, $1$ and $2$. (The Python snippet in 14.3 confirms these.)

??? question "7. Find the fixed point of $f(x, y) = \big(\tfrac{x + y}{3}, \tfrac{x - y}{3} + \tfrac12\big)$ on the disc, after checking that $f$ maps the disc into itself."

    The distance from $f(x, y)$ to $(0, \tfrac12)$ is $\tfrac13|(x + y, x - y)| = \tfrac13\sqrt{2(x^2 + y^2)} \le \tfrac{\sqrt2}{3} \approx 0.471$.
    So $f$ lands within $0.471$ of $(0, 0.5)$, and every such point is at distance at most $0.5 + 0.471 = 0.971 < 1$ from
    the origin. Fixed point: $3x = x + y$ gives $y = 2x$; then $3y = x - y + \tfrac32$ gives $6x = -x + \tfrac32$, so
    $x = \tfrac{3}{14}$ and $y = \tfrac37$. Check: $\tfrac13(\tfrac{3}{14} + \tfrac{6}{14}) = \tfrac{3}{14}$ and
    $\tfrac13(\tfrac{3}{14} - \tfrac{6}{14}) + \tfrac12 = -\tfrac1{14} + \tfrac7{14} = \tfrac37$.

??? question "8. Give a continuous map of the annulus $1 \le |x| \le 2$ to itself with no fixed point, and say which steps of the proof of Brouwer's theorem fail for it."

    The half turn $x \mapsto -x$ has no fixed point in the annulus (its only fixed point in the plane is the origin).
    Two steps fail. The ray from $f(x)$ through $x$ may cross the hole, so "the point where it leaves" can jump and is no
    longer continuous; the quadratic formula used convexity of the disc. And the fact behind Theorem 14.11, a trivial
    $\pi_1$ for the whole space against $\mathbb{Z}$ for its rim, has no analogue: the annulus has $\pi_1 \cong \mathbb{Z}$
    and retracts onto its outer circle by $x \mapsto 2x/|x|$.

??? question "9. Prove that every continuous map $S^2 \to S^1$ is homotopic to a constant, using the lifting criterion."

    $S^2$ is simply connected, path connected and locally path connected, so any $\varphi : S^2 \to S^1$ lifts to
    $\tilde\varphi : S^2 \to \mathbb{R}$ with $p \circ \tilde\varphi = \varphi$. Then $H(x, t) = p\big((1 - t)\tilde\varphi(x)\big)$
    is a homotopy from $\varphi$ to the constant map at $p(0) = b$.

??? question "10. Show that $\pi_1(\mathbb{R}P^2)$ has an element $a$ with $a \ne 1$ and $a^2 = 1$, by describing loops and their lifts to the sphere."

    Let $\tilde f$ be a path on $S^2$ from the north pole $N$ to the south pole $S = -N$ (a half meridian), and $f = q \circ \tilde f$,
    a loop in $\mathbb{R}P^2$. Its lift starting at $N$ ends at $S \ne N$, so by Proposition 14.7 $[f] \ne 1$. The lift of
    $f \cdot f$ starting at $N$ is $\tilde f$ followed by the lift of $f$ starting at $S$, which is $-\tilde f$ (the
    antipodal map is a deck transformation), ending at $-S = N$. The lift is closed, so $[f]^2 = 1$ (Proposition 14.7 is
    a bijection since $S^2$ is simply connected, and the identity also has a closed lift).

??? question "11. Using Borsuk-Ulam, show that at any instant there is a pair of antipodal points on Mars (idealised as a sphere with continuous fields) with equal temperature and equal wind speed. Can you add a third quantity?"

    Apply Theorem 14.13 to $f = (\text{temperature}, \text{wind speed}) : S^2 \to \mathbb{R}^2$. With three quantities the
    map goes to $\mathbb{R}^3$, and there the conclusion can fail: the inclusion $S^2 \to \mathbb{R}^3$, $x \mapsto x$,
    has $f(x) \ne f(-x)$ for every $x$. Two quantities on a two-dimensional sphere is exactly the right count.

??? question "12. Let $h(z) = z^2$ on the circle. Is it odd? Find a continuous map $g : S^1 \to S^1$ that is even ($g(-z) = g(z)$) and show its degree is even."

    $h(-z) = z^2 = h(z)$, so $h$ is even, not odd. In general for even $g$, the lift satisfies
    $\tilde\gamma(s + \tfrac12) - \tilde\gamma(s) = q$, an integer constant, so $\deg g = 2q$: even. For $h$, the lift
    is $2s$, $q = 1$, degree $2$.

## What you learned

- The spring $p(x) = (\cos 2\pi x, \sin 2\pi x)$ unwinds the circle; paths and homotopies lift uniquely once a
  starting point is chosen, by a Lebesgue number argument.
- The endpoint of the lift of a loop is its degree, and it gives the isomorphism $\pi_1(S^1) \cong \mathbb{Z}$.
- A covering space is evenly covered over small patches; the lifting lemmas hold for every covering, $p_*$ is
  injective, and the fibre measures the index of $p_*\pi_1(E)$.
- A simply connected cover computes $\pi_1$ by counting a fibre: $\pi_1(\mathbb{R}P^n) \cong \mathbb{Z}/2$ for $n \ge 2$;
  universal covers and the Galois correspondence organise all coverings.
- The circle of radius $r$ under a polynomial winds $0$ times for small $r$ and $n$ times for large $r$, so the
  polynomial has a root.
- No retraction of the disc onto its rim exists, so every continuous self-map of the disc has a fixed point.
- An odd map of the circle has odd degree, so every continuous map $S^2 \to \mathbb{R}^2$ sends some antipodal pair to
  the same point.

**Next:** [Chapter 15](15-Van-Kampen-and-Surfaces.md) shows how to compute the fundamental group of a space glued from
pieces, with free groups and the Seifert-van Kampen theorem, and uses it on surfaces and knots.

## Further reading

- Allen Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, Sections 1.1 and 1.3.
- James R. Munkres, *Topology*, 2nd edition, Prentice Hall, 2000, Chapters 9 and 13.
- William Fulton, *Algebraic Topology: A First Course*, Springer, 1995, Parts I to III (winding numbers first, then
  coverings).
- Jiří Matoušek, *Using the Borsuk-Ulam Theorem*, Springer, 2003.
- Karol Borsuk, "Drei Sätze über die n-dimensionale euklidische Sphäre", *Fundamenta Mathematicae* 20, 1933.
- John Nash, "Non-cooperative games", *Annals of Mathematics* 54, 1951.
- On this site: [Algebra Chapter 12, The fundamental theorem of algebra](../algebra/12-The-Fundamental-Theorem-of-Algebra.md),
  [Algebra Chapter 9, Complex numbers](../algebra/09-Complex-Numbers.md),
  [Algebra Chapter 20, Galois theory](../algebra/20-Galois-Theory.md),
  [Geometry Chapter 16, Spherical geometry](../geometry/16-Spherical-Geometry.md), the
  [Calculus book](../calculus/index.md) for the intermediate value theorem, and the U of T guide
  [MAT257 Unit 3, Continuity and connectedness](../../uoft/MAT257Y1/unit03.md).
