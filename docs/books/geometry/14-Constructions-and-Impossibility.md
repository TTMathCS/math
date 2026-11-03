# 14. Constructions and impossibility

*With a straightedge and a compass you can bisect any angle, draw a square, a regular hexagon, a regular pentagon.
Can you also cut an angle into three equal parts? Draw a cube with twice the volume of a given one? Draw a square with
the same area as a given circle? Greek geometers asked these questions about 2400 years ago, solved them with other
tools, and never found a way with these two. In 1837 and 1882 it was proved that there is no way. This chapter turns
each construction into arithmetic, finds exactly which numbers the two tools can reach, and uses that to prove the
impossibilities. Then it meets the young Gauss's regular 17-gon, and other tools, paper folding and the compass
alone, that can do more or the same.*

!!! abstract "In this chapter"
    **You will learn:**

    - the three classical problems and the exact rules of straightedge-and-compass construction
    - how to add, multiply, divide and take square roots of lengths with the two tools
    - that the constructible numbers are exactly those reached from the rationals by a tower of square roots (with proof)
    - why doubling the cube and trisecting a $60^\circ$ angle are impossible (full proofs), and why squaring the circle is
    - the Gauss-Wantzel theorem on regular polygons, and how the 17-gon is built from nested square roots
    - what origami, a marked ruler, and the compass alone can construct

    **You need:** [Chapter 2](02-Triangles-and-Congruence.md) (the basic constructions), [Chapter 5](05-Similarity.md)
    (similar triangles, the altitude theorem), [Chapter 7](07-Trigonometry.md) (the triple angle formula follows from
    the addition formulas there) and [Chapter 13](13-Inversion-and-Complex-Geometry.md) for 14.6. From the Algebra book,
    [Chapter 19](../algebra/19-Fields-and-Extensions.md) (fields, degree, the tower law, irreducible polynomials) is the
    algebraic engine; we recall what we need. A gentler start: [Compass and straightedge](../../topics/geometry/level-5/01-compass-straightedge.md).

    **Levels:** 14.1 is intermediate; 14.2 and 14.3 are advanced; 14.4 is advanced (statement and proof idea);
    14.5 is advanced to expert; 14.6 is advanced.

## 14.1 The Greek problems

*Level: intermediate.* Euclid's *Elements* (about 300 BC) begins with constructions: Book I, Proposition 1 draws an
equilateral triangle on a given segment with two circles. Later propositions bisect angles and segments, drop
perpendiculars, copy angles, build squares, and in Book IV inscribe regular polygons with $3$, $4$, $5$, $6$ and $15$
sides in a circle. Three problems would not yield:

1. **Doubling the cube.** Given a cube, construct the edge of a cube with twice its volume. If the edge is $1$, the
   new edge is $\sqrt[3]{2}$. A story, reported by later writers, says the people of Delos were told by an oracle to
   double the size of a cube-shaped altar; whether or not that happened, the problem is often called the **Delian
   problem**.
2. **Trisecting an angle.** Given any angle, construct an angle one third as large.
3. **Squaring the circle.** Given a circle, construct a square of the same area. For radius $1$ the side would be
   $\sqrt\pi$.

A fourth question ran alongside: **which regular polygons can be constructed?** Euclid could do $3, 4, 5, 6, 15$ and,
by bisecting, $8, 10, 12, 16, \ldots$, but not $7$ or $9$.

**The rules.** The tools are idealised:

- a **straightedge** draws the line through two points already constructed. It has no marks; you cannot measure with
  it.
- a **compass** draws the circle with a constructed centre passing through another constructed point.
- new points are the **intersections** of lines and circles already drawn.

Euclid's compass is "collapsing": it may fold up when lifted, so you cannot carry a length from one place to another
directly. Euclid's Proposition I.2 shows that this does not matter: with a collapsing compass you can still copy a
segment anywhere. So we may use a compass that keeps its opening.

**The Greeks did solve them, with other tools.** It is a myth that the Greeks were stuck. They found many solutions,
all using something beyond the rules:

- Hippocrates of Chios (5th century BC) reduced doubling the cube to finding two **mean proportionals** $x, y$ with
  $1 : x = x : y = y : 2$, so $x^3 = 2$; Menaechmus then found them as the intersection of two conic sections.
- Hippias' **quadratrix**, a curve drawn by two uniform motions, trisects any angle, and was later used to square the
  circle.
- Archimedes trisected any angle with a **marked ruler**, a move the Greeks called *neusis* (verging).

**Archimedes' trisection.** Let the angle be $\angle AOB = 3\alpha$, with $A$ and $B$ on a circle of radius $1$ about
$O$. Mark two points at distance $1$ on a ruler. Slide the ruler so that it passes through $B$, one mark lies on the
circle (at $C$) and the other on the line $AO$ extended beyond $O$ (at $D$). Then $\angle ODC = \alpha$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 403.5 288.0" role="img" aria-label="Archimedes' trisection with a marked ruler: the line through B meets the circle again at C and the extended diameter at D, placed so that CD equals the radius. Then the angle at D is one third of the angle AOB">
  <circle cx="243.0" cy="149.5" r="110.0" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.4"/>
  <line x1="43.6" y1="149.5" x2="380.5" y2="149.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="43.6" y1="149.5" x2="289.7" y2="34.7" stroke="currentColor" stroke-width="1.6"/>
  <line x1="243.0" y1="149.5" x2="271.5" y2="43.2" stroke="currentColor" stroke-width="1.2"/>
  <line x1="243.0" y1="149.5" x2="143.3" y2="103.0" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="243.0,149.5 267.2,149.5 267.2,148.4 267.1,147.4 267.0,146.3 266.8,145.3 266.6,144.3 266.4,143.2 266.1,142.2 265.7,141.2 265.4,140.2 264.9,139.3 264.5,138.3 264.0,137.4 263.4,136.5 262.8,135.6 262.2,134.8 261.5,133.9 260.8,133.2 260.1,132.4 259.3,131.7 258.6,131.0 257.7,130.3 256.9,129.7 256.0,129.1 255.1,128.5 254.2,128.0 253.2,127.6 252.3,127.1 251.3,126.8 250.3,126.4 249.3,126.1" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <polygon points="43.6,149.5 89.8,149.5 89.8,148.8 89.8,148.2 89.8,147.5 89.7,146.8 89.7,146.1 89.6,145.5 89.6,144.8 89.5,144.1 89.4,143.5 89.3,142.8 89.2,142.1 89.1,141.5 89.0,140.8 88.9,140.2 88.7,139.5 88.6,138.8 88.4,138.2 88.2,137.5 88.1,136.9 87.9,136.2 87.7,135.6 87.5,135.0 87.3,134.3 87.0,133.7 86.8,133.1 86.5,132.4 86.3,131.8 86.0,131.2 85.8,130.6 85.5,130.0" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <polygon points="243.0,149.5 213.1,135.6 212.9,136.0 212.7,136.4 212.5,136.9 212.3,137.3 212.2,137.8 212.0,138.2 211.8,138.7 211.7,139.1 211.5,139.6 211.4,140.0 211.3,140.5 211.1,141.0 211.0,141.4 210.9,141.9 210.8,142.4 210.7,142.8 210.6,143.3 210.5,143.8 210.4,144.2 210.3,144.7 210.3,145.2 210.2,145.7 210.2,146.1 210.1,146.6 210.1,147.1 210.1,147.6 210.0,148.1 210.0,148.5 210.0,149.0 210.0,149.5" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <circle cx="243.0" cy="149.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="247.0" y="165.5" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <circle cx="353.0" cy="149.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="363.0" y="165.5" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="271.5" cy="43.2" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="279.5" y="35.2" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="143.3" cy="103.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="139.3" y="93.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="43.6" cy="149.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="39.6" y="167.5" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <text x="101.6" y="144.5" font-size="12" text-anchor="middle" fill="currentColor">α</text>
  <text x="203.0" y="144.5" font-size="12" text-anchor="middle" fill="currentColor">α</text>
  <text x="271.0" y="137.5" font-size="12" text-anchor="middle" fill="currentColor">3α</text>
  <line x1="91.1" y1="121.3" x2="95.8" y2="131.2" stroke="currentColor" stroke-width="1.6"/>
  <line x1="190.8" y1="131.2" x2="195.5" y2="121.3" stroke="currentColor" stroke-width="1.6"/>
  <line x1="262.5" y1="97.8" x2="251.9" y2="95.0" stroke="currentColor" stroke-width="1.6"/>
