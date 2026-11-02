---
title: "Counting shapes in a picture"
---

# Counting shapes in a picture

*Counting and combinations · level 2, lesson 6 of 6*

## A question to start

How many triangles can you see in this picture?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 195" role="img" aria-label="A triangle with its top corner at the top. Two lines go from the top corner down to the bottom side, cutting the triangle into 3 thin triangles. The four points on the bottom side are labelled A, B, C and D.">
  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
    <polygon points="210,20 60,160 360,160"/>
    <line x1="210" y1="20" x2="160" y2="160"/><line x1="210" y1="20" x2="260" y2="160"/>
  </g>
  <g fill="currentColor"><circle cx="60" cy="160" r="4"/><circle cx="160" cy="160" r="4"/><circle cx="260" cy="160" r="4"/><circle cx="360" cy="160" r="4"/></g>
  <g font-size="14" fill="currentColor" text-anchor="middle"><text x="60" y="182">A</text><text x="160" y="182">B</text><text x="260" y="182">C</text><text x="360" y="182">D</text></g>
</svg>
</div>

Most people see the 3 thin triangles straight away and say "3". Some spot the big one around the outside and say
"4". But there are **6**. Shapes in a picture love to hide inside each other, and some of them are made of two or
more pieces stuck together. In this lesson you will learn to find **every** hidden shape by counting in an organised
way, and you will see the handshake numbers pop up where you least expect them.

## The idea

### Shapes made of pieces

The two lines cut the big triangle into 3 small **pieces**. But a triangle in the picture does not have to be a
single piece. Two pieces side by side can make a bigger triangle, and all three pieces together make the biggest.

So we must count triangles of **every size**. The tidy way is to count **by size**:

- Triangles made of **1 piece**: 3.
- Triangles made of **2 pieces** next to each other: the left two pieces together, and the right two pieces
  together. That is 2.
- Triangles made of **3 pieces**: the whole big triangle. That is 1.

3 + 2 + 1 = **6 triangles**. Here they all are, each one shaded:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="Six small copies of the cut triangle, each with one triangle shaded: AB, BC and CD (one part each), AC and BD (two parts each), and AD (the whole triangle).">
  <polygon points="38,15 8,85 28,85" fill="#eea66f"/>
  <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"><polygon points="38,15 8,85 68,85"/><line x1="38" y1="15" x2="28" y2="85"/><line x1="38" y1="15" x2="48" y2="85"/></g>
  <text x="38" y="105" font-size="12" fill="currentColor" text-anchor="middle">AB</text>
  <polygon points="107,15 97,85 117,85" fill="#eea66f"/>
  <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"><polygon points="107,15 77,85 137,85"/><line x1="107" y1="15" x2="97" y2="85"/><line x1="107" y1="15" x2="117" y2="85"/></g>
  <text x="107" y="105" font-size="12" fill="currentColor" text-anchor="middle">BC</text>
  <polygon points="176,15 186,85 206,85" fill="#eea66f"/>
  <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"><polygon points="176,15 146,85 206,85"/><line x1="176" y1="15" x2="166" y2="85"/><line x1="176" y1="15" x2="186" y2="85"/></g>
  <text x="176" y="105" font-size="12" fill="currentColor" text-anchor="middle">CD</text>
  <polygon points="245,15 215,85 255,85" fill="#9cc9ea"/>
  <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"><polygon points="245,15 215,85 275,85"/><line x1="245" y1="15" x2="235" y2="85"/><line x1="245" y1="15" x2="255" y2="85"/></g>
  <text x="245" y="105" font-size="12" fill="currentColor" text-anchor="middle">AC</text>
  <polygon points="314,15 304,85 344,85" fill="#9cc9ea"/>
  <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"><polygon points="314,15 284,85 344,85"/><line x1="314" y1="15" x2="304" y2="85"/><line x1="314" y1="15" x2="324" y2="85"/></g>
  <text x="314" y="105" font-size="12" fill="currentColor" text-anchor="middle">BD</text>
  <polygon points="383,15 353,85 413,85" fill="#7ccf9a"/>
  <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"><polygon points="383,15 353,85 413,85"/><line x1="383" y1="15" x2="373" y2="85"/><line x1="383" y1="15" x2="393" y2="85"/></g>
  <text x="383" y="105" font-size="12" fill="currentColor" text-anchor="middle">AD</text>
