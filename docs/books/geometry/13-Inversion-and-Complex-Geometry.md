# 13. Inversion and complex geometry

*Some problems about circles are hard only because circles are round. Find a circle that touches three given circles;
show that a ring of circles squeezed between two others always closes up, wherever it starts; prove Ptolemy's
theorem about four points on a circle. This chapter gives you two tools that make such problems easy. The first is
to write points as complex numbers, so that turning and scaling become multiplication. The second is inversion, a
map that turns a circle inside out and can change circles into straight lines. Together they lead to the Möbius
transformations, the cross-ratio and the Riemann sphere, where the plane is closed up by one extra point at infinity.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to do plane geometry with complex numbers: distance, angle, rotation, similarity, and a test for equilateral triangles
    - what inversion in a circle is, and why it sends lines and circles to lines and circles (two proofs)
    - how inversion solves Apollonius' problem and proves Steiner's porism about chains of circles
    - Möbius transformations, the cross-ratio, and the test for four points on one circle
    - Ptolemy's theorem and inequality, proved twice (by inversion and by a complex identity)
    - the Riemann sphere and stereographic projection, and why circles on the sphere become circles in the plane

    **You need:** [Chapter 6](06-Circles.md) (inscribed angles, tangents, power of a point),
    [Chapter 10](10-Transformations-and-Symmetry.md) (isometries and similarities) and
    [Chapter 12](12-Triangle-Centres-and-Classical-Theorems.md) (where Ptolemy's theorem first appears). From the
    Algebra book, [Complex numbers](../algebra/09-Complex-Numbers.md): the complex plane, modulus, argument and polar form.

    **Levels:** 13.1 and 13.2 are advanced but concrete; 13.3 and 13.5 are advanced; 13.4 and 13.6 are advanced to
    expert.

## 13.1 Geometry with complex numbers

*Level: advanced.* Here is a problem. On each side of any triangle, build an equilateral triangle pointing outward,
and mark its centre. Join the three centres. The result is always an equilateral triangle, whatever triangle you
began with. This is called **Napoleon's theorem** (the name is a tradition; there is no evidence that Napoleon
Bonaparte found or proved it). A proof with angles and congruent triangles is possible but fiddly. With complex
numbers it is a few lines of algebra. First we set up the dictionary.

**Points are numbers.** The complex number $z = x + iy$ is the point $(x, y)$. The **modulus** $|z| = \sqrt{x^2 + y^2}$
is the distance from $0$ to $z$, so the distance between two points is

$$
|z - w| .
$$

The **argument** $\arg z$ is the angle from the positive real axis to $z$, and every nonzero $z$ can be written in polar
form $z = r e^{i\theta}$ with $r = |z|$ and $\theta = \arg z$. The **conjugate** $\bar z = x - iy$ is the mirror image of
$z$ in the real axis, and $z \bar z = |z|^2$.

**Moves are formulas.** Each basic motion of the plane is a short formula.

| Motion | Formula | Why |
| --- | --- | --- |
| translation by $b$ | $z \mapsto z + b$ | adding $b$ adds its coordinates |
| rotation by $\theta$ about $0$ | $z \mapsto e^{i\theta} z$ | multiplying moduli and adding arguments |
| scaling by $r > 0$ about $0$ | $z \mapsto r z$ | multiplies every distance from $0$ by $r$ |
| reflection in the real axis | $z \mapsto \bar z$ | changes the sign of $y$ |

The rotation rule is the heart of it: for $a = re^{i\alpha}$, the product $az = r|z| e^{i(\alpha + \arg z)}$ has modulus
multiplied by $r$ and angle increased by $\alpha$. So multiplying by $a$ turns the whole plane through $\arg a$ about $0$
and stretches it by $|a|$, a **spiral similarity**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 299.0 249.5" role="img" aria-label="A triangle with corners 1, 3 and 2 plus i, and its image under multiplication by 1 plus i: the same shape turned 45 degrees about 0 and made root 2 times larger">
  <line x1="17.5" y1="204.5" x2="265.0" y2="204.5" stroke="currentColor" stroke-width="1"/>
  <line x1="67.0" y1="232.0" x2="67.0" y2="17.5" stroke="currentColor" stroke-width="1"/>
  <polygon points="122.0,204.5 232.0,204.5 177.0,149.5" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <polygon points="122.0,149.5 232.0,39.5 122.0,39.5" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <circle cx="122.0" cy="204.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="232.0" cy="204.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="177.0" cy="149.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="122.0" y="220.5" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="232.0" y="220.5" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="195.0" y="153.5" font-size="12" text-anchor="middle" fill="currentColor">2+i</text>
  <text x="142.0" y="153.5" font-size="12" text-anchor="middle" fill="currentColor">1+i</text>
  <text x="256.0" y="43.5" font-size="12" text-anchor="middle" fill="currentColor">3+3i</text>
  <text x="98.0" y="39.5" font-size="12" text-anchor="middle" fill="currentColor">1+3i</text>
  <circle cx="122.0" cy="149.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <line x1="67.0" y1="204.5" x2="122.0" y2="149.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
  <circle cx="232.0" cy="39.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <line x1="67.0" y1="204.5" x2="232.0" y2="39.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
  <circle cx="122.0" cy="39.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <line x1="67.0" y1="204.5" x2="122.0" y2="39.5" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
  <polygon points="67.0,204.5 105.5,204.5 105.5,203.5 105.4,202.5 105.4,201.5 105.3,200.5 105.2,199.5 105.0,198.5 104.9,197.5 104.7,196.5 104.4,195.5 104.2,194.5 103.9,193.6 103.6,192.6 103.3,191.6 102.9,190.7 102.6,189.8 102.2,188.8 101.7,187.9 101.3,187.0 100.8,186.1 100.3,185.2 99.8,184.4 99.3,183.5 98.7,182.7 98.1,181.9 97.5,181.1 96.9,180.3 96.3,179.5 95.6,178.7 94.9,178.0 94.2,177.3" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <text x="111.0" y="196.5" font-size="11" text-anchor="middle" fill="currentColor">45°</text>
  <text x="59.0" y="218.5" font-size="12" text-anchor="middle" fill="currentColor">0</text>
</svg>
</div>

**Example.** Multiply the triangle with corners $1$, $3$, $2 + i$ by $a = 1 + i$. Since $|1 + i| = \sqrt2$ and
$\arg(1 + i) = 45^\circ$, the image is the same triangle turned $45^\circ$ about $0$ and enlarged by $\sqrt 2$. The new
corners are $(1+i)\cdot 1 = 1 + i$, $(1+i) \cdot 3 = 3 + 3i$ and $(1+i)(2+i) = 2 + i + 2i + i^2 = 1 + 3i$.
Check: the side from $1$ to $3$ had length $2$; the image side from $1+i$ to $3+3i$ has length $|2 + 2i| = 2\sqrt2$.

**Theorem 13.1.** Every similarity of the plane that keeps orientation (a **direct similarity**) has the form
$z \mapsto az + b$ with $a \neq 0$, and every one that reverses orientation has the form $z \mapsto a\bar z + b$.

*Proof.* A direct similarity $S$ with ratio $k$ is determined by where it sends two points, say $0 \mapsto b$ and
$1 \mapsto c$. The map $T(z) = (c - b)z + b$ is a direct similarity with the same effect on $0$ and $1$. Then
$T^{-1} S$ is a direct similarity fixing $0$ and $1$, with ratio $1$ (it keeps the distance from $0$ to $1$), so it is an
orientation-keeping isometry with two fixed points. By [Chapter 10](10-Transformations-and-Symmetry.md) such an
isometry is a rotation about each fixed point, and a rotation fixing a second point is the identity. So $S = T$. For an
orientation-reversing $S$, apply this to $z \mapsto S(\bar z)$. $\square$

**Angles and lines.** For three points $a, b, c$ with $a \neq b$, the quotient

$$
\frac{c - a}{b - a}
$$

has modulus $|c - a|/|b - a|$ and argument equal to the angle turned from the direction $a \to b$ to the direction
$a \to c$. So:

- $a, b, c$ are **collinear** exactly when $\dfrac{c - a}{b - a}$ is real;
- $ac \perp ab$ exactly when $\dfrac{c - a}{b - a}$ is purely imaginary;
- triangles $abc$ and $a'b'c'$ are **similar with the same orientation** exactly when $\dfrac{c - a}{b - a} = \dfrac{c' - a'}{b' - a'}$
  (the two triangles have the same angle at $a$ and the same ratio of the two sides there, which is SAS similarity
  from [Chapter 5](05-Similarity.md)).

**Equilateral triangles.** Let $\omega = e^{2\pi i/3} = -\tfrac12 + \tfrac{\sqrt3}{2} i$, a cube root of $1$. It satisfies
$1 + \omega + \omega^2 = 0$ (because $\omega^3 - 1 = (\omega - 1)(\omega^2 + \omega + 1) = 0$ and $\omega \neq 1$).

**Lemma 13.2.** Three points $a, b, c$ form an equilateral triangle in counterclockwise order if and only if

$$
a + \omega b + \omega^2 c = 0 .
$$

*Proof.* The triangle is equilateral and counterclockwise exactly when $c$ is $b$ turned $60^\circ$ counterclockwise
about $a$: $c - a = e^{i\pi/3}(b - a)$. Now $e^{i\pi/3} = -\omega^2$ (both have modulus $1$, and
$\arg(-\omega^2) = 180^\circ + 240^\circ = 420^\circ = 60^\circ$). So the condition is $c = a - \omega^2 b + \omega^2 a
= (1 + \omega^2) a - \omega^2 b = -\omega a - \omega^2 b$, that is $\omega a + \omega^2 b + c = 0$. Multiply by
$\omega^2$ and use $\omega^3 = 1$: $a + \omega b + \omega^2 c = 0$. Every step can be reversed. $\square$

**Theorem 13.3 (Napoleon).** The centres of the equilateral triangles built outward on the sides of any triangle form
an equilateral triangle.

*Proof.* Label the triangle $a, b, c$ counterclockwise. The outward equilateral triangle on side $ab$ lies to the right
of the direction $a \to b$, so its third corner is $b$ turned $60^\circ$ clockwise about $a$:
$p = a + e^{-i\pi/3}(b - a)$. Since $e^{-i\pi/3} = -\omega$, this is $p = a - \omega b + \omega a = (1 + \omega)a - \omega b
= -\omega^2 a - \omega b$. The centre is the average of the corners:

$$
3 g_1 = a + b + p = (1 - \omega^2) a + (1 - \omega) b .
$$

In the same way $3g_2 = (1 - \omega^2) b + (1 - \omega) c$ and $3g_3 = (1 - \omega^2) c + (1 - \omega) a$. Now collect
$3(g_1 + \omega g_2 + \omega^2 g_3)$ by the letters:

$$
\begin{aligned}
a&: \ (1 - \omega^2) + \omega^2(1 - \omega) = 1 - \omega^3 = 0, \\
b&: \ (1 - \omega) + \omega(1 - \omega^2) = 1 - \omega^3 = 0, \\
c&: \ \omega(1 - \omega) + \omega^2 (1 - \omega^2) = \omega - \omega^4 = \omega - \omega = 0 .
\end{aligned}
$$

So $g_1 + \omega g_2 + \omega^2 g_3 = 0$, and by Lemma 13.2 the centres form an equilateral triangle. $\square$

**Check.** Take $a = 0$, $b = 4$, $c = 1 + 3i$. The three centres come out at distance $3.7764\ldots$ from each other,
all three the same, as a short computation (below) confirms.

!!! example "Try it in Python"
    ```python
    import cmath, math
    a, b, c = 0, 4, 1 + 3j                      # counterclockwise
    rot = cmath.exp(-1j * math.pi / 3)          # turn 60 degrees clockwise
    centres = [(p + q + p + rot * (q - p)) / 3 for p, q in [(a, b), (b, c), (c, a)]]
    print([abs(centres[i] - centres[(i + 1) % 3]) for i in range(3)])
    ```

The method is always the same: name the points, write each condition as an equation in complex numbers, and let the
algebra of $\omega$, conjugates and quotients do the work. Its weakness is that formulas can grow large; its strength is
that it never needs a clever extra line.

## 13.2 Inversion in a circle

*Level: advanced.* Reflection in a line swaps the two sides of the line and fixes the line itself. Is there a
"reflection in a circle" that swaps inside and outside and fixes the circle? There is, and it is one of the most
useful maps in geometry.

**Definition.** Let $\Gamma$ be a circle with centre $O$ and radius $r$. **Inversion** in $\Gamma$ sends each point
$P \neq O$ to the point $P'$ on the ray from $O$ through $P$ with

$$
OP \cdot OP' = r^2 .
$$

