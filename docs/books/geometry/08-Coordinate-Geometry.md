# 8. Coordinate geometry

*Euclid proves theorems with clever constructions: draw this line, notice that pair of similar triangles. Each proof
needs a new idea. In the 1630s two Frenchmen found a way to turn geometry into algebra: give every point two numbers,
and every line and curve becomes an equation. Then many problems that needed a flash of insight can be solved by
calculation. This chapter sets up coordinates, finds the equations of lines and circles, proves classical theorems by
algebra, derives the parabola, ellipse and hyperbola from one focus-and-directrix definition with their reflection
properties, and then follows Kepler to the shape of the orbit of Mars. It ends with polar coordinates, the natural
language of orbits.*

!!! abstract "In this chapter"
    **You will learn:**

    - how Descartes and Fermat joined algebra to geometry, and the distance, midpoint and section formulas
    - the equations of lines and circles, perpendicular slopes, and the distance from a point to a line
    - how to prove geometry theorems with coordinates, and how to choose the axes to make it easy
    - the conic sections from the focus-directrix definition: their equations, eccentricity and reflection properties
    - Kepler's laws, and the real orbit of Mars (eccentricity 0.0934) with its perihelion, aphelion and the extra sunlight it brings
    - polar coordinates, some famous polar curves, and the polar equation of a conic

    **You need:** [Chapter 4](04-Area-and-Pythagoras.md) (Pythagoras), [Chapter 5](05-Similarity.md) (similar
    triangles), [Chapter 6](06-Circles.md) (circles and tangents) and [Chapter 7](07-Trigonometry.md) (sine and
    cosine), plus the algebra of [Algebra, Chapter 3](../algebra/03-Lines-and-Linear-Systems.md) (lines) and
    [Algebra, Chapter 5](../algebra/05-Quadratics.md) (completing the square). For a gentler version, see the Topics
    lessons [Distance and midpoint](../../topics/geometry/level-6/03-distance-midpoint.md),
    [Slope and the equation of a line](../../topics/geometry/level-6/06-slope-line-equation.md) and
    [Equations of circles](../../topics/geometry/level-7/07-circle-equations.md).

    **Levels:** 8.1 to 8.3 are intermediate; 8.4 is intermediate; 8.5 to 8.7 are intermediate to advanced.

## 8.1 Descartes and Fermat

In 1637 René Descartes published his *Discourse on Method* with three appendices showing the method at work. One of
them, *La Géométrie*, opens by saying that any problem of geometry can be reduced to one about lengths of lines,
which can then be handled by arithmetic. Pierre de Fermat had reached the same idea independently; his short treatise
on plane and solid loci, written by the mid-1630s and passed around in manuscript, was printed only in 1679, after
his death. Fermat showed that every first-degree equation in two unknowns describes a straight line and every
second-degree one a conic section; Descartes attacked harder curves and problems that the Greeks had left open.

Neither used our picture of two perpendicular number lines covering the plane with a grid. That came gradually, in
the work of their successors. The idea had ancestors too: Apollonius described conics through relations between
lengths measured along fixed lines, and Nicole Oresme in the fourteenth century drew graphs of changing quantities.
What was new was the systematic translation: **a curve is an equation, and solving equations is finding points**.

**The set-up.** Choose a point $O$, the **origin**, and two perpendicular number lines through it, the $x$-axis and
the $y$-axis, with the same unit. Every point $P$ of the plane has a pair of **coordinates** $(x, y)$: walk $x$ units
along the $x$-axis and $y$ units parallel to the $y$-axis. Every pair of real numbers gives exactly one point. A
**curve** is described by an **equation** in $x$ and $y$: the curve is the set of points whose coordinates make the
equation true. In space, three perpendicular axes give three coordinates $(x, y, z)$.

From now on there are two pictures of every object, and the art is to move between them: a line is a picture and the
equation $y = 2x + 1$; the point where two lines cross is a picture and the solution of two equations.

## 8.2 Distance and midpoint

**Theorem (distance formula).** The distance between $A = (x_1, y_1)$ and $B = (x_2, y_2)$ is

$$AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Points A at 1 comma 2 and B at 7 comma 10 on a grid. The right triangle with corner C at 7 comma 2 has a horizontal leg of 6 and a vertical leg of 8, so AB is 10. The midpoint M is at 4 comma 6">
  <line x1="40" y1="230" x2="280" y2="230" stroke="currentColor" stroke-width="1"/>
  <polygon points="280,230 273,226.8 273,233.2" fill="currentColor"/>
  <line x1="60" y1="250" x2="60" y2="10" stroke="currentColor" stroke-width="1"/>
  <polygon points="60,10 56.9,17 63.1,17" fill="currentColor"/>
  <polygon points="80,190 200,190 200,30" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="190" x2="200" y2="30" stroke="currentColor" stroke-width="2"/>
  <polyline points="188,190 188,178 200,178" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="80" cy="190" r="3" fill="currentColor"/>
  <text x="74" y="206" font-size="12" text-anchor="end" fill="currentColor">A (1, 2)</text>
  <circle cx="200" cy="30" r="3" fill="currentColor"/>
  <text x="210" y="34" font-size="12" text-anchor="start" fill="currentColor">B (7, 10)</text>
  <circle cx="200" cy="190" r="3" fill="currentColor"/>
  <text x="210" y="204" font-size="12" text-anchor="start" fill="currentColor">C (7, 2)</text>
  <circle cx="140" cy="110" r="3" fill="currentColor"/>
  <text x="130" y="106" font-size="12" text-anchor="end" fill="currentColor">M (4, 6)</text>
  <text x="140" y="206" font-size="12" text-anchor="middle" fill="currentColor">x₂ − x₁ = 6</text>
  <text x="208" y="110" font-size="12" text-anchor="start" fill="currentColor">y₂ − y₁ = 8</text>
  <text x="166" y="60" font-size="12" text-anchor="end" fill="currentColor">AB = 10</text>
  <text x="284" y="246" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">x</text>
  <text x="50" y="14" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">y</text>
</svg>
</div>

*Proof.* If $A$ and $B$ are not on a horizontal or vertical line, let $C = (x_2, y_1)$. Then $AC$ is horizontal with
length $|x_2 - x_1|$, $CB$ is vertical with length $|y_2 - y_1|$, and the angle at $C$ is right. By Pythagoras,
$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$. If $A$ and $B$ are on a horizontal line the formula gives $|x_2 - x_1|$,
which is right, and the same for a vertical line. $\blacksquare$

In space the same argument used twice gives $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$.

**Theorem (midpoint and section formulas).** The midpoint of $AB$ is

$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right),$$

and more generally the point $P$ on segment $AB$ with $AP : PB = m : n$ is
$P = \left(\frac{n x_1 + m x_2}{m + n}, \frac{n y_1 + m y_2}{m + n}\right)$.

*Proof.* Drop perpendiculars from $A$, $P$, $B$ to the $x$-axis. They are parallel, so by the intercept theorem
([Chapter 5](05-Similarity.md)) their feet divide the $x$-axis segment from $x_1$ to $x_2$ in the same ratio $m : n$.
The point dividing $[x_1, x_2]$ in that ratio is $x_1 + \frac{m}{m+n}(x_2 - x_1) = \frac{n x_1 + m x_2}{m + n}$. The same
for $y$. For the midpoint, $m = n = 1$. $\blacksquare$

**Worked example.** $A = (1, 2)$, $B = (7, 10)$. Then $AB = \sqrt{36 + 64} = 10$ and $M = (4, 6)$. The point two thirds
of the way from $A$ to $B$ ($m : n = 2 : 1$) is $\left(\frac{1 + 14}{3}, \frac{2 + 20}{3}\right) = (5, 22/3)$.

**Worked example (a right angle by numbers).** Is the triangle with vertices $A = (1, 1)$, $B = (4, 5)$, $C = (8, 2)$
a right triangle? $AB^2 = 9 + 16 = 25$, $BC^2 = 16 + 9 = 25$, $AC^2 = 49 + 1 = 50$. Since $25 + 25 = 50$, the converse
of Pythagoras ([Chapter 4](04-Area-and-Pythagoras.md)) says the angle at $B$ is right, and the triangle is also
isosceles.

<figure class="play" data-play="points"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Tap to move two points; read the distance (Pythagoras), the midpoint and the slope.</figcaption></figure>

## 8.3 Lines and circles in coordinates

### Lines

The **slope** of the line through $(x_1, y_1)$ and $(x_2, y_2)$, with $x_1 \neq x_2$, is

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}} .$$

It does not depend on which two points of the line you pick: slope triangles on the same line are similar (their
sides are parallel), so their rise-to-run ratios agree. In the language of [Chapter 7](07-Trigonometry.md),
$m = \tan\theta$ where $\theta$ is the angle the line makes with the $x$-axis.

A point $(x, y)$ is on the line through $(x_1, y_1)$ with slope $m$ exactly when $(y - y_1)/(x - x_1) = m$ or it is the
point itself, so the line has the **point-slope** equation $y - y_1 = m(x - x_1)$, which rearranges to $y = mx + b$.
Vertical lines have no slope and the equation $x = k$. Every line has a **general equation** $ax + by = c$ with $a$
and $b$ not both zero, and every such equation is a line. The [Algebra book, Chapter 3](../algebra/03-Lines-and-Linear-Systems.md)
covers all these forms and how to solve two such equations together.

**Theorem (parallel and perpendicular).** Two non-vertical lines with slopes $m_1$ and $m_2$ are parallel exactly
when $m_1 = m_2$, and perpendicular exactly when $m_1 m_2 = -1$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="A line through the origin with slope one half, with a slope triangle of run 2 and rise 1. Rotating the triangle a quarter turn gives run minus 1 and rise 2, on a perpendicular line of slope minus 2">
  <line x1="65" y1="240.5" x2="65" y2="11" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="110" y1="240.5" x2="110" y2="11" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="155" y1="240.5" x2="155" y2="11" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="200" y1="240.5" x2="200" y2="11" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="245" y1="240.5" x2="245" y2="11" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="290" y1="240.5" x2="290" y2="11" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="335" y1="240.5" x2="335" y2="11" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="380" y1="240.5" x2="380" y2="11" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="29" y1="218" x2="398" y2="218" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="29" y1="173" x2="398" y2="173" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="29" y1="128" x2="398" y2="128" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="29" y1="83" x2="398" y2="83" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="29" y1="38" x2="398" y2="38" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="29" y1="128" x2="398" y2="128" stroke="currentColor" stroke-width="1"/>
  <polygon points="398,128 391,124.8 391,131.2" fill="currentColor"/>
  <line x1="200" y1="240.5" x2="200" y2="11" stroke="currentColor" stroke-width="1"/>
  <polygon points="200,11 196.8,18 203.2,18" fill="currentColor"/>
  <line x1="38" y1="209" x2="389" y2="33.5" stroke="#eea66f" stroke-width="2"/>
  <line x1="256.2" y1="240.5" x2="139.2" y2="6.5" stroke="#9cc9ea" stroke-width="2"/>
  <polygon points="200,128 290,128 290,83" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="200,128 200,38 155,38" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="210.1,123 205,112.9 195,117.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="245" y="144" font-size="12" text-anchor="middle" fill="currentColor">run 2</text>
  <text x="296" y="105.5" font-size="12" text-anchor="start" fill="currentColor">rise 1</text>
  <text x="206" y="83" font-size="12" text-anchor="start" fill="currentColor">rise 2</text>
  <text x="177.5" y="32" font-size="12" text-anchor="middle" fill="currentColor">run −1</text>
  <text x="380.5" y="29.8" font-size="12" text-anchor="end" fill="currentColor">slope ½</text>
  <text x="133.5" y="22.2" font-size="12" text-anchor="end" fill="currentColor">slope −2</text>
</svg>
</div>

*Proof.* Parallel: lines with the same slope make the same angle with the $x$-axis (equal corresponding angles), and
conversely. Perpendicular: a line of slope $m$ has a slope triangle with run 1 and rise $m$. Rotate it by $90°$
counterclockwise about its corner: the run of 1 to the right becomes a rise of 1 upward, and the rise of $m$ upward
becomes a run of $m$ to the left. The rotated line is perpendicular to the first, and its slope is
$1/(-m) = -1/m$. So the perpendicular slope is $m_2 = -1/m_1$, that is $m_1 m_2 = -1$. (If $m_1 = 0$ the perpendicular
is vertical.) $\blacksquare$

**Worked example.** The line through $(2, 3)$ perpendicular to $y = \tfrac12 x + 4$ has slope $-2$: $y - 3 = -2(x - 2)$,
or $y = -2x + 7$. The two lines meet where $\tfrac12 x + 4 = -2x + 7$, at $x = 1.2$, $y = 4.6$.

**Theorem (distance from a point to a line).** The distance from $P_0 = (x_0, y_0)$ to the line $ax + by + c = 0$ is

$$d = \frac{|a x_0 + b y_0 + c|}{\sqrt{a^2 + b^2}} .$$

*Proof.* The shortest path from $P_0$ to the line is along the perpendicular. The line $ax + by + c = 0$ has slope
$-a/b$, so the perpendicular has slope $b/a$: it runs in the direction $(a, b)$ (this also covers the cases $a = 0$ or
$b = 0$, where the line is horizontal or vertical). Its points are $(x_0 + ta, y_0 + tb)$. The foot $F$ is the one on the
line:

$$a(x_0 + ta) + b(y_0 + tb) + c = 0, \qquad t = -\frac{a x_0 + b y_0 + c}{a^2 + b^2} .$$

The distance $P_0F$ is $|t| \sqrt{a^2 + b^2}$, which is the formula. $\blacksquare$

