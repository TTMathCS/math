---
title: "Circle words"
---

# Circle words

*Geometry · level 5, lesson 6 of 6*

## A question to start

A wheel rolls along flat ground. At every moment it touches the ground at exactly one point. Where is that point,
compared with the axle in the middle of the wheel?

"Straight underneath" feels obvious, and it is right. But **why**? The answer is one of the most useful facts about
circles: a line that just touches a circle always meets the radius at a perfect right angle. The same fact tells a
rover on Mars which way is "straight down" through its wheel, lets you find the centre of a broken plate, and later
lets you work out how far you can see to the horizon. Before we can say it properly, we need the words.

## The idea

### What a circle is

A **circle** is the set of all points that are the same distance from one fixed point. The fixed point is the
**centre**, usually called $O$. The fixed distance is the **radius**, $r$.

This is a precise definition, and it is exactly what a compass does: the point stays on $O$, the pencil stays $r$
away. Notice that the circle is only the **curve**, not the inside. The flat region inside, together with the curve,
is called a **disc**, though in everyday speech people say "the area of a circle" and mean the disc.

### The parts of a circle

<div class="pattern-row" markdown="0">
<svg viewBox="20 10 260 200" role="img" aria-label="A circle with centre O showing a radius, a horizontal diameter, a chord at the lower left, a shaded sector at the lower right, and a tangent line touching the top of the circle">
  <path d="M 130 110 L 205.2 137.4 A 80 80 0 0 1 157.4 185.2 Z" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1"/>
  <path d="M 102.6 185.2 A 80 80 0 0 1 54.8 137.4 Z" fill="#7ccf9a" fill-opacity="0.6"/>
  <circle cx="130" cy="110" r="80" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="50" y1="110" x2="210" y2="110" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="130" y1="110" x2="199.3" y2="70" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="102.6" y1="185.2" x2="54.8" y2="137.4" stroke="currentColor" stroke-width="2"/>
  <line x1="60" y1="30" x2="200" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="30" x2="130" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <rect x="130" y="30" width="9" height="9" fill="none" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor"><circle cx="130" cy="110" r="3"/><circle cx="130" cy="30" r="3"/></g>
  <g font-size="12" fill="currentColor">
    <text x="118" y="126">O</text><text x="204" y="26">tangent</text><text x="168" y="80">radius</text>
    <text x="214" y="114">diameter</text><text x="30" y="172">chord</text><text x="60" y="202">segment</text>
    <text x="214" y="168">sector</text><text x="135" y="24">T</text>
  </g>
</svg>
</div>

- A **radius** is a segment from the centre to the circle. (Plural: **radii**.) All radii of one circle are equal;
  that is the definition again.
- A **chord** is a segment joining two points of the circle.
- A **diameter** is a chord through the centre. It is made of two radii in a straight line, so $d = 2r$.
- The **circumference** is the distance all the way round. (Level 6 shows it is $\pi d$.)
- An **arc** is a piece of the circle between two points. Two points cut the circle into a shorter **minor arc** and
  a longer **major arc**. If the two points are the ends of a diameter, both arcs are **semicircles**.
- A **central angle** is an angle with its vertex at the centre, like $\angle AOB$. The arc between $A$ and $B$ is
  said to **subtend** that angle (to "stand under" it). A whole turn is 360°, so a minor arc's central angle is
  less than 180° and the two arcs' angles add to 360°.
- A **sector** is the region between two radii and their arc, shaped like a slice of pizza (orange).
- A **segment** is the region between a chord and its arc (green). Watch out: "segment" also means a piece of a
  line. Context tells you which.
- A **tangent** is a line that touches the circle at exactly **one** point, the **point of tangency** ($T$ above).
- A **secant** is a line that cuts through the circle at **two** points. A secant contains a chord.
- **Concentric** circles share a centre, like the rings of a target.

A line and a circle can meet in 0, 1 or 2 points, never 3 (try-it question 8 shows why). One point: tangent. Two:
secant. None: the line misses.

### Fact 1: the diameter is the longest chord

Take any chord $AB$ that does not pass through $O$. Then $O$, $A$, $B$ form a triangle, and by the triangle
inequality from [lesson 2](02-constructing-triangles.md), $AB < OA + OB = r + r = d$. A chord through the centre has
length exactly $d$. So no chord is longer than the diameter.

