---
title: "How to write a geometric proof"
---

# How to write a geometric proof

*Geometry · level 8, lesson 1 of 6*

## A question to start

Draw a triangle, any triangle, measure its three angles with a protractor and add them. You will get something close
to 180°: maybe 179°, maybe 181°, because protractors and pencils are not perfect. Do it a thousand times and the
answers cluster around 180°.

But does that **prove** that every triangle's angles add to exactly 180°? No. A thousand measurements cannot rule out
a triangle somewhere whose angles add to 180.0001°, and a thousand drawings are not all triangles. Mathematics wants
something stronger than "it always seems to work": an argument that covers every case at once and leaves no room for
doubt. That is a **proof**. Remarkably, the proof for triangles depends on one particular assumption about parallel
lines, and in [the last lesson of this level](06-sphere-geometry.md) we will see a world where that assumption fails
and the angles of a triangle add to more than 180°.

## The idea

### What a proof is built from

A proof is a chain of statements in which every link is justified. The justifications can only be of four kinds:

1. **The given facts.** What the problem tells you is true ("$AB = AC$", "$DE$ is parallel to $BC$").
2. **Definitions.** What words mean. An isosceles triangle is one with two equal sides; a midpoint splits a segment
   into two equal parts; perpendicular lines meet at 90°.
3. **Postulates (or axioms).** A few starting facts accepted without proof, because something has to come first.
4. **Theorems already proved.** Once proved, a result may be used as a reason forever after.

"It looks that way in the diagram" is **never** a reason.

### Euclid's starting points

Around 300 BC, Euclid of Alexandria wrote the *Elements*, which organised all of Greek geometry as proofs built on a
short list of postulates. In modern words, the five are roughly:

1. Any two points can be joined by a straight line.
2. A straight line can be extended as far as you like.
3. A circle can be drawn with any centre and any radius.
4. All right angles are equal.
5. **The parallel postulate.** In modern school form: through a point not on a line, there is exactly one line
   parallel to the given line.

The fifth one always looked less obvious than the others, and for two thousand years mathematicians tried to prove
it from the first four. They could not, and in the end it turned out that it **cannot** be proved: there are
consistent geometries where it is false. That story ends this level.

From the parallel postulate come the facts about angles and parallel lines: where a line crosses two parallel
lines, **alternate angles are equal** (the Z-shape) and **corresponding angles are equal** (the F-shape).

### Congruent triangles

Two triangles are **congruent** when one can be moved (slid, turned or flipped) to fit exactly on the other: all
three sides and all three angles match. Five tests each guarantee congruence:

| Test | What must match |
| --- | --- |
| SSS | all three sides |
| SAS | two sides and the angle **between** them |
| ASA | two angles and the side between them |
| AAS | two angles and a side not between them |
| RHS | a right angle, the hypotenuse, and one other side |

**SSA is not a test.** Two sides and an angle that is not between them can fit two different triangles: that is
exactly [the ambiguous case of the sine law](../level-7/04-sine-law.md). (RHS is the special SSA case where the angle
is 90°, and there the second triangle cannot exist.) In many modern treatments, SAS is taken as a postulate and the
others are proved from it.

Congruence is the workhorse of proofs: to show two lengths or two angles are equal, find two congruent triangles
that contain them.

### Two ways to write a proof

A **two-column proof** lists statements on the left and the reason for each on the right. It is very clear about
what depends on what, which makes it a good way to learn.

A **paragraph proof** says the same thing in full sentences. It is how mathematicians actually write, and it is
easier to read once you know the habits. The content is identical; only the layout changes. Either way, a proof
begins by stating what is **given** and what is to be **proved**, and ends with a mark such as ∎ (or the letters
QED, from the Latin for "which was to be shown").

### Proof 1: the angles of a triangle add to 180°

**Given:** any triangle $ABC$. **Prove:** $\angle A + \angle B + \angle C = 180°$.

**Plan:** add one line, through $C$ parallel to $AB$. Adding a line or point that is not in the original figure is
called an **auxiliary construction**, and choosing a good one is the creative part of geometry.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 200" role="img" aria-label="Triangle ABC with a line through C parallel to AB. At C, three angles sit along the line: x on the left, angle C in the middle and y on the right. Angle x equals angle A and angle y equals angle B, as alternate angles">
  <line x1="20" y1="50" x2="330" y2="50" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="40,170 300,170 190,50" fill="#9cc9ea" opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <g font-size="15" fill="currentColor">
    <text x="24" y="188">A</text><text x="304" y="188">B</text><text x="184" y="40">C</text>
    <text x="66" y="164">a°</text><text x="262" y="164">b°</text>
    <text x="148" y="66">x</text><text x="186" y="76">c</text><text x="218" y="66">y</text>
    <text x="290" y="44" font-size="12">parallel to AB</text>
  </g>
