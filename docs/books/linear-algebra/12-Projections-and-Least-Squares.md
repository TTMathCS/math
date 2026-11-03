# 12. Projections and least squares

*Measurements are never exact. Ten observations of a line give ten equations in two unknowns, and no line passes
through all ten points; the system $Ax = b$ has no solution. Yet we still want the best line. This chapter answers
"best" with geometry: project $b$ onto the column space of $A$. It builds projection matrices, derives the normal
equations $A^{\mathsf T}A\hat x = A^{\mathsf T}b$ in two ways, fits lines and curves to data, computes the same answer
more safely with the QR factorisation, and tells the story of how least squares grew out of finding a lost dwarf
planet in 1801.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to project a vector onto a line and onto a subspace, and what makes a matrix a projection matrix
    - why the best approximate solution of $Ax = b$ solves $A^{\mathsf T}A\hat x = A^{\mathsf T}b$, by geometry and by
      calculus
    - how to fit straight lines, parabolas and other models linear in their parameters, including weighted fits
    - the QR factorisation $A = QR$, and why solving $R\hat x = Q^{\mathsf T}b$ is better than forming $A^{\mathsf T}A$
    - the honest history of Gauss, Legendre and the orbit of Ceres, and how orbits are fitted today

    **You need:** [Chapter 11](11-Inner-Product-Spaces.md) (orthogonality, orthogonal complements, Gram-Schmidt, the
    best approximation theorem), [Chapter 7](07-The-Four-Subspaces.md) (column space and left null space), and
    [Chapter 3](03-Matrices.md) (inverses and transposes). For a gentler start on fitting lines:
    [line of best fit](../../topics/statistics/level-6/03-line-best-fit.md).

    **Levels:** 12.1 to 12.3 are intermediate; 12.4 is intermediate to advanced; 12.5 is a history and applications
    section at intermediate level, with an advanced note on nonlinear fitting.

## 12.1 Projecting onto a line and onto a subspace

### Onto a line

Given a vector $b$ and a line through the origin in the direction $a$, which point of the line is closest to $b$?
Call it $p = \hat x a$ for some number $\hat x$. By the best approximation theorem of
[Chapter 11](11-Inner-Product-Spaces.md), the closest point is the one for which the error $e = b - p$ is
perpendicular to the line:

$$
a \cdot (b - \hat x a) = 0 \quad \Longrightarrow \quad \hat x = \frac{a \cdot b}{a \cdot a}, \qquad p = \frac{a \cdot b}{a \cdot a}\,a .
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 240" role="img" aria-label="Projection onto a line. A line through the origin at the lower left rises to the right in the direction of a. A point b lies above the line. The projection p is the foot of the perpendicular from b to the line, and the error e = b minus p is the perpendicular segment, marked with a right angle at p.">
  <line x1="40" y1="200" x2="340" y2="80" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="40" y1="200" x2="132" y2="163.2" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="40" y1="200" x2="180" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="200" x2="215.9" y2="129.7" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="215.9" y1="129.7" x2="180" y2="40" stroke="#eea66f" stroke-width="2.5" stroke-dasharray="6 3"/>
  <polyline points="225.2,126.0 221.5,116.7 212.2,120.4" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="40" cy="200" r="3" fill="currentColor"/>
  <circle cx="180" cy="40" r="4" fill="currentColor"/>
  <circle cx="215.9" cy="129.7" r="4" fill="#7ccf9a"/>
  <text x="26" y="218" font-size="12" fill="currentColor">0</text>
  <text x="110" y="182" font-size="13" fill="currentColor">a</text>
  <text x="188" y="38" font-size="13" fill="currentColor">b</text>
  <text x="222" y="146" font-size="13" fill="currentColor">p</text>
  <text x="205" y="84" font-size="12" fill="currentColor">e = b − p</text>
  <text x="250" y="150" font-size="12" fill="currentColor">line through a</text>
</svg>
</div>

**Example 1.** Project $b = (3, 3, 0)$ onto the line through $a = (1, 2, 2)$. Here $a \cdot b = 3 + 6 + 0 = 9$ and
$a \cdot a = 9$, so $\hat x = 1$ and $p = (1, 2, 2)$. The error is $e = (2, 1, -2)$.
Check: $a \cdot e = 2 + 2 - 4 = 0$. The distance from $b$ to the line is $|e| = 3$.

**The projection matrix.** Since $(a \cdot b)\,a = a\,(a^{\mathsf T}b) = (aa^{\mathsf T})b$,

$$
p = Pb, \qquad P = \frac{aa^{\mathsf T}}{a^{\mathsf T}a}.
$$

For $a = (1, 2, 2)$,

$$
P = \frac19\begin{pmatrix} 1 & 2 & 2 \\ 2 & 4 & 4 \\ 2 & 4 & 4 \end{pmatrix}.
$$

Every column is a multiple of $a$, so $P$ has rank 1: its column space is the line. $P$ is symmetric. And projecting
twice changes nothing, $P^2 = P$, because a point already on the line is its own projection. Algebraically,
$P^2 = \frac{a(a^{\mathsf T}a)a^{\mathsf T}}{(a^{\mathsf T}a)^2} = P$.

### Onto a subspace

Now project onto a subspace $W$ of $\mathbb{R}^m$ with a basis $a_1, \dots, a_n$ (so $n \leq m$). Put the basis
vectors as the columns of an $m \times n$ matrix $A$; then $W = \operatorname{Col}(A)$, and every point of $W$ is
$Ax$ for some $x \in \mathbb{R}^n$. We want $\hat x$ with $p = A\hat x$ closest to $b$.

The error $e = b - A\hat x$ must be perpendicular to $W$, that is, to each column $a_i$:

$$
a_i^{\mathsf T}(b - A\hat x) = 0 \quad (i = 1, \dots, n) \quad \Longleftrightarrow \quad A^{\mathsf T}(b - A\hat x) = 0 .
$$

So

$$
A^{\mathsf T}A\,\hat x = A^{\mathsf T}b .
$$

These are the **normal equations** ("normal" in the old sense of "perpendicular": they say the error is normal to
the subspace). In the language of [Chapter 11](11-Inner-Product-Spaces.md), they say $e \in \operatorname{Col}(A)^\perp = \operatorname{Null}(A^{\mathsf T})$.

