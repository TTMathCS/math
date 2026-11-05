---
title: "Radians and the unit circle"
---

# Radians and the unit circle

*Geometry · level 8, lesson 2 of 6*

## A question to start

Why is a full turn 360 degrees? Nothing about a circle says 360. The number was chosen long ago, perhaps because it
divides evenly by so many numbers (2, 3, 4, 5, 6, 8, 9, 10, 12, ...) and is close to the number of days in a year.
It is a human choice, like measuring in inches.

Is there a **natural** way to measure angles, one that a mathematician on any planet would discover? There is.
Wrap a piece of string as long as the radius around the edge of a circle, and ask what angle it makes at the centre.
That angle, about 57.3°, is called **one radian**, and once you use it, formulas all over mathematics become simpler.
This lesson also frees sine and cosine from right triangles so that they work for every angle, even negative ones and
angles of many full turns.

## The idea

### What a radian is

Draw a circle of radius $r$. An angle at the centre cuts off an arc of the circle. The size of the angle **in
radians** is

$$\theta = \frac{\text{arc length}}{\text{radius}} = \frac{s}{r}$$

Because it is a length divided by a length, it does not depend on the size of the circle (all circles are similar, so
arc and radius scale together). One radian is the angle whose arc is exactly one radius long.

A full turn cuts off the whole circumference, $2\pi r$, so a full turn is $\dfrac{2\pi r}{r} = 2\pi$ radians. That gives
the exchange rate:

$$360° = 2\pi \text{ rad} \qquad 180° = \pi \text{ rad} \qquad 1 \text{ rad} = \frac{180°}{\pi} \approx 57.3°$$

To convert degrees to radians, multiply by $\dfrac{\pi}{180}$; to convert back, multiply by $\dfrac{180}{\pi}$. Common
angles are usually left as fractions of $\pi$:

| Degrees | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° | 270° | 360° |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Radians | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ | $\tfrac{2\pi}{3}$ | $\tfrac{3\pi}{4}$ | $\tfrac{5\pi}{6}$ | $\pi$ | $\tfrac{3\pi}{2}$ | $2\pi$ |

When an angle has no unit written, it is in radians.

### Why radians are worth it

**Arc length and sector area become clean.** From the definition, the arc cut off by angle $\theta$ is

$$s = r\theta$$

and the sector (the pizza slice) is the fraction $\dfrac{\theta}{2\pi}$ of the whole disc $\pi r^2$, so its area is
$\dfrac{\theta}{2\pi} \times \pi r^2 = \tfrac12 r^2\theta$. In degrees, both formulas need an untidy $\dfrac{\pi}{180}$.

**Small angles.** For a small angle, the arc and the height of the triangle under it are almost the same length.
In radians this says $\sin\theta \approx \theta$ when $\theta$ is small: $\sin 0.1 \approx 0.0998$. This fact is the
reason calculus uses radians, and why the derivative of $\sin x$ is exactly $\cos x$ only in radians.

### The unit circle

The **unit circle** is the circle of radius 1 with its centre at the origin. Start at the point $(1, 0)$ and walk
anticlockwise along the circle through an angle $\theta$. Because the radius is 1, the distance you walk along the arc
**is** $\theta$. The point where you stop defines cosine and sine:

$$(\cos\theta,\ \sin\theta) = \text{the point on the unit circle at angle } \theta$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 250" role="img" aria-label="The unit circle with axes. A point P at angle theta in the first quadrant has coordinates cos theta across and sin theta up. A second point at angle pi minus theta, mirrored across the vertical axis, has the same height and the opposite horizontal coordinate">
  <line x1="30" y1="130" x2="275" y2="130" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="150" y1="15" x2="150" y2="245" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <circle cx="150" cy="130" r="100" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 250 130 A 100 100 0 0 0 214.3 53.4" fill="none" stroke="#eea66f" stroke-width="5"/>
  <line x1="150" y1="130" x2="214.3" y2="53.4" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="130" x2="85.7" y2="53.4" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="150" y1="130" x2="214.3" y2="130" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="214.3" y1="130" x2="214.3" y2="53.4" stroke="#7ccf9a" stroke-width="4"/>
  <line x1="85.7" y1="53.4" x2="85.7" y2="130" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="214.3" cy="53.4" r="4" fill="currentColor"/><circle cx="85.7" cy="53.4" r="4" fill="currentColor"/>
  <g font-size="13" fill="currentColor">
    <text x="220" y="46">(cos θ, sin θ)</text><text x="14" y="46">(−cos θ, sin θ)</text>
    <text x="164" y="146">cos θ</text><text x="220" y="100">sin θ</text>
    <text x="246" y="80" font-size="12">arc θ</text>
    <text x="256" y="146">1</text><text x="138" y="146">O</text>
  </g>
