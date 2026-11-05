# 9. Vectors

*A rover drives 3 km east, then 4 km north, then 2 km up a slope. Where is it now, how far has it really moved, and at
what angle does its path climb? Questions like these mix lengths and directions, and the tools of the earlier chapters
handle them clumsily: coordinates give positions, trigonometry gives angles, but nothing yet lets you add a "movement"
to another movement. A vector is exactly that: a movement, with a size and a direction, that you can add, stretch and
compare. In this chapter you will build vectors from arrows, prove the formula that turns the dot product into an
angle, use projections to find distances, meet the cross product and the volumes it measures, write lines and planes in
space, and then prove classical theorems of geometry in a few lines each.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a vector is (a displacement, not a place), and how to add, subtract and scale vectors
    - the dot product, and a proof that $\mathbf{u}\cdot\mathbf{v} = |\mathbf{u}|\,|\mathbf{v}|\cos\theta$
    - how to project one vector onto another, and use it for distances from points to lines and planes
    - the cross product in space, and why its length is an area and the triple product is a volume
    - equations of lines and planes in space, their meetings and their angles
    - how to prove geometry with vectors: midlines, parallelograms, medians and the centroid, the orthocentre

    **You need:** [Chapter 7](07-Trigonometry.md) (sine, cosine, the law of cosines) and
    [Chapter 8](08-Coordinate-Geometry.md) (coordinates, distance, lines). For a gentler version first, see the
    Topics lessons [Vectors: adding, scaling, length](../../topics/geometry/level-8/04-vectors.md) and
    [The dot product](../../topics/geometry/level-8/05-dot-product.md).

    **Levels:** 9.1 and 9.2 are beginner to intermediate; 9.3 and 9.4 are intermediate; 9.5 and 9.6 are intermediate to
    advanced (three dimensions); 9.7 is advanced (proofs).

## 9.1 Arrows and displacement

Start with a question that sounds too easy. You walk 3 steps east and 2 steps north. Your friend, standing somewhere
else, does the same. Did you do "the same thing"? You ended in different places, because you started in different
places. But the *movement* was the same: 3 east, 2 north. Geometry needs a name for the movement itself, separate from
where it happens. That name is **vector**.

A **vector** is a displacement: a size together with a direction. We draw it as an arrow. The arrow has a tail (where
the movement starts) and a head (where it ends), but two arrows with the same length and the same direction are the
**same vector**, wherever they are drawn. In the picture all three arrows are one vector $\mathbf{v}$: each goes 3 to
the right and 2 up.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="A grid with three arrows that all go 3 right and 2 up. They start at different places but are the same vector v = (3, 2).">
  <line x1="30" y1="250" x2="30" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="75" y1="250" x2="75" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="120" y1="250" x2="120" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="165" y1="250" x2="165" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="210" y1="250" x2="210" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="255" y1="250" x2="255" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="300" y1="250" x2="300" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="345" y1="250" x2="345" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="390" y1="250" x2="390" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="30" y1="250" x2="390" y2="250" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="30" y1="205" x2="390" y2="205" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="30" y1="160" x2="390" y2="160" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="30" y1="115" x2="390" y2="115" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="30" y1="70" x2="390" y2="70" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="30" y1="25" x2="390" y2="25" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
  <line x1="52.5" y1="227.5" x2="181.5" y2="141.5" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="187.5,137.5 182.3,145.9 177.8,139.1" fill="#eea66f"/>
  <circle cx="52.5" cy="227.5" r="3" fill="currentColor"/>
  <line x1="232.5" y1="227.5" x2="361.5" y2="141.5" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="367.5,137.5 362.3,145.9 357.8,139.1" fill="#9cc9ea"/>
  <circle cx="232.5" cy="227.5" r="3" fill="currentColor"/>
  <line x1="120" y1="133" x2="249" y2="47" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="255,43 249.8,51.4 245.3,44.6" fill="#7ccf9a"/>
  <circle cx="120" cy="133" r="3" fill="currentColor"/>
  <text x="114" y="176.5" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="294" y="176.5" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="181.5" y="82" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <line x1="52.5" y1="227.5" x2="187.5" y2="227.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="187.5" y1="227.5" x2="187.5" y2="137.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="120" y="243.5" text-anchor="middle" font-size="13" fill="currentColor">3</text>
  <text x="197.5" y="182.5" text-anchor="middle" font-size="13" fill="currentColor">2</text>
</svg>
</div>

So a vector is not a point. A point is a place; a vector is a way of getting from one place to another. On a map, "the
library" is a point; "500 m north-east" is a vector. Mixing the two up is the most common mistake in this chapter, so
we will keep them apart in notation:

- points are capital letters: $A$, $B$, $P$;
- vectors are bold lower-case letters, $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ (by hand, people write
  $\vec{v}$ or underline the letter);
- the vector that moves $A$ to $B$ is written $\overrightarrow{AB}$.

### Components

Put the plane on a coordinate grid ([Chapter 8](08-Coordinate-Geometry.md)). The vector "3 right, 2 up" is recorded by
its **components**, the two numbers $(3, 2)$. In general, a plane vector is a pair $\mathbf{v} = (v_1, v_2)$ and a space
vector is a triple $\mathbf{v} = (v_1, v_2, v_3)$. If $A = (a_1, a_2)$ and $B = (b_1, b_2)$, the movement from $A$ to
$B$ is "subtract the start from the end":

$$
\overrightarrow{AB} = (b_1 - a_1,\ b_2 - a_2).
$$

**Example.** $A = (1, 2)$ and $B = (4, 6)$. Then $\overrightarrow{AB} = (4 - 1, 6 - 2) = (3, 4)$. The reverse movement
is $\overrightarrow{BA} = (-3, -4)$: same length, opposite direction.

Some people write vectors as columns, $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$, which is what linear algebra prefers. Rows
and columns hold the same information; we use rows to save space.

### Length

The **length** (or **magnitude**, or **norm**) of a vector is the length of any of its arrows, written $|\mathbf{v}|$.
For a plane vector, the arrow is the hypotenuse of a right triangle with legs $|v_1|$ and $|v_2|$, so by Pythagoras
([Chapter 4](04-Area-and-Pythagoras.md))

$$
|\mathbf{v}| = \sqrt{v_1^2 + v_2^2}.
$$

**In space** the same idea works twice. The vector $(v_1, v_2, v_3)$ is the diagonal of a box with sides $|v_1|$,
$|v_2|$, $|v_3|$. The diagonal of the floor of the box has length $\sqrt{v_1^2 + v_2^2}$; the diagonal of the box is the
hypotenuse of a right triangle with that floor diagonal as one leg and the height $|v_3|$ as the other (the height is
perpendicular to the floor). So

$$
|\mathbf{v}| = \sqrt{\left(\sqrt{v_1^2 + v_2^2}\right)^2 + v_3^2} = \sqrt{v_1^2 + v_2^2 + v_3^2}.
$$

**Example.** The rover in the opening drives $(3, 4, 2)$ km (east, north, up). It ends
$\sqrt{9 + 16 + 4} = \sqrt{29} \approx 5.39$ km from its start in a straight line. Another clean one:
$|(2, 3, 6)| = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$.

### Special vectors

- The **zero vector** $\mathbf{0} = (0, 0)$ or $(0, 0, 0)$: the movement "stay put". It is the only vector with no
  direction.
- A **unit vector** has length 1. Any nonzero $\mathbf{v}$ gives one, $\mathbf{v}/|\mathbf{v}|$, called the
  **direction** of $\mathbf{v}$. For $(3, 4)$ it is $(3/5, 4/5)$.
- The **standard unit vectors** $\mathbf{i} = (1, 0, 0)$, $\mathbf{j} = (0, 1, 0)$, $\mathbf{k} = (0, 0, 1)$ point
  along the axes. In the plane, $\mathbf{i} = (1, 0)$ and $\mathbf{j} = (0, 1)$.

### Position vectors

Choose an origin $O$. Then each point $P$ has a **position vector** $\mathbf{p} = \overrightarrow{OP}$, the movement
from $O$ to $P$, whose components are just the coordinates of $P$. This is the bridge between points and vectors, and
it gives the most useful formula of the chapter:

$$
\overrightarrow{AB} = \mathbf{b} - \mathbf{a},
$$

"end minus start". We will use it constantly in 9.7.

### A little history

Arrows for forces and velocities are old: Newton's *Principia* (1687) already combines two motions by the parallelogram
rule. Vectors as objects you can calculate with came in the nineteenth century from two directions. In Ireland, William
Rowan Hamilton invented the quaternions in 1843, four-part numbers whose "vector part" carried directions in space. In
Germany, Hermann Grassmann published his *Ausdehnungslehre* ("theory of extension") in 1844, a general algebra of
directed lengths, areas and volumes in any number of dimensions; it was so far ahead of its time that almost nobody read
it. In the 1880s the American physicist Josiah Willard Gibbs and the English engineer Oliver Heaviside, independently,
cut these systems down to the dot and cross products that physicists and engineers still use. Most of this chapter is
in the Gibbs-Heaviside language.

## 9.2 Adding and scaling

### Adding

Two movements, one after the other, make one movement. Walk $\mathbf{u}$, then walk $\mathbf{v}$: the total is called
$\mathbf{u} + \mathbf{v}$. To draw it, place the tail of $\mathbf{v}$ at the head of $\mathbf{u}$ ("tip to tail"); the
sum runs from the first tail to the last head.

