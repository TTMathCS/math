# 11. Manifolds

*Stand in a field and the Earth looks flat; only from far away does it close up into a sphere. A surface is a space
that looks like a flat plane near each of its points, whatever it does globally. Replace "plane" by "$n$-dimensional
space" and you have a manifold, the central object of modern geometry and topology and the natural setting for physics.
This chapter defines manifolds carefully, with charts and atlases, and works through the main examples: spheres, tori,
projective spaces, the space of positions of a robot arm, the space of orientations of a rigid body. It explains what
extra structure makes a manifold smooth, why the dimension of a manifold is well defined (a fact much harder than it
looks), and what is known, and not known, about the three-dimensional manifold we live in.*

!!! abstract "In this chapter"
    **You will learn:**

    - the definition of a topological manifold: locally Euclidean, Hausdorff, second countable; charts, atlases and transition maps
    - how to write down charts for spheres (stereographic projection), tori and real projective spaces
    - that configuration spaces of mechanical systems, like a robot arm or a spinning top, are manifolds
    - what a smooth structure is, and the regular value theorem that makes many examples at once
    - invariance of domain, and why $\mathbb{R}^m$ and $\mathbb{R}^n$ are not homeomorphic when $m \neq n$
    - examples of 3-manifolds, and what cosmology can and cannot say about the shape of space

    **You need:** [Chapter 5](05-Continuity-and-Homeomorphism.md) (homeomorphisms), [Chapter 6](06-Building-New-Spaces.md)
    (products and quotients), [Chapter 7](07-Connectedness.md) (connectedness), [Chapter 9](09-Separation-and-Metrisation.md)
    (Hausdorff, second countable, the strange spaces of 9.5) and [Chapter 10](10-Classification-of-Surfaces.md) (surfaces).
    Some multivariable calculus for 11.3; the U of T guides on
    [the implicit function theorem](../../uoft/MAT257Y1/unit07.md) and [manifolds in R^n](../../uoft/MAT257Y1/unit13.md)
    cover it.

    **Levels:** 11.1 and 11.2 are intermediate; 11.3 is advanced; 11.4 is advanced (the main theorem is stated, with
    its consequences proved); 11.5 is advanced in content but written as a survey.

## 11.1 Locally like $\mathbb{R}^n$

### The definition

**Definition.** A **topological manifold of dimension $n$** (an **$n$-manifold**) is a topological space $M$ such that

1. **(locally Euclidean)** every point $p \in M$ has an open neighbourhood $U$ that is homeomorphic to an open subset of
   $\mathbb{R}^n$;
2. **(Hausdorff)** any two different points have disjoint open neighbourhoods;
3. **(second countable)** the topology has a countable basis.

A homeomorphism $\varphi : U \to \varphi(U) \subseteq \mathbb{R}^n$ as in (1) is a **chart** (or coordinate chart)
around $p$: it gives each point of $U$ a list of $n$ coordinates, $\varphi(q) = (x_1(q), \ldots, x_n(q))$. A collection
of charts whose domains cover $M$ is an **atlas**. The words come from geography, and the analogy is exact: an atlas of
the Earth is a book of flat maps, each showing part of the globe, which together show all of it, and where two maps
overlap you can convert positions from one to the other.

Condition (1) alone is not enough to make a space behave like the spaces we have in mind. Chapter 9, section 9.5, showed
why: the line with two origins satisfies (1) and (3) but not (2), and limits in it are not unique; the long line satisfies
(1) and (2) but not (3), and it has no metric. With all three conditions, manifolds are metrisable (Corollary 9.11), and
they can be embedded in some $\mathbb{R}^N$ (a theorem of Whitney, 11.3).

**Dimension 0** manifolds are countable discrete spaces ($\mathbb{R}^0$ is a point). **Dimension 1**: the line and the
circle, and disjoint unions of them; every connected 1-manifold is homeomorphic to $\mathbb{R}$ or $S^1$ (a theorem we do
not prove). **Dimension 2** manifolds are the surfaces of [Chapter 10](10-Classification-of-Surfaces.md).

### Transition maps

Suppose two charts $\varphi : U \to \mathbb{R}^n$ and $\psi : V \to \mathbb{R}^n$ overlap. A point $q \in U \cap V$ has
two lists of coordinates, $\varphi(q)$ and $\psi(q)$. The map converting one to the other,

$$
\psi \circ \varphi^{-1} : \varphi(U \cap V) \to \psi(U \cap V),
$$

is the **transition map**. It is a homeomorphism between open subsets of $\mathbb{R}^n$, since it is a composition of
homeomorphisms. Transition maps are where all the interesting information sits: the charts themselves are just copies of
pieces of $\mathbb{R}^n$, and the way they are fitted together is what makes a sphere differ from a torus.

**Worked example (the circle, with two angle charts).** Let $S^1 = \{(x, y) : x^2 + y^2 = 1\}$. Let
$U = S^1 \setminus \{(1, 0)\}$ and $V = S^1 \setminus \{(-1, 0)\}$. Define the charts

$$
\varphi(\cos\theta, \sin\theta) = \theta \in (0, 2\pi), \qquad \psi(\cos\theta, \sin\theta) = \theta \in (-\pi, \pi).
$$

Each is a homeomorphism onto an open interval (its inverse $\theta \mapsto (\cos\theta, \sin\theta)$ is continuous, and a
continuous bijection is open here by an argument like Theorem 9.5 on closed subintervals). The overlap $U \cap V$ is the
circle minus two points, two open arcs: the upper half (where $\varphi(q) \in (0, \pi)$) and the lower half (where
$\varphi(q) \in (\pi, 2\pi)$). The transition map is

$$
\psi \circ \varphi^{-1}(\theta) =
\begin{cases} \theta & \text{if } 0 < \theta < \pi, \\ \theta - 2\pi & \text{if } \pi < \theta < 2\pi. \end{cases}
$$

Check: the point $(0, -1)$ has $\varphi = 3\pi/2$ and $\psi = -\pi/2 = 3\pi/2 - 2\pi$. The circle cannot be covered by a
single chart (it is compact, and a compact subset of $\mathbb{R}$ that is open must be empty), so two is the minimum.

### What is not a manifold

**Worked example (the figure eight).** Let $X$ be two circles touching at one point $p$, like the figure 8. Every point
other than $p$ has a neighbourhood that is an open arc. Is $X$ a 1-manifold? No. Here is the proof.

Near $p$, $X$ looks like a cross: four arms meeting at $p$. Let $C$ be a small cross-shaped neighbourhood of $p$, so that
$C \setminus \{p\}$ is four disjoint open arms. Suppose $p$ had a chart to an open subset of $\mathbb{R}^n$.