</svg>
</div>

### Why the handshake numbers?

Look at the names under the triangles: AB, BC, CD, AC, BD, AD. Every triangle in this picture has its top at the
top corner, and its bottom side runs along the bottom line from one of the points A, B, C, D to another. So to choose
a triangle, you only have to choose **2 of the 4 points** on the bottom. The order does not matter (from A to C is
the same side as from C to A).

Choosing 2 of 4 things, where order does not matter, is exactly a **handshake** between 4 friends! There are
**6** handshakes for 4 friends, so there are 6 triangles. And now we can be **sure** there are no more: every
triangle gives a pair of bottom points, every pair gives a triangle.

With 3 lines from the top, there would be 5 points on the bottom, and the triangles would be the handshakes of 5
friends: **10**. Check by size: 4 one-piece, 3 two-piece, 2 three-piece, 1 four-piece: 4 + 3 + 2 + 1 = 10. ✓

### Rectangles in a grid

Here is a grid 2 squares tall and 3 squares wide, like a tiny chocolate bar. How many rectangles can you find in it?
(Remember: a square is a special rectangle, so squares count too.)

Count **by size**. Write "1 by 2" for a rectangle 1 square tall and 2 squares wide.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 135" role="img" aria-label="Six small copies of a grid 2 squares tall and 3 squares wide. Each shades one rectangle of a different size: 1 by 1 (6 of these), 1 tall by 2 wide (4), 1 tall by 3 wide (2), 2 tall by 1 wide (3), 2 by 2 (2), and the whole 2 by 3 grid (1).">
  <rect x="10" y="30" width="18" height="18" fill="#eea66f"/>
  <g stroke="currentColor" stroke-width="1.2"><line x1="10" y1="30" x2="10" y2="66"/><line x1="28" y1="30" x2="28" y2="66"/><line x1="46" y1="30" x2="46" y2="66"/><line x1="64" y1="30" x2="64" y2="66"/><line x1="10" y1="30" x2="64" y2="30"/><line x1="10" y1="48" x2="64" y2="48"/><line x1="10" y1="66" x2="64" y2="66"/></g>
  <text x="37" y="18" font-size="11" fill="currentColor" text-anchor="middle">1 by 1</text>
  <text x="37" y="98" font-size="12" fill="currentColor" text-anchor="middle">6</text>
  <rect x="79" y="30" width="36" height="18" fill="#eea66f"/>
  <g stroke="currentColor" stroke-width="1.2"><line x1="79" y1="30" x2="79" y2="66"/><line x1="97" y1="30" x2="97" y2="66"/><line x1="115" y1="30" x2="115" y2="66"/><line x1="133" y1="30" x2="133" y2="66"/><line x1="79" y1="30" x2="133" y2="30"/><line x1="79" y1="48" x2="133" y2="48"/><line x1="79" y1="66" x2="133" y2="66"/></g>
  <text x="106" y="18" font-size="11" fill="currentColor" text-anchor="middle">1 by 2</text>
  <text x="106" y="98" font-size="12" fill="currentColor" text-anchor="middle">4</text>
  <rect x="148" y="30" width="54" height="18" fill="#eea66f"/>
  <g stroke="currentColor" stroke-width="1.2"><line x1="148" y1="30" x2="148" y2="66"/><line x1="166" y1="30" x2="166" y2="66"/><line x1="184" y1="30" x2="184" y2="66"/><line x1="202" y1="30" x2="202" y2="66"/><line x1="148" y1="30" x2="202" y2="30"/><line x1="148" y1="48" x2="202" y2="48"/><line x1="148" y1="66" x2="202" y2="66"/></g>
  <text x="175" y="18" font-size="11" fill="currentColor" text-anchor="middle">1 by 3</text>
  <text x="175" y="98" font-size="12" fill="currentColor" text-anchor="middle">2</text>
  <rect x="217" y="30" width="18" height="36" fill="#9cc9ea"/>
  <g stroke="currentColor" stroke-width="1.2"><line x1="217" y1="30" x2="217" y2="66"/><line x1="235" y1="30" x2="235" y2="66"/><line x1="253" y1="30" x2="253" y2="66"/><line x1="271" y1="30" x2="271" y2="66"/><line x1="217" y1="30" x2="271" y2="30"/><line x1="217" y1="48" x2="271" y2="48"/><line x1="217" y1="66" x2="271" y2="66"/></g>
  <text x="244" y="18" font-size="11" fill="currentColor" text-anchor="middle">2 by 1</text>
  <text x="244" y="98" font-size="12" fill="currentColor" text-anchor="middle">3</text>
  <rect x="286" y="30" width="36" height="36" fill="#9cc9ea"/>
  <g stroke="currentColor" stroke-width="1.2"><line x1="286" y1="30" x2="286" y2="66"/><line x1="304" y1="30" x2="304" y2="66"/><line x1="322" y1="30" x2="322" y2="66"/><line x1="340" y1="30" x2="340" y2="66"/><line x1="286" y1="30" x2="340" y2="30"/><line x1="286" y1="48" x2="340" y2="48"/><line x1="286" y1="66" x2="340" y2="66"/></g>
  <text x="313" y="18" font-size="11" fill="currentColor" text-anchor="middle">2 by 2</text>
  <text x="313" y="98" font-size="12" fill="currentColor" text-anchor="middle">2</text>
  <rect x="355" y="30" width="54" height="36" fill="#9cc9ea"/>
  <g stroke="currentColor" stroke-width="1.2"><line x1="355" y1="30" x2="355" y2="66"/><line x1="373" y1="30" x2="373" y2="66"/><line x1="391" y1="30" x2="391" y2="66"/><line x1="409" y1="30" x2="409" y2="66"/><line x1="355" y1="30" x2="409" y2="30"/><line x1="355" y1="48" x2="409" y2="48"/><line x1="355" y1="66" x2="409" y2="66"/></g>
  <text x="382" y="18" font-size="11" fill="currentColor" text-anchor="middle">2 by 3</text>
  <text x="382" y="98" font-size="12" fill="currentColor" text-anchor="middle">1</text>
  <text x="210" y="125" font-size="12" fill="currentColor" text-anchor="middle">6 + 4 + 2 + 3 + 2 + 1 = 18 rectangles</text>
