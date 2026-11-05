# 2. Surfaces and Euler characteristic

*Count the corners, edges and faces of a cube: 8, 12 and 6. Then $8 - 12 + 6 = 2$. Do the same for a pyramid, a
prism, a soccer ball: the answer is always 2. Why? And what happens on a doughnut-shaped surface, where the answer
turns out to be 0? This chapter proves Euler's formula $V - E + F = 2$, uses it to show there are exactly five
Platonic solids, and then turns the number $V - E + F$ into a tool, the Euler characteristic, that tells surfaces
apart: the sphere, the torus, surfaces with many holes, and the strange one-sided surfaces called the Möbius strip,
the Klein bottle and the projective plane.*

!!! abstract "In this chapter"

    **You will learn:**

    - Euler's formula $V - E + F = 2$ for polyhedra, with a proof by removing edges, and where it fails
    - why there are exactly five Platonic solids, and why a soccer ball has exactly 12 pentagons
    - the Euler characteristic $\chi$ of a surface, the genus $g$ of a surface with holes, and $\chi = 2 - 2g$
    - why $\chi$ does not depend on how a surface is cut into faces (the subdivision argument)
    - the Möbius strip: one side, one edge, and what happens when you cut it
    - how to build the torus, the Klein bottle and the projective plane by gluing the edges of a square

    **You need:** [Chapter 1](01-What-Topology-Is.md), especially the Jordan curve theorem for polygons (1.4).
    Gentler versions: [Faces, edges and corners](../../topics/geometry/level-2/03-faces-edges-corners.md),
    [Nets of a cube](../../topics/geometry/level-2/04-nets-of-a-cube.md) and
    [The Möbius strip](../../topics/infinity/level-2/01-mobius-strip.md) on the Topics shelf, and the Geometry book's
    [Solid geometry](../geometry/11-Solid-Geometry.md) for the polyhedra themselves.

    **Levels:** 2.1 and 2.2 are beginner to intermediate; 2.3 is intermediate; 2.4 is beginner; 2.5 is intermediate
    and leads into [Chapter 6](06-Building-New-Spaces.md) and [Chapter 10](10-Classification-of-Surfaces.md).

## 2.1 Euler's formula for polyhedra

A **polyhedron** is a solid bounded by flat polygons. The polygons are its **faces**, the segments where two faces
meet are its **edges**, and the points where edges meet are its **vertices** (corners). Write $V$, $E$ and $F$ for
the numbers of vertices, edges and faces. Here are some counts.

| polyhedron | $V$ | $E$ | $F$ | $V - E + F$ |
|---|---|---|---|---|
| tetrahedron | 4 | 6 | 4 | 2 |
| cube | 8 | 12 | 6 | 2 |
| octahedron | 6 | 12 | 8 | 2 |
| square pyramid | 5 | 8 | 5 | 2 |
| triangular prism | 6 | 9 | 5 | 2 |
| pentagonal prism | 10 | 15 | 7 | 2 |
| dodecahedron | 20 | 30 | 12 | 2 |
| icosahedron | 12 | 30 | 20 | 2 |
| truncated icosahedron (soccer ball) | 60 | 90 | 32 | 2 |

The pattern is not a coincidence. Euler noticed it and stated it in a letter to Christian Goldbach in 1750, and
published it in 1758. His own attempted proof was incomplete. Adrien-Marie Legendre gave a proof in 1794 using areas
of triangles on a sphere, and Augustin-Louis Cauchy gave the edge-removing idea used below in 1813. René Descartes
had found a closely related formula around 1630, in notes that were lost for a long time and only partly survive in
a copy made by Leibniz.

### Flatten it

The first idea is to turn a polyhedron into a drawing on paper. Imagine the polyhedron is a rubber balloon. Cut out
one face, stretch the hole wide open, and flatten everything else onto the table. The other faces become regions of
a flat drawing, the vertices and edges become dots and lines, and the removed face becomes the region *outside* the
drawing. For a cube you get a small square inside a large one, with the corners joined: five regions inside and the
outside region, six in all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 180" role="img" aria-label="Left: a cube drawn in perspective. Right: the same cube flattened: a large outer square, a small inner square and four lines joining their corners. The flattened drawing has 8 dots, 12 lines and 5 regions inside, plus the outside region, which stands for the face that was removed.">
  <g fill="none" stroke="currentColor" stroke-width="2">
    <rect x="30" y="60" width="90" height="90" fill="#9cc9ea" fill-opacity="0.5"/>
    <polyline points="30,60 70,25 160,25 120,60"/>
    <polyline points="160,25 160,115 120,150"/>
    <g stroke-dasharray="4,4">
      <line x1="70" y1="25" x2="70" y2="115"/>
      <line x1="70" y1="115" x2="30" y2="150"/>
      <line x1="70" y1="115" x2="160" y2="115"/>
    </g>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="2">
    <rect x="230" y="15" width="150" height="150" fill="#7ccf9a" fill-opacity="0.35"/>
    <rect x="275" y="60" width="60" height="60" fill="#eea66f" fill-opacity="0.6"/>
    <line x1="230" y1="15" x2="275" y2="60"/>
    <line x1="380" y1="15" x2="335" y2="60"/>
    <line x1="380" y1="165" x2="335" y2="120"/>
    <line x1="230" y1="165" x2="275" y2="120"/>
  </g>
  <g fill="currentColor">
    <circle cx="230" cy="15" r="4"/>
    <circle cx="380" cy="15" r="4"/>
    <circle cx="380" cy="165" r="4"/>
    <circle cx="230" cy="165" r="4"/>
    <circle cx="275" cy="60" r="4"/>
    <circle cx="335" cy="60" r="4"/>
    <circle cx="335" cy="120" r="4"/>
    <circle cx="275" cy="120" r="4"/>
  </g>
</svg>
</div>

The flat drawing is a **plane graph**: dots joined by non-crossing lines (see [Chapter 3](03-Graphs-and-Planarity.md)
for the general theory). Its regions, including the unbounded outside region, are called its **faces**. Flattening
changes no counts: every vertex, edge and face of the polyhedron becomes a vertex, edge or face of the drawing, with
the removed face becoming the outside face. So Euler's formula for polyhedra follows from this statement about
drawings.

