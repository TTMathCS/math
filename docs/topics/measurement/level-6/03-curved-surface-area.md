---
title: "Surface area of cones, pyramids and spheres"
---

# Surface area of cones, pyramids and spheres

*Measurement · level 6, lesson 3 of 6*

## A question to start

Here is an experiment for the kitchen table. Take an orange and cut it in half through the middle. Press the cut face
onto paper and trace around it four times, to make **four circles** the same size as the orange's widest slice. Now
peel the whole orange, break the peel into small pieces, and lay them flat inside your circles, like a jigsaw.

The peel fills the four circles almost exactly (not perfectly, because peel is thick and squashes a little, but very
close). The surface of a ball is **four** times the area of its widest circle. Archimedes proved it more than 2000
years ago, and in this lesson you will see two reasons why, along with how to find the surface of a cone, a party hat
and a pyramid.

## The idea

### Two heights: vertical and slant

For volume in [lesson 1](01-pyramid-cone-volume.md), you needed the **vertical height** $h$, straight down from the
apex to the base. For surface area you need the **slant height** $l$: the distance measured **along** the sloping
surface.

- For a cone, $l$ is the distance from the apex to any point on the edge of the base circle.
- For a pyramid, the slant height of a face is the height of that triangular face: from the apex down the middle
  of the face to the midpoint of a base edge. (It is not the length of a sloping edge, which is longer.)

The vertical height, the slant height and a distance across the base make a right triangle, so Pythagoras
([Geometry](../../geometry/level-6/02-using-pythagoras.md)) links them. For a cone of radius $r$:

$$l^2 = r^2 + h^2$$

For a square pyramid with base edge $s$, the right triangle has legs $h$ and $\tfrac s2$ (from the centre of the base
to the middle of an edge), so $l^2 = h^2 + \left(\tfrac s2\right)^2$.

### Pyramids: base plus triangles

A pyramid's net is its base with a triangle folded up from each edge. So

$$SA = \text{base area} + \text{the areas of all the triangular faces}$$

For a **square** pyramid with base edge $s$ and slant height $l$, the four triangles are identical, each
$\tfrac12 \times s \times l$:

$$SA = s^2 + 4 \times \tfrac12 s l = s^2 + 2sl$$

### Cones: the net is a slice of a circle

Cut a paper cone straight up from the edge of its base to the tip and unroll it. It lies flat as a **sector**: a slice
of a circle, like a slice of pizza (sectors are in
[Geometry level 6](../../geometry/level-6/05-circle-area-sectors.md)). The radius of that big circle is the cone's
slant height $l$, because every point on the cone's rim was $l$ from the apex. And the curved edge of the sector was
the rim of the cone, so its length is the cone's circumference, $2\pi r$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 285" role="img" aria-label="Left: the net of a cone with radius 3 and slant height 5, a sector of a circle of radius 5 with angle 216 degrees, and a circle of radius 3 touching its curved edge. Right: a cone with its vertical height, radius and slant height forming a right triangle.">
  <path d="M 100 100 L 176.08 75.28 A 80 80 0 1 1 23.92 75.28 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="100" cy="228" r="48" fill="#eea66f" fill-opacity="0.65" stroke="currentColor" stroke-width="2"/>
  <circle cx="100" cy="100" r="2.5" fill="currentColor"/>
  <line x1="100" y1="228" x2="148" y2="228" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor">
    <text x="140" y="80">l</text>
    <text x="120" y="223">r</text>
    <text x="100" y="140" text-anchor="middle">curved edge = 2πr</text>
    <text x="100" y="40" text-anchor="middle">216° of 360°</text>
  </g>
  <path d="M 215 150 L 260 30 L 305 150" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="260" cy="150" rx="45" ry="10" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <line x1="260" y1="30" x2="260" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="260" y1="150" x2="305" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="260,140 270,140 270,150" fill="none" stroke="currentColor" stroke-width="1"/>
  <g font-size="12" fill="currentColor">
    <text x="248" y="95">h</text>
    <text x="280" y="166">r</text>
    <text x="290" y="88">l</text>
  </g>
</svg>
</div>