</svg>
</div>

*Proof.* $CD = 1 = CO$, so triangle $DCO$ is isosceles and $\angle COD = \angle CDO$; call it $x$. The exterior angle of
triangle $DCO$ at $C$ is $\angle BCO = 2x$. Triangle $OCB$ is isosceles ($OC = OB = 1$), so $\angle CBO = 2x$. Now
$\angle AOB$ is an exterior angle of triangle $DOB$, so it equals the sum of the two remote interior angles:
$\angle AOB = \angle ODB + \angle OBD = x + 2x = 3x$. So $x = \alpha$. $\square$

The ruler had to be slid until two conditions held at once; that sliding is exactly what the rules forbid. The
question became: is the extra tool really needed? For 2000 years many people tried, some brilliantly, and the answer
had to wait for algebra.

## 14.2 Constructions as arithmetic

*Level: advanced.* Fix two points and call the distance between them $1$. Put them at $0$ and $1$ on the real line
of a coordinate plane. (We can construct the perpendicular at $0$, so the axes are available.)

**Definition.** A point is **constructible** if it can be reached from $(0, 0)$ and $(1, 0)$ by finitely many
straightedge-and-compass steps. A real number is **constructible** if it is a coordinate of a constructible point,
equivalently (since we can drop perpendiculars to the axes and copy lengths) if $|x|$ is the length of a constructible
segment.

### Step one: the constructible numbers form a field

**Theorem 14.1.** If $a$ and $b$ are constructible, so are $a + b$, $a - b$, $ab$, and $a/b$ (for $b \neq 0$). If
$a > 0$ is constructible, so is $\sqrt a$.

*Proof.* **Sums and differences:** lay off length $b$ along the line from the end of $a$, forwards or backwards, with
the compass.

**Products:** on one ray from a point $O$ mark the points at distances $1$ and $b$; on another ray from $O$ mark the
point at distance $a$. Join the $1$-point to the $a$-point, and through the $b$-point draw the parallel to that line
(parallels can be constructed, [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)). It meets the second ray at a
point $X$. The two triangles are similar (they share the angle at $O$, and corresponding angles at the parallels are
equal), so $OX/a = b/1$, and $OX = ab$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 392.0 240.0" role="img" aria-label="Multiplying lengths with a straightedge and compass: mark 1 and b on one ray from O and a on another. Join 1 to a, and draw the parallel through b. It cuts the second ray at distance a times b from O">
  <line x1="36.0" y1="196.0" x2="372.0" y2="196.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="36.0" y1="196.0" x2="334.5" y2="9.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="116.0" y1="196.0" x2="144.6" y2="128.2" stroke="currentColor" stroke-width="1.6"/>
  <line x1="212.0" y1="196.0" x2="274.8" y2="46.8" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 3"/>
  <polygon points="36.0,196.0 116.0,196.0 144.6,128.2" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0" stroke-linejoin="round"/>
  <circle cx="36.0" cy="196.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="30.0" y="212.0" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <circle cx="116.0" cy="196.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="116.0" y="212.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="212.0" cy="196.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="212.0" y="212.0" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">b</text>
  <circle cx="144.6" cy="128.2" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="138.6" y="120.2" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">a</text>
  <circle cx="274.8" cy="46.8" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="264.8" y="38.8" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">ab</text>
</svg>
</div>

**Quotients:** the same picture read differently. Mark $b$ and $1$ on the first ray, $a$ on the second, join $b$ to
$a$, and draw the parallel through $1$: it cuts off $a/b$.

**Square roots:** lay segments of lengths $1$ and $a$ end to end, so the whole is $1 + a$. Draw the semicircle on the
whole segment as diameter (its centre is the constructible midpoint) and raise the perpendicular at the point where
the two pieces meet. If $h$ is its height up to the semicircle, the angle in the semicircle is a right angle (Thales),
and the altitude theorem of [Chapter 5](05-Similarity.md) gives $h^2 = 1 \cdot a$. So $h = \sqrt a$. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 392.0 248.0" role="img" aria-label="Square roots with a straightedge and compass: put lengths 1 and a end to end, draw the semicircle on the whole segment, and raise a perpendicular at the join. Its height up to the semicircle is the square root of a">
  <line x1="36.0" y1="196.0" x2="356.0" y2="196.0" stroke="currentColor" stroke-width="1.4"/>
  <polyline points="356.0,196.0 355.9,191.8 355.8,187.6 355.5,183.4 355.1,179.3 354.6,175.1 354.0,171.0 353.3,166.8 352.5,162.7 351.6,158.6 350.5,154.6 349.4,150.6 348.2,146.6 346.8,142.6 345.4,138.7 343.8,134.8 342.2,130.9 340.4,127.1 338.6,123.4 336.6,119.7 334.6,116.0 332.4,112.4 330.2,108.9 327.9,105.4 325.4,102.0 322.9,98.6 320.3,95.3 317.7,92.1 314.9,88.9 312.1,85.9 309.1,82.9 306.1,79.9 303.1,77.1 299.9,74.3 296.7,71.7 293.4,69.1 290.0,66.6 286.6,64.1 283.1,61.8 279.6,59.6 276.0,57.4 272.3,55.4 268.6,53.4 264.9,51.6 261.1,49.8 257.2,48.2 253.3,46.6 249.4,45.2 245.4,43.8 241.4,42.6 237.4,41.5 233.4,40.4 229.3,39.5 225.2,38.7 221.0,38.0 216.9,37.4 212.7,36.9 208.6,36.5 204.4,36.2 200.2,36.1 196.0,36.0 191.8,36.1 187.6,36.2 183.4,36.5 179.3,36.9 175.1,37.4 171.0,38.0 166.8,38.7 162.7,39.5 158.6,40.4 154.6,41.5 150.6,42.6 146.6,43.8 142.6,45.2 138.7,46.6 134.8,48.2 130.9,49.8 127.1,51.6 123.4,53.4 119.7,55.4 116.0,57.4 112.4,59.6 108.9,61.8 105.4,64.1 102.0,66.6 98.6,69.1 95.3,71.7 92.1,74.3 88.9,77.1 85.9,79.9 82.9,82.9 79.9,85.9 77.1,88.9 74.3,92.1 71.7,95.3 69.1,98.6 66.6,102.0 64.1,105.4 61.8,108.9 59.6,112.4 57.4,116.0 55.4,119.7 53.4,123.4 51.6,127.1 49.8,130.9 48.2,134.8 46.6,138.7 45.2,142.6 43.8,146.6 42.6,150.6 41.5,154.6 40.4,158.6 39.5,162.7 38.7,166.8 38.0,171.0 37.4,175.1 36.9,179.3 36.5,183.4 36.2,187.6 36.1,191.8 36.0,196.0" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <polygon points="36.0,196.0 116.0,57.4 356.0,196.0" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <line x1="116.0" y1="196.0" x2="116.0" y2="57.4" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="36.0" cy="196.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="116.0" cy="196.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="356.0" cy="196.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="116.0" cy="57.4" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="76.0" y="212.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="236.0" y="212.0" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">a</text>
  <text x="134.0" y="130.7" font-size="12" text-anchor="middle" fill="currentColor">√a</text>
  <polygon points="116.0,196.0 128.0,196.0 128.0,184.0 116.0,184.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
