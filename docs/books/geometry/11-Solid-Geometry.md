# 11. Solid geometry

*Flat geometry has infinitely many regular polygons: a regular triangle, square, pentagon, and so on for every number
of sides. Step up one dimension and ask for solids whose faces are all the same regular polygon, the same number
meeting at every corner, and only five exist. Why five? And why does every such solid, indeed every convex solid with
flat faces, satisfy the same strange equation, corners minus edges plus faces equals two? This chapter answers both,
then measures solids: the volumes of prisms, pyramids, cones and spheres, found by slicing as Cavalieri and
Archimedes did, and the surface of a sphere. It ends with Hilbert's third problem, where three dimensions turn out to
be genuinely harder than two: a cube and a regular tetrahedron of the same volume can never be cut into each other.*

!!! abstract "In this chapter"
    **You will learn:**

    - the words for polyhedra (faces, edges, vertices, convex, prisms, pyramids, nets)
    - why there are exactly five Platonic solids, with two proofs, and how to build each one
    - Euler's formula $V - E + F = 2$, with a proof, and Descartes' total angle defect of $720°$
    - Cavalieri's principle, and from it the volumes of the prism, pyramid, cone and sphere
    - Archimedes' discovery that a sphere's surface is $4\pi r^2$, and his "hat-box" theorem about zones
    - Archimedean solids and duality, and why a football has exactly 12 pentagons
    - Hilbert's third problem and the Dehn invariant: why a tetrahedron cannot be cut up into a cube

    **You need:** [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md) (angle sums of polygons), [Chapter 4](04-Area-and-Pythagoras.md)
    (area, and the Bolyai-Gerwien theorem in 4.7), [Chapter 6](06-Circles.md) (the area of a circle) and
    [Chapter 9](09-Vectors.md) (coordinates in space). Gentler versions:
    [Faces, edges and corners](../../topics/geometry/level-2/03-faces-edges-corners.md),
    [Nets of a cube](../../topics/geometry/level-2/04-nets-of-a-cube.md),
    [Volume of pyramids and cones](../../topics/measurement/level-6/01-pyramid-cone-volume.md) and
    [Volume of a sphere](../../topics/measurement/level-6/02-sphere-volume.md).

    **Levels:** 11.1 is beginner to intermediate; 11.2 to 11.5 are intermediate (with complete proofs); 11.6 is
    intermediate to advanced; 11.7 is advanced to expert.

## 11.1 Polyhedra

A **polyhedron** (Greek: "many seats", plural **polyhedra**) is a solid bounded by flat polygons. The polygons are its
**faces**; two faces meet along an **edge**; edges meet at corners called **vertices** (singular **vertex**). A cube has
6 faces, 12 edges and 8 vertices. We write $F$, $E$, $V$ for these counts.

A polyhedron is **convex** if the segment between any two of its points stays inside it: no dents, no tunnels. Every
polyhedron in this chapter is convex unless we say otherwise. Convexity gives a useful test: a polyhedron is convex
exactly when it lies entirely on one side of the plane of each face.

### Families

- A **prism** has two congruent parallel polygons (the bases) joined by parallelograms. If the side faces are
  rectangles it is a **right prism**. An $n$-gonal prism has $V = 2n$, $E = 3n$, $F = n + 2$. A cube is a square
  prism; a box is a rectangular prism.
- A **pyramid** has one polygon base and triangles joining its edges to one point, the **apex**. An $n$-gonal pyramid
  has $V = n + 1$, $E = 2n$, $F = n + 1$. A tetrahedron is a triangular pyramid.
- An **antiprism** has two parallel copies of an $n$-gon, one turned by half a step, joined by a zigzag band of $2n$
  triangles: $V = 2n$, $E = 4n$, $F = 2n + 2$.

The limiting cases with curved surfaces are the **cylinder** (a prism with a circular base) and the **cone** (a pyramid
with a circular base). They are not polyhedra, but the same volume formulas will hold.

### Nets

Cut a polyhedron along enough edges and you can unfold it flat into one piece, a **net**. Going the other way, a net
folds up into the solid. A cube has 11 different nets (the Topics lesson [Nets of a cube](../../topics/geometry/level-2/04-nets-of-a-cube.md)
lists them). Nets show something important: the faces around a vertex, laid flat, do *not* fill $360°$. There is
always a gap, and the gap is what lets the faces fold up into a corner. That gap will be the key to the next two
sections.

**Definition.** The **angle defect** at a vertex is $360°$ minus the sum of the face angles there. For a convex
polyhedron each defect is positive. At a corner of a cube three right angles meet, so the defect is
$360° - 270° = 90°$.

## 11.2 The five Platonic solids

A **regular polyhedron**, or **Platonic solid**, is a convex polyhedron whose faces are all congruent regular polygons,
with the same number of faces meeting at every vertex. Five are known since antiquity:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="The tetrahedron (4 triangles), the cube (6 squares) and the octahedron (8 triangles), drawn with hidden edges dashed.">
  <polygon points="78.8,137.2 115.3,44.7 70.8,97.9" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="70.8,97.9 115.3,44.7 15.2,60.2" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="15.2,60.2 78.8,137.2 70.8,97.9" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <text x="70" y="178" text-anchor="middle" font-size="14" fill="currentColor">tetrahedron</text>
  <line x1="161.1" y1="55.8" x2="223.1" y2="68.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="223.1" y1="68.1" x2="258.9" y2="46.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="223.1" y1="135.4" x2="223.1" y2="68.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <polygon points="196.9,34.6 161.1,55.8 161.1,123.1 196.9,101.9" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="258.9,46.9 196.9,34.6 196.9,101.9 258.9,114.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="196.9,101.9 161.1,123.1 223.1,135.4 258.9,114.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <text x="210" y="178" text-anchor="middle" font-size="14" fill="currentColor">cube</text>
  <line x1="407.5" y1="91" x2="326.8" y2="99.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="350" y1="25.1" x2="326.8" y2="99.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="326.8" y1="99.9" x2="350" y2="144.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="292.5" y1="79" x2="326.8" y2="99.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <polygon points="373.2,70.1 407.5,91 350,25.1" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="350,144.9 407.5,91 373.2,70.1" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="350,25.1 292.5,79 373.2,70.1" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="373.2,70.1 292.5,79 350,144.9" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <text x="350" y="178" text-anchor="middle" font-size="14" fill="currentColor">octahedron</text>
</svg>
</div>

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="The dodecahedron (12 regular pentagons) and the icosahedron (20 triangles), drawn with hidden edges dashed.">
  <line x1="65.4" y1="62" x2="99.7" y2="83.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="106.4" y1="130.2" x2="99.7" y2="83.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="76.3" y1="138.2" x2="106.4" y2="130.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="142.8" y1="58.5" x2="99.7" y2="83.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="142.8" y1="58.5" x2="135.1" y2="22.3" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="153.6" y1="134.7" x2="106.4" y2="130.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="153.6" y1="134.7" x2="152.7" y2="145.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="176.1" y1="90.4" x2="189" y2="73.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="153.6" y1="134.7" x2="176.1" y2="90.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="142.8" y1="58.5" x2="176.1" y2="90.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <polygon points="86.4,35.3 87.3,24.4 65.4,62 51,96.1 63.9,79.6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="140.3,86.9 133.6,39.8 86.4,35.3 63.9,79.6 97.2,111.5" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="135.1,22.3 87.3,24.4 86.4,35.3 133.6,39.8 163.7,31.8" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="63.9,79.6 51,96.1 76.3,138.2 104.9,147.7 97.2,111.5" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="104.9,147.7 152.7,145.6 174.6,108 140.3,86.9 97.2,111.5" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="133.6,39.8 140.3,86.9 174.6,108 189,73.9 163.7,31.8" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <text x="120" y="180" text-anchor="middle" font-size="14" fill="currentColor">dodecahedron</text>
  <line x1="276.6" y1="63.8" x2="282.6" y2="135.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="276.6" y1="63.8" x2="343.2" y2="94.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="343.2" y1="94.2" x2="282.6" y2="135.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="276.6" y1="63.8" x2="329.6" y2="27.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="343.2" y1="94.2" x2="329.6" y2="27.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="276.6" y1="63.8" x2="231.7" y2="93.7" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="282.6" y1="135.2" x2="231.7" y2="93.7" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="276.6" y1="63.8" x2="260.7" y2="27.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="368.3" y1="76.3" x2="343.2" y2="94.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="343.2" y1="94.2" x2="339.3" y2="142.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="270.4" y1="142.6" x2="282.6" y2="135.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="282.6" y1="135.2" x2="339.3" y2="142.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <polygon points="339.3,142.9 368.3,76.3 323.4,106.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="317.4,34.8 368.3,76.3 329.6,27.4" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="323.4,106.2 368.3,76.3 317.4,34.8" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="323.4,106.2 270.4,142.6 339.3,142.9" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="231.7,93.7 270.4,142.6 256.8,75.8" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="256.8,75.8 270.4,142.6 323.4,106.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="329.6,27.4 260.7,27.1 317.4,34.8" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="256.8,75.8 260.7,27.1 231.7,93.7" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="317.4,34.8 260.7,27.1 256.8,75.8" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="323.4,106.2 317.4,34.8 256.8,75.8" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <text x="300" y="180" text-anchor="middle" font-size="14" fill="currentColor">icosahedron</text>
