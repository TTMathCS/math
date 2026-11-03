# 16. Homology

*The fundamental group sees one-dimensional holes: a loop caught around a hole. But the sphere $S^2$ has a hole too, the
hollow inside, and every loop on the sphere shrinks to a point, so $\pi_1$ cannot see it. Higher homotopy groups can, but
they are notoriously hard to compute. Homology is the other answer: count holes of every dimension with linear algebra.
In this chapter you will build spaces from triangles and their higher-dimensional cousins, define the boundary of a chain,
prove that the boundary of a boundary is zero, and compute the homology of the circle, the sphere, the torus and the
projective plane by hand and by computer. You will then prove that the Euler characteristic of Chapter 2 is the
alternating sum of these hole counts, and see how homology and the fundamental group are related.*

!!! abstract "In this chapter"
    **You will learn:**

    - why a second invariant is needed, and what "a hole of dimension $n$" should mean
    - simplices and simplicial complexes, and how to triangulate the circle, the sphere, the torus and $\mathbb{R}P^2$
    - chains, the boundary map, cycles and boundaries, and the proof that $\partial \circ \partial = 0$
    - how to compute homology groups and Betti numbers, by hand and with a short program
    - the proof that the Euler characteristic equals $b_0 - b_1 + b_2 - \cdots$
    - the Hurewicz theorem: $H_1$ is the abelianised fundamental group, and where homology and homotopy part ways

    **You need:** [Chapter 13](13-The-Fundamental-Group.md) and [Chapter 15](15-Van-Kampen-and-Surfaces.md)
    (fundamental groups, abelianisation), [Chapter 2](02-Surfaces-and-Euler-Characteristic.md) (Euler characteristic)
    and [Chapter 10](10-Classification-of-Surfaces.md) (surfaces from polygons). From linear algebra: matrices, rank,
    kernel and image, and the rank-nullity theorem, as in [Linear Algebra Chapter 7](../linear-algebra/07-The-Four-Subspaces.md).
    Quotient groups from [Algebra Chapter 15](../algebra/15-Homomorphisms-and-Quotients.md).

    **Levels:** 16.1 is intermediate; 16.2 to 16.4 are advanced; 16.5 is advanced; 16.6 is expert (statements with
    proof sketches).

## 16.1 Why another invariant

*Level: intermediate.*

Line up four spaces: a point, the circle $S^1$, the sphere $S^2$ and the torus $T^2$. Their fundamental groups are
$\{1\}$, $\mathbb{Z}$, $\{1\}$ and $\mathbb{Z}^2$. So $\pi_1$ cannot tell the point from the sphere. Yet they are clearly
different: the sphere encloses a cavity, and the point does not. (They are not even homotopy equivalent, but we cannot yet
prove it.)

The fix suggested by the fundamental group is to use spheres instead of loops: maps $S^2 \to X$ up to homotopy, giving the
**second homotopy group** $\pi_2(X)$, and in general $\pi_n(X)$ from maps $S^n \to X$. These exist, and $\pi_2(S^2) \cong \mathbb{Z}$
does detect the cavity. But higher homotopy groups are extraordinarily hard to compute. Even for the sphere $S^2$, the
groups $\pi_n(S^2)$ are not all known: Heinz Hopf showed in 1931 that $\pi_3(S^2) \cong \mathbb{Z}$, which means there are
maps from the three-sphere onto the two-sphere that cannot be deformed to a constant, even though the three-sphere is
"bigger" ([Chapter 20](20-Where-Topology-Goes.md)).

Homology takes a different route. Instead of maps of spheres, it uses **pieces of the space itself**, added and subtracted
like vectors:

- a **cycle** is a combination of pieces with no boundary, like a closed curve or a closed surface;
- a **boundary** is a cycle that is the edge of something one dimension higher, like the equator, which bounds a hemisphere;
- a hole of dimension $n$ is an $n$-cycle that is **not** a boundary.

On the torus, the circle around the tube is a 1-cycle that bounds nothing: a 1-dimensional hole. The whole torus surface is
a 2-cycle (it has no edge) and bounds nothing in the torus: a 2-dimensional hole, the cavity. On the sphere, every closed
curve bounds a piece of the sphere, so there are no 1-dimensional holes, but the sphere itself is a 2-cycle that bounds
nothing.

Turning this into mathematics requires a way to cut a space into pieces (simplices) and an algebra of boundaries. The
reward is that everything becomes linear algebra: matrices, ranks and kernels. Homology groups are abelian and computable,
by a finite calculation, for any space built from finitely many simplices. The price is that homology forgets some
information that homotopy keeps (16.6).

## 16.2 Simplicial complexes

*Level: advanced.*

### Simplices

The building blocks are the simplest convex shapes in each dimension:

- a **0-simplex** is a point;
- a **1-simplex** is a segment;
- a **2-simplex** is a triangle (filled in);
- a **3-simplex** is a tetrahedron (solid);
- in general an **$n$-simplex** is the convex hull of $n + 1$ points $v_0, \dots, v_n$ in some $\mathbb{R}^N$ that are
  **affinely independent**, meaning the vectors $v_1 - v_0, \dots, v_n - v_0$ are linearly independent.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 170" role="img" aria-label="Four simplices from left to right: a single point labelled v0; a segment from v0 to v1; a filled triangle with corners v0, v1, v2; and a tetrahedron with corners v0, v1, v2, v3, with one hidden edge dashed.">
  <circle cx="40" cy="100" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="130" font-size="12" text-anchor="middle" fill="currentColor">v0</text>
  <text x="40" y="160" font-size="12" text-anchor="middle" fill="currentColor">0-simplex</text>
  <line x1="90" y1="100" x2="170" y2="100" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="90" cy="100" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="170" cy="100" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="125" font-size="12" text-anchor="middle" fill="currentColor">v0</text>
  <text x="170" y="125" font-size="12" text-anchor="middle" fill="currentColor">v1</text>
  <text x="130" y="160" font-size="12" text-anchor="middle" fill="currentColor">1-simplex</text>
  <polygon points="210,110 300,110 255,30" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <text x="200" y="128" font-size="12" text-anchor="middle" fill="currentColor">v0</text>
  <text x="310" y="128" font-size="12" text-anchor="middle" fill="currentColor">v1</text>
  <text x="255" y="22" font-size="12" text-anchor="middle" fill="currentColor">v2</text>
  <text x="255" y="160" font-size="12" text-anchor="middle" fill="currentColor">2-simplex</text>
  <polygon points="350,115 470,115 415,25" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <line x1="350" y1="115" x2="440" y2="80" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="470" y1="115" x2="440" y2="80" stroke="currentColor" stroke-width="2"/>
  <line x1="415" y1="25" x2="440" y2="80" stroke="currentColor" stroke-width="2"/>
  <text x="340" y="132" font-size="12" text-anchor="middle" fill="currentColor">v0</text>
  <text x="480" y="132" font-size="12" text-anchor="middle" fill="currentColor">v1</text>
  <text x="415" y="17" font-size="12" text-anchor="middle" fill="currentColor">v2</text>
  <text x="456" y="76" font-size="12" fill="currentColor">v3</text>
  <text x="410" y="160" font-size="12" text-anchor="middle" fill="currentColor">3-simplex</text>