Can we solve them? Yes, because of this lemma.

**Lemma 1.** For any real $m \times n$ matrix $A$, $\operatorname{Null}(A^{\mathsf T}A) = \operatorname{Null}(A)$. In
particular $A^{\mathsf T}A$ (an $n \times n$ matrix) is invertible exactly when the columns of $A$ are independent.

*Proof.* If $Ax = 0$ then $A^{\mathsf T}Ax = 0$. Conversely, if $A^{\mathsf T}Ax = 0$, multiply on the left by
$x^{\mathsf T}$: $0 = x^{\mathsf T}A^{\mathsf T}Ax = (Ax)^{\mathsf T}(Ax) = |Ax|^2$, so $Ax = 0$. A square matrix is
invertible exactly when its null space is $\{0\}$, and $\operatorname{Null}(A) = \{0\}$ means the columns are
independent. $\square$

So when the columns of $A$ are independent,

$$
\hat x = (A^{\mathsf T}A)^{-1}A^{\mathsf T}b, \qquad p = A\hat x = A(A^{\mathsf T}A)^{-1}A^{\mathsf T}b, \qquad P = A(A^{\mathsf T}A)^{-1}A^{\mathsf T}.
$$

When $n = 1$ this is the formula for a line, with $A = a$ and $A^{\mathsf T}A = a^{\mathsf T}a$ a number. Do not try to
"simplify" $P$ to $AA^{-1}(A^{\mathsf T})^{-1}A^{\mathsf T} = I$: $A$ is not square and has no inverse. (If $A$ is square
and invertible, then $W$ is everything, and indeed $P = I$.)

**Example 2.** Project $b = (1, 2, 3)$ onto the plane spanned by $(1, 1, 0)$ and $(0, 1, 1)$. With

$$
A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{pmatrix}, \qquad
A^{\mathsf T}A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}, \qquad
A^{\mathsf T}b = \begin{pmatrix} 3 \\ 5 \end{pmatrix}.
$$

Solving $2\hat x_1 + \hat x_2 = 3$, $\hat x_1 + 2\hat x_2 = 5$ gives $\hat x = (1/3, 7/3)$. Then

$$
p = \tfrac13(1, 1, 0) + \tfrac73(0, 1, 1) = \left(\tfrac13, \tfrac83, \tfrac73\right), \qquad e = b - p = \left(\tfrac23, -\tfrac23, \tfrac23\right).
$$

Check: $e \cdot (1, 1, 0) = 0$ and $e \cdot (0, 1, 1) = 0$. In fact $e$ is a multiple of $(1, -1, 1)$, which spans the
orthogonal complement of this plane (Example 10 of Chapter 11). The projection matrix is

$$
P = A(A^{\mathsf T}A)^{-1}A^{\mathsf T} = \frac13\begin{pmatrix} 2 & 1 & -1 \\ 1 & 2 & 1 \\ -1 & 1 & 2 \end{pmatrix}.
$$

### What makes a projection matrix

**Theorem 2.** A real square matrix $P$ is the matrix of the orthogonal projection onto its column space exactly when
$P^2 = P$ and $P^{\mathsf T} = P$.

*Proof.* If $P = A(A^{\mathsf T}A)^{-1}A^{\mathsf T}$, then $P^{\mathsf T} = A((A^{\mathsf T}A)^{-1})^{\mathsf T}A^{\mathsf T} = P$
because $A^{\mathsf T}A$ is symmetric, and

$$
P^2 = A(A^{\mathsf T}A)^{-1}(A^{\mathsf T}A)(A^{\mathsf T}A)^{-1}A^{\mathsf T} = A(A^{\mathsf T}A)^{-1}A^{\mathsf T} = P .
$$

Conversely, suppose $P^2 = P = P^{\mathsf T}$, and let $b$ be any vector. Then $Pb$ is in $\operatorname{Col}(P)$, and the
error $b - Pb$ is orthogonal to every vector $Py$ of the column space:

$$
(Py)^{\mathsf T}(b - Pb) = y^{\mathsf T}P^{\mathsf T}(I - P)b = y^{\mathsf T}(P - P^2)b = 0 .
$$

So $Pb$ is the orthogonal projection of $b$ onto $\operatorname{Col}(P)$ (Theorem 8 of Chapter 11: the decomposition
into a part in $W$ and a part in $W^\perp$ is unique). $\square$

A matrix with $P^2 = P$ alone is an **idempotent** or oblique projection: it projects onto its column space, but along
a direction that need not be perpendicular, like the shadow cast by a low sun. Symmetry is what makes it orthogonal.

**More facts, each one line.**

- $I - P$ is the projection onto the orthogonal complement: $(I - P)^2 = I - 2P + P^2 = I - P$, it is symmetric, and
  it sends $b$ to $e$.
- The eigenvalues of a projection are 0 and 1 only: if $Pv = \lambda v$ then $\lambda v = Pv = P^2v = \lambda^2v$, so
  $\lambda^2 = \lambda$. The eigenvectors for 1 are the subspace, those for 0 its complement.
- The trace of $P$ is the dimension of the subspace it projects onto (the trace is the sum of the eigenvalues, and
  $P$ is diagonalisable since it is symmetric). For Example 2, $\operatorname{tr}P = \frac{2 + 2 + 2}{3} = 2$.
- **With an orthonormal basis the formula collapses.** If the columns of $Q$ are orthonormal, $Q^{\mathsf T}Q = I$ and
  $P = QQ^{\mathsf T}$, which is the formula $\operatorname{proj}_Wb = \sum(b \cdot q_i)q_i$ of Chapter 11 in matrix
  form. This is one reason to want orthonormal bases, and it leads to 12.4.

## 12.2 The normal equations

### The least squares problem

Suppose $A$ is $m \times n$ with $m > n$: more equations than unknowns. Then $Ax = b$ usually has no solution, because
$b$ is usually not in the $n$-dimensional column space of $A$ inside $\mathbb{R}^m$. A **least squares solution** is
an $\hat x$ that makes the error as small as possible:

$$
|A\hat x - b| \leq |Ax - b| \quad \text{for all } x \in \mathbb{R}^n .
$$

Minimising the length is the same as minimising its square $|Ax - b|^2 = \sum_i(\text{row}_i \cdot x - b_i)^2$, a sum
of squared errors, hence the name.

