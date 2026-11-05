# 9. Eigenvalues and eigenvectors

*A matrix moves almost every vector off its line: it turns it as well as stretching it. But most matrices have a few
special directions that they only stretch, and along those directions the matrix is as simple as multiplying by a
number. This chapter finds those directions, uses them to take a matrix to the hundredth power in one line, gets a
formula for the Fibonacci numbers out of a 2 by 2 matrix, sees what happens when the special directions turn out to
be complex, and ends with the long-run behaviour of a Markov chain and the eigenvector behind PageRank.*

!!! abstract "In this chapter"
    **You will learn:**

    - what an eigenvalue and an eigenvector are, and how to find them from the characteristic polynomial
    - why the trace is the sum and the determinant the product of the eigenvalues
    - when a matrix can be diagonalised, and why eigenvectors for different eigenvalues are always independent
    - how to compute powers $A^n$ quickly, and Binet's formula for the Fibonacci numbers
    - what complex eigenvalues of a real matrix mean: a rotation combined with a scaling
    - why every Markov chain has a steady state, and how PageRank is an eigenvector

    **You need:** [Chapter 8](08-Determinants.md) (determinants, and $\det M = 0$ exactly when $M$ is not
    invertible), [Chapter 5](05-Independence-Bases-and-Dimension.md) (independence and bases) and
    [Chapter 6](06-Linear-Maps.md) (the matrix of a map, change of basis, similar matrices). Complex numbers
    as in [Algebra, Chapter 9](../algebra/09-Complex-Numbers.md) for 9.5.

    **Levels:** 9.1 and 9.2 are intermediate; 9.3 and 9.4 are intermediate with full proofs; 9.5 and 9.6 are
    intermediate to advanced.

## 9.1 Directions a map does not turn

Take the matrix

$$
A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}
$$

and feed it a few vectors. The vector $(1, 0)$ goes to $(2, 1)$: it has been stretched and also turned upwards. The
vector $(0, 1)$ goes to $(1, 2)$: turned the other way. But

$$
A \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 3 \end{pmatrix} = 3 \begin{pmatrix} 1 \\ 1 \end{pmatrix},
\qquad
A \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \end{pmatrix} = 1 \begin{pmatrix} 1 \\ -1 \end{pmatrix}.
$$

Along the diagonal line through $(1, 1)$ the matrix does nothing but stretch by 3. Along the other diagonal, through
$(1, -1)$, it does nothing at all. Every other vector is turned.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 300" role="img" aria-label="The plane with origin at the centre. The matrix with rows 2 1 and 1 2 sends the vector (1,1) to (3,3) along the same line, keeps (1,-1) where it is, and sends (1,0) to (2,1), which points in a new direction.">
  <line x1="20" y1="150" x2="340" y2="150" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="180" y1="290" x2="180" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="60" y1="270" x2="320" y2="10" stroke="#7ccf9a" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="60" y1="30" x2="320" y2="290" stroke="#eea66f" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="180" y1="150" x2="300" y2="30" stroke="#7ccf9a" stroke-width="3"/>
  <circle cx="300" cy="30" r="4" fill="#7ccf9a"/>
  <line x1="180" y1="150" x2="220" y2="110" stroke="currentColor" stroke-width="2"/>
  <circle cx="220" cy="110" r="3" fill="currentColor"/>
  <line x1="180" y1="150" x2="220" y2="190" stroke="#eea66f" stroke-width="3"/>
  <circle cx="220" cy="190" r="4" fill="#eea66f"/>
  <line x1="180" y1="150" x2="220" y2="150" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="220" cy="150" r="3" fill="#9cc9ea"/>
  <line x1="180" y1="150" x2="260" y2="110" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="5 3"/>
  <circle cx="260" cy="110" r="4" fill="#9cc9ea"/>
  <text x="228" y="104" font-size="12" fill="currentColor">(1,1)</text>
  <text x="290" y="22" font-size="12" fill="currentColor" text-anchor="end">A(1,1) = (3,3)</text>
  <text x="232" y="184" font-size="12" fill="currentColor">(1,−1) stays</text>
  <text x="224" y="146" font-size="12" fill="currentColor">(1,0)</text>
  <text x="266" y="114" font-size="12" fill="currentColor">A(1,0) = (2,1)</text>
</svg>
</div>

These special directions are what this chapter is about.

**Definition.** Let $A$ be an $n \times n$ matrix (or, more generally, $T: V \to V$ a linear map from a vector space
to itself). A number $\lambda$ is an **eigenvalue** of $A$ if there is a vector $v \neq 0$ with

$$
A v = \lambda v .
$$

Such a $v$ is an **eigenvector** for $\lambda$. The set of all $v$ with $Av = \lambda v$ (including $0$) is the
**eigenspace** $E_\lambda$.

The word is half German: *eigen* means "own" or "characteristic", so an eigenvector is one of the matrix's own
directions. The symbol $\lambda$ (Greek lambda) is traditional for eigenvalues.

Three remarks before we compute anything.

- **The zero vector is excluded** as an eigenvector, because $A0 = \lambda 0$ for every $\lambda$, which would make
  every number an eigenvalue. But the eigenvalue $\lambda = 0$ is allowed: it means $Av = 0$ for some $v \neq 0$,
  that is, $A$ has a nonzero kernel and is not invertible.
- **An eigenspace is a subspace.** If $Av = \lambda v$ and $Aw = \lambda w$ then
  $A(av + bw) = aAv + bAw = \lambda(av + bw)$. In fact $E_\lambda = \ker(A - \lambda I)$, since
  $Av = \lambda v$ is the same as $(A - \lambda I)v = 0$. So any nonzero multiple of an eigenvector is again one; what
  matters is the line (or plane, or bigger subspace), not the particular arrow.
- **Eigenvectors belong to the map, not to the coordinates.** If $T$ is a linear map, "$T(v) = \lambda v$" makes sense
  without any basis. That is why eigenvalues are the same for similar matrices (we prove this in 9.2).

**Example 1 (projections and reflections).** Let $P$ project the plane onto the $x$-axis: $P(x, y) = (x, 0)$. Vectors
on the $x$-axis are kept, so they are eigenvectors with $\lambda = 1$. Vectors on the $y$-axis go to $0$, so they are
eigenvectors with $\lambda = 0$. Now let $R$ reflect in the line $y = x$: $R(x, y) = (y, x)$. Vectors on the mirror
line are kept ($\lambda = 1$); vectors perpendicular to it, like $(1, -1)$, are flipped ($\lambda = -1$). We found
these by thinking about the geometry, without any algebra.

**Example 2 (a rotation has none).** Rotating the plane by $90°$ turns every nonzero vector, so no real vector is
sent to a multiple of itself. A rotation by $90°$ has no real eigenvalues. Keep this in mind; it comes back in 9.5.

**Example 3 (a derivative).** Let $D$ be differentiation acting on the space of all smooth functions
$\mathbb{R} \to \mathbb{R}$. Then

$$
D(e^{\lambda x}) = \lambda e^{\lambda x},
$$

so every real $\lambda$ is an eigenvalue of $D$, with eigenvector (here usually called an **eigenfunction**)
$e^{\lambda x}$. On the space of polynomials of degree at most 3, on the other hand, $D(p) = \lambda p$ forces
$\lambda = 0$: if $\lambda \neq 0$, the leading term of $\lambda p$ has higher degree than anything in $p'$. So there
the only eigenvalue is 0 and the eigenvectors are the nonzero constants. The same operator, on different spaces, has
very different eigenvalues. Chapter 10 makes heavy use of the exponential eigenfunctions.

<figure class="play" data-play="matrix2" data-mode="eigen" data-m="2,1,1,2"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Turn the blue vector v and watch Av (gold). Along the dashed lines Av is just v stretched: those are the eigenvectors.</figcaption></figure>

## 9.2 The characteristic polynomial

Guessing works for reflections. For a general matrix we need a method. The key line is

$$
Av = \lambda v \text{ for some } v \neq 0
\iff (A - \lambda I)v = 0 \text{ for some } v \neq 0
\iff A - \lambda I \text{ is not invertible}
\iff \det(A - \lambda I) = 0 .
$$