</svg>
</div>

The $v_i$ are the **vertices**. A **face** of a simplex is the simplex spanned by some nonempty subset of its vertices. A
triangle has seven faces: itself, three edges and three vertices. An $n$-simplex has $\binom{n+1}{k+1}$ faces of dimension
$k$, and $2^{n+1} - 1$ faces in all.

### Complexes

**Definition.** A (finite) **simplicial complex** $K$ is a finite collection of simplices in some $\mathbb{R}^N$ such that

1. every face of a simplex of $K$ is also in $K$, and
2. any two simplices of $K$ meet in a common face, or not at all.

The union of its simplices, with the subspace topology, is a space $|K|$, called the **polyhedron** of $K$. A
**triangulation** of a space $X$ is a simplicial complex $K$ with a homeomorphism $|K| \to X$.

Condition 2 rules out triangles that overlap in their middles, or that meet edge to vertex in a mismatched way. In
practice one rarely draws the complex in $\mathbb{R}^N$. All the information is combinatorial: which sets of vertices span
simplices. An **abstract simplicial complex** is a finite set of vertices and a collection of nonempty subsets (the
simplices) that contains every one-element subset and is closed under taking nonempty subsets. Every abstract complex can
be realised geometrically (put the vertices at the standard basis vectors of a big $\mathbb{R}^N$), so the two notions
carry the same information.

**Examples.**

- **The circle.** Three vertices $a, b, c$ and the three edges $ab$, $ac$, $bc$, without the triangle: the boundary of a
  triangle, homeomorphic to $S^1$. Two vertices are not enough, because two edges $ab$ would be the same simplex.
- **The disc.** Add the triangle $abc$.
- **The sphere.** The four triangles of a tetrahedron's surface, with their six edges and four vertices: the boundary of a
  3-simplex, homeomorphic to $S^2$ by radial projection from the centre.
- **The torus.** Cut the square of [Chapter 6](06-Building-New-Spaces.md) into a $3 \times 3$ grid and each small square into
  two triangles, then glue opposite sides. There are 9 vertices (the grid points, with the edges glued), 27 edges and 18
  triangles. The labels in the picture show which grid points become the same vertex.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 210" role="img" aria-label="A square divided into a 3 by 3 grid, each small square cut by a diagonal from top left to bottom right into two triangles. The 16 grid points carry labels 0 to 8; the labels on the right edge repeat those on the left edge, and the labels on the bottom edge repeat those on the top edge, showing the gluing that makes a torus with 9 vertices, 27 edges and 18 triangles.">
  <rect x="60" y="30" width="150" height="150" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="30" x2="110" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="80" x2="210" y2="80" stroke="currentColor" stroke-width="1"/>
  <line x1="160" y1="30" x2="160" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="130" x2="210" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="30" x2="110" y2="80" stroke="currentColor" stroke-width="1"/>
  <line x1="110" y1="30" x2="160" y2="80" stroke="currentColor" stroke-width="1"/>
  <line x1="160" y1="30" x2="210" y2="80" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="80" x2="110" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="110" y1="80" x2="160" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="160" y1="80" x2="210" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="130" x2="110" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="110" y1="130" x2="160" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="160" y1="130" x2="210" y2="180" stroke="currentColor" stroke-width="1"/>
  <circle cx="60" cy="30" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="34" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="110" cy="30" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="34" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="160" cy="30" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="34" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="210" cy="30" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="210" y="34" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="60" cy="80" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="84" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="110" cy="80" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="84" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="160" cy="80" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="84" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="210" cy="80" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="210" y="84" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="60" cy="130" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="134" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="110" cy="130" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="134" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="160" cy="130" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="134" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="210" cy="130" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="210" y="134" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="60" cy="180" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="184" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="110" cy="180" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="184" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="160" cy="180" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="184" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="210" cy="180" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="210" y="184" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="340" y="80" font-size="13" text-anchor="middle" fill="currentColor">glue left to right,</text>
  <text x="340" y="98" font-size="13" text-anchor="middle" fill="currentColor">top to bottom:</text>
  <text x="340" y="126" font-size="13" text-anchor="middle" fill="currentColor">9 vertices, 27 edges,</text>
  <text x="340" y="144" font-size="13" text-anchor="middle" fill="currentColor">18 triangles</text>
</svg>
</div>