Do it in the other order, $\mathbf{v}$ first and then $\mathbf{u}$, and you trace the other two sides of a
parallelogram, arriving at the same corner. So the sum is also the diagonal of the parallelogram built on $\mathbf{u}$
and $\mathbf{v}$: this is the **parallelogram rule**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="Vectors u and v drawn tip to tail make a parallelogram; its diagonal from the start is u + v.">
  <polygon points="50,230 230,194 302,50 122,86" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="0"/>
  <line x1="50" y1="230" x2="222.9" y2="195.4" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="230,194 222,199.7 220.4,191.8" fill="#eea66f"/>
  <line x1="230" y1="194" x2="298.8" y2="56.4" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="302,50 301.6,59.9 294.4,56.2" fill="#7ccf9a"/>
  <line x1="50" y1="230" x2="118.8" y2="92.4" stroke="#7ccf9a" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="122,86 121.6,95.9 114.4,92.2" fill="#7ccf9a"/>
  <line x1="122" y1="86" x2="294.9" y2="51.4" stroke="#eea66f" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="302,50 294,55.7 292.4,47.8" fill="#eea66f"/>
  <line x1="50" y1="230" x2="296.1" y2="54.2" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="302,50 297,58.5 292.3,51.9" fill="currentColor"/>
  <circle cx="50" cy="230" r="3.5" fill="currentColor"/>
  <text x="38" y="236" text-anchor="middle" font-size="14" fill="currentColor">O</text>
  <text x="140" y="232" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="280" y="122" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="72" y="158" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="206" y="42" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="170" y="130" text-anchor="middle" font-size="15" fill="currentColor">u + v</text>
</svg>
</div>

In components it is as simple as it could be: the east parts add and the north parts add.

$$
(u_1, u_2) + (v_1, v_2) = (u_1 + v_1,\ u_2 + v_2),
$$

and the same with three components in space.

**Example.** A boat points straight across a river and moves at 4 m/s through the water; the river carries it
downstream at 3 m/s. Across $= (4, 0)$, downstream $= (0, 3)$, so the true velocity is $(4, 3)$, with speed
$\sqrt{16 + 9} = 5$ m/s. The boat crosses at an angle $\arctan(3/4) \approx 36.9°$ from straight across.

### Scaling

Walk $\mathbf{v}$ twice and you have walked $2\mathbf{v}$: same direction, twice as long. More generally, for a real
number $t$ (called a **scalar**, because it scales), $t\mathbf{v}$ is the vector $t$ times as long as $\mathbf{v}$, in
the same direction if $t > 0$ and the opposite direction if $t < 0$. In components,

$$
t\,(v_1, v_2, v_3) = (t v_1,\ t v_2,\ t v_3).
$$

The two descriptions agree: the length of $(t v_1, t v_2, t v_3)$ is
$\sqrt{t^2 (v_1^2 + v_2^2 + v_3^2)} = |t|\,|\mathbf{v}|$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="The vector v and its multiples 2v, one half v and minus v: all parallel, with lengths scaled.">
  <line x1="25" y1="150" x2="82" y2="112" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="88,108 82.8,116.4 78.3,109.6" fill="#eea66f"/>
  <circle cx="25" cy="150" r="3" fill="currentColor"/>
  <line x1="121.6" y1="150" x2="241.6" y2="70" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="247.6,66 242.4,74.4 237.9,67.6" fill="#9cc9ea"/>
  <circle cx="121.6" cy="150" r="3" fill="currentColor"/>
  <line x1="277" y1="150" x2="302.5" y2="133" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="308.5,129 303.3,137.4 298.8,130.6" fill="#7ccf9a"/>
  <circle cx="277" cy="150" r="3" fill="currentColor"/>
  <line x1="403" y1="108" x2="346" y2="146" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="340,150 345.2,141.6 349.7,148.4" fill="#eea66f"/>
  <circle cx="403" cy="108" r="3" fill="currentColor"/>
  <text x="56.5" y="174" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">v</text>
  <text x="184.6" y="174" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">2v</text>
  <text x="293.8" y="174" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">½v</text>
  <text x="371.5" y="174" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">−v</text>
  <line x1="12.4" y1="162.6" x2="419.8" y2="162.6" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/>
</svg>
</div>

Two nonzero vectors are **parallel** when one is a scalar multiple of the other. Then $-\mathbf{v} = (-1)\mathbf{v}$ is
the reverse movement, and **subtraction** is adding the reverse: $\mathbf{u} - \mathbf{v} = \mathbf{u} + (-\mathbf{v})$.
In the parallelogram picture, $\mathbf{u} - \mathbf{v}$ is the other diagonal, the arrow from the head of $\mathbf{v}$
to the head of $\mathbf{u}$ (check: $\mathbf{v} + (\mathbf{u} - \mathbf{v}) = \mathbf{u}$).

### The rules

From the component formulas, each of these follows from the same rule for ordinary numbers, one component at a time:

1. $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ (order does not matter);
2. $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$ (grouping does not matter);
3. $\mathbf{v} + \mathbf{0} = \mathbf{v}$ and $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$;
4. $s(t\mathbf{v}) = (st)\mathbf{v}$ and $1\mathbf{v} = \mathbf{v}$;
5. $t(\mathbf{u} + \mathbf{v}) = t\mathbf{u} + t\mathbf{v}$ and $(s + t)\mathbf{v} = s\mathbf{v} + t\mathbf{v}$.

Rule 1 is the parallelogram picture. Rule 5's first half is a picture too: scaling the whole parallelogram by $t$ scales
its sides and its diagonal by $t$, which is similar triangles ([Chapter 5](05-Similarity.md)).

These eight little laws are exactly the axioms of a **vector space**, the starting point of linear algebra. Anything
that obeys them, such as polynomials or functions or sound waves, can be treated with the geometry of this chapter. (The
U of T guide [Fields and vector spaces](../../uoft/MAT240H1/unit01.md) starts there.)

### Combinations and bases

A sum of scalar multiples, $s\mathbf{u} + t\mathbf{v}$, is a **linear combination** of $\mathbf{u}$ and $\mathbf{v}$.
Every plane vector is a combination of $\mathbf{i}$ and $\mathbf{j}$, since $(x, y) = x\mathbf{i} + y\mathbf{j}$. But
$\mathbf{i}$ and $\mathbf{j}$ are not special.

**Theorem.** If $\mathbf{u}$ and $\mathbf{v}$ are plane vectors that are not parallel (and not zero), every plane
vector $\mathbf{w}$ can be written as $s\mathbf{u} + t\mathbf{v}$ in exactly one way.

*Proof.* Write $\mathbf{u} = (a, c)$, $\mathbf{v} = (b, d)$, $\mathbf{w} = (p, q)$. We need $sa + tb = p$ and
$sc + td = q$. Multiply the first equation by $d$, the second by $b$, and subtract: $s(ad - bc) = pd - qb$. Similarly
$t(ad - bc) = aq - cp$. If $ad - bc \ne 0$ these give exactly one $s$ and one $t$, and you can check they satisfy both
equations. And $ad - bc = 0$ means $ad = bc$, which (with both vectors nonzero) says exactly that $(a, c)$ and $(b, d)$
point along the same line, that is, are parallel. Since they are not, $ad - bc \ne 0$. $\square$

Such a pair is called a **basis** of the plane, and $s, t$ are the coordinates of $\mathbf{w}$ in that basis. In space a
basis needs three vectors, not all in one plane.

**Example.** Write $(7, 4)$ in terms of $\mathbf{u} = (2, 1)$ and $\mathbf{v} = (1, 3)$. We need $2s + t = 7$ and
$s + 3t = 4$. Here $ad - bc = 2 \cdot 3 - 1 \cdot 1 = 5$, so $s = (7 \cdot 3 - 4 \cdot 1)/5 = 17/5$ and
$t = (2 \cdot 4 - 1 \cdot 7)/5 = 1/5$. Check: $\tfrac{17}{5}(2, 1) + \tfrac15(1, 3) = (\tfrac{35}{5}, \tfrac{20}{5}) = (7, 4)$.

The number $ad - bc$ is the **determinant** of the pair. We will meet it again in 9.5 as an area.

### The section formula

Where is the point that divides a segment $AB$ in a given ratio? Using position vectors: the midpoint $M$ of $AB$ is
half-way along $\overrightarrow{AB}$, so

$$
\mathbf{m} = \mathbf{a} + \tfrac12(\mathbf{b} - \mathbf{a}) = \tfrac12(\mathbf{a} + \mathbf{b}).
$$

More generally, the point $P$ on $AB$ with $AP : PB = m : n$ is a fraction $\frac{m}{m+n}$ of the way along, so

$$
\mathbf{p} = \mathbf{a} + \frac{m}{m+n}(\mathbf{b} - \mathbf{a}) = \frac{n\,\mathbf{a} + m\,\mathbf{b}}{m + n}.
$$

Notice the "crossed" weights: the point is closer to the end with the bigger weight. **Example.** $A = (1, 1)$,
$B = (7, 4)$, ratio $2 : 1$: $\mathbf{p} = \frac{1 \cdot (1, 1) + 2 \cdot (7, 4)}{3} = (5, 3)$. Check:
$\overrightarrow{AP} = (4, 2)$ and $\overrightarrow{PB} = (2, 1)$, so $AP$ is exactly twice $PB$.

## 9.3 The dot product and angles

*Level: intermediate.*

Adding vectors is about movement. Geometry also needs angles and perpendiculars. Is there a way to read off the angle
between two vectors from their components, without drawing? There is, and it is a single number.

**Definition.** The **dot product** (or scalar product) of $\mathbf{u} = (u_1, u_2, u_3)$ and
$\mathbf{v} = (v_1, v_2, v_3)$ is the number

$$
\mathbf{u}\cdot\mathbf{v} = u_1 v_1 + u_2 v_2 + u_3 v_3
$$

(in the plane, drop the third term). Multiply matching components and add. It is a number, not a vector.

The rules, each checked by writing out components:

1. $\mathbf{u}\cdot\mathbf{v} = \mathbf{v}\cdot\mathbf{u}$;
2. $\mathbf{u}\cdot(\mathbf{v} + \mathbf{w}) = \mathbf{u}\cdot\mathbf{v} + \mathbf{u}\cdot\mathbf{w}$ and
   $(t\mathbf{u})\cdot\mathbf{v} = t(\mathbf{u}\cdot\mathbf{v})$;
3. $\mathbf{v}\cdot\mathbf{v} = v_1^2 + v_2^2 + v_3^2 = |\mathbf{v}|^2$, so $\mathbf{v}\cdot\mathbf{v} \ge 0$, with
   equality only for $\mathbf{v} = \mathbf{0}$.

Rule 3 is the link with length. Rule 2 means you can expand dot products like ordinary brackets. For instance

$$
|\mathbf{u} + \mathbf{v}|^2 = (\mathbf{u} + \mathbf{v})\cdot(\mathbf{u} + \mathbf{v}) = |\mathbf{u}|^2 + 2\,\mathbf{u}\cdot\mathbf{v} + |\mathbf{v}|^2,
$$

which looks exactly like $(a + b)^2 = a^2 + 2ab + b^2$.

### The angle formula

The **angle** between two nonzero vectors is the angle $\theta$ between arrows drawn from the same tail, with
$0° \le \theta \le 180°$.

**Theorem.** For nonzero vectors $\mathbf{u}$, $\mathbf{v}$ at angle $\theta$,

$$
\mathbf{u}\cdot\mathbf{v} = |\mathbf{u}|\,|\mathbf{v}|\cos\theta.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Triangle with sides u and v from the origin, the angle theta between them, and the third side u minus v.">
  <polygon points="50,200 351,172 148,32" fill="#eea66f" fill-opacity="0.15" stroke="currentColor" stroke-width="0"/>
  <line x1="50" y1="200" x2="343.8" y2="172.7" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="351,172 342.4,176.9 341.7,168.8" fill="#eea66f"/>
  <line x1="50" y1="200" x2="144.4" y2="38.2" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="148,32 147,41.8 140,37.7" fill="#9cc9ea"/>
  <line x1="148" y1="32" x2="345.1" y2="167.9" stroke="currentColor" stroke-width="2"/>
  <polygon points="351,172 341.3,170.2 345.9,163.6" fill="currentColor"/>
  <path d="M 79.9 197.2 A 30 30 0 0 0 65.1 174.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="84" y="182" text-anchor="middle" font-size="15" fill="currentColor">θ</text>
  <circle cx="50" cy="200" r="3.5" fill="currentColor"/>
  <text x="38" y="206" text-anchor="middle" font-size="14" fill="currentColor">O</text>
  <text x="204" y="208" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="85" y="116" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="269" y="98" text-anchor="middle" font-size="15" fill="currentColor">u − v</text>
</svg>
</div>

*Proof.* Draw $\mathbf{u}$ and $\mathbf{v}$ from a common point $O$. Together with the arrow $\mathbf{u} - \mathbf{v}$
from the head of $\mathbf{v}$ to the head of $\mathbf{u}$, they form a triangle with sides $|\mathbf{u}|$,
$|\mathbf{v}|$, $|\mathbf{u} - \mathbf{v}|$ and angle $\theta$ between the first two. The law of cosines
([Chapter 7](07-Trigonometry.md)) says

$$
|\mathbf{u} - \mathbf{v}|^2 = |\mathbf{u}|^2 + |\mathbf{v}|^2 - 2|\mathbf{u}|\,|\mathbf{v}|\cos\theta.
$$

Now compute the same length with the dot product rules instead:

$$
|\mathbf{u} - \mathbf{v}|^2 = (\mathbf{u} - \mathbf{v})\cdot(\mathbf{u} - \mathbf{v}) = |\mathbf{u}|^2 - 2\,\mathbf{u}\cdot\mathbf{v} + |\mathbf{v}|^2.
$$

The two right-hand sides are equal. Cancel $|\mathbf{u}|^2 + |\mathbf{v}|^2$ and divide by $-2$:
$\mathbf{u}\cdot\mathbf{v} = |\mathbf{u}|\,|\mathbf{v}|\cos\theta$. If $\mathbf{u}$ and $\mathbf{v}$ are parallel
there is no triangle, but then $\mathbf{v} = t\mathbf{u}$ and both sides equal $t|\mathbf{u}|^2$ (with $\theta = 0°$
for $t > 0$ and $180°$ for $t < 0$). $\square$

So the angle is a calculation:

$$
\cos\theta = \frac{\mathbf{u}\cdot\mathbf{v}}{|\mathbf{u}|\,|\mathbf{v}|}.
$$

The sign of the dot product tells you the kind of angle at a glance: positive means acute, zero means right, negative
means obtuse.

**Perpendicular test.** Two nonzero vectors are perpendicular (also called **orthogonal**) exactly when
$\mathbf{u}\cdot\mathbf{v} = 0$. This is the single most used fact in the chapter.

**Example 1.** The angle between $\mathbf{u} = (1, 2, 2)$ and $\mathbf{v} = (2, -1, 2)$. The dot product is
$2 - 2 + 4 = 4$. Both lengths are $\sqrt{1 + 4 + 4} = 3$. So $\cos\theta = 4/9$ and $\theta \approx 63.6°$.

**Example 2.** In a cube with corner at the origin and edges along the axes, the long diagonal is $(1, 1, 1)$ and an
edge is $(1, 0, 0)$. Then $\cos\theta = 1/\sqrt3$, so $\theta \approx 54.74°$. Two long diagonals, $(1, 1, 1)$ and
$(1, 1, -1)$ (from opposite bottom and top corners), have $\cos\theta = 1/3$, so they cross at about $70.53°$.

**Example 3 (a molecule).** In methane, the carbon sits at the centre of a regular tetrahedron and the four hydrogens at
its corners. Four alternate corners of a cube make a regular tetrahedron: take $(1, 1, 1)$, $(1, -1, -1)$,
$(-1, 1, -1)$, $(-1, -1, 1)$, with centre at the origin. The angle between two bonds is the angle between two of these:
$\cos\theta = (1 - 1 - 1)/3 = -1/3$, so $\theta = \arccos(-1/3) \approx 109.47°$, the "tetrahedral angle" chemists
quote.

**Example 4 (sunlight on a panel).** A flat solar panel catches power in proportion to $\cos\theta$, where $\theta$ is
the angle between the panel's unit normal $\mathbf{n}$ (the direction it faces) and the unit vector $\mathbf{s}$
towards the Sun; that is, in proportion to $\mathbf{n}\cdot\mathbf{s}$. A panel tilted $30°$ away from the Sun's
direction gets $\cos 30° \approx 87\%$ of the full amount. That is why panels on landers and rovers on Mars, where the
Sun is often low in the sky, are tilted or kept clean of dust as carefully as possible.

**Example 5 (work).** In physics, a constant force $\mathbf{F}$ moving an object through a displacement $\mathbf{d}$
does work $W = \mathbf{F}\cdot\mathbf{d}$. Only the part of the force along the motion counts, which is the next
section's idea.

### Cauchy-Schwarz and the triangle inequality

Since $|\cos\theta| \le 1$, the theorem gives at once

$$
|\mathbf{u}\cdot\mathbf{v}| \le |\mathbf{u}|\,|\mathbf{v}|,
$$

the **Cauchy-Schwarz inequality**. There is a second proof that never mentions angles, which matters because it works
for vectors with any number of components, where we have no picture to draw.

*Proof without angles.* If $\mathbf{v} = \mathbf{0}$ both sides are 0. Otherwise, for every real $t$,

$$
0 \le |\mathbf{u} - t\mathbf{v}|^2 = |\mathbf{u}|^2 - 2t\,(\mathbf{u}\cdot\mathbf{v}) + t^2|\mathbf{v}|^2.
$$

Take $t = (\mathbf{u}\cdot\mathbf{v})/|\mathbf{v}|^2$, the value that makes the right side smallest. It becomes
$|\mathbf{u}|^2 - (\mathbf{u}\cdot\mathbf{v})^2/|\mathbf{v}|^2 \ge 0$; multiply by $|\mathbf{v}|^2$ and take square
roots. Equality holds only if $\mathbf{u} - t\mathbf{v} = \mathbf{0}$, that is, if the vectors are parallel. $\square$

In $n$ dimensions this inequality is what lets us *define* the angle between two vectors by
$\cos\theta = \mathbf{u}\cdot\mathbf{v}/(|\mathbf{u}|\,|\mathbf{v}|)$: it guarantees the right side is between $-1$
and $1$. Geometry in a thousand dimensions, as used in statistics and machine learning, rests on it.

**Triangle inequality.** $|\mathbf{u} + \mathbf{v}| \le |\mathbf{u}| + |\mathbf{v}|$. *Proof:*
$|\mathbf{u} + \mathbf{v}|^2 = |\mathbf{u}|^2 + 2\,\mathbf{u}\cdot\mathbf{v} + |\mathbf{v}|^2 \le |\mathbf{u}|^2 + 2|\mathbf{u}|\,|\mathbf{v}| + |\mathbf{v}|^2 = (|\mathbf{u}| + |\mathbf{v}|)^2$,
using Cauchy-Schwarz in the middle. $\square$ In words: one side of a triangle is never longer than the other two
together, the theorem of [Chapter 2](02-Triangles-and-Congruence.md), now proved by algebra.

<figure class="play" data-play="dotprod"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The dot product and the angle between two vectors: zero exactly when they are at right angles.</figcaption></figure>

## 9.4 Projections

*Level: intermediate.*

