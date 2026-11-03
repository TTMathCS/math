# 1. Vectors

*A rover on Mars drives 300 metres east and then 400 metres north. A drone hovering above it is pushed by a wind of
6 metres per second from the west while its rotors pull it 8 metres per second towards the north. In both cases two
"movements" combine into one, and the answer is not found by adding 300 and 400, or 6 and 8. Linear algebra starts
here: with objects that have a size and a direction, that can be added and stretched, and that turn out to be nothing
more than lists of numbers. In this chapter you will meet vectors as arrows and as lists, add and scale them, measure
their lengths and the angles between them, prove the inequality that makes angles make sense, write lines and planes in
space, and use the cross product to find a direction at right angles to two others.*

!!! abstract "In this chapter"

    **You will learn:**

    - what a vector is, both as an arrow and as a list of numbers, and why the two views are the same thing
    - how to add vectors, multiply them by numbers, and form linear combinations
    - length, distance, the dot product, and how the dot product measures angles
    - a full proof of the Cauchy-Schwarz inequality and the triangle inequality
    - how to describe lines and planes in space with vectors, and find where they meet
    - the cross product in three dimensions: what it means, how to compute it, and why its length is an area

    **You need:** school algebra, coordinates in the plane and Pythagoras' theorem. For a gentler version first, see
    the Topics lessons [Vectors](../../topics/geometry/level-8/04-vectors.md),
    [The dot product](../../topics/geometry/level-8/05-dot-product.md),
    [Distance and midpoint](../../topics/geometry/level-6/03-distance-midpoint.md) and
    [Lines and planes in space](../../topics/algebra/level-8/08-lines-planes-space.md). The Geometry book's
    [Chapter 9](../geometry/09-Vectors.md) covers the same ground with more classical geometry.

    **Levels:** 1.1 and 1.2 are beginner; 1.3 and 1.4 are beginner to intermediate; 1.5 is intermediate.

## 1.1 Arrows and lists of numbers

Start with a question. A rover stands at a point we call the origin. It drives 3 units east and 1 unit north. Then it
drives 1 unit east and 2 units north. Where is it?

You can answer by drawing. Put an arrow from the origin 3 across and 1 up. From the tip of that arrow, draw another
arrow 1 across and 2 up. The rover ends at the tip of the second arrow, 4 across and 3 up. You can also answer without
drawing: east movements add, $3 + 1 = 4$, and north movements add, $1 + 2 = 3$.

That double answer is the whole idea of this chapter. A **vector** is a quantity with a size and a direction. You can
picture it as an **arrow**, and you can record it as a **list of numbers**, its **components**. The arrow "3 east,
1 north" and the list $(3, 1)$ carry exactly the same information.

**Notation.** We write vectors in bold, $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ (by hand, people write $\vec{u}$ or
underline the letter). A vector with two components is written $\mathbf{u} = (3, 1)$ or as a column

$$
\mathbf{u} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}.
$$

Both mean the same; from Chapter 3 on, columns will be the standard way, because they fit matrix multiplication. Plain
numbers like $2$, $-5$ or $\pi$ are called **scalars**, to tell them apart from vectors. (The word comes from "scale":
a number is something you can scale a vector by.)

**The set $\mathbb{R}^n$.** The symbol $\mathbb{R}$ stands for the real numbers, all the numbers on the number line.
$\mathbb{R}^2$ is the set of all pairs $(x, y)$ of real numbers, $\mathbb{R}^3$ the set of all triples $(x, y, z)$, and
in general $\mathbb{R}^n$ is the set of all lists $(x_1, x_2, \ldots, x_n)$ of $n$ real numbers. The number $n$ is
called the **dimension** for now; Chapter 5 gives the word its real meaning.

**Free arrows.** An arrow drawn from $(1, 1)$ to $(4, 2)$ goes 3 across and 1 up, so it is the vector $(3, 1)$. So is
the arrow from $(-2, 0)$ to $(1, 1)$. A vector does not remember where it starts; it only records the movement. If you
need to fix a starting point, you are talking about a **point** and a **displacement** from it. The vector from point
$P$ to point $Q$ is written $\overrightarrow{PQ}$, and its components are "coordinates of $Q$ minus coordinates of
$P$":

$$
P = (1, 1), \quad Q = (4, 2) \quad\Longrightarrow\quad \overrightarrow{PQ} = (4 - 1,\; 2 - 1) = (3, 1).
$$

Each point $P$ also has a **position vector** $\overrightarrow{OP}$, the arrow from the origin $O$ to $P$. Its
components are just the coordinates of $P$. That is why the same list $(3, 1)$ can mean a point or a vector; context
decides.

**Why lists of numbers are so useful.** Arrows only make sense in two or three dimensions, where you can draw them.
Lists make sense in any number of dimensions. A weather station that records temperature, pressure, humidity, wind
speed and dust level every hour produces a vector in $\mathbb{R}^5$ every hour. A grey-scale picture of 1000 by 1000
pixels is a vector in $\mathbb{R}^{1\,000\,000}$, one number per pixel. Nobody can draw an arrow in a million
dimensions, but adding two such lists, or measuring how far apart they are, works exactly as it does in the plane. The
plan of the whole book is to build intuition with pictures in $\mathbb{R}^2$ and $\mathbb{R}^3$, prove things with the
algebra of lists, and then trust the algebra in dimensions we cannot see.

**Example 1.1.** A rover drives from $A = (2, 5)$ to $B = (7, -1)$, with coordinates in hundreds of metres. Its
displacement is $\overrightarrow{AB} = (7 - 2, -1 - 5) = (5, -6)$: 500 metres east and 600 metres south. The trip back
is $\overrightarrow{BA} = (-5, 6)$, the same arrow pointing the other way.

## 1.2 Adding and scaling

Two operations make vectors useful: adding two of them, and multiplying one by a number.

**Addition.** To add vectors, add their components:

$$
(u_1, u_2, \ldots, u_n) + (v_1, v_2, \ldots, v_n) = (u_1 + v_1,\; u_2 + v_2,\; \ldots,\; u_n + v_n).
$$

