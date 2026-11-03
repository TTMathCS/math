# 5. Similarity

*A map is a small copy of a country, a photograph is a small copy of a face, and a model aircraft in a wind tunnel is
a small copy of a real one. When is a copy faithful? Which numbers survive the shrinking and which change, and by how
much? This chapter makes "same shape, different size" precise. You will prove the one theorem everything else rests
on, the intercept theorem, and from it the three tests for similar triangles. Then you will see why areas grow as the
square and volumes as the cube of the scale, why that keeps giants out of the real world, how a right triangle hides a
geometric mean, and what the golden ratio really is once the myths are cleared away.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a dilation (a scaling from a centre) does to lengths and angles
    - the intercept theorem and its converse, with a proof that works for every length, rational or not
    - the AA, SAS and SSS tests for similar triangles, each proved from the intercept theorem
    - why areas scale by $k^2$ and volumes by $k^3$, and what the square-cube law says about animals, on Earth and on Mars
    - the geometric mean, the altitude theorem in a right triangle, and how to construct $\sqrt{n}$
    - the golden ratio: its definition, its true home in the regular pentagon, and which famous claims about it are false

    **You need:** [Chapter 2](02-Triangles-and-Congruence.md) (the congruence tests SSS, SAS, ASA),
    [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md) (angles at parallel lines, the angle sum) and
    [Chapter 4](04-Area-and-Pythagoras.md) (area of a triangle as half base times height). For a gentler version, see
    the Topics lessons [Dilations and scale drawings](../../topics/geometry/level-5/04-dilations-scale-drawings.md) and
    [Similar triangles and scale factors](../../topics/geometry/level-7/01-similar-triangles.md).

    **Levels:** 5.1 is beginner; 5.2 to 5.4 are intermediate; the proofs in 5.2 and the pentagon in 5.5 are
    intermediate to advanced.

## 5.1 Scaling

A photograph printed at 10 by 15 centimetres is enlarged to 20 by 30. Everything in it doubles: the width of a
face, the length of a nose, the distance between two eyes. Nothing turns, nothing bends, and a right angle in the
small print is still a right angle in the big one. That is the idea of **scaling**, and geometry makes it exact with
one simple map.

**Definition (dilation).** Fix a point $O$, the **centre**, and a positive number $k$, the **scale factor**. The
**dilation** with centre $O$ and factor $k$ sends each point $P$ to the point $P'$ on the ray from $O$ through $P$
with

$$OP' = k \cdot OP .$$

The centre itself stays where it is. If $k > 1$ the figure is enlarged, if $k < 1$ it is shrunk, and $k = 1$ changes
nothing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Triangle ABC and its image A prime B prime C prime under the dilation with centre O and factor 2; dashed rays from O pass through each vertex and its image, which is twice as far from O">
  <line x1="40" y1="212" x2="240" y2="182" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="40" y1="212" x2="300" y2="72" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="40" y1="212" x2="180" y2="52" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polygon points="240,182 300,72 180,52" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="140,197 170,142 110,132" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="40" cy="212" r="3" fill="currentColor"/>
  <text x="30" y="216" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="140" y="213.6" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="180.7" y="141.2" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="100.8" y="128.9" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="240" y="199.6" font-size="13" text-anchor="middle" fill="currentColor">A′</text>
  <text x="311.6" y="70.7" font-size="13" text-anchor="middle" fill="currentColor">B′</text>
  <text x="170" y="48.2" font-size="13" text-anchor="middle" fill="currentColor">C′</text>
  <text x="300" y="236" font-size="12" text-anchor="middle" fill="currentColor">OA′ = 2·OA,  OB′ = 2·OB,  OC′ = 2·OC</text>
</svg>
</div>

In the figure, $O$ is the centre and $k = 2$: each of $A'$, $B'$, $C'$ is on the ray from $O$ through $A$, $B$, $C$,
twice as far out. Measure the sides and you find $A'B' = 2\,AB$, $B'C' = 2\,BC$, $C'A' = 2\,CA$, and the angles of
the two triangles are equal. We will prove both facts in 5.2. For now, take them as the definition of what we want.

**Definition (similar).** Two figures are **similar** if one can be turned into the other by a dilation followed by
a congruence (a rigid motion: sliding, turning, flipping). In words: same shape, possibly a different size, possibly
moved. We write $\triangle ABC \sim \triangle A'B'C'$ and always list the vertices in matching order, so that $A$
goes to $A'$, $B$ to $B'$ and $C$ to $C'$.

For polygons this comes down to two conditions:

- corresponding **angles are equal**, and
- corresponding **sides are in the same ratio** $k$: $A'B'/AB = B'C'/BC = C'A'/CA = k$.

Both conditions are needed for polygons in general. A square and a long rectangle have the same angles (all right
angles) but are not similar; a square and a rhombus with 60 degree angles have all sides in ratio 1 but are not
similar either. One of the surprises of this chapter is that **for triangles**, either condition alone is enough.

**Worked example (a map).** A hiking map has scale 1 : 25 000, meaning that 1 centimetre on the map stands for
25 000 centimetres on the ground. Two huts are 8.4 cm apart on the map. How far apart are they?

- Multiply by the scale factor: $8.4 \times 25\,000 = 210\,000$ cm.
- Convert: $210\,000$ cm $= 2100$ m $= 2.1$ km.

Check: going back, $2.1$ km $= 210\,000$ cm, and $210\,000 / 25\,000 = 8.4$ cm.

The map is a dilation (factor $1/25\,000$) of the land, flattened. Angles on the map, for example the angle between
two straight roads, are the same as on the ground. That is why you can take a compass bearing from a map. (A map
of a small region can be almost exactly similar to the land; a map of the whole Earth cannot, because the Earth is
curved. That story belongs to [Chapter 16](16-Spherical-Geometry.md).)

**Worked example (shadows).** At the same moment of a sunny day, a 1.5 m stick standing upright casts a shadow 2 m
long, and a tree casts a shadow 14 m long. How tall is the tree?

The sun is so far away that its rays arrive parallel. Stick, shadow and ray make a right triangle; tree, shadow and
ray make another, with the same angle where the ray meets the ground. So the triangles have the same angles, and (we
are about to prove) they are similar. The ratio height : shadow is the same for both:

$$\frac{h}{14} = \frac{1.5}{2}, \qquad h = 14 \times 0.75 = 10.5 \text{ m}.$$

Check: $10.5 / 14 = 0.75 = 1.5/2$.

Greek writers of later centuries told the story that Thales of Miletus (sixth century BCE) measured the height of an
Egyptian pyramid this way, waiting for the moment when a stick's shadow equalled its height. The story is told by
authors writing centuries after Thales, so we cannot be sure it happened, but the method is perfectly sound.

## 5.2 Similar triangles

The whole theory of similarity rests on one theorem about a triangle cut by a line parallel to one side.

### The intercept theorem

**Theorem (intercept theorem).** In triangle $ABC$, let $D$ be a point on side $AB$ and $E$ a point on side $AC$
with $DE$ parallel to $BC$. Then

$$\frac{AD}{AB} = \frac{AE}{AC} = \frac{DE}{BC}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="Triangle ABC with D on AB and E on AC, DE parallel to BC. Dashed segments BE and CD are drawn for the proof, and a dotted segment EF parallel to AB meets BC at F">
  <polygon points="166,25 45,245 375,245" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="166,25 117.6,113 249.6,113" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <line x1="45" y1="245" x2="249.6" y2="113" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="375" y1="245" x2="117.6" y2="113" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="249.6" y1="113" x2="177" y2="245" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 3"/>
  <line x1="117.6" y1="113" x2="249.6" y2="113" stroke="currentColor" stroke-width="2.2"/>
  <text x="163.6" y="17.8" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="34.2" y="254.8" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="386.1" y="254.1" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="105.6" y="117" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <text x="261.6" y="117" font-size="13" text-anchor="middle" fill="currentColor">E</text>
  <text x="177" y="262" font-size="13" text-anchor="middle" fill="currentColor">F</text>
  <circle cx="166" cy="25" r="2.5" fill="currentColor"/>
  <circle cx="45" cy="245" r="2.5" fill="currentColor"/>
  <circle cx="375" cy="245" r="2.5" fill="currentColor"/>
  <circle cx="117.6" cy="113" r="2.5" fill="currentColor"/>
  <circle cx="249.6" cy="113" r="2.5" fill="currentColor"/>
  <circle cx="177" cy="245" r="2.5" fill="currentColor"/>
