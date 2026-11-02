---
title: "Build: Pythagoras and circles"
---

# Build: Pythagoras and circles

*Geometry · step 3 of 5*

## A question to start

A rover on Mars drives 3 km due east, then turns a right angle and drives 4 km due north. Its batteries are low and
it needs to send its position home. How far is it, in a straight line, from where it started?

You could draw it carefully to scale and measure. But there is a rule that gives the exact answer in two lines,
and it works for every right angle in the universe. It is called **Pythagoras' theorem**, and the answer here is
exactly 5 km.

## The idea

### The parts of a right triangle

A **right triangle** has one right angle (90°). The side **opposite** the right angle is the longest side, and it
has a special name: the **hypotenuse**. The other two sides, which form the right angle, are called the **legs**.

### Pythagoras' theorem

In a right triangle with legs $a$ and $b$ and hypotenuse $c$:

$$a^2 + b^2 = c^2$$

In words: **the square on the hypotenuse equals the two squares on the legs added together.** "Square" here can be
taken literally. Draw a real square on each side of the triangle; the area of the big one equals the areas of the
two small ones put together.

The rule is named after Pythagoras, a Greek thinker of about 2500 years ago, but it was known and used long before
him: a Babylonian clay tablet called Plimpton 322, older than Pythagoras by more than a thousand years, lists sets of
numbers that fit it.

### Why it is true

Here is one of the many proofs. Take four copies of the right triangle and place them inside a big square whose
sides are $a + b$ long, like this:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="A big square with side a plus b, holding four right triangles in its corners and a tilted square of side c in the middle; beside it, one right triangle with legs a and b and hypotenuse c">
  <rect x="20" y="10" width="160" height="160" fill="none" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <polygon points="20,10 80,10 20,110" fill="#eea66f"/>
    <polygon points="180,10 180,70 80,10" fill="#eea66f"/>
    <polygon points="180,170 120,170 180,70" fill="#eea66f"/>
    <polygon points="20,170 20,110 120,170" fill="#eea66f"/>
    <polygon points="80,10 180,70 120,170 20,110" fill="#9cc9ea"/>
  </g>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="100" y="95">c²</text>
    <text x="50" y="7">a</text><text x="130" y="7">b</text>
    <text x="10" y="64">b</text><text x="10" y="144">a</text>
  </g>
  <polygon points="260,160 360,160 260,100" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="260" y="148" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="248" y="135">a</text><text x="310" y="180">b</text><text x="320" y="122">c</text>
  </g>
</svg>
</div>

The big square has area $(a + b)^2$. Count it a second way: four triangles, each with area $\tfrac12 ab$, plus the
tilted square in the middle, with area $c^2$. (The middle shape really is a square: its sides are all $c$, and each
of its corners is $180°$ minus the two small angles of the triangle, which add to $90°$, so each corner is $90°$.)
Both counts give the same area:

$$(a + b)^2 = 4 \times \tfrac12 ab + c^2$$

Expanding the left side, $a^2 + 2ab + b^2 = 2ab + c^2$. Take $2ab$ away from both sides, and $a^2 + b^2 = c^2$.

### Using it

**To find the hypotenuse:** square the legs, add, take the square root. $c = \sqrt{a^2 + b^2}$.

**To find a leg:** square the hypotenuse, **take away** the square of the other leg, take the square root.
$a = \sqrt{c^2 - b^2}$.

**Pythagorean triples.** Some right triangles have whole-number sides: 3, 4, 5 (since $9 + 16 = 25$), 5, 12, 13 and
8, 15, 17. Any multiple of a triple is a triple too: 6, 8, 10 or 30, 40, 50.

**The converse.** The rule also works backwards: if three sides satisfy $a^2 + b^2 = c^2$, the triangle **has** a
right angle. Builders use this to check square corners: mark 3 m along one wall and 4 m along the other; if the
marks are exactly 5 m apart, the corner is square.

### Distance between two points

On a grid, the straight-line distance between two points is the hypotenuse of a right triangle whose legs are the
distance across and the distance up. Between $(x_1, y_1)$ and $(x_2, y_2)$:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

### Circles

