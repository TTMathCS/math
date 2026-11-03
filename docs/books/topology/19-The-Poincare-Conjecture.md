# 19. The Poincaré conjecture

*Every closed surface on which each loop can be shrunk to a point is a sphere. In 1904 Henri Poincaré asked whether
the same is true one dimension up. The question looked innocent and took a century, through false proofs, a solution
in every dimension except three, a vision of three-dimensional geometry by William Thurston, and finally a heat equation
for shapes, Richard Hamilton's Ricci flow, carried through by Grigori Perelman in 2002 and 2003. This chapter states the
problem precisely, shows why the obvious weaker version is false, explains why higher dimensions were easier, and gives
an honest outline of the proof. Full proofs run to hundreds of pages; here you get the ideas and where to find the rest.*

!!! abstract "In this chapter"
    **You will learn:**

    - the precise statement, why "simply connected" is needed, and Poincaré's homology sphere, which shows homology is not enough
    - the proof of the 2-dimensional version from the classification of surfaces
    - the generalised conjecture: Smale (dimensions 5 and up, 1961) and Freedman (dimension 4, 1982), and why high dimensions are easier
    - Thurston's geometrisation conjecture and the eight geometries, and why geometrisation implies Poincaré
    - Hamilton's Ricci flow, its singularities, and the ideas of Perelman's proof
    - what happened next: the prizes Perelman declined, and what the theorem means for 3-dimensional topology

    **You need:** [Chapter 10](10-Classification-of-Surfaces.md) (classification of surfaces), [Chapter 11](11-Manifolds.md)
    (manifolds), [Chapter 13](13-The-Fundamental-Group.md) and [Chapter 15](15-Van-Kampen-and-Surfaces.md) (fundamental
    groups and presentations), [Chapter 16](16-Homology.md) (homology). For 19.3 and 19.4 it helps to have read
    [Geometry, chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md) (metrics and curvature) and
    [Geometry, chapter 21](../geometry/21-Where-Geometry-Goes.md) (a first look at Thurston's geometries).

    **Levels:** 19.1 is advanced; 19.2 and 19.3 are expert; 19.4 is an expert-level survey whose main ideas can be
    followed without the analysis; 19.5 is for everyone.

## 19.1 The statement

*Level: advanced.*

### The warm-up: surfaces

Recall from [Chapter 13](13-The-Fundamental-Group.md) that a space is **simply connected** if it is path connected and
every loop in it can be shrunk to a point; that is, its fundamental group is trivial. The sphere $S^2$ is simply
connected; the torus is not (a loop around the hole cannot be shrunk).

**Theorem 19.1.** A closed (compact, no boundary) simply connected surface is homeomorphic to $S^2$.

*Proof.* By the classification ([Chapter 10](10-Classification-of-Surfaces.md)), a closed connected surface is a sphere,
a connected sum of $g \ge 1$ tori, or a connected sum of $k \ge 1$ projective planes. Their first homology groups
([Chapter 16](16-Homology.md)) are $0$, $\mathbb{Z}^{2g}$ and $\mathbb{Z}^{k-1} \oplus \mathbb{Z}/2$. The first homology
is the abelianisation of the fundamental group, so a simply connected surface has $H_1 = 0$, and only the sphere has
that. $\square$

### Closed 3-manifolds

A **closed 3-manifold** is a compact space without boundary that looks, near every point, like $\mathbb{R}^3$
([Chapter 11](11-Manifolds.md)). We cannot see one from outside the way we see a surface sitting in space, but we can
build many:

- the **3-sphere** $S^3 = \{x \in \mathbb{R}^4 : |x| = 1\}$, or equivalently $\mathbb{R}^3$ plus one point at infinity
  ([Chapter 8](08-Compactness.md)), or two solid balls glued along their boundary spheres;
- the **3-torus** $T^3$, a cube with opposite faces glued, fundamental group $\mathbb{Z}^3$;
- $S^2 \times S^1$, fundamental group $\mathbb{Z}$;
- the **lens spaces** $L(p, q)$: quotients of $S^3 \subset \mathbb{C}^2$ by the rotation $(z, w) \mapsto (\zeta z,
  \zeta^q w)$ with $\zeta = e^{2\pi i/p}$. This rotation has no fixed points on $S^3$ when $q$ is coprime to $p$, so the
  quotient is a manifold with fundamental group $\mathbb{Z}/p$. $L(2,1)$ is the projective space $\mathbb{RP}^3$.

None of the last three is simply connected. Poincaré's question was whether $S^3$ is the only simply connected one.

### Poincaré's first try, and his counterexample

Poincaré founded algebraic topology in a long paper, *Analysis Situs* (1895), and five "complements" to it
(1899 to 1904). In the second complement (1900) he claimed that a closed 3-manifold with the same Betti numbers and
torsion as $S^3$, that is, the same homology, must be $S^3$. In the fifth complement (1904) he showed this was false.

**The Poincaré homology sphere.** Take a solid regular dodecahedron and glue each face to the opposite face after a
turn of one tenth of a full turn ($36°$), in the same sense for every pair. The result $P$ is a closed 3-manifold.
Another description: the rotations of a regular icosahedron form a group of order 60; in the unit quaternions, which form
the sphere $S^3$, these rotations lift to a group $\Gamma$ of order 120, the **binary icosahedral group**, and
$P = S^3/\Gamma$. Either way,

$$
\pi_1(P) \cong \Gamma = \langle s, t \mid (st)^2 = s^3 = t^5 \rangle, \qquad |\Gamma| = 120 .
$$

**Worked example 1: $P$ has the homology of a sphere.** $H_1$ is the abelianisation of $\pi_1$
([Chapter 15](15-Van-Kampen-and-Surfaces.md)). Write the group additively and turn the relations into equations:
$(st)^2 = s^3$ becomes $2s + 2t = 3s$, that is $-s + 2t = 0$; and $s^3 = t^5$ becomes $3s - 5t = 0$. So
$H_1 = \mathbb{Z}^2 / M\mathbb{Z}^2$ with

$$
M = \begin{pmatrix} -1 & 2 \\ 3 & -5 \end{pmatrix}, \qquad \det M = 5 - 6 = -1 .
$$

A square integer matrix with determinant $\pm 1$ is invertible over the integers, so $M\mathbb{Z}^2 = \mathbb{Z}^2$ and
$H_1(P) = 0$. Check: $M^{-1} = \begin{pmatrix} 5 & 2 \\ 3 & 1 \end{pmatrix}$, and $M M^{-1} = \begin{pmatrix} -5 + 6 &
-2 + 2 \\ 15 - 15 & 6 - 5 \end{pmatrix} = I$. By Poincaré duality (for a closed orientable 3-manifold, $H_2 \cong H^1$,
which is 0 when $H_1 = 0$) also $H_2(P) = 0$, and $H_0 = H_3 = \mathbb{Z}$. So $P$ has exactly the homology of $S^3$, but
its fundamental group has 120 elements, so it is not $S^3$.

A group whose abelianisation is trivial is called **perfect**. Any perfect fundamental group gives a homology sphere
that is not a sphere, which is why homology is not enough. Poincaré then asked the corrected question: if a closed
3-manifold has trivial fundamental group, must it be $S^3$? He did not claim an answer, noting that the question would
lead too far.

**The Poincaré conjecture.** *Every closed, simply connected 3-manifold is homeomorphic to the 3-sphere.*

### A century of attempts

The problem attracted many proofs that turned out to be wrong. One of the most instructive was J. H. C. Whitehead's in
1934. He withdrew it, and in finding his mistake he discovered the **Whitehead manifold** (1935): an open (non-compact)
3-manifold that is contractible, so every homotopy group vanishes, yet is not homeomorphic to $\mathbb{R}^3$. It shows
that the word "closed" in the conjecture is doing real work: being algebraically like a ball is not enough without
compactness. Other well-known mathematicians announced proofs over the century that did not survive checking.

In 2000 the Clay Mathematics Institute listed the conjecture among its seven **Millennium Prize Problems**, with a prize
of one million US dollars for each.

## 19.2 Higher dimensions

*Level: expert.* The question makes sense in every dimension, but "simply connected" is too weak from dimension 4 on:
$S^2 \times S^2$ is a closed, simply connected 4-manifold with $H_2 \cong \mathbb{Z}^2$, so it is not $S^4$. The right
generalisation uses all of homotopy theory.

**Generalised Poincaré conjecture.** *A closed $n$-manifold that is homotopy equivalent to $S^n$ is homeomorphic to
$S^n$.*

For $n = 3$ this is equivalent to the original (a closed simply connected 3-manifold is automatically homotopy equivalent
to $S^3$, by the Hurewicz theorem of [Chapter 16](16-Homology.md) and Poincaré duality). For $n = 1, 2$ it follows from
the classification of curves and surfaces.

### Smale: five dimensions and up

In 1961 Stephen Smale proved the generalised conjecture for all $n \ge 5$. Around the same time John Stallings and
Christopher Zeeman gave proofs by different methods, first for $n \ge 7$ and then down to $n = 5$. Smale received a Fields
Medal in 1966.

*The idea.* Smale cut manifolds into **handles**. A $k$-handle is a thickened $k$-disc, $D^k \times D^{n-k}$, attached
along $\partial D^k \times D^{n-k}$; every smooth closed manifold can be built from a ball by attaching finitely many
handles (this comes from a Morse function, a height function with isolated critical points: each critical point of index
$k$ adds a $k$-handle). A homotopy sphere has the homology of a sphere, so the algebra of its handles says that most of
them "should" cancel in pairs. Smale showed that in high dimensions they actually do, by moving the attaching spheres of
handles around in the manifold until a $k$-handle and a $(k+1)$-handle meet geometrically exactly once, when the pair can
be removed.

The key step is the **Whitney trick**: two submanifolds of complementary dimension that meet algebraically zero times
(their intersection points cancel in signed count) can be moved to be disjoint. The proof slides one across a 2-dimensional
**Whitney disc** joining a pair of opposite intersection points, and it needs that disc to be embedded and to miss
everything else. A 2-disc and another 2-disc in an $n$-manifold generically miss each other when $2 + 2 < n$, that is
$n \ge 5$. In dimensions 3 and 4 there is no room, and the trick fails.

The result is the **h-cobordism theorem** (Smale, 1962): for $n \ge 5$, if a compact $(n+1)$-manifold $W$ has boundary
$M_0 \sqcup M_1$, simply connected, and each inclusion $M_i \hookrightarrow W$ is a homotopy equivalence, then
$W \cong M_0 \times [0,1]$. For a homotopy $n$-sphere $\Sigma$ with $n \ge 6$, remove two small open balls: what is left
is an h-cobordism between two copies of $S^{n-1}$, hence a product $S^{n-1} \times [0,1]$. So $\Sigma$ is two balls
glued along their boundary spheres, and any such union is homeomorphic to $S^n$ (extend the gluing map across the ball
by coning, the "Alexander trick"). Dimension 5 needs a separate argument.

*Warning: homeomorphic, not diffeomorphic.* The Alexander trick produces a homeomorphism that need not be smooth at the
centre. That gap is real: in [Chapter 20](20-Where-Topology-Goes.md) you will meet Milnor's **exotic spheres**,
smooth manifolds homeomorphic to $S^7$ but not diffeomorphic to it.

### Freedman: dimension four

In 1982 Michael Freedman proved the generalised conjecture for $n = 4$, in the topological sense (homeomorphic to $S^4$).
In four dimensions the Whitney disc cannot be made embedded by a dimension count; Freedman replaced it with an
infinite construction, **Casson handles** (towers of immersed discs, each fixing the double points of the last), and
proved that each Casson handle is, topologically but not smoothly, an ordinary open handle. Along the way he classified
all closed simply connected topological 4-manifolds. He received a Fields Medal in 1986.

The smooth version in dimension 4 is still open; see [Chapter 20](20-Where-Topology-Goes.md).

So by 1982 the conjecture was known in every dimension except the one Poincaré had asked about.

| dimension | statement | proved |
| --- | --- | --- |
| 1, 2 | homotopy spheres are spheres | classification of curves and surfaces |
| 3 | Poincaré conjecture | Perelman, 2002 to 2003 |
| 4 | topological version | Freedman, 1982 |
| 4 | smooth version | open |
| 5 and up | topological version | Smale, 1961 (also Stallings, Zeeman) |

## 19.3 Thurston's geometrisation

*Level: expert.* Dimension 3 needed a different idea, and it came from geometry.

### Surfaces again

Every closed surface carries a metric of constant curvature ([Geometry, chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md)):
the sphere is round (curvature $+1$), the torus and Klein bottle are flat (curvature 0), and every surface with $\chi < 0$
is **hyperbolic** (curvature $-1$). By Gauss-Bonnet the sign of the curvature is the sign of $\chi$. Topology and
geometry match perfectly: the topological type decides which of three geometries the surface carries.

### Three dimensions: cut, then geometrise

A 3-manifold need not carry one nice geometry. But it can be cut into pieces that do, in two canonical stages.

1. **Spheres.** A closed orientable 3-manifold $M$ is a connected sum $M_1 \# \cdots \# M_k$ of **prime** manifolds (ones
   that are not a connected sum except trivially with $S^3$). Kneser proved existence in 1929 and Milnor uniqueness in
   1962.