The last step is the main theorem of [Chapter 8](08-Determinants.md): a square matrix is invertible exactly when its
determinant is nonzero.

**Definition.** The **characteristic polynomial** of an $n \times n$ matrix $A$ is
$p_A(\lambda) = \det(A - \lambda I)$. Its roots are the eigenvalues of $A$.

Why is it a polynomial, and of what degree? Each entry of $A - \lambda I$ is a number or a number minus $\lambda$.
The permutation formula of Chapter 8 writes the determinant as a sum of products of $n$ entries, one from each row and
column, so each product is a polynomial in $\lambda$ of degree at most $n$. Only the product of the diagonal entries,
$(a_{11} - \lambda)(a_{22} - \lambda)\cdots(a_{nn} - \lambda)$, reaches degree $n$, so

$$
p_A(\lambda) = (-1)^n \lambda^n + (-1)^{n-1}(a_{11} + \cdots + a_{nn})\lambda^{n-1} + \cdots + \det A .
$$

The constant term is $p_A(0) = \det A$. The $\lambda^{n-1}$ coefficient also comes only from the diagonal product,
because any other permutation misses at least two diagonal entries and so has degree at most $n - 2$. The sum
$a_{11} + \cdots + a_{nn}$ of the diagonal entries is the **trace** of $A$, written $\operatorname{tr} A$.
(Some books use $\det(\lambda I - A)$ instead, which differs by the sign $(-1)^n$ and has leading coefficient 1. The
roots are the same.)

**The recipe.**

1. Compute $p_A(\lambda) = \det(A - \lambda I)$.
2. Find its roots $\lambda_1, \lambda_2, \dots$: these are the eigenvalues.
3. For each eigenvalue, solve $(A - \lambda I)v = 0$ by elimination ([Chapter 2](02-Systems-of-Linear-Equations.md)).
   The solutions form the eigenspace.

**Example 4.** Find the eigenvalues and eigenvectors of

$$
A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}.
$$

Step 1:

$$
\det\begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix}
= (4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10 .
$$

Step 2: $\lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5)$, so the eigenvalues are 2 and 5.

Step 3, $\lambda = 5$: $A - 5I = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$. Both rows say $-x + y = 0$, so the
eigenvectors are the multiples of $(1, 1)$.

Step 3, $\lambda = 2$: $A - 2I = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$. Both rows say $2x + y = 0$, so the
eigenvectors are the multiples of $(1, -2)$.

Check: $A(1, 1) = (5, 5)$ and $A(1, -2) = (4 - 2, 2 - 6) = (2, -4) = 2(1, -2)$.

Notice that in Step 3 the matrix $A - \lambda I$ always had dependent rows. It must: we chose $\lambda$ to make its
determinant zero. If elimination on $A - \lambda I$ ever gives only the zero solution, an arithmetic mistake has
been made earlier.

**For 2 by 2 matrices there is a shortcut.** For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$,

$$
p_A(\lambda) = \lambda^2 - (a + d)\lambda + (ad - bc) = \lambda^2 - (\operatorname{tr} A)\lambda + \det A .
$$

In Example 4, $\operatorname{tr} A = 7$ and $\det A = 10$, which gives the polynomial at once.

**Example 5 (a 3 by 3).** Let

$$
A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 3 & 0 \\ 2 & -4 & 2 \end{pmatrix}.
$$

Expanding $\det(A - \lambda I)$ along the second row, which has only one nonzero entry,

$$
p_A(\lambda) = (3 - \lambda)\det\begin{pmatrix} 1 - \lambda & 0 \\ 2 & 2 - \lambda \end{pmatrix}
= (3 - \lambda)(1 - \lambda)(2 - \lambda).
$$

The eigenvalues are 1, 2 and 3. Solving $(A - \lambda I)v = 0$ for each:

- $\lambda = 1$: the second row gives $2y = 0$, the first $2y = 0$, the third $2x - 4y + z = 0$, so $y = 0$, $z = -2x$:
  eigenvector $(1, 0, -2)$.
- $\lambda = 2$: the rows give $-x + 2y = 0$, $y = 0$, $2x - 4y = 0$, so $x = y = 0$ and $z$ is free: eigenvector
  $(0, 0, 1)$.
- $\lambda = 3$: the rows give $-2x + 2y = 0$ and $2x - 4y - z = 0$, so $y = x$, $z = -2x$: eigenvector $(1, 1, -2)$.

Check: $A(1, 1, -2) = (1 + 2, 3, 2 - 4 - 4) = (3, 3, -6) = 3(1, 1, -2)$.

**Example 6 (triangular matrices).** If $A$ is upper or lower triangular, so is $A - \lambda I$, and the determinant
of a triangular matrix is the product of its diagonal. So $p_A(\lambda) = (a_{11} - \lambda)\cdots(a_{nn} - \lambda)$:
**the eigenvalues of a triangular matrix are its diagonal entries.** For example
$\begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$ has eigenvalues 3 and 2 with no computation.

### Trace and determinant from the eigenvalues

Over the complex numbers every polynomial of degree $n$ splits into $n$ linear factors (the fundamental theorem of
algebra, [Algebra, Chapter 12](../algebra/12-The-Fundamental-Theorem-of-Algebra.md)). So

$$
p_A(\lambda) = (\lambda_1 - \lambda)(\lambda_2 - \lambda)\cdots(\lambda_n - \lambda),
$$

where $\lambda_1, \dots, \lambda_n$ are the eigenvalues listed with repetition. The number of times an eigenvalue
$\mu$ appears in this list is its **algebraic multiplicity**.

**Theorem 1.** $\operatorname{tr} A = \lambda_1 + \cdots + \lambda_n$ and $\det A = \lambda_1 \lambda_2 \cdots \lambda_n$.

*Proof.* Put $\lambda = 0$ in the factorised form: $p_A(0) = \lambda_1 \cdots \lambda_n$, and we saw $p_A(0) = \det A$.
Expanding the product, the coefficient of $\lambda^{n-1}$ is $(-1)^{n-1}(\lambda_1 + \cdots + \lambda_n)$; comparing
with the coefficient $(-1)^{n-1}\operatorname{tr} A$ found earlier gives the trace. $\square$

This is a quick check on any computation. In Example 5 the trace is $1 + 3 + 2 = 6 = 1 + 2 + 3$, and the determinant
is $6 = 1 \cdot 2 \cdot 3$.

### Similar matrices share eigenvalues

Recall from [Chapter 6](06-Linear-Maps.md) that $B$ is **similar** to $A$ if $B = S^{-1}AS$ for an invertible $S$:
$A$ and $B$ are the same linear map written in two bases.

**Theorem 2.** Similar matrices have the same characteristic polynomial, so the same eigenvalues with the same
algebraic multiplicities, the same trace and the same determinant.

*Proof.* $S^{-1}AS - \lambda I = S^{-1}(A - \lambda I)S$, because $S^{-1}(\lambda I)S = \lambda I$. Taking determinants
and using $\det(XY) = \det X \det Y$ (Chapter 8),
$\det(S^{-1}(A - \lambda I)S) = \det(S)^{-1}\det(A - \lambda I)\det S = \det(A - \lambda I)$. $\square$

So it makes sense to speak of the characteristic polynomial, the trace and the determinant of a linear map
$T: V \to V$ on a finite-dimensional space: use the matrix in any basis. If $v$ is an eigenvector of $A$, then
$S^{-1}v$ is an eigenvector of $S^{-1}AS$ with the same eigenvalue; the vector's coordinates change, the direction in
space does not.

The converse is false: $I$ and $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ both have characteristic polynomial
$(1 - \lambda)^2$, but the only matrix similar to $I$ is $S^{-1}IS = I$ itself. Chapter 16 says exactly when two
matrices are similar.

### A warning about computing

For a 2 by 2 matrix the characteristic polynomial is the way to go. For large matrices it is not. Finding roots of a
polynomial from its coefficients is numerically very unstable (a tiny change in a coefficient can move a root a long
way), and computing the coefficients is itself costly. Real software finds eigenvalues by iterative methods that
never form $p_A$ at all, such as the QR algorithm of [Chapter 18](18-Numerical-Linear-Algebra.md). Also, by
Abel and Galois ([Algebra, Chapter 20](../algebra/20-Galois-Theory.md)) there is no formula in radicals for the roots of
a general polynomial of degree 5 or more, and every monic polynomial is the characteristic polynomial (up to sign) of
some matrix (its companion matrix, met in [Chapter 16](16-Jordan-Form.md)). So there can be no general formula for eigenvalues of $5 \times 5$
matrices either: they must be computed by approximation.