- If $n = 0$, $p$ would be an isolated point, but every neighbourhood of $p$ contains other points.
- Otherwise, inside $C$ there would be an open neighbourhood $W$ of $p$ homeomorphic to an open ball of $\mathbb{R}^n$
  (take a small ball around the image of $p$ and pull it back). Then $W \setminus \{p\}$ is homeomorphic to a ball minus
  its centre. For $n = 1$ that is an interval minus a point: exactly 2 components. For $n \ge 2$ it is connected. But
  $W$ is open and contains $p$, so it contains a small piece of each of the four arms, and $W \setminus \{p\}$ is split
  by the four disjoint arms into at least 4 nonempty disjoint open pieces: at least 4 components.

Either way we have a contradiction, so no chart exists at $p$. The same "remove a point and count components" argument
shows that the letter X, the letter T and the union of the two coordinate axes in $\mathbb{R}^2$ are not manifolds.

**Non-example (the double cone).** The cone $\{x^2 + y^2 = z^2\}$ in $\mathbb{R}^3$ is two cones meeting at the origin.
Away from the origin it is a surface. At the origin, a small connected neighbourhood minus the origin falls into two
pieces (upper and lower), while a disc minus a point is connected. So it is not a 2-manifold. (The *single* cone
$\{x^2 + y^2 = z^2, z \ge 0\}$ is a 2-manifold: projecting to the $(x, y)$-plane is a homeomorphism onto $\mathbb{R}^2$.
It is not a *smooth* surface in $\mathbb{R}^3$, because of the point, but topology does not care about corners.)

### Manifolds with boundary

A **manifold with boundary** is defined the same way with the model space $\mathbb{R}^n$ replaced by the closed
half-space $H^n = \{x \in \mathbb{R}^n : x_n \ge 0\}$. Points sent by charts to the plane $x_n = 0$ form the
**boundary** $\partial M$. The closed disc, the closed ball, the annulus and the Möbius band are manifolds with boundary.
That no point can be both a boundary point and an interior point is proved in 11.4.

## 11.2 Examples

### Spheres and stereographic projection

The $n$-sphere is $S^n = \{x \in \mathbb{R}^{n+1} : x_1^2 + \cdots + x_{n+1}^2 = 1\}$. It is Hausdorff and second
countable because it is a subspace of $\mathbb{R}^{n+1}$ (both properties pass to subspaces). Two charts cover it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Stereographic projection of a circle from its north pole N onto the horizontal line through its centre. A point P below the line projects to a point inside the circle; a point Q above the line projects to a point outside. Every point except N gets exactly one image">
  <line x1="20" y1="140" x2="400" y2="140" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="140" r="80" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
  <line x1="210" y1="60" x2="271.3" y2="191.4" stroke="#eea66f" stroke-width="2"/>
  <line x1="210" y1="60" x2="348.6" y2="140" stroke="#7ccf9a" stroke-width="2"/>
  <circle cx="210" cy="60" r="4" fill="currentColor"/>
  <text x="210" y="48" text-anchor="middle" font-size="13" fill="currentColor">N</text>
  <circle cx="271.3" cy="191.4" r="4" fill="currentColor"/>
  <text x="284" y="206" text-anchor="middle" font-size="13" fill="currentColor">P</text>
  <circle cx="247.3" cy="140" r="4" fill="#eea66f"/>
  <text x="240" y="158" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">σ(P)</text>
  <circle cx="279.3" cy="100" r="4" fill="currentColor"/>
  <text x="290" y="92" text-anchor="middle" font-size="13" fill="currentColor">Q</text>
  <circle cx="348.6" cy="140" r="4" fill="#7ccf9a"/>
  <text x="352" y="158" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">σ(Q)</text>
  <circle cx="210" cy="220" r="3" fill="currentColor"/>
  <text x="210" y="238" text-anchor="middle" font-size="13" fill="currentColor">S</text>
</svg>
</div>

Let $N = (0, \ldots, 0, 1)$ be the north pole and $S = (0, \ldots, 0, -1)$ the south pole. **Stereographic projection**
from $N$ sends a point $x \neq N$ of the sphere to the point where the line from $N$ through $x$ meets the plane
$x_{n+1} = 0$:

$$
\sigma(x) = \frac{(x_1, \ldots, x_n)}{1 - x_{n+1}}, \qquad
\sigma^{-1}(u) = \left( \frac{2u}{|u|^2 + 1}, \frac{|u|^2 - 1}{|u|^2 + 1} \right).
$$

Here $u \in \mathbb{R}^n$ and $|u|^2 = u_1^2 + \cdots + u_n^2$. Both formulas are continuous (denominators never vanish
on the relevant domains) and they are inverse to each other, so $\sigma : S^n \setminus \{N\} \to \mathbb{R}^n$ is a
chart. Projection from the south pole gives a second chart $\tau(x) = (x_1, \ldots, x_n)/(1 + x_{n+1})$ on
$S^n \setminus \{S\}$.

**The transition map.** On the overlap, $u = \sigma(x)$ with $u \neq 0$. Put $x = \sigma^{-1}(u)$; then
$1 + x_{n+1} = 2|u|^2/(|u|^2 + 1)$, so

$$
\tau \circ \sigma^{-1}(u) = \frac{2u/(|u|^2 + 1)}{2|u|^2/(|u|^2 + 1)} = \frac{u}{|u|^2}.
$$

This is **inversion in the unit sphere** ([Geometry, Chapter 13](../geometry/13-Inversion-and-Complex-Geometry.md)): it
keeps the direction of $u$ and replaces its length $r$ by $1/r$. Check: the equator ($|u| = 1$) is fixed, as it should be,
since stereographic projection from either pole sends equator points to themselves.

Check that $\sigma^{-1}(u)$ lies on the sphere: $|2u|^2 + (|u|^2 - 1)^2 = 4|u|^2 + |u|^4 - 2|u|^2 + 1 = (|u|^2 + 1)^2$,
so dividing by $(|u|^2 + 1)^2$ gives 1. (This and the transition formula were also checked with sympy for $n = 3$.)

Stereographic projection also shows that **$S^n$ is the one-point compactification of $\mathbb{R}^n$**
([Chapter 8](08-Compactness.md)): the chart $\sigma$ identifies $S^n \setminus \{N\}$ with $\mathbb{R}^n$, and $N$ is the
point at infinity.

### Products, and tori

**Theorem 11.1.** *If $M$ is an $m$-manifold and $N$ an $n$-manifold, then $M \times N$ is an $(m+n)$-manifold.*

**Proof.** Products of Hausdorff spaces are Hausdorff (Theorem 9.2). If $\mathcal{B}$ and $\mathcal{C}$ are countable
bases, the products $B \times C$ form a countable basis of the product topology. If $\varphi : U \to \mathbb{R}^m$ and
$\psi : V \to \mathbb{R}^n$ are charts around $p$ and $q$, then
$\varphi \times \psi : U \times V \to \mathbb{R}^m \times \mathbb{R}^n = \mathbb{R}^{m+n}$ is a homeomorphism onto the open
set $\varphi(U) \times \psi(V)$, so it is a chart around $(p, q)$. $\square$

