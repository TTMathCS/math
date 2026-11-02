---
title: "Angles of elevation and depression"
---

# Angles of elevation and depression

*Geometry · level 7, lesson 3 of 7*

## A question to start

How do you find the height of the tallest mountain on Earth without climbing it?

In the middle of the 1800s, surveyors of the Great Trigonometrical Survey of India did exactly that. From survey
stations far away on the plains, they measured the angle they had to tilt their instruments up to see the summit of
a peak they called "Peak XV". From several stations, and a great deal of careful arithmetic, they computed its
height. It was the highest peak they had measured anywhere, and it was later named Everest. No one reached the top
until 1953, about a hundred years after it had been measured.

The tools were telescopes, angles and the trigonometry of the [last lesson](02-sin-cos-tan.md). This lesson shows how.

## The idea

### Elevation and depression

The **angle of elevation** is the angle you tilt your eyes **up** from the horizontal (the flat, level direction) to
look at something above you. The **angle of depression** is the angle you tilt **down** from the horizontal to look
at something below you.

Both are measured from the **horizontal**, never from the vertical and never from a slope.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 200" role="img" aria-label="A person on the ground at A looks up to the top of a cliff at B. The angle of elevation at A, measured up from the horizontal, equals the angle of depression at B, measured down from the horizontal, because the two horizontals are parallel">
  <polygon points="300,50 330,50 330,170 300,170" fill="#eea66f" opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="170" x2="330" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="300" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
  <line x1="40" y1="170" x2="300" y2="50" stroke="#9cc9ea" stroke-width="3"/>
  <path d="M 90 170 A 50 50 0 0 0 85.4 149" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <path d="M 250 50 A 50 50 0 0 0 254.6 71" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <circle cx="40" cy="170" r="4" fill="currentColor"/><circle cx="300" cy="50" r="4" fill="currentColor"/>
  <g font-size="14" fill="currentColor">
    <text x="30" y="190">A</text><text x="306" y="42">B</text>
    <text x="96" y="162">elevation</text><text x="160" y="72">depression</text>
    <text x="120" y="44" font-size="12">horizontal</text><text x="130" y="188" font-size="12">horizontal</text>
  </g>
</svg>
</div>

### Why the two angles are equal

If you stand at $A$ and look up at $B$, and a friend at $B$ looks down at you, the angle of elevation at $A$ equals
the angle of depression at $B$. The reason: the two horizontals are **parallel** lines, and the line of sight $AB$
crosses both of them. The two angles are **alternate angles** (the Z-shape), and alternate angles between parallel
lines are equal.

This matters because problems often give you a depression angle from the top, but the right triangle you want to
use has its angle at the bottom. You may move the angle down to the ground freely.

### Building the right triangle

Almost every problem in this lesson comes down to the same picture: a horizontal distance along the ground, a
vertical height, and a line of sight joining them. Together they make a right triangle, with the right angle at the
foot of the thing you are measuring. Then:

- if you know the distance and want the height, use **tangent**: $\text{height} = \text{distance} \times \tan(\text{angle})$;
- if you know the length of the line of sight (a kite string, a rope, a laser range), use **sine** or **cosine**.

### Your eyes are not on the ground

When you look at a treetop, the angle is measured at your **eye**, not at your feet. The triangle's bottom edge is
the horizontal line at eye level. So add your eye height at the end:

$$\text{height of tree} = d \tan\theta + \text{eye height}$$

### A home-made clinometer

A **clinometer** measures angles of elevation. Tape a drinking straw along the straight edge of a protractor, hang a
string with a small weight from the centre hole, and look at the treetop through the straw. Gravity pulls the
string straight down. When the straw is level, the string hangs at the protractor's 90° mark. When you tilt the straw
up by $\theta$, the string still hangs straight down, so it now crosses the scale $\theta$ away from 90°. The angle of
elevation is the difference between 90° and the reading.

### When you cannot reach the base