!!! note "Try it in Python"
    With sympy (exact arithmetic), `Matrix([[1,2,0],[0,3,0],[2,-4,2]]).eigenvects()` returns each eigenvalue with
    its multiplicity and a basis of its eigenspace. For numbers, the standard library has no eigenvalue routine;
    numpy's `numpy.linalg.eig` is the usual tool, and it uses the QR algorithm, not the characteristic polynomial.

## 9.3 Diagonalisation and when it works

Why do we want eigenvectors? Because in a basis of eigenvectors, a matrix becomes diagonal, and diagonal matrices are
as easy as numbers.

Suppose $A$ is $n \times n$ and has $n$ eigenvectors $v_1, \dots, v_n$ that form a basis, with
$Av_i = \lambda_i v_i$. Put them as the columns of a matrix $P = (v_1 \; v_2 \; \cdots \; v_n)$ and let $D$ be the
diagonal matrix with $\lambda_1, \dots, \lambda_n$ on the diagonal. Then, column by column,

$$
AP = (Av_1 \; \cdots \; Av_n) = (\lambda_1 v_1 \; \cdots \; \lambda_n v_n) = PD .
$$

Since the columns of $P$ are a basis, $P$ is invertible, and

$$
A = P D P^{-1}, \qquad D = P^{-1} A P .
$$

**Definition.** $A$ is **diagonalisable** if it is similar to a diagonal matrix: $A = PDP^{-1}$ with $D$ diagonal.

The computation above runs both ways: if $A = PDP^{-1}$, then $AP = PD$ says the columns of $P$ are eigenvectors
with the diagonal entries of $D$ as eigenvalues, and they form a basis because $P$ is invertible. So:

**Theorem 3.** An $n \times n$ matrix is diagonalisable exactly when it has $n$ linearly independent eigenvectors.
The columns of $P$ are those eigenvectors, and the diagonal of $D$ holds the matching eigenvalues, in the same order.

Read $A = PDP^{-1}$ from right to left as a three-step machine: $P^{-1}$ translates a vector into
eigenvector coordinates, $D$ stretches each coordinate by its own eigenvalue, and $P$ translates back.

**Example 7.** For $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ of Example 4,

$$
P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}, \quad
D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}, \quad
P^{-1} = \frac{1}{3}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}.
$$

Check: $PD = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$ and $AP = \begin{pmatrix} 4 - 2 & 4 + 1 \\ 2 - 6 & 2 + 3 \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$.

### Different eigenvalues give independent eigenvectors

When does an $n \times n$ matrix have $n$ independent eigenvectors? The cleanest sufficient condition:

**Theorem 4.** Eigenvectors $v_1, \dots, v_k$ belonging to distinct eigenvalues $\lambda_1, \dots, \lambda_k$ are
linearly independent.

*Proof.* Suppose not. Among all dependence relations, pick one with the fewest nonzero coefficients:

$$
c_1 v_1 + c_2 v_2 + \cdots + c_m v_m = 0,
$$

where (after renumbering) all of $c_1, \dots, c_m$ are nonzero. Then $m \geq 2$, because $c_1 v_1 = 0$ with $c_1 \neq 0$
would force $v_1 = 0$, and eigenvectors are nonzero. Apply $A$ to the relation:

$$
c_1 \lambda_1 v_1 + c_2 \lambda_2 v_2 + \cdots + c_m \lambda_m v_m = 0 .
$$

Subtract $\lambda_m$ times the original relation:

$$
c_1 (\lambda_1 - \lambda_m) v_1 + \cdots + c_{m-1}(\lambda_{m-1} - \lambda_m) v_{m-1} = 0 .
$$

The coefficients $c_i(\lambda_i - \lambda_m)$ for $i < m$ are all nonzero, because the eigenvalues are distinct. So this
is a dependence relation with $m - 1$ nonzero coefficients, fewer than our minimal one. That is a contradiction, so
no dependence relation exists. $\square$

**Corollary.** An $n \times n$ matrix with $n$ distinct eigenvalues is diagonalisable.

*Proof.* Pick one eigenvector for each eigenvalue. By Theorem 4 these $n$ vectors are independent, and $n$ independent
vectors in an $n$-dimensional space form a basis ([Chapter 5](05-Independence-Bases-and-Dimension.md)). $\square$

Examples 4 and 5 had distinct eigenvalues, so they are diagonalisable. A random matrix almost always has distinct
eigenvalues (repeated roots need the discriminant of $p_A$ to vanish exactly), so "most" matrices are diagonalisable
over $\mathbb{C}$. But the matrices that come up in practice are often special, and repeated eigenvalues are common.

### Repeated eigenvalues: two kinds of multiplicity

With repeated eigenvalues, anything can happen.

**Example 8.** $3I = \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$ has the double eigenvalue 3, and every nonzero
vector is an eigenvector. It is diagonal already.

**Example 9 (a shear).** $J = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ also has the double eigenvalue 1. But
$J - I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ has kernel spanned by $(1, 0)$ only. There is just one line of
eigenvectors, so no basis of eigenvectors, and $J$ is not diagonalisable. Geometrically, $J$ slides each horizontal
line sideways by its height; only the $x$-axis is left in place.

**Definition.** The **geometric multiplicity** of an eigenvalue $\mu$ is $\dim E_\mu = \dim\ker(A - \mu I)$, the
number of independent eigenvectors for $\mu$.

In Example 8 the eigenvalue 3 has algebraic multiplicity 2 and geometric multiplicity 2; in Example 9 the eigenvalue 1
has algebraic multiplicity 2 but geometric multiplicity 1.

**Theorem 5.** For every eigenvalue $\mu$, $1 \leq$ geometric multiplicity $\leq$ algebraic multiplicity.

*Proof.* The lower bound holds because $\mu$ is an eigenvalue, so $E_\mu \neq 0$. For the upper bound let
$g = \dim E_\mu$, choose a basis $v_1, \dots, v_g$ of $E_\mu$, and extend it to a basis $v_1, \dots, v_n$ of the whole
space. In this basis the first $g$ basis vectors are sent to $\mu$ times themselves, so the matrix of $A$ has the
block form

$$
B = \begin{pmatrix} \mu I_g & X \\ 0 & Y \end{pmatrix},
$$

for some blocks $X$ and $Y$. $B$ is similar to $A$, so by Theorem 2 they have the same characteristic polynomial. The
determinant of a block upper triangular matrix is the product of the determinants of the diagonal blocks (Chapter 8),
so $p_A(\lambda) = p_B(\lambda) = (\mu - \lambda)^g \det(Y - \lambda I)$. Hence $(\mu - \lambda)^g$ divides
$p_A$, and the algebraic multiplicity is at least $g$. $\square$

**Theorem 6 (the diagonalisation test).** Over a field in which $p_A$ splits into linear factors (for example
$\mathbb{C}$), $A$ is diagonalisable exactly when, for every eigenvalue, the geometric multiplicity equals the
algebraic multiplicity.

*Proof.* Let the distinct eigenvalues be $\mu_1, \dots, \mu_k$ with algebraic multiplicities $a_i$ (adding to $n$)
and geometric multiplicities $g_i \leq a_i$. Put together bases of all the eigenspaces. These $g_1 + \cdots + g_k$
vectors are independent. (A dependence relation would give $w_1 + \cdots + w_k = 0$ with each $w_i \in E_{\mu_i}$; the
nonzero $w_i$ are eigenvectors for distinct eigenvalues, so by Theorem 4 there are none, and then each $w_i = 0$ is a
relation inside one basis, so its coefficients vanish.) If every $g_i = a_i$ we have $n$ independent eigenvectors and
$A$ is diagonalisable. Conversely, any eigenvector lies in some $E_{\mu_i}$, so a basis of eigenvectors has at most
$g_i$ vectors from each $E_{\mu_i}$ and at most $g_1 + \cdots + g_k$ in total; $n$ of them requires
$\sum g_i = n = \sum a_i$, and since each $g_i \leq a_i$ this forces $g_i = a_i$ for every $i$. $\square$