**Worked example.** The distance from $(3, 4)$ to $3x + 4y - 5 = 0$ is $|9 + 16 - 5|/5 = 4$.

### Circles

By the distance formula, a point $(x, y)$ is on the circle with centre $(a, b)$ and radius $r$ exactly when

$$(x - a)^2 + (y - b)^2 = r^2 .$$

Expanded, this has the form $x^2 + y^2 + Dx + Ey + F = 0$. Going back, complete the square
([Algebra, Chapter 5](../algebra/05-Quadratics.md)).

**Worked example.** $x^2 + y^2 - 6x + 4y - 12 = 0$. Group and complete squares:
$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$, so $(x - 3)^2 + (y + 2)^2 = 25$: centre $(3, -2)$, radius 5. (If the right
side had come out negative there would be no points; if zero, a single point.)

**Lines meeting circles.** Substitute the line into the circle and you get a quadratic; its discriminant says whether
the line is a secant (two points), a tangent (one) or misses (none). For $x^2 + y^2 = 25$ and $y = x + 1$:
$x^2 + (x + 1)^2 = 25$, $2x^2 + 2x - 24 = 0$, $x^2 + x - 12 = 0$, $x = 3$ or $x = -4$, giving $(3, 4)$ and $(-4, -3)$.
Check: $9 + 16 = 25$ and $16 + 9 = 25$.

**Tangent lines.** The tangent to $x^2 + y^2 = r^2$ at a point $(x_1, y_1)$ on it is $x_1 x + y_1 y = r^2$. *Proof:* the
tangent is perpendicular to the radius ([Chapter 6](06-Circles.md)), which runs in the direction $(x_1, y_1)$, so the
tangent's equation has the form $x_1 x + y_1 y = c$ (its slope $-x_1/y_1$ times the radius slope $y_1/x_1$ is $-1$), and
it passes through $(x_1, y_1)$, so $c = x_1^2 + y_1^2 = r^2$. $\blacksquare$ For example the tangent to $x^2 + y^2 = 25$ at
$(3, 4)$ is $3x + 4y = 25$; by the formula above its distance from the origin is $25/5 = 5$, the radius, as it should be.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="The circle x squared plus y squared equals 25 with the secant y equals x plus 1, which meets it at 3 comma 4 and minus 4 comma minus 3, and the tangent 3x plus 4y equals 25 at 3 comma 4, perpendicular to the radius">
  <line x1="40" y1="130" x2="320" y2="130" stroke="currentColor" stroke-width="1"/>
  <polygon points="320,130 313,126.8 313,133.2" fill="currentColor"/>
  <line x1="170" y1="254" x2="170" y2="6" stroke="currentColor" stroke-width="1"/>
  <polygon points="170,6 166.8,13 173.2,13" fill="currentColor"/>
  <circle cx="170" cy="130" r="100" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.8"/>
  <line x1="55" y1="225" x2="272" y2="8" stroke="#eea66f" stroke-width="1.6"/>
  <line x1="188.4" y1="18.8" x2="310" y2="110" stroke="#7ccf9a" stroke-width="1.6"/>
  <line x1="170" y1="130" x2="230" y2="50" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <polyline points="224,58 232,64 238,56" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="230" cy="50" r="3" fill="currentColor"/>
  <text x="238" y="44" font-size="12" text-anchor="start" fill="currentColor">(3, 4)</text>
  <circle cx="90" cy="190" r="3" fill="currentColor"/>
  <text x="82" y="204" font-size="12" text-anchor="end" fill="currentColor">(−4, −3)</text>
  <text x="278" y="22" font-size="12" text-anchor="start" fill="currentColor">y = x + 1</text>
  <text x="314" y="124" font-size="12" text-anchor="start" fill="currentColor">3x + 4y = 25</text>
  <text x="94" y="54" font-size="12" text-anchor="end" fill="currentColor">x² + y² = 25</text>
</svg>
</div>

**The circle through three points.** Its centre is where the perpendicular bisectors meet (Chapter 6). For $(0, 0)$,
$(4, 0)$ and $(0, 2)$: the bisector of the first two is $x = 2$, of the first and third $y = 1$, so the centre is
$(2, 1)$ and the radius $\sqrt{5}$. Check: $(4 - 2)^2 + (0 - 1)^2 = 5$. (Or notice the right angle at the origin: by
Thales the hypotenuse from $(4, 0)$ to $(0, 2)$ is a diameter, with midpoint $(2, 1)$.)

## 8.4 Proving theorems with coordinates

To prove a theorem with coordinates, place the figure so that the algebra is as simple as possible: put a vertex at
the origin, a side along an axis, a centre of symmetry at the origin. That costs nothing, because distances and angles
do not depend on where the axes are; but the figure must stay **general**: you may choose the axes, not the shape.

**Theorem.** The diagonals of a parallelogram bisect each other.

*Proof.* Put one vertex at $O = (0, 0)$ and one side along the $x$-axis: $A = (a, 0)$. Let the other side from $O$ end at
$C = (b, c)$. The fourth vertex is $B = (a + b, c)$, since $CB$ must be parallel and equal to $OA$. The midpoint of
diagonal $OB$ is $\left(\frac{a + b}{2}, \frac c2\right)$ and the midpoint of diagonal $AC$ is
$\left(\frac{a + b}{2}, \frac c2\right)$. They are the same point. $\blacksquare$

**Theorem (Thales again).** If $AB$ is a diameter of a circle and $C$ is another point of it, then $AC \perp BC$.

*Proof.* Take the circle $x^2 + y^2 = r^2$, $A = (-r, 0)$, $B = (r, 0)$, $C = (x, y)$ with $y \neq 0$. The slopes of $AC$ and
$BC$ multiply to

$$\frac{y}{x + r} \cdot \frac{y}{x - r} = \frac{y^2}{x^2 - r^2} = \frac{y^2}{-y^2} = -1 . \qquad \blacksquare$$

**Theorem (Apollonius' median theorem).** If $M$ is the midpoint of $BC$ in triangle $ABC$, then
$AB^2 + AC^2 = 2AM^2 + 2BM^2$.

*Proof.* Put $M$ at the origin and $BC$ on the $x$-axis: $B = (-m, 0)$, $C = (m, 0)$, $A = (p, q)$. Then
$AB^2 + AC^2 = (p + m)^2 + q^2 + (p - m)^2 + q^2 = 2p^2 + 2q^2 + 2m^2 = 2AM^2 + 2BM^2$. $\blacksquare$

The same computation, read for a parallelogram, says that the sum of the squares of the four sides equals the sum
of the squares of the two diagonals (the **parallelogram law**).

**Theorem (centroid).** The three medians of a triangle meet at one point, two thirds of the way from each vertex to
the midpoint of the opposite side. This point, the **centroid**, is
$G = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)$.

*Proof.* The median from $A = (x_1, y_1)$ goes to the midpoint $M = \left(\frac{x_2 + x_3}{2}, \frac{y_2 + y_3}{2}\right)$ of
$BC$. The point dividing $AM$ in the ratio $2 : 1$ is, by the section formula,

$$\left(\frac{1 \cdot x_1 + 2 \cdot \frac{x_2 + x_3}{2}}{3}, \ldots\right) = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right).$$

This expression is symmetric in the three vertices, so the same point lies two thirds of the way along each of the
other two medians as well. $\blacksquare$

**Worked example.** For $A = (0, 0)$, $B = (6, 0)$, $C = (3, 9)$ the centroid is $(3, 3)$. Check: the midpoint of $BC$
is $(4.5, 4.5)$, and two thirds of the way from $(0, 0)$ to it is $(3, 3)$.

**How far can this go?** Descartes believed his method could solve any problem in geometry, and in a sense he was
right: every statement about points, lines and circles defined by equations becomes a statement about polynomials,
and in the twentieth century Tarski proved that there is an algorithm to decide all such statements. In practice
the algebra can explode. Good coordinates, and later vectors ([Chapter 9](09-Vectors.md)) and complex numbers
([Chapter 13](13-Inversion-and-Complex-Geometry.md)), keep it in hand; and synthetic proofs often show **why** a
theorem is true where a calculation only shows **that** it is.

## 8.5 Conic sections

Shine a torch at a wall. Held straight at the wall, the patch of light is a circle; tilt it and the circle stretches
into an ellipse; tilt it further until the top edge of the beam is parallel to the wall and the ellipse opens into a
parabola; tilt it more and it becomes one branch of a hyperbola. These four curves are the **conic sections**, the
curves in which a plane cuts a cone. Menaechmus, in the fourth century BCE, is credited by later writers with first
studying them, in connection with the problem of doubling the cube. Apollonius of Perga, around 200 BCE, wrote the
great treatise on them, the *Conics*, and gave them their names.

Rather than cutting cones, we use a flat definition that gives all three at once.

**Definition (focus and directrix).** Fix a line $\ell$ (the **directrix**), a point $F$ not on it (the **focus**), and a
number $e > 0$ (the **eccentricity**). The set of points $P$ with

$$PF = e \cdot \operatorname{dist}(P, \ell)$$

