# Glossary

*Short definitions of the terms this book uses, from A to Z, each with a link to the chapter that teaches it.*

## A

**Absolute convergence**
A series $\sum a_n$ converges absolutely if $\sum |a_n|$ converges. Absolute convergence implies convergence, and an absolutely convergent series can be rearranged without changing its sum.
See [Chapter 12](12-Sequences-and-Series.md#124-absolute-and-conditional-convergence).

**Absolute value**
The function $|x|$, equal to $x$ for $x \ge 0$ and $-x$ for $x < 0$. It is continuous everywhere but has a corner at $0$, where it is not differentiable.
See [Chapter 3](03-Continuity.md#31-continuous-functions) and [Chapter 4](04-The-Derivative.md#43-differentiable-implies-continuous).

**Absolutely continuous**
A function $F$ on $[a, b]$ for which small total change in $x$ forces small total change in $F$: for every $\varepsilon > 0$ there is $\delta > 0$ such that disjoint intervals of total length less than $\delta$ have $\sum |F(b_k) - F(a_k)| < \varepsilon$. These are exactly the functions $F(x) = F(a) + \int_a^x f$ with $f$ Lebesgue integrable.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Acceleration**
The rate of change of velocity, the second derivative of position: $a(t) = v'(t) = s''(t)$. Near the Earth's surface a falling stone has acceleration about $9.8$ m/s², and on Mars about $3.71$ m/s².
See [Chapter 4](04-The-Derivative.md#42-the-derivative-as-a-function) and [Chapter 7](07-Applications-of-Derivatives.md#76-motion-falling-on-earth-and-on-mars).

**Accumulation function**
A function $F(x) = \int_a^x f(t)\,dt$ that records the signed area under $f$ from a fixed point $a$ up to $x$. It is always continuous, and the fundamental theorem says its derivative is $f$ where $f$ is continuous.
See [Chapter 9](09-The-Fundamental-Theorem.md#91-accumulation-functions).

**Almost everywhere**
A property holds almost everywhere (a.e.) if it fails only on a set of measure zero. Functions equal almost everywhere have the same Lebesgue integral.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Alternating harmonic series**
The series $1 - \frac12 + \frac13 - \frac14 + \cdots$, which converges to $\ln 2$ but not absolutely. Rearranging its terms can change its sum.
See [Chapter 12](12-Sequences-and-Series.md#123-convergence-tests) and [Chapter 12](12-Sequences-and-Series.md#124-absolute-and-conditional-convergence).

**Alternating series test**
If $b_n$ decreases to $0$, then $\sum (-1)^{n+1} b_n$ converges, and the error after $N$ terms is at most $b_{N+1}$. It is due to Leibniz.
See [Chapter 12](12-Sequences-and-Series.md#123-convergence-tests).

**Antiderivative**
A function $F$ with $F' = f$ on an interval. Any two antiderivatives of $f$ on an interval differ by a constant, and by the fundamental theorem any one of them computes $\int_a^b f = F(b) - F(a)$.
See [Chapter 9](09-The-Fundamental-Theorem.md#93-the-fundamental-theorem-part-2) and [Chapter 9](09-The-Fundamental-Theorem.md#94-antiderivatives).

**Approximate identity**
A family of kernels, such as the Fejér kernels, that are nonnegative, have total integral $1$ (after normalising) and concentrate their mass near $0$. Convolving with them reproduces a continuous function in the limit.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Arc length**
The length of a curve, $\int_a^b \sqrt{1 + f'(x)^2}\,dx$ for the graph of $f$, found by adding the lengths of small straight pieces.
See [Chapter 11](11-Applications-of-Integrals.md#113-arc-length).

**Archimedean property**
For every real number $x$ there is a whole number $n > x$; equivalently $\frac1n \to 0$. It follows from completeness, and it is why the rationals are dense in the reals.
See [Chapter 12](12-Sequences-and-Series.md#121-sequences) and [Chapter 18](18-The-Real-Numbers.md#184-the-archimedean-property-and-density).

**Archimedes' quadrature of the parabola**
Archimedes' theorem that a parabolic segment has $\frac43$ the area of its inscribed triangle, proved by the method of exhaustion and a double contradiction.
See [Chapter 1](01-Rates-and-Areas.md#14-archimedes-and-the-parabola).

**Attracting fixed point**
A fixed point $x^*$ of a map $f$ with $|f'(x^*)| < 1$: points that start near it are pulled in under iteration.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Average speed**
Distance covered divided by time taken over an interval: $\frac{s(b) - s(a)}{b - a}$. It is the slope of a secant line on the distance-time graph.
See [Chapter 1](01-Rates-and-Areas.md#12-average-speed-and-instantaneous-speed).

**Average value**
The average of $f$ on $[a, b]$, $\frac{1}{b - a}\int_a^b f$. By the mean value theorem for integrals a continuous function takes its average value somewhere. For a region in the plane, divide the double integral by the area.
See [Chapter 8](08-The-Integral.md#83-properties-of-the-integral), [Chapter 9](09-The-Fundamental-Theorem.md#95-net-change) and [Chapter 16](16-Multiple-Integrals.md#161-double-integrals).

## B

**Baire category theorem**
A complete metric space is not a countable union of nowhere dense sets. It underlies the uniform boundedness principle, the open mapping theorem and the closed graph theorem.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Banach space**
A normed vector space that is complete in the distance $\|v - w\|$, such as $\mathbb{R}^n$, $C[a, b]$ with the sup norm, or $L^1$.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Basel problem**
The problem of summing $\sum \frac{1}{n^2}$. Euler found the answer $\frac{\pi^2}{6}$ in 1734.
See [Chapter 12](12-Sequences-and-Series.md#125-the-basel-problem).

**Bernoulli's inequality**
For $r \ge 1$ and $x > -1$, $(1 + x)^r \ge 1 + rx$, proved with the mean value theorem.
See [Chapter 6](06-The-Mean-Value-Theorem.md#65-inequalities-from-the-mean-value-theorem).

**Bernstein polynomials**
The polynomials $B_n f(x) = \sum_{k=0}^{n} f(\frac kn)\binom nk x^k(1 - x)^{n-k}$, which converge uniformly to a continuous $f$ on $[0, 1]$ and so prove the Weierstrass approximation theorem.
See [Chapter 19](19-Uniform-Convergence.md#196-the-weierstrass-approximation-theorem).

**Bessel's inequality**
For a square-integrable $f$, the sum of the squares of its Fourier coefficients is at most $\frac{1}{2\pi}\int_{-\pi}^{\pi} |f|^2$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Bijection**
A map between two sets that is one-to-one and onto, pairing their elements exactly. Two sets have the same cardinality when there is a bijection between them.
See [Chapter 18](18-The-Real-Numbers.md#188-countable-and-uncountable).

**Binomial series**
The series $(1 + x)^\alpha = \sum_{n \ge 0} \binom{\alpha}{n} x^n$ for any real $\alpha$, valid for $|x| < 1$.
See [Chapter 13](13-Power-Series-and-Taylor.md#134-the-great-series).

**Bisection method**
A way to find a root of a continuous function: halve an interval where the sign changes and keep the half where it still changes. After $n$ steps the root is pinned to an interval of length $\frac{b - a}{2^n}$.
See [Chapter 3](03-Continuity.md#32-the-intermediate-value-theorem).

**Bolzano-Weierstrass theorem**
Every bounded sequence of real numbers has a convergent subsequence.
See [Chapter 18](18-The-Real-Numbers.md#185-the-bolzano-weierstrass-theorem).

**Bounded**
A function is bounded on a set if some number $K$ has $|f(x)| \le K$ there; a sequence or set is bounded if all its terms or points lie within some fixed distance of $0$. A continuous function on $[a, b]$ is bounded.
See [Chapter 3](03-Continuity.md#33-the-extreme-value-theorem) and [Chapter 12](12-Sequences-and-Series.md#121-sequences).

**Bounded above**
A set $S$ is bounded above if some number $M$ has $s \le M$ for every $s$ in $S$; such an $M$ is an upper bound.
See [Chapter 18](18-The-Real-Numbers.md#182-completeness-the-least-upper-bound-axiom).

**Bump function**
A smooth function that is positive on an interval and zero outside it, built from $e^{-1/x}$. Such functions show that smooth functions need not be analytic.
See [Chapter 13](13-Power-Series-and-Taylor.md#136-a-smooth-function-that-is-not-its-taylor-series).

## C

**Cantor function**
The "devil's staircase": a continuous increasing function from $0$ to $1$ that is constant on every interval removed in building the Cantor set, so its derivative is $0$ almost everywhere.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#205-the-cantor-set).

**Cantor set**
What is left of $[0, 1]$ after removing the open middle third, then the middle thirds of the two pieces left, and so on forever. It has length zero, yet it is uncountable, compact, nowhere dense and perfect.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#205-the-cantor-set).

**Cantor's theorem**
The real numbers are uncountable: no list contains every number in $(0, 1)$, as Cantor's diagonal argument shows.
See [Chapter 18](18-The-Real-Numbers.md#188-countable-and-uncountable).

**Cardinality**
The size of a set. Two sets have the same cardinality if there is a bijection between them; this is how infinite sets are compared.
See [Chapter 18](18-The-Real-Numbers.md#188-countable-and-uncountable).

**Catenary**
The shape of a chain hanging under its own weight, the graph of $y = a\cosh(x/a)$.
See [Chapter 11](11-Applications-of-Integrals.md#113-arc-length).

**Cauchy integral formula**
For $f$ holomorphic inside and on a closed curve $\gamma$, $f(a) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z - a}\,dz$ at every point $a$ inside. The values on the boundary determine the values inside.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Cauchy principal value**
The symmetric limit $\lim_{b \to \infty} \int_{-b}^{b} f$, which can exist even when the improper integral $\int_{-\infty}^{\infty} f$ does not.
See [Chapter 11](11-Applications-of-Integrals.md#116-improper-integrals).

**Cauchy sequence**
A sequence whose terms get close to each other: for every $\varepsilon > 0$, $|a_m - a_n| < \varepsilon$ for all large $m$ and $n$. In $\mathbb{R}$ a sequence converges if and only if it is Cauchy; a metric space where this holds is complete.
See [Chapter 12](12-Sequences-and-Series.md#121-sequences), [Chapter 18](18-The-Real-Numbers.md#183-dedekind-cuts-and-cauchy-sequences) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#204-completeness-and-the-contraction-mapping-theorem).

**Cauchy-Hadamard formula**
The radius of convergence of $\sum c_n (x - a)^n$ is $R = 1/\limsup |c_n|^{1/n}$.
See [Chapter 13](13-Power-Series-and-Taylor.md#131-power-series-and-the-radius-of-convergence).

**Cauchy-Riemann equations**
The equations $u_x = v_y$ and $u_y = -v_x$ that the real and imaginary parts of a holomorphic function $f = u + iv$ satisfy.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Cauchy's mean value theorem**
If $f$ and $g$ are continuous on $[a, b]$ and differentiable inside, there is a $c$ with $(f(b) - f(a))g'(c) = (g(b) - g(a))f'(c)$. It is the key to L'Hôpital's rule.
See [Chapter 6](06-The-Mean-Value-Theorem.md#64-cauchys-mean-value-theorem-and-lhopitals-rule).

**Cauchy's theorem**
If $f$ is holomorphic on an open set containing a closed curve $\gamma$ and the region it encloses, then $\oint_\gamma f(z)\,dz = 0$.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Cavalieri's principle**
Two solids with cross-sections of equal area at every height have equal volumes.
See [Chapter 11](11-Applications-of-Integrals.md#112-volumes).

**Centre of mass**
The balance point of a body, the average position weighted by mass: $\bar x = \frac{\int x\,dm}{\int dm}$. For a uniform plane region it is the centroid.
See [Chapter 11](11-Applications-of-Integrals.md#114-work-pressure-and-centre-of-mass) and [Chapter 16](16-Multiple-Integrals.md#161-double-integrals).

**Centroid**
The centre of mass of a uniform plane region: the average of position over the region.
See [Chapter 11](11-Applications-of-Integrals.md#114-work-pressure-and-centre-of-mass).

**Cesàro means**
The averages $\sigma_N f = \frac{1}{N + 1}(S_0 f + \cdots + S_N f)$ of the partial sums of a Fourier series. Fejér proved they converge uniformly to any continuous periodic $f$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Chain rule**
The derivative of a composition: $(f \circ g)'(x) = f'(g(x))\,g'(x)$, or $\frac{dy}{dx} = \frac{dy}{du}\frac{du}{dx}$. Rates multiply. In several variables the Jacobian matrices multiply.
See [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#51-the-chain-rule) and [Chapter 15](15-Functions-of-Several-Variables.md#154-the-chain-rule).

**Chaos**
Behaviour of a deterministic dynamical system that shows sensitive dependence on initial conditions, as the logistic map does at $r = 4$.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Characteristic equation**
For $ay'' + by' + cy = 0$, the quadratic $ar^2 + br + c = 0$. Its roots $r$ give the solutions $e^{rx}$, and real, repeated or complex roots give the three kinds of solution.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

**Circulation**
The line integral $\oint_C \mathbf F \cdot d\mathbf r$ of a vector field around a closed curve: how much the field pushes along the curve.
See [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).

**Clairaut's theorem**
If the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are continuous, they are equal. Also credited to Schwarz.
See [Chapter 15](15-Functions-of-Several-Variables.md#152-partial-derivatives).

**Closed graph theorem**
A linear map between Banach spaces whose graph is closed is bounded. One of the four big theorems of functional analysis.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Closed set**
A set that contains all its limit points; equivalently, its complement is open. A set is closed exactly when every convergent sequence in it has its limit in it.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Closure**
A set together with all its limit points: the smallest closed set containing it.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Common refinement**
A partition containing all the points of two given partitions, used to compare their upper and lower sums.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums).

**Compact**
A set is compact if every open cover has a finite subcover; in a metric space this is the same as sequentially compact. In $\mathbb{R}^n$ the compact sets are the closed bounded ones (Heine-Borel).
See [Chapter 3](03-Continuity.md#33-the-extreme-value-theorem) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#202-compactness).

**Comparison test**
If $0 \le a_n \le b_n$ and $\sum b_n$ converges, so does $\sum a_n$; if $\sum a_n$ diverges, so does $\sum b_n$. The same holds for improper integrals.
See [Chapter 11](11-Applications-of-Integrals.md#116-improper-integrals) and [Chapter 12](12-Sequences-and-Series.md#123-convergence-tests).

**Complete metric space**
A metric space in which every Cauchy sequence converges. $\mathbb{R}$ is complete; $\mathbb{Q}$ is not.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#204-completeness-and-the-contraction-mapping-theorem).

**Completeness axiom**
Every nonempty set of real numbers that is bounded above has a least upper bound. It is the property that separates $\mathbb{R}$ from $\mathbb{Q}$, and every big theorem of calculus rests on it.
See [Chapter 3](03-Continuity.md#32-the-intermediate-value-theorem) and [Chapter 18](18-The-Real-Numbers.md#182-completeness-the-least-upper-bound-axiom).

**Composition**
The function $f \circ g$, given by $(f \circ g)(x) = f(g(x))$: apply $g$, then $f$. A composition of continuous functions is continuous.
See [Chapter 3](03-Continuity.md#34-continuity-of-compositions-and-inverses) and [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#51-the-chain-rule).

**Concave up / concave down**
A graph is concave up where it bends upwards, like a cup ($f'' > 0$ there), and concave down where it bends downwards ($f'' < 0$).
See [Chapter 7](07-Applications-of-Derivatives.md#71-curve-sketching-and-concavity).

**Conditional convergence**
A series converges conditionally if it converges but $\sum |a_n|$ diverges, like the alternating harmonic series. By Riemann's rearrangement theorem, its terms can be reordered to give any sum.
See [Chapter 12](12-Sequences-and-Series.md#124-absolute-and-conditional-convergence).

**Connected**
A metric space or set is connected if it cannot be split into two disjoint nonempty open pieces. The connected subsets of $\mathbb{R}$ are exactly the intervals.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#203-connectedness).

**Conservative vector field**
A field $\mathbf F$ that is the gradient of a potential, $\mathbf F = \nabla f$. Its line integrals depend only on the endpoints and vanish around closed curves.
See [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).

**Constraint**
An equation such as $g(x, y) = c$ that the points must satisfy in an optimisation problem.
See [Chapter 15](15-Functions-of-Several-Variables.md#156-lagrange-multipliers).

**Continuous at a point**
$f$ is continuous at $a$ if $\lim_{x \to a} f(x) = f(a)$: the value at $a$ is what the nearby values are heading towards. In epsilon-delta form, for every $\varepsilon > 0$ there is $\delta > 0$ with $|f(x) - f(a)| < \varepsilon$ whenever $|x - a| < \delta$.
See [Chapter 3](03-Continuity.md#31-continuous-functions) and [Chapter 18](18-The-Real-Numbers.md#186-proofs-of-the-intermediate-and-extreme-value-theorems).

**Continuous extension**
Filling in a removable discontinuity by giving the function its limit as its value there, such as setting $\frac{\sin x}{x}$ equal to $1$ at $0$.
See [Chapter 3](03-Continuity.md#31-continuous-functions).

**Continuous function**
A function continuous at every point of its domain (or of an interval). In a metric space, $f$ is continuous exactly when the preimage of every open set is open.
See [Chapter 3](03-Continuity.md#31-continuous-functions) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Continuously differentiable**
A function whose partial derivatives all exist and are continuous, written $C^1$. Such a function is differentiable.
See [Chapter 15](15-Functions-of-Several-Variables.md#153-the-derivative-as-a-linear-map).

**Continuum hypothesis**
The statement that there is no set whose size is strictly between that of $\mathbb{N}$ and that of $\mathbb{R}$. It can be neither proved nor disproved from the usual axioms.
See [Chapter 18](18-The-Real-Numbers.md#188-countable-and-uncountable).

**Contour map**
A picture of a function of two variables drawn with its level curves, as on a map of hills.
See [Chapter 15](15-Functions-of-Several-Variables.md#151-graphs-and-level-sets).

**Contraction**
A map $T$ of a metric space with $d(Tx, Ty) \le k\,d(x, y)$ for some constant $k < 1$.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#204-completeness-and-the-contraction-mapping-theorem).

**Contraction mapping theorem**
A contraction of a nonempty complete metric space has exactly one fixed point, and iterating from any starting point converges to it. It was proved by Banach in 1922.
See [Chapter 14](14-Differential-Equations.md#146-existence-and-uniqueness) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#204-completeness-and-the-contraction-mapping-theorem).

**Convergent improper integral**
An improper integral converges if the limit that defines it exists and is finite, and diverges otherwise.
See [Chapter 11](11-Applications-of-Integrals.md#116-improper-integrals).

**Convergent sequence**
A sequence $(a_n)$ converges to $L$ if for every $\varepsilon > 0$ there is $N$ with $|a_n - L| < \varepsilon$ for all $n \ge N$. Otherwise it diverges.
See [Chapter 12](12-Sequences-and-Series.md#121-sequences).

**Convergent series**
A series converges if its sequence of partial sums converges; its sum is that limit. Otherwise it diverges.
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Corner**
A point where a continuous graph changes direction abruptly, so that the left and right derivatives differ, as for $|x|$ at $0$.
See [Chapter 4](04-The-Derivative.md#43-differentiable-implies-continuous).

**Countable**
A set is countable if it is finite or can be listed as $x_1, x_2, x_3, \ldots$, that is, put in bijection with the whole numbers. The integers, the rationals and the algebraic numbers are countable.
See [Chapter 18](18-The-Real-Numbers.md#188-countable-and-uncountable).

**Countably additive**
A measure is countably additive if the measure of a union of countably many disjoint measurable sets is the sum of their measures.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Cover-up method**
A quick way to find the constants in partial fractions: put a root of the denominator into the equation, which covers up all but one term.
See [Chapter 10](10-Techniques-of-Integration.md#104-partial-fractions).

**Critical point**
A point where the derivative is zero or does not exist; in several variables, where the gradient is zero. Interior extrema can only occur at critical points.
See [Chapter 6](06-The-Mean-Value-Theorem.md#61-rolles-theorem), [Chapter 7](07-Applications-of-Derivatives.md#71-curve-sketching-and-concavity) and [Chapter 15](15-Functions-of-Several-Variables.md#155-maxima-minima-and-the-second-derivative-test).

**Critically damped**
A damped spring whose characteristic equation has a repeated root: it returns to rest as fast as possible without oscillating.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

**Curl**
For a vector field $\mathbf F$ in space, $\operatorname{curl}\mathbf F = \nabla \times \mathbf F$, which measures how much the field rotates about each point. A gradient field has zero curl.
See [Chapter 17](17-Vector-Calculus.md#171-vector-fields) and [Chapter 17](17-Vector-Calculus.md#175-the-divergence-theorem-and-stokess-theorem).

**Curse of dimensionality**
The way volume behaves in high dimensions: almost all of a ball's volume lies near its surface, and the unit ball takes up a vanishing fraction of the unit cube. It makes data in many dimensions sparse.
See [Chapter 16](16-Multiple-Integrals.md#165-the-volume-of-a-ball-in-n-dimensions).

**Cusp**
A point where the graph comes to a sharp point with tangents from both sides vertical, as for $y = x^{2/3}$ at $0$; the function is not differentiable there.
See [Chapter 4](04-The-Derivative.md#43-differentiable-implies-continuous).

**Cylindrical coordinates**
Coordinates $(r, \theta, z)$ in space: polar coordinates in the plane plus the height $z$. The volume element is $dV = r\,dr\,d\theta\,dz$.
See [Chapter 16](16-Multiple-Integrals.md#163-triple-integrals).

## D

**Darboux's theorem**
A derivative has the intermediate value property, even when it is not continuous: derivatives cannot jump.
See [Chapter 6](06-The-Mean-Value-Theorem.md#63-consequences-increasing-decreasing-constant).

**De Rham cohomology**
A way of measuring the holes in a space by asking which curl-free (closed) forms fail to be gradients (exact).
See [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).

**Decreasing**
A function is decreasing (strictly decreasing) if $x < y$ implies $f(x) \ge f(y)$ ($f(x) > f(y)$); a sequence is decreasing if each term is at most the one before. A function with $f' < 0$ on an interval is strictly decreasing.
See [Chapter 3](03-Continuity.md#34-continuity-of-compositions-and-inverses), [Chapter 6](06-The-Mean-Value-Theorem.md#63-consequences-increasing-decreasing-constant) and [Chapter 12](12-Sequences-and-Series.md#121-sequences).

**Dedekind cut**
A set $\alpha$ of rationals that is nonempty, not all of $\mathbb{Q}$, closed downwards and without a largest element. Each cut is a real number, and the cuts give a construction of $\mathbb{R}$ from $\mathbb{Q}$.
See [Chapter 18](18-The-Real-Numbers.md#183-dedekind-cuts-and-cauchy-sequences).

**Definite integral**
The number $\int_a^b f(x)\,dx$: the common value of the supremum of the lower sums and the infimum of the upper sums, when they agree. For $f \ge 0$ it is the area under the graph.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums).

**Density of the rationals**
Between any two real numbers there is a rational number. Between any two there is also an irrational one.
See [Chapter 18](18-The-Real-Numbers.md#184-the-archimedean-property-and-density).

**Derivative**
The instantaneous rate of change $f'(a) = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$, the slope of the tangent line at $a$. In several variables the derivative is the linear map that best approximates the function near the point.
See [Chapter 1](01-Rates-and-Areas.md#12-average-speed-and-instantaneous-speed), [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines) and [Chapter 15](15-Functions-of-Several-Variables.md#153-the-derivative-as-a-linear-map).

**Derivative function**
The function $f'$ whose value at each $x$ is the derivative of $f$ at $x$. It is also written $\frac{dy}{dx}$ or $\frac{d}{dx}f$.
See [Chapter 4](04-The-Derivative.md#42-the-derivative-as-a-function).

**Difference quotient**
The slope $\frac{f(a + h) - f(a)}{h}$ of a secant line; its limit as $h \to 0$ is the derivative.
See [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines).

**Differentiable**
$f$ is differentiable at $a$ if $f'(a)$ exists. In several variables, $f$ is differentiable at $\mathbf a$ if a linear map $L$ makes $f(\mathbf a + \mathbf h) = f(\mathbf a) + L\mathbf h + o(|\mathbf h|)$. Differentiable functions are continuous.
See [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines), [Chapter 4](04-The-Derivative.md#43-differentiable-implies-continuous) and [Chapter 15](15-Functions-of-Several-Variables.md#153-the-derivative-as-a-linear-map).

**Differential equation**
An equation relating an unknown function to its derivatives, such as $y' = ky$. An ordinary differential equation has one independent variable; a partial differential equation has several.
See [Chapter 14](14-Differential-Equations.md#141-modelling-with-differential-equations).

**Differential form**
An object that can be integrated over curves, surfaces or solids: 0-forms are functions, 1-forms are like $P\,dx + Q\,dy + R\,dz$, and so on. With the exterior derivative they unify gradient, curl and divergence.
See [Chapter 17](17-Vector-Calculus.md#177-differential-forms-in-one-page).

**Differentials**
The quantities $dx$ and $dy = f'(x)\,dx$, which estimate the change in $y$ caused by a small change $dx$ in $x$.
See [Chapter 7](07-Applications-of-Derivatives.md#74-linear-approximation-and-differentials).

**Dini's theorem**
If continuous functions on $[a, b]$ decrease to a continuous limit at every point, the convergence is uniform.
See [Chapter 19](19-Uniform-Convergence.md#192-uniform-limits-of-continuous-functions-are-continuous).

**Directional derivative**
The rate of change of $f$ at $\mathbf a$ in the direction of a unit vector $\mathbf u$, equal to $\nabla f(\mathbf a) \cdot \mathbf u$.
See [Chapter 15](15-Functions-of-Several-Variables.md#153-the-derivative-as-a-linear-map).

**Dirichlet kernel**
The function $D_N(t) = \sum_{n=-N}^{N} e^{int}$, whose convolution with $f$ gives the $N$th partial sum of its Fourier series.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Dirichlet's function**
The function equal to $1$ at rational numbers and $0$ at irrational ones. It is discontinuous everywhere, not Riemann integrable, and has Lebesgue integral $0$ on $[0, 1]$.
See [Chapter 3](03-Continuity.md#31-continuous-functions), [Chapter 8](08-The-Integral.md#85-a-function-with-no-integral) and [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Dirichlet's theorem**
If $f$ is $2\pi$-periodic and piecewise continuously differentiable, its Fourier series converges at every point to the average of the left and right limits of $f$ there. Dirichlet proved it in 1829.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Discontinuity**
A point where a function is not continuous. It may be removable (a hole), a jump, infinite, or oscillating (essential).
See [Chapter 3](03-Continuity.md#31-continuous-functions).

**Discrete metric**
The metric in which every two distinct points are at distance $1$.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Divergence**
For a vector field, $\operatorname{div}\mathbf F = \nabla \cdot \mathbf F = P_x + Q_y + R_z$, which measures how much the field spreads out from each point (its source density).
See [Chapter 17](17-Vector-Calculus.md#171-vector-fields) and [Chapter 17](17-Vector-Calculus.md#175-the-divergence-theorem-and-stokess-theorem).

**Divergence test**
If $a_n$ does not tend to $0$, the series $\sum a_n$ diverges.
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Divergence theorem**
The total flux of a field out of a closed surface equals the integral of its divergence over the solid inside: $\iint_{\partial E} \mathbf F \cdot d\mathbf S = \iiint_E \operatorname{div}\mathbf F\,dV$. It is due to Gauss and Ostrogradsky.
See [Chapter 17](17-Vector-Calculus.md#175-the-divergence-theorem-and-stokess-theorem).

**Dominated convergence theorem**
If $f_n \to f$ almost everywhere and $|f_n| \le g$ for one integrable $g$, then $\int f_n \to \int f$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#213-the-convergence-theorems).

**Double integral**
The integral $\iint_R f\,dA$ of a function of two variables over a region, defined by Riemann sums over small rectangles. For $f \ge 0$ it is the volume under the graph.
See [Chapter 16](16-Multiple-Integrals.md#161-double-integrals).

**Doubling map**
The map $\theta \mapsto 2\theta \pmod 1$ of the circle; the logistic map at $r = 4$ is this map in disguise.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Dummy variable**
The variable of integration, as $t$ in $\int_a^x f(t)\,dt$. Its name does not matter.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums) and [Chapter 9](09-The-Fundamental-Theorem.md#91-accumulation-functions).

**Dynamical system**
A rule for how a state changes in time, either by iterating a map $x_{n+1} = f(x_n)$ or by a differential equation.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

## E

**e (the number)**
The base $e = 2.71828\ldots$ for which $\lim_{h \to 0}\frac{e^h - 1}{h} = 1$, so that $e^x$ is its own derivative. It is also $\lim_{n \to \infty}(1 + \frac1n)^n$.
See [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#53-exponentials-and-the-number-e) and [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#54-logarithms-inverse-functions-and-implicit-differentiation).

**Eccentricity**
The number $e$ in the polar equation of a conic, measuring how far it is from a circle: $0$ for a circle, between $0$ and $1$ for an ellipse.
See [Chapter 14](14-Differential-Equations.md#147-the-rocket-equation-and-the-orbits-of-planets).

**Elementary functions**
Functions built from $x$ and constants by finitely many arithmetic operations, roots, exponentials, logarithms, trigonometric functions and their inverses, and compositions. Some, like $e^{-x^2}$, have no elementary antiderivative.
See [Chapter 10](10-Techniques-of-Integration.md#105-when-there-is-no-elementary-antiderivative).

**Elliptic integral**
An integral such as $\int \sqrt{1 - k^2\sin^2\theta}\,d\theta$, which gives the arc length of an ellipse and has no elementary antiderivative.
See [Chapter 10](10-Techniques-of-Integration.md#105-when-there-is-no-elementary-antiderivative).

**Entire function**
A function holomorphic on the whole complex plane. By Liouville's theorem a bounded entire function is constant.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Epsilon-delta definition**
$\lim_{x \to a} f(x) = L$ means: for every $\varepsilon > 0$ there is a $\delta > 0$ such that $0 < |x - a| < \delta$ implies $|f(x) - L| < \varepsilon$.
See [Chapter 2](02-Limits.md#25-the-epsilon-delta-definition).

**Escape velocity**
The launch speed needed to leave a planet for good, $\sqrt{2GM/R}$, found by integrating the work against gravity out to infinity. For Mars it is about $5.0$ km/s.
See [Chapter 11](11-Applications-of-Integrals.md#114-work-pressure-and-centre-of-mass) and [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).

**Euler-Mascheroni constant**
The limit $\gamma = \lim (H_N - \ln N) \approx 0.5772$, where $H_N$ is the $N$th harmonic number. Nobody knows whether it is rational.
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Euler's formula**
For every real $\theta$, $e^{i\theta} = \cos\theta + i\sin\theta$. It follows from the power series of the three functions.
See [Chapter 13](13-Power-Series-and-Taylor.md#135-eulers-formula).

**Euler's method**
A numerical way to solve $y' = F(x, y)$: from $(x_n, y_n)$ step to $y_{n+1} = y_n + hF(x_n, y_n)$, following the slope field in steps of size $h$. Its error is of first order in $h$.
See [Chapter 14](14-Differential-Equations.md#145-slope-fields-and-eulers-method).

**Existence theorem**
A theorem that says something exists without saying how to find it, like the intermediate value theorem.
See [Chapter 3](03-Continuity.md#32-the-intermediate-value-theorem).

**Expected value**
The mean of a random variable with density $f$: $\int x f(x)\,dx$.
See [Chapter 11](11-Applications-of-Integrals.md#115-probability-densities).

**Exterior derivative**
The operation $d$ on differential forms that takes a $k$-form to a $(k+1)$-form. On 0-, 1- and 2-forms in space it is the gradient, curl and divergence.
See [Chapter 17](17-Vector-Calculus.md#177-differential-forms-in-one-page).

**Extreme value theorem**
A continuous function on a closed bounded interval $[a, b]$ attains a maximum and a minimum value. More generally, a continuous real function on a compact space does.
See [Chapter 3](03-Continuity.md#33-the-extreme-value-theorem), [Chapter 18](18-The-Real-Numbers.md#186-proofs-of-the-intermediate-and-extreme-value-theorems) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#202-compactness).

## F

**Fast Fourier transform**
An algorithm that computes the discrete Fourier transform of $N$ values in about $N\log N$ steps instead of $N^2$.
See [Chapter 22](22-Where-Analysis-Goes.md#224-harmonic-analysis-and-wavelets).

**Fatou's lemma**
For measurable $f_n \ge 0$, $\int \liminf f_n \le \liminf \int f_n$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#213-the-convergence-theorems).

**Feigenbaum's constant**
The number $\delta \approx 4.669$, the limiting ratio of the gaps between successive period doublings, the same for a wide family of maps.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Fejér kernel**
The kernel $F_N$ whose convolution with $f$ gives the Cesàro means of its Fourier series. It is nonnegative, which is why the Cesàro means behave better than the partial sums.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Fermat's lemma**
If $f$ has a local maximum or minimum at an interior point $c$ and $f'(c)$ exists, then $f'(c) = 0$.
See [Chapter 6](06-The-Mean-Value-Theorem.md#61-rolles-theorem).

**Finite subcover**
A finite selection from an open cover that still covers the set.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#202-compactness).

**First-order method**
A numerical method whose global error is at most a constant times the step size $h$, like Euler's method.
See [Chapter 14](14-Differential-Equations.md#145-slope-fields-and-eulers-method).

**Fixed point**
A point $x$ with $f(x) = x$. Continuous maps of $[0, 1]$ to itself have one, and contractions of a complete space have exactly one.
See [Chapter 3](03-Continuity.md#32-the-intermediate-value-theorem), [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#204-completeness-and-the-contraction-mapping-theorem) and [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Flow line**
A curve whose velocity at each point is the value of a vector field there; the path a particle carried by the field follows.
See [Chapter 17](17-Vector-Calculus.md#171-vector-fields).

**Flux**
The surface integral $\iint_S \mathbf F \cdot \mathbf n\,dS$: how much of a field flows through an oriented surface.
See [Chapter 17](17-Vector-Calculus.md#174-surface-integrals-and-flux).

**Fourier coefficients**
The numbers $c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)e^{-inx}\,dx$ (or the matching $a_n$ and $b_n$ for cosines and sines), found using orthogonality.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#214-fourier-series).

**Fourier series**
The trigonometric series $\sum c_n e^{inx}$, or $\frac{a_0}{2} + \sum (a_n\cos nx + b_n\sin nx)$, built from the Fourier coefficients of a periodic function $f$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#214-fourier-series).

**Fourier transform**
The continuous version of Fourier series for functions on the whole line, $\hat f(\xi) = \int f(x)e^{-2\pi i x\xi}\,dx$, which describes a function by its frequencies.
See [Chapter 22](22-Where-Analysis-Goes.md#224-harmonic-analysis-and-wavelets).

**Fractal**
A set with detail at every scale and, often, a fractional dimension. The Cantor set, with dimension $\log 2/\log 3$, is the simplest.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#205-the-cantor-set).

**Fresnel integral**
The function $\int_0^x \sin(t^2)\,dt$, which has no elementary formula but, by the fundamental theorem, a simple derivative. It is used in optics.
See [Chapter 9](09-The-Fundamental-Theorem.md#92-the-fundamental-theorem-part-1).

**Fubini's theorem**
A double integral of a continuous function over a rectangle can be computed as an iterated integral in either order.
See [Chapter 16](16-Multiple-Integrals.md#161-double-integrals).

**Function**
A rule that gives one output for each input, such as the distance fallen after $t$ seconds.
See [Chapter 1](01-Rates-and-Areas.md#11-two-old-questions).

**Function of two variables**
A rule $f(x, y)$ giving a number for each point of a region of the plane.
See [Chapter 15](15-Functions-of-Several-Variables.md#151-graphs-and-level-sets).

**Fundamental theorem for line integrals**
If $\mathbf F = \nabla f$, then $\int_C \mathbf F \cdot d\mathbf r = f(\text{end}) - f(\text{start})$.
See [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).

**Fundamental theorem of calculus**
Finding areas is undoing rates. Part 1: if $f$ is continuous, $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$. Part 2: if $F' = f$ and $f$ is integrable, $\int_a^b f = F(b) - F(a)$.
See [Chapter 1](01-Rates-and-Areas.md#15-the-surprise-the-two-questions-are-inverse), [Chapter 9](09-The-Fundamental-Theorem.md#92-the-fundamental-theorem-part-1) and [Chapter 9](09-The-Fundamental-Theorem.md#93-the-fundamental-theorem-part-2).

## G

**Gabriel's horn**
The solid formed by rotating $y = 1/x$, $x \ge 1$, about the $x$-axis. It has finite volume $\pi$ but infinite surface area.
See [Chapter 11](11-Applications-of-Integrals.md#116-improper-integrals).

**Gamma function**
$\Gamma(s) = \int_0^\infty t^{s-1}e^{-t}\,dt$ for $s > 0$. It satisfies $\Gamma(n + 1) = n!$, extending the factorial, and $\Gamma(\frac12) = \sqrt\pi$.
See [Chapter 11](11-Applications-of-Integrals.md#116-improper-integrals) and [Chapter 16](16-Multiple-Integrals.md#162-polar-coordinates-and-the-gaussian-integral).

**Gaussian integral**
The integral $\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt\pi$, computed by squaring it and changing to polar coordinates.
See [Chapter 16](16-Multiple-Integrals.md#162-polar-coordinates-and-the-gaussian-integral).

**Gaussian quadrature**
A numerical integration rule that places its sample points cleverly so as to integrate polynomials of the highest possible degree exactly.
See [Chapter 10](10-Techniques-of-Integration.md#106-numerical-integration).

**Generalised Stokes theorem**
The single statement $\int_{\partial M} \omega = \int_M d\omega$ for differential forms, which contains the fundamental theorem of calculus, Green's theorem, Stokes's theorem and the divergence theorem.
See [Chapter 17](17-Vector-Calculus.md#177-differential-forms-in-one-page).

**Geometric series**
The series $\sum_{n \ge 0} ar^n$, which converges to $\frac{a}{1 - r}$ when $|r| < 1$ and diverges otherwise (for $a \ne 0$).
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Gibbs phenomenon**
Near a jump of $f$, the partial sums of its Fourier series overshoot by about 9 per cent of the jump, and the overshoot never shrinks as more terms are added.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#214-fourier-series).

**Gradient**
The vector of partial derivatives $\nabla f = (f_x, f_y, \ldots)$. It points in the direction of fastest increase of $f$, its length is that fastest rate, and it is perpendicular to the level sets.
See [Chapter 15](15-Functions-of-Several-Variables.md#153-the-derivative-as-a-linear-map) and [Chapter 15](15-Functions-of-Several-Variables.md#154-the-chain-rule).

**Gradient descent**
Minimising a function by repeatedly taking a small step in the direction $-\nabla f$, downhill.
See [Chapter 15](15-Functions-of-Several-Variables.md#153-the-derivative-as-a-linear-map).

**Gradient field**
A vector field of the form $\nabla f$; $f$ is then called a potential.
See [Chapter 17](17-Vector-Calculus.md#171-vector-fields).

**Green's theorem**
For a region $D$ in the plane with positively oriented boundary $C$, $\oint_C P\,dx + Q\,dy = \iint_D (Q_x - P_y)\,dA$.
See [Chapter 17](17-Vector-Calculus.md#173-greens-theorem).

**Grönwall's inequality**
An inequality bounding a function by an exponential when its growth is controlled by its own size; it gives uniqueness for differential equations with Lipschitz right-hand side.
See [Chapter 14](14-Differential-Equations.md#146-existence-and-uniqueness).

## H

**Hahn-Banach theorem**
A bounded linear functional on a subspace of a normed space extends to the whole space without increasing its norm.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Half-life**
The time after which half of a quantity decaying exponentially is left, $\frac{\ln 2}{\lambda}$; for an exponential distribution it is the median.
See [Chapter 11](11-Applications-of-Integrals.md#115-probability-densities).

**Hamming distance**
The number of positions in which two strings of bits differ: a metric on bit strings, used in error-correcting codes.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Harmonic numbers**
The partial sums $H_N = 1 + \frac12 + \cdots + \frac1N$ of the harmonic series, which grow like $\ln N$.
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Harmonic series**
The series $\sum \frac1n$, which diverges even though its terms tend to $0$.
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Heat equation**
The partial differential equation $u_t = \kappa u_{xx}$ for the temperature $u(x, t)$ in a rod, where $\kappa$ is the diffusivity. Fourier invented his series to solve it.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#216-the-heat-equation) and [Chapter 22](22-Where-Analysis-Goes.md#223-pdes-and-the-navier-stokes-problem).

**Heine-Borel theorem**
A subset of $\mathbb{R}$ or $\mathbb{R}^n$ is compact if and only if it is closed and bounded.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#202-compactness).

**Heine-Cantor theorem**
A function continuous on a closed bounded interval is uniformly continuous there.
See [Chapter 18](18-The-Real-Numbers.md#187-uniform-continuity-and-the-heine-cantor-theorem).

**Hessian matrix**
The matrix of second partial derivatives of $f$. At a critical point its signs decide between a local minimum, a local maximum and a saddle.
See [Chapter 15](15-Functions-of-Several-Variables.md#155-maxima-minima-and-the-second-derivative-test).

**Higher derivatives**
The derivatives of the derivative: $f''$, $f'''$, ..., $f^{(n)}$. The second derivative of position is acceleration.
See [Chapter 4](04-The-Derivative.md#42-the-derivative-as-a-function).

**Hilbert space**
A Banach space whose norm comes from an inner product, so that angles and orthogonal projections make sense, such as $\ell^2$ or $L^2[-\pi, \pi]$.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Hilbert's sixteenth problem**
An open problem, in its second part: how many isolated periodic orbits (limit cycles) can a polynomial vector field in the plane of a given degree have?
See [Chapter 22](22-Where-Analysis-Goes.md#226-open-problems).

**Hohmann transfer**
The cheapest simple route between two circular orbits: half of an ellipse touching both. It is the basic route from Earth to Mars.
See [Chapter 14](14-Differential-Equations.md#147-the-rocket-equation-and-the-orbits-of-planets).

**Holomorphic**
A complex function is holomorphic (complex differentiable) at $z_0$ if $\lim_{h \to 0}\frac{f(z_0 + h) - f(z_0)}{h}$ exists with $h$ complex. A holomorphic function has derivatives of all orders.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Homogeneous linear equation**
A linear differential equation with zero right-hand side, such as $ay'' + by' + cy = 0$. Sums and multiples of its solutions are solutions (superposition).
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

**Horizontal asymptote**
A line $y = L$ that the graph of $f$ approaches as $x \to \infty$ or $x \to -\infty$, when $\lim f(x) = L$ there.
See [Chapter 2](02-Limits.md#23-one-sided-and-infinite-limits).

## I

**Implicit differentiation**
Differentiating both sides of an equation like $x^2 + y^2 = 1$ with $y$ treated as a function of $x$, then solving for $\frac{dy}{dx}$.
See [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#54-logarithms-inverse-functions-and-implicit-differentiation) and [Chapter 15](15-Functions-of-Several-Variables.md#154-the-chain-rule).

**Implicit function theorem**
If $F(x, y) = 0$ and $F_y \ne 0$ at a point, then near that point the equation defines $y$ as a differentiable function of $x$. It justifies implicit differentiation.
See [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#54-logarithms-inverse-functions-and-implicit-differentiation) and [Chapter 15](15-Functions-of-Several-Variables.md#154-the-chain-rule).

**Improper integral**
An integral over an infinite interval (type 1) or of a function that is unbounded near a point (type 2), defined as a limit of ordinary integrals.
See [Chapter 11](11-Applications-of-Integrals.md#116-improper-integrals).

**Increasing**
A function is increasing (strictly increasing) if $x < y$ implies $f(x) \le f(y)$ ($f(x) < f(y)$); a sequence is increasing if each term is at least the one before. A function with $f' > 0$ on an interval is strictly increasing.
See [Chapter 3](03-Continuity.md#34-continuity-of-compositions-and-inverses), [Chapter 6](06-The-Mean-Value-Theorem.md#63-consequences-increasing-decreasing-constant) and [Chapter 12](12-Sequences-and-Series.md#121-sequences).

**Indefinite integral**
The notation $\int f(x)\,dx = F(x) + C$ for the family of all antiderivatives of $f$ on an interval.
See [Chapter 9](09-The-Fundamental-Theorem.md#94-antiderivatives).

**Indeterminate form**
A limit of a form such as $\frac00$, $\frac\infty\infty$, $0 \cdot \infty$, $\infty - \infty$, $1^\infty$, $0^0$ or $\infty^0$, whose value cannot be read off from the limits of the parts.
See [Chapter 2](02-Limits.md#22-the-limit-laws) and [Chapter 6](06-The-Mean-Value-Theorem.md#64-cauchys-mean-value-theorem-and-lhopitals-rule).

**Indicator function**
The function $\mathbf 1_E$ equal to $1$ on the set $E$ and $0$ off it.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Infimum**
The greatest lower bound of a set of real numbers, written $\inf S$. Every nonempty set that is bounded below has one.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums) and [Chapter 18](18-The-Real-Numbers.md#182-completeness-the-least-upper-bound-axiom).

**Inflection point**
A point where a graph changes concavity, from concave up to concave down or back.
See [Chapter 7](07-Applications-of-Derivatives.md#71-curve-sketching-and-concavity).

**Initial value problem**
A differential equation together with a starting value, such as $y' = f(x, y)$ with $y(x_0) = y_0$.
See [Chapter 9](09-The-Fundamental-Theorem.md#94-antiderivatives) and [Chapter 14](14-Differential-Equations.md#141-modelling-with-differential-equations).

**Injective**
A function is injective (one-to-one) if different inputs give different outputs. A continuous injective function on an interval is strictly monotone.
See [Chapter 3](03-Continuity.md#34-continuity-of-compositions-and-inverses).

**Instantaneous rate of change**
The derivative $f'(a)$: the limit of average rates of change over shorter and shorter intervals.
See [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines).

**Instantaneous speed**
The speed at a single moment: the value the average speeds approach as the time interval shrinks to nothing.
See [Chapter 1](01-Rates-and-Areas.md#12-average-speed-and-instantaneous-speed).

**Integrable**
A bounded function on $[a, b]$ is Riemann integrable if its lower and upper integrals are equal. A measurable function is Lebesgue integrable if $\int |f| < \infty$.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums) and [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Integral equation**
An equation in which the unknown function appears under an integral sign, such as $y(t) = y_0 + \int_{t_0}^{t} F(s, y(s))\,ds$, which is equivalent to an initial value problem.
See [Chapter 14](14-Differential-Equations.md#146-existence-and-uniqueness).

**Integral test**
If $f$ is positive, continuous and decreasing on $[1, \infty)$, then $\sum f(n)$ and $\int_1^\infty f$ converge or diverge together.
See [Chapter 12](12-Sequences-and-Series.md#123-convergence-tests).

**Integrating factor**
A function $\mu(x)$, for $y' + p(x)y = q(x)$ the function $e^{\int p}$, that turns the left side into the derivative of $\mu y$ so the equation can be integrated.
See [Chapter 14](14-Differential-Equations.md#143-linear-first-order-equations).

**Integration by parts**
The rule $\int u\,dv = uv - \int v\,du$, the product rule read backwards.
See [Chapter 10](10-Techniques-of-Integration.md#102-integration-by-parts).

**Interior**
The set of points of a set that have a whole open ball around them inside the set: the largest open set inside it.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Intermediate value theorem**
If $f$ is continuous on $[a, b]$ and $y$ lies between $f(a)$ and $f(b)$, then $f(c) = y$ for some $c$ in $[a, b]$. To show an equation has a solution, find a sign change.
See [Chapter 3](03-Continuity.md#32-the-intermediate-value-theorem) and [Chapter 18](18-The-Real-Numbers.md#186-proofs-of-the-intermediate-and-extreme-value-theorems).

**Invariant subspace problem**
The open problem whether every bounded operator on a separable infinite-dimensional Hilbert space has a closed invariant subspace other than $\{0\}$ and the whole space.
See [Chapter 22](22-Where-Analysis-Goes.md#226-open-problems).

**Inverse function**
The function $f^{-1}$ that undoes a one-to-one function $f$: $f^{-1}(y) = x$ exactly when $f(x) = y$. The inverse of a continuous one-to-one function on an interval is continuous, and $(f^{-1})'(y) = 1/f'(x)$.
See [Chapter 3](03-Continuity.md#34-continuity-of-compositions-and-inverses) and [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#54-logarithms-inverse-functions-and-implicit-differentiation).

**Iterated integral**
An integral computed one variable at a time, such as $\int_a^b \left(\int_c^d f(x, y)\,dy\right) dx$.
See [Chapter 16](16-Multiple-Integrals.md#161-double-integrals).

## J

**Jacobian**
For a change of variables $(u, v) \mapsto (x, y)$, the determinant $\frac{\partial(x, y)}{\partial(u, v)}$ of the Jacobian matrix. Its absolute value is the factor by which the map scales small areas.
See [Chapter 16](16-Multiple-Integrals.md#164-change-of-variables-and-the-jacobian).

**Jacobian matrix**
The matrix of all first partial derivatives of a map $\mathbf f : \mathbb{R}^n \to \mathbb{R}^m$: the matrix of its derivative.
See [Chapter 15](15-Functions-of-Several-Variables.md#153-the-derivative-as-a-linear-map).

**Jump discontinuity**
A discontinuity where the left and right limits both exist but differ.
See [Chapter 3](03-Continuity.md#31-continuous-functions).

## K

**Kakeya conjecture**
The conjecture that a set in $\mathbb{R}^n$ containing a unit segment in every direction, which can have measure zero, must still have Hausdorff dimension $n$. It is known in the plane and in space and open in four or more dimensions.
See [Chapter 22](22-Where-Analysis-Goes.md#226-open-problems).

**Kepler's laws**
Planets move in ellipses with the Sun at a focus; the line from the Sun sweeps out equal areas in equal times; the square of the period is proportional to the cube of the mean distance. All three follow from Newton's law of gravity.
See [Chapter 14](14-Differential-Equations.md#147-the-rocket-equation-and-the-orbits-of-planets).

## L

**Lagrange multiplier**
At a maximum or minimum of $f$ subject to $g = c$, $\nabla f = \lambda \nabla g$ for some number $\lambda$, the Lagrange multiplier. It measures how fast the best value changes as the constraint is relaxed.
See [Chapter 15](15-Functions-of-Several-Variables.md#156-lagrange-multipliers).

**Laplace equation**
The partial differential equation $u_{xx} + u_{yy} + u_{zz} = 0$, whose solutions are the harmonic functions: steady temperatures and electric potentials in empty space.
See [Chapter 22](22-Where-Analysis-Goes.md#223-pdes-and-the-navier-stokes-problem).

**Laplacian**
The operator $\Delta f = \nabla \cdot \nabla f = f_{xx} + f_{yy} + f_{zz}$, the divergence of the gradient.
See [Chapter 17](17-Vector-Calculus.md#171-vector-fields).

**Laurent series**
A series $\sum_{n=-\infty}^{\infty} c_n (z - a)^n$ with negative powers allowed, which represents a holomorphic function near an isolated singularity.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Least upper bound**
See supremum.
See [Chapter 18](18-The-Real-Numbers.md#182-completeness-the-least-upper-bound-axiom).

**Lebesgue integral**
The integral built from measure: approximate $f \ge 0$ from below by simple functions and take the supremum of their integrals. It slices the range instead of the domain, integrates far more functions than Riemann's, and behaves well under limits.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Lebesgue measurable**
A set $E$ is Lebesgue measurable if $m^*(A) = m^*(A \cap E) + m^*(A \setminus E)$ for every set $A$. The measurable sets form a $\sigma$-algebra on which measure is countably additive.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Lebesgue's criterion**
A bounded function on $[a, b]$ is Riemann integrable if and only if its set of discontinuities has measure zero.
See [Chapter 8](08-The-Integral.md#85-a-function-with-no-integral) and [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Left-hand and right-hand limits**
The limits $\lim_{x \to a^-} f(x)$ and $\lim_{x \to a^+} f(x)$, in which $x$ approaches $a$ only from below or only from above. The two-sided limit exists exactly when both exist and agree.
See [Chapter 2](02-Limits.md#23-one-sided-and-infinite-limits).

**Leibniz notation**
Writing the derivative as $\frac{dy}{dx}$ and the integral as $\int f(x)\,dx$. It is not a fraction, but it makes the chain rule and substitution look like algebra.
See [Chapter 4](04-The-Derivative.md#42-the-derivative-as-a-function) and [Chapter 10](10-Techniques-of-Integration.md#101-substitution).

**Leibniz series**
The series $1 - \frac13 + \frac15 - \frac17 + \cdots = \frac\pi4$, the arctangent series at $x = 1$.
See [Chapter 13](13-Power-Series-and-Taylor.md#134-the-great-series).

**Level curve**
The set of points where a function of two variables has a given value, $f(x, y) = c$. For three variables the level sets are level surfaces.
See [Chapter 15](15-Functions-of-Several-Variables.md#151-graphs-and-level-sets).

**L'Hôpital's rule**
If $f(x)$ and $g(x)$ both tend to $0$ (or both to $\pm\infty$) and $\frac{f'(x)}{g'(x)} \to L$, then $\frac{f(x)}{g(x)} \to L$.
See [Chapter 6](06-The-Mean-Value-Theorem.md#64-cauchys-mean-value-theorem-and-lhopitals-rule).

**Limit**
$\lim_{x \to a} f(x) = L$ means that $f(x)$ can be made as close to $L$ as you want by taking $x$ close enough to $a$, but not equal to $a$. The value at $a$ itself is ignored.
See [Chapter 2](02-Limits.md#21-approaching-without-arriving) and [Chapter 2](02-Limits.md#25-the-epsilon-delta-definition).

**Limit at infinity**
$\lim_{x \to \infty} f(x) = L$ means $f(x)$ can be made as close to $L$ as you want by taking $x$ large enough.
See [Chapter 2](02-Limits.md#23-one-sided-and-infinite-limits).

**Limit comparison test**
If $a_n, b_n > 0$ and $a_n/b_n \to L$ with $0 < L < \infty$, then $\sum a_n$ and $\sum b_n$ converge or diverge together. The same holds for improper integrals.
See [Chapter 11](11-Applications-of-Integrals.md#116-improper-integrals) and [Chapter 12](12-Sequences-and-Series.md#123-convergence-tests).

**Limit laws**
The limit of a sum, difference, product or quotient is the sum, difference, product or quotient of the limits, provided those limits exist (and the limit of the denominator is not $0$).
See [Chapter 2](02-Limits.md#22-the-limit-laws) and [Chapter 2](02-Limits.md#26-proving-the-limit-laws).

**Limit point**
A point $p$ is a limit point of a set $S$ if every open ball around $p$ contains a point of $S$ other than $p$.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Limit superior**
$\limsup a_n$: the largest number that some subsequence of a bounded sequence converges to.
See [Chapter 13](13-Power-Series-and-Taylor.md#131-power-series-and-the-radius-of-convergence).

**Limits of integration**
The endpoints $a$ and $b$ in $\int_a^b f(x)\,dx$.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums).

**Line integral**
The integral of a function along a curve, $\int_C f\,ds$, or of a vector field, $\int_C \mathbf F \cdot d\mathbf r$, the work done by the field along the curve.
See [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).

**Linear approximation**
Approximating $f$ near $a$ by its tangent line: $f(x) \approx f(a) + f'(a)(x - a)$. In several variables, the tangent plane does the same.
See [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines) and [Chapter 7](07-Applications-of-Derivatives.md#74-linear-approximation-and-differentials).

**Linear first-order equation**
A differential equation $y' + p(x)y = q(x)$, solved with an integrating factor.
See [Chapter 14](14-Differential-Equations.md#143-linear-first-order-equations).

**Liouville's theorem (complex analysis)**
A bounded entire function is constant. It gives a short proof of the fundamental theorem of algebra.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Liouville's theorem (integration)**
A criterion for when an integral such as $\int fe^g$ with rational $f$ and $g$ has an elementary answer; it proves that $\int e^{-x^2}\,dx$ has none.
See [Chapter 10](10-Techniques-of-Integration.md#105-when-there-is-no-elementary-antiderivative).

**Lipschitz**
A function is Lipschitz with constant $K$ if $|f(x) - f(y)| \le K|x - y|$ for all $x$ and $y$. A function with $|f'| \le K$ on an interval is Lipschitz, and Lipschitz functions are uniformly continuous.
See [Chapter 6](06-The-Mean-Value-Theorem.md#63-consequences-increasing-decreasing-constant), [Chapter 9](09-The-Fundamental-Theorem.md#91-accumulation-functions) and [Chapter 18](18-The-Real-Numbers.md#187-uniform-continuity-and-the-heine-cantor-theorem).

**Lipschitz in y**
A function $F(t, y)$ is Lipschitz in $y$ if $|F(t, y_1) - F(t, y_2)| \le K|y_1 - y_2|$. This condition guarantees existence and uniqueness for $y' = F(t, y)$.
See [Chapter 14](14-Differential-Equations.md#146-existence-and-uniqueness) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#204-completeness-and-the-contraction-mapping-theorem).

**Local error**
The error a numerical method makes in a single step; for Euler's method it is of order $h^2$.
See [Chapter 14](14-Differential-Equations.md#145-slope-fields-and-eulers-method).

**Local maximum / local minimum**
A value $f(c)$ that is the largest (smallest) among the values at nearby points. Both are local extrema.
See [Chapter 6](06-The-Mean-Value-Theorem.md#61-rolles-theorem) and [Chapter 15](15-Functions-of-Several-Variables.md#155-maxima-minima-and-the-second-derivative-test).

**Logarithmic derivative**
The quantity $\frac{y'}{y} = (\ln y)'$, the relative rate of change of $y$.
See [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#55-logarithmic-differentiation).

**Logarithmic differentiation**
Finding $y'$ by differentiating $\ln y$, which turns products, quotients and powers into sums.
See [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#55-logarithmic-differentiation).

**Logistic map**
The map $x \mapsto rx(1 - x)$ on $[0, 1]$. As $r$ grows its behaviour passes from a fixed point through period doubling to chaos.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Lower integral / upper integral**
The supremum of all lower sums and the infimum of all upper sums of $f$ on $[a, b]$. $f$ is integrable when they are equal.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums).

**Lower sum**
The sum of the areas of rectangles whose heights are the smallest (infimum) values of $f$ on each piece of a partition. It is never more than the area.
See [Chapter 1](01-Rates-and-Areas.md#13-areas-by-rectangles) and [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums).

## M

**Maclaurin polynomial**
A Taylor polynomial centred at $0$.
See [Chapter 13](13-Power-Series-and-Taylor.md#133-taylor-polynomials-and-taylors-theorem).

**Mandelbrot set**
The set of complex numbers $c$ for which iterating $z \mapsto z^2 + c$ from $0$ stays bounded. Whether it is locally connected (MLC) is an open problem.
See [Chapter 22](22-Where-Analysis-Goes.md#226-open-problems).

**Marginal cost**
The derivative of cost with respect to quantity produced: the approximate cost of one more unit.
See [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines).

**Maxwell's equations**
The four equations of electromagnetism: Gauss's law, no magnetic charges, Faraday's law and Ampère's law with Maxwell's correction. Together they predict waves that travel at the speed of light.
See [Chapter 17](17-Vector-Calculus.md#176-maxwells-equations-in-words).

**Mean value theorem**
If $f$ is continuous on $[a, b]$ and differentiable inside, there is a $c$ between $a$ and $b$ with $f'(c) = \frac{f(b) - f(a)}{b - a}$: some tangent is parallel to the secant.
See [Chapter 6](06-The-Mean-Value-Theorem.md#62-the-mean-value-theorem).

**Mean value theorem for integrals**
If $f$ is continuous on $[a, b]$, there is a $c$ with $f(c) = \frac{1}{b - a}\int_a^b f$.
See [Chapter 8](08-The-Integral.md#83-properties-of-the-integral) and [Chapter 9](09-The-Fundamental-Theorem.md#95-net-change).

**Measurable function**
A function $f$ such that every set $\{x : f(x) > y\}$ is measurable.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Measure zero**
A set has measure zero if it can be covered by countably many intervals of total length as small as you like. Every countable set has measure zero; so does the Cantor set.
See [Chapter 8](08-The-Integral.md#85-a-function-with-no-integral) and [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Memoryless**
A waiting time is memoryless if having waited does not change the chance of waiting longer; the exponential distribution is the only continuous one with this property.
See [Chapter 11](11-Applications-of-Integrals.md#115-probability-densities).

**Mesh**
The largest width of the subintervals of a partition $P$, written $\|P\|$.
See [Chapter 8](08-The-Integral.md#81-riemann-sums).

**Method of exhaustion**
The Greek method of finding an area by filling it with ever more pieces of known area and proving by contradiction that the answer can be neither more nor less than a given value.
See [Chapter 1](01-Rates-and-Areas.md#14-archimedes-and-the-parabola).

**Metric**
A distance function $d$ on a set: $d(x, y) \ge 0$ with equality only when $x = y$, $d(x, y) = d(y, x)$, and the triangle inequality $d(x, z) \le d(x, y) + d(y, z)$.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Metric space**
A set together with a metric. The real line, $\mathbb{R}^n$, spaces of functions with the sup norm and bit strings with the Hamming distance are examples.
See [Chapter 18](18-The-Real-Numbers.md#183-dedekind-cuts-and-cauchy-sequences) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Moment**
The product of a mass and its signed distance from an axis, summed or integrated over a body; dividing by the total mass gives the centre of mass.
See [Chapter 11](11-Applications-of-Integrals.md#114-work-pressure-and-centre-of-mass).

**Moment of inertia**
The integral $\iiint r^2\,dm$ of mass times squared distance from an axis: how hard a body is to spin. The moment of inertia factor $I/(MR^2)$ of a planet shows how its density increases with depth.
See [Chapter 16](16-Multiple-Integrals.md#163-triple-integrals).

**Monotone**
Increasing or decreasing. A strictly monotone function is one-to-one.
See [Chapter 3](03-Continuity.md#34-continuity-of-compositions-and-inverses) and [Chapter 12](12-Sequences-and-Series.md#121-sequences).

**Monotone convergence theorem (integrals)**
If $0 \le f_1 \le f_2 \le \cdots$ are measurable and $f_n \to f$, then $\int f_n \to \int f$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#213-the-convergence-theorems).

**Monotone convergence theorem (sequences)**
An increasing sequence that is bounded above converges, to the supremum of its terms.
See [Chapter 12](12-Sequences-and-Series.md#121-sequences) and [Chapter 18](18-The-Real-Numbers.md#182-completeness-the-least-upper-bound-axiom).

## N

**Natural frequency**
The frequency $\omega_0 = \sqrt{k/m}$ at which a spring oscillates with no friction and no forcing.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

**Natural logarithm**
The function $\ln x$, the inverse of $e^x$. Its derivative is $\frac1x$.
See [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#54-logarithms-inverse-functions-and-implicit-differentiation).

**Navier-Stokes equations**
The partial differential equations for the motion of a viscous fluid. Whether smooth solutions in three dimensions stay smooth for all time is a Millennium Prize problem.
See [Chapter 22](22-Where-Analysis-Goes.md#223-pdes-and-the-navier-stokes-problem) and [Chapter 22](22-Where-Analysis-Goes.md#226-open-problems).

**Nested interval theorem**
If $[a_1, b_1] \supseteq [a_2, b_2] \supseteq \cdots$ are closed bounded intervals, there is a point in all of them.
See [Chapter 18](18-The-Real-Numbers.md#182-completeness-the-least-upper-bound-axiom).

**Net change theorem**
The integral of a rate of change is the net change: $\int_a^b F'(t)\,dt = F(b) - F(a)$.
See [Chapter 9](09-The-Fundamental-Theorem.md#95-net-change).

**Newton's law of cooling**
An object cools at a rate proportional to the difference between its temperature and that of its surroundings: $T' = -k(T - T_s)$.
See [Chapter 14](14-Differential-Equations.md#141-modelling-with-differential-equations).

**Newton's method**
A way to solve $f(x) = 0$: follow the tangent line to where it crosses the axis, $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$, and repeat. Near a simple root it converges quadratically.
See [Chapter 7](07-Applications-of-Derivatives.md#75-newtons-method).

**Norm**
A length $\|v\|$ on a vector space that is positive for $v \ne 0$, scales as $\|cv\| = |c|\,\|v\|$ and satisfies the triangle inequality.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Normal equations**
The two linear equations that give the least-squares line through a set of data points, found by setting partial derivatives to zero.
See [Chapter 15](15-Functions-of-Several-Variables.md#155-maxima-minima-and-the-second-derivative-test).

**Normal vector**
A vector perpendicular to a curve or surface; for a parametrised surface $\mathbf r(u, v)$ it is $\mathbf r_u \times \mathbf r_v$.
See [Chapter 7](07-Applications-of-Derivatives.md#72-optimisation) and [Chapter 17](17-Vector-Calculus.md#174-surface-integrals-and-flux).

**Nowhere dense**
A set is nowhere dense if its closure contains no interval (no open ball), like the Cantor set.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#205-the-cantor-set).

**Nowhere differentiable function**
A continuous function with no derivative at any point, such as the Takagi function or Weierstrass's function.
See [Chapter 19](19-Uniform-Convergence.md#195-a-continuous-function-that-is-nowhere-differentiable).

**Numerical integration**
Approximating a definite integral by a weighted sum of values of the function, as in the midpoint, trapezoid and Simpson's rules.
See [Chapter 10](10-Techniques-of-Integration.md#106-numerical-integration).

## O

**One-to-one**
See injective.
See [Chapter 3](03-Continuity.md#34-continuity-of-compositions-and-inverses).

**Open ball**
The set $B(a, r)$ of points at distance less than $r$ from $a$.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Open cover**
A collection of open sets whose union contains a given set.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#202-compactness).

**Open interval of convergence**
The interval $(a - R, a + R)$ on which a power series centred at $a$ with radius $R$ converges absolutely.
See [Chapter 13](13-Power-Series-and-Taylor.md#131-power-series-and-the-radius-of-convergence).

**Open mapping theorem**
A bounded linear map from one Banach space onto another takes open sets to open sets.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Open set**
A set that contains an open ball around each of its points.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Operator**
A linear map between vector spaces, especially infinite-dimensional ones such as spaces of functions.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Optimisation**
Finding the largest or smallest value of a quantity, by locating critical points and comparing them with the endpoints.
See [Chapter 7](07-Applications-of-Derivatives.md#72-optimisation).

**Order of a differential equation**
The order of the highest derivative in it.
See [Chapter 14](14-Differential-Equations.md#141-modelling-with-differential-equations).

**Ordinary differential equation**
A differential equation for a function of one variable.
See [Chapter 14](14-Differential-Equations.md#141-modelling-with-differential-equations).

**Orthogonal**
Two functions are orthogonal on $[-\pi, \pi]$ if the integral of their product is $0$; the functions $\sin nx$ and $\cos nx$ are orthogonal to each other.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#214-fourier-series).

**Orthonormal basis**
A set of mutually orthogonal unit vectors whose combinations approximate every vector; the functions $e^{inx}$ form one for $L^2[-\pi, \pi]$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Outer measure**
For any set $A \subseteq \mathbb{R}$, the infimum $m^*(A)$ of the total lengths of countable families of open intervals covering $A$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Overdamped**
A damped spring whose characteristic equation has two distinct real roots: it creeps back to rest without oscillating.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

## P

**Pappus's theorem**
The volume swept out by rotating a plane region about an axis that does not cross it equals its area times the distance travelled by its centroid.
See [Chapter 11](11-Applications-of-Integrals.md#114-work-pressure-and-centre-of-mass).

**Parametrised surface**
A surface given as the image of a map $\mathbf r(u, v)$ from a region of the plane into space.
See [Chapter 17](17-Vector-Calculus.md#174-surface-integrals-and-flux).

**Parseval's identity**
For square-integrable $f$, the sum of the squares of the moduli of its Fourier coefficients equals $\frac{1}{2\pi}\int_{-\pi}^{\pi} |f|^2$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Partial derivative**
The derivative of a function of several variables with respect to one variable, the others held fixed: $f_x = \frac{\partial f}{\partial x}$.
See [Chapter 15](15-Functions-of-Several-Variables.md#152-partial-derivatives).

**Partial differential equation**
A differential equation for a function of several variables, involving its partial derivatives, such as the heat, wave and Laplace equations.
See [Chapter 22](22-Where-Analysis-Goes.md#223-pdes-and-the-navier-stokes-problem).

**Partial fractions**
Writing a proper rational function as a sum of simple fractions $\frac{A}{(x - a)^k}$ and $\frac{Bx + C}{(x^2 + px + q)^k}$, each easy to integrate.
See [Chapter 10](10-Techniques-of-Integration.md#104-partial-fractions).

**Partial sums**
The sums $s_N = a_1 + \cdots + a_N$ of the first $N$ terms of a series.
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Particular solution**
One solution of a nonhomogeneous linear equation; adding the general solution of the homogeneous equation gives all solutions.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

**Partition**
A finite set of points $a = x_0 < x_1 < \cdots < x_n = b$ cutting $[a, b]$ into subintervals.
See [Chapter 8](08-The-Integral.md#81-riemann-sums).

**Path-connected**
A set is path-connected if any two of its points can be joined by a continuous path inside it. Path-connected sets are connected, but not conversely.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#203-connectedness).

**Perfect set**
A closed set with no isolated points: every point is a limit of other points of the set, as in the Cantor set.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#205-the-cantor-set).

**Period doubling**
The way a fixed point of the logistic map gives way to a 2-cycle, then a 4-cycle, and so on, as $r$ increases.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Picard iteration**
Solving $y' = F(t, y)$, $y(t_0) = y_0$ by repeatedly substituting into $y_{n+1}(t) = y_0 + \int_{t_0}^{t} F(s, y_n(s))\,ds$; the iterates converge to the solution.
See [Chapter 14](14-Differential-Equations.md#146-existence-and-uniqueness) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#204-completeness-and-the-contraction-mapping-theorem).

**Picard-Lindelöf theorem**
If $F$ is continuous and Lipschitz in $y$ near $(t_0, y_0)$, the problem $y' = F(t, y)$, $y(t_0) = y_0$ has exactly one solution on some interval around $t_0$.
See [Chapter 14](14-Differential-Equations.md#146-existence-and-uniqueness) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#204-completeness-and-the-contraction-mapping-theorem).

**Planimeter**
A mechanical instrument that measures the area of a region by tracing its boundary, an application of Green's theorem.
See [Chapter 17](17-Vector-Calculus.md#173-greens-theorem).

**Pointwise convergence**
A sequence of functions $f_n$ converges pointwise to $f$ on $D$ if $f_n(x) \to f(x)$ for each $x$ in $D$ separately.
See [Chapter 19](19-Uniform-Convergence.md#191-pointwise-versus-uniform-convergence).

**Polar coordinates**
Coordinates $(r, \theta)$ in the plane, with $x = r\cos\theta$ and $y = r\sin\theta$. The area element is $dA = r\,dr\,d\theta$.
See [Chapter 16](16-Multiple-Integrals.md#162-polar-coordinates-and-the-gaussian-integral).

**Pole**
An isolated singularity $a$ of $f$ where $|f(z)| \to \infty$; near it the Laurent series has only finitely many negative powers. A simple pole has just the power $(z - a)^{-1}$.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Positive definite**
A quadratic form $Q$ is positive definite if $Q(\mathbf h) > 0$ for every $\mathbf h \ne \mathbf 0$. A critical point with positive definite Hessian is a local minimum.
See [Chapter 15](15-Functions-of-Several-Variables.md#155-maxima-minima-and-the-second-derivative-test).

**Potential**
A function $f$ whose gradient is a given vector field $\mathbf F$.
See [Chapter 17](17-Vector-Calculus.md#171-vector-fields) and [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).

**Power rule**
$\frac{d}{dx}x^n = nx^{n-1}$, proved first for whole numbers, then rational exponents, then every real exponent.
See [Chapter 4](04-The-Derivative.md#42-the-derivative-as-a-function), [Chapter 4](04-The-Derivative.md#45-the-power-rule) and [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#54-logarithms-inverse-functions-and-implicit-differentiation).

**Power series**
A series $\sum_{n \ge 0} c_n (x - a)^n$, a polynomial of infinite degree centred at $a$. Inside its radius of convergence it can be differentiated and integrated term by term.
See [Chapter 13](13-Power-Series-and-Taylor.md#131-power-series-and-the-radius-of-convergence) and [Chapter 13](13-Power-Series-and-Taylor.md#132-differentiating-and-integrating-term-by-term).

**Probability density function**
A function $f \ge 0$ with total integral $1$ such that the probability of landing in $[a, b]$ is $\int_a^b f$.
See [Chapter 11](11-Applications-of-Integrals.md#115-probability-densities).

**Product rule**
$(fg)' = f'g + fg'$.
See [Chapter 4](04-The-Derivative.md#44-the-rules-sum-product-quotient).

**p-series**
The series $\sum \frac{1}{n^p}$, which converges if and only if $p > 1$. Likewise $\int_1^\infty \frac{dx}{x^p}$ converges if and only if $p > 1$.
See [Chapter 11](11-Applications-of-Integrals.md#116-improper-integrals) and [Chapter 12](12-Sequences-and-Series.md#123-convergence-tests).

## Q

**Quadratic convergence**
Convergence in which the error is roughly squared each step, so the number of correct digits roughly doubles, as in Newton's method.
See [Chapter 7](07-Applications-of-Derivatives.md#75-newtons-method).

**Quadratic form**
A homogeneous polynomial of degree 2, such as $ah^2 + 2bhk + ck^2$; the second-order term of a function at a critical point.
See [Chapter 15](15-Functions-of-Several-Variables.md#155-maxima-minima-and-the-second-derivative-test).

**Quotient rule**
$\left(\frac fg\right)' = \frac{f'g - fg'}{g^2}$ where $g \ne 0$.
See [Chapter 4](04-The-Derivative.md#44-the-rules-sum-product-quotient).

## R

**Radians**
The measure of an angle by the length of arc it cuts on a unit circle, so that $2\pi$ radians make a full turn. Only in radians is $\frac{d}{dx}\sin x = \cos x$.
See [Chapter 2](02-Limits.md#24-the-limit-of-sin-x-over-x) and [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#52-derivatives-of-sine-cosine-and-tangent).

**Radius of convergence**
The number $R$ such that a power series converges absolutely for $|x - a| < R$ and diverges for $|x - a| > R$.
See [Chapter 13](13-Power-Series-and-Taylor.md#131-power-series-and-the-radius-of-convergence).

**Rate of change**
How fast one quantity changes compared with another, such as metres per second.
See [Chapter 1](01-Rates-and-Areas.md#11-two-old-questions).

**Ratio test**
If $a_n > 0$ and $\frac{a_{n+1}}{a_n} \to \rho$, then $\sum a_n$ converges if $\rho < 1$ and diverges if $\rho > 1$; $\rho = 1$ decides nothing.
See [Chapter 12](12-Sequences-and-Series.md#123-convergence-tests).

**Rational function**
A quotient of two polynomials. It is continuous wherever the denominator is not zero.
See [Chapter 2](02-Limits.md#22-the-limit-laws) and [Chapter 10](10-Techniques-of-Integration.md#104-partial-fractions).

**Real analytic**
A function that equals a convergent power series near every point of its domain, written $C^\omega$.
See [Chapter 13](13-Power-Series-and-Taylor.md#136-a-smooth-function-that-is-not-its-taylor-series).

**Real number**
An element of the complete ordered field $\mathbb{R}$, which can be constructed from the rationals by Dedekind cuts or by classes of Cauchy sequences.
See [Chapter 18](18-The-Real-Numbers.md#181-what-is-a-real-number) and [Chapter 18](18-The-Real-Numbers.md#183-dedekind-cuts-and-cauchy-sequences).

**Rearrangement theorem**
Riemann's theorem: the terms of a conditionally convergent series can be reordered to converge to any chosen real number, or to diverge. Absolutely convergent series have the same sum in every order.
See [Chapter 12](12-Sequences-and-Series.md#124-absolute-and-conditional-convergence).

**Reduction formula**
A formula, usually from integration by parts, that expresses an integral with a power $n$ in terms of one with a smaller power, such as $\int_0^{\pi/2}\sin^n x\,dx = \frac{n-1}{n}\int_0^{\pi/2}\sin^{n-2} x\,dx$.
See [Chapter 10](10-Techniques-of-Integration.md#102-integration-by-parts).

**Refinement**
A partition $Q$ is a refinement of $P$ if it contains all the points of $P$. Refining raises lower sums and lowers upper sums.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums).

**Related rates**
Problems in which several quantities change with time and an equation linking them gives, by differentiation, an equation linking their rates.
See [Chapter 7](07-Applications-of-Derivatives.md#73-related-rates).

**Relative error**
The error divided by the size of the quantity, often given as a percentage.
See [Chapter 7](07-Applications-of-Derivatives.md#74-linear-approximation-and-differentials).

**Remainder**
The difference $R_n(x) = f(x) - T_n(x)$ between a function and its Taylor polynomial. Taylor's theorem bounds it.
See [Chapter 13](13-Power-Series-and-Taylor.md#133-taylor-polynomials-and-taylors-theorem).

**Removable discontinuity**
A point where the limit exists but is not equal to the value of the function (or the function is undefined); redefining one value removes it.
See [Chapter 3](03-Continuity.md#31-continuous-functions).

**Repelling fixed point**
A fixed point $x^*$ of a map $f$ with $|f'(x^*)| > 1$: points near it are pushed away under iteration.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Residue**
The coefficient of $(z - a)^{-1}$ in the Laurent series of $f$ at $a$.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Residue theorem**
If $f$ is holomorphic inside and on a closed curve $\gamma$ except at finitely many poles inside, then $\oint_\gamma f\,dz$ is $2\pi i$ times the sum of the residues there. It evaluates many real integrals.
See [Chapter 22](22-Where-Analysis-Goes.md#221-complex-analysis).

**Resonance**
The large response of an oscillator forced at its natural frequency; without friction the amplitude grows without bound.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

**Riemann hypothesis**
The conjecture that all nontrivial zeros of the Riemann zeta function have real part $\frac12$. It is the most famous open problem in mathematics.
See [Chapter 22](22-Where-Analysis-Goes.md#226-open-problems).

**Riemann sum**
A sum $\sum f(t_k)\,\Delta x_k$ over a tagged partition: the total area of rectangles with heights taken at the tags. In several variables the same is done over small rectangles or boxes.
See [Chapter 8](08-The-Integral.md#81-riemann-sums) and [Chapter 16](16-Multiple-Integrals.md#161-double-integrals).

**Riemann zeta function**
$\zeta(s) = \sum_{n \ge 1} \frac{1}{n^s}$ for $s > 1$, so that $\zeta(2) = \frac{\pi^2}{6}$.
See [Chapter 12](12-Sequences-and-Series.md#125-the-basel-problem).

**Riemann-Lebesgue lemma**
The Fourier coefficients of an integrable function tend to $0$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Riesz-Fischer theorem**
The spaces $L^1$ and $L^2$ of Lebesgue integrable and square-integrable functions are complete.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral) and [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#215-when-does-a-fourier-series-converge).

**Rocket equation**
Tsiolkovsky's equation $\Delta v = v_e\ln\frac{m_0}{m_1}$: the change in speed of a rocket from its exhaust speed and its initial and final masses.
See [Chapter 14](14-Differential-Equations.md#147-the-rocket-equation-and-the-orbits-of-planets).

**Rolle's theorem**
If $f$ is continuous on $[a, b]$, differentiable inside, and $f(a) = f(b)$, then $f'(c) = 0$ for some $c$ between $a$ and $b$.
See [Chapter 6](06-The-Mean-Value-Theorem.md#61-rolles-theorem).

**Root test**
If $a_n \ge 0$ and $\sqrt[n]{a_n} \to \rho$, then $\sum a_n$ converges if $\rho < 1$ and diverges if $\rho > 1$.
See [Chapter 12](12-Sequences-and-Series.md#123-convergence-tests).

## S

**Saddle point**
A critical point that is neither a local maximum nor a local minimum, where the graph rises in some directions and falls in others, like $x^2 - y^2$ at the origin.
See [Chapter 15](15-Functions-of-Several-Variables.md#155-maxima-minima-and-the-second-derivative-test).

**Scale height**
The height over which the pressure or density of an atmosphere falls by a factor of $e$, in the law $p = p_0e^{-h/H}$. For Mars it is about 11 km.
See [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md#54-logarithms-inverse-functions-and-implicit-differentiation) and [Chapter 14](14-Differential-Equations.md#141-modelling-with-differential-equations).

**Secant line**
The straight line through two points of a graph. Its slope is an average rate of change.
See [Chapter 1](01-Rates-and-Areas.md#12-average-speed-and-instantaneous-speed) and [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines).

**Second derivative**
The derivative of the derivative, $f''$. It measures how the slope changes, and gives concavity and acceleration.
See [Chapter 4](04-The-Derivative.md#42-the-derivative-as-a-function) and [Chapter 7](07-Applications-of-Derivatives.md#71-curve-sketching-and-concavity).

**Second derivative test**
At a critical point, $f'' > 0$ gives a local minimum and $f'' < 0$ a local maximum. In several variables the Hessian matrix plays the role of $f''$.
See [Chapter 7](07-Applications-of-Derivatives.md#71-curve-sketching-and-concavity) and [Chapter 15](15-Functions-of-Several-Variables.md#155-maxima-minima-and-the-second-derivative-test).

**Second-order linear equation**
A differential equation $ay'' + by' + cy = g(x)$; with constant coefficients it is solved through its characteristic equation.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

**Sendov's conjecture**
If all zeros of a polynomial lie in the closed unit disc, each zero is within distance $1$ of some zero of the derivative.
See [Chapter 22](22-Where-Analysis-Goes.md#226-open-problems).

**Sensitive dependence on initial conditions**
Nearby starting points move apart exponentially fast under a map, so that small errors ruin long-term prediction. It is the hallmark of chaos.
See [Chapter 22](22-Where-Analysis-Goes.md#225-dynamical-systems-and-chaos).

**Separable equation**
A differential equation $y' = g(x)h(y)$, solved by separating the variables and integrating $\int \frac{dy}{h(y)} = \int g(x)\,dx$.
See [Chapter 14](14-Differential-Equations.md#142-separable-equations).

**Separation of variables (PDE)**
Looking for solutions of a partial differential equation as products such as $X(x)T(t)$, which turns it into ordinary differential equations.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#216-the-heat-equation).

**Sequence**
An infinite list $a_1, a_2, a_3, \ldots$ of numbers, that is, a function on the whole numbers.
See [Chapter 12](12-Sequences-and-Series.md#121-sequences).

**Sequentially compact**
A set in which every sequence has a subsequence converging to a point of the set.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#202-compactness).

**Series**
An infinite sum $\sum a_n = a_1 + a_2 + \cdots$, defined as the limit of its partial sums.
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Shadow price**
The economist's name for a Lagrange multiplier: the gain in the best value per unit relaxation of a constraint.
See [Chapter 15](15-Functions-of-Several-Variables.md#156-lagrange-multipliers).

**Shell method**
Finding a volume of revolution by slicing it into thin cylindrical shells, giving $\int 2\pi x\,h(x)\,dx$.
See [Chapter 11](11-Applications-of-Integrals.md#112-volumes).

**$\sigma$-algebra**
A family of sets closed under complements and countable unions (hence countable intersections), such as the Lebesgue measurable sets.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Simple function**
A function taking finitely many values, each on a measurable set: $\sum c_i \mathbf 1_{E_i}$.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Simply connected**
A region in which every closed curve can be shrunk to a point without leaving it; on such a region a field with zero curl is conservative.
See [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).

**Simpson's rule**
Numerical integration that replaces $f$ on each pair of subintervals by the parabola through three points. Its error falls like $\frac{1}{n^4}$.
See [Chapter 10](10-Techniques-of-Integration.md#106-numerical-integration).

**Slope field**
A picture of a differential equation $y' = F(x, y)$ drawn as short line segments of slope $F(x, y)$ at many points; solutions follow the segments.
See [Chapter 14](14-Differential-Equations.md#145-slope-fields-and-eulers-method).

**Smith-Volterra-Cantor set**
A "fat" Cantor set: removing middle intervals of lengths $\frac14$, $\frac{1}{16}$, ... leaves a set of measure $\frac12$ that contains no interval.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#212-measure-and-the-lebesgue-integral).

**Smooth**
A function with derivatives of every order, written $C^\infty$.
See [Chapter 13](13-Power-Series-and-Taylor.md#136-a-smooth-function-that-is-not-its-taylor-series).

**Snell's law**
The law of refraction $\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}$, derived from Fermat's principle that light takes the path of least time.
See [Chapter 7](07-Applications-of-Derivatives.md#72-optimisation).

**Spectral theorem**
A self-adjoint operator on a Hilbert space can be diagonalised, the infinite-dimensional version of diagonalising a symmetric matrix.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Spherical coordinates**
Coordinates $(\rho, \phi, \theta)$ in space: distance from the origin, angle from the $z$-axis and polar angle. The volume element is $\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$.
See [Chapter 16](16-Multiple-Integrals.md#163-triple-integrals).

**Squeeze theorem**
If $g(x) \le f(x) \le h(x)$ near $a$ and $g$ and $h$ both tend to $L$, then $f$ tends to $L$ too.
See [Chapter 2](02-Limits.md#24-the-limit-of-sin-x-over-x) and [Chapter 2](02-Limits.md#26-proving-the-limit-laws).

**Stokes's theorem**
The circulation of a field around the boundary of a surface equals the flux of its curl through the surface: $\oint_{\partial S} \mathbf F \cdot d\mathbf r = \iint_S \operatorname{curl}\mathbf F \cdot d\mathbf S$.
See [Chapter 17](17-Vector-Calculus.md#175-the-divergence-theorem-and-stokess-theorem).

**Subsequence**
A sequence $a_{n_1}, a_{n_2}, \ldots$ with $n_1 < n_2 < \cdots$, taken from a given sequence by skipping terms.
See [Chapter 12](12-Sequences-and-Series.md#121-sequences) and [Chapter 18](18-The-Real-Numbers.md#185-the-bolzano-weierstrass-theorem).

**Substitution**
The rule $\int f(g(x))g'(x)\,dx = \int f(u)\,du$ with $u = g(x)$, the chain rule read backwards.
See [Chapter 10](10-Techniques-of-Integration.md#101-substitution).

**Sup norm**
The norm $\|g\|_\infty = \sup_{x \in D} |g(x)|$ of a bounded function. $f_n \to f$ uniformly exactly when $\|f_n - f\|_\infty \to 0$.
See [Chapter 19](19-Uniform-Convergence.md#191-pointwise-versus-uniform-convergence).

**Superposition**
For a homogeneous linear equation, any sum of multiples of solutions is again a solution.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients) and [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#216-the-heat-equation).

**Supremum**
The least upper bound of a set of real numbers, written $\sup S$: an upper bound that is at most every other upper bound. By completeness, every nonempty set bounded above has one.
See [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums), [Chapter 12](12-Sequences-and-Series.md#121-sequences) and [Chapter 18](18-The-Real-Numbers.md#182-completeness-the-least-upper-bound-axiom).

**Surface area of revolution**
The area of the surface swept out by rotating a curve about an axis, $\int 2\pi f(x)\sqrt{1 + f'(x)^2}\,dx$.
See [Chapter 11](11-Applications-of-Integrals.md#113-arc-length).

**Surface integral**
The integral of a function over a surface, $\iint_S f\,dS$, or of a vector field across it, which is the flux.
See [Chapter 17](17-Vector-Calculus.md#174-surface-integrals-and-flux).

## T

**Tag**
A choice of one point $t_k$ in each subinterval of a partition, at which a Riemann sum takes its heights.
See [Chapter 8](08-The-Integral.md#81-riemann-sums).

**Takagi function**
The continuous, nowhere differentiable function $\sum_{k \ge 0} \frac{s(2^k x)}{2^k}$, where $s(x)$ is the distance from $x$ to the nearest integer.
See [Chapter 19](19-Uniform-Convergence.md#195-a-continuous-function-that-is-nowhere-differentiable).

**Tangent line**
The line through $(a, f(a))$ with slope $f'(a)$: the limit of secant lines, and the best straight-line approximation to the graph near $a$.
See [Chapter 1](01-Rates-and-Areas.md#12-average-speed-and-instantaneous-speed) and [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines).

**Tangent plane**
The plane $z = f(\mathbf a) + \nabla f(\mathbf a) \cdot (\mathbf x - \mathbf a)$ that best approximates the graph of a differentiable function of two variables near $\mathbf a$.
See [Chapter 15](15-Functions-of-Several-Variables.md#153-the-derivative-as-a-linear-map).

**Taylor polynomial**
The polynomial $T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k$, which has the same value and first $n$ derivatives as $f$ at $a$.
See [Chapter 13](13-Power-Series-and-Taylor.md#133-taylor-polynomials-and-taylors-theorem).

**Taylor series**
The power series $\sum_{k \ge 0} \frac{f^{(k)}(a)}{k!}(x - a)^k$ of a smooth function. It need not converge to $f$, as $e^{-1/x^2}$ shows.
See [Chapter 13](13-Power-Series-and-Taylor.md#133-taylor-polynomials-and-taylors-theorem) and [Chapter 13](13-Power-Series-and-Taylor.md#136-a-smooth-function-that-is-not-its-taylor-series).

**Taylor's theorem**
The remainder of the Taylor polynomial is $R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}$ for some $c$ between $a$ and $x$ (Lagrange form), or an explicit integral (integral form).
See [Chapter 13](13-Power-Series-and-Taylor.md#133-taylor-polynomials-and-taylors-theorem).

**Telescoping series**
A series of the form $\sum (b_n - b_{n+1})$, whose partial sums collapse to $b_1 - b_{N+1}$.
See [Chapter 12](12-Sequences-and-Series.md#122-series).

**Terminal velocity**
The constant speed a falling body approaches when air resistance balances gravity.
See [Chapter 14](14-Differential-Equations.md#141-modelling-with-differential-equations).

**Thomae's function**
The function equal to $\frac1q$ at a rational $\frac pq$ in lowest terms and $0$ at irrationals. It is continuous at every irrational and discontinuous at every rational, yet integrable with integral $0$.
See [Chapter 8](08-The-Integral.md#85-a-function-with-no-integral).

**Topologist's sine curve**
The graph of $\sin(1/x)$ for $0 < x \le 1$ together with the segment of the $y$-axis from $-1$ to $1$: a set that is connected but not path-connected.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#203-connectedness).

**Topology**
The collection of open sets of a space, which is all one needs to talk about continuity, compactness and connectedness.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Totally disconnected**
A set whose only connected pieces are single points, like the Cantor set.
See [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#205-the-cantor-set).

**Trapezoid rule**
Numerical integration that joins neighbouring points of the graph by straight lines and adds the areas of the trapezoids. Its error falls like $\frac{1}{n^2}$.
See [Chapter 10](10-Techniques-of-Integration.md#106-numerical-integration).

**Triangle inequality**
$|a + b| \le |a| + |b|$; in a metric space, $d(x, z) \le d(x, y) + d(y, z)$.
See [Chapter 2](02-Limits.md#25-the-epsilon-delta-definition) and [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md#201-metric-spaces-open-and-closed-sets).

**Trigonometric series**
A series $\frac{a_0}{2} + \sum (a_n\cos nx + b_n\sin nx)$ in sines and cosines.
See [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#214-fourier-series).

**Trigonometric substitution**
Replacing $x$ by $a\sin\theta$, $a\tan\theta$ or $a\sec\theta$ to simplify integrals containing $\sqrt{a^2 - x^2}$, $\sqrt{a^2 + x^2}$ or $\sqrt{x^2 - a^2}$.
See [Chapter 10](10-Techniques-of-Integration.md#103-trigonometric-integrals-and-substitutions).

**Triple integral**
The integral $\iiint_E f\,dV$ of a function of three variables over a solid region.
See [Chapter 16](16-Multiple-Integrals.md#163-triple-integrals).

## U

**Uncertainty principle**
A function and its Fourier transform cannot both be sharply concentrated: the product of their spreads is bounded below.
See [Chapter 22](22-Where-Analysis-Goes.md#224-harmonic-analysis-and-wavelets).

**Uncountable**
An infinite set that cannot be listed as $x_1, x_2, \ldots$, such as $\mathbb{R}$ or the Cantor set.
See [Chapter 18](18-The-Real-Numbers.md#188-countable-and-uncountable).

**Underdamped**
A damped spring whose characteristic equation has complex roots: it oscillates with decaying amplitude.
See [Chapter 14](14-Differential-Equations.md#144-second-order-linear-equations-with-constant-coefficients).

**Uniform boundedness principle**
A family of bounded linear maps on a Banach space that is bounded at each point is bounded in norm. It shows that some continuous function has a divergent Fourier series.
See [Chapter 22](22-Where-Analysis-Goes.md#222-functional-analysis).

**Uniform Cauchy criterion**
A sequence of functions converges uniformly if and only if for every $\varepsilon > 0$ there is $N$ with $|f_m(x) - f_n(x)| < \varepsilon$ for all $m, n \ge N$ and all $x$.
See [Chapter 19](19-Uniform-Convergence.md#191-pointwise-versus-uniform-convergence).

**Uniform convergence**
$f_n \to f$ uniformly on $D$ if for every $\varepsilon > 0$ one $N$ works for all $x$ at once: $|f_n(x) - f(x)| < \varepsilon$ for all $n \ge N$ and all $x$ in $D$. Uniform limits of continuous functions are continuous, and integrals of uniform limits are limits of integrals.
See [Chapter 13](13-Power-Series-and-Taylor.md#132-differentiating-and-integrating-term-by-term), [Chapter 19](19-Uniform-Convergence.md#191-pointwise-versus-uniform-convergence), [Chapter 19](19-Uniform-Convergence.md#192-uniform-limits-of-continuous-functions-are-continuous) and [Chapter 19](19-Uniform-Convergence.md#193-integrating-and-differentiating-limits).

**Uniformly continuous**
$f$ is uniformly continuous on $D$ if for every $\varepsilon > 0$ one $\delta$ works everywhere: $|x - y| < \delta$ implies $|f(x) - f(y)| < \varepsilon$ for all $x, y$ in $D$.
See [Chapter 8](08-The-Integral.md#84-which-functions-are-integrable) and [Chapter 18](18-The-Real-Numbers.md#187-uniform-continuity-and-the-heine-cantor-theorem).

**Unit ball**
The set of points of $\mathbb{R}^n$ at distance at most $1$ from the origin. Its volume is $\frac{\pi^{n/2}}{\Gamma(n/2 + 1)}$, which tends to $0$ as $n$ grows.
See [Chapter 16](16-Multiple-Integrals.md#165-the-volume-of-a-ball-in-n-dimensions).

**Upper bound**
A number $M$ with $s \le M$ for every $s$ in a set $S$.
See [Chapter 18](18-The-Real-Numbers.md#182-completeness-the-least-upper-bound-axiom).

**Upper sum**
The sum of the areas of rectangles whose heights are the largest (supremum) values of $f$ on each piece of a partition. It is never less than the area.
See [Chapter 1](01-Rates-and-Areas.md#13-areas-by-rectangles) and [Chapter 8](08-The-Integral.md#82-the-definite-integral-upper-and-lower-sums).

## V

**Variance**
The spread of a random variable with density $f$ and mean $\mu$: $\int (x - \mu)^2 f(x)\,dx$.
See [Chapter 11](11-Applications-of-Integrals.md#115-probability-densities).

**Vector field**
A rule assigning a vector $\mathbf F(\mathbf x)$ to each point, such as a wind or a gravitational field.
See [Chapter 17](17-Vector-Calculus.md#171-vector-fields).

**Velocity**
The rate of change of position, $v(t) = s'(t)$. Speed is its absolute value.
See [Chapter 4](04-The-Derivative.md#41-definition-and-tangent-lines) and [Chapter 7](07-Applications-of-Derivatives.md#76-motion-falling-on-earth-and-on-mars).

**Vertical asymptote**
A line $x = a$ near which $f(x)$ tends to $\infty$ or $-\infty$ as $x$ approaches $a$ from one side or both.
See [Chapter 2](02-Limits.md#23-one-sided-and-infinite-limits).

**Volterra's function**
A function, found by Volterra in 1881, that is differentiable everywhere with a bounded derivative that is not Riemann integrable.
See [Chapter 9](09-The-Fundamental-Theorem.md#93-the-fundamental-theorem-part-2) and [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md#211-the-limits-of-the-riemann-integral).

**Volume by slicing**
The volume of a solid as $\int A(x)\,dx$, where $A(x)$ is the area of its cross-section at $x$; discs and washers are special cases.
See [Chapter 11](11-Applications-of-Integrals.md#112-volumes).

## W

**Wallis's product**
The infinite product $\frac\pi2 = \frac21 \cdot \frac23 \cdot \frac43 \cdot \frac45 \cdot \frac65 \cdot \frac67 \cdots$, found by John Wallis in 1656 and proved with reduction formulas.
See [Chapter 10](10-Techniques-of-Integration.md#102-integration-by-parts).

**Washer**
The ring-shaped cross-section of a solid of revolution with a hole; its area is $\pi(R^2 - r^2)$.
See [Chapter 11](11-Applications-of-Integrals.md#112-volumes).

**Wave equation**
The partial differential equation $u_{tt} = c^2 \Delta u$ for waves moving at speed $c$. Maxwell's equations give it for light.
See [Chapter 17](17-Vector-Calculus.md#176-maxwells-equations-in-words) and [Chapter 22](22-Where-Analysis-Goes.md#223-pdes-and-the-navier-stokes-problem).

**Wavelets**
Families of functions made from one small wave by shifting and scaling, used to analyse signals that change over time and to compress images.
See [Chapter 22](22-Where-Analysis-Goes.md#224-harmonic-analysis-and-wavelets).

**Weak solution**
A solution of a partial differential equation in an averaged sense, which may not be differentiable. Leray proved that weak solutions of the Navier-Stokes equations exist for all time.
See [Chapter 22](22-Where-Analysis-Goes.md#223-pdes-and-the-navier-stokes-problem).

**Wedge product**
The product $\wedge$ of differential forms, with $dx \wedge dy = -dy \wedge dx$.
See [Chapter 17](17-Vector-Calculus.md#177-differential-forms-in-one-page).

**Weierstrass approximation theorem**
Every continuous function on a closed bounded interval is a uniform limit of polynomials.
See [Chapter 19](19-Uniform-Convergence.md#196-the-weierstrass-approximation-theorem).

**Weierstrass M-test**
If $|g_k(x)| \le M_k$ for all $x$ and $\sum M_k$ converges, then $\sum g_k$ converges uniformly (and absolutely).
See [Chapter 19](19-Uniform-Convergence.md#194-the-weierstrass-m-test).

**Weierstrass substitution**
The half-angle substitution $t = \tan\frac x2$, which turns any rational function of $\sin x$ and $\cos x$ into a rational function of $t$.
See [Chapter 10](10-Techniques-of-Integration.md#103-trigonometric-integrals-and-substitutions).

**Work**
The integral $\int_a^b F(x)\,dx$ of force over distance; for a vector field along a curve, the line integral $\int_C \mathbf F \cdot d\mathbf r$.
See [Chapter 11](11-Applications-of-Integrals.md#114-work-pressure-and-centre-of-mass) and [Chapter 17](17-Vector-Calculus.md#172-line-integrals-and-conservative-fields).
