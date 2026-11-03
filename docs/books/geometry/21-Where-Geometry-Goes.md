# 21. Where geometry goes

*This book began with points, lines and Eratosthenes measuring the Earth with shadows. It has travelled through
Euclid, circles and triangles, the parallel postulate, spheres and hyperbolic planes, projective space, curved surfaces
and the spacetime of general relativity. Where does geometry go from here? Everywhere. This last chapter is a guided tour
of five directions: Klein's idea that a geometry is defined by its symmetries, which organises everything before it;
Thurston's eight geometries of three-dimensional space and Perelman's proof of the Poincaré conjecture; algebraic
geometry, where shapes are solution sets of equations; discrete and computational geometry, from convex hulls to the
densest packings of spheres in 8 and 24 dimensions; and some easily stated problems that nobody has solved. Each section
states results honestly, proves what fits on the page, and says where the rest is.*

!!! abstract "In this chapter"
    **You will learn:**

    - Klein's Erlangen programme: a geometry is a space with a group of transformations, and its theorems are the invariants
    - how Euclidean, affine, projective and hyperbolic geometry fit into one hierarchy, with the hyperbolic distance as a cross-ratio
    - Thurston's eight geometries, Ricci flow, and what Perelman proved
    - a first look at algebraic geometry: varieties, Bézout's theorem, genus, elliptic curves
    - convex hulls, Voronoi diagrams and Delaunay triangulations, and how computers do geometry
    - sphere packing, from Kepler's conjecture (Hales) to dimensions 8 and 24 (Viazovska)
    - open problems: the moving sofa, the chromatic number of the plane, the inscribed square

    **You need:** most of this book, especially [Chapter 10](10-Transformations-and-Symmetry.md),
    [Chapter 17](17-Hyperbolic-Geometry.md), [Chapter 18](18-Projective-Geometry.md) and [Chapter 20](20-Manifolds-and-Riemannian-Geometry.md);
    some group theory from [Algebra, Chapter 13](../algebra/13-Groups.md). Section 21.4 needs very little: it can be read after
    Part II.

    **Levels:** the content is expert, written as a survey. 21.1 and 21.4 can be read by anyone who has reached Part III; 21.2
    and 21.3 build on Part IV and Chapter 20; 21.5 states problems a beginner can understand and experts cannot solve.

## 21.1 Klein's Erlangen programme: geometry as symmetry

*Level: advanced.* By the 1870s mathematicians had a crowd of geometries: Euclidean, spherical, hyperbolic, projective,
affine, inversive. Each had its own theorems. Were they rivals, or parts of one subject? In 1872, aged 23 and newly appointed
professor at Erlangen, Felix Klein published a programme (*Vergleichende Betrachtungen über neuere geometrische Forschungen*,
"A comparative review of recent researches in geometry") with a simple answer:

> A geometry is a space together with a group of transformations of it. The geometry studies exactly the properties of
> figures that are unchanged (invariant) under every transformation in the group.

Two figures are "the same" in a geometry if some transformation of its group carries one to the other. The group decides
what counts as a fact.

**The hierarchy of plane geometries.** Take the plane and four groups, each containing the last:

| Geometry | Group | What it preserves | A typical theorem |
| --- | --- | --- | --- |
| Euclidean | isometries (rotations, reflections, translations) | lengths, angles, areas | Pythagoras |
| similarity | isometries and scalings | angles, ratios of lengths, shape | the angle sum is $180°$ |
| affine | $x \mapsto Ax + b$, $A$ invertible | lines, parallelism, ratios along a line, ratios of areas | medians are concurrent |
| projective | $PGL(3)$, invertible matrices up to scale | lines, incidence, cross-ratio | Desargues, Pappus, Pascal |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 250" role="img" aria-label="Nested boxes showing Klein's view. Euclidean geometry, with the smallest group, sits inside similarity geometry, inside affine geometry, inside projective geometry, which has the largest group. The fewer transformations allowed, the more properties survive: distance, then shape and angle, then parallels and ratios along a line, then only incidence and cross-ratio">
  <rect x="10" y="10" width="420" height="230" rx="10" fill="#7ccf9a" fill-opacity="0.18" stroke="#7ccf9a" stroke-width="2"/>
  <text x="22" y="32" text-anchor="start" font-size="13" fill="currentColor">projective: lines, incidence, cross-ratio</text>
  <rect x="30" y="50" width="380" height="170" rx="10" fill="#9cc9ea" fill-opacity="0.18" stroke="#9cc9ea" stroke-width="2"/>
  <text x="42" y="72" text-anchor="start" font-size="13" fill="currentColor">affine: parallels, ratios on a line</text>
  <rect x="50" y="90" width="340" height="110" rx="10" fill="#eea66f" fill-opacity="0.18" stroke="#eea66f" stroke-width="2"/>
  <text x="62" y="112" text-anchor="start" font-size="13" fill="currentColor">similarity: angles, shape</text>
  <rect x="70" y="130" width="300" height="50" rx="10" fill="none" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
  <text x="82" y="152" text-anchor="start" font-size="13" fill="currentColor">Euclidean: lengths</text>
  <text x="220" y="236" text-anchor="middle" font-size="12" fill="currentColor">bigger group  ⟶  fewer invariants</text>
</svg>
</div>

The bigger the group, the fewer properties survive, and the more general (but fewer) the theorems. In Euclidean geometry
a 3-4-5 triangle differs from a 6-8-10 triangle; in similarity geometry they are the same; in affine geometry *all*
triangles are the same, because an affine map can send any three non-collinear points to any three others; and in
projective geometry all quadrangles are the same ([Chapter 18](18-Projective-Geometry.md), Theorem 18.2).

**Using the group to prove things.** Klein's view gives a proof strategy: to prove an affine theorem, it is enough to prove it
for one convenient figure.

*Claim.* Affine maps preserve ratios of lengths along a line. *Proof.* If $Q = P + t(R - P)$ then
$f(Q) = A(P + t(R - P)) + b = f(P) + t(f(R) - f(P))$, so $f(Q)$ divides $f(P)f(R)$ in the same ratio $t$. $\square$

*Theorem.* The three medians of any triangle meet in one point, which divides each in the ratio $2 : 1$. *Proof.* Medians
(lines from a vertex to the midpoint of the opposite side) and the ratio $2 : 1$ are affine notions: by the claim, an affine
map sends midpoints to midpoints and preserves the ratio. Send the triangle by an affine map to an equilateral triangle.
There the medians are also the axes of symmetry, so they meet at the centre, which is at $\tfrac23$ of the height from each
vertex. Map back. $\square$

**Non-Euclidean geometry inside projective geometry.** Klein's most striking example, building on Cayley's work of 1859, puts
hyperbolic geometry inside projective geometry. Take the projective plane and a circle (a conic) in it. The projective
transformations that map the inside of the circle to itself form a group. Make that the group of the geometry, with the
inside of the circle as the space, and chords as lines: this is the **Beltrami–Klein model** of the hyperbolic plane. Distance
comes from the one projective invariant, the cross-ratio: for points $P, Q$ inside, let the line $PQ$ meet the circle at $A$
and $B$, and define

$$
d(P, Q) = \frac12 \left| \ln (A, B; P, Q) \right| .
$$

Because projective transformations preserve the cross-ratio, they preserve this distance: they are the isometries.

*Worked example.* In the unit disc take $P = (0, 0)$ and $Q = (x, 0)$, $0 < x < 1$. The line meets the circle at $A = -1$ and
$B = 1$, and

$$
(A, B; P, Q) = \frac{(0 - (-1))(x - 1)}{(0 - 1)(x - (-1))} = \frac{1 - x}{1 + x}, \qquad d = \frac12 \ln\frac{1 + x}{1 - x} = \operatorname{artanh} x .
$$

For $x = 0.6$: $d = \tfrac12 \ln 4 \approx 0.693$. As $x \to 1$, $d \to \infty$: the boundary circle is infinitely far away. (This is
the distance formula of the Klein model; the Poincaré disc of [Chapter 17](17-Hyperbolic-Geometry.md) is the same geometry drawn
differently.) Use an imaginary conic instead, such as $x^2 + y^2 + z^2 = 0$, and the same recipe gives elliptic geometry;
let the conic degenerate and Euclidean geometry appears as a limiting case. Cayley summed it up in 1859: "descriptive geometry is all
geometry", where by "descriptive" he meant what we now call projective.

**Further examples of Klein's principle.**

- **Inversive (Möbius) geometry:** the group of Möbius transformations ([Chapter 13](13-Inversion-and-Complex-Geometry.md)); circles
  and lines are one kind of object, and the complex cross-ratio is the invariant.
- **Topology:** the group of all homeomorphisms; the invariants are things like connectedness, number of holes, Euler
  characteristic.
