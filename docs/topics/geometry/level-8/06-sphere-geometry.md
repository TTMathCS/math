---
title: "Beyond Euclid: geometry on a sphere"
---

# Beyond Euclid: geometry on a sphere

*Geometry · level 8, lesson 6 of 6*

## A question to start

Start at the North Pole. Walk straight south until you reach the equator. Turn left through a right angle and walk
along the equator for a quarter of the way round the Earth. Turn left through another right angle and walk straight
north. You arrive back at the North Pole, and the path you came in on meets the path you started on at a right angle.

You have walked a triangle: three straight paths, three corners. And every one of its angles is 90°. The angles add to
**270°**. But [the first lesson of this level](01-geometric-proof.md) proved that every triangle's angles add to exactly
180°. Was the proof wrong? No: the proof used Euclid's parallel postulate, and on the surface of a sphere that
postulate is false. This lesson explores a geometry that is not Euclid's, and it is the geometry of the planet you
live on.

## The idea

### What is a straight line on a sphere?

On a flat plane, a straight line is the **shortest path** between two points. On a curved surface, we keep that
meaning: a "straight line" is the shortest path that stays on the surface. (The general name for such paths is
**geodesics**.)

On a sphere, the shortest paths lie along **great circles**: circles on the sphere whose centre is the centre of the
sphere, cutting it into two equal halves. The equator is a great circle. So is every line of longitude (each one,
joined with the one opposite it, makes a full great circle through both poles). Lines of latitude other than the
equator are **not** great circles: they are smaller circles whose centres lie on the Earth's axis, not at the Earth's
centre.

Why is the great circle the shortest? Here is the idea. Through two points on a sphere there are many circles, of
different sizes. A bigger circle bends less. The great circle is the biggest circle that fits on the sphere, so its
arc between the two points is the least bent and the shortest. (A full proof uses calculus.)

### Great circles have no parallels

Any two great circles always cross, in exactly two points, opposite each other (like two lines of longitude, which
meet at both poles). Each great circle lies in a plane through the sphere's centre, two such planes always share a
line through the centre, and that line pierces the sphere at two opposite points.

So on a sphere there are **no parallel lines at all**. Through a point not on a given great circle, every great circle
you draw meets it. Euclid's fifth postulate ("exactly one parallel") fails. And the step "draw the line through $C$
parallel to $AB$" in the angle-sum proof cannot even be taken. The proof does not apply, and its conclusion is false.

### The triangle with three right angles

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 240" role="img" aria-label="A sphere with its equator. A triangle is shaded with corners at the North Pole, at a point on the equator facing us, and at a point on the equator at the right edge. All three of its angles are right angles">
  <circle cx="150" cy="120" r="100" fill="#9cc9ea" opacity="0.2" stroke="currentColor" stroke-width="2"/>
  <path d="M 50 120 A 100 25 0 0 1 250 120" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  <path d="M 50 120 A 100 25 0 0 0 250 120" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 150 20 L 150 145 A 100 25 0 0 0 250 120 A 100 100 0 0 0 150 20 Z" fill="#eea66f" opacity="0.55" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="150" cy="20" r="3.5" fill="currentColor"/><circle cx="150" cy="145" r="3.5" fill="currentColor"/><circle cx="250" cy="120" r="3.5" fill="currentColor"/>
  <g font-size="13" fill="currentColor">
    <text x="128" y="14">North Pole</text><text x="132" y="164">A</text><text x="256" y="124">B</text>
    <text x="156" y="44">90°</text><text x="156" y="136">90°</text><text x="218" y="114">90°</text>
    <text x="20" y="232">equator (great circle)</text>
  </g>
</svg>
</div>

The triangle from the opening question has corners at the North Pole and at two points $A$ and $B$ on the equator, a
quarter of the way round from each other. Lines of longitude meet the equator at right angles, so the angles at $A$
and $B$ are 90°; the two lines of longitude leave the pole a quarter turn apart, so the angle at the pole is 90° too.
The triangle covers exactly one eighth of the sphere: the northern half, cut into four equal wedges.