**Theorem 3.** $\hat x$ is a least squares solution of $Ax = b$ exactly when it solves the normal equations
$A^{\mathsf T}A\hat x = A^{\mathsf T}b$. The normal equations always have a solution. The least squares solution is
unique exactly when the columns of $A$ are independent, and then $\hat x = (A^{\mathsf T}A)^{-1}A^{\mathsf T}b$.

### First derivation: geometry

As $x$ ranges over $\mathbb{R}^n$, $Ax$ ranges over the column space $W = \operatorname{Col}(A)$. So we are looking
for the point of $W$ closest to $b$, which by the best approximation theorem (Theorem 9 of Chapter 11) is the
orthogonal projection $p$. Thus $\hat x$ is a least squares solution exactly when $A\hat x = p$, exactly when
$b - A\hat x \perp W$, exactly when $A^{\mathsf T}(b - A\hat x) = 0$.

*Proof of the rest of Theorem 3.* The projection $p$ exists and lies in $W$, so some $\hat x$ has $A\hat x = p$: the
normal equations have a solution. Two solutions $\hat x$, $\hat x'$ both have $A\hat x = A\hat x' = p$ (the projection
is unique), so they differ by an element of $\operatorname{Null}(A)$. Hence the solution is unique exactly when
$\operatorname{Null}(A) = \{0\}$, which by Lemma 1 is when $A^{\mathsf T}A$ is invertible. $\square$

### Second derivation: calculus

Without any geometry, set the gradient to zero. Expand

$$
f(x) = |Ax - b|^2 = (Ax - b)^{\mathsf T}(Ax - b) = x^{\mathsf T}A^{\mathsf T}Ax - 2b^{\mathsf T}Ax + b^{\mathsf T}b .
$$

(The two cross terms $x^{\mathsf T}A^{\mathsf T}b$ and $b^{\mathsf T}Ax$ are equal, being $1 \times 1$ transposes of each other.) For
a symmetric matrix $M$, the gradient of $x^{\mathsf T}Mx$ is $2Mx$, and the gradient of $c^{\mathsf T}x$ is $c$ (check both by
writing out the sums and differentiating with respect to $x_k$). So

$$
\nabla f(x) = 2A^{\mathsf T}Ax - 2A^{\mathsf T}b,
$$

which is zero exactly at the solutions of the normal equations. Is this critical point a minimum? The second
derivative (Hessian) matrix is $2A^{\mathsf T}A$, and $y^{\mathsf T}A^{\mathsf T}Ay = |Ay|^2 \geq 0$, so $f$ is convex, and for
a convex function every critical point is a global minimum
([Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md) and the second derivative test of
[Chapter 14](14-The-Spectral-Theorem.md)). Even more directly: for any $y$,

$$
f(\hat x + y) = |A\hat x - b + Ay|^2 = f(\hat x) + 2y^{\mathsf T}A^{\mathsf T}(A\hat x - b) + |Ay|^2 = f(\hat x) + |Ay|^2 \geq f(\hat x),
$$

where the middle term vanished by the normal equations.

The two derivations meet in the middle: $\nabla f = 0$ says $A^{\mathsf T}e = 0$, the error is orthogonal to the columns.

**Example 3 (an inconsistent system).** Solve $x_1 = 6$, $x_1 + x_2 = 0$, $x_1 + 2x_2 = 0$ as well as possible.
$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}$, $b = (6, 0, 0)$,
$A^{\mathsf T}A = \begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}$, $A^{\mathsf T}b = (6, 0)$. Solving
$3\hat x_1 + 3\hat x_2 = 6$, $3\hat x_1 + 5\hat x_2 = 0$: $2\hat x_2 = -6$, so $\hat x_2 = -3$ and $\hat x_1 = 5$.
Then $A\hat x = (5, 2, -1)$ and $e = (1, -2, 1)$. Check: $A^{\mathsf T}e = (1 - 2 + 1, -2 + 2) = (0, 0)$. The smallest
possible total squared error is $|e|^2 = 6$.

### Is the minimum always the right thing to minimise?

Least squares minimises the sum of *squared* errors. That choice has three strong points: it leads to linear
equations, it has the geometric meaning of an orthogonal projection, and (12.5) it is the statistically best choice
under natural assumptions. It has one weakness: squaring makes large errors count heavily, so a single wild
measurement can drag the fit far off. Minimising the sum of absolute errors instead (the $\|\cdot\|_1$ norm of
Chapter 11) is more resistant to such **outliers**, but has no projection behind it and needs linear programming.
Statistics studies such "robust" alternatives.

## 12.3 Fitting lines and curves

### Straight lines

Given data points $(t_1, y_1), \dots, (t_m, y_m)$, we want the line $y = c + dt$ that best fits them. Each point gives
one equation in the unknowns $c, d$:

$$
\begin{pmatrix} 1 & t_1 \\ 1 & t_2 \\ \vdots & \vdots \\ 1 & t_m \end{pmatrix}\begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_m \end{pmatrix}.
$$

Unless the points are on one line, there is no exact solution, and least squares minimises the sum of squared
**vertical** distances (residuals) $\sum(y_i - c - dt_i)^2$. The normal equations are

$$
\begin{pmatrix} m & \sum t_i \\ \sum t_i & \sum t_i^2 \end{pmatrix}\begin{pmatrix} \hat c \\ \hat d \end{pmatrix} = \begin{pmatrix} \sum y_i \\ \sum t_iy_i \end{pmatrix}.
$$

**Example 4.** Fit a line to the made-up data $(1, 1)$, $(2, 2)$, $(3, 2)$, $(4, 5)$. Here $m = 4$, $\sum t_i = 10$,
$\sum t_i^2 = 30$, $\sum y_i = 10$, $\sum t_iy_i = 1 + 4 + 6 + 20 = 31$:

$$
\begin{pmatrix} 4 & 10 \\ 10 & 30 \end{pmatrix}\begin{pmatrix} \hat c \\ \hat d \end{pmatrix} = \begin{pmatrix} 10 \\ 31 \end{pmatrix}.
$$