</svg>
</div>

You may meet this theorem as the "basic proportionality theorem", the "side splitter theorem" or, in Europe, as
Thales' theorem (a name that the English-speaking world gives to a different theorem, the one in
[Chapter 6](06-Circles.md)).

Before proving it, notice what makes it hard. If $AD = 2$ and $AB = 5$, you could try to cut $AB$ into five equal
pieces, draw parallels to $BC$ through each cut point, and show the parallels also cut $AC$ into five equal pieces.
That works whenever the ratio $AD/AB$ is a fraction. But what if $AD/AB$ is $1/\sqrt{2}$? There is no common unit
that measures both, and the "count the pieces" proof falls apart. The Greeks discovered such **incommensurable**
lengths (the side and diagonal of a square are the classic pair) and it forced them to rebuild the theory of ratio;
Eudoxus' answer is Book V of Euclid's *Elements*. We will avoid the problem entirely with Euclid's own trick from
Book VI: compare **areas**.

**Two facts about area** (both from [Chapter 4](04-Area-and-Pythagoras.md)). Write $[XYZ]$ for the area of triangle
$XYZ$.

1. Two triangles with the **same base and equal heights** have equal area, since each is half base times height.
2. Two triangles with the **same height** have areas in the ratio of their bases. In particular, if $D$ lies on side
   $AB$ of triangle $ABE$, then $[ADE]/[ABE] = AD/AB$: both triangles have apex $E$ and their bases lie on the same
   line, so they share the height from $E$.

**Proof of the intercept theorem.** Draw the segments $BE$ and $CD$.

*Step 1.* Triangles $DBE$ and $DCE$ have the same base $DE$. Their third vertices $B$ and $C$ lie on the line $BC$,
which is parallel to $DE$, so $B$ and $C$ are the same distance from the line $DE$. The heights are equal, so
$[DBE] = [DCE]$.

*Step 2.* Add the triangle $ADE$ to each. Since $D$ lies on $AB$, triangles $ADE$ and $DBE$ together make triangle
$ABE$. Since $E$ lies on $AC$, triangles $ADE$ and $DCE$ together make triangle $ADC$. So

$$[ABE] = [ADE] + [DBE] = [ADE] + [DCE] = [ADC].$$

*Step 3.* By fact 2, using apex $E$ and bases on line $AB$: $[ADE]/[ABE] = AD/AB$. Using apex $D$ and bases on line
$AC$: $[ADE]/[ADC] = AE/AC$. The two left-hand sides are equal by Step 2, so

$$\frac{AD}{AB} = \frac{AE}{AC}.$$

*Step 4 (the third ratio).* Through $E$ draw the line parallel to $AB$; it meets $BC$ at a point $F$. Now $DEFB$
has both pairs of opposite sides parallel, so it is a parallelogram, and $DE = BF$. Apply Step 3 to triangle $CAB$
with the line $EF$ parallel to $AB$ (now $C$ plays the part of the apex):
$CE/CA = CF/CB$. Then

$$\frac{DE}{BC} = \frac{BF}{BC} = \frac{BC - CF}{BC} = 1 - \frac{CF}{CB} = 1 - \frac{CE}{CA} = \frac{CA - CE}{CA} = \frac{AE}{AC}.$$

That proves all three ratios equal. $\blacksquare$

Nothing in the proof assumed the ratios were fractions. Areas are real numbers, and the argument is the same for
every length. The same proof works, with small changes, when $D$ and $E$ lie on the sides extended beyond $B$ and
$C$, or beyond $A$; in every case the parallel line cuts the two sides (or their extensions) in the same ratio.

**Converse.** If $D$ is on $AB$ and $E$ is on $AC$ with $AD/AB = AE/AC$, then $DE$ is parallel to $BC$.

*Proof.* Through $D$ draw the line parallel to $BC$ (by the parallel postulate, there is exactly one); it meets $AC$
at some point $E'$. By the theorem, $AE'/AC = AD/AB = AE/AC$, so $AE' = AE$. Two points on the segment $AC$ at the
same distance from $A$ are the same point, so $E' = E$ and $DE$ is the parallel. $\blacksquare$

**Worked example.** In triangle $ABC$, $DE \parallel BC$ with $D$ on $AB$, $E$ on $AC$, $AD = 3$, $DB = 5$,
$AE = 4.5$ and $BC = 12$. Find $EC$ and $DE$.

- $AB = 3 + 5 = 8$, so $AD/AB = 3/8$.
- $AE/AC = 3/8$, so $AC = 4.5 \times 8/3 = 12$ and $EC = 12 - 4.5 = 7.5$.
- $DE/BC = 3/8$, so $DE = 12 \times 3/8 = 4.5$.

Check: $AE/EC = 4.5/7.5 = 0.6$ and $AD/DB = 3/5 = 0.6$. (Splitting the sides in the same ratio is an equivalent way
to state the theorem.)

**The midpoint theorem** is the special case $AD/AB = 1/2$: the segment joining the midpoints of two sides of a
triangle is parallel to the third side and half as long.

### Dilations, at last

Now we can prove what we saw in 5.1. Let the dilation with centre $O$ and factor $k$ send $P$ to $P'$ and $Q$ to
$Q'$. If $O$, $P$, $Q$ are not on one line, then in triangle $OP'Q'$ we have $OP/OP' = OQ/OQ' = 1/k$, so by the
converse of the intercept theorem $PQ \parallel P'Q'$, and by the theorem itself $PQ/P'Q' = 1/k$, that is,

$$P'Q' = k \cdot PQ .$$

(If $O$, $P$, $Q$ are on one line, the same equation follows by subtracting distances along the line.) So a dilation
multiplies **every** distance by $k$ and sends every line to a parallel line. Since it sends lines to parallel lines,
it keeps angles: the angle between two lines equals the angle between their parallels (corresponding angles,
[Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)).

### The three similarity tests

**Theorem (AA similarity).** If two angles of one triangle equal two angles of another, the triangles are similar.

