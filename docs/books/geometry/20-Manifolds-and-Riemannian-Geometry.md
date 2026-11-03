# 20. Manifolds and Riemannian geometry

*Gauss showed that a surface carries its own geometry: an ant on it can measure lengths, angles and curvature without
knowing anything about the space around. In 1854 his student Bernhard Riemann took the step that changed geometry and
physics: forget the surrounding space altogether, and let "space" be any collection of points that looks, up close, like
ordinary space of some dimension, with a rule for measuring lengths at every point. This chapter builds that idea
carefully: manifolds and their charts, tangent spaces, Riemannian metrics, and curvature in any dimension. Then it shows
what Einstein did with it: in general relativity gravity is not a force but the curvature of four-dimensional spacetime,
and the clocks in every GPS satellite have to allow for it. It ends with the uniformization theorem, which says that
every surface has one of exactly three geometries: spherical, flat or hyperbolic.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a manifold is: charts, atlases, smooth transition maps, with spheres, tori, projective spaces and rotation groups as examples
    - tangent spaces and tangent vectors, as velocities of curves
    - Riemannian metrics: lengths, angles, volumes, distance and geodesics in any dimension, and the Christoffel symbols
    - curvature in higher dimensions: the Riemann tensor, sectional, Ricci and scalar curvature, and what each measures
    - general relativity as geometry: Einstein's equations, Mercury's orbit, the bending of light, GPS clocks
    - the uniformization theorem and why every closed surface is spherical, flat or hyperbolic

    **You need:** [Chapter 19](19-Curves-and-Surfaces.md) (first fundamental form, Gaussian curvature, geodesics,
    Gauss–Bonnet), [Chapter 17](17-Hyperbolic-Geometry.md) (the hyperbolic plane) and some multivariable calculus and linear
    algebra. The U of T guides on [the inverse function theorem](../../uoft/MAT257Y1/unit06.md) and
    [manifolds in R^n](../../uoft/MAT257Y1/unit13.md) give the analysis behind 20.1 and 20.2.

    **Levels:** all sections are expert in content. 20.1 to 20.3 are a first graduate course written for a careful
    undergraduate; 20.4 states more than it proves; 20.5 and 20.6 are surveys with checkable numbers.

## 20.1 Manifolds: charts and atlases

*Level: expert.* What do a sphere, the surface of a doughnut, the set of all positions of a rigid body, and the spacetime
of physics have in common? Near any one point each looks like a piece of ordinary $\mathbb{R}^n$, but globally they are
different shapes. A sailor on Earth sees a flat sea; only by going around does she learn it is a sphere.