**Theorem (Euler's formula for plane graphs).** If a connected graph is drawn in the plane without crossings, with
$V$ vertices, $E$ edges and $F$ faces (counting the outside face), then $V - E + F = 2$.

### Proof by removing edges

*Proof.* We change the drawing step by step, keeping it connected, in ways that do not change $V - E + F$, until it
is a single dot.

Step 1: remove edges on cycles. Suppose the drawing contains a **cycle**: a closed path of edges that does not repeat
a vertex. A cycle is a simple closed curve made of polygonal pieces (we may assume the edges are drawn as polygonal
lines; any drawing can be straightened enough for this). By the Jordan curve theorem for polygons ([1.4](01-What-Topology-Is.md)),
it separates the plane into an inside and an outside. Pick any edge $e$ of the cycle. The face just on one side of
$e$ is inside the cycle and the face just on the other side is outside it, so they are two different faces. Erase
$e$: those two faces merge into one. So $E$ goes down by 1, $F$ goes down by 1, $V$ is unchanged, and $V - E + F$ is
unchanged. The graph stays connected, because the rest of the cycle still joins the two ends of $e$.

Repeat until no cycles are left. A connected graph with no cycles is called a **tree**. A tree drawn in the plane
has only one face, since there is no closed curve to fence anything in.

Step 2: remove leaves. A tree with more than one vertex has a **leaf**, a vertex of degree 1. (Walk along edges
without going back; since there are no cycles you never revisit a vertex, so the walk must stop, and it can only stop
at a vertex with no other edge to leave by.) Erase a leaf and its edge: $V$ and $E$ each go down by 1, $F$ stays 1,
and $V - E + F$ is unchanged. The result is still a tree.

Step 3: the end. Repeat until one vertex is left. Then $V = 1$, $E = 0$, $F = 1$, and $V - E + F = 2$. Since no step
changed $V - E + F$, it was 2 at the start. $\square$

**Worked example.** Run the proof on the cube's drawing. Step 1 removes edges on cycles until no cycles remain. The
cube's graph has 8 vertices, and a tree on 8 vertices has 7 edges (each leaf-removal in step 2 removes one vertex and
one edge, ending with 1 vertex and 0 edges). So step 1 removes $12 - 7 = 5$ edges, each removing one face:
$F$ goes from 6 to 1. Step 2 removes 7 leaves. **Check:** $8 - 12 + 6 = 1 - 0 + 1$.

### When the formula fails

Euler's formula is not true for every solid with flat faces, and the failures are instructive. In 1813 Simon
Lhuilier pointed out two kinds of exception.

- **Tunnels.** A square picture frame (a thick square ring) built from flat faces has a hole through it. Split its
  front into 4 trapezoids, its back into 4 trapezoids, and its outer and inner walls into 4 rectangles each. Then
  $V = 16$ (outer and inner squares, front and back), $E = 32$ (12 on the front, 12 on the back, 8 running front to
  back) and $F = 16$. So $V - E + F = 0$.
- **Faces that are not discs.** Glue a small cube onto the middle of one face of a big cube. The big face now has a
  square hole where the small cube sits: it is a ring, not a disc. If you count the ring as one face, you get
  $V = 16$, $E = 24$, $F = 11$ and $V - E + F = 3$. Splitting the ring into honest polygons repairs the count.

Both failures point to the hypotheses hidden in "polyhedron": the surface must be a deformed sphere, and every face
must be a disc. The flattening step used both. Imre Lakatos built his book *Proofs and Refutations* (1976) around
the history of these counterexamples. The tunnel example is the start of the next big idea: $V - E + F$ is not a
fact about polyhedra but a number attached to a *surface*, and it detects holes.

**Check (ring face):** big cube 8 vertices, 12 edges; small cube adds 8 vertices and 12 edges (its bottom square lies
in the big face); faces: 6 of the big cube (one being the ring) plus 5 of the small cube = 11. $16 - 24 + 11 = 3$.

<figure class="play" data-play="platonic"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The Platonic solids: V − E + F = 2 for every one.</figcaption></figure>

## 2.2 The five Platonic solids

A **regular polyhedron**, or **Platonic solid**, is a convex polyhedron whose faces are all the same regular polygon
and which has the same number of faces at every vertex. Five are known since antiquity: the tetrahedron, cube,
octahedron, dodecahedron and icosahedron. Book XIII of Euclid's *Elements* constructs all five and argues there are
no others, using angles: the angles of the faces at a vertex must add up to less than $360^\circ$. Euler's formula
gives a second proof that uses no angles at all, only counting. That is what makes it topological: it proves even
more, that there are no other *patterns* of faces, whatever their shapes.

**Theorem.** Suppose a polyhedron that satisfies $V - E + F = 2$ has every face a polygon with $p$ sides and every
vertex meeting $q$ edges, where $p \ge 3$ and $q \ge 3$. Then $(p, q)$ is one of $(3,3)$, $(3,4)$, $(4,3)$, $(3,5)$,
$(5,3)$, and $V$, $E$, $F$ are as in the table below.

*Proof.* Count edge-sides in two ways. Each face has $p$ edges and each edge borders exactly 2 faces, so
$pF = 2E$. Each vertex has $q$ edges and each edge has 2 ends, so $qV = 2E$. Substitute $V = 2E/q$ and $F = 2E/p$
into Euler's formula:

$$
\frac{2E}{q} - E + \frac{2E}{p} = 2 .
$$

Divide by $2E$:

$$
\frac{1}{q} + \frac{1}{p} = \frac{1}{2} + \frac{1}{E} .
$$

Since $E > 0$, the right side is more than $\tfrac12$, so $\frac1p + \frac1q > \frac12$. Multiply by $2pq$:
$2q + 2p > pq$, which rearranges to $pq - 2p - 2q + 4 < 4$, that is,

$$
(p - 2)(q - 2) < 4 .
$$

