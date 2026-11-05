# 2. Triangles and congruence

*When are two triangles exactly the same, in shape and size? Checking all six measurements (three sides, three
angles) is slow, and it turns out three well-chosen ones are enough, though not just any three. This chapter finds
which three, and uses the answer to prove the first real theorems of geometry: that an isosceles triangle has equal
base angles, that any side of a triangle is shorter than the other two together, and that the classical compass and
straightedge constructions do what they claim. It ends with the family of four-sided figures.*

!!! abstract "In this chapter"

    **You will learn:**

    - the names of triangles by their sides and by their angles
    - what congruence means, and the tests SSS, SAS, ASA, AAS and right-angle HL, with proofs; why SSA fails
    - the exterior angle inequality, proved without any fact about parallel lines
    - the isosceles triangle theorem, three proofs of it (including Euclid's "bridge of asses") and its converse
    - the triangle inequality, the larger side faces the larger angle, the hinge theorem, Heron's shortest path
    - compass and straightedge constructions (bisectors, perpendiculars, copying angles) and why each one works
    - the quadrilateral family and the properties of kites and rhombi

    **You need:** [Chapter 1](01-Points-Lines-and-Angles.md) (angles, linear pairs, vertical angles, what a proof
    is). For a gentler version, see the Topics lessons
    [Triangles by sides and by angles](../../topics/geometry/level-3/04-triangles-sides-angles.md),
    [The quadrilateral family tree](../../topics/geometry/level-3/05-quadrilateral-family.md),
    [Compass and straightedge](../../topics/geometry/level-5/01-compass-straightedge.md),
    [Constructing triangles](../../topics/geometry/level-5/02-constructing-triangles.md) and
    [Congruent triangles](../../topics/geometry/level-5/05-congruent-triangles.md).

    **Levels:** 2.1 is beginner; 2.2 to 2.5 are beginner to intermediate; the hinge theorem in 2.4, the proof of SSS
    in 2.3 and the end of 2.6 are intermediate.

A word about what we may use. In this chapter we do **not** use anything about parallel lines, and in particular we
do not use the fact that the angles of a triangle add up to $180°$. That fact needs Euclid's fifth postulate and
waits for [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md). Everything here is true in *neutral geometry*, the
geometry of the first four postulates alone, which will matter a great deal in Chapters 15 to 17. It costs us a
little extra cleverness in a few proofs, and you will see exactly where.

## 2.1 Kinds of triangles

Three points $A$, $B$, $C$ not on one line determine a **triangle** $ABC$ (written $\triangle ABC$): the three
segments $AB$, $BC$, $CA$ are its **sides**, the points are its **vertices**, and $\angle A = \angle BAC$,
$\angle B$, $\angle C$ are its **angles**. A common habit, which we follow, is to write $a$ for the length of the side
opposite $A$ (that is, $a = BC$), $b = CA$ and $c = AB$. Side $a$ is **opposite** angle $A$; angles $B$ and $C$ are
**adjacent** to side $a$.

By sides, a triangle is

- **scalene** if all three sides have different lengths,
- **isosceles** if at least two sides are equal (Greek *isos*, equal, and *skelos*, leg),
- **equilateral** if all three sides are equal.

By angles, it is

- **acute** if all three angles are acute,
- **right** if one angle is a right angle; the side opposite it is the **hypotenuse** and the other two are the
  **legs**,
- **obtuse** if one angle is obtuse.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 270" role="img" aria-label="Triangles by sides: scalene, isosceles, equilateral. Triangles by angles: acute, right, obtuse">
  <polygon points="20,115 140,115 100,35" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="180,115 290,115 235,25" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <line x1="202.4" y1="66.9" x2="212.6" y2="73.1" stroke="currentColor" stroke-width="1.3"/>
  <line x1="257.4" y1="73.1" x2="267.6" y2="66.9" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="340,115 460,115 400,11.1" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <line x1="400" y1="109" x2="400" y2="121" stroke="currentColor" stroke-width="1.3"/>
  <line x1="424.8" y1="66" x2="435.2" y2="60" stroke="currentColor" stroke-width="1.3"/>
  <line x1="375.2" y1="66" x2="364.8" y2="60" stroke="currentColor" stroke-width="1.3"/>
  <text x="80" y="135" text-anchor="middle" font-size="14" fill="currentColor">scalene</text>
  <text x="235" y="135" text-anchor="middle" font-size="14" fill="currentColor">isosceles</text>
  <text x="400" y="135" text-anchor="middle" font-size="14" fill="currentColor">equilateral</text>
  <polygon points="20,240 140,240 95,160" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="180,240 290,240 180,160" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="330,240 460,240 360,195" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="191,240 191,229 180,229" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 360 195 L 352.2 206.6 A 14 14 0 0 0 372.8 200.7 Z" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="1.2"/>
  <text x="80" y="264" text-anchor="middle" font-size="14" fill="currentColor">acute</text>
  <text x="235" y="264" text-anchor="middle" font-size="14" fill="currentColor">right</text>
  <text x="395" y="264" text-anchor="middle" font-size="14" fill="currentColor">obtuse</text>
</svg>
</div>

Note "at least two": an equilateral triangle counts as isosceles, just as a square counts as a rectangle. Using the
inclusive definitions means every theorem about isosceles triangles applies to equilateral ones for free.

In an isosceles triangle with $AB = AC$, the equal sides are the **legs**, $BC$ is the **base**, $A$ is the
**apex**, and $\angle B$, $\angle C$ are the **base angles**.

Two more words we need. A **median** joins a vertex to the midpoint of the opposite side. An **altitude** is the
perpendicular from a vertex to the line containing the opposite side (in an obtuse triangle two altitudes fall
outside). The **exterior angle** at $C$ is the angle between side $CA$ and the extension of side $BC$ beyond $C$;
it forms a linear pair with the interior angle $\angle C$.

Why can a triangle not have two right angles, or two obtuse angles? You may know "because the angles add to
$180°$", but we have not proved that, and in fact this weaker fact is easier. It follows from the exterior angle
inequality in 2.2 (Exercise 12).

## 2.2 Congruence: SSS, SAS, ASA, AAS

### What congruent means

Two figures are **congruent** if one can be moved onto the other exactly, by sliding, turning and perhaps flipping
it over. For triangles that means: there is a way to match the vertices, $A \leftrightarrow D$, $B \leftrightarrow E$,
$C \leftrightarrow F$, so that all three pairs of sides and all three pairs of angles are equal:

$$
AB = DE,\quad BC = EF,\quad CA = FD,\qquad \angle A = \angle D,\quad \angle B = \angle E,\quad \angle C = \angle F .
$$

We then write $\triangle ABC \cong \triangle DEF$. **The order of the letters matters**: it says which vertex goes
with which. $\triangle ABC \cong \triangle DEF$ and $\triangle ABC \cong \triangle EDF$ say different things.

Congruence is useful in a sneaky way. To prove that two segments or two angles are equal, find two triangles that
contain them as matching parts, prove the triangles congruent, and read off the equality. Six equalities come out;
the trick is that far fewer have to go in.

### The four tests

**SAS (side-angle-side).** If two sides and the angle *between* them in one triangle equal two sides and the angle
between them in another, the triangles are congruent.

**ASA (angle-side-angle).** If two angles and the side between them are equal, the triangles are congruent.

**AAS (angle-angle-side).** If two angles and a side *not* between them are equal (matching correctly), the
triangles are congruent.

**SSS (side-side-side).** If all three sides are equal, the triangles are congruent.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 300" role="img" aria-label="The four congruence tests. SSS: three sides. SAS: two sides and the angle between them. ASA: two angles and the side between them. AAS: two angles and a side not between them">
  <polygon points="40,130 160,130 80,55" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="100" y="30" text-anchor="middle" font-size="15" fill="currentColor">SSS</text>
  <line x1="100" y1="124" x2="100" y2="136" stroke="currentColor" stroke-width="1.3"/>
  <line x1="117.4" y1="98.2" x2="125.6" y2="89.5" stroke="currentColor" stroke-width="1.3"/>
  <line x1="114.4" y1="95.5" x2="122.6" y2="86.8" stroke="currentColor" stroke-width="1.3"/>
  <line x1="67.2" y1="91.8" x2="56.6" y2="86.1" stroke="currentColor" stroke-width="1.3"/>
  <line x1="65.3" y1="95.3" x2="54.7" y2="89.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="63.4" y1="98.9" x2="52.8" y2="93.2" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="290,130 410,130 330,55" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="350" y="30" text-anchor="middle" font-size="15" fill="currentColor">SAS</text>
  <line x1="350" y1="124" x2="350" y2="136" stroke="currentColor" stroke-width="1.3"/>
  <line x1="303.8" y1="91.4" x2="314.4" y2="97.1" stroke="currentColor" stroke-width="1.3"/>
  <line x1="305.6" y1="87.9" x2="316.2" y2="93.6" stroke="currentColor" stroke-width="1.3"/>
  <path d="M 290 130 L 308 130 A 18 18 0 0 0 298.5 114.1 Z" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="40,270 160,270 80,195" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="100" y="170" text-anchor="middle" font-size="15" fill="currentColor">ASA</text>
  <line x1="100" y1="264" x2="100" y2="276" stroke="currentColor" stroke-width="1.3"/>
  <path d="M 40 270 L 58 270 A 18 18 0 0 0 48.5 254.1 Z" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 160 270 L 146.9 257.7 A 18 18 0 0 0 142 270 Z" fill="#7ccf9a" fill-opacity="0.9" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="290,270 410,270 330,195" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="350" y="170" text-anchor="middle" font-size="15" fill="currentColor">AAS</text>
  <line x1="365.9" y1="236.9" x2="374.1" y2="228.1" stroke="currentColor" stroke-width="1.3"/>
  <path d="M 290 270 L 308 270 A 18 18 0 0 0 298.5 254.1 Z" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 410 270 L 396.9 257.7 A 18 18 0 0 0 392 270 Z" fill="#7ccf9a" fill-opacity="0.9" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

Why should three measurements be enough? Think of building a triangle. Given two sticks hinged at a fixed angle, the
third side is forced: SAS. Given a base and the directions of the two other sides at its ends, the apex is where those
directions meet: ASA. Given three sticks, the triangle is rigid, which is why bridges and roofs are full of triangles
and why a four-sided frame needs a diagonal brace: SSS.

### SAS is a starting point

Euclid "proved" SAS as his Proposition I.4 by picking up one triangle and laying it on the other. But moving figures
around is not something his postulates allow, and nothing in them says that a figure keeps its shape when moved. So
modern treatments, following Hilbert, take SAS (or a slightly weaker version) as an **axiom**. We do too:

> **SAS postulate.** If $AB = DE$, $AC = DF$ and $\angle A = \angle D$, then $\triangle ABC \cong \triangle DEF$.

It is not a cheat. SAS is really a statement that the plane is the same everywhere and in every direction, so that
a triangle drawn here is the same as one drawn there. In Chapter 10 we will see the same idea as a statement about
rigid motions.

### ASA from SAS

**Theorem 2.1 (ASA).** If $\angle A = \angle D$, $AB = DE$ and $\angle B = \angle E$, then
$\triangle ABC \cong \triangle DEF$.

*Proof.* On the ray $DF$ mark the point $C'$ with $DC' = AC$. Then $AB = DE$, $\angle A = \angle D$ and $AC = DC'$,
so by SAS, $\triangle ABC \cong \triangle DEC'$. In particular $\angle DEC' = \angle ABC = \angle DEF$. The rays
$EC'$ and $EF$ lie on the same side of line $DE$ and make the same angle with ray $ED$, so by the protractor postulate
they are the same ray. So $C'$ lies on line $EF$ and on line $DF$. These two lines are different (otherwise $D$, $E$,
$F$ would be collinear) and so meet in only one point (Theorem 1.6), which is $F$. So $C' = F$, and
$\triangle ABC \cong \triangle DEF$. $\blacksquare$