Multiply the first equation by 2.5 and subtract: $5\hat d = 6$, so $\hat d = 1.2$ and $\hat c = (10 - 12)/4 = -0.5$.
The best line is $y = -0.5 + 1.2t$. Its values at $t = 1, 2, 3, 4$ are $0.7, 1.9, 3.1, 4.3$, the residuals are
$e = (0.3, 0.1, -1.1, 0.7)$, and the minimum sum of squares is $0.09 + 0.01 + 1.21 + 0.49 = 1.8$.
Check: $\sum e_i = 0$ and $\sum t_ie_i = 0.3 + 0.2 - 3.3 + 2.8 = 0$; these are the two normal equations.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 270" role="img" aria-label="Four data points at t = 1, 2, 3, 4 with heights 1, 2, 2, 5, and the least squares line y = -0.5 + 1.2t. Short vertical segments join each point to the line: these are the residuals whose squares are minimised.">
  <line x1="40" y1="230" x2="345" y2="230" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="250" x2="40" y2="10" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="250" x2="340" y2="10" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="100" y1="190" x2="100" y2="202" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="160" y1="150" x2="160" y2="154" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="220" y1="150" x2="220" y2="106" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="280" y1="30" x2="280" y2="58" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="100" cy="190" r="5" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="160" cy="150" r="5" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="220" cy="150" r="5" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="280" cy="30" r="5" fill="#7ccf9a" stroke="currentColor"/>
  <text x="100" y="246" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="160" y="246" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="220" y="246" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="280" y="246" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="345" y="246" font-size="11" text-anchor="end" fill="currentColor">t</text>
  <text x="30" y="194" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <text x="30" y="34" font-size="11" text-anchor="end" fill="currentColor">5</text>
  <line x1="36" y1="190" x2="44" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="36" y1="30" x2="44" y2="30" stroke="currentColor" stroke-width="1"/>
  <text x="262" y="100" font-size="12" fill="currentColor">y = −0.5 + 1.2t</text>
  <text x="228" y="135" font-size="11" fill="currentColor">residual −1.1</text>
</svg>
</div>

**The textbook formulas.** Write $\bar t = \frac1m\sum t_i$ and $\bar y = \frac1m\sum y_i$ for the means. Dividing
the first normal equation by $m$ gives $\hat c + \hat d\,\bar t = \bar y$: **the best line passes through the point of
means** $(\bar t, \bar y)$. Substituting $\hat c = \bar y - \hat d\bar t$ into the second equation and simplifying,

$$
\hat d = \frac{\sum(t_i - \bar t)(y_i - \bar y)}{\sum(t_i - \bar t)^2}.
$$

In Example 4, $\bar t = \bar y = 2.5$, the numerator is $(-1.5)(-1.5) + (-0.5)(-0.5) + (0.5)(-0.5) + (1.5)(2.5) = 6$ and
the denominator is $2.25 + 0.25 + 0.25 + 2.25 = 5$, so $\hat d = 1.2$ again. A cleaner way to see this formula: if we
shift time so that $\bar t = 0$, the two columns of $A$ become orthogonal, $A^{\mathsf T}A$ becomes diagonal, and each
coefficient is a separate projection, exactly as in Theorem 6 of Chapter 11.

The statistical side of all this (how uncertain $\hat c$ and $\hat d$ are, confidence intervals, what $R^2$ means,
regression to the mean) is in [Statistics, Chapter 11](../statistics/11-Linear-Regression.md).

### Curves: anything linear in the unknowns

"Linear" least squares means linear in the **coefficients**, not in $t$. To fit a parabola $y = c_0 + c_1t + c_2t^2$,
use the columns $1$, $t$, $t^2$:

**Example 5.** Fit a parabola to $(-2, 0)$, $(-1, 1)$, $(0, 1)$, $(1, 2)$, $(2, 6)$. With columns
$(1, 1, 1, 1, 1)$, $(-2, -1, 0, 1, 2)$, $(4, 1, 0, 1, 4)$,

$$
A^{\mathsf T}A = \begin{pmatrix} 5 & 0 & 10 \\ 0 & 10 & 0 \\ 10 & 0 & 34 \end{pmatrix}, \qquad A^{\mathsf T}y = \begin{pmatrix} 10 \\ 13 \\ 27 \end{pmatrix}.
$$

The middle equation gives $\hat c_1 = 1.3$ at once (the odd column is orthogonal to the even ones, because the $t$
values are symmetric about 0). From $5\hat c_0 + 10\hat c_2 = 10$ and $10\hat c_0 + 34\hat c_2 = 27$: subtract twice the
first from the second, $14\hat c_2 = 7$, so $\hat c_2 = 0.5$ and $\hat c_0 = 1$. The best parabola is
$y = 1 + 1.3t + 0.5t^2$. Its values are $(0.4, 0.2, 1, 2.8, 5.6)$, the residuals $(-0.4, 0.8, 0, -0.8, 0.4)$, and the sum
of squares is $1.6$.

In the same way one can fit $y = c_1\cos t + c_2\sin t$, or $y = c_1e^{-t} + c_2e^{-2t}$, or any combination of fixed
functions: each function is a column. With many predictors measured on the same individuals (height, age, dose...)
this is **multiple regression**, the subject of [Statistics, Chapter 12](../statistics/12-Multiple-Regression.md).

**Models that are not linear.** An exponential growth law $y = ae^{kt}$ is not linear in $k$. A common trick is to
take logarithms, $\ln y = \ln a + kt$, and fit a line to $(t_i, \ln y_i)$. This is legitimate, but it minimises the
squared errors of the *logarithms*, which weights the data differently from the original problem; for small values
of $y$ it can give a noticeably different answer. Truly nonlinear models need iterative methods (12.5).

**How many parameters?** With $m$ points and a polynomial of degree $m - 1$, the fit is exact (the residual is zero),
because the $m \times m$ Vandermonde matrix is invertible for distinct $t_i$. But an exact fit of noisy data by a high
degree polynomial wiggles wildly between the points and predicts badly. Choosing the number of parameters is a
statistical question (overfitting, cross-validation), discussed in Statistics, Chapter 12.

### Weighted least squares

If some measurements are more reliable than others, give them more weight: minimise $\sum w_i(b_i - (Ax)_i)^2$ with
weights $w_i > 0$. With $W = \operatorname{diag}(w_1, \dots, w_m)$ this is $(Ax - b)^{\mathsf T}W(Ax - b)$, which is
$|Ax - b|^2$ in the inner product $\langle u, v\rangle = u^{\mathsf T}Wv$ of Example 3 of Chapter 11. The projection
argument goes through with this inner product, and the normal equations become

