# 12. Triangle centres and classical theorems

*Draw any triangle and its three medians: they meet in a point. Draw the three altitudes: they meet too. So do the
perpendicular bisectors of the sides, and the angle bisectors. Three lines meeting in one point is a coincidence that
should not happen by chance, and in a triangle it happens again and again. This chapter explains those coincidences and
then the deeper ones they lead to: three of the centres always lie on one line (Euler's line), nine special points
always lie on one circle, and the feet of three perpendiculars from a point on the circumcircle always lie on one line.
You will prove the classical theorems of Ceva, Menelaus, Stewart and Ptolemy, meet Morley's astonishing equilateral
triangle, and finish with the style of argument used in mathematical olympiads.*

!!! abstract "In this chapter"
    **You will learn:**

    - the four classical centres (centroid, circumcentre, incentre, orthocentre), with concurrency proofs and formulas
      for $R$ and $r$
    - the Euler line through $O$, $G$, $H$, with $OG : GH = 1 : 2$, two proofs
    - the nine-point circle, with a complete proof, and Feuerbach's theorem
    - Ceva's and Menelaus' theorems with signed ratios, and how to use them
    - Stewart's theorem, Apollonius' median formula and the bisector length
    - Ptolemy's theorem for cyclic quadrilaterals, the Simson line, and Morley's trisector theorem
    - olympiad techniques: angle chasing, the incentre-excentre lemma, Euler's formula $OI^2 = R(R - 2r)$

    **You need:** [Chapter 2](02-Triangles-and-Congruence.md) (congruence), [Chapter 5](05-Similarity.md) (similar
    triangles), [Chapter 6](06-Circles.md) (inscribed angles, cyclic quadrilaterals, power of a point),
    [Chapter 7](07-Trigonometry.md) (laws of sines and cosines) and [Chapter 9](09-Vectors.md) (vector proofs).

    **Levels:** all sections are advanced. 12.1 to 12.3 are the core; 12.4 to 12.6 are the classical toolkit; 12.7
    and 12.8 reach olympiad level.

## 12.1 The four classical centres

*Level: advanced.*

Throughout, the triangle is $ABC$, with sides $a = BC$, $b = CA$, $c = AB$ opposite the corners, angles $A$, $B$, $C$,
area $K$, and **semiperimeter** $s = \tfrac12(a + b + c)$. Our running example is the **13-14-15 triangle**,
$B = (0, 0)$, $C = (14, 0)$, $A = (5, 12)$: then $a = 14$, $b = \sqrt{81 + 144} = 15$, $c = \sqrt{25 + 144} = 13$,
$s = 21$, and the area is $\tfrac12 \cdot 14 \cdot 12 = 84$.

Lines (or points) are **concurrent** if they pass through one point, **collinear** if they lie on one line.

### The circumcentre

**Lemma (perpendicular bisector).** A point $P$ is equally far from $A$ and $B$ if and only if it lies on the
perpendicular bisector of $AB$.

*Proof.* Let $M$ be the midpoint of $AB$. If $P$ is on the perpendicular bisector, triangles $PMA$ and $PMB$ are
congruent by SAS ($MA = MB$, right angles at $M$, $PM$ shared), so $PA = PB$. Conversely if $PA = PB$, triangles $PMA$
and $PMB$ are congruent by SSS, so the angles at $M$ are equal, and as they add to $180°$ each is $90°$. $\square$

**Theorem.** The perpendicular bisectors of the three sides are concurrent, at the **circumcentre** $O$, the centre of
the unique circle through $A$, $B$, $C$ (the **circumcircle**, radius $R$).

*Proof.* The bisectors of $AB$ and $BC$ are perpendicular to two non-parallel lines, so they are not parallel; let them
meet at $O$. By the lemma $OA = OB$ and $OB = OC$. So $OA = OC$, and by the lemma again $O$ is on the bisector of
$CA$. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 235" role="img" aria-label="Left: the perpendicular bisectors of the sides meet at the circumcentre O, the centre of the circle through the three corners. Right: the angle bisectors meet at the incentre I, the centre of the circle touching the three sides.">
  <polygon points="87,27.2 29.5,165.2 190.5,165.2" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="110" cy="117.7" r="93.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <line x1="34.9" y1="86.4" x2="133.4" y2="127.4" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="60.6,90.6 66.1,92.9 63.8,98.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="110" y1="190.5" x2="110" y2="92.4" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="104,165.2 104,159.2 110,159.2" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="159" y1="81" x2="89.8" y2="132.9" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="142.3,101 137.6,104.6 134,99.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="110" cy="117.7" r="4" fill="currentColor"/>
  <text x="122" y="113.7" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">O</text>
  <text x="87" y="19.2" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <text x="19.5" y="177.2" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <text x="200.5" y="177.2" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <polygon points="295,37 237.5,175 398.5,175" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="306.5" cy="129" r="46" fill="#7ccf9a" fill-opacity="0.15" stroke="currentColor" stroke-width="1.3"/>
  <line x1="295" y1="37" x2="312.2" y2="175" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="237.5" y1="175" x2="344.8" y2="103.4" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="398.5" y1="175" x2="265.3" y2="108.4" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="306.5" cy="129" r="4" fill="currentColor"/>
  <text x="294.5" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">I</text>
  <text x="295" y="29" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <text x="227.5" y="187" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <text x="408.5" y="187" text-anchor="middle" font-size="13" fill="currentColor">C</text>
</svg>
</div>

**The circumradius.** By the inscribed angle theorem ([Chapter 6](06-Circles.md)), the chord $BC$ subtends angle $A$ at
the circumference and $2A$ at the centre, which gives $a = 2R\sin A$: the **extended law of sines**,
$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$. Since $K = \tfrac12 bc\sin A$, eliminating $\sin A$ gives

$$
R = \frac{abc}{4K}.
$$

**Example.** For 13-14-15, $R = \frac{13 \cdot 14 \cdot 15}{4 \cdot 84} = \frac{2730}{336} = \frac{65}{8} = 8.125$. In
coordinates, $O$ lies on $x = 7$ (the bisector of $BC$), and $OB = OA$ gives $49 + y^2 = 4 + (y - 12)^2$, so
$y = \tfrac{33}{8}$: $O = (7, 4.125)$. **Check:** $OB^2 = 49 + 17.015625 = 66.015625 = 8.125^2$.

The circumcentre is inside the triangle for an acute triangle, on the hypotenuse (at its midpoint) for a right
triangle, and outside for an obtuse one.

### The incentre

**Lemma (angle bisector).** A point inside an angle is equally far from its two sides if and only if it lies on the
bisector of the angle.

*Proof.* Drop perpendiculars from $P$ to the two sides of the angle at $A$, with feet $X$, $Y$. If $P$ is on the
bisector, triangles $AXP$ and $AYP$ have equal angles at $A$, right angles at $X$ and $Y$, and the shared hypotenuse
$AP$: congruent (AAS), so $PX = PY$. Conversely, if $PX = PY$, the right triangles share the hypotenuse and a leg, so they
are congruent (by Pythagoras the third sides match, then SSS), and the angles at $A$ are equal. $\square$

**Theorem.** The three internal angle bisectors are concurrent, at the **incentre** $I$, the centre of the circle
touching all three sides (the **incircle**, radius $r$).

*Proof.* The bisectors from $A$ and $B$ meet at a point $I$ inside the triangle. By the lemma, $I$ is equally far from
$AB$ and $AC$, and from $BA$ and $BC$; so it is equally far from $CA$ and $CB$, and by the lemma it is on the bisector
from $C$. The common distance $r$ is the radius of a circle touching all three sides. $\square$

**The inradius.** Join $I$ to the corners: the triangle splits into $IBC$, $ICA$, $IAB$, with bases $a$, $b$, $c$ and the
same height $r$. So $K = \tfrac12 r(a + b + c)$, that is

$$
r = \frac{K}{s}.
$$

**Example.** For 13-14-15, $r = 84/21 = 4$. The incentre is the average of the corners weighted by the opposite sides,
$I = \frac{aA + bB + cC}{a + b + c}$ (exercise 3 explains why): here $I = \frac{14(5, 12) + 15(0, 0) + 13(14, 0)}{42} = (6, 4)$.
**Check:** its height above $BC$ is 4, which is $r$.

**Excentres.** The bisector of the angle at $A$ and the *external* bisectors at $B$ and $C$ also meet, at the
**excentre** $I_A$, the centre of the **excircle** that touches $BC$ and the extensions of the other two sides. The
same splitting argument gives its radius $r_A = \frac{K}{s - a}$.

### The centroid

The medians meet at the **centroid** $G$, two thirds of the way along each, at $G = \tfrac13(A + B + C)$. This was
proved with vectors in [Chapter 9](09-Vectors.md), 9.7, and follows again from Ceva's theorem in 12.4. For 13-14-15,
$G = (\tfrac{19}{3}, 4)$.

### The orthocentre

**Theorem.** The three altitudes are concurrent, at the **orthocentre** $H$.

*Proof.* Through each corner draw the line parallel to the opposite side. These three lines form a larger triangle
$A'B'C'$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Triangle ABC inside the larger triangle formed by the lines through each corner parallel to the opposite side. The altitudes of ABC are the perpendicular bisectors of the large triangle, so they meet at one point H.">
  <polygon points="244.3,228 330.2,22 89.8,22" fill="#7ccf9a" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="210,22 167.1,125 287.2,125" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210" y1="22" x2="210" y2="125" stroke="#eea66f" stroke-width="1.4"/>
  <polyline points="204,125 204,119 210,119" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="167.1" y1="125" x2="244" y2="67.3" stroke="#eea66f" stroke-width="1.4"/>
  <polyline points="247.6,72.1 242.8,75.7 239.2,70.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="287.2" y1="125" x2="184.9" y2="82.3" stroke="#eea66f" stroke-width="1.4"/>
  <polyline points="187.2,76.8 192.7,79.1 190.4,84.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="92.8" r="4" fill="currentColor"/>
  <text x="222" y="90.8" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text>
  <text x="198" y="18" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <text x="155.1" y="139" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <text x="299.2" y="139" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <text x="244.3" y="244" text-anchor="middle" font-size="13" fill="currentColor">A′</text>
  <text x="342.2" y="22" text-anchor="middle" font-size="13" fill="currentColor">B′</text>
  <text x="77.8" y="22" text-anchor="middle" font-size="13" fill="currentColor">C′</text>
</svg>
</div>

The quadrilateral $AB'CB$ has both pairs of opposite sides parallel ($AB' \parallel BC$ and $B'C \parallel AB$, by
construction), so it is a parallelogram and $AB' = BC$. In the same way $AC'BC$ is a parallelogram and $AC' = BC$.
Hence $A$ is the midpoint of $B'C'$. Similarly $B$ and $C$ are the midpoints of the other two sides of
the big triangle. The altitude from $A$ is perpendicular to $BC$, hence to $B'C'$, and passes through its midpoint $A$:
it is the perpendicular bisector of $B'C'$. So the three altitudes of $ABC$ are the three perpendicular bisectors of
$A'B'C'$, which are concurrent (the circumcentre theorem). $\square$

