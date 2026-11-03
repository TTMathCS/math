# 12. Homotopy

*So far we have deformed spaces. Now we deform maps. Two maps are homotopic if one can be slid continuously into the
other, and two spaces are homotopy equivalent if each can be squashed onto the other without tearing, even when they are
not homeomorphic: a disc squashes to a point, an annulus to a circle, a thick letter B to two circles joined at a point.
Homotopy is a coarser notion of "the same shape" than homeomorphism, and it is coarse in exactly the right way: it
forgets thickness and keeps holes. This chapter sets up the language (homotopic maps, homotopy equivalence, contractible
spaces, retractions, deformation retractions), proves the basic facts, and shows the first payoff: the Brouwer fixed
point theorem in the plane is the same statement as "a disc cannot be retracted onto its rim".*

!!! abstract "In this chapter"
    **You will learn:**

    - what a homotopy between two maps is, and why being homotopic is an equivalence relation that respects composition
    - when two spaces are homotopy equivalent, and which spaces are contractible
    - the homotopy types of the letters of the alphabet, of graphs, and of punctured planes and surfaces
    - what a retraction is, and why "no retraction of the disc onto its boundary circle" is equivalent to Brouwer's fixed point theorem
    - deformation retractions: the annulus onto a circle, the Möbius band onto its core, the punctured torus onto a figure eight
    - why homotopy invariants will be the main tools of the rest of the book

    **You need:** [Chapter 5](05-Continuity-and-Homeomorphism.md) (continuity, homeomorphism),
    [Chapter 6](06-Building-New-Spaces.md) (products and quotients), [Chapter 7](07-Connectedness.md) (path connectedness)
    and [Chapter 8](08-Compactness.md) (compactness). The letters of the alphabet from
    [Chapter 1](01-What-Topology-Is.md) come back. Section 12.3 uses Theorem 9.3 of
    [Chapter 9](09-Separation-and-Metrisation.md).

    **Levels:** 12.1 and 12.2 are intermediate; 12.3 is intermediate with an advanced theorem; 12.4 is intermediate to
    advanced.

## 12.1 Homotopic maps

### The idea

Draw two paths in the plane from a point $p$ to a point $q$. You can slide the first onto the second through a family of
in-between paths. Now punch a hole in the plane between them. Now the in-between paths must avoid the hole, because it is not part of the space. With the endpoints
held fixed, a path passing above the hole cannot be slid to one passing below: somewhere in between, a path would have to
cross the missing point. The hole is detected by trying to deform maps. That is the idea of the rest of the book.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="Left: two paths f0 and f1 from p to q, with dashed intermediate paths between them, showing a homotopy as a continuous family of paths. Right: an annulus with arrows pointing radially inward, pushing every point onto the inner circle: a deformation retraction of the annulus onto a circle">
  <path d="M 40 115 Q 120 195 200 115" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M 40 115 Q 120 155 200 115" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <path d="M 40 115 Q 120 115 200 115" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <path d="M 40 115 Q 120 75 200 115" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <path d="M 40 115 Q 120 35 200 115" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="40" cy="115" r="4" fill="currentColor"/>
  <circle cx="200" cy="115" r="4" fill="currentColor"/>
  <text x="28" y="120" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">p</text>
  <text x="212" y="120" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">q</text>
  <text x="120" y="174" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">f<tspan font-size="9" dy="4">0</tspan></text>
  <text x="120" y="66" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">f<tspan font-size="9" dy="4">1</tspan></text>
  <path d="M 240 115 A 90 90 0 1 0 420 115 A 90 90 0 1 0 240 115 Z M 290 115 A 40 40 0 1 0 370 115 A 40 40 0 1 0 290 115 Z" fill="#7ccf9a" fill-opacity="0.25" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="330" cy="115" r="40" fill="none" stroke="#eea66f" stroke-width="3"/>
  <line x1="407.6" y1="147.1" x2="376.2" y2="134.1" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="376.2,134.1 382.1,140.9 385.1,133.5" fill="currentColor"/>
  <line x1="362.1" y1="192.6" x2="349.1" y2="161.2" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="349.1,161.2 348.5,170.1 355.9,167.1" fill="currentColor"/>
  <line x1="297.9" y1="192.6" x2="310.9" y2="161.2" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="310.9,161.2 304.1,167.1 311.5,170.1" fill="currentColor"/>
  <line x1="252.4" y1="147.1" x2="283.8" y2="134.1" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="283.8,134.1 274.9,133.5 277.9,140.9" fill="currentColor"/>
  <line x1="252.4" y1="82.9" x2="283.8" y2="95.9" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="283.8,95.9 277.9,89.1 274.9,96.5" fill="currentColor"/>
  <line x1="297.9" y1="37.4" x2="310.9" y2="68.8" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="310.9,68.8 311.5,59.9 304.1,62.9" fill="currentColor"/>
  <line x1="362.1" y1="37.4" x2="349.1" y2="68.8" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="349.1,68.8 355.9,62.9 348.5,59.9" fill="currentColor"/>
  <line x1="407.6" y1="82.9" x2="376.2" y2="95.9" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="376.2,95.9 385.1,96.5 382.1,89.1" fill="currentColor"/>
  <text x="330" y="220" text-anchor="middle" font-size="12" fill="currentColor">annulus onto its inner circle</text>
  <text x="120" y="220" text-anchor="middle" font-size="12" fill="currentColor">a homotopy of paths</text>
</svg>
</div>

### The definition

Write $I = [0, 1]$.

**Definition.** Let $f, g : X \to Y$ be continuous. A **homotopy** from $f$ to $g$ is a continuous map

$$
H : X \times I \to Y \quad \text{with} \quad H(x, 0) = f(x) \text{ and } H(x, 1) = g(x) \text{ for all } x.
$$

If one exists, $f$ and $g$ are **homotopic**, written $f \simeq g$.