That proof pattern, "build a copy where it ought to be, then show the copy is the real thing", appears again and
again.

### A tool: the exterior angle inequality

For AAS we need a fact that sounds as if it needs the angle sum, but does not.

**Theorem 2.2 (exterior angle inequality, Euclid I.16).** An exterior angle of a triangle is larger than each of
the two interior angles not next to it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="Proof of the exterior angle inequality: M is the midpoint of AC, E is on ray BM with ME = BM; triangles AMB and CME are congruent, so the angle at A equals angle MCE, which is only part of the exterior angle ACD">
  <polygon points="110,50 30,190 250,190" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="250" y1="190" x2="420" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="190" x2="330" y2="50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="250" y1="190" x2="330" y2="50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 110 50 L 97.1 72.6 A 26 26 0 0 0 128.4 68.4 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 250 190 L 262.9 167.4 A 26 26 0 0 0 231.6 171.6 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 250 190 L 276 190 A 26 26 0 0 0 262.9 167.4 Z" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="149.2" y1="80.8" x2="140.8" y2="89.2" stroke="currentColor" stroke-width="1.3"/>
  <line x1="219.2" y1="150.8" x2="210.8" y2="159.2" stroke="currentColor" stroke-width="1.3"/>
  <line x1="100.7" y1="150.4" x2="105.7" y2="161.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="104.3" y1="148.7" x2="109.3" y2="159.6" stroke="currentColor" stroke-width="1.3"/>
  <line x1="250.7" y1="80.4" x2="255.7" y2="91.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="254.3" y1="78.7" x2="259.3" y2="89.6" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="110" cy="50" r="3" fill="currentColor"/>
  <text x="110" y="41.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="30" cy="190" r="3" fill="currentColor"/>
  <text x="18" y="199.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="250" cy="190" r="3" fill="currentColor"/>
  <text x="250" y="211.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="420" cy="190" r="3" fill="currentColor"/>
  <text x="420" y="211.2" text-anchor="middle" font-size="15" fill="currentColor">D</text>
  <circle cx="180" cy="120" r="3" fill="currentColor"/>
  <text x="166" y="119.2" text-anchor="middle" font-size="15" fill="currentColor">M</text>
  <circle cx="330" cy="50" r="3" fill="currentColor"/>
  <text x="342" y="49.2" text-anchor="middle" font-size="15" fill="currentColor">E</text>
</svg>
</div>

*Proof.* Take triangle $ABC$ with $BC$ extended beyond $C$ to $D$. We show $\angle ACD > \angle A$. Let $M$ be the
midpoint of $AC$, extend $BM$ beyond $M$ to $E$ with $ME = BM$, and join $CE$. In triangles $AMB$ and $CME$:
$AM = CM$ (midpoint), $\angle AMB = \angle CME$ (vertical angles), $BM = EM$ (construction). By SAS they are
congruent, so $\angle MCE = \angle MAB = \angle A$. Now $E$ is on the far side of line $AC$ from $B$ and on the same
side of line $BC$ as $A$, so ray $CE$ lies inside $\angle ACD$. Hence $\angle ACD = \angle ACE + \angle ECD > \angle ACE = \angle A$. To show $\angle ACD > \angle B$, do the same with the midpoint of $BC$, which shows that the
exterior angle at $C$ formed by extending $AC$ beyond $C$ is larger than $\angle B$; that angle is vertically opposite
$\angle ACD$, so equal to it. $\blacksquare$

In Chapter 3 we will upgrade this to an *equality*: the exterior angle equals the *sum* of the two remote interior
angles. That stronger version needs the parallel postulate; on a sphere it is false (see 3.2).
The inequality is true even there for small triangles, and true in the hyperbolic geometry of Chapter 17.

### AAS

**Theorem 2.3 (AAS).** If $\angle A = \angle D$, $\angle B = \angle E$ and $BC = EF$, then
$\triangle ABC \cong \triangle DEF$.

If we knew the angle sum, this would be easy: the third angles would be equal and ASA would finish. Without it:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Proof of AAS: if AB were longer than DE, mark A' on BA with BA' = DE. Then triangle A'BC is congruent to DEF, so the angle at A' equals the angle at A, but the angle at A' is an exterior angle of triangle AA'C, so it is larger">
  <polygon points="130,20 40,170 300,170" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="95.8" y1="77" x2="300" y2="170" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 130 20 L 117.7 40.6 A 24 24 0 0 0 148 35.9 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 95.8 77 L 84.5 95.9 A 22 22 0 0 0 115.8 86.1 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 40 170 L 66 170 A 26 26 0 0 0 53.4 147.7 Z" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="130" cy="20" r="3" fill="currentColor"/>
  <text x="130" y="11.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="40" cy="170" r="3" fill="currentColor"/>
  <text x="28" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="300" cy="170" r="3" fill="currentColor"/>
  <text x="312" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="95.8" cy="77" r="3" fill="currentColor"/>
  <text x="81.8" y="76.2" text-anchor="middle" font-size="15" fill="currentColor">A′</text>
</svg>
</div>

*Proof.* If $AB = DE$ then SAS (with $AB$, $\angle B$, $BC$) finishes. Suppose instead $AB \ne DE$; say
$AB > DE$ (the other case is the same with the triangles swapped). Mark $A'$ on segment $BA$ with $BA' = DE$. Then
$BA' = ED$, $\angle B = \angle E$, $BC = EF$, so by SAS $\triangle A'BC \cong \triangle DEF$, and
$\angle BA'C = \angle D = \angle A$. But $\angle BA'C$ is an exterior angle of triangle $AA'C$ (it is next to the
interior angle $\angle AA'C$ at $A'$), so by Theorem 2.2 it is *larger* than the remote interior angle at $A$. So
$\angle A > \angle A$, which is impossible. So $AB = DE$. $\blacksquare$