A neat proof, which turns one concurrence into another. (A third proof, with dot products, is in
[Chapter 9](09-Vectors.md), 9.7.)

**Example.** For 13-14-15, the altitude from $A$ is $x = 5$. The altitude from $B$ is perpendicular to $CA$, whose
direction is $(-9, 12)$, so it is the line $-9x + 12y = 0$, $y = \tfrac34 x$. They meet at $H = (5, \tfrac{15}{4})$.

**Orthocentric systems.** If $H$ is the orthocentre of $ABC$, then $A$ is the orthocentre of $HBC$ (the line $AH$ is
perpendicular to $BC$, and so on). Each of the four points $A$, $B$, $C$, $H$ is the orthocentre of the other three.

### Thousands of centres

Why stop at four? Clark Kimberling's online *Encyclopedia of Triangle Centers* lists tens of thousands of points
defined from a triangle in a way that does not depend on labelling or scale. The four classical ones are entries $X(1)$
(incentre), $X(2)$ (centroid), $X(3)$ (circumcentre) and $X(4)$ (orthocentre). The surprise of the next sections is how
these centres relate to each other.

## 12.2 The Euler line

*Level: advanced.*

Look at the 13-14-15 numbers: $O = (7, \tfrac{33}{8})$, $G = (\tfrac{19}{3}, 4)$, $H = (5, \tfrac{15}{4})$. Then
$G - O = (-\tfrac23, -\tfrac18)$ and $H - G = (-\tfrac43, -\tfrac14)$, exactly twice as much. The three points are on a
line, with $G$ a third of the way from $O$ to $H$. This is always so.

**Theorem (Euler, 1765).** In every triangle, $O$, $G$, $H$ are collinear, and $\overrightarrow{OH} = 3\,\overrightarrow{OG}$;
that is, $G$ lies between $O$ and $H$ with $OG : GH = 1 : 2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 290" role="img" aria-label="A triangle with circumcentre O, centroid G, orthocentre H on one straight line, the Euler line. The nine-point circle, centred at N half-way between O and H, passes through the three midpoints of the sides, the three feet of the altitudes, and the midpoints of AH, BH, CH.">
  <polygon points="95.2,26 27.4,245.1 392.6,245.1" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="152.6" cy="167.3" r="96.7" fill="#7ccf9a" fill-opacity="0.12" stroke="currentColor" stroke-width="1.4"/>
  <line x1="95.2" y1="26" x2="95.2" y2="245.1" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.7"/>
  <line x1="27.4" y1="245.1" x2="155.9" y2="70.7" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.7"/>
  <line x1="392.6" y1="245.1" x2="59.3" y2="142" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.7"/>
  <line x1="26.4" y1="136" x2="290.3" y2="201.5" stroke="#eea66f" stroke-width="2"/>
  <circle cx="210" cy="245.1" r="3" fill="currentColor"/>
  <circle cx="243.9" cy="135.6" r="3" fill="currentColor"/>
  <circle cx="61.3" cy="135.6" r="3" fill="currentColor"/>
  <circle cx="95.2" cy="245.1" r="3" fill="currentColor"/>
  <circle cx="155.9" cy="70.7" r="3" fill="currentColor"/>
  <circle cx="59.3" cy="142" r="3" fill="currentColor"/>
  <circle cx="95.2" cy="89.5" r="3" fill="currentColor"/>
  <circle cx="61.3" cy="199.1" r="3" fill="currentColor"/>
  <circle cx="243.9" cy="199.1" r="3" fill="currentColor"/>
  <circle cx="210" cy="181.6" r="4" fill="currentColor"/>
  <text x="220" y="175.6" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor">O</text>
  <circle cx="171.7" cy="172.1" r="4" fill="currentColor"/>
  <text x="167.7" y="162.1" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor">G</text>
  <circle cx="95.2" cy="153.1" r="4" fill="currentColor"/>
  <text x="83.2" y="157.1" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor">H</text>
  <circle cx="152.6" cy="167.3" r="4" fill="currentColor"/>
  <text x="154.6" y="183.3" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor">N</text>
  <text x="95.2" y="18" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <text x="17.4" y="257.1" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <text x="402.6" y="257.1" text-anchor="middle" font-size="13" fill="currentColor">C</text>
</svg>
</div>

*Proof 1 (vectors).* Put the origin at $O$. Then $|\mathbf{a}| = |\mathbf{b}| = |\mathbf{c}| = R$. Define the point
$H'$ by $\mathbf{h}' = \mathbf{a} + \mathbf{b} + \mathbf{c}$. Then

