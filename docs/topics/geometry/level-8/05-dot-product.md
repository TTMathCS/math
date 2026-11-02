---
title: "The dot product and projections"
---

# The dot product and projections

*Geometry · level 8, lesson 5 of 6*

## A question to start

Here are two arrows: $(3, 4)$ and $(5, -1)$. What is the angle between them?

You could draw them and use a protractor. Or you could do this: multiply the first components, $3 \times 5 = 15$,
multiply the second components, $4 \times (-1) = -4$, and add, getting 11. From that single number 11, and the two
lengths, the angle drops out: about 64.4°. No drawing, no protractor, and it works just as well for arrows in three
dimensions, or in a hundred. How can multiplying and adding components possibly know about angles? The answer is the
cosine law, in disguise.

## The idea

### Two definitions of one number

The **dot product** of two vectors is a **number** (a scalar), not a vector. Its algebraic definition is

$$\vec u \cdot \vec v = u_1 v_1 + u_2 v_2 \qquad \text{(in 3D, add } u_3 v_3\text{)}$$

Its geometric meaning is

$$\vec u \cdot \vec v = |\vec u|\,|\vec v|\cos\theta$$

where $\theta$ is the angle between the two arrows when they start from the same point ($0 \le \theta \le \pi$). The
surprising part is that these are always equal.

### Why the two agree

Draw $\vec u$ and $\vec v$ from the same point. The third side of the triangle they make is $\vec u - \vec v$ (the arrow
from the tip of $\vec v$ to the tip of $\vec u$, from [the last lesson](04-vectors.md)). The [cosine law](../level-7/05-cosine-law.md)
for that triangle says

$$|\vec u - \vec v|^2 = |\vec u|^2 + |\vec v|^2 - 2|\vec u|\,|\vec v|\cos\theta$$

Now work out the left side with components instead:

$$|\vec u - \vec v|^2 = (u_1 - v_1)^2 + (u_2 - v_2)^2 = (u_1^2 + u_2^2) + (v_1^2 + v_2^2) - 2(u_1v_1 + u_2v_2)$$

which is $|\vec u|^2 + |\vec v|^2 - 2(u_1v_1 + u_2v_2)$. Both lines describe the same length. Comparing them, the
$|\vec u|^2 + |\vec v|^2$ parts match, so the rest must match too:

$$u_1v_1 + u_2v_2 = |\vec u|\,|\vec v|\cos\theta \qquad ∎$$

The same argument works in three dimensions, with one more term. So the simple sum of products secretly carries the
cosine of the angle.

### What the dot product tells you

Rearranging gives the angle between any two non-zero vectors:

$$\cos\theta = \frac{\vec u \cdot \vec v}{|\vec u|\,|\vec v|}$$

The **sign** alone tells you a lot, because the lengths are positive:

| $\vec u \cdot \vec v$ | $\cos\theta$ | The angle is |
| --- | --- | --- |
| positive | positive | acute: the arrows point roughly the same way |
| zero | zero | exactly 90°: the vectors are **perpendicular** (also called **orthogonal**) |
| negative | negative | obtuse: the arrows point roughly opposite ways |

The test "perpendicular exactly when the dot product is 0" is one of the most used facts in all of applied
mathematics.

### Rules of the dot product

From the algebraic definition, these follow at once:

- $\vec u \cdot \vec v = \vec v \cdot \vec u$ (order does not matter);
- $\vec u \cdot (\vec v + \vec w) = \vec u \cdot \vec v + \vec u \cdot \vec w$ (it spreads over addition, like ordinary
  multiplication);
- $(k\vec u) \cdot \vec v = k(\vec u \cdot \vec v)$;
- $\vec v \cdot \vec v = v_1^2 + v_2^2 = |\vec v|^2$ (a vector dotted with itself is its length squared).

Since $\cos\theta$ is between $-1$ and $1$, also $|\vec u \cdot \vec v| \le |\vec u|\,|\vec v|$. This is the
**Cauchy-Schwarz inequality**, which is one of the most important inequalities in mathematics.

### Projections: the shadow of one vector on another

