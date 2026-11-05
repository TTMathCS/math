# 18. Projective geometry

*Stand between two railway lines and look along them: the rails, which never meet, seem to meet at the horizon. Painters
in the fifteenth century turned that impression into exact rules, and mathematicians later took it seriously: what if
parallel lines really do meet, at a point "at infinity"? The answer is projective geometry, a geometry with no
distances and no angles, where any two lines meet in exactly one point. It is simpler than Euclid's geometry, it
explains why ellipses, parabolas and hyperbolas are really one curve, and it is the geometry of every camera and every
computer drawing of a 3D scene. In this chapter you will build the projective plane with coordinates, prove the
theorems of Desargues, Pappus and Pascal, meet the cross-ratio, the one number a perspective view cannot change, and
end with a whole geometry that has only seven points.*

!!! abstract "In this chapter"
    **You will learn:**

    - how perspective drawing leads to points at infinity and the horizon as a line at infinity
    - the projective plane, homogeneous coordinates, and how to find lines and intersections with a cross product
    - the theorems of Desargues and Pappus, with complete proofs
    - the principle of duality: swap "point" and "line" and every theorem stays true
    - the cross-ratio, why projections preserve it, and harmonic division
    - why all conics are the same projective curve, and Pascal's and Brianchon's theorems
    - finite projective planes: the Fano plane with 7 points and the open question of which orders exist

    **You need:** [Chapter 5](05-Similarity.md) (the intercept theorem), [Chapter 8](08-Coordinate-Geometry.md) (lines
    and conics in coordinates) and [Chapter 9](09-Vectors.md) (the cross product). A little linear algebra (matrices,
    determinants, linear independence) helps from 18.2 on. [Chapter 13](13-Inversion-and-Complex-Geometry.md) met a
    cross-ratio of complex numbers; this chapter meets the real one on a line.

    **Levels:** 18.1 is beginner to intermediate; 18.2 to 18.5 are intermediate to advanced; 18.6 and 18.7 are
    advanced, with expert remarks at the end of each.

## 18.1 Perspective drawing and points at infinity

How do you draw a road on a flat canvas so that it looks like a road? Medieval painters did it by feel, and their
floors often tilt in impossible ways. In Florence early in the fifteenth century the architect Filippo Brunelleschi
showed a painted panel of the Baptistery that, viewed through a hole from the right spot, matched the real building.
In 1435 Leon Battista Alberti wrote the method down in *De pictura* (On painting): treat the picture as a window, and
paint on the glass exactly where the line from your eye to each object crosses it.

That rule is **central projection**. Put the eye at the origin, looking along the $z$-axis, and put the picture (the
"window") in the plane $z = 1$. A point $(X, Y, Z)$ in front of you, with $Z > 0$, is joined to the eye by the line of
points $t(X, Y, Z)$; this crosses $z = 1$ when $t = 1/Z$, at

$$
(x, y) = \left(\frac{X}{Z}, \frac{Y}{Z}\right).
$$

Divide by the depth: far things ($Z$ large) are drawn small and close to the centre.

**Worked example.** You stand with your eye $1.6$ m above flat ground, so the ground is the plane $Y = -1.6$. A rail
runs straight ahead along $X = 0.7$. Where are the points of the rail at distances $Z = 2, 4, 8$ drawn?

- $Z = 2$: $(0.7/2, -1.6/2) = (0.35, -0.8)$.
- $Z = 4$: $(0.175, -0.4)$.
- $Z = 8$: $(0.0875, -0.2)$.

Each time the distance doubles, the drawn point moves halfway toward $(0, 0)$. As $Z \to \infty$ the image tends to
$(0, 0)$, and the same is true for the other rail $X = -0.7$, or any line $X = c$ on the ground. So all lines running
straight ahead are drawn as lines through one point $V = (0, 0)$, the **vanishing point**. *Check:* the image of
$(c, -1.6, Z)$ is $(c/Z, -1.6/Z)$, and $y/x = -1.6/c$ is the same for every $Z$: the images of one rail lie on one
line through the origin.

Now take a path at an angle, the ground line $X = mZ + c$. Its image is

$$
\left(m + \frac{c}{Z}, -\frac{1.6}{Z}\right) \longrightarrow (m, 0) \quad \text{as } Z \to \infty .
$$

The limit depends on the direction $m$ but not on $c$: parallel paths share a vanishing point, and paths in different
directions vanish at different points, all on the line $y = 0$. That line, the image of "infinitely far away on the
ground", is the **horizon**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="A railway drawn in perspective. The two rails and the ties shrink toward one vanishing point V on the horizon line; a second pair of parallel paths, at an angle to the rails, meets the horizon at a different vanishing point W">
  <line x1="10" y1="60" x2="410" y2="60" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="20" y="52" text-anchor="start" font-size="12" fill="currentColor">horizon</text>
  <line x1="108.1" y1="229.8" x2="210" y2="60" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="311.9" y1="229.8" x2="210" y2="60" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="87.3" y1="223.6" x2="332.7" y2="223.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="106.2" y1="198.5" x2="313.8" y2="198.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="125.6" y1="172.5" x2="294.4" y2="172.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="142.5" y1="150" x2="277.5" y2="150" stroke="currentColor" stroke-width="1.2"/>
  <line x1="158.1" y1="129.2" x2="261.9" y2="129.2" stroke="currentColor" stroke-width="1.2"/>
  <line x1="171.4" y1="111.4" x2="248.6" y2="111.4" stroke="currentColor" stroke-width="1.2"/>
  <line x1="183" y1="96" x2="237" y2="96" stroke="currentColor" stroke-width="1.2"/>
  <line x1="193.1" y1="82.5" x2="226.9" y2="82.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="15" y1="173" x2="354" y2="60" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="15" y1="154.2" x2="354" y2="60" stroke="#9cc9ea" stroke-width="2.5"/>
  <circle cx="210" cy="60" r="3.5" fill="currentColor"/>
  <text x="210" y="50" text-anchor="middle" font-size="13" fill="currentColor">V</text>
  <circle cx="354" cy="60" r="3.5" fill="currentColor"/>
  <text x="354" y="50" text-anchor="middle" font-size="13" fill="currentColor">W</text>
</svg>
</div>

Notice what the picture has done. On the ground, two parallel rails never meet. On the canvas their images meet at $V$.
Every point of the canvas except the horizon is the image of exactly one ground point; the points of the horizon are
the images of nothing on the ground, but of *directions* on the ground. A geometer reading the canvas would say: the
ground plane, completed by one extra point for each direction, behaves like a plane in which any two lines meet. The
extra points are the **points at infinity**, and together they form a line, the **line at infinity**, drawn as the
horizon.

Things that perspective destroys: lengths (equal ties are drawn unequal), angles (the rails meet at an angle on the
canvas but are parallel on the ground), parallelism, midpoints (the middle tie is not drawn in the middle). Things it
keeps: points stay points, lines stay lines, and a point on a line stays on that line. Projective geometry is the
study of exactly what survives: **incidence** (which points lie on which lines) and one surprising number, the
cross-ratio of 18.5.

Cameras obey the same equations; computer graphics draws every 3D scene with them, and computer vision runs them
backwards to recover a 3D scene from photographs. The cameras on Mars rovers are calibrated with this pinhole model
(plus corrections for lens distortion) so that pairs of images can be turned into maps of the terrain.

<figure class="play" data-play="perspective"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Parallel lines on a tiled floor meet at vanishing points on the horizon, the points at infinity of the projective plane.</figcaption></figure>

## 18.2 The projective plane and homogeneous coordinates

*Level: intermediate.* The canvas suggests a recipe: a point of the picture *is* a line through the eye. Two points
$(X, Y, Z)$ and $(2X, 2Y, 2Z)$ on the same line through the eye are drawn at the same place. So define:

**Definition.** The **real projective plane** $\mathbb{RP}^2$ is the set of lines through the origin in $\mathbb{R}^3$. A
point of $\mathbb{RP}^2$ is written $[x : y : z]$, meaning the line through $(x, y, z) \neq (0, 0, 0)$; and
$[x : y : z] = [\lambda x : \lambda y : \lambda z]$ for every $\lambda \neq 0$. The numbers $x, y, z$ are
**homogeneous coordinates** of the point; they are defined only up to a common nonzero factor. A **line** of
$\mathbb{RP}^2$ is a plane through the origin in $\mathbb{R}^3$, that is, the set of points with

$$
ax + by + cz = 0
$$

for some $(a, b, c) \neq (0, 0, 0)$. We write this line as $[a : b : c]$, since multiplying the equation by $\lambda$
gives the same line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="The origin O below a horizontal plane at height 1. Three lines through O pierce the plane at three points, one point for each line. A fourth line through O lies flat, parallel to the plane, and never meets it: it is a point at infinity">
  <polygon points="7.5,105 292.5,105 402.5,45 117.5,45" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="13.5" y="123" text-anchor="start" font-size="12" fill="currentColor">plane w = 1</text>
  <line x1="205" y1="225" x2="132" y2="63" stroke="#eea66f" stroke-width="2"/>
  <line x1="132" y1="63" x2="115.9" y2="27.4" stroke="#eea66f" stroke-width="2"/>
  <circle cx="132" cy="63" r="4" fill="currentColor"/>
  <line x1="205" y1="225" x2="238.5" y2="93" stroke="#eea66f" stroke-width="2"/>
  <line x1="238.5" y1="93" x2="245.9" y2="64" stroke="#eea66f" stroke-width="2"/>
  <circle cx="238.5" cy="93" r="4" fill="currentColor"/>
  <line x1="205" y1="225" x2="333" y2="57" stroke="#eea66f" stroke-width="2"/>
  <line x1="333" y1="57" x2="361.2" y2="20" stroke="#eea66f" stroke-width="2"/>
  <circle cx="333" cy="57" r="4" fill="currentColor"/>
  <line x1="26.6" y1="239.4" x2="383.4" y2="210.6" stroke="#7ccf9a" stroke-width="2.5" stroke-dasharray="7 4"/>
  <text x="387.4" y="226.6" text-anchor="end" font-size="12" fill="currentColor">parallel to the plane</text>
  <circle cx="205" cy="225" r="4" fill="currentColor"/>
  <text x="193" y="230" text-anchor="end" font-size="13" fill="currentColor">O</text>
