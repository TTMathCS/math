# 3. Parallel lines and the angle sum

*Every schoolchild learns that the angles of a triangle add up to $180°$. Why should that be? It is not true of a
triangle drawn on a ball, so it cannot be a fact about "all triangles everywhere": it must come from something
special about the flat plane. This chapter finds that something. It studies parallel lines and the angles a
crossing line makes with them, proves the angle sum and its consequences for every polygon, uses those to show that
only three regular polygons can tile a floor, and then looks hard at the one assumption all of it rests on:
Euclid's fifth postulate, in the simpler form that John Playfair made standard.*

!!! abstract "In this chapter"

    **You will learn:**

    - the angles a transversal makes with two lines (corresponding, alternate, co-interior), and which facts about
      them need the parallel postulate and which do not
    - parallelograms, rectangles and the fact that parallel lines stay the same distance apart
    - the proof that the angles of a triangle add to $180°$, the exterior angle theorem, and where the parallel
      postulate is hiding in the proof
    - angle sums of polygons, convex or not, the $360°$ rule for exterior angles, and star polygons
    - why only triangles, squares and hexagons tile the plane as regular tilings; semi-regular tilings; which other
      shapes tile
    - Playfair's axiom, its equivalence with Euclid's fifth postulate, and a list of other statements equivalent to it

    **You need:** [Chapter 1](01-Points-Lines-and-Angles.md) and [Chapter 2](02-Triangles-and-Congruence.md),
    especially the exterior angle inequality (Theorem 2.2). For a gentler version, see the Topics lessons
    [Parallel and perpendicular lines](../../topics/geometry/level-3/03-parallel-perpendicular.md),
    [Angles with parallel lines](../../topics/geometry/level-4/04-parallel-line-angles.md),
    [Angles in a triangle add to 180°](../../topics/geometry/level-4/03-triangle-angle-sum.md),
    [Angles inside and outside any polygon](../../topics/geometry/level-4/05-polygon-angles.md) and
    [Tiling the floor](../../topics/geometry/level-2/05-tiling-the-floor.md).

    **Levels:** 3.1 to 3.3 are beginner to intermediate; 3.4 is intermediate; 3.5 is intermediate to advanced.

## 3.1 Parallel lines and transversals

### The eight angles

Two lines $\ell$ and $m$ in a plane are **parallel** if they never meet. A third line $t$ that crosses both is a
**transversal**. At each crossing it makes four angles, eight in all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="Two parallel lines cut by a transversal make eight angles; angles a, c, e, g are equal (orange) and b, d, f, h are equal (blue)">
  <line x1="20" y1="70" x2="420" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="420,70 412.6,66.9 412.6,73.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <line x1="20" y1="170" x2="420" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="420,170 412.6,166.9 412.6,173.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="10" x2="290" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 188.2 70 L 206.2 70 A 18 18 0 0 0 178.5 54.8 Z" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <text x="202.6" y="48.6" text-anchor="middle" font-size="14" fill="currentColor">a</text>
  <path d="M 188.2 70 L 178.5 54.8 A 18 18 0 0 0 170.2 70 Z" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <text x="161.9" y="60.5" text-anchor="middle" font-size="14" fill="currentColor">b</text>
  <path d="M 188.2 70 L 170.2 70 A 18 18 0 0 0 197.8 85.2 Z" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <text x="173.7" y="101.2" text-anchor="middle" font-size="14" fill="currentColor">c</text>
  <path d="M 188.2 70 L 197.8 85.2 A 18 18 0 0 0 206.2 70 Z" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <text x="214.5" y="89.3" text-anchor="middle" font-size="14" fill="currentColor">d</text>
  <circle cx="188.2" cy="70" r="3" fill="currentColor"/>
  <path d="M 251.8 170 L 269.8 170 A 18 18 0 0 0 242.2 154.8 Z" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <text x="266.3" y="148.6" text-anchor="middle" font-size="14" fill="currentColor">e</text>
  <path d="M 251.8 170 L 242.2 154.8 A 18 18 0 0 0 233.8 170 Z" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <text x="225.5" y="160.5" text-anchor="middle" font-size="14" fill="currentColor">f</text>
  <path d="M 251.8 170 L 233.8 170 A 18 18 0 0 0 261.5 185.2 Z" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <text x="237.4" y="201.2" text-anchor="middle" font-size="14" fill="currentColor">g</text>
  <path d="M 251.8 170 L 261.5 185.2 A 18 18 0 0 0 269.8 170 Z" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <text x="278.1" y="189.3" text-anchor="middle" font-size="14" fill="currentColor">h</text>
  <circle cx="251.8" cy="170" r="3" fill="currentColor"/>
  <text x="432" y="74" text-anchor="middle" font-size="15" fill="currentColor">ℓ</text>
  <text x="432" y="174" text-anchor="middle" font-size="15" fill="currentColor">m</text>
  <text x="300" y="224" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">t</text>
</svg>
</div>

The pairs have names, which describe where they sit:

- **corresponding angles** are in the same position at the two crossings: $a$ and $e$, $b$ and $f$, $c$ and $g$,
  $d$ and $h$ (an "F" shape);
- **alternate (interior) angles** are between the two lines, on opposite sides of the transversal: $c$ and $e$, $d$
  and $f$ (a "Z" shape);
- **co-interior angles** (also called *same-side interior* or *consecutive interior*) are between the lines on the
  same side of the transversal: $c$ and $f$, $d$ and $e$ (a "C" or "U" shape).

At each crossing, vertical angles are equal and linear pairs add to $180°$ (Chapter 1), so $a = c$, $b = d$,
$a + b = 180°$, and the same at the second crossing. That means that as soon as *one* of these is true:

$$
\text{corresponding angles equal} \iff \text{alternate angles equal} \iff \text{co-interior angles add to } 180°,
$$

all three are true. (For instance, if alternate angles $c = e$, then corresponding $a = c = e$, and co-interior
$c + f = e + f = 180°$.) So we can state everything in terms of alternate angles.

### Equal alternate angles force parallel lines

**Theorem 3.1 (Euclid I.27).** If a transversal makes equal alternate angles with two lines, the lines are parallel.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="Proof that equal alternate angles force parallel lines: if the lines met at R, the triangle PQR would have an exterior angle equal to a remote interior angle, which Theorem 2.2 forbids">
  <line x1="95" y1="20" x2="245" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50" y1="35" x2="400" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="112" y1="206" x2="400" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 120 50 L 135.4 68.4 A 24 24 0 0 0 143.5 55 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 220 170 L 204.6 151.6 A 24 24 0 0 0 197.2 177.6 Z" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="120" cy="50" r="3" fill="currentColor"/>
  <text x="114" y="41.2" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <circle cx="220" cy="170" r="3" fill="currentColor"/>
  <text x="228" y="189.2" text-anchor="middle" font-size="15" fill="currentColor">Q</text>
  <circle cx="400" cy="110" r="3" fill="currentColor"/>
  <text x="400" y="101.2" text-anchor="middle" font-size="15" fill="currentColor">R?</text>
</svg>
</div>

*Proof.* Suppose the transversal crosses $\ell$ at $P$ and $m$ at $Q$, the alternate angles are equal, and yet the
lines meet, at a point $R$. Then $P$, $Q$, $R$ form a triangle. One of the two alternate angles, say the one at $Q$, is
an *exterior* angle of this triangle (it forms a linear pair with the interior angle $\angle PQR$), and the other, at
$P$, is an *interior* angle not next to it. By the exterior angle inequality (Theorem 2.2) the exterior angle is
strictly larger. But they are equal. Contradiction; so the lines do not meet. $\blacksquare$

The figure is drawn the only way it can be: with the angles visibly *unequal*. A correct picture of the impossible
situation cannot be drawn, which is what the proof says.

This theorem uses nothing about parallels: it holds in neutral geometry. It gives, at once:

**Corollary 3.2.** (a) Two lines perpendicular to the same line are parallel. (b) Through a point $P$ not on a line
$\ell$ there is **at least one** line parallel to $\ell$.

*Proof.* (a) A transversal perpendicular to both makes alternate angles of $90°$. (b) Drop the perpendicular $PQ$
from $P$ to $\ell$ (Chapter 2), then draw the line $m$ through $P$ perpendicular to $PQ$. By (a), $m \parallel \ell$.
$\blacksquare$

So parallels always *exist*. The question that Euclid's fifth postulate settles is whether there is only one.

### The parallel postulate

We will use Euclid's fifth postulate in the form that John Playfair put in his 1795 textbook *Elements of
Geometry* (the idea is older; Proclus states something close to it in the 5th century):

> **Playfair's axiom.** Through a point not on a line there is **at most one** line parallel to it.

Together with Corollary 3.2(b): exactly one. Section 3.5 proves that Playfair's axiom and Euclid's fifth postulate
say the same thing. From now on, every theorem that uses Playfair's axiom will say so, by the words "(uses the
parallel postulate)".

**Theorem 3.3 (Euclid I.29; uses the parallel postulate).** If two lines are parallel, then a transversal makes
equal alternate angles with them, equal corresponding angles, and co-interior angles adding to $180°$.

