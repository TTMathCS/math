# 15. Van Kampen and surfaces

*Most spaces of interest are glued together from simpler pieces: a figure eight from two circles, a torus from a square,
a surface of genus two from an octagon, the outside of a knot from blocks of space. If you know the fundamental group
of each piece and of the places where they overlap, can you work out the group of the whole? The Seifert-van Kampen
theorem says yes, and gives the answer as a presentation: generators and relations. In this chapter you will learn the
group theory this needs (free groups, presentations, free products), state and partly prove the theorem, compute the
fundamental groups of graphs, the torus, the projective plane and every closed surface, prove that the trefoil knot
cannot be untied, and meet the surprising fact that no algorithm can decide in general whether such a group is
trivial.*

!!! abstract "In this chapter"
    **You will learn:**

    - free groups, reduced words, and why a free group has the universal property its name suggests
    - presentations of groups by generators and relations, and free products with and without amalgamation
    - the Seifert-van Kampen theorem, with a proof of the half that says the pieces generate the whole
    - the effect of attaching a disc: it kills one loop, and nothing else
    - the fundamental groups of graphs, the figure eight, the torus, $\mathbb{R}P^2$, the Klein bottle and every closed
      surface, and how they tell the surfaces apart
    - the knot group, a proof that the trefoil is knotted, and the word problem

    **You need:** [Chapter 13](13-The-Fundamental-Group.md) and [Chapter 14](14-The-Circle-and-Covering-Spaces.md)
    ($\pi_1$, induced maps, $\pi_1(S^1) \cong \mathbb{Z}$), [Chapter 10](10-Classification-of-Surfaces.md) (surfaces as
    polygons with edge labels) and [Chapter 6](06-Building-New-Spaces.md) (quotients and gluing). From algebra: groups,
    homomorphisms, normal subgroups and quotient groups ([Algebra Chapter 15](../algebra/15-Homomorphisms-and-Quotients.md)),
    and the symmetric group $S_3$ ([Algebra Chapter 13](../algebra/13-Groups.md)).

    **Levels:** 15.1 is advanced (algebra); 15.2 and 15.3 are advanced; 15.4 is advanced to expert; 15.5 is expert,
    mostly statements with references.

## 15.1 Free groups and presentations

*Level: advanced.*

The figure eight is two circles joined at a point. Call the loop around the left circle $a$ and the loop around the
right circle $b$. Every loop at the join point can be deformed to a sequence of trips around the two circles, such as
$a\,b\,a^{-1}\,a^{-1}\,b$ (left, right, left backwards twice, right). It is natural to guess that the group consists of
all such sequences, with no relations at all between $a$ and $b$, except the obvious cancellation of a trip followed by
the same trip backwards. That group is the free group on two letters. We build it now.

### Words and reduced words

Let $S$ be a set, whose elements we call **letters** or **generators**. For each letter $s$ introduce a formal symbol
$s^{-1}$. A **word** is a finite sequence of symbols $s$ and $s^{-1}$, such as $a b b^{-1} a^{-1} a$; the empty word is
allowed and written $1$. A word is **reduced** if it never has a symbol next to its own inverse ($s s^{-1}$ or
$s^{-1}s$). Any word can be **reduced** by repeatedly deleting such adjacent pairs:

$$
a\,b\,b^{-1}\,a^{-1}\,a \;\to\; a\,a^{-1}\,a \;\to\; a .
$$

Different orders of deletion always give the same reduced word. (This needs a short argument: if two different
deletions are possible, either they are disjoint and can be done in either order, or they overlap in a pattern
$s s^{-1} s$, where both deletions give the same result. An induction on length, sometimes called the diamond lemma,
then shows the final result is unique.)

**Definition.** The **free group** $F(S)$ is the set of reduced words on $S$, with product "write one word after the
other, then reduce". The identity is the empty word and the inverse of $s_1^{\epsilon_1}\cdots s_k^{\epsilon_k}$ is
$s_k^{-\epsilon_k}\cdots s_1^{-\epsilon_1}$ (each $\epsilon_i$ is $\pm 1$). If $S$ has $n$ elements, $F(S)$ is written
$F_n$ and called the free group of **rank** $n$.

Identity and inverses are clear. Associativity is the one axiom that is awkward to check directly, because reduction
can cascade. Here is a clean proof, a trick due to B. L. van der Waerden.

*Proof of associativity.* Let $W$ be the set of reduced words. For each symbol $x$ (a letter or an inverse letter)
define a function $L_x : W \to W$ by "put $x$ in front, and if the word then starts with $x x^{-1}$, delete that pair".
One checks directly that $L_x$ and $L_{x^{-1}}$ are inverse functions, so each $L_x$ is a bijection of $W$. For a reduced
word $w = x_1 \cdots x_k$ define $L_w = L_{x_1} \circ \cdots \circ L_{x_k}$, a bijection of $W$, and note that
$L_w(1) = w$ (build $w$ from the right, one symbol at a time, with no cancellations). One checks also that
$L_{u}\circ L_{v} = L_{uv}$, where $uv$ is the reduced product, because cancelling $x x^{-1}$ in the word corresponds to
$L_x L_{x^{-1}} = \mathrm{id}$. So $w \mapsto L_w$ is a one-to-one map (look at $L_w(1)$) from $W$ into the group of all
bijections of $W$, turning the reduced product into composition. Composition of functions is associative, so the reduced
product is too. $\square$

### The universal property

**Theorem 15.1.** Let $G$ be any group and $\varphi : S \to G$ any function. There is exactly one homomorphism
$\Phi : F(S) \to G$ with $\Phi(s) = \varphi(s)$ for every letter $s$.

*Proof.* A homomorphism must send $s^{-1}$ to $\varphi(s)^{-1}$ and a word to the product of the images of its
symbols, so there is at most one. Define $\Phi(s_1^{\epsilon_1}\cdots s_k^{\epsilon_k}) = \varphi(s_1)^{\epsilon_1}\cdots\varphi(s_k)^{\epsilon_k}$.
Deleting a pair $s s^{-1}$ does not change the product in $G$, so the value on a word equals the value on its reduced form,
and so $\Phi(uv) = \Phi(u)\Phi(v)$. $\square$

In words: **to define a homomorphism out of a free group, say where the generators go, freely, and you are done.** This
is what "free" means. The theorem has a striking consequence: every group is a quotient of a free group (take $S = G$
and $\varphi$ the identity; $\Phi$ is onto).