**Definition.** A **topological manifold** of dimension $n$ is a space $M$ (with a notion of nearness, a topology) in which
every point has a neighbourhood $U$ and a continuous, one-to-one map $\varphi : U \to \mathbb{R}^n$ onto an open set, with
continuous inverse (a **homeomorphism** onto its image). The pair $(U, \varphi)$ is a **chart**: it puts coordinates on
the patch $U$, like a page of an atlas. A collection of charts covering $M$ is an **atlas**. (Two technical conditions are
added to rule out pathologies: $M$ is *Hausdorff*, so distinct points have disjoint neighbourhoods, and *second countable*,
so a countable atlas suffices.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 300" role="img" aria-label="A manifold M with two overlapping charts. The patch U is mapped by phi to a region of the plane, the patch V by psi to another. On the overlap, the transition map psi composed with the inverse of phi goes from one plane region to the other, and the manifold is smooth when every such transition map is smooth">
  <polygon points="382,78 385.6,81 387.8,84.1 388.6,87.3 388.1,90.4 386.3,93.5 383.4,96.4 379.6,99.2 375,101.9 369.9,104.5 364.3,106.9 358.4,109.2 352.4,111.4 346.3,113.4 340,115.5 333.6,117.4 327,119.2 320.2,120.9 313.1,122.4 305.7,123.7 298,124.8 290,125.6 281.8,126.2 273.5,126.3 265.2,126.2 256.9,125.7 248.8,125 241,124 233.6,122.9 226.6,121.8 220,120.6 213.7,119.6 207.6,118.8 201.6,118.2 195.5,117.9 189.1,118 182.3,118.3 174.8,118.8 166.6,119.6 157.7,120.4 148,121.2 137.7,121.9 126.9,122.4 115.9,122.6 105,122.3 94.4,121.5 84.6,120.3 75.7,118.5 68.2,116.2 62.1,113.5 57.7,110.5 55,107.1 54,103.6 54.6,100 56.6,96.4 59.7,92.9 63.6,89.5 68.1,86.3 72.9,83.4 77.6,80.6 82,78 86,75.6 89.5,73.2 92.3,71 94.7,68.8 96.6,66.5 98.1,64.3 99.5,62 100.9,59.6 102.5,57.3 104.5,54.9 106.8,52.5 109.7,50.2 113.1,48 117,45.9 121.4,43.8 126.2,41.9 131.4,40.1 136.7,38.3 142.3,36.5 148,34.8 153.8,33 159.8,31.1 166,29.2 172.5,27.3 179.2,25.3 186.4,23.3 194.1,21.3 202.3,19.5 210.9,17.9 220,16.6 229.4,15.8 239,15.4 248.6,15.5 257.9,16.2 266.8,17.5 275,19.4 282.3,21.7 288.6,24.6 293.9,27.7 298,31.2 301.1,34.7 303.3,38.3 304.7,41.7 305.7,45 306.6,48 307.5,50.7 308.9,53.1 310.9,55.1 313.7,56.9 317.5,58.5 322.3,59.9 328.1,61.3 334.7,62.7 341.9,64.3 349.4,66 357.1,67.9 364.4,70.1 371.2,72.5 377.2,75.1" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="380" y="40" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">M</text>
  <ellipse cx="175" cy="80" rx="55" ry="32" fill="#eea66f" fill-opacity="0.35" stroke="#eea66f" stroke-width="2"/>
  <ellipse cx="255" cy="80" rx="55" ry="32" fill="#7ccf9a" fill-opacity="0.35" stroke="#7ccf9a" stroke-width="2"/>
  <text x="150" y="84" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">U</text>
  <text x="282" y="84" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">V</text>
  <polygon points="40,190 150,190 150,280 40,280" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="290,190 400,190 400,280 290,280" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <ellipse cx="95" cy="235" rx="42" ry="30" fill="#eea66f" fill-opacity="0.35" stroke="#eea66f" stroke-width="2"/>
  <ellipse cx="345" cy="235" rx="42" ry="30" fill="#7ccf9a" fill-opacity="0.35" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="160" y1="108" x2="110" y2="185" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="110,185 111.4,177.1 116.6,180.5" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <text x="118" y="145" text-anchor="end" font-size="15" fill="currentColor" font-style="italic">φ</text>
  <line x1="270" y1="108" x2="330" y2="185" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="330,185 323,181.1 327.9,177.3" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <text x="318" y="145" text-anchor="start" font-size="15" fill="currentColor" font-style="italic">ψ</text>
  <path d="M 140 230 Q 220 200 298 230" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="298,230 288,229 293,222" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <text x="220" y="198" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">ψ ∘ φ⁻¹</text>
</svg>
</div>

Where two charts $(U, \varphi)$ and $(V, \psi)$ overlap, a point has two sets of coordinates, and the **transition map**

$$
\psi \circ \varphi^{-1} : \varphi(U \cap V) \to \psi(U \cap V)
$$

converts one into the other. It is a map between open sets of $\mathbb{R}^n$, so calculus applies to it.

**Definition.** A **smooth manifold** is a topological manifold with an atlas whose transition maps are all smooth
(infinitely differentiable). A function $f : M \to \mathbb{R}$ is smooth if $f \circ \varphi^{-1}$ is smooth for every chart;
smoothness of the transitions makes this independent of the chart used.

The point of the definition is that calculus, which needs coordinates, can be done on $M$ chart by chart, and the
transition maps guarantee that the answers agree.

**Example 1: the circle with two charts.** One chart cannot cover the circle $S^1 = \{x^2 + y^2 = 1\}$, because a
homeomorphism to an open subset of $\mathbb{R}$ cannot exist (removing a point disconnects any interval but not the
circle). Use **stereographic projection**: from the north pole $N = (0, 1)$, send $P = (x, y) \ne N$ to the point where line
$NP$ meets the $x$-axis,

$$
\varphi_N(x, y) = \frac{x}{1 - y} .
$$

From the south pole, $\varphi_S(x, y) = x/(1 + y)$. Together they cover the circle. On the overlap (all points except the
poles), $\varphi_N \cdot \varphi_S = x^2/(1 - y^2) = x^2/x^2 = 1$, so the transition map is $u \mapsto 1/u$ on $u \ne 0$, which is
smooth. So the circle is a smooth 1-manifold.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="Stereographic projection of a circle. A line from the north pole N through a point P of the circle meets the horizontal axis at one point u. Every point except N gets exactly one number u; a second chart, projecting from the south pole S, covers N">
  <line x1="10" y1="140" x2="410" y2="140" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="140" r="90" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
  <line x1="210" y1="50" x2="291.6" y2="178" stroke="#eea66f" stroke-width="2"/>
  <circle cx="210" cy="50" r="3.5" fill="currentColor"/>
  <text x="210" y="40" text-anchor="middle" font-size="13" fill="currentColor">N</text>
  <circle cx="210" cy="230" r="3.5" fill="currentColor"/>
  <text x="210" y="250" text-anchor="middle" font-size="13" fill="currentColor">S</text>
  <circle cx="291.6" cy="178" r="4.5" fill="currentColor"/>
  <text x="305.6" y="190" text-anchor="middle" font-size="13" fill="currentColor">P</text>
  <circle cx="267.3" cy="140" r="4.5" fill="#eea66f"/>
  <text x="271.3" y="130" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">u</text>
  <line x1="210" y1="50" x2="54.1" y2="140" stroke="#7ccf9a" stroke-width="2"/>
  <circle cx="132.1" cy="95" r="4.5" fill="currentColor"/>
  <text x="120.1" y="87" text-anchor="middle" font-size="13" fill="currentColor">Q</text>
  <circle cx="54.1" cy="140" r="4.5" fill="#7ccf9a"/>
  <text x="54.1" y="160" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">v</text>
</svg>
</div>

**Example 2: spheres.** The same works for $S^n \subset \mathbb{R}^{n+1}$: $\varphi_N(x) = (x_1, \dots, x_n)/(1 - x_{n+1})$, and on the
overlap the transition is $u \mapsto u/|u|^2$, inversion in the unit sphere ([Chapter 13](13-Inversion-and-Complex-Geometry.md)).
*Check for $n = 2$:* the inverse of $\varphi_N$ is $u \mapsto \bigl(2u, |u|^2 - 1\bigr)/(|u|^2 + 1)$, which lies on the unit
sphere, and applying $\varphi_S$ to it gives $u/|u|^2$.

**Example 3: graphs and level sets.** Any surface of [Chapter 19](19-Curves-and-Surfaces.md) is a 2-manifold. More generally, if
$F : \mathbb{R}^{n+k} \to \mathbb{R}^k$ is smooth and its derivative has full rank $k$ at every point of $M = F^{-1}(0)$, then $M$ is
a smooth $n$-manifold: the implicit function theorem writes it locally as a graph, and the graph gives a chart. The sphere
is $F = |x|^2 - 1$.

**Example 4: the torus and products.** If $M$ and $N$ are manifolds, so is $M \times N$, with product charts. The torus is
$S^1 \times S^1$. The positions of a double pendulum (two angles) form a torus; the positions of a robot arm with $k$ rotating
joints form $S^1 \times \cdots \times S^1$.

**Example 5: projective space.** $\mathbb{RP}^n$, the lines through the origin in $\mathbb{R}^{n+1}$
([Chapter 18](18-Projective-Geometry.md)), has charts $U_i = \{x_i \ne 0\}$, $[x] \mapsto (x_0/x_i, \dots, \widehat{x_i/x_i}, \dots, x_n/x_i)$,
with transition maps that are rational functions, smooth where defined. It is a manifold that does not sit naturally in
any $\mathbb{R}^N$.

**Example 6: the rotation group.** The set $SO(3)$ of rotations of space ($3 \times 3$ matrices with $A^{\mathsf T}A = I$ and
$\det A = 1$) is a level set of the kind in Example 3, a 3-manifold. Topologically it is $\mathbb{RP}^3$: a rotation is an axis
and an angle in $[-\pi, \pi]$, a point of a ball of radius $\pi$, and the rotations by $\pi$ and $-\pi$ about the same axis
are equal, which glues opposite points of the boundary sphere. Every orientation of a spacecraft is a point of this
manifold, and attitude control software works in its charts (Euler angles or quaternions); the well known "gimbal lock" of
Euler angles is the failure of one chart to cover $SO(3)$.

**Non-examples.** A figure eight is not a manifold: near the crossing point it looks like a "+", not like a line. Two
cones joined at their tips are not a manifold at the tip.

**Deeper facts (statements).**

- **Whitney (1944):** every smooth $n$-manifold can be embedded as a smooth submanifold of $\mathbb{R}^{2n}$. So the abstract
  definition gives nothing that cannot be found inside some Euclidean space; but the abstract view is far more convenient.
- **Exotic structures:** a topological manifold can carry more than one essentially different smooth structure. John
  Milnor found in 1956 that the 7-sphere has several; Kervaire and Milnor (1963) showed it has exactly 28 (counted with
  orientation). By work of Freedman and Donaldson in the early 1980s, $\mathbb{R}^4$, alone among the spaces $\mathbb{R}^n$, has
  exotic smooth structures; whether $S^4$ has one is unknown.

## 20.2 Tangent spaces

*Level: expert.* At each point of a surface in space there is a tangent plane. A manifold with no surrounding space needs
an intrinsic definition. The natural one: a tangent vector is the velocity of a curve.

**Definition.** Let $p \in M$. Two smooth curves $\gamma_1, \gamma_2 : (-\varepsilon, \varepsilon) \to M$ with $\gamma_i(0) = p$ are
**equivalent** if, in some chart $\varphi$ around $p$, $(\varphi \circ \gamma_1)'(0) = (\varphi \circ \gamma_2)'(0)$. (By the chain
rule applied to the transition map, this does not depend on the chart.) A **tangent vector** at $p$ is an equivalence
class $[\gamma]$, and the set of them is the **tangent space** $T_pM$.

A chart identifies $T_pM$ with $\mathbb{R}^n$ by $[\gamma] \mapsto (\varphi \circ \gamma)'(0)$, which makes $T_pM$ an $n$-dimensional vector
space; changing chart changes this identification by the derivative (Jacobian matrix) of the transition map, which is
linear, so the vector-space structure is well defined. The basis vectors coming from the coordinates $x^1, \dots, x^n$ of
a chart are written $\partial/\partial x^1, \dots, \partial/\partial x^n$: the velocity of the curve that moves only the $i$-th
coordinate, at unit rate.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 290" role="img" aria-label="A sphere with its tangent plane at a point p. A curve on the sphere passes through p, and its velocity at p is an arrow lying in the tangent plane. The tangent plane is the set of all such velocities, and it is perpendicular to the radius at p">
  <circle cx="200" cy="165" r="95" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
  <polygon points="307.4,204.2 173.5,220.8 147.7,83 281.6,66.3" fill="#eea66f" fill-opacity="0.3" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="281.2,187.9 280.4,186.8 279.6,185.6 278.7,184.4 277.8,183.3 276.9,182.1 275.9,180.9 274.8,179.6 273.7,178.4 272.6,177.2 271.4,175.9 270.2,174.7 268.9,173.4 267.6,172.2 266.2,170.9 264.8,169.6 263.4,168.4 261.9,167.1 260.4,165.8 258.8,164.6 257.2,163.3 255.6,162 253.9,160.7 252.2,159.5 250.5,158.2 248.7,156.9 246.9,155.7 245.1,154.4 243.2,153.2 241.4,152 239.5,150.7 237.5,149.5 235.6,148.3 233.6,147.1 231.6,145.9 229.6,144.7 227.6,143.6 225.5,142.4 223.4,141.3 221.4,140.2 219.3,139.1 217.1,138 215,136.9 212.9,135.9 210.8,134.8 208.6,133.8 206.5,132.8 204.3,131.8 202.2,130.9 200,129.9 197.9,129 195.7,128.1 193.5,127.3 191.4,126.4 189.3,125.6 187.1,124.8 185,124 182.9,123.3 180.8,122.6 178.7,121.9 176.6,121.2 174.5,120.6 172.5,120 170.4,119.4 168.4,118.8 166.4,118.3 164.4,117.8 162.5,117.3 160.6,116.9 158.6,116.5 156.8,116.1 154.9,115.8 153.1,115.5" fill="none" stroke="#7ccf9a" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="227.6" y1="143.6" x2="178.5" y2="115.8" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="178.5,115.8 186.5,116.8 183.4,122.2" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <line x1="200" y1="165" x2="227.6" y2="143.6" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="227.6" cy="143.6" r="4" fill="currentColor"/>
  <text x="217.6" y="159.6" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">p</text>
  <text x="186.5" y="109.8" text-anchor="start" font-size="12" fill="currentColor">velocity</text>
  <text x="277.6" y="58.3" text-anchor="middle" font-size="12" fill="currentColor">tangent plane</text>
</svg>
</div>

**Why the notation $\partial/\partial x^i$.** A tangent vector $v = [\gamma]$ differentiates functions: $v(f) = (f \circ \gamma)'(0)$,
the rate of change of $f$ along $\gamma$. For $v = \partial/\partial x^i$ this is the partial derivative of $f$ in the chart.
One can in fact *define* tangent vectors as such derivations (linear maps $f \mapsto v(f)$ obeying the product rule); the two
definitions agree for smooth manifolds.

**Examples.**

- For a submanifold of $\mathbb{R}^N$, $T_pM$ is the ordinary tangent space, the set of velocity vectors of curves in $M$. For the
  sphere $S^n$, differentiating $\gamma \cdot \gamma = 1$ gives $\gamma'(0) \cdot p = 0$, so $T_pS^n = p^\perp$, the vectors
  perpendicular to $p$ (and by dimension count, all of them).
- For $SO(3)$ at the identity: differentiate $A(t)^{\mathsf T}A(t) = I$ at $t = 0$ with $A(0) = I$: $A'(0)^{\mathsf T} + A'(0) = 0$. The
  tangent space is the 3-dimensional space of skew-symmetric matrices, the **Lie algebra** of infinitesimal rotations, each
  one an angular velocity vector in disguise.

**Derivatives of maps.** A smooth map $F : M \to N$ has at each point a **differential** $dF_p : T_pM \to T_{F(p)}N$,
$[\gamma] \mapsto [F \circ \gamma]$. In charts it is the Jacobian matrix. The chain rule $d(G \circ F)_p = dG_{F(p)} \circ dF_p$ is
immediate from this definition.

**Vector fields.** A **vector field** chooses a tangent vector at every point, smoothly. The disjoint union of all tangent
spaces is itself a manifold of dimension $2n$, the **tangent bundle** $TM$, and a vector field is a smooth section of it.
The **hairy ball theorem** says every continuous vector field on $S^2$ vanishes somewhere (you cannot comb a hairy ball flat;
at any moment some point on Earth has zero horizontal wind). More generally, by the **Poincaré–Hopf theorem**, the zeros of
a vector field on a closed manifold, counted with suitable signs, add up to the Euler characteristic, and $\chi(S^2) = 2 \ne 0$.

## 20.3 Riemannian metrics

*Level: expert.* A manifold as defined so far has no lengths. Riemann's idea, in his 1854 lecture *Über die Hypothesen,
welche der Geometrie zu Grunde liegen* (On the hypotheses which lie at the foundations of geometry), was to give one at
each point, as Gauss's first fundamental form does on a surface.

**Definition.** A **Riemannian metric** $g$ on a smooth manifold $M$ is a choice, at each point $p$, of an inner product
$g_p$ on $T_pM$ (symmetric, bilinear, positive definite), varying smoothly with $p$. In a chart, $g$ is given by the
symmetric positive definite matrix of functions $g_{ij} = g(\partial/\partial x^i, \partial/\partial x^j)$, and one writes

$$
ds^2 = \sum_{i, j} g_{ij}\, dx^i\, dx^j .
$$

For a surface, $g_{11} = E$, $g_{12} = F$, $g_{22} = G$. A manifold with a metric is a **Riemannian manifold**.

With it everything in [Chapter 19](19-Curves-and-Surfaces.md) generalises:

- the **length** of a curve $\gamma : [a, b] \to M$ is $\int_a^b \sqrt{g(\gamma', \gamma')}\, dt$;
- the **angle** between tangent vectors $v, w$ has $\cos\theta = g(v, w)/\sqrt{g(v, v)g(w, w)}$;
- the **volume** of a region in one chart is $\int \sqrt{\det(g_{ij})}\, dx^1 \cdots dx^n$;
- the **distance** $d(p, q)$ is the infimum of lengths of curves from $p$ to $q$, which makes $M$ a metric space.

**Examples.**

- **Euclidean space**: $g_{ij} = \delta_{ij}$, $ds^2 = dx_1^2 + \cdots + dx_n^2$.
- **The round sphere** $S^n$, with the metric induced from $\mathbb{R}^{n+1}$; for $S^2$ in latitude-longitude,
  $ds^2 = d\varphi^2 + \sin^2\varphi\, d\theta^2$.
- **The flat torus**: the square $[0, 1]^2$ with opposite sides glued and $ds^2 = dx^2 + dy^2$. It cannot be built in
  $\mathbb{R}^3$ with this metric by a smooth surface of the usual kind, because every compact surface in $\mathbb{R}^3$ has a
  point with $K > 0$ (exercise 11 of Chapter 19); as an abstract Riemannian manifold it is perfectly good.
  (Nash's embedding theorem of 1956 says every Riemannian manifold can be placed isometrically in some $\mathbb{R}^N$, if
  $N$ is large enough; and, surprisingly, there are $C^1$ isometric embeddings of the flat torus in $\mathbb{R}^3$ by the
  Nash–Kuiper theorem, which were visualised in 2012 as "corrugated" tori.)
- **The hyperbolic plane**: the upper half-plane $y > 0$ with

$$
ds^2 = \frac{dx^2 + dy^2}{y^2},
$$

the model of [Chapter 17](17-Hyperbolic-Geometry.md). Lengths are Euclidean lengths divided by the height, so the boundary
$y = 0$ is infinitely far away.

**Every manifold has a metric.** Choose an atlas, use the Euclidean inner product in each chart, and blend them with a
**partition of unity** (smooth functions $\rho_\alpha \ge 0$, each zero outside one chart, adding up to 1). A sum
$\sum \rho_\alpha g_\alpha$ of inner products with nonnegative weights, not all zero, is again an inner product. (The same
argument fails for Lorentzian metrics of relativity, which is why not every manifold can be a spacetime.)

**Geodesics and the Christoffel symbols.** A geodesic should be a curve with "zero acceleration", but on an abstract
manifold we cannot subtract tangent vectors at different points. Riemannian geometry solves this with the **Levi-Civita
connection** $\nabla$, a rule for differentiating vector fields along curves, and the fundamental theorem of Riemannian
geometry says there is exactly one such rule that is compatible with the metric and torsion-free. In a chart it is given
by the **Christoffel symbols**

$$
\Gamma^k_{ij} = \frac12 \sum_l g^{kl}\left( \frac{\partial g_{li}}{\partial x^j} + \frac{\partial g_{lj}}{\partial x^i} - \frac{\partial g_{ij}}{\partial x^l} \right),
$$

where $(g^{kl})$ is the inverse matrix of $(g_{ij})$. A curve $x(t)$ is a **geodesic** when

$$
\ddot x^k + \sum_{i, j} \Gamma^k_{ij}\, \dot x^i \dot x^j = 0 \qquad (k = 1, \dots, n).
$$

This is the equation of Chapter 19 in any dimension. As there, geodesics are locally shortest, and each point and initial
velocity determine one geodesic. Following the geodesic with initial velocity $v$ for time 1 defines the **exponential
map** $\exp_p : T_pM \to M$, which near 0 is a chart (normal coordinates).

**Worked example: polar coordinates.** For the plane with $ds^2 = dr^2 + r^2 d\theta^2$: $g_{rr} = 1$, $g_{\theta\theta} = r^2$. The only
nonzero symbols are $\Gamma^r_{\theta\theta} = -r$ and $\Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = 1/r$, so the geodesic equations are
$\ddot r - r\dot\theta^2 = 0$ and $\ddot\theta + \tfrac{2}{r}\dot r \dot\theta = 0$. The second says $\frac{d}{dt}(r^2\dot\theta) = 0$: conservation
of angular momentum. Straight lines, written in polar coordinates.

**Worked example: geodesics of the hyperbolic plane.** With $g = (dx^2 + dy^2)/y^2$ the formula gives
$\Gamma^x_{xy} = \Gamma^x_{yx} = -1/y$, $\Gamma^y_{xx} = 1/y$, $\Gamma^y_{yy} = -1/y$, all others zero. The geodesic equations are

$$
\ddot x - \frac{2}{y}\dot x \dot y = 0, \qquad \ddot y + \frac{1}{y}\left(\dot x^2 - \dot y^2\right) = 0 .
$$

Vertical lines $x = c$, $y = e^t$ solve them (check: $\ddot y = e^t$, $\dot y^2/y = e^t$). So does the semicircle
$x = c + R\tanh t$, $y = R/\cosh t$, which lies on $(x - c)^2 + y^2 = R^2$ and has unit hyperbolic speed (a direct
differentiation, or a computer algebra check, confirms both equations). These are exactly the "lines" of the half-plane model.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="The upper half-plane model of the hyperbolic plane. Geodesics are vertical half-lines and semicircles centred on the boundary axis. Three of them bound a triangle whose angles add up to less than 180 degrees">
  <line x1="15" y1="210" x2="425" y2="210" stroke="currentColor" stroke-width="2"/>
  <text x="420" y="230" text-anchor="end" font-size="12" fill="currentColor">y = 0</text>
  <polyline points="280,210 279.9,206.2 279.8,202.5 279.5,198.7 279.1,195 278.5,191.2 277.9,187.5 277.1,183.8 276.2,180.2 275.2,176.5 274.1,172.9 272.9,169.4 271.6,165.8 270.1,162.3 268.6,158.9 266.9,155.5 265.2,152.2 263.3,148.9 261.3,145.7 259.2,142.5 257.1,139.5 254.8,136.5 252.5,133.5 250,130.6 247.5,127.9 244.9,125.1 242.1,122.5 239.4,120 236.5,117.5 233.5,115.2 230.5,112.9 227.5,110.8 224.3,108.7 221.1,106.7 217.8,104.8 214.5,103.1 211.1,101.4 207.7,99.9 204.2,98.4 200.6,97.1 197.1,95.9 193.5,94.8 189.8,93.8 186.2,92.9 182.5,92.1 178.8,91.5 175,90.9 171.3,90.5 167.5,90.2 163.8,90.1 160,90 156.2,90.1 152.5,90.2 148.7,90.5 145,90.9 141.2,91.5 137.5,92.1 133.8,92.9 130.2,93.8 126.5,94.8 122.9,95.9 119.4,97.1 115.8,98.4 112.3,99.9 108.9,101.4 105.5,103.1 102.2,104.8 98.9,106.7 95.7,108.7 92.5,110.8 89.5,112.9 86.5,115.2 83.5,117.5 80.6,120 77.9,122.5 75.1,125.1 72.5,127.9 70,130.6 67.5,133.5 65.2,136.5 62.9,139.5 60.8,142.5 58.7,145.7 56.7,148.9 54.8,152.2 53.1,155.5 51.4,158.9 49.9,162.3 48.4,165.8 47.1,169.4 45.9,172.9 44.8,176.5 43.8,180.2 42.9,183.8 42.1,187.5 41.5,191.2 40.9,195 40.5,198.7 40.2,202.5 40.1,206.2 40,210" fill="none" stroke="#9cc9ea" stroke-width="2" stroke-linejoin="round"/>
  <polyline points="400,210 399.9,206.2 399.8,202.5 399.5,198.7 399.1,195 398.5,191.2 397.9,187.5 397.1,183.8 396.2,180.2 395.2,176.5 394.1,172.9 392.9,169.4 391.6,165.8 390.1,162.3 388.6,158.9 386.9,155.5 385.2,152.2 383.3,148.9 381.3,145.7 379.2,142.5 377.1,139.5 374.8,136.5 372.5,133.5 370,130.6 367.5,127.9 364.9,125.1 362.1,122.5 359.4,120 356.5,117.5 353.5,115.2 350.5,112.9 347.5,110.8 344.3,108.7 341.1,106.7 337.8,104.8 334.5,103.1 331.1,101.4 327.7,99.9 324.2,98.4 320.6,97.1 317.1,95.9 313.5,94.8 309.8,93.8 306.2,92.9 302.5,92.1 298.8,91.5 295,90.9 291.3,90.5 287.5,90.2 283.8,90.1 280,90 276.2,90.1 272.5,90.2 268.7,90.5 265,90.9 261.2,91.5 257.5,92.1 253.8,92.9 250.2,93.8 246.5,94.8 242.9,95.9 239.4,97.1 235.8,98.4 232.3,99.9 228.9,101.4 225.5,103.1 222.2,104.8 218.9,106.7 215.7,108.7 212.5,110.8 209.5,112.9 206.5,115.2 203.5,117.5 200.6,120 197.9,122.5 195.1,125.1 192.5,127.9 190,130.6 187.5,133.5 185.2,136.5 182.9,139.5 180.8,142.5 178.7,145.7 176.7,148.9 174.8,152.2 173.1,155.5 171.4,158.9 169.9,162.3 168.4,165.8 167.1,169.4 165.9,172.9 164.8,176.5 163.8,180.2 162.9,183.8 162.1,187.5 161.5,191.2 160.9,195 160.5,198.7 160.2,202.5 160.1,206.2 160,210" fill="none" stroke="#9cc9ea" stroke-width="2" stroke-linejoin="round"/>
  <polyline points="292,210 292,207.7 291.9,205.5 291.7,203.2 291.4,201 291.1,198.7 290.7,196.5 290.3,194.3 289.7,192.1 289.1,189.9 288.5,187.8 287.7,185.6 286.9,183.5 286.1,181.4 285.1,179.3 284.2,177.3 283.1,175.3 282,173.3 280.8,171.4 279.5,169.5 278.2,167.7 276.9,165.9 275.5,164.1 274,162.4 272.5,160.7 270.9,159.1 269.3,157.5 267.6,156 265.9,154.5 264.1,153.1 262.3,151.8 260.5,150.5 258.6,149.2 256.7,148 254.7,146.9 252.7,145.8 250.7,144.9 248.6,143.9 246.5,143.1 244.4,142.3 242.2,141.5 240.1,140.9 237.9,140.3 235.7,139.7 233.5,139.3 231.3,138.9 229,138.6 226.8,138.3 224.5,138.1 222.3,138 220,138 217.7,138 215.5,138.1 213.2,138.3 211,138.6 208.7,138.9 206.5,139.3 204.3,139.7 202.1,140.3 199.9,140.9 197.8,141.5 195.6,142.3 193.5,143.1 191.4,143.9 189.3,144.9 187.3,145.8 185.3,146.9 183.3,148 181.4,149.2 179.5,150.5 177.7,151.8 175.9,153.1 174.1,154.5 172.4,156 170.7,157.5 169.1,159.1 167.5,160.7 166,162.4 164.5,164.1 163.1,165.9 161.8,167.7 160.5,169.5 159.2,171.4 158,173.3 156.9,175.3 155.8,177.3 154.9,179.3 153.9,181.4 153.1,183.5 152.3,185.6 151.5,187.8 150.9,189.9 150.3,192.1 149.7,194.3 149.3,196.5 148.9,198.7 148.6,201 148.3,203.2 148.1,205.5 148,207.7 148,210" fill="none" stroke="#9cc9ea" stroke-width="2" stroke-linejoin="round"/>
  <polyline points="406,210 406,208.7 405.9,207.4 405.8,206 405.7,204.7 405.5,203.4 405.3,202.1 405,200.8 404.7,199.6 404.3,198.3 403.9,197 403.5,195.8 403.1,194.5 402.5,193.3 402,192.1 401.4,190.9 400.8,189.8 400.2,188.6 399.5,187.5 398.7,186.4 398,185.3 397.2,184.3 396.4,183.2 395.5,182.2 394.6,181.2 393.7,180.3 392.8,179.4 391.8,178.5 390.8,177.6 389.7,176.8 388.7,176 387.6,175.3 386.5,174.5 385.4,173.8 384.2,173.2 383.1,172.6 381.9,172 380.7,171.5 379.5,170.9 378.2,170.5 377,170.1 375.7,169.7 374.4,169.3 373.2,169 371.9,168.7 370.6,168.5 369.3,168.3 368,168.2 366.6,168.1 365.3,168 364,168 362.7,168 361.4,168.1 360,168.2 358.7,168.3 357.4,168.5 356.1,168.7 354.8,169 353.6,169.3 352.3,169.7 351,170.1 349.8,170.5 348.5,170.9 347.3,171.5 346.1,172 344.9,172.6 343.8,173.2 342.6,173.8 341.5,174.5 340.4,175.3 339.3,176 338.3,176.8 337.2,177.6 336.2,178.5 335.2,179.4 334.3,180.3 333.4,181.2 332.5,182.2 331.6,183.2 330.8,184.3 330,185.3 329.3,186.4 328.5,187.5 327.8,188.6 327.2,189.8 326.6,190.9 326,192.1 325.5,193.3 324.9,194.5 324.5,195.8 324.1,197 323.7,198.3 323.3,199.6 323,200.8 322.7,202.1 322.5,203.4 322.3,204.7 322.2,206 322.1,207.4 322,208.7 322,210" fill="none" stroke="#9cc9ea" stroke-width="2" stroke-linejoin="round"/>
  <line x1="46" y1="210" x2="46" y2="30" stroke="#9cc9ea" stroke-width="2"/>
  <polygon points="220,106.1 221.5,106.9 223,107.8 224.4,108.8 225.9,109.7 227.3,110.6 228.7,111.6 230.1,112.6 231.5,113.6 232.9,114.7 234.2,115.7 235.6,116.8 236.9,117.9 238.2,119 239.5,120.1 240.8,121.3 242.1,122.5 243.3,123.6 244.5,124.8 245.8,126.1 247,127.3 248.1,128.6 249.3,129.8 250.4,131.1 251.6,132.4 252.7,133.7 253.7,135.1 254.8,136.4 255.9,137.8 256.9,139.2 257.9,140.6 258.9,142 259.8,143.4 260.8,144.9 261.7,146.3 262.6,147.8 263.5,149.3 264.3,150.7 265.2,152.2 266,153.8 266.8,155.3 266.8,155.3 264.8,153.7 262.8,152.1 260.7,150.6 258.6,149.2 256.4,147.9 254.2,146.7 252,145.5 249.7,144.4 247.3,143.4 244.9,142.5 242.5,141.6 240.1,140.9 237.6,140.2 235.2,139.6 232.7,139.1 230.2,138.7 227.6,138.4 225.1,138.2 222.5,138 220,138 217.5,138 214.9,138.2 212.4,138.4 209.8,138.7 207.3,139.1 204.8,139.6 202.4,140.2 199.9,140.9 197.5,141.6 195.1,142.5 192.7,143.4 190.3,144.4 188,145.5 185.8,146.7 183.6,147.9 181.4,149.2 179.3,150.6 177.2,152.1 175.2,153.7 173.2,155.3 173.2,155.3 174,153.8 174.8,152.2 175.7,150.7 176.5,149.3 177.4,147.8 178.3,146.3 179.2,144.9 180.2,143.4 181.1,142 182.1,140.6 183.1,139.2 184.1,137.8 185.2,136.4 186.3,135.1 187.3,133.7 188.4,132.4 189.6,131.1 190.7,129.8 191.9,128.6 193,127.3 194.2,126.1 195.5,124.8 196.7,123.6 197.9,122.5 199.2,121.3 200.5,120.1 201.8,119 203.1,117.9 204.4,116.8 205.8,115.7 207.1,114.7 208.5,113.6 209.9,112.6 211.3,111.6 212.7,110.6 214.1,109.7 215.6,108.8 217,107.8 218.5,106.9 220,106.1" fill="#eea66f" fill-opacity="0.35" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="220" cy="106.1" r="3.5" fill="currentColor"/>
  <circle cx="266.8" cy="155.3" r="3.5" fill="currentColor"/>
  <circle cx="173.2" cy="155.3" r="3.5" fill="currentColor"/>
</svg>
</div>

## 20.4 Curvature in higher dimensions

*Level: expert.* On a surface one number, $K$, measures curvature at each point. In higher dimensions curvature has more
components, and the honest answer to "how curved is it?" is a tensor. Here is how to understand it without drowning in
indices.

**Curvature as rotation around a loop.** Move a tangent vector along a curve while keeping it "as constant as possible",
meaning its covariant derivative along the curve is zero: this is **parallel transport**. In the plane, carrying a vector
around any closed loop brings it back unchanged. On a sphere it does not.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 300" role="img" aria-label="Parallel transport on a sphere. A vector starts at the north pole N pointing toward A, is carried down the meridian to A, along the equator to B, and back up to N, never turning. It returns pointing toward B: rotated by a right angle, equal to the area of the triangle on a unit sphere">
  <circle cx="220" cy="155" r="115" fill="#9cc9ea" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="220,50.8 222.3,51.6 224.6,52.6 226.9,53.5 229.2,54.6 231.5,55.7 233.8,56.9 236.1,58.2 238.3,59.5 240.6,60.9 242.8,62.4 245,63.9 247.2,65.5 249.4,67.2 251.6,68.9 253.7,70.7 255.8,72.5 257.9,74.4 260,76.3 262,78.3 264,80.4 266,82.5 268,84.6 269.9,86.8 271.8,89 273.6,91.3 275.4,93.7 277.2,96 278.9,98.4 280.6,100.9 282.3,103.4 283.9,105.9 285.5,108.5 287,111.1 288.5,113.7 289.9,116.3 291.3,119 292.6,121.7 293.9,124.4 295.1,127.2 296.3,129.9 297.4,132.7 298.5,135.5 299.5,138.3 300.5,141.1 301.4,144 302.2,146.8 303,149.7 303.8,152.5 304.5,155.4 305.1,158.2 305.7,161 306.2,163.9 306.6,166.7 307,169.6 307.3,172.4 307.6,175.2 307.8,178 308,180.7 308.1,183.5 308.1,186.2 308.1,186.2 306.1,187.2 304.1,188.1 302,189.1 299.9,190 297.7,190.8 295.4,191.7 293.1,192.5 290.8,193.3 288.4,194.1 286,194.8 283.5,195.5 280.9,196.2 278.4,196.9 275.8,197.5 273.1,198.1 270.4,198.7 267.7,199.2 264.9,199.7 262.1,200.2 259.3,200.7 256.5,201.1 253.6,201.5 250.7,201.8 247.8,202.2 244.9,202.4 241.9,202.7 239,202.9 236,203.1 233,203.3 230,203.4 227,203.5 224,203.6 221,203.6 218,203.6 215,203.6 212,203.5 209,203.4 206,203.2 203,203.1 200,202.9 197.1,202.6 194.1,202.4 191.2,202.1 188.3,201.7 185.4,201.4 182.6,201 179.7,200.5 176.9,200.1 174.1,199.6 171.4,199 168.7,198.5 166,197.9 163.4,197.3 160.8,196.7 158.2,196 155.7,195.3 153.2,194.6 150.8,193.8 148.4,193 146.1,192.2 146.1,192.2 146.1,189.5 146.2,186.7 146.3,183.9 146.5,181.1 146.7,178.3 147,175.5 147.3,172.6 147.7,169.7 148.1,166.9 148.6,164 149.1,161.1 149.7,158.2 150.3,155.3 151,152.4 151.7,149.5 152.5,146.6 153.3,143.7 154.1,140.9 155,138 156,135.1 157,132.3 158,129.5 159.1,126.6 160.2,123.9 161.4,121.1 162.6,118.3 163.8,115.6 165.1,112.9 166.4,110.3 167.7,107.6 169.1,105 170.5,102.5 172,99.9 173.5,97.4 175,95 176.6,92.6 178.1,90.2 179.7,87.9 181.4,85.6 183,83.4 184.7,81.2 186.4,79 188.2,77 189.9,74.9 191.7,73 193.5,71 195.3,69.2 197.2,67.4 199,65.6 200.9,64 202.7,62.3 204.6,60.8 206.5,59.3 208.4,57.9 210.4,56.5 212.3,55.2 214.2,54 216.1,52.9 218.1,51.8 220,50.8" fill="#eea66f" fill-opacity="0.25" stroke="#eea66f" stroke-width="2" stroke-linejoin="round"/>
  <line x1="220" y1="50.8" x2="255.2" y2="63.3" stroke="#7ccf9a" stroke-width="2.2"/>
  <polygon points="255.2,63.3 248.3,63.7 250.1,58.5" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <line x1="282.3" y1="103.4" x2="307.2" y2="141.7" stroke="#7ccf9a" stroke-width="2.2"/>
  <polygon points="307.2,141.7 301.4,137.8 306,134.8" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <line x1="308.1" y1="186.2" x2="308.1" y2="227.9" stroke="#7ccf9a" stroke-width="2.2"/>
  <polygon points="308.1,227.9 305.4,221.5 310.8,221.5" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <line x1="256.5" y1="201.1" x2="256.5" y2="242.8" stroke="#7ccf9a" stroke-width="2.2"/>
  <polygon points="256.5,242.8 253.8,236.3 259.2,236.3" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <line x1="194.1" y1="202.4" x2="194.1" y2="244" stroke="#7ccf9a" stroke-width="2.2"/>
  <polygon points="194.1,244 191.4,237.6 196.9,237.6" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <line x1="146.1" y1="192.2" x2="146.1" y2="233.9" stroke="#7ccf9a" stroke-width="2.2"/>
  <polygon points="146.1,233.9 143.4,227.5 148.8,227.5" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <line x1="167.7" y1="107.6" x2="146.8" y2="147.6" stroke="#7ccf9a" stroke-width="2.2"/>
  <polygon points="146.8,147.6 147.4,140.7 152.2,143.2" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <line x1="220" y1="50.8" x2="190.4" y2="65.7" stroke="#eea66f" stroke-width="2.2"/>
  <polygon points="190.4,65.7 195,60.3 197.4,65.2" fill="#eea66f" stroke="#eea66f" stroke-width="1" stroke-linejoin="round"/>
  <circle cx="308.1" cy="186.2" r="4" fill="currentColor"/>
  <text x="302.1" y="206.2" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <circle cx="146.1" cy="192.2" r="4" fill="currentColor"/>
  <text x="162.1" y="202.2" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <circle cx="220" cy="50.8" r="4" fill="currentColor"/>
  <text x="206" y="44.8" text-anchor="middle" font-size="13" fill="currentColor">N</text>
</svg>
</div>

Take the triangle with one vertex at the north pole and two on the equator a quarter turn apart, on the unit sphere. Start
at $N$ with a vector pointing toward $A$, and carry it down the meridian (it stays pointing along the meridian, since that is
a geodesic and the angle with a geodesic is preserved), then along the equator (it stays pointing south, perpendicular to
the equator), then up the meridian through $B$ (it stays pointing back down that meridian). It arrives at $N$ pointing toward
$B$: turned by a right angle, $\pi/2$, which is exactly the area of the triangle, $4\pi/8$. In general, for a small loop
enclosing area $A$ on a surface,

$$
\text{rotation angle} \approx K \cdot A,
$$

and this is the content of Gauss–Bonnet for the triangle. In higher dimensions the rotation depends on the *plane* in which
the small loop lies, and that is what the curvature tensor records.

**The Riemann curvature tensor.** For vector fields $X, Y, Z$ define

$$
R(X, Y)Z = \nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z - \nabla_{[X, Y]} Z .
$$

It measures the failure of covariant derivatives to commute, which is the infinitesimal version of parallel transport
around a small parallelogram spanned by $X$ and $Y$. It is linear in each argument at each point (a tensor), and has the
symmetries $R(X, Y) = -R(Y, X)$, $g(R(X, Y)Z, W) = -g(R(X, Y)W, Z)$, $g(R(X,Y)Z,W) = g(R(Z,W)X,Y)$, and the first Bianchi identity
$R(X, Y)Z + R(Y, Z)X + R(Z, X)Y = 0$. Counting what these symmetries leave, the number of independent components in dimension
$n$ is

$$
\frac{n^2(n^2 - 1)}{12}: \qquad 1 \text{ for } n = 2, \quad 6 \text{ for } n = 3, \quad 20 \text{ for } n = 4 .
$$

**Sectional curvature.** For a 2-dimensional plane $\sigma \subset T_pM$ spanned by $u, v$,

$$
K(\sigma) = \frac{g(R(u, v)v, u)}{g(u, u)g(v, v) - g(u, v)^2}.
$$

Geometrically it is the Gaussian curvature, at $p$, of the surface swept out by geodesics starting from $p$ in the directions
of $\sigma$. On a surface there is only one plane and $K(\sigma)$ is Gauss's $K$. The sectional curvatures of all planes determine
the whole tensor $R$. A manifold has **constant curvature** $k$ if $K(\sigma) = k$ for every plane at every point; the models
are the sphere ($k > 0$), Euclidean space ($k = 0$) and hyperbolic space ($k < 0$).

**Ricci curvature.** Averaging sectional curvatures gives a simpler object. For a unit vector $v$, the **Ricci curvature**
$\mathrm{Ric}(v, v)$ is the sum of the sectional curvatures of the planes spanned by $v$ and $e_i$, for an orthonormal basis
$v, e_2, \dots, e_n$; formally $\mathrm{Ric}(Y, Z)$ is the trace of $X \mapsto R(X, Y)Z$. Its meaning is about **volume**: in
the direction $v$, a small cone of geodesics spreads out less than in flat space if $\mathrm{Ric}(v, v) > 0$ and more if it is
negative. Positive Ricci curvature focuses geodesics, the way a lens focuses light. Ricci curvature has $n(n+1)/2$
components; in dimension 3 that is 6, the same as the full Riemann tensor, and indeed in dimension 3 Ricci determines Riemann.

**Scalar curvature.** Tracing once more gives a single function, the **scalar curvature** $S = \sum_i \mathrm{Ric}(e_i, e_i)$,
twice the sum of the sectional curvatures of all coordinate planes. It measures the volume of small balls:

$$
\mathrm{vol}\bigl(B(p, r)\bigr) = \omega_n r^n \left( 1 - \frac{S(p)}{6(n + 2)} r^2 + O(r^4) \right),
$$

where $\omega_n r^n$ is the volume of a Euclidean ball. *Check on the unit 2-sphere:* $S = 2K = 2$ and $n = 2$, so the formula
predicts area $\pi r^2(1 - r^2/12 + \cdots)$. The exact area of a geodesic disc of radius $r$ (a polar cap) is
$2\pi(1 - \cos r) = 2\pi\bigl(\tfrac{r^2}{2} - \tfrac{r^4}{24} + \cdots\bigr) = \pi r^2 - \tfrac{\pi r^4}{12} + \cdots$. They agree.

**What curvature controls (statements).** Bounds on curvature force global shape:

- **Bonnet–Myers (Myers 1941):** if $M$ is complete and $\mathrm{Ric} \ge (n - 1)k > 0$ in every direction, then $M$ is compact with
  diameter at most $\pi/\sqrt{k}$, the diameter of the sphere of curvature $k$.
- **Cartan–Hadamard:** if $M$ is complete, simply connected and all sectional curvatures are $\le 0$, then $\exp_p$ is a
  diffeomorphism and $M$ looks topologically like $\mathbb{R}^n$.
- **Bishop–Gromov:** a lower bound on Ricci curvature bounds the growth of volumes of balls by those in the model space.

These "local to global" theorems are the heart of modern Riemannian geometry, and the tools behind the Poincaré conjecture
in [Chapter 21](21-Where-Geometry-Goes.md).

## 20.5 General relativity: gravity as curvature

*Level: expert (survey).* Newton's gravity is a force acting instantly across space. Einstein's general theory of
relativity (1915) replaces it with geometry: matter and energy curve **spacetime**, a 4-dimensional manifold, and freely
falling bodies follow its geodesics. Nothing pulls the Moon toward the Earth; it moves as straight as it can through a
curved spacetime.

**Lorentzian metrics.** Spacetime's metric is not positive definite. In special relativity ([PHY132H1 Unit 10](../../uoft/PHY132H1/unit10.md)),
the "interval" between nearby events is

$$
ds^2 = -c^2\, dt^2 + dx^2 + dy^2 + dz^2,
$$

with one minus sign: a **Lorentzian** metric of signature $(-, +, +, +)$. For a massive particle $ds^2 < 0$ along its path, and
$\sqrt{-ds^2}/c$ is the time its own clock measures, the **proper time**. All of Riemannian geometry (connection, geodesics,
curvature) carries over with this metric. Free fall is a geodesic that *maximises* proper time between two events; the twin
who stays home ages more.

**Einstein's field equations.** With the Ricci tensor $R_{\mu\nu}$ and scalar curvature $R$ of the spacetime metric $g_{\mu\nu}$,

$$
R_{\mu\nu} - \frac12 R\, g_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu} .
$$

