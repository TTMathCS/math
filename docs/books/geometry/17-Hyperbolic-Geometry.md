# 17. Hyperbolic geometry

*[Chapter 15](15-Axioms-and-the-Parallel-Postulate.md) showed that a geometry with many parallels is as consistent as
Euclid's, and [Chapter 16](16-Spherical-Geometry.md) worked out the sphere, where there are none. This chapter builds the
hyperbolic plane itself, so that you can compute in it: measure distances and angles, find areas, draw its tilings,
and solve its triangles. You will meet it in three pictures (the Poincaré disc, the upper half-plane and the
hyperboloid), prove that a triangle's area is $\pi$ minus its angle sum, find Lobachevsky's angle of parallelism, and
see why the same geometry describes the velocities of special relativity.*

!!! abstract "In this chapter"
    **You will learn:**

    - the Poincaré disc and upper half-plane models: their lines, angles and distance
    - the distance formula $\cosh d = 1 + \frac{|z - w|^2}{2\,\mathrm{Im}\, z\, \mathrm{Im}\, w}$, and that the isometries are real Möbius maps (with proofs)
    - that a triangle's area is $\pi - (\alpha + \beta + \gamma)$ (full proof by integration)
    - limiting parallels, ultraparallels and the angle of parallelism $\cos\Pi(d) = \tanh d$
    - regular tilings $\{p, q\}$ and when they exist; Escher's *Circle Limit* prints
    - the hyperboloid model, and how it describes velocities in special relativity
    - hyperbolic trigonometry: the laws of cosines and sines, and Pythagoras with $\cosh$

    **You need:** [Chapter 13](13-Inversion-and-Complex-Geometry.md) (inversion, Möbius maps, cross-ratio),
    [Chapter 15](15-Axioms-and-the-Parallel-Postulate.md) (neutral geometry, defect, models) and
    [Chapter 16](16-Spherical-Geometry.md) (spherical trigonometry, for comparison). The hyperbolic functions
    $\cosh x = \frac{e^x + e^{-x}}{2}$, $\sinh x = \frac{e^x - e^{-x}}{2}$, $\tanh x = \frac{\sinh x}{\cosh x}$, with
    $\cosh^2 x - \sinh^2 x = 1$, and integrals of one variable, as in [MAT137 Unit 9](../../uoft/MAT137/unit09.md).

    **Levels:** 17.1 and 17.2 are advanced; 17.3 and 17.4 are advanced to expert; 17.5 is advanced; 17.6 and 17.7 are
    expert.

## 17.1 The Poincaré disc and the upper half-plane

*Level: advanced.* How can you draw a plane in which a point off a line has infinitely many parallels? The Klein model
of [Chapter 15](15-Axioms-and-the-Parallel-Postulate.md) does it with straight chords, but distorts angles. Henri
Poincaré, in 1882, found two models in which angles are drawn **true**. He came to them through complex analysis: his
own famous account says the idea struck him as he stepped onto a bus, that the transformations he had been using for
certain functions were the same as those of non-Euclidean geometry.

**The upper half-plane** $\mathbb{H} = \{z = x + iy : y > 0\}$.

- **Points** are complex numbers with positive imaginary part. The real axis is not part of the plane; it is the
  **boundary at infinity**, together with one more ideal point $\infty$.
- **Lines** (geodesics) are vertical half-lines $\{x = a, \ y > 0\}$ and semicircles centred on the real axis.
- **Angles** are the ordinary Euclidean angles between curves.
- **Lengths** are measured with the rule $ds = \dfrac{|dz|}{y}$: a tiny step of Euclidean length $|dz|$ at height $y$ has
  hyperbolic length $|dz|/y$. Near the real axis, everything is very long.

**The Poincaré disc** $\mathbb{D} = \{z : |z| < 1\}$.

- **Points** are inside the unit circle; the circle itself is the boundary at infinity.
- **Lines** are diameters and arcs of circles that meet the unit circle at right angles.
- **Angles** are Euclidean angles.
- **Lengths** use $ds = \dfrac{2|dz|}{1 - |z|^2}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 612.0 258.0" role="img" aria-label="Left: the Poincare disc, with geodesics drawn as a diameter and arcs of circles meeting the boundary circle at right angles. Right: the upper half-plane, with geodesics drawn as vertical half-lines and semicircles centred on the real axis, including the semicircle through i and 1 plus i">
  <circle cx="108.0" cy="114.0" r="90.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6"/>
  <line x1="18.0" y1="114.0" x2="198.0" y2="114.0" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="185.9,69.0 183.9,70.2 181.8,71.2 179.7,72.3 177.5,73.3 175.4,74.2 173.2,75.1 171.0,75.9 168.8,76.7 166.5,77.4 164.2,78.0 162.0,78.6 159.7,79.1 157.3,79.6 155.0,79.9 152.7,80.3 150.3,80.6 148.0,80.8 145.7,80.9 143.3,81.0 140.9,81.1 138.6,81.0 136.2,80.9 133.9,80.8 131.5,80.6 129.2,80.3 126.9,79.9 124.5,79.6 122.2,79.1 119.9,78.6 117.6,78.0 115.4,77.4 113.1,76.7 110.9,75.9 108.7,75.1 106.5,74.2 104.3,73.3 102.2,72.3 100.1,71.2 98.0,70.2 95.9,69.0 93.9,67.8 91.9,66.5 90.0,65.2 88.0,63.9 86.2,62.5 84.3,61.0 82.5,59.5 80.7,57.9 79.0,56.3 77.3,54.7 75.7,53.0 74.1,51.3 72.5,49.5 71.0,47.7 69.5,45.8 68.1,44.0 66.8,42.0 65.5,40.1 64.2,38.1 63.0,36.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="39.1,56.1 41.0,57.9 43.0,59.6 44.9,61.4 46.8,63.2 48.6,65.1 50.4,67.0 52.2,68.9 53.9,70.9 55.6,72.9 57.3,74.9 58.9,77.0 60.4,79.1 61.9,81.2 63.4,83.4 64.8,85.6 66.2,87.8 67.6,90.0 68.9,92.3 70.1,94.6 71.3,96.9 72.4,99.3 73.6,101.6 74.6,104.0 75.6,106.5 76.6,108.9 77.5,111.4 78.3,113.8 79.1,116.3 79.9,118.8 80.6,121.3 81.2,123.9 81.8,126.4 82.4,129.0 82.9,131.6 83.3,134.1 83.7,136.7 84.1,139.3 84.3,141.9 84.6,144.5 84.8,147.1 84.9,149.8 85.0,152.4 85.0,155.0 84.9,157.6 84.8,160.2 84.7,162.8 84.5,165.4 84.3,168.0 84.0,170.6 83.6,173.2 83.2,175.8 82.7,178.4 82.2,181.0 81.7,183.5 81.1,186.1 80.4,188.6 79.7,191.1 78.9,193.6 78.1,196.1 77.2,198.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="108.0,204.0 108.0,202.0 108.1,200.0 108.3,198.0 108.5,196.0 108.8,194.0 109.2,192.0 109.6,190.0 110.1,188.0 110.6,186.1 111.2,184.2 111.9,182.3 112.6,180.4 113.4,178.5 114.2,176.7 115.1,174.9 116.1,173.1 117.1,171.4 118.2,169.7 119.3,168.0 120.5,166.4 121.7,164.8 123.0,163.2 124.3,161.7 125.7,160.2 127.1,158.8 128.6,157.4 130.1,156.1 131.6,154.8 133.2,153.6 134.9,152.4 136.5,151.2 138.2,150.2 140.0,149.2 141.8,148.2 143.6,147.3 145.4,146.4 147.2,145.6 149.1,144.9 151.0,144.2 152.9,143.6 154.9,143.1 156.8,142.6 158.8,142.2 160.8,141.8 162.8,141.5 164.8,141.3 166.8,141.1 168.8,141.0 170.8,141.0 172.9,141.0 174.9,141.1 176.9,141.3 178.9,141.5 180.9,141.8 182.9,142.1 184.8,142.5 186.8,143.0 188.7,143.5 190.7,144.1 192.6,144.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="100.2,24.3 100.4,26.9 100.5,29.4 100.6,32.0 100.6,34.6 100.6,37.1 100.5,39.7 100.4,42.2 100.2,44.8 99.9,47.3 99.6,49.9 99.2,52.4 98.8,54.9 98.3,57.4 97.8,60.0 97.2,62.4 96.6,64.9 95.9,67.4 95.2,69.8 94.4,72.3 93.5,74.7 92.6,77.1 91.7,79.5 90.7,81.8 89.6,84.1 88.5,86.4 87.3,88.7 86.1,91.0 84.9,93.2 83.6,95.4 82.2,97.6 80.8,99.7 79.4,101.8 77.9,103.9 76.4,106.0 74.8,108.0 73.2,110.0 71.5,111.9 69.8,113.8 68.0,115.7 66.2,117.5 64.4,119.3 62.6,121.0 60.6,122.7 58.7,124.4 56.7,126.0 54.7,127.6 52.7,129.2 50.6,130.6 48.5,132.1 46.3,133.5 44.2,134.8 42.0,136.1 39.7,137.4 37.5,138.6 35.2,139.8 32.9,140.9 30.6,141.9 28.2,142.9 25.8,143.9 23.4,144.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <text x="108.0" y="231.0" font-size="12" text-anchor="middle" fill="currentColor">Poincaré disc</text>
  <polygon points="240.0,210.0 594.0,210.0 594.0,18.0 240.0,18.0" fill="#9cc9ea" fill-opacity="0.18" stroke="currentColor" stroke-width="0" stroke-linejoin="round"/>
  <line x1="240.0" y1="210.0" x2="594.0" y2="210.0" stroke="currentColor" stroke-width="1.6"/>
  <line x1="360.0" y1="210.0" x2="360.0" y2="18.0" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="457.1,210.0 457.0,207.9 456.9,205.8 456.8,203.7 456.6,201.6 456.3,199.5 455.9,197.4 455.5,195.4 455.0,193.3 454.4,191.3 453.8,189.3 453.1,187.3 452.4,185.3 451.6,183.4 450.7,181.4 449.8,179.5 448.8,177.7 447.7,175.9 446.6,174.1 445.5,172.3 444.3,170.6 443.0,168.9 441.7,167.2 440.3,165.6 438.9,164.1 437.4,162.6 435.9,161.1 434.4,159.7 432.8,158.3 431.1,157.0 429.4,155.7 427.7,154.5 425.9,153.4 424.1,152.3 422.3,151.2 420.5,150.2 418.6,149.3 416.6,148.4 414.7,147.6 412.7,146.9 410.7,146.2 408.7,145.6 406.7,145.0 404.6,144.5 402.6,144.1 400.5,143.7 398.4,143.4 396.3,143.2 394.2,143.1 392.1,143.0 390.0,142.9 387.9,143.0 385.8,143.1 383.7,143.2 381.6,143.4 379.5,143.7 377.4,144.1 375.4,144.5 373.3,145.0 371.3,145.6 369.3,146.2 367.3,146.9 365.3,147.6 363.4,148.4 361.4,149.3 359.5,150.2 357.7,151.2 355.9,152.3 354.1,153.4 352.3,154.5 350.6,155.7 348.9,157.0 347.2,158.3 345.6,159.7 344.1,161.1 342.6,162.6 341.1,164.1 339.7,165.6 338.3,167.2 337.0,168.9 335.7,170.6 334.5,172.3 333.4,174.1 332.3,175.9 331.2,177.7 330.2,179.5 329.3,181.4 328.4,183.4 327.6,185.3 326.9,187.3 326.2,189.3 325.6,191.3 325.0,193.3 324.5,195.4 324.1,197.4 323.7,199.5 323.4,201.6 323.2,203.7 323.1,205.8 323.0,207.9 322.9,210.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="594.0,210.0 594.0,208.3 593.9,206.6 593.8,204.9 593.6,203.2 593.3,201.6 593.0,199.9 592.7,198.2 592.3,196.6 591.9,194.9 591.4,193.3 590.8,191.7 590.2,190.1 589.6,188.6 588.9,187.0 588.1,185.5 587.3,184.0 586.5,182.5 585.6,181.1 584.7,179.6 583.7,178.3 582.7,176.9 581.6,175.6 580.5,174.3 579.4,173.0 578.2,171.8 577.0,170.6 575.7,169.5 574.4,168.4 573.1,167.3 571.7,166.3 570.4,165.3 568.9,164.4 567.5,163.5 566.0,162.7 564.5,161.9 563.0,161.1 561.4,160.4 559.9,159.8 558.3,159.2 556.7,158.6 555.1,158.1 553.4,157.7 551.8,157.3 550.1,157.0 548.4,156.7 546.8,156.4 545.1,156.2 543.4,156.1 541.7,156.0 540.0,156.0 538.3,156.0 536.6,156.1 534.9,156.2 533.2,156.4 531.6,156.7 529.9,157.0 528.2,157.3 526.6,157.7 524.9,158.1 523.3,158.6 521.7,159.2 520.1,159.8 518.6,160.4 517.0,161.1 515.5,161.9 514.0,162.7 512.5,163.5 511.1,164.4 509.6,165.3 508.3,166.3 506.9,167.3 505.6,168.4 504.3,169.5 503.0,170.6 501.8,171.8 500.6,173.0 499.5,174.3 498.4,175.6 497.3,176.9 496.3,178.3 495.3,179.6 494.4,181.1 493.5,182.5 492.7,184.0 491.9,185.5 491.1,187.0 490.4,188.6 489.8,190.1 489.2,191.7 488.6,193.3 488.1,194.9 487.7,196.6 487.3,198.2 487.0,199.9 486.7,201.6 486.4,203.2 486.2,204.9 486.1,206.6 486.0,208.3 486.0,210.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="396.0,210.0 396.0,207.7 395.9,205.5 395.7,203.2 395.4,201.0 395.1,198.7 394.7,196.5 394.3,194.3 393.7,192.1 393.1,189.9 392.5,187.8 391.7,185.6 390.9,183.5 390.1,181.4 389.1,179.3 388.2,177.3 387.1,175.3 386.0,173.3 384.8,171.4 383.5,169.5 382.2,167.7 380.9,165.9 379.5,164.1 378.0,162.4 376.5,160.7 374.9,159.1 373.3,157.5 371.6,156.0 369.9,154.5 368.1,153.1 366.3,151.8 364.5,150.5 362.6,149.2 360.7,148.0 358.7,146.9 356.7,145.8 354.7,144.9 352.6,143.9 350.5,143.1 348.4,142.3 346.2,141.5 344.1,140.9 341.9,140.3 339.7,139.7 337.5,139.3 335.3,138.9 333.0,138.6 330.8,138.3 328.5,138.1 326.3,138.0 324.0,138.0 321.7,138.0 319.5,138.1 317.2,138.3 315.0,138.6 312.7,138.9 310.5,139.3 308.3,139.7 306.1,140.3 303.9,140.9 301.8,141.5 299.6,142.3 297.5,143.1 295.4,143.9 293.3,144.9 291.3,145.8 289.3,146.9 287.3,148.0 285.4,149.2 283.5,150.5 281.7,151.8 279.9,153.1 278.1,154.5 276.4,156.0 274.7,157.5 273.1,159.1 271.5,160.7 270.0,162.4 268.5,164.1 267.1,165.9 265.8,167.7 264.5,169.5 263.2,171.4 262.0,173.3 260.9,175.3 259.8,177.3 258.9,179.3 257.9,181.4 257.1,183.5 256.3,185.6 255.5,187.8 254.9,189.9 254.3,192.1 253.7,194.3 253.3,196.5 252.9,198.7 252.6,201.0 252.3,203.2 252.1,205.5 252.0,207.7 252.0,210.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <line x1="570.0" y1="210.0" x2="570.0" y2="18.0" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="360.0" cy="150.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="350.0" y="154.0" font-size="12" text-anchor="middle" fill="currentColor">i</text>
  <circle cx="360.0" cy="90.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="346.0" y="94.0" font-size="12" text-anchor="middle" fill="currentColor">2i</text>
  <circle cx="420.0" cy="150.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="440.0" y="150.0" font-size="12" text-anchor="middle" fill="currentColor">1+i</text>
  <circle cx="360.0" cy="210.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="360.0" y="226.0" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="420.0" cy="210.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="420.0" y="226.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="450.0" y="244.0" font-size="12" text-anchor="middle" fill="currentColor">upper half-plane</text>
</svg>
</div>

**The two are the same geometry.** The Möbius map of [Chapter 13](13-Inversion-and-Complex-Geometry.md)

$$
C(z) = \frac{z - i}{z + i}
$$

sends $\mathbb{H}$ onto $\mathbb{D}$: it sends $i \mapsto 0$, and for real $x$, $|x - i| = |x + i|$, so the real axis goes to
the unit circle. It keeps angles and sends generalised circles to generalised circles; it sends lines and circles
perpendicular to the real axis to ones perpendicular to the unit circle; and a computation shows it carries the length
rule of $\mathbb{H}$ to that of $\mathbb{D}$. So any fact proved in one model holds in the other. We mostly compute in
$\mathbb{H}$, where formulas are simplest, and draw in $\mathbb{D}$, where the pictures are most symmetric.

**Why "lines".** We define lines as shortest paths for the length rule. That vertical half-lines are shortest is
proved in 17.2; semicircles then follow because isometries carry vertical lines onto semicircles. Through any two
points of $\mathbb{H}$ passes exactly one such curve: if they have the same real part, a vertical line; otherwise the
perpendicular bisector of the Euclidean segment between them meets the real axis at one point $c$, and the semicircle
about $c$ through both points is the line.

**Example.** The line through $i$ and $1 + i$: the perpendicular bisector of the segment from $i$ to $1 + i$ is
$x = \tfrac12$, so the centre is $c = \tfrac12$, and the radius is $|i - \tfrac12| = \sqrt{1/4 + 1} = \tfrac{\sqrt5}{2}$.
It meets the boundary at $\tfrac12 \pm \tfrac{\sqrt5}{2}$, that is at $-0.618$ and $1.618$.

## 17.2 Distance, isometries and circles

*Level: advanced.* **Vertical distance.** The length of the vertical segment from $ia$ to $ib$ ($0 < a < b$) is

$$
\int_a^b \frac{dy}{y} = \ln\frac{b}{a} .
$$

So $i$, $ei$, $e^2 i$, $e^3 i$, ... are equally spaced, each a distance $1$ from the next, and the real axis
($a \to 0$) is infinitely far away.

**It is the shortest path.** Any path from $ia$ to $ib$, given as $z(t) = x(t) + iy(t)$, has length

$$
\int \frac{|z'(t)|}{y(t)} \, dt \ \ge \ \int \frac{|y'(t)|}{y(t)} \, dt \ \ge \ \int_a^b \frac{dy}{y} = \ln\frac{b}{a},
$$

since $|z'| \ge |y'|$, with equality only if $x$ is constant and $y$ never goes back down. So the vertical segment is the
unique shortest path. $\square$

**Isometries.** Which maps of $\mathbb{H}$ keep the length rule?

**Theorem 17.1.** Every Möbius map $f(z) = \dfrac{az + b}{cz + d}$ with $a, b, c, d$ real and $ad - bc = 1$ maps
$\mathbb{H}$ onto itself and preserves hyperbolic length.

*Proof.* Compute the imaginary part. Multiply top and bottom by $\overline{cz + d} = c\bar z + d$:

$$
f(z) = \frac{(az + b)(c\bar z + d)}{|cz + d|^2} = \frac{ac|z|^2 + adz + bc\bar z + bd}{|cz + d|^2},
$$

so $\mathrm{Im} f(z) = \dfrac{(ad - bc)\,\mathrm{Im}\, z}{|cz + d|^2} = \dfrac{\mathrm{Im}\, z}{|cz + d|^2} > 0$. And
$f'(z) = \dfrac{a(cz + d) - c(az + b)}{(cz + d)^2} = \dfrac{1}{(cz + d)^2}$. A tiny step $dz$ goes to $f'(z)\,dz$, so its
hyperbolic length becomes

