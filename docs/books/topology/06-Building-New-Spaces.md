# 6. Building new spaces

*Chapter 2 described a torus as a square with its opposite edges glued, and a Klein bottle as a square glued with a
twist. Those were pictures. To prove anything about such spaces we need to know exactly which sets are open in them.
This chapter gives the two machines that build almost every space in topology: the product, which makes a torus out of
two circles, and the quotient, which makes a torus out of a square by declaring some points to be the same. Then we
use them to build cones, suspensions and spheres of every dimension, and we check, with proofs, that the spaces built
in different ways really are homeomorphic.*

!!! abstract "In this chapter"
    **You will learn:**

    - the product topology on $X \times Y$, why it is the right one, and how it handles infinitely many factors
    - the quotient topology, and how to build the cylinder, Möbius band, torus, Klein bottle and projective plane by gluing the edges of a square
    - the universal properties that make maps into products and out of quotients easy to check
    - gluing along a map, wedge sums, and the first idea of a cell complex
    - cones and suspensions, and why the suspension of a sphere is the next sphere
    - why every sphere is a disc with its whole boundary squeezed to one point

    **You need:** [Chapter 4](04-Topological-Spaces.md) (bases, subspaces) and [Chapter 5](05-Continuity-and-Homeomorphism.md)
    (continuity, homeomorphisms). The surfaces of [Chapter 2](02-Surfaces-and-Euler-Characteristic.md). We quote two
    results proved in [Chapter 8](08-Compactness.md): continuous images of compact spaces are compact, and a continuous
    bijection from a compact space to a Hausdorff space is a homeomorphism. Equivalence relations are in
    [Logic, Chapter 6](../logic/06-Relations-and-Functions.md). Gentler version of the Möbius strip:
    [The Möbius strip](../../topics/infinity/level-2/01-mobius-strip.md) in the Topics shelf.

    **Levels:** 6.1 is intermediate; 6.2 is intermediate to advanced; 6.3 and 6.4 are advanced.

## 6.1 The product topology

The plane is pairs of real numbers, $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$. A torus is pairs of points on a
circle, one angle around the hole and one angle around the tube. A cylinder is a point on a circle together with a
height. In each case the set is a **Cartesian product** $X \times Y = \{(x, y) : x \in X, \, y \in Y\}$.

> If $X$ and $Y$ are topological spaces, which subsets of $X \times Y$ should be open?

The natural first guess is the **open rectangles** $U \times V$ with $U$ open in $X$ and $V$ open in $Y$. In the plane
these are the open rectangles $(a, b) \times (c, d)$, together with fancier products such as
$\big((0, 1) \cup (2, 3)\big) \times (0, 1)$. But a union of two open rectangles, such as a cross shape, is not a
rectangle, and we certainly want it to be open. So we let the rectangles be a **basis** in the sense of
[Chapter 4](04-Topological-Spaces.md): the open sets are all unions of open rectangles.

For that to work, the rectangles must pass the basis test: they cover $X \times Y$ (the whole space is the rectangle
$X \times Y$), and the intersection of two of them must be a union of them. In fact it is a single rectangle:

$$
(U_1 \times V_1) \cap (U_2 \times V_2) = (U_1 \cap U_2) \times (V_1 \cap V_2),
$$

because $(x, y)$ is in both exactly when $x$ is in both $U$'s and $y$ in both $V$'s. *Example:*
$\big((0, 2) \times (1, 3)\big) \cap \big((1, 4) \times (0, 2)\big) = (1, 2) \times (1, 2)$.

**Definition.** The **product topology** on $X \times Y$ is the topology whose open sets are the unions of open
rectangles $U \times V$.

For the plane we already had a topology, from the Euclidean metric. Do the two agree?

**Theorem 6.1.** The product topology on $\mathbb{R} \times \mathbb{R}$ is the usual topology of $\mathbb{R}^2$. More
generally, if $(X, d_X)$ and $(Y, d_Y)$ are metric spaces, the product topology on $X \times Y$ comes from the metric
$d\big((x, y), (x', y')\big) = \max\big(d_X(x, x'), d_Y(y, y')\big)$.

*Proof.* In the max metric, the open ball of radius $r$ around $(x, y)$ is exactly $B(x, r) \times B(y, r)$, a
rectangle. So every metric-open set (a union of balls) is product-open. Conversely, let $W = \bigcup U_i \times V_i$ be
product-open and $(x, y) \in W$, say $(x, y) \in U \times V$. Choose $r_1$ with $B(x, r_1) \subseteq U$ and $r_2$ with
$B(y, r_2) \subseteq V$, and let $r = \min(r_1, r_2)$. The max-metric ball of radius $r$ is
$B(x, r) \times B(y, r) \subseteq U \times V \subseteq W$. So $W$ is metric-open.

For $\mathbb{R}^2$ it remains to see that the max metric and the Euclidean metric have the same open sets. Every
Euclidean disc of radius $r$ contains the square (max-ball) of radius $r/\sqrt{2}$ with the same centre, and every
square of radius $r$ contains the disc of radius $r$. So any set that contains a disc around each of its points also
contains a square around each, and the other way round. $\square$

The same argument with $n$ factors gives the usual topology on $\mathbb{R}^n$.

### Maps into a product

The **projections** $\pi_X(x, y) = x$ and $\pi_Y(x, y) = y$ are continuous, since $\pi_X^{-1}(U) = U \times Y$ is a
rectangle. They are also **open maps**: the image of a rectangle $U \times V$ (with $V$ nonempty) under $\pi_X$ is $U$,
and images of unions are unions of images.

**Theorem 6.2 (maps into products).** A function $f : Z \to X \times Y$, written $f(z) = (f_1(z), f_2(z))$, is
continuous if and only if both coordinate functions $f_1 : Z \to X$ and $f_2 : Z \to Y$ are continuous.

*Proof.* If $f$ is continuous, so are $f_1 = \pi_X \circ f$ and $f_2 = \pi_Y \circ f$, as compositions. Conversely, by
the basis test (Theorem 5.2) it is enough to check rectangles: $f^{-1}(U \times V) = f_1^{-1}(U) \cap f_2^{-1}(V)$,
an intersection of two open sets. $\square$

This is why the product topology is "right": it is exactly the topology in which a map into the product is continuous
when its coordinates are. Two quick uses:

- The **graph map** $x \mapsto (x, g(x))$ of a continuous $g : X \to Y$ is continuous, with coordinates the identity and
  $g$. It is an embedding of $X$ (its inverse on the graph is $\pi_X$). This makes item 5 of the homeomorphism gallery in
  [Chapter 5](05-Continuity-and-Homeomorphism.md) work for any spaces.
- A **path** in the plane, $t \mapsto (x(t), y(t))$, is continuous exactly when $x(t)$ and $y(t)$ are.

