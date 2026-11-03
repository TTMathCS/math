# 10. Transformations and symmetry

*Euclid proved two triangles congruent by imagining one picked up and laid on the other. That act of moving a figure
without bending it is what this chapter studies directly. What motions of the plane keep all distances the same? We
will find that there are only four kinds, and prove it with nothing but mirrors. Then we turn the question round: given
a figure, which motions leave it looking unchanged? The answer is its symmetry group, and for flowers, snowflakes,
friezes and wallpapers the possible answers turn out to be strictly limited: two infinite families for a bounded
figure, exactly 7 for a strip, exactly 17 for a wallpaper. Along the way you will prove why a crystal can have 4-fold
or 6-fold symmetry but never 5-fold, and end with the wider families of similarity and affine maps.*

!!! abstract "In this chapter"
    **You will learn:**

    - the four kinds of isometry of the plane (translation, rotation, reflection, glide reflection) in pictures,
      coordinates and complex numbers
    - why every isometry is a product of at most three reflections, and hence one of the four kinds
    - how isometries compose: two reflections make a rotation or a translation, two rotations make a rotation
    - symmetry groups of figures, and Leonardo's theorem that a bounded figure's group is cyclic or dihedral
    - the 7 frieze groups, with a proof that there are no more
    - the 17 wallpaper groups, and a proof of the crystallographic restriction (only rotations of order 1, 2, 3, 4, 6)
    - similarities and affine maps, and how they shorten proofs

    **You need:** [Chapter 2](02-Triangles-and-Congruence.md) (congruence), [Chapter 9](09-Vectors.md) (vectors, dot
    product, projection and reflection formulas). Helpful: [Chapter 9 of the Algebra book](../algebra/09-Complex-Numbers.md)
    (complex numbers) and [Chapter 13 of the Algebra book](../algebra/13-Groups.md) (groups). Gentler versions:
    [Slides, flips and turns](../../topics/geometry/level-2/06-slides-flips-turns.md),
    [Transformations on the grid](../../topics/geometry/level-5/03-transformations-grid.md),
    [Lines of symmetry](../../topics/geometry/level-2/02-lines-of-symmetry.md) and
    [Rotational symmetry](../../topics/geometry/level-4/06-rotational-symmetry.md).

    **Levels:** 10.1 is intermediate; 10.2 to 10.4 are intermediate to advanced (full proofs); 10.5 and 10.6 are
    advanced (10.6 ends at the expert level); 10.7 is advanced.

## 10.1 Isometries

*Level: intermediate.*

A **transformation** of the plane is a rule $f$ that sends every point $P$ to a point $f(P)$, its **image**, in such a
way that every point is the image of exactly one point (so the rule can be undone). An **isometry** (Greek *isos*,
equal, and *metron*, measure) is a transformation that keeps all distances:

$$
|f(P)f(Q)| = |PQ| \quad\text{for all points } P, Q.
$$

Isometries are the "rigid motions" behind the word **congruent**: two figures are congruent exactly when an isometry
takes one onto the other. There are four obvious kinds.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 340" role="img" aria-label="Four panels. Translation: a flag slides to a copy. Rotation: a flag turns about a centre point. Reflection: a flag and its mirror image across a dashed line. Glide reflection: a flag is reflected in a line and slid along it.">
  <line x1="25" y1="135" x2="25" y2="85" stroke="currentColor" stroke-width="2"/>
  <polygon points="25,85 56,95 25,105" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="125" y1="110" x2="125" y2="60" stroke="currentColor" stroke-width="2"/>
  <polygon points="125,60 156,70 125,80" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="110" x2="130.5" y2="86.8" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <polygon points="137.5,85 129.8,91.2 127.8,83.3" fill="currentColor"/>
  <text x="105" y="160" text-anchor="middle" font-size="14" fill="currentColor">translation</text>
  <line x1="320" y1="125" x2="320" y2="75" stroke="currentColor" stroke-width="2"/>
  <polygon points="320,75 351,85 320,95" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="291.6" y1="111.2" x2="242.4" y2="119.9" stroke="currentColor" stroke-width="2"/>
  <polygon points="242.4,119.9 246.8,87.6 262.1,116.4" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="300" cy="130" r="3.5" fill="currentColor"/>
  <text x="300" y="148" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <text x="315" y="160" text-anchor="middle" font-size="14" fill="currentColor">rotation</text>
  <line x1="120" y1="315" x2="120" y2="200" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/>
  <line x1="65" y1="290" x2="65" y2="240" stroke="currentColor" stroke-width="2"/>
  <polygon points="65,240 96,250 65,260" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="175" y1="290" x2="175" y2="240" stroke="currentColor" stroke-width="2"/>
  <polygon points="175,240 144,250 175,260" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="105" y="330" text-anchor="middle" font-size="14" fill="currentColor">reflection</text>
  <line x1="232" y1="240" x2="407" y2="240" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/>
  <line x1="257" y1="232.5" x2="257" y2="182.5" stroke="currentColor" stroke-width="2"/>
  <polygon points="257,182.5 288,192.5 257,202.5" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="257" y1="247.5" x2="257" y2="297.5" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>
  <polygon points="257,297.5 288,287.5 257,277.5" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="347" y1="247.5" x2="347" y2="297.5" stroke="currentColor" stroke-width="2"/>
  <polygon points="347,297.5 378,287.5 347,277.5" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="262" y1="312.5" x2="339.8" y2="312.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="347,312.5 338,316.6 338,308.4" fill="currentColor"/>
  <text x="315" y="330" text-anchor="middle" font-size="14" fill="currentColor">glide reflection</text>
</svg>
</div>

1. A **translation** $T_{\mathbf{v}}$ slides every point by the same vector $\mathbf{v}$: $P \mapsto P + \mathbf{v}$.
   In coordinates, $(x, y) \mapsto (x + a, y + b)$.
2. A **rotation** $R_{C,\theta}$ turns every point about a fixed centre $C$ through an angle $\theta$ (anticlockwise
   for $\theta > 0$). About the origin, by trigonometry ([Chapter 7](07-Trigonometry.md)),
   $(x, y) \mapsto (x\cos\theta - y\sin\theta,\ x\sin\theta + y\cos\theta)$. A rotation by $180°$ is a **half-turn**,
   $(x, y) \mapsto (-x, -y)$ about the origin.
3. A **reflection** $r_\ell$ in a line $\ell$ (the **mirror**) sends each point to its mirror image: the point on the
   other side of $\ell$, at the same distance, on the same perpendicular. In the $x$-axis, $(x, y) \mapsto (x, -y)$;
   in the line $y = x$, $(x, y) \mapsto (y, x)$; and in a line through the origin along $\mathbf{u}$, the formula
   $\mathbf{v} \mapsto 2\frac{\mathbf{u}\cdot\mathbf{v}}{\mathbf{u}\cdot\mathbf{u}}\mathbf{u} - \mathbf{v}$ of
   [Chapter 9](09-Vectors.md).
4. A **glide reflection** reflects in a line $\ell$ and then translates by a nonzero vector parallel to $\ell$. For
   example $(x, y) \mapsto (x + 2, -y)$. Footprints in sand are the standard picture: each left foot is a right foot
   reflected and moved forward.

Each of these keeps distances. For translations it is obvious; for rotations about the origin, check that
$(x\cos\theta - y\sin\theta)^2 + (x\sin\theta + y\cos\theta)^2 = x^2 + y^2$ (the cross terms cancel and
$\cos^2 + \sin^2 = 1$), and apply it to differences of points; for reflections, it is the congruence of the two right
triangles on either side of the mirror.

### What isometries keep

Because distances are kept, much else is kept too.

- **Lines go to lines.** $Q$ lies on segment $PR$ exactly when $|PQ| + |QR| = |PR|$ (the equality case of the triangle
  inequality). The images satisfy the same equation, so $f(Q)$ lies on segment $f(P)f(R)$.
- **Angles are kept.** Triangle $PQR$ and its image have the same three sides, so they are congruent by SSS
  ([Chapter 2](02-Triangles-and-Congruence.md)) and their angles match.
- **Parallel lines go to parallel lines, circles to circles of the same radius, areas are kept.**

### Two kinds of handedness

Write the letter **F** on a card. Slide it or turn it and it still reads F; reflect it and it reads backwards. An
isometry is **direct** (or orientation-preserving) if it keeps the clockwise order of the corners of every triangle,
and **opposite** (orientation-reversing) if it reverses it. Translations and rotations are direct; reflections and glide
reflections are opposite. In 10.3 we will see that "direct or opposite" is the same as "an even or odd number of
reflections".

### Isometries in complex numbers

Identify the point $(x, y)$ with the complex number $z = x + iy$ (see the Algebra book,
[Chapter 9](../algebra/09-Complex-Numbers.md)). Multiplying by $e^{i\theta} = \cos\theta + i\sin\theta$ rotates by
$\theta$ about $0$, and taking the conjugate $\bar z = x - iy$ reflects in the real axis. So

| isometry | formula |
|---|---|
| translation by $b$ | $z \mapsto z + b$ |
| rotation by $\theta$ about $c$ | $z \mapsto c + e^{i\theta}(z - c)$ |
| reflection in the real axis | $z \mapsto \bar z$ |
| glide along the real axis by $t$ | $z \mapsto \bar z + t$ ($t$ real) |

We will prove in 10.3 that every isometry has the form $z \mapsto az + b$ or $z \mapsto a\bar z + b$ with $|a| = 1$:
the first kind are the direct ones, the second the opposite ones.

**Example.** The rotation by $90°$ about $c = 1 + i$ is $z \mapsto (1 + i) + i(z - 1 - i) = iz + 2$. It sends $3 + i$,
the point $(3, 1)$, to $3i - 1 + 2 = 1 + 3i$, the point $(1, 3)$. **Check:** both are at distance 2 from $(1, 1)$, and
the vectors $(2, 0)$ and $(0, 2)$ from the centre are at right angles.

## 10.2 Every isometry is one of the four

*Level: intermediate to advanced.*

Are there other, stranger isometries? The answer is no, and the proof uses a surprising building block: every isometry
can be made out of reflections.

### Three points are enough

**Lemma 1.** If $A$, $B$, $C$ are not on one line, a point $P$ is determined by its distances to $A$, $B$, $C$.

*Proof.* Suppose $P \ne P'$ have $|PA| = |P'A|$, $|PB| = |P'B|$, $|PC| = |P'C|$. A point equally far from $P$ and $P'$
lies on the perpendicular bisector of $PP'$ ([Chapter 2](02-Triangles-and-Congruence.md)). So $A$, $B$, $C$ all lie on
that one line, which they do not. $\square$

