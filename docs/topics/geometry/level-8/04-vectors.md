---
title: "Vectors: adding, scaling, length, components"
---

# Vectors: adding, scaling, length, components

*Geometry · level 8, lesson 4 of 6*

## A question to start

A swimmer heads straight across a river, swimming at 1 metre per second. The river flows downstream at 1 metre per
second. Where does she end up, and how fast is she actually moving?

Not 2 metres per second, and not straight across. She moves at about 1.41 metres per second, diagonally, landing as
far downstream as the river is wide. Adding a speed "across" to a speed "along" does not work like adding ordinary
numbers, because each one has a **direction**. Quantities like these are called **vectors**, and they have their own
arithmetic. It is the arithmetic of navigation, forces, winds and flight, and it turns many geometry problems into
short calculations.

## The idea

### Scalars and vectors

A **scalar** is a quantity that is just a size: a temperature of 20°C, a mass of 3 kg, a distance of 5 km. A **vector**
has a size **and** a direction: "5 km towards the north-east", a push of 10 newtons downwards, a wind of 30 km/h from
the west. Speed is a scalar; **velocity** (speed in a direction) is a vector.

A vector is drawn as an arrow. Its length shows the size, which is called the **magnitude**, and its arrowhead shows
the direction. Names are written with an arrow on top, $\vec v$, or in bold, $\mathbf{v}$. The arrow from point $A$ to
point $B$ is written $\overrightarrow{AB}$.

**Where the arrow starts does not matter.** Two arrows with the same length and the same direction are the **same
vector**, wherever they are drawn. "Walk 3 km north" is the same instruction whether you start in Toronto or on Mars.

### Components

On a grid, a vector is described by how far it goes **across** and how far **up**: its **components**. We write
$\vec v = (3, 4)$ for "3 across and 4 up" (some books write it as a column, or as $3\hat\imath + 4\hat\jmath$, where
$\hat\imath = (1, 0)$ and $\hat\jmath = (0, 1)$ are the unit steps along the axes).

From the components, Pythagoras gives the magnitude:

$$|\vec v| = \sqrt{v_1^2 + v_2^2} \qquad \text{so} \qquad |(3, 4)| = \sqrt{9 + 16} = 5$$

From a magnitude $r$ and a direction angle $\theta$ (measured anticlockwise from the positive $x$-axis), the unit
circle of [lesson 2](02-radians-unit-circle.md) gives the components:

$$\vec v = (r\cos\theta,\ r\sin\theta)$$

because the unit circle point $(\cos\theta, \sin\theta)$ has length 1 and the right direction, and multiplying by $r$
stretches it to length $r$. To go back from components to an angle, use $\tan\theta = \dfrac{v_2}{v_1}$, but check the
quadrant from the signs, since $\tan^{-1}$ only returns angles between $-90°$ and $90°$.

### Adding vectors

To add $\vec u + \vec v$, place them **tip to tail**: draw $\vec u$, then start $\vec v$ where $\vec u$ ends. The sum,
also called the **resultant**, is the arrow from the very start to the very end. It is the single trip that does the
same as the two trips one after the other.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 280 180" role="img" aria-label="Vector addition as a parallelogram. u equals (3, 1) and v equals (1, 2). Going u then v, or v then u, reaches the same point, and the diagonal from the start, u plus v, equals (4, 3)">
  <defs>
    <marker id="vec4-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <g stroke-width="2" stroke-dasharray="5 4" opacity="0.7">
    <line x1="40" y1="160" x2="85" y2="70" stroke="#9cc9ea"/>
    <line x1="85" y1="70" x2="220" y2="25" stroke="#eea66f"/>
  </g>
  <g stroke-width="3.5" marker-end="url(#vec4-arrow)">
    <line x1="40" y1="160" x2="175" y2="115" stroke="#eea66f"/>
    <line x1="175" y1="115" x2="220" y2="25" stroke="#9cc9ea"/>
    <line x1="40" y1="160" x2="220" y2="25" stroke="#7ccf9a"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="104" y="158">u = (3, 1)</text><text x="204" y="84">v = (1, 2)</text><text x="72" y="104">u + v = (4, 3)</text>
  </g>
</svg>
</div>

In components, you simply add across to across and up to up:

$$(u_1, u_2) + (v_1, v_2) = (u_1 + v_1,\ u_2 + v_2)$$

Why? The total distance across is the across part of the first trip plus the across part of the second, and the same
for up. The drawing also shows that $\vec u + \vec v = \vec v + \vec u$: going $\vec u$ then $\vec v$ or $\vec v$ then
$\vec u$ goes round the two sides of a **parallelogram** to the same corner. For this reason the sum is also called the
**parallelogram law**.