</svg>
</div>

Starting from $1$ you can therefore reach every rational number (by $+, -, \times, \div$) and then numbers like

$$
\sqrt2, \qquad \frac{1 + \sqrt5}{2}, \qquad \sqrt{3 + \sqrt[4]{2}} = \sqrt{3 + \sqrt{\sqrt2}}, \qquad
\frac{\sqrt{7 - \sqrt3}}{1 + \sqrt{11}} .
$$

Any expression built from rationals with $+, -, \times, \div$ and square roots (of positive numbers) is constructible.

### Step two: nothing else is

Now the hard direction. A construction only ever does three things: intersect two lines, a line and a circle, or two
circles. Let $K$ be a field of real numbers containing all coordinates of the points constructed so far.

- **Line through two points of $K^2$:** its equation is $px + qy = r$ with $p, q, r \in K$ (solve for the coefficients
  using the two points; only $+, -, \times, \div$ are needed).
- **Circle with centre in $K^2$ through a point of $K^2$:** $x^2 + y^2 + dx + ey + f = 0$ with $d, e, f \in K$.

**Line meets line.** Two linear equations with coefficients in $K$: Cramer's rule gives the solution with
coordinates in $K$. Nothing new.

**Line meets circle.** Solve the line for $y$ (or $x$) and substitute: a quadratic $Ax^2 + Bx + C = 0$ with
$A, B, C \in K$. Its roots are $\frac{-B \pm \sqrt{B^2 - 4AC}}{2A}$, which lie in $K(\sqrt D)$ with $D = B^2 - 4AC \in K$.

**Circle meets circle.** Subtract the two equations: the $x^2 + y^2$ terms cancel, leaving a line with coefficients in
$K$. The intersection points are those of this line with either circle: the previous case.

So each new point has coordinates in $K$ or in $K(\sqrt D)$ for some positive $D \in K$, an extension of degree $1$ or
$2$. Running through a whole construction gives:

**Theorem 14.2.** A real number $\alpha$ is constructible if and only if there is a chain of fields

$$
\mathbb{Q} = K_0 \subset K_1 \subset \cdots \subset K_n \subset \mathbb{R}, \qquad K_{j} = K_{j-1}(\sqrt{d_j}), \ d_j \in K_{j-1}, \ d_j > 0,
$$

with $\alpha \in K_n$.

*Proof.* "If": by Theorem 14.1 every element of every $K_j$ is constructible, by induction on $j$. "Only if": the
analysis above, by induction on the number of construction steps, adjoining the square root at each step where a
circle is involved. $\square$

**Corollary 14.3.** If $\alpha$ is constructible, then $\alpha$ is algebraic over $\mathbb{Q}$ and its degree
$[\mathbb{Q}(\alpha) : \mathbb{Q}]$ is a power of $2$.

*Proof.* Each step of the chain has degree $[K_j : K_{j-1}] = 1$ or $2$, so by the **tower law**
([Algebra Chapter 19](../algebra/19-Fields-and-Extensions.md): degrees multiply in a tower of fields)
$[K_n : \mathbb{Q}] = 2^m$ for some $m$. Since $\mathbb{Q} \subseteq \mathbb{Q}(\alpha) \subseteq K_n$, the tower law
again gives $[K_n : \mathbb{Q}] = [K_n : \mathbb{Q}(\alpha)] \cdot [\mathbb{Q}(\alpha) : \mathbb{Q}]$, so
$[\mathbb{Q}(\alpha) : \mathbb{Q}]$ divides $2^m$ and is itself a power of $2$. $\square$

Recall that the **degree** of an algebraic number $\alpha$ is the degree of its **minimal polynomial**, the monic
polynomial of least degree with rational coefficients having $\alpha$ as a root. If $\alpha$ is a root of an
**irreducible** rational polynomial of degree $d$ (one that does not factor into rational polynomials of lower degree),
then $[\mathbb{Q}(\alpha) : \mathbb{Q}] = d$.

**A warning about the converse.** Degree a power of $2$ is **necessary** but not sufficient. There are numbers of
degree $4$ that are not constructible, for instance a real root of $x^4 - 4x + 2$ (irreducible by Eisenstein's
criterion at $2$; its splitting field has Galois group $S_4$, of order $24$, while a constructible number needs a
Galois closure whose degree is a power of $2$). The exact criterion belongs to Galois theory,
[Algebra Chapter 20](../algebra/20-Galois-Theory.md). For degree $3$ there is no subtlety, and that is all the classical
problems need.

**Complex form.** Treat points as complex numbers. The constructible points form a subfield of $\mathbb{C}$ closed
under square roots: a square root of $re^{i\theta}$ is $\sqrt r\, e^{i\theta/2}$, which needs a real square root and
an angle bisection. This is the convenient language for polygons in 14.5.

**Worked example: $\cos 72^\circ$.** We show the regular pentagon is constructible by finding $\cos 72^\circ$. Let
$\zeta = e^{2\pi i/5}$. Then $\zeta^5 = 1$ and $\zeta \neq 1$, so $1 + \zeta + \zeta^2 + \zeta^3 + \zeta^4 = 0$. Put
$c = \zeta + \zeta^{-1} = \zeta + \zeta^4 = 2\cos 72^\circ$. Then $c^2 = \zeta^2 + 2 + \zeta^3$, so
$c^2 + c = \zeta + \zeta^2 + \zeta^3 + \zeta^4 + 2 = -1 + 2 = 1$. So $c^2 + c - 1 = 0$, $c = \frac{-1 + \sqrt5}{2}$
(positive root), and

$$
\cos 72^\circ = \frac{\sqrt5 - 1}{4} \approx 0.3090 .
$$

