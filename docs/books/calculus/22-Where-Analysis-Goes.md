# 22. Where analysis goes

*This book began with two old questions, the speed of a falling stone at one instant and the area under a curve. It
answered them with limits, then spent eight chapters making limits honest: real numbers, uniform convergence, metric
spaces, a better integral. Where does the road lead from here? Into almost every part of modern mathematics and physics.
This last chapter is a guided tour of six directions: complex analysis, where calculus with complex numbers turns out to be
astonishingly rigid and powerful; functional analysis, where functions become points of infinite-dimensional spaces;
partial differential equations, including the famous open problem about fluid flow; harmonic analysis and wavelets;
dynamical systems and chaos; and a short list of problems nobody has yet solved. Each section gives honest statements,
one or two things you can check, and a pointer to where the full story is told.*

!!! abstract "In this chapter"
    **You will learn:**

    - complex differentiability, Cauchy's theorem (with a proof from Green's theorem), the residue theorem, and a real
      integral evaluated by residues
    - Banach and Hilbert spaces, and why Fourier series are coordinates in an infinite-dimensional space
    - what the Navier-Stokes equations say, and exactly what the Millennium Prize problem asks
    - the Fourier transform, the uncertainty principle, and wavelets that are local in both time and frequency
    - the logistic map: fixed points, period doubling, Feigenbaum's constant and chaos
    - a handful of open problems at the frontier of analysis

    **You need:** the whole of Part VI, especially [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md) and
    [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md); [Chapter 17](17-Vector-Calculus.md) for Green's theorem
    and the divergence; complex numbers from [Algebra Chapter 9](../algebra/09-Complex-Numbers.md). This chapter states more
    than it proves; where a proof is given it is complete or labelled as a sketch, and where it is not, the text says where
    to find it.

    **Levels:** every section is expert in content but written as a survey. 22.1 and 22.5 can be followed in detail with
    this book; 22.2 and 22.4 need Chapter 21; 22.3 and 22.6 are mostly descriptive.

## 22.1 Complex analysis

*Level: expert.* Let $z = x + iy$ be a complex number and $f(z)$ a complex-valued function. Call $f$ **complex
differentiable**, or **holomorphic**, at $z_0$ if

$$
f'(z_0) = \lim_{h \to 0} \frac{f(z_0 + h) - f(z_0)}{h}
$$

exists, where now $h$ is a complex number that may approach 0 from *any* direction in the plane. The definition looks
exactly like Chapter 4's. The consequences are utterly different.

### Cauchy-Riemann equations

Write $f = u + iv$ with $u, v$ real functions of $(x, y)$. Let $h \to 0$ along the real axis: the limit is
$u_x + i v_x$. Along the imaginary axis, $h = ik$: the limit is $\frac{1}{i}(u_y + i v_y) = v_y - i u_y$. If $f$ is
holomorphic these must agree, so

$$
u_x = v_y, \qquad u_y = -v_x.
$$

These are the **Cauchy-Riemann equations**. (Conversely, if $u, v$ have continuous partial derivatives satisfying them,
$f$ is holomorphic.)

**Examples.** $f(z) = z^2 = (x^2 - y^2) + i(2xy)$: $u_x = 2x = v_y$ and $u_y = -2y = -v_x$. Holomorphic. But
$f(z) = \bar z = x - iy$: $u_x = 1$, $v_y = -1$. Not holomorphic anywhere, although as a map of the plane it is as smooth as
can be (a reflection). Complex differentiability is a strong condition: it says the derivative, as a linear map of the
plane (Chapter 15), is a rotation combined with a scaling.

### Cauchy's theorem

**Cauchy's theorem.** If $f$ is holomorphic on an open set containing a closed curve $\gamma$ and the region it encloses,
then

$$
\oint_\gamma f(z)\, dz = 0.
$$

*Proof, assuming $f'$ is continuous.* Write $dz = dx + i\, dy$, so
$\oint f\, dz = \oint (u\, dx - v\, dy) + i \oint (v\, dx + u\, dy)$. Apply Green's theorem
([Chapter 17](17-Vector-Calculus.md)), $\oint P\, dx + Q\, dy = \iint (Q_x - P_y)\, dA$, to each part:

$$
\oint_\gamma f\, dz = \iint_R (-v_x - u_y)\, dA + i \iint_R (u_x - v_y)\, dA = 0,
$$

because both integrands vanish by Cauchy-Riemann. $\square$

(Édouard Goursat showed in 1900 that the continuity of $f'$ need not be assumed; the proof then subdivides triangles, in
the style of the bisection proofs of Chapter 18.)

Every hypothesis matters. Around the unit circle, $z = e^{i\theta}$, $dz = i e^{i\theta} d\theta$, and

$$
\oint_{|z| = 1} \frac{dz}{z} = \int_0^{2\pi} \frac{i e^{i\theta}}{e^{i\theta}}\, d\theta = 2\pi i \neq 0.
$$

The function $1/z$ is holomorphic everywhere except at 0, which is inside the circle. That single bad point carries the
whole integral, and this observation is the seed of the residue theorem.

### What Cauchy's theorem gives

