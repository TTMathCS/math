---
title: "Gabriel's horn"
---

# Gabriel's horn

*Infinity and strange math · level 8, lesson 3 of 7*

## A question to start

Here is a trumpet that goes on forever. Its mouth is a circle of radius 1, and it gets thinner and thinner as it
stretches out to infinity, never quite closing.

You want to paint it. Filling it with paint is easy: it holds exactly $\pi \approx 3.14$ cubic units, a finite amount.
Pour that in and the whole inside is soaked. But painting its **surface** is impossible: the surface area is
infinite, and no finite can of paint will ever cover it.

So you can fill it, but you cannot paint it? This is the **painter's paradox**. The shape is called **Gabriel's
horn**, after the angel Gabriel who, in the story, blows a trumpet. Evangelista Torricelli studied it in the 1640s, and
his discovery that an infinitely long solid could have finite volume shocked the mathematicians of his time.

## The idea

### Building the horn

Take the curve $y = \tfrac1x$ for $x \ge 1$. It starts at height 1 when $x = 1$ and sinks towards the $x$-axis,
getting closer forever but never touching it (an asymptote, from level 5). Now spin the curve around the $x$-axis.
Each point of the curve traces a circle, and together they make a horn.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 200" role="img" aria-label="Gabriel's horn: the curve y equals 1 over x for x from 1 onwards, turned around the x-axis, makes a long horn that gets thinner forever">
  <polygon points="30.0,30.0 32.5,33.3 35.0,36.4 37.5,39.1 40.0,41.7 42.5,44.0 45.0,46.2 47.5,48.1 50.0,50.0 52.5,51.7 55.0,53.3 57.5,54.8 60.0,56.2 62.5,57.6 65.0,58.8 67.5,60.0 70.0,61.1 72.5,62.2 75.0,63.2 77.5,64.1 80.0,65.0 82.5,65.9 85.0,66.7 87.5,67.4 90.0,68.2 92.5,68.9 95.0,69.6 97.5,70.2 100.0,70.8 102.5,71.4 105.0,72.0 107.5,72.5 110.0,73.1 112.5,73.6 115.0,74.1 117.5,74.5 120.0,75.0 122.5,75.4 125.0,75.9 127.5,76.3 130.0,76.7 132.5,77.0 135.0,77.4 137.5,77.8 140.0,78.1 142.5,78.5 145.0,78.8 147.5,79.1 150.0,79.4 152.5,79.7 155.0,80.0 157.5,80.3 160.0,80.6 162.5,80.8 165.0,81.1 167.5,81.3 170.0,81.6 172.5,81.8 175.0,82.1 177.5,82.3 180.0,82.5 182.5,82.7 185.0,82.9 187.5,83.1 190.0,83.3 192.5,83.5 195.0,83.7 197.5,83.9 200.0,84.1 202.5,84.3 205.0,84.4 207.5,84.6 210.0,84.8 212.5,84.9 215.0,85.1 217.5,85.3 220.0,85.4 222.5,85.6 225.0,85.7 227.5,85.9 230.0,86.0 232.5,86.1 235.0,86.3 237.5,86.4 240.0,86.5 242.5,86.7 245.0,86.8 247.5,86.9 250.0,87.0 252.5,87.2 255.0,87.3 257.5,87.4 260.0,87.5 262.5,87.6 265.0,87.7 267.5,87.8 270.0,87.9 272.5,88.0 275.0,88.1 277.5,88.2 280.0,88.3 282.5,88.4 285.0,88.5 287.5,88.6 290.0,88.7 292.5,88.8 295.0,88.9 297.5,89.0 300.0,89.1 302.5,89.1 305.0,89.2 307.5,89.3 310.0,89.4 312.5,89.5 315.0,89.6 317.5,89.6 320.0,89.7 322.5,89.8 325.0,89.9 327.5,89.9 330.0,90.0 330.0,110.0 327.5,110.1 325.0,110.1 322.5,110.2 320.0,110.3 317.5,110.4 315.0,110.4 312.5,110.5 310.0,110.6 307.5,110.7 305.0,110.8 302.5,110.9 300.0,110.9 297.5,111.0 295.0,111.1 292.5,111.2 290.0,111.3 287.5,111.4 285.0,111.5 282.5,111.6 280.0,111.7 277.5,111.8 275.0,111.9 272.5,112.0 270.0,112.1 267.5,112.2 265.0,112.3 262.5,112.4 260.0,112.5 257.5,112.6 255.0,112.7 252.5,112.8 250.0,113.0 247.5,113.1 245.0,113.2 242.5,113.3 240.0,113.5 237.5,113.6 235.0,113.7 232.5,113.9 230.0,114.0 227.5,114.1 225.0,114.3 222.5,114.4 220.0,114.6 217.5,114.7 215.0,114.9 212.5,115.1 210.0,115.2 207.5,115.4 205.0,115.6 202.5,115.7 200.0,115.9 197.5,116.1 195.0,116.3 192.5,116.5 190.0,116.7 187.5,116.9 185.0,117.1 182.5,117.3 180.0,117.5 177.5,117.7 175.0,117.9 172.5,118.2 170.0,118.4 167.5,118.7 165.0,118.9 162.5,119.2 160.0,119.4 157.5,119.7 155.0,120.0 152.5,120.3 150.0,120.6 147.5,120.9 145.0,121.2 142.5,121.5 140.0,121.9 137.5,122.2 135.0,122.6 132.5,123.0 130.0,123.3 127.5,123.7 125.0,124.1 122.5,124.6 120.0,125.0 117.5,125.5 115.0,125.9 112.5,126.4 110.0,126.9 107.5,127.5 105.0,128.0 102.5,128.6 100.0,129.2 97.5,129.8 95.0,130.4 92.5,131.1 90.0,131.8 87.5,132.6 85.0,133.3 82.5,134.1 80.0,135.0 77.5,135.9 75.0,136.8 72.5,137.8 70.0,138.9 67.5,140.0 65.0,141.2 62.5,142.4 60.0,143.8 57.5,145.2 55.0,146.7 52.5,148.3 50.0,150.0 47.5,151.9 45.0,153.8 42.5,156.0 40.0,158.3 37.5,160.9 35.0,163.6 32.5,166.7 30.0,170.0" fill="#9cc9ea" fill-opacity="0.5"/>
  <polyline points="30.0,30.0 32.5,33.3 35.0,36.4 37.5,39.1 40.0,41.7 42.5,44.0 45.0,46.2 47.5,48.1 50.0,50.0 52.5,51.7 55.0,53.3 57.5,54.8 60.0,56.2 62.5,57.6 65.0,58.8 67.5,60.0 70.0,61.1 72.5,62.2 75.0,63.2 77.5,64.1 80.0,65.0 82.5,65.9 85.0,66.7 87.5,67.4 90.0,68.2 92.5,68.9 95.0,69.6 97.5,70.2 100.0,70.8 102.5,71.4 105.0,72.0 107.5,72.5 110.0,73.1 112.5,73.6 115.0,74.1 117.5,74.5 120.0,75.0 122.5,75.4 125.0,75.9 127.5,76.3 130.0,76.7 132.5,77.0 135.0,77.4 137.5,77.8 140.0,78.1 142.5,78.5 145.0,78.8 147.5,79.1 150.0,79.4 152.5,79.7 155.0,80.0 157.5,80.3 160.0,80.6 162.5,80.8 165.0,81.1 167.5,81.3 170.0,81.6 172.5,81.8 175.0,82.1 177.5,82.3 180.0,82.5 182.5,82.7 185.0,82.9 187.5,83.1 190.0,83.3 192.5,83.5 195.0,83.7 197.5,83.9 200.0,84.1 202.5,84.3 205.0,84.4 207.5,84.6 210.0,84.8 212.5,84.9 215.0,85.1 217.5,85.3 220.0,85.4 222.5,85.6 225.0,85.7 227.5,85.9 230.0,86.0 232.5,86.1 235.0,86.3 237.5,86.4 240.0,86.5 242.5,86.7 245.0,86.8 247.5,86.9 250.0,87.0 252.5,87.2 255.0,87.3 257.5,87.4 260.0,87.5 262.5,87.6 265.0,87.7 267.5,87.8 270.0,87.9 272.5,88.0 275.0,88.1 277.5,88.2 280.0,88.3 282.5,88.4 285.0,88.5 287.5,88.6 290.0,88.7 292.5,88.8 295.0,88.9 297.5,89.0 300.0,89.1 302.5,89.1 305.0,89.2 307.5,89.3 310.0,89.4 312.5,89.5 315.0,89.6 317.5,89.6 320.0,89.7 322.5,89.8 325.0,89.9 327.5,89.9 330.0,90.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="330.0,110.0 327.5,110.1 325.0,110.1 322.5,110.2 320.0,110.3 317.5,110.4 315.0,110.4 312.5,110.5 310.0,110.6 307.5,110.7 305.0,110.8 302.5,110.9 300.0,110.9 297.5,111.0 295.0,111.1 292.5,111.2 290.0,111.3 287.5,111.4 285.0,111.5 282.5,111.6 280.0,111.7 277.5,111.8 275.0,111.9 272.5,112.0 270.0,112.1 267.5,112.2 265.0,112.3 262.5,112.4 260.0,112.5 257.5,112.6 255.0,112.7 252.5,112.8 250.0,113.0 247.5,113.1 245.0,113.2 242.5,113.3 240.0,113.5 237.5,113.6 235.0,113.7 232.5,113.9 230.0,114.0 227.5,114.1 225.0,114.3 222.5,114.4 220.0,114.6 217.5,114.7 215.0,114.9 212.5,115.1 210.0,115.2 207.5,115.4 205.0,115.6 202.5,115.7 200.0,115.9 197.5,116.1 195.0,116.3 192.5,116.5 190.0,116.7 187.5,116.9 185.0,117.1 182.5,117.3 180.0,117.5 177.5,117.7 175.0,117.9 172.5,118.2 170.0,118.4 167.5,118.7 165.0,118.9 162.5,119.2 160.0,119.4 157.5,119.7 155.0,120.0 152.5,120.3 150.0,120.6 147.5,120.9 145.0,121.2 142.5,121.5 140.0,121.9 137.5,122.2 135.0,122.6 132.5,123.0 130.0,123.3 127.5,123.7 125.0,124.1 122.5,124.6 120.0,125.0 117.5,125.5 115.0,125.9 112.5,126.4 110.0,126.9 107.5,127.5 105.0,128.0 102.5,128.6 100.0,129.2 97.5,129.8 95.0,130.4 92.5,131.1 90.0,131.8 87.5,132.6 85.0,133.3 82.5,134.1 80.0,135.0 77.5,135.9 75.0,136.8 72.5,137.8 70.0,138.9 67.5,140.0 65.0,141.2 62.5,142.4 60.0,143.8 57.5,145.2 55.0,146.7 52.5,148.3 50.0,150.0 47.5,151.9 45.0,153.8 42.5,156.0 40.0,158.3 37.5,160.9 35.0,163.6 32.5,166.7 30.0,170.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="30" cy="100" rx="12" ry="70" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="80" cy="100" rx="6.0" ry="35.0" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <ellipse cx="130" cy="100" rx="4.0" ry="23.3" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <ellipse cx="180" cy="100" rx="3.0" ry="17.5" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="15" y1="100" x2="350" y2="100" stroke="currentColor" stroke-width="1"/>
  <text x="345" y="94" font-size="12" text-anchor="end" fill="currentColor">x</text>
  <text x="30" y="188" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="80" y="188" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="130" y="188" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="180" y="188" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="230" y="188" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="280" y="188" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="330" y="188" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <text x="205.0" y="40" font-size="12" text-anchor="middle" fill="currentColor">y = 1/x, turned around the x-axis</text>