2. **Tori.** A prime $M$ can be cut along a finite collection of disjoint **incompressible** tori (tori whose fundamental
   group injects into that of $M$), unique up to isotopy and minimal, into pieces that are either Seifert fibred (unions
   of circles in a specific pattern) or "atoroidal". This is the JSJ decomposition, after Jaco and Shalen and Johannson,
   who found it in the late 1970s.

In the late 1970s William Thurston conjectured that each final piece carries one of exactly **eight model geometries**.
[Geometry, chapter 21](../geometry/21-Where-Geometry-Goes.md) lists them; here they are with typical closed examples.

| geometry | example of a closed manifold with this geometry |
| --- | --- |
| $S^3$ (spherical) | $S^3$, lens spaces, the Poincaré homology sphere |
| $\mathbb{E}^3$ (Euclidean) | the 3-torus $T^3$ |
| $\mathbb{H}^3$ (hyperbolic) | the Weeks manifold, most manifolds obtained by surgery on knots |
| $S^2 \times \mathbb{R}$ | $S^2 \times S^1$ |
| $\mathbb{H}^2 \times \mathbb{R}$ | $\Sigma_g \times S^1$, a surface of genus $g \ge 2$ times a circle |
| $\widetilde{SL_2\mathbb{R}}$ | the unit tangent bundle of a hyperbolic surface |
| Nil | quotients of the Heisenberg group; torus bundles over the circle with a shear as gluing map |
| Sol | torus bundles over the circle glued by a matrix like the cat map $\begin{pmatrix} 2 & 1 \\ 1 & 1\end{pmatrix}$ of [Chapter 17](17-Applications-of-Algebraic-Topology.md) |