Why not use the square with a single diagonal, cut into two triangles? After gluing it has one vertex, three edges and two
triangles, and both triangles have the same three vertices (all equal to the one vertex), which condition 2 forbids. That
coarse picture is a perfectly good **$\Delta$-complex** (a looser structure allowed in Hatcher's book), but for simplicial
complexes we need finer cuts. A $2 \times 2$ grid is still too coarse; the $3 \times 3$ grid works. The smallest
triangulation of the torus has 7 vertices, 21 edges and 14 triangles.

**The projective plane.** Take the icosahedron, which has 12 vertices, 30 edges and 20 triangles, and glue each point
to its opposite. Opposite faces of the icosahedron are disjoint, so the result is a simplicial complex with 6 vertices,
15 edges and 10 triangles, homeomorphic to $\mathbb{R}P^2$ (the sphere with antipodes glued). With vertices $0, \dots, 5$
its triangles are

$$
012,\ 023,\ 034,\ 045,\ 051,\ 124,\ 235,\ 341,\ 452,\ 513 .
$$

Check: every pair of the six vertices is an edge ($\binom{6}{2} = 15$), and every edge lies in exactly two triangles, as it
must in a surface.

Not every space can be triangulated, and a space can have many triangulations. Homology will be defined from a
triangulation, so we will need to know that the answer does not depend on which triangulation is used. That is a theorem
(16.5), and it is the reason homology is a topological invariant.

### Orientation

To add and subtract simplices like vectors we need signs, as with directed edges in a circuit. An **orientation** of a
simplex is an ordering of its vertices, with two orderings counted as the same orientation if they differ by an even
permutation. We write $[v_0, v_1, \dots, v_n]$ for the oriented simplex, and agree that swapping two vertices changes the
sign:

$$
[v_1, v_0, v_2] = -[v_0, v_1, v_2], \qquad [v_1, v_2, v_0] = +[v_0, v_1, v_2].
$$

For an edge, $[a, b]$ is the edge directed from $a$ to $b$, and $[b, a] = -[a, b]$ is the same edge directed the other way.
For a triangle, an orientation is a direction of travel around its edge, anticlockwise or clockwise. In computations we
order the vertices by number and use $[v_0, \dots, v_n]$ with $v_0 < \dots < v_n$ as the standard orientation.

## 16.3 Chains, boundaries and cycles

*Level: advanced.*

### Chains

**Definition.** The group of **$n$-chains** $C_n(K)$ is the free abelian group with one generator for each $n$-simplex of
$K$ (with its standard orientation). Its elements are formal sums

$$
c = \sum_i m_i \sigma_i , \qquad m_i \in \mathbb{Z},
$$

where the $\sigma_i$ are the $n$-simplices. If $K$ has $c_n$ simplices of dimension $n$, then
$C_n(K) \cong \mathbb{Z}^{c_n}$. For $n$ below $0$ or above the dimension of $K$, $C_n(K) = 0$.

Think of an $n$-chain as a bookkeeping of $n$-dimensional pieces with multiplicities: a 1-chain $2[a, b] - [b, c]$ means
"edge $ab$ twice forwards, edge $bc$ once backwards". The opposite orientation of a simplex is identified with the negative
of the generator.

### The boundary map

**Definition.** The **boundary** of an oriented $n$-simplex is the alternating sum of its $(n-1)$-dimensional faces:

$$
\partial [v_0, v_1, \dots, v_n] = \sum_{i=0}^{n} (-1)^i [v_0, \dots, \widehat{v_i}, \dots, v_n],
$$

where the hat means "leave this vertex out". Extending linearly gives a homomorphism $\partial_n : C_n(K) \to C_{n-1}(K)$.
(For $n = 0$ the boundary is $0$.)

**Worked examples.**

- $\partial [a, b] = b - a$: the end minus the start, as for a path.
- $\partial [a, b, c] = [b, c] - [a, c] + [a, b] = [a, b] + [b, c] + [c, a]$: the three edges, travelled once around the
  triangle in the direction $a \to b \to c \to a$. The signs make the edges join head to tail.
- $\partial [0, 1, 2, 3] = [1, 2, 3] - [0, 2, 3] + [0, 1, 3] - [0, 1, 2]$: the four faces of the tetrahedron, each oriented
  so that, seen from outside, they all turn the same way.

Before the definition makes sense one must check it respects the sign convention: swapping two vertices of $\sigma$ changes
the sign of $\partial\sigma$. For adjacent vertices $v_i$ and $v_{i+1}$ this is a direct check on the formula (the two terms
that omit $v_i$ or $v_{i+1}$ trade places with a sign change, and every other term has the two vertices swapped); every
permutation is a product of adjacent swaps.

### The boundary of a boundary is zero

Take the boundary of a triangle: the three edges, going around. Its boundary is
$\partial([b, c] - [a, c] + [a, b]) = (c - b) - (c - a) + (b - a) = 0$. A closed loop of edges has no ends. This is the
central fact of the subject.

**Theorem 16.1.** $\partial_{n-1} \circ \partial_n = 0$ for every $n$.

*Proof.* It is enough to check it on one oriented simplex $\sigma = [v_0, \dots, v_n]$, since both maps are homomorphisms.
Apply $\partial$ twice. The first time, leave out $v_i$, with sign $(-1)^i$. The second time, leave out another vertex $v_j$.
Its position in the shortened list is $j$ if $j < i$, and $j - 1$ if $j > i$, because removing $v_i$ moves the later
vertices one place to the left. So

$$
\partial\partial\sigma = \sum_{j < i} (-1)^i (-1)^j [\dots \widehat{v_j} \dots \widehat{v_i} \dots] + \sum_{j > i} (-1)^i (-1)^{j-1} [\dots \widehat{v_i} \dots \widehat{v_j} \dots].
$$

Each $(n-2)$-face, with two vertices $v_p$ and $v_q$ removed ($p < q$), appears exactly twice: once in the first sum, with
$i = q$, $j = p$ and sign $(-1)^{q+p}$, and once in the second sum, with $i = p$, $j = q$ and sign $(-1)^{p+q-1}$. These
signs are opposite, so the two terms cancel, and the whole sum is $0$. $\square$

Check on the tetrahedron:

$$
\begin{aligned}
\partial[1,2,3] &= [2,3] - [1,3] + [1,2], & -\partial[0,2,3] &= -[2,3] + [0,3] - [0,2], \\
\partial[0,1,3] &= [1,3] - [0,3] + [0,1], & -\partial[0,1,2] &= -[1,2] + [0,2] - [0,1],
\end{aligned}
$$

and each of the six edges appears once with each sign. The total is $0$.

### Cycles, boundaries and homology

Two subgroups of $C_n(K)$ matter:

- the **$n$-cycles** $Z_n = \ker \partial_n$: chains with zero boundary, the closed things;
- the **$n$-boundaries** $B_n = \operatorname{im} \partial_{n+1}$: chains that are the boundary of an $(n+1)$-chain.

By Theorem 16.1 every boundary is a cycle: if $c = \partial d$, then $\partial c = \partial\partial d = 0$. So
$B_n \subseteq Z_n$, and we can form the quotient.

**Definition.** The **$n$-th homology group** of $K$ is

$$
H_n(K) = Z_n / B_n = \ker \partial_n / \operatorname{im} \partial_{n+1}.
$$

Its elements are cycles, where two cycles count as the same (are **homologous**) when their difference is a boundary. The
**$n$-th Betti number** $b_n$ is the rank of $H_n(K)$: the number of $\mathbb{Z}$ summands, ignoring any finite part.

So $H_n$ is "closed $n$-dimensional things, modulo those that bound", the precise version of the holes of 16.1.

**Computing with ranks.** A finitely generated abelian group like $H_n(K)$ is $\mathbb{Z}^{b_n}$ plus a finite part called
the **torsion**. The Betti numbers can be computed with ordinary linear algebra over the rational numbers: treat each
$\partial_n$ as a matrix with $c_{n-1}$ rows and $c_n$ columns, and let $r_n$ be its rank. By rank-nullity,
$\dim \ker \partial_n = c_n - r_n$, and $\dim \operatorname{im} \partial_{n+1} = r_{n+1}$. So

$$
b_n = (c_n - r_n) - r_{n+1}.
$$

(That the rank of the integer group $H_n$ equals the dimension of the rational one is a short argument: tensoring with
$\mathbb{Q}$ kills torsion and keeps ranks. The **torsion** part needs integer methods: the Smith normal form of the matrix
of $\partial_{n+1}$, a diagonal form reached by integer row and column operations, has diagonal entries $d_1, d_2, \dots$, and
the torsion of $H_n$ is the product of the groups $\mathbb{Z}/d_i$ for those $d_i > 1$.)

### $H_0$ counts pieces

**Theorem 16.2.** $H_0(K) \cong \mathbb{Z}^k$, where $k$ is the number of path components of $|K|$.

*Proof.* Every 0-chain is a cycle, since $\partial_0 = 0$. A boundary of an edge is $b - a$, so two vertices are homologous
when they are joined by an edge, and hence (adding up along a chain of edges) when they are joined by an edge path, that is,
when they lie in the same component. Conversely, the homomorphism sending a 0-chain to the list of its coefficient sums on
each component, in $\mathbb{Z}^k$, sends every $b - a$ to $0$ (both ends lie in one component), so it kills $B_0$; and its
kernel is exactly $B_0$, since a chain with coefficient sum $0$ on a component is a sum of differences of vertices in that
component, each a boundary. It is onto. By the first isomorphism theorem, $H_0 = C_0/B_0 \cong \mathbb{Z}^k$. $\square$

## 16.4 Computing homology: circle, sphere, torus

*Level: advanced.*

### The circle

Take the hollow triangle with vertices $a, b, c$ and edges $e_1 = [a, b]$, $e_2 = [a, c]$, $e_3 = [b, c]$. There are no
2-simplices. The boundary map $\partial_1$ has matrix (columns $e_1, e_2, e_3$, rows $a, b, c$)

$$
\partial_1 = \begin{pmatrix} -1 & -1 & 0 \\ 1 & 0 & -1 \\ 0 & 1 & 1 \end{pmatrix}.
$$

Its first column is $\partial e_1 = b - a$, and so on.

**$H_1$.** A 1-chain $x e_1 + y e_2 + z e_3$ is a cycle when $\partial_1$ sends it to $0$: from the rows, $-x - y = 0$,
$x - z = 0$ and $y + z = 0$. So $z = x$ and $y = -x$, and

$$
Z_1 = \{ x(e_1 - e_2 + e_3) \} \cong \mathbb{Z}, \quad \text{generated by } e_1 - e_2 + e_3 = [a, b] + [b, c] + [c, a].
$$

That generator is the loop once around. There are no 2-simplices, so $B_1 = 0$ and $H_1 = \mathbb{Z}$.

**$H_0$.** The space is connected, so $H_0 \cong \mathbb{Z}$ by Theorem 16.2. Check with ranks: $\partial_1$ has rank $2$ (the
rows add to zero, and the first two columns are independent), so $b_0 = c_0 - r_1 = 3 - 2 = 1$.

So $H_0(S^1) \cong \mathbb{Z}$, $H_1(S^1) \cong \mathbb{Z}$, and $H_n(S^1) = 0$ for $n \ge 2$.

**Fill it in.** Now add the triangle $[a, b, c]$, making a disc. Then $\partial_2[a, b, c] = [b, c] - [a, c] + [a, b] = e_1 - e_2 + e_3$,
which is exactly the generator of $Z_1$. Now $B_1 = Z_1$ and $H_1 = 0$: the loop bounds, the hole is filled. Also
$H_2 = \ker \partial_2 = 0$, since $\partial_2$ of a nonzero multiple of the triangle is not zero. The disc has the homology of a
point.

### The sphere

Take the boundary of the tetrahedron, with vertices $0, 1, 2, 3$, six edges and four triangles.

**$H_2$.** There are no 3-simplices, so $H_2 = Z_2 = \ker \partial_2$. Which combinations of the four triangles have zero
boundary? Each edge lies in exactly two triangles, so the coefficient of the edge in $\partial$ of the chain involves only those
two coefficients; for the boundary to vanish, the two triangles at each edge must have coefficients that cancel there.
Because you can walk from any triangle to any other across edges, one coefficient determines all the others, and the cycle
condition is solved by

$$
\Sigma = [1, 2, 3] - [0, 2, 3] + [0, 1, 3] - [0, 1, 2]
$$

and its multiples. (This $\Sigma$ is $\partial[0, 1, 2, 3]$, so $\partial\Sigma = 0$ by Theorem 16.1; but $[0,1,2,3]$ is not in the
complex, so $\Sigma$ is not a boundary here.) So $H_2 \cong \mathbb{Z}$, generated by the whole sphere with coherent
orientation. This is the cavity, finally detected.

**$H_1$.** By ranks: $c_1 = 6$, and $\partial_1$ has rank $3$ (the graph of edges is connected with 4 vertices, so $r_1 = 4 - 1$).
$\partial_2$ has rank $4 - 1 = 3$ (its kernel has dimension 1). So $b_1 = (6 - 3) - 3 = 0$. Every closed edge path on the
sphere is a boundary; for example the triangle $[0,1] + [1,2] + [2,0]$ is $\partial[0,1,2]$, and the square
$[0,1] + [1,2] + [2,3] + [3,0]$ is $\partial([0,1,2] + [0,2,3])$. The Smith normal form has no entries bigger than $1$, so there
is no torsion: $H_1 = 0$.

So $H_0(S^2) \cong \mathbb{Z}$, $H_1(S^2) = 0$, $H_2(S^2) \cong \mathbb{Z}$. Compare $\pi_1(S^2) = 1$: homology sees the cavity that
the fundamental group missed. In general, triangulating $S^n$ as the boundary of an $(n+1)$-simplex, one finds
$H_0(S^n) \cong H_n(S^n) \cong \mathbb{Z}$ and all other groups zero (for $n \ge 1$). This fact powers
[Chapter 17](17-Applications-of-Algebraic-Topology.md).

### The torus

The $3 \times 3$ grid triangulation has $c_0 = 9$, $c_1 = 27$, $c_2 = 18$. By hand, the ranks are found as follows.

- $r_1 = 9 - 1 = 8$, since the edge graph is connected (for a connected graph with $V$ vertices the boundary map has
  rank $V - 1$: its image is the chains with coefficient sum $0$, as in Theorem 16.2).
- $\ker \partial_2$: orient every triangle anticlockwise in the square picture. Each interior edge of the square is then
  traversed in opposite directions by its two triangles, and the gluing of the sides of the square matches the edges on
  opposite sides with the same direction, so they also cancel. So the sum $T$ of all 18 triangles is a 2-cycle. As for the
  sphere, any 2-cycle is a multiple of $T$, because neighbouring triangles must have equal coefficients. So
  $\dim \ker \partial_2 = 1$ and $r_2 = 18 - 1 = 17$.

Then

$$
b_0 = 9 - 8 = 1, \qquad b_1 = (27 - 8) - 17 = 2, \qquad b_2 = (18 - 17) - 0 = 1.
$$

The two 1-dimensional holes are the loops around the two directions of the torus: in the picture, the bottom row of edges
$[0, 1] + [1, 2] + [2, 0]$ and the left column $[0, 3] + [3, 6] + [6, 0]$. Neither bounds, and no combination
$m \cdot (\text{row}) + n \cdot (\text{column})$ with $(m, n) \ne (0, 0)$ bounds. A computer check of the Smith normal form shows
there is no torsion, so

$$
H_0(T^2) \cong \mathbb{Z}, \qquad H_1(T^2) \cong \mathbb{Z}^2, \qquad H_2(T^2) \cong \mathbb{Z}.
$$

### The projective plane: torsion

For the 6-vertex $\mathbb{R}P^2$, the same computation gives Betti numbers $b_0 = 1$, $b_1 = 0$, $b_2 = 0$. So rationally it
looks like a point. But the Smith normal form of $\partial_2$ has a diagonal entry $2$, and

$$
H_1(\mathbb{R}P^2) \cong \mathbb{Z}/2, \qquad H_2(\mathbb{R}P^2) = 0 .
$$

There is a loop (the image of a half great circle) that does not bound, but twice it does: that is torsion. And $H_2 = 0$
because there is no way to orient all the triangles coherently, since the surface is non-orientable: whatever orientations
you choose, adding up all the triangles leaves at least one edge with coefficient $\pm 2$ instead of $0$. In general a closed connected surface has
$H_2 \cong \mathbb{Z}$ if it is orientable and $H_2 = 0$ if not. Homology detects orientability.

### Try it in Python

This program (it uses **sympy**) builds the boundary matrices from a list of triangles, checks $\partial\partial = 0$, and reports
the numbers of simplices, the Betti numbers and the torsion of $H_1$.

```python
from itertools import combinations
from sympy import Matrix, ZZ
from sympy.matrices.normalforms import smith_normal_form

def boundary(higher, lower):
    """Matrix of the boundary map from chains on `higher` to chains on `lower`."""
    index = {s: i for i, s in enumerate(lower)}
    M = [[0] * len(higher) for _ in lower]
    for j, s in enumerate(higher):
        for k in range(len(s)):
            face = s[:k] + s[k + 1:]          # leave out vertex number k
            M[index[face]][j] += (-1) ** k
    return Matrix(M)

def homology_of_surface(triangles):
    tris = sorted(tuple(sorted(t)) for t in triangles)
    edges = sorted({e for t in tris for e in combinations(t, 2)})
    verts = sorted({(v,) for t in tris for v in t})
    d1, d2 = boundary(edges, verts), boundary(tris, edges)
    assert (d1 * d2).is_zero_matrix             # the boundary of a boundary is zero
    r1, r2 = d1.rank(), d2.rank()
    betti = (len(verts) - r1, len(edges) - r1 - r2, len(tris) - r2)
    snf = smith_normal_form(d2, domain=ZZ)
    torsion = [abs(snf[i, i]) for i in range(min(snf.shape)) if abs(snf[i, i]) > 1]
    return (len(verts), len(edges), len(tris)), betti, torsion

V = lambda i, j: 3 * (i % 3) + (j % 3)          # the 3 x 3 grid torus
torus = [t for i in range(3) for j in range(3)
         for t in ((V(i, j), V(i + 1, j), V(i + 1, j + 1)), (V(i, j), V(i, j + 1), V(i + 1, j + 1)))]
sphere = [(0, 1, 2), (0, 1, 3), (0, 2, 3), (1, 2, 3)]
rp2 = [(0, 1, 2), (0, 2, 3), (0, 3, 4), (0, 4, 5), (0, 5, 1),
       (1, 2, 4), (2, 3, 5), (3, 4, 1), (4, 5, 2), (5, 1, 3)]
for name, K in (("sphere", sphere), ("torus", torus), ("RP2", rp2)):
    print(name, *homology_of_surface(K))
# sphere (4, 6, 4) (1, 0, 1) []
# torus (9, 27, 18) (1, 2, 1) []
# RP2 (6, 15, 10) (1, 0, 0) [2]
```

## 16.5 Euler characteristic and Betti numbers

*Level: advanced.*

In [Chapter 2](02-Surfaces-and-Euler-Characteristic.md) the Euler characteristic of a surface was $V - E + F$, and it gave
$2$ for every polyhedron shaped like a sphere and $0$ for every torus. We could check it on many examples but could not
explain why it never depends on how the surface is cut up. Homology explains it.

**Definition.** The **Euler characteristic** of a finite simplicial complex is

$$
\chi(K) = \sum_{n \ge 0} (-1)^n c_n = c_0 - c_1 + c_2 - \cdots,
$$

where $c_n$ is the number of $n$-simplices. For a surface this is $V - E + F$.

**Theorem 16.3 (Euler-Poincaré).** $\chi(K) = \sum_{n \ge 0} (-1)^n b_n = b_0 - b_1 + b_2 - \cdots$.

*Proof.* Work over $\mathbb{Q}$, so that chain groups are vector spaces of dimension $c_n$ and $b_n = \dim Z_n - \dim B_n$.
Rank-nullity for $\partial_n : C_n \to C_{n-1}$ says

$$
c_n = \dim \ker \partial_n + \dim \operatorname{im} \partial_n = \dim Z_n + \dim B_{n-1}.
$$

Take the alternating sum over all $n$ from $0$ to the top dimension $d$, with $B_{-1} = 0$ and $B_d = 0$:

$$
\sum_n (-1)^n c_n = \sum_n (-1)^n \dim Z_n + \sum_n (-1)^n \dim B_{n-1} = \sum_n (-1)^n \dim Z_n - \sum_m (-1)^m \dim B_m ,
$$

where the second sum was reindexed with $m = n - 1$, which changes $(-1)^n$ into $-(-1)^m$. Combining,
$\sum_n (-1)^n (\dim Z_n - \dim B_n) = \sum_n (-1)^n b_n$. $\square$

**Checks.**

| Space | $c_0, c_1, c_2$ | $c_0 - c_1 + c_2$ | $b_0, b_1, b_2$ | $b_0 - b_1 + b_2$ |
|---|---|---|---|---|
| Sphere (tetrahedron) | 4, 6, 4 | 2 | 1, 0, 1 | 2 |
| Torus ($3 \times 3$ grid) | 9, 27, 18 | 0 | 1, 2, 1 | 0 |
| Torus (7 vertices) | 7, 21, 14 | 0 | 1, 2, 1 | 0 |
| $\mathbb{R}P^2$ (6 vertices) | 6, 15, 10 | 1 | 1, 0, 0 | 1 |
| Circle (triangle) | 3, 3, 0 | 0 | 1, 1, 0 | 0 |

The left side depends on the triangulation; the right side depends only on the homology groups. So the Euler
characteristic is a topological invariant, **provided** homology is. That is the following theorem.

**Theorem 16.4 (topological invariance, statement).** If $|K|$ and $|L|$ are homeomorphic, or even homotopy equivalent, then
$H_n(K) \cong H_n(L)$ for all $n$.

The proof goes through **singular homology**, which uses all continuous maps of simplices into a space instead of a fixed
triangulation. Singular homology is defined for every space, is visibly a topological invariant, is unchanged by homotopy
equivalence, and agrees with simplicial homology on simplicial complexes. Each of these steps takes real work; see Hatcher,
Chapter 2 (Section 2.1 for the comparison theorem). We use the result.

**Consequences.**

- **Euler's formula.** Any triangulation of the sphere has $V - E + F = 2$, since $b_0 - b_1 + b_2 = 1 - 0 + 1$. This holds even
  for wildly irregular triangulations, which the edge-removal proof of Chapter 2 had to handle case by case.
- **Surfaces.** The orientable surface $M_g$ of genus $g$ has $b_0 = 1$, $b_2 = 1$ (orientable) and $\chi = 2 - 2g$, so
  $b_1 = 2 - \chi = 2g$: the $2g$ independent loops, two for each handle. The non-orientable $N_k$ has $b_2 = 0$ and
  $\chi = 2 - k$, so $b_1 = 1 - \chi = k - 1$, plus torsion $\mathbb{Z}/2$ in $H_1$.
- **Graphs.** For a connected graph, $b_0 - b_1 = V - E$, so $b_1 = E - V + 1$, the rank of the free fundamental group found in
  [Chapter 15](15-Van-Kampen-and-Surfaces.md).
- **Dimension.** For a point, $\chi = 1$. A space with $\chi \ne 1$ is not contractible. So $S^2$ ($\chi = 2$) is not
  homotopy equivalent to a point: the question left open in 16.1.

## 16.6 Homology and homotopy

*Level: expert. Statements, with proof sketches and references.*

We now have two families of invariants: the homotopy groups $\pi_n$, defined by maps of spheres, and the homology groups
$H_n$, defined by chains. How are they related?

### The first homology group

There is a natural map from loops to 1-cycles. In singular homology a loop $f : I \to X$ is itself a singular 1-simplex, and
since $f(0) = f(1)$ its boundary $f(1) - f(0)$ is $0$: it is a cycle. In a simplicial complex, an edge loop
$v_0 \to v_1 \to \cdots \to v_k = v_0$ gives the cycle $[v_0, v_1] + [v_1, v_2] + \cdots + [v_{k-1}, v_k]$ (each edge written
with the right sign).

**Theorem 16.5 (Hurewicz, dimension 1).** For a path-connected space $X$, the map $h : \pi_1(X, x_0) \to H_1(X)$ sending a
loop to its cycle is a surjective homomorphism whose kernel is the commutator subgroup. So

$$
H_1(X) \cong \pi_1(X)^{\mathrm{ab}} = \pi_1(X) / [\pi_1(X), \pi_1(X)].
$$

*Sketch of proof.* Homotopic loops give homologous cycles: a path homotopy is a map of a square, which can be cut into two
triangles, and its boundary relation says the two loops differ by a boundary. Joining loops adds cycles, since a map of a
triangle with edges $f$, $g$ and $f \cdot g$ shows $f + g - (f \cdot g)$ is a boundary. So $h$ is a homomorphism to an abelian
group, and it kills all commutators. Surjectivity: in a 1-cycle, the edges can be joined up into closed loops, each made
into a loop at $x_0$ by a path to the base point and back. The kernel is no bigger than the commutator subgroup: this is the
delicate part, and Hatcher (Theorem 2A.1) gives a careful two-page proof. $\square$

**Checks against Chapter 15.**

| Space | $\pi_1$ | $H_1$ |
|---|---|---|
| Circle | $\mathbb{Z}$ | $\mathbb{Z}$ |
| Figure eight | $F_2$ (non-abelian) | $\mathbb{Z}^2$ |
| Torus | $\mathbb{Z}^2$ | $\mathbb{Z}^2$ |
| Genus $g$ surface $M_g$ | one relator, $2g$ generators | $\mathbb{Z}^{2g}$ |
| $\mathbb{R}P^2$ | $\mathbb{Z}/2$ | $\mathbb{Z}/2$ |
| Klein bottle | $\langle a, b \mid abab^{-1} \rangle$ | $\mathbb{Z} \oplus \mathbb{Z}/2$ |

Each $H_1$ is the abelianisation computed in Chapter 15, and the Betti numbers $b_1$ agree with 16.5.

### What homology forgets

The figure eight and the torus have the same $H_1$ but different fundamental groups, so $H_1$ forgets the non-abelian
structure (though here $H_2$ still tells them apart). A sharper example: in 1904 Poincaré constructed a closed
three-dimensional manifold, now called the **Poincaré homology sphere**, with exactly the homology of the three-sphere $S^3$,
but whose fundamental group has 120 elements (the binary icosahedral group). That group equals its own commutator subgroup,
so its abelianisation is trivial, consistent with Hurewicz. Homology cannot tell this space from $S^3$; the fundamental group
can. This example is why the Poincaré conjecture ([Chapter 19](19-The-Poincare-Conjecture.md)) is phrased with the
fundamental group and not with homology.

### Higher dimensions

**Theorem 16.6 (Hurewicz, statement).** Let $n \ge 2$ and let $X$ be a path-connected space with $\pi_k(X) = 0$ for all
$1 \le k \le n - 1$. Then $H_k(X) = 0$ for $1 \le k \le n - 1$, and $\pi_n(X) \cong H_n(X)$.

Witold Hurewicz introduced the higher homotopy groups and proved this in 1935. Applied to $S^n$ (with $n \ge 2$, which is
simply connected and, by a cellular approximation argument, has $\pi_k(S^n) = 0$ for $k < n$), it gives
$\pi_n(S^n) \cong H_n(S^n) \cong \mathbb{Z}$: the degree of a map of spheres, which [Chapter 17](17-Applications-of-Algebraic-Topology.md)
uses to prove Brouwer's theorem in every dimension.

Beyond the first nonzero group, homology and homotopy separate. For the two-sphere, $H_n(S^2) = 0$ for all $n \ge 3$, but
$\pi_3(S^2) \cong \mathbb{Z}$, generated by the Hopf map, and Jean-Pierre Serre proved in the early 1950s that infinitely
many of the groups $\pi_n(S^2)$ are nonzero. Homology is the computable shadow; homotopy is the full, and mostly unknown, object.

### What homology does well

Homology has three properties that make it the standard tool, each stated here without proof (all in Hatcher, Chapter 2):

- **Functoriality.** A continuous map $f : X \to Y$ induces homomorphisms $f_* : H_n(X) \to H_n(Y)$, with
  $(g \circ f)_* = g_* \circ f_*$, exactly as for $\pi_1$ (Theorem 13.13).
- **Homotopy invariance.** Homotopic maps induce the same homomorphisms, so homotopy equivalent spaces have isomorphic
  homology.
- **Mayer-Vietoris.** For $X = U \cup V$ (open sets) there is a long exact sequence
  $\cdots \to H_n(U \cap V) \to H_n(U) \oplus H_n(V) \to H_n(X) \to H_{n-1}(U \cap V) \to \cdots$, the homology analogue of
  van Kampen's theorem, which computes the homology of a glued space from its pieces.

### A short history

Poincaré's 1895 *Analysis Situs* introduced Betti numbers (named after Enrico Betti, who had studied similar counts of
cuts in 1871) and torsion coefficients, defined by counting, and proved a first version of the Euler-Poincaré formula. The
idea that these numbers are ranks of **groups** (cycles modulo boundaries) took hold in the mid-1920s; Pavel Alexandroff
and Heinz Hopf credited Emmy Noether with urging it in her lectures in Göttingen, and Leopold Vietoris and Walther Mayer
developed the algebra. The invariance of homology under homeomorphism, the hard part of Theorem 16.4, was settled by James
Alexander and others in the 1910s and 1920s for complexes, and the singular homology that makes it routine was put on a
firm footing by Samuel Eilenberg in 1944.

