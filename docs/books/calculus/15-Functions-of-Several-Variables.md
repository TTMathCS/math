# 15. Functions of several variables

*The temperature in a room depends on where you stand: three coordinates. The cost of a box depends on its length,
width and height. The pressure of a gas depends on its volume and temperature. Most quantities depend on more than
one thing, and calculus must follow. In this chapter you learn to picture a function of two variables as a surface
or a contour map, to take derivatives in each direction, and to see the true derivative as a linear map, the best
flat approximation to a curved function. Then you find highest and lowest points, with and without constraints,
and see why Lagrange's method of multipliers works.*

!!! abstract "In this chapter"
    **You will learn:**

    - graphs, level curves and level surfaces, and limits and continuity in several variables
    - partial derivatives, and when mixed partial derivatives are equal (Clairaut–Schwarz, with proof and a counterexample)
    - the derivative as a linear map, the Jacobian matrix, the gradient and directional derivatives
    - the chain rule in several variables, with proof, and why the gradient is perpendicular to level sets
    - critical points and the second derivative test, proved from Taylor's theorem
    - Lagrange multipliers, why they work, and what the multiplier means

    **You need:** derivatives and Taylor's theorem ([Chapters 4 to 7](04-The-Derivative.md),
    [Chapter 13](13-Power-Series-and-Taylor.md)), and vectors, dot products and matrices
    ([Geometry, Chapter 9](../geometry/09-Vectors.md); [Algebra, Chapter 3](../algebra/03-Lines-and-Linear-Systems.md)
    for linear systems). The gentler [vectors lesson](../../topics/geometry/level-8/04-vectors.md) and
    [dot product lesson](../../topics/geometry/level-8/05-dot-product.md) help.

    **Levels:** 15.1 and 15.2 are intermediate; 15.3 to 15.6 are advanced (second-year university), with the
    proofs at that level.

## 15.1 Graphs and level sets

A **function of two variables** $f(x, y)$ assigns a number to each point $(x, y)$ of a region of the plane, its
**domain**. More generally $f(x_1, \dots, x_n)$ is a function on (part of) $\mathbb R^n$, the set of lists of $n$
real numbers. We write $\mathbf x = (x_1, \dots, x_n)$ for a point, and $|\mathbf x| = \sqrt{x_1^2 + \dots + x_n^2}$
for its distance from the origin.

There are two ways to see a function of two variables.

**The graph** is the surface $z = f(x, y)$ in three-dimensional space: above each point of the domain, at height
$f(x, y)$. The graph of $x^2 + y^2$ is a bowl (a **paraboloid**); the graph of $x^2 - y^2$ is a saddle, rising in the
$x$ direction and falling in the $y$ direction; the graph of $\sqrt{1 - x^2 - y^2}$ is the upper half of the unit
sphere.

**The level curves** are the curves $f(x, y) = c$ in the plane, one for each value $c$. Drawn together they make a
**contour map**, like the contour lines on a hiking map, where $f$ is height above sea level. The level curves of
$x^2 + y^2$ are circles; those of $x^2 - y^2$ are hyperbolas, and the two lines $y = \pm x$ for $c = 0$. Where
contour lines (drawn at equal steps of $c$) crowd together, the surface is steep; where they spread out, it is
gentle. Weather maps draw level curves of pressure (isobars) and of temperature (isotherms).

For a function of three variables the graph would need four dimensions, but the **level surfaces** $f(x,y,z) = c$
are ordinary surfaces: for $x^2 + y^2 + z^2$ they are spheres centred at the origin.

### Limits and continuity

The definition of a limit carries over from [Chapter 2](02-Limits.md) with distance in place of absolute value.

**Definition.** $\lim_{\mathbf x \to \mathbf a} f(\mathbf x) = L$ means: for every $\varepsilon > 0$ there is a
$\delta > 0$ such that $|f(\mathbf x) - L| < \varepsilon$ whenever $0 < |\mathbf x - \mathbf a| < \delta$ and
$\mathbf x$ is in the domain. And $f$ is **continuous** at $\mathbf a$ if $\lim_{\mathbf x \to \mathbf a}f(\mathbf x) = f(\mathbf a)$.

The limit laws and the continuity of sums, products, quotients and compositions all hold, with the same proofs.
Polynomials in several variables are continuous everywhere.

The new difficulty: in one variable you can approach a point only from the left or the right; in the plane you can
come from infinitely many directions, along straight lines or curves, and the limit must be the same along all of
them.

**Example 1.** $f(x, y) = \dfrac{xy}{x^2 + y^2}$ for $(x, y) \neq (0, 0)$. Along the line $y = mx$,
$f = \dfrac{mx^2}{(1 + m^2)x^2} = \dfrac{m}{1 + m^2}$, which depends on $m$: 0 along the axes, $\tfrac12$ along
$y = x$. So the limit at the origin does not exist.

**Example 2.** $g(x, y) = \dfrac{x^2y}{x^4 + y^2}$. Along every line $y = mx$, $g = \dfrac{mx^3}{x^4 + m^2x^2} = \dfrac{mx}{x^2 + m^2} \to 0$
(and along the $y$-axis $g = 0$). Yet along the parabola $y = x^2$, $g = \dfrac{x^4}{2x^4} = \tfrac12$. So the limit
does not exist even though it is 0 along every straight line. Checking lines is never enough to prove a limit
exists.

**Example 3.** $h(x, y) = \dfrac{x^2y}{x^2 + y^2}$. Here $|h| = \dfrac{x^2}{x^2 + y^2}|y| \le |y| \le |(x, y)|$, so
$h \to 0$: given $\varepsilon$, take $\delta = \varepsilon$. A bound in terms of the distance to the point is the
reliable way to prove a limit exists. Polar coordinates often find such a bound: here $h = r\cos^2\theta\sin\theta$,
and $|h| \le r$.

## 15.2 Partial derivatives

How does $f(x, y)$ change when only $x$ changes? Freeze $y$, and you have a function of one variable, which you
already know how to differentiate.

**Definition.** The **partial derivative** of $f$ with respect to $x$ at $(a, b)$ is

$$
\frac{\partial f}{\partial x}(a, b) = \lim_{h \to 0}\frac{f(a + h, b) - f(a, b)}{h},
$$

