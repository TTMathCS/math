---
title: "Eratosthenes measures the Earth"
---

# Eratosthenes measures the Earth

*Measurement · level 8, lesson 1 of 6*

## A question to start

More than two thousand years ago, a scholar in Egypt measured the size of the whole Earth. He never left his country,
never sailed round the world, and had no telescope, no satellite and no clock more accurate than a sundial. His tools
were a stick, its shadow, a known distance and one geometry fact about parallel lines.

He was Eratosthenes of Cyrene, who ran the great Library of Alexandria in the third century BC. How close did he get?
That turns out to be a harder question than it looks, and the honest answer is a lesson in measurement in itself.

## The idea

### The two observations

Our main source for the method is a later Greek writer, Cleomedes, who described it a few centuries afterwards. The
story goes like this.

1. At **Syene** (today Aswan, in southern Egypt), at noon on the longest day of the year (the summer solstice), the
   Sun was straight overhead. Upright posts cast no shadow, and, the story goes, sunlight reached the water at the
   bottom of a deep well.
2. At **Alexandria**, to the north, at noon on the same day, an upright stick **did** cast a shadow. The angle between
   the stick and the Sun's rays was $\tfrac1{50}$ of a full circle.
3. The distance from Syene to Alexandria was taken to be **5000 stadia**. (A **stadion**, plural stadia, was a Greek
   unit of length, roughly the length of a running track in a stadium.)

The Sun was directly overhead in one place and not in the other. That can only happen if the ground is **curved**.
How much it curves between the two cities tells you the size of the whole ball.

### The geometry: parallel rays

