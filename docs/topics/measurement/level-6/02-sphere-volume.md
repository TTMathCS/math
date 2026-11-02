---
title: "Volume of a sphere"
---

# Volume of a sphere

*Measurement · level 6, lesson 2 of 6*

## A question to start

Drop a ball into a can that fits it exactly: the ball touches the bottom, the top and the sides all the way round.
Now fill the gaps around the ball with water. What fraction of the can is ball, and what fraction is water?

About 2200 years ago the Greek mathematician Archimedes found the answer, and it is beautifully simple: the ball
takes up exactly **two thirds** of the can. The story goes that he was so proud of this discovery that he asked for a
sphere inside a cylinder to be carved on his tomb, and the Roman writer Cicero later reported finding a tomb marked
that way in Sicily.

In this lesson you will prove Archimedes's result yourself, find the volume of any ball, and then work out the
volume of a whole planet: Mars.

## The idea

### What a sphere is

A **sphere** is the surface of a perfect ball: every point on it is the same distance from one point, the **centre**.
That distance is the **radius** $r$; the distance straight through the centre is the **diameter** $d = 2r$. (Strictly,
"sphere" is the surface and "ball" is the solid inside, but most people use "volume of a sphere" for the solid.)

Cutting a sphere through its centre gives two **hemispheres** ("hemi" means half). The flat face of each hemisphere
is a circle of radius $r$, the largest circle you can draw on the sphere: a **great circle**.

### The formula

$$V = \tfrac43 \pi r^3$$

Compare it with the cylinder that fits around the sphere exactly. Its radius is $r$ and its height is the diameter,
$2r$, so its volume is $\pi r^2 \times 2r = 2\pi r^3$. And

$$\frac{\tfrac43 \pi r^3}{2\pi r^3} = \frac{4}{3} \div 2 = \frac{2}{3}$$

That is Archimedes's two thirds. Add the cone that fits in the same cylinder (base radius $r$, height $2r$,
volume $\tfrac13 \pi r^2 \times 2r = \tfrac23 \pi r^3$) and you get a lovely pattern:

| Solid in the same cylinder | Volume | Share |
| --- | --- | --- |
| cone | $\tfrac23 \pi r^3$ | 1 part |
| sphere | $\tfrac43 \pi r^3$ | 2 parts |
| cylinder | $2 \pi r^3$ | 3 parts |

Cone, sphere and cylinder are in the ratio **1 : 2 : 3**. In particular, the cone and the sphere together have
exactly the volume of the cylinder.

### Why: a hemisphere plus a cone makes a cylinder

Here is a proof that uses only the circle's area, Pythagoras and Cavalieri's principle from
[level 5](../level-5/01-prism-volume.md) (solids with equal slices at every height have equal volumes). It is close
in spirit to Archimedes's own method.

Set three solids side by side on a table, all of height $r$:

- a **hemisphere** of radius $r$, flat face down;
- a **cone** of radius $r$ and height $r$, standing on its **point**, so its wide circular face is at the top;
- a **cylinder** of radius $r$ and height $r$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="Side views of a hemisphere, an upside-down cone and a cylinder, all of radius r and height r. A horizontal slice at the same height y is drawn across each.">
  <path d="M 10 140 A 60 60 0 0 1 130 140 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/>
  <line x1="18" y1="110" x2="122" y2="110" stroke="currentColor" stroke-width="2.5"/>
  <line x1="70" y1="140" x2="70" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="70" y1="110" x2="122" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="140" x2="122" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="60" y="130" font-size="11" fill="currentColor">y</text>
  <text x="100" y="135" font-size="11" fill="currentColor">r</text>
  <text x="94" y="105" font-size="11" fill="currentColor">x</text>
  <polygon points="210,140 150,80 270,80" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="110" x2="240" y2="110" stroke="currentColor" stroke-width="2.5"/>
  <rect x="290" y="80" width="120" height="60" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/>
  <line x1="290" y1="110" x2="410" y2="110" stroke="currentColor" stroke-width="2.5"/>
  <line x1="5" y1="140" x2="415" y2="140" stroke="currentColor" stroke-width="1"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="70" y="158">hemisphere</text>
    <text x="70" y="172">slice π(r² − y²)</text>
    <text x="210" y="158">cone on its point</text>
    <text x="210" y="172">slice πy²</text>
    <text x="350" y="158">cylinder</text>
    <text x="350" y="172">slice πr²</text>
  </g>