and similarly for $y$, with $(a, b + h)$. Other notations are $f_x$ and $\partial_x f$. The curly $\partial$ is a
reminder that other variables are being held fixed.

Geometrically, $f_x(a, b)$ is the slope of the curve you get by slicing the graph with the vertical plane $y = b$:
the steepness of the surface in the $x$ direction.

To compute, differentiate in the usual way, treating the other variables as constants.

**Example 4.** $f(x, y) = x^2y + y^3$. Then $f_x = 2xy$ and $f_y = x^2 + 3y^2$. At $(1, 2)$: $f_x = 4$,
$f_y = 13$. So near $(1, 2)$ the surface rises 4 units per unit step in $x$ and 13 per unit step in $y$.

**Example 5.** $f(x, y, z) = xe^{yz}$. Then $f_x = e^{yz}$, $f_y = xze^{yz}$, $f_z = xye^{yz}$.

Partial derivatives are themselves functions, so they can be differentiated again. There are four second partial
derivatives of $f(x, y)$:

$$
f_{xx} = \frac{\partial^2 f}{\partial x^2}, \quad f_{yy} = \frac{\partial^2 f}{\partial y^2}, \quad
f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right), \quad
f_{yx} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) .
$$

(Notation varies; here $f_{xy}$ means "first $x$, then $y$".) For Example 4, $f_{xy} = \partial_y(2xy) = 2x$ and
$f_{yx} = \partial_x(x^2 + 3y^2) = 2x$. The two mixed partials agree. That is usual, but it is a theorem, not a
triviality.

**Theorem (Clairaut, Schwarz).** If $f_{xy}$ and $f_{yx}$ exist near $(a, b)$ and are continuous at $(a, b)$, then
$f_{xy}(a, b) = f_{yx}(a, b)$.

*Proof.* Look at the "second difference", which treats $x$ and $y$ symmetrically:

$$
\Delta(h) = f(a + h, b + h) - f(a + h, b) - f(a, b + h) + f(a, b) .
$$

Read it as $\varphi(a + h) - \varphi(a)$ with $\varphi(x) = f(x, b + h) - f(x, b)$. By the mean value theorem there
is $c_1$ between $a$ and $a + h$ with $\Delta = h\varphi'(c_1) = h\left(f_x(c_1, b + h) - f_x(c_1, b)\right)$. Apply
the mean value theorem again, to $y \mapsto f_x(c_1, y)$: there is $d_1$ between $b$ and $b + h$ with
$\Delta = h^2 f_{xy}(c_1, d_1)$.

Now read $\Delta$ the other way, as $\psi(b + h) - \psi(b)$ with $\psi(y) = f(a + h, y) - f(a, y)$. The same two
steps give a point $(c_2, d_2)$, also within $h$ of $(a, b)$ in each coordinate, with $\Delta = h^2 f_{yx}(c_2, d_2)$.

So $f_{xy}(c_1, d_1) = f_{yx}(c_2, d_2)$ for every small $h \neq 0$. As $h \to 0$ both points tend to $(a, b)$, and
by continuity the two sides tend to $f_{xy}(a, b)$ and $f_{yx}(a, b)$. $\square$

The hypothesis matters. **Example 6.** Let

$$
f(x, y) = \frac{xy(x^2 - y^2)}{x^2 + y^2} \text{ for } (x, y) \neq (0, 0), \qquad f(0, 0) = 0 .
$$

On the $y$-axis, $f_x(0, y) = \lim_{h\to0}\frac{f(h, y)}{h} = \lim_{h \to 0}\frac{y(h^2 - y^2)}{h^2 + y^2} = -y$ (for
$y \neq 0$ directly, and for $y = 0$ because $f(h, 0) = 0$). So $f_{xy}(0, 0) = \frac{d}{dy}(-y) = -1$. By the same
computation with roles swapped, $f_y(x, 0) = x$, so $f_{yx}(0, 0) = 1$. The mixed partials differ, and the theorem
explains why: they are not continuous at the origin. (This example is due to Giuseppe Peano, 1884.)

Another warning. In one variable, a differentiable function is continuous. Partial derivatives are weaker: the
function of Example 1 (with $f(0,0) = 0$) has $f_x(0, 0) = f_y(0, 0) = 0$, since it is 0 on both axes, but it is not
even continuous at the origin. Partial derivatives see only two directions. A proper derivative must see all of
them.

## 15.3 The derivative as a linear map

*Level: advanced.*

In one variable, $f'(a)$ is the number such that $f(a + h) \approx f(a) + f'(a)h$, with an error that is small
*compared to $h$*:

