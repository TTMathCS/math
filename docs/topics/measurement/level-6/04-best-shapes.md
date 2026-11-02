---
title: "Best shapes"
---

# Best shapes

*Measurement · level 6, lesson 4 of 6*

## A question to start

A farmer has 40 m of fencing and wants a rectangular pen for her goats, as big as possible. A pen 1 m wide and 19 m
long uses all 40 m of fence. So does a pen 10 m by 10 m. Do they hold the same amount of grass?

Not even close. The long thin pen has an area of $1 \times 19 = 19$ m²; the square has $10 \times 10 = 100$ m², more
than five times as much, from exactly the same fence. The **same perimeter** can surround very different areas.

Questions like this, "what is the best shape?", are called **optimisation** problems. Engineers, packagers and even
bees solve them. In this lesson you will find the best rectangle, the best box and the best can, and see why the
cans in the shop are often **not** the "best" shape at all.

## The idea

### Fixed perimeter: the square wins

Take all the rectangles with perimeter 20 cm. The length and width add to half the perimeter, 10 cm.

| Width | Length | Area |
| --- | --- | --- |
| 1 | 9 | 9 |
| 2 | 8 | 16 |
| 3 | 7 | 21 |
| 4 | 6 | 24 |
| 4.5 | 5.5 | 24.75 |
| 5 | 5 | **25** |

The area climbs as the rectangle gets closer to a square, and the square, 5 by 5, has the most. Is it really the
best, or could some width like 4.9 beat it? Here is a proof by picture.

Compare the 5 by 5 square with the 7 by 3 rectangle. Both have perimeter 20. Lay them over each other, sharing a
corner.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 175" role="img" aria-label="A 5 by 5 square and a 7 by 3 rectangle placed over each other from the same bottom left corner. They share a 5 by 3 region. The square has an extra 5 by 2 strip on top; the rectangle has an extra 2 by 3 strip on the right.">
  <rect x="20" y="70" width="125" height="75" fill="#7ccf9a" fill-opacity="0.45"/>
  <rect x="20" y="20" width="125" height="50" fill="#eea66f" fill-opacity="0.65"/>
  <rect x="145" y="70" width="50" height="75" fill="#9cc9ea" fill-opacity="0.75"/>
  <rect x="20" y="20" width="125" height="125" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="70" width="175" height="75" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="82" y="50">square's extra</text>
    <text x="82" y="64">5 × 2 = 10</text>
    <text x="82" y="112">shared 5 × 3</text>
    <text x="170" y="104">2 × 3</text>
    <text x="170" y="118">= 6</text>
    <text x="82" y="162">5</text>
    <text x="157" y="162">+2</text>
  </g>
  <text x="210" y="60" font-size="12" fill="currentColor">solid: 5 × 5 square</text>
  <text x="210" y="78" font-size="12" fill="currentColor">dashed: 7 × 3</text>
  <text x="210" y="96" font-size="12" fill="currentColor">square wins by</text>
  <text x="210" y="112" font-size="12" fill="currentColor">10 − 6 = 4 = 2²</text>
</svg>
</div>

Both shapes contain the shared 5 by 3 part. The square has an extra strip $5 \times 2 = 10$; the rectangle has an extra
strip $2 \times 3 = 6$. The square wins by $10 - 6 = 4 = 2^2$.

The same thing happens in general. Write the rectangle's sides as $5 + d$ and $5 - d$ (it is $d$ longer one way and
$d$ shorter the other, so the perimeter stays 20). Using the difference of squares
([Algebra level 6](../../algebra/level-6/03-factoring.md)):

$$(5 + d)(5 - d) = 25 - d^2$$

Since $d^2$ is never negative, the area is never more than 25, and it equals 25 only when $d = 0$: the square. The
same algebra works for any perimeter $P$: the sides are $\tfrac P4 + d$ and $\tfrac P4 - d$, and the area is
$\left(\tfrac P4\right)^2 - d^2$.

**Beyond rectangles.** If the fence can bend into any shape, a **circle** does even better. 20 cm of fence bent into a
circle has radius $r = \tfrac{20}{2\pi} \approx 3.18$ cm and area $\pi r^2 \approx 31.8$ cm², about 27% more than the
square. Among all shapes with a given perimeter, the circle encloses the most area. This is called the
**isoperimetric inequality** ("iso-perimetric" means "same perimeter"). It is easy to state and surprisingly hard to
prove fully; complete proofs came only in the 1800s. It is also why soap bubbles are round and why a cat curls up in
a ball on a cold night: the least surface for the most inside.

