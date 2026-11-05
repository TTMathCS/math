# 17. Vector calculus

*Wind has a speed and a direction at every point of the sky; so do the flow of water in a river, the pull of
gravity around a planet, and the electric field around a charge. These are vector fields. Two natural questions
about them have integrals for answers: how much work does a field do on something moving along a path, and how much
of a fluid flows across a surface each second? In this chapter you meet line integrals and surface integrals, find
which fields have a potential (like height for gravity), and prove the theorem of Green that links a boundary to the
region inside it. Then you see its big brothers, the divergence theorem and Stokes's theorem, read Maxwell's
equations of electromagnetism in words, and finish with differential forms, the language in which all of these
theorems, and the fundamental theorem of calculus itself, become one statement.*

!!! abstract "In this chapter"
    **You will learn:**

    - vector fields and their flow lines, and the two derivatives of a field: divergence and curl
    - line integrals of functions and of vector fields (work), and the fundamental theorem for line integrals
    - conservative fields and potentials: when a field is a gradient, with the test and its famous exception
    - Green's theorem, with a proof for rectangles, and how it computes areas
    - surface integrals and flux
    - the divergence theorem and Stokes's theorem: what they say and why they are true
    - Maxwell's equations in words, and the one-page idea of differential forms

    **You need:** [Chapter 15](15-Functions-of-Several-Variables.md) (partial derivatives, gradient, chain rule) and
    [Chapter 16](16-Multiple-Integrals.md) (double and triple integrals, polar and spherical coordinates). Dot and
    cross products as in [Geometry, Chapter 9](../geometry/09-Vectors.md). Parametrised curves and surfaces as in
    [Geometry, Chapter 19](../geometry/19-Curves-and-Surfaces.md) help but are not required.

    **Levels:** 17.1 and 17.2 are intermediate to advanced; 17.3 to 17.5 are advanced (second-year university);
    17.6 is a guided tour; 17.7 is expert, in outline.

## 17.1 Vector fields

A **vector field** on a region of the plane assigns a vector $\mathbf F(x, y) = (P(x, y), Q(x, y))$ to each point; in
space, $\mathbf F(x, y, z) = (P, Q, R)$. You draw it by putting a small arrow at each of many points. The functions
$P, Q, R$ are its **components**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 280" role="img" aria-label="The rotation field F equals (minus y, x): at each grid point an arrow perpendicular to the line from the origin, pointing anticlockwise, longer farther out. Dashed circles of radius 1 and 2 are flow lines.">
  <line x1="80" y1="140" x2="340" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="210" y1="10" x2="210" y2="270" stroke="currentColor" stroke-width="1"/>
  <circle cx="210" cy="140" r="50" fill="none" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="210" cy="140" r="100" fill="none" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="110.0" y1="240.0" x2="127.1" y2="257.1" stroke="#eea66f" stroke-width="2"/>
  <polygon points="132.0,262.0 124.6,259.5 129.5,254.6" fill="#eea66f"/>
  <circle cx="110.0" cy="240.0" r="2" fill="currentColor"/>
  <line x1="110.0" y1="190.0" x2="117.9" y2="205.7" stroke="#eea66f" stroke-width="2"/>
  <polygon points="121.0,212.0 114.7,207.3 121.0,204.2" fill="#eea66f"/>
  <circle cx="110.0" cy="190.0" r="2" fill="currentColor"/>
  <line x1="110.0" y1="140.0" x2="110.0" y2="155.0" stroke="#eea66f" stroke-width="2"/>
  <polygon points="110.0,162.0 106.5,155.0 113.5,155.0" fill="#eea66f"/>
  <circle cx="110.0" cy="140.0" r="2" fill="currentColor"/>
  <line x1="110.0" y1="90.0" x2="102.1" y2="105.7" stroke="#eea66f" stroke-width="2"/>
  <polygon points="99.0,112.0 99.0,104.2 105.3,107.3" fill="#eea66f"/>
  <circle cx="110.0" cy="90.0" r="2" fill="currentColor"/>
  <line x1="110.0" y1="40.0" x2="92.9" y2="57.1" stroke="#eea66f" stroke-width="2"/>
  <polygon points="88.0,62.0 90.5,54.6 95.4,59.5" fill="#eea66f"/>
  <circle cx="110.0" cy="40.0" r="2" fill="currentColor"/>
  <line x1="160.0" y1="240.0" x2="175.7" y2="247.9" stroke="#eea66f" stroke-width="2"/>
  <polygon points="182.0,251.0 174.2,251.0 177.3,244.7" fill="#eea66f"/>
  <circle cx="160.0" cy="240.0" r="2" fill="currentColor"/>
  <line x1="160.0" y1="190.0" x2="166.1" y2="196.1" stroke="#eea66f" stroke-width="2"/>
  <polygon points="171.0,201.0 163.6,198.5 168.5,193.6" fill="#eea66f"/>
  <circle cx="160.0" cy="190.0" r="2" fill="currentColor"/>
  <line x1="160.0" y1="140.0" x2="160.0" y2="144.0" stroke="#eea66f" stroke-width="2"/>
  <polygon points="160.0,151.0 156.5,144.0 163.5,144.0" fill="#eea66f"/>
  <circle cx="160.0" cy="140.0" r="2" fill="currentColor"/>
  <line x1="160.0" y1="90.0" x2="153.9" y2="96.1" stroke="#eea66f" stroke-width="2"/>
  <polygon points="149.0,101.0 151.5,93.6 156.4,98.5" fill="#eea66f"/>
  <circle cx="160.0" cy="90.0" r="2" fill="currentColor"/>
  <line x1="160.0" y1="40.0" x2="144.3" y2="47.9" stroke="#eea66f" stroke-width="2"/>
  <polygon points="138.0,51.0 142.7,44.7 145.8,51.0" fill="#eea66f"/>
  <circle cx="160.0" cy="40.0" r="2" fill="currentColor"/>
  <line x1="210.0" y1="240.0" x2="225.0" y2="240.0" stroke="#eea66f" stroke-width="2"/>
  <polygon points="232.0,240.0 225.0,243.5 225.0,236.5" fill="#eea66f"/>
  <circle cx="210.0" cy="240.0" r="2" fill="currentColor"/>
  <line x1="210.0" y1="190.0" x2="214.0" y2="190.0" stroke="#eea66f" stroke-width="2"/>
  <polygon points="221.0,190.0 214.0,193.5 214.0,186.5" fill="#eea66f"/>
  <circle cx="210.0" cy="190.0" r="2" fill="currentColor"/>
  <line x1="210.0" y1="90.0" x2="206.0" y2="90.0" stroke="#eea66f" stroke-width="2"/>
  <polygon points="199.0,90.0 206.0,86.5 206.0,93.5" fill="#eea66f"/>
  <circle cx="210.0" cy="90.0" r="2" fill="currentColor"/>
  <line x1="210.0" y1="40.0" x2="195.0" y2="40.0" stroke="#eea66f" stroke-width="2"/>
  <polygon points="188.0,40.0 195.0,36.5 195.0,43.5" fill="#eea66f"/>
  <circle cx="210.0" cy="40.0" r="2" fill="currentColor"/>
  <line x1="260.0" y1="240.0" x2="275.7" y2="232.1" stroke="#eea66f" stroke-width="2"/>
  <polygon points="282.0,229.0 277.3,235.3 274.2,229.0" fill="#eea66f"/>
  <circle cx="260.0" cy="240.0" r="2" fill="currentColor"/>
  <line x1="260.0" y1="190.0" x2="266.1" y2="183.9" stroke="#eea66f" stroke-width="2"/>
  <polygon points="271.0,179.0 268.5,186.4 263.6,181.5" fill="#eea66f"/>
  <circle cx="260.0" cy="190.0" r="2" fill="currentColor"/>
  <line x1="260.0" y1="140.0" x2="260.0" y2="136.0" stroke="#eea66f" stroke-width="2"/>
  <polygon points="260.0,129.0 263.5,136.0 256.5,136.0" fill="#eea66f"/>
  <circle cx="260.0" cy="140.0" r="2" fill="currentColor"/>
  <line x1="260.0" y1="90.0" x2="253.9" y2="83.9" stroke="#eea66f" stroke-width="2"/>
  <polygon points="249.0,79.0 256.4,81.5 251.5,86.4" fill="#eea66f"/>
  <circle cx="260.0" cy="90.0" r="2" fill="currentColor"/>
  <line x1="260.0" y1="40.0" x2="244.3" y2="32.1" stroke="#eea66f" stroke-width="2"/>
  <polygon points="238.0,29.0 245.8,29.0 242.7,35.3" fill="#eea66f"/>
  <circle cx="260.0" cy="40.0" r="2" fill="currentColor"/>
  <line x1="310.0" y1="240.0" x2="327.1" y2="222.9" stroke="#eea66f" stroke-width="2"/>
  <polygon points="332.0,218.0 329.5,225.4 324.6,220.5" fill="#eea66f"/>
  <circle cx="310.0" cy="240.0" r="2" fill="currentColor"/>
  <line x1="310.0" y1="190.0" x2="317.9" y2="174.3" stroke="#eea66f" stroke-width="2"/>
  <polygon points="321.0,168.0 321.0,175.8 314.7,172.7" fill="#eea66f"/>
  <circle cx="310.0" cy="190.0" r="2" fill="currentColor"/>
  <line x1="310.0" y1="140.0" x2="310.0" y2="125.0" stroke="#eea66f" stroke-width="2"/>
  <polygon points="310.0,118.0 313.5,125.0 306.5,125.0" fill="#eea66f"/>
  <circle cx="310.0" cy="140.0" r="2" fill="currentColor"/>
  <line x1="310.0" y1="90.0" x2="302.1" y2="74.3" stroke="#eea66f" stroke-width="2"/>
  <polygon points="299.0,68.0 305.3,72.7 299.0,75.8" fill="#eea66f"/>
  <circle cx="310.0" cy="90.0" r="2" fill="currentColor"/>
  <line x1="310.0" y1="40.0" x2="292.9" y2="22.9" stroke="#eea66f" stroke-width="2"/>
  <polygon points="288.0,18.0 295.4,20.5 290.5,25.4" fill="#eea66f"/>
  <circle cx="310.0" cy="40.0" r="2" fill="currentColor"/>
  <text x="346" y="144" font-size="12" fill="currentColor">x</text>
  <text x="216" y="18" font-size="12" fill="currentColor">y</text>