### Why SSA fails

The pattern side-side-angle, with the angle *not* between the two sides, does **not** guarantee congruence.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="Side-side-angle fails: with angle A = 30 degrees, AB = 10 and BC = 6, the point C can be in two places, giving two different triangles">
  <polygon points="30,170 237.8,50 317.4,170" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="30,170 237.8,50 158.2,170" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="317.4" y1="170" x2="390" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 119.9 132.6 A 144 144 0 0 0 355.8 132.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 30 170 L 60 170 A 30 30 0 0 0 56 155 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <text x="80" y="164.6" text-anchor="middle" font-size="13" fill="currentColor">30°</text>
  <circle cx="30" cy="170" r="3" fill="currentColor"/>
  <text x="18" y="175.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="237.8" cy="50" r="3" fill="currentColor"/>
  <text x="237.8" y="41.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="158.2" cy="170" r="3" fill="currentColor"/>
  <text x="158.2" y="189.2" text-anchor="middle" font-size="15" fill="currentColor">C₁</text>
  <circle cx="317.4" cy="170" r="3" fill="currentColor"/>
  <text x="317.4" y="189.2" text-anchor="middle" font-size="15" fill="currentColor">C₂</text>
  <line x1="203" y1="113.3" x2="193" y2="106.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="282.6" y1="106.7" x2="272.6" y2="113.3" stroke="currentColor" stroke-width="1.3"/>
  <text x="123.9" y="102.9" text-anchor="middle" font-size="14" fill="currentColor">10</text>
  <text x="182" y="114.9" text-anchor="middle" font-size="14" fill="currentColor">6</text>
  <text x="289.6" y="110.9" text-anchor="middle" font-size="14" fill="currentColor">6</text>
</svg>
</div>

Take $\angle A = 30°$, $AB = 10$ and $BC = 6$. Swing a compass of radius 6 around $B$: it crosses the other arm of
the angle twice, at $C_1$ and $C_2$. Both triangles $ABC_1$ and $ABC_2$ have $\angle A = 30°$, $AB = 10$, $BC = 6$,
but they are clearly different: $AC_1 \approx 5.34$ and $AC_2 \approx 11.98$. (These two lengths come from the law of
cosines of Chapter 7; for now, measure them in the figure.) This is the "ambiguous case" that reappears when solving
triangles with the law of sines.

SSA *does* work in some situations: if the side opposite the given angle is at least as long as the other given side
(Exercise 10), and in particular when the given angle is right or obtuse. The most useful special case is:

**Theorem 2.4 (HL, hypotenuse-leg).** Two right triangles with equal hypotenuses and one pair of equal legs are
congruent.

*Proof.* Let the right angles be at $C$ and $F$, with $AB = DE$ (hypotenuses) and $AC = DF$ (legs). Extend $BC$
beyond $C$ to $G$ with $CG = FE$. The angle $\angle ACG$ forms a linear pair with the right angle $\angle ACB$, so it
is a right angle too. By SAS ($AC = DF$, right angles, $CG = FE$), $\triangle ACG \cong \triangle DFE$, so
$AG = DE = AB$. So triangle $ABG$ is isosceles with $AB = AG$, and (by the isosceles triangle theorem of 2.3)
$\angle B = \angle G$. Now triangles $ACB$ and $ACG$ have $\angle B = \angle G$, right angles at $C$, and the common
side $AC$, so they are congruent by AAS, and $CB = CG = FE$. Finally SAS gives $\triangle ABC \cong \triangle DEF$.
$\blacksquare$

**Worked example.** Two triangles have $AB = DE = 7$, $\angle B = \angle E = 50°$ and $AC = DF = 6$. Are they congruent? The given angle $B$ is *not* between the given sides $AB$ and $AC$ (the
angle between them would be $A$), so this is SSA, and no test applies. Here the side opposite the angle, $AC = 6$,
is shorter than the other side $AB = 7$, so Exercise 10 does not help either; in fact there are two non-congruent
triangles with these measurements. (Check with the law of sines later: $\sin C = 7 \sin 50° / 6 \approx 0.894$, so
$C \approx 63.3°$ or $116.7°$.)

## 2.3 The isosceles triangle theorem

### The theorem and three proofs

**Theorem 2.5 (isosceles triangle theorem, Euclid I.5).** If two sides of a triangle are equal, the angles opposite
them are equal. In triangle $ABC$ with $AB = AC$: $\angle B = \angle C$.

*First proof (the angle bisector).* Let the bisector of $\angle A$ meet $BC$ at $M$. In triangles $ABM$ and $ACM$:
$AB = AC$, $\angle BAM = \angle CAM$, $AM$ is shared. By SAS they are congruent, so $\angle B = \angle C$.
$\blacksquare$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 220" role="img" aria-label="Isosceles triangle ABC with AB = AC; the bisector of angle A meets BC at M, and triangles ABM and ACM are congruent by SAS">
  <polygon points="150,20 40,190 150,190" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150,20 150,190 260,190" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 150 20 L 131.5 48.5 A 34 34 0 0 0 150 54 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 150 20 L 150 50 A 30 30 0 0 0 166.3 45.2 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <line x1="100" y1="108.3" x2="90" y2="101.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="210" y1="101.7" x2="200" y2="108.3" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="150" cy="20" r="3" fill="currentColor"/>
  <text x="150" y="11.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="40" cy="190" r="3" fill="currentColor"/>
  <text x="28" y="199.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="260" cy="190" r="3" fill="currentColor"/>
  <text x="272" y="199.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="150" cy="190" r="3" fill="currentColor"/>
  <text x="150" y="211.2" text-anchor="middle" font-size="15" fill="currentColor">M</text>
</svg>
</div>

The congruence gives more for free: $BM = CM$, so the bisector is also the **median**; and $\angle AMB = \angle AMC$,
a linear pair of equal angles, so each is $90°$ and the bisector is also the **altitude**. In an isosceles triangle
the bisector of the apex angle, the median to the base, the altitude to the base and the perpendicular bisector of
the base are all the same line. It is the triangle's mirror line.

(One small honest gap: why does the bisector of $\angle A$ meet the segment $BC$ at all? That is the *crossbar
theorem*, which follows from the axioms about betweenness; we take it as evident.)

*Second proof (Pappus).* Compare triangle $ABC$ with itself, read in a different order: triangle $ACB$. We have
$AB = AC$, $\angle A = \angle A$, $AC = AB$. By SAS, $\triangle ABC \cong \triangle ACB$. Matching parts:
$\angle B$ (in the first) corresponds to $\angle C$ (in the second), so $\angle B = \angle C$. $\blacksquare$

This proof, which Proclus credits to Pappus of Alexandria (4th century AD), needs no extra lines at all. It feels
like a trick the first time: the triangle is congruent to its own mirror image. That is precisely what being
isosceles means.

*Third proof (Euclid's).* Euclid did not have the angle bisector yet (it is his Proposition I.9, which comes later
and depends on this one), so he used a more elaborate figure.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 290" role="img" aria-label="Euclid's figure for the isosceles triangle theorem, the bridge of asses: AB = AC; extend to D and E with AD = AE; triangles ADC and AEB are congruent, then DBC and ECB, which gives equal base angles">
  <polyline points="99,260.5 210,20 321,260.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150,150 270,150 210,20" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <line x1="99" y1="260.5" x2="270" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="321" y1="260.5" x2="150" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="150" y1="150" x2="270" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 150 150 L 170 150 A 20 20 0 0 0 158.4 131.8 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 270 150 L 261.6 131.8 A 20 20 0 0 0 250 150 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 150 150 L 142.5 166.3 A 18 18 0 0 0 168 150 Z" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 270 150 L 252 150 A 18 18 0 0 0 277.5 166.3 Z" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <line x1="185.4" y1="87.5" x2="174.6" y2="82.5" stroke="currentColor" stroke-width="1.3"/>
  <line x1="245.4" y1="82.5" x2="234.6" y2="87.5" stroke="currentColor" stroke-width="1.3"/>
  <line x1="130.8" y1="205.9" x2="119.9" y2="200.9" stroke="currentColor" stroke-width="1.3"/>
  <line x1="129.1" y1="209.6" x2="118.2" y2="204.6" stroke="currentColor" stroke-width="1.3"/>
  <line x1="300.1" y1="200.9" x2="289.2" y2="205.9" stroke="currentColor" stroke-width="1.3"/>
  <line x1="301.8" y1="204.6" x2="290.9" y2="209.6" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="210" cy="20" r="3" fill="currentColor"/>
  <text x="210" y="11.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="150" cy="150" r="3" fill="currentColor"/>
  <text x="134" y="151.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="270" cy="150" r="3" fill="currentColor"/>
  <text x="286" y="151.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="99" cy="260.5" r="3" fill="currentColor"/>
  <text x="89" y="275.8" text-anchor="middle" font-size="15" fill="currentColor">D</text>
  <circle cx="321" cy="260.5" r="3" fill="currentColor"/>
  <text x="331" y="275.8" text-anchor="middle" font-size="15" fill="currentColor">E</text>
