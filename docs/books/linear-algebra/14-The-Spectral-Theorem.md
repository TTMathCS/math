# 14. The spectral theorem

*Some matrices cannot be diagonalised at all, and even when one can, the eigenvectors may lean against each other at
awkward angles. Symmetric matrices are different: they always have real eigenvalues and a full set of perpendicular
eigenvectors. This is the spectral theorem, probably the most used theorem in all of applied linear algebra. In this
chapter you will prove it, use it to find the axes of an ellipse, sort quadratic forms into types, meet positive
definite matrices and the Cholesky factorisation, put the second derivative test of calculus on a solid footing, and see
exactly which complex matrices have the same good behaviour.*

!!! abstract "In this chapter"
    **You will learn:**

    - why a real symmetric matrix has only real eigenvalues, and why its eigenvectors for different eigenvalues are perpendicular
    - the spectral theorem $A = Q\Lambda Q^T$, with a full proof, and what it says as a sum of projections
    - how to find the principal axes of a conic or quadric, and Sylvester's law of inertia
    - five equivalent tests for a positive definite matrix, and the Cholesky factorisation $A = LL^T$
    - why the eigenvalues of the Hessian decide maxima, minima and saddles
    - adjoints, Hermitian, unitary and normal matrices, Schur's theorem, and the complex spectral theorem

    **You need:** [Chapter 9](09-Eigenvalues-and-Eigenvectors.md) (eigenvalues, diagonalisation),
    [Chapter 11](11-Inner-Product-Spaces.md) (inner products, Gram-Schmidt, orthogonal complements) and
    [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md) (orthogonal matrices). For 14.5, partial derivatives from
    [Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md).

    **Levels:** 14.1 and 14.2 are advanced but short; 14.3 and 14.4 are advanced with many worked examples; 14.5 is
    advanced; 14.6 is advanced to expert.

## 14.1 Symmetric matrices have real eigenvalues

*Level: advanced.*

**The problem.** The rotation matrix $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ has no real eigenvalues
(its characteristic polynomial is $\lambda^2 + 1$). The shear $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has the real
eigenvalue 1 but only one line of eigenvectors, so it cannot be diagonalised. In applications, though, the matrices that
come up most often are **symmetric**, $A^T = A$: covariance matrices in statistics, Hessians of functions, stiffness
matrices in engineering, the inertia matrix of a spinning body, the adjacency matrix of a network. For them neither
problem ever happens. Why?

The key is a property of symmetric matrices that has nothing to do with eigenvalues. For all vectors $x, y$,

$$
Ax \cdot y = (Ax)^Ty = x^TA^Ty = x^T A y = x \cdot Ay .
$$

You can move $A$ from one side of the dot product to the other. This is what "symmetric" really means, and it is the only
fact we will use.

For complex vectors we need the right dot product. For $z, w \in \mathbb C^n$ put
$\langle z, w \rangle = \bar w^T z = \sum z_i \bar w_i$ ([Chapter 11](11-Inner-Product-Spaces.md)). Then
$\langle z, z \rangle = \sum |z_i|^2$ is a positive real number when $z \ne 0$. If $A$ is real and symmetric, then
$\bar A^T = A$, and the same calculation gives $\langle Az, w \rangle = \langle z, Aw \rangle$.

**Theorem 14.1.** Every eigenvalue of a real symmetric matrix is real.

*Proof.* Let $Az = \lambda z$ with $z \in \mathbb C^n$, $z \ne 0$, $\lambda \in \mathbb C$. Then

$$
\lambda \langle z, z \rangle = \langle Az, z \rangle = \langle z, Az \rangle = \langle z, \lambda z \rangle = \bar\lambda \langle z, z \rangle .
$$

(The inner product is conjugate-linear in the second slot, which is where $\bar\lambda$ comes from.) Since
$\langle z, z\rangle > 0$, we get $\lambda = \bar\lambda$, so $\lambda$ is real. $\square$

Once $\lambda$ is real, $A - \lambda I$ is a real singular matrix, so it has a real null vector: the eigenvectors can be
taken real.

**Theorem 14.2.** If $A$ is real symmetric, $Ax = \lambda x$ and $Ay = \mu y$ with $\lambda \ne \mu$, then $x \cdot y = 0$.

*Proof.* $\lambda (x \cdot y) = Ax \cdot y = x \cdot Ay = \mu (x \cdot y)$, so $(\lambda - \mu)(x \cdot y) = 0$, and
$\lambda - \mu \ne 0$. $\square$

**Worked example.** $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. The characteristic polynomial is
$(2 - \lambda)^2 - 1 = (\lambda - 1)(\lambda - 3)$. For $\lambda = 3$: $A - 3I = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}$,
eigenvector $(1, 1)$. For $\lambda = 1$: eigenvector $(1, -1)$. *Check:* $(1,1)\cdot(1,-1) = 0$, perpendicular as promised.

**Why the theorem is plausible.** For a $2 \times 2$ symmetric matrix $\begin{pmatrix} a & b \\ b & d \end{pmatrix}$ the
discriminant of the characteristic polynomial is $(a + d)^2 - 4(ad - b^2) = (a - d)^2 + 4b^2 \ge 0$. A sum of squares
cannot be negative, so the roots are real; they are equal only when $a = d$ and $b = 0$, that is, when $A$ is already a
multiple of $I$. Theorem 14.1 is the $n$-dimensional version of this sum of squares.

## 14.2 The spectral theorem

*Level: advanced.*

**Theorem 14.3 (spectral theorem for real symmetric matrices).** If $A$ is a real symmetric $n \times n$ matrix, there is
an orthonormal basis of $\mathbb R^n$ made of eigenvectors of $A$. Equivalently, there is an orthogonal matrix $Q$ and a
real diagonal matrix $\Lambda$ with

$$
A = Q \Lambda Q^T .
$$

Conversely, every matrix of this form is symmetric: $(Q\Lambda Q^T)^T = Q \Lambda^T Q^T = Q\Lambda Q^T$. So the
symmetric matrices are *exactly* the ones that can be diagonalised by a rotation (or reflection) of the axes.

*Proof.* By induction on $n$. For $n = 1$ there is nothing to prove. Suppose the theorem holds in dimension $n - 1$.