Check: $\cos 72^\circ = 0.30902$ on a calculator. The figure turns this into a construction: in the unit circle, let
$M = -\tfrac12$ and $P = i$. The circle about $M$ through $P$ has radius $\sqrt{1/4 + 1} = \tfrac{\sqrt5}{2}$, so it
meets the positive real axis at $Q = \frac{\sqrt5 - 1}{2} = 2\cos 72^\circ$. And
$PQ^2 = 1 + \left(\frac{\sqrt5 - 1}{2}\right)^2 = \frac{5 - \sqrt5}{2}$, which equals $(2\sin 36^\circ)^2$, the square of
the side of the inscribed regular pentagon. (Numerically $PQ = 1.17557 = 2\sin 36^\circ$.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 348.0 318.0" role="img" aria-label="Constructing a regular pentagon: M is the midpoint of O and minus 1. The circle about M through P meets the axis at Q, and PQ is the side of the regular pentagon inscribed in the unit circle">
  <circle cx="174.0" cy="162.0" r="120.0" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <line x1="18.0" y1="162.0" x2="330.0" y2="162.0" stroke="currentColor" stroke-width="1"/>
  <line x1="174.0" y1="300.0" x2="174.0" y2="18.0" stroke="currentColor" stroke-width="1"/>
  <polyline points="246.7,182.0 247.1,178.9 247.5,175.8 247.7,172.7 248.0,169.5 248.1,166.4 248.2,163.2 248.2,160.1 248.1,157.0 247.9,153.8 247.7,150.7 247.4,147.5 247.0,144.4 246.6,141.3 246.0,138.2 245.4,135.1 244.8,132.0 244.0,129.0 243.2,125.9 242.3,122.9 241.4,119.9 240.4,116.9 239.3,114.0 238.1,111.1 236.9,108.2 235.6,105.3 234.2,102.5 232.8,99.7 231.3,96.9 229.7,94.2 228.1,91.5 226.4,88.8 224.7,86.2 222.9,83.6 221.0,81.1 219.1,78.6 217.1,76.2 215.1,73.8 213.0,71.4 210.8,69.1 208.6,66.9 206.4,64.7 204.0,62.5 201.7,60.5 199.3,58.4 196.8,56.5 194.3,54.5 191.8,52.7 189.2,50.9 186.6,49.2 183.9,47.5 181.2,45.9 178.5,44.3 175.7,42.9 172.9,41.4 170.0,40.1 167.2,38.8 164.3,37.6 161.3,36.5 158.4,35.4 155.4,34.4" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polygon points="174.0,42.0 59.9,124.9 103.5,259.1 244.5,259.1 288.1,124.9" fill="#eea66f" fill-opacity="0.3" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <line x1="174.0" y1="42.0" x2="248.2" y2="162.0" stroke="currentColor" stroke-width="2"/>
  <circle cx="174.0" cy="162.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="166.0" y="176.0" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <circle cx="174.0" cy="42.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="184.0" y="36.0" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="114.0" cy="162.0" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="112.0" y="178.0" font-size="12" text-anchor="middle" fill="currentColor">M</text>
  <circle cx="248.2" cy="162.0" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="254.2" y="178.0" font-size="12" text-anchor="middle" fill="currentColor">Q</text>
</svg>
</div>

## 14.3 Doubling the cube and trisecting the angle are impossible

*Level: advanced.* We need one tool for showing a cubic is irreducible.

**Lemma 14.4.** A cubic polynomial with rational coefficients is irreducible over $\mathbb{Q}$ if and only if it has
no rational root. A rational root $p/q$ (in lowest terms) of $a_3x^3 + a_2x^2 + a_1x + a_0$ with integer coefficients
has $p$ dividing $a_0$ and $q$ dividing $a_3$.

*Proof.* If a cubic factors, one factor has degree $1$, giving a rational root; conversely a root $r$ gives the factor
$x - r$. For the second part, substitute $x = p/q$ and multiply by $q^3$: $a_3 p^3 + a_2 p^2 q + a_1 p q^2 + a_0 q^3 = 0$.
Every term except $a_0 q^3$ is divisible by $p$, so $p \mid a_0 q^3$, and since $\gcd(p, q) = 1$, $p \mid a_0$. In the same
way $q \mid a_3$. $\square$

**Theorem 14.5 (Wantzel, 1837).** The cube cannot be doubled with straightedge and compass.

*Proof.* We would need $\sqrt[3]{2}$, a root of $x^3 - 2$. The only possible rational roots are $\pm1, \pm2$, and
$1 - 2$, $-1 - 2$, $8 - 2$, $-8 - 2$ are all nonzero. So $x^3 - 2$ is irreducible, $[\mathbb{Q}(\sqrt[3]2) : \mathbb{Q}] = 3$,
which is not a power of $2$. By Corollary 14.3, $\sqrt[3]{2}$ is not constructible. $\square$

**Theorem 14.6 (Wantzel, 1837).** The angle $60^\circ$ cannot be trisected with straightedge and compass. So there is
no general method of trisection.

*Proof.* An angle $\theta$ is constructible (as an angle between two constructed lines) exactly when $\cos\theta$ is a
constructible number: from the angle, drop a perpendicular in the unit circle to get $\cos\theta$; from $\cos\theta$,
raise a perpendicular to get the point on the unit circle. A $60^\circ$ angle is constructible (an equilateral
triangle). Trisecting it means constructing $20^\circ$, so $c = \cos 20^\circ$ would be constructible. The triple angle
formula, from the addition formulas of [Chapter 7](07-Trigonometry.md),

$$
\cos 3t = 4\cos^3 t - 3\cos t,
$$

with $t = 20^\circ$ gives $\tfrac12 = 4c^3 - 3c$, so $c$ is a root of

$$
8x^3 - 6x - 1 = 0 .
$$

The candidates for rational roots are $\pm1, \pm\tfrac12, \pm\tfrac14, \pm\tfrac18$. Testing: $8 - 6 - 1 = 1$, $-8 + 6 - 1 = -3$,
$1 - 3 - 1 = -3$, $-1 + 3 - 1 = 1$, $\tfrac18 - \tfrac32 - 1 \neq 0$, $-\tfrac18 + \tfrac32 - 1 = \tfrac38$,
$\tfrac{1}{64} - \tfrac34 - 1 \neq 0$, $-\tfrac1{64} + \tfrac34 - 1 \neq 0$. None is zero, so the cubic is irreducible and
$\cos 20^\circ$ has degree $3$. Not a power of $2$: not constructible. $\square$

**Check.** The three roots of $8x^3 - 6x - 1$ are $\cos 20^\circ \approx 0.93969$, $\cos 140^\circ \approx -0.76604$ and
$\cos 260^\circ \approx -0.17365$ (the three angles whose triples are $60^\circ$ plus a multiple of $360^\circ$).

**Remarks.**

- Some angles **can** be trisected: $90^\circ$ (since $30^\circ$ is constructible), $180^\circ$, $45^\circ$. The theorem
  says no single method works for **all** angles, because it fails for $60^\circ$.
- In general, $\theta$ can be trisected exactly when $4x^3 - 3x - \cos\theta$ is reducible over the field
  $\mathbb{Q}(\cos\theta)$.
- The regular $9$-gon would give a $40^\circ$ angle, and halving it would give $20^\circ$: so the regular 9-gon is not
  constructible either.
- Wantzel's proof was ignored for decades, and people still send "trisections" to mathematics departments. Every one
  is either an approximation, or uses a forbidden step (a marked ruler, a sliding fit), or contains an error. The
  theorem is a proof, not a lack of imagination: no future cleverness can get around it.

Pierre Wantzel published both proofs in 1837, in the *Journal de Mathématiques Pures et Appliquées*, when he was 22.
The key idea, that constructions live in towers of quadratic extensions, was already implicit in Gauss's work on
polygons; Wantzel made it into a proof of impossibility.

## 14.4 Squaring the circle

*Level: advanced.* A circle of radius $1$ has area $\pi$, so squaring it needs a segment of length $\sqrt\pi$. If
$\sqrt\pi$ were constructible, so would be its square $\pi$, which would then be **algebraic**: a root of some nonzero
polynomial with rational coefficients (Corollary 14.3). But:

**Theorem 14.7 (Lindemann, 1882).** $\pi$ is transcendental: it is not a root of any nonzero polynomial with rational
coefficients.

**Corollary.** The circle cannot be squared with straightedge and compass.

The proof of Lindemann's theorem takes several pages of analysis and is beyond this chapter; it is in Ivan Niven's
*Irrational Numbers* and in Baker's *Transcendental Number Theory* (see Further reading), and the Algebra book's
[Chapter 19](../algebra/19-Fields-and-Extensions.md) discusses transcendental numbers. Here is the shape of it.
Charles Hermite proved in 1873 that $e$ is transcendental, by building very good rational approximations to powers of
$e$ out of integrals of polynomials times $e^{-x}$. Ferdinand von Lindemann extended the method to prove:

> If $\alpha$ is a nonzero algebraic number, then $e^\alpha$ is transcendental.

Now if $\pi$ were algebraic, so would be $i\pi$ (since $i$ is algebraic and algebraic numbers form a field), and then
$e^{i\pi}$ would be transcendental. But $e^{i\pi} = -1$, which is certainly algebraic. So $\pi$ is transcendental.

**Approximations are another matter.** There are excellent approximate constructions, for example of
$\pi \approx \tfrac{355}{113}$ (correct to six decimal places), and a constructible length can be as close to
$\sqrt\pi$ as you like. What is impossible is an **exact** construction.

**History, honestly.** People went on trying. In 1897 a bill in the Indiana legislature would have adopted a
physician's "solution" of the problem, which implied a wrong value of $\pi$; it passed the House, but the Senate
postponed it indefinitely after a mathematics professor, C. A. Waldo, who happened to be at the statehouse, explained
the problem to senators.

## 14.5 Regular polygons: Gauss and Wantzel

*Level: advanced to expert.* Which regular $n$-gons can be constructed? A regular $n$-gon inscribed in the unit
circle has vertices at the complex numbers $\zeta^k$, where $\zeta = e^{2\pi i/n}$, so the question is whether $\zeta$,
or equivalently $\cos(2\pi/n)$, is constructible.

**Easy reductions.**

- If the $n$-gon is constructible, so is the $2n$-gon (bisect the central angles).
- If $m$ divides $n$ and the $n$-gon is constructible, so is the $m$-gon (take every $(n/m)$-th vertex).
- If $\gcd(m, n) = 1$ and both the $m$-gon and the $n$-gon are constructible, so is the $mn$-gon. *Why:* choose integers
  $u, v$ with $um + vn = 1$ (Bézout); then $\frac{1}{mn} = \frac{u}{n} + \frac{v}{m}$, so the angle $2\pi/(mn)$ is a
  combination of multiples of $2\pi/n$ and $2\pi/m$. Example: $\frac{1}{15} = \frac{2}{5} - \frac{1}{3}$, which is how
  Euclid built the $15$-gon (Book IV, Proposition 16).

So everything comes down to $n = p^k$, a prime power.

**Fermat primes.** A **Fermat prime** is a prime of the form $2^m + 1$.

**Lemma 14.8.** If $2^m + 1$ is prime then $m$ is a power of $2$.

*Proof.* If $m$ has an odd factor $s > 1$, write $m = st$. Since $x + 1$ divides $x^s + 1$ for odd $s$ (because $-1$ is
a root), $2^t + 1$ divides $(2^t)^s + 1 = 2^m + 1$, and $1 < 2^t + 1 < 2^m + 1$. So $2^m + 1$ is not prime. $\square$

So the Fermat primes are among the numbers $F_k = 2^{2^k} + 1$: $F_0 = 3$, $F_1 = 5$, $F_2 = 17$, $F_3 = 257$,
$F_4 = 65537$, all prime. Pierre de Fermat guessed that every $F_k$ is prime. Leonhard Euler showed in 1732 that
$F_5 = 2^{32} + 1 = 641 \times 6700417$. No other Fermat prime is known, and it is an open question whether there are
any more.

**Theorem 14.9 (Gauss-Wantzel).** The regular $n$-gon is constructible with straightedge and compass if and only if

$$
n = 2^k p_1 p_2 \cdots p_r,
$$

where $k \ge 0$ and the $p_i$ are **distinct** Fermat primes.

*Proof of "only if".* We use one fact from algebra: the cyclotomic polynomial $\Phi_n$, whose roots are the primitive
$n$-th roots of unity, is irreducible over $\mathbb{Q}$, so $[\mathbb{Q}(\zeta) : \mathbb{Q}] = \varphi(n)$, where $\varphi$
is Euler's function (for a prime $p$ this is the irreducibility of $1 + x + \cdots + x^{p-1}$, proved by Eisenstein's
criterion after substituting $x + 1$; see [Algebra Chapter 18](../algebra/18-Factorization-in-Rings.md)). If $\cos(2\pi/n)$
is constructible, then $\zeta$ is a root of $x^2 - 2\cos(2\pi/n)x + 1$, so $\zeta$ lies in a field of degree a power of
$2$ times $2$ over $\mathbb{Q}$, and $\varphi(n)$ must be a power of $2$. For a prime power $p^a$ with $p$ odd,
$\varphi(p^a) = p^{a-1}(p - 1)$. This is a power of $2$ only if $a = 1$ and $p - 1$ is a power of $2$: $p$ is a Fermat
prime, appearing once. So $n$ has the stated form.

