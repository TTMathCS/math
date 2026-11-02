---
title: "Congruent triangles"
---

# Congruent triangles

*Geometry · level 5, lesson 5 of 6*

## A question to start

You want to know how wide a river is, but you cannot cross it. On the far bank, right opposite you, there is a tree.
All you have is a long tape measure, a few sticks and your feet. Can you find the width without getting wet?

Yes, and people have used tricks like this for thousands of years. You walk along your own bank, plant a stick, walk
the same distance again, turn at a right angle away from the river, and walk until the stick and the tree line up.
The distance you walked away from the river **is** the width of the river. Worked example 4 shows why. The reason is
a pair of triangles that are exact copies of each other, one across the water and one on dry land.

## The idea

### What "congruent" means

Two shapes are **congruent** if one can be moved exactly on top of the other by translations, rotations and
reflections (the rigid motions of [lesson 3](03-transformations-grid.md)). Congruent shapes have the same size and
the same shape; only their position, and maybe which way round they face, is different.

For triangles we write $\triangle ABC \cong \triangle DEF$, read "triangle $ABC$ is congruent to triangle $DEF$". The
**order of the letters matters**: it says which corner matches which. $A$ matches $D$, $B$ matches $E$, $C$ matches
$F$. So side $AB$ matches $DE$, angle $C$ matches angle $F$, and so on. Matching sides and angles are called
**corresponding** parts.

If two triangles are congruent, **all six** corresponding parts are equal: three sides and three angles. The big
question of this lesson is the other way round: **how few** equal parts do you need to check to be sure two triangles
are congruent?

### Three parts are enough, if they are the right three

In [lesson 2](02-constructing-triangles.md) you saw that some sets of three measurements let you build only **one**
triangle (maybe flipped over). That is exactly what we need: if two triangles share those three measurements, they
were both built by the same recipe, so they must be copies of each other. Each recipe becomes a **congruence test**.

**SSS (side, side, side).** If the three sides of one triangle equal the three sides of the other, the triangles are
congruent. *Why:* with the base drawn, the third corner must lie on two circles, which cross only at two
mirror-image points. Any two triangles with those sides are copies.

**SAS (side, angle, side).** Two sides and the angle **between** them (the **included** angle). *Why:* the angle fixes
the direction of the second side and its length fixes the third corner; there is no choice left.

**ASA (angle, side, angle).** Two angles and the side between them. *Why:* two rays from the ends of a fixed side, in
fixed directions, cross at only one point.

**AAS (angle, angle, side).** Two angles and a side that is **not** between them. *Why:* the angles add to 180°, so
the third angle is known too; now the side **is** between two known angles, and ASA applies.

**RHS (right angle, hypotenuse, side).** Both triangles have a right angle, equal **hypotenuses** (the side opposite
the right angle, always the longest) and one other pair of equal sides. *Why:* draw the right angle and mark the
known leg along one arm. The third corner is on the other arm, and it must be one hypotenuse-length from the top of
the leg. A circle of that radius around the top of the leg crosses the other arm's line once on each side of the
right angle, and those two points are mirror images. So the triangle is fixed. (In level 6 you will also be able to
**calculate** the third side with Pythagoras.)

### Why SSA fails

**SSA** means two sides and an angle that is **not** between them. Try $\angle A = 30°$, $AB = 10$ and $BC = 6$.

Draw the angle at $A$. Mark $B$ on one arm, 10 from $A$. The corner $C$ is on the other arm, 6 from $B$, so it is on
the circle of radius 6 around $B$. That circle crosses the arm **twice**:

<div class="pattern-row" markdown="0">
<svg viewBox="0 50 300 140" role="img" aria-label="Angle A of 30 degrees with B 10 units up the slanted arm; a circle of radius 6 around B cuts the base line at two points C1 and C2, giving two different triangles that both have angle A 30, AB 10 and BC 6">
  <polygon points="30,170 203.2,70 269.5,170" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <polygon points="30,170 203.2,70 136.9,170" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="2"/>
  <path d="M 283.5 159.2 A 120 120 0 0 1 122.9 159.2" fill="none" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="203.2" y1="70" x2="203.2" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="30" y1="170" x2="295" y2="170" stroke="currentColor" stroke-width="2"/>
  <g fill="currentColor"><circle cx="30" cy="170" r="3.5"/><circle cx="203.2" cy="70" r="3.5"/><circle cx="136.9" cy="170" r="3.5"/><circle cx="269.5" cy="170" r="3.5"/></g>
  <g font-size="14" fill="currentColor">
    <text x="18" y="186">A</text><text x="198" y="62">B</text><text x="128" y="186">C₁</text><text x="262" y="186">C₂</text>
    <text x="58" y="164">30°</text><text x="108" y="112">10</text><text x="152" y="122">6</text><text x="242" y="122">6</text><text x="207" y="130">5</text>
  </g>