Two equal angles force the third to be equal too, since the angles of each triangle add to 180 degrees. What is
not obvious is that the sides must then be in proportion.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Left: triangle ABC with point D on AB and E on AC so that DE is parallel to BC and AD equals A prime B prime. Right: the smaller triangle A prime B prime C prime with the same angles, congruent to ADE">
  <polygon points="22,172 222,172 82,44" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="22,172 142,172 58,95.2" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <line x1="142" y1="172" x2="58" y2="95.2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <polygon points="262,172 382,172 298,95.2" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="22,172 44,172 44,171.2 43.9,170.3 43.9,169.5 43.7,168.7 43.6,167.9 43.4,167.1 43.2,166.3 43,165.5 42.7,164.7 42.5,163.9 42.1,163.1 41.8,162.4 41.4,161.6 41,160.9 40.6,160.2 40.1,159.5 39.6,158.8 39.1,158.2 38.6,157.5 38,156.9 37.4,156.3 36.8,155.8 36.2,155.2 35.6,154.7 34.9,154.2 34.2,153.7 33.5,153.3 32.8,152.8 32.1,152.4 31.3,152.1" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="44,172 44,171.2 43.9,170.3 43.9,169.5 43.7,168.7 43.6,167.9 43.4,167.1 43.2,166.3 43,165.5 42.7,164.7 42.5,163.9 42.1,163.1 41.8,162.4 41.4,161.6 41,160.9 40.6,160.2 40.1,159.5 39.6,158.8 39.1,158.2 38.6,157.5 38,156.9 37.4,156.3 36.8,155.8 36.2,155.2 35.6,154.7 34.9,154.2 34.2,153.7 33.5,153.3 32.8,152.8 32.1,152.4 31.3,152.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="262,172 284,172 284,171.2 283.9,170.3 283.9,169.5 283.7,168.7 283.6,167.9 283.4,167.1 283.2,166.3 283,165.5 282.7,164.7 282.5,163.9 282.1,163.1 281.8,162.4 281.4,161.6 281,160.9 280.6,160.2 280.1,159.5 279.6,158.8 279.1,158.2 278.6,157.5 278,156.9 277.4,156.3 276.8,155.8 276.2,155.2 275.6,154.7 274.9,154.2 274.2,153.7 273.5,153.3 272.8,152.8 272.1,152.4 271.3,152.1" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="284,172 284,171.2 283.9,170.3 283.9,169.5 283.7,168.7 283.6,167.9 283.4,167.1 283.2,166.3 283,165.5 282.7,164.7 282.5,163.9 282.1,163.1 281.8,162.4 281.4,161.6 281,160.9 280.6,160.2 280.1,159.5 279.6,158.8 279.1,158.2 278.6,157.5 278,156.9 277.4,156.3 276.8,155.8 276.2,155.2 275.6,154.7 274.9,154.2 274.2,153.7 273.5,153.3 272.8,152.8 272.1,152.4 271.3,152.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="207.2,158.5 206.9,158.9 206.6,159.2 206.3,159.6 206,160 205.7,160.4 205.4,160.8 205.1,161.2 204.9,161.7 204.6,162.1 204.4,162.5 204.2,163 203.9,163.4 203.7,163.9 203.5,164.3 203.4,164.8 203.2,165.2 203,165.7 202.9,166.2 202.7,166.6 202.6,167.1 202.5,167.6 202.4,168.1 202.3,168.6 202.2,169 202.2,169.5 202.1,170 202.1,170.5 202,171 202,171.5 202,172" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="127.2,158.5 126.9,158.9 126.6,159.2 126.3,159.6 126,160 125.7,160.4 125.4,160.8 125.1,161.2 124.9,161.7 124.6,162.1 124.4,162.5 124.2,163 123.9,163.4 123.7,163.9 123.5,164.3 123.4,164.8 123.2,165.2 123,165.7 122.9,166.2 122.7,166.6 122.6,167.1 122.5,167.6 122.4,168.1 122.3,168.6 122.2,169 122.2,169.5 122.1,170 122.1,170.5 122,171 122,171.5 122,172" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="367.2,158.5 366.9,158.9 366.6,159.2 366.3,159.6 366,160 365.7,160.4 365.4,160.8 365.1,161.2 364.9,161.7 364.6,162.1 364.4,162.5 364.2,163 363.9,163.4 363.7,163.9 363.5,164.3 363.4,164.8 363.2,165.2 363,165.7 362.9,166.2 362.7,166.6 362.6,167.1 362.5,167.6 362.4,168.1 362.3,168.6 362.2,169 362.2,169.5 362.1,170 362.1,170.5 362,171 362,171.5 362,172" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="11.2" y="181.9" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="233.2" y="180.8" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="78.4" y="37.1" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="142" y="189" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <text x="47" y="93.2" font-size="13" text-anchor="middle" fill="currentColor">E</text>
  <text x="250.3" y="182.3" font-size="13" text-anchor="middle" fill="currentColor">A′</text>
  <text x="394.2" y="181.1" font-size="13" text-anchor="middle" fill="currentColor">B′</text>
  <text x="294.4" y="88.3" font-size="13" text-anchor="middle" fill="currentColor">C′</text>
</svg>
</div>

*Proof.* Let $\angle A = \angle A'$ and $\angle B = \angle B'$. By renaming the triangles if needed, assume
$A'B' \le AB$. Mark $D$ on side $AB$ with $AD = A'B'$, and draw through $D$ the parallel to $BC$, meeting $AC$ at $E$.

- $\angle ADE = \angle ABC$ (corresponding angles at the parallels $DE$ and $BC$), and $\angle ABC = \angle A'B'C'$.
- So triangles $ADE$ and $A'B'C'$ have $\angle A = \angle A'$, $AD = A'B'$ and $\angle ADE = \angle A'B'C'$. By ASA
  ([Chapter 2](02-Triangles-and-Congruence.md)) they are congruent: $AE = A'C'$ and $DE = B'C'$.
- By the intercept theorem, $AD/AB = AE/AC = DE/BC$. Replacing each length by its equal,

$$\frac{A'B'}{AB} = \frac{A'C'}{AC} = \frac{B'C'}{BC}.$$

The sides are in proportion and the angles are equal, so the triangles are similar. $\blacksquare$

**Theorem (SAS similarity).** If $\angle A = \angle A'$ and $A'B'/AB = A'C'/AC$, the triangles are similar.

*Proof.* Again assume $A'B' \le AB$. Mark $D$ on $AB$ with $AD = A'B'$ and $E$ on $AC$ with $AE = A'C'$. Then
$AD/AB = AE/AC$, so by the converse of the intercept theorem $DE \parallel BC$. Triangle $ADE$ is congruent to
$A'B'C'$ by SAS (two sides and the angle between them). And triangle $ADE$ has the same angles as $ABC$ (the angle at
$A$ is shared, and the parallels give $\angle ADE = \angle ABC$), so by AA it is similar to $ABC$. A triangle
congruent to one similar to $ABC$ is similar to $ABC$. $\blacksquare$

**Theorem (SSS similarity).** If $A'B'/AB = B'C'/BC = C'A'/CA$, the triangles are similar.

*Proof.* Call the common ratio $k$ and assume $k \le 1$. Mark $D$ on $AB$ with $AD = A'B' = k\,AB$ and draw the
parallel to $BC$ through $D$, meeting $AC$ at $E$. By the intercept theorem, $AE = k\,AC = A'C'$ and
$DE = k\,BC = B'C'$. So triangle $ADE$ has the same three sides as $A'B'C'$, and by SSS they are congruent. Since
$ADE$ has the same angles as $ABC$, so does $A'B'C'$. $\blacksquare$

Each test mirrors a congruence test with "equal sides" replaced by "sides in the same ratio". There is no "ASA
similarity" separate from AA, because the side in ASA plays no part once only the shape matters. And just as SSA is
not a congruence test, "SSA similarity" fails as well.

**Worked example (similar triangles inside a figure).** Two segments $AC$ and $BD$ cross at $P$, with $AB \parallel DC$,
$AB = 6$, $DC = 10$ and $AP = 4.5$. Find $PC$.

- $\angle PAB = \angle PCD$ (alternate angles at the parallels), and $\angle APB = \angle CPD$ (vertical angles).
- By AA, $\triangle PAB \sim \triangle PCD$, with ratio $DC/AB = 10/6 = 5/3$.
- So $PC = \tfrac53 \times AP = \tfrac53 \times 4.5 = 7.5$.

Check: $AP/PC = 4.5/7.5 = 0.6 = 6/10 = AB/DC$.

**Worked example (a ramp).** A wheelchair ramp rises 0.5 m over a horizontal run of 6 m. A support post stands
2.4 m (horizontally) from the bottom of the ramp. How tall must it be?

The post, the ground and the ramp make a small right triangle that shares the angle at the bottom with the whole
ramp's triangle. By AA they are similar, with ratio $2.4/6 = 0.4$, so the post is $0.4 \times 0.5 = 0.2$ m tall.

## 5.3 Areas and volumes

A pizza 30 cm across costs twice as much as one 20 cm across. Which is the better deal? The diameter grew by a factor
of $1.5$, but the amount of pizza grew by $1.5^2 = 2.25$, so the big one gives 2.25 times the pizza for 2 times the
price. Areas do not scale like lengths.

**Theorem (area scaling).** If two figures are similar with scale factor $k$, their areas are in the ratio $k^2$.

*Proof for triangles.* Take $\triangle ABC \sim \triangle A'B'C'$ with ratio $k$. Let $h$ be the height from $C$ to
line $AB$, with foot $H$. The dilation part of the similarity sends $H$ to a point $H'$ on line $A'B'$, and it keeps
the right angle at $H$, so $C'H'$ is the height of the image, of length $kh$. The base is $k \cdot AB$. So