In pictures, this is the **tip-to-tail rule**: draw $\mathbf{u}$, then draw $\mathbf{v}$ starting at the tip of
$\mathbf{u}$; the sum $\mathbf{u} + \mathbf{v}$ is the arrow from the start of $\mathbf{u}$ to the tip of $\mathbf{v}$.
If you do it the other way round, $\mathbf{v}$ first and then $\mathbf{u}$, you reach the same place. The two routes
are the two sides of a parallelogram, and the sum is its diagonal; this is the **parallelogram rule**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 370 300" role="img" aria-label="On a grid, u = (3, 1) in orange and v = (1, 2) in green start at the origin. Dashed copies of v from the tip of u and of u from the tip of v meet at (4, 3). The diagonal from the origin to (4, 3) is u + v, drawn dark. The parallelogram is shaded blue.">
  <line x1="10" y1="40" x2="10" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="60" y1="40" x2="60" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="110" y1="40" x2="110" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="160" y1="40" x2="160" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="210" y1="40" x2="210" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="260" y1="40" x2="260" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="310" y1="40" x2="310" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="360" y1="40" x2="360" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="10" y1="40" x2="360" y2="40" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="10" y1="90" x2="360" y2="90" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="10" y1="140" x2="360" y2="140" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="10" y1="190" x2="360" y2="190" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="10" y1="240" x2="360" y2="240" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="10" y1="290" x2="360" y2="290" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <polygon points="60,240 210,190 260,90 110,140" fill="#9cc9ea" fill-opacity="0.25"/>
  <line x1="60" y1="240" x2="200.5" y2="193.2" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="210,190 201.9,197.4 199.1,188.9" fill="#eea66f"/>
  <line x1="60" y1="240" x2="105.5" y2="148.9" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="110,140 109.6,151 101.5,146.9" fill="#7ccf9a"/>
  <line x1="210" y1="190" x2="255.5" y2="98.9" stroke="#7ccf9a" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="260,90 259.6,101 251.5,96.9" fill="#7ccf9a"/>
  <line x1="110" y1="140" x2="250.5" y2="93.2" stroke="#eea66f" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="260,90 251.9,97.4 249.1,88.9" fill="#eea66f"/>
  <line x1="60" y1="240" x2="252" y2="96" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="260,90 254.7,99.6 249.3,92.4" fill="currentColor"/>
  <circle cx="60" cy="240" r="3.5" fill="currentColor"/>
  <text x="48" y="258" text-anchor="middle" font-size="14" fill="currentColor">O</text>
  <text x="140" y="232" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="72" y="185" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="185" y="140" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u + v</text>
  <text x="290" y="82" text-anchor="middle" font-size="13" fill="currentColor">(4, 3)</text>
</svg>
</div>

With $\mathbf{u} = (3, 1)$ and $\mathbf{v} = (1, 2)$ the picture shows $\mathbf{u} + \mathbf{v} = (4, 3)$: the rover's
two drives from the start of the chapter.

**Scaling.** To multiply a vector by a scalar $c$, multiply every component:

$$
c\,(v_1, v_2, \ldots, v_n) = (c v_1,\; c v_2,\; \ldots,\; c v_n).
$$

In pictures: $2\mathbf{v}$ points the same way as $\mathbf{v}$ and is twice as long; $\tfrac12 \mathbf{v}$ is half as
long; $-\mathbf{v}$ has the same length and points the opposite way; $0\mathbf{v}$ is the **zero vector**
$\mathbf{0} = (0, 0, \ldots, 0)$, an arrow of length zero with no direction at all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 190" role="img" aria-label="Four arrows with the same slope: v in orange, 2v in green twice as long, minus v in blue pointing the opposite way, and one half v, half as long, dark.">
  <line x1="30" y1="150" x2="81.1" y2="124.5" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="90,120 83.1,128.5 79,120.4" fill="#eea66f"/>
  <line x1="120" y1="150" x2="231.1" y2="94.5" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="240,90 233.1,98.5 229,90.4" fill="#7ccf9a"/>
  <line x1="330" y1="120" x2="278.9" y2="145.5" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="270,150 276.9,141.5 281,149.6" fill="#9cc9ea"/>
  <line x1="370" y1="150" x2="391.1" y2="139.5" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="400,135 393.1,143.5 389,135.4" fill="currentColor"/>
  <text x="60" y="178" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="180" y="178" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">2v</text>
  <text x="300" y="178" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">−v</text>
  <text x="385" y="178" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">½v</text>
</svg>
</div>

**Subtraction** is adding the opposite: $\mathbf{u} - \mathbf{v} = \mathbf{u} + (-1)\mathbf{v}$. In components,
subtract component by component. In pictures, $\mathbf{u} - \mathbf{v}$ is the arrow from the tip of $\mathbf{v}$ to the
tip of $\mathbf{u}$ (when both start at the same point), because $\mathbf{v} + (\mathbf{u} - \mathbf{v}) = \mathbf{u}$.
This is why the vector from $P$ to $Q$ is $\overrightarrow{OQ} - \overrightarrow{OP}$.

**Example 1.2.** With $\mathbf{u} = (3, 1)$ and $\mathbf{v} = (1, 2)$:

- $\mathbf{u} - \mathbf{v} = (2, -1)$,
- $2\mathbf{u} = (6, 2)$,
- $2\mathbf{u} - 3\mathbf{v} = (6 - 3,\; 2 - 6) = (3, -4)$.

Check the last one by drawing: two copies of $\mathbf{u}$ tip to tail reach $(6, 2)$; then three steps of $-\mathbf{v}$
go 3 left and 6 down, to $(3, -4)$.

**The rules.** Because addition and scaling work component by component, they inherit the rules of ordinary
arithmetic. For all vectors $\mathbf{u}, \mathbf{v}, \mathbf{w}$ in $\mathbb{R}^n$ and scalars $a, b$:

- $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ and $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$;
- $\mathbf{v} + \mathbf{0} = \mathbf{v}$ and $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$;
- $a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$ and $(a + b)\mathbf{v} = a\mathbf{v} + b\mathbf{v}$;
- $a(b\mathbf{v}) = (ab)\mathbf{v}$ and $1\mathbf{v} = \mathbf{v}$.

*Why:* each rule is true in every component because it is true for real numbers. For example, the $i$-th component of
$a(\mathbf{u} + \mathbf{v})$ is $a(u_i + v_i)$, and the $i$-th component of $a\mathbf{u} + a\mathbf{v}$ is
$a u_i + a v_i$; these are equal by the distributive law for numbers. Chapter 4 turns exactly these eight rules into the
definition of a "vector space", and then finds vectors in surprising places.

**Linear combinations.** Adding and scaling together give the most important construction in the subject. A
**linear combination** of vectors $\mathbf{v}_1, \ldots, \mathbf{v}_k$ is any vector of the form

$$
c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \cdots + c_k \mathbf{v}_k
$$

with scalars $c_1, \ldots, c_k$. The word "linear" is used because only these two operations appear: no products of
vectors, no squares, no square roots.

**Example 1.3.** Can you reach $(7, 4)$ using only the moves $\mathbf{u} = (3, 1)$ and $\mathbf{v} = (1, 2)$, each as
many times as you like, forwards or backwards, even in fractions? You need numbers $a, b$ with
$a(3, 1) + b(1, 2) = (7, 4)$, that is,

$$
3a + b = 7, \qquad a + 2b = 4.
$$

From the second equation $a = 4 - 2b$; substitute in the first: $12 - 6b + b = 7$, so $b = 1$ and $a = 2$.
**Check:** $2(3, 1) + 1(1, 2) = (6 + 1, 2 + 2) = (7, 4)$. In fact every point of the plane can be reached this way,
because $\mathbf{u}$ and $\mathbf{v}$ point in different directions; Chapter 5 makes "different directions" precise.
Notice that asking whether a vector is a linear combination of others led straight to a system of equations. That is
the subject of [Chapter 2](02-Systems-of-Linear-Equations.md), and the link between the two is the backbone of the
book.

**Example 1.4 (the standard basis).** In $\mathbb{R}^3$ let $\mathbf{e}_1 = (1, 0, 0)$, $\mathbf{e}_2 = (0, 1, 0)$,
$\mathbf{e}_3 = (0, 0, 1)$. Every vector is a linear combination of them, in exactly one way:

$$
(x, y, z) = x\,\mathbf{e}_1 + y\,\mathbf{e}_2 + z\,\mathbf{e}_3.
$$