</svg>
</div>

**Example 1 (rotation).** $\mathbf F(x, y) = (-y, x)$. At $(1, 0)$ the arrow is $(0, 1)$, straight up; at $(0, 1)$ it
is $(-1, 0)$, to the left. Each arrow is perpendicular to the position vector (their dot product is
$-xy + yx = 0$) and as long as the distance to the origin. It is the velocity field of a disc spinning
anticlockwise at one radian per unit time.

**Example 2 (radial).** $\mathbf F(x, y) = (x, y)$: every arrow points straight away from the origin. It is the
velocity of a uniformly expanding sheet.

**Example 3 (gravity).** A planet of mass $M$ at the origin pulls a unit mass at position $\mathbf r$ with force

$$
\mathbf F(\mathbf r) = -\frac{GM}{|\mathbf r|^3}\,\mathbf r,
$$

pointing towards the centre, of size $GM/|\mathbf r|^2$. The electric field of a point charge has the same
inverse-square form.

**Example 4 (gradient fields).** Every differentiable function $f$ gives a vector field $\nabla f$. On a map of a
hillside the gradient of height points uphill. A field of this kind is called a **gradient field**, and $f$ is its
**potential**. Gravity is one: $\mathbf F = \nabla\left(\frac{GM}{|\mathbf r|}\right)$, as you can check by
differentiating (exercise 1). (Physicists usually put a minus sign into the potential energy, $U = -GM/|\mathbf r|$,
so that $\mathbf F = -\nabla U$; the mathematics is the same.)

A **flow line** of $\mathbf F$ is a curve $\mathbf r(t)$ whose velocity is the field at each point:
$\mathbf r'(t) = \mathbf F(\mathbf r(t))$, a system of differential equations ([Chapter 14](14-Differential-Equations.md)).
For the rotation field the flow lines are circles $\mathbf r(t) = (a\cos t, a\sin t)$, drawn dashed above; for the
radial field they are rays, $\mathbf r(t) = e^t\mathbf r_0$.

### Divergence and curl

A field has two natural derivatives, which measure two different things it can do to a fluid. Write the operator
$\nabla = \left(\frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z}\right)$ and treat
it like a vector.

The **divergence** of $\mathbf F = (P, Q, R)$ is the number

$$
\operatorname{div}\mathbf F = \nabla\cdot\mathbf F = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} .
$$

The **curl** is the vector

$$
\operatorname{curl}\mathbf F = \nabla\times\mathbf F = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) .
$$

For a plane field $(P, Q)$, think of it as $(P, Q, 0)$ with no dependence on $z$; then the curl is
$(0, 0, Q_x - P_y)$, and the number $Q_x - P_y$ is called the **scalar curl**.

What they mean is made precise in 17.5; for now, the pictures. **Divergence** measures how much a field spreads out
from a point: the rate at which fluid is created there, per unit volume. The radial field $(x, y, z)$ has
divergence 3 everywhere; the rotation field $(-y, x, 0)$ has divergence $0 + 0 = 0$, since spinning neither creates
nor destroys fluid. **Curl** measures rotation: a tiny paddle wheel placed in the flow spins about the direction of
the curl, at a rate proportional to its length. The rotation field has curl $(0, 0, 1 - (-1)) = (0, 0, 2)$, twice
the angular speed; the radial field has curl $\mathbf 0$.

Two identities, valid for $C^2$ functions and fields, follow from the equality of mixed partial derivatives
([Chapter 15](15-Functions-of-Several-Variables.md)):

