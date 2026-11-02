---
title: "Volume of prisms"
---

# Volume of prisms

*Measurement · level 5, lesson 1 of 6*

## A question to start

Make a neat stack of 20 coins. Now push the top of the stack sideways with your finger, so the stack leans like a
tower that is about to fall. Every coin is still there, and none of them has changed shape.

Has the **volume** of the stack changed? It looks wider now, and its sloping side is longer than the straight
stack's side. But the amount of metal is exactly the same, so the space it takes up must be the same too.

By the end of this lesson you will know why, and you will have one rule that finds the volume of a box, a tent, a
chocolate bar shaped like a triangle, a swimming pool with a sloping floor and a leaning stack of coins: **area of
the base times the height**.

## The idea

### What a prism is

A **prism** is a solid with two identical, parallel flat ends, and the same shape all the way through between them.
If you slice a prism anywhere, parallel to its ends, every slice is an exact copy of the end. A loaf of bread is
nearly a prism: every slice has the same outline.

- The two ends are called the **bases** of the prism. (A base does not have to be at the bottom: a tent lying on
  the ground has its bases at the front and the back.)
- The shape of the base names the prism: a **triangular prism**, a **rectangular prism** (a box, also called a
  **cuboid**), a **hexagonal prism** (a pencil), a **trapezoidal prism** (a swimming pool with a sloping floor).
- The **height** of a prism is the straight distance between the two bases, measured at right angles to them. When
  the prism lies on its side, people often call this the **length**. It is the same measurement.

The slice that you get when you cut across a prism is called its **cross-section**. "Same shape all the way
through" means that every cross-section is the same as the base.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 215" role="img" aria-label="A triangular prism drawn in perspective. The front triangle is the base. Thin lines show equal triangular slices one behind another along the length.">
  <polygon points="40,190 160,190 100,100" fill="#eea66f" fill-opacity="0.6"/>
  <polygon points="160,190 235,130 175,40 100,100" fill="#9cc9ea" fill-opacity="0.45"/>
  <line x1="175" y1="178" x2="115" y2="88" stroke="currentColor" stroke-width="1"/>
  <line x1="190" y1="166" x2="130" y2="76" stroke="currentColor" stroke-width="1"/>
  <line x1="205" y1="154" x2="145" y2="64" stroke="currentColor" stroke-width="1"/>
  <line x1="220" y1="142" x2="160" y2="52" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="190" x2="160" y2="190" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="190" x2="100" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="190" x2="100" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="115" y1="130" x2="235" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="235" y1="130" x2="175" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="115" y1="130" x2="175" y2="40" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="160" y1="190" x2="235" y2="130" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="190" x2="115" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="100" y1="100" x2="175" y2="40" stroke="currentColor" stroke-width="2"/>
  <text x="100" y="172" font-size="13" text-anchor="middle" fill="currentColor">base</text>
  <text x="100" y="208" font-size="12" text-anchor="middle" fill="currentColor">area A</text>
  <text x="245" y="175" font-size="13" fill="currentColor">height h</text>
  <text x="245" y="190" font-size="12" fill="currentColor">(the length)</text>
</svg>
</div>

A cylinder (a can) has the same shape all the way through too, with a circle as its base. It is not called a prism,
because a prism's base must be a polygon, but the volume rule below works for it in exactly the same way. It has a
lesson of its own: [Volume of cylinders](02-cylinder-volume.md).

### Why "base area times height" works: layers

Volume is measured by counting **unit cubes**: a cubic centimetre (cm³) is a cube 1 cm along each edge. In
[level 4](../level-4/index.md) you filled a box layer by layer: a box 5 cm by 3 cm on the bottom has 15 cubes in
its bottom layer, and if it is 4 cm tall it holds 4 such layers, $15 \times 4 = 60$ cm³.

Look at what really happened there. The bottom layer is a slab **1 cm thick**, and its volume, 15 cm³, is the same
number as the area of the base, 15 cm². That is the key fact:

**A slab 1 unit thick has the same volume (in cubic units) as the area of its base (in square units).**