*Step 1: one eigenvector.* The characteristic polynomial has a complex root, which by Theorem 14.1 is a real number
$\lambda_1$, with a real unit eigenvector $q_1$.

*Step 2: the complement is invariant.* Let $W = q_1^\perp$, the $(n-1)$-dimensional subspace of vectors perpendicular
to $q_1$. If $w \in W$ then $Aw \cdot q_1 = w \cdot Aq_1 = \lambda_1 (w \cdot q_1) = 0$, so $Aw \in W$. The matrix $A$
maps $W$ into itself.

*Step 3: induct.* Choose any orthonormal basis $w_2, \dots, w_n$ of $W$ and let $B$ be the $(n-1)\times(n-1)$ matrix of
$A$ restricted to $W$ in this basis: $B_{ij} = w_i \cdot Aw_j$. Then $B$ is symmetric, since
$w_i \cdot Aw_j = Aw_i \cdot w_j$. By the induction hypothesis $W$ has an orthonormal basis $q_2, \dots, q_n$ of
eigenvectors of $A$ (restricted to $W$, which is the same thing). Together with $q_1$, which is perpendicular to all of
$W$, they form an orthonormal basis of $\mathbb R^n$ of eigenvectors.

Finally, if $Q$ has columns $q_1, \dots, q_n$ and $\Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, then
$AQ = Q\Lambda$ (column $i$ says $Aq_i = \lambda_i q_i$), and $Q^{-1} = Q^T$ gives $A = Q\Lambda Q^T$. $\square$

Notice what the proof did *not* need: it never assumed the eigenvalues were different. Repeated eigenvalues cause no
trouble for symmetric matrices, which is the big difference from the general case ([Chapter 16](16-Jordan-Form.md)).

**The spectral decomposition.** Multiplying out $Q\Lambda Q^T$ column by row gives

$$
A = \lambda_1 q_1q_1^T + \lambda_2 q_2q_2^T + \cdots + \lambda_n q_nq_n^T .
$$

Each $q_iq_i^T$ is the matrix of orthogonal projection onto the line through $q_i$
([Chapter 12](12-Projections-and-Least-Squares.md)). So a symmetric matrix is a weighted sum of perpendicular projections:
it splits a vector into its components along the eigenvectors, stretches each by its eigenvalue, and adds them back. If
an eigenvalue $\lambda$ is repeated, the projections for it add up to the projection $P_\lambda$ onto the whole
eigenspace, and $A = \sum_\lambda \lambda P_\lambda$ with distinct $\lambda$'s. This form is independent of the choice of
basis inside each eigenspace. The set of eigenvalues is called the **spectrum** of $A$, which is where the theorem gets
its name.

**Worked example with a repeated eigenvalue.** Let $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$.

*Eigenvalues.* $A = I + J$ where $J$ is the all-ones matrix. $J$ has rank 1, $J(1,1,1) = 3(1,1,1)$, and $J$ kills every
vector whose entries add to 0. So $A$ has eigenvalue $1 + 3 = 4$ on the line through $(1,1,1)$, and eigenvalue $1 + 0 = 1$
on the plane $x + y + z = 0$, which is 2-dimensional. *Check:* the trace is $6 = 4 + 1 + 1$.

*Orthonormal eigenvectors.* For $\lambda = 4$: $q_1 = (1,1,1)/\sqrt3$. For $\lambda = 1$, any orthonormal basis of the
plane will do. Starting from $(1,-1,0)$ and $(1,0,-1)$ and applying Gram-Schmidt: $q_2 = (1,-1,0)/\sqrt2$; then
$(1,0,-1) - \tfrac12(1,-1,0) = (\tfrac12, \tfrac12, -1)$, which normalises to $q_3 = (1,1,-2)/\sqrt6$.

*Result.*

$$
A = 4\, q_1 q_1^T + 1\cdot\left(q_2q_2^T + q_3q_3^T\right) = 4 \cdot \tfrac13 J + \left(I - \tfrac13 J\right).
$$

*Check:* $\tfrac43 J + I - \tfrac13 J = I + J = A$. Here $\tfrac13 J$ is the projection onto $(1,1,1)$ and
$I - \tfrac13 J$ the projection onto the plane.

**What the spectral theorem buys.** Anything you want to do to a symmetric matrix, do it to the eigenvalues:

- powers: $A^k = Q \Lambda^k Q^T$;
- inverse (if no eigenvalue is 0): $A^{-1} = Q \Lambda^{-1} Q^T$;
- any function: $f(A) = Q\, \operatorname{diag}(f(\lambda_1), \dots, f(\lambda_n))\, Q^T$, for instance the exponential
  $e^{tA}$ of [Chapter 10](10-Applications-of-Eigenvalues.md), or a square root when all $\lambda_i \ge 0$.

For the matrix above, $A^{-1} = \tfrac14 \cdot \tfrac13 J + (I - \tfrac13 J) = I - \tfrac14 J$. *Check:*
$(I + J)(I - \tfrac14 J) = I + J - \tfrac14 J - \tfrac14 J^2 = I + \tfrac34 J - \tfrac34 J = I$, using $J^2 = 3J$.

**The eigenvalues as maxima.** The spectral theorem also gives the eigenvalues a meaning that does not mention
eigenvectors at all. Order them $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$. For a unit vector
$x = \sum c_i q_i$ (so $\sum c_i^2 = 1$),

$$
x^TAx = \sum_i \lambda_i c_i^2 ,
$$

which lies between $\lambda_n$ and $\lambda_1$. So $\lambda_1$ is the largest value of the **Rayleigh quotient**
$x^TAx / x^Tx$ and $\lambda_n$ the smallest, reached at $q_1$ and $q_n$. The **Courant-Fischer theorem** extends this to
every eigenvalue: $\lambda_k$ is the largest value, over all $k$-dimensional subspaces $V$, of the minimum of
$x^TAx/x^Tx$ over nonzero $x \in V$. We will use the first statement in 14.5 and in
[Chapter 15](15-The-Singular-Value-Decomposition.md).

## 14.3 Quadratic forms, conic sections and principal axes

*Level: advanced.*