So the **$n$-torus** $T^n = S^1 \times \cdots \times S^1$ ($n$ factors) is an $n$-manifold, as are the cylinder
$S^1 \times \mathbb{R}$ and $S^2 \times S^1$. The $n$-torus is also the cube $[0, 1]^n$ with opposite faces glued, or the
quotient $\mathbb{R}^n / \mathbb{Z}^n$ (points of $\mathbb{R}^n$ are identified when they differ by a vector of integers);
in that description a chart is just a small open cube, projected down.

### Real projective space

The **real projective space** $\mathbb{RP}^n$ is the set of lines through the origin in $\mathbb{R}^{n+1}$. A line is
spanned by any nonzero vector on it, and two vectors span the same line when one is a nonzero multiple of the other, so
we write a point as $[x_0 : x_1 : \cdots : x_n]$ (**homogeneous coordinates**), where
$[x_0 : \cdots : x_n] = [\lambda x_0 : \cdots : \lambda x_n]$ for any $\lambda \neq 0$. Topologically, $\mathbb{RP}^n$ is
the quotient of $S^n$ by identifying each point with its antipode $-x$ (each line meets the sphere in two antipodal
points). For $n = 2$ this is the projective plane of [Chapter 10](10-Classification-of-Surfaces.md) and of
[Geometry, Chapter 18](../geometry/18-Projective-Geometry.md).

**Charts.** For $i = 0, \ldots, n$ let $U_i$ be the set of points with $x_i \neq 0$. Any point of $U_i$ can be scaled so
that $x_i = 1$, uniquely, so

$$
\varphi_i [x_0 : \cdots : x_n] = \left( \frac{x_0}{x_i}, \ldots, \widehat{\frac{x_i}{x_i}}, \ldots, \frac{x_n}{x_i} \right) \in \mathbb{R}^n
$$

(the hat means "leave this entry out") is a bijection $U_i \to \mathbb{R}^n$, with inverse
$(u_1, \ldots, u_n) \mapsto [u_1 : \cdots : 1 : \cdots : u_n]$ ($1$ in position $i$). Both directions are continuous, so
these $n + 1$ **affine charts** form an atlas. Every point has some nonzero coordinate, so they cover.

**Worked example ($\mathbb{RP}^1$ is a circle).** For $n = 1$ the charts are $\varphi_0[x_0 : x_1] = x_1/x_0$ and
$\varphi_1[x_0 : x_1] = x_0/x_1$. On the overlap the transition is $t \mapsto 1/t$ on $\mathbb{R} \setminus \{0\}$. This
is exactly the transition map of the stereographic atlas of $S^1$ (the case $n = 1$ of $u \mapsto u/|u|^2$). Two
manifolds built from the same pieces glued by the same transition maps are homeomorphic, so $\mathbb{RP}^1 \cong S^1$.
(Directly: a line through the origin in the plane is determined by its angle $\theta \in [0, \pi)$, and the map
$\theta \mapsto 2\theta$ wraps this around a full circle.)

**Worked example ($\mathbb{RP}^2$).** On $U_0 \cap U_1$, with $u = x_1/x_0$ and $v = x_2/x_0$, the chart $\varphi_1$ gives
$(x_0/x_1, x_2/x_1) = (1/u, v/u)$. So the transition map is $(u, v) \mapsto (1/u, v/u)$ on $\{u \neq 0\}$. Check with the
point $[1 : 2 : 3]$: $\varphi_0 = (2, 3)$, $\varphi_1 = (1/2, 3/2)$, and the formula gives $(1/2, 3/2)$.

Hausdorff and second countable: $\mathbb{RP}^n$ is the image of the compact space $S^n$, so it is compact, and it is the
quotient by a closed equivalence relation with closed quotient map (the image of a closed set $C$ is the image of
$C \cup (-C)$, which is closed and saturated), so it is Hausdorff by Exercise 12 of Chapter 9. Finitely many charts with
second countable domains give a countable basis.

### The configuration space of a robot arm

The examples so far were invented by mathematicians. Here is one that engineers meet whether they want to or not.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 230" role="img" aria-label="Left: a planar two-link robot arm with a fixed base, first link at angle theta 1 from the horizontal and second link at angle theta 2 from the first. Right: a square of side two pi in which the point with coordinates theta 1 and theta 2 records the configuration; opposite sides of the square are glued, so the configuration space is a torus">
  <line x1="30" y1="180" x2="200" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="60" y1="180" x2="136.6" y2="115.7" stroke="#eea66f" stroke-width="5" stroke-linecap="round"/>
  <line x1="136.6" y1="115.7" x2="136.6" y2="45.7" stroke="#9cc9ea" stroke-width="5" stroke-linecap="round"/>
  <line x1="136.6" y1="115.7" x2="167.2" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 90 180 A 30 30 0 0 0 82.98 160.72" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 155.75 99.63 A 25 25 0 0 0 136.6 90.7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="60" cy="180" r="6" fill="currentColor"/>
  <circle cx="136.6" cy="115.7" r="5" fill="currentColor"/>
  <circle cx="136.6" cy="45.7" r="4" fill="currentColor"/>
  <text x="104" y="172" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">θ1</text>
  <text x="160" y="80" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">θ2</text>
  <text x="60" y="205" text-anchor="middle" font-size="12" fill="currentColor">base</text>
  <rect x="300" y="30" width="160" height="160" fill="#7ccf9a" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="317.8" cy="167.8" r="5" fill="currentColor"/>
  <text x="380" y="210" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">θ1 from 0 to 2π</text>
  <text x="290" y="114" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">θ2</text>
  <text x="380" y="20" text-anchor="middle" font-size="12" fill="currentColor">opposite sides glued: a torus</text>
</svg>
</div>

A planar robot arm has two rigid links, of lengths $L_1$ and $L_2$, joined at an elbow; the first link turns about a fixed
base. Every position of the arm is described by two angles: $\theta_1$, the angle of the first link, and $\theta_2$, the
angle of the second link relative to the first. Each angle is a point of the circle (an angle and the same angle plus
$2\pi$ give the same position), and the two can be chosen independently. So the set of all positions, the
**configuration space**, is $S^1 \times S^1 = T^2$, a torus.

This is not just a relabelling. Motion planning ("move the arm from this position to that one without hitting anything")
is the problem of finding a path in the configuration space that avoids the forbidden region. The forbidden region lives
on a torus, not a square: a path may leave the square through the right edge and come back through the left.

**Where can the hand reach?** The position of the hand is