$$
A^{\mathsf T}WA\,\hat x = A^{\mathsf T}Wb .
$$

(Equivalently, multiply row $i$ of $A$ and $b$ by $\sqrt{w_i}$ and do ordinary least squares.) The statistical rule is
to weight each measurement by $1/\sigma_i^2$, the reciprocal of its variance. Orbit determination always uses weights,
since different tracking stations and instruments have different accuracies.

## 12.4 The QR factorisation

*Level: intermediate to advanced.*

### Gram-Schmidt as a factorisation

Apply Gram-Schmidt to the columns $a_1, \dots, a_n$ of an $m \times n$ matrix $A$ with independent columns, producing
orthonormal $q_1, \dots, q_n$. By Theorem 7 of Chapter 11, $a_j \in \operatorname{span}(q_1, \dots, q_j)$ for each $j$,
and since the $q$'s are orthonormal, the coefficients are inner products:

$$
a_j = (q_1 \cdot a_j)q_1 + (q_2 \cdot a_j)q_2 + \cdots + (q_j \cdot a_j)q_j .
$$

Collect these equations into matrices. With $Q = (q_1 \; \cdots \; q_n)$ ($m \times n$, orthonormal columns) and $R$ the
$n \times n$ matrix with entries $r_{ij} = q_i \cdot a_j$ for $i \leq j$ and 0 below the diagonal,

$$
A = QR .
$$

**Theorem 4 (QR factorisation).** Every real $m \times n$ matrix $A$ with independent columns can be written as
$A = QR$, where $Q$ is $m \times n$ with orthonormal columns ($Q^{\mathsf T}Q = I$) and $R$ is $n \times n$ upper
triangular with positive diagonal entries. This factorisation is unique.

*Proof.* Existence is the construction above. The diagonal entries are $r_{jj} = q_j \cdot a_j = |u_j| > 0$, where
$u_j$ is the unnormalised Gram-Schmidt vector (since $a_j = u_j + (\text{a combination of } q_1, \dots, q_{j-1})$ and
$q_j = u_j/|u_j|$ is orthogonal to that combination). For uniqueness, suppose $QR = Q'R'$. Then
$A^{\mathsf T}A = R^{\mathsf T}R = R'^{\mathsf T}R'$, and $M = R'R^{-1} = (R'^{\mathsf T})^{-1}R^{\mathsf T}$ is both upper
triangular (left side) and lower triangular (right side), so diagonal; and $M^{\mathsf T}M = (R^{-1})^{\mathsf T}R'^{\mathsf T}R'R^{-1} = (R^{-1})^{\mathsf T}R^{\mathsf T}RR^{-1} = I$,
so its diagonal entries are $\pm1$, and positive diagonals force $M = I$, so $R' = R$ and then $Q' = Q$. $\square$

**Example 6.** Let

$$
A = \begin{pmatrix} 1 & 2 \\ 2 & 3 \\ 2 & 2 \end{pmatrix}.
$$

$|a_1| = 3$, so $q_1 = \frac13(1, 2, 2)$ and $r_{11} = 3$. Next $r_{12} = q_1 \cdot a_2 = \frac{2 + 6 + 4}{3} = 4$, and
$u_2 = a_2 - 4q_1 = (2, 3, 2) - \frac43(1, 2, 2) = \left(\frac23, \frac13, -\frac23\right)$, of length 1. So $r_{22} = 1$,
$q_2 = \frac13(2, 1, -2)$, and

$$
A = QR = \frac13\begin{pmatrix} 1 & 2 \\ 2 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} 3 & 4 \\ 0 & 1 \end{pmatrix}.
$$

Check the second column: $\frac13(4 \cdot 1 + 2,\; 4 \cdot 2 + 1,\; 4 \cdot 2 - 2) = (2, 3, 2)$.

### Least squares with QR

Substitute $A = QR$ into the normal equations. $A^{\mathsf T}A = R^{\mathsf T}Q^{\mathsf T}QR = R^{\mathsf T}R$ and
$A^{\mathsf T}b = R^{\mathsf T}Q^{\mathsf T}b$, so $R^{\mathsf T}R\hat x = R^{\mathsf T}Q^{\mathsf T}b$. Since $R$ is invertible (a
triangular matrix with nonzero diagonal), cancel $R^{\mathsf T}$:

$$
R\hat x = Q^{\mathsf T}b .
$$

This is a triangular system, solved by back substitution from the bottom row up. The projection is
$p = A\hat x = QQ^{\mathsf T}b$, as in 12.1.

**Example 7.** With $A$ from Example 6 and $b = (0, 3, 3)$: $Q^{\mathsf T}b = \frac13(0 + 6 + 6,\; 0 + 3 - 6) = (4, -1)$.
Back substitution: $\hat x_2 = -1$, then $3\hat x_1 + 4(-1) = 4$, so $\hat x_1 = 8/3$. The residual is
$b - A\hat x = (0, 3, 3) - \left(\frac23, \frac73, \frac{10}{3}\right) = \left(-\frac23, \frac23, -\frac13\right)$.
Check with the normal equations: $A^{\mathsf T}A = \begin{pmatrix} 9 & 12 \\ 12 & 17 \end{pmatrix}$ and
$A^{\mathsf T}b = (12, 15)$, and $9 \cdot \frac83 - 12 = 12$, $12 \cdot \frac83 - 17 = 15$.

### Why bother?

In exact arithmetic, QR and the normal equations give the same answer. In floating point they do not, and the
difference can be decisive.

The trouble with forming $A^{\mathsf T}A$ is that it squares the **condition number**, the factor by which relative
errors in the data can be magnified in the answer ([Chapter 15](15-The-Singular-Value-Decomposition.md) defines it, and
[Chapter 18](18-Numerical-Linear-Algebra.md) studies it). If $A$ has condition number $10^6$, the normal equations have
condition number $10^{12}$, and with about 16 significant digits in double precision, only about 4 survive. A classic
example (due to Läuchli) is