</svg>
</div>

| size (tall by wide) | 1 by 1 | 1 by 2 | 1 by 3 | 2 by 1 | 2 by 2 | 2 by 3 |
| --- | --- | --- | --- | --- | --- | --- |
| how many | 6 | 4 | 2 | 3 | 2 | 1 |

How do we count each size without missing any? Slide it. A 1-by-2 rectangle fits in the top row in 2 places (left or
right), and in the bottom row in 2 places: 2 + 2 = 4. A 2-by-1 rectangle is as tall as the whole grid, so it can
only slide sideways: 3 places. Do this for each size, and add:

6 + 4 + 2 + 3 + 2 + 1 = **18 rectangles**.

### A cleverer way: choosing lines

Look at the edges of any rectangle in the grid. Its left and right sides lie on 2 of the **4 up-and-down lines** of
the grid. Its top and bottom lie on 2 of the **3 across lines**. And if you choose any 2 up-and-down lines and any 2
across lines, they always make exactly one rectangle.

- Choosing 2 of the 4 up-and-down lines is a handshake between 4: **6 ways**.
- Choosing 2 of the 3 across lines is a handshake between 3: **3 ways**.
- A rectangle needs a pair of up-and-down lines **and** a pair of across lines. "And" multiplies: 6 × 3 = **18**. ✓

Two very different ways, the same answer. When that happens, you can be confident. The second way also works for
much bigger grids, where sliding every size would take ages.

### Squares only

How many **squares** are in the same grid? Only the 1-by-1 and 2-by-2 sizes are squares: 6 + 2 = **8 squares**.

## Worked examples

**1. A triangle cut into four.** Join the middles of the three sides of a triangle. How many triangles do you see?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 165" role="img" aria-label="A big triangle with the middles of its sides joined, making 4 small triangles: 3 pointing up at the corners and 1 pointing down in the middle">
  <polygon points="210,20 90,150 330,150" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="150,85 270,85 210,150" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>