**Geometrisation conjecture (Thurston).** *Every closed orientable prime 3-manifold, cut along its JSJ tori, has pieces
each of which carries one of the eight geometries.*

Thurston proved it for a large class, the **Haken manifolds** (those containing an incompressible surface), in work from
the late 1970s and early 1980s, and he showed that hyperbolic geometry is by far the most common: in a precise sense,
"most" 3-manifolds are hyperbolic. He received a Fields Medal in 1982. His full proof for Haken manifolds was long and
largely unpublished in his lifetime; later authors (Otal, Kapovich and others) wrote it out.

**Geometrisation implies Poincaré.** Let $M$ be closed and simply connected.

- *Prime.* If $M = M_1 \# M_2$, van Kampen ([Chapter 15](15-Van-Kampen-and-Surfaces.md)) gives
  $\pi_1(M) = \pi_1(M_1) * \pi_1(M_2)$, so both factors are trivial too; we may treat each prime piece separately, and
  a connected sum of copies of $S^3$ is $S^3$.
- *No tori.* An incompressible torus would put a copy of $\mathbb{Z}^2$ inside the trivial group. So there are no JSJ tori,
  and $M$ is a single geometric piece: $M = X/\Gamma$ for one of the eight model spaces $X$ and a group $\Gamma$ of
  isometries acting freely, with $\Gamma \cong \pi_1(M)$ (each model space is simply connected and is the universal
  cover).