A hiker climbs a slope, and you want to know how far east she has gone. A force pulls a sledge at an angle, and you want
to know how much of it pulls forwards. Both questions ask for the **part of one vector along another**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Vector v split into its projection onto u, along u, and a part perpendicular to u.">
  <line x1="28" y1="217.4" x2="388" y2="145.4" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 4"/>
  <line x1="40" y1="215" x2="332.9" y2="156.4" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="340,155 332,160.7 330.4,152.8" fill="#eea66f"/>
  <line x1="40" y1="215" x2="156" y2="41" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="160,35 158.4,44.7 151.6,40.2" fill="#9cc9ea"/>
  <line x1="40" y1="215" x2="182.9" y2="186.4" stroke="#7ccf9a" stroke-width="4"/>
  <polygon points="190,185 182,190.7 180.4,182.8" fill="#7ccf9a"/>
  <line x1="160" y1="35" x2="190" y2="185" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="188,175.2 197.8,173.2 199.8,183" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="40" cy="215" r="3.5" fill="currentColor"/>
  <text x="28" y="221" text-anchor="middle" font-size="14" fill="currentColor">O</text>
  <text x="352" y="159" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="154" y="27" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="118" y="222" text-anchor="middle" font-size="14" fill="currentColor">proj</text>
  <text x="185" y="110" text-anchor="start" font-size="14" fill="currentColor">v − proj</text>
</svg>
</div>

Drop a perpendicular from the head of $\mathbf{v}$ onto the line of $\mathbf{u}$. The foot of the perpendicular marks
the **projection** of $\mathbf{v}$ onto $\mathbf{u}$. It is some multiple $t\mathbf{u}$, and the leftover
$\mathbf{v} - t\mathbf{u}$ must be perpendicular to $\mathbf{u}$:

$$
(\mathbf{v} - t\mathbf{u})\cdot\mathbf{u} = 0 \quad\Longleftrightarrow\quad \mathbf{v}\cdot\mathbf{u} - t\,(\mathbf{u}\cdot\mathbf{u}) = 0 \quad\Longleftrightarrow\quad t = \frac{\mathbf{u}\cdot\mathbf{v}}{\mathbf{u}\cdot\mathbf{u}}.
$$

So the **vector projection** is

$$
\operatorname{proj}_{\mathbf{u}}\mathbf{v} = \frac{\mathbf{u}\cdot\mathbf{v}}{\mathbf{u}\cdot\mathbf{u}}\,\mathbf{u},
$$

and the **scalar projection** (its signed length) is $\mathbf{u}\cdot\mathbf{v}/|\mathbf{u}| = |\mathbf{v}|\cos\theta$,
which is just "hypotenuse times cosine" from trigonometry. If $\mathbf{u}$ is a unit vector the formula is shortest of
all: $\operatorname{proj}_{\mathbf{u}}\mathbf{v} = (\mathbf{u}\cdot\mathbf{v})\,\mathbf{u}$.

We have split $\mathbf{v}$ into two perpendicular pieces, one along $\mathbf{u}$ and one across it. This is the same
thing as resolving a force into components, and by Pythagoras
$|\mathbf{v}|^2 = |\operatorname{proj}|^2 + |\mathbf{v} - \operatorname{proj}|^2$.

**Example.** $\mathbf{u} = (5, 1)$, $\mathbf{v} = (2, 3)$ (the picture). $\mathbf{u}\cdot\mathbf{v} = 13$,
$\mathbf{u}\cdot\mathbf{u} = 26$, so $\operatorname{proj}_{\mathbf{u}}\mathbf{v} = \tfrac12(5, 1) = (2.5, 0.5)$. The
leftover is $(2, 3) - (2.5, 0.5) = (-0.5, 2.5)$. Check: $(-0.5, 2.5)\cdot(5, 1) = -2.5 + 2.5 = 0$, perpendicular as
promised.

### Distance from a point to a line

**Problem.** How far is the point $P = (5, 1)$ from the line through $A = (1, 2)$ with direction $\mathbf{d} = (3, 4)$?

The shortest path from $P$ to the line is the perpendicular. Let $\mathbf{w} = \overrightarrow{AP} = (4, -1)$. Its
projection onto $\mathbf{d}$ is the part along the line; what is left is the perpendicular we want.

- $\mathbf{w}\cdot\mathbf{d} = 12 - 4 = 8$, $\mathbf{d}\cdot\mathbf{d} = 25$, so the projection is
  $\tfrac{8}{25}(3, 4) = (\tfrac{24}{25}, \tfrac{32}{25})$.
- The perpendicular part is $(4 - \tfrac{24}{25}, -1 - \tfrac{32}{25}) = (\tfrac{76}{25}, -\tfrac{57}{25}) = \tfrac{19}{25}(4, -3)$.
- Its length is $\tfrac{19}{25}\cdot 5 = \tfrac{19}{5} = 3.8$.

**Check** with the formula of [Chapter 8](08-Coordinate-Geometry.md): the line is $4x - 3y + 2 = 0$ (it passes through
$(1, 2)$ and has slope $4/3$), and $|4\cdot5 - 3\cdot1 + 2|/\sqrt{16 + 9} = 19/5$. The same.

### Reflection

The projection also gives the **mirror image** of a vector in a line through the origin with direction $\mathbf{u}$:
keep the part along $\mathbf{u}$, reverse the part across it. That is

$$
\operatorname{ref}_{\mathbf{u}}\mathbf{v} = \operatorname{proj}_{\mathbf{u}}\mathbf{v} - (\mathbf{v} - \operatorname{proj}_{\mathbf{u}}\mathbf{v}) = 2\,\frac{\mathbf{u}\cdot\mathbf{v}}{\mathbf{u}\cdot\mathbf{u}}\,\mathbf{u} - \mathbf{v}.
$$

Reflecting $(2, 3)$ in the line along $(5, 1)$ gives $2(2.5, 0.5) - (2, 3) = (3, -2)$. Check: it has the same length,
$\sqrt{13}$, as $(2, 3)$. [Chapter 10](10-Transformations-and-Symmetry.md) is built on reflections like this.

### Orthogonal bases

If two plane vectors $\mathbf{e}_1$, $\mathbf{e}_2$ are unit length and perpendicular (an **orthonormal basis**), then
the coordinates of any $\mathbf{v}$ in that basis are just dot products:

$$
\mathbf{v} = (\mathbf{v}\cdot\mathbf{e}_1)\,\mathbf{e}_1 + (\mathbf{v}\cdot\mathbf{e}_2)\,\mathbf{e}_2.
$$

*Why:* write $\mathbf{v} = s\mathbf{e}_1 + t\mathbf{e}_2$ (a basis, 9.2) and dot both sides with $\mathbf{e}_1$:
$\mathbf{v}\cdot\mathbf{e}_1 = s(1) + t(0) = s$. Likewise $t = \mathbf{v}\cdot\mathbf{e}_2$. Compare 9.2, where we had to
solve two equations: perpendicular bases make everything easy. Turning any basis into an orthonormal one by repeated
projections is the **Gram-Schmidt process** (see the U of T guide
[Orthogonality and Gram-Schmidt](../../uoft/MAT247H1/unit02.md)).

## 9.5 The cross product, area and volume

*Level: intermediate to advanced.*

In space, a common need is a direction perpendicular to two given ones: the normal to a roof spanned by two beams, the
axis about which a wrench turns. If $\mathbf{u}$ and $\mathbf{v}$ are not parallel, the vectors perpendicular to both
form a single line through the origin. Can we name a vector on it, with a formula?

We want $\mathbf{n} = (x, y, z)$ with $\mathbf{n}\cdot\mathbf{u} = 0$ and $\mathbf{n}\cdot\mathbf{v} = 0$: two
equations, three unknowns. Solving them in general (try it, eliminating one unknown at a time) leads to one answer,
up to scaling:

**Definition.** The **cross product** of $\mathbf{u} = (u_1, u_2, u_3)$ and $\mathbf{v} = (v_1, v_2, v_3)$ is the
vector

$$
\mathbf{u}\times\mathbf{v} = (u_2 v_3 - u_3 v_2,\ \ u_3 v_1 - u_1 v_3,\ \ u_1 v_2 - u_2 v_1).
$$

A way to remember it: the first component uses only indices 2 and 3, the second 3 and 1, the third 1 and 2, always as
"forward product minus backward product". Each component is a $2 \times 2$ determinant $ad - bc$ from 9.2.

**It is perpendicular to both.** Compute

$$
\mathbf{u}\cdot(\mathbf{u}\times\mathbf{v}) = u_1(u_2v_3 - u_3v_2) + u_2(u_3v_1 - u_1v_3) + u_3(u_1v_2 - u_2v_1).
$$

Expand: the six terms are $u_1u_2v_3$, $-u_1u_3v_2$, $u_2u_3v_1$, $-u_1u_2v_3$, $u_1u_3v_2$, $-u_2u_3v_1$, and they
cancel in pairs. So the dot product is 0. The same computation with $\mathbf{v}$ in place of the first $\mathbf{u}$
shows $\mathbf{v}\cdot(\mathbf{u}\times\mathbf{v}) = 0$. $\square$

**Its length is an area.** The key identity, due to Lagrange, is

$$
|\mathbf{u}\times\mathbf{v}|^2 = |\mathbf{u}|^2|\mathbf{v}|^2 - (\mathbf{u}\cdot\mathbf{v})^2.
$$