From Cauchy's theorem comes the **Cauchy integral formula**: for $z_0$ inside $\gamma$,

$$
f(z_0) = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{z - z_0}\, dz.
$$

The values of a holomorphic function inside a circle are determined by its values on the circle. Differentiating under the
integral sign (allowed, as in Chapter 21) shows that $f'$ is holomorphic too, so **a holomorphic function has derivatives
of all orders**, and expanding $1/(z - z_0)$ as a geometric series shows it equals its Taylor series in every disc where it
is holomorphic. In real analysis, a differentiable function need not even have a continuous derivative, and a smooth one
need not equal its Taylor series ($e^{-1/x^2}$, Chapter 13). In complex analysis, one derivative gives everything.

**Liouville's theorem.** A holomorphic function on the whole plane (an **entire** function) that is bounded is constant.

*Proof.* If $|f| \le M$, the integral formula for $f'$ over a circle of radius $R$ around $z_0$ gives
$|f'(z_0)| \le M/R$. Let $R \to \infty$: $f'(z_0) = 0$ for every $z_0$, so $f$ is constant. $\square$

**Corollary (fundamental theorem of algebra).** Every non-constant polynomial $p$ has a complex root. *Proof:* if not,
$1/p$ is entire, and it tends to 0 as $|z| \to \infty$, so it is bounded, hence constant, so $p$ is constant. $\square$
([Algebra Chapter 12](../algebra/12-The-Fundamental-Theorem-of-Algebra.md) gives other proofs.)

### Residues, and a real integral

Near an isolated bad point $a$ (a **pole**), a function like $1/(z - a)$ or $g(z)/(z - a)$ has a **Laurent series**
$\sum_{n = -k}^{\infty} c_n (z - a)^n$. The coefficient $c_{-1}$ is the **residue** of $f$ at $a$. Integrating term by term
around a small circle, every term gives 0 except $c_{-1}/(z - a)$, which gives $2\pi i\, c_{-1}$.

**Residue theorem.** If $f$ is holomorphic inside and on $\gamma$ except at finitely many poles $a_1, \ldots, a_m$ inside,
then

$$
\oint_\gamma f(z)\, dz = 2\pi i \sum_{j=1}^{m} \operatorname{Res}(f, a_j).
$$