</svg>
</div>

| solid | face | faces at a vertex | $V$ | $E$ | $F$ |
|---|---|---|---|---|---|
| tetrahedron | triangle | 3 | 4 | 6 | 4 |
| cube | square | 3 | 8 | 12 | 6 |
| octahedron | triangle | 4 | 6 | 12 | 8 |
| dodecahedron | pentagon | 3 | 20 | 30 | 12 |
| icosahedron | triangle | 5 | 12 | 30 | 20 |

The **Schläfli symbol** $\{p, q\}$ records the type: regular $p$-gons, $q$ at each vertex. The cube is $\{4, 3\}$, the
icosahedron $\{3, 5\}$.

### Why there are only five

**Theorem.** There are at most five Platonic solids: $\{3,3\}$, $\{4,3\}$, $\{3,4\}$, $\{5,3\}$, $\{3,5\}$.

*Proof.* At a vertex, at least 3 faces must meet (two polygons meeting along an edge make no corner). The face angles
there must add up to less than $360°$, because a convex corner has positive defect: if they made exactly $360°$ the
faces would lie flat, and more than $360°$ cannot even be fitted round a point of a convex solid.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Regular polygons meeting at a point, laid flat. Three squares leave a 90 degree gap, which folds up into a cube corner; three regular pentagons leave a 36 degree gap; six triangles fill 360 degrees exactly and cannot fold; three hexagons also fill it.">
  <polygon points="70,95 28,95 28,53 70,53" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="70,95 70,137 28,137 28,95" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="70,95 112,95 112,137 70,137" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="70" cy="95" r="3" fill="currentColor"/>
  <text x="70" y="192" text-anchor="middle" font-size="12" fill="currentColor">3 squares: 270°</text>
  <polygon points="210,95 177.7,105.5 157.7,78 177.7,50.5 210,61" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="210,95 230,122.5 210,150 177.7,139.5 177.7,105.5" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="210,95 230,67.5 262.3,78 262.3,112 230,122.5" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="210" cy="95" r="3" fill="currentColor"/>
  <text x="210" y="192" text-anchor="middle" font-size="12" fill="currentColor">3 pentagons: 324°</text>
  <polygon points="350,95 310.2,72 350,49" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="350,95 310.2,118 310.2,72" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="350,95 350,141 310.2,118" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="350,95 389.8,118 350,141" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="350,95 389.8,72 389.8,118" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="350,95 350,49 389.8,72" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="350" cy="95" r="3" fill="currentColor"/>
  <text x="350" y="192" text-anchor="middle" font-size="12" fill="currentColor">6 triangles: 360°</text>
</svg>
</div>

The angle of a regular $p$-gon is $\frac{(p - 2)\,180°}{p}$ ([Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)):
$60°$ for triangles, $90°$ for squares, $108°$ for pentagons, $120°$ for hexagons. So we need

$$
q \cdot \frac{(p - 2)\,180°}{p} < 360°, \qquad\text{that is}\qquad q(p - 2) < 2p.
$$

Rearranging, $pq - 2p - 2q < 0$, and adding 4 to both sides,

$$
(p - 2)(q - 2) < 4.
$$

With $p, q \ge 3$ both factors are at least 1, so the possibilities are $1 \cdot 1$, $1 \cdot 2$, $2 \cdot 1$, $1 \cdot 3$,
$3 \cdot 1$: $(p, q) = (3,3), (3,4), (4,3), (3,5), (5,3)$. Hexagons are already too big ($3 \times 120° = 360°$, flat),
and so is everything with more sides. $\square$

This proves there are *at most* five types. To finish, each must actually exist, which needs a construction. (One can
also prove that each type is unique once the edge length is fixed, but we will not need that.)

### Building them

Coordinates in space ([Chapter 9](09-Vectors.md)) make each one concrete.

- **Cube:** the eight points $(\pm1, \pm1, \pm1)$.
- **Tetrahedron:** four alternate corners of that cube, $(1,1,1)$, $(1,-1,-1)$, $(-1,1,-1)$, $(-1,-1,1)$. Each pair
  is joined by a face diagonal of the cube, of length $2\sqrt2$, so all six edges are equal and all four faces are
  equilateral.
- **Octahedron:** the six points $(\pm1, 0, 0)$, $(0, \pm1, 0)$, $(0, 0, \pm1)$, the centres of the faces of a cube of
  side 2. Each point is $\sqrt2$ from the four that are not opposite to it.
- **Icosahedron:** the twelve points $(0, \pm1, \pm\varphi)$, $(\pm1, \pm\varphi, 0)$, $(\pm\varphi, 0, \pm1)$, where
  $\varphi = \frac{1 + \sqrt5}{2}$ is the golden ratio ([Chapter 5](05-Similarity.md)). The shortest distance between
  two of these points is 2: for example from $(0, 1, \varphi)$ to $(0, -1, \varphi)$. And from $(0, 1, \varphi)$ to
  $(1, \varphi, 0)$ the squared distance is $1 + (\varphi - 1)^2 + \varphi^2 = 1 + \varphi^2 - 2\varphi + 1 + \varphi^2$,
  which equals 4 because $\varphi^2 = \varphi + 1$. Each point has five neighbours at distance 2, and they form the
  20 equilateral triangles.
- **Dodecahedron:** the cube's eight points $(\pm1, \pm1, \pm1)$ together with the twelve points
  $(0, \pm\tfrac1\varphi, \pm\varphi)$, $(\pm\tfrac1\varphi, \pm\varphi, 0)$, $(\pm\varphi, 0, \pm\tfrac1\varphi)$.
  The faces are 12 regular pentagons, and a cube sits inside it, each cube edge a diagonal of one pentagon.

**Try it in Python.** A computer confirms the icosahedron's 12 vertices and 30 edges by listing the pairs of points at
distance 2:

```python
from itertools import combinations, product
phi = (1 + 5 ** 0.5) / 2
ico = [p for a, b in product((1, -1), repeat=2)
       for p in [(0, a, b * phi), (a, b * phi, 0), (b * phi, 0, a)]]
d2 = lambda p, q: sum((x - y) ** 2 for x, y in zip(p, q))
edges = [e for e in combinations(ico, 2) if abs(d2(*e) - 4) < 1e-9]
print(len(ico), len(edges))     # 12 30
```

### History

The five solids were known to the Greeks. Euclid's *Elements* ends, in Book XIII, by constructing all five inside a
sphere and proving that there are no others, by the angle argument above. Later Greek commentary attributes the
octahedron and icosahedron, or the whole theory, to Theaetetus, a contemporary of Plato; how much is his is uncertain.
Plato's dialogue *Timaeus* matched four of them with the elements (fire, air, water, earth) and the dodecahedron with
the cosmos, which is how they got his name.

In 1596 the young Johannes Kepler, in *Mysterium Cosmographicum*, proposed that the six planets then known had orbits
on spheres nested around the five solids: Saturn's sphere, cube, Jupiter's, tetrahedron, Mars's, dodecahedron, Earth's,
icosahedron, Venus's, octahedron, Mercury's. The fit was only approximate, and when Kepler later worked through Tycho
Brahe's careful observations of Mars, the data defeated circles altogether and led him to elliptical orbits
([Chapter 8](08-Coordinate-Geometry.md)). The beautiful theory was wrong; the honest analysis of Mars was right.

