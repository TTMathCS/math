# 20. Where linear algebra goes

*Linear algebra looks finished: every finite-dimensional theorem in this book has a proof, and computers solve the
problems. But the subject does not stop at finite dimension, and some of its simplest-sounding questions are still
open. What happens when the space has infinitely many dimensions, as spaces of functions do? Which theorems survive,
and what new behaviour appears? How does linear algebra describe symmetry? What do the eigenvalues of a large random
matrix look like? And what is still unknown? This last chapter is a guided tour: Hilbert and Banach spaces, operators
and their spectra, representations of groups, random matrices, and three open problems: the exponent of matrix
multiplication, the Hadamard conjecture and the invariant subspace problem.*

!!! abstract "In this chapter"
    **You will learn:**

    - normed, Banach and Hilbert spaces; why completeness matters; the projection theorem and the Riesz representation theorem (with proofs)
    - why the unit ball of an infinite-dimensional space is not compact, and what replaces "finite dimension"
    - bounded operators and their spectra; the shift operator, which has no eigenvalues but a whole disc of spectrum; compact operators and their spectral theorem
    - representations of groups, Schur's lemma, and characters, with $S_3$ worked out
    - Wigner's semicircle law for random matrices, its moments (Catalan numbers), and the link to the Riemann zeta function
    - three open problems: the exponent $\omega$, the Hadamard conjecture (smallest open order 668), and the invariant subspace problem

    **You need:** the whole book, especially inner products ([Chapter 11](11-Inner-Product-Spaces.md)), the spectral theorem
    ([Chapter 14](14-The-Spectral-Theorem.md)), duality ([Chapter 17](17-Duality-and-Multilinear-Algebra.md)) and fast matrix
    multiplication ([Chapter 18](18-Numerical-Linear-Algebra.md), 18.6). Some analysis helps for 20.1 and 20.2: limits,
    Cauchy sequences and completeness ([Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md) and
    [Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md)). This chapter states more than it proves; where a proof
    is given it is complete, and where it is not, the text says so and names where to find it.

    **Levels:** everything here is expert in content but written as a survey. 20.1 and 20.2 are graduate analysis; 20.3
    is graduate algebra; 20.4 is graduate probability; 20.5 is the research frontier, stated so that anyone who has read the
    book can follow it.

## 20.1 Infinite-dimensional spaces: Hilbert and Banach

*Level: expert.* In [Chapter 11](11-Inner-Product-Spaces.md), functions on $[-\pi, \pi]$ were treated as vectors and their
Fourier coefficients as projections onto an orthonormal family $1, \cos x, \sin x, \cos 2x, \ldots$. That family is
infinite. Finite-dimensional linear algebra says a vector is a finite combination of basis vectors, but a Fourier series
is an infinite sum. To make sense of it you need a notion of **convergence**, and the right setting is a vector space with
a norm in which limits behave.

### Norms and completeness

A **norm** on a real or complex vector space $V$ is a function $\lVert\cdot\rVert$ with $\lVert v\rVert > 0$ for
$v \ne 0$, $\lVert av\rVert = |a|\,\lVert v\rVert$ and $\lVert u + v\rVert \le \lVert u\rVert + \lVert v\rVert$. A sequence
$v_k$ is **Cauchy** if its terms get arbitrarily close to each other: for every $\epsilon > 0$, $\lVert v_k - v_l\rVert < \epsilon$
for all large $k, l$. The space is **complete** if every Cauchy sequence converges to a limit *in the space*.

**Definitions.** A complete normed space is a **Banach space**. An inner product space that is complete for the norm
$\lVert v\rVert = \sqrt{\langle v, v\rangle}$ is a **Hilbert space**.

Every finite-dimensional normed space is complete (it is essentially $\mathbb{R}^n$ or $\mathbb{C}^n$, and all norms on it
are equivalent), so completeness is invisible until the dimension is infinite. Then it is everything. Examples:

- $\ell^2$, the space of sequences $(x_1, x_2, \ldots)$ with $\sum|x_i|^2 < \infty$, with
  $\langle x, y\rangle = \sum\bar x_iy_i$. A Hilbert space; the Cauchy-Schwarz inequality guarantees the sum converges. It is
  the prototype: every separable infinite-dimensional Hilbert space is isomorphic to it (shown below).
- $L^2[a, b]$, square-integrable functions with $\langle f, g\rangle = \int\bar fg$. A Hilbert space, but only if
  "integrable" means Lebesgue integrable and functions equal almost everywhere are identified; with the Riemann integral
  the space is not complete. Completeness was one of the main reasons the Lebesgue integral was needed
  ([Calculus, Chapter 21](../calculus/21-Lebesgue-Integration-and-Fourier-Series.md)).
- $C[0, 1]$, continuous functions with the **sup norm** $\lVert f\rVert_\infty = \max|f(x)|$. A Banach space (a uniform
  limit of continuous functions is continuous: [Calculus, Chapter 19](../calculus/19-Uniform-Convergence.md)), but not a
  Hilbert space.
- $\ell^p$ for $1 \le p \le \infty$, and $L^p$: Banach spaces, Hilbert only for $p = 2$.

How can you tell that $C[0, 1]$ with the sup norm is not a Hilbert space under any inner product? A norm comes from an
inner product if and only if it satisfies the **parallelogram law**

$$
\lVert u + v\rVert^2 + \lVert u - v\rVert^2 = 2\lVert u\rVert^2 + 2\lVert v\rVert^2
$$

(necessity is a two-line expansion; sufficiency is a theorem of Jordan and von Neumann, 1935, which recovers the inner
product by polarisation). Take $u = 1$ and $v = x$ in $C[0, 1]$: $\lVert u + v\rVert_\infty = 2$, $\lVert u - v\rVert_\infty = 1$,
$\lVert u\rVert_\infty = \lVert v\rVert_\infty = 1$. The left side is $5$, the right side $4$. So no inner product gives this
norm: the sup norm has no notion of angle.

### What breaks: the unit ball

**Theorem 20.1.** In an infinite-dimensional Hilbert space, the closed unit ball is not compact: there is a sequence of
unit vectors with no convergent subsequence.

*Proof.* Gram-Schmidt ([Chapter 11](11-Inner-Product-Spaces.md)) applied to any infinite independent sequence gives an
infinite orthonormal sequence $e_1, e_2, \ldots$. For $k \ne l$, $\lVert e_k - e_l\rVert^2 = 1 + 1 = 2$, so no two terms are
closer than $\sqrt2$, and no subsequence is Cauchy. $\square$