For a **simple pole** of $f = g/h$ at $a$ (where $h(a) = 0 \ne h'(a)$ and $g(a) \ne 0$), the residue is $g(a)/h'(a)$.

**Worked example.** Compute $I = \displaystyle\int_{-\infty}^{\infty} \frac{dx}{1 + x^4}$.

*Step 1: the poles.* $1 + z^4 = 0$ when $z^4 = -1$, that is $z = e^{i\pi/4}, e^{3i\pi/4}, e^{5i\pi/4}, e^{7i\pi/4}$. Two lie
in the upper half-plane: $a_1 = e^{i\pi/4}$ and $a_2 = e^{3i\pi/4}$.

*Step 2: the contour.* Take the segment $[-R, R]$ on the real axis followed by the upper semicircle $C_R$ of radius $R > 1$.
It encloses $a_1$ and $a_2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 215" role="img" aria-label="The contour for the worked example: a segment of the real axis from minus R to R and the upper semicircle of radius R. The poles e to the i pi over 4 and e to the 3 i pi over 4 lie inside; the other two poles lie below the axis, outside.">
  <line x1="20" y1="150" x2="320" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="20" x2="170" y2="208" stroke="currentColor" stroke-width="1"/>
  <path d="M 50 150 A 120 120 0 0 1 290 150" fill="none" stroke="#9cc9ea" stroke-width="2.4"/>
  <line x1="50" y1="150" x2="290" y2="150" stroke="#9cc9ea" stroke-width="2.4"/>
  <circle cx="170" cy="150" r="60" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <circle cx="212.4" cy="107.6" r="5"/><circle cx="127.6" cy="107.6" r="5"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.2">
    <circle cx="212.4" cy="192.4" r="5"/><circle cx="127.6" cy="192.4" r="5"/>
  </g>
  <polygon points="236,150 228,146 228,154" fill="currentColor"/>
  <g fill="currentColor" font-size="11">
    <text x="42" y="166">−R</text><text x="284" y="166">R</text>
    <text x="220" y="104">a₁</text><text x="106" y="104">a₂</text>
    <text x="250" y="52">C_R</text><text x="175" y="86">1</text>
  </g>
</svg>
</div>

*Step 3: the residues.* With $g = 1$ and $h = 1 + z^4$, $h' = 4z^3$, so $\operatorname{Res}(f, a) = \frac{1}{4a^3}$. Since
$a^4 = -1$, $\frac{1}{4a^3} = \frac{a}{4a^4} = -\frac{a}{4}$. So the sum of residues is

$$
-\frac{a_1 + a_2}{4} = -\frac14 \left( \frac{1 + i}{\sqrt 2} + \frac{-1 + i}{\sqrt 2} \right) = -\frac{i\sqrt 2}{4}.
$$

*Step 4: the theorem.* $\displaystyle\int_{-R}^{R} \frac{dx}{1 + x^4} + \int_{C_R} \frac{dz}{1 + z^4} = 2\pi i \cdot \left(-\frac{i\sqrt 2}{4}\right) = \frac{\pi\sqrt 2}{2} = \frac{\pi}{\sqrt 2}$.

*Step 5: the arc vanishes.* On $C_R$, $|1 + z^4| \ge |z|^4 - 1 = R^4 - 1$, and the arc has length $\pi R$, so

$$
\left| \int_{C_R} \frac{dz}{1 + z^4} \right| \le \frac{\pi R}{R^4 - 1} \to 0.
$$

*Step 6: the answer.* Letting $R \to \infty$,

$$
\int_{-\infty}^{\infty} \frac{dx}{1 + x^4} = \frac{\pi}{\sqrt 2} \approx 2.2214.
$$

*Check:* a computer algebra system gives $\frac{\sqrt 2\, \pi}{2}$, the same number. The real-variable route, by partial
fractions ([Chapter 10](10-Techniques-of-Integration.md)), works too but takes a page of arctangents and logarithms.

The same method gives $\int_{-\infty}^{\infty} \frac{\cos x}{1 + x^2}\, dx = \frac{\pi}{e}$ (integrate $e^{iz}/(1 + z^2)$),
an integral with no elementary antiderivative behind it. Physicists and engineers use residues daily for exactly this
kind of computation.

**Where it leads.** Complex analysis is the natural home of the Riemann zeta function, whose zeros control the primes
([Number Theory Chapter 14](../number-theory/14-The-Zeta-Function-and-the-Prime-Number-Theorem.md)); of conformal maps,
which preserve angles and solve problems of flow and electrostatics in the plane; and of Riemann surfaces, where
analysis meets geometry ([Geometry Chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md)). Cauchy developed the
integral theorem in a memoir of 1825; Riemann's thesis of 1851 brought in the geometric point of view.

## 22.2 Functional analysis

*Level: expert.* In Chapter 20, functions became points of a metric space, $C[a, b]$, and the contraction theorem solved
equations there. Functional analysis takes this seriously: it studies spaces of functions with the tools of linear algebra
and the analysis of Chapters 18 to 21.

**Normed spaces.** A **norm** on a vector space $V$ is a length $\|v\|$ that is positive for $v \ne 0$, scales
($\|cv\| = |c|\|v\|$), and satisfies the triangle inequality. A **Banach space** is a normed space that is complete in the
metric $d(v, w) = \|v - w\|$. Examples: $\mathbb{R}^n$; $C[a, b]$ with the sup norm (Chapter 20); $L^1$ with
$\|f\|_1 = \int |f|$ (Chapter 21, Riesz-Fischer); $L^p$ with $\|f\|_p = (\int |f|^p)^{1/p}$ for $1 \le p < \infty$.

**Hilbert spaces.** A Banach space whose norm comes from an inner product, $\|v\| = \sqrt{\langle v, v \rangle}$, is a
**Hilbert space**. Then angles, orthogonality and projections make sense, exactly as in $\mathbb{R}^n$. The two
model examples:

- $\ell^2$, the sequences $(c_1, c_2, \ldots)$ with $\sum |c_n|^2 < \infty$, with $\langle c, d \rangle = \sum c_n \overline{d_n}$;
- $L^2[-\pi, \pi]$, with $\langle f, g \rangle = \frac{1}{2\pi}\int_{-\pi}^{\pi} f \bar g$.

Chapter 21 showed that the functions $e^{inx}$ form an orthonormal basis of $L^2[-\pi, \pi]$, and that the map
$f \mapsto (c_n)$ sending a function to its Fourier coefficients preserves lengths (Parseval). So the two examples are the
same Hilbert space in different coordinates. Fourier series are just coordinates.

**Infinite dimensions are different.** In $\mathbb{R}^n$ closed bounded sets are compact (Heine-Borel). In $\ell^2$, the
unit vectors $e_1 = (1, 0, 0, \ldots)$, $e_2 = (0, 1, 0, \ldots)$, ... all have length 1, and
$\|e_m - e_n\| = \sqrt 2$ for $m \ne n$. So no subsequence is Cauchy, and the closed unit ball is not compact. In fact
(F. Riesz) the closed unit ball of a normed space is compact exactly when the space is finite-dimensional. Much of
functional analysis is about finding substitutes for the compactness that has been lost.

**The big theorems.** Four theorems form the backbone: the **Hahn-Banach theorem** (linear functionals extend without
increasing their norm), the **uniform boundedness principle**, the **open mapping theorem**, and the **closed graph
theorem**; the last three rest on the **Baire category theorem** about complete metric spaces. A sample of their power:
the norms of the Dirichlet kernels grow like $\log N$ (Chapter 21), so by uniform boundedness there must be a continuous
function whose Fourier series diverges at 0. The theorem proves existence without a construction, the same way Cantor's
argument proved transcendental numbers exist (Chapter 18).

**Operators and spectra.** A linear map between infinite-dimensional spaces is called an **operator**. The second
derivative $-d^2/dx^2$ on functions vanishing at $0$ and $\pi$ has "eigenvectors" $\sin(nx)$ with eigenvalues $n^2$:
that is what separation of variables found in 21.6. The **spectral theorem** for self-adjoint operators on Hilbert space is
the infinite-dimensional version of diagonalising a symmetric matrix. It is the mathematics of quantum mechanics, where
observables are self-adjoint operators and the possible measured values are points of their spectra; John von Neumann set
this out in his 1932 book.

## 22.3 PDEs and the Navier-Stokes problem

*Level: expert (descriptive).* An ordinary differential equation (Chapter 14) has one independent variable, usually time.
A **partial differential equation** (PDE) has several: space and time. Three classical examples govern most of
mathematical physics:

- the **Laplace equation** $\Delta u = u_{xx} + u_{yy} + u_{zz} = 0$, for steady states (electrostatics, gravity, steady
  heat);
- the **heat equation** $u_t = \kappa \Delta u$, for diffusion (Chapter 21);
- the **wave equation** $u_{tt} = c^2 \Delta u$, for sound, light and vibrating strings.

Their behaviour differs completely: Laplace's solutions are as smooth as can be (they are real parts of holomorphic
functions in two dimensions); the heat equation smooths instantly; the wave equation carries a sharp edge along for ever at
speed $c$. Modern PDE theory works in spaces of functions (Sobolev spaces, built on $L^2$ and Chapter 21) where "solution"
can be given a weak meaning, then tries to prove the weak solutions are in fact smooth.

