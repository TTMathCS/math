---
title: "Lines and planes in space"
---

# Lines and planes in space

*Algebra · level 8, lesson 8 of 8*

## A question to start

On a flat page, two straight lines either meet at one point, are parallel, or are the same line. Is that also true in
space?

Look around a room. Take the line where the floor meets the front wall, and the line where the ceiling meets a side
wall. They are not parallel (one runs left to right, the other front to back), and yet they never meet: one is down at
the floor, the other up at the ceiling. In three dimensions there is a fourth possibility. Such lines are called
**skew**. To handle space properly, we need equations for lines and planes that work in three dimensions, and the slope
$m$ from $y = mx + b$ will not do the job.

## The idea

### Points and vectors in space

A point in space has three coordinates $(x, y, z)$. A **vector** such as $\vec{d} = (2, -3, 5)$ is a step: 2 in the
$x$ direction, $-3$ in $y$, 5 in $z$. You met vectors and the **dot product** in geometry:
$\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3 = \lvert\vec{a}\rvert\lvert\vec{b}\rvert\cos\theta$, and two vectors are
perpendicular exactly when their dot product is 0.

### The equation of a line

A slope is one number, enough to describe a direction on a flat page. In space a direction needs more, so we use a
**direction vector** $\vec{d}$. A line is "start at a point $\vec{r}_0$, then take any number $t$ of steps $\vec{d}$":

$$\vec{r} = \vec{r}_0 + t\,\vec{d}, \qquad t \text{ any real number}.$$

This is the **vector equation** of the line. The number $t$ is called a **parameter**: each value of $t$ gives one
point ($t = 0$ gives the start, $t = 1$ one step along, $t = -2$ two steps backwards). Writing it coordinate by
coordinate gives the **parametric equations**. For the line through $(1, 2, -1)$ with direction $(2, -3, 5)$:

$$x = 1 + 2t, \qquad y = 2 - 3t, \qquad z = -1 + 5t.$$

To test whether a point is on the line, find the $t$ that works for one coordinate and check it in the others.

### How two lines can sit in space

| Directions | Do they meet? | Name |
| --- | --- | --- |
| parallel (one is a multiple of the other) | yes, everywhere | the same line |
| parallel | no | parallel lines |
| not parallel | yes, at one point | intersecting lines |
| not parallel | no | **skew** lines |

To decide, set the two parametric equations equal (with **different** parameters, $t$ and $s$) and solve.

### The cross product

To describe a plane we need a vector that sticks straight out of it. The **cross product** of
$\vec{a} = (a_1, a_2, a_3)$ and $\vec{b} = (b_1, b_2, b_3)$ is

$$\vec{a} \times \vec{b} = (a_2b_3 - a_3b_2,\; a_3b_1 - a_1b_3,\; a_1b_2 - a_2b_1).$$

A way to remember it: each entry uses the **other two** positions, in the cyclic order 1, 2, 3, 1, 2. The first entry
uses positions 2 and 3, the second uses 3 and 1, the third uses 1 and 2; each time it is "first one's $a$ times second
one's $b$, minus the other way round".

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 215" role="img" aria-label="Two vectors a and b drawn from one corner make a parallelogram lying flat; the cross product a × b points straight up out of it, and its length equals the parallelogram area">
  <polygon points="70,190 230,190 300,130 140,130" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="190" x2="222" y2="190" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="230,190 220.8,193.9 220.8,186.1" fill="#eea66f"/>
  <line x1="70" y1="190" x2="133.9" y2="135.2" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="140,130 135.5,139 130.5,133" fill="#7ccf9a"/>
  <line x1="70" y1="190" x2="70" y2="48" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="70,40 73.9,49.2 66.1,49.2" fill="currentColor"/>
  <text x="150.0" y="208" font-size="14" text-anchor="middle" fill="currentColor" font-weight="bold">a</text>
  <text x="101.0" y="154.0" font-size="14" text-anchor="end" fill="currentColor" font-weight="bold">b</text>
  <text x="80" y="52" font-size="14" fill="currentColor" font-weight="bold">a × b</text>
  <text x="195.0" y="165.0" font-size="12" text-anchor="middle" fill="currentColor">area = |a × b|</text>
  <polyline points="70,176 82,176 82,190" fill="none" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

