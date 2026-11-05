# 11. Inner product spaces

*Vector spaces as defined in Chapter 4 have no lengths and no angles: you can add and scale, but you cannot ask how
long a vector is or whether two vectors are perpendicular. Yet some of the most useful facts in mathematics are about
perpendicular directions, and they are needed for functions and polynomials as much as for arrows. This chapter adds
one extra piece of structure, the inner product, proves the Cauchy-Schwarz inequality in that generality, builds
orthonormal bases with the Gram-Schmidt process, splits every space into a subspace and its orthogonal complement,
and ends by seeing Fourier series as coordinates in an orthogonal basis of functions.*

!!! abstract "In this chapter"
    **You will learn:**

    - what an inner product is, with examples on $\mathbb{R}^n$, $\mathbb{C}^n$, polynomials, functions and matrices
    - the Cauchy-Schwarz and triangle inequalities in any inner product space, with proofs
    - why orthogonal vectors are independent, and how easy coordinates are in an orthonormal basis
    - the Gram-Schmidt process and its proof, and the Legendre polynomials it produces
    - orthogonal complements: $V = W \oplus W^\perp$, and the null space as the complement of the row space
    - Fourier coefficients as projections, Bessel's inequality, and best approximation in the mean square

    **You need:** [Chapter 1](01-Vectors.md) (the dot product in $\mathbb{R}^n$),
    [Chapter 4](04-Vector-Spaces.md) and [Chapter 5](05-Independence-Bases-and-Dimension.md) (vector spaces, bases,
    dimension), [Chapter 7](07-The-Four-Subspaces.md) (row space and null space). Integrals of simple functions for
    11.6.

    **Levels:** 11.1 to 11.3 are intermediate; 11.4 and 11.5 are intermediate with full proofs; 11.6 is advanced.

## 11.1 Inner products in general

In [Chapter 1](01-Vectors.md) the dot product $x \cdot y = x_1y_1 + \cdots + x_ny_n$ gave everything: length
$|x| = \sqrt{x \cdot x}$, angle by $\cos\theta = \frac{x \cdot y}{|x||y|}$, and perpendicular meaning $x \cdot y = 0$.
Now consider some questions that do not live in $\mathbb{R}^n$:

- How far apart are the functions $\sin x$ and $x$ on the interval $[0, \pi]$?
- Which straight line is the best approximation to $e^x$ on $[-1, 1]$?
- Are the polynomials $1$ and $x$ "perpendicular"? And $1$ and $x^2$?

To answer them we copy the properties of the dot product that made the geometry work, and make them a definition.

**Definition (real case).** An **inner product** on a real vector space $V$ is a rule that assigns to each pair
$u, v \in V$ a real number $\langle u, v\rangle$, such that for all $u, v, w \in V$ and real $a, b$:

1. **Symmetry:** $\langle u, v\rangle = \langle v, u\rangle$.
2. **Linearity in the first slot:** $\langle au + bw, v\rangle = a\langle u, v\rangle + b\langle w, v\rangle$.
3. **Positivity:** $\langle v, v\rangle > 0$ whenever $v \neq 0$.

A vector space with a chosen inner product is an **inner product space**. By symmetry, linearity holds in the second
slot too; a function of two vectors that is linear in each is called **bilinear**. Also $\langle 0, v\rangle = 0$ (put
$a = b = 0$), so $\langle v, v\rangle \geq 0$ for all $v$ with equality only for $v = 0$.

**Example 1 (the dot product).** On $\mathbb{R}^n$, $\langle x, y\rangle = x \cdot y = x^{\mathsf T}y$. Positivity:
$x \cdot x = x_1^2 + \cdots + x_n^2 > 0$ unless every $x_i = 0$.

**Example 2 (weights).** On $\mathbb{R}^2$, $\langle x, y\rangle = 2x_1y_1 + 3x_2y_2$ is also an inner product: it is
symmetric and bilinear, and $2x_1^2 + 3x_2^2 > 0$ unless $x = 0$. In it, $(1, 0)$ has length $\sqrt 2$. Weighted inner
products are natural when the coordinates measure different things or have different reliabilities, as in weighted
least squares ([Chapter 12](12-Projections-and-Least-Squares.md)).

**Example 3 (a matrix).** More generally, for a symmetric $n \times n$ matrix $M$, $\langle x, y\rangle = x^{\mathsf T}My$
is symmetric and bilinear; it is an inner product exactly when $x^{\mathsf T}Mx > 0$ for every $x \neq 0$, which is
what **positive definite** means. For $M = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$,

$$
x^{\mathsf T}Mx = 2x_1^2 + 2x_1x_2 + 2x_2^2 = x_1^2 + x_2^2 + (x_1 + x_2)^2 > 0 \quad (x \neq 0),
$$

so this is an inner product. For $M = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ it is not: with $x = (1, -1)$,
$x^{\mathsf T}Mx = 1 - 4 + 1 = -2$. Every inner product on $\mathbb{R}^n$ is of the form $x^{\mathsf T}My$ (take
$m_{ij} = \langle e_i, e_j\rangle$), and [Chapter 14](14-The-Spectral-Theorem.md) gives tests for positive
definiteness.

**Example 4 (functions).** On the space $C[a, b]$ of continuous real functions on an interval,

$$
\langle f, g\rangle = \int_a^b f(x)g(x)\,dx .
$$

Symmetry and bilinearity are properties of the integral. Positivity: if $f$ is continuous and not identically zero,
then $f(x_0)^2 > 0$ at some point, and by continuity $f^2 > f(x_0)^2/2$ on a small interval around $x_0$, so
$\int f^2 > 0$. (This is where continuity is used. For functions that may jump, a function that is zero except at one
point has $\int f^2 = 0$, and positivity fails; [Calculus, Chapter 21](../calculus/21-Lebesgue-Integration-and-Fourier-Series.md)
explains how $L^2$ spaces deal with this by identifying functions that agree "almost everywhere".)

Think of this as the dot product with infinitely many coordinates: sample $f$ and $g$ at $N$ equally spaced points
$x_1, \dots, x_N$, and $\sum f(x_i)g(x_i)\,\Delta x$ is a weighted dot product of the two lists of samples. As
$N \to \infty$ it becomes the integral.

With $[a, b] = [0, 1]$: $\langle 1, x\rangle = \int_0^1 x\,dx = 1/2$, so $1$ and $x$ are not perpendicular there. On
$[-1, 1]$: $\langle 1, x\rangle = \int_{-1}^1 x\,dx = 0$, so they are. Orthogonality depends on the inner product, not
just on the vectors.

**Example 5 (matrices).** On the space of real $m \times n$ matrices, $\langle A, B\rangle = \operatorname{tr}(A^{\mathsf T}B) = \sum_{i, j}a_{ij}b_{ij}$:
the dot product of the matrices read as long lists of $mn$ numbers. It is called the **Frobenius inner product**. For
example $\left\langle\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right\rangle = 0 + 2 + 0 + 0 = 2$.

### Complex inner products

On $\mathbb{C}^n$ the formula $z_1w_1 + \cdots + z_nw_n$ does not work: for $z = (1, i)$ it gives
$z \cdot z = 1 + i^2 = 0$, a nonzero vector of "length zero". The fix is to conjugate one side, since
$z\bar z = |z|^2 \geq 0$ for a complex number:

$$
\langle z, w\rangle = z_1\overline{w_1} + z_2\overline{w_2} + \cdots + z_n\overline{w_n}, \qquad \langle z, z\rangle = |z_1|^2 + \cdots + |z_n|^2 .
$$