</svg>
</div>

Extend $AB$ beyond $B$ to $D$ and $AC$ beyond $C$ to $E$ so that $AD = AE$. Then:

1. Triangles $ADC$ and $AEB$: $AD = AE$, $\angle A$ shared, $AC = AB$. SAS gives $\triangle ADC \cong \triangle AEB$,
   so $DC = EB$, $\angle ADC = \angle AEB$, and $\angle ACD = \angle ABE$.
2. $BD = AD - AB = AE - AC = CE$.
3. Triangles $DBC$ and $ECB$: $BD = CE$, $\angle BDC = \angle CEB$ (step 1), $DC = EB$ (step 1). SAS gives
   $\triangle DBC \cong \triangle ECB$, so $\angle DBC = \angle ECB$ (the blue angles under the base) and
   $\angle BCD = \angle CBE$.
4. $\angle ABC = \angle ABE - \angle CBE = \angle ACD - \angle BCD = \angle ACB$. $\blacksquare$

As a bonus, step 3 proves that the angles *under* the base are equal too, which Euclid states as part of the
theorem. Medieval students called this proposition the *pons asinorum*, Latin for "bridge of asses". The usual
explanation is that it was the first real test in the *Elements*, a bridge that weak students could not cross; the
figure, with its trestle of crossing lines, also looks like a bridge. Proclus, quoting Eudemus, says Thales was the
first to notice that the base angles of an isosceles triangle are equal.

**Worked example.** In triangle $ABC$, $AB = AC$, $\angle B = (3x + 10)°$ and $\angle C = (5x - 20)°$. Then
$3x + 10 = 5x - 20$, so $x = 15$ and both base angles are $55°$.

### The converse

**Theorem 2.6 (Euclid I.6).** If two angles of a triangle are equal, the sides opposite them are equal.

*Proof.* Suppose $\angle B = \angle C$. Compare triangle $ABC$ with triangle $ACB$: $\angle B = \angle C$, $BC = CB$,
$\angle C = \angle B$. By ASA, $\triangle ABC \cong \triangle ACB$, so $AB$ (in the first) equals the matching side
$AC$ (in the second). $\blacksquare$

**Corollary 2.7.** A triangle is equilateral if and only if all three angles are equal. *Proof:* apply Theorem 2.5
and 2.6 to each pair of sides. $\blacksquare$

### The perpendicular bisector as a locus

A **locus** (Latin for "place") is the set of all points with some property. The next theorem is used constantly.

**Theorem 2.8.** A point $P$ is equally far from $A$ and $B$ if and only if $P$ lies on the perpendicular bisector of
$AB$ (the line through the midpoint $M$ perpendicular to $AB$).

