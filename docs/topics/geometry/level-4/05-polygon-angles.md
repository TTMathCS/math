---
title: "Angles inside and outside any polygon"
---

# Angles inside and outside any polygon

*Geometry · level 4, lesson 5 of 6*

## A question to start

Bees build their honeycomb from six-sided cells, and bathroom floors are often tiled with squares or six-sided tiles.
But nobody tiles a floor with regular **five**-sided tiles, or regular **eight**-sided tiles on their own. It is not
that people have not tried. It is impossible: those shapes always leave gaps or overlap.

Why do the hexagon, the square and the triangle work, and nothing else among the regular shapes? The answer is a
single sum with angles, and by the end of this lesson you will be able to prove that **only three** regular shapes can
tile a floor on their own.

## The idea

### Polygons

A **polygon** is a flat shape whose edges are straight line segments, joined end to end to close up ("poly" means
many, "gon" means angle). Polygons are named by their number of sides, which is also their number of corners:

| Sides | Name | Sides | Name |
| --- | --- | --- | --- |
| 3 | triangle | 8 | octagon |
| 4 | quadrilateral | 9 | nonagon |
| 5 | pentagon | 10 | decagon |
| 6 | hexagon | 12 | dodecagon |
| 7 | heptagon | $n$ | $n$-gon |

A polygon is **regular** if all its sides are equal **and** all its angles are equal. A square is a regular
quadrilateral; a rectangle that is not a square is not regular (equal angles but not equal sides); a rhombus that is
not a square is not regular either (equal sides but not equal angles).

In this lesson all polygons are **convex**: no corner pokes inwards, so every interior angle is less than 180°. (The
angle-sum rule below works for polygons with a dent too, but the reasons need a little more care.)

### The interior angles: cut into triangles

Pick one corner of the polygon and draw straight lines from it to every other corner it is not already joined to.
These lines are **diagonals**. They cut the polygon into triangles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 195" role="img" aria-label="A hexagon cut into 4 triangles by lines from one corner, and a lopsided pentagon cut into 3 triangles the same way">
  <polygon points="170,95 135,34.4 65,34.4" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="170,95 65,34.4 30,95" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="170,95 30,95 65,155.6" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="170,95 65,155.6 135,155.6" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="170,95 135,34.4 65,34.4 30,95 65,155.6 135,155.6" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="123.333" y="59.6" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="88.3333" y="79.8" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="88.3333" y="120.2" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="123.333" y="140.4" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <polygon points="250,150 350,160 370,90" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="250,150 370,90 300,40" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="250,150 300,40 240,80" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="250,150 350,160 370,90 300,40 240,80" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="323.333" y="138.333" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="306.667" y="98.3333" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="263.333" y="95" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="100" y="185" font-size="12" text-anchor="middle" fill="currentColor">6 sides: 4 triangles</text>
  <text x="305" y="185" font-size="12" text-anchor="middle" fill="currentColor">5 sides: 3 triangles</text>
</svg>
</div>

How many triangles? A polygon with $n$ sides has $n$ corners. From your chosen corner you can draw diagonals to every
corner except **itself** and its **two neighbours** (those are joined to it by sides already). That is $n - 3$
diagonals, and they cut the shape into $n - 2$ triangles. Another way to count: each triangle uses one side of the
polygon that is **not** touching your corner, and there are $n - 2$ such sides.

Every triangle's angles add to 180° (lesson 3). And the angles of all the triangles together fill up the angles of the
polygon exactly, with nothing left over: the triangles all meet at corners of the polygon. So

$$\text{sum of interior angles of an } n\text{-gon} = (n - 2) \times 180°$$

| Polygon | $n$ | Triangles | Angle sum | Each angle if regular |
| --- | --- | --- | --- | --- |
| triangle | 3 | 1 | 180° | 60° |
| quadrilateral | 4 | 2 | 360° | 90° |
| pentagon | 5 | 3 | 540° | 108° |
| hexagon | 6 | 4 | 720° | 120° |
| heptagon | 7 | 5 | 900° | about 128.6° |
| octagon | 8 | 6 | 1080° | 135° |
| nonagon | 9 | 7 | 1260° | 140° |
| decagon | 10 | 8 | 1440° | 144° |
| dodecagon | 12 | 10 | 1800° | 150° |