**The magnitudes do not simply add.** $|(3, 1)| + |(1, 2)| \approx 3.16 + 2.24 = 5.40$, but $|(4, 3)| = 5$. The straight
trip is never longer than the two-leg trip: $|\vec u + \vec v| \le |\vec u| + |\vec v|$, the **triangle inequality**,
with equality only when the two point the same way.

### Scaling and subtracting

Multiplying a vector by a number $k$ (a **scalar**) multiplies its length by $|k|$, keeping the direction if $k > 0$
and reversing it if $k < 0$. In components, $k(v_1, v_2) = (kv_1, kv_2)$. So $2(3, 4) = (6, 8)$, twice as long; and
$-\vec v$ is the same length pointing the opposite way.

Two non-zero vectors are **parallel** exactly when one is a scalar multiple of the other.

Subtraction is adding the opposite: $\vec u - \vec v = \vec u + (-\vec v)$. It has a picture worth remembering: if two
arrows start at the same point, $\vec u - \vec v$ is the arrow **from the tip of $\vec v$ to the tip of $\vec u$**
(because $\vec v + (\vec u - \vec v) = \vec u$).

A **unit vector** has length 1. Dividing any non-zero vector by its length gives the unit vector in its direction:
$\hat v = \dfrac{\vec v}{|\vec v|}$. For $(3, 4)$ that is $\left(\tfrac35, \tfrac45\right)$.

### Position vectors

Fix an origin $O$. Every point $A$ then has a **position vector** $\vec a = \overrightarrow{OA}$, whose components are
just $A$'s coordinates. The arrow from $A$ to $B$ is "back from $A$ to $O$, then out to $B$":

$$\overrightarrow{AB} = \vec b - \vec a$$

The **midpoint** of $AB$ is halfway along: $\vec a + \tfrac12(\vec b - \vec a) = \tfrac12(\vec a + \vec b)$. This is the
midpoint formula from [level 6](../level-6/03-distance-midpoint.md), now with a reason behind it.

### Three dimensions

In space, a vector has three components, $(v_1, v_2, v_3)$: across, along and up. Everything above works the same,
and the length comes from Pythagoras used twice (the diagonal of a box):

$$|\vec v| = \sqrt{v_1^2 + v_2^2 + v_3^2}$$

## Worked examples

**1. Where is the rover?** A rover drives 300 m due east, then turns and drives 200 m in the direction 60°
anticlockwise from east. How far is it from its start, and in which direction?

1. First leg: $(300, 0)$. Second leg: $(200\cos 60°,\ 200\sin 60°) = (100,\ 173.2)$.
2. Add: $(400,\ 173.2)$.
3. Distance: $\sqrt{400^2 + 173.2^2} \approx 435.9$ m.
4. Direction: $\tan\theta = \dfrac{173.2}{400}$, so $\theta \approx 23.4°$ north of east.
5. Check with the cosine law of [level 7](../level-7/05-cosine-law.md): the angle between the legs at the turn is
   $180° - 60° = 120°$, and $\sqrt{300^2 + 200^2 - 2 \times 300 \times 200\cos 120°} = \sqrt{190\,000} \approx 435.9$. They agree.

**2. Crossing a river.** A boat points straight across a river 120 m wide, moving at 4 m/s through the water. The
current flows at 1.5 m/s downstream. Find the boat's real velocity, the crossing time and how far downstream it lands.

1. Take "across" as the $y$-direction and "downstream" as $x$: boat $(0, 4)$, current $(1.5, 0)$, sum $(1.5, 4)$.
2. Speed $\sqrt{1.5^2 + 4^2} = \sqrt{18.25} \approx 4.27$ m/s, at $\tan^{-1}\tfrac{1.5}{4} \approx 20.6°$ off the straight-across line.
3. Only the across part gets it over: time $= \tfrac{120}{4} = 30$ s.
4. In that time the current carries it $1.5 \times 30 = 45$ m downstream.

**3. Calculating with components.** Let $\vec u = (2, -1)$ and $\vec v = (3, 4)$.

1. $\vec u + \vec v = (5, 3)$.
2. $3\vec u - 2\vec v = (6, -3) - (6, 8) = (0, -11)$.
3. $|\vec u - \vec v| = |(-1, -5)| = \sqrt{1 + 25} = \sqrt{26} \approx 5.10$.
4. Unit vector along $\vec v$: $\tfrac15(3, 4) = (0.6,\ 0.8)$.

**4. A proof with vectors.** Prove that the diagonals of a parallelogram cut each other in half.