## Check yourself

??? question "1. Compute $\partial[0, 1, 2, 3]$ and check directly that $\partial\partial[0, 1, 2, 3] = 0$."

    $\partial[0, 1, 2, 3] = [1, 2, 3] - [0, 2, 3] + [0, 1, 3] - [0, 1, 2]$. Applying $\partial$ to each term gives the four
    rows displayed in 16.3; each of the six edges $[0,1], [0,2], [0,3], [1,2], [1,3], [2,3]$ appears once with $+$ and once
    with $-$. The total is $0$.

??? question "2. Show that swapping the first two vertices changes the sign of the boundary of a triangle: compare $\partial[b, a, c]$ with $-\partial[a, b, c]$."

    $\partial[b, a, c] = [a, c] - [b, c] + [b, a] = [a, c] - [b, c] - [a, b]$, and
    $-\partial[a, b, c] = -[b, c] + [a, c] - [a, b]$. They are equal.

??? question "3. A figure eight is triangulated as two hollow triangles sharing a vertex: vertices $0, 1, 2$ and $0, 3, 4$, six edges. Find $b_0$ and $b_1$."

    $c_0 = 5$, $c_1 = 6$, no triangles. The graph is connected, so $r_1 = 5 - 1 = 4$ and $b_0 = 1$. Then
    $b_1 = (6 - 4) - 0 = 2$, generated by the two triangles' edge loops. This matches $H_1 = \pi_1^{\mathrm{ab}} = F_2^{\mathrm{ab}} = \mathbb{Z}^2$.