$$[A'B'C'] = \tfrac12 \cdot (k\,AB) \cdot (k\,h) = k^2 \cdot \tfrac12\, AB \cdot h = k^2\,[ABC].$$

*For polygons:* cut the polygon into triangles by diagonals; the similarity sends this cutting to a cutting of the
image into triangles, each $k^2$ times as large; add.

*For curved figures:* cover the figure by a fine grid of small squares. Each square of side $s$ becomes a square of
side $ks$, with $k^2$ times the area. The area of a curved figure is the limit of the areas of the grid squares inside
it as the grid gets finer ([Chapter 4](04-Area-and-Pythagoras.md)), so its area is multiplied by $k^2$ as well.
$\blacksquare$

**Volumes.** The same argument in three dimensions, with small cubes in place of squares: a cube of side $s$ becomes a
cube of side $ks$, made of $k^3$ copies of the old one when $k$ is a whole number, and of volume $k^3 s^3$ in any case.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="Left: a cube of side 1. Right: a cube of side 2 built from 8 unit cubes; each face is made of 4 unit squares">
  <polygon points="40,170 85,170 85,125 40,125" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="40,125 85,125 105.2,109.2 60.2,109.2" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="85,170 105.2,154.2 105.2,109.2 85,125" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="213.2,154.2 258.2,154.2 258.2,109.2 213.2,109.2" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="213.2,109.2 258.2,109.2 278.5,93.5 233.5,93.5" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="258.2,154.2 278.5,138.5 278.5,93.5 258.2,109.2" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="258.2,154.2 303.2,154.2 303.2,109.2 258.2,109.2" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="258.2,109.2 303.2,109.2 323.5,93.5 278.5,93.5" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="303.2,154.2 323.5,138.5 323.5,93.5 303.2,109.2" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="213.2,109.2 258.2,109.2 258.2,64.2 213.2,64.2" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="213.2,64.2 258.2,64.2 278.5,48.5 233.5,48.5" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="258.2,109.2 278.5,93.5 278.5,48.5 258.2,64.2" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="258.2,109.2 303.2,109.2 303.2,64.2 258.2,64.2" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="258.2,64.2 303.2,64.2 323.5,48.5 278.5,48.5" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="303.2,109.2 323.5,93.5 323.5,48.5 303.2,64.2" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="193,170 238,170 238,125 193,125" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="193,125 238,125 258.2,109.2 213.2,109.2" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,170 258.2,154.2 258.2,109.2 238,125" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,170 283,170 283,125 238,125" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,125 283,125 303.2,109.2 258.2,109.2" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="283,170 303.2,154.2 303.2,109.2 283,125" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="193,125 238,125 238,80 193,80" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="193,80 238,80 258.2,64.2 213.2,64.2" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,125 258.2,109.2 258.2,64.2 238,80" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,125 283,125 283,80 238,80" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,80 283,80 303.2,64.2 258.2,64.2" fill="#9cc9ea" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="283,125 303.2,109.2 303.2,64.2 283,80" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="1.2"/>
  <text x="71.5" y="192" font-size="12" text-anchor="middle" fill="currentColor">side 1</text>
  <text x="71.5" y="207" font-size="12" text-anchor="middle" fill="currentColor">volume 1</text>
  <text x="247" y="192" font-size="12" text-anchor="middle" fill="currentColor">side 2: each face 4, volume 8</text>
  <text x="247" y="207" font-size="12" text-anchor="middle" fill="currentColor">(k = 2: areas × 4, volumes × 8)</text>
</svg>
</div>

| scale factor $k$ | lengths | areas | volumes |
|---|---|---|---|
| 2 | $\times 2$ | $\times 4$ | $\times 8$ |
| 3 | $\times 3$ | $\times 9$ | $\times 27$ |
| 10 | $\times 10$ | $\times 100$ | $\times 1000$ |
| $\tfrac12$ | $\times \tfrac12$ | $\times \tfrac14$ | $\times \tfrac18$ |

**Worked example (a statue).** A sculptor makes a 1 : 10 model of a bronze statue. The model has a mass of 3 kg and
needed 0.2 litres of varnish to coat. If the full statue is solid bronze like the model, what are its mass and the
varnish it needs?

- Mass goes with volume: $3 \times 10^3 = 3000$ kg.
- Varnish goes with surface area: $0.2 \times 10^2 = 20$ litres.

The statue is a thousand times heavier but needs only a hundred times the varnish.

### The square-cube law

Galileo set out this argument in his *Two New Sciences* (1638), and J. B. S. Haldane made it famous in his 1926
essay "On Being the Right Size". Scale an animal up by a factor $k$, keeping its shape and its materials.

- Its **weight** is proportional to its volume: it grows by $k^3$.
- The **strength** of a bone, how much load it carries before it breaks, is proportional to the area of its cross
  section: it grows by $k^2$.
- So the **stress** on the bone, load per unit of cross section, grows by $k^3/k^2 = k$.

A giant ten times as tall as a person, built exactly like one, would put ten times the stress on every bone. Human
leg bones are strong, but not ten times stronger than they need to be; the giant would break its thighs at its first
step. That is why large animals are not scaled-up small ones: an elephant's legs are far thicker for its length than
a gazelle's, and the largest animals of all, whales, let the water carry their weight.

The same law works the other way for heat and for falling. Heat leaves a body through its skin (area, $k^2$) but is
made by its whole volume ($k^3$), so a mouse loses heat fast for its size and must eat constantly. A falling mouse
meets air resistance in proportion to its area but is pulled down in proportion to its volume, which is why Haldane
could write that a mouse dropped down a mine shaft walks away.

**A Mars aside.** On Mars the surface gravity is about 0.38 of Earth's (3.7 metres per second per second against
9.8). Weight is mass times gravity, so on Mars every bone carries 0.38 of its Earth load. The stress in a scaled
animal is proportional to $k \times g$; to keep it at the Earth value we need

$$k \times 0.38 = 1, \qquad k \approx 2.6 .$$

So the square-cube law alone would allow a body about 2.6 times as tall to stand on Mars as safely as a person
stands on Earth. That is a statement about bones under a static load and nothing more: muscles, hearts and lungs
scale differently, and a real body is not a scaled copy of another. But it shows how a single exponent decides
questions that look like biology.

**Worked example.** The surface area of a sphere is proportional to $r^2$ and its volume to $r^3$. A raindrop of
radius 1 mm and one of radius 2 mm: the bigger one has $2^2 = 4$ times the surface and $2^3 = 8$ times the water, so
half as much surface **per litre**. Small things are mostly surface; big things are mostly inside.

## 5.4 The geometric mean and the altitude theorem

The **arithmetic mean** of two positive numbers $a$ and $b$ is $(a+b)/2$, the number halfway between them. The
**geometric mean** is $\sqrt{ab}$: the side of the square with the same area as the rectangle $a \times b$. For 4
and 9 the arithmetic mean is 6.5 and the geometric mean is $\sqrt{36} = 6$. The geometric mean is the right average
for things that multiply: if an investment grows by a factor 4 one year and 9 the next, the steady factor that gives
the same result after two years is 6, not 6.5. Another way to say it: $g = \sqrt{ab}$ is the number with

$$\frac{a}{g} = \frac{g}{b},$$

"$a$ is to $g$ as $g$ is to $b$". The Greeks called $g$ the **mean proportional** between $a$ and $b$, and they
found it inside every right triangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 235" role="img" aria-label="A right triangle ABC inscribed in a semicircle on diameter AB with centre O. The altitude CH to the hypotenuse has length h and cuts AB into AH equals p and HB equals q; the dashed radius OC is at least as long as h">
  <polyline points="373,200 372.5,187.3 371,174.6 368.5,162.1 365,149.8 360.6,137.8 355.3,126.2 349.1,115.1 342,104.5 334.1,94.5 325.4,85.1 316,76.4 306,68.5 295.4,61.4 284.3,55.2 272.7,49.9 260.7,45.5 248.4,42 235.9,39.5 223.2,38 210.5,37.5 197.8,38 185.1,39.5 172.6,42 160.3,45.5 148.3,49.9 136.7,55.2 125.6,61.4 115,68.5 105,76.4 95.6,85.1 86.9,94.5 79,104.5 71.9,115.1 65.7,126.2 60.4,137.8 56,149.8 52.5,162.1 50,174.6 48.5,187.3 48,200" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <polygon points="48,200 148,200 148,50" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="148,200 373,200 148,50" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210.5" y1="200" x2="148" y2="50" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/>
  <polyline points="163,200 163,185 148,185" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="139.7,62.5 152.2,70.8 160.5,58.3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="48" cy="200" r="2.5" fill="currentColor"/>
  <circle cx="373" cy="200" r="2.5" fill="currentColor"/>
  <circle cx="148" cy="200" r="2.5" fill="currentColor"/>
  <circle cx="148" cy="50" r="2.5" fill="currentColor"/>
  <circle cx="210.5" cy="200" r="2.5" fill="currentColor"/>
  <text x="38" y="205" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="383" y="205" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="148" y="217" font-size="13" text-anchor="middle" fill="currentColor">H</text>
  <text x="210.5" y="217" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="148" y="41" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="98" y="217" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">p</text>
  <text x="283" y="217" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">q</text>
  <text x="139" y="125" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">h</text>
  <text x="88" y="121" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">b</text>
  <text x="269.5" y="119" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">a</text>
  <text x="410" y="22" font-size="12" text-anchor="end" fill="currentColor">h² = pq,  b² = cp,  a² = cq</text>