Sometimes you cannot walk to the foot of the thing: a mountain, a tower across a river. Then measure **two** angles
of elevation from two points in a straight line with the foot, a known distance $d$ apart.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 190" role="img" aria-label="A tall object of height h. Two observers stand in line with its foot: the far one at P sees the top at angle alpha, the near one at Q, a distance d closer, sees it at the larger angle beta. The near one is x from the foot">
  <line x1="300" y1="160" x2="300" y2="30" stroke="#eea66f" stroke-width="5"/>
  <line x1="20" y1="160" x2="340" y2="160" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="160" x2="300" y2="30" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="170" y1="160" x2="300" y2="30" stroke="#7ccf9a" stroke-width="2.5"/>
  <circle cx="40" cy="160" r="3.5" fill="currentColor"/><circle cx="170" cy="160" r="3.5" fill="currentColor"/>
  <g font-size="14" fill="currentColor">
    <text x="34" y="180">P</text><text x="164" y="180">Q</text><text x="308" y="100">h</text>
    <text x="78" y="154">α</text><text x="200" y="154">β</text>
    <text x="100" y="180">d</text><text x="230" y="180">x</text>
  </g>
</svg>
</div>

The near point $Q$ is $x$ from the foot, so $h = x\tan\beta$, which gives $x = \dfrac{h}{\tan\beta}$. The far point $P$
is $x + d$ from the foot, so $x + d = \dfrac{h}{\tan\alpha}$. Subtract the first from the second and $x$ disappears:

$$d = \frac{h}{\tan\alpha} - \frac{h}{\tan\beta} \qquad\text{so}\qquad h = \frac{d}{\dfrac{1}{\tan\alpha} - \dfrac{1}{\tan\beta}}$$

You never needed to know how far away the mountain was. That is, in spirit, how Peak XV was measured, although the
real survey also had to correct for the curve of the Earth and the bending of light in the air.

### Shadows from above

The same idea works upside down. A spacecraft photographs the surface of Mars from orbit. The Sun stands at a known
angle above the local horizon, and a crater rim throws a shadow across the crater floor. The shadow, the depth and
the sunlight make a right triangle with the Sun's elevation at the tip of the shadow. Measuring shadow lengths on
images is one of the ways scientists estimate the depths of craters and the heights of boulders and cliffs on Mars
and the Moon.

## Worked examples

**1. A tree.** You stand 30 m from a tree on flat ground. Your eyes are 1.6 m above the ground, and you tilt up 38°
to see the top. How tall is the tree?

1. The right triangle has its angle at your eye. The 30 m is adjacent, the part of the tree above eye level is
   opposite.
2. Part above eye level: $30 \tan 38° \approx 30 \times 0.7813 \approx 23.4$ m.
3. Add your eye height: $23.4 + 1.6 = 25.0$ m.

**2. A boat seen from a cliff.** From the top of an 80 m cliff, a boat is seen at an angle of depression of 12°. How
far is the boat from the foot of the cliff?

1. Move the 12° angle down to the boat (alternate angles). At the boat, the height 80 m is opposite and the distance
   $d$ is adjacent.
2. $\tan 12° = \dfrac{80}{d}$, so $d = \dfrac{80}{\tan 12°} \approx \dfrac{80}{0.2126} \approx 376$ m.

Notice how a small angle of depression means a long distance.

**3. Two angles, no base.** From a point $P$, the top of a tower is at 30° elevation. Walking 50 m straight towards
it, to $Q$, the elevation becomes 45°. How tall is the tower? (Ignore eye height.)

1. Use the formula above with $d = 50$, $\alpha = 30°$, $\beta = 45°$.
2. $\dfrac{1}{\tan 30°} = \sqrt3$ and $\dfrac{1}{\tan 45°} = 1$.
3. $h = \dfrac{50}{\sqrt3 - 1}$. Multiply top and bottom by $\sqrt3 + 1$: $h = \dfrac{50(\sqrt3 + 1)}{3 - 1} = 25(\sqrt3 + 1) \approx 68.3$ m.
4. Check: from $Q$ at 45°, the distance to the foot equals the height, 68.3 m. From $P$ it is $118.3$ m, and
   $68.3 \div 118.3 \approx 0.577 \approx \tan 30°$. Good.