</svg>
</div>

**How the ordinary plane sits inside.** If $z \neq 0$, the point $[x : y : z]$ equals $[x/z : y/z : 1]$, and we
identify it with the ordinary point $(x/z, y/z)$: the line through the origin meets the plane $z = 1$ in exactly that
point (the figure, with the plane at height 1). Conversely the ordinary point $(u, v)$ is $[u : v : 1]$. The points
with $z = 0$ are lines through the origin parallel to the plane $z = 1$; they meet it nowhere. These are the points at
infinity, and $[x : y : 0]$ is the point at infinity in the direction $(x, y)$. They make up the line $z = 0$, the line
at infinity $[0 : 0 : 1]$.

An ordinary line $ax + by + c = 0$ becomes, after putting $x/z$, $y/z$ for $x$, $y$ and multiplying by $z$, the
projective line $ax + by + cz = 0$. It contains the ordinary points of the old line and exactly one point at infinity,
$[b : -a : 0]$, which is the direction $(b, -a)$ of the line. Parallel lines have the same direction, so they share
their point at infinity: they meet there.

**Theorem 18.1.** In $\mathbb{RP}^2$, any two distinct points lie on exactly one line, and any two distinct lines meet
in exactly one point. The line through $[p]$ and $[q]$ is $[p \times q]$, and the meeting point of lines $[l]$ and $[m]$
is $[l \times m]$.

*Proof.* Two distinct points are two lines through the origin, spanned by independent vectors $p$ and $q$. They lie in
exactly one plane through the origin, the span of $p$ and $q$; its normal vector is $p \times q$, which is nonzero
because $p, q$ are independent, and it is orthogonal to both ([Chapter 9](09-Vectors.md)). So the line is
$[p \times q]$. Two distinct lines are two distinct planes through the origin with independent normals $l$ and $m$;
two distinct planes through the origin meet in a line through the origin, which must be orthogonal to both normals, so
it is spanned by $l \times m$. $\square$

That one sentence, "any two lines meet", is what Euclid's plane lacks, and it removes all the special cases about
parallels from the theorems that follow.

**Worked example 1: parallels meet.** The lines $x + 2y = 3$ and $x + 2y = 5$ become $[1 : 2 : -3]$ and $[1 : 2 : -5]$.
Their cross product is

$$
(1, 2, -3) \times (1, 2, -5) = \bigl(2 \cdot (-5) - (-3) \cdot 2,\; (-3) \cdot 1 - 1 \cdot (-5),\; 1 \cdot 2 - 2 \cdot 1\bigr) = (-4, 2, 0).
$$

So they meet at $[-4 : 2 : 0] = [-2 : 1 : 0]$, the point at infinity in the direction $(-2, 1)$, which is exactly the
direction of both lines. *Check:* $-2 + 2 \cdot 1 = 0$, so $(-2, 1)$ is along every line $x + 2y = \text{const}$.

**Worked example 2: the line through two points.** Through $(1, 2)$ and $(3, 5)$:
$(1, 2, 1) \times (3, 5, 1) = (2 - 5, 3 - 1, 5 - 6) = (-3, 2, -1)$, the line $-3x + 2y - 1 = 0$, or $y = \tfrac32 x + \tfrac12$.
*Check:* $-3 + 4 - 1 = 0$ and $-9 + 10 - 1 = 0$.

**Worked example 3: a line through a point at infinity.** The line through $[1 : 0 : 0]$ (the horizontal direction) and
$(2, 3)$ is $(1, 0, 0) \times (2, 3, 1) = (0, -1, 3)$, that is $-y + 3 = 0$: the horizontal line $y = 3$, as it should be.

!!! tip "Try it in Python"
    Lines and intersections are one function, the cross product.

    ```python
    def cross(p, q):
        return (p[1]*q[2] - p[2]*q[1], p[2]*q[0] - p[0]*q[2], p[0]*q[1] - p[1]*q[0])

    print(cross((1, 2, -3), (1, 2, -5)))   # (-4, 2, 0): parallels meet at infinity
    print(cross((1, 2, 1), (3, 5, 1)))     # (-3, 2, -1): the line through (1,2) and (3,5)
    ```

**Projective transformations.** Which maps of $\mathbb{RP}^2$ send lines to lines? Any invertible $3 \times 3$ matrix $M$
maps lines through the origin to lines through the origin and planes to planes, so $[v] \mapsto [Mv]$ is a well defined
map of $\mathbb{RP}^2$ sending lines to lines. These are the **projective transformations** (or collineations given by
matrices); $M$ and $\lambda M$ give the same map, so they form the group $PGL(3, \mathbb{R})$, invertible matrices modulo
nonzero scalars. Every perspective drawing of one plane on another is one of them, and so is every affine map
$(x, y) \mapsto A(x, y) + b$ of [Chapter 10](10-Transformations-and-Symmetry.md): it is the matrix with $A$ in the top left,
$b$ in the last column and $(0, 0, 1)$ as last row.

Four points are in **general position** if no three of them lie on a line.

**Theorem 18.2 (four points determine a projective transformation).** If $P_1, P_2, P_3, P_4$ and $Q_1, Q_2, Q_3, Q_4$
are two lists of four points in general position, there is exactly one projective transformation sending each $P_i$ to
$Q_i$.

*Proof.* It is enough to send the standard points $E_1 = [1:0:0]$, $E_2 = [0:1:0]$, $E_3 = [0:0:1]$,
$E_4 = [1:1:1]$ to any $P_1, \dots, P_4$ in general position in exactly one way; then compose one such map with the
inverse of another. Choose vectors $p_i$ for $P_i$. Since $P_1, P_2, P_3$ are not on a line, $p_1, p_2, p_3$ are a basis,
and $p_4 = \lambda_1 p_1 + \lambda_2 p_2 + \lambda_3 p_3$. No $\lambda_i$ is zero: if, say, $\lambda_3 = 0$, then $p_4$ is
in the span of $p_1, p_2$ and $P_1, P_2, P_4$ are on a line. Let $M$ be the matrix with columns $\lambda_1 p_1$,
$\lambda_2 p_2$, $\lambda_3 p_3$. Then $M e_i = \lambda_i p_i$ represents $P_i$, and $M(1, 1, 1) = p_4$. For uniqueness,
suppose $N$ sends each $E_i$ to itself. Then $N e_i = \mu_i e_i$ for $i = 1, 2, 3$, so $N$ is diagonal, and
$N(1, 1, 1) = (\mu_1, \mu_2, \mu_3)$ must be a multiple of $(1, 1, 1)$, so all $\mu_i$ are equal and $N$ is the identity
map of $\mathbb{RP}^2$. $\square$

This is the projective version of "all triangles are alike" in affine geometry: in projective geometry, all
*quadrangles* (four points in general position) are alike. In particular any line can be sent to the line at infinity,
which is the main trick in the proofs below: a projective statement may be proved after first sending a convenient
line to infinity, where it turns intersections into parallels.

**What the projective plane looks like.** Each line through the origin meets the unit sphere in two opposite points, so
$\mathbb{RP}^2$ is the sphere with each point glued to its antipode, the model of elliptic geometry from
[Chapter 16](16-Spherical-Geometry.md). Keep only the upper hemisphere and you see a disc whose boundary points are glued
to their opposites. This surface cannot be built in 3-space without crossing itself, and it is **non-orientable**: a
strip along a projective line, closed up, is a Möbius band. The projective line $\mathbb{RP}^1$ (lines through the origin
in $\mathbb{R}^2$) is just a circle: a line plus one point at infinity, joined at both ends.

**Other fields.** Nothing above used anything about the real numbers except that we can add, multiply and divide. For any
field $F$ the same definitions give the projective plane $\mathbb{P}^2(F)$: complex projective geometry, where algebraic
geometry lives ([Chapter 21](21-Where-Geometry-Goes.md)), and finite projective planes, where we end this chapter.
Elliptic-curve cryptography also computes in projective coordinates, because they avoid divisions.

## 18.3 Desargues and Pappus

*Level: intermediate to advanced.* Two theorems about points and lines only, with no lengths or angles in their
statements, stand at the start of the subject. Each is true in the projective plane with no exceptions, while the
Euclidean versions need a list of special cases about parallel lines.

### Desargues' theorem

Two triangles $ABC$ and $A'B'C'$ are **in perspective from a point** $O$ if the lines $AA'$, $BB'$, $CC'$ all pass
through $O$: one triangle looks like a projection of the other from $O$. They are **in perspective from a line** if the
three points where corresponding sides meet,

$$
P = AB \cap A'B', \qquad Q = BC \cap B'C', \qquad R = CA \cap C'A',
$$

