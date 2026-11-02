---
title: "Beyond: Scale, units and accuracy"
---

# Beyond: Scale, units and accuracy

*Measurement · step 5 of 5*

## A question to start

In 1999 a spacecraft called the Mars Climate Orbiter reached Mars after a ten-month journey, fired its engine to
slip into orbit, and was never heard from again. It had flown far too close to the planet. The cause, found by
NASA's investigation, was not a broken part. One team's software reported the push of the thrusters in
pound-force seconds, an imperial unit, while the navigation software expected newton-seconds, a metric one. Every
number was right; the **units** were wrong.

Measurement at the top level is not only about formulas. It is about scale, units and knowing how accurate your
numbers really are. This last step covers all three.

## The idea

### Scale drawings and maps

A **scale drawing** shows a real object with every length multiplied by the same number. A map with scale
**1 : 50 000** means 1 unit on the map stands for 50 000 of the same unit in real life. So 1 cm on the map is
50 000 cm = 500 m on the ground.

To use a scale: real length = map length × the scale number, then convert units. To go the other way, divide.

### Scaling changes length, area and volume differently

Enlarge any shape by a **scale factor** $k$: every length is multiplied by $k$. What happens to area and volume?

Take a 1 cm cube and double every edge ($k = 2$). The new cube is 2 cm by 2 cm by 2 cm.

- Each **length** is 2 times as big.
- Each face has area $2 \times 2 = 4$ cm²: the **area** is $2^2 = 4$ times as big.
- The volume is $2 \times 2 \times 2 = 8$ cm³: the **volume** is $2^3 = 8$ times as big.

This is true for every shape, not only cubes: area is built from two lengths, volume from three. So:

$$\text{lengths} \times k \qquad \text{areas} \times k^2 \qquad \text{volumes} \times k^3$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 140" role="img" aria-label="A small square of side one, and a square of side two made of four small squares; then a small cube and a cube of side two made of eight small cubes">
  <rect x="20" y="90" width="30" height="30" fill="#eea66f" stroke="currentColor"/>
  <g fill="#eea66f" stroke="currentColor">
    <rect x="70" y="60" width="30" height="30"/><rect x="100" y="60" width="30" height="30"/>
    <rect x="70" y="90" width="30" height="30"/><rect x="100" y="90" width="30" height="30"/>
  </g>
  <text x="75" y="45" font-size="13" text-anchor="middle" fill="currentColor">area × 4</text>
  <g stroke="currentColor" stroke-width="1.2">
    <polygon points="200,120 230,120 230,90 200,90" fill="#9cc9ea"/>
    <polygon points="200,90 230,90 242,78 212,78" fill="#7ccf9a"/>
    <polygon points="230,120 242,108 242,78 230,90" fill="#9cc9ea" opacity="0.7"/>
    <polygon points="280,120 340,120 340,60 280,60" fill="#9cc9ea"/>
    <polygon points="280,60 340,60 364,36 304,36" fill="#7ccf9a"/>
    <polygon points="340,120 364,96 364,36 340,60" fill="#9cc9ea" opacity="0.7"/>
    <line x1="310" y1="60" x2="310" y2="120"/><line x1="280" y1="90" x2="340" y2="90"/>
    <line x1="292" y1="48" x2="352" y2="48"/><line x1="310" y1="60" x2="334" y2="36"/>
    <line x1="352" y1="48" x2="352" y2="108"/><line x1="340" y1="90" x2="364" y2="66"/>
  </g>
  <text x="322" y="20" font-size="13" text-anchor="middle" fill="currentColor">volume × 8</text>
</svg>
</div>

### The square-cube law

Galileo pointed out this consequence in 1638. Scale an animal up by $k$: its weight (which follows its volume) grows
by $k^3$, but the strength of its bones (which follows the area of their cross-section) grows only by $k^2$. Make a
mouse ten times bigger in every direction and it becomes 1000 times heavier, but its bones are only 100 times
stronger. That is why elephants have thick, pillar-like legs, and why giant insects only exist in films.

The same law explains why small things cool down faster than large ones (heat escapes through the surface, but is
stored in the volume). It is also one reason Mars, a smaller planet, has cooled inside faster than Earth: compared
with its volume, it has more surface to lose heat from.

### Units are part of the answer

In science, units are treated like algebra: they multiply, divide and cancel.

- An area of $3 \text{ m} \times 4 \text{ m}$ is $12 \text{ m}^2$: the metres multiply too.
- A speed of $\dfrac{100 \text{ m}}{20 \text{ s}} = 5 \text{ m/s}$: metres divided by seconds.

**Converting with conversion factors.** A **conversion factor** is a fraction equal to 1, such as
$\dfrac{1000 \text{ m}}{1 \text{ km}}$ or $\dfrac{1 \text{ h}}{3600 \text{ s}}$. Multiplying by it changes the units but
not the amount. Choose each factor so the unit you do not want cancels:

$$90 \ \frac{\text{km}}{\text{h}} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} = \frac{90\,000}{3600} \ \frac{\text{m}}{\text{s}} = 25 \ \frac{\text{m}}{\text{s}}$$