$$
h(\theta_1, \theta_2) = \big( L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2),\; L_1 \sin\theta_1 + L_2 \sin(\theta_1 + \theta_2) \big).
$$

Its distance $r$ from the base satisfies $r^2 = L_1^2 + L_2^2 + 2L_1L_2 \cos\theta_2$ (the cosine law), so $r$ ranges over
$[\,|L_1 - L_2|, L_1 + L_2\,]$: the hand reaches exactly an annulus. The map $h$ from the torus onto the annulus is
two-to-one inside (an "elbow up" and an "elbow down" configuration) and one-to-one on the two boundary circles (arm
straight or fully folded).

**Worked example.** $L_1 = 2$, $L_2 = 1$; reach the point $(2, 1)$. Then $r^2 = 5$, so
$\cos\theta_2 = (5 - 4 - 1)/(2 \cdot 2 \cdot 1) = 0$ and $\theta_2 = \pm 90°$.

- $\theta_2 = 90°$, $\theta_1 = 0°$: elbow at $(2, 0)$, hand at $(2, 0) + (\cos 90°, \sin 90°) = (2, 1)$.
- $\theta_2 = -90°$, $\theta_1 \approx 53.13°$: elbow at $(2\cos 53.13°, 2\sin 53.13°) = (1.2, 1.6)$, second link at
  angle $53.13° - 90° = -36.87°$, so the hand is at $(1.2 + 0.8, 1.6 - 0.6) = (2, 1)$.

Check: both configurations put the hand at $(2, 1)$, confirming two preimages. ($\cos 53.13° = 0.6$ and
$\sin 53.13° = 0.8$, the 3-4-5 triangle.)

**More joints, more dimensions.** An arm with $k$ rotating joints in a chain has configuration space $T^k$ if every joint
can turn all the way round; real joints have limits, so the actual configuration space is a region inside $T^k$. The
robotic arms of NASA's Curiosity and Perseverance rovers on Mars each have five rotating joints, so their
configuration spaces sit inside the 5-torus $T^5$, and planning their motions around rocks and the rover's own body is
path-finding in a 5-dimensional manifold.

**A rigid body.** The orientations of a rigid body in space (a satellite, a spinning top, a rover's mast camera head)
form the **rotation group** $SO(3)$: the $3 \times 3$ orthogonal matrices with determinant 1
([Linear algebra, Chapter 13](../linear-algebra/13-Orthogonal-Matrices-and-Rotations.md)). Every rotation is a rotation
by some angle $\phi \in [0, \pi]$ about some axis $u$ (a unit vector). Send it to the point $\phi u$ of the closed ball
of radius $\pi$. This is one-to-one except on the boundary sphere: a rotation by $\pi$ about $u$ is the same as a
rotation by $\pi$ about $-u$, so antipodal boundary points must be identified. A ball with antipodal boundary points
identified is $\mathbb{RP}^3$ (the same argument as for $\mathbb{RP}^2$ as a disc with antipodal boundary points glued),
so

$$
SO(3) \cong \mathbb{RP}^3.
$$

The configuration space of a free rigid body (position and orientation) is $\mathbb{R}^3 \times SO(3)$, a 6-manifold:
the "six degrees of freedom" of aerospace engineering.

**Closed linkages.** If the arm's chain is closed into a loop, the configuration space is cut out by equations (the loop
must close), and it is usually a manifold of lower dimension. For a planar four-bar linkage with one bar fixed, it is
generically one circle or two disjoint circles, depending on the bar lengths. When the lengths are special (for
example when the linkage can lie flat in a straight line), the configuration space can have singular points like the
crossing of a figure eight; this is the mechanical meaning of "not a manifold".

## 11.3 Smooth manifolds

*Level: advanced.*

On a topological manifold you can ask whether a function is continuous, but not whether it is differentiable: a chart
is only a homeomorphism, and a function that looks smooth in one chart may look like $|x|$ in another. To do calculus
we need the transition maps to be differentiable.

**Definition.** Two charts $\varphi, \psi$ on $M$ are **smoothly compatible** if the transition maps
$\psi \circ \varphi^{-1}$ and $\varphi \circ \psi^{-1}$ are smooth ($C^\infty$: all partial derivatives of all orders
exist and are continuous) on their domains. A **smooth atlas** is an atlas whose charts are pairwise smoothly compatible.
A **smooth manifold** is a manifold with a maximal smooth atlas (one containing every chart compatible with all of its
charts; any smooth atlas determines exactly one maximal atlas containing it).

A function $f : M \to \mathbb{R}$ is **smooth** if $f \circ \varphi^{-1}$ is smooth for every chart in the atlas.
Compatibility is what makes this well defined: in another chart $\psi$, the function is
$f \circ \psi^{-1} = (f \circ \varphi^{-1}) \circ (\varphi \circ \psi^{-1})$, a composition of smooth maps. A
**diffeomorphism** is a smooth bijection with smooth inverse; it is to smooth manifolds what homeomorphism is to spaces.

**Examples.** The stereographic atlas on $S^n$ is smooth: $u \mapsto u/|u|^2$ is smooth on $\mathbb{R}^n \setminus \{0\}$
(each coordinate is a rational function whose denominator does not vanish). The affine atlas on $\mathbb{RP}^n$ is smooth,
since its transition maps are also rational with nonvanishing denominators: $(u, v) \mapsto (1/u, v/u)$ for $\mathbb{RP}^2$.
Products of smooth manifolds are smooth. The angle atlas of the circle in 11.1 is smooth (its transition map is
$\theta$ or $\theta - 2\pi$).

**A subtle example.** On $\mathbb{R}$, the chart $\varphi(x) = x$ and the chart $\psi(x) = x^3$ are each a homeomorphism
$\mathbb{R} \to \mathbb{R}$, so each is an atlas by itself. They are *not* compatible: $\varphi \circ \psi^{-1}(u) = u^{1/3}$
is not differentiable at $0$. So they give two different smooth structures on the same topological space. But the map
$F(x) = x^3$, from ($\mathbb{R}$ with $\psi$) to ($\mathbb{R}$ with $\varphi$), is a diffeomorphism: in charts it is
$\varphi \circ F \circ \psi^{-1}(u) = (u^{1/3})^3 = u$. So the two structures are different but diffeomorphic. The real
question is always "how many smooth structures up to diffeomorphism?", and the answer is one of the great surprises of
the subject, taken up in [Chapter 20](20-Where-Topology-Goes.md):

- in dimensions 1, 2 and 3, every topological manifold has a smooth structure, unique up to diffeomorphism (Radó, 1925,
  for surfaces; Edwin Moise, 1952, for 3-manifolds);
- John Milnor found in 1956 that the 7-sphere has smooth structures that are not diffeomorphic to the standard one
  (**exotic spheres**);
