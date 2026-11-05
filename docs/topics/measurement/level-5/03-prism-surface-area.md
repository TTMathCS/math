---
title: "Surface area of prisms"
---

# Surface area of prisms

*Measurement · level 5, lesson 3 of 6*

## A question to start

Take 8 sugar cubes, each 1 cm along every edge. Glue them into one big cube, 2 cm along each edge. Then take 8 more
and leave them loose on the table.

Both piles have the same volume: 8 cm³ of sugar. But drop them both into hot tea and the loose cubes dissolve much
faster. Why? Because the loose cubes have **twice as much outside** touching the tea. The big cube has 6 faces of
4 cm², which is 24 cm². The 8 loose cubes have $8 \times 6 = 48$ faces of 1 cm², which is 48 cm².

Same volume, double the outside. The size of the outside of a solid is its **surface area**, and it matters
whenever you paint, wrap, build, heat or cool something. This lesson shows how to find it for any prism.

## The idea

### What surface area means

The **surface area** of a solid is the total area of all its outside faces. It is an **area**, so it is measured in
square units: cm², m², mm². Volume answers "how much fits inside?"; surface area answers "how much material covers
the outside?": how much paint for the walls, how much cardboard for a box, how much wrapping paper for a present.

### Nets: unfold it flat

The easiest way to see all the faces at once is to imagine cutting the solid along some of its edges and unfolding it
flat. The flat pattern is called a **net**. In [Geometry level 2](../../geometry/level-2/04-nets-of-a-cube.md) you met
the 11 nets of a cube. The surface area of a solid is simply the area of its net, because folding does not stretch or
shrink anything.

Here is a net of a box 5 cm long, 3 cm wide and 2 cm tall (drawn smaller than real life). Faces that are opposite
each other on the box have the same colour.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 200" role="img" aria-label="Net of a box 5 by 3 by 2: a strip of four rectangles 5 by 2, 3 by 2, 5 by 2 and 3 by 2, with a 5 by 3 rectangle above and below the first one">
  <rect x="20" y="20" width="100" height="60" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="80" width="100" height="40" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="120" y="80" width="60" height="40" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="180" y="80" width="100" height="40" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="280" y="80" width="60" height="40" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="120" width="100" height="60" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="70" y="54">top 5 × 3</text>
    <text x="70" y="104">front 5 × 2</text>
    <text x="150" y="104">3 × 2</text>
    <text x="230" y="104">back 5 × 2</text>
    <text x="310" y="104">3 × 2</text>
    <text x="70" y="154">bottom 5 × 3</text>
  </g>
</svg>
</div>

### A box: three pairs of faces

A box has 6 rectangular faces, and they come in 3 **matching pairs**: top and bottom, front and back, left and
right. If the box has length $l$, width $w$ and height $h$:

- top and bottom: each $l \times w$;
- front and back: each $l \times h$;
- the two ends: each $w \times h$.

So

$$SA = 2lw + 2lh + 2wh = 2(lw + lh + wh)$$

For the box in the net: $2(5 \times 3 + 5 \times 2 + 3 \times 2) = 2(15 + 10 + 6) = 2 \times 31 = 62$ cm². A cube with
edge $s$ has 6 identical square faces, so $SA = 6s^2$.

You do not need to memorise the box formula. If you remember "three different faces, each twice", you can rebuild
it at any time.

### Any prism: two ends and a wrap-around strip

Look again at the box's net. The four faces in the middle row form one long strip. Its height is the box's height,
2 cm, and its length is $5 + 3 + 5 + 3 = 16$ cm, which is the distance **around the base**, the base's perimeter.

The same thing happens for every prism. The faces that join the two bases are all rectangles (for a right prism), and
each one is as long as the prism and as wide as one side of the base. Unrolled side by side, they make one rectangle:

- its width is the prism's length (or height) $l$;
- its length is the base's perimeter $P$: all the sides of the base, one after another.

This strip is called the **lateral surface** ("lateral" means "at the side"). Its area is $P \times l$. Add the two
bases, each of area $A$:

$$SA = 2A + P \times l$$