Think of $t \in I$ as time. At each time $t$ the map $h_t(x) = H(x, t)$ is a continuous map $X \to Y$; at time 0 it is
$f$, at time 1 it is $g$, and in between it moves continuously. The important word is that $H$ is continuous *in both
variables together*, not just in $x$ for each fixed $t$ and in $t$ for each fixed $x$.

A map homotopic to a constant map is **null-homotopic**.

### The first examples

**Straight-line homotopy.** Let $C \subseteq \mathbb{R}^n$ be **convex** (it contains the segment between any two of its
points). Any two maps $f, g : X \to C$ are homotopic, by

$$
H(x, t) = (1 - t) f(x) + t g(x).
$$

$H$ is continuous (built from continuous maps by sums and products), $H(x, 0) = f(x)$, $H(x, 1) = g(x)$, and $H(x, t)$
lies on the segment from $f(x)$ to $g(x)$, inside $C$. So **every map into $\mathbb{R}^n$, into a disc, or into a ball
is null-homotopic.** Maps into a convex set carry no topological information.

**Maps into a sphere that miss a point.** Let $f : X \to S^n$ be continuous and *not surjective*, missing a point $p$.
Then $f$ is null-homotopic. Indeed, $S^n \setminus \{p\}$ is homeomorphic to $\mathbb{R}^n$ by stereographic projection
from $p$ ([Chapter 11](11-Manifolds.md)), so $f$ is a map into a space homeomorphic to a convex set, and the straight-line
homotopy there, carried back to the sphere, shrinks $f$ to a constant.

**Maps into a sphere that are never opposite.** Let $f, g : X \to S^n$ with $f(x) \neq -g(x)$ for every $x$. Then
$f \simeq g$, by

$$
H(x, t) = \frac{(1 - t) f(x) + t g(x)}{|(1 - t) f(x) + t g(x)|}.
$$

The only thing to check is that the denominator is never 0. If $(1 - t) f(x) + t g(x) = 0$ with $f(x), g(x)$ unit
vectors, taking lengths gives $1 - t = t$, so $t = \tfrac12$ and $f(x) = -g(x)$, which we excluded. So $H$ is continuous,
stays on the sphere, and runs from $f$ to $g$.

Two corollaries are worth stating, because they come back in [Chapter 17](17-Applications-of-Algebraic-Topology.md):

- if $f : S^n \to S^n$ has **no fixed point**, then $f(x) \neq x = -(-x)$, so $f$ is homotopic to the antipodal map
  $x \mapsto -x$;
- if $f : S^n \to S^n$ **never sends a point to its antipode**, then $f$ is homotopic to the identity.

**Rotations of the circle.** The rotation $\rho_\alpha$ of $S^1$ by angle $\alpha$ is homotopic to the identity:
$H(z, t) = \rho_{t\alpha}(z)$ rotates by an angle growing from 0 to $\alpha$. In particular the antipodal map of $S^1$,
which is rotation by $\pi$, is homotopic to the identity. In complex notation, $H(z, t) = e^{i\pi t} z$.

**Worked example (the antipodal map of $S^3$).** Write $x \in S^3 \subseteq \mathbb{R}^4$ as $(x_1, x_2, x_3, x_4)$ and
rotate both coordinate planes at once:

$$
H(x, t) = \big(x_1 \cos \pi t - x_2 \sin \pi t,\; x_1 \sin \pi t + x_2 \cos \pi t,\; x_3 \cos \pi t - x_4 \sin \pi t,\; x_3 \sin \pi t + x_4 \cos \pi t\big).
$$

Each pair is rotated by the angle $\pi t$, which preserves its length, so $|H(x, t)| = |x| = 1$. At $t = 0$ this is the
identity; at $t = 1$ ($\cos\pi = -1$, $\sin\pi = 0$) it is $x \mapsto -x$. So the antipodal map of $S^3$ is homotopic to
the identity. The same trick works on every odd-dimensional sphere $S^{2k-1} \subseteq \mathbb{R}^{2k}$, where the
coordinates pair up. On even-dimensional spheres the antipodal map is **not** homotopic to the identity; that needs the
degree of [Chapter 17](17-Applications-of-Algebraic-Topology.md), and it is the heart of the hairy ball theorem.

**A pair of maps we cannot yet tell apart.** The identity of $S^1$ and a constant map $S^1 \to S^1$: are they homotopic?
Intuitively no: the identity wraps once around the circle and the constant map does not wrap at all. But proving it
needs a tool that counts the wrapping, the fundamental group, and it is done in
[Chapter 14](14-The-Circle-and-Covering-Spaces.md). For now, notice that none of the tricks above apply: the identity is
surjective, and it is opposite to the constant map at one point.

### Homotopy is an equivalence relation

We need one lemma about gluing maps together.

**Pasting lemma.** *Let $X = A \cup B$ with $A$ and $B$ closed, and let $f : A \to Y$, $g : B \to Y$ be continuous with
$f = g$ on $A \cap B$. Then the map $h : X \to Y$ equal to $f$ on $A$ and $g$ on $B$ is continuous.*

**Proof.** For a closed set $C \subseteq Y$, $h^{-1}(C) = f^{-1}(C) \cup g^{-1}(C)$. The set $f^{-1}(C)$ is closed in $A$,
and $A$ is closed in $X$, so it is closed in $X$; the same for $g^{-1}(C)$. A union of two closed sets is closed. So
preimages of closed sets are closed, which is continuity. $\square$

**Theorem 12.1.** *Homotopy is an equivalence relation on the set of continuous maps $X \to Y$.*

**Proof.**

- *Reflexive:* $H(x, t) = f(x)$ is a homotopy from $f$ to $f$.
- *Symmetric:* if $H$ runs from $f$ to $g$, then $\overline{H}(x, t) = H(x, 1 - t)$ runs from $g$ to $f$ (run the film
  backwards).