</svg>
</div>

Let $ABC$ have a right angle at $C$. Drop the perpendicular from $C$ to the hypotenuse $AB$, with foot $H$. Write
$a = BC$, $b = AC$, $c = AB$, $h = CH$, $p = AH$, $q = HB$, so $p + q = c$.

**Lemma.** The altitude cuts the right triangle into two triangles similar to it and to each other:
$\triangle ACB \sim \triangle AHC \sim \triangle CHB$.

*Proof.* Triangles $AHC$ and $ACB$ share the angle at $A$ and both have a right angle (at $H$ and at $C$), so they
are similar by AA. In the same way $CHB$ and $ACB$ share the angle at $B$ and have a right angle. Two triangles
similar to a third are similar to each other. Matching the vertices: in $AHC$ the right angle is at $H$, the angle
equal to $\angle A$ is at $A$, so the remaining angle at $C$ equals $\angle B$. $\blacksquare$

**Theorem (altitude theorem).** $h^2 = pq$: the altitude is the geometric mean of the two pieces of the hypotenuse.

*Proof.* From $\triangle AHC \sim \triangle CHB$, matching $A \to C$, $H \to H$, $C \to B$ (angles $\angle A$, right
angle, $\angle B$ in each), the ratio of short leg to long leg agrees:

$$\frac{AH}{CH} = \frac{CH}{HB}, \qquad \frac{p}{h} = \frac{h}{q}, \qquad h^2 = pq. \qquad \blacksquare$$

**Theorem (leg theorem).** $b^2 = cp$ and $a^2 = cq$: each leg is the geometric mean of the hypotenuse and the piece
of the hypotenuse next to it.

*Proof.* From $\triangle AHC \sim \triangle ACB$: $AH/AC = AC/AB$, so $p/b = b/c$ and $b^2 = cp$. The other is the
same with $B$ in place of $A$. $\blacksquare$

Add the two equations of the leg theorem:

$$a^2 + b^2 = cq + cp = c(p + q) = c^2 .$$

That is Pythagoras' theorem again, with a proof that uses only similarity. It is one of the proofs in
[Chapter 4](04-Area-and-Pythagoras.md); here you can see where it comes from.

**Worked example.** The altitude to the hypotenuse of a right triangle cuts the hypotenuse into pieces $p = 4$ and
$q = 9$. Find the altitude and the legs.

- $h = \sqrt{4 \times 9} = 6$.
- $c = 13$, $b = \sqrt{13 \times 4} = \sqrt{52} = 2\sqrt{13} \approx 7.21$, $a = \sqrt{13 \times 9} = 3\sqrt{13} \approx 10.82$.

Check: $a^2 + b^2 = 117 + 52 = 169 = 13^2$. And the area two ways:
$\tfrac12 ab = \tfrac12 \cdot 3\sqrt{13} \cdot 2\sqrt{13} = 39$ and $\tfrac12 c h = \tfrac12 \cdot 13 \cdot 6 = 39$.

### Constructing a square root

The altitude theorem gives a construction, with compass and straightedge, of $\sqrt{n}$ for any length $n$. Lay off
$AH = 1$ and then $HB = n$ along a line. Draw the circle with diameter $AB$ (bisect $AB$ to find its centre, as in
[Chapter 2](02-Triangles-and-Congruence.md)). Raise the perpendicular to $AB$ at $H$; it meets the circle at $C$.
The angle $ACB$ is a right angle, because it stands on a diameter (Thales' theorem, proved in
[Chapter 6](06-Circles.md)). So $CH^2 = 1 \cdot n$ and $CH = \sqrt{n}$.

The construction is the first sign of something [Chapter 14](14-Constructions-and-Impossibility.md) proves in
full: a compass can take square roots, and nothing more exotic.

### The AM-GM inequality, by a picture

In the same figure the circle has radius $(p+q)/2$, the arithmetic mean of $p$ and $q$, and the half-chord $CH$ is
their geometric mean $\sqrt{pq}$. A half-chord can never be longer than a radius (the radius $OC$ is the hypotenuse
of the right triangle $OHC$). So

$$\sqrt{pq} \le \frac{p+q}{2},$$

with equality exactly when $H$ is the centre $O$, that is when $p = q$. This is the **AM-GM inequality** for two
numbers. Algebra proves it in one line, $(\sqrt p - \sqrt q)^2 \ge 0$; the picture shows why it is true.

**Worked example (the best rectangle).** Of all rectangles with perimeter 20, which has the greatest area? If the
sides are $p$ and $q$, then $p + q = 10$, and the area $pq$ satisfies $\sqrt{pq} \le 5$, so $pq \le 25$, with
equality only when $p = q = 5$. The square wins.

## 5.5 The golden ratio, honestly

Book VI of Euclid's *Elements* defines a way of cutting a segment that it calls cutting in **extreme and mean ratio**:
cut $AB$ at a point $P$ so that the whole is to the larger part as the larger part is to the smaller,

$$\frac{AB}{AP} = \frac{AP}{PB}.$$

Euclid needed it for one purpose: to construct the regular pentagon and, in Book XIII, the dodecahedron and
icosahedron. The name "golden section" is much later; it appears in German in the 1830s.

**Finding the ratio.** Let $AB = 1$ and $AP = x$, so $PB = 1 - x$. Then

$$\frac{1}{x} = \frac{x}{1-x}, \qquad x^2 = 1 - x, \qquad x^2 + x - 1 = 0, \qquad x = \frac{\sqrt5 - 1}{2} \approx 0.618 .$$

(The other root of the quadratic is negative.) The ratio $AB/AP$ is

$$\varphi = \frac{1}{x} = \frac{2}{\sqrt5 - 1} = \frac{1 + \sqrt5}{2} \approx 1.6180 .$$

This number $\varphi$ (the Greek letter phi) is the **golden ratio**. Because $x = 1/\varphi$ satisfies
$x^2 + x - 1 = 0$, dividing by $x^2$ shows $\varphi$ satisfies

$$\varphi^2 = \varphi + 1, \qquad \text{and so} \qquad \frac{1}{\varphi} = \varphi - 1 \approx 0.618 .$$

Square it and you add 1; take its reciprocal and you subtract 1. Since $\sqrt5$ is irrational, so is $\varphi$: the
two parts of a golden cut are incommensurable.

