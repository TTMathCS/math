---
title: "Surface area of cylinders"
---

# Surface area of cylinders

*Measurement · level 5, lesson 4 of 6*

## A question to start

Tennis balls are often sold three at a time in a tall tube, stacked one on top of another, the tube just wide enough
for one ball. Look at the tube and ask: which is longer, the **height** of the tube, or the distance **once around**
it?

Almost everyone says the height. The tube looks tall and thin, after all. Wrap a string around it and hold the
string up against the side, and you get a surprise: the distance around is **longer** than the height.

Here is why. The tube is three balls tall, so its height is about 3 diameters. The distance around a circle is
$\pi$ diameters, and $\pi$ is about 3.14, a little more than 3. In this lesson you unroll the side of a cylinder into
a flat rectangle and find out how much material any can, pipe or tank needs.

## The idea

### Unroll the label

Peel the label off a can carefully and lay it flat. It is a **rectangle**. (Many labels have a straight cut down the
side, which shows this well.)

- One side of the rectangle is the **height** of the can, $h$: the label covers the can from bottom to top.
- The other side went **once around** the can, so its length is the distance round the circle: the
  **circumference**. In [Geometry level 6](../../geometry/level-6/04-pi-circumference.md) you saw that the
  circumference of a circle is $\pi$ times the diameter, $C = \pi d = 2\pi r$.

So the label is a rectangle $2\pi r$ long and $h$ wide, and its area is

$$\text{curved surface} = 2\pi r \times h = 2\pi r h$$

The curved side of a cylinder is called its **lateral surface** (or **curved surface**). Unrolling it does not
stretch or crease it, which is why the flat rectangle has exactly the same area as the curved side. This is special:
a cylinder can be unrolled flat, but a ball cannot (that is why every flat map of the Earth stretches something).

### The net of a cylinder

Add the two circular ends, each of area $\pi r^2$, and you have the whole surface. The net is a rectangle with a
circle touching its top edge and a circle touching its bottom edge.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 200" role="img" aria-label="The net of a cylinder: a rectangle whose long side is 2 pi r and short side is h, with a circle of radius r touching the top edge and another touching the bottom edge">
  <circle cx="108.5" cy="35" r="25" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="2"/>
  <rect x="30" y="60" width="157" height="80" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="108.5" cy="165" r="25" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="2"/>
  <line x1="108.5" y1="35" x2="133.5" y2="35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="108.5" cy="35" r="2" fill="currentColor"/>
  <g font-size="13" fill="currentColor">
    <text x="121" y="30" text-anchor="middle">r</text>
    <text x="108.5" y="105" text-anchor="middle">2πr × h</text>
    <text x="195" y="104">h</text>
    <text x="215" y="54">length 2πr:</text>
    <text x="215" y="70">once round</text>
    <text x="215" y="86">the circle</text>
  </g>
  <line x1="192" y1="60" x2="192" y2="140" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

Putting it together:

$$SA = 2\pi r^2 + 2\pi r h$$

Both terms have $2\pi r$ in them, so you may also see it written as $SA = 2\pi r(r + h)$. It is the same thing, by
the distributive law ([Algebra level 5](../../algebra/level-5/01-distributive-law.md)).

### The same rule as a prism

In [lesson 3](03-prism-surface-area.md) you found that any prism has $SA = 2A + P \times l$: two bases plus the
perimeter of the base times the length. A cylinder fits the same pattern exactly:

- the base area is $A = \pi r^2$;
- the "perimeter" of the base, the distance around it, is $P = 2\pi r$;
- the length is $h$.

$2A + P \times h = 2\pi r^2 + 2\pi r h$. It is not a coincidence. The strip around a prism and the label around a can
are the same idea: walk once round the base, and multiply by how long the solid is.

### Which parts are really there?

As with prisms, real objects often leave out a face:

| Object | Ends | Surface |
| --- | --- | --- |
| closed can, tank with lid | 2 | $2\pi r^2 + 2\pi r h$ |
| cup, open tank, round swimming pool | 1 | $\pi r^2 + 2\pi r h$ |
| pipe, tube, label, cardboard roll | 0 | $2\pi r h$ |

Read the question carefully and decide which line you need before you calculate.

### Two shapes, the same volume

Two cylinders can hold exactly the same amount and still need different amounts of metal. A cylinder of radius 4 cm
and height 4 cm has volume $\pi \times 16 \times 4 = 64\pi$ cm³. So does a cylinder of radius 2 cm and height 16 cm:
$\pi \times 4 \times 16 = 64\pi$ cm³. Their surfaces are

- short and wide: $2\pi \times 4 \times (4 + 4) = 64\pi \approx 201$ cm²;
- tall and thin: $2\pi \times 2 \times (2 + 16) = 72\pi \approx 226$ cm².

The tall thin one uses about 12% more metal. Which cylinder of a given volume uses the **least** material is a lovely
question, and you will answer it in [level 6](../level-6/04-best-shapes.md).

<figure class="play" data-play="solid" data-shape="cyl"><span class="ai-tag">AI-created</span><figcaption><b>Unroll the side.</b> Two circles and a rectangle 2πr wide.</figcaption></figure>

## Worked examples

**1. A can and its label.** A can is 7.5 cm across and 10 cm tall. Find the area of its label and its total surface
area.