$$
\frac{|f'(z)|\,|dz|}{\mathrm{Im} f(z)} = \frac{|dz|/|cz + d|^2}{\mathrm{Im}\, z/|cz + d|^2} = \frac{|dz|}{\mathrm{Im}\, z} . \ \square
$$

These maps form the group $\mathrm{PSL}(2, \mathbb{R})$ (real matrices of determinant $1$, with $M$ and $-M$ giving the
same map). Adding the reflection $z \mapsto -\bar z$ gives all isometries of $\mathbb{H}$ (we state this without proof).
Examples: translations $z \mapsto z + b$, scalings $z \mapsto kz$ ($k > 0$), and the "inversion" $z \mapsto -1/z$.

The isometries are plentiful: you can move any point to any other ($x + iy \mapsto (z - x)/y$ sends it to $i$), and the
maps $z \mapsto \dfrac{z\cos\theta + \sin\theta}{-z\sin\theta + \cos\theta}$ fix $i$ and turn the directions at $i$ through
the angle $2\theta$. So the hyperbolic plane looks the same at every point and in every direction, just like the
Euclidean plane and the sphere.

**Theorem 17.2 (distance formula).** For $z, w \in \mathbb{H}$,

$$
\cosh d(z, w) = 1 + \frac{|z - w|^2}{2\,\mathrm{Im}\, z \,\mathrm{Im}\, w} .
$$

*Proof.* Both sides are unchanged by the isometries of Theorem 17.1. The left side because they are isometries. The
right side because $\mathrm{Im} f(z) = \mathrm{Im}\, z/|cz + d|^2$, as computed, and the identity
$f(z) - f(w) = \dfrac{z - w}{(cz + d)(cw + d)}$ (check by putting the difference over a common denominator and using
$ad - bc = 1$) gives $|f(z) - f(w)|^2 = |z - w|^2/(|cz + d|^2|cw + d|^2)$; the factors cancel. Now move $z$ to $i$ and
then turn about $i$ until $w$ lies on the imaginary axis above it, $w = ib$ with $b \ge 1$. There $d = \ln b$ and the right
side is $1 + \frac{(b - 1)^2}{2b} = \frac{b^2 + 1}{2b} = \frac{b + b^{-1}}{2} = \cosh(\ln b)$. $\square$

**Examples.** $d(i, 2i) = \ln 2 \approx 0.693$. $d(i, 1 + i)$: $\cosh d = 1 + \frac{1}{2} = 1.5$, so
$d = \operatorname{arcosh} 1.5 \approx 0.9624$. The Euclidean distance is $1$ in both cases, but the hyperbolic ones
differ, because the length rule depends on the height. (Check with the formula for the first: $1 + \frac{1}{2 \cdot 2} = 1.25 = \cosh(\ln 2)
= \frac{2 + 1/2}{2}$.)

**In the disc.** The distance from $0$ to a point at Euclidean distance $r$ is

$$
d(0, r) = \int_0^r \frac{2\,dt}{1 - t^2} = \ln\frac{1 + r}{1 - r} = 2\operatorname{artanh} r .
$$

So $r = \tanh(d/2)$. The point $r = \tfrac12$ is at distance $\ln 3 \approx 1.10$; $r = 0.9$ at $\ln 19 \approx 2.94$;
$r = 0.99$ at $\ln 199 \approx 5.29$.

**Circles.** The hyperbolic circle with centre $i$ and radius $\rho$ is the set of $z = x + iy$ with
$\cosh\rho = 1 + \frac{x^2 + (y - 1)^2}{2y}$. Multiply out: $x^2 + y^2 - 2y\cosh\rho + 1 = 0$, that is

$$
x^2 + (y - \cosh\rho)^2 = \sinh^2\rho .
$$

It is a **Euclidean circle**, with Euclidean centre $i\cosh\rho$ (higher than $i$) and radius $\sinh\rho$. Hyperbolic
circles look like ordinary circles in both models, but their hyperbolic centre is pulled towards the boundary.

## 17.3 Angle sum and area

*Level: advanced to expert.* Area in $\mathbb{H}$ uses the same scaling as length, squared: a tiny rectangle of
Euclidean area $dx\,dy$ at height $y$ has hyperbolic area

$$
dA = \frac{dx\,dy}{y^2} .
$$

(The isometries of Theorem 17.1 keep it: their Jacobian is $|f'(z)|^2 = 1/|cz + d|^4$, and $y^2$ also changes by
$1/|cz + d|^4$.)

**Theorem 17.3.** A triangle with angles $\alpha, \beta, \gamma$ in the hyperbolic plane has area

$$
\text{Area} = \pi - (\alpha + \beta + \gamma) .
$$

In particular the angle sum is less than $\pi$, and the area is exactly the defect of
[Chapter 15](15-Axioms-and-the-Parallel-Postulate.md). The proof comes in two steps.

**Step 1: one vertex at infinity.** A triangle may have **ideal vertices** on the boundary at infinity, where its two
sides meet at angle $0$. Take a triangle with one ideal vertex and finite angles $\alpha$ and $\beta$. Move its ideal
vertex to $\infty$ (an isometry). Its two sides through $\infty$ are vertical lines, and its third side is a semicircle;
translate and scale (isometries again) so that the semicircle is the unit circle. Then the finite vertices are
$A = e^{i(\pi - \alpha)}$ and $B = e^{i\beta}$: the angle at $A$ between the vertical and the circle is $\alpha$ because
the radius to $A$ makes the angle $\alpha$ with the real axis, and the tangent is perpendicular to the radius.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 354.0 370.5" role="img" aria-label="A triangle in the half-plane with one vertex at infinity: two vertical sides and a base on the unit semicircle. Its angles at A and B are alpha and beta and its third angle is zero; its area works out to pi minus alpha minus beta">
  <line x1="12.0" y1="331.0" x2="342.0" y2="331.0" stroke="currentColor" stroke-width="1.4"/>
  <polyline points="287.0,331.0 287.0,328.1 286.8,325.2 286.7,322.4 286.4,319.5 286.1,316.6 285.6,313.8 285.2,311.0 284.6,308.1 284.0,305.3 283.3,302.5 282.5,299.8 281.6,297.0 280.7,294.3 279.7,291.6 278.6,288.9 277.5,286.3 276.3,283.6 275.0,281.1 273.7,278.5 272.3,276.0 270.8,273.5 269.3,271.1 267.7,268.7 266.0,266.3 264.3,264.0 262.5,261.8 260.6,259.6 258.7,257.4 256.8,255.3 254.8,253.2 252.7,251.2 250.6,249.3 248.4,247.4 246.2,245.5 244.0,243.7 241.7,242.0 239.3,240.3 236.9,238.7 234.5,237.2 232.0,235.7 229.5,234.3 226.9,233.0 224.4,231.7 221.7,230.5 219.1,229.4 216.4,228.3 213.7,227.3 211.0,226.4 208.2,225.5 205.5,224.7 202.7,224.0 199.9,223.4 197.0,222.8 194.2,222.4 191.4,221.9 188.5,221.6 185.6,221.3 182.8,221.2 179.9,221.0 177.0,221.0 174.1,221.0 171.2,221.2 168.4,221.3 165.5,221.6 162.6,221.9 159.8,222.4 157.0,222.8 154.1,223.4 151.3,224.0 148.5,224.7 145.8,225.5 143.0,226.4 140.3,227.3 137.6,228.3 134.9,229.4 132.3,230.5 129.6,231.7 127.1,233.0 124.5,234.3 122.0,235.7 119.5,237.2 117.1,238.7 114.7,240.3 112.3,242.0 110.0,243.7 107.8,245.5 105.6,247.4 103.4,249.3 101.3,251.2 99.2,253.2 97.2,255.3 95.3,257.4 93.4,259.6 91.5,261.8 89.7,264.0 88.0,266.3 86.3,268.7 84.7,271.1 83.2,273.5 81.7,276.0 80.3,278.5 79.0,281.1 77.7,283.6 76.5,286.3 75.4,288.9 74.3,291.6 73.3,294.3 72.4,297.0 71.5,299.8 70.7,302.5 70.0,305.3 69.4,308.1 68.8,311.0 68.4,313.8 67.9,316.6 67.6,319.5 67.3,322.4 67.2,325.2 67.0,328.1 67.0,331.0" fill="none" stroke="currentColor" stroke-width="1.0" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polygon points="106.3,246.7 106.3,246.7 107.9,245.4 109.5,244.1 111.2,242.9 112.9,241.6 114.6,240.4 116.3,239.3 118.0,238.1 119.8,237.0 121.6,236.0 123.4,234.9 125.2,234.0 127.1,233.0 128.9,232.1 130.8,231.2 132.7,230.3 134.6,229.5 136.5,228.7 138.5,228.0 140.4,227.3 142.4,226.6 144.4,225.9 146.4,225.3 148.4,224.8 150.4,224.3 152.4,223.8 154.4,223.3 156.5,222.9 158.5,222.6 160.6,222.2 162.6,221.9 164.7,221.7 166.8,221.5 168.8,221.3 170.9,221.2 173.0,221.1 175.1,221.0 177.2,221.0 179.2,221.0 181.3,221.1 183.4,221.2 185.5,221.3 187.5,221.5 189.6,221.7 191.7,222.0 193.7,222.3 195.8,222.6 197.8,223.0 199.9,223.4 201.9,223.9 203.9,224.3 205.9,224.9 207.9,225.4 209.9,226.0 211.9,226.7 213.9,227.4 215.8,228.1 217.8,228.8 219.7,229.6 221.6,230.4 223.5,231.3 223.5,23.0 106.3,23.0" fill="#eea66f" fill-opacity="0.4" stroke="currentColor" stroke-width="0" stroke-linejoin="round"/>
  <line x1="106.3" y1="246.7" x2="106.3" y2="17.5" stroke="currentColor" stroke-width="1.8"/>
  <line x1="223.5" y1="231.3" x2="223.5" y2="17.5" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="223.5,231.3 222.1,230.7 220.6,230.0 219.2,229.4 217.8,228.8 216.3,228.3 214.8,227.7 213.4,227.2 211.9,226.7 210.4,226.2 208.9,225.7 207.4,225.3 205.9,224.9 204.4,224.5 202.9,224.1 201.4,223.7 199.9,223.4 198.3,223.1 196.8,222.8 195.3,222.5 193.7,222.3 192.2,222.1 190.6,221.8 189.1,221.7 187.5,221.5 186.0,221.4 184.4,221.3 182.9,221.2 181.3,221.1 179.8,221.0 178.2,221.0 176.6,221.0 175.1,221.0 173.5,221.1 172.0,221.1 170.4,221.2 168.8,221.3 167.3,221.4 165.7,221.6 164.2,221.7 162.6,221.9 161.1,222.2 159.6,222.4 158.0,222.7 156.5,222.9 155.0,223.2 153.4,223.6 151.9,223.9 150.4,224.3 148.9,224.7 147.4,225.1 145.9,225.5 144.4,225.9 142.9,226.4 141.4,226.9 139.9,227.4 138.5,228.0 137.0,228.5 135.6,229.1 134.1,229.7 132.7,230.3 131.3,231.0 129.9,231.6 128.5,232.3 127.1,233.0 125.7,233.7 124.3,234.4 122.9,235.2 121.6,236.0 120.2,236.8 118.9,237.6 117.6,238.4 116.3,239.3 115.0,240.1 113.7,241.0 112.4,241.9 111.2,242.9 109.9,243.8 108.7,244.8 107.5,245.7 106.3,246.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <polygon points="106.3,246.7 127.4,229.1 126.8,228.5 126.3,227.9 125.7,227.3 125.2,226.7 124.6,226.2 124.0,225.7 123.3,225.2 122.7,224.7 122.1,224.2 121.4,223.8 120.7,223.3 120.0,222.9 119.3,222.5 118.6,222.2 117.9,221.8 117.2,221.5 116.4,221.2 115.7,220.9 114.9,220.6 114.2,220.4 113.4,220.2 112.6,220.0 111.9,219.8 111.1,219.7 110.3,219.5 109.5,219.4 108.7,219.3 107.9,219.3 107.1,219.2 106.3,219.2" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <polygon points="223.5,231.3 223.5,203.8 222.4,203.8 221.4,203.9 220.4,204.0 219.3,204.1 218.3,204.3 217.3,204.5 216.3,204.8 215.3,205.1 214.3,205.4 213.3,205.7 212.4,206.2 211.4,206.6 210.5,207.1 209.6,207.6 208.7,208.1 207.8,208.7 207.0,209.3 206.2,209.9 205.4,210.6 204.6,211.3 203.9,212.0 203.2,212.8 202.5,213.6 201.8,214.4 201.2,215.2 200.6,216.1 200.0,216.9 199.5,217.8 199.0,218.8 198.6,219.7" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <circle cx="106.3" cy="246.7" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="223.5" cy="231.3" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="94.3" y="254.7" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <text x="235.5" y="239.3" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <text x="116.3" y="220.7" font-size="13" text-anchor="middle" fill="currentColor">α</text>
  <text x="213.5" y="205.3" font-size="13" text-anchor="middle" fill="currentColor">β</text>
  <text x="177.0" y="45.0" font-size="12" text-anchor="middle" fill="currentColor">to ∞</text>
  <text x="67.0" y="347.0" font-size="11" text-anchor="middle" fill="currentColor">−1</text>
  <text x="287.0" y="347.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="177.0" y="347.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
</svg>
</div>

The triangle is the region above the arc and between the verticals $x = -\cos\alpha$ and $x = \cos\beta$. Its area is

$$
\int_{-\cos\alpha}^{\cos\beta} \int_{\sqrt{1 - x^2}}^{\infty} \frac{dy}{y^2} \, dx
= \int_{-\cos\alpha}^{\cos\beta} \frac{dx}{\sqrt{1 - x^2}} .
$$

Substitute $x = \cos\theta$, $dx = -\sin\theta\,d\theta$, $\sqrt{1 - x^2} = \sin\theta$: the integral becomes
$\int_{\beta}^{\pi - \alpha} d\theta = \pi - \alpha - \beta$. So a triangle with one ideal vertex has area
$\pi - \alpha - \beta$. With $\alpha = \beta = 0$ (all three vertices ideal) the area is $\pi$: every **ideal triangle**
has area $\pi$, however "large" it looks.

**Step 2: any triangle.** Let $ABC$ have angles $\alpha, \beta, \gamma$. Extend the side $AC$ beyond $C$ to its ideal
endpoint $\Omega$. Then the triangle $AB\Omega$ (one ideal vertex) is made of $ABC$ and the triangle $CB\Omega$. Let
$\varepsilon = \angle CB\Omega$. The angles are:

- in $AB\Omega$: $\alpha$ at $A$, $\beta + \varepsilon$ at $B$, $0$ at $\Omega$;
- in $CB\Omega$: $\pi - \gamma$ at $C$ (the supplement of $\gamma$, on the straight line $AC\Omega$), $\varepsilon$ at $B$,
  $0$ at $\Omega$.

By Step 1,

$$
\text{Area}(ABC) = \big(\pi - \alpha - \beta - \varepsilon\big) - \big(\pi - (\pi - \gamma) - \varepsilon\big)
= \pi - \alpha - \beta - \gamma . \ \square
$$

**Consequences.**

- The angle sum of every triangle is less than $\pi$, and the area of every triangle is less than $\pi$.
- **AAA congruence.** Two triangles with the same angles have the same area; more is true, they are congruent (this
  follows from the hyperbolic law of cosines for angles in 17.7, which determines the sides from the angles). There are
  no similar triangles of different sizes.
- **Polygons.** Cutting into triangles, a convex polygon with $n$ sides and angles $\theta_1, \ldots, \theta_n$ has area
  $(n - 2)\pi - (\theta_1 + \cdots + \theta_n)$.
- **Scale.** Our models have **curvature** $-1$. Scaling all lengths by $R$ gives the plane of curvature $-1/R^2$, in which
  the area of a triangle is $R^2$ times its defect: Lambert's discovery of 1766, now a theorem.

**Example.** A triangle with angles $30^\circ$, $45^\circ$ and $60^\circ$ has area $\pi - \frac{3\pi}{4} = \frac{\pi}{4} \approx 0.785$.

<figure class="play" data-play="poincare"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A triangle in the Poincaré disc: push the corners out and the angle sum drops below 180°; the shortfall is the area.</figcaption></figure>

## 17.4 Many parallels

*Level: advanced to expert.* Take a line $\ell$ and a point $P$ not on it. In the disc, put $P$ at the centre $0$
(an isometry can always do this). Lines through $0$ are diameters. A diameter meets $\ell$ only if it passes through
the arc of $\ell$; the two diameters that end exactly at the two ideal endpoints of $\ell$ meet $\ell$ only "at
infinity", which is not in the plane.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 323.0 323.0" role="img" aria-label="Parallels in the Poincare disc. The line l is at distance d from the centre P. The two diameters through the ends of l are the limiting parallels, making the angle of parallelism with the perpendicular from P to l. The other drawn lines through P miss l altogether">
  <circle cx="161.5" cy="161.5" r="130.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="260.5,77.3 258.7,78.8 256.9,80.4 255.2,82.1 253.5,83.8 251.8,85.5 250.2,87.2 248.6,89.0 247.1,90.9 245.6,92.7 244.1,94.6 242.7,96.5 241.3,98.5 239.9,100.5 238.6,102.5 237.4,104.5 236.2,106.6 235.0,108.7 233.9,110.8 232.8,112.9 231.8,115.1 230.8,117.3 229.9,119.5 229.0,121.7 228.1,124.0 227.4,126.2 226.6,128.5 225.9,130.8 225.3,133.1 224.7,135.4 224.2,137.7 223.7,140.1 223.2,142.4 222.8,144.8 222.5,147.2 222.2,149.6 222.0,151.9 221.8,154.3 221.7,156.7 221.6,159.1 221.6,161.5 221.6,163.9 221.7,166.3 221.8,168.7 222.0,171.1 222.2,173.4 222.5,175.8 222.8,178.2 223.2,180.6 223.7,182.9 224.2,185.3 224.7,187.6 225.3,189.9 225.9,192.2 226.6,194.5 227.4,196.8 228.1,199.0 229.0,201.3 229.9,203.5 230.8,205.7 231.8,207.9 232.8,210.1 233.9,212.2 235.0,214.3 236.2,216.4 237.4,218.5 238.6,220.5 239.9,222.5 241.3,224.5 242.7,226.5 244.1,228.4 245.6,230.3 247.1,232.1 248.6,234.0 250.2,235.8 251.8,237.5 253.5,239.2 255.2,240.9 256.9,242.6 258.7,244.2 260.5,245.7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
  <line x1="62.5" y1="245.7" x2="260.5" y2="77.3" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 3"/>
  <line x1="62.5" y1="77.3" x2="260.5" y2="245.7" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 3"/>
  <line x1="127.9" y1="287.1" x2="195.1" y2="35.9" stroke="currentColor" stroke-width="1.0"/>
  <line x1="161.5" y1="291.5" x2="161.5" y2="31.5" stroke="currentColor" stroke-width="1.0"/>
  <line x1="206.0" y1="283.7" x2="117.0" y2="39.3" stroke="currentColor" stroke-width="1.0"/>
  <line x1="161.5" y1="161.5" x2="221.6" y2="161.5" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
  <polygon points="161.5,161.5 190.1,161.5 190.1,160.8 190.1,160.2 190.0,159.5 190.0,158.8 189.9,158.1 189.8,157.5 189.7,156.8 189.6,156.2 189.5,155.5 189.3,154.8 189.1,154.2 189.0,153.5 188.8,152.9 188.6,152.3 188.3,151.6 188.1,151.0 187.8,150.4 187.6,149.8 187.3,149.1 187.0,148.5 186.7,148.0 186.4,147.4 186.0,146.8 185.7,146.2 185.3,145.6 184.9,145.1 184.5,144.5 184.1,144.0 183.7,143.5 183.3,143.0" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <circle cx="161.5" cy="161.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="151.5" y="155.5" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <circle cx="221.6" cy="161.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="211.6" y="175.5" font-size="12" text-anchor="middle" fill="currentColor">Q</text>
  <text x="235.6" y="131.5" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">l</text>
  <text x="201.5" y="149.5" font-size="11" text-anchor="middle" fill="currentColor">Π(d)</text>
  <circle cx="260.5" cy="77.3" r="3.5" fill="white" stroke="currentColor" stroke-width="1"/>
  <circle cx="260.5" cy="245.7" r="3.5" fill="white" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

So the lines through $P$ fall into three kinds:

- those that **meet** $\ell$ (diameters between the two special ones, on the side of $\ell$);
- two **limiting parallels** (also called asymptotic parallels), the diameters through the endpoints of $\ell$; they get
  closer and closer to $\ell$ without meeting it;
- infinitely many **ultraparallels**, all the rest; each of these and $\ell$ have a common perpendicular, and they move
  apart in both directions.

**The angle of parallelism.** Let $Q$ be the foot of the perpendicular from $P$ to $\ell$, and $d = PQ$. The angle
$\Pi(d)$ between $PQ$ and a limiting parallel depends only on $d$.

**Theorem 17.4 (Lobachevsky).** $\cos\Pi(d) = \tanh d$, or equivalently $\tan\dfrac{\Pi(d)}{2} = e^{-d}$.

*Proof.* With $P = 0$ and $Q$ on the positive real axis, $Q = r$ with $r = \tanh(d/2)$ (17.2). The line $\ell$ is perpendicular
to the real axis at $r$, so it is an arc of a circle with centre $c$ on the real axis, $c > 1$, radius $s$, meeting the unit
circle at right angles. Orthogonality means the radii at a meeting point are perpendicular, so $c^2 = 1 + s^2$. And the arc
passes through $r$: $c - s = r$. From $c^2 - s^2 = 1$ we get $c + s = 1/r$, so $c = \frac12(r + 1/r)$.

The ideal endpoints of $\ell$ are where the two circles meet: $x^2 + y^2 = 1$ and $(x - c)^2 + y^2 = s^2$ give
$1 - 2cx + c^2 = s^2$, so $x = \frac{1 + c^2 - s^2}{2c} = \frac{1}{c}$. The limiting parallel is the diameter to this point,
at angle $\Pi$ from the real axis, so

$$
\cos\Pi = \frac{1}{c} = \frac{2r}{1 + r^2} = \frac{2\tanh(d/2)}{1 + \tanh^2(d/2)} = \tanh d,
$$

by the double angle formula for $\tanh$. The second form: $\tan^2(\Pi/2) = \frac{1 - \cos\Pi}{1 + \cos\Pi} = \frac{1 - \tanh d}{1 + \tanh d} = e^{-2d}$. $\square$

**What it says.** As $d \to 0$, $\Pi(d) \to 90^\circ$: very close to $\ell$, the parallels are nearly unique, as in Euclid.
As $d \to \infty$, $\Pi(d) \to 0$: far away, almost every line through $P$ misses $\ell$. For example
$\Pi(1) = \arccos(\tanh 1) = \arccos 0.7616 \approx 40.4^\circ$. The function $\Pi$ also explains the "natural unit of
length" of [Chapter 15](15-Axioms-and-the-Parallel-Postulate.md): the distance at which $\Pi(d) = 45^\circ$ (namely
$d = \operatorname{artanh}(1/\sqrt2) \approx 0.881$) is defined by an angle, so it is a length the geometry singles out.