What do non-diagonalisable matrices look like in general? The answer, Jordan normal form, is
[Chapter 16](16-Jordan-Form.md). And there is one large, important class that is always diagonalisable, even with an
orthonormal basis of eigenvectors: real symmetric matrices. That is the spectral theorem of
[Chapter 14](14-The-Spectral-Theorem.md), and it is the reason the matrix $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$
of 9.1 had perpendicular eigenvectors.

## 9.4 Powers of matrices, and Fibonacci by eigenvalues

Here is the first big payoff. If $A = PDP^{-1}$ then

$$
A^2 = PDP^{-1}PDP^{-1} = PD^2P^{-1},
$$

because the inner $P^{-1}P$ cancels. In the same way $A^k = PD^kP^{-1}$ for every $k \geq 1$, and $D^k$ is diagonal with
entries $\lambda_i^k$. One power of numbers replaces $k$ matrix multiplications.

**Example 10.** For $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ with $P$, $D$, $P^{-1}$ from Example 7,

$$
A^k = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}
\begin{pmatrix} 2^k & 0 \\ 0 & 5^k \end{pmatrix}
\frac{1}{3}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}
= \frac{1}{3}\begin{pmatrix} 2^k + 2 \cdot 5^k & 5^k - 2^k \\ 2 \cdot 5^k - 2 \cdot 2^k & 2 \cdot 2^k + 5^k \end{pmatrix}.
$$

Check with $k = 1$: $\frac{1}{3}(2 + 10,\; 5 - 2,\; 10 - 4,\; 4 + 5) = (4, 1, 2, 3)$. With $k = 5$:
$2^5 = 32$, $5^5 = 3125$, so the top-left entry is $(32 + 6250)/3 = 2094$, and the whole matrix is
$\begin{pmatrix} 2094 & 1031 \\ 2062 & 1063 \end{pmatrix}$, which is what five multiplications give.

The formula also says what $A^k$ looks like for large $k$: the $5^k$ terms swamp the $2^k$ terms, so
$A^k \approx \frac{5^k}{3}\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$. Every column of this limit is a multiple of
$(1, 1)$, the eigenvector for the largest eigenvalue. This is a general phenomenon, and it is the idea behind the
power method of [Chapter 18](18-Numerical-Linear-Algebra.md): apply $A$ many times to almost any vector, and it lines
up with the eigenvector of the eigenvalue of largest absolute value (if there is a single such eigenvalue).

**Why.** Write $x_0 = c_1 v_1 + \cdots + c_n v_n$ in an eigenvector basis. Then

$$
A^k x_0 = c_1 \lambda_1^k v_1 + c_2 \lambda_2^k v_2 + \cdots + c_n \lambda_n^k v_n .
$$

Each eigen-component evolves on its own, multiplied by its own eigenvalue at each step. If $|\lambda_1|$ is strictly
bigger than the others and $c_1 \neq 0$, then dividing by $\lambda_1^k$ leaves $c_1 v_1$ plus terms that shrink like
$|\lambda_i / \lambda_1|^k$. This one formula drives everything that follows in this section and in 9.6.

### Linear recurrences

A sequence defined by a rule like $a_{k+1} = 5a_k - 6a_{k-1}$ is a **linear recurrence**. Stack two consecutive terms
into a vector $u_k = (a_{k+1}, a_k)$. Then

$$
u_k = \begin{pmatrix} a_{k+1} \\ a_k \end{pmatrix} = \begin{pmatrix} 5 & -6 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} a_k \\ a_{k-1} \end{pmatrix} = M u_{k-1},
$$

so $u_k = M^k u_0$, and the recurrence has become a matrix power. The characteristic polynomial of $M$ is
$\lambda^2 - 5\lambda + 6$, which is the recurrence's own "characteristic equation" from
[Combinatorics, Chapter 6](../combinatorics/06-Recurrences.md). Now we see where that equation comes from.

### Fibonacci

The Fibonacci numbers are $F_0 = 0$, $F_1 = 1$ and $F_{k+1} = F_k + F_{k-1}$: $0, 1, 1, 2, 3, 5, 8, 13, \dots$ With
$u_k = (F_{k+1}, F_k)$,

$$
u_k = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} u_{k-1}, \qquad u_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}.
$$

Call the matrix $F$. In fact $F^k = \begin{pmatrix} F_{k+1} & F_k \\ F_k & F_{k-1} \end{pmatrix}$ (induction on
$k$), so $F^{10} = \begin{pmatrix} 89 & 55 \\ 55 & 34 \end{pmatrix}$.

**Eigenvalues.** $\operatorname{tr} F = 1$ and $\det F = -1$, so $p_F(\lambda) = \lambda^2 - \lambda - 1$ with roots

$$
\varphi = \frac{1 + \sqrt 5}{2} \approx 1.618, \qquad \psi = \frac{1 - \sqrt 5}{2} \approx -0.618 .
$$

$\varphi$ is the golden ratio. Note $\varphi + \psi = 1$, $\varphi\psi = -1$ and $\varphi - \psi = \sqrt 5$.

**Eigenvectors.** For an eigenvalue $\lambda$, $F - \lambda I = \begin{pmatrix} 1 - \lambda & 1 \\ 1 & -\lambda \end{pmatrix}$,
and the second row says $x = \lambda y$. So $(\lambda, 1)$ is an eigenvector: $(\varphi, 1)$ and $(\psi, 1)$.

**Expand the starting vector.** We need $u_0 = (1, 0) = c_1(\varphi, 1) + c_2(\psi, 1)$. The second coordinate gives
$c_2 = -c_1$, the first $c_1(\varphi - \psi) = 1$, so $c_1 = 1/\sqrt 5$ and $c_2 = -1/\sqrt 5$.

**Apply $F^k$.**

$$
u_k = \frac{1}{\sqrt 5}\left(\varphi^k \begin{pmatrix} \varphi \\ 1 \end{pmatrix} - \psi^k \begin{pmatrix} \psi \\ 1 \end{pmatrix}\right).
$$

The second coordinate is $F_k$:

$$
F_k = \frac{\varphi^k - \psi^k}{\sqrt 5} = \frac{1}{\sqrt 5}\left(\left(\frac{1 + \sqrt 5}{2}\right)^k - \left(\frac{1 - \sqrt 5}{2}\right)^k\right).
$$

This is **Binet's formula**. It is strange at first sight: a formula full of $\sqrt 5$ that always produces whole
numbers. Check: $k = 1$ gives $(\varphi - \psi)/\sqrt 5 = 1$; $k = 2$ gives $(\varphi^2 - \psi^2)/\sqrt 5 = (\varphi + \psi)(\varphi - \psi)/\sqrt 5 = 1$.

Since $|\psi| < 1$, the term $\psi^k/\sqrt 5$ is less than $1/2$ in absolute value for every $k \geq 0$ and shrinks
fast. So $F_k$ is simply **the whole number nearest to $\varphi^k/\sqrt 5$**. For $k = 30$, $\varphi^{30}/\sqrt 5 \approx 832040.0000002$,
and indeed $F_{30} = 832040$. And $F_{k+1}/F_k \to \varphi$: the ratio of consecutive Fibonacci numbers tends to the
golden ratio, because $u_k$ lines up with the dominant eigenvector $(\varphi, 1)$.

```python
from math import sqrt
phi, psi = (1 + sqrt(5)) / 2, (1 - sqrt(5)) / 2
fib = [0, 1]
for _ in range(40):
    fib.append(fib[-1] + fib[-2])
print(all(round(phi**k / sqrt(5)) == fib[k] for k in range(41)))   # True
print(fib[30], phi**30 / sqrt(5))     # 832040 832040.0000002...
```

(In floating point the rounding trick stays correct only up to $k = 70$; it first fails at $k = 71$, where $\varphi^k$ outgrows the 53 bits
of a double. Exact integers do not have this problem; [Chapter 18](18-Numerical-Linear-Algebra.md) is about such
limits.)