$$
\operatorname{curl}(\nabla f) = \mathbf 0, \qquad \operatorname{div}(\operatorname{curl}\mathbf F) = 0 .
$$

For instance, the $z$-component of $\operatorname{curl}\nabla f$ is $\partial_x(f_y) - \partial_y(f_x) = f_{yx} - f_{xy} = 0$.
Gradients do not swirl, and curls have no sources. The divergence of a gradient is not zero in general; it is the
**Laplacian** $\nabla^2 f = f_{xx} + f_{yy} + f_{zz}$, which appears in the heat equation
([Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md)) and in most of mathematical physics.

## 17.2 Line integrals and conservative fields

### Integrating along a curve

Let $C$ be a curve given by a $C^1$ parametrisation $\mathbf r(t)$, $a \le t \le b$. The **line integral of a function**
$f$ along $C$ is

$$
\int_C f\,ds = \int_a^b f(\mathbf r(t))\,|\mathbf r'(t)|\,dt,
$$

where $ds = |\mathbf r'(t)|\,dt$ is the element of arc length ([Chapter 11](11-Applications-of-Integrals.md)). With
$f = 1$ it is the length of $C$; with $f$ the density of a wire, its mass. Changing the parametrisation (for example,
walking the same curve twice as fast) does not change the answer, by the substitution rule.

**Example 5.** The helix $\mathbf r(t) = (\cos t, \sin t, t)$, $0 \le t \le 2\pi$: $|\mathbf r'| = |(-\sin t, \cos t, 1)| = \sqrt2$,
so its length is $2\pi\sqrt2$.

### Work

A force field $\mathbf F$ pushes an object along $C$. Over a short piece of path $\Delta\mathbf r$ the work done is
force times distance in the direction of motion, $\mathbf F\cdot\Delta\mathbf r$. Adding up:

$$
\int_C\mathbf F\cdot d\mathbf r = \int_a^b\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt .
$$

This is the **line integral of a vector field**. In components it is also written $\int_C P\,dx + Q\,dy + R\,dz$,
since $d\mathbf r = (dx, dy, dz) = (x'(t), y'(t), z'(t))\,dt$. It does not depend on the parametrisation, *except for
its direction*: running the curve backwards changes the sign. A curve with a chosen direction is **oriented**. If
the curve is closed (it ends where it starts), the integral is written $\oint_C$ and is called the **circulation** of
$\mathbf F$ around $C$.

**Example 6.** The rotation field $\mathbf F = (-y, x)$ around the unit circle anticlockwise, $\mathbf r = (\cos t, \sin t)$:

$$
\oint_C\mathbf F\cdot d\mathbf r = \int_0^{2\pi}(-\sin t, \cos t)\cdot(-\sin t, \cos t)\,dt = \int_0^{2\pi}1\,dt = 2\pi .
$$

The field always points along the motion, so the work is positive.

**Example 7 (path dependence).** Take $\mathbf F = (-y, x)$ again, from $(0, 0)$ to $(1, 1)$. Along the straight line
$\mathbf r = (t, t)$: $\mathbf F\cdot\mathbf r' = (-t, t)\cdot(1, 1) = 0$, so the work is 0. Along the parabola
$\mathbf r = (t, t^2)$: $(-t^2, t)\cdot(1, 2t) = t^2$, so the work is $\tfrac13$. Same ends, different answers.

**Example 8 (path independence).** Now $\mathbf G = (y, x)$, from $(0, 0)$ to $(1, 1)$. Along the line:
$(t, t)\cdot(1, 1) = 2t$, integral 1. Along the parabola: $(t^2, t)\cdot(1, 2t) = 3t^2$, integral 1. The same. The
reason: $\mathbf G = \nabla(xy)$.

### The fundamental theorem for line integrals

**Theorem.** If $f$ is $C^1$ and $C$ is a $C^1$ curve from $A$ to $B$, then

$$
\int_C\nabla f\cdot d\mathbf r = f(B) - f(A) .
$$

*Proof.* By the chain rule, $\frac{d}{dt}f(\mathbf r(t)) = \nabla f(\mathbf r(t))\cdot\mathbf r'(t)$. So the line
integral is $\int_a^b\frac{d}{dt}f(\mathbf r(t))\,dt = f(\mathbf r(b)) - f(\mathbf r(a))$ by the fundamental theorem
of calculus ([Chapter 9](09-The-Fundamental-Theorem.md)). (For a curve made of several $C^1$ pieces, add the
pieces; the middle values cancel.) $\square$

So the work done by a gradient field depends only on the endpoints, and is zero around every closed curve. A field
with this property is called **conservative**, because in physics it means energy is conserved: the work done by
gravity going down is given back going up.

**Theorem.** On an open connected region (one in which any two points can be joined by a path), the following are
equivalent for a continuous field $\mathbf F$:

1. $\mathbf F = \nabla f$ for some function $f$;
2. $\int_C\mathbf F\cdot d\mathbf r$ depends only on the endpoints of $C$;
3. $\oint_C\mathbf F\cdot d\mathbf r = 0$ for every closed curve $C$.

*Proof.* 1 ⇒ 2 is the theorem above. 2 ⇔ 3: a closed curve is two paths from $A$ to $B$, one of them run backwards;
path independence says they have equal integrals, so the closed one is 0, and conversely. 2 ⇒ 1 is the interesting
direction: you must *build* a potential. Fix a point $A$ and define $f(X) = \int_C\mathbf F\cdot d\mathbf r$ for any
path $C$ from $A$ to $X$, well defined by 2. To find $\partial f/\partial x$ at $X$, extend a path to $X$ by a short
horizontal segment from $X$ to $X + h\mathbf e_1$:

$$
f(X + h\mathbf e_1) - f(X) = \int_0^h P(X + s\mathbf e_1)\,ds,
$$

since along the segment $d\mathbf r = (ds, 0, 0)$. Dividing by $h$ and letting $h \to 0$ gives $f_x = P$ by the
fundamental theorem. The same with $y$ and $z$ gives $\nabla f = \mathbf F$. $\square$

**A test.** If $\mathbf F = \nabla f$ with $f$ of class $C^2$, then $\operatorname{curl}\mathbf F = \operatorname{curl}\nabla f = \mathbf 0$.
In the plane: $Q_x = P_y$. So **a field with nonzero curl is not conservative**. The rotation field has scalar curl
$2$, which is why Example 7 depended on the path.

Is the converse true? Is every curl-free field a gradient? **Not always.** On the plane with the origin removed, take

$$
\mathbf F(x, y) = \left(\frac{-y}{x^2 + y^2}, \frac{x}{x^2 + y^2}\right) .
$$

Then $Q_x = \frac{(x^2 + y^2) - 2x^2}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2+y^2)^2}$ and $P_y$ is the same, so the
curl is 0 everywhere in the region. But around the unit circle, $\mathbf F\cdot\mathbf r' = \sin^2t + \cos^2t = 1$,
and $\oint\mathbf F\cdot d\mathbf r = 2\pi \neq 0$. So $\mathbf F$ is not a gradient on the punctured plane. Locally it
is: it is the gradient of the polar angle $\theta$; but $\theta$ cannot be defined continuously all the way around the
origin, since it gains $2\pi$ on each lap. The line integral counts how many times a closed curve winds around the
hole, times $2\pi$.