$$
\lim_{h \to 0}\frac{f(a + h) - f(a) - f'(a)h}{h} = 0 .
$$

Read it this way: the map $h \mapsto f'(a)h$ is the best **linear** approximation to the change $f(a + h) - f(a)$.
That is the version that generalises. A map $L$ from $\mathbb R^n$ to $\mathbb R^m$ is **linear** if
$L(\mathbf u + \mathbf v) = L\mathbf u + L\mathbf v$ and $L(c\mathbf u) = cL\mathbf u$; every linear map is
multiplication by an $m \times n$ matrix.

**Definition.** A function $\mathbf f: \mathbb R^n \to \mathbb R^m$ (defined near $\mathbf a$) is **differentiable**
at $\mathbf a$ if there is a linear map $L$ with

$$
\lim_{\mathbf h \to \mathbf 0}\frac{|\mathbf f(\mathbf a + \mathbf h) - \mathbf f(\mathbf a) - L\mathbf h|}{|\mathbf h|} = 0 .
$$

Then $L$ is called the **derivative** of $\mathbf f$ at $\mathbf a$, written $D\mathbf f(\mathbf a)$.

In words: near $\mathbf a$, $\mathbf f$ looks like its derivative, up to an error that is small compared with the
size of the step, in every direction at once.

**Theorem.** If $\mathbf f = (f_1, \dots, f_m)$ is differentiable at $\mathbf a$, then all partial derivatives exist
there, and the matrix of $D\mathbf f(\mathbf a)$ is the **Jacobian matrix** whose entry in row $i$, column $j$ is
$\partial f_i/\partial x_j(\mathbf a)$. Also $\mathbf f$ is continuous at $\mathbf a$.

*Proof.* Take $\mathbf h = t\mathbf e_j$, where $\mathbf e_j$ is the $j$th unit coordinate vector and $t \to 0$.
The definition says $\left(\mathbf f(\mathbf a + t\mathbf e_j) - \mathbf f(\mathbf a)\right)/t - L\mathbf e_j \to \mathbf 0$.
The $i$th component of the first term tends to $\partial f_i/\partial x_j(\mathbf a)$ (that is the definition of a
partial derivative), so that partial derivative exists and equals the $i$th entry of $L\mathbf e_j$, which is the
$(i,j)$ entry of the matrix of $L$. For continuity, $|\mathbf f(\mathbf a + \mathbf h) - \mathbf f(\mathbf a)| \le |\mathbf f(\mathbf a + \mathbf h) - \mathbf f(\mathbf a) - L\mathbf h| + |L\mathbf h|$,
and both terms tend to 0. $\square$

So there is only one candidate for the derivative, the matrix of partials; the question is whether it does the job.
Usually it does:

**Theorem.** If all partial derivatives of $f$ exist near $\mathbf a$ and are continuous at $\mathbf a$, then $f$ is
differentiable at $\mathbf a$.

*Proof for $f(x, y)$.* Let $\mathbf h = (h, k)$ and split the change into two one-variable moves:

$$
f(a + h, b + k) - f(a, b) = \left[f(a + h, b + k) - f(a, b + k)\right] + \left[f(a, b + k) - f(a, b)\right] .
$$

By the mean value theorem the first bracket is $f_x(c, b + k)\,h$ for some $c$ between $a$ and $a + h$, and the second
is $f_y(a, d)\,k$ for some $d$ between $b$ and $b + k$. So

$$
f(a + h, b + k) - f(a, b) - f_x(a, b)h - f_y(a, b)k = \left[f_x(c, b + k) - f_x(a, b)\right]h + \left[f_y(a, d) - f_y(a, b)\right]k .
$$

Divide by $|\mathbf h| = \sqrt{h^2 + k^2}$; since $|h|, |k| \le |\mathbf h|$, the result is at most the sum of the two
brackets in absolute value, and both tend to 0 by continuity of the partials. $\square$

A function whose partial derivatives exist and are continuous is called **continuously differentiable**, or $C^1$.
Almost every function you meet in practice is $C^1$ wherever its formula makes sense.

### The gradient and directional derivatives

For a function $f: \mathbb R^n \to \mathbb R$, the derivative is a $1 \times n$ matrix, a row of partials. Written as
a vector it is the **gradient**:

$$
\nabla f(\mathbf a) = \left(\frac{\partial f}{\partial x_1}(\mathbf a), \dots, \frac{\partial f}{\partial x_n}(\mathbf a)\right) .
$$

The symbol $\nabla$ is read "del" or "nabla". The derivative applied to a step is the dot product:
$Df(\mathbf a)\mathbf h = \nabla f(\mathbf a)\cdot\mathbf h$. So the linear approximation is

$$
f(\mathbf a + \mathbf h) \approx f(\mathbf a) + \nabla f(\mathbf a)\cdot\mathbf h .
$$

For $n = 2$, the graph of the right side is the **tangent plane** $z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$.

**Example 7.** For $f = x^2y + y^3$ at $(1, 2)$: $f = 10$ and $\nabla f = (4, 13)$. So
$f(1.01, 1.98) \approx 10 + 4(0.01) + 13(-0.02) = 9.78$. Check: the exact value is $9.78219$.

The **directional derivative** of $f$ at $\mathbf a$ in the direction of a unit vector $\mathbf u$ is the rate of
change as you move through $\mathbf a$ along $\mathbf u$ at unit speed:

$$
D_{\mathbf u}f(\mathbf a) = \lim_{t \to 0}\frac{f(\mathbf a + t\mathbf u) - f(\mathbf a)}{t} = \nabla f(\mathbf a)\cdot\mathbf u,
$$

the last equality holding when $f$ is differentiable (put $\mathbf h = t\mathbf u$ in the definition). For Example 7
in the direction $\mathbf u = (3, 4)/5$: $D_{\mathbf u}f = (4 \cdot 3 + 13 \cdot 4)/5 = 12.8$.

**Which way is steepest?** By the Cauchy–Schwarz inequality, $\nabla f\cdot\mathbf u \le |\nabla f||\mathbf u| = |\nabla f|$,
with equality exactly when $\mathbf u$ points along $\nabla f$. So:

- **the gradient points in the direction of fastest increase of $f$, and its length is that fastest rate;**
- $-\nabla f$ is the direction of fastest decrease;
- in directions perpendicular to $\nabla f$ the rate is zero.

The last point suggests that the gradient is perpendicular to the level sets, which is proved in 15.4. On a hiking
map, the gradient of height points straight uphill, across the contour lines. Water runs along $-\nabla f$. Many
methods in computing, including the training of neural networks, minimise a function by repeatedly stepping a little
way along $-\nabla f$ (**gradient descent**).

### Maps between spaces

For $\mathbf f: \mathbb R^n \to \mathbb R^m$ the Jacobian is a full matrix. **Example 8 (polar coordinates).** The map
$(r, \theta) \mapsto (x, y) = (r\cos\theta, r\sin\theta)$ has

$$
D\mathbf f = \begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix}, \qquad \det D\mathbf f = r .
$$

The columns are the velocity of the point when $r$ alone changes (outwards, length 1) and when $\theta$ alone
changes (around, length $r$). The determinant, $r$, measures how the map stretches areas; it is the factor in
$dA = r\,dr\,d\theta$ in [Chapter 16](16-Multiple-Integrals.md).

## 15.4 The chain rule

*Level: advanced.*

**Theorem (chain rule).** If $\mathbf f$ is differentiable at $\mathbf a$ and $\mathbf g$ is differentiable at
$\mathbf f(\mathbf a)$, then $\mathbf g\circ\mathbf f$ is differentiable at $\mathbf a$, and

$$
D(\mathbf g\circ\mathbf f)(\mathbf a) = D\mathbf g(\mathbf f(\mathbf a))\; D\mathbf f(\mathbf a),
$$

a product of matrices: the best linear approximation of a composition is the composition of the best linear
approximations.