Check it on the box: $A = 5 \times 3 = 15$, $P = 16$, $l = 2$: $SA = 30 + 32 = 62$ cm². ✓

Here is a net of a triangular prism whose base is a right triangle with sides 3 cm, 4 cm and 5 cm, and whose length
is 10 cm. The strip is $3 + 4 + 5 = 12$ cm long.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 240 230" role="img" aria-label="Net of a triangular prism: three rectangles 3 by 10, 4 by 10 and 5 by 10 side by side, with a right triangle with legs 3 and 4 above and below the middle rectangle">
  <polygon points="66,60 114,60 66,24" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="30" y="60" width="36" height="120" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="66" y="60" width="48" height="120" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="114" y="60" width="60" height="120" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <polygon points="66,180 114,180 66,216" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="48" y="124">3</text>
    <text x="90" y="124">4</text>
    <text x="144" y="124">5</text>
    <text x="200" y="124">10</text>
  </g>
  <line x1="185" y1="60" x2="185" y2="180" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

$SA = 2 \times (\tfrac12 \times 3 \times 4) + 12 \times 10 = 12 + 120 = 132$ cm².

### Real jobs: what to leave out

Surface area questions in real life rarely want **every** face:

- A box with no lid has only 5 faces.
- When you paint a room you paint the walls and perhaps the ceiling, but not the floor, the door or the windows.
- A tent may have a floor sewn in, or not.
- Wrapping paper needs some overlap, so you buy more than the surface area.

So always start by listing which faces are really covered. A quick sketch of the net, with the unwanted faces
crossed out, saves many mistakes.

### Why surface area matters in nature

The sugar cube question shows something important: cutting a solid into smaller pieces keeps the volume the same but
increases the surface area. Crushed ice cools a drink faster than one big block, fine flour burns far faster than a
lump of wheat, and your lungs are packed with millions of tiny air sacs so that a small chest has a huge surface for
taking in oxygen. In [level 7](../index.md) you will see this as the square-cube law.

<figure class="play" data-play="solid" data-shape="box"><span class="ai-tag">AI-created</span><figcaption><b>Surface area.</b> The six faces come in three pairs.</figcaption></figure>

## Worked examples

**1. A box.** Find the surface area of a box 4 cm by 3 cm by 2 cm.

1. The three different faces: $4 \times 3 = 12$, $4 \times 2 = 8$, $3 \times 2 = 6$ cm².
2. Each comes twice: $SA = 2(12 + 8 + 6) = 52$ cm².

**2. Painting a room.** A room is 5 m long, 4 m wide and 2.5 m high. You paint the four walls and the ceiling, two
coats. The door is 0.9 m by 2 m and the window 1.5 m by 1.2 m. One litre of paint covers 10 m². How much paint?

1. Walls: the strip around the room is the perimeter times the height: $(5 + 4 + 5 + 4) \times 2.5 = 18 \times 2.5 = 45$ m².
2. Ceiling: $5 \times 4 = 20$ m². Total so far 65 m².
3. Subtract the door, $0.9 \times 2 = 1.8$ m², and the window, $1.5 \times 1.2 = 1.8$ m²: $65 - 3.6 = 61.4$ m².
4. Two coats: $2 \times 61.4 = 122.8$ m². Paint: $122.8 \div 10 = 12.28$ litres. Round **up**: buy at least
   12.5 or 13 litres, depending on the can sizes.

**3. A tent with a floor.** The tent from lesson 1 has a triangular front 2 m wide and 1.5 m tall, and is 3 m long.
How much fabric, including the floor?

1. The sloping sides of the triangle: each goes 1 m across (half the width) and 1.5 m up, so by Pythagoras
   ([Geometry level 6](../../geometry/level-6/02-using-pythagoras.md)) its length is
   $\sqrt{1^2 + 1.5^2} = \sqrt{3.25} \approx 1.80$ m.
2. Two triangles: $2 \times \tfrac12 \times 2 \times 1.5 = 3$ m².
3. The strip (two sloping sides and the floor): perimeter $1.80 + 1.80 + 2 = 5.60$ m, times 3 m, about $16.8$ m².
4. Total about $3 + 16.8 = 19.8$ m².