*Proof of "if", outline.* For $n$ of this form, $\varphi(n)$ is a power of $2$. The Galois group of $\mathbb{Q}(\zeta)$
over $\mathbb{Q}$ is $(\mathbb{Z}/n\mathbb{Z})^\times$, an abelian group of order $\varphi(n) = 2^s$. A group of order $2^s$
has a chain of subgroups each of index $2$ in the next, and by the Galois correspondence
([Algebra Chapter 20](../algebra/20-Galois-Theory.md)) this gives a chain of fields, each of degree $2$ over the one
before, from $\mathbb{Q}$ to $\mathbb{Q}(\zeta)$. Each degree-$2$ step is the adjoining of a square root. By Theorem 14.2,
$\zeta$ is constructible. $\square$

**The list.** For $n$ from $3$ to $40$ the constructible regular polygons have $n = 3, 4, 5, 6, 8, 10, 12, 15, 16, 17, 20,
24, 30, 32, 34, 40$. Not constructible: $7, 9, 11, 13, 14, 18, 19, 21, \ldots$. Check, for example, $\varphi(7) = 6$
and $\varphi(9) = 6$, not powers of $2$; $\varphi(17) = 16$.

### The 17-gon by hand

On 30 March 1796, Carl Friedrich Gauss, then 18, found that the regular 17-gon is constructible; it is the first entry
of his mathematical diary, and the result appeared in his *Disquisitiones Arithmeticae* (1801). His method is the "if"
proof made concrete, and we can follow it with arithmetic only.

Let $\zeta = e^{2\pi i/17}$. The powers of $3$ modulo $17$ run through all nonzero residues:

$$
3^0, 3^1, \ldots, 3^{15} \equiv 1, 3, 9, 10, 13, 5, 15, 11, 16, 14, 8, 7, 4, 12, 2, 6 \pmod{17} .
$$

**Level 1: two periods of 8.** Add up $\zeta^k$ over the even positions in this list and over the odd ones:

$$
\eta_0 = \zeta + \zeta^9 + \zeta^{13} + \zeta^{15} + \zeta^{16} + \zeta^8 + \zeta^4 + \zeta^2, \qquad
\eta_1 = \zeta^3 + \zeta^{10} + \zeta^5 + \zeta^{11} + \zeta^{14} + \zeta^7 + \zeta^{12} + \zeta^6 .
$$

Together they contain every $\zeta^k$ with $k = 1, \ldots, 16$, so $\eta_0 + \eta_1 = -1$ (the sum of all 17th roots of
unity is $0$). Multiplying out the 64 products in $\eta_0 \eta_1$ and collecting, each $\zeta^k$ appears exactly four
times, so $\eta_0 \eta_1 = 4 \cdot (-1) = -4$. So $\eta_0, \eta_1$ are the roots of $t^2 + t - 4 = 0$:

$$
\eta_0 = \frac{-1 + \sqrt{17}}{2} \approx 1.5616, \qquad \eta_1 = \frac{-1 - \sqrt{17}}{2} \approx -2.5616 .
$$

(Since $\zeta^{17-k} = \overline{\zeta^k}$, $\eta_0 = 2(\cos\frac{2\pi}{17} + \cos\frac{4\pi}{17} + \cos\frac{8\pi}{17} + \cos\frac{16\pi}{17})$,
which is positive; that picks the sign.)

**Level 2: four periods of 4.** Take every fourth entry of the list: $q_j = \sum_{k \equiv j \ (\mathrm{mod}\ 4)} \zeta^{3^k}$.
The same kind of counting gives $q_0 + q_2 = \eta_0$, $q_0 q_2 = -1$, and $q_1 + q_3 = \eta_1$, $q_1 q_3 = -1$. So
each is a root of a quadratic whose coefficients we already have:

$$
q_0 = \frac{\eta_0 + \sqrt{\eta_0^2 + 4}}{2} \approx 2.0495, \qquad q_1 = \frac{\eta_1 + \sqrt{\eta_1^2 + 4}}{2} \approx 0.3442 .
$$

**Level 3: periods of 2.** $r_0 = \zeta + \zeta^{16} = 2\cos\frac{2\pi}{17}$ and $r_4 = \zeta^{13} + \zeta^4$ satisfy
$r_0 + r_4 = q_0$ and $r_0 r_4 = q_1$, so

$$
2\cos\frac{2\pi}{17} = \frac{q_0 + \sqrt{q_0^2 - 4q_1}}{2} \approx 1.86494 .
$$

Check: $2\cos(2\pi/17) = 2\cos(21.18^\circ) = 1.86494$. Three nested quadratics; unwinding them gives Gauss's formula

$$
16\cos\frac{2\pi}{17} = -1 + \sqrt{17} + \sqrt{34 - 2\sqrt{17}} + 2\sqrt{17 + 3\sqrt{17} - \sqrt{34 - 2\sqrt{17}} - 2\sqrt{34 + 2\sqrt{17}}} ,
$$

which a computer confirms to any number of digits. Only square roots appear, so the 17-gon is constructible.

!!! example "Try it in Python"
    ```python
    import cmath, math
    z = cmath.exp(2j * math.pi / 17)
    order = [pow(3, k, 17) for k in range(16)]
    eta0 = sum(z ** order[k] for k in range(0, 16, 2))
    eta1 = sum(z ** order[k] for k in range(1, 16, 2))
    print(eta0 + eta1, eta0 * eta1)          # about -1 and -4
    s17 = math.sqrt(17)
    g = (-1 + s17 + math.sqrt(34 - 2*s17)
         + 2*math.sqrt(17 + 3*s17 - math.sqrt(34 - 2*s17) - 2*math.sqrt(34 + 2*s17))) / 16
    print(g, math.cos(2 * math.pi / 17))     # equal
    ```

