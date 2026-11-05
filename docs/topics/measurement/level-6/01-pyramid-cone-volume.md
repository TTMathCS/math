---
title: "Volume of pyramids and cones"
---

# Volume of pyramids and cones

*Measurement · level 6, lesson 1 of 6*

## A question to start

Take a paper cone (like the ones beside a water cooler) and a cylinder-shaped cup with exactly the same circular top
and exactly the same height. Fill the cone with water and pour it into the cup. How many cone-fulls does it take to
fill the cup?

Most people guess two: the cone looks like "half" of the cup, a triangle inside a rectangle. But a cone is pointed in
every direction, not only in the side view, and it holds less than you think. The answer is **three**, every time,
for every cone and its matching cylinder. Pyramids do the same with their matching prisms.

In this lesson you will see three different reasons why the magic number is 3, so that you do not just remember the
formula but know it has to be true.

## The idea

### Pyramids and cones

A **pyramid** is a solid with a flat polygon as its **base** and triangular sides that all meet at one point, the
**apex** (the tip). It is named after its base: a square pyramid, a triangular pyramid (also called a
**tetrahedron**), a hexagonal pyramid.

A **cone** is the same idea with a circle for its base: a curved surface sweeps from the edge of the circle up to the
apex.

The **height** $h$ of a pyramid or cone is the straight distance from the apex down to the plane of the base, meeting
it at a right angle. It is **not** the length of a sloping edge or of the sloping side. That sloping distance is
called the **slant height**, and it matters for surface area ([lesson 3](03-curved-surface-area.md)), not for volume.

If the apex is directly above the centre of the base, the pyramid or cone is called a **right** pyramid or cone. If the
apex leans to one side, it is **oblique**. The volume rule is the same for both.

### The rule

For every pyramid and every cone:

$$V = \tfrac13 \times \text{base area} \times \text{height}$$

For a cone, the base is a circle of area $\pi r^2$, so $V = \tfrac13 \pi r^2 h$. Compare it with the prism and cylinder
rule from [level 5](../level-5/01-prism-volume.md), $V = \text{base area} \times \text{height}$: the pointed solid is
exactly one third of the straight solid with the same base and height.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 210" role="img" aria-label="A cone drawn inside a cylinder with the same circular base and the same height. The apex of the cone touches the centre of the top of the cylinder.">
  <path d="M 40 40 L 40 170 A 60 14 0 0 0 160 170 L 160 40" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="100" cy="40" rx="60" ry="14" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <path d="M 40 170 L 100 40 L 160 170 A 60 14 0 0 1 40 170 Z" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="2"/>
  <path d="M 40 170 A 60 14 0 0 1 160 170" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="100" y1="40" x2="100" y2="170" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="100" y1="170" x2="160" y2="170" stroke="currentColor" stroke-width="1.2"/>
  <text x="130" y="165" font-size="12" text-anchor="middle" fill="currentColor">r</text>
  <text x="106" y="110" font-size="12" fill="currentColor">h</text>
  <text x="100" y="205" font-size="12" text-anchor="middle" fill="currentColor">cone = 1/3 of the cylinder</text>
</svg>
</div>

### Reason 1: pour it and see

The water (or rice, or sand) experiment at the top of the page is a real experiment you can do. Make a cone and a
cylinder from card with the same base and height, fill the cone and empty it into the cylinder. After three pours the
cylinder is full. Try it with a square pyramid and a box of the same base and height, and it is three again.

An experiment is convincing, but it cannot tell the difference between 3 and 3.02. For that we need a reason.

### Reason 2: three pyramids make a cube