The left side is geometry (the combination $G_{\mu\nu} = R_{\mu\nu} - \tfrac12 R g_{\mu\nu}$, the **Einstein tensor**, is the one whose
divergence vanishes automatically, matching conservation of energy and momentum); $\Lambda$ is the cosmological constant;
the right side is the **stress-energy tensor** $T_{\mu\nu}$, describing the density and flow of energy and momentum. In
words: *matter tells spacetime how to curve; spacetime tells matter how to move.* These are 10 coupled nonlinear partial
differential equations for the 10 components of the metric. In empty space with $\Lambda = 0$ they say $R_{\mu\nu} = 0$: Ricci-flat,
though the full curvature need not vanish (tidal forces remain).

**The Schwarzschild solution.** Karl Schwarzschild found in 1916 the metric outside a spherical, non-rotating mass $M$:

$$
ds^2 = -\left(1 - \frac{r_s}{r}\right)c^2 dt^2 + \left(1 - \frac{r_s}{r}\right)^{-1} dr^2 + r^2\left(d\theta^2 + \sin^2\theta \, d\phi^2\right), \qquad r_s = \frac{2GM}{c^2}.
$$

For the Sun, $r_s \approx 2.95$ km; for the Earth about 9 mm. Far from the mass ($r \gg r_s$) it is nearly flat, and its geodesics
reproduce Newton's orbits plus small corrections that have been measured:

- **Mercury's perihelion.** The long axis of Mercury's elliptical orbit turns slowly. Most of the turning is caused by the
  other planets, but in 1859 Le Verrier found an unexplained excess, later measured as about 43 arcseconds per century.
  The geodesics of Schwarzschild's metric predict a turn of $6\pi GM/(c^2 a(1 - e^2))$ radians per orbit. With
  $GM_\odot = 1.327 \times 10^{20}\ \mathrm{m^3/s^2}$, $a = 5.79 \times 10^{10}$ m, $e = 0.2056$ and 415 orbits per century, this is
  $43.0''$ per century. Einstein computed it in November 1915; it was the first success of the theory. For Mars, with
  $a = 2.279 \times 10^{11}$ m and $e = 0.0934$, the same formula gives about $1.35''$ per century.
- **Bending of light.** Light grazing the Sun is deflected by $4GM/(c^2 R_\odot) \approx 1.75''$, twice the value a Newtonian
  argument gives. Expeditions led by Eddington and Dyson measured it during the eclipse of 1919; those measurements were
  rough, and the effect has since been confirmed to high precision with radio telescopes.
- **Time delay.** Radar signals passing near the Sun take slightly longer than in flat space (the **Shapiro delay**, predicted
  in 1964). It was measured with signals to Mercury and Venus, and to the Viking landers on Mars in the late 1970s, and later
  with the Cassini spacecraft to about one part in 100,000.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="An orbit that slowly turns: each loop is an ellipse whose long axis has rotated a little from the last, tracing a rosette. For Mercury general relativity predicts a turn of about 43 arcseconds per century beyond what the other planets cause; the drawing exaggerates it enormously">
  <polygon points="287.8,130 287.6,125.1 287.2,120.2 286.5,115.3 285.5,110.5 284.2,105.7 282.6,101 280.8,96.4 278.7,91.9 276.3,87.4 273.7,83.1 270.8,78.9 267.7,74.9 264.4,71 260.8,67.3 257,63.7 253,60.3 248.8,57.1 244.5,54.1 239.9,51.4 235.2,48.8 230.4,46.5 225.5,44.3 220.4,42.5 215.2,40.8 209.9,39.4 204.6,38.3 199.2,37.4 193.7,36.7 188.2,36.4 182.8,36.2 177.3,36.4 171.8,36.7 166.3,37.4 160.9,38.3 155.6,39.4 150.3,40.8 145.1,42.5 140,44.3 135.1,46.5 130.3,48.8 125.6,51.4 121,54.1 116.7,57.1 112.5,60.3 108.5,63.7 104.7,67.3 101.1,71 97.8,74.9 94.7,78.9 91.8,83.1 89.2,87.4 86.8,91.9 84.7,96.4 82.9,101 81.3,105.7 80,110.5 79,115.3 78.3,120.2 77.9,125.1 77.8,130 77.9,134.9 78.3,139.8 79,144.7 80,149.5 81.3,154.3 82.9,159 84.7,163.6 86.8,168.1 89.2,172.6 91.8,176.9 94.7,181.1 97.8,185.1 101.1,189 104.7,192.7 108.5,196.3 112.5,199.7 116.7,202.9 121,205.9 125.6,208.6 130.2,211.2 135.1,213.5 140,215.7 145.1,217.5 150.3,219.2 155.6,220.6 160.9,221.7 166.3,222.6 171.8,223.3 177.3,223.6 182.7,223.8 188.2,223.6 193.7,223.3 199.2,222.6 204.6,221.7 209.9,220.6 215.2,219.2 220.4,217.5 225.5,215.7 230.4,213.5 235.2,211.2 239.9,208.6 244.5,205.9 248.8,202.9 253,199.7 257,196.3 260.8,192.7 264.4,189 267.7,185.1 270.8,181.1 273.7,176.9 276.3,172.6 278.7,168.1 280.8,163.6 282.6,159 284.2,154.3 285.5,149.5 286.5,144.7 287.2,139.8 287.6,134.9 287.8,130" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polygon points="286.5,118 285.3,113.2 283.9,108.5 282.2,103.9 280.2,99.4 277.9,95 275.4,90.7 272.7,86.6 269.7,82.6 266.4,78.7 263,75.1 259.3,71.6 255.4,68.3 251.3,65.1 247.1,62.2 242.6,59.5 238,57.1 233.3,54.8 228.4,52.8 223.4,51 218.3,49.5 213,48.2 207.7,47.2 202.4,46.4 197,45.8 191.5,45.6 186.1,45.6 180.6,45.8 175.1,46.3 169.7,47.1 164.3,48.1 158.9,49.4 153.7,50.9 148.5,52.6 143.4,54.6 138.4,56.9 133.5,59.3 128.8,62 124.2,64.9 119.8,68 115.5,71.3 111.5,74.8 107.6,78.5 104,82.3 100.6,86.3 97.4,90.4 94.4,94.7 91.7,99.1 89.2,103.6 87,108.2 85.1,112.9 83.4,117.6 82,122.5 80.9,127.3 80.1,132.2 79.5,137.2 79.3,142.1 79.3,147 79.6,151.9 80.2,156.8 81.1,161.7 82.2,166.4 83.7,171.1 85.4,175.7 87.4,180.2 89.6,184.6 92.1,188.9 94.9,193.1 97.9,197.1 101.1,200.9 104.6,204.6 108.3,208.1 112.2,211.4 116.2,214.5 120.5,217.4 124.9,220.1 129.5,222.6 134.3,224.8 139.2,226.9 144.2,228.6 149.3,230.2 154.5,231.5 159.8,232.5 165.2,233.3 170.6,233.8 176,234.1 181.5,234.1 187,233.8 192.4,233.3 197.9,232.6 203.3,231.5 208.6,230.3 213.9,228.8 219.1,227 224.2,225 229.2,222.8 234.1,220.3 238.8,217.6 243.4,214.7 247.8,211.6 252,208.3 256.1,204.9 259.9,201.2 263.6,197.4 267,193.4 270.2,189.2 273.2,185 275.9,180.6 278.3,176.1 280.5,171.5 282.5,166.8 284.1,162 285.5,157.2 286.7,152.3 287.5,147.4 288,142.5 288.3,137.5 288.3,132.6 288,127.7 287.4,122.8 286.5,118" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polygon points="282.8,106.5 280.6,102.1 278.2,97.8 275.6,93.6 272.7,89.6 269.6,85.8 266.3,82.1 262.7,78.6 259,75.4 255,72.3 250.8,69.4 246.5,66.7 242,64.3 237.4,62.1 232.6,60.2 227.7,58.4 222.7,57 217.6,55.8 212.4,54.8 207.1,54.1 201.8,53.7 196.4,53.5 191,53.6 185.6,53.9 180.2,54.6 174.8,55.4 169.5,56.5 164.2,57.9 158.9,59.6 153.8,61.4 148.7,63.6 143.7,65.9 138.9,68.5 134.2,71.3 129.6,74.3 125.2,77.5 120.9,80.9 116.9,84.6 113,88.3 109.3,92.3 105.8,96.4 102.6,100.6 99.6,105 96.8,109.5 94.3,114.1 92,118.8 90,123.6 88.3,128.5 86.8,133.4 85.6,138.4 84.7,143.4 84.1,148.4 83.7,153.4 83.6,158.4 83.8,163.4 84.3,168.3 85.1,173.2 86.1,178 87.5,182.7 89,187.4 90.9,191.9 93,196.4 95.4,200.6 98.1,204.8 100.9,208.8 104.1,212.6 107.4,216.3 111,219.8 114.7,223.1 118.7,226.2 122.8,229 127.2,231.7 131.6,234.1 136.3,236.3 141.1,238.3 146,240 151,241.5 156.1,242.7 161.3,243.6 166.6,244.3 171.9,244.8 177.3,244.9 182.7,244.8 188.1,244.5 193.5,243.9 198.8,243 204.2,241.9 209.5,240.5 214.7,238.9 219.9,237 225,234.9 229.9,232.5 234.8,229.9 239.5,227.1 244.1,224.1 248.5,220.9 252.7,217.5 256.8,213.9 260.7,210.1 264.4,206.2 267.8,202 271.1,197.8 274.1,193.4 276.8,188.9 279.4,184.3 281.6,179.6 283.6,174.8 285.4,169.9 286.9,165 288.1,160.1 289,155.1 289.6,150.1 290,145 290.1,140 289.8,135.1 289.4,130.1 288.6,125.3 287.5,120.4 286.2,115.7 284.6,111.1 282.8,106.5" fill="none" stroke="#7ccf9a" stroke-width="1.6" stroke-linejoin="round"/>
  <polygon points="276.7,96.1 273.7,92.2 270.5,88.5 267.1,84.9 263.4,81.6 259.6,78.5 255.5,75.6 251.3,73 247,70.5 242.4,68.3 237.8,66.4 233,64.7 228.1,63.3 223.1,62.1 218,61.1 212.9,60.5 207.7,60.1 202.4,60 197.1,60.1 191.8,60.5 186.5,61.2 181.2,62.2 176,63.4 170.8,64.8 165.6,66.6 160.5,68.5 155.5,70.7 150.6,73.2 145.8,75.9 141.2,78.8 136.7,81.9 132.3,85.2 128.1,88.8 124,92.5 120.2,96.4 116.6,100.5 113.1,104.7 109.9,109.1 106.9,113.6 104.1,118.2 101.6,122.9 99.3,127.8 97.3,132.7 95.5,137.7 94,142.7 92.7,147.8 91.8,152.9 91.1,158 90.7,163.1 90.5,168.2 90.7,173.3 91.1,178.3 91.8,183.3 92.7,188.2 94,193 95.5,197.8 97.2,202.4 99.3,206.9 101.5,211.2 104.1,215.4 106.8,219.5 109.8,223.4 113.1,227.1 116.5,230.6 120.1,233.9 124,237 128,239.9 132.2,242.6 136.6,245 141.1,247.2 145.8,249.2 150.5,250.8 155.4,252.3 160.4,253.5 165.5,254.4 170.7,255.1 175.9,255.4 181.1,255.6 186.4,255.4 191.7,255 197,254.3 202.3,253.4 207.6,252.2 212.8,250.7 217.9,249 223,247 228,244.8 232.9,242.4 237.7,239.7 242.4,236.8 246.9,233.6 251.3,230.3 255.5,226.8 259.5,223 263.3,219.1 267,215.1 270.4,210.8 273.7,206.5 276.7,202 279.4,197.3 282,192.6 284.3,187.8 286.3,182.9 288.1,177.9 289.6,172.9 290.8,167.8 291.8,162.7 292.5,157.5 292.9,152.4 293,147.3 292.9,142.3 292.5,137.2 291.8,132.2 290.8,127.3 289.6,122.5 288.1,117.8 286.3,113.2 284.3,108.7 282,104.3 279.5,100.1 276.7,96.1" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polygon points="268.6,87.1 264.9,83.9 261,81 256.9,78.2 252.6,75.7 248.2,73.5 243.7,71.5 239,69.8 234.2,68.3 229.3,67.1 224.4,66.2 219.4,65.5 214.3,65.1 209.1,65 204,65.1 198.8,65.6 193.6,66.3 188.4,67.2 183.3,68.5 178.2,70 173.2,71.8 168.2,73.8 163.3,76.1 158.5,78.6 153.8,81.3 149.3,84.3 144.8,87.5 140.5,90.9 136.4,94.6 132.5,98.4 128.7,102.4 125.1,106.5 121.7,110.9 118.6,115.3 115.6,120 112.9,124.7 110.4,129.6 108.2,134.5 106.1,139.5 104.4,144.6 102.9,149.8 101.7,155 100.7,160.2 100,165.5 99.6,170.7 99.4,175.9 99.5,181.1 99.9,186.3 100.6,191.4 101.5,196.4 102.7,201.3 104.1,206.2 105.9,210.9 107.8,215.5 110,219.9 112.5,224.2 115.2,228.4 118.1,232.4 121.2,236.2 124.6,239.8 128.1,243.1 131.9,246.3 135.8,249.3 139.9,252 144.1,254.5 148.6,256.7 153.1,258.7 157.8,260.4 162.5,261.9 167.4,263.1 172.4,264.1 177.4,264.7 182.5,265.1 187.6,265.2 192.8,265.1 198,264.7 203.2,264 208.3,263 213.5,261.7 218.6,260.2 223.6,258.5 228.6,256.4 233.5,254.2 238.3,251.7 242.9,248.9 247.5,245.9 251.9,242.7 256.2,239.3 260.3,235.7 264.3,231.9 268.1,227.9 271.6,223.7 275,219.4 278.2,214.9 281.2,210.3 283.9,205.5 286.4,200.7 288.6,195.7 290.6,190.7 292.4,185.6 293.9,180.4 295.1,175.2 296.1,170 296.8,164.8 297.2,159.5 297.3,154.3 297.2,149.1 296.8,144 296.2,138.9 295.3,133.8 294.1,128.9 292.6,124.1 290.9,119.3 288.9,114.8 286.7,110.3 284.3,106 281.6,101.8 278.7,97.9 275.5,94.1 272.2,90.5 268.6,87.1" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <circle cx="230" cy="130" r="9" fill="#eea66f" stroke="#eea66f" stroke-width="1.5"/>
  <text x="230" y="158" text-anchor="middle" font-size="12" fill="currentColor">Sun</text>