The converse does hold on regions without holes. A region is **simply connected** if every closed curve in it can
be shrunk to a point without leaving it: a disc or a ball or all of space is; a ring or the punctured plane is not.

**Theorem.** On a simply connected open region, a $C^1$ field with zero curl is conservative.

In the plane this follows from Green's theorem (17.3): if $Q_x = P_y$ everywhere inside a closed curve, the
circulation is the integral of 0 over the inside. In general it is a statement about topology, and the failure on
the punctured plane is the first example of **de Rham cohomology**, which measures holes by asking which curl-free
fields fail to be gradients.

**Finding a potential.** For $\mathbf F = (2xy + 1, x^2 + 3y^2)$: $P_y = 2x = Q_x$, and the plane is simply connected,
so a potential exists. Integrate $P$ in $x$: $f = x^2y + x + g(y)$. Then $f_y = x^2 + g'(y)$ must equal
$x^2 + 3y^2$, so $g = y^3$, and $f = x^2y + x + y^3$ (plus any constant).

### Escape velocity

Gravity is conservative with potential $GM/r$, so the work it does on a unit mass moving from the surface (distance
$R$ from the centre) out to infinity is $\lim_{r\to\infty}\left(\frac{GM}{r}\right) - \frac{GM}{R} = -\frac{GM}{R}$,
whatever the path. A projectile escapes if its kinetic energy per unit mass, $\tfrac12v^2$, is at least $GM/R$, so the
**escape velocity** is

$$
v_{\text{esc}} = \sqrt{\frac{2GM}{R}} .
$$

For Mars, $GM \approx 4.283 \times 10^{13}$ m³/s² and $R \approx 3390$ km, giving about 5.0 km/s; for Earth it is about
11.2 km/s. That difference, together with the thin atmosphere, is why leaving Mars takes far less fuel than leaving
Earth (compare the rocket equation in [Chapter 14](14-Differential-Equations.md)).

## 17.3 Green's theorem

*Level: advanced.*

The fundamental theorem of calculus says that the integral of a derivative over an interval is determined by the
values at the two ends, the boundary of the interval. Green's theorem is the same idea one dimension up: the
integral of a kind of derivative over a plane region is determined by a line integral around its boundary.

Let $D$ be a bounded region in the plane whose boundary $\partial D$ is a closed curve made of finitely many smooth
pieces, oriented **positively**: anticlockwise, so that $D$ is on your left as you walk.

**Green's theorem.** If $P$ and $Q$ are $C^1$ on an open set containing $D$ and its boundary, then

$$
\oint_{\partial D}P\,dx + Q\,dy = \iint_D\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA .
$$

In words: the circulation of $\mathbf F$ around the boundary equals the integral of its scalar curl over the inside.

*Proof for a rectangle* $D = [a, b] \times [c, d]$. Treat the two terms separately. First the $Q$ term. By Fubini
and the fundamental theorem of calculus in $x$,

$$
\iint_D\frac{\partial Q}{\partial x}\,dA = \int_c^d\left(\int_a^b\frac{\partial Q}{\partial x}\,dx\right)dy = \int_c^d\left(Q(b, y) - Q(a, y)\right)dy .
$$

Now compute $\oint Q\,dy$ around the rectangle, anticlockwise. On the bottom and top edges $y$ is constant, so
$dy = 0$ and they contribute nothing. The right edge goes up, from $(b, c)$ to $(b, d)$, contributing
$\int_c^d Q(b, y)\,dy$. The left edge goes down, from $(a, d)$ to $(a, c)$, contributing $-\int_c^d Q(a, y)\,dy$. The
total is exactly the right side above. So $\oint Q\,dy = \iint Q_x\,dA$.

The $P$ term is the same with the roles of $x$ and $y$ exchanged:

$$
-\iint_D\frac{\partial P}{\partial y}\,dA = -\int_a^b\left(P(x, d) - P(x, c)\right)dx,
$$

and around the boundary only the bottom edge (left to right, $+\int_a^b P(x, c)\,dx$) and the top edge (right to left,
$-\int_a^b P(x, d)\,dx$) contribute to $\oint P\,dx$. They match. Adding the two results proves the theorem for
rectangles. $\square$

**From rectangles to other regions.** The same proof works for any region that is both of type I and type II
([Chapter 16](16-Multiple-Integrals.md)), such as a disc or a triangle: for the $P$ term, describe $D$ as
$g_1(x) \le y \le g_2(x)$ and integrate in $y$ first; the boundary splits into a bottom curve and a top curve, and any
vertical sides give $dx = 0$. More complicated regions can be cut into such pieces. On each cut, the two neighbouring
pieces traverse the cut in opposite directions, so the line integrals along it cancel, and only the outer boundary
survives. A proof for all regions bounded by piecewise smooth curves needs more care (and the Jordan curve theorem
to say what the "inside" is); see the further reading.

**Regions with holes.** For a ring, the boundary has two pieces: the outer circle anticlockwise and the inner circle
*clockwise* (still keeping the region on the left). This explains the punctured-plane example: for
$\mathbf F = (-y, x)/(x^2 + y^2)$ on the ring between two circles around the origin, the curl is 0, so the
anticlockwise circulations around the two circles are equal: both are $2\pi$. Green's theorem cannot be applied to the
whole disc because $\mathbf F$ is not defined at the origin.

**Example 9 (checking).** $\mathbf F = (-y, x)$ on the unit disc: $Q_x - P_y = 2$, so the right side is $2\pi$,
matching Example 6.

**Example 10.** $\oint_C xy\,dx + x^2\,dy$ around the triangle with corners $(0,0)$, $(1,0)$, $(1,1)$, anticlockwise.
Green: $Q_x - P_y = 2x - x = x$, and $\iint_T x\,dA = \int_0^1\int_0^x x\,dy\,dx = \int_0^1 x^2dx = \tfrac13$. Directly:
the bottom edge gives 0 ($y = 0$, $dy = 0$); the right edge $x = 1$, $y$ from 0 to 1, gives $\int_0^1 1\,dy = 1$; the
diagonal from $(1,1)$ back to $(0,0)$, with $x = y = s$, gives $\int_1^0 (s^2 + s^2)\,ds = -\tfrac23$. Total
$\tfrac13$. Check.

### Areas from boundaries

If $Q_x - P_y = 1$, Green's theorem turns the area of $D$ into a boundary integral. Three choices work:
$(P, Q) = (0, x)$, $(-y, 0)$, or the symmetric average:

$$
\text{area}(D) = \oint_{\partial D}x\,dy = -\oint_{\partial D}y\,dx = \frac12\oint_{\partial D}x\,dy - y\,dx .
$$