??? question "4. Triangulate the surface of a square pyramid (split the square base into two triangles). Count $V$, $E$, $F$ and say what the Betti numbers must be."

    $V = 5$ (four base corners and the apex). Edges: four base sides, one base diagonal, four slant edges: $E = 9$. Faces:
    four sides and two base triangles: $F = 6$. $\chi = 5 - 9 + 6 = 2$. The surface is a sphere, so $b_0 = 1$, $b_1 = 0$,
    $b_2 = 1$, and indeed $1 - 0 + 1 = 2$.

??? question "5. Show that in a tree (a connected graph without cycles) every 1-cycle is zero, and deduce $H_1 = 0$."

    A nonzero 1-cycle has, at every vertex, incoming and outgoing coefficients that balance. Take an edge with nonzero
    coefficient and leave its end vertex along another edge with nonzero coefficient (one must exist, or the boundary is not
    zero there), and continue. In a finite graph you must eventually revisit a vertex, which gives a cycle in the graph,
    impossible in a tree. So $Z_1 = 0$ and $H_1 = 0$. Check with ranks: $b_1 = E - V + 1 = (V - 1) - V + 1 = 0$.

??? question "6. The orientable surface of genus 3 has $\chi = -4$. Find all its Betti numbers."

    It is connected and orientable, so $b_0 = b_2 = 1$. Then $1 - b_1 + 1 = -4$ gives $b_1 = 6 = 2g$.