## 17.5 Hyperbolic tilings

*Level: advanced.* A **regular tiling** $\{p, q\}$ covers the plane with regular $p$-gons, $q$ meeting at each corner.
In the Euclidean plane there are three, $\{3, 6\}$, $\{4, 4\}$ and $\{6, 3\}$ ([Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)).
On the sphere the regular tilings are the Platonic solids blown up onto their circumscribed sphere
([Chapter 11](11-Solid-Geometry.md)).

**Theorem 17.5.** The tiling $\{p, q\}$ (with $p, q \ge 3$) exists in the hyperbolic plane exactly when

$$
\frac1p + \frac1q < \frac12 .
$$

*Proof.* At each corner, $q$ equal angles fill a full turn, so each angle of the $p$-gon is $2\pi/q$. By 17.3 its area is
$(p - 2)\pi - p \cdot \frac{2\pi}{q}$, which must be positive: $(p - 2)q > 2p$, which rearranges (divide by $2pq$) to
$\frac1p + \frac1q < \frac12$. Conversely, if the inequality holds, a regular $p$-gon with angle $2\pi/q$ exists: put the
centre at $0$ in the disc and the vertices at radius $t$; as $t$ grows from $0$ towards $1$, the angle decreases continuously
from the Euclidean value $(p - 2)\pi/p$ (for tiny polygons) towards $0$ (vertices near infinity), so it passes through
$2\pi/q$, which lies in between exactly when the inequality holds. Reflecting this polygon in its sides, again and again,
fills the plane without gaps or overlaps (the proof that it never overlaps is Poincaré's polygon theorem, which we do not
prove). $\square$