### How much more than 180°? Girard's theorem

On a sphere, the angles of a triangle always add up to **more** than 180° (more than $\pi$ in radians). The amount
by which they exceed it is called the **spherical excess**, and it is tied exactly to the triangle's area. For a
sphere of radius $R$, with the angles $A$, $B$, $C$ in radians:

$$\text{Area} = R^2\,(A + B + C - \pi)$$

This is **Girard's theorem** (after Albert Girard, who stated it in the 1600s). Check it on the opening triangle:
$R^2\left(\tfrac{\pi}{2} \times 3 - \pi\right) = \tfrac{\pi}{2}R^2$, and one eighth of the sphere's surface area $4\pi R^2$
is also $\tfrac{\pi}{2}R^2$. They agree.

**Why it is true.** A **lune** is the slice between two great circles, like a segment of an orange, running from one
crossing point to the opposite one. A lune with angle $\alpha$ is the fraction $\tfrac{\alpha}{2\pi}$ of the whole sphere,
so its area is $\tfrac{\alpha}{2\pi} \times 4\pi R^2 = 2\alpha R^2$.

1. Extend the three sides of the triangle to full great circles. Each corner of the triangle sits in a lune with that
   corner's angle, and the lune has a twin on the opposite side of the sphere. The six lunes have total area
   $2 \times (2AR^2 + 2BR^2 + 2CR^2) = 4R^2(A + B + C)$.
2. These six lunes cover the whole sphere. Most points are covered exactly once, but the triangle itself is inside all
   three of its lunes, so it is covered three times; the same goes for its twin triangle on the opposite side.
3. So the six lunes add up to the sphere plus two extra copies of the triangle and two extra copies of its twin:
   $4R^2(A + B + C) = 4\pi R^2 + 4 \times \text{Area}$.
4. Divide by 4 and rearrange: $\text{Area} = R^2(A + B + C - \pi)$. ∎

A remarkable consequence: on a sphere, the angles of a triangle tell you its **size**. There are no similar triangles
of different sizes, because a bigger triangle has bigger angles. Tiny triangles have almost no excess, which is why a
small patch of the Earth looks perfectly Euclidean: a football field's triangles add to 180° as closely as anyone can
measure.

### Distances and flight paths

Put the sphere's centre at the origin. A point at latitude $\varphi$ and longitude $\lambda$ has position vector

$$R\,(\cos\varphi\cos\lambda,\ \cos\varphi\sin\lambda,\ \sin\varphi)$$

The great-circle distance between two points is $R\sigma$, where $\sigma$ is the angle between their position vectors
(arc length $= r\theta$, from [lesson 2](02-radians-unit-circle.md)). And the angle between two vectors comes from the
[dot product](05-dot-product.md). Working out the dot product of the two unit vectors gives

$$\cos\sigma = \sin\varphi_1\sin\varphi_2 + \cos\varphi_1\cos\varphi_2\cos(\lambda_1 - \lambda_2)$$

This is why flights between distant cities in the northern hemisphere often curve far to the north on a flat map: the
shortest route is a great circle, and on most flat maps great circles look like bent curves.

### Other geometries: the end of a 2000-year question

For centuries, mathematicians tried to prove the parallel postulate from Euclid's other four, and failed. In the 1820s
and 1830s, János Bolyai in Hungary and Nikolai Lobachevsky in Russia independently published a geometry in which, through
a point off a line, there are **infinitely many** parallels. (Gauss, in Germany, had reached similar ideas privately.)
This **hyperbolic geometry** is perfectly consistent, and in it the angles of every triangle add to **less** than 180°.
Its surface curves the other way from a sphere, like a saddle at every point. The artist M. C. Escher drew a famous
series of prints, *Circle Limit*, that show hyperbolic geometry as a disc filled with fish or angels shrinking towards
the rim.