is called an **ellipse** if $e < 1$, a **parabola** if $e = 1$, and a **hyperbola** if $e > 1$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 280" role="img" aria-label="Three conics with the same focus F at the origin and the same directrix, the vertical line x equals 1: an ellipse with eccentricity one half, a parabola with eccentricity 1, and a hyperbola with eccentricity 2 whose second branch lies beyond the directrix">
  <line x1="12" y1="140" x2="408" y2="140" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <line x1="270" y1="275" x2="270" y2="5" stroke="currentColor" stroke-width="1.6"/>
  <text x="276" y="17" font-size="12" text-anchor="start" fill="currentColor">directrix</text>
  <polyline points="230,140 230,139.4 230,138.7 229.9,138.1 229.9,137.5 229.8,136.9 229.8,136.2 229.7,135.6 229.6,135 229.5,134.3 229.3,133.7 229.2,133.1 229,132.5 228.9,131.8 228.7,131.2 228.5,130.6 228.3,130 228.1,129.3 227.8,128.7 227.6,128.1 227.3,127.4 227,126.8 226.7,126.2 226.4,125.6 226,124.9 225.7,124.3 225.3,123.7 224.9,123.1 224.5,122.5 224.1,121.9 223.6,121.2 223.2,120.6 222.7,120 222.2,119.4 221.6,118.8 221.1,118.2 220.5,117.6 219.9,117 219.3,116.4 218.7,115.9 218,115.3 217.3,114.7 216.6,114.2 215.9,113.6 215.1,113.1 214.4,112.5 213.5,112 212.7,111.5 211.8,111 210.9,110.5 210,110 209,109.5 208.1,109.1 207,108.7 206,108.2 204.9,107.9 203.8,107.5 202.7,107.1 201.5,106.8 200.3,106.5 199,106.3 197.8,106 196.5,105.8 195.1,105.6 193.8,105.5 192.4,105.4 191,105.4 189.5,105.4 188,105.4 186.5,105.5 185,105.6 183.5,105.8 181.9,106.1 180.4,106.4 178.8,106.8 177.2,107.2 175.6,107.7 174,108.3 172.4,108.9 170.8,109.6 169.2,110.4 167.7,111.2 166.2,112.2 164.7,113.2 163.2,114.3 161.8,115.4 160.4,116.7 159.1,118 157.9,119.4 156.7,120.8 155.6,122.3 154.6,123.9 153.7,125.5 152.8,127.2 152.1,129 151.5,130.7 150.9,132.5 150.5,134.4 150.2,136.2 150.1,138.1 150,140 150.1,141.9 150.2,143.8 150.5,145.6 150.9,147.5 151.5,149.3 152.1,151 152.8,152.8 153.7,154.5 154.6,156.1 155.6,157.7 156.7,159.2 157.9,160.6 159.1,162 160.4,163.3 161.8,164.6 163.2,165.7 164.7,166.8 166.2,167.8 167.7,168.8 169.2,169.6 170.8,170.4 172.4,171.1 174,171.7 175.6,172.3 177.2,172.8 178.8,173.2 180.4,173.6 181.9,173.9 183.5,174.2 185,174.4 186.5,174.5 188,174.6 189.5,174.6 191,174.6 192.4,174.6 193.8,174.5 195.1,174.4 196.5,174.2 197.8,174 199,173.7 200.3,173.5 201.5,173.2 202.7,172.9 203.8,172.5 204.9,172.1 206,171.8 207,171.3 208.1,170.9 209,170.5 210,170 210.9,169.5 211.8,169 212.7,168.5 213.5,168 214.4,167.5 215.1,166.9 215.9,166.4 216.6,165.8 217.3,165.3 218,164.7 218.7,164.1 219.3,163.6 219.9,163 220.5,162.4 221.1,161.8 221.6,161.2 222.2,160.6 222.7,160 223.2,159.4 223.6,158.8 224.1,158.1 224.5,157.5 224.9,156.9 225.3,156.3 225.7,155.7 226,155.1 226.4,154.4 226.7,153.8 227,153.2 227.3,152.6 227.6,151.9 227.8,151.3 228.1,150.7 228.3,150 228.5,149.4 228.7,148.8 228.9,148.2 229,147.5 229.2,146.9 229.3,146.3 229.5,145.7 229.6,145 229.7,144.4 229.8,143.8 229.8,143.1 229.9,142.5 229.9,141.9 230,141.3 230,140.6 230,140" fill="none" stroke="#eea66f" stroke-width="2.4"/>
  <polyline points="94.8,272 99.6,269.8 104.3,267.6 109,265.4 113.5,263.2 118,261 122.4,258.8 126.7,256.6 130.9,254.4 135.1,252.2 139.2,250 143.2,247.8 147.1,245.6 150.9,243.4 154.7,241.2 158.3,239 161.9,236.8 165.4,234.6 168.9,232.4 172.2,230.2 175.5,228 178.7,225.8 181.8,223.6 184.8,221.4 187.7,219.2 190.6,217 193.4,214.8 196.1,212.6 198.7,210.4 201.2,208.2 203.7,206 206.1,203.8 208.4,201.6 210.6,199.4 212.7,197.2 214.8,195 216.8,192.8 218.7,190.6 220.5,188.4 222.2,186.2 223.9,184 225.4,181.8 226.9,179.6 228.3,177.4 229.7,175.2 230.9,173 232.1,170.8 233.2,168.6 234.2,166.4 235.1,164.2 236,162 236.7,159.8 237.4,157.6 238,155.4 238.5,153.2 239,151 239.4,148.8 239.6,146.6 239.8,144.4 240,142.2 240,140 240,137.8 239.8,135.6 239.6,133.4 239.4,131.2 239,129 238.5,126.8 238,124.6 237.4,122.4 236.7,120.2 236,118 235.1,115.8 234.2,113.6 233.2,111.4 232.1,109.2 230.9,107 229.7,104.8 228.3,102.6 226.9,100.4 225.4,98.2 223.9,96 222.2,93.8 220.5,91.6 218.7,89.4 216.8,87.2 214.8,85 212.7,82.8 210.6,80.6 208.4,78.4 206.1,76.2 203.7,74 201.2,71.8 198.7,69.6 196.1,67.4 193.4,65.2 190.6,63 187.7,60.8 184.8,58.6 181.8,56.4 178.7,54.2 175.5,52 172.2,49.8 168.9,47.6 165.4,45.4 161.9,43.2 158.3,41 154.7,38.8 150.9,36.6 147.1,34.4 143.2,32.2 139.2,30 135.1,27.8 130.9,25.6 126.7,23.4 122.4,21.2 118,19 113.5,16.8 109,14.6 104.3,12.4 99.6,10.2 94.8,8" fill="none" stroke="#9cc9ea" stroke-width="2.4"/>
  <polyline points="203.9,272 205.7,268.6 207.4,265.2 209.1,261.9 210.7,258.6 212.3,255.5 213.8,252.4 215.3,249.3 216.7,246.3 218.2,243.4 219.5,240.5 220.9,237.7 222.2,234.9 223.4,232.2 224.6,229.5 225.8,226.9 227,224.3 228.1,221.8 229.2,219.3 230.2,216.9 231.3,214.5 232.3,212.1 233.2,209.8 234.1,207.6 235,205.3 235.9,203.1 236.7,200.9 237.5,198.8 238.3,196.7 239.1,194.6 239.8,192.6 240.5,190.6 241.1,188.6 241.8,186.6 242.4,184.7 243,182.8 243.6,180.9 244.1,179 244.6,177.2 245.1,175.3 245.6,173.5 246,171.7 246.4,170 246.8,168.2 247.2,166.5 247.5,164.8 247.8,163 248.1,161.3 248.4,159.7 248.7,158 248.9,156.3 249.1,154.7 249.3,153 249.5,151.4 249.6,149.7 249.7,148.1 249.8,146.5 249.9,144.9 250,143.2 250,141.6 250,140 250,138.4 250,136.8 249.9,135.1 249.8,133.5 249.7,131.9 249.6,130.3 249.5,128.6 249.3,127 249.1,125.3 248.9,123.7 248.7,122 248.4,120.3 248.1,118.7 247.8,117 247.5,115.2 247.2,113.5 246.8,111.8 246.4,110 246,108.3 245.6,106.5 245.1,104.7 244.6,102.8 244.1,101 243.6,99.1 243,97.2 242.4,95.3 241.8,93.4 241.1,91.4 240.5,89.4 239.8,87.4 239.1,85.4 238.3,83.3 237.5,81.2 236.7,79.1 235.9,76.9 235,74.7 234.1,72.4 233.2,70.2 232.3,67.9 231.3,65.5 230.2,63.1 229.2,60.7 228.1,58.2 227,55.7 225.8,53.1 224.6,50.5 223.4,47.8 222.2,45.1 220.9,42.3 219.5,39.5 218.2,36.6 216.7,33.7 215.3,30.7 213.8,27.6 212.3,24.5 210.7,21.4 209.1,18.1 207.4,14.8 205.7,11.4 203.9,8" fill="none" stroke="#7ccf9a" stroke-width="2.4"/>
  <polyline points="376.1,272 374.3,268.6 372.6,265.2 370.9,261.9 369.3,258.6 367.7,255.5 366.2,252.4 364.7,249.3 363.3,246.3 361.8,243.4 360.5,240.5 359.1,237.7 357.8,234.9 356.6,232.2 355.4,229.5 354.2,226.9 353,224.3 351.9,221.8 350.8,219.3 349.8,216.9 348.7,214.5 347.7,212.1 346.8,209.8 345.9,207.6 345,205.3 344.1,203.1 343.3,200.9 342.5,198.8 341.7,196.7 340.9,194.6 340.2,192.6 339.5,190.6 338.9,188.6 338.2,186.6 337.6,184.7 337,182.8 336.4,180.9 335.9,179 335.4,177.2 334.9,175.3 334.4,173.5 334,171.7 333.6,170 333.2,168.2 332.8,166.5 332.5,164.8 332.2,163 331.9,161.3 331.6,159.7 331.3,158 331.1,156.3 330.9,154.7 330.7,153 330.5,151.4 330.4,149.7 330.3,148.1 330.2,146.5 330.1,144.9 330,143.2 330,141.6 330,140 330,138.4 330,136.8 330.1,135.1 330.2,133.5 330.3,131.9 330.4,130.3 330.5,128.6 330.7,127 330.9,125.3 331.1,123.7 331.3,122 331.6,120.3 331.9,118.7 332.2,117 332.5,115.2 332.8,113.5 333.2,111.8 333.6,110 334,108.3 334.4,106.5 334.9,104.7 335.4,102.8 335.9,101 336.4,99.1 337,97.2 337.6,95.3 338.2,93.4 338.9,91.4 339.5,89.4 340.2,87.4 340.9,85.4 341.7,83.3 342.5,81.2 343.3,79.1 344.1,76.9 345,74.7 345.9,72.4 346.8,70.2 347.7,67.9 348.7,65.5 349.8,63.1 350.8,60.7 351.9,58.2 353,55.7 354.2,53.1 355.4,50.5 356.6,47.8 357.8,45.1 359.1,42.3 360.5,39.5 361.8,36.6 363.3,33.7 364.7,30.7 366.2,27.6 367.7,24.5 369.3,21.4 370.9,18.1 372.6,14.8 374.3,11.4 376.1,8" fill="none" stroke="#7ccf9a" stroke-width="2.4"/>
  <circle cx="210" cy="140" r="3" fill="currentColor"/>
  <text x="208" y="156" font-size="13" text-anchor="middle" fill="currentColor">F</text>
  <text x="161" y="102.8" font-size="12" text-anchor="end" fill="currentColor">ellipse, e = ½</text>
  <text x="114" y="23" font-size="12" text-anchor="end" fill="currentColor">parabola, e = 1</text>
  <text x="205" y="263" font-size="11" text-anchor="end" fill="currentColor">hyperbola, e=2</text>
</svg>
</div>

The figure shows three conics sharing one focus and one directrix. As $e$ shrinks toward 0 the ellipse becomes rounder;
a circle is the limiting case $e = 0$ (with the directrix infinitely far away).

### The parabola

Put the focus at $F = (0, p)$ and the directrix at $y = -p$, with $p > 0$. For $P = (x, y)$, the condition $PF = \operatorname{dist}(P, \ell)$
reads $\sqrt{x^2 + (y - p)^2} = |y + p|$. Square both sides:

$$x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2, \qquad x^2 = 4py .$$

So $y = x^2/(4p)$: every parabola is the graph of a quadratic, after moving the axes. Conversely $y = x^2$ has
$4p = 1$, focus $(0, \tfrac14)$ and directrix $y = -\tfrac14$. Check with the point $(1, 1)$: its distance to the focus is
$\sqrt{1 + (3/4)^2} = 5/4$, and to the directrix $1 + 1/4 = 5/4$.

**Theorem (reflection property of the parabola).** Every ray parallel to the axis of a parabola, reflected at the
curve (angle of incidence equals angle of reflection, measured from the tangent), passes through the focus.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 275" role="img" aria-label="The parabola y equals x squared over 4 with focus F at 0 comma 1 and directrix y equals minus 1. Vertical rays coming down reflect at the curve and all pass through F. At the point P, the distances PF and PD to the directrix are equal and the tangent bisects the angle FPD">
  <line x1="7.2" y1="252" x2="412.8" y2="252" stroke="currentColor" stroke-width="1.4"/>
  <text x="9.2" y="268" font-size="12" text-anchor="start" fill="currentColor">directrix</text>
  <line x1="210" y1="267.6" x2="210" y2="12.8" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <polyline points="15,17.2 18.2,23.2 21.5,29.2 24.8,35 28,40.8 31.2,46.4 34.5,51.9 37.8,57.4 41,62.7 44.2,67.9 47.5,73 50.8,78.1 54,83 57.2,87.8 60.5,92.5 63.8,97.2 67,101.7 70.2,106.1 73.5,110.4 76.8,114.6 80,118.8 83.2,122.8 86.5,126.7 89.8,130.5 93,134.2 96.2,137.8 99.5,141.3 102.8,144.7 106,148 109.2,151.2 112.5,154.3 115.8,157.3 119,160.2 122.2,163 125.5,165.7 128.8,168.3 132,170.8 135.2,173.1 138.5,175.4 141.8,177.6 145,179.7 148.2,181.7 151.5,183.5 154.8,185.3 158,187 161.2,188.6 164.5,190 167.8,191.4 171,192.7 174.2,193.9 177.5,194.9 180.8,195.9 184,196.8 187.2,197.5 190.5,198.2 193.8,198.7 197,199.2 200.2,199.5 203.5,199.8 206.8,199.9 210,200 213.2,199.9 216.5,199.8 219.8,199.5 223,199.2 226.2,198.7 229.5,198.2 232.8,197.5 236,196.8 239.2,195.9 242.5,194.9 245.8,193.9 249,192.7 252.2,191.4 255.5,190 258.8,188.6 262,187 265.2,185.3 268.5,183.5 271.8,181.7 275,179.7 278.2,177.6 281.5,175.4 284.8,173.1 288,170.8 291.2,168.3 294.5,165.7 297.8,163 301,160.2 304.2,157.3 307.5,154.3 310.8,151.2 314,148 317.2,144.7 320.5,141.3 323.8,137.8 327,134.2 330.2,130.5 333.5,126.7 336.8,122.8 340,118.8 343.2,114.6 346.5,110.4 349.8,106.1 353,101.7 356.2,97.2 359.5,92.5 362.8,87.8 366,83 369.2,78.1 372.5,73 375.8,67.9 379,62.7 382.2,57.4 385.5,51.9 388.8,46.4 392,40.8 395.2,35 398.5,29.2 401.8,23.2 405,17.2" fill="none" stroke="#eea66f" stroke-width="2.4"/>
  <line x1="54" y1="12.8" x2="54" y2="51.4" stroke="#9cc9ea" stroke-width="1.1"/>
  <polygon points="54,51.4 56.7,45.4 51.3,45.4" fill="#9cc9ea"/>
  <line x1="54" y1="47.9" x2="54" y2="83" stroke="#9cc9ea" stroke-width="1.1"/>
  <line x1="54" y1="83" x2="147.6" y2="122" stroke="#9cc9ea" stroke-width="1.1"/>
  <polygon points="147.6,122 143.1,117.2 141,122.2" fill="#9cc9ea"/>
  <line x1="139.8" y1="118.8" x2="210" y2="148" stroke="#9cc9ea" stroke-width="1.1"/>
  <line x1="137.2" y1="12.8" x2="137.2" y2="101.7" stroke="#9cc9ea" stroke-width="1.1"/>
  <polygon points="137.2,101.7 139.9,95.7 134.5,95.7" fill="#9cc9ea"/>
  <line x1="137.2" y1="93.7" x2="137.2" y2="174.5" stroke="#9cc9ea" stroke-width="1.1"/>
  <line x1="137.2" y1="174.5" x2="180.9" y2="158.6" stroke="#9cc9ea" stroke-width="1.1"/>
  <polygon points="180.9,158.6 174.3,158.1 176.2,163.2" fill="#9cc9ea"/>
  <line x1="177.2" y1="159.9" x2="210" y2="148" stroke="#9cc9ea" stroke-width="1.1"/>
  <line x1="256.8" y1="12.8" x2="256.8" y2="110" stroke="#9cc9ea" stroke-width="1.1"/>
  <polygon points="256.8,110 259.5,104 254.1,104" fill="#9cc9ea"/>
  <line x1="256.8" y1="101.1" x2="256.8" y2="189.5" stroke="#9cc9ea" stroke-width="1.1"/>
  <line x1="256.8" y1="189.5" x2="228.7" y2="164.6" stroke="#9cc9ea" stroke-width="1.1"/>
  <polygon points="228.7,164.6 231.4,170.6 235,166.5" fill="#9cc9ea"/>
  <line x1="231.1" y1="166.7" x2="210" y2="148" stroke="#9cc9ea" stroke-width="1.1"/>
  <line x1="376.4" y1="12.8" x2="376.4" y2="42.5" stroke="#9cc9ea" stroke-width="1.1"/>
  <polygon points="376.4,42.5 379.1,36.5 373.7,36.5" fill="#9cc9ea"/>
  <line x1="376.4" y1="39.8" x2="376.4" y2="66.9" stroke="#9cc9ea" stroke-width="1.1"/>
  <line x1="376.4" y1="66.9" x2="276.6" y2="115.6" stroke="#9cc9ea" stroke-width="1.1"/>
  <polygon points="276.6,115.6 283.1,115.3 280.8,110.5" fill="#9cc9ea"/>
  <line x1="284.9" y1="111.5" x2="210" y2="148" stroke="#9cc9ea" stroke-width="1.1"/>
  <line x1="314" y1="148" x2="314" y2="252" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="314" y1="148" x2="210" y2="148" stroke="currentColor" stroke-width="1.6"/>
  <line x1="215.2" y1="246.8" x2="392" y2="70" stroke="#7ccf9a" stroke-width="1.4"/>
  <line x1="264" y1="154" x2="264" y2="142" stroke="currentColor" stroke-width="1.3"/>
  <line x1="260" y1="154" x2="260" y2="142" stroke="currentColor" stroke-width="1.3"/>
  <line x1="320" y1="198" x2="308" y2="198" stroke="currentColor" stroke-width="1.3"/>
  <line x1="320" y1="202" x2="308" y2="202" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="210" cy="148" r="3" fill="currentColor"/>
  <circle cx="314" cy="148" r="3" fill="currentColor"/>
  <circle cx="314" cy="252" r="3" fill="currentColor"/>
  <text x="200" y="144" font-size="13" text-anchor="middle" fill="currentColor">F</text>
  <text x="326" y="156" font-size="13" text-anchor="middle" fill="currentColor">P</text>
  <text x="324" y="266" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <text x="361" y="115" font-size="12" text-anchor="start" fill="currentColor">tangent</text>