</svg>
</div>

**GPS.** The satellites of the Global Positioning System orbit at radius about 26,560 km, at about 3.87 km/s, carrying atomic
clocks. Two relativistic effects change their rate compared with clocks on the ground:

- Higher up, the gravitational potential is weaker, and clocks run *faster*: by $GM_\oplus(1/R_\oplus - 1/r)/c^2$, which is about
  $45.7$ microseconds per day.
- The satellites move fast, and moving clocks run *slower* (special relativity): by $v^2/(2c^2)$, about $7.2$ microseconds per day.

Net: the satellite clocks gain about 38 microseconds per day. Light travels about 11 km in that time, so a system that
ignored relativity would accumulate position errors of that order per day. The satellite clocks are deliberately set to
run slightly slow before launch to compensate. (The 45.7 and 7.2 above are computed from the standard values with a
spherical Earth; published figures differ slightly in the last digit depending on what is included.)

**Beyond.** Gravitational waves, ripples of curvature predicted by Einstein in 1916, were detected directly by LIGO on
14 September 2015 from two merging black holes. The Event Horizon Telescope published an image of the shadow of the black
hole at the centre of the galaxy M87 in 2019. Black holes, the expanding universe and gravitational lensing are all
consequences of the same equations of curvature.

## 20.6 Uniformization: the three geometries of surfaces