</svg>
</div>

At distance $x$ along the axis, the cross-section is a circle of radius $\tfrac1x$. At $x = 2$ the radius is
$\tfrac12$, at $x = 100$ it is $\tfrac1{100}$, at $x = 1\,000\,000$ it is one millionth. The horn never ends.

### The volume: slices that add to a finite total

Cut the horn into slices one unit thick: from $x = 1$ to 2, from 2 to 3, and so on. The slice from $n$ to $n+1$ fits
inside a cylinder of radius $\tfrac1n$ (the widest point of that slice) and length 1, whose volume is
$\pi \left(\tfrac1n\right)^2 \times 1 = \tfrac{\pi}{n^2}$. So

$$\text{volume} \le \pi \left(1 + \frac14 + \frac19 + \frac1{16} + \cdots\right) = \pi \cdot \frac{\pi^2}{6} \approx
5.17.$$

You proved in the last lesson that $\sum \tfrac1{n^2}$ converges, so the volume is **finite**. No calculus needed.

Calculus gives the exact value. Slicing infinitely thinly, each slice at $x$ is a disc of area $\pi \left(\tfrac1x
\right)^2$, and the volume is the integral (the limit of the sum of slices; see the [Change topic](../../change/index.md)):

$$V = \int_1^{\infty} \pi \left(\frac1x\right)^2 dx = \pi \lim_{b \to \infty} \int_1^b \frac{dx}{x^2} = \pi
\lim_{b \to \infty} \left[ -\frac1x \right]_1^b = \pi \lim_{b \to \infty} \left(1 - \frac1b\right) = \pi.$$