*Proof.* If $P$ is on the perpendicular bisector: triangles $PMA$ and $PMB$ have $MA = MB$, right angles at $M$, and
$PM$ shared, so SAS gives $PA = PB$. (If $P = M$ it is clear.) Conversely, suppose $PA = PB$. If $P$ is on line $AB$
it must be $M$. Otherwise triangle $PAB$ is isosceles, and the first proof of Theorem 2.5 showed that the bisector of
its apex angle meets $AB$ at the midpoint $M$ and is perpendicular there. (We cannot yet say "triangles $PMA$ and
$PMB$ are congruent by SSS", because SSS is proved next, using this theorem.) So $P$ is on the perpendicular bisector.
$\blacksquare$

### SSS, proved at last

**Theorem 2.9 (SSS, Euclid I.8).** If $AB = DE$, $BC = EF$ and $CA = FD$, then $\triangle ABC \cong \triangle DEF$.

*Proof.* On the side of line $AB$ away from $C$, copy angle $\angle EDF$ at $A$ and mark $G$ on the new ray with
$AG = DF$. By SAS, $\triangle ABG \cong \triangle DEF$, so $BG = EF = BC$. Now $AG = DF = AC$ and $BG = BC$, so $A$
and $B$ are both equally far from $C$ and $G$. By Theorem 2.8, $A$ and $B$ both lie on the perpendicular bisector of
$CG$, so line $AB$ *is* that perpendicular bisector, and $G$ is the mirror image of $C$ in it. Then
$\angle BAC = \angle BAG$: if $M$ is the midpoint of $CG$, on line $AB$, triangles $AMC$ and $AMG$ are congruent by
SAS (right angles at $M$), so ray $AB$ makes equal angles with $AC$ and $AG$ (if $M$ is on the ray opposite to $AB$,
use supplements; if $M = A$, both angles are $90°$), and SAS gives $\triangle ABC \cong \triangle ABG \cong \triangle DEF$. $\blacksquare$

The cases where the segment $CG$ passes through $A$ or $B$, or misses segment $AB$, are covered by the same argument,
since it never asked where $CG$ crosses line $AB$. Many textbooks instead add or subtract base angles of the two
isosceles triangles $ACG$ and $BCG$ and treat the three cases separately; the locus argument avoids that.

### A famous false proof

Here is a "proof" that every triangle is isosceles. Take any triangle $ABC$. Let the bisector of $\angle A$ meet the
perpendicular bisector of $BC$ at a point $P$, and drop perpendiculars $PE$ to $AB$ and $PF$ to $AC$.

1. Triangles $AEP$ and $AFP$ are congruent (AAS: right angles, equal halves of $\angle A$, common side $AP$), so
   $AE = AF$ and $PE = PF$.
2. $P$ is on the perpendicular bisector of $BC$, so $PB = PC$ (Theorem 2.8).
3. Right triangles $PEB$ and $PFC$ have equal hypotenuses $PB = PC$ and equal legs $PE = PF$, so they are congruent
   (HL), and $EB = FC$.
4. So $AB = AE + EB = AF + FC = AC$.

Every congruence is correct. The error is in the picture: in the usual drawing $P$ sits inside the triangle and $E$,
$F$ lie on the sides. In truth, when $AB \ne AC$, the point $P$ is *outside* the triangle (it is the midpoint of arc
$BC$ of the circle through $A$, $B$, $C$, a fact from Chapter 6), and exactly one of $E$, $F$ lies on its side while
the other lies on an extension. Then one of the equations in step 4 is a subtraction, not an addition:
$AB = AE - EB$ while $AC = AF + FC$. Nothing contradictory follows.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 330" role="img" aria-label="The truth behind the false proof that every triangle is isosceles: the bisector of angle A and the perpendicular bisector of BC meet at P outside the triangle, on the circumcircle; the foot F lies on side AC, but the foot E lies beyond B, on the extension of AB">
  <circle cx="195" cy="158.3" r="140.3" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <polygon points="60,120 110,270 330,120" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="120" x2="274.1" y2="274.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="220" y1="195" x2="274.1" y2="274.3" stroke="currentColor" stroke-width="1.2"/>
  <line x1="274.1" y1="274.3" x2="127.7" y2="323.1" stroke="currentColor" stroke-width="1.2"/>
  <line x1="274.1" y1="274.3" x2="274.1" y2="120" stroke="currentColor" stroke-width="1.2"/>
  <line x1="110" y1="270" x2="127.7" y2="323.1" stroke="currentColor" stroke-width="2.5"/>
  <line x1="274.1" y1="274.3" x2="110" y2="270" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="274.1" y1="274.3" x2="330" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <polyline points="125.2,315.5 132.8,313 135.3,320.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="282.1,120 282.1,128 274.1,128" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="226.6,190.5 231.1,197.1 224.5,201.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="60" cy="120" r="3" fill="currentColor"/>
  <text x="48" y="121.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="110" cy="270" r="3" fill="currentColor"/>
  <text x="98" y="281.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="330" cy="120" r="3" fill="currentColor"/>
  <text x="336" y="111.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="274.1" cy="274.3" r="3" fill="currentColor"/>
  <text x="288.1" y="285.5" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <circle cx="127.7" cy="323.1" r="3" fill="currentColor"/>
  <text x="113.7" y="328.3" text-anchor="middle" font-size="15" fill="currentColor">E</text>
  <circle cx="274.1" cy="120" r="3" fill="currentColor"/>
  <text x="274.1" y="111.2" text-anchor="middle" font-size="15" fill="currentColor">F</text>
  <circle cx="220" cy="195" r="3" fill="currentColor"/>
  <text x="214" y="186.2" text-anchor="middle" font-size="15" fill="currentColor">M</text>
</svg>
</div>

This is why Hilbert insisted on axioms for "betweenness": the steps that failed were silent claims about which point
lies between which, and those are exactly the claims a picture makes without asking.

## 2.4 The triangle inequality

### The larger side faces the larger angle

**Theorem 2.10 (Euclid I.18).** In any triangle, if one side is longer than another, the angle opposite the longer
side is larger. In triangle $ABC$: if $AB > AC$ then $\angle C > \angle B$.

*Proof.* Mark $D$ on $AB$ with $AD = AC$; since $AB > AC$, $D$ lies between $A$ and $B$. Triangle $ACD$ is
isosceles, so $\angle ADC = \angle ACD$. Ray $CD$ lies inside $\angle ACB$, so $\angle ACB > \angle ACD = \angle ADC$. And $\angle ADC$ is an exterior angle of triangle $DBC$, so $\angle ADC > \angle B$ (Theorem 2.2).
Together: $\angle C > \angle ADC > \angle B$. $\blacksquare$

**Theorem 2.11 (Euclid I.19).** If one angle of a triangle is larger than another, the side opposite the larger
angle is longer.

*Proof.* Suppose $\angle C > \angle B$. Compare $AB$ (opposite $C$) and $AC$ (opposite $B$). If $AB = AC$, then
$\angle C = \angle B$ (Theorem 2.5), no. If $AB < AC$, then $\angle C < \angle B$ (Theorem 2.10), no. The only
possibility left is $AB > AC$. $\blacksquare$

That is a typical **proof by elimination**: of three possibilities ($<$, $=$, $>$), two are impossible.

**Corollary 2.12.** In a right or obtuse triangle, the side opposite the right or obtuse angle is the longest.
The perpendicular from a point to a line is shorter than any other segment from the point to the line (Exercise 5).

### The triangle inequality

**Theorem 2.13 (triangle inequality, Euclid I.20).** In any triangle, each side is shorter than the sum of the other
two: $BC < BA + AC$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 240" role="img" aria-label="Proof of the triangle inequality: extend BA to D with AD = AC. Triangle ACD is isosceles, the angle BCD is bigger than angle D, so BD, which equals BA + AC, is longer than BC">
  <polygon points="110,150 30,210 300,210" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="110,150 300,210 269.4,30.5" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="206.8" y1="174.3" x2="203.2" y2="185.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="186.1" y1="85.4" x2="193.3" y2="95" stroke="currentColor" stroke-width="1.3"/>
  <path d="M 269.4 30.5 L 250.2 44.9 A 24 24 0 0 0 273.4 54.1 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 300 210 L 296 186.3 A 24 24 0 0 0 277.1 202.8 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="110" cy="150" r="3" fill="currentColor"/>
  <text x="98" y="147.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="30" cy="210" r="3" fill="currentColor"/>
  <text x="18" y="219.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="300" cy="210" r="3" fill="currentColor"/>
  <text x="312" y="219.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="269.4" cy="30.5" r="3" fill="currentColor"/>
  <text x="269.4" y="21.7" text-anchor="middle" font-size="15" fill="currentColor">D</text>
</svg>
</div>

*Proof.* Extend $BA$ beyond $A$ to the point $D$ with $AD = AC$, and join $DC$. Triangle $ACD$ is isosceles, so
$\angle ADC = \angle ACD$. Since $A$ lies between $B$ and $D$, ray $CA$ lies inside $\angle BCD$, so
$\angle BCD > \angle ACD = \angle BDC$. In triangle $BCD$, the side opposite the larger angle is longer
(Theorem 2.11): $BD > BC$. But $BD = BA + AD = BA + AC$. $\blacksquare$

The Epicurean philosophers, according to Proclus, mocked this proposition as obvious even to a donkey, which walks
straight to its food rather than along two sides of a triangle. The reply is that the donkey knows *that* it is true;
geometry shows *why*, from axioms that do not mention it. And the theorem is more than a curiosity. It says that
the straight segment is the shortest path between two points, and in later chapters, when "straight" means
something new (great circles on a sphere, geodesics on a curved surface), "shortest" is the property that survives.

**Which three lengths make a triangle?** Lengths $a$, $b$, $c$ are the sides of a triangle exactly when each is less
than the sum of the other two. If $c$ is the longest, it is enough to check $c < a + b$. Equivalently, the third
side $c$ of a triangle with sides $a$ and $b$ satisfies

$$
|a - b| < c < a + b .
$$

(The left inequality is the triangle inequality $a < b + c$ or $b < a + c$ rearranged.) The converse, that such
lengths really do make a triangle, is Euclid's construction I.22: draw $c$, and circles of radii $a$ and $b$ from its
ends; the inequalities are exactly what makes the circles cross. (Once again circles crossing needs a continuity
axiom.)

**Worked example.** Can 4, 7, 12 be the sides of a triangle? $4 + 7 = 11 < 12$: no. Can 5, 7, 12? $5 + 7 = 12$, not
more than 12: no (the "triangle" would be flat, a *degenerate* triangle). Two sides are 6 and 10; what can the third
be? $4 < c < 16$.

### Heron's shortest path

A traveller at $A$ must walk to a straight river, fill a bucket, and carry it to a house at $B$, on the same side of
the river. Where should she touch the river so that the total walk is shortest?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 250" role="img" aria-label="Heron's shortest path: to go from A to the river and on to B, reflect B in the river to B'; the straight line from A to B' crosses the river at the best point P">
  <polygon points="0,180 440,180 440,250 0,250" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="0"/>
  <line x1="0" y1="180" x2="440" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <text x="400" y="204" text-anchor="middle" font-size="14" fill="currentColor">river</text>
  <line x1="60" y1="80" x2="252.9" y2="180" stroke="currentColor" stroke-width="2.2"/>
  <line x1="252.9" y1="180" x2="330" y2="140" stroke="currentColor" stroke-width="2.2"/>
  <line x1="252.9" y1="180" x2="330" y2="220" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="330" y1="140" x2="330" y2="220" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="60" y1="80" x2="150" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="180" x2="330" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="180" x2="330" y2="220" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="60" cy="80" r="3" fill="currentColor"/>
  <text x="48" y="79.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="330" cy="140" r="3" fill="currentColor"/>
  <text x="342" y="139.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="330" cy="220" r="3" fill="currentColor"/>
  <text x="344" y="225.2" text-anchor="middle" font-size="15" fill="currentColor">B′</text>
  <circle cx="252.9" cy="180" r="3" fill="currentColor"/>
  <text x="252.9" y="171.2" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <circle cx="150" cy="180" r="3" fill="currentColor"/>
  <text x="146" y="171.2" text-anchor="middle" font-size="15" fill="currentColor">Q</text>
</svg>
</div>

*Solution.* Reflect $B$ in the river line to get $B'$ (so the river is the perpendicular bisector of $BB'$). For any
point $Q$ on the river, $QB = QB'$ by Theorem 2.8. So the walk $AQ + QB$ equals $AQ + QB'$. By the triangle
inequality this is at least $AB'$, with equality only when $Q$ is on the segment $AB'$. So the best point is
$P$, where $AB'$ crosses the river, and the shortest walk is $AB'$.

At the best point the path makes equal angles with the river: the angle between $PA$ and the river equals the
vertically opposite angle between $PB'$ and the river, which equals the angle between $PB$ and the river by the mirror
symmetry.
This is the **law of reflection** for light (angle in equals angle out), and the argument shows that a reflected ray
takes the shortest route. Heron of Alexandria (1st century AD) gave this argument for mirrors. It is an early example
of the idea that nature chooses an extreme path, which Fermat later extended to the bending of light.

**Worked example.** Put the river along the $x$-axis, $A = (0, 3)$ and $B = (8, 5)$, in kilometres. Then
$B' = (8, -5)$, and the shortest walk is $AB' = \sqrt{8^2 + 8^2} = 8\sqrt{2} \approx 11.31$ km. The line from $(0,3)$
to $(8,-5)$ has slope $-1$, so it meets the river at $P = (3, 0)$. **Check:** $AP = \sqrt{9 + 9} = 3\sqrt2$,
$PB = \sqrt{25 + 25} = 5\sqrt2$, total $8\sqrt2$. (This uses distances in coordinates from Chapter 4 and Chapter 8.)

### The hinge theorem

*Level: intermediate.*

Open a pair of compasses wider and the distance between the points grows. That is:

**Theorem 2.14 (hinge theorem, Euclid I.24).** If two triangles have $AB = DE$ and $AC = DF$, but
$\angle A > \angle D$, then $BC > EF$.

*Proof.* Inside $\angle BAC$, copy $\angle EDF$ onto ray $AB$, and on the new ray mark $G$ with $AG = DF = AC$. By SAS,
$\triangle ABG \cong \triangle DEF$, so $BG = EF$. Let the bisector of $\angle GAC$ meet $BC$ at $H$. Triangles $AGH$
and $ACH$ have $AG = AC$, equal angles at $A$, and $AH$ shared, so by SAS $GH = CH$. Now
$BC = BH + HC = BH + HG$. If $B$, $H$, $G$ are not on one line, the triangle inequality in triangle $BHG$ gives
$BH + HG > BG$, so $BC > BG = EF$. If they are on one line, then $G$ is on line $BC$ and inside $\angle BAC$, so
it lies on the segment $BC$, strictly between $B$ and $C$, and $BC = BG + GC > BG = EF$ directly. Either way
So $BC > EF$. $\blacksquare$