Take a cube with edges of length $s$. Pick one corner at the top, call it $P$. Three faces of the cube do **not**
touch $P$: the bottom, the back and the right-hand face. Join $P$ to every corner of each of those three faces. You
have cut the cube into **three pyramids**, each with a square face of the cube as its base and $P$ as its apex.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="Left: a cube with lines drawn from one top corner P to the far corners, cutting it into three pyramids. Right: one of the pyramids alone, a square base with its apex directly above one corner.">
  <polygon points="130,175 180,135 180,35 130,75" fill="#eea66f" fill-opacity="0.45"/>
  <line x1="30" y1="175" x2="130" y2="175" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="175" x2="180" y2="135" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="135" x2="180" y2="135" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="30" y1="175" x2="80" y2="135" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="30" y1="75" x2="130" y2="75" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="75" x2="180" y2="35" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="35" x2="180" y2="35" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="75" x2="80" y2="35" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="175" x2="130" y2="75" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="175" x2="30" y2="75" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="135" x2="180" y2="35" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="135" x2="80" y2="35" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="30" y1="75" x2="130" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="75" x2="180" y2="35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="75" x2="180" y2="135" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="30" y1="75" x2="80" y2="135" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="30" cy="75" r="3.5" fill="currentColor"/>
  <text x="18" y="70" font-size="13" fill="currentColor">P</text>
  <polygon points="230,175 330,175 230,75" fill="#9cc9ea" fill-opacity="0.55"/>
  <polygon points="330,175 380,135 230,75" fill="#7ccf9a" fill-opacity="0.55"/>
  <line x1="230" y1="175" x2="330" y2="175" stroke="currentColor" stroke-width="2"/>
  <line x1="330" y1="175" x2="380" y2="135" stroke="currentColor" stroke-width="2"/>
  <line x1="380" y1="135" x2="280" y2="135" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="230" y1="175" x2="280" y2="135" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="330" y1="175" x2="230" y2="75" stroke="currentColor" stroke-width="2"/>
  <line x1="230" y1="175" x2="230" y2="75" stroke="currentColor" stroke-width="2"/>
  <line x1="380" y1="135" x2="230" y2="75" stroke="currentColor" stroke-width="2"/>
  <line x1="280" y1="135" x2="230" y2="75" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="105" y="196" font-size="12" text-anchor="middle" fill="currentColor">cube cut from P</text>
  <text x="305" y="196" font-size="12" text-anchor="middle" fill="currentColor">one of 3 equal pieces</text>
</svg>
</div>

Why do they fill the cube with no gaps and no overlaps? Every point inside the cube can be joined to $P$ by a straight
line, and if you carry that line on beyond the point, it leaves the cube through exactly one of the three far faces
(or along an edge where two of them meet). So every point belongs to the pyramid on that face.

The three pyramids are **identical**: turning the cube about its long diagonal through $P$ carries each one onto the
next. So each has one third of the cube's volume:

$$V = \tfrac13 s^3 = \tfrac13 \times s^2 \times s = \tfrac13 \times \text{base area} \times \text{height}$$

since each pyramid's base is a face ($s^2$) and its height is an edge of the cube ($s$).

Now **stretch** the cube into a box $l$ by $w$ by $h$. Stretching multiplies every small piece of volume by the same
amount, so the three pieces still have equal volumes, each one third of the box. The piece standing on the bottom
face is a pyramid with base $l \times w$ and height $h$, so its volume is $\tfrac13 lwh$: again one third of base times
height.

### Reason 3: slices, and Cavalieri's idea

In [level 5](../level-5/01-prism-volume.md) you met **Cavalieri's principle**: two solids with equal cross-section
areas at every height have equal volumes (like a straight and a leaning stack of coins). Slice a pyramid of height
$h$ parallel to its base. Halfway up, the slice is a copy of the base shrunk to half its width in every direction, so
its area is $\left(\tfrac12\right)^2 = \tfrac14$ of the base. A quarter of the way down from the apex it is
$\left(\tfrac14\right)^2 = \tfrac1{16}$ of the base. In general the slice's area depends only on the base area and
on how far up the slice is, not on the base's shape and not on where the apex sits.

So any two pyramids or cones with the **same base area** and the **same height** have the same slices at every level,
and by Cavalieri's principle the same volume. A cone of base area 12 cm² and height 5 cm has the same volume as a
square pyramid of base area 12 cm² and height 5 cm, and as a leaning one. Reason 2 showed that one particular kind of
pyramid is one third of base times height, so **all** of them are.

Adding up thin slices like this is exactly how calculus finds volumes; with an integral the $\tfrac13$ appears from
adding up the squares $t^2$, because $\int_0^h t^2\,dt = \tfrac13 h^3$.

<figure class="play" data-play="solid" data-shape="cone"><span class="ai-tag">AI-created</span><figcaption><b>A third of a cylinder.</b> Same base, same height, a third of the volume.</figcaption></figure>

## Worked examples

**1. A square pyramid.** A pyramid has a square base 6 m on each side and a height of 4 m.

$V = \tfrac13 \times 6^2 \times 4 = \tfrac13 \times 36 \times 4 = 48$ m³.

**2. An ice-cream cone.** A cone has radius 3 cm and height 10 cm.

$V = \tfrac13 \pi \times 3^2 \times 10 = \tfrac13 \times 90\pi = 30\pi \approx 94.2$ cm³. The matching cylinder holds
$90\pi$: three times as much.

**3. The Great Pyramid.** When it was built, the Great Pyramid of Giza had a square base about 230 m on each side and
was about 146.6 m tall. Its volume was about

$\tfrac13 \times 230^2 \times 146.6 = \tfrac13 \times 52\,900 \times 146.6 \approx 2\,585\,000$ m³, about 2.6 million
cubic metres.