*Proof.* Expand both sides in components. On the left you get the three squares
$(u_2v_3 - u_3v_2)^2 + (u_3v_1 - u_1v_3)^2 + (u_1v_2 - u_2v_1)^2$; on the right
$(u_1^2 + u_2^2 + u_3^2)(v_1^2 + v_2^2 + v_3^2) - (u_1v_1 + u_2v_2 + u_3v_3)^2$. On the right, the terms
$u_i^2v_i^2$ cancel, leaving $u_i^2v_j^2$ for $i \ne j$ and $-2u_iv_iu_jv_j$; on the left each square
$(u_iv_j - u_jv_i)^2$ gives exactly $u_i^2v_j^2 + u_j^2v_i^2 - 2u_iv_iu_jv_j$. The terms match one for one. $\square$

Now put in $\mathbf{u}\cdot\mathbf{v} = |\mathbf{u}|\,|\mathbf{v}|\cos\theta$:

$$
|\mathbf{u}\times\mathbf{v}|^2 = |\mathbf{u}|^2|\mathbf{v}|^2(1 - \cos^2\theta) = |\mathbf{u}|^2|\mathbf{v}|^2\sin^2\theta,
$$

and since $\sin\theta \ge 0$ for $0° \le \theta \le 180°$,

$$
|\mathbf{u}\times\mathbf{v}| = |\mathbf{u}|\,|\mathbf{v}|\sin\theta.
$$

That is base times height of the parallelogram with sides $\mathbf{u}$ and $\mathbf{v}$ (base $|\mathbf{u}|$, height
$|\mathbf{v}|\sin\theta$). So **the length of the cross product is the area of the parallelogram**, and half of it is
the area of the triangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 280" role="img" aria-label="Two vectors u and v in space span a parallelogram. The cross product u × v points straight out of it, with length equal to the parallelogram's area.">
  <polygon points="160,200 104.8,254.7 234.4,273 289.6,218.2" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="160" y1="200" x2="109.9" y2="249.7" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="104.8,254.7 108.3,245.5 114,251.3" fill="#eea66f"/>
  <line x1="160" y1="200" x2="282.5" y2="217.2" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="289.6,218.2 280.1,221 281.3,213" fill="#7ccf9a"/>
  <line x1="160" y1="200" x2="160" y2="65.1" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="160,57.9 164.1,66.9 155.9,66.9" fill="currentColor"/>
  <path d="M 141.5 218.3 A 26 26 0 0 0 185.7 203.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="180" y="186" text-anchor="middle" font-size="14" fill="currentColor">θ</text>
  <text x="98.8" y="272.7" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="301.6" y="222.2" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="170" y="61.9" text-anchor="start" font-size="15" fill="currentColor">u × v</text>
  <text x="250" y="150" text-anchor="start" font-size="14" fill="currentColor">area = |u × v|</text>
  <line x1="262" y1="156" x2="205" y2="230" stroke="currentColor" stroke-width="0.8"/>
</svg>
</div>

**Its direction** along the perpendicular line is fixed by the **right-hand rule**: point the fingers of your right hand
along $\mathbf{u}$, curl them towards $\mathbf{v}$, and your thumb points along $\mathbf{u}\times\mathbf{v}$. (Check with
$\mathbf{i}\times\mathbf{j} = (0, 0, 1) = \mathbf{k}$: from the $x$-axis curling to the $y$-axis, the thumb points up
the $z$-axis.) The rule depends on our choice of axes being "right-handed", which is a convention, not a fact of nature.

### Rules, and a warning

- $\mathbf{v}\times\mathbf{u} = -(\mathbf{u}\times\mathbf{v})$ (swap the vectors, reverse the arrow), so
  $\mathbf{v}\times\mathbf{v} = \mathbf{0}$; in fact $\mathbf{u}\times\mathbf{v} = \mathbf{0}$ exactly when the vectors
  are parallel (area zero).
- It distributes: $\mathbf{u}\times(\mathbf{v} + \mathbf{w}) = \mathbf{u}\times\mathbf{v} + \mathbf{u}\times\mathbf{w}$.
- **It is not associative.** $\mathbf{i}\times(\mathbf{i}\times\mathbf{j}) = \mathbf{i}\times\mathbf{k} = -\mathbf{j}$,
  but $(\mathbf{i}\times\mathbf{i})\times\mathbf{j} = \mathbf{0}\times\mathbf{j} = \mathbf{0}$. Brackets matter.
- There is no cross product of this kind in the plane, and in higher dimensions a product with these properties exists
  only in dimension 7 (a fact tied to the octonions). In the plane, the closest thing is the
  single number $u_1v_2 - u_2v_1$, the **signed area** of the parallelogram: positive when $\mathbf{v}$ is
  anticlockwise from $\mathbf{u}$, negative when clockwise. It is the third component of
  $(u_1, u_2, 0)\times(v_1, v_2, 0)$.

**Example (area of a triangle in space).** $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$. Then
$\overrightarrow{AB} = (-1, 2, 0)$, $\overrightarrow{AC} = (-1, 0, 3)$ and

$$
\overrightarrow{AB}\times\overrightarrow{AC} = (2\cdot3 - 0\cdot0,\ 0\cdot(-1) - (-1)\cdot3,\ (-1)\cdot0 - 2\cdot(-1)) = (6, 3, 2),
$$

of length $\sqrt{36 + 9 + 4} = 7$. The triangle has area $7/2$. **Check** the direction: $(6, 3, 2)\cdot(-1, 2, 0) = 0$
and $(6, 3, 2)\cdot(-1, 0, 3) = 0$.

### Volume and the triple product

Three vectors $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ from one corner build a slanted box, a **parallelepiped**. Its
volume is base area times height.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 280" role="img" aria-label="A slanted box built on vectors u, v, w. Its base is the parallelogram of v and w; its height is the part of u along v × w.">
  <polygon points="140,195 54.2,254.3 231,254.3 316.8,195" fill="#eea66f" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="174.8,71.7 89,130.9 265.8,130.9 351.6,71.7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="140" y1="195" x2="174.8" y2="71.7" stroke="currentColor" stroke-width="1.2"/>
  <line x1="54.2" y1="254.3" x2="89" y2="130.9" stroke="currentColor" stroke-width="1.2"/>
  <line x1="231" y1="254.3" x2="265.8" y2="130.9" stroke="currentColor" stroke-width="1.2"/>
  <line x1="316.8" y1="195" x2="351.6" y2="71.7" stroke="currentColor" stroke-width="1.2"/>
  <line x1="140" y1="195" x2="60.1" y2="250.2" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="54.2,254.3 59.3,245.8 63.9,252.5" fill="#eea66f"/>
  <line x1="140" y1="195" x2="309.6" y2="195" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="316.8,195 307.8,199.1 307.8,190.9" fill="#7ccf9a"/>
  <line x1="140" y1="195" x2="172.9" y2="78.6" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="174.8,71.7 176.3,81.4 168.5,79.2" fill="#9cc9ea"/>
  <line x1="174.8" y1="71.7" x2="174.8" y2="206.9" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="44.2" y="264.3" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">v</text>
  <text x="324.8" y="211" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">w</text>
  <text x="162.8" y="65.7" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">u</text>
  <text x="182.8" y="139.3" text-anchor="start" font-size="15" font-style="italic" fill="currentColor">h</text>
  <text x="185.5" y="244.6" text-anchor="middle" font-size="13" fill="currentColor">base</text>
</svg>
</div>

Take the base to be the parallelogram of $\mathbf{v}$ and $\mathbf{w}$; its area is $|\mathbf{v}\times\mathbf{w}|$. The
height is the part of $\mathbf{u}$ perpendicular to the base, that is, along $\mathbf{v}\times\mathbf{w}$: by 9.4 it is
$|\mathbf{u}\cdot(\mathbf{v}\times\mathbf{w})|/|\mathbf{v}\times\mathbf{w}|$. Multiply:

$$
\text{volume} = |\mathbf{u}\cdot(\mathbf{v}\times\mathbf{w})|.
$$

The number $\mathbf{u}\cdot(\mathbf{v}\times\mathbf{w})$ is the **scalar triple product**. Written out, it is the
$3 \times 3$ determinant of the three vectors as rows:

$$
\mathbf{u}\cdot(\mathbf{v}\times\mathbf{w}) = \det\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{pmatrix}.
$$

So the determinant measures volume, with a sign that records whether the three vectors are right-handed. This is the
geometric meaning behind the determinants of linear algebra (see [Determinants](../../uoft/MAT240H1/unit08.md)).
Consequences:

- Three vectors lie in one plane exactly when their triple product is 0 (the box is flat).
- A **tetrahedron** with edges $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ from one corner has volume
  $\frac16|\mathbf{u}\cdot(\mathbf{v}\times\mathbf{w})|$: a pyramid is one third of a prism with the same base and
  height ([Chapter 11](11-Solid-Geometry.md) proves it), and the triangle base is half the parallelogram.

**Example.** The tetrahedron with corners $O$, $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$: the triple product of
$(1, 0, 0)$, $(0, 2, 0)$, $(0, 0, 3)$ is $1\cdot2\cdot3 = 6$, so the volume is $1$. **Check:** it is a corner cut from a
$1 \times 2 \times 3$ box, and one third of base $\tfrac12\cdot1\cdot2$ times height 3 is also 1.

**Try it in Python.**

```python
def dot(u, v): return sum(a * b for a, b in zip(u, v))
def cross(u, v):
    return (u[1]*v[2] - u[2]*v[1], u[2]*v[0] - u[0]*v[2], u[0]*v[1] - u[1]*v[0])

AB, AC = (-1, 2, 0), (-1, 0, 3)
n = cross(AB, AC)
print(n, dot(n, AB), dot(n, AC))             # (6, 3, 2) 0 0
print(dot(n, n) ** 0.5 / 2)                   # 3.5, the triangle's area
print(dot((1, 0, 0), cross((0, 2, 0), (0, 0, 3))) / 6)   # 1.0, the tetrahedron
```

## 9.6 Lines and planes in space