</svg>
</div>

Both triangles $ABC_1$ (blue) and $ABC_2$ (blue and orange together) have $\angle A = 30°$, $AB = 10$ and $BC = 6$.
But they are clearly not the same: one is much wider than the other. So SSA is **not** a congruence test.

How high is $B$ above the base? A right triangle with a 30° angle is exactly half of an equilateral triangle (cut an
equilateral triangle down its line of symmetry), so the side opposite the 30° angle is **half** the hypotenuse. Here
the height is $10 \div 2 = 5$. Now compare $BC$ with that height of 5 and with $AB = 10$:

| $BC$ | What the circle does | Triangles |
| --- | --- | --- |
| less than 5 | does not reach the base | none |
| exactly 5 | just touches the base | one (a right triangle) |
| between 5 and 10 | crosses the base twice | **two** |
| 10 or more | crosses the arm only once (the other crossing is at $A$ or behind it) | one |

So SSA does work in one situation: when the side **opposite** the given angle is at least as long as the other given
side. RHS is that case, since the hypotenuse is always the longest side. This "two triangles" puzzle returns in
level 7 as the **ambiguous case** of the sine law.

**AAA** is not a test either: three equal angles give the same shape but any size.

### Using congruence to prove things

Once two triangles are known to be congruent, **every** pair of corresponding parts is equal, including the ones you
were not given. This makes congruence a machine for proving facts. Three classic examples:

**The base angles of an isosceles triangle are equal.** An **isosceles** triangle has two equal sides,
$AB = AC$. Draw the bisector of angle $A$, meeting $BC$ at $M$.

<div class="pattern-row" markdown="0">
<svg viewBox="40 0 200 190" role="img" aria-label="Isosceles triangle with apex A at the top, equal sides AB and AC, and the bisector of angle A dropping to M on the base BC">
  <polygon points="140,20 60,170 220,170" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <line x1="140" y1="20" x2="140" y2="170" stroke="#eea66f" stroke-width="2.5"/>
  <g stroke="currentColor" stroke-width="2"><line x1="94" y1="92" x2="104" y2="98"/><line x1="186" y1="92" x2="176" y2="98"/></g>
  <g font-size="14" fill="currentColor">
    <text x="134" y="14">A</text><text x="46" y="182">B</text><text x="224" y="182">C</text><text x="134" y="186">M</text>
  </g>
</svg>
</div>

In triangles $ABM$ and $ACM$: $AB = AC$ (given), $\angle BAM = \angle CAM$ (we bisected), and $AM$ is shared. That is
SAS, so $\triangle ABM \cong \triangle ACM$, and therefore $\angle B = \angle C$. As a bonus, $BM = CM$ and the two
angles at $M$ are equal and add to 180°, so each is 90°: the bisector from the top is also the perpendicular
bisector of the base.

**Every point on the perpendicular bisector of $AB$ is equally far from $A$ and $B$.** Take $P$ on it, with $M$ the
midpoint. Triangles $PMA$ and $PMB$ have $AM = BM$, right angles at $M$, and $PM$ shared: SAS. So $PA = PB$. This is
the fact that made the constructions of [lesson 1](01-compass-straightedge.md) work.

**Opposite sides of a parallelogram are equal.** Draw a diagonal. It makes two triangles with the diagonal shared,
and two pairs of **alternate angles** equal (from [level 4](../level-4/index.md): a line crossing two parallel lines
makes equal alternate angles). That is ASA, so the triangles are congruent and the opposite sides match.

## Worked examples

**1. Which test?** In each case, say whether the triangles must be congruent.

1. $AB = DE = 5$, $BC = EF = 7$, $\angle B = \angle E = 40°$. The angle is between the two sides: **SAS**, congruent.
2. $\angle A = \angle D = 50°$, $\angle B = \angle E = 60°$, $BC = EF = 8$. Two angles and a side not between them:
   **AAS**, congruent.
3. $AB = DE = 9$, $BC = EF = 6$, $\angle A = \angle D = 30°$. The angle is not between the sides: **SSA**, not
   enough. By the table, $6$ is between half of 9 and 9, so there are two possible triangles.

**2. Using the matching.** $\triangle PQR \cong \triangle XYZ$, with $PQ = 7$ cm, $QR = 9$ cm and $\angle R = 40°$.
From the order of letters, $Q \leftrightarrow Y$ and $R \leftrightarrow Z$, so $YZ = QR = 9$ cm and
$\angle Z = \angle R = 40°$.

