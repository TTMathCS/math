---
title: "Circle theorems"
---

# Circle theorems

*Geometry · level 7, lesson 6 of 7*

## A question to start

Pin two nails into a board and hold a set square (a stiff right-angled triangle) so that its two edges press against
the nails. Slide it around, always touching both nails, and mark where the corner of the right angle goes. The marks
trace out a perfect **circle**, with the nails at the two ends of a diameter.

Do it again with a stiff 60° angle instead, and the corner traces out an **arc** of a different circle. Any fixed
angle sliding against two nails traces part of a circle. This lesson explains why, with a handful of facts about
circles that all grow from one theorem.

## The idea

### Words for the parts of a circle

- A **chord** is a straight line joining two points of the circle. The longest chords are **diameters**, which pass
  through the centre $O$.
- An **arc** is a piece of the circle itself between two points. Two points cut the circle into a shorter **minor
  arc** and a longer **major arc**.
- A chord cuts the inside of the circle into two **segments** (like slices of a round loaf cut by one straight cut).
- An angle **subtends** an arc (or chord) when its two arms run to the ends of that arc. "Stands on" means the same.
- An **inscribed angle** (or angle at the circumference) has its corner on the circle. An **angle at the centre**
  has its corner at $O$.
- A **tangent** is a line that touches the circle at exactly one point.
- A **cyclic quadrilateral** is a four-sided shape whose four corners all lie on one circle.

### One tool from before

The **exterior angle** of a triangle (made by stretching one side beyond a corner) equals the sum of the two
interior angles at the other corners. Reason: the exterior angle and the interior angle next to it add to 180°
(straight line), and so do all three interior angles; take away the shared angle from both and what is left is equal.

### Theorem 1: the angle at the centre is twice the angle at the circumference

**Statement.** If an angle at the centre and an inscribed angle stand on the same arc, the angle at the centre is
twice the inscribed angle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 230" role="img" aria-label="A circle with centre O. Points A and B are low on the circle and P is at the top. Angle APB at the circumference stands on the arc AB, and so does angle AOB at the centre. The line from P through O is extended to Q, splitting the figure into two isosceles triangles">
  <circle cx="160" cy="115" r="90" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="144.4,26.4 91.1,172.9 160,115" fill="#9cc9ea" opacity="0.45" stroke="none"/>
  <polygon points="144.4,26.4 228.9,172.9 160,115" fill="#7ccf9a" opacity="0.45" stroke="none"/>
  <g stroke="currentColor" stroke-width="2" fill="none">
    <line x1="144.4" y1="26.4" x2="91.1" y2="172.9"/>
    <line x1="144.4" y1="26.4" x2="228.9" y2="172.9"/>
    <line x1="160" y1="115" x2="91.1" y2="172.9"/>
    <line x1="160" y1="115" x2="228.9" y2="172.9"/>
  </g>
  <line x1="144.4" y1="26.4" x2="175.6" y2="203.6" stroke="#eea66f" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="160" cy="115" r="3.5" fill="currentColor"/>
  <g font-size="15" fill="currentColor">
    <text x="138" y="18">P</text><text x="74" y="186">A</text><text x="234" y="186">B</text>
    <text x="166" y="112">O</text><text x="172" y="222">Q</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="128" y="60">x</text><text x="152" y="60">y</text>
    <text x="104" y="160">x</text><text x="210" y="160">y</text>
  </g>
</svg>
</div>

**Proof** (when $O$ is inside the angle $APB$, as drawn). Join $P$ to $O$ and extend the line to $Q$ on the far side.

1. $OA = OP = OB$. *(All are radii.)*
2. So triangle $AOP$ is isosceles, and its base angles are equal: call them $x$. Likewise in triangle $BOP$: call
   them $y$. *(Base angles of an isosceles triangle.)*
3. Angle $AOQ$ is an exterior angle of triangle $AOP$, so $\angle AOQ = x + x = 2x$. *(Exterior angle.)*
   Likewise $\angle BOQ = 2y$.
4. So $\angle AOB = 2x + 2y = 2(x + y) = 2\angle APB$. ∎

If $O$ falls outside the angle $APB$, the same steps work with a subtraction: $\angle AOB = 2y - 2x = 2(y - x)$. The
theorem also holds when the inscribed angle stands on a major arc; then the "angle at the centre" is a reflex angle
(more than 180°).

Everything else in this lesson follows from Theorem 1.

### Theorem 2: angles in the same segment are equal

Take two points $A$ and $B$ on a circle, and any two points $P$ and $R$ on the same side of the chord $AB$ (the same
segment). Both $\angle APB$ and $\angle ARB$ are half of the same angle $\angle AOB$, so they are equal.