*Level: intermediate to advanced.*

In the plane, a line is $y = mx + c$. In space that recipe fails: one equation in $x, y, z$ cuts out a surface, not a
line. Vectors give a description that works in any dimension.

### Lines

A line is fixed by one point $P_0$ on it (position vector $\mathbf{p}_0$) and a direction $\mathbf{d}$. Every point on
it is reached by starting at $P_0$ and moving some multiple of $\mathbf{d}$:

$$
\mathbf{r}(t) = \mathbf{p}_0 + t\,\mathbf{d}, \qquad t \in \mathbb{R}.
$$

This is a **vector equation** of the line, and $t$ is the **parameter**: think of $t$ as time, and $\mathbf{r}(t)$ as
the position of a particle moving with constant velocity $\mathbf{d}$. Written out in components it becomes three
**parametric equations**.

**Example.** The line through $A = (1, 2, 3)$ and $B = (4, 0, 5)$ has direction $\overrightarrow{AB} = (3, -2, 2)$, so

$$
x = 1 + 3t, \quad y = 2 - 2t, \quad z = 3 + 2t.
$$

$t = 0$ gives $A$, $t = 1$ gives $B$, $t = \tfrac12$ the midpoint $(2.5, 1, 4)$, and $t < 0$ points beyond $A$.

Two lines in space can meet, be parallel, or be **skew**: neither parallel nor meeting, like a road and a bridge that
crosses over it. The shortest distance between skew lines $\mathbf{p} + t\mathbf{d}_1$ and $\mathbf{q} + s\mathbf{d}_2$
is along the common perpendicular, whose direction is $\mathbf{n} = \mathbf{d}_1\times\mathbf{d}_2$; the distance is the
projection of $\mathbf{q} - \mathbf{p}$ onto it:

$$
\text{distance} = \frac{|(\mathbf{q} - \mathbf{p})\cdot(\mathbf{d}_1\times\mathbf{d}_2)|}{|\mathbf{d}_1\times\mathbf{d}_2|}.
$$

(Why: any segment from one line to the other is $\mathbf{q} - \mathbf{p} + s\mathbf{d}_2 - t\mathbf{d}_1$. The part of
it along $\mathbf{n}$ is the same for all $s, t$, because $\mathbf{d}_1$ and $\mathbf{d}_2$ have no part along
$\mathbf{n}$; so every such segment is at least that long, and the common perpendicular achieves it.)

**Example.** Line 1 through $(1, 0, 0)$ with direction $(1, 1, 0)$; line 2 through $(0, 0, 2)$ with direction
$(0, 1, 1)$. Then $\mathbf{d}_1\times\mathbf{d}_2 = (1\cdot1 - 0\cdot1,\ 0\cdot0 - 1\cdot1,\ 1\cdot1 - 1\cdot0) = (1, -1, 1)$
and $\mathbf{q} - \mathbf{p} = (-1, 0, 2)$, with dot product $-1 + 0 + 2 = 1$. The distance is
$1/\sqrt3 \approx 0.577$. **Check:** a brute-force search over many points on both lines (an easy Python loop) finds
the same minimum, about $0.5774$.

### Planes

A plane is fixed by one point $P_0$ on it and a **normal vector** $\mathbf{n}$, a vector perpendicular to the plane. A
point $P$ is on the plane exactly when the movement $\overrightarrow{P_0P}$ lies in the plane, that is, is
perpendicular to $\mathbf{n}$:

$$
\mathbf{n}\cdot(\mathbf{r} - \mathbf{p}_0) = 0.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="A plane through the point P0 with normal vector n. For any point P in the plane, the vector from P0 to P is perpendicular to n.">
  <polygon points="107.4,148.7 1.5,221.8 309.5,221.8 415.4,148.7" fill="#7ccf9a" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="180" x2="150" y2="44.2" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="150,37 154.1,46 145.9,46" fill="currentColor"/>
  <line x1="150" y1="180" x2="235.3" y2="209" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="242.1,211.3 232.3,212.3 234.9,204.6" fill="#eea66f"/>
  <polyline points="150,169 160.4,172.5 160.4,183.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="150" cy="180" r="3.5" fill="currentColor"/>
  <circle cx="242.1" cy="211.3" r="3.5" fill="currentColor"/>
  <text x="136" y="196" text-anchor="middle" font-size="15" fill="currentColor">P₀</text>
  <text x="252.1" y="215.3" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <text x="162" y="41" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">n</text>
</svg>
</div>

Writing $\mathbf{n} = (a, b, c)$ and $\mathbf{r} = (x, y, z)$, this becomes the familiar **equation of a plane**

$$
ax + by + cz = d, \qquad d = \mathbf{n}\cdot\mathbf{p}_0.
$$

So the coefficients of $x, y, z$ in a plane's equation are a normal vector: you can read the plane's tilt straight off
its equation. A plane in space is the analogue of a line in the plane, where $ax + by = c$ has normal $(a, b)$.

**Example (plane through three points).** $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$. In 9.5 we found
$\overrightarrow{AB}\times\overrightarrow{AC} = (6, 3, 2)$, perpendicular to two directions in the plane, hence to the
plane. So the plane is $6x + 3y + 2z = d$, and $A$ gives $d = 6$:

$$
6x + 3y + 2z = 6, \qquad\text{or}\qquad \frac{x}{1} + \frac{y}{2} + \frac{z}{3} = 1.
$$

**Check:** $B$ gives $6$ and $C$ gives $6$. The second form shows where the plane cuts the axes: at 1, 2 and 3.

### Distance from a point to a plane

The shortest way from a point $Q$ to the plane is along the normal. So take any point $P_0$ of the plane and project
$\overrightarrow{P_0Q}$ onto $\mathbf{n}$: the distance is $|\mathbf{n}\cdot(\mathbf{q} - \mathbf{p}_0)|/|\mathbf{n}|$.
Since $\mathbf{n}\cdot\mathbf{p}_0 = d$, this is

$$
\text{distance from } (x_0, y_0, z_0) \text{ to } ax + by + cz = d \ \text{ is } \ \frac{|ax_0 + by_0 + cz_0 - d|}{\sqrt{a^2 + b^2 + c^2}}.
$$

**Example.** The origin and the plane $6x + 3y + 2z = 6$: distance $|0 - 6|/7 = 6/7$. **Check** with volumes: the
tetrahedron $OABC$ has volume 1 (9.5) and its face $ABC$ has area $7/2$; volume is $\tfrac13 \times$ base $\times$
height, so the height from $O$ is $3 \cdot 1/(7/2) = 6/7$. Two different methods, one answer.

### Meetings and angles

- **A line and a plane.** Put the parametric equations into the plane's equation and solve for $t$. Line
  $(1 + 3t, 2 - 2t, 3 + 2t)$ and plane $6x + 3y + 2z = 6$: $6 + 18t + 6 - 6t + 6 + 4t = 6$, so $18 + 16t = 6$ and
  $t = -\tfrac34$. The meeting point is $(-\tfrac54, \tfrac72, \tfrac32)$. **Check:** $-7.5 + 10.5 + 3 = 6$. If the
  $t$ terms cancel, the line is parallel to the plane (no solution, or the line lies in the plane).
- **Two planes.** Two non-parallel planes meet in a line. Its direction lies in both planes, so it is perpendicular to
  both normals: it is $\mathbf{n}_1\times\mathbf{n}_2$. The angle between the planes is the angle between their
  normals.
- **Three planes** usually meet in a single point; solving three linear equations is finding it. When the normals lie in
  one plane (triple product zero) they may instead meet in a line, or not at all, which is the geometry behind
  "singular" systems in linear algebra.

## 9.7 Proving geometry with vectors

*Level: advanced.*

Vectors turn many theorems of Euclid into a few lines of algebra. The method: put the origin anywhere, call the corners'
position vectors $\mathbf{a}, \mathbf{b}, \mathbf{c}, \dots$, write every point you need in terms of them (midpoints are
averages, $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$), and translate "parallel" into "scalar multiple",
"perpendicular" into "dot product zero", "length" into $|\cdot|$.

### The midline theorem

**Theorem.** The segment joining the midpoints of two sides of a triangle is parallel to the third side and half as
long.

*Proof.* Let $M$, $N$ be the midpoints of $AB$ and $AC$. Then
$\overrightarrow{MN} = \mathbf{n} - \mathbf{m} = \tfrac12(\mathbf{a} + \mathbf{c}) - \tfrac12(\mathbf{a} + \mathbf{b}) = \tfrac12(\mathbf{c} - \mathbf{b}) = \tfrac12\overrightarrow{BC}$.
A scalar multiple: parallel, and half the length. $\square$

Compare the proof by congruent triangles in a classical course; this one also tells you the direction for free.

### Parallelograms

**Theorem.** A quadrilateral $ABCD$ is a parallelogram (that is, $\overrightarrow{AB} = \overrightarrow{DC}$) if and
only if its diagonals bisect each other.

*Proof.* $\overrightarrow{AB} = \overrightarrow{DC}$ means $\mathbf{b} - \mathbf{a} = \mathbf{c} - \mathbf{d}$, which
rearranges to $\mathbf{a} + \mathbf{c} = \mathbf{b} + \mathbf{d}$, that is,
$\tfrac12(\mathbf{a} + \mathbf{c}) = \tfrac12(\mathbf{b} + \mathbf{d})$: the midpoints of the diagonals $AC$ and $BD$ are
the same point. Every step reverses. $\square$

**Varignon's theorem.** The midpoints of the sides of *any* quadrilateral form a parallelogram. (Exercise 10.)