An integral with $\infty$ as a limit is called an **improper integral**: it is defined as the limit of ordinary
integrals up to $b$, as $b$ grows. Here the volume up to $b$ is $\pi\left(1 - \tfrac1b\right)$, which approaches $\pi$.

### The surface: slices that add to infinity

Now the surface, sliced the same way. The piece of surface from $x = n$ to $x = n + 1$ is a band going round the horn.
Its narrowest point has radius $\tfrac{1}{n+1}$, and the band is at least 1 unit long (the curve is slanted, so
slightly more). Unrolled, it covers at least a rectangle of width 1 and length equal to the smallest circumference,
$2\pi \cdot \tfrac{1}{n+1}$. So

$$\text{surface area} \ge 2\pi\left(\frac12 + \frac13 + \frac14 + \frac15 + \cdots\right).$$

That is $2\pi$ times the harmonic series (without its first term), which **diverges**. The surface area is
**infinite**.

With calculus: the exact surface-area formula for a curve $y = f(x)$ spun round the $x$-axis is
$\int 2\pi f(x) \sqrt{1 + f'(x)^2}\, dx$. The square root is at least 1, so

$$S \ge \int_1^{\infty} \frac{2\pi}{x}\, dx = 2\pi \lim_{b \to \infty} \ln b = \infty.$$

### Why one converges and the other diverges

The whole difference is one power. The volume adds up **areas** of cross-sections, which shrink like $\tfrac1{x^2}$.
The surface adds up **circumferences**, which shrink only like $\tfrac1x$. And you saw in the last lesson that
$\sum \tfrac1{n^2}$ converges while $\sum \tfrac1n$ diverges. Squaring a small number makes it much smaller, enough to
tip an infinite sum from infinite to finite.

### Resolving the painter's paradox

So can you really fill the horn with $\pi$ units of paint but not paint its surface? The contradiction is only in the
picture of paint.

- **Real paint has a thickness.** Coating a surface of infinite area with a layer of any fixed thickness $t$ would take
  infinite paint. But the horn's inside gets **thinner than $t$** far enough along: beyond $x = \tfrac1t$ the radius is
  less than $t$. Filling the horn does not coat the inside with a layer of thickness $t$ there; the paint is only as
  thick as the horn is wide, and that shrinks to nothing.
- **Mathematical paint has no thickness.** Then "covering an area" uses zero volume, and filling the horn certainly
  "paints" its inside. The infinite area is never a problem, because area and volume are measured in different units
  and neither one controls the other.

The real lesson: volume, area and length are different measures, and an infinite amount of one can sit alongside a
finite amount of another. It is the same theme as the Koch snowflake (infinite perimeter, finite area) from level 4,
one dimension higher.

## Worked examples

**1. Volume up to $x = 10$.** $V(10) = \pi\left(1 - \tfrac1{10}\right) = 0.9\pi \approx 2.83$. Already 90% of the
total is in the first 9 units of length; the infinite rest holds only $0.1\pi$.

**2. Surface up to $x = 10$.** The lower bound $2\pi \ln 10 \approx 14.47$. (A computer gives the exact value of the
surface integral as about $15.18$, a little more, because of the slant.) To make the lower bound reach 1000 you would
need $\ln b > \tfrac{1000}{2\pi} \approx 159.15$, so $b > e^{159.15}$, a number with 70 digits. The surface is
infinite, but it grows extremely slowly.

**3. The discrete bound, worked out.** Slices from $x = 1$ to $x = 5$ have surface at least
$2\pi\left(\tfrac12 + \tfrac13 + \tfrac14 + \tfrac15\right) = 2\pi \cdot \tfrac{77}{60} \approx 8.06$.

**4. A horn that can be painted.** Spin $y = \tfrac1{x^2}$, $x \ge 1$, instead. The volume is
$\pi \int_1^\infty \tfrac{dx}{x^4} = \pi \left[-\tfrac1{3x^3}\right]_1^\infty = \tfrac\pi3$. The circumferences
$\tfrac{2\pi}{x^2}$ now shrink like $\tfrac1{x^2}$, and the slant factor $\sqrt{1 + 4/x^6}$ is at most $\sqrt5$, so the
surface is at most $2\pi\sqrt5 \int_1^\infty \tfrac{dx}{x^2} = 2\pi\sqrt5$: finite. This horn has no paradox.

**5. A region with infinite area but a finite solid.** The flat region under $y = \tfrac1x$ from $x = 1$ to infinity has
area $\int_1^\infty \tfrac{dx}{x} = \infty$. Yet spinning it gives the horn, with finite volume $\pi$. Spinning does not
just multiply by a fixed amount: each strip at height $y$ is weighted by its circle, and thin strips near the axis count
for very little.

## Try it

1. Find the volume of the horn between $x = 1$ and $x = 2$.
2. How far along must you cut the horn so that the piece from $x = 1$ to the cut holds 99% of the total volume?
3. Use the slicing bound to show that the surface between $x = 1$ and $x = 9$ is more than $2\pi \times 1.8$.
   (Hint: add $\tfrac12$ to $\tfrac19$.)
4. Spin $y = \tfrac{1}{\sqrt x}$, $x \ge 1$, around the $x$-axis. Is the volume finite?
5. For which powers $p > 0$ does spinning $y = x^{-p}$, $x \ge 1$, give a finite volume? (Use: $\int_1^\infty x^{-q}\,dx$
   is finite exactly when $q > 1$.)
6. Explain in your own words why filling the horn does not paint its whole inside with a coat of thickness
   $0.001$.
7. Challenge: the horn is cut at $x = b$ and the finite piece is painted (outside only) with paint $0.001$ units thick.
   Using the lower bound $2\pi \ln b$ for the area, show that the paint needed is more than the horn's whole volume
   $\pi$ once $\ln b > 500$.

??? note "Answers"
    1. $\pi\left[-\tfrac1x\right]_1^2 = \pi\left(1 - \tfrac12\right) = \tfrac\pi2 \approx 1.57$. Half the total volume
       is in the first unit of length.
    2. $\pi\left(1 - \tfrac1b\right) = 0.99\pi$ gives $\tfrac1b = 0.01$, so $b = 100$.
    3. The slices from 1 to 9 give at least $2\pi\left(\tfrac12 + \tfrac13 + \cdots + \tfrac19\right)$. The sum
       $\tfrac12 + \tfrac13 + \tfrac14 + \tfrac15 + \tfrac16 + \tfrac17 + \tfrac18 + \tfrac19 \approx 1.829 > 1.8$.
    4. The volume is $\pi\int_1^\infty \left(\tfrac{1}{\sqrt x}\right)^2 dx = \pi\int_1^\infty \tfrac{dx}{x} = \infty$.
       **No**: this fatter horn cannot even be filled.
    5. The volume is $\pi\int_1^\infty x^{-2p}\,dx$, finite exactly when $2p > 1$, that is $p > \tfrac12$. (Gabriel's
       horn is $p = 1$; question 4 is $p = \tfrac12$, the borderline, which fails.)
    6. A coat 0.001 thick needs the horn to be at least that wide. Beyond $x = 1000$ the radius $\tfrac1x$ is less than
       0.001, so the paint there is thinner than the coat would be. The coat on that infinite stretch would need more
       paint than fits in the horn.
    7. Paint needed is at least area times thickness: $2\pi \ln b \times 0.001$. If $\ln b > 500$, this is more than
       $2\pi \times 500 \times 0.001 = \pi$. So once $b > e^{500}$, painting the outside of the cut horn needs more paint
       than the whole infinite horn holds.

## Common mistake

**"Infinitely long means infinite volume."** Length alone decides nothing; what matters is how fast the cross-sections
shrink. A horn whose cross-section areas form a convergent series has finite volume, however long it is.

**Treating $\int_1^\infty$ as an ordinary integral.** It means $\lim_{b \to \infty}\int_1^b$. Work out the integral up
to $b$ first, then take the limit; if the limit does not exist, the integral diverges.

## Where it leads

- Previous: [Convergence tests](02-convergence-tests.md). Next: [The continuum hypothesis](04-continuum-hypothesis.md),
  a question about infinity that mathematics cannot answer.
- [Level 8 page](index.md) · [Infinity topic page](../index.md) · Infinite perimeter around a finite area:
  [the Koch snowflake](../level-4/05-koch-snowflake.md). Curves that approach a line forever:
  [Approaching asymptotes](../level-5/04-approaching-asymptotes.md).
- Integrals as areas and the limit of sums: [Change](../../change/index.md). Logarithms and $\ln$:
  [Algebra, logarithms](../../algebra/level-8/04-logarithms.md).
- On the U of T shelf: [MAT137 Unit 12, improper integrals](../../../uoft/MAT137/unit12.md) (Gabriel's horn is a
  classic example there), volumes in [MAT137 Unit 10](../../../uoft/MAT137/unit10.md), and
  [MAT159 Unit 2, improper integrals](../../../uoft/MAT159H1/unit02.md).
