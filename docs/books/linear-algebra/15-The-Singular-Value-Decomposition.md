# 15. The singular value decomposition

*The spectral theorem diagonalises symmetric matrices with perpendicular axes. Most matrices are not symmetric, many
are not even square, and some cannot be diagonalised at all. Yet every matrix, of any shape, becomes diagonal if you are
allowed to use one set of perpendicular axes for the input and a different set for the output. That is the singular value
decomposition (SVD). In this chapter you will see what it means geometrically, prove it from the spectral theorem, use it
to find the best low-rank approximation of a matrix (and so to compress a picture), build the pseudoinverse that solves
every least-squares problem, find the principal components of data, and measure how sensitive a linear system is to
errors.*

!!! abstract "In this chapter"
    **You will learn:**

    - the statement $A = U\Sigma V^T$ and the picture: every matrix turns a sphere into an ellipsoid
    - a complete proof of the SVD from the spectral theorem, and how to compute it by hand for small matrices
    - the Eckart-Young theorem: the best rank-$k$ approximation, with a proof for the spectral norm, and what it says about image compression
    - the Moore-Penrose pseudoinverse and the minimum-norm least-squares solution
    - principal component analysis as an SVD of the data
    - condition numbers: why some systems lose digits and others do not

    **You need:** [Chapter 14](14-The-Spectral-Theorem.md) (the spectral theorem, positive semidefinite matrices),
    [Chapter 12](12-Projections-and-Least-Squares.md) (projections, least squares) and
    [Chapter 7](07-The-Four-Subspaces.md) (the four subspaces).

    **Levels:** 15.1 is intermediate; 15.2 to 15.4 are advanced; 15.5 and 15.6 are advanced, with links to statistics
    and numerical computing.

## 15.1 Statement and geometric meaning

**The question.** Take the matrix $A = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix}$ and apply it to every point of the
unit circle. What shape comes out? A linear map sends a circle to an ellipse (or, if the matrix is singular, to a
segment). The ellipse has a longest direction and a shortest one, perpendicular to each other. Which points of the circle
land on the ends of those axes, and how long are the axes?

The answer for any matrix is the SVD.

**Theorem 15.1 (singular value decomposition).** Let $A$ be a real $m \times n$ matrix of rank $r$. There are orthogonal
matrices $U$ ($m \times m$) and $V$ ($n \times n$), and numbers $\sigma_1 \ge \sigma_2 \ge \cdots \ge \sigma_r > 0$, such
that

$$
A = U\Sigma V^T ,
$$

where $\Sigma$ is the $m \times n$ matrix with $\sigma_1, \dots, \sigma_r$ in its first $r$ diagonal places and zeros
everywhere else.

The $\sigma_i$ are the **singular values** of $A$ (they are determined by $A$; we will see they are the square roots of
the nonzero eigenvalues of $A^TA$). The columns $v_1, \dots, v_n$ of $V$ are the **right singular vectors**, the columns
$u_1, \dots, u_m$ of $U$ the **left singular vectors**. Column by column, $AV = U\Sigma$ says

$$
Av_i = \sigma_i u_i \quad (i \le r), \qquad Av_i = 0 \quad (i > r).
$$

**The picture.** Read $A = U\Sigma V^T$ from right to left, as three steps applied to a vector $x$.

1. $V^T$ is orthogonal: it rotates (or reflects) $x$, carrying the perpendicular directions $v_1, \dots, v_n$ onto the
   coordinate axes.
2. $\Sigma$ stretches along the axes: by $\sigma_1$ along the first, $\sigma_2$ along the second, and so on, and kills the
   rest. (If $m \ne n$ it also changes the number of coordinates, by adding zeros or dropping them.)
3. $U$ rotates the result so that the axes go to $u_1, \dots, u_m$.

So every linear map is a rotation, a stretch along perpendicular axes, and another rotation. The unit sphere goes to an
ellipsoid (flattened if $r$ is less than the dimension) whose semi-axes are $\sigma_1u_1, \dots, \sigma_ru_r$, and the
points of the sphere that land on the ends of the axes are $\pm v_1, \dots, \pm v_r$.

**Worked example.** $A = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix}$.

*Step 1: $A^TA$ and its eigenvalues.*
$A^TA = \begin{pmatrix} 25 & 20 \\ 20 & 25 \end{pmatrix}$, with eigenvalues $45$ (eigenvector $(1,1)$) and $5$
(eigenvector $(-1,1)$). So $\sigma_1 = \sqrt{45} = 3\sqrt5 \approx 6.708$ and $\sigma_2 = \sqrt5 \approx 2.236$, with
$v_1 = (1,1)/\sqrt2$ and $v_2 = (-1,1)/\sqrt2$.

*Step 2: the $u$'s.* $u_1 = Av_1/\sigma_1 = \frac{(3, 9)/\sqrt2}{3\sqrt5} = \frac{(1,3)}{\sqrt{10}}$ and
$u_2 = Av_2/\sigma_2 = \frac{(-3,1)/\sqrt2}{\sqrt5} = \frac{(-3,1)}{\sqrt{10}}$.

*Check:* $u_1 \cdot u_2 = (-3 + 3)/10 = 0$, so the $u$'s are perpendicular, as the theorem promises. And
$\sigma_1\sigma_2 = 3\sqrt5\cdot\sqrt5 = 15 = |\det A|$: the area of the ellipse is $\pi\sigma_1\sigma_2$, which is
$|\det A|$ times the area $\pi$ of the circle ([Chapter 8](08-Determinants.md)).