**The Navier-Stokes equations.** For an incompressible fluid with velocity field $\mathbf{u}(x, t)$ in $\mathbb{R}^3$,
pressure $p$ and viscosity $\nu > 0$, they read

$$
\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla)\mathbf{u} = -\nabla p + \nu\, \Delta \mathbf{u}, \qquad \nabla \cdot \mathbf{u} = 0.
$$

In words: the acceleration of each bit of fluid (the left side, which includes the effect of being carried along by the
flow) equals the push from pressure differences plus the smoothing effect of viscosity; and the fluid is neither created
nor squeezed (the divergence of [Chapter 17](17-Vector-Calculus.md) is zero). These equations are used every day to
design aircraft and forecast weather, and numerical solutions agree with experiment extremely well.

**The problem.** In 2000 the Clay Mathematics Institute listed seven Millennium Prize Problems, each with a prize of one
million dollars. One asks, roughly: given any smooth initial velocity field in $\mathbb{R}^3$ (decaying suitably at
infinity, or periodic), does a smooth solution exist for all time, or can a solution develop a singularity, a point where
the velocity becomes infinite, in finite time? Either a proof of global smoothness or a counterexample would win. The
official statement, by Charles Fefferman, is precise about the function spaces.

**What is known, honestly.**

- In two space dimensions the corresponding question was settled long ago: smooth solutions exist for all time.
- In three dimensions, Jean Leray proved in 1934 that **weak solutions** exist for all time. Whether they are smooth, or
  even unique, is the open question.
- Smooth solutions exist for a short time, and for all time if the initial data is small enough.
- Caffarelli, Kohn and Nirenberg (1982) showed that if singularities occur in a weak solution of the kind they studied,
  the set of singular points in space-time is very small (its one-dimensional parabolic Hausdorff measure is zero).
- Terence Tao (2016) showed that a modified, "averaged" version of the equations, with the same energy identity, does blow
  up in finite time. So any proof of smoothness must use finer features of the true nonlinearity than the energy alone.

The difficulty, in one sentence: viscosity smooths at small scales, the nonlinear term can push energy to ever smaller
scales, and in three dimensions the known estimates cannot decide which wins. Supercomputers cannot settle it either:
a singularity would happen at scales below any grid, and a smooth computed solution proves nothing about all initial data.

## 22.4 Harmonic analysis and wavelets

*Level: expert.* Fourier series decompose periodic functions into frequencies. For a function on the whole line, the
frequencies form a continuum, and the sum becomes an integral.

**The Fourier transform.** For integrable $f$ on $\mathbb{R}$,

$$
\hat f(\xi) = \int_{-\infty}^{\infty} f(x)\, e^{-2\pi i x \xi}\, dx,
$$

the amount of frequency $\xi$ in $f$. Under good conditions $f$ is recovered by the inversion formula
$f(x) = \int \hat f(\xi) e^{2\pi i x \xi}\, d\xi$, and Plancherel's theorem, the analogue of Parseval, says
$\int |f|^2 = \int |\hat f|^2$. The Gaussian $e^{-\pi x^2}$ is its own transform. Differentiation becomes multiplication:
the transform of $f'$ is $2\pi i \xi\, \hat f(\xi)$, which turns linear PDEs with constant coefficients into algebra.

**The uncertainty principle.** A function and its transform cannot both be sharply concentrated. With the normalisation
above, for $\int |f|^2 = 1$,

$$
\left( \int x^2 |f(x)|^2\, dx \right) \left( \int \xi^2 |\hat f(\xi)|^2\, d\xi \right) \ge \frac{1}{16\pi^2},
$$

with equality exactly for Gaussians. A short note has a smeared-out frequency, and a pure frequency lasts for ever. In
quantum mechanics this inequality, for position and momentum, is Heisenberg's uncertainty principle.

