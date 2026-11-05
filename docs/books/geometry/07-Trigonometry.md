# 7. Trigonometry

*Similar triangles say that the shape of a right triangle is fixed by one of its acute angles. So the ratios of its
sides are functions of that angle, and if you have a table of them you can turn any angle you can measure into
lengths you cannot reach: the height of a cliff, the width of a river, the distance to the Moon. That is
trigonometry, "triangle measurement". This chapter defines sine, cosine and tangent from similar triangles, extends
them to every angle with the unit circle, introduces radians, proves the laws of sines and cosines and the addition
formulas, and then uses them the way astronomers did: to measure the distances to the Moon and to Mars.*

!!! abstract "In this chapter"
    **You will learn:**

    - sine, cosine and tangent of an acute angle, and why they do not depend on the size of the triangle
    - the exact values at 30, 45 and 60 degrees, and at 18 and 36 degrees from the pentagon
    - the unit circle, which defines sine and cosine for every angle, and the graphs it gives
    - radians, why mathematicians prefer them, and the inequality $\sin\theta < \theta < \tan\theta$
    - the laws of sines and cosines, with proofs for every shape of triangle, and the area formula
    - the addition formulas, proved for all angles, and the double- and half-angle formulas they give
    - how to solve any triangle, including the ambiguous case, and how parallax measured the Moon and Mars

    **You need:** [Chapter 4](04-Area-and-Pythagoras.md) (Pythagoras), [Chapter 5](05-Similarity.md) (similar
    triangles, the pentagon) and [Chapter 6](06-Circles.md) (inscribed angles, arcs and sectors). For a gentler
    version, see the Topics lessons [Sine, cosine and tangent](../../topics/geometry/level-7/02-sin-cos-tan.md),
    [Angles of elevation and depression](../../topics/geometry/level-7/03-elevation-depression.md),
    [The sine law and the ambiguous case](../../topics/geometry/level-7/04-sine-law.md),
    [The cosine law](../../topics/geometry/level-7/05-cosine-law.md) and
    [Radians and the unit circle](../../topics/geometry/level-8/02-radians-unit-circle.md).

    **Levels:** 7.1 and 7.2 are beginner to intermediate; 7.3 to 7.5 are intermediate; 7.6 and 7.7 are intermediate
    to advanced.

## 7.1 Sine, cosine and tangent

A ladder 6 m long leans against a wall, making an angle of $70°$ with the ground. How high up the wall does it reach?
You could draw it to scale and measure. Trigonometry does the drawing once and for all.

Take a right triangle with an acute angle $\theta$ (the Greek letter theta). Name the sides **from the point of view
of $\theta$**:

- the **hypotenuse** is the side opposite the right angle (the longest side);
- the **opposite** side is the side across from $\theta$;
- the **adjacent** side is the other side touching $\theta$ (not the hypotenuse).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Two right triangles sharing the angle theta at A: a small one ABC and a large one AB prime C prime, with right angles at B and B prime. On the large one the hypotenuse, the side opposite theta and the side adjacent to theta are labelled">
  <polygon points="40,222 330,222 330,18.9" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="40,222 214,222 214,100.2" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="201.2,222 201.2,209.2 214,209.2" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="317.2,222 317.2,209.2 330,209.2" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="40,222 80.6,222 80.6,221.2 80.6,220.3 80.5,219.5 80.5,218.7 80.4,217.9 80.3,217.1 80.2,216.2 80.1,215.4 79.9,214.6 79.8,213.8 79.6,213 79.4,212.2 79.2,211.4 79,210.6 78.7,209.8 78.5,209 78.2,208.2 77.9,207.5 77.6,206.7 77.3,205.9 76.9,205.2 76.6,204.4 76.2,203.7 75.8,202.9 75.5,202.2 75,201.5 74.6,200.8 74.2,200.1 73.7,199.4 73.3,198.7" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="80.6,222 80.6,221.2 80.6,220.3 80.5,219.5 80.5,218.7 80.4,217.9 80.3,217.1 80.2,216.2 80.1,215.4 79.9,214.6 79.8,213.8 79.6,213 79.4,212.2 79.2,211.4 79,210.6 78.7,209.8 78.5,209 78.2,208.2 77.9,207.5 77.6,206.7 77.3,205.9 76.9,205.2 76.6,204.4 76.2,203.7 75.8,202.9 75.5,202.2 75,201.5 74.6,200.8 74.2,200.1 73.7,199.4 73.3,198.7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="95.3" y="208.8" font-size="12" text-anchor="middle" fill="currentColor">θ</text>
  <text x="30" y="227" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="214" y="239" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="330" y="239" font-size="13" text-anchor="middle" fill="currentColor">B′</text>
  <text x="202" y="94.2" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="336" y="12.9" font-size="13" text-anchor="middle" fill="currentColor">C′</text>
  <text x="241.8" y="47.5" font-size="12" text-anchor="middle" fill="currentColor">hypotenuse</text>
  <text x="338" y="120.5" font-size="12" text-anchor="start" fill="currentColor">opposite</text>
  <text x="272" y="239" font-size="12" text-anchor="middle" fill="currentColor">adjacent</text>
</svg>
</div>

**Definition.** For an acute angle $\theta$ in a right triangle,

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \qquad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \qquad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}.$$

These are the **sine**, **cosine** and **tangent** of $\theta$. Some people remember them as SOH CAH TOA.

**Why this is a good definition.** A definition that says "take a right triangle" must give the same answer for
every right triangle with angle $\theta$, big or small, or it defines nothing. It does: any two right triangles with an
acute angle $\theta$ have two equal angles ($\theta$ and the right angle), so they are similar by AA
([Chapter 5](05-Similarity.md)), and similar triangles have their sides in the same ratios. In the figure the small
and large triangles share the angle $\theta$, and $BC/AB = B'C'/AB'$. So $\sin\theta$ depends on $\theta$ alone.

**The ladder.** The wall height is the side opposite the $70°$ angle and the ladder is the hypotenuse:
$h = 6 \sin 70° \approx 6 \times 0.9397 = 5.64$ m. Check with Pythagoras: the foot is $6\cos 70° \approx 2.05$ m from the wall,
and $5.64^2 + 2.05^2 \approx 36.0$.

**Going backwards.** If you know a ratio and want the angle, use the inverse functions $\sin^{-1}$ (also written
$\arcsin$), $\cos^{-1}$, $\tan^{-1}$. A ramp that rises 1 m over a run of 12 m makes an angle
$\theta = \tan^{-1}(1/12) \approx 4.76°$ with the ground.

**Three facts that come straight from the definitions.**

1. $\tan\theta = \dfrac{\sin\theta}{\cos\theta}$: divide opposite/hypotenuse by adjacent/hypotenuse.
2. $\sin\theta = \cos(90° - \theta)$ and $\cos\theta = \sin(90° - \theta)$. The other acute angle of the triangle is
   $90° - \theta$, and the side opposite $\theta$ is adjacent to it. That is where the name comes from: the
   **co**sine is the sine of the **co**mplementary angle.
3. $\sin^2\theta + \cos^2\theta = 1$, where $\sin^2\theta$ means $(\sin\theta)^2$. Dividing Pythagoras,
   $\text{opp}^2 + \text{adj}^2 = \text{hyp}^2$, by $\text{hyp}^2$ gives it.

**Worked example (elevation).** From a point 40 m from the foot of a tower, the top is seen at an **angle of
elevation** (the angle above horizontal) of $52°$. How tall is the tower? The height is opposite the angle and 40 m is
adjacent, so $h = 40\tan 52° \approx 40 \times 1.2799 = 51.2$ m.

**Where the words come from.** Greek astronomers, Hipparchus in the second century BCE and Ptolemy in his *Almagest*
around 150 CE, tabulated the **chord** of an angle: the length of the chord cut off by a central angle in a circle of
fixed radius. Indian astronomers, in works such as Aryabhata's of 499 CE, used half of a chord instead, which is our
sine: in a circle of radius 1, a central angle $2\theta$ cuts a chord of length $2\sin\theta$. The Sanskrit word for
it passed into Arabic, and a medieval Latin translation turned it into *sinus*, the source of our "sine". Tangent and
the systematic use of all six functions grew up in the Islamic world and in Renaissance Europe.

## 7.2 Special angles