1. Radius $7.5 \div 2 = 3.75$ cm.
2. Label: $2\pi r h = 2\pi \times 3.75 \times 10 = 75\pi \approx 235.6$ cm². The label is $2\pi \times 3.75 \approx 23.6$ cm
   long and 10 cm wide.
3. Two ends: $2\pi r^2 = 2\pi \times 14.0625 = 28.125\pi \approx 88.4$ cm².
4. Total: $103.125\pi \approx 324.0$ cm².

**2. A cup with no lid.** A cylindrical cup has radius 4 cm and height 10 cm. How much material is in its outside
(bottom and side only)?

1. Bottom: $\pi \times 4^2 = 16\pi$.
2. Side: $2\pi \times 4 \times 10 = 80\pi$.
3. Total: $96\pi \approx 301.6$ cm².

**3. Painting a tank.** A water tank stands on the ground. It has radius 1.5 m and height 3 m. You paint the side and
the top, but not the bottom. What area do you paint?

1. Top: $\pi \times 1.5^2 = 2.25\pi$ m².
2. Side: $2\pi \times 1.5 \times 3 = 9\pi$ m².
3. Total: $11.25\pi \approx 35.3$ m².

**4. A rover's wheel.** Each wheel of the Curiosity rover on Mars is roughly 50 cm across and 40 cm wide. Treat the
part that touches the ground as the curved side of a cylinder.

1. Distance round: $\pi \times 50 \approx 157$ cm. So every full turn of a wheel moves the rover about 1.57 m.
2. Area of the rolling surface: $157 \times 40 \approx 6283$ cm², about 0.63 m².

**5. Working backwards.** A label has an area of 300 cm² and wraps a can of radius 4 cm. How tall is the label?

1. $2\pi r h = 300$, so $2\pi \times 4 \times h = 300$, which is $8\pi h = 300$.
2. $h = 300 \div 8\pi \approx 300 \div 25.13 \approx 11.9$ cm.

## Try it

1. A closed cylinder has radius 2 cm and height 5 cm. Find its surface area exactly and to one decimal place.
2. A can is 10 cm across and 12 cm tall. What is the area of its label?
3. A cardboard tube (no ends) is 4 cm across and 25 cm long. How much cardboard is in it?
4. Find the surface area of a closed cylinder with radius 7 cm and height 10 cm.
5. A tube holds three tennis balls, each 6.7 cm across, stacked exactly. How tall is it, and how far is it around?
   What is the surface area of the closed tube?
6. A round above-ground pool has radius 3 m and its wall is 1.2 m high. A liner covers the floor and the inside of
   the wall. What area of liner is needed?
7. A closed cylinder has radius 5 cm and a surface area of $200\pi$ cm². How tall is it?
8. A friend says the label of a can is a rectangle of area $\pi r^2 \times h$. What has the friend mixed up, and how
   can you show which is right using units?

??? note "Answers"
    1. $2\pi \times 4 + 2\pi \times 2 \times 5 = 8\pi + 20\pi = 28\pi \approx 88.0$ cm².
    2. $r = 5$: $2\pi \times 5 \times 12 = 120\pi \approx 377.0$ cm².
    3. $r = 2$: $2\pi \times 2 \times 25 = 100\pi \approx 314.2$ cm².
    4. $2\pi \times 49 + 2\pi \times 7 \times 10 = 98\pi + 140\pi = 238\pi \approx 747.7$ cm².
    5. Height $3 \times 6.7 = 20.1$ cm. Around: $\pi \times 6.7 \approx 21.0$ cm, more than the height. With
       $r = 3.35$: $SA = 2\pi \times 3.35 \times (3.35 + 20.1) \approx 493.6$ cm².
    6. Floor $\pi \times 3^2 = 9\pi$; wall $2\pi \times 3 \times 1.2 = 7.2\pi$. Total $16.2\pi \approx 50.9$ m².
    7. $2\pi \times 5 \times (5 + h) = 200\pi$, so $10\pi(5 + h) = 200\pi$, so $5 + h = 20$ and $h = 15$ cm.
    8. $\pi r^2 \times h$ is the **volume** (circle area times height). Units show it: $r^2 \times h$ is
       cm × cm × cm = cm³, a volume. The label is a rectangle "once round" ($2\pi r$, in cm) by $h$ (in cm), so
       $2\pi r h$ is in cm², an area.

## Common mistake

**Using $\pi r^2$ for the side.** $\pi r^2$ is the area of one end. The side is a rectangle, and its long edge is the
distance round the circle, $2\pi r$ (or $\pi d$).

**Forgetting there are two ends, or adding ends that are not there.** A closed can has two circles; a cup has one; a
pipe has none. Picture the real object before you choose the formula.

## Where it leads

- Back: [Surface area of prisms](03-prism-surface-area.md) · Next:
  [Converting area and volume units](05-area-volume-units.md)
- [Level 5 page](index.md) · [Measurement topic page](../index.md)
- Circumference in [Geometry: pi and the circumference](../../geometry/level-6/04-pi-circumference.md).
- Cones unroll into a piece of a circle, and spheres cannot be unrolled at all:
  [Level 6: surface area of cones, pyramids and spheres](../level-6/03-curved-surface-area.md).
- The best can: [Level 6: best shapes](../level-6/04-best-shapes.md).