**The fast Fourier transform.** In practice signals are sampled: $N$ numbers, with a discrete transform made of $N^2$
multiplications if done naively. James Cooley and John Tukey published in 1965 an algorithm taking about $N \log_2 N$; Gauss
had found the idea around 1805 but left it unpublished. For $N = 2^{20}$ (about a million samples) that is a speed-up of
roughly 50 000 times, which is what made digital audio, medical imaging and much of modern computing practical.

**Wavelets.** Fourier analysis has a weakness: $e^{2\pi i x\xi}$ lasts for ever, so a single click at one moment spreads
over every frequency coefficient. **Wavelets** are building blocks that are localised in time *and* in frequency: one
mother function $\psi$, shifted and squeezed, $\psi_{j,k}(x) = 2^{j/2}\psi(2^j x - k)$.

The simplest is Alfréd Haar's (1910): $\psi = 1$ on $[0, \frac12)$, $-1$ on $[\frac12, 1)$, 0 elsewhere. The functions
$\psi_{j,k}$ together with the constant 1 form an orthonormal basis of $L^2[0, 1]$. In discrete form, the Haar transform
replaces pairs by their averages and half-differences, and repeats on the averages.

**Example.** Take the signal $(4, 6, 10, 12)$. Pairs: $(4, 6) \to$ average 5, detail $-1$; $(10, 12) \to$ average 11,
detail $-1$. Then $(5, 11) \to$ average 8, detail $-3$. The transform is $(8;\ -3;\ -1, -1)$: an overall level, one coarse
detail, two fine details. *Check:* rebuild with average $\pm$ detail: $8 - 3 = 5$, $8 + 3 = 11$; then $5 + (-1) = 4$,
$5 - (-1) = 6$, $11 + (-1) = 10$, $11 - (-1) = 12$. In a smooth signal most details are tiny and can be dropped; that is
compression.

Ingrid Daubechies constructed in 1988 wavelets that are smooth, have compact support, and still give orthonormal bases,
and the theory of multiresolution analysis (Stéphane Mallat and Yves Meyer) made them computable by fast algorithms.
Wavelets are used in the JPEG 2000 image standard, in fingerprint compression, and in the analysis of signals with sudden
events. Rover and orbiter images are often compressed on board before they are sent, and wavelet-based methods are among
those used for such space images, because the downlink is the scarcest resource on a mission.

## 22.5 Dynamical systems and chaos

*Level: expert.* A **dynamical system** is a rule for how a state changes: a differential equation (continuous time) or a
map $x_{n+1} = f(x_n)$ (discrete time). Newton's laws are one; so is a population counted once a year. The questions are
about the long run: does the state settle, cycle, or wander?

### The logistic map

A population with limited food, measured as a fraction $x \in [0, 1]$ of the maximum, is modelled by

$$
x_{n+1} = r\, x_n (1 - x_n), \qquad 0 < r \le 4.
$$

Growth at rate $r$ when $x$ is small, held back by the factor $1 - x$ when it is large. Robert May's 1976 article in
*Nature* drew attention to how much complexity this single line contains.

**Fixed points.** $x = rx(1 - x)$ gives $x = 0$ or $x^* = 1 - 1/r$. A fixed point $x^*$ of a smooth map $f$ is
**attracting** if $|f'(x^*)| < 1$ (nearby points are pulled in, by the mean value theorem: this is the contraction idea of
Chapter 20) and **repelling** if $|f'(x^*)| > 1$. Here $f'(x) = r(1 - 2x)$, so $f'(x^*) = 2 - r$: the fixed point
$1 - 1/r$ attracts for $1 < r < 3$.

*Example:* $r = 2.5$, $x^* = 0.6$, $f'(x^*) = -0.5$. From $x_0 = 0.1$: $0.225, 0.4359, 0.6147, 0.5921, 0.6038, 0.5981, \ldots \to 0.6$, alternating sides because the derivative is negative.

**Period doubling.** At $r = 3$, $f'(x^*) = -1$ and the fixed point loses its grip. Just beyond, the orbit settles into a
**2-cycle**, alternating between two values. At $r = 3.2$ the cycle is $\{0.5130, 0.7995\}$ (Exercise 8): from $x_0 = 0.3$
the orbit runs $0.672, 0.7053, 0.6651, 0.7128, 0.6551, 0.723, \ldots$, separating into a low and a high value. The 2-cycle
in turn loses stability at $r = 1 + \sqrt 6 \approx 3.4495$, giving a 4-cycle; then an 8-cycle at $r \approx 3.5441$,
a 16-cycle at $r \approx 3.5644$, and so on. The doubling values $r_1 = 3, r_2, r_3, \ldots$ crowd together and converge
to $r_\infty \approx 3.5699$. Beyond it, for most $r$, the orbit never settles at all.

**Feigenbaum's constant.** The gaps between successive doublings shrink geometrically:

$$
\frac{r_2 - r_1}{r_3 - r_2} \approx 4.751, \qquad \frac{r_3 - r_2}{r_4 - r_3} \approx 4.656, \qquad \frac{r_4 - r_3}{r_5 - r_4} \approx 4.668,
$$