For most angles, sines are irrational numbers you look up or compute. A few angles have exact values, and two simple
triangles give them.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Left: half of a unit square, a right triangle with legs 1 and 1, hypotenuse root 2 and two angles of 45 degrees. Right: an equilateral triangle of side 2 cut by its altitude into two right triangles with sides 1, root 3 and 2, and angles 30 and 60 degrees">
  <polygon points="30,195 150,195 30,75" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="40,195 40,185 30,185" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="134.4,179.4 134,179.9 133.7,180.3 133.3,180.7 132.9,181.2 132.5,181.6 132.2,182.1 131.9,182.5 131.5,183 131.2,183.5 130.9,184 130.7,184.5 130.4,185 130.1,185.5 129.9,186.1 129.7,186.6 129.5,187.1 129.3,187.7 129.1,188.2 128.9,188.8 128.7,189.3 128.6,189.9 128.5,190.4 128.4,191 128.3,191.6 128.2,192.1 128.1,192.7 128.1,193.3 128,193.8 128,194.4 128,195" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="111.2" y="182.8" font-size="11" text-anchor="middle" fill="currentColor">45°</text>
  <polyline points="30,97 30.6,97 31.2,97 31.7,96.9 32.3,96.9 32.9,96.8 33.4,96.7 34,96.6 34.6,96.5 35.1,96.4 35.7,96.3 36.2,96.1 36.8,95.9 37.3,95.7 37.9,95.5 38.4,95.3 38.9,95.1 39.5,94.9 40,94.6 40.5,94.3 41,94.1 41.5,93.8 42,93.5 42.5,93.1 42.9,92.8 43.4,92.5 43.8,92.1 44.3,91.7 44.7,91.3 45.1,91 45.6,90.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="46.1" y="117.7" font-size="11" text-anchor="middle" fill="currentColor">45°</text>
  <text x="90" y="212" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="20" y="135" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="102" y="129" font-size="13" text-anchor="middle" fill="currentColor">√2</text>
  <polygon points="205,195 305,195 305,21.8" fill="#7ccf9a" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <polygon points="305,195 405,195 305,21.8" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="315,195 315,185 305,185" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="394,175.9 393.3,176.3 392.7,176.8 392.1,177.2 391.5,177.7 390.9,178.1 390.3,178.7 389.7,179.2 389.2,179.7 388.7,180.3 388.1,180.9 387.7,181.5 387.2,182.1 386.8,182.7 386.3,183.3 385.9,184 385.6,184.7 385.2,185.4 384.9,186.1 384.6,186.8 384.3,187.5 384.1,188.2 383.9,188.9 383.7,189.7 383.5,190.4 383.3,191.2 383.2,191.9 383.1,192.7 383.1,193.5 383,194.2 383,195" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="368.6" y="177.8" font-size="11" text-anchor="middle" fill="currentColor">60°</text>
  <polyline points="305,51.8 305.5,51.8 306,51.8 306.6,51.8 307.1,51.7 307.6,51.7 308.1,51.6 308.7,51.6 309.2,51.5 309.7,51.4 310.2,51.3 310.7,51.2 311.2,51.1 311.7,51 312.3,50.9 312.8,50.8 313.3,50.6 313.8,50.5 314.3,50.3 314.8,50.2 315.3,50 315.8,49.8 316.2,49.6 316.7,49.4 317.2,49.2 317.7,49 318.2,48.8 318.6,48.5 319.1,48.3 319.5,48 320,47.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="317.9" y="73.9" font-size="11" text-anchor="middle" fill="currentColor">30°</text>
  <text x="355" y="212" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="293" y="117.1" font-size="13" text-anchor="middle" fill="currentColor">√3</text>
  <text x="365" y="106.4" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="245" y="106.4" font-size="13" text-anchor="middle" fill="currentColor">2</text>
</svg>
</div>

**45 degrees.** Cut a unit square along a diagonal. Each half is a right triangle with legs 1 and 1, hypotenuse
$\sqrt2$, and two angles of $45°$:

$$\sin 45° = \cos 45° = \frac{1}{\sqrt2} = \frac{\sqrt2}{2} \approx 0.7071, \qquad \tan 45° = 1 .$$

**30 and 60 degrees.** Cut an equilateral triangle of side 2 down its line of symmetry. Each half has hypotenuse 2,
short leg 1 (half the base), and long leg $\sqrt{4 - 1} = \sqrt3$. Its angles are $60°$ (a corner of the equilateral
triangle) and $30°$ (half of one). So

$$\sin 30° = \cos 60° = \tfrac12, \qquad \cos 30° = \sin 60° = \frac{\sqrt3}{2}, \qquad \tan 30° = \frac{1}{\sqrt3}, \qquad \tan 60° = \sqrt3 .$$

**0 and 90 degrees.** As $\theta$ shrinks to $0$, the opposite side shrinks to nothing and the adjacent side
approaches the hypotenuse; as $\theta$ grows to $90°$, the reverse. It is natural to set $\sin 0° = 0$, $\cos 0° = 1$,
$\sin 90° = 1$, $\cos 90° = 0$; the unit circle in 7.3 makes this official. $\tan 90°$ is undefined (division by zero).

| $\theta$ | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ |
|---|---|---|---|---|---|
| $\sin\theta$ | $0$ | $\tfrac12$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac12$ | $0$ |
| $\tan\theta$ | $0$ | $\tfrac{1}{\sqrt3}$ | $1$ | $\sqrt3$ | undefined |

A memory aid: the sines are $\tfrac{\sqrt0}{2}, \tfrac{\sqrt1}{2}, \tfrac{\sqrt2}{2}, \tfrac{\sqrt3}{2}, \tfrac{\sqrt4}{2}$.

**From the pentagon.** In [Chapter 5](05-Similarity.md) the regular pentagon gave $\cos 36° = \varphi/2$, where
$\varphi = (1 + \sqrt5)/2$ is the golden ratio. So

$$\cos 36° = \frac{1 + \sqrt5}{4} \approx 0.8090, \qquad \sin 18° = \cos 72° = \frac{\sqrt5 - 1}{4} \approx 0.3090 .$$

(The second follows from the first and the double-angle formula of 7.6: $\cos 72° = 2\cos^2 36° - 1$.) These are the
sines needed to construct a regular pentagon, which is why the Greeks could construct one; in
[Chapter 14](14-Constructions-and-Impossibility.md) you will see why a regular 7-gon or 9-gon is impossible.

**Worked example.** A kite string 50 m long makes $30°$ with the ground. The kite is $50\sin 30° = 25$ m up, and
$50\cos 30° = 25\sqrt3 \approx 43.3$ m away horizontally.

## 7.3 The unit circle and all angles

A Ferris wheel turns through $200°$. How high is a seat? A right triangle cannot have an angle of $200°$, but the
question makes perfect sense. We need sine and cosine for every angle, and the circle supplies them.

**Angles as turns.** Measure an angle $\theta$ from the positive $x$-axis, turning **counterclockwise** for positive
angles and clockwise for negative ones. Any real number of degrees is allowed: $450°$ is one full turn plus $90°$.

**Definition.** Let $P(\theta)$ be the point of the **unit circle** (centre the origin $O$, radius 1) reached by
turning the point $(1, 0)$ through the angle $\theta$. Then

$$\cos\theta = x\text{-coordinate of } P(\theta), \qquad \sin\theta = y\text{-coordinate of } P(\theta), \qquad \tan\theta = \frac{\sin\theta}{\cos\theta} \ (\cos\theta \neq 0).$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="The unit circle with centre O. The point P at angle theta of 140 degrees, measured counterclockwise from the positive x-axis, has coordinates cos theta, which is negative, and sin theta, which is positive">
  <line x1="81.8" y1="125" x2="338.2" y2="125" stroke="currentColor" stroke-width="1"/>
  <line x1="210" y1="243.8" x2="210" y2="6.2" stroke="currentColor" stroke-width="1"/>
  <text x="346.2" y="129" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">x</text>
  <text x="218" y="10.2" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">y</text>
  <circle cx="210" cy="125" r="95" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="210,125 233.8,125 233.7,123.1 233.4,121.1 233,119.3 232.5,117.4 231.8,115.6 231,113.9 230,112.2 228.9,110.6 227.6,109.1 226.3,107.7 224.8,106.5 223.3,105.3 221.6,104.3 219.9,103.4 218.1,102.7 216.3,102.1 214.4,101.7 212.5,101.4 210.6,101.3 208.6,101.3 206.7,101.5 204.8,101.8 202.9,102.3 201.1,103 199.3,103.8 197.6,104.7 196,105.8 194.5,107 193.1,108.3 191.8,109.7" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="233.8,125 233.7,123.1 233.4,121.1 233,119.3 232.5,117.4 231.8,115.6 231,113.9 230,112.2 228.9,110.6 227.6,109.1 226.3,107.7 224.8,106.5 223.3,105.3 221.6,104.3 219.9,103.4 218.1,102.7 216.3,102.1 214.4,101.7 212.5,101.4 210.6,101.3 208.6,101.3 206.7,101.5 204.8,101.8 202.9,102.3 201.1,103 199.3,103.8 197.6,104.7 196,105.8 194.5,107 193.1,108.3 191.8,109.7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="223.6" y="87.5" font-size="13" text-anchor="middle" fill="currentColor">θ</text>
  <line x1="210" y1="125" x2="137.2" y2="63.9" stroke="currentColor" stroke-width="1.5"/>
  <line x1="137.2" y1="63.9" x2="137.2" y2="125" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="210" y1="125" x2="137.2" y2="125" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="137.2" cy="63.9" r="3" fill="currentColor"/>
  <circle cx="305" cy="125" r="2.5" fill="currentColor"/>
  <text x="103.2" y="49.9" font-size="12" text-anchor="middle" fill="currentColor">P(θ) = (cos θ, sin θ)</text>
  <text x="173.6" y="142" font-size="12" text-anchor="middle" fill="currentColor">cos θ</text>
  <text x="131.2" y="94.5" font-size="12" text-anchor="end" fill="currentColor">sin θ</text>
  <text x="313" y="141" font-size="12" text-anchor="start" fill="currentColor">(1, 0)</text>
  <text x="218" y="141" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <text x="305" y="12.9" font-size="11" text-anchor="middle" fill="currentColor">I: sin +, cos +</text>
  <text x="115" y="239" font-size="11" text-anchor="middle" fill="currentColor">III: sin −, cos −</text>
  <text x="305" y="239" font-size="11" text-anchor="middle" fill="currentColor">IV: sin −, cos +</text>
  <text x="115" y="12.9" font-size="11" text-anchor="middle" fill="currentColor">II: sin +, cos −</text>