*Proof.* Write $\mathbf b = \mathbf f(\mathbf a)$, $A = D\mathbf f(\mathbf a)$, $B = D\mathbf g(\mathbf b)$, and define
the error terms

$$
\mathbf f(\mathbf a + \mathbf h) = \mathbf b + A\mathbf h + \boldsymbol\varphi(\mathbf h), \qquad \mathbf g(\mathbf b + \mathbf k) = \mathbf g(\mathbf b) + B\mathbf k + \boldsymbol\psi(\mathbf k),
$$

so that $|\boldsymbol\varphi(\mathbf h)|/|\mathbf h| \to 0$ and $|\boldsymbol\psi(\mathbf k)|/|\mathbf k| \to 0$
(set $\boldsymbol\psi(\mathbf 0) = \mathbf 0$). Put $\mathbf k = A\mathbf h + \boldsymbol\varphi(\mathbf h)$, the
change in $\mathbf f$. Then

$$
\mathbf g(\mathbf f(\mathbf a + \mathbf h)) = \mathbf g(\mathbf b) + BA\mathbf h + B\boldsymbol\varphi(\mathbf h) + \boldsymbol\psi(\mathbf k) .
$$

We must show the last two terms, divided by $|\mathbf h|$, tend to 0. Every matrix $M$ has a bound $\|M\|$ with
$|M\mathbf v| \le \|M\||\mathbf v|$ (for example the square root of the sum of the squares of its entries, by
Cauchy–Schwarz on each row). So $|B\boldsymbol\varphi(\mathbf h)|/|\mathbf h| \le \|B\||\boldsymbol\varphi(\mathbf h)|/|\mathbf h| \to 0$.
For the other term, $|\mathbf k| \le \|A\||\mathbf h| + |\boldsymbol\varphi(\mathbf h)| \le (\|A\| + 1)|\mathbf h|$ for small
$\mathbf h$, so $\mathbf k \to \mathbf 0$, and

$$
\frac{|\boldsymbol\psi(\mathbf k)|}{|\mathbf h|} \le (\|A\| + 1)\frac{|\boldsymbol\psi(\mathbf k)|}{|\mathbf k|} \to 0
$$

when $\mathbf k \neq \mathbf 0$ (and the term is 0 when $\mathbf k = \mathbf 0$). $\square$

The proof is the careful one-variable proof of [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md), with matrices.
Written out in coordinates, the matrix product gives the familiar "sum over the middle variables". If $z = f(x, y)$
and $x, y$ depend on $t$:

$$
\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} = \nabla f\cdot\mathbf r'(t),
$$

where $\mathbf r(t) = (x(t), y(t))$. If $x, y$ depend on two variables $s, t$, the same formula holds for each
partial derivative.

**Example 9.** A bug walks along the circle $\mathbf r(t) = (\cos t, \sin t)$ on a plate whose temperature is
$T = x^2 + 2y^2$. Then $\frac{dT}{dt} = 2x(-\sin t) + 4y\cos t = -2\cos t\sin t + 4\sin t\cos t = 2\sin t\cos t = \sin 2t$.
Check: directly, $T = \cos^2t + 2\sin^2t = 1 + \sin^2t$, with derivative $2\sin t\cos t$.

**Example 10 (polar coordinates).** If $u = f(x, y)$ with $x = r\cos\theta$, $y = r\sin\theta$, then

$$
\frac{\partial u}{\partial r} = f_x\cos\theta + f_y\sin\theta, \qquad \frac{\partial u}{\partial \theta} = -f_x r\sin\theta + f_y r\cos\theta .
$$

For $f = x^2 + y^2$: $u_\theta = -2r^2\cos\theta\sin\theta + 2r^2\sin\theta\cos\theta = 0$, as it must, since
$x^2 + y^2 = r^2$ does not depend on $\theta$.

### The gradient is perpendicular to level sets

Let $\mathbf r(t)$ be any differentiable curve lying in the level set $f = c$, passing through $\mathbf a$ at $t = 0$.
Then $f(\mathbf r(t)) = c$ for all $t$, and the chain rule gives $\nabla f(\mathbf a)\cdot\mathbf r'(0) = 0$. So
**$\nabla f(\mathbf a)$ is perpendicular to every curve in the level set through $\mathbf a$**, that is, to the
level set itself. This gives tangent planes to surfaces given by equations.

**Example 11.** The tangent plane to the sphere $x^2 + y^2 + z^2 = 9$ at $(1, 2, 2)$: $\nabla f = (2x, 2y, 2z) = (2, 4, 4)$,
so the plane is $2(x - 1) + 4(y - 2) + 4(z - 2) = 0$, or $x + 2y + 2z = 9$. The normal points along the radius, as you
would expect for a sphere.

### Implicit differentiation, justified

If $F(x, y) = 0$ defines $y$ as a differentiable function of $x$, then differentiating $F(x, y(x)) = 0$ with the chain
rule gives $F_x + F_y\,y' = 0$, so

$$
\frac{dy}{dx} = -\frac{F_x}{F_y} \quad\text{where } F_y \neq 0 .
$$

For the circle $x^2 + y^2 = 25$ at $(3, 4)$: $y' = -2x/(2y) = -3/4$. The **implicit function theorem** says that the
condition $F_y \neq 0$ (with $F$ of class $C^1$) is enough to guarantee that near the point the equation really does
define $y$ as a $C^1$ function of $x$. Its proof, and that of the closely related inverse function theorem, use the
completeness of the real numbers; see [MAT257Y1 Unit 6](../../uoft/MAT257Y1/unit06.md) and
[Unit 7](../../uoft/MAT257Y1/unit07.md). We use it in 15.6.

## 15.5 Maxima, minima and the second derivative test

*Level: advanced.*

Where is a function of several variables largest or smallest? A point $\mathbf a$ is a **local maximum** of $f$ if
$f(\mathbf x) \le f(\mathbf a)$ for all $\mathbf x$ near $\mathbf a$, and similarly for a **local minimum**.

**Theorem.** If $f$ is differentiable at an interior point $\mathbf a$ that is a local maximum or minimum, then
$\nabla f(\mathbf a) = \mathbf 0$.