**The problem.** What does the curve $5x^2 - 4xy + 8y^2 = 36$ look like? Without the $xy$ term we would recognise an
ellipse at once. The $xy$ term means the ellipse is tilted. Which way, and how big is it?

A **quadratic form** on $\mathbb R^n$ is a function $q(x) = \sum_{i,j} a_{ij}x_ix_j$, a homogeneous polynomial of degree
2. Every quadratic form can be written $q(x) = x^TAx$ with $A$ *symmetric*: put the squares' coefficients on the diagonal
and split each cross term equally between the two off-diagonal places. For our curve,

$$
5x^2 - 4xy + 8y^2 = \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} 5 & -2 \\ -2 & 8 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}.
$$

Now diagonalise. If $A = Q\Lambda Q^T$, put new coordinates $u = Q^Tx$ (the coordinates of $x$ in the eigenvector basis).
Then

$$
x^TAx = x^TQ\Lambda Q^Tx = u^T \Lambda u = \lambda_1 u_1^2 + \cdots + \lambda_n u_n^2 .
$$

The cross terms are gone. Because $Q$ is orthogonal, the new axes are perpendicular and lengths are unchanged: we have
only turned the picture. The eigenvector directions are the **principal axes** of the form.

**Worked example.** For $A = \begin{pmatrix} 5 & -2 \\ -2 & 8 \end{pmatrix}$, the characteristic polynomial is
$\lambda^2 - 13\lambda + 36 = (\lambda - 4)(\lambda - 9)$.

- $\lambda = 4$: $A - 4I = \begin{pmatrix} 1 & -2 \\ -2 & 4 \end{pmatrix}$, eigenvector $(2, 1)$, unit $q_1 = (2,1)/\sqrt5$.
- $\lambda = 9$: $A - 9I = \begin{pmatrix} -4 & -2 \\ -2 & -1 \end{pmatrix}$, eigenvector $(-1, 2)$, unit $q_2 = (-1,2)/\sqrt5$.

In the coordinates $u_1, u_2$ along $q_1, q_2$ the curve is $4u_1^2 + 9u_2^2 = 36$, that is

$$
\frac{u_1^2}{9} + \frac{u_2^2}{4} = 1 ,
$$

an ellipse with semi-axis 3 along $(2,1)$ and semi-axis 2 along $(-1,2)$. The long axis is tilted up by
$\arctan\frac12 \approx 26.57°$. *Check:* the point $3q_1 = (6, 3)/\sqrt5$ should be on the curve:
$\frac15(5\cdot 36 - 4 \cdot 18 + 8 \cdot 9) = \frac15(180 - 72 + 72) = 36$. Yes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="An ellipse centred at the origin, tilted up by about 26.6 degrees. Its long axis, of half-length 3, lies along the direction (2, 1); its short axis, of half-length 2, lies along (-1, 2). The x and y coordinate axes are drawn faintly; the principal axes are drawn as solid lines labelled q1 with eigenvalue 4 and q2 with eigenvalue 9.">
  <line x1="60" y1="120" x2="380" y2="120" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <line x1="220" y1="230" x2="220" y2="10" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <text x="384" y="124" font-size="12" fill="currentColor">x</text>
  <text x="224" y="18" font-size="12" fill="currentColor">y</text>
  <ellipse cx="220" cy="120" rx="90" ry="60" transform="rotate(-26.565 220 120)" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <line x1="121.6" y1="169.2" x2="318.4" y2="70.8" stroke="#eea66f" stroke-width="3"/>
  <line x1="255.8" y1="191.6" x2="184.2" y2="48.4" stroke="#7ccf9a" stroke-width="3"/>
  <text x="324" y="76" font-size="13" fill="currentColor">q1, λ = 4</text>
  <text x="112" y="44" font-size="13" fill="currentColor">q2, λ = 9</text>
  <text x="220" y="225" font-size="13" text-anchor="middle" fill="currentColor">5x² − 4xy + 8y² = 36</text>
</svg>
</div>

Notice the inverse relation: the *larger* eigenvalue goes with the *shorter* axis, since $\lambda u^2 = c$ gives
$u = \sqrt{c/\lambda}$.

**The types of conics.** For a $2 \times 2$ form $x^TAx = c$ with $c > 0$, the signs of the two eigenvalues decide the
shape:

| eigenvalues | curve $x^TAx = c > 0$ | example |
|---|---|---|
| both positive | ellipse | $5x^2 - 4xy + 8y^2 = 36$ |
| one positive, one negative | hyperbola | $xy = 1$ |
| one positive, one zero | two parallel lines | $(x + y)^2 = 4$ |
| none positive | empty | $-x^2 - y^2 = 1$ |

Since $\det A = \lambda_1\lambda_2$, you can read the type from the determinant: $\det A > 0$ with positive trace gives an
ellipse, $\det A < 0$ a hyperbola. For $xy = 1$, the matrix is $\begin{pmatrix} 0 & 1/2 \\ 1/2 & 0 \end{pmatrix}$ with
eigenvalues $\pm\frac12$ along $(1,1)$ and $(1,-1)$; in those coordinates the curve is $\frac12 u_1^2 - \frac12 u_2^2 = 1$,
a hyperbola whose axis is the diagonal. (Conics with linear terms, such as $x^2 + y = 0$, are handled by first completing
the square to move the centre; the eigenvalues still decide the type.)

In three dimensions the same method sorts **quadric surfaces**: three positive eigenvalues give an ellipsoid, two positive
and one negative a hyperboloid of one sheet, one positive and two negative a hyperboloid of two sheets.

**Principal axes in mechanics.** A rigid body has a symmetric $3 \times 3$ **inertia matrix** $I$: its rotational kinetic
energy is $\frac12 \omega^T I \omega$ for angular velocity $\omega$. The spectral theorem says every rigid body, however
lopsided, has three perpendicular **principal axes** in which $I$ is diagonal; the eigenvalues are the **principal
moments of inertia**. A body spinning freely about the axis of largest or smallest moment can spin steadily; about the
middle one, the motion is unstable (try it with a book held shut by a rubber band, tossed in the air). Spinning
spacecraft are designed with this in mind, and when energy is slowly lost (to flexing parts or sloshing fuel), only spin
about the axis of *largest* moment stays stable.