**Worked example.** Define $\Phi : F_2 \to S_3$ by $a \mapsto (1\,2)$ and $b \mapsto (2\,3)$. Then
$\Phi(ab) = (1\,2)(2\,3)$ and $\Phi(ba) = (2\,3)(1\,2)$. Composing right to left, $(1\,2)(2\,3)$ sends
$1 \to 1 \to 2$, $2 \to 3 \to 3$, $3 \to 2 \to 1$: it is the 3-cycle $(1\,2\,3)$. And $(2\,3)(1\,2)$ is $(1\,3\,2)$. These
differ, so $ab \ne ba$ in $F_2$. **The free group of rank 2 is not abelian.** (Of course $ab$ and $ba$ are different
reduced words, which says the same; the homomorphism makes the point in a way that also works for groups given by
relations, where comparing words is harder.)

### Presentations

Most groups are not free, because their generators satisfy **relations**. The cyclic group of order 5 is generated by one
element $a$ with $a^5 = 1$. The group $\mathbb{Z}^2$ is generated by two elements that commute: $ab = ba$, or equivalently
$aba^{-1}b^{-1} = 1$. We write the left side of such an equation, a word that should equal $1$, as a **relator**.

**Definition.** Let $S$ be a set and $R$ a set of words on $S$. The group with **presentation**

$$
\langle S \mid R \rangle = F(S) / N(R)
$$

is the free group divided by $N(R)$, the **normal closure** of $R$: the smallest normal subgroup containing $R$, which
consists of all products of conjugates $g r^{\pm 1} g^{-1}$ of relators. We write relations as equations when that is
clearer, as in $\langle a, b \mid ab = ba \rangle$.

Why the normal closure? Because if $r = 1$ in a group, then $g r g^{-1} = 1$ too, and products of things equal to $1$
are equal to $1$. So $N(R)$ is exactly the set of words that the relations force to be trivial.

**Theorem 15.2 (von Dyck).** A function $\varphi : S \to G$ extends to a homomorphism $\langle S \mid R \rangle \to G$
exactly when every relator becomes $1$ under $\varphi$, and then the extension is unique.

*Proof.* By Theorem 15.1, $\varphi$ extends to $\Phi : F(S) \to G$. The kernel of $\Phi$ is normal; if it contains $R$ it
contains $N(R)$, and then $\Phi$ passes to the quotient $F(S)/N(R)$ (first isomorphism theorem,
[Algebra Chapter 15](../algebra/15-Homomorphisms-and-Quotients.md)). Conversely, if a homomorphism from the quotient
exists, each relator, being $1$ in the quotient, maps to $1$. $\square$

**Examples.**

- $\langle a \mid \;\rangle = F_1 \cong \mathbb{Z}$, with $a^n \leftrightarrow n$.
- $\langle a \mid a^n \rangle \cong \mathbb{Z}/n$.
- $\langle a, b \mid aba^{-1}b^{-1} \rangle \cong \mathbb{Z}^2$. *Proof:* the relation lets you move every $a$ past every $b$,
  so each element is $a^m b^n$; and von Dyck's theorem with $a \mapsto (1, 0)$, $b \mapsto (0, 1)$ gives a homomorphism onto
  $\mathbb{Z}^2$ that sends $a^m b^n$ to $(m, n)$, so different pairs $(m, n)$ give different elements.
- $\langle r, s \mid r^n, s^2, srsr \rangle$ is the dihedral group of order $2n$, the symmetries of a regular $n$-gon
  ([Algebra Chapter 13](../algebra/13-Groups.md)).
- $\langle x, y \mid x^2 = y^3 \rangle$ is an infinite non-abelian group that will reappear as the trefoil knot group.

A presentation is **finite** if $S$ and $R$ are finite. The same group has many presentations: $\mathbb{Z}$ is also
$\langle a, b \mid b \rangle$ and $\langle a, b \mid a b^{-2} \rangle$. Deciding whether two presentations give
isomorphic groups is a hard problem, and in general an unsolvable one (15.5).

**Abelianisation.** For a group $G$, the **commutator subgroup** $[G, G]$ is generated by all $ghg^{-1}h^{-1}$, and the
quotient $G^{\mathrm{ab}} = G/[G, G]$ is the largest abelian quotient. For a presented group you get $G^{\mathrm{ab}}$ by
adding the relations "all generators commute" and then working in additive notation: each relator becomes an integer
vector of **exponent sums**, and $G^{\mathrm{ab}}$ is $\mathbb{Z}^{|S|}$ divided by the span of those vectors. For
example, $\langle a, b \mid a^2 b^3 \rangle^{\mathrm{ab}} = \mathbb{Z}^2/\langle(2, 3)\rangle \cong \mathbb{Z}$ (the vector
$(2, 3)$ can be extended to a basis of $\mathbb{Z}^2$, for instance by $(1, 1)$, since $\det\begin{pmatrix} 2 & 3 \\ 1 & 1 \end{pmatrix} = -1$).
Abelianisations are easy to compare (finitely generated abelian groups are classified, as in
[Algebra Chapter 15](../algebra/15-Homomorphisms-and-Quotients.md)), and they will be the main tool for telling surfaces
apart.

### Free products

Given groups $G$ and $H$, their **free product** $G * H$ is the group of reduced alternating words
$g_1 h_1 g_2 h_2 \cdots$, with the $g_i \in G \setminus \{1\}$ and $h_i \in H \setminus \{1\}$, multiplied by
concatenating and then combining neighbours from the same group. If $G = \langle S \mid R \rangle$ and
$H = \langle T \mid Q \rangle$ (with $S$ and $T$ disjoint), then

$$
G * H = \langle S \cup T \mid R \cup Q \rangle .
$$

So $\mathbb{Z} * \mathbb{Z} = F_2$, and $\mathbb{Z}/2 * \mathbb{Z}/2 = \langle a, b \mid a^2, b^2 \rangle$, which is the
infinite dihedral group. The free product has the universal property you would expect: a pair of homomorphisms
$G \to K$ and $H \to K$ combines into exactly one homomorphism $G * H \to K$.

Finally, suppose there are homomorphisms $i_1 : K \to G$ and $i_2 : K \to H$. The **amalgamated free product**
$G *_K H$ is $G * H$ divided by the normal closure of all elements $i_1(k)\,i_2(k)^{-1}$, for $k \in K$. It is the free
product in which each element of $K$ is identified with itself, seen in $G$ and seen in $H$. Presentations again make it
concrete: take the generators and relations of $G$ and of $H$, and add one relation $i_1(k) = i_2(k)$ for each generator
$k$ of $K$.

## 15.2 The Seifert-van Kampen theorem

*Level: advanced.*

Here is the situation. A space $X$ is the union of two open sets $U$ and $V$. Both are path connected, their intersection
$U \cap V$ is path connected, and the base point $x_0$ is in $U \cap V$. Inclusions give homomorphisms