- *Conclude.* $\Gamma$ is trivial, so $M = X$. But $M$ is compact, and of the eight model spaces only $S^3$ is compact.
  So $M \cong S^3$. $\square$

The same argument with $\pi_1(M)$ finite gives the **elliptisation conjecture**: such an $M$ is $S^3/\Gamma$ for a finite
group $\Gamma$ of rotations. Geometrisation is a much stronger statement than Poincaré, and in the end it was easier to
prove the strong statement than the weak one: the extra structure gave the proof something to aim at.

## 19.4 Ricci flow and Perelman's proof

*Level: expert (survey).*

### Hamilton's idea: let the shape flow

A **Riemannian metric** $g$ on a manifold gives lengths and angles in each tangent space, and from it come curvatures
([Geometry, chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md)). The **Ricci curvature** $\mathrm{Ric}$
is an average of sectional curvatures, a symmetric bilinear form like $g$ itself. In 1982 Richard Hamilton proposed
letting the metric evolve by

$$
\frac{\partial g}{\partial t} = -2\,\mathrm{Ric}(g) .
$$

Why should that help? In suitable coordinates, $\mathrm{Ric}$ is, to leading order, $-\tfrac12$ times the Laplacian of
the metric, so this is a **heat equation** for the metric. Heat flow evens out temperature: hot spots cool, cold spots
warm. Ricci flow evens out curvature: regions of positive Ricci curvature shrink, negative ones expand. The hope is that
any starting metric flows toward one of the uniform geometries, and so reveals what the manifold is.

**Worked example 2 (the round sphere).** On the round $n$-sphere of radius $r$, $\mathrm{Ric} = (n-1)\, g_1$, where
$g_1$ is the unit sphere's metric and $g = r^2 g_1$ (Ricci curvature is unchanged by scaling). Try $g(t) = r(t)^2 g_1$:

$$
\frac{d(r^2)}{dt}\, g_1 = -2(n-1)\, g_1, \qquad\text{so}\qquad r(t)^2 = r_0^2 - 2(n-1)\,t .
$$

For $n = 3$, $r^2 = r_0^2 - 4t$: the sphere stays round and shrinks to a point at time $t = r_0^2/4$. Check with
$r_0 = 1$: at $t = 0.16$, $r^2 = 0.36$ and $r = 0.6$; at $t = 0.25$, $r = 0$. A hyperbolic manifold does the opposite:
$\mathrm{Ric} = -(n-1)g_1$ and $r^2 = r_0^2 + 4t$ in dimension 3, so it expands forever. A flat torus does not move.

**Hamilton's theorem (1982).** If a closed 3-manifold has a metric of positive Ricci curvature, then the Ricci flow,
rescaled to keep the volume fixed, converges to a metric of constant positive curvature. Hence the manifold is $S^3/\Gamma$
for a finite group $\Gamma$; if it is simply connected, it is $S^3$.

For surfaces, Hamilton (1988) and Bennett Chow (1991) proved that the normalised flow on any closed surface converges to
constant curvature, giving a new proof that every surface carries one of the three geometries.

### The obstacle: singularities