So there are three kinds of plane geometry, sorted by how many parallels pass through a point off a line:

| Geometry | Parallels through a point | Angle sum of a triangle | Curvature |
| --- | --- | --- | --- |
| Spherical (elliptic) | none | more than 180° | positive, like a ball |
| Euclidean | exactly one | exactly 180° | zero, flat |
| Hyperbolic | infinitely many | less than 180° | negative, like a saddle |

Which one describes the space we live in? The story goes that Gauss himself surveyed a huge triangle between three
mountain tops in Germany to check whether its angles added to 180° (they did, within his measuring error). In the 20th
century, Einstein's general theory of relativity described gravity as the **curvature** of space and time. Space near
massive objects is not exactly Euclidean, and spacecraft navigation and GPS satellites have to take tiny relativistic
effects into account. The "obvious" geometry of the flat page turned out to be one choice among several.

## Worked examples

**1. Checking Girard on a smaller triangle.** A triangle on a sphere of radius 1 has angles 90°, 90° and 45° (like
the opening triangle, but with the two lines of longitude only 45° apart). Its area is
$1^2\left(\tfrac{\pi}{2} + \tfrac{\pi}{2} + \tfrac{\pi}{4} - \pi\right) = \tfrac{\pi}{4}$. Check: it is half of the
eighth-sphere triangle, and $\tfrac12 \times \tfrac{\pi}{2} = \tfrac{\pi}{4}$.

**2. Toronto to Tokyo.** Toronto is at about 43.65° N, 79.38° W, and Tokyo at about 35.68° N, 139.69° E. Take the
Earth's radius as 6371 km. (West longitudes are negative.)

1. $\lambda_1 - \lambda_2 = -79.38° - 139.69° = -219.07°$, and $\cos(-219.07°) \approx -0.7764$.
2. $\cos\sigma \approx \sin 43.65° \sin 35.68° + \cos 43.65° \cos 35.68° \times (-0.7764) \approx 0.4026 - 0.4563 = -0.0537$.
3. $\sigma \approx 93.08°$, which is $93.08 \times \tfrac{\pi}{180} \approx 1.6245$ radians.
4. Distance $\approx 6371 \times 1.6245 \approx 10\,350$ km.

Following the great circle point by point, the route reaches about 68° north, just inside the Arctic Circle, even
though both cities are below 44° north. Real flights fly close to such routes, adjusted for winds.

**3. Between two rovers on Mars.** Curiosity landed in Gale crater at about 4.59° S, 137.44° E, and Perseverance in
Jezero crater at about 18.44° N, 77.45° E. Mars's mean radius is about 3389.5 km.

1. $\lambda_1 - \lambda_2 = 137.44° - 77.45° = 59.99°$, and the first latitude is $-4.59°$ (south is negative).
2. $\cos\sigma \approx \sin(-4.59°)\sin 18.44° + \cos 4.59° \cos 18.44° \cos 59.99° \approx -0.0253 + 0.4730 = 0.4477$.
3. $\sigma \approx 63.40°$, about $1.1066$ radians.
4. Distance $\approx 3389.5 \times 1.1066 \approx 3750$ km, measured over the surface. The two rovers are thousands of
   kilometres apart, on a planet about half the width of the Earth.

**4. Not along the parallel.** Two places both at 60° N are 90° of longitude apart. Walking due east along the 60°
parallel, the distance is a quarter of a circle of radius $6371\cos 60° = 3185.5$ km, which is
$\tfrac{\pi}{2} \times 3185.5 \approx 5004$ km. The great circle formula gives
$\cos\sigma = \sin^2 60° + \cos^2 60° \cos 90° = 0.75$, so $\sigma \approx 41.41°$ and the distance is about
$6371 \times 0.7227 \approx 4605$ km. The "straight east" path is about 400 km longer.

## Try it

