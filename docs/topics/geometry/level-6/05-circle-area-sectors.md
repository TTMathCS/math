---
title: "Area of a circle, sectors and arcs"
---

# Area of a circle, sectors and arcs

*Geometry · level 6, lesson 5 of 6*

## A question to start

A pizza shop sells one large pizza 40 cm across, or two medium pizzas 28 cm across, for the same price. Two pizzas
sound like more food. Which gives you more pizza?

The large one, by a little: about 1257 cm² against about 1232 cm² for the pair. That surprises people, because 28 is
much more than half of 40. The secret is that the area of a circle grows with the **square** of its radius. In this
lesson you will see where the formula $A = \pi r^2$ comes from, two ways, and then cut circles into slices: sectors,
arcs and rings.

## The idea

### Area, and a first squeeze

The **area** of a shape is how many unit squares it takes to cover it. For a circle it cannot be counted exactly,
because squares do not fit round edges. So, as with the circumference in [lesson 4](04-pi-circumference.md), start by
trapping it.

Draw a circle of radius $r$ inside a square: the square's side is $2r$, so its area is $4r^2$. Now draw a square
inside the circle with its corners on the circle: its diagonals are diameters, $2r$ long, and cut it into four right
triangles with legs $r$, so its area is $4 \times \tfrac12 r^2 = 2r^2$. The circle is between them:

$$2r^2 < A < 4r^2$$

So the area is some number times $r^2$, between 2 and 4. Which number?

### Proof 1: the pizza rearrangement

Cut the circle into equal wedges (sectors), like a pizza. Lay them in a row, alternately pointing up and down:

<div class="pattern-row" markdown="0">
<svg viewBox="10 5 380 145" role="img" aria-label="A circle cut into eight wedges, coloured alternately orange and blue; next to it the same eight wedges laid in a row, alternately pointing up and down, forming a bumpy shape close to a parallelogram whose height is the radius and whose length is half the circumference">
  <path d="M 80 75 L 80.0 15.0 A 60 60 0 0 1 122.4 32.6 Z" fill="#eea66f"/>
  <path d="M 80 75 L 122.4 32.6 A 60 60 0 0 1 140.0 75.0 Z" fill="#9cc9ea"/>
  <path d="M 80 75 L 140.0 75.0 A 60 60 0 0 1 122.4 117.4 Z" fill="#eea66f"/>
  <path d="M 80 75 L 122.4 117.4 A 60 60 0 0 1 80.0 135.0 Z" fill="#9cc9ea"/>
  <path d="M 80 75 L 80.0 135.0 A 60 60 0 0 1 37.6 117.4 Z" fill="#eea66f"/>
  <path d="M 80 75 L 37.6 117.4 A 60 60 0 0 1 20.0 75.0 Z" fill="#9cc9ea"/>
  <path d="M 80 75 L 20.0 75.0 A 60 60 0 0 1 37.6 32.6 Z" fill="#eea66f"/>
  <path d="M 80 75 L 37.6 32.6 A 60 60 0 0 1 80.0 15.0 Z" fill="#9cc9ea"/>
  <circle cx="80" cy="75" r="60" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1">
    <path d="M 193.0 40 L 170.0 95.4 A 60 60 0 0 0 215.9 95.4 Z" fill="#eea66f"/>
    <path d="M 215.9 95.4 L 193.0 40 A 60 60 0 0 1 238.9 40 Z" fill="#9cc9ea"/>
    <path d="M 238.9 40 L 215.9 95.4 A 60 60 0 0 0 261.8 95.4 Z" fill="#eea66f"/>
    <path d="M 261.8 95.4 L 238.9 40 A 60 60 0 0 1 284.8 40 Z" fill="#9cc9ea"/>
    <path d="M 284.8 40 L 261.8 95.4 A 60 60 0 0 0 307.8 95.4 Z" fill="#eea66f"/>
    <path d="M 307.8 95.4 L 284.8 40 A 60 60 0 0 1 330.7 40 Z" fill="#9cc9ea"/>
    <path d="M 330.7 40 L 307.8 95.4 A 60 60 0 0 0 353.7 95.4 Z" fill="#eea66f"/>
    <path d="M 353.7 95.4 L 330.7 40 A 60 60 0 0 1 376.6 40 Z" fill="#9cc9ea"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="262" y="120">about πr (half the circumference)</text><text x="160" y="72">r</text>
  </g>
