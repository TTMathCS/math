---
title: "Beyond: Geometric proof and vectors"
---

# Beyond: Geometric proof and vectors

*Geometry · step 5 of 5*

## A question to start

Draw a circle and a line straight through its centre, from one side to the other. Now pick **any** point on the
circle and join it to the two ends of that line. Measure the angle at your point.

It is 90°. Pick another point: 90° again. Every point you try gives exactly a right angle. Trying a hundred points
would make you confident, but it would not make you **sure**: maybe the hundred-and-first point is different. A
**proof** makes you sure, for every point at once. This page shows how proofs work, then adds the last tool of
school geometry, the **vector**, which turns pictures into calculations.

## The idea

### What a proof is

A **proof** is a chain of steps. Each step follows from things already known: the facts you are given, definitions,
and results proved earlier. Nothing is taken on trust because "it looks right in the picture". A good habit is to
give every statement its **reason**.

Geometry's starting facts include the ones from earlier steps: angles on a straight line add to 180°, and where a
line crosses two parallel lines, **alternate angles are equal**. (That last fact rests on the *parallel
postulate*, one of the starting assumptions Euclid wrote down around 300 BC.)

### Proof 1: the angles of every triangle add to 180°

Take any triangle $ABC$. Through $C$ draw the line parallel to $AB$.

1. At $C$, three angles sit side by side along the new line: call them $x$, $\angle C$ and $y$.
   They make a straight line, so $x + \angle C + y = 180°$. *(Angles on a straight line.)*
2. $x = \angle A$. *(Alternate angles: $AC$ crosses the two parallel lines.)*
3. $y = \angle B$. *(Alternate angles: $BC$ crosses the two parallel lines.)*
4. Replacing $x$ and $y$: $\angle A + \angle B + \angle C = 180°$. ∎

The ∎ marks the end of a proof. Notice that this proves it for **every** triangle at once, because we never used any
particular sizes. This is the torn-corners experiment from the Explore step, turned into certainty.

### Proof 2: the angle in a semicircle is a right angle

This is the opening puzzle, and it is called **Thales' theorem**. Let the circle have centre $O$ and diameter $AB$,
and let $C$ be any other point on the circle. Join $O$ to $C$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 220" role="img" aria-label="A circle with centre O and diameter AB. A point C on the circle is joined to A, B and O, making two isosceles triangles with base angles x and y">
  <circle cx="150" cy="120" r="90" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="60,120 240,120 195,42.1" fill="#9cc9ea" opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="120" x2="195" y2="42.1" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="150" cy="120" r="3.5" fill="currentColor"/>
  <g font-size="15" fill="currentColor">
    <text x="42" y="126">A</text><text x="246" y="126">B</text><text x="196" y="34">C</text><text x="145" y="140">O</text>
    <text x="88" y="114" font-size="13">x</text><text x="214" y="114" font-size="13">y</text>
    <text x="174" y="62" font-size="13">x</text><text x="196" y="66" font-size="13">y</text>
  </g>
</svg>
</div>

1. $OA = OC = OB$. *(All are radii of the circle.)*
2. Triangle $AOC$ has two equal sides, so it is isosceles and its base angles are equal: call both $x$. Likewise
   triangle $BOC$ is isosceles: call both of its base angles $y$. *(Isosceles triangle.)*
3. The angles of the big triangle $ABC$ are $x$, $y$ and $x + y$ (the angle at $C$). They add to 180°:
   $2x + 2y = 180°$. *(Proof 1.)*
4. So $x + y = 90°$, and the angle at $C$ is a right angle. ∎

### Trigonometry on a circle

In the Master step, sine and cosine were ratios in a right triangle, so they only made sense for angles below 90°.
Here is a definition that works for **every** angle. Draw a circle of radius 1 (the **unit circle**) with its centre
at the origin. Start at the point $(1, 0)$ and turn anticlockwise through the angle $\theta$. The point you reach is

$$(\cos\theta,\ \sin\theta)$$