*Level: expert.* [Chapter 19](19-Curves-and-Surfaces.md) ended with Gauss–Bonnet: the total curvature of a closed surface is $2\pi\chi$.
A surface can be bent into many shapes with varying curvature. Is there always a *best* shape, with constant curvature? For
surfaces the answer is yes, and it is one of the great theorems of nineteenth and early twentieth century mathematics.

**Gluing polygons.** Every closed orientable surface can be made by gluing the sides of a polygon in pairs.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="Left: a torus made from a square by gluing opposite sides, a to a and b to b; the four corners become one point and the angles there add up to 360 degrees, so the square's flat geometry passes to the torus. Right: a two-holed surface made from an octagon by gluing sides in the pattern a b a-inverse b-inverse c d c-inverse d-inverse; drawn as a regular hyperbolic octagon its eight angles are 45 degrees each and also add up to 360 degrees">
  <polygon points="40,40 180,40 180,180 40,180" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <line x1="40" y1="180" x2="180" y2="180" stroke="#eea66f" stroke-width="3"/>
  <polygon points="116,180 104,175 104,185" fill="#eea66f" stroke="#eea66f" stroke-width="1" stroke-linejoin="round"/>
  <text x="110" y="200" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">a</text>
  <line x1="40" y1="40" x2="180" y2="40" stroke="#eea66f" stroke-width="3"/>
  <polygon points="116,40 104,35 104,45" fill="#eea66f" stroke="#eea66f" stroke-width="1" stroke-linejoin="round"/>
  <text x="110" y="30" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">a</text>
  <line x1="40" y1="180" x2="40" y2="40" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="40,104 35,116 45,116" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <text x="26" y="114" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">b</text>
  <line x1="180" y1="180" x2="180" y2="40" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="180,104 175,116 185,116" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <text x="194" y="114" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">b</text>
  <polygon points="397.6,82.9 394.4,81.5 391.3,80.1 388.3,78.6 385.4,76.9 382.5,75.2 379.8,73.4 377.2,71.4 374.7,69.4 372.3,67.3 369.9,65.1 367.7,62.7 365.6,60.3 363.6,57.8 361.6,55.2 359.8,52.5 358.1,49.6 356.4,46.7 354.9,43.7 353.5,40.6 352.1,37.4 352.1,37.4 348.9,38.7 345.7,39.9 342.5,41 339.3,41.9 336.1,42.6 332.9,43.3 329.6,43.8 326.4,44.1 323.2,44.3 320,44.4 316.8,44.3 313.6,44.1 310.4,43.8 307.1,43.3 303.9,42.6 300.7,41.9 297.5,41 294.3,39.9 291.1,38.7 287.9,37.4 287.9,37.4 286.5,40.6 285.1,43.7 283.6,46.7 281.9,49.6 280.2,52.5 278.4,55.2 276.4,57.8 274.4,60.3 272.3,62.7 270.1,65.1 267.7,67.3 265.3,69.4 262.8,71.4 260.2,73.4 257.5,75.2 254.6,76.9 251.7,78.6 248.7,80.1 245.6,81.5 242.4,82.9 242.4,82.9 243.7,86.1 244.9,89.3 246,92.5 246.9,95.7 247.6,98.9 248.3,102.1 248.8,105.4 249.1,108.6 249.3,111.8 249.4,115 249.3,118.2 249.1,121.4 248.8,124.6 248.3,127.9 247.6,131.1 246.9,134.3 246,137.5 244.9,140.7 243.7,143.9 242.4,147.1 242.4,147.1 245.6,148.5 248.7,149.9 251.7,151.4 254.6,153.1 257.5,154.8 260.2,156.6 262.8,158.6 265.3,160.6 267.7,162.7 270.1,164.9 272.3,167.3 274.4,169.7 276.4,172.2 278.4,174.8 280.2,177.5 281.9,180.4 283.6,183.3 285.1,186.3 286.5,189.4 287.9,192.6 287.9,192.6 291.1,191.3 294.3,190.1 297.5,189 300.7,188.1 303.9,187.4 307.1,186.7 310.4,186.2 313.6,185.9 316.8,185.7 320,185.6 323.2,185.7 326.4,185.9 329.6,186.2 332.9,186.7 336.1,187.4 339.3,188.1 342.5,189 345.7,190.1 348.9,191.3 352.1,192.6 352.1,192.6 353.5,189.4 354.9,186.3 356.4,183.3 358.1,180.4 359.8,177.5 361.6,174.8 363.6,172.2 365.6,169.7 367.7,167.3 369.9,164.9 372.3,162.7 374.7,160.6 377.2,158.6 379.8,156.6 382.5,154.8 385.4,153.1 388.3,151.4 391.3,149.9 394.4,148.5 397.6,147.1 397.6,147.1 396.3,143.9 395.1,140.7 394,137.5 393.1,134.3 392.4,131.1 391.7,127.9 391.2,124.6 390.9,121.4 390.7,118.2 390.6,115 390.7,111.8 390.9,108.6 391.2,105.4 391.7,102.1 392.4,98.9 393.1,95.7 394,92.5 395.1,89.3 396.3,86.1 397.6,82.9" fill="#7ccf9a" fill-opacity="0.25" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="390.2" y="49.8" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">a</text>
  <text x="320" y="20.7" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">b</text>
  <text x="249.8" y="49.8" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">a⁻¹</text>
  <text x="220.7" y="120" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">b⁻¹</text>
  <text x="249.8" y="190.2" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">c</text>
  <text x="320" y="219.3" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">d</text>
  <text x="390.2" y="190.2" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">c⁻¹</text>
  <text x="419.3" y="120" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">d⁻¹</text>
  <circle cx="397.6" cy="82.9" r="3" fill="currentColor"/>
  <circle cx="352.1" cy="37.4" r="3" fill="currentColor"/>
  <circle cx="287.9" cy="37.4" r="3" fill="currentColor"/>
  <circle cx="242.4" cy="82.9" r="3" fill="currentColor"/>
  <circle cx="242.4" cy="147.1" r="3" fill="currentColor"/>
  <circle cx="287.9" cy="192.6" r="3" fill="currentColor"/>
  <circle cx="352.1" cy="192.6" r="3" fill="currentColor"/>
  <circle cx="397.6" cy="147.1" r="3" fill="currentColor"/>