**It is perpendicular to both.** Dot it with $\vec{a}$:

$$a_1(a_2b_3 - a_3b_2) + a_2(a_3b_1 - a_1b_3) + a_3(a_1b_2 - a_2b_1).$$

Expand: $a_1a_2b_3 - a_1a_3b_2 + a_2a_3b_1 - a_1a_2b_3 + a_1a_3b_2 - a_2a_3b_1$. Every term cancels with another, so
the sum is 0. The same happens with $\vec{b}$. So $\vec{a} \times \vec{b}$ is perpendicular to both $\vec{a}$ and
$\vec{b}$.

**Its length is the area of the parallelogram.** Expanding both sides (a page of patient algebra) shows

$$\lvert\vec{a} \times \vec{b}\rvert^2 = \lvert\vec{a}\rvert^2\lvert\vec{b}\rvert^2 - (\vec{a} \cdot \vec{b})^2 = \lvert\vec{a}\rvert^2\lvert\vec{b}\rvert^2(1 - \cos^2\theta) = \lvert\vec{a}\rvert^2\lvert\vec{b}\rvert^2\sin^2\theta.$$

So $\lvert\vec{a} \times \vec{b}\rvert = \lvert\vec{a}\rvert\lvert\vec{b}\rvert\sin\theta$. The parallelogram with sides
$\vec{a}$ and $\vec{b}$ has base $\lvert\vec{a}\rvert$ and height $\lvert\vec{b}\rvert\sin\theta$, so this is exactly its
area. A triangle with those two sides has half that area.

**Its direction** follows the **right-hand rule**: point the fingers of your right hand along $\vec{a}$, curl them
towards $\vec{b}$, and your thumb points along $\vec{a} \times \vec{b}$. So order matters:
$\vec{b} \times \vec{a} = -(\vec{a} \times \vec{b})$. For example $(1, 0, 0) \times (0, 1, 0) = (0, 0, 1)$: $x$
across to $y$ gives $z$ upward.

### The equation of a plane

A plane is fixed by one point $P_0 = (x_0, y_0, z_0)$ in it and a **normal vector** $\vec{n} = (a, b, c)$
perpendicular to it. A point $P = (x, y, z)$ is in the plane exactly when the step $\overrightarrow{P_0P}$ lies flat in
the plane, that is, is perpendicular to $\vec{n}$:

$$\vec{n} \cdot \overrightarrow{P_0P} = 0 \quad\Longleftrightarrow\quad a(x - x_0) + b(y - y_0) + c(z - z_0) = 0.$$

Multiplying out gives the **scalar equation** of the plane:

$$ax + by + cz = d, \qquad \text{where } d = ax_0 + by_0 + cz_0.$$

The coefficients of $x$, $y$, $z$ **are** the normal vector. Given three points of a plane, two steps between them lie
in the plane, and their cross product is a normal.

### Where a line meets a plane

Put the line's parametric equations into the plane's equation. You get one equation in $t$:

- one solution: the line crosses the plane at one point;
- no solution (like $0 = 5$): the line is parallel to the plane and never meets it;
- every $t$ works (like $0 = 0$): the line lies in the plane.

### Three equations, three planes

Each equation $ax + by + cz = d$ is a plane, so solving three equations in three unknowns means finding where three
planes meet. The possibilities:

- **one point**: like two walls and the floor at a corner of a room;
- **a line**: like three pages of an open book meeting along the spine (infinitely many solutions);
- **no point**: two planes parallel, or three planes meeting in pairs along three parallel lines, like the three
  sides of a triangular tent (a **prism**);
- **the whole plane**: all three equations describe the same plane.

Elimination, from level 6, works exactly as before: combine equations to remove one variable at a time.

## Worked examples

**1. A line through two points.** Find the line through $A(1, 2, -1)$ and $B(3, -1, 4)$. Is $(5, -4, 9)$ on it?

- Direction $\overrightarrow{AB} = (3 - 1, -1 - 2, 4 - (-1)) = (2, -3, 5)$.
- $\vec{r} = (1, 2, -1) + t(2, -3, 5)$, or $x = 1 + 2t$, $y = 2 - 3t$, $z = -1 + 5t$.
- $x = 5$ needs $t = 2$. Then $y = 2 - 6 = -4$ ✓ and $z = -1 + 10 = 9$ ✓. Yes, it is on the line.

