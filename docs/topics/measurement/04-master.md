---
title: "Master: Volume and surface area"
---

# Master: Volume and surface area

*Measurement · step 4 of 5*

## A question to start

Mars is a little more than half as wide as Earth. So if Earth were a hollow ball, how many Mars-sized balls of rock
would it take to fill it? Two? Four?

The answer is about **six and a half**. Halving the width of a ball does not halve the space inside it; it cuts it
to about an eighth. Yet the **surface** of Mars, all its land put together, is almost exactly as big as all the dry
land on Earth. Volume and surface area grow in very different ways, and this page shows how to calculate both.

## The idea

### Volume

**Volume** is the amount of space a solid object takes up. Just as area counts unit squares, volume counts **unit
cubes**:

- a **cubic centimetre** (cm³) is a cube 1 cm on each edge, about the size of a sugar cube;
- a **cubic metre** (m³) is a cube 1 m on each edge, big enough for a person to crouch inside.

The little 3 is a reminder that volume has three directions: length, width and height.

### Boxes and prisms

A box (a **cuboid**) 4 cm long, 3 cm wide and 2 cm high holds 2 layers, each of $4 \times 3 = 12$ cubes: 24 cm³.

$$\text{volume of a cuboid} = \text{length} \times \text{width} \times \text{height}$$

A **prism** is any solid with the same shape all the way through, like a loaf of sliced bread: a triangular prism,
a hexagonal prism. Each slice has the same area, so:

$$\text{volume of a prism} = \text{area of the end} \times \text{length}$$

A **cylinder** (the shape of a can) is a prism with a circle at each end. With radius $r$ and height $h$:

$$V = \pi r^2 h$$

### Pyramids and cones

A **pyramid** rises from a flat base to a point. A **cone** is a pyramid with a circular base. Fill a cone with sand
and pour it into a cylinder with the same base and height: it takes exactly **three** cones to fill the cylinder.
The same is true for a pyramid and the prism it fits in. So:

$$V = \tfrac13 \times \text{area of the base} \times \text{height} \qquad \text{for a cone: } V = \tfrac13 \pi r^2 h$$

### Spheres

A **sphere** is a perfect ball: every point on its surface is the same distance $r$ from its centre.

$$V = \tfrac43 \pi r^3$$

Archimedes, about 2200 years ago, discovered that a sphere fills exactly two thirds of the smallest cylinder it fits
inside. The story goes that he was so proud of this that he asked for a sphere inside a cylinder to be carved on
his tomb.

### Capacity: litres and cubic centimetres

Volume and capacity are linked exactly:

$$1 \text{ cm}^3 = 1 \text{ mL} \qquad 1000 \text{ cm}^3 = 1 \text{ L} \qquad 1 \text{ m}^3 = 1000 \text{ L}$$

A litre is the volume of a cube 10 cm on each edge. A cubic metre of water is 1000 litres and weighs about a tonne.

### Surface area

The **surface area** of a solid is the total area of all its outside surfaces: how much paint it would take to cover
it, or how much cardboard to make it. It is an area, so it is measured in cm² or m².

The easiest way to find it is to imagine **unfolding** the solid flat. That flat pattern is called a **net**.

- **A cuboid** has 6 rectangular faces in 3 matching pairs: $\;SA = 2(lw + lh + wh)$.
- **A cylinder** unfolds into two circles and one rectangle. The rectangle's width is the height $h$, and its
  length is the distance around the circle, $2\pi r$. So $\;SA = 2\pi r^2 + 2\pi r h$.
- **A sphere** cannot be unfolded flat (which is why every flat map of a globe stretches something). Archimedes found
  its area too: exactly four times the area of a circle with the same radius,

$$SA = 4\pi r^2$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="The net of a cylinder: two circles and a rectangle whose length is the distance around the circle and whose width is the height">
  <circle cx="60" cy="40" r="28" fill="#eea66f"/>
  <circle cx="60" cy="110" r="28" fill="#eea66f"/>
  <rect x="110" y="45" width="176" height="60" fill="#9cc9ea"/>
  <g font-size="13" fill="currentColor">
    <text x="198" y="38" text-anchor="middle">length 2πr (once round the circle)</text>
    <text x="294" y="80">height h</text>
    <text x="40" y="44">r</text>
  </g>
  <line x1="60" y1="40" x2="88" y2="40" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