**3. Diagonals of a rectangle are equal.** Rectangle $ABCD$: compare triangles $ABC$ and $BAD$. $AB$ is shared;
$BC = AD$ (opposite sides of a rectangle); $\angle ABC = \angle BAD = 90°$. SAS, so the triangles are congruent and
the diagonals $AC$ and $BD$ are equal.

**4. The river.** You stand at $A$, right opposite a tree $T$, so $AT$ crosses the river at right angles. Walk along
the bank 40 m to $B$ and plant a stick. Walk on 40 m to $C$. Turn 90° away from the river and walk until the stick at
$B$ hides the tree. Call that spot $D$. Suppose $CD = 23$ m.

1. $AB = CB = 40$ m.
2. $\angle TAB = \angle DCB = 90°$.
3. $\angle ABT = \angle CBD$: they are vertically opposite angles, because $T$, $B$, $D$ are in a line.
4. ASA: $\triangle ABT \cong \triangle CBD$. So $AT = CD = 23$ m. The river is 23 m wide.

## Try it

1. Name the test, or say "not enough": (a) all three sides equal; (b) two angles and a side not between them;
   (c) $AB = DE$, $BC = EF$, $\angle A = \angle D$; (d) all three angles equal; (e) both have a right angle, equal
   hypotenuses and one other equal side.
2. $\triangle KLM \cong \triangle RST$. $KL = 4$, $LM = 6$, $\angle K = 75°$, $\angle L = 45°$. Find $ST$, $\angle R$
   and $\angle T$.
3. A **kite** $ABCD$ has $AB = AD$ and $CB = CD$. Prove that the diagonal $AC$ bisects $\angle A$.
4. $\angle A = 30°$ and $AB = 8$. For each length of $BC$, how many triangles $ABC$ are there? (a) 3 (b) 4 (c) 6
   (d) 10.
5. In the river method, $AB = CB = 25$ m and $CD = 18$ m. How wide is the river?
6. Why are any two equilateral triangles with sides of 5 cm congruent?
7. Harder: $P$ is on the bisector of angle $A$. Drop perpendiculars from $P$ to the two arms, meeting them at $X$ and
   $Y$. Prove that $PX = PY$.

??? note "Answers"
    1. (a) SSS. (b) AAS. (c) Not enough: SSA. (d) Not enough: AAA fixes the shape, not the size. (e) RHS.
    2. $K \leftrightarrow R$, $L \leftrightarrow S$, $M \leftrightarrow T$. $ST = LM = 6$, $\angle R = \angle K = 75°$,
       and $\angle T = \angle M = 180° - 75° - 45° = 60°$.
    3. In triangles $ABC$ and $ADC$: $AB = AD$, $CB = CD$, and $AC$ is shared. SSS, so they are congruent, and
       $\angle BAC = \angle DAC$. So $AC$ cuts $\angle A$ into two equal parts.
    4. The height of $B$ above the other arm is $8 \div 2 = 4$. (a) 3 is less than 4: no triangle. (b) 4: exactly
       one, a right triangle. (c) 6 is between 4 and 8: two triangles. (d) 10 is at least 8: one triangle.
    5. 18 m, by the same ASA argument as worked example 4.
    6. All three sides are 5 cm in both: SSS.
    7. In triangles $AXP$ and $AYP$: $\angle XAP = \angle YAP$ ($AP$ is the bisector), $\angle AXP = \angle AYP = 90°$,
       and $AP$ is shared (it is not between the two angles in either triangle). AAS, so the triangles are
       congruent, and $PX = PY$. Every point on an angle bisector is equally far from the two arms.

## Common mistake

**Writing the letters in the wrong order.** If $\angle A$ matches $\angle E$, do not write
$\triangle ABC \cong \triangle DEF$. The statement promises $A \leftrightarrow D$, so every conclusion you draw from
it would pair the wrong parts. Match corners first, then write the letters in matching order.

**Using SSA or AAA as a test.** Both are tempting because they are three equal parts. Neither forces the triangles to
be the same. Check: is the angle **between** the two sides (SAS)? If not, and there is no right angle with a
hypotenuse (RHS), you cannot conclude congruence.

## Where it leads

- Previous lesson: [Dilations and scale drawings](04-dilations-scale-drawings.md).
- Next lesson: [Circle words](06-circle-words.md), where congruent triangles explain chords and tangents.
- Constructions these tests explain: [lesson 1](01-compass-straightedge.md) and
  [lesson 2](02-constructing-triangles.md).
- The ambiguous case returns with the sine law in [level 7](../level-7/index.md); writing proofs like these in full
  is in [level 8](../level-8/index.md).
- Proof as a way of thinking: [Logic](../../logic/index.md) and
  [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
- This level: [Level 5: constructions and transformations](index.md).