What fraction of the whole big circle is the sector? The full circle of radius $l$ has circumference $2\pi l$, and the
sector's edge is $2\pi r$ of it. So the sector is the fraction $\dfrac{2\pi r}{2\pi l} = \dfrac{r}{l}$ of the circle,
and its area is that fraction of $\pi l^2$:

$$\text{curved surface of a cone} = \frac{r}{l} \times \pi l^2 = \pi r l$$

Add the base circle for a closed cone:

$$SA = \pi r^2 + \pi r l$$

The sector's angle is the same fraction of 360°: $\dfrac{r}{l} \times 360°$. The cone in the drawing has $r = 3$ and
$l = 5$, so the sector is $\tfrac35 \times 360° = 216°$.

A second way to see $\pi r l$: a cone is like a pyramid with a huge number of very thin triangular faces. Each
triangle has area $\tfrac12 \times \text{its base} \times l$, and all their bases together go round the circle, a total
of $2\pi r$. So the curved surface is $\tfrac12 \times 2\pi r \times l = \pi r l$. Both reasons agree.

### Spheres: four great circles

A sphere cannot be unrolled flat without stretching (every flat map of the Earth distorts something), so the net
method fails. Archimedes's result is

$$SA = 4\pi r^2$$

four times the area $\pi r^2$ of a great circle, just as the orange showed.