**2. A cross product.** Find $(1, 2, 3) \times (4, 5, 6)$ and the area of the parallelogram they make.

- $(2 \cdot 6 - 3 \cdot 5,\; 3 \cdot 4 - 1 \cdot 6,\; 1 \cdot 5 - 2 \cdot 4) = (-3, 6, -3)$.
- Check: $(1, 2, 3) \cdot (-3, 6, -3) = -3 + 12 - 9 = 0$ ✓; $(4, 5, 6) \cdot (-3, 6, -3) = -12 + 30 - 18 = 0$ ✓.
- Area $= \sqrt{9 + 36 + 9} = \sqrt{54} = 3\sqrt6 \approx 7.35$.

**3. A plane through three points.** $P(1, 0, 2)$, $Q(2, 1, 0)$, $R(0, 3, 1)$.

- $\overrightarrow{PQ} = (1, 1, -2)$ and $\overrightarrow{PR} = (-1, 3, -1)$.
- Normal $\overrightarrow{PQ} \times \overrightarrow{PR} = (1(-1) - (-2)3,\; (-2)(-1) - 1(-1),\; 1 \cdot 3 - 1(-1)) = (5, 3, 4)$.
- $5x + 3y + 4z = d$, and $P$ gives $d = 5 + 0 + 8 = 13$. The plane is $5x + 3y + 4z = 13$.
- Check $Q$: $10 + 3 + 0 = 13$ ✓. $R$: $0 + 9 + 4 = 13$ ✓.

**4. A line meets the plane.** Where does the line of example 1 meet the plane of example 3?

- $5(1 + 2t) + 3(2 - 3t) + 4(-1 + 5t) = 13$, so $5 + 10t + 6 - 9t - 4 + 20t = 13$, so $7 + 21t = 13$, so
  $t = \tfrac27$.
- Point: $\left(1 + \tfrac47,\; 2 - \tfrac67,\; -1 + \tfrac{10}{7}\right) = \left(\tfrac{11}{7}, \tfrac87, \tfrac37\right)$.
- Check: $\tfrac{55}{7} + \tfrac{24}{7} + \tfrac{12}{7} = \tfrac{91}{7} = 13$. ✓

**5. Three planes meeting at a point.** Solve $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.

- Add the first and third: $2x + 3y = 8$. Add the second and third: $3x + y = 5$.
- From $3x + y = 5$: $y = 5 - 3x$. Then $2x + 3(5 - 3x) = 8$, so $-7x = -7$, so $x = 1$, $y = 2$.
- From the first equation, $z = 6 - 1 - 2 = 3$. The planes meet at the single point $(1, 2, 3)$. Check the second:
  $2 - 2 + 3 = 3$ ✓.

**6. Three planes meeting nowhere.** Solve $x + y = 1$, $y + z = 1$, $x - z = 2$.

- Subtract the second from the first: $x - z = 0$. But the third says $x - z = 2$. Impossible: **no solution**.
- No two normals, $(1, 1, 0)$, $(0, 1, 1)$, $(1, 0, -1)$, are multiples of each other, so no two planes are parallel.
  Each pair meets in a line, and the three lines are parallel: the triangular tent.

## Try it

1. Write parametric equations for the line through $(2, -1, 0)$ with direction $(1, 4, -2)$. Find the point with
   $t = 3$.
2. Is $(4, 5, 1)$ on the line $\vec{r} = (1, -1, 3) + t(1, 2, -1)$?
3. Find $(2, 0, 1) \times (1, 3, -1)$ and check it is perpendicular to both.
4. Find the area of the triangle with corners $O(0, 0, 0)$, $A(2, 0, 1)$ and $B(1, 3, -1)$.
5. Find the equation of the plane through $(1, 2, 3)$ with normal $(2, -1, 4)$.
6. Where does the line $x = 1 + t$, $y = 2t$, $z = 3 - t$ meet the plane $x + y + z = 10$?
7. Solve $x + y + z = 2$, $x - y + 2z = 6$, $2x + y - z = -1$.
8. Show that the lines $\vec{r} = (1, 0, 0) + t(1, 1, 0)$ and $\vec{r} = (0, 1, 1) + s(1, -1, 0)$ are skew.