$$
\begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix} = \frac{1}{\sqrt{10}}\begin{pmatrix} 1 & -3 \\ 3 & 1 \end{pmatrix}
\begin{pmatrix} 3\sqrt5 & 0 \\ 0 & \sqrt5 \end{pmatrix}
\frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="Left: the unit circle with two perpendicular unit vectors v1, pointing up and to the right at 45 degrees, and v2, pointing up and to the left. An arrow labelled A points to the right panel. Right: a tilted ellipse, the image of the circle. Its long semi-axis sigma1 u1 has length 3 root 5, about 6.7, pointing steeply up and to the right; its short semi-axis sigma2 u2 has length root 5, about 2.2, perpendicular to it. The right panel is drawn at a smaller scale than the left.">
  <circle cx="100" cy="120" r="50" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="120" x2="135.4" y2="84.6" stroke="#eea66f" stroke-width="3"/>
  <line x1="100" y1="120" x2="64.6" y2="84.6" stroke="#7ccf9a" stroke-width="3"/>
  <text x="138" y="80" font-size="13" fill="currentColor">v1</text>
  <text x="46" y="80" font-size="13" fill="currentColor">v2</text>
  <text x="100" y="200" font-size="13" text-anchor="middle" fill="currentColor">unit circle</text>
  <line x1="175" y1="120" x2="235" y2="120" stroke="currentColor" stroke-width="2"/>
  <polygon points="235,114 247,120 235,126" fill="currentColor"/>
  <text x="208" y="110" font-size="14" text-anchor="middle" fill="currentColor">A</text>
  <ellipse cx="320" cy="120" rx="93.9" ry="31.3" transform="rotate(-71.565 320 120)" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <line x1="320" y1="120" x2="349.7" y2="30.9" stroke="#eea66f" stroke-width="3"/>
  <line x1="320" y1="120" x2="290.3" y2="110.1" stroke="#7ccf9a" stroke-width="3"/>
  <text x="354" y="34" font-size="13" fill="currentColor">σ1 u1</text>
  <text x="248" y="104" font-size="13" fill="currentColor">σ2 u2</text>
  <text x="330" y="228" font-size="13" text-anchor="middle" fill="currentColor">its image, an ellipse</text>
</svg>
</div>

**Singular values are not eigenvalues.** The eigenvalues of $A$ above are 3 and 5 (it is triangular), but its singular
values are about 6.708 and 2.236. Eigenvalues describe directions that $A$ keeps; singular values describe how much $A$
stretches, with input and output directions allowed to differ. They agree (up to sign) for symmetric matrices, and more
generally for normal ones (in absolute value). In general the largest singular value is at least the largest
$|\lambda|$, and the smallest singular value is at most the smallest $|\lambda|$.

**The outer product form.** Multiplying out $U\Sigma V^T$ column by row,

$$
A = \sigma_1 u_1v_1^T + \sigma_2 u_2v_2^T + \cdots + \sigma_r u_rv_r^T .
$$

A matrix of rank $r$ is a sum of $r$ rank-one pieces, each a column times a row, arranged in decreasing order of
importance. Only the first $r$ columns of $U$ and $V$ appear: keeping just them gives the **reduced** (or thin) SVD
$A = U_r\Sigma_rV_r^T$, with $U_r$ of size $m\times r$, $\Sigma_r$ of size $r\times r$, $V_r$ of size $n\times r$.

**The four subspaces, in perfect bases.** The SVD hands you orthonormal bases of all four fundamental subspaces
([Chapter 7](07-The-Four-Subspaces.md)) at once:

- $v_1, \dots, v_r$: the row space; $v_{r+1}, \dots, v_n$: the null space;
- $u_1, \dots, u_r$: the column space; $u_{r+1}, \dots, u_m$: the left null space.

And $A$ maps the row-space basis to the column-space basis one vector at a time, scaled by $\sigma_i$. This is the most
complete description of a linear map between inner product spaces that one can give.

## 15.2 Proof from the spectral theorem

*Level: advanced.*

The worked example already shows the proof. The matrix $A^TA$ is the key: it is $n \times n$, symmetric, and positive
semidefinite.

*Proof of Theorem 15.1.* **Step 1.** $A^TA$ is symmetric, since $(A^TA)^T = A^TA$. It is positive semidefinite, since
$x^TA^TAx = \|Ax\|^2 \ge 0$. By the spectral theorem ([Chapter 14](14-The-Spectral-Theorem.md)) there is an orthonormal
basis $v_1, \dots, v_n$ of $\mathbb R^n$ with $A^TAv_i = \lambda_iv_i$, and $\lambda_i \ge 0$. Order them
$\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$.

**Step 2.** The vectors $Av_i$ are perpendicular, with lengths $\sqrt{\lambda_i}$:

$$
Av_i \cdot Av_j = v_i^TA^TAv_j = \lambda_j\, v_i \cdot v_j = \begin{cases} \lambda_i & i = j \\ 0 & i \ne j. \end{cases}
$$

**Step 3.** The number of nonzero $\lambda_i$ is the rank $r$. Indeed $Av_i = 0$ exactly when $\lambda_i = 0$, so
$v_{k+1}, \dots, v_n$ (where $k$ is the number of positive $\lambda_i$) lie in the null space; and $Av_1, \dots, Av_k$
are nonzero and perpendicular, hence independent, and they span the column space (since the $v_i$ span $\mathbb R^n$,
the $Av_i$ span the column space). So $k = r$.