### Fixed area: the square has the shortest edge

Turn the question round. You need a rectangular garden of 36 m² and want the shortest fence:

| Sides | Perimeter |
| --- | --- |
| 1 × 36 | 74 |
| 2 × 18 | 40 |
| 3 × 12 | 30 |
| 4 × 9 | 26 |
| 6 × 6 | **24** |

The square wins again. The two questions are two sides of one fact: the square is the most "efficient" rectangle.

### Using a wall

Real problems often have a twist. The farmer builds her pen against a long barn wall, so she only fences three
sides. With 40 m of fence, the two sides away from the wall are $x$ each and the side opposite the wall is $40 - 2x$.

| $x$ | $40 - 2x$ | Area |
| --- | --- | --- |
| 5 | 30 | 150 |
| 8 | 24 | 192 |
| 10 | 20 | **200** |
| 12 | 16 | 192 |
| 15 | 10 | 150 |

The best pen is 10 m by 20 m, **not** a square. Why? The table is symmetric about $x = 10$, and in fact
$x(40 - 2x) = 2x(20 - x) = 2\left(100 - (x - 10)^2\right)$, which is largest when $x = 10$. The wall is free fence, so
the best shape uses more of it. Always check the conditions before assuming "square".

### Boxes: fixed volume, least cardboard

A box must hold 1000 cm³. Which shape uses the least cardboard (surface area, from
[level 5](../level-5/03-prism-surface-area.md))?

| Box | Volume | Surface area |
| --- | --- | --- |
| 25 × 20 × 2 | 1000 | 1180 |
| 5 × 5 × 40 | 1000 | 850 |
| 20 × 10 × 5 | 1000 | 700 |
| 10 × 10 × 10 | 1000 | **600** |

The **cube** wins: it is the three-dimensional version of the square. Among all solids, the **sphere** has the least
surface for its volume, the 3D version of the circle.

### Open boxes from a sheet

A classic problem: from a square sheet of card 30 cm by 30 cm, cut a square of side $x$ from each corner and fold up
the sides to make an open box. The base is $(30 - 2x)$ by $(30 - 2x)$ and the height is $x$, so
$V = x(30 - 2x)^2$.

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $V$ (cm³) | 784 | 1352 | 1728 | 1936 | **2000** | 1944 | 1792 |

Small cuts make a wide, shallow tray; big cuts make a tall, thin box with a tiny base. The best, $x = 5$, lies between.

### The best can, and why shops ignore it

Which cylinder holding 500 cm³ uses the least metal? Its height must be $h = \dfrac{500}{\pi r^2}$ (from
[level 5](../level-5/02-cylinder-volume.md)), and its surface is $2\pi r^2 + 2\pi r h$.

| $r$ (cm) | $h$ (cm) | Surface (cm²) |
| --- | --- | --- |
| 2 | 39.79 | 525.1 |
| 3 | 17.68 | 389.9 |
| 4 | 9.95 | 350.5 |
| 4.3 | 8.61 | **348.7** |
| 5 | 6.37 | 357.1 |
| 6 | 4.42 | 392.9 |

The best can has $h \approx 8.6$ and $r \approx 4.3$: its **height equals its diameter**. Calculus proves this holds
for every volume (the best radius is $r = \sqrt[3]{V / (2\pi)}$). Notice how flat the table is near the best: a can a
bit taller or wider wastes only a little metal.

So why are many food cans taller than they are wide? Surface area is not the only cost:

- **The ends cost more.** Lids are often made of thicker metal and need a rolled seam. If the ends cost twice as
  much per cm² as the side, the cheapest 500 cm³ can has $r \approx 3.4$ cm and $h \approx 13.7$ cm: its height is
  **four** times its radius. (Try $r = 3, 3.4, 4$ in $4\pi r^2 + 2\pi r h$: you get about 446, 439 and 451.)
- **Hands and shelves.** A taller, thinner can is easier to grip and shows its label better on a shelf.
- **Machines and habit.** Factories are built for standard sizes, and changing them costs money.

A "best" shape depends on what you are trying to make smallest. Mathematics answers the question you ask, so ask the
right one.

## Worked examples

**1. Fixed perimeter.** What is the largest rectangle with perimeter 36 m? Sides add to 18, so the best is the
square 9 by 9, area 81 m². (Compare 10 by 8: 80 m², just less, since $81 - 1^2 = 80$.)

