# 18. Numerical linear algebra

*Everything so far has been exact: fractions, square roots, symbols. Real computers store about sixteen significant
digits, and real problems have a million unknowns. Can you still trust elimination? How fast can you solve a system,
find eigenvalues, or multiply two matrices? This chapter is about linear algebra as it is actually computed. You will see
how rounding can wreck a naive algorithm and how pivoting saves it; learn to tell an ill-conditioned problem from an
unstable algorithm; solve systems by iteration rather than elimination; find eigenvalues by power iteration and the QR
algorithm; exploit matrices that are mostly zeros; and meet Strassen's surprise, that two matrices can be multiplied
faster than the textbook rule allows, which leads to an open problem at the frontier.*

!!! abstract "In this chapter"
    **You will learn:**

    - how floating point numbers work, what "unit roundoff" means, and why elimination needs pivoting
    - condition numbers, the error bound $\lVert\delta x\rVert/\lVert x\rVert \le \kappa(A)\,\lVert\delta b\rVert/\lVert b\rVert$, and backward stability
    - the Jacobi and Gauss-Seidel iterations, when they converge (with proof), and the idea of conjugate gradients
    - power iteration (with its convergence proof), the QR algorithm, and why nobody computes eigenvalues from the characteristic polynomial
    - sparse matrices, fill-in, and why the ordering of unknowns matters
    - Strassen's algorithm, the exponent $\omega$ of matrix multiplication, and the current record

    **You need:** elimination and LU ([Chapter 2](02-Systems-of-Linear-Equations.md), [Chapter 3](03-Matrices.md)),
    eigenvalues ([Chapter 9](09-Eigenvalues-and-Eigenvectors.md)), orthogonality and QR
    ([Chapter 12](12-Projections-and-Least-Squares.md)), the spectral theorem ([Chapter 14](14-The-Spectral-Theorem.md))
    and the SVD ([Chapter 15](15-The-Singular-Value-Decomposition.md)), which defines the 2-norm condition number.

    **Levels:** 18.1 is intermediate; 18.2 to 18.5 are advanced; 18.6 starts advanced and ends at the research frontier
    (expert).

## 18.1 Floating point and why elimination needs pivoting

*Level: intermediate.* Ask Python for `0.1 + 0.2` and it answers `0.30000000000000004`. Nothing is broken: the number
$0.1$ has no exact binary representation (just as $\tfrac13$ has none in decimal), so the computer stores the nearest
number it can, and the tiny errors show when you add.

### How numbers are stored

A **floating point number** is stored like scientific notation in base 2:

$$
x = \pm\, (1.b_1 b_2 \ldots b_{52})_2 \times 2^{e},
$$

a sign, a **significand** with 53 binary digits (the leading 1 is not stored), and an **exponent** $e$ between
$-1022$ and $1023$. This is "double precision" in the IEEE 754 standard (first issued in 1985, revised in 2008 and 2019),
used by essentially every computer today. It gives about 16 significant decimal digits and a range from about
$10^{-308}$ to $10^{308}$.

Floating point numbers are not evenly spaced. Between 1 and 2 there are $2^{52}$ of them, spaced $2^{-52}$ apart; between
2 and 4 there are just as many, spaced twice as far apart. The **relative** spacing is what stays constant. The picture
shows a toy system with only 2 bits after the point.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="A toy floating point system on a number line from 0.5 to 8. Between 0.5 and 1 the points are an eighth apart, between 1 and 2 a quarter apart, between 2 and 4 a half apart, and between 4 and 8 one apart: the gaps double at each power of two">
  <line x1="30" y1="60" x2="430" y2="60" stroke="currentColor" stroke-width="1"/>
  <circle cx="45" cy="60" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="51.25" cy="60" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="57.5" cy="60" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="63.75" cy="60" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="70" cy="60" r="3.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="82.5" cy="60" r="3.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="95" cy="60" r="3.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="107.5" cy="60" r="3.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="120" cy="60" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="145" cy="60" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="170" cy="60" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="195" cy="60" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="220" cy="60" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="270" cy="60" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="320" cy="60" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="370" cy="60" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="420" cy="60" r="3.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.6"/>
  <text x="70" y="82" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="120" y="82" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="220" y="82" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="420" y="82" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <text x="95" y="42" font-size="11" text-anchor="middle" fill="currentColor">gap 1/4</text>
  <text x="170" y="42" font-size="11" text-anchor="middle" fill="currentColor">gap 1/2</text>
  <text x="320" y="42" font-size="11" text-anchor="middle" fill="currentColor">gap 1</text>
  <text x="220" y="110" font-size="11" text-anchor="middle" fill="currentColor">the relative gap stays the same; the absolute gap doubles at each power of 2</text>
</svg>
</div>

The key number is the **unit roundoff** $u = 2^{-53} \approx 1.1 \times 10^{-16}$. Every real number $x$ in range is
stored as some $\operatorname{fl}(x) = x(1 + \delta)$ with $|\delta| \le u$, and each arithmetic operation is done "as if
exactly, then rounded":

$$
\operatorname{fl}(a \circ b) = (a \circ b)(1 + \delta), \qquad |\delta| \le u, \quad \circ \in \{+, -, \times, \div\}.
$$

This one model is the basis of all error analysis. (The number $2^{-52} \approx 2.2 \times 10^{-16}$, the gap just above
1, is often called *machine epsilon*; some books use that name for $u$ instead. Check: in Python, `1.0 + 2**-53 == 1.0`
is `True` (the tie rounds to the even neighbour, 1), while `1.0 + 2**-52 == 1.0` is `False`.)

Each operation is accurate to one part in $10^{16}$, so where is the danger? In **cancellation**: subtracting two nearly
equal numbers. If $a$ and $b$ each carry a relative error of $10^{-16}$ and agree in their first 12 digits, then
$a - b$ has only 4 correct digits. The subtraction itself is exact; it just exposes the errors already there.

### A two-by-two disaster

Solve, with $\varepsilon = 10^{-20}$,

$$
\begin{pmatrix} \varepsilon & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}.
$$

The exact solution is $x_1 = \frac{1}{1 - \varepsilon}$, $x_2 = \frac{1 - 2\varepsilon}{1 - \varepsilon}$, both
equal to 1 to twenty digits. The matrix is perfectly harmless: its determinant is $\varepsilon - 1 \approx -1$.

**Elimination without pivoting.** The multiplier is $\ell = 1/\varepsilon = 10^{20}$. Subtract $\ell$ times row 1 from
row 2:

$$
(1 - 10^{20})\,x_2 = 2 - 10^{20}.
$$

In floating point, $1 - 10^{20}$ rounds to $-10^{20}$ (the 1 is far below the last stored digit), and likewise
$2 - 10^{20}$ rounds to $-10^{20}$. So $x_2 = 1$: fine. Then back-substitute:
$x_1 = (1 - x_2)/\varepsilon = 0/\varepsilon = 0$. **Completely wrong.** The true $x_1$ is 1.