## Worked examples

**1. A water tank.** A cylindrical tank has radius 0.5 m and height 1.2 m. How many litres does it hold?

1. $V = \pi r^2 h = \pi \times 0.5^2 \times 1.2 = \pi \times 0.25 \times 1.2 = 0.3\pi \approx 0.942$ m³.
2. Each m³ is 1000 L, so the tank holds about **942 litres**.

**2. Paint for a box.** A box is 4 m by 3 m by 2 m. What area must be painted, outside, on all six faces?

1. The three different faces: $4 \times 3 = 12$, $4 \times 2 = 8$, $3 \times 2 = 6$ m².
2. Each comes twice: $SA = 2(12 + 8 + 6) = 52$ m².

**3. Mars and Earth.** Mars has an average radius of about 3390 km; Earth's is about 6371 km.

1. Volumes: the $\tfrac43\pi$ is the same for both, so the ratio of volumes is the ratio of the radii **cubed**:
   $\left(\dfrac{3390}{6371}\right)^3 \approx 0.532^3 \approx 0.151$. Mars has about 15% of Earth's volume, so about
   $1 \div 0.151 \approx 6.6$ Mars would fill Earth.
2. Surface of Mars: $4\pi r^2 = 4\pi \times 3390^2 \approx 144$ million km².
3. Earth's dry land covers about 149 million km² (the oceans cover the rest of its 510 million km²). So the whole
   surface of Mars is a little less than all the land on Earth put together.

**4. An ice-cream cone.** A cone has radius 3 cm and height 10 cm. $V = \tfrac13 \pi \times 3^2 \times 10 = 30\pi \approx 94.2$ cm³.

## Try it

1. Find the volume and surface area of a box 4 cm by 3 cm by 2 cm.
2. A cylinder has radius 2 cm and height 5 cm. Find its volume and surface area, to one decimal place.
3. A cone has radius 3 cm and height 4 cm. Find its volume.
4. A ball has radius 6 cm. Find its volume and surface area, to one decimal place.
5. A fish tank is 2 m long, 1.5 m wide and 0.8 m deep. How many litres does it hold?
6. How many cubic centimetres are there in one cubic metre?

??? note "Answers"
    1. $V = 4 \times 3 \times 2 = 24$ cm³. $SA = 2(12 + 8 + 6) = 52$ cm².
    2. $V = \pi \times 2^2 \times 5 = 20\pi \approx 62.8$ cm³. $SA = 2\pi \times 2^2 + 2\pi \times 2 \times 5 = 8\pi + 20\pi = 28\pi \approx 88.0$ cm².
    3. $V = \tfrac13 \pi \times 3^2 \times 4 = 12\pi \approx 37.7$ cm³.
    4. $V = \tfrac43 \pi \times 6^3 = \tfrac43 \pi \times 216 = 288\pi \approx 904.8$ cm³. $SA = 4\pi \times 36 = 144\pi \approx 452.4$ cm².
    5. $2 \times 1.5 \times 0.8 = 2.4$ m³, and each m³ is 1000 L, so 2400 L.
    6. A cubic metre is 100 cm by 100 cm by 100 cm: $100 \times 100 \times 100 = 1\,000\,000$ cm³.

## Common mistake

**Forgetting the $\tfrac13$, or using the slant.** A cone's volume is a third of the cylinder around it, not the whole
cylinder. And, as with triangles, the **height** of a cone or pyramid is measured straight up from the base to the
tip, not along the sloping side. A quick check: a cone should always come out smaller than the cylinder with the
same base and height.

## Where it leads

- Next step: [Beyond: scale, units and accuracy](05-beyond.md), where we see why volume grows so much faster than
  area or length, and what that means for ants, elephants and planets.
- Back a step: [Build: area](03-build.md)
- Circles, $\pi$ and Pythagoras: [Geometry](../geometry/level-6/index.md).
- Why a cone is exactly a third of a cylinder, and how to find the volume of any curved solid, is proved with
  integrals on the U of T shelf: [MAT137 Unit 10 (applications of the integral)](../../uoft/MAT137/unit10.md).
