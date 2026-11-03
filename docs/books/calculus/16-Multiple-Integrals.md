# 16. Multiple integrals

*How much does a metal plate weigh if it is thicker in some places than others? What is the volume of a
doughnut, the mass of a planet whose rock gets denser towards the centre, the chance that two random quantities
land in a given region? Each question adds up a quantity spread over a region of the plane or of space. In this
chapter you learn the double and triple integral, how to compute them one variable at a time, and how to change
coordinates when the region is round: polar, cylindrical and spherical coordinates, and the Jacobian determinant
that measures how a change of coordinates stretches area. Along the way you compute the famous integral of
$e^{-x^2}$ and the volume of a ball in any number of dimensions, which behaves very strangely.*

!!! abstract "In this chapter"
    **You will learn:**

    - the double integral as a limit of Riemann sums, and Fubini's theorem for computing it as two single integrals
    - how to set up integrals over regions that are not rectangles, and how to swap the order of integration
    - polar coordinates, $dA = r\,dr\,d\theta$, and the Gaussian integral $\int e^{-x^2}dx = \sqrt\pi$
    - triple integrals, in cylindrical and spherical coordinates, with volumes, masses and moments of inertia
    - the change of variables formula and why the Jacobian determinant appears in it
    - the volume of a ball in $n$ dimensions, and why it shrinks to zero as $n$ grows

    **You need:** the single-variable integral and its techniques ([Chapters 8](08-The-Integral.md) to
    [11](11-Applications-of-Integrals.md)), improper integrals ([Chapter 11](11-Applications-of-Integrals.md)),
    and the Jacobian matrix from [Chapter 15](15-Functions-of-Several-Variables.md). Determinants of $2 \times 2$
    and $3 \times 3$ matrices.

    **Levels:** 16.1 to 16.3 are intermediate to advanced (second-year university); 16.4 and 16.5 are advanced.

## 16.1 Double integrals

A thin plate covers a region $D$ of the plane, and its density (mass per unit area) at the point $(x, y)$ is
$f(x, y)$. What is its mass? If the density were constant, mass would be density times area. It is not, so do what
[Chapter 8](08-The-Integral.md) did for a varying speed: cut the region into small pieces on which the density is
nearly constant, and add.

**Rectangles first.** Let $R = [a, b] \times [c, d]$, the rectangle of points with $a \le x \le b$, $c \le y \le d$.
Cut $[a, b]$ into $m$ pieces and $[c, d]$ into $n$ pieces; this cuts $R$ into $mn$ small rectangles $R_{ij}$ of area
$\Delta A_{ij}$. Pick a sample point $(x_{ij}^*, y_{ij}^*)$ in each and form the **Riemann sum**

$$
\sum_{i=1}^{m}\sum_{j=1}^{n} f(x_{ij}^*, y_{ij}^*)\,\Delta A_{ij} .
$$

**Definition.** $f$ is **integrable** on $R$ if these sums approach a single number as the largest piece shrinks to
zero, whatever sample points are chosen. That number is the **double integral**

$$
\iint_R f\,dA = \iint_R f(x, y)\,dx\,dy .
$$

As in one variable, it can be defined precisely with upper and lower sums. Every continuous function on $R$ is
integrable, and so is every bounded function whose discontinuities lie on finitely many smooth curves.

If $f \ge 0$, the integral is the **volume** under the graph $z = f(x, y)$ above $R$: each term of the Riemann sum is
the volume of a thin box. With $f = 1$, the integral is the area of $R$. With $f$ a density, it is a mass.

### Fubini's theorem: one variable at a time

Computing a limit of double sums directly is hopeless. The way out is to slice. Fix $x$ and integrate over $y$; the
result $A(x) = \int_c^d f(x, y)\,dy$ is the area of the slice of the solid at that $x$. Then integrating the slice
areas over $x$ gives the volume, as in the method of slices of [Chapter 11](11-Applications-of-Integrals.md).

**Fubini's theorem.** If $f$ is continuous on $R = [a, b] \times [c, d]$, then

$$
\iint_R f\,dA = \int_a^b\left(\int_c^d f(x, y)\,dy\right)dx = \int_c^d\left(\int_a^b f(x, y)\,dx\right)dy .
$$

The inner integrals are **iterated integrals**: you integrate in one variable while treating the other as a
constant, exactly as for partial derivatives. The theorem is named after Guido Fubini, who proved a very general
version (for Lebesgue integrals) in 1907; the version for continuous functions was known in the nineteenth century.

*Proof idea.* Take the Riemann sum with sample points chosen well. In each column (fixed $i$), the sum over $j$ of
$f(x_i^*, y_j^*)\Delta y_j$ is a Riemann sum for the inner integral $A(x_i^*)$. So the double sum is close to
$\sum_i A(x_i^*)\Delta x_i$, a Riemann sum for $\int_a^b A(x)\,dx$. Making "close" precise needs uniform continuity
of $f$ ([Chapter 18](18-The-Real-Numbers.md)); a full proof is in [MAT257Y1 Unit 9](../../uoft/MAT257Y1/unit09.md)
or Spivak's *Calculus on Manifolds*. $\square$

**Example 1.** $\iint_R (x^2 + xy)\,dA$ over $R = [0, 1] \times [0, 2]$. Inner integral in $y$:

$$
\int_0^2 (x^2 + xy)\,dy = \left[x^2y + \frac{xy^2}{2}\right]_{y=0}^{y=2} = 2x^2 + 2x .
$$

Then $\int_0^1 (2x^2 + 2x)\,dx = \tfrac23 + 1 = \tfrac53$. Check the other order: $\int_0^1 (x^2 + xy)\,dx = \tfrac13 + \tfrac y2$,
and $\int_0^2\left(\tfrac13 + \tfrac y2\right)dy = \tfrac23 + 1 = \tfrac53$.

**Fubini can fail.** Continuity, or at least absolute integrability, matters. For
$f(x, y) = \dfrac{x^2 - y^2}{(x^2 + y^2)^2}$ on $[0, 1]^2$ (unbounded near the origin),

$$
\int_0^1\left(\int_0^1 f\,dy\right)dx = \frac\pi4, \qquad \int_0^1\left(\int_0^1 f\,dx\right)dy = -\frac\pi4 .
$$

(Use $\frac{\partial}{\partial y}\frac{y}{x^2 + y^2} = \frac{x^2 - y^2}{(x^2+y^2)^2}$: the inner integral in $y$ is
$\frac{1}{1 + x^2}$, whose integral is $\arctan 1$. By the symmetry $f(y, x) = -f(x, y)$, the other order gives the
negative.) The positive and negative parts of $f$ each have infinite integral, and the order decides how they
cancel, as in the rearrangement theorem for series ([Chapter 12](12-Sequences-and-Series.md)).

### Regions that are not rectangles

To integrate over a general bounded region $D$, put it inside a rectangle and set $f = 0$ outside $D$. In practice
you describe $D$ by the limits of the inner integral.

- **Type I** (vertically simple): $D = \{a \le x \le b,\ g_1(x) \le y \le g_2(x)\}$. Then
  $\iint_D f\,dA = \int_a^b\int_{g_1(x)}^{g_2(x)} f\,dy\,dx$.
- **Type II** (horizontally simple): $D = \{c \le y \le d,\ h_1(y) \le x \le h_2(y)\}$. Then
  $\iint_D f\,dA = \int_c^d\int_{h_1(y)}^{h_2(y)} f\,dx\,dy$.

The inner limits may depend on the outer variable; the outer limits must be numbers.

**Example 2.** $\iint_T xy\,dA$ over the triangle $T$ with corners $(0, 0)$, $(1, 0)$, $(1, 1)$, which is
$0 \le y \le x \le 1$. As type I:

$$
\int_0^1\int_0^x xy\,dy\,dx = \int_0^1 \frac{x^3}{2}\,dx = \frac18 .
$$

**Example 3 (swapping the order).** $\displaystyle\int_0^1\int_y^1 e^{x^2}\,dx\,dy$. The inner integral has no
elementary antiderivative ([Chapter 10](10-Techniques-of-Integration.md)). But the region is the same triangle
$0 \le y \le x \le 1$; described the other way, $0 \le x \le 1$ and $0 \le y \le x$:

$$
\int_0^1\int_0^x e^{x^2}\,dy\,dx = \int_0^1 xe^{x^2}\,dx = \left[\tfrac12 e^{x^2}\right]_0^1 = \frac{e - 1}{2} .
$$

Drawing the region is always the first step in swapping an order.

**Example 4 (area and average).** The region between $y = x^2$ and $y = x$ has area
$\int_0^1\int_{x^2}^{x}dy\,dx = \int_0^1 (x - x^2)\,dx = \tfrac16$. The **average value** of $f$ over $D$ is
$\frac{1}{\text{area}(D)}\iint_D f\,dA$. The **centre of mass** of a plate with density $\rho$ is
$\bar x = \frac{1}{M}\iint_D x\rho\,dA$, $\bar y = \frac1M\iint_D y\rho\,dA$, where $M = \iint_D\rho\,dA$.

**Probability.** If two random quantities $X$ and $Y$ have a joint density $p(x, y)$, the chance that $(X, Y)$ lands in
a region $D$ is $\iint_D p\,dA$ ([Probability, Chapter 11](../probability/11-Joint-Distributions.md)). For instance,
if $X$ and $Y$ are independent and uniform on $[0, 1]$, so $p = 1$ on the unit square, the chance that $Y < X$ is the
area of the triangle of Example 2, $\tfrac12$, and the chance that $XY < \tfrac12$ is
$1 - \int_{1/2}^1\int_{1/(2x)}^1 dy\,dx = 1 - \left(\tfrac12 - \tfrac12\ln2\right) = \tfrac12 + \tfrac12\ln 2 \approx 0.847$.

## 16.2 Polar coordinates and the Gaussian integral

Discs, rings and wedges are awkward in $x$ and $y$: the limits involve square roots. In **polar coordinates**
$x = r\cos\theta$, $y = r\sin\theta$ they are rectangles in $(r, \theta)$. The price is that a small rectangle in
$(r, \theta)$ is not a small rectangle in the plane.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="A polar rectangle: the region between radii r and r plus delta r and between angles theta and theta plus delta theta. Its sides are delta r along the rays and about r delta theta along the arcs, so its area is about r delta r delta theta.">
  <line x1="60" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="20" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="250" x2="268.5" y2="152.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="60" y1="250" x2="222.6" y2="87.4" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <path d="M 195.9,186.6 L 241.3,165.5 A 200 200 0 0 0 201.4,108.6 L 166.1,143.9 A 150 150 0 0 1 195.9,186.6 Z" fill="#9cc9ea" fill-opacity="0.5" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 96.3,233.1 A 40 40 0 0 0 88.3,221.7" fill="none" stroke="#eea66f" stroke-width="2"/>
  <text x="108" y="218" font-size="12" fill="currentColor">Δθ</text>
  <text x="140" y="226" font-size="12" fill="currentColor">r</text>
  <text x="224" y="192" font-size="12" fill="currentColor">Δr</text>
  <text x="232" y="132" font-size="12" fill="currentColor">r Δθ</text>
  <circle cx="60" cy="250" r="3" fill="currentColor"/>