</svg>
</div>

- **The torus** ($\chi = 0$): glue the opposite sides of a square. Give the square its flat metric. At the four corners,
  which become one point, the four right angles add up to $2\pi$, so there is no corner in the result: the **flat torus**,
  with $K = 0$ everywhere. *Check with Gauss–Bonnet:* $\iint K\,dA = 0 = 2\pi \cdot 0$.
- **The two-holed torus** ($\chi = 2 - 2 \cdot 2 = -2$): glue an octagon's sides in the pattern $a\, b\, a^{-1} b^{-1} c\, d\, c^{-1} d^{-1}$;
  all eight corners become one point. For the result to have no corner, the eight angles must add up to $2\pi$, so each must be
  $\pi/4$. A flat regular octagon has angles $3\pi/4$, too big; but in the hyperbolic plane, where angles shrink as polygons
  grow ([Chapter 17](17-Hyperbolic-Geometry.md)), there is a regular octagon with all angles $\pi/4$. Its area, by the hyperbolic
  angle-defect formula, is $(8 - 2)\pi - 8 \cdot \tfrac{\pi}{4} = 4\pi$. Glued up, it gives a surface with $K = -1$ everywhere, and
  *check:* $\iint K\, dA = -4\pi = 2\pi \cdot (-2)$.
- **The sphere** ($\chi = 2$) has the round metric, $K = +1$, area $4\pi$.

**Theorem 20.1 (uniformization, Poincaré and Koebe, 1907).** Every simply connected Riemann surface is conformally equivalent to
exactly one of: the Riemann sphere, the complex plane, or the open unit disc.

A **Riemann surface** is a 2-manifold with charts whose transition maps are complex-analytic; every orientable surface with a
Riemannian metric is one (in "isothermal" coordinates, where the metric is a multiple of $dx^2 + dy^2$). "Conformally
equivalent" means by a bijection that preserves angles. The three models carry natural metrics of curvature $+1$, $0$ and
$-1$ (the disc with the Poincaré metric). A general surface is a quotient of its simply connected cover by a group of
symmetries, and that gives:

**Corollary 20.2.** Every closed orientable surface carries a Riemannian metric of constant curvature, in the same conformal
class as any given metric. By Gauss–Bonnet the sign of the curvature is the sign of $\chi$:

| Surface | genus $g$ | $\chi = 2 - 2g$ | geometry | model |
| --- | --- | --- | --- | --- |
| sphere | 0 | 2 | spherical, $K = +1$ | round sphere, area $4\pi$ |
| torus | 1 | 0 | flat, $K = 0$ | quotient of the plane by a lattice |
| genus $g \ge 2$ | $g$ | $2 - 2g < 0$ | hyperbolic, $K = -1$ | quotient of the hyperbolic plane, area $4\pi(g - 1)$ |

So among closed surfaces, only the sphere is spherical, only the torus is flat, and every other surface is hyperbolic. In this
sense, hyperbolic geometry, which took two thousand years to discover ([Chapter 15](15-Axioms-and-the-Parallel-Postulate.md)),
is the *typical* geometry of surfaces. The proof of the uniformization theorem is long (it needs potential theory or,
in a more modern approach, a curvature flow); a full account is in Donaldson's *Riemann Surfaces*.

