# 6. Circles

*The circle is the most symmetric figure in the plane: turn it about its centre by any angle and it lands on itself.
That symmetry makes it full of hidden equalities. An angle drawn from the edge is always half the angle at the centre;
the four corners of some quadrilaterals lie on a circle and the others never do; two chords through a point multiply
to the same number. This chapter proves those facts, then measures the circle itself: why the same number $\pi$ fits
every circle, how Archimedes trapped it between $3\tfrac{10}{71}$ and $3\tfrac17$, and why the area is $\pi r^2$.*

!!! abstract "In this chapter"
    **You will learn:**

    - the words: radius, chord, arc, sector, segment, tangent, secant, central and inscribed angle
    - the inscribed angle theorem in all three cases, and Thales' theorem as a special case
    - when a quadrilateral has a circumcircle, and why opposite angles then add to 180 degrees
    - the tangent facts: tangent perpendicular to radius, equal tangents, the tangent-chord angle
    - the power of a point, which unifies the chord, secant and tangent theorems, with the distance to the horizon on Earth and on Mars
    - why $\pi$ is the same for every circle, how Archimedes bounded it, and why the area is $\pi r^2$; arcs and sectors

    **You need:** [Chapter 2](02-Triangles-and-Congruence.md) (congruence, isosceles triangles),
    [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md) (the angle sum and the exterior angle),
    [Chapter 4](04-Area-and-Pythagoras.md) (Pythagoras) and [Chapter 5](05-Similarity.md) (similar triangles). For a
    gentler version, see the Topics lessons [Circle words](../../topics/geometry/level-5/06-circle-words.md),
    [Pi and the circumference](../../topics/geometry/level-6/04-pi-circumference.md),
    [Area of a circle, sectors and arcs](../../topics/geometry/level-6/05-circle-area-sectors.md) and
    [Circle theorems](../../topics/geometry/level-7/06-circle-theorems.md).

    **Levels:** 6.1 is beginner; 6.2 to 6.5 are intermediate; 6.6 and 6.7 are intermediate, with Archimedes' proofs at
    the advanced end.

## 6.1 Parts of a circle

Tie a goat to a post with a rope 5 metres long. The edge of the grass it can reach is a circle.

**Definition.** The **circle** with **centre** $O$ and **radius** $r > 0$ is the set of all points of the plane at
distance exactly $r$ from $O$. The points at distance less than $r$ are **inside** the circle, those at distance
more than $r$ are **outside**. The circle together with its inside is a **disc**.

The word radius means both the number $r$ and any segment from $O$ to the circle. The other words:

- A **chord** is a segment joining two points of the circle. A chord through the centre is a **diameter**; its length
  is $2r$, also called the diameter.
- An **arc** is a piece of the circle between two of its points. Two points cut the circle into two arcs: the
  **minor arc** (the shorter) and the **major arc**. If the points are ends of a diameter, both arcs are
  **semicircles**.
- A **sector** is the region between two radii and an arc, a slice of pizza. A **segment** is the region between a
  chord and its arc.
- A line meeting the circle in exactly one point is a **tangent**; the point is the **point of contact**. A line
  meeting it in two points is a **secant**.
- An angle with its vertex at the centre, like $\angle AOB$, is a **central angle**. An angle with its vertex on the
  circle and its two sides chords, like $\angle ACB$, is an **inscribed angle**. Both are said to **stand on** (or
  **subtend**) the arc $AB$ that lies inside them.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="A circle with centre O showing a radius, a diameter, a chord with its segment shaded green, a sector shaded orange, a tangent line touching at one point, and a secant line crossing at two points">
  <polygon points="200,135 152.5,52.7 150.4,54 148.3,55.3 146.2,56.7 144.2,58.1 142.2,59.6 140.2,61.2 138.3,62.8 136.4,64.4 134.6,66.1 132.8,67.8 131.1,69.6 129.4,71.4 127.8,73.3 126.2,75.2 124.6,77.2 123.1,79.2 121.7,81.2 120.3,83.3 119,85.4 117.7,87.5 116.5,89.7 115.4,91.9 114.3,94.1 113.2,96.4 112.2,98.6 111.3,101 110.4,103.3 109.6,105.6 108.9,108 108.2,110.4" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="127.2,196.1 128.7,197.8 130.3,199.5 131.9,201.2 133.5,202.9 135.2,204.5 136.9,206 138.7,207.6 140.5,209 142.3,210.5 144.2,211.9 146.1,213.2 148,214.5 149.9,215.7 151.9,216.9 153.9,218.1 156,219.2 158.1,220.2 160.2,221.2 162.3,222.2 164.4,223.1 166.6,223.9 168.8,224.7 171,225.5 173.2,226.1 175.4,226.8 177.7,227.3 179.9,227.9 182.2,228.3 184.5,228.7 186.8,229.1" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="200" cy="135" r="95" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="106.4" y1="151.5" x2="293.6" y2="118.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="135" x2="200" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <line x1="315.6" y1="108" x2="217.4" y2="25.6" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="255.6,68.8 249,63.3 254.5,56.7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="200" y1="135" x2="261.1" y2="62.2" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="261.1" cy="62.2" r="2.5" fill="currentColor"/>
  <line x1="314.8" y1="141.9" x2="212.6" y2="244.1" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="289.3" cy="167.5" r="2.5" fill="currentColor"/>
  <circle cx="232.5" cy="224.3" r="2.5" fill="currentColor"/>
  <circle cx="200" cy="135" r="3" fill="currentColor"/>
  <text x="192" y="151" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="224" y="82.8" font-size="12" text-anchor="middle" fill="currentColor">radius</text>
  <text x="258" y="118.8" font-size="12" text-anchor="middle" fill="currentColor">diameter</text>
  <text x="101.2" y="57.8" font-size="12" text-anchor="middle" fill="currentColor">sector</text>
  <text x="143.8" y="236.4" font-size="12" text-anchor="middle" fill="currentColor">segment</text>
  <text x="171.9" y="196.5" font-size="12" text-anchor="middle" fill="currentColor">chord</text>
  <text x="325.6" y="104" font-size="12" text-anchor="start" fill="currentColor">tangent</text>
  <text x="320.8" y="137.9" font-size="12" text-anchor="start" fill="currentColor">secant</text>
  <text x="155" y="38.6" font-size="12" text-anchor="middle" fill="currentColor">arc</text>
</svg>
</div>

A first theorem uses only isosceles triangles.

**Theorem (perpendicular bisector of a chord).** The perpendicular from the centre to a chord bisects the chord.
Conversely, the perpendicular bisector of any chord passes through the centre.

*Proof.* Let $AB$ be a chord and $M$ the foot of the perpendicular from $O$. The right triangles $OMA$ and $OMB$ have
the same hypotenuse length ($OA = OB = r$) and share the leg $OM$, so by Pythagoras $MA = \sqrt{r^2 - OM^2} = MB$.
For the converse: $O$ is equally far from $A$ and $B$, and the points equally far from $A$ and $B$ are exactly the
points of the perpendicular bisector of $AB$ ([Chapter 2](02-Triangles-and-Congruence.md)). $\blacksquare$

**Consequences.**

- *Finding a lost centre:* draw two chords that are not parallel, construct their perpendicular bisectors; they meet
  at the centre. That is how you find the centre of a round table, or of a broken plate from a fragment.
- *Three points determine a circle:* given three points not on one line, the perpendicular bisectors of $AB$ and $BC$
  meet at one point $O$ (they are not parallel, since $AB$ and $BC$ are not), which is equally far from $A$, $B$
  and $C$. The circle with centre $O$ through $A$ passes through all three, and it is the only one, since any such
  circle has its centre on both bisectors. In particular **every triangle has exactly one circumcircle**; its centre
  is the **circumcentre**.

**Worked example.** A chord of length 16 lies in a circle of radius 10. How far is it from the centre?
The perpendicular from the centre bisects it into halves of 8, so the distance is $\sqrt{10^2 - 8^2} = 6$.

## 6.2 The inscribed angle theorem

Stand anywhere on the curved edge of a circular field and look at two fixed posts $A$ and $B$ on the edge. As you
walk around (staying on the same side of $AB$), the posts seem to stay the same angle apart. That is a theorem.

**Theorem (inscribed angle theorem).** An inscribed angle is half the central angle standing on the same arc:

$$\angle ACB = \tfrac12 \angle AOB .$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 185" role="img" aria-label="Three circles showing the inscribed angle theorem. Left: the centre O lies on the side CB. Middle: O lies inside the angle ACB, and the dashed diameter CD splits it. Right: O lies outside the angle. In each, the angle at C is half the angle AOB">
  <circle cx="68.8" cy="95" r="55" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="68.8,95 21.1,67.5 41.2,142.6 96.2,47.4" fill="#7ccf9a" fill-opacity="0.0" stroke="currentColor" stroke-width="0"/>
  <line x1="41.2" y1="142.6" x2="21.1" y2="67.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="41.2" y1="142.6" x2="96.2" y2="47.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="68.8" y1="95" x2="21.1" y2="67.5" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="68.8" y1="95" x2="96.2" y2="47.4" stroke="#9cc9ea" stroke-width="2"/>
  <polygon points="41.2,142.6 48.9,129.3 48.6,129.1 48.2,128.9 47.9,128.7 47.5,128.6 47.1,128.4 46.8,128.3 46.4,128.1 46,128 45.6,127.9 45.2,127.8 44.8,127.7 44.5,127.6 44.1,127.5 43.7,127.4 43.3,127.4 42.9,127.3 42.5,127.3 42.1,127.3 41.7,127.2 41.2,127.2 40.8,127.2 40.4,127.3 40,127.3 39.6,127.3 39.2,127.4 38.8,127.4 38.4,127.5 38,127.6 37.7,127.7 37.3,127.8" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="48.9,129.3 48.6,129.1 48.2,128.9 47.9,128.7 47.5,128.6 47.1,128.4 46.8,128.3 46.4,128.1 46,128 45.6,127.9 45.2,127.8 44.8,127.7 44.5,127.6 44.1,127.5 43.7,127.4 43.3,127.4 42.9,127.3 42.5,127.3 42.1,127.3 41.7,127.2 41.2,127.2 40.8,127.2 40.4,127.3 40,127.3 39.6,127.3 39.2,127.4 38.8,127.4 38.4,127.5 38,127.6 37.7,127.7 37.3,127.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="68.8,95 74.8,84.5 74.2,84.2 73.7,83.9 73.1,83.7 72.5,83.5 71.9,83.3 71.3,83.2 70.6,83 70,83 69.4,82.9 68.8,82.9 68.1,82.9 67.5,83 66.9,83 66.2,83.2 65.6,83.3 65,83.5 64.4,83.7 63.8,83.9 63.3,84.2 62.7,84.5 62.2,84.9 61.6,85.2 61.1,85.6 60.7,86 60.2,86.4 59.8,86.9 59.3,87.4 59,87.9 58.6,88.4 58.3,88.9" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="74.8,84.5 74.2,84.2 73.7,83.9 73.1,83.7 72.5,83.5 71.9,83.3 71.3,83.2 70.6,83 70,83 69.4,82.9 68.8,82.9 68.1,82.9 67.5,83 66.9,83 66.2,83.2 65.6,83.3 65,83.5 64.4,83.7 63.8,83.9 63.3,84.2 62.7,84.5 62.2,84.9 61.6,85.2 61.1,85.6 60.7,86 60.2,86.4 59.8,86.9 59.3,87.4 59,87.9 58.6,88.4 58.3,88.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="68.8" cy="95" r="2.5" fill="currentColor"/>
  <text x="77.8" y="107" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="12.5" y="66.7" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <text x="101.2" y="42.9" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <text x="36.2" y="155.5" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <text x="68.8" y="184" font-size="12" text-anchor="middle" fill="currentColor">O on a side</text>
  <circle cx="209" cy="95" r="55" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="209,95 161.4,67.5 209,150 256.6,67.5" fill="#7ccf9a" fill-opacity="0.0" stroke="currentColor" stroke-width="0"/>
  <line x1="209" y1="150" x2="161.4" y2="67.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="209" y1="150" x2="256.6" y2="67.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="209" y1="95" x2="161.4" y2="67.5" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="209" y1="95" x2="256.6" y2="67.5" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="209" y1="150" x2="209" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="209" y="34.2" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <polygon points="209,150 216.7,136.7 216.2,136.4 215.8,136.2 215.3,135.9 214.8,135.7 214.3,135.5 213.8,135.4 213.2,135.2 212.7,135.1 212.2,134.9 211.7,134.8 211.1,134.7 210.6,134.7 210.1,134.6 209.5,134.6 209,134.6 208.5,134.6 207.9,134.6 207.4,134.7 206.9,134.7 206.3,134.8 205.8,134.9 205.3,135.1 204.8,135.2 204.2,135.4 203.7,135.5 203.2,135.7 202.7,135.9 202.2,136.2 201.8,136.4 201.3,136.7" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="216.7,136.7 216.2,136.4 215.8,136.2 215.3,135.9 214.8,135.7 214.3,135.5 213.8,135.4 213.2,135.2 212.7,135.1 212.2,134.9 211.7,134.8 211.1,134.7 210.6,134.7 210.1,134.6 209.5,134.6 209,134.6 208.5,134.6 207.9,134.6 207.4,134.7 206.9,134.7 206.3,134.8 205.8,134.9 205.3,135.1 204.8,135.2 204.2,135.4 203.7,135.5 203.2,135.7 202.7,135.9 202.2,136.2 201.8,136.4 201.3,136.7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="209,95 219.5,89 219,88.2 218.5,87.6 218,86.9 217.4,86.3 216.8,85.7 216.1,85.2 215.4,84.7 214.7,84.3 213.9,83.9 213.1,83.6 212.3,83.4 211.5,83.2 210.7,83 209.8,82.9 209,82.9 208.2,82.9 207.3,83 206.5,83.2 205.7,83.4 204.9,83.6 204.1,83.9 203.3,84.3 202.6,84.7 201.9,85.2 201.2,85.7 200.6,86.3 200,86.9 199.5,87.6 199,88.2 198.5,89" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="219.5,89 219,88.2 218.5,87.6 218,86.9 217.4,86.3 216.8,85.7 216.1,85.2 215.4,84.7 214.7,84.3 213.9,83.9 213.1,83.6 212.3,83.4 211.5,83.2 210.7,83 209.8,82.9 209,82.9 208.2,82.9 207.3,83 206.5,83.2 205.7,83.4 204.9,83.6 204.1,83.9 203.3,84.3 202.6,84.7 201.9,85.2 201.2,85.7 200.6,86.3 200,86.9 199.5,87.6 199,88.2 198.5,89" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="209" cy="95" r="2.5" fill="currentColor"/>
  <text x="218" y="107" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="152.7" y="66.7" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <text x="265.3" y="66.7" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <text x="209" y="164.2" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <text x="209" y="184" font-size="12" text-anchor="middle" fill="currentColor">O inside</text>
  <circle cx="349.2" cy="95" r="55" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="330.4,146.7 402.4,109.2 349.2,95 394.3,63.5" fill="#7ccf9a" fill-opacity="0.0" stroke="currentColor" stroke-width="0"/>
  <line x1="330.4" y1="146.7" x2="402.4" y2="109.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="330.4" y1="146.7" x2="394.3" y2="63.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="349.2" y1="95" x2="402.4" y2="109.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="349.2" y1="95" x2="394.3" y2="63.5" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="330.4" y1="146.7" x2="368.1" y2="43.3" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="371.5" y="38.1" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <polygon points="330.4,146.7 344.1,139.6 344,139.4 343.9,139.2 343.8,139 343.7,138.8 343.5,138.6 343.4,138.4 343.3,138.2 343.2,138 343.1,137.9 342.9,137.7 342.8,137.5 342.7,137.3 342.5,137.1 342.4,137 342.2,136.8 342.1,136.6 341.9,136.4 341.8,136.3 341.6,136.1 341.5,136 341.3,135.8 341.2,135.6 341,135.5 340.8,135.3 340.7,135.2 340.5,135 340.3,134.9 340.2,134.7 340,134.6 339.8,134.5" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="344.1,139.6 344,139.4 343.9,139.2 343.8,139 343.7,138.8 343.5,138.6 343.4,138.4 343.3,138.2 343.2,138 343.1,137.9 342.9,137.7 342.8,137.5 342.7,137.3 342.5,137.1 342.4,137 342.2,136.8 342.1,136.6 341.9,136.4 341.8,136.3 341.6,136.1 341.5,136 341.3,135.8 341.2,135.6 341,135.5 340.8,135.3 340.7,135.2 340.5,135 340.3,134.9 340.2,134.7 340,134.6 339.8,134.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="349.2,95 360.9,98.1 361,97.8 361.1,97.4 361.2,97.1 361.2,96.8 361.3,96.4 361.3,96.1 361.3,95.7 361.3,95.4 361.3,95 361.3,94.6 361.3,94.3 361.3,93.9 361.3,93.6 361.2,93.2 361.2,92.9 361.1,92.6 361,92.2 360.9,91.9 360.8,91.5 360.7,91.2 360.6,90.9 360.5,90.5 360.4,90.2 360.2,89.9 360.1,89.6 359.9,89.3 359.7,89 359.5,88.6 359.4,88.4 359.2,88.1" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="360.9,98.1 361,97.8 361.1,97.4 361.2,97.1 361.2,96.8 361.3,96.4 361.3,96.1 361.3,95.7 361.3,95.4 361.3,95 361.3,94.6 361.3,94.3 361.3,93.9 361.3,93.6 361.2,93.2 361.2,92.9 361.1,92.6 361,92.2 360.9,91.9 360.8,91.5 360.7,91.2 360.6,90.9 360.5,90.5 360.4,90.2 360.2,89.9 360.1,89.6 359.9,89.3 359.7,89 359.5,88.6 359.4,88.4 359.2,88.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="349.2" cy="95" r="2.5" fill="currentColor"/>
  <text x="339.2" y="107" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="412" y="116" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <text x="402.5" y="61.9" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <text x="327" y="160.3" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <text x="349.2" y="184" font-size="12" text-anchor="middle" fill="currentColor">O outside</text>