So there are **infinitely many** hyperbolic regular tilings: $\{7, 3\}$, $\{3, 7\}$, $\{4, 5\}$, $\{5, 4\}$, $\{8, 3\}$, and so on.
The three kinds of geometry correspond to $\frac1p + \frac1q$ being greater than, equal to, or less than $\frac12$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 436.0 436.0" role="img" aria-label="The regular tiling of the hyperbolic plane by heptagons, three at each corner, drawn in the Poincare disc. Every heptagon is the same size in hyperbolic terms; they only look smaller towards the edge, which is infinitely far away">
  <circle cx="218.0" cy="218.0" r="200.0" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M 278.1 218.0 A 349.2 349.2 0 0 1 255.5 171.0 A 349.2 349.2 0 0 1 204.6 159.4 A 349.2 349.2 0 0 1 163.8 191.9 A 349.2 349.2 0 0 1 163.8 244.1 A 349.2 349.2 0 0 1 204.6 276.6 A 349.2 349.2 0 0 1 255.5 265.0 A 349.2 349.2 0 0 1 278.1 218.0 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 278.1 218.0 A 349.2 349.2 0 0 1 255.5 171.0 L 284.4 134.8 A 155.4 155.4 0 0 0 320.9 135.9 A 86.3 86.3 0 0 0 343.1 157.8 A 86.3 86.3 0 0 0 346.4 188.7 A 155.4 155.4 0 0 0 324.5 218.0 L 278.1 218.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 284.4 134.8 L 255.5 171.0 A 349.2 349.2 0 0 1 204.6 159.4 L 194.3 114.2 A 155.4 155.4 0 0 0 218.0 86.3 A 86.3 86.3 0 0 0 248.9 82.7 A 86.3 86.3 0 0 0 275.1 99.4 A 155.4 155.4 0 0 0 284.4 134.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 160.9 99.4 A 155.4 155.4 0 0 0 194.3 114.2 L 204.6 159.4 A 349.2 349.2 0 0 1 163.8 191.9 L 122.1 171.8 A 155.4 155.4 0 0 0 115.1 135.9 A 86.3 86.3 0 0 0 131.5 109.5 A 86.3 86.3 0 0 0 160.9 99.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 79.2 218.0 A 86.3 86.3 0 0 0 89.6 188.7 A 155.4 155.4 0 0 0 122.1 171.8 L 163.8 191.9 A 349.2 349.2 0 0 1 163.8 244.1 L 122.1 264.2 A 155.4 155.4 0 0 0 89.6 247.3 A 86.3 86.3 0 0 0 79.2 218.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 160.9 336.6 A 86.3 86.3 0 0 0 131.5 326.5 A 86.3 86.3 0 0 0 115.1 300.1 A 155.4 155.4 0 0 0 122.1 264.2 L 163.8 244.1 A 349.2 349.2 0 0 1 204.6 276.6 L 194.3 321.8 A 155.4 155.4 0 0 0 160.9 336.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 284.4 301.2 A 155.4 155.4 0 0 0 275.1 336.6 A 86.3 86.3 0 0 0 248.9 353.3 A 86.3 86.3 0 0 0 218.0 349.7 A 155.4 155.4 0 0 0 194.3 321.8 L 204.6 276.6 A 349.2 349.2 0 0 1 255.5 265.0 L 284.4 301.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 278.1 218.0 L 324.5 218.0 A 155.4 155.4 0 0 0 346.4 247.3 A 86.3 86.3 0 0 0 343.1 278.2 A 86.3 86.3 0 0 0 320.9 300.1 A 155.4 155.4 0 0 0 284.4 301.2 L 255.5 265.0 A 349.2 349.2 0 0 1 278.1 218.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 295.1 81.5 A 193.8 193.8 0 0 1 275.1 99.4 A 155.4 155.4 0 0 0 284.4 134.8 A 155.4 155.4 0 0 0 320.9 135.9 A 193.8 193.8 0 0 1 333.9 112.5 A 51.0 51.0 0 0 1 328.6 93.5 A 38.4 38.4 0 0 1 314.8 82.5 A 51.0 51.0 0 0 1 295.1 81.5 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 363.7 118.9 A 30.8 30.8 0 0 1 352.2 111.0 A 69.2 69.2 0 0 1 333.9 112.5 A 193.8 193.8 0 0 0 320.9 135.9 A 86.3 86.3 0 0 0 343.1 157.8 L 364.7 147.4 A 47.9 47.9 0 0 1 368.7 131.4 A 28.3 28.3 0 0 1 363.7 118.9 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 385.3 179.8 A 30.8 30.8 0 0 1 386.3 165.9 A 28.3 28.3 0 0 1 379.7 154.2 A 47.9 47.9 0 0 1 364.7 147.4 L 343.1 157.8 A 86.3 86.3 0 0 0 346.4 188.7 A 193.8 193.8 0 0 0 372.8 193.1 A 69.2 69.2 0 0 1 385.3 179.8 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 346.4 247.3 A 193.8 193.8 0 0 1 372.8 242.9 A 51.0 51.0 0 0 1 384.3 226.8 A 38.4 38.4 0 0 1 384.3 209.2 A 51.0 51.0 0 0 1 372.8 193.1 A 193.8 193.8 0 0 1 346.4 188.7 A 155.4 155.4 0 0 0 324.5 218.0 A 155.4 155.4 0 0 0 346.4 247.3 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 172.4 57.8 A 51.0 51.0 0 0 1 159.3 72.6 A 193.8 193.8 0 0 1 160.9 99.4 A 155.4 155.4 0 0 0 194.3 114.2 A 155.4 155.4 0 0 0 218.0 86.3 A 193.8 193.8 0 0 1 207.8 61.5 A 51.0 51.0 0 0 1 189.6 53.9 A 38.4 38.4 0 0 1 172.4 57.8 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 244.3 46.2 A 28.3 28.3 0 0 1 231.4 42.4 A 30.8 30.8 0 0 1 218.0 46.4 A 69.2 69.2 0 0 1 207.8 61.5 A 193.8 193.8 0 0 0 218.0 86.3 A 86.3 86.3 0 0 0 248.9 82.7 L 254.2 59.3 A 47.9 47.9 0 0 1 244.3 46.2 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 295.1 81.5 A 69.2 69.2 0 0 1 292.5 63.4 A 30.8 30.8 0 0 1 282.2 54.0 A 28.3 28.3 0 0 1 268.9 51.8 A 47.9 47.9 0 0 1 254.2 59.3 L 248.9 82.7 A 86.3 86.3 0 0 0 275.1 99.4 A 193.8 193.8 0 0 0 295.1 81.5 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 72.0 137.9 A 38.4 38.4 0 0 1 64.4 153.8 A 51.0 51.0 0 0 1 67.7 173.2 A 193.8 193.8 0 0 1 89.6 188.7 A 155.4 155.4 0 0 0 122.1 171.8 A 155.4 155.4 0 0 0 115.1 135.9 A 193.8 193.8 0 0 1 89.3 128.4 A 51.0 51.0 0 0 1 72.0 137.9 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 116.5 90.7 A 47.9 47.9 0 0 1 100.0 90.3 A 28.3 28.3 0 0 1 89.0 98.0 A 30.8 30.8 0 0 1 83.8 111.0 A 69.2 69.2 0 0 1 89.3 128.4 A 193.8 193.8 0 0 0 115.1 135.9 A 86.3 86.3 0 0 0 131.5 109.5 L 116.5 90.7 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 160.9 99.4 A 193.8 193.8 0 0 0 159.3 72.6 A 69.2 69.2 0 0 1 143.5 63.4 A 30.8 30.8 0 0 1 129.8 65.6 A 28.3 28.3 0 0 1 119.8 74.6 A 47.9 47.9 0 0 1 116.5 90.7 L 131.5 109.5 A 86.3 86.3 0 0 0 160.9 99.4 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 79.2 218.0 A 86.3 86.3 0 0 0 89.6 188.7 A 193.8 193.8 0 0 0 67.7 173.2 A 69.2 69.2 0 0 1 50.7 179.8 A 30.8 30.8 0 0 1 43.8 191.9 A 28.3 28.3 0 0 1 44.6 205.4 A 47.9 47.9 0 0 1 55.2 218.0 L 79.2 218.0 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 67.7 262.8 A 51.0 51.0 0 0 1 64.4 282.2 A 38.4 38.4 0 0 1 72.0 298.1 A 51.0 51.0 0 0 1 89.3 307.6 A 193.8 193.8 0 0 1 115.1 300.1 A 155.4 155.4 0 0 0 122.1 264.2 A 155.4 155.4 0 0 0 89.6 247.3 A 193.8 193.8 0 0 1 67.7 262.8 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 79.2 218.0 L 55.2 218.0 A 47.9 47.9 0 0 1 44.6 230.6 A 28.3 28.3 0 0 1 43.8 244.1 A 30.8 30.8 0 0 1 50.7 256.2 A 69.2 69.2 0 0 1 67.7 262.8 A 193.8 193.8 0 0 0 89.6 247.3 A 86.3 86.3 0 0 0 79.2 218.0 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 160.9 336.6 A 86.3 86.3 0 0 0 131.5 326.5 L 116.5 345.3 A 47.9 47.9 0 0 1 119.8 361.4 A 28.3 28.3 0 0 1 129.8 370.4 A 30.8 30.8 0 0 1 143.5 372.6 A 69.2 69.2 0 0 1 159.3 363.4 A 193.8 193.8 0 0 0 160.9 336.6 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 116.5 345.3 L 131.5 326.5 A 86.3 86.3 0 0 0 115.1 300.1 A 193.8 193.8 0 0 0 89.3 307.6 A 69.2 69.2 0 0 1 83.8 325.0 A 30.8 30.8 0 0 1 89.0 338.0 A 28.3 28.3 0 0 1 100.0 345.7 A 47.9 47.9 0 0 1 116.5 345.3 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 160.9 336.6 A 193.8 193.8 0 0 1 159.3 363.4 A 51.0 51.0 0 0 1 172.4 378.2 A 38.4 38.4 0 0 1 189.6 382.1 A 51.0 51.0 0 0 1 207.8 374.5 A 193.8 193.8 0 0 1 218.0 349.7 A 155.4 155.4 0 0 0 194.3 321.8 A 155.4 155.4 0 0 0 160.9 336.6 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 284.4 301.2 A 155.4 155.4 0 0 0 275.1 336.6 A 193.8 193.8 0 0 1 295.1 354.5 A 51.0 51.0 0 0 1 314.8 353.5 A 38.4 38.4 0 0 1 328.6 342.5 A 51.0 51.0 0 0 1 333.9 323.5 A 193.8 193.8 0 0 1 320.9 300.1 A 155.4 155.4 0 0 0 284.4 301.2 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 295.1 354.5 A 193.8 193.8 0 0 0 275.1 336.6 A 86.3 86.3 0 0 0 248.9 353.3 L 254.2 376.7 A 47.9 47.9 0 0 1 268.9 384.2 A 28.3 28.3 0 0 1 282.2 382.0 A 30.8 30.8 0 0 1 292.5 372.6 A 69.2 69.2 0 0 1 295.1 354.5 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 244.3 389.8 A 47.9 47.9 0 0 1 254.2 376.7 L 248.9 353.3 A 86.3 86.3 0 0 0 218.0 349.7 A 193.8 193.8 0 0 0 207.8 374.5 A 69.2 69.2 0 0 1 218.0 389.6 A 30.8 30.8 0 0 1 231.4 393.6 A 28.3 28.3 0 0 1 244.3 389.8 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 385.3 256.2 A 69.2 69.2 0 0 1 372.8 242.9 A 193.8 193.8 0 0 0 346.4 247.3 A 86.3 86.3 0 0 0 343.1 278.2 L 364.7 288.6 A 47.9 47.9 0 0 1 379.7 281.8 A 28.3 28.3 0 0 1 386.3 270.1 A 30.8 30.8 0 0 1 385.3 256.2 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 363.7 317.1 A 28.3 28.3 0 0 1 368.7 304.6 A 47.9 47.9 0 0 1 364.7 288.6 L 343.1 278.2 A 86.3 86.3 0 0 0 320.9 300.1 A 193.8 193.8 0 0 0 333.9 323.5 A 69.2 69.2 0 0 1 352.2 325.0 A 30.8 30.8 0 0 1 363.7 317.1 Z" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 348.8 86.5 A 15.4 15.4 0 0 0 354.7 91.7 A 18.7 18.7 0 0 0 357.1 100.0 A 55.5 55.5 0 0 0 352.2 111.0 A 69.2 69.2 0 0 1 333.9 112.5 A 51.0 51.0 0 0 1 328.6 93.5 A 155.4 155.4 0 0 0 339.6 85.1 A 22.7 22.7 0 0 0 348.8 86.5 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 320.5 69.9 A 26.6 26.6 0 0 0 329.2 67.9 A 13.7 13.7 0 0 0 335.5 70.6 A 13.7 13.7 0 0 0 339.5 76.2 A 26.6 26.6 0 0 0 339.6 85.1 A 155.4 155.4 0 0 1 328.6 93.5 A 38.4 38.4 0 0 1 314.8 82.5 A 155.4 155.4 0 0 1 320.5 69.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 295.1 81.5 A 69.2 69.2 0 0 1 292.5 63.4 A 55.5 55.5 0 0 0 302.1 56.1 A 18.7 18.7 0 0 0 310.7 56.7 A 15.4 15.4 0 0 0 317.1 61.2 A 22.7 22.7 0 0 0 320.5 69.9 A 155.4 155.4 0 0 0 314.8 82.5 A 51.0 51.0 0 0 1 295.1 81.5 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 363.7 118.9 A 30.8 30.8 0 0 1 352.2 111.0 A 55.5 55.5 0 0 1 357.1 100.0 A 28.3 28.3 0 0 0 364.7 99.0 A 11.4 11.4 0 0 0 369.6 101.8 A 10.1 10.1 0 0 0 372.1 106.4 A 16.3 16.3 0 0 0 371.5 112.9 A 349.2 349.2 0 0 0 363.7 118.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 379.6 129.4 A 17.1 17.1 0 0 0 386.0 133.4 A 12.8 12.8 0 0 0 388.9 139.4 A 17.1 17.1 0 0 0 388.0 146.9 A 69.2 69.2 0 0 0 379.7 154.2 A 47.9 47.9 0 0 1 364.7 147.4 A 47.9 47.9 0 0 1 368.7 131.4 A 69.2 69.2 0 0 0 379.6 129.4 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 363.7 118.9 A 349.2 349.2 0 0 1 371.5 112.9 A 17.1 17.1 0 0 0 377.8 114.2 A 9.7 9.7 0 0 0 381.2 117.9 A 10.4 10.4 0 0 0 382.4 123.0 A 22.7 22.7 0 0 0 379.6 129.4 A 69.2 69.2 0 0 1 368.7 131.4 A 28.3 28.3 0 0 1 363.7 118.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 385.3 179.8 A 30.8 30.8 0 0 1 386.3 165.9 A 349.2 349.2 0 0 0 395.9 163.5 A 16.3 16.3 0 0 0 401.3 167.1 A 10.1 10.1 0 0 0 403.3 172.0 A 11.4 11.4 0 0 0 402.6 177.5 A 28.3 28.3 0 0 0 397.0 182.8 A 55.5 55.5 0 0 1 385.3 179.8 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 395.9 163.5 A 349.2 349.2 0 0 1 386.3 165.9 A 28.3 28.3 0 0 1 379.7 154.2 A 69.2 69.2 0 0 1 388.0 146.9 A 22.7 22.7 0 0 0 394.8 148.7 A 10.4 10.4 0 0 0 398.0 152.8 A 9.7 9.7 0 0 0 398.7 157.8 A 17.1 17.1 0 0 0 395.9 163.5 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 385.3 179.8 A 55.5 55.5 0 0 0 397.0 182.8 A 18.7 18.7 0 0 0 402.0 189.9 A 15.4 15.4 0 0 0 402.4 197.7 A 22.7 22.7 0 0 0 397.7 205.8 A 155.4 155.4 0 0 0 384.3 209.2 A 51.0 51.0 0 0 1 372.8 193.1 A 69.2 69.2 0 0 1 385.3 179.8 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 385.3 256.2 A 69.2 69.2 0 0 1 372.8 242.9 A 51.0 51.0 0 0 1 384.3 226.8 A 155.4 155.4 0 0 0 397.7 230.2 A 22.7 22.7 0 0 0 402.4 238.3 A 15.4 15.4 0 0 0 402.0 246.1 A 18.7 18.7 0 0 0 397.0 253.2 A 55.5 55.5 0 0 0 385.3 256.2 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 404.7 224.6 A 26.6 26.6 0 0 0 397.7 230.2 A 155.4 155.4 0 0 1 384.3 226.8 A 38.4 38.4 0 0 1 384.3 209.2 A 155.4 155.4 0 0 1 397.7 205.8 A 26.6 26.6 0 0 0 404.7 211.4 A 13.7 13.7 0 0 0 406.5 218.0 A 13.7 13.7 0 0 0 404.7 224.6 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 172.4 57.8 A 51.0 51.0 0 0 1 159.3 72.6 A 69.2 69.2 0 0 1 143.5 63.4 A 55.5 55.5 0 0 0 143.9 51.3 A 18.7 18.7 0 0 0 149.7 44.9 A 15.4 15.4 0 0 0 157.2 42.7 A 22.7 22.7 0 0 0 166.1 45.5 A 155.4 155.4 0 0 0 172.4 57.8 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 189.9 40.1 A 22.7 22.7 0 0 0 196.7 33.7 A 15.4 15.4 0 0 0 204.5 32.4 A 18.7 18.7 0 0 0 212.4 35.7 A 55.5 55.5 0 0 0 218.0 46.4 A 69.2 69.2 0 0 1 207.8 61.5 A 51.0 51.0 0 0 1 189.6 53.9 A 155.4 155.4 0 0 0 189.9 40.1 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 172.4 57.8 A 155.4 155.4 0 0 1 166.1 45.5 A 26.6 26.6 0 0 0 170.0 37.5 A 13.7 13.7 0 0 0 176.1 34.2 A 13.7 13.7 0 0 0 182.9 34.6 A 26.6 26.6 0 0 0 189.9 40.1 A 155.4 155.4 0 0 1 189.6 53.9 A 38.4 38.4 0 0 1 172.4 57.8 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 244.3 46.2 A 28.3 28.3 0 0 1 231.4 42.4 A 349.2 349.2 0 0 1 231.5 32.4 A 17.1 17.1 0 0 0 236.5 28.4 A 9.7 9.7 0 0 0 241.5 28.0 A 10.4 10.4 0 0 0 246.2 30.2 A 22.7 22.7 0 0 0 249.5 36.4 A 69.2 69.2 0 0 1 244.3 46.2 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 231.5 32.4 A 349.2 349.2 0 0 0 231.4 42.4 A 30.8 30.8 0 0 1 218.0 46.4 A 55.5 55.5 0 0 1 212.4 35.7 A 28.3 28.3 0 0 0 216.4 29.0 A 11.4 11.4 0 0 0 221.6 27.1 A 10.1 10.1 0 0 0 226.8 28.0 A 16.3 16.3 0 0 0 231.5 32.4 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 244.3 46.2 A 69.2 69.2 0 0 0 249.5 36.4 A 17.1 17.1 0 0 0 256.6 33.9 A 12.8 12.8 0 0 0 263.1 35.4 A 17.1 17.1 0 0 0 268.4 40.8 A 69.2 69.2 0 0 0 268.9 51.8 A 47.9 47.9 0 0 1 254.2 59.3 A 47.9 47.9 0 0 1 244.3 46.2 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 302.1 56.1 A 55.5 55.5 0 0 1 292.5 63.4 A 30.8 30.8 0 0 1 282.2 54.0 A 349.2 349.2 0 0 0 286.3 44.9 A 16.3 16.3 0 0 0 292.5 43.0 A 10.1 10.1 0 0 0 297.6 44.4 A 11.4 11.4 0 0 0 301.4 48.4 A 28.3 28.3 0 0 0 302.1 56.1 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 283.6 39.1 A 17.1 17.1 0 0 0 286.3 44.9 A 349.2 349.2 0 0 1 282.2 54.0 A 28.3 28.3 0 0 1 268.9 51.8 A 69.2 69.2 0 0 1 268.4 40.8 A 22.7 22.7 0 0 0 274.1 36.6 A 10.4 10.4 0 0 0 279.3 36.6 A 9.7 9.7 0 0 0 283.6 39.1 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 72.0 137.9 A 38.4 38.4 0 0 1 64.4 153.8 A 155.4 155.4 0 0 1 50.8 151.0 A 26.6 26.6 0 0 0 47.0 143.0 A 13.7 13.7 0 0 0 48.2 136.2 A 13.7 13.7 0 0 0 52.7 131.1 A 26.6 26.6 0 0 0 61.4 129.1 A 155.4 155.4 0 0 1 72.0 137.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 50.8 151.0 A 155.4 155.4 0 0 0 64.4 153.8 A 51.0 51.0 0 0 1 67.7 173.2 A 69.2 69.2 0 0 1 50.7 179.8 A 55.5 55.5 0 0 0 41.5 172.0 A 18.7 18.7 0 0 0 40.1 163.5 A 15.4 15.4 0 0 0 43.1 156.2 A 22.7 22.7 0 0 0 50.8 151.0 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 72.0 137.9 A 155.4 155.4 0 0 0 61.4 129.1 A 22.7 22.7 0 0 0 60.7 119.8 A 15.4 15.4 0 0 0 64.5 112.9 A 18.7 18.7 0 0 0 72.0 108.7 A 55.5 55.5 0 0 0 83.8 111.0 A 69.2 69.2 0 0 1 89.3 128.4 A 51.0 51.0 0 0 1 72.0 137.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 116.5 90.7 A 47.9 47.9 0 0 1 100.0 90.3 A 69.2 69.2 0 0 0 95.7 80.2 A 17.1 17.1 0 0 0 98.2 73.0 A 12.8 12.8 0 0 0 103.3 68.9 A 17.1 17.1 0 0 0 110.9 68.1 A 69.2 69.2 0 0 0 119.8 74.6 A 47.9 47.9 0 0 1 116.5 90.7 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 95.7 80.2 A 69.2 69.2 0 0 1 100.0 90.3 A 28.3 28.3 0 0 1 89.0 98.0 A 349.2 349.2 0 0 1 81.3 91.7 A 17.1 17.1 0 0 0 81.3 85.3 A 9.7 9.7 0 0 0 84.1 81.1 A 10.4 10.4 0 0 0 88.8 78.9 A 22.7 22.7 0 0 0 95.7 80.2 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 74.9 92.6 A 16.3 16.3 0 0 0 81.3 91.7 A 349.2 349.2 0 0 0 89.0 98.0 A 30.8 30.8 0 0 1 83.8 111.0 A 55.5 55.5 0 0 1 72.0 108.7 A 28.3 28.3 0 0 0 69.3 101.4 A 11.4 11.4 0 0 0 71.0 96.1 A 10.1 10.1 0 0 0 74.9 92.6 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 137.4 47.1 A 28.3 28.3 0 0 0 143.9 51.3 A 55.5 55.5 0 0 1 143.5 63.4 A 30.8 30.8 0 0 1 129.8 65.6 A 349.2 349.2 0 0 0 125.3 56.7 A 16.3 16.3 0 0 0 127.6 50.6 A 10.1 10.1 0 0 0 131.9 47.5 A 11.4 11.4 0 0 0 137.4 47.1 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 114.3 57.0 A 9.7 9.7 0 0 0 119.1 55.2 A 17.1 17.1 0 0 0 125.3 56.7 A 349.2 349.2 0 0 1 129.8 65.6 A 28.3 28.3 0 0 1 119.8 74.6 A 69.2 69.2 0 0 1 110.9 68.1 A 22.7 22.7 0 0 0 111.1 61.1 A 10.4 10.4 0 0 0 114.3 57.0 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 31.0 179.1 A 11.4 11.4 0 0 0 34.1 174.4 A 28.3 28.3 0 0 0 41.5 172.0 A 55.5 55.5 0 0 1 50.7 179.8 A 30.8 30.8 0 0 1 43.8 191.9 A 349.2 349.2 0 0 0 34.0 189.9 A 16.3 16.3 0 0 0 30.8 184.3 A 10.1 10.1 0 0 0 31.0 179.1 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 28.7 203.7 A 10.4 10.4 0 0 0 27.5 198.6 A 9.7 9.7 0 0 0 29.0 193.8 A 17.1 17.1 0 0 0 34.0 189.9 A 349.2 349.2 0 0 1 43.8 191.9 A 28.3 28.3 0 0 1 44.6 205.4 A 69.2 69.2 0 0 1 34.0 208.3 A 22.7 22.7 0 0 0 28.7 203.7 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 44.6 230.6 A 69.2 69.2 0 0 0 34.0 227.7 A 17.1 17.1 0 0 0 29.9 221.3 A 12.8 12.8 0 0 0 29.9 214.7 A 17.1 17.1 0 0 0 34.0 208.3 A 69.2 69.2 0 0 0 44.6 205.4 A 47.9 47.9 0 0 1 55.2 218.0 A 47.9 47.9 0 0 1 44.6 230.6 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 67.7 262.8 A 51.0 51.0 0 0 1 64.4 282.2 A 155.4 155.4 0 0 0 50.8 285.0 A 22.7 22.7 0 0 0 43.1 279.8 A 15.4 15.4 0 0 0 40.1 272.5 A 18.7 18.7 0 0 0 41.5 264.0 A 55.5 55.5 0 0 0 50.7 256.2 A 69.2 69.2 0 0 1 67.7 262.8 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 50.8 285.0 A 155.4 155.4 0 0 1 64.4 282.2 A 38.4 38.4 0 0 1 72.0 298.1 A 155.4 155.4 0 0 1 61.4 306.9 A 26.6 26.6 0 0 0 52.7 304.9 A 13.7 13.7 0 0 0 48.2 299.8 A 13.7 13.7 0 0 0 47.0 293.0 A 26.6 26.6 0 0 0 50.8 285.0 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 60.7 316.2 A 22.7 22.7 0 0 0 61.4 306.9 A 155.4 155.4 0 0 0 72.0 298.1 A 51.0 51.0 0 0 1 89.3 307.6 A 69.2 69.2 0 0 1 83.8 325.0 A 55.5 55.5 0 0 0 72.0 327.3 A 18.7 18.7 0 0 0 64.5 323.1 A 15.4 15.4 0 0 0 60.7 316.2 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 28.7 232.3 A 22.7 22.7 0 0 0 34.0 227.7 A 69.2 69.2 0 0 1 44.6 230.6 A 28.3 28.3 0 0 1 43.8 244.1 A 349.2 349.2 0 0 1 34.0 246.1 A 17.1 17.1 0 0 0 29.0 242.2 A 9.7 9.7 0 0 0 27.5 237.4 A 10.4 10.4 0 0 0 28.7 232.3 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 31.0 256.9 A 10.1 10.1 0 0 0 30.8 251.7 A 16.3 16.3 0 0 0 34.0 246.1 A 349.2 349.2 0 0 0 43.8 244.1 A 30.8 30.8 0 0 1 50.7 256.2 A 55.5 55.5 0 0 1 41.5 264.0 A 28.3 28.3 0 0 0 34.1 261.6 A 11.4 11.4 0 0 0 31.0 256.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 95.7 355.8 A 69.2 69.2 0 0 0 100.0 345.7 A 47.9 47.9 0 0 1 116.5 345.3 A 47.9 47.9 0 0 1 119.8 361.4 A 69.2 69.2 0 0 0 110.9 367.9 A 17.1 17.1 0 0 0 103.3 367.1 A 12.8 12.8 0 0 0 98.2 363.0 A 17.1 17.1 0 0 0 95.7 355.8 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 114.3 379.0 A 10.4 10.4 0 0 0 111.1 374.9 A 22.7 22.7 0 0 0 110.9 367.9 A 69.2 69.2 0 0 1 119.8 361.4 A 28.3 28.3 0 0 1 129.8 370.4 A 349.2 349.2 0 0 1 125.3 379.3 A 17.1 17.1 0 0 0 119.1 380.8 A 9.7 9.7 0 0 0 114.3 379.0 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 137.4 388.9 A 11.4 11.4 0 0 0 131.9 388.5 A 10.1 10.1 0 0 0 127.6 385.4 A 16.3 16.3 0 0 0 125.3 379.3 A 349.2 349.2 0 0 0 129.8 370.4 A 30.8 30.8 0 0 1 143.5 372.6 A 55.5 55.5 0 0 1 143.9 384.7 A 28.3 28.3 0 0 0 137.4 388.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 172.4 378.2 A 155.4 155.4 0 0 0 166.1 390.5 A 22.7 22.7 0 0 0 157.2 393.3 A 15.4 15.4 0 0 0 149.7 391.1 A 18.7 18.7 0 0 0 143.9 384.7 A 55.5 55.5 0 0 0 143.5 372.6 A 69.2 69.2 0 0 1 159.3 363.4 A 51.0 51.0 0 0 1 172.4 378.2 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 74.9 343.4 A 10.1 10.1 0 0 0 71.0 339.9 A 11.4 11.4 0 0 0 69.3 334.6 A 28.3 28.3 0 0 0 72.0 327.3 A 55.5 55.5 0 0 1 83.8 325.0 A 30.8 30.8 0 0 1 89.0 338.0 A 349.2 349.2 0 0 0 81.3 344.3 A 16.3 16.3 0 0 0 74.9 343.4 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 95.7 355.8 A 22.7 22.7 0 0 0 88.8 357.1 A 10.4 10.4 0 0 0 84.1 354.9 A 9.7 9.7 0 0 0 81.3 350.7 A 17.1 17.1 0 0 0 81.3 344.3 A 349.2 349.2 0 0 1 89.0 338.0 A 28.3 28.3 0 0 1 100.0 345.7 A 69.2 69.2 0 0 1 95.7 355.8 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 170.0 398.5 A 26.6 26.6 0 0 0 166.1 390.5 A 155.4 155.4 0 0 1 172.4 378.2 A 38.4 38.4 0 0 1 189.6 382.1 A 155.4 155.4 0 0 1 189.9 395.9 A 26.6 26.6 0 0 0 182.9 401.4 A 13.7 13.7 0 0 0 176.1 401.8 A 13.7 13.7 0 0 0 170.0 398.5 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 204.5 403.6 A 15.4 15.4 0 0 0 196.7 402.3 A 22.7 22.7 0 0 0 189.9 395.9 A 155.4 155.4 0 0 0 189.6 382.1 A 51.0 51.0 0 0 1 207.8 374.5 A 69.2 69.2 0 0 1 218.0 389.6 A 55.5 55.5 0 0 0 212.4 400.3 A 18.7 18.7 0 0 0 204.5 403.6 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 302.1 379.9 A 55.5 55.5 0 0 0 292.5 372.6 A 69.2 69.2 0 0 1 295.1 354.5 A 51.0 51.0 0 0 1 314.8 353.5 A 155.4 155.4 0 0 0 320.5 366.1 A 22.7 22.7 0 0 0 317.1 374.8 A 15.4 15.4 0 0 0 310.7 379.3 A 18.7 18.7 0 0 0 302.1 379.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 335.5 365.4 A 13.7 13.7 0 0 0 329.2 368.1 A 26.6 26.6 0 0 0 320.5 366.1 A 155.4 155.4 0 0 1 314.8 353.5 A 38.4 38.4 0 0 1 328.6 342.5 A 155.4 155.4 0 0 1 339.6 350.9 A 26.6 26.6 0 0 0 339.5 359.8 A 13.7 13.7 0 0 0 335.5 365.4 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 357.1 336.0 A 18.7 18.7 0 0 0 354.7 344.3 A 15.4 15.4 0 0 0 348.8 349.5 A 22.7 22.7 0 0 0 339.6 350.9 A 155.4 155.4 0 0 0 328.6 342.5 A 51.0 51.0 0 0 1 333.9 323.5 A 69.2 69.2 0 0 1 352.2 325.0 A 55.5 55.5 0 0 0 357.1 336.0 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 256.6 402.1 A 17.1 17.1 0 0 0 249.5 399.6 A 69.2 69.2 0 0 0 244.3 389.8 A 47.9 47.9 0 0 1 254.2 376.7 A 47.9 47.9 0 0 1 268.9 384.2 A 69.2 69.2 0 0 0 268.4 395.2 A 17.1 17.1 0 0 0 263.1 400.6 A 12.8 12.8 0 0 0 256.6 402.1 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 283.6 396.9 A 9.7 9.7 0 0 0 279.3 399.4 A 10.4 10.4 0 0 0 274.1 399.4 A 22.7 22.7 0 0 0 268.4 395.2 A 69.2 69.2 0 0 1 268.9 384.2 A 28.3 28.3 0 0 1 282.2 382.0 A 349.2 349.2 0 0 1 286.3 391.1 A 17.1 17.1 0 0 0 283.6 396.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 302.1 379.9 A 28.3 28.3 0 0 0 301.4 387.6 A 11.4 11.4 0 0 0 297.6 391.6 A 10.1 10.1 0 0 0 292.5 393.0 A 16.3 16.3 0 0 0 286.3 391.1 A 349.2 349.2 0 0 0 282.2 382.0 A 30.8 30.8 0 0 1 292.5 372.6 A 55.5 55.5 0 0 1 302.1 379.9 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 231.5 403.6 A 16.3 16.3 0 0 0 226.8 408.0 A 10.1 10.1 0 0 0 221.6 408.9 A 11.4 11.4 0 0 0 216.4 407.0 A 28.3 28.3 0 0 0 212.4 400.3 A 55.5 55.5 0 0 1 218.0 389.6 A 30.8 30.8 0 0 1 231.4 393.6 A 349.2 349.2 0 0 0 231.5 403.6 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 244.3 389.8 A 69.2 69.2 0 0 1 249.5 399.6 A 22.7 22.7 0 0 0 246.2 405.8 A 10.4 10.4 0 0 0 241.5 408.0 A 9.7 9.7 0 0 0 236.5 407.6 A 17.1 17.1 0 0 0 231.5 403.6 A 349.2 349.2 0 0 1 231.4 393.6 A 28.3 28.3 0 0 1 244.3 389.8 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 388.9 296.6 A 12.8 12.8 0 0 0 386.0 302.6 A 17.1 17.1 0 0 0 379.6 306.6 A 69.2 69.2 0 0 0 368.7 304.6 A 47.9 47.9 0 0 1 364.7 288.6 A 47.9 47.9 0 0 1 379.7 281.8 A 69.2 69.2 0 0 0 388.0 289.1 A 17.1 17.1 0 0 0 388.9 296.6 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 395.9 272.5 A 17.1 17.1 0 0 0 398.7 278.2 A 9.7 9.7 0 0 0 398.0 283.2 A 10.4 10.4 0 0 0 394.8 287.3 A 22.7 22.7 0 0 0 388.0 289.1 A 69.2 69.2 0 0 1 379.7 281.8 A 28.3 28.3 0 0 1 386.3 270.1 A 349.2 349.2 0 0 1 395.9 272.5 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 385.3 256.2 A 55.5 55.5 0 0 1 397.0 253.2 A 28.3 28.3 0 0 0 402.6 258.5 A 11.4 11.4 0 0 0 403.3 264.0 A 10.1 10.1 0 0 0 401.3 268.9 A 16.3 16.3 0 0 0 395.9 272.5 A 349.2 349.2 0 0 0 386.3 270.1 A 30.8 30.8 0 0 1 385.3 256.2 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 363.7 317.1 A 28.3 28.3 0 0 1 368.7 304.6 A 69.2 69.2 0 0 1 379.6 306.6 A 22.7 22.7 0 0 0 382.4 313.0 A 10.4 10.4 0 0 0 381.2 318.1 A 9.7 9.7 0 0 0 377.8 321.8 A 17.1 17.1 0 0 0 371.5 323.1 A 349.2 349.2 0 0 1 363.7 317.1 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 363.7 317.1 A 349.2 349.2 0 0 0 371.5 323.1 A 16.3 16.3 0 0 0 372.1 329.6 A 10.1 10.1 0 0 0 369.6 334.2 A 11.4 11.4 0 0 0 364.7 337.0 A 28.3 28.3 0 0 0 357.1 336.0 A 55.5 55.5 0 0 1 352.2 325.0 A 30.8 30.8 0 0 1 363.7 317.1 Z" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 348.8 86.5 A 15.4 15.4 0 0 0 354.7 91.7 A 86.3 86.3 0 0 0 359.5 88.3 A 10.1 10.1 0 0 1 359.7 84.6 A 5.4 5.4 0 0 1 358.3 82.2 A 5.6 5.6 0 0 1 355.8 80.7 A 11.4 11.4 0 0 1 351.9 81.1 A 47.9 47.9 0 0 0 348.8 86.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 359.5 88.3 A 86.3 86.3 0 0 1 354.7 91.7 A 18.7 18.7 0 0 0 357.1 100.0 A 28.3 28.3 0 0 0 364.7 99.0 A 19.2 19.2 0 0 1 366.6 94.5 A 7.0 7.0 0 0 1 365.6 91.2 A 5.9 5.9 0 0 1 363.3 89.0 A 9.0 9.0 0 0 1 359.5 88.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 348.8 86.5 A 47.9 47.9 0 0 1 351.9 81.1 A 9.2 9.2 0 0 1 351.0 77.1 A 6.6 6.6 0 0 1 348.5 74.6 A 8.3 8.3 0 0 1 344.7 73.7 A 28.3 28.3 0 0 1 339.5 76.2 A 26.6 26.6 0 0 0 339.6 85.1 A 22.7 22.7 0 0 0 348.8 86.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 320.5 69.9 A 26.6 26.6 0 0 0 329.2 67.9 A 28.3 28.3 0 0 1 330.5 62.4 A 8.3 8.3 0 0 1 328.7 58.9 A 6.6 6.6 0 0 1 325.8 57.0 A 9.2 9.2 0 0 1 321.7 57.0 A 47.9 47.9 0 0 1 317.1 61.2 A 22.7 22.7 0 0 0 320.5 69.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 330.5 62.4 A 28.3 28.3 0 0 0 329.2 67.9 A 13.7 13.7 0 0 0 335.5 70.6 L 338.6 66.8 A 7.8 7.8 0 0 1 338.0 63.8 A 4.6 4.6 0 0 1 336.4 61.9 A 5.1 5.1 0 0 1 333.9 61.2 A 11.8 11.8 0 0 1 330.5 62.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 341.7 66.6 A 7.8 7.8 0 0 1 338.6 66.8 L 335.5 70.6 A 13.7 13.7 0 0 0 339.5 76.2 A 28.3 28.3 0 0 0 344.7 73.7 A 11.8 11.8 0 0 1 345.1 70.1 A 5.1 5.1 0 0 1 343.8 67.9 A 4.6 4.6 0 0 1 341.7 66.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 305.4 45.7 A 19.2 19.2 0 0 1 301.4 48.4 A 28.3 28.3 0 0 0 302.1 56.1 A 18.7 18.7 0 0 0 310.7 56.7 A 86.3 86.3 0 0 1 313.0 51.2 A 9.0 9.0 0 0 1 311.4 47.7 A 5.9 5.9 0 0 1 308.8 45.9 A 7.0 7.0 0 0 1 305.4 45.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 319.2 51.0 A 5.4 5.4 0 0 1 316.5 50.1 A 10.1 10.1 0 0 1 313.0 51.2 A 86.3 86.3 0 0 0 310.7 56.7 A 15.4 15.4 0 0 0 317.1 61.2 A 47.9 47.9 0 0 0 321.7 57.0 A 11.4 11.4 0 0 1 321.2 53.2 A 5.6 5.6 0 0 1 319.2 51.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 371.4 95.0 A 4.3 4.3 0 0 1 369.5 94.0 A 11.0 11.0 0 0 1 366.6 94.5 A 19.2 19.2 0 0 0 364.7 99.0 A 11.4 11.4 0 0 0 369.6 101.8 A 86.3 86.3 0 0 1 372.4 99.2 A 5.9 5.9 0 0 1 372.4 96.7 A 3.7 3.7 0 0 1 371.4 95.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 376.8 102.6 A 3.7 3.7 0 0 1 376.2 100.8 A 3.5 3.5 0 0 1 374.8 99.5 A 6.3 6.3 0 0 1 372.4 99.2 A 86.3 86.3 0 0 0 369.6 101.8 A 10.1 10.1 0 0 0 372.1 106.4 A 26.6 26.6 0 0 0 376.1 105.1 A 7.9 7.9 0 0 1 376.8 102.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 377.8 114.2 A 22.7 22.7 0 0 1 380.3 111.0 A 5.9 5.9 0 0 1 380.0 108.2 A 4.5 4.5 0 0 1 378.6 106.2 A 6.1 6.1 0 0 1 376.1 105.1 A 26.6 26.6 0 0 1 372.1 106.4 A 16.3 16.3 0 0 0 371.5 112.9 A 17.1 17.1 0 0 0 377.8 114.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 379.6 129.4 A 17.1 17.1 0 0 0 386.0 133.4 A 51.0 51.0 0 0 1 390.0 130.3 A 7.6 7.6 0 0 1 390.5 127.0 A 5.2 5.2 0 0 1 389.3 124.5 A 6.3 6.3 0 0 1 386.8 122.7 A 19.2 19.2 0 0 1 382.4 123.0 A 22.7 22.7 0 0 0 379.6 129.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 390.0 130.3 A 51.0 51.0 0 0 0 386.0 133.4 A 12.8 12.8 0 0 0 388.9 139.4 A 51.0 51.0 0 0 0 393.8 138.2 A 8.9 8.9 0 0 1 395.1 135.3 A 4.6 4.6 0 0 1 394.6 132.9 A 4.6 4.6 0 0 1 393.1 131.1 A 8.9 8.9 0 0 1 390.0 130.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 396.7 139.9 A 7.6 7.6 0 0 1 393.8 138.2 A 51.0 51.0 0 0 1 388.9 139.4 A 17.1 17.1 0 0 0 388.0 146.9 A 22.7 22.7 0 0 0 394.8 148.7 A 19.2 19.2 0 0 1 397.8 145.4 A 6.3 6.3 0 0 1 397.9 142.4 A 5.2 5.2 0 0 1 396.7 139.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 382.8 111.1 A 8.0 8.0 0 0 1 380.3 111.0 A 22.7 22.7 0 0 0 377.8 114.2 A 9.7 9.7 0 0 0 381.2 117.9 A 155.4 155.4 0 0 0 384.4 116.1 A 5.8 5.8 0 0 1 384.9 113.9 A 3.4 3.4 0 0 1 384.2 112.2 A 3.6 3.6 0 0 1 382.8 111.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 387.8 118.3 A 3.4 3.4 0 0 1 386.6 116.9 A 5.6 5.6 0 0 1 384.4 116.1 A 155.4 155.4 0 0 1 381.2 117.9 A 10.4 10.4 0 0 0 382.4 123.0 A 19.2 19.2 0 0 0 386.8 122.7 A 9.5 9.5 0 0 1 388.1 120.3 A 3.9 3.9 0 0 1 387.8 118.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 402.9 157.9 A 22.7 22.7 0 0 1 398.7 157.8 A 17.1 17.1 0 0 0 395.9 163.5 A 16.3 16.3 0 0 0 401.3 167.1 A 26.6 26.6 0 0 1 404.8 164.8 A 6.1 6.1 0 0 1 405.6 162.1 A 4.5 4.5 0 0 1 404.9 159.8 A 5.9 5.9 0 0 1 402.9 157.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 408.3 167.4 A 3.7 3.7 0 0 1 407.3 165.8 A 7.9 7.9 0 0 1 404.8 164.8 A 26.6 26.6 0 0 0 401.3 167.1 A 10.1 10.1 0 0 0 403.3 172.0 A 86.3 86.3 0 0 0 407.2 171.4 A 6.3 6.3 0 0 1 408.4 169.3 A 3.5 3.5 0 0 1 408.3 167.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 409.4 176.8 A 4.3 4.3 0 0 1 409.8 174.7 A 3.7 3.7 0 0 1 409.1 172.9 A 5.9 5.9 0 0 1 407.2 171.4 A 86.3 86.3 0 0 1 403.3 172.0 A 11.4 11.4 0 0 0 402.6 177.5 A 19.2 19.2 0 0 0 407.2 178.9 A 11.0 11.0 0 0 1 409.4 176.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 402.0 189.9 A 86.3 86.3 0 0 1 407.6 188.2 A 9.0 9.0 0 0 1 409.4 184.8 A 5.9 5.9 0 0 1 409.2 181.7 A 7.0 7.0 0 0 1 407.2 178.9 A 19.2 19.2 0 0 1 402.6 177.5 A 28.3 28.3 0 0 0 397.0 182.8 A 18.7 18.7 0 0 0 402.0 189.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 402.2 149.2 A 3.4 3.4 0 0 1 401.8 147.4 A 3.9 3.9 0 0 1 400.5 146.0 A 9.5 9.5 0 0 1 397.8 145.4 A 19.2 19.2 0 0 0 394.8 148.7 A 10.4 10.4 0 0 0 398.0 152.8 A 155.4 155.4 0 0 1 401.4 151.4 A 5.6 5.6 0 0 1 402.2 149.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 402.9 157.9 A 8.0 8.0 0 0 1 404.3 155.8 A 3.6 3.6 0 0 1 404.3 154.0 A 3.4 3.4 0 0 1 403.4 152.4 A 5.8 5.8 0 0 1 401.4 151.4 A 155.4 155.4 0 0 0 398.0 152.8 A 9.7 9.7 0 0 0 398.7 157.8 A 22.7 22.7 0 0 0 402.9 157.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 410.7 190.4 A 10.1 10.1 0 0 1 407.6 188.2 A 86.3 86.3 0 0 0 402.0 189.9 A 15.4 15.4 0 0 0 402.4 197.7 A 47.9 47.9 0 0 0 408.5 198.6 A 11.4 11.4 0 0 1 411.2 195.9 A 5.6 5.6 0 0 1 411.7 193.0 A 5.4 5.4 0 0 1 410.7 190.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 411.5 205.4 A 6.6 6.6 0 0 1 411.1 201.9 A 9.2 9.2 0 0 1 408.5 198.6 A 47.9 47.9 0 0 1 402.4 197.7 A 22.7 22.7 0 0 0 397.7 205.8 A 26.6 26.6 0 0 0 404.7 211.4 A 28.3 28.3 0 0 1 409.8 208.9 A 8.3 8.3 0 0 1 411.5 205.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 411.5 230.6 A 8.3 8.3 0 0 1 409.8 227.1 A 28.3 28.3 0 0 1 404.7 224.6 A 26.6 26.6 0 0 0 397.7 230.2 A 22.7 22.7 0 0 0 402.4 238.3 A 47.9 47.9 0 0 1 408.5 237.4 A 9.2 9.2 0 0 1 411.1 234.1 A 6.6 6.6 0 0 1 411.5 230.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 410.7 245.6 A 5.4 5.4 0 0 1 411.7 243.0 A 5.6 5.6 0 0 1 411.2 240.1 A 11.4 11.4 0 0 1 408.5 237.4 A 47.9 47.9 0 0 0 402.4 238.3 A 15.4 15.4 0 0 0 402.0 246.1 A 86.3 86.3 0 0 0 407.6 247.8 A 10.1 10.1 0 0 1 410.7 245.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 402.6 258.5 A 19.2 19.2 0 0 1 407.2 257.1 A 7.0 7.0 0 0 1 409.2 254.3 A 5.9 5.9 0 0 1 409.4 251.2 A 9.0 9.0 0 0 1 407.6 247.8 A 86.3 86.3 0 0 1 402.0 246.1 A 18.7 18.7 0 0 0 397.0 253.2 A 28.3 28.3 0 0 0 402.6 258.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 411.4 218.0 A 7.8 7.8 0 0 1 413.4 215.7 A 4.6 4.6 0 0 1 413.8 213.2 A 5.1 5.1 0 0 1 412.9 210.8 A 11.8 11.8 0 0 1 409.8 208.9 A 28.3 28.3 0 0 0 404.7 211.4 A 13.7 13.7 0 0 0 406.5 218.0 L 411.4 218.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 404.7 224.6 A 28.3 28.3 0 0 0 409.8 227.1 A 11.8 11.8 0 0 1 412.9 225.2 A 5.1 5.1 0 0 1 413.8 222.8 A 4.6 4.6 0 0 1 413.4 220.3 A 7.8 7.8 0 0 1 411.4 218.0 L 406.5 218.0 A 13.7 13.7 0 0 0 404.7 224.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 140.1 39.7 A 7.0 7.0 0 0 1 137.8 42.2 A 19.2 19.2 0 0 1 137.4 47.1 A 28.3 28.3 0 0 0 143.9 51.3 A 18.7 18.7 0 0 0 149.7 44.9 A 86.3 86.3 0 0 1 146.8 39.8 A 9.0 9.0 0 0 1 143.1 38.8 A 5.9 5.9 0 0 1 140.1 39.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 153.4 34.6 A 5.6 5.6 0 0 1 150.6 34.7 A 5.4 5.4 0 0 1 148.2 36.3 A 10.1 10.1 0 0 1 146.8 39.8 A 86.3 86.3 0 0 0 149.7 44.9 A 15.4 15.4 0 0 0 157.2 42.7 A 47.9 47.9 0 0 0 156.7 36.6 A 11.4 11.4 0 0 1 153.4 34.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 170.0 37.5 A 28.3 28.3 0 0 1 166.5 33.0 A 8.3 8.3 0 0 1 162.6 32.2 A 6.6 6.6 0 0 1 159.3 33.4 A 9.2 9.2 0 0 1 156.7 36.6 A 47.9 47.9 0 0 1 157.2 42.7 A 22.7 22.7 0 0 0 166.1 45.5 A 26.6 26.6 0 0 0 170.0 37.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 189.9 40.1 A 22.7 22.7 0 0 0 196.7 33.7 A 47.9 47.9 0 0 1 194.5 28.0 A 9.2 9.2 0 0 1 190.8 26.2 A 6.6 6.6 0 0 1 187.3 26.6 A 8.3 8.3 0 0 1 184.1 29.0 A 28.3 28.3 0 0 1 182.9 34.6 A 26.6 26.6 0 0 0 189.9 40.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 194.5 28.0 A 47.9 47.9 0 0 0 196.7 33.7 A 15.4 15.4 0 0 0 204.5 32.4 A 86.3 86.3 0 0 0 204.8 26.5 A 10.1 10.1 0 0 1 202.1 24.0 A 5.4 5.4 0 0 1 199.2 23.6 A 5.6 5.6 0 0 1 196.6 24.7 A 11.4 11.4 0 0 1 194.5 28.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 207.7 24.0 A 9.0 9.0 0 0 1 204.8 26.5 A 86.3 86.3 0 0 1 204.5 32.4 A 18.7 18.7 0 0 0 212.4 35.7 A 28.3 28.3 0 0 0 216.4 29.0 A 19.2 19.2 0 0 1 214.0 24.8 A 7.0 7.0 0 0 1 210.9 23.5 A 5.9 5.9 0 0 1 207.7 24.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 167.7 29.6 A 11.8 11.8 0 0 1 166.5 33.0 A 28.3 28.3 0 0 0 170.0 37.5 A 13.7 13.7 0 0 0 176.1 34.2 L 175.0 29.5 A 7.8 7.8 0 0 1 172.2 28.0 A 4.6 4.6 0 0 1 169.8 28.2 A 5.1 5.1 0 0 1 167.7 29.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 179.1 26.0 A 4.6 4.6 0 0 1 176.8 26.9 A 7.8 7.8 0 0 1 175.0 29.5 L 176.1 34.2 A 13.7 13.7 0 0 0 182.9 34.6 A 28.3 28.3 0 0 0 184.1 29.0 A 11.8 11.8 0 0 1 181.6 26.4 A 5.1 5.1 0 0 1 179.1 26.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 228.3 24.0 A 26.6 26.6 0 0 1 226.8 28.0 A 16.3 16.3 0 0 0 231.5 32.4 A 17.1 17.1 0 0 0 236.5 28.4 A 22.7 22.7 0 0 1 235.5 24.4 A 5.9 5.9 0 0 1 233.2 22.8 A 4.5 4.5 0 0 1 230.8 22.7 A 6.1 6.1 0 0 1 228.3 24.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 239.0 22.1 A 3.6 3.6 0 0 1 237.2 22.5 A 8.0 8.0 0 0 1 235.5 24.4 A 22.7 22.7 0 0 0 236.5 28.4 A 9.7 9.7 0 0 0 241.5 28.0 A 155.4 155.4 0 0 0 242.1 24.4 A 5.8 5.8 0 0 1 240.7 22.6 A 3.4 3.4 0 0 1 239.0 22.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 247.6 24.1 A 3.9 3.9 0 0 1 245.9 23.1 A 3.4 3.4 0 0 1 244.1 23.1 A 5.6 5.6 0 0 1 242.1 24.4 A 155.4 155.4 0 0 1 241.5 28.0 A 10.4 10.4 0 0 0 246.2 30.2 A 19.2 19.2 0 0 0 248.7 26.6 A 9.5 9.5 0 0 1 247.6 24.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 256.6 33.9 A 51.0 51.0 0 0 1 256.7 28.8 A 7.6 7.6 0 0 1 254.4 26.4 A 5.2 5.2 0 0 1 251.7 25.7 A 6.3 6.3 0 0 1 248.7 26.6 A 19.2 19.2 0 0 1 246.2 30.2 A 22.7 22.7 0 0 0 249.5 36.4 A 17.1 17.1 0 0 0 256.6 33.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 219.5 21.6 A 3.7 3.7 0 0 1 217.5 21.4 A 4.3 4.3 0 0 1 215.5 22.2 A 11.0 11.0 0 0 1 214.0 24.8 A 19.2 19.2 0 0 0 216.4 29.0 A 11.4 11.4 0 0 0 221.6 27.1 A 86.3 86.3 0 0 1 221.4 23.2 A 5.9 5.9 0 0 1 219.5 21.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 228.3 24.0 A 7.9 7.9 0 0 1 226.8 21.9 A 3.7 3.7 0 0 1 225.0 21.2 A 3.5 3.5 0 0 1 223.1 21.5 A 6.3 6.3 0 0 1 221.4 23.2 A 86.3 86.3 0 0 0 221.6 27.1 A 10.1 10.1 0 0 0 226.8 28.0 A 26.6 26.6 0 0 0 228.3 24.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 259.2 26.9 A 8.9 8.9 0 0 1 256.7 28.8 A 51.0 51.0 0 0 0 256.6 33.9 A 12.8 12.8 0 0 0 263.1 35.4 A 51.0 51.0 0 0 0 265.2 30.8 A 8.9 8.9 0 0 1 263.8 28.0 A 4.6 4.6 0 0 1 261.6 26.9 A 4.6 4.6 0 0 1 259.2 26.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 271.1 30.2 A 5.2 5.2 0 0 1 268.3 29.6 A 7.6 7.6 0 0 1 265.2 30.8 A 51.0 51.0 0 0 1 263.1 35.4 A 17.1 17.1 0 0 0 268.4 40.8 A 22.7 22.7 0 0 0 274.1 36.6 A 19.2 19.2 0 0 1 273.4 32.2 A 6.3 6.3 0 0 1 271.1 30.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 289.0 35.6 A 5.9 5.9 0 0 1 286.3 36.0 A 22.7 22.7 0 0 1 283.6 39.1 A 17.1 17.1 0 0 0 286.3 44.9 A 16.3 16.3 0 0 0 292.5 43.0 A 26.6 26.6 0 0 1 292.9 38.8 A 6.1 6.1 0 0 1 291.2 36.5 A 4.5 4.5 0 0 1 289.0 35.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 298.6 38.8 A 3.5 3.5 0 0 1 297.1 37.7 A 3.7 3.7 0 0 1 295.2 37.5 A 7.9 7.9 0 0 1 292.9 38.8 A 26.6 26.6 0 0 0 292.5 43.0 A 10.1 10.1 0 0 0 297.6 44.4 A 86.3 86.3 0 0 0 299.5 41.0 A 6.3 6.3 0 0 1 298.6 38.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 305.4 45.7 A 11.0 11.0 0 0 1 305.2 42.7 A 4.3 4.3 0 0 1 303.8 41.1 A 3.7 3.7 0 0 1 301.9 40.4 A 5.9 5.9 0 0 1 299.5 41.0 A 86.3 86.3 0 0 1 297.6 44.4 A 11.4 11.4 0 0 0 301.4 48.4 A 19.2 19.2 0 0 0 305.4 45.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 280.3 33.1 A 5.6 5.6 0 0 1 279.1 31.1 A 3.4 3.4 0 0 1 277.4 30.3 A 3.9 3.9 0 0 1 275.4 30.4 A 9.5 9.5 0 0 1 273.4 32.2 A 19.2 19.2 0 0 0 274.1 36.6 A 10.4 10.4 0 0 0 279.3 36.6 A 155.4 155.4 0 0 1 280.3 33.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 283.6 39.1 A 22.7 22.7 0 0 0 286.3 36.0 A 8.0 8.0 0 0 1 285.6 33.6 A 3.6 3.6 0 0 1 284.1 32.4 A 3.4 3.4 0 0 1 282.3 32.1 A 5.8 5.8 0 0 1 280.3 33.1 A 155.4 155.4 0 0 0 279.3 36.6 A 9.7 9.7 0 0 0 283.6 39.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 38.0 152.8 A 47.9 47.9 0 0 1 43.1 156.2 A 22.7 22.7 0 0 0 50.8 151.0 A 26.6 26.6 0 0 0 47.0 143.0 A 28.3 28.3 0 0 1 41.2 142.9 A 8.3 8.3 0 0 1 38.2 145.4 A 6.6 6.6 0 0 1 37.1 148.8 A 9.2 9.2 0 0 1 38.0 152.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 39.5 137.3 A 5.1 5.1 0 0 1 39.3 139.9 A 11.8 11.8 0 0 1 41.2 142.9 A 28.3 28.3 0 0 0 47.0 143.0 A 13.7 13.7 0 0 0 48.2 136.2 L 43.8 134.1 A 7.8 7.8 0 0 1 40.9 135.3 A 4.6 4.6 0 0 1 39.5 137.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 45.5 127.0 A 5.1 5.1 0 0 1 43.7 128.8 A 4.6 4.6 0 0 1 42.9 131.1 A 7.8 7.8 0 0 1 43.8 134.1 L 48.2 136.2 A 13.7 13.7 0 0 0 52.7 131.1 A 28.3 28.3 0 0 0 49.1 126.6 A 11.8 11.8 0 0 1 45.5 127.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 60.7 119.8 A 47.9 47.9 0 0 1 54.8 117.9 A 9.2 9.2 0 0 1 51.1 119.7 A 6.6 6.6 0 0 1 49.2 122.7 A 8.3 8.3 0 0 1 49.1 126.6 A 28.3 28.3 0 0 1 52.7 131.1 A 26.6 26.6 0 0 0 61.4 129.1 A 22.7 22.7 0 0 0 60.7 119.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 31.2 164.8 A 5.9 5.9 0 0 1 30.0 167.8 A 7.0 7.0 0 0 1 30.6 171.1 A 19.2 19.2 0 0 1 34.1 174.4 A 28.3 28.3 0 0 0 41.5 172.0 A 18.7 18.7 0 0 0 40.1 163.5 A 86.3 86.3 0 0 1 34.2 162.5 A 9.0 9.0 0 0 1 31.2 164.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 38.0 152.8 A 11.4 11.4 0 0 1 34.3 154.1 A 5.6 5.6 0 0 1 32.7 156.5 A 5.4 5.4 0 0 1 32.4 159.3 A 10.1 10.1 0 0 1 34.2 162.5 A 86.3 86.3 0 0 0 40.1 163.5 A 15.4 15.4 0 0 0 43.1 156.2 A 47.9 47.9 0 0 0 38.0 152.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 53.5 114.2 A 11.4 11.4 0 0 1 54.8 117.9 A 47.9 47.9 0 0 0 60.7 119.8 A 15.4 15.4 0 0 0 64.5 112.9 A 86.3 86.3 0 0 0 60.1 108.9 A 10.1 10.1 0 0 1 56.4 109.5 A 5.4 5.4 0 0 1 54.3 111.5 A 5.6 5.6 0 0 1 53.5 114.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 61.5 102.3 A 5.9 5.9 0 0 1 59.9 105.1 A 9.0 9.0 0 0 1 60.1 108.9 A 86.3 86.3 0 0 1 64.5 112.9 A 18.7 18.7 0 0 0 72.0 108.7 A 28.3 28.3 0 0 0 69.3 101.4 A 19.2 19.2 0 0 1 64.5 100.7 A 7.0 7.0 0 0 1 61.5 102.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 87.5 74.6 A 19.2 19.2 0 0 1 88.8 78.9 A 22.7 22.7 0 0 0 95.7 80.2 A 17.1 17.1 0 0 0 98.2 73.0 A 51.0 51.0 0 0 1 94.2 69.8 A 7.6 7.6 0 0 1 90.9 70.1 A 5.2 5.2 0 0 1 88.7 71.8 A 6.3 6.3 0 0 1 87.5 74.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 95.8 64.7 A 4.6 4.6 0 0 1 94.3 66.6 A 8.9 8.9 0 0 1 94.2 69.8 A 51.0 51.0 0 0 0 98.2 73.0 A 12.8 12.8 0 0 0 103.3 68.9 A 51.0 51.0 0 0 0 101.1 64.4 A 8.9 8.9 0 0 1 98.0 63.8 A 4.6 4.6 0 0 1 95.8 64.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 107.3 58.9 A 6.3 6.3 0 0 1 104.2 59.4 A 5.2 5.2 0 0 1 102.1 61.2 A 7.6 7.6 0 0 1 101.1 64.4 A 51.0 51.0 0 0 1 103.3 68.9 A 17.1 17.1 0 0 0 110.9 68.1 A 22.7 22.7 0 0 0 111.1 61.1 A 19.2 19.2 0 0 1 107.3 58.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 73.3 86.3 A 6.1 6.1 0 0 1 72.7 89.0 A 26.6 26.6 0 0 1 74.9 92.6 A 16.3 16.3 0 0 0 81.3 91.7 A 17.1 17.1 0 0 0 81.3 85.3 A 22.7 22.7 0 0 1 77.5 83.6 A 5.9 5.9 0 0 1 74.9 84.5 A 4.5 4.5 0 0 1 73.3 86.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 79.4 78.5 A 3.4 3.4 0 0 1 77.9 79.5 A 3.6 3.6 0 0 1 77.1 81.1 A 8.0 8.0 0 0 1 77.5 83.6 A 22.7 22.7 0 0 0 81.3 85.3 A 9.7 9.7 0 0 0 84.1 81.1 A 155.4 155.4 0 0 0 81.7 78.4 A 5.8 5.8 0 0 1 79.4 78.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 87.5 74.6 A 9.5 9.5 0 0 1 84.9 73.9 A 3.9 3.9 0 0 1 83.0 74.7 A 3.4 3.4 0 0 1 81.9 76.1 A 5.6 5.6 0 0 1 81.7 78.4 A 155.4 155.4 0 0 1 84.1 81.1 A 10.4 10.4 0 0 0 88.8 78.9 A 19.2 19.2 0 0 0 87.5 74.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 67.8 93.9 A 5.9 5.9 0 0 1 65.4 94.4 A 3.7 3.7 0 0 1 64.0 95.8 A 4.3 4.3 0 0 1 63.4 97.9 A 11.0 11.0 0 0 1 64.5 100.7 A 19.2 19.2 0 0 0 69.3 101.4 A 11.4 11.4 0 0 0 71.0 96.1 A 86.3 86.3 0 0 1 67.8 93.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 74.9 92.6 A 26.6 26.6 0 0 0 72.7 89.0 A 7.9 7.9 0 0 1 70.1 88.8 A 3.7 3.7 0 0 1 68.5 89.9 A 3.5 3.5 0 0 1 67.6 91.5 A 6.3 6.3 0 0 1 67.8 93.9 A 86.3 86.3 0 0 0 71.0 96.1 A 10.1 10.1 0 0 0 74.9 92.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 121.8 47.6 A 4.5 4.5 0 0 1 119.7 48.8 A 5.9 5.9 0 0 1 118.3 51.2 A 22.7 22.7 0 0 1 119.1 55.2 A 17.1 17.1 0 0 0 125.3 56.7 A 16.3 16.3 0 0 0 127.6 50.6 A 26.6 26.6 0 0 1 124.6 47.7 A 6.1 6.1 0 0 1 121.8 47.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 130.4 44.0 A 6.3 6.3 0 0 1 128.1 43.2 A 3.5 3.5 0 0 1 126.3 43.7 A 3.7 3.7 0 0 1 125.0 45.1 A 7.9 7.9 0 0 1 124.6 47.7 A 26.6 26.6 0 0 0 127.6 50.6 A 10.1 10.1 0 0 0 131.9 47.5 A 86.3 86.3 0 0 0 130.4 44.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 137.4 47.1 A 19.2 19.2 0 0 0 137.8 42.2 A 11.0 11.0 0 0 1 135.3 40.5 A 4.3 4.3 0 0 1 133.1 40.6 A 3.7 3.7 0 0 1 131.5 41.7 A 5.9 5.9 0 0 1 130.4 44.0 A 86.3 86.3 0 0 1 131.9 47.5 A 11.4 11.4 0 0 0 137.4 47.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 114.3 57.0 A 9.7 9.7 0 0 0 119.1 55.2 A 22.7 22.7 0 0 0 118.3 51.2 A 8.0 8.0 0 0 1 115.9 50.2 A 3.6 3.6 0 0 1 114.1 50.6 A 3.4 3.4 0 0 1 112.8 51.8 A 5.8 5.8 0 0 1 112.2 54.0 A 155.4 155.4 0 0 0 114.3 57.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 114.3 57.0 A 155.4 155.4 0 0 1 112.2 54.0 A 5.6 5.6 0 0 1 110.0 53.7 A 3.4 3.4 0 0 1 108.3 54.5 A 3.9 3.9 0 0 1 107.2 56.1 A 9.5 9.5 0 0 1 107.3 58.9 A 19.2 19.2 0 0 0 111.1 61.1 A 10.4 10.4 0 0 0 114.3 57.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 31.0 179.1 A 11.4 11.4 0 0 0 34.1 174.4 A 19.2 19.2 0 0 0 30.6 171.1 A 11.0 11.0 0 0 1 27.7 172.0 A 4.3 4.3 0 0 1 26.4 173.8 A 3.7 3.7 0 0 1 26.2 175.8 A 5.9 5.9 0 0 1 27.3 178.0 A 86.3 86.3 0 0 1 31.0 179.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 26.6 184.8 A 6.1 6.1 0 0 1 24.8 187.0 A 4.5 4.5 0 0 1 24.4 189.4 A 5.9 5.9 0 0 1 25.4 192.0 A 22.7 22.7 0 0 1 29.0 193.8 A 17.1 17.1 0 0 0 34.0 189.9 A 16.3 16.3 0 0 0 30.8 184.3 A 26.6 26.6 0 0 1 26.6 184.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 31.0 179.1 A 86.3 86.3 0 0 0 27.3 178.0 A 6.3 6.3 0 0 1 25.3 179.3 A 3.5 3.5 0 0 1 24.6 181.0 A 3.7 3.7 0 0 1 24.8 182.9 A 7.9 7.9 0 0 1 26.6 184.8 A 26.6 26.6 0 0 0 30.8 184.3 A 10.1 10.1 0 0 0 31.0 179.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 28.7 203.7 A 10.4 10.4 0 0 0 27.5 198.6 A 155.4 155.4 0 0 1 23.9 198.4 A 5.6 5.6 0 0 1 22.2 200.0 A 3.4 3.4 0 0 1 21.8 201.8 A 3.9 3.9 0 0 1 22.3 203.7 A 9.5 9.5 0 0 1 24.5 205.4 A 19.2 19.2 0 0 0 28.7 203.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 23.9 198.4 A 155.4 155.4 0 0 0 27.5 198.6 A 9.7 9.7 0 0 0 29.0 193.8 A 22.7 22.7 0 0 0 25.4 192.0 A 8.0 8.0 0 0 1 23.1 193.2 A 3.6 3.6 0 0 1 22.3 194.8 A 3.4 3.4 0 0 1 22.5 196.6 A 5.8 5.8 0 0 1 23.9 198.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 28.7 203.7 A 19.2 19.2 0 0 1 24.5 205.4 A 6.3 6.3 0 0 1 23.1 208.1 A 5.2 5.2 0 0 1 23.1 210.8 A 7.6 7.6 0 0 1 25.0 213.6 A 51.0 51.0 0 0 1 29.9 214.7 A 17.1 17.1 0 0 0 34.0 208.3 A 22.7 22.7 0 0 0 28.7 203.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 28.7 232.3 A 22.7 22.7 0 0 0 34.0 227.7 A 17.1 17.1 0 0 0 29.9 221.3 A 51.0 51.0 0 0 1 25.0 222.4 A 7.6 7.6 0 0 1 23.1 225.2 A 5.2 5.2 0 0 1 23.1 227.9 A 6.3 6.3 0 0 1 24.5 230.6 A 19.2 19.2 0 0 1 28.7 232.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 22.6 220.3 A 8.9 8.9 0 0 1 25.0 222.4 A 51.0 51.0 0 0 0 29.9 221.3 A 12.8 12.8 0 0 0 29.9 214.7 A 51.0 51.0 0 0 0 25.0 213.6 A 8.9 8.9 0 0 1 22.6 215.7 A 4.6 4.6 0 0 1 21.9 218.0 A 4.6 4.6 0 0 1 22.6 220.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 41.2 293.1 A 28.3 28.3 0 0 1 47.0 293.0 A 26.6 26.6 0 0 0 50.8 285.0 A 22.7 22.7 0 0 0 43.1 279.8 A 47.9 47.9 0 0 1 38.0 283.2 A 9.2 9.2 0 0 1 37.1 287.2 A 6.6 6.6 0 0 1 38.2 290.6 A 8.3 8.3 0 0 1 41.2 293.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 32.7 279.5 A 5.6 5.6 0 0 1 34.3 281.9 A 11.4 11.4 0 0 1 38.0 283.2 A 47.9 47.9 0 0 0 43.1 279.8 A 15.4 15.4 0 0 0 40.1 272.5 A 86.3 86.3 0 0 0 34.2 273.5 A 10.1 10.1 0 0 1 32.4 276.7 A 5.4 5.4 0 0 1 32.7 279.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 30.6 264.9 A 7.0 7.0 0 0 1 30.0 268.2 A 5.9 5.9 0 0 1 31.2 271.2 A 9.0 9.0 0 0 1 34.2 273.5 A 86.3 86.3 0 0 1 40.1 272.5 A 18.7 18.7 0 0 0 41.5 264.0 A 28.3 28.3 0 0 0 34.1 261.6 A 19.2 19.2 0 0 1 30.6 264.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 51.1 316.3 A 9.2 9.2 0 0 1 54.8 318.1 A 47.9 47.9 0 0 1 60.7 316.2 A 22.7 22.7 0 0 0 61.4 306.9 A 26.6 26.6 0 0 0 52.7 304.9 A 28.3 28.3 0 0 1 49.1 309.4 A 8.3 8.3 0 0 1 49.2 313.3 A 6.6 6.6 0 0 1 51.1 316.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 42.9 304.9 A 4.6 4.6 0 0 1 43.7 307.2 A 5.1 5.1 0 0 1 45.5 309.0 A 11.8 11.8 0 0 1 49.1 309.4 A 28.3 28.3 0 0 0 52.7 304.9 A 13.7 13.7 0 0 0 48.2 299.8 L 43.8 301.9 A 7.8 7.8 0 0 1 42.9 304.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 41.2 293.1 A 11.8 11.8 0 0 1 39.3 296.1 A 5.1 5.1 0 0 1 39.5 298.7 A 4.6 4.6 0 0 1 40.9 300.7 A 7.8 7.8 0 0 1 43.8 301.9 L 48.2 299.8 A 13.7 13.7 0 0 0 47.0 293.0 A 28.3 28.3 0 0 0 41.2 293.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 60.1 327.1 A 9.0 9.0 0 0 1 59.9 330.9 A 5.9 5.9 0 0 1 61.5 333.7 A 7.0 7.0 0 0 1 64.5 335.3 A 19.2 19.2 0 0 1 69.3 334.6 A 28.3 28.3 0 0 0 72.0 327.3 A 18.7 18.7 0 0 0 64.5 323.1 A 86.3 86.3 0 0 1 60.1 327.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 60.7 316.2 A 47.9 47.9 0 0 0 54.8 318.1 A 11.4 11.4 0 0 1 53.5 321.8 A 5.6 5.6 0 0 1 54.3 324.5 A 5.4 5.4 0 0 1 56.4 326.5 A 10.1 10.1 0 0 1 60.1 327.1 A 86.3 86.3 0 0 0 64.5 323.1 A 15.4 15.4 0 0 0 60.7 316.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 24.4 246.6 A 4.5 4.5 0 0 1 24.8 249.0 A 6.1 6.1 0 0 1 26.6 251.2 A 26.6 26.6 0 0 1 30.8 251.7 A 16.3 16.3 0 0 0 34.0 246.1 A 17.1 17.1 0 0 0 29.0 242.2 A 22.7 22.7 0 0 1 25.4 244.0 A 5.9 5.9 0 0 1 24.4 246.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 23.9 237.6 A 5.8 5.8 0 0 1 22.5 239.4 A 3.4 3.4 0 0 1 22.3 241.2 A 3.6 3.6 0 0 1 23.1 242.8 A 8.0 8.0 0 0 1 25.4 244.0 A 22.7 22.7 0 0 0 29.0 242.2 A 9.7 9.7 0 0 0 27.5 237.4 A 155.4 155.4 0 0 0 23.9 237.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 28.7 232.3 A 19.2 19.2 0 0 0 24.5 230.6 A 9.5 9.5 0 0 1 22.3 232.3 A 3.9 3.9 0 0 1 21.8 234.2 A 3.4 3.4 0 0 1 22.2 236.0 A 5.6 5.6 0 0 1 23.9 237.6 A 155.4 155.4 0 0 1 27.5 237.4 A 10.4 10.4 0 0 0 28.7 232.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 31.0 256.9 A 10.1 10.1 0 0 0 30.8 251.7 A 26.6 26.6 0 0 0 26.6 251.2 A 7.9 7.9 0 0 1 24.8 253.1 A 3.7 3.7 0 0 1 24.6 255.0 A 3.5 3.5 0 0 1 25.3 256.7 A 6.3 6.3 0 0 1 27.3 258.0 A 86.3 86.3 0 0 0 31.0 256.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 31.0 256.9 A 86.3 86.3 0 0 1 27.3 258.0 A 5.9 5.9 0 0 1 26.2 260.2 A 3.7 3.7 0 0 1 26.4 262.2 A 4.3 4.3 0 0 1 27.7 264.0 A 11.0 11.0 0 0 1 30.6 264.9 A 19.2 19.2 0 0 0 34.1 261.6 A 11.4 11.4 0 0 0 31.0 256.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 102.1 374.8 A 5.2 5.2 0 0 1 104.2 376.6 A 6.3 6.3 0 0 1 107.3 377.1 A 19.2 19.2 0 0 1 111.1 374.9 A 22.7 22.7 0 0 0 110.9 367.9 A 17.1 17.1 0 0 0 103.3 367.1 A 51.0 51.0 0 0 1 101.1 371.6 A 7.6 7.6 0 0 1 102.1 374.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 94.2 366.2 A 8.9 8.9 0 0 1 94.3 369.4 A 4.6 4.6 0 0 1 95.8 371.3 A 4.6 4.6 0 0 1 98.0 372.2 A 8.9 8.9 0 0 1 101.1 371.6 A 51.0 51.0 0 0 0 103.3 367.1 A 12.8 12.8 0 0 0 98.2 363.0 A 51.0 51.0 0 0 0 94.2 366.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 95.7 355.8 A 22.7 22.7 0 0 0 88.8 357.1 A 19.2 19.2 0 0 1 87.5 361.4 A 6.3 6.3 0 0 1 88.7 364.2 A 5.2 5.2 0 0 1 90.9 365.9 A 7.6 7.6 0 0 1 94.2 366.2 A 51.0 51.0 0 0 1 98.2 363.0 A 17.1 17.1 0 0 0 95.7 355.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 114.3 379.0 A 10.4 10.4 0 0 0 111.1 374.9 A 19.2 19.2 0 0 0 107.3 377.1 A 9.5 9.5 0 0 1 107.2 379.9 A 3.9 3.9 0 0 1 108.3 381.5 A 3.4 3.4 0 0 1 110.0 382.3 A 5.6 5.6 0 0 1 112.2 382.0 A 155.4 155.4 0 0 1 114.3 379.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 118.3 384.8 A 5.9 5.9 0 0 1 119.7 387.2 A 4.5 4.5 0 0 1 121.8 388.4 A 6.1 6.1 0 0 1 124.6 388.3 A 26.6 26.6 0 0 1 127.6 385.4 A 16.3 16.3 0 0 0 125.3 379.3 A 17.1 17.1 0 0 0 119.1 380.8 A 22.7 22.7 0 0 1 118.3 384.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 114.3 379.0 A 155.4 155.4 0 0 0 112.2 382.0 A 5.8 5.8 0 0 1 112.8 384.2 A 3.4 3.4 0 0 1 114.1 385.4 A 3.6 3.6 0 0 1 115.9 385.8 A 8.0 8.0 0 0 1 118.3 384.8 A 22.7 22.7 0 0 0 119.1 380.8 A 9.7 9.7 0 0 0 114.3 379.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 137.4 388.9 A 11.4 11.4 0 0 0 131.9 388.5 A 86.3 86.3 0 0 1 130.4 392.0 A 5.9 5.9 0 0 1 131.5 394.3 A 3.7 3.7 0 0 1 133.1 395.4 A 4.3 4.3 0 0 1 135.3 395.5 A 11.0 11.0 0 0 1 137.8 393.8 A 19.2 19.2 0 0 0 137.4 388.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 130.4 392.0 A 86.3 86.3 0 0 0 131.9 388.5 A 10.1 10.1 0 0 0 127.6 385.4 A 26.6 26.6 0 0 0 124.6 388.3 A 7.9 7.9 0 0 1 125.0 390.9 A 3.7 3.7 0 0 1 126.3 392.3 A 3.5 3.5 0 0 1 128.1 392.8 A 6.3 6.3 0 0 1 130.4 392.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 137.4 388.9 A 19.2 19.2 0 0 1 137.8 393.8 A 7.0 7.0 0 0 1 140.1 396.3 A 5.9 5.9 0 0 1 143.1 397.2 A 9.0 9.0 0 0 1 146.8 396.2 A 86.3 86.3 0 0 1 149.7 391.1 A 18.7 18.7 0 0 0 143.9 384.7 A 28.3 28.3 0 0 0 137.4 388.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 170.0 398.5 A 26.6 26.6 0 0 0 166.1 390.5 A 22.7 22.7 0 0 0 157.2 393.3 A 47.9 47.9 0 0 1 156.7 399.4 A 9.2 9.2 0 0 1 159.3 402.6 A 6.6 6.6 0 0 1 162.6 403.8 A 8.3 8.3 0 0 1 166.5 403.0 A 28.3 28.3 0 0 1 170.0 398.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 153.4 401.4 A 11.4 11.4 0 0 1 156.7 399.4 A 47.9 47.9 0 0 0 157.2 393.3 A 15.4 15.4 0 0 0 149.7 391.1 A 86.3 86.3 0 0 0 146.8 396.2 A 10.1 10.1 0 0 1 148.2 399.7 A 5.4 5.4 0 0 1 150.6 401.3 A 5.6 5.6 0 0 1 153.4 401.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 74.9 343.4 A 10.1 10.1 0 0 0 71.0 339.9 A 86.3 86.3 0 0 0 67.8 342.1 A 6.3 6.3 0 0 1 67.6 344.5 A 3.5 3.5 0 0 1 68.5 346.1 A 3.7 3.7 0 0 1 70.1 347.2 A 7.9 7.9 0 0 1 72.7 347.0 A 26.6 26.6 0 0 0 74.9 343.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 67.8 342.1 A 86.3 86.3 0 0 1 71.0 339.9 A 11.4 11.4 0 0 0 69.3 334.6 A 19.2 19.2 0 0 0 64.5 335.3 A 11.0 11.0 0 0 1 63.4 338.1 A 4.3 4.3 0 0 1 64.0 340.2 A 3.7 3.7 0 0 1 65.4 341.6 A 5.9 5.9 0 0 1 67.8 342.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 74.9 343.4 A 26.6 26.6 0 0 1 72.7 347.0 A 6.1 6.1 0 0 1 73.3 349.7 A 4.5 4.5 0 0 1 74.9 351.5 A 5.9 5.9 0 0 1 77.5 352.4 A 22.7 22.7 0 0 1 81.3 350.7 A 17.1 17.1 0 0 0 81.3 344.3 A 16.3 16.3 0 0 0 74.9 343.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 87.5 361.4 A 19.2 19.2 0 0 0 88.8 357.1 A 10.4 10.4 0 0 0 84.1 354.9 A 155.4 155.4 0 0 1 81.7 357.6 A 5.6 5.6 0 0 1 81.9 359.9 A 3.4 3.4 0 0 1 83.0 361.3 A 3.9 3.9 0 0 1 84.9 362.1 A 9.5 9.5 0 0 1 87.5 361.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 79.4 357.5 A 5.8 5.8 0 0 1 81.7 357.6 A 155.4 155.4 0 0 0 84.1 354.9 A 9.7 9.7 0 0 0 81.3 350.7 A 22.7 22.7 0 0 0 77.5 352.4 A 8.0 8.0 0 0 1 77.1 354.9 A 3.6 3.6 0 0 1 77.9 356.5 A 3.4 3.4 0 0 1 79.4 357.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 187.3 409.4 A 6.6 6.6 0 0 1 190.8 409.8 A 9.2 9.2 0 0 1 194.5 408.0 A 47.9 47.9 0 0 1 196.7 402.3 A 22.7 22.7 0 0 0 189.9 395.9 A 26.6 26.6 0 0 0 182.9 401.4 A 28.3 28.3 0 0 1 184.1 407.0 A 8.3 8.3 0 0 1 187.3 409.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 175.0 406.5 A 7.8 7.8 0 0 1 176.8 409.1 A 4.6 4.6 0 0 1 179.1 410.0 A 5.1 5.1 0 0 1 181.6 409.6 A 11.8 11.8 0 0 1 184.1 407.0 A 28.3 28.3 0 0 0 182.9 401.4 A 13.7 13.7 0 0 0 176.1 401.8 L 175.0 406.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 170.0 398.5 A 28.3 28.3 0 0 0 166.5 403.0 A 11.8 11.8 0 0 1 167.7 406.4 A 5.1 5.1 0 0 1 169.8 407.8 A 4.6 4.6 0 0 1 172.2 408.0 A 7.8 7.8 0 0 1 175.0 406.5 L 176.1 401.8 A 13.7 13.7 0 0 0 170.0 398.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 204.5 403.6 A 15.4 15.4 0 0 0 196.7 402.3 A 47.9 47.9 0 0 0 194.5 408.0 A 11.4 11.4 0 0 1 196.6 411.3 A 5.6 5.6 0 0 1 199.2 412.4 A 5.4 5.4 0 0 1 202.1 412.0 A 10.1 10.1 0 0 1 204.8 409.5 A 86.3 86.3 0 0 0 204.5 403.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 204.5 403.6 A 86.3 86.3 0 0 1 204.8 409.5 A 9.0 9.0 0 0 1 207.7 412.0 A 5.9 5.9 0 0 1 210.9 412.5 A 7.0 7.0 0 0 1 214.0 411.2 A 19.2 19.2 0 0 1 216.4 407.0 A 28.3 28.3 0 0 0 212.4 400.3 A 18.7 18.7 0 0 0 204.5 403.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 325.8 379.0 A 6.6 6.6 0 0 1 328.7 377.1 A 8.3 8.3 0 0 1 330.5 373.6 A 28.3 28.3 0 0 1 329.2 368.1 A 26.6 26.6 0 0 0 320.5 366.1 A 22.7 22.7 0 0 0 317.1 374.8 A 47.9 47.9 0 0 1 321.7 379.0 A 9.2 9.2 0 0 1 325.8 379.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 313.0 384.8 A 10.1 10.1 0 0 1 316.5 385.9 A 5.4 5.4 0 0 1 319.2 385.0 A 5.6 5.6 0 0 1 321.2 382.8 A 11.4 11.4 0 0 1 321.7 379.0 A 47.9 47.9 0 0 0 317.1 374.8 A 15.4 15.4 0 0 0 310.7 379.3 A 86.3 86.3 0 0 0 313.0 384.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 302.1 379.9 A 28.3 28.3 0 0 0 301.4 387.6 A 19.2 19.2 0 0 1 305.4 390.3 A 7.0 7.0 0 0 1 308.8 390.1 A 5.9 5.9 0 0 1 311.4 388.3 A 9.0 9.0 0 0 1 313.0 384.8 A 86.3 86.3 0 0 1 310.7 379.3 A 18.7 18.7 0 0 0 302.1 379.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 335.5 365.4 A 13.7 13.7 0 0 0 329.2 368.1 A 28.3 28.3 0 0 0 330.5 373.6 A 11.8 11.8 0 0 1 333.9 374.8 A 5.1 5.1 0 0 1 336.4 374.1 A 4.6 4.6 0 0 1 338.0 372.2 A 7.8 7.8 0 0 1 338.6 369.2 L 335.5 365.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 344.7 362.3 A 8.3 8.3 0 0 1 348.5 361.4 A 6.6 6.6 0 0 1 351.0 358.9 A 9.2 9.2 0 0 1 351.9 354.9 A 47.9 47.9 0 0 1 348.8 349.5 A 22.7 22.7 0 0 0 339.6 350.9 A 26.6 26.6 0 0 0 339.5 359.8 A 28.3 28.3 0 0 1 344.7 362.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 335.5 365.4 L 338.6 369.2 A 7.8 7.8 0 0 1 341.7 369.4 A 4.6 4.6 0 0 1 343.8 368.1 A 5.1 5.1 0 0 1 345.1 365.9 A 11.8 11.8 0 0 1 344.7 362.3 A 28.3 28.3 0 0 0 339.5 359.8 A 13.7 13.7 0 0 0 335.5 365.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 357.1 336.0 A 18.7 18.7 0 0 0 354.7 344.3 A 86.3 86.3 0 0 1 359.5 347.7 A 9.0 9.0 0 0 1 363.3 347.0 A 5.9 5.9 0 0 1 365.6 344.8 A 7.0 7.0 0 0 1 366.6 341.5 A 19.2 19.2 0 0 1 364.7 337.0 A 28.3 28.3 0 0 0 357.1 336.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 359.5 347.7 A 86.3 86.3 0 0 0 354.7 344.3 A 15.4 15.4 0 0 0 348.8 349.5 A 47.9 47.9 0 0 0 351.9 354.9 A 11.4 11.4 0 0 1 355.8 355.3 A 5.6 5.6 0 0 1 358.3 353.8 A 5.4 5.4 0 0 1 359.7 351.4 A 10.1 10.1 0 0 1 359.5 347.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 256.6 402.1 A 17.1 17.1 0 0 0 249.5 399.6 A 22.7 22.7 0 0 0 246.2 405.8 A 19.2 19.2 0 0 1 248.7 409.4 A 6.3 6.3 0 0 1 251.7 410.3 A 5.2 5.2 0 0 1 254.4 409.6 A 7.6 7.6 0 0 1 256.7 407.2 A 51.0 51.0 0 0 1 256.6 402.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 265.2 405.2 A 7.6 7.6 0 0 1 268.3 406.4 A 5.2 5.2 0 0 1 271.1 405.8 A 6.3 6.3 0 0 1 273.4 403.8 A 19.2 19.2 0 0 1 274.1 399.4 A 22.7 22.7 0 0 0 268.4 395.2 A 17.1 17.1 0 0 0 263.1 400.6 A 51.0 51.0 0 0 1 265.2 405.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 256.6 402.1 A 51.0 51.0 0 0 0 256.7 407.2 A 8.9 8.9 0 0 1 259.2 409.1 A 4.6 4.6 0 0 1 261.6 409.1 A 4.6 4.6 0 0 1 263.8 408.0 A 8.9 8.9 0 0 1 265.2 405.2 A 51.0 51.0 0 0 0 263.1 400.6 A 12.8 12.8 0 0 0 256.6 402.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 283.6 396.9 A 9.7 9.7 0 0 0 279.3 399.4 A 155.4 155.4 0 0 0 280.3 402.9 A 5.8 5.8 0 0 1 282.3 403.9 A 3.4 3.4 0 0 1 284.1 403.6 A 3.6 3.6 0 0 1 285.6 402.4 A 8.0 8.0 0 0 1 286.3 400.0 A 22.7 22.7 0 0 0 283.6 396.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 280.3 402.9 A 155.4 155.4 0 0 1 279.3 399.4 A 10.4 10.4 0 0 0 274.1 399.4 A 19.2 19.2 0 0 0 273.4 403.8 A 9.5 9.5 0 0 1 275.4 405.6 A 3.9 3.9 0 0 1 277.4 405.7 A 3.4 3.4 0 0 1 279.1 404.9 A 5.6 5.6 0 0 1 280.3 402.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 283.6 396.9 A 22.7 22.7 0 0 1 286.3 400.0 A 5.9 5.9 0 0 1 289.0 400.4 A 4.5 4.5 0 0 1 291.2 399.5 A 6.1 6.1 0 0 1 292.9 397.2 A 26.6 26.6 0 0 1 292.5 393.0 A 16.3 16.3 0 0 0 286.3 391.1 A 17.1 17.1 0 0 0 283.6 396.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 305.4 390.3 A 19.2 19.2 0 0 0 301.4 387.6 A 11.4 11.4 0 0 0 297.6 391.6 A 86.3 86.3 0 0 1 299.5 395.0 A 5.9 5.9 0 0 1 301.9 395.6 A 3.7 3.7 0 0 1 303.8 394.9 A 4.3 4.3 0 0 1 305.2 393.3 A 11.0 11.0 0 0 1 305.4 390.3 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 298.6 397.2 A 6.3 6.3 0 0 1 299.5 395.0 A 86.3 86.3 0 0 0 297.6 391.6 A 10.1 10.1 0 0 0 292.5 393.0 A 26.6 26.6 0 0 0 292.9 397.2 A 7.9 7.9 0 0 1 295.2 398.5 A 3.7 3.7 0 0 1 297.1 398.3 A 3.5 3.5 0 0 1 298.6 397.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 231.5 403.6 A 16.3 16.3 0 0 0 226.8 408.0 A 26.6 26.6 0 0 1 228.3 412.0 A 6.1 6.1 0 0 1 230.8 413.3 A 4.5 4.5 0 0 1 233.2 413.2 A 5.9 5.9 0 0 1 235.5 411.6 A 22.7 22.7 0 0 1 236.5 407.6 A 17.1 17.1 0 0 0 231.5 403.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 228.3 412.0 A 26.6 26.6 0 0 0 226.8 408.0 A 10.1 10.1 0 0 0 221.6 408.9 A 86.3 86.3 0 0 0 221.4 412.8 A 6.3 6.3 0 0 1 223.1 414.5 A 3.5 3.5 0 0 1 225.0 414.8 A 3.7 3.7 0 0 1 226.8 414.1 A 7.9 7.9 0 0 1 228.3 412.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 219.5 414.4 A 5.9 5.9 0 0 1 221.4 412.8 A 86.3 86.3 0 0 1 221.6 408.9 A 11.4 11.4 0 0 0 216.4 407.0 A 19.2 19.2 0 0 0 214.0 411.2 A 11.0 11.0 0 0 1 215.5 413.8 A 4.3 4.3 0 0 1 217.5 414.6 A 3.7 3.7 0 0 1 219.5 414.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 247.6 411.9 A 9.5 9.5 0 0 1 248.7 409.4 A 19.2 19.2 0 0 0 246.2 405.8 A 10.4 10.4 0 0 0 241.5 408.0 A 155.4 155.4 0 0 1 242.1 411.6 A 5.6 5.6 0 0 1 244.1 412.9 A 3.4 3.4 0 0 1 245.9 412.9 A 3.9 3.9 0 0 1 247.6 411.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 239.0 413.9 A 3.4 3.4 0 0 1 240.7 413.4 A 5.8 5.8 0 0 1 242.1 411.6 A 155.4 155.4 0 0 0 241.5 408.0 A 9.7 9.7 0 0 0 236.5 407.6 A 22.7 22.7 0 0 0 235.5 411.6 A 8.0 8.0 0 0 1 237.2 413.5 A 3.6 3.6 0 0 1 239.0 413.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 388.9 296.6 A 12.8 12.8 0 0 0 386.0 302.6 A 51.0 51.0 0 0 0 390.0 305.7 A 8.9 8.9 0 0 1 393.1 304.9 A 4.6 4.6 0 0 1 394.6 303.1 A 4.6 4.6 0 0 1 395.1 300.7 A 8.9 8.9 0 0 1 393.8 297.8 A 51.0 51.0 0 0 0 388.9 296.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 390.0 305.7 A 51.0 51.0 0 0 1 386.0 302.6 A 17.1 17.1 0 0 0 379.6 306.6 A 22.7 22.7 0 0 0 382.4 313.0 A 19.2 19.2 0 0 1 386.8 313.3 A 6.3 6.3 0 0 1 389.3 311.5 A 5.2 5.2 0 0 1 390.5 309.0 A 7.6 7.6 0 0 1 390.0 305.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 388.9 296.6 A 51.0 51.0 0 0 1 393.8 297.8 A 7.6 7.6 0 0 1 396.7 296.1 A 5.2 5.2 0 0 1 397.9 293.6 A 6.3 6.3 0 0 1 397.8 290.6 A 19.2 19.2 0 0 1 394.8 287.3 A 22.7 22.7 0 0 0 388.0 289.1 A 17.1 17.1 0 0 0 388.9 296.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 395.9 272.5 A 17.1 17.1 0 0 0 398.7 278.2 A 22.7 22.7 0 0 1 402.9 278.1 A 5.9 5.9 0 0 1 404.9 276.2 A 4.5 4.5 0 0 1 405.6 273.9 A 6.1 6.1 0 0 1 404.8 271.2 A 26.6 26.6 0 0 1 401.3 268.9 A 16.3 16.3 0 0 0 395.9 272.5 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 402.9 278.1 A 22.7 22.7 0 0 0 398.7 278.2 A 9.7 9.7 0 0 0 398.0 283.2 A 155.4 155.4 0 0 0 401.4 284.6 A 5.8 5.8 0 0 1 403.4 283.6 A 3.4 3.4 0 0 1 404.3 282.0 A 3.6 3.6 0 0 1 404.3 280.2 A 8.0 8.0 0 0 1 402.9 278.1 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 402.2 286.8 A 5.6 5.6 0 0 1 401.4 284.6 A 155.4 155.4 0 0 1 398.0 283.2 A 10.4 10.4 0 0 0 394.8 287.3 A 19.2 19.2 0 0 0 397.8 290.6 A 9.5 9.5 0 0 1 400.5 290.0 A 3.9 3.9 0 0 1 401.8 288.6 A 3.4 3.4 0 0 1 402.2 286.8 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 409.4 259.2 A 11.0 11.0 0 0 1 407.2 257.1 A 19.2 19.2 0 0 0 402.6 258.5 A 11.4 11.4 0 0 0 403.3 264.0 A 86.3 86.3 0 0 1 407.2 264.6 A 5.9 5.9 0 0 1 409.1 263.1 A 3.7 3.7 0 0 1 409.8 261.3 A 4.3 4.3 0 0 1 409.4 259.2 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 408.3 268.6 A 3.5 3.5 0 0 1 408.4 266.7 A 6.3 6.3 0 0 1 407.2 264.6 A 86.3 86.3 0 0 0 403.3 264.0 A 10.1 10.1 0 0 0 401.3 268.9 A 26.6 26.6 0 0 0 404.8 271.2 A 7.9 7.9 0 0 1 407.3 270.2 A 3.7 3.7 0 0 1 408.3 268.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 387.8 317.7 A 3.9 3.9 0 0 1 388.1 315.7 A 9.5 9.5 0 0 1 386.8 313.3 A 19.2 19.2 0 0 0 382.4 313.0 A 10.4 10.4 0 0 0 381.2 318.1 A 155.4 155.4 0 0 1 384.4 319.9 A 5.6 5.6 0 0 1 386.6 319.1 A 3.4 3.4 0 0 1 387.8 317.7 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 382.8 324.9 A 3.6 3.6 0 0 1 384.2 323.8 A 3.4 3.4 0 0 1 384.9 322.1 A 5.8 5.8 0 0 1 384.4 319.9 A 155.4 155.4 0 0 0 381.2 318.1 A 9.7 9.7 0 0 0 377.8 321.8 A 22.7 22.7 0 0 0 380.3 325.0 A 8.0 8.0 0 0 1 382.8 324.9 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 372.1 329.6 A 26.6 26.6 0 0 1 376.1 330.9 A 6.1 6.1 0 0 1 378.6 329.8 A 4.5 4.5 0 0 1 380.0 327.8 A 5.9 5.9 0 0 1 380.3 325.0 A 22.7 22.7 0 0 1 377.8 321.8 A 17.1 17.1 0 0 0 371.5 323.1 A 16.3 16.3 0 0 0 372.1 329.6 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 376.8 333.4 A 7.9 7.9 0 0 1 376.1 330.9 A 26.6 26.6 0 0 0 372.1 329.6 A 10.1 10.1 0 0 0 369.6 334.2 A 86.3 86.3 0 0 0 372.4 336.8 A 6.3 6.3 0 0 1 374.8 336.5 A 3.5 3.5 0 0 1 376.2 335.2 A 3.7 3.7 0 0 1 376.8 333.4 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
  <path d="M 371.4 341.0 A 3.7 3.7 0 0 1 372.4 339.3 A 5.9 5.9 0 0 1 372.4 336.8 A 86.3 86.3 0 0 1 369.6 334.2 A 11.4 11.4 0 0 0 364.7 337.0 A 19.2 19.2 0 0 0 366.6 341.5 A 11.0 11.0 0 0 1 369.5 342.0 A 4.3 4.3 0 0 1 371.4 341.0 Z" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="0.8"/>