*Proof.* Let $\ell \parallel m$, and let the transversal meet $\ell$ at $P$ and $m$ at $Q$. Through $P$ draw the line
$\ell'$ that makes, with the transversal, an alternate angle equal to the one $m$ makes at $Q$ (copy the angle,
Chapter 2). By Theorem 3.1, $\ell' \parallel m$. Now $\ell$ and $\ell'$ are both lines through $P$ parallel to $m$.
By Playfair's axiom they are the same line. So $\ell$ itself makes equal alternate angles with $m$. The other two
statements follow as shown above. $\blacksquare$

Theorems 3.1 and 3.3 are converses of each other. Together: *two lines cut by a transversal are parallel if and only
if the alternate angles are equal.* One direction is free, the other costs the parallel postulate.

**Theorem 3.4 (uses the parallel postulate).** Two lines parallel to the same line are parallel to each other.

*Proof.* Let $a \parallel c$ and $b \parallel c$, with $a \ne b$. If $a$ and $b$ met at a point $P$, they would be two
different lines through $P$ parallel to $c$, against Playfair. $\blacksquare$

### Angle chasing

With these facts you can find unknown angles in a figure by following equal angles around it, a skill called
**angle chasing**.

**Worked example.** A transversal crosses two parallel lines. One alternate angle is $(3x + 12)°$ and the other is
$(5x - 30)°$. Find all eight angles. Alternate angles are equal: $3x + 12 = 5x - 30$, so $x = 21$ and the angle is
$75°$. Four of the eight angles are $75°$ and the other four are $180° - 75° = 105°$.

**Worked example (the bent path).** Two parallel lines, and a path from $A$ on one to $B$ on the other with one bend
at $X$ between them. The path makes angle $\alpha$ with the first line at $A$ and $\beta$ with the second at $B$
(both measured on the same side). What is the angle at the bend?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="A bent path between two parallel lines: the angle at the bend equals the sum of the two angles the path makes with the lines; the dashed line through the bend is a third parallel">
  <line x1="20" y1="30" x2="400" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="400,30 392.6,26.9 392.6,33.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <line x1="20" y1="180" x2="400" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="400,180 392.6,176.9 392.6,183.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <line x1="90" y1="30" x2="200" y2="105" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="105" x2="110" y2="180" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="105" x2="400" y2="105" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 90 30 L 118.1 49.2 A 34 34 0 0 0 124 30 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="135.9" y="49" text-anchor="middle" font-size="14" fill="currentColor">α</text>
  <path d="M 200 105 L 171.9 85.8 A 34 34 0 0 0 166 105 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="154.1" y="95.8" text-anchor="middle" font-size="14" fill="currentColor">α</text>
  <path d="M 110 180 L 144 180 A 34 34 0 0 0 136.1 158.2 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="155.1" y="168.6" text-anchor="middle" font-size="14" fill="currentColor">β</text>
  <path d="M 200 105 L 170 105 A 30 30 0 0 0 177 124.2 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="158.6" y="124.9" text-anchor="middle" font-size="14" fill="currentColor">β</text>
  <circle cx="90" cy="30" r="3" fill="currentColor"/>
  <text x="80" y="23.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="110" cy="180" r="3" fill="currentColor"/>
  <text x="100" y="197.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="200" cy="105" r="3" fill="currentColor"/>
  <text x="218" y="100.2" text-anchor="middle" font-size="15" fill="currentColor">X</text>
</svg>
</div>

Draw through $X$ a third line parallel to both (it exists by Corollary 3.2, and by Theorem 3.4 it is parallel to the
second line too). It splits $\angle AXB$ into two parts. The upper part is alternate to $\alpha$ (the lines through
$A$ and $X$ are parallel, transversal $AX$), so it equals $\alpha$; the lower part equals $\beta$ in the same way. So

$$
\angle AXB = \alpha + \beta .
$$

With $\alpha = 34°$ and $\beta = 40°$, the bend is $74°$. (In the figure the angles are about $34°$ and $40°$ and the
bend measures about $74°$.)

### Parallelograms

A **parallelogram** is a quadrilateral with both pairs of opposite sides parallel. Chapter 2 promised its properties.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Parallelogram ABCD with diagonal AC: the alternate angles marked in orange are equal, and so are those in blue, so triangles ABC and CDA are congruent by ASA">
  <polygon points="40,170 290,170 380,30 130,30" fill="#7ccf9a" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="380" y2="30" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 40 170 L 80 170 A 40 40 0 0 0 77 154.8 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 380 30 L 340 30 A 40 40 0 0 0 343 45.2 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 40 170 L 67.7 158.6 A 30 30 0 0 0 56.2 144.8 Z" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 380 30 L 352.3 41.4 A 30 30 0 0 0 363.8 55.2 Z" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="40" cy="170" r="3" fill="currentColor"/>
  <text x="28" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="290" cy="170" r="3" fill="currentColor"/>
  <text x="302" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="380" cy="30" r="3" fill="currentColor"/>
  <text x="392" y="31.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="130" cy="30" r="3" fill="currentColor"/>
  <text x="118" y="31.2" text-anchor="middle" font-size="15" fill="currentColor">D</text>
</svg>
</div>

**Theorem 3.5 (uses the parallel postulate).** In a parallelogram $ABCD$:

1. opposite sides are equal: $AB = CD$, $BC = DA$;
2. opposite angles are equal, and consecutive angles add to $180°$;
3. the diagonals bisect each other.

*Proof.* Draw diagonal $AC$. Because $AB \parallel DC$, the alternate angles $\angle BAC$ and $\angle DCA$ are equal
(Theorem 3.3, transversal $AC$). Because $AD \parallel BC$, the alternate angles $\angle DAC$ and $\angle BCA$ are
equal. Triangles $ABC$ and $CDA$ share $AC$, so they are congruent by ASA. That gives $AB = CD$, $BC = DA$ and
$\angle B = \angle D$. Using diagonal $BD$ instead gives $\angle A = \angle C$. Consecutive angles such as $\angle A$
and $\angle B$ are co-interior for the parallels $AD$, $BC$, so they add to $180°$. For (3), let the diagonals meet at
$M$. Triangles $ABM$ and $CDM$ have $AB = CD$ and two pairs of equal alternate angles ($\angle BAM = \angle DCM$,
$\angle ABM = \angle CDM$), so they are congruent by ASA, and $AM = CM$, $BM = DM$. $\blacksquare$

The converses are useful tests.

**Theorem 3.6.** A quadrilateral is a parallelogram if any one of these holds:

1. both pairs of opposite sides are equal;
2. one pair of opposite sides is both equal and parallel;
3. the diagonals bisect each other.

*Proof.* (1) Triangles $ABC$ and $CDA$ are congruent by SSS, so $\angle BAC = \angle DCA$: equal alternate angles,
so $AB \parallel DC$ by Theorem 3.1. Similarly $AD \parallel BC$. (3) By Theorem 2.17, opposite sides are equal;
apply (1). (2) If $AB = CD$ and $AB \parallel CD$, then $\angle BAC = \angle DCA$ (Theorem 3.3), so triangles $BAC$
and $DCA$ are congruent by SAS, giving $\angle BCA = \angle DAC$, which are alternate angles for $AD$ and $BC$; so
$AD \parallel BC$. $\blacksquare$

Notice that tests (1) and (3) used only Theorem 3.1, so they hold in neutral geometry; the properties in Theorem 3.5
do not.

**Rectangles.** A rectangle has four right angles. Its opposite sides are perpendicular to the same line, so they are
parallel (Corollary 3.2): every rectangle is a parallelogram, with opposite sides equal and diagonals bisecting each
other. Its diagonals are also *equal*: triangles $ABC$ and $BAD$ have $AB$ shared, right angles at $B$ and $A$, and
$BC = AD$, so they are congruent by SAS, and $AC = BD$. Conversely (using the parallel postulate), a parallelogram with
one right angle has four, since consecutive angles add to $180°$.

### Parallel lines are everywhere the same distance apart

The **distance** from a point to a line is the length of the perpendicular from the point (the shortest segment,
Corollary 2.12).

**Theorem 3.7 (uses the parallel postulate).** If $\ell \parallel m$, then all points of $m$ are the same distance
from $\ell$.

*Proof.* Take two points $P$, $Q$ on $m$, with feet of perpendiculars $P'$, $Q'$ on $\ell$. The lines $PP'$ and $QQ'$
are both perpendicular to $\ell$, so they are parallel (Corollary 3.2). So $PQQ'P'$ has both pairs of opposite sides
parallel: it is a parallelogram, and by Theorem 3.5, $PP' = QQ'$. $\blacksquare$

This is why railway tracks and the lines on a page can be parallel and stay a constant width apart, and it is what
Chapter 4 uses when it says that triangles "between the same parallels" have the same height. On a sphere the
corresponding statement fails: the circles of latitude stay a constant distance from the equator, but they are not
"straight" on the sphere (Chapter 16).

## 3.2 The angle sum is 180°

### The proof