**Rhombus.** If $\mathbf{u}$ and $\mathbf{v}$ are the sides of a parallelogram from one corner, its diagonals are
$\mathbf{u} + \mathbf{v}$ and $\mathbf{u} - \mathbf{v}$, and
$(\mathbf{u} + \mathbf{v})\cdot(\mathbf{u} - \mathbf{v}) = |\mathbf{u}|^2 - |\mathbf{v}|^2$. So the diagonals are
perpendicular exactly when the sides are equal: a parallelogram is a rhombus if and only if its diagonals cross at right
angles.

**The parallelogram law.** Adding the expansions of $|\mathbf{u} + \mathbf{v}|^2$ and $|\mathbf{u} - \mathbf{v}|^2$,
the cross terms cancel:

$$
|\mathbf{u} + \mathbf{v}|^2 + |\mathbf{u} - \mathbf{v}|^2 = 2|\mathbf{u}|^2 + 2|\mathbf{v}|^2.
$$

The two diagonals' squares add up to the four sides' squares. [Chapter 12](12-Triangle-Centres-and-Classical-Theorems.md)
turns this into the length of a median (Apollonius' theorem).

### Thales' theorem

**Theorem.** If $AB$ is a diameter of a circle and $P$ is any other point on it, then $\angle APB = 90°$.

*Proof.* Put the origin at the centre, radius $r$. Then $\mathbf{b} = -\mathbf{a}$ and
$|\mathbf{a}| = |\mathbf{p}| = r$. Now
$\overrightarrow{PA}\cdot\overrightarrow{PB} = (\mathbf{a} - \mathbf{p})\cdot(-\mathbf{a} - \mathbf{p}) = |\mathbf{p}|^2 - |\mathbf{a}|^2 = r^2 - r^2 = 0$.
$\square$ ([Chapter 6](06-Circles.md) proved it with isosceles triangles; this proof is one line.)

### The centroid

A **median** of a triangle joins a corner to the midpoint of the opposite side.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 280" role="img" aria-label="Triangle ABC with its three medians, each from a corner to the midpoint of the opposite side. They meet at the centroid G, two thirds of the way along each.">
  <polygon points="45,240 339.4,240 146.2,28.4" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <line x1="45" y1="240" x2="242.8" y2="134.2" stroke="#eea66f" stroke-width="2"/>
  <circle cx="242.8" cy="134.2" r="3" fill="currentColor"/>
  <line x1="339.4" y1="240" x2="95.6" y2="134.2" stroke="#7ccf9a" stroke-width="2"/>
  <circle cx="95.6" cy="134.2" r="3" fill="currentColor"/>
  <line x1="146.2" y1="28.4" x2="192.2" y2="240" stroke="#eea66f" stroke-width="2"/>
  <circle cx="192.2" cy="240" r="3" fill="currentColor"/>
  <circle cx="176.9" cy="169.5" r="4.5" fill="currentColor"/>
  <text x="35" y="254" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <text x="349.4" y="254" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <text x="146.2" y="18.4" text-anchor="middle" font-size="14" fill="currentColor">C</text>
  <text x="190.9" y="163.5" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">G</text>
  <text x="254.8" y="132.2" text-anchor="middle" font-size="14" fill="currentColor">M</text>
  <text x="83.6" y="132.2" text-anchor="middle" font-size="14" fill="currentColor">N</text>
  <text x="192.2" y="258" text-anchor="middle" font-size="14" fill="currentColor">L</text>
</svg>
</div>

**Theorem.** The three medians of a triangle meet in one point $G$, the **centroid**, with position vector

$$
\mathbf{g} = \tfrac13(\mathbf{a} + \mathbf{b} + \mathbf{c}),
$$

and $G$ divides each median in the ratio $2 : 1$ from the corner.

*Proof.* The median from $A$ goes to $M$, with $\mathbf{m} = \tfrac12(\mathbf{b} + \mathbf{c})$. The point two thirds
of the way from $A$ to $M$ is, by the section formula with ratio $2 : 1$,

$$
\frac{1\cdot\mathbf{a} + 2\cdot\mathbf{m}}{3} = \frac{\mathbf{a} + \mathbf{b} + \mathbf{c}}{3}.
$$

This expression does not change if we swap the letters $a, b, c$ around. So the point two thirds of the way along the
median from $B$, and the one from $C$, are given by the same formula: they are the same point $G$. All three medians pass
through it. $\square$

The name comes from physics. Put equal masses at $A$, $B$, $C$: their centre of mass is the average of their positions,
$\mathbf{g}$. A thin triangular plate of uniform card also balances at $G$ (that takes a short calculus argument, or the
neat one in Exercise 11). The idea of points as weighted averages of other points was developed systematically by August
Ferdinand Möbius in *Der barycentrische Calcul* (1827), "barycentric" meaning "of the centre of weight".

**Example.** $A = (0, 0)$, $B = (6, 0)$, $C = (3, 6)$: $G = (3, 2)$. **Check:** the median from $C$ goes to
$(3, 0)$, and $G$ is two thirds of the way down from $(3, 6)$: $6 - \tfrac23\cdot 6 = 2$.

### The orthocentre

An **altitude** is the line through a corner perpendicular to the opposite side.

**Theorem.** The three altitudes of a triangle meet in one point, the **orthocentre** $H$.

*Proof.* For any point $\mathbf{h}$, expand

$$
(\mathbf{h} - \mathbf{a})\cdot(\mathbf{b} - \mathbf{c}) + (\mathbf{h} - \mathbf{b})\cdot(\mathbf{c} - \mathbf{a}) + (\mathbf{h} - \mathbf{c})\cdot(\mathbf{a} - \mathbf{b}).
$$

The terms with $\mathbf{h}$ give $\mathbf{h}\cdot\big((\mathbf{b} - \mathbf{c}) + (\mathbf{c} - \mathbf{a}) + (\mathbf{a} - \mathbf{b})\big) = \mathbf{h}\cdot\mathbf{0} = 0$.
The rest is $-\mathbf{a}\cdot\mathbf{b} + \mathbf{a}\cdot\mathbf{c} - \mathbf{b}\cdot\mathbf{c} + \mathbf{b}\cdot\mathbf{a} - \mathbf{c}\cdot\mathbf{a} + \mathbf{c}\cdot\mathbf{b} = 0$.
So the sum is always zero.

Now let $H$ be the point where the altitudes from $A$ and from $B$ meet (they do meet: they are perpendicular to two
non-parallel sides, so they are not parallel). "On the altitude from $A$" means $(\mathbf{h} - \mathbf{a})\cdot(\mathbf{b} - \mathbf{c}) = 0$,
and similarly for $B$. Then the identity forces the third term to vanish too:
$(\mathbf{h} - \mathbf{c})\cdot(\mathbf{a} - \mathbf{b}) = 0$, which says $H$ is on the altitude from $C$. $\square$

[Chapter 12](12-Triangle-Centres-and-Classical-Theorems.md) gives classical proofs of this and of the other centres'
concurrence, and shows that $G$, $H$ and the circumcentre always lie on one line.

### When to use vectors

Vectors are strongest for statements about midpoints, ratios along lines, parallels, perpendiculars and lengths. They
are weaker for angles that are not right angles and for circles (where the complex numbers of
[Chapter 13](13-Inversion-and-Complex-Geometry.md) or the classical methods of Chapter 12 are better). A good habit:
choose the origin to make the algebra short, at a corner, at the centre of a circle, or at the centroid.

## Check yourself

??? question "1. Let $A = (2, -1)$ and $B = (5, 3)$. Find $\overrightarrow{AB}$, its length, and the unit vector in its direction."

    $\overrightarrow{AB} = (5 - 2, 3 - (-1)) = (3, 4)$. Its length is $\sqrt{9 + 16} = 5$. The unit vector is
    $(3/5, 4/5) = (0.6, 0.8)$; check: $0.36 + 0.64 = 1$.

??? question "2. With $\mathbf{u} = (1, 2, -2)$ and $\mathbf{v} = (3, 0, 4)$, find $\mathbf{u} + \mathbf{v}$, $2\mathbf{u} - \mathbf{v}$, $|\mathbf{u}|$ and $|\mathbf{v}|$."

    $\mathbf{u} + \mathbf{v} = (4, 2, 2)$. $2\mathbf{u} - \mathbf{v} = (2, 4, -4) - (3, 0, 4) = (-1, 4, -8)$.
    $|\mathbf{u}| = \sqrt{1 + 4 + 4} = 3$ and $|\mathbf{v}| = \sqrt{9 + 0 + 16} = 5$. (And $|2\mathbf{u} - \mathbf{v}| = \sqrt{1 + 16 + 64} = 9$.)

??? question "3. Find the angle between $(1, 1, 0)$ and $(0, 1, 1)$. What shape do the points $(1,1,0)$, $(0,1,1)$, $(1,0,1)$ make?"

    The dot product is $0 + 1 + 0 = 1$, both lengths are $\sqrt2$, so $\cos\theta = 1/2$ and $\theta = 60°$. The three
    points are pairwise $\sqrt2$ apart (e.g. $(1,1,0) - (0,1,1) = (1, 0, -1)$, length $\sqrt2$): an equilateral triangle,
    cut from a cube by three face diagonals.

??? question "4. For which $k$ is $(2, k, 1)$ perpendicular to $(3, -1, 4)$?"

    Perpendicular means dot product 0: $6 - k + 4 = 0$, so $k = 10$. Check: $(2, 10, 1)\cdot(3, -1, 4) = 6 - 10 + 4 = 0$.

??? question "5. Split $\mathbf{v} = (4, 1, 2)$ into a part along $\mathbf{u} = (1, 1, 1)$ and a part perpendicular to it."

    $\mathbf{u}\cdot\mathbf{v} = 7$ and $\mathbf{u}\cdot\mathbf{u} = 3$, so the part along $\mathbf{u}$ is
    $\tfrac73(1, 1, 1)$. The perpendicular part is $(4, 1, 2) - (\tfrac73, \tfrac73, \tfrac73) = (\tfrac53, -\tfrac43, -\tfrac13)$.
    Check: its dot product with $(1, 1, 1)$ is $(5 - 4 - 1)/3 = 0$, and the two parts add back to $\mathbf{v}$.

??? question "6. Find the area of the triangle with corners $(0, 0, 0)$, $(2, 1, 0)$, $(1, 3, 2)$."

    $(2, 1, 0)\times(1, 3, 2) = (1\cdot2 - 0\cdot3,\ 0\cdot1 - 2\cdot2,\ 2\cdot3 - 1\cdot1) = (2, -4, 5)$, of length
    $\sqrt{4 + 16 + 25} = \sqrt{45} = 3\sqrt5$. The triangle is half the parallelogram: area $\tfrac{3\sqrt5}{2} \approx 3.354$.

??? question "7. Find the equation of the plane through $(1, 1, 1)$, $(2, 0, 3)$, $(0, 2, 2)$, and the distance from $(3, 3, 0)$ to it."

    Two directions in the plane: $(2,0,3) - (1,1,1) = (1, -1, 2)$ and $(0,2,2) - (1,1,1) = (-1, 1, 1)$. Their cross
    product is $((-1)(1) - 2\cdot1,\ 2\cdot(-1) - 1\cdot1,\ 1\cdot1 - (-1)(-1)) = (-3, -3, 0)$, so take the normal
    $(1, 1, 0)$. The plane is $x + y = d$ with $d = 1 + 1 = 2$: $x + y = 2$. Check: $2 + 0 = 2$ and $0 + 2 = 2$. (It is
    a vertical plane: $z$ is free.) Distance from $(3, 3, 0)$: $|3 + 3 - 2|/\sqrt{1 + 1} = 4/\sqrt2 = 2\sqrt2 \approx 2.83$.

??? question "8. Find the volume of the tetrahedron with corners $(0,0,0)$, $(1,0,0)$, $(0,1,0)$, $(1,1,1)$. Are the points $(1,2,3)$, $(4,5,6)$, $(7,8,9)$ and the origin in one plane?"

    The triple product of $(1,0,0)$, $(0,1,0)$, $(1,1,1)$ is $(1,0,0)\cdot\big((0,1,0)\times(1,1,1)\big) = (1,0,0)\cdot(1, 0, -1) = 1$,
    so the volume is $1/6$. For the second question, $(4,5,6)\times(7,8,9) = (45 - 48,\ 42 - 36,\ 32 - 35) = (-3, 6, -3)$,
    and $(1,2,3)\cdot(-3,6,-3) = -3 + 12 - 9 = 0$: the triple product is zero, so yes, all four lie in one plane. (Indeed
    $(7,8,9) = 2(4,5,6) - (1,2,3)$.)

??? question "9. Where does the line through $(2, 0, 1)$ with direction $(1, 2, -1)$ meet the plane $x + y + z = 9$? At what angle does it cross?"

    Points of the line: $(2 + t, 2t, 1 - t)$. Then $2 + t + 2t + 1 - t = 9$, so $3 + 2t = 9$ and $t = 3$: the point is
    $(5, 6, -2)$. Check: $5 + 6 - 2 = 9$. The angle $\varphi$ between the line and the normal $(1, 1, 1)$ has
    $\cos\varphi = (1 + 2 - 1)/(\sqrt6\sqrt3) = 2/\sqrt{18} = \sqrt2/3 \approx 0.471$, so $\varphi \approx 61.9°$. The
    angle with the plane itself is $90° - \varphi \approx 28.1°$.

??? question "10. Prove Varignon's theorem: the midpoints of the sides of any quadrilateral $ABCD$ are the corners of a parallelogram."

    Let $P, Q, R, S$ be the midpoints of $AB, BC, CD, DA$. Then
    $\overrightarrow{PQ} = \tfrac12(\mathbf{b} + \mathbf{c}) - \tfrac12(\mathbf{a} + \mathbf{b}) = \tfrac12(\mathbf{c} - \mathbf{a})$
    and $\overrightarrow{SR} = \tfrac12(\mathbf{c} + \mathbf{d}) - \tfrac12(\mathbf{d} + \mathbf{a}) = \tfrac12(\mathbf{c} - \mathbf{a})$.
    So $\overrightarrow{PQ} = \overrightarrow{SR}$, which is the definition of a parallelogram $PQRS$. Both sides are
    half the diagonal $AC$; the other pair is half $BD$. The proof never used that $ABCD$ is flat: it holds for four
    points in space too.

??? question "11. A triangle has corners $A, B, C$. Show that the centroid of the three midpoints of its sides is the same point $G$ as the centroid of $A, B, C$. Use this to explain why a uniform triangular plate balances at $G$."

    The midpoints are $\tfrac12(\mathbf{b} + \mathbf{c})$, $\tfrac12(\mathbf{c} + \mathbf{a})$, $\tfrac12(\mathbf{a} + \mathbf{b})$;
    their average is $\tfrac13\cdot\tfrac12\cdot 2(\mathbf{a} + \mathbf{b} + \mathbf{c}) = \mathbf{g}$. For the plate:
    the plate balances along each median, because the median cuts every thin strip parallel to the opposite side at its
    midpoint (similar triangles), so the two halves of every strip balance. The balance point is on all three medians,
    so it is $G$. (The midpoint fact shows the same answer from a different cut: the plate is made of four congruent
    half-size triangles.)

??? question "12. Use the parallelogram law to prove Apollonius' theorem: in a triangle with sides $a = BC$, $b = CA$, $c = AB$, the median from $A$ has length $m_a$ with $4m_a^2 = 2b^2 + 2c^2 - a^2$. Check it on the 3-4-5 right triangle."

    Put the origin at $A$, with $\mathbf{u} = \overrightarrow{AB}$, $\mathbf{v} = \overrightarrow{AC}$. The median
    vector is $\tfrac12(\mathbf{u} + \mathbf{v})$ and $BC$ is $\mathbf{v} - \mathbf{u}$. The parallelogram law gives
    $|\mathbf{u} + \mathbf{v}|^2 = 2c^2 + 2b^2 - a^2$, and $|\mathbf{u} + \mathbf{v}| = 2m_a$, so
    $4m_a^2 = 2b^2 + 2c^2 - a^2$. Check: legs $b = 4$, $c = 3$, hypotenuse $a = 5$; $4m_a^2 = 32 + 18 - 25 = 25$, so
    $m_a = 2.5$, half the hypotenuse, as Thales' theorem predicts (the midpoint of the hypotenuse is the centre of the
    circle through all three corners).