- *Transitive:* if $H$ runs from $f$ to $g$ and $K$ from $g$ to $k$, run them one after the other at double speed:

$$
L(x, t) = \begin{cases} H(x, 2t) & 0 \le t \le \tfrac12, \\ K(x, 2t - 1) & \tfrac12 \le t \le 1. \end{cases}
$$

  The two pieces are continuous on the closed sets $X \times [0, \tfrac12]$ and $X \times [\tfrac12, 1]$ and agree where
  they meet ($t = \tfrac12$ gives $H(x, 1) = g(x) = K(x, 0)$). By the pasting lemma $L$ is continuous. $\square$

The equivalence classes are **homotopy classes**, and the set of homotopy classes of maps $X \to Y$ is written $[X, Y]$.
A great deal of algebraic topology consists of computing such sets. For example, $[X, \mathbb{R}^n]$ has exactly one
element for every $X$ (straight-line homotopy), and [Chapter 14](14-The-Circle-and-Covering-Spaces.md) shows that
$[S^1, S^1]$ is in natural bijection with the integers, the class of $z \mapsto z^n$ corresponding to $n$.

### Homotopy respects composition

**Theorem 12.2.** *If $f_0 \simeq f_1 : X \to Y$ and $g_0 \simeq g_1 : Y \to Z$, then $g_0 \circ f_0 \simeq g_1 \circ f_1$.*

**Proof.** Let $F$ be a homotopy from $f_0$ to $f_1$ and $G$ one from $g_0$ to $g_1$. Then

$$
K(x, t) = G(F(x, t), t)
$$

is continuous (a composition of the continuous maps $(x, t) \mapsto (F(x, t), t)$ and $G$), with
$K(x, 0) = g_0(f_0(x))$ and $K(x, 1) = g_1(f_1(x))$. $\square$

This is what makes homotopy classes into a workable algebra: you can compose classes, and the answer does not depend on
which representatives you pick.

### Homotopy relative to a subset

Often we want part of the map to stay put during the deformation, for example the endpoints of a path.

**Definition.** Let $A \subseteq X$. A homotopy $H$ is **relative to $A$** (written $f \simeq g$ rel $A$) if
$H(a, t) = f(a)$ for all $a \in A$ and all $t$: the points of $A$ do not move.

Two paths $\gamma_0, \gamma_1 : I \to Y$ from $p$ to $q$ are **path homotopic** if they are homotopic rel $\{0, 1\}$, so
that every intermediate path also runs from $p$ to $q$. Without this condition the question is empty: any path
$\gamma$ is homotopic to the constant path at its starting point, by $H(s, t) = \gamma((1 - t)s)$, which shrinks the path
back along itself. With the endpoints fixed, path homotopy classes of loops are the elements of the **fundamental group**,
the subject of [Chapter 13](13-The-Fundamental-Group.md).

**Worked example.** In the plane minus the origin, let $\gamma_0(s) = (\cos \pi s, \sin \pi s)$ (the upper half circle
from $(1, 0)$ to $(-1, 0)$) and $\gamma_1(s) = (\cos \pi s, -\sin \pi s)$ (the lower half circle). As maps
$I \to \mathbb{R}^2 \setminus \{0\}$, they are homotopic: each is homotopic to a constant by the shrinking homotopy above.
But they are **not** path homotopic. Following one and then the other backwards is a loop around the origin, and
Chapter 14 proves that this loop cannot be shrunk to a point in $\mathbb{R}^2 \setminus \{0\}$. In the whole plane, the
straight-line homotopy $(1 - t)\gamma_0(s) + t \gamma_1(s)$ keeps the endpoints fixed, but at $s = \tfrac12$,
$t = \tfrac12$ it passes through $(0, 0)$: exactly the forbidden point.

## 12.2 Homotopy equivalence and contractible spaces

### The definition

A homeomorphism $f : X \to Y$ has an inverse $g$ with $g \circ f = \mathrm{id}_X$ and $f \circ g = \mathrm{id}_Y$. Relax
"equal" to "homotopic":

**Definition.** A continuous map $f : X \to Y$ is a **homotopy equivalence** if there is a continuous $g : Y \to X$ with

$$
g \circ f \simeq \mathrm{id}_X \qquad \text{and} \qquad f \circ g \simeq \mathrm{id}_Y.
$$

Then $g$ is a **homotopy inverse** of $f$, and $X$ and $Y$ are **homotopy equivalent**, or have the same **homotopy
type**, written $X \simeq Y$.

**Theorem 12.3.** *Homotopy equivalence of spaces is an equivalence relation.*

**Proof.** Reflexive and symmetric are clear (the identity; swap $f$ and $g$). For transitivity, let
$f : X \to Y$, $g : Y \to X$ and $f' : Y \to Z$, $g' : Z \to Y$ be homotopy equivalences with their inverses. Then, using
Theorem 12.2 at each step,

$$
(g \circ g') \circ (f' \circ f) = g \circ (g' \circ f') \circ f \simeq g \circ \mathrm{id}_Y \circ f = g \circ f \simeq \mathrm{id}_X,
$$

and in the same way $(f' \circ f) \circ (g \circ g') \simeq \mathrm{id}_Z$. $\square$

Homeomorphic spaces are homotopy equivalent, but not conversely, as the next examples show.

### Contractible spaces

**Definition.** A space is **contractible** if it is homotopy equivalent to a one-point space.

**Theorem 12.4.** *$X$ is contractible if and only if the identity map of $X$ is null-homotopic.*

**Proof.** Let $P = \{*\}$ be a point, $c : X \to P$ the only map, and $i : P \to X$ the map with $i(*) = x_0$. Always
$c \circ i = \mathrm{id}_P$. And $i \circ c$ is the constant map at $x_0$. So $c$ is a homotopy equivalence exactly when
$\mathrm{id}_X$ is homotopic to the constant map at $x_0$. If $\mathrm{id}_X$ is homotopic to some constant map, choose
$x_0$ to be its value. $\square$