What happened? The huge multiplier swamped row 2: after rounding, row 2 became $10^{20}$ times row 1, and the
information "1, 1, 2" in the original row 2 was lost. Then the small pivot $\varepsilon$ amplified the tiny difference
$1 - x_2$.

**With pivoting.** Swap the rows first, so the pivot is the larger entry 1:

$$
\begin{pmatrix} 1 & 1 \\ \varepsilon & 1 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}.
$$

Now $\ell = \varepsilon$, row 2 becomes $(1 - \varepsilon)x_2 = 1 - 2\varepsilon$, which rounds to $x_2 = 1$, and
$x_1 = 2 - x_2 = 1$. Both correct. Check: running both versions in Python gives `(0.0, 1.0)` and `(1.0, 1.0)`.

**Partial pivoting** is the rule: at each step, among the entries in the current column on or below the diagonal,
pick the one of largest absolute value and swap its row up. Then every multiplier satisfies $|\ell_{ij}| \le 1$, and the
factorisation reads $PA = LU$ with $P$ a permutation matrix ([Chapter 3](03-Matrices.md), 3.6). This is what every
library routine does by default.

**Is partial pivoting always enough?** Almost. The entries of $U$ can grow by a factor up to $2^{n-1}$ (Wilkinson found a
matrix achieving this), but such growth essentially never occurs in practice; explaining *why* it is so rare is a real
research question, studied through "smoothed analysis" by Sankar, Spielman and Teng. When guaranteed stability matters,
one uses complete pivoting (search the whole remaining block) or orthogonal methods such as QR, which cannot amplify
anything because orthogonal matrices preserve length ([Chapter 13](13-Orthogonal-Matrices-and-Rotations.md)).

**Cost.** Gaussian elimination on an $n \times n$ matrix uses about $\tfrac{2}{3}n^3$ floating point operations
(*flops*). For $n = 1000$ that is under a billion, a fraction of a second on a laptop. For $n = 10^6$ it is
$6.7 \times 10^{17}$, too much, and the matrix would need $8 \times 10^{12}$ bytes just to store. Large problems need the
ideas of 18.3 and 18.5.

## 18.2 Conditioning and stability

*Level: advanced.* Two quite different things can go wrong when you compute. The *problem* may be so sensitive that
any tiny change in the data changes the answer a lot; then no algorithm can help. Or the *algorithm* may introduce more
error than the problem deserves, like elimination without pivoting above. Numerical analysts keep these apart: the first
is **conditioning** (a property of the problem), the second **stability** (a property of the algorithm).

### An ill-conditioned system

$$
\begin{pmatrix} 1 & 1 \\ 1 & 1.0001 \end{pmatrix} x = \begin{pmatrix} 2 \\ 2.0001 \end{pmatrix} \quad\Longrightarrow\quad x = \begin{pmatrix} 1 \\ 1 \end{pmatrix}.
$$

Change the second entry of $b$ by $0.0001$, to $2.0002$: the solution jumps to $x = (0, 2)$. A relative change of about
$3.5 \times 10^{-5}$ in $b$ made a relative change of about 1 in $x$. Geometrically, the two equations are two nearly
parallel lines, and sliding one of them a hair moves their crossing point far along. Exact arithmetic would not help:
the data is uncertain, so the answer is uncertain.

### Norms and the condition number

To measure this we need sizes of vectors and matrices. Use any vector norm $\lVert x\rVert$ and the **operator norm**
$\lVert A\rVert = \max_{x \ne 0} \lVert Ax\rVert/\lVert x\rVert$, the most $A$ can stretch a vector. Then
$\lVert Ax\rVert \le \lVert A\rVert\,\lVert x\rVert$ and $\lVert AB\rVert \le \lVert A\rVert\,\lVert B\rVert$. For the
Euclidean norm, $\lVert A\rVert_2 = \sigma_1$, the largest singular value ([Chapter 15](15-The-Singular-Value-Decomposition.md)).

**Definition.** For invertible $A$, the **condition number** is $\kappa(A) = \lVert A\rVert\,\lVert A^{-1}\rVert$. In the
2-norm, $\kappa_2(A) = \sigma_1/\sigma_n$, the ratio of largest to smallest singular value. Always $\kappa \ge 1$.

**Theorem 18.1.** If $Ax = b$ with $b \ne 0$ and $A(x + \delta x) = b + \delta b$, then

$$
\frac{\lVert\delta x\rVert}{\lVert x\rVert} \le \kappa(A)\,\frac{\lVert\delta b\rVert}{\lVert b\rVert}.
$$

*Proof.* Subtracting, $A\,\delta x = \delta b$, so $\delta x = A^{-1}\delta b$ and
$\lVert\delta x\rVert \le \lVert A^{-1}\rVert\,\lVert\delta b\rVert$. Also $\lVert b\rVert = \lVert Ax\rVert \le \lVert A\rVert\,\lVert x\rVert$,
so $1/\lVert x\rVert \le \lVert A\rVert/\lVert b\rVert$. Multiply the two inequalities. $\square$

The bound is sharp: equality happens when $x$ is stretched the most by $A$ and $\delta b$ the most by $A^{-1}$. A similar
bound, with an extra factor that is close to 1 for small perturbations, holds when $A$ itself is perturbed.

For the matrix above, $\kappa_2 \approx 40002$, so a relative change in $b$ may be magnified forty thousand times. In
the example, $3.5 \times 10^{-5} \times 40002 \approx 1.4$, and the actual magnification was about 1 / $3.5 \times 10^{-5}$,
roughly 28 000: within the bound.

**Rule of thumb.** With unit roundoff $u \approx 10^{-16}$, a good algorithm loses about $\log_{10}\kappa$ of its 16 digits.
**Example: Hilbert matrices.** $H_n$ has entries $1/(i + j - 1)$. They are symmetric positive definite and look
innocent, but $\kappa_2(H_4) \approx 1.6 \times 10^4$, $\kappa_2(H_8) \approx 1.5 \times 10^{10}$ and
$\kappa_2(H_{10}) \approx 1.6 \times 10^{13}$. Solving $H_{10}x = b$ with $b$ chosen so that the exact answer is all ones
gives, in double precision, entries wrong by about $2 \times 10^{-5}$: about 5 correct digits out of 16, as the rule
predicts. By $n = 12$, $\kappa \approx 1.6 \times 10^{16}$ and essentially no digits survive.

### Backward stability

How can an algorithm be judged when the problem itself amplifies errors? The answer, due mainly to James Wilkinson in
the 1950s and 1960s, is **backward error analysis**: instead of asking how wrong the computed answer $\hat x$ is, ask
for which nearby problem it is the *exact* answer.

**Definition.** An algorithm for $Ax = b$ is **backward stable** if the computed $\hat x$ satisfies
$(A + \delta A)\hat x = b$ for some $\delta A$ with $\lVert\delta A\rVert/\lVert A\rVert$ a modest multiple of $u$.

So a backward stable algorithm gives the exact answer to a problem that differs from yours by about as much as rounding
your data to store it already did. You cannot ask for more. Combined with the perturbation bound, a backward stable
algorithm has forward error at most about $\kappa(A)\,u$:

$$
\text{forward error} \lesssim \text{condition number} \times \text{backward error}.
$$

Known results: Householder QR ([Chapter 13](13-Orthogonal-Matrices-and-Rotations.md), 13.6) is backward stable;
Gaussian elimination with partial pivoting is backward stable unless the growth factor is large (which, as noted, almost
never happens); elimination without pivoting is not backward stable, as the $\varepsilon$ example showed.

### Do not form $A^{\mathsf T}A$ (unless you must)

In [Chapter 12](12-Projections-and-Least-Squares.md), least squares was solved through the normal equations
$A^{\mathsf T}A\,\hat x = A^{\mathsf T}b$. Numerically this is risky.

**Theorem 18.2.** For $A$ with independent columns, $\kappa_2(A^{\mathsf T}A) = \kappa_2(A)^2$.

*Proof.* If $A = U\Sigma V^{\mathsf T}$ (thin SVD), then $A^{\mathsf T}A = V\Sigma^2V^{\mathsf T}$, whose singular values are
$\sigma_i^2$. So the ratio of the largest to the smallest is $(\sigma_1/\sigma_n)^2$. $\square$

If $\kappa(A) = 10^6$, a stable QR solution loses about 6 digits, but the normal equations lose about 12. That is why
least-squares software, including the programs that fit spacecraft orbits to tracking data, uses QR factorisation
([Chapter 12](12-Projections-and-Least-Squares.md), 12.4) or the SVD, not the normal equations, when the problem is at
all ill-conditioned.

## 18.3 Iterative methods

*Level: advanced.* For a huge system with mostly zero entries, elimination is wasteful: it fills in zeros (18.5) and
costs $n^3$. An **iterative method** starts with a guess $x_0$ and improves it, using $A$ only through products $Av$,
which are cheap when $A$ is sparse.

### Jacobi and Gauss-Seidel

Take the system

$$
\begin{aligned}
4x_1 - x_2 &= 2, \\
-x_1 + 4x_2 - x_3 &= 4, \\
-x_2 + 4x_3 &= 10,
\end{aligned}
$$

whose exact solution is $(1, 2, 3)$ (check: $4 - 2 = 2$, $-1 + 8 - 3 = 4$, $-2 + 12 = 10$). Solve each equation for its
diagonal unknown:

$$
x_1 = \tfrac{1}{4}(2 + x_2), \quad x_2 = \tfrac{1}{4}(4 + x_1 + x_3), \quad x_3 = \tfrac{1}{4}(10 + x_2).
$$

**Jacobi's method** plugs the old values into all three right-hand sides at once. **Gauss-Seidel** uses each new value as
soon as it is computed. From $x_0 = (0, 0, 0)$:

| step | Jacobi | Gauss-Seidel |
| --- | --- | --- |
| 1 | $(0.5,\ 1,\ 2.5)$ | $(0.5,\ 1.125,\ 2.7813)$ |
| 2 | $(0.75,\ 1.75,\ 2.75)$ | $(0.7813,\ 1.8906,\ 2.9727)$ |
| 3 | $(0.9375,\ 1.875,\ 2.9375)$ | $(0.9727,\ 1.9863,\ 2.9966)$ |
| 4 | $(0.9688,\ 1.9688,\ 2.9688)$ | $(0.9966,\ 1.9983,\ 2.9996)$ |
| 6 | $(0.9961,\ 1.9961,\ 2.9961)$ | $(0.9999,\ 2.0000,\ 3.0000)$ |

Both converge; Gauss-Seidel converges about twice as fast in the number of correct digits. Why, and when do they
converge at all?

**Matrix form.** Split $A = D - L - U$ into diagonal, strictly lower and strictly upper parts (with signs chosen so that
$L$ and $U$ hold the negatives of the entries). Jacobi is $Dx_{k+1} = (L + U)x_k + b$, and Gauss-Seidel is
$(D - L)x_{k+1} = Ux_k + b$. Both have the form

$$
x_{k+1} = Mx_k + c, \quad\text{with the exact solution satisfying } x = Mx + c.
$$

Subtracting, the error $e_k = x_k - x$ obeys $e_{k+1} = Me_k$, so $e_k = M^k e_0$. Everything depends on the powers of the
**iteration matrix** $M$.

**Theorem 18.3.** The iteration $x_{k+1} = Mx_k + c$ converges to the solution for every starting guess if and only if
the **spectral radius** $\rho(M) = \max|\lambda_i(M)|$ is less than 1. The error shrinks roughly by the factor $\rho(M)$
per step.

*Proof (for diagonalisable $M$; the general case uses the Jordan form of [Chapter 16](16-Jordan-Form.md)).* Write
$e_0 = \sum c_i v_i$ in an eigenbasis. Then $e_k = \sum c_i \lambda_i^k v_i$, which tends to 0 for every choice of $c_i$
exactly when every $|\lambda_i| < 1$. If some $|\lambda_i| \ge 1$, starting with $e_0 = v_i$ gives errors that never
shrink. For a non-diagonalisable $M$, a Jordan block contributes terms $\binom{k}{j}\lambda^{k-j}$, which still tend to 0
when $|\lambda| < 1$, because the exponential decay beats the polynomial growth. $\square$

Eigenvalues are hard to compute, so a test that needs only the entries helps. Call $A$ **strictly diagonally dominant**
if in each row $|a_{ii}| > \sum_{j \ne i}|a_{ij}|$.

**Theorem 18.4.** If $A$ is strictly diagonally dominant, the Jacobi iteration converges.

*Proof.* Use the max-norm $\lVert x\rVert_\infty = \max_i|x_i|$, whose operator norm is the largest absolute row sum.
The Jacobi matrix $M = D^{-1}(L + U)$ has row $i$ equal to row $i$ of $A$ divided by $a_{ii}$, without the diagonal, so
its absolute row sums are $\sum_{j\ne i}|a_{ij}|/|a_{ii}| < 1$. Hence $\lVert M\rVert_\infty < 1$ and
$\lVert e_k\rVert_\infty \le \lVert M\rVert_\infty^k \lVert e_0\rVert_\infty \to 0$. $\square$

(Gauss-Seidel also converges for strictly diagonally dominant matrices, and for every symmetric positive definite
matrix; the proofs are a little longer, see Golub and Van Loan.)

**For our example**, the Jacobi matrix has eigenvalues $0$ and $\pm\frac{\sqrt2}{4}$, so $\rho = \frac{\sqrt2}{4} \approx 0.354$.
The Gauss-Seidel matrix has $\rho = \frac18 = 0.125$, which is exactly $\rho_{\text{Jacobi}}^2$: one Gauss-Seidel step is
worth two Jacobi steps. (That squaring is a theorem for a class of matrices including all tridiagonal ones; it is part
of David Young's 1950 theory of successive over-relaxation, SOR, which adds a tuning parameter to Gauss-Seidel and can
be much faster still.)

### The conjugate gradient method