$$
(\mathbf{h}' - \mathbf{a})\cdot(\mathbf{b} - \mathbf{c}) = (\mathbf{b} + \mathbf{c})\cdot(\mathbf{b} - \mathbf{c}) = |\mathbf{b}|^2 - |\mathbf{c}|^2 = R^2 - R^2 = 0,
$$

so $H'$ is on the altitude from $A$. By symmetry it is on all three altitudes: $H' = H$. So, with origin $O$,
$\mathbf{h} = \mathbf{a} + \mathbf{b} + \mathbf{c} = 3\mathbf{g}$. $\square$

*Proof 2 (a homothety).* The **medial triangle** has the midpoints of the sides as corners. The dilation with centre $G$
and ratio $-\tfrac12$ maps $A$ to the midpoint of $BC$ (since $G$ is two thirds along the median), and likewise for $B$
and $C$: it maps $ABC$ to its medial triangle. It maps lines to parallel lines, so it maps the altitudes of $ABC$ to the
lines through the midpoints perpendicular to the sides, that is, to the perpendicular bisectors of $ABC$. So it maps $H$
to $O$. A dilation with centre $G$ moves each point along the line through $G$, and with ratio $-\tfrac12$:
$\overrightarrow{GO} = -\tfrac12\overrightarrow{GH}$. $\square$

The line through them is the **Euler line**. Leonhard Euler found it while computing the centres of a triangle in
coordinates, in a paper written in the 1760s; he did not mention the nine-point circle of the next section, which came
half a century later. If any two of $O$, $G$, $H$ coincide, the triangle is equilateral (exercise 12 proves a related
fact), and then all the centres coincide.

A useful by-product of proof 1: with origin $O$, $\mathbf{h} - \mathbf{a} = \mathbf{b} + \mathbf{c} = 2\,\mathbf{m}_a$,
where $M_a$ is the midpoint of $BC$. So $AH = 2\,OM_a$: **the distance from a corner to the orthocentre is twice the
distance from the circumcentre to the opposite side.**

## 12.3 The nine-point circle

*Level: advanced.*

**Theorem.** In any triangle, these nine points lie on one circle:

- the midpoints $M_a$, $M_b$, $M_c$ of the three sides;
- the feet $D$, $E$, $F$ of the three altitudes;
- the midpoints of $AH$, $BH$, $CH$.

Its centre $N$ is the midpoint of $OH$, on the Euler line, and its radius is $R/2$.

*Proof.* Put the origin at $O$, so $\mathbf{h} = \mathbf{a} + \mathbf{b} + \mathbf{c}$ (12.2), and let
$\mathbf{n} = \tfrac12\mathbf{h} = \tfrac12(\mathbf{a} + \mathbf{b} + \mathbf{c})$, the midpoint of $OH$.

- The midpoint of $BC$ is $\tfrac12(\mathbf{b} + \mathbf{c})$, and $\tfrac12(\mathbf{b} + \mathbf{c}) - \mathbf{n} = -\tfrac12\mathbf{a}$,
  of length $R/2$.
- The midpoint of $AH$ is $\tfrac12(\mathbf{a} + \mathbf{h})$, and $\tfrac12(\mathbf{a} + \mathbf{h}) - \mathbf{n} = \tfrac12\mathbf{a}$,
  of length $R/2$.

So both are on the circle with centre $N$ and radius $R/2$, and they are at opposite ends of a diameter (the vectors
from $N$ are $\mp\tfrac12\mathbf{a}$). The same holds for the other two sides and the other two corners: six points so
far.

Now the foot $D$ of the altitude from $A$. It lies on line $BC$, which passes through $M_a$, and on the altitude $AH$,
which passes through the midpoint of $AH$. These two lines are perpendicular. So $D$ sees the segment from $M_a$ to the
midpoint of $AH$ at a right angle, and that segment is a diameter of our circle. By the converse of Thales' theorem
([Chapter 6](06-Circles.md)), $D$ is on the circle. (If $D$ coincides with $M_a$, which happens when $AB = AC$, it is on
the circle anyway.) The same argument places $E$ and $F$. $\square$

**Example.** For 13-14-15, $N = \tfrac12\big((7, \tfrac{33}{8}) + (5, \tfrac{15}{4})\big) = (6, \tfrac{63}{16})$,
and the radius is $\tfrac{65}{16} = 4.0625$. **Check:** the foot of the altitude from $A$ is $D = (5, 0)$, and
$ND^2 = 1 + (\tfrac{63}{16})^2 = \tfrac{256 + 3969}{256} = \tfrac{4225}{256} = (\tfrac{65}{16})^2$.

**Feuerbach's theorem.** The nine-point circle touches the incircle (from inside it) and the three excircles (from
outside). Karl Wilhelm Feuerbach proved this in 1822; the nine-point circle itself had been found by Brianchon and
Poncelet a year earlier. Proofs by computation are long; the slickest uses inversion, the tool of
[Chapter 13](13-Inversion-and-Complex-Geometry.md) (Coxeter and Greitzer give it in full). For our example the theorem predicts $NI = \tfrac R2 - r$: indeed
$I = (6, 4)$ and $N = (6, \tfrac{63}{16})$, so $NI = \tfrac{1}{16}$, and $\tfrac{65}{16} - 4 = \tfrac{1}{16}$. The
circles touch.

## 12.4 Ceva and Menelaus

*Level: advanced.*

Many questions ask: do three lines meet? Are three points on a line? Ceva's and Menelaus' theorems turn both questions
into a single product of ratios.

### Signed ratios

For points $X$, $Y$ on a line and a point $P$ on the same line, the **signed ratio** $\frac{XP}{PY}$ is the ratio of
lengths, taken **positive** if $P$ is between $X$ and $Y$ and **negative** if it is outside the segment. In vectors:
$\overrightarrow{XP} = t\,\overrightarrow{PY}$ defines $t = \frac{XP}{PY}$. Each value $t \ne -1$ gives exactly one
point $P$ (solve $\mathbf{p} - \mathbf{x} = t(\mathbf{y} - \mathbf{p})$: $\mathbf{p} = \frac{\mathbf{x} + t\mathbf{y}}{1 + t}$),
and $t = -1$ would be the "point at infinity" ([Chapter 18](18-Projective-Geometry.md)).

A **cevian** is a line through a corner of the triangle and a point on the opposite side line.

### Ceva's theorem

**Theorem (Ceva).** Let $D$, $E$, $F$ be points on the lines $BC$, $CA$, $AB$, none of them a corner. The cevians
$AD$, $BE$, $CF$ are concurrent (or all parallel) if and only if

$$
\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = 1.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="Triangle ABC with three lines from the corners, AD, BE and CF, all passing through one point P. Ceva's theorem: BD over DC times CE over EA times AF over FB equals 1.">
  <polygon points="169.1,28 87.3,212 332.7,212" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="169.1" y1="28" x2="208.5" y2="212" stroke="#eea66f" stroke-width="1.6"/>
  <line x1="87.3" y1="212" x2="242.5" y2="110.6" stroke="#eea66f" stroke-width="1.6"/>
  <line x1="332.7" y1="212" x2="131.9" y2="111.6" stroke="#eea66f" stroke-width="1.6"/>
  <circle cx="169.1" cy="28" r="3.5" fill="currentColor"/>
  <text x="169.1" y="20" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <circle cx="87.3" cy="212" r="3.5" fill="currentColor"/>
  <text x="77.3" y="224" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <circle cx="332.7" cy="212" r="3.5" fill="currentColor"/>
  <text x="342.7" y="224" text-anchor="middle" font-size="14" fill="currentColor">C</text>
  <circle cx="208.5" cy="212" r="3.5" fill="currentColor"/>
  <text x="208.5" y="228" text-anchor="middle" font-size="14" fill="currentColor">D</text>
  <circle cx="242.5" cy="110.6" r="3.5" fill="currentColor"/>
  <text x="254.5" y="108.6" text-anchor="middle" font-size="14" fill="currentColor">E</text>
  <circle cx="131.9" cy="111.6" r="3.5" fill="currentColor"/>
  <text x="119.9" y="109.6" text-anchor="middle" font-size="14" fill="currentColor">F</text>
  <circle cx="193.6" cy="142.5" r="3.5" fill="currentColor"/>
  <text x="203.6" y="136.5" text-anchor="middle" font-size="14" fill="currentColor">P</text>
</svg>
</div>

*Proof (for $P$ inside the triangle; the general case uses signed areas in exactly the same way).* Suppose the cevians
meet at $P$. Triangles $ABD$ and $ADC$ have the same height from $A$, so their areas are in the ratio $BD : DC$. So are
the areas of $PBD$ and $PDC$. Subtracting, $\frac{[ABP]}{[ACP]} = \frac{BD}{DC}$, where $[XYZ]$ means area. Likewise
$\frac{CE}{EA} = \frac{[BCP]}{[BAP]}$ and $\frac{AF}{FB} = \frac{[CAP]}{[CBP]}$. Multiply: every area cancels, and the
product is 1.