### Its real home: the regular pentagon

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="A regular pentagon ABCDE with all five diagonals drawn as a star. Diagonals AC and BD meet at P. Triangle ABP is shaded orange and triangle BPC blue; the angles of 36 degrees at A and C are marked">
  <polygon points="105.4,101 210,25 314.6,101 274.7,224 145.3,224" fill="#7ccf9a" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="105.4,101 210,25 234.7,101" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="210,25 234.7,101 314.6,101" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <line x1="105.4" y1="101" x2="314.6" y2="101" stroke="currentColor" stroke-width="1.1"/>
  <line x1="105.4" y1="101" x2="274.7" y2="224" stroke="currentColor" stroke-width="1.1"/>
  <line x1="210" y1="25" x2="274.7" y2="224" stroke="currentColor" stroke-width="1.1"/>
  <line x1="210" y1="25" x2="145.3" y2="224" stroke="currentColor" stroke-width="1.1"/>
  <line x1="314.6" y1="101" x2="145.3" y2="224" stroke="currentColor" stroke-width="1.1"/>
  <line x1="105.4" y1="101" x2="314.6" y2="101" stroke="currentColor" stroke-width="2"/>
  <line x1="210" y1="25" x2="274.7" y2="224" stroke="currentColor" stroke-width="2"/>
  <text x="94" y="101.8" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="210" y="17.6" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="326" y="101.8" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="281.7" y="238.3" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <text x="138.3" y="238.3" font-size="13" text-anchor="middle" fill="currentColor">E</text>
  <circle cx="234.7" cy="101" r="2.5" fill="currentColor"/>
  <circle cx="185.3" cy="101" r="2.5" fill="currentColor"/>
  <text x="244.7" y="115" font-size="13" text-anchor="middle" fill="currentColor">P</text>
  <text x="175.3" y="115" font-size="13" text-anchor="middle" fill="currentColor">Q</text>
  <polyline points="132.9,101 132.9,100.4 132.9,99.9 132.8,99.3 132.8,98.7 132.7,98.1 132.7,97.6 132.6,97 132.5,96.4 132.4,95.9 132.3,95.3 132.2,94.7 132,94.2 131.9,93.6 131.7,93.1 131.5,92.5 131.4,92 131.2,91.4 131,90.9 130.7,90.4 130.5,89.8 130.3,89.3 130,88.8 129.8,88.3 129.5,87.8 129.2,87.3 128.9,86.8 128.6,86.3 128.3,85.8 128,85.3 127.6,84.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="149.3" y="90.6" font-size="11" text-anchor="middle" fill="currentColor">36°</text>
  <polyline points="292.4,84.8 292,85.3 291.7,85.8 291.4,86.3 291.1,86.8 290.8,87.3 290.5,87.8 290.2,88.3 290,88.8 289.7,89.3 289.5,89.8 289.3,90.4 289,90.9 288.8,91.4 288.6,92 288.5,92.5 288.3,93.1 288.1,93.6 288,94.2 287.8,94.7 287.7,95.3 287.6,95.9 287.5,96.4 287.4,97 287.3,97.6 287.3,98.1 287.2,98.7 287.2,99.3 287.1,99.9 287.1,100.4 287.1,101" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="270.7" y="90.6" font-size="11" text-anchor="middle" fill="currentColor">36°</text>
</svg>
</div>

**Theorem.** In a regular pentagon, the ratio of a diagonal to a side is $\varphi$. Moreover two diagonals cut each
other in the golden ratio.

*Proof.* Let $ABCDE$ be a regular pentagon with side $s$ and diagonal $d$. Its angles are each $108°$ (the angle sum
of a pentagon is $540°$, [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)).

*Angles.* Triangle $ABC$ is isosceles ($AB = BC = s$) with apex angle $108°$, so its base angles are
$(180° - 108°)/2 = 36°$: $\angle BAC = \angle BCA = 36°$. The same holds for triangle $BCD$: $\angle CBD = 36°$.

Let the diagonals $AC$ and $BD$ meet at $P$.

*Triangle $BPC$.* Its angles at $B$ and $C$ are $\angle PBC = \angle DBC = 36°$ and $\angle PCB = \angle ACB = 36°$.
So it is isosceles with $PB = PC$, and its third angle is $108°$.

*Triangle $ABP$.* $\angle BAP = \angle BAC = 36°$, and $\angle ABP = \angle ABC - \angle PBC = 108° - 36° = 72°$, so
$\angle APB = 180° - 36° - 72° = 72°$. Two equal angles: $AP = AB = s$.

*Similarity.* Triangles $ABC$ (angles $36°, 108°, 36°$) and $BPC$ (angles $36°, 108°, 36°$) are similar by AA. In
$ABC$ the base is $AC = d$ and the legs are $s$; in $BPC$ the base is $BC = s$ and the legs are $PC = AC - AP = d - s$.
So

$$\frac{d}{s} = \frac{s}{d - s}.$$

Write $r = d/s$. Dividing top and bottom of the right side by $s$ gives $r = 1/(r - 1)$, so $r^2 - r - 1 = 0$ and
$r = \varphi$ (the positive root). And $AC/AP = d/s = \varphi$, $AP/PC = s/(d - s) = \varphi$: the point $P$ cuts the
diagonal $AC$ in extreme and mean ratio. $\blacksquare$

**A bonus: the cosine of 36 degrees.** Drop the perpendicular from $B$ to $AC$ in triangle $ABC$; it bisects $AC$
(the triangle is isosceles), so $d/2 = s \cos 36°$ (you will meet cosine properly in
[Chapter 7](07-Trigonometry.md)). Hence

$$\cos 36° = \frac{d}{2s} = \frac{\varphi}{2} = \frac{1 + \sqrt5}{4} \approx 0.8090 .$$

### The golden rectangle and Fibonacci

A **golden rectangle** has sides in ratio $\varphi : 1$. Cut off a square of side 1 and what remains is a rectangle
$1$ by $\varphi - 1 = 1/\varphi$, with sides in ratio $1 : 1/\varphi = \varphi : 1$, a smaller golden rectangle. The
golden rectangle is the only rectangle with this property: if removing a square from a $r \times 1$ rectangle
($r > 1$) leaves a similar one, then $r/1 = 1/(r-1)$, which is the golden equation again.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 250" role="img" aria-label="A golden rectangle of sides phi and 1, divided into a square and a smaller golden rectangle, again and again; quarter circles in the squares trace an approximate spiral">
  <polygon points="38,225 238,225 238,25 38,25" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,148.6 361.6,148.6 361.6,25 238,25" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="285.2,225 361.6,225 361.6,148.6 285.2,148.6" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,225 285.2,225 285.2,177.8 238,177.8" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="238,177.8 267.2,177.8 267.2,148.6 238,148.6" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="267.2,166.6 285.2,166.6 285.2,148.6 267.2,148.6" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="274.1,177.8 285.2,177.8 285.2,166.6 274.1,166.6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="267.2,177.8 274.1,177.8 274.1,170.9 267.2,170.9" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="38,225 38.2,217.1 38.6,209.3 39.4,201.5 40.5,193.7 41.8,186 43.5,178.3 45.5,170.7 47.8,163.2 50.4,155.8 53.2,148.5 56.4,141.3 59.8,134.2 63.5,127.3 67.5,120.5 71.7,113.9 76.2,107.4 80.9,101.2 85.9,95.1 91.1,89.2 96.6,83.6 102.2,78.1 108.1,72.9 114.2,67.9 120.4,63.2 126.9,58.7 133.5,54.5 140.3,50.5 147.2,46.8 154.3,43.4 161.5,40.2 168.8,37.4 176.2,34.8 183.7,32.5 191.3,30.5 199,28.8 206.7,27.5 214.5,26.4 222.3,25.6 230.1,25.2 238,25" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="238,25 242.9,25.1 247.7,25.4 252.5,25.9 257.3,26.5 262.1,27.4 266.9,28.4 271.6,29.6 276.2,31 280.8,32.6 285.3,34.4 289.7,36.4 294.1,38.5 298.4,40.8 302.6,43.2 306.7,45.8 310.7,48.6 314.5,51.5 318.3,54.6 321.9,57.8 325.4,61.2 328.8,64.7 332,68.3 335.1,72.1 338,76 340.8,79.9 343.4,84 345.8,88.2 348.1,92.5 350.3,96.9 352.2,101.3 354,105.8 355.6,110.4 357,115.1 358.2,119.8 359.2,124.5 360.1,129.3 360.8,134.1 361.2,138.9 361.5,143.8 361.6,148.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="361.6,148.6 361.5,151.6 361.4,154.6 361.1,157.6 360.7,160.6 360.1,163.5 359.5,166.4 358.7,169.3 357.9,172.2 356.9,175 355.8,177.8 354.6,180.6 353.3,183.3 351.9,185.9 350.3,188.5 348.7,191 347,193.5 345.2,195.9 343.3,198.2 341.3,200.5 339.2,202.6 337.1,204.7 334.8,206.7 332.5,208.6 330.1,210.4 327.7,212.1 325.1,213.7 322.5,215.3 319.9,216.7 317.2,218 314.4,219.2 311.7,220.3 308.8,221.3 305.9,222.1 303,222.9 300.1,223.5 297.2,224.1 294.2,224.5 291.2,224.8 288.2,224.9 285.2,225" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="285.2,225 283.4,225 281.5,224.9 279.7,224.7 277.8,224.4 276,224.1 274.2,223.7 272.4,223.2 270.6,222.7 268.9,222.1 267.1,221.4 265.4,220.7 263.8,219.9 262.1,219 260.5,218 259,217 257.5,216 256,214.9 254.6,213.7 253.2,212.5 251.8,211.2 250.5,209.8 249.3,208.4 248.1,207 247,205.5 246,204 245,202.5 244,200.9 243.1,199.2 242.3,197.6 241.6,195.9 240.9,194.1 240.3,192.4 239.8,190.6 239.3,188.8 238.9,187 238.6,185.2 238.3,183.3 238.1,181.5 238,179.6 238,177.8" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="238,177.8 238,176.6 238.1,175.5 238.2,174.4 238.4,173.2 238.6,172.1 238.8,171 239.1,169.9 239.4,168.8 239.8,167.7 240.2,166.6 240.7,165.6 241.2,164.5 241.7,163.5 242.3,162.5 242.9,161.6 243.6,160.6 244.3,159.7 245,158.8 245.8,158 246.5,157.2 247.4,156.4 248.2,155.6 249.1,154.9 250,154.2 251,153.5 251.9,152.9 252.9,152.3 253.9,151.8 255,151.3 256,150.8 257.1,150.4 258.2,150 259.3,149.7 260.4,149.4 261.5,149.2 262.6,149 263.7,148.8 264.9,148.7 266,148.6 267.2,148.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="267.2,148.6 267.9,148.6 268.6,148.7 269.3,148.7 270,148.8 270.7,149 271.4,149.1 272.1,149.3 272.8,149.5 273.4,149.7 274.1,150 274.7,150.3 275.4,150.6 276,150.9 276.6,151.3 277.2,151.6 277.8,152.1 278.3,152.5 278.9,152.9 279.4,153.4 279.9,153.9 280.4,154.4 280.9,154.9 281.3,155.5 281.8,156 282.2,156.6 282.6,157.2 282.9,157.8 283.2,158.5 283.6,159.1 283.8,159.7 284.1,160.4 284.3,161.1 284.5,161.7 284.7,162.4 284.9,163.1 285,163.8 285.1,164.5 285.2,165.2 285.2,165.9 285.2,166.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="285.2,166.6 285.2,167.1 285.2,167.5 285.1,168 285.1,168.4 285,168.8 284.9,169.2 284.8,169.7 284.7,170.1 284.5,170.5 284.4,170.9 284.2,171.3 284,171.7 283.8,172.1 283.6,172.5 283.3,172.8 283.1,173.2 282.8,173.5 282.5,173.9 282.3,174.2 281.9,174.5 281.6,174.8 281.3,175.1 281,175.4 280.6,175.7 280.3,175.9 279.9,176.1 279.5,176.4 279.1,176.6 278.7,176.8 278.3,176.9 277.9,177.1 277.5,177.2 277.1,177.4 276.7,177.5 276.2,177.6 275.8,177.6 275.4,177.7 274.9,177.8 274.5,177.8 274.1,177.8" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="274.1,177.8 273.8,177.8 273.5,177.8 273.3,177.7 273,177.7 272.7,177.7 272.5,177.6 272.2,177.5 271.9,177.4 271.7,177.4 271.4,177.3 271.2,177.2 270.9,177 270.7,176.9 270.5,176.8 270.2,176.6 270,176.5 269.8,176.3 269.6,176.1 269.4,176 269.2,175.8 269,175.6 268.8,175.4 268.7,175.2 268.5,174.9 268.3,174.7 268.2,174.5 268.1,174.3 267.9,174 267.8,173.8 267.7,173.5 267.6,173.3 267.5,173 267.4,172.8 267.4,172.5 267.3,172.2 267.3,172 267.2,171.7 267.2,171.4 267.2,171.2 267.2,170.9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="138" y="19" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="299.8" y="19" font-size="12" text-anchor="middle" fill="currentColor">φ − 1 = 1/φ</text>
  <text x="26" y="125" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="199.8" y="242" font-size="13" text-anchor="middle" fill="currentColor">φ</text>
