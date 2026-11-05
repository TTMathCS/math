---
title: "Area by counting squares"
---

# Area by counting squares

*Measurement · level 3, lesson 4 of 6*

## A question to start

You have **12 metres of fence** to make a pen for a rabbit, and you want the pen to be a rectangle. You could make
it long and thin, 5 m by 1 m. Or you could make it a square, 3 m by 3 m. Both use all 12 m of fence:
$5 + 1 + 5 + 1 = 12$ and $3 + 3 + 3 + 3 = 12$.

Does the rabbit get the same amount of grass to eat in both pens? Most people guess "yes, the fence is the same". But
the square pen has almost **twice** as much grass. The fence measures the edge; the grass is about the space inside.
That space is called **area**, and in this lesson you learn to measure it.

## The idea

### What area is

**Area** is the amount of flat surface something covers. The top of a table has an area. So does a page, a floor, a
football field and a country. Area answers the question "how much surface?", just as length answers "how long?".

To measure length, we lay rulers or steps end to end and count. To measure area, we **cover** the surface with equal
tiles and count the tiles.

### Square units

Any equal tiles would do, but squares are the best choice, because squares fit together with no gaps, row after row,
like the tiles on a bathroom floor. So area is measured in **square units**.

- A **square centimetre** (cm²) is a square 1 cm long and 1 cm wide, about the size of your fingernail. Good for
  measuring a stamp, a photo or a page.
- A **square metre** (m²) is a square 1 m long and 1 m wide. Four sheets of newspaper taped together make about one
  square metre. Good for measuring a floor, a wall or a garden.
- A **square kilometre** (km²) is a square 1 km long and 1 km wide, used for parks, cities and countries.

The little raised 2 in cm² is read "squared". It is a reminder that a square has **two** directions, a length **and**
a width. "Square centimetre" and "cm²" mean exactly the same thing.

Do not mix up a square centimetre with a centimetre. A centimetre is a length: a short line. A square centimetre is
an area: a little patch of surface.

### Rules for counting

When you count squares to find an area, the same honest rules apply as when you measured length:

1. **No gaps.** Every bit of the shape must be covered.
2. **No overlaps.** No bit may be covered twice.
3. **All the same size.** Every tile must be the same square unit.

### Half squares

Some shapes cut squares in half along a diagonal (corner to corner). A diagonal cuts a square into two triangles
that are exactly the same, so each one is **half a square**. Two halves make one whole.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 190" role="img" aria-label="A right triangle drawn on a square grid. Six whole squares are inside it, and four squares are cut in half by its slanted side">
  <g fill="#7ccf9a">
    <rect x="20" y="140" width="30" height="30"/><rect x="50" y="140" width="30" height="30"/><rect x="80" y="140" width="30" height="30"/>
    <rect x="20" y="110" width="30" height="30"/><rect x="50" y="110" width="30" height="30"/><rect x="20" y="80" width="30" height="30"/>
  </g>
  <g fill="#eea66f">
    <polygon points="20,80 50,80 20,50"/><polygon points="50,110 80,110 50,80"/>
    <polygon points="80,140 110,140 80,110"/><polygon points="110,170 140,170 110,140"/>
  </g>
  <g stroke="currentColor" stroke-width="0.6" opacity="0.6">
    <line x1="20" y1="20" x2="20" y2="170"/><line x1="50" y1="20" x2="50" y2="170"/><line x1="80" y1="20" x2="80" y2="170"/>
    <line x1="110" y1="20" x2="110" y2="170"/><line x1="140" y1="20" x2="140" y2="170"/><line x1="170" y1="20" x2="170" y2="170"/>
    <line x1="20" y1="20" x2="170" y2="20"/><line x1="20" y1="50" x2="170" y2="50"/><line x1="20" y1="80" x2="170" y2="80"/>
    <line x1="20" y1="110" x2="170" y2="110"/><line x1="20" y1="140" x2="170" y2="140"/><line x1="20" y1="170" x2="170" y2="170"/>
  </g>
  <polygon points="20,170 140,170 20,50" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="13" fill="currentColor">
    <rect x="200" y="60" width="14" height="14" fill="#7ccf9a"/><text x="222" y="72">6 whole squares</text>
    <polygon points="200,110 214,110 200,96" fill="#eea66f"/><text x="222" y="108">4 half squares</text>
    <text x="200" y="142">6 + 2 = 8 squares</text>
  </g>
</svg>
</div>

This triangle covers 6 whole squares and 4 half squares. Four halves make 2 wholes, so the area is $6 + 2 = 8$ square
units.

Here is a way to check: the triangle is exactly half of the 4 by 4 square around it (the slanted side cuts that
square corner to corner). The 4 by 4 square has 16 squares, and half of 16 is 8. Both ways agree. Remember this idea:
in [level 4](../level-4/02-triangle-area.md) it becomes the rule for the area of every triangle.

### Curvy shapes: estimating