That explains the opening experiment, turned around: every point of the arc sees the chord $AB$ at the same angle. A
fixed angle sliding against two nails must therefore stay on one arc.

### Theorem 3: the angle in a semicircle is a right angle

If $AB$ is a diameter, the "angle at the centre" $\angle AOB$ is a straight line, 180°. So any inscribed angle
standing on the diameter is $\tfrac12 \times 180° = 90°$. This is **Thales' theorem**, and it is the set square
tracing the full circle.

### Theorem 4: opposite angles of a cyclic quadrilateral add to 180°

Let $ABCD$ be cyclic. The angles at $A$ and $C$ stand on the two arcs $BD$, one on each side. The two angles at the
centre for those arcs together go all the way round $O$: they add to 360°. Halve both: $\angle A + \angle C = 180°$.
The same goes for $\angle B + \angle D$.

The **converse** is also true (stated here without proof): if a quadrilateral's opposite angles add to 180°, its
corners lie on a circle.

### Theorem 5: a tangent meets the radius at a right angle

Let a line touch the circle only at $T$. Suppose, to see what goes wrong, that the radius $OT$ were **not**
perpendicular to the line. Then drop the perpendicular from $O$ to the line, meeting it at $F$, a different point from
$T$. Reflect $T$ in $F$ to get the point $T'$ on the line, on the other side of $F$, with $FT' = FT$. The triangles
$OFT$ and $OFT'$ are mirror images, so $OT' = OT = r$. Then $T'$ is also on the circle, and the line meets the circle
twice. That contradicts "tangent". So $OT$ must be perpendicular to the tangent. ∎

(This style of argument, assuming the opposite and reaching something impossible, is called **proof by
contradiction**. It returns in [level 8](../level-8/01-geometric-proof.md).)

### Theorem 6: two tangents from a point are equal

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="A circle with centre O and an outside point P. Two tangents from P touch the circle at T1 and T2. The radii OT1 and OT2 meet the tangents at right angles, and the tangent lengths PT1 and PT2 are equal">
  <circle cx="110" cy="100" r="60" fill="#9cc9ea" opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="100" x2="130" y2="43.4" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="290" y1="100" x2="130" y2="156.6" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="110" y1="100" x2="130" y2="43.4" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="100" x2="130" y2="156.6" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="100" x2="290" y2="100" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <polyline points="126.7,52.8 136.1,56.2 139.4,46.7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="126.7,147.2 136.1,143.8 139.4,153.3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="110" cy="100" r="3" fill="currentColor"/>
  <g font-size="14" fill="currentColor">
    <text x="94" y="104">O</text><text x="296" y="105">P</text><text x="122" y="34">T₁</text><text x="122" y="176">T₂</text>
  </g>
</svg>
</div>

By Theorem 5, triangles $OT_1P$ and $OT_2P$ both have right angles at $T_1$ and $T_2$. They share the hypotenuse $OP$
and have equal legs $OT_1 = OT_2 = r$. By Pythagoras, $PT_1^2 = OP^2 - r^2 = PT_2^2$, so $PT_1 = PT_2$. The two
triangles are congruent, so $OP$ also cuts the angle at $P$ exactly in half.

## Worked examples

**1. Centre and circumference.** $A$, $B$, $P$ are on a circle with centre $O$, and $\angle AOB = 130°$ (with $P$ on
the major arc). Find $\angle APB$.
By Theorem 1, $\angle APB = \tfrac12 \times 130° = 65°$.

**2. A cyclic quadrilateral.** $ABCD$ is cyclic with $\angle A = 85°$ and $\angle B = 110°$. Find $\angle C$ and
$\angle D$.
Opposite angles add to 180° (Theorem 4): $\angle C = 180° - 85° = 95°$ and $\angle D = 180° - 110° = 70°$. Check: all
four add to $85 + 110 + 95 + 70 = 360°$, as in any quadrilateral.

**3. Tangents.** A point $P$ is 13 cm from the centre of a circle of radius 5 cm. Find the length of each tangent
from $P$, and the angle between the two tangents.

1. Right angle at the touching point (Theorem 5): tangent length $= \sqrt{13^2 - 5^2} = \sqrt{144} = 12$ cm.
2. In the right triangle, $\sin(\angle OPT) = \dfrac{5}{13}$, so $\angle OPT \approx 22.6°$.
3. $OP$ halves the angle at $P$ (Theorem 6), so the angle between the tangents is about $2 \times 22.6° = 45.2°$.

**4. An angle chase.** $AB$ is a diameter and $C$ is on the circle with $\angle CAB = 34°$. Another point $D$ is on
the circle on the same side of the chord $AC$ as $B$. Find $\angle ACB$, $\angle ABC$ and $\angle ADC$.