</svg>
</div>

The region $r_1 \le r \le r_2$, $\theta_1 \le \theta \le \theta_2$ is a piece of a ring. Its exact area is the
difference of two sectors:

$$
\frac12 r_2^2\Delta\theta - \frac12 r_1^2\Delta\theta = \frac{r_1 + r_2}{2}\,\Delta r\,\Delta\theta = \bar r\,\Delta r\,\Delta\theta,
$$

where $\Delta r = r_2 - r_1$, $\Delta\theta = \theta_2 - \theta_1$ and $\bar r$ is the middle radius. So small polar
rectangles have area $r\,\Delta r\,\Delta\theta$ (sides $\Delta r$ and $r\Delta\theta$), and Riemann sums in polar
coordinates give

$$
\iint_D f\,dA = \iint f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta .
$$

The extra factor $r$ is the determinant of the Jacobian of the polar map, found in Chapter 15; 16.4 explains why
that is no coincidence. Do not forget it: it is the most common mistake in this chapter.

**Example 5.** The area of a disc of radius $a$: $\int_0^{2\pi}\int_0^a r\,dr\,d\theta = 2\pi\cdot\frac{a^2}{2} = \pi a^2$.

**Example 6.** $\iint (x^2 + y^2)\,dA$ over the unit disc: $\int_0^{2\pi}\int_0^1 r^2\cdot r\,dr\,d\theta = 2\pi\cdot\tfrac14 = \tfrac\pi2$.

**Example 7 (a ring).** $\iint \frac{1}{x^2 + y^2}\,dA$ over $1 \le x^2 + y^2 \le 4$:
$\int_0^{2\pi}\int_1^2 \frac{1}{r^2}r\,dr\,d\theta = 2\pi\ln 2$.

**Example 8 (a volume).** The solid under the paraboloid $z = 4 - x^2 - y^2$ and above the plane $z = 0$ sits over
the disc $r \le 2$: volume $\int_0^{2\pi}\int_0^2 (4 - r^2)r\,dr\,d\theta = 2\pi\left(8 - 4\right) = 8\pi$.

### The Gaussian integral

The bell curve $e^{-x^2}$ has no elementary antiderivative, yet its integral over the whole line has an exact value.
The trick, which appears in work of Poisson in the early nineteenth century, is to square it.

**Theorem.**

$$
\int_{-\infty}^{\infty}e^{-x^2}\,dx = \sqrt\pi .
$$

*Proof.* The integral converges by comparison ([Chapter 11](11-Applications-of-Integrals.md)): $e^{-x^2} \le e^{-|x|}$
for $|x| \ge 1$. Call its value $I$, and let $I_a = \int_{-a}^{a}e^{-x^2}dx$, so $I_a \to I$. By Fubini on the square
$S_a = [-a, a]^2$,

$$
I_a^2 = \int_{-a}^{a}e^{-x^2}dx\int_{-a}^{a}e^{-y^2}dy = \iint_{S_a}e^{-(x^2 + y^2)}\,dA .
$$

The integrand is positive, and the square $S_a$ contains the disc of radius $a$ and is contained in the disc of
radius $a\sqrt2$. On a disc of radius $\rho$, polar coordinates give

$$
\iint_{r \le \rho}e^{-r^2}\,dA = \int_0^{2\pi}\int_0^\rho e^{-r^2}r\,dr\,d\theta = 2\pi\left[-\tfrac12 e^{-r^2}\right]_0^\rho = \pi\left(1 - e^{-\rho^2}\right) .
$$

The factor $r$ is what makes this integrable by substitution. So $\pi(1 - e^{-a^2}) \le I_a^2 \le \pi(1 - e^{-2a^2})$.
Both bounds tend to $\pi$ as $a \to \infty$, so $I^2 = \pi$, and since $I > 0$, $I = \sqrt\pi$. $\square$

This is why $\sqrt{2\pi}$ appears in the normal distribution: substituting $x = t/\sqrt2$ gives
$\int e^{-t^2/2}dt = \sqrt{2\pi}$, so the standard normal density is $\frac{1}{\sqrt{2\pi}}e^{-t^2/2}$, which has
total probability 1 ([Probability, Chapter 10](../probability/10-The-Normal-Distribution.md)). It also gives the
value of the **gamma function** at $\tfrac12$: with $\Gamma(s) = \int_0^\infty t^{s-1}e^{-t}dt$ and $t = x^2$,
$\Gamma(\tfrac12) = \int_0^\infty t^{-1/2}e^{-t}dt = 2\int_0^\infty e^{-x^2}dx = \sqrt\pi$.

## 16.3 Triple integrals