$$
i_1 : \pi_1(U \cap V) \to \pi_1(U), \quad i_2 : \pi_1(U \cap V) \to \pi_1(V), \quad j_1 : \pi_1(U) \to \pi_1(X), \quad j_2 : \pi_1(V) \to \pi_1(X),
$$

all at the base point $x_0$. By the universal property of the free product, $j_1$ and $j_2$ combine into a single
homomorphism $\Phi : \pi_1(U) * \pi_1(V) \to \pi_1(X)$.

**Theorem 15.3 (Seifert-van Kampen).** In this situation:

1. $\Phi$ is surjective: every loop in $X$ at $x_0$ is homotopic to a product of loops each lying in $U$ or in $V$.
2. The kernel of $\Phi$ is the normal closure of the elements $i_1(w)\,i_2(w)^{-1}$, for $w \in \pi_1(U \cap V)$.

Hence

$$
\pi_1(X) \cong \pi_1(U) *_{\pi_1(U \cap V)} \pi_1(V).
$$

In plain words: the group of the whole is generated by the groups of the two pieces, and the only extra relations are
the obvious ones, that a loop in the overlap is the same element whether you think of it as a loop in $U$ or in $V$.

**Two special cases do most of the work.**

- If $U \cap V$ is simply connected, there are no extra relations: $\pi_1(X) \cong \pi_1(U) * \pi_1(V)$.
- If $V$ is simply connected, every $i_2(w)$ is trivial, and the relations say $i_1(w) = 1$: $\pi_1(X) \cong \pi_1(U)/N$,
  where $N$ is the normal closure of the image of $\pi_1(U \cap V)$.

*Proof of part 1.* Let $f$ be a loop at $x_0$. The sets $f^{-1}(U)$ and $f^{-1}(V)$ are an open cover of $I$, so by the
Lebesgue number lemma there is a subdivision $0 = s_0 < s_1 < \dots < s_m = 1$ with each $f([s_{i-1}, s_i])$ inside $U$
or inside $V$. If two consecutive pieces lie in the same set, merge them (delete the division point between them).
After merging, consecutive pieces lie in different sets, so each interior division point $f(s_i)$ lies in both: in
$U \cap V$.

Write $f_i$ for the path $f$ restricted to $[s_{i-1}, s_i]$ (rescaled to $I$), so $f \simeq f_1 \cdot f_2 \cdots f_m$.
For each interior point $s_i$ choose a path $g_i$ in $U \cap V$ from $x_0$ to $f(s_i)$; this is where we use that
$U \cap V$ is path connected. Let $g_0$ and $g_m$ be constant at $x_0$. Then

$$
f \simeq (g_0 \cdot f_1 \cdot \bar g_1) \cdot (g_1 \cdot f_2 \cdot \bar g_2) \cdots (g_{m-1} \cdot f_m \cdot \bar g_m),
$$

because each $\bar g_i \cdot g_i$ in the middle cancels. Each bracket is a loop at $x_0$ lying entirely in $U$ or entirely
in $V$ (the $g_i$ lie in $U \cap V$, which is inside both). So $[f]$ is a product of elements in the images of $j_1$ and
$j_2$. $\square$

*About part 2.* The elements $i_1(w)\,i_2(w)^{-1}$ are clearly in the kernel, since a loop in $U \cap V$ maps to the same
element of $\pi_1(X)$ by both routes. The real content is that nothing else is: if a product of loops from $U$ and $V$ is
null-homotopic in $X$, the null-homotopy can be cut into small squares, each mapped into $U$ or $V$, and read off as a
sequence of moves, each of which is either a homotopy inside $U$, a homotopy inside $V$, or the exchange of a loop in
$U \cap V$ seen in $U$ for the same loop seen in $V$. Making this precise takes about two pages of careful bookkeeping;
see Hatcher, Theorem 1.20, or Massey, Chapter 4. We will use the theorem freely.

**First application: spheres again.** Write $S^n$, $n \ge 2$, as $U \cup V$ with $U$ the sphere minus the north pole and
$V$ the sphere minus the south pole. Both are homeomorphic to $\mathbb{R}^n$ (stereographic projection), so simply
connected, and $U \cap V$ is homeomorphic to $\mathbb{R}^n \setminus \{0\}$, which is path connected when $n \ge 2$. Part 1
alone shows that $\pi_1(S^n)$ is generated by two trivial groups, so it is trivial. This is a second proof of
Theorem 13.12. For $n = 1$ the overlap is two arcs, not path connected, and the theorem does not apply.

**History.** Herbert Seifert proved a version of the theorem in 1931, in work on three-dimensional manifolds, and
Egbert van Kampen published his version in 1933, motivated by the complements of algebraic curves. The modern form with
open sets is the result of later refinement. Some books call it simply "van Kampen's theorem".

## 15.3 Fundamental groups of graphs and surfaces

*Level: advanced.*

### Wedges of circles and the figure eight

The **wedge** $X \vee Y$ of two spaces is their disjoint union with one point of each glued together. The figure eight
is $S^1 \vee S^1$.

**Theorem 15.4.** $\pi_1(S^1 \vee S^1) \cong F_2 = \langle a, b \mid \; \rangle$, with $a$ and $b$ the loops around the two
circles. More generally the wedge of $n$ circles has fundamental group $F_n$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 500 230" role="img" aria-label="Left: a figure eight made of two circles touching at a base point x0, with an arrow on each circle; the left circle is labelled a and the right circle b. Right: a square whose bottom and top edges are labelled a with arrows pointing right, and whose left and right edges are labelled b with arrows pointing up. Reading anticlockwise from the bottom left corner gives a b a-inverse b-inverse.">
  <circle cx="90" cy="110" r="50" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="190" cy="110" r="50" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="140" cy="110" r="4" fill="currentColor"/>
  <text x="140" y="135" font-size="13" text-anchor="middle" fill="currentColor">x0</text>
  <polygon points="96,54 84,60 96,66" fill="currentColor"/>
  <polygon points="196,54 184,60 196,66" fill="currentColor"/>
  <text x="90" y="46" font-size="14" text-anchor="middle" fill="currentColor">a</text>
  <text x="190" y="46" font-size="14" text-anchor="middle" fill="currentColor">b</text>
  <text x="140" y="200" font-size="12" text-anchor="middle" fill="currentColor">figure eight: group F2</text>
  <rect x="300" y="40" width="140" height="140" fill="#7ccf9a" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
  <polygon points="364,174 376,180 364,186" fill="currentColor"/>
  <polygon points="364,34 376,40 364,46" fill="currentColor"/>
  <polygon points="434,116 440,104 446,116" fill="currentColor"/>
  <polygon points="294,116 300,104 306,116" fill="currentColor"/>
  <text x="370" y="200" font-size="14" text-anchor="middle" fill="currentColor">a</text>
  <text x="370" y="28" font-size="14" text-anchor="middle" fill="currentColor">a</text>
  <text x="456" y="114" font-size="14" fill="currentColor">b</text>
  <text x="280" y="114" font-size="14" fill="currentColor">b</text>
  <text x="370" y="114" font-size="12" text-anchor="middle" fill="currentColor">torus</text>
  <text x="370" y="130" font-size="12" text-anchor="middle" fill="currentColor">a b a⁻¹ b⁻¹</text>