**Lemma 2.** An isometry that fixes three points not on one line fixes every point.

*Proof.* If $f(A) = A$, $f(B) = B$, $f(C) = C$, then for any $P$, the point $f(P)$ has the same distances to $A, B, C$
as $P$ does (distances are kept, and $A, B, C$ do not move). By Lemma 1, $f(P) = P$. $\square$

So an isometry is completely fixed by where it sends one triangle. Two isometries that agree on $A$, $B$, $C$ are equal
(apply Lemma 2 to $g^{-1}f$).

### At most three mirrors

**Theorem.** Every isometry of the plane is a product of at most three reflections.

*Proof.* Let $f$ be an isometry and $A$, $B$, $C$ a triangle. We build reflections that undo $f$ one corner at a time.

*Step 1.* If $f(A) \ne A$, let $s_1$ be the reflection in the perpendicular bisector of $A$ and $f(A)$; it swaps them.
(If $f(A) = A$, let $s_1$ do nothing.) Then $f_1 = s_1 f$ fixes $A$.

*Step 2.* If $f_1(B) \ne B$, let $s_2$ be the reflection in the perpendicular bisector of $B$ and $f_1(B)$. That line
passes through $A$, because $|A\,f_1(B)| = |f_1(A)\,f_1(B)| = |AB|$, so $A$ is equally far from $B$ and $f_1(B)$.
Hence $s_2$ fixes $A$, and $f_2 = s_2 f_1$ fixes both $A$ and $B$.

*Step 3.* $f_2(C)$ is at distance $|AC|$ from $A$ and $|BC|$ from $B$. Two circles meet in at most two points, and
those two points are mirror images in the line $AB$. So $f_2(C)$ is either $C$ or the reflection of $C$ in $AB$. In the
second case let $s_3$ be the reflection in $AB$ (it fixes $A$ and $B$); otherwise let it do nothing. Then
$s_3 s_2 s_1 f$ fixes $A$, $B$, $C$, so by Lemma 2 it is the identity.

Since each reflection undoes itself ($s^2$ is the identity), $f = s_1 s_2 s_3$. $\square$

(The order of writing: $s_3 s_2 s_1 f$ means "do $f$, then $s_1$, then $s_2$, then $s_3$", the same right-to-left order
as composing functions.)

### Two mirrors

**Theorem.** Let $r_1$, $r_2$ be reflections in lines $\ell_1$, $\ell_2$, and do $r_1$ first.

- If $\ell_1 \parallel \ell_2$ at distance $d$, then $r_2 r_1$ is the translation by $2d$, perpendicular to the
  mirrors, in the direction from $\ell_1$ to $\ell_2$.
- If $\ell_1$, $\ell_2$ cross at $O$ at angle $\theta$ (measured from $\ell_1$ to $\ell_2$), then $r_2 r_1$ is the
  rotation about $O$ by $2\theta$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 228" role="img" aria-label="Two parallel mirrors l1 and l2 a distance d apart. Reflecting the orange flag in l1 gives the dashed flag; reflecting that in l2 gives a copy of the original moved sideways by 2d.">
  <line x1="135.2" y1="178.8" x2="135.2" y2="25.2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/>
  <line x1="260" y1="178.8" x2="260" y2="25.2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/>
  <line x1="63.2" y1="126" x2="63.2" y2="78" stroke="currentColor" stroke-width="2"/>
  <polygon points="63.2,78 93,87.6 63.2,97.2" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="207.2" y1="126" x2="207.2" y2="78" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>
  <polygon points="207.2,78 177.4,87.6 207.2,97.2" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="312.8" y1="126" x2="312.8" y2="78" stroke="currentColor" stroke-width="2"/>
  <polygon points="312.8,78 342.6,87.6 312.8,97.2" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="135.2" y="19.2" text-anchor="middle" font-size="15" fill="currentColor">ℓ₁</text>
  <text x="260" y="19.2" text-anchor="middle" font-size="15" fill="currentColor">ℓ₂</text>
  <line x1="135.2" y1="166.8" x2="260" y2="166.8" stroke="currentColor" stroke-width="1"/>
  <text x="197.6" y="160.8" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">d</text>
  <line x1="63.2" y1="195.6" x2="305.6" y2="195.6" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="312.8,195.6 303.8,199.7 303.8,191.5" fill="currentColor"/>
  <text x="188" y="215.6" text-anchor="middle" font-size="13" fill="currentColor">translation by 2d</text>
</svg>
</div>

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 290" role="img" aria-label="Two mirrors l1 and l2 crossing at O at angle theta. Reflecting the orange flag in l1 and then in l2 turns it about O through the angle 2 theta.">
  <line x1="47.2" y1="150" x2="374.8" y2="150" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/>
  <line x1="80.6" y1="241.8" x2="331.6" y2="31.2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/>
  <line x1="161.5" y1="238.8" x2="202.9" y2="246.1" stroke="currentColor" stroke-width="2"/>
  <polygon points="202.9,246.1 190.1,270.3 186.4,243.2" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="161.5" y1="61.2" x2="202.9" y2="53.9" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>
  <polygon points="202.9,53.9 190.1,29.7 186.4,56.8" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="272.5" y1="193.4" x2="286.9" y2="154" stroke="currentColor" stroke-width="2"/>
  <polygon points="286.9,154 308.5,170.8 281.1,169.8" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="190" cy="150" r="3.5" fill="currentColor"/>
  <text x="184" y="170" text-anchor="middle" font-size="14" fill="currentColor">O</text>
  <path d="M 260 150 A 70 70 0 0 0 243.6 105" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="270" y="128" text-anchor="middle" font-size="15" fill="currentColor">θ</text>
  <text x="374.8" y="168" text-anchor="middle" font-size="15" fill="currentColor">ℓ₁</text>
  <text x="345.6" y="37.2" text-anchor="middle" font-size="15" fill="currentColor">ℓ₂</text>
  <text x="330" y="282" text-anchor="middle" font-size="13" fill="currentColor">rotation about O by 2θ</text>
</svg>
</div>

*Proof.* Parallel case: choose coordinates with $\ell_1$ the line $x = 0$ and $\ell_2$ the line $x = d$. Reflection in
$x = 0$ sends $x \mapsto -x$, and reflection in $x = d$ sends $x \mapsto 2d - x$ (the point at signed distance $x - d$
from the mirror goes to signed distance $d - x$); $y$ is unchanged by both. So $r_2 r_1$ sends $x \mapsto 2d - (-x) = x + 2d$.

Crossing case: put $O$ at the origin and use polar angles. Reflection in the line through $O$ at angle $\alpha$ sends a
point at angle $\varphi$ to the point at the same distance and angle $2\alpha - \varphi$ (the mirror is half-way
between). If $\ell_1$, $\ell_2$ are at angles $\alpha$ and $\alpha + \theta$, then
$\varphi \mapsto 2\alpha - \varphi \mapsto 2(\alpha + \theta) - (2\alpha - \varphi) = \varphi + 2\theta$, with the
distance from $O$ unchanged. That is the rotation by $2\theta$. $\square$

Only the angle (or distance) between the mirrors matters, not where the pair sits. This gives a great deal of freedom:
**a rotation about $O$ by $2\theta$ is the product of two reflections in *any* two lines through $O$ at angle $\theta$**,
and a translation by $\mathbf{v}$ is the product of reflections in *any* two lines perpendicular to $\mathbf{v}$ at
distance $|\mathbf{v}|/2$. We will use this freedom to "rotate the mirrors" in proofs.

### Three mirrors

**Theorem.** A product of three reflections is a reflection or a glide reflection.

*Proof.* Let $f = r_3 r_2 r_1$ with mirrors $\ell_1, \ell_2, \ell_3$. If all three are parallel, or all pass through
one point, then $r_3 r_2$ can be rewritten as $r_3' r_1$ (same distance or angle, with the first mirror moved onto
$\ell_1$), and $f = r_3' r_1 r_1 = r_3'$, a single reflection.

Otherwise, suppose first that $\ell_2$ and $\ell_3$ cross, at a point $P$. Rotate this pair about $P$ until the new
$\ell_2'$ is perpendicular to $\ell_1$; the product is unchanged: $f = r_3' r_2' r_1$. Now $\ell_2' \perp \ell_1$, so
$r_2' r_1$ is the half-turn about their meeting point $Q$, and a half-turn about $Q$ is also the product of
reflections in *any* two perpendicular lines through $Q$. Choose them as $m$, the line through $Q$ parallel to
$\ell_3'$, and $n$, the line through $Q$ perpendicular to $m$, so that $r_2' r_1 = r_m r_n$. Then

$$
f = r_3' r_m r_n = (r_3' r_m)\, r_n.
$$

Since $\ell_3' \parallel m$, $r_3' r_m$ is a translation perpendicular to them, that is, parallel to $n$. So $f$ is a
reflection in $n$ followed by a translation along $n$: a glide reflection (or, if the translation is zero, a plain
reflection). If $\ell_2 \parallel \ell_3$, then $\ell_1$ and $\ell_2$ must cross (otherwise all three are parallel),
and the same argument works from the other end. $\square$

### The classification

Put the pieces together. An isometry is a product of 0, 1, 2 or 3 reflections:

- 0: the identity (a translation by $\mathbf{0}$, or a rotation by $0$);
- 1: a reflection;
- 2: a translation or a rotation;
- 3: a reflection or a glide reflection.

**Theorem (classification of plane isometries).** Every isometry of the plane is a translation, a rotation, a
reflection or a glide reflection. $\square$

This proof by reflections is the one used in Coxeter's *Introduction to Geometry* and in most modern courses. In space there is a similar theorem: every isometry of
3-space is a product of at most four reflections in planes, and the list gets two new members, the **screw motion**
(rotate about an axis and slide along it) and the **rotatory reflection**.

## 10.3 Composing isometries

*Level: intermediate to advanced.*

### Isometries form a group

The composite of two isometries is an isometry, the identity is one, and each has an inverse (undo it) which is also an
isometry. So the isometries of the plane form a **group** under composition, the **Euclidean group**, often written
$E(2)$ or $\operatorname{Isom}(\mathbb{R}^2)$. (Groups are introduced in the Algebra book's
[Chapter 13](../algebra/13-Groups.md).)

### The formula for every isometry

**Theorem.** Every isometry of the plane has the form $\mathbf{x} \mapsto A\mathbf{x} + \mathbf{b}$, where
$\mathbf{b}$ is a vector and $A$ is an **orthogonal matrix**: its columns are perpendicular unit vectors.