**Example 11 (ellipse).** $\mathbf r = (a\cos t, b\sin t)$: $x\,dy - y\,dx = (ab\cos^2t + ab\sin^2t)\,dt = ab\,dt$, so the
area is $\tfrac12\cdot 2\pi ab = \pi ab$, as in [Chapter 16](16-Multiple-Integrals.md).

**Example 12 (polygons: the shoelace formula).** For a polygon with vertices $(x_1, y_1), \dots, (x_n, y_n)$ in
anticlockwise order, computing $\tfrac12\oint x\,dy - y\,dx$ edge by edge gives

$$
\text{area} = \frac12\sum_{i=1}^{n}(x_iy_{i+1} - x_{i+1}y_i), \qquad (x_{n+1}, y_{n+1}) = (x_1, y_1) .
$$

For the triangle $(0,0)$, $(4,0)$, $(1,3)$: $\tfrac12(0 + 12 - 0) = 6$, which is $\tfrac12\cdot4\cdot3$.

This is also how a **planimeter** works: a mechanical instrument, used for over a century by surveyors and
engineers, whose wheel measures the line integral as you trace the boundary of a shape on a map, and so reads off
its area.

**History.** George Green, a self-taught miller's son from Nottingham, published the theorem (in a form suited to
electricity) in *An Essay on the Application of Mathematical Analysis to the Theories of Electricity and Magnetism*
(1828), printed privately for a small number of subscribers. It was largely unknown until William Thomson (later
Lord Kelvin) found copies and had it republished in the 1850s. Cauchy stated the two-dimensional theorem in 1846, and
Bernhard Riemann gave a proof in 1851.

## 17.4 Surface integrals and flux

*Level: advanced.*

### Parametrised surfaces and area

A **parametrised surface** is a $C^1$ map $\mathbf r(u, v)$ from a region $E$ of the $uv$-plane into space. Holding
$v$ fixed and moving $u$ traces a curve on the surface with velocity $\mathbf r_u = \partial\mathbf r/\partial u$;
similarly $\mathbf r_v$. A small rectangle $\Delta u \times \Delta v$ in $E$ is carried to a small curved patch that is
nearly the parallelogram spanned by $\mathbf r_u\Delta u$ and $\mathbf r_v\Delta v$, whose area is
$|\mathbf r_u\times\mathbf r_v|\,\Delta u\,\Delta v$. So

$$
dS = |\mathbf r_u\times\mathbf r_v|\,du\,dv, \qquad \text{area} = \iint_E|\mathbf r_u\times\mathbf r_v|\,du\,dv .
$$

The vector $\mathbf r_u\times\mathbf r_v$ is perpendicular to the surface (it is perpendicular to both tangent
vectors), so it also gives a **normal vector**.

**Example 13 (the sphere).** $\mathbf r(\varphi, \theta) = (R\sin\varphi\cos\theta, R\sin\varphi\sin\theta, R\cos\varphi)$,
$0 \le \varphi \le \pi$, $0 \le \theta \le 2\pi$. A computation gives
$\mathbf r_\varphi\times\mathbf r_\theta = R\sin\varphi\,\mathbf r$, with length $R^2\sin\varphi$ (for
$0 \le \varphi \le \pi$). So the area is

$$
\int_0^{2\pi}\int_0^{\pi}R^2\sin\varphi\,d\varphi\,d\theta = 4\pi R^2 .
$$

The normal $R\sin\varphi\,\mathbf r$ points outwards, along the radius.

**Example 14 (a graph).** For a surface $z = g(x, y)$, use $\mathbf r(x, y) = (x, y, g(x, y))$. Then
$\mathbf r_x\times\mathbf r_y = (-g_x, -g_y, 1)$ and $dS = \sqrt{1 + g_x^2 + g_y^2}\,dx\,dy$. For the paraboloid
$z = x^2 + y^2$ over the unit disc, in polar coordinates, the area is
$\int_0^{2\pi}\int_0^1\sqrt{1 + 4r^2}\,r\,dr\,d\theta = \frac{\pi}{6}\left(5\sqrt5 - 1\right) \approx 5.33$.

The **surface integral of a function** $f$ is $\iint_S f\,dS = \iint_E f(\mathbf r(u,v))|\mathbf r_u\times\mathbf r_v|\,du\,dv$:
with $f$ a density, it is the mass of a curved sheet.

### Flux

Fluid with velocity field $\mathbf F$ flows through a surface $S$. How much volume crosses it per second? Through a
small flat patch of area $\Delta S$ with unit normal $\mathbf n$, the fluid that crosses in one second fills a slanted
box with base $\Delta S$ and height $\mathbf F\cdot\mathbf n$ (only the normal part of the velocity carries fluid
across). So the total is the **flux**

$$
\iint_S\mathbf F\cdot\mathbf n\,dS = \iint_E\mathbf F(\mathbf r(u, v))\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv .
$$

The second form is convenient: the length of $\mathbf r_u\times\mathbf r_v$ cancels against the normalisation of
$\mathbf n$. Its sign depends on which way $\mathbf n$ points, so a surface for flux must be **oriented**: a
continuous choice of unit normal. Closed surfaces such as spheres are oriented outwards by convention. Not every
surface can be oriented: on a **Möbius strip**, if you carry a normal vector once around the strip it comes back
pointing the opposite way, so "flux through a Möbius strip" makes no sense.

**Example 15.** The flux of $\mathbf F = (x, y, z)$ out of the sphere of radius $R$. On the sphere, $\mathbf n = \mathbf r/R$
and $\mathbf F\cdot\mathbf n = |\mathbf r|^2/R = R$. So the flux is $R\cdot4\pi R^2 = 4\pi R^3$.

**Example 16 (inverse square).** The flux of $\mathbf E = \mathbf r/|\mathbf r|^3$ out of the sphere of radius $R$:
$\mathbf E\cdot\mathbf n = \frac{R^2}{R^3\cdot R} = \frac{1}{R^2}$, so the flux is $\frac{1}{R^2}\cdot4\pi R^2 = 4\pi$,
**the same for every sphere**. The field weakens like $1/R^2$ while the sphere's area grows like $R^2$. This is the
geometric heart of Gauss's law in 17.6.

## 17.5 The divergence theorem and Stokes's theorem

*Level: advanced.*

Green's theorem has two generalisations to three dimensions, one for each of the two derivatives of a field.

### The divergence theorem

**Divergence theorem (Gauss, Ostrogradsky).** Let $E$ be a bounded solid region whose boundary $\partial E$ is a closed
surface made of finitely many smooth pieces, oriented outwards, and let $\mathbf F$ be $C^1$ on an open set containing
$E$. Then

$$
\iint_{\partial E}\mathbf F\cdot\mathbf n\,dS = \iiint_E\operatorname{div}\mathbf F\,dV .
$$

In words: **the total flux out of a closed surface equals the total amount of source inside it.** If fluid is
created at rate $\operatorname{div}\mathbf F$ per unit volume, all of it must leave through the boundary.

*Proof for a box* $E = [a_1, b_1] \times [a_2, b_2] \times [a_3, b_3]$, exactly as for Green. Take the $R$ term (the
$z$-component). By Fubini and the fundamental theorem in $z$,