**The general recipe for a linear recurrence** of order 2 with distinct roots $r_1 \neq r_2$ of its characteristic
equation: $a_k = c_1 r_1^k + c_2 r_2^k$, with $c_1, c_2$ fixed by the first two terms. Eigenvalues explain why: these
are the eigen-components of $u_0$ evolving separately. When the roots coincide the companion matrix is not
diagonalisable (it is like Example 9), and the solution picks up a factor of $k$: $a_k = (c_1 + c_2 k) r^k$. Chapter 16
explains the extra $k$ through Jordan blocks.

## 9.5 Complex eigenvalues and rotations

*Level: intermediate to advanced.*

The rotation by angle $\theta$,

$$
R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix},
$$

has trace $2\cos\theta$ and determinant $\cos^2\theta + \sin^2\theta = 1$, so

$$
p(\lambda) = \lambda^2 - 2\cos\theta\,\lambda + 1, \qquad
\lambda = \cos\theta \pm \sqrt{\cos^2\theta - 1} = \cos\theta \pm i\sin\theta = e^{\pm i\theta}.
$$

Unless $\theta$ is a multiple of $\pi$ (rotation by $0$ or $180°$), the eigenvalues are not real. That matches the
picture: a genuine rotation turns every real vector. But over the complex numbers the eigenvectors exist. For
$\lambda = e^{i\theta}$, $R_\theta - \lambda I = \begin{pmatrix} -i\sin\theta & -\sin\theta \\ \sin\theta & -i\sin\theta \end{pmatrix}$,
whose first row says $-i x - y = 0$, so $v = (1, -i)$. Check:
$R_\theta(1, -i) = (\cos\theta + i\sin\theta,\; \sin\theta - i\cos\theta) = e^{i\theta}(1, -i)$, since
$-i \cdot e^{i\theta} = \sin\theta - i\cos\theta$.

So we should allow complex eigenvalues and complex eigenvectors, even for real matrices. Everything in 9.2 to 9.4 works
word for word over $\mathbb{C}$ (the vector spaces of [Chapter 4](04-Vector-Spaces.md) may have any field of scalars),
and over $\mathbb{C}$ every characteristic polynomial has roots, so every square matrix has at least one eigenvalue.

### Complex eigenvalues come in conjugate pairs

If $A$ is real and $Av = \lambda v$, take complex conjugates of every entry: $A\bar v = \bar\lambda\bar v$, because
$\bar A = A$. So non-real eigenvalues of a real matrix come in pairs $\lambda, \bar\lambda$, with conjugate
eigenvectors. (This is also why real polynomials have conjugate pairs of roots.)

A consequence: a real $n \times n$ matrix with $n$ odd always has at least one **real** eigenvalue, because the
non-real ones pair off. Every rotation of 3D space must therefore fix some line, its axis. We prove that properly in
[Chapter 13](13-Orthogonal-Matrices-and-Rotations.md).

### What a complex eigenvalue means for a real matrix

**Example 11.** Let

$$
A = \begin{pmatrix} 1 & -2 \\ 1 & 3 \end{pmatrix}.
$$

Here $\operatorname{tr} A = 4$ and $\det A = 3 + 2 = 5$, so $p_A(\lambda) = \lambda^2 - 4\lambda + 5$ and
$\lambda = 2 \pm i$. For $\lambda = 2 + i$, $A - \lambda I = \begin{pmatrix} -1 - i & -2 \\ 1 & 1 - i \end{pmatrix}$;
the second row gives $x = -(1 - i)y$, so with $y = 1$, $v = (-1 + i, 1)$.

What does $A$ do to the real plane? Split $v$ into real and imaginary parts: $v = x + iy$ with $x = (-1, 1)$,
$y = (1, 0)$.

**Theorem 7.** Let $A$ be a real $2 \times 2$ matrix with eigenvalue $\lambda = a + bi$, $b \neq 0$, and eigenvector
$v = x + iy$ ($x, y$ real). Then $x$ and $y$ are independent, and with $P = (x \; y)$,

$$
P^{-1}AP = \begin{pmatrix} a & b \\ -b & a \end{pmatrix} = r\begin{pmatrix} \cos\phi & \sin\phi \\ -\sin\phi & \cos\phi \end{pmatrix},
$$

where $r = |\lambda| = \sqrt{a^2 + b^2}$ and $\phi$ is the angle with $\cos\phi = a/r$, $\sin\phi = b/r$.

*Proof.* Expand $A(x + iy) = (a + bi)(x + iy) = (ax - by) + i(bx + ay)$. Since $A$, $x$, $y$ are real, compare real
and imaginary parts: $Ax = ax - by$ and $Ay = bx + ay$. These two equations say exactly that
$A(x \; y) = (x \; y)\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$. It remains to see that $x$ and $y$ are independent,
so that $P$ is invertible. If not, both are real multiples of one real vector $w \neq 0$ (they cannot both be zero, as
$v \neq 0$), so $v = (s + it)w$ for some complex number $s + it \neq 0$, and $Aw = \lambda w$ with $w$ real. But then
$\lambda w = Aw$ is real, which forces $\lambda$ real, a contradiction. $\square$

The matrix $\begin{pmatrix} a & b \\ -b & a \end{pmatrix}$ is $r$ times a rotation (by the angle $-\phi$, clockwise,
in the basis $x, y$). So **a real $2 \times 2$ matrix with complex eigenvalues is, in a suitable basis, a rotation
combined with a scaling by $|\lambda|$.** The basis $x, y$ need not be perpendicular, so in the standard picture the
motion is along ellipses rather than circles, but it goes round and round.

For Example 11, $P = \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix}$ and one checks
$P^{-1}AP = \begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$, which is $\sqrt 5$ times a rotation by
$\arctan(1/2) \approx 26.6°$. Repeated application of $A$ spirals outwards, the size growing by a factor
$\sqrt 5 \approx 2.24$ per step. If $|\lambda| < 1$ the spiral would go in towards 0; if $|\lambda| = 1$ points would go
round forever on a closed ellipse. That trichotomy is the heart of the stability theory in
[Chapter 10](10-Applications-of-Eigenvalues.md).

**Powers with complex eigenvalues** work exactly as before: $A^k = PD^kP^{-1}$ over $\mathbb{C}$, and the answer is
real even though the steps are not. With the real form, $A^k = P\, r^k R_{-k\phi}\, P^{-1}$: $k$ steps means
scaling by $r^k$ and turning by $k$ times the angle, which is de Moivre's theorem dressed as a matrix.

**A Mars note.** An orbiter's attitude (which way it points) is described by a rotation matrix, and a rotation of 3D
space has eigenvalues $1, e^{i\theta}, e^{-i\theta}$: the eigenvalue 1 belongs to the rotation axis, and $\theta$ is
the angle turned about it. Reading the axis and angle off as eigen-data is exactly how attitude software often
summarises a rotation. [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md) develops this.

## 9.6 Markov chains and the steady state, and PageRank

*Level: intermediate to advanced.*

A **Markov chain** moves between a finite list of states at each tick of a clock, choosing the next state at random
with probabilities that depend only on the current state. [Probability, Chapter 13](../probability/13-Markov-Chains.md)
develops the theory; here we look at the linear algebra.

### The matrix

Take a toy weather model with two states, dry (D) and wet (W): after a dry day the next is dry with probability 0.8,
after a wet day the next is wet with probability 0.6. Let $x_k = (d_k, w_k)$ be the probabilities that day $k$ is dry
or wet. By the law of total probability,

$$
d_{k+1} = 0.8\,d_k + 0.4\,w_k, \qquad w_{k+1} = 0.2\,d_k + 0.6\,w_k,
$$

that is, $x_{k+1} = Px_k$ with

$$
P = \begin{pmatrix} 0.8 & 0.4 \\ 0.2 & 0.6 \end{pmatrix}.
$$

Column $j$ of $P$ lists where state $j$ goes next, so **each column adds up to 1** and every entry is at least 0.
Such a matrix is **column-stochastic**. (Probability books, including ours, usually write the transpose: a
row-stochastic matrix acting on row vectors from the right, $x_{k+1}^{\mathsf T} = x_k^{\mathsf T}P^{\mathsf T}$. The
mathematics is identical; just remember which way round a given book writes it.)