- Michel Kervaire found in 1960 a 10-dimensional topological manifold with no smooth structure at all;
- $\mathbb{R}^n$ has a unique smooth structure for every $n \neq 4$, while $\mathbb{R}^4$ has uncountably many
  (results of the 1980s by Freedman, Donaldson, Gompf and Taubes).

### The regular value theorem

Most manifolds in practice are not built chart by chart. They are solution sets of equations, and the following theorem,
a consequence of the implicit function theorem, does all the work.

**Regular value theorem.** *Let $F : \mathbb{R}^{n+k} \to \mathbb{R}^k$ be smooth and $c \in \mathbb{R}^k$. If at every
point $x$ with $F(x) = c$ the derivative $DF(x)$ (a $k \times (n+k)$ matrix) has rank $k$, then $F^{-1}(c)$ is a smooth
$n$-manifold.*

*Why.* At such a point, $k$ of the variables can be solved for as smooth functions of the other $n$, by the implicit
function theorem ([MAT257Y1 Unit 7](../../uoft/MAT257Y1/unit07.md)); the remaining $n$ variables are a chart. Two such
charts differ by a smooth map, again by the implicit function theorem. The level set is Hausdorff and second countable
because it sits in $\mathbb{R}^{n+k}$. The full proof is in [MAT257Y1 Unit 13](../../uoft/MAT257Y1/unit13.md) and in
Lee's *Introduction to Smooth Manifolds*. $\square$

**Worked examples.**

1. **Spheres.** $F(x) = x_1^2 + \cdots + x_{n+1}^2$, $c = 1$. $DF(x) = (2x_1, \ldots, 2x_{n+1})$, which has rank 1
   unless $x = 0$, and $0$ is not on the sphere. So $S^n$ is a smooth $n$-manifold.
2. **Hyperboloids.** $F(x, y, z) = x^2 + y^2 - z^2$. $DF = (2x, 2y, -2z)$ vanishes only at the origin, where $F = 0$. So
   $F^{-1}(1)$ (one sheet) and $F^{-1}(-1)$ (two sheets) are smooth surfaces. For $c = 0$ the theorem does not apply,
   and indeed $F^{-1}(0)$ is the double cone of 11.1, which is not a manifold.
3. **The orthogonal group.** $O(n) = \{A : A^{\mathsf T} A = I\}$ is $F^{-1}(I)$ for $F(A) = A^{\mathsf T}A$, a map from
   all $n \times n$ matrices ($n^2$ dimensions) to the symmetric matrices ($n(n+1)/2$ dimensions). One checks that $I$ is a
   regular value. So $O(n)$ is a manifold of dimension $n^2 - n(n+1)/2 = n(n-1)/2$. For $n = 3$ that is 3, matching the
   three numbers (two for the axis direction, one for the angle) that describe a rotation.

### Embedding

**Whitney embedding theorem.** *Every smooth $n$-manifold is diffeomorphic to a smooth submanifold of $\mathbb{R}^{2n}$.*

Hassler Whitney proved the easier version with $\mathbb{R}^{2n+1}$ in 1936 and the sharp one with $\mathbb{R}^{2n}$ in
1944. The number $2n$ cannot be lowered in general: $\mathbb{RP}^2$ does not embed in $\mathbb{R}^3$ (it is a closed
non-orientable surface; see 10.2), so for $n = 2$ we need $\mathbb{R}^4$. So the abstract definition by charts produces
nothing more general than the surfaces and solids we can (in principle) place in Euclidean space; it just frees us from
having to.

## 11.4 The dimension question

*Level: advanced.*

The definition of an $n$-manifold assumes that the $n$ is well defined. Could a space be locally like $\mathbb{R}^2$
and also locally like $\mathbb{R}^3$? That would require an open set in $\mathbb{R}^2$ homeomorphic to an open set in
$\mathbb{R}^3$. Intuition says no. Intuition was nearly embarrassed in the nineteenth century.

### Two warnings from the 1870s and 1890

In 1877 Georg Cantor showed, in letters to Richard Dedekind, that the interval $[0, 1]$ and the square $[0, 1]^2$ have
the same number of points: there is a bijection between them (interleave decimal digits, with some care about
expansions ending in 9s). So "dimension" is not a matter of counting points. Dedekind replied that a bijection that is
continuous both ways should still be impossible, and in 1879 Eugen Netto proved it. In 1890 Giuseppe Peano constructed a
continuous *surjection* from $[0, 1]$ onto $[0, 1]^2$: a **space-filling curve**. So a continuous map can raise dimension;
it cannot also be injective, by Netto, and a homeomorphism needs both.

### Dimension 1 by connectedness

One case is easy, and [Chapter 7](07-Connectedness.md) did it: $\mathbb{R}$ is not homeomorphic to $\mathbb{R}^n$ for
$n \ge 2$, because removing a point disconnects $\mathbb{R}$ but not $\mathbb{R}^n$. The same trick does not distinguish
$\mathbb{R}^2$ from $\mathbb{R}^3$: removing a point leaves both connected. Removing a line disconnects $\mathbb{R}^2$
but not $\mathbb{R}^3$, but a homeomorphism need not send lines to lines, so that argument fails. Something new is needed.

### Invariance of domain

**Invariance of domain (Brouwer, 1912).** *Let $U \subseteq \mathbb{R}^n$ be open and $f : U \to \mathbb{R}^n$
continuous and injective. Then $f(U)$ is open, and $f$ is a homeomorphism from $U$ onto $f(U)$.*

In words: a continuous one-to-one map between spaces of the same dimension cannot squash an open set into something
thinner. The proof needs a tool that detects $n$-dimensional holes. With homology ([Chapter 16](16-Homology.md)) it is
about a page: the key input is that $\mathbb{R}^n$ minus a point has the homology of $S^{n-1}$, and a version of the
Jordan curve theorem in $n$ dimensions (a subset of $\mathbb{R}^n$ homeomorphic to $S^{n-1}$ separates it into exactly
two components, and a subset homeomorphic to a closed ball does not separate it). Hatcher, *Algebraic Topology*,
Proposition 2B.1 and Theorem 2B.3 has it. We use the theorem without proof here and derive its consequences.

**Corollary 11.2 (invariance of dimension).** *If $m \neq n$, no nonempty open subset of $\mathbb{R}^m$ is homeomorphic
to an open subset of $\mathbb{R}^n$. In particular $\mathbb{R}^m \not\cong \mathbb{R}^n$, and the dimension of a
nonempty manifold is well defined.*