$$
\iiint_E\frac{\partial R}{\partial z}\,dV = \iint\left(R(x, y, b_3) - R(x, y, a_3)\right)dx\,dy .
$$

On the top face the outward normal is $(0, 0, 1)$, so the flux of $(0, 0, R)$ through it is $\iint R(x, y, b_3)\,dx\,dy$;
on the bottom face the normal is $(0, 0, -1)$, giving $-\iint R(x, y, a_3)\,dx\,dy$; on the four side faces the
normal is horizontal, so $(0, 0, R)\cdot\mathbf n = 0$. The fluxes match. The $P$ and $Q$ terms are the same with
the axes permuted. $\square$ As for Green, the proof extends to solids that are "simple" in all three directions,
and by cutting and cancelling to much more general solids.

**What divergence means.** Apply the theorem to a small ball $B_\varepsilon$ of radius $\varepsilon$ around a point
$\mathbf p$. Since $\operatorname{div}\mathbf F$ is continuous, it is nearly constant on the ball, so

$$
\operatorname{div}\mathbf F(\mathbf p) = \lim_{\varepsilon\to0}\frac{1}{\operatorname{vol}(B_\varepsilon)}\iint_{\partial B_\varepsilon}\mathbf F\cdot\mathbf n\,dS :
$$

divergence is outward flux per unit volume, a definition that does not depend on coordinates.

**Example 17 (checking).** $\mathbf F = (x, y, z)$ and the ball of radius $R$: $\operatorname{div}\mathbf F = 3$, and
$\iiint 3\,dV = 3\cdot\frac43\pi R^3 = 4\pi R^3$, matching Example 15.

**Example 18 (a shortcut).** The flux of $\mathbf F = (x, y, z^2)$ out of the unit cube $[0, 1]^3$ has six faces to
compute directly. With the theorem: $\operatorname{div}\mathbf F = 2 + 2z$, and
$\iiint(2 + 2z)\,dV = 2 + 1 = 3$.

**Gauss's law.** For $\mathbf E = \mathbf r/|\mathbf r|^3$, a direct computation gives $\operatorname{div}\mathbf E = 0$
away from the origin. So by the divergence theorem the flux of $\mathbf E$ out of *any* closed surface not enclosing
the origin is 0, and the flux out of any surface enclosing it equals the flux out of a small sphere around the origin
(apply the theorem to the region between them), which is $4\pi$ by Example 16. The total flux of an inverse-square
field through a closed surface measures exactly what is inside.

### Stokes's theorem

**Stokes's theorem.** Let $S$ be an oriented piecewise smooth surface whose boundary $\partial S$ is a closed curve,
oriented so that walking along it with your head in the direction of $\mathbf n$, the surface is on your left. If
$\mathbf F$ is $C^1$ near $S$, then

$$
\oint_{\partial S}\mathbf F\cdot d\mathbf r = \iint_S(\operatorname{curl}\mathbf F)\cdot\mathbf n\,dS .
$$

In words: **the circulation around the edge equals the flux of the curl through the surface.** For a flat surface in
the $xy$-plane with $\mathbf n = (0, 0, 1)$, the right side is $\iint(Q_x - P_y)\,dA$, and this is Green's theorem.

*Why it is true.* Cut $S$ into tiny patches. Each is nearly flat, and Green's theorem in the patch's own plane says
that the circulation around its edge is about $(\operatorname{curl}\mathbf F\cdot\mathbf n)\,\Delta S$. Add up all the
patches: every interior edge is traversed twice, in opposite directions, and cancels, leaving the circulation around
the outer boundary. A rigorous proof for a parametrised surface pulls everything back to the $uv$-plane with the chain
rule and applies Green's theorem there; it is a page of careful computation (see Marsden and Tromba, or Spivak).

**What curl means.** Apply Stokes to a tiny disc of radius $\varepsilon$ centred at $\mathbf p$ with unit normal
$\mathbf n$: $(\operatorname{curl}\mathbf F)(\mathbf p)\cdot\mathbf n$ is the limit of the circulation around its
edge divided by its area $\pi\varepsilon^2$. So the component of the curl in any direction is the circulation per
unit area in the plane perpendicular to it, which is what a paddle wheel with that axis measures.

**Example 19 (checking).** $\mathbf F = (-y, x, 0)$ and the upper hemisphere of radius $R$, oriented outwards. Its
boundary is the equator, anticlockwise seen from above, and $\oint\mathbf F\cdot d\mathbf r = 2\pi R^2$ (as in
Example 6, scaled). The curl is $(0, 0, 2)$, and its flux through the hemisphere is $\iint 2n_z\,dS$. Since $n_z\,dS$
is the area of the shadow of a patch on the $xy$-plane, this is $2\cdot\pi R^2$. They agree. Notice that **any**
surface with the equator as its boundary would give the same answer, because the curl has no divergence: the flux
of a curl through a surface depends only on the surface's boundary.

**History.** Mikhail Ostrogradsky proved the divergence theorem in general form in the 1820s; Gauss had used special
cases in his work on gravitation, and Green had a version too. Stokes's theorem first appeared in a letter from
William Thomson to George Gabriel Stokes in 1850; Stokes set it as a question in the Smith's Prize examination at
Cambridge in 1854, and the name stuck.

<figure class="play" data-play="field" data-mode="spin"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Three vector fields: one that spins (curl), one that spreads (divergence) and a gradient (neither round a loop). Press Play to let dust drift.</figcaption></figure>

## 17.6 Maxwell's equations in words

*Level: a guided tour.*

The most famous use of the language of this chapter is electromagnetism. There is an electric field $\mathbf E$ and a
magnetic field $\mathbf B$ at every point and time. With $\rho$ the density of electric charge, $\mathbf J$ the
current density, and two constants of nature, $\varepsilon_0$ and $\mu_0$, **Maxwell's equations** in a vacuum with
charges and currents are:

$$
\nabla\cdot\mathbf E = \frac{\rho}{\varepsilon_0}, \qquad \nabla\cdot\mathbf B = 0, \qquad \nabla\times\mathbf E = -\frac{\partial\mathbf B}{\partial t}, \qquad \nabla\times\mathbf B = \mu_0\mathbf J + \mu_0\varepsilon_0\frac{\partial\mathbf E}{\partial t} .
$$

Each one, integrated over a region or a surface and turned by the divergence theorem or Stokes's theorem into a
statement about a boundary, becomes a law you can test.

1. **Gauss's law.** The flux of $\mathbf E$ out of any closed surface equals the charge inside, divided by
   $\varepsilon_0$. Charges are the sources of the electric field; for a point charge this gives the inverse-square law,
   by 17.5.
2. **No magnetic charges.** The flux of $\mathbf B$ out of any closed surface is zero: field lines of $\mathbf B$
   never start or end. Nobody has found a magnetic monopole.
3. **Faraday's law.** The circulation of $\mathbf E$ around a loop equals minus the rate of change of the magnetic flux
   through it. A changing magnetic field drives a current around a wire loop: this is how generators and
   transformers work.