Conversely, suppose the product is 1. Let $AD$ and $BE$ meet at $P$, and let $CP$ meet $AB$ at $F'$. By the first part,
the product with $F'$ is 1, so $\frac{AF'}{F'B} = \frac{AF}{FB}$, and since a signed ratio determines the point,
$F' = F$. $\square$

**Applications.** Each gives a one-line concurrency proof.

- **Medians:** $D$, $E$, $F$ are midpoints, each ratio is 1, the product is 1. The centroid exists.
- **Angle bisectors:** the **angle bisector theorem** says the bisector from $A$ divides $BC$ in the ratio of the
  adjacent sides, $\frac{BD}{DC} = \frac{c}{b}$. (*Proof:* triangles $ABD$ and $ADC$ have the same height from $A$, so
  their areas are as $BD : DC$; but $D$ is equally far from $AB$ and $AC$, so their areas are also as $c : b$.) So
  $\frac{BD}{DC} = \frac cb$, $\frac{CE}{EA} = \frac ac$, $\frac{AF}{FB} = \frac ba$, and the product is 1.
- **The Gergonne point:** let the incircle touch $BC$, $CA$, $AB$ at $D$, $E$, $F$. Two tangents from a point to a circle
  are equal ([Chapter 6](06-Circles.md)), so $AE = AF = x$, $BF = BD = y$, $CD = CE = z$. The product is
  $\frac yz \cdot \frac zx \cdot \frac xy = 1$, so $AD$, $BE$, $CF$ are concurrent, at the **Gergonne point**.
  (Solving $y + z = a$, $z + x = b$, $x + y = c$ gives $x = s - a$, $y = s - b$, $z = s - c$.)

Giovanni Ceva published the theorem in 1678. (It had been known in the eleventh century to the Arab mathematician
Yusuf al-Mu'taman ibn Hud, in a work rediscovered only in modern times.)

### Menelaus' theorem

**Theorem (Menelaus).** Let $D$, $E$, $F$ be points on the lines $BC$, $CA$, $AB$, none a corner. They are collinear if
and only if

$$
\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = -1.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="Triangle ABC cut by a straight line that crosses side AB at F, side CA at E, and the extension of BC at D. Menelaus' theorem: BD over DC times CE over EA times AF over FB equals minus 1.">
  <polygon points="159.1,26 104.3,172.1 268.7,172.1" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="268.7" y1="172.1" x2="315.7" y2="172.1" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="329.9" y1="179.1" x2="92.6" y2="62.5" stroke="#eea66f" stroke-width="2"/>
  <circle cx="159.1" cy="26" r="3.5" fill="currentColor"/>
  <text x="159.1" y="18" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <circle cx="104.3" cy="172.1" r="3.5" fill="currentColor"/>
  <text x="94.3" y="184.1" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <circle cx="268.7" cy="172.1" r="3.5" fill="currentColor"/>
  <text x="268.7" y="188.1" text-anchor="middle" font-size="14" fill="currentColor">C</text>
  <circle cx="315.7" cy="172.1" r="3.5" fill="currentColor"/>
  <text x="315.7" y="188.1" text-anchor="middle" font-size="14" fill="currentColor">D</text>
  <circle cx="241.3" cy="135.6" r="3.5" fill="currentColor"/>
  <text x="251.3" y="129.6" text-anchor="middle" font-size="14" fill="currentColor">E</text>
  <circle cx="137.2" cy="84.4" r="3.5" fill="currentColor"/>
  <text x="125.2" y="82.4" text-anchor="middle" font-size="14" fill="currentColor">F</text>
</svg>
</div>

The sign makes sense: a straight line that crosses a triangle cuts either two sides internally and the third
externally, or all three externally. Either way an odd number of the ratios is negative.

*Proof.* Suppose $D$, $E$, $F$ lie on a line $\ell$. For each point $X$ let $d(X)$ be its signed distance from $\ell$
(positive on one side, negative on the other). The corners are not on $\ell$, so $d(A)$, $d(B)$, $d(C)$ are not zero.
Since $D$ is on line $BC$ with $\overrightarrow{BD} = t\,\overrightarrow{DC}$, and signed distance to a line changes
linearly along a line, $d(D) - d(B) = t\,(d(C) - d(D))$. But $d(D) = 0$, so $t = -\frac{d(B)}{d(C)}$. Similarly for the
others:

$$
\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB} = \left(-\frac{d(B)}{d(C)}\right)\left(-\frac{d(C)}{d(A)}\right)\left(-\frac{d(A)}{d(B)}\right) = -1.
$$

The converse follows as in Ceva: let line $EF$ meet $BC$ at $D'$; the product with $D'$ is $-1$, so $D' = D$. (If $EF$
is parallel to $BC$, the product cannot be $-1$; check this as part of exercise 4.) $\square$

Menelaus of Alexandria (around 100 CE) stated the theorem, and a version for triangles on a sphere, in his *Sphaerica*;
it became a basic tool of Greek and Arabic astronomy.

**Example.** In triangle $ABC$, $F$ is on $AB$ with $AF : FB = 1 : 2$, and $E$ on $CA$ with $CE : EA = 3 : 1$. Where does
line $FE$ meet line $BC$? Menelaus: $\frac{BD}{DC}\cdot 3 \cdot \frac12 = -1$, so $\frac{BD}{DC} = -\frac23$. A negative
ratio: $D$ is outside $BC$, on the side of $B$ (the smaller part), with $BD : DC = 2 : 3$, so $BD = 2\,BC$.
**Check** with coordinates $A = (1, 5)$, $B = (0, 0)$, $C = (6, 0)$: $F = (\tfrac23, \tfrac{10}{3})$,
$E = (\tfrac74, \tfrac54)$, and the line through them meets the $x$-axis at $(-12, 0)$, at distance $12 = 2 \times 6$
from $B$.

Together, the two theorems give a systematic method ("mass points" is a popular shortcut built on them) for problems
about ratios of segments.

## 12.5 Stewart and Apollonius

*Level: advanced.*

How long is a cevian? If $D$ is on $BC$ with $BD = m$, $DC = n$ (so $a = m + n$), what is $d = AD$?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="Triangle ABC with a line from A to a point D on BC. BD = m, DC = n, AD = d; the sides are a = BC, b = CA, c = AB.">
  <polygon points="182.7,28 114.3,192 305.7,192" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="182.7" y1="28" x2="237.3" y2="192" stroke="#eea66f" stroke-width="2"/>
  <circle cx="182.7" cy="28" r="3.5" fill="currentColor"/>
  <text x="182.7" y="20" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <circle cx="114.3" cy="192" r="3.5" fill="currentColor"/>
  <text x="104.3" y="204" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <circle cx="305.7" cy="192" r="3.5" fill="currentColor"/>
  <text x="315.7" y="204" text-anchor="middle" font-size="14" fill="currentColor">C</text>
  <circle cx="237.3" cy="192" r="3.5" fill="currentColor"/>
  <text x="237.3" y="208" text-anchor="middle" font-size="14" fill="currentColor">D</text>
  <text x="175.8" y="208" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">m</text>
  <text x="271.5" y="208" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">n</text>
  <text x="220" y="114" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">d</text>
  <text x="138.5" y="110" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">c</text>
  <text x="254.2" y="108" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
</svg>
</div>

**Theorem (Stewart).**

$$
b^2 m + c^2 n = a\,(d^2 + mn).
$$

(A mnemonic: "a man and his dad put a bomb in the sink": $man + dad = bmb + cnc$, which is the same equation.)

*Proof.* Let $\theta = \angle ADB$, so $\angle ADC = 180° - \theta$ and $\cos\angle ADC = -\cos\theta$. The law of
cosines ([Chapter 7](07-Trigonometry.md)) in triangles $ABD$ and $ADC$:

$$
c^2 = m^2 + d^2 - 2md\cos\theta, \qquad b^2 = n^2 + d^2 + 2nd\cos\theta.
$$

Multiply the first by $n$, the second by $m$, and add; the cosine terms cancel:

$$
c^2 n + b^2 m = mn(m + n) + d^2(m + n) = a(mn + d^2). \qquad\square
$$

Matthew Stewart published it in 1746.

**Apollonius' theorem (the median length).** For the median, $m = n = \tfrac a2$, and Stewart gives
$\tfrac a2(b^2 + c^2) = a(m_a^2 + \tfrac{a^2}{4})$, so

$$
b^2 + c^2 = 2m_a^2 + \tfrac12 a^2, \qquad m_a^2 = \frac{2b^2 + 2c^2 - a^2}{4}.
$$

This is the parallelogram law of [Chapter 9](09-Vectors.md) in triangle form. **Example:** in 13-14-15, the median from
$A$ has $m_a^2 = \frac{2\cdot225 + 2\cdot169 - 196}{4} = \frac{592}{4} = 148$, so $m_a = 2\sqrt{37} \approx 12.17$.
**Check:** from $A = (5, 12)$ to the midpoint $(7, 0)$ of $BC$, $2^2 + 12^2 = 148$.