**Proof.** Say $m < n$, and suppose $h : V \to U$ is a homeomorphism from an open $V \subseteq \mathbb{R}^n$ onto an open
$U \subseteq \mathbb{R}^m$. Let $i : \mathbb{R}^m \to \mathbb{R}^n$ be the inclusion $i(y) = (y, 0, \ldots, 0)$. Then
$i \circ h : V \to \mathbb{R}^n$ is continuous and injective, so by invariance of domain its image is open in
$\mathbb{R}^n$. But the image lies in the subspace $\mathbb{R}^m \times \{0\}$, which contains no open ball of
$\mathbb{R}^n$ (any ball contains points with last coordinate nonzero). A nonempty open set must contain a ball, so this
is a contradiction. If a point of a manifold had charts to open subsets of $\mathbb{R}^m$ and $\mathbb{R}^n$, the
transition map between them would be such a homeomorphism. $\square$

**Corollary 11.3 (boundary is well defined).** *In a manifold with boundary, no point is both an interior point (with a
chart to an open subset of $\mathbb{R}^n$) and a boundary point (with a chart to an open subset of $H^n$ sending it to
the plane $x_n = 0$).*

**Proof.** If $p$ had both, composing one chart with the inverse of the other would give a continuous injective map from
an open set $W \subseteq \mathbb{R}^n$ into $\mathbb{R}^n$, with image inside $H^n$ and containing a point $q$ with
$q_n = 0$. By invariance of domain the image is open in $\mathbb{R}^n$, so it contains a ball around $q$, which contains
points with $x_n < 0$, outside $H^n$. Contradiction. $\square$

**Corollary 11.4.** *No closed surface, and no compact $n$-manifold (without boundary, $n \ge 1$), is homeomorphic to a
subset of $\mathbb{R}^n$.*

**Proof.** Suppose $M$ is a compact $n$-manifold and $f : M \to \mathbb{R}^n$ is continuous and injective. Each chart
domain is homeomorphic to an open subset of $\mathbb{R}^n$, so by invariance of domain $f$ maps it to an open set; hence
$f(M)$ is open in $\mathbb{R}^n$. It is also compact, hence closed and bounded. A nonempty subset of the connected space
$\mathbb{R}^n$ that is open and closed is all of $\mathbb{R}^n$, which is not bounded. Contradiction. $\square$

This is the topological reason no flat map of a planet can show the whole surface continuously and without overlap: the
sphere is a compact 2-manifold, and Corollary 11.4 forbids a continuous one-to-one map of it into the plane. Every world
map, of Earth or Mars, has a cut or a seam somewhere ([Geometry, Chapter 16](../geometry/16-Spherical-Geometry.md)
explains what else it must distort).

### Other notions of dimension

There are several definitions of dimension that apply to spaces that are not manifolds: the **covering dimension**
(Lebesgue's: the smallest $n$ such that every open cover has a refinement in which no point lies in more than $n + 1$
sets), the **inductive dimension** (Poincaré, Brouwer, Urysohn and Menger: a space has dimension $\le n$ if points have
arbitrarily small neighbourhoods whose boundaries have dimension $\le n - 1$), and the **Hausdorff dimension** of
fractal geometry (not a topological invariant at all: the Koch snowflake curve is homeomorphic to a circle and has
Hausdorff dimension $\log 4/\log 3 \approx 1.26$). For manifolds, the topological definitions all agree with $n$. A
classic result of dimension theory: every compact metric space of covering dimension $n$ embeds in $\mathbb{R}^{2n+1}$
(Menger and Nöbeling).

## 11.5 3-manifolds: the shape of space

*Level: advanced (survey).*

We live in a space that, as far as we can tell, is locally three-dimensional. Is it $\mathbb{R}^3$? It might not be:
the surface of the Earth is locally $\mathbb{R}^2$ but globally a sphere, and the ancients who assumed a flat Earth were
extrapolating from local evidence. So: what are the closed 3-manifolds, and which one is space?

### A gallery of closed 3-manifolds

**The 3-sphere.** $S^3 = \{(z, w) \in \mathbb{C}^2 : |z|^2 + |w|^2 = 1\}$, the unit sphere in $\mathbb{R}^4$. By
stereographic projection it is $\mathbb{R}^3$ plus one point at infinity. It can also be built from two solid balls glued
along their boundary spheres (the northern and southern hemispheres), just as $S^2$ is two discs glued along a circle.
More surprisingly, it is two **solid tori** glued along their boundary: the parts where $|z| \le |w|$ and where
$|z| \ge |w|$. (On the first part $w \neq 0$, and $(z, w) \mapsto (z/w, w/|w|)$ is a homeomorphism to
$D^2 \times S^1$, the solid torus: a disc times a circle.) The gluing sends the "meridian" circle of each solid torus to
the "longitude" of the other.

**The 3-torus.** $T^3 = S^1 \times S^1 \times S^1$, or the cube with opposite faces glued. Living inside it would be
like being in a room where walking out through the front wall brings you in through the back wall, and similarly for the
other two pairs of walls; looking ahead you would see the back of your own head, far away, and infinitely many copies of
the room in a cubic lattice. It is a **flat** 3-manifold: the cube's Euclidean geometry passes to the quotient without
distortion. There are exactly 10 closed flat 3-manifolds up to homeomorphism (6 orientable and 4 non-orientable),
classified by Walter Hantzsche and Hans Wendt in the 1930s.

**Products.** $S^2 \times S^1$, and $\Sigma_g \times S^1$ for each closed surface.

**Lens spaces.** For coprime integers $p > q \ge 1$, the lens space $L(p, q)$ is the quotient of $S^3$ by the map
$(z, w) \mapsto (e^{2\pi i/p} z, e^{2\pi i q/p} w)$, which generates a group of $p$ symmetries acting without fixed
points. $L(2, 1) = \mathbb{RP}^3$. Lens spaces were the first examples of 3-manifolds with the same homology and even the
same fundamental group that are not homeomorphic: $L(5, 1)$ and $L(5, 2)$ (James Alexander, 1919).

**The Poincaré homology sphere.** Take a solid regular dodecahedron and glue each face to the opposite face after a
turn of one tenth of a full rotation ($36°$). The result is a closed 3-manifold with the same homology as $S^3$ but a
non-trivial fundamental group (of order 120). Henri Poincaré found it in 1904 while testing whether homology alone
characterises the 3-sphere; it does not, and that led him to ask the question about the fundamental group now called the
**Poincaré conjecture** ([Chapter 19](19-The-Poincare-Conjecture.md)).

### Geometrisation, in one paragraph

The classification of surfaces says every closed surface carries one of three geometries: spherical, flat or hyperbolic
([Geometry, Chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md)). William Thurston conjectured in the 1970s
that every closed 3-manifold can be cut, along spheres and tori, into pieces each of which carries one of exactly
**eight** geometries (spherical, flat, hyperbolic, $S^2 \times \mathbb{R}$, $\mathbb{H}^2 \times \mathbb{R}$ and three
more exotic ones). Grigori Perelman proved this **geometrisation conjecture** in 2002–2003, and with it the Poincaré
conjecture. [Chapter 19](19-The-Poincare-Conjecture.md) tells that story. There is no simple list of all 3-manifolds as
there is for surfaces, but there is a complete structure theory.