The components of a vector are its coefficients in this combination. Physicists often call these three vectors
$\mathbf{i}, \mathbf{j}, \mathbf{k}$.

**Midpoints and averages.** The midpoint of the segment from $P$ to $Q$ has position vector
$\tfrac12(\mathbf{p} + \mathbf{q})$, where $\mathbf{p} = \overrightarrow{OP}$ and $\mathbf{q} = \overrightarrow{OQ}$.
*Why:* start at $P$ and go half of the way to $Q$:
$\mathbf{p} + \tfrac12(\mathbf{q} - \mathbf{p}) = \tfrac12\mathbf{p} + \tfrac12\mathbf{q}$. More generally the points
$(1 - t)\mathbf{p} + t\mathbf{q}$ with $0 \le t \le 1$ make up the whole segment, and the centroid of a triangle with
corners $\mathbf{p}, \mathbf{q}, \mathbf{r}$ is $\tfrac13(\mathbf{p} + \mathbf{q} + \mathbf{r})$. A combination whose
coefficients add up to 1 is called an **affine combination**; it describes a point, not a free arrow.

## 1.3 Length, dot product and angle

How long is the vector $(3, 4)$? Its arrow is the hypotenuse of a right triangle with legs 3 and 4, so by Pythagoras
its length is $\sqrt{3^2 + 4^2} = 5$. In three dimensions, the vector $(x, y, z)$ is the diagonal of a box: first
Pythagoras on the floor gives $\sqrt{x^2 + y^2}$, then Pythagoras again with the height gives
$\sqrt{x^2 + y^2 + z^2}$. So we define, in any dimension:

**Definition.** The **length** (or **norm**) of $\mathbf{v} = (v_1, \ldots, v_n)$ is

$$
\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}.
$$

The double bars are there to avoid confusion with the absolute value of a number, although many books use single bars.
The **distance** between points $P$ and $Q$ is $\|\mathbf{q} - \mathbf{p}\|$.

**Example 1.5.** $\|(1, 2, 2)\| = \sqrt{1 + 4 + 4} = 3$. The distance from $(1, 0, 3)$ to $(3, 1, 1)$ is
$\|(2, 1, -2)\| = \sqrt{4 + 1 + 4} = 3$.

Two facts follow at once. First, $\|\mathbf{v}\| \ge 0$, with equality only for $\mathbf{v} = \mathbf{0}$ (a sum of
squares is zero only if every square is zero). Second, $\|c\mathbf{v}\| = |c|\,\|\mathbf{v}\|$, because every
component is multiplied by $c$, every square by $c^2$, and $\sqrt{c^2} = |c|$.

**Unit vectors.** A vector of length 1 is a **unit vector**. Dividing any nonzero vector by its length gives the unit
vector in the same direction: $\mathbf{v}/\|\mathbf{v}\|$. This is called **normalising**. For example
$(1, 2, 2)/3 = (\tfrac13, \tfrac23, \tfrac23)$. A unit vector is a pure direction; a direction together with a length
gives back any vector.

**The dot product.** Now the central question: what is the angle between two vectors? The tool is a way of
multiplying two vectors to get a number.

**Definition.** The **dot product** of $\mathbf{u} = (u_1, \ldots, u_n)$ and $\mathbf{v} = (v_1, \ldots, v_n)$ is

$$
\mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + \cdots + u_n v_n.
$$

Multiply matching components and add. Note that $\mathbf{v} \cdot \mathbf{v} = \|\mathbf{v}\|^2$, so the length is
built from the dot product. The rules are easy to check component by component:

- $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$ (symmetry);
- $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$ and $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$ (linearity);
- $\mathbf{v} \cdot \mathbf{v} \ge 0$, with equality only when $\mathbf{v} = \mathbf{0}$ (positivity).

These three properties are all we will use in proofs. That matters: in Chapter 11 other "products" with the same three
properties will appear, and every theorem proved from them will hold there too.

**The geometric meaning.** Draw $\mathbf{u}$ and $\mathbf{v}$ from the same point, with angle $\theta$ between them.
The third side of the triangle is $\mathbf{u} - \mathbf{v}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 250" role="img" aria-label="Triangle with u along the bottom in orange, v rising at 45 degrees in green, and u minus v in blue from the tip of v to the tip of u. The angle theta is marked at the shared starting point.">
  <line x1="60" y1="220" x2="330" y2="220" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="340,220 330,224.5 330,215.5" fill="#eea66f"/>
  <line x1="60" y1="220" x2="192.9" y2="87.1" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="200,80 196.1,90.3 189.7,83.9" fill="#7ccf9a"/>
  <line x1="200" y1="80" x2="332.9" y2="212.9" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="340,220 329.7,216.1 336.1,209.7" fill="#9cc9ea"/>
  <path d="M 100,220 A 40 40 0 0 0 88.3,191.7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="112" y="208" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">θ</text>
  <text x="200" y="242" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="112" y="140" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="300" y="140" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u − v</text>
</svg>
</div>

**Theorem 1.1.** For vectors $\mathbf{u}, \mathbf{v}$ in $\mathbb{R}^2$ or $\mathbb{R}^3$ with angle $\theta$ between
them,

$$
\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\|\,\|\mathbf{v}\| \cos\theta.
$$

*Proof.* The law of cosines in the triangle above says
$\|\mathbf{u} - \mathbf{v}\|^2 = \|\mathbf{u}\|^2 + \|\mathbf{v}\|^2 - 2\|\mathbf{u}\|\,\|\mathbf{v}\|\cos\theta$.
Expand the left side using the rules of the dot product:

$$
\|\mathbf{u} - \mathbf{v}\|^2 = (\mathbf{u} - \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v})
= \mathbf{u} \cdot \mathbf{u} - 2\,\mathbf{u} \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{v}
= \|\mathbf{u}\|^2 - 2\,\mathbf{u} \cdot \mathbf{v} + \|\mathbf{v}\|^2 .
$$

Compare the two expressions: the squares cancel and $-2\,\mathbf{u} \cdot \mathbf{v} = -2\|\mathbf{u}\|\,\|\mathbf{v}\|\cos\theta$.
(If one vector is zero, both sides are zero.) $\square$

So the dot product, a simple sum of products, secretly knows the angle. Turn the formula around:

$$
\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|\,\|\mathbf{v}\|}.
$$

**Example 1.6.** The angle between $\mathbf{u} = (1, 2, 2)$ and $\mathbf{v} = (2, -1, 2)$:
$\mathbf{u} \cdot \mathbf{v} = 2 - 2 + 4 = 4$ and both lengths are 3, so $\cos\theta = 4/9$ and
$\theta \approx 63.6^\circ$.

**Example 1.7.** The angle between two diagonals of faces of a cube that meet at a corner, $(1, 1, 0)$ and $(0, 1, 1)$:
the dot product is 1, both lengths are $\sqrt2$, so $\cos\theta = \tfrac12$ and $\theta = 60^\circ$. **Check:** the
diagonals of three faces meeting at a corner, joined at their ends, form a triangle with three sides $\sqrt2$, which is
equilateral, so its angles are $60^\circ$.

