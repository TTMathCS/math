# 11. Applications of integrals

*Chapter 8 defined the integral as a limit of sums of thin rectangles. That definition is more than a way to find
areas: any quantity that can be cut into thin pieces, each nearly simple, is an integral. This chapter uses one idea
over and over: slice, approximate each slice, add, take the limit. You will compute areas between curves, volumes of
solids (and see Archimedes' own slicing argument for the sphere), lengths of curves, the work needed to pump a tank or
escape from Mars, the weight of the Martian air, centres of mass, probabilities, and integrals over infinite ranges.*

!!! abstract "In this chapter"
    **You will learn:**

    - the "slice and sum" method that turns a physical or geometric quantity into an integral
    - areas between curves, integrating in $x$ or in $y$
    - volumes by slices, discs, washers and shells, and Cavalieri's principle
    - arc length and surface area of revolution
    - work, fluid pressure, centres of mass and the theorem of Pappus
    - probability densities, expectation, and the exponential distribution
    - improper integrals, the $p$-test, the comparison test, and the Gamma function

    **You need:** [Chapter 9](09-The-Fundamental-Theorem.md) (the fundamental theorem) and
    [Chapter 10](10-Techniques-of-Integration.md) (substitution, parts, trigonometric substitution). Gentler versions on
    the Topics shelf: [Area under a speed-time graph](../../topics/change/level-5/06-area-speed-time.md),
    [Areas under curves and the fundamental theorem](../../topics/change/level-8/06-area-fundamental-theorem.md) and
    [Gabriel's horn](../../topics/infinity/level-8/03-gabriels-horn.md).

    **Levels:** 11.1 and 11.2 are intermediate; 11.3 and 11.4 are intermediate; 11.5 is intermediate and links to the
    Probability book; 11.6 is intermediate to advanced (the comparison test's proof rests on completeness,
    [Chapter 18](18-The-Real-Numbers.md)).

## The one idea

Every application below follows the same four steps.

1. **Slice.** Cut the thing (a region, a solid, a curve, a job of work) into thin pieces along some variable, say
   $x$, with pieces of width $\Delta x$.
2. **Approximate.** On a thin piece, something varies so little that it can be treated as constant, and the piece's
   contribution is nearly (that constant) $\times\,\Delta x$. Call it $q(x_i)\,\Delta x$.
3. **Add.** The total is nearly $\sum q(x_i)\,\Delta x$, a Riemann sum.
4. **Limit.** As the pieces get thinner, the error goes to 0 and the sum becomes $\int_a^b q(x)\,dx$.

The step that needs care is the second: the approximation must be good to *better than first order* in $\Delta x$, so
that the errors, added over $n \approx 1/\Delta x$ pieces, still vanish. In each case below there is a quick argument
for that, usually a squeeze between an inner and an outer approximation, like the lower and upper sums of
[Chapter 8](08-The-Integral.md). Physicists write the result as "$dQ = q(x)\,dx$, so $Q = \int dQ$", and that
shorthand is exactly Leibniz's.

## 11.1 Areas between curves

What is the area of the region between $y = x$ and $y = x^2$ for $0 \le x \le 1$? A thin vertical strip at $x$ has
height (top) $-$ (bottom) $= x - x^2$, because on $[0, 1]$ the line is above the parabola. So

$$
\text{Area} = \int_0^1 (x - x^2)\,dx = \frac12 - \frac13 = \frac16.
$$

**In general:** if $g \le f$ on $[a, b]$, the area between them is $\int_a^b \bigl(f(x) - g(x)\bigr)\,dx$. Notice that
this works even when the curves go below the axis: shifting both up by the same amount does not change $f - g$. If
the curves cross, the area is $\int_a^b |f - g|$: find the crossing points and split.

*Why it is right.* On a strip $[x_{i-1}, x_i]$ the region contains a rectangle of height
$\inf(f - g)$ and is contained in one of height $\sup(f - g)$; so the area lies between the lower and upper sums of
$f - g$, and those squeeze to the integral.

**Example 1.** The region between $y = x^2$ and $y = 2 - x^2$. They meet where $x^2 = 2 - x^2$, at $x = \pm1$, and the
top curve is $2 - x^2$:

$$
\int_{-1}^1 \bigl((2 - x^2) - x^2\bigr)\,dx = \int_{-1}^1 (2 - 2x^2)\,dx = 4 - \frac43 = \frac83.
$$

**Example 2 (integrate in $y$).** The region between the parabola $x = y^2$ and the line $x = y + 2$. As functions of
$x$, the parabola has two branches $y = \pm\sqrt x$, and slicing vertically needs two integrals. Slice horizontally
instead. The curves meet where $y^2 = y + 2$, at $y = -1$ and $y = 2$, and between them the line is to the right:

$$
\int_{-1}^{2} \bigl((y + 2) - y^2\bigr)\,dy = \Bigl[\frac{y^2}{2} + 2y - \frac{y^3}{3}\Bigr]_{-1}^{2} = \frac{10}{3} - \Bigl(-\frac76\Bigr) = \frac92.
$$

**Choose the slicing direction that gives the simplest top and bottom.**

**Example 3 (the ellipse).** The ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ has top half
$y = \frac ba\sqrt{a^2 - x^2}$. Its area is

$$
2\int_{-a}^{a}\frac ba\sqrt{a^2 - x^2}\,dx = \frac{2b}{a}\cdot\frac{\pi a^2}{2} = \pi ab,
$$

using the half-disc area $\frac{\pi a^2}{2}$ from [Chapter 10](10-Techniques-of-Integration.md), Example 16. The
ellipse is a circle stretched by $\frac ba$ vertically, and every vertical strip is stretched by that factor, so the area
is too. That is the slicing idea in one sentence. Mars's orbit is an ellipse with $b/a \approx 0.9956$
(eccentricity about 0.093), which shows how close to a circle a "very eccentric" planetary orbit still is.

## 11.2 Volumes

### Slices and Cavalieri's principle

A solid lies between $x = a$ and $x = b$. Cut it by the plane at position $x$; let $A(x)$ be the area of the
cross-section. A thin slab between $x$ and $x + \Delta x$ is nearly a prism of volume $A(x)\,\Delta x$. Summing:

$$
V = \int_a^b A(x)\,dx.
$$

An immediate consequence was known long before calculus:

**Cavalieri's principle.** If two solids have cross-sections of equal area at every height, they have equal volumes.

Bonaventura Cavalieri stated it in 1635, in his work on "indivisibles". It explains, for instance, why a stack of coins
has the same volume whether straight or leaning: the slices are the same discs.

**Example 4 (the cone).** A cone of height $h$ with base radius $r$, apex at $x = 0$, axis along the $x$-axis. At
distance $x$ from the apex the cross-section is a disc of radius $\frac{r}{h}x$, by similar triangles. So

$$
V = \int_0^h \pi\Bigl(\frac{rx}{h}\Bigr)^2dx = \frac{\pi r^2}{h^2}\cdot\frac{h^3}{3} = \frac13\pi r^2h.
$$

The same computation works for any pyramid or cone over any base of area $B$: cross-sections scale as $(x/h)^2$, so
$V = \frac13 Bh$. The $\frac13$ is the $\int_0^1 x^2\,dx$ of Archimedes' parabola.

**Example 5 (the sphere, Archimedes' way).** Take a hemisphere of radius $r$, flat face down. Beside it, take a cylinder
of radius $r$ and height $r$, with a cone of the same radius and height removed, apex down.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="Side view of a hemisphere of radius r and, beside it, a cylinder of radius r and height r with an upside-down cone carved out. A horizontal line at the same height y cuts the hemisphere in a disc and the cylinder-minus-cone in a ring, and the two slices have equal area">
  <path d="M 20 170 A 60 60 0 0 1 140 170 Z" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="180,110 300,110 300,170 240,170" fill="#7ccf9a" fill-opacity="0.45" stroke="none"/>
  <polygon points="180,110 240,170 180,170" fill="#7ccf9a" fill-opacity="0.45" stroke="none"/>
  <rect x="180" y="110" width="120" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <polyline points="180,110 240,170 300,110" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="28.04" y1="140" x2="131.96" y2="140" stroke="#eea66f" stroke-width="4"/>
  <line x1="180" y1="140" x2="210" y2="140" stroke="#eea66f" stroke-width="4"/>
  <line x1="270" y1="140" x2="300" y2="140" stroke="#eea66f" stroke-width="4"/>
  <line x1="10" y1="140" x2="310" y2="140" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 3"/>
  <line x1="80" y1="170" x2="80" y2="140" stroke="currentColor" stroke-width="1"/>
  <text x="84" y="160" font-size="12" text-anchor="start" fill="currentColor">y</text>
  <line x1="80" y1="170" x2="131.96" y2="140" stroke="currentColor" stroke-width="1"/>
  <text x="112" y="164" font-size="12" text-anchor="middle" fill="currentColor">r</text>
  <text x="80" y="190" font-size="12" text-anchor="middle" fill="currentColor">hemisphere</text>
  <text x="240" y="190" font-size="12" text-anchor="middle" fill="currentColor">cylinder minus cone</text>
  <text x="240" y="100" font-size="12" text-anchor="middle" fill="currentColor">radius r, height r</text>
</svg>
</div>

At height $y$, the hemisphere's slice is a disc of radius $\sqrt{r^2 - y^2}$ (Pythagoras on the triangle in the
picture), with area $\pi(r^2 - y^2)$. The other solid's slice is a ring: the cylinder's disc of radius $r$ minus the
cone's disc of radius $y$, with area $\pi r^2 - \pi y^2$. The same! By Cavalieri,

$$
V_{\text{hemisphere}} = V_{\text{cylinder}} - V_{\text{cone}} = \pi r^3 - \frac13\pi r^3 = \frac23\pi r^3,
$$

so a ball has volume $\frac43\pi r^3$. Archimedes (third century BC) found this by a related balancing argument in *The
Method* and proved it rigorously by exhaustion in *On the Sphere and Cylinder*; he asked for a sphere inscribed in a
cylinder to be carved on his tomb, according to Cicero, who reported finding it. With integrals it is one line:
$\int_{-r}^r\pi(r^2 - x^2)\,dx = \frac43\pi r^3$.

### Discs and washers

When a region in the plane is rotated about an axis, every cross-section perpendicular to the axis is a disc or a ring
(a **washer**). Rotating the region under $y = f(x) \ge 0$, $a \le x \le b$, about the $x$-axis gives

$$
V = \int_a^b \pi f(x)^2\,dx,
$$

and rotating the region between $g \le f$ gives washers: $V = \int_a^b \pi\bigl(f(x)^2 - g(x)^2\bigr)\,dx$.

**Example 6.** Rotate the region between $y = x$ and $y = x^2$ ($0 \le x \le 1$) about the $x$-axis. Outer radius $x$,
inner radius $x^2$:

$$
V = \int_0^1\pi(x^2 - x^4)\,dx = \pi\Bigl(\frac13 - \frac15\Bigr) = \frac{2\pi}{15}.
$$

### Shells

Rotate the same kind of region about the $y$-axis instead. Now slice it into thin **vertical** strips. The strip at
$x$, of height $h(x)$ and width $\Delta x$, sweeps out a thin cylindrical shell: radius $x$, height $h(x)$, thickness
$\Delta x$. Cut open and flattened, the shell is nearly a slab of size $2\pi x \times h(x) \times \Delta x$. So

$$
V = \int_a^b 2\pi x\,h(x)\,dx \qquad (0 \le a < b).
$$

*Why the approximation is good enough.* The exact volume of the shell between radii $x$ and $x + \Delta x$ with
constant height $h$ is $\pi h\bigl((x + \Delta x)^2 - x^2\bigr) = 2\pi h\bigl(x + \tfrac{\Delta x}{2}\bigr)\Delta x$, which is
$2\pi x h\,\Delta x$ evaluated at the midpoint radius: a Riemann-sum term with the sample point in the piece. Squeezing
$h$ between its inf and sup on the piece then gives the formula.

**Example 7.** Rotate the region between $y = x$ and $y = x^2$ about the $y$-axis. The strip at $x$ has height
$x - x^2$:

$$
V = \int_0^1 2\pi x(x - x^2)\,dx = 2\pi\Bigl(\frac13 - \frac14\Bigr) = \frac{\pi}{6}.
$$

*Check by washers in $y$:* at height $y$ the region runs from $x = y$ to $x = \sqrt y$, so
$V = \int_0^1\pi\bigl((\sqrt y)^2 - y^2\bigr)\,dy = \pi\bigl(\frac12 - \frac13\bigr) = \frac\pi6$. ✓

**Example 8.** Rotate the region under $y = x(2 - x)$, $0 \le x \le 2$, about the $y$-axis. Washers would need $x$ as a
function of $y$, which means solving a quadratic; shells do not:

$$
V = \int_0^2 2\pi x\cdot x(2 - x)\,dx = 2\pi\Bigl[\frac{2x^3}{3} - \frac{x^4}{4}\Bigr]_0^2 = 2\pi\Bigl(\frac{16}{3} - 4\Bigr) = \frac{8\pi}{3}.
$$

## 11.3 Arc length

How long is the curve $y = f(x)$ from $x = a$ to $x = b$? Approximate it by a polygon through the points
$(x_i, f(x_i))$. The segment over $[x_{i-1}, x_i]$ has length

$$
\sqrt{(\Delta x_i)^2 + (\Delta y_i)^2} = \sqrt{1 + \Bigl(\frac{\Delta y_i}{\Delta x_i}\Bigr)^2}\,\Delta x_i = \sqrt{1 + f'(c_i)^2}\,\Delta x_i,
$$

where $c_i$ comes from the mean value theorem: $\Delta y_i = f'(c_i)\Delta x_i$. This is exactly a Riemann sum. So, if $f'$
is continuous,

$$
L = \int_a^b\sqrt{1 + f'(x)^2}\,dx.
$$

(We *define* the length of a curve as the supremum of the lengths of inscribed polygons, since a straight line is the
shortest path between two points; refining a partition can only increase the polygon's length, and the computation
above shows that these lengths converge to the integral.)

For a curve given by parameters, $x = x(t)$, $y = y(t)$ for $\alpha \le t \le \beta$, the same argument gives

$$
L = \int_\alpha^\beta\sqrt{x'(t)^2 + y'(t)^2}\,dt.
$$

If $t$ is time, the integrand is the speed, and length is the integral of speed: distance travelled, as in
[Chapter 9](09-The-Fundamental-Theorem.md).

**Example 9 (the circle).** $x = r\cos t$, $y = r\sin t$, $0 \le t \le 2\pi$. The speed is
$\sqrt{r^2\sin^2t + r^2\cos^2t} = r$, so $L = 2\pi r$. (Again, this is consistent rather than circular: radians are
*defined* by arc length, and the integral confirms it.)

**Example 10.** $y = x^{3/2}$ on $[0, 4]$. Here $f' = \frac32x^{1/2}$ and $1 + f'^2 = 1 + \frac94x$:

$$
L = \int_0^4\Bigl(1 + \frac94x\Bigr)^{1/2}dx = \frac49\cdot\frac23\Bigl[\Bigl(1 + \frac94x\Bigr)^{3/2}\Bigr]_0^4 = \frac{8}{27}\bigl(10\sqrt{10} - 1\bigr) \approx 9.073.
$$

*Check:* the straight line from $(0, 0)$ to $(4, 8)$ has length $\sqrt{80} \approx 8.944$, a little less. ✓

**Example 11 (the hanging chain).** A chain hanging under its own weight takes the shape of a **catenary**,
$y = \cosh x = \frac{e^x + e^{-x}}{2}$ (in suitable units). Since $\cosh' = \sinh$ and $1 + \sinh^2 = \cosh^2$,

$$
L = \int_0^a\sqrt{1 + \sinh^2x}\,dx = \int_0^a\cosh x\,dx = \sinh a.
$$

**Example 12 (the ellipse, which will not cooperate).** The ellipse $x = 2\cos t$, $y = \sin t$ has length
$\int_0^{2\pi}\sqrt{4\sin^2t + \cos^2t}\,dt$. This is an elliptic integral, with no elementary antiderivative
([Chapter 10](10-Techniques-of-Integration.md), Section 10.5); Simpson's rule gives $L \approx 9.6884$. Arc length
integrals are often impossible in closed form, because the square root rarely simplifies. The examples in textbooks
are chosen so that $1 + f'^2$ is a perfect square, as in Examples 10 and 11 and Exercise 6.

### Surface area of revolution

Rotate the curve $y = f(x) \ge 0$, $a \le x \le b$, about the $x$-axis. A short piece of length
$\Delta s \approx \sqrt{1 + f'^2}\,\Delta x$ at height $f(x)$ sweeps out a thin band, nearly the side of a cone frustum,
of area $2\pi f(x)\,\Delta s$. So

$$
S = \int_a^b 2\pi f(x)\sqrt{1 + f'(x)^2}\,dx.
$$

**Example 13 (Archimedes again).** For the sphere, $f(x) = \sqrt{r^2 - x^2}$ and $f' = -x/\sqrt{r^2 - x^2}$, so
$f\sqrt{1 + f'^2} = \sqrt{r^2 - x^2}\cdot\frac{r}{\sqrt{r^2 - x^2}} = r$. The integrand is constant:

$$
S = \int_{-r}^r 2\pi r\,dx = 4\pi r^2.
$$

The constant integrand says something remarkable: **slices of a sphere of equal thickness have equal area.** That is
Archimedes' "hat-box theorem": the sphere's area equals that of the cylinder wrapped around it, band by band. (It is why
a map projection onto the cylinder, stretching horizontally and squashing vertically in just the right way, preserves
area.)

## 11.4 Work, pressure and centre of mass

### Work

If a constant force $F$ pushes an object a distance $d$ in its own direction, the **work** done is $W = Fd$ (in joules,
if $F$ is in newtons and $d$ in metres). If the force varies with position, $F(x)$, slice the path:

$$
W = \int_a^b F(x)\,dx.
$$

**Example 14 (a spring).** Hooke's law says a spring stretched $x$ metres beyond its natural length pulls back with
force $kx$. If 10 N stretches a spring 5 cm, then $k = 10/0.05 = 200$ N/m, and stretching it 10 cm takes

$$
W = \int_0^{0.1}200x\,dx = 100\cdot(0.1)^2 = 1\ \text{J}.
$$

**Example 15 (pumping a tank).** A cylindrical tank of radius 1 m and height 3 m is full of water (density
$\rho = 1000$ kg/m³). How much work does it take to pump all the water out over the top? Here the *water* is sliced,
not the path: the layer at height $y$, thickness $\Delta y$, has mass $\rho\pi\cdot1^2\Delta y$, weight
$\rho g\pi\Delta y$, and must be lifted $3 - y$ metres. So

$$
W = \int_0^3\rho g\pi(3 - y)\,dy = \rho g\pi\cdot\frac92.
$$

On Earth ($g = 9.81$) this is about 138,700 J; on Mars ($g = 3.71$) about 52,400 J, since work against gravity is
proportional to $g$.

**Example 16 (escaping from Mars).** Far from the surface, gravity is not constant. Newton's law of gravitation says a
planet of mass $M$ pulls a mass $m$ at distance $r$ from its centre with force $\frac{GMm}{r^2}$. The work to lift $m$
from the surface ($r = R$) to infinitely far away is an integral over an infinite range (Section 11.6 makes this
precise):

$$
W = \int_R^\infty\frac{GMm}{r^2}\,dr = \lim_{b\to\infty}\Bigl[-\frac{GMm}{r}\Bigr]_R^b = \frac{GMm}{R}.
$$

A finite amount of work lifts an object to infinity. A rocket that starts with kinetic energy $\frac12mv^2 \ge \frac{GMm}{R}$ escapes (ignoring air), so the **escape velocity** is $v_{\text{esc}} = \sqrt{2GM/R}$. For Mars,
$GM \approx 4.283\times10^{13}$ m³/s² and the mean radius is $R \approx 3389.5$ km, which give
$v_{\text{esc}} \approx 5.03$ km/s; for Earth the same formula gives about 11.2 km/s. (As a check, $GM/R^2 \approx 3.73$
m/s² for Mars, matching the surface gravity of about 3.71 m/s² that we have been using; the small difference is
because Mars is not a perfect sphere and spins.)

### Fluid pressure

In a liquid of density $\rho$, the pressure at depth $y$ is $\rho g y$ (plus the air pressure on the surface): the
weight of the column of liquid above each square metre. Pressure acts equally in all directions, so on a vertical wall
it grows with depth, and the total force is an integral.

**Example 17 (a dam).** A vertical rectangular gate 10 m wide holds back water 5 m deep. The strip at depth $y$ has
area $10\,\Delta y$ and feels pressure $\rho gy$:

$$
F = \int_0^5\rho g y\cdot10\,dy = \rho g\cdot 125 \approx 1.23\times10^6\ \text{N}.
$$

That is 1.2 meganewtons, about the weight of 125 tonnes. The force is the same as if the whole gate were at the
average depth of 2.5 m, because pressure grows linearly.

**Example 18 (the weight of the Martian air).** Run the same idea upwards. Air pressure at the surface is the weight of
the air above each square metre. In an atmosphere at roughly constant temperature, density falls exponentially with
height, $\rho(h) = \rho_0e^{-h/H}$, where $H$ is the **scale height** (about 11 km for Mars; the exponential law
comes from a differential equation of the kind solved in [Chapter 14](14-Differential-Equations.md)). The mass of air above one square metre is

$$
\int_0^\infty\rho_0e^{-h/H}\,dh = \rho_0H,
$$

and its weight $\rho_0Hg$ is the surface pressure $p_0$. Mars's mean surface pressure is about 600 Pa (it varies with
season and with altitude by a factor of two or more), so each square metre carries about $600/3.71 \approx 160$ kg of
air. On Earth it is $101{,}325/9.81 \approx 10{,}300$ kg, some 60 times more. And $\rho_0 = p_0/(gH) \approx 600/(3.71\times 11{,}000) \approx 0.015$ kg/m³, roughly one eightieth of the density of air at sea level on Earth,
which is why parachutes alone cannot land heavy spacecraft on Mars.

### Centre of mass

Two children on a seesaw balance when $m_1d_1 = m_2d_2$. In general, masses $m_i$ at positions $x_i$ balance at the
**centre of mass**

$$
\bar x = \frac{\sum m_ix_i}{\sum m_i}.
$$

The numerator $\sum m_ix_i$ is the **moment** about 0. For a rod with density $\rho(x)$ (kg per metre) on $[a, b]$,
slicing gives

$$
\bar x = \frac{\int_a^b x\rho(x)\,dx}{\int_a^b\rho(x)\,dx}.
$$

**Example 19.** A rod on $[0, 2]$ with density $\rho(x) = 1 + x$ has mass $\int_0^2(1 + x)\,dx = 4$ and moment
$\int_0^2x(1 + x)\,dx = 2 + \frac83 = \frac{14}{3}$, so $\bar x = \frac{14/3}{4} = \frac76$, to the right of the middle,
because the right end is heavier. ✓

**Plane regions.** For a flat plate of constant density occupying the region between $g \le f$ on $[a, b]$ with area
$A$, the **centroid** $(\bar x, \bar y)$ is

$$
\bar x = \frac1A\int_a^bx\bigl(f(x) - g(x)\bigr)\,dx, \qquad \bar y = \frac1A\int_a^b\frac{f(x) + g(x)}{2}\bigl(f(x) - g(x)\bigr)\,dx = \frac{1}{2A}\int_a^b\bigl(f^2 - g^2\bigr)\,dx.
$$

The $\bar y$ formula comes from treating each vertical strip as a point mass at its own midpoint height
$\frac{f + g}{2}$.

**Example 20.** For the region between $y = x$ and $y = x^2$ ($A = \frac16$):
$\bar x = 6\int_0^1x(x - x^2)\,dx = 6\cdot\frac1{12} = \frac12$ and
$\bar y = 3\int_0^1(x^2 - x^4)\,dx = 3\cdot\frac2{15} = \frac25$.

**Example 21.** A half-disc of radius $r$ (flat side on the $x$-axis): by symmetry $\bar x = 0$. Slicing horizontally,
the strip at height $y$ has width $2\sqrt{r^2 - y^2}$, so

$$
\bar y = \frac{1}{\pi r^2/2}\int_0^r y\cdot2\sqrt{r^2 - y^2}\,dy = \frac{2}{\pi r^2}\cdot\frac23r^3 = \frac{4r}{3\pi} \approx 0.424r.
$$

**Theorem 11.1 (Pappus).** If a plane region of area $A$ is rotated about a line in its plane that does not cut
through it, the volume swept out is $V = 2\pi\bar d\,A$, where $\bar d$ is the distance from the centroid to the line.
In words: area times the distance travelled by the centroid.

*Proof (for rotation about the $x$-axis of a region between $0 \le g \le f$).* By washers and the formula for $\bar y$:
$V = \int_a^b\pi(f^2 - g^2)\,dx = 2\pi\cdot\frac{1}{2}\int_a^b(f^2 - g^2)\,dx = 2\pi\bar y A$. $\blacksquare$

*Check against Examples 6 and 7:* rotating about the $x$-axis, $V = 2\pi\cdot\frac25\cdot\frac16 = \frac{2\pi}{15}$ ✓;
about the $y$-axis, $V = 2\pi\cdot\frac12\cdot\frac16 = \frac\pi6$ ✓.

**Example 22 (the torus).** Rotate a disc of radius $r$ about a line at distance $R > r$ from its centre. The centroid
is the centre, so $V = 2\pi R\cdot\pi r^2 = 2\pi^2Rr^2$, with no integral to compute. Pappus of Alexandria stated this
in the fourth century AD; a proof had to wait for calculus. (Paul Guldin restated it in the 1600s, and it is sometimes
called Guldin's theorem.)

## 11.5 Probability densities

A spinner lands at a random angle; a radioactive atom decays at a random time; a measurement has a random error.
Each of these can take any real value in a range, and the probability of any **single exact** value is 0. What has a
probability is an *interval*. A **probability density function** (pdf) describes this: a function $f$ with

$$
f(x) \ge 0, \qquad \int_{-\infty}^{\infty}f(x)\,dx = 1, \qquad P(a \le X \le b) = \int_a^bf(x)\,dx.
$$

Probability is area under the density. The value $f(x)$ is not a probability; it is probability *per unit length*,
just as density in physics is mass per unit volume. The [Probability book, Chapter 9](../probability/09-Continuous-Random-Variables.md)
develops this in full; here we see the calculus.

The **expected value** (mean) of $X$ is the centre of mass of the density:

$$
E[X] = \int_{-\infty}^{\infty}x f(x)\,dx,
$$

and the **variance** is $\operatorname{Var}(X) = \int(x - \mu)^2f(x)\,dx = E[X^2] - \mu^2$, where $\mu = E[X]$.

**Example 23.** Let $f(x) = cx(1 - x)$ on $[0, 1]$ and 0 elsewhere. Total probability 1 needs
$c\int_0^1(x - x^2)\,dx = \frac c6 = 1$, so $c = 6$. Then $P(X < \frac14) = \int_0^{1/4}(6x - 6x^2)\,dx = \frac3{16} - \frac1{32} = \frac5{32}$,
and $E[X] = \frac12$ by symmetry.

**Example 24 (the exponential distribution).** The waiting time $X$ until a radioactive atom decays, or until a
component with no "wear" fails, has density $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, where $\lambda > 0$ is the
rate. Then:

- Total: $\int_0^\infty\lambda e^{-\lambda x}\,dx = \lim_{b\to\infty}\bigl(1 - e^{-\lambda b}\bigr) = 1$. ✓
- Survival: $P(X > t) = \int_t^\infty\lambda e^{-\lambda x}\,dx = e^{-\lambda t}$.
- Mean, by parts: $E[X] = \int_0^\infty x\lambda e^{-\lambda x}\,dx = \bigl[-xe^{-\lambda x}\bigr]_0^\infty + \int_0^\infty e^{-\lambda x}\,dx = 0 + \frac1\lambda = \frac1\lambda$.
- Median: $e^{-\lambda m} = \frac12$ gives $m = \frac{\ln 2}{\lambda}$, the **half-life**.

A part with mean lifetime 1000 hours ($\lambda = 0.001$) survives 2000 hours with probability $e^{-2} \approx 0.135$,
and half of such parts fail by $1000\ln2 \approx 693$ hours. The exponential is **memoryless**:
$P(X > s + t \mid X > s) = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t)$. An atom that has
survived a million years is no closer to decaying.

**The normal distribution.** The most important density of all is $\varphi(x) = \frac{1}{\sqrt{2\pi}}e^{-x^2/2}$, the
bell curve ([Probability, Chapter 10](../probability/10-The-Normal-Distribution.md)). That the constant is right
requires $\int_{-\infty}^{\infty}e^{-x^2/2}\,dx = \sqrt{2\pi}$, equivalently

$$
\int_{-\infty}^{\infty}e^{-x^2}\,dx = \sqrt\pi.
$$

No antiderivative is available ([Chapter 10](10-Techniques-of-Integration.md), Corollary 10.5), yet the exact value is
known. The famous proof squares the integral, turning it into a double integral over the plane, and switches to polar
coordinates; that is [Chapter 16](16-Multiple-Integrals.md), Section 16.2. First we need to know what an integral
over an infinite range means.

## 11.6 Improper integrals

### Definitions

The Riemann integral of Chapter 8 needs a bounded function on a bounded interval. Two kinds of integral break those
rules, and both are defined as limits of honest integrals.

**Type 1 (infinite interval).** If $f$ is integrable on $[a, b]$ for every $b > a$, define

$$
\int_a^\infty f(x)\,dx = \lim_{b\to\infty}\int_a^bf(x)\,dx
$$

when the limit exists (as a finite number); the integral then **converges**. Otherwise it **diverges**. For
$\int_{-\infty}^\infty f$, split at any point $c$ and require **both** $\int_{-\infty}^c$ and $\int_c^\infty$ to
converge.

**Type 2 (unbounded integrand).** If $f$ is integrable on $[a + \varepsilon, b]$ for every small $\varepsilon > 0$ but
blows up near $a$, define $\int_a^b f = \lim_{\varepsilon\to0^+}\int_{a+\varepsilon}^bf$, and similarly at $b$ or at
an interior point (split there).

**Example 25.** $\displaystyle\int_1^\infty\frac{dx}{x^2} = \lim_{b\to\infty}\Bigl(1 - \frac1b\Bigr) = 1$ converges, but
$\displaystyle\int_1^\infty\frac{dx}{x} = \lim_{b\to\infty}\ln b = \infty$ diverges.

**Example 26.** $\displaystyle\int_0^1\frac{dx}{\sqrt x} = \lim_{\varepsilon\to0^+}\bigl(2 - 2\sqrt\varepsilon\bigr) = 2$
converges, though the region is infinitely tall. And $\displaystyle\int_0^1\ln x\,dx = \lim_{\varepsilon\to0^+}\bigl[x\ln x - x\bigr]_\varepsilon^1 = -1$,
using $\varepsilon\ln\varepsilon \to 0$ (Chapter 6, l'Hôpital).

**Example 27 (why both halves).** $\int_{-\infty}^\infty x\,dx$ diverges, because $\int_0^\infty x\,dx$ does. It would be
wrong to compute $\lim_{b\to\infty}\int_{-b}^bx\,dx = 0$; that symmetric limit is called the **Cauchy principal value**
and is a different (useful, but different) notion. With the definition we use, $\int_{-\infty}^\infty\frac{dx}{1+x^2} = \frac\pi2 + \frac\pi2 = \pi$
is fine, because each half converges.

**Theorem 11.2 ($p$-test).** $\displaystyle\int_1^\infty\frac{dx}{x^p}$ converges if and only if $p > 1$ (then it equals
$\frac{1}{p-1}$), and $\displaystyle\int_0^1\frac{dx}{x^p}$ converges if and only if $p < 1$ (then it equals $\frac{1}{1-p}$).

*Proof.* For $p \ne 1$, $\int_1^b x^{-p}\,dx = \frac{b^{1-p} - 1}{1 - p}$. If $p > 1$, $b^{1-p} \to 0$ and the limit is
$\frac{1}{p-1}$; if $p < 1$, $b^{1-p}\to\infty$. For $p = 1$ we get $\ln b \to \infty$. On $[0, 1]$:
$\int_\varepsilon^1x^{-p}\,dx = \frac{1 - \varepsilon^{1-p}}{1 - p}$, and $\varepsilon^{1-p} \to 0$ exactly when $p < 1$;
for $p = 1$, $-\ln\varepsilon \to \infty$. $\blacksquare$

So $1/x$ is the borderline both at infinity and at 0: a little faster decay at infinity, or a little slower blow-up at
0, and the area becomes finite.

### Comparison

Most improper integrals cannot be computed exactly. We can still decide whether they converge.

**Theorem 11.3 (comparison test).** Suppose $0 \le f(x) \le g(x)$ for $x \ge a$, and both are integrable on every
$[a, b]$.

- If $\int_a^\infty g$ converges, so does $\int_a^\infty f$, and $\int_a^\infty f \le \int_a^\infty g$.
- If $\int_a^\infty f$ diverges, so does $\int_a^\infty g$.

*Proof.* Let $F(b) = \int_a^bf$. Since $f \ge 0$, $F$ is non-decreasing in $b$. Since $f \le g$ and $g \ge 0$,
$F(b) \le \int_a^bg \le \int_a^\infty g$, so $F$ is bounded above. **A non-decreasing function that is bounded above
has a finite limit at infinity**: the limit is the least upper bound of its values. That last sentence is the
completeness of the real numbers, which [Chapter 12](12-Sequences-and-Series.md) uses for sequences and
[Chapter 18](18-The-Real-Numbers.md) examines from the ground up. The second statement is the contrapositive of the
first. $\blacksquare$

The same holds for type 2 integrals, with the same proof.

**Example 28.** $\displaystyle\int_1^\infty e^{-x^2}\,dx$ converges: for $x \ge 1$, $x^2 \ge x$, so $e^{-x^2} \le e^{-x}$,
and $\int_1^\infty e^{-x}dx = e^{-1}$ converges. (Its value is about 0.1394, less than $e^{-1} \approx 0.368$.) Hence
$\int_0^\infty e^{-x^2}$ converges too, as the Gaussian integral needs.

**Example 29.** $\displaystyle\int_1^\infty\frac{\sin^2x}{x^2}\,dx$ converges by comparison with $\frac1{x^2}$.
$\displaystyle\int_2^\infty\frac{dx}{\ln x}$ diverges, because $\ln x < x$ gives $\frac1{\ln x} > \frac1x$.

**Limit comparison.** If $f, g > 0$ and $f(x)/g(x) \to L$ with $0 < L < \infty$, then $\int_a^\infty f$ and
$\int_a^\infty g$ converge or diverge together. (Proof: for large $x$, $\frac L2g \le f \le 2Lg$; apply comparison
twice.) For instance $\int_1^\infty\frac{x + 3}{x^3 + 1}\,dx$ converges, since the integrand behaves like $\frac{1}{x^2}$.

**Example 30 (a conditionally convergent integral).** $\int_1^\infty\frac{\sin x}{x}\,dx$ converges, though
$\int_1^\infty\frac{|\sin x|}{x}dx$ does not. Parts with $u = 1/x$, $dv = \sin x\,dx$:

$$
\int_1^b\frac{\sin x}{x}\,dx = \Bigl[-\frac{\cos x}{x}\Bigr]_1^b - \int_1^b\frac{\cos x}{x^2}\,dx.
$$

As $b\to\infty$ the boundary term tends to $\cos 1$, and the last integral converges by comparison, since
$\left|\frac{\cos x}{x^2}\right| \le \frac{1}{x^2}$ (comparison applied to the absolute value; that absolute convergence
implies convergence is proved for series in [Chapter 12](12-Sequences-and-Series.md), and the integral proof is the
same). The full integral $\int_0^\infty\frac{\sin x}{x}\,dx$ equals $\frac\pi2$; the proof needs more tools (complex
analysis in [Chapter 22](22-Where-Analysis-Goes.md), or differentiating under the integral sign).

### The Gamma function

**Definition.** For $s > 0$,

$$
\Gamma(s) = \int_0^\infty x^{s-1}e^{-x}\,dx.
$$

It converges: near 0, $x^{s-1}e^{-x} \le x^{s-1}$, fine by the $p$-test since $1 - s < 1$; near infinity, $x^{s-1}e^{-x} \le \frac{1}{x^2}$ for large $x$, because $x^{s+1}e^{-x} \to 0$.

**Theorem 11.4.** $\Gamma(s + 1) = s\,\Gamma(s)$, and $\Gamma(n + 1) = n!$ for whole numbers $n \ge 0$.

*Proof.* Parts with $u = x^s$, $dv = e^{-x}\,dx$:
$\int_\varepsilon^bx^se^{-x}\,dx = \bigl[-x^se^{-x}\bigr]_\varepsilon^b + s\int_\varepsilon^bx^{s-1}e^{-x}\,dx$. As
$\varepsilon\to0$ and $b\to\infty$ the boundary term goes to 0, giving $\Gamma(s+1) = s\Gamma(s)$. Since
$\Gamma(1) = \int_0^\infty e^{-x}\,dx = 1 = 0!$, induction gives $\Gamma(n+1) = n\cdot(n-1)!= n!$. $\blacksquare$

So $\int_0^\infty x^3e^{-x}\,dx = 3! = 6$. The Gamma function extends the factorial to non-integers; Euler introduced it
in 1729–1730 in letters to Goldbach. The substitution $x = t^2$ gives $\Gamma(\frac12) = 2\int_0^\infty e^{-t^2}dt$, so the
Gaussian integral says $\Gamma(\frac12) = \sqrt\pi$, a "factorial of $-\frac12$" equal to $\sqrt\pi$.

### Gabriel's horn

Rotate $y = 1/x$, $x \ge 1$, about the $x$-axis. The volume is

$$
\int_1^\infty\pi\cdot\frac{1}{x^2}\,dx = \pi,
$$

finite. The surface area is $\int_1^\infty\frac{2\pi}{x}\sqrt{1 + \frac1{x^4}}\,dx \ge \int_1^\infty\frac{2\pi}{x}\,dx = \infty$,
infinite. A horn you could fill with $\pi$ cubic units of paint, but could not paint the inside of. The paradox (studied
by Torricelli in the 1640s, who was surprised that an infinitely long solid could have finite volume) dissolves once
you notice that "painting" a surface with a layer of fixed thickness needs a volume that the narrow tail of the horn
does not have: the paint in the horn gets thinner than any fixed coat.

## Check yourself

??? question "1. Find the area between $y = 4 - x^2$ and $y = x + 2$."

    They meet where $4 - x^2 = x + 2$, i.e. $x^2 + x - 2 = 0$, so $x = -2, 1$. The parabola is on top:
    $\int_{-2}^1\bigl(2 - x - x^2\bigr)\,dx = \bigl[2x - \frac{x^2}{2} - \frac{x^3}{3}\bigr]_{-2}^1 = \frac76 - \bigl(-\frac{10}{3}\bigr) = \frac92$.

??? question "2. Find the volume when the region under $y = e^x$, $0 \le x \le 1$, is rotated about the $x$-axis."

    Discs: $\int_0^1\pi e^{2x}\,dx = \frac\pi2(e^2 - 1) \approx 10.04$.

??? question "3. Find the volume when the region under $y = \sin x$, $0 \le x \le \pi$, is rotated about the $y$-axis."

    Shells: $\int_0^\pi2\pi x\sin x\,dx$. Parts: $\int x\sin x = -x\cos x + \sin x$, which on $[0, \pi]$ gives $\pi$. So
    $V = 2\pi\cdot\pi = 2\pi^2 \approx 19.74$.

??? question "4. A solid has a circular base of radius 1, and every cross-section perpendicular to one diameter is a square. Find its volume."

    At position $x$ the chord has length $2\sqrt{1 - x^2}$, so the square has area $4(1 - x^2)$. Then
    $V = \int_{-1}^14(1 - x^2)\,dx = 4\cdot\frac43 = \frac{16}{3}$.

??? question "5. Use Cavalieri's principle to explain why a cylinder of radius $r$ and height $h$ has the same volume whether it is straight or slanted."

    Both solids are cut by horizontal planes in discs of radius $r$ at every height between 0 and $h$. Equal
    cross-sections at every height give equal volumes, so both have $V = \pi r^2h$.

??? question "6. Find the length of $y = \frac{x^3}{6} + \frac{1}{2x}$ for $1 \le x \le 2$."

    $y' = \frac{x^2}{2} - \frac{1}{2x^2}$, and $1 + y'^2 = \frac{x^4}{4} + \frac12 + \frac{1}{4x^4} = \bigl(\frac{x^2}{2} + \frac{1}{2x^2}\bigr)^2$.
    So $L = \int_1^2\bigl(\frac{x^2}{2} + \frac{1}{2x^2}\bigr)dx = \bigl[\frac{x^3}{6} - \frac{1}{2x}\bigr]_1^2 = \bigl(\frac43 - \frac14\bigr) - \bigl(\frac16 - \frac12\bigr) = \frac{17}{12}$.

??? question "7. A 20 m rope with mass 0.5 kg per metre hangs from the top of a cliff. How much work does it take to pull it up, on Earth and on Mars?"

    The piece at depth $y$ (thickness $\Delta y$) weighs $0.5g\,\Delta y$ and rises $y$ metres:
    $W = \int_0^{20}0.5g\,y\,dy = 0.5g\cdot200 = 100g$. On Earth about 981 J; on Mars about 371 J.

??? question "8. A density is $f(x) = \frac{3}{x^4}$ for $x \ge 1$ (and 0 otherwise). Check that it is a density and find $E[X]$ and $P(X > 2)$."

    $\int_1^\infty3x^{-4}\,dx = [-x^{-3}]_1^\infty = 1$ ✓. $E[X] = \int_1^\infty3x^{-3}\,dx = \frac32$.
    $P(X > 2) = \int_2^\infty3x^{-4}\,dx = \frac18$.

??? question "9. Decide whether each converges: (a) $\int_1^\infty\frac{dx}{\sqrt{x^3 + 1}}$, (b) $\int_0^1\frac{dx}{x^2 + \sqrt x}$, (c) $\int_2^\infty\frac{dx}{x(\ln x)^2}$."

    (a) Converges: $\frac{1}{\sqrt{x^3+1}} < x^{-3/2}$ and $\frac32 > 1$. (b) Converges: $\frac{1}{x^2 + \sqrt x} \le x^{-1/2}$
    and $\frac12 < 1$. (c) Converges: with $u = \ln x$ it becomes $\int_{\ln 2}^\infty u^{-2}\,du = \frac{1}{\ln 2}$.

??? question "10. Compute $\int_0^\infty x^5e^{-x}\,dx$ and $\int_0^\infty x^2e^{-2x}\,dx$."

    The first is $\Gamma(6) = 5! = 120$. For the second, substitute $u = 2x$: $\int_0^\infty\frac{u^2}{4}e^{-u}\frac{du}{2} = \frac18\Gamma(3) = \frac{2}{8} = \frac14$.

??? question "11. Show that $\int_0^\infty\frac{x}{1 + x^2}\,dx$ diverges, although $\lim_{b\to\infty}\int_{-b}^{b}\frac{x}{1+x^2}\,dx = 0$."

    $\int_0^b\frac{x}{1 + x^2}\,dx = \frac12\ln(1 + b^2)\to\infty$. The symmetric integral is 0 because the integrand is
    odd, but that is the principal value; the improper integral $\int_{-\infty}^\infty$ diverges since one half does.

??? question "12. Use Pappus's theorem and the volume of a ball to find the centroid of a half-disc, and compare with Example 21."

    Rotating a half-disc of radius $r$ about its straight edge gives a ball: $\frac43\pi r^3 = 2\pi\bar y\cdot\frac{\pi r^2}{2}$.
    So $\bar y = \frac{4r^3/3}{\pi r^2} = \frac{4r}{3\pi}$, matching Example 21.

## What you learned

- Slice, approximate, add, take the limit: areas, volumes, lengths, work, force, mass and probability are all integrals.
- Volumes come from cross-sections ($\int A(x)\,dx$), discs and washers ($\int\pi(f^2 - g^2)$) or shells ($\int2\pi xh$);
  Cavalieri's principle and Archimedes' sphere are the same idea.
- Arc length is $\int\sqrt{1 + f'^2}$, or $\int$ speed $dt$; it is often non-elementary (the ellipse).
- Work is $\int F\,dx$; a finite amount of work escapes Mars's gravity, $v_{\text{esc}} \approx 5.0$ km/s; surface
  pressure is the weight of the air column, $\rho_0Hg$.
- Centroids are averages of position; Pappus: volume = area $\times$ path of the centroid.
- A density's integral over an interval is a probability; the exponential distribution is memoryless.
- Improper integrals are limits; $\int_1^\infty x^{-p}$ converges iff $p > 1$; comparison decides most cases;
  $\Gamma(n + 1) = n!$.

**Next:** [Chapter 12](12-Sequences-and-Series.md), infinite sums of numbers: when they converge, the tests that decide
it, and Euler's astonishing $\sum 1/n^2 = \pi^2/6$.

## Further reading

- R. Courant and F. John, *Introduction to Calculus and Analysis*, Volume I, 1965, Chapter 4 (applications in physics and geometry).
- T. M. Apostol, *Calculus*, Volume 1, 2nd edition, 1967, Chapters 2 and 14 (areas, volumes, work, curve length).
- G. F. Simmons, *Calculus with Analytic Geometry*, 2nd edition, 1996, the chapters on applications of integration (with good historical notes).
- T. L. Heath (ed.), *The Works of Archimedes*, 1897, with the supplement *The Method of Archimedes*, 1912.
- On this site: the Topics lessons [Gabriel's horn](../../topics/infinity/level-8/03-gabriels-horn.md),
  [Continuous random variables](../../topics/probability/level-8/02-continuous-random-variables.md) and
  [Area under a speed-time graph](../../topics/change/level-5/06-area-speed-time.md); the U of T guides
  [MAT137 Unit 10: Applications of the Integral](../../uoft/MAT137/unit10.md),
  [MAT137 Unit 12: Improper Integrals](../../uoft/MAT137/unit12.md) and
  [MAT159H1 Unit 2: Improper Integrals](../../uoft/MAT159H1/unit02.md); the
  [Probability book, Chapter 9](../probability/09-Continuous-Random-Variables.md); and the
  [Calculus book's contents](index.md).