A circle, a leaf or the outline of your hand does not fit the grid exactly. Then we **estimate**. Here is a circle
drawn on a grid of 1 cm squares.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 190" role="img" aria-label="A circle on a 6 by 6 grid. 16 squares are fully inside, 16 squares are more than half inside, and the 4 corner squares are only a tiny bit inside">
  <rect x="45" y="45" width="100" height="100" fill="#7ccf9a"/>
  <g fill="#9cc9ea">
    <rect x="45" y="20" width="100" height="25"/><rect x="45" y="145" width="100" height="25"/>
    <rect x="20" y="45" width="25" height="100"/><rect x="145" y="45" width="25" height="100"/>
  </g>
  <g stroke="currentColor" stroke-width="0.6" opacity="0.6">
    <line x1="20" y1="20" x2="20" y2="170"/><line x1="45" y1="20" x2="45" y2="170"/><line x1="70" y1="20" x2="70" y2="170"/>
    <line x1="95" y1="20" x2="95" y2="170"/><line x1="120" y1="20" x2="120" y2="170"/><line x1="145" y1="20" x2="145" y2="170"/>
    <line x1="170" y1="20" x2="170" y2="170"/>
    <line x1="20" y1="20" x2="170" y2="20"/><line x1="20" y1="45" x2="170" y2="45"/><line x1="20" y1="70" x2="170" y2="70"/>
    <line x1="20" y1="95" x2="170" y2="95"/><line x1="20" y1="120" x2="170" y2="120"/><line x1="20" y1="145" x2="170" y2="145"/>
    <line x1="20" y1="170" x2="170" y2="170"/>
  </g>
  <circle cx="95" cy="95" r="75" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="13" fill="currentColor">
    <rect x="200" y="60" width="14" height="14" fill="#7ccf9a"/><text x="222" y="72">16 whole</text>
    <rect x="200" y="90" width="14" height="14" fill="#9cc9ea"/><text x="222" y="102">16 more than half</text>
    <text x="200" y="134">4 corners: tiny bits</text>
  </g>
</svg>
</div>

- **Too small:** count only the whole squares inside: **16 cm²**. The real area must be more than this.
- **Too big:** count every square the circle touches at all: **36 cm²**. The real area must be less than this.
- **A good estimate:** count the whole squares, then count each square that is **more than half** inside as one, and
  leave out the ones that are less than half inside. That gives $16 + 16 = 32$ cm².

So the area is somewhere between 16 and 36 cm², and about 32 cm². The true area of this circle is about 28 cm²
(you will learn how to work that out exactly in [Geometry](../../geometry/index.md)). Our estimate is close, but not
perfect. With a **finer** grid, say squares of half a centimetre, the bits we guess about get smaller and the
estimate gets better. Mathematicians use this very idea, with smaller and smaller squares, to find exact areas of
curved shapes.

### Same area, different perimeter

The **perimeter** (from level 2) is the distance all the way around the edge. On a grid you can count it by counting
the edges of squares along the outside.

Here are two shapes, each made of the same 6 squares.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 120" role="img" aria-label="Two shapes made of 6 squares each: a 3 by 2 rectangle with perimeter 10, and a 6 by 1 strip with perimeter 14">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <rect x="20" y="30" width="25" height="25"/><rect x="45" y="30" width="25" height="25"/><rect x="70" y="30" width="25" height="25"/>
    <rect x="20" y="55" width="25" height="25"/><rect x="45" y="55" width="25" height="25"/><rect x="70" y="55" width="25" height="25"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <rect x="150" y="55" width="25" height="25"/><rect x="175" y="55" width="25" height="25"/><rect x="200" y="55" width="25" height="25"/>
    <rect x="225" y="55" width="25" height="25"/><rect x="250" y="55" width="25" height="25"/><rect x="275" y="55" width="25" height="25"/>
  </g>
  <rect x="20" y="30" width="75" height="50" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <rect x="150" y="55" width="150" height="25" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="57.5" y="100">area 6, perimeter 10</text><text x="225" y="100">area 6, perimeter 14</text>
  </g>
</svg>
</div>

Both have area 6 square units, but the 3 by 2 rectangle has perimeter $3 + 2 + 3 + 2 = 10$ units, and the 6 by 1
strip has perimeter $6 + 1 + 6 + 1 = 14$ units.

**Why can the perimeter change when the area does not?** Every square has 4 edges. When two squares sit side by side,
the edge they share is **inside** the shape, so it is not part of the perimeter: two outside edges are lost. The
rectangle has its squares packed tightly, with 7 shared edges, so it loses a lot: $6 \times 4 - 2 \times 7 = 10$. The
strip has only 5 shared edges: $24 - 10 = 14$. **Compact shapes have short edges; stretched shapes have long
edges.**

The same idea works the other way: the same perimeter can surround different areas, which is the rabbit puzzle.

<figure class="play" data-play="area" data-shape="rect"><span class="ai-tag">AI-created</span><figcaption><b>Count the squares.</b> Then check: length × width.</figcaption></figure>