**Perpendicular vectors.** The angle is $90^\circ$ exactly when $\cos\theta = 0$, that is, when the dot product is 0.
Vectors with $\mathbf{u} \cdot \mathbf{v} = 0$ are called **orthogonal** (from the Greek for "right-angled"). For
example $(2, 1)$ and $(-1, 2)$ are orthogonal: $-2 + 2 = 0$. The zero vector is orthogonal to everything. The sign of
the dot product tells you more: positive means an acute angle (the vectors roughly agree), negative means an obtuse
angle (they roughly disagree).

**Projection.** How much of $\mathbf{v}$ points along $\mathbf{u}$? If $\mathbf{u}$ is a unit vector, the length of the
shadow of $\mathbf{v}$ on the line of $\mathbf{u}$ is $\|\mathbf{v}\|\cos\theta = \mathbf{u} \cdot \mathbf{v}$. For any
nonzero $\mathbf{u}$, the **projection** of $\mathbf{v}$ onto $\mathbf{u}$ is the vector

$$
\operatorname{proj}_{\mathbf{u}} \mathbf{v} = \frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{u} \cdot \mathbf{u}}\,\mathbf{u}.
$$

*Why:* it is a multiple $c\mathbf{u}$ of $\mathbf{u}$, and we want the leftover $\mathbf{v} - c\mathbf{u}$ to be
orthogonal to $\mathbf{u}$: $\mathbf{u} \cdot (\mathbf{v} - c\mathbf{u}) = 0$ gives
$c = (\mathbf{u} \cdot \mathbf{v})/(\mathbf{u} \cdot \mathbf{u})$. With $\mathbf{u} = (3, 4)$ and $\mathbf{v} = (2, 1)$:
$c = 10/25 = 0.4$, so the projection is $(1.2, 1.6)$ and the leftover $(0.8, -0.6)$. **Check:**
$(3, 4) \cdot (0.8, -0.6) = 2.4 - 2.4 = 0$. Projection becomes a major theme in Chapter 12, where it solves the problem
of fitting a line to data.

**Angles in higher dimensions.** Theorem 1.1 used a triangle, which we can only draw in 2 or 3 dimensions. In
$\mathbb{R}^n$ we turn it around and *define* the angle by the formula $\cos\theta = \mathbf{u} \cdot \mathbf{v}/(\|\mathbf{u}\|\,\|\mathbf{v}\|)$.
But there is a catch: a cosine must lie between $-1$ and $1$. Is the right side always in that range, in every
dimension? That is the content of the most useful inequality in mathematics.

**Theorem 1.2 (Cauchy-Schwarz inequality).** For all vectors $\mathbf{u}, \mathbf{v}$ in $\mathbb{R}^n$,

$$
|\mathbf{u} \cdot \mathbf{v}| \le \|\mathbf{u}\|\,\|\mathbf{v}\|,
$$

with equality exactly when one of the vectors is a multiple of the other.

*Proof.* If $\mathbf{v} = \mathbf{0}$ both sides are 0 and $\mathbf{v} = 0\mathbf{u}$, so assume $\mathbf{v} \ne \mathbf{0}$.
For every real number $t$, the vector $\mathbf{u} - t\mathbf{v}$ has a length, and a squared length is never negative:

$$
0 \le \|\mathbf{u} - t\mathbf{v}\|^2 = \|\mathbf{u}\|^2 - 2t\,(\mathbf{u} \cdot \mathbf{v}) + t^2 \|\mathbf{v}\|^2 .
$$

The right side is a quadratic in $t$ with positive leading coefficient. Choose the $t$ that makes it smallest: the
vertex, $t = (\mathbf{u} \cdot \mathbf{v})/\|\mathbf{v}\|^2$. Substituting,

$$
0 \le \|\mathbf{u}\|^2 - 2\frac{(\mathbf{u} \cdot \mathbf{v})^2}{\|\mathbf{v}\|^2} + \frac{(\mathbf{u} \cdot \mathbf{v})^2}{\|\mathbf{v}\|^2}
= \|\mathbf{u}\|^2 - \frac{(\mathbf{u} \cdot \mathbf{v})^2}{\|\mathbf{v}\|^2}.
$$

Multiply by $\|\mathbf{v}\|^2$: $(\mathbf{u} \cdot \mathbf{v})^2 \le \|\mathbf{u}\|^2\|\mathbf{v}\|^2$, and take square
roots. Equality holds exactly when $\|\mathbf{u} - t\mathbf{v}\|^2 = 0$ for this $t$, which means
$\mathbf{u} = t\mathbf{v}$. Conversely, if $\mathbf{u} = t\mathbf{v}$, both sides equal $|t|\,\|\mathbf{v}\|^2$. $\square$

Look at what the proof used: only symmetry, linearity and positivity of the dot product, never the formula with
components. That is why the same proof will work, word for word, in Chapter 11 for functions and for complex vectors.
(You may also recognise the idea: $\mathbf{u} - t\mathbf{v}$ with this best $t$ is $\mathbf{u}$ minus its projection
onto $\mathbf{v}$.)

In components, the inequality says something you might not guess: for any real numbers,

$$
(u_1 v_1 + \cdots + u_n v_n)^2 \le (u_1^2 + \cdots + u_n^2)(v_1^2 + \cdots + v_n^2).
$$

**Example 1.8.** With $(1, 1, 1)$ and $(a, b, c)$: $(a + b + c)^2 \le 3(a^2 + b^2 + c^2)$. So the mean of three
numbers is at most the root of the mean of their squares, a fact used all over statistics.

**Theorem 1.3 (triangle inequality).** $\|\mathbf{u} + \mathbf{v}\| \le \|\mathbf{u}\| + \|\mathbf{v}\|$.

*Proof.* Both sides are non-negative, so compare squares:
$\|\mathbf{u} + \mathbf{v}\|^2 = \|\mathbf{u}\|^2 + 2\,\mathbf{u} \cdot \mathbf{v} + \|\mathbf{v}\|^2 \le \|\mathbf{u}\|^2 + 2\|\mathbf{u}\|\,\|\mathbf{v}\| + \|\mathbf{v}\|^2 = (\|\mathbf{u}\| + \|\mathbf{v}\|)^2$,
using Cauchy-Schwarz in the middle. $\square$

In words: a detour is never shorter than going straight. For distances it reads
$\operatorname{dist}(P, R) \le \operatorname{dist}(P, Q) + \operatorname{dist}(Q, R)$.

**Pythagoras, in any dimension.** If $\mathbf{u} \cdot \mathbf{v} = 0$, the same expansion gives
$\|\mathbf{u} + \mathbf{v}\|^2 = \|\mathbf{u}\|^2 + \|\mathbf{v}\|^2$. The theorem we used to define length comes back
as a consequence of orthogonality.

**Try it in Python.** Nothing here needs a library.

```python
from math import sqrt, acos, degrees

def dot(u, v):
    return sum(a * b for a, b in zip(u, v))

def norm(u):
    return sqrt(dot(u, u))

def angle(u, v):                      # in degrees
    return degrees(acos(dot(u, v) / (norm(u) * norm(v))))

def cross(u, v):                      # 3D only, see section 1.5
    return (u[1]*v[2] - u[2]*v[1], u[2]*v[0] - u[0]*v[2], u[0]*v[1] - u[1]*v[0])

u, v = (1, 2, 2), (2, -1, 2)
print(dot(u, v), norm(u), norm(v))    # 4 3.0 3.0
print(round(angle(u, v), 2))          # 63.61
w = cross(u, v)
print(w, dot(w, u), dot(w, v))        # (6, 2, -5) 0 0
print(round(norm(w), 4))              # 8.0623, which is sqrt(65)
```