</svg>
</div>

For $0° < \theta < 90°$ this agrees with 7.1: drop a perpendicular from $P(\theta)$ to the $x$-axis and you get a right
triangle with hypotenuse 1, adjacent side $x$ and opposite side $y$. So the new definition **extends** the old one;
it does not replace it.

**What the circle tells you at once.**

- **Pythagoras for all angles.** $P(\theta)$ is at distance 1 from $O$, so $\cos^2\theta + \sin^2\theta = 1$ for every $\theta$.
- **Range.** $-1 \le \sin\theta \le 1$ and $-1 \le \cos\theta \le 1$.
- **Signs.** In the first quadrant ($0°$ to $90°$) both are positive; in the second ($90°$ to $180°$) sine is positive and
  cosine negative; in the third both are negative; in the fourth cosine is positive and sine negative.
- **Periodicity.** A full turn returns to the same point: $\sin(\theta + 360°) = \sin\theta$, $\cos(\theta + 360°) = \cos\theta$.
- **Symmetries.** Reflecting in the $x$-axis sends $P(\theta)$ to $P(-\theta)$, so $\cos(-\theta) = \cos\theta$ and
  $\sin(-\theta) = -\sin\theta$. Reflecting in the $y$-axis sends $P(\theta)$ to $P(180° - \theta)$, so
  $\sin(180° - \theta) = \sin\theta$ and $\cos(180° - \theta) = -\cos\theta$. A half turn sends $P(\theta)$ to
  $P(\theta + 180°)$, so both change sign.
- **Slope.** $\tan\theta$ is the slope of the line $OP(\theta)$, rise over run.

**Reference angles.** To find $\sin 150°$: $150° = 180° - 30°$, so $\sin 150° = \sin 30° = \tfrac12$. To find
$\cos 210°$: $210° = 180° + 30°$, a half turn past $30°$, so $\cos 210° = -\cos 30° = -\tfrac{\sqrt3}{2}$. And
$\tan 135° = \sin 135°/\cos 135° = (\tfrac{\sqrt2}{2})/(-\tfrac{\sqrt2}{2}) = -1$.

**Worked example (solving).** Find all $\theta$ between $0°$ and $360°$ with $\sin\theta = \tfrac12$. The horizontal
line $y = \tfrac12$ meets the unit circle twice: at $\theta = 30°$ and, by the $y$-axis symmetry, at
$180° - 30° = 150°$. Add any multiple of $360°$ for all solutions.

**The Ferris wheel.** A wheel of radius 20 m has its centre 22 m above the ground. A seat starts level with the centre
on the right and turns $200°$ counterclockwise. Its height is $22 + 20\sin 200° = 22 - 20\sin 20° \approx 22 - 6.84 = 15.16$ m.

**Graphs.** Plot $\sin\theta$ and $\cos\theta$ against $\theta$ and you get the familiar waves. The cosine graph is
the sine graph shifted left by $90°$, since $\cos\theta = \sin(\theta + 90°)$ (turn the picture a quarter turn).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="Graphs of sine, solid orange, and cosine, dashed blue, for angles from 0 to 360 degrees. Both waves stay between minus 1 and 1; the cosine wave is the sine wave shifted left by 90 degrees">
  <line x1="40" y1="88" x2="405" y2="88" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="160" x2="40" y2="16" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="92" x2="130" y2="84" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="105" font-size="11" text-anchor="middle" fill="currentColor">90°</text>
  <line x1="220" y1="92" x2="220" y2="84" stroke="currentColor" stroke-width="1"/>
  <text x="220" y="105" font-size="11" text-anchor="middle" fill="currentColor">180°</text>
  <line x1="310" y1="92" x2="310" y2="84" stroke="currentColor" stroke-width="1"/>
  <text x="310" y="105" font-size="11" text-anchor="middle" fill="currentColor">270°</text>
  <line x1="400" y1="92" x2="400" y2="84" stroke="currentColor" stroke-width="1"/>
  <text x="400" y="105" font-size="11" text-anchor="middle" fill="currentColor">360°</text>
  <line x1="36" y1="26" x2="44" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="32" y="30" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <line x1="36" y1="150" x2="44" y2="150" stroke="currentColor" stroke-width="1"/>
  <text x="32" y="154" font-size="11" text-anchor="end" fill="currentColor">−1</text>
  <polyline points="40,88 43,84.8 46,81.5 49,78.3 52,75.1 55,72 58,68.8 61,65.8 64,62.8 67,59.9 70,57 73,54.2 76,51.6 79,49 82,46.5 85,44.2 88,41.9 91,39.8 94,37.8 97,36 100,34.3 103,32.8 106,31.4 109,30.1 112,29 115,28.1 118,27.4 121,26.8 124,26.3 127,26.1 130,26 133,26.1 136,26.3 139,26.8 142,27.4 145,28.1 148,29 151,30.1 154,31.4 157,32.8 160,34.3 163,36 166,37.8 169,39.8 172,41.9 175,44.2 178,46.5 181,49 184,51.6 187,54.2 190,57 193,59.9 196,62.8 199,65.8 202,68.8 205,72 208,75.1 211,78.3 214,81.5 217,84.8 220,88 223,91.2 226,94.5 229,97.7 232,100.9 235,104 238,107.2 241,110.2 244,113.2 247,116.1 250,119 253,121.8 256,124.4 259,127 262,129.5 265,131.8 268,134.1 271,136.2 274,138.2 277,140 280,141.7 283,143.2 286,144.6 289,145.9 292,147 295,147.9 298,148.6 301,149.2 304,149.7 307,149.9 310,150 313,149.9 316,149.7 319,149.2 322,148.6 325,147.9 328,147 331,145.9 334,144.6 337,143.2 340,141.7 343,140 346,138.2 349,136.2 352,134.1 355,131.8 358,129.5 361,127 364,124.4 367,121.8 370,119 373,116.1 376,113.2 379,110.2 382,107.2 385,104 388,100.9 391,97.7 394,94.5 397,91.2 400,88" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <polyline points="40,26 43,26.1 46,26.3 49,26.8 52,27.4 55,28.1 58,29 61,30.1 64,31.4 67,32.8 70,34.3 73,36 76,37.8 79,39.8 82,41.9 85,44.2 88,46.5 91,49 94,51.6 97,54.2 100,57 103,59.9 106,62.8 109,65.8 112,68.8 115,72 118,75.1 121,78.3 124,81.5 127,84.8 130,88 133,91.2 136,94.5 139,97.7 142,100.9 145,104 148,107.2 151,110.2 154,113.2 157,116.1 160,119 163,121.8 166,124.4 169,127 172,129.5 175,131.8 178,134.1 181,136.2 184,138.2 187,140 190,141.7 193,143.2 196,144.6 199,145.9 202,147 205,147.9 208,148.6 211,149.2 214,149.7 217,149.9 220,150 223,149.9 226,149.7 229,149.2 232,148.6 235,147.9 238,147 241,145.9 244,144.6 247,143.2 250,141.7 253,140 256,138.2 259,136.2 262,134.1 265,131.8 268,129.5 271,127 274,124.4 277,121.8 280,119 283,116.1 286,113.2 289,110.2 292,107.2 295,104 298,100.9 301,97.7 304,94.5 307,91.2 310,88 313,84.8 316,81.5 319,78.3 322,75.1 325,72 328,68.8 331,65.8 334,62.8 337,59.9 340,57 343,54.2 346,51.6 349,49 352,46.5 355,44.2 358,41.9 361,39.8 364,37.8 367,36 370,34.3 373,32.8 376,31.4 379,30.1 382,29 385,28.1 388,27.4 391,26.8 394,26.3 397,26.1 400,26" fill="none" stroke="#9cc9ea" stroke-width="2.5" stroke-dasharray="6 4"/>
  <text x="143" y="26" font-size="12" text-anchor="start" fill="currentColor">sin θ</text>
  <text x="50" y="22" font-size="12" text-anchor="start" fill="currentColor">cos θ</text>