For a general metric, the flow develops **singularities**: the curvature becomes infinite somewhere in finite time. The
typical one is a **neck pinch**. Picture a sphere shaped like a dumbbell, two round bulbs joined by a thin neck. The
neck looks like a piece of the cylinder $S^2 \times \mathbb{R}$, whose $S^2$ factor shrinks under the flow ($r^2 =
r_0^2 - 2t$ for the 2-sphere factor) while the line does not. The thinner the neck, the faster it shrinks, and it pinches
off before the bulbs do.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 580 175" role="img" aria-label="Two pictures of a dumbbell-shaped sphere under Ricci flow. On the left, two round bulbs joined by a neck of moderate width. On the right, later in the flow, the neck has become very thin and is about to pinch off; Perelman's surgery cuts it there and caps the two ends with round discs">
  <polygon points="20,90 25,69.4 30,61.7 35,56.5 40,52.6 45,49.7 50,47.6 55,46.1 60,45.3 65,45 70,45.3 75,46.1 80,47.6 85,49.7 90,52.6 95,56.5 100,61.7 105,65.3 110,66.1 115,66.8 120,67.3 125,67.7 130,67.9 135,68 140,67.9 145,67.7 150,67.3 155,66.8 160,66.1 165,65.3 170,61.7 175,56.5 180,52.6 185,49.7 190,47.6 195,46.1 200,45.3 205,45 210,45.3 215,46.1 220,47.6 225,49.7 230,52.6 235,56.5 240,61.7 245,69.4 250,90 250,90 245,110.6 240,118.3 235,123.5 230,127.4 225,130.3 220,132.4 215,133.9 210,134.7 205,135 200,134.7 195,133.9 190,132.4 185,130.3 180,127.4 175,123.5 170,118.3 165,114.7 160,113.9 155,113.2 150,112.7 145,112.3 140,112.1 135,112 130,112.1 125,112.3 120,112.7 115,113.2 110,113.9 105,114.7 100,118.3 95,123.5 90,127.4 85,130.3 80,132.4 75,133.9 70,134.7 65,135 60,134.7 55,133.9 50,132.4 45,130.3 40,127.4 35,123.5 30,118.3 25,110.6 20,90" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <polygon points="330,90 335,69.4 340,61.7 345,56.5 350,52.6 355,49.7 360,47.6 365,46.1 370,45.3 375,45 380,45.3 385,46.1 390,47.6 395,49.7 400,52.6 405,56.5 410,61.7 415,69.4 420,84.1 425,84.8 430,85.3 435,85.7 440,85.9 445,86 450,85.9 455,85.7 460,85.3 465,84.8 470,84.1 475,69.4 480,61.7 485,56.5 490,52.6 495,49.7 500,47.6 505,46.1 510,45.3 515,45 520,45.3 525,46.1 530,47.6 535,49.7 540,52.6 545,56.5 550,61.7 555,69.4 560,90 560,90 555,110.6 550,118.3 545,123.5 540,127.4 535,130.3 530,132.4 525,133.9 520,134.7 515,135 510,134.7 505,133.9 500,132.4 495,130.3 490,127.4 485,123.5 480,118.3 475,110.6 470,95.9 465,95.2 460,94.7 455,94.3 450,94.1 445,94 440,94.1 435,94.3 430,94.7 425,95.2 420,95.9 415,110.6 410,118.3 405,123.5 400,127.4 395,130.3 390,132.4 385,133.9 380,134.7 375,135 370,134.7 365,133.9 360,132.4 355,130.3 350,127.4 345,123.5 340,118.3 335,110.6 330,90" fill="#eea66f" fill-opacity="0.3" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="262" y1="90" x2="312" y2="90" stroke="currentColor" stroke-width="2"/>
  <polygon points="312,84 322,90 312,96" fill="currentColor"/>
  <line x1="445" y1="70" x2="445" y2="110" stroke="#7ccf9a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <text x="135" y="165" text-anchor="middle" font-size="13" fill="currentColor">a neck forms</text>
  <text x="445" y="165" text-anchor="middle" font-size="13" fill="currentColor">the neck pinches: cut here</text>
  <text x="290" y="78" text-anchor="middle" font-size="12" fill="currentColor">flow</text>
</svg>
</div>

Hamilton's programme, developed through the 1990s, was to stop the flow just before a singularity, cut along the thin
necks, cap the pieces with round hemispheres (**surgery**), and restart. The surgeries undo connected sums: cutting a neck
splits $M_1 \# M_2$ into $M_1$ and $M_2$. Pieces that shrink away entirely are recognisable (round spheres and their
quotients, and $S^2 \times S^1$-type pieces). For this to work, one needs to know that every singularity looks like a neck
or a cap, that surgeries do not pile up infinitely often in finite time, and what happens as time goes to infinity.
Hamilton made deep progress but could not rule out every possible singularity.

### Perelman's contribution

Between November 2002 and July 2003 Grigori Perelman, of the Steklov Institute in St Petersburg, posted three papers on
the arXiv preprint server: *The entropy formula for the Ricci flow and its geometric applications*, *Ricci flow with
surgery on three-manifolds*, and *Finite extinction time for the solutions to the Ricci flow on certain three-manifolds*.
He did not submit them to a journal. Their main new ideas, stated loosely:

- **Monotone quantities.** Perelman found functionals of the metric (an "entropy" $\mathcal{W}$, and a "reduced volume")
  that never decrease along the flow, like entropy in thermodynamics. They control the geometry at small scales.
- **No local collapsing.** At points of large curvature, the flow cannot make small balls collapse to have tiny volume
  compared with their radius. This rules out the singularity models Hamilton could not exclude.