The converse also holds (by elimination, as in Theorem 2.11): if $AB = DE$, $AC = DF$ and $BC > EF$, then
$\angle A > \angle D$. We will use the hinge theorem in Chapter 4 to tell acute, right and obtuse triangles apart by
their side lengths.

<figure class="play" data-play="tri3"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Pick three lengths: a triangle exists only if each is shorter than the other two together, and then the three sides fix it (SSS).</figcaption></figure>

## 2.5 Constructions with compass and straightedge

### The rules

The Greek construction game uses two tools, matching Euclid's first three postulates:

- a **straightedge**: a ruler with no marks, used only to draw the line through two points you already have;
- a **compass**: draws the circle with a given centre through a given point.

New points are only made where lines and circles you have drawn cross each other. You may not measure, and you may
not slide a ruler until something lines up. Euclid's compass was even "collapsing": it closed when lifted from the
page, so it could not carry a length from one place to another. His Proposition I.2 shows that this does not matter:
with a collapsing compass and a straightedge you can still copy a segment anywhere. So we use a compass that holds
its opening, knowing it adds nothing new.

Why play by such strict rules? Partly because they match the axioms, so that every construction is a proof that
some figure exists. Partly because the restrictions make a beautiful question: *what can be constructed?* That
question took over two thousand years to answer, and the answer, in Chapter 14, is a piece of algebra.

Each construction below comes with its proof, and each proof is a congruence.

### Perpendicular bisector and midpoint (Euclid I.10)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 260" role="img" aria-label="Constructing the perpendicular bisector of AB: arcs of the same radius from A and from B cross at P and Q; the line PQ is perpendicular to AB and passes through its midpoint M">
  <path d="M 224.6 78.6 A 130 130 0 0 0 166.6 23" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 166.6 257 A 130 130 0 0 0 224.6 201.4" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 233.4 23 A 130 130 0 0 0 175.4 78.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 175.4 201.4 A 130 130 0 0 0 233.4 257" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="110" y1="140" x2="290" y2="140" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="243.2" x2="200" y2="36.8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="110" y1="140" x2="200" y2="46.2" stroke="currentColor" stroke-width="1"/>
  <line x1="290" y1="140" x2="200" y2="46.2" stroke="currentColor" stroke-width="1"/>
  <line x1="110" y1="140" x2="200" y2="233.8" stroke="currentColor" stroke-width="1"/>
  <line x1="290" y1="140" x2="200" y2="233.8" stroke="currentColor" stroke-width="1"/>
  <polyline points="210,140 210,130 200,130" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="110" cy="140" r="3" fill="currentColor"/>
  <text x="96" y="145.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="290" cy="140" r="3" fill="currentColor"/>
  <text x="304" y="145.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="200" cy="46.2" r="3" fill="currentColor"/>
  <text x="214" y="47.4" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <circle cx="200" cy="233.8" r="3" fill="currentColor"/>
  <text x="214" y="243.1" text-anchor="middle" font-size="15" fill="currentColor">Q</text>
  <circle cx="200" cy="140" r="3" fill="currentColor"/>
  <text x="188" y="157.2" text-anchor="middle" font-size="15" fill="currentColor">M</text>
</svg>
</div>

*Construction.* With centre $A$ and any radius larger than half of $AB$ draw an arc above and below $AB$; with the
same radius and centre $B$ draw arcs crossing the first two at $P$ and $Q$. Draw line $PQ$; it meets $AB$ at $M$.

*Proof.* $PA = PB$ and $QA = QB$ (equal radii). By Theorem 2.8, both $P$ and $Q$ lie on the perpendicular bisector of
$AB$; two points determine a line, so $PQ$ is the perpendicular bisector, and $M$ is the midpoint. $\blacksquare$

### Bisecting an angle (Euclid I.9)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Bisecting angle O: an arc centred at O cuts the arms at P and Q; equal arcs from P and Q cross at R; triangles OPR and OQR are congruent by SSS, so OR bisects the angle">
  <line x1="40" y1="200" x2="410" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="200" x2="200.7" y2="8.5" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 209.4 214.8 A 170 170 0 0 0 137.5 60.7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 292.2 112.6 A 120 120 0 0 0 237.4 83.2" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 256.4 123.8 A 120 120 0 0 0 269.1 63" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="210" y1="200" x2="266.7" y2="94.3" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="149.3" y1="69.8" x2="266.7" y2="94.3" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="40" y1="200" x2="323.4" y2="67.8" stroke="currentColor" stroke-width="2"/>
  <circle cx="40" cy="200" r="3" fill="currentColor"/>
  <text x="28" y="205.2" text-anchor="middle" font-size="15" fill="currentColor">O</text>
  <circle cx="210" cy="200" r="3" fill="currentColor"/>
  <text x="216" y="219.2" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <circle cx="149.3" cy="69.8" r="3" fill="currentColor"/>
  <text x="135.3" y="71" text-anchor="middle" font-size="15" fill="currentColor">Q</text>
  <circle cx="266.7" cy="94.3" r="3" fill="currentColor"/>
  <text x="280.7" y="103.5" text-anchor="middle" font-size="15" fill="currentColor">R</text>
</svg>
</div>

*Construction.* With centre $O$ draw an arc cutting the arms at $P$ and $Q$. With centres $P$ and $Q$ and equal radii
draw arcs crossing at $R$. Ray $OR$ is the bisector.

*Proof.* $OP = OQ$ (first arc), $PR = QR$ (equal arcs), $OR$ shared. By SSS, $\triangle OPR \cong \triangle OQR$, so
$\angle POR = \angle QOR$. $\blacksquare$

### Perpendiculars (Euclid I.11 and I.12)

*Through a point $P$ on a line:* with centre $P$ draw a circle cutting the line at $A$ and $B$, so $PA = PB$. The
perpendicular bisector of $AB$ passes through $P$ (Theorem 2.8) and is the perpendicular.

*From a point $P$ not on a line:* with centre $P$ draw a circle big enough to cut the line at $A$ and $B$. Again
$PA = PB$, so $P$ lies on the perpendicular bisector of $AB$; construct it, and it is the perpendicular from $P$. Its
foot, the midpoint of $AB$, is the point of the line nearest to $P$ (Corollary 2.12).

### Copying an angle (Euclid I.23)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 190" role="img" aria-label="Copying angle A onto ray DE: equal arcs from A and D give points B, C and E, F; the arc of radius BC from E gives F; triangles ABC and DEF are congruent by SSS">
  <line x1="30" y1="160" x2="220" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="160" x2="164.1" y2="47.5" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 149.5 170.5 A 120 120 0 0 0 110.3 70.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="150" y1="160" x2="121.9" y2="82.9" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 30 160 L 56 160 A 26 26 0 0 0 49.9 143.3 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <line x1="250" y1="160" x2="450" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="250" y1="160" x2="384.1" y2="47.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 369.5 170.5 A 120 120 0 0 0 330.3 70.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 362.8 78.2 A 82.1 82.1 0 0 0 322.9 92.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="370" y1="160" x2="341.9" y2="82.9" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 250 160 L 276 160 A 26 26 0 0 0 269.9 143.3 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="30" cy="160" r="3" fill="currentColor"/>
  <text x="18" y="165.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="150" cy="160" r="3" fill="currentColor"/>
  <text x="154" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="121.9" cy="82.9" r="3" fill="currentColor"/>
  <text x="109.9" y="82.1" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="250" cy="160" r="3" fill="currentColor"/>
  <text x="238" y="165.2" text-anchor="middle" font-size="15" fill="currentColor">D</text>
  <circle cx="370" cy="160" r="3" fill="currentColor"/>
  <text x="374" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">E</text>
  <circle cx="341.9" cy="82.9" r="3" fill="currentColor"/>
  <text x="329.9" y="82.1" text-anchor="middle" font-size="15" fill="currentColor">F</text>
</svg>
</div>

*Construction.* Given $\angle A$ and a ray from $D$. With centre $A$ draw an arc cutting the arms at $B$ and $C$.
With the same radius and centre $D$ draw an arc cutting the ray at $E$. With centre $E$ and radius $BC$ draw an arc
crossing the second arc at $F$. Then $\angle EDF = \angle BAC$.

*Proof.* $DE = AB$, $DF = AC$ (same radius) and $EF = BC$ (by construction). SSS. $\blacksquare$

### Copying a triangle, and a few classics

Copying a triangle is SSS made visible: copy one side, then draw arcs with the other two lengths from its ends
(Euclid I.22). Combining the basic moves gives many more:

- **a $60°$ angle:** the equilateral triangle of Euclid I.1 (Chapter 1);
- **$30°$, $15°$, ...:** bisect $60°$ again and again;
- **$90°$ and $45°$:** a perpendicular, then its bisector;
- **a line through $P$ parallel to $\ell$:** copy the angle a transversal through $P$ makes with $\ell$ (why this
  works is Chapter 3);
