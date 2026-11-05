# 17. Applications of algebraic topology

*Chapters 12 to 16 built a machine: homotopy, the fundamental group, covering spaces and homology. A machine earns its
keep by what it does. This chapter turns it on real questions. Must a stirred cup of coffee have a point that ends where
it started? Can a planet have wind blowing everywhere at once? How many fixed points must a map of a torus have? Can one
straight cut halve the bread, the ham and the cheese of a sandwich at the same time? And how can a computer see that a
cloud of ten thousand data points "has a hole"? Each answer is a theorem, and each proof is the same trick: compute an
algebraic invariant two ways and get two different answers, unless the thing you wanted to rule out does not exist.*

!!! abstract "In this chapter"
    **You will learn:**

    - Brouwer's fixed point theorem in every dimension, proved from the homology of spheres
    - the hairy ball theorem: which spheres can be combed flat, and what it says about wind on a planet
    - the degree of a map between spheres, how to compute it, and what it says about fixed and antipodal points
    - the Lefschetz number, the Lefschetz fixed point theorem and the Hopf trace formula behind it
    - the Borsuk-Ulam theorem in all dimensions and the ham sandwich theorem it implies
    - persistent homology: how topology is used to find shape in data, and what it can and cannot tell you

    **You need:** [Chapter 12](12-Homotopy.md) (homotopy, retractions), [Chapter 14](14-The-Circle-and-Covering-Spaces.md)
    (the winding number, Brouwer and Borsuk-Ulam in 2D), and [Chapter 16](16-Homology.md) (simplicial homology, Betti
    numbers, the Euler characteristic). A little linear algebra (trace, determinant) for 17.4:
    [Linear algebra, chapter 8](../linear-algebra/08-Determinants.md).

    **Levels:** 17.1 to 17.3 are advanced (they use homology as a tool); 17.4 and 17.5 are advanced to expert;
    17.6 is intermediate in its ideas and can be read after Chapter 16 alone.

## 17.1 Brouwer's fixed point theorem in every dimension

*Level: advanced.* Take a paper map of a country and drop it, crumpled but not torn, somewhere inside that country.
Is there a point of the map lying exactly above the place it shows? Stir a cup of coffee gently and let it settle. Is
there a particle of coffee that ends where it began? Both questions have the same shape. A space $D$ (the country, the
coffee) and a continuous map $f: D \to D$ (where each point ends up). A **fixed point** is a point $x$ with $f(x) = x$.

For a closed interval this is the intermediate value theorem. If $f: [0,1] \to [0,1]$ is continuous, the function
$g(x) = f(x) - x$ has $g(0) = f(0) \ge 0$ and $g(1) = f(1) - 1 \le 0$, so it vanishes somewhere. In
[Chapter 14](14-The-Circle-and-Covering-Spaces.md) you proved the 2-dimensional case with the fundamental group of the
circle. In three dimensions and beyond, the fundamental group is useless: every sphere $S^n$ with $n \ge 2$ is simply
connected, so loops cannot see the difference between the ball and its boundary. Homology can.

**The closed ball and its boundary.** The closed $n$-ball is $D^n = \{x \in \mathbb{R}^n : |x| \le 1\}$, and its
boundary is the sphere $S^{n-1} = \{x : |x| = 1\}$. A **retraction** of $D^n$ onto $S^{n-1}$ is a continuous map
$r: D^n \to S^{n-1}$ with $r(x) = x$ for every $x$ on the sphere ([Chapter 12](12-Homotopy.md)). Brouwer's theorem
reduces to one fact: there is no such map. A drum skin cannot be pulled onto its rim without tearing.

### The two homology groups we need

We use three facts about homology from [Chapter 16](16-Homology.md), and we should be honest about where they come
from.

1. **Functoriality.** A continuous map $f: X \to Y$ between triangulable spaces induces homomorphisms
   $f_*: H_k(X) \to H_k(Y)$ for every $k$, with $(g \circ f)_* = g_* \circ f_*$ and $(\mathrm{id}_X)_* = \mathrm{id}$.
2. **Homotopy invariance.** If $f \simeq g$ then $f_* = g_*$.
3. **Topological invariance.** Homeomorphic spaces have isomorphic homology, so we may compute with any triangulation.

For simplicial maps (maps sending simplices linearly onto simplices) the first fact is a direct check. For arbitrary
continuous maps it needs the **simplicial approximation theorem** (every continuous map between compact polyhedra is
homotopic to a simplicial map after subdividing enough) or else singular homology, which defines $H_k$ for every space
at once. Both routes are long but not deep; they fill a section of Hatcher's or Munkres's book (see Further reading).
We take the three facts as given.

Triangulate $D^n$ as one $n$-simplex $\sigma = [v_0, v_1, \dots, v_n]$ with all its faces, and $S^{n-1}$ as the
boundary $\partial \Delta^n$: all faces of $\sigma$ except $\sigma$ itself. Write $F_i$ for the $(n-1)$-face that leaves
out $v_i$, with its vertices in increasing order. Recall the boundary formula

$$
\partial \sigma = \sum_{i=0}^{n} (-1)^i F_i .
$$

**Proposition 17.1.** For $n \ge 2$, $H_{n-1}(S^{n-1}) \cong \mathbb{Z}$, generated by the cycle $\partial\sigma$, and
$H_{n-1}(D^n) = 0$.

*Proof.* Let $c = \sum_i a_i F_i$ be an $(n-1)$-chain of $\partial \Delta^n$ (integers $a_i$), and suppose
$\partial c = 0$. Pick $i < j$. The $(n-2)$-face $G$ that leaves out both $v_i$ and $v_j$ lies in exactly two of the
$F$'s: in $F_i$ and in $F_j$. In $F_i$ the vertex $v_j$ sits in position $j-1$ (because $v_i$ is missing in front of
it), so $G$ appears in $\partial F_i$ with sign $(-1)^{j-1}$. In $F_j$ the vertex $v_i$ sits in position $i$, so $G$
appears in $\partial F_j$ with sign $(-1)^i$. The coefficient of $G$ in $\partial c$ is therefore

$$
a_i(-1)^{j-1} + a_j(-1)^{i} = 0, \quad\text{that is}\quad (-1)^i a_i = (-1)^j a_j .
$$

So the numbers $b_i = (-1)^i a_i$ are all equal, say to $k$, and $c = k \sum_i (-1)^i F_i = k\, \partial\sigma$. Every
$(n-1)$-cycle is a multiple of $\partial \sigma$, and $\partial\sigma$ is itself a cycle because
$\partial \partial = 0$. In $\partial \Delta^n$ there are no $n$-simplices, so there are no $(n-1)$-boundaries, and
$H_{n-1}(S^{n-1}) = Z_{n-1} \cong \mathbb{Z}$. In $\Delta^n$ the same cycles exist but now $\partial\sigma$ is a
boundary, so every $(n-1)$-cycle is a boundary and $H_{n-1}(D^n) = 0$. (We needed $n \ge 2$ so that $n - 1 \ge 1$; in
degree 0 the formula for $H_0$ is different.) $\square$

Check with $n = 2$: the boundary of a triangle is a circle, and you computed $H_1(S^1) = \mathbb{Z}$ in Chapter 16 by
exactly this argument with three edges.

### No retraction, and Brouwer

**Theorem 17.2 (no retraction).** For $n \ge 1$ there is no retraction $r: D^n \to S^{n-1}$.

