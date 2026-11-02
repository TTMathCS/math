---
title: "Compass and straightedge"
---

# Compass and straightedge

*Geometry · level 5, lesson 1 of 6*

## A question to start

With nothing but a compass and a ruler that has **no marks on it**, you can cut any angle exactly in half. You can
cut a line exactly in half, draw a perfect right angle, and build a perfect equilateral triangle. No measuring, no
numbers, and the result is exact, not "close enough".

So here is the puzzle the ancient Greeks set themselves: with the same two tools, can you cut **any** angle into
**three** equal parts? People tried for more than two thousand years. In 1837 a young French mathematician, Pierre
Wantzel, proved that it **cannot** be done in general. Not "nobody has found the way yet", but "there is no way".
Halving is easy; thirding is impossible. By the end of this lesson you will be able to do the easy part with your
own hands, and you will see why each step works.

## The idea

### The two tools and the rules of the game

A **straightedge** is a ruler with no marks. You may use it only to draw a straight line through two points you
already have. You may **not** use it to measure.

A **compass** draws circles. You put its point on one point (the **centre**) and open it so the pencil sits on
another point; the gap between point and pencil is the **radius**. Then you swing it round. Every point on the
circle you draw is exactly that radius away from the centre. That is the whole secret of compass constructions:

> **A compass is a machine for making equal lengths.**

A **construction** is a recipe that uses only these two tools. You may draw a line through two points, a circle
with a given centre through a given point, and mark the points where lines and circles cross. Nothing else. You do
not need to draw whole circles: a short piece of a circle, called an **arc**, is enough, as long as it is long
enough to cross what it needs to cross.

Why play with such limited tools? Because a construction is **exact**. A protractor can be off by half a degree; a
ruler can be off by half a millimetre. A construction, done with perfect tools, is perfect, and the reason it works
can be **proved**. That is why Euclid, about 2300 years ago, built the whole of his geometry book, the *Elements*, on
these two tools.

### Copying a segment

A **segment** is a piece of a straight line with two ends, such as $AB$. To copy it onto another line:

1. Put the compass point on $A$ and open it until the pencil touches $B$.
2. Without changing the opening, move the point to the start $P$ of your new line and draw an arc crossing it.
3. Call the crossing point $Q$. Then $PQ$ is exactly as long as $AB$.

Why it works: the compass kept the same radius, and every point on its arc is that radius from the centre.

### Bisecting a segment: the perpendicular bisector

To **bisect** means to cut into two equal parts. The line that cuts segment $AB$ in half **and** meets it at a right
angle is called the **perpendicular bisector** of $AB$. ("Perpendicular" means "at right angles".)

1. Open the compass to **more than half** of $AB$.
2. With the point on $A$, draw an arc above $AB$ and an arc below it.
3. With the **same** opening and the point on $B$, draw arcs that cross the first two. Call the crossings $P$
   (above) and $Q$ (below).
4. Draw the straight line through $P$ and $Q$. It crosses $AB$ at $M$, the **midpoint** (the middle point).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 220" role="img" aria-label="Segment AB with equal arcs drawn from A and from B, crossing above at P and below at Q; the line PQ cuts AB at its midpoint M at a right angle">
  <g fill="none" stroke="#9cc9ea" stroke-width="2">
    <path d="M 138.3 16.7 A 110 110 0 0 1 175.3 55"/>
    <path d="M 175.3 165 A 110 110 0 0 1 138.3 203.3"/>
    <path d="M 144.7 55 A 110 110 0 0 1 181.7 16.7"/>
    <path d="M 181.7 203.3 A 110 110 0 0 1 144.7 165"/>
  </g>
  <line x1="80" y1="110" x2="240" y2="110" stroke="currentColor" stroke-width="2.5"/>
  <line x1="160" y1="20" x2="160" y2="200" stroke="#eea66f" stroke-width="2.5"/>
  <g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3">
    <line x1="80" y1="110" x2="160" y2="34.5"/><line x1="240" y1="110" x2="160" y2="34.5"/>
  </g>
  <rect x="160" y="98" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g fill="currentColor"><circle cx="80" cy="110" r="3.5"/><circle cx="240" cy="110" r="3.5"/><circle cx="160" cy="34.5" r="3.5"/><circle cx="160" cy="185.5" r="3.5"/><circle cx="160" cy="110" r="3.5"/></g>
  <g font-size="15" fill="currentColor">
    <text x="62" y="115">A</text><text x="248" y="115">B</text><text x="168" y="34">P</text><text x="168" y="196">Q</text><text x="143" y="128">M</text>
  </g>