Both factors are at least 1. The products less than 4 are $1 \times 1$, $1 \times 2$, $2 \times 1$, $1 \times 3$,
$3 \times 1$, giving exactly the five pairs listed. For each pair the equation $\frac1E = \frac1p + \frac1q -
\frac12$ fixes $E$, and then $V = 2E/q$ and $F = 2E/p$. $\square$

| $(p, q)$ | $E$ | $V$ | $F$ | solid |
|---|---|---|---|---|
| (3, 3) | 6 | 4 | 4 | tetrahedron |
| (3, 4) | 12 | 6 | 8 | octahedron |
| (4, 3) | 12 | 8 | 6 | cube |
| (3, 5) | 30 | 12 | 20 | icosahedron |
| (5, 3) | 30 | 20 | 12 | dodecahedron |

**Check:** for $(3,5)$, $\frac13 + \frac15 - \frac12 = \frac{10 + 6 - 15}{30} = \frac1{30}$, so $E = 30$, $V = 60/5 =
12$, $F = 60/3 = 20$, and $12 - 30 + 20 = 2$.

The theorem says these are the only possibilities; to finish the classification one must also show that each of the
five really exists, which is done by building them (Euclid did, and the Geometry book's
[Chapter 11](../geometry/11-Solid-Geometry.md) shows how).

Notice the symmetry of the table: swapping $p$ and $q$ swaps $V$ and $F$. This is **duality**. Put a dot in the
middle of each face of a cube and join dots on neighbouring faces: you get an octahedron. The dodecahedron and the
icosahedron are dual in the same way, and the tetrahedron is dual to itself.

### What if the answer were 0?

Here is a preview of 2.3. Suppose the same counting were done on a surface where $V - E + F = 0$ instead of 2. Then
$\frac1p + \frac1q = \frac12$, so $(p-2)(q-2) = 4$, giving $(3,6)$, $(4,4)$ and $(6,3)$: triangles six to a vertex,
squares four to a vertex, hexagons three to a vertex. These are exactly the three regular tilings of the flat plane,
and each can be wrapped onto a doughnut. The number $V - E + F$ decides which patterns a surface allows.

### Soccer balls and fullerenes

**Theorem.** If a polyhedron with $V - E + F = 2$ has only pentagonal and hexagonal faces, and exactly three edges at
every vertex, then it has exactly 12 pentagons. The number of hexagons can be anything (except 1, as it happens), but
the pentagons are always 12.

*Proof.* Let $P$ be the number of pentagons and $H$ the number of hexagons. Then $F = P + H$. Counting edge-sides,
$2E = 5P + 6H$. Counting edge-ends at vertices, $3V = 2E$. Substitute into $V - E + F = 2$ and multiply by 6:

$$
2(5P + 6H) - 3(5P + 6H) + 6(P + H) = 12 .
$$

Expand: $10P + 12H - 15P - 18H + 6P + 6H = 12$. The $H$ terms cancel, leaving $P = 12$. $\square$

A soccer ball has 12 pentagons and 20 hexagons: $F = 32$, $E = (60 + 120)/2 = 90$, $V = 60$. **Check:**
$60 - 90 + 32 = 2$. The carbon molecule buckminsterfullerene, $\mathrm{C}_{60}$, discovered in 1985, has the same
shape: 60 carbon atoms at the vertices, each bonded to three others. Every closed cage of this kind (a fullerene) has
exactly 12 pentagonal rings, for the reason just proved.

The claim "except 1" in the theorem is a known fact about which values of $H$ occur; it is not proved here. The
proof only shows $P = 12$.

### Another consequence: a small face always exists

**Theorem.** Every polyhedron with $V - E + F = 2$ has a face with at most 5 sides.

*Proof.* Suppose every face had at least 6 sides. Counting edge-sides, $2E \ge 6F$, so $F \le E/3$. Every vertex has
at least 3 edges, so $2E \ge 3V$, and $V \le 2E/3$. Then $V - E + F \le \frac{2E}{3} - E + \frac{E}{3} = 0$, which
contradicts $V - E + F = 2$. $\square$

So you can never build a closed polyhedral ball out of hexagons alone. Hexagons tile the flat plane, and they tile a
doughnut, but a sphere needs some smaller faces to curve around.

## 2.3 Surfaces with holes: the torus, genus and $\chi = 2 - 2g$

*Level: intermediate.*

A **surface** is a shape that looks, near each of its points, like a small piece of the flat plane: an ant standing
anywhere on it sees a little disc around itself. (The precise definition, a 2-dimensional manifold, is in
[Chapter 11](11-Manifolds.md).) The sphere is a surface, and so is the surface of a doughnut. A **closed** surface is
one that is finite in extent and has no edge, like these two; a disc or a cylinder has an edge and is not closed.

### Cutting a surface into faces

To count $V - E + F$ on a surface, draw a graph on it so that every face is a disc (a region homeomorphic to a
polygon) and every edge borders faces on both sides. Such a drawing is a **cell decomposition**, or a **polyhedral
surface** if the faces are flat polygons in space. A **triangulation** is one in which every face is a triangle and
any two triangles meet in a single edge, a single vertex, or not at all.

**Definition.** The **Euler characteristic** of a closed surface $S$ is $\chi(S) = V - E + F$ for a cell decomposition
of $S$.

For this to make sense, the number must not depend on which decomposition we choose. We return to that below.

### The torus has $\chi = 0$

The picture frame of 2.1 is a polyhedral torus with $V - E + F = 16 - 32 + 16 = 0$. A simpler decomposition: cut the
torus into a grid. Picture the torus as a square whose opposite edges are glued (left to right, top to bottom; see
2.5). Draw an $m \times n$ grid of small squares on it. Because of the gluing, the vertices on the right edge are the
same as those on the left, and those on the top are the same as those on the bottom. So there are $mn$ vertices,
$2mn$ edges ($mn$ horizontal and $mn$ vertical), and $mn$ faces. Then $V - E + F = mn - 2mn + mn = 0$.

**Check:** the $3 \times 3$ grid gives $9 - 18 + 9 = 0$; the picture frame gave 0 too.