- **the centre of a circle:** the perpendicular bisectors of two chords cross at the centre (Chapter 6).

What *cannot* be done is just as interesting: no construction trisects every angle, or makes a $20°$ angle, or a
regular 7-sided polygon. Those are theorems, proved in Chapter 14.

## 2.6 Quadrilaterals and their properties

A **quadrilateral** $ABCD$ has four vertices, joined in that order by four sides $AB$, $BC$, $CD$, $DA$ that do not
cross one another. Its **diagonals** are $AC$ and $BD$. It is **convex** if each diagonal lies inside it (no dent);
equivalently, the two diagonals cross each other. Otherwise it is **concave**, like an arrowhead.

The special quadrilaterals have a family tree. We use **inclusive** definitions, so that each family includes the
ones below it.

- A **trapezoid** (British: *trapezium*) has at least one pair of parallel sides. (Some books say "exactly one pair";
  then a parallelogram is not a trapezoid. Check which convention a book uses.)
- A **parallelogram** has both pairs of opposite sides parallel.
- A **rectangle** has four right angles.
- A **rhombus** has four equal sides.
- A **square** has four equal sides and four right angles: it is both a rectangle and a rhombus.
- A **kite** has two pairs of equal *adjacent* sides: $AB = AD$ and $CB = CD$. (Again, some books exclude the
  rhombus; we include it.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 250" role="img" aria-label="The quadrilateral family: trapezoids and kites are quadrilaterals; parallelograms are trapezoids; rectangles and rhombi are parallelograms; a rhombus is also a kite; a square is both a rectangle and a rhombus">
  <line x1="240" y1="25" x2="130" y2="63" stroke="currentColor" stroke-width="1.2"/>
  <line x1="240" y1="25" x2="370" y2="63" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130" y1="85" x2="130" y2="118" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130" y1="140" x2="70" y2="173" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130" y1="140" x2="300" y2="173" stroke="currentColor" stroke-width="1.2"/>
  <line x1="370" y1="85" x2="300" y2="173" stroke="currentColor" stroke-width="1.2"/>
  <line x1="70" y1="195" x2="185" y2="218" stroke="currentColor" stroke-width="1.2"/>
  <line x1="300" y1="195" x2="185" y2="218" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="181.9,25 298.1,25 298.1,3 181.9,3" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="240" y="19" text-anchor="middle" font-size="14" fill="currentColor">quadrilateral</text>
  <polygon points="87.3,85 172.7,85 172.7,63 87.3,63" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="130" y="79" text-anchor="middle" font-size="14" fill="currentColor">trapezoid</text>
  <polygon points="346.6,85 393.4,85 393.4,63 346.6,63" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="370" y="79" text-anchor="middle" font-size="14" fill="currentColor">kite</text>
  <polygon points="71.9,140 188.1,140 188.1,118 71.9,118" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="130" y="134" text-anchor="middle" font-size="14" fill="currentColor">parallelogram</text>
  <polygon points="27.3,195 112.7,195 112.7,173 27.3,173" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="70" y="189" text-anchor="middle" font-size="14" fill="currentColor">rectangle</text>
  <polygon points="265.1,195 334.9,195 334.9,173 265.1,173" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="300" y="189" text-anchor="middle" font-size="14" fill="currentColor">rhombus</text>
  <polygon points="153.9,240 216.1,240 216.1,218 153.9,218" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="185" y="234" text-anchor="middle" font-size="14" fill="currentColor">square</text>
</svg>
</div>

Most properties of parallelograms and rectangles depend on parallel lines and wait for
[Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md). But kites and rhombi can be handled now, with congruence alone.

### Kites

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 260" role="img" aria-label="A kite ABCD with AB = AD and CB = CD; the diagonal AC is a line of symmetry, it bisects the angles at A and C and cuts the other diagonal BD at right angles at its midpoint M">
  <polygon points="150,28 60,100 150,232 240,100" fill="#7ccf9a" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="28" x2="150" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="60" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="108.7" y1="68.7" x2="101.3" y2="59.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="198.7" y1="59.3" x2="191.3" y2="68.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="101.2" y1="171" x2="111.1" y2="164.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="98.9" y1="167.7" x2="108.8" y2="161" stroke="currentColor" stroke-width="1.3"/>
  <line x1="188.9" y1="164.3" x2="198.8" y2="171" stroke="currentColor" stroke-width="1.3"/>
  <line x1="191.2" y1="161" x2="201.1" y2="167.7" stroke="currentColor" stroke-width="1.3"/>
  <polyline points="159,100 159,91 150,91" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="150" cy="28" r="3" fill="currentColor"/>
  <text x="150" y="19.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="60" cy="100" r="3" fill="currentColor"/>
  <text x="46" y="105.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="150" cy="232" r="3" fill="currentColor"/>
  <text x="150" y="251.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="240" cy="100" r="3" fill="currentColor"/>
  <text x="254" y="105.2" text-anchor="middle" font-size="15" fill="currentColor">D</text>
  <circle cx="150" cy="100" r="3" fill="currentColor"/>
  <text x="162" y="117.2" text-anchor="middle" font-size="15" fill="currentColor">M</text>
</svg>
</div>

**Theorem 2.15 (kite).** In a kite $ABCD$ with $AB = AD$ and $CB = CD$:

1. the diagonal $AC$ bisects the angles at $A$ and at $C$, and $\angle B = \angle D$;
2. the diagonal $AC$ is the perpendicular bisector of the diagonal $BD$.

*Proof.* (1) Triangles $ABC$ and $ADC$ have $AB = AD$, $CB = CD$ and $AC$ shared, so they are congruent by SSS.
Matching parts: $\angle BAC = \angle DAC$, $\angle BCA = \angle DCA$, $\angle B = \angle D$. (2) $A$ and $C$ are both
equally far from $B$ and $D$, so both lie on the perpendicular bisector of $BD$ (Theorem 2.8), which is therefore the
line $AC$. $\blacksquare$

A kite is the shape of its mirror line: fold along $AC$ and $B$ lands on $D$.

**Corollary 2.16 (rhombus).** The diagonals of a rhombus are perpendicular and bisect each other, and each diagonal
bisects two of its angles.

*Proof.* A rhombus is a kite in two ways: $AB = AD$, $CB = CD$, and also $BA = BC$, $DA = DC$. By the kite theorem
used both ways, $AC$ is the perpendicular bisector of $BD$, and $BD$ is the perpendicular bisector of $AC$.
$\blacksquare$

**Worked example.** A rhombus has diagonals 10 and 24. How long is each side? The diagonals bisect each other at
right angles, cutting the rhombus into four right triangles with legs 5 and 12. By Pythagoras
([Chapter 4](04-Area-and-Pythagoras.md)) each side is $\sqrt{25 + 144} = 13$.

### Two facts about parallelograms that need no parallels

*Level: intermediate.*

**Theorem 2.17.** (a) If both pairs of opposite sides of a quadrilateral are equal, its opposite angles are equal.
(b) If the diagonals of a quadrilateral bisect each other, its opposite sides are equal.

*Proof.* (a) If $AB = CD$ and $BC = DA$, triangles $ABC$ and $CDA$ share $AC$, so they are congruent (SSS) and
$\angle B = \angle D$. The diagonal $BD$ gives $\angle A = \angle C$ the same way. (b) If the diagonals meet at $M$
with $AM = MC$ and $BM = MD$, then triangles $AMB$ and $CMD$ are congruent by SAS (vertical angles at $M$), so
$AB = CD$; similarly $BC = DA$. $\blacksquare$

What is missing is the link to *parallel*: does "opposite sides equal" force "opposite sides parallel", and the other
way round? Half of it is free (Chapter 3 shows that equal alternate angles force parallel lines, in neutral
geometry), and half needs the fifth postulate.

Rectangles are the strangest case of all. It seems obvious that rectangles exist: draw a square. But to prove that a
quadrilateral with four right angles exists at all, you need the parallel postulate. In fact the existence of a
single rectangle is *equivalent* to the parallel postulate (given Hilbert's other axioms, including continuity). In the hyperbolic geometry of
Chapter 17 there are no rectangles: a quadrilateral with three right angles always has an acute fourth angle. This
was one of the strange results that 18th-century mathematicians kept running into when they tried to prove the fifth
postulate, and it is the subject of [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)'s last section.

## Check yourself

??? question "1. Which test, if any, proves the triangles congruent? (a) AB = DE, BC = EF, ∠B = ∠E. (b) ∠A = ∠D, ∠C = ∠F, AB = DE. (c) AB = DE, AC = DF, ∠B = ∠E. (d) all three angles equal."

    (a) SAS: $\angle B$ is between $AB$ and $BC$. (b) AAS: $AB$ is not between $\angle A$ and $\angle C$, but it is
    opposite $\angle C$ and matches $DE$ opposite $\angle F$. (c) None in general: $\angle B$ is not between $AB$ and
    $AC$, so this is SSA (it works only if $AC \ge AB$, Exercise 10). (d) None: equal angles give the same shape but
    not the same size (similar triangles, Chapter 5).

??? question "2. Two sides of a triangle are 9 and 14. What lengths can the third side have? Which whole numbers?"

    By the triangle inequality, $14 - 9 < c < 14 + 9$, so $5 < c < 23$. The whole numbers are $6, 7, \ldots, 22$,
    which is 17 values.

??? question "3. In isosceles triangle PQR with PQ = PR, ∠Q = (2x + 31)° and ∠R = (4x − 3)°. Find x and the base angles."

    Base angles of an isosceles triangle are equal: $2x + 31 = 4x - 3$, so $x = 17$ and each base angle is
    $2 \cdot 17 + 31 = 65°$. **Check:** $4 \cdot 17 - 3 = 65$.

??? question "4. Prove that the median to the base of an isosceles triangle is perpendicular to the base and bisects the apex angle (use SSS, not the angle bisector)."

    Let $AB = AC$ and $M$ the midpoint of $BC$. Triangles $ABM$ and $ACM$ have $AB = AC$, $BM = CM$, $AM$ shared, so
    they are congruent by SSS. Then $\angle BAM = \angle CAM$ (bisects the apex angle) and $\angle AMB = \angle AMC$;
    these two form a linear pair, so each is $90°$. $\blacksquare$

??? question "5. Prove that the perpendicular from a point P to a line ℓ is shorter than any other segment from P to ℓ."

    Let $F$ be the foot of the perpendicular and $Q \ne F$ another point of $\ell$. In triangle $PFQ$ the angle at $F$ is
    $90°$. The exterior angle at $F$ is also $90°$, and by Theorem 2.2 it is larger than $\angle Q$. So
    $\angle Q < 90° = \angle F$, and by Theorem 2.11 the side opposite $\angle F$, which is $PQ$, is longer than the
    side opposite $\angle Q$, which is $PF$. $\blacksquare$

??? question "6. Prove that every point on the bisector of an angle is equally far from the two arms."

    Let $P$ be on the bisector of $\angle O$, with feet of perpendiculars $E$ and $F$ on the two arms. Triangles $OEP$
    and $OFP$ have right angles at $E$ and $F$, equal angles at $O$, and the common side $OP$ (opposite the right
    angles). By AAS they are congruent, so $PE = PF$. $\blacksquare$ (The converse also holds, by HL.)

??? question "7. A traveller at A = (0, 2) walks to a straight wall along the x-axis, touches it, and goes to B = (6, 4). Where should she touch the wall, and how long is the shortest walk?"

    Reflect $B$ to $B' = (6, -4)$. The shortest walk is $AB' = \sqrt{6^2 + 6^2} = 6\sqrt2 \approx 8.49$. The line from
    $(0, 2)$ to $(6, -4)$ has slope $-1$, so it crosses $y = 0$ at $x = 2$: touch at $P = (2, 0)$. **Check:**
    $AP = \sqrt{4 + 4} = 2\sqrt2$, $PB = \sqrt{16 + 16} = 4\sqrt2$, total $6\sqrt2$.

??? question "8. With compass and straightedge, how do you construct angles of 75° and 105°?"

    $75° = 60° + 15°$: construct an equilateral triangle for $60°$, bisect it twice to get $15°$, and copy the $15°$
    angle next to the $60°$ angle. Or $75° = 45° + 30°$. Then $105° = 180° - 75°$ is the other angle of the linear
    pair: extend one arm of the $75°$ angle backwards.

??? question "9. In the perpendicular bisector construction, what goes wrong if the arcs from A and from B have different radii?"

    The arcs from $A$ (radius $r$) and $B$ (radius $s$) meet at points $P$, $Q$ which are mirror images in line $AB$,
    so line $PQ$ is still perpendicular to $AB$. But $PA = r \ne s = PB$, so $P$ is not on the perpendicular
    bisector, and $PQ$ meets $AB$ at a point that is not the midpoint (it is nearer the centre with the smaller
    radius). Equal radii are essential.

??? question "10. Prove that SSA does give congruence when the side opposite the given angle is at least as long as the other given side: if ∠A = ∠D, AB = DE, BC = EF and BC ≥ AB, then the triangles are congruent."

    Copy triangle $DEF$ so that $D = A$, $E = B$ and $F$ lies on ray $AC$ (possible since $\angle A = \angle D$ and
    $AB = DE$); call the new position of $F$ point $C'$, so $BC' = BC$. If $C' = C$ we are done. Otherwise say $C$ is
    between $A$ and $C'$ (the other order is the same). Triangle $BCC'$ is isosceles, so
    $\angle BC'C = \angle BCC'$. But $\angle BCC'$ is an exterior angle of triangle $ABC$, so it is larger than
    $\angle A$. Hence in triangle $ABC'$, $\angle C' > \angle A$, and by Theorem 2.11 the side opposite $\angle C'$
    is longer than the side opposite $\angle A$: $AB > BC' = BC$. This contradicts $BC \ge AB$. So $C' = C$.
    $\blacksquare$

??? question "11. Use the hinge theorem to prove: in triangle ABC with median AM (M the midpoint of BC), if AB > AC then ∠AMB is obtuse."

    Triangles $AMB$ and $AMC$ have $MB = MC$ and $AM$ shared. Their third sides satisfy $AB > AC$, so by the converse
    of the hinge theorem the angles opposite them satisfy $\angle AMB > \angle AMC$. These two angles form a linear
    pair, adding to $180°$, so the larger one is more than $90°$: $\angle AMB$ is obtuse. $\blacksquare$

??? question "12. Prove, without using the angle sum, that a triangle has at most one right or obtuse angle, and hence that the base angles of an isosceles triangle are acute."

    Suppose $\angle B \ge 90°$ and $\angle C \ge 90°$. The exterior angle at $C$ is $180° - \angle C \le 90° \le \angle B$. But Theorem 2.2 says the exterior angle at $C$ is *larger* than $\angle B$. Contradiction. So at most
    one angle is right or obtuse. In an isosceles triangle the base angles are equal, so if one were right or obtuse,
    both would be; impossible. So they are acute. $\blacksquare$

## What you learned

- Triangles are named by sides (scalene, isosceles, equilateral) and by angles (acute, right, obtuse), with
  inclusive definitions.
- Congruent triangles match in all six parts; SAS is taken as an axiom, and ASA, AAS, SSS and HL are proved from it.
  SSA fails in general (two triangles), but works when the side opposite the angle is the longer one.
- The exterior angle of a triangle is larger than each remote interior angle, without any parallel postulate.
- Isosceles triangles have equal base angles (three proofs, including Pappus's "congruent to itself" and Euclid's
  bridge of asses), and the converse holds.
- The longer side faces the larger angle; each side is less than the sum of the other two; opening the angle
  between two fixed sides lengthens the third (hinge theorem). Reflection solves Heron's shortest path.
- Compass and straightedge constructions (bisectors, perpendiculars, copying angles and triangles) are each
  justified by a congruence.
- Kites and rhombi have perpendicular diagonals and a mirror line; parallelograms and rectangles need Chapter 3.

**Next:** [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md), parallel lines, the angle sum of a triangle and of
any polygon, tilings, and why all of it rests on Euclid's fifth postulate.

## Further reading

- Euclid, *Elements*, Book I, propositions 1 to 26, with Thomas L. Heath's commentary (1908). Every theorem in this
  chapter is there, with Proclus's remarks on their history.
- Robin Hartshorne, *Geometry: Euclid and Beyond*, Springer, 2000, chapters 2 and 3: Euclid's proofs checked against
  Hilbert's axioms, including SSS and the betweenness gaps.
- Marvin Jay Greenberg, *Euclidean and Non-Euclidean Geometries: Development and History*, 4th edition, W. H. Freeman,
  2008. Neutral geometry done carefully; the best preparation for Chapters 15 to 17.
- H. S. M. Coxeter and S. L. Greitzer, *Geometry Revisited*, Mathematical Association of America, 1967. Short, deep
  and full of problems.
- Richard Rusczyk, *Introduction to Geometry*, Art of Problem Solving, 2nd edition 2007. Hundreds of problems at
  this level.
- On this site: the Topics lessons [Compass and straightedge](../../topics/geometry/level-5/01-compass-straightedge.md),
  [Constructing triangles](../../topics/geometry/level-5/02-constructing-triangles.md) and
  [Congruent triangles](../../topics/geometry/level-5/05-congruent-triangles.md); the
  [Topics geometry track](../../topics/geometry/index.md); and, for constructions as algebra, the Algebra book's
  [Chapter 19, Fields and extensions](../algebra/19-Fields-and-Extensions.md).