**Theorem 3.8 (Euclid I.32; uses the parallel postulate).** The angles of any triangle add up to $180°$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="Proof that the angles of a triangle add to 180 degrees: through C draw the line parallel to AB; the alternate angles at C equal the angles at A and B, and the three angles at C make a straight line">
  <polygon points="50,180 360,180 240,40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="40" x2="400" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 50 180 L 84 180 A 34 34 0 0 0 77.4 159.8 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="95.6" y="169.9" text-anchor="middle" font-size="14" fill="currentColor">α</text>
  <path d="M 360 180 L 337.9 154.2 A 34 34 0 0 0 326 180 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="316.4" y="164.8" text-anchor="middle" font-size="14" fill="currentColor">β</text>
  <path d="M 240 40 L 219.1 55.4 A 26 26 0 0 0 256.9 59.7 Z" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="235.5" y="84.6" text-anchor="middle" font-size="14" fill="currentColor">γ</text>
  <path d="M 240 40 L 210 40 A 30 30 0 0 0 215.8 57.8 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="198.2" y="58.6" text-anchor="middle" font-size="14" fill="currentColor">α</text>
  <path d="M 240 40 L 259.5 62.8 A 30 30 0 0 0 270 40 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="280" y="63.3" text-anchor="middle" font-size="14" fill="currentColor">β</text>
  <circle cx="50" cy="180" r="3" fill="currentColor"/>
  <text x="38" y="189.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="360" cy="180" r="3" fill="currentColor"/>
  <text x="372" y="189.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="240" cy="40" r="3" fill="currentColor"/>
  <text x="240" y="31.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
</svg>
</div>