$O$ is the **centre of inversion** and $r$ its **radius**. Points on $\Gamma$ stay put ($OP = r$ gives $OP' = r$). A
point inside, close to the circle, goes to a point outside, close to the circle; a point near $O$ goes very far away.
Doing the inversion twice gives back $P$, since $OP'' = r^2/OP' = OP$: inversion is its own inverse.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 332.0 288.0" role="img" aria-label="Inversion in a circle of radius r about O: the point P inside goes to P prime outside on the same ray, with OP times OP prime equal to r squared. The tangent at T, where the perpendicular to OP at P meets the circle, passes through P prime">
  <circle cx="144.0" cy="144.0" r="110.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.4"/>
  <line x1="144.0" y1="144.0" x2="302.4" y2="64.8" stroke="currentColor" stroke-width="1.2"/>
  <line x1="210.0" y1="111.0" x2="173.5" y2="38.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="173.5" y1="38.0" x2="290.7" y2="70.7" stroke="currentColor" stroke-width="1.2"/>
  <line x1="144.0" y1="144.0" x2="173.5" y2="38.0" stroke="currentColor" stroke-width="1"/>
  <circle cx="144.0" cy="144.0" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="140.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <circle cx="210.0" cy="111.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="216.0" y="127.0" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="290.7" cy="70.7" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="300.7" y="86.7" font-size="12" text-anchor="middle" fill="currentColor">P′</text>
  <circle cx="173.5" cy="38.0" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="169.5" y="29.0" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <text x="84.0" y="206.0" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">r</text>
  <line x1="144.0" y1="144.0" x2="66.2" y2="221.8" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
</svg>
</div>

**Constructing $P'$.** For $P$ inside $\Gamma$, draw the perpendicular to $OP$ at $P$; it meets $\Gamma$ at $T$. The
tangent to $\Gamma$ at $T$ meets the ray $OP$ at $P'$. *Why:* the tangent is perpendicular to the radius $OT$, so
$OTP'$ is a right triangle with altitude $TP$. By the altitude theorem of [Chapter 5](05-Similarity.md) (triangles
$OPT$ and $OTP'$ are similar, sharing the angle at $O$, each with a right angle), $OP/OT = OT/OP'$, so
$OP \cdot OP' = OT^2 = r^2$.

**In complex numbers.** Put $O$ at $0$. The point $P'$ has the same argument as $z$ and modulus $r^2/|z|$, so

$$
z' = \frac{r^2}{|z|^2} z = \frac{r^2 z}{z \bar z} = \frac{r^2}{\bar z} .
$$

**Example.** Invert $z = 1 + i$ in the unit circle: $z' = 1/\overline{(1+i)} = 1/(1 - i) = (1+i)/2$. Check:
$|z| \cdot |z'| = \sqrt2 \cdot \tfrac{\sqrt2}{2} = 1$, and both lie on the line $y = x$.

Inversion is not defined at $O$, and nothing goes to $O$. It is natural to add one **point at infinity**, written
$\infty$, and to say that $O$ and $\infty$ are swapped. We make this precise in 13.6.

**How inversion changes distances.** Let $P, Q$ go to $P', Q'$ (with $O$, $P$, $Q$ not on one line). From
$OP \cdot OP' = OQ \cdot OQ' = r^2$ we get $OP/OQ = OQ'/OP'$, and the triangles $OPQ$ and $OQ'P'$ share the angle at
$O$. By SAS similarity they are similar, with $P'Q'/PQ = OQ'/OP = r^2/(OP \cdot OQ)$. So

$$
P'Q' = \frac{r^2 \cdot PQ}{OP \cdot OQ} .
$$

(When $O, P, Q$ are collinear the same formula follows from $OP' = r^2/OP$ by subtraction.) Note also from the
similarity that $\angle OPQ = \angle OQ'P'$: inversion swaps angles in this mirror-like way. We shall use the distance
formula for Ptolemy's theorem in 13.5.

### Lines and circles

The main theorem says that inversion sends lines and circles to lines and circles. Precisely:

**Theorem 13.4.** Under inversion with centre $O$:

1. a line through $O$ goes to itself;
2. a line not through $O$ goes to a circle through $O$;
3. a circle through $O$ goes to a line not through $O$;
4. a circle not through $O$ goes to a circle not through $O$.

(In each case, "goes to" means the image of the figure with $O$ removed, plus or minus the point $O$ itself.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 324.0 334.0" role="img" aria-label="Inversion in the dashed circle of radius 2 about O sends the line x equals 3 to the small circle through O with centre two thirds and radius two thirds. Points A, B, C on the line go to A prime, B prime, C prime on the circle">
  <circle cx="132.0" cy="167.0" r="100.0" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="282.0" y1="317.0" x2="282.0" y2="17.0" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="165.3" cy="167.0" r="33.3" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.8"/>
  <line x1="132.0" y1="167.0" x2="282.0" y2="167.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <circle cx="282.0" cy="167.0" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="198.7" cy="167.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="294.0" y="171.0" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <text x="208.7" y="181.0" font-size="12" text-anchor="middle" fill="currentColor">A′</text>
  <line x1="132.0" y1="167.0" x2="282.0" y2="67.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <circle cx="282.0" cy="67.0" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="178.2" cy="136.2" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="294.0" y="71.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <text x="188.2" y="130.2" font-size="12" text-anchor="middle" fill="currentColor">B′</text>
  <line x1="132.0" y1="167.0" x2="282.0" y2="297.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <circle cx="282.0" cy="297.0" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="170.1" cy="200.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="294.0" y="301.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <text x="182.1" y="214.0" font-size="12" text-anchor="middle" fill="currentColor">C′</text>
  <circle cx="132.0" cy="167.0" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="122.0" y="161.0" font-size="12" text-anchor="middle" fill="currentColor">O</text>
</svg>
</div>

*First proof (geometric), for case 2.* Let $\ell$ be a line not through $O$, and let $A$ be the foot of the
perpendicular from $O$ to $\ell$. Take any other point $B$ of $\ell$, with images $A'$ and $B'$. As above, triangles
$OAB$ and $OB'A'$ are similar, so $\angle OB'A' = \angle OAB = 90^\circ$. So $B'$ sees the fixed segment $OA'$ at a right
angle, and by Thales' theorem ([Chapter 6](06-Circles.md)) $B'$ lies on the circle with diameter $OA'$. Conversely every
point of that circle except $O$ comes from a point of $\ell$, by the same argument run backwards. Case 3 is case 2 read
in reverse, since inversion is its own inverse. Case 1 is clear from the definition.

For case 4, let the circle $\gamma$ not pass through $O$, and let a line through $O$ meet it at $P$ and $Q$. By the
power of a point ([Chapter 6](06-Circles.md)), $OP \cdot OQ = p$, a constant (the power of $O$ with respect to $\gamma$,
taken positive, if $O$ is outside $\gamma$). Then $OP' = r^2/OP = (r^2/p)\, OQ$. So $P'$ is the image of $Q$ under the
scaling about $O$ by the factor $r^2/p$; as $Q$ runs over $\gamma$, $P'$ runs over the scaled copy of $\gamma$, which
is a circle. (If $O$ is inside $\gamma$, the same works with $P$ and $Q$ on opposite sides of $O$, using the scaling by
$-r^2/p$.) $\square$

*Second proof (algebraic), all cases at once.* Every circle and every line can be written as

$$
\alpha z \bar z + \beta \bar z + \bar\beta z + \gamma = 0, \qquad \alpha, \gamma \text{ real}, \ \beta \text{ complex}.
$$

For $\alpha \neq 0$ this is a circle: divide by $\alpha$ and complete the square to get
$|z + \beta/\alpha|^2 = |\beta|^2/\alpha^2 - \gamma/\alpha$ (a real circle when the right side is positive). For
$\alpha = 0$ it is $2\,\mathrm{Re}(\bar\beta z) + \gamma = 0$, a line. The curve passes through $0$ exactly when
$\gamma = 0$. Now invert in the unit circle: $w = 1/\bar z$, so $z = 1/\bar w$, $\bar z = 1/w$ and
$z \bar z = 1/(w \bar w)$. Substituting and multiplying by $w \bar w$:

$$
\alpha + \beta w + \bar\beta \bar w + \gamma w \bar w = 0 .
$$

This is the same kind of equation with $\alpha$ and $\gamma$ swapped. So circles and lines go to circles and lines,
and "passing through $0$" ($\gamma = 0$) is swapped with "being a line" ($\alpha = 0$), which is exactly the list
above. $\square$

The algebraic proof is worth a moment's thought. Lines and circles are one family, the **generalised circles**, and a
line is simply a circle through the point $\infty$.

**Example.** Invert the circle $|z - 2| = 1$ in the unit circle. It is symmetric in the real axis and crosses it at $1$
and $3$, so its image is a circle symmetric in the real axis crossing it at $1/1 = 1$ and $1/3$. Hence the image has
diameter from $\tfrac13$ to $1$: centre $\tfrac23$, radius $\tfrac13$. Notice that the centre $2$ did **not** go to the
centre: $2$ goes to $\tfrac12$, not $\tfrac23$. In general, inverting the circle with centre $c$ and radius $s$ (not
through $O = 0$) in the circle of radius $r$ gives the circle with

$$
\text{centre } \frac{r^2 c}{|c|^2 - s^2}, \qquad \text{radius } \frac{r^2 s}{\big||c|^2 - s^2\big|} .
$$

Check with $c = 2$, $s = 1$, $r = 1$: centre $2/3$, radius $1/3$.

### Angles are kept

**Theorem 13.5.** Inversion preserves the size of the angle between two curves at a point (other than $O$), and
reverses its sense.

*Proof for lines and circles.* Let two lines $\ell_1, \ell_2$ meet at $P \neq O$ at angle $\theta$. If they do not pass
through $O$, their images are circles through $O$ and $P'$. The image circle of $\ell_1$ has its centre on the
perpendicular from $O$ to $\ell_1$ (by the first proof above), so its tangent at $O$ is parallel to $\ell_1$. The same
holds for $\ell_2$. So the two image circles cross at $O$ at angle $\theta$. Two circles meeting at two points meet at
the same angle at both (the figure is symmetric in the line through the two centres), so they also cross at $P'$ at angle
$\theta$. If a line passes through $O$ it is its own image and a similar, easier argument applies. For curves in
general, the angle between curves is defined as the angle between their tangent lines; inversion is smooth away from
$O$, so it carries tangent lines to tangent circles of the images, and the result for lines carries over. The reversal
of sense comes from the mirror symmetry: inversion is the identity on $\Gamma$ but swaps its two sides, just as a
reflection does. $\square$

A map that keeps angles is called **conformal**. Inversions are conformal but reverse orientation, like reflections.
In 1850 Joseph Liouville proved a striking converse in three dimensions: every conformal map of a region of space is a
composition of inversions in spheres, reflections and similarities. In the plane there are far more conformal maps
(every complex differentiable function with nonzero derivative is one), which is why complex analysis is so rich.

**Tangency is kept.** Two curves that touch (meet at angle $0$) still touch after inversion. That is the key to the
next section.

**A little history.** Jakob Steiner used inversion in unpublished work in the 1820s, and several others found it
independently in the following decades; William Thomson (later Lord Kelvin) used it in the 1840s to solve problems
of electric charge on conductors, his "method of images". The name and the systematic theory grew through the 19th
century.

<figure class="play" data-play="invert"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Inversion in the unit circle: slide a line and its image is a circle through the centre.</figcaption></figure>

## 13.3 Apollonius' problem and Steiner chains

*Level: advanced.* Apollonius of Perga (about 200 BC) wrote a book, *Tangencies*, now lost, that solved this
problem: **given three circles, draw a circle touching all three.** We know of the book from a summary by Pappus of
Alexandria. The ten special cases where some of the "circles" are points or lines are included. Inversion turns the
hardest case into the easiest.

**How many answers?** A circle touching a given circle can touch it from outside or contain it (or be contained by
it). With three circles there are $2^3 = 8$ choices of "inside or outside" for each, and for three circles that are
far apart and lie outside each other, all eight choices give exactly one solution each: **eight solutions** in
general. For special positions there can be fewer (or, in degenerate cases, infinitely many).

**The method.** Suppose the three circles $C_1, C_2, C_3$ have centres $O_1, O_2, O_3$ and radii $r_1 \le r_2, r_3$,
and lie outside one another. Look for a circle $K$ with centre $X$ and radius $\rho$ that touches all three from
outside, so $XO_i = \rho + r_i$.

1. **Shrink.** Reduce all three radii by $r_1$ and enlarge $\rho$ by $r_1$. The distances $XO_i = (\rho + r_1) + (r_i - r_1)$
   are unchanged, so the circle with centre $X$ and radius $\rho + r_1$ touches the two shrunken circles (radii
   $r_2 - r_1$, $r_3 - r_1$) and passes through the point $O_1$. We now need a circle **through a point** touching two
   circles.
2. **Invert** about $O_1$. The wanted circle passes through $O_1$, so it becomes a **line**. The two other circles
   become circles (they do not pass through $O_1$). Tangency is kept, so the line touches both image circles: it is a
   **common tangent** of two circles, and two circles outside each other have four of them, easy to construct.
3. **Invert back** each common tangent to get a circle through $O_1$, and then undo the shrinking.

The other sign choices (touching some circles from inside) are handled the same way, enlarging some radii instead of
shrinking them. This approach, reducing a circle to a point, goes back to François Viète, who published a solution of
Apollonius' problem in 1600; the use of inversion came later. Since each step uses only a straightedge and compass,
every solution of Apollonius' problem is **constructible**, the question taken up in [Chapter 14](14-Constructions-and-Impossibility.md).

**Descartes' circle theorem.** A special case has a beautiful formula. If four circles each touch the other three,
at six distinct points, write their **curvatures** $k_i = 1/r_i$, with a minus sign for a circle that encloses the
others. Then

$$
(k_1 + k_2 + k_3 + k_4)^2 = 2(k_1^2 + k_2^2 + k_3^2 + k_4^2) ,
$$

so that, given three, $k_4 = k_1 + k_2 + k_3 \pm 2\sqrt{k_1 k_2 + k_2 k_3 + k_3 k_1}$. René Descartes stated it in a
1643 letter to Princess Elisabeth of Bohemia; Frederick Soddy rediscovered it in 1936 and published it as a poem, "The
Kiss Precise", in *Nature*. We will not prove it here. One proof inverts about a point of tangency, so that two of the circles
become parallel lines and the other two become equal circles between them; the article by Lagarias, Mallows and Wilks
in the further reading gives proofs and far-reaching generalisations.

**Example.** Three unit circles touch each other. Then $k_1 = k_2 = k_3 = 1$ and
$k_4 = 3 \pm 2\sqrt3$. The plus sign gives the small circle in the middle, of radius $1/(3 + 2\sqrt3) = (2\sqrt3 - 3)/3
\approx 0.1547$. Check by plain geometry: the centres form an equilateral triangle of side $2$, whose centre is at
distance $2/\sqrt3 \approx 1.1547$ from each corner, so the middle circle has radius $1.1547 - 1 = 0.1547$. The minus
sign gives $k_4 = 3 - 2\sqrt3 < 0$, the big enclosing circle, of radius $1/(2\sqrt3 - 3) = 1 + 2/\sqrt3 \approx 2.1547$.

### Steiner's porism

Take two circles, one inside the other, not touching. Draw a circle in the ring between them touching both; then
another touching both and the first; then another, and so on around the ring. Usually the chain does not close up:
the last circle overlaps the first. But sometimes it closes exactly, with the last circle touching the first.

**Theorem 13.6 (Steiner's porism).** If a chain closes for one choice of first circle, it closes, with the same
number of circles, for every choice of first circle.

(A **porism** is an old word for a statement of this kind: either the construction never works, or it works for every
starting point.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 456.0 216.0" role="img" aria-label="Left: a Steiner chain of six equal circles between two concentric circles of radii 1 and 3. Right: the same picture after an inversion, a closed chain of six circles between two circles that are not concentric">
  <circle cx="108.0" cy="108.0" r="90.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="108.0" cy="108.0" r="30.0" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="166.1" cy="93.2" r="30.0" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="124.2" cy="50.2" r="30.0" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="66.1" cy="65.1" r="30.0" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="49.9" cy="122.8" r="30.0" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="91.8" cy="165.8" r="30.0" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="149.9" cy="150.9" r="30.0" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="348.0" cy="108.0" r="90.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="302.5" cy="108.0" r="21.7" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="372.9" cy="81.5" r="53.6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="298.3" cy="63.4" r="23.2" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="273.2" cy="89.4" r="13.0" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="269.8" cy="113.7" r="11.6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="280.9" cy="139.0" r="16.1" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="328.6" cy="158.9" r="35.6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <text x="228.0" y="102.0" font-size="12" text-anchor="middle" fill="currentColor">invert</text>
  <text x="228.0" y="120.0" font-size="16" text-anchor="middle" fill="currentColor">→</text>
</svg>
</div>

The proof needs one lemma.

**Lemma 13.7.** Two circles, one inside the other and not touching, can be inverted into two concentric circles.

*Proof.* Put the line through their centres along the real axis, with circles $|z - c_1| = s_1$ and $|z - c_2| = s_2$.
We look for two points $p, q$ on the real axis that are inverse to each other in **both** circles, that is
$(p - c_i)(q - c_i) = s_i^2$ for $i = 1, 2$. Subtracting the two equations gives a linear relation between $p + q$ and
$c_1, c_2$; substituting back gives a quadratic for $p$ whose discriminant is positive exactly when the circles are
nested or separate (not crossing). These two points are called the **limiting points** of the pair. Now invert about
$p$. Every circle through $p$ and $q$ is orthogonal to both given circles (a circle through two points inverse in a
circle $\gamma$ is mapped to itself by inversion in $\gamma$, so it meets $\gamma$ at right angles). After inverting at
$p$, the circles through $p$ and $q$ become lines through $q'$, the image of $q$. The images of the two given circles
are orthogonal to all lines through $q'$, so both are circles centred at $q'$: concentric. $\square$

*Proof of Theorem 13.6.* Invert the two circles into concentric ones, with radii $a < b$. Tangency is kept, so a
Steiner chain becomes a Steiner chain between concentric circles. There, each chain circle touches both, so it has
diameter $b - a$ and its centre lies on the circle of radius $(a + b)/2$. A chain is just a set of equal circles around a
ring, and **rotating** it about the common centre gives another chain. The chain closes with $n$ circles exactly when
the angle each circle takes up, seen from the centre, is $2\pi/n$, that is when

$$
\sin \frac{\pi}{n} = \frac{(b - a)/2}{(a + b)/2} = \frac{b - a}{b + a},
$$

a condition on $a$ and $b$ alone, not on where the chain starts. Invert back. $\square$

**Example.** For $n = 6$ we need $(b - a)/(b + a) = \sin 30^\circ = \tfrac12$, so $b = 3a$: six circles of radius $1$ fit
exactly in the ring between radii $1$ and $3$, the left half of the figure. The right half is its image under an
inversion whose centre lies inside the small circle; every tangency survives.

## 13.4 Möbius transformations and the cross-ratio

*Level: advanced to expert.* Combine the maps we have: translations $z \mapsto z + b$, rotations and scalings
$z \mapsto az$, and the map $z \mapsto 1/z$. (This last one is inversion in the unit circle, $z \mapsto 1/\bar z$,
followed by reflection in the real axis.) What do all their compositions look like?

**Definition.** A **Möbius transformation** is a map

$$
f(z) = \frac{az + b}{cz + d}, \qquad a, b, c, d \in \mathbb{C}, \quad ad - bc \neq 0 .
$$

It acts on the **extended plane** $\hat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}$, with the conventions
$f(-d/c) = \infty$ and $f(\infty) = a/c$ when $c \neq 0$, and $f(\infty) = \infty$ when $c = 0$. The condition
$ad - bc \neq 0$ makes sure $f$ is not constant.

**Theorem 13.8.** Every Möbius transformation is a composition of translations, rotation-scalings and $z \mapsto 1/z$.
Hence it is a bijection of $\hat{\mathbb{C}}$, it sends generalised circles to generalised circles, and it preserves
angles and their sense.

*Proof.* If $c = 0$, $f(z) = (a/d) z + b/d$, a rotation-scaling followed by a translation. If $c \neq 0$, divide:

$$
\frac{az + b}{cz + d} = \frac{a}{c} - \frac{ad - bc}{c} \cdot \frac{1}{cz + d} ,
$$

which is: $z \mapsto cz + d$, then $w \mapsto 1/w$, then multiply by $-(ad - bc)/c$, then add $a/c$. Each step sends
generalised circles to generalised circles (Theorem 13.4 and the reflection) and is conformal; $1/z$ is two
orientation-reversing maps in a row, so it keeps orientation. $\square$

**Matrices.** Write $f$ as the matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$. A direct calculation shows that
composing two Möbius maps corresponds to multiplying their matrices, and that the matrices $M$ and $\lambda M$
($\lambda \neq 0$) give the same map. So the Möbius transformations form a group, isomorphic to
$\mathrm{PGL}(2, \mathbb{C})$, the invertible $2 \times 2$ complex matrices modulo scalars. Scaling so that $ad - bc = 1$
identifies it with $\mathrm{PSL}(2, \mathbb{C})$. (Groups and quotients are in the Algebra book,
[Chapter 13](../algebra/13-Groups.md) and [Chapter 15](../algebra/15-Homomorphisms-and-Quotients.md).)

### Three points decide everything

**Theorem 13.9.** Given three distinct points $z_1, z_2, z_3$ of $\hat{\mathbb{C}}$, there is exactly one Möbius
transformation sending them to $0, 1, \infty$ in that order. For finite $z_i$ it is

$$
f(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)} .
$$

*Proof.* Existence: $f(z_1) = 0$ because of the factor $z - z_1$; $f(z_3) = \infty$ because of $z - z_3$ in the
denominator; and $f(z_2) = 1$ because the factors cancel. (If one $z_i$ is $\infty$, delete the two factors containing it.)
Uniqueness: if $g$ also works, then $h = g \circ f^{-1}$ fixes $0$, $1$ and $\infty$. Write $h(z) = (az + b)/(cz + d)$.
Fixing $\infty$ forces $c = 0$; fixing $0$ forces $b = 0$; so $h(z) = (a/d) z$, and fixing $1$ forces $a = d$. So
$h$ is the identity and $g = f$. $\square$

**Corollary.** For any two triples of distinct points there is exactly one Möbius transformation sending the first
to the second (send the first to $0, 1, \infty$, then follow the inverse of the map that sends the second there). And
since a generalised circle is fixed by any three of its points, **any generalised circle can be moved to any other**.

**Definition.** The **cross-ratio** of four points is the value at $z$ of the map of Theorem 13.9:

$$
(z, z_1; z_2, z_3) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)} .
$$

Be warned that books order the four points in several different ways, so their formulas differ by a permutation; the
facts below hold in every convention. The projective cross-ratio of [Chapter 18](18-Projective-Geometry.md) is the same
idea on a line.

**Theorem 13.10.** Möbius transformations preserve the cross-ratio: $(Tz, Tz_1; Tz_2, Tz_3) = (z, z_1; z_2, z_3)$.

*Proof.* Let $f$ send $z_1, z_2, z_3$ to $0, 1, \infty$. Then $f \circ T^{-1}$ sends $Tz_1, Tz_2, Tz_3$ to $0, 1, \infty$,
so by uniqueness it is the map that defines the cross-ratio of $Tz$ with $Tz_1, Tz_2, Tz_3$. Its value at $Tz$ is
$f(T^{-1}Tz) = f(z)$. $\square$

**Theorem 13.11.** Four distinct points lie on one generalised circle if and only if their cross-ratio is real.

*Proof.* Let $f$ send $z_1, z_2, z_3$ to $0, 1, \infty$. It sends the generalised circle through $z_1, z_2, z_3$ to the
generalised circle through $0, 1, \infty$, which is the real line (with $\infty$). So $z$ lies on the first exactly when
$f(z)$ is real, and $f(z)$ is the cross-ratio. $\square$

### A worked example: from the disc to the half-plane

Find the Möbius map sending $1, i, -1$ to $0, 1, \infty$. By the formula,

$$
f(z) = \frac{(z - 1)(i + 1)}{(z + 1)(i - 1)} .
$$

It sends the unit circle (through $1, i, -1$) to the real line. Which side goes where? Compute $f(0)$:

$$
f(0) = \frac{-(1 + i)}{i - 1} = \frac{-(1 + i)(-1 - i)}{(i - 1)(-1 - i)} = \frac{(1 + i)^2}{2} = \frac{2i}{2} = i .
$$

So the inside of the disc goes to the upper half-plane $\{\mathrm{Im}\, w > 0\}$. Circles about $0$ become circles
around $i$ (not centred at $i$), and diameters become arcs through $i$ that meet the real line at right angles, because
angles are kept and diameters meet the unit circle at right angles. **Check:** $f(-i) = -1$, real, as it must be for a
point of the unit circle; so the cross-ratio $(-i, 1; i, -1) = -1$ and the four points $1, i, -1, -i$ are concyclic.
This map will carry the Poincaré disc to the half-plane in [Chapter 17](17-Hyperbolic-Geometry.md).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 558.0 216.0" role="img" aria-label="The Mobius map f of z equals z minus 1 over z plus 1, times i plus 1 over i minus 1, sends the unit disc on the left to the upper half-plane on the right. Circles about 0 become circles around i, and rays from 0 become arcs through i ending on the real line">
  <circle cx="90.0" cy="117.0" r="60.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6"/>
  <line x1="186.0" y1="186.0" x2="540.0" y2="186.0" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="186.0,186.0 540.0,186.0 540.0,18.0 186.0,18.0" fill="#9cc9ea" fill-opacity="0.18" stroke="currentColor" stroke-width="0" stroke-linejoin="round"/>
  <polyline points="108.0,117.0 108.0,115.7 107.8,114.5 107.6,113.3 107.3,112.0 106.9,110.8 106.4,109.7 105.9,108.5 105.3,107.5 104.6,106.4 103.8,105.4 102.9,104.5 102.0,103.6 101.1,102.8 100.1,102.1 99.0,101.4 97.9,100.8 96.7,100.3 95.6,99.9 94.4,99.5 93.1,99.3 91.9,99.1 90.6,99.0 89.4,99.0 88.1,99.1 86.9,99.3 85.6,99.5 84.4,99.9 83.3,100.3 82.1,100.8 81.0,101.4 79.9,102.1 78.9,102.8 78.0,103.6 77.1,104.5 76.2,105.4 75.4,106.4 74.7,107.5 74.1,108.5 73.6,109.7 73.1,110.8 72.7,112.0 72.4,113.3 72.2,114.5 72.0,115.7 72.0,117.0 72.0,118.3 72.2,119.5 72.4,120.7 72.7,122.0 73.1,123.2 73.6,124.3 74.1,125.5 74.7,126.5 75.4,127.6 76.2,128.6 77.1,129.5 78.0,130.4 78.9,131.2 79.9,131.9 81.0,132.6 82.1,133.2 83.3,133.7 84.4,134.1 85.6,134.5 86.9,134.7 88.1,134.9 89.4,135.0 90.6,135.0 91.9,134.9 93.1,134.7 94.4,134.5 95.6,134.1 96.7,133.7 97.9,133.2 99.0,132.6 100.1,131.9 101.1,131.2 102.0,130.4 102.9,129.5 103.8,128.6 104.6,127.6 105.3,126.5 105.9,125.5 106.4,124.3 106.9,123.2 107.3,122.0 107.6,120.7 107.8,119.5 108.0,118.3 108.0,117.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="354.0,153.7 354.3,153.7 354.7,153.7 355.0,153.7 355.3,153.7 355.7,153.7 356.0,153.6 356.3,153.6 356.7,153.6 357.0,153.6 357.3,153.6 357.7,153.5 358.0,153.5 358.4,153.5 358.7,153.4 359.0,153.4 359.4,153.3 359.7,153.3 360.0,153.2 360.4,153.2 360.7,153.1 361.0,153.1 361.4,153.0 361.7,152.9 362.0,152.9 362.4,152.8 362.7,152.7 363.1,152.6 363.4,152.6 363.7,152.5 364.1,152.4 364.4,152.3 364.7,152.2 365.1,152.1 365.4,152.0 365.7,151.9 366.1,151.8 366.4,151.7 366.8,151.6 367.1,151.5 367.4,151.3 367.8,151.2 368.1,151.1 368.4,151.0 368.8,150.8 369.1,150.7 369.5,150.5 369.8,150.4 370.1,150.3 370.5,150.1 370.8,149.9 371.1,149.8 371.5,149.6 371.8,149.4 372.2,149.3 372.5,149.1 372.8,148.9 373.2,148.7 373.5,148.5 373.9,148.4 374.2,148.2 374.5,148.0 374.9,147.7 375.2,147.5 375.5,147.3 375.9,147.1 376.2,146.9 376.5,146.6 376.9,146.4 377.2,146.2 377.5,145.9 377.9,145.7 378.2,145.4 378.5,145.2 378.9,144.9 379.2,144.6 379.5,144.3 379.9,144.1 380.2,143.8 380.5,143.5 380.8,143.2 381.2,142.9 381.5,142.6 381.8,142.3 382.1,141.9 382.5,141.6 382.8,141.3 383.1,140.9 383.4,140.6 383.7,140.2 384.0,139.9 384.3,139.5 384.7,139.1 385.0,138.8 385.3,138.4 385.6,138.0 385.9,137.6 386.2,137.2 386.5,136.8 386.7,136.3 387.0,135.9 387.3,135.5 387.6,135.0 387.9,134.6 388.1,134.1 388.4,133.6 388.7,133.2 388.9,132.7 389.2,132.2 389.4,131.7 389.7,131.2 389.9,130.7 390.2,130.1 390.4,129.6 390.6,129.1 390.9,128.5 391.1,128.0 391.3,127.4 391.5,126.8 391.7,126.2 391.8,125.6 392.0,125.0 392.2,124.4 392.4,123.8 392.5,123.2 392.7,122.5 392.8,121.9 392.9,121.2 393.0,120.6 393.1,119.9 393.2,119.2 393.3,118.5 393.4,117.8 393.4,117.1 393.5,116.4 393.5,115.7 393.6,115.0 393.6,114.2 393.6,113.5 393.5,112.7 393.5,111.9 393.5,111.2 393.4,110.4 393.3,109.6 393.2,108.8 393.1,108.0 393.0,107.2 392.8,106.4 392.6,105.6 392.4,104.8 392.2,104.0 392.0,103.2 391.8,102.3 391.5,101.5 391.2,100.7 390.9,99.8 390.6,99.0 390.2,98.2 389.8,97.4 389.4,96.5 389.0,95.7 388.6,94.9 388.1,94.0 387.6,93.2 387.1,92.4 386.5,91.6 386.0,90.8 385.4,90.0 384.7,89.2 384.1,88.5 383.4,87.7 382.7,86.9 382.0,86.2 381.3,85.5 380.5,84.8 379.7,84.1 378.9,83.4 378.1,82.7 377.2,82.1 376.3,81.5 375.4,80.9 374.5,80.3 373.5,79.7 372.6,79.2 371.6,78.7 370.6,78.2 369.6,77.8 368.5,77.3 367.5,76.9 366.4,76.6 365.3,76.2 364.2,75.9 363.1,75.6 362.0,75.4 360.9,75.2 359.7,75.0 358.6,74.8 357.5,74.7 356.3,74.6 355.2,74.6 354.0,74.6 352.8,74.6 351.7,74.6 350.5,74.7 349.4,74.8 348.3,75.0 347.1,75.2 346.0,75.4 344.9,75.6 343.8,75.9 342.7,76.2 341.6,76.6 340.5,76.9 339.5,77.3 338.4,77.8 337.4,78.2 336.4,78.7 335.4,79.2 334.5,79.7 333.5,80.3 332.6,80.9 331.7,81.5 330.8,82.1 329.9,82.7 329.1,83.4 328.3,84.1 327.5,84.8 326.7,85.5 326.0,86.2 325.3,86.9 324.6,87.7 323.9,88.5 323.3,89.2 322.6,90.0 322.0,90.8 321.5,91.6 320.9,92.4 320.4,93.2 319.9,94.0 319.4,94.9 319.0,95.7 318.6,96.5 318.2,97.4 317.8,98.2 317.4,99.0 317.1,99.8 316.8,100.7 316.5,101.5 316.2,102.3 316.0,103.2 315.8,104.0 315.6,104.8 315.4,105.6 315.2,106.4 315.0,107.2 314.9,108.0 314.8,108.8 314.7,109.6 314.6,110.4 314.5,111.2 314.5,111.9 314.5,112.7 314.4,113.5 314.4,114.2 314.4,115.0 314.5,115.7 314.5,116.4 314.6,117.1 314.6,117.8 314.7,118.5 314.8,119.2 314.9,119.9 315.0,120.6 315.1,121.2 315.2,121.9 315.3,122.5 315.5,123.2 315.6,123.8 315.8,124.4 316.0,125.0 316.2,125.6 316.3,126.2 316.5,126.8 316.7,127.4 316.9,128.0 317.1,128.5 317.4,129.1 317.6,129.6 317.8,130.1 318.1,130.7 318.3,131.2 318.6,131.7 318.8,132.2 319.1,132.7 319.3,133.2 319.6,133.6 319.9,134.1 320.1,134.6 320.4,135.0 320.7,135.5 321.0,135.9 321.3,136.3 321.5,136.8 321.8,137.2 322.1,137.6 322.4,138.0 322.7,138.4 323.0,138.8 323.3,139.1 323.7,139.5 324.0,139.9 324.3,140.2 324.6,140.6 324.9,140.9 325.2,141.3 325.5,141.6 325.9,141.9 326.2,142.3 326.5,142.6 326.8,142.9 327.2,143.2 327.5,143.5 327.8,143.8 328.1,144.1 328.5,144.3 328.8,144.6 329.1,144.9 329.5,145.2 329.8,145.4 330.1,145.7 330.5,145.9 330.8,146.2 331.1,146.4 331.5,146.6 331.8,146.9 332.1,147.1 332.5,147.3 332.8,147.5 333.1,147.7 333.5,148.0 333.8,148.2 334.1,148.4 334.5,148.5 334.8,148.7 335.2,148.9 335.5,149.1 335.8,149.3 336.2,149.4 336.5,149.6 336.9,149.8 337.2,149.9 337.5,150.1 337.9,150.3 338.2,150.4 338.5,150.5 338.9,150.7 339.2,150.8 339.6,151.0 339.9,151.1 340.2,151.2 340.6,151.3 340.9,151.5 341.2,151.6 341.6,151.7 341.9,151.8 342.3,151.9 342.6,152.0 342.9,152.1 343.3,152.2 343.6,152.3 343.9,152.4 344.3,152.5 344.6,152.6 344.9,152.6 345.3,152.7 345.6,152.8 346.0,152.9 346.3,152.9 346.6,153.0 347.0,153.1 347.3,153.1 347.6,153.2 348.0,153.2 348.3,153.3 348.6,153.3 349.0,153.4 349.3,153.4 349.6,153.5 350.0,153.5 350.3,153.5 350.7,153.6 351.0,153.6 351.3,153.6 351.7,153.6 352.0,153.6 352.3,153.7 352.7,153.7 353.0,153.7 353.3,153.7 353.7,153.7 354.0,153.7" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="123.0,117.0 122.9,114.7 122.7,112.4 122.3,110.1 121.7,107.9 121.0,105.7 120.1,103.6 119.1,101.5 118.0,99.5 116.7,97.6 115.3,95.8 113.7,94.1 112.1,92.5 110.3,91.0 108.5,89.6 106.5,88.4 104.5,87.3 102.4,86.4 100.2,85.6 98.0,85.0 95.7,84.5 93.4,84.2 91.2,84.0 88.8,84.0 86.6,84.2 84.3,84.5 82.0,85.0 79.8,85.6 77.6,86.4 75.5,87.3 73.5,88.4 71.5,89.6 69.7,91.0 67.9,92.5 66.3,94.1 64.7,95.8 63.3,97.6 62.0,99.5 60.9,101.5 59.9,103.6 59.0,105.7 58.3,107.9 57.7,110.1 57.3,112.4 57.1,114.7 57.0,117.0 57.1,119.3 57.3,121.6 57.7,123.9 58.3,126.1 59.0,128.3 59.9,130.4 60.9,132.5 62.0,134.5 63.3,136.4 64.7,138.2 66.3,139.9 67.9,141.5 69.7,143.0 71.5,144.4 73.5,145.6 75.5,146.7 77.6,147.6 79.8,148.4 82.0,149.0 84.3,149.5 86.6,149.8 88.8,150.0 91.2,150.0 93.4,149.8 95.7,149.5 98.0,149.0 100.2,148.4 102.4,147.6 104.5,146.7 106.5,145.6 108.5,144.4 110.3,143.0 112.1,141.5 113.7,139.9 115.3,138.2 116.7,136.4 118.0,134.5 119.1,132.5 120.1,130.4 121.0,128.3 121.7,126.1 122.3,123.9 122.7,121.6 122.9,119.3 123.0,117.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="354.0,168.6 354.4,168.6 354.9,168.6 355.3,168.6 355.7,168.6 356.2,168.6 356.6,168.5 357.0,168.5 357.5,168.5 357.9,168.5 358.3,168.5 358.8,168.5 359.2,168.4 359.6,168.4 360.1,168.4 360.5,168.4 360.9,168.3 361.4,168.3 361.8,168.3 362.2,168.2 362.7,168.2 363.1,168.1 363.6,168.1 364.0,168.1 364.4,168.0 364.9,168.0 365.3,167.9 365.8,167.8 366.2,167.8 366.7,167.7 367.1,167.7 367.6,167.6 368.0,167.5 368.5,167.5 368.9,167.4 369.4,167.3 369.8,167.2 370.3,167.2 370.8,167.1 371.2,167.0 371.7,166.9 372.2,166.8 372.6,166.7 373.1,166.6 373.6,166.5 374.0,166.4 374.5,166.3 375.0,166.2 375.5,166.1 376.0,166.0 376.4,165.9 376.9,165.8 377.4,165.6 377.9,165.5 378.4,165.4 378.9,165.3 379.4,165.1 379.9,165.0 380.4,164.8 380.9,164.7 381.4,164.5 381.9,164.4 382.4,164.2 382.9,164.0 383.5,163.9 384.0,163.7 384.5,163.5 385.0,163.3 385.6,163.2 386.1,163.0 386.6,162.8 387.2,162.6 387.7,162.4 388.3,162.2 388.8,161.9 389.4,161.7 389.9,161.5 390.5,161.3 391.1,161.0 391.6,160.8 392.2,160.5 392.8,160.3 393.4,160.0 394.0,159.7 394.6,159.4 395.2,159.2 395.8,158.9 396.4,158.6 397.0,158.3 397.6,157.9 398.2,157.6 398.8,157.3 399.5,156.9 400.1,156.6 400.7,156.2 401.4,155.9 402.0,155.5 402.7,155.1 403.3,154.7 404.0,154.3 404.7,153.9 405.3,153.4 406.0,153.0 406.7,152.5 407.4,152.1 408.1,151.6 408.8,151.1 409.5,150.6 410.2,150.1 410.9,149.5 411.7,149.0 412.4,148.4 413.1,147.8 413.9,147.2 414.6,146.6 415.4,146.0 416.1,145.3 416.9,144.7 417.7,144.0 418.4,143.3 419.2,142.5 420.0,141.8 420.8,141.0 421.6,140.2 422.4,139.4 423.2,138.5 424.0,137.7 424.8,136.8 425.6,135.8 426.4,134.9 427.2,133.9 428.0,132.9 428.9,131.8 429.7,130.8 430.5,129.6 431.3,128.5 432.1,127.3 433.0,126.1 433.8,124.8 434.6,123.5 435.4,122.2 436.2,120.8 437.0,119.4 437.8,117.9 438.6,116.4 439.3,114.8 440.1,113.2 440.8,111.6 441.6,109.8 442.3,108.1 442.9,106.2 443.6,104.4 444.2,102.4 444.9,100.4 445.4,98.3 446.0,96.2 446.5,94.0 446.9,91.7 447.4,89.4 447.7,87.0 448.0,84.6 448.3,82.0 448.5,79.4 448.6,76.8 448.6,74.0 448.6,71.2 448.5,68.3 448.2,65.4 447.9,62.4 447.5,59.3 446.9,56.2 446.3,53.0 445.5,49.8 444.5,46.5 443.5,43.2 442.2,39.8 440.9,36.4 439.3,33.0 437.6,29.6 435.7,26.1 433.6,22.7 431.3,19.4" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="276.7,19.4 274.4,22.7 272.3,26.1 270.4,29.6 268.7,33.0 267.1,36.4 265.8,39.8 264.5,43.2 263.5,46.5 262.5,49.8 261.7,53.0 261.1,56.2 260.5,59.3 260.1,62.4 259.8,65.4 259.5,68.3 259.4,71.2 259.4,74.0 259.4,76.8 259.5,79.4 259.7,82.0 260.0,84.6 260.3,87.0 260.6,89.4 261.1,91.7 261.5,94.0 262.0,96.2 262.6,98.3 263.1,100.4 263.8,102.4 264.4,104.4 265.1,106.2 265.7,108.1 266.4,109.8 267.2,111.6 267.9,113.2 268.7,114.8 269.4,116.4 270.2,117.9 271.0,119.4 271.8,120.8 272.6,122.2 273.4,123.5 274.2,124.8 275.0,126.1 275.9,127.3 276.7,128.5 277.5,129.6 278.3,130.8 279.1,131.8 280.0,132.9 280.8,133.9 281.6,134.9 282.4,135.8 283.2,136.8 284.0,137.7 284.8,138.5 285.6,139.4 286.4,140.2 287.2,141.0 288.0,141.8 288.8,142.5 289.6,143.3 290.3,144.0 291.1,144.7 291.9,145.3 292.6,146.0 293.4,146.6 294.1,147.2 294.9,147.8 295.6,148.4 296.3,149.0 297.1,149.5 297.8,150.1 298.5,150.6 299.2,151.1 299.9,151.6 300.6,152.1 301.3,152.5 302.0,153.0 302.7,153.4 303.3,153.9 304.0,154.3 304.7,154.7 305.3,155.1 306.0,155.5 306.6,155.9 307.3,156.2 307.9,156.6 308.5,156.9 309.2,157.3 309.8,157.6 310.4,157.9 311.0,158.3 311.6,158.6 312.2,158.9 312.8,159.2 313.4,159.4 314.0,159.7 314.6,160.0 315.2,160.3 315.8,160.5 316.4,160.8 316.9,161.0 317.5,161.3 318.1,161.5 318.6,161.7 319.2,161.9 319.7,162.2 320.3,162.4 320.8,162.6 321.4,162.8 321.9,163.0 322.4,163.2 323.0,163.3 323.5,163.5 324.0,163.7 324.5,163.9 325.1,164.0 325.6,164.2 326.1,164.4 326.6,164.5 327.1,164.7 327.6,164.8 328.1,165.0 328.6,165.1 329.1,165.3 329.6,165.4 330.1,165.5 330.6,165.6 331.1,165.8 331.6,165.9 332.0,166.0 332.5,166.1 333.0,166.2 333.5,166.3 334.0,166.4 334.4,166.5 334.9,166.6 335.4,166.7 335.8,166.8 336.3,166.9 336.8,167.0 337.2,167.1 337.7,167.2 338.2,167.2 338.6,167.3 339.1,167.4 339.5,167.5 340.0,167.5 340.4,167.6 340.9,167.7 341.3,167.7 341.8,167.8 342.2,167.8 342.7,167.9 343.1,168.0 343.6,168.0 344.0,168.1 344.4,168.1 344.9,168.1 345.3,168.2 345.8,168.2 346.2,168.3 346.6,168.3 347.1,168.3 347.5,168.4 347.9,168.4 348.4,168.4 348.8,168.4 349.2,168.5 349.7,168.5 350.1,168.5 350.5,168.5 351.0,168.5 351.4,168.5 351.8,168.6 352.3,168.6 352.7,168.6 353.1,168.6 353.6,168.6 354.0,168.6" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="138.0,117.0 137.9,113.7 137.5,110.3 137.0,107.0 136.1,103.8 135.1,100.6 133.9,97.5 132.4,94.5 130.7,91.6 128.8,88.8 126.8,86.1 124.5,83.7 122.1,81.3 119.6,79.2 116.8,77.2 114.0,75.4 111.0,73.9 108.0,72.5 104.8,71.3 101.6,70.4 98.3,69.7 95.0,69.3 91.7,69.0 88.3,69.0 85.0,69.3 81.7,69.7 78.4,70.4 75.2,71.3 72.0,72.5 69.0,73.9 66.0,75.4 63.2,77.2 60.4,79.2 57.9,81.3 55.5,83.7 53.2,86.1 51.2,88.8 49.3,91.6 47.6,94.5 46.1,97.5 44.9,100.6 43.9,103.8 43.0,107.0 42.5,110.3 42.1,113.7 42.0,117.0 42.1,120.3 42.5,123.7 43.0,127.0 43.9,130.2 44.9,133.4 46.1,136.5 47.6,139.5 49.3,142.4 51.2,145.2 53.2,147.9 55.5,150.3 57.9,152.7 60.4,154.8 63.2,156.8 66.0,158.6 69.0,160.1 72.0,161.5 75.2,162.7 78.4,163.6 81.7,164.3 85.0,164.7 88.3,165.0 91.7,165.0 95.0,164.7 98.3,164.3 101.6,163.6 104.8,162.7 108.0,161.5 111.0,160.1 114.0,158.6 116.8,156.8 119.6,154.8 122.1,152.7 124.5,150.3 126.8,147.9 128.8,145.2 130.7,142.4 132.4,139.5 133.9,136.5 135.1,133.4 136.1,130.2 137.0,127.0 137.5,123.7 137.9,120.3 138.0,117.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="354.0,179.3 354.5,179.3 354.9,179.3 355.4,179.3 355.9,179.3 356.3,179.3 356.8,179.3 357.3,179.3 357.7,179.3 358.2,179.3 358.7,179.3 359.1,179.3 359.6,179.3 360.1,179.3 360.5,179.3 361.0,179.2 361.5,179.2 362.0,179.2 362.4,179.2 362.9,179.2 363.4,179.2 363.9,179.2 364.3,179.1 364.8,179.1 365.3,179.1 365.8,179.1 366.3,179.1 366.8,179.0 367.2,179.0 367.7,179.0 368.2,179.0 368.7,178.9 369.2,178.9 369.7,178.9 370.2,178.8 370.7,178.8 371.2,178.8 371.7,178.7 372.2,178.7 372.7,178.7 373.2,178.6 373.7,178.6 374.3,178.6 374.8,178.5 375.3,178.5 375.8,178.4 376.4,178.4 376.9,178.3 377.4,178.3 378.0,178.3 378.5,178.2 379.0,178.2 379.6,178.1 380.1,178.0 380.7,178.0 381.2,177.9 381.8,177.9 382.4,177.8 382.9,177.8 383.5,177.7 384.1,177.6 384.7,177.6 385.3,177.5 385.9,177.4 386.5,177.4 387.1,177.3 387.7,177.2 388.3,177.1 388.9,177.0 389.5,177.0 390.1,176.9 390.8,176.8 391.4,176.7 392.1,176.6 392.7,176.5 393.4,176.4 394.0,176.3 394.7,176.2 395.4,176.1 396.1,176.0 396.8,175.9 397.5,175.8 398.2,175.6 398.9,175.5 399.6,175.4 400.4,175.3 401.1,175.1 401.9,175.0 402.6,174.9 403.4,174.7 404.2,174.6 404.9,174.4 405.7,174.3 406.6,174.1 407.4,173.9 408.2,173.8 409.0,173.6 409.9,173.4 410.8,173.2 411.6,173.0 412.5,172.8 413.4,172.6 414.4,172.4 415.3,172.2 416.2,172.0 417.2,171.7 418.2,171.5 419.2,171.3 420.2,171.0 421.2,170.7 422.2,170.5 423.3,170.2 424.4,169.9 425.5,169.6 426.6,169.3 427.7,168.9 428.9,168.6 430.0,168.3 431.2,167.9 432.5,167.5 433.7,167.1 435.0,166.7 436.3,166.3 437.6,165.9 438.9,165.4 440.3,165.0 441.7,164.5 443.1,164.0 444.6,163.5 446.1,162.9 447.6,162.4 449.2,161.8 450.8,161.1 452.4,160.5 454.1,159.8 455.8,159.1 457.6,158.4 459.4,157.6 461.2,156.8 463.1,156.0 465.0,155.1 467.0,154.2 469.0,153.2 471.1,152.2 473.3,151.2 475.5,150.1 477.8,148.9 480.1,147.6 482.5,146.3 484.9,145.0 487.5,143.5 490.1,142.0 492.7,140.4 495.5,138.7 498.3,136.9 501.3,135.0 504.3,133.0 507.4,130.8 510.6,128.5 513.9,126.1 517.3,123.5 520.8,120.7 524.4,117.8 528.1,114.6 531.9,111.3 535.9,107.7 539.9,103.8" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="187.2,120.7 190.7,123.5 194.1,126.1 197.4,128.5 200.6,130.8 203.7,133.0 206.7,135.0 209.7,136.9 212.5,138.7 215.3,140.4 217.9,142.0 220.5,143.5 223.1,145.0 225.5,146.3 227.9,147.6 230.2,148.9 232.5,150.1 234.7,151.2 236.9,152.2 239.0,153.2 241.0,154.2 243.0,155.1 244.9,156.0 246.8,156.8 248.6,157.6 250.4,158.4 252.2,159.1 253.9,159.8 255.6,160.5 257.2,161.1 258.8,161.8 260.4,162.4 261.9,162.9 263.4,163.5 264.9,164.0 266.3,164.5 267.7,165.0 269.1,165.4 270.4,165.9 271.7,166.3 273.0,166.7 274.3,167.1 275.5,167.5 276.8,167.9 278.0,168.3 279.1,168.6 280.3,168.9 281.4,169.3 282.5,169.6 283.6,169.9 284.7,170.2 285.8,170.5 286.8,170.7 287.8,171.0 288.8,171.3 289.8,171.5 290.8,171.7 291.8,172.0 292.7,172.2 293.6,172.4 294.6,172.6 295.5,172.8 296.4,173.0 297.2,173.2 298.1,173.4 299.0,173.6 299.8,173.8 300.6,173.9 301.4,174.1 302.3,174.3 303.1,174.4 303.8,174.6 304.6,174.7 305.4,174.9 306.1,175.0 306.9,175.1 307.6,175.3 308.4,175.4 309.1,175.5 309.8,175.6 310.5,175.8 311.2,175.9 311.9,176.0 312.6,176.1 313.3,176.2 314.0,176.3 314.6,176.4 315.3,176.5 315.9,176.6 316.6,176.7 317.2,176.8 317.9,176.9 318.5,177.0 319.1,177.0 319.7,177.1 320.3,177.2 320.9,177.3 321.5,177.4 322.1,177.4 322.7,177.5 323.3,177.6 323.9,177.6 324.5,177.7 325.1,177.8 325.6,177.8 326.2,177.9 326.8,177.9 327.3,178.0 327.9,178.0 328.4,178.1 329.0,178.2 329.5,178.2 330.0,178.3 330.6,178.3 331.1,178.3 331.6,178.4 332.2,178.4 332.7,178.5 333.2,178.5 333.7,178.6 334.3,178.6 334.8,178.6 335.3,178.7 335.8,178.7 336.3,178.7 336.8,178.8 337.3,178.8 337.8,178.8 338.3,178.9 338.8,178.9 339.3,178.9 339.8,179.0 340.3,179.0 340.8,179.0 341.2,179.0 341.7,179.1 342.2,179.1 342.7,179.1 343.2,179.1 343.7,179.1 344.1,179.2 344.6,179.2 345.1,179.2 345.6,179.2 346.0,179.2 346.5,179.2 347.0,179.2 347.5,179.3 347.9,179.3 348.4,179.3 348.9,179.3 349.3,179.3 349.8,179.3 350.3,179.3 350.7,179.3 351.2,179.3 351.7,179.3 352.1,179.3 352.6,179.3 353.1,179.3 353.5,179.3 354.0,179.3" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <line x1="90.0" y1="117.0" x2="150.0" y2="117.0" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2"/>
  <polyline points="354.0,126.0 354.0,126.4 354.0,126.8 354.0,127.2 354.0,127.6 354.0,128.0 354.0,128.3 354.0,128.7 354.0,129.1 354.0,129.5 354.0,129.9 354.0,130.2 354.0,130.6 354.0,131.0 354.0,131.3 354.0,131.7 354.0,132.0 354.0,132.4 354.0,132.8 354.0,133.1 354.0,133.5 354.0,133.8 354.0,134.2 354.0,134.5 354.0,134.8 354.0,135.2 354.0,135.5 354.0,135.9 354.0,136.2 354.0,136.5 354.0,136.9 354.0,137.2 354.0,137.5 354.0,137.8 354.0,138.2 354.0,138.5 354.0,138.8 354.0,139.1 354.0,139.4 354.0,139.7 354.0,140.1 354.0,140.4 354.0,140.7 354.0,141.0 354.0,141.3 354.0,141.6 354.0,141.9 354.0,142.2 354.0,142.5 354.0,142.8 354.0,143.1 354.0,143.4 354.0,143.7 354.0,143.9 354.0,144.2 354.0,144.5 354.0,144.8 354.0,145.1 354.0,145.4 354.0,145.6 354.0,145.9 354.0,146.2 354.0,146.5 354.0,146.7 354.0,147.0 354.0,147.3 354.0,147.6 354.0,147.8 354.0,148.1 354.0,148.3 354.0,148.6 354.0,148.9 354.0,149.1 354.0,149.4 354.0,149.6 354.0,149.9 354.0,150.2 354.0,150.4 354.0,150.7 354.0,150.9 354.0,151.2 354.0,151.4 354.0,151.7 354.0,151.9 354.0,152.1 354.0,152.4 354.0,152.6 354.0,152.9 354.0,153.1 354.0,153.3 354.0,153.6 354.0,153.8 354.0,154.1 354.0,154.3 354.0,154.5 354.0,154.8 354.0,155.0 354.0,155.2 354.0,155.4 354.0,155.7 354.0,155.9 354.0,156.1 354.0,156.3 354.0,156.6 354.0,156.8 354.0,157.0 354.0,157.2 354.0,157.4 354.0,157.6 354.0,157.9 354.0,158.1 354.0,158.3 354.0,158.5 354.0,158.7 354.0,158.9 354.0,159.1 354.0,159.3 354.0,159.5 354.0,159.8 354.0,160.0 354.0,160.2 354.0,160.4 354.0,160.6 354.0,160.8 354.0,161.0 354.0,161.2 354.0,161.4 354.0,161.6 354.0,161.8 354.0,162.0 354.0,162.2 354.0,162.3 354.0,162.5 354.0,162.7 354.0,162.9 354.0,163.1 354.0,163.3 354.0,163.5 354.0,163.7 354.0,163.9 354.0,164.1 354.0,164.2 354.0,164.4 354.0,164.6 354.0,164.8 354.0,165.0 354.0,165.2 354.0,165.3 354.0,165.5 354.0,165.7 354.0,165.9 354.0,166.0 354.0,166.2 354.0,166.4 354.0,166.6 354.0,166.7 354.0,166.9 354.0,167.1 354.0,167.3 354.0,167.4 354.0,167.6 354.0,167.8 354.0,167.9 354.0,168.1 354.0,168.3 354.0,168.4 354.0,168.6 354.0,168.8 354.0,168.9 354.0,169.1 354.0,169.3 354.0,169.4 354.0,169.6 354.0,169.8 354.0,169.9 354.0,170.1 354.0,170.2 354.0,170.4 354.0,170.5 354.0,170.7 354.0,170.9 354.0,171.0 354.0,171.2 354.0,171.3 354.0,171.5 354.0,171.6 354.0,171.8 354.0,171.9 354.0,172.1 354.0,172.2 354.0,172.4 354.0,172.5 354.0,172.7 354.0,172.8 354.0,173.0 354.0,173.1 354.0,173.3 354.0,173.4 354.0,173.6 354.0,173.7 354.0,173.9 354.0,174.0 354.0,174.1 354.0,174.3 354.0,174.4 354.0,174.6 354.0,174.7 354.0,174.8 354.0,175.0 354.0,175.1 354.0,175.3 354.0,175.4 354.0,175.5 354.0,175.7 354.0,175.8 354.0,176.0 354.0,176.1 354.0,176.2 354.0,176.4 354.0,176.5 354.0,176.6 354.0,176.8 354.0,176.9 354.0,177.0 354.0,177.2 354.0,177.3 354.0,177.4 354.0,177.5 354.0,177.7 354.0,177.8 354.0,177.9 354.0,178.1 354.0,178.2 354.0,178.3 354.0,178.4 354.0,178.6 354.0,178.7 354.0,178.8 354.0,178.9 354.0,179.1 354.0,179.2 354.0,179.3 354.0,179.4 354.0,179.6 354.0,179.7 354.0,179.8 354.0,179.9 354.0,180.0 354.0,180.2 354.0,180.3 354.0,180.4 354.0,180.5 354.0,180.6 354.0,180.8 354.0,180.9 354.0,181.0 354.0,181.1 354.0,181.2 354.0,181.3 354.0,181.4 354.0,181.6 354.0,181.7 354.0,181.8 354.0,181.9 354.0,182.0 354.0,182.1 354.0,182.2 354.0,182.4 354.0,182.5 354.0,182.6 354.0,182.7 354.0,182.8 354.0,182.9 354.0,183.0 354.0,183.1 354.0,183.2 354.0,183.3 354.0,183.5 354.0,183.6 354.0,183.7 354.0,183.8 354.0,183.9 354.0,184.0 354.0,184.1 354.0,184.2 354.0,184.3 354.0,184.4 354.0,184.5 354.0,184.6 354.0,184.7 354.0,184.8 354.0,184.9 354.0,185.0 354.0,185.1 354.0,185.2 354.0,185.3 354.0,185.4 354.0,185.5 354.0,185.6 354.0,185.7 354.0,185.8" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" stroke-linejoin="round"/>
  <line x1="90.0" y1="117.0" x2="132.4" y2="74.6" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2"/>
  <polyline points="354.0,126.0 354.3,126.3 354.6,126.6 354.8,126.8 355.1,127.1 355.4,127.4 355.6,127.7 355.9,128.0 356.2,128.2 356.4,128.5 356.7,128.8 356.9,129.1 357.2,129.4 357.4,129.7 357.7,129.9 357.9,130.2 358.2,130.5 358.4,130.8 358.7,131.0 358.9,131.3 359.1,131.6 359.4,131.9 359.6,132.2 359.8,132.4 360.0,132.7 360.3,133.0 360.5,133.3 360.7,133.5 360.9,133.8 361.1,134.1 361.3,134.4 361.5,134.6 361.8,134.9 362.0,135.2 362.2,135.5 362.4,135.7 362.6,136.0 362.8,136.3 363.0,136.6 363.1,136.8 363.3,137.1 363.5,137.4 363.7,137.6 363.9,137.9 364.1,138.2 364.3,138.4 364.4,138.7 364.6,139.0 364.8,139.2 365.0,139.5 365.1,139.8 365.3,140.0 365.5,140.3 365.7,140.6 365.8,140.8 366.0,141.1 366.1,141.3 366.3,141.6 366.5,141.9 366.6,142.1 366.8,142.4 366.9,142.6 367.1,142.9 367.2,143.2 367.4,143.4 367.5,143.7 367.7,143.9 367.8,144.2 368.0,144.4 368.1,144.7 368.3,144.9 368.4,145.2 368.5,145.4 368.7,145.7 368.8,145.9 368.9,146.2 369.1,146.4 369.2,146.7 369.3,146.9 369.4,147.2 369.6,147.4 369.7,147.7 369.8,147.9 369.9,148.2 370.1,148.4 370.2,148.6 370.3,148.9 370.4,149.1 370.5,149.4 370.6,149.6 370.8,149.8 370.9,150.1 371.0,150.3 371.1,150.5 371.2,150.8 371.3,151.0 371.4,151.3 371.5,151.5 371.6,151.7 371.7,152.0 371.8,152.2 371.9,152.4 372.0,152.6 372.1,152.9 372.2,153.1 372.3,153.3 372.4,153.6 372.5,153.8 372.6,154.0 372.7,154.2 372.8,154.5 372.9,154.7 373.0,154.9 373.0,155.1 373.1,155.3 373.2,155.6 373.3,155.8 373.4,156.0 373.5,156.2 373.5,156.4 373.6,156.7 373.7,156.9 373.8,157.1 373.9,157.3 373.9,157.5 374.0,157.7 374.1,158.0 374.2,158.2 374.2,158.4 374.3,158.6 374.4,158.8 374.4,159.0 374.5,159.2 374.6,159.4 374.7,159.6 374.7,159.8 374.8,160.0 374.9,160.3 374.9,160.5 375.0,160.7 375.0,160.9 375.1,161.1 375.2,161.3 375.2,161.5 375.3,161.7 375.3,161.9 375.4,162.1 375.5,162.3 375.5,162.5 375.6,162.7 375.6,162.9 375.7,163.1 375.7,163.3 375.8,163.4 375.9,163.6 375.9,163.8 376.0,164.0 376.0,164.2 376.1,164.4 376.1,164.6 376.2,164.8 376.2,165.0 376.3,165.2 376.3,165.4 376.3,165.5 376.4,165.7 376.4,165.9 376.5,166.1 376.5,166.3 376.6,166.5 376.6,166.7 376.7,166.8 376.7,167.0 376.7,167.2 376.8,167.4 376.8,167.6 376.9,167.7 376.9,167.9 376.9,168.1 377.0,168.3 377.0,168.5 377.1,168.6 377.1,168.8 377.1,169.0 377.2,169.2 377.2,169.3 377.2,169.5 377.3,169.7 377.3,169.8 377.3,170.0 377.4,170.2 377.4,170.4 377.4,170.5 377.5,170.7 377.5,170.9 377.5,171.0 377.6,171.2 377.6,171.4 377.6,171.5 377.6,171.7 377.7,171.9 377.7,172.0 377.7,172.2 377.7,172.4 377.8,172.5 377.8,172.7 377.8,172.9 377.9,173.0 377.9,173.2 377.9,173.3 377.9,173.5 377.9,173.7 378.0,173.8 378.0,174.0 378.0,174.1 378.0,174.3 378.1,174.4 378.1,174.6 378.1,174.8 378.1,174.9 378.1,175.1 378.2,175.2 378.2,175.4 378.2,175.5 378.2,175.7 378.2,175.8 378.3,176.0 378.3,176.1 378.3,176.3 378.3,176.4 378.3,176.6 378.3,176.7 378.4,176.9 378.4,177.0 378.4,177.2 378.4,177.3 378.4,177.5 378.4,177.6 378.5,177.7 378.5,177.9 378.5,178.0 378.5,178.2 378.5,178.3 378.5,178.5 378.5,178.6 378.5,178.7 378.6,178.9 378.6,179.0 378.6,179.2 378.6,179.3 378.6,179.4 378.6,179.6 378.6,179.7 378.6,179.9 378.6,180.0 378.6,180.1 378.7,180.3 378.7,180.4 378.7,180.5 378.7,180.7 378.7,180.8 378.7,180.9 378.7,181.1 378.7,181.2 378.7,181.3 378.7,181.5 378.7,181.6 378.7,181.7 378.8,181.9 378.8,182.0 378.8,182.1 378.8,182.3 378.8,182.4 378.8,182.5 378.8,182.6 378.8,182.8 378.8,182.9 378.8,183.0 378.8,183.1 378.8,183.3 378.8,183.4 378.8,183.5 378.8,183.7 378.8,183.8 378.8,183.9 378.8,184.0 378.8,184.1 378.8,184.3 378.8,184.4 378.8,184.5 378.8,184.6 378.8,184.8 378.8,184.9 378.8,185.0 378.8,185.1 378.8,185.2 378.9,185.4 378.9,185.5 378.9,185.6 378.9,185.7 378.9,185.8" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" stroke-linejoin="round"/>
  <line x1="90.0" y1="117.0" x2="90.0" y2="57.0" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2"/>
  <polyline points="354.0,126.0 354.4,126.0 354.8,126.0 355.2,126.0 355.6,126.0 356.0,126.0 356.4,126.0 356.8,126.1 357.2,126.1 357.6,126.1 358.0,126.1 358.4,126.2 358.8,126.2 359.2,126.2 359.6,126.3 360.0,126.3 360.4,126.3 360.7,126.4 361.1,126.4 361.5,126.5 361.9,126.5 362.3,126.6 362.7,126.6 363.1,126.7 363.5,126.8 363.9,126.8 364.3,126.9 364.7,127.0 365.0,127.0 365.4,127.1 365.8,127.2 366.2,127.3 366.6,127.3 367.0,127.4 367.4,127.5 367.7,127.6 368.1,127.7 368.5,127.8 368.9,127.9 369.3,128.0 369.6,128.1 370.0,128.2 370.4,128.3 370.8,128.4 371.1,128.5 371.5,128.6 371.9,128.7 372.3,128.8 372.6,129.0 373.0,129.1 373.4,129.2 373.7,129.3 374.1,129.5 374.5,129.6 374.8,129.7 375.2,129.9 375.5,130.0 375.9,130.1 376.3,130.3 376.6,130.4 377.0,130.6 377.3,130.7 377.7,130.9 378.0,131.0 378.4,131.2 378.7,131.3 379.1,131.5 379.4,131.6 379.8,131.8 380.1,132.0 380.4,132.1 380.8,132.3 381.1,132.5 381.4,132.6 381.8,132.8 382.1,133.0 382.4,133.2 382.8,133.3 383.1,133.5 383.4,133.7 383.7,133.9 384.1,134.1 384.4,134.3 384.7,134.5 385.0,134.6 385.3,134.8 385.7,135.0 386.0,135.2 386.3,135.4 386.6,135.6 386.9,135.8 387.2,136.0 387.5,136.2 387.8,136.4 388.1,136.6 388.4,136.8 388.7,137.0 389.0,137.3 389.3,137.5 389.6,137.7 389.9,137.9 390.1,138.1 390.4,138.3 390.7,138.5 391.0,138.8 391.3,139.0 391.5,139.2 391.8,139.4 392.1,139.6 392.4,139.9 392.6,140.1 392.9,140.3 393.2,140.6 393.4,140.8 393.7,141.0 394.0,141.2 394.2,141.5 394.5,141.7 394.7,141.9 395.0,142.2 395.2,142.4 395.5,142.6 395.7,142.9 396.0,143.1 396.2,143.4 396.5,143.6 396.7,143.8 396.9,144.1 397.2,144.3 397.4,144.6 397.6,144.8 397.9,145.1 398.1,145.3 398.3,145.5 398.5,145.8 398.8,146.0 399.0,146.3 399.2,146.5 399.4,146.8 399.6,147.0 399.8,147.3 400.0,147.5 400.3,147.8 400.5,148.0 400.7,148.3 400.9,148.5 401.1,148.8 401.3,149.0 401.5,149.3 401.7,149.6 401.9,149.8 402.0,150.1 402.2,150.3 402.4,150.6 402.6,150.8 402.8,151.1 403.0,151.3 403.2,151.6 403.3,151.9 403.5,152.1 403.7,152.4 403.9,152.6 404.0,152.9 404.2,153.1 404.4,153.4 404.5,153.7 404.7,153.9 404.9,154.2 405.0,154.4 405.2,154.7 405.3,154.9 405.5,155.2 405.6,155.5 405.8,155.7 406.0,156.0 406.1,156.2 406.2,156.5 406.4,156.8 406.5,157.0 406.7,157.3 406.8,157.5 407.0,157.8 407.1,158.0 407.2,158.3 407.4,158.6 407.5,158.8 407.6,159.1 407.8,159.3 407.9,159.6 408.0,159.9 408.1,160.1 408.2,160.4 408.4,160.6 408.5,160.9 408.6,161.1 408.7,161.4 408.8,161.6 408.9,161.9 409.1,162.2 409.2,162.4 409.3,162.7 409.4,162.9 409.5,163.2 409.6,163.4 409.7,163.7 409.8,163.9 409.9,164.2 410.0,164.4 410.1,164.7 410.2,164.9 410.3,165.2 410.4,165.4 410.5,165.7 410.6,166.0 410.6,166.2 410.7,166.5 410.8,166.7 410.9,166.9 411.0,167.2 411.1,167.4 411.1,167.7 411.2,167.9 411.3,168.2 411.4,168.4 411.4,168.7 411.5,168.9 411.6,169.2 411.7,169.4 411.7,169.7 411.8,169.9 411.9,170.1 411.9,170.4 412.0,170.6 412.1,170.9 412.1,171.1 412.2,171.3 412.2,171.6 412.3,171.8 412.4,172.1 412.4,172.3 412.5,172.5 412.5,172.8 412.6,173.0 412.6,173.3 412.7,173.5 412.7,173.7 412.8,174.0 412.8,174.2 412.9,174.4 412.9,174.7 413.0,174.9 413.0,175.1 413.0,175.4 413.1,175.6 413.1,175.8 413.2,176.0 413.2,176.3 413.2,176.5 413.3,176.7 413.3,177.0 413.3,177.2 413.4,177.4 413.4,177.6 413.4,177.9 413.5,178.1 413.5,178.3 413.5,178.5 413.6,178.7 413.6,179.0 413.6,179.2 413.6,179.4 413.7,179.6 413.7,179.8 413.7,180.1 413.7,180.3 413.7,180.5 413.8,180.7 413.8,180.9 413.8,181.1 413.8,181.4 413.8,181.6 413.9,181.8 413.9,182.0 413.9,182.2 413.9,182.4 413.9,182.6 413.9,182.8 413.9,183.0 413.9,183.3 413.9,183.5 414.0,183.7 414.0,183.9 414.0,184.1 414.0,184.3 414.0,184.5 414.0,184.7 414.0,184.9 414.0,185.1 414.0,185.3 414.0,185.5 414.0,185.7" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" stroke-linejoin="round"/>
  <line x1="90.0" y1="117.0" x2="47.6" y2="74.6" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2"/>
  <polyline points="354.0,126.0 354.3,125.7 354.6,125.4 354.9,125.2 355.1,124.9 355.4,124.6 355.7,124.3 356.0,124.0 356.3,123.8 356.6,123.5 356.9,123.2 357.3,122.9 357.6,122.6 357.9,122.3 358.2,122.1 358.5,121.8 358.9,121.5 359.2,121.2 359.5,121.0 359.8,120.7 360.2,120.4 360.5,120.1 360.9,119.8 361.2,119.6 361.6,119.3 361.9,119.0 362.3,118.7 362.6,118.5 363.0,118.2 363.3,117.9 363.7,117.7 364.1,117.4 364.5,117.1 364.8,116.8 365.2,116.6 365.6,116.3 366.0,116.0 366.4,115.8 366.8,115.5 367.2,115.2 367.6,115.0 368.0,114.7 368.4,114.5 368.8,114.2 369.2,113.9 369.6,113.7 370.0,113.4 370.5,113.2 370.9,112.9 371.3,112.7 371.7,112.4 372.2,112.2 372.6,111.9 373.1,111.7 373.5,111.4 374.0,111.2 374.4,110.9 374.9,110.7 375.3,110.5 375.8,110.2 376.3,110.0 376.7,109.8 377.2,109.5 377.7,109.3 378.2,109.1 378.7,108.9 379.2,108.6 379.6,108.4 380.1,108.2 380.6,108.0 381.2,107.8 381.7,107.6 382.2,107.3 382.7,107.1 383.2,106.9 383.7,106.7 384.2,106.5 384.8,106.3 385.3,106.1 385.8,106.0 386.4,105.8 386.9,105.6 387.5,105.4 388.0,105.2 388.6,105.0 389.1,104.9 389.7,104.7 390.3,104.5 390.8,104.4 391.4,104.2 392.0,104.1 392.6,103.9 393.1,103.8 393.7,103.6 394.3,103.5 394.9,103.3 395.5,103.2 396.1,103.1 396.7,102.9 397.3,102.8 397.9,102.7 398.5,102.6 399.1,102.5 399.8,102.4 400.4,102.2 401.0,102.1 401.6,102.1 402.3,102.0 402.9,101.9 403.5,101.8 404.2,101.7 404.8,101.6 405.4,101.6 406.1,101.5 406.7,101.5 407.4,101.4 408.1,101.4 408.7,101.3 409.4,101.3 410.0,101.2 410.7,101.2 411.4,101.2 412.0,101.2 412.7,101.2 413.4,101.1 414.1,101.1 414.8,101.2 415.4,101.2 416.1,101.2 416.8,101.2 417.5,101.2 418.2,101.3 418.9,101.3 419.6,101.3 420.3,101.4 421.0,101.4 421.7,101.5 422.4,101.6 423.1,101.6 423.8,101.7 424.5,101.8 425.2,101.9 425.9,102.0 426.6,102.1 427.3,102.2 428.0,102.3 428.8,102.4 429.5,102.6 430.2,102.7 430.9,102.8 431.6,103.0 432.3,103.1 433.0,103.3 433.8,103.5 434.5,103.7 435.2,103.8 435.9,104.0 436.6,104.2 437.3,104.4 438.1,104.6 438.8,104.8 439.5,105.1 440.2,105.3 440.9,105.5 441.6,105.8 442.4,106.0 443.1,106.3 443.8,106.5 444.5,106.8 445.2,107.1 445.9,107.4 446.6,107.7 447.3,108.0 448.0,108.3 448.7,108.6 449.4,108.9 450.1,109.2 450.8,109.6 451.5,109.9 452.2,110.2 452.9,110.6 453.6,111.0 454.3,111.3 455.0,111.7 455.7,112.1 456.3,112.5 457.0,112.9 457.7,113.3 458.4,113.7 459.0,114.1 459.7,114.5 460.4,114.9 461.0,115.4 461.7,115.8 462.3,116.2 463.0,116.7 463.6,117.2 464.2,117.6 464.9,118.1 465.5,118.6 466.1,119.1 466.8,119.5 467.4,120.0 468.0,120.5 468.6,121.1 469.2,121.6 469.8,122.1 470.4,122.6 471.0,123.1 471.6,123.7 472.2,124.2 472.8,124.8 473.3,125.3 473.9,125.9 474.4,126.5 475.0,127.0 475.6,127.6 476.1,128.2 476.6,128.8 477.2,129.4 477.7,129.9 478.2,130.5 478.7,131.2 479.3,131.8 479.8,132.4 480.3,133.0 480.7,133.6 481.2,134.2 481.7,134.9 482.2,135.5 482.7,136.1 483.1,136.8 483.6,137.4 484.0,138.1 484.5,138.7 484.9,139.4 485.3,140.0 485.8,140.7 486.2,141.4 486.6,142.0 487.0,142.7 487.4,143.4 487.8,144.1 488.2,144.8 488.5,145.4 488.9,146.1 489.3,146.8 489.6,147.5 490.0,148.2 490.3,148.9 490.6,149.6 491.0,150.3 491.3,151.0 491.6,151.7 491.9,152.4 492.2,153.1 492.5,153.8 492.8,154.5 493.1,155.2 493.3,155.9 493.6,156.6 493.9,157.4 494.1,158.1 494.4,158.8 494.6,159.5 494.8,160.2 495.1,160.9 495.3,161.7 495.5,162.4 495.7,163.1 495.9,163.8 496.1,164.5 496.3,165.2 496.5,166.0 496.6,166.7 496.8,167.4 496.9,168.1 497.1,168.8 497.2,169.5 497.4,170.3 497.5,171.0 497.6,171.7 497.8,172.4 497.9,173.1 498.0,173.8 498.1,174.5 498.2,175.2 498.3,175.9 498.3,176.6 498.4,177.3 498.5,178.0 498.5,178.7 498.6,179.4 498.7,180.1 498.7,180.8 498.7,181.5 498.8,182.2 498.8,182.9 498.8,183.6 498.8,184.3 498.8,185.0" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" stroke-linejoin="round"/>
  <line x1="90.0" y1="117.0" x2="30.0" y2="117.0" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2"/>
  <polyline points="354.0,126.0 354.0,125.6 354.0,125.2 354.0,124.8 354.0,124.4 354.0,124.0 354.0,123.6 354.0,123.1 354.0,122.7 354.0,122.3 354.0,121.9 354.0,121.5 354.0,121.0 354.0,120.6 354.0,120.2 354.0,119.7 354.0,119.3 354.0,118.8 354.0,118.4 354.0,117.9 354.0,117.5 354.0,117.0 354.0,116.6 354.0,116.1 354.0,115.6 354.0,115.2 354.0,114.7 354.0,114.2 354.0,113.7 354.0,113.2 354.0,112.7 354.0,112.2 354.0,111.8 354.0,111.3 354.0,110.7 354.0,110.2 354.0,109.7 354.0,109.2 354.0,108.7 354.0,108.2 354.0,107.6 354.0,107.1 354.0,106.6 354.0,106.0 354.0,105.5 354.0,104.9 354.0,104.4 354.0,103.8 354.0,103.3 354.0,102.7 354.0,102.1 354.0,101.6 354.0,101.0 354.0,100.4 354.0,99.8 354.0,99.2 354.0,98.6 354.0,98.0 354.0,97.4 354.0,96.8 354.0,96.2 354.0,95.6 354.0,94.9 354.0,94.3 354.0,93.7 354.0,93.0 354.0,92.4 354.0,91.7 354.0,91.1 354.0,90.4 354.0,89.7 354.0,89.0 354.0,88.4 354.0,87.7 354.0,87.0 354.0,86.3 354.0,85.6 354.0,84.8 354.0,84.1 354.0,83.4 354.0,82.7 354.0,81.9 354.0,81.2 354.0,80.4 354.0,79.7 354.0,78.9 354.0,78.1 354.0,77.3 354.0,76.5 354.0,75.7 354.0,74.9 354.0,74.1 354.0,73.3 354.0,72.5 354.0,71.6 354.0,70.8 354.0,69.9 354.0,69.1 354.0,68.2 354.0,67.3 354.0,66.4 354.0,65.6 354.0,64.6 354.0,63.7 354.0,62.8 354.0,61.9 354.0,60.9 354.0,60.0 354.0,59.0 354.0,58.1 354.0,57.1 354.0,56.1 354.0,55.1 354.0,54.1 354.0,53.0 354.0,52.0 354.0,51.0 354.0,49.9 354.0,48.8 354.0,47.8 354.0,46.7 354.0,45.6 354.0,44.4 354.0,43.3 354.0,42.2 354.0,41.0 354.0,39.8 354.0,38.7 354.0,37.5 354.0,36.3 354.0,35.0 354.0,33.8 354.0,32.6 354.0,31.3 354.0,30.0 354.0,28.7 354.0,27.4 354.0,26.1 354.0,24.7 354.0,23.4 354.0,22.0 354.0,20.6 354.0,19.2" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" stroke-linejoin="round"/>
  <line x1="90.0" y1="117.0" x2="47.6" y2="159.4" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2"/>
  <polyline points="354.0,126.0 353.7,125.7 353.4,125.4 353.1,125.2 352.9,124.9 352.6,124.6 352.3,124.3 352.0,124.0 351.7,123.8 351.4,123.5 351.1,123.2 350.7,122.9 350.4,122.6 350.1,122.3 349.8,122.1 349.5,121.8 349.1,121.5 348.8,121.2 348.5,121.0 348.2,120.7 347.8,120.4 347.5,120.1 347.1,119.8 346.8,119.6 346.4,119.3 346.1,119.0 345.7,118.7 345.4,118.5 345.0,118.2 344.7,117.9 344.3,117.7 343.9,117.4 343.5,117.1 343.2,116.8 342.8,116.6 342.4,116.3 342.0,116.0 341.6,115.8 341.2,115.5 340.8,115.2 340.4,115.0 340.0,114.7 339.6,114.5 339.2,114.2 338.8,113.9 338.4,113.7 338.0,113.4 337.5,113.2 337.1,112.9 336.7,112.7 336.3,112.4 335.8,112.2 335.4,111.9 334.9,111.7 334.5,111.4 334.0,111.2 333.6,110.9 333.1,110.7 332.7,110.5 332.2,110.2 331.7,110.0 331.3,109.8 330.8,109.5 330.3,109.3 329.8,109.1 329.3,108.9 328.8,108.6 328.4,108.4 327.9,108.2 327.4,108.0 326.8,107.8 326.3,107.6 325.8,107.3 325.3,107.1 324.8,106.9 324.3,106.7 323.8,106.5 323.2,106.3 322.7,106.1 322.2,106.0 321.6,105.8 321.1,105.6 320.5,105.4 320.0,105.2 319.4,105.0 318.9,104.9 318.3,104.7 317.7,104.5 317.2,104.4 316.6,104.2 316.0,104.1 315.4,103.9 314.9,103.8 314.3,103.6 313.7,103.5 313.1,103.3 312.5,103.2 311.9,103.1 311.3,102.9 310.7,102.8 310.1,102.7 309.5,102.6 308.9,102.5 308.2,102.4 307.6,102.2 307.0,102.1 306.4,102.1 305.7,102.0 305.1,101.9 304.5,101.8 303.8,101.7 303.2,101.6 302.6,101.6 301.9,101.5 301.3,101.5 300.6,101.4 299.9,101.4 299.3,101.3 298.6,101.3 298.0,101.2 297.3,101.2 296.6,101.2 296.0,101.2 295.3,101.2 294.6,101.1 293.9,101.1 293.2,101.2 292.6,101.2 291.9,101.2 291.2,101.2 290.5,101.2 289.8,101.3 289.1,101.3 288.4,101.3 287.7,101.4 287.0,101.4 286.3,101.5 285.6,101.6 284.9,101.6 284.2,101.7 283.5,101.8 282.8,101.9 282.1,102.0 281.4,102.1 280.7,102.2 280.0,102.3 279.2,102.4 278.5,102.6 277.8,102.7 277.1,102.8 276.4,103.0 275.7,103.1 275.0,103.3 274.2,103.5 273.5,103.7 272.8,103.8 272.1,104.0 271.4,104.2 270.7,104.4 269.9,104.6 269.2,104.8 268.5,105.1 267.8,105.3 267.1,105.5 266.4,105.8 265.6,106.0 264.9,106.3 264.2,106.5 263.5,106.8 262.8,107.1 262.1,107.4 261.4,107.7 260.7,108.0 260.0,108.3 259.3,108.6 258.6,108.9 257.9,109.2 257.2,109.6 256.5,109.9 255.8,110.2 255.1,110.6 254.4,111.0 253.7,111.3 253.0,111.7 252.3,112.1 251.7,112.5 251.0,112.9 250.3,113.3 249.6,113.7 249.0,114.1 248.3,114.5 247.6,114.9 247.0,115.4 246.3,115.8 245.7,116.2 245.0,116.7 244.4,117.2 243.8,117.6 243.1,118.1 242.5,118.6 241.9,119.1 241.2,119.5 240.6,120.0 240.0,120.5 239.4,121.1 238.8,121.6 238.2,122.1 237.6,122.6 237.0,123.1 236.4,123.7 235.8,124.2 235.2,124.8 234.7,125.3 234.1,125.9 233.6,126.5 233.0,127.0 232.4,127.6 231.9,128.2 231.4,128.8 230.8,129.4 230.3,129.9 229.8,130.5 229.3,131.2 228.7,131.8 228.2,132.4 227.7,133.0 227.3,133.6 226.8,134.2 226.3,134.9 225.8,135.5 225.3,136.1 224.9,136.8 224.4,137.4 224.0,138.1 223.5,138.7 223.1,139.4 222.7,140.0 222.2,140.7 221.8,141.4 221.4,142.0 221.0,142.7 220.6,143.4 220.2,144.1 219.8,144.8 219.5,145.4 219.1,146.1 218.7,146.8 218.4,147.5 218.0,148.2 217.7,148.9 217.4,149.6 217.0,150.3 216.7,151.0 216.4,151.7 216.1,152.4 215.8,153.1 215.5,153.8 215.2,154.5 214.9,155.2 214.7,155.9 214.4,156.6 214.1,157.4 213.9,158.1 213.6,158.8 213.4,159.5 213.2,160.2 212.9,160.9 212.7,161.7 212.5,162.4 212.3,163.1 212.1,163.8 211.9,164.5 211.7,165.2 211.5,166.0 211.4,166.7 211.2,167.4 211.1,168.1 210.9,168.8 210.8,169.5 210.6,170.3 210.5,171.0 210.4,171.7 210.2,172.4 210.1,173.1 210.0,173.8 209.9,174.5 209.8,175.2 209.7,175.9 209.7,176.6 209.6,177.3 209.5,178.0 209.5,178.7 209.4,179.4 209.3,180.1 209.3,180.8 209.3,181.5 209.2,182.2 209.2,182.9 209.2,183.6 209.2,184.3 209.2,185.0" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" stroke-linejoin="round"/>
  <line x1="90.0" y1="117.0" x2="90.0" y2="177.0" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2"/>
  <polyline points="354.0,126.0 353.6,126.0 353.2,126.0 352.8,126.0 352.4,126.0 352.0,126.0 351.6,126.0 351.2,126.1 350.8,126.1 350.4,126.1 350.0,126.1 349.6,126.2 349.2,126.2 348.8,126.2 348.4,126.3 348.0,126.3 347.6,126.3 347.3,126.4 346.9,126.4 346.5,126.5 346.1,126.5 345.7,126.6 345.3,126.6 344.9,126.7 344.5,126.8 344.1,126.8 343.7,126.9 343.3,127.0 343.0,127.0 342.6,127.1 342.2,127.2 341.8,127.3 341.4,127.3 341.0,127.4 340.6,127.5 340.3,127.6 339.9,127.7 339.5,127.8 339.1,127.9 338.7,128.0 338.4,128.1 338.0,128.2 337.6,128.3 337.2,128.4 336.9,128.5 336.5,128.6 336.1,128.7 335.7,128.8 335.4,129.0 335.0,129.1 334.6,129.2 334.3,129.3 333.9,129.5 333.5,129.6 333.2,129.7 332.8,129.9 332.5,130.0 332.1,130.1 331.7,130.3 331.4,130.4 331.0,130.6 330.7,130.7 330.3,130.9 330.0,131.0 329.6,131.2 329.3,131.3 328.9,131.5 328.6,131.6 328.2,131.8 327.9,132.0 327.6,132.1 327.2,132.3 326.9,132.5 326.6,132.6 326.2,132.8 325.9,133.0 325.6,133.2 325.2,133.3 324.9,133.5 324.6,133.7 324.3,133.9 323.9,134.1 323.6,134.3 323.3,134.5 323.0,134.6 322.7,134.8 322.3,135.0 322.0,135.2 321.7,135.4 321.4,135.6 321.1,135.8 320.8,136.0 320.5,136.2 320.2,136.4 319.9,136.6 319.6,136.8 319.3,137.0 319.0,137.3 318.7,137.5 318.4,137.7 318.1,137.9 317.9,138.1 317.6,138.3 317.3,138.5 317.0,138.8 316.7,139.0 316.5,139.2 316.2,139.4 315.9,139.6 315.6,139.9 315.4,140.1 315.1,140.3 314.8,140.6 314.6,140.8 314.3,141.0 314.0,141.2 313.8,141.5 313.5,141.7 313.3,141.9 313.0,142.2 312.8,142.4 312.5,142.6 312.3,142.9 312.0,143.1 311.8,143.4 311.5,143.6 311.3,143.8 311.1,144.1 310.8,144.3 310.6,144.6 310.4,144.8 310.1,145.1 309.9,145.3 309.7,145.5 309.5,145.8 309.2,146.0 309.0,146.3 308.8,146.5 308.6,146.8 308.4,147.0 308.2,147.3 308.0,147.5 307.7,147.8 307.5,148.0 307.3,148.3 307.1,148.5 306.9,148.8 306.7,149.0 306.5,149.3 306.3,149.6 306.1,149.8 306.0,150.1 305.8,150.3 305.6,150.6 305.4,150.8 305.2,151.1 305.0,151.3 304.8,151.6 304.7,151.9 304.5,152.1 304.3,152.4 304.1,152.6 304.0,152.9 303.8,153.1 303.6,153.4 303.5,153.7 303.3,153.9 303.1,154.2 303.0,154.4 302.8,154.7 302.7,154.9 302.5,155.2 302.4,155.5 302.2,155.7 302.0,156.0 301.9,156.2 301.8,156.5 301.6,156.8 301.5,157.0 301.3,157.3 301.2,157.5 301.0,157.8 300.9,158.0 300.8,158.3 300.6,158.6 300.5,158.8 300.4,159.1 300.2,159.3 300.1,159.6 300.0,159.9 299.9,160.1 299.8,160.4 299.6,160.6 299.5,160.9 299.4,161.1 299.3,161.4 299.2,161.6 299.1,161.9 298.9,162.2 298.8,162.4 298.7,162.7 298.6,162.9 298.5,163.2 298.4,163.4 298.3,163.7 298.2,163.9 298.1,164.2 298.0,164.4 297.9,164.7 297.8,164.9 297.7,165.2 297.6,165.4 297.5,165.7 297.4,166.0 297.4,166.2 297.3,166.5 297.2,166.7 297.1,166.9 297.0,167.2 296.9,167.4 296.9,167.7 296.8,167.9 296.7,168.2 296.6,168.4 296.6,168.7 296.5,168.9 296.4,169.2 296.3,169.4 296.3,169.7 296.2,169.9 296.1,170.1 296.1,170.4 296.0,170.6 295.9,170.9 295.9,171.1 295.8,171.3 295.8,171.6 295.7,171.8 295.6,172.1 295.6,172.3 295.5,172.5 295.5,172.8 295.4,173.0 295.4,173.3 295.3,173.5 295.3,173.7 295.2,174.0 295.2,174.2 295.1,174.4 295.1,174.7 295.0,174.9 295.0,175.1 295.0,175.4 294.9,175.6 294.9,175.8 294.8,176.0 294.8,176.3 294.8,176.5 294.7,176.7 294.7,177.0 294.7,177.2 294.6,177.4 294.6,177.6 294.6,177.9 294.5,178.1 294.5,178.3 294.5,178.5 294.4,178.7 294.4,179.0 294.4,179.2 294.4,179.4 294.3,179.6 294.3,179.8 294.3,180.1 294.3,180.3 294.3,180.5 294.2,180.7 294.2,180.9 294.2,181.1 294.2,181.4 294.2,181.6 294.1,181.8 294.1,182.0 294.1,182.2 294.1,182.4 294.1,182.6 294.1,182.8 294.1,183.0 294.1,183.3 294.1,183.5 294.0,183.7 294.0,183.9 294.0,184.1 294.0,184.3 294.0,184.5 294.0,184.7 294.0,184.9 294.0,185.1 294.0,185.3 294.0,185.5 294.0,185.7" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" stroke-linejoin="round"/>
  <line x1="90.0" y1="117.0" x2="132.4" y2="159.4" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2"/>
  <polyline points="354.0,126.0 353.7,126.3 353.4,126.6 353.2,126.8 352.9,127.1 352.6,127.4 352.4,127.7 352.1,128.0 351.8,128.2 351.6,128.5 351.3,128.8 351.1,129.1 350.8,129.4 350.6,129.7 350.3,129.9 350.1,130.2 349.8,130.5 349.6,130.8 349.3,131.0 349.1,131.3 348.9,131.6 348.6,131.9 348.4,132.2 348.2,132.4 348.0,132.7 347.7,133.0 347.5,133.3 347.3,133.5 347.1,133.8 346.9,134.1 346.7,134.4 346.5,134.6 346.2,134.9 346.0,135.2 345.8,135.5 345.6,135.7 345.4,136.0 345.2,136.3 345.0,136.6 344.9,136.8 344.7,137.1 344.5,137.4 344.3,137.6 344.1,137.9 343.9,138.2 343.7,138.4 343.6,138.7 343.4,139.0 343.2,139.2 343.0,139.5 342.9,139.8 342.7,140.0 342.5,140.3 342.3,140.6 342.2,140.8 342.0,141.1 341.9,141.3 341.7,141.6 341.5,141.9 341.4,142.1 341.2,142.4 341.1,142.6 340.9,142.9 340.8,143.2 340.6,143.4 340.5,143.7 340.3,143.9 340.2,144.2 340.0,144.4 339.9,144.7 339.7,144.9 339.6,145.2 339.5,145.4 339.3,145.7 339.2,145.9 339.1,146.2 338.9,146.4 338.8,146.7 338.7,146.9 338.6,147.2 338.4,147.4 338.3,147.7 338.2,147.9 338.1,148.2 337.9,148.4 337.8,148.6 337.7,148.9 337.6,149.1 337.5,149.4 337.4,149.6 337.2,149.8 337.1,150.1 337.0,150.3 336.9,150.5 336.8,150.8 336.7,151.0 336.6,151.3 336.5,151.5 336.4,151.7 336.3,152.0 336.2,152.2 336.1,152.4 336.0,152.6 335.9,152.9 335.8,153.1 335.7,153.3 335.6,153.6 335.5,153.8 335.4,154.0 335.3,154.2 335.2,154.5 335.1,154.7 335.0,154.9 335.0,155.1 334.9,155.3 334.8,155.6 334.7,155.8 334.6,156.0 334.5,156.2 334.5,156.4 334.4,156.7 334.3,156.9 334.2,157.1 334.1,157.3 334.1,157.5 334.0,157.7 333.9,158.0 333.8,158.2 333.8,158.4 333.7,158.6 333.6,158.8 333.6,159.0 333.5,159.2 333.4,159.4 333.3,159.6 333.3,159.8 333.2,160.0 333.1,160.3 333.1,160.5 333.0,160.7 333.0,160.9 332.9,161.1 332.8,161.3 332.8,161.5 332.7,161.7 332.7,161.9 332.6,162.1 332.5,162.3 332.5,162.5 332.4,162.7 332.4,162.9 332.3,163.1 332.3,163.3 332.2,163.4 332.1,163.6 332.1,163.8 332.0,164.0 332.0,164.2 331.9,164.4 331.9,164.6 331.8,164.8 331.8,165.0 331.7,165.2 331.7,165.4 331.7,165.5 331.6,165.7 331.6,165.9 331.5,166.1 331.5,166.3 331.4,166.5 331.4,166.7 331.3,166.8 331.3,167.0 331.3,167.2 331.2,167.4 331.2,167.6 331.1,167.7 331.1,167.9 331.1,168.1 331.0,168.3 331.0,168.5 330.9,168.6 330.9,168.8 330.9,169.0 330.8,169.2 330.8,169.3 330.8,169.5 330.7,169.7 330.7,169.8 330.7,170.0 330.6,170.2 330.6,170.4 330.6,170.5 330.5,170.7 330.5,170.9 330.5,171.0 330.4,171.2 330.4,171.4 330.4,171.5 330.4,171.7 330.3,171.9 330.3,172.0 330.3,172.2 330.3,172.4 330.2,172.5 330.2,172.7 330.2,172.9 330.1,173.0 330.1,173.2 330.1,173.3 330.1,173.5 330.1,173.7 330.0,173.8 330.0,174.0 330.0,174.1 330.0,174.3 329.9,174.4 329.9,174.6 329.9,174.8 329.9,174.9 329.9,175.1 329.8,175.2 329.8,175.4 329.8,175.5 329.8,175.7 329.8,175.8 329.7,176.0 329.7,176.1 329.7,176.3 329.7,176.4 329.7,176.6 329.7,176.7 329.6,176.9 329.6,177.0 329.6,177.2 329.6,177.3 329.6,177.5 329.6,177.6 329.5,177.7 329.5,177.9 329.5,178.0 329.5,178.2 329.5,178.3 329.5,178.5 329.5,178.6 329.5,178.7 329.4,178.9 329.4,179.0 329.4,179.2 329.4,179.3 329.4,179.4 329.4,179.6 329.4,179.7 329.4,179.9 329.4,180.0 329.4,180.1 329.3,180.3 329.3,180.4 329.3,180.5 329.3,180.7 329.3,180.8 329.3,180.9 329.3,181.1 329.3,181.2 329.3,181.3 329.3,181.5 329.3,181.6 329.3,181.7 329.2,181.9 329.2,182.0 329.2,182.1 329.2,182.3 329.2,182.4 329.2,182.5 329.2,182.6 329.2,182.8 329.2,182.9 329.2,183.0 329.2,183.1 329.2,183.3 329.2,183.4 329.2,183.5 329.2,183.7 329.2,183.8 329.2,183.9 329.2,184.0 329.2,184.1 329.2,184.3 329.2,184.4 329.2,184.5 329.2,184.6 329.2,184.8 329.2,184.9 329.2,185.0 329.2,185.1 329.2,185.2 329.1,185.4 329.1,185.5 329.1,185.6 329.1,185.7 329.1,185.8" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 2" stroke-linejoin="round"/>
  <circle cx="150.0" cy="117.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="162.0" y="121.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="90.0" cy="57.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="102.0" y="51.0" font-size="12" text-anchor="middle" fill="currentColor">i</text>
  <circle cx="30.0" cy="117.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="16.0" y="121.0" font-size="12" text-anchor="middle" fill="currentColor">−1</text>
  <circle cx="90.0" cy="117.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="102.0" y="121.0" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="354.0" cy="186.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="364.0" y="202.0" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="414.0" cy="186.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="424.0" y="202.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="354.0" cy="126.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="364.0" y="120.0" font-size="12" text-anchor="middle" fill="currentColor">i</text>
  <text x="150.0" y="48.0" font-size="14" text-anchor="middle" fill="currentColor" font-style="italic">f</text>
  <text x="150.0" y="64.0" font-size="16" text-anchor="middle" fill="currentColor">→</text>
</svg>
</div>

### Fixed points and the four kinds

*Level: expert.* A Möbius map other than the identity has one or two fixed points in $\hat{\mathbb{C}}$, the roots of
$cz^2 + (d - a)z - b = 0$ (with $\infty$ fixed when $c = 0$). Normalise so that $ad - bc = 1$, and let
$t = a + d$ be the trace (defined up to sign). Then:

- **parabolic** if $t = \pm 2$: one fixed point; conjugate to a translation $z \mapsto z + 1$;
- **elliptic** if $t$ is real with $|t| < 2$: two fixed points; conjugate to a rotation $z \mapsto e^{i\theta} z$;
- **hyperbolic** if $t$ is real with $|t| > 2$: conjugate to a scaling $z \mapsto kz$, $k > 0$;
- **loxodromic** otherwise: conjugate to a spiral $z \mapsto kz$ with $k$ not real and not of modulus $1$.

*Why:* if there are two fixed points, move them to $0$ and $\infty$; a map fixing both is $z \mapsto kz$, with matrix
conjugate to $\mathrm{diag}(\sqrt k, 1/\sqrt k)$ and trace $\sqrt k + 1/\sqrt k$. That trace is real with modulus below
$2$ exactly when $|k| = 1$, and real with modulus above $2$ exactly when $k$ is real and positive (not $1$). With one
fixed point, move it to $\infty$; the map is $z \mapsto z + b$, conjugate to $z \mapsto z + 1$, with trace $\pm 2$.

**Example.** $f(z) = 1/(2 - z)$, matrix $\begin{pmatrix} 0 & 1 \\ -1 & 2 \end{pmatrix}$, determinant $1$, trace $2$:
parabolic. Fixed points: $z(2 - z) = 1$, so $z^2 - 2z + 1 = 0$, a double root at $z = 1$. Check: $f(1) = 1$.

The images of circles under groups of Möbius maps make the astonishing fractal pictures in *Indra's Pearls* by
Mumford, Series and Wright; that is where this subject meets current research on Kleinian groups.

## 13.5 Ptolemy again, via inversion

*Level: advanced.* In [Chapter 12](12-Triangle-Centres-and-Classical-Theorems.md) you met Ptolemy's theorem: for a
quadrilateral $ABCD$ inscribed in a circle,

$$
AB \cdot CD + AD \cdot BC = AC \cdot BD .
$$

Claudius Ptolemy (2nd century AD) used it in the *Almagest* to compute his table of chords, the ancestor of the sine
table. Here are two short proofs, which also give more: an inequality for every four points.

**Theorem 13.12 (Ptolemy's inequality).** For any four points $A, B, C, D$ in the plane,

$$
AB \cdot CD + AD \cdot BC \ \ge \ AC \cdot BD ,
$$

with equality exactly when $A, B, C, D$ lie in this order on a circle (or on a line, with $C$ between $B$ and $D$ seen
from $A$; more on this below).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 221.6 315.2" role="img" aria-label="Inversion about A, a point on the circle through A, B, C, D, turns the circle into a straight line. B, C, D go to B prime, C prime, D prime on that line, in the same order, so B prime C prime plus C prime D prime equals B prime D prime">
  <circle cx="95.2" cy="188.8" r="52.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6"/>
  <line x1="147.2" y1="298.0" x2="147.2" y2="14.6" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="43.2,188.8 73.2,141.7 135.0,155.4 108.7,239.0" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <circle cx="43.2" cy="188.8" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="31.2" y="192.8" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <line x1="43.2" y1="188.8" x2="147.2" y2="25.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <circle cx="73.2" cy="141.7" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="147.2" cy="25.6" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="63.2" y="133.7" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <text x="163.2" y="30.6" font-size="12" text-anchor="middle" fill="currentColor">B′</text>
  <line x1="43.2" y1="188.8" x2="147.2" y2="150.9" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <circle cx="135.0" cy="155.4" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="147.2" cy="150.9" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="127.0" y="145.4" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <text x="163.2" y="155.9" font-size="12" text-anchor="middle" fill="currentColor">C′</text>
  <line x1="43.2" y1="188.8" x2="147.2" y2="268.6" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <circle cx="108.7" cy="239.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="147.2" cy="268.6" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="118.7" y="255.0" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <text x="163.2" y="273.6" font-size="12" text-anchor="middle" fill="currentColor">D′</text>
</svg>
</div>

*Proof by inversion.* Invert about $A$ with radius $1$. By the distance formula of 13.2,

$$
B'C' = \frac{BC}{AB \cdot AC}, \qquad C'D' = \frac{CD}{AC \cdot AD}, \qquad B'D' = \frac{BD}{AB \cdot AD} .
$$

The triangle inequality for $B', C', D'$ says $B'C' + C'D' \ge B'D'$:

$$
\frac{BC}{AB \cdot AC} + \frac{CD}{AC \cdot AD} \ \ge \ \frac{BD}{AB \cdot AD} .
$$

Multiply both sides by $AB \cdot AC \cdot AD$: $BC \cdot AD + CD \cdot AB \ge BD \cdot AC$, which is the inequality.
Equality holds exactly when $C'$ lies on the segment $B'D'$. By Theorem 13.4, $B', C', D'$ lie on a line not through
$A$ exactly when $B, C, D$ lie on a circle through $A$, and $C'$ is between $B'$ and $D'$ exactly when $C$ is on the arc
$BD$ that does not contain $A$, that is, when $A, B, C, D$ are in this order around the circle. $\square$

*Proof by complex numbers.* For any four complex numbers there is an identity, which you can check by expanding both
sides:

$$
(a - b)(c - d) + (a - d)(b - c) = (a - c)(b - d) .
$$

Take moduli and use the triangle inequality $|u + v| \le |u| + |v|$: $|a - c||b - d| \le |a - b||c - d| + |a - d||b - c|$,
which is Ptolemy's inequality again. Equality in $|u + v| \le |u| + |v|$ holds when $u$ and $v$ point the same way, that
is when

$$
\frac{(a - b)(c - d)}{(a - d)(b - c)}
$$

is a positive real number. This quotient is a cross-ratio of $a, b, c, d$ (up to the ordering convention), so by
Theorem 13.11 it is real exactly when the four points are concyclic; the sign sorts out the order. $\square$

**Examples.** For a square of side $1$: $1 \cdot 1 + 1 \cdot 1 = \sqrt2 \cdot \sqrt2$. For a $3 \times 4$ rectangle,
whose diagonals are $5$: $3 \cdot 3 + 4 \cdot 4 = 5 \cdot 5$, which is Pythagoras' theorem. For a regular pentagon
with side $1$ and diagonal $d$, take four of its vertices: three sides are $1$, the fourth side and both diagonals are
$d$, and Ptolemy gives $d \cdot d = 1 \cdot d + 1 \cdot 1$, so $d^2 = d + 1$ and $d = (1 + \sqrt5)/2$, the golden ratio of
[Chapter 5](05-Similarity.md).

## 13.6 The Riemann sphere

*Level: advanced to expert.* We have been adding a point $\infty$ to the plane by decree. Is there a place where it
really lives, as an ordinary point? Yes: wrap the plane onto a sphere.

**Stereographic projection.** Let $S$ be the unit sphere $X^2 + Y^2 + Z^2 = 1$ and $N = (0, 0, 1)$ its north pole.
Identify the plane $Z = 0$ with $\mathbb{C}$. For each point $P \neq N$ of the sphere, the line from $N$ through $P$
meets the plane at one point $z$; this is **stereographic projection** from $N$. Points of the southern hemisphere go
inside the unit circle, the equator stays where it is, points of the northern hemisphere go outside, and as $P$
approaches $N$, $z$ runs off to infinity. So we send $N$ to $\infty$, and the sphere becomes a picture of
$\hat{\mathbb{C}}$: the **Riemann sphere**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420.0 186.0" role="img" aria-label="Stereographic projection seen side on: the line from the north pole N through a point P of the sphere meets the plane at z. Points of the southern half land inside the unit circle, points of the northern half outside it, and N itself goes to infinity">
  <circle cx="210.0" cy="96.0" r="60.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6"/>
  <line x1="18.0" y1="96.0" x2="402.0" y2="96.0" stroke="currentColor" stroke-width="1.4"/>
  <line x1="210.0" y1="36.0" x2="228.9" y2="96.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="244.4" cy="145.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="256.4" y="149.1" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="228.9" cy="96.0" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="228.9" y="112.0" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">z</text>
  <line x1="210.0" y1="36.0" x2="325.3" y2="96.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="259.1" cy="61.6" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="271.1" y="55.6" font-size="12" text-anchor="middle" fill="currentColor">Q</text>
  <circle cx="325.3" cy="96.0" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="325.3" y="112.0" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">w</text>
  <circle cx="210.0" cy="36.0" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="210.0" y="28.0" font-size="12" text-anchor="middle" fill="currentColor">N</text>
  <circle cx="210.0" cy="156.0" r="3" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="220.0" y="168.0" font-size="12" text-anchor="middle" fill="currentColor">S</text>
  <text x="40.0" y="90.0" font-size="11" text-anchor="start" fill="currentColor">plane</text>
</svg>
</div>

**Formulas.** The line from $N$ through $P = (X, Y, Z)$ is $N + t(P - N) = (tX, tY, 1 + t(Z - 1))$. It reaches $Z = 0$
when $t = 1/(1 - Z)$, so

$$
z = \frac{X + iY}{1 - Z} .
$$

Going back, for $z = x + iy$:

$$
(X, Y, Z) = \left( \frac{2x}{|z|^2 + 1}, \ \frac{2y}{|z|^2 + 1}, \ \frac{|z|^2 - 1}{|z|^2 + 1} \right) .
$$

**Check:** the sum of squares is $(4|z|^2 + (|z|^2 - 1)^2)/(|z|^2 + 1)^2 = (|z|^2 + 1)^2/(|z|^2 + 1)^2 = 1$, so the point
lies on the sphere; and $1 - Z = 2/(|z|^2 + 1)$, so $(X + iY)/(1 - Z) = x + iy$.

**Theorem 13.13.** Stereographic projection sends circles on the sphere to generalised circles in the plane: to lines
if the circle passes through $N$, to circles otherwise. It also preserves angles.

*Proof of the first part.* A circle on the sphere is its intersection with a plane $aX + bY + cZ = d$. Put in the
formulas for $X, Y, Z$ and multiply by $|z|^2 + 1$:

$$
2ax + 2by + c(|z|^2 - 1) = d(|z|^2 + 1), \quad\text{that is}\quad (c - d)|z|^2 + 2ax + 2by - (c + d) = 0 .
$$

If $c \neq d$ this is a circle (or empty, or a point, but a real circle on the sphere gives a real image). If $c = d$ it
is a line, and $c = d$ says exactly that the plane passes through $N = (0, 0, 1)$. $\square$

The angle part is true too; one proof shows that stereographic projection is the restriction of an inversion in
**space**, in the sphere with centre $N$ and radius $\sqrt2$, and inversions in space are conformal just as in the
plane.

**Rotations are Möbius maps.** Turn the sphere through half a turn about the $X$-axis: $(X, Y, Z) \mapsto (X, -Y, -Z)$.
What does this do in the plane? The point $z = (X + iY)/(1 - Z)$ goes to $(X - iY)/(1 + Z)$. Compare
$1/z = (1 - Z)/(X + iY) = (1 - Z)(X - iY)/(X^2 + Y^2) = (1 - Z)(X - iY)/(1 - Z^2) = (X - iY)/(1 + Z)$. The same. So the
mysterious map $z \mapsto 1/z$, which swaps $0$ and $\infty$, is simply a half turn of the Riemann sphere swapping the
poles. In general (we state this without proof) every rotation of the sphere becomes a Möbius map of the form

$$
z \mapsto \frac{az + b}{-\bar b z + \bar a}, \qquad |a|^2 + |b|^2 = 1,
$$

and this is the link between the rotation group $\mathrm{SO}(3)$ and the group $\mathrm{SU}(2)$ of $2 \times 2$ unitary
matrices that physicists use to describe the spin of an electron.

**Maps of planets.** Because it keeps angles and sends circles to circles, stereographic projection is a favourite for
maps of polar regions: polar maps of the Earth, and of Mars's polar ice caps, are often drawn in the polar stereographic
projection. [Chapter 16](16-Spherical-Geometry.md) explains why no flat map can be perfect, and what each projection
gives up.

**History.** Stereographic projection is ancient: it is the geometry of the astrolabe, and Ptolemy wrote about it.
That it keeps angles was proved much later: Thomas Harriot found it in unpublished notes around 1590, and Edmond Halley
published a proof in the 1690s. August Ferdinand Möbius studied the transformations that bear his name in the 1850s, and Bernhard Riemann
made the sphere the natural home of complex functions in the same decade.

## Check yourself

??? question "1. Invert the point $3 + 4i$ in the unit circle. Check your answer."

    The image is $1/\bar z = 1/(3 - 4i) = (3 + 4i)/25 = 0.12 + 0.16i$. Check: it lies on the same ray (a positive
    multiple of $3 + 4i$), and $|3 + 4i| \cdot |0.12 + 0.16i| = 5 \cdot 0.2 = 1$.

??? question "2. The points $0$ and $2$ are two corners of an equilateral triangle, labelled counterclockwise. Find the third corner, and check Lemma 13.2."

    Turn $2$ by $60^\circ$ counterclockwise about $0$: $c = 2e^{i\pi/3} = 1 + \sqrt3\, i$. Check:
    $0 + \omega \cdot 2 + \omega^2(1 + \sqrt3 i)$ with $\omega = -\tfrac12 + \tfrac{\sqrt3}{2} i$ and
    $\omega^2 = -\tfrac12 - \tfrac{\sqrt3}{2} i$. Then $2\omega = -1 + \sqrt3 i$ and
    $\omega^2 (1 + \sqrt3 i) = -\tfrac12 - \tfrac{\sqrt3}{2} i - \tfrac{\sqrt3}{2} i - \tfrac{3}{2} i^2 = 1 - \sqrt3 i$.
    The sum is $0$.

??? question "3. What does inversion in the unit circle do to the line $y = 1$?"

    The line does not pass through $0$, so it becomes a circle through $0$. Its closest point to $0$ is $i$, which is on
    the unit circle and stays fixed; it goes to the far end of a diameter, so the image is the circle with diameter
    from $0$ to $i$: centre $i/2$, radius $1/2$, equation $x^2 + y^2 = y$. Check with the formula: if $w = u + iv$ is
    the image of $z$, then $z = w/|w|^2$, and $\mathrm{Im}\, z = 1$ means $v/(u^2 + v^2) = 1$, that is $u^2 + v^2 = v$.

??? question "4. Invert the circle $|z - 3| = 1$ in the unit circle. Give the centre and radius of the image."

    The circle crosses the real axis at $2$ and $4$, which go to $\tfrac12$ and $\tfrac14$. The image is symmetric in the
    real axis, so these are the ends of a diameter: centre $\tfrac38$, radius $\tfrac18$. The formula agrees:
    centre $c/(|c|^2 - s^2) = 3/8$, radius $s/(|c|^2 - s^2) = 1/8$.

??? question "5. Show that $z \mapsto 1/z$ sends the unit circle to itself. Where does it send the upper half-plane?"

    If $|z| = 1$ then $|1/z| = 1$. Also $1/z = \bar z/|z|^2$, so $\mathrm{Im}(1/z) = -\mathrm{Im}(z)/|z|^2$, which has the
    opposite sign. So the upper half-plane goes to the lower half-plane. (On the Riemann sphere this is the half turn
    about the $X$-axis from 13.6, which swaps the two halves of the sphere cut by the plane $Y = 0$.)

??? question "6. Find the Möbius transformation sending $0, 1, \infty$ to $1, i, -1$."

    Write $f(z) = (az + b)/(cz + d)$. From $f(\infty) = a/c = -1$, $a = -c$. From $f(0) = b/d = 1$, take $b = d = 1$.
    From $f(1) = (a + 1)/(c + 1) = i$ with $a = -c$: $1 - c = i(c + 1)$, so $c = (1 - i)/(1 + i) = -i$ and $a = i$.
    So $f(z) = (iz + 1)/(-iz + 1)$. Check: $f(1) = (1 + i)/(1 - i) = (1 + i)^2/2 = i$. This is the inverse of the map
    in the worked example of 13.4.

??? question "7. Use the cross-ratio to decide whether $0$, $1$, $1 + i$ and $i$ lie on one circle, and also $0$, $1$, $2 + i$, $i$."

    Compute $(z, z_1; z_2, z_3)$ with $z = i$, $z_1 = 0$, $z_2 = 1$, $z_3 = 1 + i$:
    $\dfrac{(i - 0)(1 - 1 - i)}{(i - 1 - i)(1 - 0)} = \dfrac{i \cdot (-i)}{-1} = -1$, real: concyclic (they are the
    corners of a square). With $z_3 = 2 + i$: $\dfrac{i(1 - 2 - i)}{(i - 2 - i) \cdot 1} = \dfrac{i(-1 - i)}{-2}
    = \dfrac{1 - i}{-2}$, not real: not concyclic.

??? question "8. A regular pentagon has side $1$. Use Ptolemy's theorem to find its diagonal."

    Take four vertices $A, B, C, D$ in order. Then $AB = BC = CD = 1$, while $AD$, $AC$ and $BD$ are diagonals, all equal
    to $d$. Ptolemy: $AB \cdot CD + AD \cdot BC = AC \cdot BD$ gives $1 + d = d^2$, so $d = (1 + \sqrt5)/2 \approx 1.618$.

??? question "9. Three circles of radii $1$, $2$ and $3$ touch each other from outside. Find the radii of the two circles touching all three."

    Curvatures $1, \tfrac12, \tfrac13$, with sum $\tfrac{11}{6}$ and $k_1k_2 + k_2k_3 + k_3k_1 = \tfrac12 + \tfrac16 + \tfrac13 = 1$.
    So $k_4 = \tfrac{11}{6} \pm 2$. The plus sign gives $\tfrac{23}{6}$: a small circle of radius $\tfrac{6}{23}$ in the
    gap. The minus sign gives $-\tfrac16$: a circle of radius $6$ enclosing all three. Check the second: put the
    centres at $A = (0, 0)$, $B = (3, 0)$, $C = (0, 4)$ (the distances are $1 + 2 = 3$, $1 + 3 = 4$, $2 + 3 = 5$). The
    point $X = (3, 4)$ is at distances $5, 4, 3$ from them, which are $6 - 1$, $6 - 2$, $6 - 3$: the circle of radius $6$
    about $X$ touches all three from outside them.

??? question "10. For which ratio $b/a$ of the radii of two concentric circles does a Steiner chain of $4$ circles close?"

    We need $(b - a)/(b + a) = \sin(\pi/4) = \tfrac{\sqrt2}{2}$. Solving, $b/a = (1 + s)/(1 - s)$ with $s = \tfrac{\sqrt2}{2}$,
    which simplifies to $3 + 2\sqrt2 \approx 5.83$.

??? question "11. Show that inversion in the circle of radius $r$ about $0$, followed by inversion in the circle of radius $s$ about $0$, is a scaling. By what factor?"

    The first sends $z$ to $r^2/\bar z$. The second sends $w$ to $s^2/\bar w$, and $\bar w = r^2/z$, so the result is
    $s^2 z/r^2$. It is the scaling about $0$ by $(s/r)^2$. (Two reflections in parallel lines make a translation; two
    inversions in concentric circles make a scaling.)

??? question "12. Which point of the unit sphere does stereographic projection send to $z = 1 + i$? Which point goes to $0$, and which to the unit circle?"

    $|z|^2 = 2$, so $(X, Y, Z) = (2/3, 2/3, 1/3)$. Check: $4/9 + 4/9 + 1/9 = 1$, and $(X + iY)/(1 - Z) = (2/3)(1 + i)/(2/3) = 1 + i$.
    The south pole $(0, 0, -1)$ goes to $0$, and the points with $Z = 0$ (the equator) go to the unit circle, since
    there $z = X + iY$ with $X^2 + Y^2 = 1$.

## What you learned

- Complex numbers turn geometry into algebra: distance is $|z - w|$, multiplying by $a$ turns by $\arg a$ and scales by
  $|a|$, and the quotient $(c - a)/(b - a)$ records the angle at $a$; Napoleon's theorem follows in a few lines.
- Inversion $z \mapsto r^2/\bar z$ swaps inside and outside of a circle, sends generalised circles (lines and circles) to
  generalised circles, keeps angles and reverses their sense.
- Inversion turns hard tangency problems into easy ones: Apollonius' problem becomes a common tangent problem, and
  Steiner chains become rings of equal circles, which proves Steiner's porism.
- Möbius maps $(az + b)/(cz + d)$ form a group; three points fix one; they preserve the cross-ratio, and four points are
  concyclic exactly when their cross-ratio is real.
- Ptolemy's inequality $AB \cdot CD + AD \cdot BC \ge AC \cdot BD$ holds for any four points, with equality for a cyclic
  quadrilateral; inversion or a one-line complex identity proves it.
- Stereographic projection makes the extended plane into the Riemann sphere, sends circles to circles, and turns
  rotations of the sphere into Möbius maps.

**Next:** [Chapter 14](14-Constructions-and-Impossibility.md) asks which points a straightedge and compass can reach, and proves that some of the oldest problems in geometry have no solution.

## Further reading

- H. S. M. Coxeter and S. L. Greitzer, *Geometry Revisited* (1967), chapter 5 on inversion.
- H. S. M. Coxeter, *Introduction to Geometry* (2nd ed., 1969), chapter 6 (circles, inversion, Steiner's porism).
- T. Needham, *Visual Complex Analysis* (1997), chapters 3 and 6: Möbius maps and the Riemann sphere, with superb pictures.
- L.-S. Hahn, *Complex Numbers and Geometry* (1994).
- H. Schwerdtfeger, *Geometry of Complex Numbers* (1962).
- D. Mumford, C. Series and D. Wright, *Indra's Pearls: The Vision of Felix Klein* (2002).
- J. C. Lagarias, C. L. Mallows and A. R. Wilks, "Beyond the Descartes circle theorem", *American Mathematical Monthly* 109 (2002).
- D. A. Brannan, M. F. Esplen and J. J. Gray, *Geometry* (1999), chapters on inversive geometry.
- On this site: the Algebra book's [Complex numbers](../algebra/09-Complex-Numbers.md) and
  [Groups](../algebra/13-Groups.md); the gentler [Circle theorems](../../topics/geometry/level-7/06-circle-theorems.md)
  lesson; the [Geometry book index](index.md).