1. $AB$ is a diameter, so $\angle ACB = 90°$. *(Theorem 3.)*
2. In triangle $ABC$: $\angle ABC = 180° - 90° - 34° = 56°$. *(Angle sum.)*
3. $\angle ADC$ and $\angle ABC$ both stand on the chord $AC$ from the same side: $\angle ADC = 56°$. *(Theorem 2.)*

## Try it

1. An inscribed angle of 38° stands on an arc. What is the angle at the centre on the same arc?
2. $ABCD$ is a cyclic quadrilateral with $\angle A = 3x$ and $\angle C = 2x + 20°$. Find $x$ and both angles.
3. A tangent from a point $P$ to a circle of radius 7 has length 24. How far is $P$ from the centre?
4. $AB$ is a diameter of length 10 and $C$ is on the circle with $AC = 6$. Find $BC$ and the area of triangle $ABC$.
5. In a circle with centre $O$, the chord $AB$ has $\angle OAB = 25°$. Find $\angle AOB$, then the inscribed angle at a
   point $P$ on the major arc, and at a point $Q$ on the minor arc.
6. Prove that if two chords $AC$ and $BD$ of a circle cross at $X$, then triangles $AXB$ and $DXC$ are similar. Deduce
   that $AX \times XC = BX \times XD$.
7. Prove the hidden meaning of the sine law from [lesson 4](04-sine-law.md): in triangle $ABC$ with acute angle
   $A$, inscribed in a circle of radius $R$, $\dfrac{a}{\sin A} = 2R$. (Hint: draw the diameter from $B$.)

??? note "Answers"
    1. $2 \times 38° = 76°$.
    2. $3x + 2x + 20° = 180°$, so $5x = 160°$ and $x = 32°$. $\angle A = 96°$ and $\angle C = 84°$.
    3. The radius meets the tangent at 90°: $OP = \sqrt{7^2 + 24^2} = \sqrt{625} = 25$.
    4. $\angle ACB = 90°$ (semicircle), so $BC = \sqrt{100 - 36} = 8$, and the area is $\tfrac12 \times 6 \times 8 = 24$.
    5. $OA = OB$, so $\angle OBA = 25°$ and $\angle AOB = 180° - 50° = 130°$. At $P$ on the major arc:
       $\tfrac12 \times 130° = 65°$. $APBQ$ is a cyclic quadrilateral, so at $Q$: $180° - 65° = 115°$.
    6. $\angle BAC = \angle BDC$: both stand on the chord $BC$ from the same side (Theorem 2). So
       $\angle BAX = \angle CDX$. Also $\angle AXB = \angle DXC$ (vertically opposite angles). By AA, triangles $AXB$
       and $DXC$ are similar. Matching sides: $\dfrac{AX}{DX} = \dfrac{BX}{CX}$, and cross-multiplying gives
       $AX \times XC = BX \times XD$. ∎ (This is called the **intersecting chords theorem**.)
    7. Draw the diameter $BD$, so $BD = 2R$. Since $A$ is acute, $D$ lies on the same arc as $A$, so
       $\angle BDC = \angle BAC = A$ (Theorem 2). Also $\angle BCD = 90°$ (Theorem 3). In the right triangle $BCD$:
       $\sin A = \sin(\angle BDC) = \dfrac{BC}{BD} = \dfrac{a}{2R}$. So $\dfrac{a}{\sin A} = 2R$. ∎ (If $A$ is obtuse,
       $D$ lies on the other arc, $\angle BDC = 180° - A$ by Theorem 4, and $\sin(180° - A) = \sin A$ gives the same
       result.)

## Common mistake

**Using a theorem whose conditions are not met.** "Angles in the same segment" needs both angles to stand on the
**same chord** from the **same side**. "Opposite angles add to 180°" needs all **four** corners on the circle; a
quadrilateral with a corner at the centre is not cyclic. Before writing a theorem's name as a reason, check every
point it mentions is where it should be.

**Halving the wrong way.** The angle at the **centre** is the bigger one. If the centre angle is 80°, the inscribed
angle is 40°, not 160°.

## Where it leads

- Previous lesson: [The cosine law; solving any triangle](05-cosine-law.md). Next lesson:
  [Equations of circles](07-circle-equations.md), where circles meet algebra.
- The level page: [Level 7: Similarity and trigonometry](index.md).
- How to write these proofs carefully, step by step with reasons:
  [How to write a geometric proof](../level-8/01-geometric-proof.md).
- Thales' theorem proved with vectors in one line: [The dot product](../level-8/05-dot-product.md).
- Proof by contradiction and other ways to argue: [Logic and puzzles](../../logic/index.md), and on the U of T shelf
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