??? question "7. The Klein bottle has $H_1 \cong \mathbb{Z} \oplus \mathbb{Z}/2$ and $H_2 = 0$. Check the Euler characteristic, and explain why $H_2 = 0$."

    $b_0 = 1$, $b_1 = 1$ (the torsion does not count), $b_2 = 0$, so $\chi = 1 - 1 + 0 = 0$, matching $V - E + F = 0$ for any
    triangulation (as for $N_2$, $\chi = 2 - 2 = 0$). $H_2 = 0$ because the Klein bottle is non-orientable: the triangles
    cannot be oriented so that every edge cancels, so there is no nonzero 2-cycle.

??? question "8. On the sphere, the equator is a 1-cycle. Why does that not give a nonzero element of $H_1(S^2)$? On the torus, why does the loop around the tube give one?"

    The equator is the boundary of the upper hemisphere (the sum of its triangles, oriented coherently), so it lies in $B_1$
    and is zero in $H_1$. On the torus, the loop around the tube does not bound any 2-chain: cutting along it leaves a
    cylinder, not two pieces, and any 2-chain with that loop as boundary would have to be a region with that one edge,
    which does not exist. Its class is one of the two generators of $H_1(T^2) \cong \mathbb{Z}^2$.

??? question "9. Give two spaces with isomorphic $H_1$ but non-isomorphic $\pi_1$, and two spaces with isomorphic $\pi_1$ but different homology."

    The figure eight ($\pi_1 = F_2$) and the torus ($\pi_1 = \mathbb{Z}^2$) both have $H_1 \cong \mathbb{Z}^2$. A point and the
    sphere $S^2$ both have trivial $\pi_1$, but $H_2(S^2) \cong \mathbb{Z}$ while $H_2(\text{point}) = 0$.