- **Canonical neighbourhoods.** Every region of very high curvature looks, after rescaling, like a piece of a shrinking
  round cylinder (a neck), a cap, or a shrinking quotient of a sphere. So surgery always has a good place to cut.
- **Surgery with control.** With necks chosen carefully, surgery times do not accumulate, and the flow with surgery exists
  for all time.
- **Finite extinction.** If $M$ is simply connected (more generally, if its prime pieces have finite fundamental groups or
  are $S^2 \times S^1$), the flow with surgery becomes extinct in finite time: everything shrinks away in recognisable
  round pieces. Undoing the surgeries shows $M$ is a connected sum of $S^3$'s, quotients $S^3/\Gamma$ and copies of $S^2
  \times S^1$; simply connected forces $S^3$. Tobias Colding and William Minicozzi gave another proof of finite extinction
  (published 2005).
- **Long-time behaviour.** For general $M$, as $t \to \infty$ the manifold splits into a "thick" part, which approaches a
  hyperbolic metric, and a "thin" part, which collapses and turns out to be a graph manifold (made of Seifert pieces).
  That is geometrisation.

Perelman's papers were short and dense. Several teams spent years writing out the details: Bruce Kleiner and John Lott
(notes posted from 2003, published in 2008), John Morgan and Gang Tian (a book on the Poincaré conjecture, 2007, and one on
geometrisation, 2014), Huai-Dong Cao and Xi-Ping Zhu (2006), and a group of five authors (Bessières, Besson, Boileau,
Maillot and Porti, 2010) who gave a variant proof of geometrisation. By 2006 the experts were convinced.

### The prizes

In August 2006 the International Mathematical Union awarded Perelman a Fields Medal "for his contributions to geometry and
his revolutionary insights into the analytical and topological structure of the Ricci flow". He declined it, the first
person to do so, and did not attend the congress in Madrid. On 18 March 2010 the Clay Mathematics Institute announced that
he had been awarded the Millennium Prize for the resolution of the Poincaré conjecture. In July 2010 he declined that too.
He was reported as saying that he considered Hamilton's contribution no less than his own and that he disagreed with
decisions of the organised mathematical community. He had left the Steklov Institute and stopped publishing. The
Poincaré conjecture remains, as of this writing, the only one of the seven Millennium Problems to have been solved.

### Try it in Python

The round sphere's radius under Ricci flow is one line; here it is in dimensions 2 and 3, and for a 3-dimensional
hyperbolic manifold, which expands.

```python
def radius_squared(r0, t, n, sign=+1):
    """Round sphere (sign=+1) or hyperbolic space (sign=-1) of dimension n under Ricci flow."""
    return r0**2 - sign * 2 * (n - 1) * t

for t in [0, 0.1, 0.2, 0.25]:
    print(t, *(round(radius_squared(1, t, n, s), 3) for n, s in [(3, 1), (2, 1), (3, -1)]))
# 0     1     1     1
# 0.1   0.6   0.8   1.4
# 0.2   0.2   0.6   1.8
# 0.25  0.0   0.5   2.0
```

The 3-sphere of radius 1 vanishes at $t = 1/4$; the 2-sphere at $t = 1/2$.

## 19.5 What it means

*Level: everyone.*

**Three-dimensional spaces are understood.** Geometrisation does for 3-manifolds what the classification did for
surfaces, if less simply: every closed 3-manifold is assembled, in a canonical way, from geometric pieces, and each
geometric piece is described by a group acting on a model space. A consequence, worked out by later authors, is that
there is an algorithm that decides whether two closed 3-manifolds (given by triangulations) are homeomorphic. Even before
Perelman there was an algorithm to recognise $S^3$ itself, due to Rubinstein (1992) and Thompson (1994), using normal
surfaces as in [Chapter 18](18-Knot-Theory.md); Schleimer showed in 2011 that the recognition problem is in NP.

**Four dimensions are different.** In dimension 4 and up, every finitely presented group is the fundamental group of some
closed manifold. Since there is no algorithm deciding whether a finitely presented group is trivial (the word problem
and its relatives, [Logic, chapter 14](../logic/14-Undecidability.md) and [Chapter 15](15-Van-Kampen-and-Surfaces.md)),
A. A. Markov showed in 1958 that **there is no algorithm deciding whether two 4-manifolds are homeomorphic**. Three
dimensions sit at a sweet spot: complicated enough to be rich, restricted enough to be classified.

**Hyperbolic geometry is everywhere.** Most 3-manifolds are hyperbolic, and since Mostow's rigidity theorem
(1968) their geometry is determined by their topology, so numbers such as hyperbolic volume are topological
invariants. Later work built on geometrisation: Ian Agol, using work of Daniel Wise and others, proved in 2012 that every
closed hyperbolic 3-manifold has a finite cover that is Haken, and indeed fibres over the circle, settling questions
Thurston had posed.

**Analysis can solve topology.** The proof used a partial differential equation, careful estimates and the
classification of singular behaviour, the toolkit of analysis, to answer a question about shapes. That union of
geometry, analysis and topology is one of the main currents of mathematics since.