1. Is the Tropic of Cancer (the line of latitude at about 23.4° N) a great circle? Explain.
2. A spherical triangle has angles 80°, 70° and 60° on a sphere of radius 10. Find its area.
3. Can a spherical triangle have two obtuse angles? Give an example or explain why not.
4. A triangle on the Earth (radius 6371 km) has angles adding to 180.5°. Find its area.
5. London is at about 51.50° N, 0.13° W and New York at about 40.71° N, 74.01° W. Find the great-circle distance
   (radius 6371 km).
6. Why do two lines of longitude, which are "parallel" at the equator (both meet it at right angles), still meet?
7. In hyperbolic geometry (with curvature $-1$), the area of a triangle is $\pi - (A + B + C)$. What is the largest
   possible area of a hyperbolic triangle?

??? note "Answers"
    1. No. Its centre is on the Earth's axis, 23.4° of latitude up from the Earth's centre, not at the centre itself,
       and its radius is $R\cos 23.4°$, smaller than $R$. Only the equator, among the lines of latitude, is a great
       circle.
    2. Excess $= 80° + 70° + 60° - 180° = 30° = \tfrac{\pi}{6}$. Area $= 10^2 \times \tfrac{\pi}{6} = \tfrac{50\pi}{3} \approx 52.4$.
    3. Yes; it can even have three. Take corners at the North Pole and at two points $A$ and $B$ at 10° S, 120° of
       longitude apart. The angle at the pole is 120°. The great circle from $A$ to $B$ bulges towards the South Pole,
       so it leaves $A$ heading south of east, and its angle with the line of longitude running north from $A$ is more
       than 90° (about 106.7°, by calculation). So all three angles are obtuse. On a sphere, angle sums can be
       anything between 180° and 540°.
    4. Excess $0.5° = 0.5 \times \tfrac{\pi}{180} \approx 0.008727$ rad. Area $\approx 6371^2 \times 0.008727 \approx 354\,000$ km²,
       roughly the size of Germany. Only enormous triangles show a measurable excess.
    5. $\cos\sigma = \sin 51.50° \sin 40.71° + \cos 51.50° \cos 40.71° \cos(73.88°) \approx 0.5104 + 0.1310 = 0.6414$, so
       $\sigma \approx 50.10°$, about $0.8744$ rad. Distance $\approx 6371 \times 0.8744 \approx 5570$ km.
    6. "Both perpendicular to the same line" makes lines parallel only in Euclidean geometry; proving it needs the
       parallel postulate. On a sphere, two great circles both perpendicular to the equator are two lines of
       longitude, and they meet at both poles. There are no parallels on a sphere.
    7. The angles cannot be negative, so the area is less than $\pi$; it approaches $\pi$ as all three angles shrink
       towards 0 (the corners run off towards infinity). Every hyperbolic triangle, however large its sides, has area
       less than $\pi$.

## Common mistake

**Trusting a flat map.** A straight line on most world maps is not the shortest route. The Mercator map, for example,
keeps compass directions straight but stretches the far north and south, so great circles appear as curves bowing
towards the poles. Compute with the sphere, not the picture.

**Mixing degrees and radians in Girard's theorem.** The excess must be in **radians** before multiplying by $R^2$.

## Where it leads

- Previous lesson: [The dot product and projections](05-dot-product.md).
- The level page: [Level 8: Proof, radians and vectors](index.md). This is the last lesson of the geometry topic;
  back to the [Geometry topic page](../index.md).
- Where the parallel postulate entered: [How to write a geometric proof](01-geometric-proof.md).
- Endless surfaces, infinitely many parallels, and other ideas that stretch intuition: [Infinity](../../infinity/index.md).
- Curved spaces handled with calculus (manifolds and Stokes' theorem) on the U of T shelf:
  [MAT257 Unit 13 (manifolds in R^n)](../../../uoft/MAT257Y1/unit13.md). Space and time in physics:
  [PHY132 Unit 10 (special relativity)](../../../uoft/PHY132H1/unit10.md), the first step towards Einstein's general
  theory.