**Definition (complex case).** An inner product on a complex vector space satisfies linearity in the first slot,
positivity, and **conjugate symmetry** $\langle u, v\rangle = \overline{\langle v, u\rangle}$ instead of symmetry. It
follows that $\langle u, av\rangle = \bar a\langle u, v\rangle$: the inner product is "conjugate-linear" in the second
slot.

Two conventions are in use: mathematicians usually make the inner product linear in the first slot, physicists
(and the bra-ket notation $\langle u|v\rangle$ of quantum mechanics, [Chapter 19](19-Linear-Algebra-in-the-World.md))
linear in the second. The theory is the same; just check which convention a book uses. In this book the first slot is
linear. On $\mathbb{C}^n$, with column vectors, $\langle z, w\rangle = w^*z$, where $w^* = \bar w^{\mathsf T}$ is the
**conjugate transpose**.

Everything below works in both the real and the complex case; the proofs are written so as to cover both, with the
conjugates simply disappearing when everything is real.

## 11.2 Norms and the Cauchy-Schwarz inequality

**Definition.** The **norm** (length) of $v$ is $\|v\| = \sqrt{\langle v, v\rangle}$, and the distance between $u$
and $v$ is $\|u - v\|$. A **unit vector** has norm 1; dividing any $v \neq 0$ by $\|v\|$ **normalises** it.

From the axioms, $\|av\| = |a|\,\|v\|$, because $\langle av, av\rangle = a\bar a\langle v, v\rangle = |a|^2\|v\|^2$.

**Definition.** $u$ and $v$ are **orthogonal**, written $u \perp v$, if $\langle u, v\rangle = 0$.

**Theorem 1 (Pythagoras).** If $u \perp v$ then $\|u + v\|^2 = \|u\|^2 + \|v\|^2$.

*Proof.* $\|u + v\|^2 = \langle u + v, u + v\rangle = \langle u, u\rangle + \langle u, v\rangle + \langle v, u\rangle + \langle v, v\rangle$,
and the middle two terms are 0. $\square$

By induction, the same holds for any number of pairwise orthogonal vectors:
$\|v_1 + \cdots + v_k\|^2 = \|v_1\|^2 + \cdots + \|v_k\|^2$.

### Cauchy-Schwarz

To define angles we need $\frac{\langle u, v\rangle}{\|u\|\|v\|}$ to lie between $-1$ and $1$. That is the content of
the most used inequality in mathematics.

**Theorem 2 (Cauchy-Schwarz inequality).** In any inner product space, for all $u, v$,

$$
|\langle u, v\rangle| \leq \|u\|\,\|v\|,
$$

with equality exactly when $u$ and $v$ are linearly dependent (one is a multiple of the other).

*Proof.* If $v = 0$ both sides are 0 and $u, v$ are dependent. Otherwise, split $u$ into a part along $v$ and a part
orthogonal to $v$. Let

$$
c = \frac{\langle u, v\rangle}{\langle v, v\rangle}, \qquad w = u - cv .
$$

Then $\langle w, v\rangle = \langle u, v\rangle - c\langle v, v\rangle = 0$, so $w \perp v$, and so also $w \perp cv$.
By Pythagoras applied to $u = cv + w$,

$$
\|u\|^2 = |c|^2\|v\|^2 + \|w\|^2 \geq |c|^2\|v\|^2 = \frac{|\langle u, v\rangle|^2}{\|v\|^2}.
$$

Multiply by $\|v\|^2$ and take square roots. Equality holds exactly when $\|w\| = 0$, that is $u = cv$. Conversely if
$u = cv$ for some scalar, then $w = 0$ and equality holds. $\square$

The proof is a picture: the "shadow" $cv$ of $u$ on the line through $v$ is no longer than $u$, because $u$ is the
hypotenuse of a right triangle with legs $cv$ and $w$. This is the same idea as the projection in Chapter 1, now made
to work in any inner product space. It is also the first projection of this chapter; 11.5 and
[Chapter 12](12-Projections-and-Least-Squares.md) develop the idea.

**Three inequalities in one.** The theorem says, in three different spaces:

- $\mathbb{R}^n$: $\left(\sum x_iy_i\right)^2 \leq \left(\sum x_i^2\right)\left(\sum y_i^2\right)$. For $x = (1, 2, 2)$, $y = (3, 0, 4)$:
  $x \cdot y = 11$ and $|x||y| = 3 \cdot 5 = 15$.
- Functions: $\left(\int_a^bfg\right)^2 \leq \int_a^bf^2\int_a^bg^2$. For $f = x$, $g = e^x$ on $[0, 1]$: $\int_0^1xe^x\,dx = 1$
  and $\sqrt{\frac13 \cdot \frac{e^2 - 1}{2}} \approx 1.032$. Close, because $x$ and $e^x$ point in similar directions in
  this space.
- Random variables with finite variance, with $\langle X, Y\rangle = E[XY]$: $|E[XY]|^2 \leq E[X^2]E[Y^2]$. Applied to
  $X - EX$ and $Y - EY$, this says the correlation coefficient lies in $[-1, 1]$
  ([Statistics, Chapter 4](../statistics/04-Relationships-and-Correlation.md)).

**Definition.** In a real inner product space, the **angle** between nonzero $u$ and $v$ is the $\theta \in [0, \pi]$
with $\cos\theta = \frac{\langle u, v\rangle}{\|u\|\|v\|}$. Cauchy-Schwarz is what makes this a legal cosine.

**Example 6.** In $C[0, 1]$, the angle between $1$ and $x$: $\langle 1, x\rangle = 1/2$, $\|1\| = 1$,
$\|x\| = \sqrt{\int_0^1x^2\,dx} = 1/\sqrt 3$, so $\cos\theta = \frac{1/2}{1/\sqrt 3} = \frac{\sqrt 3}{2}$ and
$\theta = 30°$.

### The triangle inequality and norms in general

**Theorem 3 (triangle inequality).** $\|u + v\| \leq \|u\| + \|v\|$.

*Proof.* Expand and use $\operatorname{Re}z \leq |z|$ and Cauchy-Schwarz:

$$
\|u + v\|^2 = \|u\|^2 + 2\operatorname{Re}\langle u, v\rangle + \|v\|^2 \leq \|u\|^2 + 2\|u\|\|v\| + \|v\|^2 = (\|u\| + \|v\|)^2 . \qquad \square
$$

(In the real case $\langle u, v\rangle + \langle v, u\rangle = 2\langle u, v\rangle$; in the complex case it is
$\langle u, v\rangle + \overline{\langle u, v\rangle} = 2\operatorname{Re}\langle u, v\rangle$.)

So $d(u, v) = \|u - v\|$ satisfies the triangle inequality $d(u, w) \leq d(u, v) + d(v, w)$, and every inner product
space is a **metric space** ([Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md)).

More generally, a **norm** on a vector space is any function $\|\cdot\|$ with $\|v\| > 0$ for $v \neq 0$,
$\|av\| = |a|\|v\|$, and the triangle inequality. Not every norm comes from an inner product. The **taxicab norm**
$\|x\|_1 = |x_1| + \cdots + |x_n|$ and the **maximum norm** $\|x\|_\infty = \max|x_i|$ are norms on $\mathbb{R}^n$,
useful in numerical work ([Chapter 18](18-Numerical-Linear-Algebra.md)) and compressed sensing
([Chapter 19](19-Linear-Algebra-in-the-World.md)), but they have no inner product behind them. The test is:

**Theorem 4 (parallelogram law).** A norm that comes from an inner product satisfies

$$
\|u + v\|^2 + \|u - v\|^2 = 2\|u\|^2 + 2\|v\|^2
$$