**Examples.**

- $\mathbb{R}^n$, a disc, a ball, any convex set: contractible by the straight-line homotopy
  $H(x, t) = (1 - t)x + t x_0$.
- A **star-shaped** set (there is a point $x_0$ such that the segment from $x_0$ to every point of the set stays in the
  set), such as a filled star or a filled letter L: contractible by the same formula.
- A **tree** (a connected graph with no cycles): contractible. Shrink the leaves (vertices of degree 1) along their
  edges one at a time; a finite tree has a leaf, and removing it leaves a smaller tree.
- The circle is **not** contractible, but proving it is again the job of Chapter 14.

**Theorem 12.5.** *A contractible space is path connected.*

**Proof.** Let $H$ be a homotopy from $\mathrm{id}_X$ to the constant map at $x_0$. For any $x$, the map
$t \mapsto H(x, t)$ is a path from $H(x, 0) = x$ to $H(x, 1) = x_0$. So every point is joined to $x_0$. $\square$

**A caution.** Contractible spaces can still look complicated. The **comb space**, the union of the segment $[0, 1]$ on
the $x$-axis, the vertical segment $\{0\} \times [0, 1]$ and the vertical segments $\{1/n\} \times [0, 1]$ for
$n = 1, 2, 3, \ldots$, is contractible (slide everything down to the $x$-axis, then along the axis to the origin), yet it
has strange local behaviour near the left-hand segment: it is not locally path connected there. More dramatically, there
are contractible open 3-manifolds not homeomorphic to $\mathbb{R}^3$ (J. H. C. Whitehead found one in 1935).

### Homotopy types of familiar spaces

**The cylinder and the circle.** Let $Z = S^1 \times [0, 1]$, $i : S^1 \to Z$ the inclusion $z \mapsto (z, 0)$ and
$p : Z \to S^1$ the projection $(z, s) \mapsto z$. Then $p \circ i = \mathrm{id}_{S^1}$, and
$i \circ p (z, s) = (z, 0)$ is homotopic to $\mathrm{id}_Z$ by $H((z, s), t) = (z, ts)$. So $Z \simeq S^1$. The cylinder
and the circle have different dimensions, so they are certainly not homeomorphic.

**The punctured plane.** $\mathbb{R}^n \setminus \{0\} \simeq S^{n-1}$: inclusion $i : S^{n-1} \to \mathbb{R}^n \setminus \{0\}$
and normalisation $r(x) = x/|x|$ satisfy $r \circ i = \mathrm{id}$ and $i \circ r \simeq \mathrm{id}$ by
$H(x, t) = (1 - t)x + t x/|x|$, which is never 0 since it is a positive multiple of $x$.

**Letters of the alphabet.** In [Chapter 1](01-What-Topology-Is.md) we sorted letters up to homeomorphism. Up to
homotopy the sorting is much coarser. In a plain sans-serif font, thought of as thin curves:

| Homotopy type | Letters |
| --- | --- |
| a point (contractible) | C E F G H I J K L M N S T U V W X Y Z |
| a circle | A D O P Q R |
| two circles joined at a point (figure eight) | B |

Every letter is homotopy equivalent to a point or to a bunch of circles joined at a point, and the only thing that
survives is *the number of holes*. The classification up to homeomorphism in Chapter 1 cared about branch points: T has
a point whose removal leaves 3 pieces, X one whose removal leaves 4, so T and X are not homeomorphic. Up to homotopy
such details are forgotten completely, and H, K, T and X are all contractible. That the figure eight is not homotopy
equivalent to a circle, and that a circle is not contractible, are true but need the fundamental group.

### Graphs

**Theorem 12.6 (statement with proof idea).** *A finite connected graph with $V$ vertices and $E$ edges is homotopy
equivalent to a bouquet of $E - V + 1$ circles (that many circles joined at one point).*

*Idea.* Choose a **spanning tree** $T$: a tree inside the graph containing every vertex. It has $V$ vertices and so
$V - 1$ edges. The tree is contractible, and collapsing a contractible subgraph to a point is a homotopy equivalence
(this is the general fact that collapsing a contractible subcomplex is a homotopy equivalence; Hatcher, Proposition 0.17).
After collapsing $T$, one vertex remains, and each of the $E - (V - 1)$ edges not in $T$ becomes a loop at it. $\square$

**Worked examples.**

- A cycle graph $C_n$ ($n$ vertices, $n$ edges): $n - n + 1 = 1$ circle.
- The complete graph $K_4$: $V = 4$, $E = 6$, so $6 - 4 + 1 = 3$ circles.
- $K_{3,3}$: $V = 6$, $E = 9$, so 4 circles.
- The Petersen graph: $V = 10$, $E = 15$, so 6 circles.

The number $E - V + 1$ is the **cycle rank** (or first Betti number) of the graph, and it equals $1 - \chi$ where
$\chi = V - E$ is the graph's Euler characteristic. So for graphs, the Euler characteristic is a homotopy invariant; [Chapter 16](16-Homology.md)
proves this for all finite simplicial complexes.

### Why homotopy equivalence is the right notion

The tools of the next chapters, the fundamental group, homology and degree, are **homotopy invariants**: homotopy
equivalent spaces get the same answer. That is a strength and a limitation. A strength, because homotopy equivalences
are easy to find (squash, slide, shrink), so one can replace a complicated space by a simple one before computing: to
find the fundamental group of the plane minus two points, squash it to a figure eight first. A limitation, because
homotopy invariants cannot tell apart spaces that are homotopy equivalent but not homeomorphic, such as a point and a
disc, or a circle and a Möbius band. For those, the dimension (Chapter 11) or the boundary (Chapter 10) is needed.

## 12.3 Retractions

### The definition

**Definition.** Let $A \subseteq X$. A **retraction** of $X$ onto $A$ is a continuous map $r : X \to A$ with $r(a) = a$
for all $a \in A$. If one exists, $A$ is a **retract** of $X$.