## 1.4 Lines and planes in space

In the plane a line can be written $y = mx + b$. In space that fails: one equation in $x, y, z$ describes a plane, not a
line. Vectors give one language for both.

**Lines.** A line is fixed by one point on it and one direction. If $P$ has position vector $\mathbf{p}$ and
$\mathbf{d} \ne \mathbf{0}$ is a direction vector, the line is the set of points

$$
\mathbf{x} = \mathbf{p} + t\,\mathbf{d}, \qquad t \in \mathbb{R}.
$$

This is the **parametric form**: the number $t$, the **parameter**, says how far along you are. Think of $t$ as time:
at $t = 0$ you are at $P$, and each unit of time you move by $\mathbf{d}$.

**Example 1.9.** The line through $A = (1, 2, 3)$ and $B = (4, 0, 5)$ has direction
$\mathbf{d} = \overrightarrow{AB} = (3, -2, 2)$, so

$$
(x, y, z) = (1, 2, 3) + t\,(3, -2, 2) = (1 + 3t,\; 2 - 2t,\; 3 + 2t).
$$

At $t = 0$ you are at $A$, at $t = 1$ at $B$, at $t = \tfrac12$ at the midpoint $(2.5, 1, 4)$. Is $(7, -2, 7)$ on the
line? From $x$: $1 + 3t = 7$ gives $t = 2$; then $y = 2 - 4 = -2$ and $z = 3 + 4 = 7$. Yes. Is $(7, -2, 6)$? The same
$t = 2$ is forced by $x$, but then $z = 7 \ne 6$, so no.

The same line has many descriptions: any point on it can serve as $\mathbf{p}$ and any nonzero multiple of
$\mathbf{d}$ as the direction. A line through the origin is the set of all multiples $t\mathbf{d}$, which will matter
a great deal in Chapter 4: it is closed under adding and scaling.

**Planes.** A plane through a point $P$ can be described in two ways.

*By two directions.* If $\mathbf{d}_1, \mathbf{d}_2$ are two directions in the plane, not parallel, the plane is

$$
\mathbf{x} = \mathbf{p} + s\,\mathbf{d}_1 + t\,\mathbf{d}_2, \qquad s, t \in \mathbb{R},
$$

the point $\mathbf{p}$ plus all linear combinations of $\mathbf{d}_1, \mathbf{d}_2$.

*By a normal vector.* A **normal** to a plane is a nonzero vector $\mathbf{n}$ perpendicular to every direction in it.
A point $X$ lies on the plane exactly when $\overrightarrow{PX}$ is perpendicular to $\mathbf{n}$:

$$
\mathbf{n} \cdot (\mathbf{x} - \mathbf{p}) = 0 .
$$

Writing $\mathbf{n} = (a, b, c)$ and multiplying out gives the familiar **equation of a plane**
$ax + by + cz = d$ with $d = \mathbf{n} \cdot \mathbf{p}$. The coefficients of $x, y, z$ are the components of a normal
vector. This is worth remembering: in $3x - y + 2z = 7$ the vector $(3, -1, 2)$ sticks straight out of the plane.

**Example 1.10.** The plane through $(1, 0, 0)$, $(0, 2, 0)$ and $(0, 0, 3)$. Directions in it:
$\mathbf{d}_1 = (-1, 2, 0)$ and $\mathbf{d}_2 = (-1, 0, 3)$ (from the first point to the other two). We need
$\mathbf{n} = (a, b, c)$ with $-a + 2b = 0$ and $-a + 3c = 0$. Choosing $a = 6$ gives $b = 3$, $c = 2$, so
$\mathbf{n} = (6, 3, 2)$ and the plane is $6x + 3y + 2z = 6$. **Check:** each of the three points gives 6. (Dividing by
6 gives the pretty form $x/1 + y/2 + z/3 = 1$, which shows where the plane cuts the axes.) In Section 1.5 the cross
product will produce $\mathbf{n}$ in one step.

**Where a line meets a plane.** Substitute the parametric line into the plane's equation; you get one equation for $t$.

**Example 1.11.** Where does the line of Example 1.9 meet the plane $6x + 3y + 2z = 6$? Substituting,
$6(1 + 3t) + 3(2 - 2t) + 2(3 + 2t) = 6$, so $18 + 16t = 6$ and $t = -\tfrac34$. The point is
$(1 - \tfrac94,\; 2 + \tfrac32,\; 3 - \tfrac32) = (-\tfrac54, \tfrac72, \tfrac32)$. **Check:**
$6(-1.25) + 3(3.5) + 2(1.5) = -7.5 + 10.5 + 3 = 6$.

If the equation for $t$ had come out as "0 equals something nonzero", the line would be parallel to the plane and miss it;
if it had come out as $0 = 0$, the line would lie inside the plane. These three outcomes, one point, nothing,
everything, will be the three outcomes of every linear system in Chapter 2.

**Distance from a point to a plane.** The shortest path from a point $Q$ to the plane runs along the normal. If the
plane is $\mathbf{n} \cdot \mathbf{x} = d$, the distance is

$$
\frac{|\mathbf{n} \cdot \mathbf{q} - d|}{\|\mathbf{n}\|}.
$$

*Why:* take any point $P$ on the plane. The distance is the length of the projection of $\overrightarrow{PQ}$ onto
$\mathbf{n}$, which is $|\mathbf{n} \cdot (\mathbf{q} - \mathbf{p})|/\|\mathbf{n}\|$, and
$\mathbf{n} \cdot \mathbf{p} = d$. For the plane $6x + 3y + 2z = 6$ and the origin: $\|\mathbf{n}\| = \sqrt{36 + 9 + 4} = 7$,
so the distance is $6/7$. For the point $(2, 1, 1)$: $|12 + 3 + 2 - 6|/7 = 11/7$.

**Two planes.** Two planes that are not parallel meet in a line. The angle between them is the angle between their
normals. Planes with proportional normals are parallel (or the same plane). For instance $x + y = 1$ and $y + z = 1$
have normals $(1, 1, 0)$ and $(0, 1, 1)$, so by Example 1.7 they meet at $60^\circ$. Their line of intersection is
found by solving the two equations together; with $y = t$ as parameter, $x = 1 - t$ and $z = 1 - t$, so the line is
$(1, 0, 1) + t(-1, 1, -1)$. That is our first system with infinitely many solutions.

**In more dimensions.** In $\mathbb{R}^n$ the same formulas work. One equation $a_1 x_1 + \cdots + a_n x_n = d$
describes a **hyperplane**, an $(n-1)$-dimensional flat set with normal $(a_1, \ldots, a_n)$. A system of several such
equations describes the points where all these hyperplanes meet. That is the "row picture" of Chapter 2.

## 1.5 The cross product

*Level: intermediate.*

Given two directions in space, is there a quick way to find a direction perpendicular to both? This is what we needed
for the normal of a plane in Example 1.10. In three dimensions, and only there, there is a product of two vectors that
gives a vector, and it does exactly this job.