</svg>
</div>

The **Fibonacci numbers** $1, 1, 2, 3, 5, 8, 13, 21, 34, \ldots$ (each the sum of the two before) have ratios
$2/1, 3/2, 5/3, 8/5, 13/8, \ldots = 2, 1.5, 1.667, 1.6, 1.625, \ldots$ that close in on $\varphi$. Using
$\varphi^2 = \varphi + 1$ repeatedly gives $\varphi^n = F_n \varphi + F_{n-1}$, where $F_n$ is the $n$-th Fibonacci
number; the [Algebra book](../algebra/08-Sequences-Series-and-Induction.md) proves Binet's formula, which explains
why the ratios converge.

**Try it in Python.**

```python
phi = (1 + 5 ** 0.5) / 2
a, b = 1, 1
for n in range(10):
    a, b = b, a + b
    print(b, a, b / a, b / a - phi)
```

The error shrinks by a factor of about $\varphi^2 \approx 2.6$ each step, and changes sign every time.

### What is true and what is not

The golden ratio is real mathematics: it is in the pentagon and the pentagram, in the coordinates of the
icosahedron and dodecahedron ([Chapter 11](11-Solid-Geometry.md)), in Penrose's aperiodic tilings, and, through the
"golden angle" $360°/\varphi^2 \approx 137.5°$, in models of how some plants place successive leaves and seeds. Many
popular claims, however, do not survive measurement.

- **The Parthenon.** There is no ancient record that its builders used $\varphi$, and the "golden rectangles" drawn
  over photographs depend on which edges one chooses to measure; with different choices the ratios differ.
- **The Mona Lisa and other paintings.** Rectangles drawn on paintings can be made to fit almost any ratio near 1.6.
  There is no evidence Leonardo planned one.
- **The human body.** Ratios such as height to navel height vary from person to person and cluster around 1.6 only
  loosely; 1.6 is not 1.618.
- **The nautilus shell.** It is a logarithmic spiral, but measured shells grow at rates different from the "golden
  spiral".
- **"The most beautiful rectangle."** Experiments asking people to pick their favourite rectangle, from Fechner in the
  1870s onward, have given mixed results that depend strongly on how the question is asked.

George Markowsky's 1992 article listed in the Further reading checks many of these claims. The lesson is a general one: a ratio of
about 1.6 between two lengths you chose after the fact is evidence of nothing.

## A short history

Similarity is one of the oldest ideas in geometry. Babylonian scribes and Egyptian builders used proportional
triangles to compute heights and slopes long before anyone proved anything. The proofs came with the Greeks. When the
Pythagoreans found that the diagonal and side of a square have no common measure, the simple theory of ratios as
fractions broke; Eudoxus of Cnidus (fourth century BCE) built a theory of ratio that works for any magnitudes, and
Euclid set it out in Book V of the *Elements*, then used it in Book VI for similar figures, including the intercept
theorem (VI.2), the similarity tests (VI.4 to VI.7), the mean proportional (VI.13) and the extreme and mean ratio
(VI.30). Our proofs replace Eudoxus' theory with real numbers and areas, which is how modern courses do it; the full
treatment of length and area as real numbers belongs to analysis.

## Check yourself

??? question "1. A map has scale 1 : 50 000. Two towns are 7.2 cm apart on the map. How far apart are they, and how large is a lake that covers 3 square centimetres of the map?"

    Distance: $7.2 \times 50\,000 = 360\,000$ cm $= 3.6$ km.
    Area scales by the square of the factor: $3 \times 50\,000^2 = 7.5 \times 10^9$ square cm. One square kilometre is
    $10^5 \times 10^5 = 10^{10}$ square cm, so the lake covers $0.75$ square km.

??? question "2. A 2 m pole casts a 3 m shadow at the same moment that a building casts a 27 m shadow. How tall is the building?"

    The sun's rays are parallel, so the two right triangles have equal angles and are similar (AA).
    $h/27 = 2/3$, so $h = 18$ m. Check: $18/27 = 2/3$.

??? question "3. In triangle $ABC$, $DE \parallel BC$ with $D$ on $AB$ and $E$ on $AC$. If $AD = 4$, $DB = 6$, $AE = 5$ and $BC = 15$, find $EC$ and $DE$."

    $AD/AB = 4/10 = 0.4$. By the intercept theorem $AE/AC = 0.4$, so $AC = 12.5$ and $EC = 7.5$; and
    $DE = 0.4 \times 15 = 6$. Check: $AD/DB = 4/6$ and $AE/EC = 5/7.5$, both $2/3$.