Each extra side adds one more triangle, so the angle sum goes up by 180° every time.

### The exterior angles: always 360°

Walk round a convex polygon, as you walked round the triangle in lesson 3. At each corner you turn by the **exterior
angle**: the angle between the side you were walking along (carried on straight) and the next side. When you get back
to the start, you face the way you started, having turned the same way every time, once round. So:

**The exterior angles of any convex polygon add to 360°**, whatever the number of sides.

This is surprising at first: a triangle and a 100-sided polygon have the same exterior angle sum. But a 100-gon makes
100 tiny turns, and a triangle makes 3 big ones; either way, the total is one full turn.

At each corner, the interior and exterior angles sit on a straight line, so

interior angle + exterior angle = 180°.

You can even get the interior sum from this. There are $n$ corners, each giving 180°, so interior + exterior sums
make $180n$ in total. The exterior sum is 360, so the interior sum is $180n - 360 = 180(n - 2)$. Two different
reasons, the same answer.

### Regular polygons: the fast way

In a regular $n$-gon all the exterior angles are equal, and they share 360° equally:

$$\text{each exterior angle} = \frac{360°}{n} \qquad \text{each interior angle} = 180° - \frac{360°}{n}$$

For a regular octagon (a stop sign): exterior $360 \div 8 = 45°$, interior $180 - 45 = 135°$. That is quicker than
$1080 \div 8$, and it is easy to run backwards: if you know the angle, you can find the number of sides.

### Why only three regular polygons tile

To **tile** a floor (also called a **tessellation**), tiles must meet at corners with no gaps and no overlaps. Where
corners of tiles meet at a point, their angles must add to exactly **360°** (angles around a point, lesson 1).

If all the tiles are the same regular polygon, with interior angle $A$, then a whole number of them, say $k$, meet at
each point: $k \times A = 360°$. So $A$ must divide 360 exactly.

- Triangles: $A = 60°$, and $360 \div 60 = 6$. Six triangles meet at each point. ✓
- Squares: $A = 90°$, and $360 \div 90 = 4$. ✓
- Hexagons: $A = 120°$, and $360 \div 120 = 3$. ✓
- Pentagons: $A = 108°$, and $360 \div 108 = 3.33...$ Three leave a gap of $360 - 324 = 36°$; four would need 432°
  and overlap. ✗

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 205" role="img" aria-label="Left: three regular hexagons meet at a point with no gap. Right: three regular pentagons meet at a point and leave a 36 degree gap">
  <polygon points="110,100 155,100 177.5,61 155,22.1 110,22.1 87.5,61" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <polygon points="110,100 87.5,61 42.5,61 20,100 42.5,139 87.5,139" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <polygon points="110,100 87.5,139 110,177.9 155,177.9 177.5,139 155,100" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="110" cy="100" r="4" fill="currentColor"/>
  <text x="110" y="195" font-size="12" text-anchor="middle" fill="currentColor">3 × 120° = 360°: no gap</text>
  <polygon points="330,110 345.5,157.6 395.5,157.6 410.9,110 370.5,80.6" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <polygon points="330,110 370.5,80.6 355,33.1 305,33.1 289.5,80.6" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <polygon points="330,110 289.5,80.6 249.1,110 264.5,157.6 314.5,157.6" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="330" cy="110" r="4" fill="currentColor"/>
  <path d="M 330 110 L 320.7 138.5 A 30 30 0 0 0 339.3 138.5 Z" fill="currentColor" fill-opacity="0.35"/>
  <text x="330" y="195" font-size="12" text-anchor="middle" fill="currentColor">3 × 108° = 324°: a 36° gap</text>
</svg>
</div>

What about more sides? For 7 sides or more, the interior angle is more than 120° (the table keeps going up) but less
than 180°. Two tiles would make less than 360°, and three would make more than 360°, since $3 \times 120 = 360$
already. So no whole number fits. ✗