</svg>
</div>

*Proof.* Let $P$ be on the parabola, $D$ the foot of the perpendicular from $P$ to the directrix, so $PD = PF$. Let $t$
be the bisector of the angle $FPD$. Because triangle $FPD$ is isosceles, $t$ is the perpendicular bisector of $FD$.

*$t$ is the tangent.* Take any other point $Q$ on $t$. Since $Q$ is on the perpendicular bisector of $FD$, $QF = QD$. But
$QD$ is not perpendicular to the directrix (only $PD$ is, among segments from $t$ to $D$), so $QD$ is longer than the
distance from $Q$ to the directrix. So $QF > \operatorname{dist}(Q, \ell)$, and $Q$ is not on the parabola. The line $t$
meets the parabola only at $P$, and it does not cross it (all its other points are on the side where $QF > \operatorname{dist}(Q,\ell)$,
the outside), so it is the tangent.

*The reflection.* A ray parallel to the axis arrives along the line $DP$ extended beyond $P$. The angle it makes with
$t$ equals the angle between $PD$ and $t$ (vertical angles), which equals the angle between $t$ and $PF$ ($t$ is the
bisector). So the reflected ray leaves along $PF$, toward the focus. $\blacksquare$

That is why satellite dishes, radio telescopes and the dish antennas that carry signals between Earth and spacecraft
at Mars are paraboloids (a parabola spun about its axis): a faint signal arriving parallel to the axis is gathered at
the focus, where the receiver sits. Run backwards, a lamp at the focus of a car headlight sends out a parallel beam.

### The ellipse

**Definition (two foci).** An **ellipse** is the set of points $P$ whose distances to two fixed points $F_1$, $F_2$ (the
**foci**) add up to a constant $2a$, larger than $F_1F_2$.

This is the gardener's construction: tie the ends of a string of length $2a$ to two pegs and draw with a pencil that
keeps the string taut.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="An ellipse with semi-major axis a and semi-minor axis b and foci F1 and F2. From a point P the two focal distances add up to 2a, and the tangent at P makes equal angles with PF1 and PF2">
  <polyline points="375,125 374.9,121.5 374.7,118.1 374.3,114.6 373.7,111.2 373,107.8 372.1,104.4 371,101 369.8,97.6 368.4,94.3 366.9,91 365.2,87.7 363.4,84.5 361.4,81.3 359.3,78.2 357,75.1 354.6,72 352,69 349.3,66.1 346.5,63.2 343.5,60.3 340.4,57.6 337.1,54.9 333.8,52.3 330.3,49.7 326.7,47.2 323,44.8 319.1,42.5 315.2,40.2 311.1,38.1 307,36 302.7,34 298.4,32.1 294,30.3 289.5,28.6 284.9,27 280.3,25.5 275.5,24 270.7,22.7 265.9,21.5 261,20.4 256,19.4 251,18.5 246,17.6 240.9,16.9 235.8,16.4 230.7,15.9 225.5,15.5 220.4,15.2 215.2,15.1 210,15 204.8,15.1 199.6,15.2 194.5,15.5 189.3,15.9 184.2,16.4 179.1,16.9 174,17.6 169,18.5 164,19.4 159,20.4 154.1,21.5 149.3,22.7 144.5,24 139.7,25.5 135.1,27 130.5,28.6 126,30.3 121.6,32.1 117.3,34 113,36 108.9,38.1 104.8,40.2 100.9,42.5 97,44.8 93.3,47.2 89.7,49.7 86.2,52.3 82.9,54.9 79.6,57.6 76.5,60.3 73.5,63.2 70.7,66.1 68,69 65.4,72 63,75.1 60.7,78.2 58.6,81.3 56.6,84.5 54.8,87.7 53.1,91 51.6,94.3 50.2,97.6 49,101 47.9,104.4 47,107.8 46.3,111.2 45.7,114.6 45.3,118.1 45.1,121.5 45,125 45.1,128.5 45.3,131.9 45.7,135.4 46.3,138.8 47,142.2 47.9,145.6 49,149 50.2,152.4 51.6,155.7 53.1,159 54.8,162.3 56.6,165.5 58.6,168.7 60.7,171.8 63,174.9 65.4,178 68,181 70.7,183.9 73.5,186.8 76.5,189.7 79.6,192.4 82.9,195.1 86.2,197.7 89.7,200.3 93.3,202.8 97,205.2 100.9,207.5 104.8,209.8 108.9,211.9 113,214 117.3,216 121.6,217.9 126,219.7 130.5,221.4 135.1,223 139.7,224.5 144.5,226 149.3,227.3 154.1,228.5 159,229.6 164,230.6 169,231.5 174,232.4 179.1,233.1 184.2,233.6 189.3,234.1 194.5,234.5 199.6,234.8 204.8,234.9 210,235 215.2,234.9 220.4,234.8 225.5,234.5 230.7,234.1 235.8,233.6 240.9,233.1 246,232.4 251,231.5 256,230.6 261,229.6 265.9,228.5 270.7,227.3 275.5,226 280.3,224.5 284.9,223 289.5,221.4 294,219.7 298.4,217.9 302.7,216 307,214 311.1,211.9 315.2,209.8 319.1,207.5 323,205.2 326.7,202.8 330.3,200.3 333.8,197.7 337.1,195.1 340.4,192.4 343.5,189.7 346.5,186.8 349.3,183.9 352,181 354.6,178 357,174.9 359.3,171.8 361.4,168.7 363.4,165.5 365.2,162.3 366.9,159 368.4,155.7 369.8,152.4 371,149 372.1,145.6 373,142.2 373.7,138.8 374.3,135.4 374.7,131.9 374.9,128.5 375,125" fill="none" stroke="#eea66f" stroke-width="2.4"/>
  <line x1="28.5" y1="125" x2="391.5" y2="125" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <line x1="210" y1="246" x2="210" y2="4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <polygon points="87,125 299.1,217.6 333,125" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.4"/>
  <line x1="243.5" y1="241.4" x2="390.2" y2="178.6" stroke="#7ccf9a" stroke-width="1.4"/>
  <polyline points="316.8,210 316.2,208.6 315.5,207.3 314.6,206.1 313.7,204.9 312.7,203.9 311.6,202.9 310.4,201.9 309.1,201.1 307.8,200.4 306.5,199.8 305.1,199.3 303.7,198.8 302.2,198.6 300.7,198.4 299.2,198.3 297.7,198.4 296.2,198.5 294.8,198.8 293.3,199.2 291.9,199.7 290.6,200.3 289.3,201 288,201.9 286.8,202.8 285.7,203.8 284.7,204.8 283.8,206 282.9,207.2 282.2,208.5 281.5,209.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="305.8,199.5 304.3,199 302.9,198.7 301.4,198.4 299.9,198.3 298.4,198.3 296.9,198.4 295.5,198.7 294,199 292.6,199.5 291.2,200 289.9,200.7 288.6,201.5 287.4,202.3 286.2,203.3 285.2,204.3 284.2,205.4 283.3,206.6 282.5,207.9 281.8,209.2 281.2,210.6 280.7,212 280.3,213.4 280.1,214.9 279.9,216.4 279.9,217.9 280,219.4 280.2,220.9 280.5,222.3 280.9,223.7 281.5,225.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="87" cy="125" r="3" fill="currentColor"/>
  <text x="87" y="142" font-size="13" text-anchor="middle" fill="currentColor">F₁</text>
  <circle cx="333" cy="125" r="3" fill="currentColor"/>
  <text x="333" y="142" font-size="13" text-anchor="middle" fill="currentColor">F₂</text>
  <circle cx="299.1" cy="217.6" r="3" fill="currentColor"/>
  <text x="297.1" y="237.6" font-size="13" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="210" cy="125" r="2" fill="currentColor"/>
  <text x="292.5" y="125" font-size="13" text-anchor="middle" fill="currentColor"></text>
  <text x="127.5" y="119" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">a</text>
  <text x="202" y="70" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">b</text>
  <line x1="210" y1="125" x2="45" y2="125" stroke="currentColor" stroke-width="2"/>
  <line x1="210" y1="125" x2="210" y2="15" stroke="currentColor" stroke-width="2"/>
  <text x="410" y="18" font-size="12" text-anchor="end" fill="currentColor">PF₁ + PF₂ = 2a,   c² = a² − b²</text>
</svg>
</div>

**Equation.** Put the foci at $(\pm c, 0)$ with $0 \le c < a$. The condition is

$$\sqrt{(x + c)^2 + y^2} + \sqrt{(x - c)^2 + y^2} = 2a .$$

Move the second root across and square: $(x + c)^2 + y^2 = 4a^2 - 4a\sqrt{(x - c)^2 + y^2} + (x - c)^2 + y^2$, which
simplifies to

$$a\sqrt{(x - c)^2 + y^2} = a^2 - cx . \qquad (*)$$

Square again: $a^2(x^2 - 2cx + c^2 + y^2) = a^4 - 2a^2cx + c^2x^2$, that is $(a^2 - c^2)x^2 + a^2y^2 = a^2(a^2 - c^2)$. Put
$b^2 = a^2 - c^2$ and divide by $a^2b^2$:

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad b^2 = a^2 - c^2 .$$

(Each squaring step can be reversed for points of this curve, so nothing extra crept in.) The numbers $a$ and $b$ are
the **semi-major** and **semi-minor axes**: the ellipse crosses the axes at $(\pm a, 0)$ and $(0, \pm b)$. The point
$(0, b)$ is at distance $a$ from each focus, which is where $b^2 + c^2 = a^2$ comes from.

**Eccentricity and directrix.** Divide $(*)$ by $a$ and set $e = c/a$:

$$PF_2 = a - ex = e\left(\frac{a}{e} - x\right).$$

Since $|x| \le a < a/e$, the bracket is the distance from $P$ to the line $x = a/e$. So the two-foci ellipse is the
focus-directrix conic with focus $F_2$, directrix $x = a/e$ and eccentricity $e = c/a < 1$. The two definitions agree.

**Theorem (reflection property of the ellipse).** A ray from one focus, reflected at the ellipse, passes through the
other focus.

*Proof.* At a point $P$ of the ellipse, let $t$ be the line through $P$ making equal angles with $PF_1$ and $PF_2$ (the
external bisector of angle $F_1PF_2$). Reflect $F_2$ in $t$ to get $F_2'$. Because the angles are equal, $F_1$, $P$ and $F_2'$
lie on one straight line, so $PF_1 + PF_2 = PF_1 + PF_2' = F_1F_2'$. For any other point $Q$ of $t$,
$QF_1 + QF_2 = QF_1 + QF_2' > F_1F_2' = 2a$ by the triangle inequality ([Chapter 2](02-Triangles-and-Congruence.md)), so
$Q$ is outside the ellipse. Hence $t$ touches the ellipse only at $P$: it is the tangent, and it makes equal angles with
the two focal lines, which is the reflection law. $\blacksquare$

This is Heron's shortest-path argument, and it explains whispering galleries: in an elliptical room a whisper at one
focus is heard at the other. Medicine uses the same fact: some machines for breaking up kidney stones make a shock wave
at one focus of an ellipsoidal reflector, with the stone placed at the other.

### The hyperbola

**Definition.** A **hyperbola** is the set of points whose distances to two foci $F_1$, $F_2$ **differ** by a constant
$2a$, smaller than $F_1F_2 = 2c$.

The same algebra as for the ellipse (with $c > a$ and $b^2 = c^2 - a^2$) gives

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad b^2 = c^2 - a^2,$$