**The bisector length.** For the angle bisector, the angle bisector theorem gives $m = \frac{ac}{b + c}$,
$n = \frac{ab}{b + c}$. Putting these into Stewart and simplifying:

$$
d^2 = bc\left(1 - \frac{a^2}{(b + c)^2}\right).
$$

**Example:** in 13-14-15, the bisector from $A$ has $d^2 = 195\left(1 - \frac{196}{784}\right) = 195 \cdot \tfrac34 = 146.25$.
**Check:** it meets $BC$ at $BD = 14\cdot\frac{13}{28} = 6.5$, the point $(6.5, 0)$, and from $(5, 12)$ that is
$1.5^2 + 12^2 = 146.25$.

**The circle of Apollonius.** Another result with his name: for two points $A \ne B$ and a ratio $k \ne 1$, the points
$P$ with $PA = k\,PB$ form a circle. (With $A = (0, 0)$, $B = (1, 0)$: $x^2 + y^2 = k^2((x - 1)^2 + y^2)$ is, after
dividing by $1 - k^2$, the equation of a circle.) Its centre is on line $AB$, and it cuts $AB$ at the two points that
divide $AB$ internally and externally in the ratio $k : 1$. Apollonius of Perga (third century BCE) studied it in a
lost work known through Pappus.

## 12.6 Ptolemy's theorem

*Level: advanced.*

A quadrilateral is **cyclic** if its four corners lie on a circle. Its opposite angles add to $180°$
([Chapter 6](06-Circles.md)). There is also a beautiful relation among its sides and diagonals.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="A quadrilateral ABCD with its four corners on a circle, and its two diagonals AC and BD. Ptolemy's theorem: AC times BD equals AB times CD plus AD times BC.">
  <circle cx="210" cy="120" r="100" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="306.6,145.9 256.9,31.7 125.2,67 148.4,198.8" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.8"/>
  <line x1="306.6" y1="145.9" x2="125.2" y2="67" stroke="#eea66f" stroke-width="1.8"/>
  <line x1="256.9" y1="31.7" x2="148.4" y2="198.8" stroke="#eea66f" stroke-width="1.8"/>
  <circle cx="306.6" cy="145.9" r="3.5" fill="currentColor"/>
  <text x="320.1" y="154.5" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <circle cx="256.9" cy="31.7" r="3.5" fill="currentColor"/>
  <text x="263.5" y="24.3" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <circle cx="125.2" cy="67" r="3.5" fill="currentColor"/>
  <text x="113.3" y="64.6" text-anchor="middle" font-size="14" fill="currentColor">C</text>
  <circle cx="148.4" cy="198.8" r="3.5" fill="currentColor"/>
  <text x="139.8" y="214.8" text-anchor="middle" font-size="14" fill="currentColor">D</text>
</svg>
</div>

**Theorem (Ptolemy).** If $ABCD$ is a cyclic quadrilateral (corners in this order round the circle), then

$$
AC \cdot BD = AB \cdot CD + AD \cdot BC.
$$

The product of the diagonals equals the sum of the products of opposite sides.

*Proof.* Choose the point $K$ on the diagonal $AC$ with $\angle ABK = \angle DBC$. (Turn the ray $BA$ towards $BC$
through the angle $\angle DBC$.)

- Triangles $ABK$ and $DBC$ are similar: $\angle ABK = \angle DBC$ by construction, and $\angle BAK = \angle BAC = \angle BDC$
  (inscribed angles on the same arc $BC$). So $\frac{AK}{AB} = \frac{DC}{DB}$, that is, $AK \cdot BD = AB \cdot CD$.
- Triangles $KBC$ and $ABD$ are similar: $\angle KBC = \angle ABC - \angle ABK = \angle ABC - \angle DBC = \angle ABD$,
  and $\angle BCK = \angle BCA = \angle BDA$ (same arc $AB$). So $\frac{KC}{BC} = \frac{AD}{BD}$, that is,
  $KC \cdot BD = AD \cdot BC$.

Add: $(AK + KC)\cdot BD = AB\cdot CD + AD\cdot BC$, and $AK + KC = AC$. $\square$

**Example.** The points $A = (5, 0)$, $B = (3, 4)$, $C = (-3, 4)$, $D = (-4, -3)$ are on the circle $x^2 + y^2 = 25$, in
order. Then $AB = \sqrt{20}$, $BC = 6$, $CD = \sqrt{50}$, $DA = \sqrt{90}$, $AC = \sqrt{80}$, $BD = \sqrt{98}$.
Ptolemy: $AC \cdot BD = \sqrt{7840} = 28\sqrt{10}$, and $AB\cdot CD + AD\cdot BC = \sqrt{1000} + 6\sqrt{90} = 10\sqrt{10} + 18\sqrt{10} = 28\sqrt{10}$.

**Consequences.**

- **Pythagoras.** For a rectangle with sides $a$, $b$ and diagonal $c$: $c \cdot c = a\cdot a + b \cdot b$.
- **The addition formula.** Take a circle of diameter 1 and the cyclic quadrilateral with $AC$ a diameter and $B$, $D$
  on opposite sides, with $\angle BAC = \alpha$, $\angle CAD = \beta$. A chord subtending an inscribed angle $\theta$ in a
  circle of diameter 1 has length $\sin\theta$. Then $BC = \sin\alpha$, $AB = \cos\alpha$, $CD = \sin\beta$,
  $AD = \cos\beta$, $BD = \sin(\alpha + \beta)$, $AC = 1$, and Ptolemy says
  $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$. Ptolemy, in the *Almagest* (second century CE),
  used exactly this kind of argument to compute his **table of chords**, the ancestor of the sine table.
- **Van Schooten's theorem.** If $ABC$ is equilateral and $P$ is on the arc $BC$ not containing $A$, then
  $PA = PB + PC$. (Ptolemy on $ABPC$: $PA \cdot BC = PB \cdot AC + PC \cdot AB$, and all sides equal.)

**Ptolemy's inequality.** For *any* four points, $AC \cdot BD \le AB\cdot CD + AD \cdot BC$, with equality exactly when
$ABCD$ is cyclic in this order (or the points are on a line in this order). The cleanest proof uses inversion and is
given in [Chapter 13](13-Inversion-and-Complex-Geometry.md).

## 12.7 The Simson line and Morley's theorem

*Level: advanced.*

### Directed angles

Angle chasing in circles often splits into cases depending on the picture: is the point inside or outside, are the
angles equal or supplementary? A tool that removes the cases: the **directed angle** $\measuredangle(\ell, m)$ between
two lines is the angle through which you must turn $\ell$ anticlockwise to make it parallel to $m$, measured **modulo
$180°$**. Then the inscribed angle theorem and its converse take one form for every picture:

**Four points $A$, $B$, $C$, $D$ (no three collinear) are concyclic if and only if $\measuredangle(CA, CB) = \measuredangle(DA, DB)$.**

(In an ordinary picture, this says either "equal angles on the same side" or "supplementary angles on opposite sides";
working modulo $180°$ turns both into one statement.) Similarly, three points $X$, $Y$, $Z$ are collinear if and only if
$\measuredangle(YX, YP) = \measuredangle(YZ, YP)$ for any point $P$ off the line, since both say lines $YX$ and $YZ$ are
the same.

### The Simson line