</svg>
</div>

*Proof.* Let $x_0$ be the join point, $p$ a point of the left circle other than $x_0$ and $q$ a point of the right circle
other than $x_0$. Put $U = X \setminus \{q\}$ and $V = X \setminus \{p\}$. Then $U$ is the left circle with an open arc
(the right circle minus a point) hanging from $x_0$; that arc can be pulled back into $x_0$, so $U$ deformation retracts
onto the left circle and $\pi_1(U) \cong \mathbb{Z}$, generated by $a$. Likewise $\pi_1(V) \cong \mathbb{Z}$, generated by
$b$. The intersection $U \cap V = X \setminus \{p, q\}$ is a cross of four arcs meeting at $x_0$, which is contractible.
By the first special case, $\pi_1(X) \cong \mathbb{Z} * \mathbb{Z} = F_2$. Induction on $n$ gives the general case. $\square$

So the guess at the start of 15.1 was right. Since $F_2$ is not abelian, the loops $ab$ and $ba$ are not homotopic: going
around the left circle and then the right one cannot be deformed into going around in the other order. And the figure
eight is not homotopy equivalent to the torus, whose group is abelian.

### Graphs

A **graph**, as a space, is a set of points (vertices) joined by arcs (edges), as in
[Chapter 3](03-Graphs-and-Planarity.md); a finite connected graph with $V$ vertices and $E$ edges is a compact
path-connected space.

**Theorem 15.5.** The fundamental group of a finite connected graph with $V$ vertices and $E$ edges is free of rank
$E - V + 1$.

*Proof.* Choose a **spanning tree** $T$: a subgraph that is a tree and contains all $V$ vertices
([Combinatorics Chapter 11](../combinatorics/11-Trees.md)); it has $V - 1$ edges. A finite tree is contractible (shrink it
leaf by leaf). Collapsing a contractible subgraph to a point is a homotopy equivalence (Hatcher, Proposition 0.17), and
collapsing $T$ turns each of the remaining $E - (V - 1)$ edges into a loop at the single remaining vertex. So the graph is
homotopy equivalent to a wedge of $E - V + 1$ circles, and Theorem 15.4 applies. $\square$

**Worked examples.**

- A cycle (polygon) with $n$ vertices: $E - V + 1 = n - n + 1 = 1$, group $\mathbb{Z}$, as it is a circle.
- The **theta graph**, two vertices joined by three edges: $3 - 2 + 1 = 2$, group $F_2$.
- The complete graph $K_4$: $6 - 4 + 1 = 3$, group $F_3$. Check: $K_4$ drawn in the plane has $F = 4$ faces, one of them
  outside, and the three inner faces give three independent loops.
- The utility graph $K_{3,3}$: $9 - 6 + 1 = 4$, group $F_4$.

The rank $E - V + 1 = 1 - \chi$, where $\chi = V - E$ is the Euler characteristic of the graph, so the fundamental group
recovers the Euler characteristic of [Chapter 2](02-Surfaces-and-Euler-Characteristic.md). A consequence in pure algebra
(the **Nielsen-Schreier theorem**): every subgroup of a free group is free. The proof is that a subgroup corresponds to a
covering space of a wedge of circles (Theorem 14.9), every covering space of a graph is a graph, and graphs have free
fundamental groups. This topological proof is much shorter than the algebraic ones.

### Attaching a disc

Surfaces are built from a graph by gluing in discs (the polygon pictures of [Chapter 10](10-Classification-of-Surfaces.md)).
Here is what one disc does.

**Theorem 15.6.** Let $X$ be path connected and $\varphi : S^1 \to X$ a continuous map. Let $Y = X \cup_\varphi D^2$ be the
space obtained by gluing a disc to $X$ along its boundary circle, each boundary point $z$ glued to $\varphi(z)$. Then

$$
\pi_1(Y) \cong \pi_1(X) / N([\varphi]),
$$

where $[\varphi]$ is the loop traced by $\varphi$ (joined to the base point by a path) and $N([\varphi])$ is its normal
closure. Gluing in a disc kills the loop along its boundary, and nothing else.

*Proof.* Let $c$ be the centre of the disc. Put $U = Y \setminus \{c\}$ and $V$ = the open disc (the interior of $D^2$).
Then:

- $U$ deformation retracts onto $X$, by pushing each point of the punctured disc radially out to the boundary circle, which
  lies in $X$. So $\pi_1(U) \cong \pi_1(X)$.
- $V$ is an open disc, simply connected.
- $U \cap V$ is an open disc minus its centre, which deformation retracts onto a circle of radius $\tfrac12$, so its group
  is $\mathbb{Z}$, generated by that circle. Under the deformation retraction of $U$ onto $X$, that circle is pushed out onto
  the loop $\varphi$.

Take the base point on the circle of radius $\tfrac12$ (and move it into $X$ along a radius at the end). By the second
special case of Theorem 15.3, $\pi_1(Y)$ is $\pi_1(U)$ divided by the normal closure of the image of the generator of
$\pi_1(U \cap V)$, which is $[\varphi]$. $\square$

**Worked example: the disc and the sphere.** Gluing a disc to a circle by the identity map gives a disc: $\mathbb{Z}/N(a)$
is trivial. Gluing a disc to a point (a constant $\varphi$) gives a sphere $S^2$: the trivial group divided by anything is
trivial. Both check with what we know.

### The torus, the projective plane and the Klein bottle

**The torus.** In the square picture, all four corners are glued to one point, and the edges become two loops $a$ and $b$
that meet only there: the edges form a figure eight. The torus is that figure eight with one disc (the inside of the
square) glued along the boundary word $aba^{-1}b^{-1}$. By Theorems 15.4 and 15.6,

$$
\pi_1(T^2) \cong \langle a, b \mid aba^{-1}b^{-1} \rangle \cong \mathbb{Z}^2 .
$$

This agrees with Chapter 13's product formula and Chapter 14's covering $\mathbb{R}^2 \to T^2$. Three different methods,
one answer.

**The projective plane.** $\mathbb{R}P^2$ is a disc with antipodal boundary points glued, equivalently a 2-gon with word
$aa$. The boundary becomes one circle $a$ (one vertex, one edge), and the disc is glued along $a^2$. So