**4. Wrapping a present.** A box is 30 cm by 20 cm by 10 cm. Its surface area is
$2(600 + 300 + 200) = 2200$ cm². With about 10% extra for overlap, you need about 2420 cm² of paper.

## Try it

1. Find the surface area of a cube with edges of 4 cm.
2. Find the surface area of a box 6 cm by 5 cm by 2 cm.
3. A box with **no lid** is 10 cm long, 8 cm wide and 5 cm tall. How much cardboard does it use?
4. A triangular prism is 15 cm long. Its base is a right triangle with sides 6 cm, 8 cm and 10 cm. Find its surface
   area.
5. Eight 1 cm cubes are glued into a rod 8 cm long, 1 cm wide and 1 cm tall. What is its surface area? Compare it
   with the 2 cm cube (24 cm²) and the 8 loose cubes (48 cm²).
6. You paint the four walls of a room 4 m by 3 m, 2.4 m high, two coats. The only door is 0.8 m by 2 m. One litre
   covers 8 m². How many litres?
7. A cube has a surface area of 150 cm². How long is each edge? What is its volume?
8. The L-shaped beam from lesson 1 has a cross-section made of a 10 cm by 2 cm rectangle and a 2 cm by 6 cm rectangle
   (area 32 cm²) and is 50 cm long. The L fits in a box 10 cm by 8 cm. Find the beam's surface area. (Hint: what is
   the perimeter of the L?)

??? note "Answers"
    1. $6 \times 4^2 = 6 \times 16 = 96$ cm².
    2. $2(6 \times 5 + 6 \times 2 + 5 \times 2) = 2(30 + 12 + 10) = 104$ cm².
    3. Bottom $10 \times 8 = 80$; two long sides $2 \times 10 \times 5 = 100$; two ends $2 \times 8 \times 5 = 80$.
       Total $260$ cm².
    4. Two triangles: $2 \times \tfrac12 \times 6 \times 8 = 48$ cm². Strip: $(6 + 8 + 10) \times 15 = 360$ cm².
       $SA = 408$ cm².
    5. $2(8 \times 1 + 8 \times 1 + 1 \times 1) = 2 \times 17 = 34$ cm². It lies between the cube (24 cm²) and the loose
       cubes (48 cm²): the more spread out the shape, the more surface.
    6. Walls: $(4 + 3 + 4 + 3) \times 2.4 = 14 \times 2.4 = 33.6$ m². Minus the door $1.6$ m²: $32$ m². Two coats:
       $64$ m². Paint: $64 \div 8 = 8$ litres.
    7. $6s^2 = 150$, so $s^2 = 25$ and $s = 5$ cm. Volume $5^3 = 125$ cm³.
    8. Walking round an L with only right-angled corners, the right-and-left steps add to the full width and the
       up-and-down steps add to the full height, just like the box around it: $P = 2(10 + 8) = 36$ cm.
       $SA = 2 \times 32 + 36 \times 50 = 64 + 1800 = 1864$ cm².

## Common mistake

**Counting each face once.** A box has 6 faces, not 3. If you find $lw + lh + wh$, remember to double it, unless the
question says a face is missing.

**Mixing up surface area and volume.** Surface area is in square units (cm²) and adds up faces; volume is in cubic
units (cm³) and multiplies three lengths. If your "surface area" came from multiplying three lengths together, it is
a volume.

## Where it leads

- Back: [Volume of cylinders](02-cylinder-volume.md) · Next: [Surface area of cylinders](04-cylinder-surface-area.md)
- [Level 5 page](index.md) · [Measurement topic page](../index.md)
- Nets in [Geometry: nets of a cube](../../geometry/level-2/04-nets-of-a-cube.md); the sloping sides in
  [Using Pythagoras](../../geometry/level-6/02-using-pythagoras.md).
- Which box of a given volume uses the least cardboard? [Level 6: best shapes](../level-6/04-best-shapes.md).
- Surface area of pyramids, cones and spheres: [Level 6](../level-6/03-curved-surface-area.md).
