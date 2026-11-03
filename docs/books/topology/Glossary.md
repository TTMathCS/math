# Glossary

*Short definitions of the terms this book uses, from A to Z, each with a link to the chapter that teaches it.*

## A

**Abelianisation**
The quotient of a group by its commutator subgroup: the largest abelian quotient. Adding the relation that all generators commute turns a presentation of a group into a presentation of its abelianisation.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Abstract simplicial complex**
A collection of finite sets (the simplices) closed under taking subsets. It records which vertices span simplices without placing them in space.
See [Chapter 16](16-Homology.md#162-simplicial-complexes).

**Affine chart**
One of the standard charts of real projective space $\mathbb{RP}^n$: the points whose $i$-th homogeneous coordinate is nonzero, identified with $\mathbb{R}^n$ by dividing by that coordinate.
See [Chapter 11](11-Manifolds.md#112-examples).

**Affinely independent**
Points $v_0, \ldots, v_n$ in $\mathbb{R}^N$ are affinely independent if the vectors $v_1 - v_0, \ldots, v_n - v_0$ are linearly independent. Such points span an $n$-simplex.
See [Chapter 16](16-Homology.md#162-simplicial-complexes).

**Alexander horned sphere**
A wild embedding of the 2-sphere in $\mathbb{R}^3$, found by J. W. Alexander in 1924, whose outside is not simply connected. It shows that the Jordan-Schoenflies theorem fails in three dimensions.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem) and [Chapter 5](05-Continuity-and-Homeomorphism.md#54-embeddings).

**Amalgamated free product**
The group $G_1 *_H G_2$ obtained from the free product of $G_1$ and $G_2$ by identifying the two images of a common group $H$. It is what the Seifert-van Kampen theorem produces.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Ambient isotopy**
A continuous deformation of the whole of space, through homeomorphisms starting at the identity, that carries one knot to another. Knots related this way are equivalent.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group) and [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Amphichiral**
A knot equivalent to its own mirror image, such as the figure-eight knot. A knot that is not is chiral.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Andrews-Curtis conjecture**
The open conjecture (1965) that every balanced presentation of the trivial group can be reduced to the trivial presentation by a specific list of moves.
See [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Angle defect**
At a vertex of a polyhedron, $360^\circ$ minus the sum of the face angles meeting there. Descartes' theorem says the defects of a convex polyhedron add up to $720^\circ$.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g).

**Antipodal map**
The map $x \mapsto -x$ of a sphere, sending each point to the opposite point. On $S^n$ it has degree $(-1)^{n+1}$.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#145-the-borsuk-ulam-theorem-in-two-dimensions) and [Chapter 17](17-Applications-of-Algebraic-Topology.md#172-the-hairy-ball-theorem).

**Anyon**
A particle in two dimensions whose exchange, by braiding, acts on the state by a matrix. If these matrices do not commute the anyons are non-abelian, the basis of topological quantum computing.
See [Chapter 20](20-Where-Topology-Goes.md#205-topological-quantum-computing).

**Apex**
The point of a cone $CX$ to which the top copy $X \times \{1\}$ is collapsed.
See [Chapter 6](06-Building-New-Spaces.md#63-cones-and-suspensions).

**Arc (of a knot diagram)**
A piece of a knot diagram running from one undercrossing to the next. Tricolourings colour arcs, and the Wirtinger presentation of the knot group has one generator per arc.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group) and [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Argument principle**
For a loop in the plane avoiding the roots of a polynomial, the winding number of the polynomial's values around 0 counts the roots inside the loop. It underlies the topological proof of the fundamental theorem of algebra.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#143-the-fundamental-theorem-of-algebra).

**Arzelà-Ascoli theorem**
A set of continuous functions on a compact metric space has compact closure in the uniform metric exactly when it is bounded and equicontinuous.
See [Chapter 8](08-Compactness.md#84-compactness-in-metric-spaces).

**A-smoothing and B-smoothing**
The two ways to remove a crossing of a knot diagram by joining its four ends in pairs: the A-smoothing joins the A-regions, the B-smoothing the B-regions. They are the moves behind the Kauffman bracket.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Atlas**
A collection of charts whose domains cover a manifold.
See [Chapter 11](11-Manifolds.md#111-locally-like-mathbbrn).

**Axiom of choice**
The axiom that from any family of nonempty sets one can choose one element of each. Tychonoff's theorem for infinite products is equivalent to it.
See [Chapter 8](08-Compactness.md#85-tychonoffs-theorem).

## B

**Barcode**
The output of persistent homology: one bar for each homology feature, running from the scale where it is born to the scale where it dies. Long bars are features of the data, short bars are noise.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#176-topological-data-analysis-and-persistent-homology).

**Base point**
The chosen point at which every loop in a fundamental group starts and ends. In a path-connected space the fundamental group does not depend on it, up to isomorphism.
See [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition) and [Chapter 13](13-The-Fundamental-Group.md#133-dependence-on-base-point).

**Basis (of a topology)**
A collection of open sets such that every open set is a union of members of it. A collection of sets that covers $X$ and in which each point of an intersection of two members lies in a member inside that intersection is a basis for the topology it generates.
See [Chapter 4](04-Topological-Spaces.md#44-bases).

**Betti number**
The $n$-th Betti number $b_n$ is the rank of the $n$-th homology group: roughly, the number of independent $n$-dimensional holes. For a graph, $b_1 = E - V + c$ is the cycle rank.
See [Chapter 16](16-Homology.md#163-chains-boundaries-and-cycles) and [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects).

**Binary icosahedral group**
The group of order 120 that double covers the rotation group of the icosahedron. It is the fundamental group of the Poincaré homology sphere, and it is perfect.
See [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Borel conjecture**
The open conjecture that two closed aspherical manifolds with isomorphic fundamental groups are homeomorphic.
See [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Borsuk-Ulam theorem**
Every continuous map $f: S^n \to \mathbb{R}^n$ sends some pair of antipodal points to the same point. In dimension 2: at any moment there are two opposite places on Earth with the same temperature and pressure.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#145-the-borsuk-ulam-theorem-in-two-dimensions) and [Chapter 17](17-Applications-of-Algebraic-Topology.md#175-borsuk-ulam-and-the-ham-sandwich).

**Bottleneck distance**
A distance between two barcodes: the smallest $\varepsilon$ for which the bars can be matched with endpoints moving by at most $\varepsilon$, short bars being allowed to match nothing.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#176-topological-data-analysis-and-persistent-homology).

**Boundary (of a chain)**
The image $\partial c$ of a chain under the boundary map, which sends each oriented simplex to the alternating sum of its faces. An $n$-chain that is a boundary of an $(n+1)$-chain is an $n$-boundary; $\partial \partial = 0$.
See [Chapter 16](16-Homology.md#161-why-another-invariant) and [Chapter 16](16-Homology.md#163-chains-boundaries-and-cycles).

**Boundary (of a manifold)**
The points of a manifold with boundary that have a neighbourhood like a half-space, with the point on the edge, rather than like $\mathbb{R}^n$. The boundary of an $n$-manifold with boundary is an $(n-1)$-manifold.
See [Chapter 10](10-Classification-of-Surfaces.md#106-surfaces-with-boundary) and [Chapter 11](11-Manifolds.md#111-locally-like-mathbbrn).

**Boundary (of a set)**
The points of a space that lie in the closure of a set and in the closure of its complement: $\partial A = \overline{A} \setminus \operatorname{int} A$.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary).

**Bounded**
A set in the plane, or in a metric space, that fits inside some large disc or ball.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem).

**Box topology**
The topology on a product $\prod X_i$ whose basis is all products $\prod U_i$ of open sets. For infinite products it is finer than the product topology and worse behaved.
See [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology).

**Bracket (Kauffman bracket)**
A Laurent polynomial $\langle D \rangle$ in a variable $A$ assigned to a knot diagram by smoothing every crossing. It is unchanged by Reidemeister moves R2 and R3; correcting for R1 with the writhe gives the Jones polynomial.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Braid**
A collection of strands running monotonically from one row of points to another, up to deformation. Braids on $n$ strands form the braid group; braiding anyons is the operation of topological quantum computing.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group) and [Chapter 20](20-Where-Topology-Goes.md#205-topological-quantum-computing).

**Braid group on three strands**
The group $\langle a, b \mid aba = bab \rangle$. It is isomorphic to the knot group of the trefoil.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group).

**Branch point**
A point of a shape with index 3 or more: three or more arms meet there, as at the centre of the letter T or Y.
See [Chapter 1](01-What-Topology-Is.md#13-letters-of-the-alphabet-up-to-deformation).

**Brouwer fixed point theorem**
Every continuous map from a closed ball $D^n$ to itself has a fixed point. It is proved for $n = 2$ with the fundamental group and for every $n$ with homology.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#144-the-brouwer-fixed-point-theorem-in-two-dimensions) and [Chapter 17](17-Applications-of-Algebraic-Topology.md#171-brouwers-fixed-point-theorem-in-every-dimension).

## C

**Cantor set**
The set left from $[0, 1]$ by repeatedly removing open middle thirds. It is compact, totally disconnected and has no isolated points, and is homeomorphic to the product $\{0, 1\}^{\mathbb{N}}$.
See [Chapter 7](07-Connectedness.md#74-components) and [Chapter 8](08-Compactness.md#85-tychonoffs-theorem).

**Cartesian product**
The set $X \times Y$ of ordered pairs $(x, y)$ with $x \in X$ and $y \in Y$, and more generally $\prod X_i$.
See [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology).

**Casson handle**
An infinite tower of kinked handles that Freedman showed is homeomorphic, though not always diffeomorphic, to an ordinary 2-handle. Casson handles are the tool behind the topological 4-dimensional Poincaré conjecture.
See [Chapter 19](19-The-Poincare-Conjecture.md#192-higher-dimensions).

**Catenane**
A molecule made of interlocking rings, a link in chemistry.
See [Chapter 18](18-Knot-Theory.md#184-knots-in-dna-and-chemistry).

**Cell complex**
A space built by attaching discs of increasing dimension along their boundaries, starting from a set of points. Also called a CW complex.
See [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing) and [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#24-the-mobius-strip-and-one-sidedness).

**Cell decomposition**
A division of a surface into vertices, edges and faces, each face a disc whose boundary runs along edges. The Euler characteristic is computed from one.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g).

**Chain map**
A sequence of homomorphisms $f_n: C_n(X) \to C_n(Y)$ that commutes with the boundary maps. A chain map induces homomorphisms on homology.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#174-the-lefschetz-fixed-point-theorem).

**Chain (simplicial)**
An $n$-chain is a formal integer combination of oriented $n$-simplices of a simplicial complex, added and subtracted like vectors. The $n$-chains form a group $C_n$.
See [Chapter 16](16-Homology.md#163-chains-boundaries-and-cycles).

**Chart**
A homeomorphism from an open set of a manifold to an open set of $\mathbb{R}^n$: a local coordinate system.
See [Chapter 11](11-Manifolds.md#111-locally-like-mathbbrn).

**Chern number**
An integer attached to a complex line bundle over a closed surface. In the quantum Hall effect it is the integer that the Hall conductance measures.
See [Chapter 20](20-Where-Topology-Goes.md#204-topology-in-physics).

**Chiral**
A knot that is not equivalent to its mirror image, such as the trefoil. The Jones polynomial proves the trefoil chiral.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Chromatic number**
The smallest number of colours needed for a proper colouring of a graph.
See [Chapter 3](03-Graphs-and-Planarity.md#35-the-four-colour-theorem-and-the-five-colour-theorem).

**Classification of surfaces**
Every closed surface is homeomorphic to exactly one of: the sphere, a connected sum of $g \ge 1$ tori, or a connected sum of $k \ge 1$ projective planes. Two closed surfaces are homeomorphic exactly when they have the same Euler characteristic and orientability.
See [Chapter 10](10-Classification-of-Surfaces.md#104-the-classification-theorem) and [Chapter 10](10-Classification-of-Surfaces.md#105-euler-characteristic-and-orientability-determine-a-closed-surface).

**Clopen**
A subset that is both closed and open. A space is connected exactly when its only clopen sets are the empty set and the whole space.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary) and [Chapter 7](07-Connectedness.md#71-connected-spaces).

**Closed 3-manifold**
A compact, connected 3-manifold without boundary, such as the 3-sphere, the 3-torus or a lens space.
See [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Closed map**
A map that sends closed sets to closed sets. A continuous map from a compact space to a Hausdorff space is closed.
See [Chapter 8](08-Compactness.md#83-compact-images-and-closed-subsets).

**Closed set**
A set whose complement is open. Finite unions and arbitrary intersections of closed sets are closed.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary).

**Closed surface**
A surface that is compact and connected and has no boundary, such as the sphere or the torus. "Closed" here means "finite with no edge", not "closed subset".
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g) and [Chapter 10](10-Classification-of-Surfaces.md#101-polygons-with-edge-labels).

**Closure**
The smallest closed set containing a set $A$, written $\overline{A}$: the intersection of all closed sets containing $A$. A point is in the closure exactly when every open set around it meets $A$.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary).

**Coarser topology**
A topology $\mathcal{T}$ is coarser than $\mathcal{T}'$ on the same set if $\mathcal{T} \subseteq \mathcal{T}'$: it has fewer open sets. The other is then finer.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Cocountable topology**
The topology on a set whose open sets are the empty set and the sets with countable complement. On an uncountable set, sequences cannot detect its closures.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary) and [Chapter 5](05-Continuity-and-Homeomorphism.md#51-continuity-as-preimages-of-open-sets).

**Cofinite topology**
The topology on a set whose open sets are the empty set and the sets with finite complement. On an infinite set it is T1, compact and not Hausdorff.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology) and [Chapter 9](09-Separation-and-Metrisation.md#91-hausdorff-spaces-and-why-we-want-them).

**Colouring (proper)**
An assignment of colours to the vertices of a graph, or the regions of a map, such that adjacent ones get different colours.
See [Chapter 3](03-Graphs-and-Planarity.md#35-the-four-colour-theorem-and-the-five-colour-theorem).

**Comb space**
The union of $[0, 1] \times \{0\}$ with the vertical segments over $0$ and over each $1/n$. It is contractible but does not deformation retract onto some of its points.
See [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces).

**Compact**
A space is compact if every open cover has a finite subcover. Compactness is a topological invariant, and continuous images of compact spaces are compact.
See [Chapter 8](08-Compactness.md#81-open-covers).

**Compactness theorem (of logic)**
If every finite subset of a set of logical sentences has a model, so does the whole set. One proof is an application of Tychonoff's theorem.
See [Chapter 8](08-Compactness.md#85-tychonoffs-theorem).

**Complement**
The set of points not in a given set. The complement of a simple closed curve in the plane has two components.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem).

**Complete bipartite graph**
The graph $K_{m,n}$ with $m + n$ vertices in two groups and an edge between every vertex of one group and every vertex of the other. $K_{3,3}$ is not planar.
See [Chapter 3](03-Graphs-and-Planarity.md#33-k_5-and-k_33-are-not-planar).

**Complete graph**
The graph $K_n$ with $n$ vertices and an edge between every pair. $K_5$ is not planar.
See [Chapter 3](03-Graphs-and-Planarity.md#33-k_5-and-k_33-are-not-planar).

**Component**
A maximal connected subset of a space. The components of a space are disjoint, closed, and cover it; homeomorphic spaces have the same number of them.
See [Chapter 7](07-Connectedness.md#74-components).

**Concatenation (of paths)**
The product $f \cdot g$ of two paths with $f(1) = g(0)$: run through $f$, then through $g$, each at double speed.
See [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition).

**Cone**
The space $CX = (X \times [0, 1]) / (X \times \{1\})$, a cylinder on $X$ with its top squashed to a point. Every cone is contractible.
See [Chapter 6](06-Building-New-Spaces.md#63-cones-and-suspensions).

**Configuration space**
The space of all positions of a mechanical system, such as a robot arm or a rigid body. Such spaces are often manifolds: a rigid body's is $\mathbb{R}^3 \times SO(3)$.
See [Chapter 11](11-Manifolds.md#112-examples).

**Conjugacy problem**
The problem of deciding, from a presentation of a group, whether two words represent conjugate elements. For fundamental groups it asks whether two free loops are homotopic.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#155-the-word-problem).

**Connected**
A space is connected if it is not the union of two disjoint nonempty open sets. Intervals are the connected subsets of $\mathbb{R}$, and continuous images of connected spaces are connected.
See [Chapter 7](07-Connectedness.md#71-connected-spaces).

**Connected sum (of knots)**
The knot $K_1 \# K_2$ made by cutting each knot open and joining the ends side by side.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Connected sum (of surfaces or manifolds)**
The space $M \# N$ made by removing a small open disc from each and gluing the two boundary circles. For surfaces, $\chi(M \# N) = \chi(M) + \chi(N) - 2$, and the sphere acts as the identity.
See [Chapter 10](10-Classification-of-Surfaces.md#103-connected-sum).

**Constant loop**
The loop that stays at the base point. Its class is the identity of the fundamental group.
See [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition).

**Continuous**
A map $f: X \to Y$ between topological spaces is continuous if the preimage of every open set of $Y$ is open in $X$. For metric spaces this is the familiar $\varepsilon$-$\delta$ definition.
See [Chapter 1](01-What-Topology-Is.md#15-what-the-same-will-mean) and [Chapter 5](05-Continuity-and-Homeomorphism.md#51-continuity-as-preimages-of-open-sets).

**Continuous at a point**
A map $f$ is continuous at $a$ if for every open set $V$ containing $f(a)$ there is an open set $U$ containing $a$ with $f(U) \subseteq V$. A map is continuous when it is continuous at every point.
See [Chapter 5](05-Continuity-and-Homeomorphism.md#51-continuity-as-preimages-of-open-sets).

**Contractible**
A space homotopy equivalent to a point: its identity map is homotopic to a constant map. Convex sets, trees and cones are contractible.
See [Chapter 6](06-Building-New-Spaces.md#63-cones-and-suspensions) and [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces).

**Converge (in a topological space)**
A sequence $x_n$ converges to $x$ if every open set containing $x$ contains $x_n$ for all large $n$. In a space that is not Hausdorff a sequence can converge to several limits.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary).

**Convex**
A subset of $\mathbb{R}^n$ that contains the segment between any two of its points. Convex sets are path connected and contractible.
See [Chapter 7](07-Connectedness.md#73-path-connectedness) and [Chapter 12](12-Homotopy.md#121-homotopic-maps).

**Core circle**
The circle running down the middle of a Möbius band (or a solid torus); the band deformation retracts onto it.
See [Chapter 12](12-Homotopy.md#124-deformation-retracts).

**Countable**
A set that can be listed as a sequence, finite or infinite, like $\mathbb{N}$ or $\mathbb{Q}$.
See [Chapter 4](04-Topological-Spaces.md#44-bases).

**Covering dimension**
The smallest $n$ such that every open cover of a space has a refinement in which each point lies in at most $n + 1$ sets. For $\mathbb{R}^n$ it is $n$.
See [Chapter 11](11-Manifolds.md#114-the-dimension-question).

**Covering map**
A continuous surjection $p: E \to B$ such that every point of $B$ has an evenly covered open neighbourhood. $E$ is then a covering space of $B$; the map $\mathbb{R} \to S^1$, $t \mapsto (\cos t, \sin t)$, is the basic example.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Crosscap**
A Möbius band sewn into a hole of a surface. A sphere with $k$ crosscaps is the connected sum of $k$ projective planes.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#25-the-klein-bottle-and-the-projective-plane) and [Chapter 10](10-Classification-of-Surfaces.md#103-connected-sum).

**Crossing**
A double point of a knot diagram, marked to show which strand passes over. The crossing number of a knot is the least number of crossings in any of its diagrams.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Cut point**
A point of a connected space whose removal disconnects it. The number of cut points is a topological invariant, which tells the interval from the circle.
See [Chapter 1](01-What-Topology-Is.md#13-letters-of-the-alphabet-up-to-deformation) and [Chapter 7](07-Connectedness.md#75-using-connectedness-to-tell-spaces-apart).

**Cycle (in a graph)**
A closed path in a graph that does not repeat vertices: a polygon. A connected graph without cycles is a tree.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#21-eulers-formula-for-polyhedra).

**Cycle rank**
The number $E - V + c$ of a graph with $c$ components, also called its first Betti number: the number of edges that must be cut to leave a forest. A connected graph is homotopy equivalent to a wedge of that many circles.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects) and [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces).

**Cycle (simplicial)**
An $n$-chain whose boundary is zero. The $n$-cycles form a group $Z_n$, and every $n$-boundary is an $n$-cycle.
See [Chapter 16](16-Homology.md#161-why-another-invariant) and [Chapter 16](16-Homology.md#163-chains-boundaries-and-cycles).

**Cylinder**
The product $S^1 \times [0, 1]$, or a square with one pair of opposite sides glued the same way.
See [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology) and [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing).

## D

**Deck transformation**
A homeomorphism $h: E \to E$ of a covering space with $p \circ h = p$. For the universal cover, the deck transformations form a group isomorphic to $\pi_1(B)$.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Deformation retraction**
A homotopy from the identity of $X$ to a retraction onto a subspace $A$, keeping $A$ fixed (or at least inside $A$). $A$ is then a deformation retract of $X$, and the inclusion of $A$ is a homotopy equivalence.
See [Chapter 12](12-Homotopy.md#124-deformation-retracts).

**Degree (of a map)**
For $f: S^n \to S^n$, the integer $d$ such that $f_*$ on $H_n(S^n) \cong \mathbb{Z}$ is multiplication by $d$. For a loop in the circle it is the winding number. Homotopic maps have equal degree.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#141-the-fundamental-group-of-the-circle) and [Chapter 17](17-Applications-of-Algebraic-Topology.md#173-the-degree-of-a-map).

**Degree (of a vertex)**
The number of edge-ends at a vertex of a graph, a loop counting twice.
See [Chapter 1](01-What-Topology-Is.md#12-the-bridges-of-konigsberg).

**Dehn's algorithm**
An algorithm solving the word problem for fundamental groups of surfaces of genus at least 2: repeatedly replace a subword that is more than half of the relator by the inverse of the rest, which is shorter.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#155-the-word-problem).

**Dense**
A subset whose closure is the whole space, as $\mathbb{Q}$ is in $\mathbb{R}$.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary).

**Descartes' theorem**
For a polyhedral surface, the angle defects at all vertices add up to $360^\circ \times \chi$: $720^\circ$ for a convex polyhedron.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g).

**Determinant (of a knot)**
A knot invariant, equal to 3 for the trefoil and 5 for the figure-eight knot. A knot has a Fox $p$-colouring exactly when the prime $p$ divides its determinant.
See [Chapter 18](18-Knot-Theory.md#182-invariants-colourings-and-the-linking-number).

**Diagonal**
The set $\Delta = \{(x, x)\}$ in $X \times X$. A space is Hausdorff exactly when its diagonal is closed.
See [Chapter 9](09-Separation-and-Metrisation.md#91-hausdorff-spaces-and-why-we-want-them).

**Dictionary order**
The order on pairs given by $(a, s) < (b, t)$ if $a < b$, or $a = b$ and $s < t$, as words are ordered in a dictionary. It is used to build the long line.
See [Chapter 9](09-Separation-and-Metrisation.md#95-strange-spaces).

**Diffeomorphism**
A smooth bijection between smooth manifolds whose inverse is also smooth. Diffeomorphic manifolds are the same as smooth manifolds.
See [Chapter 11](11-Manifolds.md#113-smooth-manifolds) and [Chapter 20](20-Where-Topology-Goes.md#201-exotic-spheres-and-exotic-mathbbr4).

**Discharging**
The method of the four colour theorem's proof that moves "charge" between vertices of a plane graph to show that every such graph contains one of an unavoidable set of configurations.
See [Chapter 3](03-Graphs-and-Planarity.md#35-the-four-colour-theorem-and-the-five-colour-theorem).

**Discrete metric**
The metric $d(x, y) = 1$ for $x \ne y$ and $d(x, x) = 0$. It induces the discrete topology.
See [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets).

**Discrete topology**
The topology in which every subset is open. Every function out of a discrete space is continuous.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Disjoint union**
The space $X \sqcup Y$ made of a copy of $X$ and a copy of $Y$ side by side, a set being open when its parts in $X$ and in $Y$ are open.
See [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing).

**Dual graph**
The graph with one vertex for each face of a plane graph and one edge across each edge. Colouring a map's countries is colouring its dual graph's vertices.
See [Chapter 3](03-Graphs-and-Planarity.md#35-the-four-colour-theorem-and-the-five-colour-theorem).

**Duality (of polyhedra)**
The correspondence that swaps faces and vertices of a polyhedron, putting a vertex in each face. The cube and octahedron are dual, as are the dodecahedron and icosahedron; the tetrahedron is self-dual.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#22-the-five-platonic-solids).

**Dyadic rational**
A number of the form $k/2^n$. Urysohn's lemma builds its function by choosing an open set for each dyadic rational in $[0, 1]$.
See [Chapter 9](09-Separation-and-Metrisation.md#93-urysohns-lemma).

**Dyck's theorem**
A handle and a crosscap together are the same as three crosscaps: $T \# \mathbb{RP}^2 \cong \mathbb{RP}^2 \# \mathbb{RP}^2 \# \mathbb{RP}^2$. It is why non-orientable surfaces need no handles in their normal form.
See [Chapter 10](10-Classification-of-Surfaces.md#103-connected-sum).

## E

**Edge**
A segment joining two vertices of a graph, or a side shared by two faces of a polyhedron.
See [Chapter 1](01-What-Topology-Is.md#12-the-bridges-of-konigsberg) and [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#21-eulers-formula-for-polyhedra).

**Eight model geometries**
Thurston's eight homogeneous 3-dimensional geometries, among them spherical, Euclidean and hyperbolic, which by geometrisation are the shapes the pieces of every 3-manifold take.
See [Chapter 19](19-The-Poincare-Conjecture.md#193-thurstons-geometrisation).

**Elliptisation conjecture**
The statement, part of geometrisation and now proved, that a closed 3-manifold with finite fundamental group is $S^3/\Gamma$ for a finite group $\Gamma$ of rotations.
See [Chapter 19](19-The-Poincare-Conjecture.md#193-thurstons-geometrisation).

**Embedding**
A continuous map that is a homeomorphism onto its image. A continuous one-to-one map from a compact space to a Hausdorff space is an embedding.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects) and [Chapter 5](05-Continuity-and-Homeomorphism.md#54-embeddings).

**End**
A point of a shape with index 1: a small neighbourhood of it is a single arm, as at the tips of the letter I.
See [Chapter 1](01-What-Topology-Is.md#13-letters-of-the-alphabet-up-to-deformation).

**Equicontinuous**
A family of functions on a metric space such that for each $\varepsilon > 0$ one $\delta$ works for every function in the family at once.
See [Chapter 8](08-Compactness.md#84-compactness-in-metric-spaces).

**Equivalence class**
The set $[x] = \{y : y \sim x\}$ of all elements related to $x$ by an equivalence relation. The classes form the quotient set.
See [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing).

**Equivalence relation**
A relation that is reflexive, symmetric and transitive. Its classes split the set into disjoint pieces.
See [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing).

**Equivalent knots**
Two knots that can be deformed into each other by an ambient isotopy of space.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group) and [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Euclidean metric**
The ordinary distance $d_2(x, y) = \sqrt{(x_1 - y_1)^2 + \cdots + (x_n - y_n)^2}$ on $\mathbb{R}^n$.
See [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets).

**Euler characteristic**
For a surface with a cell decomposition, $\chi = V - E + F$; for a graph, $\chi = V - E$; for a complex, the alternating sum of numbers of cells or of Betti numbers. It is a topological invariant, $2 - 2g$ for an orientable closed surface of genus $g$.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g), [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects) and [Chapter 16](16-Homology.md#165-euler-characteristic-and-betti-numbers).

**Euler circuit**
A closed walk in a graph using every edge exactly once. A connected graph has one exactly when every vertex has even degree.
See [Chapter 1](01-What-Topology-Is.md#12-the-bridges-of-konigsberg).

**Euler path**
A walk in a graph using every edge exactly once, also called an Euler trail. A connected graph has one exactly when it has zero or two vertices of odd degree.
See [Chapter 1](01-What-Topology-Is.md#12-the-bridges-of-konigsberg).

**Euler-Poincaré theorem**
The Euler characteristic of a finite complex, the alternating sum of the numbers of simplices, equals the alternating sum $\sum (-1)^n b_n$ of its Betti numbers. So it does not depend on the triangulation.
See [Chapter 16](16-Homology.md#165-euler-characteristic-and-betti-numbers).

**Euler's criterion (for graphs)**
A connected graph has an Euler circuit exactly when every vertex has even degree, and an Euler path exactly when it has at most two vertices of odd degree. It settles the bridges of Königsberg.
See [Chapter 1](01-What-Topology-Is.md#12-the-bridges-of-konigsberg).

**Euler's formula**
For a connected plane graph, or a convex polyhedron, $V - E + F = 2$.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#21-eulers-formula-for-polyhedra) and [Chapter 3](03-Graphs-and-Planarity.md#32-planar-graphs-and-eulers-formula).

**Evenly covered**
An open set $U$ of $B$ is evenly covered by $p: E \to B$ if $p^{-1}(U)$ is a disjoint union of open sets, the sheets, each mapped homeomorphically onto $U$.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#141-the-fundamental-group-of-the-circle) and [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Exotic $\mathbb{R}^4$**
A smooth manifold homeomorphic to $\mathbb{R}^4$ but not diffeomorphic to it. There are uncountably many; no $\mathbb{R}^n$ with $n \ne 4$ has any.
See [Chapter 20](20-Where-Topology-Goes.md#201-exotic-spheres-and-exotic-mathbbr4).

**Exotic sphere**
A smooth manifold homeomorphic to a sphere $S^n$ but not diffeomorphic to it. Milnor found the first in dimension 7 in 1956; $S^7$ has 28 smooth structures.
See [Chapter 11](11-Manifolds.md#113-smooth-manifolds), [Chapter 19](19-The-Poincare-Conjecture.md#192-higher-dimensions) and [Chapter 20](20-Where-Topology-Goes.md#201-exotic-spheres-and-exotic-mathbbr4).

**Exponent sum**
For a word in letters $a, b, \ldots$, the sum of the exponents of one letter. Exponent sums are unchanged by conjugation and give the abelianisation of a group.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Extreme value theorem**
A continuous real function on a compact space attains a maximum and a minimum.
See [Chapter 8](08-Compactness.md#83-compact-images-and-closed-subsets).

## F

**Face (of a polyhedron or plane graph)**
A region of a polyhedron's surface bounded by edges, or a region into which a plane graph cuts the plane, including the unbounded outer face.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#21-eulers-formula-for-polyhedra) and [Chapter 3](03-Graphs-and-Planarity.md#32-planar-graphs-and-eulers-formula).

**Face (of a simplex)**
A simplex spanned by some of the vertices of a given simplex. The faces of a triangle are its three edges, its three vertices and itself.
See [Chapter 16](16-Homology.md#162-simplicial-complexes).

**Fáry's theorem**
Every planar simple graph can be drawn in the plane with straight edges.
See [Chapter 3](03-Graphs-and-Planarity.md#34-kuratowskis-theorem).

**Fibre**
The preimage $p^{-1}(b)$ of a point under a map, especially a covering map. For a connected covering its size is the number of sheets.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Figure eight**
The wedge of two circles, a space like the figure 8. Its fundamental group is the free group on two generators.
See [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing) and [Chapter 15](15-Van-Kampen-and-Surfaces.md#153-fundamental-groups-of-graphs-and-surfaces).

**Figure-eight knot**
The prime knot with four crossings. It is amphichiral, and its determinant is 5.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Finer topology**
A topology $\mathcal{T}'$ is finer than $\mathcal{T}$ on the same set if $\mathcal{T} \subseteq \mathcal{T}'$: it has more open sets. The discrete topology is the finest of all.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Finite intersection property**
A family of sets has it if every finite subfamily has nonempty intersection. A space is compact exactly when every family of closed sets with this property has nonempty intersection.
See [Chapter 8](08-Compactness.md#81-open-covers).

**First countable**
A space in which every point has a countable family of open neighbourhoods such that every neighbourhood contains one of them. In such a space, sequences detect closure.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary).

**Five colour theorem**
Every planar graph can be properly coloured with five colours. Heawood proved it in 1890 from Kempe's flawed four colour argument.
See [Chapter 3](03-Graphs-and-Planarity.md#35-the-four-colour-theorem-and-the-five-colour-theorem).

**Fixed point**
A point $x$ with $f(x) = x$. A space has the fixed point property if every continuous map from it to itself has one.
See [Chapter 7](07-Connectedness.md#72-continuous-images-and-the-intermediate-value-theorem) and [Chapter 12](12-Homotopy.md#123-retractions).

**Four colour theorem**
Every planar graph, and so every map in the plane, can be properly coloured with four colours. Appel and Haken proved it with a computer in 1976.
See [Chapter 3](03-Graphs-and-Planarity.md#35-the-four-colour-theorem-and-the-five-colour-theorem).

**Fox $p$-colouring**
A labelling of the arcs of a knot diagram by integers mod a prime $p$ such that at each crossing twice the over-arc equals the sum of the two under-arcs, mod $p$. Tricolourings are the case $p = 3$.
See [Chapter 18](18-Knot-Theory.md#182-invariants-colourings-and-the-linking-number).

**Free group**
The group $F(S)$ of reduced words in the letters of a set $S$ and their inverses, multiplied by joining and reducing. A homomorphism out of it is fixed freely by saying where the generators go. It is the fundamental group of a wedge of circles.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Free product**
The group $G_1 * G_2$ of reduced words alternating between elements of $G_1$ and of $G_2$. It is the fundamental group of a wedge of two spaces with those groups.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Freudenthal suspension theorem**
The homotopy groups $\pi_{n+k}(S^n)$ stop changing as $n$ grows, once $n > k + 1$. The limits are the stable homotopy groups of spheres.
See [Chapter 20](20-Where-Topology-Goes.md#203-homotopy-groups-of-spheres).

**Functor**
A rule that assigns to each space an algebraic object and to each map a homomorphism, respecting identities and composition. The fundamental group and homology are functors, which is why they are topological invariants.
See [Chapter 13](13-The-Fundamental-Group.md#135-functoriality-induced-maps).

**Fundamental group**
The group $\pi_1(X, x_0)$ of path-homotopy classes of loops at $x_0$, with concatenation as product. It is a homotopy invariant; $\pi_1(S^1) \cong \mathbb{Z}$.
See [Chapter 12](12-Homotopy.md#121-homotopic-maps) and [Chapter 13](13-The-Fundamental-Group.md#132-the-group-axioms-up-to-homotopy).

**Fundamental theorem of algebra**
Every nonconstant complex polynomial has a root. A topological proof compares the winding numbers of large and small circles under the polynomial.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#143-the-fundamental-theorem-of-algebra).

## G

**Galois correspondence (for coverings)**
Connected coverings of a nice space $B$, up to isomorphism, correspond to subgroups of $\pi_1(B)$ up to conjugacy; the number of sheets is the index of the subgroup.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Gauss-Bonnet theorem**
For a closed surface, the total Gaussian curvature equals $2\pi\chi$. So the sign of the curvature a surface can carry everywhere is the sign of its Euler characteristic.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g), [Chapter 10](10-Classification-of-Surfaces.md#105-euler-characteristic-and-orientability-determine-a-closed-surface) and [Chapter 20](20-Where-Topology-Goes.md#204-topology-in-physics).

**Generalised Poincaré conjecture**
A closed $n$-manifold homotopy equivalent to $S^n$ is homeomorphic to $S^n$. Smale proved it for $n \ge 5$, Freedman for $n = 4$, and Perelman for $n = 3$.
See [Chapter 19](19-The-Poincare-Conjecture.md#192-higher-dimensions).

**Generator**
One of the letters of a presentation $\langle S \mid R \rangle$, or more generally one of a set of elements from which every element of a group can be built.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Genus**
The number of handles of an orientable closed surface: 0 for the sphere, 1 for the torus. The Euler characteristic is $2 - 2g$.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g), [Chapter 10](10-Classification-of-Surfaces.md#103-connected-sum) and [Chapter 10](10-Classification-of-Surfaces.md#105-euler-characteristic-and-orientability-determine-a-closed-surface).

**Geometrisation conjecture**
Thurston's statement that every closed orientable 3-manifold can be cut along spheres and incompressible tori into pieces each carrying one of eight model geometries. Perelman proved it, and the Poincaré conjecture with it.
See [Chapter 11](11-Manifolds.md#115-3-manifolds-the-shape-of-space) and [Chapter 19](19-The-Poincare-Conjecture.md#193-thurstons-geometrisation).

**Girth**
The length of the shortest cycle in a graph. A planar graph of girth $k$ has few edges, which is how $K_{3,3}$ is shown not planar.
See [Chapter 3](03-Graphs-and-Planarity.md#32-planar-graphs-and-eulers-formula).

**Graph**
A set of vertices with a set of edges, each joining two vertices. Seen as a space, a graph is a union of points and arcs.
See [Chapter 1](01-What-Topology-Is.md#12-the-bridges-of-konigsberg) and [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects).

**Graph map**
The map $x \mapsto (x, g(x))$ from $X$ to $X \times Y$ for a continuous $g: X \to Y$. It is an embedding of $X$ onto the graph of $g$.
See [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology).

## H

**Hairy ball theorem**
An even-dimensional sphere has no continuous nowhere-zero tangent vector field: you cannot comb a hairy ball flat. On Earth, the wind is calm somewhere.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#172-the-hairy-ball-theorem).

**Haken manifold**
A compact irreducible 3-manifold containing an incompressible surface. Thurston proved geometrisation for these before the general case.
See [Chapter 19](19-The-Poincare-Conjecture.md#193-thurstons-geometrisation).

**Ham sandwich theorem**
Any $n$ bounded measurable sets in $\mathbb{R}^n$ can be cut in half simultaneously by one hyperplane. It follows from the Borsuk-Ulam theorem.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#175-borsuk-ulam-and-the-ham-sandwich).

**Handle**
A thickened disc $D^k \times D^{n-k}$ attached to a manifold along $\partial D^k \times D^{n-k}$. Every smooth closed manifold is built from a ball by attaching handles.
See [Chapter 19](19-The-Poincare-Conjecture.md#192-higher-dimensions).

**Hausdorff dimension**
A dimension defined from how many small sets are needed to cover a space, which can be a fraction. It is not a topological invariant: the Koch snowflake has Hausdorff dimension about 1.26.
See [Chapter 11](11-Manifolds.md#114-the-dimension-question).

**Hausdorff space**
A space in which any two different points have disjoint open neighbourhoods, also called T2. In a Hausdorff space limits of sequences are unique.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology) and [Chapter 9](09-Separation-and-Metrisation.md#91-hausdorff-spaces-and-why-we-want-them).

**h-cobordism theorem**
Smale's theorem that a simply connected h-cobordism between manifolds of dimension at least 5 is a product. It proves the Poincaré conjecture in dimensions 5 and up.
See [Chapter 19](19-The-Poincare-Conjecture.md#192-higher-dimensions).

**Heawood's bound**
The number of colours needed for maps on a closed surface of Euler characteristic $\chi \le 0$ is at most $\lfloor (7 + \sqrt{49 - 24\chi})/2 \rfloor$: seven for the torus.
See [Chapter 3](03-Graphs-and-Planarity.md#36-graphs-on-a-torus-seven-colours-and-heawoods-bound).

**Heine-Borel theorem**
A subset of $\mathbb{R}^n$ is compact exactly when it is closed and bounded.
See [Chapter 8](08-Compactness.md#82-the-heine-borel-theorem).

**Heine-Cantor theorem**
A continuous map from a compact metric space to a metric space is uniformly continuous.
See [Chapter 8](08-Compactness.md#83-compact-images-and-closed-subsets).

**Higher homotopy group**
The group $\pi_n(X)$ of homotopy classes of maps $S^n \to X$ sending a base point to a base point. For $n \ge 2$ it is abelian.
See [Chapter 16](16-Homology.md#161-why-another-invariant) and [Chapter 20](20-Where-Topology-Goes.md#203-homotopy-groups-of-spheres).

**Hilbert cube**
The product $[0, 1]^{\mathbb{N}}$ of countably many intervals, compact by Tychonoff. Every compact metric space embeds in it.
See [Chapter 8](08-Compactness.md#85-tychonoffs-theorem) and [Chapter 9](09-Separation-and-Metrisation.md#94-urysohns-metrisation-theorem).

**Hilbert-Smith conjecture**
The conjecture that no $p$-adic group acts faithfully on a manifold. Pardon proved it in dimension 3 in 2013.
See [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Homeomorphic**
Two spaces are homeomorphic if there is a homeomorphism between them, written $X \cong Y$. This is topology's "the same".
See [Chapter 1](01-What-Topology-Is.md#15-what-the-same-will-mean) and [Chapter 5](05-Continuity-and-Homeomorphism.md#52-homeomorphisms).

**Homeomorphism**
A continuous bijection whose inverse is also continuous: a deformation of one space onto another with no tearing or gluing.
See [Chapter 1](01-What-Topology-Is.md#11-the-rubber-sheet-idea) and [Chapter 5](05-Continuity-and-Homeomorphism.md#52-homeomorphisms).

**Homogeneous coordinates**
The notation $[x_0 : \cdots : x_n]$ for the point of $\mathbb{RP}^n$ given by the line through $(x_0, \ldots, x_n)$; scaling all coordinates gives the same point.
See [Chapter 11](11-Manifolds.md#112-examples).

**Homologous**
Two $n$-cycles are homologous if their difference is a boundary. They then give the same homology class.
See [Chapter 16](16-Homology.md#163-chains-boundaries-and-cycles).

**Homology group**
The group $H_n = Z_n / B_n$ of $n$-cycles modulo $n$-boundaries. It counts $n$-dimensional holes: $H_0$ counts components, $H_1$ is the abelianised fundamental group of a path-connected space.
See [Chapter 5](05-Continuity-and-Homeomorphism.md#53-topological-invariants) and [Chapter 16](16-Homology.md#163-chains-boundaries-and-cycles).

**Homotopic**
Two maps $f, g: X \to Y$ are homotopic if one can be continuously deformed into the other through a homotopy.
See [Chapter 12](12-Homotopy.md#121-homotopic-maps).

**Homotopy**
A continuous map $H: X \times [0, 1] \to Y$, thought of as a family of maps $H(\cdot, t)$ moving from $f = H(\cdot, 0)$ to $g = H(\cdot, 1)$.
See [Chapter 12](12-Homotopy.md#121-homotopic-maps).

**Homotopy class**
The set of all maps homotopic to a given map, or of all paths path-homotopic to a given path.
See [Chapter 12](12-Homotopy.md#121-homotopic-maps) and [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition).

**Homotopy equivalence**
A map $f: X \to Y$ with a homotopy inverse $g: Y \to X$, meaning $g \circ f$ and $f \circ g$ are homotopic to the identities. Spaces related this way are homotopy equivalent, or have the same homotopy type.
See [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces).

**Homotopy invariant**
A property or quantity that is the same for homotopy equivalent spaces, such as the fundamental group, homology and the Euler characteristic.
See [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces).

**Homotopy lifting**
For a covering map, a homotopy of paths in the base lifts uniquely to a homotopy upstairs once the starting lift is chosen. It is how the covering of the circle computes $\pi_1(S^1)$.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#141-the-fundamental-group-of-the-circle) and [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Homotopy type**
The class of all spaces homotopy equivalent to a given space. The letters of the alphabet have three homotopy types: a point, a circle and a figure eight.
See [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces).

**Hopf fibration**
The map $H: S^3 \to S^2$ whose fibres are circles, any two of them linked once. It is not null-homotopic, so $\pi_3(S^2)$ is not trivial.
See [Chapter 20](20-Where-Topology-Goes.md#203-homotopy-groups-of-spheres).

**Hopf invariant**
For a smooth map $f: S^3 \to S^2$, the linking number of the preimages of two different regular values. The Hopf map has Hopf invariant 1.
See [Chapter 20](20-Where-Topology-Goes.md#203-homotopy-groups-of-spheres).

**Hopf invariant one problem**
Which spheres $S^n$ admit maps $S^{2n-1} \to S^n$ of Hopf invariant one? Adams showed in 1960 that only $n = 2, 4, 8$ do.
See [Chapter 20](20-Where-Topology-Goes.md#203-homotopy-groups-of-spheres).

**Hopf trace formula**
For a map of a finite complex, the alternating sum of the traces on the chain groups equals the alternating sum of the traces on homology. It proves the Lefschetz fixed point theorem.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#174-the-lefschetz-fixed-point-theorem).

**Hopf's theorem (on degree)**
Two maps $S^n \to S^n$ are homotopic exactly when they have the same degree.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#173-the-degree-of-a-map).

**Hurewicz theorem**
For a path-connected space, $H_1$ is the abelianisation of $\pi_1$. The higher version links the first nonzero homotopy and homology groups of a simply connected space.
See [Chapter 16](16-Homology.md#166-homology-and-homotopy).

**Hyperbolic**
Having constant curvature $-1$. Closed surfaces with $\chi < 0$ are hyperbolic, and by geometrisation most 3-manifolds are.
See [Chapter 19](19-The-Poincare-Conjecture.md#193-thurstons-geometrisation).

## I

**Incompressible surface**
A surface in a 3-manifold whose fundamental group injects into that of the manifold, so its loops cannot be squeezed to points through the manifold. Geometrisation cuts along incompressible tori.
See [Chapter 19](19-The-Poincare-Conjecture.md#193-thurstons-geometrisation).

**Independent cycles**
The cycles of a graph that close up as each edge outside a spanning tree is added back. Their number is the cycle rank.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects).

**Index (of a point)**
A point of a shape has index $k$ if a small neighbourhood of it looks like a star with $k$ arms: ends have index 1, points inside a stroke index 2, branch points 3 or more.
See [Chapter 1](01-What-Topology-Is.md#13-letters-of-the-alphabet-up-to-deformation).

**Index (of a vector field zero)**
The degree of the direction of a vector field on a small circle around an isolated zero. The Poincaré-Hopf theorem says the indices add up to the Euler characteristic.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#172-the-hairy-ball-theorem).

**Indiscrete topology**
The topology on a set whose only open sets are the empty set and the whole set, also called the trivial topology.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Induced homomorphism**
The homomorphism $f_*: \pi_1(X, x_0) \to \pi_1(Y, f(x_0))$ given by $f_*[\gamma] = [f \circ \gamma]$, and its analogue on homology. It satisfies $(g \circ f)_* = g_* \circ f_*$ and $\mathrm{id}_* = \mathrm{id}$.
See [Chapter 13](13-The-Fundamental-Group.md#135-functoriality-induced-maps).

**Inductive dimension**
A dimension defined by induction: a space has dimension at most $n$ if every point has small neighbourhoods whose boundaries have dimension at most $n - 1$.
See [Chapter 11](11-Manifolds.md#114-the-dimension-question).

**Interior**
The largest open set inside a set $A$, written $\operatorname{int} A$: the union of all open sets contained in $A$.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary).

**Interior (of a manifold with boundary)**
The points of a manifold with boundary that have neighbourhoods homeomorphic to $\mathbb{R}^n$.
See [Chapter 10](10-Classification-of-Surfaces.md#106-surfaces-with-boundary).

**Intermediate value theorem**
A continuous real function on an interval takes every value between any two of its values. It holds because intervals are connected.
See [Chapter 7](07-Connectedness.md#72-continuous-images-and-the-intermediate-value-theorem).

**Intrinsic and extrinsic**
Intrinsic questions ask about a space alone (is $X$ homeomorphic to $Y$?); extrinsic questions ask how it sits inside a larger space (can one embedding be moved to another?).
See [Chapter 1](01-What-Topology-Is.md#15-what-the-same-will-mean).

**Invariance of dimension**
If $m \ne n$, no nonempty open subset of $\mathbb{R}^m$ is homeomorphic to an open subset of $\mathbb{R}^n$. Brouwer proved it from invariance of domain; it makes the dimension of a manifold well defined.
See [Chapter 11](11-Manifolds.md#114-the-dimension-question).

**Invariance of domain**
Brouwer's theorem that a continuous one-to-one map from an open set of $\mathbb{R}^n$ to $\mathbb{R}^n$ has open image. It implies that $\mathbb{R}^m$ and $\mathbb{R}^n$ are not homeomorphic for $m \ne n$.
See [Chapter 11](11-Manifolds.md#114-the-dimension-question).

**Isolated point**
A point $x$ with $\{x\}$ open. Their number is a topological invariant.
See [Chapter 5](05-Continuity-and-Homeomorphism.md#53-topological-invariants).

**Isomorphism problem**
The problem of deciding, from two finite presentations, whether the groups are isomorphic. Like the word problem it is unsolvable in general.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#155-the-word-problem).

**Isotopy**
A continuous family of embeddings, moving one embedding of a space to another without passing through itself.
See [Chapter 1](01-What-Topology-Is.md#15-what-the-same-will-mean).

## J

**Jones polynomial**
A Laurent polynomial invariant of oriented knots and links found by Vaughan Jones in 1984, computed from the Kauffman bracket and the writhe. It tells the trefoil from its mirror image.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Jordan curve theorem**
A simple closed curve in the plane separates it into exactly two components, a bounded inside and an unbounded outside, and is the boundary of each.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem).

**Jordan-Schoenflies theorem**
The inside of a simple closed curve in the plane, together with the curve, is homeomorphic to a closed disc.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem).

## K

**Kempe chain**
In a coloured graph, a maximal connected set of vertices using only two given colours. Swapping the two colours on it keeps the colouring proper.
See [Chapter 3](03-Graphs-and-Planarity.md#35-the-four-colour-theorem-and-the-five-colour-theorem).

**Kervaire invariant problem**
The question in which dimensions certain elements of the stable homotopy groups of spheres exist. Hill, Hopkins and Ravenel settled it in all dimensions except 126.
See [Chapter 20](20-Where-Topology-Goes.md#203-homotopy-groups-of-spheres).

**Khovanov homology**
A homology theory of knots whose Euler characteristic is the Jones polynomial. It detects the unknot.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Klein bottle**
The closed non-orientable surface made from a square by gluing one pair of opposite sides the same way and the other pair with a flip, word $abab^{-1}$. It cannot be embedded in $\mathbb{R}^3$, and $\chi = 0$.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#25-the-klein-bottle-and-the-projective-plane) and [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing).

**Knot**
A subset of $\mathbb{R}^3$ (or $S^3$) homeomorphic to a circle, considered up to ambient isotopy.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group) and [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Knot diagram**
A regular projection of a knot to a plane, with each crossing marked to show which strand is on top.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Knot group**
The fundamental group of the complement of a knot in space. Equivalent knots have isomorphic knot groups; the unknot's is $\mathbb{Z}$.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group) and [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Koch snowflake**
A fractal simple closed curve made by repeatedly adding triangular bumps to the sides of a triangle. It has infinite length yet bounds a finite area.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem).

**K-topology**
The topology on $\mathbb{R}$ with basis the open intervals and the sets $(a, b) \setminus K$, where $K = \{1/n\}$. It is Hausdorff but not regular.
See [Chapter 9](09-Separation-and-Metrisation.md#92-regular-and-normal-spaces).

**Kuratowski's theorem**
A graph is planar exactly when it contains no subdivision of $K_5$ or $K_{3,3}$.
See [Chapter 3](03-Graphs-and-Planarity.md#34-kuratowskis-theorem).

## L

**Lebesgue number**
For an open cover of a compact metric space, a number $\delta > 0$ such that every set of diameter less than $\delta$ lies inside one member of the cover.
See [Chapter 8](08-Compactness.md#83-compact-images-and-closed-subsets) and [Chapter 14](14-The-Circle-and-Covering-Spaces.md#141-the-fundamental-group-of-the-circle).

**Lefschetz fixed point theorem**
For a map $f$ of a finite complex (or a compact triangulable space), if the Lefschetz number $L(f) \ne 0$ then $f$ has a fixed point.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#174-the-lefschetz-fixed-point-theorem).

**Lefschetz number**
The number $L(f) = \sum_k (-1)^k \operatorname{tr}(f_* \text{ on } H_k(X; \mathbb{Q}))$. For the identity it is the Euler characteristic.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#174-the-lefschetz-fixed-point-theorem).

**Lens space**
The 3-manifold $L(p, q)$, the quotient of $S^3$ by a rotation of order $p$. It has fundamental group $\mathbb{Z}/p$; $L(2, 1) = \mathbb{RP}^3$.
See [Chapter 11](11-Manifolds.md#115-3-manifolds-the-shape-of-space) and [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Lift**
For a covering $p: E \to B$, a lift of $f: Y \to B$ is a map $\tilde f: Y \to E$ with $p \circ \tilde f = f$.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#141-the-fundamental-group-of-the-circle).

**Lifting criterion**
A map $f: Y \to B$ from a nice connected space lifts to a covering $E$ exactly when $f_*\pi_1(Y)$ lies in $p_*\pi_1(E)$. In particular every map from a simply connected space lifts.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Limit point**
A point $x$ is a limit point of $A$ if every open set around $x$ meets $A$ in a point other than $x$. The closure of $A$ is $A$ together with its limit points.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary).

**Link**
A finite collection of disjoint knots, its components.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Linking number**
For a two-component oriented link, half the sum of the signs of the crossings between the two components. It is an invariant: the Hopf link has linking number $\pm 1$.
See [Chapter 18](18-Knot-Theory.md#182-invariants-colourings-and-the-linking-number) and [Chapter 18](18-Knot-Theory.md#184-knots-in-dna-and-chemistry).

**Locally compact**
A space in which every point has an open neighbourhood contained in a compact set. A Hausdorff space has a Hausdorff one-point compactification exactly when it is locally compact.
See [Chapter 8](08-Compactness.md#86-the-one-point-compactification).

**Locally path connected**
A space in which every neighbourhood of a point contains a path-connected open neighbourhood. In such a space components and path components coincide.
See [Chapter 7](07-Connectedness.md#73-path-connectedness).

**Long line**
Two copies of the long ray glued at their ends: a connected Hausdorff space that is locally like $\mathbb{R}$ yet not a manifold, since it is not second countable.
See [Chapter 9](09-Separation-and-Metrisation.md#95-strange-spaces).

**Long ray**
The set $\omega_1 \times [0, 1)$ in the dictionary order topology (the closed long ray), or that set without its first point (the open long ray): uncountably many intervals laid end to end.
See [Chapter 9](09-Separation-and-Metrisation.md#95-strange-spaces).

**Loop**
A path that starts and ends at the same point, the base point. In a graph, a loop is an edge from a vertex to itself.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects) and [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition).

**Lower limit topology**
The topology on $\mathbb{R}$ with basis the half-open intervals $[a, b)$. With it $\mathbb{R}$ is the Sorgenfrey line.
See [Chapter 4](04-Topological-Spaces.md#44-bases).

**Lusternik-Schnirelmann theorem**
If the sphere is covered by three closed sets, one of them contains a pair of antipodal points. It follows from the Borsuk-Ulam theorem in dimension 2.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#145-the-borsuk-ulam-theorem-in-two-dimensions).

## M

**Manifold**
A topological $n$-manifold is a Hausdorff, second countable space in which every point has a neighbourhood homeomorphic to $\mathbb{R}^n$. Curves are 1-manifolds and surfaces 2-manifolds.
See [Chapter 11](11-Manifolds.md#111-locally-like-mathbbrn).

**Manifold with boundary**
A space locally like the half-space $\{x_n \ge 0\}$ in $\mathbb{R}^n$, such as a disc or a solid ball. Its boundary is the set of points on the edge.
See [Chapter 10](10-Classification-of-Surfaces.md#106-surfaces-with-boundary) and [Chapter 11](11-Manifolds.md#111-locally-like-mathbbrn).

**Mapping cylinder**
The space $M_f$ made by gluing the end $X \times \{1\}$ of a cylinder $X \times [0, 1]$ to $Y$ by $f$. It deformation retracts onto $Y$.
See [Chapter 12](12-Homotopy.md#124-deformation-retracts).

**Maximum metric**
The metric $d_\infty(x, y) = \max_i |x_i - y_i|$ on $\mathbb{R}^n$. It gives the same open sets as the Euclidean metric.
See [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets).

**Mayer-Vietoris sequence**
A long exact sequence that computes the homology of $A \cup B$ from those of $A$, $B$ and $A \cap B$: the homology analogue of the Seifert-van Kampen theorem.
See [Chapter 16](16-Homology.md#166-homology-and-homotopy).

**Meridian**
For a knot, a small loop going once around the knot, generating the knot group up to conjugacy. For a curve in the plane, a test line used to count crossings.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem) and [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group).

**Metric**
A distance function $d$ on a set with $d(x, y) \ge 0$, equal to 0 exactly when $x = y$, symmetric, and satisfying the triangle inequality.
See [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets).

**Metric space**
A set with a metric. Its open sets, unions of open balls, form the metric topology.
See [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets).

**Metric topology**
The topology on a metric space whose open sets are the unions of open balls.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Metrisable**
A topological space whose topology comes from some metric. Metrisable spaces are Hausdorff and normal.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology) and [Chapter 9](09-Separation-and-Metrisation.md#94-urysohns-metrisation-theorem).

**Minor**
A graph obtained from a subgraph by contracting edges. Wagner's theorem: a graph is planar exactly when neither $K_5$ nor $K_{3,3}$ is a minor.
See [Chapter 3](03-Graphs-and-Planarity.md#34-kuratowskis-theorem).

**Möbius strip**
The surface made from a strip by gluing its ends with a half twist. It has one side and one edge, and is the simplest non-orientable surface. Also called the Möbius band.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#24-the-mobius-strip-and-one-sidedness), [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing) and [Chapter 10](10-Classification-of-Surfaces.md#102-orientability).

**Moment curve**
The curve $t \mapsto (t, t^2, t^3)$ in $\mathbb{R}^3$. Putting vertices on it shows every graph embeds in $\mathbb{R}^3$ with straight edges.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects).

**Multiple edges**
Two or more edges joining the same pair of vertices of a graph. A simple graph has none, and no loops.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects).

## N

**Nagata-Smirnov metrisation theorem**
A space is metrisable exactly when it is regular and has a countably locally finite basis.
See [Chapter 9](09-Separation-and-Metrisation.md#94-urysohns-metrisation-theorem).

**Neck pinch**
A singularity of Ricci flow where a thin neck between two bulbs of a 3-manifold shrinks to a point. Perelman's surgery cuts there and caps the ends.
See [Chapter 19](19-The-Poincare-Conjecture.md#194-ricci-flow-and-perelmans-proof).

**Necklace splitting theorem**
A necklace with beads of $k$ colours, each appearing an even number of times, can be shared fairly between two thieves using at most $k$ cuts. Alon proved it with the Borsuk-Ulam theorem.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#175-borsuk-ulam-and-the-ham-sandwich).

**Nielsen-Schreier theorem**
Every subgroup of a free group is free. It follows because covering spaces of graphs are graphs.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#153-fundamental-groups-of-graphs-and-surfaces).

**Non-orientable**
A surface containing a Möbius band, so that some loop reverses clockwise. The Klein bottle and the projective plane are non-orientable.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#24-the-mobius-strip-and-one-sidedness) and [Chapter 10](10-Classification-of-Surfaces.md#102-orientability).

**Normal closure**
The smallest normal subgroup of a group containing a given set of elements. A presentation's group is the free group modulo the normal closure of its relators.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Normal form (of a surface word)**
One of the standard words $aa^{-1}$ (sphere), $a_1b_1a_1^{-1}b_1^{-1} \cdots a_gb_ga_g^{-1}b_g^{-1}$ (genus $g$) or $a_1a_1 \cdots a_ka_k$ ($k$ crosscaps), to which every labelled polygon can be reduced.
See [Chapter 10](10-Classification-of-Surfaces.md#104-the-classification-theorem).

**Normal space**
A T1 space in which any two disjoint closed sets have disjoint open neighbourhoods, also called T4. Metric spaces and compact Hausdorff spaces are normal.
See [Chapter 9](09-Separation-and-Metrisation.md#92-regular-and-normal-spaces).

**Normal surface**
A surface in a triangulated 3-manifold meeting each tetrahedron in triangles and quadrilaterals. Haken's normal surfaces give an algorithm to recognise the unknot.
See [Chapter 18](18-Knot-Theory.md#185-how-hard-is-it-to-recognise-the-unknot).

**NP and co-NP**
The classes of decision problems whose yes-answers, or no-answers, have certificates checkable in polynomial time. Unknot recognition lies in both.
See [Chapter 18](18-Knot-Theory.md#185-how-hard-is-it-to-recognise-the-unknot).

**Null-homotopic**
A map homotopic to a constant map.
See [Chapter 12](12-Homotopy.md#121-homotopic-maps).

## O

**Odd map**
A map of spheres with $f(-x) = -f(x)$. An odd map $S^n \to S^n$ has odd degree, which proves the Borsuk-Ulam theorem.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#145-the-borsuk-ulam-theorem-in-two-dimensions) and [Chapter 17](17-Applications-of-Algebraic-Topology.md#175-borsuk-ulam-and-the-ham-sandwich).

**One-point compactification**
The space $X^\ast = X \cup \{\infty\}$ whose open sets are those of $X$ and the complements of compact closed subsets of $X$ with $\infty$ added. The one-point compactification of $\mathbb{R}^n$ is $S^n$.
See [Chapter 8](08-Compactness.md#86-the-one-point-compactification) and [Chapter 11](11-Manifolds.md#112-examples).

**Open ball**
In a metric space, the set $B(x, r) = \{y : d(x, y) < r\}$ of points closer than $r$ to $x$.
See [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets).

**Open cover**
A collection of open sets whose union is the whole space (or contains a given set). A subcollection that still covers is a subcover.
See [Chapter 8](08-Compactness.md#81-open-covers).

**Open map**
A map that sends open sets to open sets. Projections from products are open, and homeomorphisms are exactly the open continuous bijections.
See [Chapter 5](05-Continuity-and-Homeomorphism.md#52-homeomorphisms) and [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology).

**Open neighbourhood**
An open set containing a given point.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Open set**
In a metric space, a set containing an open ball around each of its points; in general, a member of the chosen topology.
See [Chapter 1](01-What-Topology-Is.md#15-what-the-same-will-mean), [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets) and [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Order topology**
The topology on an ordered set generated by the open rays $\{x < a\}$ and $\{x > a\}$. On $\mathbb{R}$ it is the usual topology.
See [Chapter 4](04-Topological-Spaces.md#44-bases).

**Orientable**
A surface in which no closed path reverses clockwise; equivalently, one that contains no Möbius band. The sphere and tori are orientable.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#24-the-mobius-strip-and-one-sidedness) and [Chapter 10](10-Classification-of-Surfaces.md#102-orientability).

**Orientation (of a knot)**
A chosen direction of travel along a knot. With it each crossing gets a sign, used for the writhe and the linking number.
See [Chapter 18](18-Knot-Theory.md#182-invariants-colourings-and-the-linking-number).

**Orientation (of a simplex)**
A choice of ordering of the vertices of a simplex up to even permutations. Swapping two vertices reverses it, which is what the signs in the boundary map record.
See [Chapter 16](16-Homology.md#162-simplicial-complexes).

**Orientation-reversing loop**
A loop on a surface along which a small circle with a direction comes back with the opposite direction, as around the core of a Möbius strip.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#24-the-mobius-strip-and-one-sidedness).

**Outer face**
The unbounded face of a plane graph.
See [Chapter 3](03-Graphs-and-Planarity.md#32-planar-graphs-and-eulers-formula).

## P

**Parity**
Whether a number is even or odd. A point is inside a polygon when a ray from it crosses the polygon an odd number of times.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem).

**Partition of unity**
A family of continuous functions to $[0, 1]$ that add up to 1, each vanishing outside a chosen open set. Urysohn's lemma provides them on normal spaces.
See [Chapter 9](09-Separation-and-Metrisation.md#93-urysohns-lemma).

**Pasting lemma**
If $X = A \cup B$ with $A$ and $B$ closed (or both open), and continuous maps on $A$ and on $B$ agree on $A \cap B$, they glue to a continuous map on $X$.
See [Chapter 5](05-Continuity-and-Homeomorphism.md#51-continuity-as-preimages-of-open-sets), [Chapter 12](12-Homotopy.md#121-homotopic-maps) and [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition).

**Path**
A continuous map $\gamma: [0, 1] \to X$, starting at $\gamma(0)$ and ending at $\gamma(1)$.
See [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology), [Chapter 7](07-Connectedness.md#73-path-connectedness) and [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition).

**Path class**
The set of all paths path homotopic to a given path, written $[\gamma]$. Path classes of loops are the elements of the fundamental group.
See [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition).

**Path component**
A maximal path-connected subset of a space. The path components of $X$ correspond to the elements of $H_0(X)$.
See [Chapter 7](07-Connectedness.md#74-components).

**Path connected**
A space in which any two points are joined by a path. Path-connected spaces are connected; the topologist's sine curve is connected but not path connected.
See [Chapter 7](07-Connectedness.md#73-path-connectedness).

**Path homotopy**
A homotopy between two paths that keeps both endpoints fixed throughout. Paths related this way are path homotopic.
See [Chapter 12](12-Homotopy.md#121-homotopic-maps) and [Chapter 13](13-The-Fundamental-Group.md#131-loops-and-their-composition).

**Path lifting**
For a covering map, every path in the base lifts uniquely to a path upstairs starting at any chosen point over its start.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#141-the-fundamental-group-of-the-circle) and [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**PD code**
A way to store a knot diagram as a list: number the edges $1, \ldots, 2n$ along the knot and record each crossing as its four edge numbers.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Perfect group**
A group equal to its commutator subgroup, so its abelianisation is trivial. The binary icosahedral group is perfect, which is why the Poincaré homology sphere has the homology of $S^3$.
See [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Persistent homology**
A method of topological data analysis that computes homology of a point cloud at every scale at once and records the births and deaths of features as a barcode.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#176-topological-data-analysis-and-persistent-homology).

**Petersen graph**
A 3-regular graph with 10 vertices and 15 edges and girth 5. It is not planar.
See [Chapter 3](03-Graphs-and-Planarity.md#33-k_5-and-k_33-are-not-planar).

**Plain pair and twisted pair**
In a word for a labelled polygon, a letter appearing as $a \ldots a^{-1}$ is a plain pair, and as $a \ldots a$ a twisted pair. A twisted pair makes a Möbius band, so the surface is non-orientable.
See [Chapter 10](10-Classification-of-Surfaces.md#102-orientability).

**Planar graph**
A graph that can be drawn in the plane with no edges crossing. Such a drawing is a plane graph.
See [Chapter 3](03-Graphs-and-Planarity.md#32-planar-graphs-and-eulers-formula).

**Plane graph**
A graph drawn in the plane with no edges crossing. It cuts the plane into faces.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#21-eulers-formula-for-polyhedra) and [Chapter 3](03-Graphs-and-Planarity.md#32-planar-graphs-and-eulers-formula).

**Platonic solid**
A convex regular polyhedron: the tetrahedron, cube, octahedron, dodecahedron or icosahedron. Euler's formula shows there are no others.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#22-the-five-platonic-solids).

**Poincaré conjecture**
Every closed, simply connected 3-manifold is homeomorphic to the 3-sphere. Poincaré asked it in 1904 and Perelman proved it in 2002 to 2003 with Ricci flow.
See [Chapter 11](11-Manifolds.md#115-3-manifolds-the-shape-of-space) and [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Poincaré homology sphere**
A closed 3-manifold with the same homology as $S^3$ but fundamental group the binary icosahedral group of order 120. It made Poincaré add the fundamental group to his conjecture.
See [Chapter 11](11-Manifolds.md#115-3-manifolds-the-shape-of-space), [Chapter 16](16-Homology.md#166-homology-and-homotopy) and [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Poincaré-Hopf theorem**
For a vector field with isolated zeros on a closed manifold, the sum of the indices of the zeros equals the Euler characteristic.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#172-the-hairy-ball-theorem).

**Point cloud**
A finite set of points in a metric space, the raw input of topological data analysis.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#176-topological-data-analysis-and-persistent-homology).

**Polygon**
A closed path of straight segments in the plane that does not cross itself.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem).

**Polyhedron**
A solid bounded by flat polygonal faces, meeting in edges and vertices. In Chapter 16, the space $|K|$ of a simplicial complex.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#21-eulers-formula-for-polyhedra) and [Chapter 16](16-Homology.md#162-simplicial-complexes).

**Preimage**
For $f: X \to Y$ and $V \subseteq Y$, the set $f^{-1}(V) = \{x : f(x) \in V\}$. Preimages respect unions, intersections and complements, which is why continuity is defined with them.
See [Chapter 5](05-Continuity-and-Homeomorphism.md#51-continuity-as-preimages-of-open-sets).

**Presentation**
A description $\langle S \mid R \rangle$ of a group by generators $S$ and relators $R$: the free group on $S$ modulo the normal closure of $R$.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Prime 3-manifold**
A 3-manifold that is not a connected sum except trivially with $S^3$. Every closed orientable 3-manifold is a connected sum of primes.
See [Chapter 19](19-The-Poincare-Conjecture.md#193-thurstons-geometrisation).

**Prime knot**
A non-trivial knot that is not a connected sum of two non-trivial knots. Every knot is a connected sum of prime knots in essentially one way.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Product topology**
The topology on a product $\prod X_i$ generated by the sets $\pi_i^{-1}(U)$ for $U$ open in $X_i$. For two factors its basis is the open rectangles $U \times V$; it is the coarsest topology making all projections continuous.
See [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology).

**Projection**
The map $\pi_i: \prod X_j \to X_i$ that keeps the $i$-th coordinate. Projections are continuous and open.
See [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology).

**Projective plane**
The closed non-orientable surface $\mathbb{RP}^2$: the space of lines through the origin in $\mathbb{R}^3$, a sphere with antipodal points glued, or a disc with opposite rim points glued (word $abab$). $\chi = 1$ and $\pi_1 = \mathbb{Z}/2$.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#25-the-klein-bottle-and-the-projective-plane), [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing) and [Chapter 15](15-Van-Kampen-and-Surfaces.md#153-fundamental-groups-of-graphs-and-surfaces).

## Q

**Quotient map**
A surjective map $q: X \to Y$ such that a set $V \subseteq Y$ is open exactly when $q^{-1}(V)$ is open.
See [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing).

**Quotient topology**
The finest topology on a quotient set making the quotient map continuous: a set of classes is open when the union of its classes is open. It makes gluing precise.
See [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing).

## R

**Radó's theorem**
Every surface can be triangulated. It is the foundation of the combinatorial classification of surfaces.
See [Chapter 10](10-Classification-of-Surfaces.md#104-the-classification-theorem).

**Rank (of a free group)**
The number of generators of a free group $F_n$. Free groups of different ranks are not isomorphic.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Real projective space**
The space $\mathbb{RP}^n$ of lines through the origin in $\mathbb{R}^{n+1}$, equivalently $S^n$ with antipodal points glued. It is an $n$-manifold.
See [Chapter 6](06-Building-New-Spaces.md#64-spheres-as-quotients-of-discs) and [Chapter 11](11-Manifolds.md#112-examples).

**Reduced word**
A word in which no letter stands next to its own inverse. Every word reduces to a unique reduced word.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Reducible configuration**
A configuration of a plane graph that cannot occur in a smallest counterexample to the four colour theorem, because any colouring of the rest extends.
See [Chapter 3](03-Graphs-and-Planarity.md#35-the-four-colour-theorem-and-the-five-colour-theorem).

**Refinement (of a decomposition)**
A cell decomposition obtained from another by subdividing its cells. Any two decompositions of a surface have a common refinement, which is why the Euler characteristic is well defined.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g).

**Regular polyhedron**
A polyhedron whose faces are all the same regular polygon, with the same number meeting at each vertex.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#22-the-five-platonic-solids).

**Regular projection**
A projection of a knot with only finitely many double points, no triple points, and transverse crossings.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Regular space**
A T1 space in which a closed set and a point outside it have disjoint open neighbourhoods, also called T3.
See [Chapter 9](09-Separation-and-Metrisation.md#92-regular-and-normal-spaces).

**Regular value**
A point $y$ such that the derivative of $f$ is onto at every point of $f^{-1}(y)$. By the regular value theorem the preimage is then a smooth manifold, and the degree can be counted at its preimage points.
See [Chapter 11](11-Manifolds.md#113-smooth-manifolds) and [Chapter 17](17-Applications-of-Algebraic-Topology.md#173-the-degree-of-a-map).

**Reidemeister moves**
The three local moves on knot diagrams: R1 (twist), R2 (poke) and R3 (slide). Reidemeister's theorem: two diagrams show equivalent knots exactly when a sequence of these moves joins them.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Relation (in a presentation)**
An equation that the generators of a presented group must satisfy. A relator is a word required to equal 1.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Relative homotopy**
A homotopy relative to $A$ keeps every point of $A$ fixed throughout.
See [Chapter 12](12-Homotopy.md#121-homotopic-maps).

**Relatively open**
A subset of $Y \subseteq X$ that is open in the subspace topology of $Y$, though possibly not open in $X$.
See [Chapter 4](04-Topological-Spaces.md#45-subspace-topology).

**Retraction**
A continuous map $r: X \to A$ onto a subspace with $r(a) = a$ for every $a \in A$. $A$ is then a retract of $X$. There is no retraction of a disc onto its boundary circle.
See [Chapter 12](12-Homotopy.md#123-retractions), [Chapter 13](13-The-Fundamental-Group.md#135-functoriality-induced-maps) and [Chapter 17](17-Applications-of-Algebraic-Topology.md#171-brouwers-fixed-point-theorem-in-every-dimension).

**Ricci curvature**
A measure of how a Riemannian metric makes volumes of small balls differ from flat space, in each direction.
See [Chapter 19](19-The-Poincare-Conjecture.md#194-ricci-flow-and-perelmans-proof).

**Ricci flow**
Hamilton's equation that changes a Riemannian metric by minus twice its Ricci curvature, like a heat equation for shape. Perelman used it, with surgery, to prove geometrisation.
See [Chapter 19](19-The-Poincare-Conjecture.md#194-ricci-flow-and-perelmans-proof).

**Riemann sphere**
The complex plane with one point at infinity added, the one-point compactification of $\mathbb{C}$, homeomorphic to $S^2$.
See [Chapter 8](08-Compactness.md#86-the-one-point-compactification).

**Riemannian metric**
A smoothly varying inner product on the tangent spaces of a smooth manifold, which gives lengths, angles and curvature.
See [Chapter 19](19-The-Poincare-Conjecture.md#194-ricci-flow-and-perelmans-proof).

**Rotation group**
The group $SO(3)$ of rotations of $\mathbb{R}^3$, a 3-manifold homeomorphic to $\mathbb{RP}^3$.
See [Chapter 11](11-Manifolds.md#112-examples).

**Rubber-sheet geometry**
A popular name for topology: the study of properties that survive stretching and bending but not tearing or gluing.
See [Chapter 1](01-What-Topology-Is.md#11-the-rubber-sheet-idea).

## S

**Schoenflies problem (4D)**
The open question whether every smooth 3-sphere in $S^4$ bounds smooth 4-balls on both sides.
See [Chapter 20](20-Where-Topology-Goes.md#202-the-smooth-4-dimensional-poincare-conjecture) and [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Second countable**
A space with a countable basis. $\mathbb{R}^n$ is second countable; manifolds are required to be.
See [Chapter 4](04-Topological-Spaces.md#44-bases), [Chapter 5](05-Continuity-and-Homeomorphism.md#53-topological-invariants) and [Chapter 9](09-Separation-and-Metrisation.md#94-urysohns-metrisation-theorem).

**Seifert surface**
A compact orientable surface in space whose boundary is a given knot. Seifert's theorem says every knot has one.
See [Chapter 10](10-Classification-of-Surfaces.md#106-surfaces-with-boundary).

**Seifert-van Kampen theorem**
If $X = U \cup V$ with $U$, $V$ and $U \cap V$ open and path connected, then $\pi_1(X)$ is the amalgamated free product of $\pi_1(U)$ and $\pi_1(V)$ over $\pi_1(U \cap V)$.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#152-the-seifert-van-kampen-theorem).

**Separable**
A space with a countable dense subset, as $\mathbb{R}$ has $\mathbb{Q}$.
See [Chapter 4](04-Topological-Spaces.md#43-closed-sets-closure-interior-boundary) and [Chapter 5](05-Continuity-and-Homeomorphism.md#53-topological-invariants).

**Separation**
A pair of disjoint nonempty open sets whose union is the whole space. A space is connected when it has none.
See [Chapter 7](07-Connectedness.md#71-connected-spaces).

**Sequentially compact**
A space in which every sequence has a convergent subsequence. For metric spaces it is equivalent to compactness.
See [Chapter 8](08-Compactness.md#84-compactness-in-metric-spaces) and [Chapter 9](09-Separation-and-Metrisation.md#95-strange-spaces).

**Sheet**
One of the disjoint open sets over an evenly covered set $U$, each mapped homeomorphically onto $U$ by the covering map.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#141-the-fundamental-group-of-the-circle) and [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Sierpiński space**
The two-point space $\{0, 1\}$ whose open sets are $\varnothing$, $\{1\}$ and $\{0, 1\}$. It is T0 but not T1.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology) and [Chapter 9](09-Separation-and-Metrisation.md#91-hausdorff-spaces-and-why-we-want-them).

**Simple closed curve**
A subset of the plane homeomorphic to a circle: a closed curve that does not cross itself.
See [Chapter 1](01-What-Topology-Is.md#14-inside-and-outside-the-jordan-curve-theorem).

**Simple graph**
A graph with no loops and no multiple edges.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects).

**Simplex**
The $n$-simplex is the convex hull of $n + 1$ affinely independent points: a point, a segment, a triangle, a tetrahedron, and so on.
See [Chapter 16](16-Homology.md#162-simplicial-complexes).

**Simplicial approximation theorem**
Every continuous map between polyhedra is homotopic to a simplicial map after subdividing the domain enough. It makes homology a topological invariant.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#171-brouwers-fixed-point-theorem-in-every-dimension).

**Simplicial complex**
A finite collection of simplices in some $\mathbb{R}^N$ closed under taking faces, any two meeting in a common face or not at all.
See [Chapter 16](16-Homology.md#162-simplicial-complexes).

**Simply connected**
A path-connected space with trivial fundamental group: every loop shrinks to a point. Convex sets and $S^n$ for $n \ge 2$ are simply connected.
See [Chapter 13](13-The-Fundamental-Group.md#134-simply-connected-spaces) and [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Singular homology**
A homology defined for every space using all continuous maps of simplices into it, agreeing with simplicial homology on simplicial complexes.
See [Chapter 16](16-Homology.md#165-euler-characteristic-and-betti-numbers).

**Skein relation**
A linear relation among the Jones polynomials of three links that differ at one crossing. It computes the polynomial by induction.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Slice knot**
A knot in the 3-sphere that bounds a smooth disc in the 4-ball. Piccirillo proved in 2020 that the Conway knot is not slice.
See [Chapter 20](20-Where-Topology-Goes.md#202-the-smooth-4-dimensional-poincare-conjecture).

**Slice-ribbon conjecture**
The open conjecture that every slice knot is ribbon, bounding a disc of a special kind with only simple self-intersections.
See [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Smith normal form**
A diagonal form of an integer matrix reached by integer row and column operations. Its diagonal gives the torsion of a homology group or of an abelianised presentation.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#153-fundamental-groups-of-graphs-and-surfaces) and [Chapter 16](16-Homology.md#163-chains-boundaries-and-cycles).

**Smooth 4-dimensional Poincaré conjecture**
The open conjecture that every smooth 4-manifold homeomorphic to $S^4$ is diffeomorphic to it.
See [Chapter 20](20-Where-Topology-Goes.md#202-the-smooth-4-dimensional-poincare-conjecture) and [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Smooth atlas**
An atlas whose transition maps are all smooth, so that its charts are smoothly compatible.
See [Chapter 11](11-Manifolds.md#113-smooth-manifolds).

**Smooth manifold**
A manifold with a maximal smooth atlas. Maps between smooth manifolds are smooth when they are smooth in charts.
See [Chapter 11](11-Manifolds.md#113-smooth-manifolds).

**Smooth structure**
A choice of maximal smooth atlas on a topological manifold. A manifold can have none, one, or many.
See [Chapter 20](20-Where-Topology-Goes.md#201-exotic-spheres-and-exotic-mathbbr4).

**Solid torus**
The product $D^2 \times S^1$, a doughnut including its inside.
See [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology) and [Chapter 11](11-Manifolds.md#115-3-manifolds-the-shape-of-space).

**Sorgenfrey line**
The real line with the lower limit topology. It is normal and first countable but not second countable, and the product of two copies, the Sorgenfrey plane, is not normal.
See [Chapter 4](04-Topological-Spaces.md#44-bases), [Chapter 9](09-Separation-and-Metrisation.md#92-regular-and-normal-spaces) and [Chapter 9](09-Separation-and-Metrisation.md#94-urysohns-metrisation-theorem).

**Space-filling curve**
A continuous map from $[0, 1]$ onto the square, such as Peano's or Hilbert's. It shows a continuous map can raise dimension, and that a loop need not miss any point.
See [Chapter 11](11-Manifolds.md#114-the-dimension-question) and [Chapter 13](13-The-Fundamental-Group.md#134-simply-connected-spaces).

**Spanning tree**
A tree in a graph containing all its vertices. Contracting it shows a connected graph is homotopy equivalent to a wedge of circles.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects), [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces) and [Chapter 15](15-Van-Kampen-and-Surfaces.md#153-fundamental-groups-of-graphs-and-surfaces).

**Sperner's lemma**
In a suitably labelled triangulation of a triangle, some small triangle carries all three labels. It gives a constructive route to Brouwer's fixed point theorem.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#144-the-brouwer-fixed-point-theorem-in-two-dimensions).

**Sphere**
The $n$-sphere $S^n$ is the set of points at distance 1 from the origin in $\mathbb{R}^{n+1}$. $S^1$ is the circle and $S^2$ the ordinary sphere; $S^3$ is the 3-sphere, the simplest closed 3-manifold.
See [Chapter 6](06-Building-New-Spaces.md#64-spheres-as-quotients-of-discs), [Chapter 11](11-Manifolds.md#112-examples) and [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Stability theorem (persistent homology)**
Moving each point of a cloud by at most $\varepsilon$ moves the barcode by at most $\varepsilon$ in the bottleneck distance, so persistent homology is robust to noise.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#176-topological-data-analysis-and-persistent-homology).

**Stable homotopy groups of spheres**
The limits $\pi_k^s$ of $\pi_{n+k}(S^n)$ as $n$ grows. No general formula is known.
See [Chapter 20](20-Where-Topology-Goes.md#203-homotopy-groups-of-spheres).

**Standard simplex**
The simplex $\{x \in \mathbb{R}^n : x_i \ge 0, \sum x_i = 1\}$, whose points are probability vectors.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#171-brouwers-fixed-point-theorem-in-every-dimension).

**Star-shaped**
A set with a point from which the segment to every other point stays in the set. Star-shaped sets are contractible and simply connected.
See [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces) and [Chapter 13](13-The-Fundamental-Group.md#134-simply-connected-spaces).

**State sum**
The expansion of the Kauffman bracket as a sum over states, a state being a choice of A- or B-smoothing at every crossing.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial).

**Stereographic projection**
The map from a sphere minus its north pole to the plane, sending each point to where the line from the north pole through it meets the plane. It is a homeomorphism.
See [Chapter 1](01-What-Topology-Is.md#15-what-the-same-will-mean), [Chapter 5](05-Continuity-and-Homeomorphism.md#52-homeomorphisms) and [Chapter 11](11-Manifolds.md#112-examples).

**Subbasis**
A collection of open sets whose finite intersections form a basis. The open rays form a subbasis for the order topology.
See [Chapter 4](04-Topological-Spaces.md#44-bases).

**Subdivision (of a graph)**
A graph obtained by putting new vertices of degree 2 in the middle of edges. Subdivisions are homeomorphic as spaces.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects) and [Chapter 3](03-Graphs-and-Planarity.md#34-kuratowskis-theorem).

**Subspace topology**
The topology on a subset $Y$ of $X$ whose open sets are the intersections $U \cap Y$ with $U$ open in $X$.
See [Chapter 4](04-Topological-Spaces.md#45-subspace-topology).

**Surface**
A space that looks like the plane near each point: a Hausdorff, second countable space in which every point has a neighbourhood homeomorphic to an open disc.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#23-surfaces-with-holes-the-torus-genus-and-chi-2-2g) and [Chapter 10](10-Classification-of-Surfaces.md#101-polygons-with-edge-labels).

**Surface with boundary**
A space in which each point has a neighbourhood homeomorphic to an open disc or to a half-disc. Every compact one is a closed surface with some open discs removed.
See [Chapter 10](10-Classification-of-Surfaces.md#106-surfaces-with-boundary).

**Surgery**
Cutting a manifold along a sphere and gluing in balls. Perelman used surgery to continue Ricci flow past neck pinches.
See [Chapter 19](19-The-Poincare-Conjecture.md#194-ricci-flow-and-perelmans-proof).

**Suspension**
The space $SX$ made from $X \times [0, 1]$ by collapsing $X \times \{0\}$ to one point and $X \times \{1\}$ to another: a double cone. The suspension of $S^n$ is $S^{n+1}$.
See [Chapter 6](06-Building-New-Spaces.md#63-cones-and-suspensions).

## T

**T0, T1, T2, T3, T4**
The separation axioms. T0: the topology tells points apart. T1: points are closed. T2: Hausdorff. T3: regular. T4: normal.
See [Chapter 9](09-Separation-and-Metrisation.md#91-hausdorff-spaces-and-why-we-want-them) and [Chapter 9](09-Separation-and-Metrisation.md#92-regular-and-normal-spaces).

**Tame knot**
A knot equivalent to a closed polygon with finitely many sides. Smooth knots are tame; knots that are not are wild.
See [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Tangent vector field**
A continuous choice of a tangent vector at each point of a manifold.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#172-the-hairy-ball-theorem).

**Taxicab metric**
The metric $d_1(x, y) = |x_1 - y_1| + \cdots + |x_n - y_n|$ on $\mathbb{R}^n$, distance along a grid of streets.
See [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets).

**Theta graph**
The graph with two vertices joined by three edges. Its fundamental group is the free group of rank 2.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#153-fundamental-groups-of-graphs-and-surfaces).

**Tietze extension theorem**
On a normal space, every continuous real function on a closed subset extends to a continuous function on the whole space.
See [Chapter 9](09-Separation-and-Metrisation.md#93-urysohns-lemma).

**Topoisomerase**
An enzyme that changes the topology of DNA by cutting strands and passing them through each other, changing linking number.
See [Chapter 18](18-Knot-Theory.md#184-knots-in-dna-and-chemistry).

**Topological combinatorics**
The use of topology, such as the Borsuk-Ulam theorem, to prove combinatorial statements; Lovász started it with his proof of Kneser's conjecture.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#175-borsuk-ulam-and-the-ham-sandwich).

**Topological data analysis**
The study of the shape of data, such as point clouds, with tools from algebraic topology, chiefly persistent homology.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#176-topological-data-analysis-and-persistent-homology).

**Topological insulator**
A material that insulates in its interior but conducts along its surface, protected by a topological invariant of its electron states.
See [Chapter 20](20-Where-Topology-Goes.md#204-topology-in-physics).

**Topological invariant**
A property or quantity that homeomorphic spaces share. Connectedness, compactness, the Euler characteristic, the fundamental group and homology are examples.
See [Chapter 1](01-What-Topology-Is.md#11-the-rubber-sheet-idea) and [Chapter 5](05-Continuity-and-Homeomorphism.md#53-topological-invariants).

**Topological phase transition**
A change of state of matter marked by a change of a topological invariant, such as the BKT transition, in which vortices unbind.
See [Chapter 20](20-Where-Topology-Goes.md#204-topology-in-physics).

**Topological property**
A property that survives every homeomorphism, the subject of topology.
See [Chapter 1](01-What-Topology-Is.md#11-the-rubber-sheet-idea).

**Topological quantum computing**
A proposed way to compute by braiding non-abelian anyons, so that the result depends only on the topology of the braid and resists small errors.
See [Chapter 20](20-Where-Topology-Goes.md#205-topological-quantum-computing).

**Topological quantum field theory**
A physical theory whose answers depend only on the topology of space-time; Witten showed the Jones polynomial arises from one.
See [Chapter 20](20-Where-Topology-Goes.md#204-topology-in-physics).

**Topological realisation**
The space $|G|$ of a graph: a point for each vertex and an arc for each edge, glued at the endpoints.
See [Chapter 3](03-Graphs-and-Planarity.md#31-graphs-as-topological-objects).

**Topological space**
A set $X$ with a topology: a collection of subsets, the open sets, that contains $\varnothing$ and $X$ and is closed under arbitrary unions and finite intersections.
See [Chapter 1](01-What-Topology-Is.md#15-what-the-same-will-mean) and [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Topologist's sine curve**
The graph of $\sin(1/x)$ for $0 < x \le 1$ together with the segment of the $y$-axis it accumulates on. It is connected but not path connected.
See [Chapter 7](07-Connectedness.md#73-path-connectedness).

**Topology (on a set)**
A collection of subsets, called open, containing the empty set and the whole set and closed under arbitrary unions and finite intersections.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology).

**Torsion**
The elements of finite order in a finitely generated abelian group, such as the $\mathbb{Z}/2$ in $H_1(\mathbb{RP}^2)$. Betti numbers ignore it.
See [Chapter 16](16-Homology.md#163-chains-boundaries-and-cycles).

**Torus**
The surface of a doughnut, $S^1 \times S^1$, or a square with opposite sides glued the same way (word $aba^{-1}b^{-1}$). $\chi = 0$ and $\pi_1 = \mathbb{Z}^2$. The $n$-torus is the product of $n$ circles.
See [Chapter 1](01-What-Topology-Is.md#11-the-rubber-sheet-idea), [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#25-the-klein-bottle-and-the-projective-plane), [Chapter 6](06-Building-New-Spaces.md#61-the-product-topology) and [Chapter 15](15-Van-Kampen-and-Surfaces.md#153-fundamental-groups-of-graphs-and-surfaces).

**Totally bounded**
A metric space that can be covered by finitely many balls of radius $\varepsilon$ for every $\varepsilon > 0$. A metric space is compact exactly when it is complete and totally bounded.
See [Chapter 8](08-Compactness.md#84-compactness-in-metric-spaces).

**Totally disconnected**
A space whose only connected subsets are single points, such as $\mathbb{Q}$ or the Cantor set.
See [Chapter 7](07-Connectedness.md#74-components) and [Chapter 9](09-Separation-and-Metrisation.md#95-strange-spaces).

**Transition map**
For two overlapping charts $\varphi$ and $\psi$ of a manifold, the map $\psi \circ \varphi^{-1}$ between open sets of $\mathbb{R}^n$.
See [Chapter 11](11-Manifolds.md#111-locally-like-mathbbrn).

**Tree**
A connected graph with no cycles. A tree with $V$ vertices has $V - 1$ edges, and it is contractible.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#21-eulers-formula-for-polyhedra) and [Chapter 12](12-Homotopy.md#122-homotopy-equivalence-and-contractible-spaces).

**Trefoil**
The simplest non-trivial knot, with three crossings. It is tricolourable and chiral, and its knot group is the braid group on three strands.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group) and [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves).

**Triangle inequality**
The axiom $d(x, z) \le d(x, y) + d(y, z)$ of a metric: a detour is never shorter.
See [Chapter 4](04-Topological-Spaces.md#41-from-metric-spaces-to-open-sets).

**Triangulation**
A homeomorphism from a polyhedron $|K|$ of a simplicial complex to a space. Every surface and every 3-manifold has one.
See [Chapter 16](16-Homology.md#162-simplicial-complexes).

**Triangulation conjecture**
The question whether every topological manifold is homeomorphic to a simplicial complex. Manolescu proved it false in every dimension $n \ge 5$; it was already false in dimension 4.
See [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Tricolouring**
A colouring of the arcs of a knot diagram with three colours, at each crossing all the same or all different, using more than one colour. A knot with one is tricolourable, which proves the trefoil knotted.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group) and [Chapter 18](18-Knot-Theory.md#182-invariants-colourings-and-the-linking-number).

**Trivial group**
The group with one element. A space is simply connected when its fundamental group is trivial.
See [Chapter 13](13-The-Fundamental-Group.md#132-the-group-axioms-up-to-homotopy).

**Tube lemma**
If $C$ is compact and $N$ is an open set containing $\{x\} \times C$ in $X \times C$, then $N$ contains a tube $W \times C$ around it. It proves that finite products of compact spaces are compact.
See [Chapter 8](08-Compactness.md#85-tychonoffs-theorem).

**Tychonoff's theorem**
Any product of compact spaces is compact in the product topology. For infinite products it is equivalent to the axiom of choice.
See [Chapter 8](08-Compactness.md#85-tychonoffs-theorem).

## U

**Undecidable**
A problem for which no algorithm gives the correct answer on every input. The word problem for groups, and the homeomorphism problem for 4-manifolds, are undecidable.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#155-the-word-problem) and [Chapter 19](19-The-Poincare-Conjecture.md#195-what-it-means).

**Universal cover**
A simply connected covering space of a space. It covers every other connected covering, and its deck transformation group is the fundamental group.
See [Chapter 14](14-The-Circle-and-Covering-Spaces.md#142-covering-spaces-and-the-lifting-lemmas).

**Unknot**
A knot equivalent to a round circle. Haken's algorithm decides whether a diagram shows the unknot.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#154-knots-and-the-knot-group), [Chapter 18](18-Knot-Theory.md#181-knots-links-and-reidemeister-moves) and [Chapter 18](18-Knot-Theory.md#185-how-hard-is-it-to-recognise-the-unknot).

**Urysohn function**
For disjoint closed sets $A$ and $B$, a continuous function $f: X \to [0, 1]$ equal to 0 on $A$ and 1 on $B$.
See [Chapter 9](09-Separation-and-Metrisation.md#93-urysohns-lemma).

**Urysohn's lemma**
In a normal space, any two disjoint closed sets have an Urysohn function: they are separated by a continuous function.
See [Chapter 9](09-Separation-and-Metrisation.md#93-urysohns-lemma).

**Urysohn's metrisation theorem**
Every regular, second countable space is metrisable; it embeds in the Hilbert cube.
See [Chapter 9](09-Separation-and-Metrisation.md#94-urysohns-metrisation-theorem).

## V

**Vertex**
A point of a graph where edges end, or a corner of a polyhedron or of a labelled polygon.
See [Chapter 1](01-What-Topology-Is.md#12-the-bridges-of-konigsberg), [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#21-eulers-formula-for-polyhedra) and [Chapter 10](10-Classification-of-Surfaces.md#101-polygons-with-edge-labels).

**Vietoris-Rips complex**
The simplicial complex built on a point cloud at scale $r$, with a simplex on every set of points that are pairwise within distance $r$.
See [Chapter 17](17-Applications-of-Algebraic-Topology.md#176-topological-data-analysis-and-persistent-homology).

**Volume conjecture**
The open conjecture that the growth of coloured Jones polynomials of a knot determines the hyperbolic volume of its complement.
See [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Von Dyck's theorem**
A function from the generators $S$ to a group $G$ extends to a homomorphism $\langle S \mid R \rangle \to G$ exactly when every relator goes to 1, and the extension is then unique.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Vortex**
A point in a two-dimensional field around which the field's direction winds a nonzero number of times. Vortices unbinding drives the BKT transition.
See [Chapter 20](20-Where-Topology-Goes.md#204-topology-in-physics).

## W

**Wagner's theorem**
A graph is planar exactly when it has neither $K_5$ nor $K_{3,3}$ as a minor.
See [Chapter 3](03-Graphs-and-Planarity.md#34-kuratowskis-theorem).

**Wedge sum**
The space $X \vee Y$ made by gluing $X$ and $Y$ at one point. The wedge of two circles is the figure eight.
See [Chapter 6](06-Building-New-Spaces.md#62-the-quotient-topology-and-gluing) and [Chapter 15](15-Van-Kampen-and-Surfaces.md#153-fundamental-groups-of-graphs-and-surfaces).

**Whitehead manifold**
An open contractible 3-manifold not homeomorphic to $\mathbb{R}^3$, found by J. H. C. Whitehead in 1935 while correcting his false proof of the Poincaré conjecture.
See [Chapter 19](19-The-Poincare-Conjecture.md#191-the-statement).

**Whitehead's asphericity conjecture**
The open conjecture (1941) that every subcomplex of an aspherical 2-dimensional complex is aspherical.
See [Chapter 20](20-Where-Topology-Goes.md#206-open-problems).

**Whitney embedding theorem**
Every smooth $n$-manifold embeds smoothly in $\mathbb{R}^{2n}$.
See [Chapter 11](11-Manifolds.md#113-smooth-manifolds).

**Whitney trick**
A move that removes a pair of opposite intersection points of two submanifolds by pushing one across a Whitney disc. It works in dimensions 5 and up, and fails in dimension 4.
See [Chapter 19](19-The-Poincare-Conjecture.md#192-higher-dimensions).

**Winding number**
The net number of times a loop goes around a point, anticlockwise counted positive. It identifies $\pi_1(S^1)$ with $\mathbb{Z}$.
See [Chapter 13](13-The-Fundamental-Group.md#132-the-group-axioms-up-to-homotopy) and [Chapter 14](14-The-Circle-and-Covering-Spaces.md#141-the-fundamental-group-of-the-circle).

**Word (in a group)**
A finite sequence of letters and their inverses, such as $abb^{-1}a^{-1}a$. Reduced words are the elements of a free group.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#151-free-groups-and-presentations).

**Word (of a labelled polygon)**
The sequence of edge letters read around a polygon, with exponent $-1$ when an arrow points against the direction of travel. It records how the polygon is glued into a surface.
See [Chapter 2](02-Surfaces-and-Euler-Characteristic.md#25-the-klein-bottle-and-the-projective-plane) and [Chapter 10](10-Classification-of-Surfaces.md#101-polygons-with-edge-labels).

**Word problem**
The problem of deciding, from a presentation of a group, whether a word represents the identity. Novikov and Boone showed it is unsolvable in general; Dehn's algorithm solves it for surfaces.
See [Chapter 15](15-Van-Kampen-and-Surfaces.md#155-the-word-problem).

**Writhe**
The sum of the signs of all crossings of an oriented knot diagram. In DNA, the writhe measures how the axis coils on itself.
See [Chapter 18](18-Knot-Theory.md#183-the-jones-polynomial) and [Chapter 18](18-Knot-Theory.md#184-knots-in-dna-and-chemistry).

## Z

**Zariski topology**
The topology on $k^n$ whose closed sets are the common zero sets of polynomials. It is T1 but not Hausdorff.
See [Chapter 4](04-Topological-Spaces.md#42-the-axioms-of-a-topology) and [Chapter 9](09-Separation-and-Metrisation.md#91-hausdorff-spaces-and-why-we-want-them).

**ZIP proof**
Conway's "zero irrelevancy proof" of the classification of surfaces.
See [Chapter 10](10-Classification-of-Surfaces.md#104-the-classification-theorem).