**4. A pile of sand.** Sand poured onto the ground forms a cone 4 m across and 1.5 m high. How much sand is there?

1. Radius $4 \div 2 = 2$ m.
2. $V = \tfrac13 \pi \times 2^2 \times 1.5 = \tfrac13 \times 6\pi = 2\pi \approx 6.3$ m³.

**5. Using the slant height.** A cone has radius 5 cm and a slant height of 13 cm. Find its volume.

1. The height, the radius and the slant height make a right triangle, with the slant height as the hypotenuse.
   By Pythagoras ([Geometry](../../geometry/level-6/02-using-pythagoras.md)): $h^2 + 5^2 = 13^2$, so
   $h^2 = 169 - 25 = 144$ and $h = 12$ cm.
2. $V = \tfrac13 \pi \times 25 \times 12 = 100\pi \approx 314.2$ cm³.

**6. Working backwards.** A conical paper cup must hold 100 cm³ and have a radius of 4 cm. How tall must it be?

$\tfrac13 \pi \times 16 \times h = 100$, so $h = \dfrac{300}{16\pi} \approx 5.97$ cm.

## Try it

1. A square pyramid has a base 5 cm on each side and a height of 9 cm. Find its volume.
2. A cone has radius 6 cm and height 7 cm. Find its volume, exactly and to one decimal place.
3. A pyramid has a rectangular base 8 m by 6 m and a height of 10 m. Find its volume.
4. A triangular pyramid has a base that is a triangle with base 6 cm and height 4 cm. The pyramid is 10 cm tall. Find
   its volume.
5. A cone is 10 cm across its base and its slant height is 13 cm. Find its volume.
6. A conical glass holds 150 mL. Its rim has radius 4 cm. How deep is it?
7. Olympus Mons on Mars is about 600 km across and about 22 km high. As a very rough model, treat it as a cone. Estimate
   its volume. (Real shield volcanoes are lower and flatter near the top than a cone, so this is only a first guess.)
8. A cone-shaped glass (point down) is filled with water to **half** its height. What fraction of the glass is
   full? (Hint: the water is a smaller cone.)

??? note "Answers"
    1. $\tfrac13 \times 25 \times 9 = 75$ cm³.
    2. $\tfrac13 \pi \times 36 \times 7 = 84\pi \approx 263.9$ cm³.
    3. $\tfrac13 \times 48 \times 10 = 160$ m³.
    4. Base area $\tfrac12 \times 6 \times 4 = 12$ cm². $V = \tfrac13 \times 12 \times 10 = 40$ cm³.
    5. $r = 5$, and $h = \sqrt{13^2 - 5^2} = \sqrt{144} = 12$. $V = \tfrac13 \pi \times 25 \times 12 = 100\pi \approx 314.2$ cm³.
    6. 150 mL = 150 cm³. $\tfrac13 \pi \times 16 \times h = 150$, so $h = \dfrac{450}{16\pi} \approx 9.0$ cm.
    7. $r = 300$ km, $h = 22$ km. $V = \tfrac13 \pi \times 300^2 \times 22 = 660\,000\pi \approx 2\,070\,000$ km³, about
       2 million km³.
    8. The water is a cone with half the height and (because the sides are straight) half the radius. Its volume is
       $\tfrac13 \pi \left(\tfrac r2\right)^2 \tfrac h2 = \tfrac18 \times \tfrac13 \pi r^2 h$. So only $\tfrac18$ of the glass is
       full, even though the water reaches halfway up. To be half full, the water must reach about 79% of the height,
       since $0.794^3 \approx 0.5$.

## Common mistake

**Forgetting the $\tfrac13$.** A cone or pyramid must always come out **smaller** than the cylinder or prism with the
same base and height. If your cone holds as much as the can around it, you have left out the third.

**Using the slant height as the height.** The height goes straight down from the apex to the base, at a right angle.
If you are given the slant height, use Pythagoras to find the true height first, as in example 5.

## Where it leads

- Back: [Level 5: imperial units in Canada](../level-5/06-imperial-units.md) · Next:
  [Volume of a sphere](02-sphere-volume.md)
- [Level 6 page](index.md) · [Measurement topic page](../index.md)
- The right triangle inside a cone: [Geometry: using Pythagoras](../../geometry/level-6/02-using-pythagoras.md).
- Why the half-height cone holds $\tfrac18$: similar solids in [Geometry](../../geometry/index.md), and the
  square-cube law in level 7.
- Adding up slices is integration: [MAT137 Unit 10 (applications of the integral)](../../../uoft/MAT137/unit10.md)
  finds volumes of solids this way.