</svg>
</div>

The figure shows $\{7, 3\}$, coloured by rings. Each heptagon has angles $120^\circ$ and area
$5\pi - 7 \cdot \frac{2\pi}{3} = \frac{\pi}{3}$. Its circumradius $R$ satisfies $\cosh R = \cot\frac{\pi}{7}\cot\frac{\pi}{3}
\approx 1.199$ (a formula from hyperbolic trigonometry, 17.7), so in the disc its corners are at Euclidean radius
$\tanh(R/2) \approx 0.30$. The figure was drawn by exactly the process in the proof: start with the central heptagon and
reflect, by inversion in the circles of its sides ([Chapter 13](13-Inversion-and-Complex-Geometry.md)).

**Rings grow exponentially.** Count the tiles in successive rings: they grow roughly by a fixed factor each time. In the
Euclidean plane, the number of tiles within distance $r$ grows like $r^2$; in the hyperbolic plane it grows like $e^r$. The
circumference of a hyperbolic circle of radius $r$ is $2\pi\sinh r$ and its area is $2\pi(\cosh r - 1)$: for $r = 5$, about $466$
and $460$, against $31.4$ and $78.5$ in the Euclidean plane.

**Escher's circle limits.** The Dutch artist M. C. Escher saw a figure of a hyperbolic tiling in a 1957 paper by the
geometer H. S. M. Coxeter, wrote to him, and made four woodcuts, *Circle Limit I* to *IV* (1958 to 1960), filling the
Poincaré disc with fish, and with angels and devils. In *Circle Limit III* the white curves along which the fish swim are
not hyperbolic lines: Coxeter showed in 1979 that they are **equidistant curves**, arcs that meet the boundary at about
$80^\circ$, not at the right angle a line would need. Escher had placed them with a craftsman's precision.