</svg>
</div>

**Why it works.** Look at point $P$. It sits on the arc drawn from $A$, so $PA$ equals the compass opening. It also
sits on the arc drawn from $B$ with the same opening, so $PB$ is the same length. So $PA = PB$: $P$ is **the same
distance from $A$ as from $B$**. The same is true of $Q$. The four points $A, P, B, Q$ make a shape with four equal
sides, a **rhombus** (the dashed lines show two of its sides). The diagonals of a rhombus always cut each other in
half at right angles: fold the rhombus along $PQ$ and $A$ lands exactly on $B$, because the two halves match side
for side. So the fold line $PQ$ cuts $AB$ in half, and since folding sends the angle on one side of $M$ onto the
angle on the other, those two angles are equal and add to $180°$, so each is $90°$.

There is a beautiful fact hiding here, worth remembering on its own:

> **The perpendicular bisector of $AB$ is exactly the set of all points that are the same distance from $A$ and
> from $B$.**

Every point on the line is equally far from both ends, and every point equally far from both ends is on the line.
You will use this again and again: for finding the centre of a circle, for reflections, and for the "fair meeting
point" puzzles in the examples below.

### Bisecting an angle

An **angle** is made by two rays (half-lines) from one point, the **vertex**. The **angle bisector** is the ray that
cuts the angle into two equal angles.

1. With the compass point on the vertex $V$, draw an arc crossing both arms. Call the crossings $P$ and $Q$.
2. With the point on $P$, draw an arc inside the angle. With the **same** opening and the point on $Q$, draw an arc
   that crosses it. Call the crossing $R$.
3. Draw the ray from $V$ through $R$. That is the bisector.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 280 200" role="img" aria-label="An angle at vertex V with an arc cutting both arms at P and Q; two equal arcs from P and Q cross at R, and the ray from V through R bisects the angle">
  <g stroke="currentColor" stroke-width="2.5">
    <line x1="40" y1="170" x2="260" y2="170"/><line x1="40" y1="170" x2="155.7" y2="32.1"/>
  </g>
  <line x1="40" y1="170" x2="239.4" y2="77" stroke="#eea66f" stroke-width="2.5"/>
  <g fill="none" stroke="#9cc9ea" stroke-width="2">
    <path d="M 82.3 90.5 A 90 90 0 0 1 128 188.7"/>
    <path d="M 155.1 99.3 A 75 75 0 0 1 187 121.3"/>
    <path d="M 171.9 88.6 A 75 75 0 0 1 168.2 127.3"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3">
    <line x1="130" y1="170" x2="172.5" y2="108.2"/><line x1="97.9" y1="101.1" x2="172.5" y2="108.2"/>
  </g>
  <g fill="currentColor"><circle cx="40" cy="170" r="3.5"/><circle cx="130" cy="170" r="3.5"/><circle cx="97.9" cy="101.1" r="3.5"/><circle cx="172.5" cy="108.2" r="3.5"/></g>
  <g font-size="15" fill="currentColor">
    <text x="22" y="176">V</text><text x="126" y="190">P</text><text x="78" y="100">Q</text><text x="178" y="104">R</text>
  </g>
</svg>
</div>

**Why it works.** Join $P$ to $R$ and $Q$ to $R$ (dashed). Now compare the two triangles $VPR$ and $VQR$:

- $VP = VQ$, because both came from the first arc centred on $V$;
- $PR = QR$, because both came from arcs with the same opening;
- $VR$ is shared by both triangles.

The two triangles have all three sides equal, one for one. Two triangles with the same three sides are the same
triangle, just possibly flipped over (you will see in [lesson 5](05-congruent-triangles.md) that this rule is
called **SSS**). So their angles match too, and in particular angle $PVR$ equals angle $QVR$. The ray $VR$ splits
the angle into two equal parts. The shape $VPRQ$ is a **kite**, and the bisector is its line of symmetry.

### Copying an angle

To copy angle $V$ onto a new ray starting at $V'$: draw an arc from $V$ crossing both arms at $P$ and $Q$; draw the
same arc from $V'$, crossing the new ray at $P'$; set the compass to the distance $PQ$, put its point on $P'$ and
mark $Q'$ on the new arc. The ray $V'Q'$ makes the same angle. The reason is the same as before: triangles $VPQ$ and
$V'P'Q'$ have the same three sides.

### Building special angles

The very first construction in Euclid's *Elements* is the **equilateral triangle** (all three sides equal). Draw a
circle centred on $A$ through $B$, and a circle centred on $B$ through $A$. Where they cross is $C$. Then
$CA = AB$ (same circle) and $CB = BA$ (same circle), so all three sides are equal and every angle is $60°$.

From there, everything else follows:

- **60°**: an angle of the equilateral triangle.
- **30°**: bisect 60°. **15°**: bisect 30°.
- **90°**: the perpendicular bisector makes one. **45°**: bisect 90°.
- **120°**: two 60° angles side by side. **75°** is 60° + 15°, and so on.

### What the tools cannot do

You can halve any angle, and halve again, as often as you like. But **trisecting** (cutting into three) a general
angle, like 60°, is impossible with compass and straightedge; that is Wantzel's 1837 theorem. Two other old
problems are also impossible: making a square with the same area as a given circle, and making a cube with double
the volume of a given cube. The proofs use algebra, not geometry: every length you can construct turns out to be
built from whole numbers using only $+$, $-$, $\times$, $\div$ and square roots, and the lengths those problems need
are not of that kind. A 20° angle (a third of 60°) would need a cube root.

Some angles **can** be trisected: 90° can (just build 30°), and so can 180° (build 60°). The theorem says no single
recipe works for every angle.

## Worked examples

**1. Find the midpoint of a 9 cm plank with no ruler.**

1. Put the compass point on one end $A$ and open it well past halfway, say about 6 cm (the exact amount does not
   matter, as long as it is more than half).
2. Draw arcs above and below the plank. Keep the opening and repeat from the other end $B$.
3. Join the two crossings. Where that line meets the plank is the midpoint, exactly 4.5 cm from each end.

If the opening were **less** than half (say 4 cm), the two arcs would not reach each other and there would be no
crossings. That is why step 1 says "more than half".

**2. Construct a 45° angle.**

1. Draw a line and mark a point $A$ on it. Build a right angle at $A$: draw a circle centred on $A$ cutting the line
   at $B$ and $C$, then construct the perpendicular bisector of $BC$. It passes through $A$ (because $A$ is the same
   distance from $B$ and $C$), so it meets the line at $A$ at 90°.
2. Bisect that right angle. Each half is $90° \div 2 = 45°$.

**3. A fair place for a water tank.** Three houses stand at $A$, $B$ and $C$, not in a line. Where should a tank go
so that it is the same distance from all three?

1. Every point the same distance from $A$ and $B$ lies on the perpendicular bisector of $AB$. Construct it.
2. Every point the same distance from $B$ and $C$ lies on the perpendicular bisector of $BC$. Construct it.
3. Where the two lines cross, the point $O$ is as far from $A$ as from $B$, and as far from $B$ as from $C$. So it is
   equally far from all three. Put the tank there.

A bonus: since $O$ is equally far from $A$ and $C$ too, it must also lie on the perpendicular bisector of $AC$. The
three bisectors always meet at one point. And a circle centred on $O$ through $A$ passes through $B$ and $C$ as
well: this is how to draw the circle through any three points, called the **circumcircle**.