**Definition.** For $\mathbf{u} = (u_1, u_2, u_3)$ and $\mathbf{v} = (v_1, v_2, v_3)$ the **cross product** is

$$
\mathbf{u} \times \mathbf{v} = (u_2 v_3 - u_3 v_2,\;\; u_3 v_1 - u_1 v_3,\;\; u_1 v_2 - u_2 v_1).
$$

A way to remember it: the first component uses the indices 2 and 3, the second 3 and 1, the third 1 and 2, always in
the cyclic order $1 \to 2 \to 3 \to 1$, and each is "this times that minus that times this". Chapter 8 will write it as
a determinant.

**Example 1.12.** $\mathbf{e}_1 \times \mathbf{e}_2 = (0 \cdot 0 - 0 \cdot 1,\; 0 \cdot 0 - 1 \cdot 0,\; 1 \cdot 1 - 0 \cdot 0) = (0, 0, 1) = \mathbf{e}_3$.
In the same way $\mathbf{e}_2 \times \mathbf{e}_3 = \mathbf{e}_1$ and $\mathbf{e}_3 \times \mathbf{e}_1 = \mathbf{e}_2$.

**Example 1.13.** For Example 1.10, $(-1, 2, 0) \times (-1, 0, 3) = (2 \cdot 3 - 0 \cdot 0,\; 0 \cdot (-1) - (-1) \cdot 3,\; (-1) \cdot 0 - 2 \cdot (-1)) = (6, 3, 2)$,
the normal we found by solving equations.

**What it means.** Three facts describe $\mathbf{u} \times \mathbf{v}$ completely.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="A parallelogram drawn in perspective on a floor, spanned by u in orange and v in green. A blue arrow, u cross v, rises straight up from the common corner, perpendicular to both. The shaded area of the parallelogram equals the length of u cross v.">
  <polygon points="120,200 300,200 360,150 180,150" fill="#eea66f" fill-opacity="0.2"/>
  <line x1="300" y1="200" x2="360" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="180" y1="150" x2="360" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="120" y1="200" x2="290" y2="200" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="300,200 290,204.5 290,195.5" fill="#eea66f"/>
  <line x1="120" y1="200" x2="172.3" y2="156.4" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="180,150 175.2,159.9 169.4,152.9" fill="#7ccf9a"/>
  <line x1="120" y1="200" x2="120" y2="70" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="120,60 124.5,70 115.5,70" fill="#9cc9ea"/>
  <polyline points="120,186 131,186 131,200" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="210" y="222" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="138" y="160" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="165" y="70" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u × v</text>
  <text x="260" y="182" text-anchor="middle" font-size="13" fill="currentColor">area = ‖u × v‖</text>
</svg>
</div>

*1. It is perpendicular to both.* Compute
$\mathbf{u} \cdot (\mathbf{u} \times \mathbf{v}) = u_1(u_2 v_3 - u_3 v_2) + u_2(u_3 v_1 - u_1 v_3) + u_3(u_1 v_2 - u_2 v_1)$.
Multiply out: the six terms cancel in pairs ($u_1 u_2 v_3$ against $-u_2 u_1 v_3$, and so on), leaving 0. The same
happens for $\mathbf{v}$.

*2. Its length is the area of the parallelogram spanned by $\mathbf{u}$ and $\mathbf{v}$.* The key is
**Lagrange's identity**:

$$
\|\mathbf{u} \times \mathbf{v}\|^2 = \|\mathbf{u}\|^2 \|\mathbf{v}\|^2 - (\mathbf{u} \cdot \mathbf{v})^2 .
$$

It is proved by expanding both sides; each has the same 9 kinds of terms (a computer algebra check is a good idea, and
Exercise 11 asks you to do part of it by hand). Since $\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\|\,\|\mathbf{v}\|\cos\theta$,
the right side is $\|\mathbf{u}\|^2\|\mathbf{v}\|^2(1 - \cos^2\theta) = \|\mathbf{u}\|^2\|\mathbf{v}\|^2\sin^2\theta$,
so

$$
\|\mathbf{u} \times \mathbf{v}\| = \|\mathbf{u}\|\,\|\mathbf{v}\|\sin\theta,
$$

which is base times height for the parallelogram: base $\|\mathbf{u}\|$, height $\|\mathbf{v}\|\sin\theta$. Notice
also that Lagrange's identity proves Cauchy-Schwarz again in 3D, since its left side is at least 0. In particular,
$\mathbf{u} \times \mathbf{v} = \mathbf{0}$ exactly when $\mathbf{u}$ and $\mathbf{v}$ are parallel (or one is zero).

*3. Its direction follows the right-hand rule.* Point the fingers of your right hand along $\mathbf{u}$ and curl them
towards $\mathbf{v}$; your thumb points along $\mathbf{u} \times \mathbf{v}$. This is a convention, chosen so that
$\mathbf{e}_1 \times \mathbf{e}_2 = \mathbf{e}_3$ with the usual right-handed axes ($x$ east, $y$ north, $z$ up).

**Example 1.14.** With $\mathbf{u} = (1, 2, 2)$ and $\mathbf{v} = (2, -1, 2)$ from Example 1.6:
$\mathbf{u} \times \mathbf{v} = (2 \cdot 2 - 2 \cdot (-1),\; 2 \cdot 2 - 1 \cdot 2,\; 1 \cdot (-1) - 2 \cdot 2) = (6, 2, -5)$.
**Check** perpendicularity: $6 + 4 - 10 = 0$ and $12 - 2 - 10 = 0$. **Check** the area by Lagrange:
$\|(6, 2, -5)\|^2 = 36 + 4 + 25 = 65$, and $9 \cdot 9 - 4^2 = 65$. So the parallelogram has area $\sqrt{65} \approx 8.06$,
and the triangle with sides $\mathbf{u}$, $\mathbf{v}$ has half of that.

**Strange algebra.** The cross product does not behave like ordinary multiplication.

- It is **anticommutative**: $\mathbf{v} \times \mathbf{u} = -(\mathbf{u} \times \mathbf{v})$. Swap $\mathbf{u}$ and
  $\mathbf{v}$ in the formula and every component changes sign. In particular $\mathbf{v} \times \mathbf{v} = \mathbf{0}$.
- It is **not associative**: $(\mathbf{e}_1 \times \mathbf{e}_1) \times \mathbf{e}_2 = \mathbf{0} \times \mathbf{e}_2 = \mathbf{0}$,
  but $\mathbf{e}_1 \times (\mathbf{e}_1 \times \mathbf{e}_2) = \mathbf{e}_1 \times \mathbf{e}_3 = -\mathbf{e}_2$.
- It *is* linear in each slot: $\mathbf{u} \times (\mathbf{v} + \mathbf{w}) = \mathbf{u} \times \mathbf{v} + \mathbf{u} \times \mathbf{w}$
  and $(c\mathbf{u}) \times \mathbf{v} = c(\mathbf{u} \times \mathbf{v})$.

**Volume: the triple product.** Three vectors $\mathbf{u}, \mathbf{v}, \mathbf{w}$ in space span a slanted box, a
**parallelepiped**. Its base is the parallelogram of $\mathbf{u}$ and $\mathbf{v}$, with area $\|\mathbf{u} \times \mathbf{v}\|$,
and its height is the part of $\mathbf{w}$ along the normal $\mathbf{u} \times \mathbf{v}$. So