*Level: advanced.* For a **symmetric positive definite** $A$ ([Chapter 14](14-The-Spectral-Theorem.md), 14.4) there is
a far better method. Its starting point is an observation from calculus: the function

$$
f(x) = \tfrac{1}{2}x^{\mathsf T}Ax - b^{\mathsf T}x
$$

has gradient $Ax - b$, so its minimum is exactly the solution of $Ax = b$. Solving the system is minimising a bowl.

*Steepest descent* walks downhill along the gradient. It works but zigzags badly in long narrow valleys (when $\kappa$ is
large). The cure, found by Magnus Hestenes and Eduard Stiefel in 1952, is to choose search directions $p_0, p_1, \ldots$
that are **$A$-conjugate**: $p_i^{\mathsf T}Ap_j = 0$ for $i \ne j$. That is orthogonality for the inner product
$\langle u, v\rangle_A = u^{\mathsf T}Av$, which is an inner product precisely because $A$ is positive definite.

**Theorem 18.5.** If $p_0, \ldots, p_{n-1}$ are nonzero and $A$-conjugate, and $x_{k+1} = x_k + \alpha_k p_k$ with
$\alpha_k = p_k^{\mathsf T}(b - Ax_k)/p_k^{\mathsf T}Ap_k$ (the exact minimiser of $f$ along the line), then
$x_n$ is the exact solution, whatever $x_0$ was.

*Proof.* Conjugate nonzero vectors are independent (the usual proof for orthogonal vectors, with $\langle\cdot,\cdot\rangle_A$),
so they form a basis, and $x - x_0 = \sum_j c_j p_j$ for some $c_j$. Taking $\langle p_k, \cdot\rangle_A$ of both sides gives
$c_k = p_k^{\mathsf T}A(x - x_0)/p_k^{\mathsf T}Ap_k$. Now $x_k - x_0$ is a combination of $p_0, \ldots, p_{k-1}$, which are
conjugate to $p_k$, so $p_k^{\mathsf T}A(x - x_0) = p_k^{\mathsf T}A(x - x_k) = p_k^{\mathsf T}(b - Ax_k)$. Hence
$c_k = \alpha_k$, and after $n$ steps $x_n = x_0 + \sum c_j p_j = x$. $\square$

The genius of CG is that such directions can be built on the fly, cheaply: each new direction is the current residual
$r_k = b - Ax_k$ corrected by a multiple of the previous direction, and conjugacy to *all* earlier directions comes free
(this is the part that needs the symmetry of $A$). The algorithm:

$$
\begin{aligned}
&r_0 = p_0 = b - Ax_0, \\
&\alpha_k = \frac{r_k^{\mathsf T}r_k}{p_k^{\mathsf T}Ap_k}, \quad x_{k+1} = x_k + \alpha_k p_k, \quad r_{k+1} = r_k - \alpha_k Ap_k, \\
&\beta_k = \frac{r_{k+1}^{\mathsf T}r_{k+1}}{r_k^{\mathsf T}r_k}, \quad p_{k+1} = r_{k+1} + \beta_k p_k.
\end{aligned}
$$

One product $Ap_k$ per step, a few dot products, and storage for four vectors.

**Worked example 1.** On the system above (symmetric, and positive definite since it is strictly diagonally dominant
with positive diagonal), from $x_0 = 0$: $r_0 = b = (2, 4, 10)$, $Ab = (4, 4, 36)$, $\alpha_0 = 120/384 = 0.3125$, so
$x_1 = (0.625, 1.25, 3.125)$. Two more steps give $x_2 \approx (0.851, 2.013, 3.015)$ and then $x_3 = (1, 2, 3)$, exact up
to rounding, as Theorem 18.5 promises.

In practice CG is not used as an exact method (rounding destroys exact conjugacy over many steps) but as an iterative
one, stopped long before $n$ steps. Its error in the $A$-norm satisfies

$$
\lVert x_k - x\rVert_A \le 2\left(\frac{\sqrt{\kappa} - 1}{\sqrt{\kappa} + 1}\right)^k \lVert x_0 - x\rVert_A,
$$

with $\kappa = \kappa_2(A)$. The proof shows that $x_k$ is the best approximation from the **Krylov subspace**
$\operatorname{span}(r_0, Ar_0, \ldots, A^{k-1}r_0)$ and then uses Chebyshev polynomials (Trefethen and Bau, Lecture 38).
The square root of $\kappa$ is what makes CG far better than steepest descent, whose rate involves $\kappa$ itself. And
it explains **preconditioning**: replace $Ax = b$ by an equivalent system $M^{-1}Ax = M^{-1}b$ with a cheap $M$ for
which $M^{-1}A$ has a small condition number. Choosing $M$ is an art and a large field. Related Krylov methods (GMRES,
BiCGSTAB) handle non-symmetric matrices.

## 18.4 Power iteration and the QR algorithm

*Level: advanced.* In [Chapter 9](09-Eigenvalues-and-Eigenvectors.md) you found eigenvalues as roots of the
characteristic polynomial. For a $2 \times 2$ or $3 \times 3$ matrix by hand, fine. For a computer, **never**.

### Why not the characteristic polynomial?

Polynomial roots can be terribly sensitive to the coefficients. Wilkinson's famous example is
$w(x) = (x - 1)(x - 2)\cdots(x - 20)$, with roots $1, 2, \ldots, 20$. The coefficient of $x^{19}$ is $-210$. Change it to
$-210 - 2^{-23}$ (a change of about $10^{-7}$, roughly the precision of single-precision arithmetic), and ten of the
roots become complex: for example the roots near 16 and 17 become $16.73 \pm 2.81i$. The eigenvalues of
$\operatorname{diag}(1, \ldots, 20)$, by contrast, are perfectly well conditioned. Going through the polynomial turns a
well-conditioned problem into a hopeless one. (Abel's theorem adds that for $n \ge 5$ there is no formula anyway: any
eigenvalue algorithm must be iterative.)

### Power iteration

Start with any vector and keep multiplying by $A$:

$$
x_{k+1} = \frac{Ax_k}{\lVert Ax_k\rVert}.
$$

**Theorem 18.6.** Let $A$ be diagonalisable with eigenvalues $|\lambda_1| > |\lambda_2| \ge \cdots \ge |\lambda_n|$ and
eigenvectors $v_i$. If $x_0$ has a nonzero component along $v_1$, then $x_k$ converges in direction to $\pm v_1$, with
error of order $|\lambda_2/\lambda_1|^k$.

*Proof.* Write $x_0 = \sum c_i v_i$ with $c_1 \ne 0$. Up to the scaling, $x_k$ is

$$
A^k x_0 = \sum_i c_i\lambda_i^k v_i = c_1\lambda_1^k\Bigl(v_1 + \sum_{i \ge 2}\frac{c_i}{c_1}\Bigl(\frac{\lambda_i}{\lambda_1}\Bigr)^k v_i\Bigr).
$$

Every ratio $|\lambda_i/\lambda_1| \le |\lambda_2/\lambda_1| < 1$, so the sum is $O(|\lambda_2/\lambda_1|^k)$. $\square$