**Theorem.** Let $P$ be a point and $L$, $M$, $N$ the feet of the perpendiculars from $P$ to the lines $BC$, $CA$,
$AB$. Then $L$, $M$, $N$ are collinear if and only if $P$ lies on the circumcircle of $ABC$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="A triangle ABC with its circumcircle and a point P on the circle. The feet L, M, N of the perpendiculars from P to the three side lines lie on one straight line, the Simson line of P.">
  <circle cx="210.3" cy="130" r="100" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="168.1,39.4 119.7,172.3 301,172.3" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="176.1" y1="224" x2="176.1" y2="172.3" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/>
  <polyline points="176.1,178.3 170.1,178.3 170.1,172.3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="176.1" y1="224" x2="264.4" y2="135.7" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/>
  <polyline points="260.1,139.9 264.4,144.2 268.6,139.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="176.1" y1="224" x2="109.7" y2="199.8" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/>
  <polyline points="115.3,201.8 117.4,196.2 111.7,194.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="109.7" y1="199.8" x2="168.1" y2="39.4" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="176.1" y1="172.3" x2="301" y2="172.3" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="91.1" y1="207.5" x2="283" y2="128" stroke="#eea66f" stroke-width="2"/>
  <circle cx="168.1" cy="39.4" r="3.5" fill="currentColor"/>
  <text x="168.1" y="31.4" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <circle cx="119.7" cy="172.3" r="3.5" fill="currentColor"/>
  <text x="107.7" y="180.3" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <circle cx="301" cy="172.3" r="3.5" fill="currentColor"/>
  <text x="311" y="184.3" text-anchor="middle" font-size="14" fill="currentColor">C</text>
  <circle cx="176.1" cy="224" r="3.5" fill="currentColor"/>
  <text x="188.1" y="220" text-anchor="middle" font-size="14" fill="currentColor">P</text>
  <circle cx="176.1" cy="172.3" r="3.5" fill="currentColor"/>
  <text x="180.1" y="164.3" text-anchor="middle" font-size="14" fill="currentColor">L</text>
  <circle cx="264.4" cy="135.7" r="3.5" fill="currentColor"/>
  <text x="250.4" y="133.7" text-anchor="middle" font-size="14" fill="currentColor">M</text>
  <circle cx="109.7" cy="199.8" r="3.5" fill="currentColor"/>
  <text x="97.7" y="207.8" text-anchor="middle" font-size="14" fill="currentColor">N</text>
</svg>
</div>

*Proof.* Since $\angle PMA = \angle PNA = 90°$, the points $M$ and $N$ lie on the circle with diameter $PA$ (Thales):
$P, A, M, N$ are concyclic. Likewise $\angle PMC = \angle PLC = 90°$ puts $P, C, M, L$ on the circle with diameter
$PC$. Now, by the concyclic criterion in each circle,

$$
\measuredangle(MN, MP) = \measuredangle(AN, AP) = \measuredangle(AB, AP), \qquad \measuredangle(ML, MP) = \measuredangle(CL, CP) = \measuredangle(CB, CP).
$$

$L$, $M$, $N$ are collinear if and only if $\measuredangle(MN, MP) = \measuredangle(ML, MP)$, that is, if and only if
$\measuredangle(AB, AP) = \measuredangle(CB, CP)$, which by the criterion again means $A$, $B$, $C$, $P$ are concyclic.
$\square$

The line is called the **Simson line** of $P$, after Robert Simson, but it does not appear in his work; it was
published by William Wallace in 1797, and some books call it the Wallace line. Among its further properties: the Simson
line of $P$ bisects the segment $PH$ (at a point of the nine-point circle), and the Simson lines of two diametrically
opposite points are perpendicular.

### Morley's theorem

In 1899 Frank Morley discovered a fact that had escaped two thousand years of triangle geometry.

**Theorem (Morley).** In any triangle, the points where adjacent angle trisectors meet form an equilateral triangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="A triangle with each angle cut into three equal parts. The trisectors next to each side meet in pairs, and the three meeting points form an equilateral triangle: Morley's theorem.">
  <polygon points="142.2,24 74.5,216 345.5,216" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74.5" y1="216" x2="175.3" y2="172.1" stroke="#eea66f" stroke-width="1"/>
  <line x1="74.5" y1="216" x2="147.4" y2="137.7" stroke="#eea66f" stroke-width="1"/>
  <line x1="345.5" y1="216" x2="175.3" y2="172.1" stroke="#eea66f" stroke-width="1"/>
  <line x1="345.5" y1="216" x2="191.1" y2="130.7" stroke="#eea66f" stroke-width="1"/>
  <line x1="142.2" y1="24" x2="191.1" y2="130.7" stroke="#eea66f" stroke-width="1"/>
  <line x1="142.2" y1="24" x2="147.4" y2="137.7" stroke="#eea66f" stroke-width="1"/>
  <polygon points="175.3,172.1 191.1,130.7 147.4,137.7" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.8"/>
  <text x="142.2" y="16" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <text x="64.5" y="228" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <text x="355.5" y="228" text-anchor="middle" font-size="14" fill="currentColor">C</text>
</svg>
</div>

"Adjacent" means: the two trisectors (one from $B$, one from $C$) nearest to side $BC$ meet at a point, and similarly for
the other two sides; these three points are the corners of an equilateral triangle, whatever the original triangle. Its
side is $8R\sin\frac A3\sin\frac B3\sin\frac C3$.

**Example.** For 13-14-15 the angles are about $A = 59.49°$, $B = 67.38°$, $C = 53.13°$, $R = 8.125$, and the formula gives a side
of about $2.5626$. Computing the three meeting points directly from coordinates and measuring gives the same
$2.5626$ for all three sides.

*The idea of a proof.* Direct angle chasing is hard because trisecting is not a ruler-and-compass operation. The most
famous proof, due to John Conway, runs **backwards**: start with an equilateral triangle, and attach to its sides
triangles with carefully chosen angles (built from $\alpha = A/3$, $\beta = B/3$, $\gamma = C/3$ and $60°$), so that the
pieces fit together into a triangle similar to $ABC$, in which the equilateral triangle is visibly the Morley triangle.
The only work is checking that the angles at each joint add up correctly, which uses $\alpha + \beta + \gamma = 60°$.
Since the construction produces a triangle with any prescribed angles, and similar triangles have similar Morley
configurations, the theorem follows. A trigonometric proof (computing each side with the law of sines and finding the
formula above, symmetric in $A, B, C$) is longer but completely mechanical; Coxeter and Greitzer give one (see
Further reading).

## 12.8 Olympiad style

*Level: advanced (olympiad).*

The International Mathematical Olympiad, held every year since 1959, sets one or two geometry problems each time, and
national olympiads many more. The theorems of this chapter are their raw material. Here are some of the standard
moves, with examples.

**Toolkit.**

- **Angle chasing:** use inscribed angles, cyclic quadrilaterals and directed angles to show angles equal.
- **Find the circle:** many problems become easy once you notice four points are concyclic (right angles over a common
  segment, equal angles over a common chord).
- **Power of a point** ([Chapter 6](06-Circles.md)): lengths from a point to a circle multiply to a constant.
- **Spiral similarity** ([Chapter 10](10-Transformations-and-Symmetry.md)): two similar triangles sharing a corner.
- **Computation:** coordinates, vectors (Chapter 9), complex numbers ([Chapter 13](13-Inversion-and-Complex-Geometry.md)),
  trigonometry, or barycentric coordinates (weights like the formula for $I$ above). Slower but certain.

**Problem 1.** Show that the reflection of the orthocentre $H$ in the side $BC$ lies on the circumcircle.

*Solution.* (Acute triangle; directed angles handle the rest.) Let $D$, $E$, $F$ be the feet of the altitudes. In
quadrilateral $AEHF$ the angles at $E$ and $F$ are right, so $\angle EHF = 180° - A$, and $\angle BHC = \angle EHF$
(vertical angles) $= 180° - A$. Reflecting in $BC$ gives a point $H'$ on the other side of $BC$ from $A$, with
$\angle BH'C = \angle BHC = 180° - A$. So $\angle BAC + \angle BH'C = 180°$, and since $A$ and $H'$ are on opposite
sides of $BC$, the quadrilateral $ABH'C$ is cyclic. $\square$ (Exercise 8 proves a companion fact with vectors: the
reflection of $H$ in the *midpoint* of $BC$ is also on the circumcircle.)