Everything carries over to three dimensions. For a function $f(x, y, z)$ on a solid region $E$, the **triple
integral** $\iiint_E f\,dV$ is the limit of Riemann sums over small boxes. With $f = 1$ it is the volume of $E$; with
$f$ a density, the mass. Fubini's theorem lets you compute it as three iterated integrals, in any order that
describes the region. For example, if $E$ lies between two surfaces $z = u_1(x, y)$ and $z = u_2(x, y)$ over a plane
region $D$,

$$
\iiint_E f\,dV = \iint_D\left(\int_{u_1(x,y)}^{u_2(x,y)} f\,dz\right)dA .
$$

**Example 9.** The tetrahedron $x, y, z \ge 0$, $x + y + z \le 1$ has volume
$\int_0^1\int_0^{1-x}\int_0^{1-x-y}dz\,dy\,dx = \int_0^1\int_0^{1-x}(1 - x - y)\,dy\,dx = \int_0^1\frac{(1-x)^2}{2}dx = \frac16$,
one sixth of the unit cube, as the formula "one third base times height" ($\tfrac13\cdot\tfrac12\cdot1$) says.

### Cylindrical coordinates

**Cylindrical coordinates** are polar coordinates in the $xy$-plane plus the height $z$: $x = r\cos\theta$,
$y = r\sin\theta$, $z = z$. A small cylindrical box has sides $\Delta r$, $r\Delta\theta$, $\Delta z$, so

$$
dV = r\,dr\,d\theta\,dz .
$$

They suit solids with an axis of symmetry.

**Example 10 (a cone).** The solid cone $r \le z \le 1$ (a cone with its tip at the origin, opening upwards, cut off
at height 1): volume $\int_0^{2\pi}\int_0^1\int_r^1 r\,dz\,dr\,d\theta = 2\pi\int_0^1 (r - r^2)\,dr = 2\pi\cdot\tfrac16 = \tfrac\pi3$.
Check: $\tfrac13\pi r^2 h$ with $r = h = 1$.

### Spherical coordinates

**Spherical coordinates** describe a point by its distance $\rho$ from the origin, its angle $\varphi$ down from the
positive $z$-axis ($0 \le \varphi \le \pi$, like a co-latitude), and the polar angle $\theta$ of its shadow in the
$xy$-plane (like a longitude):

$$
x = \rho\sin\varphi\cos\theta, \qquad y = \rho\sin\varphi\sin\theta, \qquad z = \rho\cos\varphi .
$$

A small spherical box has sides $\Delta\rho$ (outwards), $\rho\,\Delta\varphi$ (along a meridian) and
$\rho\sin\varphi\,\Delta\theta$ (along a circle of latitude, whose radius is $\rho\sin\varphi$). So

$$
dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta .
$$

(16.4 confirms this as a Jacobian determinant.)

**Example 11 (the ball).** The ball of radius $R$:

$$
\int_0^{2\pi}\int_0^{\pi}\int_0^{R}\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta = 2\pi\cdot 2\cdot\frac{R^3}{3} = \frac43\pi R^3 .
$$

Archimedes found this volume more than two thousand years ago, by comparing the sphere with a cylinder and a cone.

**Example 12 (an ice-cream cone).** The part of the unit ball inside the cone $\varphi \le \pi/6$:
$\int_0^{2\pi}\int_0^{\pi/6}\int_0^1\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta = 2\pi\left(1 - \cos\tfrac\pi6\right)\tfrac13 = \tfrac{2\pi}{3}\left(1 - \tfrac{\sqrt3}{2}\right) \approx 0.281$.

**Example 13 (centre of mass of a half-ball).** For the solid upper half-ball of radius $R$ with constant density,
by symmetry $\bar x = \bar y = 0$, and

$$
\bar z = \frac{1}{\frac23\pi R^3}\int_0^{2\pi}\int_0^{\pi/2}\int_0^R(\rho\cos\varphi)\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta = \frac{2\pi\cdot\frac12\cdot\frac{R^4}{4}}{\frac23\pi R^3} = \frac{3R}{8} .
$$

### Moment of inertia, and what it says about Mars

How hard is it to spin a body about an axis? Its **moment of inertia** about the $z$-axis is
$I = \iiint_E (x^2 + y^2)\,\rho_m\,dV$, where $\rho_m$ is the density and $x^2 + y^2$ is the squared distance to the
axis. For a ball of radius $R$ and constant density, with $x^2 + y^2 = \rho^2\sin^2\varphi$:

$$
I = \rho_m\int_0^{2\pi}\int_0^\pi\int_0^R\rho^4\sin^3\varphi\,d\rho\,d\varphi\,d\theta = \rho_m\cdot2\pi\cdot\frac43\cdot\frac{R^5}{5} = \frac{8\pi}{15}\rho_m R^5 .
$$

(Using $\int_0^\pi\sin^3\varphi\,d\varphi = \tfrac43$.) Since the mass is $M = \tfrac43\pi R^3\rho_m$, this is
$I = \tfrac25 MR^2$.

A planet whose mass is concentrated towards the centre has a smaller moment of inertia, so the ratio $I/(MR^2)$, the
**moment of inertia factor**, tells you how much the planet's density increases with depth, without digging. It is
0.4 for a uniform ball. For Mars, measurements of the planet's slow wobble by landers and orbiters give a value of
about 0.36: Mars has a denser core. (For Earth, with its large iron core, the factor is about 0.33.) Mars's mass,
about $6.42 \times 10^{23}$ kg, and mean radius, about 3390 km, give a mean density of about 3.9 g/cm³, against
5.5 for Earth.