To read off the eigenvalue, use the **Rayleigh quotient** $x_k^{\mathsf T}Ax_k$ (with $\lVert x_k\rVert = 1$). For
symmetric $A$ it converges twice as fast, with error $O(|\lambda_2/\lambda_1|^{2k})$, because an error $\epsilon$ in the
eigenvector causes only an error of order $\epsilon^2$ in the Rayleigh quotient (the Rayleigh quotient is stationary at
eigenvectors).

**Worked example 2.** $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ has eigenvalues $\frac{5 \pm \sqrt5}{2}$, that is
$3.618\ldots$ and $1.382\ldots$, so the ratio is $0.382$. From $x_0 = (1, 0)$:

| $k$ | $x_k$ | Rayleigh quotient |
| --- | --- | --- |
| 1 | $(0.89443,\ 0.44721)$ | $3.0$ |
| 2 | $(0.70711,\ 0.70711)$ | $3.5$ |
| 3 | $(0.6,\ 0.8)$ | $3.6$ |
| 4 | $(0.55470,\ 0.83205)$ | $3.615385$ |
| 6 | $(0.53000,\ 0.84800)$ | $3.617978$ |
| 8 | $(0.52635,\ 0.85027)$ | $3.618033$ |

The true eigenvector is $(0.52573, 0.85065)$ and $\lambda_1 = 3.6180340$. The Rayleigh quotient gains about 0.84 digits
per step ($\log_{10}(1/0.382^2) \approx 0.84$); the vector about half as fast.

Variations: **inverse iteration** applies power iteration to $(A - \mu I)^{-1}$, whose largest eigenvalue is
$1/(\lambda - \mu)$ for the eigenvalue $\lambda$ nearest the shift $\mu$; with a good shift it converges in a step or
two. Updating the shift to the current Rayleigh quotient gives **Rayleigh quotient iteration**, which for symmetric
matrices converges cubically: the number of correct digits roughly triples each step. Power iteration itself is how
Google's PageRank was originally computed ([Chapter 9](09-Eigenvalues-and-Eigenvectors.md), 9.6), because only products
with a huge sparse matrix are needed.

### The QR algorithm

Power iteration finds one eigenvector. To find all eigenvalues at once, the standard method since the early 1960s is the
**QR algorithm**, discovered independently by John Francis (published 1961-62) and Vera Kublanovskaya (1961). Its basic
form looks almost too simple:

$$
A_0 = A; \qquad \text{factor } A_k = Q_kR_k \text{ (QR factorisation)}, \qquad A_{k+1} = R_kQ_k.
$$

Factor, multiply in the other order, repeat.

**Theorem 18.7.** Each $A_{k+1}$ is orthogonally similar to $A_k$, so all $A_k$ have the eigenvalues of $A$.

*Proof.* $R_k = Q_k^{\mathsf T}A_k$, so $A_{k+1} = R_kQ_k = Q_k^{\mathsf T}A_kQ_k$, a similarity by the orthogonal
matrix $Q_k$. $\square$

Under mild conditions (eigenvalues of distinct absolute values, for example), $A_k$ converges to an upper triangular
matrix, whose diagonal holds the eigenvalues, largest first; for symmetric $A$ the limit is diagonal. The reason is that
the QR algorithm is secretly power iteration on a whole basis at once ("simultaneous iteration"): the product
$Q_0Q_1\cdots Q_{k-1}$ is exactly what you would get by applying $A^k$ to the standard basis and orthonormalising with
Gram-Schmidt. The first column then does power iteration, and the last column turns out to do inverse iteration.

**Worked example 3.** The same $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$:

$$
A_1 = \begin{pmatrix} 3 & -1 \\ -1 & 2 \end{pmatrix}, \quad A_2 = \begin{pmatrix} 3.5 & 0.5 \\ 0.5 & 1.5 \end{pmatrix}, \quad A_3 = \begin{pmatrix} 3.6 & -0.2 \\ -0.2 & 1.4 \end{pmatrix}, \quad A_5 \approx \begin{pmatrix} 3.6176 & -0.0294 \\ -0.0294 & 1.3824 \end{pmatrix}.
$$

The off-diagonal entry shrinks by about $0.382$ per step (the eigenvalue ratio), and the diagonal approaches
$3.6180$ and $1.3820$. Check: every $A_k$ has trace 5 and determinant 5, like $A$. (Notice the top-left entries
$3, 3.5, 3.6, \ldots$ are the Rayleigh quotients of the power iteration table: the simultaneous-iteration view at work.)

The practical algorithm adds three ideas that turn this slow iteration into one of the great algorithms of the twentieth
century:

1. **Hessenberg reduction.** First reduce $A$ by Householder reflections to *upper Hessenberg* form (zero below the first
   subdiagonal; tridiagonal if $A$ is symmetric). This costs $O(n^3)$ once, and QR steps preserve the form and then cost
   only $O(n^2)$ each.