</svg>
</div>

| Statement | Reason |
| --- | --- |
| 1. Draw the line through $C$ parallel to $AB$. | Parallel postulate: exactly one such line exists. |
| 2. $x + \angle C + y = 180°$. | Angles on a straight line add to 180°. |
| 3. $x = \angle A$. | Alternate angles: $AC$ crosses the parallel lines. |
| 4. $y = \angle B$. | Alternate angles: $BC$ crosses the parallel lines. |
| 5. $\angle A + \angle C + \angle B = 180°$. | Substitute 3 and 4 into 2. ∎ |

The argument never used any particular sizes. It works for every triangle at once, which is what a thousand
measurements could never do.

### Proof 2: the isosceles triangle theorem

**Theorem.** If two sides of a triangle are equal, the angles opposite them are equal.

In the *Elements* this is Book I, Proposition 5, and the story goes that it was nicknamed the *pons asinorum*, the
"bridge of asses", because weaker students could not get across it. Euclid's own proof is long. Here is a much shorter
one, credited to Pappus of Alexandria about six centuries later, written as a paragraph.

**Given:** triangle $ABC$ with $AB = AC$. **Prove:** $\angle B = \angle C$.

*Proof.* Compare triangle $ABC$ with triangle $ACB$, the **same** triangle with its corners listed in a different
order. In the first, the sides $AB$ and $AC$ enclose the angle $A$. In the second, the sides $AC$ and $AB$ enclose the
same angle $A$. Since $AB = AC$ (given) and $AC = AB$, the two triangles match by SAS. So triangle $ABC$ is congruent to
triangle $ACB$, with $B$ matching $C$. Matching angles of congruent triangles are equal, so $\angle B = \angle C$. ∎

It feels like a trick, but it is completely sound: it says the triangle fits onto its own mirror image.

### Converses