**Sylvester's law of inertia.** The orthogonal change of variables is not the only way to remove cross terms. Completing
the square also works: $x^2 + 4xy + y^2 = (x + 2y)^2 - 3y^2$. The coefficients $1, -3$ are not the eigenvalues
($3$ and $-1$), but the *signs* agree. That is always so.

**Theorem 14.4 (Sylvester's law of inertia).** If a quadratic form is written as
$q = \sum_i d_i \ell_i(x)^2$ where $\ell_1, \dots, \ell_n$ are linearly independent linear functions, then the number $p$
of positive $d_i$ and the number $m$ of negative $d_i$ do not depend on how this was done. In particular they equal the
numbers of positive and negative eigenvalues of $A$.

*Proof.* Suppose two such expressions have $p$ and $p'$ positive coefficients, and $p > p'$. In the first, let $U$ be the
set of $x$ where all the $\ell_i$ with $d_i \le 0$ vanish: that is $n - p$ independent conditions, so $\dim U = p$, and
$q(x) > 0$ for every nonzero $x \in U$ (some $\ell_i(x)$ with $d_i > 0$ is nonzero, since all $n$ of the $\ell_i$ cannot
vanish at once). In the second, let $V$ be the set where the $p'$ functions with positive coefficient vanish:
$\dim V = n - p'$, and $q(x) \le 0$ on $V$. Then $\dim U + \dim V = p + n - p' > n$, so $U \cap V$ contains a nonzero $x$
([Chapter 5](05-Independence-Bases-and-Dimension.md)), with $q(x) > 0$ and $q(x) \le 0$. Contradiction. So $p \le p'$,
and by symmetry $p = p'$. The same argument applied to $-q$ gives $m = m'$. $\square$

The pair $(p, m)$ is the **signature** of the form. Sylvester stated this law in 1852, calling it a law of inertia
because the counts refuse to change.

<figure class="play" data-play="matrix2" data-mode="circle" data-m="2,0.8,0.8,1"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A symmetric matrix sends the unit circle to an ellipse whose axes are its eigenvectors, at right angles, as the spectral theorem says.</figcaption></figure>

## 14.4 Positive definite matrices and Cholesky

*Level: advanced.*

**Definition.** A real symmetric matrix $A$ is **positive definite** if $x^TAx > 0$ for every nonzero $x$, and
**positive semidefinite** if $x^TAx \ge 0$ for every $x$.

Positive definite matrices are the matrix version of positive numbers. They are the covariance matrices of random
vectors with no exact linear relation among the coordinates ([Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md)),
the Hessians at strict minima (14.5), the matrices $A$ for which $\langle x, y \rangle = x^TAy$ is an inner product
([Chapter 11](11-Inner-Product-Spaces.md)), and the stiffness matrices of stable structures.

**Theorem 14.5.** For a real symmetric $n \times n$ matrix $A$, these are equivalent:

1. $x^TAx > 0$ for all $x \ne 0$;
2. every eigenvalue of $A$ is positive;
3. $A = R^TR$ for some matrix $R$ with independent columns;
4. every leading principal minor is positive: $\det A_k > 0$ for $k = 1, \dots, n$, where $A_k$ is the top-left
   $k \times k$ block (**Sylvester's criterion**);
5. $A = LL^T$ with $L$ lower triangular with positive diagonal entries (**Cholesky factorisation**), and this $L$ is
   unique.

*Proof.* (1)⇒(2): if $Aq = \lambda q$ with $q$ a unit vector, then $\lambda = q^TAq > 0$.

(2)⇒(3): by the spectral theorem $A = Q\Lambda Q^T$ with all $\lambda_i > 0$; put $R = \Lambda^{1/2}Q^T$, which is
invertible, so its columns are independent, and $R^TR = Q\Lambda^{1/2}\Lambda^{1/2}Q^T = A$.

(3)⇒(1): $x^TAx = x^TR^TRx = \|Rx\|^2 \ge 0$, and it is 0 only if $Rx = 0$, which forces $x = 0$ when the columns of $R$
are independent.

(1)⇒(4): if $A$ is positive definite, so is each $A_k$ (use vectors $x$ whose last $n-k$ entries are 0). So by (2)
applied to $A_k$, $\det A_k$, the product of its eigenvalues, is positive.

(4)⇒(5): by induction on $n$. For $n = 1$, $A = (a)$ with $a > 0$ and $L = (\sqrt a)$. For the step, write

$$
A = \begin{pmatrix} A' & b \\ b^T & c \end{pmatrix}, \qquad \text{look for}\quad L = \begin{pmatrix} L' & 0 \\ \ell^T & d \end{pmatrix}.
$$

The leading minors of $A'$ are leading minors of $A$, so by induction $A' = L'L'^T$ with $L'$ lower triangular with
positive diagonal. Multiplying out $LL^T$, we need $L'\ell = b$ (solvable, since $L'$ is invertible) and
$\ell^T\ell + d^2 = c$. Is $c - \ell^T\ell$ positive? Block elimination (explained just after the proof) shows
$\det A = \det A' \cdot (c - \ell^T\ell)$. Since $\det A > 0$ and $\det A' > 0$, $c - \ell^T\ell > 0$, and we
take $d = \sqrt{c - \ell^T\ell}$. Each step was forced, so $L$ is unique.

(5)⇒(3): take $R = L^T$, which is invertible. $\square$

For the determinant identity used in the step: subtracting $\ell^T L'^{-1}$ times the first block row from the last row
of $A$ turns $b^T = \ell^TL'^T = \ell^TL'^{-1}A'$ into 0 and $c$ into $c - \ell^TL'^{-1}b = c - \ell^T\ell$, without changing the determinant; the
result is block triangular with determinant $\det A' \cdot (c - \ell^T \ell)$.

**Computing Cholesky by hand.** Match $A = LL^T$ entry by entry, column by column. For

$$
A = \begin{pmatrix} 4 & 2 & 2 \\ 2 & 5 & 3 \\ 2 & 3 & 6 \end{pmatrix}:
$$

- $\ell_{11}^2 = 4$, so $\ell_{11} = 2$; then $\ell_{21}\ell_{11} = 2$ gives $\ell_{21} = 1$, and $\ell_{31} = 1$ likewise.
- $\ell_{21}^2 + \ell_{22}^2 = 5$, so $\ell_{22} = \sqrt{4} = 2$; then $\ell_{31}\ell_{21} + \ell_{32}\ell_{22} = 3$ gives
  $1 + 2\ell_{32} = 3$, $\ell_{32} = 1$.
- $\ell_{31}^2 + \ell_{32}^2 + \ell_{33}^2 = 6$, so $\ell_{33} = \sqrt{4} = 2$.

$$
L = \begin{pmatrix} 2 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 1 & 2 \end{pmatrix}.
$$

*Check:* the leading minors of $A$ are $4$, $4\cdot 5 - 2\cdot 2 = 16$ and $\det A = 64$, all positive, and they equal
$(\ell_{11})^2 = 4$, $(\ell_{11}\ell_{22})^2 = 16$ and $(\ell_{11}\ell_{22}\ell_{33})^2 = 64$, as the proof predicts.

If at some step the number under the square root is zero or negative, the matrix is not positive definite. That makes
Cholesky the fastest practical *test* for positive definiteness: it costs about $n^3/3$ operations, half of LU, and needs
no pivoting for stability.

**Uses.** To solve $Ax = b$ with $A$ positive definite, solve $Ly = b$ then $L^Tx = y$, two triangular systems. In
statistics and simulation, to draw random vectors with covariance $A$, take $x = Lz$ with $z$ a vector of independent
standard normals: then $\operatorname{Cov}(x) = L\,\operatorname{Cov}(z)L^T = LL^T = A$. In least squares
([Chapter 12](12-Projections-and-Least-Squares.md)), the normal equations matrix $A^TA$ is positive definite when $A$
has independent columns, by (3).

**History.** André-Louis Cholesky was a French army officer and surveyor who devised the method to solve the normal
equations of geodesy. He was killed in the First World War in 1918; his method was published after his death by a
fellow officer, Commandant Benoît, in 1924.

**Semidefinite and indefinite.** The same proof with "$\ge$" shows: $A$ is positive semidefinite exactly when all
eigenvalues are $\ge 0$, exactly when $A = R^TR$ for some $R$. (Careful: for semidefiniteness, the leading minors being
$\ge 0$ is *not* enough; $\begin{pmatrix} 0 & 0 \\ 0 & -1 \end{pmatrix}$ has leading minors $0, 0$. One needs all
principal minors, not only the leading ones.) A form with both positive and negative eigenvalues is **indefinite**.

## 14.5 The second derivative test revisited

*Level: advanced.*

In single-variable calculus, at a point where $f'(a) = 0$, the sign of $f''(a)$ tells a minimum from a maximum. For a
function of several variables, the role of $f''$ is played by the **Hessian matrix** $H$ of second partial derivatives,
$H_{ij} = \dfrac{\partial^2 f}{\partial x_i \partial x_j}$, which is symmetric when the second partials are continuous
(Clairaut's theorem; see [Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md)). A matrix is not
positive or negative, so what should replace "the sign of $f''$"? The spectral theorem answers: the signs of the
eigenvalues.

**Theorem 14.6 (second derivative test).** Let $f$ have continuous second partial derivatives near $a$, with
$\nabla f(a) = 0$, and let $H = H(a)$.

1. If $H$ is positive definite, $f$ has a strict local minimum at $a$.
2. If $H$ is negative definite, $f$ has a strict local maximum at $a$.
3. If $H$ has a positive and a negative eigenvalue, $a$ is a **saddle point**: $f$ takes values above and below $f(a)$
   arbitrarily close to $a$.
4. If $H$ is singular and semidefinite, the test says nothing.

*Proof.* Fix a direction $h$ and look at $g(s) = f(a + sh)$. By the chain rule $g'(0) = \nabla f(a)\cdot h = 0$ and
$g''(s) = h^TH(a + sh)h$. Taylor's theorem with the Lagrange remainder for $g$ gives, for some $t \in (0,1)$,

$$
f(a + h) = f(a) + \tfrac12 h^T H(a + th)\, h .
$$

(1) Let $m > 0$ be the smallest eigenvalue of $H(a)$. By 14.2, $h^TH(a)h \ge m\|h\|^2$. The entries of $H$ are continuous,
so for $\|h\|$ small enough the matrix $E = H(a+th) - H(a)$ has all entries so small that
$|h^TEh| \le \frac m2 \|h\|^2$. Then

$$
f(a+h) - f(a) = \tfrac12\left(h^TH(a)h + h^TEh\right) \ge \tfrac12 \cdot \tfrac m2 \|h\|^2 > 0
$$

for small nonzero $h$. (2) is (1) applied to $-f$. (3) If $Hq = \lambda q$ with $\lambda > 0$, then
$g(s) = f(a + sq)$ has $g'(0) = 0$ and $g''(0) = \lambda > 0$, so $f$ increases from $f(a)$ along this line; along an
eigenvector with negative eigenvalue it decreases. (4) $f = x^4 + y^4$, $f = -x^4 - y^4$ and $f = x^4 - y^4$ all have zero
Hessian at the origin and are a minimum, a maximum and a saddle. $\square$

For two variables, $\det H = f_{xx}f_{yy} - f_{xy}^2$ is the product of the eigenvalues, which is why the familiar test
from calculus reads: $\det H > 0$ and $f_{xx} > 0$ for a minimum; $\det H > 0$ and $f_{xx} < 0$ for a maximum;
$\det H < 0$ for a saddle. Now you can see where it comes from, and it generalises to $n$ variables by Sylvester's
criterion.

**Worked example.** $f(x, y) = x^3 - 3xy + y^3$. The gradient is $(3x^2 - 3y,\ -3x + 3y^2)$. Setting it to zero:
$y = x^2$ and $x = y^2$, so $x = x^4$, giving $x = 0$ or $x = 1$ (the other roots of $x^3 = 1$ are not real). The critical
points are $(0,0)$ and $(1,1)$. The Hessian is $\begin{pmatrix} 6x & -3 \\ -3 & 6y \end{pmatrix}$.

- At $(1,1)$: $H = \begin{pmatrix} 6 & -3 \\ -3 & 6 \end{pmatrix}$, eigenvalues $3$ and $9$ (along $(1,1)$ and $(1,-1)$).
  Positive definite: a local minimum, $f(1,1) = -1$.
- At $(0,0)$: $H = \begin{pmatrix} 0 & -3 \\ -3 & 0 \end{pmatrix}$, eigenvalues $3$ along $(1,-1)$ and $-3$ along $(1,1)$.
  A saddle. *Check:* along $y = x$, $f(t,t) = 2t^3 - 3t^2 < 0$ for small $t \ne 0$; along $y = -x$, $f(t,-t) = 3t^2 > 0$.

The eigenvectors tell you more than the classification: they are the directions of steepest curving up and down. This
matters in optimisation. Gradient descent on a function whose Hessian has eigenvalues $\lambda_{\max}$ and
$\lambda_{\min}$ zigzags slowly when the ratio $\lambda_{\max}/\lambda_{\min}$ is large, because the level sets are long
thin ellipses ([Chapter 18](18-Numerical-Linear-Algebra.md)).

**Three variables.** $g(x,y,z) = x^2 + 2y^2 + 3z^2 + 2xy + 2yz$ has a critical point at the origin and constant Hessian
$\begin{pmatrix} 2 & 2 & 0 \\ 2 & 4 & 2 \\ 0 & 2 & 6 \end{pmatrix}$, with leading minors $2$, $8 - 4 = 4$ and $16$, all
positive. By Sylvester's criterion it is positive definite and the origin is a minimum, without computing a single
eigenvalue. (They are $4$ and $4 \pm 2\sqrt3$, all positive.)

## 14.6 Normal operators and the complex spectral theorem

*Level: advanced to expert.*

**The question.** Over the complex numbers every matrix has an eigenvalue, so the first step of the proof in 14.2 never
fails. Which complex matrices can be diagonalised by an orthonormal basis of $\mathbb C^n$? The answer is a surprisingly
clean algebraic condition.

**Adjoints.** On $\mathbb C^n$ with $\langle z, w \rangle = \bar w^Tz$, the **adjoint** (or conjugate transpose) of a
matrix $A$ is $A^* = \bar A^T$. It is the unique matrix with $\langle Az, w \rangle = \langle z, A^*w \rangle$ for all
$z, w$. On any finite-dimensional inner product space, every linear map $T$ has a unique adjoint $T^*$ defined by this
property, and in an orthonormal basis its matrix is the conjugate transpose.

**The cast.**

- **Hermitian** (self-adjoint): $A^* = A$. The complex version of symmetric.
- **Unitary**: $U^*U = I$. The complex version of orthogonal: columns orthonormal, keeps $\langle\ ,\ \rangle$ and lengths.
- **Normal**: $AA^* = A^*A$. Hermitian, skew-Hermitian ($A^* = -A$) and unitary matrices are all normal.

The proofs of Theorems 14.1 and 14.2 work word for word for Hermitian matrices: **a Hermitian matrix has real
eigenvalues, and its eigenvectors for different eigenvalues are orthogonal.** Hermitian matrices are the observables of
quantum mechanics ([Chapter 19](19-Linear-Algebra-in-the-World.md)), and the reality of their eigenvalues is why a
measurement gives a real number.

**Theorem 14.7 (Schur).** For every complex square matrix $A$ there is a unitary $U$ with $U^*AU = T$ upper triangular.

*Proof.* Induction on $n$. Pick an eigenvalue $\lambda_1$ (it exists over $\mathbb C$, by the fundamental theorem of
algebra) with unit eigenvector $u_1$. Extend it to an orthonormal basis $u_1, \dots, u_n$ of $\mathbb C^n$ (Gram-Schmidt)
and let $U_1$ have these columns. The first column of $U_1^*AU_1$ is $U_1^*Au_1 = \lambda_1 U_1^*u_1 = \lambda_1 e_1$, so

$$
U_1^*AU_1 = \begin{pmatrix} \lambda_1 & * \\ 0 & A' \end{pmatrix}
$$

with $A'$ of size $n - 1$. By induction $V^*A'V$ is upper triangular for a unitary $V$, and
$U = U_1 \begin{pmatrix} 1 & 0 \\ 0 & V \end{pmatrix}$ does the job. $\square$

Schur's theorem is the version of diagonalisation that *always* works: you cannot always make a matrix diagonal, but you
can always make it triangular with a perfectly conditioned (unitary) change of basis. It is the theorem behind the QR
algorithm that computers use to find eigenvalues ([Chapter 18](18-Numerical-Linear-Algebra.md)).

**Lemma 14.8.** An upper triangular matrix that is normal is diagonal.

*Proof.* Let $T$ be upper triangular with $TT^* = T^*T$. Compare the $(1,1)$ entries. On the left it is the squared
length of row 1 of $T$, $|t_{11}|^2 + |t_{12}|^2 + \cdots + |t_{1n}|^2$. On the right it is the squared length of column
1 of $T$, which is $|t_{11}|^2$ since the column has zeros below. So $t_{12} = \cdots = t_{1n} = 0$. Now $T$ is block
diagonal, $\operatorname{diag}(t_{11}, T')$, and $T'$ is upper triangular and normal; repeat. $\square$

**Theorem 14.9 (complex spectral theorem).** A complex square matrix $A$ is normal if and only if there is a unitary $U$
and a diagonal $D$ with $A = UDU^*$, that is, if and only if $\mathbb C^n$ has an orthonormal basis of eigenvectors of
$A$.

*Proof.* If $A = UDU^*$, then $AA^* = UDD^*U^*$ and $A^*A = UD^*DU^*$, and diagonal matrices commute, so $A$ is normal.
Conversely, by Schur $A = UTU^*$ with $T$ triangular, and $T = U^*AU$ is normal because $A$ is
($TT^* = U^*AA^*U = U^*A^*AU = T^*T$). By Lemma 14.8 $T$ is diagonal. $\square$

So the right generalisation of "symmetric" over $\mathbb C$ is "normal", and inside the normal matrices the eigenvalues
locate each class: Hermitian matrices have real eigenvalues, unitary matrices have eigenvalues on the unit circle,
skew-Hermitian matrices have purely imaginary ones.

The real spectral theorem follows as a corollary: a real symmetric matrix is Hermitian, so it is normal and has an
orthonormal eigenbasis in $\mathbb C^n$; its eigenvalues are real, so the eigenvectors may be taken real, as in 14.2.

**Worked example.** $N = \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$, which is $\sqrt2$ times the rotation by $45°$.
It is not symmetric, but $NN^T = 2I = N^TN$, so it is normal. Its characteristic polynomial is $(1 - \lambda)^2 + 1$,
with roots $1 \pm i$. For $\lambda = 1 + i$: $N - \lambda I = \begin{pmatrix} -i & -1 \\ 1 & -i \end{pmatrix}$, null vector
$(1, -i)$. For $\lambda = 1 - i$: null vector $(1, i)$. *Check orthogonality:*
$\langle (1,-i), (1,i) \rangle = 1\cdot\bar 1 + (-i)\cdot\overline{i} = 1 + (-i)(-i) = 1 - 1 = 0$. So

$$
N = U \begin{pmatrix} 1 + i & 0 \\ 0 & 1 - i \end{pmatrix} U^*, \qquad U = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ -i & i \end{pmatrix}.
$$

**A non-example.** The shear $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has $SS^T = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$
but $S^TS = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. Not normal, and indeed not diagonalisable at all. A matrix can
also be diagonalisable without being normal, such as $\begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$: its eigenvectors
$(1,0)$ and $(1,1)$ exist but are not perpendicular.

**Why normality matters in practice.** For a normal matrix, $\|A^k\|$ is exactly $|\lambda_{\max}|^k$, and small changes
in the entries move the eigenvalues by at most the size of the change. For non-normal matrices both can fail badly:
the powers can grow enormously before they decay, and eigenvalues can jump. This is why fluid dynamicists and numerical
analysts study **pseudospectra**, sets where $A - zI$ is nearly singular, rather than eigenvalues alone, for non-normal
problems.

## A short history

Symmetric matrices entered through mechanics and geometry before matrices had a name. Lagrange and others studied
principal axes of rotating bodies and of quadric surfaces in the 18th century. Augustin-Louis Cauchy proved in 1829 that
the characteristic equation of a symmetric system has only real roots, in work on quadric surfaces and on planetary
perturbations. James Joseph Sylvester stated the law of inertia in 1852. Charles Hermite introduced the forms now called
Hermitian in the 1850s, and Issai Schur proved his triangularisation lemma in 1909. The word "spectrum" comes from David
Hilbert's work on integral equations in the early 1900s, which carried the theorem to infinite dimensions; when quantum
mechanics arrived in the 1920s, the spectral lines of atoms turned out to be literally eigenvalues of self-adjoint
operators, an accident of naming that became a fact of physics.

## Check yourself

??? question "1. Find the eigenvalues and orthonormal eigenvectors of $\begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$, and write it as $\lambda_1 q_1q_1^T + \lambda_2 q_2q_2^T$."

    The characteristic polynomial is $(3-\lambda)^2 - 1 = (\lambda - 2)(\lambda - 4)$. For 4: $q_1 = (1,1)/\sqrt2$; for 2:
    $q_2 = (1,-1)/\sqrt2$. Then $4 \cdot \frac12\begin{pmatrix}1&1\\1&1\end{pmatrix} + 2\cdot\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix} = \begin{pmatrix}3&1\\1&3\end{pmatrix}$.

??? question "2. Show that $x^TAx$ only depends on the symmetric part of $A$: if $A$ is any square matrix, $x^TAx = x^TSx$ with $S = \frac12(A + A^T)$."

    $x^TAx$ is a $1\times1$ matrix, so it equals its transpose $x^TA^Tx$. Averaging, $x^TAx = \frac12(x^TAx + x^TA^Tx) = x^TSx$.
    This is why quadratic forms are always written with symmetric matrices.

??? question "3. Identify the curve $3x^2 + 2xy + 3y^2 = 8$ and find its axes."

    $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$, eigenvalues 4 along $(1,1)$ and 2 along $(1,-1)$ (question 1).
    In those coordinates $4u_1^2 + 2u_2^2 = 8$, or $\frac{u_1^2}{2} + \frac{u_2^2}{4} = 1$: an ellipse with semi-axis
    $\sqrt2$ along $(1,1)$ and semi-axis 2 along $(1,-1)$. *Check:* $(\sqrt2, -\sqrt2)$ is at distance 2 along $(1,-1)$, and
    $3\cdot2 - 2\cdot 2 + 3\cdot2 = 8$.

??? question "4. Is $\begin{pmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{pmatrix}$ positive definite? Use two different tests."

    Leading minors: $2$, $4 - 1 = 3$, and the determinant $2\cdot 3 - (-1)(-2) = 4$; all positive, so yes by Sylvester's
    criterion. The eigenvalues are $2 - \sqrt2$, $2$ and $2 + \sqrt2$, all positive. (Also $x^TAx = x_1^2 + (x_1 - x_2)^2 + (x_2 - x_3)^2 + x_3^2$, which is
    positive unless $x = 0$.)

??? question "5. Find the Cholesky factor of $\begin{pmatrix} 9 & 6 \\ 6 & 5 \end{pmatrix}$."

    $\ell_{11} = 3$, $\ell_{21} = 6/3 = 2$, $\ell_{22} = \sqrt{5 - 4} = 1$. So $L = \begin{pmatrix} 3 & 0 \\ 2 & 1 \end{pmatrix}$,
    and $LL^T = \begin{pmatrix} 9 & 6 \\ 6 & 5 \end{pmatrix}$.

??? question "6. Show that $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ is not positive definite in three ways."

    The determinant is $-3 < 0$ (Sylvester). The eigenvalues are $3$ and $-1$. And $x = (1,-1)$ gives
    $x^TAx = 1 - 4 + 1 = -2 < 0$. Cholesky fails too: $\ell_{11} = 1$, $\ell_{21} = 2$, and $\ell_{22}^2 = 1 - 4 < 0$.

??? question "7. Classify the critical points of $f(x,y) = x^3 - 3xy + y^3$ and give the value of $f$ at the minimum."

    See 14.5: critical points $(0,0)$ and $(1,1)$; Hessian eigenvalues $\pm 3$ at the origin (saddle) and $3, 9$ at
    $(1,1)$ (local minimum), with $f(1,1) = 1 - 3 + 1 = -1$. It is not a global minimum, since $f(x, 0) = x^3 \to -\infty$.

??? question "8. Prove that if $A$ is real symmetric, then $\max_{\|x\| = 1} x^TAx$ is the largest eigenvalue."

    Write $A = Q\Lambda Q^T$ and $u = Q^Tx$, which is also a unit vector. Then $x^TAx = \sum \lambda_i u_i^2 \le \lambda_1\sum u_i^2 = \lambda_1$,
    with equality at $x = q_1$.

??? question "9. Let $A$ be real symmetric and positive semidefinite. Show it has a positive semidefinite square root $B$ (with $B^2 = A$) that is a polynomial in $A$, and find it for $A = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}$."

    Take $B = Q\Lambda^{1/2}Q^T$. On each eigenspace of $A$ (eigenvalue $\lambda$), $B$ acts as $\sqrt\lambda$; choose a
    polynomial $p$ with $p(\lambda) = \sqrt\lambda$ at each distinct eigenvalue (Lagrange interpolation), then
    $B = p(A)$. (Uniqueness among all positive semidefinite square roots is also true: such a $B$ commutes with $A = B^2$,
    so preserves its eigenspaces, and on each one it is positive semidefinite with square $\lambda I$, hence equal to
    $\sqrt\lambda I$.) For the example the eigenvalues are 9 along $(1,1)$ and 1 along $(1,-1)$, so
    $B = 3\cdot\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix} + 1\cdot\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix} = \begin{pmatrix}2&1\\1&2\end{pmatrix}$,
    and indeed $B^2 = \begin{pmatrix}5&4\\4&5\end{pmatrix}$.