### The mass of an atmosphere

Spherical coordinates also weigh air. Model the atmosphere of a planet of radius $R$ as in
[Chapter 14](14-Differential-Equations.md): the density at height $h$ above the surface is
$\rho_m = \rho_0e^{-h/H}$, with scale height $H$. In spherical coordinates the atmosphere is $\rho \ge R$, and the
height is $h = \rho - R$. Its mass is

$$
M_{\text{atm}} = \int_0^{2\pi}\int_0^{\pi}\int_R^{\infty}\rho_0e^{-(\rho - R)/H}\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta = 4\pi\rho_0\int_0^{\infty}e^{-h/H}(R + h)^2\,dh .
$$

Expanding $(R + h)^2$ and using $\int_0^\infty h^ke^{-h/H}dh = k!\,H^{k+1}$ (integration by parts) gives
$4\pi\rho_0H(R^2 + 2RH + 2H^2)$. When $H$ is tiny compared with $R$ this is about $4\pi R^2\cdot\rho_0H$: the surface
area times the mass of a column of air of uniform density $\rho_0$ and height $H$.

There is an even simpler way to the same answer. The pressure at the surface is the weight of the air above each
square metre, so $p_0 = \rho_0 gH$ in this model, and $M_{\text{atm}} \approx 4\pi R^2p_0/g$. For Mars, with a mean
surface pressure of about 610 pascals (it changes with the seasons, as carbon dioxide freezes onto and boils off the
polar caps), $R \approx 3390$ km and $g = 3.71$ m/s², this gives about $2.4 \times 10^{16}$ kg. The same formula for
Earth (101 325 Pa, $g = 9.81$) gives about $5.3 \times 10^{18}$ kg, roughly 220 times more. Two very different
calculations, the triple integral and the weighing argument, agree; that agreement is a good check on both.

## 16.4 Change of variables and the Jacobian

*Level: advanced.*

Polar, cylindrical and spherical coordinates each came with a factor: $r$, $r$, $\rho^2\sin\varphi$. Is there a
general rule? Yes: the factor is always the absolute value of the determinant of the Jacobian matrix of the
coordinate map.

**Step 1: linear maps scale area by $|\det|$.** A linear map $T(u, v) = (au + bv, cu + dv)$ sends the unit square to
the parallelogram spanned by its columns $(a, c)$ and $(b, d)$. The area of that parallelogram is $|ad - bc|$, the
absolute value of the determinant ([Geometry, Chapter 9](../geometry/09-Vectors.md)): it is the length of the
cross product $(a, c, 0) \times (b, d, 0) = (0, 0, ad - bc)$. Every square, and so by Riemann sums every region, has
its area multiplied by the same factor $|\det T|$. In three dimensions, a linear map multiplies volumes by
$|\det T|$, which is the volume of the parallelepiped spanned by the columns (the absolute value of the triple
product).

**Step 2: smooth maps are locally linear.** A differentiable map $\mathbf T(u, v)$ is, near each point, close to its
derivative $D\mathbf T$ ([Chapter 15](15-Functions-of-Several-Variables.md)). So a tiny rectangle of area
$\Delta u\,\Delta v$ is mapped to something close to a parallelogram of area $|\det D\mathbf T|\,\Delta u\,\Delta v$.
Adding these up suggests:

**Theorem (change of variables).** Let $\mathbf T$ be a $C^1$ map that is one-to-one from a region $E$ onto a region
$D$, with $\det D\mathbf T \neq 0$ in $E$ (except possibly on a set of zero area). Then, for continuous $f$,

$$
\iint_D f(x, y)\,dx\,dy = \iint_E f(\mathbf T(u, v))\,\left|\det D\mathbf T(u, v)\right|\,du\,dv .
$$

The same holds in three (or $n$) dimensions with volumes. The determinant $\det D\mathbf T$ is called the
**Jacobian** (after Carl Gustav Jacobi, who studied such determinants in the 1840s), often written
$\frac{\partial(x, y)}{\partial(u, v)}$.

This is the several-variable form of substitution, $\int f(x)\,dx = \int f(g(u))\,g'(u)\,du$. In one variable the
absolute value is missing because the orientation of an interval is kept track of by the order of the limits.

*About the proof.* Step 2 is the whole idea, but making it rigorous is real work: you must control the error between
the image of each little square and the parallelogram, uniformly over the region, and show that the errors add up
to nothing. Standard proofs first prove the theorem for maps that change only one coordinate at a time (where it
reduces to one-variable substitution and Fubini), then write a general map locally as a composition of such maps
using the inverse function theorem, and glue with partitions of unity. See [MAT257Y1 Unit 10](../../uoft/MAT257Y1/unit10.md)
or chapter 3 of Spivak's *Calculus on Manifolds*. We use the theorem.

**Polar, checked.** $\frac{\partial(x,y)}{\partial(r,\theta)} = \det\begin{pmatrix}\cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta\end{pmatrix} = r$.

**Spherical, checked.** The Jacobian matrix of $(\rho, \varphi, \theta) \mapsto (x, y, z)$ is

