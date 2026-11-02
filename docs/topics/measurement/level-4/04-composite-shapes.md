---
title: "Composite shapes"
---

# Composite shapes

*Measurement · level 4, lesson 4 of 7*

## A question to start

A room is shaped like a capital L. It is what you get from a 10 m by 8 m rectangle when a 4 m by 3 m corner is
taken out. You walk all the way round the walls of the L-shaped room, then all the way round the walls of the full
10 m by 8 m rectangle. Which walk is longer?

They are **the same**: 36 m each. But the L-shaped room has **less floor**: 68 m² instead of 80 m². The perimeter
did not notice the missing corner, but the area did. This lesson is about shapes like this, made of simpler
shapes, and how to find their area in more than one way.

## The idea

### Shapes made of shapes

A **composite shape** is a shape made by joining simpler shapes together, such as rectangles, triangles and
trapezoids. Most real floors, gardens, walls and fields are composite shapes. There is no single formula for them,
and you do not need one. You need two moves:

- **Add**: cut the shape into simple pieces, find each piece's area, and add.
- **Subtract**: start with a simple shape that is too big, and take away the area of the part that is missing.

Both moves rest on one basic fact about area: **area adds up**. If a shape is split into pieces that do not overlap,
the area of the whole is the sum of the areas of the pieces. That is just counting squares in groups: every square
of the whole is in exactly one piece.

### Find the missing lengths first

Drawings of composite shapes often leave out some lengths, because they can be worked out. In a shape with only
right angles, the trick is: **the lengths along the top add up to the length along the bottom**, and **the lengths
up the left add up to the lengths up the right**. Whichever way you walk from one side to the other, you cover the
same distance.

### Three ways to find the L

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 175" role="img" aria-label="The L-shaped room drawn twice. Left: cut by an upright line into a 6 by 8 piece and a 4 by 5 piece. Right: a 10 by 8 rectangle with a dashed 4 by 3 corner taken away">
  <rect x="20" y="20" width="90" height="120" fill="#9cc9ea"/>
  <rect x="110" y="65" width="60" height="75" fill="#7ccf9a"/>
  <polygon points="20,140 170,140 170,65 110,65 110,20 20,20" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="65" x2="110" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="95" y="157">10 m</text><text x="65" y="14">6 m</text><text x="140" y="59">4 m</text>
    <text x="10" y="84">8</text><text x="182" y="106">5</text><text x="118" y="46">3</text>
    <text x="65" y="85">6 × 8</text><text x="140" y="106">4 × 5</text>
  </g>
  <polygon points="250,140 400,140 400,65 340,65 340,20 250,20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="340" y="20" width="60" height="45" fill="#eea66f" opacity="0.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="325" y="157">10 m</text><text x="240" y="84">8</text>
    <text x="370" y="47">4 × 3</text><text x="295" y="95">10 × 8</text>
    <text x="325" y="172">minus the corner</text><text x="95" y="172">add two pieces</text>
  </g>
</svg>
</div>

First the missing lengths. Along the top: $6 + 4 = 10$ ✓ (matches the bottom). Up the sides: the right side is 5 m,
the step up is 3 m, and $5 + 3 = 8$ ✓ (matches the left side).

- **Add, cutting upright.** A 6 m by 8 m piece and a 4 m by 5 m piece: $48 + 20 = 68$ m².
- **Add, cutting across.** Cut along the line 5 m up instead. The bottom piece is 10 m by 5 m, and the top piece is
  6 m by 3 m: $50 + 18 = 68$ m².
- **Subtract.** The full rectangle is $10 \times 8 = 80$ m², and the missing corner is $4 \times 3 = 12$ m²:
  $80 - 12 = 68$ m².

Three methods, one answer. When you can, do it two ways: if they agree, you can be confident.

### Why the perimeter stayed the same

The full rectangle's perimeter is $2 \times (10 + 8) = 36$ m. Walking round the L: $10 + 5 + 4 + 3 + 6 + 8 = 36$ m.
Taking out the corner removed two walls (4 m and 3 m) from the outside, but added two new walls of exactly the same
lengths on the inside of the step. So the perimeter did not change, while the area lost 12 m². Area and perimeter
measure different things, and they do not have to move together.

### Holes and borders

Subtracting is the natural move when there is a **hole**: a lawn with a pond, a wall with a window, a picture
inside a frame. The area you want is the outside shape **minus** the hole.

A **border** (a path round a pool, a frame round a picture) is the same idea: big rectangle minus small rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 185" role="img" aria-label="A 10 by 5 metre pool with a path 1 metre wide all round it. The outside edge of the path is 12 by 7 metres">
  <rect x="30" y="20" width="240" height="140" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="50" y="40" width="200" height="100" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="150" y="94">pool 10 m × 5 m</text>
    <text x="150" y="178">outside 12 m</text>
    <text x="16" y="94">7</text>
    <text x="150" y="33">path 1 m wide</text>
  </g>
</svg>
</div>

Watch the outside lengths: a path 1 m wide adds 1 m on **both** ends, so the outside is $10 + 2 = 12$ m long and
$5 + 2 = 7$ m wide.

### Mixing shapes

Composite shapes can include triangles and trapezoids as well as rectangles. The end wall of a house, for example, is
often a rectangle with a triangle on top (the **gable**). Cut along the line where the roof starts, find both areas,
and add.

## Worked examples

**1. The L-shaped room** (above): **68 m²**, by three methods.

**2. A gable wall.** The end wall of a shed is a rectangle 8 m wide and 3 m tall, with a triangle on top whose
peak is 2 m above the top of the rectangle. There is a door 2 m tall and 0.9 m wide. How much wall needs paint?