</svg>
</div>

For an acute angle, drop a perpendicular from the point to the $x$-axis. That makes a right triangle with hypotenuse 1,
adjacent side equal to the $x$-coordinate and opposite side equal to the $y$-coordinate. So SOH CAH TOA give exactly
$\cos\theta = x$ and $\sin\theta = y$: **the new definition agrees with the old one** wherever the old one worked. But
the new one also works for any angle at all. Tangent is defined as $\tan\theta = \dfrac{\sin\theta}{\cos\theta}$
(whenever $\cos\theta \ne 0$): it is the slope of the radius.

Angles can now be anything:

- **Bigger than $\tfrac{\pi}{2}$**: keep walking round. At $\pi$ the point is $(-1, 0)$, so $\cos\pi = -1$, $\sin\pi = 0$.
- **More than a full turn**: $\theta + 2\pi$ lands on the same point as $\theta$.
- **Negative**: walk **clockwise** instead.

### Signs in the four quadrants

The axes split the plane into four **quadrants**, numbered anticlockwise from the top right. In each one, the signs of
the coordinates give the signs of cosine and sine:

| Quadrant | Angles | $\cos$ ($x$) | $\sin$ ($y$) | $\tan$ |
| --- | --- | --- | --- | --- |
| I | $0$ to $\tfrac{\pi}{2}$ | + | + | + |
| II | $\tfrac{\pi}{2}$ to $\pi$ | − | + | − |
| III | $\pi$ to $\tfrac{3\pi}{2}$ | − | − | + |
| IV | $\tfrac{3\pi}{2}$ to $2\pi$ | + | − | − |

### Symmetry gives you every exact value

Look at the dashed point in the drawing, at angle $\pi - \theta$. It is the mirror image of the first point in the
$y$-axis: same height, opposite $x$. So

$$\sin(\pi - \theta) = \sin\theta \qquad \cos(\pi - \theta) = -\cos\theta$$

These are exactly the definitions that [level 7](../level-7/04-sine-law.md) used for obtuse angles in the sine and
cosine laws. They were not arbitrary: they are what the unit circle says. Mirroring in the $x$-axis and through the
origin gives

$$\sin(-\theta) = -\sin\theta,\quad \cos(-\theta) = \cos\theta,\quad \sin(\pi + \theta) = -\sin\theta,\quad \cos(\pi + \theta) = -\cos\theta$$

and swapping $x$ and $y$ (mirroring in the line $y = x$) gives $\sin\left(\tfrac{\pi}{2} - \theta\right) = \cos\theta$.

So to find, say, $\cos\tfrac{5\pi}{6}$: the angle is in quadrant II, its **reference angle** (the acute angle to the
nearest part of the $x$-axis) is $\pi - \tfrac{5\pi}{6} = \tfrac{\pi}{6}$, cosine is negative there, and
$\cos\tfrac{\pi}{6} = \tfrac{\sqrt3}{2}$. So $\cos\tfrac{5\pi}{6} = -\tfrac{\sqrt3}{2}$.

### Identities

An **identity** is an equation true for **every** value of the angle (where both sides make sense). The most
important one comes straight from the picture. The point $(\cos\theta, \sin\theta)$ is on the circle $x^2 + y^2 = 1$
from [level 7](../level-7/07-circle-equations.md), so

$$\sin^2\theta + \cos^2\theta = 1$$