tending to $\delta = 4.669201\ldots$. Mitchell Feigenbaum discovered in 1975, by computing on a hand calculator, that the
same $\delta$ appears for every smooth one-hump map, not just this one: $x \mapsto r\sin(\pi x)$ gives the same constant.
His explanation used a renormalisation operator acting on a space of functions, and Oscar Lanford gave a computer-assisted
proof of the key conjecture in 1982. The constant has since been measured, approximately, in experiments with fluids and
electronic circuits that undergo period doubling. *Check:* predicting $r_5$ from $r_3, r_4$ and $\delta$ gives
$3.564407 + 0.020317/4.6692 \approx 3.568758$, against the true $3.568759$.

**Chaos at $r = 4$.** Substitute $x = \sin^2(\pi\theta)$. Then $4x(1 - x) = 4\sin^2(\pi\theta)\cos^2(\pi\theta) = \sin^2(2\pi\theta)$. So the logistic map at $r = 4$ is the **doubling map** $\theta \mapsto 2\theta \pmod 1$ in disguise.
In binary, doubling shifts the digits of $\theta$ one place left and drops the integer part. Two starting points that agree
to 30 binary digits agree for about 30 steps and then are unrelated. This is **sensitive dependence on initial conditions**:
errors double each step (the Lyapunov exponent is $\ln 2$). Starting from $x_0 = 0.3$ and $0.3000001$, the two orbits of the
$r = 4$ map are at $0.5939$ and $0.9502$ after 30 steps.

**Order inside chaos.** Alexander Sharkovsky proved in 1964 a striking theorem about continuous maps of an interval: list
the positive integers in the order $3, 5, 7, \ldots, 2\cdot 3, 2 \cdot 5, \ldots, 4 \cdot 3, \ldots, \ldots, 8, 4, 2, 1$;
if a map has a cycle of some period, it has cycles of every period later in the list. In particular, period 3 implies
every period, the theorem that Tien-Yien Li and James Yorke rediscovered in 1975 under the title "Period three implies
chaos", which gave the subject its name.

**Continuous time, and the planets.** Edward Lorenz found in 1963 that a simplified three-variable model of convection
has the same sensitivity, which puts a horizon on weather forecasting. Henri Poincaré had seen it first, around 1890, in the
three-body problem of celestial mechanics. The solar system itself is chaotic on long time scales, and one striking case
is Mars: computations by Jacques Laskar and colleagues, and independently by Jihad Touma and Jack Wisdom, in 1993 showed
that the tilt of Mars's axis wanders chaotically over millions of years, through a much wider range than Earth's, whose
tilt is steadied by our large Moon. The ice and dust layers at the Martian poles are thought to record those swings.

Dynamical systems connect back to everything in this book: fixed points are found by contraction (Chapter 20), stability is
a derivative (Chapter 4), cycles are fixed points of iterates, and the long-run statistics of chaotic maps are measured by
invariant measures (Chapter 21).

!!! note "Try it in Python"
    Watch period doubling as $r$ grows: the last few values of a long orbit.

    ```python
    def tail(r, x=0.3, skip=1000, keep=8):
        for _ in range(skip):
            x = r * x * (1 - x)
        out = []
        for _ in range(keep):
            x = r * x * (1 - x)
            out.append(round(x, 4))
        return sorted(set(out))
    for r in (2.8, 3.2, 3.5, 3.56, 3.7):
        print(r, tail(r))
    # 2.8: one value; 3.2: two; 3.5: four; 3.56: eight; 3.7: no pattern
    ```

## 22.6 Open problems

*Level: expert (descriptive).* Analysis is not finished. Here are some questions that are open as this book is written,
stated as honestly as a survey allows. Each has attracted serious partial results; none is a puzzle with a trick answer.

- **The Riemann hypothesis.** All non-trivial zeros of the zeta function lie on the line where the real part is $1/2$.
  It is a statement in complex analysis whose truth would sharpen the prime number theorem's error term to essentially
  the best possible. Another of the Clay Millennium problems, posed by Riemann in 1859. See
  [Number Theory Chapter 14](../number-theory/14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).
- **Navier-Stokes regularity** (22.3). Global smoothness, or blow-up, for three-dimensional incompressible flow.
- **The invariant subspace problem.** Does every bounded operator on a separable infinite-dimensional Hilbert space have a
  closed invariant subspace other than $\{0\}$ and the whole space? For Banach spaces the answer is no (Per Enflo, and
  Charles Read, gave counterexamples in the 1980s). For Hilbert space, claimed proofs appear from time to time; none has
  yet been accepted by the community as settling it.
- **The Kakeya conjecture.** A set in $\mathbb{R}^n$ containing a unit segment in every direction can have measure zero
  (Besicovitch, 1919), but is it still "full-dimensional", of Hausdorff dimension $n$? True in the plane (Davies, 1971). In
  2025 Hong Wang and Joshua Zahl posted a proof for $\mathbb{R}^3$, which experts have received as a major advance; the
  conjecture in four and more dimensions remains open. It is tied to the restriction problem for the Fourier transform,
  also open.