### Fact 2: the perpendicular from the centre bisects a chord

Let $AB$ be a chord and drop a perpendicular from $O$ to it, meeting it at $M$. Triangles $OMA$ and $OMB$ both have a
right angle at $M$, equal hypotenuses $OA = OB$ (radii), and the shared side $OM$. By RHS
([lesson 5](05-congruent-triangles.md)) they are congruent, so $AM = MB$: $M$ is the midpoint of the chord.

The reverse is just as useful: **the perpendicular bisector of any chord passes through the centre.** Reason: the
centre is the same distance from $A$ and $B$, and the perpendicular bisector is exactly the set of such points. That
is how you find the centre of a circle you only have a piece of: draw two chords, construct their perpendicular
bisectors, and the centre is where they cross.

### Fact 3: equal chords make equal central angles

If chords $AB$ and $CD$ are equal, triangles $OAB$ and $OCD$ have all three sides equal ($OA = OB = OC = OD = r$), so
by SSS they are congruent and $\angle AOB = \angle COD$. The reverse holds by SAS. Equal chords, equal arcs, equal
central angles all go together.

Every triangle with two radii as sides is **isosceles**, so its two base angles are equal. Many circle puzzles are
solved by spotting such a triangle.

### Fact 4: a tangent is perpendicular to the radius

Let a line touch the circle at $T$. Every **other** point of the line is outside the circle (if one were inside, the
line would cross the circle twice). So every other point on the line is **more** than $r$ from $O$, and $T$ is the
**closest** point of the line to $O$.

Now, the shortest way from a point to a line is the perpendicular. Why: any other path from $O$ to the line is the
hypotenuse of a right triangle whose leg is the perpendicular, and the hypotenuse is always the longest side. So the
closest point $T$ is the foot of the perpendicular, and

> **the tangent at $T$ is at right angles to the radius $OT$.**

That answers the opening question. The ground is a tangent to the wheel, so the radius to the touching point is
perpendicular to the ground: the contact point is straight below the axle. The reverse is true too, and gives a way
to **draw** a tangent: at a point $T$ on the circle, construct the line perpendicular to $OT$.

### Fact 5: two tangents from one point are equal

From a point $P$ outside a circle, you can draw exactly two tangents, touching at $S$ and $T$.

<div class="pattern-row" markdown="0">
<svg viewBox="30 40 240 120" role="img" aria-label="A circle with centre O and an outside point P; two tangent lines from P touch the circle at S and T, with right angles where each radius meets its tangent">
  <circle cx="90" cy="100" r="50" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2"><line x1="250" y1="100" x2="105.6" y2="52.5"/><line x1="250" y1="100" x2="105.6" y2="147.5"/></g>
  <g stroke="#eea66f" stroke-width="2.5"><line x1="90" y1="100" x2="105.6" y2="52.5"/><line x1="90" y1="100" x2="105.6" y2="147.5"/></g>
  <line x1="90" y1="100" x2="250" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <g fill="currentColor"><circle cx="90" cy="100" r="3"/><circle cx="250" cy="100" r="3.5"/><circle cx="105.6" cy="52.5" r="3"/><circle cx="105.6" cy="147.5" r="3"/></g>
  <g font-size="14" fill="currentColor"><text x="74" y="104">O</text><text x="256" y="105">P</text><text x="100" y="46">S</text><text x="100" y="164">T</text></g>
</svg>
</div>

Triangles $OSP$ and $OTP$ have right angles at $S$ and $T$ (fact 4), the shared hypotenuse $OP$, and $OS = OT$ (radii).
RHS again: they are congruent, so $PS = PT$. The two tangents are the same length, and $OP$ bisects the angle between
them.

## Worked examples

**1. Words and numbers.** A circle has diameter 18 cm. Its radius is $18 \div 2 = 9$ cm. A chord in it can be any
length from just above 0 up to 18 cm, but no longer (fact 1).

**2. Half a chord.** In a circle with centre $O$, chord $AB$ is 16 cm long, and the perpendicular from $O$ meets it at
$M$. By fact 2, $AM = MB = 16 \div 2 = 8$ cm. (In level 6, if you also know the radius, Pythagoras gives $OM$.)