</svg>
</div>

Every wedge has two straight sides of length $r$ and a curved edge. In the row, the curved edges of the orange wedges
make up the bottom and the curved edges of the blue wedges make up the top. All the curved edges together are the
whole circumference $2\pi r$, so the bottom is half of it, $\pi r$, and so is the top. The height of the row is about
$r$.

With 8 wedges the shape is a bumpy parallelogram. With 100 wedges the bumps are tiny and the slanted ends are almost
upright. With more and more wedges it becomes, as closely as you like, a **rectangle** $\pi r$ long and $r$ high. The
wedges are the same pieces of the same circle every time, so the circle's area is that rectangle's area:

$$A = \pi r \times r = \pi r^2$$

Check against the squeeze: $\pi \approx 3.14$ is between 2 and 4. Good.

### Proof 2: unrolling the rings

Here is a second way, which shows the same result from another side. Think of the circle as made of many thin
**rings**, like an onion cut across, or the grooves of an old record. Cut each ring along one radius and straighten it
out into a thin strip. A ring at distance $x$ from the centre straightens to a strip of length $2\pi x$. The outer
ring gives a strip of length $2\pi r$; the rings get shorter towards the centre, down to almost nothing.

Stack the strips, longest at the bottom. Their lengths shrink steadily from $2\pi r$ to 0 as you go up a height $r$,
so they form a **triangle** with base $2\pi r$ and height $r$. Its area:

$$A = \tfrac12 \times 2\pi r \times r = \pi r^2$$

Archimedes stated it in exactly this form: **a circle has the same area as a right triangle whose legs are its radius
and its circumference.**

Notice something about both proofs: the area formula comes **from** the circumference formula. The $\pi$ in $\pi r^2$
is the very same $\pi$ as in $2\pi r$, which is why the area ratio $A \div r^2$ is the same for every circle too.

### Why the pizza answer is right

Area grows with $r^2$. Doubling the radius makes the area $2^2 = 4$ times as big, just as dilations did in
[level 5](../level-5/04-dilations-scale-drawings.md). The 40 cm pizza has $r = 20$: $A = 400\pi \approx 1257$ cm². Each
28 cm pizza has $r = 14$: $A = 196\pi$, and two of them make $392\pi \approx 1232$ cm². Since $400 > 392$, the single
large pizza wins.

### Sectors and arcs: fractions of a circle

A **sector** is a slice between two radii; its **central angle** $\theta$ (the Greek letter theta, often used for
angles) is the angle at the centre. The curved edge of a sector is an **arc**.

Equal central angles cut equal slices ([level 5, lesson 6](../level-5/06-circle-words.md): equal angles at the centre,
equal arcs). So a sector with angle $\theta$ is the fraction $\dfrac{\theta}{360°}$ of the whole circle: a 90° sector is
a quarter, a 60° sector is a sixth. Both its area and its arc length are that fraction of the whole:

$$\text{sector area} = \frac{\theta}{360°} \times \pi r^2 \qquad \text{arc length} = \frac{\theta}{360°} \times 2\pi r$$

The **perimeter of a sector** is the arc plus the two radii: arc length $+ 2r$.

### Rings and segments

An **annulus** is the ring between two circles with the same centre, like a washer or a running lane round a pond.
Its area is the big disc minus the small one: $\pi R^2 - \pi r^2$.

A **segment** (the region between a chord and its arc) is a sector minus a triangle. For a 90° sector, the triangle
is half a square of side $r$, with area $\tfrac12 r^2$, so the segment has area $\tfrac14 \pi r^2 - \tfrac12 r^2$.

<figure class="play" data-play="area" data-shape="circle"><span class="ai-tag">AI-created</span><figcaption><b>A circle's area.</b> π r²; count squares to check.</figcaption></figure>

## Worked examples

**1. Area from a diameter.** A circle has diameter 10 cm. The radius is 5 cm, so
$A = \pi \times 5^2 = 25\pi \approx 78.54$ cm².

**2. A garden sprinkler.** It turns through 120° and reaches 6 m.

1. Fraction of a circle: $\dfrac{120}{360} = \dfrac13$.
2. Area watered: $\dfrac13 \times \pi \times 6^2 = 12\pi \approx 37.7$ m².
3. Length of the curved edge: $\dfrac13 \times 2\pi \times 6 = 4\pi \approx 12.57$ m.