lie on one line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 340" role="img" aria-label="Desargues' theorem. Two triangles ABC and A'B'C' are in perspective from the point O: the lines AA', BB', CC' meet at O. Their corresponding sides, extended, meet in three points P, Q, R, which lie on one line">
  <line x1="54.7" y1="120.9" x2="217.8" y2="179.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="54.7" y1="120.9" x2="269.7" y2="74.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="54.7" y1="120.9" x2="195" y2="53.9" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polygon points="153,156.4 154.3,99.4 103.3,97.7" fill="#eea66f" fill-opacity="0.3" stroke="#eea66f" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="217.8,179.8 269.7,74.5 195,53.9" fill="#9cc9ea" fill-opacity="0.3" stroke="#9cc9ea" stroke-width="2" stroke-linejoin="round"/>
  <line x1="154.3" y1="99.4" x2="149.3" y2="318.7" stroke="currentColor" stroke-width="0.8"/>
  <line x1="153" y1="156.4" x2="149.3" y2="318.7" stroke="currentColor" stroke-width="0.8"/>
  <line x1="269.7" y1="74.5" x2="149.3" y2="318.7" stroke="currentColor" stroke-width="0.8"/>
  <line x1="217.8" y1="179.8" x2="149.3" y2="318.7" stroke="currentColor" stroke-width="0.8"/>
  <line x1="103.3" y1="97.7" x2="388.3" y2="107.2" stroke="currentColor" stroke-width="0.8"/>
  <line x1="154.3" y1="99.4" x2="388.3" y2="107.2" stroke="currentColor" stroke-width="0.8"/>
  <line x1="195" y1="53.9" x2="388.3" y2="107.2" stroke="currentColor" stroke-width="0.8"/>
  <line x1="269.7" y1="74.5" x2="388.3" y2="107.2" stroke="currentColor" stroke-width="0.8"/>
  <line x1="153" y1="156.4" x2="230" y2="247.3" stroke="currentColor" stroke-width="0.8"/>
  <line x1="103.3" y1="97.7" x2="230" y2="247.3" stroke="currentColor" stroke-width="0.8"/>
  <line x1="217.8" y1="179.8" x2="230" y2="247.3" stroke="currentColor" stroke-width="0.8"/>
  <line x1="195" y1="53.9" x2="230" y2="247.3" stroke="currentColor" stroke-width="0.8"/>
  <line x1="397.9" y1="98.7" x2="139.7" y2="327.2" stroke="#7ccf9a" stroke-width="2.5"/>
  <circle cx="54.7" cy="120.9" r="3.5" fill="currentColor"/>
  <text x="40.7" y="124.9" text-anchor="middle" font-size="13" fill="currentColor">O</text>
  <circle cx="153" cy="156.4" r="3.5" fill="currentColor"/>
  <text x="149" y="174.4" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <circle cx="154.3" cy="99.4" r="3.5" fill="currentColor"/>
  <text x="158.3" y="90.4" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <circle cx="103.3" cy="97.7" r="3.5" fill="currentColor"/>
  <text x="95.3" y="89.7" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <circle cx="217.8" cy="179.8" r="3.5" fill="currentColor"/>
  <text x="231.8" y="191.8" text-anchor="middle" font-size="13" fill="currentColor">A′</text>
  <circle cx="269.7" cy="74.5" r="3.5" fill="currentColor"/>
  <text x="283.7" y="68.5" text-anchor="middle" font-size="13" fill="currentColor">B′</text>
  <circle cx="195" cy="53.9" r="3.5" fill="currentColor"/>
  <text x="195" y="43.9" text-anchor="middle" font-size="13" fill="currentColor">C′</text>
  <circle cx="149.3" cy="318.7" r="3.5" fill="currentColor"/>
  <text x="135.3" y="322.7" text-anchor="middle" font-size="13" fill="currentColor">P</text>
  <circle cx="388.3" cy="107.2" r="3.5" fill="currentColor"/>
  <text x="402.3" y="101.2" text-anchor="middle" font-size="13" fill="currentColor">Q</text>
  <circle cx="230" cy="247.3" r="3.5" fill="currentColor"/>
  <text x="216" y="251.3" text-anchor="middle" font-size="13" fill="currentColor">R</text>
</svg>
</div>

**Theorem 18.3 (Desargues).** Two triangles in the projective plane are in perspective from a point if and only if they
are in perspective from a line.

Girard Desargues, a French architect and engineer, worked on these ideas in the 1630s; his 1639 essay on conics
was almost forgotten until a manuscript copy was found in the nineteenth century. The theorem was first printed in
1648 in a book on perspective by his follower Abraham Bosse.

**A proof in space.** First the picture that makes it obvious. Suppose the two triangles lie in two *different* planes
$\Pi$ and $\Pi'$ in space, with $AA'$, $BB'$, $CC'$ meeting at $O$. The lines $AB$ and $A'B'$ both lie in the plane
through $O, A, B$ (it contains $A'$ and $B'$ because they are on $OA$ and $OB$), so they meet, at $P$. Now $P$ is on $AB$,
which lies in $\Pi$, and on $A'B'$, which lies in $\Pi'$. So $P$ is on the line $\Pi \cap \Pi'$. The same holds for $Q$ and
$R$. All three lie on the line where the two planes meet. That is the whole proof; the flat theorem is the shadow of
this one.

**A proof in the plane, with coordinates.** Here is a complete proof for triangles in one plane, using homogeneous
coordinates. Assume the configuration is not degenerate: $O, A, A'$ distinct and so on, and the triangles are proper
triangles. Let $o, a, b, c$ be vectors for $O, A, B, C$. Because $O, A, A'$ are collinear, a vector for $A'$ lies in the
span of $o$ and $a$, so it is $\alpha a + \beta o$ with $\alpha \neq 0$ (as $A' \neq O$) and $\beta \ne 0$ (as $A' \neq A$).
Rescale $a$ (allowed, since homogeneous coordinates are defined up to a factor) so that a vector for $A'$ is
$a' = a - o$; do the same for $B'$ and $C'$:

$$
a' = a - o, \qquad b' = b - o, \qquad c' = c - o .
$$

Subtract: $a - b = a' - b'$. The vector $p = a - b$ is in the span of $a, b$, so $[p]$ lies on the line $AB$; and it equals
$a' - b'$, so $[p]$ lies on $A'B'$. It is not zero, since $A \neq B$. So $p$ represents $P = AB \cap A'B'$. In the same
way $q = b - c$ represents $Q$, and $r = c - a$ represents $R$. And

$$
p + q + r = (a - b) + (b - c) + (c - a) = 0 .
$$

Three vectors with a nontrivial linear relation lie in one plane through the origin, so $P, Q, R$ lie on one line.
$\square$

The converse (perspective from a line implies perspective from a point) follows for free from the duality principle of
18.4, which is one reason duality is worth having.

**A hidden subtlety.** The proof in space used three dimensions; the coordinate proof used coordinates in a field. Is
there a proof using only the incidence axioms of a plane ("two points lie on one line, two lines meet in one point,
there are four points in general position")? No. There are **non-Desarguesian planes**: systems of points and lines
satisfying those axioms in which Desargues' theorem fails. The simplest, the *Moulton plane* (1902), bends every line of
negative slope as it crosses the $y$-axis; finite examples exist too. Hilbert showed that a projective plane satisfies
Desargues' theorem exactly when it can be given coordinates from a *division ring* (a field in which multiplication need
not commute), and every projective plane that sits inside a projective space of dimension 3 or more satisfies it, by the
space proof above.

### Pappus' theorem

Pappus of Alexandria, writing around the early fourth century AD, recorded this theorem in his *Collection*, a summary
of Greek geometry that preserved much that is otherwise lost.

**Theorem 18.4 (Pappus).** Let $A, B, C$ be three points on one line and $A', B', C'$ three points on another line (all six
different from the meeting point of the two lines). Then the three points

$$
X = AB' \cap A'B, \qquad Y = AC' \cap A'C, \qquad Z = BC' \cap B'C
$$

lie on one line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 300" role="img" aria-label="Pappus' theorem. A, B, C lie on one line and A', B', C' on another. The cross joins AB' and A'B meet at X, AC' and A'C at Y, BC' and B'C at Z, and X, Y, Z lie on one line">
  <line x1="30" y1="228.6" x2="410" y2="273" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="29.5" x2="410" y2="49.3" stroke="currentColor" stroke-width="2"/>
  <line x1="49.7" y1="230.9" x2="254.7" y2="41.2" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="60.9" y1="31.1" x2="167.6" y2="244.7" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="49.7" y1="230.9" x2="387.1" y2="48.1" stroke="#9cc9ea" stroke-width="1.5"/>
  <line x1="60.9" y1="31.1" x2="384.4" y2="270" stroke="#9cc9ea" stroke-width="1.5"/>
  <line x1="167.6" y1="244.7" x2="387.1" y2="48.1" stroke="#7ccf9a" stroke-width="1.5"/>
  <line x1="254.7" y1="41.2" x2="384.4" y2="270" stroke="#7ccf9a" stroke-width="1.5"/>
  <line x1="81.6" y1="169.7" x2="345.9" y2="115.3" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="49.7" cy="230.9" r="3.5" fill="currentColor"/>
  <text x="45.7" y="250.9" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <circle cx="167.6" cy="244.7" r="3.5" fill="currentColor"/>
  <text x="167.6" y="264.7" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <circle cx="384.4" cy="270" r="3.5" fill="currentColor"/>
  <text x="388.4" y="290" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <circle cx="60.9" cy="31.1" r="3.5" fill="currentColor"/>
  <text x="56.9" y="21.1" text-anchor="middle" font-size="13" fill="currentColor">A′</text>
  <circle cx="254.7" cy="41.2" r="3.5" fill="currentColor"/>
  <text x="254.7" y="31.2" text-anchor="middle" font-size="13" fill="currentColor">B′</text>
  <circle cx="387.1" cy="48.1" r="3.5" fill="currentColor"/>
  <text x="391.1" y="38.1" text-anchor="middle" font-size="13" fill="currentColor">C′</text>
  <circle cx="125.6" cy="160.7" r="3.5" fill="currentColor"/>
  <text x="111.6" y="156.7" text-anchor="middle" font-size="13" fill="currentColor">X</text>
  <circle cx="212.2" cy="142.8" r="3.5" fill="currentColor"/>
  <text x="212.2" y="130.8" text-anchor="middle" font-size="13" fill="currentColor">Y</text>
  <circle cx="301.9" cy="124.4" r="3.5" fill="currentColor"/>
  <text x="315.9" y="120.4" text-anchor="middle" font-size="13" fill="currentColor">Z</text>
</svg>
</div>