$$
\begin{pmatrix}
\sin\varphi\cos\theta & \rho\cos\varphi\cos\theta & -\rho\sin\varphi\sin\theta \\
\sin\varphi\sin\theta & \rho\cos\varphi\sin\theta & \rho\sin\varphi\cos\theta \\
\cos\varphi & -\rho\sin\varphi & 0
\end{pmatrix} .
$$

Expanding along the bottom row:
$\cos\varphi\cdot\left(\rho^2\sin\varphi\cos\varphi\cos^2\theta + \rho^2\sin\varphi\cos\varphi\sin^2\theta\right) + \rho\sin\varphi\cdot\left(\rho\sin^2\varphi\cos^2\theta + \rho\sin^2\varphi\sin^2\theta\right)$,
which is $\rho^2\sin\varphi\cos^2\varphi + \rho^2\sin^3\varphi = \rho^2\sin\varphi$. It is positive for
$0 < \varphi < \pi$, so $|\det| = \rho^2\sin\varphi$, as found geometrically.

**Example 14 (an ellipse).** The area inside $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. Put $x = au$, $y = bv$; the
Jacobian is $ab$, and the region becomes the unit disc:

$$
\text{area} = \iint_{u^2 + v^2 \le 1} ab\,du\,dv = \pi ab .
$$

The same substitution in three dimensions gives the volume of an ellipsoid with semi-axes $a, b, c$:
$\tfrac43\pi abc$.

**Example 15 (a tilted square).** Let $D$ be the square with corners $(0, 0)$, $(1, 1)$, $(2, 0)$, $(1, -1)$, and
compute $\iint_D (x + y)^2\,dA$. The sides lie on the lines $x + y = 0$, $x + y = 2$, $x - y = 0$, $x - y = 2$, so put
$u = x + y$, $v = x - y$. Then $D$ becomes $0 \le u, v \le 2$. Solving, $x = \frac{u + v}{2}$, $y = \frac{u - v}{2}$, and

$$
\frac{\partial(x, y)}{\partial(u, v)} = \det\begin{pmatrix}\tfrac12 & \tfrac12 \\ \tfrac12 & -\tfrac12\end{pmatrix} = -\frac12 .
$$

So $\iint_D (x + y)^2\,dA = \int_0^2\int_0^2 u^2\cdot\tfrac12\,dv\,du = \tfrac12\cdot2\cdot\tfrac83 = \tfrac83$.
Note that the absolute value of $-\tfrac12$ is used, and that the Jacobian needed is that of $(u, v) \mapsto (x, y)$.
(Equivalently, $\frac{\partial(u,v)}{\partial(x,y)} = -2$, and the two Jacobians are reciprocals, by the chain rule.)

**Example 16 (a curved region).** The region in the first quadrant between the hyperbolas $xy = 1$ and $xy = 4$ and
between the lines $y = x$ and $y = 4x$. Put $u = xy$, $v = y/x$, so the region is $1 \le u \le 4$, $1 \le v \le 4$.
Here $\frac{\partial(u,v)}{\partial(x,y)} = \det\begin{pmatrix} y & x \\ -y/x^2 & 1/x\end{pmatrix} = \frac yx + \frac yx = 2v$,
so $\frac{\partial(x,y)}{\partial(u,v)} = \frac{1}{2v}$, and the area is $\int_1^4\int_1^4\frac{1}{2v}\,dv\,du = 3\cdot\tfrac12\ln 4 = 3\ln2 \approx 2.08$.

## 16.5 The volume of a ball in $n$ dimensions

*Level: advanced.*

The **unit ball** in $\mathbb R^n$ is the set of points $(x_1, \dots, x_n)$ with $x_1^2 + \dots + x_n^2 \le 1$. In
dimension 1 it is the interval $[-1, 1]$, of length 2; in dimension 2 the disc, of area $\pi$; in dimension 3 the
ball, of volume $\tfrac43\pi$. Let $V_n$ be its $n$-dimensional volume. Scaling every coordinate by $R$ multiplies
$n$-dimensional volume by $R^n$ (the Jacobian of $\mathbf x \mapsto R\mathbf x$ is $R^n$), so the ball of radius $R$
has volume $V_nR^n$. What is $V_n$?

**A recursion.** Split the coordinates into the first two, $(x_1, x_2)$, and the other $n - 2$. A point is in the
ball when $(x_1, x_2)$ lies in the unit disc and, writing $r^2 = x_1^2 + x_2^2$, the other coordinates lie in an
$(n-2)$-dimensional ball of radius $\sqrt{1 - r^2}$. By Fubini, integrating first over the last $n - 2$ coordinates,

$$
V_n = \iint_{r \le 1}V_{n-2}\left(1 - r^2\right)^{(n-2)/2}dA = V_{n-2}\int_0^{2\pi}\int_0^1(1 - r^2)^{(n-2)/2}\,r\,dr\,d\theta .
$$

The inner integral, with $s = 1 - r^2$, is $\tfrac12\int_0^1 s^{(n-2)/2}ds = \tfrac1n$. So

$$
V_n = \frac{2\pi}{n}V_{n-2} .
$$

Starting from $V_1 = 2$ and $V_2 = \pi$ (and $V_0 = 1$, the volume of a point):

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $V_n$ | $2$ | $\pi$ | $\frac43\pi$ | $\frac{\pi^2}{2}$ | $\frac{8\pi^2}{15}$ | $\frac{\pi^3}{6}$ | $\frac{16\pi^3}{105}$ | $\frac{\pi^4}{24}$ | $\frac{\pi^5}{120}$ | $\frac{\pi^{10}}{10!}$ |
| value | 2 | 3.142 | 4.189 | 4.935 | 5.264 | 5.168 | 4.725 | 4.059 | 2.550 | 0.0258 |