Explicit step-by-step constructions of the 17-gon exist (Richmond's of 1893 is a well-known one); the 257-gon was worked
out by Richelot in the 19th century, and Johann Hermes spent years on the 65537-gon.

## 14.6 Other tools

*Level: advanced.* The impossibility theorems are about one particular toolkit. Change the tools and the answers
change, sometimes in surprising directions.

### A marked ruler

With a straightedge carrying two marks, plus a compass, the "verging" move of 14.1 solves cubic and some quartic
equations: you can trisect any angle, double the cube, and construct the regular 7-gon and 9-gon. You still cannot
square the circle: a marked ruler and compass only reach algebraic numbers.

### Paper folding

Origami has its own rules. A fold is a line, and the allowed folds were listed by Humiaki Huzita, with one later added
by Koshiro Hatori (and the list was also found by Jacques Justin). Most of them do what straightedge and compass do:
fold through two points, fold one point onto another (the perpendicular bisector), fold one line onto another (the
angle bisector). One is new:

> **(O6)** Given two points $P_1, P_2$ and two lines $\ell_1, \ell_2$, fold so that $P_1$ lands on $\ell_1$ and $P_2$ lands
> on $\ell_2$ at the same time.

Placing a point on a line by a fold means the fold line is tangent to the parabola with that point as focus and that
line as directrix ([Chapter 8](08-Coordinate-Geometry.md)). So O6 asks for a common tangent of two parabolas, which is
a cubic equation. That is enough to trisect angles and double cubes. Roger Alperin showed that the origami numbers are
exactly those reached from the rationals by square roots and cube roots (more precisely, by solving quadratics and
cubics).

**Abe's trisection.** Here is a proof, in full, that paper folding trisects any acute angle. Take a square sheet with
corner $B$ at the bottom left. The angle to trisect, $\theta$, is between the bottom edge and a line $\ell$ through $B$.

1. Fold a horizontal line at some height $h$, meeting the left edge at $P$, and another at height $h/2$, meeting it at $Q$.
2. Make the O6 fold that puts $B$ onto the line at height $h/2$ and $P$ onto $\ell$. Call the images $B'$, $P'$ and $Q'$
   (the image of $Q$).
3. The lines $BB'$ and $BQ'$ trisect the angle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 372.0 372.0" role="img" aria-label="Abe's trisection by paper folding. The angle at the corner B is between the bottom edge and the line l. Fold lines at heights h and h over 2; then make the one fold that puts B on the lower line and P on l. The images B prime and Q prime give the two trisecting lines from B">
  <polygon points="36.0,336.0 336.0,336.0 336.0,36.0 36.0,36.0" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <line x1="36.0" y1="336.0" x2="179.0" y2="55.3" stroke="currentColor" stroke-width="1.8"/>
  <line x1="36.0" y1="246.0" x2="336.0" y2="246.0" stroke="currentColor" stroke-width="1" stroke-dasharray="5 3"/>
  <line x1="36.0" y1="291.0" x2="336.0" y2="291.0" stroke="currentColor" stroke-width="1" stroke-dasharray="5 3"/>
  <line x1="36.0" y1="160.8" x2="103.3" y2="336.0" stroke="currentColor" stroke-width="1.4" stroke-dasharray="2 2"/>
  <polygon points="36.0,336.0 153.2,291.0 36.0,336.0" fill="none" stroke="currentColor" stroke-width="0" stroke-linejoin="round"/>
  <line x1="36.0" y1="336.0" x2="358.1" y2="212.4" stroke="currentColor" stroke-width="1.4"/>
  <line x1="36.0" y1="336.0" x2="285.7" y2="111.2" stroke="currentColor" stroke-width="1.4"/>
  <line x1="153.2" y1="291.0" x2="93.0" y2="224.1" stroke="currentColor" stroke-width="2.2"/>
  <circle cx="36.0" cy="336.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="26.0" y="350.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="36.0" cy="246.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="24.0" y="250.0" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="36.0" cy="291.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="24.0" y="295.0" font-size="12" text-anchor="middle" fill="currentColor">Q</text>
  <circle cx="153.2" cy="291.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="165.2" y="305.0" font-size="12" text-anchor="middle" fill="currentColor">B′</text>
  <circle cx="123.1" cy="257.6" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="137.1" y="263.6" font-size="12" text-anchor="middle" fill="currentColor">Q′</text>
  <circle cx="93.0" cy="224.1" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="79.0" y="222.1" font-size="12" text-anchor="middle" fill="currentColor">P′</text>
  <text x="162.2" y="68.7" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">l</text>
  <text x="346.0" y="250.0" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">h</text>
  <text x="350.0" y="295.0" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">h/2</text>
</svg>
</div>

*Proof.* The fold is a reflection, so it carries the segment $PQB$ (on the left edge) to the segment $P'Q'B'$, with
$Q'$ the midpoint of $P'B'$ and $|P'Q'| = |Q'B'| = h/2$. The reflection also swaps $B$ and $B'$, and it carries the line
$BQ'$ to the line $B'Q$. Now $B'$ is at height $h/2$, the same as $Q$, so $B'Q$ is horizontal, perpendicular to the left
edge $BP$. Reflecting back, $BQ'$ is perpendicular to $B'P'$. So:

- triangles $BQ'P'$ and $BQ'B'$ are congruent (SAS: common side $BQ'$, right angles at $Q'$, $Q'P' = Q'B'$), so
  $\angle P'BQ' = \angle Q'BB'$;
- let $E$ be the foot of the perpendicular from $B'$ to the bottom edge. Triangles $BQ'B'$ and $BEB'$ are right
  triangles with the same hypotenuse $BB'$ and $Q'B' = h/2 = EB'$, so they are congruent (RHS), and
  $\angle Q'BB' = \angle B'BE$.

Since $P'$ lies on $\ell$, the angle $\theta = \angle P'BE$ is split into three equal parts. $\square$

**Check** (from the figure's computation): with $\theta = 63^\circ$ and $h = 0.3$, the fold gives directions of $21^\circ$,
$42^\circ$ and $63^\circ$ for $B'$, $Q'$ and $P'$ seen from $B$.

### The compass alone

**Theorem 14.10 (Mohr-Mascheroni).** Every point that can be constructed with straightedge and compass can be
constructed with the compass alone. (Of course you cannot draw the lines; but every **point** can be found.)

Georg Mohr published this in 1672 in a book that was then forgotten; Lorenzo Mascheroni proved it independently in
1797, and Mohr's book was only rediscovered in 1928. A neat modern proof uses inversion
([Chapter 13](13-Inversion-and-Complex-Geometry.md)).

**Step 1: invert a point with the compass alone.** Let the circle of inversion have centre $O$ and radius $r$, and
let $P$ be a point with $OP > r/2$. Draw the circle about $P$ through $O$; it meets the circle of inversion at $A$ and $B$.
Draw the circles about $A$ and about $B$ through $O$. They meet again at $P'$, the inverse of $P$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 465.8 408.8" role="img" aria-label="Inverting a point with a compass alone: the circle about P through O meets the circle of inversion at A and B. The circles about A and about B through O meet again at P prime, the inverse of P">
  <circle cx="130.8" cy="216.2" r="95.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="282.8" cy="178.2" r="156.7" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 3"/>
  <circle cx="136.7" cy="121.4" r="95.0" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2 2"/>
  <circle cx="180.6" cy="297.1" r="95.0" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2 2"/>
  <line x1="130.8" y1="216.2" x2="282.8" y2="178.2" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="130.8" cy="216.2" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="118.8" y="220.2" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <circle cx="282.8" cy="178.2" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="292.8" y="182.2" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="136.7" cy="121.4" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="144.7" y="113.4" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="180.6" cy="297.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="188.6" y="313.1" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="186.6" cy="202.3" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="190.6" y="192.3" font-size="12" text-anchor="middle" fill="currentColor">P′</text>
</svg>
</div>

*Why:* by symmetry in the line $OP$, $P'$ lies on $OP$. Triangles $OAP$ and $OP'A$ are both isosceles ($PO = PA$, and
$AO = AP' = r$) and share the base angle at $O$, so they are similar: $OP'/OA = OA/OP$, that is $OP \cdot OP' = r^2$.
(If $OP \le r/2$, first double $OP$ several times with the compass, which can be done, invert, and double again.)

**Step 2: everything else.** A straightedge construction needs intersections of lines with lines and with circles.
Choose a circle of inversion whose centre $O$ is not on the line. Invert two points of the line: the line becomes a
circle through $O$, and we can find its centre by compass constructions. Intersect that circle with the image of the
other line or circle (also found by inverting points), then invert the intersection points back. Each step uses the
compass only. $\square$

The details of finding centres take some care; they are in Hartshorne's book listed below. The dual result,
**Poncelet-Steiner**: a straightedge alone suffices, provided one circle with its centre has been drawn somewhere on
the page (Jakob Steiner, 1833). Without that circle, a straightedge alone cannot even find the midpoint of a segment.

## Check yourself

??? question "1. Show how to construct $\sqrt{5}$ and $\sqrt[4]{5}$, starting from a unit length."

    $\sqrt5$ is the hypotenuse of a right triangle with legs $1$ and $2$. Then $\sqrt[4]{5} = \sqrt{\sqrt5}$: put lengths
    $1$ and $\sqrt5$ end to end, draw the semicircle on the whole, and raise the perpendicular at the join; its height is
    $\sqrt{\sqrt5}$ by the altitude theorem.

??? question "2. Is the number $\sqrt{2 + \sqrt3}$ constructible? Is $\sqrt[3]{3}$? Give reasons."

    $\sqrt{2 + \sqrt3}$ is built from rationals by two square roots, so it is constructible (Theorem 14.1). For
    $\sqrt[3]3$, the polynomial $x^3 - 3$ has possible rational roots $\pm1, \pm3$, none of which works ($-2$, $-4$, $24$,
    $-30$), so it is irreducible and $\sqrt[3]3$ has degree $3$: not constructible.

??? question "3. Can a $30^\circ$ angle be trisected with straightedge and compass? Can a $90^\circ$ angle?"

    A third of $30^\circ$ is $10^\circ$. If $10^\circ$ were constructible, doubling it would give $20^\circ$, a
    trisection of $60^\circ$, which Theorem 14.6 forbids. So $30^\circ$ cannot be trisected. A third of $90^\circ$ is
    $30^\circ$, which is half of the $60^\circ$ angle of an equilateral triangle, so $90^\circ$ can be trisected. The
    lesson: whether an angle can be trisected depends on the angle, and needs a check every time.

??? question "4. Use the triple angle formula to show that the regular 9-gon is not constructible, directly."

    The 9-gon needs $40^\circ$. With $c = \cos 40^\circ$, $\cos 120^\circ = -\tfrac12 = 4c^3 - 3c$, so $8c^3 - 6c + 1 = 0$.
    Possible rational roots $\pm1, \pm\tfrac12, \pm\tfrac14, \pm\tfrac18$: the values are $3, -1, -1, 3, -\tfrac38, \tfrac{19}{8},
    \tfrac{17}{64}, \tfrac{111}{64}$ (for $1, -1, \tfrac12, -\tfrac12, \tfrac14, -\tfrac14, \tfrac18, -\tfrac18$); none is zero. So the cubic is irreducible, $\cos 40^\circ$ has degree $3$, and the 9-gon is not
    constructible.

??? question "5. Which of the regular polygons with 51, 60, 63, 68, 85 and 100 sides are constructible?"

    $51 = 3 \cdot 17$: yes. $60 = 4 \cdot 3 \cdot 5$: yes. $63 = 9 \cdot 7$: no (9 is $3^2$, and 7 is not a Fermat prime).
    $68 = 4 \cdot 17$: yes. $85 = 5 \cdot 17$: yes. $100 = 4 \cdot 25$: no ($5$ appears twice). Check with Euler's
    function: $\varphi(51) = 32$, $\varphi(60) = 16$, $\varphi(63) = 36$, $\varphi(68) = 32$, $\varphi(85) = 64$, $\varphi(100) = 40$.

??? question "6. Using $\frac{1}{15} = \frac{2}{5} - \frac{1}{3}$, explain how to construct a $24^\circ$ angle."

    $\frac{360^\circ}{15} = 24^\circ = 2 \cdot 72^\circ - 120^\circ$. Construct $72^\circ$ (from the pentagon), double it to
    $144^\circ$, and subtract the $120^\circ$ angle of an equilateral-triangle construction (twice $60^\circ$).

??? question "7. Show that $2^6 + 1 = 65$ is not prime using the proof of Lemma 14.8."

    $m = 6 = 3 \cdot 2$, with odd factor $s = 3$ and $t = 2$. So $2^2 + 1 = 5$ divides $(2^2)^3 + 1 = 65$. Indeed $65 = 5 \cdot 13$.

??? question "8. A student claims a construction gives $\cos 20^\circ$ as $\frac{1}{4}\left(\sqrt{6} + \sqrt{2}\right) \cdot 0.973$. What is wrong with this kind of claim, in general?"

    Any expression made from rationals and square roots is constructible, so it cannot equal $\cos 20^\circ$, which has
    degree $3$. At best such a construction is an approximation. Here
    $\tfrac14(\sqrt6 + \sqrt2) = \cos 15^\circ \approx 0.96593$ and the product is $0.93985$, close to
    $\cos 20^\circ \approx 0.93969$ but not equal (and the factor $0.973$ was chosen to make it close).

??? question "9. Check the first level of Gauss's 17-gon numerically: compute $2(\cos\frac{2\pi}{17} + \cos\frac{4\pi}{17} + \cos\frac{8\pi}{17} + \cos\frac{16\pi}{17})$."

    The four cosines are about $0.93247$, $0.73901$, $0.09227$ and $-0.98297$. Their sum is $0.78078$, and twice it is
    $1.56155$, which matches $(-1 + \sqrt{17})/2 = (-1 + 4.12311)/2 = 1.56155$.

??? question "10. In Archimedes' trisection, why may the construction not be done with straightedge and compass alone, even though each line drawn is a straight line?"

    The position of the line $DCB$ is not fixed by points already constructed. It is found by sliding the ruler until
    the two marks fall on the circle and the line at once, using a distance marked on the ruler. The rules allow only
    lines through two already-constructed points. The sliding solves a cubic equation, which is why it can reach
    $\cos 20^\circ$.

??? question "11. Prove that if $a$ is constructible and $a > 0$ then $\sqrt[2^k]{a}$ is constructible for every $k$, but that $\sqrt[6]{2}$ is not."

    Apply the square root construction $k$ times. For $\sqrt[6]2$: it is a root of $x^6 - 2$, irreducible by Eisenstein at
    $2$, so its degree is $6$, not a power of $2$. (Also: if $\sqrt[6]2$ were constructible, its square $\sqrt[3]2$ would
    be, contradicting Theorem 14.5.)

??? question "12. In the compass-only inversion (Step 1 of 14.6), take $O = 0$, $r = 1$ and $P = 2$. Find $A$, $B$ and $P'$, and check $OP \cdot OP' = 1$."

    The circle about $2$ through $0$ is $|z - 2| = 2$. With $|z| = 1$: $|z|^2 - 4\,\mathrm{Re}\, z + 4 = 4$, so
    $\mathrm{Re}\, z = \tfrac14$ and $A, B = \tfrac14 \pm \tfrac{\sqrt{15}}{4} i$. The circles about $A$ and $B$ through $0$
    have radius $1$ and, by symmetry, meet again on the real axis at $x$ with $(x - \tfrac14)^2 + \tfrac{15}{16} = 1$, so
    $x = \tfrac14 \pm \tfrac14$: $x = 0$ or $x = \tfrac12$. So $P' = \tfrac12$ and $OP \cdot OP' = 2 \cdot \tfrac12 = 1$.

## What you learned

- Straightedge-and-compass constructions are arithmetic: they reach exactly the numbers obtained from the rationals by
  $+, -, \times, \div$ and square roots.
- A constructible number has degree a power of $2$ over $\mathbb{Q}$, by the tower law.
- $\sqrt[3]2$ and $\cos 20^\circ$ have degree $3$, so doubling the cube and trisecting $60^\circ$ are impossible
  (Wantzel, 1837); $\pi$ is transcendental (Lindemann, 1882), so the circle cannot be squared.
- The regular $n$-gon is constructible exactly when $n$ is a power of $2$ times distinct Fermat primes; Gauss built the
  17-gon from three nested quadratic equations.
- Other tools change the answer: a marked ruler or origami solves cubics and trisects angles, while the compass alone
  can do everything the two tools can do together.

**Next:** [Chapter 15](15-Axioms-and-the-Parallel-Postulate.md) turns from what we can construct to what we can prove, and follows the 2000-year attempt to prove Euclid's fifth postulate.

## Further reading

- R. Hartshorne, *Geometry: Euclid and Beyond* (2000), chapters 1 to 3 and 6 (constructions, field of constructible numbers, Mohr-Mascheroni).
- C. R. Hadlock, *Field Theory and Its Classical Problems* (1978).
- G. E. Martin, *Geometric Constructions* (1998), including marked rulers and origami.
- W. R. Knorr, *The Ancient Tradition of Geometric Problems* (1986), the Greek solutions and their history.
- P. L. Wantzel, "Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas", *Journal de Mathématiques Pures et Appliquées* 2 (1837).
- C. F. Gauss, *Disquisitiones Arithmeticae* (1801), section 7.
- R. C. Alperin, "A mathematical theory of origami constructions and numbers", *New York Journal of Mathematics* 6 (2000).
- T. Hull, *Project Origami* (2006).
- I. Niven, *Irrational Numbers* (1956), and A. Baker, *Transcendental Number Theory* (1975), for Lindemann's theorem.
- On this site: the Algebra book's [Fields and extensions](../algebra/19-Fields-and-Extensions.md) and
  [Galois theory](../algebra/20-Galois-Theory.md); the gentler
  [Compass and straightedge](../../topics/geometry/level-5/01-compass-straightedge.md) lesson; the
  [Geometry book index](index.md).
