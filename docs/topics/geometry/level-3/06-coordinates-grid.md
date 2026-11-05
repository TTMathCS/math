---
title: "Coordinates: finding points on a grid"
---

# Coordinates: finding points on a grid

*Geometry · level 3, lesson 6 of 6*

## A question to start

You want to tell a friend exactly where you hid a coin on a big sheet of squared paper. You are not allowed to point,
and you cannot draw on the sheet. You may only say **two numbers**. Which two numbers would you choose, and how would
your friend know which one means what?

There is a story, often told about the French thinker René Descartes, that he worked out the answer while lying in
bed watching a fly crawl on the ceiling, and wondering how to say exactly where the fly was. Whether or not the story
is true, his answer is used everywhere today: in maps, games, spreadsheets, computer screens, and in steering robots.

## The idea

### Two lines to measure from

Take a sheet of squared paper. Draw a line along the bottom, going across, and a line up the left side, going up.
These two lines are called the **axes** (say "AX-eez"; one of them is an **axis**).

- The line across the bottom is the **x-axis**. It is **horizontal** (flat, like the horizon).
- The line up the side is the **y-axis**. It is **vertical** (straight up and down).
- They are **perpendicular**: they meet at a right angle, as in lesson 3.
- The point where they meet is called the **origin**. It is where every journey starts.

Number each axis 0, 1, 2, 3, ... starting from the origin, one number for each grid line. Numbers go on the **lines**,
not in the spaces between them, just like on a ruler.

### Two numbers for every point

To say where a point is, give two numbers:

1. **First, how far along**: start at the origin and count along the x-axis. This is the **x-coordinate**.
2. **Then, how far up**: from there, count up. This is the **y-coordinate**.

Write them in brackets with a comma between them, along first: **(along, up)**. For example, (2, 5) means "2 along,
then 5 up". The two numbers together are called the **coordinates** of the point. Because the order matters, they
are also called an **ordered pair**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 300" role="img" aria-label="A grid numbered 0 to 8 on both axes. Point A at (2, 5) is reached by going 2 along and 5 up; point B at (5, 2) by going 5 along and 2 up">
  <line x1="40" y1="260" x2="40" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="40" y="276" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="68" y1="260" x2="68" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="68" y="276" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="96" y1="260" x2="96" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="96" y="276" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="124" y1="260" x2="124" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="124" y="276" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="152" y1="260" x2="152" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="152" y="276" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="180" y1="260" x2="180" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="180" y="276" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="208" y1="260" x2="208" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="208" y="276" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="236" y1="260" x2="236" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="236" y="276" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="264" y1="260" x2="264" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="264" y="276" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="40" y1="260" x2="264" y2="260" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <line x1="40" y1="232" x2="264" y2="232" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="236" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="40" y1="204" x2="264" y2="204" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="208" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="40" y1="176" x2="264" y2="176" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="180" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="40" y1="148" x2="264" y2="148" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="152" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="40" y1="120" x2="264" y2="120" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="124" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="40" y1="92" x2="264" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="96" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="40" y1="64" x2="264" y2="64" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="68" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="40" y1="36" x2="264" y2="36" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="40" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="40" y1="260" x2="276" y2="260" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="260" x2="40" y2="24" stroke="currentColor" stroke-width="2"/>
  <text x="284" y="264" font-size="13" text-anchor="middle" fill="currentColor">x</text>
  <text x="40" y="18" font-size="13" text-anchor="middle" fill="currentColor">y</text>
  <line x1="40" y1="260" x2="96" y2="260" stroke="#eea66f" stroke-width="5" stroke-opacity="0.8"/>
  <line x1="96" y1="260" x2="96" y2="120" stroke="#eea66f" stroke-width="5" stroke-opacity="0.8"/>
  <line x1="40" y1="260" x2="180" y2="260" stroke="#9cc9ea" stroke-width="3" stroke-dasharray="5 3"/>
  <line x1="180" y1="260" x2="180" y2="204" stroke="#9cc9ea" stroke-width="3" stroke-dasharray="5 3"/>
  <circle cx="96" cy="120" r="5" fill="#eea66f"/>
  <text x="126" y="114" font-size="13" text-anchor="middle" fill="currentColor">A (2, 5)</text>
  <circle cx="180" cy="204" r="5" fill="#9cc9ea"/>
  <text x="210" y="198" font-size="13" text-anchor="middle" fill="currentColor">B (5, 2)</text>
  <circle cx="40" cy="260" r="4" fill="currentColor"/>
  <text x="34" y="290" font-size="11" text-anchor="start" fill="currentColor">origin (0, 0)</text>
</svg>
</div>

A popular way to remember the order: **"along the corridor, then up the stairs."** You must walk along the corridor
before you can climb the stairs. Another: x comes before y in the alphabet, so the x-number comes first.

### Order matters