$$
A = \begin{pmatrix} 1 & 1 \\ \varepsilon & 0 \\ 0 & \varepsilon \end{pmatrix}, \qquad
A^{\mathsf T}A = \begin{pmatrix} 1 + \varepsilon^2 & 1 \\ 1 & 1 + \varepsilon^2 \end{pmatrix}.
$$

The columns of $A$ are independent for every $\varepsilon \neq 0$. But with $\varepsilon = 10^{-8}$, the number
$1 + \varepsilon^2 = 1 + 10^{-16}$ rounds to exactly 1 in double precision, and the computed $A^{\mathsf T}A$ is the
singular matrix $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$. The information was lost the moment $A^{\mathsf T}A$ was
formed, before any equation was solved.

```python
eps = 1e-8
A = [[1, 1], [eps, 0], [0, eps]]
ATA = [[sum(A[k][i] * A[k][j] for k in range(3)) for j in range(2)] for i in range(2)]
print(ATA)                                        # [[1.0, 1.0], [1.0, 1.0]]
print(ATA[0][0] * ATA[1][1] - ATA[0][1] ** 2)     # 0.0: singular, although A has rank 2
```

A QR factorisation works with $A$ itself and never squares the condition number. But how it is computed matters too:
classical Gram-Schmidt in floating point can lose orthogonality badly on exactly such matrices, and even the modified
version does not fully fix this. Library routines compute QR with Householder reflections or Givens rotations
([Chapter 13](13-Orthogonal-Matrices-and-Rotations.md)), which are backward stable, or use the singular value
decomposition ([Chapter 15](15-The-Singular-Value-Decomposition.md)) when the columns may be nearly dependent. That
became standard practice after Gene Golub showed in 1965 how to solve least squares problems with Householder
transformations.

**The full QR.** One can also complete $q_1, \dots, q_n$ to an orthonormal basis $q_1, \dots, q_m$ of $\mathbb{R}^m$
and write $A = Q_{\text{full}}\begin{pmatrix} R \\ 0 \end{pmatrix}$ with a square orthogonal $Q_{\text{full}}$. The extra
columns $q_{n+1}, \dots, q_m$ are an orthonormal basis of the left null space $\operatorname{Null}(A^{\mathsf T})$, and
$|b - A\hat x|^2 = \sum_{i > n}(q_i \cdot b)^2$: the minimal error is just the part of $b$ in the directions the columns
cannot reach.

## 12.5 Gauss and the orbit of Ceres

### A lost dwarf planet

On 1 January 1801 Giuseppe Piazzi, at the observatory in Palermo, noticed a faint star-like object that moved from
night to night. He followed it for about six weeks, until it came too close to the Sun in the sky to be seen. It was
the first object found in the asteroid belt, later named Ceres, and today classed as a dwarf planet. The difficulty
was to find it again when it re-emerged months later: Piazzi's observations covered only a short arc of its orbit, and
the methods of the day, which assumed a nearly circular orbit or a parabolic one as for comets, could not predict
where it would be.

Carl Friedrich Gauss, then 24, took up the problem in the autumn of 1801. He developed a new method for determining
an orbit from three observations, refined it using more of Piazzi's data, and his predicted positions were published in
December 1801 in Franz Xaver von Zach's journal *Monatliche Correspondenz*. On 31 December 1801 von Zach, and on
1 January 1802 Heinrich Olbers, found Ceres close to where Gauss had said it would be. The success made Gauss famous
well beyond mathematics.

### Who invented least squares?

The method of least squares was first *published* by Adrien-Marie Legendre in 1805, in an appendix to his book on
determining the orbits of comets, where he gave the normal equations and the name *méthode des moindres carrés*.
In 1809 Gauss published his great book on orbit determination, *Theoria motus corporum coelestium*, which treated
least squares in detail, gave it a probabilistic justification (assuming normally distributed errors, the least squares
estimate is the most probable one), and stated that he had used the method since 1795. Legendre objected to the claim
of priority, and the dispute was never settled to both men's satisfaction.

What can be said honestly? Historians, notably Stephen Stigler, have examined the evidence. Gauss mentioned the method
in letters and diaries before 1805, and there is good reason to think he had the idea early; but he had not
published it, and Legendre's 1805 account was the first in print and the one that spread the method. How much the
1801 Ceres prediction itself relied on least squares, as opposed to Gauss's new method of computing an orbit from a
few observations, is also less clear-cut than popular accounts suggest. In the 1820s Gauss gave a second justification
that does not depend on the normal distribution: among all estimators that are linear in the data and unbiased, least
squares has the smallest variance, assuming only uncorrelated errors of equal variance. With Markov's later
contribution, this is now called the **Gauss-Markov theorem** ([Statistics, Chapter 12](../statistics/12-Multiple-Regression.md)).

### How an orbit is fitted

An orbit around the Sun, ignoring the pull of planets, is an ellipse described by six numbers (orbital elements, such
as the size and shape of the ellipse, its tilt, and where the body is on it at a given time). Each observation of a
direction in the sky gives two angles. A handful of observations already gives more equations than unknowns; dozens
give many more. But the position predicted from the six elements is a **nonlinear** function of them. The standard
approach, which goes back to Gauss himself and is now called the **Gauss-Newton method**, is:

1. Start from a rough orbit $x_0$ (from a few observations, by a method like Gauss's 1801 one).
2. Compute the predicted observations $F(x_0)$ and the residuals $b - F(x_0)$.
3. Linearise: near $x_0$, $F(x_0 + \delta) \approx F(x_0) + J\delta$, where $J$ is the Jacobian matrix of partial
   derivatives ([Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md)), one row per measured number
   and one column per element.
4. Solve the linear least squares problem $J\delta \approx b - F(x_0)$, with weights for the measurement accuracies,
   by QR or the normal equations; set $x_1 = x_0 + \delta$.
5. Repeat until the corrections are negligible.

Each step is exactly the problem of this chapter. Near the answer the method converges quickly when the residuals
are small; when they are not, or when the starting guess is poor, safeguards such as the Levenberg-Marquardt method
are used. The matrix $(J^{\mathsf T}WJ)^{-1}$ at the end also has a meaning: under the statistical assumptions above, it is
the covariance matrix of the fitted elements, which says how uncertain each one is.

**Today.** The same mathematics, much extended, is used to track spacecraft. Navigation teams for missions to Mars fit
a spacecraft's trajectory to radio tracking data (the Doppler shift of its signal, and the round-trip time of ranging
signals, measured at large antennas on Earth), using weighted least squares and closely related sequential filters,
with models that include the gravity of the Sun and planets, solar radiation pressure and the spacecraft's own
thruster firings. Asteroid and comet orbits from telescope surveys are computed and continually refined in the same
way. The forces are more complicated than in 1801, but the core step, project the measurements onto what the model
can produce, is still the one Gauss and Legendre found.