*Proof.* The statement only involves points, lines and incidence, so it is unchanged by any projective transformation.
By Theorem 18.2 we may send the line $XY$ to the line at infinity (any line can be sent there: pick two points on it and
two points off it in general position, and send them to $[1:0:0]$, $[0:1:0]$, $[0:0:1]$, $[1:1:1]$; then the line through
the first two goes to $z = 0$). Then $X$ and $Y$ are at infinity, which means $AB' \parallel A'B$ and $AC' \parallel A'C$,
and we must show that $Z$ is also at infinity, that is $BC' \parallel B'C$.

*Case 1: the two lines meet at an ordinary point $O$.* Measure signed distances from $O$ along each line: let $A, B, C$ be
at $a, b, c$ on the first line and $A', B', C'$ at $a', b', c'$ on the second (none is zero, since no point is $O$). By the
intercept theorem ([Chapter 5](05-Similarity.md)), the line $AB'$ is parallel to $A'B$ exactly when triangles $OAB'$ and
$OBA'$ are similar with the sides along the two lines in proportion: $a / b = b' / a'$, that is

$$
a a' = b b' .
$$

In the same way $AC' \parallel A'C$ gives $a a' = c c'$. Hence $b b' = c c'$, i.e. $b / c = c' / b'$, which by the same
theorem says $BC' \parallel B'C$.