for **every** angle, not just acute ones. ($\sin^2\theta$ means $(\sin\theta)^2$.) Dividing it by $\cos^2\theta$ gives
another:

$$\tan^2\theta + 1 = \frac{1}{\cos^2\theta}$$

To **prove** an identity, start from one side and transform it, step by step, into the other. Do not start by
assuming the two sides are equal.

<figure class="play" data-play="graph" data-form="sine"><span class="ai-tag">AI-created</span><figcaption><b>Sine in radians.</b> With b = 1 the wave repeats every 2π ≈ 6.28.</figcaption></figure>

## Worked examples

**1. Conversions.** Convert 225° to radians and $\tfrac{7\pi}{6}$ to degrees.
$225 \times \dfrac{\pi}{180} = \dfrac{5\pi}{4}$. And $\dfrac{7\pi}{6} \times \dfrac{180}{\pi} = 7 \times 30 = 210°$.

**2. Distance on Mars.** Mars's equatorial radius is about 3396 km. How far apart are two points on the equator whose
longitudes differ by 1°? And how fast does a point on the equator move as Mars spins, given that it turns once
(relative to the stars) in about 24.62 hours?

1. $1° = \dfrac{\pi}{180}$ rad, so the arc is $s = r\theta = 3396 \times \dfrac{\pi}{180} \approx 59.3$ km.
2. In one turn the point travels $2\pi r = 2\pi \times 3396 \approx 21\,340$ km. Divided by 24.62 hours, that is about
   $867$ km/h. In radians, Mars turns at $\dfrac{2\pi}{24.62} \approx 0.255$ rad per hour, and speed $= r \times$
   (angular speed) $= 3396 \times 0.255 \approx 867$ km/h.

**3. Exact values round the circle.** Find $\sin\tfrac{4\pi}{3}$, $\cos\tfrac{7\pi}{4}$ and $\tan\tfrac{2\pi}{3}$.

1. $\tfrac{4\pi}{3}$ is in quadrant III with reference angle $\tfrac{\pi}{3}$; sine is negative there:
   $\sin\tfrac{4\pi}{3} = -\tfrac{\sqrt3}{2}$.
2. $\tfrac{7\pi}{4}$ is in quadrant IV with reference angle $\tfrac{\pi}{4}$; cosine is positive:
   $\cos\tfrac{7\pi}{4} = \tfrac{1}{\sqrt2}$.
3. $\tfrac{2\pi}{3}$ is in quadrant II with reference angle $\tfrac{\pi}{3}$; tangent is negative:
   $\tan\tfrac{2\pi}{3} = -\sqrt3$.

**4. Solving an equation.** Find every $\theta$ with $0 \le \theta < 2\pi$ and $\sin\theta = -\tfrac12$.

1. The reference angle with sine $\tfrac12$ is $\tfrac{\pi}{6}$.
2. Sine is negative in quadrants III and IV.
3. Quadrant III: $\pi + \tfrac{\pi}{6} = \tfrac{7\pi}{6}$. Quadrant IV: $2\pi - \tfrac{\pi}{6} = \tfrac{11\pi}{6}$.
4. A calculator's $\sin^{-1}(-0.5)$ gives only $-\tfrac{\pi}{6}$, which is not in the range; the circle finds both
   answers.

**5. Proving an identity.** Prove $\dfrac{1 - \cos^2\theta}{\sin\theta} = \sin\theta$ (for $\sin\theta \ne 0$).
Start from the left: $1 - \cos^2\theta = \sin^2\theta$ by the Pythagorean identity, so the left side is
$\dfrac{\sin^2\theta}{\sin\theta} = \sin\theta$, which is the right side. ∎

## Try it