??? question "4. Are triangles with sides 6, 8, 10 and 9, 12, 15 similar? What is the ratio of their areas? Check with the actual areas."

    $9/6 = 12/8 = 15/10 = 1.5$, so they are similar by SSS. The area ratio is $1.5^2 = 2.25$.
    Both are right triangles ($6^2 + 8^2 = 10^2$), with areas $\tfrac12 \cdot 6 \cdot 8 = 24$ and $\tfrac12 \cdot 9 \cdot 12 = 54$,
    and $54/24 = 2.25$.

??? question "5. Prove the midpoint theorem: the segment joining the midpoints $M$ of $AB$ and $N$ of $AC$ is parallel to $BC$ and half as long."

    $AM/AB = AN/AC = 1/2$ and the triangles $AMN$ and $ABC$ share the angle $A$, so they are similar by SAS with ratio
    $1/2$. Hence $MN = BC/2$. Corresponding angles are equal, $\angle AMN = \angle ABC$, so $MN \parallel BC$
    (equal corresponding angles give parallel lines, Chapter 3). Or use the converse of the intercept theorem directly.

??? question "6. A 1 : 20 model of a sculpture has a mass of 1.5 kg and a surface area of 900 square cm. What are the mass and surface area of the full-size solid sculpture made of the same material?"

    Mass (volume): $1.5 \times 20^3 = 12\,000$ kg. Surface: $900 \times 20^2 = 360\,000$ square cm $= 36$ square metres.

??? question "7. In a right triangle the altitude to the hypotenuse cuts it into pieces 2 and 8. Find the altitude, the two legs, and check with Pythagoras."

    $h = \sqrt{2 \cdot 8} = 4$. The hypotenuse is 10. Legs: $\sqrt{10 \cdot 2} = 2\sqrt5 \approx 4.47$ and
    $\sqrt{10 \cdot 8} = 4\sqrt5 \approx 8.94$. Check: $20 + 80 = 100 = 10^2$, and the area is
    $\tfrac12 \cdot 2\sqrt5 \cdot 4\sqrt5 = 20 = \tfrac12 \cdot 10 \cdot 4$.

??? question "8. Trapezoid $ABCD$ has $AB \parallel CD$, $AB = 8$, $CD = 12$; its diagonals meet at $P$. If $AC = 15$, find $AP$. Prove your method."

    $\angle PAB = \angle PCD$ and $\angle PBA = \angle PDC$ (alternate angles at the parallels), so $\triangle PAB \sim \triangle PCD$
    by AA, with $AP/PC = AB/CD = 8/12 = 2/3$. So $AP = \tfrac25 \cdot 15 = 6$ and $PC = 9$.
    In general the diagonals of a trapezoid cut each other in the ratio of the parallel sides.

??? question "9. A regular pentagon has side 10 cm. How long is its diagonal? The diagonal $AC$ is crossed by the two diagonals $BD$ and $BE$. How long are the three pieces they cut it into?"

    The diagonal is $10\varphi \approx 16.18$ cm. By 5.5, the diagonal $AC$ is cut at $P$ (by $BD$) with $AP = s = 10$ and
    $PC = d - s = 6.18$. The reflection of the pentagon in the line through $B$ and the centre swaps $A$ with $C$ and $E$ with $D$, so $BE$ cuts $AC$ at a point $Q$ with $QC = AP = 10$
    and $AQ = 6.18$. So the pieces are $AQ = 6.18$, $QP = 10 - 6.18 = 3.82$, $PC = 6.18$
    (that is, $10/\varphi$, $10/\varphi^2$, $10/\varphi$, adding up to $10\varphi$).

??? question "10. Show that $\varphi^n = F_n\varphi + F_{n-1}$ for $n = 2, 3, 4, 5$ (with $F_1 = F_2 = 1$, $F_0 = 0$), and use it to compute $\varphi^5$."

    $\varphi^2 = \varphi + 1 = F_2\varphi + F_1$. Multiply by $\varphi$: $\varphi^3 = \varphi^2 + \varphi = 2\varphi + 1$,
    $\varphi^4 = 2\varphi^2 + \varphi = 3\varphi + 2$, $\varphi^5 = 3\varphi^2 + 2\varphi = 5\varphi + 3$. Each step sends
    $F_n\varphi + F_{n-1}$ to $F_n(\varphi + 1) + F_{n-1}\varphi = (F_n + F_{n-1})\varphi + F_n$, which is the induction step.
    $\varphi^5 = 5(1.6180) + 3 \approx 11.090$. Check: $1.6180^5 \approx 11.090$.

??? question "11. (Angle bisector theorem.) The bisector of angle $A$ in triangle $ABC$ meets $BC$ at $D$. Prove $BD/DC = AB/AC$, and find $BD$ when $AB = 6$, $AC = 9$, $BC = 10$."

    Through $C$ draw the parallel to $AD$; it meets line $BA$ (extended beyond $A$) at $E$. Then $\angle AEC = \angle BAD$
    (corresponding angles) and $\angle ACE = \angle DAC$ (alternate angles). The bisector makes $\angle BAD = \angle DAC$, so
    triangle $AEC$ has two equal angles and $AE = AC$. In triangle $BEC$, $AD \parallel EC$, so by the intercept theorem
    $BD/DC = BA/AE = AB/AC$. With the numbers: $BD/DC = 6/9 = 2/3$ and $BD + DC = 10$, so $BD = 4$ and $DC = 6$.

??? question "12. On Mars ($g$ about 0.38 of Earth's), by what factor could a body be scaled up and keep the same static stress in its bones as a person on Earth? And on the Moon ($g$ about 0.165 of Earth's)?"

    Stress is proportional to $k \cdot g$. Setting $k \cdot 0.38 = 1$ gives $k \approx 2.6$; on the Moon $k = 1/0.165 \approx 6.1$.
    (Only bones under a static load: a real design problem has many other constraints.)

## What you learned

- A dilation with factor $k$ multiplies every distance by $k$, sends lines to parallel lines and keeps angles;
  similar figures differ by a dilation and a rigid motion.
- The intercept theorem (a parallel cuts two sides in the same ratio) has an area proof that works for all lengths,
  rational or not; its converse also holds.
- For triangles, AA, SAS and SSS each prove similarity, and each follows from the intercept theorem plus a
  congruence test.
- Under scaling by $k$, areas change by $k^2$ and volumes by $k^3$; the square-cube law limits the size of animals and
  structures, and Mars's lower gravity loosens the limit by about 2.6.
- The altitude to the hypotenuse is the geometric mean of the pieces it cuts ($h^2 = pq$); this gives Pythagoras, a
  construction of $\sqrt n$ and a picture proof of AM-GM.
- The golden ratio $\varphi = (1+\sqrt5)/2$, with $\varphi^2 = \varphi + 1$, is the diagonal-to-side ratio of the regular
  pentagon; many popular claims about it in art and nature are not supported by evidence.

**Next:** [Chapter 6](06-Circles.md) studies the circle: inscribed angles, tangents, the power of a point, and how
Archimedes trapped $\pi$.

## Further reading

- Euclid, *Elements*, Books V and VI (T. L. Heath's translation and commentary, *The Thirteen Books of Euclid's
  Elements*, 1908, 2nd edition 1926).
- R. Hartshorne, *Geometry: Euclid and Beyond*, 2000 (how to put Euclid's theory of proportion on a modern footing).
- H. S. M. Coxeter and S. L. Greitzer, *Geometry Revisited*, 1967.
- Galileo Galilei, *Dialogues Concerning Two New Sciences*, 1638 (the scaling of bones, Second Day).
- J. B. S. Haldane, "On Being the Right Size", 1926 (in *Possible Worlds and Other Essays*, 1927).
- D. W. Thompson, *On Growth and Form*, 1917.
- G. Markowsky, "Misconceptions about the Golden Ratio", *The College Mathematics Journal* 23(1), 1992.
- M. Livio, *The Golden Ratio: The Story of Phi*, 2002.
- On this site: the Topics lessons [Dilations and scale drawings](../../topics/geometry/level-5/04-dilations-scale-drawings.md)
  and [Similar triangles and scale factors](../../topics/geometry/level-7/01-similar-triangles.md); the Algebra book's
  [Quadratics](../algebra/05-Quadratics.md) (the golden equation $x^2 - x - 1 = 0$) and
  [Sequences, series and induction](../algebra/08-Sequences-Series-and-Induction.md) (Fibonacci); and the
  [Geometry book's contents](index.md).