and again the focus-directrix form with $e = c/a > 1$ and directrices $x = \pm a/e$. For large $x$ and $y$ the 1 on the right
hardly matters, and the curve approaches the two **asymptotes** $y = \pm\frac{b}{a}x$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="A hyperbola with two branches, foci F1 and F2 on the x-axis, and its two dashed asymptotes y equals plus or minus b over a times x. For a point P on the right branch, PF1 minus PF2 equals 2a">
  <line x1="8.4" y1="125" x2="411.6" y2="125" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <line x1="51.6" y1="243.8" x2="368.4" y2="6.2" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="51.6" y1="6.2" x2="368.4" y2="243.8" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <polyline points="374,240.2 369.7,236.7 365.6,233.4 361.5,230.1 357.6,226.9 353.8,223.8 350.1,220.8 346.5,217.8 343,214.9 339.7,212.1 336.4,209.4 333.3,206.7 330.2,204.1 327.3,201.6 324.4,199.1 321.6,196.7 319,194.4 316.4,192.1 313.9,189.8 311.5,187.6 309.1,185.5 306.9,183.4 304.7,181.4 302.6,179.4 300.6,177.4 298.6,175.5 296.7,173.6 294.9,171.8 293.2,170 291.5,168.2 289.9,166.5 288.4,164.8 286.9,163.2 285.5,161.6 284.1,160 282.8,158.4 281.6,156.9 280.4,155.3 279.3,153.8 278.2,152.4 277.2,150.9 276.2,149.5 275.3,148.1 274.5,146.7 273.7,145.4 272.9,144 272.2,142.7 271.6,141.3 271,140 270.4,138.7 269.9,137.5 269.5,136.2 269.1,134.9 268.7,133.7 268.4,132.4 268.2,131.2 268,129.9 267.8,128.7 267.7,127.5 267.6,126.2 267.6,125 267.6,123.8 267.7,122.5 267.8,121.3 268,120.1 268.2,118.8 268.4,117.6 268.7,116.3 269.1,115.1 269.5,113.8 269.9,112.5 270.4,111.3 271,110 271.6,108.7 272.2,107.3 272.9,106 273.7,104.6 274.5,103.3 275.3,101.9 276.2,100.5 277.2,99.1 278.2,97.6 279.3,96.2 280.4,94.7 281.6,93.1 282.8,91.6 284.1,90 285.5,88.4 286.9,86.8 288.4,85.2 289.9,83.5 291.5,81.8 293.2,80 294.9,78.2 296.7,76.4 298.6,74.5 300.6,72.6 302.6,70.6 304.7,68.6 306.9,66.6 309.1,64.5 311.5,62.4 313.9,60.2 316.4,57.9 319,55.6 321.6,53.3 324.4,50.9 327.3,48.4 330.2,45.9 333.3,43.3 336.4,40.6 339.7,37.9 343,35.1 346.5,32.2 350.1,29.2 353.8,26.2 357.6,23.1 361.5,19.9 365.6,16.6 369.7,13.3 374,9.8" fill="none" stroke="#eea66f" stroke-width="2.4"/>
  <polyline points="46,240.2 50.3,236.7 54.4,233.4 58.5,230.1 62.4,226.9 66.2,223.8 69.9,220.8 73.5,217.8 77,214.9 80.3,212.1 83.6,209.4 86.7,206.7 89.8,204.1 92.7,201.6 95.6,199.1 98.4,196.7 101,194.4 103.6,192.1 106.1,189.8 108.5,187.6 110.9,185.5 113.1,183.4 115.3,181.4 117.4,179.4 119.4,177.4 121.4,175.5 123.3,173.6 125.1,171.8 126.8,170 128.5,168.2 130.1,166.5 131.6,164.8 133.1,163.2 134.5,161.6 135.9,160 137.2,158.4 138.4,156.9 139.6,155.3 140.7,153.8 141.8,152.4 142.8,150.9 143.8,149.5 144.7,148.1 145.5,146.7 146.3,145.4 147.1,144 147.8,142.7 148.4,141.3 149,140 149.6,138.7 150.1,137.5 150.5,136.2 150.9,134.9 151.3,133.7 151.6,132.4 151.8,131.2 152,129.9 152.2,128.7 152.3,127.5 152.4,126.2 152.4,125 152.4,123.8 152.3,122.5 152.2,121.3 152,120.1 151.8,118.8 151.6,117.6 151.3,116.3 150.9,115.1 150.5,113.8 150.1,112.5 149.6,111.3 149,110 148.4,108.7 147.8,107.3 147.1,106 146.3,104.6 145.5,103.3 144.7,101.9 143.8,100.5 142.8,99.1 141.8,97.6 140.7,96.2 139.6,94.7 138.4,93.1 137.2,91.6 135.9,90 134.5,88.4 133.1,86.8 131.6,85.2 130.1,83.5 128.5,81.8 126.8,80 125.1,78.2 123.3,76.4 121.4,74.5 119.4,72.6 117.4,70.6 115.3,68.6 113.1,66.6 110.9,64.5 108.5,62.4 106.1,60.2 103.6,57.9 101,55.6 98.4,53.3 95.6,50.9 92.7,48.4 89.8,45.9 86.7,43.3 83.6,40.6 80.3,37.9 77,35.1 73.5,32.2 69.9,29.2 66.2,26.2 62.4,23.1 58.5,19.9 54.4,16.6 50.3,13.3 46,9.8" fill="none" stroke="#eea66f" stroke-width="2.4"/>
  <line x1="138" y1="125" x2="292.5" y2="80.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="282" y1="125" x2="292.5" y2="80.7" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="138" cy="125" r="3" fill="currentColor"/>
  <text x="138" y="142" font-size="13" text-anchor="middle" fill="currentColor">F₁</text>
  <circle cx="282" cy="125" r="3" fill="currentColor"/>
  <text x="282" y="142" font-size="13" text-anchor="middle" fill="currentColor">F₂</text>
  <circle cx="292.5" cy="80.7" r="3" fill="currentColor"/>
  <text x="302.5" y="84.7" font-size="13" text-anchor="middle" fill="currentColor">P</text>
  <text x="354.4" y="14.2" font-size="12" text-anchor="end" fill="currentColor">y = (b/a)x</text>
  <text x="410" y="244" font-size="12" text-anchor="end" fill="currentColor">PF₁ − PF₂ = 2a,   c² = a² + b²</text>
</svg>
</div>

The tangent at a point of a hyperbola bisects the angle between the lines to the foci (the internal bisector this
time), so a ray aimed at one focus is reflected toward the other. Telescope makers use a hyperbolic secondary mirror in
the Cassegrain design for exactly this. And because a constant difference of distances is a constant difference of
arrival times, a ship that measures the time difference between radio signals from two stations knows it is on a
certain hyperbola; that was the principle of the LORAN navigation system.

### The general second-degree equation

Every equation $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$ (with $A$, $B$, $C$ not all zero) describes a conic, possibly a
**degenerate** one (two lines, one line, a point, or nothing). If it is a genuine curve, it is

- an ellipse (or circle) if $B^2 - 4AC < 0$,
- a parabola if $B^2 - 4AC = 0$,
- a hyperbola if $B^2 - 4AC > 0$.

The proof rotates the axes to remove the $xy$ term (rotations are in [Chapter 10](10-Transformations-and-Symmetry.md),
and in linear algebra this is diagonalising a symmetric matrix); $B^2 - 4AC$ does not change under rotation, and then
completing squares finishes the job. For example $xy = 1$ has $B^2 - 4AC = 1 > 0$: it is a hyperbola, turned by $45°$,
with the axes as asymptotes.

**Why are cone sections and focus curves the same?** In 1822 Germinal Dandelin gave a beautiful argument. Put a ball
inside the cone, touching the cone along a circle and touching the cutting plane at a point $F$. From any point $P$
of the section, the distance to $F$ equals the distance along the cone to the circle of contact (two tangent segments
from $P$ to the same ball are equal, as in [Chapter 6](06-Circles.md)). With a second ball on the other side of the
plane, the sum of the two distances is the distance between the two circles of contact along the cone, the same for
every $P$. So the section is an ellipse with the two touching points as foci. The full argument is in Hilbert and
Cohn-Vossen's book in the Further reading.

## 8.6 Kepler's ellipses and the orbit of Mars

For two thousand years astronomers described planetary motion with circles: circles on circles, off-centre circles,
circles around moving points. Johannes Kepler inherited the most accurate naked-eye observations ever made, Tycho
Brahe's, and set himself to fit the motion of Mars. It took him years. His best model with circles still missed
some of Tycho's positions by up to about 8 minutes of arc, more than Tycho's observations could be wrong by, and Kepler
refused to ignore the difference. In *Astronomia nova* (1609) he announced the first two of his laws, and the third
followed in *Harmonices mundi* (1619):

1. Each planet moves on an **ellipse** with the Sun at one focus.
2. The line from the Sun to the planet sweeps out **equal areas in equal times**: the planet moves faster near the Sun.
3. The square of the period is proportional to the cube of the semi-major axis: $T^2 \propto a^3$. In years and
   astronomical units (AU, the mean Earth-Sun distance, about 149.6 million km), $T^2 = a^3$.

Mars was the right planet to study. Its orbit is more eccentric than that of any planet then known except Mercury,
which is hard to observe because it never strays far from the Sun.

**The numbers.** Mars's orbit has semi-major axis $a \approx 1.5237$ AU (about 227.9 million km) and eccentricity
$e \approx 0.0934$.

- **Perihelion** (closest to the Sun): $a(1 - e) \approx 1.3814$ AU $\approx 206.6$ million km.
- **Aphelion** (farthest): $a(1 + e) \approx 1.6660$ AU $\approx 249.2$ million km.
- **Semi-minor axis:** $b = a\sqrt{1 - e^2} \approx 0.99563\,a$. The orbit's **shape** differs from a circle by less than half
  a per cent.
- **Sun's offset:** the Sun sits $c = ae \approx 0.1423$ AU $\approx 21.3$ million km from the centre of the ellipse.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 290" role="img" aria-label="The orbit of Mars drawn to scale as an ellipse with eccentricity 0.0934, with the Sun at a focus, offset from the ellipse's centre C. Perihelion is 1.381 astronomical units from the Sun and aphelion 1.666. Earth's nearly circular orbit of radius 1 is shown inside for comparison">
  <polyline points="332.7,145 332.7,141.9 332.6,138.8 332.4,135.7 332.1,132.6 331.7,129.6 331.3,126.5 330.8,123.4 330.2,120.4 329.5,117.4 328.7,114.4 327.9,111.4 326.9,108.4 325.9,105.5 324.9,102.6 323.7,99.7 322.5,96.9 321.2,94.1 319.8,91.3 318.3,88.5 316.8,85.8 315.2,83.2 313.6,80.6 311.8,78 310.1,75.4 308.2,73 306.3,70.5 304.3,68.2 302.2,65.8 300.1,63.5 297.9,61.3 295.7,59.2 293.4,57.1 291.1,55 288.7,53 286.2,51.1 283.8,49.3 281.2,47.5 278.6,45.8 276,44.1 273.3,42.5 270.6,41 267.9,39.6 265.1,38.2 262.2,36.9 259.4,35.7 256.5,34.5 253.6,33.5 250.6,32.5 247.7,31.5 244.7,30.7 241.6,29.9 238.6,29.3 235.6,28.7 232.5,28.1 229.4,27.7 226.3,27.3 223.2,27 220.1,26.8 217,26.7 213.9,26.7 210.8,26.7 207.7,26.8 204.6,27 201.5,27.3 198.4,27.7 195.3,28.1 192.2,28.7 189.2,29.3 186.2,29.9 183.1,30.7 180.1,31.5 177.2,32.5 174.2,33.5 171.3,34.5 168.4,35.7 165.6,36.9 162.7,38.2 159.9,39.6 157.2,41 154.5,42.5 151.8,44.1 149.2,45.8 146.6,47.5 144,49.3 141.5,51.1 139.1,53 136.7,55 134.4,57.1 132.1,59.2 129.9,61.3 127.7,63.5 125.6,65.8 123.5,68.2 121.5,70.5 119.6,73 117.7,75.4 116,78 114.2,80.6 112.6,83.2 111,85.8 109.5,88.5 108,91.3 106.6,94.1 105.3,96.9 104.1,99.7 102.9,102.6 101.9,105.5 100.9,108.4 99.9,111.4 99.1,114.4 98.3,117.4 97.6,120.4 97,123.4 96.5,126.5 96.1,129.6 95.7,132.6 95.4,135.7 95.2,138.8 95.1,141.9 95.1,145 95.1,148.1 95.2,151.2 95.4,154.3 95.7,157.4 96.1,160.4 96.5,163.5 97,166.6 97.6,169.6 98.3,172.6 99.1,175.6 99.9,178.6 100.9,181.6 101.9,184.5 102.9,187.4 104.1,190.3 105.3,193.1 106.6,195.9 108,198.7 109.5,201.5 111,204.2 112.6,206.8 114.2,209.4 116,212 117.7,214.6 119.6,217 121.5,219.5 123.5,221.8 125.6,224.2 127.7,226.5 129.9,228.7 132.1,230.8 134.4,232.9 136.7,235 139.1,237 141.5,238.9 144,240.7 146.6,242.5 149.2,244.2 151.8,245.9 154.5,247.5 157.2,249 159.9,250.4 162.7,251.8 165.6,253.1 168.4,254.3 171.3,255.5 174.2,256.5 177.2,257.5 180.1,258.5 183.1,259.3 186.2,260.1 189.2,260.7 192.2,261.3 195.3,261.9 198.4,262.3 201.5,262.7 204.6,263 207.7,263.2 210.8,263.3 213.9,263.3 217,263.3 220.1,263.2 223.2,263 226.3,262.7 229.4,262.3 232.5,261.9 235.6,261.3 238.6,260.7 241.6,260.1 244.7,259.3 247.7,258.5 250.6,257.5 253.6,256.5 256.5,255.5 259.4,254.3 262.2,253.1 265.1,251.8 267.9,250.4 270.6,249 273.3,247.5 276,245.9 278.6,244.2 281.2,242.5 283.8,240.7 286.2,238.9 288.7,237 291.1,235 293.4,232.9 295.7,230.8 297.9,228.7 300.1,226.5 302.2,224.2 304.3,221.8 306.3,219.5 308.2,217 310.1,214.6 311.8,212 313.6,209.4 315.2,206.8 316.8,204.2 318.3,201.5 319.8,198.7 321.2,195.9 322.5,193.1 323.7,190.3 324.9,187.4 325.9,184.5 326.9,181.6 327.9,178.6 328.7,175.6 329.5,172.6 330.2,169.6 330.8,166.6 331.3,163.5 331.7,160.4 332.1,157.4 332.4,154.3 332.6,151.2 332.7,148.1 332.7,145" fill="none" stroke="#eea66f" stroke-width="2.4"/>
  <circle cx="225" cy="145" r="78" fill="none" stroke="#9cc9ea" stroke-width="1.6"/>
  <line x1="95.1" y1="145" x2="332.7" y2="145" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <circle cx="225" cy="145" r="5.5" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1"/>
  <circle cx="213.9" cy="145" r="2.5" fill="currentColor"/>
  <text x="211.9" y="137" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <text x="225" y="165" font-size="12" text-anchor="middle" fill="currentColor">Sun</text>
  <circle cx="332.7" cy="145" r="3" fill="currentColor"/>
  <circle cx="95.1" cy="145" r="3" fill="currentColor"/>
  <text x="328.7" y="123" font-size="11" text-anchor="end" fill="currentColor">perihelion</text>
  <text x="328.7" y="136" font-size="11" text-anchor="end" fill="currentColor">1.381 AU</text>
  <text x="99.1" y="123" font-size="11" text-anchor="start" fill="currentColor">aphelion</text>
  <text x="99.1" y="136" font-size="11" text-anchor="start" fill="currentColor">1.666 AU</text>
  <text x="279.6" y="90.4" font-size="12" text-anchor="middle" fill="currentColor">Earth</text>
  <text x="307" y="246.4" font-size="12" text-anchor="start" fill="currentColor">Mars</text>