**Step 4.** For $i \le r$ put $\sigma_i = \sqrt{\lambda_i}$ and $u_i = Av_i/\sigma_i$. By Step 2 these are orthonormal.
Extend $u_1, \dots, u_r$ to an orthonormal basis $u_1, \dots, u_m$ of $\mathbb R^m$ (Gram-Schmidt,
[Chapter 11](11-Inner-Product-Spaces.md)).

**Step 5.** Now $Av_i = \sigma_iu_i$ for $i \le r$ and $Av_i = 0$ for $i > r$, which is $AV = U\Sigma$. Since $V$ is
orthogonal, $A = U\Sigma V^T$. $\square$

**Uniqueness.** From $A = U\Sigma V^T$ we get $A^TA = V\Sigma^T\Sigma V^T$, so the $\sigma_i^2$ are the eigenvalues of
$A^TA$: the singular values are determined by $A$. The singular vectors are not unique. Each pair $(u_i, v_i)$ may be
replaced by $(-u_i, -v_i)$, and when a singular value is repeated, any orthonormal basis of the corresponding space can be
used. In the same way $AA^T = U\Sigma\Sigma^TU^T$, so the $u_i$ are eigenvectors of $AA^T$, with the same nonzero
eigenvalues $\sigma_i^2$. (So $A^TA$ and $AA^T$ always have the same nonzero eigenvalues, even though their sizes differ.)

**Computing by hand.** For a small matrix, use whichever of $A^TA$ and $AA^T$ is smaller.

**Worked example.** $A = \begin{pmatrix} 3 & 2 & 2 \\ 2 & 3 & -2 \end{pmatrix}$, a $2\times 3$ matrix.

$AA^T = \begin{pmatrix} 17 & 8 \\ 8 & 17 \end{pmatrix}$, with eigenvalues $25$ and $9$ along $(1,1)$ and $(1,-1)$. So
$\sigma_1 = 5$, $\sigma_2 = 3$, $u_1 = (1,1)/\sqrt2$, $u_2 = (1,-1)/\sqrt2$. Now get the $v$'s from $v_i = A^Tu_i/\sigma_i$
(the same relation read backwards: $A^Tu_i = \sigma_iv_i$):

$$
v_1 = \frac{1}{5}\cdot\frac{(5, 5, 0)}{\sqrt2} = \frac{(1,1,0)}{\sqrt2}, \qquad
v_2 = \frac13\cdot\frac{(1, -1, 4)}{\sqrt2} = \frac{(1,-1,4)}{\sqrt{18}} .
$$

The third right singular vector spans the null space: $v_3 = (2,-2,-1)/3$. *Check:* $A v_3 = \frac13(6 - 4 - 2, 4 - 6 + 2) = (0,0)$,
and $v_3$ is perpendicular to $v_1$ and $v_2$. So

$$
A = 5\,u_1v_1^T + 3\,u_2v_2^T .
$$

**Try it in Python.** The largest singular value can be found without any eigenvalue formula, by repeatedly multiplying
by $A^TA$ (power iteration, [Chapter 18](18-Numerical-Linear-Algebra.md)). Standard library only:

```python
from math import sqrt

def matvec(M, x):
    return [sum(a * b for a, b in zip(row, x)) for row in M]

def transpose(M):
    return [list(col) for col in zip(*M)]

A = [[3, 2, 2],
     [2, 3, -2]]
At = transpose(A)

v = [1.0, 0.0, 0.0]                  # any start not perpendicular to v1
for _ in range(50):
    w = matvec(At, matvec(A, v))     # multiply by A^T A
    norm = sqrt(sum(t * t for t in w))
    v = [t / norm for t in w]

Av = matvec(A, v)
sigma = sqrt(sum(t * t for t in Av))
print(round(sigma, 10), [round(t, 6) for t in v])   # 5.0 [0.707107, 0.707107, 0.0]
```

The error shrinks by a factor $(\sigma_2/\sigma_1)^2 = 9/25$ each step. Real libraries do something cleverer
(Golub-Kahan bidiagonalisation followed by a QR-type iteration), which never forms $A^TA$, because forming it squares the
condition number (15.6).

**The polar decomposition.** Grouping the SVD differently gives the matrix version of writing a complex number as
$re^{i\theta}$. For square $A$,

$$
A = U\Sigma V^T = (UV^T)(V\Sigma V^T) = WP ,
$$

with $W = UV^T$ orthogonal (a pure rotation or reflection) and $P = V\Sigma V^T$ symmetric positive semidefinite (a pure
stretch along perpendicular axes); in fact $P = \sqrt{A^TA}$. Every linear map of $\mathbb R^n$ is a stretch followed by a
rigid motion. In continuum mechanics this is how one separates the deformation of a material from its rotation.

## 15.3 Low-rank approximation and image compression

*Level: advanced.*

**The problem.** A grey-scale picture is a matrix of brightness values, say $1000 \times 1000$, a million numbers.
Pictures are not random: neighbouring rows look alike. Can we store something much smaller that looks almost the same?
In matrix terms: given $A$, what is the closest matrix of rank at most $k$?

The SVD suggests an answer: keep the $k$ most important rank-one pieces,

$$
A_k = \sigma_1 u_1v_1^T + \cdots + \sigma_k u_kv_k^T .
$$

To say "closest" we need a way to measure the size of a matrix. Two norms are standard.

- The **spectral norm** (operator 2-norm) $\|A\|_2 = \max_{\|x\| = 1}\|Ax\|$, the most $A$ can stretch a vector. By the
  SVD picture (the longest semi-axis of the ellipsoid), $\|A\|_2 = \sigma_1$.