**3. The isosceles triangle hiding in a circle.** Chord $AB$ subtends a central angle $\angle AOB = 100°$. Find
$\angle OAB$.

1. $OA = OB$ (radii), so triangle $OAB$ is isosceles and $\angle OAB = \angle OBA$.
2. The angles add to 180°: $\angle OAB + \angle OBA = 180° - 100° = 80°$.
3. So $\angle OAB = 80° \div 2 = 40°$.

**4. A tangent problem.** $PT$ is a tangent at $T$, and $\angle TOP = 65°$. Find $\angle OPT$.

1. $\angle OTP = 90°$ (tangent meets radius at a right angle).
2. $\angle OPT = 180° - 90° - 65° = 25°$.

**5. Two tangents.** Two tangents from $P$ touch the circle at $S$ and $T$, and $\angle SPT = 50°$. Find $\angle SOT$.

1. $OSPT$ is a four-sided shape, and the angles of any quadrilateral add to 360° ([level 4](../level-4/index.md)).
2. $\angle OSP = \angle OTP = 90°$.
3. $\angle SOT = 360° - 90° - 90° - 50° = 130°$.

Notice that $\angle SOT$ and $\angle SPT$ always add to 180°.

## Try it

1. A circle has radius 6.5 cm. How long is its diameter? What is the longest chord?
2. Is every diameter a chord? Is every chord a diameter?
3. Chord $AB$ has $\angle AOB = 70°$. Find $\angle OAB$.
4. $PT$ is a tangent at $T$, and $\angle TPO = 32°$. Find $\angle TOP$.
5. Two tangents from $P$ meet at an angle of 40°. Find the angle between the two radii to the touching points.
6. A chord 24 cm long is bisected by the perpendicular from the centre at $M$. How long is $AM$?
7. A minor arc is one quarter of the circle. What central angle does it subtend? What about the major arc?
8. Harder: explain why a straight line cannot meet a circle in three points. (Hint: perpendicular bisectors.)

??? note "Answers"
    1. Diameter $= 2 \times 6.5 = 13$ cm. The longest chord is a diameter, 13 cm.
    2. Every diameter is a chord (it joins two points of the circle). Not every chord is a diameter: only the ones
       through the centre.
    3. Triangle $OAB$ is isosceles with $OA = OB$. The base angles share $180° - 70° = 110°$, so each is $55°$.
    4. $\angle OTP = 90°$, so $\angle TOP = 180° - 90° - 32° = 58°$.
    5. In quadrilateral $OSPT$: $360° - 90° - 90° - 40° = 140°$.
    6. $24 \div 2 = 12$ cm.
    7. One quarter of 360° is 90°. The major arc is the other three quarters: 270°.
    8. Suppose a line met the circle at three points $A$, $B$, $C$, in that order. The centre is equally far from
       $A$ and $B$, so it is on the perpendicular bisector of $AB$. It is equally far from $B$ and $C$, so it is on
       the perpendicular bisector of $BC$. Both bisectors are perpendicular to the same line, so they are parallel,
       and they are different lines (they pass through different midpoints). Parallel lines never meet, so no
       point could be on both. That is impossible, so the three points cannot exist.

## Common mistake

**Calling any line that touches the circle a tangent.** A tangent touches at exactly one point and does not cross
into the circle. A line through a point of the circle that goes inside is a secant, even if it looks nearly flat.
The test is the right angle: the tangent at $T$ is the one line through $T$ perpendicular to $OT$.

**Mixing up sector and segment.** A sector is bounded by **two radii** and an arc (a pizza slice, with a point at the
centre). A segment is bounded by a **chord** and an arc (the crust you cut off with one straight cut).

## Where it leads

- Previous lesson: [Congruent triangles](05-congruent-triangles.md), which proved every fact here.
- Next level: [Level 6: Pythagoras and circles](../level-6/index.md), where you will measure circumferences, areas,
  arcs and sectors, and use the tangent fact to find the distance to the horizon.
- The deeper circle theorems (angles at the centre and on the circle, cyclic quadrilaterals) are in
  [level 7](../level-7/index.md).
- Lengths and areas of round things: [Measurement](../../measurement/index.md).
- This level: [Level 5: constructions and transformations](index.md).
