---
title: "Area of a parallelogram"
---

# Area of a parallelogram

*Measurement · level 4, lesson 1 of 7*

## A question to start

Take a neat stack of playing cards. Seen from the side, it is a rectangle. Now push the top of the stack sideways,
so that every card slides a little further than the one below it. Seen from the side, the stack is now a slanted
shape: a **parallelogram**. Its slanted sides are longer than the stack's straight sides were.

So which side view has the bigger area, the straight stack or the slanted one? The slanted one has longer sides
all round, so it looks bigger. But it is made of exactly the same cards. By the end of this lesson you will know why
the areas are **equal**, and how to find the area of any parallelogram.

## The idea

### What a parallelogram is

A **parallelogram** is a four-sided shape whose opposite sides are **parallel**: they run in the same direction and
never meet, like the two rails of a train track. In a parallelogram, opposite sides are also the same length.
Rectangles and squares are parallelograms too, but most parallelograms lean over to one side. (The whole family of
four-sided shapes is in [Geometry](../../geometry/level-3/05-quadrilateral-family.md).)

### Base and height

To find an area, we pick one side and call it the **base**. Usually it is the side at the bottom, but any side can be
the base.

The **height** is the distance from the base straight across to the opposite side, measured **at a right angle**
(square corner) to the base. Picture the parallelogram standing on its base on the floor: the height is how tall it
stands, the way you would measure your own height, straight up, not along a slope.

The height is **not** the slanted side. The slanted side is always longer than the height (unless the shape is a
rectangle, when they are the same). In drawings the height is often a dashed line with a small square at its foot,
showing the right angle.

### Cut, slide, and you have a rectangle

Here is the reason for the formula. Draw a height from the top-left corner down to the base. It cuts off a
triangle on the left. Slide that triangle all the way to the right end.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 140" role="img" aria-label="A parallelogram with a triangle cut from its left end by the height, and the same triangle moved to its right end to make a rectangle with the same base and height">
  <polygon points="20,110 140,110 180,30 60,30" fill="#9cc9ea"/>
  <polygon points="20,110 60,110 60,30" fill="#eea66f"/>
  <polygon points="20,110 140,110 180,30 60,30" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="60" y1="30" x2="60" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="60,100 70,100 70,110" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="80" y="128" font-size="13" text-anchor="middle" fill="currentColor">base</text>
  <text x="74" y="66" font-size="13" fill="currentColor">height</text>
  <text x="225" y="76" font-size="24" text-anchor="middle" fill="currentColor">→</text>
  <rect x="290" y="30" width="120" height="80" fill="#9cc9ea"/>
  <polygon points="370,110 410,110 410,30" fill="#eea66f"/>
  <rect x="290" y="30" width="120" height="80" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="370" y1="110" x2="410" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="350" y="128" font-size="13" text-anchor="middle" fill="currentColor">same base, same height</text>
</svg>
</div>

Does the triangle really fit perfectly into the gap on the right? Yes, and here is why. The gap on the right is also
a right triangle. Its slanted side is the right-hand side of the parallelogram, which is the **same length** as the
left-hand side and leans the **same way** (opposite sides of a parallelogram are equal and parallel). Its upright
side is a height too, the same distance between the same two parallel lines. So the gap is an exact copy of the
piece we cut off, and the piece drops in with no gap and no overlap.

Now we have a rectangle. Nothing was added and nothing was thrown away, so it has **the same area** as the
parallelogram. Its length is the parallelogram's base (we took a piece off the left and added the same amount on the
right) and its width is the parallelogram's height. A rectangle's area is length × width, so

$$\text{area of a parallelogram} = \text{base} \times \text{height}, \qquad A = b \times h$$

### The stack of cards

The card stack from the start gives a second reason, and it works for parallelograms of any slant.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 130" role="img" aria-label="A straight stack of eight cards seen from the side, and the same stack pushed sideways into a parallelogram. The height and the base stay the same">
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="0.8">
    <rect x="30" y="20" width="120" height="10"/><rect x="30" y="30" width="120" height="10"/>
    <rect x="30" y="40" width="120" height="10"/><rect x="30" y="50" width="120" height="10"/>
    <rect x="30" y="60" width="120" height="10"/><rect x="30" y="70" width="120" height="10"/>
    <rect x="30" y="80" width="120" height="10"/><rect x="30" y="90" width="120" height="10"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="0.8">
    <rect x="290" y="20" width="120" height="10"/><rect x="280" y="30" width="120" height="10"/>
    <rect x="270" y="40" width="120" height="10"/><rect x="260" y="50" width="120" height="10"/>
    <rect x="250" y="60" width="120" height="10"/><rect x="240" y="70" width="120" height="10"/>
    <rect x="230" y="80" width="120" height="10"/><rect x="220" y="90" width="120" height="10"/>
  </g>
  <text x="185" y="64" font-size="24" text-anchor="middle" fill="currentColor">→</text>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="90" y="118">straight stack</text><text x="315" y="118">pushed: same cards, same area</text>
  </g>
</svg>
</div>

Pushing the stack does not change any card. Each card keeps its length and its thickness, and the number of cards
stays the same. So the total area of the side view stays the same. The height of the stack does not change either,
and neither does the length of the bottom card, the base. A parallelogram is just a pushed-over rectangle, with the
same base, the same height and the same area. With thinner and thinner cards, the jagged edge becomes a perfectly
straight slanted side.

This is a famous idea, sometimes called **Cavalieri's principle** after the Italian mathematician Bonaventura
Cavalieri, who wrote about it in the 1600s: if two shapes have equal slices at every height, they have equal areas.
You will meet it again for volumes.

### When the height falls outside