## Check yourself

??? question "1. Project $b = (1, 1, 0)$ onto the line through $a = (2, 1, 2)$. What is the distance from $b$ to the line?"

    $a \cdot b = 3$ and $a \cdot a = 9$, so $p = \frac13(2, 1, 2) = \left(\frac23, \frac13, \frac23\right)$ and
    $e = b - p = \left(\frac13, \frac23, -\frac23\right)$.

    Check: $a \cdot e = \frac23 + \frac23 - \frac43 = 0$. The distance is $|e| = \frac13\sqrt{1 + 4 + 4} = 1$.

??? question "2. Write the projection matrix onto the line through $(1, 1)$ in $\mathbb{R}^2$. Check $P^2 = P$ and find its eigenvalues and eigenvectors."

    $P = \frac{aa^{\mathsf T}}{a^{\mathsf T}a} = \frac12\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$.
    $P^2 = \frac14\begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix} = P$.

    Eigenvalue 1 with eigenvector $(1, 1)$ (the line is kept) and eigenvalue 0 with eigenvector $(1, -1)$ (the
    perpendicular direction is killed). Trace $= 1 =$ dimension of the line.

??? question "3. Fit a least squares line to $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 4)$, and give the residuals."

    $m = 4$, $\sum t = 6$, $\sum t^2 = 14$, $\sum y = 12$, $\sum ty = 0 + 3 + 8 + 12 = 23$. The normal equations are
    $4c + 6d = 12$ and $6c + 14d = 23$. Multiply the first by 1.5 and subtract: $5d = 5$, so $d = 1$ and
    $c = (12 - 6)/4 = 1.5$.

    Line: $y = 1.5 + t$, with values $1.5, 2.5, 3.5, 4.5$ and residuals $(-0.5, 0.5, 0.5, -0.5)$. Check: they add to 0,
    and $\sum t_ie_i = 0 + 0.5 + 1 - 1.5 = 0$.

??? question "4. Show that whenever the model includes a constant term (a column of ones in $A$), the least squares residuals add up to zero."

    The normal equations say $A^{\mathsf T}e = 0$, so $e$ is orthogonal to every column of $A$. If one column is
    $(1, 1, \dots, 1)$, its dot product with $e$ is $\sum e_i = 0$.

??? question "5. Project $b = (1, 2, 3)$ onto the plane $x + y + z = 0$."

    The plane is the orthogonal complement of $n = (1, 1, 1)$, so the projection onto it is $(I - P_n)b$ where
    $P_n$ projects onto the normal line: $P_nb = \frac{n \cdot b}{n \cdot n}n = \frac63(1, 1, 1) = (2, 2, 2)$.

    So the projection is $(1, 2, 3) - (2, 2, 2) = (-1, 0, 1)$. Check: $-1 + 0 + 1 = 0$, so it lies in the plane.

??? question "6. Let $P = A(A^{\mathsf T}A)^{-1}A^{\mathsf T}$ for an $m \times n$ matrix $A$ with independent columns. Show that $\operatorname{tr}P = n$."

    Use $\operatorname{tr}(XY) = \operatorname{tr}(YX)$ (valid whenever both products are defined) with
    $X = A$ and $Y = (A^{\mathsf T}A)^{-1}A^{\mathsf T}$:
    $\operatorname{tr}P = \operatorname{tr}\left((A^{\mathsf T}A)^{-1}A^{\mathsf T}A\right) = \operatorname{tr}I_n = n$.

??? question "7. Fit the one-parameter model $y = ct^2$ (no constant term) to $(1, 1)$, $(2, 3)$, $(3, 10)$."

    $A$ is the single column $a = (1, 4, 9)$, so $\hat c = \frac{a \cdot y}{a \cdot a} = \frac{1 + 12 + 90}{1 + 16 + 81} = \frac{103}{98} \approx 1.051$.

    This is just projection onto a line in $\mathbb{R}^3$.

??? question "8. Find the QR factorisation of $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$."

    $|a_1| = \sqrt 2$, $q_1 = \frac1{\sqrt2}(1, 1, 0)$, $r_{11} = \sqrt 2$.

    $r_{12} = q_1 \cdot a_2 = \frac{1}{\sqrt2}$. $u_2 = a_2 - \frac1{\sqrt2}q_1 = (1, 0, 1) - \frac12(1, 1, 0) = \left(\frac12, -\frac12, 1\right)$,
    with $|u_2| = \sqrt{3/2} = \frac{\sqrt6}{2}$. So $r_{22} = \frac{\sqrt6}{2}$ and $q_2 = \frac1{\sqrt6}(1, -1, 2)$.

    $Q = \begin{pmatrix} 1/\sqrt2 & 1/\sqrt6 \\ 1/\sqrt2 & -1/\sqrt6 \\ 0 & 2/\sqrt6 \end{pmatrix}$,
    $R = \begin{pmatrix} \sqrt2 & 1/\sqrt2 \\ 0 & \sqrt6/2 \end{pmatrix}$.

    Check the second column: $\frac{1}{\sqrt2}q_1 + \frac{\sqrt6}{2}q_2 = \frac12(1, 1, 0) + \frac12(1, -1, 2) = (1, 0, 1)$.

??? question "9. Use the QR factorisation of Example 6 to solve the least squares problem with $b = (1, 1, 4)$."

    $Q^{\mathsf T}b = \frac13(1 + 2 + 8,\; 2 + 1 - 8) = \left(\frac{11}{3}, -\frac53\right)$.

    Back substitution in $R\hat x = Q^{\mathsf T}b$: $\hat x_2 = -\frac53$; $3\hat x_1 + 4\left(-\frac53\right) = \frac{11}{3}$,
    so $3\hat x_1 = \frac{31}{3}$ and $\hat x_1 = \frac{31}{9}$.

    Residual: $b - A\hat x = \left(\frac89, -\frac89, \frac49\right)$. Check it is orthogonal to the columns:
    $(1, 2, 2) \cdot (8, -8, 4) = 8 - 16 + 8 = 0$ and $(2, 3, 2) \cdot (8, -8, 4) = 16 - 24 + 8 = 0$.