??? question "10. Show that $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ is normal and diagonalise it unitarily."

    $AA^T = I = A^TA$. The eigenvalues are $\pm i$. For $i$: $\begin{pmatrix} -i & -1 \\ 1 & -i\end{pmatrix}$ kills
    $(1, -i)$; for $-i$ the eigenvector is $(1, i)$. These are orthogonal, and
    $A = U\operatorname{diag}(i, -i)U^*$ with $U = \frac1{\sqrt2}\begin{pmatrix} 1 & 1 \\ -i & i \end{pmatrix}$.

??? question "11. Prove that a normal matrix $A$ satisfies $\|Az\| = \|A^*z\|$ for every $z$, and deduce that $Az = \lambda z$ implies $A^*z = \bar\lambda z$."

    $\|Az\|^2 = \langle Az, Az\rangle = \langle A^*Az, z\rangle = \langle AA^*z, z \rangle = \langle A^*z, A^*z\rangle = \|A^*z\|^2$.
    The matrix $A - \lambda I$ is also normal, with adjoint $A^* - \bar\lambda I$, so
    $\|(A^* - \bar\lambda I)z\| = \|(A - \lambda I)z\| = 0$.

??? question "12. Use the hint of question 11 to give a second proof that eigenvectors of a normal matrix for different eigenvalues are orthogonal."

    Let $Az = \lambda z$, $Aw = \mu w$, $\lambda \ne \mu$. Then $\lambda\langle z, w\rangle = \langle Az, w \rangle = \langle z, A^*w\rangle = \langle z, \bar\mu w \rangle = \mu\langle z, w \rangle$,
    using $A^*w = \bar\mu w$ from question 11. So $(\lambda - \mu)\langle z, w \rangle = 0$ and $\langle z, w\rangle = 0$.