**The shape of the universe.** Our universe, at each moment, may be a 3-manifold ([Chapter 11](11-Manifolds.md)).
If it is closed and every loop in it can be contracted, the theorem says it is topologically a 3-sphere. That is a fact
about mathematics, not cosmology: observations have not determined whether space is finite, let alone its topology.

## Check yourself

??? question "1. Explain why a closed surface with first homology $H_1 = 0$ must be the sphere, using the classification."
    The closed surfaces are $S^2$ ($H_1 = 0$), the connected sum of $g \ge 1$ tori ($H_1 = \mathbb{Z}^{2g} \ne 0$) and the
    connected sum of $k \ge 1$ projective planes ($H_1 = \mathbb{Z}^{k-1} \oplus \mathbb{Z}/2 \ne 0$). Only $S^2$ has
    $H_1 = 0$. Since $H_1$ is the abelianisation of $\pi_1$, a simply connected surface has $H_1 = 0$ and is $S^2$.

??? question "2. Show that $S^2 \times S^2$ is simply connected but not homeomorphic to $S^4$."
    $\pi_1(S^2 \times S^2) = \pi_1(S^2) \times \pi_1(S^2) = 0$. But $H_2(S^2 \times S^2) \cong \mathbb{Z}^2$ (one class
    for each factor), while $H_2(S^4) = 0$. Homeomorphic spaces have isomorphic homology, so they differ. This is why the
    generalised conjecture asks for homotopy equivalence with $S^n$, not just simple connectivity.

??? question "3. What are $\pi_1$ and $H_1$ of the lens space $L(5,1)$? Why is it not a counterexample to the Poincaré conjecture?"
    $\pi_1 = \mathbb{Z}/5$ (it is the quotient of $S^3$ by a free action of the cyclic group of order 5), and $H_1$ is its
    abelianisation, also $\mathbb{Z}/5$. It is not simply connected, so the conjecture says nothing about it.

??? question "4. A 3-manifold has fundamental group $\langle a, b \mid a^2 b^{-3} = 1,\ a^3 b^{-4} = 1 \rangle$. Compute $H_1$. Can you conclude that the manifold is $S^3$?"
    Abelianise: $2a - 3b = 0$ and $3a - 4b = 0$. The matrix $\begin{pmatrix} 2 & -3 \\ 3 & -4\end{pmatrix}$ has
    determinant $-8 + 9 = 1$, so $H_1 = 0$. But $H_1 = 0$ only says the group is perfect, not trivial (the binary
    icosahedral group is perfect and has 120 elements). To conclude $S^3$ you need $\pi_1$ trivial. (Here it is: from
    $a^2 = b^3$ and $a^3 = b^4$, $a = a^3 a^{-2} = b^4 b^{-3} = b$, then $b^2 = b^3$ gives $b = 1$. So the group is
    trivial and, by Perelman, the manifold is $S^3$.)

??? question "5. Under Ricci flow, when does a round 3-sphere of radius 2 shrink to a point? A round 2-sphere of radius 2?"
    For $n = 3$, $r^2 = r_0^2 - 4t = 4 - 4t$, which reaches 0 at $t = 1$. For $n = 2$, $r^2 = 4 - 2t$, which reaches 0 at
    $t = 2$.

??? question "6. Why does a neck in a dumbbell pinch before the bulbs shrink away?"
    The neck is close to a cylinder $S^2 \times \mathbb{R}$ with a small radius $\rho$. Under Ricci flow the $S^2$ factor
    of radius $\rho$ disappears in time about $\rho^2/2$ (from $\rho^2 - 2t = 0$), while a bulb of radius $R$ needs time
    about $R^2/4$. If $\rho$ is much smaller than $R$, specifically $\rho^2/2 < R^2/4$, the neck pinches first. (The real
    dumbbell is not exactly a cylinder joined to spheres, so this is a heuristic; making it rigorous was part of the work.)

??? question "7. Which of Thurston's geometries do $T^3$, $S^2 \times S^1$ and $\mathbb{RP}^3$ carry?"
    $T^3 = \mathbb{R}^3/\mathbb{Z}^3$ is Euclidean ($\mathbb{E}^3$). $S^2 \times S^1$ carries $S^2 \times \mathbb{R}$.
    $\mathbb{RP}^3 = S^3/\{\pm 1\}$ is spherical ($S^3$ geometry).

??? question "8. In the proof that geometrisation implies Poincaré, where exactly is compactness used, and what goes wrong for the Whitehead manifold?"
    Compactness is used at the end: of the eight model spaces only $S^3$ is compact, so a closed $M = X$ must be $S^3$.
    The Whitehead manifold is not compact, so this step (and geometrisation itself, which is about closed manifolds) does
    not apply. Being contractible, it has trivial $\pi_1$, but it is not homeomorphic to any model space.

??? question "9. Why is the Whitney trick available in dimension 5 but not 4? Give the dimension count."
    The trick slides along an embedded 2-dimensional Whitney disc, which must avoid the other 2-dimensional pieces it
    passes near. Two generic submanifolds of dimensions $a$ and $b$ in an $n$-manifold meet in dimension $a + b - n$, and
    miss each other when $a + b < n$. With $a = b = 2$: they miss when $n \ge 5$; when $n = 4$ they generically meet in
    points, and the disc cannot be cleaned up by moving it slightly.