(the sum of the squares of a parallelogram's diagonals equals the sum of the squares of its four sides).

*Proof.* Expand both squares as in Theorem 3; the cross terms $\pm2\operatorname{Re}\langle u, v\rangle$ cancel. $\square$

For the taxicab norm on $\mathbb{R}^2$ with $u = (1, 0)$, $v = (0, 1)$: the left side is $2^2 + 2^2 = 8$ and the right
side is $2 + 2 = 4$. So no inner product gives the taxicab norm. (Conversely, a theorem of Jordan and von Neumann from
1935 says that every norm satisfying the parallelogram law comes from an inner product, recovered by the **polarisation
identity** $\langle u, v\rangle = \frac14\left(\|u + v\|^2 - \|u - v\|^2\right)$ in the real case.)

<figure class="play" data-play="dotprod"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The dot product and the angle. Cauchy-Schwarz says |a·b| is never more than |a||b|, with equality only when the arrows line up.</figcaption></figure>

## 11.3 Orthogonal and orthonormal bases

**Definitions.** A list of vectors $u_1, \dots, u_k$ is **orthogonal** if $\langle u_i, u_j\rangle = 0$ whenever
$i \neq j$, and **orthonormal** if moreover each $\|u_i\| = 1$. In symbols, orthonormal means
$\langle u_i, u_j\rangle = \delta_{ij}$, where the **Kronecker delta** $\delta_{ij}$ is 1 if $i = j$ and 0 otherwise.
An **orthonormal basis** is a basis that is an orthonormal list.

The standard basis of $\mathbb{R}^n$ is orthonormal. So is $\frac{1}{\sqrt 2}(1, 1)$, $\frac1{\sqrt 2}(1, -1)$, the
eigenvectors of the symmetric matrix of Chapter 9, section 9.1.

**Theorem 5.** An orthogonal list of nonzero vectors is linearly independent.

*Proof.* Suppose $c_1u_1 + \cdots + c_ku_k = 0$. Take the inner product of both sides with $u_j$. Every term
$c_i\langle u_i, u_j\rangle$ with $i \neq j$ vanishes, leaving $c_j\langle u_j, u_j\rangle = 0$. Since $u_j \neq 0$,
$\langle u_j, u_j\rangle > 0$, so $c_j = 0$. This holds for every $j$. $\square$

So $n$ nonzero orthogonal vectors in an $n$-dimensional space are automatically a basis. Independence, normally a
matter of row reduction, is here a matter of computing inner products.

### Coordinates for free

The same trick, taking the inner product with $u_j$, finds coordinates.

**Theorem 6.** If $u_1, \dots, u_n$ is an orthogonal basis of $V$, then every $v \in V$ is

$$
v = \sum_{j = 1}^n\frac{\langle v, u_j\rangle}{\langle u_j, u_j\rangle}u_j .
$$

If the basis is orthonormal, the coefficients are simply $\langle v, u_j\rangle$, and then
$\|v\|^2 = \sum_j|\langle v, u_j\rangle|^2$ (**Parseval's identity**).

*Proof.* Write $v = \sum c_iu_i$ (possible since it is a basis) and take the inner product with $u_j$:
$\langle v, u_j\rangle = c_j\langle u_j, u_j\rangle$. Parseval's identity is Pythagoras applied to the orthogonal
pieces $c_ju_j$, with $\|c_ju_j\|^2 = |c_j|^2$ when $\|u_j\| = 1$. $\square$

In a general basis, finding coordinates means solving a system of $n$ equations. In an orthogonal basis, each
coordinate is found on its own by one inner product. That is the practical reason orthogonal bases are prized.

**Example 7.** The vectors $u_1 = (1, 1, 0)$, $u_2 = (1, -1, 1)$, $u_3 = (-1, 1, 2)$ are orthogonal: $u_1 \cdot u_2 = 1 - 1 + 0 = 0$,
$u_1 \cdot u_3 = -1 + 1 + 0 = 0$, $u_2 \cdot u_3 = -1 - 1 + 2 = 0$. To write $v = (3, 1, 4)$ in this basis:

$$
c_1 = \frac{v \cdot u_1}{u_1 \cdot u_1} = \frac{4}{2} = 2, \quad
c_2 = \frac{v \cdot u_2}{u_2 \cdot u_2} = \frac{6}{3} = 2, \quad
c_3 = \frac{v \cdot u_3}{u_3 \cdot u_3} = \frac{6}{6} = 1 .
$$

Check: $2(1, 1, 0) + 2(1, -1, 1) + (-1, 1, 2) = (3, 1, 4)$.

**Orthonormal columns.** Put orthonormal vectors $q_1, \dots, q_k \in \mathbb{R}^n$ as the columns of an $n \times k$
matrix $Q$. The $(i, j)$ entry of $Q^{\mathsf T}Q$ is $q_i \cdot q_j = \delta_{ij}$, so

$$
Q^{\mathsf T}Q = I_k .
$$

When $k = n$, $Q$ is square and $Q^{\mathsf T} = Q^{-1}$: such a matrix is called **orthogonal** (somewhat illogically:
its columns are orthonormal). Orthogonal matrices are the rotations and reflections of
[Chapter 13](13-Orthogonal-Matrices-and-Rotations.md); the coordinates of Theorem 6 are just $Q^{\mathsf T}v$.

**In an orthonormal basis every inner product is a dot product.** If $v = \sum a_iu_i$ and $w = \sum b_iu_i$ with
$u_1, \dots, u_n$ orthonormal, then $\langle v, w\rangle = \sum_{i, j}a_i\bar b_j\langle u_i, u_j\rangle = \sum_ia_i\bar b_i$.
So every $n$-dimensional real inner product space looks exactly like $\mathbb{R}^n$ with the dot product, once we
use an orthonormal basis; and the next section shows that one always exists.

## 11.4 The Gram-Schmidt process

Orthonormal bases are wonderful, but most bases are not orthonormal. Can we straighten one out?

### The idea in two dimensions

Start with two independent vectors $v_1, v_2$. Keep $u_1 = v_1$. From $v_2$, subtract its shadow on $u_1$, the
projection $\frac{\langle v_2, u_1\rangle}{\langle u_1, u_1\rangle}u_1$ from the proof of Cauchy-Schwarz. What remains,

$$
u_2 = v_2 - \frac{\langle v_2, u_1\rangle}{\langle u_1, u_1\rangle}u_1,
$$

is orthogonal to $u_1$, and $u_1, u_2$ span the same plane as $v_1, v_2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 220" role="img" aria-label="Gram-Schmidt in the plane. The vector v1 points right along the bottom. The vector v2 points up and to the right. Its projection onto v1 is marked along the bottom, and the difference u2 = v2 minus the projection is drawn from the origin straight up, at right angles to v1. A dashed line from the tip of v2 down to the tip of the projection is parallel to u2.">
  <line x1="60" y1="180" x2="230" y2="180" stroke="#9cc9ea" stroke-width="3"/>
  <polygon points="230,175 240,180 230,185" fill="#9cc9ea"/>
  <line x1="60" y1="180" x2="135" y2="67" stroke="#eea66f" stroke-width="3"/>
  <polygon points="131.0,63.5 140,60 138.5,68.9" fill="#eea66f"/>
  <line x1="60" y1="180" x2="140" y2="180" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/>
  <line x1="140" y1="60" x2="140" y2="180" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
  <polyline points="140,168 128,168 128,180" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="180" x2="60" y2="70" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="55,70 60,60 65,70" fill="#7ccf9a"/>
  <polyline points="60,168 72,168 72,180" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="184" font-size="13" fill="currentColor">v₁ = u₁</text>
  <text x="146" y="62" font-size="13" fill="currentColor">v₂</text>
  <text x="70" y="202" font-size="12" fill="currentColor">projection of v₂ on u₁</text>
  <text x="18" y="70" font-size="13" fill="currentColor">u₂</text>
  <text x="148" y="130" font-size="12" fill="currentColor">parallel to u₂</text>
</svg>
</div>

### The process

Repeat: at each step subtract from the next vector its projections onto all the orthogonal vectors found so far.

**Gram-Schmidt process.** Given independent vectors $v_1, \dots, v_k$ in an inner product space, define

$$
\begin{aligned}
u_1 &= v_1, \\
u_2 &= v_2 - \frac{\langle v_2, u_1\rangle}{\langle u_1, u_1\rangle}u_1, \\
u_3 &= v_3 - \frac{\langle v_3, u_1\rangle}{\langle u_1, u_1\rangle}u_1 - \frac{\langle v_3, u_2\rangle}{\langle u_2, u_2\rangle}u_2, \\
&\;\;\vdots \\
u_j &= v_j - \sum_{i < j}\frac{\langle v_j, u_i\rangle}{\langle u_i, u_i\rangle}u_i .
\end{aligned}
$$

Then normalise: $q_j = u_j/\|u_j\|$.

**Theorem 7.** For each $j = 1, \dots, k$: $u_j \neq 0$, the vectors $u_1, \dots, u_j$ are orthogonal, and
$\operatorname{span}(u_1, \dots, u_j) = \operatorname{span}(v_1, \dots, v_j)$. So $q_1, \dots, q_k$ is an orthonormal
basis of $\operatorname{span}(v_1, \dots, v_k)$.

*Proof.* Induction on $j$. For $j = 1$: $u_1 = v_1 \neq 0$ because the $v$'s are independent, and the spans agree.

Assume the statement for $j - 1$. Write $S = \operatorname{span}(v_1, \dots, v_{j-1}) = \operatorname{span}(u_1, \dots, u_{j-1})$.

*Orthogonality.* For $m < j$, take the inner product of the formula for $u_j$ with $u_m$. By the induction hypothesis
$\langle u_i, u_m\rangle = 0$ for $i \neq m$, $i < j$, so only the $i = m$ term of the sum survives:

$$
\langle u_j, u_m\rangle = \langle v_j, u_m\rangle - \frac{\langle v_j, u_m\rangle}{\langle u_m, u_m\rangle}\langle u_m, u_m\rangle = 0 .
$$

(The denominators are nonzero because each $u_i \neq 0$, by the induction hypothesis.)

*Nonzero.* $u_j = v_j - s$ where $s$ is a combination of $u_1, \dots, u_{j-1}$, so $s \in S$. If $u_j = 0$ then
$v_j = s \in S = \operatorname{span}(v_1, \dots, v_{j-1})$, contradicting independence.

*Span.* $u_j = v_j - s$ with $s \in S$, so $u_j \in \operatorname{span}(v_1, \dots, v_j)$; and $v_j = u_j + s$, so
$v_j \in \operatorname{span}(u_1, \dots, u_j)$. Together with the induction hypothesis, the two spans contain each
other's generators, so they are equal. $\square$

**Corollaries.**

1. Every finite-dimensional inner product space has an orthonormal basis: apply Gram-Schmidt to any basis.
2. Every orthonormal list $q_1, \dots, q_k$ extends to an orthonormal basis: extend it to a basis
   $q_1, \dots, q_k, v_{k+1}, \dots, v_n$ ([Chapter 5](05-Independence-Bases-and-Dimension.md)) and apply Gram-Schmidt;
   the first $k$ vectors are unchanged, because they are already orthonormal.

If the input vectors are dependent, the process discovers it: at the first $v_j$ lying in the span of the earlier
ones, $u_j$ comes out 0. Skipping those vectors gives an orthonormal basis of the span anyway.

**Example 8.** Apply Gram-Schmidt to $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$, $v_3 = (0, 1, 1)$ in $\mathbb{R}^3$.

- $u_1 = (1, 1, 0)$, with $u_1 \cdot u_1 = 2$.
- $v_2 \cdot u_1 = 1$, so $u_2 = (1, 0, 1) - \frac12(1, 1, 0) = \left(\frac12, -\frac12, 1\right)$, with
  $u_2 \cdot u_2 = \frac14 + \frac14 + 1 = \frac32$.
- $v_3 \cdot u_1 = 1$ and $v_3 \cdot u_2 = -\frac12 + 1 = \frac12$, so

$$
u_3 = (0, 1, 1) - \frac12(1, 1, 0) - \frac{1/2}{3/2}\left(\frac12, -\frac12, 1\right)
= \left(-\frac12 - \frac16,\; \frac12 + \frac16,\; 1 - \frac13\right) = \left(-\frac23, \frac23, \frac23\right).
$$

Check: $u_1 \cdot u_3 = -\frac23 + \frac23 = 0$ and $u_2 \cdot u_3 = -\frac13 - \frac13 + \frac23 = 0$. Normalising,

$$
q_1 = \frac{1}{\sqrt 2}(1, 1, 0), \quad q_2 = \frac{1}{\sqrt 6}(1, -1, 2), \quad q_3 = \frac{1}{\sqrt 3}(-1, 1, 1).
$$

(Scaling a $u_j$ by a positive number before normalising does not change $q_j$, so it is fine to clear fractions as
you go: $u_2 \to (1, -1, 2)$, $u_3 \to (-1, 1, 1)$.)

### Legendre polynomials

**Example 9.** Apply Gram-Schmidt to $1, x, x^2, x^3$ in the space of polynomials, with
$\langle p, q\rangle = \int_{-1}^1p(x)q(x)\,dx$. The integrals needed are $\int_{-1}^1x^m\,dx$, which is $\frac{2}{m + 1}$
for even $m$ and 0 for odd $m$.

- $P_0 = 1$, with $\langle P_0, P_0\rangle = 2$.
- $\langle x, 1\rangle = 0$, so $P_1 = x$, with $\langle P_1, P_1\rangle = \frac23$.
- $\langle x^2, 1\rangle = \frac23$ and $\langle x^2, x\rangle = 0$, so $P_2 = x^2 - \frac{2/3}{2} \cdot 1 = x^2 - \frac13$.
- $\langle x^3, 1\rangle = 0$, $\langle x^3, x\rangle = \frac25$, $\langle x^3, x^2 - \frac13\rangle = 0$, so
  $P_3 = x^3 - \frac{2/5}{2/3}x = x^3 - \frac35x$.

These are, up to constant factors, the **Legendre polynomials**. The traditional normalisation makes the value at
$x = 1$ equal to 1: $1$, $x$, $\frac12(3x^2 - 1)$, $\frac12(5x^3 - 3x)$. They arose in the eighteenth century in
problems of gravitational attraction, long before anyone thought of them as an orthogonal basis, and they come back
whenever a problem has spherical symmetry. Other inner products on polynomials (with weight functions
$e^{-x^2}$, $(1 - x^2)^{-1/2}$, $e^{-x}$ on various intervals) give the Hermite, Chebyshev and Laguerre polynomials in
the same way.

**A numerical warning.** In exact arithmetic, the formula for $u_j$ can use either $\langle v_j, u_i\rangle$ (classical
Gram-Schmidt) or the inner product of the *partly updated* vector with $u_i$ (modified Gram-Schmidt); the results are
equal. In floating point they are not: when the $v$'s are nearly dependent, classical Gram-Schmidt can return vectors
that are far from orthogonal. Modified Gram-Schmidt is better, and Householder reflections
([Chapter 13](13-Orthogonal-Matrices-and-Rotations.md)) are better still. [Chapter 18](18-Numerical-Linear-Algebra.md)
returns to this.

```python
from fractions import Fraction as F

def dot(a, b):
    return sum(x * y for x, y in zip(a, b))

def gram_schmidt(vectors):
    us = []
    for v in vectors:
        w = list(v)
        for u in us:                                  # modified Gram-Schmidt: use the updated w
            c = dot(w, u) / dot(u, u)
            w = [wi - c * ui for wi, ui in zip(w, u)]
        us.append(w)
    return us

print(gram_schmidt([[F(1), F(1), F(0)], [F(1), F(0), F(1)], [F(0), F(1), F(1)]]))
# u1 = (1, 1, 0), u2 = (1/2, -1/2, 1), u3 = (-2/3, 2/3, 2/3), as in Example 8
```

## 11.5 Orthogonal complements

### Definition and examples

**Definition.** For a subset $W$ of an inner product space $V$, the **orthogonal complement** is

$$
W^\perp = \{v \in V : \langle v, w\rangle = 0 \text{ for every } w \in W\},
$$

read "W perp". It is always a subspace: if $v_1, v_2$ are orthogonal to every $w$, so is $av_1 + bv_2$, by linearity
in the first slot. And $W \cap W^\perp = \{0\}$, because a vector in both is orthogonal to itself, and
$\langle v, v\rangle = 0$ forces $v = 0$.

If $W$ is spanned by $w_1, \dots, w_k$, then $v \in W^\perp$ exactly when $\langle v, w_i\rangle = 0$ for each $i$
(by linearity, being orthogonal to each spanning vector makes $v$ orthogonal to every combination of them). In
$\mathbb{R}^n$ these are linear equations, one for each $w_i$.

**Example 10.** In $\mathbb{R}^3$ let $W = \operatorname{span}\{(1, 1, 0), (0, 1, 1)\}$, a plane. Then $W^\perp$ is
the set of solutions of $x + y = 0$ and $y + z = 0$: the line through $(1, -1, 1)$. And the complement of that line is
the plane: in $\mathbb{R}^3$, the orthogonal complement of a plane through 0 is its normal line, and the other way round.

**Example 11 (four dimensions).** Let $W = \operatorname{span}\{(1, 1, 1, 1), (1, 2, 3, 4)\}$ in $\mathbb{R}^4$.
$W^\perp$ is the null space of $\begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \end{pmatrix}$. Row reducing,
$y + 2z + 3w = 0$ and $x - z - 2w = 0$, so $W^\perp$ is spanned by $(1, -2, 1, 0)$ and $(2, -3, 0, 1)$: a plane, and
$2 + 2 = 4$.

### The two subspaces fill the space

**Theorem 8 (orthogonal decomposition).** Let $W$ be a finite-dimensional subspace of an inner product space $V$.
Then every $v \in V$ can be written in exactly one way as

$$
v = w + w', \qquad w \in W, \quad w' \in W^\perp .
$$

That is, $V = W \oplus W^\perp$. The part $w$ is the **orthogonal projection** of $v$ onto $W$, written
$\operatorname{proj}_Wv$, and if $q_1, \dots, q_k$ is an orthonormal basis of $W$ then

$$
\operatorname{proj}_Wv = \langle v, q_1\rangle q_1 + \cdots + \langle v, q_k\rangle q_k .
$$

*Proof.* $W$ has an orthonormal basis $q_1, \dots, q_k$ by Gram-Schmidt. Define $w$ by the formula and put
$w' = v - w$. For each $j$,

$$
\langle w', q_j\rangle = \langle v, q_j\rangle - \sum_i\langle v, q_i\rangle\langle q_i, q_j\rangle = \langle v, q_j\rangle - \langle v, q_j\rangle = 0,
$$

so $w'$ is orthogonal to each $q_j$, hence to all of $W$. That proves existence. For uniqueness, if
$w_1 + w_1' = w_2 + w_2'$ with $w_i \in W$, $w_i' \in W^\perp$, then $w_1 - w_2 = w_2' - w_1'$ lies in
$W \cap W^\perp = \{0\}$. $\square$

**Corollary.** If $V$ has dimension $n$ and $W$ is a subspace, then $\dim W + \dim W^\perp = n$ and
$(W^\perp)^\perp = W$.

*Proof.* A direct sum has dimension equal to the sum of the dimensions ([Chapter 5](05-Independence-Bases-and-Dimension.md)).
For the second claim: every $w \in W$ is orthogonal to every vector in $W^\perp$, so $W \subseteq (W^\perp)^\perp$.
Applying the dimension formula twice, $\dim(W^\perp)^\perp = n - \dim W^\perp = \dim W$. A subspace contained in
another of the same finite dimension equals it. $\square$

### The best approximation property

**Theorem 9.** Let $W$ be a finite-dimensional subspace and $v \in V$. Then $\operatorname{proj}_Wv$ is the point of
$W$ closest to $v$: for every $y \in W$,

$$
\|v - \operatorname{proj}_Wv\| \leq \|v - y\|,
$$

with equality only for $y = \operatorname{proj}_Wv$.

*Proof.* Write $p = \operatorname{proj}_Wv$. Then $v - y = (v - p) + (p - y)$, where $v - p \in W^\perp$ and
$p - y \in W$. By Pythagoras, $\|v - y\|^2 = \|v - p\|^2 + \|p - y\|^2 \geq \|v - p\|^2$, with equality only when
$p - y = 0$. $\square$

This one theorem is behind least squares ([Chapter 12](12-Projections-and-Least-Squares.md)), Fourier approximation
(11.6), and much of approximation theory: whenever "best" is measured by a norm that comes from an inner product, the
best approximation from a subspace is the orthogonal projection, and the error is perpendicular to the subspace.

### The four subspaces, orthogonally

In [Chapter 7](07-The-Four-Subspaces.md) we met the four subspaces of an $m \times n$ matrix $A$. With the dot product
we can now see how they fit together.

**Theorem 10.** For a real $m \times n$ matrix $A$,

$$
\operatorname{Null}(A) = \operatorname{Row}(A)^\perp \text{ in } \mathbb{R}^n, \qquad \operatorname{Null}(A^{\mathsf T}) = \operatorname{Col}(A)^\perp \text{ in } \mathbb{R}^m .
$$

*Proof.* $Ax = 0$ says that the dot product of each row of $A$ with $x$ is 0, that is, $x$ is orthogonal to each row,
hence to the row space they span. The second statement is the first applied to $A^{\mathsf T}$, whose rows are the
columns of $A$. $\square$

With the Corollary, this gives rank-nullity again ($\dim\operatorname{Row}A + \dim\operatorname{Null}A = n$), and it
gives the full picture: $\mathbb{R}^n$ splits into the row space and the null space at right angles, $\mathbb{R}^m$
splits into the column space and the left null space at right angles, and $A$ maps the row space one-to-one onto the
column space while killing the null space. This picture is completed with the singular value decomposition of
[Chapter 15](15-The-Singular-Value-Decomposition.md), which chooses orthonormal bases of all four subspaces at once.

It also gives a new test for solvability: $Ax = b$ has a solution exactly when $b \in \operatorname{Col}(A)$, that is
when $b \perp \operatorname{Null}(A^{\mathsf T})$: **$b$ must be orthogonal to every $y$ with $A^{\mathsf T}y = 0$.** (This
is a simple case of the "Fredholm alternative".)

### A warning about infinite dimensions

*Level: expert.*

Theorem 8 needs $W$ to be finite-dimensional (or at least complete, in the sense of
[Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md)). Without that, things can go wrong. In
$C[-1, 1]$ with $\langle f, g\rangle = \int_{-1}^1fg$, let $W$ be the subspace of polynomials. The Weierstrass
approximation theorem says every continuous function is a uniform limit of polynomials. If $f \in W^\perp$, choose
polynomials $p_k \to f$ uniformly; then $\langle f, f\rangle = \lim\langle f, p_k\rangle = 0$, so $f = 0$. So
$W^\perp = \{0\}$ and $(W^\perp)^\perp = C[-1, 1] \neq W$: the decomposition $V = W \oplus W^\perp$ fails. In Hilbert
spaces the correct statement is $(W^\perp)^\perp = \overline W$, the closure of $W$; this is part of
[Chapter 20](20-Where-Linear-Algebra-Goes.md).

## 11.6 Functions as vectors: Fourier coefficients as projections

*Level: advanced.*

### An orthogonal family of functions

Work in the space of continuous functions on $[-\pi, \pi]$ (or piecewise continuous ones; see the remark in Example 4)
with

$$
\langle f, g\rangle = \int_{-\pi}^{\pi}f(x)g(x)\,dx .
$$

**Theorem 11.** The functions $1, \cos x, \sin x, \cos 2x, \sin 2x, \dots$ are pairwise orthogonal, and
$\|1\|^2 = 2\pi$, $\|\cos nx\|^2 = \|\sin nx\|^2 = \pi$ for $n \geq 1$.

*Proof.* Use the product-to-sum formulas, for example $\cos mx\cos nx = \frac12(\cos(m - n)x + \cos(m + n)x)$, and
$\int_{-\pi}^{\pi}\cos kx\,dx = 0$ for every whole number $k \neq 0$ (the integral of a full number of periods). So
for $m \neq n$, $\int\cos mx\cos nx = 0$, and for $m = n \geq 1$ it is $\frac12 \cdot 2\pi = \pi$. In the same way
$\sin mx\sin nx = \frac12(\cos(m - n)x - \cos(m + n)x)$ gives 0 or $\pi$. Finally $\sin mx\cos nx$ is an odd function,
so its integral over $[-\pi, \pi]$ is 0. $\square$

### Projecting onto them

The trigonometric polynomials of degree at most $N$,

$$
T_N = \operatorname{span}\{1, \cos x, \sin x, \dots, \cos Nx, \sin Nx\},
$$

form a subspace of dimension $2N + 1$ with the orthogonal basis of Theorem 11. By Theorem 8 and Theorem 6, the
orthogonal projection of $f$ onto $T_N$ is

$$
S_Nf(x) = \frac{a_0}{2} + \sum_{n = 1}^{N}(a_n\cos nx + b_n\sin nx),
$$

where each coefficient is $\langle f, u\rangle/\langle u, u\rangle$ for the matching basis function $u$:

$$
a_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx, \qquad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,dx .
$$

(The $a_0/2$ is the usual bookkeeping trick: the coefficient of the constant function 1 is
$\langle f, 1\rangle/\langle 1, 1\rangle = \frac{1}{2\pi}\int f$, which is $a_0/2$ with $a_0$ given by the same formula
as the other $a_n$.)

These are exactly the **Fourier coefficients** of [Calculus, Chapter 21](../calculus/21-Lebesgue-Integration-and-Fourier-Series.md).
The formulas that look like magic there are, here, the coordinate formula of Theorem 6. And Theorem 9 says something
that is not obvious from the calculus point of view:

**Theorem 12 (best approximation in the mean).** Among all trigonometric polynomials $t$ of degree at most $N$, the
Fourier partial sum $S_Nf$ makes the mean square error $\int_{-\pi}^{\pi}(f - t)^2\,dx$ smallest.

**Example 12.** Take $f(x) = x$ on $[-\pi, \pi]$. Since $x$ is odd and $\cos nx$ is even, every $a_n = 0$. Integrating
by parts,

$$
b_n = \frac{1}{\pi}\int_{-\pi}^{\pi}x\sin nx\,dx = \frac1\pi\left[-\frac{x\cos nx}{n}\right]_{-\pi}^{\pi} + \frac{1}{\pi n}\int_{-\pi}^{\pi}\cos nx\,dx = -\frac{2\pi\cos n\pi}{\pi n} + 0 = \frac{2(-1)^{n+1}}{n}.
$$

So

$$
x \sim 2\left(\sin x - \frac{\sin 2x}{2} + \frac{\sin 3x}{3} - \cdots\right),
$$

and the best approximation to $x$ by a trigonometric polynomial of degree 3 is
$2\sin x - \sin 2x + \frac23\sin 3x$.

### Bessel and Parseval

**Theorem 13 (Bessel's inequality).** If $e_1, e_2, \dots$ is an orthonormal list (finite or infinite) in an inner
product space, then for every $v$,

$$
\sum_k|\langle v, e_k\rangle|^2 \leq \|v\|^2 .
$$

*Proof.* For each $N$, let $p_N = \sum_{k \leq N}\langle v, e_k\rangle e_k$, the projection of $v$ on the span of the
first $N$. By Theorem 8, $v - p_N \perp p_N$, so by Pythagoras and Parseval's identity for $p_N$,
$\|v\|^2 = \|p_N\|^2 + \|v - p_N\|^2 \geq \|p_N\|^2 = \sum_{k \leq N}|\langle v, e_k\rangle|^2$. Let $N \to \infty$; the
partial sums are increasing and bounded, so the series converges, with sum at most $\|v\|^2$. $\square$

For Fourier series, the orthonormal functions are $\frac{1}{\sqrt{2\pi}}$, $\frac{\cos nx}{\sqrt\pi}$,
$\frac{\sin nx}{\sqrt\pi}$, and Bessel's inequality becomes

$$
\frac{a_0^2}{2} + \sum_{n = 1}^\infty(a_n^2 + b_n^2) \leq \frac1\pi\int_{-\pi}^{\pi}f(x)^2\,dx .
$$

In particular $a_n \to 0$ and $b_n \to 0$ (the terms of a convergent series tend to 0), which is the Riemann-Lebesgue
lemma for square-integrable functions, obtained here with no analysis at all.

**Is it an equality?** In finite dimensions, Parseval's identity holds for an orthonormal *basis*. In infinite
dimensions the question is whether the orthonormal list is "complete": whether $\|v - p_N\| \to 0$ for every $v$. For
the trigonometric system on $[-\pi, \pi]$ the answer is yes, for every square-integrable $f$, which is a real theorem
of analysis (proved in [Calculus, Chapter 21](../calculus/21-Lebesgue-Integration-and-Fourier-Series.md); one route goes
through Fejér's theorem or the Weierstrass approximation theorem). Granting it, **Parseval's identity** holds:

$$
\frac{a_0^2}{2} + \sum_{n = 1}^\infty(a_n^2 + b_n^2) = \frac1\pi\int_{-\pi}^{\pi}f(x)^2\,dx .
$$

**Example 13 (a famous sum).** For $f(x) = x$: $\frac1\pi\int_{-\pi}^{\pi}x^2\,dx = \frac1\pi \cdot \frac{2\pi^3}{3} = \frac{2\pi^2}{3}$,
and $\sum b_n^2 = \sum\frac{4}{n^2}$. So Parseval gives

$$
\sum_{n = 1}^\infty\frac{1}{n^2} = \frac{\pi^2}{6},
$$

Euler's solution of the Basel problem, obtained from Pythagoras in infinitely many dimensions. Bessel's inequality
alone would only give $\le$.

```python
from math import pi
print(sum(1 / n**2 for n in range(1, 100001)), pi**2 / 6)   # 1.6449240668..., 1.6449340668...
```

**Convergence in the mean is not convergence at each point.** Completeness says $\|f - S_Nf\| \to 0$: the *area* of
the squared error shrinks. It does not say that $S_Nf(x) \to f(x)$ at every $x$. For $f(x) = x$, at $x = \pi$ every
$\sin n\pi = 0$, so $S_Nf(\pi) = 0 \neq \pi$; the series "sees" the jump of the periodic extension, which goes from
$\pi$ to $-\pi$. Pointwise convergence is a separate and harder question, studied in Calculus, Chapter 21.

### Polynomial approximation, the same way

The idea is not special to sines and cosines. To approximate $e^x$ on $[-1, 1]$ by a quadratic in the mean square
sense, project onto the span of the Legendre polynomials $P_0 = 1$, $P_1 = x$, $P_2 = x^2 - \frac13$ of Example 9,
with coefficients $\langle e^x, P_j\rangle/\langle P_j, P_j\rangle$:

$$
c_0 = \frac{e - e^{-1}}{2} \approx 1.1752, \quad c_1 = \frac3e \approx 1.1036, \quad c_2 = \frac{15(e^2 - 7)}{4e} \approx 0.5367 .
$$

Multiplied out, the best quadratic is about $0.9963 + 1.1036x + 0.5367x^2$. Compare the Taylor polynomial
$1 + x + \frac{x^2}{2}$, which is excellent near 0 but worse overall: its root mean square error on $[-1, 1]$,
$\left(\int_{-1}^{1}(e^x - p)^2\,dx\right)^{1/2}$, is about 0.095, against 0.038 for the projection, and at $x = 1$ its
error is about 0.218 against 0.082. Taylor polynomials are local; projections are global.

## A short history

The inequality for sums, $\left(\sum a_ib_i\right)^2 \leq \sum a_i^2\sum b_i^2$, is in Cauchy's *Cours d'analyse* of
1821. The version for integrals was published by Viktor Bunyakovsky in 1859 and independently by Hermann Schwarz in
the 1880s; in Russia it is often called the Cauchy-Bunyakovsky-Schwarz inequality. Jørgen Gram described the
orthogonalisation process in 1883 in work on series expansions and least squares, and Erhard Schmidt gave the
recursive formulas in 1907 in his work on integral equations; an equivalent computation appears earlier in Laplace.
Fourier introduced his series in his work on heat, presented in 1807 and published as a book in 1822; the realisation
that the coefficients are orthogonal projections, and that the natural home of such series is an infinite-dimensional
space with an inner product, came with Hilbert, Schmidt and Riesz in the first decade of the twentieth century. The
abstract definition of a Hilbert space, with axioms like those in 11.1, was given by John von Neumann in 1929.

## Check yourself

??? question "1. Is $\langle x, y\rangle = x_1y_1 - x_2y_2$ an inner product on $\mathbb{R}^2$? Is $\langle x, y\rangle = x_1y_1$?"

    Neither. The first fails positivity: $\langle(0, 1), (0, 1)\rangle = -1 < 0$. The second is symmetric, bilinear and
    satisfies $\langle x, x\rangle = x_1^2 \geq 0$, but $\langle(0, 1), (0, 1)\rangle = 0$ for a nonzero vector, so
    positivity fails again.

??? question "2. With $\langle x, y\rangle = x^{\mathsf T}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}y$ on $\mathbb{R}^2$, find the angle between $e_1 = (1, 0)$ and $e_2 = (0, 1)$. Find a nonzero vector orthogonal to $e_1$ in this inner product."

    $\langle e_1, e_2\rangle = m_{12} = 1$, $\|e_1\|^2 = m_{11} = 2$, $\|e_2\|^2 = m_{22} = 2$. So
    $\cos\theta = \frac{1}{\sqrt2\sqrt2} = \frac12$ and $\theta = 60°$: the standard axes are not perpendicular here.

    $\langle e_1, y\rangle = 2y_1 + y_2 = 0$ for $y = (1, -2)$. Check: $(1, 0)M(1, -2)^{\mathsf T} = (2, 1) \cdot (1, -2) = 0$.

??? question "3. In $C[0, 1]$ with $\langle f, g\rangle = \int_0^1fg$, compute $\|x\|$, $\|x^2\|$ and the angle between $x$ and $x^2$."

    $\|x\|^2 = \int_0^1x^2 = \frac13$, $\|x^2\|^2 = \int_0^1x^4 = \frac15$, $\langle x, x^2\rangle = \int_0^1x^3 = \frac14$.

    $\cos\theta = \frac{1/4}{\sqrt{1/3}\sqrt{1/5}} = \frac{\sqrt{15}}{4} \approx 0.968$, so $\theta \approx 14.5°$.
    The functions $x$ and $x^2$ point in nearly the same direction on $[0, 1]$.

??? question "4. Write $v = (1, 2, 3)$ in the orthogonal basis $u_1 = (1, 1, 0)$, $u_2 = (1, -1, 1)$, $u_3 = (-1, 1, 2)$ of Example 7."

    $c_1 = \frac{v \cdot u_1}{2} = \frac32$, $c_2 = \frac{1 - 2 + 3}{3} = \frac23$, $c_3 = \frac{-1 + 2 + 6}{6} = \frac76$.

    Check: $\frac32(1, 1, 0) + \frac23(1, -1, 1) + \frac76(-1, 1, 2) = \left(\frac{9 + 4 - 7}{6}, \frac{9 - 4 + 7}{6}, \frac{0 + 4 + 14}{6}\right) = (1, 2, 3)$.

??? question "5. Apply Gram-Schmidt to $(1, 0, 1)$, $(1, 1, 0)$, $(0, 1, 1)$ and give the orthonormal basis."

    $u_1 = (1, 0, 1)$, $u_1 \cdot u_1 = 2$.

    $v_2 \cdot u_1 = 1$: $u_2 = (1, 1, 0) - \frac12(1, 0, 1) = \left(\frac12, 1, -\frac12\right)$, with $u_2 \cdot u_2 = \frac32$.

    $v_3 \cdot u_1 = 1$, $v_3 \cdot u_2 = 1 - \frac12 = \frac12$:
    $u_3 = (0, 1, 1) - \frac12(1, 0, 1) - \frac13\left(\frac12, 1, -\frac12\right) = \left(-\frac23, \frac23, \frac23\right)$.

    Orthonormal basis: $\frac1{\sqrt2}(1, 0, 1)$, $\frac1{\sqrt6}(1, 2, -1)$, $\frac1{\sqrt3}(-1, 1, 1)$. Check:
    $(1, 0, 1) \cdot (1, 2, -1) = 0$, $(1, 0, 1) \cdot (-1, 1, 1) = 0$, $(1, 2, -1) \cdot (-1, 1, 1) = 0$.

??? question "6. Find a basis of $W^\perp$ for $W = \operatorname{span}\{(1, 0, 2, 1), (0, 1, 1, -1)\}$ in $\mathbb{R}^4$, and check the dimension formula."

    $W^\perp$ is the null space of $\begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & -1 \end{pmatrix}$, already in reduced
    form: $x = -2z - w$, $y = -z + w$. With $(z, w) = (1, 0)$ and $(0, 1)$: $(-2, -1, 1, 0)$ and $(-1, 1, 0, 1)$.

    Check: $(1, 0, 2, 1) \cdot (-2, -1, 1, 0) = -2 + 2 = 0$, $(0, 1, 1, -1) \cdot (-2, -1, 1, 0) = 0$, and similarly for
    the second. $\dim W + \dim W^\perp = 2 + 2 = 4$.

??? question "7. Prove the parallelogram law, and use it to show that the maximum norm $\|x\|_\infty = \max(|x_1|, |x_2|)$ on $\mathbb{R}^2$ does not come from an inner product."

    $\|u + v\|^2 + \|u - v\|^2 = (\|u\|^2 + 2\operatorname{Re}\langle u, v\rangle + \|v\|^2) + (\|u\|^2 - 2\operatorname{Re}\langle u, v\rangle + \|v\|^2) = 2\|u\|^2 + 2\|v\|^2$.

    For the maximum norm take $u = (1, 0)$, $v = (0, 1)$: $\|u + v\|_\infty = \|u - v\|_\infty = 1$, so the left side is
    2, while the right side is $2 + 2 = 4$.

??? question "8. Show that $P_3 = x^3 - \frac35x$ is orthogonal to every polynomial of degree at most 2 in $\int_{-1}^1pq$."

    By linearity it is enough to check $1$, $x$, $x^2$. $P_3$ is odd, so $P_3 \cdot 1$ and $P_3 \cdot x^2$ are odd and
    integrate to 0 over $[-1, 1]$. And $\int_{-1}^1(x^4 - \frac35x^2)\,dx = \frac25 - \frac35 \cdot \frac23 = \frac25 - \frac25 = 0$.

??? question "9. In $\mathbb{C}^2$, are $z = (1, i)$ and $w = (i, 1)$ orthogonal? What is $\|z\|$? What goes wrong without the complex conjugate?"

    $\langle z, w\rangle = 1 \cdot \bar i + i \cdot \bar 1 = -i + i = 0$: orthogonal. $\|z\|^2 = |1|^2 + |i|^2 = 2$, so
    $\|z\| = \sqrt 2$.

    Without conjugation, $z_1z_1 + z_2z_2 = 1 + i^2 = 0$ would give the nonzero vector $z$ length 0, and the
    "length" of $iz$ would be $-(1 + i^2) = 0$ as well, while $(1, 2i)$ would get $1 - 4 = -3$. Positivity fails, so
    nothing of 11.2 would work.

??? question "10. Prove that $(W^\perp)^\perp = W$ for a subspace $W$ of a finite-dimensional inner product space, without using dimension counting."

    $W \subseteq (W^\perp)^\perp$ because each $w \in W$ is orthogonal to everything in $W^\perp$. Conversely let
    $v \in (W^\perp)^\perp$ and decompose $v = w + w'$ with $w \in W$, $w' \in W^\perp$ (Theorem 8). Then
    $\langle w', w'\rangle = \langle v - w, w'\rangle = \langle v, w'\rangle - \langle w, w'\rangle = 0 - 0$, since
    $v \perp W^\perp$ and $w \perp W^\perp$. So $w' = 0$ and $v = w \in W$.

??? question "11. Let $f$ be the square wave, $f(x) = -1$ for $-\pi < x < 0$ and $f(x) = 1$ for $0 < x < \pi$. Find its Fourier coefficients, and use Parseval's identity to find $\sum_{n \text{ odd}}\frac{1}{n^2}$."

    $f$ is odd, so every $a_n = 0$. $b_n = \frac2\pi\int_0^\pi\sin nx\,dx = \frac{2}{\pi n}(1 - \cos n\pi)$, which is
    $\frac{4}{\pi n}$ for odd $n$ and 0 for even $n$. So $f \sim \frac4\pi\left(\sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \cdots\right)$.

    Parseval: $\sum_{n \text{ odd}}\frac{16}{\pi^2n^2} = \frac1\pi\int_{-\pi}^{\pi}1\,dx = 2$, so
    $\sum_{n \text{ odd}}\frac1{n^2} = \frac{\pi^2}{8}$. (Consistent with Example 13: the even terms contribute
    $\frac14 \cdot \frac{\pi^2}{6} = \frac{\pi^2}{24}$, and $\frac{\pi^2}{8} + \frac{\pi^2}{24} = \frac{\pi^2}{6}$.)

??? question "12. Prove that equality holds in the triangle inequality, $\|u + v\| = \|u\| + \|v\|$ with $v \neq 0$, exactly when $u = cv$ for a real $c \geq 0$."

    From the proof of Theorem 3, equality forces $\operatorname{Re}\langle u, v\rangle = \|u\|\|v\|$. Since
    $\operatorname{Re}\langle u, v\rangle \leq |\langle u, v\rangle| \leq \|u\|\|v\|$, both inequalities are equalities.
    Equality in Cauchy-Schwarz gives $u = cv$ for a scalar $c$ (with $v \neq 0$). Then
    $\langle u, v\rangle = c\|v\|^2$, and $\operatorname{Re}(c)\|v\|^2 = |c|\|v\|^2$ forces $\operatorname{Re}c = |c|$,
    so $c$ is real and $\geq 0$. Conversely if $u = cv$ with $c \geq 0$ then $\|u + v\| = (1 + c)\|v\| = \|u\| + \|v\|$.

## What you learned

- An inner product is symmetric (or conjugate symmetric), linear in the first slot and positive; it gives lengths,
  distances and angles in any vector space, including spaces of functions, polynomials and matrices.
- Cauchy-Schwarz, $|\langle u, v\rangle| \leq \|u\|\|v\|$, holds in every inner product space, with a one-line
  projection proof; it implies the triangle inequality.
- Orthogonal nonzero vectors are independent, and in an orthogonal basis each coordinate is one inner product:
  $c_j = \langle v, u_j\rangle/\langle u_j, u_j\rangle$.
- Gram-Schmidt turns any independent list into an orthonormal one with the same spans; so every finite-dimensional
  inner product space has an orthonormal basis. On polynomials it produces the Legendre polynomials.
- $V = W \oplus W^\perp$, the projection onto $W$ is the closest point of $W$, and the null space is the orthogonal
  complement of the row space.
- Fourier coefficients are coordinates with respect to an orthogonal family of functions; partial sums are best
  mean-square approximations, Bessel's inequality always holds, and Parseval's identity (from completeness) gives
  $\sum 1/n^2 = \pi^2/6$.

**Next:** [Chapter 12](12-Projections-and-Least-Squares.md), where projections become matrices and we fit lines,
curves and orbits to data that no line passes through exactly.

## Further reading

- S. Axler, *Linear Algebra Done Right*, 4th edition, Springer, 2024, chapter 6.
- K. Hoffman and R. Kunze, *Linear Algebra*, 2nd edition, Prentice-Hall, 1971, chapter 8.
- P. R. Halmos, *Finite-Dimensional Vector Spaces*, 2nd edition, Van Nostrand, 1958.
- E. M. Stein and R. Shakarchi, *Fourier Analysis: An Introduction*, Princeton University Press, 2003, chapters 2
  and 3.
- J. M. Steele, *The Cauchy-Schwarz Master Class*, Cambridge University Press, 2004.
- S. J. Leon, Å. Björck and W. Gander, "Gram-Schmidt Orthogonalization: 100 Years and More", *Numerical Linear
  Algebra with Applications* 20, 2013.
- On this site: [Calculus, Chapter 21: Lebesgue integration and Fourier series](../calculus/21-Lebesgue-Integration-and-Fourier-Series.md),
  [Calculus, Chapter 20: Metric spaces](../calculus/20-Metric-Spaces-and-Topology-of-R.md),
  [Geometry, Chapter 9: Vectors](../geometry/09-Vectors.md), the gentle [vectors lesson](../../topics/geometry/level-8/04-vectors.md),
  and the U of T guides [MAT247H1 Unit 1: Inner product spaces](../../uoft/MAT247H1/unit01.md) and
  [MAT247H1 Unit 2: Orthogonality and Gram-Schmidt](../../uoft/MAT247H1/unit02.md).
- Other books on the shelf: [Calculus](../calculus/index.md), [Geometry](../geometry/index.md),
  [Statistics](../statistics/index.md).