- **Symmetry in physics:** special relativity is the geometry of the Lorentz group, and conservation laws come from symmetries
  (Noether's theorem, 1918).

**Where the programme stops.** A general Riemannian manifold ([Chapter 20](20-Manifolds-and-Riemannian-Geometry.md)) usually has
*no* symmetries at all, so it is not a Klein geometry. Élie Cartan reconciled the two views in the 1920s: a **Cartan geometry**
looks infinitesimally like a Klein geometry at each point, with curvature measuring how far it is from being one. A surface
is locally like the Euclidean plane, with Gaussian curvature measuring the difference. The models of constant curvature,
sphere, plane and hyperbolic plane, are exactly the Klein geometries among surfaces, and that is why they keep appearing.

## 21.2 Thurston's eight geometries and the Poincaré conjecture

*Level: expert (survey).* [Chapter 20](20-Manifolds-and-Riemannian-Geometry.md) ended with uniformization: every closed surface
carries one of three geometries, spherical, Euclidean or hyperbolic. What about three-dimensional spaces? A **closed
3-manifold** is a compact 3-manifold without boundary, a possible shape for a finite universe with no edge. Examples: the
3-sphere $S^3$ (the unit sphere in $\mathbb{R}^4$), the 3-torus (a cube with opposite faces glued), $S^2 \times S^1$, and many
more made by gluing the faces of polyhedra.

**The Poincaré conjecture.** In 1904 Henri Poincaré asked: if a closed 3-manifold is **simply connected** (every loop in it can
be shrunk to a point, as on a sphere and unlike a torus), must it be the 3-sphere? For surfaces the answer is yes: a simply
connected closed surface is a sphere, by the classification of surfaces. In three dimensions it remained open for almost a
century, and it became one of the seven Millennium Prize Problems of the Clay Mathematics Institute in 2000.

**Thurston's geometrization conjecture.** In the late 1970s William Thurston proposed a far more ambitious picture. A
**model geometry** is a simply connected 3-manifold with a Riemannian metric whose group of isometries is as large as
possible in a suitable sense, and which covers at least one closed manifold. Thurston showed there are exactly eight:

| Geometry | Description |
| --- | --- |
| $S^3$ | the round 3-sphere, constant curvature $+1$ |
| $\mathbb{E}^3$ | Euclidean space, curvature 0 |
| $\mathbb{H}^3$ | hyperbolic space, constant curvature $-1$ |
| $S^2 \times \mathbb{R}$ | product of a sphere and a line |
| $\mathbb{H}^2 \times \mathbb{R}$ | product of a hyperbolic plane and a line |
| $\widetilde{SL_2\mathbb{R}}$ | the universal cover of the group of $2 \times 2$ real matrices of determinant 1 |
| Nil | the Heisenberg group of upper triangular $3 \times 3$ matrices with ones on the diagonal |
| Sol | a group built from the matrices $\operatorname{diag}(e^t, e^{-t})$ |

The **geometrization conjecture** states: every closed orientable 3-manifold can be cut, along a finite collection of
embedded spheres and tori in a canonical way, into pieces each of which carries one of the eight geometries. Thurston proved
it for a large class (Haken manifolds) and showed that "most" 3-manifolds are hyperbolic. The Poincaré conjecture is a special
case: a simply connected closed 3-manifold can only carry the $S^3$ geometry, and the only such manifold is $S^3$ itself.

Hyperbolic 3-manifolds are remarkably rigid. By **Mostow's rigidity theorem** (1968), a closed (or finite-volume) hyperbolic
3-manifold has only one hyperbolic metric, so geometric numbers such as its volume are topological invariants. The space
around a figure-eight knot, for example, carries a complete hyperbolic metric of volume about $2.0299$, made from two regular
ideal tetrahedra; no other knot complement has smaller volume.

**Ricci flow.** In 1982 Richard Hamilton proposed a way to *find* the geometry: let the metric evolve by the **Ricci flow**

$$
\frac{\partial g}{\partial t} = -2\, \mathrm{Ric}(g),
$$

a heat equation for the metric. Where Ricci curvature is positive the metric shrinks, where it is negative it expands, and
one hopes the flow irons out irregularities, as heat flow evens out temperature.

*Worked example: the round sphere.* On the round $n$-sphere of radius $r$, $\mathrm{Ric} = \frac{n - 1}{r^2}\, g$, and
$g = r^2 g_1$ where $g_1$ is the unit sphere's metric. Trying $g(t) = r(t)^2 g_1$ in the flow: $\frac{d}{dt}(r^2)\, g_1 = -2 \cdot \frac{n-1}{r^2} \cdot r^2 g_1$, so

$$
\frac{d}{dt}\, r^2 = -2(n - 1), \qquad r(t)^2 = r_0^2 - 2(n - 1)t .
$$

The sphere stays round and shrinks to a point at time $t = r_0^2/(2(n - 1))$. *Check:* a unit 2-sphere vanishes at $t = \tfrac12$;
a 3-sphere of radius 3 at $t = 9/4$.

Hamilton proved in 1982 that a closed 3-manifold with positive Ricci curvature flows, after rescaling, to a round metric of
constant positive curvature, which settled that case. In general the flow develops **singularities**: a thin neck in a
dumbbell-shaped sphere pinches off before the rest shrinks.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 220" role="img" aria-label="A dumbbell-shaped sphere under Ricci flow, drawn as its outline at three times. The two round ends shrink slowly while the thin neck between them shrinks faster and pinches off, the kind of singularity Perelman had to understand and cut out by surgery">
  <polygon points="45.4,105 47.1,87.9 48.9,81 50.6,75.8 52.4,71.5 54.1,67.8 55.9,64.5 57.6,61.5 59.4,58.8 61.1,56.3 62.9,54 64.6,51.9 66.4,49.9 68.1,48 69.8,46.2 71.6,44.6 73.3,43.1 75.1,41.6 76.8,40.2 78.6,39 80.3,37.7 82.1,36.6 83.8,35.5 85.6,34.5 87.3,33.6 89,32.7 90.8,31.8 92.5,31.1 94.3,30.3 96,29.7 97.8,29.1 99.5,28.5 101.3,28 103,27.5 104.8,27.1 106.5,26.7 108.3,26.3 110,26 111.7,25.8 113.5,25.6 115.2,25.4 117,25.3 118.7,25.2 120.5,25.2 122.2,21.8 124,21.8 125.7,21.9 127.5,22 129.2,22.2 131,22.4 132.7,22.6 134.4,22.9 136.2,23.2 137.9,23.5 139.7,23.9 141.4,24.4 143.2,24.8 144.9,25.3 146.7,25.9 148.4,26.5 150.2,27.1 151.9,27.8 153.7,28.5 155.4,29.2 157.1,30 158.9,30.9 160.6,31.8 162.4,32.7 164.1,33.7 165.9,34.7 167.6,35.7 169.4,36.8 171.1,38 172.9,39.1 174.6,40.3 176.4,41.6 178.1,42.8 179.8,44.1 181.6,45.4 183.3,46.6 185.1,47.8 186.8,49 188.6,50.1 190.3,51 192.1,51.8 193.8,52.4 195.6,52.7 197.3,52.7 199,52.7 200.8,52.7 202.5,52.7 204.3,52.7 206,52.7 207.8,52.7 209.5,52.7 211.3,52.7 213,52.7 214.8,52.7 216.5,52.7 218.3,52.7 220,52.7 221.7,52.7 223.5,52.7 225.2,52.7 227,52.7 228.7,52.7 230.5,52.7 232.2,52.7 234,52.7 235.7,52.7 237.5,52.7 239.2,52.7 241,52.7 242.7,52.7 244.4,52.7 246.2,52.4 247.9,51.8 249.7,51 251.4,50.1 253.2,49 254.9,47.8 256.7,46.6 258.4,45.4 260.2,44.1 261.9,42.8 263.6,41.6 265.4,40.3 267.1,39.1 268.9,38 270.6,36.8 272.4,35.7 274.1,34.7 275.9,33.7 277.6,32.7 279.4,31.8 281.1,30.9 282.9,30 284.6,29.2 286.3,28.5 288.1,27.8 289.8,27.1 291.6,26.5 293.3,25.9 295.1,25.3 296.8,24.8 298.6,24.4 300.3,23.9 302.1,23.5 303.8,23.2 305.6,22.9 307.3,22.6 309,22.4 310.8,22.2 312.5,22 314.3,21.9 316,21.8 317.8,21.8 319.5,25.2 321.3,25.2 323,25.3 324.8,25.4 326.5,25.6 328.3,25.8 330,26 331.7,26.3 333.5,26.7 335.2,27.1 337,27.5 338.7,28 340.5,28.5 342.2,29.1 344,29.7 345.7,30.3 347.5,31.1 349.2,31.8 351,32.7 352.7,33.6 354.4,34.5 356.2,35.5 357.9,36.6 359.7,37.7 361.4,39 363.2,40.2 364.9,41.6 366.7,43.1 368.4,44.6 370.2,46.2 371.9,48 373.6,49.9 375.4,51.9 377.1,54 378.9,56.3 380.6,58.8 382.4,61.5 384.1,64.5 385.9,67.8 387.6,71.5 389.4,75.8 391.1,81 392.9,87.9 394.6,105 394.6,105 392.9,122.1 391.1,129 389.4,134.2 387.6,138.5 385.9,142.2 384.1,145.5 382.4,148.5 380.6,151.2 378.9,153.7 377.1,156 375.4,158.1 373.6,160.1 371.9,162 370.2,163.8 368.4,165.4 366.7,166.9 364.9,168.4 363.2,169.8 361.4,171 359.7,172.3 357.9,173.4 356.2,174.5 354.4,175.5 352.7,176.4 351,177.3 349.2,178.2 347.5,178.9 345.7,179.7 344,180.3 342.2,180.9 340.5,181.5 338.7,182 337,182.5 335.2,182.9 333.5,183.3 331.7,183.7 330,184 328.3,184.2 326.5,184.4 324.8,184.6 323,184.7 321.3,184.8 319.5,184.8 317.8,188.2 316,188.2 314.3,188.1 312.5,188 310.8,187.8 309,187.6 307.3,187.4 305.6,187.1 303.8,186.8 302.1,186.5 300.3,186.1 298.6,185.6 296.8,185.2 295.1,184.7 293.3,184.1 291.6,183.5 289.8,182.9 288.1,182.2 286.3,181.5 284.6,180.8 282.9,180 281.1,179.1 279.4,178.2 277.6,177.3 275.9,176.3 274.1,175.3 272.4,174.3 270.6,173.2 268.9,172 267.1,170.9 265.4,169.7 263.6,168.4 261.9,167.2 260.2,165.9 258.4,164.6 256.7,163.4 254.9,162.2 253.2,161 251.4,159.9 249.7,159 247.9,158.2 246.2,157.6 244.4,157.3 242.7,157.2 241,157.2 239.2,157.2 237.5,157.2 235.7,157.2 234,157.2 232.2,157.2 230.5,157.2 228.7,157.2 227,157.2 225.2,157.2 223.5,157.2 221.7,157.2 220,157.2 218.3,157.2 216.5,157.2 214.8,157.2 213,157.2 211.3,157.2 209.5,157.2 207.8,157.2 206,157.2 204.3,157.2 202.5,157.2 200.8,157.2 199,157.2 197.3,157.2 195.6,157.3 193.8,157.6 192.1,158.2 190.3,159 188.6,159.9 186.8,161 185.1,162.2 183.3,163.4 181.6,164.6 179.8,165.9 178.1,167.2 176.4,168.4 174.6,169.7 172.9,170.9 171.1,172 169.4,173.2 167.6,174.3 165.9,175.3 164.1,176.3 162.4,177.3 160.6,178.2 158.9,179.1 157.1,180 155.4,180.8 153.7,181.5 151.9,182.2 150.2,182.9 148.4,183.5 146.7,184.1 144.9,184.7 143.2,185.2 141.4,185.6 139.7,186.1 137.9,186.5 136.2,186.8 134.4,187.1 132.7,187.4 131,187.6 129.2,187.8 127.5,188 125.7,188.1 124,188.2 122.2,188.2 120.5,184.8 118.7,184.8 117,184.7 115.2,184.6 113.5,184.4 111.7,184.2 110,184 108.3,183.7 106.5,183.3 104.8,182.9 103,182.5 101.3,182 99.5,181.5 97.8,180.9 96,180.3 94.3,179.7 92.5,178.9 90.8,178.2 89,177.3 87.3,176.4 85.6,175.5 83.8,174.5 82.1,173.4 80.3,172.3 78.6,171 76.8,169.8 75.1,168.4 73.3,166.9 71.6,165.4 69.8,163.8 68.1,162 66.4,160.1 64.6,158.1 62.9,156 61.1,153.7 59.4,151.2 57.6,148.5 55.9,145.5 54.1,142.2 52.4,138.5 50.6,134.2 48.9,129 47.1,122.1 45.4,105" fill="none" stroke="#9cc9ea" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="49,105 50.7,88.5 52.4,81.9 54.1,76.8 55.8,72.7 57.5,69.1 59.3,65.9 61,63 62.7,60.4 64.4,58 66.1,55.8 67.8,53.8 69.5,51.9 71.2,50.1 72.9,48.4 74.6,46.8 76.4,45.4 78.1,44 79.8,42.7 81.5,41.5 83.2,40.3 84.9,39.2 86.6,38.2 88.3,37.3 90,36.4 91.7,35.6 93.5,34.8 95.2,34.1 96.9,33.4 98.6,32.8 100.3,32.2 102,31.7 103.7,31.2 105.4,30.8 107.1,30.4 108.8,30.1 110.6,29.8 112.3,29.6 114,29.4 115.7,29.2 117.4,29.1 119.1,29 120.8,29 122.5,28.6 124.2,28.7 125.9,28.8 127.7,28.9 129.4,29.1 131.1,29.4 132.8,29.6 134.5,30 136.2,30.3 137.9,30.7 139.6,31.2 141.3,31.7 143.1,32.2 144.8,32.8 146.5,33.5 148.2,34.2 149.9,34.9 151.6,35.7 153.3,36.6 155,37.5 156.7,38.5 158.4,39.5 160.2,40.6 161.9,41.8 163.6,43 165.3,44.3 167,45.7 168.7,47.2 170.4,48.8 172.1,50.4 173.8,52.2 175.5,54.1 177.2,56.1 179,58.2 180.7,60.5 182.4,62.9 184.1,65.4 185.8,68 187.5,70.7 189.2,73.3 190.9,75.4 192.6,76.5 194.3,76.5 196.1,76.5 197.8,76.5 199.5,76.5 201.2,76.5 202.9,76.5 204.6,76.5 206.3,76.5 208,76.5 209.7,76.5 211.4,76.5 213.2,76.5 214.9,76.5 216.6,76.5 218.3,76.5 220,76.5 221.7,76.5 223.4,76.5 225.1,76.5 226.8,76.5 228.6,76.5 230.3,76.5 232,76.5 233.7,76.5 235.4,76.5 237.1,76.5 238.8,76.5 240.5,76.5 242.2,76.5 243.9,76.5 245.7,76.5 247.4,76.5 249.1,75.4 250.8,73.3 252.5,70.7 254.2,68 255.9,65.4 257.6,62.9 259.3,60.5 261,58.2 262.8,56.1 264.5,54.1 266.2,52.2 267.9,50.4 269.6,48.8 271.3,47.2 273,45.7 274.7,44.3 276.4,43 278.1,41.8 279.8,40.6 281.6,39.5 283.3,38.5 285,37.5 286.7,36.6 288.4,35.7 290.1,34.9 291.8,34.2 293.5,33.5 295.2,32.8 296.9,32.2 298.7,31.7 300.4,31.2 302.1,30.7 303.8,30.3 305.5,30 307.2,29.6 308.9,29.4 310.6,29.1 312.3,28.9 314,28.8 315.8,28.7 317.5,28.6 319.2,29 320.9,29 322.6,29.1 324.3,29.2 326,29.4 327.7,29.6 329.4,29.8 331.1,30.1 332.9,30.4 334.6,30.8 336.3,31.2 338,31.7 339.7,32.2 341.4,32.8 343.1,33.4 344.8,34.1 346.5,34.8 348.2,35.6 350,36.4 351.7,37.3 353.4,38.2 355.1,39.2 356.8,40.3 358.5,41.5 360.2,42.7 361.9,44 363.6,45.4 365.4,46.8 367.1,48.4 368.8,50.1 370.5,51.9 372.2,53.8 373.9,55.8 375.6,58 377.3,60.4 379,63 380.7,65.9 382.4,69.1 384.2,72.7 385.9,76.8 387.6,81.9 389.3,88.5 391,105 391,105 389.3,121.5 387.6,128.1 385.9,133.2 384.2,137.3 382.4,140.9 380.7,144.1 379,147 377.3,149.6 375.6,152 373.9,154.2 372.2,156.2 370.5,158.1 368.8,159.9 367.1,161.6 365.4,163.2 363.6,164.6 361.9,166 360.2,167.3 358.5,168.5 356.8,169.7 355.1,170.8 353.4,171.8 351.7,172.7 350,173.6 348.2,174.4 346.5,175.2 344.8,175.9 343.1,176.6 341.4,177.2 339.7,177.8 338,178.3 336.3,178.8 334.6,179.2 332.9,179.6 331.1,179.9 329.4,180.2 327.7,180.4 326,180.6 324.3,180.8 322.6,180.9 320.9,181 319.2,181 317.5,181.4 315.8,181.3 314,181.2 312.3,181.1 310.6,180.9 308.9,180.6 307.2,180.4 305.5,180 303.8,179.7 302.1,179.3 300.4,178.8 298.7,178.3 296.9,177.8 295.2,177.2 293.5,176.5 291.8,175.8 290.1,175.1 288.4,174.3 286.7,173.4 285,172.5 283.3,171.5 281.6,170.5 279.8,169.4 278.1,168.2 276.4,167 274.7,165.7 273,164.3 271.3,162.8 269.6,161.2 267.9,159.6 266.2,157.8 264.5,155.9 262.8,153.9 261,151.8 259.3,149.5 257.6,147.1 255.9,144.6 254.2,142 252.5,139.3 250.8,136.7 249.1,134.6 247.4,133.5 245.7,133.5 243.9,133.5 242.2,133.5 240.5,133.5 238.8,133.5 237.1,133.5 235.4,133.5 233.7,133.5 232,133.5 230.3,133.5 228.6,133.5 226.8,133.5 225.1,133.5 223.4,133.5 221.7,133.5 220,133.5 218.3,133.5 216.6,133.5 214.9,133.5 213.2,133.5 211.4,133.5 209.7,133.5 208,133.5 206.3,133.5 204.6,133.5 202.9,133.5 201.2,133.5 199.5,133.5 197.8,133.5 196.1,133.5 194.3,133.5 192.6,133.5 190.9,134.6 189.2,136.7 187.5,139.3 185.8,142 184.1,144.6 182.4,147.1 180.7,149.5 179,151.8 177.2,153.9 175.5,155.9 173.8,157.8 172.1,159.6 170.4,161.2 168.7,162.8 167,164.3 165.3,165.7 163.6,167 161.9,168.2 160.2,169.4 158.4,170.5 156.7,171.5 155,172.5 153.3,173.4 151.6,174.3 149.9,175.1 148.2,175.8 146.5,176.5 144.8,177.2 143.1,177.8 141.3,178.3 139.6,178.8 137.9,179.3 136.2,179.7 134.5,180 132.8,180.4 131.1,180.6 129.4,180.9 127.7,181.1 125.9,181.2 124.2,181.3 122.5,181.4 120.8,181 119.1,181 117.4,180.9 115.7,180.8 114,180.6 112.3,180.4 110.6,180.2 108.8,179.9 107.1,179.6 105.4,179.2 103.7,178.8 102,178.3 100.3,177.8 98.6,177.2 96.9,176.6 95.2,175.9 93.5,175.2 91.7,174.4 90,173.6 88.3,172.7 86.6,171.8 84.9,170.8 83.2,169.7 81.5,168.5 79.8,167.3 78.1,166 76.4,164.6 74.6,163.2 72.9,161.6 71.2,159.9 69.5,158.1 67.8,156.2 66.1,154.2 64.4,152 62.7,149.6 61,147 59.3,144.1 57.5,140.9 55.8,137.3 54.1,133.2 52.4,128.1 50.7,121.5 49,105" fill="none" stroke="#7ccf9a" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="51.7,105 53.4,89 55.1,82.5 56.7,77.6 58.4,73.5 60.1,70.1 61.8,67 63.5,64.2 65.2,61.7 66.8,59.4 68.5,57.2 70.2,55.2 71.9,53.4 73.6,51.7 75.3,50 76.9,48.5 78.6,47.1 80.3,45.8 82,44.5 83.7,43.4 85.4,42.3 87,41.2 88.7,40.3 90.4,39.4 92.1,38.5 93.8,37.7 95.5,37 97.1,36.3 98.8,35.7 100.5,35.1 102.2,34.6 103.9,34.1 105.6,33.7 107.2,33.3 108.9,33 110.6,32.7 112.3,32.4 114,32.2 115.7,32.1 117.3,32 119,31.9 120.7,31.9 122.4,31.9 124.1,31.9 125.8,32 127.4,32.2 129.1,32.4 130.8,32.6 132.5,32.9 134.2,33.2 135.8,33.5 137.5,34 139.2,34.4 140.9,34.9 142.6,35.5 144.3,36.1 145.9,36.8 147.6,37.5 149.3,38.2 151,39.1 152.7,39.9 154.4,40.9 156,41.9 157.7,43 159.4,44.1 161.1,45.3 162.8,46.6 164.5,48 166.1,49.5 167.8,51.1 169.5,52.8 171.2,54.6 172.9,56.5 174.6,58.6 176.2,60.8 177.9,63.3 179.6,66 181.3,68.9 183,72.3 184.7,76.1 186.3,80.6 188,86.4 189.7,95.2 191.4,99.3 193.1,99.3 194.8,99.3 196.4,99.3 198.1,99.3 199.8,99.3 201.5,99.3 203.2,99.3 204.9,99.3 206.5,99.3 208.2,99.3 209.9,99.3 211.6,99.3 213.3,99.3 215,99.3 216.6,99.3 218.3,99.3 220,99.3 221.7,99.3 223.4,99.3 225,99.3 226.7,99.3 228.4,99.3 230.1,99.3 231.8,99.3 233.5,99.3 235.1,99.3 236.8,99.3 238.5,99.3 240.2,99.3 241.9,99.3 243.6,99.3 245.2,99.3 246.9,99.3 248.6,99.3 250.3,95.2 252,86.4 253.7,80.6 255.3,76.1 257,72.3 258.7,68.9 260.4,66 262.1,63.3 263.8,60.8 265.4,58.6 267.1,56.5 268.8,54.6 270.5,52.8 272.2,51.1 273.9,49.5 275.5,48 277.2,46.6 278.9,45.3 280.6,44.1 282.3,43 284,41.9 285.6,40.9 287.3,39.9 289,39.1 290.7,38.2 292.4,37.5 294.1,36.8 295.7,36.1 297.4,35.5 299.1,34.9 300.8,34.4 302.5,34 304.1,33.5 305.8,33.2 307.5,32.9 309.2,32.6 310.9,32.4 312.6,32.2 314.2,32 315.9,31.9 317.6,31.9 319.3,31.9 321,31.9 322.7,32 324.3,32.1 326,32.2 327.7,32.4 329.4,32.7 331.1,33 332.8,33.3 334.4,33.7 336.1,34.1 337.8,34.6 339.5,35.1 341.2,35.7 342.9,36.3 344.5,37 346.2,37.7 347.9,38.5 349.6,39.4 351.3,40.3 353,41.2 354.6,42.3 356.3,43.4 358,44.5 359.7,45.8 361.4,47.1 363.1,48.5 364.7,50 366.4,51.7 368.1,53.4 369.8,55.2 371.5,57.2 373.2,59.4 374.8,61.7 376.5,64.2 378.2,67 379.9,70.1 381.6,73.5 383.3,77.6 384.9,82.5 386.6,89 388.3,105 388.3,105 386.6,121 384.9,127.5 383.3,132.4 381.6,136.5 379.9,139.9 378.2,143 376.5,145.8 374.8,148.3 373.2,150.6 371.5,152.8 369.8,154.8 368.1,156.6 366.4,158.3 364.7,160 363.1,161.5 361.4,162.9 359.7,164.2 358,165.5 356.3,166.6 354.6,167.7 353,168.8 351.3,169.7 349.6,170.6 347.9,171.5 346.2,172.3 344.5,173 342.9,173.7 341.2,174.3 339.5,174.9 337.8,175.4 336.1,175.9 334.4,176.3 332.8,176.7 331.1,177 329.4,177.3 327.7,177.6 326,177.8 324.3,177.9 322.7,178 321,178.1 319.3,178.1 317.6,178.1 315.9,178.1 314.2,178 312.6,177.8 310.9,177.6 309.2,177.4 307.5,177.1 305.8,176.8 304.1,176.5 302.5,176 300.8,175.6 299.1,175.1 297.4,174.5 295.7,173.9 294.1,173.2 292.4,172.5 290.7,171.8 289,170.9 287.3,170.1 285.6,169.1 284,168.1 282.3,167 280.6,165.9 278.9,164.7 277.2,163.4 275.5,162 273.9,160.5 272.2,158.9 270.5,157.2 268.8,155.4 267.1,153.5 265.4,151.4 263.8,149.2 262.1,146.7 260.4,144 258.7,141.1 257,137.7 255.3,133.9 253.7,129.4 252,123.6 250.3,114.8 248.6,110.7 246.9,110.7 245.2,110.7 243.6,110.7 241.9,110.7 240.2,110.7 238.5,110.7 236.8,110.7 235.1,110.7 233.5,110.7 231.8,110.7 230.1,110.7 228.4,110.7 226.7,110.7 225,110.7 223.4,110.7 221.7,110.7 220,110.7 218.3,110.7 216.6,110.7 215,110.7 213.3,110.7 211.6,110.7 209.9,110.7 208.2,110.7 206.5,110.7 204.9,110.7 203.2,110.7 201.5,110.7 199.8,110.7 198.1,110.7 196.4,110.7 194.8,110.7 193.1,110.7 191.4,110.7 189.7,114.8 188,123.6 186.3,129.4 184.7,133.9 183,137.7 181.3,141.1 179.6,144 177.9,146.7 176.2,149.2 174.6,151.4 172.9,153.5 171.2,155.4 169.5,157.2 167.8,158.9 166.1,160.5 164.5,162 162.8,163.4 161.1,164.7 159.4,165.9 157.7,167 156,168.1 154.4,169.1 152.7,170.1 151,170.9 149.3,171.8 147.6,172.5 145.9,173.2 144.3,173.9 142.6,174.5 140.9,175.1 139.2,175.6 137.5,176 135.8,176.5 134.2,176.8 132.5,177.1 130.8,177.4 129.1,177.6 127.4,177.8 125.8,178 124.1,178.1 122.4,178.1 120.7,178.1 119,178.1 117.3,178 115.7,177.9 114,177.8 112.3,177.6 110.6,177.3 108.9,177 107.2,176.7 105.6,176.3 103.9,175.9 102.2,175.4 100.5,174.9 98.8,174.3 97.1,173.7 95.5,173 93.8,172.3 92.1,171.5 90.4,170.6 88.7,169.7 87,168.8 85.4,167.7 83.7,166.6 82,165.5 80.3,164.2 78.6,162.9 76.9,161.5 75.3,160 73.6,158.3 71.9,156.6 70.2,154.8 68.5,152.8 66.8,150.6 65.2,148.3 63.5,145.8 61.8,143 60.1,139.9 58.4,136.5 56.7,132.4 55.1,127.5 53.4,121 51.7,105" fill="none" stroke="#eea66f" stroke-width="2" stroke-linejoin="round"/>
  <text x="220" y="205" text-anchor="middle" font-size="12" fill="currentColor">later times: the neck pinches</text>
</svg>
</div>

**Perelman.** In three preprints posted on the arXiv in 2002 and 2003, Grigori Perelman showed how to control every singularity
that can form in three dimensions, cut the manifold just before it (Ricci flow *with surgery*, an idea of Hamilton's),
cap off the pieces, and continue. Following the flow to the end decomposes the manifold exactly as Thurston predicted. This
proved the geometrization conjecture and with it the Poincaré conjecture. Several teams spent the next years writing out
the details (Kleiner and Lott; Morgan and Tian; Cao and Zhu), and by 2006 the experts accepted the proof. Perelman was awarded
the Fields Medal in 2006 and the Clay Millennium Prize in 2010, and declined both.

In other dimensions the story is different. The analogue of the Poincaré conjecture (a closed manifold that is homotopy
equivalent to a sphere is homeomorphic to it) was proved for dimensions 5 and up by Stephen Smale in 1961 and for dimension 4 by
Michael Freedman in 1982. The *smooth* version in dimension 4 (is every smooth homotopy 4-sphere diffeomorphic to $S^4$?) is
still open. In dimension 2, Ricci flow on any closed surface converges, after rescaling, to a metric of constant curvature
(Hamilton 1988 and Chow 1991), which gives a new proof of uniformization.

## 21.3 Algebraic geometry: a glimpse

*Level: expert (survey).* Descartes turned curves into equations ([Chapter 8](08-Coordinate-Geometry.md)). Algebraic geometry turns
that around: it studies the shapes defined by polynomial equations, using algebra to see geometry and geometry to see algebra.

An **affine variety** is the set of common zeros of some polynomials, for example a circle $x^2 + y^2 - 1 = 0$, a twisted
cubic in space, or the set of $2 \times 2$ matrices of determinant 0. A **projective variety** is the same in projective space,
with homogeneous polynomials ([Chapter 18](18-Projective-Geometry.md)). Working over the complex numbers and in projective
space makes the theory clean, for the same reason that complex numbers make every polynomial split
([Algebra, Chapter 12](../algebra/12-The-Fundamental-Theorem-of-Algebra.md)): solutions do not disappear off to infinity or into the
imaginary.

**Bézout's theorem.** How many points do two curves have in common? Two lines: one point. A line and a conic: up to two.

**Theorem 21.1 (Bézout).** Two curves in the complex projective plane, of degrees $m$ and $n$, with no common component, meet in
exactly $mn$ points, counted with multiplicity.

(Proved with resultants, by eliminating one variable; Fulton's *Algebraic Curves* has a complete proof.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="The circle x squared plus y squared equals 4 and the parabola y equals x squared minus 2.5 meet in four points, as Bezout's theorem predicts for two curves of degree 2">
  <line x1="13" y1="120" x2="427" y2="120" stroke="currentColor" stroke-width="1"/>
  <line x1="220" y1="232.5" x2="220" y2="7.5" stroke="currentColor" stroke-width="1"/>
  <circle cx="220" cy="120" r="90" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <polyline points="121,14.7 121.9,18.6 122.8,22.5 123.7,26.4 124.6,30.3 125.5,34 126.4,37.8 127.3,41.5 128.2,45.2 129.1,48.9 130,52.5 130.9,56.1 131.8,59.6 132.7,63.1 133.6,66.6 134.5,70.1 135.4,73.5 136.3,76.8 137.2,80.1 138.1,83.4 139,86.7 139.9,89.9 140.8,93.1 141.7,96.3 142.6,99.4 143.5,102.5 144.4,105.5 145.3,108.5 146.2,111.5 147.1,114.4 148,117.3 148.9,120.2 149.8,123 150.7,125.8 151.6,128.5 152.5,131.2 153.4,133.9 154.3,136.6 155.2,139.2 156.1,141.8 157,144.3 157.9,146.8 158.8,149.3 159.7,151.7 160.6,154.1 161.5,156.4 162.4,158.8 163.3,161.1 164.2,163.3 165.1,165.5 166,167.7 166.9,169.8 167.8,171.9 168.7,174 169.6,176.1 170.5,178 171.4,180 172.3,181.9 173.2,183.8 174.1,185.7 175,187.5 175.9,189.3 176.8,191 177.7,192.7 178.6,194.4 179.5,196.1 180.4,197.7 181.3,199.2 182.2,200.7 183.1,202.2 184,203.7 184.9,205.1 185.8,206.5 186.7,207.9 187.6,209.2 188.5,210.5 189.4,211.7 190.3,212.9 191.2,214.1 192.1,215.2 193,216.3 193.9,217.4 194.8,218.4 195.7,219.4 196.6,220.3 197.5,221.2 198.4,222.1 199.3,223 200.2,223.8 201.1,224.6 202,225.3 202.9,226 203.8,226.7 204.7,227.3 205.6,227.9 206.5,228.4 207.4,229 208.3,229.5 209.2,229.9 210.1,230.3 211,230.7 211.9,231 212.8,231.3 213.7,231.6 214.6,231.9 215.5,232.1 216.4,232.2 217.3,232.3 218.2,232.4 219.1,232.5 220,232.5 220.9,232.5 221.8,232.4 222.7,232.3 223.6,232.2 224.5,232.1 225.4,231.9 226.3,231.6 227.2,231.3 228.1,231 229,230.7 229.9,230.3 230.8,229.9 231.7,229.5 232.6,229 233.5,228.4 234.4,227.9 235.3,227.3 236.2,226.7 237.1,226 238,225.3 238.9,224.6 239.8,223.8 240.7,223 241.6,222.1 242.5,221.2 243.4,220.3 244.3,219.4 245.2,218.4 246.1,217.4 247,216.3 247.9,215.2 248.8,214.1 249.7,212.9 250.6,211.7 251.5,210.5 252.4,209.2 253.3,207.9 254.2,206.5 255.1,205.1 256,203.7 256.9,202.2 257.8,200.7 258.7,199.2 259.6,197.7 260.5,196.1 261.4,194.4 262.3,192.7 263.2,191 264.1,189.3 265,187.5 265.9,185.7 266.8,183.8 267.7,181.9 268.6,180 269.5,178 270.4,176.1 271.3,174 272.2,171.9 273.1,169.8 274,167.7 274.9,165.5 275.8,163.3 276.7,161.1 277.6,158.8 278.5,156.4 279.4,154.1 280.3,151.7 281.2,149.3 282.1,146.8 283,144.3 283.9,141.8 284.8,139.2 285.7,136.6 286.6,133.9 287.5,131.2 288.4,128.5 289.3,125.8 290.2,123 291.1,120.2 292,117.3 292.9,114.4 293.8,111.5 294.7,108.5 295.6,105.5 296.5,102.5 297.4,99.4 298.3,96.3 299.2,93.1 300.1,89.9 301,86.7 301.9,83.4 302.8,80.1 303.7,76.8 304.6,73.5 305.5,70.1 306.4,66.6 307.3,63.1 308.2,59.6 309.1,56.1 310,52.5 310.9,48.9 311.8,45.2 312.7,41.5 313.6,37.8 314.5,34 315.4,30.3 316.3,26.4 317.2,22.5 318.1,18.6 319,14.7" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="302" cy="83" r="4.5" fill="currentColor"/>
  <circle cx="138" cy="83" r="4.5" fill="currentColor"/>
  <circle cx="257" cy="202" r="4.5" fill="currentColor"/>
  <circle cx="183" cy="202" r="4.5" fill="currentColor"/>
</svg>
</div>

*Worked example: a circle and a parabola.* $x^2 + y^2 = 4$ and $y = x^2 - 2.5$ have degrees 2 and 2, so Bézout predicts 4
points. Substituting, $x^2 + (x^2 - 2.5)^2 = 4$, i.e. $x^4 - 4x^2 + 2.25 = 0$, so $x^2 = 2 \pm \sqrt{1.75}$, which gives four real
points $x \approx \pm 1.823$ and $\pm 0.823$. *Check:* at $x = 0.823$, $y = 0.677 - 2.5 = -1.823$, and $0.677 + 3.323 = 4$.

*Worked example: concentric circles.* $x^2 + y^2 = 1$ and $x^2 + y^2 = 4$ have no common real points, yet Bézout promises 4.
Homogenise: $x^2 + y^2 = z^2$ and $x^2 + y^2 = 4z^2$. Subtracting, $3z^2 = 0$, so $z = 0$ (a double root), and then $x^2 + y^2 = 0$,
so $y = \pm i x$: the two points $[1 : i : 0]$ and $[1 : -i : 0]$, each with multiplicity 2. Every circle passes through these two
**circular points at infinity**, which is why two circles meet in at most 2 ordinary points: the other 2 of their 4 are always
these.

**Genus.** Over the complex numbers, a smooth projective curve is a compact Riemann surface ([Chapter 20](20-Manifolds-and-Riemannian-Geometry.md)),
and so it has a genus $g$, the number of holes. For a smooth plane curve of degree $d$,

$$
g = \frac{(d - 1)(d - 2)}{2} .
$$

Lines and conics have genus 0 (they are spheres); smooth cubics have genus 1 (tori); smooth quartics genus 3. The
uniformization theorem then gives each curve a geometry: spherical for $g = 0$, flat for $g = 1$, hyperbolic for $g \ge 2$, and
remarkably this geometric trichotomy governs arithmetic. **Faltings's theorem** (1983, conjectured by Mordell in 1922) says a
curve of genus at least 2 defined over the rationals has only finitely many rational points.

**Elliptic curves.** A smooth cubic curve $y^2 = x^3 + ax + b$ (with a point at infinity added) has genus 1, and its points form a
group: to add $P$ and $Q$, draw the line through them, find the third intersection point (Bézout: a line meets a cubic in 3
points), and reflect it in the $x$-axis. For example on $y^2 = x^3 - 2$ the point $P = (3, 5)$ is rational. To double it, take the
tangent at $P$, of slope $\lambda = 3x^2/(2y) = 27/10$. Its third intersection has $x = \lambda^2 - 2 \cdot 3 = 129/100$, and the
reflection gives

$$
2P = \left( \frac{129}{100}, -\frac{383}{1000} \right) .
$$

*Check:* $(383/1000)^2 = 0.146689$ and $(1.29)^3 - 2 = 2.146689 - 2 = 0.146689$. This chord-and-tangent construction goes back
to Fermat and Newton; it is the heart of Wiles's proof of Fermat's Last Theorem and of elliptic-curve cryptography (see the
[cryptography book](https://cryptography.akadian.ca/book/)).

**Two classical gems.** Every smooth cubic surface in complex projective 3-space contains exactly 27 straight lines (Cayley and
Salmon, 1849). And the rigour of the subject was rebuilt twice in the twentieth century: by Zariski and Weil in the 1930s and
1940s, and by Grothendieck's theory of **schemes** in the 1960s, which lets the same geometric language describe equations over
the integers and finite fields. [Algebra, Chapter 22](../algebra/22-Where-Algebra-Goes.md) describes the algebra side (Hilbert's
Nullstellensatz, Gröbner bases).

## 21.4 Discrete and computational geometry

*Level: intermediate to expert.* Much of today's geometry is about finite sets of points, and about algorithms: how fast can a
computer answer a geometric question? Computer graphics, robot motion planning, geographic information systems, mesh
generation for engineering simulations and the analysis of spacecraft images all depend on it.

**Convex hulls.** The **convex hull** of a finite set of points is the smallest convex polygon containing them, the shape a
rubber band takes around nails at the points.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="Twenty-eight points in the plane and their convex hull, the smallest convex polygon containing them all, like a rubber band stretched around nails. The corners of the hull are some of the points">
  <polygon points="40.2,67.7 96.7,32.7 289.6,37.5 392.9,101.5 399.2,209.2 72.6,175.7 50.8,113.5" fill="#9cc9ea" fill-opacity="0.25" stroke="#9cc9ea" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="202.9" cy="130.8" r="3.5" fill="currentColor"/>
  <circle cx="372.7" cy="113.8" r="3.5" fill="currentColor"/>
  <circle cx="222.8" cy="135.7" r="3.5" fill="currentColor"/>
  <circle cx="106.5" cy="122.1" r="3.5" fill="currentColor"/>
  <circle cx="266.8" cy="172.7" r="3.5" fill="currentColor"/>
  <circle cx="73.9" cy="84.6" r="3.5" fill="currentColor"/>
  <circle cx="72.6" cy="175.7" r="3.5" fill="#eea66f"/>
  <circle cx="289.6" cy="37.5" r="3.5" fill="#eea66f"/>
  <circle cx="393.6" cy="203.7" r="3.5" fill="currentColor"/>
  <circle cx="275.4" cy="140.8" r="3.5" fill="currentColor"/>
  <circle cx="96.7" cy="32.7" r="3.5" fill="#eea66f"/>
  <circle cx="230.2" cy="40.7" r="3.5" fill="currentColor"/>
  <circle cx="108.5" cy="73.5" r="3.5" fill="currentColor"/>
  <circle cx="50.8" cy="113.5" r="3.5" fill="#eea66f"/>
  <circle cx="198.6" cy="181.6" r="3.5" fill="currentColor"/>
  <circle cx="226.9" cy="145.3" r="3.5" fill="currentColor"/>
  <circle cx="219.9" cy="149.2" r="3.5" fill="currentColor"/>
  <circle cx="204.6" cy="80.1" r="3.5" fill="currentColor"/>
  <circle cx="399.2" cy="209.2" r="3.5" fill="#eea66f"/>
  <circle cx="342.5" cy="157.4" r="3.5" fill="currentColor"/>
  <circle cx="153.5" cy="71.3" r="3.5" fill="currentColor"/>
  <circle cx="144.1" cy="42.6" r="3.5" fill="currentColor"/>
  <circle cx="315.9" cy="102.1" r="3.5" fill="currentColor"/>
  <circle cx="344.8" cy="99.6" r="3.5" fill="currentColor"/>
  <circle cx="384.9" cy="182.5" r="3.5" fill="currentColor"/>
  <circle cx="40.2" cy="67.7" r="3.5" fill="#eea66f"/>
  <circle cx="367.7" cy="114.6" r="3.5" fill="currentColor"/>
  <circle cx="392.9" cy="101.5" r="3.5" fill="#eea66f"/>
</svg>
</div>

How fast can it be found? The **monotone chain** algorithm (a variant of Graham's scan of 1972) sorts the points by $x$, then
sweeps left to right building the lower boundary, keeping only left turns, and right to left for the upper boundary. A turn is
detected by the sign of a cross product: for points $o, a, b$, the quantity
$(a_x - o_x)(b_y - o_y) - (a_y - o_y)(b_x - o_x)$ is positive for a left turn.

!!! tip "Try it in Python"
    ```python
    def hull(points):
        P = sorted(points)
        cross = lambda o, a, b: (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0])
        lower, upper = [], []
        for p in P:
            while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
                lower.pop()
            lower.append(p)
        for p in reversed(P):
            while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
                upper.pop()
            upper.append(p)
        return lower[:-1] + upper[:-1]

    print(hull([(0, 0), (2, 0), (1, 1), (2, 2), (0, 2), (1, 3)]))
    # [(0, 0), (2, 0), (2, 2), (1, 3), (0, 2)]
    ```

Each point is pushed and popped at most once per sweep, so after sorting the work is linear: the total time is
$O(n \log n)$. That is optimal in the usual model of computation: if you could find hulls faster you could sort faster,
because the hull of the points $(x_i, x_i^2)$ on a parabola lists them in sorted order, and sorting $n$ numbers by comparisons
needs about $n \log_2 n$ steps.

**Voronoi diagrams and Delaunay triangulations.** Given $n$ sites in the plane, the **Voronoi cell** of a site is the set of points
closer to it than to any other site. The cells are convex polygons (intersections of half-planes bounded by perpendicular
bisectors) and they tile the plane: the **Voronoi diagram**. Joining two sites whenever their cells share an edge gives the
**Delaunay triangulation** (when no four sites lie on a circle).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="A Voronoi diagram: twelve sites, each with the region of points nearer to it than to any other site. Dashed lines join sites whose regions share an edge; they form the Delaunay triangulation">
  <polygon points="36.9,10 160.8,10 147.3,93.2 117.5,101.6" fill="#eea66f" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="160.8,10 233.4,10 190.5,109 147.3,93.2" fill="#9cc9ea" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="10,10 36.9,10 117.5,101.6 96.9,146.1 10,194.9" fill="#7ccf9a" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="430,131.5 430,230 344.4,230 329.7,129 359.8,113.1" fill="#eea66f" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="266.6,10 354,10 359.8,113.1 329.7,129 310.1,127 277.8,104.1" fill="#9cc9ea" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="233.4,10 266.6,10 277.8,104.1 206.2,129.2 190.5,109" fill="#7ccf9a" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="151.2,230 10,230 10,194.9 96.9,146.1 153.1,181.8" fill="#eea66f" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="153.1,181.8 96.9,146.1 117.5,101.6 147.3,93.2 190.5,109 206.2,129.2 204.7,149.1" fill="#9cc9ea" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="344.4,230 250.9,230 248.4,212 310.1,127 329.7,129" fill="#7ccf9a" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="204.7,149.1 206.2,129.2 277.8,104.1 310.1,127 248.4,212" fill="#eea66f" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="354,10 430,10 430,131.5 359.8,113.1" fill="#9cc9ea" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="250.9,230 151.2,230 153.1,181.8 204.7,149.1 248.4,212" fill="#7ccf9a" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <line x1="370.5" y1="174.1" x2="315.5" y2="69.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="315.5" y1="69.9" x2="258.1" y2="150.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="370.5" y1="174.1" x2="399" y2="65.2" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="233.2" y1="79.8" x2="151.5" y2="142.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="125" y1="48.6" x2="63.9" y2="102.3" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="303.5" y1="183.8" x2="258.1" y2="150.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="258.1" y1="150.9" x2="187.8" y2="199.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="117.2" y1="196.9" x2="187.8" y2="199.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="315.5" y1="69.9" x2="233.2" y2="79.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="315.5" y1="69.9" x2="303.5" y2="183.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="233.2" y1="79.8" x2="258.1" y2="150.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="303.5" y1="183.8" x2="187.8" y2="199.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="125" y1="48.6" x2="182.6" y2="57.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="125" y1="48.6" x2="151.5" y2="142.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="63.9" y1="102.3" x2="151.5" y2="142.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="182.6" y1="57.9" x2="233.2" y2="79.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="151.5" y1="142.9" x2="258.1" y2="150.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="117.2" y1="196.9" x2="151.5" y2="142.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="315.5" y1="69.9" x2="399" y2="65.2" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="370.5" y1="174.1" x2="303.5" y2="183.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="182.6" y1="57.9" x2="151.5" y2="142.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="63.9" y1="102.3" x2="117.2" y2="196.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="151.5" y1="142.9" x2="187.8" y2="199.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="125" cy="48.6" r="4" fill="currentColor"/>
  <circle cx="182.6" cy="57.9" r="4" fill="currentColor"/>
  <circle cx="63.9" cy="102.3" r="4" fill="currentColor"/>
  <circle cx="370.5" cy="174.1" r="4" fill="currentColor"/>
  <circle cx="315.5" cy="69.9" r="4" fill="currentColor"/>
  <circle cx="233.2" cy="79.8" r="4" fill="currentColor"/>
  <circle cx="117.2" cy="196.9" r="4" fill="currentColor"/>
  <circle cx="151.5" cy="142.9" r="4" fill="currentColor"/>
  <circle cx="303.5" cy="183.8" r="4" fill="currentColor"/>
  <circle cx="258.1" cy="150.9" r="4" fill="currentColor"/>
  <circle cx="399" cy="65.2" r="4" fill="currentColor"/>
  <circle cx="187.8" cy="199.8" r="4" fill="currentColor"/>
</svg>
</div>

They answer "which is nearest?" questions: the nearest hospital, the nearest cell tower, the region of a map closest to each
weather station. Their main properties:

- **Empty circle property.** A triangle of sites is a Delaunay triangle exactly when its circumcircle contains no other site.
  (The centre of that circle is a Voronoi vertex, a point equidistant from three sites and farther from all others.)
- **Best angles.** Among all triangulations of the sites, the Delaunay triangulation maximises the smallest angle, avoiding
  thin triangles; this is why it is used to build meshes for engineering simulations.
- **Few edges.** By Euler's formula ([Chapter 11](11-Solid-Geometry.md)), a triangulation of $n$ points has at most $3n - 6$
  edges. *Check:* the figure has 12 sites and 23 Delaunay edges, and $23 \le 30$. So a Voronoi diagram has size proportional to $n$,
  and Fortune's sweep-line algorithm (1986) builds it in $O(n \log n)$ time.

The two structures are dual, like the points and lines of [Chapter 18](18-Projective-Geometry.md): Voronoi vertices
correspond to Delaunay triangles, Voronoi edges to Delaunay edges. There is also a beautiful lift: put each site $(x, y)$ on the
paraboloid $z = x^2 + y^2$; the lower convex hull of the lifted points, projected back down, is the Delaunay triangulation.

**Sphere packing.** How densely can equal balls fill space? In the plane, circles in the hexagonal arrangement touch six
neighbours each and cover a fraction $\pi/(2\sqrt3) \approx 0.9069$ of the plane, and no arrangement does better (Thue; a complete
proof by László Fejes Tóth in 1940).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 220" role="img" aria-label="Equal circles in the hexagonal packing. Each circle touches six others; the shaded one and its six neighbours are highlighted. This packing covers about 90.7 percent of the plane, the most possible">
  <circle cx="54" cy="61.6" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="102" cy="61.6" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="150" cy="61.6" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="198" cy="61.6" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="246" cy="61.6" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="294" cy="61.6" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="342" cy="61.6" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="61.6" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="30" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="78" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="126" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="174" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="222" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="318" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="366" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="414" cy="103.1" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="54" cy="144.7" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="102" cy="144.7" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="150" cy="144.7" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="198" cy="144.7" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="246" cy="144.7" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="294" cy="144.7" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="342" cy="144.7" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="144.7" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="30" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="78" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="126" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="174" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="222" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="318" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="366" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="414" cy="186.3" r="24" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="246" cy="144.7" r="24" fill="#eea66f" fill-opacity="0.6" stroke="#eea66f" stroke-width="2"/>
  <circle cx="294" cy="144.7" r="24" fill="#9cc9ea" fill-opacity="0.45" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="270" cy="186.3" r="24" fill="#9cc9ea" fill-opacity="0.45" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="222" cy="186.3" r="24" fill="#9cc9ea" fill-opacity="0.45" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="198" cy="144.7" r="24" fill="#9cc9ea" fill-opacity="0.45" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="222" cy="103.1" r="24" fill="#9cc9ea" fill-opacity="0.45" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="270" cy="103.1" r="24" fill="#9cc9ea" fill-opacity="0.45" stroke="#9cc9ea" stroke-width="2"/>
</svg>
</div>

*Check of the density:* each circle of radius $r$ sits in a hexagonal cell of area $2\sqrt3\, r^2$ (a regular hexagon with inradius $r$),
and $\pi r^2 / (2\sqrt3\, r^2) = \pi/(2\sqrt3)$.

In three dimensions, the familiar greengrocer's stacking of oranges (the face-centred cubic packing) fills
$\pi/\sqrt{18} \approx 0.7405$ of space. Kepler asserted in 1611 that nothing denser is possible. This **Kepler conjecture**
resisted proof for almost four centuries. Thomas Hales, partly with his student Samuel Ferguson, announced a proof in 1998 that
reduced the problem to a very large number of inequalities checked by computer; it was published in the *Annals of Mathematics*
in 2005, with referees saying they were "99 percent certain" of the computer part. To remove the doubt Hales led the
**Flyspeck** project, which produced a complete formal proof checked by computer proof assistants, finished in 2014 and
published in 2017.

Higher dimensions are stranger. In 2016 Maryna Viazovska proved that the $E_8$ lattice packing is the densest in dimension 8,
with density $\pi^4/384 \approx 0.2537$, using a remarkable "magic function" built from modular forms that certifies a linear
programming bound of Cohn and Elkies. Within a week, Viazovska with Henry Cohn, Abhinav Kumar, Stephen D. Miller and Danylo
Radchenko extended the method to the Leech lattice in dimension 24, density $\pi^{12}/12! \approx 0.00193$. Viazovska received
the Fields Medal in 2022. Dimensions 8 and 24 are special because these two lattices are extraordinarily symmetric; in
dimension 4, and in every dimension other than 1, 2, 3, 8 and 24, the densest packing is unknown.

A related question is the **kissing number**: how many unit balls can touch one central unit ball? In the plane, 6. In three
dimensions, 12 (a question argued over by Newton and David Gregory in 1694, settled by Schütte and van der Waerden in 1953).
In dimension 4 it is 24 (Musin, 2003), in dimension 8 it is 240 and in dimension 24 it is 196,560 (Odlyzko and Sloane, and
independently Levenshtein, 1979). Packings like these are also the mathematics of error-correcting codes: codewords are the
centres of balls that must not overlap if noise is to be corrected.

## 21.5 Open problems

*Level: all levels.* Geometry is full of questions that a child can understand and that the best mathematicians cannot yet
answer. Here are three, with what is known.

### The moving sofa problem

You are moving house and must carry a sofa (a rigid flat shape) around a right-angled corner in a corridor of width 1. What is
the largest area a sofa can have and still get round? Leo Moser posed the question in 1966.

- A unit half-disc (area $\pi/2 \approx 1.571$) works: slide it to the corner and rotate it about the corner.
- **Hammersley** (1968) did better: cut the half-disc in two, push the quarters apart by $4/\pi$ and fill between with a
  rectangle from which a half-disc of radius $2/\pi$ has been removed (so it can rotate around the inner corner). Its area is
  $\pi/2 + 2/\pi \approx 2.2074$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 280" role="img" aria-label="An L-shaped corridor of width 1 turning a right angle, with Hammersley's sofa: two quarter discs of radius 1 on either side of a rectangle 4 over pi long, with a half disc of radius 2 over pi cut out of the middle. Its area is pi over 2 plus 2 over pi, about 2.2074">
  <polygon points="40,250 408,250 408,18 328,18 328,170 40,170" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="141.1,170 136.9,170.1 132.7,170.4 128.6,171 124.4,171.7 120.4,172.7 116.3,173.9 112.4,175.3 108.5,176.9 104.8,178.7 101.1,180.7 97.5,182.9 94,185.3 90.7,187.8 87.5,190.5 84.5,193.4 81.6,196.5 78.9,199.7 76.3,203 74,206.4 71.8,210 69.8,213.7 68,217.5 66.4,221.3 65,225.3 63.8,229.3 62.8,233.4 62.1,237.5 61.5,241.6 61.2,245.8 61.1,250 141.1,250 141.1,250 141.1,247.3 141.3,244.7 141.7,242 142.2,239.4 142.8,236.8 143.6,234.3 144.5,231.7 145.5,229.3 146.6,226.9 147.9,224.5 149.3,222.3 150.8,220.1 152.4,217.9 154.2,215.9 156,214 157.9,212.2 159.9,210.4 162.1,208.8 164.3,207.3 166.5,205.9 168.9,204.6 171.3,203.5 173.7,202.5 176.3,201.6 178.8,200.8 181.4,200.2 184,199.7 186.7,199.3 189.3,199.1 192,199.1 194.7,199.1 197.3,199.3 200,199.7 202.6,200.2 205.2,200.8 207.7,201.6 210.3,202.5 212.7,203.5 215.1,204.6 217.5,205.9 219.7,207.3 221.9,208.8 224.1,210.4 226.1,212.2 228,214 229.8,215.9 231.6,217.9 233.2,220.1 234.7,222.3 236.1,224.5 237.4,226.9 238.5,229.3 239.5,231.7 240.4,234.3 241.2,236.8 241.8,239.4 242.3,242 242.7,244.7 242.9,247.3 242.9,250 322.9,250 322.9,250 322.8,245.8 322.5,241.6 321.9,237.5 321.2,233.4 320.2,229.3 319,225.3 317.6,221.3 316,217.5 314.2,213.7 312.2,210 310,206.4 307.7,203 305.1,199.7 302.4,196.5 299.5,193.4 296.5,190.5 293.3,187.8 290,185.3 286.5,182.9 282.9,180.7 279.2,178.7 275.5,176.9 271.6,175.3 267.7,173.9 263.6,172.7 259.6,171.7 255.4,171 251.3,170.4 247.1,170.1 242.9,170" fill="#eea66f" fill-opacity="0.5" stroke="#eea66f" stroke-width="2" stroke-linejoin="round"/>
  <text x="368" y="34" text-anchor="middle" font-size="16" fill="currentColor">↑</text>
</svg>
</div>

- **Gerver** (1992) found a sofa with a boundary made of 18 curve pieces and area about $2.2195$, and conjectured it is optimal.
- Upper bounds came much more slowly: Kallus and Romik (2018) proved by a computer-assisted argument that no sofa has area more
  than about $2.37$.

In late 2024 Jineon Baek posted a long paper claiming a proof that Gerver's sofa is optimal. Proofs of this kind take experts a
long time to check; at the time of writing it was being studied by the community, and anyone reading this should look up its
current status before quoting the problem as open or solved.

### The chromatic number of the plane (Hadwiger–Nelson problem)

Colour every point of the plane so that any two points at distance exactly 1 get different colours. What is the smallest number
of colours needed? The question goes back to Edward Nelson in 1950.

**At least 4: the Moser spindle.** Leo and William Moser (1961) found seven points with eleven pairs at distance 1.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 260" role="img" aria-label="The Moser spindle: seven points and eleven segments, all of length 1. It cannot be coloured with three colours so that the ends of every segment differ, which proves that the plane needs at least four colours">
  <line x1="220" y1="240" x2="192.6" y2="123.2" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="240" x2="307.4" y2="157.8" stroke="currentColor" stroke-width="2"/>
  <line x1="192.6" y1="123.2" x2="307.4" y2="157.8" stroke="currentColor" stroke-width="2"/>
  <line x1="192.6" y1="123.2" x2="280" y2="41" stroke="currentColor" stroke-width="2"/>
  <line x1="307.4" y1="157.8" x2="280" y2="41" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="240" x2="132.6" y2="157.8" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="240" x2="247.4" y2="123.2" stroke="currentColor" stroke-width="2"/>
  <line x1="132.6" y1="157.8" x2="247.4" y2="123.2" stroke="currentColor" stroke-width="2"/>
  <line x1="132.6" y1="157.8" x2="160" y2="41" stroke="currentColor" stroke-width="2"/>
  <line x1="247.4" y1="123.2" x2="160" y2="41" stroke="currentColor" stroke-width="2"/>
  <line x1="280" y1="41" x2="160" y2="41" stroke="currentColor" stroke-width="2"/>
  <circle cx="220" cy="240" r="7" fill="#eea66f"/>
  <circle cx="192.6" cy="123.2" r="7" fill="#9cc9ea"/>
  <circle cx="307.4" cy="157.8" r="7" fill="#7ccf9a"/>
  <circle cx="280" cy="41" r="7" fill="#eea66f"/>
  <circle cx="132.6" cy="157.8" r="7" fill="#9cc9ea"/>
  <circle cx="247.4" cy="123.2" r="7" fill="#7ccf9a"/>
  <circle cx="160" cy="41" r="7" fill="currentColor"/>
  <text x="148" y="31" text-anchor="middle" font-size="15" fill="currentColor">?</text>
</svg>
</div>

*Proof that it needs 4 colours.* The spindle is two rhombi, each made of two equilateral triangles of side 1, sharing the bottom
vertex $A$, turned so that their top vertices are at distance 1. Suppose three colours were enough. In each equilateral
triangle the three vertices need three different colours. In the first rhombus $A, B_1, C_1$ use all three colours, and the top
vertex $T_1$, which forms a triangle with $B_1, C_1$, must then have the colour of $A$. The same argument gives $T_2$ the colour of
$A$. But $T_1$ and $T_2$ are at distance 1. Contradiction. $\square$ (The figure was built and checked numerically: all eleven
segments have length 1 to within $10^{-9}$.)

**At most 7: hexagons.** Tile the plane by regular hexagons of side $a$ and colour them in seven colours in the repeating pattern
in which each hexagon's six neighbours all have different colours from it and each other. Same-coloured hexagons then have
centres $\sqrt{21}\,a$ apart. Two points in one hexagon are less than $2a$ apart, and two points in different hexagons of the same
colour are at least $\sqrt{21}\,a - 2a \approx 2.58a$ apart. With $a = 0.45$: within a hexagon distances are below $0.9 < 1$, and
between same-coloured hexagons they are at least $1.16 > 1$. So no two points at distance 1 share a colour (after a careful
choice of colour for boundary points). $\square$

For 57 years the answer was known only to be 4, 5, 6 or 7. In 2018 Aubrey de Grey, an amateur mathematician, found a unit-distance
graph with 1581 vertices that cannot be coloured with 4 colours, so **at least 5** colours are needed; a collaborative Polymath
project then found much smaller examples. The answer is now known to be 5, 6 or 7.

### The inscribed square problem

Otto Toeplitz asked in 1911: does every closed curve in the plane that does not cross itself (a **Jordan curve**) contain four
points that are the corners of a square?

It is known for many classes: convex curves, smooth curves, and curves that are piecewise analytic, among others. In 2020 Joshua
Greene and Andrew Lobb proved that every *smooth* Jordan curve contains the four corners of a rectangle of *every* aspect ratio,
using symplectic geometry. For general continuous curves, which can wiggle infinitely, the square problem is still open: the
proofs for smooth curves use a limit argument that can let the square shrink to a point.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 260" role="img" aria-label="A closed curve that is symmetric under a half turn, and a square with its four corners on the curve. For such curves the square can be found by turning a cross of two perpendicular diameters until both have the same length">
  <polygon points="344.6,130 343.7,126.8 342.5,123.6 341,120.5 339.4,117.5 337.6,114.5 335.6,111.7 333.5,109 331.3,106.3 329.1,103.8 326.9,101.4 324.7,99 322.5,96.7 320.3,94.5 318.3,92.3 316.3,90.1 314.4,88 312.6,85.9 310.8,83.7 309.1,81.6 307.5,79.5 306,77.3 304.4,75.2 302.9,73 301.3,70.9 299.7,68.8 298.1,66.8 296.4,64.8 294.6,62.9 292.7,61 290.6,59.4 288.5,57.8 286.2,56.5 283.8,55.3 281.3,54.3 278.7,53.5 276,52.9 273.2,52.6 270.3,52.5 267.4,52.6 264.5,53 261.5,53.5 258.6,54.2 255.7,55.1 252.9,56.1 250.2,57.1 247.5,58.3 245,59.5 242.5,60.6 240.2,61.8 238,62.8 235.9,63.8 233.9,64.6 232,65.3 230.2,65.8 228.4,66.1 226.7,66.2 225,66.1 223.4,65.7 221.7,65.2 220,64.6 218.3,63.7 216.5,62.7 214.6,61.6 212.7,60.4 210.7,59.2 208.6,57.9 206.4,56.7 204.2,55.5 201.8,54.4 199.5,53.4 197,52.5 194.6,51.8 192.1,51.2 189.6,50.9 187.2,50.8 184.7,50.8 182.3,51.1 180,51.5 177.7,52.2 175.5,53 173.4,54 171.3,55.1 169.3,56.3 167.4,57.6 165.5,59 163.7,60.4 161.8,61.9 160,63.4 158.2,64.8 156.3,66.3 154.4,67.7 152.4,69.1 150.3,70.4 148.1,71.7 145.8,73 143.3,74.3 140.8,75.6 138.1,76.8 135.4,78.1 132.5,79.5 129.5,80.9 126.5,82.4 123.4,83.9 120.4,85.6 117.3,87.5 114.3,89.4 111.4,91.6 108.7,93.8 106,96.2 103.6,98.8 101.5,101.5 99.5,104.4 97.9,107.4 96.6,110.5 95.6,113.6 94.9,116.8 94.5,120.1 94.5,123.4 94.8,126.7 95.4,130 96.3,133.2 97.5,136.4 99,139.5 100.6,142.5 102.4,145.5 104.4,148.3 106.5,151 108.7,153.7 110.9,156.2 113.1,158.6 115.3,161 117.5,163.3 119.7,165.5 121.7,167.7 123.7,169.9 125.6,172 127.4,174.1 129.2,176.3 130.9,178.4 132.5,180.5 134,182.7 135.6,184.8 137.1,187 138.7,189.1 140.3,191.2 141.9,193.2 143.6,195.2 145.4,197.1 147.3,199 149.4,200.6 151.5,202.2 153.8,203.5 156.2,204.7 158.7,205.7 161.3,206.5 164,207.1 166.8,207.4 169.7,207.5 172.6,207.4 175.5,207 178.5,206.5 181.4,205.8 184.3,204.9 187.1,203.9 189.8,202.9 192.5,201.7 195,200.5 197.5,199.4 199.8,198.2 202,197.2 204.1,196.2 206.1,195.4 208,194.7 209.8,194.2 211.6,193.9 213.3,193.8 215,193.9 216.6,194.3 218.3,194.8 220,195.4 221.7,196.3 223.5,197.3 225.4,198.4 227.3,199.6 229.3,200.8 231.4,202.1 233.6,203.3 235.8,204.5 238.2,205.6 240.5,206.6 243,207.5 245.4,208.2 247.9,208.8 250.4,209.1 252.8,209.2 255.3,209.2 257.7,208.9 260,208.5 262.3,207.8 264.5,207 266.6,206 268.7,204.9 270.7,203.7 272.6,202.4 274.5,201 276.3,199.6 278.2,198.1 280,196.6 281.8,195.2 283.7,193.7 285.6,192.3 287.6,190.9 289.7,189.6 291.9,188.3 294.2,187 296.7,185.7 299.2,184.4 301.9,183.2 304.6,181.9 307.5,180.5 310.5,179.1 313.5,177.6 316.6,176.1 319.6,174.4 322.7,172.5 325.7,170.6 328.6,168.4 331.3,166.2 334,163.8 336.4,161.2 338.5,158.5 340.5,155.6 342.1,152.6 343.4,149.5 344.4,146.4 345.1,143.2 345.5,139.9 345.5,136.6 345.2,133.3" fill="#9cc9ea" fill-opacity="0.2" stroke="#9cc9ea" stroke-width="2.5" stroke-linejoin="round"/>
  <polygon points="275.5,52.9 142.9,74.5 164.5,207.1 297.1,185.5" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="275.5" y1="52.9" x2="164.5" y2="207.1" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="142.9" y1="74.5" x2="297.1" y2="185.5" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="275.5" cy="52.9" r="4" fill="currentColor"/>
  <circle cx="142.9" cy="74.5" r="4" fill="currentColor"/>
  <circle cx="164.5" cy="207.1" r="4" fill="currentColor"/>
  <circle cx="297.1" cy="185.5" r="4" fill="currentColor"/>
</svg>
</div>

*A case you can prove.* Suppose the curve is star-shaped about a centre $O$ and symmetric under a half turn about $O$, written
in polar form as $r = r(\theta)$ with $r(\theta + \pi) = r(\theta)$. Let $g(\theta) = r(\theta) - r(\theta + \pi/2)$. Then
$g(\theta + \pi/2) = r(\theta + \pi/2) - r(\theta + \pi) = -g(\theta)$, so $g$ takes opposite signs (or is zero) at $\theta$ and
$\theta + \pi/2$, and by the intermediate value theorem $g(\theta_0) = 0$ for some $\theta_0$. The four curve points in the directions
$\theta_0$, $\theta_0 + \pi/2$, $\theta_0 + \pi$, $\theta_0 + 3\pi/2$ are all at distance $r(\theta_0)$ from $O$ along two perpendicular
lines: a quadrilateral whose diagonals are equal, perpendicular and bisect each other. That is a square. $\square$

**More open problems, briefly.**

- **Kakeya:** a set in $\mathbb{R}^n$ containing a unit segment in every direction must have full (Hausdorff) dimension $n$. Proved in
  the plane in 1971 (Davies); for $n = 3$ a proof was announced by Hong Wang and Joshua Zahl in 2025; open in higher dimensions.
- **Erdős's unit distance problem:** how many pairs among $n$ points in the plane can be at distance exactly 1? The best upper bound,
  of order $n^{4/3}$, has not been improved since 1984, while the best constructions give only slightly more than linear growth.
- **Smooth 4-dimensional Poincaré conjecture** (21.2), and **sphere packing** in all dimensions except 1, 2, 3, 8 and 24 (21.4).

Geometry began with measuring fields and stars. Its questions are now shared with physics, computer science, number theory and
topology, and they are far from finished.

## A short history

Klein's Erlangen programme (1872) and Lie's theory of continuous groups (from the 1870s) made symmetry the organising principle of
geometry. Hilbert's *Foundations of Geometry* (1899) settled the axioms, and Poincaré's work (1880s to 1900s) created topology and
the geometric theory of Riemann surfaces. The twentieth century brought Cartan's geometries, the global Riemannian geometry of
Chapter 20, Grothendieck's algebraic geometry, and Thurston's revolution in 3-manifolds (late 1970s), completed by Perelman (2002 to
2003). Computational geometry became a field in the 1970s (Shamos's thesis of 1978 named it), and the twenty-first century has seen
computer-verified proofs (Flyspeck, 2014) alongside new ideas such as Viazovska's magic functions (2016). Problems as easy to state
as the moving sofa and the coloured plane remind us that elementary geometry is not finished either.

## Check yourself

??? question "1. Which of these are preserved by every affine map: length, angle, midpoint, parallelism, ratio of areas, being a circle?"

    Preserved: midpoints (ratios along a line), parallelism (parallel lines are sent to parallel lines since $Ax + b$ sends the
    common direction $d$ to $Ad$), and ratios of areas (all areas are multiplied by $|\det A|$). Not preserved: length and angle
    (a stretch changes both), and being a circle (a circle can become an ellipse).

??? question "2. In the Beltrami–Klein model (the unit disc, distance $\frac12|\ln(A, B; P, Q)|$), find the distance from the centre to $(0.6, 0)$ and to $(0.8, 0)$. Is the distance from $(0.6, 0)$ to $(0.8, 0)$ the difference?"

    From the centre: $\operatorname{artanh} 0.6 = \tfrac12 \ln 4 \approx 0.693$ and $\operatorname{artanh} 0.8 = \tfrac12 \ln 9 \approx 1.099$. All three points lie on
    one line (a diameter), and along a line the distance is additive, so the distance from $(0.6, 0)$ to $(0.8, 0)$ is
    $\tfrac12 \ln 9 - \tfrac12 \ln 4 = \tfrac12 \ln(9/4) \approx 0.405$. *Check with the cross-ratio:* $A = -1$, $B = 1$, $P = 0.6$, $Q = 0.8$:
    $(A, B; P, Q) = \dfrac{(1.6)(-0.2)}{(-0.4)(1.8)} = \dfrac{-0.32}{-0.72} = \dfrac49$, and $\tfrac12 |\ln(4/9)| \approx 0.405$.

??? question "3. Under the Ricci flow, when does a round 2-sphere of radius 3 shrink to a point? A round 3-sphere of radius 3?"

    $r^2 = r_0^2 - 2(n - 1)t$. For $n = 2$: $9 - 2t = 0$ at $t = 4.5$. For $n = 3$: $9 - 4t = 0$ at $t = 2.25$.

??? question "4. Using Bézout, how many points do the parabola $y = x^2$ and the line $y = 2x - 1$ have in common? Find them with multiplicity."

    Degrees 2 and 1: 2 points with multiplicity. $x^2 = 2x - 1$ gives $(x - 1)^2 = 0$: the point $(1, 1)$ counted twice. The line is the
    tangent to the parabola there.

??? question "5. Find the genus of a smooth plane curve of degree 4, and of degree 5. Which of them could have infinitely many rational points?"

    $(d - 1)(d - 2)/2$: degree 4 gives $3 \cdot 2/2 = 3$, degree 5 gives $4 \cdot 3/2 = 6$. Both have genus at least 2, so by Faltings's
    theorem neither has infinitely many rational points.

??? question "6. On the elliptic curve $y^2 = x^3 - 2$, check that $P = (3, 5)$ lies on the curve and that $2P = (129/100, -383/1000)$."

    $5^2 = 25 = 27 - 2$. Tangent slope $\lambda = 3x^2/(2y) = 27/10$. Then $x_3 = \lambda^2 - 2x = 729/100 - 600/100 = 129/100$, and
    $y_3 = \lambda(x - x_3) - y = \tfrac{27}{10} \cdot \tfrac{171}{100} - 5 = \tfrac{4617}{1000} - \tfrac{5000}{1000} = -\tfrac{383}{1000}$. *Check:*
    $(383/1000)^2 = 146689/10^6$ and $(129/100)^3 - 2 = 2146689/10^6 - 2 = 146689/10^6$.

??? question "7. Use Euler's formula to show that a triangulation of $n$ points in the plane, whose outer boundary (the convex hull) has $h$ points, has exactly $3n - 3 - h$ edges and $2n - 2 - h$ triangles."

    Count faces including the outer one: $V - E + F = 2$ with $V = n$. Each inner face is a triangle and the outer face has $h$ sides,
    and each edge borders two faces: $3(F - 1) + h = 2E$. So $F = (2E - h)/3 + 1$, and $n - E + (2E - h)/3 + 1 = 2$, giving
    $E = 3n - 3 - h$. Triangles: $F - 1 = (2E - h)/3 = (6n - 6 - 3h)/3 = 2n - 2 - h$. With $h \ge 3$, $E \le 3n - 6$.

??? question "8. Compute the density of the square packing of circles (each circle touching four others) and compare with the hexagonal packing."

    Each circle of radius $r$ sits in a square of side $2r$: density $\pi r^2/(4r^2) = \pi/4 \approx 0.785$. The hexagonal packing gives
    $\pi/(2\sqrt3) \approx 0.907$, about 15 percent denser.

??? question "9. Show that the points of the Moser spindle really can be placed with all eleven distances equal to 1: find the angle between the two rhombi."

    Each rhombus (two equilateral triangles of side 1) has its far vertex at distance $2 \cdot \tfrac{\sqrt3}{2} = \sqrt3$ from $A$. The two far
    vertices must be 1 apart, both at distance $\sqrt3$ from $A$: an isosceles triangle with sides $\sqrt3, \sqrt3, 1$, so the angle
    $\theta$ at $A$ has $\sin(\theta/2) = \tfrac{1/2}{\sqrt3}$, $\theta = 2\arcsin\bigl(1/(2\sqrt3)\bigr) \approx 33.56°$.

??? question "10. In the 7-colouring of the plane by hexagons of side $a$, find the range of $a$ that works."

    Points in one hexagon must be less than 1 apart: the diameter $2a < 1$, so $a < 0.5$. Same-coloured hexagons must be more than 1 apart:
    $\sqrt{21}\,a - 2a > 1$, so $a > 1/(\sqrt{21} - 2) \approx 0.387$. Any $a$ with $0.387 < a < 0.5$ works.

??? question "11. Find a square inscribed in the ellipse $x^2/4 + y^2 = 1$."

    The ellipse is symmetric under a half turn, and also under reflections in both axes. Try the corners $(\pm t, \pm t)$:
    $t^2/4 + t^2 = 1$ gives $t^2 = 4/5$, $t = 2/\sqrt5 \approx 0.894$. The square has side $2t = 4/\sqrt5 \approx 1.789$. (Here
    $r(\theta) = r(\theta + \pi/2)$ at $\theta = 45°$, as in the proof in 21.5.)

??? question "12. Verify that Hammersley's sofa has area $\pi/2 + 2/\pi$."

    Two quarter discs of radius 1: area $\pi/2$. A rectangle $4/\pi$ by 1: area $4/\pi$. Minus a half disc of radius $2/\pi$: area
    $\tfrac12 \pi (2/\pi)^2 = 2/\pi$. Total $\pi/2 + 4/\pi - 2/\pi = \pi/2 + 2/\pi \approx 1.5708 + 0.6366 = 2.2074$.

## What you learned

- Klein: a geometry is a space with a group, and its theorems are the invariants; Euclidean, similarity, affine and projective
  geometry form a hierarchy, and hyperbolic distance is a cross-ratio.
- Thurston's eight model geometries describe all closed 3-manifolds; Perelman proved this with Ricci flow with surgery, and
  with it the Poincaré conjecture.
- Algebraic geometry studies solution sets of polynomials; Bézout counts intersections, genus measures complexity, and
  elliptic curves carry a geometric group law.
- Convex hulls, Voronoi diagrams and Delaunay triangulations are computed in $O(n \log n)$ time and underlie much of computing.
- Densest sphere packings are known only in dimensions 1, 2, 3, 8 and 24; the proofs range from computer verification to modular forms.
- The moving sofa, the chromatic number of the plane and the inscribed square problem show how much elementary geometry is still open.

**Back to:** [the Geometry book's contents](index.md), to choose another chapter, or the [Books shelf](../index.md) for the other branches.

## Further reading

- F. Klein, "A comparative review of recent researches in geometry" (the Erlangen programme, 1872), English translation by
  M. W. Haskell, *Bulletin of the New York Mathematical Society* 2, 1893.
- F. Klein, *Elementary Mathematics from a Higher Standpoint*, volume 2: *Geometry*, 1908 (English 1939).
- W. P. Thurston, *Three-Dimensional Geometry and Topology*, volume 1, 1997.
- J. W. Morgan and G. Tian, *Ricci Flow and the Poincaré Conjecture*, 2007.
- J. Milnor, "Towards the Poincaré Conjecture and the Classification of 3-Manifolds", *Notices of the AMS* 50, 2003.
- W. Fulton, *Algebraic Curves*, 1969 (free online edition 2008).
- M. Reid, *Undergraduate Algebraic Geometry*, 1988.
- J. H. Silverman and J. Tate, *Rational Points on Elliptic Curves*, 1992 (2nd edition 2015).
- M. de Berg, O. Cheong, M. van Kreveld and M. Overmars, *Computational Geometry: Algorithms and Applications*, 3rd edition, 2008.
- J. H. Conway and N. J. A. Sloane, *Sphere Packings, Lattices and Groups*, 3rd edition, 1999.
- T. C. Hales, "A proof of the Kepler conjecture", *Annals of Mathematics* 162, 2005; T. Hales et al., "A formal proof of the
  Kepler conjecture", *Forum of Mathematics, Pi* 5, 2017.
- M. S. Viazovska, "The sphere packing problem in dimension 8", *Annals of Mathematics* 185, 2017; H. Cohn, A. Kumar,
  S. D. Miller, D. Radchenko and M. Viazovska, "The sphere packing problem in dimension 24", *Annals of Mathematics* 185, 2017.
- H. T. Croft, K. J. Falconer and R. K. Guy, *Unsolved Problems in Geometry*, 1991.
- A. D. N. J. de Grey, "The chromatic number of the plane is at least 5", *Geombinatorics* 28, 2018.
- J. E. Greene and A. Lobb, "The rectangular peg problem", *Annals of Mathematics* 194, 2021.
- On this site: [Algebra, Chapter 22](../algebra/22-Where-Algebra-Goes.md) (algebraic geometry, Lie groups, open problems in algebra),
  [Algebra, Chapter 16](../algebra/16-Group-Actions-and-Sylow.md) (groups acting on spaces),
  the [cryptography book](https://cryptography.akadian.ca/book/) (elliptic curves over finite fields), and the U of T guide
  [MAT240H1 Unit 4: Linear Transformations](../../uoft/MAT240H1/unit04.md) for the linear maps behind affine and projective geometry.