</svg>
</div>

Drawn to scale, as in the figure, the ellipse looks like a circle; what gives it away is that the Sun is clearly not
at its centre. That offset, not the flattening, is what Kepler detected.

**Period.** By the third law, $T = a^{3/2} = 1.5237^{1.5} \approx 1.881$ years $\approx 687$ days, the length of a Martian
year.

**Speed and sunlight.** At perihelion and aphelion the velocity is perpendicular to the Sun-Mars line, so by the
equal-areas law (the area swept in a short time is about $\tfrac12 \cdot r \cdot v \cdot \Delta t$) the product $r v$ is the
same at both points. So Mars moves faster at perihelion by the factor $(1 + e)/(1 - e) \approx 1.206$, about 21 per cent.
Sunlight falls off as the square of the distance, so at perihelion Mars receives
$\left(\frac{1 + e}{1 - e}\right)^2 \approx 1.45$ times the sunlight it gets at aphelion: about 45 per cent more. That
difference is large enough to shape the Martian seasons; the southern summer, which comes near perihelion, is
shorter and hotter than the northern one. For Earth, with $e \approx 0.0167$, the same ratio is only about 1.07.

**Close approaches.** Earth's orbit is nearly circular at about 149.6 million km. When Earth passes between the Sun and
Mars (an **opposition**) while Mars is near perihelion, the distance between them is roughly $206.6 - 150 \approx 57$
million km; in August 2003 it was about 55.8 million km, the closest in tens of thousands of years. Near aphelion,
oppositions are about 100 million km apart. This is why missions to Mars leave in windows about every 26 months, and
why some windows are better than others.

## 8.7 Polar coordinates

A radar screen, a lighthouse beam, and an astronomer describing an orbit all locate a point by **how far** and **which
direction**, not by $x$ and $y$.

**Definition.** The **polar coordinates** of a point $P$ are $(r, \theta)$, where $r$ is the distance $OP$ and $\theta$ is
the angle from the positive $x$-axis to the ray $OP$. From [Chapter 7](07-Trigonometry.md),

$$x = r\cos\theta, \qquad y = r\sin\theta, \qquad r = \sqrt{x^2 + y^2}, \qquad \tan\theta = \frac yx .$$

Unlike Cartesian coordinates, polar coordinates are not unique: $(r, \theta)$ and $(r, \theta + 360°)$ are the same
point, and the origin is $(0, \theta)$ for every $\theta$. It is often convenient to allow negative $r$, meaning the point
at distance $|r|$ in the opposite direction. To find $\theta$ from $(x, y)$, take $\tan^{-1}(y/x)$ and correct by $180°$
when $x < 0$ (programming languages provide `atan2(y, x)`, which does this).

**Worked example.** The point $(-3, 3)$ has $r = \sqrt{18} = 3\sqrt2$ and $\theta = 135°$ (second quadrant). The point
with polar coordinates $(4, 300°)$ is $(4\cos 300°, 4\sin 300°) = (2, -2\sqrt3)$.

**Curves.** Some curves are much simpler in polar form.

- $r = a$: the circle of radius $a$ about the origin.
- $\theta = \alpha$: a line through the origin.
- $r = 2a\cos\theta$: a circle through the origin. Multiply by $r$: $r^2 = 2ar\cos\theta$, which is $x^2 + y^2 = 2ax$, or
  $(x - a)^2 + y^2 = a^2$, the circle with centre $(a, 0)$ and radius $a$.
- $r = a(1 + \cos\theta)$: a **cardioid** (heart shape), the path of a point on a circle rolling around another of the
  same size.