4. **Ampère's law with Maxwell's correction.** The circulation of $\mathbf B$ around a loop is $\mu_0$ times the current
   through it, plus a term from the changing electric flux. James Clerk Maxwell added that last term; without it the
   equations would be inconsistent, because the divergence of a curl is 0 and charge must be conserved.

**Light.** In empty space ($\rho = 0$, $\mathbf J = \mathbf 0$), take the curl of Faraday's law and use Ampère's law:

$$
\nabla\times(\nabla\times\mathbf E) = -\frac{\partial}{\partial t}(\nabla\times\mathbf B) = -\mu_0\varepsilon_0\frac{\partial^2\mathbf E}{\partial t^2} .
$$

A vector identity (check it in components) says $\nabla\times(\nabla\times\mathbf E) = \nabla(\nabla\cdot\mathbf E) - \nabla^2\mathbf E$,
and $\nabla\cdot\mathbf E = 0$ here, so

$$
\nabla^2\mathbf E = \mu_0\varepsilon_0\frac{\partial^2\mathbf E}{\partial t^2},
$$

the **wave equation**, for waves travelling at speed $c = 1/\sqrt{\mu_0\varepsilon_0}$. With the measured values
$\mu_0 \approx 1.2566 \times 10^{-6}$ and $\varepsilon_0 \approx 8.854 \times 10^{-12}$ (in SI units), $c \approx 2.998 \times 10^8$
m/s: the speed of light. Maxwell made this computation in his paper "A Dynamical Theory of the Electromagnetic
Field" (1865) and concluded that light is an electromagnetic wave. The compact vector form above is due mainly to
Oliver Heaviside in the 1880s; Maxwell wrote his theory as twenty equations in components.

Radio is the same wave at a longer wavelength, and it is how we talk to spacecraft. Between Earth and Mars the
distance ranges from about 55 to about 400 million kilometres, so a radio signal takes from about 3 to about 22
minutes each way: a rover on Mars cannot be steered live, which is why rovers drive themselves between commands.

## 17.7 Differential forms in one page

*Level: expert, in outline.*

Look at the theorems of this chapter and of [Chapter 9](09-The-Fundamental-Theorem.md) together:

| Theorem | Integral of a derivative over... | equals an integral over the boundary |
| --- | --- | --- |
| Fundamental theorem of calculus | $\int_a^b f'\,dx$ over an interval | $f(b) - f(a)$, two points |
| Line integrals | $\int_C\nabla f\cdot d\mathbf r$ over a curve | $f(B) - f(A)$, two points |
| Green | $\iint_D(Q_x - P_y)\,dA$ over a region | $\oint P\,dx + Q\,dy$, a closed curve |
| Stokes | $\iint_S\operatorname{curl}\mathbf F\cdot\mathbf n\,dS$ over a surface | $\oint\mathbf F\cdot d\mathbf r$, a closed curve |
| Divergence | $\iiint_E\operatorname{div}\mathbf F\,dV$ over a solid | $\iint\mathbf F\cdot\mathbf n\,dS$, a closed surface |

They are one theorem. **Differential forms**, developed by Élie Cartan around 1900, are the language that says so.

- A **0-form** is a function $f$.
- A **1-form** is an expression $P\,dx + Q\,dy + R\,dz$: something you integrate along curves.
- A **2-form** is $A\,dy\wedge dz + B\,dz\wedge dx + C\,dx\wedge dy$: something you integrate over oriented surfaces.
- A **3-form** is $g\,dx\wedge dy\wedge dz$: something you integrate over solids.

The **wedge product** $\wedge$ is anticommutative: $dx\wedge dy = -dy\wedge dx$, and so $dx\wedge dx = 0$. The sign
records orientation; $dx\wedge dy$ is the signed area of the shadow of a patch on the $xy$-plane, which is why a
determinant (the Jacobian) appears when you change variables.

The **exterior derivative** $d$ turns $k$-forms into $(k+1)$-forms. It is defined by $df = f_x\,dx + f_y\,dy + f_z\,dz$
for functions, and $d(f\,dx_I) = df\wedge dx_I$ in general. Then:

- $d$ of a 0-form is the **gradient**: $df = f_x\,dx + f_y\,dy + f_z\,dz$.
- $d$ of a 1-form is the **curl**: $d(P\,dx + Q\,dy) = P_y\,dy\wedge dx + Q_x\,dx\wedge dy = (Q_x - P_y)\,dx\wedge dy$
  in the plane, and in space the three components of the curl appear as the coefficients.
- $d$ of a 2-form is the **divergence**: $d(A\,dy\wedge dz + B\,dz\wedge dx + C\,dx\wedge dy) = (A_x + B_y + C_z)\,dx\wedge dy\wedge dz$.

The identities $\operatorname{curl}\nabla f = \mathbf 0$ and $\operatorname{div}\operatorname{curl}\mathbf F = 0$ are the
single rule $d(d\omega) = 0$, which comes from the equality of mixed partial derivatives together with
$dx_i\wedge dx_j = -dx_j\wedge dx_i$. And every theorem in the table is

$$
\int_M d\omega = \int_{\partial M}\omega,
$$

the **generalised Stokes theorem**, for an oriented $k$-dimensional piece $M$ (an interval, curve, surface, solid, or a
manifold of any dimension) and a $(k-1)$-form $\omega$. It holds in any number of dimensions and on curved spaces
where there are no coordinates $x, y, z$ at all. The question of 17.2 (which forms with $d\omega = 0$ are of the form
$d\eta$?) becomes de Rham cohomology, which detects the holes of a space by calculus; Georges de Rham proved in 1931
that it agrees with the topologists' way of counting holes.

The full theory is in [MAT257Y1 Units 11 to 14](../../uoft/MAT257Y1/unit11.md) and in Spivak's *Calculus on
Manifolds*; the geometry of manifolds is in [Geometry, Chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md).

## Check yourself

??? question "1. Check that $\mathbf F = -GM\mathbf r/|\mathbf r|^3$ is the gradient of $f = GM/|\mathbf r|$."

    With $r = \sqrt{x^2 + y^2 + z^2}$, $\partial r/\partial x = x/r$, so $\partial_x(GM/r) = -\frac{GM}{r^2}\cdot\frac xr = -\frac{GMx}{r^3}$,
    and similarly for $y$ and $z$. So $\nabla f = -GM\mathbf r/r^3 = \mathbf F$.

??? question "2. Compute the divergence and curl of $\mathbf F = (xy, yz, zx)$."

    $\operatorname{div} = y + z + x$. $\operatorname{curl} = (\partial_y(zx) - \partial_z(yz), \partial_z(xy) - \partial_x(zx), \partial_x(yz) - \partial_y(xy)) = (-y, -z, -x)$.

??? question "3. Compute $\int_C\mathbf F\cdot d\mathbf r$ for $\mathbf F = (-y, x, z)$ along one turn of the helix $(\cos t, \sin t, t)$, $0 \le t \le 2\pi$."

    $\mathbf F\cdot\mathbf r' = (-\sin t, \cos t, t)\cdot(-\sin t, \cos t, 1) = 1 + t$. Integral $2\pi + 2\pi^2 \approx 26.02$.