**3. A pizza slice.** A 30 cm pizza is cut into 8 equal slices. Each slice is a 45° sector with $r = 15$ cm.

1. Area: $\dfrac18 \times \pi \times 15^2 = \dfrac{225\pi}{8} \approx 88.4$ cm².
2. Crust: $\dfrac18 \times 30\pi = 3.75\pi \approx 11.8$ cm.

**4. Finding the angle.** An arc of a circle of radius 10 has length $5\pi$. The whole circumference is $20\pi$, so the
arc is $\dfrac{5\pi}{20\pi} = \dfrac14$ of it, and the angle is $\dfrac14 \times 360° = 90°$.

**5. A washer.** Outer radius 5 mm, hole radius 3 mm. Area $= 25\pi - 9\pi = 16\pi \approx 50.3$ mm².

**6. Gale crater.** The Curiosity rover is exploring Gale crater on Mars, which is about 154 km across. Treated as a
circle of radius 77 km, it covers about $\pi \times 77^2 \approx 18\,600$ km²: room for about 18 600 squares each 1 km
by 1 km. Curiosity has driven only a few tens of kilometres in all, so it has seen a tiny strip of that floor.

## Try it

1. Find the area of a circle of radius 9 cm, exactly and to one decimal place.
2. Find the area of a circle of diameter 12 m.
3. A circle has area 50 cm². Find its radius to two decimal places.
4. A sector has radius 8 cm and angle 60°. Find its area, its arc length and its perimeter.
5. An arc of length $6\pi$ is on a circle of radius 9. What is its central angle?
6. A circle's radius is tripled. What happens to its area? To its circumference?
7. A circular path 2 m wide runs round a round pond of radius 10 m. Find the area of the path.
8. Harder: a square has side 10 cm. A quarter circle of radius 10 cm is drawn inside it, centred on one corner. Find
   the area of the part of the square outside the quarter circle.

??? note "Answers"
    1. $A = 81\pi \approx 254.5$ cm².
    2. $r = 6$, $A = 36\pi \approx 113.1$ m².
    3. $\pi r^2 = 50$, so $r^2 = \dfrac{50}{\pi} \approx 15.92$ and $r \approx 3.99$ cm.
    4. Fraction $\dfrac{60}{360} = \dfrac16$. Area $\dfrac16 \times 64\pi = \dfrac{32\pi}{3} \approx 33.51$ cm². Arc
       $\dfrac16 \times 16\pi = \dfrac{8\pi}{3} \approx 8.38$ cm. Perimeter $8.38 + 8 + 8 = 24.38$ cm.
    5. Whole circumference $18\pi$. Fraction $\dfrac{6\pi}{18\pi} = \dfrac13$. Angle $\dfrac13 \times 360° = 120°$.
    6. The area is multiplied by $3^2 = 9$. The circumference is multiplied by 3.
    7. Outer radius $10 + 2 = 12$ m. Area $\pi \times 12^2 - \pi \times 10^2 = 144\pi - 100\pi = 44\pi \approx 138.2$
       m².
    8. Square $100$ cm². Quarter circle $\dfrac14 \times \pi \times 100 = 25\pi \approx 78.54$ cm². Outside:
       $100 - 25\pi \approx 21.46$ cm².

## Common mistake

**Squaring the diameter.** $A = \pi r^2$ uses the **radius**. With diameter 10, the area is $25\pi$, not $100\pi$.
Halve first, then square.

**Mixing up $2\pi r$ and $\pi r^2$.** Circumference is a length (cm), area is an area (cm²). A quick test: area has
$r$ **squared**, and its units are squared too. If your answer for an area is in plain cm, you used the wrong one.

## Where it leads

- Previous lesson: [Pi and the circumference](04-pi-circumference.md).
- Next lesson: [Slope and the equation of a line](06-slope-line-equation.md).
- Areas of other shapes, and the volumes of cylinders, cones and spheres: [Measurement](../../measurement/index.md).
- Arcs measured by length instead of degrees become **radians**: [level 8](../level-8/index.md).
- Both proofs here, made exact, are integrals: [MAT137 Unit 7: the definition of the
  integral](../../../uoft/MAT137/unit07.md).
- This level: [Level 6: Pythagoras and circles](index.md).