Then $x_k = P^k x_0$, and the long-run question "what fraction of days are dry?" is a question about $P^k$ for large
$k$, which is a question about eigenvalues.

### Eigenvalues of the weather chain

$\operatorname{tr} P = 1.4$ and $\det P = 0.48 - 0.08 = 0.4$, so $p_P(\lambda) = \lambda^2 - 1.4\lambda + 0.4 = (\lambda - 1)(\lambda - 0.4)$.

- $\lambda = 1$: $P - I = \begin{pmatrix} -0.2 & 0.4 \\ 0.2 & -0.4 \end{pmatrix}$, so $d = 2w$: eigenvector $(2, 1)$. Scaled
  to add up to 1, it is $\pi = (2/3, 1/3)$.
- $\lambda = 0.4$: $P - 0.4I = \begin{pmatrix} 0.4 & 0.4 \\ 0.2 & 0.2 \end{pmatrix}$: eigenvector $(1, -1)$.

Start on a wet day, $x_0 = (0, 1) = \pi - \tfrac{2}{3}(1, -1)$. Then

$$
x_k = \pi - \frac{2}{3}(0.4)^k\begin{pmatrix} 1 \\ -1 \end{pmatrix}
= \begin{pmatrix} 2/3 - \tfrac{2}{3}(0.4)^k \\ 1/3 + \tfrac{2}{3}(0.4)^k \end{pmatrix}.
$$

Check: $x_1 = (2/3 - 0.2667, 1/3 + 0.2667) = (0.4, 0.6)$, which is the second column of $P$, as it must be. And
$x_5 = (0.65984, 0.34016)$. The distance from $\pi$ shrinks by the factor 0.4 every day, and $x_k \to \pi$ whatever
the starting distribution. In the long run, two days in three are dry.

The limit $\pi$ is a **steady state** or **stationary distribution**: a probability vector with $P\pi = \pi$. In other
words, an eigenvector for the eigenvalue 1, scaled to have entries adding to 1.

### Why every Markov chain has a steady state

**Theorem 8.** Let $P$ be an $n \times n$ column-stochastic matrix.

1. $1$ is an eigenvalue of $P$.
2. Every eigenvalue $\lambda$ of $P$ (real or complex) has $|\lambda| \leq 1$.

*Proof.* (1) Let $\mathbf 1 = (1, 1, \dots, 1)$. "Each column adds to 1" says $\mathbf 1^{\mathsf T}P = \mathbf 1^{\mathsf T}$,
that is $P^{\mathsf T}\mathbf 1 = \mathbf 1$. So 1 is an eigenvalue of $P^{\mathsf T}$. But $P$ and $P^{\mathsf T}$ have the same
characteristic polynomial, since $\det(P^{\mathsf T} - \lambda I) = \det((P - \lambda I)^{\mathsf T}) = \det(P - \lambda I)$.
So 1 is an eigenvalue of $P$ too.

(2) Again it is enough to treat $P^{\mathsf T}$, which has the same eigenvalues. Its rows are nonnegative and add to 1.
Let $P^{\mathsf T}w = \lambda w$ with $w \neq 0$, and pick $i$ with $|w_i|$ as large as possible. Row $i$ of the equation
says $\lambda w_i = \sum_j p_{ji} w_j$, so

$$
|\lambda|\,|w_i| \leq \sum_j p_{ji}|w_j| \leq \sum_j p_{ji}|w_i| = |w_i| .
$$

Divide by $|w_i| > 0$ to get $|\lambda| \leq 1$. $\square$

Part (1) gives an eigenvector for eigenvalue 1, but does it have nonnegative entries, so that it can be scaled into a
probability vector? Yes, always, though the proof is harder: it is part of the Perron-Frobenius theory of nonnegative matrices
([Chapter 10](10-Applications-of-Eigenvalues.md), section 10.5, states the positive and irreducible cases; Meyer's
book in the further reading proves the general one), and Probability, Chapter 13 gives a probabilistic argument. Two further questions remain: is the steady state unique, and do
we converge to it? Both can fail:

- $P = I$ (nobody ever moves): every probability vector is a steady state.
- $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (always swap): the eigenvalues are $1$ and $-1$. The steady state
  $(1/2, 1/2)$ is unique, but starting from $(1, 0)$ the chain alternates $(1, 0), (0, 1), (1, 0), \dots$ forever. The
  eigenvalue $-1$ has absolute value 1 and never dies away.

The good case is when 1 is a simple eigenvalue and every other eigenvalue has $|\lambda| < 1$. Then the expansion
$x_k = c_1\pi + \sum_{i \geq 2} c_i\lambda_i^k v_i$ (if $P$ is diagonalisable; Chapter 16 handles the rest) shows
$x_k \to c_1\pi$, and $c_1 = 1$ because $P$ preserves the total $\mathbf 1^{\mathsf T}x$, which is 1 for every
probability vector, while the other eigenvectors have total 0 (apply $\mathbf 1^{\mathsf T}$ to $Pv_i = \lambda_i v_i$:
$\mathbf 1^{\mathsf T}v_i = \lambda_i\mathbf 1^{\mathsf T}v_i$ with $\lambda_i \neq 1$). The speed of convergence is set by
the second-largest $|\lambda_i|$: in the weather chain, 0.4.

**Theorem 9.** If every entry of the column-stochastic matrix $P$ is strictly positive, then the eigenvalue 1 is
simple, it has an eigenvector with all entries positive, every other eigenvalue has $|\lambda| < 1$, and so $P^kx_0$
converges to the unique steady state for every probability vector $x_0$.

This is the special case of the Perron-Frobenius theorem that we state in
[Chapter 10](10-Applications-of-Eigenvalues.md); the $2 \times 2$ case is Exercise 9 below. The same conclusion holds
if some power $P^m$ has all entries positive (the chain is "regular": irreducible and aperiodic).

### PageRank, honestly

In 1998 Sergey Brin and Lawrence Page, then graduate students at Stanford, described a search engine whose ranking
used the link structure of the web. Their **PageRank** of a page is the steady state of a Markov chain: a "random
surfer" who, at each step, with probability $d$ clicks a random link on the current page, and with probability
$1 - d$ gets bored and jumps to a page chosen uniformly at random. Their paper suggests $d = 0.85$.

Take four pages A, B, C, D, with links A → B and C, B → C, C → A, and D → A, B and C. The **link matrix** $L$ has, in
column $j$, the value $1/(\text{number of links out of } j)$ in each row that $j$ links to:

$$
L = \begin{pmatrix} 0 & 0 & 1 & 1/3 \\ 1/2 & 0 & 0 & 1/3 \\ 1/2 & 1 & 0 & 1/3 \\ 0 & 0 & 0 & 0 \end{pmatrix}.
$$

The **Google matrix** is $G = dL + \frac{1 - d}{n}J$, where $J$ is the all-ones matrix and $n = 4$. Every entry of $G$
is at least $(1 - d)/n > 0$ and its columns add to 1, so Theorem 9 applies: there is exactly one steady state, and
the PageRank vector is that eigenvector of $G$ for eigenvalue 1. Solving $(G - I)x = 0$ exactly and scaling,

$$
x \approx (0.373,\; 0.207,\; 0.382,\; 0.0375) \quad \text{for A, B, C, D}.
$$

C ranks first (three pages link to it), A is a close second (it gets *all* of C's vote, because C has only one
outgoing link), B is third, and D, to which nobody links, gets only the "boredom" share $(1 - d)/n = 0.0375$.

```python
d, n = 0.85, 4
L = [[0, 0, 1, 1/3], [1/2, 0, 0, 1/3], [1/2, 1, 0, 1/3], [0, 0, 0, 0]]
G = [[d * L[i][j] + (1 - d) / n for j in range(n)] for i in range(n)]
x = [1 / n] * n
for _ in range(100):                               # power iteration
    x = [sum(G[i][j] * x[j] for j in range(n)) for i in range(n)]
print([round(t, 4) for t in x])                    # [0.3732, 0.2068, 0.3825, 0.0375]
```