</div>

By size: **4 small** triangles (3 pointing up at the corners, and 1 pointing **down** in the middle, which is the one
people often miss). Medium: none, because no two small triangles together make a triangle (they make a
four-sided shape). Big: **1**. Total: 4 + 1 = **5 triangles**.

**2. Squares in a 3-by-3 grid.** Count by size.

- 1 by 1: 3 rows of 3, which is **9**.
- 2 by 2: it can sit in 2 places across and 2 places down: 2 × 2 = **4**.
- 3 by 3: the whole grid, **1**.

9 + 4 + 1 = **14 squares**. (Notice: 9, 4 and 1 are 3 × 3, 2 × 2 and 1 × 1.)

**3. Rectangles in a strip.** A strip is 1 square tall and 3 squares wide. How many rectangles?

By size: 3 of 1 by 1, 2 of 1 by 2, 1 of 1 by 3: 3 + 2 + 1 = **6**. By choosing lines: the strip has 4 up-and-down
lines (6 handshakes) and only 2 across lines (1 way to choose both): 6 × 1 = **6**. ✓

## Try it

1. A triangle has **one** line from the top corner to the bottom side. How many triangles?
2. A triangle has **three** lines from the top corner to the bottom side. How many triangles? Do it by size, then
   check with handshakes.
3. How many rectangles are in a strip 1 square tall and 4 squares wide?
4. How many rectangles are in a 2-by-2 grid? (Count by size, then check by choosing lines.)
5. How many squares are in a 2-by-4 grid?
6. How many rectangles are in a 3-by-3 grid? (Use choosing lines.)
7. Make up your own: draw a triangle with 4 lines from the top corner. How many triangles does it have?

??? note "Answers"
    1. **3**: the 2 pieces and the whole triangle. (2 + 1 = 3, or the handshakes of the 3 bottom points.)
    2. By size: 4 + 3 + 2 + 1 = **10**. There are 5 points on the bottom, and 5 friends make 10 handshakes. ✓
    3. By size: 4 + 3 + 2 + 1 = **10**. By lines: 5 up-and-down lines give 10 pairs, and the 2 across lines give 1
       pair: 10 × 1 = 10. ✓
    4. By size: 4 of 1 by 1, 2 of 1 by 2, 2 of 2 by 1, 1 of 2 by 2: 4 + 2 + 2 + 1 = **9**. By lines: 3 up-and-down
       lines give 3 pairs and 3 across lines give 3 pairs: 3 × 3 = 9. ✓
    5. 1 by 1: 2 × 4 = 8. 2 by 2: 1 place down and 3 places across, so 3. Total **11 squares**.
    6. 4 up-and-down lines (6 pairs) and 4 across lines (6 pairs): 6 × 6 = **36 rectangles**.
    7. 5 lines meet the bottom in 6 points (the 2 ends and 4 more), so the triangles are the handshakes of 6:
       6 × 5 = 30, half is **15**. By size: 5 + 4 + 3 + 2 + 1 = 15. ✓

## Common mistake

**Only counting the pieces.** The pieces are just the smallest shapes. Bigger shapes made of several pieces count
too, and so does the whole picture. Always count **by size**, from smallest to biggest.

**Forgetting the upside-down ones.** In the triangle cut into four, the middle triangle points down. Turn the page
around in your head: a shape is still a triangle whichever way it points.

## Where it leads

- Previous: [Handshakes and diagonals](05-handshakes-diagonals.md) · Next level: [Level 3: Counting with care](../level-3/index.md),
  where you will count squares and rectangles on a whole chessboard.
- [Level 2 page](index.md) · [Counting topic page](../index.md)
- Triangles, squares and rectangles, and why a square is a special rectangle: [Geometry level 1](../../geometry/level-1/01-naming-shapes.md).
- Joining the middles of the sides of a triangle makes 4 triangles that are all the same shape and size:
  you can tile with them, as in [Geometry level 2: tiling the floor](../../geometry/level-2/05-tiling-the-floor.md).
- The squares 1, 4, 9 and their sums are a pattern of their own: [Patterns](../../patterns/index.md).