The volume grows until dimension 5 and then falls, towards 0. Each step of two dimensions multiplies it by
$2\pi/n$, which is less than 1 once $n > 2\pi$, and soon tiny.

**A closed formula.** For even $n = 2k$ the recursion gives $V_{2k} = \pi^k/k!$. For all $n$, the gamma function of
16.2 gives one formula,

$$
V_n = \frac{\pi^{n/2}}{\Gamma\left(\frac n2 + 1\right)},
$$

and the Gaussian integral proves it directly. *Proof.* By Fubini and 16.2,
$\int_{\mathbb R^n}e^{-|\mathbf x|^2}dV = \left(\int_{-\infty}^{\infty}e^{-x^2}dx\right)^n = \pi^{n/2}$. Compute the
same integral in shells: the shell between radii $r$ and $r + dr$ has volume
$\frac{d}{dr}(V_nr^n)\,dr = nV_nr^{n-1}dr$, so

$$
\pi^{n/2} = \int_0^\infty e^{-r^2}nV_nr^{n-1}\,dr = nV_n\cdot\frac12\Gamma\left(\frac n2\right) = V_n\,\Gamma\left(\frac n2 + 1\right),
$$

using the substitution $t = r^2$ and the rule $\Gamma(s + 1) = s\Gamma(s)$ (integration by parts). $\square$

**Why high-dimensional balls are strange.** Two facts follow.

- *The ball is tiny compared with its cube.* The unit ball fits inside the cube $[-1, 1]^n$, of volume $2^n$. In
  dimension 10 the ball fills only $V_{10}/2^{10} \approx 0.25\%$ of it. Almost all of a high-dimensional cube is in
  its corners. One consequence: if you sample random points in a cube to find those within distance 1 of the
  centre, in high dimensions you almost never find any.
- *Almost all of the ball is near its surface.* The fraction of the unit ball's volume within distance 0.01 of the
  surface is $1 - 0.99^n$. For $n = 3$ it is 3%; for $n = 1000$ it is $99.996\%$.

These facts, sometimes called the **curse of dimensionality**, matter in statistics and machine learning, where data
points have hundreds of coordinates ([Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md)), and
in coding theory, where the volume of balls in high-dimensional spaces limits how many codewords can be packed
apart (the sphere-packing bound, [Combinatorics, Chapter 19](../combinatorics/19-Designs-and-Codes.md)). That is the
mathematics behind the error-correcting codes that protect data on a long, noisy radio link such as the one between
a Mars rover and Earth.

## Check yourself

??? question "1. Compute $\iint_R xe^{xy}\,dA$ over $R = [0, 1] \times [0, 1]$. Which order is easier?"

    Integrate in $y$ first: $\int_0^1 xe^{xy}dy = [e^{xy}]_{y=0}^{1} = e^x - 1$. Then $\int_0^1(e^x - 1)dx = e - 2$.
    In the other order the inner integral $\int_0^1 xe^{xy}dx$ needs integration by parts.

??? question "2. Reverse the order of $\int_0^2\int_{x^2}^{4} f(x, y)\,dy\,dx$."

    The region is $0 \le x \le 2$, $x^2 \le y \le 4$: under the line $y = 4$, above the parabola, right of the
    $y$-axis. Horizontally: $0 \le y \le 4$, $0 \le x \le \sqrt y$. So it is $\int_0^4\int_0^{\sqrt y}f\,dx\,dy$.

??? question "3. Evaluate $\int_0^1\int_x^1 \sin(y^2)\,dy\,dx$."

    Swap: the region is $0 \le x \le y \le 1$, so it is $\int_0^1\int_0^y\sin(y^2)\,dx\,dy = \int_0^1 y\sin(y^2)dy = \frac{1 - \cos 1}{2} \approx 0.2298$.

??? question "4. Find the area of one petal of the rose $r = \cos 2\theta$."

    One petal is $-\pi/4 \le \theta \le \pi/4$, $0 \le r \le \cos2\theta$. Area
    $\int_{-\pi/4}^{\pi/4}\frac12\cos^22\theta\,d\theta = \frac12\cdot\frac\pi4 = \frac\pi8$
    (the average of $\cos^2$ over the interval is $\tfrac12$ and the interval has length $\pi/2$).

??? question "5. Compute $\iint_D \sqrt{x^2 + y^2}\,dA$ over the half-disc $x^2 + y^2 \le 9$, $y \ge 0$."

    $\int_0^\pi\int_0^3 r\cdot r\,dr\,d\theta = \pi\cdot9 = 9\pi$.

??? question "6. Use $\int_{-\infty}^{\infty}e^{-x^2}dx = \sqrt\pi$ to find $\int_{-\infty}^{\infty}x^2e^{-x^2}dx$."

    By parts with $u = x$ and $dv = xe^{-x^2}dx$, $v = -\tfrac12 e^{-x^2}$: the boundary terms vanish and the
    integral is $\tfrac12\int e^{-x^2}dx = \frac{\sqrt\pi}{2}$. (So a normal distribution with density
    $\frac{1}{\sqrt\pi}e^{-x^2}$ has variance $\tfrac12$.)