*Proof.* Let the triangle be $ABC$ with angles $\alpha$, $\beta$, $\gamma$. Through $C$ draw the line parallel to
$AB$ (it exists, and by Playfair's axiom it is the only one). The transversal $CA$ makes alternate angles with the two
parallels: the angle between the new line and $CA$, on the left of $C$, equals $\alpha$. In the same way, the angle on
the right of $C$, between the new line and $CB$, equals $\beta$ (transversal $CB$). The three angles at $C$, namely
$\alpha$, $\gamma$, $\beta$, sit side by side along the straight line, so

$$
\alpha + \beta + \gamma = 180° . \qquad \blacksquare
$$

Proclus, quoting the history of geometry by Eudemus (4th century BC), credits this proof to the Pythagoreans; it is
essentially the proof in Euclid. The figure in the proof was drawn with a computer, and the three angles came out as
$36.38°$, $49.40°$ and $94.22°$, adding to $180.00°$. That is a check, not a proof; the proof covers every triangle.

### Consequences

**Theorem 3.9 (exterior angle theorem; uses the parallel postulate).** An exterior angle of a triangle equals the sum
of the two interior angles not next to it.

*Proof.* The exterior angle at $C$ and $\gamma$ form a linear pair, so the exterior angle is $180° - \gamma$, which by
Theorem 3.8 is $\alpha + \beta$. $\blacksquare$

This upgrades Theorem 2.2 ("larger than each") to an equation.

**Corollaries.**

- Each angle of an equilateral triangle is $60°$ (three equal angles, Corollary 2.7, adding to $180°$).
- The two acute angles of a right triangle add to $90°$: they are complementary.
- The base angles of an isosceles triangle with apex angle $\theta$ are each $(180° - \theta)/2 = 90° - \theta/2$.
  An isosceles right triangle has angles $45°, 45°, 90°$.
- If two angles of one triangle equal two angles of another, the third angles are equal too. (So AAS follows from
  ASA at once. Chapter 2 proved AAS without this, the hard way, because it is also true in neutral geometry.)
- The angles of a quadrilateral add to $360°$ (cut it into two triangles by a diagonal; see 3.3).

**Worked example.** The angles of a triangle are in the ratio $2 : 3 : 7$. Then $12$ parts make $180°$, a part is
$15°$, and the angles are $30°, 45°, 105°$. **Check:** $30 + 45 + 105 = 180$.

**Worked example.** In triangle $ABC$, the exterior angle at $C$ is $128°$ and $\angle A = 47°$. Then
$\angle B = 128° - 47° = 81°$ and $\angle C = 180° - 128° = 52°$. **Check:** $47 + 81 + 52 = 180$.

**Worked example.** An isosceles triangle has one angle of $40°$. What are the others? It depends which angle is
$40°$. If it is the apex, the base angles are $(180 - 40)/2 = 70°$ each. If it is a base angle, the other base angle
is $40°$ too and the apex is $100°$. Two answers: $40, 70, 70$ or $40, 40, 100$.

### Where the parallel postulate hides

The proof used the parallel postulate once, through Theorem 3.3, when it said that the line through $C$ makes
alternate angles *equal* to $\alpha$ and $\beta$. Without the postulate we could still draw a parallel through $C$
(Corollary 3.2), but not know that it makes those angles.

Is the postulate really needed, or just convenient? Look at a sphere, where the "straight lines" are great circles
(like the equator and the meridians, the shortest routes on the surface).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 280" role="img" aria-label="On a sphere, the triangle with one corner at the north pole and two on the equator, a quarter turn apart, has three right angles: its angle sum is 270 degrees">
  <polygon points="150,33.7 145.6,35.6 141.1,37.7 136.7,40.1 132.4,42.8 128,45.8 123.8,49 119.6,52.5 115.5,56.3 111.5,60.3 107.6,64.5 103.8,69 100.1,73.7 96.6,78.5 93.2,83.6 90,88.8 86.9,94.2 84.1,99.7 81.4,105.3 78.8,111.1 76.5,116.9 74.4,122.8 72.5,128.8 70.8,134.8 69.3,140.8 68,146.9 67,153 66.2,159 65.6,165 65.3,170.9 65.1,176.8 65.1,176.8 69.7,178.4 74.5,179.9 79.5,181.4 84.6,182.7 90,183.9 95.5,185.1 101.2,186.1 107,187 112.9,187.8 118.9,188.4 125.1,189 131.2,189.4 137.5,189.7 143.7,189.9 150,190 156.3,189.9 162.5,189.7 168.8,189.4 174.9,189 181.1,188.4 187.1,187.8 193,187 198.8,186.1 204.5,185.1 210,183.9 215.4,182.7 220.5,181.4 225.5,179.9 230.3,178.4 234.9,176.8 234.9,176.8 234.7,170.9 234.4,165 233.8,159 233,153 232,146.9 230.7,140.8 229.2,134.8 227.5,128.8 225.6,122.8 223.5,116.9 221.2,111.1 218.6,105.3 215.9,99.7 213.1,94.2 210,88.8 206.8,83.6 203.4,78.5 199.9,73.7 196.2,69 192.4,64.5 188.5,60.3 184.5,56.3 180.4,52.5 176.2,49 172,45.8 167.6,42.8 163.3,40.1 158.9,37.7 154.4,35.6 150,33.7" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <circle cx="150" cy="145" r="120" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="65.1,176.8 69.7,178.4 74.5,179.9 79.5,181.4 84.6,182.7 90,183.9 95.5,185.1 101.2,186.1 107,187 112.9,187.8 118.9,188.4 125.1,189 131.2,189.4 137.5,189.7 143.7,189.9 150,190 156.3,189.9 162.5,189.7 168.8,189.4 174.9,189 181.1,188.4 187.1,187.8 193,187 198.8,186.1 204.5,185.1 210,183.9 215.4,182.7 220.5,181.4 225.5,179.9 230.3,178.4 234.9,176.8 239.2,175.1 243.3,173.3 247.1,171.4 250.6,169.5 253.9,167.5 256.9,165.4 259.6,163.3 262,161.1 264.1,158.9 265.9,156.6 267.4,154.3 268.5,152 269.3,149.7 269.8,147.4 270,145 269.8,142.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="269.8,142.6 269.3,140.3 268.5,138 267.4,135.7 265.9,133.4 264.1,131.1 262,128.9 259.6,126.7 256.9,124.6 253.9,122.5 250.6,120.5 247.1,118.6 243.3,116.7 239.2,114.9 234.9,113.2 230.3,111.6 225.5,110.1 220.5,108.6 215.4,107.3 210,106.1 204.5,104.9 198.8,103.9 193,103 187.1,102.2 181.1,101.6 174.9,101 168.8,100.6 162.5,100.3 156.3,100.1 150,100 143.7,100.1 137.5,100.3 131.2,100.6 125.1,101 118.9,101.6 112.9,102.2 107,103 101.2,103.9 95.5,104.9 90,106.1 84.6,107.3 79.5,108.6 74.5,110.1 69.7,111.6 65.1,113.2 60.8,114.9 56.7,116.7 52.9,118.6 49.4,120.5 46.1,122.5 43.1,124.6 40.4,126.7 38,128.9 35.9,131.1 34.1,133.4 32.6,135.7 31.5,138 30.7,140.3 30.2,142.6 30,145" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <polyline points="30,145 30.2,147.4 30.7,149.7 31.5,152 32.6,154.3 34.1,156.6 35.9,158.9 38,161.1 40.4,163.3 43.1,165.4 46.1,167.5 49.4,169.5 52.9,171.4 56.7,173.3 60.8,175.1 65.1,176.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="150,33.7 145.6,35.6 141.1,37.7 136.7,40.1 132.4,42.8 128,45.8 123.8,49 119.6,52.5 115.5,56.3 111.5,60.3 107.6,64.5 103.8,69 100.1,73.7 96.6,78.5 93.2,83.6 90,88.8 86.9,94.2 84.1,99.7 81.4,105.3 78.8,111.1 76.5,116.9 74.4,122.8 72.5,128.8 70.8,134.8 69.3,140.8 68,146.9 67,153 66.2,159 65.6,165 65.3,170.9 65.1,176.8" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="150,33.7 154.4,35.6 158.9,37.7 163.3,40.1 167.6,42.8 172,45.8 176.2,49 180.4,52.5 184.5,56.3 188.5,60.3 192.4,64.5 196.2,69 199.9,73.7 203.4,78.5 206.8,83.6 210,88.8 213.1,94.2 215.9,99.7 218.6,105.3 221.2,111.1 223.5,116.9 225.6,122.8 227.5,128.8 229.2,134.8 230.7,140.8 232,146.9 233,153 233.8,159 234.4,165 234.7,170.9 234.9,176.8" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="65.1,176.8 69.7,178.4 74.5,179.9 79.5,181.4 84.6,182.7 90,183.9 95.5,185.1 101.2,186.1 107,187 112.9,187.8 118.9,188.4 125.1,189 131.2,189.4 137.5,189.7 143.7,189.9 150,190 156.3,189.9 162.5,189.7 168.8,189.4 174.9,189 181.1,188.4 187.1,187.8 193,187 198.8,186.1 204.5,185.1 210,183.9 215.4,182.7 220.5,181.4 225.5,179.9 230.3,178.4 234.9,176.8" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="150" cy="33.7" r="3" fill="currentColor"/>
  <text x="150" y="25" text-anchor="middle" font-size="15" fill="currentColor">N</text>
  <circle cx="65.1" cy="176.8" r="3" fill="currentColor"/>
  <text x="65.1" y="182" text-anchor="middle" font-size="15" fill="currentColor"></text>
  <circle cx="234.9" cy="176.8" r="3" fill="currentColor"/>
  <text x="234.9" y="182" text-anchor="middle" font-size="15" fill="currentColor"></text>
  <text x="59.1" y="195.3" text-anchor="middle" font-size="13" fill="currentColor">90°</text>
  <text x="240.9" y="195.3" text-anchor="middle" font-size="13" fill="currentColor">90°</text>
  <text x="150" y="62.3" text-anchor="middle" font-size="13" fill="currentColor">90°</text>
</svg>
</div>

Start at the north pole, walk south along a meridian to the equator, turn left through $90°$, walk a quarter of the way
around the equator, turn left through $90°$ again and walk north back to the pole. Your path is a triangle made of
three great-circle arcs, and each of its angles is $90°$: the angle sum is $270°$. On a sphere there are no parallel
lines at all (any two great circles meet), so the parallel postulate fails, and with it the angle sum.

The sphere breaks some of the *other* axioms too (two points such as the poles lie on many great circles), so it does
not yet prove that the parallel postulate is independent of the rest. That needs the hyperbolic plane of Chapter 17,
where every axiom of neutral geometry holds, the parallel postulate fails, and every triangle has angle sum *less*
than $180°$. In Chapter 16 you will meet Girard's theorem: on a sphere of radius $R$, a triangle of area $A$ has angle
sum $180°$ plus $A/R^2$ radians. For the triangle above, $A$ is one eighth of the sphere, $4\pi R^2/8$, and
$A/R^2 = \pi/2$ radians $= 90°$, giving $270°$.

Small triangles on a big sphere are very nearly flat. A triangle of area $1000\ \text{km}^2$ on the Earth (radius
$6371$ km) has angle sum exceeding $180°$ by $1000/6371^2 \approx 2.46 \times 10^{-5}$ radians, about $5''$
(seconds of arc); the same triangle on Mars (radius $3389.5$ km) exceeds it by about $18''$. Land surveyors who map
large regions do correct for this. Carl Friedrich Gauss's survey of the kingdom of Hanover in the 1820s included a
large triangle of three mountain peaks (Brocken, Hoher Hagen and Inselsberg). It is often said he was testing whether
space itself is Euclidean; historians disagree about whether that was his aim. Either way, the angles agreed with
Euclid within the accuracy of the instruments.

## 3.3 Polygons' angle sums

### Polygons

A **polygon** is a closed chain of segments $P_1P_2, P_2P_3, \ldots, P_nP_1$ (its **sides**) that do not cross one
another, and no two neighbouring sides on one line. The $P_i$ are its **vertices**; with $n$ sides it is an
**$n$-gon** (triangle, quadrilateral, pentagon, hexagon, heptagon, octagon, nonagon, decagon, ..., dodecagon for 12).
A **diagonal** joins two vertices that are not neighbours. A polygon is **convex** if every diagonal lies inside it;
otherwise **concave**. A polygon is **regular** if all its sides are equal and all its angles are equal.

**How many diagonals?** Each vertex can be joined to $n - 3$ others (not itself and not its two neighbours), giving
$n(n-3)$ ends, and each diagonal has two ends, so there are $n(n-3)/2$ diagonals. A hexagon has $6 \cdot 3/2 = 9$,
a 20-gon has $20 \cdot 17/2 = 170$.

### Interior angles

**Theorem 3.10 (uses the parallel postulate).** The interior angles of any $n$-gon add up to $(n - 2) \times 180°$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 210" role="img" aria-label="Left: diagonals from one vertex cut a convex hexagon into 4 triangles, so its angles add to 4 times 180 = 720 degrees. Right: a concave polygon with 7 sides is also cut into 5 triangles by diagonals">
  <polygon points="30,130 90,185 175,170 205,100 150,25 60,40" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="130" x2="175" y2="170" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="30" y1="130" x2="205" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="30" y1="130" x2="150" y2="25" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="98.3" y="166.2" text-anchor="middle" font-size="13" fill="currentColor">1</text>
  <text x="136.7" y="137.9" text-anchor="middle" font-size="13" fill="currentColor">2</text>
  <text x="128.3" y="89.5" text-anchor="middle" font-size="13" fill="currentColor">3</text>
  <text x="80" y="69.6" text-anchor="middle" font-size="13" fill="currentColor">4</text>
  <polygon points="250,170 330,180 420,150 400,40 340,100 300,25 240,70" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="250" y1="170" x2="420" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="250" y1="170" x2="340" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="340" y1="100" x2="240" y2="70" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="420" y1="150" x2="340" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="115" y="208" text-anchor="middle" font-size="14" fill="currentColor">720°</text>
  <text x="330" y="208" text-anchor="middle" font-size="14" fill="currentColor">5 × 180° = 900°</text>
</svg>
</div>

*Proof for convex polygons.* From one vertex $P_1$ draw the $n - 3$ diagonals to the vertices that are not its
neighbours. They cut the polygon into $n - 2$ triangles ($P_1P_2P_3$, $P_1P_3P_4$, ..., $P_1P_{n-1}P_n$). The angles
of these triangles exactly make up the angles of the polygon: at $P_1$ the triangles' angles fit together to make the
polygon's angle, and at every other vertex one or two triangles meet and fill the polygon's angle. So the polygon's
angle sum is $(n - 2) \times 180°$. $\blacksquare$

*Proof for every polygon.* *Level: intermediate.* A concave polygon may have no vertex from which all diagonals
lie inside (try the right-hand figure). Instead we use:

**Lemma 3.11.** Every polygon with at least four sides has a diagonal lying entirely inside it.

*Proof.* Let $V$ be the lowest vertex (if several, the leftmost of those), with neighbours $U$ and $W$. The interior
angle at $V$ is less than $180°$, because the whole polygon lies on or above the horizontal line through $V$. If
segment $UW$ lies inside the polygon, it is a diagonal. If not, some vertices of the polygon lie inside triangle
$UVW$ (or on $UW$); among them take the one, $X$, farthest from the line $UW$. Then the segment $VX$ meets no side
(a side crossing it would have to have an end even farther from $UW$ inside the triangle), so $VX$ is a diagonal.
$\blacksquare$

Now induction on $n$ (a proof that a statement holds for $n = 3$ and that if it holds for all smaller polygons it
holds for $n$; see the Algebra book's [Chapter 8](../algebra/08-Sequences-Series-and-Induction.md)). For $n = 3$
it is Theorem 3.8. For $n \ge 4$, a diagonal from Lemma 3.11 cuts the $n$-gon into a $k$-gon and an $(n - k + 2)$-gon,
for some $k$ between 3 and $n - 1$. Their angle sums are $(k - 2) \cdot 180°$ and $(n - k) \cdot 180°$, and together
they make up the angles of the original polygon, so its sum is $(k - 2 + n - k) \cdot 180° = (n - 2) \cdot 180°$.
$\blacksquare$

The same induction shows that every polygon can be **triangulated** (cut into triangles by diagonals) and that every
triangulation of an $n$-gon has exactly $n - 2$ triangles. The right-hand figure, a concave 7-gon, has 5.

| polygon | $n$ | angle sum | each angle if regular | each exterior angle if regular |
| --- | --- | --- | --- | --- |
| triangle | 3 | $180°$ | $60°$ | $120°$ |
| quadrilateral | 4 | $360°$ | $90°$ | $90°$ |
| pentagon | 5 | $540°$ | $108°$ | $72°$ |
| hexagon | 6 | $720°$ | $120°$ | $60°$ |
| octagon | 8 | $1080°$ | $135°$ | $45°$ |
| decagon | 10 | $1440°$ | $144°$ | $36°$ |
| dodecagon | 12 | $1800°$ | $150°$ | $30°$ |

A regular $n$-gon has each angle equal to $\dfrac{(n-2) \cdot 180°}{n} = 180° - \dfrac{360°}{n}$.

### Exterior angles

At each vertex of a convex polygon, extend one side; the angle between the extension and the next side is the
**exterior angle** there, and it is $180°$ minus the interior angle.

**Theorem 3.12 (uses the parallel postulate).** The exterior angles of a convex polygon, one at each vertex, add up
to $360°$.

*Proof.* There are $n$ of them, so their sum is $n \cdot 180° - (n - 2) \cdot 180° = 360°$. $\blacksquare$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 300" role="img" aria-label="Walking around a convex pentagon you turn through the five exterior angles, one full turn: they add to 360 degrees">
  <polygon points="80,235 260,245 330,135 210,50 60,105" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="235" x2="86.8" y2="279.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 80 235 L 83.3 256.7 A 22 22 0 0 0 102 236.2 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="80" cy="235" r="3" fill="currentColor"/>
  <line x1="260" y1="245" x2="304.9" y2="247.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 260 245 L 282 246.2 A 22 22 0 0 0 271.8 226.4 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="260" cy="245" r="3" fill="currentColor"/>
  <line x1="330" y1="135" x2="354.2" y2="97" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 330 135 L 341.8 116.4 A 22 22 0 0 0 312 122.3 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="330" cy="135" r="3" fill="currentColor"/>
  <line x1="210" y1="50" x2="173.3" y2="24" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 210 50 L 192 37.3 A 22 22 0 0 0 189.3 57.6 Z" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="50" r="3" fill="currentColor"/>
  <line x1="60" y1="105" x2="17.8" y2="120.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 60 105 L 39.3 112.6 A 22 22 0 0 0 63.3 126.7 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="60" cy="105" r="3" fill="currentColor"/>
</svg>
</div>

There is a more vivid way to see it. Walk around the polygon. At each corner you turn through the exterior angle.
When you are back where you started you face the way you started, having turned once around: $360°$. That argument is
not yet a proof (what does "turning once around" mean, exactly?), but it generalises in a way the algebra does not.
For a non-convex polygon, count the turns at the dents as negative (you turn the other way); the total is still $360°$.
For a curve, the "total turning" is the integral of curvature, and that it equals $360°$ for a simple closed curve in
the plane is Hopf's *Umlaufsatz* (1935), a seed of the Gauss-Bonnet theorem of Chapter 19.

**Worked example.** Each interior angle of a regular polygon is $156°$. How many sides? Each exterior angle is
$180° - 156° = 24°$, and they add to $360°$, so $n = 360/24 = 15$. **Check:** $(15 - 2) \cdot 180 / 15 = 156$.

**Worked example.** Is there a regular polygon with interior angles of $130°$? The exterior angle would be $50°$,
and $360/50 = 7.2$ is not a whole number. No.

**Worked example.** A pentagon has angles $x$, $x + 10°$, $x + 20°$, $x + 30°$, $x + 40°$. The sum is $540°$, so
$5x + 100 = 540$, $x = 88°$, and the angles are $88°, 98°, 108°, 118°, 128°$.

### Stars

Join every second vertex of five points around a circle and you get a five-pointed star, a **pentagram**. Here is a
pretty fact that holds for every such star, regular or not.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 270" role="img" aria-label="A five-pointed star: the five tip angles always add up to 180 degrees">
  <polygon points="150,20 79.5,237.1 264.1,102.9 35.9,102.9 220.5,237.1" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 150 20 L 141.3 46.6 A 28 28 0 0 0 158.7 46.6 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="150" cy="20" r="3" fill="currentColor"/>
  <path d="M 35.9 102.9 L 58.5 119.4 A 28 28 0 0 0 63.9 102.9 Z" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="35.9" cy="102.9" r="3" fill="currentColor"/>
  <path d="M 79.5 237.1 L 102.1 220.6 A 28 28 0 0 0 88.1 210.5 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="79.5" cy="237.1" r="3" fill="currentColor"/>
  <path d="M 220.5 237.1 L 211.9 210.5 A 28 28 0 0 0 197.9 220.6 Z" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="220.5" cy="237.1" r="3" fill="currentColor"/>
  <path d="M 264.1 102.9 L 236.1 102.9 A 28 28 0 0 0 241.5 119.4 Z" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="264.1" cy="102.9" r="3" fill="currentColor"/>
  <text x="150" y="11.9" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <text x="23.5" y="103.8" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <text x="71.8" y="252.5" text-anchor="middle" font-size="14" fill="currentColor">C</text>
  <text x="228.2" y="252.5" text-anchor="middle" font-size="14" fill="currentColor">D</text>
  <text x="276.5" y="103.8" text-anchor="middle" font-size="14" fill="currentColor">E</text>
</svg>
</div>

**Theorem 3.13 (uses the parallel postulate).** The five tip angles of a five-pointed star add up to $180°$.

*Proof.* Label the tips $A, B, C, D, E$ in order around the star, so the five segments are $AC$, $CE$, $EB$, $BD$, $DA$.
The segment $EB$ crosses $AC$ at a point $P$ and $AD$ at a point $Q$, cutting off the triangle $APQ$ at the tip $A$.
Its angles add to $180°$: $\angle A + \angle APQ + \angle AQP = 180°$. Now $\angle APQ$ is an exterior angle of
triangle $PCE$ (the side $CP$ extended beyond $P$ runs to $A$), so by Theorem 3.9 it equals $\angle C + \angle E$.
Likewise $\angle AQP$ is an exterior angle of triangle $QDB$, so it equals $\angle B + \angle D$. Substituting,
$\angle A + \angle B + \angle C + \angle D + \angle E = 180°$. $\blacksquare$

For the regular pentagram each tip is $36°$. Walking around the star you turn $144°$ at each tip, $720°$ in total:
you go around the centre twice. The number of times is the star's **turning number**, and for any closed polygonal path
the sum of the turning angles is $360°$ times it.

## 3.4 Tilings of the plane by regular polygons

*Level: intermediate.*

A **tiling** (or tessellation) covers the whole plane with copies of shapes, with no gaps and no overlaps. Floors,
walls, honeycombs and the paving stones of old cities are pieces of tilings, and the question of which shapes can do
it turns out to be deep.

### Only three regular tilings

A tiling is **regular** if it uses copies of one regular polygon, meeting edge to edge (each edge of each tile is a
whole edge of exactly one neighbour).

**Theorem 3.14.** There are exactly three regular tilings: by equilateral triangles, by squares, and by regular
hexagons.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 170" role="img" aria-label="The three regular tilings: by equilateral triangles (6 at each corner), by squares (4 at each corner) and by regular hexagons (3 at each corner)">
  <polygon points="10,160 40,160 25,134" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="25,134 40,160 55,134" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="40,160 70,160 55,134" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="55,134 70,160 85,134" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="70,160 100,160 85,134" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="85,134 100,160 115,134" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="100,160 130,160 115,134" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="115,134 130,160 145,134" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="10,108 25,134 40,108" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="25,134 55,134 40,108" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="40,108 55,134 70,108" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="55,134 85,134 70,108" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="70,108 85,134 100,108" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="85,134 115,134 100,108" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="100,108 115,134 130,108" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="115,134 145,134 130,108" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="10,108 40,108 25,82.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="25,82.1 40,108 55,82.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="40,108 70,108 55,82.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="55,82.1 70,108 85,82.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="70,108 100,108 85,82.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="85,82.1 100,108 115,82.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="100,108 130,108 115,82.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="115,82.1 130,108 145,82.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="10,56.1 25,82.1 40,56.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="25,82.1 55,82.1 40,56.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="40,56.1 55,82.1 70,56.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="55,82.1 85,82.1 70,56.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="70,56.1 85,82.1 100,56.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="85,82.1 115,82.1 100,56.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="100,56.1 115,82.1 130,56.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="115,82.1 145,82.1 130,56.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="10,56.1 40,56.1 25,30.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="25,30.1 40,56.1 55,30.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="40,56.1 70,56.1 55,30.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="55,30.1 70,56.1 85,30.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="70,56.1 100,56.1 85,30.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="85,30.1 100,56.1 115,30.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="100,56.1 130,56.1 115,30.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="115,30.1 130,56.1 145,30.1" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="175,155 205,155 205,125 175,125" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="175,125 205,125 205,95 175,95" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="175,95 205,95 205,65 175,65" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="175,65 205,65 205,35 175,35" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="205,155 235,155 235,125 205,125" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="205,125 235,125 235,95 205,95" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="205,95 235,95 235,65 205,65" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="205,65 235,65 235,35 205,35" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="235,155 265,155 265,125 235,125" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="235,125 265,125 265,95 235,95" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="235,95 265,95 265,65 235,65" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="235,65 265,65 265,35 235,35" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="265,155 295,155 295,125 265,125" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="265,125 295,125 295,95 265,95" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="265,95 295,95 295,65 265,65" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="265,65 295,65 295,35 265,35" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="370,142.7 360,125.4 340,125.4 330,142.7 340,160 360,160" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="370,108 360,90.7 340,90.7 330,108 340,125.4 360,125.4" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="370,73.4 360,56.1 340,56.1 330,73.4 340,90.7 360,90.7" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="370,38.8 360,21.4 340,21.4 330,38.8 340,56.1 360,56.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="400,125.4 390,108 370,108 360,125.4 370,142.7 390,142.7" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="400,90.7 390,73.4 370,73.4 360,90.7 370,108 390,108" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="400,56.1 390,38.8 370,38.8 360,56.1 370,73.4 390,73.4" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="430,142.7 420,125.4 400,125.4 390,142.7 400,160 420,160" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="430,108 420,90.7 400,90.7 390,108 400,125.4 420,125.4" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="430,73.4 420,56.1 400,56.1 390,73.4 400,90.7 420,90.7" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="430,38.8 420,21.4 400,21.4 390,38.8 400,56.1 420,56.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="460,125.4 450,108 430,108 420,125.4 430,142.7 450,142.7" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="460,90.7 450,73.4 430,73.4 420,90.7 430,108 450,108" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="460,56.1 450,38.8 430,38.8 420,56.1 430,73.4 450,73.4" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

*Proof.* Suppose regular $n$-gons tile edge to edge and $k$ of them meet at each vertex. Each angle is
$180° - 360°/n$, and the angles around a vertex add to $360°$ (Theorem 1.4), so

$$
k\left(180° - \frac{360°}{n}\right) = 360° .
$$

Divide by $180°$ and multiply by $n$: $k(n - 2) = 2n$, so $kn - 2k - 2n = 0$, and adding 4 to both sides,

$$
(k - 2)(n - 2) = 4 .
$$

Here $n \ge 3$ and $k \ge 3$ (two polygons cannot fill $360°$, since each angle is less than $180°$), so both factors
are positive whole numbers with product 4: $1 \times 4$, $2 \times 2$ or $4 \times 1$. That gives
$(k, n) = (3, 6)$, $(4, 4)$, $(6, 3)$: three hexagons, four squares or six triangles at each vertex. Each really does
tile, as the figure shows. $\blacksquare$

The factoring trick, $kn - 2k - 2n + 4 = (k-2)(n-2)$, turns a question about angles into a question about the
divisors of 4. You will see it again for the Platonic solids in Chapter 11, where the equation becomes
$(k - 2)(n - 2) < 4$.

Why is the failure of pentagons so visible? Three regular pentagons around a point use $3 \times 108° = 324°$ and
leave a $36°$ gap that nothing regular fits, while four would need $432°$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 230" role="img" aria-label="Three regular pentagons around a point use 3 times 108 = 324 degrees and leave a 36 degree gap; a fourth would overlap">
  <polygon points="180,110 180,40 113.4,18.4 72.3,75 113.4,131.6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="180,110 113.4,131.6 113.4,201.6 180,223.3 221.1,166.6" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="180,110 221.1,166.6 287.7,145 287.7,75 221.1,53.4" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 180 110 L 197.6 85.7 A 30 30 0 0 0 180 80 Z" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="194.8" y="68.9" text-anchor="middle" font-size="13" fill="currentColor">36°</text>
  <circle cx="180" cy="110" r="3" fill="currentColor"/>
</svg>
</div>

What if tiles need not meet edge to edge (like bricks in a wall)? A vertex of one tile might then lie in the middle of
another tile's edge, where the angles must add to $180°$ instead of $360°$. Then the angle $180° - 360°/n$ must divide
$360°$ or $180°$, and for $n = 5$ ($108°$) or $n \ge 7$ (between $128°$ and $180°$) it divides neither. So the same
three polygons are the only regular ones that tile at all; only the arrangements change.

### Semi-regular tilings

Allow several kinds of regular polygon, still edge to edge, and ask that every vertex look the same (the same
polygons in the same cyclic order). These are the **semi-regular** or **Archimedean** tilings. If polygons with $n_1, \ldots, n_k$ sides meet at a vertex, then

$$
\sum_{i=1}^{k} \left(180° - \frac{360°}{n_i}\right) = 360°, \quad\text{that is}\quad \sum_{i=1}^{k} \left(\frac12 - \frac{1}{n_i}\right) = 1 .
$$

A short computer search (or a patient afternoon) finds that this equation has exactly 17 solutions in whole numbers
$n_i \ge 3$, which can be arranged around a vertex in 21 different ways. For example $4.8.8$ (a square and two
octagons: $90 + 135 + 135 = 360$), $3.12.12$, $4.6.12$, $3.3.3.3.6$, and the curious $3.7.42$ ($60° + 128\tfrac47° + 171\tfrac37° = 360°$). But a vertex that works is not yet a tiling: the neighbouring vertices must work too, and most
of the 21 cannot be continued. Exactly eight can, giving the eight semi-regular tilings: $3.3.3.3.6$, $3.3.3.4.4$,
$3.3.4.3.4$, $3.4.6.4$, $3.6.3.6$, $3.12.12$, $4.6.12$, $4.8.8$. Johannes Kepler listed them, with the three regular
ones, in *Harmonices Mundi* (1619).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="A semi-regular tiling: two regular octagons and a square meet at every corner, 135 + 135 + 90 = 360 degrees">
  <polygon points="114.2,124.2 95.8,105.8 69.8,105.8 51.4,124.2 51.4,150.2 69.8,168.6 95.8,168.6 114.2,150.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="114.2,61.5 95.8,43.1 69.8,43.1 51.4,61.5 51.4,87.5 69.8,105.8 95.8,105.8 114.2,87.5" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="176.9,124.2 158.5,105.8 132.5,105.8 114.2,124.2 114.2,150.2 132.5,168.6 158.5,168.6 176.9,150.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="176.9,61.5 158.5,43.1 132.5,43.1 114.2,61.5 114.2,87.5 132.5,105.8 158.5,105.8 176.9,87.5" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="239.7,124.2 221.3,105.8 195.3,105.8 176.9,124.2 176.9,150.2 195.3,168.6 221.3,168.6 239.7,150.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="239.7,61.5 221.3,43.1 195.3,43.1 176.9,61.5 176.9,87.5 195.3,105.8 221.3,105.8 239.7,87.5" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="302.5,124.2 284.1,105.8 258.1,105.8 239.7,124.2 239.7,150.2 258.1,168.6 284.1,168.6 302.5,150.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="302.5,61.5 284.1,43.1 258.1,43.1 239.7,61.5 239.7,87.5 258.1,105.8 284.1,105.8 302.5,87.5" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="365.2,124.2 346.8,105.8 320.8,105.8 302.5,124.2 302.5,150.2 320.8,168.6 346.8,168.6 365.2,150.2" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="365.2,61.5 346.8,43.1 320.8,43.1 302.5,61.5 302.5,87.5 320.8,105.8 346.8,105.8 365.2,87.5" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="195.3,105.8 176.9,87.5 158.5,105.8 176.9,124.2" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="258.1,105.8 239.7,87.5 221.3,105.8 239.7,124.2" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="132.5,105.8 114.2,87.5 95.8,105.8 114.2,124.2" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <polygon points="320.8,105.8 302.5,87.5 284.1,105.8 302.5,124.2" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

Exercise 11 shows why $5.5.10$ (two pentagons and a decagon: $108 + 108 + 144 = 360$) fits around one vertex but
can never be continued into a tiling.

### Other shapes that tile

Drop regularity. Which single shapes tile the plane?

- **Every triangle.** Two copies of any triangle, one turned half a turn, make a parallelogram, and parallelograms
  tile in rows.
- **Every quadrilateral**, even a concave one. Turn copies half a turn about the midpoints of the sides. At each corner
  of the tiling the four different angles of the quadrilateral meet once each, and they add to $360°$
  (Theorem 3.10), so they fit exactly. The copies repeat by sliding along the two diagonals of the original.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="Any quadrilateral tiles the plane: copies turned half a turn about the midpoints of its sides fit together, because the four different angles meet at every corner and add to 360 degrees">
  <polygon points="156,230 218,230 206,186 162,204" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="100,204 162,204 150,160 106,178" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="44,178 106,178 94,134 50,152" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="106,178 44,178 56,222 100,204" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="262,212 324,212 312,168 268,186" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="206,186 268,186 256,142 212,160" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="268,186 206,186 218,230 262,212" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="150,160 212,160 200,116 156,134" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="212,160 150,160 162,204 206,186" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="94,134 156,134 144,90 100,108" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="156,134 94,134 106,178 150,160" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="38,108 100,108 88,64 44,82" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="100,108 38,108 50,152 94,134" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="312,168 374,168 362,124 318,142" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="374,168 312,168 324,212 368,194" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="256,142 318,142 306,98 262,116" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,142 256,142 268,186 312,168" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="200,116 262,116 250,72 206,90" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="262,116 200,116 212,160 256,142" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="144,90 206,90 194,46 150,64" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="206,90 144,90 156,134 200,116" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="88,64 150,64 138,20 94,38" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="150,64 88,64 100,108 144,90" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="94,38 32,38 44,82 88,64" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="306,98 368,98 356,54 312,72" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="368,98 306,98 318,142 362,124" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="250,72 312,72 300,28 256,46" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="312,72 250,72 262,116 306,98" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="256,46 194,46 206,90 250,72" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="200,20 138,20 150,64 194,46" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="362,28 300,28 312,72 356,54" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="150,160 212,160 200,116 156,134" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
</svg>
</div>

- **Pentagons**: not all. Convex pentagons that tile fall into 15 known families. Karl Reinhardt found five in 1918;
  Richard Kershner three more in 1968; Richard James one in 1975; Marjorie Rice, an amateur mathematician working at
  her kitchen table, four more in 1976-77; Rolf Stein one in 1985; and Casey Mann, Jennifer McLoud-Mann and David Von
  Derau a fifteenth in 2015, by computer search. In 2017 Michaël Rao announced a computer-assisted proof that the list
  is complete.
- **Hexagons**: convex hexagons that tile fall into exactly three families (Reinhardt, 1918).
- **Convex polygons with seven or more sides** never tile the plane by themselves.

And a shape can tile in only strange ways. In the 1970s Roger Penrose found pairs of shapes that tile the plane but
never periodically (no tiling by them repeats by sliding). Whether a *single* shape could do that, the "einstein
problem" (German *ein Stein*, one stone), stayed open until 2023, when David Smith, Joseph Myers, Craig Kaplan and
Chaim Goodman-Strauss found the "hat", a polygon made of eight kites that tiles the plane and only aperiodically.
Chapter 10 returns to tilings through their symmetries: every periodic tiling has one of exactly 17 wallpaper groups.

## 3.5 Playfair's form of the fifth postulate and its equivalents

*Level: intermediate to advanced.*

### Euclid's version and Playfair's are the same

Euclid's fifth postulate (Chapter 1) says: if a transversal makes co-interior angles adding to *less than* $180°$ on
one side, the two lines meet on that side. Playfair's says: through a point not on a line there is at most one
parallel. They look different. In neutral geometry (all the axioms except the parallel one) they are equivalent:
each implies the other.

We need one more neutral fact.

**Lemma 3.15 (Euclid I.17).** Any two angles of a triangle add up to less than $180°$.

*Proof.* The exterior angle at $C$ is $180° - \angle C$, and by Theorem 2.2 it is larger than $\angle B$. So
$\angle B < 180° - \angle C$, that is, $\angle B + \angle C < 180°$. $\blacksquare$

**Theorem 3.16.** In neutral geometry, Euclid's fifth postulate and Playfair's axiom imply each other.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Through P there is exactly one parallel to the line l: the line m perpendicular to PQ. Any other line through P, such as m', makes an angle less than 90 degrees with PQ on one side and meets l on that side">
  <line x1="20" y1="160" x2="410" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="50" x2="410" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="50" x2="150" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="62.5" y1="11.5" x2="400" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="160,160 160,150 150,150" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="150,60 160,60 160,50" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 150 50 L 150 80 A 30 30 0 0 0 177.5 62.1 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="150" cy="50" r="3" fill="currentColor"/>
  <text x="140" y="41.2" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <circle cx="150" cy="160" r="3" fill="currentColor"/>
  <text x="140" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">Q</text>
  <circle cx="400" cy="160" r="3" fill="currentColor"/>
  <text x="400" y="165.2" text-anchor="middle" font-size="15" fill="currentColor"></text>
  <text x="25" y="44" text-anchor="middle" font-size="15" fill="currentColor">m</text>
  <text x="25" y="154" text-anchor="middle" font-size="15" fill="currentColor">ℓ</text>
  <text x="60" y="15" text-anchor="middle" font-size="15" fill="currentColor">m′</text>
</svg>
</div>

*Proof that Euclid implies Playfair.* Let $P$ be a point not on $\ell$. Drop the perpendicular $PQ$ to $\ell$, and let
$m$ be the line through $P$ perpendicular to $PQ$; it is parallel to $\ell$ (Corollary 3.2). Let $m'$ be any other
line through $P$. Then $m'$ makes an angle less than $90°$ with ray $PQ$ on one side. On that side the co-interior
angles at $P$ and $Q$ add to less than $90° + 90° = 180°$, so by Euclid's postulate $m'$ meets $\ell$. So $m$ is the
only parallel. $\blacksquare$

*Proof that Playfair implies Euclid.* Let a transversal cross $\ell$ at $Q$ and $m$ at $P$, with co-interior angles
$\alpha$ (at $P$) and $\beta$ (at $Q$) on one side, $\alpha + \beta < 180°$. Through $P$ draw the line $m^*$ making
co-interior angle $180° - \beta$ with the transversal on that side; then the alternate angles are equal, so
$m^* \parallel \ell$ (Theorem 3.1). Since $\alpha \ne 180° - \beta$, $m \ne m^*$, so by Playfair $m$ is *not* parallel
to $\ell$: they meet, at some point $R$. Which side? If $R$ were on the other side, triangle $PQR$ would have angles
$180° - \alpha$ at $P$ and $180° - \beta$ at $Q$, adding to $360° - (\alpha + \beta) > 180°$, which Lemma 3.15
forbids. So $R$ is on the side of the small angles, as Euclid says. $\blacksquare$

### A long list of disguises

Over two thousand years, mathematicians trying to *prove* the fifth postulate kept producing statements that, on
inspection, were the postulate in disguise: each is equivalent to it given the other axioms (for a few, including
Archimedes' axiom that no length is infinitely small compared with another). Here are some, with the names usually
attached to them.

1. Through a point not on a line there is exactly one parallel (Proclus in the 5th century; Playfair, 1795).
2. The angles of every triangle add to $180°$.
3. There is at least one triangle whose angles add to $180°$ (Saccheri and Legendre; this one needs Archimedes'
   axiom).
4. There exist two triangles that are similar but not congruent (John Wallis, 1663): the same shape in two sizes.
5. Every triangle has a circumscribed circle, a circle through its three vertices (Farkas Bolyai).
6. A rectangle exists (Clairaut, among others).
7. Parallel lines are everywhere the same distance apart; equivalently, the points at a fixed distance from a line,
   on one side, form a line (Proclus reports an attempt of this kind by Posidonius).
8. The Pythagorean theorem holds.
9. Through any point inside an angle there is a line meeting both arms (Legendre).

This chapter proved $1 \Rightarrow 2$ (Theorem 3.8), $1 \Rightarrow 7$ (Theorem 3.7), and with the remark on
rectangles, $1 \Rightarrow 6$. Chapter 4 proves $1 \Rightarrow 8$, and Chapter 5 proves $1 \Rightarrow 4$. The reverse
directions are harder; Chapter 15 proves several of them.

### Saccheri and the three hypotheses

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="A Saccheri quadrilateral: equal sides AD and BC perpendicular to the base AB. The summit angles at C and D are equal; Euclid's geometry makes them right angles, the hyperbolic geometry makes them acute">
  <line x1="90" y1="160" x2="330" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="90" y1="160" x2="90" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <line x1="330" y1="160" x2="330" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="90,30 102,34.4 114,38.7 126,42.7 138,46.5 150,49.8 162,52.7 174,54.9 186,56.6 198,57.7 210,58 222,57.7 234,56.6 246,54.9 258,52.7 270,49.8 282,46.5 294,42.7 306,38.7 318,34.4 330,30" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="90" y1="30" x2="330" y2="30" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="101,160 101,149 90,149" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="330,149 319,149 319,160" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="84" y1="95" x2="96" y2="95" stroke="currentColor" stroke-width="1.3"/>
  <line x1="324" y1="95" x2="336" y2="95" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="90" cy="160" r="3" fill="currentColor"/>
  <text x="78" y="169.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="330" cy="160" r="3" fill="currentColor"/>
  <text x="342" y="169.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="330" cy="30" r="3" fill="currentColor"/>
  <text x="342" y="31.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="90" cy="30" r="3" fill="currentColor"/>
  <text x="78" y="31.2" text-anchor="middle" font-size="15" fill="currentColor">D</text>
  <text x="210" y="18" text-anchor="middle" font-size="13" fill="currentColor">summit</text>
</svg>
</div>

The most determined attempt was by the Jesuit priest Girolamo Saccheri, in *Euclides ab omni naevo vindicatus*
(*Euclid freed of every flaw*, 1733). Take a segment $AB$, raise equal perpendiculars $AD$ and $BC$ on the same side,
and join $DC$. (Omar Khayyam had studied the same figure in the 11th century.) Using only neutral geometry, the two
**summit angles** at $C$ and $D$ are equal (Exercise 10). There are three possibilities: they are right, obtuse or
acute. Euclid's geometry is the hypothesis of the right angle. Saccheri showed, in neutral geometry, that whichever
hypothesis holds for one such quadrilateral holds for all, and that it decides the angle sum of every triangle: equal
to, more than, or less than $180°$. He then refuted the obtuse hypothesis (it contradicts the infinite length of
lines). For the acute hypothesis he derived theorem after strange theorem, found no contradiction, and finally
declared it "repugnant to the nature of the straight line", which was not a proof. (In the figure the summit is drawn
curved, to suggest the acute case; in that geometry the straight segment $DC$ really does make acute angles with the
sides.)

Johann Heinrich Lambert, in a work written in 1766 and published after his death, went further down the same road and
noticed that under the acute hypothesis the angle deficit of a triangle is proportional to its area, just as the
angle excess is on a sphere, as if the plane were a sphere of imaginary radius. He was very close. The final step,
taken in the 1820s and 1830s by Gauss, János Bolyai and Nikolai Lobachevsky, was to stop looking for a contradiction
and accept that there is none: the acute hypothesis gives a perfectly consistent geometry, the **hyperbolic**
geometry. The parallel postulate cannot be proved because it is not true in every geometry that satisfies the other
axioms. That story, and the proof that the new geometry is consistent, are the subject of Chapters 15 and 17.

## Check yourself

??? question "1. Two parallel lines are cut by a transversal and one of the eight angles is 72°. What are the other seven?"

    Vertical angles and corresponding angles give three more of $72°$, and their linear-pair partners are
    $180° - 72° = 108°$. So four angles are $72°$ and four are $108°$.

??? question "2. Lines ℓ and m are cut by a transversal; a pair of corresponding angles are (4x + 9)° and (6x − 21)°. For which x are ℓ and m parallel, and what are the angles then?"

    By Theorems 3.1 and 3.3, the lines are parallel exactly when corresponding angles are equal:
    $4x + 9 = 6x - 21$, $x = 15$, and the angles are $69°$ (and $111°$).

??? question "3. The angles of a triangle are x, 2x and 3x. Find them. What kind of triangle is it?"

    $6x = 180°$, so $x = 30°$, and the angles are $30°, 60°, 90°$: a right triangle (the "30-60-90 triangle", half
    of an equilateral triangle).

??? question "4. In the bent-path figure, α = 35° and β = 48°. What is the angle at the bend? If instead the bend is a right angle and α is three times β, find α and β."

    The bend is $\alpha + \beta = 35° + 48° = 83°$. In the second case $\alpha + \beta = 90°$ and $\alpha = 3\beta$,
    so $4\beta = 90°$, $\beta = 22.5°$ and $\alpha = 67.5°$.

??? question "5. What is the sum of the interior angles of a 12-gon? Each interior angle of a regular 12-gon?"

    $(12 - 2) \cdot 180° = 1800°$. Each angle of the regular one is $1800/12 = 150°$ (exterior angle $30°$).

??? question "6. Each interior angle of a regular polygon is 162°. How many sides does it have, and how many diagonals?"

    Exterior angle $180 - 162 = 18°$, so $n = 360/18 = 20$. Diagonals: $20 \cdot 17 / 2 = 170$.

??? question "7. Prove that the angles of any quadrilateral, convex or concave, add up to 360°."

    By Lemma 3.11 a quadrilateral has a diagonal inside it. It cuts the quadrilateral into two triangles whose angles
    together make up the four angles of the quadrilateral. Each triangle contributes $180°$ (Theorem 3.8), so the
    total is $360°$. (For a concave quadrilateral, only the diagonal from the reflex vertex lies inside; the other
    one would not work.) $\blacksquare$

??? question "8. Prove that a parallelogram with one right angle is a rectangle, and that a parallelogram with equal diagonals is a rectangle."

    Consecutive angles of a parallelogram add to $180°$, so the neighbours of a right angle are right angles, and
    the opposite angle equals it: four right angles. For the second part: if $ABCD$ is a parallelogram with
    $AC = BD$, then triangles $ABC$ and $BAD$ have $AB$ shared, $BC = AD$ (opposite sides) and $AC = BD$, so they are
    congruent by SSS and $\angle ABC = \angle BAD$. These are consecutive angles, adding to $180°$, so each is
    $90°$. $\blacksquare$

??? question "9. Squares and regular octagons meet at a vertex as 4.8.8 (two of the three polygons are the same). Find every way to surround a vertex with three regular polygons, at least two of them alike."

    Two $n$-gons and one $m$-gon fill the vertex when $2\left(180 - \frac{360}{n}\right) + \left(180 - \frac{360}{m}\right) = 360$.
    Dividing by $180$ and rearranging gives $\frac{4}{n} + \frac{2}{m} = 1$. Try each $n$: $n = 3$ is impossible
    ($4/3 > 1$); $n = 4$ needs $2/m = 0$, impossible; $n = 5$ gives $m = 10$; $n = 6$ gives $m = 6$; $n = 7$ gives
    $m = 14/3$, no; $n = 8$ gives $m = 4$; $n = 9$ gives $m = 18/5$, no; $n = 10$ gives $m = 10/3$, no; $n = 11$ gives
    $m = 22/7$, no; $n = 12$ gives $m = 3$; and $n \ge 13$ needs $2/m > 9/13$, so $m < 3$, impossible. The types are
    $5.5.10$, $6.6.6$, $4.8.8$ and $3.12.12$. **Check** $3.12.12$: $60 + 150 + 150 = 360$. Of these, $6.6.6$, $4.8.8$
    and $3.12.12$ extend to tilings; $5.5.10$ does not (Exercise 11).

??? question "10. In a Saccheri quadrilateral ABCD (AD = BC, both perpendicular to AB), prove without the parallel postulate that the summit angles at C and D are equal."

    Triangles $DAB$ and $CBA$ have $DA = CB$, right angles at $A$ and $B$, and $AB$ shared, so they are congruent by
    SAS, and $DB = CA$. Then triangles $ADC$ and $BCD$ have $AD = BC$, $DC$ shared and $AC = BD$, so they are
    congruent by SSS, and $\angle ADC = \angle BCD$. $\blacksquare$ (All the tools used, SAS and SSS, are neutral.)

??? question "11. Show that the vertex type 5.5.10 (two regular pentagons and a regular decagon) cannot be continued to a tiling of the plane."

    Suppose every vertex is of type 5.5.10, and look at one pentagon $T$. At each of its corners there is exactly one
    other pentagon and one decagon. The two edges of $T$ at that corner are shared with these two neighbours, one
    each, so going around $T$ the neighbours across its edges alternate: pentagon, decagon, pentagon, decagon, ...
    But $T$ has five edges, an odd number, so the alternation cannot close up. Contradiction. $\blacksquare$

??? question "12. On Mars (radius 3389.5 km), a triangle of geodesic paths encloses 1000 km². By how much does its angle sum exceed 180°? How big would the triangle have to be for the excess to be 1°?"

    By Girard's theorem (Chapter 16) the excess is $A / R^2 = 1000 / 3389.5^2 \approx 8.70 \times 10^{-5}$ radians,
    which is about $0.0050°$, or $18''$. For an excess of $1° = \pi/180$ radians we need
    $A = R^2 \pi / 180 \approx 3389.5^2 \times 0.017453 \approx 200\,500\ \text{km}^2$, about the area of a triangle
    with sides near 680 km.

## What you learned

- A transversal makes corresponding, alternate and co-interior angles; equal alternate angles force parallel lines in
  any geometry, but the converse needs the parallel postulate.
- Playfair's axiom (at most one parallel through a point) is the form of the fifth postulate we use; it gives the
  properties of parallelograms and rectangles and the constant distance between parallel lines.
- The angles of a triangle add to $180°$; an exterior angle equals the sum of the two remote interior angles. Both
  fail on a sphere, where a triangle can have three right angles.
- An $n$-gon's angles add to $(n - 2) \cdot 180°$, for concave polygons too, by triangulating; exterior angles of a
  convex polygon add to $360°$; the tips of any five-pointed star add to $180°$.
- The equation $(k - 2)(n - 2) = 4$ shows that only triangles, squares and hexagons give regular tilings; there are
  eight semi-regular tilings; every triangle and every quadrilateral tiles, and in 2023 a single aperiodic tile was
  found.
- Euclid's fifth postulate and Playfair's axiom are equivalent; many other statements (the angle sum, similar
  triangles, rectangles, Pythagoras) are disguised forms of it, and the failure to prove it led to hyperbolic
  geometry.

**Next:** [Chapter 4](04-Area-and-Pythagoras.md), area: what it means, the formulas for the basic shapes proved by
cutting and rearranging, and the theorem of Pythagoras, proved several ways.

## Further reading

- Euclid, *Elements*, Book I, propositions 27 to 32, with Heath's commentary (1908), which surveys the ancient and
  early modern attempts on the fifth postulate.
- Marvin Jay Greenberg, *Euclidean and Non-Euclidean Geometries: Development and History*, 4th edition, 2008,
  chapters 4 to 6: neutral geometry, the equivalents of the parallel postulate, and Saccheri and Lambert.
- Jeremy Gray, *Ideas of Space: Euclidean, Non-Euclidean, and Relativistic*, 2nd edition, Oxford, 1989. The history
  of the parallel postulate, told by a historian of mathematics.
- Branko Grünbaum and G. C. Shephard, *Tilings and Patterns*, W. H. Freeman, 1987. The standard reference on tilings.
- Doris Schattschneider, "Tiling the plane with congruent pentagons", *Mathematics Magazine* 51, 1978, on Marjorie
  Rice and the pentagon families.
- David Smith, Joseph Samuel Myers, Craig S. Kaplan and Chaim Goodman-Strauss, "An aperiodic monotile",
  *Combinatorial Theory* 4(1), 2024 (preprint 2023).
- On this site: the Topics lessons [Angles with parallel lines](../../topics/geometry/level-4/04-parallel-line-angles.md),
  [Angles inside and outside any polygon](../../topics/geometry/level-4/05-polygon-angles.md),
  [Regular polygons](../../topics/geometry/level-2/01-regular-polygons.md),
  [Tiling the floor](../../topics/geometry/level-2/05-tiling-the-floor.md) and
  [Beyond Euclid: geometry on a sphere](../../topics/geometry/level-8/06-sphere-geometry.md); and the Algebra book's
  [Chapter 8](../algebra/08-Sequences-Series-and-Induction.md) for proof by induction.