**Checking a formula with units.** Every term in a correct formula has the same kind of unit. Area must come out in
(length)², volume in (length)³. So $\pi r^2$ can be an area but $\pi r^3$ cannot; and $\tfrac43 \pi r^2$ cannot be a
volume, whatever the numbers. This check, called **dimensional analysis**, catches many mistakes in seconds.

### No measurement is exact

Every measurement has some uncertainty. If a length is written "8 cm, to the nearest centimetre", the true length
could be anything from 7.5 cm up to (but not including) 8.5 cm. These are the **lower bound** and the **upper
bound**.

When measurements are combined, so are their bounds. For the **largest** possible result, use the upper bounds; for
the **smallest**, use the lower bounds. (For a subtraction or a division, think about which way each number pushes
the answer.)

**How many digits to give.** The answer cannot be more precise than the measurements it came from. If two lengths
are known to about 2 or 3 digits, an area worked out to 9 digits is pretending. Give the answer to about as many
**significant figures** (meaningful digits, counted from the first non-zero one) as the least precise measurement.

**Percentage error** compares the size of an error with the size of the true value:

$$\text{percentage error} = \frac{|\text{measured} - \text{true}|}{\text{true}} \times 100\%$$

## Worked examples

**1. A map.** On a 1 : 25 000 map, two towns are 6 cm apart. How far apart are they really?
$6 \times 25\,000 = 150\,000$ cm $= 1500$ m $= 1.5$ km.

**2. Earth and Mars by scaling.** Mars's radius is about 0.532 times Earth's. Without any sphere formulas:

- its surface area is about $0.532^2 \approx 0.28$ of Earth's,
- its volume is about $0.532^3 \approx 0.15$ of Earth's.

These match the answers found the long way on the [Master page](04-master.md).

**3. Bounds.** A rectangle is measured as 12 cm by 8 cm, each to the nearest centimetre. Between what limits does its
area lie?

1. The length is between 11.5 and 12.5 cm; the width between 7.5 and 8.5 cm.
2. Smallest area: $11.5 \times 7.5 = 86.25$ cm². Largest: $12.5 \times 8.5 = 106.25$ cm².
3. The "96 cm²" you get from $12 \times 8$ could be out by about 10 cm² either way, so writing "96.00 cm²" would be
   claiming far more accuracy than the measurement has.

**4. A model rover.** A 1 : 10 scale model of a rover is 30 cm long. The real one is $30 \times 10 = 300$ cm = 3 m
long. If the model's solar panel has an area of 50 cm², the real panel has $50 \times 10^2 = 5000$ cm² $= 0.5$ m². If
the model has a volume of 2 litres, the real rover's volume is $2 \times 10^3 = 2000$ L $= 2$ m³.

## Try it

1. On a 1 : 50 000 map, a trail measures 3.4 cm. How long is the real trail, in kilometres?
2. A shape is enlarged by scale factor 3. By what number are its perimeter, its area and (if it is a solid) its
   volume multiplied?
3. Convert 20 m/s into km/h, using conversion factors.
4. A square has sides of 7 cm, to the nearest centimetre. Between what limits does its perimeter lie?
5. A student measures gravity as 9.6 m/s². The accepted value is 9.81 m/s². What is the percentage error?
6. Someone claims the volume of a sphere is $4\pi r^2$. Without checking any numbers, why must this be wrong?

??? note "Answers"
    1. $3.4 \times 50\,000 = 170\,000$ cm $= 1700$ m $= 1.7$ km.
    2. Perimeter (a length) × 3, area × $3^2 = 9$, volume × $3^3 = 27$.
    3. $20 \ \tfrac{\text{m}}{\text{s}} \times \tfrac{3600 \text{ s}}{1 \text{ h}} \times \tfrac{1 \text{ km}}{1000 \text{ m}} = \tfrac{72\,000}{1000} \ \tfrac{\text{km}}{\text{h}} = 72$ km/h.
    4. Each side is between 6.5 and 7.5 cm, so the perimeter is between $4 \times 6.5 = 26$ cm and
       $4 \times 7.5 = 30$ cm.
    5. $\dfrac{|9.6 - 9.81|}{9.81} \times 100\% = \dfrac{0.21}{9.81} \times 100\% \approx 2.1\%$.
    6. $r^2$ has units of length², so $4\pi r^2$ is an **area** (it is in fact the sphere's surface area). A volume
       must have units of length³.

## Common mistake

**Scaling area and volume by the same factor as length.** If a model is built at 1 : 10, it is tempting to say the
real thing has 10 times the paint and 10 times the weight. It has 100 times the paint (area) and about 1000 times
the weight (volume). Before scaling any quantity, ask: is this a length, an area or a volume? Then use $k$, $k^2$ or
$k^3$.

## Where it leads

- Back a step: [Master: volume and surface area](04-master.md)
- Scale factors and similar shapes, proved: [Geometry](../geometry/04-master.md).
- Scale factors are ratios; maps, speeds and percentages: [Ratio and rates](../ratio/index.md).
- Error bounds and how spread-out measurements are: [Statistics and data](../statistics/index.md).
- Units, dimensional analysis, significant figures and estimation as physicists use them, on the U of T shelf:
  [PHY131 Unit 1 (units, vectors and estimation)](../../uoft/PHY131H1/unit01.md).
- The other topics: [all topics](../index.md).