(In fact Riesz's lemma shows the same for every infinite-dimensional normed space.) In $\mathbb{R}^n$, compactness of the
unit ball (Heine-Borel) is what makes "a continuous function on the sphere attains its maximum", the step behind the
spectral theorem and the SVD. In infinite dimension that step fails, and much of functional analysis is about finding
substitutes: compact operators (20.2), and weaker topologies in which the ball is compact again (the Banach-Alaoglu theorem).

### What survives: projections and Riesz

The key theorem of Hilbert space geometry is that nearest points exist.

**Theorem 20.2 (projection theorem).** Let $M$ be a closed subspace of a Hilbert space $H$ and $x \in H$. There is a unique
$m_0 \in M$ nearest to $x$, and $x - m_0$ is orthogonal to $M$. Hence $H = M \oplus M^\perp$.

*Proof.* Let $d = \inf_{m \in M}\lVert x - m\rVert$ and choose $m_k \in M$ with $\lVert x - m_k\rVert \to d$. Apply the
parallelogram law to $x - m_k$ and $x - m_l$:

$$
\lVert m_k - m_l\rVert^2 = 2\lVert x - m_k\rVert^2 + 2\lVert x - m_l\rVert^2 - 4\Bigl\lVert x - \tfrac{m_k + m_l}{2}\Bigr\rVert^2.
$$

The midpoint lies in $M$, so the last norm is at least $d$, and the right side is at most
$2\lVert x - m_k\rVert^2 + 2\lVert x - m_l\rVert^2 - 4d^2 \to 0$. So $(m_k)$ is Cauchy; by completeness it converges, and
since $M$ is closed the limit $m_0$ is in $M$, with $\lVert x - m_0\rVert = d$. Uniqueness: two nearest points $m_0, m_0'$
would give, by the same identity, $\lVert m_0 - m_0'\rVert^2 \le 4d^2 - 4d^2 = 0$. Orthogonality: for $m \in M$ and real
$t$, $\lVert x - m_0 - tm\rVert^2 \ge d^2$ expands to $-2t\operatorname{Re}\langle x - m_0, m\rangle + t^2\lVert m\rVert^2 \ge 0$
for all $t$, forcing $\operatorname{Re}\langle x - m_0, m\rangle = 0$; replacing $m$ by $im$ handles the imaginary part. $\square$

Notice where completeness was used: without it the minimising sequence would have nowhere to converge to. This is the
infinite-dimensional version of least squares ([Chapter 12](12-Projections-and-Least-Squares.md)).

**Theorem 20.3 (Riesz representation theorem).** Every **continuous** linear functional $\varphi$ on a Hilbert space $H$ has
the form $\varphi(x) = \langle u, x\rangle$ for exactly one $u \in H$, and $\lVert\varphi\rVert = \lVert u\rVert$.

*Proof.* If $\varphi = 0$, take $u = 0$. Otherwise $M = \ker\varphi$ is a closed subspace (closed because $\varphi$ is
continuous) and not all of $H$, so by Theorem 20.2 there is a nonzero $z \perp M$. For any $x$, the vector
$\varphi(x)z - \varphi(z)x$ is in $\ker\varphi = M$, so it is orthogonal to $z$:
$\varphi(x)\lVert z\rVert^2 - \varphi(z)\langle z, x\rangle = 0$. Hence $\varphi(x) = \langle u, x\rangle$ with
$u = \overline{\varphi(z)}\,z/\lVert z\rVert^2$. Uniqueness: if $\langle u - u', x\rangle = 0$ for all $x$, take $x = u - u'$.
The norm statement is Cauchy-Schwarz, with equality at $x = u$. $\square$

So for Hilbert spaces the continuous dual $H^*$ is $H$ again, just as in finite dimension
([Chapter 17](17-Duality-and-Multilinear-Algebra.md), 17.2), and the double dual problem of Chapter 17 disappears once you
keep only continuous functionals. For Banach spaces the dual can be genuinely different: the dual of $\ell^1$ is $\ell^\infty$,
and the dual of $\ell^\infty$ is much larger than $\ell^1$. Spaces equal to their double dual (via the natural map) are
called **reflexive**; $\ell^p$ is reflexive for $1 < p < \infty$, but $\ell^1$ is not.

### Orthonormal bases

In a Hilbert space, an **orthonormal basis** is a maximal orthonormal family $(e_i)$. It is *not* a basis in the sense of
[Chapter 5](05-Independence-Bases-and-Dimension.md) (finite combinations); instead every $x$ is an infinite sum
$x = \sum\langle e_i, x\rangle e_i$, converging in norm, with **Parseval's identity**
$\lVert x\rVert^2 = \sum|\langle e_i, x\rangle|^2$. If the basis is countable (the space is **separable**), the map
$x \mapsto (\langle e_i, x\rangle)_i$ is an isomorphism of $H$ onto $\ell^2$ preserving inner products. So up to isomorphism
there is exactly one separable infinite-dimensional Hilbert space. For $L^2[-\pi, \pi]$, the functions $e^{inx}/\sqrt{2\pi}$,
$n \in \mathbb{Z}$, form an orthonormal basis: that is the $L^2$ theory of Fourier series, and Parseval's identity there gives,
for example, $\sum 1/n^2 = \pi^2/6$ ([Calculus, Chapter 21](../calculus/21-Lebesgue-Integration-and-Fourier-Series.md)).

Bases in the Chapter 5 sense, called **Hamel bases**, still exist in every vector space (by Zorn's lemma), but in an
infinite-dimensional Banach space they are always uncountable and never explicit, which is why analysts rarely use them.

## 20.2 Operators and spectra

*Level: expert.* A linear map between normed spaces is **bounded** if $\lVert Tx\rVert \le C\lVert x\rVert$ for some
constant $C$; the least such $C$ is the operator norm $\lVert T\rVert$ ([Chapter 18](18-Numerical-Linear-Algebra.md), 18.2).
Bounded is the same as continuous. In finite dimension every linear map is bounded; in infinite dimension many natural
ones are not (differentiation on $C^1$ functions with the sup norm: $\sin(nx)$ has norm 1 but derivative of norm $n$).

### The spectrum

For a matrix, $\lambda$ is an eigenvalue exactly when $A - \lambda I$ is not invertible, because for a square matrix
"injective" and "surjective" are the same (rank-nullity). In infinite dimension they are not, and the two notions split.

**Definition.** For a bounded operator $T$ on a Banach space, the **spectrum** $\sigma(T)$ is the set of scalars $\lambda$
for which $T - \lambda I$ has no bounded inverse. The eigenvalues (where $T - \lambda I$ is not injective) form part of it,
the **point spectrum**.

**The shift operator.** On $\ell^2$, let $S(x_1, x_2, x_3, \ldots) = (0, x_1, x_2, \ldots)$, the **right shift**. It
preserves length, $\lVert Sx\rVert = \lVert x\rVert$, so it is injective; but it is not onto (nothing maps to $(1, 0, 0, \ldots)$).
An isometry that is not onto: impossible in finite dimension.

**Theorem 20.4.** The right shift $S$ has no eigenvalues, yet $\sigma(S)$ is the whole closed unit disc
$\{|\lambda| \le 1\}$.

*Proof.* *No eigenvalues:* if $Sx = \lambda x$, compare entries: $0 = \lambda x_1$, $x_1 = \lambda x_2$, $x_2 = \lambda x_3$, and so on.
If $\lambda = 0$ the equation reads $Sx = 0$, so $x = 0$. If $\lambda \ne 0$, then $x_1 = 0$, then $x_2 = x_1/\lambda = 0$, and every
$x_k = 0$.

*Spectrum inside the disc:* if $|\lambda| > 1$, then $S - \lambda I = -\lambda(I - S/\lambda)$, and
$\lVert S/\lambda\rVert = 1/|\lambda| < 1$. For any operator $T$ with $\lVert T\rVert < 1$ the **Neumann series**
$\sum_{k \ge 0}T^k$ converges (its norms are dominated by a geometric series, and the space of bounded operators is
complete) and equals $(I - T)^{-1}$, since $(I - T)\sum_{k=0}^{N}T^k = I - T^{N+1} \to I$. So $\lambda \notin \sigma(S)$.

*The whole disc:* the adjoint of $S$ is the **left shift** $S^*(x_1, x_2, \ldots) = (x_2, x_3, \ldots)$ (check:
$\langle Sx, y\rangle = \sum_k \bar x_k y_{k+1} = \langle x, S^*y\rangle$). For $|\lambda| < 1$ the vector
$v = (1, \lambda, \lambda^2, \ldots)$ is in $\ell^2$ (a geometric series) and $S^*v = (\lambda, \lambda^2, \ldots) = \lambda v$. So every
$\lambda$ in the open disc is an eigenvalue of $S^*$. An operator and its adjoint have conjugate spectra (if $S - \mu I$ has
bounded inverse $R$, then $S^* - \bar\mu I$ has bounded inverse $R^*$), so the open disc lies in $\sigma(S)$. The spectrum is
always a closed set (operators near an invertible one are invertible, by the Neumann series again), so it contains the
closed disc. $\square$

The left shift is the mirror image: it is onto but not injective, with a disc full of eigenvalues. Together they show the
two halves of "invertible" coming apart.

**Theorem 20.5 (Gelfand).** For a bounded operator on a nonzero complex Banach space, $\sigma(T)$ is a nonempty compact set,
and the **spectral radius** $\max\{|\lambda| : \lambda \in \sigma(T)\}$ equals $\lim_{k\to\infty}\lVert T^k\rVert^{1/k}$.

The proof uses complex analysis: if the spectrum were empty, $\lambda \mapsto (T - \lambda I)^{-1}$ would be a bounded entire
function, hence constant by Liouville's theorem, which is absurd ([Calculus, Chapter 22](../calculus/22-Where-Analysis-Goes.md),
22.1, for Liouville). Nonemptiness is the infinite-dimensional replacement for "every complex matrix has an eigenvalue". For
matrices, the spectral radius formula is the reason the iteration of [Chapter 18](18-Numerical-Linear-Algebra.md), 18.3,
converges at rate $\rho(M)$ even when $\lVert M\rVert \ge 1$.

**A multiplication operator.** On $L^2[0, 1]$ let $(Mf)(x) = x f(x)$. It is bounded, self-adjoint, $\lVert M\rVert = 1$. It
has no eigenvalues: $xf(x) = \lambda f(x)$ forces $f = 0$ except at the single point $x = \lambda$, so $f = 0$ in $L^2$. But its
spectrum is $[0, 1]$: for $\lambda \notin [0, 1]$, multiplication by $1/(x - \lambda)$ is a bounded inverse, while for
$\lambda \in [0, 1]$ the only candidate inverse, multiplication by $1/(x - \lambda)$, is unbounded. This is the **position
operator** of quantum mechanics on a segment, and it shows why physicists needed more than eigenvectors: a particle with a
definite position would need an eigenvector, and there is none in $L^2$.

### Spectral theorems in infinite dimension

**Compact operators.** An operator is **compact** if it maps the unit ball to a set whose closure is compact. Compact
operators are limits (in operator norm) of finite-rank operators on Hilbert space, and they behave most like matrices.
Integral operators $(Kf)(x) = \int k(x, y)f(y)\,dy$ with continuous kernel $k$ on $[0,1]^2$ are compact.

**Theorem 20.6 (spectral theorem for compact self-adjoint operators).** If $K$ is compact and self-adjoint on a Hilbert
space $H$, then $H$ has an orthonormal basis of eigenvectors of $K$; the eigenvalues are real, and the nonzero ones are
finite in number or form a sequence tending to 0, each with finite multiplicity.

*Idea of the proof.* As for symmetric matrices ([Chapter 14](14-The-Spectral-Theorem.md)), maximise
$|\langle x, Kx\rangle|$ over unit vectors. Compactness is exactly what guarantees that the maximum is attained (a
maximising sequence has a subsequence along which $Kx_k$ converges), and the maximiser is an eigenvector. Then restrict to
its orthogonal complement, which $K$ preserves, and repeat. The full proof is in any functional analysis text, for example
Reed and Simon, volume 1.

This is the theorem that turned Fourier's method into a general theory: the solutions of the vibrating string, of the heat
equation and of the Schrödinger equation in a box come from eigenfunctions of (the inverses of) differential operators,
which are compact. It was the problem of integral equations that led Hilbert, around 1904-1910, to the spaces now named
after him.

For general bounded self-adjoint operators, which may have continuous spectrum like $M$ above, the **spectral theorem**
says that every such operator is unitarily equivalent to a multiplication operator $f \mapsto gf$ on some $L^2$ space (von
Neumann and others, around 1930). So the multiplication operator is not a curiosity; it is the general case.
"Diagonalisable" becomes "is multiplication by a function".

**A recent solution.** Not all problems here are old. The **Kadison-Singer problem** (1959), about whether certain states
on an algebra of operators extend uniquely, turned out to be equivalent to statements about partitioning sums of rank-one
matrices into pieces with small norm, and was solved in 2013 by Adam Marcus, Daniel Spielman and Nikhil Srivastava (published
2015), using "interlacing families" of characteristic polynomials: finite-dimensional linear algebra, cleverly used,
settling an infinite-dimensional question.

## 20.3 Representation theory

*Level: expert.* Symmetry is described by groups ([Algebra book, Chapter 13](../algebra/13-Groups.md)). Linear algebra
enters when a group **acts by matrices**.

**Definition.** A **representation** of a group $G$ on a vector space $V$ is a homomorphism $\rho : G \to GL(V)$, that is, an
invertible linear map $\rho(g)$ for each $g$, with $\rho(gh) = \rho(g)\rho(h)$. A subspace $W$ is **invariant** if
$\rho(g)W \subseteq W$ for all $g$, and $\rho$ is **irreducible** if the only invariant subspaces are $0$ and $V$.

**Example: the cyclic group.** $G = \mathbb{Z}/3$ acts on $\mathbb{C}^3$ by cyclically shifting coordinates: the generator
acts by $P(x_1, x_2, x_3) = (x_3, x_1, x_2)$. Since $P^3 = I$, its eigenvalues are cube roots of unity $1, \zeta, \zeta^2$
($\zeta = e^{2\pi i/3}$), with eigenvectors $(1, 1, 1)$, $(1, \zeta^2, \zeta)$, $(1, \zeta, \zeta^2)$ (check the second:
$P(1, \zeta^2, \zeta) = (\zeta, 1, \zeta^2) = \zeta(1, \zeta^2, \zeta)$, using $\zeta^3 = 1$). Each eigenline is invariant, so
$\mathbb{C}^3$ splits into three one-dimensional representations. The change of basis to these eigenvectors is the **discrete
Fourier transform**. Fourier analysis, in this view, is the representation theory of cyclic groups (or of the circle, for
Fourier series), and the fast Fourier transform is an algorithm for this change of basis.

**Theorem 20.7 (Maschke, 1898).** Every finite-dimensional complex representation of a finite group is a direct sum of
irreducible representations.

*Proof idea.* Average any inner product over the group, $\langle u, v\rangle_G = \sum_g\langle\rho(g)u, \rho(g)v\rangle$; then
every $\rho(g)$ is unitary for $\langle\cdot,\cdot\rangle_G$, and the orthogonal complement of an invariant subspace is
invariant. Split repeatedly. (The full proof is in the [Algebra book, 21.4](../algebra/21-Modules-and-Representations.md).)
$\square$

**Theorem 20.8 (Schur's lemma).** Let $\rho$ and $\rho'$ be irreducible complex representations of $G$ on finite-dimensional
$V$, $V'$, and let $T : V \to V'$ be linear with $T\rho(g) = \rho'(g)T$ for all $g$. Then $T = 0$ or $T$ is an isomorphism; and
if $V = V'$, $\rho = \rho'$, then $T$ is a scalar multiple of the identity.

*Proof.* The kernel of $T$ is invariant (if $Tv = 0$ then $T\rho(g)v = \rho'(g)Tv = 0$), so it is $0$ or $V$; the image is
invariant in $V'$, so it is $0$ or $V'$. Either $T = 0$, or $T$ is injective and onto. For $V = V'$: $T$ has an eigenvalue
$\lambda$ (over $\mathbb{C}$), and $T - \lambda I$ also commutes with every $\rho(g)$ but is not injective, so by the first part
it is 0. $\square$

Schur's lemma is the engine of the theory. From it one proves that the **characters** $\chi_\rho(g) = \operatorname{tr}\rho(g)$
of the irreducible representations are orthonormal for $\langle\chi, \psi\rangle = \frac{1}{|G|}\sum_g\overline{\chi(g)}\psi(g)$, that
there are as many irreducible representations as conjugacy classes, and that the squares of their dimensions add up to
$|G|$ (Frobenius, 1896, and the [Algebra book, 21.5](../algebra/21-Modules-and-Representations.md)).

**Worked example 1: $S_3$.** The symmetric group on 3 letters has 6 elements in 3 conjugacy classes: the identity, the three
transpositions, the two 3-cycles. So it has 3 irreducible representations, with $d_1^2 + d_2^2 + d_3^2 = 6$, forcing dimensions
$1, 1, 2$. The **character table**:

| | identity (1) | transpositions (3) | 3-cycles (2) |
| --- | --- | --- | --- |
| trivial | 1 | 1 | 1 |
| sign | 1 | $-1$ | 1 |
| standard (dim 2) | 2 | 0 | $-1$ |

The standard representation is $S_3$ acting on the plane $x_1 + x_2 + x_3 = 0$ in $\mathbb{R}^3$ by permuting coordinates: the
symmetries of an equilateral triangle, rotations by $120°$ having trace $2\cos 120° = -1$ and reflections trace 0. Check
orthonormality: for the standard character, $\frac16(1 \cdot 4 + 3 \cdot 0 + 2 \cdot 1) = 1$; for standard against sign,
$\frac16(2 + 0 - 2) = 0$. The permutation representation of $S_3$ on all of $\mathbb{C}^3$ has character $(3, 1, 0)$, which is
trivial plus standard: the invariant line $(1, 1, 1)$ plus the plane orthogonal to it.

**Where it goes.** Representations of the rotation group $SO(3)$ organise the spherical harmonics and the orbitals of the
hydrogen atom; representations of $SU(2)$ give spin; particle physics classifies particles by representations of symmetry
groups. Representations of $GL_n$ and $S_n$ are tied together by Schur-Weyl duality; representations over finite fields
(modular representation theory) are much harder and full of open problems; and the Langlands programme
([Algebra book, Chapter 22](../algebra/22-Where-Algebra-Goes.md), 22.5) conjectures a vast dictionary between representations
and number theory. Through all of it the basic tools are those of this book: invariant subspaces, eigenvalues, traces and
tensor products.

## 20.4 Random matrices

*Level: expert.* Take a large symmetric matrix whose entries are random. Its eigenvalues are random too. You might expect
chaos; instead, as the size grows, they settle into a precise shape.

**The model.** For each $N$, let $W$ be an $N \times N$ real symmetric matrix whose entries on and above the diagonal are
independent normal random variables, scaled so that the off-diagonal entries have variance $1/N$ (this is essentially the
**Gaussian orthogonal ensemble**, GOE; the scaling keeps the eigenvalues of order 1).

**Theorem 20.9 (Wigner's semicircle law, 1955 and 1958).** As $N \to \infty$, the fraction of eigenvalues of $W$ in an
interval $[a, b]$ converges (with probability 1) to

$$
\int_a^b\frac{1}{2\pi}\sqrt{4 - x^2}\,dx,
$$

with the integrand taken as 0 outside $[-2, 2]$. The histogram of eigenvalues looks like a semicircle (an ellipse, with these
axes).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 180" role="img" aria-label="Wigner's semicircle law: a histogram of eigenvalue proportions in eight bins from minus 2 to 2 under the smooth semicircle density curve, highest at 0 and falling to zero at plus and minus 2">
  <rect x="40" y="95.6" width="45" height="54.4" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="85" y="57" width="45" height="93" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="130" y="39.1" width="45" height="110.9" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="175" y="31.3" width="45" height="118.7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="220" y="31.3" width="45" height="118.7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="265" y="39.1" width="45" height="110.9" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="310" y="57" width="45" height="93" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="355" y="95.6" width="45" height="54.4" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="3" points="40.0,150.0 51.2,108.2 62.5,91.9 73.8,80.0 85.0,70.6 96.2,62.9 107.5,56.3 118.8,50.8 130.0,46.1 141.2,42.1 152.5,38.8 163.8,36.0 175.0,33.8 186.2,32.1 197.5,30.9 208.8,30.2 220.0,30.0 231.2,30.2 242.5,30.9 253.8,32.1 265.0,33.8 276.2,36.0 287.5,38.8 298.8,42.1 310.0,46.1 321.2,50.8 332.5,56.3 343.8,62.9 355.0,70.6 366.2,80.0 377.5,91.9 388.8,108.2 400.0,150.0"/>
  <line x1="20" y1="150" x2="420" y2="150" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="168" font-size="12" text-anchor="middle" fill="currentColor">−2</text>
  <text x="220" y="168" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="400" y="168" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="300" y="20" font-size="12" fill="currentColor">semicircle density</text>
</svg>
</div>

**The moments, and a proof sketch.** The cleanest route is through moments. The $k$-th moment of the eigenvalue distribution
is $\frac1N\sum_i\lambda_i^k = \frac1N\operatorname{tr}(W^k)$, the trace of a power: pure linear algebra. Expanding,

$$
\frac1N\operatorname{tr}(W^k) = \frac1N\sum_{i_1, \ldots, i_k}W_{i_1i_2}W_{i_2i_3}\cdots W_{i_ki_1},
$$

a sum over closed walks $i_1 \to i_2 \to \cdots \to i_k \to i_1$ on $N$ vertices. Take expectations. Because the entries have
mean 0 and are independent, a walk contributes only if it uses every edge at least twice. Counting powers of $N$ shows that,
as $N \to \infty$, the only walks that matter use each edge exactly twice and trace out a **tree**; for $k = 2m$ their number,
after the normalisation, is the number of rooted plane trees with $m$ edges, the **Catalan number**
$C_m = \frac{1}{m+1}\binom{2m}{m}$ ([Combinatorics, Chapter 8](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md)). Odd
moments tend to 0. And the semicircle's moments are exactly these:

$$
\int_{-2}^{2}x^{2m}\,\frac{\sqrt{4 - x^2}}{2\pi}\,dx = C_m: \quad 1, 2, 5, 14, \ldots
$$

Since the semicircle is determined by its moments, convergence of moments gives the law (making "with probability 1"
rigorous needs a variance estimate). Full details: Anderson, Guionnet and Zeitouni, Chapter 2.

**Try it in Python** (standard library only; a few seconds):

```python
import random, math
N = 150
W = [[0.0] * N for _ in range(N)]
for i in range(N):
    for j in range(i, N):
        W[i][j] = W[j][i] = random.gauss(0, 1) / math.sqrt(N)

def mul(A, B):
    Bt = list(zip(*B))
    return [[sum(a * b for a, b in zip(row, col)) for col in Bt] for row in A]

W2 = mul(W, W)
W4 = mul(W2, W2)
W6 = mul(W4, W2)
for k, M in ((2, W2), (4, W4), (6, W6)):
    print(k, sum(M[i][i] for i in range(N)) / N)   # close to 1, 2, 5
```

One run with $N = 200$ gave $0.996$, $1.995$ and $4.99$: the Catalan numbers 1, 2, 5, without computing a single eigenvalue.

**Universality and repulsion.** The semicircle does not depend on the entries being normal: any independent entries with mean
0 and variance $1/N$ give it (a universality theorem). Finer statistics are universal too, and they are where random matrices
become surprising. Eigenvalues **repel**: the chance of two being very close is small, roughly proportional to the gap
$s$ for small $s$ in the real symmetric case (Wigner's surmise for the spacing density is $\frac{\pi s}{2}e^{-\pi s^2/4}$ after
normalising the mean spacing to 1). Wigner introduced random matrices in the 1950s to model the energy levels of heavy atomic
nuclei, whose spacings show this repulsion. The largest eigenvalue sits near 2 with fluctuations of order $N^{-2/3}$, described
by the **Tracy-Widom distribution** (1994), which has since appeared in growth models, random permutations (the longest
increasing subsequence, Baik, Deift and Johansson, 1999) and elsewhere.

**Zeta zeros.** In 1972 Hugh Montgomery computed the pair correlation of the zeros of the Riemann zeta function (under the
Riemann hypothesis, and for a restricted range) and, in a conversation at Princeton, Freeman Dyson recognised the formula as
the pair correlation of eigenvalues of random Hermitian matrices (the Gaussian unitary ensemble). Andrew Odlyzko's computations
of zeros high on the critical line in the 1980s showed the agreement strikingly. Nobody knows why; it suggests, without
proving anything, that the zeros might be eigenvalues of some unknown self-adjoint operator (the Hilbert-Pólya idea)
([Number Theory, Chapter 14](../number-theory/14-The-Zeta-Function-and-the-Prime-Number-Theorem.md)).

**In statistics.** For a sample covariance matrix of $n$ observations of $p$ variables with $p/n \to \gamma$, the eigenvalues
spread out according to the Marchenko-Pastur law (1967) even when the true covariance is the identity, so a large eigenvalue
in high-dimensional data is not automatically a real signal ([Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md);
[Probability, Chapter 20](../probability/20-Where-Probability-Goes.md), 20.2).

## 20.5 Open problems

*Level: expert, stated for everyone.* Here are three questions that a reader of this book can understand completely and
that nobody can answer.

### The exponent of matrix multiplication

How many arithmetic operations does it take to multiply two $n \times n$ matrices? The exponent $\omega$
([Chapter 18](18-Numerical-Linear-Algebra.md), 18.6) is the infimum of $\tau$ such that $O(n^\tau)$ operations suffice.

**What is known:** $2 \le \omega < 2.371339$, the upper bound from Alman, Duan, Vassilevska Williams, Xu, Xu and Zhou (SODA
2025; preprint 2024). Newer preprints may claim small improvements; either way, $\omega$ is below 2.372, and the lower bound has not moved past the trivial $2$ at all.

**The question:** is $\omega = 2$? That would mean matrix multiplication, and with it inversion, determinants and solving
linear systems, can be done in time barely more than it takes to read the input. Many specialists believe it, partly because
related exponents have been pinned down and partly from group-theoretic approaches (Cohn and Umans, 2003, proposed reaching
$\omega = 2$ through the representation theory of finite groups, linking this problem back to 20.3). But the current method, the
laser method applied to the Coppersmith-Winograd tensors, provably cannot go below about $2.3078$ on its own (Ambainis, Filmus
and Le Gall, 2015), so new ideas are needed. In terms of Chapter 17: $\omega$ is the growth exponent of the tensor rank (and of
the border rank) of the matrix multiplication tensor in $\mathbb{C}^{n^2} \otimes \mathbb{C}^{n^2} \otimes \mathbb{C}^{n^2}$, a
question in pure multilinear algebra.

### The Hadamard conjecture

A **Hadamard matrix** of order $n$ is an $n \times n$ matrix $H$ with entries $\pm1$ and orthogonal rows:

$$
HH^{\mathsf T} = nI.
$$

Examples: $(1)$; $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$; and Sylvester's doubling (1867), $H \mapsto \begin{pmatrix} H & H \\ H & -H \end{pmatrix}$
(the Kronecker product of Chapter 17 with the $2 \times 2$ matrix), which gives all orders $2^k$. The order 4 one is

$$
\begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{pmatrix}.
$$

Hadamard matrices are the rows of the Mariner 9 Reed-Muller code in $\pm1$ form ([Combinatorics, Chapter 19](../combinatorics/19-Designs-and-Codes.md),
19.6), give optimal experimental designs for weighing objects, and underlie the Walsh-Hadamard transform.

**Why "Hadamard": the determinant bound.** Jacques Hadamard proved in 1893 that a real matrix $M$ with rows $r_1, \ldots, r_n$
satisfies $|\det M| \le \prod\lVert r_i\rVert$. *Proof:* write $M^{\mathsf T} = QR$ (QR factorisation, [Chapter 12](12-Projections-and-Least-Squares.md)), so
$|\det M| = |\det R| = \prod|r_{ii}|$, and $|r_{ii}|$, the length of the part of the $i$-th column of $M^{\mathsf T}$ orthogonal to the
earlier ones, is at most the length $\lVert r_i\rVert$ of that whole column. Equality holds exactly when the rows are orthogonal.
$\square$ Geometrically: a box with given edge lengths has the largest volume when it is rectangular. For entries in
$[-1, 1]$, each $\lVert r_i\rVert \le \sqrt n$, so $|\det M| \le n^{n/2}$, with equality exactly for Hadamard matrices.

**Theorem 20.10.** If a Hadamard matrix of order $n \ge 3$ exists, then $4 \mid n$.

*Proof.* Multiplying columns by $-1$ keeps the property, so make the first row all $+1$. Consider the first three rows. Each
column has one of four sign patterns in rows 2 and 3: $(+,+)$, $(+,-)$, $(-,+)$, $(-,-)$; let $a, b, c, d$ be the numbers of
columns of each kind. Then $a + b + c + d = n$; row 2 orthogonal to row 1 gives $a + b - c - d = 0$; row 3 orthogonal to row 1
gives $a - b + c - d = 0$; rows 2 and 3 orthogonal give $a - b - c + d = 0$. Adding all four equations, $4a = n$. $\square$

**The Hadamard conjecture:** for every $n$ divisible by 4 there is a Hadamard matrix of order $n$. It goes back to Paley (1933)
and is open.

**Constructions.** Paley's first construction: if $q$ is a prime power with $q \equiv 3 \pmod 4$, there is a Hadamard matrix of
order $q + 1$, built from the quadratic residues mod $q$ (the matrix $Q$ with $Q_{ij} = 1$ if $j - i$ is a nonzero square, $-1$ if
a non-square, $0$ if $j = i$; then border it and add $I$). For $q = 11$ (squares mod 11: 1, 3, 4, 5, 9) this gives order 12, and
the check $HH^{\mathsf T} = 12I$ succeeds. A second Paley construction gives order $2(q + 1)$ for prime powers $q \equiv 1 \pmod 4$.
Combined with Sylvester doubling and many special methods (Williamson's, and computer searches), these cover all multiples of 4
up to large sizes, with gaps.

**The smallest open case is $668 = 4 \times 167$.** Why does it resist? Paley I would need $667$ to be a prime power, but
$667 = 23 \times 29$. Paley II would need $q = 333$, but $333 = 9 \times 37$. Halving gives $334$, not a multiple of 4, so Sylvester
doubling cannot help. The previous smallest open order, 428, was settled by Hadi Kharaghani and Behruz Tayfeh-Rezaie in 2005 with
a computer-aided construction. According to recent surveys, the open orders below 1000 are 668, 716 and 892. A 2025 paper by
Shalom Eliahou constructed a $\pm1$ matrix of order 668 with $HH^{\mathsf T} \equiv 668I \pmod{64}$, close to but not a Hadamard
matrix. A related open problem: Ryser's conjecture that no *circulant* Hadamard matrix exists beyond order 4.

### The invariant subspace problem

Every operator on a finite-dimensional complex space $V$ of dimension at least 2 has a nontrivial invariant subspace (not
$\{0\}$, not $V$): it has an eigenvector $v$ (the characteristic polynomial has a root, by the fundamental theorem of algebra),
and the line through $v$ is invariant. Over $\mathbb{R}$, a rotation of the plane has no invariant line, but every operator on
$\mathbb{R}^n$ with $n \ge 3$ has an invariant line or plane (from a real eigenvalue or a pair of complex conjugate ones).

**The question:** does every bounded operator $T$ on a complex Hilbert space $H$ of dimension at least 2 have a closed invariant
subspace other than $\{0\}$ and $H$?

Two remarks narrow it down. First, only **separable** infinite-dimensional $H$ is interesting: for any $v \ne 0$, the closure of
$\operatorname{span}\{v, Tv, T^2v, \ldots\}$ is a closed invariant subspace, and it is separable (the rational combinations of
countably many vectors are dense in it), so in a non-separable $H$ it is proper. Second, the subspace must be **closed**;
non-closed invariant subspaces are easy to find, and "closed" is what makes the question meaningful.

**What is known:**

- Yes for compact operators (von Neumann, unpublished, for Hilbert space; Aronszajn and Smith, 1954, for Banach spaces), and
  much more: Victor Lomonosov (1973) proved that every operator commuting with a nonzero compact operator has one.
- Yes for normal operators, by the spectral theorem (spectral projections give invariant subspaces).
- **No** for some Banach spaces: Per Enflo constructed a bounded operator on a Banach space with no nontrivial closed invariant
  subspace (circulated in the mid-1970s, published in *Acta Mathematica* in 1987), and Charles Read gave counterexamples on
  concrete spaces, including $\ell^1$ (1985). In the other direction, Argyros and Haydon (2011) built a Banach space on which every
  operator is a scalar plus a compact, so on that space the answer is yes by Lomonosov.
- For **Hilbert space** the problem is open. In 2023 Enflo posted a preprint claiming a positive answer; it has not been accepted by
  the community as a proof, and as of this writing the problem is generally regarded as open
  ([Calculus, Chapter 22](../calculus/22-Where-Analysis-Goes.md), 22.6, says the same).

Why is it hard? Invariant subspaces in finite dimension come from eigenvalues, and in infinite dimension operators need not
have any (Theorem 20.4). The shift $S$ itself has a great many invariant subspaces (Beurling described them all in 1949, using
analytic functions), but a general operator offers no handle at all. It is the simplest question about infinite-dimensional
linear algebra that nobody can answer.

## A short history

Hilbert's work on integral equations (1904-1910) and the Riesz-Fischer theorem (1907) created the space $\ell^2$ and its
function-space twin; von Neumann gave the axiomatic definition of an abstract Hilbert space in 1929 and used it to found quantum
mechanics. Stefan Banach's *Théorie des opérations linéaires* (1932) made normed spaces a subject. Representation theory began
with Frobenius's characters (1896) and was carried to compact and Lie groups by Schur, Weyl and others in the 1920s. Random
matrices came from statistics (Wishart, 1928) and then from nuclear physics (Wigner, 1950s, and Dyson's work in the early 1960s).
The Hadamard conjecture goes back to Paley in 1933, and matrix multiplication became a research area with Strassen's paper of 1969.

## Check yourself

??? question "1. Show that the sequence $x = (1, \tfrac12, \tfrac13, \ldots)$ is in $\ell^2$ but not in $\ell^1$, and give its $\ell^2$ norm."
    $\sum 1/n^2 = \pi^2/6$ converges, so $x \in \ell^2$ with $\lVert x\rVert_2 = \pi/\sqrt6 \approx 1.28$. But $\sum 1/n$ diverges
    (the harmonic series), so $x \notin \ell^1$. In infinite dimension, different norms give different spaces.

??? question "2. Check that the sup norm on $C[0,1]$ fails the parallelogram law for $u = x$ and $v = 1 - x$."
    $u + v = 1$, norm 1. $u - v = 2x - 1$, norm 1. $\lVert u\rVert = \lVert v\rVert = 1$. Left side $1 + 1 = 2$, right side $2 + 2 = 4$.
    Not equal.

??? question "3. In $\ell^2$, find the nearest point to $x = (1, 1, 1, 0, 0, \ldots)$ in the closed subspace $M = \{y : y_1 = y_2\}$."
    $M^\perp$ is spanned by $(1, -1, 0, 0, \ldots)$ (check: $\langle(1,-1,0,\ldots), y\rangle = y_1 - y_2$). The component of $x$ along it is
    $\frac{\langle(1,-1,0,\ldots), x\rangle}{2}(1, -1, 0, \ldots) = 0$, since $1 - 1 = 0$. So $x \in M$ already, and the nearest point is
    $x$ itself. (For $x = (1, 0, 0, \ldots)$ the answer would be $(\tfrac12, \tfrac12, 0, \ldots)$.)

??? question "4. Find the vector $u$ representing the functional $\varphi(x) = x_1 + x_2/2 + x_3/4 + \cdots$ on real $\ell^2$, and its norm."
    $\varphi(x) = \langle u, x\rangle$ with $u = (1, \tfrac12, \tfrac14, \ldots)$, which is in $\ell^2$: $\lVert u\rVert^2 = \sum 4^{-k} = \tfrac43$.
    So $\lVert\varphi\rVert = 2/\sqrt3 \approx 1.155$.

??? question "5. Show that the left shift $S^*$ on $\ell^2$ has eigenvalue $\tfrac12$ and find an eigenvector. Why is 1 not an eigenvalue?"
    $v = (1, \tfrac12, \tfrac14, \ldots)$: $S^*v = (\tfrac12, \tfrac14, \ldots) = \tfrac12 v$, and $v \in \ell^2$. For $\lambda = 1$ the only
    candidate is $(1, 1, 1, \ldots)$ (up to scale), which is not in $\ell^2$. So 1 is in the spectrum (the spectrum is closed and
    contains the open disc) without being an eigenvalue.

??? question "6. Prove: if $\lVert T\rVert < 1$, then $\lVert(I - T)^{-1}\rVert \le 1/(1 - \lVert T\rVert)$."
    $(I - T)^{-1} = \sum_{k \ge 0}T^k$, so $\lVert(I-T)^{-1}\rVert \le \sum\lVert T\rVert^k = 1/(1 - \lVert T\rVert)$, a geometric series.

??? question "7. Decompose the permutation representation of $S_3$ on $\mathbb{C}^3$ using characters."
    Its character is $\chi = (3, 1, 0)$ on (identity, transpositions, 3-cycles). Inner products with the table:
    trivial $\frac16(3 + 3 + 0) = 1$; sign $\frac16(3 - 3 + 0) = 0$; standard $\frac16(6 + 0 + 0) = 1$. So
    $\chi = \text{trivial} + \text{standard}$.

??? question "8. Show that the 4-dimensional representation of $\mathbb{Z}/4$ by cyclic shifts of $\mathbb{C}^4$ splits into four 1-dimensional pieces, and name the eigenvalues."
    The shift $P$ satisfies $P^4 = I$, so its eigenvalues are 4th roots of unity $1, i, -1, -i$, with eigenvectors
    $(1, \zeta, \zeta^2, \zeta^3)$ for $\zeta = 1, -i, -1, i$ (each one an eigenvector of the shift $(x_1,\ldots,x_4) \mapsto (x_4, x_1, x_2, x_3)$
    with eigenvalue $\zeta^{-1}$). Four distinct eigenvalues, four invariant lines: the 4-point discrete Fourier transform.

??? question "9. Verify that the 6th moment of the semicircle law is 5, the Catalan number $C_3$."
    Substitute $x = 2\sin\theta$, so $x^6 = 64\sin^6\theta$, $\sqrt{4 - x^2} = 2\cos\theta$ and $dx = 2\cos\theta\,d\theta$.
    The moment becomes $\frac{128}{\pi}\int_{-\pi/2}^{\pi/2}\sin^6\theta\cos^2\theta\,d\theta$. The integral is $\frac{5\pi}{128}$ (using
    $\int_{-\pi/2}^{\pi/2}\sin^6 = \frac{5\pi}{16}$ and $\int\sin^8 = \frac{35\pi}{128}$, so $\int\sin^6\cos^2 = \frac{40\pi - 35\pi}{128}$). Result:
    $\frac{128}{\pi}\cdot\frac{5\pi}{128} = 5$.

??? question "10. Construct a Hadamard matrix of order 8 and check one pair of rows."
    Sylvester-double the order 4 matrix: $H_8 = \begin{pmatrix} H_4 & H_4 \\ H_4 & -H_4 \end{pmatrix}$. Row 1 is $(1,1,1,1,1,1,1,1)$ and row 6 is
    $(1, -1, 1, -1, -1, 1, -1, 1)$: dot product $1 - 1 + 1 - 1 - 1 + 1 - 1 + 1 = 0$.

??? question "11. Show that a Hadamard matrix of order $n$ has $|\det H| = n^{n/2}$, and compute it for $n = 4$."
    $\det(HH^{\mathsf T}) = \det(nI) = n^n$, and $\det(HH^{\mathsf T}) = (\det H)^2$, so $|\det H| = n^{n/2}$. For $n = 4$, $|\det H| = 16$.

??? question "12. Why does the invariant subspace problem become trivial for an operator $T$ that has an eigenvalue? And for one that is not injective?"
    If $Tv = \lambda v$ with $v \ne 0$, the line $\mathbb{C}v$ is a closed invariant subspace, proper when $\dim H \ge 2$. If $T$ is not
    injective, then $\ker T$ is a nonzero closed invariant subspace; if it is all of $H$ then $T = 0$ and every subspace is invariant.
    So the hard cases are operators with no eigenvalues at all, like the shift.

## What you learned

- In infinite dimension, completeness becomes essential: Banach and Hilbert spaces. The unit ball is no longer compact, but in
  Hilbert space nearest points exist (projection theorem) and continuous functionals are inner products (Riesz).
- Every separable infinite-dimensional Hilbert space is $\ell^2$ in disguise; Fourier series are expansions in an orthonormal
  basis of $L^2$.
- The spectrum generalises eigenvalues: the shift has none but a whole disc of spectrum, and multiplication by $x$ has spectrum
  $[0,1]$. Compact self-adjoint operators still have an orthonormal eigenbasis; general self-adjoint ones are multiplication
  operators.
- Representation theory is linear algebra applied to symmetry; Schur's lemma and characters classify the pieces, and the
  discrete Fourier transform is the case of cyclic groups.
- Eigenvalues of large random symmetric matrices follow Wigner's semicircle, whose moments are the Catalan numbers; their fine
  statistics also appear in the zeros of the zeta function.
- Open: whether $\omega = 2$ (known: $\omega < 2.371339$, published 2025); whether Hadamard matrices exist for every multiple of 4
  (smallest open order 668); whether every operator on Hilbert space has a nontrivial closed invariant subspace.

**Next:** this is the last chapter. Return to the [book's contents](index.md) to revisit any part of the road, or continue with
the companion books: [Algebra](../algebra/index.md), [Calculus and analysis](../calculus/index.md) and
[Probability](../probability/index.md).

## Further reading

- J. B. Conway, *A Course in Functional Analysis*, 2nd edition, Springer, 1990.
- M. Reed and B. Simon, *Methods of Modern Mathematical Physics I: Functional Analysis*, Academic Press, 1972 (revised 1980).
- E. Kreyszig, *Introductory Functional Analysis with Applications*, Wiley, 1978 (gentle first book).
- P. R. Halmos, *A Hilbert Space Problem Book*, 2nd edition, Springer, 1982 (the shift operator and much more, as problems).
- W. Fulton and J. Harris, *Representation Theory: A First Course*, Springer, 1991; J.-P. Serre, *Linear Representations of
  Finite Groups*, Springer, 1977.
- G. W. Anderson, A. Guionnet and O. Zeitouni, *An Introduction to Random Matrices*, Cambridge University Press, 2010; T. Tao,
  *Topics in Random Matrix Theory*, AMS, 2012.
- E. P. Wigner, "On the distribution of the roots of certain symmetric matrices", *Annals of Mathematics* 67, 1958.
- J. Alman, R. Duan, V. Vassilevska Williams, Y. Xu, Z. Xu and R. Zhou, "More asymmetry yields faster matrix multiplication",
  SODA 2025 (arXiv:2404.16349).
- H. Cohn and C. Umans, "A group-theoretic approach to fast matrix multiplication", FOCS 2003.
- K. J. Horadam, *Hadamard Matrices and Their Applications*, Princeton University Press, 2007.
- H. Kharaghani and B. Tayfeh-Rezaie, "A Hadamard matrix of order 428", *Journal of Combinatorial Designs* 13, 2005.
- R. E. A. C. Paley, "On orthogonal matrices", *Journal of Mathematics and Physics* 12, 1933.
- I. Chalendar and J. R. Partington, *Modern Approaches to the Invariant-Subspace Problem*, Cambridge University Press, 2011.
- C. J. Read, "A solution to the invariant subspace problem on the space $\ell_1$", *Bulletin of the London Mathematical Society*
  17, 1985; P. Enflo, "On the invariant subspace problem for Banach spaces", *Acta Mathematica* 158, 1987.
- A. W. Marcus, D. A. Spielman and N. Srivastava, "Interlacing families II: Mixed characteristic polynomials and the
  Kadison-Singer problem", *Annals of Mathematics* 182, 2015.
- On this site: [Calculus, Chapter 22](../calculus/22-Where-Analysis-Goes.md) (functional analysis and open problems in analysis);
  [Algebra, Chapter 21](../algebra/21-Modules-and-Representations.md) and [Chapter 22](../algebra/22-Where-Algebra-Goes.md);
  [Probability, Chapter 20](../probability/20-Where-Probability-Goes.md) (random matrices); [Combinatorics, Chapter 19](../combinatorics/19-Designs-and-Codes.md)
  (Hadamard matrices in codes and designs); U of T guides [MAT247 Unit 4: Isometries](../../uoft/MAT247H1/unit04.md) and
  [MAT247 Unit 6: The spectral theorem](../../uoft/MAT247H1/unit06.md).