Look at A (2, 5) and B (5, 2) in the drawing. The same two numbers, but they are **different points**. A is 2 along
and 5 up: high and to the left. B is 5 along and 2 up: low and to the right. If you swap the numbers, you land
somewhere else. That is the whole reason for agreeing on an order.

### Points on the axes

What about the origin? It is 0 along and 0 up: **(0, 0)**.

A point on the x-axis has not gone up at all, so its y-coordinate is 0. For example (4, 0) is on the x-axis, 4 along.

A point on the y-axis has not gone along at all, so its x-coordinate is 0. For example (0, 3) is on the y-axis, 3 up.

### Moving around: counting squares

Coordinates make it easy to measure. To get from (2, 1) to (7, 1), you stay at the same height and go along from 2 to
7. That is $7 - 2 = 5$ squares. To get from (3, 2) to (3, 6), you stay in the same column and go up from 2 to 6. That
is $6 - 2 = 4$ squares.

So:

- If two points have the **same y-coordinate**, they are on the same **horizontal** line. The distance between them
  is the difference of the x-coordinates.
- If two points have the **same x-coordinate**, they are on the same **vertical** line. The distance is the
  difference of the y-coordinates.

Every horizontal line is parallel to the x-axis, and every vertical line is parallel to the y-axis. And every
horizontal line is perpendicular to every vertical line. So the grid is full of the parallel and perpendicular lines
from lesson 3.

(What about two points that are on neither the same row nor the same column, like (1, 1) and (4, 5)? The straight
distance between them is a slanted line. You will measure it in level 6, with Pythagoras.)

### Shapes on a grid

Since we can name any point, we can name any shape by its corners. A square with corners (1, 1), (4, 1), (4, 4) and
(1, 4) has each side 3 squares long, and all its corners are right angles because its sides run along the grid lines.

<div class="pattern-row" markdown="0">
<svg viewBox="0 50 300 240" role="img" aria-label="A rectangle PQRS on a grid with P at (1, 1), Q at (6, 1), R at (6, 4) and the fourth corner S to be found">
  <line x1="40" y1="260" x2="40" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="40" y="276" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="68" y1="260" x2="68" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="68" y="276" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="96" y1="260" x2="96" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="96" y="276" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="124" y1="260" x2="124" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="124" y="276" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="152" y1="260" x2="152" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="152" y="276" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="180" y1="260" x2="180" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="180" y="276" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="208" y1="260" x2="208" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="208" y="276" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="236" y1="260" x2="236" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="236" y="276" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="264" y1="260" x2="264" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="264" y="276" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="40" y1="260" x2="264" y2="260" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <line x1="40" y1="232" x2="264" y2="232" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="236" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="40" y1="204" x2="264" y2="204" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="208" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="40" y1="176" x2="264" y2="176" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="180" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="40" y1="148" x2="264" y2="148" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="152" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="40" y1="120" x2="264" y2="120" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="124" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="40" y1="92" x2="264" y2="92" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="30" y="96" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="40" y1="260" x2="276" y2="260" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="260" x2="40" y2="80" stroke="currentColor" stroke-width="2"/>
  <text x="284" y="264" font-size="13" text-anchor="middle" fill="currentColor">x</text>
  <text x="40" y="74" font-size="13" text-anchor="middle" fill="currentColor">y</text>
  <polygon points="68,232 208,232 208,148 68,148" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <circle cx="68" cy="232" r="4.5" fill="#eea66f"/>
  <circle cx="208" cy="232" r="4.5" fill="#eea66f"/>
  <circle cx="208" cy="148" r="4.5" fill="#eea66f"/>
  <circle cx="68" cy="148" r="4.5" fill="#9cc9ea"/>
  <text x="90" y="226" font-size="12" text-anchor="middle" fill="currentColor">P (1, 1)</text>
  <text x="230" y="226" font-size="12" text-anchor="middle" fill="currentColor">Q (6, 1)</text>
  <text x="230" y="140" font-size="12" text-anchor="middle" fill="currentColor">R (6, 4)</text>
  <text x="90" y="140" font-size="12" text-anchor="middle" fill="currentColor">S ?</text>
</svg>
</div>

### Why this idea is so powerful

Before coordinates, geometry was about shapes and algebra was about numbers, and they lived apart. Coordinates join
them: every point is a pair of numbers, so every shape can be described with numbers, and every question about
shapes can become a question about numbers. That is the start of a huge part of mathematics, and of every computer
picture you have ever seen: a screen is a grid of tiny dots, each with its own coordinates.

Maps work the same way. A map of Mars, like a map of Earth, puts a grid of lines over the planet (called latitude and
longitude), so that scientists can give any crater or rover landing site as a pair of numbers.

<figure class="play" data-play="points"><span class="ai-tag">AI-created</span><figcaption><b>Points on a grid.</b> Tap to move A or B and read their coordinates.</figcaption></figure>

## Worked examples