Why should that hold when the base is a triangle, which cannot be filled with whole cubes? Think of the slab as a
thick biscuit cut in the shape of the base. In level 4 you found the area of a triangle or a trapezoid by cutting it
into pieces and moving the pieces until they made a rectangle with the same area. Do the same cuts straight down
through the biscuit. The pieces slide together into a rectangular biscuit, still 1 cm thick, with the same base area.
A rectangular slab 1 cm thick with base area $A$ holds exactly $A$ cubic centimetres. Cutting and sliding did not add
or remove any material, so the triangular slab holds $A$ cm³ too.

Now stack the slabs. A prism of height $h$ is $h$ such slabs, one on top of the other, all identical because the
cross-section never changes. So:

$$V = A \times h$$

where $A$ is the area of the base and $h$ is the height (the distance between the bases).

If the height is not a whole number, say 4.5 cm, use thinner slabs. Half-centimetre slabs each hold $A \times 0.5$,
and there are 9 of them: $9 \times 0.5A = 4.5A$. The rule still works, and the same reasoning with tenths or
hundredths covers any height you can measure.

### The box is just one case

For a box (a rectangular prism) with length $l$, width $w$ and height $h$, the base is a rectangle of area
$l \times w$, so $V = l \times w \times h$. The rule from level 4 is the prism rule for one particular base. For a
triangular prism, the base area is $\tfrac12 \times b \times h_\triangle$, where $b$ and $h_\triangle$ are the base
and height **of the triangle**. Then

$$V = \tfrac12 \times b \times h_\triangle \times l$$

Two different "heights" appear here: the height of the triangle, inside the base, and the length of the prism,
between the bases. Keep them apart by sketching the base on its own first.

### The leaning stack: Cavalieri's idea

Back to the coins. When the stack leans, every coin is still a full coin, at the same level as before. Slice the
straight stack and the leaning stack at the same height above the table and you cut through the same-sized coin each
time. Two solids that have **equal cross-section areas at every height** have **equal volumes**. This idea is named
after the Italian mathematician Bonaventura Cavalieri, who used it in the 1600s, though Chinese mathematicians had
used the same idea more than a thousand years before him.

A leaning prism is called an **oblique** prism; a straight one is a **right** prism. Cavalieri's idea says an
oblique prism has the same volume as a right prism with the same base and the same **vertical** height. So for any
prism, right or leaning:

$$V = \text{base area} \times \text{vertical height}$$

The sloping edge is longer than the vertical height, and using it gives too big an answer. This is the same trap as
the slanted side of a parallelogram in level 4, one dimension up.

### Bases made of pieces

If the base is an L-shape or a shape with a hole, find its area the way you did in level 4, by adding pieces or
subtracting a hole, and then multiply by the height. The prism rule does not care how complicated the base is, as long
as the shape stays the same all the way through.

## Worked examples

**1. A tent.** A tent is a triangular prism. Its front is a triangle 2 m wide at the ground and 1.5 m tall in the
middle. The tent is 3 m long. How much space is inside?