- The **Frobenius norm** $\|A\|_F = \sqrt{\sum_{i,j} a_{ij}^2}$, the length of $A$ as a long vector. Since multiplying by
  orthogonal matrices does not change it (each column keeps its length under $U$, each row under $V^T$),
  $\|A\|_F^2 = \|\Sigma\|_F^2 = \sigma_1^2 + \cdots + \sigma_r^2$.

*Check on the $2\times 3$ example:* the squares of the entries add up to $9 + 4 + 4 + 4 + 9 + 4 = 34 = 5^2 + 3^2$.

**Theorem 15.2 (Eckart-Young).** For every matrix $B$ of rank at most $k$,

$$
\|A - B\|_2 \ge \sigma_{k+1} = \|A - A_k\|_2 \qquad\text{and}\qquad \|A - B\|_F^2 \ge \sigma_{k+1}^2 + \cdots + \sigma_r^2 = \|A - A_k\|_F^2 .
$$

So $A_k$ is a best rank-$k$ approximation in both norms.

*Proof for the spectral norm.* First, $A - A_k = \sum_{i > k}\sigma_iu_iv_i^T$ is itself an SVD, with largest singular
value $\sigma_{k+1}$, so $\|A - A_k\|_2 = \sigma_{k+1}$. Now let $B$ have rank at most $k$. Its null space has dimension at
least $n - k$ (rank-nullity, [Chapter 6](06-Linear-Maps.md)). The span of $v_1, \dots, v_{k+1}$ has dimension $k+1$. Since
$(n - k) + (k + 1) > n$, the two subspaces share a unit vector $x$
([Chapter 5](05-Independence-Bases-and-Dimension.md)). Write $x = \sum_{i \le k+1} c_iv_i$ with $\sum c_i^2 = 1$. Then
$Bx = 0$ and

$$
\|(A - B)x\|^2 = \|Ax\|^2 = \Big\|\sum_{i\le k+1} c_i\sigma_iu_i\Big\|^2 = \sum_{i \le k+1} c_i^2\sigma_i^2 \ge \sigma_{k+1}^2\sum c_i^2 = \sigma_{k+1}^2 .
$$

So $\|A - B\|_2 \ge \sigma_{k+1}$. $\square$