</svg>
</div>

Now slice all three at the same height $y$ above the table.

- **The hemisphere.** The slice is a circle. Its radius $x$ is one side of a right triangle whose other side is $y$
  (straight up from the centre) and whose hypotenuse is a radius $r$ of the sphere. By Pythagoras, $x^2 + y^2 = r^2$,
  so $x^2 = r^2 - y^2$. The slice's area is $\pi x^2 = \pi (r^2 - y^2)$.
- **The cone.** Its sides slope at 45°, because it rises $r$ while it widens by $r$. So at height $y$ its radius is
  exactly $y$, and the slice's area is $\pi y^2$.
- **The cylinder.** Every slice is a full circle, of area $\pi r^2$.

Add the hemisphere's slice and the cone's slice:

$$\pi (r^2 - y^2) + \pi y^2 = \pi r^2$$

At **every** height, the hemisphere's slice plus the cone's slice is exactly the cylinder's slice. By Cavalieri's
principle (adding up all the slices), the hemisphere plus the cone has the same volume as the cylinder:

$$\text{hemisphere} = \text{cylinder} - \text{cone} = \pi r^2 \times r - \tfrac13 \pi r^2 \times r = \pi r^3 - \tfrac13 \pi r^3 = \tfrac23 \pi r^3$$

A whole sphere is two hemispheres, so

$$V_{\text{sphere}} = 2 \times \tfrac23 \pi r^3 = \tfrac43 \pi r^3$$

Notice how much this proof leans on what you already know: the circle's area, Pythagoras, the cone's
[one third](01-pyramid-cone-volume.md), and slicing. Nothing in it is guessed.

### What $r^3$ tells you

The radius is cubed. Double the radius of a ball and its volume is multiplied by $2^3 = 8$; triple it and the volume
is multiplied by $3^3 = 27$. That is why a ball only a little bigger holds a lot more. A pizza dough ball 10% wider
holds $1.1^3 \approx 1.33$ times as much dough, a third more.

### Working backwards: from volume to radius

If you know the volume, rearrange: $r^3 = \dfrac{3V}{4\pi}$, so $r = \sqrt[3]{\dfrac{3V}{4\pi}}$. The cube root
(the number that, cubed, gives what is under the sign) is on any scientific calculator; see
[Square roots and cube roots](../../numbers/level-5/06-square-roots.md).

## Worked examples

**1. A ball.** A ball has radius 6 cm. $V = \tfrac43 \pi \times 6^3 = \tfrac43 \pi \times 216 = 288\pi \approx 904.8$ cm³.

**2. A basketball.** A basketball is about 24 cm across. How many litres of air does it hold?

1. $r = 12$ cm.
2. $V = \tfrac43 \pi \times 12^3 = \tfrac43 \pi \times 1728 = 2304\pi \approx 7238$ cm³.
3. That is about 7.2 litres.

**3. The volume of Mars.** Mars has a mean radius of about 3389.5 km.

1. $r^3 = 3389.5^3 \approx 3.894 \times 10^{10}$ km³.
2. $V = \tfrac43 \pi \times 3.894 \times 10^{10} \approx 1.63 \times 10^{11}$ km³.

That is about 163 billion cubic kilometres, or $1.6 \times 10^{11}$ km³ in
[scientific notation](../../numbers/level-5/05-scientific-notation.md).

**4. Mars and Earth.** Earth's mean radius is about 6371 km. How many Marses would fill the Earth?

1. The $\tfrac43 \pi$ is the same for both, so the ratio of volumes is the ratio of radii **cubed**.
2. $\dfrac{3389.5}{6371} \approx 0.532$, and $0.532^3 \approx 0.151$.
3. Mars has about 15% of Earth's volume, so about $1 \div 0.151 \approx 6.6$ Marses would fill the Earth, even though
   Mars is more than half as wide.

**5. A mixing bowl.** A hemispherical bowl has an inside radius of 10 cm. How much does it hold when full?