**Where hyperbolic surfaces come from.** A hyperbolic polygon with its sides glued in pairs gives a closed surface. A
regular octagon with angles $45^\circ$ ($\{8, 8\}$ tiling) glued in the pattern of a two-holed doughnut gives a hyperbolic
two-holed torus; every closed surface with two or more holes carries a hyperbolic geometry
([Chapter 20](20-Manifolds-and-Riemannian-Geometry.md)). Natural objects also show hyperbolic-like crinkling: lettuce leaves,
coral and sea slugs grow more surface than a flat sheet allows, and Daina Taimina's crocheted models of the hyperbolic plane
(from 1997) make the geometry something you can hold.

## 17.6 The hyperboloid model and relativity

*Level: expert.* The sphere sits in space as the set of points at "distance $1$" from the origin. Is there a surface in space
that is the hyperbolic plane in the same way? Not with the ordinary distance (Hilbert proved in 1901 that the complete
hyperbolic plane cannot sit in Euclidean space with its distances kept), but yes with a different notion of length.

**Minkowski space.** On $\mathbb{R}^3$ with coordinates $(x_1, x_2, x_3)$, use the **Lorentz form**

$$
\langle \mathbf{x}, \mathbf{y} \rangle = x_1 y_1 + x_2 y_2 - x_3 y_3 .
$$