$$
\text{volume} = |(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{w}| .
$$

The number $(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{w}$, with its sign, is the **scalar triple product**. It is 0
exactly when the three vectors lie in one plane, a first test for what Chapter 5 will call linear dependence. Its sign
tells whether $\mathbf{u}, \mathbf{v}, \mathbf{w}$ form a right-handed or left-handed set. Chapter 8 shows that it is
the determinant of the $3 \times 3$ matrix with rows $\mathbf{u}, \mathbf{v}, \mathbf{w}$.

**Example 1.15.** $\mathbf{u} = (1, 0, 0)$, $\mathbf{v} = (1, 2, 0)$, $\mathbf{w} = (0, 1, 3)$:
$\mathbf{u} \times \mathbf{v} = (0, 0, 2)$, and $(0, 0, 2) \cdot (0, 1, 3) = 6$. The box has volume 6. **Check:** the
base lies in the floor with area 2 (base 1, height 2) and $\mathbf{w}$ rises 3 above the floor, so $2 \cdot 3 = 6$.

**Why only three dimensions?** In $\mathbb{R}^n$ the directions perpendicular to two given independent vectors form an
$(n-2)$-dimensional set. Only when $n = 3$ is that a single line, so only then is there a natural choice of one vector.
(There is a curious exception in seven dimensions, built from the octonions, but it lacks some of the good properties
above.) The right generalisation to all dimensions is the exterior product of Chapter 17, which works with areas and
volumes directly instead of with perpendicular vectors.

**Rotation and the cross product.** A body spinning about an axis through the origin with angular velocity vector
$\boldsymbol{\omega}$ (pointing along the axis, by the right-hand rule, with length equal to the spin rate in radians
per second) moves each of its points with velocity $\boldsymbol{\omega} \times \mathbf{r}$, where $\mathbf{r}$ is the
point's position. The length is $\|\boldsymbol{\omega}\|\,\|\mathbf{r}\|\sin\theta$, the spin rate times the distance
from the axis, as it should be. Mars turns once in about 24.6 hours relative to the stars and has an equatorial radius
of about 3396 km, so a point on its equator moves at about $2\pi \cdot 3396 / 24.6 \approx 870$ km per hour, roughly
240 metres per second. Points nearer the poles move more slowly, by the factor $\sin\theta$. Rotations in general are
the subject of Chapter 13.

## A short history thread

Arrows for forces and velocities were used informally long before anyone wrote down rules for them; the
parallelogram rule for combining forces appears in the work of Simon Stevin and others around 1600 and was standard
in mechanics by Newton's *Principia* (1687). The algebra of vectors came much later, from two directions at once. In
Dublin, William Rowan Hamilton discovered the **quaternions** in October 1843, numbers of the form
$a + b\mathbf{i} + c\mathbf{j} + d\mathbf{k}$; their products contain, mixed together, what we now call the dot and
the cross product. They return in Chapter 13, where they are still used to steer spacecraft. In Germany, in 1844,
Hermann Grassmann published his *Lineale Ausdehnungslehre*, a theory of quantities in any number of dimensions with
linear combinations and independence; it was so far ahead of its time that few people read it. In the 1880s the
American physicist Josiah Willard Gibbs and the English engineer Oliver Heaviside separated the dot and cross products
from quaternions and created the vector notation physicists use today; Gibbs printed his *Elements of Vector Analysis*
privately for his students, and his student Edwin Bidwell Wilson turned his lectures into the textbook *Vector
Analysis* (1901). The inequality of Section 1.3 is named for Augustin-Louis Cauchy, who proved the version for sums in
his *Cours d'analyse* (1821), and Hermann Amandus Schwarz, who proved a version for integrals in 1888; Viktor
Bunyakovsky had published the integral version in 1859, and in Russia it often carries his name too.

## Check yourself

??? question "1. Let $\mathbf{u} = (2, -1)$ and $\mathbf{v} = (1, 3)$. Compute $3\mathbf{u} - 2\mathbf{v}$ and draw it."

    $3\mathbf{u} = (6, -3)$ and $2\mathbf{v} = (2, 6)$, so $3\mathbf{u} - 2\mathbf{v} = (6 - 2, -3 - 6) = (4, -9)$.
    In a drawing: three copies of $\mathbf{u}$ tip to tail reach $(6, -3)$; two copies of $-\mathbf{v}$ then go 2 left
    and 6 down, ending at $(4, -9)$.

??? question "2. Find the length of $(2, 3, 6)$ and the unit vector in its direction."

    $\|(2, 3, 6)\| = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$. The unit vector is $(\tfrac27, \tfrac37, \tfrac67)$.
    Check: $\tfrac{4 + 9 + 36}{49} = 1$.

??? question "3. Find the angle between $(3, 0, 4)$ and $(4, 0, 3)$."

    The dot product is $12 + 0 + 12 = 24$ and both lengths are 5, so $\cos\theta = 24/25 = 0.96$ and
    $\theta \approx 16.3^\circ$. Both vectors lie in the $xz$-plane, at angles whose tangents are $4/3$ and $3/4$ from the
    $x$-axis, about $53.13^\circ$ and $36.87^\circ$; the difference is $16.26^\circ$, which agrees.

??? question "4. For which number $k$ are $(1, k, 2)$ and $(k, 3, -4)$ perpendicular?"

    The dot product must be 0: $k + 3k - 8 = 0$, so $4k = 8$ and $k = 2$. Check: $(1, 2, 2) \cdot (2, 3, -4) = 2 + 6 - 8 = 0$.

??? question "5. Write the line through $(2, 0, 1)$ and $(5, 4, 1)$ in parametric form. Is $(8, 8, 1)$ on it? Is $(8, 8, 2)$?"

    The direction is $(5 - 2, 4 - 0, 1 - 1) = (3, 4, 0)$, so the line is $(2 + 3t,\; 4t,\; 1)$. For $(8, 8, 1)$ the
    $x$-component forces $t = 2$, which gives $y = 8$ and $z = 1$: yes, it is on the line. Every point of the line has
    $z = 1$, so $(8, 8, 2)$ is not on it.

??? question "6. Find the equation of the plane through $(1, 1, 1)$ with normal $(2, -1, 3)$, and its distance from the origin."

    $\mathbf{n} \cdot (\mathbf{x} - \mathbf{p}) = 0$ gives $2(x - 1) - (y - 1) + 3(z - 1) = 0$, that is,
    $2x - y + 3z = 4$. Check: $2 - 1 + 3 = 4$ at the given point. The distance from the origin is
    $|0 - 4|/\|(2, -1, 3)\| = 4/\sqrt{14} \approx 1.07$.

??? question "7. Compute $(1, 2, 0) \times (0, 1, 3)$ and the area of the triangle with corners $(0,0,0)$, $(1,2,0)$, $(0,1,3)$."

    $(2 \cdot 3 - 0 \cdot 1,\; 0 \cdot 0 - 1 \cdot 3,\; 1 \cdot 1 - 2 \cdot 0) = (6, -3, 1)$. Check: $(6, -3, 1) \cdot (1, 2, 0) = 6 - 6 = 0$
    and $(6, -3, 1) \cdot (0, 1, 3) = -3 + 3 = 0$. The parallelogram has area $\sqrt{36 + 9 + 1} = \sqrt{46}$, so the
    triangle has area $\sqrt{46}/2 \approx 3.39$.

??? question "8. Prove the parallelogram law: $\|\mathbf{u} + \mathbf{v}\|^2 + \|\mathbf{u} - \mathbf{v}\|^2 = 2\|\mathbf{u}\|^2 + 2\|\mathbf{v}\|^2$. What does it say about a parallelogram?"

    Expand with the dot product rules: $\|\mathbf{u} \pm \mathbf{v}\|^2 = \|\mathbf{u}\|^2 \pm 2\,\mathbf{u} \cdot \mathbf{v} + \|\mathbf{v}\|^2$.
    Adding the two, the middle terms cancel and you get $2\|\mathbf{u}\|^2 + 2\|\mathbf{v}\|^2$. In words: in any
    parallelogram the squares of the two diagonals add up to the squares of the four sides.

??? question "9. Find the volume of the parallelepiped spanned by $(1, 1, 0)$, $(0, 1, 1)$, $(1, 0, 1)$. Are the three vectors in one plane?"

    $(1, 1, 0) \times (0, 1, 1) = (1 \cdot 1 - 0 \cdot 1,\; 0 \cdot 0 - 1 \cdot 1,\; 1 \cdot 1 - 1 \cdot 0) = (1, -1, 1)$.
    Then $(1, -1, 1) \cdot (1, 0, 1) = 2$. The volume is 2, which is not 0, so the vectors are not in one plane.

??? question "10. When is the triangle inequality an equality? Use the proof of Theorem 1.3."

    The only inequality used was $\mathbf{u} \cdot \mathbf{v} \le \|\mathbf{u}\|\,\|\mathbf{v}\|$. Equality there needs
    equality in Cauchy-Schwarz, so one vector is a multiple of the other, and also $\mathbf{u} \cdot \mathbf{v} \ge 0$,
    so the multiple is not negative. So $\|\mathbf{u} + \mathbf{v}\| = \|\mathbf{u}\| + \|\mathbf{v}\|$ exactly when one
    vector is a non-negative multiple of the other: they point the same way (or one is zero). A detour costs nothing
    only if it is not a detour.

??? question "11. Check Lagrange's identity by hand for flat vectors: show that $\|\mathbf{u} \times \mathbf{v}\|^2 = \|\mathbf{u}\|^2\|\mathbf{v}\|^2 - (\mathbf{u} \cdot \mathbf{v})^2$ when $\mathbf{u} = (u_1, u_2, 0)$ and $\mathbf{v} = (v_1, v_2, 0)$."

    Here $\mathbf{u} \times \mathbf{v} = (0, 0, u_1 v_2 - u_2 v_1)$, so the left side is $(u_1 v_2 - u_2 v_1)^2 = u_1^2 v_2^2 - 2u_1 u_2 v_1 v_2 + u_2^2 v_1^2$.
    The right side is $(u_1^2 + u_2^2)(v_1^2 + v_2^2) - (u_1 v_1 + u_2 v_2)^2$
    $= u_1^2 v_1^2 + u_1^2 v_2^2 + u_2^2 v_1^2 + u_2^2 v_2^2 - u_1^2 v_1^2 - 2u_1 u_2 v_1 v_2 - u_2^2 v_2^2$, which
    leaves exactly the same three terms. In this flat case the identity says the area of the parallelogram is
    $|u_1 v_2 - u_2 v_1|$, the $2 \times 2$ determinant of Chapter 8.

??? question "12. The lines $(t, 0, 0)$ and $(0, 1, s)$ do not meet and are not parallel (they are skew). Find the shortest distance between them."

    The directions are $\mathbf{d}_1 = (1, 0, 0)$ and $\mathbf{d}_2 = (0, 0, 1)$. The shortest segment between the lines
    is perpendicular to both, so it runs along $\mathbf{n} = \mathbf{d}_1 \times \mathbf{d}_2 = (0 \cdot 1 - 0 \cdot 0,\; 0 \cdot 0 - 1 \cdot 1,\; 0) = (0, -1, 0)$.
    The distance is the length of the projection onto $\mathbf{n}$ of any vector from one line to the other, for example
    from $(0, 0, 0)$ to $(0, 1, 0)$: $|(0, 1, 0) \cdot (0, -1, 0)|/\|\mathbf{n}\| = 1$. Check by eye: the first line is
    the $x$-axis, the second is the vertical line through $(0, 1, 0)$, and they come closest at $(0,0,0)$ and $(0,1,0)$,
    1 apart.

## What you learned

- A vector is a size with a direction; as an arrow it can be drawn, as a list of numbers it can be computed with in any
  dimension.
- Vectors add component by component (tip to tail, the parallelogram rule) and scale component by component; linear
  combinations $c_1\mathbf{v}_1 + \cdots + c_k\mathbf{v}_k$ are the basic construction of the subject.
- Length is $\sqrt{\mathbf{v} \cdot \mathbf{v}}$, and the dot product measures angles:
  $\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\|\,\|\mathbf{v}\|\cos\theta$; zero dot product means perpendicular.
- The Cauchy-Schwarz inequality $|\mathbf{u} \cdot \mathbf{v}| \le \|\mathbf{u}\|\,\|\mathbf{v}\|$ follows from
  $\|\mathbf{u} - t\mathbf{v}\|^2 \ge 0$, and gives the triangle inequality.
- Lines are $\mathbf{p} + t\mathbf{d}$; planes are $\mathbf{p} + s\mathbf{d}_1 + t\mathbf{d}_2$ or
  $\mathbf{n} \cdot \mathbf{x} = d$, with the coefficients forming a normal vector.
- The cross product, in 3D only, is perpendicular to both factors, has length equal to the area of their
  parallelogram, and with a dot product gives volumes.

**Next:** [Chapter 2](02-Systems-of-Linear-Equations.md) asks when a vector is a linear combination of others, which
is the same as solving a system of linear equations, and gives the one algorithm that solves them all.

## Further reading

- Gilbert Strang, *Introduction to Linear Algebra* (6th edition, 2023), Chapter 1.
- Sheldon Axler, *Linear Algebra Done Right* (4th edition, 2024), free online from the author; for later chapters
  of this book more than this one.
- Michael J. Crowe, *A History of Vector Analysis* (1967), the story of Hamilton, Grassmann, Gibbs and Heaviside.
- J. Michael Steele, *The Cauchy-Schwarz Master Class* (2004), a whole book of proofs and uses of one inequality.
- Edwin Bidwell Wilson, *Vector Analysis: A Text-Book for the Use of Students of Mathematics and Physics, Founded upon
  the Lectures of J. Willard Gibbs* (1901).
- On this site: the Geometry book's [Chapter 9, Vectors](../geometry/09-Vectors.md) and
  [Chapter 11, Solid geometry](../geometry/11-Solid-Geometry.md); the Topics lessons
  [Vectors](../../topics/geometry/level-8/04-vectors.md),
  [The dot product](../../topics/geometry/level-8/05-dot-product.md) and
  [Lines and planes in space](../../topics/algebra/level-8/08-lines-planes-space.md); the U of T guide
  [MAT240H1 Unit 1, Fields and vector spaces](../../uoft/MAT240H1/unit01.md) for where this is going.