</svg>
</div>

Every repeating motion, from a swinging pendulum to alternating current to the height of a point on a wheel, is built
from these waves; that is the subject of Fourier analysis, far beyond this book.

<figure class="play" data-play="unitwave"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A point going round the unit circle: its height traces the sine curve and its distance across the cosine.</figcaption></figure>

## 7.4 Radians

Degrees are a Babylonian inheritance: 360 parts to a full turn, a number with many divisors. Nothing in geometry
singles out 360. There is a natural unit, and it comes from the circle itself.

**Definition.** The **radian measure** of a central angle is the length of the arc it cuts off, divided by the radius:

$$\theta = \frac{s}{r}.$$

An angle of **1 radian** cuts off an arc exactly as long as the radius. Because arcs of similar sectors scale with the
radius ([Chapter 6](06-Circles.md)), the ratio $s/r$ depends only on the angle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="A circle of radius r with a central angle of one radian: the arc it cuts off, drawn thick, has length r, the same as each of the two radii">
  <circle cx="180" cy="110" r="90" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="180,110 270,110 270,107 269.8,104 269.6,101 269.2,98 268.8,95.1 268.2,92.1 267.6,89.2 266.8,86.3 266,83.4 265,80.6 264,77.7 262.9,75 261.7,72.2 260.4,69.5 259,66.9 257.5,64.2 255.9,61.7 254.3,59.2 252.5,56.7 250.7,54.3 248.8,52 246.9,49.8 244.8,47.6 242.7,45.4 240.5,43.4 238.3,41.4 235.9,39.5 233.6,37.7 231.1,35.9 228.6,34.3" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <line x1="180" y1="110" x2="270" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <line x1="180" y1="110" x2="228.6" y2="34.3" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="270,110 270,107.8 269.9,105.5 269.7,103.3 269.6,101 269.3,98.8 269,96.6 268.6,94.3 268.2,92.1 267.7,89.9 267.2,87.7 266.6,85.6 266,83.4 265.3,81.3 264.5,79.1 263.7,77 262.9,75 262,72.9 261,70.9 260,68.8 259,66.9 257.9,64.9 256.7,63 255.5,61.1 254.3,59.2 253,57.3 251.6,55.5 250.3,53.8 248.8,52 247.4,50.3 245.9,48.7 244.3,47 242.7,45.4 241.1,43.9 239.4,42.4 237.7,40.9 235.9,39.5 234.2,38.1 232.4,36.8 230.5,35.5 228.6,34.3" fill="none" stroke="#9cc9ea" stroke-width="4"/>
  <polyline points="199.8,110 199.8,109.3 199.8,108.7 199.7,108 199.6,107.4 199.5,106.7 199.4,106.1 199.3,105.4 199.1,104.8 198.9,104.1 198.7,103.5 198.5,102.9 198.2,102.3 198,101.7 197.7,101.1 197.4,100.5 197,99.9 196.7,99.4 196.3,98.8 196,98.3 195.6,97.8 195.1,97.2 194.7,96.7 194.3,96.3 193.8,95.8 193.3,95.3 192.8,94.9 192.3,94.5 191.8,94.1 191.2,93.7 190.7,93.3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="210.2" y="93.9" font-size="11" text-anchor="middle" fill="currentColor">1 rad</text>
  <text x="225" y="126" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">r</text>
  <text x="194.3" y="70.1" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">r</text>
  <text x="269" y="66.9" font-size="12" text-anchor="start" fill="currentColor">arc = r</text>
  <circle cx="180" cy="110" r="2.5" fill="currentColor"/>
  <text x="400" y="200" font-size="12" text-anchor="end" fill="currentColor">1 rad ≈ 57.3°</text>
</svg>
</div>

A full turn has arc $2\pi r$, so it measures $2\pi r / r = 2\pi$ radians. Hence

$$360° = 2\pi \text{ rad}, \qquad 180° = \pi \text{ rad}, \qquad 1 \text{ rad} = \frac{180°}{\pi} \approx 57.2958°, \qquad 1° = \frac{\pi}{180} \text{ rad} \approx 0.01745 \text{ rad}.$$

| degrees | $30°$ | $45°$ | $60°$ | $90°$ | $180°$ | $270°$ | $360°$ |
|---|---|---|---|---|---|---|---|
| radians | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ | $\pi$ | $\tfrac{3\pi}{2}$ | $2\pi$ |

From now on, an angle with no degree sign is in radians.

**Why radians.** The formulas of [Chapter 6](06-Circles.md) lose their clutter:

$$s = r\theta, \qquad \text{sector area } A = \tfrac12 r^2 \theta .$$

(From $A = \tfrac{\theta}{2\pi} \cdot \pi r^2$.) And the deepest reason: for small angles in radians, $\sin\theta$ is
almost exactly $\theta$.

**Theorem.** For $0 < \theta < \pi/2$,

$$\sin\theta < \theta < \tan\theta, \qquad \text{and so} \qquad \cos\theta < \frac{\sin\theta}{\theta} < 1 .$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 235" role="img" aria-label="A quarter of the unit circle with O, A at 1 comma 0, P on the circle at angle theta, and T on the tangent at A. Triangle OAP, inside sector OAP, inside triangle OAT, with areas one half sin theta, one half theta and one half tan theta">
  <polygon points="60,215 275,215 275,47" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="60,215 275,215 274.9,210.2 274.8,205.5 274.5,200.8 274.2,196 273.7,191.3 273.1,186.6 272.4,181.9 271.6,177.2 270.8,172.5 269.8,167.9 268.7,163.2 267.5,158.6 266.2,154.1 264.8,149.5 263.3,145 261.7,140.5 260,136.1 258.2,131.7 256.3,127.3 254.3,123 252.2,118.7 250.1,114.5 247.8,110.3 245.4,106.2 243,102.1 240.5,98.1 237.8,94.2 235.1,90.3 232.3,86.4 229.4,82.6" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="60,215 275,215 229.4,82.6" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="275,215 274.8,206.7 274.4,198.5 273.6,190.2 272.5,182 271,173.9 269.3,165.8 267.2,157.8 264.9,149.8 262.2,142 259.3,134.3 256,126.7 252.5,119.2 248.6,111.9 244.5,104.7 240.2,97.7 235.5,90.8 230.6,84.2 225.4,77.7 220,71.4 214.4,65.4 208.5,59.5 202.4,53.9 196.1,48.6 189.6,43.5 182.9,38.6 176.1,34 169,29.7 161.8,25.6 154.4,21.8 146.9,18.4 139.3,15.2 131.6,12.3 123.7,9.7 115.8,7.4 107.7,5.4 99.6,3.7 91.5,2.3 83.3,1.3 75,0.5 66.8,0.1" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="229.4" y1="82.6" x2="229.4" y2="215" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="266.4,215 266.4,206.4 275,206.4" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="85.8,215 85.8,214.4 85.8,213.9 85.7,213.3 85.7,212.7 85.6,212.2 85.6,211.6 85.5,211 85.4,210.5 85.3,209.9 85.2,209.3 85,208.8 84.9,208.2 84.7,207.7 84.6,207.1 84.4,206.6 84.2,206.1 84,205.5 83.8,205 83.6,204.5 83.3,204 83.1,203.4 82.8,202.9 82.5,202.4 82.3,201.9 82,201.5 81.7,201 81.3,200.5 81,200 80.7,199.6 80.3,199.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="100.7" y="201" font-size="12" text-anchor="middle" fill="currentColor">θ</text>
  <circle cx="60" cy="215" r="2.5" fill="currentColor"/>
  <text x="50" y="220" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <circle cx="275" cy="215" r="2.5" fill="currentColor"/>
  <text x="281" y="231" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="229.4" cy="82.6" r="2.5" fill="currentColor"/>
  <text x="221.4" y="76.6" font-size="13" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="275" cy="47" r="2.5" fill="currentColor"/>
  <text x="285" y="47" font-size="13" text-anchor="middle" fill="currentColor">T</text>
  <text x="283" y="131" font-size="12" text-anchor="start" fill="currentColor">tan θ</text>
  <text x="223.4" y="148.8" font-size="12" text-anchor="end" fill="currentColor">sin θ</text>
  <text x="410" y="30" font-size="12" text-anchor="end" fill="currentColor">½ sin θ &lt; ½ θ &lt; ½ tan θ</text>
</svg>
</div>

*Proof.* In the unit circle, let $A = (1, 0)$, $P = P(\theta)$, and let $T$ be the point where the line $OP$ meets the
tangent to the circle at $A$; then $AT = \tan\theta$ (similar triangles, or the slope of $OP$). Three regions are
nested: triangle $OAP$ inside sector $OAP$ inside triangle $OAT$. Their areas are

$$\tfrac12 \cdot 1 \cdot \sin\theta \quad < \quad \tfrac12 \cdot 1^2 \cdot \theta \quad < \quad \tfrac12 \cdot 1 \cdot \tan\theta .$$