</svg>
</div>

*Proof.* There are three cases, depending on where the centre $O$ lies relative to the angle at $C$.

*Case 1: $O$ lies on one side of the angle, say on $CB$.* Then $CB$ is a diameter. Triangle $OCA$ is isosceles
($OC = OA = r$), so its base angles are equal: $\angle OCA = \angle OAC = x$. The angle $AOB$ is an exterior angle of
triangle $OCA$ (at $O$, since $B$ lies on the line $CO$ beyond $O$), so it equals the sum of the two opposite
interior angles ([Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)):
$\angle AOB = x + x = 2x = 2\angle ACB$.

*Case 2: $O$ lies inside the angle $ACB$.* Draw the diameter from $C$ through $O$, meeting the circle again at $D$.
It splits both angles: $\angle ACB = \angle ACD + \angle DCB$ and $\angle AOB = \angle AOD + \angle DOB$. Each piece is
Case 1, so $\angle AOD = 2\angle ACD$ and $\angle DOB = 2\angle DCB$. Add.

*Case 3: $O$ lies outside the angle $ACB$.* Draw the same diameter $CD$. Now $A$ and $B$ are on the same side of it, so
one of the angles $\angle DCA$, $\angle DCB$ contains the other; say $\angle DCB$ contains $\angle DCA$. Then $\angle ACB = \angle DCB - \angle DCA$ and $\angle AOB = \angle DOB - \angle DOA$,
and by Case 1 each term on the right of the second equation is twice the matching term of the first. Subtract.
$\blacksquare$

The theorem also holds when the arc $AB$ is a major arc and the "central angle" is a reflex angle (more than
$180°$); Case 2 covers it if you read $\angle AOD + \angle DOB$ as the reflex angle.

**Corollary 1 (angles in the same segment).** All inscribed angles standing on the same arc are equal: each is half
the same central angle. This is the field-and-posts fact.