The **converse** of "if P then Q" is "if Q then P". A converse is a **different** statement and needs its own proof;
it may even be false. ("If a shape is a square, it has four equal sides" is true; the converse, "if a shape has four
equal sides, it is a square", is false: think of a rhombus.)

The converse of the isosceles theorem is true: if $\angle B = \angle C$, then $AB = AC$. Proof: compare $ABC$ with
$ACB$ again. The angles $B$ and $C$ with the side $BC$ between them match the angles $C$ and $B$ with the side $CB$
between them, so the triangles are congruent by ASA, and $AB = AC$. ∎

### Habits that help

- **Draw a large, general figure.** Not isosceles unless it must be, not right-angled unless it must be. Special
  figures suggest false "facts".
- **Mark what is given** on the figure: equal sides with ticks, equal angles with arcs.
- **Work backwards.** To prove $\angle B = \angle C$, ask: "which congruent triangles would contain them?"
- **Proof by contradiction.** Assume the statement is false, and reason until something impossible appears. You saw
  this in the [tangent proof](../level-7/06-circle-theorems.md).

## Worked examples

**1. A corollary.** A **corollary** is a result that follows quickly from a theorem. Prove that each angle of an
equilateral triangle is 60°.

| Statement | Reason |
| --- | --- |
| 1. $AB = AC$, so $\angle B = \angle C$. | Given; isosceles triangle theorem. |
| 2. $BA = BC$, so $\angle A = \angle C$. | Given; isosceles triangle theorem. |
| 3. $\angle A = \angle B = \angle C$. | From 1 and 2. |
| 4. $3\angle A = 180°$, so $\angle A = 60°$, and likewise the others. | Angle sum of a triangle (Proof 1). ∎ |

**2. The exterior angle theorem (paragraph style).** Extend side $BC$ of triangle $ABC$ beyond $C$ to a point $D$.
Prove $\angle ACD = \angle A + \angle B$.

*Proof.* The angles $ACB$ and $ACD$ lie along the straight line $BD$, so $\angle ACD = 180° - \angle C$. By the angle
sum, $\angle A + \angle B = 180° - \angle C$. Both are equal to $180° - \angle C$, so they are equal to each other. ∎

**3. Using congruence.** In the kite-shaped figure $ABCD$, $AB = AD$ and $CB = CD$. Prove that the diagonal $AC$ cuts
the angle at $A$ in half.

| Statement | Reason |
| --- | --- |
| 1. $AB = AD$ | Given. |
| 2. $CB = CD$ | Given. |
| 3. $AC = AC$ | The same segment (it is shared). |
| 4. $\triangle ABC \cong \triangle ADC$ | SSS, from 1, 2, 3. ($\cong$ means "is congruent to".) |
| 5. $\angle BAC = \angle DAC$ | Matching angles of congruent triangles. ∎ |

**4. A broken "proof".** "Prove that $\angle A + \angle B + \angle C = 180°$ in triangle $ABC$. Proof: the exterior
angle at $C$ equals $\angle A + \angle B$, and it also equals $180° - \angle C$, so the sum is 180°." This is
**circular**: our proof of the exterior angle theorem (example 2) used the angle sum. A proof may only use results
proved **before** it, or the chain loops back on itself and proves nothing.

## Try it

1. Two lines cross, making four angles. Prove that vertically opposite angles are equal.
2. Prove that the angles of any quadrilateral $ABCD$ with no reflex angle add to 360°.
3. Prove that the angles of a convex polygon with $n$ sides add to $(n - 2) \times 180°$.
4. In triangle $ABC$, $M$ is the midpoint of $BC$ and $AM$ is perpendicular to $BC$. Prove that $AB = AC$.
5. $ABCD$ is a parallelogram (both pairs of opposite sides parallel). Prove that $AB = CD$, using the diagonal $AC$.
6. Show by an example that "SSA" is not a congruence test.
7. State the converse of "If a quadrilateral is a rectangle, its diagonals are equal." Is the converse true?

??? note "Answers"
    1. Call the angles $p, q, r, s$ in order round the crossing, so $p$ and $r$ are opposite. $p + q = 180°$ (straight
       line) and $q + r = 180°$ (the other straight line). So $p + q = q + r$, and subtracting $q$, $p = r$. ∎ The same
       argument gives $q = s$.
    2. The diagonal $AC$ splits $ABCD$ into triangles $ABC$ and $ACD$ (it lies inside because no angle is reflex).
       The angles of the two triangles together make up exactly the angles of the quadrilateral, so the total is
       $180° + 180° = 360°$. ∎
    3. From one corner, draw diagonals to every other corner except its two neighbours: that is $n - 3$ diagonals,
       which cut the polygon into $n - 2$ triangles. Their angles together make up the polygon's angles, so the total
       is $(n - 2) \times 180°$. ∎
    4. $BM = CM$ (definition of midpoint). $\angle AMB = \angle AMC = 90°$ (given). $AM = AM$ (shared). So
       $\triangle AMB \cong \triangle AMC$ by SAS, and $AB = AC$ (matching sides). ∎
    5. $\angle BAC = \angle DCA$ (alternate angles, $AB \parallel DC$). $\angle BCA = \angle DAC$ (alternate angles,
       $BC \parallel AD$). $AC = CA$ (shared). So $\triangle ABC \cong \triangle CDA$ by ASA, and $AB = CD$. ∎
    6. From the ambiguous case: $A = 40°$, $b = 10$, $a = 7$ fits two triangles, with third sides about 10.4 and 4.9.
       Both have the same two sides and the same non-included angle, yet they are not congruent.
    7. Converse: "If a quadrilateral's diagonals are equal, it is a rectangle." False: an isosceles trapezoid has
       equal diagonals but is not a rectangle in general.

## Common mistake

**Proving from the picture.** If your figure happens to look isosceles, it is tempting to use $AB = AC$ without
being told. Test your argument on a deliberately lopsided second drawing. If a step fails there, it was not justified.

**Assuming what you want to prove.** Writing the conclusion as step 1, or using a theorem that itself depends on the
conclusion (example 4), proves nothing.

## Where it leads

- Next lesson: [Radians and the unit circle](02-radians-unit-circle.md).
- The level page: [Level 8: Proof, radians and vectors](index.md). The level before:
  [Level 7](../level-7/index.md), whose circle theorems are proofs of exactly this kind.
- Proof by contradiction, converses and logic: [Logic and puzzles](../../logic/index.md).
- Proof as the heart of university mathematics, on the U of T shelf:
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md) and
  [MAT158 Unit 1 (logic, sets and proof)](../../../uoft/MAT158H1/unit01.md).