??? question "7. Find the volume of the solid inside both the sphere $x^2 + y^2 + z^2 = 4$ and the cylinder $x^2 + y^2 = 1$."

    Cylindrical: $\int_0^{2\pi}\int_0^1 2\sqrt{4 - r^2}\,r\,dr\,d\theta = 2\pi\left[-\tfrac23(4 - r^2)^{3/2}\right]_0^1 = \frac{4\pi}{3}\left(8 - 3\sqrt3\right) \approx 11.74$.

??? question "8. A ball of radius $R$ has density proportional to the distance from its centre, $\rho_m = k\rho$. Find its mass and its moment of inertia factor $I/(MR^2)$."

    $M = \int_0^{2\pi}\int_0^\pi\int_0^R k\rho\cdot\rho^2\sin\varphi = 4\pi k\frac{R^4}{4} = \pi kR^4$.
    $I = \int k\rho\cdot\rho^2\sin^2\varphi\cdot\rho^2\sin\varphi = 2\pi k\cdot\frac43\cdot\frac{R^6}{6} = \frac{4\pi kR^6}{9}$.
    So $I/(MR^2) = \frac49 \approx 0.444$, more than 0.4: mass pushed outwards raises the factor, which is why Mars's
    0.36 means mass concentrated inwards.

??? question "9. Use the substitution $u = x + y$, $v = y$ to compute $\iint_T e^{x+y}\,dA$ over the triangle $x, y \ge 0$, $x + y \le 1$."

    $x = u - v$, $y = v$, Jacobian $\det\begin{pmatrix}1 & -1 \\ 0 & 1\end{pmatrix} = 1$. The triangle becomes
    $0 \le v \le u \le 1$. So $\int_0^1\int_0^u e^u\,dv\,du = \int_0^1 ue^u\,du = 1$.

??? question "10. Use the recursion to find $V_9$ and check it against $\pi^{n/2}/\Gamma(n/2 + 1)$."

    $V_9 = \frac{2\pi}{9}V_7 = \frac{2\pi}{9}\cdot\frac{16\pi^3}{105} = \frac{32\pi^4}{945} \approx 3.2985$. And
    $\Gamma(11/2) = \frac92\cdot\frac72\cdot\frac52\cdot\frac32\cdot\frac12\sqrt\pi = \frac{945}{32}\sqrt\pi$, so
    $\pi^{9/2}/\Gamma(11/2) = \frac{32\pi^4}{945}$. They agree.

??? question "11. Show that the $n$-dimensional cube $[-1,1]^n$ has a corner at distance $\sqrt n$ from its centre, and explain why that makes Monte Carlo estimation of $V_n$ hard for large $n$."

    The corner $(1, \dots, 1)$ is at distance $\sqrt{1 + \dots + 1} = \sqrt n$. Estimating $V_n$ by throwing random
    points in the cube and counting the fraction inside the ball needs to see the fraction $V_n/2^n$, which is
    about $0.0025$ at $n = 10$ and about $2.5 \times 10^{-8}$ at $n = 20$: you need hundreds of millions of points to
    see even a handful.

## What you learned

- A double or triple integral is a limit of Riemann sums; it computes volume, area, mass, averages, centres of mass
  and probabilities.
- Fubini's theorem turns it into iterated single integrals, in either order, for continuous functions; drawing the
  region tells you the limits, and swapping the order can make an impossible integral easy.
- In polar coordinates $dA = r\,dr\,d\theta$; squaring the Gaussian integral and using polar coordinates gives
  $\int e^{-x^2}dx = \sqrt\pi$.
- Cylindrical $dV = r\,dr\,d\theta\,dz$ and spherical $dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$; a uniform
  ball has $I = \tfrac25MR^2$, and Mars's smaller factor reveals its dense core.
- In general, a change of variables multiplies by $|\det D\mathbf T|$, because smooth maps are locally linear and
  linear maps scale volume by the determinant.
- The unit ball in $n$ dimensions has volume $\pi^{n/2}/\Gamma(n/2 + 1)$, largest at $n = 5$ and tending to 0; in
  high dimensions almost all the volume is near the surface and in the corners of the cube.

**Next:** [Chapter 17](17-Vector-Calculus.md), integrating along curves and across surfaces, and the theorems of
Green, Gauss and Stokes that connect them.

## Further reading

- J. E. Marsden and A. J. Tromba, *Vector Calculus* (1976; 6th edition 2012), chapters 5 and 6.
- M. Spivak, *Calculus on Manifolds* (1965), chapter 3: integration in $\mathbb R^n$, Fubini and change of
  variables with complete proofs.
- T. M. Apostol, *Calculus*, Volume 2, 2nd edition (1969), chapter 11.
- K. Ball, "An Elementary Introduction to Modern Convex Geometry", in *Flavors of Geometry*, MSRI Publications 31
  (1997): what high-dimensional balls and cubes really look like.
- On this site: [MAT257Y1 Unit 9: The Riemann Integral in R^n](../../uoft/MAT257Y1/unit09.md),
  [Unit 10: Partitions of Unity & Change of Variables](../../uoft/MAT257Y1/unit10.md);
  [Probability, Chapter 10](../probability/10-The-Normal-Distribution.md) and
  [Chapter 11](../probability/11-Joint-Distributions.md); the gentler
  [curved areas lesson](../../topics/measurement/level-8/04-curved-areas.md).