(The first triangle has base $OA = 1$ and height $\sin\theta$; the sector formula needs radians; the second triangle
has legs 1 and $\tan\theta$.) Multiply by 2. For the second form, divide $\sin\theta < \theta$ by $\theta$, and divide
$\theta < \sin\theta/\cos\theta$ by $\theta$ and multiply by $\cos\theta$. $\blacksquare$

As $\theta \to 0$, $\cos\theta \to 1$, so $\sin\theta/\theta$ is squeezed to 1:

$$\lim_{\theta \to 0} \frac{\sin\theta}{\theta} = 1 .$$

This limit is why, in calculus, the derivative of $\sin x$ is $\cos x$ exactly when $x$ is in radians (in degrees an
ugly factor $\pi/180$ appears). The U of T guide [MAT137 Unit 4](../../uoft/MAT137/unit04.md) takes it from there.

**Angular size.** A distant object of width $w$ at distance $d$ fills an angle $\theta \approx w/d$ radians (it is
almost an arc of a circle of radius $d$). The Moon, 3475 km across and 384 400 km away on average, fills about
$0.00904$ rad $\approx 0.52°$. The Sun, 1 392 700 km across at 149.6 million km, fills about $0.00931$ rad $\approx 0.53°$:
almost the same, which is why total solar eclipses are possible but brief. Mars, 6779 km across, at its 2003 close
approach of about 55.76 million km, filled $6779/55\,760\,000 \approx 1.22 \times 10^{-4}$ rad, about 25 seconds of arc (a
second of arc is $1/3600$ of a degree): through a telescope a small disc, to the eye a point.

## 7.5 The laws of sines and cosines

Right triangles are only the start. For **any** triangle $ABC$, write $a$, $b$, $c$ for the sides opposite $A$, $B$,
$C$, and use the same letters for the angles at those vertices.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="Triangle ABC with sides a, b, c opposite A, B, C, inside its circumcircle with centre O. The diameter BD gives a right triangle BCD with a right angle at C; the angle at D equals the angle at A">
  <circle cx="210" cy="118" r="100" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="184.1,21.4 128.1,175.4 291.9,175.4" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="128.1,175.4 291.9,175.4 291.9,60.6" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 3"/>
  <line x1="128.1" y1="175.4" x2="291.9" y2="60.6" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 3"/>
  <polyline points="281.9,175.4 281.9,165.4 291.9,165.4" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="184.1,21.4 177.3,40.2 177.9,40.4 178.5,40.6 179.1,40.8 179.7,40.9 180.4,41.1 181,41.2 181.6,41.3 182.3,41.3 182.9,41.4 183.5,41.4 184.2,41.4 184.8,41.4 185.5,41.4 186.1,41.3 186.7,41.2 187.4,41.1 188,41 188.6,40.9 189.2,40.7 189.9,40.6 190.5,40.4 191.1,40.2 191.7,39.9 192.3,39.7 192.8,39.4 193.4,39.1 194,38.8 194.5,38.5 195.1,38.1 195.6,37.8" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="177.3,40.2 177.9,40.4 178.5,40.6 179.1,40.8 179.7,40.9 180.4,41.1 181,41.2 181.6,41.3 182.3,41.3 182.9,41.4 183.5,41.4 184.2,41.4 184.8,41.4 185.5,41.4 186.1,41.3 186.7,41.2 187.4,41.1 188,41 188.6,40.9 189.2,40.7 189.9,40.6 190.5,40.4 191.1,40.2 191.7,39.9 192.3,39.7 192.8,39.4 193.4,39.1 194,38.8 194.5,38.5 195.1,38.1 195.6,37.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="291.9,60.6 275.5,72.1 275.9,72.6 276.3,73.1 276.7,73.6 277.1,74.1 277.6,74.6 278,75 278.5,75.5 279,75.9 279.5,76.3 280,76.7 280.5,77.1 281,77.4 281.6,77.8 282.1,78.1 282.7,78.4 283.3,78.7 283.8,78.9 284.4,79.2 285,79.4 285.6,79.6 286.2,79.8 286.9,80 287.5,80.1 288.1,80.3 288.7,80.4 289.4,80.5 290,80.6 290.6,80.6 291.3,80.6 291.9,80.6" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="0"/>
  <polyline points="275.5,72.1 275.9,72.6 276.3,73.1 276.7,73.6 277.1,74.1 277.6,74.6 278,75 278.5,75.5 279,75.9 279.5,76.3 280,76.7 280.5,77.1 281,77.4 281.6,77.8 282.1,78.1 282.7,78.4 283.3,78.7 283.8,78.9 284.4,79.2 285,79.4 285.6,79.6 286.2,79.8 286.9,80 287.5,80.1 288.1,80.3 288.7,80.4 289.4,80.5 290,80.6 290.6,80.6 291.3,80.6 291.9,80.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="181" y="14.4" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="118.3" y="186.8" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="301.7" y="186.8" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <text x="301.7" y="58.3" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="210" cy="118" r="2.5" fill="currentColor"/>
  <text x="198" y="116" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="210" y="191.4" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">a</text>
  <text x="246" y="94.4" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">b</text>
  <text x="146.1" y="96.4" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">c</text>
  <text x="410" y="230" font-size="12" text-anchor="end" fill="currentColor">a = BD · sin D = 2R sin A</text>
</svg>
</div>

**Theorem (law of sines).** In any triangle, with $R$ the radius of its circumcircle,

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R .$$

*Proof.* Draw the circumcircle (centre $O$, radius $R$; [Chapter 6](06-Circles.md)) and the diameter $BD$ through
$B$. Triangle $BCD$ has a right angle at $C$ (Thales), so $BC = BD \sin\angle BDC$, that is $a = 2R\sin\angle BDC$.

- If $A$ and $D$ are on the same side of $BC$, then $\angle BDC = \angle BAC = A$ (inscribed angles on the same arc).
- If they are on opposite sides (this happens when $A$ is obtuse), then $\angle BDC = 180° - A$ (Corollary 3 of 6.2),
  and $\sin(180° - A) = \sin A$ (7.3).
- If $D = C$ (when $A = 90°$, $BC$ is itself a diameter), then $a = 2R = 2R\sin 90°$.

In every case $a = 2R\sin A$. The same argument at $C$ and at $A$ gives $b = 2R\sin B$ and $c = 2R\sin C$. $\blacksquare$

**Theorem (law of cosines).** In any triangle,

$$c^2 = a^2 + b^2 - 2ab\cos C .$$

*Proof.* Put the triangle in coordinates with $C$ at the origin and $B$ on the positive $x$-axis: $C = (0, 0)$,
$B = (a, 0)$. The point $A$ is at distance $b$ from $C$ in the direction making the angle $C$ with the $x$-axis, so by
the unit-circle definition $A = (b\cos C, b\sin C)$. This holds whether $C$ is acute, right or obtuse. Then, by the
distance formula (Pythagoras, [Chapter 8](08-Coordinate-Geometry.md)),

$$c^2 = (a - b\cos C)^2 + (0 - b\sin C)^2 = a^2 - 2ab\cos C + b^2(\cos^2 C + \sin^2 C) = a^2 + b^2 - 2ab\cos C. \qquad \blacksquare$$

When $C = 90°$, $\cos C = 0$ and this is Pythagoras. The term $-2ab\cos C$ is the correction for a corner that is not
square: positive when $C$ is obtuse (the opposite side is longer than Pythagoras would say) and negative when $C$ is
acute. Euclid had it, without cosines, as Propositions II.12 and II.13.

**Area.** In the same coordinates the height from $A$ to the base $CB$ is $b\sin C$, so

$$\text{area} = \tfrac12 ab\sin C .$$

Two sides and the angle between them give the area at once.

**Worked examples.**

- *SAS.* $a = 7$, $b = 8$, $C = 60°$. Then $c^2 = 49 + 64 - 2 \cdot 56 \cdot \tfrac12 = 57$, $c \approx 7.55$; the area is
  $\tfrac12 \cdot 56 \cdot \tfrac{\sqrt3}{2} = 14\sqrt3 \approx 24.2$.
- *SSS.* Sides 5, 6, 7. The largest angle is opposite 7: $\cos\theta = (25 + 36 - 49)/(2 \cdot 5 \cdot 6) = 12/60 = 0.2$,
  $\theta \approx 78.46°$. Check with Heron's formula ([Chapter 4](04-Area-and-Pythagoras.md)): $s = 9$, area
  $= \sqrt{9 \cdot 4 \cdot 3 \cdot 2} = \sqrt{216} \approx 14.70$, and $\tfrac12 \cdot 5 \cdot 6 \cdot \sin 78.46° \approx 15 \times 0.9798 = 14.70$.
- *Circumradius.* For the 5, 6, 7 triangle, $2R = 7/\sin 78.46° \approx 7.144$, so $R \approx 3.57$.

## 7.6 Identities: the addition formulas