That covers every case: **exactly three regular polygons tile the plane on their own: the triangle, the square and the
hexagon**. Bees use the hexagon, which of the three encloses the most space for the length of wall.

If you are allowed to mix shapes, more patterns work. A regular octagon has 135° angles: two of them make 270°,
leaving exactly 90° for a square. That is the octagon-and-square pattern often seen on kitchen floors.

## Worked examples

**1. The angle sum of a nonagon.** $n = 9$: $(9 - 2) \times 180 = 7 \times 180 = 1260°$.

**2. Each angle of a regular decagon, two ways.**

- Interior sum $(10 - 2) \times 180 = 1440$, and $1440 \div 10 = 144°$.
- Exterior $360 \div 10 = 36°$, so interior $180 - 36 = 144°$. ✓

**3. Finding the number of sides.** A regular polygon has interior angles of 156°. How many sides?

The exterior angle is $180 - 156 = 24°$. The exterior angles add to 360°, so there are $360 \div 24 = 15$ sides.

**4. Is it possible?** Is there a regular polygon with interior angles of 130°? The exterior angle would be 50°, and
$360 \div 50 = 7.2$, not a whole number. So **no**.

**5. A missing angle in an irregular pentagon.** A pentagon has angles 100°, 120°, 95°, 110° and $x$. Find $x$.

The sum is $(5 - 2) \times 180 = 540$ degrees. The four known angles add to $425$, so $x = 540 - 425 = 115°$.

## Try it

1. Find the interior angle sum of: (a) a heptagon (7 sides); (b) a 20-gon.
2. Find each interior and exterior angle of a regular dodecagon (12 sides).
3. A regular polygon has exterior angles of 20°. How many sides? What is each interior angle?
4. A regular polygon has interior angles of 162°. How many sides?
5. A hexagon has five angles of 115°. Find the sixth.
6. Can a regular polygon have an interior angle of 145°? Explain.
7. Do regular octagons tile a floor on their own? What gap or overlap do you get at a point?
8. Explain why the exterior angles of a 50-sided convex polygon add to the same total as those of a square.

??? note "Answers"
    1. (a) $5 \times 180 = 900°$. (b) $18 \times 180 = 3240°$.
    2. Exterior $360 \div 12 = 30°$; interior $180 - 30 = 150°$. (Check: $10 \times 180 = 1800$ and
       $1800 \div 12 = 150$ ✓.)
    3. $360 \div 20 = 18$ sides. Interior $180 - 20 = 160°$.
    4. Exterior $180 - 162 = 18°$, so $360 \div 18 = 20$ sides.
    5. Sum $4 \times 180 = 720$. Five angles make $5 \times 115 = 575$, so the sixth is $720 - 575 = 145°$.
    6. **No**. The exterior angle would be 35°, and $360 \div 35$ is about 10.3, not a whole number.
    7. **No**. Each angle is 135°. Two make 270° (a 90° gap); three make 405° (a 45° overlap). A square fits the 90°
       gap, which is why octagons are tiled together with squares.
    8. Walking round any convex polygon, you turn once all the way round and face the way you started: the turns add
       to one full turn, 360°, however many corners there are.

## Common mistake

**Using $n \times 180$ instead of $(n - 2) \times 180$.** A square would then have 720°, which is clearly wrong
($4 \times 90 = 360$). Check your rule on a square or a triangle before you trust it.

**Dividing by $n$ for a polygon that is not regular.** "each angle = sum ÷ $n$" only works when all the angles
are equal. For an irregular polygon, use the sum and subtract the angles you know.

## Where it leads

- Back: [Angles with parallel lines](04-parallel-line-angles.md) · Next: [Rotational symmetry](06-rotational-symmetry.md)
- [Level 4 page](index.md) · [Geometry topic page](../index.md)
- Tiling first appeared in [level 2](../level-2/index.md); this lesson explains which regular shapes work.
- The pattern 180, 360, 540, 720, ... goes up by the same amount each time: an arithmetic sequence. See
  [Patterns](../../patterns/index.md).
- Counting the diagonals of a polygon is a counting puzzle: [Counting](../../counting/index.md).