If a parallelogram leans a lot, a height drawn from a top corner may land **outside** the base. Then extend the base
line (dashes) and measure the height to that line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="A steeply leaning parallelogram with a short base. Its height, drawn from a top corner, lands outside the base on the extended base line">
  <polygon points="120,120 190,120 310,40 240,40" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <line x1="190" y1="120" x2="260" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="240" y1="40" x2="240" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="230,120 230,110 240,110" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="13" fill="currentColor">
    <text x="155" y="138" text-anchor="middle">base</text>
    <text x="246" y="86">height</text>
    <text x="300" y="138">base line extended</text>
  </g>
</svg>
</div>

The formula still works: area = base × height. The one cut does not turn this shape into a rectangle, but the card
stack argument does not care how far the cards were pushed: same base, same height, same area. (You can also make
several cuts and slides; the pieces always rebuild a rectangle of the same base and height.)

### Any side can be the base

A parallelogram has two pairs of sides, so it has two possible bases, each with **its own** height. The height must
always go with the base it stands on: it is the distance between that base and the side opposite **it**.

If a parallelogram has sides 12 cm and 7 cm, and the height onto the 12 cm side is 5 cm, then its area is
$12 \times 5 = 60$ cm². Standing it on the 7 cm side must give the same area, so the height onto that side is
$60 \div 7 \approx 8.6$ cm. Same shape, same area, two different base-and-height pairs.

## Worked examples

**1. The basic formula.** A parallelogram has base 9 cm and height 4 cm. Its area is $9 \times 4 = 36$ cm².

**2. Ignore the slanted side.** A parallelogram has base 12 m, slanted sides of 7 m, and height 5 m.

Area $= 12 \times 5 = 60$ m². The 7 m is not needed: it would be used for the **perimeter**,
$12 + 7 + 12 + 7 = 38$ m, but not for the area.

**3. Missing height.** A parallelogram has area 72 cm² and base 8 cm. How tall is it?

$8 \times h = 72$, so $h = 72 \div 8 = 9$ cm.

**4. On a grid.** A parallelogram on squared paper has corners at grid points. Its bottom side runs 6 squares
along, and its top side is 3 squares higher, shifted 2 squares to the right. Its area?

Base 6, height 3 (the straight-up distance between the two sides, counted in squares). Area $= 6 \times 3 = 18$
squares. The shift of 2 squares makes no difference; any shift would give 18.

**5. The card stack.** The straight stack is 9 cm long and 2 cm tall. Pushed over, its slanted sides are 3 cm long.
What is the area of the side view now?

It is the same stack, with the same base (9 cm) and the same height (2 cm): $9 \times 2 = 18$ cm², before and after.

**6. A rhombus.** A **rhombus** is a parallelogram with all four sides equal. A rhombus has sides of 10 cm and a
height of 6 cm. Area $= 10 \times 6 = 60$ cm².

## Try it

1. Find the area: (a) base 7 cm, height 5 cm; (b) base 2.5 m, height 4 m.
2. A parallelogram has base 15 cm, slanted side 9 cm and height 8 cm. Find its area and its perimeter.
3. A parallelogram has area 91 m² and height 7 m. How long is its base?
4. On squared paper, draw three different parallelograms each with base 4 squares and height 3 squares. What is the
   area of each?
5. A parallelogram has sides 10 cm and 6 cm. The height onto the 10 cm side is 3 cm. Find the area, and then the
   height onto the 6 cm side.
6. A rectangle 8 cm by 5 cm is pushed over into a parallelogram, keeping the 8 cm sides at the top and bottom but
   tilting the 5 cm sides. Is the new area bigger, smaller or the same? (Careful: here the sides keep their length,
   unlike the cards.)
7. Why can the slanted side of a parallelogram never be shorter than its height?

??? note "Answers"
    1. (a) $7 \times 5 = 35$ cm². (b) $2.5 \times 4 = 10$ m².
    2. Area $= 15 \times 8 = 120$ cm². Perimeter $= 15 + 9 + 15 + 9 = 48$ cm.
    3. $b \times 7 = 91$, so $b = 91 \div 7 = 13$ m.
    4. Each one has area $4 \times 3 = 12$ squares, however far the top is shifted.
    5. Area $= 10 \times 3 = 30$ cm². Standing on the 6 cm side, $6 \times h = 30$, so the height is $h = 5$ cm.
    6. **Smaller.** The 5 cm sides are now slanted, so the height is less than 5 cm, while the base is still 8 cm.
       Area = base × height is less than $8 \times 5 = 40$ cm². (This is different from the card stack: pushing
       cards keeps the height and makes the slanted sides longer; tilting a hinged frame keeps the side length and
       makes the height shorter.)
    7. The height and the slanted side both join the base line to the opposite side. The height goes straight
       across, at a right angle, and the straight-across path is the shortest one. Any slanted path between the same
       two parallel lines is longer. (In fact the height and slanted side make a right triangle, with the slanted
       side as its longest side.)

## Common mistake

**Multiplying the two sides.** For a rectangle, length × width works because the width **is** the height. For a
slanted parallelogram, base × slanted side gives too big an answer. With sides 12 m and 7 m and height 5 m, the
area is 60 m², not 84 m².

**Mixing up a base and the wrong height.** Each base has its own height, measured at a right angle to **that** base.
Do not multiply one side by the height that belongs to the other side.

## Where it leads

- Next: [Area of a triangle](02-triangle-area.md), which is exactly half a parallelogram.
- [Level 4 page](index.md) · [Measurement topic page](../index.md)
- Back to rows of squares: [Area of rectangles](../level-3/05-area-rectangles.md) in level 3.
- Parallel lines and the angles they make: [Angles with parallel lines](../../geometry/level-4/04-parallel-line-angles.md)
  in Geometry.
- Cavalieri's slices come back for volumes of prisms in [level 5](../level-5/index.md).