- $r = \cos 2\theta$, $r = \cos 3\theta$: **roses**, with 4 and 3 petals.
- $r = a\theta$: the **spiral of Archimedes**, whose turns are equally spaced, like the groove of a record.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 205" role="img" aria-label="Three polar curves on faint polar grids: a cardioid r equals 1 plus cos theta, a three-petal rose r equals cos 3 theta, and an Archimedean spiral r equals a theta">
  <circle cx="80" cy="100" r="19" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <circle cx="80" cy="100" r="38" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <circle cx="80" cy="100" r="57" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <circle cx="80" cy="100" r="76" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="4" y1="100" x2="156" y2="100" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="14.2" y1="138" x2="145.8" y2="62" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="42" y1="165.8" x2="118" y2="34.2" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="80" y1="176" x2="80" y2="24" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="118" y1="165.8" x2="42" y2="34.2" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="145.8" y1="138" x2="14.2" y2="62" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <polyline points="156,100 156,98.8 155.9,97.6 155.9,96.4 155.8,95.2 155.6,94 155.5,92.9 155.3,91.7 155.1,90.5 154.9,89.3 154.6,88.2 154.3,87 154,85.9 153.6,84.7 153.3,83.6 152.9,82.5 152.5,81.4 152,80.3 151.5,79.2 151,78.1 150.5,77.1 150,76 149.4,75 148.8,74 148.2,73 147.5,72 146.9,71.1 146.2,70.1 145.5,69.2 144.8,68.3 144,67.4 143.3,66.5 142.5,65.7 141.7,64.8 140.9,64 140,63.2 139.2,62.4 138.3,61.7 137.4,61 136.5,60.3 135.6,59.6 134.7,58.9 133.8,58.3 132.8,57.7 131.8,57.1 130.9,56.6 129.9,56 128.9,55.5 127.9,55 126.9,54.6 125.9,54.1 124.8,53.7 123.8,53.3 122.8,53 121.7,52.6 120.7,52.3 119.7,52.1 118.6,51.8 117.6,51.6 116.5,51.4 115.5,51.2 114.4,51 113.4,50.9 112.3,50.8 111.3,50.7 110.2,50.7 109.2,50.6 108.2,50.6 107.1,50.7 106.1,50.7 105.1,50.8 104.1,50.9 103.1,51 102.1,51.1 101.1,51.3 100.1,51.5 99.1,51.7 98.2,51.9 97.2,52.1 96.3,52.4 95.4,52.7 94.5,53 93.6,53.3 92.7,53.7 91.8,54 90.9,54.4 90.1,54.8 89.3,55.2 88.5,55.7 87.7,56.1 86.9,56.6 86.1,57.1 85.4,57.6 84.6,58.1 83.9,58.6 83.2,59.1 82.5,59.7 81.9,60.3 81.2,60.8 80.6,61.4 80,62 79.4,62.6 78.8,63.2 78.3,63.8 77.8,64.5 77.3,65.1 76.8,65.7 76.3,66.4 75.8,67 75.4,67.7 75,68.3 74.6,69 74.2,69.7 73.9,70.3 73.5,71 73.2,71.7 72.9,72.3 72.6,73 72.4,73.7 72.1,74.4 71.9,75 71.7,75.7 71.5,76.4 71.3,77 71.2,77.7 71,78.3 70.9,79 70.8,79.6 70.7,80.3 70.6,80.9 70.6,81.5 70.5,82.1 70.5,82.7 70.5,83.3 70.5,83.9 70.5,84.5 70.5,85.1 70.6,85.7 70.6,86.2 70.7,86.8 70.8,87.3 70.9,87.9 71,88.4 71.1,88.9 71.2,89.4 71.3,89.9 71.5,90.3 71.6,90.8 71.8,91.3 72,91.7 72.1,92.1 72.3,92.5 72.5,92.9 72.7,93.3 72.9,93.7 73.1,94.1 73.3,94.4 73.5,94.8 73.7,95.1 73.9,95.4 74.1,95.7 74.3,96 74.6,96.3 74.8,96.6 75,96.8 75.2,97.1 75.4,97.3 75.7,97.5 75.9,97.7 76.1,97.9 76.3,98.1 76.5,98.3 76.7,98.5 76.9,98.6 77.1,98.8 77.3,98.9 77.5,99 77.7,99.1 77.9,99.2 78.1,99.3 78.2,99.4 78.4,99.5 78.6,99.6 78.7,99.6 78.8,99.7 79,99.8 79.1,99.8 79.2,99.8 79.3,99.9 79.4,99.9 79.5,99.9 79.6,99.9 79.7,100 79.8,100 79.8,100 79.9,100 79.9,100 80,100 80,100 80,100 80,100 80,100 80,100 80,100 79.9,100 79.9,100 79.8,100 79.8,100 79.7,100 79.6,100.1 79.5,100.1 79.4,100.1 79.3,100.1 79.2,100.2 79.1,100.2 79,100.2 78.8,100.3 78.7,100.4 78.6,100.4 78.4,100.5 78.2,100.6 78.1,100.7 77.9,100.8 77.7,100.9 77.5,101 77.3,101.1 77.1,101.2 76.9,101.4 76.7,101.5 76.5,101.7 76.3,101.9 76.1,102.1 75.9,102.3 75.7,102.5 75.4,102.7 75.2,102.9 75,103.2 74.8,103.4 74.6,103.7 74.3,104 74.1,104.3 73.9,104.6 73.7,104.9 73.5,105.2 73.3,105.6 73.1,105.9 72.9,106.3 72.7,106.7 72.5,107.1 72.3,107.5 72.1,107.9 72,108.3 71.8,108.7 71.6,109.2 71.5,109.7 71.3,110.1 71.2,110.6 71.1,111.1 71,111.6 70.9,112.1 70.8,112.7 70.7,113.2 70.6,113.8 70.6,114.3 70.5,114.9 70.5,115.5 70.5,116.1 70.5,116.7 70.5,117.3 70.5,117.9 70.6,118.5 70.6,119.1 70.7,119.7 70.8,120.4 70.9,121 71,121.7 71.2,122.3 71.3,123 71.5,123.6 71.7,124.3 71.9,125 72.1,125.6 72.4,126.3 72.6,127 72.9,127.7 73.2,128.3 73.5,129 73.9,129.7 74.2,130.3 74.6,131 75,131.7 75.4,132.3 75.8,133 76.3,133.6 76.8,134.3 77.3,134.9 77.8,135.5 78.3,136.2 78.8,136.8 79.4,137.4 80,138 80.6,138.6 81.2,139.2 81.9,139.7 82.5,140.3 83.2,140.9 83.9,141.4 84.6,141.9 85.4,142.4 86.1,142.9 86.9,143.4 87.7,143.9 88.5,144.3 89.3,144.8 90.1,145.2 90.9,145.6 91.8,146 92.7,146.3 93.6,146.7 94.5,147 95.4,147.3 96.3,147.6 97.2,147.9 98.2,148.1 99.1,148.3 100.1,148.5 101.1,148.7 102.1,148.9 103.1,149 104.1,149.1 105.1,149.2 106.1,149.3 107.1,149.3 108.2,149.4 109.2,149.4 110.2,149.3 111.3,149.3 112.3,149.2 113.4,149.1 114.4,149 115.5,148.8 116.5,148.6 117.6,148.4 118.6,148.2 119.7,147.9 120.7,147.7 121.7,147.4 122.8,147 123.8,146.7 124.8,146.3 125.9,145.9 126.9,145.4 127.9,145 128.9,144.5 129.9,144 130.9,143.4 131.8,142.9 132.8,142.3 133.8,141.7 134.7,141.1 135.6,140.4 136.5,139.7 137.4,139 138.3,138.3 139.2,137.6 140,136.8 140.9,136 141.7,135.2 142.5,134.3 143.3,133.5 144,132.6 144.8,131.7 145.5,130.8 146.2,129.9 146.9,128.9 147.5,128 148.2,127 148.8,126 149.4,125 150,124 150.5,122.9 151,121.9 151.5,120.8 152,119.7 152.5,118.6 152.9,117.5 153.3,116.4 153.6,115.3 154,114.1 154.3,113 154.6,111.8 154.9,110.7 155.1,109.5 155.3,108.3 155.5,107.1 155.6,106 155.8,104.8 155.9,103.6 155.9,102.4 156,101.2 156,100" fill="none" stroke="#eea66f" stroke-width="2.2"/>
  <circle cx="80" cy="100" r="2" fill="currentColor"/>
  <text x="80" y="194" font-size="12" text-anchor="middle" fill="currentColor">r = 1 + cos θ</text>
  <circle cx="232" cy="100" r="38" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <circle cx="232" cy="100" r="76" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="156" y1="100" x2="308" y2="100" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="166.2" y1="138" x2="297.8" y2="62" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="194" y1="165.8" x2="270" y2="34.2" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="232" y1="176" x2="232" y2="24" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="270" y1="165.8" x2="194" y2="34.2" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="297.8" y1="138" x2="166.2" y2="62" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <polyline points="308,100 308,99.4 307.9,98.8 307.8,98.2 307.6,97.6 307.4,97 307.2,96.5 306.9,95.9 306.5,95.3 306.1,94.8 305.7,94.2 305.2,93.7 304.7,93.1 304.1,92.6 303.5,92.1 302.8,91.6 302.1,91.1 301.4,90.7 300.6,90.2 299.7,89.8 298.9,89.4 298,89 297,88.6 296.1,88.3 295,88 294,87.7 292.9,87.4 291.8,87.1 290.6,86.9 289.4,86.7 288.2,86.5 286.9,86.4 285.7,86.2 284.4,86.1 283,86 281.7,86 280.3,86 278.9,86 277.4,86 276,86.1 274.5,86.2 273,86.3 271.5,86.5 269.9,86.7 268.4,86.9 266.8,87.1 265.3,87.4 263.7,87.7 262.1,88.1 260.5,88.5 258.9,88.9 257.3,89.3 255.6,89.8 254,90.3 252.4,90.8 250.7,91.4 249.1,92 247.5,92.6 245.8,93.2 244.2,93.9 242.6,94.6 241,95.3 239.4,96.1 237.8,96.9 236.2,97.7 234.6,98.5 233,99.4 231.5,100.3 229.9,101.2 228.4,102.2 226.9,103.1 225.4,104.1 224,105.1 222.5,106.1 221.1,107.2 219.7,108.2 218.3,109.3 216.9,110.4 215.6,111.5 214.3,112.7 213,113.8 211.7,115 210.5,116.1 209.3,117.3 208.2,118.5 207,119.7 205.9,120.9 204.8,122.1 203.8,123.3 202.8,124.6 201.8,125.8 200.9,127 200,128.3 199.1,129.5 198.2,130.7 197.4,131.9 196.7,133.2 196,134.4 195.3,135.6 194.6,136.8 194,138 193.4,139.2 192.9,140.4 192.4,141.5 191.9,142.7 191.5,143.8 191.1,145 190.7,146.1 190.4,147.2 190.2,148.2 189.9,149.3 189.7,150.3 189.5,151.3 189.4,152.3 189.3,153.3 189.3,154.2 189.3,155.1 189.3,156 189.3,156.9 189.4,157.7 189.5,158.5 189.7,159.2 189.8,160 190.1,160.7 190.3,161.3 190.6,162 190.9,162.6 191.2,163.1 191.6,163.7 192,164.2 192.4,164.6 192.9,165 193.3,165.4 193.8,165.7 194.3,166 194.9,166.3 195.5,166.5 196,166.6 196.7,166.8 197.3,166.8 197.9,166.9 198.6,166.9 199.3,166.8 200,166.7 200.7,166.6 201.4,166.4 202.1,166.2 202.8,165.9 203.6,165.6 204.4,165.3 205.1,164.9 205.9,164.4 206.7,163.9 207.5,163.4 208.3,162.8 209,162.2 209.8,161.5 210.6,160.8 211.4,160.1 212.2,159.3 213,158.5 213.8,157.6 214.6,156.7 215.3,155.7 216.1,154.7 216.9,153.7 217.6,152.6 218.3,151.5 219.1,150.4 219.8,149.2 220.5,148 221.2,146.7 221.8,145.5 222.5,144.1 223.1,142.8 223.8,141.4 224.4,140 225,138.6 225.5,137.1 226.1,135.6 226.6,134.1 227.1,132.5 227.6,131 228.1,129.4 228.5,127.8 228.9,126.1 229.3,124.5 229.7,122.8 230,121.1 230.3,119.4 230.6,117.7 230.9,116 231.1,114.2 231.3,112.5 231.5,110.7 231.6,108.9 231.8,107.1 231.9,105.4 231.9,103.6 232,101.8 232,100 232,98.2 231.9,96.4 231.9,94.6 231.8,92.9 231.6,91.1 231.5,89.3 231.3,87.5 231.1,85.8 230.9,84 230.6,82.3 230.3,80.6 230,78.9 229.7,77.2 229.3,75.5 228.9,73.9 228.5,72.2 228.1,70.6 227.6,69 227.1,67.5 226.6,65.9 226.1,64.4 225.5,62.9 225,61.4 224.4,60 223.8,58.6 223.1,57.2 222.5,55.9 221.8,54.5 221.2,53.3 220.5,52 219.8,50.8 219.1,49.6 218.3,48.5 217.6,47.4 216.9,46.3 216.1,45.3 215.3,44.3 214.6,43.3 213.8,42.4 213,41.5 212.2,40.7 211.4,39.9 210.6,39.2 209.8,38.5 209,37.8 208.3,37.2 207.5,36.6 206.7,36.1 205.9,35.6 205.1,35.1 204.4,34.7 203.6,34.4 202.8,34.1 202.1,33.8 201.4,33.6 200.7,33.4 200,33.3 199.3,33.2 198.6,33.1 197.9,33.1 197.3,33.2 196.7,33.2 196,33.4 195.5,33.5 194.9,33.7 194.3,34 193.8,34.3 193.3,34.6 192.9,35 192.4,35.4 192,35.8 191.6,36.3 191.2,36.9 190.9,37.4 190.6,38 190.3,38.7 190.1,39.3 189.8,40 189.7,40.8 189.5,41.5 189.4,42.3 189.3,43.1 189.3,44 189.3,44.9 189.3,45.8 189.3,46.7 189.4,47.7 189.5,48.7 189.7,49.7 189.9,50.7 190.2,51.8 190.4,52.8 190.7,53.9 191.1,55 191.5,56.2 191.9,57.3 192.4,58.5 192.9,59.6 193.4,60.8 194,62 194.6,63.2 195.3,64.4 196,65.6 196.7,66.8 197.4,68.1 198.2,69.3 199.1,70.5 200,71.7 200.9,73 201.8,74.2 202.8,75.4 203.8,76.7 204.8,77.9 205.9,79.1 207,80.3 208.2,81.5 209.3,82.7 210.5,83.9 211.7,85 213,86.2 214.3,87.3 215.6,88.5 216.9,89.6 218.3,90.7 219.7,91.8 221.1,92.8 222.5,93.9 224,94.9 225.4,95.9 226.9,96.9 228.4,97.8 229.9,98.8 231.5,99.7 233,100.6 234.6,101.5 236.2,102.3 237.8,103.1 239.4,103.9 241,104.7 242.6,105.4 244.2,106.1 245.8,106.8 247.5,107.4 249.1,108 250.7,108.6 252.4,109.2 254,109.7 255.6,110.2 257.3,110.7 258.9,111.1 260.5,111.5 262.1,111.9 263.7,112.3 265.3,112.6 266.8,112.9 268.4,113.1 269.9,113.3 271.5,113.5 273,113.7 274.5,113.8 276,113.9 277.4,114 278.9,114 280.3,114 281.7,114 283,114 284.4,113.9 285.7,113.8 286.9,113.6 288.2,113.5 289.4,113.3 290.6,113.1 291.8,112.9 292.9,112.6 294,112.3 295,112 296.1,111.7 297,111.4 298,111 298.9,110.6 299.7,110.2 300.6,109.8 301.4,109.3 302.1,108.9 302.8,108.4 303.5,107.9 304.1,107.4 304.7,106.9 305.2,106.3 305.7,105.8 306.1,105.2 306.5,104.7 306.9,104.1 307.2,103.5 307.4,103 307.6,102.4 307.8,101.8 307.9,101.2 308,100.6 308,100" fill="none" stroke="#9cc9ea" stroke-width="2.2"/>
  <circle cx="232" cy="100" r="2" fill="currentColor"/>
  <text x="232" y="194" font-size="12" text-anchor="middle" fill="currentColor">r = cos 3θ</text>
  <circle cx="376" cy="100" r="17.3" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <circle cx="376" cy="100" r="34.6" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <circle cx="376" cy="100" r="51.8" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <circle cx="376" cy="100" r="69.1" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="306.9" y1="100" x2="445.1" y2="100" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="316.1" y1="134.6" x2="435.9" y2="65.4" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="341.4" y1="159.9" x2="410.6" y2="40.1" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="376" y1="169.1" x2="376" y2="30.9" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="410.6" y1="159.9" x2="341.4" y2="40.1" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <line x1="435.9" y1="134.6" x2="316.1" y2="65.4" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 3"/>
  <polyline points="376,100 376.2,100 376.3,100 376.5,100 376.7,99.9 376.9,99.9 377,99.8 377.2,99.7 377.3,99.7 377.5,99.6 377.6,99.5 377.8,99.4 377.9,99.2 378.1,99.1 378.2,99 378.3,98.8 378.4,98.7 378.5,98.5 378.6,98.3 378.7,98.2 378.8,98 378.9,97.8 378.9,97.6 379,97.4 379,97.2 379.1,96.9 379.1,96.7 379.1,96.5 379.1,96.3 379.1,96 379,95.8 379,95.6 379,95.3 378.9,95.1 378.8,94.9 378.7,94.6 378.6,94.4 378.5,94.1 378.4,93.9 378.3,93.7 378.1,93.4 378,93.2 377.8,93 377.6,92.7 377.4,92.5 377.2,92.3 377,92.1 376.8,91.9 376.5,91.7 376.3,91.5 376,91.4 375.7,91.2 375.4,91 375.1,90.9 374.8,90.7 374.5,90.6 374.2,90.5 373.9,90.4 373.5,90.3 373.2,90.2 372.8,90.1 372.4,90.1 372.1,90 371.7,90 371.3,90 370.9,90 370.5,90 370.1,90 369.7,90.1 369.3,90.1 368.9,90.2 368.5,90.3 368.1,90.4 367.7,90.5 367.2,90.7 366.8,90.8 366.4,91 366,91.2 365.6,91.4 365.2,91.6 364.8,91.9 364.4,92.1 364,92.4 363.7,92.7 363.3,93 362.9,93.3 362.6,93.7 362.2,94 361.9,94.4 361.5,94.8 361.2,95.2 360.9,95.6 360.6,96 360.3,96.5 360,97 359.8,97.4 359.5,97.9 359.3,98.4 359.1,98.9 358.9,99.5 358.7,100 358.6,100.5 358.4,101.1 358.3,101.7 358.2,102.3 358.1,102.8 358,103.4 358,104 357.9,104.6 357.9,105.3 357.9,105.9 358,106.5 358,107.1 358.1,107.8 358.2,108.4 358.3,109 358.4,109.7 358.6,110.3 358.8,110.9 359,111.6 359.2,112.2 359.5,112.8 359.8,113.4 360.1,114.1 360.4,114.7 360.7,115.3 361.1,115.9 361.5,116.5 361.9,117 362.3,117.6 362.8,118.2 363.3,118.7 363.8,119.3 364.3,119.8 364.8,120.3 365.4,120.8 366,121.3 366.6,121.7 367.2,122.2 367.9,122.6 368.5,123 369.2,123.4 369.9,123.8 370.6,124.1 371.3,124.4 372.1,124.7 372.8,125 373.6,125.3 374.4,125.5 375.2,125.7 376,125.9 376.8,126.1 377.6,126.2 378.5,126.3 379.3,126.4 380.2,126.5 381.1,126.5 381.9,126.5 382.8,126.4 383.7,126.4 384.5,126.3 385.4,126.2 386.3,126 387.2,125.8 388.1,125.6 388.9,125.4 389.8,125.1 390.7,124.8 391.6,124.5 392.4,124.2 393.3,123.8 394.1,123.3 394.9,122.9 395.8,122.4 396.6,121.9 397.4,121.4 398.2,120.8 398.9,120.2 399.7,119.6 400.4,119 401.2,118.3 401.9,117.6 402.6,116.9 403.2,116.1 403.9,115.3 404.5,114.5 405.1,113.7 405.7,112.8 406.2,112 406.7,111.1 407.2,110.1 407.7,109.2 408.1,108.3 408.5,107.3 408.9,106.3 409.3,105.3 409.6,104.2 409.9,103.2 410.1,102.1 410.4,101.1 410.6,100 410.7,98.9 410.8,97.8 410.9,96.7 411,95.6 411,94.5 411,93.3 410.9,92.2 410.8,91.1 410.7,89.9 410.5,88.8 410.3,87.7 410.1,86.5 409.8,85.4 409.5,84.3 409.1,83.1 408.7,82 408.3,80.9 407.8,79.8 407.3,78.7 406.8,77.7 406.2,76.6 405.6,75.5 404.9,74.5 404.2,73.5 403.5,72.5 402.7,71.5 401.9,70.6 401.1,69.6 400.3,68.7 399.4,67.8 398.4,67 397.5,66.2 396.5,65.3 395.5,64.6 394.4,63.8 393.4,63.1 392.3,62.4 391.1,61.8 390,61.1 388.8,60.6 387.6,60 386.4,59.5 385.2,59 383.9,58.6 382.6,58.2 381.3,57.8 380,57.5 378.7,57.2 377.4,57 376,56.8 374.6,56.7 373.3,56.5 371.9,56.5 370.5,56.5 369.1,56.5 367.7,56.5 366.3,56.7 364.9,56.8 363.5,57 362.1,57.3 360.7,57.6 359.3,57.9 358,58.3 356.6,58.7 355.2,59.2 353.9,59.7 352.5,60.3 351.2,60.9 349.9,61.6 348.6,62.3 347.3,63 346,63.8 344.8,64.6 343.6,65.5 342.4,66.4 341.2,67.4 340.1,68.3 339,69.4 337.9,70.5 336.9,71.6 335.8,72.7 334.9,73.9 333.9,75.1 333,76.4 332.1,77.6 331.3,79 330.5,80.3 329.7,81.7 329,83.1 328.3,84.5 327.7,86 327.1,87.5 326.6,89 326.1,90.5 325.7,92 325.3,93.6 324.9,95.2 324.6,96.8 324.4,98.4 324.2,100 324,101.6 323.9,103.3 323.9,104.9 323.9,106.6 323.9,108.2 324.1,109.9 324.2,111.6 324.5,113.2 324.7,114.9 325.1,116.6 325.4,118.2 325.9,119.8 326.4,121.5 326.9,123.1 327.5,124.7 328.2,126.3 328.9,127.9 329.6,129.4 330.4,131 331.3,132.5 332.2,134 333.1,135.5 334.1,136.9 335.2,138.3 336.3,139.7 337.4,141.1 338.6,142.4 339.9,143.7 341.2,144.9 342.5,146.1 343.9,147.3 345.3,148.4 346.7,149.5 348.2,150.6 349.7,151.6 351.3,152.5 352.9,153.4 354.5,154.3 356.2,155.1 357.8,155.9 359.6,156.6 361.3,157.2 363.1,157.8 364.9,158.4 366.7,158.9 368.5,159.3 370.4,159.7 372.2,160 374.1,160.3 376,160.5 377.9,160.6 379.8,160.7 381.7,160.7 383.7,160.7 385.6,160.6 387.5,160.4 389.5,160.2 391.4,159.9 393.3,159.6 395.2,159.2 397.1,158.7 399,158.2 400.9,157.6 402.8,156.9 404.6,156.2 406.5,155.4 408.3,154.6 410.1,153.7 411.8,152.7 413.6,151.7 415.3,150.7 417,149.5 418.6,148.3 420.2,147.1 421.8,145.8 423.4,144.5 424.9,143.1 426.3,141.6 427.7,140.1 429.1,138.6 430.4,137 431.7,135.4 433,133.7 434.1,132 435.3,130.2 436.3,128.4 437.4,126.6 438.3,124.7 439.2,122.8 440.1,120.8 440.9,118.8 441.6,116.8 442.3,114.8 442.9,112.8 443.4,110.7 443.9,108.6 444.3,106.5 444.6,104.3 444.9,102.2 445.1,100" fill="none" stroke="#7ccf9a" stroke-width="2.2"/>
  <circle cx="376" cy="100" r="2" fill="currentColor"/>
  <text x="376" y="187.1" font-size="12" text-anchor="middle" fill="currentColor">r = aθ</text>