- **MLC.** Is the Mandelbrot set locally connected? This would give a complete topological description of the dynamics of
  quadratic maps $z \mapsto z^2 + c$, the complex cousin of the logistic map.
- **Hilbert's sixteenth problem (second part).** How many isolated periodic orbits (limit cycles) can a polynomial vector
  field of degree $n$ in the plane have? Not even an upper bound is known for $n = 2$.
- **Sendov's conjecture.** If all zeros of a polynomial lie in the closed unit disc, then each zero has a zero of the
  derivative within distance 1. Proved for many low degrees, and by Tao (2020) for all sufficiently large degrees; open in
  between.

Behind these sit large programmes rather than single questions: understanding turbulence, the spectral theory of
operators arising from geometry and number theory, the long-term behaviour of nonlinear waves. The tools for all of them
are the ones built in this book: limits, completeness, compactness, integrals and series, pushed into new spaces.

## Check yourself

??? question "1. Verify the Cauchy-Riemann equations for $f(z) = e^z = e^x\cos y + i e^x \sin y$."

    $u = e^x\cos y$, $v = e^x\sin y$. Then $u_x = e^x\cos y = v_y$ and $u_y = -e^x\sin y = -v_x$. So $e^z$ is holomorphic
    everywhere, with $f' = u_x + iv_x = e^z$.

??? question "2. Compute $\oint_{|z| = 2} \frac{dz}{z - 1}$ and $\oint_{|z| = 2} \frac{dz}{z - 3}$."

    The first integrand has a simple pole at 1, inside the circle, with residue 1: the integral is $2\pi i$. The second has
    its only pole at 3, outside, so it is holomorphic on and inside the circle and Cauchy's theorem gives 0.

??? question "3. Use residues to show $\int_{-\infty}^{\infty} \frac{dx}{1 + x^2} = \pi$."

    $\frac{1}{1 + z^2}$ has poles at $\pm i$; in the upper half-plane only $i$, with residue $\frac{1}{2i}$ (by $g/h'$ with
    $h' = 2z$). The semicircle contributes at most $\frac{\pi R}{R^2 - 1} \to 0$. So the integral is
    $2\pi i \cdot \frac{1}{2i} = \pi$. *Check:* $\arctan x$ runs from $-\pi/2$ to $\pi/2$.

??? question "4. Use residues to compute $\int_{-\infty}^{\infty} \frac{dx}{(1 + x^2)^2}$."

    The pole at $i$ is double. Write $\frac{1}{(z^2+1)^2} = \frac{1}{(z - i)^2 (z + i)^2}$; the residue at a double pole is
    the derivative of $(z + i)^{-2}$ at $i$: $-2(2i)^{-3} = \frac{-2}{-8i} = \frac{1}{4i}$. The arc vanishes (bound
    $\pi R/(R^2 - 1)^2$). So the integral is $2\pi i \cdot \frac{1}{4i} = \frac{\pi}{2}$.

??? question "5. Show that the unit vectors $e_n$ in $\ell^2$ have no convergent subsequence, and conclude that the closed unit ball of $\ell^2$ is not compact."

    $\|e_m - e_n\|^2 = 1 + 1 = 2$ for $m \ne n$, so any two terms of any subsequence are $\sqrt 2$ apart: no subsequence is
    Cauchy, so none converges. The $e_n$ lie in the closed unit ball, which is therefore not sequentially compact, hence not
    compact (Chapter 20).

??? question "6. Compute the Haar transform of $(2, 4, 8, 6)$ and rebuild the signal from it."

    Pairs: $(2, 4) \to$ average 3, detail $-1$; $(8, 6) \to$ average 7, detail $1$. Then $(3, 7) \to$ average 5, detail $-2$.
    Transform: $(5;\ -2;\ -1, 1)$. Rebuild: $5 - 2 = 3$, $5 + 2 = 7$; $3 - 1 = 2$, $3 + 1 = 4$; $7 + 1 = 8$, $7 - 1 = 6$.

??? question "7. For the logistic map with $r = 2.8$, find the non-zero fixed point and decide whether it attracts."

    $x^* = 1 - 1/2.8 = 9/14 \approx 0.6429$. $f'(x^*) = 2 - r = -0.8$, of absolute value less than 1, so it attracts (slowly,
    alternating sides).

??? question "8. Find the 2-cycle of the logistic map at $r = 3.2$, and show it is attracting."

    Points of period 2 solve $f(f(x)) = x$; dividing out the fixed points leaves $r^2x^2 - r(r+1)x + (r+1) = 0$, so
    $x = \frac{(r+1) \pm \sqrt{(r-3)(r+1)}}{2r} = \frac{4.2 \pm \sqrt{0.84}}{6.4}$, giving $0.7995$ and $0.5130$. The cycle
    attracts if $|f'(x_1)f'(x_2)| < 1$; this product simplifies to $4 + 2r - r^2 = 0.16$. *Check:* $3.2(1 - 2 \cdot 0.7995) \times 3.2(1 - 2\cdot 0.5130) \approx (-1.9165)(-0.0835) \approx 0.16$.