??? question "10. Derive the weighted normal equations $A^{\mathsf T}WA\hat x = A^{\mathsf T}Wb$ for minimising $(Ax - b)^{\mathsf T}W(Ax - b)$ with $W$ diagonal and positive."

    Let $S = \operatorname{diag}(\sqrt{w_1}, \dots, \sqrt{w_m})$, so $W = S^2 = S^{\mathsf T}S$. Then
    $(Ax - b)^{\mathsf T}W(Ax - b) = |SAx - Sb|^2$, an ordinary least squares problem with matrix $SA$ and right side
    $Sb$. Its normal equations are $(SA)^{\mathsf T}SA\hat x = (SA)^{\mathsf T}Sb$, that is $A^{\mathsf T}WA\hat x = A^{\mathsf T}Wb$.

??? question "11. If the columns of $A$ are dependent, describe all least squares solutions. Is the projection $p$ still unique?"

    The projection $p$ of $b$ onto $\operatorname{Col}(A)$ is unique (Theorem 8 of Chapter 11). The least squares
    solutions are all $x$ with $Ax = p$: if $\hat x$ is one, they are exactly $\hat x + z$ with $z \in \operatorname{Null}(A)$,
    an affine subspace of dimension $n - \operatorname{rank}A$. Among them there is exactly one of smallest length,
    the one lying in the row space; it is given by the pseudoinverse, $\hat x = A^+b$
    ([Chapter 15](15-The-Singular-Value-Decomposition.md)).

??? question "12. Show that the least squares line through data points with $\bar t = 0$ has slope $\hat d = \sum t_iy_i/\sum t_i^2$ and intercept $\bar y$. Why does centring help?"

    With $\sum t_i = 0$, the normal equations are $\begin{pmatrix} m & 0 \\ 0 & \sum t_i^2 \end{pmatrix}\begin{pmatrix} \hat c \\ \hat d \end{pmatrix} = \begin{pmatrix} \sum y_i \\ \sum t_iy_i \end{pmatrix}$,
    which are already diagonal: $\hat c = \frac1m\sum y_i = \bar y$ and $\hat d = \sum t_iy_i/\sum t_i^2$.

    Centring makes the two columns $(1, \dots, 1)$ and $(t_1, \dots, t_m)$ orthogonal, so each coefficient is a separate
    projection onto one column (Theorem 6 of Chapter 11) and no system needs to be solved. It also improves the
    conditioning of $A^{\mathsf T}A$ when the $t_i$ are large and close together, such as calendar years.

## What you learned

- The projection of $b$ onto the line through $a$ is $\frac{a \cdot b}{a \cdot a}a$; onto the column space of $A$ it is
  $A\hat x$ with $A^{\mathsf T}A\hat x = A^{\mathsf T}b$, and the projection matrix is $A(A^{\mathsf T}A)^{-1}A^{\mathsf T}$.
- Orthogonal projection matrices are exactly the matrices with $P^2 = P = P^{\mathsf T}$; their eigenvalues are 0 and 1,
  and with orthonormal columns $P = QQ^{\mathsf T}$.
- Least squares solutions of an inconsistent system are the solutions of the normal equations, derived either from
  "the error is perpendicular to the column space" or from setting a gradient to zero; they are unique exactly when
  the columns are independent.
- Fitting lines, polynomials or any model linear in its parameters is a least squares problem, and the best line
  passes through the point of means; weights handle measurements of unequal reliability.
- $A = QR$ is Gram-Schmidt in matrix form, and $R\hat x = Q^{\mathsf T}b$ solves least squares without squaring the
  condition number, as forming $A^{\mathsf T}A$ does.
- Least squares was published by Legendre in 1805 and developed by Gauss, whose 1801 recovery of Ceres made orbit
  determination famous; spacecraft are navigated today by the same idea, iterated.

**Next:** [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md), where matrices with orthonormal columns become
rotations and reflections, and we meet Euler angles, quaternions and Householder reflections.

## Further reading

- G. Strang, *Introduction to Linear Algebra*, 5th edition, Wellesley-Cambridge Press, 2016, chapter 4.
- L. N. Trefethen and D. Bau, *Numerical Linear Algebra*, SIAM, 1997, lectures 7 to 11 (QR and least squares) and
  lecture 19.
- Å. Björck, *Numerical Methods for Least Squares Problems*, SIAM, 1996.
- G. H. Golub, "Numerical Methods for Solving Linear Least Squares Problems", *Numerische Mathematik* 7, 1965.
- S. M. Stigler, "Gauss and the Invention of Least Squares", *Annals of Statistics* 9, 1981, and *The History of
  Statistics: The Measurement of Uncertainty before 1900*, Harvard University Press, 1986, chapter 1.
- C. F. Gauss, *Theoria Motus Corporum Coelestium*, 1809 (English translation by C. H. Davis, *Theory of the Motion
  of the Heavenly Bodies Moving about the Sun in Conic Sections*, 1857).
- B. D. Tapley, B. E. Schutz and G. H. Born, *Statistical Orbit Determination*, Elsevier Academic Press, 2004.
- On this site: [Statistics, Chapter 11: Linear regression](../statistics/11-Linear-Regression.md),
  [Statistics, Chapter 12: Multiple regression](../statistics/12-Multiple-Regression.md),
  [Calculus, Chapter 15: Functions of several variables](../calculus/15-Functions-of-Several-Variables.md), the gentle
  [line of best fit](../../topics/statistics/level-6/03-line-best-fit.md) and
  [scatter plots](../../topics/statistics/level-6/01-scatter-plots.md) lessons, and the U of T guides
  [MAT247H1 Unit 2: Orthogonality and Gram-Schmidt](../../uoft/MAT247H1/unit02.md) and
  [MAT247H1 Unit 3: The adjoint](../../uoft/MAT247H1/unit03.md).
- Other books on the shelf: [Statistics](../statistics/index.md), [Calculus](../calculus/index.md).