$$
\pi_1(\mathbb{R}P^2) \cong \langle a \mid a^2 \rangle \cong \mathbb{Z}/2,
$$

agreeing with Corollary 14.8.

**The Klein bottle.** The square with word $abab^{-1}$ (opposite sides $a$ glued the same way, sides $b$ glued with a
flip) gives

$$
\pi_1(K) \cong \langle a, b \mid abab^{-1} \rangle .
$$

The relation says $bab^{-1} = a^{-1}$: conjugating by $b$ reverses $a$, which is the flip in the gluing. This group is
not abelian. To see it, map it into the group of symmetries of the integers, with $a \mapsto (n \mapsto n + 1)$ and
$b \mapsto (n \mapsto -n)$. The relation holds there, because $b a b^{-1}$ sends $n \mapsto -(-n + 1) = n - 1$, which is
$a^{-1}$; so von Dyck's theorem gives a homomorphism. In its image $ab$ sends $n \mapsto -n + 1$ and $ba$ sends
$n \mapsto -n - 1$, which differ, so the group is non-abelian. Its abelianisation is
$\mathbb{Z}^2/\langle(2, 0)\rangle \cong \mathbb{Z} \oplus \mathbb{Z}/2$.

### Every closed surface

The classification theorem of [Chapter 10](10-Classification-of-Surfaces.md) says every closed connected surface is
homeomorphic to one of:

- the sphere $S^2$, or the connected sum $M_g$ of $g \ge 1$ tori, given by a $4g$-gon with word
  $a_1 b_1 a_1^{-1} b_1^{-1} \cdots a_g b_g a_g^{-1} b_g^{-1}$;
- the connected sum $N_k$ of $k \ge 1$ projective planes, given by a $2k$-gon with word $a_1 a_1 a_2 a_2 \cdots a_k a_k$.

In each polygon all vertices are glued to a single point (check this with the vertex-cycle method of Chapter 10), so the
edges form a wedge of $2g$, respectively $k$, circles, and one disc is glued along the boundary word. Theorem 15.6 gives:

**Theorem 15.7.**

$$
\pi_1(M_g) \cong \Big\langle a_1, b_1, \dots, a_g, b_g \;\Big|\; \prod_{i=1}^{g} a_i b_i a_i^{-1} b_i^{-1} \Big\rangle, \qquad \pi_1(N_k) \cong \big\langle a_1, \dots, a_k \;\big|\; a_1^2 a_2^2 \cdots a_k^2 \big\rangle .
$$

**Corollary 15.8.** The abelianisations are $\pi_1(M_g)^{\mathrm{ab}} \cong \mathbb{Z}^{2g}$ and
$\pi_1(N_k)^{\mathrm{ab}} \cong \mathbb{Z}^{k-1} \oplus \mathbb{Z}/2$. These groups are all different, so **no two surfaces in
the list are homeomorphic**, or even homotopy equivalent.

*Proof.* For $M_g$, each commutator $a_i b_i a_i^{-1} b_i^{-1}$ has exponent sum $0$ in every generator, so the relator
becomes the zero vector and the abelianisation is $\mathbb{Z}^{2g}$. For $N_k$, the relator becomes $(2, 2, \dots, 2)$.
Change basis of $\mathbb{Z}^k$ to $e_1, \dots, e_{k-1}, e_1 + \dots + e_k$ (the matrix of this change has determinant $1$,
so it is a basis); in the new basis the relator is $2$ times the last basis vector, so the quotient is
$\mathbb{Z}^{k-1} \oplus \mathbb{Z}/2$. Finitely generated abelian groups are determined by their rank and torsion, so the
groups $\mathbb{Z}^{2g}$ (rank $2g$, no torsion) and $\mathbb{Z}^{k-1} \oplus \mathbb{Z}/2$ (rank $k - 1$, torsion
$\mathbb{Z}/2$) are pairwise non-isomorphic. Homotopy equivalent spaces have isomorphic $\pi_1$ (Theorem 13.16), hence
isomorphic abelianisations. $\square$

This completes the classification of Chapter 10: there, cutting and pasting showed every surface is **on** the list; here
algebra shows the surfaces on the list are **different**. Note how the abelianisation records orientability (torsion or
not) and the Euler characteristic: $\chi(M_g) = 2 - 2g$ and $\chi(N_k) = 2 - k$, and the rank is $2 - \chi$ for $M_g$ and
$1 - \chi$ for $N_k$.

Is the surface group of genus 2 abelian? No. Send $a_1 \mapsto x$, $b_1 \mapsto y$, $a_2 \mapsto y$, $b_2 \mapsto x$ in
any group. The relator becomes $(x y x^{-1} y^{-1})(y x y^{-1} x^{-1})$, which cancels completely to $1$. So by von Dyck
this is a homomorphism for any $x, y$; with $x = (1\,2)$ and $y = (2\,3)$ in $S_3$, its image is non-abelian.

### Try it in Python

Abelianisations come from integer matrices, and the **Smith normal form** (a diagonal form reached by integer row and
column operations) reads off rank and torsion. This snippet uses **sympy**.

```python
from sympy import Matrix, ZZ
from sympy.matrices.normalforms import smith_normal_form

def exponent_sums(relator, gens):
    """'aBA' means a b^-1 a^-1: a capital letter is an inverse."""
    row = [0] * len(gens)
    for ch in relator:
        row[gens.index(ch.lower())] += -1 if ch.isupper() else 1
    return row

def abelianization(gens, relators):
    if not relators:
        return f"Z^{len(gens)}"
    D = smith_normal_form(Matrix([exponent_sums(r, gens) for r in relators]), domain=ZZ)
    diag = [abs(D[i, i]) for i in range(min(D.shape))]
    free = len(gens) - sum(1 for d in diag if d != 0)
    torsion = [f"Z/{d}" for d in diag if d > 1]
    return " + ".join(([f"Z^{free}"] if free else []) + torsion) or "0"

print(abelianization("ab", ["abAB"]))          # torus: Z^2
print(abelianization("ab", ["abaB"]))          # Klein bottle: Z^1 + Z/2
print(abelianization("abcd", ["abABcdCD"]))    # genus 2: Z^4
print(abelianization("abc", ["aabbcc"]))       # N_3: Z^2 + Z/2
```

## 15.4 Knots and the knot group

*Level: advanced to expert.*

A **knot** is a closed loop in space that does not cross itself: formally, a subset $K \subset \mathbb{R}^3$ homeomorphic
to a circle. To avoid wild examples with infinitely many smaller and smaller twists, we take knots to be **polygonal**
(made of finitely many straight segments) or smooth; these are called tame knots. The **unknot** is a round circle. The
**trefoil** is the simplest knot that looks knotted: it has a diagram with three crossings.