## What you learned

- A vector is a displacement, recorded by components; $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$, and its length
  comes from Pythagoras, in the plane or in space.
- Vectors add tip to tail (the parallelogram rule) and scale by numbers; two non-parallel plane vectors form a basis.
- The dot product $\mathbf{u}\cdot\mathbf{v} = |\mathbf{u}|\,|\mathbf{v}|\cos\theta$ (proved from the law of cosines)
  measures angles; zero means perpendicular. Cauchy-Schwarz and the triangle inequality follow.
- Projection $\frac{\mathbf{u}\cdot\mathbf{v}}{\mathbf{u}\cdot\mathbf{u}}\mathbf{u}$ splits a vector into along and
  across parts, and gives distances and reflections.
- The cross product is perpendicular to both factors with length equal to the parallelogram's area; the triple product
  is a signed volume, the determinant.
- Lines are $\mathbf{p}_0 + t\mathbf{d}$; planes are $\mathbf{n}\cdot(\mathbf{r} - \mathbf{p}_0) = 0$, that is,
  $ax + by + cz = d$ with normal $(a, b, c)$.
- Vector proofs: midlines, parallelograms, Thales, the centroid at $\tfrac13(\mathbf{a} + \mathbf{b} + \mathbf{c})$, and
  the concurrence of the altitudes.

**Next:** [Chapter 10](10-Transformations-and-Symmetry.md), the motions of the plane (translations, rotations,
reflections) and the symmetry groups they form, from a snowflake to the 17 wallpaper patterns.

## Further reading

- M. J. Crowe, *A History of Vector Analysis*, 1967. How Hamilton, Grassmann, Gibbs and Heaviside's ideas became the
  vectors of today.
- H. Anton and C. Rorres, *Elementary Linear Algebra*, many editions. Chapters on vectors in 2-space and 3-space, with
  lines and planes.
- G. Strang, *Introduction to Linear Algebra*, 5th edition, 2016. Chapter 1 is vectors, lengths and dot products.
- H. S. M. Coxeter, *Introduction to Geometry*, 2nd edition, 1969. Chapter 13 on affine geometry and barycentric
  coordinates.
- J. W. Gibbs and E. B. Wilson, *Vector Analysis*, 1901. The textbook, written by Wilson from Gibbs's lectures, that
  fixed the dot and cross notation.
- On this site: the Topics lessons [Vectors: adding, scaling, length](../../topics/geometry/level-8/04-vectors.md),
  [The dot product](../../topics/geometry/level-8/05-dot-product.md) and
  [Distance and midpoint](../../topics/geometry/level-6/03-distance-midpoint.md); the U of T guides
  [Fields and vector spaces](../../uoft/MAT240H1/unit01.md), [Determinants](../../uoft/MAT240H1/unit08.md),
  [Inner product spaces](../../uoft/MAT247H1/unit01.md) and
  [Units, vectors and estimation](../../uoft/PHY131H1/unit01.md); and the [Algebra book](../algebra/index.md), whose
  [Chapter 21](../algebra/21-Modules-and-Representations.md) treats vector spaces abstractly.