*Proof.* For each $j$, the one-variable function $t \mapsto f(\mathbf a + t\mathbf e_j)$ has a local extreme at
$t = 0$, so its derivative there, $\partial f/\partial x_j(\mathbf a)$, is 0 by the one-variable theorem
([Chapter 6](06-The-Mean-Value-Theorem.md)). $\square$

A point where $\nabla f = \mathbf 0$ is a **critical point**. As in one variable, it need not be an extreme: at the
origin, $x^2 - y^2$ has a critical point that is a **saddle point**, a minimum along the $x$-axis and a maximum along
the $y$-axis.

To sort critical points, use the second derivatives, collected in the **Hessian matrix**

$$
H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{pmatrix}
$$

(symmetric, by 15.2, when $f$ is $C^2$, meaning its second partials are continuous).

**Second derivative test.** Let $f$ be $C^2$ near a critical point $\mathbf a$, and let
$D = f_{xx}f_{yy} - f_{xy}^2$ (the determinant of $H$), all evaluated at $\mathbf a$.

1. If $D > 0$ and $f_{xx} > 0$, $\mathbf a$ is a local minimum.
2. If $D > 0$ and $f_{xx} < 0$, it is a local maximum.
3. If $D < 0$, it is a saddle point.
4. If $D = 0$, the test says nothing.

*Proof.* Taylor's theorem with remainder (Chapter 13) applied to $g(t) = f(\mathbf a + t\mathbf h)$, with
$\mathbf h = (h, k)$, gives $g(1) = g(0) + g'(0) + \tfrac12 g''(c)$ for some $c$ in $(0, 1)$. By the chain rule
$g'(0) = \nabla f(\mathbf a)\cdot\mathbf h = 0$, and

$$
g''(c) = f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2 = Q(\mathbf h),
$$

with the second partials taken at the point $\mathbf a + c\mathbf h$. So $f(\mathbf a + \mathbf h) - f(\mathbf a) = \tfrac12 Q(\mathbf h)$,
where $Q$ uses second partials at a point near $\mathbf a$. Now study the **quadratic form** $Q_0(h, k) = Ah^2 + 2Bhk + Ck^2$
with $A, B, C$ the second partials at $\mathbf a$ itself. If $A \neq 0$, complete the square:

$$
Q_0 = A\left(h + \frac{B}{A}k\right)^2 + \frac{AC - B^2}{A}k^2 .
$$

If $D = AC - B^2 > 0$ and $A > 0$, both terms are $\ge 0$ and they vanish together only at $h = k = 0$: $Q_0$ is
positive for every $\mathbf h \neq \mathbf 0$. On the unit circle it then has a positive minimum $m$ (a continuous
function on a closed bounded set attains its minimum, Chapter 20), so $Q_0(\mathbf h) \ge m|\mathbf h|^2$ by scaling.
Since the second partials are continuous, the coefficients of $Q$ differ from those of $Q_0$ by less than any given
amount for $\mathbf h$ small enough, so $|Q(\mathbf h) - Q_0(\mathbf h)| \le \tfrac m2|\mathbf h|^2$, and then
$Q(\mathbf h) \ge \tfrac m2|\mathbf h|^2 > 0$. So $f(\mathbf a + \mathbf h) > f(\mathbf a)$ for small $\mathbf h \neq \mathbf 0$:
a strict local minimum. Case 2 is case 1 for $-f$. If $D < 0$, $Q_0$ takes both signs (if $A \neq 0$, take $k = 0$
for the sign of $A$ and $h = -Bk/A$ for the opposite sign; if $A = 0$, then $B \neq 0$, and $(h,k) = (t, 1)$ gives
$2Bt + C$, which takes both signs), and the same continuity argument along those two directions shows that $f$
takes values both above and below $f(\mathbf a)$ arbitrarily close to $\mathbf a$. $\square$

**Example 12.** $f = x^3 - 3x + y^2$. $\nabla f = (3x^2 - 3, 2y) = \mathbf 0$ at $(\pm1, 0)$. $f_{xx} = 6x$,
$f_{yy} = 2$, $f_{xy} = 0$. At $(1, 0)$: $D = 12 > 0$, $f_{xx} = 6 > 0$, a local minimum (value $-2$). At $(-1, 0)$:
$D = -12 < 0$, a saddle.

**Example 13.** $f = x^2 + xy + y^2 - 3x$. Critical point: $2x + y = 3$, $x + 2y = 0$, so $(2, -1)$. $D = 2\cdot2 - 1 = 3 > 0$
and $f_{xx} = 2 > 0$: a minimum, value $4 - 2 + 1 - 6 = -3$. Since $Q$ here does not depend on the point (the
function is quadratic), it is in fact the global minimum.

**Example 14 (the test can fail).** $x^4 + y^4$, $-(x^4 + y^4)$ and $x^4 - y^4$ all have a critical point at the
origin with every second partial 0, so $D = 0$; the first has a minimum there, the second a maximum and the third a
saddle. When $D = 0$ you must look more closely.

**Example 15.** $f = x^4 - 4xy + y^4$. $\nabla f = (4x^3 - 4y, 4y^3 - 4x)$; zero when $y = x^3$ and $x = y^3 = x^9$,
so $x \in \{0, 1, -1\}$ and the critical points are $(0, 0)$, $(1, 1)$, $(-1, -1)$. The Hessian has $f_{xx} = 12x^2$,
$f_{yy} = 12y^2$, $f_{xy} = -4$. At $(0,0)$, $D = -16$: saddle. At $(\pm1, \pm1)$, $D = 144 - 16 = 128 > 0$ and
$f_{xx} = 12 > 0$: minima, with value $-2$.

**In more variables** the same proof works with the $n \times n$ Hessian $H$: if $H$ is **positive definite**
($\mathbf h\cdot H\mathbf h > 0$ for all $\mathbf h \neq \mathbf 0$; equivalently, all eigenvalues positive) the point
is a local minimum; negative definite gives a maximum; eigenvalues of both signs give a saddle.

**Global extremes.** On a closed bounded region a continuous function attains a largest and a smallest value (the
extreme value theorem in several variables, proved in [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md)). They are
either at interior critical points or on the boundary. The boundary is a constraint, which leads to the next
section.