Shine a light straight down onto the line of $\vec v$. The shadow that $\vec u$ casts on that line is its
**projection** onto $\vec v$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 200" role="img" aria-label="Vector u starts at O and points up to the right at angle theta above vector v, which lies along the horizontal. A dashed perpendicular drops from the tip of u to the line of v. The part of the line from O to the foot of the perpendicular is the projection of u onto v, of length |u| cos theta">
  <defs>
    <marker id="dot5-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <line x1="20" y1="170" x2="320" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="200" y1="50" x2="200" y2="170" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <rect x="188" y="158" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g stroke-width="3.5" marker-end="url(#dot5-arrow)">
    <line x1="40" y1="170" x2="300" y2="170" stroke="#9cc9ea"/>
    <line x1="40" y1="170" x2="200" y2="170" stroke="#7ccf9a" stroke-width="6"/>
    <line x1="40" y1="170" x2="200" y2="50" stroke="#eea66f"/>
  </g>
  <path d="M 85 170 A 45 45 0 0 0 76 143" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="14" fill="currentColor">
    <text x="26" y="188">O</text><text x="110" y="100">u</text><text x="290" y="160">v</text>
    <text x="90" y="160">θ</text><text x="76" y="190" font-size="12">projection: |u| cos θ</text>
  </g>
</svg>
</div>

The right triangle shows that the shadow's length is $|\vec u|\cos\theta$. Using the dot product to replace the cosine:

$$\text{scalar projection} = |\vec u|\cos\theta = \frac{\vec u \cdot \vec v}{|\vec v|}$$

(negative if the angle is obtuse, meaning the shadow falls backwards). To get the shadow as a **vector**, multiply
this length by the unit vector $\dfrac{\vec v}{|\vec v|}$:

$$\operatorname{proj}_{\vec v}\vec u = \frac{\vec u \cdot \vec v}{|\vec v|^2}\,\vec v$$

What is left over, $\vec u - \operatorname{proj}_{\vec v}\vec u$, is perpendicular to $\vec v$. So every vector splits into
a part **along** $\vec v$ and a part **across** it. Engineers do this constantly: the part of gravity pulling a cart
down a slope, the part of the wind pushing a sail forward.

### Work

In physics, when a constant force $\vec F$ moves something through a displacement $\vec d$, the **work** done is

$$W = \vec F \cdot \vec d = |\vec F|\,|\vec d|\cos\theta$$

Only the part of the force along the motion does work. Pushing straight down on a box sliding across the floor does
no work at all, because the angle is 90°.

## Worked examples

**1. The opening question.** Find the angle between $(3, 4)$ and $(5, -1)$.

1. Dot product: $3 \times 5 + 4 \times (-1) = 11$.
2. Lengths: $\sqrt{9 + 16} = 5$ and $\sqrt{25 + 1} = \sqrt{26}$.
3. $\cos\theta = \dfrac{11}{5\sqrt{26}} \approx 0.4315$, so $\theta \approx 64.4°$.

**2. In three dimensions.** Find the angle between $(1, 2, 2)$ and $(2, -1, 2)$.

1. Dot product: $2 - 2 + 4 = 4$.
2. Lengths: $\sqrt{1 + 4 + 4} = 3$ and $\sqrt{4 + 1 + 4} = 3$.
3. $\cos\theta = \tfrac{4}{9}$, so $\theta \approx 63.6°$.

**3. A projection.** Project $\vec u = (5, 1)$ onto $\vec v = (3, 4)$, and split $\vec u$ into parts along and across
$\vec v$.

1. $\vec u \cdot \vec v = 15 + 4 = 19$ and $|\vec v|^2 = 25$.
2. Scalar projection: $\tfrac{19}{5} = 3.8$.
3. Vector projection: $\tfrac{19}{25}(3, 4) = (2.28,\ 3.04)$.
4. Part across: $(5, 1) - (2.28, 3.04) = (2.72,\ -2.04)$.
5. Check it is perpendicular to $\vec v$: $2.72 \times 3 + (-2.04) \times 4 = 8.16 - 8.16 = 0$. Good.

**4. Work on a sled.** A rope pulls a sled 50 m across flat snow with a force of 80 newtons, at 30° above the
horizontal. Work done: $80 \times 50 \times \cos 30° \approx 3464$ joules. The upward part of the pull lifts a little
weight off the runners but does no work moving the sled forward.

**5. Uphill on Mars.** On Mars, gravity pulls with about 3.71 newtons on each kilogram. A 1000 kg rover drives up a
straight ramp from $(0, 0)$ to $(40, 3)$, in metres (40 across, 3 up).

1. Gravity: $\vec F = (0,\ -3710)$ N. Displacement: $\vec d = (40, 3)$.
2. Work done by gravity: $\vec F \cdot \vec d = 0 \times 40 + (-3710) \times 3 = -11\,130$ J. Negative, because
   gravity pulls against the climb.
3. So the motors must supply at least 11 130 J for the climb (plus whatever friction takes). Notice the 40 m across
   did not matter: only the part of the motion along the force counts. On Earth the same climb needs about
   $9.81 \times 1000 \times 3 \approx 29\,400$ J.

**6. Thales' theorem in one line.** Let a circle have centre $O$ at the origin and radius $r$, with diameter from $A$ to
$B$, so $\vec b = -\vec a$, and let $C$ be any point on the circle, so $|\vec c| = r = |\vec a|$. Then

$$\overrightarrow{AC} \cdot \overrightarrow{BC} = (\vec c - \vec a)\cdot(\vec c + \vec a) = \vec c \cdot \vec c - \vec a \cdot \vec a = r^2 - r^2 = 0$$

So $AC$ is perpendicular to $BC$: the angle in a semicircle is a right angle. ∎ Compare the
[proof with isosceles triangles](../level-7/06-circle-theorems.md).

## Try it

1. Find $(2, -3) \cdot (4, 5)$. Is the angle between these vectors acute, right or obtuse?
2. Find the angle between $(2, 1)$ and $(1, 3)$ exactly.
3. For which $k$ is $(k, 3)$ perpendicular to $(2, -4)$?
4. Find the projection of $(6, 2)$ onto $(1, 1)$, and the part of $(6, 2)$ perpendicular to $(1, 1)$.
5. Find the distance from the point $(5, 1)$ to the line through the origin in the direction $(3, 4)$.
6. A triangle has corners $A(0, 0)$, $B(4, 0)$ and $C(1, 3)$. Find the angle at $A$.
7. Show that $|\vec u + \vec v|^2 = |\vec u|^2 + |\vec v|^2 + 2\,\vec u \cdot \vec v$. What does it say when $\vec u$ and
   $\vec v$ are perpendicular?
8. Prove with the dot product that the diagonals of a rhombus (a parallelogram with all sides equal) are perpendicular.

??? note "Answers"
    1. $8 - 15 = -7$. Negative, so the angle is obtuse.
    2. Dot product $2 + 3 = 5$; lengths $\sqrt5$ and $\sqrt{10}$. $\cos\theta = \dfrac{5}{\sqrt{50}} = \dfrac{5}{5\sqrt2} = \dfrac{1}{\sqrt2}$,
       so $\theta = 45°$, that is $\tfrac{\pi}{4}$.
    3. $2k - 12 = 0$, so $k = 6$.
    4. $(6, 2) \cdot (1, 1) = 8$ and $|(1, 1)|^2 = 2$, so the projection is $4(1, 1) = (4, 4)$. The perpendicular part is
       $(6, 2) - (4, 4) = (2, -2)$. Check: $(2, -2) \cdot (1, 1) = 0$.
    5. It is the length of the part of $(5, 1)$ across the line. From worked example 3 that part is $(2.72, -2.04)$,
       with length $\sqrt{7.3984 + 4.1616} = \sqrt{11.56} = 3.4$.
    6. $\overrightarrow{AB} = (4, 0)$ and $\overrightarrow{AC} = (1, 3)$. Dot product 4; lengths 4 and $\sqrt{10}$.
       $\cos A = \dfrac{4}{4\sqrt{10}} = \dfrac{1}{\sqrt{10}}$, so $A \approx 71.6°$.
    7. $|\vec u + \vec v|^2 = (\vec u + \vec v)\cdot(\vec u + \vec v) = \vec u\cdot\vec u + 2\,\vec u\cdot\vec v + \vec v\cdot\vec v$, using the
       rules above. When $\vec u \perp \vec v$, the middle term is 0 and $|\vec u + \vec v|^2 = |\vec u|^2 + |\vec v|^2$:
       that is Pythagoras' theorem, for the right triangle with legs $\vec u$ and $\vec v$.
    8. Let the rhombus have sides $\vec a$ and $\vec c$ from one corner, with $|\vec a| = |\vec c|$. Its diagonals are
       $\vec a + \vec c$ and $\vec c - \vec a$. Then $(\vec a + \vec c)\cdot(\vec c - \vec a) = |\vec c|^2 - |\vec a|^2 = 0$,
       so the diagonals are perpendicular. ∎

## Common mistake

**Expecting a vector.** $\vec u \cdot \vec v$ is a single number. Writing $(3, 4)\cdot(5, -1) = (15, -4)$ is wrong: add the
products to get 11.

**Projecting onto the wrong vector.** $\operatorname{proj}_{\vec v}\vec u$ (the shadow of $\vec u$ on $\vec v$) divides by
$|\vec v|^2$, the length of the vector you project **onto**. Swapping the roles gives a different answer.

## Where it leads

- Previous lesson: [Vectors](04-vectors.md). Next lesson:
  [Beyond Euclid: geometry on a sphere](06-sphere-geometry.md), where the dot product finds distances on a globe.
- The level page: [Level 8: Proof, radians and vectors](index.md).
- Where it came from: [The cosine law](../level-7/05-cosine-law.md).
- Work and energy on the U of T shelf: [PHY131 Unit 6 (work, energy and power)](../../../uoft/PHY131H1/unit06.md).
- Dot products in any number of dimensions, called inner products:
  [MAT247 Unit 1 (inner product spaces)](../../../uoft/MAT247H1/unit01.md) and
  [MAT247 Unit 2 (orthogonality and Gram-Schmidt)](../../../uoft/MAT247H1/unit02.md).