The Sun is so far away (about 150 million km, compared with Earth's radius of about 6400 km) that its rays arriving
at Syene and at Alexandria are, for all practical purposes, **parallel**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Part of the round Earth with its centre. Parallel vertical sun rays come from above. At Syene the ray points straight down to the centre. At Alexandria an upright stick leans away from the rays; the angle between the stick and the ray at its top equals the angle at the centre between the two radii. The angle is exaggerated">
  <circle cx="200" cy="230" r="150" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
  <g stroke="#eea66f" stroke-width="2">
    <line x1="120" y1="5" x2="120" y2="103"/><line x1="200" y1="5" x2="200" y2="80"/>
    <line x1="282.4" y1="5" x2="282.4" y2="104.7"/><line x1="360" y1="5" x2="360" y2="180"/>
  </g>
  <line x1="200" y1="80" x2="200" y2="230" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="263.4" y1="94.1" x2="200" y2="230" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="263.4" y1="94.1" x2="282.4" y2="53.3" stroke="currentColor" stroke-width="4"/>
  <path d="M 200 230 L 200 190 A 40 40 0 0 1 216.9 193.7 Z" fill="#7ccf9a" stroke="currentColor"/>
  <path d="M 282.4 53.3 L 273.1 73.2 A 22 22 0 0 0 282.4 75.3 Z" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="200" cy="230" r="3" fill="currentColor"/>
  <g font-size="12" fill="currentColor">
    <text x="150" y="74" text-anchor="middle">Syene</text>
    <text x="318" y="96">Alexandria</text>
    <text x="300" y="50">stick</text>
    <text x="210" y="246">centre of the Earth</text>
    <text x="226" y="200">same angle</text>
    <text x="20" y="20">parallel sun rays</text>
  </g>
</svg>
</div>

(The drawing exaggerates the angle so you can see it.)

- At Syene the ray goes straight down, so if you carried it on, it would pass through the **centre** of the Earth.
- At Alexandria the stick is upright, so it points along a **radius**, straight away from the centre. Carry the stick's
  line downward and it too reaches the centre.

Now look at the line of the stick (extended to the centre). It crosses two parallel lines: the ray at Alexandria and
the ray through Syene and the centre. The angle at the top of the stick and the angle at the centre are **alternate
angles** ("Z angles") between parallel lines, so they are equal (Geometry, [angles with parallel
lines](../../geometry/level-4/04-parallel-line-angles.md)).

So the shadow angle at Alexandria **is** the angle at the centre of the Earth between Syene and Alexandria. A stick in a
garden measured an angle at the centre of the planet.

### From angle to circumference

Arc length is proportional to the angle at the centre (Geometry: an arc of $\theta$ degrees is $\tfrac{\theta}{360}$ of
the circumference). If the arc from Syene to Alexandria is $s$ and the centre angle is $\theta$, the whole
circumference $C$ satisfies

$$\frac{s}{C} = \frac{\theta}{360°}, \qquad \text{so} \qquad C = \frac{360°}{\theta} \times s.$$

Eratosthenes' angle was $\tfrac1{50}$ of a circle, which is $360° \div 50 = 7.2°$. So the whole circle is 50 times
the arc:

$$C = 50 \times 5000 \text{ stadia} = 250\,000 \text{ stadia}.$$

Some ancient writers report 252 000 stadia instead; he may have adjusted the number, possibly to make it divide evenly
into 60 parts.

### Measuring the angle with a shadow

How do you get 7.2° from a stick? Measure the stick's height $h$ and its shadow's length $s$ at noon. They form a
right triangle with the ray as the long side, and the angle $\theta$ at the top of the stick satisfies

$$\tan\theta = \frac{s}{h}$$

(from [sin, cos and tan](../../geometry/level-7/02-sin-cos-tan.md)). For $\theta = 7.2°$, $\tan 7.2° \approx 0.1263$:
a stick 1 m tall casts a noon shadow about 12.6 cm long. The ancient Greeks did not use the tangent function, but they
could measure the same angle with a bowl-shaped sundial marked in fractions of a circle.

### How close was he? It depends on the stadion

Here is the honest problem. We know the answer in stadia, but not exactly how long his stadion was. Different Greek
stadia were in use.

| Stadion length (one common suggestion) | 250 000 stadia is |
| --- | --- |
| about 157.5 m (a value some historians argue for) | about 39 400 km |
| about 185 m (the Attic stadion, common in Athens) | about 46 250 km |

The Earth's circumference through the poles is about 40 008 km. With the short stadion Eratosthenes was within about
2%. With the Attic stadion he was about 16% too large. Historians still disagree about which he used, so the most
honest summary is: **his answer was very likely within 2% to 16% of the truth**, a remarkable result either way.

### Where his errors came from

A careful measurer asks what could be wrong. Several of his assumptions were slightly off:

- **Syene is not exactly on the Tropic of Cancer** (the line where the noon Sun is overhead at the solstice). It is a
  little north of it, so the Sun was not quite overhead there.
- **Syene is not due south of Alexandria.** It is about 3° of longitude further east, so the 5000 stadia were not
  along a single north-south circle.
- **The distance** of 5000 stadia was a round number. It may have come from surveyors who paced the route, or from
  travel times; we do not know.
- **The Sun is not a point.** It is about half a degree wide, so shadows have fuzzy edges, which makes the angle hard
  to read to better than a fraction of a degree.

The real difference in latitude between Alexandria and Aswan is about 7.1°, so his 7.2° was very good. Some of these
errors pushed his answer up and some down, and they partly cancelled, just as in a [Fermi
estimate](../level-7/06-fermi-estimates.md).

### Error analysis, the modern way

Suppose the shadow of a 1 m stick was read as $12.6 \pm 0.2$ cm. Then $\tan\theta$ is between 0.124 and 0.128, so
$\theta$ is between about 7.07° and 7.29°. With $s = 5000$ stadia:

- largest $\theta$ gives the smallest circle: $\tfrac{360}{7.29} \times 5000 \approx 247\,000$ stadia;
- smallest $\theta$ gives the largest: $\tfrac{360}{7.07} \times 5000 \approx 255\,000$ stadia.

A 1.6% error in the shadow gives about a 1.6% error in the answer, because $C$ is proportional to $\tfrac1\theta$ and
the relative errors carry over ([Errors that grow](../level-7/03-errors-that-grow.md)). An error of 10% in the
distance would add 10% more. The distance, not the angle, was the weakest measurement.

## Worked examples

**1. Eratosthenes' numbers.** Angle $\tfrac1{50}$ of a circle, distance 5000 stadia.

1. Angle in degrees: $360 \div 50 = 7.2°$.
2. $C = \tfrac{360}{7.2} \times 5000 = 50 \times 5000 = 250\,000$ stadia.
3. Radius: $C \div 2\pi = 250\,000 \div 2\pi \approx 39\,800$ stadia.

**2. A modern repeat.** Two schools are 555 km apart, one due north of the other. At local noon on the same day, their
shadow angles differ by 5.0°. Estimate Earth's circumference and radius.

1. $C = \tfrac{360}{5.0} \times 555 = 72 \times 555 = 39\,960$ km.
2. $r = C \div 2\pi \approx 39\,960 \div 6.283 \approx 6360$ km. (The accepted mean radius is about 6371 km.)

Notice that neither school needs the Sun overhead: only the **difference** of the two shadow angles matters, because
each angle is measured from that school's own upright.

**3. A noon shadow.** At a place where the noon Sun makes an angle of 20° with the vertical, how long is the shadow of
a 2.0 m pole?

$s = h \tan\theta = 2.0 \times \tan 20° \approx 2.0 \times 0.364 = 0.73$ m.

**4. Eratosthenes on Mars.** Two rovers are 1000 km apart along a north-south line on Mars. Mars's circumference is
about 21 340 km. What difference in noon shadow angle would they measure?

$\theta = \tfrac{1000}{21\,340} \times 360° \approx 16.9°$. On a smaller planet the same distance curves the ground
more, so the angle is more than twice what it would be on Earth ($\tfrac{1000}{40\,008} \times 360° \approx 9.0°$).

## Try it

1. If the angle had been $\tfrac1{40}$ of a circle and the distance 5000 stadia, what circumference would Eratosthenes
   have found?
2. Two towns 800 km apart north-south have noon shadow angles of 12.0° and 19.2°. Estimate Earth's circumference.
3. A 1.50 m stick casts a noon shadow of 0.40 m. Find the angle between the Sun's rays and the stick.
4. Why must the two cities be (roughly) north-south of each other, and why must the shadows be measured at the same
   time (local noon on the same day)?
5. If the true stadion was 157.5 m, convert 252 000 stadia to kilometres, and find the percent error against
   40 008 km.
6. The angle in example 2 is measured as $5.0° \pm 0.1°$ and the distance as $555 \pm 5$ km. Find the largest and
   smallest circumference these allow.
7. Explain in your own words why the shadow angle at Alexandria equals the angle at the centre of the Earth. Which
   fact about parallel lines is used, and which assumption about the Sun?

??? note "Answers"
    1. $\tfrac{360}{9} = 40$, so $C = 40 \times 5000 = 200\,000$ stadia.
    2. Difference $19.2 - 12.0 = 7.2°$. $C = \tfrac{360}{7.2} \times 800 = 50 \times 800 = 40\,000$ km.
    3. $\tan\theta = 0.40 \div 1.50 \approx 0.267$, so $\theta \approx 14.9°$.
    4. North-south, so the arc between them lies on one great circle through the poles and the angle difference is the
       whole centre angle along that arc (towns east-west of each other have the same noon Sun angle). Same time, so
       the Sun's rays are the same set of parallel rays for both; the Sun's height changes through the day and through
       the year.
    5. $252\,000 \times 0.1575 = 39\,690$ km. Error: $|39\,690 - 40\,008| \div 40\,008 \times 100\% \approx 0.8\%$.
    6. Largest: smallest angle, largest distance: $\tfrac{360}{4.9} \times 560 \approx 41\,140$ km. Smallest:
       $\tfrac{360}{5.1} \times 550 \approx 38\,820$ km. So about 38 800 to 41 100 km.
    7. The extended stick is a line through the centre; it crosses the ray at Alexandria and the parallel ray through
       Syene and the centre. The two angles are alternate angles between parallel lines, so they are equal. The
       assumption is that the Sun is so far away that its rays at the two cities are parallel.

## Common mistake

**Thinking the Sun must be overhead somewhere.** Eratosthenes was lucky that it was (nearly) overhead at Syene, which
made one angle zero. In general you need only the **difference** of two shadow angles measured at the same moment.

**Quoting "he was 99% right" as fact.** That depends on a stadion length nobody knows for sure. A good measurer
reports the uncertainty, including the uncertainty in the unit.

## Where it leads

- Back: [Level 7: Precision, scale and dimension](../level-7/index.md) · Next: [Distances in space](02-distances-in-space.md)
- [Level 8 page](index.md) · [Measurement topic page](../index.md)
- Arcs, sectors and degrees: [Geometry](../../geometry/index.md); latitude and great circles:
  [geometry on a sphere](../../geometry/level-8/06-sphere-geometry.md).
- Using angles to reach far-off distances: [Angles of elevation and depression](../../geometry/level-7/03-elevation-depression.md).