## Worked examples

**1. Counting.** A shape on a centimetre grid covers 9 whole squares and 6 half squares. Its area?

6 halves make 3 wholes, so the area is $9 + 3 = 12$ cm².

**2. The rabbit pens.** Draw each pen on squared paper with one square for each square metre.

- The 5 m by 1 m pen has 1 row of 5 squares: **5 m²**.
- The 3 m by 3 m pen has 3 rows of 3 squares: **9 m²**.

Both have perimeter 12 m. The square pen has 4 m² more grass.

**3. All the rectangles with area 12.** Find every rectangle made of 12 whole squares, and its perimeter.

The rows must share the 12 squares equally: 1 row of 12, 2 rows of 6, or 3 rows of 4 (4 rows of 3 is the same
rectangle turned round).

| Rectangle | Area | Perimeter |
| --- | --- | --- |
| 12 by 1 | 12 | $12 + 1 + 12 + 1 = 26$ |
| 6 by 2 | 12 | $6 + 2 + 6 + 2 = 16$ |
| 4 by 3 | 12 | $4 + 3 + 4 + 3 = 14$ |

The closer the rectangle is to a square, the shorter its perimeter.

**4. Choosing the unit.** Which unit would you use for the area of: a postage stamp; a classroom floor; a lake?

Stamp: cm² (about 6 cm²). Classroom floor: m² (perhaps 60 m²). Lake: km².

**5. A hand.** Trace your hand on centimetre squared paper. Count the whole squares inside, then add the squares
that are more than half inside. Many 10-year-olds get something near 100 cm², give or take a few dozen. Try it with
a grown-up's hand and compare: you will both be estimating, so you will also learn how close two estimates can be.

## Try it

1. A shape covers 14 whole squares and 4 half squares. What is its area?
2. On squared paper, draw two different shapes with area 5 squares. Find the perimeter of each.
3. A rectangle on a grid is 4 squares long and 2 squares wide. What are its area and perimeter?
4. Find all the rectangles made of 16 whole squares. Which has the shortest perimeter?
5. A right triangle on a grid has its two short sides along grid lines, 6 squares and 6 squares long. Its slanted
   side cuts squares corner to corner. What is its area? (Hint: what is it half of?)
6. Can two shapes have the same perimeter but different areas? Give an example on a grid.
7. A kitchen floor is covered by tiles that are each 1 m by 1 m: 4 rows of 5 tiles. What is the area of the floor?
   If every tile were cut into 4 smaller squares of 50 cm by 50 cm, how many small tiles would there be?

??? note "Answers"
    1. 4 halves make 2 wholes, so $14 + 2 = 16$ square units.
    2. Many answers. A row of 5 squares has perimeter $5 + 1 + 5 + 1 = 12$. A plus sign (one square with a square on
       each side) also has area 5, and its perimeter is also 12 (count the outside edges: each of the 4 arms shows
       3 edges). An L-shape (3 in a row with 2 more on top of one end) has area 5 and perimeter 12 as well. A 2 by 2
       square with one extra square stuck on has perimeter 10. Compact shapes have shorter perimeters.
    3. Area $4 \times 2 = 8$ squares (2 rows of 4). Perimeter $4 + 2 + 4 + 2 = 12$ units.
    4. 16 by 1 (perimeter 34), 8 by 2 (perimeter 20) and 4 by 4 (perimeter 16). The **4 by 4 square** has the
       shortest perimeter.
    5. It is half of a 6 by 6 square, which has 36 squares. So its area is $36 \div 2 = 18$ squares. (Counting:
       15 whole squares and 6 half squares, $15 + 3 = 18$. ✓)
    6. Yes. A 5 by 1 rectangle and a 3 by 3 square both have perimeter 12, but areas 5 and 9.
    7. 4 rows of 5 tiles: $4 \times 5 = 20$ m². Each big tile becomes 4 small tiles, so $20 \times 4 = 80$ small
       tiles. (Same floor, same area: only the unit changed.)

## Common mistake

**Mixing up area and perimeter.** Perimeter is a **length** (the fence), counted in cm or m. Area is a **surface**
(the grass), counted in cm² or m². If a question asks "how much carpet?" it wants area; "how much skirting board
around the edge?" wants perimeter.

**Counting half squares as whole ones.** When a slanted line cuts squares corner to corner, each piece is only
half. Pair the halves up before you count.

## Where it leads

- Previous: [Elapsed time and the 24-hour clock](03-elapsed-time.md). Next: [Area of rectangles](05-area-rectangles.md),
  where counting rows of squares becomes multiplying.
- [Level 3 page](index.md) · [Measurement topic page](../index.md)
- Perimeter first came in [level 2](../level-2/index.md).
- The half-square triangle grows into the [area of a triangle](../level-4/02-triangle-area.md) in level 4.
- Squares fitting with no gaps is called tiling: [Tiling the floor](../../geometry/level-2/05-tiling-the-floor.md) in
  Geometry.