## What you learned

- A real symmetric matrix has real eigenvalues, and eigenvectors for different eigenvalues are perpendicular, because
  $Ax\cdot y = x\cdot Ay$.
- Spectral theorem: $A = Q\Lambda Q^T = \sum \lambda_i q_iq_i^T$ exactly when $A$ is symmetric; repeated eigenvalues
  cause no trouble.
- Quadratic forms lose their cross terms in the eigenvector coordinates; the eigenvalues' signs give the type of a conic or
  quadric, and the signature does not depend on the method (Sylvester).
- Positive definite: $x^TAx > 0$, all eigenvalues positive, $A = R^TR$, positive leading minors, and $A = LL^T$
  (Cholesky) are all the same thing.
- At a critical point, the Hessian's eigenvalues decide minimum, maximum or saddle.
- Over $\mathbb C$, a matrix is unitarily diagonalisable exactly when it is normal; every matrix is unitarily triangularisable
  (Schur).

**Next:** [Chapter 15](15-The-Singular-Value-Decomposition.md), where the spectral theorem applied to $A^TA$ gives a
diagonal form for *every* matrix, even rectangular ones.

## Further reading

- S. Axler, *Linear Algebra Done Right*, 4th ed., 2024, chapter 7 (operators on inner product spaces, the spectral
  theorems without determinants).
- R. A. Horn and C. R. Johnson, *Matrix Analysis*, 2nd ed., 2013, chapters 2, 4 and 7 (Schur, Hermitian matrices,
  Courant-Fischer, positive definite matrices).
- G. Strang, *Linear Algebra and Learning from Data*, 2019, part I (symmetric and positive definite matrices in
  applications).
- P. R. Halmos, *Finite-Dimensional Vector Spaces*, 2nd ed., 1958 (the classic treatment of normal operators).
- L. N. Trefethen and M. Embree, *Spectra and Pseudospectra: The Behavior of Nonnormal Matrices and Operators*, 2005.
- T. Hawkins, "Cauchy and the spectral theory of matrices", *Historia Mathematica* 2, 1975.
- On this site: [Unit 5, Hermitian, symmetric and normal operators](../../uoft/MAT247H1/unit05.md),
  [Unit 6, The spectral theorem](../../uoft/MAT247H1/unit06.md) and
  [Unit 10, Rational form, bilinear and quadratic forms](../../uoft/MAT247H1/unit10.md) (U of T MAT247H1);
  [Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md) (the Hessian);
  [Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md) (covariance matrices);
  [Quadratic relations](../../topics/algebra/level-7/01-quadratic-relations.md) (Topics).