For angles between 0° and 90° this agrees with SOH CAH TOA, since the hypotenuse is 1. Beyond 90° it keeps working:
at 180° the point is $(-1, 0)$, so $\cos 180° = -1$. And because the point is 1 from the centre, Pythagoras gives
the most used identity in trigonometry:

$$\sin^2\theta + \cos^2\theta = 1$$

**Radians.** Mathematicians often measure angles not in degrees but by the **length of arc** they cut from the unit
circle. That measure is the angle in **radians**. A full turn cuts the whole circumference, $2\pi$, so

$$360° = 2\pi \text{ radians} \qquad 180° = \pi \text{ radians}$$

and a right angle is $\tfrac{\pi}{2}$. Radians make the formulas of calculus much simpler, which is why they are
used from then on.

### Vectors

Some quantities have only a size: a temperature, a mass, a length. Others have a size **and a direction**: a
rover's drive "200 m towards the north-east", a push, a wind. These are **vectors**. A vector is drawn as an arrow:
its length is the size and the way it points is the direction. Where the arrow starts does not matter, only its
length and direction.

On a grid a vector is written by its **components**, how far it goes across and how far up: $\vec{v} = (3, 4)$. A
vector of length $r$ pointing at angle $\theta$ has components $(r\cos\theta,\ r\sin\theta)$.