??? question "4. Is $\mathbf F = (e^y + 2x, xe^y - \cos y)$ conservative? If so, find a potential and $\int_C \mathbf F\cdot d\mathbf r$ from $(0,0)$ to $(1, \pi)$."

    $P_y = e^y = Q_x$ on the whole plane, so yes. $f = xe^y + x^2 + g(y)$, $f_y = xe^y + g'(y) = xe^y - \cos y$, so
    $g = -\sin y$ and $f = xe^y + x^2 - \sin y$. The integral is $f(1, \pi) - f(0, 0) = e^\pi + 1 \approx 24.14$.

??? question "5. Use Green's theorem to compute $\oint_C (y^2\,dx + 3xy\,dy)$ around the unit circle, anticlockwise."

    $Q_x - P_y = 3y - 2y = y$, and $\iint_{\text{disc}}y\,dA = 0$ by symmetry. So the circulation is 0.

??? question "6. Find the area of the region inside the astroid $x = \cos^3t$, $y = \sin^3t$ using a line integral."

    $\tfrac12\oint x\,dy - y\,dx$ with $dx = -3\cos^2t\sin t\,dt$, $dy = 3\sin^2t\cos t\,dt$:
    $x\,dy - y\,dx = 3\cos^4t\sin^2t + 3\sin^4t\cos^2t = 3\sin^2t\cos^2t$. The area is $\tfrac32\int_0^{2\pi}\sin^2t\cos^2t\,dt = \tfrac32\cdot\tfrac\pi4 = \tfrac{3\pi}{8}$.

??? question "7. Use the shoelace formula for the quadrilateral $(0,0), (5,0), (4,3), (1,4)$."

    $\tfrac12\left[(0\cdot0 - 5\cdot0) + (5\cdot3 - 4\cdot0) + (4\cdot4 - 1\cdot3) + (1\cdot0 - 0\cdot4)\right] = \tfrac12(0 + 15 + 13 + 0) = 14$.

??? question "8. Compute the flux of $\mathbf F = (0, 0, z)$ out of the sphere of radius $R$ directly and with the divergence theorem."

    Divergence: $\operatorname{div}\mathbf F = 1$, so the flux is $\frac43\pi R^3$. Directly: $\mathbf F\cdot\mathbf n = z\cdot\frac zR = R\cos^2\varphi$,
    so the flux is $\int_0^{2\pi}\int_0^\pi R\cos^2\varphi\cdot R^2\sin\varphi\,d\varphi\,d\theta = 2\pi R^3\cdot\tfrac23 = \tfrac43\pi R^3$.

??? question "9. Use Stokes's theorem to find $\oint_C\mathbf F\cdot d\mathbf r$ for $\mathbf F = (z, x, y)$ around the circle $x^2 + y^2 = 4$, $z = 0$, anticlockwise from above."

    $\operatorname{curl}\mathbf F = (1, 1, 1)$. Take the flat disc with $\mathbf n = (0,0,1)$: the flux is $1\cdot\pi\cdot4 = 4\pi$.
    Directly: $\mathbf r = (2\cos t, 2\sin t, 0)$, $\mathbf F\cdot\mathbf r' = (0, 2\cos t, 2\sin t)\cdot(-2\sin t, 2\cos t, 0) = 4\cos^2t$, integral $4\pi$.

??? question "10. Show that if $\mathbf F = \operatorname{curl}\mathbf G$, then the flux of $\mathbf F$ out of any closed surface is 0, in two ways."

    Divergence theorem: $\operatorname{div}\operatorname{curl}\mathbf G = 0$, so the flux is $\iiint 0 = 0$. Stokes: cut the closed
    surface along a curve into two caps; each flux equals the circulation of $\mathbf G$ around the curve, but the two caps
    induce opposite orientations on it, so the two fluxes cancel.

??? question "11. Using differential forms, compute $d\omega$ for $\omega = xy\,dz$ and check $d(d\omega) = 0$."

    $d\omega = d(xy)\wedge dz = (y\,dx + x\,dy)\wedge dz = y\,dx\wedge dz + x\,dy\wedge dz$. Then
    $d(d\omega) = dy\wedge dx\wedge dz + dx\wedge dy\wedge dz = -dx\wedge dy\wedge dz + dx\wedge dy\wedge dz = 0$.

## What you learned

- A vector field attaches an arrow to each point; its flow lines solve $\mathbf r' = \mathbf F(\mathbf r)$; its
  divergence measures spreading and its curl measures rotation, and $\operatorname{curl}\nabla f = \mathbf 0$,
  $\operatorname{div}\operatorname{curl}\mathbf F = 0$.
- Line integrals of vector fields compute work and circulation; for gradients they depend only on the endpoints.
- A field is conservative exactly when its circulation around every loop is zero; zero curl is necessary, and
  sufficient on simply connected regions, but not around a hole.
- Green's theorem: circulation around the boundary equals the integral of the scalar curl inside; proved for
  rectangles by Fubini and the fundamental theorem, and it gives areas from boundaries.
- Flux is $\iint\mathbf F\cdot\mathbf n\,dS$; the divergence theorem equates the flux out of a closed surface with the
  divergence inside, and Stokes's theorem equates circulation with the flux of the curl.
- Maxwell's equations are four statements about divergence and curl; together they predict light.
- All these theorems are $\int_M d\omega = \int_{\partial M}\omega$ in the language of differential forms.

**Next:** [Chapter 18](18-The-Real-Numbers.md), where the book goes back to the foundations: what a real number is,
and the completeness property that every theorem so far has quietly relied on.

## Further reading

- H. M. Schey, *Div, Grad, Curl, and All That: An Informal Text on Vector Calculus* (1973; 4th edition 2005).
- J. E. Marsden and A. J. Tromba, *Vector Calculus* (1976; 6th edition 2012), chapters 7 and 8.
- M. Spivak, *Calculus on Manifolds* (1965), chapters 4 and 5: differential forms and the generalised Stokes theorem.
- V. J. Katz, "The History of Stokes' Theorem", *Mathematics Magazine* 52 (1979).
- E. M. Purcell and D. J. Morin, *Electricity and Magnetism*, 3rd edition (2013): Maxwell's equations with vector
  calculus.
- On this site: [MAT257Y1 Unit 11: Tensors & Differential Forms](../../uoft/MAT257Y1/unit11.md),
  [Unit 12: The Exterior Derivative](../../uoft/MAT257Y1/unit12.md),
  [Unit 13: Manifolds in R^n](../../uoft/MAT257Y1/unit13.md),
  [Unit 14: Stokes' Theorem](../../uoft/MAT257Y1/unit14.md);
  [Geometry, Chapter 19](../geometry/19-Curves-and-Surfaces.md) and
  [Chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md); the gentler
  [dot product lesson](../../topics/geometry/level-8/05-dot-product.md).