Ptolemy's table of chords went in half-degree steps. He did not measure each one; he computed new values from old
ones with rules equivalent to the formulas below. They are the most useful identities in trigonometry.

**Theorem (addition formulas).** For all angles $\alpha$ and $\beta$,

$$\begin{aligned}
\cos(\alpha - \beta) &= \cos\alpha\cos\beta + \sin\alpha\sin\beta, \\
\cos(\alpha + \beta) &= \cos\alpha\cos\beta - \sin\alpha\sin\beta, \\
\sin(\alpha + \beta) &= \sin\alpha\cos\beta + \cos\alpha\sin\beta, \\
\sin(\alpha - \beta) &= \sin\alpha\cos\beta - \cos\alpha\sin\beta .
\end{aligned}$$

*Proof of the first, for all angles.* The points $P(\alpha) = (\cos\alpha, \sin\alpha)$ and
$P(\beta) = (\cos\beta, \sin\beta)$ are on the unit circle. Compute the square of their distance with the distance
formula:

$$(\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2 = (\cos^2\alpha + \sin^2\alpha) + (\cos^2\beta + \sin^2\beta) - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta) = 2 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta).$$

Now rotate the whole picture about $O$ by $-\beta$. A rotation does not change distances, and it carries $P(\alpha)$ to
$P(\alpha - \beta)$ and $P(\beta)$ to $P(0) = (1, 0)$. So the same squared distance is

$$(\cos(\alpha - \beta) - 1)^2 + \sin^2(\alpha - \beta) = 2 - 2\cos(\alpha - \beta).$$

Comparing the two gives the formula. No case was assumed about the sizes of the angles. $\blacksquare$

*The others.* Replace $\beta$ by $-\beta$ and use $\cos(-\beta) = \cos\beta$, $\sin(-\beta) = -\sin\beta$: that is the
second. Put $\alpha = 90°$ in the first: $\cos(90° - \beta) = \sin\beta$ for **all** $\beta$; and applying that to
$90° - \beta$ gives $\sin(90° - \beta) = \cos\beta$. Then

$$\sin(\alpha + \beta) = \cos\big((90° - \alpha) - \beta\big) = \cos(90° - \alpha)\cos\beta + \sin(90° - \alpha)\sin\beta = \sin\alpha\cos\beta + \cos\alpha\sin\beta .$$

Replace $\beta$ by $-\beta$ once more for the fourth. $\blacksquare$

For acute angles there is also a picture proof, a right triangle stacked on another inside a rectangle, which shows
$\sin(\alpha + \beta)$ as the sum of two lengths:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="A picture proof of the sine addition formula. OP has length 1 and makes the angle alpha plus beta with the base line. Q is the foot of the perpendicular from P to the line at angle alpha, R is below Q on the base line, and S is level with Q below P. The height of P is RQ plus PS">
  <line x1="70" y1="250" x2="372.4" y2="250" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="70,250 289.8,250 289.8,123.1" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="70,250 289.8,123.1 230.6,20.6" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="230.6,20.6 230.6,123.1 289.8,123.1" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <line x1="230.6" y1="123.1" x2="230.6" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="281.4,250 281.4,241.6 289.8,241.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="282.5,127.3 278.3,120 285.6,115.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="230.6,114.7 239,114.7 239,123.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="114.8,250 114.8,249.2 114.8,248.4 114.7,247.7 114.7,246.9 114.6,246.1 114.6,245.3 114.5,244.5 114.4,243.8 114.2,243 114.1,242.2 114,241.5 113.8,240.7 113.7,239.9 113.5,239.2 113.3,238.4 113.1,237.7 112.8,236.9 112.6,236.2 112.4,235.4 112.1,234.7 111.8,233.9 111.5,233.2 111.2,232.5 110.9,231.8 110.6,231.1 110.3,230.4 109.9,229.7 109.6,229 109.2,228.3 108.8,227.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="129.5" y="238.3" font-size="12" text-anchor="middle" fill="currentColor">α</text>
  <polyline points="135.5,212.2 134.9,211.3 134.3,210.3 133.8,209.4 133.2,208.5 132.6,207.5 131.9,206.6 131.3,205.7 130.6,204.9 130,204 129.3,203.1 128.6,202.3 127.9,201.4 127.2,200.6 126.5,199.7 125.7,198.9 125,198.1 124.2,197.3 123.5,196.5 122.7,195.8 121.9,195 121.1,194.3 120.3,193.5 119.4,192.8 118.6,192.1 117.7,191.4 116.9,190.7 116,190 115.1,189.4 114.3,188.7 113.4,188.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="138.1" y="191.8" font-size="12" text-anchor="middle" fill="currentColor">β</text>
  <polyline points="230.6,43 231,43 231.4,43 231.8,43 232.2,43 232.6,43 232.9,42.9 233.3,42.9 233.7,42.8 234.1,42.8 234.5,42.7 234.9,42.6 235.3,42.5 235.6,42.5 236,42.4 236.4,42.3 236.8,42.2 237.2,42.1 237.5,41.9 237.9,41.8 238.3,41.7 238.6,41.5 239,41.4 239.4,41.3 239.7,41.1 240.1,40.9 240.4,40.8 240.8,40.6 241.1,40.4 241.5,40.2 241.8,40" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="240" y="60" font-size="12" text-anchor="middle" fill="currentColor">α</text>
  <circle cx="70" cy="250" r="2.5" fill="currentColor"/>
  <text x="60" y="255" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <circle cx="289.8" cy="123.1" r="2.5" fill="currentColor"/>
  <text x="298.8" y="127.1" font-size="13" text-anchor="middle" fill="currentColor">Q</text>
  <circle cx="230.6" cy="20.6" r="2.5" fill="currentColor"/>
  <text x="228.6" y="11.6" font-size="13" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="289.8" cy="250" r="2.5" fill="currentColor"/>
  <text x="289.8" y="266" font-size="13" text-anchor="middle" fill="currentColor">R</text>
  <circle cx="230.6" cy="123.1" r="2.5" fill="currentColor"/>
  <text x="220.6" y="127.1" font-size="13" text-anchor="middle" fill="currentColor">S</text>
  <circle cx="230.6" cy="250" r="2.5" fill="currentColor"/>
  <text x="230.6" y="266" font-size="13" text-anchor="middle" fill="currentColor">T</text>
  <text x="142.3" y="131.3" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="295.8" y="186.6" font-size="11" text-anchor="start" fill="currentColor">RQ = sin α cos β</text>
  <text x="268.2" y="69.9" font-size="11" text-anchor="start" fill="currentColor">sin β</text>
  <text x="210.3" y="187.3" font-size="11" text-anchor="middle" fill="currentColor">cos β</text>
  <text x="182" y="71.9" font-size="11" text-anchor="end" fill="currentColor">PS = cos α sin β</text>
</svg>
</div>

In the figure the hypotenuse $OP$ has length 1. The lower triangle $OQP$ has angle $\beta$ at $O$, so $OQ = \cos\beta$ and
$QP = \sin\beta$. The bottom triangle $ORQ$ has angle $\alpha$ at $O$ and hypotenuse $\cos\beta$, so
$RQ = \sin\alpha\cos\beta$. Through $Q$ draw a horizontal line, meeting the vertical through $P$ at $S$. The angle $QPS$ in the top
triangle $PSQ$ is $\alpha$ (its sides $PQ$ and $PS$ are perpendicular to the sides $OQ$ and $OR$ of the angle $\alpha$ at
$O$), and its hypotenuse is $QP = \sin\beta$, so the vertical piece is $PS = \sin\beta\cos\alpha$. The height of $P$
above the base line is $RQ + PS$:

$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta .$$

**Consequences.**

- **Double angle.** Put $\beta = \alpha$: $\sin 2\alpha = 2\sin\alpha\cos\alpha$ and
  $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$.
- **Half angle.** Solve the last for the squares: $\cos^2\tfrac{\alpha}{2} = \tfrac{1 + \cos\alpha}{2}$ and
  $\sin^2\tfrac{\alpha}{2} = \tfrac{1 - \cos\alpha}{2}$. Also $\tan\tfrac{\alpha}{2} = \tfrac{\sin\alpha}{1 + \cos\alpha}$,
  because $\tfrac{\sin\alpha}{1 + \cos\alpha} = \tfrac{2\sin\frac\alpha2\cos\frac\alpha2}{2\cos^2\frac\alpha2}$.
- **Tangent.** Dividing, $\tan(\alpha + \beta) = \dfrac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}$.

**Worked example.** $\sin 75° = \sin(45° + 30°) = \tfrac{\sqrt2}{2} \cdot \tfrac{\sqrt3}{2} + \tfrac{\sqrt2}{2} \cdot \tfrac12 = \tfrac{\sqrt6 + \sqrt2}{4} \approx 0.9659$,
and $\sin 15° = \sin(45° - 30°) = \tfrac{\sqrt6 - \sqrt2}{4} \approx 0.2588$. Check: $\sin^2 15° + \sin^2 75° = \tfrac{(8 - 2\sqrt{12}) + (8 + 2\sqrt{12})}{16} = 1$,
as it must be since $\sin 75° = \cos 15°$.