**Problem 2 (the incentre-excentre lemma).** The bisector of angle $A$ meets the circumcircle again at $M$. Show that
$MB = MC = MI = MI_A$, where $I_A$ is the excentre opposite $A$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 300" role="img" aria-label="Triangle ABC with circumcircle. The bisector of angle A meets the circumcircle again at M, the midpoint of arc BC. The circle centred at M through B and C also passes through the incentre I and the excentre opposite A.">
  <circle cx="210" cy="105.4" r="85.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="182.8,24.4 133.9,144 286.1,144" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="210" cy="190.7" r="89.3" fill="#7ccf9a" fill-opacity="0.1" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="182.8" y1="24.4" x2="224.4" y2="278.8" stroke="#eea66f" stroke-width="1.6"/>
  <circle cx="182.8" cy="24.4" r="3.5" fill="currentColor"/>
  <text x="182.8" y="16.4" text-anchor="middle" font-size="14" fill="currentColor">A</text>
  <circle cx="133.9" cy="144" r="3.5" fill="currentColor"/>
  <text x="121.9" y="148" text-anchor="middle" font-size="14" fill="currentColor">B</text>
  <circle cx="286.1" cy="144" r="3.5" fill="currentColor"/>
  <text x="298.1" y="148" text-anchor="middle" font-size="14" fill="currentColor">C</text>
  <circle cx="195.6" cy="102.6" r="3.5" fill="currentColor"/>
  <text x="207.6" y="102.6" text-anchor="middle" font-size="14" fill="currentColor">I</text>
  <circle cx="210" cy="190.7" r="3.5" fill="currentColor"/>
  <text x="222" y="196.7" text-anchor="middle" font-size="14" fill="currentColor">M</text>
  <circle cx="224.4" cy="278.8" r="3.5" fill="currentColor"/>
  <text x="238.4" y="282.8" text-anchor="middle" font-size="14" fill="currentColor">Iₐ</text>
</svg>
</div>

*Solution.* $M$ is the midpoint of arc $BC$ (equal inscribed angles $\tfrac A2$ cut equal arcs), so $MB = MC$. For $MI$:
the angle $\angle MBI = \angle MBC + \angle CBI = \tfrac A2 + \tfrac B2$ (since $\angle MBC = \angle MAC = \tfrac A2$,
same arc). The exterior angle of triangle $ABI$ at $I$ is $\angle BIM = \angle BAI + \angle ABI = \tfrac A2 + \tfrac B2$.
So triangle $MBI$ has equal angles at $B$ and $I$, and is isosceles: $MI = MB$. Finally, the internal and external
bisectors at $B$ are perpendicular, so $\angle IBI_A = 90°$, and $B$ lies on the circle with diameter $II_A$. Its
centre is the point on line $AI$ equally far from $I$ and $B$, which is $M$. So $MI_A = MI$. $\square$