Two knots $K$ and $K'$ are **equivalent** if one can be moved to the other through space without passing through itself:
precisely, if there is a continuous family of homeomorphisms $h_t : \mathbb{R}^3 \to \mathbb{R}^3$, $0 \le t \le 1$, with
$h_0$ the identity and $h_1(K) = K'$ (an **ambient isotopy**). This is the mathematical version of "the same knot". The
question "is the trefoil knotted?" means: is it inequivalent to the unknot? You cannot answer it by trying: failure to
untie a knot proves nothing. We need an invariant.

The knot itself is just a circle, so its own topology says nothing. The information is in **how it sits in space**, so we
look at the space around it.

**Definition.** The **knot group** of $K$ is $\pi_1(\mathbb{R}^3 \setminus K)$, the fundamental group of the knot's
complement.

If $h_t$ is an ambient isotopy taking $K$ to $K'$, then $h_1$ restricts to a homeomorphism from $\mathbb{R}^3 \setminus K$
to $\mathbb{R}^3 \setminus K'$. So **equivalent knots have isomorphic knot groups**, by Corollary 13.14.

**The unknot.** The complement of a round circle has fundamental group $\mathbb{Z}$, generated by a small loop that links
the circle once, called a **meridian**. (One way to see it: the complement of the circle deformation retracts onto a
sphere with a diameter attached, $S^2 \vee S^1$ up to homotopy, whose group is $\{1\} * \mathbb{Z} = \mathbb{Z}$ by
van Kampen; see Hatcher, Example 1.23.)

### The Wirtinger presentation

For any knot drawn as a diagram (a projection to the plane with small breaks at the under-crossings), there is a recipe,
named after Wilhelm Wirtinger, that reads off a presentation of the knot group.

- The diagram is cut by the under-crossings into **arcs**. For each arc take a generator $x_i$: the loop that starts above
  the diagram (near the viewer's eye), passes once under that arc from right to left (for a chosen orientation of the
  knot), and comes back.
- At each crossing, where an over-arc $x_k$ separates under-arcs $x_i$ and $x_j$, there is one relation, of the form
  $x_j = x_k x_i x_k^{-1}$ or $x_j = x_k^{-1} x_i x_k$ depending on the sign of the crossing.
- Any one of the relations follows from the others and can be dropped.

The proof is an application of van Kampen's theorem: the complement is built from the half space above the diagram
(simply connected) by adding a slab for each arc and then filling in the half space below; Rolfsen's *Knots and Links*
(Chapter 3) and Hatcher (Section 1.2) carry it out. We take it as given.

**The trefoil.** A standard diagram has three arcs $x, y, z$ and three crossings, and the recipe gives (with one choice of
orientation)

$$
z = x y x^{-1}, \qquad x = y z y^{-1}, \qquad y = z x z^{-1}.
$$

Eliminate $z$ using the first relation. The second becomes $x = y\,(x y x^{-1})\,y^{-1}$, that is $xy = yxyx^{-1}$, that is

$$
xyx = yxy .
$$

The third is redundant. Check: $z x z^{-1} = (xyx^{-1})\,x\,(x y^{-1} x^{-1}) = xyx\,y^{-1}x^{-1}$, and using $xyx = yxy$
this is $yxy\,y^{-1}x^{-1} = y$. So the trefoil group is

$$
G = \langle x, y \mid xyx = yxy \rangle .
$$

This is the **braid group on three strands** too, a coincidence that is not a coincidence (the trefoil is the closure of
a simple three-strand braid). Substituting $u = xyx$ and $v = xy$ turns it into $\langle u, v \mid u^2 = v^3 \rangle$:
indeed $u^2 = (xyx)(xyx) = (xyx)(yxy) = (xy)(xy)(xy) = v^3$, and conversely $x = v^{-1}u$ and $y = u^{-1}v^2$ recover the
original generators.

**Theorem 15.9.** The trefoil is knotted: it is not equivalent to the unknot.

*Proof.* The unknot's group is $\mathbb{Z}$, which is abelian. We show the trefoil group $G$ is not abelian. By von Dyck's
theorem, $x \mapsto (1\,2)$, $y \mapsto (2\,3)$ defines a homomorphism $G \to S_3$ provided the relation holds in $S_3$:

$$
(1\,2)(2\,3)(1\,2) = (1\,3) = (2\,3)(1\,2)(2\,3).
$$

(Check, composing right to left: $(1\,2)(2\,3)(1\,2)$ sends $1 \to 2 \to 3 \to 3$, $3 \to 3 \to 2 \to 1$, and
$2 \to 1 \to 1 \to 2$; so it swaps $1$ and $3$. The right side does too, by the same check.) The image contains the two
transpositions $(1\,2)$ and $(2\,3)$, which do not commute, so the image is non-abelian, and so is $G$. Non-isomorphic
groups mean non-homeomorphic complements, so the trefoil is not equivalent to the unknot. $\square$

In fact there are exactly 12 homomorphisms $G \to S_3$ (choose images of $x$ and $y$ satisfying the relation), and 6 of
them have non-abelian image: those sending $x$ and $y$ to two different transpositions. Homomorphisms that send the
meridians to transpositions correspond to the **3-colourings** of the diagram that [Chapter 18](18-Knot-Theory.md) uses
to prove the same theorem combinatorially. The group-theoretic proof explains why tricolourability is an invariant.

The abelianisation of every knot group is $\mathbb{Z}$ (for the trefoil, the relator $xyxy^{-1}x^{-1}y^{-1}$ has exponent
sums $(1, -1)$, and $\mathbb{Z}^2/\langle(1, -1)\rangle \cong \mathbb{Z}$). So the abelianisation cannot tell knots apart:
the knot group's power is all in its non-abelian structure. This is the honest reason the full group, not just its
"counting" part, is needed.

**How much does the group see?** A lot, but not everything.

- Max Dehn proved in 1914 that the trefoil is not equivalent to its mirror image. Mirror images have homeomorphic
  complements, so the knot group cannot detect this; Dehn needed finer structure.
- The granny knot (two trefoils of the same handedness joined) and the square knot (two of opposite handedness) have
  isomorphic knot groups but are different knots.
- Cameron Gordon and John Luecke proved in 1989 that knots are determined by their complements: if the complements of
  two knots are homeomorphic, the knots are equivalent or mirror images. For prime knots (knots that are not joined from
  two simpler ones) this, combined with work of Wilbur Whitten, means the knot group determines the knot up to mirror
  image.

The torus knots are a family generalising the trefoil: the $(p, q)$ torus knot, for coprime $p, q \ge 2$, winds $p$ times
one way and $q$ times the other around a torus, and its group is $\langle u, v \mid u^p = v^q \rangle$. The trefoil is the
$(2, 3)$ torus knot.