**4. Construct a 75° angle.** 75 = 60 + 15. Build a 60° angle from an equilateral triangle. On the other side of one
arm, build another 60° angle, bisect it to get 30°, and bisect again to get 15°. The two angles side by side make
$60° + 15° = 75°$.

## Try it

1. Why must the compass opening be more than half of $AB$ when you bisect a segment?
2. Describe how to construct a 30° angle.
3. Which of these angles can you construct by starting from 60° and 90° and bisecting or adding: 22.5°, 105°, 135°,
   20°?
4. A point $P$ is 7 cm from $A$ and 7 cm from $B$. Where must $P$ lie?
5. You construct the perpendicular bisectors of two sides of a triangle and they cross at $O$. $O$ is 5 cm from one
   corner. How far is it from each of the other two corners?
6. A circular plate has broken; you have only a curved piece of its edge. Explain how to find where the centre of
   the plate was.
7. Harder: an angle is bisected, then each half is bisected again, then each of those halves is bisected again. The
   smallest angles are 6° each. What was the original angle, and how many small angles are there?

??? note "Answers"
    1. If the opening is half or less, the arc from $A$ and the arc from $B$ do not reach past the middle, so they
       never cross (or just touch at one point on $AB$), and you get no points $P$ and $Q$ to join.
    2. Construct an equilateral triangle (circles centred on each end of a segment, through the other end); one of
       its angles is 60°. Bisect that angle: $60° \div 2 = 30°$.
    3. 22.5° yes: bisect 90° to get 45°, then bisect again. 105° yes: $90° + 15°$, where 15° comes from bisecting
       60° twice. 135° yes: $90° + 45°$. 20° no: it is a third of 60°, and needs a trisection, which Wantzel showed
       cannot be done with these tools.
    4. $P$ is the same distance from $A$ and $B$, so it lies on the perpendicular bisector of $AB$. (There are two
       such points 7 cm from each end, one on each side of $AB$, as long as $AB$ is shorter than 14 cm.)
    5. 5 cm from each. $O$ is on the bisector of the first side, so it is equally far from those two corners; it is on
       the bisector of the second side, so it is equally far from those two. Since the sides share a corner, all
       three distances are equal.
    6. Mark three points $A$, $B$, $C$ on the curved edge. Construct the perpendicular bisectors of $AB$ and $BC$.
       The centre is the same distance from every point on the rim, so it lies on both bisectors; it is where they
       cross.
    7. Three rounds of bisecting cut the angle into $2 \times 2 \times 2 = 8$ equal parts. Each is 6°, so the
       original angle was $8 \times 6° = 48°$.

## Common mistake

**Changing the compass opening halfway through.** In the perpendicular bisector and the angle bisector, the arcs
from the two ends **must** use the same opening. If you adjust the compass between them, $P$ is no longer equally
far from both ends, and the "why it works" falls apart: the line you draw will miss the midpoint. Set the opening
once and do not touch it until both arcs are drawn.

**Measuring "just to be sure".** Using the marks on a ruler, or a protractor, is not a construction. It may give a
good picture, but it is not exact and it is not what the question asks. Use the straightedge only to join points.

## Where it leads

- Back: [Level 4: angle facts](../level-4/index.md), where the angles you build here were first named and added.
- Next lesson: [Constructing triangles](02-constructing-triangles.md), where arcs decide whether a triangle can
  exist at all.
- The proofs behind each construction are the congruence rules of
  [lesson 5: congruent triangles](05-congruent-triangles.md).
- This level: [Level 5: constructions and transformations](index.md).
- Why trisecting is impossible is a question about which numbers can be built from others:
  [Numbers](../../numbers/index.md) and [Algebra](../../algebra/index.md).
- How mathematicians write careful proofs, the habit Euclid started: [MAT137 Unit 1: logic, sets and
  proofs](../../../uoft/MAT137/unit01.md).