This is the power method again: start anywhere and multiply by $G$. For the real web, $n$ is in the billions, so
nobody solves $(G - I)x = 0$ by elimination. But $L$ is extremely **sparse** (each page links to few others), so
computing $Gx = dLx + \frac{1 - d}{n}(\mathbf 1^{\mathsf T}x)\mathbf 1$ is cheap, and the error shrinks at least
like $d^k$: it can be shown that every eigenvalue of $G$ other than 1 has $|\lambda| \leq d$. In our example the other
eigenvalues are $0$ and $-0.425 \pm 0.425i$, of absolute value about 0.60.

Some honest caveats.

- **Dangling pages.** A page with no outgoing links gives a zero column in $L$, and then $G$ is not stochastic. The
  usual fix replaces such a column by the uniform vector $(1/n, \dots, 1/n)$, as if the surfer jumped at random.
- **Not the whole story.** PageRank is a clean piece of mathematics, and it mattered in the early success of Google.
  But how any search engine ranks pages today is not public and uses a great many signals; nobody outside knows what
  weight, if any, this exact eigenvector still has.
- **Not new as mathematics.** Ranking by a dominant eigenvector had been used before, for example for ranking
  sports teams and in measures of influence in citation and social networks. What was new was applying it at the
  scale of the web.

## A short history

The ideas are older than the words. In the eighteenth century Euler studied the principal axes of a rotating rigid
body, and Lagrange and Laplace studied the slow ("secular") changes in planetary orbits; both problems lead to what
we now call eigenvalue problems for symmetric matrices, although there were no matrices yet, only systems of linear
equations. In 1829 Cauchy proved that the relevant roots are always real, for symmetric systems, the first step to the
spectral theorem of [Chapter 14](14-The-Spectral-Theorem.md). The word "matrix" is Sylvester's, from 1850, and Cayley
set up matrix algebra in 1858. The German *Eigenwert* (eigenvalue) and *Eigenfunktion* became standard through
Hilbert's work on integral equations in the first decade of the twentieth century, and English kept the German half,
giving "eigenvalue" alongside older words like "characteristic root" and "latent root". Markov introduced his chains
in 1906 to show that the law of large numbers can hold for dependent random variables. PageRank is from 1998.

## Check yourself

??? question "1. Find the eigenvalues and eigenvectors of $\begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$."

    The matrix is triangular, so the eigenvalues are its diagonal entries, 3 and 2.

    For $\lambda = 3$: $A - 3I = \begin{pmatrix} 0 & 1 \\ 0 & -1 \end{pmatrix}$ gives $y = 0$, eigenvector $(1, 0)$.

    For $\lambda = 2$: $A - 2I = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ gives $x + y = 0$, eigenvector $(1, -1)$.

    Check: $A(1, -1) = (3 - 1, -2) = (2, -2) = 2(1, -1)$.

??? question "2. Show that $v = (1, 1, 1)$ is an eigenvector of $A = \begin{pmatrix} 2 & 2 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 2 \end{pmatrix}$. Then find the other eigenvalues without computing the characteristic polynomial, and decide whether $A$ is diagonalisable."

    $Av = (5, 5, 5) = 5v$, so $v$ is an eigenvector with eigenvalue 5.

    The trace is $2 + 3 + 2 = 7$ and the determinant is
    $2(6 - 2) - 2(2 - 1) + 1(2 - 3) = 8 - 2 - 1 = 5$. By Theorem 1, the other two eigenvalues $\lambda_2, \lambda_3$
    satisfy $5 + \lambda_2 + \lambda_3 = 7$ and $5\lambda_2\lambda_3 = 5$, so $\lambda_2 + \lambda_3 = 2$ and
    $\lambda_2\lambda_3 = 1$: both are 1.

    For $\lambda = 1$, $A - I = \begin{pmatrix} 1 & 2 & 1 \\ 1 & 2 & 1 \\ 1 & 2 & 1 \end{pmatrix}$ has rank 1, so its
    kernel has dimension 2 (for example $(-2, 1, 0)$ and $(-1, 0, 1)$). Geometric multiplicity 2 equals algebraic
    multiplicity 2, so $A$ is diagonalisable (Theorem 6).

??? question "3. Diagonalise $A = \begin{pmatrix} 5 & -2 \\ 4 & -1 \end{pmatrix}$ and find a formula for $A^k$. Use it to write down $A^{10}$."

    $\operatorname{tr} A = 4$, $\det A = -5 + 8 = 3$, so $p_A(\lambda) = \lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3)$.

    $\lambda = 3$: $A - 3I = \begin{pmatrix} 2 & -2 \\ 4 & -4 \end{pmatrix}$, eigenvector $(1, 1)$.
    $\lambda = 1$: $A - I = \begin{pmatrix} 4 & -2 \\ 4 & -2 \end{pmatrix}$, eigenvector $(1, 2)$.

    $P = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$, $D = \operatorname{diag}(3, 1)$,
    $P^{-1} = \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$ (since $\det P = 1$). Then

    $A^k = PD^kP^{-1} = \begin{pmatrix} 2 \cdot 3^k - 1 & 1 - 3^k \\ 2 \cdot 3^k - 2 & 2 - 3^k \end{pmatrix}$.

    Check $k = 1$: $(6 - 1, 1 - 3, 6 - 2, 2 - 3) = (5, -2, 4, -1)$. With $3^{10} = 59049$:
    $A^{10} = \begin{pmatrix} 118097 & -59048 \\ 118096 & -59047 \end{pmatrix}$.

??? question "4. Show that $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ is not similar to any diagonal matrix, by a direct argument rather than by counting eigenvectors."

    If $J = PDP^{-1}$ with $D$ diagonal, then $D$ has the same eigenvalues as $J$, namely $1$ and $1$, so $D = I$.
    But then $J = PIP^{-1} = I$, which is false. So $J$ is not diagonalisable.

??? question "5. Find the eigenvalues of $B = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$ and describe $B$ geometrically. What is $B^8$?"

    $\operatorname{tr} B = 2$, $\det B = 2$, so $\lambda^2 - 2\lambda + 2 = 0$ and $\lambda = 1 \pm i$, with
    $|\lambda| = \sqrt 2$ and argument $\pm 45°$.

    In fact $B = \sqrt 2\begin{pmatrix} \cos 45° & \sin 45° \\ -\sin 45° & \cos 45° \end{pmatrix}$, which is $\sqrt 2$
    times the rotation by $45°$ clockwise. So $B^8$ is $(\sqrt 2)^8 = 16$ times a rotation by $360°$:
    $B^8 = 16I$. (Check: $B^2 = \begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix}$, $B^4 = \begin{pmatrix} -4 & 0 \\ 0 & -4 \end{pmatrix}$, $B^8 = 16I$.)

??? question "6. Suppose $Av = \lambda v$ with $v \neq 0$. Show that $v$ is an eigenvector of $A^k$, of $A + cI$ and, if $A$ is invertible, of $A^{-1}$. What are the eigenvalues?"

    $A^2v = A(\lambda v) = \lambda Av = \lambda^2 v$, and by induction $A^kv = \lambda^kv$.

    $(A + cI)v = \lambda v + cv = (\lambda + c)v$.

    If $A$ is invertible then $\lambda \neq 0$ (otherwise $Av = 0$ with $v \neq 0$). Apply $A^{-1}$ to $Av = \lambda v$:
    $v = \lambda A^{-1}v$, so $A^{-1}v = \lambda^{-1}v$.

    The eigenvalues are $\lambda^k$, $\lambda + c$ and $1/\lambda$, with the same eigenvector.

??? question "7. Solve the recurrence $a_{k+1} = 5a_k - 6a_{k-1}$ with $a_0 = 0$, $a_1 = 1$ using eigenvalues."

    The matrix $M = \begin{pmatrix} 5 & -6 \\ 1 & 0 \end{pmatrix}$ has $p_M(\lambda) = \lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3)$.
    Eigenvectors are $(\lambda, 1)$ (from the second row $x = \lambda y$): $(3, 1)$ and $(2, 1)$.

    $u_0 = (a_1, a_0) = (1, 0) = (3, 1) - (2, 1)$. So $u_k = 3^k(3, 1) - 2^k(2, 1)$, and the second coordinate is
    $a_k = 3^k - 2^k$.

    Check: $a_2 = 5 \cdot 1 - 0 = 5 = 9 - 4$; $a_3 = 25 - 6 = 19 = 27 - 8$.