### New spaces as products

- The **cylinder** $S^1 \times [0, 1]$: a circle's worth of segments.
- The **torus** $T^2 = S^1 \times S^1$. Its map into $\mathbb{R}^3$,
  $(u, v) \mapsto \big((2 + \cos v) \cos u, \ (2 + \cos v) \sin u, \ \sin v\big)$ with $u$, $v$ angles, is the usual
  doughnut: $u$ goes around the hole and $v$ around the tube of radius 1 whose centre circle has radius 2.
- The **$n$-torus** $T^n = S^1 \times \cdots \times S^1$. The configuration space of a robot arm with $n$ freely
  rotating joints in a plane is a copy of $T^n$: one angle per joint ([Chapter 11](11-Manifolds.md)).
- The **solid torus** $S^1 \times D^2$, a circle's worth of discs: a doughnut including its dough.

**Theorem 6.3.** If $X$ and $Y$ are Hausdorff, so is $X \times Y$.

*Proof.* Let $(x, y) \ne (x', y')$. Then $x \ne x'$ or $y \ne y'$; say $x \ne x'$. Choose disjoint open $U$, $U'$
around $x$ and $x'$. Then $U \times Y$ and $U' \times Y$ are disjoint open sets around the two points. $\square$

### Infinitely many factors

For a family of spaces $X_i$ (indexed by any set $I$), the product $\prod_{i \in I} X_i$ is the set of all choices
$(x_i)_{i \in I}$ of one point from each. There are now two candidate topologies.

- The **box topology** has as basis all products $\prod U_i$ of open sets.
- The **product topology** has as basis the products $\prod U_i$ in which $U_i = X_i$ for all but finitely many $i$.

For finitely many factors they agree. For infinitely many, the product topology has fewer open sets, and it is the one
that keeps Theorem 6.2: a map into the product is continuous exactly when every coordinate is. (The proof is the same,
since $f^{-1}\big(\prod U_i\big)$ is the intersection of the finitely many $f_i^{-1}(U_i)$ with $U_i \ne X_i$.) The box
topology breaks it.

*Example.* Let $\mathbb{R}^\omega$ be the product of countably many copies of $\mathbb{R}$ (sequences of reals), and
let $f : \mathbb{R} \to \mathbb{R}^\omega$ be the diagonal map $f(t) = (t, t, t, \dots)$. Each coordinate is the
identity, which is continuous. In the box topology the set
$W = (-1, 1) \times (-\tfrac12, \tfrac12) \times (-\tfrac13, \tfrac13) \times \cdots$ is open, and
$f^{-1}(W) = \{t : |t| < 1/n \text{ for every } n\} = \{0\}$, which is not open. So $f$ is not continuous for the box
topology.

From now on, "product" always means the product topology. A sequence in it converges exactly when every coordinate
converges (exercise 7), and [Chapter 8](08-Compactness.md) shows its most important property: Tychonoff's theorem,
that any product of compact spaces is compact. That theorem is false for the box topology.

## 6.2 The quotient topology and gluing

To make a cylinder from a strip of paper, you glue the left edge to the right edge. Mathematically, gluing means
declaring that certain points are now the same point. We need a topology on the result.

### Quotient sets

Recall ([Logic, Chapter 6](../logic/06-Relations-and-Functions.md)) that an **equivalence relation** $\sim$ on a set
$X$ is reflexive, symmetric and transitive, and it splits $X$ into **equivalence classes** $[x] = \{y : y \sim x\}$. The
set of classes is the **quotient set** $X/{\sim}$, and the **quotient map** $\pi : X \to X/{\sim}$ sends each point to
its class. Gluing instructions such as "$(0, t)$ is glued to $(1, t)$" generate an equivalence relation: two points are
equivalent when they are equal or glued (directly, or through a chain of gluings).

### The topology

We want $\pi$ to be continuous, so $\pi^{-1}(V)$ must be open whenever $V$ is open. The quotient topology takes as many
open sets as this allows.

**Definition.** The **quotient topology** on $X/{\sim}$: a set $V \subseteq X/{\sim}$ is open exactly when
$\pi^{-1}(V)$ is open in $X$.

In words: a set of glued points is open when the set of all the original points that make it up is open. Picture
standing at a point of the glued space; a neighbourhood must contain a neighbourhood of **every** original point glued
there. On the cylinder, a small open set around a point of the seam is made of a half-disc on the left edge of the
strip and a half-disc on the right edge.

**Theorem 6.4.** (a) The quotient topology is a topology, and $\pi$ is continuous.
(b) (**Maps out of a quotient.**) A function $g : X/{\sim} \to Z$ is continuous if and only if $g \circ \pi : X \to Z$
is continuous.
(c) If $f : X \to Z$ is continuous and constant on each equivalence class, then $\bar f([x]) = f(x)$ is a well-defined
continuous map $X/{\sim} \to Z$.

*Proof.* (a) $\pi^{-1}(\varnothing) = \varnothing$ and $\pi^{-1}(X/{\sim}) = X$ are open. Preimages respect unions and
intersections, so if each $\pi^{-1}(V_i)$ is open then $\pi^{-1}\big(\bigcup V_i\big) = \bigcup \pi^{-1}(V_i)$ is open,
and likewise for finite intersections. $\pi$ is continuous by the definition.

(b) If $g$ is continuous then $g \circ \pi$ is a composition of continuous maps. Conversely, for $W$ open in $Z$:
$\pi^{-1}\big(g^{-1}(W)\big) = (g \circ \pi)^{-1}(W)$ is open, so $g^{-1}(W)$ is open by the definition of the quotient
topology.

(c) $\bar f$ is well defined because $f$ takes one value on each class, and $\bar f \circ \pi = f$ is continuous, so
(b) applies. $\square$

Part (c) is how we make maps out of glued spaces: write a formula on the unglued space, check that it respects the
gluing, and continuity comes for free. To show that a glued space is homeomorphic to a familiar one, we also need the
inverse to be continuous, and here compactness does the work:

> **Fact (Theorem 8.8).** A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.

A closed square is compact (Heine-Borel, [Chapter 8](08-Compactness.md)), and a quotient of a compact space is compact,
being its continuous image. Subspaces of $\mathbb{R}^n$ are Hausdorff, and so are their products.

### The circle and the torus

**Theorem 6.5.** (a) The interval $[0, 1]$ with $0 \sim 1$ is homeomorphic to $S^1$.
(b) The square $[0, 1]^2$ with $(0, t) \sim (1, t)$ and $(s, 0) \sim (s, 1)$ is homeomorphic to the torus $S^1 \times S^1$.