**Worked example (the half-angle in action).** Starting from $\cos 30° = \tfrac{\sqrt3}{2}$:
$\cos 15° = \sqrt{\tfrac{1 + \sqrt3/2}{2}} = \tfrac{\sqrt{2 + \sqrt3}}{2} \approx 0.9659$. Halving again and again gives the cosines
of $7.5°$, $3.75°$, and so on, using only square roots: exactly the computation behind Archimedes' polygons in
[Chapter 6](06-Circles.md), and behind the old tables.

The addition formulas are rotation in disguise: rotating the point $(x, y)$ by $\beta$ gives
$(x\cos\beta - y\sin\beta,\ x\sin\beta + y\cos\beta)$, and with complex numbers they become the single rule
$e^{i(\alpha + \beta)} = e^{i\alpha}e^{i\beta}$ ([Algebra, Chapter 9](../algebra/09-Complex-Numbers.md)).

## 7.7 Solving triangles, surveying, and the distances to the Moon and Mars

To **solve** a triangle is to find all three sides and all three angles from the ones you know. With the angle sum
and the two laws, three pieces of information decide everything, except in one famous case.

| You know | Use | Notes |
|---|---|---|
| SSS | law of cosines for each angle | the triangle inequality must hold |
| SAS | law of cosines for the third side, then law of sines or cosines | always exactly one triangle |
| ASA or AAS | angle sum for the third angle, then law of sines | exactly one triangle |
| SSA | law of sines for a second angle | zero, one or two triangles |

**The ambiguous case (SSA).** Given $A = 30°$, $a = 6$ and $b = 10$. By the law of sines,
$\sin B = b\sin A / a = 10 \cdot \tfrac12 / 6 = 0.8333$. Two angles have this sine: $B \approx 56.44°$ and
$B \approx 180° - 56.44° = 123.56°$. Both fit (each leaves room for $C$):

- $B \approx 56.44°$, $C \approx 93.56°$, $c = a\sin C/\sin A \approx 11.98$;
- $B \approx 123.56°$, $C \approx 26.44°$, $c \approx 5.34$.

Geometrically, the side $a = 6$ swings from $C$ like a pendulum and hits the third side's line at two points. If
$a$ were shorter than $b\sin A = 5$ it would not reach (no triangle), if exactly 5 it would just touch (one right
triangle), and if $a \ge b = 10$ only one crossing is on the correct side. That is why SSA is not a congruence test
([Chapter 2](02-Triangles-and-Congruence.md)).

**Surveying a mountain.** You cannot walk to the foot of a mountain to measure your distance from it. Instead, measure
the angle of elevation of the summit, $25°$, walk 500 m straight toward it on level ground, and measure again, $35°$.
If $h$ is the height and $x$ your second distance from the point below the summit, then
$x = h/\tan 35°$ and $x + 500 = h/\tan 25°$. Subtracting,

$$h = \frac{500}{\cot 25° - \cot 35°} \approx \frac{500}{2.1445 - 1.4281} \approx 698 \text{ m},$$

where $\cot\theta = 1/\tan\theta$.

**Triangulation.** To map a country, surveyors measure one **baseline** very carefully, then only angles: from the
two ends of the baseline sight a third point, solve the triangle by the law of sines, and use its new sides as
baselines for the next triangles. Willebrord Snellius used a chain of triangles in the Netherlands in the 1610s to
measure the length of a degree of latitude; the Great Trigonometrical Survey of India, through the nineteenth century,
carried chains of triangles across a subcontinent and computed the heights of Himalayan peaks. Satellites have now
taken over, but GPS still solves triangles, in three dimensions and with timing.

### The distance to the Moon

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="Not to scale: the Earth with centre O and radius R, and the Moon M at distance d. An observer at A sees the Moon on the horizon, so the angle at A is a right angle; the small angle p at the Moon satisfies sin p equals R over d">
  <circle cx="70" cy="95" r="52" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="392.4" cy="95" r="14" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <line x1="70" y1="95" x2="392.4" y2="95" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 3"/>
  <line x1="78.4" y1="43.7" x2="392.4" y2="95" stroke="currentColor" stroke-width="1.5"/>
  <line x1="70" y1="95" x2="78.4" y2="43.7" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="77.1,51.4 84.8,52.6 86.1,44.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="310.3,81.6 310.2,82 310.1,82.5 310.1,82.9 310,83.4 310,83.8 309.9,84.2 309.8,84.7 309.8,85.1 309.7,85.6 309.7,86 309.6,86.5 309.6,86.9 309.6,87.4 309.5,87.8 309.5,88.3 309.4,88.7 309.4,89.2 309.4,89.6 309.3,90.1 309.3,90.5 309.3,91 309.3,91.4 309.3,91.9 309.2,92.3 309.2,92.8 309.2,93.2 309.2,93.7 309.2,94.1 309.2,94.6 309.2,95" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="293.9" y="91.2" font-size="12" text-anchor="middle" fill="currentColor">p</text>
  <circle cx="70" cy="95" r="2.5" fill="currentColor"/>
  <circle cx="78.4" cy="43.7" r="2.5" fill="currentColor"/>
  <circle cx="392.4" cy="95" r="2" fill="currentColor"/>
  <text x="66" y="111" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="74.4" y="35.7" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="392.4" y="121" font-size="12" text-anchor="middle" fill="currentColor">M (Moon)</text>
  <text x="65.2" y="69.3" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">R</text>
  <text x="247.3" y="111" font-size="13" text-anchor="middle" fill="currentColor" font-style="italic">d</text>
  <text x="410" y="20" font-size="12" text-anchor="end" fill="currentColor">sin p = R / d</text>
</svg>
</div>

Look at the Moon from two places on Earth at the same moment, and it sits in slightly different spots against the far
more distant stars. That shift is **parallax**, the same effect as holding up a finger and closing each eye in turn.
The angle subtended at the Moon by the baseline between the observers is the parallax angle, and the law of sines
turns it into a distance.

The cleanest version uses the **horizontal parallax** $p$: the angle at the Moon subtended by one Earth radius, which
is the difference between the Moon's direction seen from the Earth's centre and from a place where the Moon is on the
horizon. The line from that observer to the Moon is tangent to the Earth, so there is a right angle at the observer, and

$$\sin p = \frac{R_\oplus}{d}, \qquad d = \frac{R_\oplus}{\sin p}.$$

The Moon's mean horizontal parallax is about $57'$ (57 minutes of arc, a little under one degree). With the equatorial
radius $R_\oplus = 6378$ km,

$$d \approx \frac{6378}{\sin 0.9507°} \approx 384\,400 \text{ km} \approx 60.3 \text{ Earth radii}.$$

Greek astronomers, Hipparchus and then Ptolemy, already put the Moon at roughly sixty Earth radii by geometric
arguments using eclipses and parallax. A coordinated measurement from two distant observatories, Berlin and the Cape of
Good Hope, was made by Lalande and Lacaille in 1751 and 1752. Today lasers bounced off reflectors left on the Moon
measure the distance to within centimetres.

### The distance to Mars

Mars is much farther: at a close opposition it is roughly 55 to 60 million km away. Take an illustrative baseline of
7000 km between two observers and Mars at 60 million km. The parallax is

$$p \approx \frac{7000}{60\,000\,000} \approx 1.17 \times 10^{-4} \text{ rad} \approx 24'' ,$$

about 24 seconds of arc, roughly the angle a coin 2 cm wide makes from 170 m away. In 1672 Giovanni Domenico Cassini
in Paris and Jean Richer in Cayenne, in South America, observed Mars at the same times and compared its position
against nearby stars. From their parallax and Kepler's laws, which fix the **relative** sizes of the planetary orbits
([Chapter 8](08-Coordinate-Geometry.md)), they obtained the distance from the Earth to the Sun as a little under 140
million km, the first estimate of the right size; the modern value is 149.6 million km. Measuring one distance in the
solar system, by triangulating Mars, scaled the whole map. Today radar echoes and the radio tracking of spacecraft give
the distance to Mars far more precisely than any parallax could.

## Check yourself

??? question "1. A right triangle has legs 9 and 12. Find the sine, cosine and tangent of the angle opposite the side 9."

    The hypotenuse is $\sqrt{81 + 144} = 15$. $\sin\theta = 9/15 = 0.6$, $\cos\theta = 12/15 = 0.8$, $\tan\theta = 9/12 = 0.75$.
    Check: $0.36 + 0.64 = 1$. The angle is about $36.87°$.

??? question "2. From the top of a 60 m cliff, a boat is seen at an angle of depression of $20°$. How far is the boat from the foot of the cliff?"

    The angle of depression from the top equals the angle of elevation from the boat (alternate angles). So $\tan 20° = 60/x$
    and $x = 60/\tan 20° \approx 60/0.3640 \approx 164.8$ m.