- Rectangle: $8 \times 3 = 24$ m².
- Triangle: base 8 m, height 2 m: $\tfrac12 \times 8 \times 2 = 8$ m².
- Door (a hole, so subtract): $2 \times 0.9 = 1.8$ m².
- Paint: $24 + 8 - 1.8 = 30.2$ m².

**3. The pool path.** Pool 10 m by 5 m, path 1 m wide all round.

Outside: $12 \times 7 = 84$ m². Pool: $10 \times 5 = 50$ m². Path: $84 - 50 = 34$ m².

Check by adding: the path is two long strips 12 m by 1 m along the top and bottom ($2 \times 12 = 24$ m²) and two
short strips **between** them, 5 m by 1 m ($2 \times 5 = 10$ m²). $24 + 10 = 34$ m² ✓. (Careful not to count the
corners twice.)

**4. A T-shape.** A T-shaped patio has a top bar 9 m by 2 m and a stem 3 m wide that goes 5 m down from the bar.

Bar: $9 \times 2 = 18$ m². Stem: $3 \times 5 = 15$ m². Total: $18 + 15 = 33$ m².

**5. A field with a trapezoid.** A field is a rectangle 40 m by 30 m with a trapezoid-shaped strip added on one 30 m
side. The strip's parallel sides are 30 m (along the rectangle) and 20 m, and it is 10 m wide.

Rectangle: $40 \times 30 = 1200$ m². Trapezoid: $\tfrac12 (30 + 20) \times 10 = 250$ m². Field: $1450$ m².

**6. Turf cost.** Turf costs 8 dollars per square metre. How much to turf the field in example 5?

$1450 \times 8 = 11\,600$ dollars.

## Try it

1. An L-shape is a 12 cm by 9 cm rectangle with a 5 cm by 4 cm corner removed. Find its area two ways, and its
   perimeter.
2. A picture is 30 cm by 20 cm. Its frame is 5 cm wide all round. What is the area of the frame alone?
3. A wall is 5 m long and 2.4 m high, with a window 1.5 m by 1.2 m. Find the area to be wallpapered.
4. A house end wall is a rectangle 6 m wide and 2.5 m tall with a triangular gable 6 m wide and 1.5 m tall on top.
   Find its area.
5. A U-shape is made from a 10 m by 6 m rectangle by cutting a 4 m by 4 m notch out of the middle of the top edge.
   Find its area and its perimeter.
6. A square garden has sides of 8 m. A square pond with sides of 3 m is in the middle. Turf costs 6 dollars per
   square metre. How much for the turf?
7. A shape is a rectangle 6 cm by 4 cm with a right triangle stuck on its right end. The triangle shares the 4 cm
   side and sticks out 3 cm. Find the area.

??? note "Answers"
    1. Subtract: $12 \times 9 - 5 \times 4 = 108 - 20 = 88$ cm². Add (one way): cut upright where the corner
       starts. One piece is $(12 - 5) \times 9 = 7 \times 9 = 63$ cm², the other $5 \times (9 - 4) = 5 \times 5 = 25$
       cm²; $63 + 25 = 88$ cm² ✓. Perimeter: the same as the full rectangle, $2 \times (12 + 9) = 42$ cm.
    2. Outside: $(30 + 10) \times (20 + 10) = 40 \times 30 = 1200$ cm². Picture: $30 \times 20 = 600$ cm².
       Frame: $1200 - 600 = 600$ cm². (The frame is exactly as big as the picture!)
    3. $5 \times 2.4 - 1.5 \times 1.2 = 12 - 1.8 = 10.2$ m².
    4. $6 \times 2.5 + \tfrac12 \times 6 \times 1.5 = 15 + 4.5 = 19.5$ m².
    5. Area: $10 \times 6 - 4 \times 4 = 60 - 16 = 44$ m². Perimeter: the outside of the rectangle is
       $2 \times (10 + 6) = 32$ m. The notch removes 4 m of the top edge but adds three inside edges,
       $4 + 4 + 4 = 12$ m. So $32 - 4 + 12 = 40$ m. (This time the perimeter **grew**: a notch in the middle of a
       side adds two walls that a corner cut does not.)
    6. Turf area: $8 \times 8 - 3 \times 3 = 64 - 9 = 55$ m². Cost: $55 \times 6 = 330$ dollars.
    7. Rectangle $6 \times 4 = 24$ cm², triangle $\tfrac12 \times 4 \times 3 = 6$ cm². Total $30$ cm².

## Common mistake

**Counting a piece twice, or using a wrong missing length.** When you cut a shape, make sure the pieces do not
overlap, and work out every missing length from the ones given before you multiply. In the pool path, the corners
belong to the long strips **or** the short strips, not both.

**Thinking a smaller area means a smaller perimeter.** Cutting a corner out of a rectangle keeps the perimeter the
same, and cutting a notch out of a side makes it longer, even though the area goes down both times.

## Where it leads

- Previous: [Area of a trapezoid](03-trapezoid-area.md). Next: [Volume by counting cubes](05-volume-cubes.md), where
  area becomes the floor of a box.
- [Level 4 page](index.md) · [Measurement topic page](../index.md)
- Same perimeter, different area first came in [Area by counting squares](../level-3/04-area-counting-squares.md).
- Circles, and shapes with round parts such as a lawn with a round pond, need the circle area formula from
  [Geometry](../../geometry/level-6/05-circle-area-sectors.md).
- Turf at 8 dollars per square metre is a rate: [Rates and unit rates](../../ratio/level-3/04-rates-unit-rates.md).