**Adding vectors:** place them **tip to tail**; the sum goes from the very start to the very end. In components,
just add: $(3, 1) + (1, 2) = (4, 3)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 180" role="img" aria-label="Vector addition: an arrow three across and one up, then from its tip an arrow one across and two up; the sum is an arrow from the start to the end, four across and three up">
  <defs>
    <marker id="geo-arrow-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <g stroke-width="3.5" marker-end="url(#geo-arrow-a)">
    <line x1="40" y1="160" x2="175" y2="115" stroke="#eea66f"/>
    <line x1="175" y1="115" x2="220" y2="25" stroke="#9cc9ea"/>
    <line x1="40" y1="160" x2="220" y2="25" stroke="#7ccf9a"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="112" y="155">(3, 1)</text><text x="206" y="78">(1, 2)</text><text x="76" y="92">(4, 3)</text>
  </g>
</svg>
</div>

**Multiplying by a number** (a **scalar**) stretches the arrow: $2\vec v$ is twice as long in the same direction,
$-\vec v$ points the opposite way. In components, $2(3, 4) = (6, 8)$.

**Length:** by Pythagoras, the length (or **magnitude**) of $\vec v = (a, b)$ is $|\vec v| = \sqrt{a^2 + b^2}$.

**The dot product** of $\vec u = (u_1, u_2)$ and $\vec v = (v_1, v_2)$ is a number:

$$\vec u \cdot \vec v = u_1 v_1 + u_2 v_2 = |\vec u|\,|\vec v|\cos\theta$$

where $\theta$ is the angle between the arrows. (The second form comes from the cosine law.) It finds angles
between directions, and gives a fast test: two vectors (neither of length zero) are **perpendicular** exactly
when their dot product is 0, since $\cos 90° = 0$.

### Proof 3: a proof with vectors

**The midpoint theorem.** In any triangle, the line joining the midpoints of two sides is parallel to the third side
and half as long.

Put one corner $O$ at the origin, and let the other corners be at the ends of vectors $\vec a$ and $\vec b$. The
midpoints of the two sides from $O$ are at $\tfrac12\vec a$ and $\tfrac12\vec b$.

1. The third side goes from $\vec a$ to $\vec b$: it is the vector $\vec b - \vec a$.
2. The line between the midpoints is $\tfrac12\vec b - \tfrac12\vec a = \tfrac12(\vec b - \vec a)$.
3. That is half of the third side, pointing the same way: parallel and half as long. ∎

Three lines of algebra replaced a page of angle-chasing. That is the power of vectors.

## Worked examples

**1. Where is the rover?** A rover drives 300 m due east, then turns and drives 200 m in the direction 60°
anticlockwise from east. How far is it from its start, and in which direction?

1. First leg: $(300, 0)$. Second leg: $(200\cos 60°,\ 200\sin 60°) = (100,\ 173.2)$.
2. Add: $(400,\ 173.2)$.
3. Distance: $\sqrt{400^2 + 173.2^2} \approx 435.9$ m.
4. Direction: $\tan\theta = \dfrac{173.2}{400}$, so $\theta \approx 23.4°$ anticlockwise from east (north of east).

**2. The angle between $(3, 4)$ and $(5, -1)$.**

1. Dot product: $3 \times 5 + 4 \times (-1) = 11$.
2. Lengths: $\sqrt{9 + 16} = 5$ and $\sqrt{25 + 1} = \sqrt{26}$.
3. $\cos\theta = \dfrac{11}{5\sqrt{26}} \approx 0.431$, so $\theta \approx 64.4°$.

## Try it

1. Two straight lines cross. Prove that the vertically opposite angles are equal, giving a reason for each step.
2. Write 90° and 270° in radians, and $\tfrac{2\pi}{3}$ radians in degrees.
3. Let $\vec u = (2, -1)$ and $\vec v = (3, 4)$. Find $\vec u + \vec v$, $3\vec u - \vec v$ and $|\vec v|$.
4. Are $(2, 3)$ and $(6, -4)$ perpendicular?
5. Find the angle between $(1, 0)$ and $(1, 1)$.
6. $AB$ is a diameter of a circle and $C$ is on the circle, with $AC = 6$ and $BC = 8$. Find the radius.

??? note "Answers"
    1. Call the four angles $p, q, r, s$ going round, so $p$ and $r$ are opposite. $p + q = 180°$ (angles on a
       straight line). $q + r = 180°$ (angles on the other straight line). So $p + q = q + r$, and taking $q$ from
       both sides, $p = r$. ∎ The same argument shows $q = s$.
    2. $90° = \tfrac{\pi}{2}$ and $270° = \tfrac{3\pi}{2}$. $\tfrac{2\pi}{3}$ is two thirds of $180°$, which is $120°$.
    3. $\vec u + \vec v = (5, 3)$. $3\vec u - \vec v = (6, -3) - (3, 4) = (3, -7)$. $|\vec v| = \sqrt{9 + 16} = 5$.
    4. Yes: $2 \times 6 + 3 \times (-4) = 12 - 12 = 0$.
    5. Dot product $1$; lengths $1$ and $\sqrt2$; $\cos\theta = \tfrac{1}{\sqrt2}$, so $\theta = 45°$.
    6. By Thales' theorem the angle at $C$ is $90°$, so $AB$ is the hypotenuse: $AB = \sqrt{36 + 64} = 10$. The
       radius is half the diameter: 5.

## Common mistake

**Proving from a picture.** A diagram can mislead: a triangle that looks isosceles, or lines that look parallel, may
not be. Every step of a proof must come from what you were told or what has been proved, never from how the
drawing happens to look. A useful test: draw a second, deliberately lopsided picture. If your argument still works
on it, you used reasons, not appearances.

## Where it leads

- Back a step: [Master: similar triangles and trigonometry](04-master.md)
- How proofs work in general, including proof by contradiction: [Logic and puzzles](../logic/index.md).
- Turning by an angle as multiplication: the complex numbers in [Numbers](../numbers/05-beyond.md).
- Velocity and force as vectors, on the U of T shelf: [PHY131 Unit 1 (units, vectors and estimation)](../../uoft/PHY131H1/unit01.md).
- Vectors in any number of dimensions, the subject called linear algebra:
  [MAT240 Unit 1 (fields and vector spaces)](../../uoft/MAT240H1/unit01.md).
- Proof as the heart of university mathematics: [MAT137 Unit 1 (logic, sets and proofs)](../../uoft/MAT137/unit01.md).
- The other topics: [all topics](../index.md).