??? note "Answers"
    1. $x = 2 + t$, $y = -1 + 4t$, $z = -2t$. At $t = 3$: $(5, 11, -6)$.
    2. $x = 4$ needs $t = 3$. Then $y = -1 + 6 = 5$ ✓ but $z = 3 - 3 = 0$, not 1. **No.**
    3. $(0 \cdot (-1) - 1 \cdot 3,\; 1 \cdot 1 - 2 \cdot (-1),\; 2 \cdot 3 - 0 \cdot 1) = (-3, 3, 6)$. Checks:
       $(2, 0, 1) \cdot (-3, 3, 6) = -6 + 0 + 6 = 0$ ✓ and $(1, 3, -1) \cdot (-3, 3, 6) = -3 + 9 - 6 = 0$ ✓.
    4. Half the length of $\overrightarrow{OA} \times \overrightarrow{OB} = (-3, 3, 6)$ from question 3:
       $\tfrac12\sqrt{9 + 9 + 36} = \tfrac12\sqrt{54} = \tfrac{3\sqrt6}{2} \approx 3.67$.
    5. $2x - y + 4z = d$ with $d = 2 - 2 + 12 = 12$: $2x - y + 4z = 12$.
    6. $(1 + t) + 2t + (3 - t) = 10$, so $4 + 2t = 10$, so $t = 3$. The point is $(4, 6, 0)$, and
       $4 + 6 + 0 = 10$ ✓.
    7. Remove $z$ twice. The first plus the third: $3x + 2y = 1$. The second plus twice the third:
       $(x - y + 2z) + (4x + 2y - 2z) = 6 - 2$, so $5x + y = 4$. From that, $y = 4 - 5x$; then
       $3x + 2(4 - 5x) = 1$, so $-7x = -7$, so $x = 1$ and $y = -1$. The first equation gives $z = 2 - 1 + 1 = 2$. The
       planes meet at $(1, -1, 2)$. Check the second equation: $1 + 1 + 4 = 6$ ✓.
    8. Directions $(1, 1, 0)$ and $(1, -1, 0)$ are not multiples, so the lines are not parallel. To meet, we need
       $1 + t = s$, $t = 1 - s$ and $0 = 1$ (the $z$-coordinates). The last is impossible, so they never meet. Not
       parallel and not meeting: skew. (One line lies in the floor $z = 0$, the other in the level $z = 1$, like the
       room in the opening question.)

## Common mistake

**Using the same parameter for two lines.** When you set two lines equal, give them different letters ($t$ and $s$).
Using $t$ for both asks whether the two moving points are in the same place **at the same time**, which is a different
question.

**Mixing up the normal and the direction.** In $ax + by + cz = d$, the vector $(a, b, c)$ is perpendicular to the plane,
not along it. A line along the direction $(a, b, c)$ crosses the plane straight through.

## Where it leads

- Back: [Trigonometric identities and equations](07-trig-identities-equations.md) · This is the last lesson of algebra.
- [Level 8 page](index.md) · [Algebra topic page](../index.md)
- Vectors and the dot product: [Vectors](../../geometry/level-8/04-vectors.md) and [The dot product and
  projections](../../geometry/level-8/05-dot-product.md). Lines on a flat page: [Slope and the equation of a
  line](../../geometry/level-6/06-slope-line-equation.md). Two equations in two unknowns: [Level 6](../level-6/index.md).
- At university, systems of equations are solved with matrices, and whether they have one, none or infinitely many
  solutions is explained by rank: [MAT240 Unit 7 (systems and elementary operations)](../../../uoft/MAT240H1/unit07.md)
  and [Unit 5 (rank and nullity)](../../../uoft/MAT240H1/unit05.md). The cross product's length is a determinant:
  [MAT240 Unit 8 (determinants)](../../../uoft/MAT240H1/unit08.md). The cross product in physics, for turning forces:
  [PHY131 Unit 8 (rotation)](../../../uoft/PHY131H1/unit08.md).