2. **Shifts.** Factor $A_k - \mu_k I$ instead of $A_k$ and add $\mu_k I$ back. With well-chosen shifts (Wilkinson's shift
   for symmetric matrices, Francis's implicit double shift for real non-symmetric ones) the bottom off-diagonal entry
   goes to zero quadratically or even cubically.
3. **Deflation.** Once an off-diagonal entry is negligible, split the problem in two.

The result finds all eigenvalues of a dense $n \times n$ matrix in about $10n^3$ flops, backward stably. Every call to an
eigenvalue routine in a scientific library (for example the LAPACK routines behind NumPy and MATLAB) runs a descendant of
Francis's algorithm. A close relative computes the SVD (Golub and Kahan, 1965).

## 18.5 Sparse matrices

*Level: advanced.* Most large matrices in science are **sparse**: almost all entries are zero. Model the temperature on
a square plate by a grid of $N \times N$ points; the heat equation at each point links it only to its four neighbours.
The resulting matrix has $n = N^2$ rows but at most 5 nonzeros per row. For $N = 1000$: a million unknowns, a matrix
with $10^{12}$ entries if stored densely (8 terabytes), but only about $5 \times 10^6$ nonzeros (some tens of megabytes).

### Storing them

Store only the nonzeros. The common **compressed sparse row** (CSR) format keeps three arrays: the nonzero values row
by row, their column indices, and for each row the position where it starts. Then $Ax$ costs about two flops per
nonzero instead of $2n^2$. This is the operation iterative methods need, which is why they shine on sparse problems.

### Fill-in

Elimination can destroy sparsity. Subtracting a multiple of one row from another creates nonzeros wherever the pivot
row has them: **fill-in**.

**Worked example 4.** The "arrow" matrix with a full first row and column,

$$
A = \begin{pmatrix} * & * & * & * & * \\ * & * & & & \\ * & & * & & \\ * & & & * & \\ * & & & & * \end{pmatrix},
$$

has 13 nonzeros. Eliminating the first column subtracts multiples of the full first row from every other row, so every
blank becomes nonzero: the factors $L$ and $U$ together are full, 25 entries. Now number the unknowns in the reverse order,
which moves the full row and column to the end:

$$
PAP^{\mathsf T} = \begin{pmatrix} * & & & & * \\ & * & & & * \\ & & * & & * \\ & & & * & * \\ * & * & * & * & * \end{pmatrix}.
$$

Eliminating each of the first four columns now changes only the last row and its diagonal entry, which are already
nonzero. **No fill-in at all.** Same system, same solution, but for an $n \times n$ arrow the cost drops from $O(n^3)$ to
$O(n)$.

The ordering of unknowns matters enormously, and it is a graph problem: think of the matrix as a graph with an edge
$i$–$j$ for each nonzero $a_{ij}$. Eliminating unknown $i$ joins all its neighbours into a clique (that is the fill-in).
Good orderings eliminate low-degree vertices first (the **minimum degree** heuristic) or split the graph by small
separators and number the separators last (**nested dissection**, Alan George, 1973). For the $N \times N$ grid, nested
dissection reduces the cost of a direct solve to $O(N^3) = O(n^{3/2})$ flops, against $O(n^2)$ for a banded solver.
Finding a truly optimal ordering is NP-hard (Yannakakis, 1981), so all practical orderings are heuristics.

**Sparse direct or iterative?** For problems from two-dimensional grids, sparse direct solvers with good orderings are
often best; for three-dimensional problems, fill-in grows faster and preconditioned iterative methods (CG with multigrid
or incomplete factorisations as preconditioner) usually win. Multigrid methods solve grid problems in $O(n)$ work, which
is optimal: you cannot do better than touching each unknown a few times.

## 18.6 Fast matrix multiplication

*Level: advanced, then expert.* Multiplying two $n \times n$ matrices by the definition,
$c_{ij} = \sum_k a_{ik}b_{kj}$, takes $n^3$ multiplications and about as many additions. For a long time it was taken for
granted that nothing better was possible. In 1969 Volker Strassen, trying to *prove* that $n^3$ was optimal for
elimination, found instead that it is not.

### Strassen's algorithm

Split each matrix into $2 \times 2$ blocks (assume $n$ is even):

$$
\begin{pmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{pmatrix}\begin{pmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{pmatrix} = \begin{pmatrix} C_{11} & C_{12} \\ C_{21} & C_{22} \end{pmatrix}.
$$

The usual rule needs 8 block products ($C_{11} = A_{11}B_{11} + A_{12}B_{21}$ and so on). Strassen used 7:

$$
\begin{aligned}
M_1 &= (A_{11} + A_{22})(B_{11} + B_{22}), & M_5 &= (A_{11} + A_{12})B_{22}, \\
M_2 &= (A_{21} + A_{22})B_{11}, & M_6 &= (A_{21} - A_{11})(B_{11} + B_{12}), \\
M_3 &= A_{11}(B_{12} - B_{22}), & M_7 &= (A_{12} - A_{22})(B_{21} + B_{22}), \\
M_4 &= A_{22}(B_{21} - B_{11}), & &
\end{aligned}
$$

and then

$$
C_{11} = M_1 + M_4 - M_5 + M_7, \quad C_{12} = M_3 + M_5, \quad C_{21} = M_2 + M_4, \quad C_{22} = M_1 - M_2 + M_3 + M_6.
$$

Check $C_{12}$: $M_3 + M_5 = A_{11}B_{12} - A_{11}B_{22} + A_{11}B_{22} + A_{12}B_{22} = A_{11}B_{12} + A_{12}B_{22}$. Correct.
The others are similar (Check yourself, question 9). Nothing in this uses commutativity, which is essential: the blocks
are matrices, so the formulas can be applied **recursively**, to the blocks themselves.

**Theorem 18.8.** Strassen's recursive algorithm multiplies $n \times n$ matrices in $O(n^{\log_2 7}) \approx O(n^{2.807})$
arithmetic operations.

*Proof.* Let $n = 2^m$ (pad with zeros otherwise; this at most doubles $n$). Let $T(n)$ be the operation count. One level
does 7 half-size products and 18 additions of $(n/2) \times (n/2)$ blocks, so $T(n) = 7T(n/2) + 18(n/2)^2$, with $T(1) = 1$.
Unrolling,

$$
T(2^m) = 7^m + \frac{18}{4}\sum_{j=0}^{m-1} 7^{j}\,4^{m-j} = 7^m + \tfrac{9}{2}\,4^m\sum_{j=0}^{m-1}\Bigl(\tfrac{7}{4}\Bigr)^j \le 7^m + \tfrac{9}{2}\,4^m \cdot \frac{(7/4)^m}{3/4} = 7^m(1 + 6) = 7 \cdot 7^m.
$$

And $7^m = 7^{\log_2 n} = n^{\log_2 7}$. $\square$

For $n = 2^{10} = 1024$, $n^3 \approx 1.07 \times 10^9$ against $7^{10} \approx 2.8 \times 10^8$ multiplications at full
recursion, about a quarter. In practice, one stops recursing at blocks of a few hundred, where the usual method is faster
on real hardware; Strassen's method is used in some libraries for very large matrices, and it is slightly less stable
numerically than the usual method (its error bounds are normwise rather than entry by entry), which is one reason it is
not the default.

Why 7? Multiplying $2 \times 2$ matrices is a bilinear map, so (Section 17.4) it is a tensor in
$\mathbb{R}^4 \otimes \mathbb{R}^4 \otimes \mathbb{R}^4$, and the least number of multiplications in a bilinear algorithm is
the **rank** of that tensor. Shmuel Winograd proved in 1971 that the rank is exactly 7, so for $2 \times 2$ blocks
Strassen cannot be beaten. Larger base cases give other exponents. In 2022 a DeepMind team (Fawzi and others, *Nature*)
used reinforcement learning to search for low-rank decompositions and found, for example, a way to multiply $4 \times 4$
matrices with 47 multiplications in arithmetic modulo 2, better than the 49 from applying Strassen twice.

### The exponent $\omega$

**Definition.** The **exponent of matrix multiplication** $\omega$ is the infimum of all real $\tau$ such that $n \times n$
matrices can be multiplied with $O(n^\tau)$ arithmetic operations (over $\mathbb{R}$ or $\mathbb{C}$).

Since the answer has $n^2$ entries, $\omega \ge 2$; Strassen gives $\omega \le \log_2 7 < 2.808$. The exponent matters far
beyond multiplication: inverting a matrix, computing a determinant, and solving $Ax = b$ by exact methods can all be
done in $O(n^{\omega + \epsilon})$ operations (Bunch and Hopcroft, 1974, and others), so $\omega$ is really the exponent
of linear algebra itself.

The record has fallen many times, through ever more refined uses of the tensor-rank idea (border rank, Schönhage's
asymptotic sum inequality, and the "laser method" of Strassen and of Coppersmith and Winograd). A selection:

| year | bound on $\omega$ | who |
| --- | --- | --- |
| 1969 | $2.808$ | Strassen |
| 1990 | $2.3755$ | Coppersmith and Winograd |
| 2014 | $2.3728639$ | Le Gall |
| 2021 | $2.3728596$ | Alman and Vassilevska Williams |
| 2023 | $2.371866$ | Duan, Wu and Zhou |
| 2024 | $2.371552$ | Vassilevska Williams, Xu, Xu and Zhou |
| 2025 | $2.371339$ | Alman, Duan, Vassilevska Williams, Xu, Xu and Zhou |

So, stated carefully: **$\omega < 2.371339$**, by J. Alman, R. Duan, V. Vassilevska Williams, Y. Xu, Z. Xu and R. Zhou,
"More asymmetry yields faster matrix multiplication" (SODA 2025; preprint 2024). Newer preprints may claim small
further improvements; until they are refereed, the safe statement is that
**$\omega$ is known to be below 2.372**, and the years in the table are those of the published versions.

Two honest warnings. First, these algorithms are **galactic**: the constants hidden in the $O$ are so large that they
only win for matrices far too big to store on any computer; in practice everyone uses the $n^3$ method or Strassen. Their
interest is theoretical: they tell us what linear algebra *costs*. Second, the progress is slowing for a reason:
Ambainis, Filmus and Le Gall proved in 2015 that the Coppersmith-Winograd family of tensors, analysed in the way all the
recent papers do, cannot by itself prove $\omega < 2.3078$, and later work extended such barriers. Whether $\omega = 2$,
which many researchers believe, is one of the main open problems of algebraic complexity theory; it returns in
[Chapter 20](20-Where-Linear-Algebra-Goes.md), 20.5.

## A short history

Numerical linear algebra is younger than the computer only by a little. Gauss and Jacobi used iterative methods by hand
for least-squares problems in geodesy and astronomy in the 1820s and 1840s; Seidel published his variant in 1874. When
electronic computers arrived, John von Neumann and Herman Goldstine (1947) analysed the rounding errors of matrix
inversion and were pessimistic; Alan Turing (1948) introduced the condition number and the LU view of elimination. It
was James Wilkinson, at the National Physical Laboratory in England, who showed in the 1950s and 1960s that the right
question is backward error, and that Gaussian elimination with pivoting is in practice remarkably stable; his books
*Rounding Errors in Algebraic Processes* (1963) and *The Algebraic Eigenvalue Problem* (1965) founded the field. The
conjugate gradient method (1952), the QR algorithm (1961-62) and the Golub-Kahan SVD algorithm (1965) followed, and the
public software libraries EISPACK, LINPACK and later LAPACK (1992 onward) put them in everyone's hands. In 2000 the
journal *Computing in Science and Engineering* listed among the "top 10 algorithms of the twentieth century" the Krylov
subspace methods, the decompositional approach to matrix computations, and the QR algorithm.

## Check yourself

??? question "1. Show that in floating point, $(a + b) + c$ can differ from $a + (b + c)$, using $a = 1$, $b = c = 2^{-53}$."
    $a + b = 1 + 2^{-53}$ lies exactly halfway between 1 and the next float $1 + 2^{-52}$; round-to-even gives 1. Then
    $(a + b) + c$ rounds to 1 again. But $b + c = 2^{-52}$ exactly, and $a + 2^{-52} = 1 + 2^{-52}$ is a float. So
    $(a + b) + c = 1$ while $a + (b + c) = 1 + 2^{-52}$. Floating point addition is not associative.

??? question "2. Solve $\begin{pmatrix} 10^{-4} & 1 \\ 1 & 1 \end{pmatrix}x = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ in 3-digit decimal arithmetic, without and with pivoting."
    Without pivoting: $\ell = 10^4$; new row 2: $(1 - 10^4)x_2 = 2 - 10^4$, which round to $-10^4 x_2 = -10^4$ (3 digits:
    $-9999 \to -1.00 \times 10^4$, $-9998 \to -1.00 \times 10^4$), so $x_2 = 1$, and $x_1 = (1 - 1)/10^{-4} = 0$. Wrong.
    With pivoting: rows $(1, 1 \mid 2)$ and $(10^{-4}, 1 \mid 1)$; $\ell = 10^{-4}$; $(1 - 10^{-4})x_2 = 1 - 2\times10^{-4}$ rounds
    to $x_2 = 1.00$, then $x_1 = 2 - 1 = 1.00$. The true solution is $x_1 = 1.0001\ldots$, $x_2 = 0.9999\ldots$, so the pivoted
    answer is right to 3 digits.

??? question "3. Compute $\kappa_\infty(A)$ for $A = \begin{pmatrix} 1 & 1 \\ 1 & 1.0001 \end{pmatrix}$ by hand."
    $\lVert A\rVert_\infty$ is the largest absolute row sum, $2.0001$. $A^{-1} = \frac{1}{0.0001}\begin{pmatrix} 1.0001 & -1 \\ -1 & 1 \end{pmatrix}$,
    whose largest row sum is $2.0001 \times 10^4$. So $\kappa_\infty = 2.0001^2 \times 10^4 \approx 40004$, close to $\kappa_2 \approx 40002$.

??? question "4. Prove $\kappa(A) \ge 1$ for every invertible $A$ and every operator norm, and $\kappa_2(Q) = 1$ for orthogonal $Q$."
    $1 = \lVert I\rVert = \lVert AA^{-1}\rVert \le \lVert A\rVert\,\lVert A^{-1}\rVert$. (For an operator norm,
    $\lVert I\rVert = \max\lVert x\rVert/\lVert x\rVert = 1$.) For orthogonal $Q$, $\lVert Qx\rVert_2 = \lVert x\rVert_2$, so
    $\lVert Q\rVert_2 = 1$, and $Q^{-1} = Q^{\mathsf T}$ is orthogonal too. So $\kappa_2(Q) = 1$: orthogonal matrices are perfectly
    conditioned, which is why QR methods are so safe.

??? question "5. Does Jacobi converge for $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$? Find $\rho$ of the Jacobi matrix."
    $M = D^{-1}(D - A) = \begin{pmatrix} 0 & -2 \\ -2 & 0 \end{pmatrix}$, eigenvalues $\pm2$, so $\rho = 2 > 1$: Jacobi diverges
    from almost every start (Theorem 18.3). This $A$ is not diagonally dominant; it is not even positive definite
    (eigenvalues 3 and $-1$).

??? question "6. Run two Gauss-Seidel steps on $3x + y = 5$, $x + 2y = 5$ from $(0, 0)$, and give the exact solution."
    Exact: from the first, $y = 5 - 3x$; then $x + 10 - 6x = 5$, $x = 1$, $y = 2$. Step 1: $x = 5/3 \approx 1.6667$,
    $y = (5 - 1.6667)/2 \approx 1.6667$. Step 2: $x = (5 - 1.6667)/3 \approx 1.1111$, $y = (5 - 1.1111)/2 \approx 1.9444$.
    Converging to $(1, 2)$; the Gauss-Seidel matrix has $\rho = \frac{1}{6}$.

??? question "7. A symmetric matrix has eigenvalues $10, 9, 1$. How many power-iteration steps reduce the eigenvector error by a factor $10^6$? What would a shift help?"
    The ratio is $0.9$, so we need $0.9^k \le 10^{-6}$, $k \ge 6/\log_{10}(1/0.9) \approx 131$ steps. Power iteration on
    $A - 5I$ (eigenvalues $5, 4, -4$) has ratio $0.8$, needing about 62 steps; inverse iteration with shift $\mu = 9.9$ has
    ratio $|10 - 9.9|/|9 - 9.9| = 1/9$, needing about 7 steps.

??? question "8. Do one step of the unshifted QR algorithm on $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. What goes wrong, and why?"
    $A$ is orthogonal, so $A = QR$ with $Q = A$, $R = I$. Then $A_1 = RQ = A$: the iteration never moves. The eigenvalues are
    $1$ and $-1$, of equal absolute value, so the convergence condition fails: power iteration cannot tell them apart.
    A shift (for example factor $A - \mu I$ with $\mu$ not zero) breaks the tie, which is one reason shifts are essential.

??? question "9. Verify Strassen's formula for $C_{22}$."
    Expand the four products: $M_1 = A_{11}B_{11} + A_{11}B_{22} + A_{22}B_{11} + A_{22}B_{22}$,
    $M_2 = A_{21}B_{11} + A_{22}B_{11}$, $M_3 = A_{11}B_{12} - A_{11}B_{22}$ and
    $M_6 = A_{21}B_{11} + A_{21}B_{12} - A_{11}B_{11} - A_{11}B_{12}$. In $M_1 - M_2 + M_3 + M_6$ everything cancels
    except $A_{22}B_{22} + A_{21}B_{12}$, which is $C_{22}$.

??? question "10. If a base case multiplies $3 \times 3$ matrices with $r$ multiplications (no commutativity), what exponent does recursion give? How small must $r$ be to beat Strassen?"
    Recursion gives $T(n) = rT(n/3) + O(n^2)$, so exponent $\log_3 r$ (if $r > 9$). To beat $\log_2 7 \approx 2.8074$ we need
    $r < 3^{2.8074} \approx 21.85$, so $r \le 21$. The best known is 23 (Laderman, 1976), which gives
    $\log_3 23 \approx 2.854$, worse than Strassen; whether 21 or fewer is possible is unknown.

??? question "11. Show that the arrow matrix of 18.5 with its full row and column first has, after one elimination step, a full $(n-1) \times (n-1)$ trailing block (assume no accidental cancellation)."
    Row $i \ge 2$ has nonzeros only at positions 1 and $i$. Subtracting $\ell_i$ times row 1 (which is full) puts a
    nonzero $-\ell_i a_{1j}$ in every position $j \ge 2$, adding to the existing diagonal entry. So every entry of the
    trailing block is generically nonzero: $(n-1)^2$ entries instead of $n - 1$.

??? question "12. Explain why, for a symmetric positive definite $A$, CG solves the system exactly in at most $d$ steps if $A$ has only $d$ distinct eigenvalues."
    The CG iterate $x_k$ minimises the $A$-norm error over $x_0 + \operatorname{span}(r_0, \ldots, A^{k-1}r_0)$, equivalently
    the error is $p(A)e_0$ minimised over polynomials $p$ of degree $k$ with $p(0) = 1$. With distinct eigenvalues
    $\lambda_1, \ldots, \lambda_d$, the polynomial $p(t) = \prod_i (1 - t/\lambda_i)$ has degree $d$, $p(0) = 1$, and
    $p(A) = 0$ (it vanishes on every eigenvalue of the diagonalisable $A$). So the error after $d$ steps is 0.

## What you learned

- Floating point arithmetic is accurate to one part in $10^{16}$ per operation, but cancellation and small pivots can
  magnify errors; partial pivoting keeps multipliers at most 1 and makes elimination reliable in practice.
- Conditioning belongs to the problem ($\kappa(A) = \sigma_1/\sigma_n$ bounds the error magnification); stability belongs
  to the algorithm (backward stable means exact for nearby data). Forward error $\lesssim \kappa \times$ backward error.
- Iterations $x_{k+1} = Mx_k + c$ converge exactly when $\rho(M) < 1$; diagonal dominance guarantees it for Jacobi.
  Conjugate gradients solve SPD systems with a rate governed by $\sqrt\kappa$.
- Eigenvalues are never computed from the characteristic polynomial. Power iteration converges at rate
  $|\lambda_2/\lambda_1|$; the shifted, Hessenberg QR algorithm finds all eigenvalues in $O(n^3)$.
- Sparse matrices are stored by their nonzeros; elimination causes fill-in, and the ordering of unknowns (a graph
  problem) decides how much.
- Strassen multiplies matrices in $O(n^{2.807})$; the exponent $\omega$ is known to lie between 2 and 2.371339 (published,
  2025).

**Next:** [Chapter 19](19-Linear-Algebra-in-the-World.md), linear algebra at work: graphs, quantum mechanics, computer
graphics, machine learning and codes.

## Further reading

- L. N. Trefethen and D. Bau III, *Numerical Linear Algebra*, SIAM, 1997 (the best first book: 40 short lectures).
- G. H. Golub and C. F. Van Loan, *Matrix Computations*, 4th edition, Johns Hopkins University Press, 2013 (the
  reference).
- N. J. Higham, *Accuracy and Stability of Numerical Algorithms*, 2nd edition, SIAM, 2002.
- J. H. Wilkinson, *Rounding Errors in Algebraic Processes*, 1963, and *The Algebraic Eigenvalue Problem*, Oxford, 1965.
- J. W. Demmel, *Applied Numerical Linear Algebra*, SIAM, 1997.
- Y. Saad, *Iterative Methods for Sparse Linear Systems*, 2nd edition, SIAM, 2003.
- M. R. Hestenes and E. Stiefel, "Methods of conjugate gradients for solving linear systems", *Journal of Research of
  the National Bureau of Standards* 49, 1952.
- V. Strassen, "Gaussian elimination is not optimal", *Numerische Mathematik* 13, 1969.
- P. Bürgisser, M. Clausen and M. A. Shokrollahi, *Algebraic Complexity Theory*, Springer, 1997 (tensor rank and $\omega$).
- J. Alman, R. Duan, V. Vassilevska Williams, Y. Xu, Z. Xu and R. Zhou, "More asymmetry yields faster matrix
  multiplication", SODA 2025 (arXiv:2404.16349, 2024).
- A. Ambainis, Y. Filmus and F. Le Gall, "Fast matrix multiplication: limitations of the Coppersmith-Winograd method",
  STOC 2015.
- On this site: U of T guide [MAT240 Unit 7: Systems and elementary operations](../../uoft/MAT240H1/unit07.md) and
  [MAT247 Unit 7: Polar and singular value decomposition](../../uoft/MAT247H1/unit07.md); the
  [Statistics book, Chapter 12](../statistics/12-Multiple-Regression.md) for least squares in practice; the
  [Combinatorics book, Chapter 14](../combinatorics/14-Hamiltonian-Cycles-and-Hard-Problems.md) for NP-hardness.