**Problem 3 (Euler's distance formula).** Prove $OI^2 = R(R - 2r)$, and deduce $R \ge 2r$.

*Solution.* The line $AI$ meets the circumcircle at $A$ and $M$. The **power** of $I$ with respect to the circumcircle
([Chapter 6](06-Circles.md)) is $R^2 - OI^2$ (as $I$ is inside), and it equals $IA \cdot IM$. Now
$IA = \frac{r}{\sin(A/2)}$ (from the right triangle formed by $A$, $I$ and the point where the incircle touches $AB$), and
$IM = MB = 2R\sin\frac A2$ (Problem 2, then the extended law of sines in triangle $ABM$, where $MB$ subtends the angle
$\tfrac A2$ at $A$). So $R^2 - OI^2 = \frac{r}{\sin(A/2)}\cdot 2R\sin\frac A2 = 2Rr$. $\square$

Since $OI^2 \ge 0$, $R \ge 2r$, **Euler's inequality**, with equality exactly when $O = I$, which forces the triangle to
be equilateral. **Check** on 13-14-15: $O = (7, \tfrac{33}{8})$, $I = (6, 4)$, so $OI^2 = 1 + \tfrac{1}{64} = \tfrac{65}{64}$;
and $R(R - 2r) = \tfrac{65}{8}\cdot\tfrac18 = \tfrac{65}{64}$.

**Problem 4.** The incircle touches $BC$ at $D$. Show $BD = s - b$, and find $D$ for 13-14-15.

*Solution.* From the Gergonne computation in 12.4, $BD = y = s - b$. For 13-14-15, $BD = 21 - 15 = 6$, so $D = (6, 0)$,
directly below $I = (6, 4)$, as it must be.

**Try it in Python.** When a conjecture appears, test it numerically before trying to prove it:

```python
from math import dist
def circumcentre(A, B, C):
    (ax, ay), (bx, by), (cx, cy) = A, B, C
    d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by))
    ux = ((ax*ax + ay*ay) * (by - cy) + (bx*bx + by*by) * (cy - ay) + (cx*cx + cy*cy) * (ay - by)) / d
    uy = ((ax*ax + ay*ay) * (cx - bx) + (bx*bx + by*by) * (ax - cx) + (cx*cx + cy*cy) * (bx - ax)) / d
    return (ux, uy)

A, B, C = (5, 12), (0, 0), (14, 0)
O = circumcentre(A, B, C)
H = (A[0] + B[0] + C[0] - 2 * O[0], A[1] + B[1] + C[1] - 2 * O[1])   # h = a + b + c with origin O
N = ((O[0] + H[0]) / 2, (O[1] + H[1]) / 2)
print(O, H, N, dist(N, (5, 0)), dist(O, A) / 2)   # foot of altitude is on the nine-point circle
```

It prints $O = (7, 4.125)$, $H = (5, 3.75)$, $N = (6, 3.9375)$ and two equal radii $4.0625$.

## Check yourself

??? question "1. For the right triangle $B = (0, 0)$, $C = (8, 0)$, $A = (0, 6)$, find $G$, $O$, $H$, $I$, $R$ and $r$, and check the Euler line relation."

    $G = (\tfrac83, 2)$. The hypotenuse is $AC$, of length 10, so $O$ is its midpoint $(4, 3)$ and $R = 5$. The
    altitudes from $A$ and $C$ are the legs, so $H = B = (0, 0)$. Area 24, $s = 12$, $r = 2$, and $I = (2, 2)$ (two units
    from both legs). Euler: $\tfrac13(2O + H) = \tfrac13(8, 6) = (\tfrac83, 2) = G$. Also $R = 5 \ge 2r = 4$, and
    $OI^2 = 4 + 1 = 5 = R(R - 2r) = 5 \cdot 1$.

??? question "2. For 13-14-15, find the three exradii and check that $\frac1r = \frac1{r_A} + \frac1{r_B} + \frac1{r_C}$. Then prove this identity in general."

    $r_A = \frac{K}{s - a} = \frac{84}{7} = 12$, $r_B = \frac{84}{6} = 14$, $r_C = \frac{84}{8} = 10.5$. Then
    $\frac1{12} + \frac1{14} + \frac{1}{10.5} = \frac{7 + 6 + 8}{84} = \frac{21}{84} = \frac14 = \frac1r$. In general,
    $\frac{s - a}{K} + \frac{s - b}{K} + \frac{s - c}{K} = \frac{3s - 2s}{K} = \frac sK = \frac1r$.

??? question "3. Explain why the incentre is $\frac{aA + bB + cC}{a + b + c}$, using the angle bisector theorem."

    The bisector from $A$ meets $BC$ at $D$ with $BD : DC = c : b$, so $D = \frac{bB + cC}{b + c}$ (section formula,
    [Chapter 9](09-Vectors.md)). On the bisector from $B$, the triangle $ABD$ has its bisector from $B$ meeting $AD$ at
    $I$ with $AI : ID = BA : BD = c : \frac{ac}{b + c} = (b + c) : a$. So
    $I = \frac{aA + (b + c)D}{a + b + c} = \frac{aA + bB + cC}{a + b + c}$.

??? question "4. Use Ceva's theorem to prove the altitudes of an acute triangle are concurrent. Then show that if $E$, $F$ divide $CA$, $AB$ in the same ratio ($\frac{CE}{EA} \cdot \frac{AF}{FB} = 1$), line $EF$ is parallel to $BC$."

    The foot $D$ of the altitude from $A$ has $BD = c\cos B$, $DC = b\cos C$; similarly $CE = a\cos C$, $EA = c\cos A$,
    $AF = b\cos A$, $FB = a\cos B$. The product is
    $\frac{c\cos B}{b\cos C}\cdot\frac{a\cos C}{c\cos A}\cdot\frac{b\cos A}{a\cos B} = 1$. For the second part:
    $\frac{AF}{FB} = \frac{EA}{CE}$ means $F$ and $E$ divide $AB$ and $AC$ in the same ratio from $A$, so
    $AF : AB = AE : AC$ and $EF \parallel BC$ (the intercept theorem, [Chapter 5](05-Similarity.md)). Then Menelaus'
    product would need $\frac{BD}{DC} = -1$, which no point gives: consistent with the line never meeting $BC$.

??? question "5. In triangle $ABC$, $F$ is the midpoint of $AB$ and $E$ divides $CA$ with $CE : EA = 2 : 1$. Line $FE$ meets line $BC$ at $D$. Find $BD/DC$."

    Menelaus: $\frac{BD}{DC}\cdot 2 \cdot 1 = -1$, so $\frac{BD}{DC} = -\frac12$. $D$ is outside, beyond $B$, with
    $BD : DC = 1 : 2$; so $BD = BC$ ($D$ is the reflection of $C$ in $B$). Check with $A = (0, 3)$, $B = (0, 0)$,
    $C = (3, 0)$: $F = (0, 1.5)$, $E = (1, 2)$; the line through them is $y = 1.5 + 0.5x$, meeting $y = 0$ at $x = -3$.
    $D = (-3, 0)$, and $BD = 3 = BC$.

??? question "6. A triangle has sides $a = 7$, $b = 6$, $c = 5$. Find the length of the median to side $a$, and prove that the squares of the three medians add up to $\frac34(a^2 + b^2 + c^2)$."

    $m_a^2 = \frac{2\cdot36 + 2\cdot25 - 49}{4} = \frac{73}{4}$, so $m_a = \frac{\sqrt{73}}{2} \approx 4.27$. Adding the
    three formulas: $\frac{(2b^2 + 2c^2 - a^2) + (2c^2 + 2a^2 - b^2) + (2a^2 + 2b^2 - c^2)}{4} = \frac{3(a^2 + b^2 + c^2)}{4}$.

??? question "7. Prove van Schooten's theorem: if $ABC$ is equilateral and $P$ is on the arc $BC$ of its circumcircle not containing $A$, then $PA = PB + PC$."

    $ABPC$ is a cyclic quadrilateral with corners in that order, diagonals $AP$ and $BC$. Ptolemy:
    $AP\cdot BC = AB \cdot PC + AC \cdot BP$. With $AB = BC = CA$, divide by the side: $AP = PC + PB$.

??? question "8. With the origin at $O$, show that the reflection of $H$ in the midpoint of $BC$ is the point diametrically opposite $A$ on the circumcircle."

    With origin $O$, $\mathbf{h} = \mathbf{a} + \mathbf{b} + \mathbf{c}$ and the midpoint of $BC$ is
    $\mathbf{m} = \tfrac12(\mathbf{b} + \mathbf{c})$. The reflection of $H$ in $M$ is
    $2\mathbf{m} - \mathbf{h} = \mathbf{b} + \mathbf{c} - \mathbf{a} - \mathbf{b} - \mathbf{c} = -\mathbf{a}$, which is
    on the circumcircle ($|-\mathbf{a}| = R$), opposite $A$.

??? question "9. For which points $P$ on the circumcircle is the Simson line the side line $BC$ itself?"

    If the Simson line is $BC$, then $M$ (on $CA$) and $N$ (on $AB$) are also on $BC$, so $M = C$ and $N = B$. Then
    $PC \perp CA$ and $PB \perp AB$, so $\angle ACP = \angle ABP = 90°$, and $AP$ is a diameter (Thales): $P$ is the
    point diametrically opposite $A$. (Then $L$ is the foot from $P$ to $BC$.)

??? question "10. Find the side of the Morley triangle of an equilateral triangle with side 1, and check it against a direct argument."

    $R = \frac{1}{\sqrt3}$ and all angles are $60°$, so the side is $\frac{8}{\sqrt3}\sin^3 20° \approx 4.6188 \times 0.04001 \approx 0.1848$.
    Directly: by symmetry the Morley triangle is centred at the centre of the triangle. The trisectors from $B$ and $C$
    nearest $BC$ make $20°$ with $BC$ and meet at a point $X$ above the midpoint of $BC$ at height
    $\tfrac12\tan20° \approx 0.18199$. The centre is at height $\frac{1}{2\sqrt3} \approx 0.28868$, so $X$ is
    $0.10669$ from the centre, which is the circumradius of the Morley triangle; its side is
    $\sqrt3 \times 0.10669 \approx 0.1848$. The two answers agree.

??? question "11. Prove that $AH = 2\,OM_a$, where $M_a$ is the midpoint of $BC$, and use it to show $AH = 2R|\cos A|$."

    With origin $O$: $\mathbf{h} - \mathbf{a} = \mathbf{b} + \mathbf{c} = 2\mathbf{m}_a$. So $\overrightarrow{AH} = 2\,\overrightarrow{OM_a}$,
    and $AH = 2\,OM_a$. In the right triangle $OM_aB$, the angle at $O$ is half the central angle $\angle BOC = 2A$, so
    $OM_a = R|\cos A|$ (the absolute value covers obtuse $A$, where $O$ is on the other side of $BC$). So
    $AH = 2R|\cos A|$. For 13-14-15: $\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{198}{390} = \frac{33}{65}$, so
    $AH = 2\cdot\frac{65}{8}\cdot\frac{33}{65} = \frac{33}{4} = 8.25$; and indeed $A = (5, 12)$, $H = (5, 3.75)$.

??? question "12. Prove: if the circumcentre and the incentre of a triangle coincide, the triangle is equilateral."

    If $O = I$, the point $O$ lies on the bisector of angle $A$ and is equally far from $B$ and $C$. Drop the
    perpendicular from $O$ to $BC$: it lands at the midpoint $M_a$ (perpendicular bisector) and also at the point where
    the incircle touches $BC$, so $BD = DC$, that is $s - b = s - c$, so $b = c$. The same for the other sides gives
    $a = b = c$. (This is the equality case of Euler's inequality $R \ge 2r$.)

## What you learned

- Perpendicular bisectors meet at the circumcentre $O$ ($R = \frac{abc}{4K}$), angle bisectors at the incentre $I$
  ($r = \frac Ks$), medians at the centroid $G$, altitudes at the orthocentre $H$; each concurrence has a short proof.
- Euler line: $O$, $G$, $H$ are collinear with $\overrightarrow{OH} = 3\,\overrightarrow{OG}$; with origin $O$,
  $\mathbf{h} = \mathbf{a} + \mathbf{b} + \mathbf{c}$.
- The nine-point circle passes through three midpoints, three feet of altitudes and three midpoints of $AH$, $BH$,
  $CH$; its centre bisects $OH$ and its radius is $R/2$; it touches the incircle and excircles (Feuerbach).
- Ceva: cevians concur iff the product of signed ratios is $1$; Menelaus: points are collinear iff it is $-1$.
- Stewart's theorem gives cevian lengths, including medians (Apollonius) and bisectors.
- Ptolemy: in a cyclic quadrilateral, $AC\cdot BD = AB\cdot CD + AD\cdot BC$; it contains Pythagoras and the sine
  addition formula.
- Simson line: feet of perpendiculars from $P$ are collinear iff $P$ is on the circumcircle; Morley: adjacent
  trisectors meet in an equilateral triangle.
- Olympiad tools: angle chasing, hidden circles, the incentre-excentre lemma, power of a point, and $OI^2 = R(R - 2r)$.

**Next:** [Chapter 13](13-Inversion-and-Complex-Geometry.md), two powerful new tools: complex numbers as coordinates, and
inversion in a circle, which turns circles into lines and gives a short proof of Ptolemy's theorem and inequality.

## Further reading

- H. S. M. Coxeter and S. L. Greitzer, *Geometry Revisited*, 1967. The classic short introduction to this whole
  chapter: centres, Ceva, Menelaus, the nine-point circle, Simson, Ptolemy, Morley.
- R. A. Johnson, *Advanced Euclidean Geometry* (originally *Modern Geometry*), 1929. The encyclopaedia of triangle and
  circle theorems.
- E. Chen, *Euclidean Geometry in Mathematical Olympiads*, 2016. Directed angles, the incentre-excentre lemma, and the
  olympiad toolkit in depth.
- A. S. Posamentier, *Advanced Euclidean Geometry*, 2002.
- C. Kimberling, *Encyclopedia of Triangle Centers*, online, continually updated since the 1990s.
- L. Euler, "Solutio facilis problematum quorundam geometricorum difficillimorum", *Novi Commentarii academiae
  scientiarum Petropolitanae* 11, 1767 (the Euler line).
- On this site: the Topics lessons [How to write a geometric proof](../../topics/geometry/level-8/01-geometric-proof.md)
  and [Circle theorems](../../topics/geometry/level-7/06-circle-theorems.md); the
  [Algebra book](../algebra/index.md), whose [Chapter 9](../algebra/09-Complex-Numbers.md) prepares the complex
  numbers used in the next chapter.