The **hyperboloid model** is the upper sheet

$$
\mathcal{L} = \{ \mathbf{x} : \langle \mathbf{x}, \mathbf{x} \rangle = -1, \ x_3 > 0 \},
$$

that is $x_3 = \sqrt{1 + x_1^2 + x_2^2}$. Its **distance** is given by

$$
\cosh d(\mathbf{x}, \mathbf{y}) = -\langle \mathbf{x}, \mathbf{y} \rangle,
$$

just as on the unit sphere $\cos d = \mathbf{x} \cdot \mathbf{y}$. Its lines are its intersections with planes through
the origin, just as great circles are on the sphere. Its isometries are the linear maps keeping the Lorentz form and the
upper sheet, the group $\mathrm{O}^+(2, 1)$, just as rotations are for the sphere.

**Example.** The points $(0, 0, 1)$ and $(\sinh d, 0, \cosh d)$ lie on $\mathcal{L}$ (since $\sinh^2 d - \cosh^2 d = -1$),
and $-\langle \cdot, \cdot \rangle = \cosh d$: they are at distance $d$. The curve $u \mapsto (\sinh u, 0, \cosh u)$ is a line
traced at unit speed.

**Back to the discs.** Project $\mathcal{L}$ from the point $(0, 0, -1)$ onto the plane $x_3 = 0$: the point
$\mathbf{x}$ goes to $\frac{x_1 + ix_2}{1 + x_3}$, inside the unit disc. This is the **Poincaré disc**, and it is the exact
analogue of stereographic projection ([Chapter 13](13-Inversion-and-Complex-Geometry.md)). Check with the example: the point
at distance $d$ goes to $\frac{\sinh d}{1 + \cosh d} = \tanh\frac d2$, which is what 17.2 says. Project instead from the origin
onto the plane $x_3 = 1$: $\mathbf{x}$ goes to $\frac{x_1 + ix_2}{x_3}$, and lines (planes through the origin) become straight
chords. This is the **Klein disc** of [Chapter 15](15-Axioms-and-the-Parallel-Postulate.md), with the point at distance $d$
going to $\tanh d$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 415.0 385.2" role="img" aria-label="A slice through the hyperboloid model. The upper branch of the hyperbola is the hyperbolic line; the dashed lines are the light cone. Projecting the point Q from the point minus 1 below the origin onto the level 0 gives the Poincare disc point tanh of d over 2; projecting from the origin onto level 1 gives the Klein disc point tanh d">
  <line x1="12.0" y1="267.0" x2="403.0" y2="267.0" stroke="currentColor" stroke-width="0.8"/>
  <line x1="207.5" y1="369.0" x2="207.5" y2="12.0" stroke="currentColor" stroke-width="0.8"/>
  <line x1="20.5" y1="80.0" x2="207.5" y2="267.0" stroke="currentColor" stroke-width="0.9" stroke-dasharray="4 3"/>
  <line x1="207.5" y1="267.0" x2="394.5" y2="80.0" stroke="currentColor" stroke-width="0.9" stroke-dasharray="4 3"/>
  <polyline points="14.5,56.1 20.4,61.5 26.2,66.7 31.8,71.8 37.2,76.7 42.6,81.5 47.8,86.0 52.8,90.5 57.8,94.8 62.6,99.0 67.3,103.0 71.9,106.9 76.4,110.7 80.7,114.4 85.0,117.9 89.2,121.3 93.3,124.6 97.2,127.8 101.1,130.9 105.0,133.8 108.7,136.7 112.4,139.4 115.9,142.1 119.4,144.6 122.9,147.0 126.2,149.4 129.5,151.7 132.8,153.8 135.9,155.9 139.1,157.9 142.1,159.8 145.1,161.6 148.1,163.3 151.0,164.9 153.9,166.5 156.7,168.0 159.5,169.4 162.2,170.7 165.0,171.9 167.6,173.1 170.3,174.2 172.9,175.2 175.5,176.2 178.0,177.0 180.6,177.8 183.1,178.6 185.6,179.2 188.1,179.8 190.5,180.3 193.0,180.8 195.4,181.1 197.8,181.5 200.3,181.7 202.7,181.9 205.1,182.0 207.5,182.0 209.9,182.0 212.3,181.9 214.7,181.7 217.2,181.5 219.6,181.1 222.0,180.8 224.5,180.3 226.9,179.8 229.4,179.2 231.9,178.6 234.4,177.8 237.0,177.0 239.5,176.2 242.1,175.2 244.7,174.2 247.4,173.1 250.0,171.9 252.8,170.7 255.5,169.4 258.3,168.0 261.1,166.5 264.0,164.9 266.9,163.3 269.9,161.6 272.9,159.8 275.9,157.9 279.1,155.9 282.2,153.8 285.5,151.7 288.8,149.4 292.1,147.0 295.6,144.6 299.1,142.1 302.6,139.4 306.3,136.7 310.0,133.8 313.9,130.9 317.8,127.8 321.7,124.6 325.8,121.3 330.0,117.9 334.3,114.4 338.6,110.7 343.1,106.9 347.7,103.0 352.4,99.0 357.2,94.8 362.2,90.5 367.2,86.0 372.4,81.5 377.8,76.7 383.2,71.8 388.8,66.7 394.6,61.5 400.5,56.1" fill="none" stroke="currentColor" stroke-width="2.0" stroke-linejoin="round"/>
  <line x1="207.5" y1="352.0" x2="343.7" y2="106.5" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2 2"/>
  <line x1="207.5" y1="267.0" x2="343.7" y2="106.5" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2 2"/>
  <line x1="122.5" y1="267.0" x2="292.5" y2="267.0" stroke="#eea66f" stroke-width="3.2"/>
  <line x1="122.5" y1="182.0" x2="292.5" y2="182.0" stroke="#7ccf9a" stroke-width="3.2"/>
  <circle cx="343.7" cy="106.5" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="355.7" y="110.5" font-size="12" text-anchor="middle" fill="currentColor">Q</text>
  <circle cx="207.5" cy="352.0" r="3" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="237.5" y="356.0" font-size="11" text-anchor="middle" fill="currentColor">(0, −1)</text>
  <circle cx="254.6" cy="267.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="279.6" cy="182.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="207.5" cy="182.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="183.5" y="176.0" font-size="11" text-anchor="middle" fill="currentColor">(0, 1)</text>
  <text x="116.5" y="283.0" font-size="11" text-anchor="end" fill="currentColor">Poincaré</text>
  <text x="116.5" y="186.0" font-size="11" text-anchor="end" fill="currentColor">Klein</text>