**Example 16 (least squares).** Given data points $(x_i, y_i)$, $i = 1, \dots, n$, which line $y = mx + c$ fits best,
in the sense of making $E(m, c) = \sum (y_i - mx_i - c)^2$ smallest? Setting the partials to 0:

$$
\frac{\partial E}{\partial m} = -2\sum x_i(y_i - mx_i - c) = 0, \qquad \frac{\partial E}{\partial c} = -2\sum (y_i - mx_i - c) = 0 .
$$

These two linear equations (the **normal equations**) give the least-squares line used throughout
[Statistics, Chapter 11](../statistics/11-Linear-Regression.md). For the points $(0, 1), (1, 3), (2, 4)$ they read
$5m + 3c = 11$ and $3m + 3c = 8$, so $m = 1.5$ and $c = 7/6$.

## 15.6 Lagrange multipliers

*Level: advanced.*

Often the variables are not free. Maximise the volume of a box with a given surface area; find the point of a surface
nearest the origin; find the hottest point on the rim of a plate. The question is: maximise or minimise $f(\mathbf x)$
subject to a **constraint** $g(\mathbf x) = c$.

**Example 17, seen.** Maximise $f(x, y) = x + 2y$ on the circle $x^2 + y^2 = 5$. Draw the level lines $x + 2y = k$.
Moving across the lines in the direction of $\nabla f = (1, 2)$, $k$ increases. The largest $k$ whose line still
meets the circle is the line that just touches it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 300" role="img" aria-label="The circle x squared plus y squared equals 5 and the parallel level lines x plus 2y equals c for c from minus 10 to 10. The level line x plus 2y equals 5 just touches the circle at the point (1, 2), where the gradients of both functions point the same way.">
  <line x1="15" y1="150" x2="405" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="210" y1="291" x2="210" y2="9" stroke="currentColor" stroke-width="1"/>
  <line x1="15.0" y1="202.5" x2="192.0" y2="291.0" stroke="#9cc9ea" stroke-width="1.5"/>
  <line x1="15.0" y1="127.5" x2="342.0" y2="291.0" stroke="#9cc9ea" stroke-width="1.5"/>
  <line x1="15.0" y1="52.5" x2="405.0" y2="247.5" stroke="#9cc9ea" stroke-width="1.5"/>
  <line x1="78.0" y1="9.0" x2="405.0" y2="172.5" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="228.0" y1="9.0" x2="405.0" y2="97.5" stroke="#9cc9ea" stroke-width="1.5"/>
  <text x="60" y="64" font-size="11" fill="currentColor">x + 2y = 0</text>
  <text x="306" y="112" font-size="11" fill="currentColor">x + 2y = 5</text>
  <circle cx="210" cy="150" r="67.1" fill="none" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="240.0" y1="90.0" x2="260.1" y2="49.8" stroke="currentColor" stroke-width="2"/>
  <polygon points="260.1,49.8 259.7,59.6 252.5,56.0" fill="currentColor"/>
  <circle cx="240.0" cy="90.0" r="4" fill="currentColor"/>
  <text x="212" y="114" font-size="12" fill="currentColor">(1, 2)</text>
  <text x="266" y="54" font-size="12" fill="currentColor">∇f ∥ ∇g</text>
  <text x="138" y="207" text-anchor="end" font-size="12" fill="currentColor">x² + y² = 5</text>
</svg>
</div>

At the touching point the level line of $f$ and the circle (a level curve of $g = x^2 + y^2$) are tangent, so their
normals are parallel: $\nabla f = \lambda\nabla g$ for some number $\lambda$. Here $(1, 2) = \lambda(2x, 2y)$, so
$x = 1/(2\lambda)$, $y = 1/\lambda$, and the constraint gives $\frac{1}{4\lambda^2} + \frac{1}{\lambda^2} = 5$, so
$\lambda = \pm\tfrac12$. The points are $(1, 2)$ with $f = 5$ (the maximum) and $(-1, -2)$ with $f = -5$ (the
minimum).

**Theorem (Lagrange multipliers).** Let $f$ and $g$ be $C^1$ near $\mathbf a$, with $g(\mathbf a) = c$ and
$\nabla g(\mathbf a) \neq \mathbf 0$. If $f$, restricted to the set $g = c$, has a local maximum or minimum at
$\mathbf a$, then there is a number $\lambda$, a **Lagrange multiplier**, with

$$
\nabla f(\mathbf a) = \lambda\nabla g(\mathbf a) .
$$

*Why it works.* Let $\mathbf r(t)$ be any $C^1$ curve in the constraint set with $\mathbf r(0) = \mathbf a$. Then
$t \mapsto f(\mathbf r(t))$ has a local extreme at $t = 0$, so by the chain rule
$\nabla f(\mathbf a)\cdot\mathbf r'(0) = 0$. So $\nabla f(\mathbf a)$ is perpendicular to every velocity vector of
every curve in the constraint set through $\mathbf a$: to its whole **tangent space**. By 15.4, $\nabla g(\mathbf a)$
is perpendicular to the tangent space too. The remaining step is to show that the tangent space is big: that it
consists of *all* vectors perpendicular to $\nabla g(\mathbf a)$, a space of dimension $n - 1$. Then the vectors
perpendicular to it form a line, the line through $\nabla g(\mathbf a)$, and $\nabla f(\mathbf a)$ lies on it.

*Proof of that step in two variables.* Suppose $g_y(\mathbf a) \neq 0$ (otherwise swap the roles of $x$ and $y$). By
the implicit function theorem, near $\mathbf a = (a, b)$ the set $g = c$ is the graph of a $C^1$ function $y = \varphi(x)$,
and $\mathbf r(t) = (a + t, \varphi(a + t))$ is a curve in it with $\mathbf r'(0) = (1, \varphi'(a))$, a nonzero
vector. The vectors perpendicular to $\nabla g(\mathbf a) \neq \mathbf 0$ in the plane form a line, and
$\mathbf r'(0)$ lies on it (by 15.4), so it spans that line. Now $\nabla f(\mathbf a)\cdot\mathbf r'(0) = 0$ and
$\nabla g(\mathbf a)\cdot\mathbf r'(0) = 0$: both gradients are perpendicular to the same nonzero vector in the
plane, so they are parallel, and since $\nabla g(\mathbf a) \neq \mathbf 0$, $\nabla f(\mathbf a) = \lambda\nabla g(\mathbf a)$.
In $n$ variables the same argument uses the implicit function theorem to write the constraint set as a graph over
$n - 1$ of the variables. $\square$