## 15.5 The word problem

*Level: expert.*

A presentation $\langle S \mid R \rangle$ is a finite description of a group, but it does not obviously let you compute
in it. Given a word $w$, is $w = 1$ in the group? This is the **word problem**. Max Dehn posed it in 1911, together with
the **conjugacy problem** (are two words conjugate?) and the **isomorphism problem** (do two presentations give isomorphic
groups?). He was led to them by exactly the topology of this chapter: fundamental groups of surfaces and knots are
naturally given by presentations, and deciding whether a loop is null-homotopic is the word problem for $\pi_1$.

**Easy cases.**

- **Free groups.** Reduce the word. It equals $1$ exactly when the reduced form is empty, because reduced words are the
  elements. For example, in $F_2$, $a b a^{-1} b^{-1} b a b^{-1} a^{-1}$ reduces ($b^{-1}b$, then $a^{-1}a$, then $b b^{-1}$,
  then $a a^{-1}$) to the empty word, so it is $1$.
- **The torus.** In $\langle a, b \mid aba^{-1}b^{-1} \rangle \cong \mathbb{Z}^2$, a word is $1$ exactly when the exponent
  sums of $a$ and of $b$ are both $0$. So $ab^2a^{-1}b^{-1}$ is not $1$ (the $b$ sum is $1$), while $ab\,a^{-1}b^{-1}$ is.
- **Surfaces of genus $g \ge 2$.** Dehn found an algorithm, now called **Dehn's algorithm**: if a nonempty freely reduced
  word equals $1$, it contains a subword that is more than half of the relator (read cyclically, or of its inverse).
  Replace that subword by the inverse of the rest of the relator, which is shorter, and repeat. The word shrinks at each
  step, so the process ends; the word is $1$ exactly when it ends at the empty word. The proof of the key property uses
  hyperbolic geometry, or the small cancellation theory of Lyndon and Schupp (Chapter V of their book).