A **circle** is all the points at the same distance from a centre. That distance is the **radius** $r$. A line right
across through the centre is the **diameter** $d$, twice the radius. The distance all the way round is the
**circumference** $C$.

For every circle, of any size, the circumference divided by the diameter is the same number, a little more than 3.
It is called **pi**, written $\pi$:

$$\pi = 3.14159265\ldots$$

$\pi$ is irrational: its decimals never end and never repeat. For most work, 3.14 is close enough. So

$$C = \pi d = 2\pi r$$

**The area of a circle.** Cut a circle into many thin wedges, like a pizza, and lay them side by side, alternately
pointing up and down. They make a shape that is almost a rectangle. Its height is the radius $r$, and its length is
half the circumference, $\pi r$. With more and thinner wedges, it becomes a rectangle exactly. So

$$A = \pi r \times r = \pi r^2$$

## Worked examples

**1. The rover.** The legs are 3 km and 4 km. $c^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $c = \sqrt{25} = 5$ km.

**2. A ladder.** A 13 m ladder leans against a wall with its foot 5 m from the wall. How high up the wall does it
reach?

1. The ladder is the hypotenuse (it is opposite the right angle between wall and ground): $c = 13$.
2. One leg is 5. The height $h$ is the other leg: $h^2 = 13^2 - 5^2 = 169 - 25 = 144$.
3. $h = \sqrt{144} = 12$ m.

**3. A rover wheel.** The wheels of the Perseverance rover are about 52.5 cm across. How far does the rover roll in
one turn of a wheel, and how many turns does it take to drive 1 km?

1. One turn rolls out one circumference: $C = \pi d = \pi \times 52.5 \approx 164.9$ cm.
2. 1 km is 100 000 cm. Turns: $100\,000 \div 164.9 \approx 606$ turns.

**4. The distance from $(1, 2)$ to $(7, 10)$.** Across: $7 - 1 = 6$. Up: $10 - 2 = 8$.
$d = \sqrt{36 + 64} = \sqrt{100} = 10$.

## Try it

1. A right triangle has legs 6 and 8. How long is the hypotenuse?
2. A right triangle has hypotenuse 17 and one leg 8. How long is the other leg?
3. Is a triangle with sides 7, 24 and 25 a right triangle?
4. Find the distance between $(-2, 1)$ and $(10, 6)$.
5. A circle has radius 5 cm. Find its circumference and its area, to one decimal place.
6. A square has sides of 1 m. How long is its diagonal?

??? note "Answers"
    1. $6^2 + 8^2 = 36 + 64 = 100$, so $c = 10$. (It is the 3, 4, 5 triangle doubled.)
    2. $17^2 - 8^2 = 289 - 64 = 225$, so the leg is $\sqrt{225} = 15$.
    3. Yes. The longest side is 25, and $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. By the converse, the angle opposite
       the 25 side is a right angle.
    4. Across: $10 - (-2) = 12$. Up: $6 - 1 = 5$. $d = \sqrt{144 + 25} = \sqrt{169} = 13$.
    5. $C = 2\pi \times 5 = 10\pi \approx 31.4$ cm. $A = \pi \times 5^2 = 25\pi \approx 78.5$ cm².
    6. The diagonal is the hypotenuse of a right triangle with legs 1 and 1: $\sqrt{1 + 1} = \sqrt2 \approx 1.414$ m.
       This is the number from the [Numbers](../numbers/04-master.md) ladder that cannot be written as a fraction.

## Common mistake

**Adding the squares when you need a leg.** Pythagoras adds squares only to find the **hypotenuse**. If the
hypotenuse is one of the sides you know, you must **subtract**. A quick check: the hypotenuse is always the longest
side. If your "leg" comes out longer than the hypotenuse, you added when you should have taken away.

## Where it leads

- Next step: [Master: similar triangles and trigonometry](04-master.md), where right triangles give us sine, cosine
  and tangent.
- Back a step: [Explore: angles and polygons](02-explore.md)
- Areas of other shapes and the volume of a cylinder or a sphere: [Measurement](../measurement/index.md).
- Squares and square roots, and why $\sqrt2$ is irrational: [Numbers](../numbers/index.md).
- Distance on a grid joins algebra and geometry: [Algebra](../algebra/index.md).