*Proof.* For $n = 1$: $D^1 = [-1, 1]$ is connected and $S^0 = \{-1, 1\}$ is not, and a continuous image of a connected
space is connected ([Chapter 7](07-Connectedness.md)). For $n \ge 2$, let $i: S^{n-1} \to D^n$ be the inclusion. A
retraction satisfies $r \circ i = \mathrm{id}_{S^{n-1}}$. Apply $H_{n-1}$:

$$
\mathbb{Z} = H_{n-1}(S^{n-1}) \xrightarrow{\;i_*\;} H_{n-1}(D^n) = 0 \xrightarrow{\;r_*\;} H_{n-1}(S^{n-1}) = \mathbb{Z},
$$

and the composite must be $(\mathrm{id})_* = \mathrm{id}_{\mathbb{Z}}$. But it factors through the zero group, so it is
zero. The identity of $\mathbb{Z}$ is not zero. $\square$

**Theorem 17.3 (Brouwer's fixed point theorem).** Every continuous map $f: D^n \to D^n$ has a fixed point.

*Proof.* Suppose $f(x) \neq x$ for every $x$. Then for each $x$ there is a well-defined ray that starts at $f(x)$ and
passes through $x$. Follow it until it hits the boundary sphere, and call that point $r(x)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 260" role="img" aria-label="A disc with a point f of x inside it and a point x. The ray from f of x through x continues until it meets the boundary circle at r of x. If f had no fixed point, this rule would retract the disc onto its boundary circle">
  <circle cx="150" cy="130" r="100" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="160" x2="224.4" y2="63.2" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="110" cy="160" r="4.5" fill="currentColor"/>
  <circle cx="175" cy="105" r="4.5" fill="currentColor"/>
  <circle cx="224.4" cy="63.2" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="96" y="182" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">f(x)</text>
  <text x="186" y="122" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">x</text>
  <text x="246" y="54" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">r(x)</text>
  <text x="95" y="95" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">D</text>
  <text x="150" y="252" text-anchor="middle" font-size="12" fill="currentColor">boundary sphere</text>
</svg>
</div>

If $x$ is on the sphere, the ray leaves the ball at $x$ itself, so $r(x) = x$. The map $r$ is continuous: with
$u = x - f(x) \ne 0$, the point is $r(x) = x + s\,u$ where $s \ge 0$ solves $|x + s u|^2 = 1$, which gives

$$
s(x) = \frac{-\,x \cdot u + \sqrt{(x\cdot u)^2 + |u|^2\,(1 - |x|^2)}}{|u|^2},
$$

a formula built from continuous functions with a nonzero denominator. So $r$ is a retraction of $D^n$ onto
$S^{n-1}$, which Theorem 17.2 forbids. $\square$

**Worked example 1.** Let $f(x, y) = \left(\tfrac{y}{2} + 0.3,\; -\tfrac{x}{2}\right)$ on the unit disc.

- Step 1, it maps the disc into itself: $|f(x,y)| \le \tfrac12|(y, -x)| + 0.3 \le 0.5 + 0.3 = 0.8 \le 1$.
- Step 2, solve $f(x,y) = (x,y)$: from the second coordinate $y = -x/2$; then $x = -x/4 + 0.3$, so $x = 0.24$ and
  $y = -0.12$.
- Check: $f(0.24, -0.12) = (-0.06 + 0.3,\; -0.12) = (0.24, -0.12)$. Brouwer promised a fixed point; here it is.

**Every hypothesis matters.** Brouwer's theorem fails if you drop any one of its conditions.

- *Not closed:* on the open interval $(0,1)$, the map $x \mapsto x/2$ has no fixed point (the would-be fixed point 0
  has been removed).
- *Not bounded:* on the plane, the translation $x \mapsto x + (1, 0)$ has no fixed point.
- *A hole:* on the annulus $1 \le |z| \le 2$, a rotation by any angle that is not a multiple of $2\pi$ moves every
  point. The annulus does retract onto a circle, so the proof above has nothing to grip.
- *Not continuous:* on $[0,1]$, the map sending $x < \tfrac12$ to $1$ and $x \ge \tfrac12$ to $0$ has no fixed point.

**An application: positive matrices.** Let $A$ be an $n \times n$ matrix with every entry positive. The
**standard simplex** $\Delta = \{x \in \mathbb{R}^n : x_i \ge 0, \sum x_i = 1\}$ is homeomorphic to $D^{n-1}$. For
$x \in \Delta$ the vector $Ax$ has positive entries, so

$$
g(x) = \frac{Ax}{\sum_i (Ax)_i}
$$

is a continuous map $\Delta \to \Delta$. Brouwer gives $x$ with $g(x) = x$, that is $Ax = \lambda x$ with
$\lambda = \sum_i (Ax)_i > 0$. **Every positive matrix has an eigenvector with nonnegative entries and a positive
eigenvalue**: the existence half of the Perron-Frobenius theorem, which underlies Markov chains and the ranking of web
pages. For $A = \begin{pmatrix} 1 & 2 \\ 3 & 1 \end{pmatrix}$ the eigenvalues are $1 \pm \sqrt6$, and the eigenvector
for $1 + \sqrt 6$ is $(2, \sqrt6)$. Check: $A(2, \sqrt6) = (2 + 2\sqrt6,\; 6 + \sqrt6) = (1 + \sqrt6)(2, \sqrt6)$.

The same theorem gave John Nash his equilibria: his 1951 paper "Non-cooperative games" proved that every finite game
has a mixed-strategy equilibrium by applying Brouwer's theorem to a cleverly built map on the set of strategy profiles.

**History.** L. E. J. Brouwer proved the theorem for all dimensions in papers published in 1911 and 1912, as part of
the work in which he also proved that $\mathbb{R}^m$ and $\mathbb{R}^n$ are not homeomorphic for $m \ne n$
([Chapter 11](11-Manifolds.md)). His proofs used the degree of a map, which we meet in 17.3. Brouwer later turned
against non-constructive mathematics, and his own fixed point theorem is a famous example: the proof tells you a fixed
point exists, but gives no way to find it.

## 17.2 The hairy ball theorem

*Level: advanced.* Imagine a tennis ball covered in hair, and try to comb all the hair flat, with no parting and no
crown where the hair stands up. You will fail. On a doughnut you can succeed: comb all the hair around the hole. What is
the difference?

A **tangent vector field** on the sphere $S^n \subset \mathbb{R}^{n+1}$ is a continuous map
$v: S^n \to \mathbb{R}^{n+1}$ with $v(x) \cdot x = 0$ for every $x$: at each point, an arrow lying in the tangent
plane. Combing the hair flat means finding a tangent field that is **nowhere zero**.

**Theorem 17.4 (hairy ball theorem).** $S^n$ has a continuous nowhere-zero tangent vector field if and only if $n$ is
odd.

*The odd case, by construction.* For $n = 2m - 1$ write a point as $(x_1, y_1, x_2, y_2, \dots, x_m, y_m)$ and set

$$
v(x_1, y_1, \dots, x_m, y_m) = (-y_1, x_1, -y_2, x_2, \dots, -y_m, x_m).
$$

Then $v(p) \cdot p = \sum_k (-y_k x_k + x_k y_k) = 0$, and $|v(p)| = |p| = 1$, so $v$ is tangent and never zero. On the
circle $S^1$ this is the field of arrows going counterclockwise around. On $S^3$ it is the field $(-y_1, x_1, -y_2,
x_2)$, the velocity of the rotation $(z, w) \mapsto (e^{it}z, e^{it}w)$ in complex coordinates.

*The even case, the idea.* Suppose $v$ is a nowhere-zero tangent field on $S^n$. Replace it by $v/|v|$, so every arrow
has length 1. Now slide each point $x$ along the great circle in the direction $v(x)$:

$$
F(x, t) = \cos(\pi t)\, x + \sin(\pi t)\, v(x), \qquad 0 \le t \le 1 .
$$

Because $x \perp v(x)$ and both have length 1, $|F(x,t)|^2 = \cos^2 + \sin^2 = 1$, so $F$ stays on the sphere. At
$t = 0$ it is the identity; at $t = 1$ it is the **antipodal map** $a(x) = -x$. So the identity is homotopic to the
antipodal map. In 17.3 we prove that homotopic maps have the same **degree**, that the identity has degree 1, and that
the antipodal map of $S^n$ has degree $(-1)^{n+1}$. For $n$ even, $(-1)^{n+1} = -1 \ne 1$: contradiction. $\square$

For $S^2$ the theorem goes back to Poincaré's work on vector fields in the 1880s; Brouwer proved the general even case
in 1912.

**Wind on a planet.** Treat the horizontal wind just above a planet's surface at one instant as a tangent vector field
on a sphere. Mars is a good example: it is, topologically, a sphere (genus 0, Euler characteristic 2). If the wind
field were continuous, the hairy ball theorem would say: **at every instant there is at least one point on the surface
where the horizontal wind is zero**, a calm spot, perhaps in the eye of a storm or where two flows meet head on. This is
an idealisation and should be read as one. Real wind is a three-dimensional flow with vertical motion, it is turbulent
and gusty at small scales, and "continuous" is a modelling assumption. The theorem tells you something about any
continuous model of the wind, not about the reading on a particular weather station. It does not tell you *where* the
calm spot is, and in a real atmosphere there are usually many. On a doughnut-shaped planet, by contrast, a wind could
blow everywhere at once.

The torus result is no accident. The correct generalisation, the **Poincaré-Hopf theorem**, says: if a tangent field
on a closed surface (or closed manifold) has finitely many zeros, then the sum of their **indices** equals the Euler
characteristic. The index of a zero is the winding number ([Chapter 14](14-The-Circle-and-Covering-Spaces.md)) of the
field around a small circle about it: $+1$ for a source, a sink or a whirlpool, $-1$ for a saddle. On a sphere,
$\chi = 2$, so the indices must add to 2: for example, one source and one sink (wind from the north pole to the south
pole), or two whirlpools. On a torus, $\chi = 0$, and a field with no zeros at all is allowed. We prove a version of
this in 17.4.

<figure class="play" data-play="field" data-mode="spin"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A vector field that spins round a point must stop somewhere, at its centre: on a sphere every field has such a point (the hairy ball theorem).</figcaption></figure>

## 17.3 The degree of a map

*Level: advanced.* On the circle, the winding number counted how many times a loop wraps around
([Chapter 14](14-The-Circle-and-Covering-Spaces.md)). The degree is the same idea for spheres of any dimension.

**Definition.** Let $n \ge 1$ and $f: S^n \to S^n$ be continuous. Then $f_*: H_n(S^n) \to H_n(S^n)$ is a homomorphism
$\mathbb{Z} \to \mathbb{Z}$, so it is multiplication by a unique integer. That integer is the **degree** of $f$,
written $\deg f$. (Every homomorphism $\mathbb{Z} \to \mathbb{Z}$ is $m \mapsto dm$ for $d$ the image of 1.)

**Theorem 17.5 (properties of degree).**

1. $\deg(\mathrm{id}) = 1$.
2. $\deg(g \circ f) = \deg g \cdot \deg f$.
3. If $f \simeq g$ then $\deg f = \deg g$.
4. If $f$ is not onto, then $\deg f = 0$.
5. A homeomorphism has degree $\pm 1$.
6. A reflection $(x_0, x_1, \dots, x_n) \mapsto (-x_0, x_1, \dots, x_n)$ has degree $-1$.
7. The antipodal map $a(x) = -x$ has degree $(-1)^{n+1}$.

*Proof.* (1) and (2) are functoriality; (3) is homotopy invariance. (4): if $p$ is a point not in the image, $f$ factors
as $S^n \to S^n \setminus \{p\} \to S^n$. The middle space is homeomorphic to $\mathbb{R}^n$ by stereographic projection,
which is contractible, so its $H_n$ is zero and $f_*$ factors through 0. (5): if $h$ has inverse $k$, then
$\deg h \cdot \deg k = \deg(\mathrm{id}) = 1$, and the only integers with product 1 are $\pm1$.

(6): Use the triangulation $\partial\Delta^{n+1}$ with vertices $v_0, \dots, v_{n+1}$, placed in $\mathbb{R}^{n+1}$
symmetrically so that $v_0$ and $v_1$ are mirror images in the hyperplane $x_0 = 0$ and all other vertices lie in that
hyperplane. Radial projection makes $\partial\Delta^{n+1}$ homeomorphic to $S^n$, and the reflection becomes the
simplicial map $s$ that swaps $v_0$ and $v_1$ and fixes the rest. The generator of $H_n$ is $\partial[v_0, \dots,
v_{n+1}]$ (Proposition 17.1 with $n+1$ in place of $n$). Swapping two vertices of an oriented simplex reverses its
orientation, $[v_1, v_0, \dots] = -[v_0, v_1, \dots]$, so $s$ sends the generator to its negative and $\deg s = -1$.
Any two reflections in hyperplanes through the origin are conjugate by a rotation, and a rotation is homotopic to the
identity (rotate back gradually; the rotation group of $\mathbb{R}^{n+1}$ is path connected), so every such reflection
has degree $-1$.

(7): The antipodal map is the composition of the $n+1$ reflections in the coordinate hyperplanes, so by (2) its degree
is $(-1)^{n+1}$. $\square$

**Computing degree by counting.** For smooth maps there is a much more practical formula. Pick a point $y$ that is a
**regular value**: at every $x$ with $f(x) = y$ the derivative of $f$ is invertible. (Sard's theorem says almost every
$y$ is regular.) Then there are finitely many such $x$, and

$$
\deg f = \sum_{x \in f^{-1}(y)} \operatorname{sign} \det Df(x),
$$

where $\operatorname{sign} \det Df(x)$ is $+1$ if $f$ preserves orientation near $x$ and $-1$ if it reverses it. The
proof is in Milnor's *Topology from the Differentiable Viewpoint*, where degree is defined this way and shown to be a
homotopy invariant; that it agrees with the homology definition is proved in Hatcher, section 2.2. Think of it as: count
the sheets of $f$ lying over $y$, with a sign for each sheet that is turned inside out.

**Worked example 2.** Think of $S^1$ as the unit complex numbers.

- $f(z) = z^k$ with $k \ge 1$: the point $y = 1$ has the $k$ preimages $e^{2\pi i j/k}$, and near each of them $f$
  stretches the circle counterclockwise (angle $\theta \mapsto k\theta$). So $\deg f = k$. This is the winding number
  of Chapter 14 again: on $S^1$ the degree and the winding number agree.
- $f(z) = \bar z$: one preimage of 1 (namely 1), and $\theta \mapsto -\theta$ reverses direction. $\deg f = -1$.
- $f(z) = z^{-k} = \bar z^k$: degree $-k$.
- On $S^2$, viewed as the complex plane plus a point at infinity ([Chapter 8](08-Compactness.md)), a polynomial
  $p(z)$ of degree $k$ with $p(\infty) = \infty$ has degree $k$ as a map: a general point has $k$ preimages, and a
  complex-differentiable map always preserves orientation, because its derivative, as a real $2 \times 2$ matrix, has
  determinant $|p'(z)|^2 > 0$.

**Theorem 17.6 (Hopf, 1927).** Two maps $S^n \to S^n$ are homotopic if and only if they have the same degree, and every
integer is the degree of some map.

The second half is easy (on $S^1$, $z^k$; in general, a "suspension" of $z^k$, see [Chapter 6](06-Building-New-Spaces.md)).
The first half is harder and we do not prove it; see Milnor's book. It says the degree is a *complete* invariant: in the
language of [Chapter 20](20-Where-Topology-Goes.md), $\pi_n(S^n) \cong \mathbb{Z}$.

### Degree, fixed points and antipodes

**Theorem 17.7.** Let $f: S^n \to S^n$ be continuous.

1. If $f$ has no fixed point, then $\deg f = (-1)^{n+1}$.
2. If $f(x) \ne -x$ for every $x$, then $\deg f = 1$.

*Proof.* (1) If $f(x) \ne x$ for all $x$, the segment from $f(x)$ to $-x$ does not pass through the origin: a point
$(1-t)f(x) + t(-x)$ is zero only if $(1-t)f(x) = t x$, and taking lengths, $1 - t = t$, so $t = \tfrac12$ and
$f(x) = x$, which we excluded. So

$$
F(x,t) = \frac{(1-t)f(x) - t x}{\big|(1-t)f(x) - t x\big|}
$$

is a homotopy on the sphere from $f$ to the antipodal map, and $\deg f = \deg a = (-1)^{n+1}$. (2) Same argument with
the segment from $f(x)$ to $x$, which avoids the origin unless $f(x) = -x$; it is a homotopy from $f$ to the identity.
$\square$

**Corollary.** On an even-dimensional sphere, every continuous map $f: S^n \to S^n$ either has a fixed point or sends
some point to its antipode. For if neither happened, (1) would give degree $-1$ and (2) degree $+1$.

This also gives the hairy ball theorem again: a nowhere-zero tangent field $v$ makes $f(x) = v(x)/|v(x)|$ a map with
$f(x) \perp x$, so $f(x) \ne \pm x$ for every $x$, which is impossible for $n$ even.

### Try it in Python

The degree of a map of the circle is the total turning of $f(z)$ as $z$ goes once around, divided by $2\pi$. Add up the
small changes in angle:

```python
import cmath, math

def degree(f, steps=10000):
    total, prev = 0.0, f(1)
    for k in range(1, steps + 1):
        w = f(cmath.exp(2j * math.pi * k / steps))
        total += cmath.phase(w / prev)   # the small change in angle
        prev = w
    return round(total / (2 * math.pi))

print(degree(lambda z: z**3 + 2 * z.conjugate()))   # -1
print(degree(lambda z: 2 * z**3 + z.conjugate()))   # 3
```

The first map is dominated by $2\bar z$ (length 2 against length 1), so it behaves like $\bar z$; the second is
dominated by $2z^3$. That is a topological version of Rouché's theorem: if $|g| > |h|$ on the circle, then $g + h$ is
homotopic to $g$ through maps that never vanish (use $g + sh$, $0 \le s \le 1$), so they wind the same number of times.

## 17.4 The Lefschetz fixed point theorem

*Level: advanced to expert.* Brouwer handles the ball. What about other spaces? The circle has fixed-point-free maps
(rotations), and so does the torus. Yet some maps of a torus must have fixed points. Solomon Lefschetz found a single
number, computed from homology, that decides when a fixed point is forced.

**Definition.** Let $X$ be a finite simplicial complex (or a space homeomorphic to one) and $f: X \to X$ continuous.
Use homology with rational coefficients, $H_k(X; \mathbb{Q})$: the same chains, cycles and boundaries, but with
coefficients in $\mathbb{Q}$, so each $H_k$ is a finite-dimensional vector space of dimension $b_k$, the $k$-th Betti
number. The map $f_*$ on $H_k(X; \mathbb{Q})$ is a linear map with a trace. The **Lefschetz number** is

$$
L(f) = \sum_{k \ge 0} (-1)^k \operatorname{tr}\big(f_* : H_k(X;\mathbb{Q}) \to H_k(X;\mathbb{Q})\big).
$$

**Theorem 17.8 (Lefschetz fixed point theorem).** If $L(f) \ne 0$, then $f$ has a fixed point.

Homotopic maps induce the same $f_*$, so $L(f)$ depends only on the homotopy class of $f$, and the theorem gives a fixed
point for *every* map in that class at once.

### Examples first

**Contractible spaces.** If $X$ is contractible (the ball, a tree, a cone), then $H_0 = \mathbb{Q}$, all other $H_k$
vanish, and any $f$ acts on $H_0$ as the identity (for a path-connected space $H_0$ is generated by the class of any
point, and $f$ sends a point to a point). So $L(f) = 1 \ne 0$: every self-map of a contractible polyhedron has a fixed
point. This contains Brouwer's theorem.

**Spheres.** $H_0(S^n) = \mathbb{Q}$ with trace 1 and $H_n(S^n) = \mathbb{Q}$ with trace $\deg f$, so

$$
L(f) = 1 + (-1)^n \deg f .
$$

A map with $L(f) = 0$ has $\deg f = (-1)^{n+1}$, which matches Theorem 17.7(1) exactly. On $S^2$, every map of degree
other than $-1$ has a fixed point.

**The identity.** The trace of the identity on $H_k$ is $b_k$, so $L(\mathrm{id}) = \sum (-1)^k b_k = \chi(X)$,
the Euler characteristic ([Chapter 16](16-Homology.md)). If $\chi(X) \ne 0$, every map homotopic to the identity has a
fixed point.

That gives the hairy ball theorem for every closed manifold: if $M$ has a nowhere-zero tangent field, then flowing a
short time $\varepsilon$ along it gives a map homotopic to the identity (flow for times $t\varepsilon$, $0 \le t \le 1$)
with no fixed point (for small $\varepsilon$, every point moves; this needs a little care, but no new idea). So
$\chi(M) = L(\mathrm{id}) = 0$. A closed surface can be combed only if $\chi = 0$: only the torus and the Klein bottle.

**The torus.** $T^2 = \mathbb{R}^2/\mathbb{Z}^2$. An integer matrix $A$ maps $\mathbb{Z}^2$ into itself, so it defines a
map $f_A: T^2 \to T^2$, $x \mapsto Ax \bmod 1$. Its action on $H_0$ is 1, on $H_1 \cong \mathbb{Q}^2$ it is the matrix
$A$ itself (the two basic loops go to $A$ times themselves), and on $H_2 \cong \mathbb{Q}$ it is multiplication by
$\det A$ (the degree of $f_A$, by the counting formula). So

$$
L(f_A) = 1 - \operatorname{tr}A + \det A = \det(I - A),
$$

the last step being the identity $\det(I - A) = 1 - \operatorname{tr} A + \det A$ for $2\times2$ matrices.

**Worked example 3 (Arnold's cat map).** Take $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$.

- Step 1: $\det(I - A) = \det \begin{pmatrix} -1 & -1 \\ -1 & 0 \end{pmatrix} = 0 - 1 = -1$. So $L = -1 \ne 0$ and
  $f_A$ has a fixed point. (It is $(0,0)$, of course.)
- Step 2, fixed points of $f_A^2 = f_{A^2}$: here $A^2 = \begin{pmatrix} 5 & 3 \\ 3 & 2 \end{pmatrix}$ and
  $\det(I - A^2) = (1-5)(1-2) - 9 = -5$.
- Step 3, find them: $x$ is fixed when $(A^2 - I)x$ is an integer vector. Solving gives five points:
  $(0,0), (\tfrac15, \tfrac25), (\tfrac25, \tfrac45), (\tfrac35, \tfrac15), (\tfrac45, \tfrac35)$.
- Check one: $A^2(\tfrac15, \tfrac25) = (\tfrac{5 + 6}{5}, \tfrac{3 + 4}{5}) = (\tfrac{11}{5}, \tfrac75) \equiv
  (\tfrac15, \tfrac25) \pmod 1$.

For this map the number of fixed points of $f_A^n$ is exactly $|\det(I - A^n)|$: 1, 5, 16, 45, 121 for $n = 1, \dots,
5$. In general the Lefschetz number only *forces* fixed points; it counts them (with signs, called indices) when they are
isolated and nondegenerate.

### Why it works: the Hopf trace formula

The heart of the proof is a piece of pure linear algebra.

**Lemma 17.9 (Hopf trace formula).** Let $0 \to C_n \to C_{n-1} \to \dots \to C_0 \to 0$ be a chain complex of
finite-dimensional vector spaces over $\mathbb{Q}$ with boundary maps $\partial$, and let $\varphi_k: C_k \to C_k$ be
linear maps with $\partial \varphi_k = \varphi_{k-1} \partial$ (a **chain map**). Then

$$
\sum_k (-1)^k \operatorname{tr}(\varphi_k \text{ on } C_k) = \sum_k (-1)^k \operatorname{tr}(\varphi_* \text{ on } H_k).
$$

*Proof.* Write $Z_k = \ker \partial_k$ and $B_k = \operatorname{im} \partial_{k+1}$, so $B_k \subseteq Z_k \subseteq C_k$.
Because $\varphi$ commutes with $\partial$, it maps $Z_k$ into $Z_k$ and $B_k$ into $B_k$. A basic fact about traces: if
a linear map $\psi$ on $V$ preserves a subspace $W$, then $\operatorname{tr}_V \psi = \operatorname{tr}_W \psi +
\operatorname{tr}_{V/W} \psi$ (choose a basis of $W$ and extend it; the matrix is block upper triangular). Apply it
twice:

$$
\operatorname{tr}_{C_k}\varphi = \operatorname{tr}_{Z_k}\varphi + \operatorname{tr}_{C_k/Z_k}\varphi, \qquad
\operatorname{tr}_{Z_k}\varphi = \operatorname{tr}_{B_k}\varphi + \operatorname{tr}_{H_k}\varphi_* .
$$

The map $\partial_k$ induces an isomorphism $C_k / Z_k \cong B_{k-1}$ that commutes with $\varphi$, so
$\operatorname{tr}_{C_k/Z_k}\varphi = \operatorname{tr}_{B_{k-1}}\varphi$. Putting these together,

$$
\operatorname{tr}_{C_k}\varphi = \operatorname{tr}_{B_k}\varphi + \operatorname{tr}_{H_k}\varphi_* +
\operatorname{tr}_{B_{k-1}}\varphi .
$$

In the alternating sum over $k$, each $\operatorname{tr}_{B_k}$ appears once with sign $(-1)^k$ and once (from the
$k+1$ term) with sign $(-1)^{k+1}$, so all of them cancel. What is left is the formula. $\square$

With $\varphi = \mathrm{id}$, the trace on $C_k$ is the number of $k$-simplices, and the lemma says
$\sum (-1)^k (\#k\text{-simplices}) = \sum (-1)^k b_k$: the Euler characteristic theorem of Chapter 16, now as a
special case.

*Sketch of the proof of Theorem 17.8.* Suppose $f$ has no fixed point. $X$ is compact, so $|f(x) - x|$ (measured in some
embedding in $\mathbb{R}^N$) has a positive minimum $\delta$. Subdivide $X$ so finely that every simplex has diameter much
less than $\delta$, and replace $f$ by a homotopic simplicial approximation $g$ (after a further subdivision of the
domain) that stays within $\delta/2$ of $f$. Then $g$ moves every simplex off itself: the chain map $g_\#$ sends each
simplex $\sigma$ to a combination of simplices disjoint from $\sigma$, so every diagonal entry of its matrix is 0 and
every trace on the chain groups is 0. By the Hopf trace formula, $L(f) = L(g) = 0$. So $L(f) \ne 0$ forces a fixed point.
The details of the subdivision are in Hatcher, section 2.C. $\square$

**History.** Lefschetz proved his theorem for manifolds in the 1920s, and Heinz Hopf extended it to polyhedra soon
after, with the trace formula above.

## 17.5 Borsuk-Ulam and the ham sandwich

*Level: advanced to expert.* In [Chapter 14](14-The-Circle-and-Covering-Spaces.md) you proved that every continuous map
$f: S^2 \to \mathbb{R}^2$ sends some pair of antipodal points to the same value. Here is the full theorem.

**Theorem 17.10 (Borsuk-Ulam).** For every $n \ge 1$ and every continuous $f: S^n \to \mathbb{R}^n$, there is a point
$x$ with $f(x) = f(-x)$.

A map $g$ between spheres is **odd** if $g(-x) = -g(x)$. The theorem is equivalent to this statement:

**Theorem 17.10′.** There is no continuous odd map $S^n \to S^{n-1}$.

*Why they are equivalent.* If $f(x) \ne f(-x)$ for all $x$, then
$g(x) = \dfrac{f(x) - f(-x)}{|f(x) - f(-x)|}$ is a continuous odd map $S^n \to S^{n-1}$. Conversely an odd map
$g: S^n \to S^{n-1} \subset \mathbb{R}^n$ would have $g(x) = g(-x) = -g(x)$ at a Borsuk-Ulam point, so $g(x) = 0$,
impossible on the sphere.

*Proof idea.* The key lemma is: **an odd map $h: S^m \to S^m$ has odd degree.** Granting it, suppose
$g: S^n \to S^{n-1}$ is odd. Restrict it to the equator $S^{n-1} \subset S^n$: this restriction $h$ is an odd map
$S^{n-1} \to S^{n-1}$, so it has odd degree, in particular not 0. But $h$ extends to the upper hemisphere, which is a
disc $D^n$; a map from a sphere that extends over the disc bounded by it is null-homotopic (shrink along the radii of the
disc), so $\deg h = 0$. Contradiction. The lemma itself is proved with homology modulo 2 and the "transfer" for the
double cover $S^m \to \mathbb{RP}^m$; see Hatcher, section 2.B, or Matoušek's *Using the Borsuk-Ulam Theorem*, which
gives several proofs. For $n = 2$, Chapter 14's proof with covering spaces is complete. $\square$

**Consequences.**

- *No sphere fits in a lower-dimensional space.* $S^n$ is not homeomorphic to any subset of $\mathbb{R}^n$: an
  injective $f$ would contradict $f(x) = f(-x)$. In particular a sphere cannot be flattened onto a map without tearing
  or overlapping, which is one topological reason no flat map of the Earth or of Mars shows the whole surface faithfully
  (see [Geometry, chapter 16](../geometry/16-Spherical-Geometry.md) for the metric reasons).
- *Temperature and pressure.* At any instant, idealising temperature and pressure as continuous functions on a
  spherical planet, there are two antipodal points with the same temperature *and* the same pressure. (The map is
  $x \mapsto (T(x), P(x)) \in \mathbb{R}^2$.) As in 17.2, this is a statement about a continuous model, not a
  forecast.
- *Lyusternik-Schnirelmann.* If $S^n$ is covered by $n+1$ closed sets, one of them contains a pair of antipodal points.

### The ham sandwich theorem

**Theorem 17.11 (ham sandwich).** Given $n$ bounded measurable sets $A_1, \dots, A_n$ in $\mathbb{R}^n$, there is a
hyperplane that cuts each of them into two pieces of equal volume.

In $\mathbb{R}^3$: bread, ham and cheese can be halved, all three at once, by one straight knife cut, wherever they are
and however they are shaped.

*Proof.* Points of $S^n$ are unit vectors $u = (u_0, u_1, \dots, u_n) \in \mathbb{R}^{n+1}$. For each $u$, let
$H^+(u)$ be the half-space $\{x \in \mathbb{R}^n : u_1x_1 + \dots + u_n x_n \le u_0\}$, and let

$$
f_i(u) = \operatorname{vol}\big(A_i \cap H^+(u)\big), \qquad f = (f_1, \dots, f_n): S^n \to \mathbb{R}^n .
$$

Each $f_i$ is continuous in $u$ (moving the hyperplane slightly changes the volume cut off only slightly, because $A_i$
is bounded). Now $H^+(-u) = \{u_1x_1 + \dots \ge u_0\}$ is the opposite half-space, sharing only the hyperplane, which has
volume zero. So $f_i(-u) = \operatorname{vol}(A_i) - f_i(u)$. By Borsuk-Ulam there is $u$ with $f(u) = f(-u)$, that is
$f_i(u) = \tfrac12 \operatorname{vol}(A_i)$ for every $i$.

One more check: $u$ must not be $(\pm1, 0, \dots, 0)$, because then $H^+(u)$ is all of $\mathbb{R}^n$ or empty and
not a half-space. At $u = (1, 0, \dots, 0)$, $f_1(u) = \operatorname{vol}(A_1)$ and $f_1(-u) = 0$; these differ as long
as $\operatorname{vol}(A_1) > 0$, so the Borsuk-Ulam point is not one of these two. So $(u_1, \dots, u_n) \ne 0$ and the
cut is a genuine hyperplane. (If some $\operatorname{vol}(A_i) = 0$ there is nothing to halve.) $\square$

**Worked example 4 (two pancakes).** In the plane ($n = 2$), let $A_1$ be the disc of radius 1 centred at $(0,0)$ and
$A_2$ the disc of radius 2 centred at $(4, 2)$. Any line through the centre of a disc halves it, by symmetry. So the
line through both centres, $y = x/2$, halves both. Check: it passes through $(0,0)$ and through $(4, 2)$ since
$2 = 4/2$. The theorem guarantees such a line even for shapes with no centre of symmetry, where finding it takes
computation.

**Where else Borsuk-Ulam appears.** In 1978 László Lovász used it to prove Kneser's conjecture on the chromatic number of
certain graphs, a purely combinatorial statement, which started the field of **topological combinatorics**. Noga Alon
used it in 1987 to prove the **necklace splitting theorem**: a necklace with beads of $k$ colours, each colour appearing
an even number of times, can be divided fairly between two thieves using at most $k$ cuts. Matoušek's book tells these
stories in full.

**History.** Karol Borsuk published the theorem in 1933, crediting Stanisław Ulam with the conjecture. The ham sandwich
problem was posed by Hugo Steinhaus in the Lwów circle of mathematicians; Banach solved the 3-dimensional case, and
Stone and Tukey proved a general version in 1942.

## 17.6 Topological data analysis and persistent homology

*Level: intermediate (ideas) to advanced (the stability theorem).* A scientist measures many things about many objects
and gets a **point cloud**: thousands of points in some $\mathbb{R}^d$. Is there structure? Clusters are one kind of
structure, and statistics has many tools for them. A loop is another: points that lie, roughly, around a circle, which
can happen when the data come from something periodic. Can homology see it?

A finite set of points, on its own, has boring topology: $b_0$ is the number of points and nothing else. The trick is
to thicken it.

**The Vietoris-Rips complex.** Fix a scale $r > 0$. The Rips complex $R_r$ of a point cloud $P$ has a vertex for each
point, an edge between two points at distance at most $r$, a triangle on three points that are pairwise within $r$, and
in general a $k$-simplex on any $k+1$ points that are pairwise within $r$. It is a simplicial complex
([Chapter 16](16-Homology.md)), so it has Betti numbers $b_0(r), b_1(r), \dots$.

Which $r$ is right? Too small, and the complex is a scatter of dots. Too large, and it is one big simplex, contractible.
The answer of **persistent homology** is: do not choose. As $r$ grows, the complexes grow, $R_r \subseteq R_{r'}$ for
$r \le r'$, and each inclusion induces a map on homology. A homology class is **born** at the scale where it first
appears and **dies** at the scale where it becomes a boundary (or merges with an older class). The record of all births
and deaths is the **barcode**: one bar per feature, from birth to death. Long bars are features of the data; short bars
are noise.

**Worked example 5 (twelve points on a circle).** Put twelve points evenly on the unit circle. The distances between
points $k$ steps apart are $2 \sin(15k°)$: about $0.5176, 1.0, 1.4142, 1.7321, 1.9319, 2.0$ for $k = 1, \dots, 6$.

- For $r < 0.5176$: no edges, $b_0 = 12$, $b_1 = 0$.
- At $r = 0.5176$: the twelve neighbouring edges appear at once, forming a 12-gon. Eleven components die, one survives
  forever, and a 1-cycle (the loop) is born. Now $b_0 = 1$, $b_1 = 1$.
- From $r = 1$: edges two steps apart and the thin triangles $\{i, i+1, i+2\}$ appear. These fill in near the rim but
  not across the middle, and $b_1 = 1$ still (12 vertices, 24 edges, 12 triangles; check below).
- At $r = 1.7321$: triangles such as $\{0, 4, 8\}$ (an equilateral triangle on the circle) appear and finally fill the
  middle. The loop dies; $b_1 = 0$.

The barcode has eleven short $H_0$ bars, one infinite $H_0$ bar, and one long $H_1$ bar from $0.5176$ to $1.7321$:
the data "is" a connected loop, which is the truth.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Barcode of twelve evenly spaced points on a circle. In H zero, eleven short bars run from scale 0 to about 0.518 and one bar runs forever. In H one, a single long bar runs from about 0.518 to about 1.732, showing one persistent loop">
  <line x1="137.6" y1="16" x2="137.6" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="319.8" y1="16" x2="319.8" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="137.6" y="12" text-anchor="middle" font-size="11" fill="currentColor">0.518</text>
  <text x="319.8" y="12" text-anchor="middle" font-size="11" fill="currentColor">1.732</text>
  <line x1="60" y1="24" x2="137.6" y2="24" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="32" x2="137.6" y2="32" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="40" x2="137.6" y2="40" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="48" x2="137.6" y2="48" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="56" x2="137.6" y2="56" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="64" x2="137.6" y2="64" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="72" x2="137.6" y2="72" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="80" x2="137.6" y2="80" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="88" x2="137.6" y2="88" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="96" x2="137.6" y2="96" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="104" x2="137.6" y2="104" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="60" y1="112" x2="386" y2="112" stroke="#7ccf9a" stroke-width="4"/>
  <polygon points="386,106 398,112 386,118" fill="#7ccf9a"/>
  <line x1="137.6" y1="142" x2="319.8" y2="142" stroke="#eea66f" stroke-width="5"/>
  <text x="30" y="72" text-anchor="middle" font-size="14" fill="currentColor">H₀</text>
  <text x="30" y="147" text-anchor="middle" font-size="14" fill="currentColor">H₁</text>
  <line x1="60" y1="170" x2="400" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="170" x2="60" y2="176" stroke="currentColor" stroke-width="1.5"/>
  <line x1="135" y1="170" x2="135" y2="176" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210" y1="170" x2="210" y2="176" stroke="currentColor" stroke-width="1.5"/>
  <line x1="285" y1="170" x2="285" y2="176" stroke="currentColor" stroke-width="1.5"/>
  <line x1="360" y1="170" x2="360" y2="176" stroke="currentColor" stroke-width="1.5"/>
  <text x="60" y="190" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="135" y="190" text-anchor="middle" font-size="11" fill="currentColor">0.5</text>
  <text x="210" y="190" text-anchor="middle" font-size="11" fill="currentColor">1</text>
  <text x="285" y="190" text-anchor="middle" font-size="11" fill="currentColor">1.5</text>
  <text x="360" y="190" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="400" y="208" text-anchor="end" font-size="12" fill="currentColor">scale r</text>
</svg>
</div>

### Try it in Python

Betti numbers of a Rips complex need only ranks of boundary matrices. Working modulo 2 (so signs do not matter, and a
chain is just a set of simplices) keeps the code short. $b_1$ depends only on vertices, edges and triangles, so we stop
there.

```python
import math, itertools

def rank_mod2(vectors):              # each vector is an int used as a bit string
    pivots = {}
    for v in vectors:
        while v:
            h = v.bit_length() - 1
            if h not in pivots:
                pivots[h] = v
                break
            v ^= pivots[h]
    return len(pivots)

def betti01(points, r):
    n = len(points)
    close = lambda i, j: math.dist(points[i], points[j]) <= r
    edges = [e for e in itertools.combinations(range(n), 2) if close(*e)]
    index = {e: k for k, e in enumerate(edges)}
    tris = [t for t in itertools.combinations(range(n), 3)
            if all(close(a, b) for a, b in itertools.combinations(t, 2))]
    d1 = [(1 << i) | (1 << j) for i, j in edges]
    d2 = [(1 << index[(a, b)]) | (1 << index[(a, c)]) | (1 << index[(b, c)]) for a, b, c in tris]
    r1, r2 = rank_mod2(d1), rank_mod2(d2)
    return n - r1, len(edges) - r1 - r2

pts = [(math.cos(2 * math.pi * k / 12), math.sin(2 * math.pi * k / 12)) for k in range(12)]
for r in [0.3, 0.6, 1.1, 1.5, 1.72, 1.74, 2.1]:
    print(r, betti01(pts, r))
```

It prints $(12, 0)$, then $(1, 1)$ for $r = 0.6, 1.1, 1.5, 1.72$, then $(1, 0)$ for $r = 1.74$ and $2.1$, matching
the barcode. Check by hand at $r = 1.1$: $b_1 = \#E - \operatorname{rank}\partial_1 - \operatorname{rank}\partial_2 =
24 - 11 - 12 = 1$ (the 12 thin triangles have independent boundaries, and a connected graph on 12 vertices has
$\operatorname{rank}\partial_1 = 11$).

### Stability, and honesty

Why trust a barcode computed from noisy measurements? The **stability theorem**, proved by Cohen-Steiner, Edelsbrunner
and Harer (2007) for filtrations by the values of a function and later carried over to Rips complexes of point clouds,
says that small changes in the data make small changes in the barcode. For Rips complexes built as here: if every point
is moved by at most $\varepsilon$, every pairwise distance changes by at most $2\varepsilon$, and the bars can be
matched so that each birth and each death moves by at most $2\varepsilon$ (bars shorter than $4\varepsilon$ may instead
vanish). This matching distance is called the **bottleneck distance**. So long bars survive noise and short bars may not.

What has persistent homology done? It is used in many sciences as one tool among many. A well-known study by Carlsson,
Ishkhanov, de Silva and Zomorodian (2008) looked at small patches of natural images and found that the densest patches
lie near a surface with the topology of a Klein bottle ([Chapter 2](02-Surfaces-and-Euler-Characteristic.md)), a striking
example of a non-obvious shape in data.

What it cannot do should be said as plainly. A loop in a barcode is a fact about the point cloud at a range of scales,
not automatically a fact about the world; whether it *means* something is a scientific question. The method is
expensive (the Rips complex on $N$ points can have up to $\binom{N}{k+1}$ simplices of dimension $k$), and it is
sensitive to outliers unless the data are cleaned. Like any statistic, it can be over-interpreted.

**History.** Persistence was introduced around 2000 by Herbert Edelsbrunner, David Letscher and Afra Zomorodian, and its
algebra was put in its modern form by Zomorodian and Gunnar Carlsson in 2005. Carlsson's 2009 survey "Topology and data"
is a readable introduction.

## Check yourself

??? question "1. What is the degree of $f(z) = z^4$ on $S^1$, and of $g(z) = \bar z^{\,2}$? What is $\deg(f \circ g)$?"
    $\deg f = 4$ (four preimages of 1, all orientation-preserving). $g(z) = \bar z^{\,2}$ winds twice the other way,
    so $\deg g = -2$. By multiplicativity $\deg(f \circ g) = 4 \cdot (-2) = -8$. Check directly:
    $f(g(z)) = \bar z^{\,8}$, which has degree $-8$.

??? question "2. Find the fixed point of $f(x, y) = \left(\frac{x + 1}{3}, \frac{y}{2}\right)$ on the closed unit disc, after checking that $f$ maps the disc into itself."
    For $x^2 + y^2 \le 1$: $|f(x,y)| \le |(x/3, y/2)| + |(1/3, 0)| \le \tfrac12 + \tfrac13 = \tfrac56 \le 1$.
    Fixed point: $x = (x+1)/3$ gives $x = \tfrac12$; $y = y/2$ gives $y = 0$. Check:
    $f(\tfrac12, 0) = (\tfrac{3/2}{3}, 0) = (\tfrac12, 0)$.

??? question "3. Show that the antipodal map of $S^2$ is not homotopic to the identity, and that the antipodal map of $S^1$ is."
    By Theorem 17.5(7), $\deg a = (-1)^{n+1}$. For $n = 2$ that is $-1 \ne 1 = \deg(\mathrm{id})$, so they are not
    homotopic. For $n = 1$, $a(z) = -z = e^{i\pi}z$, and $F(z, t) = e^{i\pi t}z$ is a homotopy from the identity to
    $a$ (rotate by a growing angle). Consistently, $(-1)^{2} = 1$.

??? question "4. Write down a nowhere-zero tangent vector field on $S^3$ different from the one in the text, and check that it is tangent."
    For example $v(x_1, y_1, x_2, y_2) = (-y_1, x_1, y_2, -x_2)$ (the second pair turns the other way). Tangent:
    $v \cdot p = -y_1x_1 + x_1y_1 + y_2x_2 - x_2y_2 = 0$. Length: $|v(p)| = |p| = 1$, never zero. Another:
    $(-x_2, y_2, x_1, -y_1)$, with dot product $-x_2x_1 + y_2y_1 + x_1x_2 - y_1y_2 = 0$.

??? question "5. Let $f: S^2 \to S^2$ have degree 2. Show that $f$ has a fixed point. Must $f$ also send some point to its antipode?"
    $L(f) = 1 + (-1)^2 \cdot 2 = 3 \ne 0$, so by Lefschetz (or by Theorem 17.7(1), since a fixed-point-free map has
    degree $-1$) $f$ has a fixed point. And by Theorem 17.7(2), a map with $f(x) \ne -x$ for all $x$ has degree 1; ours
    has degree 2, so yes, some $x$ has $f(x) = -x$.

??? question "6. Compute the Lefschetz number of every map of the closed surface of genus 2 that is homotopic to the identity. Must such a map have a fixed point?"
    $L(\mathrm{id}) = \chi = 2 - 2 \cdot 2 = -2 \ne 0$. All maps homotopic to the identity have the same Lefschetz
    number, so each has a fixed point. In particular the genus-2 surface has no nowhere-zero tangent field.

??? question "7. On the torus, let $A = \begin{pmatrix} 3 & 1 \\ 2 & 1 \end{pmatrix}$. Compute $L(f_A)$ and find all fixed points of $f_A$."
    $\det(I - A) = \det\begin{pmatrix} -2 & -1 \\ -2 & 0 \end{pmatrix} = 0 - 2 = -2$, so $L = -2$. Fixed points: $(A - I)x
    \in \mathbb{Z}^2$, with $A - I = \begin{pmatrix} 2 & 1 \\ 2 & 0 \end{pmatrix}$ of determinant $-2$, so there are
    $|{-2}| = 2$ solutions mod 1. They are $(0,0)$ and $(\tfrac12, 0)$: check $(A - I)(\tfrac12, 0) = (1, 1) \in
    \mathbb{Z}^2$.

??? question "8. Show that the rotation $f_R$ of the torus by the integer matrix $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (a quarter turn of the square) has a fixed point, and count its fixed points."
    $\det(I - R) = \det\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix} = 2$, so $L = 2 \ne 0$. Solve $(R - I)x \in
    \mathbb{Z}^2$: $R - I = \begin{pmatrix} -1 & -1 \\ 1 & -1 \end{pmatrix}$ has determinant 2, giving two points:
    $(0,0)$ and $(\tfrac12, \tfrac12)$. Check: $R(\tfrac12,\tfrac12) = (-\tfrac12, \tfrac12) \equiv (\tfrac12, \tfrac12)$.

??? question "9. A continuous map $f: S^3 \to \mathbb{R}^3$ assigns to each point of a 3-sphere three measurements. What does Borsuk-Ulam say? Is the analogous statement true for $f: S^3 \to \mathbb{R}^4$?"
    There is a point $x$ with $f(x) = f(-x)$: all three measurements agree at some antipodal pair. For $\mathbb{R}^4$
    it fails: the inclusion $S^3 \subset \mathbb{R}^4$, $f(x) = x$, has $f(x) = -f(-x) \ne f(-x)$ for every $x$.

??? question "10. Six points: $(0,0), (1,0), (0,1)$ and $(5,0), (6,0), (5,1)$. Describe the $H_0$ barcode of their Rips filtration."
    Inside each cluster the closest pairs are at distance 1, so at $r = 1$ each cluster becomes connected: four of the
    six components die at $r = 1$ (two per cluster). The two clusters are joined by the shortest gap, from $(1,0)$ to
    $(5,0)$, at distance 4: one more component dies at $r = 4$. One bar is infinite. Barcode: four bars $[0, 1)$, one bar
    $[0, 4)$, one bar $[0, \infty)$. The long finite bar says "two clusters".

??? question "11. Why does the proof of Brouwer's theorem fail for the solid torus $D^2 \times S^1$, and is the theorem true there?"
    The solid torus retracts onto its core circle, and also has fixed-point-free maps: rotate the $S^1$ factor,
    $(d, z) \mapsto (d, e^{i\theta}z)$. So the theorem is false there. The proof fails because the boundary torus is not
    "the boundary of a contractible space": $H_1$ of the solid torus is $\mathbb{Z}$, not 0, and the Lefschetz number of
    the rotation is $1 - 1 = 0$ (trace 1 on $H_0$ and on $H_1$).

??? question "12. Use the Lefschetz theorem to prove that every map $f: \mathbb{RP}^2 \to \mathbb{RP}^2$ has a fixed point. (Rational homology of $\mathbb{RP}^2$: $H_0 = \mathbb{Q}$, all others 0.)"
    With rational coefficients the only nonzero group is $H_0 = \mathbb{Q}$, on which $f_*$ is the identity (the space is
    path connected). So $L(f) = 1 \ne 0$ for every $f$, and every map has a fixed point. (With integer coefficients
    $H_1(\mathbb{RP}^2) = \mathbb{Z}/2$, which has no rational part; this is why we use $\mathbb{Q}$.)

## What you learned

- Homology turns "there is no retraction of the ball onto its boundary" into "the identity of $\mathbb{Z}$ is not zero",
  and Brouwer's fixed point theorem follows in every dimension.
- The degree of a map $S^n \to S^n$ is an integer, multiplicative, homotopy invariant, computed by counting preimages
  with signs; the antipodal map has degree $(-1)^{n+1}$.
- Even-dimensional spheres cannot be combed; odd ones can. Any continuous model of the horizontal wind on a spherical
  planet has a calm point at every instant.
- The Lefschetz number $\sum (-1)^k \operatorname{tr} f_*$ forces fixed points when it is nonzero, and the Hopf trace
  formula is the linear algebra behind it; for the identity it is the Euler characteristic.
- Borsuk-Ulam: maps $S^n \to \mathbb{R}^n$ identify some antipodal pair. It gives the ham sandwich theorem and results
  in combinatorics.
- Persistent homology records how Betti numbers of a thickened point cloud change with scale; long bars are robust
  features, and their meaning is a separate question.

**Next:** [Chapter 18](18-Knot-Theory.md), knots and links, and the invariants (colourings, the linking number, the
Jones polynomial) that tell them apart.

## Further reading

- A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002 (sections 2.2, 2.B and 2.C for degree,
  Borsuk-Ulam and Lefschetz; free online from the author).
- J. R. Munkres, *Elements of Algebraic Topology*, Addison-Wesley, 1984 (simplicial approximation and the Lefschetz
  theorem for polyhedra).
- J. Milnor, *Topology from the Differentiable Viewpoint*, University Press of Virginia, 1965 (degree by counting,
  the hairy ball theorem, Hopf's theorem, in 60 pages).
- J. Matoušek, *Using the Borsuk-Ulam Theorem*, Springer, 2003.
- J. F. Nash, "Non-cooperative games", *Annals of Mathematics* 54, 1951.
- H. Edelsbrunner and J. Harer, *Computational Topology: An Introduction*, American Mathematical Society, 2010.
- G. Carlsson, "Topology and data", *Bulletin of the American Mathematical Society* 46, 2009.
- D. Cohen-Steiner, H. Edelsbrunner and J. Harer, "Stability of persistence diagrams", *Discrete and Computational
  Geometry* 37, 2007.
- R. Ghrist, *Elementary Applied Topology*, 2014.
- On this site: [Linear algebra, chapter 8: Determinants](../linear-algebra/08-Determinants.md) (traces and
  determinants for 17.4), [Linear algebra, chapter 10: Applications of eigenvalues](../linear-algebra/10-Applications-of-Eigenvalues.md)
  (Perron-Frobenius in use), [Geometry, chapter 16: Spherical geometry](../geometry/16-Spherical-Geometry.md) (why
  flat maps of a sphere distort), [Combinatorics](../combinatorics/index.md) (where Borsuk-Ulam proves combinatorial
  theorems), and the [Topology book's contents](index.md).