??? question "9. Show the 2-cycle loses stability at $r = 1 + \sqrt 6$."

    The multiplier is $4 + 2r - r^2$. It equals $-1$ when $r^2 - 2r - 5 = 0$, that is $r = 1 + \sqrt 6 \approx 3.4495$ (the
    positive root). For $3 < r < 1 + \sqrt 6$ it lies in $(-1, 1)$; beyond, it is below $-1$ and the 4-cycle takes over.

??? question "10. For the doubling map $\theta \mapsto 2\theta \pmod 1$, two starting points differ by $10^{-10}$. After how many steps can their difference first reach $1/2$?"

    The difference doubles each step (as long as it stays below $1/2$), so after $n$ steps it is $2^n \cdot 10^{-10}$. We need
    $2^n \ge 5 \times 10^9$, so $n \ge \log_2(5 \times 10^9) \approx 32.2$: 33 steps. Ten decimal digits of accuracy buy
    only about 33 steps of prediction.

??? question "11. Explain, using Liouville's theorem, why $\sin z$ is unbounded on the complex plane, and find a point where $|\sin z| > 10$."

    $\sin z$ is entire and not constant, so by Liouville it cannot be bounded. On the imaginary axis,
    $\sin(iy) = i\sinh y$, so $|\sin(3i)| = \sinh 3 \approx 10.02 > 10$. (On the real axis it never exceeds 1; the
    complex plane gives it room to grow.)

## What you learned

- Holomorphic functions satisfy the Cauchy-Riemann equations; Cauchy's theorem follows from Green's theorem, and with it
  the integral formula, infinite differentiability, Liouville's theorem and the fundamental theorem of algebra.
- The residue theorem turns hard real integrals into sums of residues, as in $\int dx/(1 + x^4) = \pi/\sqrt 2$.
- Banach and Hilbert spaces put functions into complete normed spaces; Fourier series are coordinates in $L^2$, and
  infinite-dimensional balls are not compact.
- The Navier-Stokes problem asks whether three-dimensional incompressible flows stay smooth for all time; weak solutions
  exist, and smoothness is open.
- The Fourier transform, the uncertainty principle, the FFT and wavelets are the working tools of signal analysis.
- The logistic map shows period doubling with Feigenbaum's universal constant, and chaos (sensitive dependence) at $r = 4$.
- The frontier includes the Riemann hypothesis, Navier-Stokes, the invariant subspace problem, Kakeya in high dimensions,
  MLC and Hilbert's sixteenth problem.

**Next:** this is the last chapter. Return to the [book's contents](index.md) to revisit any chapter, or go on to the
companion books on this site, such as [Probability](../probability/index.md) and [Geometry](../geometry/index.md).

## Further reading

- L. V. Ahlfors, *Complex Analysis*, 3rd edition, 1979.
- T. Needham, *Visual Complex Analysis*, 1997.
- E. M. Stein and R. Shakarchi, *Complex Analysis*, 2003, and *Functional Analysis*, 2011.
- E. Kreyszig, *Introductory Functional Analysis with Applications*, 1978.
- J. von Neumann, *Mathematische Grundlagen der Quantenmechanik*, 1932.
- L. C. Evans, *Partial Differential Equations*, 2nd edition, 2010.
- C. L. Fefferman, "Existence and smoothness of the Navier-Stokes equation", the official Clay Mathematics Institute problem
  description, 2000.
- T. Tao, "Finite time blowup for an averaged three-dimensional Navier-Stokes equation", *Journal of the American
  Mathematical Society* 29, 2016.
- I. Daubechies, *Ten Lectures on Wavelets*, 1992.
- J. W. Cooley and J. W. Tukey, "An algorithm for the machine calculation of complex Fourier series", *Mathematics of
  Computation* 19, 1965.
- R. M. May, "Simple mathematical models with very complicated dynamics", *Nature* 261, 1976.
- M. J. Feigenbaum, "Quantitative universality for a class of nonlinear transformations", *Journal of Statistical Physics*
  19, 1978.
- E. N. Lorenz, "Deterministic nonperiodic flow", *Journal of the Atmospheric Sciences* 20, 1963.
- J. Laskar and P. Robutel, "The chaotic obliquity of the planets", *Nature* 361, 1993.
- S. H. Strogatz, *Nonlinear Dynamics and Chaos*, 1994.
- U of T guides: [MAT257 Unit 11, Tensors and differential forms](../../uoft/MAT257Y1/unit11.md),
  [MAT257 Unit 14, Stokes' theorem](../../uoft/MAT257Y1/unit14.md).
- Topics lessons: [Euler's formula](../../topics/numbers/level-8/04-euler-formula.md),
  [Iteration and fixed points](../../topics/patterns/level-8/05-iteration-fixed-points.md),
  [Unsolved patterns](../../topics/patterns/level-8/06-unsolved-patterns.md).
- Other books on this site: [Algebra, where algebra goes](../algebra/22-Where-Algebra-Goes.md),
  [Geometry, where geometry goes](../geometry/21-Where-Geometry-Goes.md),
  [Probability, where probability goes](../probability/20-Where-Probability-Goes.md),
  [Number Theory, the zeta function](../number-theory/14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).