**4. A crater on Mars.** In an orbital photo, the Sun is 20° above the horizon and the shadow of a crater rim reaches
600 m across a flat crater floor. Roughly how deep is the crater?

1. At the tip of the shadow, the sunlight grazing the rim comes down at 20°. The depth is opposite, the shadow
   length adjacent.
2. Depth $= 600 \tan 20° \approx 600 \times 0.3640 \approx 218$ m.

(Real measurements also allow for the slope of the ground and the direction the camera looks.)

## Try it

1. A kite is on a 40 m string, pulled straight, at an angle of elevation of 55°. How high is the kite above the hand
   holding the string?
2. From the top of a 25 m building, the angle of depression to a parked car is 18°. How far is the car from the foot
   of the building?
3. A flagpole is 20 m away. Your eyes are 1.5 m up and the angle of elevation to its top is 31°. How tall is the pole?
4. A plane flying 1200 m above flat ground is seen at an angle of elevation of 15°. How far away is it measured along
   the ground, and how far in a straight line?
5. The angle of elevation of a hilltop is 25°. After walking 100 m straight towards it on flat ground, the angle is
   40°. How high is the hill above the ground you walk on?
6. From a window 12 m above the street, the angle of elevation to the top of the building opposite is 35° and the
   angle of depression to its foot is 20°. How wide is the street, and how tall is the building?
7. On Mars, with the Sun 30° above the horizon, a boulder casts a 4 m shadow on flat ground. Find its height exactly
   and to two decimal places.

??? note "Answers"
    1. The string is the hypotenuse: height $= 40 \sin 55° \approx 40 \times 0.8192 \approx 32.8$ m.
    2. At the car the angle is 18° (alternate angles): $d = \dfrac{25}{\tan 18°} \approx \dfrac{25}{0.3249} \approx 76.9$ m.
    3. $20 \tan 31° + 1.5 \approx 20 \times 0.6009 + 1.5 \approx 12.0 + 1.5 = 13.5$ m.
    4. Along the ground: $\dfrac{1200}{\tan 15°} \approx \dfrac{1200}{0.2679} \approx 4478$ m. Straight line (the
       hypotenuse): $\dfrac{1200}{\sin 15°} \approx \dfrac{1200}{0.2588} \approx 4636$ m.
    5. $h = \dfrac{100}{\dfrac{1}{\tan 25°} - \dfrac{1}{\tan 40°}} \approx \dfrac{100}{2.1445 - 1.1918} = \dfrac{100}{0.9527} \approx 105$ m.
       Check: the near point is $105 \div \tan 40° \approx 125$ m from the foot, the far one $225$ m, and
       $105 \div 225 \approx 0.466 \approx \tan 25°$.
    6. Width: from the depression angle, $w = \dfrac{12}{\tan 20°} \approx \dfrac{12}{0.3640} \approx 33.0$ m. Part
       above the window: $33.0 \times \tan 35° \approx 33.0 \times 0.7002 \approx 23.1$ m. Height
       $\approx 23.1 + 12 = 35.1$ m.
    7. Height $= 4 \tan 30° = \dfrac{4}{\sqrt3} = \dfrac{4\sqrt3}{3} \approx 2.31$ m.

## Common mistake

**Putting the angle at the wrong corner.** An angle of depression is measured from the horizontal at the top, not
from the vertical cliff face. If you put 12° between the cliff and the line of sight, you would get a distance of
$80 \tan 12° \approx 17$ m instead of 376 m. Draw the horizontal line first, then the angle.

**Forgetting eye height.** The triangle starts at your eye. Add the eye height at the end, not to the distance.

## Where it leads

- Previous lesson: [Sine, cosine and tangent](02-sin-cos-tan.md). Next lesson:
  [The sine law and the ambiguous case](04-sine-law.md), for triangles with no right angle at all.
- The level page: [Level 7: Similarity and trigonometry](index.md).
- Measuring lengths, areas and big distances: [Measurement](../../measurement/index.md).
- Vectors, angles and estimation in physics on the U of T shelf:
  [PHY131 Unit 1 (units, vectors and estimation)](../../../uoft/PHY131H1/unit01.md).