$\tfrac23 \pi \times 10^3 = \tfrac{2000}{3}\pi \approx 2094$ cm³, a little over 2 litres.

**6. From volume to radius.** A ball holds 500 cm³. What is its radius?

$r^3 = \dfrac{3 \times 500}{4\pi} = \dfrac{375}{\pi} \approx 119.4$, so $r = \sqrt[3]{119.4} \approx 4.92$ cm.
Check: $\tfrac43 \pi \times 4.92^3 \approx 499$ ✓.

## Try it

1. Find the volume of a sphere of radius 3 cm, exactly and to one decimal place.
2. A ball is 10 cm across. Find its volume.
3. A dome is a hemisphere of radius 15 m. How much air is inside it?
4. An ice-cream cone has radius 3 cm and height 10 cm, filled level with the top and with a hemisphere of ice cream on
   top of the same radius. Find the total volume of ice cream.
5. The Moon has a mean radius of about 1737 km. Find its volume, and estimate how many Moons would fill Mars.
6. A ball fits exactly inside a cube with edges of 10 cm. What percentage of the cube does the ball fill?
7. A ball holds 1 litre. What is its radius, to one decimal place?
8. Use the 1 : 2 : 3 pattern to explain why a sphere is two thirds of the cylinder around it. Then use $r^3$ to
   explain why Mars, with about 53% of Earth's radius, has only about 15% of its volume.

??? note "Answers"
    1. $\tfrac43 \pi \times 27 = 36\pi \approx 113.1$ cm³.
    2. $r = 5$: $\tfrac43 \pi \times 125 = \tfrac{500}{3}\pi \approx 523.6$ cm³.
    3. $\tfrac23 \pi \times 15^3 = \tfrac23 \pi \times 3375 = 2250\pi \approx 7069$ m³.
    4. Cone $\tfrac13 \pi \times 9 \times 10 = 30\pi$; hemisphere $\tfrac23 \pi \times 27 = 18\pi$. Total
       $48\pi \approx 150.8$ cm³.
    5. $\tfrac43 \pi \times 1737^3 \approx 2.2 \times 10^{10}$ km³. Mars $\approx 1.63 \times 10^{11}$ km³, and
       $1.63 \times 10^{11} \div 2.2 \times 10^{10} \approx 7.4$. About 7 Moons would fill Mars.
    6. $r = 5$: ball $\approx 523.6$ cm³; cube $1000$ cm³. $523.6 \div 1000 \approx 52.4\%$. (Exactly $\tfrac{\pi}{6}$.)
    7. 1 L = 1000 cm³. $r^3 = \dfrac{3000}{4\pi} = \dfrac{750}{\pi} \approx 238.7$, so $r \approx 6.2$ cm.
    8. The cylinder is 3 parts and the sphere 2 of them, so the sphere is $\tfrac23$ of the cylinder. For Mars,
       volume goes with the cube of the radius: $0.53^3 = 0.53 \times 0.53 \times 0.53 \approx 0.149$, about 15%.

## Common mistake

**Squaring instead of cubing.** The volume of a sphere has $r^3$, not $r^2$. A quick check with units: $r^3$ is in
cm³, a volume; $r^2$ would be cm², an area.

**Putting in the diameter.** If a ball is "24 cm across", use $r = 12$. Using 24 makes the answer
$2^3 = 8$ times too big.

## Where it leads

- Back: [Volume of pyramids and cones](01-pyramid-cone-volume.md) · Next:
  [Surface area of cones, pyramids and spheres](03-curved-surface-area.md)
- [Level 6 page](index.md) · [Measurement topic page](../index.md)
- The size of Mars in lengths: [Level 4](../level-4/index.md). Its surface area: [lesson 3](03-curved-surface-area.md).
- Pythagoras in the proof: [Geometry: Pythagorean proofs](../../geometry/level-6/01-pythagorean-proofs.md). Geometry
  on the surface of a sphere: [Geometry level 8](../../geometry/level-8/06-sphere-geometry.md).
- Volumes of solids of revolution, like the sphere, with integrals:
  [MAT137 Unit 10 (applications of the integral)](../../../uoft/MAT137/unit10.md).