??? question "10. Use the Euler-Poincaré formula to prove that no triangulation of the torus has $V - E + F \ne 0$, and that any triangulated closed surface with $V - E + F = 2$ has $b_1 = 0$."

    For any triangulation, $V - E + F = b_0 - b_1 + b_2$, and the Betti numbers of the torus are $1, 2, 1$ whatever the
    triangulation (Theorem 16.4), so the sum is $0$. For a closed connected surface $b_0 = 1$ and $b_2 \le 1$, so
    $2 = 1 - b_1 + b_2 \le 2 - b_1$, which forces $b_1 = 0$ and $b_2 = 1$.

??? question "11. In a simplicial complex every edge lies in exactly two triangles and $V - E + F = 1$. Can it be an orientable closed surface?"

    For an orientable closed connected surface, $b_0 = b_2 = 1$, so $\chi = 2 - b_1$, and $b_1 = 2g$ is even; $\chi$ is even.
    But $\chi = 1$ is odd. So it is not orientable; if it is a closed connected surface, it is $N_1 = \mathbb{R}P^2$, since
    $\chi(N_k) = 2 - k$.

??? question "12. Using Hurewicz, explain why the Poincaré homology sphere $P$ has $H_1(P) = 0$ although $\pi_1(P) \ne 1$."

    $H_1(P) \cong \pi_1(P)^{\mathrm{ab}}$. The group $\pi_1(P)$, of order 120, equals its own commutator subgroup (it is a
    perfect group), so its abelianisation is trivial. Homology sees only the abelian part of $\pi_1$, so it misses $P$'s
    one-dimensional complexity entirely.