The hypothesis $\nabla g(\mathbf a) \neq \mathbf 0$ is needed. Minimise $f = x$ on the curve $g = y^2 - x^3 = 0$ (a
cusp): the minimum is at the origin, where $\nabla f = (1, 0)$ but $\nabla g = (0, 0)$, so no $\lambda$ exists. Any
search for candidates must add the points where $\nabla g = \mathbf 0$.

**The recipe.** Solve the $n + 1$ equations $\nabla f = \lambda\nabla g$, $g = c$ for the $n + 1$ unknowns
$x_1, \dots, x_n, \lambda$; add any points with $\nabla g = \mathbf 0$; compare the values of $f$. If the constraint
set is closed and bounded, the largest and smallest values found are the global ones.

**Example 18 (the best box).** Maximise the volume $V = xyz$ of a box with surface area $2(xy + yz + zx) = S$. The
equations are

$$
yz = 2\lambda(y + z), \qquad xz = 2\lambda(x + z), \qquad xy = 2\lambda(x + y) .
$$

Multiply the first by $x$, the second by $y$: $xyz = 2\lambda(xy + xz) = 2\lambda(xy + yz)$, so $\lambda(xz - yz) = 0$.
Since $\lambda \neq 0$ (else $yz = 0$ and the volume is 0), $x = y$. Likewise $y = z$. The best box is a **cube**, with
side $\sqrt{S/6}$.

**Example 19 (nearest point).** Find the point of the plane $x + 2y + 2z = 9$ nearest the origin. Minimise
$x^2 + y^2 + z^2$: $(2x, 2y, 2z) = \lambda(1, 2, 2)$, so $(x, y, z) = \tfrac\lambda2(1, 2, 2)$; the constraint gives
$\tfrac\lambda2\cdot 9 = 9$, $\lambda = 2$, and the point is $(1, 2, 2)$, at distance 3. Check: the distance from
the origin to the plane by the usual formula is $9/\sqrt{1 + 4 + 4} = 3$.

**Example 20 (hottest point on the rim).** $T = x^2 + 2y^2$ on the circle $x^2 + y^2 = 1$:
$(2x, 4y) = \lambda(2x, 2y)$. Either $x = 0$ (then $\lambda = 2$, points $(0, \pm1)$, $T = 2$) or $\lambda = 1$, so
$y = 0$ (points $(\pm 1, 0)$, $T = 1$). Hottest at $(0, \pm1)$, coolest at $(\pm1, 0)$.

### What $\lambda$ means

Let $M(c)$ be the maximum of $f$ on $g = c$, attained at $\mathbf a(c)$. Then, when everything is differentiable,

$$
\frac{dM}{dc} = \lambda .
$$

*Reason:* $M(c) = f(\mathbf a(c))$ and $g(\mathbf a(c)) = c$. Differentiating both with the chain rule:
$M'(c) = \nabla f\cdot\mathbf a'(c) = \lambda\nabla g\cdot\mathbf a'(c) = \lambda\cdot 1$. So the multiplier is the
rate at which the best value improves when the constraint is relaxed. In economics it is called a **shadow price**:
how much one more unit of a limited resource is worth. Check with Example 17: on $x^2 + y^2 = c$ the maximum of
$x + 2y$ is $\sqrt{5c}$, whose derivative at $c = 5$ is $\frac{\sqrt5}{2\sqrt5} = \tfrac12$, which is $\lambda$ at
$(1, 2)$.

**Several constraints.** With constraints $g_1 = c_1, \dots, g_k = c_k$ (and gradients linearly independent at
$\mathbf a$), the condition becomes $\nabla f = \lambda_1\nabla g_1 + \dots + \lambda_k\nabla g_k$: the gradient of
$f$ must lie in the span of the constraint gradients. Lagrange introduced multipliers in his *Mécanique analytique*
(1788), where they appear as the forces needed to hold a mechanical system to its constraints: a bead on a wire
feels a force from the wire, and $\lambda$ measures it.

**Inequality constraints.** Real problems often have constraints like $g \le c$ (a budget that need not be spent in
full). The extension, the Karush–Kuhn–Tucker conditions (William Karush 1939; Harold Kuhn and Albert Tucker 1951),
adds the requirement that $\lambda \ge 0$ and that $\lambda = 0$ when the constraint is not tight; it underlies the
whole field of optimisation.

## Check yourself

??? question "1. Describe the level curves of $f(x, y) = y - x^2$ and of $g(x,y) = e^{-(x^2 + y^2)}$."

    $y - x^2 = c$ is the parabola $y = x^2 + c$: the same parabola shifted up or down. For $g$, $e^{-(x^2+y^2)} = c$
    with $0 < c \le 1$ means $x^2 + y^2 = -\ln c$, a circle of radius $\sqrt{-\ln c}$ (just the origin when $c = 1$).
    There are no level curves for $c > 1$ or $c \le 0$.

??? question "2. Does $\frac{x^2 - y^2}{x^2 + y^2}$ have a limit at the origin? Does $\frac{x^3 + y^3}{x^2 + y^2}$?"

    First: along the $x$-axis it is 1, along the $y$-axis $-1$, so no. Second: in polar coordinates it is
    $r(\cos^3\theta + \sin^3\theta)$, of size at most $2r$, so the limit is 0.

??? question "3. Find all first and second partial derivatives of $f(x,y) = e^{x}\sin y + x^3y^2$ and check that $f_{xy} = f_{yx}$."

    $f_x = e^x\sin y + 3x^2y^2$, $f_y = e^x\cos y + 2x^3y$. $f_{xx} = e^x\sin y + 6xy^2$, $f_{yy} = -e^x\sin y + 2x^3$,
    $f_{xy} = e^x\cos y + 6x^2y = f_{yx}$.