</svg>
</div>

### The polar equation of a conic

Put the focus at the origin and the directrix at $x = k$, to the right ($k > 0$). For a point $P = (r\cos\theta, r\sin\theta)$
on the side of the directrix containing the focus, $PF = r$ and $\operatorname{dist}(P, \ell) = k - r\cos\theta$. The
focus-directrix condition $r = e(k - r\cos\theta)$ solves to

$$r = \frac{\ell}{1 + e\cos\theta}, \qquad \ell = ek .$$

The number $\ell$ (the **semi-latus rectum**) is the value of $r$ at $\theta = 90°$. For an ellipse, $\theta = 0°$ gives the
nearest point $r = \ell/(1 + e)$ and $\theta = 180°$ the farthest $r = \ell/(1 - e)$; these add to $2a$, which gives
$\ell = a(1 - e^2)$. (With the directrix on the right, the nearest point is in the direction $\theta = 0°$, toward it.)

For Mars, $\ell = 1.5237 \times (1 - 0.0934^2) \approx 1.5104$ AU, so

$$r(\theta) \approx \frac{1.5104}{1 + 0.0934\cos\theta} \text{ AU},$$

with $\theta$ measured from the direction of perihelion (astronomers call $\theta$ the **true anomaly**). Check:
$r(0°) \approx 1.5104/1.0934 \approx 1.3814$ and $r(180°) \approx 1.5104/0.9066 \approx 1.6660$, the perihelion and aphelion above.

This is the form in which Newton, in the *Principia* (1687), derived Kepler's ellipses from the law of gravitation:
an inverse-square force gives exactly the curves $r = \ell/(1 + e\cos\theta)$, ellipses for bound orbits, parabolas and
hyperbolas for objects fast enough to escape. Spacecraft on their way to Mars ride these curves: an ellipse touching
Earth's orbit at perihelion and Mars's orbit at aphelion is the classic minimum-energy transfer route.

**Area in polar coordinates.** A thin sector of angle $\Delta\theta$ and radius $r$ has area about $\tfrac12 r^2\Delta\theta$
([Chapter 7](07-Trigonometry.md)), so areas swept by a moving radius are sums of $\tfrac12 r^2\,\Delta\theta$. Kepler's second
law says this sum grows at a constant rate, $\tfrac12 r^2 \frac{d\theta}{dt} = \text{constant}$. Making that precise is
calculus.

## Check yourself

??? question "1. Find the distance between $(-3, 5)$ and $(5, -1)$, and their midpoint."

    $\sqrt{8^2 + 6^2} = 10$; midpoint $(1, 2)$.

??? question "2. Find the equation of the line through $(2, 3)$ perpendicular to $2x - 5y = 7$."

    The given line is $y = \tfrac25 x - \tfrac75$, slope $\tfrac25$. The perpendicular slope is $-\tfrac52$:
    $y - 3 = -\tfrac52(x - 2)$, or $5x + 2y = 16$. Check: $(2, 3)$ gives $10 + 6 = 16$.

??? question "3. How far is the point $(1, 2)$ from the line $3x - 4y + 15 = 0$?"

    $|3 - 8 + 15|/\sqrt{9 + 16} = 10/5 = 2$.

??? question "4. Find the centre and radius of $x^2 + y^2 + 4x - 10y + 13 = 0$."

    $(x + 2)^2 + (y - 5)^2 = -13 + 4 + 25 = 16$: centre $(-2, 5)$, radius 4.

??? question "5. Find the circle through $(1, 1)$, $(5, 1)$ and $(1, 3)$."

    The angle at $(1, 1)$ is right (one side horizontal, one vertical), so by Thales the segment from $(5, 1)$ to $(1, 3)$ is a
    diameter: centre $(3, 2)$, radius $\sqrt{4 + 1} = \sqrt5$. Equation $(x - 3)^2 + (y - 2)^2 = 5$. Check $(1, 1)$: $4 + 1 = 5$.

??? question "6. Prove with coordinates that the diagonals of a rhombus are perpendicular."

    Take $O = (0, 0)$, $A = (a, 0)$, $C = (b, c)$ with $OC = OA$, so $b^2 + c^2 = a^2$, and $B = (a + b, c)$. Diagonal $OB$
    runs in direction $(a + b, c)$ and diagonal $AC$ in direction $(b - a, c)$. Neither diagonal is vertical, since $b = -a$ or
    $b = a$ would force $c = 0$, a flattened rhombus. So the product of slopes is
    $\frac{c}{a + b} \cdot \frac{c}{b - a} = \frac{c^2}{b^2 - a^2} = \frac{c^2}{-c^2} = -1$.

??? question "7. Find the focus and directrix of the parabola $y = x^2/8$, and check one point."

    $x^2 = 8y = 4py$ with $p = 2$: focus $(0, 2)$, directrix $y = -2$. The point $(4, 2)$ is at distance $\sqrt{16 + 0} = 4$ from
    the focus and $2 + 2 = 4$ from the directrix.

??? question "8. For the ellipse $x^2/25 + y^2/9 = 1$, find the foci, the eccentricity and the directrices. Check the two-foci property at $(0, 3)$."

    $a = 5$, $b = 3$, $c = \sqrt{25 - 9} = 4$: foci $(\pm 4, 0)$, $e = 0.8$, directrices $x = \pm 25/4$. From $(0, 3)$ each focus is
    $\sqrt{16 + 9} = 5$ away, total $10 = 2a$.

??? question "9. For the hyperbola $x^2/16 - y^2/9 = 1$, find the foci, eccentricity and asymptotes."

    $c = \sqrt{16 + 9} = 5$: foci $(\pm 5, 0)$, $e = 5/4$, asymptotes $y = \pm\tfrac34 x$.

??? question "10. Earth's orbit has $a \approx 149.6$ million km and $e \approx 0.0167$. Find its perihelion and aphelion distances and the ratio of sunlight at the two. Compare with Mars."

    Perihelion $149.6 \times 0.9833 \approx 147.1$ million km, aphelion $149.6 \times 1.0167 \approx 152.1$ million km. Sunlight ratio
    $(1.0167/0.9833)^2 \approx 1.07$, about 7 per cent, against about 45 per cent for Mars.

??? question "11. Convert $r = 4\sin\theta$ to Cartesian form and describe the curve."

    Multiply by $r$: $x^2 + y^2 = 4y$, so $x^2 + (y - 2)^2 = 4$: the circle with centre $(0, 2)$ and radius 2, passing through the origin.

??? question "12. Prove the reflection property of $y = x^2/(4p)$ by coordinates: show that the tangent at $P = (x_0, y_0)$ is $y = \frac{x_0}{2p}x - y_0$, that it meets the axis at $G = (0, -y_0)$, and that $FG = FP$ for the focus $F = (0, p)$. Why does this finish the proof?"

    *Tangent:* on the parabola, $\frac{x^2}{4p} - \left(\frac{x_0}{2p}x - y_0\right) = \frac{x^2 - 2x_0x + x_0^2}{4p} = \frac{(x - x_0)^2}{4p}$ (using
    $y_0 = x_0^2/(4p)$), which is zero only at $x = x_0$ and positive elsewhere: the line touches at $P$ and stays below the curve,
    so it is the tangent. *Axis:* at $x = 0$ the line gives $y = -y_0$. *Distances:* $FG = p + y_0$ and
    $FP^2 = x_0^2 + (y_0 - p)^2 = 4py_0 + y_0^2 - 2py_0 + p^2 = (y_0 + p)^2$. So triangle $FGP$ is isosceles with
    $\angle FGP = \angle FPG$. The vertical ray through $P$ is parallel to the axis $GF$, so the angle it makes with the tangent
    equals $\angle FGP$ (corresponding angles), hence equals $\angle FPG$: incoming and reflected rays make equal angles with the
    tangent, and the reflected ray is $PF$.

## What you learned

- Coordinates turn points into pairs of numbers and curves into equations; Descartes and Fermat introduced the idea in
  the 1630s.
- Distance comes from Pythagoras, the midpoint and section formulas from the intercept theorem; slopes of perpendicular
  lines multiply to $-1$; the distance from a point to a line is $|ax_0 + by_0 + c|/\sqrt{a^2 + b^2}$.
- Circles are $(x - a)^2 + (y - b)^2 = r^2$; completing the square finds centre and radius, and the tangent at $(x_1, y_1)$ to
  $x^2 + y^2 = r^2$ is $x_1x + y_1y = r^2$.
- With well-chosen axes, theorems such as the parallelogram diagonals, Thales, Apollonius' median theorem and the
  centroid fall to algebra.
- The focus-directrix definition gives the ellipse ($e < 1$), parabola ($e = 1$) and hyperbola ($e > 1$), with the
  equations $x^2/a^2 \pm y^2/b^2 = 1$ and $x^2 = 4py$ and reflection properties used in dishes, mirrors and medicine.
- Mars moves on an ellipse with $a \approx 1.524$ AU and $e \approx 0.0934$: from 206.6 to 249.2 million km from the Sun,
  with about 45 per cent more sunlight at perihelion and a year of 687 days.
- Polar coordinates $(r, \theta)$ make circles, roses and spirals simple, and a conic with focus at the origin is
  $r = \ell/(1 + e\cos\theta)$, the equation of every Kepler orbit.

**Next:** [Chapter 9](09-Vectors.md) adds arrows to coordinates: vectors, the dot and cross products, and geometry in
three dimensions.

## Further reading

- R. Descartes, *The Geometry of René Descartes*, translated by D. E. Smith and M. L. Latham, 1925 (with a facsimile
  of the 1637 French).
- D. Hilbert and S. Cohn-Vossen, *Geometry and the Imagination*, 1932 (English translation 1952), Chapter 1 (Dandelin
  spheres and the conics).
- C. J. Scriba and P. Schreiber, *5000 Years of Geometry*, 2015.
- J. Stillwell, *Mathematics and Its History*, 3rd edition, 2010 (the chapters on conics and on analytic geometry).
- J. Kepler, *New Astronomy* (*Astronomia nova*, 1609), translated by W. H. Donahue, 1992.
- B. Stephenson, *Kepler's Physical Astronomy*, 1987.
- On this site: the Topics lessons [Distance and midpoint](../../topics/geometry/level-6/03-distance-midpoint.md),
  [Slope and the equation of a line](../../topics/geometry/level-6/06-slope-line-equation.md),
  [Equations of circles](../../topics/geometry/level-7/07-circle-equations.md) and
  [Coordinates: finding points on a grid](../../topics/geometry/level-3/06-coordinates-grid.md); the Algebra book's
  [Lines and linear systems](../algebra/03-Lines-and-Linear-Systems.md), [Quadratics](../algebra/05-Quadratics.md)
  (the parabola from its focus) and [Functions](../algebra/06-Functions.md); the U of T guide
  [MAT137 Unit 10: Applications of the Integral](../../uoft/MAT137/unit10.md) (areas, volumes and arc length
  by integration); and the [Geometry book's contents](index.md).