*Case 2: the two lines are parallel* (they meet at infinity). Put them at $y = 0$ and $y = 1$, with $A = (a, 0)$,
$B = (b, 0)$, $C = (c, 0)$ and $A' = (a', 1)$ and so on. The direction of $AB'$ is $(b' - a, 1)$ and of $A'B$ is
$(b - a', -1)$; they are parallel exactly when $b' - a = -(b - a')$, i.e. $a + a' = b + b'$. Likewise $a + a' = c + c'$,
so $b + b' = c + c'$, which says $BC' \parallel B'C$. $\square$

Notice how the proof used multiplication of distances, and in Case 1 the step $a a' = b b'$ silently used $a a' = a' a$.
That is not an accident. Hilbert proved that a Desarguesian plane satisfies Pappus' theorem exactly when its division
ring is commutative, i.e. a field; and Gerhard Hessenberg showed in 1905 that Pappus implies Desargues. So the two
incidence theorems encode two laws of arithmetic: Desargues is associativity of the coordinates, Pappus is
commutativity. Geometry and algebra meet in a single configuration of nine points.

## 18.4 Duality

*Level: intermediate.* Look again at Theorem 18.1: "any two points lie on exactly one line; any two lines meet in exactly
one point". The two halves are the same sentence with the words *point* and *line*, and *lie on* and *meet*, swapped.
In coordinates the reason is plain: a point is $[x : y : z]$, a line is $[a : b : c]$, and the incidence condition

$$
ax + by + cz = 0
$$

is symmetric in the two triples. Read it the other way and $[a : b : c]$ is a point and $[x : y : z]$ is a line.

**The principle of duality.** Take any theorem of plane projective geometry stated in terms of points, lines and
incidence. Swap "point" with "line", "lie on" with "pass through", "collinear points" with "concurrent lines", "the line
through two points" with "the meeting point of two lines". The result is again a theorem.

*Proof.* The map $[x : y : z] \leftrightarrow [x : y : z]$ that sends each point to the line with the same coordinates,
and each line to the point with the same coordinates, preserves incidence by the symmetry of $ax + by + cz = 0$. So any
configuration of points and lines satisfying the hypotheses of a theorem is sent to a configuration of lines and points
satisfying the dual hypotheses, and the conclusion transfers in the same way. A theorem proved for all configurations
therefore gives its dual for all configurations. $\square$

| Statement | Dual statement |
| --- | --- |
| two points determine a line | two lines determine a point |
| three points on a line (collinear) | three lines through a point (concurrent) |
| a triangle: three points and the three lines joining them | a trilateral: three lines and the three points where they meet |
| Desargues: perspective from a point implies perspective from a line | perspective from a line implies perspective from a point |
| a conic as a set of points | a conic as the set of its tangent lines |
| Pascal's theorem (18.6) | Brianchon's theorem (18.6) |

The fourth row is the promised converse of Desargues. A triangle is self-dual: its three vertices become three sides
and its three sides become three vertices. "The lines $AA'$, $BB'$, $CC'$ joining corresponding vertices are concurrent"
dualises to "the points where corresponding sides meet are collinear", and the other way round. So the dual of
Desargues' theorem is exactly its converse. One proof, two theorems.

Duality was developed in the 1820s, in a priority dispute between Jean-Victor Poncelet, who saw it through *poles and
polars* with respect to a conic, and Joseph Gergonne, who stated it as a general principle and printed his papers in
two columns, a theorem on the left and its dual on the right. Poncelet's *Traité des propriétés projectives des figures*
(1822), begun while he was a prisoner of war in Russia after Napoleon's 1812 campaign, is usually counted as the start
of projective geometry as a subject.

**Poles and polars.** Poncelet's version is worth knowing because it is concrete. For the unit circle
$x^2 + y^2 = z^2$, the *polar* of the point $[p : q : r]$ is the line $px + qy - rz = 0$. For a point outside the circle,
its polar is the line through the two points where the tangents from it touch the circle; for a point on the circle, its
polar is the tangent there. *Example:* from $(2, 0)$ the tangents to the unit circle touch at $x = 1/2$ (since the radius
to the touching point is perpendicular to the tangent: $\cos\theta = 1/2$), and the polar of $[2 : 0 : 1]$ is $2x - z = 0$,
the line $x = 1/2$. *Check:* both agree.

## 18.5 The cross-ratio

*Level: intermediate to advanced.* Perspective destroys lengths and even ratios of lengths: equally spaced fence posts are
drawn ever closer together. Is there any number that a photograph of four points on a line keeps? Three points are not
enough, because a projective transformation of a line can send any three points to any three points (Theorem 18.2 in one
dimension lower). Four is enough.

**Definition.** For four distinct points on a line with coordinates $a, b, c, d$ (positions measured along the line), the
**cross-ratio** is

$$
(A, B; C, D) = \frac{(c - a)(d - b)}{(c - b)(d - a)} = \frac{CA}{CB} \Big/ \frac{DA}{DB},
$$

with signed lengths. If $D$ is the point at infinity, the factors with $d$ cancel in the limit and
$(A, B; C, \infty) = (c - a)/(c - b)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 310" role="img" aria-label="Four lines through a point O are cut by two different lines. The first cut gives points A, B, C, D, the second A', B', C', D'. The distances change, but the cross-ratio of the four points is the same on both lines">
  <line x1="30" y1="160" x2="311.1" y2="34.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="160" x2="324.1" y2="115.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="160" x2="336.2" y2="190.7" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="160" x2="351.9" y2="288.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="183.6" y1="79.6" x2="167.7" y2="227.9" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="300.5" y1="23.3" x2="344.9" y2="299.6" stroke="#9cc9ea" stroke-width="2.5"/>
  <circle cx="182.3" cy="92" r="3.5" fill="currentColor"/>
  <text x="169.3" y="96" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <circle cx="177.4" cy="137.7" r="3.5" fill="currentColor"/>
  <text x="164.4" y="141.7" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <circle cx="173.5" cy="174.4" r="3.5" fill="currentColor"/>
  <text x="160.5" y="178.4" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <circle cx="169" cy="215.5" r="3.5" fill="currentColor"/>
  <text x="156" y="219.5" text-anchor="middle" font-size="13" fill="currentColor">D</text>
  <circle cx="302.9" cy="38.1" r="3.5" fill="currentColor"/>
  <text x="318.9" y="42.1" text-anchor="middle" font-size="13" fill="currentColor">A′</text>
  <circle cx="315.6" cy="116.8" r="3.5" fill="currentColor"/>
  <text x="331.6" y="120.8" text-anchor="middle" font-size="13" fill="currentColor">B′</text>
  <circle cx="327.3" cy="189.8" r="3.5" fill="currentColor"/>
  <text x="343.3" y="193.8" text-anchor="middle" font-size="13" fill="currentColor">C′</text>
  <circle cx="342.6" cy="284.8" r="3.5" fill="currentColor"/>
  <text x="358.6" y="288.8" text-anchor="middle" font-size="13" fill="currentColor">D′</text>
  <circle cx="30" cy="160" r="3.5" fill="currentColor"/>
  <text x="24" y="150" text-anchor="middle" font-size="13" fill="currentColor">O</text>
</svg>
</div>

**Theorem 18.5.** The cross-ratio is preserved by every projective transformation of a line. In particular, if four lines
through a point $O$ are cut by two lines, at $A, B, C, D$ and at $A', B', C', D'$, then
$(A, B; C, D) = (A', B'; C', D')$.

*Proof (algebra).* A projective transformation of the line $\mathbb{RP}^1$ is $[x : 1] \mapsto [px + q : rx + s]$ with
$ps - qr \neq 0$, i.e. $x \mapsto g(x) = (px + q)/(rx + s)$. For any two points,

$$
g(x) - g(y) = \frac{(px + q)(ry + s) - (py + q)(rx + s)}{(rx + s)(ry + s)} = \frac{(ps - qr)(x - y)}{(rx + s)(ry + s)} .
$$

In the cross-ratio each of $a, b, c, d$ appears once in the numerator and once in the denominator, so all the factors
$(ps - qr)$ and $(rx + s)$ cancel, leaving $(c - a)(d - b) / ((c - b)(d - a))$. Points at infinity follow by taking limits.

*Proof (geometry).* Let $h$ be the distance from $O$ to the line $ABCD$. The area of triangle $OCA$ is $\tfrac12 h \cdot CA$
and also $\tfrac12 \, OC \cdot OA \sin \angle COA$. Doing this for each of the four segments in the cross-ratio,

$$
(A, B; C, D) = \frac{CA \cdot DB}{CB \cdot DA} = \frac{OC \cdot OA \sin\angle COA \cdot OD \cdot OB \sin\angle DOB}{OC \cdot OB \sin\angle COB \cdot OD \cdot OA \sin\angle DOA} = \frac{\sin\angle COA \, \sin\angle DOB}{\sin\angle COB \, \sin\angle DOA}.
$$

The lengths $OA, OB, OC, OD$ cancel and only the angles between the four lines through $O$ remain. A second transversal
cuts the same four lines, so it gets the same angles and the same cross-ratio (with signs handled by orienting the
angles). $\square$

So the cross-ratio belongs to the four *lines* through $O$ as much as to the points. *Check on the figure:* measuring its
coordinates gives $1.4153\ldots$ on both lines.

**Worked example: where is the fourth post?** A photograph shows a straight fence whose posts stand 1 m apart on the
ground. Along the bottom edge of the photo the first three posts are at $0$, $3$ and $4.5$ cm. Where is the fourth? On the
ground the posts are at $0, 1, 2, 3$, with cross-ratio

$$
(0, 1; 2, 3) = \frac{(2 - 0)(3 - 1)}{(2 - 1)(3 - 0)} = \frac{4}{3}.
$$

In the photo, with the fourth post at $x$: $(0, 3; 4.5, x) = \dfrac{4.5\,(x - 3)}{1.5\, x} = \dfrac{3(x - 3)}{x}$. Setting
this to $\tfrac43$ gives $9x - 27 = 4x$, so $x = 5.4$ cm. And the vanishing point $v$, the image of the post "at infinity"? Keep the points in the same order, with
$\infty$ in the fourth place: on the ground $(0, 1; 2, \infty) = (2 - 0)/(2 - 1) = 2$, and in the photo
$(0, 3; 4.5, v) = 3(v - 3)/v$. Setting $3(v - 3)/v = 2$ gives $v = 9$ cm. *Check:* the map
$x \mapsto 4.5x/(0.5x + 1)$ sends $0, 1, 2, 3, \infty$ to $0, 3, 4.5, 5.4, 9$.

**The six values.** Reordering the four points changes the cross-ratio in a controlled way. If $(A, B; C, D) = \lambda$,
then swapping the first pair gives $1/\lambda$, swapping the middle two gives $1 - \lambda$, and all 24 orders give only
the six values

$$
\lambda, \quad \frac{1}{\lambda}, \quad 1 - \lambda, \quad \frac{1}{1 - \lambda}, \quad \frac{\lambda - 1}{\lambda}, \quad \frac{\lambda}{\lambda - 1}.
$$

(Exercise 4 proves the first two rules; the rest follow by composing them.)

**Harmonic division.** When $(A, B; C, D) = -1$, the pair $C, D$ divides $A, B$ **harmonically**: $C$ divides $AB$ inside
in some ratio and $D$ divides it outside in the same ratio. $D$ is the **harmonic conjugate** of $C$ with respect to $A$
and $B$. If $C$ is the midpoint of $AB$, then $(A, B; C, \infty) = (c - a)/(c - b) = -1$: the harmonic conjugate of the
midpoint is the point at infinity. That is why perspective drawing can find midpoints: draw the vanishing point, and
the construction below finds the drawn midpoint.

The remarkable fact is that the harmonic conjugate can be constructed with a straightedge alone.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 290" role="img" aria-label="Constructing the harmonic conjugate D of C with respect to A and B with a straightedge alone: join a point S to A, B, C; pick T on SC; AT meets SB at E, BT meets SA at F; the line EF meets AB at D">
  <line x1="20" y1="260" x2="425" y2="260" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="40" x2="40" y2="260" stroke="currentColor" stroke-width="1.2"/>
  <line x1="150" y1="40" x2="300" y2="260" stroke="currentColor" stroke-width="1.2"/>
  <line x1="150" y1="40" x2="250" y2="260" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40" y1="260" x2="224.5" y2="149.3" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="300" y1="260" x2="129.1" y2="81.9" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="129.1" y1="81.9" x2="381.3" y2="260" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="40" cy="260" r="3.5" fill="currentColor"/>
  <text x="40" y="280" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <circle cx="300" cy="260" r="3.5" fill="currentColor"/>
  <text x="300" y="280" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <circle cx="250" cy="260" r="3.5" fill="currentColor"/>
  <text x="250" y="280" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <circle cx="381.3" cy="260" r="3.5" fill="currentColor"/>
  <text x="381.3" y="280" text-anchor="middle" font-size="13" fill="currentColor">D</text>
  <circle cx="150" cy="40" r="3.5" fill="currentColor"/>
  <text x="150" y="30" text-anchor="middle" font-size="13" fill="currentColor">S</text>
  <circle cx="205" cy="161" r="3.5" fill="currentColor"/>
  <text x="193" y="165" text-anchor="middle" font-size="13" fill="currentColor">T</text>
  <circle cx="224.5" cy="149.3" r="3.5" fill="currentColor"/>
  <text x="236.5" y="145.3" text-anchor="middle" font-size="13" fill="currentColor">E</text>
  <circle cx="129.1" cy="81.9" r="3.5" fill="currentColor"/>
  <text x="117.1" y="79.9" text-anchor="middle" font-size="13" fill="currentColor">F</text>
</svg>
</div>

**Theorem 18.6 (the complete quadrangle).** Given $A, B, C$ on a line, take any point $S$ off it and any point $T$ on $SC$
(not $S$ or $C$). Let $E = AT \cap SB$ and $F = BT \cap SA$. Then $EF$ meets the line $AB$ at the harmonic conjugate $D$ of
$C$, and $D$ does not depend on the choices of $S$ and $T$.

*Proof.* We move the figure to a convenient position and compute. Apply a projective transformation sending $A, B, S, T$ (four points in
general position) to $A = (0, 0)$, $B = (1, 0)$, $S = [0 : 1 : 0]$ (the vertical direction at infinity), $T = (t, 1)$
for a fixed $t$; this is possible by Theorem 18.2, and it keeps $C, D$ on the line $AB$, which is now $y = 0$. Then $SA$
is the vertical line $x = 0$, $SB$ is $x = 1$, and $SC$ is the vertical line through $T$, so $C = (t, 0)$. Now
$E = AT \cap SB$: the line $AT$ is $y = x / t$, meeting $x = 1$ at $E = (1, 1/t)$. And $F = BT \cap SA$: the line $BT$
is $y = (x - 1)/(t - 1)$, meeting $x = 0$ at $F = (0, -1/(t - 1)) = (0, 1/(1 - t))$. The line $EF$ meets $y = 0$ where

$$
x = \frac{-y_F}{y_E - y_F} = \frac{-\tfrac{1}{1 - t}}{\tfrac1t - \tfrac{1}{1 - t}} = \frac{-t}{(1 - t) - t} = \frac{t}{2t - 1}.
$$

So $d = t/(2t - 1)$, and

$$
(A, B; C, D) = \frac{(t - 0)(d - 1)}{(t - 1)(d - 0)} = \frac{t \cdot \frac{1 - t}{2t - 1}}{(t - 1)\frac{t}{2t - 1}} = -1 .
$$

Since cross-ratios are preserved, $(A, B; C, D) = -1$ in the original picture too. Finally, a point $D$ with
$(A, B; C, D) = -1$ is unique, because $x \mapsto (A, B; C, x)$ is a projective map of the line, hence one-to-one; so
$D$ does not depend on $S$ and $T$. $\square$

*Check on the figure:* there $A, B, C$ are at $40, 300, 250$ and the construction lands at $D = 381.25$;
$(210)(81.25)/((-50)(341.25)) = -1$.

**Numerical example.** Find the harmonic conjugate of $C = 1$ with respect to $A = 0$ and $B = 4$. We need
$\dfrac{(1 - 0)(d - 4)}{(1 - 4)(d - 0)} = -1$, so $d - 4 = 3d$ and $d = -2$. *Check:* $(1)(-6)/((-3)(-2)) = -1$. Indeed $C$
divides $AB$ inside in the ratio $1 : 3$, and $D = -2$ divides it outside in the ratio $2 : 6 = 1 : 3$.

Harmonic division turns up everywhere: in the musical "harmonic" series (the numbers $1, \tfrac12, \tfrac13$ and $0$ are
harmonic: compute $(1, \tfrac13; \tfrac12, 0)$), in optics (object and image distances of a thin lens), and in the
cross-ratio $-1$ that characterises an inversion pair in [Chapter 13](13-Inversion-and-Complex-Geometry.md).

## 18.6 Conics in projective geometry; Pascal and Brianchon

*Level: advanced.* In [Chapter 8](08-Coordinate-Geometry.md) the ellipse, parabola and hyperbola were three curves with
three equations. The ancient name *conic section* already says why they belong together: each is a slice of a cone. A
perspective drawing is a projection from a point, and the cone of sight lines from your eye to a circle is a cone; so
every conic is a perspective image of a circle, and in projective geometry there is only one nondegenerate conic.

**Conics in coordinates.** A conic $ax^2 + bxy + cy^2 + dx + ey + f = 0$ becomes, after homogenising (put $x/z, y/z$ and
multiply by $z^2$),

$$
ax^2 + bxy + cy^2 + dxz + eyz + fz^2 = 0, \qquad \text{i.e.} \qquad v^{\mathsf T} M v = 0, \quad M = \begin{pmatrix} a & b/2 & d/2 \\ b/2 & c & e/2 \\ d/2 & e/2 & f \end{pmatrix}, \; v = \begin{pmatrix} x \\ y \\ z \end{pmatrix}.
$$

The conic is **nondegenerate** if $\det M \neq 0$ (otherwise it is a pair of lines, a double line or a single point). A
projective transformation $v \mapsto Pv$ changes $M$ to $P^{\mathsf T} M P$ (up to the inverse). By Sylvester's law of
inertia (the classification of quadratic forms in linear algebra), a real symmetric invertible matrix can be brought by
such a change to a diagonal matrix with entries $\pm 1$, and the number of $+1$s and $-1$s does not change. A nonempty
nondegenerate real conic has signs $(+, +, -)$ or $(+, -, -)$, which are the same conic after multiplying by $-1$; so:

**Theorem 18.7.** All nondegenerate real conics with at least one point are projectively equivalent to the circle
$x^2 + y^2 = z^2$.

What distinguishes the three Euclidean types is only how the conic meets the line at infinity $z = 0$:

- **Ellipse:** $x^2 + y^2 = z^2$ meets $z = 0$ where $x^2 + y^2 = 0$, nowhere (in real points).
- **Parabola:** $y = x^2$ becomes $yz = x^2$; at $z = 0$ we get $x = 0$, the single point $[0 : 1 : 0]$, where the line at
  infinity is *tangent*. The two arms of the parabola run off in the same direction and meet there.
- **Hyperbola:** $xy = 1$ becomes $xy = z^2$; at $z = 0$, $xy = 0$, two points $[1 : 0 : 0]$ and $[0 : 1 : 0]$, the directions
  of the two asymptotes. A hyperbola is one closed curve that crosses the line at infinity twice, which is why its two
  branches look separate in the ordinary plane.

In the railway picture: the horizon is the image of the line at infinity. A circle on the ground is drawn as an
ellipse; a circle that touches the "horizon line" after projection is drawn as a parabola; one that crosses it, as a
hyperbola. A lamp shade throws all three on a wall depending on how you tilt it.

**Five points determine a conic.** The equation has six coefficients, defined up to a common factor: five degrees of
freedom. Each point on the conic gives one linear equation in the coefficients. Five points in general position give five
equations, so there is always a conic through them (a homogeneous linear system with fewer equations than unknowns has
a nonzero solution). It is unique when no three of the five points are collinear. Suppose two different conics $C_1 = 0$
and $C_2 = 0$ pass through $P_1, \dots, P_5$. Pick a sixth point $R$ on the line $P_1P_2$ and choose $t$ so that
$C = C_1 + tC_2$ vanishes at $R$ (if $C_2(R) = 0$ use $C_2$ itself). Restricted to the line $P_1P_2$, $C$ is a quadratic with
three zeros, so it vanishes on the whole line, and $C$ is that line times another line (the division argument in the
proof of Pascal's theorem below works the same way). The points $P_3, P_4, P_5$ are not on $P_1P_2$, so they lie on the
other line: three collinear points, a contradiction.

*Worked example.* The conic through $(0,0), (1,0), (0,1), (1,2), (2,1)$. Plug each point into
$ax^2 + bxy + cy^2 + dx + ey + f = 0$: $(0,0)$ gives $f = 0$; $(1,0)$ gives $a + d = 0$; $(0,1)$ gives $c + e = 0$;
$(1,2)$ gives $a + 2b + 4c + d + 2e = 0$, which with $d = -a$, $e = -c$ is $2b + 2c = 0$; $(2,1)$ gives
$4a + 2b + c + 2d + e = 0$, i.e. $2a + 2b = 0$. So $b = -a$, $c = a$, and taking $a = 1$:

$$
x^2 - xy + y^2 - x - y = 0 .
$$

Here $b^2 - 4ac = 1 - 4 < 0$, so it is an ellipse. *Check:* at $(1, 2)$: $1 - 2 + 4 - 1 - 2 = 0$.

**Pascal's theorem.** Blaise Pascal published a one-page *Essai pour les coniques* in 1640, at the age of sixteen,
containing this theorem about a "mystic hexagram".

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 320" role="img" aria-label="Pascal's theorem. Six points A to F on an ellipse are joined in order to make a hexagon whose sides cross. The three pairs of opposite sides, AB and DE, BC and EF, CD and FA, meet in three points X, Y, Z that lie on one line, the Pascal line">
  <ellipse cx="220" cy="150" rx="150" ry="95" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="356.5" y1="189.4" x2="76.1" y2="123.3" stroke="#eea66f" stroke-width="2"/>
  <line x1="76.1" y1="123.3" x2="182.9" y2="148.5" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="76.1" y1="123.3" x2="300.9" y2="230" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="300.9" y1="230" x2="238" y2="200.1" stroke="#9cc9ea" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="300.9" y1="230" x2="192.9" y2="56.6" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="300.9" y1="230" x2="344.4" y2="299.8" stroke="#7ccf9a" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="192.9" y1="56.6" x2="172.8" y2="240.2" stroke="#eea66f" stroke-width="2"/>
  <line x1="172.8" y1="240.2" x2="182.9" y2="148.5" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="172.8" y1="240.2" x2="363.8" y2="122.9" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="172.8" y1="240.2" x2="238" y2="200.1" stroke="#9cc9ea" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="363.8" y1="122.9" x2="356.5" y2="189.4" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="356.5" y1="189.4" x2="344.4" y2="299.8" stroke="#7ccf9a" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="158.6" y1="125.8" x2="357.3" y2="311.9" stroke="currentColor" stroke-width="2"/>
  <circle cx="356.5" cy="189.4" r="3.5" fill="currentColor"/>
  <text x="371.8" y="198.9" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <circle cx="76.1" cy="123.3" r="3.5" fill="currentColor"/>
  <text x="60.3" y="125.3" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <circle cx="300.9" cy="230" r="3.5" fill="currentColor"/>
  <text x="312.3" y="246.2" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <circle cx="192.9" cy="56.6" r="3.5" fill="currentColor"/>
  <text x="188.5" y="46.2" text-anchor="middle" font-size="13" fill="currentColor">D</text>
  <circle cx="172.8" cy="240.2" r="3.5" fill="currentColor"/>
  <text x="165.4" y="259.3" text-anchor="middle" font-size="13" fill="currentColor">E</text>
  <circle cx="363.8" cy="122.9" r="3.5" fill="currentColor"/>
  <text x="379.5" y="124.9" text-anchor="middle" font-size="13" fill="currentColor">F</text>
  <circle cx="182.9" cy="148.5" r="4" fill="#eea66f"/>
  <text x="166.9" y="140.5" text-anchor="middle" font-size="13" fill="currentColor">X</text>
  <circle cx="238" cy="200.1" r="4" fill="#eea66f"/>
  <text x="252" y="196.1" text-anchor="middle" font-size="13" fill="currentColor">Y</text>
  <circle cx="344.4" cy="299.8" r="4" fill="#eea66f"/>
  <text x="358.4" y="303.8" text-anchor="middle" font-size="13" fill="currentColor">Z</text>
</svg>
</div>

**Theorem 18.8 (Pascal).** Let $A, B, C, D, E, F$ be six distinct points on a nondegenerate conic. Then the three points
where opposite sides of the hexagon $ABCDEF$ meet,

$$
X = AB \cap DE, \qquad Y = BC \cap EF, \qquad Z = CD \cap FA,
$$

lie on one line (the **Pascal line**).

The hexagon need not be convex; the figure uses a crossed one so that all three points fit on the page. For a circle and
a regular hexagon, opposite sides are parallel, the three points are all at infinity, and the Pascal line is the line at
infinity.

*Proof.* We use only that a polynomial of degree $n$ in one variable that is not identically zero has at most $n$ roots.
By Theorem 18.7 we may take the conic to be $Q(x, y, z) = x^2 - yz = 0$, which is parametrised by

$$
[x : y : z] = [st : s^2 : t^2], \qquad [s : t] \in \mathbb{RP}^1,
$$

and every point of the conic is reached exactly once (check: $(st)^2 = s^2 t^2$; conversely if $x^2 = yz$ then $y, z$
have the same sign and $s = \sqrt{|y|}$, $t = \pm\sqrt{|z|}$ work).

Let $L_1, L_2, L_3$ be linear forms whose zero sets are the lines $AB$, $CD$, $EF$, and $M_1, M_2, M_3$ those of $BC$, $DE$,
$FA$. The two cubic polynomials $L = L_1 L_2 L_3$ and $M = M_1 M_2 M_3$ both vanish at all six points $A, \dots, F$
(each vertex lies on one side from each group: for example $A$ is on $AB$ and on $FA$). Choose a seventh point $G$ on the
conic, different from the six. $M(G) \neq 0$ (no side passes through a seventh point of the conic, since a line meets the
conic in at most two points: substituting the parametrisation into a linear form gives a quadratic in $s, t$). So we can
choose a number $\mu$ with $K = L - \mu M$ vanishing at $G$ as well.

Now restrict $K$ to the conic: $k(s, t) = K(st, s^2, t^2)$ is a homogeneous polynomial of degree 6 in $(s, t)$ with seven
distinct zeros, so it is identically zero. Thus $K$ vanishes on the whole conic. We now show that $K$ is divisible by $Q$.
Divide $K$ by $Q = x^2 - yz$ as a polynomial in $x$: $K = Q \cdot H + x\, U(y, z) + V(y, z)$. On the conic,
$0 = st\, U(s^2, t^2) + V(s^2, t^2)$. In the first term every monomial has odd degree in $s$, in the second even, so both
are the zero polynomial, which forces $U = V = 0$. So $K = Q \cdot H$ with $H$ of
degree 1: a line.

Finally, $X = AB \cap DE$ lies on $L_1$ and on $M_2$, so $K(X) = 0$. And $X$ is not on the conic: otherwise the line $AB$
would meet the conic in $A$, $B$ and $X$, so $X \in \{A, B\}$, and similarly $X \in \{D, E\}$, impossible for six distinct
points. So $Q(X) \neq 0$ and $H(X) = 0$. The same holds for $Y$ and $Z$. All three lie on the line $H = 0$. (We assumed
$K \neq 0$; if $L = \mu M$, the six lines would coincide in pairs, impossible for six distinct points on a conic.) $\square$

This proof is a small case of a big idea: two plane curves of degrees $m$ and $n$ meet in at most $mn$ points unless they
share a component (Bézout's theorem, [Chapter 21](21-Where-Geometry-Goes.md)); here a conic and a cubic met in seven
points, more than $2 \times 3 = 6$, so they had to share the conic.

Pappus' theorem is the special case of Pascal's theorem when the "conic" is a pair of lines, with $A, C, E$ on one and
$B, D, F$ on the other; the proof above does not cover it, but the coordinate proof of 18.3 does.

**Brianchon's theorem.** The dual of a conic (as a set of points) is the set of its tangent lines, and the dual of "six
points on a conic, opposite sides meet on a line" is:

**Theorem 18.9 (Brianchon, 1806).** If a hexagon is circumscribed about a conic (its six sides are tangent to it), the
three diagonals joining opposite vertices pass through one point.

*Proof.* By duality applied to Pascal's theorem, using that the tangent lines of a nondegenerate conic $v^{\mathsf T} M v = 0$
form the dual conic $l^{\mathsf T} M^{-1} l = 0$ (the tangent at $p$ is the line $l = Mp$, and $l^{\mathsf T} M^{-1} l = p^{\mathsf T} M p = 0$). $\square$

Charles Brianchon found it as a student at the École polytechnique, two centuries after Pascal, by applying Monge's
methods of poles and polars.

**Steiner's construction (statement).** Here is the projective definition of a conic, with no equation at all. Take two
points $P$ and $Q$. The lines through $P$ form a pencil, a copy of the projective line, and likewise those through $Q$.
Match them by a projective map (one preserving cross-ratio) that does not send $PQ$ to itself. Then the meeting points
of corresponding lines trace a nondegenerate conic through $P$ and $Q$, and every conic arises this way (Jakob Steiner,
1832). This is how a conic can be drawn with a straightedge alone once five of its points are known: Pascal's theorem
gives a sixth point on any line through one of the five.

## 18.7 The Fano plane and finite geometries

*Level: advanced.* The axioms of a projective plane mention only points, lines and incidence:

1. any two distinct points lie on exactly one line;
2. any two distinct lines meet in exactly one point;
3. there are four points, no three on a line.

Nothing says there must be infinitely many points. Take the field with two elements, $\mathbb{F}_2 = \{0, 1\}$ with
$1 + 1 = 0$. The projective plane $\mathbb{P}^2(\mathbb{F}_2)$ has as points the nonzero vectors of $\mathbb{F}_2^3$ (the only
nonzero scalar is 1, so each line through the origin has one nonzero vector): there are $2^3 - 1 = 7$ of them. Its lines
are the planes through the origin, $ax + by + cz = 0$, also 7. Each line contains 3 points, and three points $u, v, w$ lie
on a line exactly when $u + v + w = 0$, i.e. $w = u + v$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 310" role="img" aria-label="The Fano plane: seven points and seven lines. Six lines are drawn straight: the three sides of a triangle and its three medians. The seventh line is the circle through the three midpoints. Every line has three points, every point is on three lines, and any two points lie on exactly one line">
  <circle cx="220" cy="198.3" r="86.7" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="220,25 70,285 370,285" fill="none" stroke="#9cc9ea" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="220" y1="25" x2="220" y2="285" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="70" y1="285" x2="295" y2="155" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="370" y1="285" x2="145" y2="155" stroke="#7ccf9a" stroke-width="2.5"/>
  <circle cx="220" cy="25" r="6" fill="currentColor"/>
  <text x="220" y="17" text-anchor="middle" font-size="12" fill="currentColor">100</text>
  <circle cx="70" cy="285" r="6" fill="currentColor"/>
  <text x="64" y="303" text-anchor="middle" font-size="12" fill="currentColor">010</text>
  <circle cx="370" cy="285" r="6" fill="currentColor"/>
  <text x="376" y="303" text-anchor="middle" font-size="12" fill="currentColor">001</text>
  <circle cx="145" cy="155" r="6" fill="currentColor"/>
  <text x="119" y="155" text-anchor="middle" font-size="12" fill="currentColor">110</text>
  <circle cx="295" cy="155" r="6" fill="currentColor"/>
  <text x="321" y="155" text-anchor="middle" font-size="12" fill="currentColor">101</text>
  <circle cx="220" cy="285" r="6" fill="currentColor"/>
  <text x="220" y="305" text-anchor="middle" font-size="12" fill="currentColor">011</text>
  <circle cx="220" cy="198.3" r="6" fill="currentColor"/>
  <text x="244" y="192.3" text-anchor="middle" font-size="12" fill="currentColor">111</text>
</svg>
</div>

This is the **Fano plane**, named after Gino Fano, who described finite geometries in 1892. The seven lines are

$$
\{100, 010, 110\}, \; \{100, 001, 101\}, \; \{010, 001, 011\}, \; \{100, 011, 111\}, \; \{010, 101, 111\}, \; \{001, 110, 111\}, \; \{110, 101, 011\}.
$$

*Check:* in each triple the sum of the three vectors is $000$ (for example $110 + 101 + 011 = 000$ adding bits mod 2),
and each point appears in exactly 3 triples. The last line is the circle in the drawing: a line does not have to look
straight, since the geometry knows only incidence.

The Fano plane breaks one familiar fact. In a complete quadrangle (four points in general position and the six lines
joining them), the three **diagonal points** where opposite sides meet are never collinear in the real plane. In the
Fano plane, take the quadrangle $100, 010, 001, 111$: its diagonal points are $110, 101, 011$, which lie on the circle line.
This is why the harmonic construction of 18.5 fails there: in characteristic 2, $-1 = 1$.

**Its symmetries.** A symmetry of the Fano plane (a permutation of the points sending lines to lines) is the same as an
invertible $3 \times 3$ matrix over $\mathbb{F}_2$. Count them column by column: the first column is any nonzero vector,
$8 - 1 = 7$ choices; the second is any vector not in the span of the first, $8 - 2 = 6$; the third avoids the span of the
first two, $8 - 4 = 4$. So there are $7 \cdot 6 \cdot 4 = 168$ symmetries. The group $GL(3, \mathbb{F}_2)$ of order 168 is
the second smallest non-abelian simple group ([Algebra, Chapter 16](../algebra/16-Group-Actions-and-Sylow.md)).

**Finite projective planes in general.** For any finite field $\mathbb{F}_q$ ($q$ a prime power, see
[Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md)), $\mathbb{P}^2(\mathbb{F}_q)$ has

$$
\frac{q^3 - 1}{q - 1} = q^2 + q + 1
$$

points, the same number of lines, $q + 1$ points on every line and $q + 1$ lines through every point. *Check:* $q = 2$ gives
$7$ and $3$; $q = 3$ gives $13$ and $4$. The number $q$ is called the **order** of the plane. Every finite projective plane
(even one not built from a field) has an order $n$ with these counts: fix a line with $n + 1$ points; every point off it
is joined to each of them by one line, which shows every line has $n + 1$ points and every point is on $n + 1$ lines, and
counting gives $n^2 + n + 1$ points.

Which orders occur? All prime powers do, by the construction above. No other order is known.

- **Order 6 does not exist.** This follows from the Bruck–Ryser theorem (1949): if $n \equiv 1$ or $2 \pmod 4$ and a
  plane of order $n$ exists, then $n$ is a sum of two squares. $6$ is not a sum of two squares.
- **Order 10 does not exist**, although Bruck–Ryser allows it ($10 = 1 + 9$). This was settled in 1989 by Clement Lam,
  Larry Thiel and Stanley Swiercz after a computer search lasting years.
- **Order 12** is the smallest open case. Whether every finite projective plane has prime power order is a famous open
  problem.

Non-Desarguesian finite planes exist too; the smallest have order 9.

**A link to codes.** Write the seven lines of the Fano plane as 7-bit words with a 1 in each position of the line's
points. Together with the zero word, the complements and the all-ones word, they form the 16 codewords of the Hamming
$(7, 4)$ code, which corrects any single-bit error. Error-correcting codes are built from such finite geometries; the
links that carry rover data from Mars to Earth use more powerful relatives (Reed–Solomon, convolutional, turbo and LDPC
codes), several of which are themselves designed with finite fields and finite geometries.

## A short history

Perspective painting came first: Brunelleschi's demonstrations (early fifteenth century) and Alberti's *De pictura*
(1435). Desargues (1639) treated conics projectively and introduced points at infinity, but his work was little read;
Pascal's hexagon theorem (1640) was its best-known fruit. The subject was reborn with Monge's descriptive geometry in
revolutionary France, Poncelet's *Traité* (1822), Gergonne's duality, and in Germany with Möbius and Plücker, who
introduced homogeneous coordinates around 1827 to 1830, and Steiner. Karl von Staudt's *Geometrie der Lage* (1847)
rebuilt projective geometry without any lengths, defining the cross-ratio by constructions. Cayley (1859) and Klein (1871)
showed that Euclidean and non-Euclidean metrics could be recovered inside projective geometry, which led to Klein's
Erlangen programme ([Chapter 21](21-Where-Geometry-Goes.md)). Hilbert's *Grundlagen der Geometrie* (1899) explained the
roles of Desargues and Pappus, and finite geometries (Fano 1892, Veblen and others around 1906) opened the combinatorial
side.

## Check yourself

??? question "1. In the projective plane, where do the lines $2x - y = 1$ and $2x - y = 4$ meet?"

    As projective lines they are $[2 : -1 : -1]$ and $[2 : -1 : -4]$. Their cross product is
    $\bigl((-1)(-4) - (-1)(-1),\ (-1)(2) - (2)(-4),\ (2)(-1) - (-1)(2)\bigr) = (3, 6, 0)$, so they meet at
    $[3 : 6 : 0] = [1 : 2 : 0]$: the point at infinity in the direction $(1, 2)$, which is the direction of both lines
    (slope 2). *Check:* $2 \cdot 1 - 2 = 0$.

??? question "2. Find the line through the point at infinity $[1 : 0 : 0]$ and the point $(2, 3)$, and say in words what it is."

    $(1, 0, 0) \times (2, 3, 1) = (0 \cdot 1 - 0 \cdot 3,\ 0 \cdot 2 - 1 \cdot 1,\ 1 \cdot 3 - 0 \cdot 2) = (0, -1, 3)$, the
    line $-y + 3z = 0$, which in ordinary coordinates is $y = 3$: the horizontal line through $(2, 3)$. A line "through" a
    point at infinity is a line in that direction.

??? question "3. Compute the cross-ratios $(0, 1; 3, \infty)$ and $(0, 4; 1, -2)$."

    $(0, 1; 3, \infty) = (c - a)/(c - b) = (3 - 0)/(3 - 1) = 3/2$.
    $(0, 4; 1, -2) = \dfrac{(1 - 0)(-2 - 4)}{(1 - 4)(-2 - 0)} = \dfrac{-6}{6} = -1$: the pair $1, -2$ divides $0, 4$
    harmonically.

??? question "4. Show that if $(A, B; C, D) = \lambda$ then $(B, A; C, D) = 1/\lambda$ and $(A, C; B, D) = 1 - \lambda$."

    Swapping $a$ and $b$ in $\dfrac{(c - a)(d - b)}{(c - b)(d - a)}$ swaps numerator and denominator, giving $1/\lambda$.
    For the second, $(A, C; B, D) = \dfrac{(b - a)(d - c)}{(b - c)(d - a)}$. Then
    $1 - \lambda = \dfrac{(c - b)(d - a) - (c - a)(d - b)}{(c - b)(d - a)}$. Expanding the numerator:
    $cd - ac - bd + ab - cd + bc + ad - ab = ad - ac - bd + bc = a(d - c) - b(d - c) = (a - b)(d - c)$. So $1 - \lambda = \dfrac{(a - b)(d - c)}{(c - b)(d - a)} = \dfrac{(b - a)(d - c)}{(b - c)(d - a)}$,
    which is $(A, C; B, D)$.

??? question "5. Equally spaced lamp posts stand along a straight street. In a photo the first three are at 0, 2 and 3 cm along a line. Where is the fourth, and where is the vanishing point?"

    On the street the posts are at $0, 1, 2, 3$ with $(0, 1; 2, 3) = 4/3$. In the photo $(0, 2; 3, x) = \dfrac{3(x - 2)}{1 \cdot x} = 4/3$,
    so $9x - 18 = 4x$ and $x = 3.6$ cm. For the vanishing point, $(0, 1; 2, \infty) = 2$, and
    $(0, 2; 3, v) = 3(v - 2)/v = 2$ gives $v = 6$ cm. *Check:* the projective map $x \mapsto 6x/(x + 2)$ sends
    $0, 1, 2, 3, \infty$ to $0, 2, 3, 3.6, 6$.

??? question "6. Write the dual of the statement: \"If four points lie on a line, any two of them determine that line.\" Then state the dual of Pappus' theorem."

    Dual: "If four lines pass through one point, any two of them determine that point (meet there)." Dual of Pappus:
    let $a, b, c$ be three lines through one point and $a', b', c'$ three lines through another point. The lines joining
    $a \cap b'$ to $a' \cap b$, $a \cap c'$ to $a' \cap c$, and $b \cap c'$ to $b' \cap c$ pass through one point.

??? question "7. In the Fano plane, which line contains the points 110 and 011? Which point is the meeting point of the lines {100, 010, 110} and {001, 110, 111}?"

    The third point on the line through $u$ and $v$ is $u + v = 110 + 011 = 101$, so the line is $\{110, 011, 101\}$, the
    circle in the figure. The two given lines share the point $110$, so they meet there (two lines meet in exactly one
    point).

??? question "8. Where does the hyperbola $x^2 - y^2 = 1$ meet the line at infinity? What do these points mean?"

    Homogenise: $x^2 - y^2 = z^2$. At $z = 0$: $x^2 = y^2$, so $x = \pm y$, the points $[1 : 1 : 0]$ and $[1 : -1 : 0]$.
    These are the directions of the asymptotes $y = x$ and $y = -x$. The hyperbola passes through infinity in those two
    directions and comes back on the other branch.

??? question "9. Find the conic through $(0,0)$, $(2,0)$, $(0,2)$, $(2,2)$ and $(1,3)$. Is it an ellipse, parabola or hyperbola?"

    From $(0,0)$: $f = 0$. From $(2,0)$: $4a + 2d = 0$, so $d = -2a$. From $(0,2)$: $4c + 2e = 0$, so $e = -2c$. From $(2,2)$:
    $4a + 4b + 4c + 2d + 2e = 0$, i.e. $4b = 0$, so $b = 0$. From $(1,3)$: $a + 9c + d + 3e = a + 9c - 2a - 6c = -a + 3c = 0$, so
    $a = 3c$. Taking $c = 1$: $3x^2 + y^2 - 6x - 2y = 0$, i.e. $3(x - 1)^2 + (y - 1)^2 = 4$. It is an ellipse
    ($b^2 - 4ac = -12 < 0$), centred at $(1, 1)$. *Check:* $(1, 3)$: $0 + 4 = 4$.

??? question "10. Prove that a projective transformation of the line $\mathbb{RP}^1$ that fixes three distinct points is the identity."

    Send the three points to $0, 1, \infty$ by a projective map; it is enough to treat $g$ fixing $0, 1, \infty$. Write
    $g(x) = (px + q)/(rx + s)$. $g(\infty) = \infty$ forces $r = 0$; $g(0) = 0$ forces $q = 0$; so $g(x) = (p/s)x$, and
    $g(1) = 1$ forces $p = s$. So $g(x) = x$. (Alternatively: $g$ preserves cross-ratio, so $(0, 1; \infty, x) = (0, 1; \infty, g(x))$,
    and $x \mapsto (0, 1; \infty, x)$ is one-to-one.)

??? question "11. Count the symmetries of the Fano plane a second way, by counting ordered quadrangles (four points, no three on a line)."

    A symmetry is an invertible matrix over $\mathbb{F}_2$ (Theorem 18.2 holds over any field; over $\mathbb{F}_2$ scalars are
    trivial). Counting matrices: $7 \cdot 6 \cdot 4 = 168$. Counting ordered quadrangles instead: choose $P_1$ (7 ways),
    $P_2 \neq P_1$ (6), $P_3$ off the line $P_1P_2$ (7 − 3 = 4), and $P_4$ off the three lines $P_1P_2$, $P_1P_3$, $P_2P_3$, which
    together contain 6 points, so 1 way. That is $7 \cdot 6 \cdot 4 \cdot 1 = 168$ ordered quadrangles, and by Theorem 18.2
    exactly one symmetry sends a fixed quadrangle to each. The two counts agree.

??? question "12. A projective plane of order $n$ has $n^2 + n + 1$ points with $n + 1$ points on each line. Show that it has $n^2 + n + 1$ lines, by counting pairs (point, line through it) in two ways."

    Each point lies on $n + 1$ lines, so the number of incident pairs is $(n^2 + n + 1)(n + 1)$. Each line contains $n + 1$
    points, so the number is also $L(n + 1)$, where $L$ is the number of lines. Hence $L = n^2 + n + 1$. For $n = 2$ this is
    the 7 lines of the Fano plane; for $n = 3$, 13 lines.

## What you learned

- Perspective sends parallel lines to lines through a vanishing point; adding one point at infinity for each direction
  gives a plane where any two lines meet.
- The projective plane is the set of lines through the origin in 3-space; homogeneous coordinates $[x : y : z]$ make
  joins and meets a cross product, and projective transformations are invertible matrices up to scale.
- Desargues' and Pappus' theorems are pure incidence theorems; their proofs use coordinates, and they encode
  associativity and commutativity of the coordinate field.
- Duality swaps points and lines; every projective theorem has a dual, often a new theorem.
- The cross-ratio of four collinear points is the invariant of projection; $-1$ means harmonic division, constructible
  with a straightedge alone.
- All nondegenerate conics are projectively one; ellipse, parabola and hyperbola differ in how they meet the line at
  infinity. Pascal's and Brianchon's theorems are duals.
- Finite fields give finite projective planes: the Fano plane has 7 points and 168 symmetries; planes of order 6 and 10
  do not exist, and order 12 is open.

**Next:** [Chapter 19](19-Curves-and-Surfaces.md), where geometry becomes calculus: curves and surfaces in space, their
curvature, and Gauss's discovery that a surface's curvature can be measured from inside.

## Further reading

- H. S. M. Coxeter, *Projective Geometry*, 2nd edition, 1974. A short, classic synthetic treatment.
- H. S. M. Coxeter, *The Real Projective Plane*, 3rd edition, 1993.
- J. Richter-Gebert, *Perspectives on Projective Geometry: A Guided Tour Through Real and Complex Geometry*, 2011. Modern,
  computational and beautifully illustrated.
- M. A. Casse, *Projective Geometry: An Introduction*, 2006.
- R. Hartshorne, *Foundations of Projective Geometry*, 1967. On the axioms, Desargues and Pappus, and coordinates.
- D. Hilbert, *Foundations of Geometry* (Grundlagen der Geometrie), 1899; English translations from 1902.
- J. V. Field and J. J. Gray, *The Geometrical Work of Girard Desargues*, 1987. The history, with translations.
- C. W. H. Lam, "The search for a finite projective plane of order 10", *American Mathematical Monthly* 98, 1991.
- R. Hartley and A. Zisserman, *Multiple View Geometry in Computer Vision*, 2nd edition, 2004. Projective geometry in
  cameras and computer vision.
- On this site: the vectors and cross product of [Chapter 9](09-Vectors.md); [Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md)
  for finite fields; [Algebra, Chapter 13](../algebra/13-Groups.md) for groups;
  the U of T guides [MAT240H1 Unit 4: Linear Transformations](../../uoft/MAT240H1/unit04.md) and
  [MAT247H1 Unit 10: Bilinear and Quadratic Forms](../../uoft/MAT247H1/unit10.md) (Sylvester's law behind 18.6);
  the gentler [scale drawings lesson](../../topics/geometry/level-5/04-dilations-scale-drawings.md); and the
  [cryptography book](https://cryptography.akadian.ca/book/), whose elliptic-curve chapters compute in projective coordinates.