??? question "4. For $f(x, y) = \ln(x^2 + y^2)$, find the gradient at $(3, 4)$, the directional derivative towards the point $(4, 5)$, and the largest possible rate of change there."

    $\nabla f = \left(\frac{2x}{x^2+y^2}, \frac{2y}{x^2+y^2}\right) = (0.24, 0.32)$. Direction $(1, 1)/\sqrt2$:
    $D_{\mathbf u}f = 0.56/\sqrt2 \approx 0.396$. Largest rate $|\nabla f| = 0.4$, in the direction $(3, 4)/5$,
    straight away from the origin.

??? question "5. Find the tangent plane to $z = x^2 + y^2$ at $(1, 2, 5)$ and use it to estimate $1.1^2 + 1.9^2$."

    $f_x = 2$, $f_y = 4$, so $z = 5 + 2(x - 1) + 4(y - 2)$. At $(1.1, 1.9)$: $5 + 0.2 - 0.4 = 4.8$. Exact: $1.21 + 3.61 = 4.82$.

??? question "6. If $w = f(x, y)$ with $x = s + t$, $y = s - t$, show that $w_s w_t = f_x^2 - f_y^2$."

    Chain rule: $w_s = f_x + f_y$ and $w_t = f_x - f_y$. Their product is $f_x^2 - f_y^2$.

??? question "7. Find and classify the critical points of $f = x^3 + y^3 - 3xy$."

    $3x^2 = 3y$ and $3y^2 = 3x$ give $y = x^2$ and $x = x^4$, so $(0,0)$ and $(1,1)$. Hessian: $f_{xx} = 6x$, $f_{yy} = 6y$,
    $f_{xy} = -3$. At $(0,0)$, $D = -9$: saddle. At $(1,1)$, $D = 36 - 9 = 27 > 0$ and $f_{xx} = 6 > 0$: local minimum,
    value $-1$.

??? question "8. Use Lagrange multipliers to find the extreme values of $xy$ on the ellipse $x^2 + 4y^2 = 8$."

    $(y, x) = \lambda(2x, 8y)$. Then $y = 2\lambda x$ and $x = 8\lambda y = 16\lambda^2x$. If $x = 0$ then $y = 0$, not on
    the ellipse; so $\lambda^2 = 1/16$, $y = \pm x/2$, and $x^2 + x^2 = 8$, $x = \pm 2$, $y = \pm1$. Maximum $xy = 2$ at
    $(2,1)$ and $(-2,-1)$; minimum $-2$ at $(2,-1)$ and $(-2,1)$.

??? question "9. Prove the AM–GM inequality for three positive numbers with Lagrange multipliers: maximise $xyz$ on $x + y + z = 3s$."

    $(yz, xz, xy) = \lambda(1,1,1)$ gives $yz = xz = xy$, so $x = y = z = s$ (all positive), with $xyz = s^3$. On the
    closed triangle $x, y, z \ge 0$, $x + y + z = 3s$ the maximum exists, and on its edges $xyz = 0$, so the maximum is
    $s^3$. Hence $xyz \le \left(\frac{x + y + z}{3}\right)^3$.

??? question "10. Show that a $C^1$ function with $\nabla f = \mathbf 0$ everywhere on $\mathbb R^2$ is constant."

    For any two points $\mathbf a$, $\mathbf b$ let $g(t) = f(\mathbf a + t(\mathbf b - \mathbf a))$. By the chain rule,
    $g'(t) = \nabla f\cdot(\mathbf b - \mathbf a) = 0$, so $g$ is constant on $[0,1]$ and $f(\mathbf b) = g(1) = g(0) = f(\mathbf a)$.
    (On a region that is not connected this fails: a function can be 0 on one piece and 1 on another.)

??? question "11. A cylindrical can must hold volume $V$. Which shape uses the least metal (closed top and bottom)?"

    Minimise $A = 2\pi r^2 + 2\pi rh$ subject to $\pi r^2h = V$. Lagrange: $(4\pi r + 2\pi h, 2\pi r) = \lambda(2\pi rh, \pi r^2)$.
    The second gives $\lambda = 2/r$; then the first gives $4\pi r + 2\pi h = 4\pi h$, so $h = 2r$: the height equals the
    diameter.

## What you learned

- A function of several variables is seen through its graph or its level sets; limits must agree along every path,
  and a bound in terms of distance proves them.
- Partial derivatives are one-variable derivatives with the other variables frozen; mixed partials agree when they are
  continuous, and Peano's example shows they can differ otherwise.
- The derivative is the best linear approximation, a matrix of partial derivatives; continuous partials guarantee it
  exists.
- The gradient points uphill, its length is the steepest slope, and it is perpendicular to level sets; directional
  derivatives are dot products with it.
- The chain rule multiplies Jacobian matrices.
- At an interior extreme the gradient is zero; the Hessian (through $D = f_{xx}f_{yy} - f_{xy}^2$) sorts minima, maxima
  and saddles.
- At a constrained extreme $\nabla f = \lambda\nabla g$, because both gradients are perpendicular to the constraint
  set; $\lambda$ is the rate of change of the best value with the constraint.

**Next:** [Chapter 16](16-Multiple-Integrals.md), integrating over regions of the plane and of space, and the
Jacobian determinant that appears when you change coordinates.

## Further reading

- J. Stewart, *Multivariable Calculus* (many editions since 1987): the standard computational treatment.
- M. Spivak, *Calculus on Manifolds* (1965), chapter 2: the derivative as a linear map, the chain rule and the
  inverse and implicit function theorems, short and rigorous.
- J. H. Hubbard and B. B. Hubbard, *Vector Calculus, Linear Algebra, and Differential Forms: A Unified Approach*
  (1999; 5th edition 2015).
- T. M. Apostol, *Calculus*, Volume 2, 2nd edition (1969), chapters 8 and 9.
- On this site: [MAT257Y1 Unit 4: The Derivative as a Linear Map](../../uoft/MAT257Y1/unit04.md),
  [Unit 5: Chain Rule & Higher Derivatives](../../uoft/MAT257Y1/unit05.md),
  [Unit 7: The Implicit Function Theorem](../../uoft/MAT257Y1/unit07.md),
  [Unit 8: Extrema & Lagrange Multipliers](../../uoft/MAT257Y1/unit08.md);
  [Geometry, Chapter 9](../geometry/09-Vectors.md) and [Chapter 19](../geometry/19-Curves-and-Surfaces.md);
  [Statistics, Chapter 11](../statistics/11-Linear-Regression.md) for least squares.