**The space of shapes.** The flat metrics on the torus are not all the same: a torus made from a long thin rectangle is not
isometric to one made from a square (after scaling to area 1). The set of different shapes is itself a space, the
**moduli space**, which for tori is 2-dimensional (described by the modular group acting on the upper half-plane), and for
genus $g \ge 2$ has dimension $6g - 6$ (Riemann's count). Moduli spaces are now central objects of geometry, algebraic
geometry and string theory.

In dimension 3 there is no single answer, but Thurston's geometrization conjecture, proved by Perelman, says every closed
3-manifold can be cut into pieces each carrying one of eight geometries. That is the first story of
[Chapter 21](21-Where-Geometry-Goes.md).

## A short history

Riemann's lecture of 10 June 1854, given for his habilitation with Gauss in the audience, introduced manifolds of any dimension
and metrics on them; it was published in 1868, after his death. Christoffel (1869) and Ricci-Curbastro and Levi-Civita (1900)
developed the tensor calculus that made it computable, and Levi-Civita defined parallel transport in 1917. Einstein, with
help from his friend Marcel Grossmann, learned this mathematics from 1912 and reached the field equations in November 1915; Hilbert
derived them from a variational principle at nearly the same time. The modern definition of a manifold by charts and atlases
was made precise by Hermann Weyl (1913, for Riemann surfaces) and by Whitney and others in the 1930s. Poincaré and Koebe proved
uniformization in 1907. The global theorems of 20.4 date from the 1920s to the 1960s (Hopf–Rinow, Myers, Cartan–Hadamard,
Bishop, Gromov), and Riemannian geometry with curvature bounds remains one of the most active fields of mathematics.

## Check yourself

??? question "1. On the circle with stereographic charts, find $\varphi_N$ and $\varphi_S$ of the point $(3/5, 4/5)$ and check the transition map."

    $\varphi_N = x/(1 - y) = (3/5)/(1/5) = 3$. $\varphi_S = x/(1 + y) = (3/5)/(9/5) = 1/3$. The transition map $u \mapsto 1/u$
    sends 3 to $1/3$, as it should.

??? question "2. Show that the transition map between the two stereographic charts of $S^2$ is $u \mapsto u/|u|^2$."

    The inverse of $\varphi_N$ sends $u \in \mathbb{R}^2$ to $p = (2u, |u|^2 - 1)/(|u|^2 + 1)$ (check $|p| = 1$: $4|u|^2 + (|u|^2 - 1)^2 = (|u|^2 + 1)^2$).
    Then $1 + p_3 = 2|u|^2/(|u|^2 + 1)$, so $\varphi_S(p) = (p_1, p_2)/(1 + p_3) = 2u/(2|u|^2) = u/|u|^2$.

??? question "3. What is the dimension of the manifold of all positions of a rigid body in space? Of a robot arm with 6 rotating joints?"

    A rigid body's position is a translation (3 numbers) and an orientation, a point of $SO(3)$ (3 numbers): the manifold
    $\mathbb{R}^3 \times SO(3)$ of dimension 6. The robot arm's joint angles form $S^1 \times \cdots \times S^1$ (6 factors), a 6-dimensional
    torus.

??? question "4. Show that the tangent space of $SO(3)$ at the identity is the space of $3 \times 3$ skew-symmetric matrices, and find its dimension."

    If $A(t)$ is a curve in $SO(3)$ with $A(0) = I$, differentiate $A^{\mathsf T}A = I$ at $0$: $A'(0)^{\mathsf T} + A'(0) = 0$, so
    $A'(0)$ is skew-symmetric. A skew-symmetric matrix has zero diagonal and is determined by the 3 entries above the
    diagonal, so the space has dimension 3, equal to $\dim SO(3)$; and every skew $X$ arises, from $A(t) = e^{tX}$. So the
    tangent space is all of it.

??? question "5. In the hyperbolic half-plane $ds^2 = (dx^2 + dy^2)/y^2$, find the length of the vertical segment from $(0, 1)$ to $(0, e^3)$ and of the horizontal segment from $(0, 1)$ to $(3, 1)$."

    Vertical: $\int_1^{e^3} dy/y = 3$. Horizontal: $\int_0^3 dx/1 = 3$. Both are 3, but the vertical one is a geodesic and so
    the shortest path between its ends; the horizontal one is not. The geodesic from $(0,1)$ to $(3,1)$ is the arc of the
    semicircle centred at $(1.5, 0)$, and its length is $2\,\mathrm{arsinh}(1.5) \approx 2.39 < 3$ (using the distance formula
    $\cosh d = 1 + |\Delta|^2/(2y_1y_2) = 1 + 9/2$).

??? question "6. Compute the Christoffel symbols of the round sphere $ds^2 = d\varphi^2 + \sin^2\varphi\, d\theta^2$ and check that the equator is a geodesic."

    $g_{\varphi\varphi} = 1$, $g_{\theta\theta} = \sin^2\varphi$. Nonzero symbols: $\Gamma^\varphi_{\theta\theta} = -\tfrac12 \partial_\varphi(\sin^2\varphi) = -\sin\varphi\cos\varphi$
    and $\Gamma^\theta_{\varphi\theta} = \Gamma^\theta_{\theta\varphi} = \tfrac12 \cdot \dfrac{2\sin\varphi\cos\varphi}{\sin^2\varphi} = \cot\varphi$.
    Equations: $\ddot\varphi - \sin\varphi\cos\varphi\,\dot\theta^2 = 0$, $\ddot\theta + 2\cot\varphi\,\dot\varphi\dot\theta = 0$. The equator $\varphi = \pi/2$,
    $\theta = t$: $\ddot\varphi = 0$ and $\sin\varphi\cos\varphi = 0$, and $\ddot\theta = 0$, $\dot\varphi = 0$. Both hold.

??? question "7. A vector is parallel-transported around the circle of latitude $60°$ N on the unit sphere. By what angle is it rotated when it returns?"

    By the local Gauss–Bonnet theorem, the rotation equals the total curvature enclosed. The polar cap above $60°$ N has
    $\varphi$ from 0 to $30° = \pi/6$, area $2\pi(1 - \cos\tfrac{\pi}{6}) = 2\pi(1 - \tfrac{\sqrt3}{2}) \approx 0.842$ radians, about $48.2°$.
    (This is the rotation of a Foucault pendulum's plane in a day at that latitude: $360° \times \sin 60°$ relative to the
    ground, which is $360° - 48.2°$; the two answers describe the same motion seen in different frames.)

??? question "8. Check the scalar-curvature volume formula on a sphere of radius $R$: what does it predict for the area of a geodesic disc of radius $r$, and what is the exact answer?"

    $K = 1/R^2$, $S = 2/R^2$, $n = 2$: predicted area $\pi r^2(1 - r^2/(12R^2) + \cdots)$. Exact: the cap of angular radius $r/R$ has
    area $2\pi R^2(1 - \cos(r/R)) = 2\pi R^2\bigl(\tfrac{r^2}{2R^2} - \tfrac{r^4}{24R^4} + \cdots\bigr) = \pi r^2 - \tfrac{\pi r^4}{12R^2} + \cdots$. They agree.

??? question "9. Use the formula $6\pi GM/(c^2a(1 - e^2))$ to compute the relativistic perihelion advance of the Earth per century ($a = 1.496 \times 10^{11}$ m, $e = 0.0167$)."

    Per orbit: $6\pi \times 1.327 \times 10^{20}/\bigl((2.998 \times 10^8)^2 \times 1.496 \times 10^{11} \times (1 - 0.0167^2)\bigr) \approx 1.86 \times 10^{-7}$ rad.
    The Earth makes 100 orbits per century: $1.86 \times 10^{-5}$ rad, which is $1.86 \times 10^{-5} \times 206265 \approx 3.8''$ per century.

??? question "10. A GPS receiver uses signals whose clocks are off by 38 microseconds. Roughly how large a range error is that?"

    Light travels $3.0 \times 10^8 \times 38 \times 10^{-6} \approx 11{,}400$ m, about 11 km. That is why the correction is built into the
    satellites' clocks.

??? question "11. A closed orientable surface of genus 3 is given a metric of constant curvature $-1$. What is its area? What if the curvature is $-1/4$?"

    $\chi = 2 - 6 = -4$, so $\iint K\, dA = -8\pi$. With $K = -1$, the area is $8\pi = 4\pi(3 - 1)$. With $K = -1/4$, the area is
    $8\pi \times 4 = 32\pi$.

??? question "12. A regular hyperbolic $n$-gon has all angles equal to $\theta$. For a genus-2 surface built from an octagon, $\theta = \pi/4$. Could you build a genus-2 surface from a regular hyperbolic 12-gon whose sides are glued so that all corners become one point? What angle would it need?"

    All 12 corners meet at one point, so $12\theta = 2\pi$ and $\theta = \pi/6$. Its area would be $(12 - 2)\pi - 12 \cdot \pi/6 = 10\pi - 2\pi = 8\pi$.
    But a genus-2 surface with $K = -1$ has area $4\pi$, so this is impossible: with one vertex, a $4g$-gon gives genus $g$, and
    a 12-gon gives genus 3 (area $8\pi = 4\pi(3 - 1)$, consistent with question 11).

## What you learned

- A manifold looks locally like $\mathbb{R}^n$; charts give coordinates, and smooth transition maps let calculus work everywhere.
- Tangent vectors are velocities of curves; the tangent space at a point is an $n$-dimensional vector space.
- A Riemannian metric is an inner product on each tangent space; it gives lengths, angles, volumes, distance, and geodesics
  through the Christoffel symbols.
- Curvature is measured by the rotation of vectors carried around small loops; the Riemann tensor, sectional, Ricci and
  scalar curvature record it in decreasing detail, and curvature bounds control global shape.
- In general relativity spacetime is a Lorentzian manifold curved by matter; Mercury's 43 arcseconds per century, the
  bending of light and GPS clock corrections are measured consequences.
- Uniformization: every closed surface has a constant curvature metric, spherical only for the sphere, flat only for the
  torus, hyperbolic for every other surface.

**Next:** [Chapter 21](21-Where-Geometry-Goes.md), where geometry goes: Klein's view of geometry as symmetry, Thurston and
Perelman in three dimensions, algebraic and computational geometry, and problems nobody has solved.

## Further reading

- J. M. Lee, *Introduction to Smooth Manifolds*, 2nd edition, 2013, and *Introduction to Riemannian Manifolds*, 2nd edition, 2018.
  The standard graduate texts.
- M. P. do Carmo, *Riemannian Geometry*, 1992.
- M. Spivak, *A Comprehensive Introduction to Differential Geometry*, 5 volumes, 3rd edition, 1999. Volume 2 contains a
  translation of Riemann's lecture with commentary.
- B. Riemann, "On the hypotheses which lie at the foundations of geometry" (1854, published 1868), translated by W. K. Clifford
  in *Nature*, 1873.
- S. Carroll, *Spacetime and Geometry: An Introduction to General Relativity*, 2004.
- C. W. Misner, K. S. Thorne and J. A. Wheeler, *Gravitation*, 1973.
- N. Ashby, "Relativity in the Global Positioning System", *Living Reviews in Relativity* 6, 2003. The GPS corrections in detail.
- C. M. Will, "The Confrontation between General Relativity and Experiment", *Living Reviews in Relativity* 17, 2014.
- S. Donaldson, *Riemann Surfaces*, 2011. Includes a proof of uniformization.
- On this site: the U of T guides [MAT257Y1 Unit 6: The Inverse Function Theorem](../../uoft/MAT257Y1/unit06.md),
  [MAT257Y1 Unit 13: Manifolds in R^n](../../uoft/MAT257Y1/unit13.md),
  [MAT257Y1 Unit 11: Tensors and Differential Forms](../../uoft/MAT257Y1/unit11.md) and
  [PHY132H1 Unit 10: Special Relativity](../../uoft/PHY132H1/unit10.md);
  [Chapter 17](17-Hyperbolic-Geometry.md) for the hyperbolic plane; [Algebra, Chapter 22](../algebra/22-Where-Algebra-Goes.md)
  for Lie groups such as $SO(3)$.