## 11.3 Euler's formula

Count for each Platonic solid: $4 - 6 + 4 = 2$, $8 - 12 + 6 = 2$, $6 - 12 + 8 = 2$, $20 - 30 + 12 = 2$,
$12 - 30 + 20 = 2$. For a pentagonal prism, $10 - 15 + 7 = 2$. For a hexagonal pyramid, $7 - 12 + 7 = 2$. The number
$V - E + F$ never changes.

**Theorem (Euler's polyhedron formula).** For every convex polyhedron, $V - E + F = 2$.

### Flatten it

Imagine the polyhedron made of rubber, and remove one face. Stretch the hole wide and flatten the rest onto a table.
The vertices and edges become a drawing in the plane, a **planar graph**, with no edges crossing. The faces become the
regions inside the drawing, and the removed face becomes the outside region. For a convex polyhedron this can be done
precisely: put your eye just outside the centre of one face and project everything onto a plane beyond the opposite
side (the result is called a **Schlegel diagram**).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="A cube flattened into the plane: look through one face, and the far face becomes a small square inside a big one. The picture has 8 corners, 12 edges and 6 regions, counting the outside region as the face you looked through.">
  <polygon points="40,205 220,205 220,25 40,25" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
  <polygon points="92,153 168,153 168,77 92,77" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="205" x2="92" y2="153" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="205" x2="168" y2="153" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="25" x2="168" y2="77" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="25" x2="92" y2="77" stroke="currentColor" stroke-width="2"/>
  <circle cx="40" cy="205" r="4" fill="currentColor"/>
  <circle cx="220" cy="205" r="4" fill="currentColor"/>
  <circle cx="220" cy="25" r="4" fill="currentColor"/>
  <circle cx="40" cy="25" r="4" fill="currentColor"/>
  <circle cx="92" cy="153" r="4" fill="currentColor"/>
  <circle cx="168" cy="153" r="4" fill="currentColor"/>
  <circle cx="168" cy="77" r="4" fill="currentColor"/>
  <circle cx="92" cy="77" r="4" fill="currentColor"/>
  <text x="258" y="60" text-anchor="start" font-size="14" fill="currentColor">V = 8 corners</text>
  <text x="258" y="90" text-anchor="start" font-size="14" fill="currentColor">E = 12 edges</text>
  <text x="258" y="120" text-anchor="start" font-size="14" fill="currentColor">F = 5 regions inside</text>
  <text x="258" y="140" text-anchor="start" font-size="14" fill="currentColor">    + 1 outside = 6</text>
  <text x="258" y="175" text-anchor="start" font-size="15" font-weight="bold" fill="currentColor">8 − 12 + 6 = 2</text>
</svg>
</div>

So it is enough to prove: **for a connected drawing in the plane with $V$ points, $E$ edges (curves that do not cross)
and $F$ regions, counting the outside region, $V - E + F = 2$.**

### Proof by building

*Proof.* Build the drawing one edge at a time, keeping it connected, and watch $V - E + F$.

- **Start** with a single point: $V = 1$, $E = 0$, $F = 1$ (the whole plane is one region). So $V - E + F = 2$.
- **Add an edge to a new point.** One new vertex, one new edge, no new region ($V$ and $E$ go up by 1). The sum is
  unchanged.
- **Add an edge between two points already in the drawing.** One new edge; and since the two points were already
  connected, the new edge closes a loop, which cuts the region it runs through into two. One new edge, one new region.
  The sum is unchanged.

Every connected drawing can be built like this (grow outward from any starting point: as long as some edge is missing,
one of its ends is already drawn). So at the end $V - E + F = 2$. $\square$

One step deserves a flag of honesty: "a closed loop cuts a region into two" is the **Jordan curve theorem**, which is
obvious for polygons and surprisingly hard to prove for wild curves. For the straight edges of a Schlegel diagram the
polygon case is enough, and its proof is elementary.

### What the formula gives

**Five again.** Let a Platonic solid $\{p, q\}$ have $V$, $E$, $F$. Each face has $p$ edges and each edge borders 2
faces, so $pF = 2E$. Each vertex has $q$ edges and each edge has 2 ends, so $qV = 2E$. Put $F = 2E/p$, $V = 2E/q$
into Euler's formula:

$$
\frac{2E}{q} - E + \frac{2E}{p} = 2 \qquad\Longrightarrow\qquad \frac1p + \frac1q = \frac12 + \frac1E.
$$

The right side is more than $\tfrac12$, so $\tfrac1p + \tfrac1q > \tfrac12$, the same five pairs as before; and now the
formula even computes $E$. For $\{3, 5\}$: $\tfrac13 + \tfrac15 - \tfrac12 = \tfrac{1}{30}$, so $E = 30$, $F = 20$,
$V = 12$. Two different proofs, one by angles and one by counting, give the same list.

**Descartes' theorem.** The angle defects of a convex polyhedron add up to exactly $720°$.

*Proof.* The sum of the defects is $360°\,V$ minus the sum of all the face angles of all the faces. A face with $n$
sides has angle sum $(n - 2)180°$, so the total of all face angles is $180°\sum(n - 2) = 180°(2E - 2F)$, since the
numbers of sides of all faces add up to $2E$ (each edge counted twice). So the total defect is
$360°V - 360°E + 360°F = 360°(V - E + F) = 720°$. $\square$

**Check:** a cube has 8 corners of defect $90°$, total $720°$. A dodecahedron has 20 corners of defect
$360° - 3 \times 108° = 36°$, total $720°$. An icosahedron: 12 corners of $360° - 300° = 60°$, total $720°$. The
"curvature" of a closed convex surface is concentrated at its corners and always adds up to the same amount; in
[Chapter 19](19-Curves-and-Surfaces.md) this becomes the Gauss-Bonnet theorem, with $720°$ appearing as $4\pi$.

### A history with counterexamples

René Descartes wrote down the angle-defect theorem in notes around 1630 that were lost and only found again, in a copy
made by Leibniz, in the nineteenth century. Leonhard Euler stated $V - E + F = 2$ in a letter to Christian Goldbach in
1750 and published proofs in the 1750s; his proof had gaps. Adrien-Marie Legendre gave the first sound proof in 1794,
using spherical geometry ([Chapter 16](16-Spherical-Geometry.md)), and Augustin-Louis Cauchy another in 1813.

The formula is false for polyhedra that are not convex in a strong way. A "picture frame" polyhedron, a square ring with
a hole through it, can be built with $V = 16$, $E = 32$, $F = 16$, giving $V - E + F = 0$. The number $V - E + F$ is
the **Euler characteristic**: 2 for anything shaped like a sphere, 0 for a torus, $2 - 2g$ for a surface with $g$
holes. Imre Lakatos's book *Proofs and Refutations* (1976) is a classic dialogue on how the counterexamples forced
mathematicians to sharpen what "polyhedron" means. The Euler characteristic is the first invariant of **topology**, and
returns in Chapters [19](19-Curves-and-Surfaces.md) and [21](21-Where-Geometry-Goes.md).

<figure class="play" data-play="platonic"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The five Platonic solids, turning. For each, corners minus edges plus faces is 2.</figcaption></figure>

## 11.4 Cavalieri's principle and volume

*Level: intermediate.*

Volume is measured in unit cubes, as area is measured in unit squares ([Chapter 4](04-Area-and-Pythagoras.md)). A box
$a \times b \times c$ holds $abc$ of them (exactly, for whole numbers; by a limiting argument for all lengths). The next
step, slanted and curved solids, needs a new idea.

### The principle

Take a neat stack of coins, then push it so it leans. It holds the same coins, so it has the same volume. That is the
whole idea:

**Cavalieri's principle.** If two solids lie between the same two parallel planes, and every plane parallel to them
cuts the two solids in cross-sections of equal area, then the two solids have equal volume.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="Two stacks of the same coins, one straight and one slanted. Every horizontal slice has the same area in both, so they have the same volume: Cavalieri's principle.">
  <polygon points="30,178 140,178 140,190 30,190" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="235,178 345,178 345,190 235,190" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,166 140,166 140,178 30,178" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="246.7,166 356.7,166 356.7,178 246.7,178" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,154 140,154 140,166 30,166" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="253.7,154 363.7,154 363.7,166 253.7,166" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,142 140,142 140,154 30,154" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="254.8,142 364.8,142 364.8,154 254.8,154" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,130 140,130 140,142 30,142" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="253.3,130 363.3,130 363.3,142 253.3,142" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,118 140,118 140,130 30,130" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="254.5,118 364.5,118 364.5,130 254.5,130" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,106 140,106 140,118 30,118" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="261.5,106 371.5,106 371.5,118 261.5,118" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,94 140,94 140,106 30,106" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="273.3,94 383.3,94 383.3,106 273.3,106" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,82 140,82 140,94 30,94" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="285,82 395,82 395,94 285,94" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,70 140,70 140,82 30,82" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="291.9,70 401.9,70 401.9,82 291.9,82" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,58 140,58 140,70 30,70" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="292.8,58 402.8,58 402.8,70 292.8,70" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="30,46 140,46 140,58 30,58" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="291.3,46 401.3,46 401.3,58 291.3,58" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <line x1="15" y1="112" x2="415" y2="112" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="210" y="106" text-anchor="middle" font-size="12" fill="currentColor">same slice area</text>
  <text x="85" y="205" text-anchor="middle" font-size="13" fill="currentColor">straight</text>
  <text x="320" y="205" text-anchor="middle" font-size="13" fill="currentColor">slanted</text>
</svg>
</div>

Bonaventura Cavalieri published it in 1635 in *Geometria indivisibilibus*, treating a solid as made of infinitely many
thin slices ("indivisibles"). Archimedes had used the same idea earlier, as we will see. Today it is a theorem of
calculus: volume is the integral of the cross-section area, $V = \int A(z)\,dz$, so equal $A(z)$ gives equal $V$ (in the
language of the U of T guide [The Riemann integral in R^n](../../uoft/MAT257Y1/unit09.md), this is Fubini's theorem).
In this chapter we use it as a principle and see how far it reaches.

### Prisms and cylinders

A right prism with base area $B$ and height $h$ has volume $Bh$: for a rectangular base this is the box formula, and a
general base can be cut into pieces approximated by rectangles. Every cross-section of a slanted prism is a copy of the
base, so by Cavalieri a **slanted prism also has volume $Bh$**, with $h$ the perpendicular height, not the slanted edge.
The same holds for a cylinder: $V = \pi r^2 h$.

### Pyramids

**Theorem.** A pyramid (or cone) with base area $B$ and height $h$ has volume $\tfrac13 Bh$.

The $\tfrac13$ is the surprise, and it needs proof. We do it in three steps.

*Step 1: one special pyramid.* A cube of side $a$ can be cut into three congruent square pyramids, each with a corner of
the cube as apex and one of the three faces not touching that corner as base. Each has base $a^2$ and height $a$, and
three of them make the cube, so each has volume $\tfrac13 a^3 = \tfrac13 Bh$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="A cube of side a cut into three congruent square pyramids, shown pulled apart. Each has the same apex, a corner of the cube, and one face of the cube as its base, so each is one third of the cube.">
  <polygon points="58,140 138,140 138,60 58,60" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <line x1="18" y1="85.6" x2="58" y2="140" stroke="currentColor" stroke-width="1.4"/>
  <line x1="18" y1="85.6" x2="138" y2="140" stroke="currentColor" stroke-width="1.4"/>
  <line x1="18" y1="85.6" x2="138" y2="60" stroke="currentColor" stroke-width="1.4"/>
  <line x1="18" y1="85.6" x2="58" y2="60" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="18" cy="85.6" r="3.5" fill="currentColor"/>
  <text x="8" y="79.6" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <polygon points="276,140 236,165.6 236,85.6 276,60" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156" y1="85.6" x2="276" y2="140" stroke="currentColor" stroke-width="1.4"/>
  <line x1="156" y1="85.6" x2="236" y2="165.6" stroke="currentColor" stroke-width="1.4"/>
  <line x1="156" y1="85.6" x2="236" y2="85.6" stroke="currentColor" stroke-width="1.4"/>
  <line x1="156" y1="85.6" x2="276" y2="60" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="156" cy="85.6" r="3.5" fill="currentColor"/>
  <text x="146" y="79.6" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <polygon points="334,140 294,165.6 374,165.6 414,140" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <line x1="294" y1="85.6" x2="334" y2="140" stroke="currentColor" stroke-width="1.4"/>
  <line x1="294" y1="85.6" x2="294" y2="165.6" stroke="currentColor" stroke-width="1.4"/>
  <line x1="294" y1="85.6" x2="374" y2="165.6" stroke="currentColor" stroke-width="1.4"/>
  <line x1="294" y1="85.6" x2="414" y2="140" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="294" cy="85.6" r="3.5" fill="currentColor"/>
  <text x="284" y="79.6" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <text x="210" y="192" text-anchor="middle" font-size="12" fill="currentColor">three pyramids, one apex A, three faces as bases</text>
</svg>
</div>

*Step 2: same base and height, same volume.* Two pyramids with bases of equal area and equal heights have equal volume.
Cut both at height $t$ above the base. The cross-section is the base shrunk towards the apex by the factor
$\frac{h - t}{h}$ (similar figures, [Chapter 5](05-Similarity.md)), so its area is $B\left(\frac{h - t}{h}\right)^2$,
the same for both. By Cavalieri, the volumes are equal.

*Step 3: scaling.* Stretching a solid in one direction by a factor $k$ multiplies its volume by $k$ (each small box is
stretched by $k$). A square pyramid with base $a^2$ and height $h$ is the pyramid of step 1 stretched vertically by
$h/a$, so its volume is $\tfrac13 a^3 \cdot \tfrac{h}{a} = \tfrac13 a^2 h$. By step 2, any pyramid with base area $B$
and height $h$ has the volume of a square pyramid with the same $B$ and $h$, namely $\tfrac13 Bh$. $\square$

For a **cone** with radius $r$ and height $h$: $V = \tfrac13\pi r^2 h$. A cone fills exactly a third of the cylinder
around it, which you can check with sand and a cone-shaped cup.

This was known to the Greeks: Euclid's *Elements*, Book XII, proves that a pyramid is a third of the prism on the same
base, and Archimedes credits the discovery to Democritus and the first proof to Eudoxus. Euclid's proof
avoids indivisibles by a careful limiting argument, the **method of exhaustion**.

### The sphere

**Theorem (Archimedes).** A ball of radius $r$ has volume $\tfrac43\pi r^3$.

*Proof.* Compare a hemisphere of radius $r$ with a different solid: a cylinder of radius $r$ and height $r$, with a cone
removed whose apex is at the centre of the cylinder's base and whose base is the cylinder's top.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 140" role="img" aria-label="Left: a hemisphere of radius r cut at height z gives a disc of radius root of r squared minus z squared. Right: a cylinder of radius r and height r with a cone removed (dashed), cut at the same height, gives a ring between radii z and r. Both slices have area pi times (r squared minus z squared).">
  <path d="M 15 110 A 90 90 0 0 1 195 110 Z" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30.2" y1="60" x2="179.8" y2="60" stroke="#eea66f" stroke-width="3"/>
  <line x1="105" y1="110" x2="105" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="110" y="90" text-anchor="start" font-size="14" font-style="italic" fill="currentColor">z</text>
  <line x1="105" y1="110" x2="195" y2="110" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="126" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">r</text>
  <text x="105" y="52" text-anchor="middle" font-size="12" fill="currentColor">disc</text>
  <polygon points="225,110 315,110 225,20" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="405,110 315,110 405,20" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="225" y1="20" x2="405" y2="20" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 3"/>
  <line x1="225" y1="60" x2="265" y2="60" stroke="#eea66f" stroke-width="3"/>
  <line x1="365" y1="60" x2="405" y2="60" stroke="#eea66f" stroke-width="3"/>
  <text x="315" y="52" text-anchor="middle" font-size="12" fill="currentColor">ring</text>
  <line x1="315" y1="110" x2="315" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="319" y="97" text-anchor="start" font-size="14" font-style="italic" fill="currentColor">z</text>
  <text x="315" y="128" text-anchor="middle" font-size="12" fill="currentColor">cylinder minus cone</text>
</svg>
</div>

Cut both at height $z$ above the base ($0 \le z \le r$).

- The hemisphere's slice is a disc. Its radius $\rho$ satisfies $\rho^2 + z^2 = r^2$ (Pythagoras, from the centre to
  the edge of the slice), so its area is $\pi(r^2 - z^2)$.
- The other solid's slice is a ring: the cylinder's disc of radius $r$ minus the cone's disc. The cone widens at
  $45°$ (height $r$, radius $r$), so at height $z$ its radius is $z$. The ring's area is $\pi r^2 - \pi z^2$.

Equal at every height, so by Cavalieri the volumes are equal:

$$
V_{\text{hemisphere}} = \pi r^2 \cdot r - \tfrac13\pi r^2 \cdot r = \tfrac23\pi r^3.
$$

The whole ball is twice that, $\tfrac43\pi r^3$. $\square$

Archimedes was so pleased with the result in its form "the sphere is two thirds of the cylinder around it" (a cylinder of
radius $r$ and height $2r$ has volume $2\pi r^3$) that, according to Cicero, a sphere inside a cylinder was carved on his
tomb, and Cicero found the tomb in Syracuse by that sign. Archimedes' own route to the formula, a thought experiment
balancing slices on a lever, is described in his *Method*, a text known only from a palimpsest identified by Johan
Ludvig Heiberg in 1906.

**Example (Mars).** Mars has mean radius about 3389.5 km, Earth about 6371 km. Their volumes are about
$\tfrac43\pi(3389.5)^3 \approx 1.63 \times 10^{11}$ km$^3$ and $\tfrac43\pi(6371)^3 \approx 1.08 \times 10^{12}$ km$^3$.
The ratio is $(3389.5/6371)^3 \approx 0.151$: Mars has about 15% of Earth's volume, although its radius is just over
half. Volume goes with the cube of length, the square-cube law of [Chapter 5](05-Similarity.md).

## 11.5 The surface of a sphere

*Level: intermediate.*

How much paint covers a ball? The surface is curved and cannot be flattened (that is [Chapter 16](16-Spherical-Geometry.md)'s
theme), so we cannot cut it into flat pieces. Archimedes found the answer two ways, and both are worth seeing.

### From the volume

Cover the sphere with a fine mesh of tiny patches, and join each patch to the centre. The ball is cut into many thin
"pyramids" whose bases are the patches and whose heights are all (nearly) $r$. Their volumes add up:

$$
\tfrac43\pi r^3 = \sum \tfrac13 (\text{patch area})\, r = \tfrac13 r \cdot A,
$$

so the surface area is $A = 4\pi r^2$. In words: **the surface of a sphere is four times the area of its great
circle.** (This is a sketch: making "nearly" precise is a limit argument, done properly with calculus.)

### Archimedes' hat-box theorem

There is a more surprising fact. Put the sphere inside the cylinder that just fits it (radius $r$, height $2r$), and cut
both with two horizontal planes a distance $h$ apart.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="A sphere inside a cylinder that just fits it. Two horizontal planes cut a band from the sphere and a band from the cylinder; the two bands have the same area, 2 pi r times the distance h between the planes.">
  <polygon points="115,25 305,25 305,215 115,215" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="210" cy="120" r="95" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 116.2 105 A 95 95 0 0 1 132.5 65 L 287.5 65 A 95 95 0 0 1 303.8 105 Z" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="305,105 305,65" fill="none" stroke="#7ccf9a" stroke-width="5"/>
  <polyline points="115,105 115,65" fill="none" stroke="#7ccf9a" stroke-width="5"/>
  <line x1="90" y1="105" x2="330" y2="105" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="90" y1="65" x2="330" y2="65" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="345" y1="105" x2="345" y2="65" stroke="currentColor" stroke-width="1"/>
  <text x="351" y="90" text-anchor="start" font-size="15" font-style="italic" fill="currentColor">h</text>
  <line x1="210" y1="120" x2="305" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="257.5" y="136" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">r</text>
  <circle cx="210" cy="120" r="3" fill="currentColor"/>
</svg>
</div>

**Theorem (Archimedes).** The band of sphere between the planes has the same area as the band of cylinder between them,
$2\pi r h$, wherever the planes are.

*Why.* Take a very thin band of sphere at height $z$, of height $\Delta z$. It is nearly a slanted strip of a cone: its
radius is $\rho = \sqrt{r^2 - z^2}$ and its slanted width is $\Delta s$. Let $\alpha$ be the angle between the radius
to the band and the horizontal, so $\cos\alpha = \rho/r$. The sphere's surface there is perpendicular to the radius, so
the slanted width makes the same angle $\alpha$ with the vertical, and its vertical extent is
$\Delta z = \Delta s\cos\alpha = \Delta s\,\rho/r$. So $\Delta s = \frac{r}{\rho}\Delta z$. The band's area is
nearly circumference times width:

$$
2\pi\rho\,\Delta s = 2\pi\rho \cdot \frac{r}{\rho}\,\Delta z = 2\pi r\,\Delta z,
$$

exactly the area of the matching band of the cylinder. Near the equator the sphere's band is wide and steep; near the
pole it is small but slanted; the two effects cancel. Adding up the thin bands gives $2\pi r h$ for any band. $\square$

Taking $h = 2r$ gives the whole sphere: $4\pi r^2$, agreeing with the first argument. The theorem also says that
projecting the sphere horizontally outwards onto the cylinder keeps areas. This is **Lambert's cylindrical equal-area
map projection**, used for maps that must show areas fairly ([Chapter 16](16-Spherical-Geometry.md)).

**Example (the polar region of Mars).** What part of Mars lies north of latitude $80°$? The cap above that latitude is a
zone of height $h = R(1 - \sin 80°)$. With $R = 3389.5$ km, $h \approx 51.5$ km and the area is
$2\pi R h \approx 1.10$ million km$^2$, about $0.76\%$ of the planet's surface, which is
$4\pi R^2 \approx 1.44 \times 10^8$ km$^2$ (about the same as all the dry land on Earth).

### Cones and cylinders

- **Cylinder:** unroll the side into a rectangle $2\pi r$ by $h$, area $2\pi r h$; with the two ends, $2\pi r h + 2\pi r^2$.
- **Cone:** with radius $r$ and slant height $s$, unroll the side into a sector of a circle of radius $s$ with arc
  length $2\pi r$. A sector's area is $\tfrac12 \times$ radius $\times$ arc ([Chapter 6](06-Circles.md)), so the side
  has area $\tfrac12 s \cdot 2\pi r = \pi r s$.

**Example.** A cone of radius 3 and height 4 has slant $s = 5$, side area $15\pi$, total area $15\pi + 9\pi = 24\pi$, and
volume $\tfrac13\pi \cdot 9 \cdot 4 = 12\pi \approx 37.7$.

## 11.6 Archimedean solids and duality

*Level: intermediate to advanced.*

Relax the rules. Allow several kinds of regular polygon as faces, but insist that every vertex looks the same: the same
polygons in the same cyclic order around each one, and, more strongly, that some symmetry of the solid carries any
vertex to any other. Besides the endless families of prisms and antiprisms, there are exactly **13 Archimedean solids**.

We describe a vertex by its **vertex configuration**, the polygons around it in order: the cube is $4.4.4$, the
**cuboctahedron** (squares and triangles alternating, made by cutting each corner of a cube down to the midpoints of
its edges) is $3.4.3.4$.

Some of the thirteen:

| solid | vertex | $V$ | $E$ | $F$ |
|---|---|---|---|---|
| truncated tetrahedron | $3.6.6$ | 12 | 18 | 8 |
| cuboctahedron | $3.4.3.4$ | 12 | 24 | 14 |
| truncated octahedron | $4.6.6$ | 24 | 36 | 14 |
| icosidodecahedron | $3.5.3.5$ | 30 | 60 | 32 |
| truncated icosahedron | $5.6.6$ | 60 | 90 | 32 |

Each satisfies Euler's formula ($12 - 18 + 8 = 2$, and so on). The truncated octahedron has a special property: copies
of it fill space with no gaps.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="The truncated icosahedron, the pattern of a football and of the C60 molecule: 12 pentagons and 20 hexagons, 60 corners and 90 edges.">
  <line x1="119.9" y1="104.8" x2="146.9" y2="85.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="176.8" y1="108.1" x2="146.9" y2="85.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="179.6" y1="149.9" x2="176.8" y2="108.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="179.6" y1="149.9" x2="152.6" y2="169.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="122.7" y1="146.6" x2="152.6" y2="169.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="119.9" y1="104.8" x2="122.7" y2="146.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="252.8" y1="144.5" x2="217.6" y2="168.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="179.6" y1="149.9" x2="217.6" y2="168.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="176.8" y1="108.1" x2="212" y2="84.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="250" y1="102.7" x2="212" y2="84.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="252.8" y1="144.5" x2="250" y2="102.7" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="173.8" y1="199.2" x2="152.6" y2="169.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="214" y1="198.6" x2="217.6" y2="168.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="173.8" y1="199.2" x2="214" y2="198.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="301" y1="113.9" x2="314.1" y2="106.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="301" y1="113.9" x2="279.8" y2="83.8" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="271.6" y1="46.7" x2="279.8" y2="83.8" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="271.6" y1="46.7" x2="284.7" y2="39.7" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="280.7" y1="181.9" x2="284.3" y2="151.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="301" y1="113.9" x2="284.3" y2="151.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="280.7" y1="181.9" x2="293.8" y2="174.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="250" y1="102.7" x2="279.8" y2="83.8" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="252.8" y1="144.5" x2="284.3" y2="151.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="163.6" y1="48.1" x2="153.3" y2="29.8" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="223.3" y1="10.3" x2="233.7" y2="28.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="203.8" y1="47.4" x2="233.7" y2="28.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="163.6" y1="48.1" x2="203.8" y2="47.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="271.6" y1="46.7" x2="233.7" y2="28.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="122.7" y1="146.6" x2="114" y2="154.2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="119.9" y1="104.8" x2="109.5" y2="86.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="214" y1="198.6" x2="245.6" y2="205.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="236.9" y1="213.1" x2="245.6" y2="205.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="173.8" y1="199.2" x2="165.2" y2="206.8" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="280.7" y1="181.9" x2="245.6" y2="205.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="203.8" y1="47.4" x2="212" y2="84.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="163.6" y1="48.1" x2="146.9" y2="85.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <polygon points="126.2,49.1 109.5,86.6 105.9,117.1 119,110.1 135.7,72.6 139.3,42.1" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="148.4,177.3 140.2,140.2 119,110.1 105.9,117.1 114,154.2 135.3,184.3" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="167.2,79.5 135.7,72.6 119,110.1 140.2,140.2 170,121.3" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="246.2,24.8 254.8,17.2 223.3,10.3 183.1,10.9 174.4,18.5 206,25.4" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="300.1,119.2 310.5,137.4 314.1,106.9 306,69.8 297.3,77.4" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="170,121.3 208,139.5 243.2,115.9 240.4,74.1 202.4,55.9 167.2,79.5" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="297.3,77.4 267.4,54.9 240.4,74.1 243.2,115.9 273.1,138.4 300.1,119.2" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="256.4,175.9 273.1,138.4 243.2,115.9 208,139.5 216.2,176.6" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="206,25.4 202.4,55.9 240.4,74.1 267.4,54.9 246.2,24.8" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="216.2,176.6 186.3,195.5 196.7,213.7 236.9,213.1 266.7,194.2 256.4,175.9" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="135.3,184.3 165.2,206.8 196.7,213.7 186.3,195.5 148.4,177.3" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="139.3,42.1 174.4,18.5 183.1,10.9 153.3,29.8 126.2,49.1" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="284.7,39.7 254.8,17.2 246.2,24.8 267.4,54.9 297.3,77.4 306,69.8" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="148.4,177.3 186.3,195.5 216.2,176.6 208,139.5 170,121.3 140.2,140.2" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="206,25.4 174.4,18.5 139.3,42.1 135.7,72.6 167.2,79.5 202.4,55.9" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="300.1,119.2 273.1,138.4 256.4,175.9 266.7,194.2 293.8,174.9 310.5,137.4" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.1"/>
</svg>
</div>

The **truncated icosahedron**, made by cutting each corner of an icosahedron a third of the way along its edges, is the
pattern of the classic football and of the carbon molecule $C_{60}$ (buckminsterfullerene), discovered in 1985.

**Why a football has exactly 12 pentagons.** Suppose a convex polyhedron has only pentagons ($p$ of them) and hexagons
($h$ of them), with three faces at every vertex. Count edges by faces: $5p + 6h = 2E$. Count edges by vertices:
$3V = 2E$. And $V - E + F = 2$ with $F = p + h$. Multiply Euler by 6: $6V - 6E + 6F = 12$, that is
$4E - 6E + 6p + 6h = 12$, so $6p + 6h - 2E = 12$. Substitute $2E = 5p + 6h$: $6p + 6h - 5p - 6h = 12$, so
$p = 12$. **Exactly 12 pentagons, whatever the number of hexagons.** The same count governs the fullerene molecules and
the shells of many viruses.

The Archimedean solids are named after Archimedes because Pappus of Alexandria reported that Archimedes had described
13 such solids, in a work now lost. Kepler rediscovered and listed all 13 in *Harmonices Mundi* (1619). An honest
footnote: there is a fourteenth convex solid with regular faces and the same configuration $3.4.4.4$ at every vertex,
the **elongated square gyrobicupola**, but no symmetry carries every vertex to every other (it looks the same at each
vertex only locally). That is why the definition above insists on symmetry.

### Duality

Put a point at the centre of each face of a cube and join the points on neighbouring faces. You get an octahedron.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="A cube with an octahedron inside whose corners are the centres of the cube's six faces: the octahedron is the dual of the cube.">
  <line x1="130.4" y1="64" x2="228.4" y2="85" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="228.4" y1="85" x2="289.6" y2="51.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <line x1="228.4" y1="193.5" x2="228.4" y2="85" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  <polygon points="191.6,30.5 130.4,64 130.4,172.5 191.6,139" fill="#9cc9ea" fill-opacity="0.12" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="289.6,51.5 191.6,30.5 191.6,139 289.6,160" fill="#9cc9ea" fill-opacity="0.12" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="191.6,139 130.4,172.5 228.4,193.5 289.6,160" fill="#9cc9ea" fill-opacity="0.12" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="210,166.3 161,101.5 179.4,128.7" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="210,57.7 161,101.5 240.6,95.3" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="240.6,95.3 161,101.5 210,166.3" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="259,122.5 240.6,95.3 210,166.3" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="161" cy="101.5" r="3" fill="currentColor"/>
  <circle cx="179.4" cy="128.7" r="3" fill="currentColor"/>
  <circle cx="240.6" cy="95.3" r="3" fill="currentColor"/>
  <circle cx="259" cy="122.5" r="3" fill="currentColor"/>
  <circle cx="210" cy="57.7" r="3" fill="currentColor"/>
  <circle cx="210" cy="166.3" r="3" fill="currentColor"/>
</svg>
</div>

This is **duality**: from a polyhedron, make a new one with a vertex for each face of the old, an edge crossing each old
edge, and a face for each old vertex. So the dual swaps $V$ and $F$ and keeps $E$, and swaps the Schläfli symbol
$\{p, q\} \leftrightarrow \{q, p\}$:

- the cube $\{4,3\}$ and octahedron $\{3,4\}$ are duals ($V = 8, F = 6$ and $V = 6, F = 8$, both $E = 12$);
- the dodecahedron $\{5,3\}$ and icosahedron $\{3,5\}$ are duals;
- the tetrahedron $\{3,3\}$ is its own dual.

Dual solids have the same symmetry group. This explains why there are only **three** symmetry groups among the five
solids. Their rotation groups have $12$, $24$ and $60$ elements, which the orbit-stabilizer theorem (Algebra book,
[Chapter 16](../algebra/16-Group-Actions-and-Sylow.md)) counts quickly: a cube's rotations can bring any of the 6 faces
to the top, and then turn it 4 ways, so $6 \times 4 = 24$. For the dodecahedron, $12 \times 5 = 60$; for the
tetrahedron, $4 \times 3 = 12$.

The duals of the Archimedean solids are the **Catalan solids**, with all faces congruent but not regular, such as the
**rhombic dodecahedron** (dual of the cuboctahedron: 14 vertices, 24 edges, 12 rhombus faces), the shape of garnet
crystals and, like the truncated octahedron, a solid that fills space.

## 11.7 Hilbert's third problem

*Level: advanced to expert.*

In the plane, area is the whole story. The **Bolyai-Gerwien theorem** ([Chapter 4](04-Area-and-Pythagoras.md), 4.7)
says that two polygons of equal area can always be cut into finitely many polygonal pieces that rearrange into each
other. The formula for a triangle's area can be proved purely by cutting and rearranging.

In space, Euclid's proof that a pyramid is a third of a prism used a limiting argument, and nobody had managed a proof
by cutting into finitely many pieces. Is that a failure of ingenuity, or a real obstacle? In his famous list of 23
problems at the International Congress of Mathematicians in 1900, David Hilbert asked, as his **third problem**, for two
tetrahedra with equal bases and equal heights (hence equal volumes) that cannot be cut into finitely many congruent
polyhedral pieces. He expected such a pair to exist.

**Theorem (Dehn, 1900).** A regular tetrahedron cannot be cut into finitely many polyhedral pieces that reassemble into a
cube of the same volume.

Max Dehn, a student of Hilbert, proved this within the year, making the third the first of Hilbert's problems to be
solved. His tool is a new quantity attached to every polyhedron that does not change under cutting and regluing, the
**Dehn invariant**, and which is different for the cube and the tetrahedron.

### The idea of the invariant

Look at what happens to edges and their **dihedral angles** (the angle between the two faces meeting at an edge) when
you cut a polyhedron into pieces.

- A cut along a plane through the middle of a face creates new edges where the angles of the two pieces add up to
  $180°$, that is $\pi$.
- A new edge inside the solid is surrounded by pieces whose dihedral angles add up to $360°$, that is $2\pi$.
- An old edge cut lengthwise splits into two edges of the same length whose angles add to the old angle; an old edge cut
  crosswise splits into two pieces of edge with the same angle whose lengths add up.

So "length times angle" behaves additively, **provided we agree to ignore angles that are rational multiples of $\pi$**
(since new edges come with total angles $\pi$ or $2\pi$). Dehn's invariant packages this:

$$
D(P) = \sum_{\text{edges } e} \ell(e) \otimes \theta(e),
$$

where $\ell(e)$ is the edge's length, $\theta(e)$ its dihedral angle, and the symbol $\otimes$ means: a formal sum of
pairs, additive in each slot ($(\ell_1 + \ell_2) \otimes \theta = \ell_1 \otimes \theta + \ell_2 \otimes \theta$ and
likewise for angles), with rational numbers allowed to move across ($q\ell \otimes \theta = \ell \otimes q\theta$), and
with $\ell \otimes \theta = 0$ whenever $\theta$ is a rational multiple of $\pi$. (Formally, $D(P)$ lies in the tensor
product $\mathbb{R} \otimes_{\mathbb{Q}} \mathbb{R}/\pi\mathbb{Q}$; the key fact we use is that $\ell \otimes \theta = 0$
only if $\ell = 0$ or $\theta$ is a rational multiple of $\pi$.)

The three observations above show that if $P$ is cut into pieces $P_1, \dots, P_k$, then
$D(P) = D(P_1) + \dots + D(P_k)$. So **two polyhedra that can be cut into each other have the same Dehn invariant.**

### The cube and the tetrahedron

- **Cube:** 12 edges, every dihedral angle $\pi/2$, a rational multiple of $\pi$. So $D(\text{cube}) = 0$.
- **Regular tetrahedron:** 6 edges of length $\ell$, every dihedral angle $\theta = \arccos\tfrac13 \approx 70.53°$
  (the angle between two faces; compute it from the normals of 11.2's coordinates, or see exercise 11). So
  $D = 6\ell \otimes \theta$, which is not zero provided $\theta$ is not a rational multiple of $\pi$.

**Lemma.** $\theta = \arccos\tfrac13$ is not a rational multiple of $\pi$.

*Proof.* If $\theta = \frac{m}{n}\pi$, then $n\theta$ is a multiple of $\pi$, so $\cos(n\theta) = \pm1$. We show
$\cos(k\theta)$ is never $\pm1$ for $k \ge 1$. The addition formulas ([Chapter 7](07-Trigonometry.md)) give
$\cos((k + 1)\theta) = 2\cos\theta\cos(k\theta) - \cos((k - 1)\theta)$. Write $\cos(k\theta) = a_k/3^k$. Then
$a_0 = 1$, $a_1 = 1$, and the formula becomes

$$
a_{k+1} = 2a_k - 9a_{k-1},
$$

so all $a_k$ are integers, and modulo 3, $a_{k+1} \equiv 2a_k$. Starting from $a_1 = 1$, no $a_k$ is divisible by 3.
So $\cos(k\theta) = a_k/3^k$ is a fraction in lowest terms with denominator $3^k > 1$, never $\pm 1$. $\square$

(For instance $\cos 2\theta = -\tfrac79$, $\cos 3\theta = -\tfrac{23}{27}$, $\cos 4\theta = \tfrac{17}{81}$.)

So $D(\text{tetrahedron}) \ne 0 = D(\text{cube})$, and the tetrahedron cannot be cut into a cube. The same invariant
also separates suitable pairs of tetrahedra with equal bases and equal heights, which is exactly what Hilbert asked for.
The deeper lesson: a theory of volume for polyhedra cannot avoid limits, as the theory of area can.

### The full answer

Is the Dehn invariant the *only* obstacle? Yes: in 1965 Jean-Pierre Sydler proved that two polyhedra can be cut into
each other **if and only if** they have the same volume and the same Dehn invariant. The proof is long and uses
algebra well beyond this book. The question of what invariants control cutting in higher dimensions, and in spherical
and hyperbolic space, is still partly open and connects to deep parts of modern algebra (the "scissors congruence"
problem).

## Check yourself

??? question "1. Count $V$, $E$, $F$ for a pentagonal prism, a pentagonal pyramid and a square antiprism, and check Euler's formula for each."

    Pentagonal prism: $V = 10$, $E = 15$, $F = 7$; $10 - 15 + 7 = 2$. Pentagonal pyramid: $V = 6$, $E = 10$, $F = 6$;
    $6 - 10 + 6 = 2$. Square antiprism: $V = 8$, $E = 16$, $F = 10$ (2 squares, 8 triangles); $8 - 16 + 10 = 2$.

??? question "2. A convex polyhedron has only triangular faces, and 5 meet at every vertex. Find $V$, $E$, $F$ using only Euler's formula."

    Each face has 3 edges, each edge 2 faces: $3F = 2E$. Each vertex has 5 edges: $5V = 2E$. So
    $\tfrac{2E}{5} - E + \tfrac{2E}{3} = 2$, that is $E\cdot\tfrac{6 - 15 + 10}{15} = 2$, $E = 30$. Then $F = 20$,
    $V = 12$: the icosahedron.

??? question "3. Show that there is no convex polyhedron with exactly 7 edges."

    Each face has at least 3 edges, so $2E \ge 3F$; each vertex has at least 3 edges, so $2E \ge 3V$. With $E = 7$:
    $F \le 4$ and $V \le 4$, so $V + F \le 8$. But Euler needs $V + F = E + 2 = 9$. Contradiction. (Every other number
    of edges from 6 upwards does occur.)

??? question "4. A square pyramid has base side 6 and height 4. Find its volume and its total surface area."

    Volume $\tfrac13 \cdot 36 \cdot 4 = 48$. Each triangular face has base 6 and slant height (from the apex to the
    middle of a base edge) $\sqrt{4^2 + 3^2} = 5$, so area $\tfrac12 \cdot 6 \cdot 5 = 15$. Total: $36 + 4 \cdot 15 = 96$.

??? question "5. A cone has radius 3 and height 4. Find its volume, its side area and its total area. What angle is the sector you get by unrolling its side?"

    Slant $s = 5$. Volume $\tfrac13\pi\cdot9\cdot4 = 12\pi \approx 37.7$. Side $\pi r s = 15\pi$; total $15\pi + 9\pi = 24\pi \approx 75.4$.
    The sector has radius 5 and arc $2\pi \cdot 3 = 6\pi$, which is $\tfrac{6\pi}{10\pi} = \tfrac35$ of a full circle:
    $216°$.

??? question "6. A sphere fits exactly inside a cylinder. Show that both its volume and its surface area are two thirds of the cylinder's (counting the cylinder's ends)."

    Radius $r$, cylinder height $2r$. Volumes: $\tfrac43\pi r^3$ and $\pi r^2 \cdot 2r = 2\pi r^3$, ratio $\tfrac23$.
    Areas: $4\pi r^2$ and $2\pi r\cdot 2r + 2\pi r^2 = 6\pi r^2$, ratio $\tfrac23$. This is the result Archimedes wanted
    on his tomb.

??? question "7. Mars has radius about 3389.5 km and Earth about 6371 km. What fraction of Earth's surface area, and of its volume, does Mars have?"

    Areas scale as the square of the radius: $(3389.5/6371)^2 \approx 0.283$, about 28%. Volumes scale as the cube:
    $(3389.5/6371)^3 \approx 0.151$, about 15%. (Its area, about $1.44 \times 10^8$ km$^2$, is close to the land area of
    Earth.)

??? question "8. Check Descartes' theorem for an $n$-gonal right prism."

    At each of the $2n$ vertices meet two rectangles ($90°$ each) and one $n$-gon, with angle $\frac{(n - 2)180°}{n}$.
    The defect is $360° - 180° - \frac{(n - 2)180°}{n} = 180° - 180° + \frac{360°}{n} = \frac{360°}{n}$. The total is
    $2n \cdot \frac{360°}{n} = 720°$.

??? question "9. Find the area of the part of a sphere of radius $R$ that lies between latitudes $30°$ N and $30°$ S, as a fraction of the whole."

    The zone lies between heights $-R\sin30°$ and $R\sin30°$, so $h = R$. By the hat-box theorem its area is
    $2\pi R \cdot R = 2\pi R^2$, exactly half of $4\pi R^2$. Half of every planet's surface lies within $30°$ of its
    equator.

??? question "10. The rhombic dodecahedron is the dual of the cuboctahedron. Find its $V$, $E$, $F$ and the shapes of its faces and vertices."

    The cuboctahedron has $V = 12$, $E = 24$, $F = 14$ (8 triangles, 6 squares). The dual swaps $V$ and $F$: $V = 14$,
    $E = 24$, $F = 12$. Each vertex of the cuboctahedron has 4 faces round it, so each face of the dual has 4 sides
    (a rhombus). The dual has 8 vertices where 3 faces meet (from the triangles) and 6 where 4 meet (from the squares).
    Check: $14 - 24 + 12 = 2$.

??? question "11. Show that the dihedral angle of the regular tetrahedron is $\arccos\frac13$, and that the regular octahedron's is $\pi - \arccos\frac13$. What is the octahedron's Dehn invariant?"

    Use the tetrahedron $(1,1,1)$, $(1,-1,-1)$, $(-1,1,-1)$, $(-1,-1,1)$ centred at the origin. The outward normal of
    the face opposite a vertex points away from that vertex, so the normals are the negatives of the vertex vectors,
    e.g. $-(1,1,1)$ and $-(1,-1,-1)$, at angle $\arccos\frac{1 - 1 - 1}{3} = \arccos(-\tfrac13)$. The dihedral angle is
    $\pi$ minus the angle between outward normals: $\pi - \arccos(-\tfrac13) = \arccos\tfrac13 \approx 70.53°$. For the
    octahedron the face normals are $(\pm1, \pm1, \pm1)$; two faces sharing an edge have normals like $(1,1,1)$ and
    $(1,1,-1)$, at angle $\arccos\tfrac13$, so the dihedral angle is $\pi - \arccos\tfrac13 \approx 109.47°$. Its Dehn
    invariant is $12\ell \otimes (\pi - \theta) = -12\ell \otimes \theta \ne 0$ (the $\pi$ part counts as zero). So an
    octahedron cannot be cut into a cube either.

??? question "12. Prove that the inequality $(p - 2)(q - 2) < 4$ with whole numbers $p, q \ge 3$ has exactly the five solutions listed, and explain what the equality $(p - 2)(q - 2) = 4$ describes."

    Both factors are whole numbers at least 1 with product at most 3: $(1,1), (1,2), (2,1), (1,3), (3,1)$, giving
    $(p,q) = (3,3), (3,4), (4,3), (3,5), (5,3)$; any factor 4 or more, or both at least 2, makes the product at least 4.
    Equality $(p - 2)(q - 2) = 4$ means the angles at a vertex add to exactly $360°$: $(4,4)$, $(3,6)$, $(6,3)$. These
    are the three regular tilings of the plane by squares, triangles and hexagons ([Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)),
    the "flat" limits of the Platonic solids.

## What you learned

- Polyhedra have faces, edges and vertices; at each vertex of a convex polyhedron the face angles leave a positive
  defect.
- Exactly five Platonic solids exist, $\{3,3\}, \{4,3\}, \{3,4\}, \{5,3\}, \{3,5\}$, by the angle inequality
  $(p - 2)(q - 2) < 4$ or by Euler's formula, and coordinates build each one.
- Euler's formula $V - E + F = 2$ holds for convex polyhedra (proof by building the planar graph); the defects add up to
  $720°$ (Descartes).
- Cavalieri's principle gives $V = Bh$ for prisms, $\tfrac13 Bh$ for pyramids and cones, and Archimedes' $\tfrac43\pi r^3$
  for the ball.
- The sphere's surface is $4\pi r^2$, and a band of it has the same area as the matching band of the circumscribed
  cylinder.
- Archimedean solids have regular faces of several kinds; duality swaps vertices and faces; a pentagon-hexagon
  polyhedron with three faces per vertex has exactly 12 pentagons.
- The Dehn invariant shows that a regular tetrahedron cannot be cut into a cube: volume in space needs limits.

**Next:** [Chapter 12](12-Triangle-Centres-and-Classical-Theorems.md), the classical depth of the triangle: its centres,
the Euler line, the nine-point circle, and the theorems of Ceva, Menelaus, Ptolemy and Simson.

## Further reading

- Euclid, *Elements*, Books XI to XIII, in T. L. Heath's translation, *The Thirteen Books of Euclid's Elements*, 1908.
- H. S. M. Coxeter, *Regular Polytopes*, 3rd edition, 1973. The definitive account of regular solids in any dimension.
- P. R. Cromwell, *Polyhedra*, 1997. Mathematics and history together, including Euler's formula and Hilbert's third
  problem.
- I. Lakatos, *Proofs and Refutations: The Logic of Mathematical Discovery*, 1976.
- D. S. Richeson, *Euler's Gem: The Polyhedron Formula and the Birth of Topology*, 2008.
- T. L. Heath, *The Works of Archimedes*, 1897 (with the *Method* added in a 1912 supplement).
- M. Aigner and G. M. Ziegler, *Proofs from THE BOOK*, many editions. Chapters on Euler's formula and on Hilbert's third
  problem.
- M. Dehn, "Über den Rauminhalt", *Mathematische Annalen* 55, 1901.
- On this site: the Topics lessons [Faces, edges and corners](../../topics/geometry/level-2/03-faces-edges-corners.md),
  [Nets of a cube](../../topics/geometry/level-2/04-nets-of-a-cube.md),
  [Volume of prisms](../../topics/measurement/level-5/01-prism-volume.md),
  [Volume of pyramids and cones](../../topics/measurement/level-6/01-pyramid-cone-volume.md),
  [Volume of a sphere](../../topics/measurement/level-6/02-sphere-volume.md) and
  [Surface area of cones, pyramids and spheres](../../topics/measurement/level-6/03-curved-surface-area.md); the U of T
  guide [The Riemann integral in R^n](../../uoft/MAT257Y1/unit09.md); the Algebra book's
  [Group actions](../algebra/16-Group-Actions-and-Sylow.md) for the rotation groups of the solids.