**Corollary 2 (Thales' theorem).** An angle inscribed in a semicircle is a right angle. *Proof:* the central angle on
a semicircle is the straight angle $180°$, and half of it is $90°$. $\blacksquare$

**Corollary 3 (opposite arcs).** If $C$ and $D$ lie on opposite arcs cut off by the chord $AB$, then
$\angle ACB + \angle ADB = 180°$, because the two central angles (one ordinary, one reflex) add up to $360°$.

**The converse of Thales.** If $\angle ACB = 90°$, then $C$ lies on the circle with diameter $AB$. *Proof:* let $M$
be the midpoint of $AB$. Complete the right triangle $ACB$ to a rectangle $ACBE$; the diagonals of a rectangle are
equal and bisect each other, so $MC = MA = MB$. $\blacksquare$ This is the basis of a carpenter's trick: to check
that a curved surface is a true half-cylinder, slide a set square into it; if its corner always touches the surface
while its arms touch the edges, the cross-section is a semicircle.

More generally, the set of points from which a segment $AB$ is seen at a fixed angle $\alpha$ (with $0° < \alpha < 180°$)
is made of two circular arcs through $A$ and $B$, mirror images in the line $AB$. Sailors used this to fix a position
from the angle between two lighthouses.

**Worked example.** Points $A$, $B$, $C$ lie on a circle with centre $O$, and $\angle AOB = 130°$ with $C$ on the
major arc. Find $\angle ACB$, and the inscribed angle $\angle ADB$ for a point $D$ on the minor arc.

- $\angle ACB = 130°/2 = 65°$.
- $\angle ADB = 180° - 65° = 115°$ (Corollary 3). Check: the reflex central angle is $360° - 130° = 230°$, and half
  of it is $115°$.

**Worked example (the right angle finds the centre).** To find the centre of a circular plate with only a set square,
lay the right-angle corner on the rim; the points where the two arms cross the rim are the ends of a diameter (by
Thales). Draw it. Do this twice; the two diameters cross at the centre.

## 6.3 Cyclic quadrilaterals

Every triangle has a circumcircle (6.1). Four points usually do not lie on one circle: the circle through three of
them misses the fourth. A quadrilateral whose four vertices lie on one circle is called **cyclic**.

**Theorem.** In a cyclic quadrilateral, opposite angles add to $180°$.

*Proof.* Let $ABCD$ be cyclic. The angles at $B$ and at $D$ are inscribed angles standing on the chord $AC$ from
opposite arcs, so by Corollary 3 they add to $180°$. The same for $A$ and $C$ with the chord $BD$. $\blacksquare$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="A quadrilateral ABCD with its four vertices on a circle. The angle at B is marked x and the angle at D is marked 180 degrees minus x">
  <circle cx="210" cy="115" r="95" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="120.7,147.5 257.5,197.3 299.3,82.5 177.5,25.7" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="257.5,197.3 264,179.4 263.1,179.1 262.1,178.8 261.1,178.6 260.1,178.5 259.2,178.3 258.2,178.3 257.2,178.3 256.2,178.3 255.2,178.4 254.2,178.6 253.2,178.8 252.3,179 251.3,179.3 250.4,179.7 249.5,180.1 248.6,180.5 247.7,181 246.9,181.5 246.1,182.1 245.3,182.7 244.5,183.4 243.8,184.1 243.2,184.8 242.5,185.6 241.9,186.4 241.4,187.2 240.9,188.1 240.4,188.9 240,189.8 239.6,190.8" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="264,179.4 263.1,179.1 262.1,178.8 261.1,178.6 260.1,178.5 259.2,178.3 258.2,178.3 257.2,178.3 256.2,178.3 255.2,178.4 254.2,178.6 253.2,178.8 252.3,179 251.3,179.3 250.4,179.7 249.5,180.1 248.6,180.5 247.7,181 246.9,181.5 246.1,182.1 245.3,182.7 244.5,183.4 243.8,184.1 243.2,184.8 242.5,185.6 241.9,186.4 241.4,187.2 240.9,188.1 240.4,188.9 240,189.8 239.6,190.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="243" y="170.5" font-size="12" text-anchor="middle" fill="currentColor">x</text>
  <polygon points="177.5,25.7 169.5,42.9 170.4,43.3 171.3,43.7 172.3,44 173.2,44.2 174.2,44.4 175.2,44.6 176.2,44.7 177.2,44.7 178.2,44.7 179.2,44.7 180.2,44.5 181.1,44.4 182.1,44.2 183.1,43.9 184,43.6 184.9,43.2 185.8,42.8 186.7,42.3 187.6,41.8 188.4,41.3 189.2,40.7 190,40.1 190.7,39.4 191.4,38.7 192.1,37.9 192.7,37.2 193.3,36.4 193.8,35.5 194.3,34.6 194.7,33.8" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="169.5,42.9 170.4,43.3 171.3,43.7 172.3,44 173.2,44.2 174.2,44.4 175.2,44.6 176.2,44.7 177.2,44.7 178.2,44.7 179.2,44.7 180.2,44.5 181.1,44.4 182.1,44.2 183.1,43.9 184,43.6 184.9,43.2 185.8,42.8 186.7,42.3 187.6,41.8 188.4,41.3 189.2,40.7 190,40.1 190.7,39.4 191.4,38.7 192.1,37.9 192.7,37.2 193.3,36.4 193.8,35.5 194.3,34.6 194.7,33.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="191.2" y="67.4" font-size="12" text-anchor="middle" fill="currentColor">180° − x</text>
  <text x="109.5" y="156.1" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="263.5" y="212.2" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="310.5" y="83" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="173.4" y="19" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="210" cy="115" r="2.5" fill="currentColor"/>
</svg>
</div>

**Theorem (converse).** If a convex quadrilateral $ABCD$ has $\angle B + \angle D = 180°$, then it is cyclic.

*Proof.* Draw the circle through $A$, $B$, $C$. Suppose $D$ is not on it.

- If $D$ is outside the circle, the segment $BD$ meets the circle's arc $AC$ (the one not containing $B$) at a point
  $D'$ between $B$ and $D$. Then $ABCD'$ is cyclic, so $\angle AD'C = 180° - \angle B = \angle ADC$. But
  $\angle AD'C$ is bigger than $\angle ADC$: in triangles $AD'D$ and $CD'D$, the exterior angles at $D'$ exceed the
  interior angles at $D$, and adding them gives $\angle AD'C > \angle ADC$. Contradiction.
- If $D$ is inside, extend $BD$ beyond $D$ to meet the arc at $D'$; the same argument with the roles of $D$ and $D'$
  swapped gives $\angle ADC > \angle AD'C = \angle ADC$, again a contradiction.

So $D$ lies on the circle. $\blacksquare$

**Which familiar quadrilaterals are cyclic?** A rectangle is (each pair of opposite angles is $90° + 90°$). A square
is. An isosceles trapezoid is (its base angles are equal and the angles along a leg add to $180°$, so opposite angles
add to $180°$). A parallelogram that is not a rectangle is not (opposite angles are equal, so they add to $180°$ only
if each is $90°$). A rhombus that is not a square is not.

**Worked example.** In cyclic quadrilateral $ABCD$, $\angle A = 3x + 10$ and $\angle C = 2x - 5$ (in degrees). Find
the angles. Opposite angles: $5x + 5 = 180$, so $x = 35$, $\angle A = 115°$ and $\angle C = 65°$.

**Ptolemy's theorem**, the deepest classical fact about cyclic quadrilaterals, says that for cyclic $ABCD$,
$AC \cdot BD = AB \cdot CD + AD \cdot BC$. It is proved in [Chapter 12](12-Triangle-Centres-and-Classical-Theorems.md).

## 6.4 Tangents

A wheel touches a straight road at one point. The radius to that point is vertical, and the road is horizontal: they
are perpendicular. That is the first tangent theorem.

**Theorem (tangent and radius).** A line through a point $T$ of a circle is tangent to the circle if and only if it
is perpendicular to the radius $OT$.

*Proof.* Suppose the line $\ell$ through $T$ is perpendicular to $OT$. For any other point $X$ on $\ell$, triangle
$OTX$ has a right angle at $T$, so its hypotenuse $OX$ is longer than the leg $OT = r$. So $X$ is outside the circle,
and $T$ is the only common point: $\ell$ is tangent.

Now suppose $\ell$ is not perpendicular to $OT$. Let $F$ be the foot of the perpendicular from $O$ to $\ell$; then
$F \neq T$. Let $T'$ be the point of $\ell$ on the other side of $F$ with $FT' = FT$. The right triangles $OFT$ and
$OFT'$ are congruent (SAS), so $OT' = OT = r$: $T'$ is a second point of the circle on $\ell$, and $\ell$ is not a
tangent. $\blacksquare$

So at each point of a circle there is exactly one tangent, and you construct it by drawing the perpendicular to the
radius.

**Theorem (two tangents).** From a point $P$ outside a circle there are exactly two tangents, and the two tangent
segments $PT_1$ and $PT_2$ are equal. The line $PO$ bisects the angle between the tangents.

*Proof.* A point $T$ of the circle is a point of contact of a tangent from $P$ exactly when $\angle OTP = 90°$, that
is (by Thales and its converse) when $T$ lies on the circle with diameter $OP$. That circle meets the given circle in
two points $T_1$, $T_2$: it passes through $O$, which is inside the given circle, and through $P$, which is outside,
so it crosses the given circle once on each side of the line $OP$. Triangles $OT_1P$ and $OT_2P$ are right triangles with the same hypotenuse $OP$ and equal legs $OT_1 = OT_2 = r$,
so they are congruent: $PT_1 = PT_2$ and $\angle OPT_1 = \angle OPT_2$. $\blacksquare$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="A circle with centre O and a point P outside it. The two tangents from P touch at T1 and T2, where they are perpendicular to the radii. The dashed circle on diameter OP passes through T1 and T2. The tangent segments are marked equal">
  <circle cx="208" cy="105" r="98" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="110" cy="105" r="70" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="110,105 135,39.6 306,105 135,170.4" fill="#eea66f" fill-opacity="0.25" stroke="currentColor" stroke-width="0"/>
  <line x1="306" y1="105" x2="135" y2="39.6" stroke="currentColor" stroke-width="1.5"/>
  <line x1="306" y1="105" x2="135" y2="170.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="110" y1="105" x2="135" y2="39.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="110" y1="105" x2="135" y2="170.4" stroke="currentColor" stroke-width="1.2"/>
  <line x1="110" y1="105" x2="306" y2="105" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="131.8,48.1 140.2,51.4 143.5,42.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="131.8,161.9 140.2,158.6 143.5,167.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="218.4" y1="77.9" x2="222.6" y2="66.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="222.6" y1="143.3" x2="218.4" y2="132.1" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="110" cy="105" r="2.5" fill="currentColor"/>
  <circle cx="306" cy="105" r="2.5" fill="currentColor"/>
  <circle cx="135" cy="39.6" r="2.5" fill="currentColor"/>
  <circle cx="135" cy="170.4" r="2.5" fill="currentColor"/>
  <circle cx="208" cy="105" r="2.5" fill="currentColor"/>
  <text x="100" y="110" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="316" y="110" font-size="13" text-anchor="middle" fill="currentColor">P</text>
  <text x="208" y="121" font-size="13" text-anchor="middle" fill="currentColor">M</text>
  <text x="131" y="30.6" font-size="13" text-anchor="middle" fill="currentColor">T₁</text>
  <text x="131" y="189.4" font-size="13" text-anchor="middle" fill="currentColor">T₂</text>
</svg>
</div>

The proof is also a construction: to draw the tangents from $P$, bisect $OP$ at $M$, draw the circle with centre $M$
through $O$, and join $P$ to the two crossing points.

**Worked example.** A circle has radius 5 and a point $P$ is 13 from its centre. The tangent segment has length
$\sqrt{13^2 - 5^2} = 12$.

**Worked example (a belt).** The two tangent segments from a point are equal; so a circle inscribed in a
quadrilateral gives equal tangent pieces at each corner, and the sums of opposite sides are equal:
$AB + CD = BC + DA$ for a quadrilateral with an incircle (Pitot's theorem). Each side is made of two tangent pieces,
one from each end, and each of the four corner pieces appears once on each side of the equation.

**Theorem (tangent-chord angle, or alternate segment theorem).** The angle between a tangent and a chord at the point
of contact equals any inscribed angle standing on that chord from the other side.

*Proof.* Let the tangent at $A$ be the line $t$ and $AB$ a chord, and let $C$ be on the arc on the far side of $AB$
from the angle we measure. Draw the diameter $AD$. The angle between $t$ and $AD$ is $90°$ (tangent and radius), and
$\angle ABD = 90°$ (Thales). In the right triangle $ABD$, $\angle ADB = 90° - \angle DAB$. The angle between $t$ and
$AB$ is also $90° - \angle DAB$. So it equals $\angle ADB$, and $\angle ADB = \angle ACB$ (same arc $AB$).
$\blacksquare$

The tangent-chord angle is the limit of an inscribed angle as one of its chords shrinks to a point; the theorem says
the inscribed angle theorem survives that limit.

## 6.5 Chords, secants and the power of a point

Two chords of a circle cross at a point $P$ inside it. One is cut into pieces 3 and 8; the other into pieces 4 and
something. The something is forced: it is 6. Here is why.

**Theorem (intersecting chords).** If chords $AB$ and $CD$ meet at a point $P$ inside the circle, then
$PA \cdot PB = PC \cdot PD$.

*Proof.* Join $AC$ and $BD$. Triangles $PAC$ and $PDB$ have $\angle APC = \angle DPB$ (vertical angles) and
$\angle PAC = \angle BAC = \angle BDC = \angle PDB$ (inscribed angles on the same arc $BC$). By AA they are similar
([Chapter 5](05-Similarity.md)), so $PA/PD = PC/PB$, and cross-multiplying gives $PA \cdot PB = PC \cdot PD$.
$\blacksquare$

**Theorem (secants and tangent from outside).** If two lines through a point $P$ outside the circle meet it at $A, B$
and at $C, D$, then $PA \cdot PB = PC \cdot PD$. If a tangent from $P$ touches at $T$, then $PT^2 = PA \cdot PB$.

*Proof.* For the secants: triangles $PAD$ and $PCB$ share the angle at $P$, and $\angle PDA = \angle CDA = \angle CBA = \angle PBC$
(same arc $AC$), so they are similar and $PA/PC = PD/PB$. For the tangent: triangles $PTA$ and $PBT$ share the angle
at $P$, and $\angle PTA = \angle TBA = \angle PBT$ by the tangent-chord angle (with $A$ between $P$ and $B$). So they are
similar: $PT/PB = PA/PT$, and $PT^2 = PA \cdot PB$. $\blacksquare$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Left: two chords AB and CD cross at P inside a circle; the triangles PAC and PDB are similar. Right: from P outside a circle, a secant meets the circle at A and B, and a tangent touches at T; PT squared equals PA times PB">
  <circle cx="101.8" cy="100" r="62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="117.3,112.4 55.5,141.2 90.6,39" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="117.3,112.4 132.4,153.9 163.1,91" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1.1"/>
  <line x1="55.5" y1="141.2" x2="163.1" y2="91" stroke="currentColor" stroke-width="1.6"/>
  <line x1="90.6" y1="39" x2="132.4" y2="153.9" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="55.5" cy="141.2" r="2.5" fill="currentColor"/>
  <circle cx="163.1" cy="91" r="2.5" fill="currentColor"/>
  <circle cx="90.6" cy="39" r="2.5" fill="currentColor"/>
  <circle cx="132.4" cy="153.9" r="2.5" fill="currentColor"/>
  <circle cx="117.3" cy="112.4" r="2.5" fill="currentColor"/>
  <text x="48" y="152.1" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <text x="173" y="93.8" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <text x="88.8" y="33.4" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <text x="137.3" y="166.8" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <text x="129.3" y="107.4" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <text x="101.8" y="192" font-size="12" text-anchor="middle" fill="currentColor">PA · PB = PC · PD</text>
  <circle cx="287.8" cy="100" r="62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="408.7,65.9 302.6,39.8 349.7,96.9" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <line x1="408.7" y1="65.9" x2="250.2" y2="149.3" stroke="currentColor" stroke-width="1.6"/>
  <line x1="408.7" y1="65.9" x2="302.6" y2="39.8" stroke="currentColor" stroke-width="1.6"/>
  <line x1="302.6" y1="39.8" x2="250.2" y2="149.3" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="287.8" y1="100" x2="302.6" y2="39.8" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="300.8,47 308.1,48.8 309.8,41.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="287.8" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="349.7" cy="96.9" r="2.5" fill="currentColor"/>
  <circle cx="250.2" cy="149.3" r="2.5" fill="currentColor"/>
  <circle cx="302.6" cy="39.8" r="2.5" fill="currentColor"/>
  <circle cx="408.7" cy="65.9" r="2.5" fill="currentColor"/>
  <text x="283.8" y="114" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <text x="244.1" y="161.4" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <text x="351.7" y="113.9" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <text x="305" y="34.3" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <text x="418.7" y="69.9" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <text x="325" y="192" font-size="12" text-anchor="middle" fill="currentColor">PT² = PA · PB</text>
</svg>
</div>

The three theorems are one. Take the line through $P$ and the centre $O$; let $d = OP$. It meets the circle at
distances $d - r$ and $d + r$ from $P$ (when $P$ is outside), and their product is $d^2 - r^2$. So **every** line
through $P$ that meets the circle twice cuts it in two pieces with product $d^2 - r^2$, and a tangent has
$PT^2 = d^2 - r^2$ (Pythagoras in the right triangle $OTP$ agrees). When $P$ is inside, the diameter through $P$ is cut
into $r - d$ and $r + d$, with product $r^2 - d^2$.

**Definition.** The **power** of the point $P$ with respect to the circle is $\operatorname{pow}(P) = d^2 - r^2$, where
$d = OP$. It is positive outside, zero on the circle and negative inside. With signed lengths (positive in one
direction along the line, negative in the other) the theorem reads $\overline{PA} \cdot \overline{PB} = \operatorname{pow}(P)$
for every line through $P$, inside or out.

**Worked examples.**

- Chords meet inside: $PA = 3$, $PB = 8$, $PC = 4$. Then $PD = 24/4 = 6$.
- From outside: a secant from $P$ meets the circle at distances 4 and 9. The tangent length is $\sqrt{36} = 6$.
- A circle has radius 7 and $P$ is 3 from the centre. Every chord through $P$ is cut into two pieces with product
  $49 - 9 = 40$; the shortest chord through $P$ is the one perpendicular to $OP$, with halves $\sqrt{40}$ each.

The set of points with equal power with respect to two circles is a straight line, the **radical axis** (for two
crossing circles, the line through their two crossing points). It reappears in
[Chapter 13](13-Inversion-and-Complex-Geometry.md).

### How far is the horizon?

Your eye is at height $h$ above a smooth sphere of radius $R$. The line of sight to the horizon is a tangent, touching
the sphere at $T$. Your eye $E$ is at distance $R + h$ from the centre, and the line through $E$ and the centre meets the
sphere at distances $h$ and $2R + h$ from $E$. By the tangent theorem,

$$ET^2 = h(2R + h), \qquad ET = \sqrt{2Rh + h^2} \approx \sqrt{2Rh} \text{ when } h \ll R .$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="An eye E at height h above the surface of a planet of radius R. The line of sight to the horizon touches the surface at T, at right angles to the radius CT; the height is drawn much larger than real">
  <polyline points="351.3,139.9 347,132.4 342.3,125.1 337.3,118 331.8,111.3 326.1,104.9 319.9,98.7 313.5,93 306.7,87.6 299.7,82.5 292.4,77.9 284.9,73.6 277.1,69.8 269.2,66.3 261,63.4 252.8,60.8 244.4,58.7 235.9,57.1 227.3,55.9 218.7,55.2 210,55 201.3,55.2 192.7,55.9 184.1,57.1 175.6,58.7 167.2,60.8 159,63.4 150.8,66.3 142.9,69.8 135.1,73.6 127.6,77.9 120.3,82.5 113.3,87.6 106.5,93 100.1,98.7 93.9,104.9 88.2,111.3 82.7,118 77.7,125.1 73,132.4 68.7,139.9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="210,215 68.7,139.9 73,132.4 77.7,125.1 82.7,118 88.2,111.3 93.9,104.9 100.1,98.7 106.5,93 113.3,87.6 120.3,82.5 127.6,77.9 135.1,73.6 142.9,69.8 150.8,66.3 159,63.4 167.2,60.8 175.6,58.7 184.1,57.1 192.7,55.9 201.3,55.2 210,55 218.7,55.2 227.3,55.9 235.9,57.1 244.4,58.7 252.8,60.8 261,63.4 269.2,66.3 277.1,69.8 284.9,73.6 292.4,77.9 299.7,82.5 306.7,87.6 313.5,93 319.9,98.7 326.1,104.9 331.8,111.3 337.3,118 342.3,125.1 347,132.4 351.3,139.9" fill="#eea66f" fill-opacity="0.3" stroke="currentColor" stroke-width="0"/>
  <line x1="210" y1="17.5" x2="303.8" y2="85.4" stroke="currentColor" stroke-width="1.8"/>
  <line x1="210" y1="215" x2="303.8" y2="85.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="210" y1="17.5" x2="210" y2="215" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <polyline points="297.9,93.5 289.8,87.6 295.7,79.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="210" y1="55" x2="210" y2="17.5" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="210" cy="17.5" r="2.5" fill="currentColor"/>
  <circle cx="303.8" cy="85.4" r="2.5" fill="currentColor"/>
  <circle cx="210" cy="215" r="2.5" fill="currentColor"/>
  <circle cx="210" cy="55" r="2.5" fill="currentColor"/>
  <text x="202" y="13.5" font-size="12" text-anchor="end" fill="currentColor">E (eye)</text>
  <text x="311.8" y="83.4" font-size="12" text-anchor="start" fill="currentColor">T (horizon)</text>
  <text x="218" y="219" font-size="12" text-anchor="start" fill="currentColor">C (centre)</text>
  <text x="200" y="40.2" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">h</text>
  <text x="264.9" y="154.2" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">R</text>
  <text x="200" y="135" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">R</text>
  <text x="266.9" y="43.4" font-size="12" text-anchor="start" fill="currentColor">ET = √(2Rh + h²)</text>
</svg>
</div>

**On Earth** ($R = 6371$ km), for an eye 1.7 m above flat ground or calm sea:
$\sqrt{2 \times 6\,371\,000 \times 1.7} \approx 4650$ m, about 4.7 km. From a 100 m cliff, about 35.7 km.

**On Mars** ($R = 3389.5$ km, the mean radius): from 1.7 m, $\sqrt{2 \times 3\,389\,500 \times 1.7} \approx 3390$ m,
about 3.4 km; from 100 m, about 26.0 km. A smaller planet curves away faster, so on open Martian plains the horizon is
noticeably closer than on Earth. (Real horizons depend on hills and, on Earth, on the bending of light in the air,
which makes the visible horizon a few per cent farther.)

## 6.6 Circumference and $\pi$

Measure the distance around a plate and divide by its diameter. Do it with a coin, a wheel, a running track. The
answer is always a little more than 3. Why the same number?

**Why the ratio is a constant.** Any two circles are similar: the dilation centred at the first centre with factor
$k = r_2/r_1$, followed by a slide, carries one onto the other. The length of a circle is defined through polygons:
inscribe a regular polygon, keep doubling its number of sides, and take the limit of the perimeters (they increase and
stay below the perimeter of any circumscribed square, so the limit exists). A dilation by $k$ carries each inscribed
polygon to an inscribed polygon of the bigger circle with $k$ times the perimeter, so the limits are in ratio $k$ as
well. So $C_2 / C_1 = k = d_2/d_1$, which says $C_1/d_1 = C_2/d_2$. That common ratio is called $\pi$:

$$C = \pi d = 2\pi r .$$

The letter $\pi$ (for the Greek *periphereia*) was used this way by William Jones in 1706 and made standard by Euler.

### Archimedes' polygons

In *Measurement of a Circle*, Archimedes (third century BCE) squeezed the circle between two regular polygons with 6,
12, 24, 48 and finally 96 sides: one inscribed (touching the circle at its corners, so shorter than the circle) and one
circumscribed (touching the circle at the midpoints of its sides, so longer).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 215" role="img" aria-label="Left: a circle between an inscribed and a circumscribed regular hexagon. Right: the same with 12-sided polygons, which hug the circle more closely">
  <polygon points="115,8.4 40,51.7 40,138.3 115,181.6 190,138.3 190,51.7" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="115" cy="95" r="75" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="115,20 50,57.5 50,132.5 115,170 180,132.5 180,57.5" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="115" cy="95" r="2" fill="currentColor"/>
  <text x="115" y="205.6" font-size="12" text-anchor="middle" fill="currentColor">6 sides: 3 &lt; π &lt; 3.464</text>
  <polygon points="325,17.4 286.2,27.8 257.8,56.2 247.4,95 257.8,133.8 286.2,162.2 325,172.6 363.8,162.2 392.2,133.8 402.6,95 392.2,56.2 363.8,27.8" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="325" cy="95" r="75" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="325,20 287.5,30 260,57.5 250,95 260,132.5 287.5,160 325,170 362.5,160 390,132.5 400,95 390,57.5 362.5,30" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="325" cy="95" r="2" fill="currentColor"/>
  <text x="325" y="196.6" font-size="12" text-anchor="middle" fill="currentColor">12 sides: 3.106 &lt; π &lt; 3.215</text>
</svg>
</div>

Start with hexagons in a circle of diameter 1 (radius $\tfrac12$).

- The **inscribed** hexagon is made of six equilateral triangles of side $\tfrac12$, so its perimeter is 3.
- The **circumscribed** hexagon has its apothem (the distance from the centre to the middle of a side) equal to
  $\tfrac12$. Each of its six equilateral triangles has height $\tfrac12$, so side $\tfrac12 \cdot 2/\sqrt3 = 1/\sqrt3$,
  and the perimeter is $6/\sqrt3 = 2\sqrt3 \approx 3.4641$.

So $3 < \pi < 3.4641$. To double the sides, write $b_n$ and $a_n$ for the perimeters of the inscribed and
circumscribed regular $n$-gons of a circle of diameter 1. Archimedes found (in different words, using the angle
bisector theorem of [Chapter 5](05-Similarity.md)) that

$$a_{2n} = \frac{2 a_n b_n}{a_n + b_n}, \qquad b_{2n} = \sqrt{a_{2n}\, b_n}.$$

The new outer perimeter is the harmonic mean of the old two, and the new inner perimeter the geometric mean of the
new outer and old inner. (You will prove these with trigonometry in [Chapter 7](07-Trigonometry.md), exercise 11.)

**Try it in Python.**

```python
a, b, n = 2 * 3 ** 0.5, 3.0, 6
while n < 96:
    a = 2 * a * b / (a + b)
    b = (a * b) ** 0.5
    n *= 2
    print(n, b, a)
```

| $n$ | inner $b_n$ | outer $a_n$ |
|---|---|---|
| 6 | 3.0000 | 3.4641 |
| 12 | 3.1058 | 3.2154 |
| 24 | 3.1326 | 3.1597 |
| 48 | 3.1394 | 3.1461 |
| 96 | 3.1410 | 3.1427 |

Archimedes did the square roots by hand, always rounding the inner bound down and the outer bound up so that the
inequalities stayed true, and stated the result as

$$3\tfrac{10}{71} < \pi < 3\tfrac17, \qquad 3.14084\ldots < \pi < 3.14285\ldots$$

The upper bound $22/7$ is the famous classroom value. Liu Hui in third-century China ran a similar polygon method;
Zu Chongzhi in the fifth century found $355/113 \approx 3.1415929$, correct to six decimal places. Today
$\pi = 3.14159265358979\ldots$ is known to trillions of digits, which tells us nothing new about circles but is a good
test of computers.

$\pi$ is **irrational** (Lambert proved it in the 1760s) and even **transcendental**, a root of no polynomial with
integer coefficients (Lindemann, 1882). That second fact is what makes "squaring the circle" impossible, in
[Chapter 14](14-Constructions-and-Impossibility.md).

## 6.7 Area of a circle, arcs and sectors

**The slicing argument.** Cut a disc of radius $r$ into many equal sectors, like a pizza, and lay them side by side,
alternately point up and point down. The result looks like a parallelogram with wavy top and bottom. Its height is
nearly $r$, and its base is half the circumference, $\pi r$, because half the crusts are on top and half on the bottom.
As the slices get thinner, the wavy edges flatten and the slanted sides become vertical. So the area is

$$A = \pi r \cdot r = \pi r^2 .$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Left: a disc cut into 12 equal sectors, the upper six blue and the lower six orange. Right: the sectors laid side by side, alternately pointing up and down, forming a shape close to a parallelogram of height r and base about pi r">
  <polygon points="84,96 144,96 143.9,92.1 143.5,88.2 142.8,84.3 142,80.5 140.8,76.7 139.4,73 137.8,69.5 136,66" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 136,66 133.9,62.7 131.6,59.5 129.1,56.4 126.4,53.6 123.6,50.9 120.5,48.4 117.3,46.1 114,44" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 114,44 110.5,42.2 107,40.6 103.3,39.2 99.5,38 95.7,37.2 91.8,36.5 87.9,36.1 84,36" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 84,36 80.1,36.1 76.2,36.5 72.3,37.2 68.5,38 64.7,39.2 61,40.6 57.5,42.2 54,44" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 54,44 50.7,46.1 47.5,48.4 44.4,50.9 41.6,53.6 38.9,56.4 36.4,59.5 34.1,62.7 32,66" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 32,66 30.2,69.5 28.6,73 27.2,76.7 26,80.5 25.2,84.3 24.5,88.2 24.1,92.1 24,96" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 24,96 24.1,99.9 24.5,103.8 25.2,107.7 26,111.5 27.2,115.3 28.6,119 30.2,122.5 32,126" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 32,126 34.1,129.3 36.4,132.5 38.9,135.6 41.6,138.4 44.4,141.1 47.5,143.6 50.7,145.9 54,148" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 54,148 57.5,149.8 61,151.4 64.7,152.8 68.5,154 72.3,154.8 76.2,155.5 80.1,155.9 84,156" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 84,156 87.9,155.9 91.8,155.5 95.7,154.8 99.5,154 103.3,152.8 107,151.4 110.5,149.8 114,148" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 114,148 117.3,145.9 120.5,143.6 123.6,141.1 126.4,138.4 129.1,135.6 131.6,132.5 133.9,129.3 136,126" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="84,96 136,126 137.8,122.5 139.4,119 140.8,115.3 142,111.5 142.8,107.7 143.5,103.8 143.9,99.9 144,96" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="195,66 179.5,124 183.3,124.8 187.2,125.5 191.1,125.9 195,126 198.9,125.9 202.8,125.5 206.7,124.8 210.5,124" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="210.5,124 226.1,66 222.2,65.1 218.4,64.5 214.5,64.1 210.5,64 206.6,64.1 202.7,64.5 198.8,65.1 195,66" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="226.1,66 210.5,124 214.4,124.8 218.2,125.5 222.1,125.9 226.1,126 230,125.9 233.9,125.5 237.8,124.8 241.6,124" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="241.6,124 257.1,66 253.3,65.1 249.4,64.5 245.5,64.1 241.6,64 237.7,64.1 233.8,64.5 229.9,65.1 226.1,66" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="257.1,66 241.6,124 245.4,124.8 249.3,125.5 253.2,125.9 257.1,126 261,125.9 264.9,125.5 268.8,124.8 272.6,124" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="272.6,124 288.2,66 284.4,65.1 280.5,64.5 276.6,64.1 272.6,64 268.7,64.1 264.8,64.5 260.9,65.1 257.1,66" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="288.2,66 272.6,124 276.5,124.8 280.3,125.5 284.3,125.9 288.2,126 292.1,125.9 296,125.5 299.9,124.8 303.7,124" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="303.7,124 319.2,66 315.4,65.1 311.5,64.5 307.6,64.1 303.7,64 299.8,64.1 295.9,64.5 292,65.1 288.2,66" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="319.2,66 303.7,124 307.5,124.8 311.4,125.5 315.3,125.9 319.2,126 323.2,125.9 327.1,125.5 330.9,124.8 334.8,124" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="334.8,124 350.3,66 346.5,65.1 342.6,64.5 338.7,64.1 334.8,64 330.8,64.1 326.9,64.5 323.1,65.1 319.2,66" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="350.3,66 334.8,124 338.6,124.8 342.5,125.5 346.4,125.9 350.3,126 354.2,125.9 358.1,125.5 362,124.8 365.8,124" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="365.8,124 381.3,66 377.5,65.1 373.7,64.5 369.7,64.1 365.8,64 361.9,64.1 358,64.5 354.1,65.1 350.3,66" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <text x="280.4" y="150" font-size="12" text-anchor="middle" fill="currentColor">about πr</text>
  <text x="178.2" y="95" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">r</text>
  <text x="84" y="176" font-size="12" text-anchor="middle" fill="currentColor">12 slices</text>
</svg>
</div>

That is a convincing picture, not yet a proof: "looks like" and "nearly" need a limit. Archimedes gave the proof.

**Theorem (Archimedes, *Measurement of a Circle*, Proposition 1).** The area of a circle equals the area of a right
triangle whose legs are the radius $r$ and the circumference $C$, that is $\tfrac12 C r$.

*Proof sketch.* Let $A$ be the area of the circle and $T = \tfrac12 C r$.

- Suppose $A > T$. Inscribed regular polygons with more and more sides fill up the circle, so there is one whose area
  is more than $T$. But an inscribed regular polygon is made of triangles with apex at the centre; its area is
  $\tfrac12 \cdot (\text{perimeter}) \cdot (\text{apothem})$, and the perimeter is less than $C$ and the apothem less
  than $r$. So its area is less than $T$. Contradiction.
- Suppose $A < T$. Circumscribed regular polygons shrink down onto the circle, so there is one whose area is less than
  $T$. Its area is $\tfrac12 \cdot (\text{perimeter}) \cdot r$, and its perimeter is more than $C$, so its area is
  more than $T$. Contradiction.

So $A = T$. $\blacksquare$ The proof uses two facts Archimedes took as evident: the perimeter of an inscribed
polygon is less than the circumference and that of a circumscribed one is more. A modern course in analysis proves
them from the definition of arc length.

With $C = 2\pi r$, the area is $\tfrac12 \cdot 2\pi r \cdot r = \pi r^2$. The same $\pi$ appears in the length and the
area; that is the content of the theorem.

### Arcs and sectors

A central angle of $\theta$ degrees takes the fraction $\theta/360$ of the whole circle, so (by the symmetry of the
circle, equal angles cut equal arcs and equal sectors)

$$\text{arc length} = \frac{\theta}{360} \cdot 2\pi r, \qquad \text{sector area} = \frac{\theta}{360} \cdot \pi r^2 = \tfrac12 \cdot (\text{arc length}) \cdot r .$$

The last form says a sector is like a triangle with base the arc and height the radius, the same idea as
Archimedes' theorem on a slice. In [Chapter 7](07-Trigonometry.md) we will measure angles in radians, where these
formulas become simply $s = r\theta$ and $A = \tfrac12 r^2\theta$.

**Worked example.** A sector of radius 10 cm has angle $72°$ (a fifth of the circle).

- Arc: $\tfrac{72}{360} \cdot 2\pi \cdot 10 = 4\pi \approx 12.57$ cm.
- Area: $\tfrac{72}{360} \cdot \pi \cdot 100 = 20\pi \approx 62.83$ square cm.

Check: $\tfrac12 \cdot 4\pi \cdot 10 = 20\pi$.

**Worked example (a segment).** Find the area of the segment cut off by a chord that subtends $90°$ at the centre of a
circle of radius 10. It is the sector minus the triangle: $\tfrac14 \pi \cdot 100 - \tfrac12 \cdot 10 \cdot 10 = 25\pi - 50 \approx 28.54$.

**Worked example (Eratosthenes' arc).** Eratosthenes, in the third century BCE, estimated the Earth's circumference
from the angle of the Sun's rays at two Egyptian cities (see [Chapter 1](01-Points-Lines-and-Angles.md)). In the
account that survives, written centuries later by Cleomedes, he used an angle of
one fiftieth of a full circle, $7.2°$, and a distance of 5000 stadia: the circumference is $50 \times 5000 = 250\,000$
stadia. The arc-length formula is exactly his reasoning: arc $= (\theta/360) \cdot C$, so $C = \text{arc} \cdot 360/\theta$.
How close he came depends on the length of a stadion, which is not known for certain.

## A short history

The circle theorems are in Book III of Euclid's *Elements* (around 300 BCE): the perpendicular bisector of a chord
(III.1 and III.3), the inscribed angle (III.20 and III.21), the angle in a semicircle (III.31), the cyclic
quadrilateral (III.22), the tangent (III.16 to III.18), the tangent-chord angle (III.32), intersecting chords (III.35)
and the tangent-secant theorem (III.36). Later Greek writers credited Thales with knowing that the angle in a semicircle is
right; nothing he wrote survives. Archimedes' *Measurement of a Circle* gave the area and the bounds on $\pi$. The name
"power of a point" is much later, from Jakob Steiner in the nineteenth century, who used it to unify these theorems.

## Check yourself

??? question "1. A chord of length 24 is 5 away from the centre. What is the radius?"

    The perpendicular from the centre bisects the chord, so $r = \sqrt{12^2 + 5^2} = 13$.

??? question "2. $A$, $B$, $C$ are on a circle with centre $O$ and $\angle ACB = 40°$ ($O$ inside the angle). Find $\angle AOB$ and $\angle OAB$."

    $\angle AOB = 80°$. Triangle $OAB$ is isosceles with $OA = OB$, so $\angle OAB = (180° - 80°)/2 = 50°$.

??? question "3. $AB$ is a diameter, $C$ is on the circle, $AC = 6$ and $BC = 8$. Find the radius."

    $\angle ACB = 90°$ (Thales), so $AB = \sqrt{36 + 64} = 10$ and the radius is 5.

??? question "4. A cyclic quadrilateral has angles $\angle A = 2x$, $\angle B = 3x$, $\angle C = 4x$ (in degrees). Find all four angles."

    $\angle A + \angle C = 180°$, so $6x = 180$ and $x = 30$: $\angle A = 60°$, $\angle B = 90°$, $\angle C = 120°$, and
    $\angle D = 180° - 90° = 90°$. Check: $60 + 90 + 120 + 90 = 360$.

??? question "5. Prove that a parallelogram inscribed in a circle is a rectangle."

    Opposite angles of a parallelogram are equal, and opposite angles of a cyclic quadrilateral add to $180°$. So each
    is $90°$, and a parallelogram with a right angle is a rectangle.

??? question "6. From a point $P$ 17 cm from the centre of a circle of radius 8 cm, tangents $PT_1$ and $PT_2$ are drawn. Find the tangent length and the length of the chord $T_1T_2$."

    $PT = \sqrt{17^2 - 8^2} = 15$. The chord $T_1T_2$ is perpendicular to $OP$ and bisected by it at a point $M$. In the right
    triangle $OT_1P$ the altitude from $T_1$ to the hypotenuse $OP$ is $T_1M = OT_1 \cdot PT_1 / OP = 8 \cdot 15/17 = 120/17$
    (area two ways). So $T_1T_2 = 240/17 \approx 14.12$ cm.

??? question "7. Chords $AB$ and $CD$ meet at $P$ with $PA = 5$, $PB = 6$ and $CD = 13$. Find $PC$ and $PD$."

    $PC \cdot PD = 30$ and $PC + PD = 13$, so $PC$ and $PD$ are the roots of $x^2 - 13x + 30 = 0$, which are 10 and 3.

??? question "8. A secant from $P$ meets a circle at $A$ and $B$ with $PA = 5$ and $AB = 15$. A second secant meets it at $C$ and $D$ with $PC = 4$. Find $CD$ and the tangent length from $P$."

    $PB = 20$, so $PA \cdot PB = 100$. Then $PD = 100/4 = 25$ and $CD = 21$. The tangent length is $\sqrt{100} = 10$.

??? question "9. How far is the horizon for an astronaut whose eyes are 1.8 m above a flat plain on Mars ($R = 3389.5$ km)? From the top of a 1 km high ridge? Compare with Earth ($R = 6371$ km) from 1.8 m."

    $\sqrt{2 \cdot 3\,389\,500 \cdot 1.8} \approx 3493$ m, about 3.5 km. From 1000 m: $\sqrt{2 \cdot 3\,389\,500 \cdot 1000 + 1000^2} \approx 82\,340$ m,
    about 82 km. On Earth from 1.8 m: $\sqrt{2 \cdot 6\,371\,000 \cdot 1.8} \approx 4789$ m, about 4.8 km.

??? question "10. A sector of a circle of radius 6 has area $12\pi$. Find its angle and the length of its arc."

    $\tfrac{\theta}{360}\pi \cdot 36 = 12\pi$ gives $\theta = 120°$. The arc is $\tfrac{120}{360} \cdot 2\pi \cdot 6 = 4\pi \approx 12.57$.
    Check: $\tfrac12 \cdot 4\pi \cdot 6 = 12\pi$.

??? question "11. Prove the alternate segment theorem without the diameter: use the inscribed angle theorem and the fact that the tangent at $A$ is perpendicular to $OA$."

    Let the chord $AB$ have central angle $\angle AOB = 2\gamma$, so an inscribed angle $\angle ACB$ on the far arc is $\gamma$.
    Triangle $OAB$ is isosceles, so $\angle OAB = (180° - 2\gamma)/2 = 90° - \gamma$. The tangent makes $90°$ with $OA$, so the
    angle between the tangent and $AB$ (on the side away from $O$) is $90° - (90° - \gamma) = \gamma = \angle ACB$.

??? question "12. Two circles of radii 9 and 4 touch each other from outside. A common tangent touches them at $T_1$ and $T_2$ (not at the touching point). How long is $T_1T_2$?"

    The centres are $9 + 4 = 13$ apart. The radii to $T_1$ and $T_2$ are both perpendicular to the tangent, so they are parallel.
    Through the small centre draw a line parallel to $T_1T_2$: it makes a right triangle with hypotenuse 13 and one leg $9 - 4 = 5$.
    The other leg equals $T_1T_2 = \sqrt{169 - 25} = 12$. (In general $2\sqrt{r_1 r_2}$, here $2\sqrt{36} = 12$.)

## What you learned

- The perpendicular bisector of every chord passes through the centre; three points not on a line lie on exactly one
  circle, so every triangle has a circumcircle.
- An inscribed angle is half the central angle on the same arc (proved in three cases); angles in a semicircle are
  right (Thales).
- A convex quadrilateral is cyclic exactly when its opposite angles add to $180°$.
- A tangent is perpendicular to the radius; the two tangents from a point are equal; the tangent-chord angle equals the
  inscribed angle on the other side.
- For every line through $P$ meeting the circle at $A$ and $B$, $PA \cdot PB$ is the power $|d^2 - r^2|$; the tangent
  case gives the distance to the horizon, about 4.7 km on Earth and 3.4 km on Mars for a standing person.
- $C/d$ is the same number $\pi$ for every circle because all circles are similar; Archimedes' 96-gons gave
  $3\tfrac{10}{71} < \pi < 3\tfrac17$, and his exhaustion proof gives $A = \tfrac12 C r = \pi r^2$.

**Next:** [Chapter 7](07-Trigonometry.md) turns similar triangles into numbers: sine, cosine and tangent, radians,
the laws of sines and cosines, and how they measured the distance to the Moon and to Mars.

## Further reading

- Euclid, *Elements*, Book III (T. L. Heath, *The Thirteen Books of Euclid's Elements*, 1908, 2nd edition 1926).
- Archimedes, *Measurement of a Circle*, in T. L. Heath (ed.), *The Works of Archimedes*, 1897.
- H. S. M. Coxeter and S. L. Greitzer, *Geometry Revisited*, 1967, Chapter 2 (power of a point, radical axis).
- R. Hartshorne, *Geometry: Euclid and Beyond*, 2000.
- P. Beckmann, *A History of Pi*, 1970.
- J. Arndt and C. Haenel, *Pi Unleashed*, 2001.
- On this site: the Topics lessons [Circle words](../../topics/geometry/level-5/06-circle-words.md),
  [Pi and the circumference](../../topics/geometry/level-6/04-pi-circumference.md),
  [Area of a circle, sectors and arcs](../../topics/geometry/level-6/05-circle-area-sectors.md),
  [Circle theorems](../../topics/geometry/level-7/06-circle-theorems.md) and
  [Equations of circles](../../topics/geometry/level-7/07-circle-equations.md); the U of T guide
  [MAT137 Unit 7: The Definition of the Integral](../../uoft/MAT137/unit07.md) (areas as limits, the modern form of
  Archimedes' method); and the [Geometry book's contents](index.md).