## What you learned

- A simplicial complex builds a space from simplices glued along faces; the circle, sphere, torus and projective plane
  have small triangulations.
- Chains are formal sums of oriented simplices, and the boundary map takes the alternating sum of faces; the boundary of a
  boundary is always zero, because each face of a face appears twice with opposite signs.
- Homology $H_n = Z_n/B_n$ is "closed $n$-dimensional pieces modulo those that bound"; $H_0$ counts components and the
  Betti numbers come from ranks of boundary matrices.
- $H_*(S^1) = \mathbb{Z}, \mathbb{Z}$; $H_*(S^2) = \mathbb{Z}, 0, \mathbb{Z}$; $H_*(T^2) = \mathbb{Z}, \mathbb{Z}^2, \mathbb{Z}$;
  $H_*(\mathbb{R}P^2) = \mathbb{Z}, \mathbb{Z}/2, 0$, where torsion and missing $H_2$ record non-orientability.
- The Euler characteristic is the alternating sum of Betti numbers, by rank-nullity, which makes it a topological
  invariant and proves Euler's formula for every triangulated sphere.
- $H_1$ is the abelianised fundamental group (Hurewicz), and the first nonzero higher homotopy group equals homology;
  beyond that the two theories separate.

**Next:** [Chapter 17](17-Applications-of-Algebraic-Topology.md) puts homology to work: Brouwer's theorem in every
dimension, the hairy ball theorem, degree, fixed points, the ham sandwich theorem and persistent homology in data.

## Further reading

- Allen Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, Chapter 2 and Section 2.A.
- James R. Munkres, *Elements of Algebraic Topology*, Addison-Wesley, 1984, Chapter 1 (simplicial homology, with full
  proofs and many computations).
- P. J. Giblin, *Graphs, Surfaces and Homology*, 3rd edition, Cambridge University Press, 2010: homology of surfaces at a
  gentle pace.
- Herbert Edelsbrunner and John Harer, *Computational Topology: An Introduction*, American Mathematical Society, 2010:
  computing homology with matrices.
- Henri Poincaré, *Papers on Topology: Analysis Situs and Its Five Supplements*, translated by John Stillwell, American
  Mathematical Society, 2010.
- On this site: [Linear Algebra Chapter 7, The four subspaces](../linear-algebra/07-The-Four-Subspaces.md) (kernels, images
  and rank-nullity), [Algebra Chapter 15, Homomorphisms and quotients](../algebra/15-Homomorphisms-and-Quotients.md),
  [Combinatorics Chapter 12, Planar graphs and colouring](../combinatorics/12-Planar-Graphs-and-Colouring.md) for Euler's
  formula on graphs, and the U of T guide [MAT240 Unit 5, Rank-nullity and matrices](../../uoft/MAT240H1/unit05.md).
