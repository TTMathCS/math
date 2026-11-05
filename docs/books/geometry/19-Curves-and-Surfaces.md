# 19. Curves and surfaces

*How curved is a road at a given bend? How curved is a hill, or a saddle, or a pizza slice? Euclid's geometry measured
straight things and circles; to measure bending in general you need calculus. This chapter starts differential geometry:
you will measure the length of any curve, define its curvature (how fast it turns) and torsion (how fast it twists out
of a plane), and then do the same for surfaces. There the story takes a famous turn. Gauss found in 1827 that one
measure of a surface's curvature can be computed by an ant living on the surface, without ever leaving it. That fact
explains why maps of the Earth must distort, why you fold a pizza slice to stop it drooping, and it leads to the
Gauss–Bonnet theorem, which ties curvature to the shape of a whole surface.*

!!! abstract "In this chapter"
    **You will learn:**

    - parametrised curves, regular curves, arc length, and the arc-length parametrisation
    - curvature and torsion, the Frenet frame and the Frenet–Serret equations, and why they determine a curve
    - parametrised surfaces, tangent planes and the first fundamental form (lengths, angles and areas on a surface)
    - the second fundamental form, principal curvatures, and Gaussian and mean curvature
    - Gauss's Theorema Egregium: what it says, why it is surprising, and what it does to pizza and maps
    - geodesics: the straightest, locally shortest curves on a surface
    - the Gauss–Bonnet theorem, from geodesic triangles to the Euler characteristic

    **You need:** [Chapter 9](09-Vectors.md) (dot and cross products), [Chapter 11](11-Solid-Geometry.md) (Euler's formula),
    [Chapter 16](16-Spherical-Geometry.md) (Girard's theorem) and [Chapter 17](17-Hyperbolic-Geometry.md). From calculus:
    derivatives, integrals, partial derivatives and double integrals. The U of T guides on
    [the definition of the integral](../../uoft/MAT137/unit07.md) and
    [the derivative as a linear map](../../uoft/MAT257Y1/unit04.md) cover the background.

    **Levels:** 19.1 is intermediate; 19.2 to 19.4 are advanced (first university course in differential geometry);
    19.5 to 19.7 are advanced to expert, with proofs sketched where they are long.

## 19.1 Parametrised curves and arc length

*Level: intermediate.* How long is a curve? For a straight segment you measure; for a circle, Archimedes trapped the answer
between polygons ([Chapter 6](06-Circles.md)). The same idea works for any reasonable curve: mark points along it, join
them by straight pieces, add up, and let the pieces get shorter.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="A smooth curve from P to Q with an inscribed broken line of six straight pieces. The length of the curve is the limit of the lengths of such broken lines as the pieces get shorter">
  <polyline points="30,150 31.8,148.2 33.6,146.4 35.4,144.5 37.2,142.7 39,140.9 40.8,139.1 42.6,137.3 44.4,135.5 46.2,133.7 48,131.9 49.8,130.1 51.6,128.3 53.4,126.5 55.2,124.8 57,123 58.8,121.3 60.6,119.5 62.4,117.8 64.2,116.1 66,114.4 67.8,112.7 69.6,111 71.4,109.3 73.2,107.7 75,106 76.8,104.4 78.6,102.8 80.4,101.2 82.2,99.6 84,98 85.8,96.5 87.6,94.9 89.4,93.4 91.2,91.9 93,90.5 94.8,89 96.6,87.6 98.4,86.2 100.2,84.8 102,83.4 103.8,82 105.6,80.7 107.4,79.4 109.2,78.1 111,76.9 112.8,75.6 114.6,74.4 116.4,73.2 118.2,72.1 120,70.9 121.8,69.8 123.6,68.7 125.4,67.7 127.2,66.7 129,65.7 130.8,64.7 132.6,63.7 134.4,62.8 136.2,61.9 138,61.1 139.8,60.2 141.6,59.4 143.4,58.7 145.2,57.9 147,57.2 148.8,56.5 150.6,55.9 152.4,55.2 154.2,54.6 156,54.1 157.8,53.5 159.6,53 161.4,52.6 163.2,52.1 165,51.7 166.8,51.4 168.6,51 170.4,50.7 172.2,50.4 174,50.2 175.8,50 177.6,49.8 179.4,49.6 181.2,49.5 183,49.4 184.8,49.4 186.6,49.3 188.4,49.3 190.2,49.4 192,49.5 193.8,49.6 195.6,49.7 197.4,49.9 199.2,50.1 201,50.3 202.8,50.6 204.6,50.8 206.4,51.2 208.2,51.5 210,51.9 211.8,52.3 213.6,52.8 215.4,53.2 217.2,53.7 219,54.3 220.8,54.8 222.6,55.4 224.4,56.1 226.2,56.7 228,57.4 229.8,58.1 231.6,58.8 233.4,59.6 235.2,60.4 237,61.2 238.8,62 240.6,62.9 242.4,63.8 244.2,64.7 246,65.7 247.8,66.6 249.6,67.6 251.4,68.6 253.2,69.7 255,70.7 256.8,71.8 258.6,72.9 260.4,74.1 262.2,75.2 264,76.4 265.8,77.6 267.6,78.8 269.4,80 271.2,81.3 273,82.5 274.8,83.8 276.6,85.1 278.4,86.5 280.2,87.8 282,89.1 283.8,90.5 285.6,91.9 287.4,93.3 289.2,94.7 291,96.1 292.8,97.6 294.6,99 296.4,100.5 298.2,102 300,103.4 301.8,104.9 303.6,106.4 305.4,107.9 307.2,109.5 309,111 310.8,112.5 312.6,114.1 314.4,115.6 316.2,117.2 318,118.7 319.8,120.3 321.6,121.8 323.4,123.4 325.2,125 327,126.5 328.8,128.1 330.6,129.7 332.4,131.3 334.2,132.8 336,134.4 337.8,136 339.6,137.5 341.4,139.1 343.2,140.7 345,142.2 346.8,143.8 348.6,145.3 350.4,146.8 352.2,148.4 354,149.9 355.8,151.4 357.6,152.9 359.4,154.4 361.2,155.9 363,157.4 364.8,158.8 366.6,160.3 368.4,161.7 370.2,163.2 372,164.6 373.8,166 375.6,167.4 377.4,168.7 379.2,170.1 381,171.4 382.8,172.8 384.6,174.1 386.4,175.4 388.2,176.6 390,177.9" fill="none" stroke="#9cc9ea" stroke-width="3" stroke-linejoin="round"/>
  <polyline points="30,150 90,92.9 150,56.1 210,51.9 270,80.4 330,129.2 390,177.9" fill="none" stroke="#eea66f" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="30" cy="150" r="3.5" fill="currentColor"/>
  <circle cx="90" cy="92.9" r="3.5" fill="currentColor"/>
  <circle cx="150" cy="56.1" r="3.5" fill="currentColor"/>
  <circle cx="210" cy="51.9" r="3.5" fill="currentColor"/>
  <circle cx="270" cy="80.4" r="3.5" fill="currentColor"/>
  <circle cx="330" cy="129.2" r="3.5" fill="currentColor"/>
  <circle cx="390" cy="177.9" r="3.5" fill="currentColor"/>
  <text x="30" y="170" text-anchor="middle" font-size="13" fill="currentColor">P</text>
  <text x="376" y="181.9" text-anchor="middle" font-size="13" fill="currentColor">Q</text>
</svg>
</div>

To make that precise we describe a curve by a moving point. A **parametrised curve** is a function

$$
\gamma : I \to \mathbb{R}^n, \qquad t \mapsto \gamma(t) = (x_1(t), \dots, x_n(t)),
$$

from an interval $I$ of real numbers, with each coordinate a smooth (infinitely differentiable) function. Think of $t$ as
time and $\gamma(t)$ as the position of a particle. Its **velocity** is $\gamma'(t) = (x_1'(t), \dots, x_n'(t))$, a vector
tangent to the curve, and its **speed** is the length $|\gamma'(t)|$. The curve is **regular** if $\gamma'(t) \neq 0$ for
every $t$: the particle never stops, so the curve has a well defined direction at every point. (A curve that stops can
turn a sharp corner: $\gamma(t) = (t^3, |t|^3)$ is smooth enough but traces the corner of $y = |x|$.)

The same picture can be traced by many parametrisations: $\gamma(t) = (\cos t, \sin t)$ and $\delta(t) = (\cos 2t, \sin 2t)$
both run around the unit circle, the second one twice as fast. Geometry should not depend on the speed, so we look for
quantities that do not change under **reparametrisation** $t = \phi(s)$, with $\phi$ smooth and $\phi' > 0$.

**Definition.** The **arc length** of $\gamma$ from $t = a$ to $t = b$ is

$$
L = \int_a^b |\gamma'(t)| \, dt .
$$

*Why this is the polygon limit.* A small piece of the polygon from $\gamma(t_i)$ to $\gamma(t_{i+1})$ has length
$|\gamma(t_{i+1}) - \gamma(t_i)| \approx |\gamma'(t_i)| \, \Delta t$ by the definition of the derivative, and summing gives a
Riemann sum for the integral. (Making "$\approx$" precise uses the uniform continuity of $\gamma'$ on $[a, b]$.) And it does
not depend on the parametrisation: if $t = \phi(s)$ then $|(\gamma \circ \phi)'(s)| = |\gamma'(\phi(s))| \, \phi'(s)$, and the
substitution rule turns one integral into the other. Speed times time is distance, whatever the speed.

**Worked example 1: the circle.** $\gamma(t) = (r\cos t, r\sin t)$ has $\gamma'(t) = (-r\sin t, r\cos t)$ and speed $r$. One
turn: $L = \int_0^{2\pi} r \, dt = 2\pi r$. *Check:* the familiar circumference.

**Worked example 2: the helix.** $\gamma(t) = (a\cos t, a\sin t, bt)$ winds around a cylinder of radius $a$, rising $2\pi b$
per turn. Its speed is $\sqrt{a^2 \sin^2 t + a^2 \cos^2 t + b^2} = \sqrt{a^2 + b^2}$, constant, so one turn has length
$2\pi\sqrt{a^2 + b^2}$. *Check:* cut the cylinder along a vertical line and unroll it: one turn becomes the diagonal of a
rectangle $2\pi a$ wide and $2\pi b$ high, of length $\sqrt{(2\pi a)^2 + (2\pi b)^2}$.

**Worked example 3: the cycloid.** A wheel of radius $r$ rolls along the $x$-axis; a point on its rim traces
$\gamma(t) = (r(t - \sin t), r(1 - \cos t))$. Then $\gamma'(t) = (r(1 - \cos t), r\sin t)$ and

$$
|\gamma'(t)|^2 = r^2\bigl((1 - \cos t)^2 + \sin^2 t\bigr) = 2r^2(1 - \cos t) = 4r^2 \sin^2 \tfrac{t}{2} .
$$

One arch ($0 \le t \le 2\pi$) has length $\int_0^{2\pi} 2r \sin\tfrac{t}{2}\, dt = \bigl[-4r\cos\tfrac{t}{2}\bigr]_0^{2\pi} = 8r$.
Christopher Wren found this result in 1658: the arch is exactly four times the wheel's diameter, with no $\pi$ in sight.

**The arc-length parametrisation.** Fix a starting time $a$ and let $s(t) = \int_a^t |\gamma'(u)|\, du$, the distance
travelled. For a regular curve $s'(t) = |\gamma'(t)| > 0$, so $s$ is increasing and has an inverse; reparametrising by $s$
gives a curve with speed exactly 1. Every regular curve can be **parametrised by arc length**. It makes formulas cleaner,
and we use $s$ for this parameter from now on, with a dot or a prime for $d/ds$. For the helix, $s = \sqrt{a^2 + b^2}\, t$,
so $\gamma(s) = (a\cos(s/c), a\sin(s/c), bs/c)$ with $c = \sqrt{a^2 + b^2}$.

## 19.2 Curvature and torsion; the Frenet frame

*Level: advanced.* A unit-speed curve has unit tangent vector $T(s) = \gamma'(s)$. Along a straight line $T$ is constant;
along a bend it turns. How fast it turns is the curvature.

**Definition.** For a curve parametrised by arc length, the **curvature** is $\kappa(s) = |T'(s)| = |\gamma''(s)|$.

Because $T \cdot T = 1$, differentiating gives $2T \cdot T' = 0$: the change $T'$ is perpendicular to $T$. Where
$\kappa \neq 0$ define the **principal normal** $N = T' / \kappa$, a unit vector pointing to the inside of the bend. The
circle that touches the curve at $\gamma(s)$ with the same tangent and curvature, centred at $\gamma(s) + N/\kappa$, is the
**osculating circle** ("kissing circle"), and $1/\kappa$ is the **radius of curvature**.

**Example: the circle.** $\gamma(s) = (r\cos(s/r), r\sin(s/r))$ has $T = (-\sin(s/r), \cos(s/r))$ and
$T' = -\tfrac1r(\cos(s/r), \sin(s/r))$, so $\kappa = 1/r$ and $N$ points to the centre. A small circle is very curved, a
large one barely: this matches the everyday sense of "a sharp bend".

**Formulas for any parametrisation.** Reparametrising by arc length is often impossible to do in closed form, so it is
useful to have formulas in terms of any parameter $t$. For a plane curve $(x(t), y(t))$ the **signed curvature** (positive
when the curve turns left) is

$$
\kappa = \frac{x'y'' - y'x''}{(x'^2 + y'^2)^{3/2}},
$$

and for a space curve

$$
\kappa = \frac{|\gamma' \times \gamma''|}{|\gamma'|^3} .
$$

*Proof of the space formula.* Write $v = |\gamma'|$, so $\gamma' = vT$. Then $\gamma'' = v'T + vT_t$, where
$T_t = dT/dt = (dT/ds)(ds/dt) = \kappa N v$. So $\gamma'' = v'T + \kappa v^2 N$, and
$\gamma' \times \gamma'' = vT \times (v'T + \kappa v^2 N) = \kappa v^3\, T \times N$. Since $T \perp N$ are unit vectors,
$|T \times N| = 1$, giving $|\gamma' \times \gamma''| = \kappa v^3$. (A plane curve is a space curve with $z = 0$; the
third component of the cross product is $x'y'' - y'x''$, which also gives the sign.) $\square$

**Worked example: the parabola** $y = x^2$, parametrised as $(t, t^2)$: $x' = 1$, $y' = 2t$, $x'' = 0$, $y'' = 2$, so
$\kappa = 2/(1 + 4t^2)^{3/2}$. At the vertex $\kappa = 2$, radius of curvature $\tfrac12$; at $(1, 1)$,
$\kappa = 2/5^{3/2} \approx 0.179$, radius $\approx 5.59$. *Check:* the bend is sharpest at the bottom, as the picture of a
parabola suggests.

**Worked example: the ellipse** $(a\cos t, b\sin t)$: the plane formula gives

$$
\kappa(t) = \frac{ab}{(a^2\sin^2 t + b^2\cos^2 t)^{3/2}} .
$$

At the end of the long axis ($t = 0$), $\kappa = a/b^2$; at the end of the short axis, $\kappa = b/a^2$. For $a = 2$, $b = 1$:
curvature $2$ (radius $\tfrac12$) at $(2, 0)$ and $\tfrac14$ (radius 4) at $(0, 1)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="An ellipse with its osculating circles at two points. At the end of the long axis the curve bends sharply and the osculating circle is small, radius one half; at the top it bends gently and the circle is large, radius 4, of which an arc is shown. At a third point the unit tangent T and unit normal N are drawn">
  <polygon points="350,120 350,118.2 349.8,116.3 349.6,114.5 349.2,112.7 348.8,110.9 348.3,109 347.7,107.2 346.9,105.4 346.1,103.7 345.2,101.9 344.2,100.1 343.1,98.4 342,96.6 340.7,94.9 339.3,93.2 337.9,91.5 336.4,89.9 334.7,88.2 333,86.6 331.2,85 329.4,83.4 327.4,81.9 325.4,80.4 323.3,78.9 321.1,77.4 318.8,75.9 316.5,74.5 314,73.2 311.6,71.8 309,70.5 306.4,69.2 303.7,68 300.9,66.8 298.1,65.6 295.2,64.5 292.3,63.4 289.3,62.3 286.2,61.3 283.1,60.3 280,59.4 276.8,58.5 273.6,57.6 270.3,56.8 266.9,56.1 263.6,55.3 260.2,54.6 256.7,54 253.3,53.4 249.8,52.9 246.2,52.4 242.7,51.9 239.1,51.5 235.5,51.2 231.9,50.9 228.3,50.6 224.6,50.4 221,50.2 217.3,50.1 213.7,50 210,50 206.3,50 202.7,50.1 199,50.2 195.4,50.4 191.7,50.6 188.1,50.9 184.5,51.2 180.9,51.5 177.3,51.9 173.8,52.4 170.2,52.9 166.7,53.4 163.3,54 159.8,54.6 156.4,55.3 153.1,56.1 149.7,56.8 146.4,57.6 143.2,58.5 140,59.4 136.9,60.3 133.8,61.3 130.7,62.3 127.7,63.4 124.8,64.5 121.9,65.6 119.1,66.8 116.3,68 113.6,69.2 111,70.5 108.4,71.8 106,73.2 103.5,74.5 101.2,75.9 98.9,77.4 96.7,78.9 94.6,80.4 92.6,81.9 90.6,83.4 88.8,85 87,86.6 85.3,88.2 83.6,89.9 82.1,91.5 80.7,93.2 79.3,94.9 78,96.6 76.9,98.4 75.8,100.1 74.8,101.9 73.9,103.7 73.1,105.4 72.3,107.2 71.7,109 71.2,110.9 70.8,112.7 70.4,114.5 70.2,116.3 70,118.2 70,120 70,121.8 70.2,123.7 70.4,125.5 70.8,127.3 71.2,129.1 71.7,131 72.3,132.8 73.1,134.6 73.9,136.3 74.8,138.1 75.8,139.9 76.9,141.6 78,143.4 79.3,145.1 80.7,146.8 82.1,148.5 83.6,150.1 85.3,151.8 87,153.4 88.8,155 90.6,156.6 92.6,158.1 94.6,159.6 96.7,161.1 98.9,162.6 101.2,164.1 103.5,165.5 106,166.8 108.4,168.2 111,169.5 113.6,170.8 116.3,172 119.1,173.2 121.9,174.4 124.8,175.5 127.7,176.6 130.7,177.7 133.8,178.7 136.9,179.7 140,180.6 143.2,181.5 146.4,182.4 149.7,183.2 153.1,183.9 156.4,184.7 159.8,185.4 163.3,186 166.7,186.6 170.2,187.1 173.8,187.6 177.3,188.1 180.9,188.5 184.5,188.8 188.1,189.1 191.7,189.4 195.4,189.6 199,189.8 202.7,189.9 206.3,190 210,190 213.7,190 217.3,189.9 221,189.8 224.6,189.6 228.3,189.4 231.9,189.1 235.5,188.8 239.1,188.5 242.7,188.1 246.2,187.6 249.8,187.1 253.3,186.6 256.7,186 260.2,185.4 263.6,184.7 266.9,183.9 270.3,183.2 273.6,182.4 276.8,181.5 280,180.6 283.1,179.7 286.2,178.7 289.3,177.7 292.3,176.6 295.2,175.5 298.1,174.4 300.9,173.2 303.7,172 306.4,170.8 309,169.5 311.6,168.2 314,166.8 316.5,165.5 318.8,164.1 321.1,162.6 323.3,161.1 325.4,159.6 327.4,158.1 329.4,156.6 331.2,155 333,153.4 334.7,151.8 336.4,150.1 337.9,148.5 339.3,146.8 340.7,145.1 342,143.4 343.1,141.6 344.2,139.9 345.2,138.1 346.1,136.3 346.9,134.6 347.7,132.8 348.3,131 348.8,129.1 349.2,127.3 349.6,125.5 349.8,123.7 350,121.8" fill="none" stroke="#9cc9ea" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="315" cy="120" r="35" fill="none" stroke="#eea66f" stroke-width="2"/>
  <circle cx="315" cy="120" r="3" fill="#eea66f"/>
  <polyline points="341.5,82.8 337.1,80.5 332.7,78.3 328.3,76.2 323.9,74.2 319.4,72.3 314.9,70.4 310.3,68.6 305.8,66.9 301.2,65.3 296.5,63.7 291.9,62.2 287.2,60.8 282.5,59.5 277.7,58.3 273,57.2 268.2,56.1 263.4,55.1 258.6,54.3 253.8,53.4 249,52.7 244.1,52.1 239.3,51.5 234.4,51.1 229.5,50.7 224.7,50.4 219.8,50.2 214.9,50 210,50 205.1,50 200.2,50.2 195.3,50.4 190.5,50.7 185.6,51.1 180.7,51.5 175.9,52.1 171,52.7 166.2,53.4 161.4,54.3 156.6,55.1 151.8,56.1 147,57.2 142.3,58.3 137.5,59.5 132.8,60.8 128.1,62.2 123.5,63.7 118.8,65.3 114.2,66.9 109.7,68.6 105.1,70.4 100.6,72.3 96.1,74.2 91.7,76.2 87.3,78.3 82.9,80.5 78.5,82.8" fill="none" stroke="#eea66f" stroke-width="2" stroke-dasharray="6 4" stroke-linejoin="round"/>
  <line x1="210" y1="50" x2="210" y2="90" stroke="#eea66f" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="218" y="90" text-anchor="start" font-size="11" fill="currentColor">to centre, 4 below</text>
  <line x1="116.7" y1="67.8" x2="66.5" y2="90.2" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="66.5,90.2 72,84.4 74.5,90.1" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <line x1="116.7" y1="67.8" x2="139.2" y2="118" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="139.2,118 133.3,112.6 139,110" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <circle cx="116.7" cy="67.8" r="4" fill="currentColor"/>
  <text x="58.5" y="86.2" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">T</text>
  <text x="147.2" y="122" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">N</text>
  <text x="315" y="173" text-anchor="middle" font-size="12" fill="currentColor">r = 1/2</text>
</svg>
</div>

**Torsion and the Frenet frame.** A curve in space can also twist out of its plane. Where $\kappa \neq 0$ define the
**binormal** $B = T \times N$. The three vectors $T, N, B$ are perpendicular unit vectors at each point, a moving frame
attached to the curve: the **Frenet frame**. The plane of $T$ and $N$ is the **osculating plane**, the plane the curve
"almost lies in" near the point. How fast that plane tilts is measured by $B'$.

**Theorem 19.1 (Frenet–Serret equations).** For a unit-speed curve with $\kappa > 0$ there is a function $\tau(s)$, the
**torsion**, such that

$$
T' = \kappa N, \qquad N' = -\kappa T + \tau B, \qquad B' = -\tau N .
$$

*Proof.* The first equation is the definition of $N$. For the others, express each derivative in the orthonormal basis
$T, N, B$; the coefficient of a vector $X$ in $Y'$ is $Y' \cdot X$. Differentiating $X \cdot Y = \text{const}$ (0 or 1) for any two
frame vectors gives $X' \cdot Y = -X \cdot Y'$, so the matrix of coefficients is skew-symmetric, with zero diagonal. We
know $T' \cdot N = \kappa$ and $T' \cdot B = 0$. So $N' \cdot T = -\kappa$, $N' \cdot N = 0$, and we *define* $\tau = N' \cdot B$.
Then $B' \cdot T = -T' \cdot B = 0$, $B' \cdot N = -\tau$, $B' \cdot B = 0$. $\square$

A plane curve has $B$ constant (perpendicular to the plane) and $\tau = 0$; conversely if $\tau = 0$ then $B$ is constant
and $(\gamma \cdot B)' = T \cdot B = 0$, so the curve lies in a plane. Torsion is exactly the failure to be planar. For a
general parameter,

$$
\tau = \frac{(\gamma' \times \gamma'') \cdot \gamma'''}{|\gamma' \times \gamma''|^2} .
$$

**Worked example: the helix** $(a\cos t, a\sin t, bt)$. Here $\gamma' = (-a\sin t, a\cos t, b)$,
$\gamma'' = (-a\cos t, -a\sin t, 0)$, $\gamma''' = (a\sin t, -a\cos t, 0)$, and

$$
\gamma' \times \gamma'' = (ab\sin t, -ab\cos t, a^2), \qquad |\gamma' \times \gamma''| = a\sqrt{a^2 + b^2}.
$$

So $\kappa = a\sqrt{a^2 + b^2}/(a^2 + b^2)^{3/2} = a/(a^2 + b^2)$, and $(\gamma' \times \gamma'') \cdot \gamma''' = a^2 b\sin^2 t + a^2 b\cos^2 t = a^2 b$,
so $\tau = a^2 b / (a^2(a^2 + b^2)) = b/(a^2 + b^2)$. Both are constant: a helix bends and twists at the same rate
everywhere. *Check:* $b = 0$ gives a circle, $\kappa = 1/a$, $\tau = 0$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 290" role="img" aria-label="A circular helix winding up a cylinder, with the Frenet frame at one point: the tangent T along the helix, the principal normal N pointing horizontally toward the axis, and the binormal B tilted toward the axis direction">
  <polyline points="273.9,277.6 273.3,277.5 272.7,277.4 272,277.3 271.3,277.2 270.5,277 269.7,276.9 268.9,276.8 268,276.6 267.1,276.5 266.2,276.3 265.2,276.2 264.2,276 263.1,275.8 262.1,275.7 260.9,275.5 259.8,275.3 258.6,275.1 257.4,274.9 256.2,274.7 254.9,274.5 253.6,274.2 252.3,274 251,273.7 249.6,273.5 248.2,273.2 246.8,273 245.4,272.7 243.9,272.4 242.4,272.1 240.9,271.8 239.4,271.5 237.8,271.2 236.3,270.8 234.7,270.5 233.1,270.2 231.5,269.8 229.9,269.4 228.3,269 226.6,268.7 225,268.3 223.3,267.8 221.6,267.4 219.9,267 218.3,266.6 216.6,266.1 214.9,265.6 213.2,265.2 211.5,264.7 209.8,264.2 208.1,263.7 206.4,263.2 204.7,262.7 203,262.1 201.3,261.6 199.6,261 197.9,260.5 196.3,259.9 194.6,259.3 193,258.7 191.3,258.1 189.7,257.5 188.1,256.9 186.5,256.3 184.9,255.6 183.3,255 181.8,254.3 180.2,253.6 178.7,253 177.2,252.3 175.7,251.6 174.3,250.9 172.8,250.1 171.4,249.4 170,248.7 168.7,247.9 167.3,247.2 166,246.4 164.7,245.7 163.5,244.9 162.3,244.1 161.1,243.3 159.9,242.5 158.8,241.7 157.7,240.9 156.6,240.1 155.6,239.3 154.6,238.5 153.6,237.6 152.7,236.8 151.8,236 150.9,235.1 150.1,234.3 149.3,233.4 148.6,232.5 147.8,231.7 147.2,230.8 146.5,229.9 146,229 145.4,228.1 144.9,227.3 144.4,226.4 144,225.5 143.6,224.6 143.3,223.7 143,222.8 142.7,221.9 142.5,221 142.3,220.1 142.2,219.2 142.1,218.3 142,217.4 142,216.5 142,215.5 142.1,214.6 142.2,213.7 142.4,212.8 142.6,211.9 142.8,211 143.1,210.1 143.5,209.2 143.8,208.3 144.2,207.4 144.7,206.5 145.2,205.7 145.7,204.8 146.3,203.9 146.9,203 147.6,202.1 148.3,201.3 149,200.4 149.8,199.5 150.6,198.7 151.4,197.8 152.3,197 153.2,196.1 154.2,195.3 155.2,194.5 156.2,193.7 157.2,192.8 158.3,192 159.4,191.2 160.6,190.4 161.8,189.6 163,188.9 164.2,188.1 165.5,187.3 166.8,186.6 168.1,185.8 169.5,185.1 170.9,184.3 172.3,183.6 173.7,182.9 175.1,182.2 176.6,181.5 178.1,180.8 179.6,180.1 181.1,179.4 182.7,178.7 184.3,178.1 185.8,177.4 187.4,176.8 189,176.2 190.7,175.6 192.3,175 193.9,174.4 195.6,173.8 197.3,173.2 198.9,172.6 200.6,172.1 202.3,171.5 204,171 205.7,170.5 207.4,170 209.1,169.4 210.8,169 212.5,168.5 214.2,168 215.9,167.5 217.6,167.1 219.3,166.6 220.9,166.2 222.6,165.8 224.3,165.4 225.9,165 227.6,164.6 229.2,164.2 230.9,163.8 232.5,163.4 234.1,163.1 235.6,162.7 237.2,162.4 238.8,162.1 240.3,161.8 241.8,161.5 243.3,161.2 244.8,160.9 246.2,160.6 247.6,160.3 249,160.1 250.4,159.8 251.8,159.6 253.1,159.3 254.4,159.1 255.7,158.9 256.9,158.7 258.1,158.4 259.3,158.2 260.5,158.1 261.6,157.9 262.7,157.7 263.8,157.5 264.8,157.3 265.8,157.2 266.7,157 267.6,156.9 268.5,156.7 269.4,156.6 270.2,156.5 271,156.3 271.7,156.2 272.4,156.1 273,156 273.7,155.9 274.2,155.8 274.8,155.7 275.3,155.6 275.7,155.5 276.1,155.4 276.5,155.3 276.9,155.2 277.1,155.1 277.4,155 277.6,154.9 277.8,154.8 277.9,154.7 278,154.7 278,154.6 278,154.5 277.9,154.4 277.9,154.3 277.7,154.2 277.5,154.1 277.3,154.1 277.1,154 276.8,153.9 276.4,153.8 276,153.7 275.6,153.6 275.1,153.5 274.6,153.4 274.1,153.3 273.5,153.2 272.9,153.1 272.2,153 271.5,152.8 270.8,152.7 270,152.6 269.2,152.4 268.3,152.3 267.4,152.2 266.5,152 265.5,151.9 264.5,151.7 263.5,151.5 262.4,151.3 261.3,151.2 260.2,151 259,150.8 257.8,150.6 256.6,150.4 255.3,150.2 254.1,149.9 252.8,149.7 251.4,149.5 250.1,149.2 248.7,149 247.3,148.7 245.8,148.4 244.4,148.1 242.9,147.8 241.4,147.5 239.9,147.2 238.3,146.9 236.8,146.6 235.2,146.2 233.6,145.9 232,145.5 230.4,145.2 228.8,144.8 227.1,144.4 225.5,144 223.8,143.6 222.2,143.2 220.5,142.8 218.8,142.3 217.1,141.9 215.4,141.4 213.7,141 212,140.5 210.3,140 208.6,139.5 206.9,139 205.2,138.5 203.5,137.9 201.9,137.4 200.2,136.9 198.5,136.3 196.8,135.7 195.2,135.1 193.5,134.6 191.9,134 190.2,133.3 188.6,132.7 187,132.1 185.4,131.5 183.8,130.8 182.3,130.2 180.7,129.5 179.2,128.8 177.7,128.1 176.2,127.4 174.7,126.7 173.3,126 171.9,125.3 170.5,124.6 169.1,123.8 167.8,123.1 166.4,122.3 165.2,121.6 163.9,120.8 162.7,120 161.5,119.2 160.3,118.4 159.1,117.6 158,116.8 156.9,116 155.9,115.2 154.9,114.4 153.9,113.5 153,112.7 152.1,111.9 151.2,111 150.3,110.2 149.6,109.3 148.8,108.4 148.1,107.6 147.4,106.7 146.7,105.8 146.1,104.9 145.6,104.1 145.1,103.2 144.6,102.3 144.1,101.4 143.7,100.5 143.4,99.6 143,98.7 142.8,97.8 142.5,96.9 142.3,96 142.2,95.1 142.1,94.2 142,93.3 142,92.4 142,91.5 142.1,90.6 142.2,89.7 142.3,88.8 142.5,87.9 142.8,87 143,86.1 143.3,85.2 143.7,84.3 144.1,83.4 144.5,82.5 145,81.6 145.5,80.7 146.1,79.8 146.7,78.9 147.3,78.1 148,77.2 148.7,76.3 149.5,75.5 150.3,74.6 151.1,73.7 152,72.9 152.9,72.1 153.8,71.2 154.8,70.4 155.8,69.6 156.9,68.7 158,67.9 159.1,67.1 160.2,66.3 161.4,65.5 162.6,64.7 163.8,64 165.1,63.2 166.4,62.4 167.7,61.7 169,60.9 170.4,60.2 171.8,59.5 173.2,58.7 174.7,58 176.1,57.3 177.6,56.6 179.1,55.9 180.6,55.3 182.2,54.6 183.7,53.9 185.3,53.3 186.9,52.6 188.5,52 190.1,51.4 191.8,50.8 193.4,50.2 195.1,49.6 196.7,49 198.4,48.4 200.1,47.9 201.8,47.3 203.4,46.8 205.1,46.3 206.8,45.8 208.5,45.2 210.2,44.7 211.9,44.3 213.6,43.8 215.3,43.3 217,42.9 218.7,42.4 220.4,42 222.1,41.5 223.7,41.1 225.4,40.7 227.1,40.3 228.7,39.9 230.3,39.6 231.9,39.2 233.5,38.8 235.1,38.5 236.7,38.1 238.3,37.8 239.8,37.5 241.3,37.2 242.8,36.9 244.3,36.6 245.7,36.3 247.2,36 248.6,35.8 250,35.5 251.3,35.3 252.7,35 254,34.8 255.3,34.6 256.5,34.4 257.8,34.1 258.9,33.9 260.1,33.7 261.2,33.6 262.3,33.4 263.4,33.2 264.4,33 265.5,32.9 266.4,32.7 267.3,32.6 268.2,32.4 269.1,32.3 269.9,32.1 270.7,32 271.5,31.9 272.2,31.8 272.8,31.6 273.5,31.5 274.1,31.4 274.6,31.3 275.1,31.2 275.6,31.1 276,31 276.4,30.9 276.7,30.8 277.1,30.7 277.3,30.7 277.5,30.6 277.7,30.5 277.8,30.4 277.9,30.3 278,30.2 278,30.1 278,30.1 277.9,30 277.8,29.9 277.6,29.8 277.4,29.7 277.2,29.6 276.9,29.5 276.5,29.5 276.2,29.4 275.8,29.3 275.3,29.2 274.8,29.1" fill="none" stroke="#9cc9ea" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="210" y1="278.6" x2="210" y2="20.2" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="167.3" y1="122.8" x2="111.5" y2="91.1" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="111.5,91.1 119.5,92 116.4,97.5" fill="#eea66f" stroke="#eea66f" stroke-width="1" stroke-linejoin="round"/>
  <text x="121.5" y="87.1" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">T</text>
  <line x1="167.3" y1="122.8" x2="214.3" y2="108.7" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="214.3,108.7 208.1,113.8 206.3,107.9" fill="#7ccf9a" stroke="#7ccf9a" stroke-width="1" stroke-linejoin="round"/>
  <text x="224.3" y="104.7" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">N</text>
  <line x1="167.3" y1="122.8" x2="184.1" y2="56.6" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="184.1,56.6 185.3,64.5 179.2,63" fill="#eea66f" stroke="#eea66f" stroke-width="1" stroke-linejoin="round"/>
  <text x="194.1" y="52.6" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">B</text>
  <circle cx="167.3" cy="122.8" r="4" fill="currentColor"/>
</svg>
</div>

**Theorem 19.2 (fundamental theorem of curves).** Given smooth functions $\kappa(s) > 0$ and $\tau(s)$ on an interval, there
is a unit-speed curve with exactly this curvature and torsion, and any two such curves differ by a rigid motion
(a rotation followed by a translation).

*Idea of proof.* The Frenet–Serret equations are a linear system of ordinary differential equations for the nine
components of $T, N, B$. By the existence and uniqueness theorem for such systems, a choice of initial frame determines
the solution; the skew-symmetry keeps the frame orthonormal; and $\gamma = \int T \, ds$. Two choices of initial point and
frame differ by a rigid motion, and so do the resulting curves. $\square$

So curvature and torsion are a complete description of a space curve's shape: a curve with constant $\kappa$ and $\tau$
is a helix (or a circle). DNA, springs and the tendrils of climbing plants are all close to helices.

**Global facts.** Two classical theorems connect curvature to the whole curve. For a closed plane curve, the total signed
curvature $\int \kappa \, ds$ is $2\pi$ times the number of times the tangent turns around (the **turning number**); for a
simple closed curve (one that does not cross itself) this is $\pm 2\pi$ (Hopf's *Umlaufsatz*, 1935). And for any closed
space curve, $\int \kappa\, ds \ge 2\pi$, with equality only for plane convex curves (Fenchel, 1929). These are first
examples of the pattern that ends the chapter: integrate curvature, get a number that depends only on the shape's topology.

<figure class="play" data-play="curvature"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Slide along an ellipse: the osculating circle hugs the curve, its radius 1/κ.</figcaption></figure>

## 19.3 Surfaces and the first fundamental form

*Level: advanced.* Now let the moving point depend on two parameters. A **parametrised surface** (a chart of a surface)
is a smooth map

$$
X : U \to \mathbb{R}^3, \qquad (u, v) \mapsto X(u, v),
$$

from an open set $U$ of the plane, such that the partial derivatives $X_u = \partial X/\partial u$ and $X_v = \partial X/\partial v$
are linearly independent at every point. Holding $v$ fixed and moving $u$ traces a curve on the surface with velocity
$X_u$; likewise for $X_v$. The two vectors span the **tangent plane** $T_pS$ at $p = X(u, v)$, and

$$
n = \frac{X_u \times X_v}{|X_u \times X_v|}
$$

is a unit **normal**. A whole surface, like a sphere, usually needs several charts; [Chapter 20](20-Manifolds-and-Riemannian-Geometry.md)
makes this precise.

**Examples.**

- **Sphere** of radius $R$, by latitude-longitude: $X(\varphi, \theta) = R(\sin\varphi\cos\theta, \sin\varphi\sin\theta, \cos\varphi)$, with
  $\varphi \in (0, \pi)$ the angle from the north pole and $\theta$ the longitude.
- **Cylinder** of radius $a$: $X(\theta, z) = (a\cos\theta, a\sin\theta, z)$.
- **Graph** of a function: $X(x, y) = (x, y, f(x, y))$.
- **Torus**, made by spinning a circle of radius $r$ about an axis at distance $R > r$ from its centre:
  $X(u, v) = ((R + r\cos v)\cos u, (R + r\cos v)\sin u, r\sin v)$.

**Measuring on the surface.** An ant on the surface walks along a curve $\alpha(t) = X(u(t), v(t))$. Its velocity, by the chain
rule, is $\alpha' = X_u u' + X_v v'$, and its speed squared is

$$
|\alpha'|^2 = E\,u'^2 + 2F\,u'v' + G\,v'^2, \qquad E = X_u \cdot X_u, \quad F = X_u \cdot X_v, \quad G = X_v \cdot X_v .
$$

The quadratic form $I = E\,du^2 + 2F\,du\,dv + G\,dv^2$ is the **first fundamental form**, also written $ds^2$. It is the
dot product of the tangent plane, written in the coordinates $u, v$. With it the ant can compute, without ever looking
outside the surface:

- the **length** of a curve: $\int \sqrt{E u'^2 + 2F u'v' + G v'^2}\, dt$;
- the **angle** between two curves, from the dot product of their velocities;
- the **area** of a region: $\iint \sqrt{EG - F^2}\, du\, dv$, because $|X_u \times X_v|^2 = |X_u|^2|X_v|^2 - (X_u \cdot X_v)^2 = EG - F^2$
  is the squared area of the small parallelogram spanned by $X_u\,du$ and $X_v\,dv$.

These are **intrinsic** quantities: they depend only on $E, F, G$, the measurements made inside the surface.

**Worked example: the sphere.** $X_\varphi = R(\cos\varphi\cos\theta, \cos\varphi\sin\theta, -\sin\varphi)$ and
$X_\theta = R(-\sin\varphi\sin\theta, \sin\varphi\cos\theta, 0)$. So $E = R^2$, $F = 0$, $G = R^2\sin^2\varphi$:

$$
ds^2 = R^2\, d\varphi^2 + R^2 \sin^2\varphi \, d\theta^2 .
$$

Area: $\int_0^{2\pi}\int_0^\pi R^2 \sin\varphi \, d\varphi\, d\theta = 4\pi R^2$. *Check:* Archimedes' result from
[Chapter 11](11-Solid-Geometry.md). A meridian ($\theta$ fixed) from pole to pole has length $\int_0^\pi R\,d\varphi = \pi R$;
a circle of latitude $\varphi = \varphi_0$ has length $2\pi R \sin\varphi_0$, shrinking toward the poles.

**Worked example: the cylinder is "flat".** For $X(\theta, z) = (a\cos\theta, a\sin\theta, z)$, $E = a^2$, $F = 0$, $G = 1$.
Change the parameter to $u = a\theta$ (arc length around the cylinder): then $ds^2 = du^2 + dz^2$, exactly the first
fundamental form of the plane in ordinary coordinates. Two surfaces whose first fundamental forms agree in suitable
coordinates are **locally isometric**: an ant cannot tell them apart by any measurement of lengths, angles or areas in a
small region. Indeed you can roll a sheet of paper into a cylinder without stretching or tearing. Whether you can do the
same with a sphere is the question of 19.5.

## 19.4 Gaussian curvature

*Level: advanced.* The first fundamental form sees only the inside. How the surface bends in space is measured by how
the normal $n$ tilts as you move. Take a unit tangent vector $w$ at $p$ and slice the surface with the plane through $p$
spanned by $w$ and $n$. The slice is a plane curve, the **normal section** in direction $w$, and its signed curvature at $p$
(positive if it bends toward $n$) is the **normal curvature** $k_n(w)$.

**The second fundamental form.** With $L = X_{uu} \cdot n$, $M = X_{uv} \cdot n$, $N = X_{vv} \cdot n$, the normal curvature in the
direction of $w = X_u\,du + X_v\,dv$ is

$$
k_n = \frac{L\,du^2 + 2M\,du\,dv + N\,dv^2}{E\,du^2 + 2F\,du\,dv + G\,dv^2} .
$$

*Why.* Let $\alpha(s)$ be a unit-speed curve on the surface through $p$ with tangent $w$. Since $\alpha' \cdot n = 0$ all along
it, differentiating gives $\alpha'' \cdot n = -\alpha' \cdot n'$, and $\alpha'' = X_{uu}u'^2 + 2X_{uv}u'v' + X_{vv}v'^2 + X_u u'' + X_v v''$;
the last two terms are tangent, so $\alpha'' \cdot n = L u'^2 + 2M u'v' + N v'^2$. For the normal section, $\alpha''$ is
$\kappa$ times its normal, which is $\pm n$, so $\alpha'' \cdot n = k_n$; and with unit speed the denominator is 1. $\square$

The numerator is the **second fundamental form** $II$. The formula says the normal curvature depends only on the
direction, and is the ratio of two quadratic forms. As $w$ turns around the circle of directions, $k_n$ takes a maximum
$k_1$ and a minimum $k_2$, the **principal curvatures**, in two perpendicular **principal directions**, and in between
(Euler's formula, from the 1760s)

$$
k_n(\theta) = k_1 \cos^2\theta + k_2 \sin^2\theta,
$$

where $\theta$ is the angle from the first principal direction. (This is the diagonalisation of a symmetric matrix: $II$
relative to $I$ is a self-adjoint map of the tangent plane, the **shape operator**, and $k_1, k_2$ are its eigenvalues.)

**Definition.** The **Gaussian curvature** is $K = k_1 k_2$ and the **mean curvature** is $H = \tfrac12(k_1 + k_2)$. As
determinants,

$$
K = \frac{LN - M^2}{EG - F^2} .
$$

The sign of $K$ classifies points:

- $K > 0$ (**elliptic** point): both principal curvatures have the same sign; the surface bends the same way in all
  directions and lies on one side of its tangent plane nearby, like a dome or an egg.
- $K < 0$ (**hyperbolic** point): the principal curvatures have opposite signs; the surface crosses its tangent plane,
  like a saddle or a mountain pass.
- $K = 0$: one principal curvature is zero, as on a cylinder or a cone (or both are, as on a plane).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 230" role="img" aria-label="Three surfaces drawn as grids. Left, a dome, which curves the same way in every direction: Gaussian curvature positive. Middle, a cylinder-like trough, curved one way and straight the other: curvature zero. Right, a saddle, curving up in one direction and down in the other: curvature negative">
  <polyline points="65.7,108.3 64.2,106.5 62.8,104.9 61.3,103.5 59.9,102.3 58.4,101.2 56.9,100.3 55.5,99.7 54,99.1 52.6,98.8 51.1,98.7 49.7,98.8 48.2,99 46.8,99.4 45.3,100 43.9,100.8 42.4,101.8 41,102.9 39.5,104.2 38.1,105.8 36.6,107.5 35.2,109.4 33.7,111.4 32.2,113.7 30.8,116.1 29.3,118.7 27.9,121.5 26.4,124.5 25,127.7 23.5,131.1 22.1,134.6" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="65.7,108.3 67.7,106.2 69.8,104.4 71.9,102.7 74,101.2 76,99.9 78.1,98.8 80.2,97.8 82.3,97 84.3,96.5 86.4,96.1 88.5,95.9 90.6,95.8 92.6,96 94.7,96.3 96.8,96.8 98.9,97.6 100.9,98.4 103,99.5 105.1,100.8 107.2,102.2 109.2,103.8 111.3,105.6 113.4,107.6 115.5,109.8 117.5,112.2 119.6,114.7 121.7,117.4 123.8,120.3 125.8,123.4 127.9,126.7" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="76,99.9 74.6,98.1 73.1,96.5 71.7,95.1 70.2,93.8 68.8,92.8 67.3,91.9 65.9,91.2 64.4,90.7 63,90.4 61.5,90.3 60.1,90.3 58.6,90.6 57.2,91 55.7,91.6 54.2,92.4 52.8,93.3 51.3,94.5 49.9,95.8 48.4,97.4 47,99.1 45.5,100.9 44.1,103 42.6,105.3 41.2,107.7 39.7,110.3 38.3,113.1 36.8,116.1 35.4,119.3 33.9,122.7 32.5,126.2" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="58.4,101.2 60.5,99.2 62.6,97.3 64.6,95.6 66.7,94.1 68.8,92.8 70.9,91.7 72.9,90.7 75,90 77.1,89.4 79.2,89 81.2,88.8 83.3,88.7 85.4,88.9 87.5,89.2 89.5,89.7 91.6,90.5 93.7,91.3 95.8,92.4 97.8,93.7 99.9,95.1 102,96.7 104.1,98.5 106.1,100.5 108.2,102.7 110.3,105.1 112.4,107.6 114.4,110.3 116.5,113.3 118.6,116.3 120.7,119.6" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="86.4,96.1 85,94.3 83.5,92.7 82.1,91.3 80.6,90 79.2,89 77.7,88.1 76.2,87.4 74.8,86.9 73.3,86.6 71.9,86.5 70.4,86.5 69,86.8 67.5,87.2 66.1,87.8 64.6,88.6 63.2,89.5 61.7,90.7 60.3,92 58.8,93.5 57.4,95.2 55.9,97.1 54.5,99.2 53,101.5 51.5,103.9 50.1,106.5 48.6,109.3 47.2,112.3 45.7,115.5 44.3,118.8 42.8,122.4" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="51.1,98.7 53.2,96.7 55.3,94.8 57.4,93.1 59.4,91.6 61.5,90.3 63.6,89.2 65.7,88.2 67.7,87.4 69.8,86.9 71.9,86.5 74,86.3 76,86.2 78.1,86.4 80.2,86.7 82.3,87.2 84.3,88 86.4,88.8 88.5,89.9 90.6,91.2 92.6,92.6 94.7,94.2 96.8,96 98.9,98 100.9,100.2 103,102.6 105.1,105.1 107.2,107.8 109.2,110.8 111.3,113.8 113.4,117.1" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="96.8,96.8 95.3,95.1 93.9,93.5 92.4,92 91,90.8 89.5,89.7 88.1,88.9 86.6,88.2 85.2,87.7 83.7,87.4 82.3,87.2 80.8,87.3 79.4,87.5 77.9,87.9 76.5,88.6 75,89.3 73.5,90.3 72.1,91.5 70.6,92.8 69.2,94.3 67.7,96 66.3,97.9 64.8,100 63.4,102.2 61.9,104.7 60.5,107.3 59,110.1 57.6,113.1 56.1,116.3 54.7,119.6 53.2,123.2" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="43.9,100.8 45.9,98.7 48,96.9 50.1,95.2 52.2,93.7 54.2,92.4 56.3,91.2 58.4,90.3 60.5,89.5 62.5,89 64.6,88.6 66.7,88.3 68.8,88.3 70.8,88.5 72.9,88.8 75,89.3 77.1,90 79.2,90.9 81.2,92 83.3,93.3 85.4,94.7 87.5,96.3 89.5,98.1 91.6,100.1 93.7,102.3 95.8,104.7 97.8,107.2 99.9,109.9 102,112.8 104.1,115.9 106.1,119.2" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="107.2,102.2 105.7,100.4 104.3,98.8 102.8,97.4 101.4,96.2 99.9,95.1 98.5,94.2 97,93.6 95.5,93.1 94.1,92.7 92.6,92.6 91.2,92.7 89.7,92.9 88.3,93.3 86.8,93.9 85.4,94.7 83.9,95.7 82.5,96.8 81,98.2 79.6,99.7 78.1,101.4 76.7,103.3 75.2,105.3 73.8,107.6 72.3,110 70.8,112.7 69.4,115.5 67.9,118.5 66.5,121.6 65,125 63.6,128.5" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="36.6,107.5 38.7,105.4 40.8,103.6 42.8,101.9 44.9,100.4 47,99.1 49.1,97.9 51.1,97 53.2,96.2 55.3,95.6 57.4,95.2 59.4,95 61.5,95 63.6,95.2 65.7,95.5 67.7,96 69.8,96.7 71.9,97.6 74,98.7 76,99.9 78.1,101.4 80.2,103 82.3,104.8 84.3,106.8 86.4,109 88.5,111.3 90.6,113.9 92.6,116.6 94.7,119.5 96.8,122.6 98.9,125.9" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="117.5,112.2 116.1,110.4 114.6,108.8 113.2,107.4 111.7,106.1 110.3,105.1 108.8,104.2 107.4,103.5 105.9,103 104.5,102.7 103,102.6 101.6,102.6 100.1,102.9 98.7,103.3 97.2,103.9 95.8,104.7 94.3,105.6 92.8,106.8 91.4,108.1 89.9,109.6 88.5,111.3 87,113.2 85.6,115.3 84.1,117.6 82.7,120 81.2,122.6 79.8,125.4 78.3,128.4 76.9,131.6 75.4,134.9 74,138.5" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="29.3,118.7 31.4,116.7 33.5,114.8 35.6,113.1 37.6,111.6 39.7,110.3 41.8,109.2 43.9,108.3 45.9,107.5 48,106.9 50.1,106.5 52.2,106.3 54.2,106.3 56.3,106.4 58.4,106.8 60.5,107.3 62.5,108 64.6,108.9 66.7,110 68.8,111.2 70.8,112.7 72.9,114.3 75,116.1 77.1,118.1 79.1,120.3 81.2,122.6 83.3,125.2 85.4,127.9 87.4,130.8 89.5,133.9 91.6,137.2" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="127.9,126.7 126.5,124.9 125,123.3 123.6,121.9 122.1,120.7 120.7,119.6 119.2,118.8 117.8,118.1 116.3,117.6 114.8,117.3 113.4,117.1 111.9,117.2 110.5,117.4 109,117.8 107.6,118.4 106.1,119.2 104.7,120.2 103.2,121.3 101.8,122.7 100.3,124.2 98.9,125.9 97.4,127.8 96,129.9 94.5,132.1 93.1,134.5 91.6,137.2 90.1,140 88.7,143 87.2,146.1 85.8,149.5 84.3,153" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="22.1,134.6 24.2,132.6 26.2,130.7 28.3,129 30.4,127.5 32.5,126.2 34.5,125.1 36.6,124.1 38.7,123.4 40.8,122.8 42.8,122.4 44.9,122.2 47,122.1 49.1,122.3 51.1,122.6 53.2,123.2 55.3,123.9 57.4,124.8 59.4,125.8 61.5,127.1 63.6,128.5 65.7,130.1 67.7,132 69.8,133.9 71.9,136.1 74,138.5 76,141 78.1,143.7 80.2,146.7 82.3,149.8 84.3,153" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="75" y="200" text-anchor="middle" font-size="13" fill="currentColor">dome</text>
  <text x="75" y="220" text-anchor="middle" font-size="13" fill="currentColor">K > 0</text>
  <polyline points="215.7,99.7 214.2,100.6 212.8,101.4 211.3,102.3 209.9,103.2 208.4,104.1 206.9,104.9 205.5,105.8 204,106.7 202.6,107.6 201.1,108.5 199.7,109.3 198.2,110.2 196.8,111.1 195.3,112 193.9,112.8 192.4,113.7 191,114.6 189.5,115.5 188.1,116.4 186.6,117.2 185.2,118.1 183.7,119 182.2,119.9 180.8,120.7 179.3,121.6 177.9,122.5 176.4,123.4 175,124.2 173.5,125.1 172.1,126" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="215.7,99.7 217.7,97.2 219.8,94.9 221.9,92.9 224,91 226,89.4 228.1,87.9 230.2,86.7 232.3,85.7 234.3,85 236.4,84.4 238.5,84 240.6,83.9 242.6,84 244.7,84.3 246.8,84.8 248.9,85.5 250.9,86.4 253,87.6 255.1,89 257.2,90.5 259.2,92.3 261.3,94.3 263.4,96.6 265.5,99 267.5,101.6 269.6,104.5 271.7,107.6 273.8,110.9 275.8,114.4 277.9,118.1" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="226,89.4 224.6,90.2 223.1,91.1 221.7,92 220.2,92.9 218.8,93.7 217.3,94.6 215.9,95.5 214.4,96.4 213,97.3 211.5,98.1 210.1,99 208.6,99.9 207.2,100.8 205.7,101.6 204.2,102.5 202.8,103.4 201.3,104.3 199.9,105.2 198.4,106 197,106.9 195.5,107.8 194.1,108.7 192.6,109.5 191.2,110.4 189.7,111.3 188.3,112.2 186.8,113 185.4,113.9 183.9,114.8 182.5,115.7" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="208.4,104.1 210.5,101.6 212.6,99.3 214.6,97.2 216.7,95.4 218.8,93.7 220.9,92.3 222.9,91.1 225,90.1 227.1,89.3 229.2,88.8 231.2,88.4 233.3,88.3 235.4,88.4 237.5,88.7 239.5,89.2 241.6,89.9 243.7,90.8 245.8,92 247.8,93.3 249.9,94.9 252,96.7 254.1,98.7 256.1,100.9 258.2,103.4 260.3,106 262.4,108.9 264.4,112 266.5,115.3 268.6,118.8 270.7,122.5" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="236.4,84.4 235,85.3 233.5,86.2 232.1,87 230.6,87.9 229.2,88.8 227.7,89.7 226.2,90.5 224.8,91.4 223.3,92.3 221.9,93.2 220.4,94 219,94.9 217.5,95.8 216.1,96.7 214.6,97.6 213.2,98.4 211.7,99.3 210.3,100.2 208.8,101.1 207.4,101.9 205.9,102.8 204.5,103.7 203,104.6 201.5,105.4 200.1,106.3 198.6,107.2 197.2,108.1 195.7,109 194.3,109.8 192.8,110.7" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="201.1,108.5 203.2,106 205.3,103.7 207.4,101.6 209.4,99.8 211.5,98.1 213.6,96.7 215.7,95.5 217.7,94.5 219.8,93.7 221.9,93.2 224,92.8 226,92.7 228.1,92.8 230.2,93.1 232.3,93.6 234.3,94.3 236.4,95.2 238.5,96.4 240.6,97.7 242.6,99.3 244.7,101.1 246.8,103.1 248.9,105.3 250.9,107.8 253,110.4 255.1,113.3 257.2,116.4 259.2,119.7 261.3,123.2 263.4,126.9" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="246.8,84.8 245.3,85.7 243.9,86.5 242.4,87.4 241,88.3 239.5,89.2 238.1,90.1 236.6,90.9 235.2,91.8 233.7,92.7 232.3,93.6 230.8,94.4 229.4,95.3 227.9,96.2 226.5,97.1 225,97.9 223.5,98.8 222.1,99.7 220.6,100.6 219.2,101.5 217.7,102.3 216.3,103.2 214.8,104.1 213.4,105 211.9,105.8 210.5,106.7 209,107.6 207.6,108.5 206.1,109.3 204.7,110.2 203.2,111.1" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="193.9,112.8 195.9,110.3 198,108.1 200.1,106 202.2,104.2 204.2,102.5 206.3,101.1 208.4,99.9 210.5,98.9 212.5,98.1 214.6,97.6 216.7,97.2 218.8,97.1 220.8,97.1 222.9,97.4 225,97.9 227.1,98.7 229.2,99.6 231.2,100.8 233.3,102.1 235.4,103.7 237.5,105.5 239.5,107.5 241.6,109.7 243.7,112.2 245.8,114.8 247.8,117.7 249.9,120.7 252,124 254.1,127.5 256.1,131.3" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="257.2,90.5 255.7,91.4 254.3,92.3 252.8,93.2 251.4,94 249.9,94.9 248.5,95.8 247,96.7 245.5,97.6 244.1,98.4 242.6,99.3 241.2,100.2 239.7,101.1 238.3,101.9 236.8,102.8 235.4,103.7 233.9,104.6 232.5,105.4 231,106.3 229.6,107.2 228.1,108.1 226.7,109 225.2,109.8 223.8,110.7 222.3,111.6 220.8,112.5 219.4,113.3 217.9,114.2 216.5,115.1 215,116 213.6,116.9" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="186.6,117.2 188.7,114.7 190.8,112.5 192.8,110.4 194.9,108.5 197,106.9 199.1,105.5 201.1,104.3 203.2,103.3 205.3,102.5 207.4,101.9 209.4,101.6 211.5,101.5 213.6,101.5 215.7,101.8 217.7,102.3 219.8,103.1 221.9,104 224,105.1 226,106.5 228.1,108.1 230.2,109.9 232.3,111.9 234.3,114.1 236.4,116.5 238.5,119.2 240.6,122.1 242.6,125.1 244.7,128.4 246.8,131.9 248.9,135.7" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="267.5,101.6 266.1,102.5 264.6,103.4 263.2,104.3 261.7,105.2 260.3,106 258.8,106.9 257.4,107.8 255.9,108.7 254.5,109.5 253,110.4 251.6,111.3 250.1,112.2 248.7,113 247.2,113.9 245.8,114.8 244.3,115.7 242.8,116.6 241.4,117.4 239.9,118.3 238.5,119.2 237,120.1 235.6,120.9 234.1,121.8 232.7,122.7 231.2,123.6 229.8,124.4 228.3,125.3 226.9,126.2 225.4,127.1 224,128" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="179.3,121.6 181.4,119.1 183.5,116.8 185.6,114.8 187.6,112.9 189.7,111.3 191.8,109.9 193.9,108.7 195.9,107.7 198,106.9 200.1,106.3 202.2,106 204.2,105.8 206.3,105.9 208.4,106.2 210.5,106.7 212.5,107.4 214.6,108.4 216.7,109.5 218.8,110.9 220.8,112.5 222.9,114.3 225,116.3 227.1,118.5 229.1,120.9 231.2,123.6 233.3,126.4 235.4,129.5 237.4,132.8 239.5,136.3 241.6,140" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="277.9,118.1 276.5,119 275,119.9 273.6,120.7 272.1,121.6 270.7,122.5 269.2,123.4 267.8,124.2 266.3,125.1 264.8,126 263.4,126.9 261.9,127.8 260.5,128.6 259,129.5 257.6,130.4 256.1,131.3 254.7,132.1 253.2,133 251.8,133.9 250.3,134.8 248.9,135.7 247.4,136.5 246,137.4 244.5,138.3 243.1,139.2 241.6,140 240.1,140.9 238.7,141.8 237.2,142.7 235.8,143.5 234.3,144.4" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="172.1,126 174.2,123.5 176.2,121.2 178.3,119.2 180.4,117.3 182.5,115.7 184.5,114.3 186.6,113 188.7,112.1 190.8,111.3 192.8,110.7 194.9,110.4 197,110.2 199.1,110.3 201.1,110.6 203.2,111.1 205.3,111.8 207.4,112.8 209.4,113.9 211.5,115.3 213.6,116.9 215.7,118.6 217.7,120.7 219.8,122.9 221.9,125.3 224,128 226,130.8 228.1,133.9 230.2,137.2 232.3,140.7 234.3,144.4" fill="none" stroke="#9cc9ea" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="225" y="200" text-anchor="middle" font-size="13" fill="currentColor">trough</text>
  <text x="225" y="220" text-anchor="middle" font-size="13" fill="currentColor">K = 0</text>
  <polyline points="365.7,87.6 364.2,85.8 362.8,84.2 361.3,82.8 359.9,81.6 358.4,80.5 356.9,79.7 355.5,79 354,78.5 352.6,78.2 351.1,78 349.7,78.1 348.2,78.3 346.8,78.7 345.3,79.3 343.9,80.1 342.4,81.1 341,82.2 339.5,83.6 338.1,85.1 336.6,86.8 335.2,88.7 333.7,90.8 332.2,93 330.8,95.5 329.3,98.1 327.9,100.9 326.4,103.9 325,107 323.5,110.4 322.1,113.9" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="365.7,87.6 367.7,90.9 369.8,94 371.9,96.9 374,99.6 376,102.2 378.1,104.5 380.2,106.7 382.3,108.7 384.3,110.5 386.4,112.1 388.5,113.6 390.6,114.8 392.6,115.9 394.7,116.8 396.8,117.5 398.9,118 400.9,118.4 403,118.5 405.1,118.5 407.2,118.3 409.2,117.9 411.3,117.3 413.4,116.5 415.5,115.6 417.5,114.5 419.6,113.2 421.7,111.7 423.8,110 425.8,108.1 427.9,106.1" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="376,102.2 374.6,100.4 373.1,98.8 371.7,97.4 370.2,96.1 368.8,95.1 367.3,94.2 365.9,93.5 364.4,93 363,92.7 361.5,92.6 360.1,92.6 358.6,92.9 357.2,93.3 355.7,93.9 354.2,94.7 352.8,95.6 351.3,96.8 349.9,98.1 348.4,99.7 347,101.4 345.5,103.2 344.1,105.3 342.6,107.6 341.2,110 339.7,112.6 338.3,115.4 336.8,118.4 335.4,121.6 333.9,125 332.5,128.5" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="358.4,80.5 360.5,83.8 362.6,86.9 364.6,89.8 366.7,92.5 368.8,95.1 370.9,97.4 372.9,99.6 375,101.6 377.1,103.4 379.2,105 381.2,106.5 383.3,107.7 385.4,108.8 387.5,109.7 389.5,110.4 391.6,110.9 393.7,111.3 395.8,111.4 397.8,111.4 399.9,111.2 402,110.8 404.1,110.2 406.1,109.4 408.2,108.5 410.3,107.4 412.4,106.1 414.4,104.6 416.5,102.9 418.6,101 420.7,99" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="386.4,112.1 385,110.4 383.5,108.8 382.1,107.3 380.6,106.1 379.2,105 377.7,104.2 376.2,103.5 374.8,103 373.3,102.7 371.9,102.5 370.4,102.6 369,102.8 367.5,103.2 366.1,103.8 364.6,104.6 363.2,105.6 361.7,106.8 360.3,108.1 358.8,109.6 357.4,111.3 355.9,113.2 354.5,115.3 353,117.5 351.5,120 350.1,122.6 348.6,125.4 347.2,128.4 345.7,131.6 344.3,134.9 342.8,138.5" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="351.1,78 353.2,81.3 355.3,84.4 357.4,87.3 359.4,90 361.5,92.6 363.6,94.9 365.7,97.1 367.7,99.1 369.8,100.9 371.9,102.5 374,104 376,105.2 378.1,106.3 380.2,107.2 382.3,107.9 384.3,108.4 386.4,108.8 388.5,108.9 390.6,108.9 392.6,108.7 394.7,108.3 396.8,107.7 398.9,106.9 400.9,106 403,104.9 405.1,103.6 407.2,102.1 409.2,100.4 411.3,98.5 413.4,96.5" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="396.8,117.5 395.3,115.7 393.9,114.1 392.4,112.7 391,111.5 389.5,110.4 388.1,109.5 386.6,108.9 385.2,108.4 383.7,108 382.3,107.9 380.8,108 379.4,108.2 377.9,108.6 376.5,109.2 375,110 373.5,111 372.1,112.1 370.6,113.5 369.2,115 367.7,116.7 366.3,118.6 364.8,120.6 363.4,122.9 361.9,125.3 360.5,128 359,130.8 357.6,133.7 356.1,136.9 354.7,140.3 353.2,143.8" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="343.9,80.1 345.9,83.4 348,86.5 350.1,89.4 352.2,92.1 354.2,94.7 356.3,97 358.4,99.2 360.5,101.2 362.5,103 364.6,104.6 366.7,106.1 368.8,107.3 370.8,108.4 372.9,109.3 375,110 377.1,110.5 379.2,110.9 381.2,111 383.3,111 385.4,110.8 387.5,110.4 389.5,109.8 391.6,109 393.7,108.1 395.8,107 397.8,105.6 399.9,104.1 402,102.5 404.1,100.6 406.1,98.5" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="407.2,118.3 405.7,116.5 404.3,114.9 402.8,113.5 401.4,112.2 399.9,111.2 398.5,110.3 397,109.6 395.5,109.1 394.1,108.8 392.6,108.7 391.2,108.7 389.7,109 388.3,109.4 386.8,110 385.4,110.8 383.9,111.7 382.5,112.9 381,114.2 379.6,115.8 378.1,117.5 376.7,119.3 375.2,121.4 373.8,123.7 372.3,126.1 370.8,128.7 369.4,131.5 367.9,134.5 366.5,137.7 365,141.1 363.6,144.6" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="336.6,86.8 338.7,90.1 340.8,93.2 342.8,96.1 344.9,98.8 347,101.4 349.1,103.7 351.1,105.9 353.2,107.9 355.3,109.7 357.4,111.3 359.4,112.8 361.5,114 363.6,115.1 365.7,116 367.7,116.7 369.8,117.2 371.9,117.5 374,117.7 376,117.7 378.1,117.5 380.2,117.1 382.3,116.5 384.3,115.7 386.4,114.8 388.5,113.6 390.6,112.3 392.6,110.8 394.7,109.1 396.8,107.3 398.9,105.2" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="417.5,114.5 416.1,112.7 414.6,111.1 413.2,109.7 411.7,108.4 410.3,107.4 408.8,106.5 407.4,105.8 405.9,105.3 404.5,105 403,104.9 401.6,104.9 400.1,105.2 398.7,105.6 397.2,106.2 395.8,107 394.3,107.9 392.8,109.1 391.4,110.4 389.9,111.9 388.5,113.6 387,115.5 385.6,117.6 384.1,119.9 382.7,122.3 381.2,124.9 379.8,127.7 378.3,130.7 376.9,133.9 375.4,137.2 374,140.8" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="329.3,98.1 331.4,101.4 333.5,104.5 335.6,107.4 337.6,110.1 339.7,112.6 341.8,115 343.9,117.2 345.9,119.2 348,121 350.1,122.6 352.2,124 354.2,125.3 356.3,126.4 358.4,127.2 360.5,128 362.5,128.5 364.6,128.8 366.7,129 368.8,128.9 370.8,128.7 372.9,128.3 375,127.8 377.1,127 379.1,126 381.2,124.9 383.3,123.6 385.4,122.1 387.4,120.4 389.5,118.6 391.6,116.5" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="427.9,106.1 426.5,104.3 425,102.7 423.6,101.2 422.1,100 420.7,99 419.2,98.1 417.8,97.4 416.3,96.9 414.8,96.6 413.4,96.5 411.9,96.5 410.5,96.7 409,97.2 407.6,97.8 406.1,98.5 404.7,99.5 403.2,100.7 401.8,102 400.3,103.5 398.9,105.2 397.4,107.1 396,109.2 394.5,111.4 393.1,113.9 391.6,116.5 390.1,119.3 388.7,122.3 387.2,125.5 385.8,128.8 384.3,132.4" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="322.1,113.9 324.2,117.2 326.2,120.3 328.3,123.2 330.4,126 332.5,128.5 334.5,130.9 336.6,133 338.7,135 340.8,136.8 342.8,138.5 344.9,139.9 347,141.2 349.1,142.2 351.1,143.1 353.2,143.8 355.3,144.3 357.4,144.7 359.4,144.8 361.5,144.8 363.6,144.6 365.7,144.2 367.7,143.6 369.8,142.9 371.9,141.9 374,140.8 376,139.5 378.1,138 380.2,136.3 382.3,134.4 384.3,132.4" fill="none" stroke="#7ccf9a" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="375" y="200" text-anchor="middle" font-size="13" fill="currentColor">saddle</text>
  <text x="375" y="220" text-anchor="middle" font-size="13" fill="currentColor">K < 0</text>
</svg>
</div>

Note that changing the normal $n$ to $-n$ changes the signs of $k_1$, $k_2$ and $H$ but not of $K$: Gaussian curvature does
not care which side is "up".

**Worked example: graphs at a flat point.** For $z = f(x, y)$ at a point where $f_x = f_y = 0$, the tangent plane is
horizontal, $E = G = 1$, $F = 0$, and $L, M, N$ are the second derivatives $f_{xx}, f_{xy}, f_{yy}$. So

$$
K = f_{xx} f_{yy} - f_{xy}^2,
$$

the determinant of the Hessian. (In general, $K = (f_{xx}f_{yy} - f_{xy}^2)/(1 + f_x^2 + f_y^2)^2$.)

- Paraboloid $z = x^2 + y^2$ at the origin: $K = 2 \cdot 2 - 0 = 4$.
- Saddle $z = xy$ at the origin: $K = 0 \cdot 0 - 1^2 = -1$.
- Trough $z = x^2$: $K = 2 \cdot 0 - 0 = 0$ everywhere.

This is the second-derivative test of calculus seen geometrically: $K > 0$ at a maximum or minimum, $K < 0$ at a saddle point.

**Worked example: the sphere.** At every point of a sphere of radius $R$, every normal section is a great circle of
radius $R$, so $k_1 = k_2 = 1/R$ (with the inward normal) and $K = 1/R^2$. The Earth, with mean radius about 6371 km, has
$K \approx 2.5 \times 10^{-8}$ per square kilometre; Mars, radius about 3389.5 km, about $8.7 \times 10^{-8}$, about three and a half
times as curved.

**Worked example: the torus.** A calculation with the parametrisation above gives $E = (R + r\cos v)^2$, $F = 0$, $G = r^2$,
$L = (R + r\cos v)\cos v$, $M = 0$, $N = r$ (with the inward normal), so

$$
K = \frac{\cos v}{r(R + r\cos v)} .
$$

On the outer half ($\cos v > 0$) the torus is dome-like, $K > 0$; on the inner half, around the hole, it is saddle-like,
$K < 0$; on the top and bottom circles $v = \pm\pi/2$, $K = 0$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 220" role="img" aria-label="A torus seen from above at a slant. The outer half, shaded orange, curves like a sphere: positive curvature. The inner half around the hole, shaded blue, is saddle-shaped: negative curvature. The circles on top and bottom that separate them have zero curvature, and the total over the whole torus is zero">
  <polyline points="359.8,98.9 359.2,102.8 358.3,106.6 356.9,110.4 355.2,114.2 353.1,117.9 350.7,121.6 347.9,125.2 344.7,128.7 341.2,132.1 337.4,135.4 333.3,138.6 328.8,141.7 324,144.6 319,147.5 313.7,150.1 308.1,152.7 302.3,155 296.2,157.2 290,159.2 283.6,161.1 276.9,162.8 270.2,164.3 263.3,165.6 256.2,166.7 249.1,167.6 241.9,168.3 234.6,168.8 227.3,169.1 220,169.2 212.7,169.1 205.4,168.8 198.1,168.3 190.9,167.6 183.8,166.7 176.7,165.6 169.8,164.3 163.1,162.8 156.4,161.1 150,159.2 143.8,157.2 137.7,155 131.9,152.7 126.3,150.1 121,147.5 116,144.6 111.2,141.7 106.7,138.6 102.6,135.4 98.8,132.1 95.3,128.7 92.1,125.2 89.3,121.6 86.9,117.9 84.8,114.2 83.1,110.4 81.7,106.6 80.8,102.8 80.2,98.9 80,95" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="358.6,86.2 358.4,90.1 357.9,93.9 356.9,97.7 355.6,101.5 353.9,105.2 351.9,108.9 349.4,112.5 346.7,116.1 343.5,119.6 340.1,123 336.3,126.2 332.2,129.4 327.7,132.5 323,135.4 318,138.2 312.8,140.8 307.2,143.3 301.5,145.7 295.5,147.8 289.3,149.8 282.9,151.7 276.4,153.3 269.7,154.8 262.8,156.1 255.9,157.2 248.8,158.1 241.7,158.8 234.5,159.3 227.3,159.6 220,159.7 212.7,159.6 205.5,159.3 198.3,158.8 191.2,158.1 184.1,157.2 177.2,156.1 170.3,154.8 163.6,153.3 157.1,151.7 150.7,149.8 144.5,147.8 138.5,145.7 132.8,143.3 127.2,140.8 122,138.2 117,135.4 112.3,132.5 107.8,129.4 103.7,126.2 99.9,123 96.5,119.6 93.3,116.1 90.6,112.5 88.1,108.9 86.1,105.2 84.4,101.5 83.1,97.7 82.1,93.9 81.6,90.1 81.4,86.2 81.6,82.4 82.1,78.5 83.1,74.7" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="356.9,74.7 357.9,78.5 358.4,82.4 358.6,86.2" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="354.6,78 354.5,81.8 353.9,85.5 353,89.2 351.7,92.9 350.1,96.5 348.1,100.1 345.7,103.6 343,107.1 340,110.4 336.6,113.7 332.9,116.9 328.9,120 324.6,122.9 320.1,125.8 315.2,128.5 310.1,131.1 304.7,133.5 299.1,135.8 293.3,137.9 287.3,139.8 281.1,141.6 274.8,143.2 268.3,144.6 261.6,145.9 254.8,147 248,147.8 241.1,148.5 234.1,149 227,149.3 220,149.4 213,149.3 205.9,149 198.9,148.5 192,147.8 185.2,147 178.4,145.9 171.7,144.6 165.2,143.2 158.9,141.6 152.7,139.8 146.7,137.9 140.9,135.8 135.3,133.5 129.9,131.1 124.8,128.5 119.9,125.8 115.4,122.9 111.1,120 107.1,116.9 103.4,113.7 100,110.4 97,107.1 94.3,103.6 91.9,100.1 89.9,96.5 88.3,92.9 87,89.2 86.1,85.5 85.5,81.8 85.4,78 85.5,74.3 86.1,70.6 87,66.9 88.3,63.2 89.9,59.6 91.9,56 94.3,52.5" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="345.7,52.5 348.1,56 350.1,59.6 351.7,63.2 353,66.9 353.9,70.6 354.5,74.3 354.6,78" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="348.3,71 348.1,74.6 347.6,78.1 346.7,81.6 345.5,85.1 343.9,88.6 342,92 339.8,95.4 337.2,98.7 334.3,101.9 331.1,105 327.6,108 323.8,111 319.7,113.8 315.3,116.5 310.7,119.1 305.8,121.5 300.7,123.8 295.4,126 289.9,128 284.1,129.9 278.2,131.6 272.2,133.1 266,134.5 259.6,135.7 253.2,136.7 246.7,137.5 240.1,138.2 233.4,138.6 226.7,138.9 220,139 213.3,138.9 206.6,138.6 199.9,138.2 193.3,137.5 186.8,136.7 180.4,135.7 174,134.5 167.8,133.1 161.8,131.6 155.9,129.9 150.1,128 144.6,126 139.3,123.8 134.2,121.5 129.3,119.1 124.7,116.5 120.3,113.8 116.2,111 112.4,108 108.9,105 105.7,101.9 102.8,98.7 100.2,95.4 98,92 96.1,88.6 94.5,85.1 93.3,81.6 92.4,78.1 91.9,74.6 91.7,71 91.9,67.5 92.4,63.9 93.3,60.4 94.5,56.9 96.1,53.4 98,50 100.2,46.7 102.8,43.4 105.7,40.2 108.9,37 112.4,34 116.2,31.1" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="323.8,31.1 327.6,34 331.1,37 334.3,40.2 337.2,43.4 339.8,46.7 342,50 343.9,53.4 345.5,56.9 346.7,60.4 347.6,63.9 348.1,67.5 348.3,71" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="340,65.6 339.8,69 339.3,72.3 338.5,75.6 337.4,78.8 335.9,82.1 334.1,85.3 332,88.4 329.6,91.5 326.9,94.5 323.9,97.4 320.6,100.3 317.1,103 313.3,105.6 309.2,108.2 304.9,110.6 300.3,112.9 295.5,115 290.5,117.1 285.4,119 280,120.7 274.5,122.3 268.8,123.7 263,125 257.1,126.1 251.1,127 244.9,127.8 238.8,128.4 232.5,128.9 226.3,129.1 220,129.2 213.7,129.1 207.5,128.9 201.2,128.4 195.1,127.8 188.9,127 182.9,126.1 177,125 171.2,123.7 165.5,122.3 160,120.7 154.6,119 149.5,117.1 144.5,115 139.7,112.9 135.1,110.6 130.8,108.2 126.7,105.6 122.9,103 119.4,100.3 116.1,97.4 113.1,94.5 110.4,91.5 108,88.4 105.9,85.3 104.1,82.1 102.6,78.8 101.5,75.6 100.7,72.3 100.2,69 100,65.6 100.2,62.3 100.7,59 101.5,55.7 102.6,52.4 104.1,49.2 105.9,46 108,42.8 110.4,39.8 113.1,36.8 116.1,33.8 119.4,31 122.9,28.2 126.7,25.6 130.8,23.1 135.1,20.7 139.7,18.4 144.5,16.2 149.5,14.2 154.6,12.3 160,10.6 165.5,9 171.2,7.5 177,6.3 182.9,5.1 188.9,4.2 195.1,3.4 201.2,2.8 207.5,2.4 213.7,2.1 220,2 226.3,2.1 232.5,2.4 238.8,2.8 244.9,3.4 251.1,4.2 257.1,5.1 263,6.3 268.8,7.5 274.5,9 280,10.6 285.4,12.3 290.5,14.2 295.5,16.2 300.3,18.4 304.9,20.7 309.2,23.1 313.3,25.6 317.1,28.2 320.6,31 323.9,33.8 326.9,36.8 329.6,39.8 332,42.8 334.1,46 335.9,49.2 337.4,52.4 338.5,55.7 339.3,59 339.8,62.3 340,65.6" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="330.4,62.2 330.2,65.3 329.7,68.3 329,71.4 327.9,74.4 326.6,77.4 325,80.3 323,83.2 320.8,86 318.3,88.8 315.6,91.5 312.5,94.1 309.3,96.6 305.8,99 302,101.4 298,103.6 293.8,105.7 289.4,107.7 284.9,109.5 280.1,111.3 275.2,112.9 270.1,114.3 264.9,115.7 259.5,116.8 254.1,117.8 248.6,118.7 242.9,119.4 237.3,120 231.5,120.4 225.8,120.6 220,120.7 214.2,120.6 208.5,120.4 202.7,120 197.1,119.4 191.4,118.7 185.9,117.8 180.5,116.8 175.1,115.7 169.9,114.3 164.8,112.9 159.9,111.3 155.1,109.5 150.6,107.7 146.2,105.7 142,103.6 138,101.4 134.2,99 130.7,96.6 127.5,94.1 124.4,91.5 121.7,88.8 119.2,86 117,83.2 115,80.3 113.4,77.4 112.1,74.4 111,71.4 110.3,68.3 109.8,65.3 109.6,62.2 109.8,59.2 110.3,56.1 111,53.1 112.1,50.1 113.4,47.1 115,44.2 117,41.3 119.2,38.4 121.7,35.7 124.4,33 127.5,30.4 130.7,27.9 134.2,25.4 138,23.1 142,20.9 146.2,18.8 150.6,16.8 155.1,14.9 159.9,13.2 164.8,11.6 169.9,10.1 175.1,8.8 180.5,7.6 185.9,6.6 191.4,5.7 197.1,5 202.7,4.5 208.5,4.1 214.2,3.8 220,3.8 225.8,3.8 231.5,4.1 237.3,4.5 242.9,5 248.6,5.7 254.1,6.6 259.5,7.6 264.9,8.8 270.1,10.1 275.2,11.6 280.1,13.2 284.9,14.9 289.4,16.8 293.8,18.8 298,20.9 302,23.1 305.8,25.4 309.3,27.9 312.5,30.4 315.6,33 318.3,35.7 320.8,38.4 323,41.3 325,44.2 326.6,47.1 327.9,50.1 329,53.1 329.7,56.1 330.2,59.2 330.4,62.2" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="320,61.1 319.9,63.9 319.5,66.6 318.8,69.4 317.8,72.1 316.6,74.8 315.1,77.5 313.4,80.1 311.4,82.6 309.1,85.1 306.6,87.6 303.9,89.9 300.9,92.2 297.7,94.4 294.3,96.5 290.7,98.5 286.9,100.5 282.9,102.3 278.8,103.9 274.5,105.5 270,107 265.4,108.3 260.7,109.5 255.8,110.6 250.9,111.5 245.9,112.3 240.8,112.9 235.6,113.4 230.5,113.8 225.2,114 220,114.1 214.8,114 209.5,113.8 204.4,113.4 199.2,112.9 194.1,112.3 189.1,111.5 184.2,110.6 179.3,109.5 174.6,108.3 170,107 165.5,105.5 161.2,103.9 157.1,102.3 153.1,100.5 149.3,98.5 145.7,96.5 142.3,94.4 139.1,92.2 136.1,89.9 133.4,87.6 130.9,85.1 128.6,82.6 126.6,80.1 124.9,77.5 123.4,74.8 122.2,72.1 121.2,69.4 120.5,66.6 120.1,63.9 120,61.1 120.1,58.3 120.5,55.5 121.2,52.8 122.2,50.1 123.4,47.4 124.9,44.7 126.6,42.1 128.6,39.5 130.9,37 133.4,34.6 136.1,32.2 139.1,29.9 142.3,27.7 145.7,25.6 149.3,23.6 153.1,21.7 157.1,19.9 161.2,18.2 165.5,16.6 170,15.2 174.6,13.9 179.3,12.7 184.2,11.6 189.1,10.7 194.1,9.9 199.2,9.2 204.4,8.7 209.5,8.4 214.8,8.2 220,8.1 225.2,8.2 230.5,8.4 235.6,8.7 240.8,9.2 245.9,9.9 250.9,10.7 255.8,11.6 260.7,12.7 265.4,13.9 270,15.2 274.5,16.6 278.8,18.2 282.9,19.9 286.9,21.7 290.7,23.6 294.3,25.6 297.7,27.7 300.9,29.9 303.9,32.2 306.6,34.6 309.1,37 311.4,39.5 313.4,42.1 315.1,44.7 316.6,47.4 317.8,50.1 318.8,52.8 319.5,55.5 319.9,58.3 320,61.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="309.6,62.2 309.5,64.7 309.2,67.2 308.5,69.7 307.7,72.1 306.6,74.5 305.3,76.9 303.7,79.3 301.9,81.6 299.9,83.8 297.6,86 295.2,88.1 292.5,90.2 289.7,92.1 286.6,94 283.4,95.8 280,97.5 276.4,99.2 272.7,100.7 268.8,102.1 264.8,103.4 260.7,104.6 256.5,105.6 252.1,106.6 247.7,107.4 243.2,108.1 238.6,108.7 234,109.2 229.4,109.5 224.7,109.7 220,109.7 215.3,109.7 210.6,109.5 206,109.2 201.4,108.7 196.8,108.1 192.3,107.4 187.9,106.6 183.5,105.6 179.3,104.6 175.2,103.4 171.2,102.1 167.3,100.7 163.6,99.2 160,97.5 156.6,95.8 153.4,94 150.3,92.1 147.5,90.2 144.8,88.1 142.4,86 140.1,83.8 138.1,81.6 136.3,79.3 134.7,76.9 133.4,74.5 132.3,72.1 131.5,69.7 130.8,67.2 130.5,64.7 130.4,62.2 130.5,59.7 130.8,57.3 131.5,54.8 132.3,52.4 133.4,49.9 134.7,47.6 136.3,45.2 138.1,42.9 140.1,40.7 142.4,38.5 144.8,36.4 147.5,34.3 150.3,32.3 153.4,30.4 156.6,28.6 160,26.9 163.6,25.3 167.3,23.8 171.2,22.4 175.2,21.1 179.3,19.9 183.5,18.8 187.9,17.9 192.3,17.1 196.8,16.3 201.4,15.8 206,15.3 210.6,15 215.3,14.8 220,14.7 224.7,14.8 229.4,15 234,15.3 238.6,15.8 243.2,16.3 247.7,17.1 252.1,17.9 256.5,18.8 260.7,19.9 264.8,21.1 268.8,22.4 272.7,23.8 276.4,25.3 280,26.9 283.4,28.6 286.6,30.4 289.7,32.3 292.5,34.3 295.2,36.4 297.6,38.5 299.9,40.7 301.9,42.9 303.7,45.2 305.3,47.6 306.6,49.9 307.7,52.4 308.5,54.8 309.2,57.3 309.5,59.7 309.6,62.2" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="300,65.6 299.9,67.8 299.6,70.1 299,72.3 298.3,74.4 297.3,76.6 296.1,78.7 294.7,80.8 293.1,82.9 291.3,84.9 289.3,86.8 287.1,88.7 284.7,90.5 282.2,92.3 279.5,94 276.6,95.6 273.5,97.1 270.3,98.6 267,99.9 263.6,101.2 260,102.3 256.3,103.4 252.5,104.4 248.7,105.2 244.7,105.9 240.7,106.6 236.6,107.1 232.5,107.5 228.4,107.8 224.2,108 220,108 215.8,108 211.6,107.8 207.5,107.5 203.4,107.1 199.3,106.6 195.3,105.9 191.3,105.2 187.5,104.4 183.7,103.4 180,102.3 176.4,101.2 173,99.9 169.7,98.6 166.5,97.1 163.4,95.6 160.5,94 157.8,92.3 155.3,90.5 152.9,88.7 150.7,86.8 148.7,84.9 146.9,82.9 145.3,80.8 143.9,78.7 142.7,76.6 141.7,74.4 141,72.3 140.4,70.1 140.1,67.8 140,65.6 140.1,63.4 140.4,61.2 141,59 141.7,56.8 142.7,54.7 143.9,52.5 145.3,50.4 146.9,48.4 148.7,46.4 150.7,44.4 152.9,42.5 155.3,40.7 157.8,38.9 160.5,37.3 163.4,35.6 166.5,34.1 169.7,32.7 173,31.3 176.4,30.1 180,28.9 183.7,27.8 187.5,26.9 191.3,26 195.3,25.3 199.3,24.7 203.4,24.2 207.5,23.8 211.6,23.5 215.8,23.3 220,23.2 224.2,23.3 228.4,23.5 232.5,23.8 236.6,24.2 240.7,24.7 244.7,25.3 248.7,26 252.5,26.9 256.3,27.8 260,28.9 263.6,30.1 267,31.3 270.3,32.7 273.5,34.1 276.6,35.6 279.5,37.3 282.2,38.9 284.7,40.7 287.1,42.5 289.3,44.4 291.3,46.4 293.1,48.4 294.7,50.4 296.1,52.5 297.3,54.7 298.3,56.8 299,59 299.6,61.2 299.9,63.4 300,65.6" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="291.7,71 291.6,73 291.3,75 290.8,77 290.1,78.9 289.3,80.8 288.2,82.8 287,84.6 285.5,86.5 283.9,88.3 282.1,90 280.1,91.7 278,93.4" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="162,93.4 159.9,91.7 157.9,90 156.1,88.3 154.5,86.5 153,84.6 151.8,82.8 150.7,80.8 149.9,78.9 149.2,77 148.7,75 148.4,73 148.3,71 148.4,69 148.7,67 149.2,65.1 149.9,63.1 150.7,61.2 151.8,59.3 153,57.4 154.5,55.6 156.1,53.8 157.9,52 159.9,50.3 162,48.7 164.3,47.1 166.7,45.6 169.3,44.1 172,42.8 174.9,41.5 177.8,40.3 180.9,39.1 184.1,38.1 187.4,37.2 190.8,36.3 194.3,35.5 197.8,34.9 201.4,34.3 205.1,33.8 208.8,33.5 212.5,33.2 216.2,33.1 220,33 223.8,33.1 227.5,33.2 231.2,33.5 234.9,33.8 238.6,34.3 242.2,34.9 245.7,35.5 249.2,36.3 252.6,37.2 255.9,38.1 259.1,39.1 262.2,40.3 265.1,41.5 268,42.8 270.7,44.1 273.3,45.6 275.7,47.1 278,48.7 280.1,50.3 282.1,52 283.9,53.8 285.5,55.6 287,57.4 288.2,59.3 289.3,61.2 290.1,63.1 290.8,65.1 291.3,67 291.6,69 291.7,71" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="285.4,78 285.3,79.9 285,81.7 284.6,83.5 283.9,85.2 283.1,87 282.2,88.7 281,90.5" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="159,90.5 157.8,88.7 156.9,87 156.1,85.2 155.4,83.5 155,81.7 154.7,79.9 154.6,78 154.7,76.2 155,74.4 155.4,72.6 156.1,70.8 156.9,69.1 157.8,67.3 159,65.6 160.3,64 161.8,62.3 163.4,60.7 165.2,59.2 167.1,57.7 169.2,56.2 171.4,54.9 173.8,53.5 176.3,52.3 178.9,51.1 181.6,50 184.4,49 187.3,48 190.3,47.2 193.4,46.4 196.6,45.7 199.8,45.1 203.1,44.6 206.4,44.2 209.8,43.8 213.2,43.6 216.6,43.5 220,43.4 223.4,43.5 226.8,43.6 230.2,43.8 233.6,44.2 236.9,44.6 240.2,45.1 243.4,45.7 246.6,46.4 249.7,47.2 252.7,48 255.6,49 258.4,50 261.1,51.1 263.7,52.3 266.2,53.5 268.6,54.9 270.8,56.2 272.9,57.7 274.8,59.2 276.6,60.7 278.2,62.3 279.7,64 281,65.6 282.2,67.3 283.1,69.1 283.9,70.8 284.6,72.6 285,74.4 285.3,76.2 285.4,78" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="281.4,86.2 281.3,87.9 281,89.6 280.6,91.3" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="159.4,91.3 159,89.6 158.7,87.9 158.6,86.2 158.7,84.5 159,82.8 159.4,81.1 160,79.5 160.7,77.8 161.6,76.2 162.7,74.6 163.9,73 165.3,71.5 166.9,70 168.5,68.5 170.4,67.1 172.3,65.8 174.4,64.5 176.6,63.2 178.9,62.1 181.4,60.9 183.9,59.9 186.6,58.9 189.3,58.1 192.1,57.2 195,56.5 198,55.9 201,55.3 204.1,54.8 207.2,54.4 210.4,54.1 213.6,53.9 216.8,53.7 220,53.7 223.2,53.7 226.4,53.9 229.6,54.1 232.8,54.4 235.9,54.8 239,55.3 242,55.9 245,56.5 247.9,57.2 250.7,58.1 253.4,58.9 256.1,59.9 258.6,60.9 261.1,62.1 263.4,63.2 265.6,64.5 267.7,65.8 269.6,67.1 271.5,68.5 273.1,70 274.7,71.5 276.1,73 277.3,74.6 278.4,76.2 279.3,77.8 280,79.5 280.6,81.1 281,82.8 281.3,84.5 281.4,86.2" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="160.1,93.3 160.3,91.7 160.7,90 161.3,88.4 162,86.8 162.9,85.2 164,83.6 165.2,82.1 166.5,80.6 168,79.1 169.7,77.7 171.5,76.3 173.4,75 175.4,73.7 177.6,72.5 179.9,71.4 182.2,70.3 184.7,69.3 187.3,68.3 190,67.5 192.8,66.7 195.6,66 198.5,65.3 201.5,64.8 204.5,64.3 207.5,63.9 210.6,63.6 213.7,63.4 216.9,63.2 220,63.2 223.1,63.2 226.3,63.4 229.4,63.6 232.5,63.9 235.5,64.3 238.5,64.8 241.5,65.3 244.4,66 247.2,66.7 250,67.5 252.7,68.3 255.3,69.3 257.8,70.3 260.1,71.4 262.4,72.5 264.6,73.7 266.6,75 268.5,76.3 270.3,77.7 272,79.1 273.5,80.6 274.8,82.1 276,83.6 277.1,85.2 278,86.8 278.7,88.4 279.3,90 279.7,91.7 279.9,93.3 280,95" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="160,97 160.7,95.4 161.6,93.7 162.7,92.1 163.9,90.6 165.3,89 166.9,87.5 168.5,86.1 170.4,84.7 172.3,83.3 174.4,82 176.6,80.8 178.9,79.6 181.4,78.5 183.9,77.5 186.6,76.5 189.3,75.6 192.1,74.8 195,74.1 198,73.4 201,72.9 204.1,72.4 207.2,72 210.4,71.7 213.6,71.4 216.8,71.3 220,71.3 223.2,71.3 226.4,71.4 229.6,71.7 232.8,72 235.9,72.4 239,72.9 242,73.4 245,74.1 247.9,74.8 250.7,75.6 253.4,76.5 256.1,77.5 258.6,78.5 261.1,79.6 263.4,80.8 265.6,82 267.7,83.3 269.6,84.7 271.5,86.1 273.1,87.5 274.7,89 276.1,90.6 277.3,92.1 278.4,93.7 279.3,95.4 280,97" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="160.3,97.9 161.8,96.2 163.4,94.6 165.2,93.1 167.1,91.6 169.2,90.2 171.4,88.8 173.8,87.5 176.3,86.2 178.9,85 181.6,83.9 184.4,82.9 187.3,82 190.3,81.1 193.4,80.3 196.6,79.6 199.8,79 203.1,78.5 206.4,78.1 209.8,77.8 213.2,77.5 216.6,77.4 220,77.3 223.4,77.4 226.8,77.5 230.2,77.8 233.6,78.1 236.9,78.5 240.2,79 243.4,79.6 246.6,80.3 249.7,81.1 252.7,82 255.6,82.9 258.4,83.9 261.1,85 263.7,86.2 266.2,87.5 268.6,88.8 270.8,90.2 272.9,91.6 274.8,93.1 276.6,94.6 278.2,96.2 279.7,97.9" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="164.3,95.1 166.7,93.6 169.3,92.1 172,90.7 174.9,89.5 177.8,88.2 180.9,87.1 184.1,86.1 187.4,85.1 190.8,84.3 194.3,83.5 197.8,82.8 201.4,82.3 205.1,81.8 208.8,81.5 212.5,81.2 216.2,81 220,81 223.8,81 227.5,81.2 231.2,81.5 234.9,81.8 238.6,82.3 242.2,82.8 245.7,83.5 249.2,84.3 252.6,85.1 255.9,86.1 259.1,87.1 262.2,88.2 265.1,89.5 268,90.7 270.7,92.1 273.3,93.6 275.7,95.1" fill="none" stroke="#9cc9ea" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="319.7,161.8 315.3,164.5 310.7,167.1 305.8,169.5 300.7,171.8 295.4,174 289.9,176 284.1,177.9 278.2,179.6 272.2,181.1 266,182.5 259.6,183.6 253.2,184.7 246.7,185.5 240.1,186.1 233.4,186.6 226.7,186.9 220,187 213.3,186.9 206.6,186.6 199.9,186.1 193.3,185.5 186.8,184.7 180.4,183.6 174,182.5 167.8,181.1 161.8,179.6 155.9,177.9 150.1,176 144.6,174 139.3,171.8 134.2,169.5 129.3,167.1 124.7,164.5 120.3,161.8" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="343,141 340,144.4 336.6,147.6 332.9,150.8 328.9,153.9 324.6,156.9 320.1,159.7 315.2,162.4 310.1,165 304.7,167.4 299.1,169.7 293.3,171.8 287.3,173.8 281.1,175.5 274.8,177.1 268.3,178.6 261.6,179.8 254.8,180.9 248,181.8 241.1,182.4 234.1,182.9 227,183.2 220,183.3 213,183.2 205.9,182.9 198.9,182.4 192,181.8 185.2,180.9 178.4,179.8 171.7,178.6 165.2,177.1 158.9,175.5 152.7,173.8 146.7,171.8 140.9,169.7 135.3,167.4 129.9,165 124.8,162.4 119.9,159.7 115.4,156.9 111.1,153.9 107.1,150.8 103.4,147.6 100,144.4 97,141" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="355.6,119.1 353.9,122.8 351.9,126.5 349.4,130.1 346.7,133.7 343.5,137.1 340.1,140.5 336.3,143.8 332.2,147 327.7,150 323,152.9 318,155.7 312.8,158.4 307.2,160.9 301.5,163.2 295.5,165.4 289.3,167.4 282.9,169.2 276.4,170.9 269.7,172.4 262.8,173.7 255.9,174.7 248.8,175.6 241.7,176.3 234.5,176.8 227.3,177.1 220,177.2 212.7,177.1 205.5,176.8 198.3,176.3 191.2,175.6 184.1,174.7 177.2,173.7 170.3,172.4 163.6,170.9 157.1,169.2 150.7,167.4 144.5,165.4 138.5,163.2 132.8,160.9 127.2,158.4 122,155.7 117,152.9 112.3,150 107.8,147 103.7,143.8 99.9,140.5 96.5,137.1 93.3,133.7 90.6,130.1 88.1,126.5 86.1,122.8 84.4,119.1" fill="none" stroke="#eea66f" stroke-width="1.6" stroke-linejoin="round"/>
  <text x="220" y="212" text-anchor="middle" font-size="12" fill="currentColor">orange: K > 0     blue: K < 0</text>
</svg>
</div>

**Mean curvature and soap films.** A soap film spanning a wire frame minimises area, and a calculation of the first
variation of area shows that a surface is a critical point of area exactly when $H = 0$ everywhere: a **minimal surface**.
A minimal surface has $k_2 = -k_1$, so $K \le 0$: soap films are saddle-shaped at every point. The catenoid (the surface
spun from a hanging chain, found by Euler in 1744) and the helicoid are the classical examples.

## 19.5 The Theorema Egregium

*Level: advanced to expert.* The formula $K = (LN - M^2)/(EG - F^2)$ uses $L, M, N$, which depend on the normal $n$ and so
on how the surface sits in space. Gauss discovered something no one expected.

**Theorem 19.3 (Theorema Egregium, Gauss 1827).** The Gaussian curvature $K$ depends only on the first fundamental form
$E, F, G$ and their first and second derivatives. It is an intrinsic quantity, unchanged by any bending of the surface
that does not stretch it (any local isometry).

Gauss called it the "remarkable theorem" (*egregium*) in his *Disquisitiones generales circa superficies curvas* (General
investigations of curved surfaces), presented in 1827. He had spent years surveying the Kingdom of Hanover, and the
question of what can be measured on the Earth's surface from inside it was a practical one for him.

For coordinates with $F = 0$ (the coordinate curves meet at right angles, as for latitude and longitude) the formula is

$$
K = -\frac{1}{2\sqrt{EG}} \left[ \frac{\partial}{\partial u}\left( \frac{G_u}{\sqrt{EG}} \right) + \frac{\partial}{\partial v}\left( \frac{E_v}{\sqrt{EG}} \right) \right] .
$$

**Check on the sphere.** $E = R^2$, $G = R^2\sin^2\varphi$ with $u = \varphi$: $\sqrt{EG} = R^2\sin\varphi$, $E_v = 0$, and
$G_u/\sqrt{EG} = 2R^2\sin\varphi\cos\varphi / (R^2\sin\varphi) = 2\cos\varphi$. Its $\varphi$-derivative is $-2\sin\varphi$, so

$$
K = -\frac{1}{2R^2\sin\varphi}(-2\sin\varphi) = \frac{1}{R^2} .
$$

The same answer as before, now computed by an ant that knows only how to measure distances on the sphere.

**Check on the plane in polar coordinates.** $ds^2 = dr^2 + r^2 d\theta^2$: $E = 1$, $G = r^2$, $\sqrt{EG} = r$,
$G_r/\sqrt{EG} = 2$, whose derivative is 0. So $K = 0$, correctly, even though the coordinate lines are curved.

*Idea of the proof.* Write the second derivatives $X_{uu}, X_{uv}, X_{vv}$ in the basis $X_u, X_v, n$. Their tangential parts
have coefficients $\Gamma^k_{ij}$, the **Christoffel symbols**, which can be solved for from the dot products
$X_{uu} \cdot X_u = \tfrac12 E_u$ and the like, so they depend only on $E, F, G$ and their first derivatives. Their normal
parts are $L, M, N$. Now use that mixed third derivatives agree: $(X_{uu})_v = (X_{uv})_u$. Taking the component of this
identity along $X_u$ or $X_v$ gives an equation (the **Gauss equation**) in which $LN - M^2$ appears on one side and only
Christoffel symbols and their derivatives on the other. Dividing by $EG - F^2$ expresses $K$ in terms of $E, F, G$ alone. The
algebra fills a page or two; it is done in full in do Carmo's book (section 4-3) and in most texts on curves and surfaces.
$\square$

**Consequences.**

1. **No perfect flat map.** A map that kept all distances (up to one scale factor) between a region of the sphere and a
   region of the plane would be a local isometry, so it would carry $K = 1/R^2$ to $K = 0$. Impossible. Every map of the
   Earth or of Mars distorts something; [Chapter 16](16-Spherical-Geometry.md) showed which projections keep angles (Mercator,
   stereographic) or areas, but never both.
2. **Paper can roll but not wrap.** A flat sheet has $K = 0$. Without stretching it can become a cylinder, a cone or any
   other surface with $K = 0$ (a **developable** surface), but never a piece of a sphere. Gift-wrapping a ball always
   crumples the paper.
3. **The pizza.** A slice of pizza is flat: $K = 0$, and it stays 0 as long as the dough does not stretch. If you curl the
   crust into a U, the slice gets a nonzero principal curvature $k_1$ across its width. Since $k_1 k_2$ must remain 0, the
   other principal curvature $k_2$, along the length of the slice, is forced to be 0: the slice stays straight from crust
   to tip, and the tip no longer droops. Corrugated roofing and the folds in a sheet of card use the same principle:
   curvature in one direction gives stiffness in the other.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 220" role="img" aria-label="A pizza slice held flat droops at the tip. Folding the crust into a U makes the slice curved across its width; since Gaussian curvature must stay zero, it has to stay straight along its length, and the tip no longer droops">
  <polygon points="198.5,67.7 189.7,67.3 180.8,67.3 172,67.5 163.1,68.1 154.3,69.1 145.4,70.3 136.6,71.9 127.7,73.8 118.9,76.1 110,78.7 101.1,81.6 92.3,84.8 83.4,88.4 74.6,92.3 65.7,96.6 56.9,101.1 48,106 39.2,111.3 30.3,116.8 21.5,122.7 21.5,122.7 28,119.3 34.6,116.2 41.1,113.4 47.7,111 54.2,108.9 60.8,107.1 67.3,105.7 73.9,104.6 80.5,103.8 87,103.3 93.6,103.2 100.1,103.4 106.7,104 113.2,104.8 119.8,106 126.3,107.6 132.9,109.4 139.4,111.7 146,114.2 152.6,117" fill="#eea66f" fill-opacity="0.35" stroke="#eea66f" stroke-width="2" stroke-linejoin="round"/>
  <polyline points="152.6,117 154.8,114.6 157.1,112.1 159.4,109.6 161.7,107.2 164,104.7 166.3,102.3 168.6,99.8 170.9,97.3 173.2,94.9 175.5,92.4 177.8,89.9 180.1,87.5 182.4,85 184.7,82.5 187,80.1 189.3,77.6 191.6,75.1 193.9,72.7 196.2,70.2 198.5,67.7" fill="none" stroke="#eea66f" stroke-width="6" stroke-linejoin="round"/>
  <polyline points="21.5,122.7 28.6,118.7 35.7,115 42.9,111.6 50,108.5 57.1,105.8 64.2,103.4 71.4,101.3 78.5,99.6 85.6,98.2 92.8,97.2 99.9,96.4 107,96 114.1,95.9 121.3,96.2 128.4,96.8 135.5,97.7 142.7,99 149.8,100.6 156.9,102.5 164,104.7" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polyline points="21.5,122.7 29.2,118.1 36.9,113.7 44.6,109.7 52.3,106.1 60,102.7 67.7,99.7 75.4,97 83.1,94.7 90.8,92.7 98.5,91 106.2,89.6 113.9,88.6 121.6,87.9 129.3,87.6 137,87.6 144.7,87.9 152.4,88.5 160.1,89.5 167.8,90.8 175.5,92.4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polyline points="21.5,122.7 29.7,117.4 38,112.5 46.3,107.9 54.6,103.6 62.9,99.6 71.1,96 79.4,92.7 87.7,89.8 96,87.1 104.3,84.8 112.5,82.9 120.8,81.2 129.1,79.9 137.4,79 145.6,78.3 153.9,78 162.2,78 170.5,78.4 178.8,79.1 187,80.1" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <text x="110" y="205" text-anchor="middle" font-size="12" fill="currentColor">flat: the tip droops</text>
  <polygon points="413.2,70.6 405.7,70.9 398.1,71.3 390.4,71.9 382.5,72.6 374.6,73.3 366.6,74.2 358.5,75 350.3,75.9 342,76.7 333.6,77.5 325.1,78.3 316.6,79 308,79.7 299.3,80.2 290.6,80.6 281.8,80.9 273,80.9 264.2,80.9 255.4,80.6 246.5,80.2 246.5,80.2 253.1,83.1 259.6,85.8 266.2,88.3 272.8,90.5 279.5,92.5 286.1,94.3 292.9,95.8 299.7,97.1 306.6,98.2 313.5,99.1 320.5,99.7 327.6,100.1 334.8,100.4 342.1,100.4 349.5,100.3 357,100 364.6,99.6 372.2,99.1 380,98.4 387.9,97.7" fill="#eea66f" fill-opacity="0.35" stroke="#eea66f" stroke-width="2" stroke-linejoin="round"/>
  <polyline points="387.9,97.7 387.6,102.7 387.8,107.2 388.3,111.2 389.2,114.5 390.5,117 392.1,118.7 394,119.4 396.1,119.2 398.3,118.1 400.6,116.1 402.9,113.2 405.1,109.6 407.1,105.3 409,100.6 410.6,95.5 411.9,90.2 412.8,84.9 413.4,79.8 413.5,74.9 413.2,70.6" fill="none" stroke="#eea66f" stroke-width="6" stroke-linejoin="round"/>
  <polyline points="246.5,80.2 253.6,82.5 260.8,84.9 267.9,87.1 275,89.4 282.2,91.5 289.3,93.6 296.5,95.7 303.6,97.7 310.8,99.6 318,101.5 325.2,103.3 332.4,105.1 339.6,106.8 346.8,108.4 354.1,110 361.3,111.5 368.6,113 375.9,114.4 383.2,115.7 390.5,117" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polyline points="246.5,80.2 254.2,81.9 261.9,83.7 269.6,85.5 277.3,87.3 285,89.1 292.7,90.9 300.4,92.7 308.1,94.5 315.8,96.3 323.5,98.1 331.2,99.9 338.9,101.7 346.6,103.5 354.4,105.3 362.1,107.1 369.8,108.9 377.5,110.7 385.2,112.5 392.9,114.3 400.6,116.1" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polyline points="246.5,80.2 254.8,81.3 263.1,82.4 271.3,83.5 279.6,84.5 287.9,85.4 296.1,86.3 304.4,87.2 312.6,88 320.9,88.8 329.1,89.6 337.3,90.3 345.5,91 353.7,91.6 361.9,92.2 370.1,92.8 378.2,93.4 386.3,94 394.4,94.5 402.5,95 410.6,95.5" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <text x="330" y="205" text-anchor="middle" font-size="12" fill="currentColor">folded: stays straight</text>
</svg>
</div>

## 19.6 Geodesics

*Level: advanced.* What is a "straight line" for an ant on a surface? Two answers, which turn out to agree locally: a curve
that never turns *within the surface*, and a curve that is the shortest path between nearby points.

Let $\alpha(s)$ be a unit-speed curve on a surface. Its acceleration $\alpha''$ splits into a part along the normal $n$, which
the surface forces on it (you cannot follow a sphere without accelerating toward its centre), and a part in the tangent
plane, which is the turning the ant feels. The length of the tangential part (with a sign) is the **geodesic curvature**
$k_g$, and

$$
\kappa^2 = k_n^2 + k_g^2 .
$$

**Definition.** A **geodesic** is a curve on the surface with $k_g = 0$ everywhere: its acceleration is purely normal to the
surface.

**Example: great circles.** On the sphere $|x| = R$, take the great circle $\alpha(s) = R(\cos(s/R)\, e + \sin(s/R)\, f)$ with $e, f$
perpendicular unit vectors. Then $\alpha''(s) = -\alpha(s)/R^2$, which points along the radius, the normal of the sphere. So
great circles are geodesics. A small circle of latitude is not (except the equator): its acceleration points to the centre
of the small circle, which is not the centre of the sphere, so it has a tangential component pointing toward the pole.
That is why a long-haul flight from Toronto to Tokyo goes far north: the great circle, not the line of latitude, is
straight on the sphere ([Chapter 16](16-Spherical-Geometry.md)).

**The geodesic equations.** In coordinates, $\alpha(s) = X(u(s), v(s))$ is a geodesic exactly when

$$
u'' + \Gamma^u_{uu}u'^2 + 2\Gamma^u_{uv}u'v' + \Gamma^u_{vv}v'^2 = 0, \qquad v'' + \Gamma^v_{uu}u'^2 + 2\Gamma^v_{uv}u'v' + \Gamma^v_{vv}v'^2 = 0,
$$

using the Christoffel symbols of 19.5. These depend only on $E, F, G$, so geodesics are intrinsic: a local isometry carries
geodesics to geodesics. Being second-order differential equations, they have a unique solution for each starting point
and starting direction: from every point, in every direction, there is exactly one geodesic.

**Theorem 19.4 (geodesics are locally shortest).** Every point of a surface has a neighbourhood in which any two points are
joined by a unique shortest curve, and that curve is a geodesic. Conversely a shortest curve between two points (when one
exists) is a geodesic.

*Idea of proof.* The converse is a calculus-of-variations computation: if a curve is shortest, the first variation of length
for every small deformation is zero, and integrating by parts shows this forces $k_g = 0$. For the first part one builds
**geodesic polar coordinates** around the point, using the geodesics from it as radial lines; in them $ds^2 = dr^2 + G\,d\theta^2$
(Gauss's lemma: the circles $r = \text{const}$ meet the radial geodesics at right angles), and then any curve from the centre
to the circle of radius $r$ has length at least $\int dr = r$, with equality only along a radial geodesic. $\square$

"Locally" matters: on a sphere a great circle stops being shortest once it passes the antipodal point, and on a cylinder
there are infinitely many geodesics between two points (helices winding different numbers of times).

**Worked example: the cylinder by unrolling.** The cylinder is locally isometric to the plane, and isometries carry
geodesics to geodesics, so the geodesics on a cylinder are the images of straight lines on the unrolled sheet: vertical
lines, horizontal circles and helices.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 220" role="img" aria-label="Left: a sheet of paper with straight lines drawn at a slant. Right: the same sheet rolled into a cylinder; the straight lines become helices. Rolling does not change lengths, so the shortest paths on the cylinder are exactly these helices, together with circles and vertical lines">
  <polygon points="20,30 200,30 200,190 20,190" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="20,190 20.9,189.6 21.8,189.2 22.7,188.8 23.6,188.4 24.5,188 25.4,187.6 26.3,187.2 27.2,186.8 28.1,186.4 29,185.9 29.9,185.5 30.8,185.1 31.7,184.7 32.6,184.3 33.5,183.9 34.4,183.5 35.3,183.1 36.2,182.7 37.1,182.3 38,181.9 38.9,181.5 39.8,181.1 40.7,180.7 41.6,180.3 42.5,179.9 43.4,179.5 44.3,179.1 45.2,178.7 46.1,178.3 47,177.8 47.9,177.4 48.8,177 49.7,176.6 50.6,176.2 51.5,175.8 52.4,175.4 53.3,175 54.2,174.6 55.1,174.2 56,173.8 56.9,173.4 57.8,173 58.7,172.6 59.6,172.2 60.5,171.8 61.4,171.4 62.3,171 63.2,170.6 64.1,170.2 65,169.8 65.9,169.3 66.8,168.9 67.7,168.5 68.6,168.1 69.5,167.7 70.4,167.3 71.3,166.9 72.2,166.5 73.1,166.1 74,165.7 74.9,165.3 75.8,164.9 76.7,164.5 77.6,164.1 78.5,163.7 79.4,163.3 80.3,162.9 81.2,162.5 82.1,162.1 83,161.7 83.9,161.2 84.8,160.8 85.7,160.4 86.6,160 87.5,159.6 88.4,159.2 89.3,158.8 90.2,158.4 91.1,158 92,157.6 92.9,157.2 93.8,156.8 94.7,156.4 95.6,156 96.5,155.6 97.4,155.2 98.3,154.8 99.2,154.4 100.1,154 101,153.6 101.9,153.1 102.8,152.7 103.7,152.3 104.6,151.9 105.5,151.5 106.4,151.1 107.3,150.7 108.2,150.3 109.1,149.9 110,149.5 110.9,149.1 111.8,148.7 112.7,148.3 113.6,147.9 114.5,147.5 115.4,147.1 116.3,146.7 117.2,146.3 118.1,145.9 119,145.4 119.9,145 120.8,144.6 121.7,144.2 122.6,143.8 123.5,143.4 124.4,143 125.3,142.6 126.2,142.2 127.1,141.8 128,141.4 128.9,141 129.8,140.6 130.7,140.2 131.6,139.8 132.5,139.4 133.4,139 134.3,138.6 135.2,138.2 136.1,137.8 137,137.3 137.9,136.9 138.8,136.5 139.7,136.1 140.6,135.7 141.5,135.3 142.4,134.9 143.3,134.5 144.2,134.1 145.1,133.7 146,133.3 146.9,132.9 147.8,132.5 148.7,132.1 149.6,131.7 150.5,131.3 151.4,130.9 152.3,130.5 153.2,130.1 154.1,129.7 155,129.2 155.9,128.8 156.8,128.4 157.7,128 158.6,127.6 159.5,127.2 160.4,126.8 161.3,126.4 162.2,126 163.1,125.6 164,125.2 164.9,124.8 165.8,124.4 166.7,124 167.6,123.6 168.5,123.2 169.4,122.8 170.3,122.4 171.2,122 172.1,121.6 173,121.1 173.9,120.7 174.8,120.3 175.7,119.9 176.6,119.5 177.5,119.1 178.4,118.7 179.3,118.3 180.2,117.9 181.1,117.5 182,117.1 182.9,116.7 183.8,116.3 184.7,115.9 185.6,115.5 186.5,115.1 187.4,114.7 188.3,114.3 189.2,113.9 190.1,113.5 191,113 191.9,112.6 192.8,112.2 193.7,111.8 194.6,111.4 195.5,111 196.4,110.6 197.3,110.2 198.2,109.8 199.1,109.4 200,109" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <polyline points="20,109 20.9,108.6 21.8,108.2 22.7,107.8 23.6,107.4 24.5,107 25.4,106.6 26.3,106.2 27.2,105.8 28.1,105.4 29,104.9 29.9,104.5 30.8,104.1 31.7,103.7 32.6,103.3 33.5,102.9 34.4,102.5 35.3,102.1 36.2,101.7 37.1,101.3 38,100.9 38.9,100.5 39.8,100.1 40.7,99.7 41.6,99.3 42.5,98.9 43.4,98.5 44.3,98.1 45.2,97.7 46.1,97.3 47,96.8 47.9,96.4 48.8,96 49.7,95.6 50.6,95.2 51.5,94.8 52.4,94.4 53.3,94 54.2,93.6 55.1,93.2 56,92.8 56.9,92.4 57.8,92 58.7,91.6 59.6,91.2 60.5,90.8 61.4,90.4 62.3,90 63.2,89.6 64.1,89.2 65,88.8 65.9,88.3 66.8,87.9 67.7,87.5 68.6,87.1 69.5,86.7 70.4,86.3 71.3,85.9 72.2,85.5 73.1,85.1 74,84.7 74.9,84.3 75.8,83.9 76.7,83.5 77.6,83.1 78.5,82.7 79.4,82.3 80.3,81.9 81.2,81.5 82.1,81.1 83,80.7 83.9,80.2 84.8,79.8 85.7,79.4 86.6,79 87.5,78.6 88.4,78.2 89.3,77.8 90.2,77.4 91.1,77 92,76.6 92.9,76.2 93.8,75.8 94.7,75.4 95.6,75 96.5,74.6 97.4,74.2 98.3,73.8 99.2,73.4 100.1,73 101,72.6 101.9,72.1 102.8,71.7 103.7,71.3 104.6,70.9 105.5,70.5 106.4,70.1 107.3,69.7 108.2,69.3 109.1,68.9 110,68.5 110.9,68.1 111.8,67.7 112.7,67.3 113.6,66.9 114.5,66.5 115.4,66.1 116.3,65.7 117.2,65.3 118.1,64.9 119,64.4 119.9,64 120.8,63.6 121.7,63.2 122.6,62.8 123.5,62.4 124.4,62 125.3,61.6 126.2,61.2 127.1,60.8 128,60.4 128.9,60 129.8,59.6 130.7,59.2 131.6,58.8 132.5,58.4 133.4,58 134.3,57.6 135.2,57.2 136.1,56.8 137,56.3 137.9,55.9 138.8,55.5 139.7,55.1 140.6,54.7 141.5,54.3 142.4,53.9 143.3,53.5 144.2,53.1 145.1,52.7 146,52.3 146.9,51.9 147.8,51.5 148.7,51.1 149.6,50.7 150.5,50.3 151.4,49.9 152.3,49.5 153.2,49.1 154.1,48.7 155,48.2 155.9,47.8 156.8,47.4 157.7,47 158.6,46.6 159.5,46.2 160.4,45.8 161.3,45.4 162.2,45 163.1,44.6 164,44.2 164.9,43.8 165.8,43.4 166.7,43 167.6,42.6 168.5,42.2 169.4,41.8 170.3,41.4 171.2,41 172.1,40.6 173,40.1 173.9,39.7 174.8,39.3 175.7,38.9 176.6,38.5 177.5,38.1 178.4,37.7 179.3,37.3 180.2,36.9 181.1,36.5 182,36.1 182.9,35.7 183.8,35.3 184.7,34.9 185.6,34.5 186.5,34.1 187.4,33.7 188.3,33.3 189.2,32.9 190.1,32.5 191,32 191.9,31.6 192.8,31.2 193.7,30.8 194.6,30.4 195.5,30" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="215" y1="110" x2="250" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="250,110 242.6,113.1 242.6,106.9" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <ellipse cx="330" cy="30" rx="45.8" ry="12.9" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="375.8" y1="190" x2="375.8" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <line x1="284.2" y1="190" x2="284.2" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 284.2 190 A 45.8 12.9 0 0 0 375.8 190" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polyline points="284.2,190 284.2,190 284.4,190 284.6,190 285,190 285.4,190 286,190 286.6,189.9 287.4,189.9 288.2,189.8 289.2,189.8 290.2,189.7 291.3,189.6 292.5,189.5 293.8,189.4 295.1,189.3 296.6,189.1 298.1,188.9 299.7,188.7 301.3,188.5 303.1,188.3 304.8,188 306.7,187.7 308.6,187.4 310.5,187.1 312.5,186.7 314.5,186.3 316.5,185.9 318.6,185.5 320.7,185 322.8,184.5 325,184 327.1,183.4 329.3,182.8 331.4,182.2 333.6,181.6 335.7,180.9 337.9,180.2 340,179.5 342.1,178.7 344.2,178 346.2,177.2 348.2,176.3 350.2,175.5 352.1,174.6 353.9,173.7 355.8,172.7 357.5,171.8 359.2,170.8 360.8,169.8 362.4,168.7 363.9,167.7 365.3,166.6 366.7,165.5 367.9,164.4 369.1,163.3 370.2,162.2 371.2,161 372.1,159.9 372.9,158.7 373.6,157.5 374.2,156.3 374.7,155.1 375.2,153.9 375.5,152.7 375.7,151.5 375.8,150.3" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <polyline points="375.8,149.1 375.7,147.9 375.6,146.7 375.3,145.5 374.9,144.3 374.4,143.1 373.8,141.9 373.1,140.7 372.3,139.5 371.5,138.3 370.5,137.2 369.5,136.1 368.3,134.9 367.1,133.8 365.8,132.7 364.4,131.7 362.9,130.6 361.4,129.6 359.8,128.6 358.1,127.6 356.4,126.6 354.6,125.7 352.7,124.7 350.8,123.8 348.9,123 346.9,122.1 344.8,121.3 342.8,120.5 340.7,119.8 338.6,119 336.5,118.3 334.3,117.6 332.2,117 330,116.4 327.8,115.8 325.7,115.2 323.5,114.7 321.4,114.2 319.3,113.7 317.2,113.2 315.2,112.8 313.1,112.4 311.1,112 309.2,111.7 307.3,111.4 305.4,111.1 303.6,110.8 301.9,110.6 300.2,110.3 298.6,110.1 297.1,110 295.6,109.8 294.2,109.6 292.9,109.5 291.7,109.4 290.5,109.3 289.5,109.2 288.5,109.2 287.7,109.1 286.9,109.1 286.2,109.1 285.6,109 285.1,109 284.7,109 284.4,109 284.3,109 284.2,109" fill="none" stroke="#eea66f" stroke-width="1.2" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polyline points="284.2,109 284.3,109 284.5,109 284.8,109 285.3,109 285.8,109 286.4,108.9 287.1,108.9 287.9,108.9 288.8,108.8 289.8,108.7 290.9,108.6 292.1,108.6 293.3,108.4 294.7,108.3 296.1,108.2 297.6,108 299.2,107.8 300.8,107.6 302.5,107.4 304.2,107.1 306.1,106.8 307.9,106.5 309.8,106.2 311.8,105.8 313.8,105.5 315.8,105.1 317.9,104.6 320,104.2 322.1,103.7 324.3,103.2 326.4,102.6 328.6,102 330.7,101.4 332.9,100.8 335,100.1 337.2,99.5 339.3,98.7 341.4,98 343.5,97.2 345.5,96.4 347.5,95.6 349.5,94.7 351.4,93.9 353.3,93 355.2,92 356.9,91.1 358.7,90.1 360.3,89.1 361.9,88.1 363.4,87 364.9,86 366.2,84.9 367.5,83.8 368.7,82.7 369.8,81.6 370.8,80.4 371.8,79.3 372.6,78.1 373.4,76.9 374,75.7 374.6,74.5 375,73.3 375.4,72.1 375.6,70.9 375.8,69.7 375.8,68.5" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <polyline points="375.8,67.3 375.6,66.1 375.4,64.9 375,63.7 374.6,62.5 374,61.3 373.4,60.1 372.6,58.9 371.8,57.7 370.8,56.6 369.8,55.4 368.7,54.3 367.5,53.2 366.2,52.1 364.9,51 363.4,50 361.9,48.9 360.3,47.9 358.7,46.9 356.9,45.9 355.2,45 353.3,44 351.4,43.1 349.5,42.3 347.5,41.4 345.5,40.6 343.5,39.8 341.4,39 339.3,38.3 337.2,37.5 335,36.9 332.9,36.2 330.7,35.6 328.6,35 326.4,34.4 324.3,33.8 322.1,33.3 320,32.8 317.9,32.4 315.8,31.9 313.8,31.5 311.8,31.2 309.8,30.8 307.9,30.5 306.1,30.2 304.2,29.9 302.5,29.6 300.8,29.4 299.2,29.2 297.6,29 296.1,28.8 294.7,28.7 293.3,28.6 292.1,28.4 290.9,28.4 289.8,28.3 288.8,28.2 287.9,28.1 287.1,28.1 286.4,28.1 285.8,28 285.3,28 284.8,28" fill="none" stroke="#eea66f" stroke-width="1.2" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polyline points="284.2,190 284.3,190 284.5,190 284.8,190 285.3,190 285.8,190 286.4,189.9 287.1,189.9 287.9,189.9 288.8,189.8 289.8,189.7 290.9,189.6 292.1,189.6 293.3,189.4 294.7,189.3 296.1,189.2 297.6,189 299.2,188.8 300.8,188.6 302.5,188.4 304.2,188.1 306.1,187.8 307.9,187.5 309.8,187.2 311.8,186.8 313.8,186.5 315.8,186.1 317.9,185.6 320,185.2 322.1,184.7 324.3,184.2 326.4,183.6 328.6,183 330.7,182.4 332.9,181.8 335,181.1 337.2,180.5 339.3,179.7 341.4,179 343.5,178.2 345.5,177.4 347.5,176.6 349.5,175.7 351.4,174.9 353.3,174 355.2,173 356.9,172.1 358.7,171.1 360.3,170.1 361.9,169.1 363.4,168 364.9,167 366.2,165.9 367.5,164.8 368.7,163.7 369.8,162.6 370.8,161.4 371.8,160.3 372.6,159.1 373.4,157.9 374,156.7 374.6,155.5 375,154.3 375.4,153.1 375.6,151.9 375.8,150.7 375.8,149.5" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <polyline points="375.8,148.3 375.6,147.1 375.4,145.9 375,144.7 374.6,143.5 374,142.3 373.4,141.1 372.6,139.9 371.8,138.7 370.8,137.6 369.8,136.4 368.7,135.3 367.5,134.2 366.2,133.1 364.9,132 363.4,131 361.9,129.9 360.3,128.9 358.7,127.9 356.9,126.9 355.2,126 353.3,125 351.4,124.1 349.5,123.3 347.5,122.4 345.5,121.6 343.5,120.8 341.4,120 339.3,119.3 337.2,118.5 335,117.9 332.9,117.2 330.7,116.6 328.6,116 326.4,115.4 324.3,114.8 322.1,114.3 320,113.8 317.9,113.4 315.8,112.9 313.8,112.5 311.8,112.2 309.8,111.8 307.9,111.5 306.1,111.2 304.2,110.9 302.5,110.6 300.8,110.4 299.2,110.2 297.6,110 296.1,109.8 294.7,109.7 293.3,109.6 292.1,109.4 290.9,109.4 289.8,109.3 288.8,109.2 287.9,109.1 287.1,109.1 286.4,109.1 285.8,109 285.3,109 284.8,109 284.5,109 284.3,109 284.2,109" fill="none" stroke="#eea66f" stroke-width="1.2" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polyline points="284.2,109 284.3,109 284.4,109 284.7,109 285.1,109 285.6,109 286.2,108.9 286.9,108.9 287.7,108.9 288.5,108.8 289.5,108.8 290.5,108.7 291.7,108.6 292.9,108.5 294.2,108.4 295.6,108.2 297.1,108 298.6,107.9 300.2,107.7 301.9,107.4 303.6,107.2 305.4,106.9 307.3,106.6 309.2,106.3 311.1,106 313.1,105.6 315.2,105.2 317.2,104.8 319.3,104.3 321.4,103.8 323.5,103.3 325.7,102.8 327.8,102.2 330,101.6 332.2,101 334.3,100.4 336.5,99.7 338.6,99 340.7,98.2 342.8,97.5 344.8,96.7 346.9,95.9 348.9,95 350.8,94.2 352.7,93.3 354.6,92.3 356.4,91.4 358.1,90.4 359.8,89.4 361.4,88.4 362.9,87.4 364.4,86.3 365.8,85.3 367.1,84.2 368.3,83.1 369.5,81.9 370.5,80.8 371.5,79.7 372.3,78.5 373.1,77.3 373.8,76.1 374.4,74.9 374.9,73.7 375.3,72.5 375.6,71.3 375.7,70.1 375.8,68.9" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <polyline points="375.8,67.7 375.7,66.5 375.5,65.3 375.2,64.1 374.7,62.9 374.2,61.7 373.6,60.5 372.9,59.3 372.1,58.1 371.2,57 370.2,55.8 369.1,54.7 367.9,53.6 366.7,52.5 365.3,51.4 363.9,50.3 362.4,49.3 360.8,48.2 359.2,47.2 357.5,46.2 355.8,45.3 353.9,44.3 352.1,43.4 350.2,42.5 348.2,41.7 346.2,40.8 344.2,40 342.1,39.3 340,38.5 337.9,37.8 335.7,37.1 333.6,36.4 331.4,35.8 329.3,35.2 327.1,34.6 325,34 322.8,33.5 320.7,33 318.6,32.5 316.5,32.1 314.5,31.7 312.5,31.3 310.5,30.9 308.6,30.6 306.7,30.3 304.8,30 303.1,29.7 301.3,29.5 299.7,29.3 298.1,29.1 296.6,28.9 295.1,28.7 293.8,28.6 292.5,28.5 291.3,28.4 290.2,28.3 289.2,28.2 288.2,28.2 287.4,28.1 286.6,28.1 286,28 285.4,28 285,28" fill="none" stroke="#eea66f" stroke-width="1.2" stroke-dasharray="4 3" stroke-linejoin="round"/>
  <polyline points="284.2,190 284.3,190 284.4,190 284.7,190 285.1,190 285.6,190 286.2,189.9 286.9,189.9 287.7,189.9 288.5,189.8 289.5,189.8 290.5,189.7 291.7,189.6 292.9,189.5 294.2,189.4 295.6,189.2 297.1,189 298.6,188.9 300.2,188.7 301.9,188.4 303.6,188.2 305.4,187.9 307.3,187.6 309.2,187.3 311.1,187 313.1,186.6 315.2,186.2 317.2,185.8 319.3,185.3 321.4,184.8 323.5,184.3 325.7,183.8 327.8,183.2 330,182.6 332.2,182 334.3,181.4 336.5,180.7 338.6,180 340.7,179.2 342.8,178.5 344.8,177.7 346.9,176.9 348.9,176 350.8,175.2 352.7,174.3 354.6,173.3 356.4,172.4 358.1,171.4 359.8,170.4 361.4,169.4 362.9,168.4 364.4,167.3 365.8,166.3 367.1,165.2 368.3,164.1 369.5,162.9 370.5,161.8 371.5,160.7 372.3,159.5 373.1,158.3 373.8,157.1 374.4,155.9 374.9,154.7 375.3,153.5 375.6,152.3 375.7,151.1 375.8,149.9" fill="none" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <polyline points="375.8,148.7 375.7,147.5 375.5,146.3 375.2,145.1 374.7,143.9 374.2,142.7 373.6,141.5 372.9,140.3 372.1,139.1 371.2,138 370.2,136.8 369.1,135.7 367.9,134.6 366.7,133.5 365.3,132.4 363.9,131.3 362.4,130.3 360.8,129.2 359.2,128.2 357.5,127.2 355.8,126.3 353.9,125.3 352.1,124.4 350.2,123.5 348.2,122.7 346.2,121.8 344.2,121 342.1,120.3 340,119.5 337.9,118.8 335.7,118.1 333.6,117.4 331.4,116.8 329.3,116.2 327.1,115.6 325,115 322.8,114.5 320.7,114 318.6,113.5 316.5,113.1 314.5,112.7 312.5,112.3 310.5,111.9 308.6,111.6 306.7,111.3 304.8,111 303.1,110.7 301.3,110.5 299.7,110.3 298.1,110.1 296.6,109.9 295.1,109.7 293.8,109.6 292.5,109.5 291.3,109.4 290.2,109.3 289.2,109.2 288.2,109.2 287.4,109.1 286.6,109.1 286,109 285.4,109 285,109 284.6,109 284.4,109 284.2,109 284.2,109" fill="none" stroke="#eea66f" stroke-width="1.2" stroke-dasharray="4 3" stroke-linejoin="round"/>
</svg>
</div>

On a cylinder of radius 1, what is the shortest path from the point at angle 0 and height 0 to the point at angle $\pi$ and
height 2? Unroll: the second point is at horizontal distance $\pi$ (going either way around) and height 2, so the shortest
path is a half turn of a helix of length $\sqrt{\pi^2 + 4} \approx 3.724$. *Check:* going straight up and then around the
circle would cost $2 + \pi \approx 5.14$.

**Clairaut's relation.** On a surface of revolution (spin a curve about the $z$-axis), let $r$ be the distance from the axis
and $\psi$ the angle a geodesic makes with the circle of latitude. Then along every geodesic

$$
r \cos\psi = \text{constant} .
$$

(It is a conservation law, of angular momentum about the axis, coming from the rotational symmetry; it follows from the
geodesic equation for the angle coordinate.) On a sphere it says, for example, that a great circle that starts at the
equator at angle $\psi_0$ reaches a highest latitude where $r = R\cos\psi_0$, the point where it runs due east.

## 19.7 The Gauss–Bonnet theorem

*Level: advanced to expert.* In [Chapter 16](16-Spherical-Geometry.md), Girard's theorem said that a triangle on a sphere of
radius $R$ with angles $\alpha, \beta, \gamma$ has area $R^2(\alpha + \beta + \gamma - \pi)$. Write this as

$$
\iint_T K\, dA = \frac{1}{R^2} \cdot \text{area} = \alpha + \beta + \gamma - \pi .
$$

In [Chapter 17](17-Hyperbolic-Geometry.md), a hyperbolic triangle ($K = -1$) has area $\pi - (\alpha + \beta + \gamma)$, which is the same
formula. And in the plane ($K = 0$), $\alpha + \beta + \gamma = \pi$. Gauss saw that one theorem lies behind all three.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 300" role="img" aria-label="A sphere with the triangle cut out by three great circles through the north pole and the equator: one eighth of the sphere. Each of its three angles is a right angle, so the angle sum is 270 degrees, and the excess of 90 degrees equals the area divided by the square of the radius">
  <circle cx="220" cy="150" r="110" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="304.3,179.9 302.4,180.8 300.4,181.7 298.5,182.6 296.4,183.4 294.3,184.3 292.2,185.1 290,185.9 287.7,186.6 285.4,187.4 283.1,188.1 280.7,188.8 278.3,189.4 275.8,190.1 273.3,190.7 270.8,191.2 268.2,191.8 265.6,192.3 263,192.8 260.3,193.3 257.6,193.7 254.9,194.1 252.2,194.5 249.4,194.8 246.6,195.1 243.8,195.4 241,195.6 238.2,195.9 235.3,196 232.5,196.2 229.6,196.3 226.7,196.4 223.8,196.5 221,196.5 218.1,196.5 215.2,196.4 212.3,196.4 209.5,196.3 206.6,196.1 203.7,196 200.9,195.8 198.1,195.6 195.3,195.3 192.5,195 189.7,194.7 186.9,194.3 184.2,194 181.5,193.5 178.8,193.1 176.1,192.6 173.5,192.1 170.9,191.6 168.4,191 165.8,190.5 163.3,189.8 160.9,189.2 158.5,188.5 156.1,187.8 153.8,187.1 151.5,186.4 149.3,185.6 149.3,185.6 149.3,183 149.4,180.3 149.5,177.7 149.7,175 149.9,172.3 150.2,169.6 150.5,166.8 150.8,164.1 151.2,161.4 151.7,158.6 152.2,155.8 152.8,153.1 153.3,150.3 154,147.5 154.7,144.7 155.4,142 156.2,139.2 157,136.5 157.9,133.7 158.8,131 159.7,128.3 160.7,125.6 161.7,122.9 162.8,120.2 163.9,117.6 165.1,114.9 166.2,112.3 167.5,109.8 168.7,107.2 170,104.7 171.3,102.2 172.7,99.7 174.1,97.3 175.5,94.9 177,92.6 178.4,90.3 180,88 181.5,85.8 183.1,83.6 184.6,81.5 186.3,79.4 187.9,77.3 189.6,75.3 191.2,73.4 192.9,71.5 194.7,69.7 196.4,67.9 198.2,66.2 199.9,64.5 201.7,62.9 203.5,61.4 205.3,59.9 207.1,58.5 208.9,57.1 210.8,55.8 212.6,54.6 214.5,53.4 216.3,52.3 218.1,51.3 220,50.3 220,50.3 222.2,51.1 224.4,52 226.6,53 228.8,54 231,55.1 233.2,56.2 235.4,57.4 237.5,58.7 239.7,60 241.8,61.4 243.9,62.9 246,64.4 248.1,66 250.2,67.6 252.2,69.3 254.3,71.1 256.3,72.9 258.3,74.7 260.2,76.6 262.1,78.6 264,80.6 265.9,82.7 267.7,84.8 269.5,86.9 271.3,89.1 273,91.3 274.7,93.6 276.4,95.9 278,98.3 279.6,100.6 281.1,103.1 282.6,105.5 284.1,108 285.5,110.5 286.9,113 288.2,115.6 289.4,118.2 290.7,120.8 291.8,123.4 293,126 294.1,128.7 295.1,131.4 296.1,134.1 297,136.7 297.9,139.5 298.7,142.2 299.4,144.9 300.1,147.6 300.8,150.3 301.4,153.1 301.9,155.8 302.4,158.5 302.9,161.2 303.2,163.9 303.5,166.6 303.8,169.3 304,172 304.1,174.6 304.2,177.3 304.3,179.9" fill="#eea66f" fill-opacity="0.4" stroke="#eea66f" stroke-width="2.5" stroke-linejoin="round"/>
  <polyline points="304.3,179.9 300.4,181.7 296.4,183.4 292.2,185.1 287.7,186.6 283.1,188.1 278.3,189.4 273.3,190.7 268.2,191.8 263,192.8 257.6,193.7 252.2,194.5 246.6,195.1 241,195.6 235.3,196 229.6,196.3 223.8,196.5 218.1,196.5 212.3,196.4 206.6,196.1 200.9,195.8 195.3,195.3 189.7,194.7 184.2,194 178.8,193.1 173.5,192.1 168.4,191 163.3,189.8 158.5,188.5 153.8,187.1 149.3,185.6 145,184 140.9,182.3 137,180.5 133.3,178.6 129.9,176.7 126.7,174.6 123.8,172.5 121.1,170.4 118.7,168.2 116.6,165.9 114.8,163.6 113.3,161.2 112,158.9 111.1,156.5 110.4,154.1 110.1,151.6" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polyline points="330,150.8 329.7,153.2 329.2,155.7 328.3,158.1 327.2,160.5 325.7,162.8 324,165.1 322,167.4 319.7,169.6 317.1,171.8 314.3,173.9 311.2,176 307.8,178 304.3,179.9" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <circle cx="304.3" cy="179.9" r="4" fill="currentColor"/>
  <text x="298.3" y="197.9" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <circle cx="149.3" cy="185.6" r="4" fill="currentColor"/>
  <text x="163.3" y="195.6" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <circle cx="220" cy="50.3" r="4" fill="currentColor"/>
  <text x="220" y="40.3" text-anchor="middle" font-size="13" fill="currentColor">N</text>
</svg>
</div>

**Theorem 19.5 (local Gauss–Bonnet for geodesic triangles; Gauss 1827).** If $T$ is a triangle on a surface whose sides
are geodesics, contained in a region covered by one chart, with interior angles $\alpha, \beta, \gamma$, then

$$
\iint_T K \, dA = \alpha + \beta + \gamma - \pi .
$$

So on a surface with $K > 0$ geodesic triangles have angle sum more than $\pi$, with $K < 0$ less than $\pi$, and the excess
measures the total curvature inside.

*Proof sketch.* Put the vertex $A$ at the centre of geodesic polar coordinates $(r, \theta)$, so $ds^2 = dr^2 + G\,d\theta^2$.
With $E = 1$, $F = 0$ the Theorema Egregium formula simplifies to $K = -(\sqrt{G})_{rr}/\sqrt{G}$, and the area element is
$\sqrt{G}\, dr\, d\theta$. The sides $AB$ and $AC$ are radial geodesics at angles $\theta = 0$ and $\theta = \alpha$, and the
third side is $r = \rho(\theta)$. So

$$
\iint_T K\, dA = \int_0^\alpha \int_0^{\rho(\theta)} -(\sqrt{G})_{rr}\, dr\, d\theta = \int_0^\alpha \Bigl(1 - (\sqrt{G})_r\bigl(\rho(\theta), \theta\bigr)\Bigr)\, d\theta,
$$

using that $(\sqrt{G})_r \to 1$ as $r \to 0$ (near the centre the coordinates look like ordinary polar coordinates). The first
term integrates to $\alpha$. For the second, let $\psi(\theta)$ be the angle between the side $BC$ and the radial geodesic
through its point at angle $\theta$. A computation with the geodesic equations (it is the formula for the geodesic curvature
of $BC$ in these coordinates) shows that because $BC$ is a geodesic, $d\psi = -(\sqrt{G})_r\, d\theta$ along it. So the second
term is the total change of $\psi$ from $B$ to $C$. At $B$ the side $BC$ makes angle $\pi - \beta$ with the outgoing radial
direction, and at $C$ the angle is $\gamma$, so the change is $\gamma - (\pi - \beta)$. Altogether,
$\alpha + \gamma - \pi + \beta$. $\square$

*Check on the sphere.* The triangle in the figure, with vertices at the north pole and two points on the equator a quarter
turn apart, is one eighth of the sphere: area $4\pi R^2/8 = \pi R^2/2$, so $\iint K\,dA = \pi/2$. Its three angles are right
angles, and $3 \cdot \tfrac{\pi}{2} - \pi = \tfrac{\pi}{2}$.

**The global theorem.** Now cover a closed surface $S$ (compact, without boundary, like a sphere or a torus) by geodesic
triangles: a triangulation with $V$ vertices, $E$ edges and $F$ triangles. Add up the local theorem over all the triangles:

$$
\iint_S K\, dA = \sum_{\text{triangles}} (\alpha + \beta + \gamma - \pi) = 2\pi V - \pi F,
$$

because the angles around each vertex add up to $2\pi$. Each triangle has 3 edges and each edge borders 2 triangles, so
$3F = 2E$, i.e. $\pi F = 2\pi E - 2\pi F$. Substituting,

$$
\iint_S K \, dA = 2\pi V - 2\pi E + 2\pi F = 2\pi (V - E + F) .
$$

**Theorem 19.6 (Gauss–Bonnet).** For every compact surface $S$ without boundary,

$$
\iint_S K \, dA = 2\pi\, \chi(S),
$$

where $\chi(S) = V - E + F$ is the **Euler characteristic** of any triangulation of $S$.

(The sketch above assumed the surface can be cut into small geodesic triangles, which is true but takes work; the full
proof, also covering surfaces with boundary and curved edges, is in do Carmo, section 4-5.)

This is remarkable twice over. The left side is pure geometry: bend the surface, and $K$ changes from point to point. The
right side is pure topology: it does not change under any deformation at all. So however you dent a sphere, its total
curvature stays $2\pi \cdot 2 = 4\pi$. And Euler's formula $V - E + F = 2$ for polyhedra ([Chapter 11](11-Solid-Geometry.md)) appears as
a fact about curvature: a convex polyhedron is a "sphere" whose curvature is concentrated at the corners, where the
**angle defect** ($2\pi$ minus the sum of face angles at the vertex) plays the role of $\iint K\,dA$. Descartes's theorem
says the defects of a convex polyhedron add up to $4\pi$. *Check on a cube:* each corner has three right angles, defect
$2\pi - 3\pi/2 = \pi/2$, and eight corners give $4\pi$.

**Worked example: the torus.** With the formulas from 19.4, $K\, dA = \dfrac{\cos v}{r(R + r\cos v)} \cdot r(R + r\cos v)\, du\, dv = \cos v\, du\, dv$, and

$$
\iint K\, dA = \int_0^{2\pi}\int_0^{2\pi} \cos v \, du\, dv = 0 = 2\pi \chi(\text{torus}) .
$$

The positive curvature outside exactly cancels the negative curvature around the hole, as it must, since the torus has
$\chi = 0$. A surface with $g$ holes has $\chi = 2 - 2g$; so a two-holed torus has total curvature $-4\pi$, and *every* metric on
it, however it is bent, has some negative curvature.

**Consequences.**

- No surface shaped like a torus can have $K > 0$ everywhere, or $K < 0$ everywhere: the integral must be 0.
- A closed surface with $K > 0$ everywhere has $\chi > 0$, so it is a sphere (among orientable surfaces).
- In [Chapter 20](20-Manifolds-and-Riemannian-Geometry.md) the uniformization theorem goes further: every closed surface
  carries a metric of *constant* curvature, and Gauss–Bonnet fixes its sign by $\chi$.

## A short history

Curvature of plane curves was studied by Huygens (in his 1673 work on pendulum clocks), Newton and Leibniz; Euler (in the 1760s)
found the principal curvatures of surfaces, and Monge's school in Paris developed the geometry of surfaces in space.
Frenet (thesis 1847) and Serret (1851) found the moving-frame equations independently. Gauss's *Disquisitiones generales
circa superficies curvas* (1827) introduced the first fundamental form, Gaussian curvature, the Theorema Egregium and the
geodesic triangle theorem; Pierre Ossian Bonnet extended it to regions with curved boundary (1848), and the link to the
Euler characteristic of a closed surface came later in the nineteenth century. The global theorem in all dimensions
(Allendoerfer and Weil 1943, Chern 1944) became a cornerstone of modern geometry. Gauss's student Riemann took the next
step, to curved spaces of any dimension; that is [Chapter 20](20-Manifolds-and-Riemannian-Geometry.md).

## Check yourself

??? question "1. Find the length of one turn of the helix $(\cos t, \sin t, t)$, and of the catenary $y = \cosh x$ from $x = 0$ to $x = a$."

    For the helix, $|\gamma'| = |(-\sin t, \cos t, 1)| = \sqrt2$, so one turn ($0 \le t \le 2\pi$) has length $2\pi\sqrt2 \approx 8.886$.
    For the catenary $(x, \cosh x)$, $|\gamma'| = \sqrt{1 + \sinh^2 x} = \cosh x$, so the length is $\int_0^a \cosh x\, dx = \sinh a$.

??? question "2. Find the curvature and the radius of curvature of $y = x^2$ at $(1, 1)$, and of $y = \sin x$ at $x = \pi/2$."

    For $(t, t^2)$: $\kappa = 2/(1 + 4t^2)^{3/2}$, at $t = 1$: $2/5^{3/2} \approx 0.179$, radius $5^{3/2}/2 \approx 5.59$.
    For $(t, \sin t)$: $x' = 1$, $y' = \cos t$, $y'' = -\sin t$, so $\kappa = -\sin t/(1 + \cos^2 t)^{3/2}$; at $t = \pi/2$:
    $\kappa = -1$ (turning right, at the top of the hump), radius 1.

??? question "3. Compute the curvature and torsion of the twisted cubic $\gamma(t) = (t, t^2, t^3)$ at $t = 0$."

    $\gamma'(0) = (1, 0, 0)$, $\gamma''(0) = (0, 2, 0)$, $\gamma'''(0) = (0, 0, 6)$. Then $\gamma' \times \gamma'' = (0, 0, 2)$, so
    $\kappa = |(0, 0, 2)|/1^3 = 2$, and $\tau = (0, 0, 2) \cdot (0, 0, 6)/2^2 = 12/4 = 3$.

??? question "4. Show that a unit-speed curve with constant curvature $\kappa > 0$ and zero torsion is a circle of radius $1/\kappa$."

    With $\tau = 0$, $B$ is constant and the curve is planar. Let $c(s) = \gamma(s) + N(s)/\kappa$. Then
    $c' = T + N'/\kappa = T + (-\kappa T)/\kappa = 0$, so $c$ is a fixed point, and $|\gamma - c| = |N|/\kappa = 1/\kappa$. So the
    curve lies on the circle of radius $1/\kappa$ about $c$ in its plane.

??? question "5. Find the first fundamental form of the cone $X(r, \theta) = (r\cos\theta, r\sin\theta, r)$ and show it is locally isometric to the plane."

    $X_r = (\cos\theta, \sin\theta, 1)$, $X_\theta = (-r\sin\theta, r\cos\theta, 0)$: $E = 2$, $F = 0$, $G = r^2$, so
    $ds^2 = 2\,dr^2 + r^2\, d\theta^2$. Put $\rho = \sqrt2\, r$ and $\phi = \theta/\sqrt2$: then $ds^2 = d\rho^2 + \rho^2 d\phi^2$, the
    plane in polar coordinates. As $\theta$ runs through $2\pi$, $\phi$ runs through $2\pi/\sqrt2 \approx 254.6°$: the cone unrolls
    to a sector of the plane with that angle. So $K = 0$ on the cone (away from the tip).

??? question "6. Find the Gaussian curvature at the origin of $z = x^2 - 3y^2$, of $z = 2x^2 + xy + y^2$, and describe each point."

    At the origin $f_x = f_y = 0$, so $K = f_{xx} f_{yy} - f_{xy}^2$. First: $2 \cdot (-6) - 0 = -12$, a saddle (hyperbolic) point.
    Second: $f_{xx} = 4$, $f_{yy} = 2$, $f_{xy} = 1$, so $K = 8 - 1 = 7 > 0$, an elliptic point (a bowl).

??? question "7. Use the first fundamental form to find the area of the band of a sphere of radius $R$ between latitudes given by $\varphi = \varphi_1$ and $\varphi = \varphi_2$. What do you notice?"

    $\int_0^{2\pi}\int_{\varphi_1}^{\varphi_2} R^2\sin\varphi\, d\varphi\, d\theta = 2\pi R^2(\cos\varphi_1 - \cos\varphi_2)$. The heights of the two
    circles are $R\cos\varphi_1$ and $R\cos\varphi_2$, so the area is $2\pi R \times$ (height of the band): equal to the area of the
    matching band on the circumscribed cylinder, as Archimedes found.

??? question "8. On a cylinder of radius 2, find the shortest path from the point at angle 0 and height 0 to the point at angle $\pi/2$ and height 3. Then find a second geodesic between them."

    Unrolled, the horizontal distance is $2 \cdot \pi/2 = \pi$ one way, and the height is 3: shortest length $\sqrt{\pi^2 + 9} \approx 4.344$.
    Going the other way round, the horizontal distance is $2 \cdot 3\pi/2 = 3\pi$, giving a longer helix of length
    $\sqrt{9\pi^2 + 9} \approx 9.891$. (Adding full turns gives infinitely many more.)

??? question "9. A geodesic triangle on a sphere of radius 2 has angles $90°$, $60°$ and $60°$. Find its area."

    The excess is $90° + 60° + 60° - 180° = 30° = \pi/6$. By Gauss–Bonnet with $K = 1/4$: area $/4 = \pi/6$, so the area is
    $2\pi/3 \approx 2.094$.

??? question "10. Check Descartes's theorem (the angle defects add up to $4\pi$) on a prism whose faces are two equilateral triangles and three squares."

    At each of the 6 vertices: two right angles and one $60°$ angle, total $240°$, defect $360° - 240° = 120° = 2\pi/3$.
    Total $6 \times 2\pi/3 = 4\pi$. This is $2\pi\chi$ with $\chi = V - E + F = 6 - 9 + 5 = 2$.

??? question "11. Show that a compact surface in space with $K < 0$ everywhere is impossible. (Hint: the point farthest from the origin.)"

    Let $p$ be a point of the surface farthest from the origin, at distance $d$. The surface lies inside the sphere of radius
    $d$ and touches it at $p$, so near $p$ it bends at least as much as the sphere in every direction: every normal curvature
    at $p$ is at least $1/d$ in size, with the same sign. So $K(p) \ge 1/d^2 > 0$. (So the saddle-shaped surfaces of
    hyperbolic geometry cannot be closed surfaces in 3-space; [Chapter 17](17-Hyperbolic-Geometry.md) met Hilbert's stronger
    theorem that the whole hyperbolic plane cannot sit in 3-space.)

??? question "12. A surface shaped like a sphere has been dented so that its curvature is negative on a region of total curvature $-\pi$. What is the total curvature of the rest of the surface?"

    By Gauss–Bonnet the total is $2\pi\chi = 4\pi$ whatever the shape. So the rest has total curvature $4\pi - (-\pi) = 5\pi$:
    the dent forces more positive curvature elsewhere (around its rim).

## What you learned

- A regular curve has length $\int |\gamma'|\,dt$, and can be parametrised by arc length.
- Curvature measures turning, torsion measures twisting out of a plane; the Frenet–Serret equations show they determine
  a space curve up to rigid motion.
- A surface's first fundamental form $E, F, G$ gives lengths, angles and areas measured from inside the surface.
- The second fundamental form gives normal and principal curvatures; Gaussian curvature $K = k_1k_2$ classifies points as
  dome-like, flat or saddle-like.
- The Theorema Egregium: $K$ depends only on $E, F, G$. So no flat map of a sphere is perfect, and folded pizza does not droop.
- Geodesics are curves that do not turn within the surface; locally they are shortest paths.
- Gauss–Bonnet: the total curvature of a closed surface is $2\pi$ times its Euler characteristic.

**Next:** [Chapter 20](20-Manifolds-and-Riemannian-Geometry.md), where Riemann takes intrinsic geometry to any number of
dimensions, and Einstein uses it to describe gravity.

## Further reading

- M. P. do Carmo, *Differential Geometry of Curves and Surfaces*, 1976 (2nd edition 2016). The standard first course;
  the proofs sketched here are in chapters 1 to 4.
- A. Pressley, *Elementary Differential Geometry*, 2nd edition, 2010. Gentle, with many worked examples.
- B. O'Neill, *Elementary Differential Geometry*, revised 2nd edition, 2006. Uses moving frames throughout.
- C. F. Gauss, *General Investigations of Curved Surfaces* (Disquisitiones generales circa superficies curvas, 1827),
  English translation by A. Hiltebeitel and J. Morehead, 1902.
- D. Hilbert and S. Cohn-Vossen, *Geometry and the Imagination*, 1932 (English 1952). Curvature, geodesics and much more,
  with pictures and almost no formulas.
- T. Needham, *Visual Differential Geometry and Forms*, 2021. Geometric explanations of the Theorema Egregium and
  Gauss–Bonnet.
- On this site: the U of T guides [MAT137 Unit 10: Applications of the Integral](../../uoft/MAT137/unit10.md) (arc length),
  [MAT257Y1 Unit 4: The Derivative as a Linear Map](../../uoft/MAT257Y1/unit04.md) and
  [MAT257Y1 Unit 13: Manifolds in R^n](../../uoft/MAT257Y1/unit13.md); the gentler
  [sphere geometry lesson](../../topics/geometry/level-8/06-sphere-geometry.md); [Chapter 11](11-Solid-Geometry.md) for
  Euler's formula and [Chapter 16](16-Spherical-Geometry.md) for Girard's theorem.