**Reason 1: the hat box.** Put the sphere inside the cylinder that fits it exactly (radius $r$, height $2r$). The
curved side of that cylinder has area $2\pi r \times 2r = 4\pi r^2$, exactly the sphere's area. Archimedes showed more:
cut both with two horizontal planes close together, and the band of sphere between them has the **same** area as the
band of cylinder between them. Near the "equator" the two bands look alike. Near the top, the sphere's band is a
smaller circle around, which would make it smaller, but it is also tilted, so it is wider than the gap between the
planes, which makes it bigger. The two effects cancel exactly. (This is why a map projection that pushes the globe out
sideways onto a cylinder keeps areas correct.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 170" role="img" aria-label="A sphere drawn as a circle inside a cylinder drawn as a square of the same width. Two pairs of horizontal lines cut equal-height bands, one near the middle and one near the top.">
  <rect x="50" y="20" width="120" height="120" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
  <circle cx="110" cy="80" r="60" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="74" x2="180" y2="74" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="40" y1="86" x2="180" y2="86" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="40" y1="30" x2="180" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="40" y1="42" x2="180" y2="42" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="110" y="160" font-size="12" text-anchor="middle" fill="currentColor">equal-height bands have equal areas</text>
</svg>
</div>

**Reason 2: from the volume.** Cover the sphere's surface with a huge number of tiny patches, and join each patch to
the centre. That cuts the ball into a huge number of thin pointed pieces, each almost a pyramid whose base is the patch
and whose height is $r$. A pyramid's volume is $\tfrac13 \times \text{base} \times \text{height}$, so adding them all
up:

$$V = \tfrac13 \times SA \times r$$

We know $V = \tfrac43 \pi r^3$ from [lesson 2](02-sphere-volume.md). So $\tfrac13 \times SA \times r = \tfrac43 \pi r^3$,
which gives $SA = 4\pi r^2$. The volume formula and the area formula fit together perfectly.

A hemisphere has curved surface $2\pi r^2$; if it has a flat face, add $\pi r^2$ for a total of $3\pi r^2$.

<figure class="play" data-play="solid" data-shape="sphere"><span class="ai-tag">AI-created</span><figcaption><b>A sphere's surface.</b> 4 π r²: four circles of the same radius.</figcaption></figure>

## Worked examples

**1. A square pyramid.** A pyramid has a square base 10 m on each side and a vertical height of 12 m. Find its
surface area.

1. Slant height of each face: $l^2 = 12^2 + 5^2 = 144 + 25 = 169$, so $l = 13$ m.
2. Base $10^2 = 100$ m². Four triangles: $4 \times \tfrac12 \times 10 \times 13 = 260$ m².
3. $SA = 360$ m².

**2. A cone and its net.** A cone has radius 3 cm and height 4 cm.

1. $l = \sqrt{3^2 + 4^2} = 5$ cm.
2. Curved surface $\pi \times 3 \times 5 = 15\pi$; base $9\pi$. Total $24\pi \approx 75.4$ cm².
3. The net's sector has radius 5 cm and angle $\tfrac35 \times 360° = 216°$.

**3. A party hat.** A party hat is a cone (no base) with radius 5 cm and height 12 cm. How much card?

$l = \sqrt{25 + 144} = 13$ cm. Card $= \pi \times 5 \times 13 = 65\pi \approx 204.2$ cm².

**4. A ball.** A ball has radius 6 cm. $SA = 4\pi \times 36 = 144\pi \approx 452.4$ cm².

**5. The surface of Mars.** Mars's mean radius is about 3389.5 km.

$SA = 4\pi \times 3389.5^2 \approx 1.44 \times 10^8$ km², about 144 million km². Earth's dry land covers about
149 million km², so the whole surface of Mars is a little less than all the land on Earth put together.

**6. Painting a dome.** A hemispherical dome has radius 15 m. What area is painted on the outside (curved part only)?

$2\pi \times 15^2 = 450\pi \approx 1414$ m².

## Try it

1. Find the surface area of a sphere with radius 5 cm.
2. A cone has radius 6 cm and slant height 10 cm. Find its total surface area.
3. A cone has radius 5 cm and vertical height 12 cm. Find its total surface area.
4. A square pyramid has base edges of 6 cm, and the slant height of each face is 5 cm. Find its surface area. Then
   find its vertical height and its volume.
5. You want to make a cone with radius 4 cm and slant height 10 cm from a sector of paper. What angle should the
   sector have?
6. A basketball is about 24 cm across. Find its surface area.
7. Earth's mean radius is about 6371 km. Find Earth's surface area, and the ratio of Mars's surface area to Earth's.
   Why is the ratio about $0.532^2$?
8. Check, for a ball of radius 6 cm, that $\tfrac13 \times SA \times r$ gives the ball's volume. Explain in words why
   this must work for every sphere.

??? note "Answers"
    1. $4\pi \times 25 = 100\pi \approx 314.2$ cm².
    2. $\pi \times 36 + \pi \times 6 \times 10 = 36\pi + 60\pi = 96\pi \approx 301.6$ cm².
    3. $l = \sqrt{25 + 144} = 13$. $25\pi + 65\pi = 90\pi \approx 282.7$ cm².
    4. $SA = 36 + 4 \times \tfrac12 \times 6 \times 5 = 36 + 60 = 96$ cm². Height: $h^2 + 3^2 = 5^2$, so $h = 4$ cm.
       Volume $\tfrac13 \times 36 \times 4 = 48$ cm³.
    5. $\tfrac{4}{10} \times 360° = 144°$.
    6. $r = 12$: $4\pi \times 144 = 576\pi \approx 1810$ cm².
    7. $4\pi \times 6371^2 \approx 5.10 \times 10^8$ km² (510 million km²). Mars:
       $1.44 \times 10^8 \div 5.10 \times 10^8 \approx 0.28$. Areas go with the **square** of the radius, and
       $0.532^2 \approx 0.283$.
    8. $SA = 144\pi$, so $\tfrac13 \times 144\pi \times 6 = 288\pi$, which is $\tfrac43 \pi \times 216$ ✓. The ball can be
       cut into thin pointed pieces from the surface to the centre; each is nearly a pyramid of height $r$, and their
       bases make up the whole surface.

## Common mistake

**Mixing up the slant height and the vertical height.** Volume uses the vertical height $h$; curved surface area uses
the slant height $l$. If you are given one, use Pythagoras to find the other.

**Using $\pi r^2$ for a sphere.** $\pi r^2$ is the area of one flat circle through the centre. The sphere's surface is
four of those: $4\pi r^2$.

## Where it leads

- Back: [Volume of a sphere](02-sphere-volume.md) · Next: [Best shapes](04-best-shapes.md)
- [Level 6 page](index.md) · [Measurement topic page](../index.md)
- Sectors and arcs: [Geometry: area of a circle, sectors and arcs](../../geometry/level-6/05-circle-area-sectors.md).
- Why maps of the round Earth distort: [Geometry level 8: geometry on a sphere](../../geometry/level-8/06-sphere-geometry.md).
- Surface areas of curved solids with integrals:
  [MAT137 Unit 10 (applications of the integral)](../../../uoft/MAT137/unit10.md).