??? question "3. Find exact values of $\sin 120°$, $\cos 240°$, $\tan 315°$ and $\sin(-30°)$."

    $\sin 120° = \sin 60° = \tfrac{\sqrt3}{2}$; $\cos 240° = -\cos 60° = -\tfrac12$; $\tan 315° = -\tan 45° = -1$
    (fourth quadrant: sine negative, cosine positive); $\sin(-30°) = -\tfrac12$.

??? question "4. Convert $150°$ to radians and $2.5$ rad to degrees. How long is the arc of a circle of radius 8 cut off by a central angle of $2.5$ rad, and what is the area of the sector?"

    $150° = 150\pi/180 = 5\pi/6$. $2.5$ rad $= 2.5 \cdot 180/\pi \approx 143.24°$. Arc $= 8 \cdot 2.5 = 20$; sector
    $= \tfrac12 \cdot 64 \cdot 2.5 = 80$.

??? question "5. Solve $\cos\theta = -\tfrac{\sqrt2}{2}$ for $0° \le \theta < 360°$."

    The reference angle is $45°$ and cosine is negative in the second and third quadrants: $\theta = 135°$ and $\theta = 225°$.

??? question "6. Triangle $ABC$ has $A = 40°$, $B = 75°$ and $c = 12$. Find the other sides and the circumradius."

    $C = 65°$. By the law of sines, $a = 12\sin 40°/\sin 65° \approx 12 \cdot 0.6428/0.9063 \approx 8.51$ and
    $b = 12\sin 75°/\sin 65° \approx 12.79$. $2R = 12/\sin 65° \approx 13.24$, so $R \approx 6.62$.

??? question "7. Two sides of a triangle are 10 and 14 and the angle between them is $120°$. Find the third side and the area."

    $c^2 = 100 + 196 - 2 \cdot 140 \cos 120° = 296 + 140 = 436$, so $c = \sqrt{436} = 2\sqrt{109} \approx 20.88$. Area
    $= \tfrac12 \cdot 140 \cdot \sin 120° = 35\sqrt3 \approx 60.62$.

??? question "8. Given $A = 40°$, $a = 7$, $b = 10$, how many triangles are there? Find their third angles."

    $\sin B = 10\sin 40°/7 \approx 0.9183$, so $B \approx 66.67°$ or $B \approx 113.33°$. Both leave positive room for $C$:
    $C \approx 73.33°$ or $C \approx 26.67°$. Two triangles. (Check: $b\sin A \approx 6.43 < a = 7 < b = 10$, the two-solution range.)

??? question "9. Use the addition formulas to find exact values of $\cos 75°$ and $\tan 15°$."

    $\cos 75° = \cos 45°\cos 30° - \sin 45°\sin 30° = \tfrac{\sqrt6 - \sqrt2}{4} \approx 0.2588$.
    $\tan 15° = \tan(45° - 30°) = \tfrac{1 - 1/\sqrt3}{1 + 1/\sqrt3} = \tfrac{\sqrt3 - 1}{\sqrt3 + 1} = 2 - \sqrt3 \approx 0.2679$.

??? question "10. Prove that $\sin 3\theta = 3\sin\theta - 4\sin^3\theta$, and check it at $\theta = 30°$."

    $\sin 3\theta = \sin(2\theta + \theta) = \sin 2\theta\cos\theta + \cos 2\theta\sin\theta = 2\sin\theta\cos^2\theta + (1 - 2\sin^2\theta)\sin\theta$.
    With $\cos^2\theta = 1 - \sin^2\theta$ this is $2\sin\theta - 2\sin^3\theta + \sin\theta - 2\sin^3\theta = 3\sin\theta - 4\sin^3\theta$.
    At $30°$: $\sin 90° = 1$ and $3 \cdot \tfrac12 - 4 \cdot \tfrac18 = 1$.

??? question "11. (Archimedes' recursion, from Chapter 6.) For a circle of diameter 1, the inscribed and circumscribed regular $n$-gons have perimeters $b_n = n\sin(180°/n)$ and $a_n = n\tan(180°/n)$. Prove $a_{2n} = 2a_nb_n/(a_n + b_n)$ and $b_{2n} = \sqrt{a_{2n}b_n}$."

    Each side of the inscribed $n$-gon is a chord with half-angle $\theta = 180°/n$ at the centre in a circle of radius $\tfrac12$,
    so it has length $\sin\theta$, giving $b_n = n\sin\theta$; each side of the circumscribed one is $2 \cdot \tfrac12\tan\theta$, giving $a_n = n\tan\theta$.
    Note $a_n/b_n = 1/\cos\theta$. By the half-angle formula $\tan\tfrac\theta2 = \tfrac{\sin\theta}{1 + \cos\theta} = \tfrac{\tan\theta}{1/\cos\theta + 1}$, so
    $a_{2n} = 2n\tan\tfrac\theta2 = \tfrac{2n\tan\theta}{1 + a_n/b_n} = \tfrac{2a_nb_n}{a_n + b_n}$.
    And $a_{2n}b_n = 2n\tan\tfrac\theta2 \cdot n\sin\theta = 2n^2 \tan\tfrac\theta2 \cdot 2\sin\tfrac\theta2\cos\tfrac\theta2 = 4n^2\sin^2\tfrac\theta2 = b_{2n}^2$.

??? question "12. From two places 2000 km apart on a north-south line, a high balloon is seen due south from the northern place at elevation $30°$ and due north from the southern place at elevation $60°$, at the same moment. Treating the ground between them as flat, how high is the balloon? Why would this fail for the Moon?"

    Let the balloon be above a point at distance $x$ south of the northern place. Then $h = x\tan 30°$ and $h = (2000 - x)\tan 60°$.
    So $x/\sqrt3 = \sqrt3(2000 - x)$, $x = 3(2000 - x)$, $x = 1500$ km and $h = 1500/\sqrt3 \approx 866$ km.
    (Check: $(2000 - 1500)\sqrt3 \approx 866$.) Over 2000 km the Earth's curvature is far from negligible, and for the Moon the
    elevations from two places differ by under a degree, so the flat model and rough angles are useless: you need the
    spherical Earth, accurate clocks, and the tiny parallax measured against the stars.

## What you learned

- Sine, cosine and tangent of an acute angle are ratios of sides in a right triangle; similarity makes them depend on
  the angle alone.
- The 45-45-90 and 30-60-90 triangles give exact values; the pentagon gives $\cos 36° = (1 + \sqrt5)/4$.
- The unit circle defines $\cos\theta$ and $\sin\theta$ as the coordinates of a point for every angle, with
  $\cos^2\theta + \sin^2\theta = 1$, the quadrant signs, the symmetries and the wave graphs.
- A radian is the angle whose arc equals the radius; $s = r\theta$, $A = \tfrac12 r^2\theta$, and
  $\sin\theta < \theta < \tan\theta$ gives $\sin\theta/\theta \to 1$.
- The law of sines $a/\sin A = 2R$, the law of cosines $c^2 = a^2 + b^2 - 2ab\cos C$ and the area $\tfrac12 ab\sin C$
  hold for every triangle.
- The addition formulas, proved from distances on the unit circle, give double and half angles and every exact value
  you need.
- SSS, SAS, ASA and AAS fix a triangle; SSA can give two; parallax over a known baseline measured the Moon at about
  60 Earth radii and, through Mars in 1672, the size of the solar system.

**Next:** [Chapter 8](08-Coordinate-Geometry.md) puts geometry on a grid of numbers: lines and circles as equations,
theorems proved by algebra, the conic sections, and Kepler's ellipse for the orbit of Mars.

## Further reading

- I. M. Gelfand and M. Saul, *Trigonometry*, 2001.
- E. Maor, *Trigonometric Delights*, 1998 (history and the subject together).
- G. Van Brummelen, *The Mathematics of the Heavens and the Earth: The Early History of Trigonometry*, 2009.
- Ptolemy, *Almagest*, translated by G. J. Toomer as *Ptolemy's Almagest*, 1984 (Book I, the table of chords).
- A. Van Helden, *Measuring the Universe: Cosmic Dimensions from Aristarchus to Halley*, 1985 (the parallax of the
  Moon, Mars and the Sun).
- On this site: the Topics lessons [Sine, cosine and tangent](../../topics/geometry/level-7/02-sin-cos-tan.md),
  [The sine law and the ambiguous case](../../topics/geometry/level-7/04-sine-law.md),
  [The cosine law; solving any triangle](../../topics/geometry/level-7/05-cosine-law.md),
  [Radians and the unit circle](../../topics/geometry/level-8/02-radians-unit-circle.md) and
  [Graphs of sine and cosine](../../topics/geometry/level-8/03-sine-cosine-graphs.md); the U of T guide
  [MAT137 Unit 4: Transcendental Functions](../../uoft/MAT137/unit04.md) (trigonometric functions in calculus); the
  Algebra book's [Complex numbers](../algebra/09-Complex-Numbers.md) (rotation and Euler's formula); and the
  [Geometry book's contents](index.md).