*Proof.* (a) The map $f(t) = (\cos 2\pi t, \sin 2\pi t)$ is continuous from $[0, 1]$ onto $S^1$, and $f(0) = f(1)$, so by
Theorem 6.4(c) it gives a continuous $\bar f : [0, 1]/{\sim} \to S^1$. It is one-to-one: $f(t) = f(t')$ means $t - t'$
is an integer, which for $t, t' \in [0, 1]$ means $t = t'$ or $\{t, t'\} = \{0, 1\}$, exactly the gluing. It is onto. The
quotient is compact, $S^1$ is Hausdorff, so $\bar f$ is a homeomorphism.

(b) Use $F(s, t) = \big(f(s), f(t)\big)$, continuous by Theorem 6.2. $F(s, t) = F(s', t')$ exactly when $s - s'$ and
$t - t'$ are integers, which inside the square means that the points are equal or glued (the four corners all go to one
point). The same compactness argument finishes the proof. $\square$

### The square, glued six ways

Edge-gluing pictures are read like this: edges with the same letter are glued, and the arrows say which way round, so
that the tail of one arrow meets the tail of the other. Dashed edges are left free.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 245" role="img" aria-label="Six squares with edge labels and arrows. Cylinder: left and right edges labelled a, both arrows up. Möbius band: left edge a up, right edge a down. Torus: top and bottom a both to the right, left and right b both up. Klein bottle: top and bottom a to the right, left b down, right b up. Projective plane: bottom a right, top a left, left b down, right b up. Sphere: bottom and left edges a, both arrows leaving the bottom left corner; top and right edges b, both arrows ending at the top right corner. Dashed edges are left free.">
  <rect x="25" y="15" width="70" height="70" fill="#9cc9ea" fill-opacity="0.5" stroke="none"/>
  <rect x="135" y="15" width="70" height="70" fill="#eea66f" fill-opacity="0.5" stroke="none"/>
  <rect x="245" y="15" width="70" height="70" fill="#7ccf9a" fill-opacity="0.5" stroke="none"/>
  <rect x="25" y="135" width="70" height="70" fill="#eea66f" fill-opacity="0.5" stroke="none"/>
  <rect x="135" y="135" width="70" height="70" fill="#9cc9ea" fill-opacity="0.5" stroke="none"/>
  <rect x="245" y="135" width="70" height="70" fill="#7ccf9a" fill-opacity="0.5" stroke="none"/>
<g stroke="currentColor" fill="none" stroke-width="1.4">
  <line x1="25" y1="85" x2="95" y2="85" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="25" y1="15" x2="95" y2="15" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="25" y1="85" x2="25" y2="15" stroke-width="2"/>
  <polyline points="29,54 25,46 21,54"/>
  <line x1="95" y1="85" x2="95" y2="15" stroke-width="2"/>
  <polyline points="99,54 95,46 91,54"/>
  <line x1="135" y1="85" x2="205" y2="85" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="135" y1="15" x2="205" y2="15" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="135" y1="85" x2="135" y2="15" stroke-width="2"/>
  <polyline points="139,54 135,46 131,54"/>
  <line x1="205" y1="85" x2="205" y2="15" stroke-width="2"/>
  <polyline points="201,46 205,54 209,46"/>
  <line x1="245" y1="85" x2="315" y2="85" stroke-width="2"/>
  <polyline points="276,89 284,85 276,81"/>
  <line x1="245" y1="15" x2="315" y2="15" stroke-width="2"/>
  <polyline points="276,19 284,15 276,11"/>
  <line x1="245" y1="85" x2="245" y2="15" stroke-width="2"/>
  <polyline points="249,58 245,50 241,58"/>
  <polyline points="249,50 245,42 241,50"/>
  <line x1="315" y1="85" x2="315" y2="15" stroke-width="2"/>
  <polyline points="319,58 315,50 311,58"/>
  <polyline points="319,50 315,42 311,50"/>
  <line x1="25" y1="205" x2="95" y2="205" stroke-width="2"/>
  <polyline points="56,209 64,205 56,201"/>
  <line x1="25" y1="135" x2="95" y2="135" stroke-width="2"/>
  <polyline points="56,139 64,135 56,131"/>
  <line x1="25" y1="205" x2="25" y2="135" stroke-width="2"/>
  <polyline points="21,162 25,170 29,162"/>
  <polyline points="21,170 25,178 29,170"/>
  <line x1="95" y1="205" x2="95" y2="135" stroke-width="2"/>
  <polyline points="99,178 95,170 91,178"/>
  <polyline points="99,170 95,162 91,170"/>
  <line x1="135" y1="205" x2="205" y2="205" stroke-width="2"/>
  <polyline points="166,209 174,205 166,201"/>
  <line x1="135" y1="135" x2="205" y2="135" stroke-width="2"/>
  <polyline points="174,131 166,135 174,139"/>
  <line x1="135" y1="205" x2="135" y2="135" stroke-width="2"/>
  <polyline points="131,162 135,170 139,162"/>
  <polyline points="131,170 135,178 139,170"/>
  <line x1="205" y1="205" x2="205" y2="135" stroke-width="2"/>
  <polyline points="209,178 205,170 201,178"/>
  <polyline points="209,170 205,162 201,170"/>
  <line x1="245" y1="205" x2="315" y2="205" stroke-width="2"/>
  <polyline points="276,209 284,205 276,201"/>
  <line x1="245" y1="135" x2="315" y2="135" stroke-width="2"/>
  <polyline points="272,139 280,135 272,131"/>
  <polyline points="280,139 288,135 280,131"/>
  <line x1="245" y1="205" x2="245" y2="135" stroke-width="2"/>
  <polyline points="249,174 245,166 241,174"/>
  <line x1="315" y1="205" x2="315" y2="135" stroke-width="2"/>
  <polyline points="319,178 315,170 311,178"/>
  <polyline points="319,170 315,162 311,170"/>
</g>
<g fill="currentColor" font-size="11" text-anchor="middle">
  <text x="13" y="54">a</text>
  <text x="103" y="54">a</text>
  <text x="123" y="54">a</text>
  <text x="213" y="54">a</text>
  <text x="280" y="99">a</text>
  <text x="280" y="9">a</text>
  <text x="233" y="54">b</text>
  <text x="323" y="54">b</text>
  <text x="60" y="219">a</text>
  <text x="60" y="129">a</text>
  <text x="13" y="174">b</text>
  <text x="103" y="174">b</text>
  <text x="170" y="219">a</text>
  <text x="170" y="129">a</text>
  <text x="123" y="174">b</text>
  <text x="213" y="174">b</text>
  <text x="280" y="219">a</text>
  <text x="280" y="129">b</text>
  <text x="233" y="174">a</text>
  <text x="323" y="174">b</text>
  <text x="60" y="115">cylinder</text>
  <text x="170" y="115">Möbius band</text>
  <text x="280" y="115">torus</text>
  <text x="60" y="235">Klein bottle</text>
  <text x="170" y="235">projective plane</text>
  <text x="280" y="235">sphere</text>
</g>
</svg>
</div>

- **Cylinder.** Glue $(0, t) \sim (1, t)$. Two free edges remain, and they become two boundary circles.
- **Möbius band.** Glue $(0, t) \sim (1, 1 - t)$: the right edge is flipped before gluing. Follow the top free edge to
  the right: it arrives at the bottom of the left edge and continues along the bottom free edge. So the free edges join
  into **one** boundary circle, and the band has one side ([Chapter 2](02-Surfaces-and-Euler-Characteristic.md)). In
  $\mathbb{R}^3$ it is the image of
  $(s, t) \mapsto \big((1 + (t - \tfrac12) \cos \pi s) \cos 2\pi s, \ (1 + (t - \tfrac12) \cos \pi s) \sin 2\pi s, \ (t - \tfrac12) \sin \pi s\big)$.
  *Check:* at $s = 0$ the point is $(t + \tfrac12, 0, 0)$; at $s = 1$, since $\cos \pi = -1$, it is
  $(\tfrac32 - t, 0, 0)$, which is the $s = 0$ point for $1 - t$. The formula respects the gluing.
- **Torus.** Both pairs of opposite edges, both without a twist (Theorem 6.5).
- **Klein bottle.** Glue the top to the bottom straight, $(s, 0) \sim (s, 1)$, which makes a cylinder; then glue its two
  end circles with a flip, $(0, t) \sim (1, 1 - t)$. In $\mathbb{R}^3$ the second gluing forces the tube through its own
  wall; in $\mathbb{R}^4$ there is room to avoid that, as we said in Section 5.4.
- **Projective plane** $\mathbb{RP}^2$. Both pairs with a flip: $(s, 0) \sim (1 - s, 1)$ and $(0, t) \sim (1, 1 - t)$.
  Each boundary point is glued to the boundary point directly opposite it through the centre of the square.
- **Sphere.** Glue each edge to its neighbour: the bottom edge to the left edge and the top edge to the right edge,
  folding the square shut like an envelope.

Reading the boundary counterclockwise from the bottom left corner, and writing $a^{-1}$ for an edge crossed against its
arrow, the four closed surfaces have the **words** $aba^{-1}b^{-1}$ (torus), $aba^{-1}b$ (Klein bottle), $abab$
(projective plane) and $abb^{-1}a^{-1}$ (sphere). [Chapter 10](10-Classification-of-Surfaces.md) shows that every
closed surface comes from a polygon with such a word, and the words are what [Chapter 15](15-Van-Kampen-and-Surfaces.md)
turns into fundamental groups.

### Three faces of the projective plane

The projective plane appears in three guises, and it is worth seeing why they agree. (The
[Geometry book](../geometry/18-Projective-Geometry.md) meets it as the plane with a line at infinity added.)

1. **Lines through the origin in $\mathbb{R}^3$.** Each line meets the unit sphere in two opposite points, so the set of
   lines is the quotient $S^2/(x \sim -x)$. Take this as the definition of $\mathbb{RP}^2$.
2. **A hemisphere with its rim glued.** Every line through the origin meets the closed upper hemisphere $H$, in exactly
   one point unless the line is horizontal, in which case it meets the rim (the equator) in two opposite points. So
   $\mathbb{RP}^2$ is $H$ with opposite points of its rim identified.
3. **A disc with its rim glued.** Squash $H$ straight down onto the closed disc $D^2$ (a homeomorphism, with inverse
   $(x, y) \mapsto (x, y, \sqrt{1 - x^2 - y^2})$). So $\mathbb{RP}^2$ is $D^2$ with $p \sim -p$ on the boundary circle,
   which is the square picture above with the square rounded into a disc.

To turn 2 into a proof: the inclusion $H \to S^2$ followed by the quotient map $S^2 \to \mathbb{RP}^2$ is continuous,
onto, and identifies exactly the opposite rim points, so it induces a continuous bijection from the glued hemisphere
(compact) to $\mathbb{RP}^2$. For Theorem 8.8 we need $\mathbb{RP}^2$ to be Hausdorff. Here is a neat proof: the map
$x \mapsto x x^{\mathsf{T}}$, sending a unit vector to the $3 \times 3$ matrix of products $x_i x_j$, is continuous and
gives the same matrix for $x$ and $-x$, so it induces a continuous map $\mathbb{RP}^2 \to \mathbb{R}^9$. It is one-to-one,
because the matrix $x x^{\mathsf{T}}$ determines the line through $x$ (its columns are multiples of $x$, not all zero).
A space with a continuous one-to-one map into a Hausdorff space is Hausdorff: pull back disjoint neighbourhoods of the
two image points. (Theorem 8.8 then even shows that this map embeds $\mathbb{RP}^2$ in $\mathbb{R}^9$.)

### Quotients can be strange

The quotient topology is always a topology, but it can be a poor one.

**Theorem 6.6.** Let $x \sim y$ on $\mathbb{R}$ mean $x - y \in \mathbb{Q}$. Then $\mathbb{R}/{\sim}$ has the indiscrete
topology.

*Proof.* Let $V$ be a nonempty open set of the quotient, and $U = \pi^{-1}(V)$, a nonempty open subset of $\mathbb{R}$.
Because $U$ is a union of whole classes, $U + q = U$ for every rational $q$. $U$ contains some interval $(a, b)$, so it
contains every shifted interval $(a + q, b + q)$. These cover $\mathbb{R}$: any real $x$ has a rational $q$ in
$(x - b, x - a)$, and then $x \in (a + q, b + q)$. So $U = \mathbb{R}$ and $V$ is the whole quotient. $\square$

Even simple gluings can destroy the Hausdorff property: gluing two copies of $\mathbb{R}$ along every point except $0$
produces the "line with two origins" of [Chapter 9](09-Separation-and-Metrisation.md). The quotient map need not be an
open map either (exercise 9). And, a warning for later, the product of two quotient maps need not be a quotient map.
When all the spaces involved are compact Hausdorff, as in this book's main examples, it is: a continuous map from a
compact space onto a Hausdorff space is always a quotient map.

### Gluing along a map, and wedges

The **disjoint union** $X \sqcup Y$ of two spaces is the set of points of both, kept apart, with a set open when its
part in $X$ and its part in $Y$ are both open. Given a closed subset $A \subseteq X$ and a continuous map
$f : A \to Y$, **attaching $X$ to $Y$ along $f$** means forming the quotient

$$
Y \cup_f X = (X \sqcup Y) / (a \sim f(a) \text{ for } a \in A).
$$

The most important case attaches a disc $D^2$ along its boundary circle by a map $f : S^1 \to Y$: this caps off the loop
$f$ in $Y$ with a disc.

- Attach $D^2$ to $S^1$ by the identity $z \mapsto z$: the result is just $D^2$.
- Attach $D^2$ to a point by the constant map: the whole boundary is squeezed to a point, giving the sphere $S^2$
  (Section 6.4).
- Attach $D^2$ to $S^1$ by $z \mapsto z^2$, writing points of the circle as complex numbers of absolute value 1: two
  boundary points $z$, $w$ are glued when $z^2 = w^2$, that is, $w = \pm z$. That is the disc with opposite boundary
  points glued: $\mathbb{RP}^2$.

The **wedge sum** $X \vee Y$ of two spaces with chosen base points $x_0$, $y_0$ is $X \sqcup Y$ with $x_0 \sim y_0$:
the two spaces touching at one point. The **figure eight** is $S^1 \vee S^1$. In the square picture of the torus, the
four edges become two circles $a$ and $b$ meeting at the one corner point, so the edges form a figure eight, and the
torus is the figure eight with a disc attached along the loop $aba^{-1}b^{-1}$.

Spaces built in stages like this, starting from points, attaching segments along their end points, then discs along
their boundary circles, then balls along their boundary spheres, are called **cell complexes** (or CW complexes, after
J. H. C. Whitehead, who set out their theory in 1949). Most spaces in this book are of this kind, and [Chapter 16](16-Homology.md)
computes their homology cell by cell.

<figure class="play" data-play="gluing"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A torus from a square: glue opposite edges and the walker wraps round for ever.</figcaption></figure>

## 6.3 Cones and suspensions

*Level: advanced.* Two constructions turn any space $X$ into a new one with a predictable shape.

**Definition.** The **cone** on $X$ is $CX = (X \times [0, 1]) / (X \times \{1\})$: a cylinder on $X$ with its whole top
squeezed to one point, the **apex**.

**Definition.** The **suspension** of $X$ is $SX = (X \times [-1, 1]) / \sim$ where all of $X \times \{1\}$ is squeezed
to one point and all of $X \times \{-1\}$ to another. It is two cones on $X$ glued along their bases.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 165" role="img" aria-label="Left: the cone on a circle, a circle drawn as an ellipse with every point joined by a segment to one apex above. Right: the suspension of a circle, an ellipse joined to one point above and one point below, like two cones glued along their bases.">
  <ellipse cx="80" cy="120" rx="55" ry="13" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="25,120 80,25 135,120" fill="#9cc9ea" fill-opacity="0.35" stroke="none"/>
  <g stroke="currentColor" stroke-width="1.4">
    <line x1="25" y1="120" x2="80" y2="25"/><line x1="135" y1="120" x2="80" y2="25"/>
  </g>
  <polygon points="200,82 255,15 310,82 255,149" fill="#7ccf9a" fill-opacity="0.4" stroke="none"/>
  <ellipse cx="255" cy="82" rx="55" ry="13" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <g stroke="currentColor" stroke-width="1.4">
    <line x1="200" y1="82" x2="255" y2="15"/><line x1="310" y1="82" x2="255" y2="15"/>
    <line x1="200" y1="82" x2="255" y2="149"/><line x1="310" y1="82" x2="255" y2="149"/>
  </g>
  <g fill="currentColor"><circle cx="80" cy="25" r="3"/><circle cx="255" cy="15" r="3"/><circle cx="255" cy="149" r="3"/></g>
  <g fill="currentColor" font-size="11" text-anchor="middle">
    <text x="80" y="155">cone C(S¹) ≅ disc</text><text x="255" y="163">suspension S(S¹) ≅ sphere</text>
    <text x="100" y="22">apex</text>
  </g>
</svg>
</div>

The pictures suggest that the cone on a circle is a disc (a party hat, flattened) and the suspension of a circle is a
sphere. Both are true in every dimension. Write $D^{n+1}$ for the closed unit ball in $\mathbb{R}^{n+1}$ and $S^n$ for its
boundary sphere, so $S^0 = \{-1, 1\}$ is two points, $S^1$ a circle and $S^2$ the ordinary sphere.

**Theorem 6.7.** $C(S^n) \cong D^{n+1}$ for every $n \ge 0$.

*Proof.* Define $f : S^n \times [0, 1] \to D^{n+1}$ by $f(x, t) = (1 - t)\,x$: the point at height $t$ above $x$ goes to
the point a fraction $1 - t$ of the way out along the radius through $x$. It is continuous, and $f(x, 1) = 0$ for every
$x$, so it is constant on the apex class and induces a continuous $\bar f : C(S^n) \to D^{n+1}$ (Theorem 6.4(c)).

It is onto: $0$ is the image of the apex, and $y \ne 0$ is $f\big(y/\lVert y \rVert, \, 1 - \lVert y \rVert\big)$.

It is one-to-one on classes: if $(1 - t)x = (1 - t')x'$ with $\lVert x \rVert = \lVert x' \rVert = 1$, taking lengths
gives $1 - t = 1 - t'$. If $t = 1$, both points are the apex. If $t < 1$, divide by $1 - t$ to get $x = x'$.

$C(S^n)$ is compact (a quotient of the compact $S^n \times [0, 1]$) and $D^{n+1}$ is Hausdorff, so $\bar f$ is a
homeomorphism by Theorem 8.8. $\square$

For $n = 0$: the cone on two points is two segments meeting at the apex, a "V", which is homeomorphic to the segment
$D^1 = [-1, 1]$.

**Theorem 6.8.** $S(S^n) \cong S^{n+1}$ for every $n \ge 0$.

*Proof.* Define $g : S^n \times [-1, 1] \to S^{n+1} \subseteq \mathbb{R}^{n+1} \times \mathbb{R}$ by

$$
g(x, t) = \left( \sqrt{1 - t^2}\, x, \ t \right).
$$

It lands on the sphere: its squared length is $(1 - t^2)\lVert x \rVert^2 + t^2 = 1 - t^2 + t^2 = 1$. The level $t$
becomes the "latitude" $t$, and the point $x$ the "longitude". At $t = \pm 1$ the first part is $0$, so all of
$S^n \times \{1\}$ goes to the north pole $(0, 1)$ and all of $S^n \times \{-1\}$ to the south pole $(0, -1)$. So $g$
respects the gluing and induces a continuous map $\bar g : S(S^n) \to S^{n+1}$.

Onto and one-to-one: a point $(y, t)$ of $S^{n+1}$ with $|t| < 1$ has $\lVert y \rVert = \sqrt{1 - t^2} > 0$, and it is
the image of $(y / \lVert y \rVert, t)$ and of nothing else, since $t$ is read off directly and then $x = y / \sqrt{1 - t^2}$.
The points with $t = \pm 1$ are the poles, the images of the two squeezed classes and of nothing else. Compactness of
$S(S^n)$ and the Hausdorff property of $S^{n+1}$ finish the proof. $\square$

So $S(S^0) \cong S^1$ (two points, each joined to a north and a south pole, make a circle), $S(S^1) \cong S^2$, and
in general each sphere is the suspension of the one below. Suspension raises dimension by one, and it shifts many
invariants by one too: in [Chapter 16](16-Homology.md) the homology of $SX$ is that of $X$ moved up one step. This is
one reason the spheres form a ladder that algebraic topology climbs one rung at a time.

Two more facts about cones, used later:

- **Every space sits inside a cone.** The map $x \mapsto [(x, 0)]$ embeds $X$ as the base of $CX$.
- **Every cone can be shrunk to its apex.** Sliding each point up its segment, $[(x, t)] \mapsto [(x, t + s(1 - t))]$ for
  $s$ from $0$ to $1$, moves all of $CX$ continuously to the apex. In the language of [Chapter 12](12-Homotopy.md), every
  cone is **contractible**. So every space, however complicated, is a subspace of a space with no holes of any kind:
  holes are a property of a space, not of its surroundings.

## 6.4 Spheres as quotients of discs

*Level: advanced.* Take a round cloth bag with a drawstring and pull the string tight: the rim of the bag closes up
to a single point, and the bag becomes a closed ball shape whose surface is a sphere. The cloth was a disc, and the rim
its boundary circle. In symbols: $D^2 / S^1 \cong S^2$, where $D^n / S^{n-1}$ means the disc with its boundary sphere
squeezed to one point.

**Theorem 6.9.** For every $n \ge 1$, $D^n / S^{n-1} \cong S^n$.

*Proof.* We wrap the disc around the sphere: the centre goes to the north pole, circles of radius $r$ go to the circles
of latitude, and the rim goes to the south pole. Define $\varphi : D^n \to S^n \subseteq \mathbb{R}^n \times \mathbb{R}$ by

$$
\varphi(x) = \left( \sin(\pi \lVert x \rVert) \frac{x}{\lVert x \rVert}, \ \cos(\pi \lVert x \rVert) \right) \text{ for } x \ne 0, \qquad \varphi(0) = (0, 1).
$$

*It lands on the sphere:* the squared length is $\sin^2(\pi \lVert x \rVert) + \cos^2(\pi \lVert x \rVert) = 1$.

*It is continuous:* away from $0$ by the formula. At $0$, the first part has length $\sin(\pi \lVert x \rVert) \to 0$
and the second part $\cos(\pi \lVert x \rVert) \to 1$ as $x \to 0$, so $\varphi(x) \to (0, 1) = \varphi(0)$.

*It squeezes exactly the rim:* if $\lVert x \rVert = 1$ then $\varphi(x) = (0, \cos \pi) = (0, -1)$, the south pole.
So $\varphi$ is constant on $S^{n-1}$ and induces a continuous map $\bar\varphi : D^n / S^{n-1} \to S^n$.

*It is a bijection:* a point $(y, c)$ of $S^n$ determines $r = \arccos(c) / \pi$ in $[0, 1]$, because $\cos$ is
one-to-one from $[0, \pi]$ onto $[-1, 1]$. If $r = 0$ it is the north pole, the image of $0$ only. If $r = 1$ it is the
south pole, the image of the squeezed rim only. If $0 < r < 1$ then $\lVert y \rVert = \sin(\pi r) > 0$, and the only
preimage is $x = r\, y / \lVert y \rVert$.

The quotient of the compact disc is compact and the sphere is Hausdorff, so $\bar\varphi$ is a homeomorphism. $\square$

*Check with $n = 1$:* $D^1 = [-1, 1]$ and $S^0 = \{-1, 1\}$, so $D^1 / S^0$ is a segment with its two ends glued, which
Theorem 6.5(a) already identified as a circle. The formula gives $\varphi(x) = (\sin \pi x, \cos \pi x)$, which goes once
around the circle as $x$ runs from $-1$ to $1$.

### Two discs make a sphere

A second description: the sphere is two closed hemispheres glued along their common equator, and each hemisphere is
a disc (project it flat, as in Section 6.2). So $S^n$ is two copies of $D^n$ glued by the identity map of their boundary
spheres $S^{n-1}$. A third description, the plane with one extra point at infinity, comes in
[Chapter 8](08-Compactness.md) (Section 8.6), and it explains why stereographic projection
([Chapter 5](05-Continuity-and-Homeomorphism.md)) misses exactly one point of the sphere.

### Cells and the Euler characteristic

Theorem 6.9 says that $S^n$ is a cell complex with just two cells: one point (a 0-cell), and one $n$-dimensional disc
attached to it by squeezing its whole boundary to that point. The "two hemispheres" picture uses more cells: start with
$S^0$ (two points), attach two segments to get $S^1$, then two discs to get $S^2$, and so on, two cells in each
dimension.

The **Euler characteristic** of a cell complex is the number of even-dimensional cells minus the number of
odd-dimensional cells: $\chi = c_0 - c_1 + c_2 - \cdots$. For the sphere $S^2$: with two cells, $\chi = 1 + 1 = 2$; with
two cells in each dimension $0$, $1$, $2$, $\chi = 2 - 2 + 2 = 2$. Both agree with Euler's $V - E + F = 2$ from
[Chapter 2](02-Surfaces-and-Euler-Characteristic.md). That the answer never depends on the choice of cells is a real
theorem; [Chapter 16](16-Homology.md) proves it, by showing that $\chi$ can be computed from homology, which does not
mention cells at all.

For a surface glued from one polygon, the cells are the classes of corners (0-cells), the classes of edges (1-cells) and
the one face. Finding which corners get glued together is a small puzzle that a computer does well.

**Try it in Python.**

```python
def euler_characteristic(word):
    """word: list of (letter, +1 or -1) read around the polygon; corner i starts edge i."""
    n = len(word)
    parent = list(range(n))
    def find(a):
        while parent[a] != a:
            a = parent[a]
        return a
    ends = {}
    for i, (letter, sign) in enumerate(word):
        tail, head = (i, (i + 1) % n) if sign > 0 else ((i + 1) % n, i)
        ends.setdefault(letter, []).append((tail, head))
    for (t1, h1), (t2, h2) in ends.values():   # glue tail to tail, head to head
        parent[find(t1)] = find(t2)
        parent[find(h1)] = find(h2)
    V = len({find(i) for i in range(n)})
    return V - len(ends) + 1

A, B, a, b = ("a", 1), ("b", 1), ("a", -1), ("b", -1)
print(euler_characteristic([A, B, a, b]))   # torus: 0
print(euler_characteristic([A, B, a, B]))   # Klein bottle: 0
print(euler_characteristic([A, B, A, B]))   # projective plane: 1
print(euler_characteristic([A, B, b, a]))   # sphere: 2
```

For the torus word all four corners become one point, so $\chi = 1 - 2 + 1 = 0$. For the projective plane the corners
fall into two classes, so $\chi = 2 - 2 + 1 = 1$. The torus and the Klein bottle have the same $\chi$; what tells them
apart is orientability, and [Chapter 10](10-Classification-of-Surfaces.md) proves that these two invariants together
classify all closed surfaces.

### Projective spaces of every dimension

The same constructions work in every dimension. The **real projective space** $\mathbb{RP}^n$ is the set of lines
through the origin in $\mathbb{R}^{n+1}$, that is, $S^n / (x \sim -x)$, and as in Section 6.2 it is also $D^n$ with
opposite boundary points glued. For $n = 1$ this is $[-1, 1]$ with $-1 \sim 1$, which is a circle: $\mathbb{RP}^1 \cong S^1$.
$\mathbb{RP}^3$ turns out to be the space of all rotations of three-dimensional space (a rotation is an axis and an
angle; the quaternion description in the [Linear Algebra book](../linear-algebra/13-Orthogonal-Matrices-and-Rotations.md)
makes this precise), which is why it appears in [Chapter 11](11-Manifolds.md) among the examples of manifolds. Every
orientation a spacecraft or rover can have is a point of $\mathbb{RP}^3$.

## A short history

Products of spaces were treated in general by Andrey Tychonoff (1930, 1935), who introduced the product topology for
infinitely many factors in proving the theorem that bears his name ([Chapter 8](08-Compactness.md)). Gluing polygons
to make surfaces goes back to the nineteenth century: Felix Klein described his bottle in 1882, and the description of
surfaces by edge words was developed by Poincaré, Max Dehn and Poul Heegaard in the years around 1900 to 1910. The
quotient topology in its general form appears in the 1920s and 1930s, notably in the work of Pavel Alexandrov and Heinz
Hopf; their book *Topologie I* (1935) was for decades the standard reference. Cell complexes were set on a firm footing
by J. H. C. Whitehead in his 1949 paper "Combinatorial homotopy I".

## Check yourself

??? question "1. Compute $\big((0, 3) \times (0, 3)\big) \cap \big((2, 5) \times (1, 4)\big)$ and say why the union of these two rectangles is open in the product topology but is not itself a rectangle."

    The intersection is $(0, 3) \cap (2, 5)$ times $(0, 3) \cap (1, 4)$, which is $(2, 3) \times (1, 3)$. The union is open
    because it is a union of basis sets. It is not a rectangle $U \times V$: if it were, then since $(1, 1)$ and $(4, 3)$
    are in it, $1 \in U$ and $3 \in V$, so $(1, 3)$ would be in it, but $(1, 3)$ is in neither rectangle ($y = 3$ is not in
    $(0, 3)$, and $x = 1$ is not in $(2, 5)$).

??? question "2. Prove that the projection $\pi_X : X \times Y \to X$ is an open map. Is it a closed map? Try $X = Y = \mathbb{R}$ and the hyperbola $\{xy = 1\}$."

    An open set is $W = \bigcup U_i \times V_i$, and $\pi_X(W) = \bigcup \pi_X(U_i \times V_i) = \bigcup U_i$ (over the $i$
    with $V_i \ne \varnothing$), which is open. It is not closed in general: the hyperbola $\{xy = 1\}$ is closed (preimage
    of $\{1\}$), but its projection is $\mathbb{R} \setminus \{0\}$, which is not closed.

??? question "3. Prove that a space $X$ is Hausdorff if and only if the diagonal $\Delta = \{(x, x) : x \in X\}$ is closed in $X \times X$."

    The complement of $\Delta$ is the set of pairs $(x, y)$ with $x \ne y$. It is open exactly when each such pair has a
    rectangle $U \times V$ around it missing $\Delta$. A rectangle misses $\Delta$ exactly when no point lies in both $U$
    and $V$, that is, $U \cap V = \varnothing$. So "complement of $\Delta$ open" says precisely that any two distinct
    points have disjoint open neighbourhoods.

??? question "4. A square has boundary word $a a^{-1} b b^{-1}$. Count the classes of corners and compute $\chi$. Which surface is it?"

    Label corners $0, 1, 2, 3$ counterclockwise. Edge $a$ runs $0 \to 1$, and the second $a$ (crossed backwards) runs
    $2 \to 1$; gluing tails and heads gives $0 \sim 2$. Edge $b$ runs $2 \to 3$ and the second $b$ runs $0 \to 3$, giving
    $2 \sim 0$ again. So the classes are $\{0, 2\}$, $\{1\}$, $\{3\}$: $V = 3$, $E = 2$, $F = 1$, and $\chi = 2$. Each pair
    of adjacent edges folds shut like the envelope: it is a sphere.

??? question "5. A hexagon has boundary word $abca^{-1}b^{-1}c^{-1}$, so opposite sides are glued without a twist. Compute $\chi$."

    Running the Python function (or tracking corners by hand) gives two classes of corners, alternating around the
    hexagon. So $V = 2$, $E = 3$, $F = 1$ and $\chi = 0$. The surface is orientable (no edge pair is glued with a twist in
    the sense of Chapter 10), so by the classification it is a torus. Indeed, a hexagon with opposite sides glued is the
    torus tiled by hexagons, as on a honeycomb.

??? question "6. Let $x \sim y$ on $\mathbb{R}$ mean $x - y \in \mathbb{Z}$. Prove that $\mathbb{R}/{\sim}$ is homeomorphic to $S^1$."

    $f(x) = (\cos 2\pi x, \sin 2\pi x)$ is continuous and constant on classes, so it induces a continuous
    $\bar f : \mathbb{R}/{\sim} \to S^1$, a bijection since $f(x) = f(y)$ exactly when $x - y \in \mathbb{Z}$. For
    compactness: every class meets $[0, 1]$, so the restriction of the quotient map to $[0, 1]$ is onto, and the quotient
    is a continuous image of a compact set, hence compact. $S^1$ is Hausdorff, so $\bar f$ is a homeomorphism.

??? question "7. Prove that a sequence $(x^{(k)})$ in a product $\prod X_i$ (product topology) converges to $x$ if and only if every coordinate $x^{(k)}_i$ converges to $x_i$."

    If $x^{(k)} \to x$, then $x^{(k)}_i = \pi_i(x^{(k)}) \to \pi_i(x) = x_i$, since continuous maps preserve limits
    (Chapter 5). Conversely, suppose each coordinate converges and take a basic open set $\prod U_i$ around $x$, with
    $U_i = X_i$ except for $i$ in a finite set $F$. For each $i \in F$, $x^{(k)}_i \in U_i$ for all $k \ge N_i$. Then for
    $k \ge \max_{i \in F} N_i$ the whole point is in the basic set. The finiteness of $F$ is essential; in the box topology
    the sequence $(1/k, 1/k, 1/k, \dots)$ does not converge to $0$, although every coordinate does.

??? question "8. Describe the cone and the suspension of a point, and of $S^0$ (two points)."

    The cone on a point is $[0, 1]$ with its top end squeezed to a point, which changes nothing: a segment. The
    suspension of a point is a segment from south pole to north pole: also a segment. The cone on $S^0$ is two segments
    joined at the apex, a "V", homeomorphic to a segment ($D^1$, by Theorem 6.7). The suspension of $S^0$ is two segments
    each joined to both poles, forming a loop: a circle (Theorem 6.8).

??? question "9. Collapse $[0, 1]$ to a point in $\mathbb{R}$, with quotient map $\pi$. Show that $\pi$ is not an open map."

    Take the open set $U = (-1, \tfrac12)$. Its image $\pi(U)$ contains the collapsed point, so
    $\pi^{-1}(\pi(U)) = (-1, \tfrac12) \cup [0, 1] = (-1, 1]$, which is not open in $\mathbb{R}$. By the definition of the
    quotient topology $\pi(U)$ is not open. So quotient maps need not send open sets to open sets.

??? question "10. Prove that $\mathbb{RP}^1 \cong S^1$ in two ways: from the disc picture, and by the map $z \mapsto z^2$ on the unit circle in $\mathbb{C}$."

    Disc picture: $D^1 = [-1, 1]$ with its two boundary points $\pm 1$ glued is a circle (Theorem 6.5(a), after rescaling
    $[-1, 1]$ to $[0, 1]$). Second way: $\mathbb{RP}^1 = S^1 / (z \sim -z)$. The map $z \mapsto z^2$ from $S^1$ to $S^1$
    is continuous and onto, and $z^2 = w^2$ exactly when $w = \pm z$. So it induces a continuous bijection
    $\mathbb{RP}^1 \to S^1$ from a compact space to a Hausdorff space: a homeomorphism.

??? question "11. Prove that the map $T(u, v) = \big((2 + \cos v) \cos u, (2 + \cos v) \sin u, \sin v\big)$ induces an embedding of the torus $S^1 \times S^1$ in $\mathbb{R}^3$."

    $T$ is continuous on $[0, 2\pi]^2$ and respects the torus gluing (it is $2\pi$-periodic in each angle), so it induces a
    continuous map from the torus. It is one-to-one on the torus: from the point, $\sin v$ is the third coordinate and
    $2 + \cos v$ is the distance from the $z$-axis (it is at least 1, so positive). Together they determine $v$ up to a
    multiple of $2\pi$. Then $(\cos u, \sin u)$ is the first two coordinates divided by $2 + \cos v$, which determines $u$.
    The torus is compact and $\mathbb{R}^3$ is Hausdorff, so by Theorem 8.8 (in its embedding form) the map is an embedding.

??? question "12. The Möbius band has one boundary circle and the cylinder has two. Explain the count from the square pictures. Does this prove that they are not homeomorphic?"

    In the cylinder the top edge becomes one circle (its two ends are glued at $(0, 1) \sim (1, 1)$) and the bottom edge
    another. In the Möbius band, $(0, 1) \sim (1, 0)$ and $(0, 0) \sim (1, 1)$, so the end of the top edge joins the start
    of the bottom edge and vice versa: the two edges form a single circle of double length. This proves non-homeomorphism
    only once we know that boundary points are intrinsic, that is, that a homeomorphism must send boundary points to
    boundary points; that needs invariance of domain ([Chapter 11](11-Manifolds.md)). Granted that, a homeomorphism from
    the cylinder to the band would restrict to a homeomorphism from two disjoint circles onto one circle, which is
    impossible because one circle is connected and two disjoint circles are not ([Chapter 7](07-Connectedness.md)).

## What you learned

- The product topology has the open rectangles $U \times V$ as a basis; it gives the usual topology on $\mathbb{R}^n$,
  and a map into a product is continuous exactly when its coordinates are.
- For infinitely many factors the product topology (finitely many restricted coordinates) keeps that property; the box
  topology does not.
- The quotient topology makes a set of glued points open when all its original points form an open set; a map out of a
  quotient is continuous when it is continuous before gluing.
- Gluing the edges of a square gives the cylinder, Möbius band, torus, Klein bottle, projective plane and sphere, coded by
  edge words; compactness turns continuous bijections from these quotients into homeomorphisms.
- Quotients can be badly behaved (an indiscrete $\mathbb{R}/\mathbb{Q}$, non-Hausdorff gluings).
- Cones are discs over their base and can always be shrunk to a point; the suspension of $S^n$ is $S^{n+1}$; the disc
  with its boundary squeezed to a point is the sphere.
- Cell complexes are built by attaching discs; the alternating count of cells is the Euler characteristic.

**Next:** [Chapter 7](07-Connectedness.md), the first invariant with real power: connectedness, which proves that the line
and the plane are not homeomorphic.

## Further reading

- J. R. Munkres, *Topology*, 2nd edition, 2000 (Sections 15, 19 and 22: product and quotient topologies).
- M. A. Armstrong, *Basic Topology*, 1983 (Chapter 4: identification spaces, with many gluing diagrams).
- W. S. Massey, *A Basic Course in Algebraic Topology*, 1991 (Chapter 1: surfaces from polygons with edge words).
- A. Hatcher, *Algebraic Topology*, 2002 (Chapter 0: cell complexes, cones, suspensions, attaching maps).
- J. H. C. Whitehead, "Combinatorial homotopy I", *Bulletin of the American Mathematical Society* 55, 1949.
- P. Alexandroff and H. Hopf, *Topologie I*, 1935.
- Other books on this site: [Geometry, Chapter 18: Projective geometry](../geometry/18-Projective-Geometry.md),
  [Geometry, Chapter 19: Curves and surfaces](../geometry/19-Curves-and-Surfaces.md),
  [Logic, Chapter 6: Relations and functions](../logic/06-Relations-and-Functions.md) (equivalence relations),
  [Linear Algebra, Chapter 13: Orthogonal matrices and rotations](../linear-algebra/13-Orthogonal-Matrices-and-Rotations.md).
- U of T guides: [MAT257 Unit 13, Manifolds in R^n](../../uoft/MAT257Y1/unit13.md).
- Topics lessons: [The Möbius strip](../../topics/infinity/level-2/01-mobius-strip.md).