In other words, $r \circ i = \mathrm{id}_A$, where $i : A \to X$ is the inclusion. The retraction folds the whole space
onto the subspace without moving the subspace.

**Examples.**

- Any point $\{x_0\}$ is a retract of any space (the constant map).
- $S^{n-1}$ is a retract of $\mathbb{R}^n \setminus \{0\}$, by $r(x) = x/|x|$.
- Each circle of a figure eight is a retract of it: send the other circle to the common point.
- The interval $[-1, 1]$ is a retract of $\mathbb{R}$, by clamping: $r(x) = \max(-1, \min(1, x))$.
- $\{0, 1\}$ is **not** a retract of $[0, 1]$: a retraction would be a continuous map from the connected space $[0, 1]$
  onto the disconnected space $\{0, 1\}$, and continuous images of connected spaces are connected
  ([Chapter 7](07-Connectedness.md)).

The last example is the one-dimensional case of the most important non-retraction.

**The no-retraction theorem in dimension 2.** *There is no retraction of the closed disc $D^2$ onto its boundary circle
$S^1$.*

We cannot prove this yet. The connectedness argument fails ($S^1$ is connected), and the proof uses the fundamental
group of the circle: it is in [Chapter 14](14-The-Circle-and-Covering-Spaces.md). The $n$-dimensional version, no
retraction $D^n \to S^{n-1}$, is proved with homology in [Chapter 17](17-Applications-of-Algebraic-Topology.md). What we
can do now is show that it is *equivalent* to a famous theorem.

### Retractions and fixed points

A space $X$ has the **fixed point property** if every continuous map $f : X \to X$ has a fixed point, a point with
$f(x) = x$.

**Brouwer's fixed point theorem (dimension 2).** *Every continuous map $f : D^2 \to D^2$ has a fixed point.*

**Theorem 12.7.** *The following are equivalent:*

1. *there is no retraction $D^2 \to S^1$;*
2. *every continuous map $D^2 \to D^2$ has a fixed point.*

**Proof that (1) implies (2).** Suppose $f : D^2 \to D^2$ had no fixed point. For each $x$, the points $f(x)$ and $x$ are
different, so there is a ray starting at $f(x)$ and passing through $x$. Let $r(x)$ be the point where this ray, after
passing through $x$, leaves the disc. Explicitly, put $d = x - f(x) \neq 0$; then $r(x) = x + s\,d$ where $s \ge 0$ is
the non-negative solution of $|x + s\,d|^2 = 1$, a quadratic equation:

$$
s = \frac{-x \cdot d + \sqrt{(x \cdot d)^2 + |d|^2 (1 - |x|^2)}}{|d|^2}.
$$

The square root is of a non-negative number (since $|x| \le 1$), and $|d|^2 > 0$, so $s$ depends continuously on $x$, and
$r : D^2 \to S^1$ is continuous. If $x \in S^1$, then $|x| = 1$ and $x \cdot d = 1 - x \cdot f(x) \ge 0$ (because
$x \cdot f(x) \le |x||f(x)| \le 1$), so $s = (-x \cdot d + |x \cdot d|)/|d|^2 = 0$ and $r(x) = x$. So $r$ is a retraction
of $D^2$ onto $S^1$, contradicting (1).

**Proof that (2) implies (1).** Suppose $r : D^2 \to S^1$ were a retraction. The map $f(x) = -r(x)$ is a continuous map
$D^2 \to S^1 \subseteq D^2$. By (2) it has a fixed point $x = -r(x)$. Then $x$ is on the circle, so $r(x) = x$, giving
$x = -x$, so $x = 0$, which is not on the circle. Contradiction. $\square$

So once Chapter 14 shows there is no retraction, Brouwer's theorem follows, and conversely. Brouwer's theorem has a
famous informal illustration: stir a cup of coffee (without splashing), and when it settles, some point of the surface is
where it started. The idealisation matters: the surface is treated as a disc, the motion as a continuous map, and the
theorem says nothing about which point or how to find it.

### Two more facts about retracts

**Theorem 12.8.** *A retract of a Hausdorff space is closed.*

**Proof.** If $r : X \to A$ is a retraction, then $A = \{x \in X : r(x) = x\}$: points of $A$ are fixed, and $r(x)$
always lies in $A$, so $r(x) = x$ forces $x \in A$. This is the set where the two continuous maps $r$ and
$\mathrm{id}_X$ (both viewed as maps into $X$) agree, which is closed when $X$ is Hausdorff (the consequence of
Theorem 9.3 in [Chapter 9](09-Separation-and-Metrisation.md)). $\square$

So the open interval $(0, 1)$ is not a retract of $[0, 1]$, and the open disc is not a retract of the plane.

**Theorem 12.9.** *If $X$ has the fixed point property and $A$ is a retract of $X$, then $A$ has the fixed point
property.*

**Proof.** Let $g : A \to A$ be continuous and $r : X \to A$ a retraction. The map $g \circ r : X \to A \subseteq X$ has a
fixed point $x$: $g(r(x)) = x$. The left side lies in $A$, so $x \in A$, so $r(x) = x$, and then $g(x) = x$. $\square$