### What cosmology can say

General relativity relates the *local* geometry of space (its curvature) to the matter and energy in it. It says
nothing about the *global* topology, so the topology of the universe is a question for observation.

- **Curvature.** Measurements of the cosmic microwave background (CMB) by the WMAP and Planck satellites, combined with
  other data, show that on the largest scales space is very close to flat: the curvature, if any, is too small to have
  been detected. Flatness *does not* imply the universe is $\mathbb{R}^3$. Any of the flat 3-manifolds, such as the
  3-torus, is locally indistinguishable from $\mathbb{R}^3$; so is a very large sphere with tiny positive curvature.
- **Topology.** If space were a 3-torus or another closed manifold smaller than the region we can see, light from the
  same region could reach us by several routes, and the CMB would show matching patterns. In 1998 Neil Cornish, David
  Spergel and Glenn Starkman proposed looking for pairs of **matched circles** in the CMB, which every such topology would
  produce. Searches in WMAP and Planck data found no such circles. In 2003 Jean-Pierre Luminet, Jeffrey Weeks and
  co-authors suggested that the Poincaré dodecahedral space could explain an observed weakness of large-angle
  correlations in the CMB; the later circle searches did not support it.
- **The honest summary.** Space is locally three-dimensional and very nearly flat. Whether it is infinite or finite,
  and if finite which 3-manifold it is, is unknown. Current data say that if space is a closed 3-manifold, it is
  probably not much smaller than the observable universe in every direction, which makes the question very hard to
  settle by observation.

## A short history

Bernhard Riemann's 1854 lecture "On the hypotheses which lie at the foundations of geometry" introduced the idea of an
$n$-dimensional "manifold" (Mannigfaltigkeit) with a way of measuring lengths. Henri Poincaré's *Analysis Situs* (1895)
and its five supplements (to 1904) began the systematic topology of manifolds, defining them as solution sets of
equations and as glued polyhedra, introducing homology and the fundamental group, and finding the homology sphere.
Hermann Weyl's book *Die Idee der Riemannschen Fläche* (1913) gave the first definition of a manifold by charts, for
surfaces. L. E. J. Brouwer proved the invariance of dimension in 1911 and of domain in 1912. Hassler Whitney's papers of
1936 and 1944 established the modern notion of a smooth manifold and the embedding theorems. Moise proved in 1952 that
3-manifolds can be triangulated and smoothed; Milnor's exotic spheres (1956) and Kervaire's non-smoothable manifold
(1960) showed that topological and smooth manifolds really differ in higher dimensions.

## Check yourself

??? question "1. Using the stereographic charts of $S^1$, show that the transition map is $u \mapsto 1/u$, and check it at the point $(\tfrac35, \tfrac45)$."
    For $n = 1$, $\tau \circ \sigma^{-1}(u) = u/|u|^2 = u/u^2 = 1/u$ for $u \neq 0$. At $(x, y) = (3/5, 4/5)$:
    $\sigma = x/(1 - y) = (3/5)/(1/5) = 3$ and $\tau = x/(1 + y) = (3/5)/(9/5) = 1/3$. Indeed $1/3 = 1/3$.

??? question "2. Is the union of the two coordinate axes in $\mathbb{R}^2$ a manifold? Is the letter O? The letter P?"
    The axes: no. At the origin, any small connected open neighbourhood minus the origin has at least 4 components, but a
    ball minus a point in $\mathbb{R}^1$ has 2 and in $\mathbb{R}^n$ ($n \ge 2$) has 1; and the origin is not isolated,
    so $n = 0$ is out too. The letter O is a circle: a 1-manifold. The letter P is not: at the point where the loop meets
    the stem, a small connected neighbourhood minus that point has 3 components.

??? question "3. Show that $\mathbb{RP}^1$ is homeomorphic to $S^1$ by an explicit map."
    A line through the origin in $\mathbb{R}^2$ is $[\cos\alpha : \sin\alpha]$ for a unique $\alpha \in [0, \pi)$. Define
    $f[\cos\alpha : \sin\alpha] = (\cos 2\alpha, \sin 2\alpha)$. It is well defined (replacing $\alpha$ by $\alpha + \pi$
    gives the same line and the same image), continuous (it is induced from the continuous map
    $S^1 \to S^1$, $(\cos\alpha, \sin\alpha) \mapsto (\cos 2\alpha, \sin 2\alpha)$, which is constant on antipodal pairs),
    and bijective. $\mathbb{RP}^1$ is compact and $S^1$ Hausdorff, so $f$ is a homeomorphism by Theorem 9.5.

??? question "4. In the robot arm with $L_1 = 2$, $L_2 = 1$, which points can the hand reach, and for which points is there exactly one configuration?"
    $r^2 = 5 + 4\cos\theta_2$ ranges over $[1, 9]$, so the hand reaches the closed annulus $1 \le r \le 3$. There is exactly
    one configuration when $\cos\theta_2 = \pm 1$, that is $\theta_2 = 0$ (arm straight, $r = 3$) or $\theta_2 = \pi$
    (arm folded, $r = 1$): the two boundary circles. Inside, $\theta_2$ and $-\theta_2$ give two configurations.

??? question "5. What is the dimension of the configuration space of (a) a rigid body moving in a plane, (b) a pair of independent rigid bodies in space, (c) the orthogonal group $O(4)$?"
    (a) Position in $\mathbb{R}^2$ plus an angle: $\mathbb{R}^2 \times S^1$, dimension 3. (b) Each body has
    $\mathbb{R}^3 \times SO(3)$, dimension 6, so the pair has dimension 12. (c) $n(n-1)/2 = 4 \cdot 3/2 = 6$.

??? question "6. Show that $F(x, y, z) = x^2 + y^2 - z^2 - 1$ has $0$ as a regular value, and describe $F^{-1}(0)$."
    $DF = (2x, 2y, -2z)$, which is zero only at the origin, where $F = -1 \neq 0$. So $0$ is a regular value and
    $F^{-1}(0)$, the hyperboloid $x^2 + y^2 = 1 + z^2$, is a smooth surface. Each horizontal slice $z = t$ is a circle of
    radius $\sqrt{1 + t^2}$, so it is homeomorphic to the cylinder $S^1 \times \mathbb{R}$ by
    $(x, y, z) \mapsto ((x, y)/\sqrt{1 + z^2}, z)$.