</svg>
</div>

**Relativity.** In special relativity (units with the speed of light $c = 1$), the spacetime of one time and two space
dimensions is Minkowski space with $x_3$ as time. An observer moving with velocity $\mathbf{v}$ (with $|\mathbf{v}| < 1$)
has **four-velocity** $\gamma(\mathbf{v}, 1)$, where $\gamma = 1/\sqrt{1 - |\mathbf{v}|^2}$. It satisfies
$\langle \gamma(\mathbf{v}, 1), \gamma(\mathbf{v}, 1)\rangle = \gamma^2(|\mathbf{v}|^2 - 1) = -1$: **the possible velocities form
exactly the hyperboloid** $\mathcal{L}$. Lorentz transformations, the changes of observer, are its isometries.

The hyperbolic distance between two four-velocities has a physical meaning: $\cosh d = -\langle u_1, u_2\rangle$ is the
Lorentz factor $\gamma$ of their relative velocity, and $d$ itself is the **rapidity**, with relative speed $\tanh d$. For
motion along one line, rapidities add, because distances along a line add. So if a rocket moves at $0.6$ (60% of light
speed) relative to a station, and fires a probe forward at $0.6$ relative to itself, the probe's speed relative to the station
is not $1.2$ but

$$
\tanh\left(2\operatorname{artanh} 0.6\right) = \frac{0.6 + 0.6}{1 + 0.6 \times 0.6} = \frac{1.2}{1.36} \approx 0.882 .
$$

This is the relativistic velocity addition formula, $\frac{u + v}{1 + uv}$, which is the addition formula for $\tanh$. For
velocities in different directions, velocity "addition" follows hyperbolic triangles, and its peculiar features (it is not
commutative, and successive boosts in different directions produce a rotation, the Thomas precession) are features of
hyperbolic geometry. The link was noticed early in the history of relativity, by Arnold Sommerfeld and Vladimir Varićak
around 1909 to 1910.

## 17.7 Hyperbolic trigonometry

*Level: expert.* Now solve triangles. Take a triangle with sides $a, b, c$ opposite angles $A, B, C$, in the plane of
curvature $-1$.

**Theorem 17.6 (hyperbolic law of cosines).**

$$
\cosh c = \cosh a \cosh b - \sinh a \sinh b \cos C .
$$

*Proof.* Copy the spherical proof of [Chapter 16](16-Spherical-Geometry.md) on the hyperboloid. Put $C$ at $(0, 0, 1)$. The
point $A$ is at distance $b$; turn about the $x_3$-axis (an isometry) so that $A = (\sinh b, 0, \cosh b)$. The point $B$ is at
distance $a$ from $C$, in the direction making angle $C$ with the direction to $A$: $B = (\sinh a\cos C, \sinh a\sin C, \cosh a)$.
(At $(0, 0, 1)$ the hyperboloid is horizontal and the model's angles there are Euclidean, which is why $C$ appears as an ordinary
angle in the $x_1x_2$-plane.) Then

$$
\cosh c = -\langle A, B\rangle = -\sinh b\sinh a\cos C + \cosh b\cosh a . \ \square
$$

The formula is the spherical one with $\cos \to \cosh$, $\sin \to \sinh$ and a sign change, an instance of a general rule:
the hyperbolic plane is a "sphere of imaginary radius", as Lambert guessed, since $\cos(ix) = \cosh x$ and
$\sin(ix) = i\sinh x$.

**Hyperbolic Pythagoras.** If $C = 90^\circ$:

$$
\cosh c = \cosh a \cosh b .
$$

**Example.** Legs $a = b = 1$: $\cosh c = \cosh^2 1 \approx 2.3811$, so $c \approx 1.5134$, longer than the Euclidean
$\sqrt2 \approx 1.4142$. (On the sphere the hypotenuse came out shorter.) For small triangles, $\cosh x \approx 1 + x^2/2$,
and the formula becomes $1 + c^2/2 \approx 1 + a^2/2 + b^2/2$: ordinary Pythagoras again.

**Right triangles, more.** In a right triangle with right angle at $C$, one also has

$$
\cos A = \frac{\tanh b}{\tanh c}, \qquad \sin A = \frac{\sinh a}{\sinh c} .
$$

(These follow from the law of cosines, the law of sines below, and Pythagoras.) In the example, $\cos A = \tanh 1/\tanh 1.5134
\approx 0.8391$, so $A = B \approx 32.95^\circ$. The angle sum is $90 + 2 \times 32.95 = 155.89^\circ$, and the area is the defect,
$24.11^\circ \approx 0.421$. Let $c \to \infty$ with $b$ fixed: $\tanh c \to 1$ and $\cos A \to \tanh b$, which is Lobachevsky's
angle of parallelism once more.

**Theorem 17.7 (hyperbolic law of sines).**

$$
\frac{\sin A}{\sinh a} = \frac{\sin B}{\sinh b} = \frac{\sin C}{\sinh c} .
$$

*Proof.* As in [Chapter 16](16-Spherical-Geometry.md): solve the law of cosines for $\cos C$, compute $\sin^2 C = 1 - \cos^2 C$,
and check that $\sin^2 C/\sinh^2 c$ equals an expression symmetric in $a, b, c$, namely
$\frac{2\cosh a\cosh b\cosh c + 1 - \cosh^2 a - \cosh^2 b - \cosh^2 c}{\sinh^2 a\sinh^2 b\sinh^2 c}$. $\square$

**The law of cosines for angles.**

$$
\cos C = -\cos A\cos B + \sin A \sin B\cosh c .
$$

Given the three angles, this determines each side, which proves AAA congruence (17.3). In particular, the circumradius of
the regular heptagon in 17.5 comes from the right triangle formed by the centre, a vertex and a midpoint of a side: its
angles are $\pi/7$ at the centre and $\pi/3$ at the vertex, and the formula
$\cosh(\text{hypotenuse}) = \cot A \cot B$ for right triangles (from this law with $C = \pi/2$) gives $\cosh R = \cot\frac\pi7\cot\frac\pi3$.

**Why anyone cares now.** Beyond its role in the history of mathematics, hyperbolic geometry is everywhere in modern
mathematics: in complex analysis (every Riemann surface with enough topology is a quotient of $\mathbb{H}$), in number theory
(modular forms live on $\mathbb{H}$, and the group $\mathrm{SL}(2, \mathbb{Z})$ acts on it), in three-dimensional topology
(Thurston's geometrization, [Chapter 21](21-Where-Geometry-Goes.md)), and in computer science, where trees, which grow
exponentially like hyperbolic circles, embed in the hyperbolic plane with little distortion; machine-learning researchers now
use such "hyperbolic embeddings" for hierarchical data.

## Check yourself

??? question "1. Find the hyperbolic distance from $i$ to $4i$ in the upper half-plane, and check with the distance formula."

    Along the vertical line, $d = \ln 4 \approx 1.386$. Formula: $\cosh d = 1 + \frac{9}{2 \cdot 1 \cdot 4} = \frac{17}{8}$, and
    $\cosh(\ln 4) = \frac{4 + 1/4}{2} = \frac{17}{8}$. They agree.

??? question "2. Find the hyperbolic distance from $2 + i$ to $-2 + i$. Is the horizontal segment between them the shortest path?"

    $\cosh d = 1 + \frac{16}{2} = 9$, so $d = \operatorname{arcosh} 9 \approx 2.887$. The horizontal segment has hyperbolic
    length $\int_{-2}^{2} dx/1 = 4$, longer. The shortest path is the semicircle centred at $0$ through both points, of radius
    $\sqrt5$, which rises to height $\sqrt5$, where lengths are cheaper.

??? question "3. Show that $f(z) = -1/z$ maps $\mathbb{H}$ to itself and is an isometry. Where does it send $i$ and $2i$?"

    It is $\frac{0z - 1}{1z + 0}$, with real coefficients and $ad - bc = 0 - (-1)(1) = 1$, so Theorem 17.1 applies. It sends
    $i \mapsto -1/i = i$ and $2i \mapsto -1/(2i) = i/2$. Check: $d(i, 2i) = \ln 2$ and $d(i, i/2) = \ln 2$.

??? question "4. A hyperbolic triangle has angles $30^\circ$, $45^\circ$ and $60^\circ$. What is its area? Can a hyperbolic triangle have angles $60^\circ$, $60^\circ$, $60^\circ$?"

    Area $= \pi - \frac{3\pi}{4} = \frac{\pi}{4} \approx 0.785$. No: angles $60^\circ, 60^\circ, 60^\circ$ add up to $180^\circ$,
    which would give area $0$. Every hyperbolic triangle has angle sum strictly less than $180^\circ$.

??? question "5. What is the area of a regular hyperbolic pentagon with all angles $90^\circ$? Which tiling does it make?"

    Area $= (5 - 2)\pi - 5 \cdot \frac{\pi}{2} = \frac{\pi}{2}$. Four right angles fill a full turn, so four meet at each corner:
    the tiling $\{5, 4\}$. Check: $\frac15 + \frac14 = \frac{9}{20} < \frac12$.

??? question "6. Find the angle of parallelism $\Pi(d)$ for $d = 0.5$ and $d = 2$, and the distance $d$ at which $\Pi(d) = 60^\circ$."

    $\cos\Pi = \tanh d$. For $d = 0.5$: $\tanh 0.5 \approx 0.4621$, $\Pi \approx 62.5^\circ$. For $d = 2$: $\tanh 2 \approx 0.9640$,
    $\Pi \approx 15.4^\circ$. For $\Pi = 60^\circ$: $\tanh d = \frac12$, $d = \operatorname{artanh}\frac12 = \frac12\ln 3 \approx 0.549$
    (check: $\tan 30^\circ = 1/\sqrt3 = e^{-d}$ gives $d = \ln\sqrt3$, the same).

??? question "7. A hyperbolic right triangle has legs $2$ and $3$. Find its hypotenuse, and compare with the Euclidean value."

    $\cosh c = \cosh 2 \cosh 3 \approx 3.7622 \times 10.0677 \approx 37.877$, so $c \approx \operatorname{arcosh} 37.877 \approx 4.327$.
    Euclidean: $\sqrt{13} \approx 3.606$. For large triangles, $c \approx a + b - \ln 2$ (here $5 - 0.693 = 4.307$): the
    hypotenuse is nearly as long as the two legs together, because the legs spread apart exponentially fast.

??? question "8. Which of the tilings $\{3, 3\}$, $\{4, 4\}$, $\{3, 7\}$, $\{5, 3\}$, $\{6, 4\}$, $\{4, 6\}$ are spherical, Euclidean or hyperbolic?"

    Compare $\frac1p + \frac1q$ with $\frac12$. $\{3, 3\}$: $\frac23 > \frac12$, spherical (the tetrahedron). $\{4, 4\}$: equal,
    Euclidean (squares). $\{3, 7\}$: $\frac{10}{21} < \frac12$, hyperbolic. $\{5, 3\}$: $\frac{8}{15} > \frac12$, spherical (the
    dodecahedron). $\{6, 4\}$ and $\{4, 6\}$: $\frac{5}{12} < \frac12$, hyperbolic.

??? question "9. In the Poincaré disc, how far from the centre is the point at Euclidean distance $0.5$? At $0.999$? Which Euclidean radius is at hyperbolic distance $10$?"

    $d = \ln\frac{1 + r}{1 - r}$. For $0.5$: $\ln 3 \approx 1.099$. For $0.999$: $\ln 1999 \approx 7.60$. For $d = 10$:
    $r = \tanh 5 \approx 0.99991$. In a drawing of the disc 10 cm across, every point more than 10 units from the
    centre lies within 0.005 mm of the edge.

??? question "10. A spaceship moves at $0.9$ of light speed relative to Mars and launches a probe forward at $0.9$ relative to itself. How fast is the probe relative to Mars? What are the rapidities?"

    $\frac{0.9 + 0.9}{1 + 0.81} = \frac{1.8}{1.81} \approx 0.99448$. The rapidity of $0.9$ is $\operatorname{artanh} 0.9 \approx 1.472$;
    the rapidities add to $2.944$, and $\tanh 2.944 \approx 0.99448$. (Real spacecraft are far slower: at Mars-transfer
    speeds of tens of km/s, $v$ is about $10^{-4}$, and the correction is negligible.)

??? question "11. Show that a hyperbolic circle of radius $\rho$ has circumference $2\pi\sinh\rho$, using the disc model."

    Put the centre at $0$. The circle is the Euclidean circle of radius $r = \tanh(\rho/2)$. Its hyperbolic length is
    $\frac{2}{1 - r^2} \cdot 2\pi r = 2\pi \cdot \frac{2\tanh(\rho/2)}{1 - \tanh^2(\rho/2)} = 2\pi\sinh\rho$, by the double angle
    formula $\sinh\rho = \frac{2\tanh(\rho/2)}{1 - \tanh^2(\rho/2)}$.

??? question "12. Prove that every ideal triangle (all three vertices on the boundary) can be moved by an isometry to the one with vertices $-1$, $1$, $\infty$ in $\mathbb{H}$. Conclude that all ideal triangles are congruent."

    A real Möbius map sends any three distinct points of $\mathbb{R} \cup \{\infty\}$ to any other three, by Theorem 13.9 of
    [Chapter 13](13-Inversion-and-Complex-Geometry.md) with real numbers throughout (the map then has real coefficients). If its
    determinant is negative, follow it by $z \mapsto -\bar z$ to correct the orientation, which still fixes the set
    $\{-1, 1, \infty\}$. An isometry carries lines to lines, so the triangle goes onto the standard ideal triangle. Hence all
    ideal triangles are congruent, and all have area $\pi$.

## What you learned

- The upper half-plane ($ds = |dz|/y$) and the Poincaré disc ($ds = 2|dz|/(1 - |z|^2)$) show hyperbolic geometry with true
  angles; lines are vertical lines and semicircles, or diameters and arcs orthogonal to the boundary.
- Real Möbius maps of determinant $1$ are isometries, and $\cosh d = 1 + |z - w|^2/(2\,\mathrm{Im}\, z\,\mathrm{Im}\, w)$.
- A triangle has area $\pi - (\alpha + \beta + \gamma)$, so angle sums are less than $\pi$ and ideal triangles have area $\pi$.
- Through a point off a line pass two limiting parallels and infinitely many ultraparallels; $\cos\Pi(d) = \tanh d$.
- $\{p, q\}$ tiles the hyperbolic plane exactly when $\frac1p + \frac1q < \frac12$; circles and tilings grow exponentially.
- The hyperboloid $\langle\mathbf{x}, \mathbf{x}\rangle = -1$ in Minkowski space is the hyperbolic plane; it is the space of
  velocities of special relativity, and rapidities add like distances.
- Hyperbolic trigonometry is spherical trigonometry with $\cosh$ and $\sinh$: $\cosh c = \cosh a\cosh b - \sinh a\sinh b\cos C$.

**Next:** [Chapter 18](18-Projective-Geometry.md) leaves distance and angle behind altogether, and asks what is left of geometry when only lines and their meetings count.

## Further reading

- J. W. Anderson, *Hyperbolic Geometry* (2nd ed., 2005), a careful first course built on the upper half-plane.
- J. Stillwell, *Geometry of Surfaces* (1992), chapters on the hyperbolic plane and its tilings.
- J. W. Cannon, W. J. Floyd, R. Kenyon and W. R. Parry, "Hyperbolic Geometry", in *Flavors of Geometry*, MSRI Publications 31 (1997).
- A. F. Beardon, *The Geometry of Discrete Groups* (1983).
- J. G. Ratcliffe, *Foundations of Hyperbolic Manifolds* (1994; 3rd ed. 2019), including the hyperboloid model and hyperbolic trigonometry in full.
- W. P. Thurston, *Three-Dimensional Geometry and Topology*, Volume 1 (1997).
- H. S. M. Coxeter, "The non-Euclidean symmetry of Escher's picture 'Circle Limit III'", *Leonardo* 12 (1979).
- D. Taimina, *Crocheting Adventures with Hyperbolic Planes* (2009).
- M. Nickel and D. Kiela, "Poincaré Embeddings for Learning Hierarchical Representations", NeurIPS 2017.
- On this site: the Algebra book's [Groups](../algebra/13-Groups.md) (for $\mathrm{PSL}(2, \mathbb{R})$); the
  [Geometry book index](index.md).