??? question "10. The connected sum $P \# P$ of two Poincaré homology spheres: what are its homology and fundamental group? Is it $S^3$?"
    Homology: $H_1(P \# P) = H_1(P) \oplus H_1(P) = 0$, and $H_2 = 0$ too, so it is a homology sphere. Its fundamental
    group is the free product $\Gamma * \Gamma$ (van Kampen), which is infinite and non-trivial. So it is not $S^3$; and
    it is not prime, so it is not a single geometric piece either.

??? question "11. Show that the mapping torus of the cat map is not one of $T^3$ or the other Euclidean examples, by looking at $H_1$."
    The mapping torus $M_A$ of $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ has $H_1 \cong \mathbb{Z} \oplus
    \mathbb{Z}^2/(A - I)\mathbb{Z}^2$. Here $A - I = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$ has determinant $-1$, so
    the second part is 0 and $H_1 = \mathbb{Z}$. But $H_1(T^3) = \mathbb{Z}^3$. (The other closed Euclidean manifolds also
    differ, but the Sol geometry of $M_A$ is the real reason: its fundamental group has exponential growth, while
    Euclidean groups have polynomial growth.)

??? question "12. Why did Perelman's proof need the finite extinction theorem only for the Poincaré conjecture, but the long-time analysis for full geometrisation?"
    For a simply connected $M$, finite extinction shows the flow with surgery ends in finite time with all pieces
    recognised as round quotients or $S^2 \times S^1$ pieces, so one never needs to know what happens as $t \to \infty$.
    For general $M$, the flow may run forever (hyperbolic pieces expand), and one must understand the limit, the thick
    hyperbolic part and the thin collapsed part, to read off the geometric decomposition.

## What you learned

- The Poincaré conjecture: a closed simply connected 3-manifold is $S^3$. Homology alone is not enough, as the Poincaré
  homology sphere, with fundamental group of order 120, shows.
- In two dimensions the analogue follows from the classification of surfaces; in dimension $n \ge 5$ Smale proved the
  generalised conjecture with handles and the Whitney trick; Freedman proved it topologically in dimension 4.
- Thurston's geometrisation conjecture says every closed 3-manifold is cut by spheres and tori into pieces with one of
  eight geometries; it implies Poincaré.
- Hamilton's Ricci flow is a heat equation for metrics; Perelman controlled its singularities, performed surgery, and
  proved geometrisation in 2002 and 2003.
- Perelman declined the Fields Medal (2006) and the Millennium Prize (2010).
- 3-manifolds are now classifiable in principle; 4-manifolds provably are not, by any algorithm.

**Next:** [Chapter 20](20-Where-Topology-Goes.md), exotic spheres, the smooth 4-dimensional Poincaré conjecture,
homotopy groups of spheres, topology in physics, and the open problems.

## Further reading

- H. Poincaré, "Cinquième complément à l'Analysis Situs", *Rendiconti del Circolo Matematico di Palermo* 18, 1904
  (where the homology sphere and the question appear).
- J. Milnor, "Towards the Poincaré conjecture and the classification of 3-manifolds", *Notices of the American
  Mathematical Society* 50, 2003 (a clear survey written just after Perelman's preprints).
- W. P. Thurston, "Three dimensional manifolds, Kleinian groups and hyperbolic geometry", *Bulletin of the American
  Mathematical Society* 6, 1982, and *Three-Dimensional Geometry and Topology*, Vol. 1, Princeton University Press, 1997.
- P. Scott, "The geometries of 3-manifolds", *Bulletin of the London Mathematical Society* 15, 1983.
- G. Perelman, "The entropy formula for the Ricci flow and its geometric applications" (2002), "Ricci flow with surgery on
  three-manifolds" (2003), "Finite extinction time for the solutions to the Ricci flow on certain three-manifolds" (2003),
  preprints on the arXiv.
- B. Kleiner and J. Lott, "Notes on Perelman's papers", *Geometry and Topology* 12, 2008.
- J. Morgan and G. Tian, *Ricci Flow and the Poincaré Conjecture*, Clay Mathematics Monographs 3, 2007.
- B. Chow and D. Knopf, *The Ricci Flow: An Introduction*, American Mathematical Society, 2004.
- D. O'Shea, *The Poincaré Conjecture: In Search of the Shape of the Universe*, Walker, 2007 (for a general reader).
- On this site: [Geometry, chapter 20: Manifolds and Riemannian geometry](../geometry/20-Manifolds-and-Riemannian-Geometry.md),
  [Geometry, chapter 21: Where geometry goes](../geometry/21-Where-Geometry-Goes.md),
  [Logic, chapter 14: Undecidability](../logic/14-Undecidability.md), and for the gentlest possible start on spheres,
  the Topics lesson [Sphere geometry](../../topics/geometry/level-8/06-sphere-geometry.md).