*Idea of the Frobenius case.* The same intersection argument, applied with more care, proves **Weyl's inequality** for
singular values: $\sigma_{i+j-1}(X + Y) \le \sigma_i(X) + \sigma_j(Y)$. Take $X = A - B$, $Y = B$ and $j = k+1$; since
$\sigma_{k+1}(B) = 0$, this gives $\sigma_i(A - B) \ge \sigma_{i+k}(A)$ for every $i$. Squaring and adding over $i$ gives
the Frobenius bound. (The full proof is in Horn and Johnson's *Matrix Analysis*, listed below.)

**Worked example.** For $A = \begin{pmatrix} 3 & 2 & 2 \\ 2 & 3 & -2 \end{pmatrix}$, the best rank-one approximation is

$$
A_1 = 5u_1v_1^T = 5\cdot\frac{1}{\sqrt2}\begin{pmatrix} 1 \\ 1\end{pmatrix}\frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 & 0\end{pmatrix} = \begin{pmatrix} 2.5 & 2.5 & 0 \\ 2.5 & 2.5 & 0 \end{pmatrix},
\qquad A - A_1 = \begin{pmatrix} 0.5 & -0.5 & 2 \\ -0.5 & 0.5 & -2 \end{pmatrix}.
$$

*Check:* the Frobenius error squared is $0.25 + 0.25 + 4 + 0.25 + 0.25 + 4 = 9 = \sigma_2^2$, as Eckart-Young says.
No rank-one matrix comes closer.

**Image compression, honestly.** Storing $A_k$ for an $m\times n$ picture takes $k$ values $\sigma_i$, $k$ columns $u_i$
of length $m$ and $k$ rows $v_i$ of length $n$: $k(m + n + 1)$ numbers instead of $mn$. For a $1000\times 1000$ picture
and $k = 50$ that is $100{,}050$ numbers, about 10 percent of the original. The relative error in the Frobenius norm is
$\sqrt{(\sigma_{51}^2 + \cdots)/(\sigma_1^2 + \cdots)}$, and for photographs the singular values usually fall off fast
enough that $k = 50$ already shows the scene clearly, with fine texture blurred.

This is a beautiful demonstration of the SVD, and it is optimal among rank-$k$ approximations, but it is not how
pictures are actually compressed. Practical formats use fixed bases that need not be stored and suit the local structure
of images: JPEG uses the discrete cosine transform on $8\times 8$ blocks, and JPEG 2000 uses wavelets. Spacecraft are no
exception. The Mars Exploration Rovers, Spirit and Opportunity, compressed many of their pictures with ICER, a
wavelet-based compressor developed at JPL that lets a picture be sent at whatever quality the limited radio link allows.
The common idea with the SVD is the one that matters: write the picture in a basis where most coefficients are tiny, and
keep only the large ones. The SVD finds the best such basis for one particular matrix; the wavelet and cosine bases are
good for all pictures at once, which is why they win in practice.

Low-rank approximation does appear everywhere else: in recommender systems (a ratings matrix of users by films is
nearly low rank), in latent semantic analysis of text, in reducing the size of neural network layers, and, through PCA,
throughout statistics.

## 15.4 The pseudoinverse

*Level: advanced.*

**The problem.** $Ax = b$ may have no solution (too many equations) or infinitely many (too many unknowns), or both at
once when $A$ is rank deficient. Least squares ([Chapter 12](12-Projections-and-Least-Squares.md)) handles the first
problem when $A$ has independent columns, by solving $A^TAx = A^Tb$. When the columns are dependent, $A^TA$ is singular
and the least-squares solutions form a whole affine subspace. Is there a single best answer, and a matrix that produces
it?

**Definition.** If $A = U\Sigma V^T$, the **pseudoinverse** (Moore-Penrose inverse) is

$$
A^+ = V\Sigma^+U^T ,
$$

where $\Sigma^+$ is the $n\times m$ matrix with $1/\sigma_1, \dots, 1/\sigma_r$ on the diagonal and zeros elsewhere. In
outer product form, $A^+ = \sum_{i\le r}\frac{1}{\sigma_i}v_iu_i^T$. It undoes $A$ wherever it can: it sends $u_i$ back
to $v_i/\sigma_i$ for $i \le r$, and sends the left null space to 0.

**Theorem 15.3.** For every $b$, the vector $x^+ = A^+b$ is a least-squares solution of $Ax = b$ (it minimises
$\|Ax - b\|$), and among all least-squares solutions it is the one of smallest length.

*Proof.* Multiplying by an orthogonal matrix keeps lengths, so with $y = V^Tx$ and $c = U^Tb$,

$$
\|Ax - b\|^2 = \|U\Sigma V^Tx - b\|^2 = \|\Sigma y - c\|^2 = \sum_{i\le r}(\sigma_iy_i - c_i)^2 + \sum_{i > r}c_i^2 .
$$

The second sum does not depend on $x$. The first is made 0, its smallest possible value, exactly by $y_i = c_i/\sigma_i$
for $i \le r$, with $y_{r+1}, \dots, y_n$ free. So the least-squares solutions are exactly these $y$'s, and
$\|x\| = \|y\|$ is smallest when the free entries are 0. That choice is $y = \Sigma^+c$, that is
$x = V\Sigma^+U^Tb = A^+b$. $\square$

**Special cases.** If $A$ is square and invertible, $A^+ = A^{-1}$. If $A$ has independent columns,
$A^+ = (A^TA)^{-1}A^T$, the least-squares matrix of Chapter 12. If $A$ has independent rows, $A^+ = A^T(AA^T)^{-1}$,
which gives the shortest solution of an underdetermined system.

**Worked example.** $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ has rank 1: $A = 2\,u_1v_1^T$ with
$u_1 = v_1 = (1,1)/\sqrt2$. So

$$
A^+ = \frac12 v_1u_1^T = \frac14\begin{pmatrix} 1 & 1 \\ 1 & 1\end{pmatrix}.
$$

For $b = (1, 3)$, the equations $x_1 + x_2 = 1$ and $x_1 + x_2 = 3$ contradict each other. The best compromise is
$x_1 + x_2 = 2$ (the average), a whole line of least-squares solutions. The pseudoinverse picks
$A^+b = \frac14(4, 4) = (1, 1)$, the point of that line closest to the origin. *Check:* $(1,1)$ is perpendicular to the
line's direction $(1,-1)$, so it is indeed the closest point.

**The four Penrose equations.** Roger Penrose showed in 1955 that $X = A^+$ is the unique matrix satisfying

$$
AXA = A, \qquad XAX = X, \qquad (AX)^T = AX, \qquad (XA)^T = XA .
$$

(Each is a one-line check from the SVD; for uniqueness, see Penrose's paper.) $AA^+$ is the orthogonal projection onto
the column space and $A^+A$ the orthogonal projection onto the row space. E. H. Moore had defined the same inverse by a
different route around 1920, and Arne Bjerhammar independently in 1951, which is why it carries Moore's and Penrose's
names.

**A caution.** $A^+$ is not a continuous function of $A$: the matrix $\operatorname{diag}(1, \varepsilon)$ has
pseudoinverse $\operatorname{diag}(1, 1/\varepsilon)$, which blows up as $\varepsilon \to 0$, and then suddenly becomes
$\operatorname{diag}(1, 0)$ at $\varepsilon = 0$. In computation one sets tiny singular values to zero before inverting
(a **truncated** SVD), choosing the cut-off from the accuracy of the data. This is a simple form of **regularisation**,
a close relative of ridge regression ([Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md)).

## 15.5 Principal component analysis

*Level: advanced.*

**The problem.** You have $n$ observations of $p$ quantities: $n$ points in $\mathbb R^p$. In which direction do the data
vary most? If you had to summarise each point by one number, or two, which combination of the quantities would lose the
least information? This is **principal component analysis** (PCA), and it is the SVD of the data.

**Set-up.** Subtract the mean of each column, so the data matrix $X$ ($n\times p$, one row per observation) has columns
with mean 0. The **sample covariance matrix** is

$$
S = \frac{1}{n-1}X^TX ,
$$

a symmetric positive semidefinite $p\times p$ matrix whose diagonal entries are the variances of the variables and whose
off-diagonal entries are the covariances. For a unit vector $w$, the numbers $Xw$ are the coordinates of the data points
along the direction $w$, and their sample variance is

$$
\frac{1}{n-1}\|Xw\|^2 = w^TSw .
$$

So "the direction of largest variance" means "the unit $w$ maximising $w^TSw$", which by 14.2 is the top eigenvector of
$S$. If $X = U\Sigma V^T$, then $S = V\frac{\Sigma^T\Sigma}{n-1}V^T$, so:

- the **principal directions** (loadings) are the right singular vectors $v_1, v_2, \dots$ of $X$;
- the variance along $v_i$ is $\sigma_i^2/(n-1)$;
- the **principal component scores** (the new coordinates of the points) are $Xv_i = \sigma_iu_i$;
- the fraction of the total variance captured by the first $k$ components is
  $(\sigma_1^2 + \cdots + \sigma_k^2)/(\sigma_1^2 + \cdots + \sigma_r^2)$.

Projecting the data onto the first $k$ principal directions gives the rank-$k$ matrix $X_k$, which by Eckart-Young is the
best rank-$k$ approximation of $X$: the $k$-dimensional subspace that minimises the sum of squared perpendicular distances
from the points. This is exactly the "plane of closest fit" that Karl Pearson described in 1901.

**Worked example.** Four points: $(7,5)$, $(3,1)$, $(6,2)$, $(4,4)$. The mean is $(5, 3)$. The centred data are

$$
X = \begin{pmatrix} 2 & 2 \\ -2 & -2 \\ 1 & -1 \\ -1 & 1 \end{pmatrix}, \qquad X^TX = \begin{pmatrix} 10 & 6 \\ 6 & 10 \end{pmatrix}, \qquad S = \frac13 X^TX = \begin{pmatrix} 10/3 & 2 \\ 2 & 10/3 \end{pmatrix}.
$$

The eigenvalues of $S$ are $16/3$ along $(1,1)/\sqrt2$ and $4/3$ along $(1,-1)/\sqrt2$. The first principal component
carries $\frac{16/3}{16/3 + 4/3} = 80$ percent of the variance. The scores on it are $Xv_1 = (2\sqrt2, -2\sqrt2, 0, 0)$:
the first two points lie far out along the diagonal, the last two sit at the centre of it and differ only in the second
direction. *Check:* the total variance $\operatorname{tr} S = 20/3$ equals $16/3 + 4/3$.

**Cautions that matter.** PCA depends on units: measuring one variable in millimetres and another in kilometres lets the
first dominate. When the variables are on different scales one usually standardises each to variance 1 first (PCA on the
correlation matrix). PCA finds directions of large *variance*, which are not necessarily the directions that matter for
a particular question. And it is linear: data lying on a curved surface need nonlinear methods. For PCA in its
statistical setting, with high-dimensional pitfalls, see [Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md).

## 15.6 Condition numbers

*Level: advanced.*

**The problem.** Solve

$$
\begin{aligned} x_1 + x_2 &= 2 \\ x_1 + 1.0001\,x_2 &= 2.0001 \end{aligned}
$$

The answer is $x = (1, 1)$. Now change the right side by one unit in the fourth decimal place: $2.0001 \to 2.0002$. The
new answer is $x = (0, 2)$. A change of about $0.004$ percent in the data changed the answer by $100$ percent. Nothing is
wrong with the arithmetic; the *problem* is sensitive, because the two lines are nearly parallel. How can you tell in
advance?

**Definition.** For an invertible square matrix, the **condition number** is

$$
\kappa(A) = \|A\|_2\,\|A^{-1}\|_2 = \frac{\sigma_1}{\sigma_n} ,
$$

the ratio of the largest to the smallest stretch. (The singular values of $A^{-1}$ are the reciprocals $1/\sigma_i$, so
$\|A^{-1}\|_2 = 1/\sigma_n$.) Always $\kappa \ge 1$, and $\kappa = 1$ exactly for multiples of orthogonal matrices. For a
rectangular matrix of full column rank one uses $\sigma_1/\sigma_r$.

**Theorem 15.4.** If $Ax = b$ and $A(x + \delta x) = b + \delta b$ with $b \ne 0$, then

$$
\frac{\|\delta x\|}{\|x\|} \le \kappa(A)\,\frac{\|\delta b\|}{\|b\|} .
$$

*Proof.* $\delta x = A^{-1}\delta b$, so $\|\delta x\| \le \|A^{-1}\|\,\|\delta b\| = \|\delta b\|/\sigma_n$. And
$\|b\| = \|Ax\| \le \sigma_1\|x\|$, so $1/\|x\| \le \sigma_1/\|b\|$. Multiply the two inequalities. $\square$

The bound is sharp: equality holds when $b$ is along $u_1$ and $\delta b$ along $u_n$. So the worst case is: the true
right side lies in the direction $A$ stretches most, the error in the direction $A$ stretches least, and $A^{-1}$
magnifies the error by $1/\sigma_n$.

**The example.** For $A = \begin{pmatrix} 1 & 1 \\ 1 & 1.0001 \end{pmatrix}$ the singular values are about $2.00005$ and
$0.0000500$, so $\kappa \approx 40{,}002$. The relative change in $b$ was $0.0001/\|(2, 2.0001)\| \approx 3.5\times10^{-5}$,
and the relative change in $x$ was $\|(-1,1)\|/\|(1,1)\| = 1$, a magnification of about $28{,}000$, within the bound of
$40{,}002$.

**Rule of thumb.** In floating-point arithmetic with about 16 significant digits (double precision), solving $Ax = b$ by
a stable method can lose about $\log_{10}\kappa$ digits. With $\kappa = 10^4$ expect about 12 correct digits; with
$\kappa = 10^{16}$ expect none. The notorious **Hilbert matrices** $H_{ij} = 1/(i + j - 1)$ show how fast this happens:
the $4\times 4$ one has $\kappa \approx 15{,}514$, and the condition number grows roughly like $e^{3.5n}$, so by $n = 12$
or so it is beyond double precision.

**Two lessons for practice.**

- *Do not form $A^TA$ if you can avoid it.* $\kappa(A^TA) = \kappa(A)^2$, since its singular values are the $\sigma_i^2$.
  Solving least squares through the normal equations squares the sensitivity; solving through QR
  ([Chapter 12](12-Projections-and-Least-Squares.md), [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md)) or the
  SVD does not.
- *Conditioning is about the problem, stability about the method.* A large $\kappa$ means no method can do well with
  imprecise data; a stable method is one that does as well as $\kappa$ allows. The two ideas are developed in
  [Chapter 18](18-Numerical-Linear-Algebra.md).

**Mars, honestly.** Fitting an orbit to tracking data is a least-squares problem ([Chapter 12](12-Projections-and-Least-Squares.md)).
If the observations all come from a short arc, some combinations of the orbital elements are barely constrained by the
data: the least-squares matrix has tiny singular values and a large condition number, and the fitted orbit is uncertain
in exactly the directions of the corresponding right singular vectors. Longer tracking arcs, or measurements of a
different kind (range as well as Doppler, for instance), add information in those directions. The SVD tells you not
just *that* the fit is uncertain but *which* combination of parameters is to blame.

## A short history

The SVD was found independently several times. Eugenio Beltrami (1873) and Camille Jordan (1874) discovered it for real
square matrices, in the language of bilinear forms; Sylvester returned to it in 1889. Erhard Schmidt (1907) studied the
infinite-dimensional version for integral equations and already proved an approximation theorem of the Eckart-Young kind;
Hermann Weyl (1912) found his inequalities. In 1936 the psychologists Carl Eckart and Gale Young proved the matrix
approximation theorem in *Psychometrika*, motivated by data analysis. Karl Pearson (1901) and Harold Hotelling (1933)
founded principal component analysis. Moore (around 1920) and Penrose (1955) defined the pseudoinverse. The SVD became a
practical tool only when Gene Golub and William Kahan (1965), and then Golub and Christian Reinsch (1970), gave a stable
algorithm to compute it. G. W. Stewart's survey, listed below, tells the early story in detail.

## Check yourself

??? question "1. Find the singular values of $\begin{pmatrix} 2 & 2 \\ 1 & 1 \end{pmatrix}$ and its pseudoinverse."

    $A^TA = \begin{pmatrix} 5 & 5 \\ 5 & 5\end{pmatrix}$, with eigenvalues 10 and 0. So $\sigma_1 = \sqrt{10}$ and the rank is 1.
    $v_1 = (1,1)/\sqrt2$, $u_1 = Av_1/\sqrt{10} = (4, 2)/\sqrt{20} = (2,1)/\sqrt5$. Then
    $A^+ = \frac{1}{\sqrt{10}}v_1u_1^T = \frac{1}{\sqrt{10}}\cdot\frac{1}{\sqrt{10}}\begin{pmatrix} 2 & 1 \\ 2 & 1\end{pmatrix} = \begin{pmatrix} 1/5 & 1/10 \\ 1/5 & 1/10 \end{pmatrix}$.

??? question "2. Show that the singular values of an orthogonal matrix are all 1, and that the singular values of a symmetric matrix are the absolute values of its eigenvalues."

    If $Q$ is orthogonal, $Q^TQ = I$ has all eigenvalues 1, so every $\sigma_i = 1$. If $A = Q\Lambda Q^T$ is symmetric,
    $A^TA = Q\Lambda^2Q^T$, whose eigenvalues are $\lambda_i^2$; their square roots are $|\lambda_i|$.

??? question "3. Prove that $|\det A| = \sigma_1\sigma_2\cdots\sigma_n$ for a square matrix $A$."

    $\det A = \det U\,\det\Sigma\,\det V^T = (\pm1)(\sigma_1\cdots\sigma_n)(\pm 1)$, and taking absolute values gives the
    claim. (Geometrically: the unit cube's image has the same volume as the box with sides $\sigma_i$.)

??? question "4. Find the SVD of the column vector $a = (1, 2, 2)$ (a $3\times 1$ matrix) and its pseudoinverse."

    $a^Ta = 9$, so $\sigma_1 = 3$, $v_1 = (1)$ and $u_1 = a/3 = (1,2,2)/3$; $u_2, u_3$ are any orthonormal basis of the plane
    perpendicular to $a$. The pseudoinverse is $\frac13 v_1u_1^T = \frac19(1, 2, 2)$, a row. *Check:* $a^+a = 9/9 = 1$.

??? question "5. Using the SVD $A = 5u_1v_1^T + 3u_2v_2^T$ of $\begin{pmatrix} 3 & 2 & 2 \\ 2 & 3 & -2 \end{pmatrix}$, what are $\|A\|_2$, $\|A\|_F$, and the distance (in both norms) from $A$ to the nearest matrix of rank 1?"

    $\|A\|_2 = 5$ and $\|A\|_F = \sqrt{25 + 9} = \sqrt{34}$. By Eckart-Young the nearest rank-one matrix is $A_1 = 5u_1v_1^T$,
    at distance $\sigma_2 = 3$ in both norms (there is only one remaining singular value).

??? question "6. Show that $AA^+$ is the orthogonal projection onto the column space of $A$."

    $AA^+ = U\Sigma V^TV\Sigma^+U^T = U(\Sigma\Sigma^+)U^T$, and $\Sigma\Sigma^+$ is diagonal with $r$ ones and then zeros.
    So $AA^+ = \sum_{i\le r}u_iu_i^T$, the projection onto the span of $u_1, \dots, u_r$, which is the column space.

??? question "7. Find the minimum-norm solution of the single equation $x_1 + 2x_2 + 2x_3 = 9$."

    $A = (1\ 2\ 2)$ has independent rows, so $A^+ = A^T(AA^T)^{-1} = \frac19(1,2,2)^T$ and $x^+ = A^+\cdot 9 = (1, 2, 2)$.
    *Check:* $1 + 4 + 4 = 9$, and $(1,2,2)$ is perpendicular to the plane $x_1 + 2x_2 + 2x_3 = 0$, so it is the closest
    point of the solution plane to the origin.

??? question "8. For the PCA example in 15.5, what fraction of the variance would the second component carry, and what would the scores on it be?"

    The second eigenvalue is $4/3$ out of a total $20/3$: 20 percent. With $v_2 = (1,-1)/\sqrt2$, the scores are
    $Xv_2 = (0, 0, \sqrt2, -\sqrt2)$.

??? question "9. Compute $\kappa(A)$ for $A = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix}$ and for $A^TA$."

    $\sigma_1 = 3\sqrt5$ and $\sigma_2 = \sqrt5$, so $\kappa(A) = 3$. The singular values of $A^TA$ are $45$ and $5$, so
    $\kappa(A^TA) = 9 = \kappa(A)^2$.

??? question "10. Prove that $\|A\|_2 = \sigma_1$, and that $\min_{\|x\| = 1}\|Ax\| = \sigma_n$ for an $m \times n$ matrix with $m \ge n$."

    $\|Ax\|^2 = x^TA^TAx$, and by the Rayleigh quotient (Chapter 14) its maximum over unit vectors is the largest eigenvalue
    $\sigma_1^2$ of $A^TA$, its minimum the smallest eigenvalue $\sigma_n^2$ (which is 0 if $A$ has rank less than $n$). Take
    square roots.

??? question "11. Prove the polar decomposition: every real square matrix is $A = WP$ with $W$ orthogonal and $P$ symmetric positive semidefinite. When is $P$ unique?"

    From $A = U\Sigma V^T$ take $W = UV^T$ (orthogonal, as a product of orthogonal matrices) and $P = V\Sigma V^T$
    (symmetric, eigenvalues $\sigma_i \ge 0$). $P$ is always unique: from $A = WP$, $A^TA = PW^TWP = P^2$, so $P$ is the
    unique positive semidefinite square root of $A^TA$ (Chapter 14, question 9). $W$ is unique when $A$ is invertible,
    since then $W = AP^{-1}$.

??? question "12. A matrix has singular values $100, 10, 1, 0.1, 0.01$. What fraction of $\|A\|_F^2$ does the best rank-2 approximation keep, and what is its error in the spectral norm?"

    $\|A\|_F^2 = 10^4 + 10^2 + 1 + 10^{-2} + 10^{-4} = 10101.0101$. Rank 2 keeps $10100$, a fraction
    $10100/10101.0101 \approx 0.99990$. The spectral-norm error is $\sigma_3 = 1$, which is 1 percent of $\|A\|_2 = 100$.

## What you learned

- Every matrix factors as $A = U\Sigma V^T$: a rotation, a stretch by the singular values along perpendicular axes, and
  another rotation; the unit sphere goes to an ellipsoid with semi-axes $\sigma_iu_i$.
- The singular values are the square roots of the eigenvalues of $A^TA$; the proof is the spectral theorem applied to
  $A^TA$, with $u_i = Av_i/\sigma_i$.
- Truncating the SVD gives the best rank-$k$ approximation in the spectral and Frobenius norms (Eckart-Young), the
  mathematics behind low-rank compression.
- The pseudoinverse $A^+ = V\Sigma^+U^T$ gives the minimum-norm least-squares solution of any linear system.
- PCA is the SVD of the centred data: the right singular vectors are the principal directions and $\sigma_i^2/(n-1)$ the
  variances along them.
- The condition number $\sigma_1/\sigma_n$ bounds how much relative errors can grow when solving $Ax = b$; forming
  $A^TA$ squares it.

**Next:** [Chapter 16](16-Jordan-Form.md), which goes back to square matrices and asks what the best possible form is
when a matrix cannot be diagonalised at all.

## Further reading

- G. H. Golub and C. F. Van Loan, *Matrix Computations*, 4th ed., 2013, chapters 2 and 8 (norms, the SVD and how it is
  computed).
- L. N. Trefethen and D. Bau, *Numerical Linear Algebra*, 1997, lectures 4, 5, 11 and 12 (SVD, least squares,
  conditioning).
- G. Strang, *Linear Algebra and Learning from Data*, 2019 (SVD, PCA and low rank, written for data science).
- C. Eckart and G. Young, "The approximation of one matrix by another of lower rank", *Psychometrika* 1, 1936.
- R. Penrose, "A generalized inverse for matrices", *Proceedings of the Cambridge Philosophical Society* 51, 1955.
- G. W. Stewart, "On the early history of the singular value decomposition", *SIAM Review* 35, 1993.
- K. Pearson, "On lines and planes of closest fit to systems of points in space", *Philosophical Magazine* 2, 1901.
- A. Kiely and M. Klimesh, "The ICER progressive wavelet image compressor", *IPN Progress Report* 42-155, 2003.
- On this site: [Unit 7, Polar and singular value decomposition](../../uoft/MAT247H1/unit07.md) (U of T MAT247H1);
  [Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md) (PCA and ridge regression) and
  [Statistics, Chapter 12](../statistics/12-Multiple-Regression.md) (regression as least squares).