**The general case is unsolvable.** Pyotr Novikov (1955) and William Boone (1958) independently constructed finitely
presented groups whose word problem is **undecidable**: no algorithm, however clever and however long it runs, can take an
arbitrary word and correctly answer whether it equals $1$. The proof encodes a Turing machine whose halting is undecidable
into the relations of a group, so that "this word is trivial" means "this machine halts"; the halting problem and the
method of reduction are in [Logic Chapter 14](../logic/14-Undecidability.md), and the word problem specifically in
[section 14.5](../logic/14-Undecidability.md#145-the-word-problem-for-groups).

Note what is and is not undecidable. For any finite presentation the set of trivial words can be **listed**: run through
all products of conjugates of relators and reduce them. So if a word is trivial, a search will eventually prove it. What
cannot be done in general is to detect that a word is **not** trivial.

**Consequences for topology.** Every finite presentation is the fundamental group of a finite 2-dimensional complex:
take a wedge of circles, one per generator, and glue in one disc per relator along its word (Theorem 15.6 shows the result
has exactly the presented group). In dimension 4 one can do the same with closed manifolds. Building on Novikov and
Boone, and on the result of Sergei Adian and Michael Rabin that no algorithm can decide whether a finite presentation
defines the trivial group, A. A. Markov showed in 1958 that **there is no algorithm to decide whether two closed
4-manifolds are homeomorphic**. Topology in dimension four and above is, in this precise sense, unclassifiable.

Dimensions two and three are different. Closed surfaces are classified by orientability and Euler characteristic, both
computable from a triangulation. In dimension three, Wolfgang Haken gave an algorithm in 1961 that decides whether a
knot diagram represents the unknot, and, as a consequence of Perelman's proof of the geometrisation conjecture
([Chapter 19](19-The-Poincare-Conjecture.md)) together with much further work, the homeomorphism problem for closed
3-manifolds is decidable, and their fundamental groups have solvable word problem. How fast unknot recognition can be done
is still an open question, discussed in [Chapter 18](18-Knot-Theory.md).

## Check yourself

??? question "1. Reduce the word $a b^{-1} b a^{-1} a b a^{-1}$ in $F_2$. Is it the identity?"

    Delete $b^{-1}b$: $a a^{-1} a b a^{-1}$. Delete $a a^{-1}$: $a b a^{-1}$. This is reduced and not empty, so it is not
    the identity. (Deleting the pair $a^{-1}a$ first gives the same answer, as the diamond lemma promises.)

??? question "2. Show that $\langle a, b \mid a b^{-2} \rangle \cong \mathbb{Z}$."

    The relation says $a = b^2$, so $b$ alone generates the group, and substituting removes $a$ and the relation:
    the group is $\langle b \mid \; \rangle \cong \mathbb{Z}$. (Formally, von Dyck's theorem gives inverse homomorphisms
    $b \mapsto b$, $a \mapsto b^2$ and back.)

??? question "3. Compute the fundamental group of the theta graph and of the complete bipartite graph $K_{2,3}$."

    Theta: $V = 2$, $E = 3$, rank $3 - 2 + 1 = 2$, group $F_2$. $K_{2,3}$: $V = 5$, $E = 6$, rank $6 - 5 + 1 = 2$, group $F_2$.
    Indeed $K_{2,3}$ is a theta graph with an extra vertex on each edge, which does not change the space up to
    homeomorphism.

??? question "4. Use van Kampen to find $\pi_1$ of the wedge $S^1 \vee S^2$, and of $\mathbb{R}P^2 \vee \mathbb{R}P^2$."

    For a wedge of spaces that are nice near the join point (each has a neighbourhood of it that deformation retracts to
    it), take $U$ and $V$ to be each space together with a small contractible neighbourhood of the join in the other;
    the overlap is contractible. So $\pi_1(S^1 \vee S^2) \cong \mathbb{Z} * \{1\} = \mathbb{Z}$ and
    $\pi_1(\mathbb{R}P^2 \vee \mathbb{R}P^2) \cong \mathbb{Z}/2 * \mathbb{Z}/2 = \langle a, b \mid a^2, b^2 \rangle$, the
    infinite dihedral group.

??? question "5. Glue a disc to a circle along the map $z \mapsto z^3$. What is the fundamental group of the result?"

    By Theorem 15.6 it is $\langle a \mid a^3 \rangle \cong \mathbb{Z}/3$. The space is a "pseudo-projective plane"; for
    $z \mapsto z^2$ it would be $\mathbb{R}P^2$.

??? question "6. Show that the Klein bottle group $\langle a, b \mid abab^{-1} \rangle$ has abelianisation $\mathbb{Z} \oplus \mathbb{Z}/2$ and that $\pi_1(N_2)$, with presentation $\langle c, d \mid c^2 d^2 \rangle$, has the same abelianisation."

    For $abab^{-1}$ the exponent sums are $(2, 0)$, so the abelianisation is $\mathbb{Z}^2/\langle(2, 0)\rangle \cong \mathbb{Z}/2 \oplus \mathbb{Z}$.
    For $c^2d^2$ the sums are $(2, 2)$; in the basis $(1, 0), (1, 1)$ this is $2 \times (1, 1)$, so again
    $\mathbb{Z} \oplus \mathbb{Z}/2$. This is consistent with $K = N_2$ (the Klein bottle is the connected sum of two
    projective planes); the groups themselves are isomorphic, by $c = ab$, $d = b^{-1}$, a substitution you can check:
    $c^2d^2 = abab\,b^{-2} = abab^{-1}$.

??? question "7. Prove that the fundamental group of a closed orientable surface of genus 2 is not abelian, and that its abelianisation is $\mathbb{Z}^4$."

    Map $a_1 \mapsto x$, $b_1 \mapsto y$, $a_2 \mapsto y$, $b_2 \mapsto x$. The relator becomes
    $xyx^{-1}y^{-1}\,yxy^{-1}x^{-1} = 1$, so this is a homomorphism for every choice; with $x = (1\,2)$ and $y = (2\,3)$ in
    $S_3$ the image is non-abelian. The relator's exponent sums are all $0$, so the abelianisation is $\mathbb{Z}^4$.

??? question "8. Which closed surface has fundamental group with abelianisation $\mathbb{Z}^3 \oplus \mathbb{Z}/2$? And $\mathbb{Z}^6$?"

    $\mathbb{Z}^{k-1} \oplus \mathbb{Z}/2$ with $k = 4$: $N_4$, the connected sum of four projective planes (Euler
    characteristic $-2$). $\mathbb{Z}^{2g}$ with $g = 3$: the orientable surface of genus 3.

??? question "9. Show that the map $x \mapsto (1\,2\,3)$, $y \mapsto (1\,2\,3)$ defines a homomorphism from the trefoil group to $S_3$. Is its image abelian?"

    The relation $xyx = yxy$ becomes $c^3 = c^3$ with $c = (1\,2\,3)$, which holds. The image is the cyclic group
    generated by $c$, of order 3, which is abelian. Homomorphisms like this one do not detect knotting: every knot group
    maps onto $\mathbb{Z}$ and hence onto every cyclic group, sending all meridians to the same element.

??? question "10. In the trefoil group $\langle x, y \mid xyx = yxy \rangle$, put $u = xyx$ and $v = xy$. Show that $u^2$ is in the centre (commutes with everything) but $u$ is not."

    Section 15.4 showed $u^2 = v^3$. The element $u^2$ commutes with $u$, and $v^3$ commutes with $v$, so $u^2$ commutes
    with both $u$ and $v$. These generate the group, because $x = v^{-1}u$ and $y = u^{-1}v^2$. So $u^2$ is central. It is
    not the identity: the homomorphism to $\mathbb{Z}$ with $x, y \mapsto 1$ sends $u^2$ to $6$. But $u$ is not central:
    under $x \mapsto (1\,2)$, $y \mapsto (2\,3)$ it goes to $(1\,3)$, which does not commute with $(1\,2)$ in $S_3$.

??? question "11. Decide whether $a b^2 a^{-1} b^{-2}$ is the identity in $F_2$, in $\mathbb{Z}^2 = \langle a, b \mid aba^{-1}b^{-1} \rangle$, and in $\pi_1(\mathbb{R}P^2 \vee \mathbb{R}P^2) = \langle a, b \mid a^2, b^2 \rangle$."

    In $F_2$ the word is reduced and nonempty: not the identity. In $\mathbb{Z}^2$ the exponent sums are $0$ and $0$: it is
    the identity. In $\langle a, b \mid a^2, b^2 \rangle$, $b^2 = 1$, so the word is $a\,a^{-1} = 1$: the identity.

??? question "12. Explain why, if a finitely presented group has an undecidable word problem, there is no algorithm deciding which loops on a certain finite 2-complex are null-homotopic."

    Build the 2-complex with one vertex, one loop per generator and one disc per relator. By Theorem 15.6 its fundamental
    group is the presented group, and each word describes a loop along the generator circles. A loop is null-homotopic
    exactly when its word is $1$. An algorithm for null-homotopy would therefore solve the word problem, which is
    impossible.

## What you learned

- A free group consists of reduced words; it is a group by van der Waerden's trick, and homomorphisms out of it are
  determined freely by the images of generators.
- A presentation $\langle S \mid R \rangle$ is the free group divided by the normal closure of the relators; von Dyck's
  theorem says when an assignment of generators defines a homomorphism.
- Seifert-van Kampen: the group of $U \cup V$ is the free product of the groups of $U$ and $V$ amalgamated over the group
  of $U \cap V$; gluing on a disc kills exactly the loop along its rim.
- Graphs have free groups of rank $E - V + 1$; the torus has $\mathbb{Z}^2$, the projective plane $\mathbb{Z}/2$, and every
  closed surface a one-relator group whose abelianisation tells the surfaces apart.
- The knot group, the fundamental group of the complement, is an invariant of knots; a homomorphism onto $S_3$ proves the
  trefoil is knotted.
- The word problem is solvable for free groups, abelian groups and surface groups, but unsolvable in general, which
  makes the classification of 4-manifolds impossible by algorithm.

**Next:** [Chapter 16](16-Homology.md) introduces homology, an abelian and computable invariant that sees holes of every
dimension, not only the one-dimensional holes that loops detect.

## Further reading

- Allen Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, Sections 1.2 and 1.A.
- William S. Massey, *A Basic Course in Algebraic Topology*, Springer, 1991, Chapters 3 and 4.
- John Stillwell, *Classical Topology and Combinatorial Group Theory*, 2nd edition, Springer, 1993: the history and the
  group theory together, including Dehn's algorithm.
- Dale Rolfsen, *Knots and Links*, Publish or Perish, 1976 (reprinted by the American Mathematical Society), Chapter 3.
- Roger C. Lyndon and Paul E. Schupp, *Combinatorial Group Theory*, Springer, 1977.
- C. McA. Gordon and J. Luecke, "Knots are determined by their complements", *Journal of the American Mathematical
  Society* 2, 1989.
- On this site: [Algebra Chapter 15, Homomorphisms and quotients](../algebra/15-Homomorphisms-and-Quotients.md),
  [Algebra Chapter 13, Groups](../algebra/13-Groups.md),
  [Logic Chapter 14, Undecidability](../logic/14-Undecidability.md),
  [Combinatorics Chapter 11, Trees](../combinatorics/11-Trees.md), and the
  [Combinatorics book](../combinatorics/index.md) for graphs.