1. Convert 150° and −60° to radians, and $\tfrac{5\pi}{4}$ and 2 rad to degrees.
2. A circle has radius 8 cm. Find the arc length and the sector area for an angle of $\tfrac{3\pi}{4}$.
3. Find exactly: $\sin\tfrac{2\pi}{3}$, $\cos\tfrac{7\pi}{6}$, $\tan\tfrac{5\pi}{4}$, $\cos\left(-\tfrac{\pi}{3}\right)$, $\sin\tfrac{3\pi}{2}$.
4. $\cos\theta = -\tfrac{5}{13}$ and $\theta$ is in quadrant II. Find $\sin\theta$ and $\tan\theta$.
5. Solve $2\cos\theta = -\sqrt2$ for $0 \le \theta < 2\pi$.
6. Prove $\tan^2\theta + 1 = \dfrac{1}{\cos^2\theta}$.
7. A rover wheel of radius 0.26 m turns through 50 radians without slipping. How far does the rover roll?
8. Compare $\sin 0.05$ with $0.05$, and $\sin 5°$ with $5$. Why does the small-angle rule need radians?

??? note "Answers"
    1. $150 \times \tfrac{\pi}{180} = \tfrac{5\pi}{6}$; $-60° = -\tfrac{\pi}{3}$; $\tfrac{5\pi}{4} = 225°$;
       $2 \times \tfrac{180}{\pi} \approx 114.6°$.
    2. Arc $s = 8 \times \tfrac{3\pi}{4} = 6\pi \approx 18.85$ cm. Area $\tfrac12 \times 64 \times \tfrac{3\pi}{4} = 24\pi \approx 75.4$ cm².
    3. $\tfrac{\sqrt3}{2}$; $-\tfrac{\sqrt3}{2}$; $1$ (quadrant III, where tangent is positive); $\tfrac12$ (cosine
       ignores the sign of the angle); $-1$ (the bottom of the circle, $(0, -1)$).
    4. $\sin^2\theta = 1 - \tfrac{25}{169} = \tfrac{144}{169}$, and sine is positive in quadrant II, so
       $\sin\theta = \tfrac{12}{13}$. Then $\tan\theta = \dfrac{12/13}{-5/13} = -\tfrac{12}{5}$.
    5. $\cos\theta = -\tfrac{\sqrt2}{2} = -\tfrac{1}{\sqrt2}$. Reference angle $\tfrac{\pi}{4}$; cosine is negative in
       quadrants II and III: $\theta = \tfrac{3\pi}{4}$ or $\tfrac{5\pi}{4}$.
    6. Start from the left: $\tan^2\theta + 1 = \dfrac{\sin^2\theta}{\cos^2\theta} + \dfrac{\cos^2\theta}{\cos^2\theta} = \dfrac{\sin^2\theta + \cos^2\theta}{\cos^2\theta} = \dfrac{1}{\cos^2\theta}$. ∎
    7. Each radian of turn rolls one radius of ground: $s = r\theta = 0.26 \times 50 = 13$ m.
    8. $\sin 0.05 \approx 0.049979$, very close to $0.05$. But $\sin 5° \approx 0.0872$, nothing like 5. The rule
       $\sin\theta \approx \theta$ compares an arc with a height, both measured in radii, so the angle must be measured
       in radii too: that is, in radians. (5° is $\tfrac{5\pi}{180} \approx 0.0873$ rad, which does match.)

## Common mistake

**Mixing units.** $s = r\theta$ and $\tfrac12 r^2\theta$ only work with $\theta$ in radians. Using $\theta = 60$ instead
of $\tfrac{\pi}{3}$ gives an arc 57 times too long. Check your calculator's mode too.

**Trusting $\sin^{-1}$ for every answer.** The inverse functions give one answer in a limited range. Equations like
$\sin\theta = -\tfrac12$ usually have two solutions in each full turn; find the others from the circle.

## Where it leads

- Previous lesson: [How to write a geometric proof](01-geometric-proof.md). Next lesson:
  [Graphs of sine and cosine](03-sine-cosine-graphs.md), where walking round the circle becomes a wave.
- The level page: [Level 8: Proof, radians and vectors](index.md).
- Where these ratios began: [Sine, cosine and tangent](../level-7/02-sin-cos-tan.md).
- Turning by an angle as multiplication of complex numbers: [Numbers](../../numbers/index.md).
- Sine, cosine and their derivatives (which need radians) on the U of T shelf:
  [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md).
