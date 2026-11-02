---
title: "Build: Area"
---

# Build: Area

*Measurement · step 3 of 5*

## A question to start

You have 20 metres of fence to make a rectangular pen for a rabbit. You could make it long and thin, 9 m by 1 m. Or
6 m by 4 m. Or a square, 5 m by 5 m. All three use exactly 20 m of fence. Does the rabbit get the same amount of
grass in each?

No. The thin pen holds 9 square metres of grass, the 6 by 4 pen holds 24, and the square holds 25. The fence round
the edge (the perimeter) is the same, but the space **inside** is very different. That space is the **area**, and
this page shows how to find it for every common shape.

## The idea

### What area means

**Area** is the amount of flat surface a shape covers. We measure it by counting how many **unit squares** fit
inside, with no gaps and no overlaps.

- A **square centimetre** (cm²) is a square 1 cm on each side, about the size of a fingernail.
- A **square metre** (m²) is a square 1 m on each side. A single bed covers about 2 m².
- A **square kilometre** (km²) is a square 1 km on each side, used for cities and countries.

The little 2 means "squared": it reminds you that area has two directions, length **and** width.

### Rectangles and squares

A rectangle 6 cm long and 4 cm wide holds 4 rows of 6 unit squares: $4 \times 6 = 24$ cm². In general:

$$\text{area of a rectangle} = \text{length} \times \text{width}$$

A square with side $s$ has area $s \times s = s^2$. That is why "squared" means "times itself".

### Parallelograms

A **parallelogram** is a slanted rectangle: four sides, with opposite sides parallel. Cut off the triangle at one
end and slide it to the other end. It fits exactly, and the shape becomes a rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 130" role="img" aria-label="A parallelogram with a triangle cut from its left end, and the same triangle moved to its right end to make a rectangle with the same base and height">
  <polygon points="20,110 140,110 180,30 60,30" fill="#9cc9ea"/>
  <polygon points="20,110 60,110 60,30" fill="#eea66f"/>
  <line x1="60" y1="30" x2="60" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="80" y="125" font-size="13" text-anchor="middle" fill="currentColor">base</text>
  <text x="68" y="75" font-size="13" fill="currentColor">height</text>
  <text x="222" y="76" font-size="24" fill="currentColor">→</text>
  <rect x="290" y="30" width="120" height="80" fill="#9cc9ea"/>
  <polygon points="370,110 410,110 410,30" fill="#eea66f"/>
  <polygon points="290,110 410,110 410,30 290,30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="350" y="125" font-size="13" text-anchor="middle" fill="currentColor">same base, same height</text>
</svg>
</div>

The rectangle has the same base and the same **height** as the parallelogram, so

$$\text{area of a parallelogram} = \text{base} \times \text{height}$$

The **height** is the **straight-up** distance between the base and the side opposite it, measured at a right angle
to the base. It is not the length of the slanted side.

### Triangles

Any triangle is exactly **half** of a parallelogram: put two copies of the triangle together, one turned round,
and they make a parallelogram with the same base and height. So

$$\text{area of a triangle} = \tfrac12 \times \text{base} \times \text{height}$$

Again the height is measured straight up from the base to the opposite corner. For a right triangle the two short
sides are the base and the height.

### Trapezoids

A **trapezoid** has one pair of parallel sides, of lengths $a$ and $b$, a distance $h$ apart. Two copies, one
turned upside down, fit together into a parallelogram with base $a + b$ and height $h$. The trapezoid is half of it:

$$\text{area of a trapezoid} = \tfrac12 (a + b) \times h$$

In words: average the two parallel sides, then multiply by the height.

### Circles

As the [Geometry](../geometry/level-6/index.md) ladder shows by cutting a circle into thin wedges, a circle of radius
$r$ has area

$$A = \pi r^2 \qquad (\pi \approx 3.14)$$

### Shapes made of shapes

Most real shapes are combinations. Find the area of an odd shape by **cutting it into simple pieces and adding**,
or by **taking a whole simple shape and subtracting** the part that is missing. Often both work; pick the
easier one.

### Converting area units

Be careful here. 1 m is 100 cm, but 1 m² is **not** 100 cm². A square metre is 100 cm long **and** 100 cm wide, so
it holds $100 \times 100 = 10\,000$ square centimetres.

| | Length | Area |
| --- | --- | --- |
| metres and centimetres | 1 m = 100 cm | 1 m² = 10 000 cm² |
| kilometres and metres | 1 km = 1000 m | 1 km² = 1 000 000 m² |

Farmland is often measured in **hectares**: 1 hectare is a square 100 m on each side, 10 000 m². A football field
is a bit less than one hectare.

## Worked examples

**1. The rabbit pens.** A 9 m by 1 m pen has area $9 \times 1 = 9$ m². A 6 m by 4 m pen has $6 \times 4 = 24$ m².
A 5 m by 5 m pen has $5^2 = 25$ m². For a fixed perimeter, the square gives the most area of any rectangle.

**2. An L-shaped room.** A room is a 10 m by 8 m rectangle with a 4 m by 3 m corner missing (the same shape as the
garden on the [Explore page](02-explore.md)). Its area?

1. Subtract: whole rectangle $10 \times 8 = 80$ m², minus the corner $4 \times 3 = 12$ m², gives **68 m²**.
2. Check by adding instead: cut it into a 6 m by 8 m piece ($48$ m²) and a 4 m by 5 m piece ($20$ m²).
   $48 + 20 = 68$ m² ✓.

**3. A sail.** A triangular sail has a base of 3 m and a height of 5 m. Area: $\tfrac12 \times 3 \times 5 = 7.5$ m².

**4. A ring.** A flat washer is a circle of radius 5 mm with a hole of radius 3 mm. Its area is the big circle minus
the hole: $\pi \times 5^2 - \pi \times 3^2 = 25\pi - 9\pi = 16\pi \approx 50.3$ mm².

## Try it

1. Find the area of a rectangle 8 m long and 5.5 m wide.
2. A triangle has base 10 cm and height 7 cm. Find its area.
3. A parallelogram has base 12 cm, slanted sides of 5 cm, and height 4 cm. Find its area.
4. A trapezoid has parallel sides of 6 cm and 10 cm, 5 cm apart. Find its area.
5. Find the area of a circle of radius 3 m, to one decimal place.
6. A poster has an area of 3.2 m². What is that in cm²?

??? note "Answers"
    1. $8 \times 5.5 = 44$ m².
    2. $\tfrac12 \times 10 \times 7 = 35$ cm².
    3. $12 \times 4 = 48$ cm². The 5 cm slanted side is not used: the height is what counts.
    4. $\tfrac12 \times (6 + 10) \times 5 = 8 \times 5 = 40$ cm².
    5. $\pi \times 3^2 = 9\pi \approx 28.3$ m².
    6. Each m² is 10 000 cm², so $3.2 \times 10\,000 = 32\,000$ cm².

## Common mistake

**Using the slanted side as the height.** For parallelograms, triangles and trapezoids, the height must be measured
**at a right angle** to the base. The slanted side is always longer than the height, so using it gives an area that
is too big. If a diagram shows a dashed line meeting the base with a small square corner, that dashed line is the
height.

## Where it leads

- Next step: [Master: volume and surface area](04-master.md), where we go from flat shapes to solid ones.
- Back a step: [Explore: units, conversions and perimeter](02-explore.md)
- Why the square holds the most area: questions of "the biggest" and "the smallest" are solved exactly with
  calculus, in [Change and motion](../change/index.md).
- Pythagoras and circles: [Geometry](../geometry/level-6/index.md).