??? question "7. Prove that a connected manifold is path connected."
    Fix $p$ in the manifold $M$ and let $A$ be the set of points joined to $p$ by a path. Every point $q$ has a chart
    neighbourhood containing an open set homeomorphic to a ball, and every point of a ball is joined to its centre by a
    straight segment. So if $q \in A$, the whole ball around $q$ is in $A$ (go to $q$, then to the point); and if
    $q \notin A$, no point of that ball is in $A$ (otherwise $q$ would be reachable through it). So $A$ and its complement
    are both open. $A$ is nonempty (it contains $p$), so by connectedness $A = M$.

??? question "8. Use invariance of domain to show that $S^2$ is not homeomorphic to any subset of $\mathbb{R}^2$. Is the open hemisphere?"
    Corollary 11.4 with $n = 2$: an injective continuous image of the compact 2-manifold $S^2$ in $\mathbb{R}^2$ would be
    open, closed and bounded, impossible. The open hemisphere $\{x_3 > 0\}$ is homeomorphic to the open unit disc by
    vertical projection $(x_1, x_2, x_3) \mapsto (x_1, x_2)$, whose inverse $(x_1, x_2) \mapsto (x_1, x_2, \sqrt{1 - x_1^2 - x_2^2})$
    is continuous. So it is: the obstruction is compactness.

??? question "9. In the 3-torus made from the unit cube with opposite faces glued, a light ray starts at a point and travels in direction $(1, 2, 3)$. Does it return to its starting point?"
    In the description $T^3 = \mathbb{R}^3/\mathbb{Z}^3$, the ray is $p + t(1, 2, 3)$, and it is back at the starting point
    when $t(1, 2, 3) \in \mathbb{Z}^3$. At $t = 1$ the displacement is $(1, 2, 3)$, an integer vector, so yes, after time 1
    (and not before, since $t \cdot 1$ must be an integer). A direction with irrational ratios, like $(1, \sqrt2, 0)$, never
    returns, and its path is dense in a 2-torus inside $T^3$.

??? question "10. Explain why the closed disc is a manifold with boundary, and use Corollary 11.3 to show it is not homeomorphic to the open disc."
    Interior points of the closed disc $D$ have small open discs around them. A point on the rim has a neighbourhood
    homeomorphic to an open subset of $H^2$ containing a point of the line $x_2 = 0$ (for example, use polar coordinates
    $(\theta, 1 - r)$ near the rim). A homeomorphism $D \to$ (open disc) would send rim points to points that have charts
    to open subsets of $\mathbb{R}^2$, and composing would give a rim point both kinds of chart, which Corollary 11.3
    forbids. (Simpler: $D$ is compact and the open disc is not.)

??? question "11. Show that $SO(3)$ is connected, using the ball model."
    In the ball model, $SO(3)$ is the closed ball of radius $\pi$ with antipodal boundary points identified, a quotient of
    the ball. The ball is connected (it is convex, so path connected), and a continuous image of a connected space is
    connected ([Chapter 7](07-Connectedness.md)). So $SO(3)$ is connected: any orientation of a rigid body can be turned
    continuously into any other.

??? question "12. For $\mathbb{RP}^2$, find the transition map from the chart $\varphi_0$ to the chart $\varphi_2$, say where it is defined, and check it at $[1 : 2 : 3]$."
    With $u = x_1/x_0$ and $v = x_2/x_0$ (the chart $\varphi_0$), the chart $\varphi_2$ gives
    $(x_0/x_2, x_1/x_2) = (1/v, u/v)$. So $\varphi_2 \circ \varphi_0^{-1}(u, v) = (1/v, u/v)$, defined on
    $\varphi_0(U_0 \cap U_2) = \{(u, v) : v \neq 0\}$. It is smooth there, with smooth inverse of the same form. At
    $[1 : 2 : 3]$: $\varphi_0 = (2, 3)$ and $\varphi_2 = (1/3, 2/3)$; the formula gives $(1/3, 2/3)$. Check.

## What you learned

- An $n$-manifold is a Hausdorff, second countable space locally homeomorphic to $\mathbb{R}^n$; charts give local
  coordinates and transition maps record how they fit.
- Spheres have the stereographic atlas with transition $u \mapsto u/|u|^2$; $\mathbb{RP}^n$ has $n + 1$ affine charts;
  products of manifolds are manifolds, so tori are.
- Configuration spaces are manifolds: a two-link arm moves on a torus, and orientations of a rigid body form
  $SO(3) \cong \mathbb{RP}^3$.
- A smooth manifold has smooth transition maps; the regular value theorem makes spheres, hyperboloids and $O(n)$ smooth
  manifolds at once; Whitney embeds every smooth $n$-manifold in $\mathbb{R}^{2n}$.
- Invariance of domain (Brouwer) gives invariance of dimension, a well-defined boundary, and the impossibility of a
  continuous one-to-one flat map of a sphere.
- Closed 3-manifolds include $S^3$, $T^3$, lens spaces and the Poincaré homology sphere; the topology of physical space
  is an open observational question.

**Next:** [Chapter 12](12-Homotopy.md), deforming maps instead of spaces: homotopy, the idea at the heart of algebraic
topology.

## Further reading

- J. M. Lee, *Introduction to Topological Manifolds*, 2nd edition, 2011, and *Introduction to Smooth Manifolds*, 2nd
  edition, 2013. The standard modern texts.
- J. W. Milnor, *Topology from the Differentiable Viewpoint*, 1965. Sixty pages, and a model of exposition.
- V. Guillemin and A. Pollack, *Differential Topology*, 1974.
- A. Hatcher, *Algebraic Topology*, 2002. Section 2.B proves invariance of domain.
- J. R. Weeks, *The Shape of Space*, 2nd edition, 2002. 3-manifolds and the shape of the universe, for any reader.
- N. J. Cornish, D. N. Spergel and G. D. Starkman, "Circles in the sky: finding topology with the microwave background
  radiation", *Classical and Quantum Gravity* 15, 1998.
- J.-P. Luminet, J. R. Weeks, A. Riazuelo, R. Lehoucq and J.-P. Uzan, "Dodecahedral space topology as an explanation for
  weak wide-angle temperature correlations in the cosmic microwave background", *Nature* 425, 2003.
- On this site: [Geometry, Chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md) for tangent spaces and
  Riemannian metrics; [Linear algebra, Chapter 13](../linear-algebra/13-Orthogonal-Matrices-and-Rotations.md) for rotations;
  the U of T guides [MAT257Y1 Unit 6: The Inverse Function Theorem](../../uoft/MAT257Y1/unit06.md),
  [MAT257Y1 Unit 7: The Implicit Function Theorem](../../uoft/MAT257Y1/unit07.md) and
  [MAT257Y1 Unit 13: Manifolds in R^n](../../uoft/MAT257Y1/unit13.md); the gentle
  [Point at infinity](../../topics/infinity/level-8/07-point-at-infinity.md) lesson for the one-point idea behind
  stereographic projection.