**1. Reading coordinates.** On the first grid, the point A is reached by going 2 along and 5 up, so A is (2, 5). B is
reached by going 5 along and 2 up, so B is (5, 2).

**2. Plotting a point.** Plot (6, 3).

1. Put your finger on the origin.
2. Move **along** the x-axis to 6.
3. Move **up** 3 squares.
4. Draw a dot and label it (6, 3).

**3. The missing corner of a rectangle.** P (1, 1), Q (6, 1) and R (6, 4) are three corners of rectangle $PQRS$, as
in the second drawing. Where is S?

1. P and Q have the same y (1), so PQ is horizontal, along the bottom, 5 squares long.
2. Q and R have the same x (6), so QR is vertical, up the right side, 3 squares long.
3. The opposite sides of a rectangle are equal and parallel. So S must be straight above P (same x as P: 1) and
   level with R (same y as R: 4).
4. **S = (1, 4)**.

Check: SR goes from (1, 4) to (6, 4), 5 squares, the same as PQ. ✓ PS goes from (1, 1) to (1, 4), 3 squares, the same
as QR. ✓

**4. Perimeter from coordinates.** What is the perimeter of rectangle $PQRS$? The **perimeter** is the distance all
the way round: $5 + 3 + 5 + 3 = 16$ squares. If each square is 1 cm, that is 16 cm.

**5. Following directions.** A robot starts at (2, 3). It moves 4 to the right and 2 up. Where is it? Right adds to
the x-coordinate and up adds to the y-coordinate: $(2 + 4, 3 + 2) = (6, 5)$.

## Try it

1. Write the coordinates of: (a) the origin; (b) the point 7 along and 1 up; (c) the point 0 along and 4 up.
2. Which of these points are on the x-axis: (3, 0), (0, 3), (5, 5), (8, 0)?
3. How far apart are (2, 6) and (9, 6)? How far apart are (4, 1) and (4, 8)?
4. A square has corners (2, 2), (5, 2) and (5, 5). Where is the fourth corner? What is its perimeter?
5. A robot is at (7, 6). It moves 3 left and 4 down. Where is it now?
6. Leo plots (3, 1) but puts his dot 1 along and 3 up. What mistake did he make? What are the coordinates of the point
   he actually drew?
7. The points (1, 2), (1, 6) and (4, 2) are three corners of a rectangle. Find the fourth corner and the rectangle's
   perimeter.
8. Plot (1, 1), (3, 5) and (5, 1) and join them up. What kind of triangle do you get by its sides? (Hint: is it the
   same shape on the left and the right?)

??? note "Answers"
    1. (a) (0, 0). (b) (7, 1). (c) (0, 4).
    2. **(3, 0) and (8, 0)**: their y-coordinate is 0. (0, 3) is on the y-axis instead.
    3. Same y, so count along: $9 - 2 = 7$ squares. Same x, so count up: $8 - 1 = 7$ squares.
    4. (2, 2) to (5, 2) is the bottom, 3 long; (5, 2) to (5, 5) is the right side, 3 long. The last corner is above
       (2, 2) and level with (5, 5): **(2, 5)**. Perimeter $4 \times 3 = 12$ squares.
    5. Left takes away from x, down takes away from y: $(7 - 3, 6 - 4) = (4, 2)$.
    6. He swapped the order: he went up 3 and along 1 instead of along 3 and up 1. The point he drew is **(1, 3)**.
    7. (1, 2) to (1, 6) is a vertical side, 4 long; (1, 2) to (4, 2) is a horizontal side, 3 long. The last corner is
       level with (1, 6) and above (4, 2): **(4, 6)**. Perimeter $4 + 3 + 4 + 3 = 14$ squares.
    8. The top point (3, 5) is exactly halfway along between 1 and 5, so the triangle is the same on both sides: fold
       it along the vertical line through x = 3 and the halves match. So the two slanting sides are equal: it is
       **isosceles**. (The bottom side is 4 long; the slanting sides are a little longer, about 4.5, so it is not
       equilateral.)

## Common mistake

**Going up first.** (3, 1) and (1, 3) are different points. Always go **along** first (x), then **up** (y).

**Counting the squares instead of the lines.** The numbers sit on the grid **lines**, and the origin is 0, not 1. A
point 1 along sits on the first line after the y-axis, not in the middle of the first square.

## Where it leads

- Back: [The quadrilateral family tree](05-quadrilateral-family.md) · Next level: [Level 4: angle facts](../level-4/index.md)
- [Level 3 page](index.md) · [Geometry topic page](../index.md)
- The grid grows to negative numbers in all four directions, and shapes slide, flip and turn on it: [level 5](../level-5/index.md).
- The slanted distance between two points, with Pythagoras: [level 6](../level-6/index.md).
- Plotting pairs of numbers is how graphs work: [Algebra](../../algebra/index.md) and [Statistics](../../statistics/index.md).