**Worked example.** A closed square $Q$ has the fixed point property, because it is homeomorphic to the disc (radial
stretching), and the property is a topological invariant. A "T"-shaped region made of two rectangles has it too: it is
homeomorphic to a disc. And any closed interval $[a, b]$ inside the square, being a retract of it (project onto the
interval's line and clamp), has the fixed point property, which in this case is the intermediate value theorem
([Chapter 7](07-Connectedness.md)): a continuous $g : [a, b] \to [a, b]$ has $g(x) - x$ changing sign from $\ge 0$ at $a$ to
$\le 0$ at $b$.

## 12.4 Deformation retracts

A retraction folds $X$ onto $A$ in one go. A **deformation retraction** does it gradually, by a homotopy, and that
makes $X$ and $A$ homotopy equivalent.

**Definition.** A subspace $A \subseteq X$ is a **deformation retract** of $X$ if there is a homotopy
$H : X \times I \to X$ with

- $H(x, 0) = x$ for all $x \in X$ (it starts as the identity),
- $H(x, 1) \in A$ for all $x \in X$ (it ends inside $A$), and
- $H(a, t) = a$ for all $a \in A$ and all $t$ (points of $A$ never move).

Then $r(x) = H(x, 1)$ is a retraction, and $H$ is a homotopy rel $A$ from $\mathrm{id}_X$ to $i \circ r$. (Some books
call this a *strong* deformation retraction and allow points of $A$ to move during the deformation in the weaker
version; we will not need the difference.)

**Theorem 12.10.** *If $A$ is a deformation retract of $X$, then the inclusion $i : A \to X$ is a homotopy equivalence;
in particular $A \simeq X$.*

**Proof.** Let $r = H(\cdot, 1)$. Then $r \circ i = \mathrm{id}_A$ (points of $A$ do not move) and $H$ is a homotopy from
$\mathrm{id}_X$ to $i \circ r$. So $r$ is a homotopy inverse of $i$. $\square$

### The annulus onto a circle

**Worked example.** Let $A = \{x \in \mathbb{R}^2 : 1 \le |x| \le 2\}$, the closed annulus, and $C = \{|x| = 1\}$ its
inner circle. Define

$$
H(x, t) = (1 - t)\, x + t \,\frac{x}{|x|}.
$$

1. *It stays in the annulus.* $H(x, t)$ is a positive multiple of $x$, with length $(1 - t)|x| + t$. Since $1 \le |x| \le 2$,
   this is between $(1 - t) + t = 1$ and $2(1 - t) + t = 2 - t \le 2$.
2. *It is continuous*, as $|x| \ge 1$ never vanishes.
3. *At $t = 0$* it is the identity; *at $t = 1$* it is $x/|x|$, on the inner circle.
4. *Points of $C$ do not move*: if $|x| = 1$, then $x/|x| = x$ and $H(x, t) = x$.

So $C$ is a deformation retract of $A$, and the annulus is homotopy equivalent to a circle. Check at a point:
$x = (0, 2)$, $t = \tfrac12$: $H = \tfrac12(0, 2) + \tfrac12(0, 1) = (0, 1.5)$, halfway between the outer and inner
circles. The same formula shows that $\mathbb{R}^n \setminus \{0\}$ deformation retracts onto $S^{n-1}$.

### The Möbius band onto its core

**Worked example.** Model the Möbius band $M$ as the rectangle $[0, 1] \times [-1, 1]$ with $(0, y)$ glued to $(1, -y)$.
The **core circle** is the image of the middle line $y = 0$ (its two ends $(0, 0)$ and $(1, 0)$ are glued, so it is a
circle). Define

$$
H((s, y), t) = (s, (1 - t) y).
$$

It is well defined on the quotient: the glued points $(0, y)$ and $(1, -y)$ go to $(0, (1 - t)y)$ and $(1, -(1 - t)y)$,
which are glued too. It is continuous on the rectangle and respects the gluing, so it is continuous on $M$ (the universal
property of the quotient, together with the fact that $M \times I$ is a quotient of the rectangle times $I$, which holds
because $I$ is compact). It starts at the identity, ends on the core, and fixes the core. So **the Möbius band is homotopy
equivalent to a circle**, and so is the annulus. Homotopy cannot tell the Möbius band and the annulus apart; their
boundaries can (one circle versus two, [Chapter 10](10-Classification-of-Surfaces.md)).

### The punctured torus onto a figure eight

**Worked example.** Take the torus as the square $[-1, 1]^2$ with opposite sides glued, and remove the centre point.
Push every point of the punctured square straight away from the centre until it reaches the boundary of the square:

$$
H(x, t) = (1 - t)\, x + t\, \frac{x}{\|x\|_\infty},
$$

where $\|x\|_\infty = \max(|x_1|, |x_2|)$, which is 1 exactly on the boundary of the square. Points on the boundary do
not move, so the homotopy is compatible with the gluing of the sides, and it passes to the punctured torus. At $t = 1$
everything lies on the boundary of the square, which after gluing is two circles ($a$ and $b$ of the word
$aba^{-1}b^{-1}$) meeting at the single vertex: a figure eight. So **the punctured torus deformation retracts onto a
figure eight.**

The same argument works for any closed surface given by a polygon word: removing a point from the inside of the polygon
leaves a space that deformation retracts onto the glued boundary of the polygon, a graph. For the genus-$g$ surface with
its one-vertex $4g$-gon, that graph is a bouquet of $2g$ circles. This fact is used in
[Chapter 15](15-Van-Kampen-and-Surfaces.md) to compute the fundamental groups of all closed surfaces.

### The plane minus two points onto a figure eight

**Worked example (described).** Let $X = \mathbb{R}^2 \setminus \{(-1, 0), (1, 0)\}$. First push everything outside
the rectangle $R = [-2, 2] \times [-1, 1]$ radially towards the origin until it lies on the boundary of $R$; points of
$R$ do not move. Then, separately in the left square $[-2, 0] \times [-1, 1]$ and the right square
$[0, 2] \times [-1, 1]$, push each point away from that square's puncture onto the square's boundary, exactly as in the
punctured torus. What remains is the boundary of the two squares: the rectangle's outline plus the middle segment
$\{0\} \times [-1, 1]$. That is a theta-shaped graph with two vertices, $(0, 1)$ and $(0, -1)$, and three edges between
them. By Theorem 12.6 it is homotopy equivalent to a bouquet of $E - V + 1 = 3 - 2 + 1 = 2$ circles, a figure eight. So
the plane with two holes has the homotopy type of a figure eight, and the plane with
$k$ holes that of a bouquet of $k$ circles.

### Homotopy equivalence through a bigger space

Deformation retractions give homotopy equivalences, and in a sense all homotopy equivalences arise this way:

**Theorem (statement).** *Two spaces $X$ and $Y$ are homotopy equivalent if and only if there is a space $Z$ containing
copies of both as deformation retracts.*

For a map $f : X \to Y$, the space $Z$ is the **mapping cylinder** $M_f$: the cylinder $X \times I$ with its end
$X \times \{1\}$ glued to $Y$ by $(x, 1) \sim f(x)$. It always deformation retracts onto $Y$ (slide along the cylinder),
and it deformation retracts onto $X \times \{0\}$ exactly when $f$ is a homotopy equivalence (this direction is the hard
one; Hatcher, Corollary 0.21). It lets us think of any homotopy equivalence as "a space squashed onto two different
subspaces".

### Where homotopy goes next

Homotopy is a relation between maps. The next three chapters turn it into algebra. Loops at a base point, up to path
homotopy, form a group, the **fundamental group** $\pi_1$ ([Chapter 13](13-The-Fundamental-Group.md)); homotopy
equivalent spaces have isomorphic fundamental groups; and for the circle the group is the integers
([Chapter 14](14-The-Circle-and-Covering-Spaces.md)), which finally proves that the circle is not contractible, that
the disc does not retract onto its boundary, and so Brouwer's theorem in the plane. Replacing loops by maps of spheres
$S^n$ gives the higher homotopy groups $\pi_n$, which are easy to define and, as
[Chapter 20](20-Where-Topology-Goes.md) explains, extraordinarily hard to compute.

## A short history

Deforming curves on surfaces goes back to the nineteenth century: Camille Jordan studied which closed curves on a
surface can be deformed into one another in 1866, and Henri Poincaré's *Analysis Situs* (1895) defined the fundamental
group by loops up to deformation. L. E. J. Brouwer used continuous deformations of maps systematically in his papers on
the degree of a map and on fixed points around 1911–1912; his fixed point theorem for the $n$-dimensional ball is from
1912 (the case $n = 3$ had been proved by Piers Bohl in 1904). Karol Borsuk created the theory of retracts in 1931.
Witold Hurewicz, in a series of notes in 1935–36, introduced the higher homotopy groups and the idea of classifying spaces
up to homotopy equivalence, which has been the organising principle of algebraic topology ever since.

## Check yourself

??? question "1. Show that any two continuous maps $f, g : X \to \mathbb{R}^n$ are homotopic, and write down the homotopy at $t = \tfrac14$ for $f(x) = x^2$, $g(x) = 0$ on $X = \mathbb{R}$."
    $\mathbb{R}^n$ is convex, so $H(x, t) = (1 - t)f(x) + t g(x)$ is a homotopy (12.1). For the example,
    $H(x, t) = (1 - t)x^2$, and at $t = \tfrac14$ it is $\tfrac34 x^2$: the parabola is flattened gradually to the
    $x$-axis.

??? question "2. Prove: if $Y$ is contractible, any two maps $X \to Y$ are homotopic. If $X$ is contractible and $Y$ path connected, any two maps $X \to Y$ are homotopic."
    If $H$ contracts $Y$ to $y_0$, then for any $f : X \to Y$, $(x, t) \mapsto H(f(x), t)$ is a homotopy from $f$ to the
    constant map at $y_0$. Two maps homotopic to the same constant are homotopic to each other (Theorem 12.1). For the
    second, let $K$ contract $X$ to $x_0$. Then $f(K(x, t))$ is a homotopy from $f$ to the constant at $f(x_0)$, and
    likewise $g$ is homotopic to the constant at $g(x_0)$. A path $\gamma$ from $f(x_0)$ to $g(x_0)$ in $Y$ gives a
    homotopy $(x, t) \mapsto \gamma(t)$ between the two constants. Chain the three homotopies.

??? question "3. Show that the antipodal map of $S^1$ and the identity of $S^1$ are homotopic, and write the homotopy in coordinates."
    The antipodal map is rotation by $\pi$. $H((x, y), t) = (x\cos\pi t - y\sin\pi t,\; x\sin\pi t + y\cos\pi t)$ rotates by
    $\pi t$: at $t = 0$ it is the identity, at $t = 1$ it is $(x, y) \mapsto (-x, -y)$, and it stays on the circle
    because rotations preserve length.

??? question "4. Let $f : S^2 \to S^2$ be a continuous map with $f(x) \neq -x$ for all $x$. Show that $f$ is homotopic to the identity. Is the map $f(x, y, z) = (x, y, |z|)$ homotopic to the identity?"
    By 12.1 (maps never opposite), with $g = \mathrm{id}$: $f(x) \neq -\mathrm{id}(x)$, so $f \simeq \mathrm{id}$. For the
    example: $f$ is not surjective (it misses every point with $z < 0$), so it is null-homotopic by 12.1. The first
    criterion does not apply to it: at $x = (0, 0, -1)$ we get $f(x) = (0, 0, 1) = -x$. And it cannot apply, because the
    identity of $S^2$ is not null-homotopic (it has degree 1, [Chapter 17](17-Applications-of-Algebraic-Topology.md)).
    So $f$ is not homotopic to the identity.

??? question "5. Give the homotopy types of the capital letters of the word TOPOLOGY in a sans-serif font."
    T: contractible. O: circle. P: circle. O: circle. L: contractible. O: circle. G: contractible (in sans-serif a G is an
    open curve). Y: contractible. So four circles and four points.

??? question "6. Find the homotopy type of the complete graph $K_5$ and of the cube graph (the 8 vertices and 12 edges of a cube)."
    $K_5$: $V = 5$, $E = 10$, so a bouquet of $10 - 5 + 1 = 6$ circles. Cube graph: $V = 8$, $E = 12$, so
    $12 - 8 + 1 = 5$ circles. Check with the cube: its surface has 6 faces, and a planar graph's bounded faces are $F - 1$,
    here 5, matching the 5 independent cycles.

??? question "7. Prove that a retract of a contractible space is contractible."
    Let $r : X \to A$ be a retraction and $H$ a homotopy from $\mathrm{id}_X$ to a constant map $c$. Define
    $K(a, t) = r(H(a, t))$ for $a \in A$. It is continuous, $K(a, 0) = r(a) = a$, and $K(a, 1) = r(c)$ is constant. So
    $\mathrm{id}_A$ is null-homotopic and $A$ is contractible (Theorem 12.4). Consequence: since the circle is not
    contractible (Chapter 14), it is not a retract of the disc, which is the no-retraction theorem again.

??? question "8. Show that $\mathbb{R}^n \setminus \{0\}$ deformation retracts onto $S^{n-1}$, and onto the sphere of radius 5."
    $H(x, t) = (1 - t)x + t\,x/|x|$ works as for the annulus: it is a positive multiple of $x$ (never 0), equals $x$ on
    the unit sphere, starts at the identity and ends on $S^{n-1}$. For radius 5 use $H(x, t) = (1 - t)x + 5t\,x/|x|$, with
    the same checks: on $|x| = 5$, $5x/|x| = x$.

??? question "9. Show that the cylinder $S^1 \times [0, 1]$ and the Möbius band are homotopy equivalent but not homeomorphic."
    Both deformation retract onto a circle (12.2 and 12.4), so both are homotopy equivalent to $S^1$, hence to each
    other. The boundary of the cylinder is two circles, the boundary of the Möbius band is one circle, and a
    homeomorphism of surfaces with boundary carries boundary onto boundary (by invariance of domain, Chapter 11). So they
    are not homeomorphic. (Orientability distinguishes them too.)

??? question "10. Let $f, g : X \to S^1$ with $g$ never equal to $-f$. Suppose $f$ is null-homotopic. Prove $g$ is null-homotopic."
    By the "never opposite" criterion of 12.1, $f \simeq g$. Since $f$ is homotopic to a constant, so is $g$
    (transitivity). This is a useful principle: a small enough perturbation of a map into a sphere (one that never moves a
    point halfway around) does not change its homotopy class.

??? question "11. Prove that homotopy equivalent spaces have the same number of path components."
    Let $f : X \to Y$, $g : Y \to X$ be homotopy inverse. Continuous maps send path components into path components, so
    $f$ induces a map $f_*$ from the set of path components of $X$ to that of $Y$, and similarly $g_*$. If $H$ is a
    homotopy from $g \circ f$ to $\mathrm{id}_X$, then for each $x$ the path $t \mapsto H(x, t)$ joins $g(f(x))$ to $x$, so
    $g_* f_*$ is the identity on path components. Likewise $f_* g_*$ is the identity. So $f_*$ is a bijection. In
    particular a contractible space has one path component, and the two-point discrete space is not contractible.

??? question "12. The space $\Theta$ is a circle with a diameter added. Find a deformation retraction, or at least a homotopy equivalence, to a simpler space, and name its homotopy type."
    $\Theta$ is a graph with 2 vertices (the ends of the diameter) and 3 edges (two semicircles and the diameter). By
    Theorem 12.6 it is homotopy equivalent to a bouquet of $3 - 2 + 1 = 2$ circles, the figure eight. Concretely: the
    diameter is a spanning tree; collapsing it to a point turns the two semicircles into two loops at one point. (It is
    not a deformation retract onto a figure eight sitting inside it, since no subspace of $\Theta$ is a figure eight, but
    collapsing a contractible subgraph is still a homotopy equivalence.)

## What you learned

- A **homotopy** is a continuous family of maps $H(x, t)$; being homotopic is an equivalence relation that respects
  composition, so homotopy classes $[X, Y]$ can be composed.
- Maps into convex sets are all homotopic; maps into $S^n$ that miss a point are null-homotopic; maps into $S^n$ that are
  never opposite are homotopic. The antipodal map of an odd-dimensional sphere is homotopic to the identity.
- **Homotopy equivalence** relaxes homeomorphism; **contractible** spaces are those homotopy equivalent to a point. A
  connected graph is a bouquet of $E - V + 1$ circles up to homotopy.
- A **retraction** folds a space onto a subspace; "no retraction $D^2 \to S^1$" is equivalent to Brouwer's fixed point
  theorem in the plane.
- A **deformation retraction** does it gradually and gives a homotopy equivalence: the annulus and the Möbius band onto
  a circle, the punctured torus and the twice-punctured plane onto a figure eight.
- The invariants of the next chapters are homotopy invariants: they see holes, not thickness.

**Next:** [Chapter 13](13-The-Fundamental-Group.md), loops up to homotopy form a group, the first algebraic invariant of
a space.

## Further reading

- A. Hatcher, *Algebraic Topology*, 2002. Chapter 0 covers homotopy, homotopy equivalence, deformation retractions and
  mapping cylinders, with many pictures; free online from the author.
- J. R. Munkres, *Topology*, 2nd edition, 2000. §51 (homotopy of paths) and §58 (deformation retracts and homotopy type).
- M. A. Armstrong, *Basic Topology*, 1983. Chapter 5 on homotopy and the fundamental group.
- W. Fulton, *Algebraic Topology: A First Course*, 1995. Builds the subject from winding numbers in the plane.
- K. Borsuk, *Theory of Retracts*, 1967.
- On this site: [Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md) for the metric-space background;
  [Combinatorics, Chapter 11](../combinatorics/11-Trees.md) for spanning trees;
  [Algebra, Chapter 13](../algebra/13-Groups.md) for groups, needed from the next chapter; the U of T guide
  [MAT257Y1 Unit 3: Continuity and Connectedness](../../uoft/MAT257Y1/unit03.md).