### Adding a handle subtracts 2

The **genus** $g$ of a closed surface of the kind we can build in space (two-sided, see 2.4) is its number of holes:
the sphere has genus 0, the torus genus 1, the surface of a two-holed doughnut genus 2, and so on. Such surfaces are
built from a sphere by adding handles.

**Theorem.** If a closed surface $S$ has a triangulation, and $S'$ is obtained from $S$ by attaching one handle, then
$\chi(S') = \chi(S) - 2$. Consequently a surface of genus $g$ has

$$
\chi = 2 - 2g .
$$

*Proof.* Choose two triangles of the triangulation with no vertex in common. Remove their insides, leaving two
triangular holes: this removes 2 faces and nothing else. Now attach a tube: a triangular prism without its two end
caps, bent around so that one open end is glued to the first hole and the other open end to the second hole. The
tube has three rectangular side faces and three edges running along it from one hole to the other; its vertices are
the 6 vertices of the two holes, which were already there. So the change is

$$
\Delta V = 0, \qquad \Delta E = +3, \qquad \Delta F = -2 + 3 = +1,
$$

and $\Delta \chi = 0 - 3 + 1 = -2$. The sphere has $\chi = 2$ (the tetrahedron is a triangulation). Attaching $g$
handles one at a time gives $\chi = 2 - 2g$. (Our new faces are rectangles, not triangles; drawing a diagonal in each
adds 3 edges and 3 faces and does not change $\chi$, so we can continue with a triangulation.) $\square$

| surface | genus $g$ | $\chi = 2 - 2g$ |
|---|---|---|
| sphere | 0 | 2 |
| torus | 1 | 0 |
| two-holed torus | 2 | $-2$ |
| three-holed torus | 3 | $-4$ |

### Why $\chi$ is well defined

Two different cell decompositions of the same surface give the same $V - E + F$. A full proof that this holds for
*any* two decompositions, however they are drawn, uses homology and is given in [Chapter 16](16-Homology.md). The
heart of the matter can be seen now. Any two decompositions have a common **refinement**, a third decomposition
obtained from either one by subdividing, and every subdivision is a sequence of these three moves:

1. Put a new vertex in the middle of an edge, splitting it in two: $\Delta V = 1$, $\Delta E = 1$, $\Delta \chi = 0$.
2. Draw a new edge across a face between two of its vertices, splitting it in two: $\Delta E = 1$, $\Delta F = 1$,
   $\Delta \chi = 0$.
3. Put a new vertex inside a face and join it to one vertex of the face: $\Delta V = 1$, $\Delta E = 1$,
   $\Delta \chi = 0$ (the face is still one region, now with a slit).

None of the moves changes $\chi$. The difficult part, honestly, is the claim that a common refinement always exists:
two decompositions can have edges that wiggle across each other infinitely often. For polyhedral surfaces made of
flat pieces the edges cross finitely often and the claim is fine; in general it needs the theory of
[Chapter 16](16-Homology.md) or a theorem that every surface can be triangulated (Tibor Radó, 1925).

Since $\chi$ does not change under homeomorphism (a homeomorphism carries a cell decomposition to a cell decomposition
with the same counts), it is a **topological invariant**. That gives our first real proof that two surfaces differ:

**Corollary.** The sphere, the torus and the two-holed torus are pairwise not homeomorphic, because their Euler
characteristics are $2$, $0$ and $-2$.

### Angle defects and curvature

There is a beautiful geometric reading of $\chi$. At a vertex of a polyhedron the face angles add up to less than
$360^\circ$ (on a convex corner); the shortfall is the **angle defect** at that vertex. Descartes knew that the
defects of a convex polyhedron add up to $720^\circ$.

**Worked example.** At each corner of a cube three right angles meet: the defect is $360^\circ - 270^\circ =
90^\circ$, and $8 \times 90^\circ = 720^\circ$. At each corner of an icosahedron five equilateral triangles meet:
defect $360^\circ - 300^\circ = 60^\circ$, and $12 \times 60^\circ = 720^\circ$.

**Theorem (Descartes).** For a polyhedral surface, the total angle defect is $360^\circ \times \chi$.

*Proof.* Add up all face angles. A face with $k$ sides has angles summing to $(k-2) \times 180^\circ$. Summing over
faces, the total is $180^\circ \times (\text{sum of } k) - 360^\circ F = 180^\circ \times 2E - 360^\circ F$, since the
sum of $k$ over all faces counts each edge twice. The total defect is $360^\circ V$ minus the total angle:

$$
360^\circ V - 360^\circ E + 360^\circ F = 360^\circ (V - E + F). \qquad \square
$$

For a sphere this gives $720^\circ$. For a torus it gives $0$: on a polyhedral torus some corners must stick out
(positive defect) and some must be saddle-shaped (negative defect, more than $360^\circ$ of face angle), and they
exactly balance. The smooth version of this statement is the **Gauss-Bonnet theorem**: the total curvature of a
closed surface is $2\pi\chi$. It is proved in the Geometry book's [Chapter 19](../geometry/19-Curves-and-Surfaces.md).
A quantity that comes from bending and measuring, curvature, adds up to a number that only depends on the topology.

### Mars, and why no flat map is perfect

The surface of Mars, like that of the Earth, is a sphere up to deformation: genus 0, $\chi = 2$. A flat map of the
whole planet would be a homeomorphism from the sphere onto a region of the plane, and none exists: every flat map of
the whole sphere must cut it somewhere or send two points to one. (The sphere minus one point is homeomorphic to the
whole plane, as stereographic projection showed in 1.5, but the last point has nowhere to go. A proof that no
homeomorphism exists uses compactness, [Chapter 8](08-Compactness.md), and invariance of domain,
[Chapter 11](11-Manifolds.md).) Topology forbids a perfect map; geometry adds that even a map of a small region cannot keep all
distances, because the sphere is curved (the Geometry book's [Chapter 16](../geometry/16-Spherical-Geometry.md)). This
is why maps of Mars are always made in pieces or with stretching near the poles or along a cut.

## 2.4 The Möbius strip and one-sidedness

Take a long strip of paper. Glue its two short ends together and you get a band, a short cylinder. Now glue them
again after giving one end a half-twist: you get a **Möbius strip**, found independently by August Möbius and Johann
Listing in 1858.

### One side, one edge

Start drawing a line along the middle of the strip with a pencil, without lifting it. You come back to your starting
point having covered both "sides" of the paper: there is only one side. Run your finger along the edge: you also
return to the start having traced the whole edge, so there is only one edge, a single closed curve. A cylinder has two
sides and two edge curves.

Where does the second side go? Think of the strip as a rectangle $ABCD$ with the end $AD$ glued to the end $BC$ after
a half turn, so that $A$ is glued to $C$ and $D$ to $B$. Walk along the top edge from $A$ to $B$; at $B$ you are glued
to $D$, so you continue along the bottom edge from $D$ to $C$; at $C$ you are glued to $A$. The top and bottom edges
of the rectangle have joined into one closed curve.

### Orientation

"One-sided" is a property of how the strip sits in space (a side is a direction you could stick a pin out of the
surface). There is an intrinsic version, which an ant living in the surface can test. Draw a small circle with an
arrow going clockwise around it. Slide it along the middle line of the strip once around. It comes back going
anticlockwise. A path that reverses the sense of rotation like this is called **orientation-reversing**, and a
surface containing one is **non-orientable**. A surface where every closed path preserves clockwise is
**orientable**. The sphere and the torus are orientable; the Möbius strip is not. Orientability is a topological
invariant, made precise in [Chapter 10](10-Classification-of-Surfaces.md).

### Cutting experiments

These are worth doing with real paper and scissors; the results are surprising and they are correct.

1. Cut a Möbius strip along its middle line. It does not fall into two pieces. You get one band, twice as long, with
   two full twists (four half-twists). Because it has an even number of half-twists, it is two-sided.
   *Why one piece:* the middle line is a single closed curve, and cutting along it separates the strip's edge region
   into two halves. But the edge of the Möbius strip is one closed curve, so both halves are the same strip: the
   region near the edge is one long band that goes around twice.
2. Cut a Möbius strip one third of the way in from the edge, keeping parallel to it. You go around twice before
   meeting your starting point, and you get two linked pieces: a thinner Möbius strip (the middle third) and a band
   twice as long with two full twists, linked with it.
3. Cut an ordinary cylinder band along its middle: two bands, as you would expect.

### $\chi$ of the Möbius strip

The Möbius strip is a surface with an edge (a **boundary**), so it is not closed, but $V - E + F$ still makes sense
for a cell decomposition. Use the rectangle with its ends glued. Its four corners become two points after gluing
($A$ with $C$, $B$ with $D$). Its edges are the top edge $AB$, the bottom edge $DC$, and the glued end ($AD$, the same
as $CB$): three edges. One face, the rectangle. So

$$
\chi(\text{Möbius strip}) = 2 - 3 + 1 = 0 .
$$

The cylinder, made from the same rectangle glued without a twist, has $A$ glued to $B$ and $D$ to $C$: again two
vertices, three edges and one face, so $\chi = 2 - 3 + 1 = 0$. So $\chi$ alone cannot tell the cylinder from the
Möbius strip; the number of boundary curves (2 against 1) can. Notice also that this decomposition has a face whose
edges are glued to each other: it is not a triangulation. Counting still works for such **CW decompositions**; the
subdivision moves above turn it into a triangulation without changing $\chi$.

Engineers have patented Möbius-shaped conveyor belts, which wear evenly over their whole surface instead of on one
side only.

## 2.5 The Klein bottle and the projective plane

*Level: intermediate.*

The torus can be built from a square by gluing opposite edges. Change the directions of the gluing and you get other
surfaces, two of which cannot be built in ordinary space without passing through themselves.

### Gluing diagrams

Draw a square and label its edges with letters and arrows. Edges with the same letter are glued so that their arrows
match. A diagram can be written as a **word** by going around the square clockwise from the top left corner and
writing each letter, with an exponent $-1$ when the arrow points against the direction of travel.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 160" role="img" aria-label="Four squares with labelled, arrowed edges. Sphere: the top edge a points left and the right edge a points down, the left edge b points up and the bottom edge b points right, so adjacent edges are folded together. Torus: top and bottom a both point right, left and right b both point up. Klein bottle: top and bottom a both point right, left b points up and right b points down. Projective plane: top a points right and bottom a points left, left b points up and right b points down.">
  <g stroke="currentColor" stroke-width="2">
    <rect x="20" y="30" width="80" height="80" fill="#9cc9ea" fill-opacity="0.5"/>
    <rect x="130" y="30" width="80" height="80" fill="#9cc9ea" fill-opacity="0.5"/>
    <rect x="240" y="30" width="80" height="80" fill="#7ccf9a" fill-opacity="0.5"/>
    <rect x="350" y="30" width="80" height="80" fill="#eea66f" fill-opacity="0.5"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="63,25 55,30 63,35"/>
    <polyline points="95,62 100,70 105,62"/>
    <polyline points="15,75 20,67 25,75"/>
    <polyline points="15,81 20,73 25,81"/>
    <polyline points="54,105 62,110 54,115"/>
    <polyline points="60,105 68,110 60,115"/>
    <polyline points="167,25 175,30 167,35"/>
    <polyline points="167,105 175,110 167,115"/>
    <polyline points="125,75 130,67 135,75"/>
    <polyline points="125,81 130,73 135,81"/>
    <polyline points="205,75 210,67 215,75"/>
    <polyline points="205,81 210,73 215,81"/>
    <polyline points="277,25 285,30 277,35"/>
    <polyline points="277,105 285,110 277,115"/>
    <polyline points="235,75 240,67 245,75"/>
    <polyline points="235,81 240,73 245,81"/>
    <polyline points="315,59 320,67 325,59"/>
    <polyline points="315,65 320,73 325,65"/>
    <polyline points="387,25 395,30 387,35"/>
    <polyline points="393,105 385,110 393,115"/>
    <polyline points="345,75 350,67 355,75"/>
    <polyline points="345,81 350,73 355,81"/>
    <polyline points="425,59 430,67 435,59"/>
    <polyline points="425,65 430,73 435,65"/>
  </g>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="60" y="20">a</text>
    <text x="114" y="74">a</text>
    <text x="8" y="74">b</text>
    <text x="40" y="128">b</text>
    <text x="170" y="20">a</text>
    <text x="170" y="128">a</text>
    <text x="118" y="74">b</text>
    <text x="222" y="74">b</text>
    <text x="280" y="20">a</text>
    <text x="280" y="128">a</text>
    <text x="228" y="74">b</text>
    <text x="332" y="74">b</text>
    <text x="390" y="20">a</text>
    <text x="390" y="128">a</text>
    <text x="338" y="74">b</text>
    <text x="442" y="74">b</text>
    <text x="60" y="152">sphere</text>
    <text x="170" y="152">torus</text>
    <text x="280" y="152">Klein bottle</text>
    <text x="390" y="152">projective plane</text>
  </g>
</svg>
</div>

- **Torus**, word $a b^{-1} a^{-1} b$ (read clockwise from the top left corner): top and bottom edges glued with arrows the same way (left to right), left and
  right edges glued with arrows the same way (bottom to top). Glue the top to the bottom first: a cylinder. Then the
  two circular ends of the cylinder are glued with matching directions: bend the cylinder around into a ring. The
  result is a torus.
- **Klein bottle**, word $a b a^{-1} b$: top and bottom glued the same way, but left and right glued in opposite directions. Glue top to bottom: a cylinder.
  Now the two circular ends must be glued with opposite orientations. In space you can do it only by pushing one end
  of the tube through the wall of the tube and joining it to the other end from inside. The picture of a "bottle
  whose neck goes through its side" is a Klein bottle with one forced self-crossing. Felix Klein described this
  surface in 1882.
- **Projective plane**, word $abab$: both pairs of edges glued with a reversal. It also cannot be built in space
  without self-crossing. Equivalently: take a disc and glue each point of its boundary circle to the diametrically
  opposite point.
- **Sphere**, word $a^{-1} a b^{-1} b$: adjacent edges folded together like closing an
  envelope.

The precise meaning of "glue" is the quotient topology of [Chapter 6](06-Building-New-Spaces.md); here we use it
intuitively.

### Counting $\chi$ from a gluing diagram

After gluing, the square becomes 1 face. Each letter becomes 1 edge. The vertices need care: the four corners of the
square may be glued to each other in various ways, and we must find how many distinct points they become.

**Worked example: the Klein bottle.** Name the corners of the square $TL$, $TR$, $BR$, $BL$ (top left, and so on).
Use the arrows from the picture.

Step 1. Edge $a$ on top runs $TL \to TR$; edge $a$ on the bottom runs $BL \to BR$. Gluing with matching arrows
identifies $TL = BL$ and $TR = BR$.

Step 2. Edge $b$ on the left runs $BL \to TL$ (upward); edge $b$ on the right runs $TR \to BR$ (downward). Matching
arrows identifies $BL = TR$ and $TL = BR$.

Step 3. Combine: $TL = BL = TR = BR$. All four corners become one point.

So $V = 1$, $E = 2$, $F = 1$, and $\chi(\text{Klein bottle}) = 1 - 2 + 1 = 0$.

**Worked example: the projective plane.** Top $a$ runs $TL \to TR$; bottom $a$ runs $BR \to BL$ (leftward). Matching
gives $TL = BR$ and $TR = BL$. Left $b$ runs $BL \to TL$; right $b$ runs $TR \to BR$. Matching gives $BL = TR$ and
$TL = BR$, the same two identifications. So the corners form 2 points, $\{TL, BR\}$ and $\{TR, BL\}$: $V = 2$, $E = 2$,
$F = 1$, and $\chi(\text{projective plane}) = 2 - 2 + 1 = 1$.

**Check:** for the torus all four corners become one point (top/bottom gives $TL = BL$, $TR = BR$; left/right gives
$BL = BR$, $TL = TR$), so $\chi = 1 - 2 + 1 = 0$, as found with the grid in 2.3.

| surface | word | $V$ | $E$ | $F$ | $\chi$ | orientable? |
|---|---|---|---|---|---|---|
| sphere | $a^{-1}ab^{-1}b$ | 3 | 2 | 1 | 2 | yes |
| torus | $ab^{-1}a^{-1}b$ | 1 | 2 | 1 | 0 | yes |
| Klein bottle | $aba^{-1}b$ | 1 | 2 | 1 | 0 | no |
| projective plane | $abab$ | 2 | 2 | 1 | 1 | no |

### Möbius strips inside

Both new surfaces contain Möbius strips, which is why they are non-orientable.

- In the projective plane drawn as a disc with opposite boundary points glued, take a band across the middle of the
  disc (a strip around a diameter). Its two ends lie on opposite arcs of the boundary circle and are glued with a
  half-twist: it is a Möbius strip. What is left of the disc, two caps, glue together into a single disc. So **the
  projective plane is a Möbius strip with a disc glued along its boundary circle.** **Check:** $\chi$ adds when you
  glue along a circle (a circle has $\chi = 0$: a cycle with $n$ vertices and $n$ edges), so $0 + 1 = 1$.
- The Klein bottle, cut along a suitable circle, falls into two Möbius strips. So **the Klein bottle is two Möbius
  strips glued along their boundary circles**, and $\chi = 0 + 0 = 0$.

### What $\chi$ cannot see

The torus and the Klein bottle both have $\chi = 0$, but the torus is orientable and the Klein bottle is not, so they
are not homeomorphic. Euler characteristic alone does not determine a closed surface. In
[Chapter 10](10-Classification-of-Surfaces.md) we prove that Euler characteristic and orientability together do:
every closed surface is a sphere with $g$ handles ($\chi = 2 - 2g$) or a sphere with $k$ **crosscaps**, that is,
with $k$ discs replaced by Möbius strips ($\chi = 2 - k$). The projective plane is $k = 1$ and the Klein bottle is
$k = 2$.

### Try it in Python

The vertex count is a small union-find computation. Words are lists of (letter, +1 or -1).

```python
def euler_char(word):
    n = len(word)                       # corners 0..n-1, edge i joins i to i+1
    parent = list(range(n))
    def find(x):
        while parent[x] != x:
            x = parent[x]
        return x
    def ends(i):                        # (tail, head) of edge i, following its arrow
        a, b = i, (i + 1) % n
        return (a, b) if word[i][1] > 0 else (b, a)
    for i in range(n):
        for j in range(i + 1, n):
            if word[i][0] == word[j][0]:
                (t1, h1), (t2, h2) = ends(i), ends(j)
                parent[find(t1)] = find(t2)
                parent[find(h1)] = find(h2)
    V = len({find(x) for x in range(n)})
    E = len({letter for letter, _ in word})
    return V - E + 1

torus = [("a",1),("b",-1),("a",-1),("b",1)]
klein = [("a",1),("b",1),("a",-1),("b",1)]
rp2   = [("a",1),("b",1),("a",1),("b",1)]
print(euler_char(torus), euler_char(klein), euler_char(rp2))   # 0 0 1
```

## A short history

Euler's formula (1750 letter, 1758 publication) was the first theorem about polyhedra that ignored lengths and
angles, and it was the subject of a long series of proofs, counterexamples and repairs through the nineteenth
century, told in Lakatos's *Proofs and Refutations*. Listing studied the formula for complexes with holes and coined
"topology" in 1847. Riemann's work on complex functions in the 1850s needed the idea of the connectivity of a surface,
which is the genus in another form. Möbius (whose discovery of 1858 was published in 1865) and Listing found the
one-sided strip. Klein described his bottle in 1882. The full classification of closed surfaces took shape in the
late nineteenth and early twentieth centuries; Max Dehn and Poul Heegaard gave a systematic treatment in 1907, and
Henry Brahana gave a proof in the modern combinatorial style in 1921. That story continues in
[Chapter 10](10-Classification-of-Surfaces.md).

## Check yourself

??? question "1. A hexagonal prism and a pentagonal pyramid: count V, E, F and check Euler's formula."

    Hexagonal prism: two hexagons with 6 vertices each, so $V = 12$; edges: 6 on top, 6 on the bottom, 6 vertical,
    $E = 18$; faces: 2 hexagons and 6 rectangles, $F = 8$. $12 - 18 + 8 = 2$.

    Pentagonal pyramid: 5 base vertices and the apex, $V = 6$; 5 base edges and 5 slanted edges, $E = 10$; the base
    and 5 triangles, $F = 6$. $6 - 10 + 6 = 2$.

??? question "2. A polyhedron with V - E + F = 2 has every face a triangle. Show that E = 3V - 6 and F = 2V - 4. Check with the icosahedron."

    Every face has 3 edges and every edge borders 2 faces: $3F = 2E$, so $F = 2E/3$. Then $V - E + 2E/3 = 2$, so
    $V - E/3 = 2$ and $E = 3V - 6$. Then $F = 2(3V - 6)/3 = 2V - 4$. Icosahedron: $V = 12$ gives $E = 30$, $F = 20$,
    correct.

??? question "3. Prove that no polyhedron with V - E + F = 2 has exactly 7 edges."

    Every face has at least 3 edges, so $3F \le 2E = 14$ and $F \le 4$. Every vertex has at least 3 edges, so
    $3V \le 2E = 14$ and $V \le 4$. Then $V + F \le 8$. But Euler's formula says $V + F = E + 2 = 9$. Contradiction.
    (Every other number of edges from 6 upward does occur: pyramids give all even $E \ge 6$, and cutting a corner
    off a pyramid adds 3 edges, giving the odd values from 9.)

??? question "4. A closed cage has only pentagons and hexagons, three edges at every vertex, and 30 hexagons. Find V, E, F."

    By the theorem in 2.2 there are 12 pentagons, so $F = 42$. Edge-sides: $2E = 5 \times 12 + 6 \times 30 = 60 +
    180 = 240$, so $E = 120$. Vertex count: $3V = 2E = 240$, $V = 80$. Check: $80 - 120 + 42 = 2$.

??? question "5. Verify Descartes' theorem for the regular tetrahedron and the regular octahedron."

    Tetrahedron: three equilateral triangles at each vertex, angle sum $180^\circ$, defect $180^\circ$; four
    vertices give $720^\circ$. Octahedron: four triangles at each vertex, angle sum $240^\circ$, defect $120^\circ$;
    six vertices give $720^\circ$. Both equal $360^\circ \times 2$.

??? question "6. A triangulation of the two-holed torus has V vertices. Express E and F in terms of V, and find them when V = 10."

    $\chi = 2 - 2 \times 2 = -2$. In a triangulation $3F = 2E$. So $V - E + 2E/3 = -2$, giving $E = 3(V + 2)$ and
    $F = 2E/3 = 2(V + 2)$. For $V = 10$: $E = 36$, $F = 24$. Check: $10 - 36 + 24 = -2$.

??? question "7. Show that a triangulation of the torus needs at least 7 vertices."

    On the torus $\chi = 0$ and $3F = 2E$, so $V - E + 2E/3 = 0$, giving $E = 3V$. In a triangulation two vertices
    are joined by at most one edge, so $E \le \binom{V}{2} = V(V-1)/2$. Then $3V \le V(V-1)/2$, so $6 \le V - 1$ and
    $V \ge 7$. A triangulation with exactly 7 vertices exists; it is the map of [Chapter 3](03-Graphs-and-Planarity.md)
    in which every vertex is joined to every other.

??? question "8. On a surface with chi = 0, show that the only patterns with p-gon faces and q faces at each vertex (p, q at least 3) are (3,6), (4,4), (6,3)."

    As in 2.2, $pF = 2E$ and $qV = 2E$, and now $\frac{2E}{q} - E + \frac{2E}{p} = 0$, so $\frac1p + \frac1q =
    \frac12$, that is $2p + 2q = pq$, or $(p-2)(q-2) = 4$. With both factors at least 1 the options are $1 \times 4$,
    $2 \times 2$, $4 \times 1$: $(p,q) = (3,6), (4,4), (6,3)$. Note that $E$ is not determined: these patterns can be
    drawn on the torus with any size of grid.

??? question "9. The word aabb (a square with top and right edges both a, bottom and left both b, read clockwise) gives a closed surface. Find its Euler characteristic. Which surface from the table has the same chi?"

    Read clockwise from the top left corner: edge 1 (top) is $a$ from $TL$ to $TR$; edge 2 (right) is $a$ from $TR$
    to $BR$; edge 3 (bottom, read leftward) is $b$ from $BR$ to $BL$; edge 4 (left, read upward) is $b$ from $BL$ to
    $TL$. Gluing the two $a$ edges with matching arrows: $TL = TR$ and $TR = BR$. Gluing the two $b$ edges:
    $BR = BL$ and $BL = TL$. So all four corners are one point: $V = 1$, $E = 2$, $F = 1$, $\chi = 0$. It is
    non-orientable (each pair is glued "the same way round" along the boundary, which forces a half twist), and in
    [Chapter 10](10-Classification-of-Surfaces.md) we will see it is the Klein bottle.

??? question "10. Cut a Möbius strip down the middle. Explain, using the rectangle ABCD with A glued to C and B to D, why the result is one piece, and find how many boundary curves it has."

    The middle line is the horizontal segment halfway between $AB$ and $DC$; after gluing it closes up into one
    circle. Cutting along it splits the rectangle into an upper half (between $AB$ and the middle) and a lower half
    (between the middle and $DC$). The half-twist glues the right end of the upper half to the left end of the lower
    half, and the right end of the lower half to the left end of the upper half. So the two halves join end to end
    into a single band, twice as long. Its boundary consists of the original edge (one curve, $AB$ followed by $DC$)
    and the cut, which runs along both sides of the middle line and so is a second closed curve: two boundary
    curves, as for an ordinary two-sided band.

??? question "11. Harder: attaching a crosscap means removing a disc from a surface and gluing in a Möbius strip along its boundary circle. Show this lowers chi by 1, and deduce chi = 2 - k for a sphere with k crosscaps."

    Removing the inside of one triangle of a triangulation removes one face: $\Delta\chi = -1$. The Möbius strip has
    $\chi = 0$, and its boundary circle has $\chi = 0$. Gluing two pieces along a common circle gives
    $\chi = \chi(\text{first}) + \chi(\text{second}) - \chi(\text{circle})$, because the vertices and edges of the
    circle would otherwise be counted twice. So the result has $\chi = (\chi(S) - 1) + 0 - 0 = \chi(S) - 1$. Starting
    from the sphere ($\chi = 2$), $k$ crosscaps give $\chi = 2 - k$: the projective plane ($k = 1$, $\chi = 1$) and
    the Klein bottle ($k = 2$, $\chi = 0$) agree with the table.

## What you learned

- Euler's formula $V - E + F = 2$ holds for every polyhedron that is a deformed sphere with disc faces; the proof
  flattens it and removes edges on cycles, then leaves of the tree.
- Counting edge-sides ($pF = 2E$, $qV = 2E$) and using Euler's formula gives exactly five Platonic patterns, exactly
  12 pentagons on any soccer-ball cage, and a face with at most 5 sides on every polyhedron.
- The Euler characteristic $\chi = V - E + F$ is defined for any surface cut into discs, does not depend on the cut
  (subdivision moves leave it unchanged), and is a topological invariant.
- Adding a handle lowers $\chi$ by 2, so a surface of genus $g$ has $\chi = 2 - 2g$; Descartes' total angle defect is
  $360^\circ \times \chi$.
- The Möbius strip has one side and one boundary curve and is non-orientable; $\chi = 0$.
- Gluing the edges of a square gives the sphere, torus ($\chi = 0$), Klein bottle ($\chi = 0$) and projective plane
  ($\chi = 1$); orientability separates the torus from the Klein bottle.

**Next:** [Chapter 3](03-Graphs-and-Planarity.md) studies graphs drawn on surfaces: which graphs can be drawn in the
plane without crossings, why $K_5$ and $K_{3,3}$ cannot, the four and five colour theorems, and why maps on a torus
can need seven colours.

## Further reading

- Leonhard Euler, "Elementa doctrinae solidorum" and "Demonstratio nonnullarum insignium proprietatum, quibus solida
  hedris planis inclusa sunt praedita", *Novi Commentarii Academiae Scientiarum Petropolitanae* 4 (1758).
- Imre Lakatos, *Proofs and Refutations: The Logic of Mathematical Discovery* (1976).
- David S. Richeson, *Euler's Gem: The Polyhedron Formula and the Birth of Topology* (2008).
- Jeffrey R. Weeks, *The Shape of Space* (2nd edition, 2002), for surfaces and 3-manifolds from the inside.
- L. Christine Kinsey, *Topology of Surfaces* (1993).
- George K. Francis, *A Topological Picturebook* (1987), for drawing these surfaces.
- H. S. M. Coxeter, *Regular Polytopes* (3rd edition, 1973).
- On this site: Topics lessons [Faces, edges and corners](../../topics/geometry/level-2/03-faces-edges-corners.md),
  [Nets of a cube](../../topics/geometry/level-2/04-nets-of-a-cube.md),
  [The Möbius strip](../../topics/infinity/level-2/01-mobius-strip.md) and
  [Sphere geometry](../../topics/geometry/level-8/06-sphere-geometry.md); the Geometry book's
  [Solid geometry](../geometry/11-Solid-Geometry.md), [Spherical geometry](../geometry/16-Spherical-Geometry.md) and
  [Curves and surfaces](../geometry/19-Curves-and-Surfaces.md); the Combinatorics book's
  [Planar graphs and colouring](../combinatorics/12-Planar-Graphs-and-Colouring.md).