1. Let the parallelogram be $OABC$ with $O$ at the origin, $\overrightarrow{OA} = \vec a$ and $\overrightarrow{OC} = \vec c$.
   Opposite sides of a parallelogram are equal and parallel, so $\overrightarrow{AB} = \vec c$ and $B$ is at $\vec a + \vec c$.
2. The midpoint of diagonal $OB$ is $\tfrac12(\vec a + \vec c)$.
3. The midpoint of diagonal $AC$ is $\tfrac12(\vec a + \vec c)$, by the midpoint formula.
4. They are the same point, so each diagonal passes through the other's midpoint. ∎

Compare this with a proof by congruent triangles: the vector proof needs no diagram-reading at all.

## Try it

1. Let $\vec u = (-3, 5)$ and $\vec v = (4, 1)$. Find $\vec u + \vec v$, $2\vec u - 3\vec v$ and $|\vec v|$.
2. $A = (1, 2)$ and $B = (7, -6)$. Find $\overrightarrow{AB}$, its length, and the midpoint of $AB$.
3. A force of 50 newtons acts in the direction 210° (anticlockwise from the positive $x$-axis). Find its components.
4. For which $k$ is $(k, 6)$ parallel to $(2, 3)$?
5. A plane heads due north at 250 km/h through the air, and a wind blows towards the east at 60 km/h. Find its speed
   over the ground and its direction.
6. Find the unit vector in the direction of $(5, -12)$.
7. Prove with vectors that the segment joining the midpoints of two sides of a triangle is parallel to the third side
   and half as long.
8. Find the distance between the points $(1, 2, 3)$ and $(4, 6, 15)$ in space.

??? note "Answers"
    1. $\vec u + \vec v = (1, 6)$. $2\vec u - 3\vec v = (-6, 10) - (12, 3) = (-18, 7)$. $|\vec v| = \sqrt{16 + 1} = \sqrt{17} \approx 4.12$.
    2. $\overrightarrow{AB} = (7 - 1, -6 - 2) = (6, -8)$, with length $\sqrt{36 + 64} = 10$. Midpoint
       $\tfrac12\big((1, 2) + (7, -6)\big) = (4, -2)$.
    3. $(50\cos 210°,\ 50\sin 210°) = \left(-25\sqrt3,\ -25\right) \approx (-43.3,\ -25)$. Both negative: it points down
       and to the left, in quadrant III, as 210° should.
    4. $(k, 6) = t(2, 3)$ needs $3t = 6$, so $t = 2$ and $k = 2t = 4$.
    5. $(60, 250)$ in (east, north): speed $\sqrt{60^2 + 250^2} = \sqrt{66\,100} \approx 257$ km/h, at
       $\tan^{-1}\tfrac{60}{250} \approx 13.5°$ east of north.
    6. $|(5, -12)| = 13$, so the unit vector is $\left(\tfrac{5}{13}, -\tfrac{12}{13}\right)$.
    7. Put one corner at $O$ and the others at $\vec a$ and $\vec b$. The midpoints of the two sides from $O$ are
       $\tfrac12\vec a$ and $\tfrac12\vec b$. The segment between them is $\tfrac12\vec b - \tfrac12\vec a = \tfrac12(\vec b - \vec a)$,
       which is half of the third side $\vec b - \vec a$, in the same direction: parallel and half as long. ∎
    8. The vector between them is $(3, 4, 12)$, with length $\sqrt{9 + 16 + 144} = \sqrt{169} = 13$.

## Common mistake

**Adding magnitudes.** A 3 km walk and a 4 km walk at right angles take you 5 km from the start, not 7. Add the
**components**, then find the length.

**Losing the quadrant.** For $(-3, -3)$, $\tan^{-1}\tfrac{-3}{-3} = \tan^{-1} 1 = 45°$, but the vector points down and
left, at 225°. Always check the signs of the components against the angle you report.

## Where it leads

- Previous lesson: [Graphs of sine and cosine](03-sine-cosine-graphs.md). Next lesson:
  [The dot product and projections](05-dot-product.md), which multiplies two vectors to find the angle between them.
- The level page: [Level 8: Proof, radians and vectors](index.md).
- Coordinates, distance and midpoints: [Distance and midpoint](../level-6/03-distance-midpoint.md).
- Velocity and force as vectors on the U of T shelf: [PHY131 Unit 1 (units, vectors and estimation)](../../../uoft/PHY131H1/unit01.md)
  and [PHY131 Unit 3 (motion in two dimensions)](../../../uoft/PHY131H1/unit03.md).
- Vectors in any number of dimensions, the subject called linear algebra:
  [MAT240 Unit 1 (fields and vector spaces)](../../../uoft/MAT240H1/unit01.md).