**2. Fixed area.** A rectangle has area 64 m². The shortest perimeter is the square 8 by 8: perimeter 32 m. A 4 by 16
rectangle needs 40 m.

**3. Against a wall.** With 60 m of fence and a wall as the fourth side, take $x$ for the two sides from the wall:
area $x(60 - 2x)$. By symmetry with the table above, the best is $x = 15$: a pen 15 m by 30 m, area 450 m².

**4. A cube box.** The best closed box of volume 8000 cm³ is a cube with edge 20 cm ($20^3 = 8000$), using
$6 \times 400 = 2400$ cm² of card. A 40 by 20 by 10 box (also 8000 cm³) needs $2(800 + 400 + 200) = 2800$ cm².

## Try it

1. A rectangle has perimeter 28 cm. What are the sides of the one with the largest area? What is that area?
2. A rectangle has area 100 m². Which rectangle has the smallest perimeter? Compare it with 5 by 20.
3. You have 100 m of rope. Compare the area enclosed by a square of rope and by a circle of rope.
4. With 60 m of fence and a wall as one side, show that $x = 14$ and $x = 16$ both give less area than $x = 15$.
5. From a 20 cm by 20 cm square of card, cut squares of side $x$ from the corners to make an open box. Find the
   volume for $x = 1, 2, 3, 4, 5$. Which whole number is best?
6. Find the best (least-metal) can holding 1000 cm³, using $h = 2r$. What is its radius, height and surface area?
7. A 2 by 3 rectangle and a 2.5 by 2.5 square have the same perimeter. Use the "$25 - d^2$" idea (scaled down) to say
   exactly how much bigger the square's area is.
8. Give two reasons, not about surface area, why a company might choose a tall thin can instead of the "best" one.

??? note "Answers"
    1. Sides add to 14, so the square 7 by 7 is best: area 49 cm².
    2. The 10 by 10 square: perimeter 40 m. A 5 by 20 rectangle has perimeter 50 m.
    3. Square: side 25 m, area 625 m². Circle: $r = \tfrac{100}{2\pi} \approx 15.92$ m, area $\pi r^2 \approx 795.8$ m².
       The circle encloses about 27% more.
    4. $x = 14$: $14 \times 32 = 448$. $x = 16$: $16 \times 28 = 448$. Both less than $15 \times 30 = 450$.
    5. $V = x(20 - 2x)^2$: 324, 512, 588, 576, 500. The best whole number is $x = 3$ (588 cm³). (The true best is
       $x = \tfrac{10}{3} \approx 3.33$, giving about 592.6 cm³.)
    6. $\pi r^2 \times 2r = 2\pi r^3 = 1000$, so $r^3 = \tfrac{1000}{2\pi} \approx 159.2$ and $r \approx 5.42$ cm,
       $h \approx 10.84$ cm. Surface $2\pi r^2 + 2\pi r \times 2r = 6\pi r^2 \approx 553.6$ cm².
    7. Half the perimeter is 5, so the sides are $2.5 \pm d$ with $d = 0.5$. Square $2.5^2 = 6.25$; rectangle
       $6.25 - 0.5^2 = 6$. The square is bigger by $0.25$ cm², which is $d^2$. ✓
    8. For example: thicker, costlier lids make a taller can cheaper overall; a thin can is easier to hold and pour;
       a tall can shows a bigger label on a shelf; factories already make that size. Any two sensible reasons.

## Common mistake

**Assuming the answer is always a square.** It is the square only for a closed rectangle with all four sides fenced.
A free wall, a different cost for some sides, or a shape that is not a rectangle all change the answer. Write the
quantity you want to make biggest or smallest, then test.

**Stopping at the best whole number.** In the open-box problem the best whole-number cut is 3 cm, but the true best is
$3\tfrac13$ cm. A table finds where the best is; algebra or calculus pins it down exactly.

## Where it leads

- Back: [Surface area of cones, pyramids and spheres](03-curved-surface-area.md) · Next:
  [Time across the planets](05-time-planets.md)
- [Level 6 page](index.md) · [Measurement topic page](../index.md)
- The difference of squares, and quadratics with a highest point:
  [Algebra: factoring](../../algebra/level-6/03-factoring.md) and [Algebra level 7](../../algebra/level-7/index.md).
- Calculus finds the best shape exactly, by setting a derivative to zero:
  [MAT137 Unit 6 (applications of derivatives)](../../../uoft/MAT137/unit06.md).
- Bees and hexagons: [Geometry level 4: angles inside and outside any polygon](../../geometry/level-4/05-polygon-angles.md).