1. Base (the front triangle): $A = \tfrac12 \times 2 \times 1.5 = 1.5$ m².
2. Length (the prism's height): 3 m.
3. $V = 1.5 \times 3 = 4.5$ m³.

**2. A swimming pool with a sloping floor.** A pool is 25 m long and 10 m wide. It is 1 m deep at the shallow end
and 3 m deep at the deep end, and the floor slopes evenly. How many litres of water does it hold when full?

1. The shape is the same all the way across the width, so the pool is a prism lying on its side. Its base is the
   side view, a trapezoid with parallel sides 1 m and 3 m and a distance of 25 m between them.
2. Trapezoid area (level 4): $\tfrac{1 + 3}{2} \times 25 = 2 \times 25 = 50$ m².
3. The prism's height is the width, 10 m: $V = 50 \times 10 = 500$ m³.
4. Each cubic metre holds 1000 litres, so the pool holds $500 \times 1000 = 500\,000$ litres.

**3. An L-shaped beam.** A steel beam is 50 cm long. Its cross-section is an L made of a rectangle 10 cm by 2 cm and
a rectangle 2 cm by 6 cm (not overlapping). Find its volume.

1. Base area: $10 \times 2 + 2 \times 6 = 20 + 12 = 32$ cm².
2. $V = 32 \times 50 = 1600$ cm³.

**4. A missing length.** A triangular prism has a volume of 600 cm³. Its triangle has a base of 12 cm and a height of
10 cm. How long is the prism?

1. Base area: $\tfrac12 \times 12 \times 10 = 60$ cm².
2. $V = A \times l$, so $600 = 60 \times l$, and $l = 600 \div 60 = 10$ cm.

**5. The leaning box.** A leaning (oblique) box has a 5 cm by 4 cm base. Its sloping edges are 13 cm long, and its
top is 12 cm straight above the table. Its volume is $5 \times 4 \times 12 = 240$ cm³. The 13 cm edge is not used.

## Try it

1. A prism has a base of area 24 cm² and a height of 7 cm. Find its volume.
2. A triangular prism is 10 cm long. Its triangle has a base of 6 cm and a height of 4 cm. Find its volume.
3. A doorstop is a wedge: a right triangle with legs 3 cm and 8 cm, 5 cm wide. Find its volume.
4. A water trough is 2 m long. Its end is a trapezoid 40 cm across the top, 30 cm across the bottom and 20 cm deep.
   How many litres does it hold? (1 L = 1000 cm³.)
5. A prism has a volume of 450 cm³ and a base area of 30 cm². How tall is it?
6. A pencil is a hexagonal prism 175 mm long. Its end is a regular hexagon with side 4 mm, made of 6 equilateral
   triangles each about 3.46 mm tall. Find the volume of the pencil in mm³ and in cm³.
7. A stack of 30 coins leans so that its side is 6.5 cm long, but its top is only 6 cm above the table. Each coin has
   a face of area 4 cm². What is the volume of the stack?
8. You double the length of a triangular prism and keep its triangle the same. What happens to the volume? What if
   you double **every** length, the triangle's base, its height and the prism's length?

??? note "Answers"
    1. $V = 24 \times 7 = 168$ cm³.
    2. Base area $\tfrac12 \times 6 \times 4 = 12$ cm², so $V = 12 \times 10 = 120$ cm³.
    3. The legs of a right triangle are a base and its height: $\tfrac12 \times 3 \times 8 = 12$ cm².
       $V = 12 \times 5 = 60$ cm³.
    4. Work in centimetres: end area $\tfrac{40 + 30}{2} \times 20 = 35 \times 20 = 700$ cm². Length $200$ cm.
       $V = 700 \times 200 = 140\,000$ cm³, which is $140\,000 \div 1000 = 140$ litres.
    5. $450 = 30 \times h$, so $h = 15$ cm.
    6. One triangle: $\tfrac12 \times 4 \times 3.46 = 6.92$ mm². Six of them: about $41.5$ mm².
       $V \approx 41.5 \times 175 \approx 7270$ mm³. Since 1 cm³ = 1000 mm³, that is about 7.3 cm³.
    7. Use the vertical height, not the sloping side: $V = 4 \times 6 = 24$ cm³. It is the same as the straight stack
       of the same coins.
    8. Doubling the length doubles the number of slabs, so the volume **doubles**. Doubling every length doubles
       the triangle's base and its height, so the base area becomes $2 \times 2 = 4$ times as big, and then the
       length doubles too: $4 \times 2 = 8$ times the volume.

## Common mistake

**Using the slanted edge as the height.** For a leaning prism, or a pool with a sloping floor, the height in
$V = A \times h$ is the straight distance between the bases. A slanted edge is always longer and gives too big an
answer.

**Mixing up the two heights of a triangular prism.** The triangle's height goes into the base area; the prism's length
multiplies afterwards. Draw the base triangle on its own, find its area, and only then multiply by the length.

## Where it leads

- Back: [Level 4: area and volume](../level-4/index.md) · Next:
  [Volume of cylinders](02-cylinder-volume.md)
- [Level 5 page](index.md) · [Measurement topic page](../index.md)
- The base areas come from [Level 4: area and volume](../level-4/index.md).
- Cavalieri's slicing idea returns in level 6, where it gives the volume of a sphere:
  [Volume of a sphere](../level-6/02-sphere-volume.md).
- Doubling every length multiplies volume by 8: this is the square-cube law of level 7, and similar solids in
  [Geometry](../../geometry/index.md).
- Slicing a solid into thin layers and adding them up is exactly what an integral does: see
  [MAT137 Unit 10 (applications of the integral)](../../../uoft/MAT137/unit10.md).