??? question "8. Let $N = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$. Find its eigenvalues and eigenvectors. More generally, show that if $N^m = 0$ for some $m$, then 0 is the only eigenvalue of $N$, and $N$ is diagonalisable only if $N = 0$."

    $N$ is triangular with zero diagonal, so its only eigenvalue is 0. $Nv = (v_2, v_3, 0) = 0$ forces
    $v_2 = v_3 = 0$, so the eigenvectors are the multiples of $(1, 0, 0)$: geometric multiplicity 1, algebraic 3.

    In general, if $Nv = \lambda v$ with $v \neq 0$ then $0 = N^mv = \lambda^mv$, so $\lambda = 0$. If $N$ were
    diagonalisable, $N = PDP^{-1}$ with $D$ having only zeros on its diagonal, so $D = 0$ and $N = 0$.

??? question "9. Let $P = \begin{pmatrix} 1 - a & b \\ a & 1 - b \end{pmatrix}$ with $0 < a, b < 1$ (a general two-state chain with all transitions possible). Find the eigenvalues and the steady state, and show that $P^kx_0$ converges to it for every probability vector $x_0$. Then do $a = 0.3$, $b = 0.2$."

    The trace is $2 - a - b$ and the determinant is $(1 - a)(1 - b) - ab = 1 - a - b$. So
    $p(\lambda) = \lambda^2 - (2 - a - b)\lambda + (1 - a - b) = (\lambda - 1)(\lambda - (1 - a - b))$.

    The eigenvalues are 1 and $\mu = 1 - a - b$. Since $0 < a + b < 2$, $-1 < \mu < 1$, so $|\mu| < 1$.

    For $\lambda = 1$: $P - I = \begin{pmatrix} -a & b \\ a & -b \end{pmatrix}$ gives $ax = by$, so $(b, a)$; the steady
    state is $\pi = \left(\frac{b}{a + b}, \frac{a}{a + b}\right)$. For $\mu$: eigenvector $(1, -1)$.

    Any probability vector is $x_0 = \pi + c(1, -1)$ for some $c$ (the difference $x_0 - \pi$ has entries adding to 0),
    so $P^kx_0 = \pi + c\mu^k(1, -1) \to \pi$.

    With $a = 0.3$, $b = 0.2$: $\pi = (0.4, 0.6)$, $\mu = 0.5$. Check: $0.7 \cdot 0.4 + 0.2 \cdot 0.6 = 0.4$.

??? question "10. Three web pages link in a cycle: A → B, B → C, C → A. Find the PageRank vector for any damping factor $d$."

    $L$ is the cyclic permutation matrix, and $G = dL + \frac{1 - d}{3}J$. The uniform vector $u = (1/3, 1/3, 1/3)$
    satisfies $Lu = u$ (a permutation just reorders equal entries) and $Ju = (1, 1, 1)$, so
    $Gu = du + \frac{1 - d}{3}(1, 1, 1) = du + (1 - d)u = u$. By Theorem 9 the steady state is unique, so the PageRank
    is $(1/3, 1/3, 1/3)$ for every $d$. By symmetry, no page is more important than another.

??? question "11. Prove that a real $n \times n$ matrix with $n$ odd has a real eigenvalue. Give a $2 \times 2$ real matrix with no real eigenvalue."

    $p_A(\lambda)$ is a real polynomial of odd degree $n$ with leading term $(-1)^n\lambda^n = -\lambda^n$. So
    $p_A(\lambda) \to -\infty$ as $\lambda \to +\infty$ and $p_A(\lambda) \to +\infty$ as $\lambda \to -\infty$. By the
    intermediate value theorem it has a real root, which is a real eigenvalue.

    (Alternatively: non-real roots of a real polynomial come in conjugate pairs, so an odd number of roots cannot all
    be non-real.)

    For $n = 2$, the rotation $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ has $p(\lambda) = \lambda^2 + 1$, with no
    real roots.

??? question "12. Prove that $AB$ and $BA$ have the same eigenvalues, for square $A$ and $B$ of the same size. (Hint: treat $\lambda \neq 0$ and $\lambda = 0$ separately.)"

    Let $\lambda \neq 0$ be an eigenvalue of $AB$, with $ABv = \lambda v$, $v \neq 0$. Put $w = Bv$. Then
    $BAw = B(ABv) = \lambda Bv = \lambda w$, and $w \neq 0$ because $Aw = ABv = \lambda v \neq 0$. So $\lambda$ is an
    eigenvalue of $BA$. By symmetry the nonzero eigenvalues agree.

    For $\lambda = 0$: 0 is an eigenvalue of $AB$ iff $\det(AB) = 0$ iff $\det A\det B = 0$ iff $\det(BA) = 0$ iff 0 is
    an eigenvalue of $BA$.

    (In fact $AB$ and $BA$ have the same characteristic polynomial, though they need not be similar: try
    $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, where
    $AB = B \neq 0$ but $BA = 0$.)

## What you learned

- An eigenvector of $A$ is a nonzero $v$ with $Av = \lambda v$; the eigenvalues are the roots of
  $\det(A - \lambda I)$, and each eigenspace is $\ker(A - \lambda I)$.
- The trace is the sum and the determinant the product of the eigenvalues; similar matrices share the characteristic
  polynomial.
- $A = PDP^{-1}$ exactly when there is a basis of eigenvectors. Eigenvectors for distinct eigenvalues are independent,
  so $n$ distinct eigenvalues guarantee this; with repeats, compare geometric and algebraic multiplicity.
- Powers become easy: $A^k = PD^kP^{-1}$, and each eigen-component grows like $\lambda^k$. This gives Binet's formula for
  Fibonacci numbers and solves every linear recurrence with distinct roots.
- A real matrix with complex eigenvalues $a \pm bi$ acts, in a suitable basis, as a rotation times a scaling by
  $\sqrt{a^2 + b^2}$.
- A stochastic matrix always has the eigenvalue 1 and no eigenvalue larger in absolute value; with positive entries
  the steady state is unique and attracts everything. PageRank is such a steady state, found by power iteration.

**Next:** [Chapter 10](10-Applications-of-Eigenvalues.md), where eigenvalues solve differential equations, explain
normal modes and stability, and predict the growth of populations.

## Further reading

- G. Strang, *Introduction to Linear Algebra*, 5th edition, Wellesley-Cambridge Press, 2016, chapter 6.
- S. Axler, *Linear Algebra Done Right*, 4th edition, Springer, 2024, chapter 5 (eigenvalues without determinants).
- K. Hoffman and R. Kunze, *Linear Algebra*, 2nd edition, Prentice-Hall, 1971, chapter 6.
- R. A. Horn and C. R. Johnson, *Matrix Analysis*, 2nd edition, Cambridge University Press, 2013, chapters 1 and 8.
- C. D. Meyer, *Matrix Analysis and Applied Linear Algebra*, SIAM, 2000, chapters 7 and 8.
- S. Brin and L. Page, "The Anatomy of a Large-Scale Hypertextual Web Search Engine", *Computer Networks and ISDN
  Systems* 30, 1998.
- T. H. Haveliwala and S. D. Kamvar, "The Second Eigenvalue of the Google Matrix", Stanford University technical
  report, 2003.
- A. N. Langville and C. D. Meyer, *Google's PageRank and Beyond: The Science of Search Engine Rankings*, Princeton
  University Press, 2006.
- On this site: [Probability, Chapter 13: Markov chains](../probability/13-Markov-Chains.md),
  [Combinatorics, Chapter 6: Recurrences](../combinatorics/06-Recurrences.md),
  [Algebra, Chapter 9: Complex numbers](../algebra/09-Complex-Numbers.md), the gentle
  [random walks and Markov chains lesson](../../topics/probability/level-8/06-random-walks-markov.md), and the
  U of T guides [MAT240H1 Unit 10: Eigenvalues and diagonalization](../../uoft/MAT240H1/unit10.md) and
  [MAT240H1 Unit 6: Change of basis and similarity](../../uoft/MAT240H1/unit06.md).
- Other books on the shelf: [Probability](../probability/index.md), [Combinatorics](../combinatorics/index.md),
  [Algebra](../algebra/index.md).