*Proof.* Let $f$ be an isometry, $\mathbf{b} = f(\mathbf{0})$, and $g(\mathbf{x}) = f(\mathbf{x}) - \mathbf{b}$. Then
$g$ keeps distances and fixes the origin, so it keeps lengths: $|g(\mathbf{x})| = |\mathbf{x}|$. It also keeps dot
products, because a dot product can be written with lengths only:
$\mathbf{x}\cdot\mathbf{y} = \tfrac12(|\mathbf{x}|^2 + |\mathbf{y}|^2 - |\mathbf{x} - \mathbf{y}|^2)$. So
$\mathbf{e}_1' = g(1, 0)$ and $\mathbf{e}_2' = g(0, 1)$ are perpendicular unit vectors, an orthonormal basis, and for
any $\mathbf{x} = (x_1, x_2)$, by the expansion in an orthonormal basis ([Chapter 9](09-Vectors.md), 9.4),

$$
g(\mathbf{x}) = (g(\mathbf{x})\cdot\mathbf{e}_1')\,\mathbf{e}_1' + (g(\mathbf{x})\cdot\mathbf{e}_2')\,\mathbf{e}_2' = x_1\mathbf{e}_1' + x_2\mathbf{e}_2',
$$

since $g(\mathbf{x})\cdot g(\mathbf{e}_i) = \mathbf{x}\cdot\mathbf{e}_i = x_i$. That is $g(\mathbf{x}) = A\mathbf{x}$ with
columns $\mathbf{e}_1'$, $\mathbf{e}_2'$. $\square$

A $2 \times 2$ orthogonal matrix is either a rotation matrix
$\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ (determinant $+1$) or a reflection
matrix $\begin{pmatrix} \cos\theta & \sin\theta \\ \sin\theta & -\cos\theta \end{pmatrix}$ (determinant $-1$), because
the second column must be the first turned by $+90°$ or $-90°$. In complex numbers this is the statement promised in
10.1: $z \mapsto az + b$ or $z \mapsto a\bar z + b$ with $|a| = 1$.

**Direct and opposite, precisely.** Call $f$ direct when $\det A = +1$, opposite when $\det A = -1$. Since
$\det(AB) = \det A \det B$, a product of $k$ reflections has determinant $(-1)^k$. So the number of reflections in any
way of writing $f$ is always even, or always odd, and

- direct = even number of reflections = translation or rotation;
- opposite = odd number = reflection or glide reflection.

### A composition table

| first, then | translation | rotation by $\beta$ | reflection or glide |
|---|---|---|---|
| translation | translation | rotation by $\beta$ | reflection or glide |
| rotation by $\alpha$ | rotation by $\alpha$ | rotation by $\alpha + \beta$, or a translation if $\alpha + \beta$ is a multiple of $360°$ | reflection or glide |
| reflection or glide | reflection or glide | reflection or glide | translation or rotation |

The angle of a direct isometry (its rotation part) simply adds. The only entry that needs a real argument is the
rotation-rotation one.

**Theorem.** Rotation about $A$ by $\alpha$ followed by rotation about $B$ by $\beta$ ($A \ne B$) is a rotation by
$\alpha + \beta$ when $\alpha + \beta$ is not a multiple of $360°$, and a translation when it is.

*Proof.* Let $m$ be the line $AB$. Write the first rotation as $r_m r_a$, where $a$ is the line through $A$ making
angle $\alpha/2$ with $m$ (measured from $a$ to $m$), and the second as $r_b r_m$, where $b$ is the line through $B$ at
angle $\beta/2$ from $m$ to $b$. Then the composite is $r_b r_m r_m r_a = r_b r_a$, the middle pair cancelling. Lines
$a$ and $b$ are at total angle $\alpha/2 + \beta/2$, so $r_b r_a$ is a rotation by $\alpha + \beta$ about their
meeting point, unless they are parallel, which happens exactly when $\alpha/2 + \beta/2$ is a multiple of $180°$; then
it is a translation. $\square$

The proof even tells you where the new centre is: draw the two lines and see where they meet.

**Example.** Rotate by $90°$ about $P = (1, 0)$, then by $90°$ about the origin $O$. In complex numbers the first is
$z \mapsto i(z - 1) + 1$ and the second $w \mapsto iw$, so the composite is
$z \mapsto i\big(i(z - 1) + 1\big) = -z + 1 + i$. That is $z \mapsto -(z - c) + c$ with $2c = 1 + i$: a half-turn
($90° + 90°$) about $c = (\tfrac12, \tfrac12)$. **Check:** $P$ goes first to itself, then to $(0, 1)$; and the half-turn
about $(\tfrac12, \tfrac12)$ also sends $(1, 0)$ to $(0, 1)$.

### Conjugation: moving a motion

If $g$ is an isometry and $f$ another, the composite $f g f^{-1}$ ("undo $f$, do $g$, redo $f$") is $g$ "seen from
somewhere else":

- $f\, R_{C,\theta}\, f^{-1} = R_{f(C),\pm\theta}$: a rotation by the same angle about the moved centre (sign $-$ if
  $f$ is opposite);
- $f\, r_\ell\, f^{-1} = r_{f(\ell)}$: the reflection in the moved mirror;
- $f\, T_{\mathbf{v}}\, f^{-1} = T_{A\mathbf{v}}$: a translation by the turned vector.

*Proof of the first:* $f R f^{-1}$ fixes $f(C)$ (since $f^{-1}$ sends it to $C$, $R$ fixes $C$, and $f$ sends it back),
and it is direct with the same rotation angle, up to sign, since determinants and angles multiply and add. The others
are similar. These rules say: **the symmetries of a pattern carry its rotation centres to rotation centres of the same
order, and its mirrors to mirrors.** That fact drives 10.6.

## 10.4 Symmetry groups of figures

*Level: intermediate to advanced.*

A **symmetry** of a figure $X$ is an isometry $f$ with $f(X) = X$: after the motion, the figure occupies exactly the
same place. The symmetries of $X$ form a group, the **symmetry group** of $X$: the composite of two symmetries is a
symmetry, and so are the identity and the inverse of a symmetry.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="Left: a six-pointed star with its six mirror lines; its symmetry group is the dihedral group D6 with 12 elements. Right: four flags turned about a centre; only rotations are symmetries, the cyclic group C4.">
  <polygon points="105,30 82,70.2 35.7,70 59,110 35.7,150 82,149.8 105,190 128,149.8 174.3,150 151,110 174.3,70 128,70.2" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="105" y1="205" x2="105" y2="15" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="152.5" y1="192.3" x2="57.5" y2="27.7" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="187.3" y1="157.5" x2="22.7" y2="62.5" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="200" y1="110" x2="10" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="187.3" y1="62.5" x2="22.7" y2="157.5" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="152.5" y1="27.7" x2="57.5" y2="192.3" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="105" cy="110" r="3.5" fill="currentColor"/>
  <polygon points="322.2,102.8 389.4,102.8 370.2,66.8" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="307.8,102.8 307.8,35.6 271.8,54.8" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="307.8,117.2 240.6,117.2 259.8,153.2" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="322.2,117.2 322.2,184.4 358.2,165.2" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="315" cy="110" r="3.5" fill="currentColor"/>
  <text x="105" y="215" text-anchor="middle" font-size="12" fill="currentColor">D₆: 6 rotations, 6 reflections</text>
  <text x="315" y="215" text-anchor="middle" font-size="12" fill="currentColor">C₄: 4 rotations</text>
</svg>
</div>

### Cyclic and dihedral groups

- The **cyclic group** $C_n$ consists of the $n$ rotations about one centre by multiples of $360°/n$. It is the
  symmetry group of a pinwheel or a three-legged triskelion ($C_3$): you can turn them, but no mirror maps them to
  themselves.
- The **dihedral group** $D_n$ consists of those $n$ rotations together with $n$ reflections, in $n$ mirrors through
  the centre at angles $180°/n$ apart. It has $2n$ elements and is the symmetry group of the regular $n$-gon. A square
  has $D_4$ with 8 symmetries; a regular hexagon or an ideal snowflake has $D_6$ with 12.

In $D_n$, with $\rho$ the rotation by $360°/n$ and $s$ any one reflection, the reflections are exactly
$s, \rho s, \rho^2 s, \dots, \rho^{n-1}s$ (each $\rho^k s$ is opposite, hence by the classification a reflection, since
it fixes the centre), and the rules $\rho^n = 1$, $s^2 = 1$, $s\rho s = \rho^{-1}$ describe the whole group. The
Algebra book studies $D_n$ as an abstract group in [Chapter 13](../algebra/13-Groups.md).

Two small cases look odd but fit: $D_1$ is "one mirror and nothing else" (the letter A, a butterfly), and $D_2$ is "two
perpendicular mirrors and a half-turn" (the letter H, a rectangle). $C_1$ is the trivial group (the letter F), and $C_2$
is a half-turn only (the letters N, S, Z).

### Leonardo's theorem

Is there any other possibility for a bounded figure, like a flower or a coin? No.

**Theorem (Leonardo's theorem).** Every finite group of isometries of the plane is either a cyclic group $C_n$ or a
dihedral group $D_n$, for some $n \ge 1$.

*Proof.* Let $G$ be a finite group of isometries. Take any point $P$ and its **orbit** $P_1, \dots, P_m$, the
distinct points $g(P)$ for $g \in G$. Let $O$ be their centroid, $\mathbf{o} = \tfrac1m(\mathbf{p}_1 + \dots + \mathbf{p}_m)$.
Each $g \in G$ permutes the orbit (if $Q = h(P)$ then $g(Q) = (gh)(P)$, again in the orbit), and $g$ has the form
$\mathbf{x} \mapsto A\mathbf{x} + \mathbf{b}$, which carries averages to averages:
$g(\mathbf{o}) = \tfrac1m\sum (A\mathbf{p}_i + \mathbf{b}) = \tfrac1m\sum g(\mathbf{p}_i) = \mathbf{o}$. So **every
element of $G$ fixes $O$.**

An isometry fixing a point is a rotation about it or a reflection in a line through it (translations and glides fix
nothing, except the identity). So $G$ consists of rotations about $O$ and reflections in lines through $O$.

The rotations in $G$ form a subgroup $R$ (a product of two rotations about $O$ is another). It is finite, so among its
nonzero angles in $(0°, 360°)$ there is a smallest, $\varphi$ (if there are none, $R$ is just the identity). Every
rotation angle $\psi$ in $R$ is a multiple of $\varphi$: otherwise write $\psi = k\varphi + \delta$ with
$0 < \delta < \varphi$, and the rotation by $\psi - k\varphi = \delta$ is in $R$ and smaller than $\varphi$. Since a
full turn is in $R$, $360°$ is a multiple of $\varphi$, say $\varphi = 360°/n$. So $R = C_n$.

If $G$ has no reflections, $G = R = C_n$. If it has a reflection $s$, then for any other reflection $s'$ in $G$, the
product $s' s$ is a rotation in $R$, so $s' = (s's)s \in Rs$. Thus the reflections are exactly the $n$ elements
$\rho^k s$, and $G = D_n$. $\square$

The name comes from Hermann Weyl's book *Symmetry* (1952), which credits Leonardo da Vinci with working out, in effect,
the possible symmetries of a central building, so that chapels and niches could be added without spoiling its
symmetry. The mathematical statement and proof are modern.

### Examples

- A starfish (idealised) has $D_5$; a regular pentagram too.
- The benzene molecule, drawn flat, has $D_6$; a three-bladed propeller seen from the front has $C_3$.
- A circle is the exception that proves the rule: its symmetry group is infinite (all rotations about the centre and
  all reflections in diameters), called $O(2)$. Leonardo's theorem is about *finite* groups.
- In space, the finite groups of rotations are the cyclic and dihedral groups again, plus three more: the rotation
  groups of the tetrahedron (12 elements), the cube and octahedron (24) and the icosahedron and dodecahedron (60).
  [Chapter 11](11-Solid-Geometry.md) meets them in the Platonic solids.

## 10.5 The seven frieze groups

*Level: advanced.*

A **frieze** is a pattern along a strip that repeats: a border on a wall, the band round a pot, a row of footprints.
Mathematically, a frieze pattern is a figure in the plane whose symmetry group contains translations along one
direction (call it horizontal), and whose translations are all multiples of one shortest one, $\tau$. We call the
symmetry group of such a pattern a **frieze group**.

Every symmetry of a frieze must carry the strip to itself, so it maps the **centre line** of the strip to itself. That
leaves only these possibilities:

- translations along the strip (multiples of $\tau$);
- **half-turns** about points on the centre line;
- the reflection in the centre line itself (a **horizontal mirror**);
- reflections in lines across the strip (**vertical mirrors**);
- **glide reflections** along the centre line.

A pattern with a horizontal mirror automatically has glides (mirror then translate). By a **proper glide** we mean a
glide reflection in the pattern when the horizontal mirror is not a symmetry, as in footprints.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 445" role="img" aria-label="The seven frieze patterns, one per row, each made by repeating one small asymmetric shape: p1 hop, p11g step, p1m1 sidle, p2 spinning hop, p2mg spinning sidle, p11m jump, p2mm spinning jump.">
  <line x1="146" y1="32" x2="415" y2="32" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3" stroke-opacity="0.5"/>
  <polygon points="152.9,29.6 152.9,10.4 157.7,10.4 157.7,22.9 167.3,22.9 167.3,29.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,29.6 200.9,10.4 205.7,10.4 205.7,22.9 215.3,22.9 215.3,29.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,29.6 248.9,10.4 253.7,10.4 253.7,22.9 263.3,22.9 263.3,29.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,29.6 296.9,10.4 301.7,10.4 301.7,22.9 311.3,22.9 311.3,29.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,29.6 344.9,10.4 349.7,10.4 349.7,22.9 359.3,22.9 359.3,29.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,29.6 392.9,10.4 397.7,10.4 397.7,22.9 407.3,22.9 407.3,29.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <text x="8" y="37" text-anchor="start" font-size="13" font-weight="bold" fill="currentColor">p1</text>
  <text x="8" y="52" text-anchor="start" font-size="11" fill="currentColor">hop</text>
  <line x1="146" y1="94" x2="415" y2="94" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3" stroke-opacity="0.5"/>
  <polygon points="152.9,91.6 152.9,72.4 157.7,72.4 157.7,84.9 167.3,84.9 167.3,91.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="176.9,96.4 176.9,115.6 181.7,115.6 181.7,103.1 191.3,103.1 191.3,96.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,91.6 200.9,72.4 205.7,72.4 205.7,84.9 215.3,84.9 215.3,91.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="224.9,96.4 224.9,115.6 229.7,115.6 229.7,103.1 239.3,103.1 239.3,96.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,91.6 248.9,72.4 253.7,72.4 253.7,84.9 263.3,84.9 263.3,91.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="272.9,96.4 272.9,115.6 277.7,115.6 277.7,103.1 287.3,103.1 287.3,96.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,91.6 296.9,72.4 301.7,72.4 301.7,84.9 311.3,84.9 311.3,91.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="320.9,96.4 320.9,115.6 325.7,115.6 325.7,103.1 335.3,103.1 335.3,96.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,91.6 344.9,72.4 349.7,72.4 349.7,84.9 359.3,84.9 359.3,91.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="368.9,96.4 368.9,115.6 373.7,115.6 373.7,103.1 383.3,103.1 383.3,96.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,91.6 392.9,72.4 397.7,72.4 397.7,84.9 407.3,84.9 407.3,91.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <text x="8" y="99" text-anchor="start" font-size="13" font-weight="bold" fill="currentColor">p11g</text>
  <text x="8" y="114" text-anchor="start" font-size="11" fill="currentColor">step</text>
  <line x1="146" y1="156" x2="415" y2="156" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3" stroke-opacity="0.5"/>
  <polygon points="152.9,153.6 152.9,134.4 157.7,134.4 157.7,146.9 167.3,146.9 167.3,153.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="195.1,153.6 195.1,134.4 190.3,134.4 190.3,146.9 180.7,146.9 180.7,153.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,153.6 200.9,134.4 205.7,134.4 205.7,146.9 215.3,146.9 215.3,153.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="243.1,153.6 243.1,134.4 238.3,134.4 238.3,146.9 228.7,146.9 228.7,153.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,153.6 248.9,134.4 253.7,134.4 253.7,146.9 263.3,146.9 263.3,153.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="291.1,153.6 291.1,134.4 286.3,134.4 286.3,146.9 276.7,146.9 276.7,153.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,153.6 296.9,134.4 301.7,134.4 301.7,146.9 311.3,146.9 311.3,153.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="339.1,153.6 339.1,134.4 334.3,134.4 334.3,146.9 324.7,146.9 324.7,153.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,153.6 344.9,134.4 349.7,134.4 349.7,146.9 359.3,146.9 359.3,153.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="387.1,153.6 387.1,134.4 382.3,134.4 382.3,146.9 372.7,146.9 372.7,153.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,153.6 392.9,134.4 397.7,134.4 397.7,146.9 407.3,146.9 407.3,153.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <text x="8" y="161" text-anchor="start" font-size="13" font-weight="bold" fill="currentColor">p1m1</text>
  <text x="8" y="176" text-anchor="start" font-size="11" fill="currentColor">sidle</text>
  <line x1="146" y1="218" x2="415" y2="218" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3" stroke-opacity="0.5"/>
  <polygon points="152.9,215.6 152.9,196.4 157.7,196.4 157.7,208.9 167.3,208.9 167.3,215.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="195.1,220.4 195.1,239.6 190.3,239.6 190.3,227.1 180.7,227.1 180.7,220.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,215.6 200.9,196.4 205.7,196.4 205.7,208.9 215.3,208.9 215.3,215.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="243.1,220.4 243.1,239.6 238.3,239.6 238.3,227.1 228.7,227.1 228.7,220.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,215.6 248.9,196.4 253.7,196.4 253.7,208.9 263.3,208.9 263.3,215.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="291.1,220.4 291.1,239.6 286.3,239.6 286.3,227.1 276.7,227.1 276.7,220.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,215.6 296.9,196.4 301.7,196.4 301.7,208.9 311.3,208.9 311.3,215.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="339.1,220.4 339.1,239.6 334.3,239.6 334.3,227.1 324.7,227.1 324.7,220.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,215.6 344.9,196.4 349.7,196.4 349.7,208.9 359.3,208.9 359.3,215.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="387.1,220.4 387.1,239.6 382.3,239.6 382.3,227.1 372.7,227.1 372.7,220.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,215.6 392.9,196.4 397.7,196.4 397.7,208.9 407.3,208.9 407.3,215.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <text x="8" y="223" text-anchor="start" font-size="13" font-weight="bold" fill="currentColor">p2</text>
  <text x="8" y="238" text-anchor="start" font-size="11" fill="currentColor">spinning hop</text>
  <line x1="146" y1="280" x2="415" y2="280" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3" stroke-opacity="0.5"/>
  <polygon points="171.1,282.4 171.1,301.6 166.3,301.6 166.3,289.1 156.7,289.1 156.7,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="152.9,277.6 152.9,258.4 157.7,258.4 157.7,270.9 167.3,270.9 167.3,277.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="195.1,277.6 195.1,258.4 190.3,258.4 190.3,270.9 180.7,270.9 180.7,277.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="176.9,282.4 176.9,301.6 181.7,301.6 181.7,289.1 191.3,289.1 191.3,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="219.1,282.4 219.1,301.6 214.3,301.6 214.3,289.1 204.7,289.1 204.7,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,277.6 200.9,258.4 205.7,258.4 205.7,270.9 215.3,270.9 215.3,277.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="243.1,277.6 243.1,258.4 238.3,258.4 238.3,270.9 228.7,270.9 228.7,277.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="224.9,282.4 224.9,301.6 229.7,301.6 229.7,289.1 239.3,289.1 239.3,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="267.1,282.4 267.1,301.6 262.3,301.6 262.3,289.1 252.7,289.1 252.7,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,277.6 248.9,258.4 253.7,258.4 253.7,270.9 263.3,270.9 263.3,277.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="291.1,277.6 291.1,258.4 286.3,258.4 286.3,270.9 276.7,270.9 276.7,277.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="272.9,282.4 272.9,301.6 277.7,301.6 277.7,289.1 287.3,289.1 287.3,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="315.1,282.4 315.1,301.6 310.3,301.6 310.3,289.1 300.7,289.1 300.7,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,277.6 296.9,258.4 301.7,258.4 301.7,270.9 311.3,270.9 311.3,277.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="339.1,277.6 339.1,258.4 334.3,258.4 334.3,270.9 324.7,270.9 324.7,277.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="320.9,282.4 320.9,301.6 325.7,301.6 325.7,289.1 335.3,289.1 335.3,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="363.1,282.4 363.1,301.6 358.3,301.6 358.3,289.1 348.7,289.1 348.7,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,277.6 344.9,258.4 349.7,258.4 349.7,270.9 359.3,270.9 359.3,277.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="387.1,277.6 387.1,258.4 382.3,258.4 382.3,270.9 372.7,270.9 372.7,277.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="368.9,282.4 368.9,301.6 373.7,301.6 373.7,289.1 383.3,289.1 383.3,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="411.1,282.4 411.1,301.6 406.3,301.6 406.3,289.1 396.7,289.1 396.7,282.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,277.6 392.9,258.4 397.7,258.4 397.7,270.9 407.3,270.9 407.3,277.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <text x="8" y="285" text-anchor="start" font-size="13" font-weight="bold" fill="currentColor">p2mg</text>
  <text x="8" y="300" text-anchor="start" font-size="11" fill="currentColor">spinning sidle</text>
  <line x1="146" y1="342" x2="415" y2="342" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3" stroke-opacity="0.5"/>
  <polygon points="152.9,339.6 152.9,320.4 157.7,320.4 157.7,332.9 167.3,332.9 167.3,339.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="152.9,344.4 152.9,363.6 157.7,363.6 157.7,351.1 167.3,351.1 167.3,344.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,339.6 200.9,320.4 205.7,320.4 205.7,332.9 215.3,332.9 215.3,339.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,344.4 200.9,363.6 205.7,363.6 205.7,351.1 215.3,351.1 215.3,344.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,339.6 248.9,320.4 253.7,320.4 253.7,332.9 263.3,332.9 263.3,339.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,344.4 248.9,363.6 253.7,363.6 253.7,351.1 263.3,351.1 263.3,344.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,339.6 296.9,320.4 301.7,320.4 301.7,332.9 311.3,332.9 311.3,339.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,344.4 296.9,363.6 301.7,363.6 301.7,351.1 311.3,351.1 311.3,344.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,339.6 344.9,320.4 349.7,320.4 349.7,332.9 359.3,332.9 359.3,339.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,344.4 344.9,363.6 349.7,363.6 349.7,351.1 359.3,351.1 359.3,344.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,339.6 392.9,320.4 397.7,320.4 397.7,332.9 407.3,332.9 407.3,339.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,344.4 392.9,363.6 397.7,363.6 397.7,351.1 407.3,351.1 407.3,344.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <text x="8" y="347" text-anchor="start" font-size="13" font-weight="bold" fill="currentColor">p11m</text>
  <text x="8" y="362" text-anchor="start" font-size="11" fill="currentColor">jump</text>
  <line x1="146" y1="404" x2="415" y2="404" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3" stroke-opacity="0.5"/>
  <polygon points="152.9,401.6 152.9,382.4 157.7,382.4 157.7,394.9 167.3,394.9 167.3,401.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="195.1,401.6 195.1,382.4 190.3,382.4 190.3,394.9 180.7,394.9 180.7,401.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="152.9,406.4 152.9,425.6 157.7,425.6 157.7,413.1 167.3,413.1 167.3,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="195.1,406.4 195.1,425.6 190.3,425.6 190.3,413.1 180.7,413.1 180.7,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,401.6 200.9,382.4 205.7,382.4 205.7,394.9 215.3,394.9 215.3,401.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="243.1,401.6 243.1,382.4 238.3,382.4 238.3,394.9 228.7,394.9 228.7,401.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="200.9,406.4 200.9,425.6 205.7,425.6 205.7,413.1 215.3,413.1 215.3,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="243.1,406.4 243.1,425.6 238.3,425.6 238.3,413.1 228.7,413.1 228.7,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,401.6 248.9,382.4 253.7,382.4 253.7,394.9 263.3,394.9 263.3,401.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="291.1,401.6 291.1,382.4 286.3,382.4 286.3,394.9 276.7,394.9 276.7,401.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="248.9,406.4 248.9,425.6 253.7,425.6 253.7,413.1 263.3,413.1 263.3,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="291.1,406.4 291.1,425.6 286.3,425.6 286.3,413.1 276.7,413.1 276.7,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,401.6 296.9,382.4 301.7,382.4 301.7,394.9 311.3,394.9 311.3,401.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="339.1,401.6 339.1,382.4 334.3,382.4 334.3,394.9 324.7,394.9 324.7,401.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="296.9,406.4 296.9,425.6 301.7,425.6 301.7,413.1 311.3,413.1 311.3,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="339.1,406.4 339.1,425.6 334.3,425.6 334.3,413.1 324.7,413.1 324.7,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,401.6 344.9,382.4 349.7,382.4 349.7,394.9 359.3,394.9 359.3,401.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="387.1,401.6 387.1,382.4 382.3,382.4 382.3,394.9 372.7,394.9 372.7,401.6" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="344.9,406.4 344.9,425.6 349.7,425.6 349.7,413.1 359.3,413.1 359.3,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="387.1,406.4 387.1,425.6 382.3,425.6 382.3,413.1 372.7,413.1 372.7,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,401.6 392.9,382.4 397.7,382.4 397.7,394.9 407.3,394.9 407.3,401.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <polygon points="392.9,406.4 392.9,425.6 397.7,425.6 397.7,413.1 407.3,413.1 407.3,406.4" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1"/>
  <text x="8" y="409" text-anchor="start" font-size="13" font-weight="bold" fill="currentColor">p2mm</text>
  <text x="8" y="424" text-anchor="start" font-size="11" fill="currentColor">spinning jump</text>
</svg>
</div>

The names in bold are the crystallographers' (International Union of Crystallography) symbols; the lower names are
John Conway's, describing how a person would move to make the pattern with footprints: **hop** on one foot, **step**
left-right, **sidle** sideways, **jump** with both feet, and their "spinning" versions with half-turns.

**Theorem.** There are exactly seven frieze groups (up to the obvious equivalence of patterns made with different
motifs): p1, p11g, p1m1, p2, p2mg, p11m, p2mm.

*Proof.* We use three facts about the possible symmetries, each a two-line check in coordinates with the centre line as
the $x$-axis. A half-turn about $(p, 0)$ is $(x, y) \mapsto (2p - x, -y)$, a vertical mirror at $x = q$ is
$(x, y) \mapsto (2q - x, y)$, the horizontal mirror is $(x, y) \mapsto (x, -y)$, and a glide is
$(x, y) \mapsto (x + a, -y)$.

- (a) horizontal mirror $\circ$ vertical mirror $=$ half-turn: $(x, y) \mapsto (2q - x, -y)$;
- (b) half-turn $\circ$ vertical mirror $=$ horizontal mirror or glide: $(x, y) \mapsto (x + 2p - 2q, -y)$;
- (c) half-turn $\circ$ glide $=$ vertical mirror: $(x, y) \mapsto (2p - x - a, y)$.

Now sort the patterns by asking questions in turn.

1. **Is there a horizontal mirror?** If yes: are there vertical mirrors? If yes, by (a) there are half-turns too: this is
   **p2mm**. If no, there can be no half-turns either (by (a) the half-turn times the horizontal mirror would be a
   vertical mirror): this is **p11m**.
2. **No horizontal mirror, but vertical mirrors.** Is there a proper glide? If yes, a vertical mirror composed with the glide is a
   half-turn (the computation of (c), read the other way round), so half-turns are present: **p2mg**. If no, there can be no half-turns (by (b) a half-turn and a vertical mirror would give a
   horizontal mirror or a glide): **p1m1**.
3. **No mirrors at all.** A proper glide and a half-turn together would give a vertical mirror by (c), which is
   excluded. So there are three cases: a proper glide only, **p11g**; half-turns only, **p2**; neither, **p1**.

That is seven cases, and each really occurs, as the figure shows. Different patterns in the same case have the same
group, in the sense that one can be matched to the other by a change of scale and position. $\square$

(The full proof also checks that, within a case, the positions of the mirrors and centres relative to each other are
forced, for instance that in p2mm the half-turn centres sit exactly where mirrors cross. That is a careful but routine
extension of the same computations.)

**Recognising a frieze.** A quick test: (1) Horizontal mirror? (2) Vertical mirror? (3) Half-turn? (4) Glide? The
answers pin down the group. Footprints walking forward: no, no, no, yes, so p11g ("step").

## 10.6 The seventeen wallpaper groups

*Level: advanced to expert.*

A **wallpaper pattern** repeats in two independent directions. Its translations form a **lattice**
$\Lambda = \{m\mathbf{a} + n\mathbf{b} : m, n \in \mathbb{Z}\}$, all whole-number combinations of two non-parallel
shortest translations $\mathbf{a}$, $\mathbf{b}$. Its symmetry group is a **wallpaper group** (crystallographers say
"plane crystallographic group"). Which rotations can such a pattern have?

### The crystallographic restriction

**Theorem.** A rotation symmetry of a wallpaper pattern has order 1, 2, 3, 4 or 6. In particular no wallpaper, and no
crystal, has 5-fold symmetry.

Here a rotation of **order** $n$ is one by $360°/n$ (doing it $n$ times gives the identity). We give two proofs: one
pure geometry, one algebra.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 262" role="img" aria-label="Two five-fold centres A and B at the smallest possible distance. Turning B about A, and A about B the other way, gives two more five-fold centres B' and A' that are closer together than A and B: a contradiction.">
  <polygon points="90,228 275,228 217.8,52.1 147.2,52.1" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="0"/>
  <line x1="90" y1="228" x2="275" y2="228" stroke="currentColor" stroke-width="2"/>
  <line x1="217.8" y1="52.1" x2="147.2" y2="52.1" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="90" y1="228" x2="147.2" y2="52.1" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="275" y1="228" x2="217.8" y2="52.1" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="90" cy="228" r="4.5" fill="currentColor"/>
  <text x="78" y="242" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="275" cy="228" r="4.5" fill="currentColor"/>
  <text x="287" y="242" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="147.2" cy="52.1" r="4.5" fill="currentColor"/>
  <text x="133.2" y="44.1" text-anchor="middle" font-size="15" fill="currentColor">B′</text>
  <circle cx="217.8" cy="52.1" r="4.5" fill="currentColor"/>
  <text x="231.8" y="44.1" text-anchor="middle" font-size="15" fill="currentColor">A′</text>
  <path d="M 130.7 228 A 40.7 40.7 0 0 0 102.6 189.3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="142" y="212" text-anchor="middle" font-size="13" fill="currentColor">72°</text>
  <path d="M 234.3 228 A 40.7 40.7 0 0 1 262.4 189.3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="223" y="212" text-anchor="middle" font-size="13" fill="currentColor">72°</text>
  <text x="182.5" y="248" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">d</text>
  <text x="182.5" y="78.1" text-anchor="middle" font-size="13" fill="currentColor">shorter than d</text>
</svg>
</div>

*Proof 1 (geometry).* Suppose the pattern has a centre of $n$-fold rotation. Rotation centres of the same order cannot
be arbitrarily close: rotation by $\theta$ about $A$ followed by rotation by $-\theta$ about $B$ is a translation (10.3)
of length $2|AB|\sin(\theta/2)$, which must be at least the length of the shortest translation in the lattice. And
there are infinitely many $n$-fold centres (translate one by the lattice). So we can choose two $n$-fold centres $A$, $B$
at the smallest possible distance $d = |AB|$.

By 10.3, symmetries carry $n$-fold centres to $n$-fold centres. Let $B'$ be the image of $B$ under the rotation by
$\theta = 360°/n$ about $A$, and $A'$ the image of $A$ under the rotation by $-\theta$ about $B$. Both are $n$-fold
centres. In coordinates with $A = (0, 0)$, $B = (1, 0)$ (so $d = 1$):

$$
B' = (\cos\theta, \sin\theta), \qquad A' = (1 - \cos\theta, \sin\theta), \qquad |A'B'| = |1 - 2\cos\theta|.
$$

If $n = 5$: $\cos 72° \approx 0.309$, so $|A'B'| \approx 0.382 < 1$, two $n$-fold centres closer than the minimum. If
$n \ge 7$: $\theta < 60°$, so $\cos\theta > \tfrac12$ and $0 < 2\cos\theta - 1 < 1$, again too close. Only $n = 6$
($A' = B'$, distance 0, which is allowed because they are the same point) and $n \le 4$ ($|A'B'| \ge 1$) survive.
$\square$

*Proof 2 (algebra).* Write the rotation's matrix in the lattice basis $\mathbf{a}$, $\mathbf{b}$. A symmetry rotation
maps the lattice to itself, so it sends $\mathbf{a}$ and $\mathbf{b}$ to whole-number combinations of $\mathbf{a}$ and
$\mathbf{b}$: its matrix in this basis has integer entries, so its **trace** (sum of diagonal entries) is an integer. But
the trace does not depend on the basis, and in the standard basis it is $2\cos\theta$. So $2\cos\theta \in \{-2, -1, 0, 1, 2\}$,
giving $\theta = 180°, 120°, 90°, 60°, 0°$: orders 2, 3, 4, 6, 1. $\square$

The same theorem holds for crystals in space, which is why it has its name: the atoms of a crystal sit on a 3D lattice,
and the only rotation symmetries possible are of order 1, 2, 3, 4, 6. The Curiosity rover on Mars carries an X-ray
diffraction instrument, CheMin, that identifies minerals in drilled rock powder by the way their repeating lattices
scatter X-rays; the lattice geometry of this section is the theory behind every such measurement.

**Quasicrystals.** In 1982 Dan Shechtman observed an alloy whose diffraction pattern had sharp 10-fold symmetry,
apparently forbidden by the theorem. There was no contradiction: the material is ordered but **not periodic**, so it has
no lattice of translations. Shechtman received the 2011 Nobel Prize in Chemistry. The mathematical models are aperiodic
tilings such as Roger Penrose's tilings of the 1970s, with local 5-fold symmetry; in 2023 David Smith, Joseph Myers,
Craig Kaplan and Chaim Goodman-Strauss found the "hat", a single tile that tiles the plane but only aperiodically.

### Seventeen

Combining the five possible rotation orders with mirrors and glides in all consistent ways gives exactly seventeen
groups. Grouped by their highest rotation order:

| rotations | groups |
|---|---|
| none (only translations, mirrors, glides) | p1, pm, pg, cm |
| order 2 | p2, pmm, pmg, pgg, cmm |
| order 3 | p3, p3m1, p31m |
| order 4 | p4, p4m, p4g |
| order 6 | p6, p6m |

In the symbols, p and c mean primitive or centred lattice cell, the number is the highest rotation order, m is a mirror,
g a glide. The picture below shows the rotation centres of p6: every pattern of that type, whatever the motif, has
6-fold centres on a hexagonal lattice, 3-fold centres at the centres of the triangles, 2-fold centres at the midpoints
of the edges, and no mirrors.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="Part of a hexagonal lattice with the rotation centres of the wallpaper group p6: six-fold centres at the lattice points (large dots), three-fold centres at the centres of the triangles (triangles), two-fold centres at the midpoints of the edges (small diamonds).">
  <line x1="40" y1="230" x2="120" y2="230" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="80,226 84,230 80,234 76,230" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="40" y1="230" x2="80" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="60,191.4 64,195.4 60,199.4 56,195.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="120" y1="230" x2="200" y2="230" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="160,226 164,230 160,234 156,230" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="120" y1="230" x2="160" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="140,191.4 144,195.4 140,199.4 136,195.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="120" y1="230" x2="80" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="100,191.4 104,195.4 100,199.4 96,195.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="200" y1="230" x2="280" y2="230" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="240,226 244,230 240,234 236,230" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="200" y1="230" x2="240" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="220,191.4 224,195.4 220,199.4 216,195.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="200" y1="230" x2="160" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="180,191.4 184,195.4 180,199.4 176,195.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="280" y1="230" x2="360" y2="230" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="320,226 324,230 320,234 316,230" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="280" y1="230" x2="320" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="300,191.4 304,195.4 300,199.4 296,195.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="280" y1="230" x2="240" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="260,191.4 264,195.4 260,199.4 256,195.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="360" y1="230" x2="320" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="340,191.4 344,195.4 340,199.4 336,195.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="80" y1="160.7" x2="160" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="120,156.7 124,160.7 120,164.7 116,160.7" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="80" y1="160.7" x2="120" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="100,122.1 104,126.1 100,130.1 96,126.1" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="80" y1="160.7" x2="40" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="60,122.1 64,126.1 60,130.1 56,126.1" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="160" y1="160.7" x2="240" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="200,156.7 204,160.7 200,164.7 196,160.7" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="160" y1="160.7" x2="200" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="180,122.1 184,126.1 180,130.1 176,126.1" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="160" y1="160.7" x2="120" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="140,122.1 144,126.1 140,130.1 136,126.1" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="240" y1="160.7" x2="320" y2="160.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="280,156.7 284,160.7 280,164.7 276,160.7" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="240" y1="160.7" x2="280" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="260,122.1 264,126.1 260,130.1 256,126.1" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="240" y1="160.7" x2="200" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="220,122.1 224,126.1 220,130.1 216,126.1" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="320" y1="160.7" x2="360" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="340,122.1 344,126.1 340,130.1 336,126.1" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="320" y1="160.7" x2="280" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="300,122.1 304,126.1 300,130.1 296,126.1" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="40" y1="91.4" x2="120" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="80,87.4 84,91.4 80,95.4 76,91.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="40" y1="91.4" x2="80" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="60,52.8 64,56.8 60,60.8 56,56.8" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="120" y1="91.4" x2="200" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="160,87.4 164,91.4 160,95.4 156,91.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="120" y1="91.4" x2="160" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="140,52.8 144,56.8 140,60.8 136,56.8" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="120" y1="91.4" x2="80" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="100,52.8 104,56.8 100,60.8 96,56.8" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="200" y1="91.4" x2="280" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="240,87.4 244,91.4 240,95.4 236,91.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="200" y1="91.4" x2="240" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="220,52.8 224,56.8 220,60.8 216,56.8" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="200" y1="91.4" x2="160" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="180,52.8 184,56.8 180,60.8 176,56.8" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="280" y1="91.4" x2="360" y2="91.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="320,87.4 324,91.4 320,95.4 316,91.4" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="280" y1="91.4" x2="320" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="300,52.8 304,56.8 300,60.8 296,56.8" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="280" y1="91.4" x2="240" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="260,52.8 264,56.8 260,60.8 256,56.8" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="360" y1="91.4" x2="320" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="340,52.8 344,56.8 340,60.8 336,56.8" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="80" y1="22.2" x2="160" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="120,18.2 124,22.2 120,26.2 116,22.2" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="160" y1="22.2" x2="240" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="200,18.2 204,22.2 200,26.2 196,22.2" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <line x1="240" y1="22.2" x2="320" y2="22.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <polygon points="280,18.2 284,22.2 280,26.2 276,22.2" fill="#7ccf9a" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="80,200.9 85.2,209.9 74.8,209.9" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="120,177.8 125.2,186.8 114.8,186.8" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="160,200.9 165.2,209.9 154.8,209.9" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="200,177.8 205.2,186.8 194.8,186.8" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="240,200.9 245.2,209.9 234.8,209.9" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="280,177.8 285.2,186.8 274.8,186.8" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="320,200.9 325.2,209.9 314.8,209.9" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="120,131.6 125.2,140.6 114.8,140.6" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="160,108.5 165.2,117.5 154.8,117.5" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="200,131.6 205.2,140.6 194.8,140.6" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="240,108.5 245.2,117.5 234.8,117.5" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="280,131.6 285.2,140.6 274.8,140.6" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="320,108.5 325.2,117.5 314.8,117.5" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="80,62.3 85.2,71.3 74.8,71.3" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="120,39.2 125.2,48.2 114.8,48.2" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="160,62.3 165.2,71.3 154.8,71.3" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="200,39.2 205.2,48.2 194.8,48.2" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="240,62.3 245.2,71.3 234.8,71.3" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="280,39.2 285.2,48.2 274.8,48.2" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="320,62.3 325.2,71.3 314.8,71.3" fill="#eea66f" fill-opacity="1" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="40" cy="230" r="6" fill="#9cc9ea"/>
  <circle cx="40" cy="230" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="120" cy="230" r="6" fill="#9cc9ea"/>
  <circle cx="120" cy="230" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="230" r="6" fill="#9cc9ea"/>
  <circle cx="200" cy="230" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="230" r="6" fill="#9cc9ea"/>
  <circle cx="280" cy="230" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="360" cy="230" r="6" fill="#9cc9ea"/>
  <circle cx="360" cy="230" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="80" cy="160.7" r="6" fill="#9cc9ea"/>
  <circle cx="80" cy="160.7" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="160" cy="160.7" r="6" fill="#9cc9ea"/>
  <circle cx="160" cy="160.7" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="240" cy="160.7" r="6" fill="#9cc9ea"/>
  <circle cx="240" cy="160.7" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="320" cy="160.7" r="6" fill="#9cc9ea"/>
  <circle cx="320" cy="160.7" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="40" cy="91.4" r="6" fill="#9cc9ea"/>
  <circle cx="40" cy="91.4" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="120" cy="91.4" r="6" fill="#9cc9ea"/>
  <circle cx="120" cy="91.4" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="91.4" r="6" fill="#9cc9ea"/>
  <circle cx="200" cy="91.4" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="91.4" r="6" fill="#9cc9ea"/>
  <circle cx="280" cy="91.4" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="360" cy="91.4" r="6" fill="#9cc9ea"/>
  <circle cx="360" cy="91.4" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="80" cy="22.2" r="6" fill="#9cc9ea"/>
  <circle cx="80" cy="22.2" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="160" cy="22.2" r="6" fill="#9cc9ea"/>
  <circle cx="160" cy="22.2" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="240" cy="22.2" r="6" fill="#9cc9ea"/>
  <circle cx="240" cy="22.2" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="320" cy="22.2" r="6" fill="#9cc9ea"/>
  <circle cx="320" cy="22.2" r="6" fill="none" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

*Why exactly seventeen?* An honest summary of the proof: the **point group** (the rotation parts $A$ of all the
symmetries $\mathbf{x} \mapsto A\mathbf{x} + \mathbf{b}$) is a finite group of isometries fixing the origin, so by
Leonardo's theorem it is $C_n$ or $D_n$, and by the restriction $n \in \{1, 2, 3, 4, 6\}$. That gives ten point groups.
Each must preserve a lattice, which restricts the lattice's shape (for example, $C_4$ needs a square lattice, $C_3$ and
$C_6$ a hexagonal one). Then, for each point group and lattice, one works out the ways the translations $\mathbf{b}$
can be attached, which is where glides appear; some point groups allow two or three inequivalent arrangements. The
count comes to 17. The careful case analysis takes several pages; it is done in full in Armstrong's *Groups and
Symmetry* and in Schattschneider's 1978 paper (see Further reading). John Conway's **orbifold** method gives a much
shorter proof by a counting rule he called the "magic theorem", explained in *The Symmetries of Things*.

### History, honestly

The 17 plane groups were enumerated by Evgraf Fedorov in 1891, as a by-product of his classification of the 230
**space groups** (the 3D analogue), which Arthur Schoenflies also completed independently in the same years. George
Pólya rediscovered the plane groups in 1924 and drew a pattern for each; the Dutch artist M. C. Escher studied Pólya's
paper and used it in planning his periodic drawings. It is often said that all 17 groups appear in the tilework of the
Alhambra in Granada; scholars who have counted carefully disagree about whether all 17 really do, so treat that as an
open question of art history rather than a fact.

## 10.7 Similarity and affine maps

*Level: advanced.*

Isometries keep distances. If we ask less of a map, we get bigger groups and coarser geometries.

### Similarities

A **similarity** with ratio $k > 0$ multiplies all distances by $k$: $|f(P)f(Q)| = k|PQ|$. The basic example is a
**dilation** (or **homothety**) with centre $C$ and ratio $k$, which sends $P$ to the point $C + k\,\overrightarrow{CP}$.

**Theorem.** Every similarity is a dilation followed by an isometry. Hence every similarity has the form
$\mathbf{x} \mapsto kA\mathbf{x} + \mathbf{b}$ with $A$ orthogonal, or in complex numbers $z \mapsto az + b$ (direct)
or $z \mapsto a\bar z + b$ (opposite), with $a \ne 0$ and $|a| = k$.

*Proof.* If $f$ has ratio $k$, and $h$ is the dilation about the origin by $1/k$, then $f h$ keeps distances, so it is
an isometry $g$, and $f = g h^{-1}$, an isometry after a dilation by $k$. The formula follows from 10.3. $\square$

Similar figures ([Chapter 5](05-Similarity.md)) are exactly figures related by a similarity. Similarities keep angles,
ratios of lengths, and shapes, and multiply areas by $k^2$.

**Spiral similarities.** A direct similarity $z \mapsto az + b$ with $a \ne 1$ has exactly one fixed point: solve
$z_0 = az_0 + b$ to get $z_0 = b/(1 - a)$. Rewriting, $f(z) - z_0 = a(z - z_0)$: about $z_0$, $f$ rotates by the angle
of $a$ and scales by $|a|$. So every direct similarity that is not a translation is a **spiral similarity**: turn and
scale about one centre. A nautilus-like logarithmic spiral is the orbit of a point under repeated spiral similarity.

**Example.** $f(z) = (1 + i)z + 2$. Fixed point $z_0 = 2/(1 - (1 + i)) = 2/(-i) = 2i$. **Check:**
$(1 + i)(2i) + 2 = 2i - 2 + 2 = 2i$. Since $1 + i = \sqrt2\,e^{i\pi/4}$, $f$ turns by $45°$ and scales by $\sqrt2$
about the point $(0, 2)$.

### Affine maps

An **affine map** is $\mathbf{x} \mapsto A\mathbf{x} + \mathbf{b}$ with $A$ any invertible matrix (determinant not
zero). It can stretch in one direction more than another, and shear. Think of the shadow of a flat picture cast by
parallel sunlight onto another plane.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Left: a square grid with an equilateral-looking triangle and its medians. Right: the same picture after an affine map; the grid becomes a slanted grid, the triangle a different triangle, and the medians are still medians meeting at one point.">
  <line x1="15" y1="205" x2="15" y2="55" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="45" y1="205" x2="45" y2="55" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="75" y1="205" x2="75" y2="55" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="105" y1="205" x2="105" y2="55" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="135" y1="205" x2="135" y2="55" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="165" y1="205" x2="165" y2="55" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="15" y1="205" x2="165" y2="205" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="15" y1="175" x2="165" y2="175" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="15" y1="145" x2="165" y2="145" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="15" y1="115" x2="165" y2="115" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="15" y1="85" x2="165" y2="85" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="15" y1="55" x2="165" y2="55" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <polygon points="30,190 150,190 90,86.1" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="190" x2="120" y2="138" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="150" y1="190" x2="60" y2="138" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="90" y1="86.1" x2="90" y2="190" stroke="#eea66f" stroke-width="1.5"/>
  <circle cx="90" cy="155.4" r="3.5" fill="currentColor"/>
  <line x1="205" y1="205" x2="257.5" y2="85" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="235" y1="196" x2="287.5" y2="76" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="265" y1="187" x2="317.5" y2="67" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="295" y1="178" x2="347.5" y2="58" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="325" y1="169" x2="377.5" y2="49" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="355" y1="160" x2="407.5" y2="40" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="205" y1="205" x2="355" y2="160" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="215.5" y1="181" x2="365.5" y2="136" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="226" y1="157" x2="376" y2="112" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="236.5" y1="133" x2="386.5" y2="88" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="247" y1="109" x2="397" y2="64" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <line x1="257.5" y1="85" x2="407.5" y2="40" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>
  <polygon points="225.2,188.5 345.2,152.5 321.6,87.4" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="225.2" y1="188.5" x2="333.4" y2="119.9" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="345.2" y1="152.5" x2="273.4" y2="137.9" stroke="#eea66f" stroke-width="1.5"/>
  <line x1="321.6" y1="87.4" x2="285.2" y2="170.5" stroke="#eea66f" stroke-width="1.5"/>
  <circle cx="297.4" cy="142.8" r="3.5" fill="currentColor"/>
  <line x1="172" y1="110" x2="190.8" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="198,110 189,114 189,106" fill="currentColor"/>
</svg>
</div>

**What affine maps keep.**

- **Lines and parallels.** The line $\mathbf{p} + t\mathbf{d}$ goes to $(A\mathbf{p} + \mathbf{b}) + t\,A\mathbf{d}$,
  again a line; parallel lines (same $\mathbf{d}$) go to parallel lines (same $A\mathbf{d}$).
- **Ratios along a line.** The point $\mathbf{p} + t\mathbf{d}$ goes to the point with the same parameter $t$; so
  midpoints go to midpoints, and a point dividing a segment $2 : 1$ goes to one dividing the image $2 : 1$.
- **Ratios of areas.** Every area is multiplied by the same number $|\det A|$. *Why:* the unit square goes to the
  parallelogram on the columns of $A$, which has area $|\det A|$ ([Chapter 9](09-Vectors.md), 9.5); so does every
  small grid square, scaled; and any region is approximated by grid squares.

**What they do not keep:** lengths, angles, circles (a circle becomes an ellipse). That is the point: affine geometry
studies only what is left.

**Theorem.** For any two triangles $ABC$ and $A'B'C'$ there is exactly one affine map taking $A, B, C$ to
$A', B', C'$.

*Proof.* Move $A$ to the origin by a translation and similarly $A'$. Then we need a matrix $M$ with
$M(\mathbf{b} - \mathbf{a}) = \mathbf{b}' - \mathbf{a}'$ and $M(\mathbf{c} - \mathbf{a}) = \mathbf{c}' - \mathbf{a}'$.
The vectors $\mathbf{b} - \mathbf{a}$, $\mathbf{c} - \mathbf{a}$ form a basis (the triangle is not flat), and a linear
map can send a basis anywhere, in exactly one way; it is invertible because the images also form a basis. $\square$

**Consequence: prove it for one triangle.** Any statement about triangles that uses only lines, parallels, ratios along
lines and ratios of areas (an **affine statement**) is true for all triangles as soon as it is true for one. For
instance, "the medians meet at a point two thirds of the way along each" is affine, and in an equilateral triangle it is
obvious from the symmetry. That is one more proof of the centroid theorem of [Chapter 9](09-Vectors.md).

**Example (the one-seventh triangle).** On each side of a triangle $ABC$, mark the point one third of the way along
(going round: $D$ on $BC$ with $BD = \tfrac13 BC$, $E$ on $CA$, $F$ on $AB$ likewise), and draw $AD$, $BE$, $CF$. They
enclose a small triangle. What fraction of the area is it? The question is affine, so choose a convenient triangle:
$A = (0, 0)$, $B = (3, 0)$, $C = (0, 3)$, area $\tfrac92$. Then $D = (2, 1)$, $E = (0, 2)$, $F = (1, 0)$. Solving for
the meeting points of the three lines in pairs gives $(\tfrac{12}{7}, \tfrac67)$, $(\tfrac37, \tfrac{12}{7})$,
$(\tfrac67, \tfrac37)$, a triangle of area $\tfrac{9}{14}$ (by the shoelace formula). The ratio is
$\tfrac{9/14}{9/2} = \tfrac17$, for every triangle.

**Ellipses.** The map $(x, y) \mapsto (ax, by)$ sends the unit circle to the ellipse $x^2/a^2 + y^2/b^2 = 1$, and has
determinant $ab$. So the ellipse has area $\pi ab$, a fact that takes real work by other methods.

### A ladder of geometries

Each family of maps is a group, and each larger group keeps fewer properties:

| group | keeps |
|---|---|
| isometries | distances, angles, areas |
| similarities | angles, ratios of distances, shapes |
| affine maps | lines, parallels, ratios along a line, ratios of areas |
| projective maps ([Chapter 18](18-Projective-Geometry.md)) | lines, incidence, cross-ratio |

In 1872 Felix Klein proposed, in what became known as the **Erlangen programme**, that this is what a geometry *is*: a
space together with a group of transformations, and the geometry studies whatever the group leaves unchanged. Euclidean
geometry is the geometry of the isometry group; affine geometry of the affine group. [Chapter 21](21-Where-Geometry-Goes.md)
returns to Klein's idea, which organises the rest of this book.

## Check yourself

??? question "1. Find the image of $(3, 1)$ under the rotation by $90°$ anticlockwise about $(1, 1)$, both with vectors and with complex numbers."

    Vectors: from the centre, $(3, 1) - (1, 1) = (2, 0)$; turning by $90°$ gives $(0, 2)$; adding back the centre gives
    $(1, 3)$. Complex: $z \mapsto (1 + i) + i(z - 1 - i)$, and $z = 3 + i$ gives $(1 + i) + i(2) = 1 + 3i$, the point
    $(1, 3)$. Check: both points are at distance 2 from $(1, 1)$.

??? question "2. Reflect the point $(4, 1)$ in the line $y = x + 1$."

    Reflection in $y = x + 1$ is $(x, y) \mapsto (y - 1, x + 1)$ (shift the line down to $y = x$, swap coordinates,
    shift back). So $(4, 1) \mapsto (0, 5)$. Check: the midpoint $(2, 3)$ is on the line ($3 = 2 + 1$), and the
    segment's direction $(-4, 4)$ is perpendicular to the line's direction $(1, 1)$.

??? question "3. What is reflection in $x = 1$ followed by reflection in $x = 4$? And in the other order?"

    Reflection in $x = 1$ is $x \mapsto 2 - x$, in $x = 4$ is $x \mapsto 8 - x$. First then second:
    $x \mapsto 8 - (2 - x) = x + 6$, the translation by $(6, 0)$: twice the distance 3 between the mirrors, from the
    first mirror towards the second. In the other order: $x \mapsto 2 - (8 - x) = x - 6$, the translation by $(-6, 0)$.
    Reflections do not commute.

??? question "4. What is reflection in the $x$-axis followed by reflection in the line $y = x$?"

    $(x, y) \mapsto (x, -y) \mapsto (-y, x)$. That is the rotation by $+90°$ about the origin. The angle from the first
    mirror ($0°$) to the second ($45°$) is $45°$, and twice it is $90°$, as the two-mirror theorem says.

??? question "5. Give the symmetry group of each: the letters A, H, N, F; a regular octagon; a rectangle that is not a square; a three-legged triskelion."

    A: $D_1$ (one vertical mirror). H: $D_2$ (two mirrors and a half-turn). N: $C_2$ (a half-turn only). F: $C_1$
    (nothing but the identity). Regular octagon: $D_8$, 16 elements. Non-square rectangle: $D_2$, 4 elements (identity,
    half-turn, two mirrors through the midpoints of opposite sides; the diagonals are not mirrors). Triskelion: $C_3$.

??? question "6. Name the frieze group of each repeating letter pattern: (a) ...b b b b...; (b) ...b d b d...; (c) ...b p b p...; (d) ...b q b q...; (e) ...b d p q b d p q..."

    (a) Translations only: p1 (hop). (b) b and d are mirror images in a vertical line: vertical mirrors, nothing else,
    p1m1 (sidle). (c) p is b reflected in the horizontal centre line, then shifted along: a proper glide, p11g (step).
    (d) q is b turned by $180°$: half-turns, p2 (spinning hop). (e) Vertical mirrors (b|d and p|q), half-turns (b to q,
    d to p) and a glide (b to p shifted by two places), but no horizontal mirror: p2mg (spinning sidle).

??? question "7. Show that a glide reflection squared is a translation, and use this to show that the footprint pattern (p11g) has no vertical mirror."

    Take the glide $g(x, y) = (x + a, -y)$. Then $g(g(x, y)) = (x + 2a, y)$, the translation by $2a$. For the
    footprints: if there were a vertical mirror $v$, then by fact (c) of 10.5 in reverse, $v$ composed with the glide
    would be a half-turn ($(x, y) \mapsto (2q - x, y) \mapsto (2q - x + a, -y)$, a half-turn about
    $(q + \tfrac a2, 0)$). A left footprint turned by $180°$ is a left footprint pointing backwards, which does not
    occur in the pattern. So there is no vertical mirror.

??? question "8. Use the trace argument to show that no lattice is preserved by a rotation of $72°$ or of $45°$."

    A rotation preserving a lattice has an integer trace $2\cos\theta$. But $2\cos 72° = \tfrac{\sqrt5 - 1}{2} \approx 0.618$
    and $2\cos 45° = \sqrt2 \approx 1.414$ are not integers. So neither rotation preserves any lattice: no wallpaper
    has 5-fold or 8-fold symmetry.

??? question "9. Find the centre, angle and scale of the spiral similarity $f(z) = (1 + i)z + 2$, and find $f(f(0))$ two ways."

    Centre $z_0 = 2/(1 - (1 + i)) = 2/(-i) = 2i$; angle $45°$; scale $\sqrt2$ (since $1 + i = \sqrt2 e^{i\pi/4}$).
    Directly: $f(0) = 2$, $f(2) = 2 + 2i + 2 = 4 + 2i$. Via the centre: $f^2(z) - 2i = (1 + i)^2(z - 2i) = 2i(z - 2i)$,
    so $f^2(0) = 2i + 2i(-2i) = 2i + 4$. The same.

??? question "10. Find the affine map sending $(0, 0), (1, 0), (0, 1)$ to $(1, 1), (4, 2), (2, 5)$, and the area of the image triangle."

    $\mathbf{b} = (1, 1)$, and the columns of $A$ are $(4, 2) - (1, 1) = (3, 1)$ and $(2, 5) - (1, 1) = (1, 4)$:
    $(x, y) \mapsto (3x + y + 1,\ x + 4y + 1)$. Then $\det A = 3 \cdot 4 - 1 \cdot 1 = 11$, so the image of the triangle
    of area $\tfrac12$ has area $\tfrac{11}{2}$. Check with the shoelace formula on $(1,1), (4,2), (2,5)$:
    $\tfrac12|(1\cdot2 - 4\cdot1) + (4\cdot5 - 2\cdot2) + (2\cdot1 - 1\cdot5)| = \tfrac12|{-2} + 16 - 3| = \tfrac{11}{2}$.

??? question "11. Prove that a bounded figure cannot have a translation or a glide reflection among its symmetries."

    If a translation $T$ by $\mathbf{v} \ne \mathbf{0}$ were a symmetry, so would be $T^n$, translation by
    $n\mathbf{v}$, for all $n$. A point $P$ of the figure would then have images $P + n\mathbf{v}$ in the figure,
    arbitrarily far away: the figure is not bounded. A glide $g$ squares to a nonzero translation (exercise 7), so the
    same argument applies to $g^2$. (This is also why Leonardo's theorem needs only rotations and reflections.)

??? question "12. Prove that the composite of the half-turns about points $P$ and $Q$ (first $P$, then $Q$) is the translation by $2\overrightarrow{PQ}$. Deduce that a pattern with two half-turn centres has a translation symmetry."

    In vectors, the half-turn about $P$ is $\mathbf{x} \mapsto 2\mathbf{p} - \mathbf{x}$, and about $Q$ is
    $\mathbf{x} \mapsto 2\mathbf{q} - \mathbf{x}$. Composite: $\mathbf{x} \mapsto 2\mathbf{q} - (2\mathbf{p} - \mathbf{x}) = \mathbf{x} + 2(\mathbf{q} - \mathbf{p})$,
    the translation by $2\overrightarrow{PQ}$. So a figure with two different half-turn centres is invariant under a
    nonzero translation, hence (exercise 11) unbounded: a bounded figure has at most one centre of symmetry.

## What you learned

- Isometries keep distances; there are exactly four kinds: translations, rotations, reflections, glide reflections.
- Every isometry is a product of at most three reflections; two reflections make a translation (parallel mirrors,
  twice the distance) or a rotation (crossing mirrors, twice the angle).
- Every isometry is $\mathbf{x} \mapsto A\mathbf{x} + \mathbf{b}$ with $A$ orthogonal, or $z \mapsto az + b$,
  $a\bar z + b$ with $|a| = 1$; direct ones have $\det A = 1$.
- Rotation angles add under composition; conjugation carries centres to centres and mirrors to mirrors.
- A bounded figure's symmetry group is $C_n$ or $D_n$ (Leonardo); a frieze has one of 7 groups; a wallpaper one of 17.
- Crystallographic restriction: lattice symmetries have order 1, 2, 3, 4 or 6 (two proofs); quasicrystals escape by
  not being periodic.
- Similarities are spiral similarities or translations (direct case); affine maps keep lines, parallels, ratios along
  lines and area ratios, so affine facts about triangles need checking on one triangle only.

**Next:** [Chapter 11](11-Solid-Geometry.md), geometry in three dimensions: polyhedra, the five Platonic solids,
Euler's formula and the volumes Archimedes found.

## Further reading

- H. S. M. Coxeter, *Introduction to Geometry*, 2nd edition, 1969. Chapters 3 and 4 on isometries and the symmetry
  groups of friezes and wallpapers; chapter 5 on similarity.
- M. A. Armstrong, *Groups and Symmetry*, 1988. Isometries, the crystallographic restriction and the classification of
  the wallpaper groups, at undergraduate level.
- H. Weyl, *Symmetry*, 1952. The classic lectures, source of the name "Leonardo's theorem".
- J. H. Conway, H. Burgiel and C. Goodman-Strauss, *The Symmetries of Things*, 2008. The orbifold notation, the frieze
  names used here, and the magic theorem.
- D. Schattschneider, "The plane symmetry groups: their recognition and notation", *American Mathematical Monthly* 85,
  1978.
- G. Pólya, "Über die Analogie der Kristallsymmetrie in der Ebene", *Zeitschrift für Kristallographie* 60, 1924.
- B. Grünbaum and G. C. Shephard, *Tilings and Patterns*, 1987. The encyclopaedia of the subject.
- G. E. Martin, *Transformation Geometry: An Introduction to Symmetry*, 1982.
- On this site: the Topics lessons [Slides, flips and turns](../../topics/geometry/level-2/06-slides-flips-turns.md),
  [Lines of symmetry](../../topics/geometry/level-2/02-lines-of-symmetry.md),
  [Rotational symmetry](../../topics/geometry/level-4/06-rotational-symmetry.md),
  [Transformations on the grid](../../topics/geometry/level-5/03-transformations-grid.md) and
  [Tiling the floor](../../topics/geometry/level-2/05-tiling-the-floor.md); the U of T guides
  [Linear transformations](../../uoft/MAT240H1/unit04.md) and
  [Isometries: orthogonal and unitary operators](../../uoft/MAT247H1/unit04.md); the Algebra book's
  [Groups](../algebra/13-Groups.md) and [Group actions and Sylow](../algebra/16-Group-Actions-and-Sylow.md).
