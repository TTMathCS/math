# Glossary

*Short definitions of the terms this book uses, from A to Z, each with a link to the chapter that teaches it.*

## A

**$A$-conjugate**
Vectors $p$ and $q$ with $p^T A q = 0$ for a symmetric positive definite $A$: orthogonal for the inner product that $A$ defines. The conjugate gradient method searches along such directions.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

**Adjacency matrix**
For a graph with vertices $1, \ldots, n$, the matrix with $a_{ij} = 1$ when $i$ and $j$ are joined by an edge and $0$ otherwise. It is symmetric for an undirected graph, and the entries of $A^k$ count walks of length $k$.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Adjoint**
For a complex matrix, the conjugate transpose $A^* = \bar A^T$, so that $\langle Az, w\rangle = \langle z, A^*w\rangle$. For a linear map between inner product spaces it is the map that the dual map becomes once functionals are identified with vectors.
See [Chapter 14](14-The-Spectral-Theorem.md#146-normal-operators-and-the-complex-spectral-theorem) and [Chapter 17](17-Duality-and-Multilinear-Algebra.md#172-the-transpose-as-the-dual-map).

**Adjugate**
The transpose of the matrix of cofactors, written $\operatorname{adj} A$. It satisfies $A \operatorname{adj} A = (\det A) I$, so $A^{-1} = \operatorname{adj} A / \det A$ when $\det A \ne 0$.
See [Chapter 8](08-Determinants.md#85-cofactors-and-cramers-rule).

**Affine combination**
A linear combination whose coefficients add up to 1, such as the midpoint $\frac12 \mathbf{p} + \frac12 \mathbf{q}$. It describes a point rather than a free arrow, and does not depend on where the origin is.
See [Chapter 1](01-Vectors.md#12-adding-and-scaling).

**Affine map**
A linear map followed by a translation, $x \mapsto Ax + b$. It is not linear unless $b = 0$; homogeneous coordinates turn it into a matrix one size larger.
See [Chapter 6](06-Linear-Maps.md#61-linear-maps) and [Chapter 19](19-Linear-Algebra-in-the-World.md#193-computer-graphics).

**Affine subspace**
A subspace shifted away from the origin, $x_p + W$. The solution set of a consistent system $Ax = b$ is the affine subspace $x_p + N(A)$, of dimension $n - r$.
See [Chapter 4](04-Vector-Spaces.md#42-subspaces) and [Chapter 7](07-The-Four-Subspaces.md#73-when-does-ax-b-have-a-solution).

**Algebraic connectivity**
The second smallest eigenvalue $\mu_2$ of the graph Laplacian. It is positive exactly when the graph is connected, and a small value means the graph nearly falls into two pieces.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Algebraic multiplicity**
The number of times $\lambda$ is a root of the characteristic polynomial. It is at least the geometric multiplicity, and the two agree for every eigenvalue exactly when the matrix is diagonalisable.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#92-the-characteristic-polynomial) and [Chapter 16](16-Jordan-Form.md#161-when-a-matrix-cannot-be-diagonalised).

**Alternating form**
A bilinear form with $b(v, v) = 0$ for all $v$. Alternating forms are skew-symmetric, and the determinant is the alternating multilinear form in $n$ vectors.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Angle (between vectors)**
The $\theta$ in $[0, \pi]$ with $\cos\theta = \langle u, v\rangle / (\|u\|\|v\|)$. In $\mathbb{R}^n$ this is $\cos\theta = \mathbf{u}\cdot\mathbf{v}/(\|\mathbf{u}\|\|\mathbf{v}\|)$; Cauchy-Schwarz makes the quotient lie between $-1$ and $1$.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle) and [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**Annihilator**
For a subspace $W$ of $V$, the set $W^0$ of linear functionals on $V$ that vanish on all of $W$. It is a subspace of $V^*$ of dimension $\dim V - \dim W$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#171-dual-spaces-and-dual-bases).

**Anticommutative**
Satisfying $b \cdot a = -(a \cdot b)$. The cross product is anticommutative: $\mathbf{v} \times \mathbf{u} = -(\mathbf{u} \times \mathbf{v})$, so $\mathbf{u} \times \mathbf{u} = \mathbf{0}$.
See [Chapter 1](01-Vectors.md#15-the-cross-product).

**Asymptotically stable**
An equilibrium of $x' = Ax$ that is stable and that every solution tends to as $t \to \infty$. For $x' = Ax$ this happens exactly when every eigenvalue has negative real part.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability).

**Attention**
The operation at the heart of transformer networks: each position forms a weighted average of value vectors, with weights given by the softmax of the dot products of its query vector with all the key vectors.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#194-machine-learning).

**Attitude**
The orientation of a rigid body such as a spacecraft or rover, described by the rotation that carries a reference frame to the body's frame.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#133-every-rotation-in-3d-has-an-axis).

**Augmented matrix**
The matrix of coefficients of a linear system with the right-hand sides added as a last column, written $[A \mid b]$. Its rows are the equations.
See [Chapter 2](02-Systems-of-Linear-Equations.md#21-lines-meeting-three-pictures).

**Axis (of a rotation)**
The line of vectors fixed by a rotation of space. Every rotation of $\mathbb{R}^3$ has one (Euler's rotation theorem), and turns the plane perpendicular to it by an angle.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#133-every-rotation-in-3d-has-an-axis).

## B

**Back substitution**
Solving an upper triangular system from the bottom up: the last equation gives the last unknown, which is put into the equation above, and so on.
See [Chapter 2](02-Systems-of-Linear-Equations.md#22-gaussian-elimination-step-by-step) and [Chapter 3](03-Matrices.md#36-lu-factorisation).

**Backward error analysis**
Asking not how wrong a computed answer is, but for which nearby problem it is the exact answer. It was developed by James Wilkinson in the 1950s and 1960s.
See [Chapter 18](18-Numerical-Linear-Algebra.md#182-conditioning-and-stability).

**Backward stable**
An algorithm for $Ax = b$ whose computed $\hat x$ solves $(A + \delta A)\hat x = b$ exactly for some $\delta A$ with $\|\delta A\|/\|A\|$ a modest multiple of the unit roundoff. Then the forward error is at most about $\kappa(A)$ times the unit roundoff.
See [Chapter 18](18-Numerical-Linear-Algebra.md#182-conditioning-and-stability).

**Banach space**
A complete normed vector space. Examples are $\ell^p$ and the continuous functions on $[0, 1]$ with the sup norm.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Basic variable**
Another name for a pivot variable.
See [Chapter 2](02-Systems-of-Linear-Equations.md#24-free-variables-and-the-solution-set).

**Basis**
A list of vectors that is linearly independent and spans the space. Every vector is then a combination of the basis vectors in exactly one way.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#52-bases).

**Bell state**
The two-qubit state $\frac{1}{\sqrt2}(|00\rangle + |11\rangle)$. It is not a pure tensor, so it is entangled: neither qubit has a state of its own.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Bessel's inequality**
For an orthonormal list $e_1, e_2, \ldots$ in an inner product space, $\sum_j |\langle v, e_j\rangle|^2 \le \|v\|^2$. Equality for every $v$ is Parseval's identity.
See [Chapter 11](11-Inner-Product-Spaces.md#116-functions-as-vectors-fourier-coefficients-as-projections).

**Bilinear**
Linear in each of two arguments when the other is held fixed. A real inner product and the dot product are bilinear.
See [Chapter 11](11-Inner-Product-Spaces.md#111-inner-products-in-general).

**Bilinear form**
A function $b : V \times V \to F$ that is linear in each argument. In a basis it is given by a matrix $B$ with $b(u, v) = u^T B v$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Binet's formula**
The closed formula $F_k = (\varphi^k - \psi^k)/\sqrt5$ for the Fibonacci numbers, where $\varphi = (1 + \sqrt5)/2$ and $\psi = (1 - \sqrt5)/2$ are the eigenvalues of the Fibonacci matrix.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#94-powers-of-matrices-and-fibonacci-by-eigenvalues).

**Bounded operator**
A linear map between normed spaces with $\|Tx\| \le C\|x\|$ for some constant $C$. Bounded is the same as continuous, and every linear map between finite-dimensional spaces is bounded.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

## C

**Cancellation**
The loss of relative accuracy when two nearly equal floating point numbers are subtracted: the leading digits cancel, and the rounding errors that were tiny become large relative to the answer.
See [Chapter 18](18-Numerical-Linear-Algebra.md#181-floating-point-and-why-elimination-needs-pivoting).

**Cartan-Dieudonné theorem**
Every orthogonal transformation of an $n$-dimensional space is a product of at most $n$ reflections, and the same holds for any nondegenerate symmetric bilinear form over a field of characteristic not 2.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#136-householder-reflections).

**Catalan number**
The number $C_m = \frac{1}{m+1}\binom{2m}{m}$. It counts rooted plane trees with $m$ edges, and in random matrix theory it is the limit of the $2m$-th moment of the eigenvalues, which is how the semicircle law is proved.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#204-random-matrices).

**Cauchy sequence**
A sequence whose terms get arbitrarily close to each other: for every $\epsilon > 0$, $\|v_k - v_l\| < \epsilon$ for all large $k$ and $l$.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Cauchy-Binet formula**
A formula for $\det(AB)$ when $A$ is $k \times n$ and $B$ is $n \times k$: the sum, over the $k$-element sets of indices, of products of matching $k \times k$ minors. Exterior powers make it the rule $\Lambda^k(ST) = \Lambda^k S\,\Lambda^k T$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#175-exterior-algebra-and-the-determinant-again).

**Cauchy-Schwarz inequality**
$|\langle u, v\rangle| \le \|u\|\|v\|$, with equality exactly when $u$ and $v$ are parallel. For vectors in $\mathbb{R}^n$ it reads $|\mathbf{u}\cdot\mathbf{v}| \le \|\mathbf{u}\|\|\mathbf{v}\|$.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle) and [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**Cayley-Hamilton theorem**
Every square matrix satisfies its own characteristic polynomial: $p_A(A) = 0$. So the minimal polynomial divides the characteristic polynomial.
See [Chapter 16](16-Jordan-Form.md#164-cayley-hamilton-and-the-minimal-polynomial).

**Centre**
An equilibrium of a $2 \times 2$ system $x' = Ax$ with purely imaginary eigenvalues: solutions go round closed ellipses. It is stable but not asymptotically stable.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability).

**Change-of-basis matrix**
The matrix $P$ whose columns are the new basis vectors written in the old coordinates. It turns new coordinates into old ones, $x = Px'$, and $P^{-1}$ goes back.
See [Chapter 6](06-Linear-Maps.md#66-change-of-basis-and-similar-matrices).

**Character (of a representation)**
The function $\chi_\rho(g) = \operatorname{tr}\rho(g)$ on a group. Characters of irreducible representations are orthonormal, and a complex representation of a finite group is determined by its character.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#203-representation-theory).

**Character table**
The table of the values of the irreducible characters of a finite group, one row per irreducible representation and one column per conjugacy class.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#203-representation-theory).

**Characteristic polynomial**
The polynomial $p_A(\lambda) = \det(A - \lambda I)$ of an $n \times n$ matrix $A$, of degree $n$. Its roots are the eigenvalues; similar matrices have the same one.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#92-the-characteristic-polynomial).

**Cheeger's inequality**
An inequality that bounds how well a graph can be cut into two balanced pieces from above and below in terms of the second Laplacian eigenvalue. It justifies spectral clustering.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Cholesky factorisation**
The factorisation $A = LL^T$ of a symmetric positive definite matrix, with $L$ lower triangular with positive diagonal. It exists exactly when $A$ is positive definite, and $L$ is unique.
See [Chapter 14](14-The-Spectral-Theorem.md#144-positive-definite-matrices-and-cholesky).

**Closure**
The requirement that adding two vectors of a set, or scaling one, gives a vector in the same set. It is the axiom that most often fails when a candidate set is not a vector space or subspace.
See [Chapter 4](04-Vector-Spaces.md#41-the-axioms).

**Codeword**
An element of a code. A linear code of dimension $k$ over $\mathbb{F}_2$ has $2^k$ codewords.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Coefficient (of a linear equation)**
The number multiplying each unknown in a linear equation $a_1 x_1 + \cdots + a_n x_n = b$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#21-lines-meeting-three-pictures).

**Cofactor**
The signed minor $C_{ij} = (-1)^{i+j} M_{ij}$. Expanding the determinant along a row or column multiplies the entries by their cofactors and adds.
See [Chapter 8](08-Determinants.md#85-cofactors-and-cramers-rule).

**Column space**
The span $C(A)$ of the columns of an $m \times n$ matrix $A$, a subspace of $\mathbb{R}^m$. The system $Ax = b$ has a solution exactly when $b$ is in the column space.
See [Chapter 4](04-Vector-Spaces.md#43-span) and [Chapter 7](07-The-Four-Subspaces.md#71-four-subspaces-from-one-matrix).

**Column-stochastic**
A square matrix with nonnegative entries whose columns each add up to 1. The transition matrix of a Markov chain, written so that it acts on column vectors, is column-stochastic.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#96-markov-chains-and-the-steady-state-and-pagerank).

**Commutator**
The matrix $[A, B] = AB - BA$. It is zero exactly when $A$ and $B$ commute, and in quantum mechanics it bounds how sharply two observables can both be known.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Compact operator**
An operator that maps the unit ball to a set whose closure is compact. Compact self-adjoint operators on a Hilbert space have an orthonormal basis of eigenvectors, as symmetric matrices do.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Companion matrix**
The matrix that turns a higher-order linear equation or recurrence into a first-order system. Its characteristic polynomial is the polynomial of the equation, and companion blocks build the rational canonical form.
See [Chapter 10](10-Applications-of-Eigenvalues.md#101-systems-of-differential-equations-x-ax) and [Chapter 16](16-Jordan-Form.md#166-rational-canonical-form).

**Compatibility conditions**
The linear equations on $b$ that must hold for $Ax = b$ to have a solution. They come from the zero rows of the echelon form and say that $b$ is orthogonal to the left null space.
See [Chapter 7](07-The-Four-Subspaces.md#73-when-does-ax-b-have-a-solution).

**Complement (of a subspace)**
A subspace $W$ with $V = U \oplus W$. Every subspace of a finite-dimensional space has one, but it is not unique; the orthogonal complement is a natural choice.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#55-dimensions-of-subspaces-sums-and-intersections).

**Complete**
A normed space in which every Cauchy sequence converges to a limit in the space. Every finite-dimensional normed space is complete.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Complexification**
The complex vector space $V_{\mathbb{C}} = \mathbb{C} \otimes_{\mathbb{R}} V$ made from a real one, in which a real matrix can have complex eigenvectors.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#174-tensor-products).

**Components**
The numbers in the list that records a vector, such as $3$ and $4$ in $(3, 4)$.
See [Chapter 1](01-Vectors.md#11-arrows-and-lists-of-numbers).

**Compressed sensing**
Recovering a sparse signal from far fewer linear measurements than its length, by solving the convex problem of minimising $\|x\|_1$ subject to $Ax = b$.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#195-coding-theory-again-and-compressed-sensing).

**Compressed sparse row**
A format for storing a sparse matrix as three arrays: the nonzero values row by row, their column indices, and where each row starts.
See [Chapter 18](18-Numerical-Linear-Algebra.md#185-sparse-matrices).

**Condition number**
For an invertible matrix, $\kappa(A) = \|A\|\|A^{-1}\|$, which for the 2-norm is $\sigma_1/\sigma_n$. It bounds how much relative errors in the data can be magnified in the solution of $Ax = b$.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#156-condition-numbers) and [Chapter 18](18-Numerical-Linear-Algebra.md#182-conditioning-and-stability).

**Conditioning**
How sensitive the answer to a problem is to small changes in the data. It is a property of the problem, not of the algorithm used to solve it.
See [Chapter 18](18-Numerical-Linear-Algebra.md#182-conditioning-and-stability).

**Cone**
A set closed under addition and under scaling by non-negative numbers, such as the vectors with all entries $\ge 0$. It is not a vector space.
See [Chapter 4](04-Vector-Spaces.md#45-non-examples).

**Congruent matrices**
Matrices related by $B' = P^T B P$ with $P$ invertible: the matrices of the same bilinear form in two bases.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Conjugate gradient method**
An iterative method for $Ax = b$ with $A$ symmetric positive definite. It searches along $A$-conjugate directions and gives the best approximation from the Krylov subspace at each step.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

**Conjugate symmetry**
The rule $\langle u, v\rangle = \overline{\langle v, u\rangle}$ of a complex inner product, in place of symmetry.
See [Chapter 11](11-Inner-Product-Spaces.md#111-inner-products-in-general).

**Conjugate transpose**
The matrix $A^* = \bar A^T$: transpose and take complex conjugates of the entries. The standard complex inner product is $\langle z, w\rangle = w^* z$.
See [Chapter 11](11-Inner-Product-Spaces.md#111-inner-products-in-general) and [Chapter 14](14-The-Spectral-Theorem.md#146-normal-operators-and-the-complex-spectral-theorem).

**Convex combination**
An affine combination with non-negative coefficients, such as $t\mathbf{p} + (1 - t)\mathbf{q}$ with $0 \le t \le 1$. The probability vectors are closed under convex combinations but are not a vector space.
See [Chapter 4](04-Vector-Spaces.md#45-non-examples).

**Coordinate vector**
The column $[v]_B = (c_1, \ldots, c_n)$ of the unique coefficients with $v = c_1 v_1 + \cdots + c_n v_n$ in a basis $B$. The map $v \mapsto [v]_B$ is an isomorphism from $V$ to $F^n$.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#54-coordinates).

**Coordinates**
The unique coefficients that write a vector as a combination of a given basis.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#52-bases).

**Courant-Fischer theorem**
Each eigenvalue of a symmetric matrix is a max-min (and a min-max) of the Rayleigh quotient over subspaces of the right dimension. It extends the fact that $\lambda_1$ is the largest value of $x^T A x / x^T x$.
See [Chapter 14](14-The-Spectral-Theorem.md#142-the-spectral-theorem).

**Cramer's rule**
For invertible $A$, the solution of $Ax = b$ is $x_j = \det A_j / \det A$, where $A_j$ is $A$ with column $j$ replaced by $b$.
See [Chapter 8](08-Determinants.md#85-cofactors-and-cramers-rule).

**Cross product**
For $\mathbf{u}, \mathbf{v} \in \mathbb{R}^3$, the vector $\mathbf{u} \times \mathbf{v} = (u_2v_3 - u_3v_2, u_3v_1 - u_1v_3, u_1v_2 - u_2v_1)$. It is perpendicular to both, and its length is the area of the parallelogram they span.
See [Chapter 1](01-Vectors.md#15-the-cross-product).

## D

**Decoupled**
Said of a system of equations that has split into separate one-variable equations, as $x' = Ax$ does in a basis of eigenvectors.
See [Chapter 10](10-Applications-of-Eigenvalues.md#101-systems-of-differential-equations-x-ax).

**Degree matrix**
For a graph, the diagonal matrix $D$ whose $i$-th diagonal entry is the number of edges at vertex $i$.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Degree (of a field extension)**
For a field $K$ containing $F$, the dimension $[K : F] = \dim_F K$ of $K$ as a vector space over $F$.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#55-dimensions-of-subspaces-sums-and-intersections).

**Determinant**
The number $\det A$ attached to a square matrix that is multilinear and alternating in the columns and equal to 1 for $I$. It is the signed volume scaling factor of $A$, and $\det A \ne 0$ exactly when $A$ is invertible.
See [Chapter 8](08-Determinants.md#81-area-and-volume-with-a-sign).

**Determinant function**
A function on $n \times n$ matrices that is multilinear in the columns, is zero when two columns are equal, and is 1 at $I$. There is exactly one, the determinant.
See [Chapter 8](08-Determinants.md#82-the-properties-that-define-it).

**Diagonal matrix**
A square matrix whose entries off the main diagonal are all zero. It scales each coordinate separately.
See [Chapter 3](03-Matrices.md#32-matrix-times-vector).

**Diagonalisable**
A square matrix similar to a diagonal matrix: $A = PDP^{-1}$, where the columns of $P$ are eigenvectors and $D$ holds the eigenvalues. This happens exactly when there is a basis of eigenvectors.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#93-diagonalisation-and-when-it-works).

**Dimension**
The number of vectors in any basis of a finite-dimensional space, written $\dim V$. The exchange lemma shows that every basis has the same length. For $\mathbb{R}^n$ it is $n$.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#53-the-exchange-lemma-and-dimension).

**Dimension formula**
For finite-dimensional subspaces, $\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#55-dimensions-of-subspaces-sums-and-intersections).

**Dirac notation**
The physicists' notation $\langle\phi|\psi\rangle$ for the inner product, with basis vectors written $|0\rangle$, $|1\rangle$. It is also called bra-ket notation.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Direct sum**
A sum $U + W$ in which every vector is $u + w$ in only one way, written $U \oplus W$. This happens exactly when $U \cap W = \{0\}$.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#55-dimensions-of-subspaces-sums-and-intersections).

**Displacement**
A vector thought of as the move from one point to another, $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$.
See [Chapter 1](01-Vectors.md#11-arrows-and-lists-of-numbers).

**Distance**
In $\mathbb{R}^n$ or an inner product space, the distance between $u$ and $v$ is $\|u - v\|$. For words of a code it is the number of places where they differ (the Hamming distance).
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle), [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality) and [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Distributivity**
The law $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$ for matrix products.
See [Chapter 3](03-Matrices.md#33-matrix-multiplication-as-composition).

**Division ring**
A number system in which every nonzero element has an inverse, but multiplication need not commute. The quaternions are the standard example.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#135-quaternions).

**Dot product**
For $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, the number $\mathbf{u} \cdot \mathbf{v} = u_1v_1 + \cdots + u_nv_n$. It equals $\|\mathbf{u}\|\|\mathbf{v}\|\cos\theta$, and is zero for perpendicular vectors.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle).

**Dual basis**
For a basis $v_1, \ldots, v_n$ of $V$, the functionals $\varphi_1, \ldots, \varphi_n$ in $V^*$ with $\varphi_i(v_j) = \delta_{ij}$. They read off the coordinates of a vector.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#171-dual-spaces-and-dual-bases).

**Dual map**
For a linear map $T : V \to W$, the map $T^* : W^* \to V^*$ with $T^*(\psi) = \psi \circ T$. In dual bases its matrix is the transpose of the matrix of $T$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#172-the-transpose-as-the-dual-map).

**Dual space**
The vector space $V^*$ of all linear functionals on $V$. It has the same dimension as $V$ when $V$ is finite-dimensional.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#171-dual-spaces-and-dual-bases).

## E

**Eckart-Young theorem**
Cutting the singular value decomposition after $k$ terms gives the best approximation of rank at most $k$, in both the spectral and the Frobenius norm.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#153-low-rank-approximation-and-image-compression).

**Eigenfunction**
An eigenvector that is a function, such as $e^{\lambda x}$ for the derivative operator.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#91-directions-a-map-does-not-turn).

**Eigenspace**
For an eigenvalue $\lambda$, the subspace $E_\lambda = \ker(A - \lambda I)$: the eigenvectors for $\lambda$ together with $0$.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#91-directions-a-map-does-not-turn).

**Eigenvalue**
A number $\lambda$ with $Av = \lambda v$ for some vector $v \ne 0$. The eigenvalues are the roots of the characteristic polynomial.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#91-directions-a-map-does-not-turn).

**Eigenvector**
A nonzero vector $v$ with $Av = \lambda v$: a direction that $A$ only stretches, shrinks or reverses, without turning.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#91-directions-a-map-does-not-turn).

**Elementary divisors**
The powers of irreducible polynomials into which the invariant factors of a matrix split. They give a variant of the rational canonical form, and for an algebraically closed field they are the Jordan blocks.
See [Chapter 16](16-Jordan-Form.md#166-rational-canonical-form).

**Elementary matrix**
A matrix obtained from $I$ by one elementary row operation. Multiplying by it on the left performs that row operation.
See [Chapter 3](03-Matrices.md#35-elementary-matrices-and-computing-inverses).

**Elementary row operations**
The three moves of elimination: replace a row by itself plus a multiple of another row, swap two rows, and scale a row by a nonzero number. They do not change the solutions of a system.
See [Chapter 2](02-Systems-of-Linear-Equations.md#22-gaussian-elimination-step-by-step).

**Elimination**
Solving a linear system by subtracting multiples of equations from others to remove unknowns, until the system is triangular. Done on the augmented matrix it is Gaussian elimination.
See [Chapter 2](02-Systems-of-Linear-Equations.md#22-gaussian-elimination-step-by-step).

**Embedding**
A vector in $\mathbb{R}^d$ that represents a word, image or user, learned so that similar things have nearby vectors. Similarity is measured by the cosine of the angle.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#194-machine-learning).

**Entanglement**
The state of a two-part system that is not a pure tensor $u \otimes v$. Neither part then has a state of its own; the Bell state is the standard example.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#174-tensor-products) and [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Equation of a plane**
The equation $ax + by + cz = d$, where $(a, b, c)$ is a normal to the plane.
See [Chapter 1](01-Vectors.md#14-lines-and-planes-in-space).

**Equilibrium**
A constant solution of a differential equation. For $x' = Ax$ the origin is always one.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability).

**Error locator**
In decoding Reed-Solomon codes, the unknown monic polynomial whose roots include the positions of the errors. The Berlekamp-Welch method finds it by solving linear equations.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#195-coding-theory-again-and-compressed-sensing).

**Error-detecting code**
A set of allowed messages chosen so that an error in transmission produces something not allowed. The even-weight words of length 3 over $\mathbb{F}_2$ are the simplest example.
See [Chapter 4](04-Vector-Spaces.md#44-fields-other-than-the-reals).

**Euler angles**
A description of a rotation of space by three angles, as a product of three coordinate rotations, such as yaw, pitch and roll.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#134-composing-rotations-euler-angles-and-gimbal-lock).

**Euler's rotation theorem**
Every rotation of $\mathbb{R}^3$, an orthogonal $3 \times 3$ matrix with determinant 1, has 1 as an eigenvalue, so it fixes an axis and turns the perpendicular plane.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#133-every-rotation-in-3d-has-an-axis).

**Exchange lemma**
If $u_1, \ldots, u_m$ is independent and $w_1, \ldots, w_n$ spans $V$, the $u$'s can be swapped in one at a time for $w$'s while keeping a spanning list; so $m \le n$. Also called the Steinitz exchange lemma or replacement theorem.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#53-the-exchange-lemma-and-dimension).

**Exponent of matrix multiplication**
The number $\omega$: the infimum of all $\tau$ such that $n \times n$ matrices can be multiplied in $O(n^\tau)$ operations. It is known that $2 \le \omega < 2.372$; whether $\omega = 2$ is open.
See [Chapter 18](18-Numerical-Linear-Algebra.md#186-fast-matrix-multiplication) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#205-open-problems).

**Exterior algebra**
The direct sum $\Lambda V = \Lambda^0 V \oplus \Lambda^1 V \oplus \cdots$ of all exterior powers, with the wedge product.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#175-exterior-algebra-and-the-determinant-again).

**Exterior power**
The space $\Lambda^k V$ spanned by wedges $v_1 \wedge \cdots \wedge v_k$, which are multilinear and change sign when two factors swap. If $\dim V = n$, then $\dim \Lambda^k V = \binom{n}{k}$, and $\Lambda^n T$ is multiplication by $\det T$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#175-exterior-algebra-and-the-determinant-again).

## F

**Fiedler vector**
The eigenvector of the graph Laplacian for the algebraic connectivity $\mu_2$. The signs of its entries suggest where to cut the graph in two.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Field**
A set with addition and multiplication obeying the usual laws, in which every nonzero element has a multiplicative inverse. $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ and $\mathbb{F}_2$ are fields.
See [Chapter 4](04-Vector-Spaces.md#44-fields-other-than-the-reals).

**Fill-in**
The new nonzero entries that elimination creates in a sparse matrix. Reordering the unknowns, by minimum degree or nested dissection, keeps it small.
See [Chapter 18](18-Numerical-Linear-Algebra.md#185-sparse-matrices).

**Finite-dimensional**
A vector space spanned by some finite list. It then has a basis, and all bases have the same length.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#52-bases).

**Floating point number**
A number stored as a sign, a significand and an exponent, like scientific notation in base 2. In double precision the significand has 53 binary digits.
See [Chapter 18](18-Numerical-Linear-Algebra.md#181-floating-point-and-why-elimination-needs-pivoting).

**Fourier coefficients**
The coefficients $\langle f, e_k\rangle$ of a function with respect to an orthonormal family such as sines and cosines. The partial Fourier sum is the orthogonal projection onto the span of the first terms.
See [Chapter 11](11-Inner-Product-Spaces.md#116-functions-as-vectors-fourier-coefficients-as-projections).

**Free columns**
The columns of a matrix in echelon form that contain no pivot.
See [Chapter 2](02-Systems-of-Linear-Equations.md#23-row-echelon-form-and-reduced-row-echelon-form).

**Free variables**
The unknowns that belong to free columns. They can be chosen freely, and the pivot variables are then determined by them.
See [Chapter 2](02-Systems-of-Linear-Equations.md#24-free-variables-and-the-solution-set).

**Frobenius inner product**
The inner product $\langle A, B\rangle = \operatorname{tr}(A^T B) = \sum a_{ij}b_{ij}$ on $m \times n$ matrices: the dot product of the matrices read as long vectors.
See [Chapter 11](11-Inner-Product-Spaces.md#111-inner-products-in-general).

**Frobenius norm**
The norm $\|A\|_F = \sqrt{\sum a_{ij}^2}$ of a matrix, the length of $A$ as a long vector. It equals $\sqrt{\sigma_1^2 + \cdots + \sigma_r^2}$.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#153-low-rank-approximation-and-image-compression).

## G

**Gaussian elimination**
Elimination done systematically on the augmented matrix: use each pivot to clear the entries below it, then solve the triangular system by back substitution.
See [Chapter 2](02-Systems-of-Linear-Equations.md#22-gaussian-elimination-step-by-step).

**Gaussian orthogonal ensemble**
The random real symmetric matrices whose entries on and above the diagonal are independent normal random variables. Scaled so that the off-diagonal entries have variance $1/N$, the eigenvalues are of order 1.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#204-random-matrices).

**Gauss-Markov theorem**
For a linear model with uncorrelated errors of equal variance, the least squares estimate has the smallest variance among unbiased linear estimates.
See [Chapter 12](12-Projections-and-Least-Squares.md#125-gauss-and-the-orbit-of-ceres).

**Gauss-Newton method**
A method for nonlinear least squares: linearise the model around the current guess, solve the linear least squares problem for a correction, and repeat.
See [Chapter 12](12-Projections-and-Least-Squares.md#125-gauss-and-the-orbit-of-ceres).

**Gauss-Seidel method**
An iterative method for $Ax = b$ that sweeps through the equations, solving each for its diagonal unknown and using each new value as soon as it is computed.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

**Gelfand's formula**
For a bounded operator on a complex Banach space, the spectrum is a nonempty compact set, and the spectral radius equals $\lim_{k\to\infty}\|T^k\|^{1/k}$.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Generalised eigenspace**
The subspace of vectors $v$ with $(A - \lambda I)^k v = 0$ for some $k$. The whole space is the direct sum of the generalised eigenspaces when the characteristic polynomial splits.
See [Chapter 16](16-Jordan-Form.md#162-generalised-eigenvectors).

**Generalised eigenvector**
A nonzero vector $v$ with $(A - \lambda I)^k v = 0$ for some $k \ge 1$. Ordinary eigenvectors are the case $k = 1$.
See [Chapter 16](16-Jordan-Form.md#162-generalised-eigenvectors).

**Geometric multiplicity**
The dimension of the eigenspace, $\dim\ker(A - \lambda I)$: the number of independent eigenvectors for $\lambda$. It is between 1 and the algebraic multiplicity.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#93-diagonalisation-and-when-it-works) and [Chapter 16](16-Jordan-Form.md#161-when-a-matrix-cannot-be-diagonalised).

**Gimbal lock**
The loss of one degree of freedom in Euler angles at certain orientations (pitch $90°$ for yaw, pitch and roll), where two of the three rotations turn about the same axis. Quaternions avoid it.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#134-composing-rotations-euler-angles-and-gimbal-lock).

**Google matrix**
The matrix $G = dL + \frac{1-d}{n}J$ built from the link matrix $L$ of the web, a damping factor $d$ and the all-ones matrix $J$. Its steady state is PageRank.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#96-markov-chains-and-the-steady-state-and-pagerank).

**Gram-Schmidt process**
The procedure that turns independent vectors $v_1, \ldots, v_k$ into an orthogonal (or orthonormal) list with the same spans, by subtracting from each $v_j$ its projections onto the vectors already made.
See [Chapter 11](11-Inner-Product-Spaces.md#114-the-gram-schmidt-process).

**Graph**
A set of vertices joined by edges. Spectral graph theory studies a graph through the eigenvalues of its matrices.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Graph Laplacian**
The matrix $L = D - A$ of a graph, where $D$ is the degree matrix and $A$ the adjacency matrix. It is symmetric and positive semidefinite, and the multiplicity of its eigenvalue 0 is the number of connected pieces.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Grassmannian**
The space of all $k$-dimensional subspaces of an $n$-dimensional space. Plücker coordinates, the coordinates of $v_1 \wedge \cdots \wedge v_k$, embed it in a projective space.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#175-exterior-algebra-and-the-determinant-again).

## H

**Hadamard conjecture**
The open conjecture that a Hadamard matrix of order $n$ exists for every $n$ divisible by 4. It goes back to Paley (1933).
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#205-open-problems).

**Hadamard gate**
The unitary matrix $\frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ acting on a qubit. It sends $|0\rangle$ to an equal superposition of $|0\rangle$ and $|1\rangle$.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Hadamard matrix**
An $n \times n$ matrix with entries $\pm1$ and orthogonal rows, so $HH^T = nI$. If one exists with $n \ge 3$, then $n$ is divisible by 4.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#205-open-problems).

**Hamel basis**
A basis in the sense of finite linear combinations, for a space that may be infinite-dimensional. Every vector space has one by Zorn's lemma, though often nobody can write it down.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#53-the-exchange-lemma-and-dimension) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Hamiltonian**
The Hermitian matrix $H$ that is the energy observable of a quantum system. It drives the time evolution $U(t) = e^{-iHt/\hbar}$.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Hamming code**
The $[7, 4]$ linear code over $\mathbb{F}_2$ whose check matrix has as columns all seven nonzero vectors of $\mathbb{F}_2^3$. It has minimum distance 3, corrects one error, and is perfect.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Hermitian matrix**
A complex square matrix equal to its conjugate transpose, $A^* = A$; also called self-adjoint. It is the complex version of symmetric, and has real eigenvalues and an orthonormal basis of eigenvectors.
See [Chapter 14](14-The-Spectral-Theorem.md#146-normal-operators-and-the-complex-spectral-theorem).

**Hessian matrix**
The symmetric matrix of second partial derivatives of a function of several variables. At a critical point, its eigenvalues decide between minimum, maximum and saddle point.
See [Chapter 14](14-The-Spectral-Theorem.md#145-the-second-derivative-test-revisited).

**Hilbert matrix**
The matrix with entries $H_{ij} = 1/(i + j - 1)$. Its condition number grows very fast with $n$, so it is the standard example of an ill-conditioned matrix.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#156-condition-numbers).

**Hilbert space**
An inner product space that is complete for the norm $\|v\| = \sqrt{\langle v, v\rangle}$, such as $\ell^2$ or $L^2[0, 1]$.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Hodge star**
The map from $\Lambda^k V$ to $\Lambda^{n-k} V$ given by the inner product and an orientation. In $\mathbb{R}^3$ it turns $u \wedge v$ into the cross product $u \times v$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#175-exterior-algebra-and-the-determinant-again).

**Homogeneous coordinates**
Representing a point $(x, y, z)$ of space by the 4-vector $(x, y, z, 1)$, so that translations and perspective projections become matrix multiplications.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#193-computer-graphics).

**Homogeneous system**
A linear system whose right-hand sides are all 0, $Ax = 0$. It always has the trivial solution, and its solutions form the null space.
See [Chapter 2](02-Systems-of-Linear-Equations.md#24-free-variables-and-the-solution-set).

**Householder reflection**
The orthogonal and symmetric matrix $H = I - 2vv^T/(v^T v)$, the reflection in the hyperplane perpendicular to $v$. Chosen well, it sends a given vector to a multiple of $e_1$, which is how software computes QR.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#136-householder-reflections).

**Hyperplane**
An $(n-1)$-dimensional flat set in $\mathbb{R}^n$, the solutions of one linear equation $a_1x_1 + \cdots + a_nx_n = b$ with not all $a_i$ zero.
See [Chapter 1](01-Vectors.md#14-lines-and-planes-in-space).

## I

**Idempotent**
A matrix with $P^2 = P$. Every projection matrix is idempotent; an idempotent matrix that is not symmetric is an oblique projection.
See [Chapter 12](12-Projections-and-Least-Squares.md#121-projecting-onto-a-line-and-onto-a-subspace).

**Identity matrix**
The square matrix $I$ (or $I_n$) with 1s on the main diagonal and 0s elsewhere. It satisfies $AI = IA = A$.
See [Chapter 3](03-Matrices.md#34-identity-inverse-transpose).

**Image**
The set $\operatorname{im} T = \{T(v)\}$ of all outputs of a linear map, a subspace of the target; also called the range. For $T(x) = Ax$ it is the column space.
See [Chapter 6](06-Linear-Maps.md#62-kernel-and-image).

**Inconsistent**
A linear system with no solution.
See [Chapter 2](02-Systems-of-Linear-Equations.md#21-lines-meeting-three-pictures).

**Indefinite**
A symmetric matrix or quadratic form with both positive and negative eigenvalues, so that it takes both signs.
See [Chapter 14](14-The-Spectral-Theorem.md#144-positive-definite-matrices-and-cholesky).

**Inertia matrix**
The symmetric $3 \times 3$ matrix $I$ of a rigid body that gives its rotational kinetic energy $\frac12\omega^T I\omega$. Its eigenvectors are the principal axes of the body.
See [Chapter 14](14-The-Spectral-Theorem.md#143-quadratic-forms-conic-sections-and-principal-axes).

**Infinite-dimensional**
A vector space with no finite spanning set, such as the space of all polynomials or of all functions on $\mathbb{R}$.
See [Chapter 4](04-Vector-Spaces.md#43-span).

**Injective**
A function that sends different inputs to different outputs; also called one-to-one. A linear map is injective exactly when its kernel is $\{0\}$.
See [Chapter 6](06-Linear-Maps.md#62-kernel-and-image).

**Inner product**
A rule assigning a number $\langle u, v\rangle$ to each pair of vectors that is linear in the first slot, symmetric (conjugate symmetric over $\mathbb{C}$), and positive: $\langle v, v\rangle > 0$ for $v \ne 0$. The dot product is the standard example.
See [Chapter 11](11-Inner-Product-Spaces.md#111-inner-products-in-general).

**Inner product space**
A vector space with a chosen inner product.
See [Chapter 11](11-Inner-Product-Spaces.md#111-inner-products-in-general).

**Intersection (of subspaces)**
The set $U \cap W$ of vectors lying in both subspaces. It is always a subspace, unlike the union.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#55-dimensions-of-subspaces-sums-and-intersections).

**Invariant factors**
The monic polynomials $d_1 \mid d_2 \mid \cdots \mid d_k$ that determine a matrix up to similarity over any field. The last is the minimal polynomial and their product is the characteristic polynomial.
See [Chapter 16](16-Jordan-Form.md#166-rational-canonical-form).

**Invariant (of similarity)**
A quantity that is the same for all similar matrices, such as the rank, trace, determinant, characteristic polynomial and eigenvalues. It is therefore a property of the linear operator itself.
See [Chapter 6](06-Linear-Maps.md#66-change-of-basis-and-similar-matrices).

**Invariant subspace**
A subspace $W$ with $T(W) \subseteq W$. For a representation, a subspace with $\rho(g)W \subseteq W$ for every $g$.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#133-every-rotation-in-3d-has-an-axis) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#203-representation-theory).

**Invariant subspace problem**
The open question whether every bounded operator on a complex separable Hilbert space of dimension at least 2 has a closed invariant subspace other than $\{0\}$ and the whole space. The answer is no for some Banach spaces.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#205-open-problems).

**Inverse iteration**
Power iteration applied to $(A - \mu I)^{-1}$. It finds the eigenvalue of $A$ nearest the shift $\mu$, and its eigenvector.
See [Chapter 18](18-Numerical-Linear-Algebra.md#184-power-iteration-and-the-qr-algorithm).

**Inverse matrix**
For a square matrix $A$, the matrix $A^{-1}$ with $AA^{-1} = A^{-1}A = I$, when it exists.
See [Chapter 3](03-Matrices.md#34-identity-inverse-transpose).

**Inversion (of a permutation)**
A pair of positions $i < j$ with $\sigma(i) > \sigma(j)$. The sign of a permutation is $(-1)$ to the number of inversions.
See [Chapter 8](08-Determinants.md#83-the-permutation-formula).

**Invertible**
A square matrix that has an inverse. Equivalently its determinant is nonzero, its rank is $n$, and $Ax = 0$ has only the solution $x = 0$.
See [Chapter 3](03-Matrices.md#34-identity-inverse-transpose).

**Invertible matrix theorem**
The list of conditions on a square matrix that are all equivalent to invertibility: $n$ pivots, $Ax = 0$ only for $x = 0$, $Ax = b$ solvable for every $b$, being a product of elementary matrices, and later $\det A \ne 0$.
See [Chapter 3](03-Matrices.md#35-elementary-matrices-and-computing-inverses).

**Irreducible matrix**
A nonnegative matrix in which every state can reach every other: for every $i, j$ some power has a positive $(i, j)$ entry. The Perron-Frobenius theorem then still gives a positive eigenvector.
See [Chapter 10](10-Applications-of-Eigenvalues.md#105-perron-frobenius-and-population-models).

**Irreducible representation**
A representation whose only invariant subspaces are $0$ and the whole space. By Maschke's theorem every complex representation of a finite group is a direct sum of them.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#203-representation-theory).

**Isomorphic**
Vector spaces with an isomorphism between them, written $V \cong W$. Finite-dimensional spaces over the same field are isomorphic exactly when they have the same dimension.
See [Chapter 6](06-Linear-Maps.md#65-isomorphisms).

**Isomorphism**
A linear map that is bijective, that is, injective and surjective. Its inverse is again linear.
See [Chapter 6](06-Linear-Maps.md#65-isomorphisms).

**Iteration matrix**
The matrix $M$ in an iterative method of the form $x_{k+1} = Mx_k + c$. The method converges for every start exactly when the spectral radius of $M$ is less than 1.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

**Iterative method**
A method that starts with a guess and improves it step by step, using the matrix only through products $Av$. Jacobi, Gauss-Seidel and conjugate gradients are examples.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

## J

**Jacobian matrix**
The matrix $J\Phi(p)$ of first partial derivatives of a map $\Phi$, its best linear approximation near $p$. The absolute value of its determinant is the local volume scaling factor in a change of variables.
See [Chapter 8](08-Determinants.md#86-determinant-as-volume-scaling).

**Jacobi's method**
An iterative method for $Ax = b$ that solves each equation for its diagonal unknown, using the old values of all the others at once.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

**Jordan block**
The matrix with $\lambda$ on the diagonal, 1s just above it, and 0s elsewhere. A Jordan chain of length $s$ gives a block of size $s$.
See [Chapter 16](16-Jordan-Form.md#162-generalised-eigenvectors).

**Jordan chain**
Vectors $v_1, \ldots, v_s$ with $(A - \lambda I)v_1 = 0$ and $(A - \lambda I)v_{j+1} = v_j$: an eigenvector followed by generalised eigenvectors.
See [Chapter 16](16-Jordan-Form.md#162-generalised-eigenvectors).

**Jordan normal form**
Every square matrix over $\mathbb{C}$ is similar to a block diagonal matrix of Jordan blocks, unique up to the order of the blocks. It is diagonal exactly when the matrix is diagonalisable.
See [Chapter 16](16-Jordan-Form.md#163-jordan-normal-form).

## K

**Kadison-Singer problem**
A 1959 question from operator theory, about whether certain states on an algebra of operators extend uniquely. It turned out to be about splitting sums of rank-one matrices into pieces of small norm, and was solved in 2013 by Marcus, Spielman and Srivastava.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Kernel**
The set $\ker T = \{v : T(v) = 0\}$ of vectors a linear map sends to zero, a subspace of the domain; also called the null space.
See [Chapter 4](04-Vector-Spaces.md#42-subspaces) and [Chapter 6](06-Linear-Maps.md#62-kernel-and-image).

**Kirchhoff's matrix-tree theorem**
The number of spanning trees of a graph equals any cofactor of its Laplacian, for example the determinant of $L$ with its first row and column deleted.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Kronecker delta**
The symbol $\delta_{ij}$, equal to 1 if $i = j$ and 0 otherwise. A list is orthonormal when $\langle u_i, u_j\rangle = \delta_{ij}$.
See [Chapter 11](11-Inner-Product-Spaces.md#113-orthogonal-and-orthonormal-bases).

**Kronecker product**
The block matrix $A \otimes B = (a_{ij}B)$: the matrix of the tensor product of two linear maps.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#174-tensor-products).

**Krylov subspace**
The span of $b, Ab, A^2b, \ldots, A^{k-1}b$. Conjugate gradients and many other iterative methods look for the best approximation in it.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

## L

**Lagrange's identity**
For vectors in $\mathbb{R}^3$, $\|\mathbf{u} \times \mathbf{v}\|^2 = \|\mathbf{u}\|^2\|\mathbf{v}\|^2 - (\mathbf{u}\cdot\mathbf{v})^2$. It shows that $\|\mathbf{u} \times \mathbf{v}\| = \|\mathbf{u}\|\|\mathbf{v}\|\sin\theta$.
See [Chapter 1](01-Vectors.md#15-the-cross-product).

**Laplace expansion**
Computing a determinant by expanding along a row or a column: $\det A = \sum_i a_{ij}C_{ij}$ for any column $j$, and likewise for rows. Also called cofactor expansion.
See [Chapter 8](08-Determinants.md#85-cofactors-and-cramers-rule).

**Leading entry**
The first nonzero entry of a row of a matrix in echelon form; also called its pivot.
See [Chapter 2](02-Systems-of-Linear-Equations.md#23-row-echelon-form-and-reduced-row-echelon-form).

**Least squares solution**
A vector $\hat x$ that minimises $\|Ax - b\|$ when $Ax = b$ has no solution. It solves the normal equations $A^T A\hat x = A^T b$, and $A\hat x$ is the projection of $b$ onto the column space.
See [Chapter 12](12-Projections-and-Least-Squares.md#122-the-normal-equations).

**Left null space**
The null space $N(A^T)$ of the transpose: the vectors $y$ with $y^T A = 0$, which record the relations among the rows. It is the orthogonal complement of the column space in $\mathbb{R}^m$.
See [Chapter 7](07-The-Four-Subspaces.md#71-four-subspaces-from-one-matrix).

**Left singular vectors**
The columns $u_1, \ldots, u_m$ of $U$ in the singular value decomposition $A = U\Sigma V^T$; eigenvectors of $AA^T$.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#151-statement-and-geometric-meaning).

**Legendre polynomials**
The orthogonal polynomials obtained by Gram-Schmidt from $1, x, x^2, \ldots$ with the inner product $\int_{-1}^1 f g\,dx$, normalised so that their value at 1 is 1.
See [Chapter 11](11-Inner-Product-Spaces.md#114-the-gram-schmidt-process).

**Leibniz formula**
The formula $\det A = \sum_\sigma \operatorname{sgn}(\sigma)\, a_{\sigma(1)1}\cdots a_{\sigma(n)n}$, a sum over all $n!$ permutations, picking one entry from each row and each column.
See [Chapter 8](08-Determinants.md#83-the-permutation-formula).

**Length**
The size of a vector, $\|\mathbf{v}\| = \sqrt{v_1^2 + \cdots + v_n^2}$; also called its norm.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle).

**Leslie matrix**
A population model matrix whose first row holds birth rates by age class and whose sub-diagonal holds survival rates. Its Perron root is the long-run growth factor.
See [Chapter 10](10-Applications-of-Eigenvalues.md#105-perron-frobenius-and-population-models).

**Level lines**
The lines $\varphi(x) = c$ of a linear functional on $\mathbb{R}^2$. A functional is best drawn as this stack of parallel lines rather than as an arrow.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#171-dual-spaces-and-dual-bases).

**Linear code**
A $k$-dimensional subspace of $\mathbb{F}_2^n$ (or $\mathbb{F}_q^n$), an $[n, k]$ code. It carries $k$ message symbols in each block of $n$.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Linear combination**
A vector of the form $c_1\mathbf{v}_1 + \cdots + c_k\mathbf{v}_k$, made by scaling vectors and adding.
See [Chapter 1](01-Vectors.md#12-adding-and-scaling).

**Linear dependence lemma**
If a list is linearly dependent, some vector in it is a combination of the earlier ones, and removing it does not change the span.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#51-linear-independence).

**Linear equation**
An equation in which each unknown appears only multiplied by a number and the products are added: $a_1x_1 + \cdots + a_nx_n = b$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#21-lines-meeting-three-pictures).

**Linear functional**
A linear map from a vector space to its field of scalars; also called a covector or linear form.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#171-dual-spaces-and-dual-bases).

**Linear map**
A function $T : V \to W$ with $T(u + v) = T(u) + T(v)$ and $T(cv) = cT(v)$; also called a linear transformation. Between $F^n$ and $F^m$ every linear map is multiplication by a matrix.
See [Chapter 6](06-Linear-Maps.md#61-linear-maps).

**Linear operator**
A linear map from a vector space to itself.
See [Chapter 6](06-Linear-Maps.md#61-linear-maps).

**Linear recurrence**
A sequence defined by a rule such as $a_{k+1} = 5a_k - 6a_{k-1}$. Stacking consecutive terms turns it into $u_{k+1} = Au_k$, solved by eigenvalues.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#94-powers-of-matrices-and-fibonacci-by-eigenvalues).

**Linear regression**
Fitting $y \approx Xw$ to data by least squares.
See [Chapter 12](12-Projections-and-Least-Squares.md#123-fitting-lines-and-curves) and [Chapter 19](19-Linear-Algebra-in-the-World.md#194-machine-learning).

**Linear relation**
A combination of vectors with at least one nonzero coefficient that gives the zero vector; also called a dependence relation.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#51-linear-independence).

**Linear system**
A finite collection of linear equations in the same unknowns, written $Ax = b$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#21-lines-meeting-three-pictures).

**Linearly dependent**
A list of vectors that is not linearly independent: some combination with not all coefficients zero gives $0$.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#51-linear-independence).

**Linearly independent**
A list $v_1, \ldots, v_k$ for which $c_1v_1 + \cdots + c_kv_k = 0$ only when all $c_i = 0$. No vector in it is a combination of the others.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#51-linear-independence).

**Link matrix**
In PageRank, the column-stochastic matrix with entry $1/k$ in position $(i, j)$ when page $j$ has $k$ links and one of them goes to page $i$.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#96-markov-chains-and-the-steady-state-and-pagerank).

**Lower triangular**
A square matrix whose entries above the main diagonal are all zero.
See [Chapter 3](03-Matrices.md#36-lu-factorisation).

**LU factorisation**
Writing $A = LU$ with $L$ lower triangular with 1s on the diagonal (holding the multipliers) and $U$ upper triangular (the result of elimination). It is elimination recorded, and solves $Ax = b$ by two triangular solves.
See [Chapter 3](03-Matrices.md#36-lu-factorisation).

## M

**Markov chain**
A process that moves between a finite list of states, choosing the next state at random with probabilities that depend only on the current state. Its transition matrix is column-stochastic.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#96-markov-chains-and-the-steady-state-and-pagerank).

**Maschke's theorem**
Every finite-dimensional complex representation of a finite group is a direct sum of irreducible representations.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#203-representation-theory).

**Matrix**
A rectangular array of numbers, with $m$ rows and $n$ columns. It acts as a machine: multiplying by an $m \times n$ matrix is a linear map from $\mathbb{R}^n$ to $\mathbb{R}^m$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#21-lines-meeting-three-pictures) and [Chapter 3](03-Matrices.md#31-matrices-as-tables-and-as-machines).

**Matrix exponential**
For a square matrix $M$, $e^M = I + M + M^2/2! + \cdots = \sum M^k/k!$. The solution of $x' = Ax$ is $x(t) = e^{tA}x(0)$.
See [Chapter 10](10-Applications-of-Eigenvalues.md#102-the-matrix-exponential) and [Chapter 16](16-Jordan-Form.md#165-the-matrix-exponential-again).

**Matrix multiplication**
The product $AB$, whose $(i, j)$ entry is row $i$ of $A$ times column $j$ of $B$. It is the composition of the linear maps: first $B$, then $A$. It is associative but not commutative.
See [Chapter 3](03-Matrices.md#33-matrix-multiplication-as-composition).

**Matrix of a linear map**
For a linear map $T : V \to W$ and bases $B$ of $V$ and $C$ of $W$, the matrix $[T]_{C \leftarrow B}$ whose $j$-th column is the coordinate vector of $T(v_j)$. Composition of maps becomes multiplication of their matrices.
See [Chapter 6](06-Linear-Maps.md#64-the-matrix-of-a-linear-map).

**Maximum norm**
The norm $\|x\|_\infty = \max|x_i|$ on $\mathbb{R}^n$. It does not come from an inner product.
See [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**MDS code**
A linear code that meets the Singleton bound $d = n - k + 1$ (maximum distance separable). Reed-Solomon codes are MDS.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#195-coding-theory-again-and-compressed-sensing).

**Metric space**
A set with a distance function that is positive, symmetric and obeys the triangle inequality. Every inner product space is one, with $d(u, v) = \|u - v\|$.
See [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**Minimal polynomial**
The monic polynomial $m_A$ of smallest degree with $m_A(A) = 0$. It divides every polynomial that kills $A$, including the characteristic polynomial, and $A$ is diagonalisable exactly when it has no repeated roots.
See [Chapter 16](16-Jordan-Form.md#164-cayley-hamilton-and-the-minimal-polynomial).

**Minimum degree ordering**
An ordering for sparse elimination that eliminates the unknowns with the fewest connections first, to limit fill-in.
See [Chapter 18](18-Numerical-Linear-Algebra.md#185-sparse-matrices).

**Minimum distance**
The smallest distance between two different codewords of a code, equal for a linear code to the smallest weight of a nonzero codeword. A code with minimum distance $d$ corrects $\lfloor (d-1)/2 \rfloor$ errors.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Minor**
The determinant $M_{ij}$ of the matrix left when row $i$ and column $j$ are deleted.
See [Chapter 8](08-Determinants.md#85-cofactors-and-cramers-rule).

**Module**
A structure like a vector space but with scalars from a ring such as $\mathbb{Z}$ rather than a field.
See [Chapter 4](04-Vector-Spaces.md#45-non-examples).

**Multilinear**
A function of several vectors (or of the columns of a matrix) that is linear in each one when the others are held fixed.
See [Chapter 8](08-Determinants.md#82-the-properties-that-define-it).

**Multiple regression**
Least squares with several explanatory variables, each a column of the matrix $A$.
See [Chapter 12](12-Projections-and-Least-Squares.md#123-fitting-lines-and-curves).

**Multipliers**
In elimination, the numbers by which the pivot row is multiplied before it is subtracted: entry to be removed divided by the pivot. They are the entries of $L$ in $A = LU$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#22-gaussian-elimination-step-by-step) and [Chapter 3](03-Matrices.md#36-lu-factorisation).

## N

**Natural (map)**
A map defined without choosing a basis, such as the map from $V$ to its double dual $V^{**}$ sending $v$ to evaluation at $v$; also called canonical.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#171-dual-spaces-and-dual-bases).

**Nested dissection**
An ordering for sparse elimination that splits the graph of the matrix by small separators and numbers the separators last.
See [Chapter 18](18-Numerical-Linear-Algebra.md#185-sparse-matrices).

**Neumann series**
The series $(I - T)^{-1} = I + T + T^2 + \cdots$, which converges when $\|T\| < 1$.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Nilpotent**
A square matrix with $N^k = 0$ for some $k$. Its only eigenvalue is 0, the exponential series of $N$ stops, and $A - \lambda I$ is nilpotent on each generalised eigenspace.
See [Chapter 10](10-Applications-of-Eigenvalues.md#102-the-matrix-exponential) and [Chapter 16](16-Jordan-Form.md#162-generalised-eigenvectors).

**Node**
An equilibrium of a $2 \times 2$ system $x' = Ax$ with two real eigenvalues of the same sign. It is stable when both are negative.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability).

**Nondegenerate**
A bilinear form whose matrix is invertible: $b(u, v) = 0$ for all $v$ forces $u = 0$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Norm**
The length $\|v\|$ of a vector. More generally, any function with $\|v\| > 0$ for $v \ne 0$, $\|cv\| = |c|\|v\|$ and the triangle inequality. An inner product gives the norm $\sqrt{\langle v, v\rangle}$.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle), [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Normal equations**
The equations $A^T A\hat x = A^T b$ for the least squares solution. They say that the error $b - A\hat x$ is normal (perpendicular) to the column space.
See [Chapter 12](12-Projections-and-Least-Squares.md#121-projecting-onto-a-line-and-onto-a-subspace).

**Normal mode**
A motion of a vibrating system in which every part oscillates at the same frequency, in step, with a fixed shape. The shapes are eigenvectors and the frequencies come from the eigenvalues.
See [Chapter 10](10-Applications-of-Eigenvalues.md#103-coupled-oscillators-and-normal-modes).

**Normal operator**
A complex matrix with $AA^* = A^*A$. By the complex spectral theorem these are exactly the matrices with an orthonormal basis of eigenvectors. Hermitian, skew-Hermitian and unitary matrices are normal.
See [Chapter 14](14-The-Spectral-Theorem.md#146-normal-operators-and-the-complex-spectral-theorem).

**Normal (vector)**
A nonzero vector perpendicular to every direction in a plane or surface.
See [Chapter 1](01-Vectors.md#14-lines-and-planes-in-space) and [Chapter 19](19-Linear-Algebra-in-the-World.md#193-computer-graphics).

**Normalising**
Dividing a nonzero vector by its length to get the unit vector in the same direction.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle) and [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**Null space**
The set $N(A)$ of solutions of $Ax = 0$, a subspace of $\mathbb{R}^n$; also called the kernel. Its dimension is $n - r$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#24-free-variables-and-the-solution-set), [Chapter 4](04-Vector-Spaces.md#42-subspaces) and [Chapter 7](07-The-Four-Subspaces.md#71-four-subspaces-from-one-matrix).

**Nullity**
The dimension of the kernel of a linear map.
See [Chapter 6](06-Linear-Maps.md#63-the-rank-nullity-theorem).

## O

**Observable**
In quantum mechanics, a Hermitian matrix. The possible results of measuring it are its eigenvalues.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**One-line notation**
Writing a permutation $\sigma$ as the list $\sigma(1), \sigma(2), \ldots, \sigma(n)$.
See [Chapter 8](08-Determinants.md#83-the-permutation-formula).

**Operator norm**
The norm $\|A\| = \max_{x \ne 0}\|Ax\|/\|x\|$ of a matrix, the most it can stretch a vector for a chosen vector norm. For the 2-norm it is the largest singular value.
See [Chapter 18](18-Numerical-Linear-Algebra.md#182-conditioning-and-stability).

**Orientation**
The sign of a determinant: whether a list of vectors, or a map, keeps the handedness of the standard basis or reverses it like a mirror.
See [Chapter 8](08-Determinants.md#81-area-and-volume-with-a-sign).

**Orthogonal**
Perpendicular: vectors with $\langle u, v\rangle = 0$, written $u \perp v$. A list is orthogonal if every two of its vectors are, and subspaces are orthogonal if every vector of one is orthogonal to every vector of the other.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle), [Chapter 7](07-The-Four-Subspaces.md#74-the-big-picture) and [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**Orthogonal complement**
For a subspace $W$, the subspace $W^\perp$ of all vectors orthogonal to every vector of $W$. In finite dimensions $V = W \oplus W^\perp$ and $(W^\perp)^\perp = W$.
See [Chapter 7](07-The-Four-Subspaces.md#74-the-big-picture) and [Chapter 11](11-Inner-Product-Spaces.md#115-orthogonal-complements).

**Orthogonal group**
The group $O(n)$ of all $n \times n$ orthogonal matrices under multiplication.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#131-orthogonal-matrices-preserve-length).

**Orthogonal matrix**
A real square matrix $Q$ with $Q^T Q = I$, so $Q^{-1} = Q^T$: its columns are orthonormal. Orthogonal matrices preserve lengths and angles, and have determinant $\pm1$.
See [Chapter 11](11-Inner-Product-Spaces.md#113-orthogonal-and-orthonormal-bases) and [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#131-orthogonal-matrices-preserve-length).

**Orthogonal projection**
The vector $p$ in a subspace $W$ closest to $v$, characterised by $v - p \perp W$. For a subspace of $\mathbb{R}^m$ with basis the columns of $A$, it is $Pv$ with $P = A(A^TA)^{-1}A^T$.
See [Chapter 11](11-Inner-Product-Spaces.md#115-orthogonal-complements) and [Chapter 12](12-Projections-and-Least-Squares.md#121-projecting-onto-a-line-and-onto-a-subspace).

**Orthonormal**
A list of vectors that is orthogonal and has every vector of length 1: $\langle u_i, u_j\rangle = \delta_{ij}$.
See [Chapter 11](11-Inner-Product-Spaces.md#113-orthogonal-and-orthonormal-bases).

**Orthonormal basis**
A basis that is an orthonormal list. Coordinates in it are inner products, $c_j = \langle v, u_j\rangle$. In a Hilbert space it means a maximal orthonormal family.
See [Chapter 11](11-Inner-Product-Spaces.md#113-orthogonal-and-orthonormal-bases) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

## P

**PageRank**
The importance score of a web page: the steady state of a Markov chain in which a random surfer follows links, or with a small probability jumps to a random page. It is found by power iteration.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#96-markov-chains-and-the-steady-state-and-pagerank).

**Parallelepiped**
The slanted box spanned by three vectors in space. Its signed volume is the scalar triple product, a $3 \times 3$ determinant.
See [Chapter 1](01-Vectors.md#15-the-cross-product) and [Chapter 8](08-Determinants.md#81-area-and-volume-with-a-sign).

**Parallelogram law**
$\|u + v\|^2 + \|u - v\|^2 = 2\|u\|^2 + 2\|v\|^2$. A norm comes from an inner product exactly when it satisfies this law.
See [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Parallelogram rule**
The picture of vector addition in which $\mathbf{u}$ and $\mathbf{v}$ are two sides of a parallelogram and $\mathbf{u} + \mathbf{v}$ is its diagonal.
See [Chapter 1](01-Vectors.md#12-adding-and-scaling).

**Parametric form**
A description of a line as $\mathbf{p} + t\mathbf{d}$ (or of a plane with two parameters), where the parameter $t$ runs through the real numbers.
See [Chapter 1](01-Vectors.md#14-lines-and-planes-in-space).

**Parametric vector form**
The solution set of a linear system written as a particular solution plus free variables times fixed vectors.
See [Chapter 2](02-Systems-of-Linear-Equations.md#24-free-variables-and-the-solution-set).

**Parity check**
A row of the check matrix $H$ of a linear code: a set of positions whose bits must add up to 0 mod 2 in every codeword.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Parseval's identity**
For an orthonormal basis, $\|v\|^2 = \sum_j|\langle v, u_j\rangle|^2$: Pythagoras in coordinates. For Fourier series and Hilbert spaces it holds with infinitely many terms.
See [Chapter 11](11-Inner-Product-Spaces.md#113-orthogonal-and-orthonormal-bases) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Partial pivoting**
In elimination, choosing as pivot the entry of largest absolute value on or below the diagonal in the current column, and swapping it into place. It keeps the multipliers at most 1 in size.
See [Chapter 18](18-Numerical-Linear-Algebra.md#181-floating-point-and-why-elimination-needs-pivoting).

**Particular solution**
Any one solution $x_p$ of $Ax = b$. All solutions are then $x_p$ plus the solutions of $Ax = 0$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#24-free-variables-and-the-solution-set) and [Chapter 7](07-The-Four-Subspaces.md#73-when-does-ax-b-have-a-solution).

**Pauli matrices**
The Hermitian and unitary matrices $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$ and $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$, the observables of spin for a qubit.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Perfect code**
A code in which every word is within the correcting distance of exactly one codeword. The Hamming codes are perfect.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Permutation**
A rearrangement $\sigma$ of $\{1, \ldots, n\}$. There are $n!$ of them.
See [Chapter 8](08-Determinants.md#83-the-permutation-formula).

**Permutation matrix**
The identity matrix with its rows (or columns) reordered. Multiplying by it reorders rows; its determinant is the sign of the permutation.
See [Chapter 3](03-Matrices.md#35-elementary-matrices-and-computing-inverses) and [Chapter 8](08-Determinants.md#83-the-permutation-formula).

**Perron root**
For a matrix with positive entries, the eigenvalue $r > 0$ that is larger in absolute value than all the others.
See [Chapter 10](10-Applications-of-Eigenvalues.md#105-perron-frobenius-and-population-models).

**Perron vector**
For a matrix with positive entries, the eigenvector with positive entries for the Perron root, unique up to a positive multiple.
See [Chapter 10](10-Applications-of-Eigenvalues.md#105-perron-frobenius-and-population-models).

**Perron-Frobenius theorem**
A matrix with positive entries has a positive eigenvalue $r$, strictly larger in absolute value than all others, with a positive eigenvector (Perron, 1907). Frobenius (1912) extended a weaker form to irreducible nonnegative matrices.
See [Chapter 10](10-Applications-of-Eigenvalues.md#105-perron-frobenius-and-population-models).

**Perspective projection**
The map that sends a point in space to where the ray from the eye through it meets the screen. In homogeneous coordinates it is a matrix followed by division by the last coordinate.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#193-computer-graphics).

**Pivot**
The entry used to clear a column during elimination: the first nonzero entry of its row in echelon form.
See [Chapter 2](02-Systems-of-Linear-Equations.md#22-gaussian-elimination-step-by-step).

**Pivot columns**
The columns of a matrix in echelon form that contain a pivot. The matching columns of the original matrix are a basis for its column space.
See [Chapter 2](02-Systems-of-Linear-Equations.md#23-row-echelon-form-and-reduced-row-echelon-form) and [Chapter 7](07-The-Four-Subspaces.md#71-four-subspaces-from-one-matrix).

**Pivot variables**
The unknowns that belong to pivot columns; also called basic variables. They are determined by the free variables.
See [Chapter 2](02-Systems-of-Linear-Equations.md#24-free-variables-and-the-solution-set).

**Point spectrum**
The eigenvalues of an operator: the $\lambda$ with $T - \lambda I$ not injective. In infinite dimensions it can be smaller than the spectrum.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Polarisation identity**
A formula that recovers an inner product, or a symmetric bilinear form, from its norm or quadratic form, such as $\langle u, v\rangle = \frac14(\|u + v\|^2 - \|u - v\|^2)$.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#131-orthogonal-matrices-preserve-length) and [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Position vector**
The vector $\overrightarrow{OP}$ from the origin to a point $P$. Its components are the coordinates of $P$.
See [Chapter 1](01-Vectors.md#11-arrows-and-lists-of-numbers).

**Positive definite**
A real symmetric matrix with $x^TAx > 0$ for every $x \ne 0$. Equivalently its eigenvalues, its pivots, or its leading principal minors are all positive, or $A = LL^T$ (Cholesky).
See [Chapter 11](11-Inner-Product-Spaces.md#111-inner-products-in-general) and [Chapter 14](14-The-Spectral-Theorem.md#144-positive-definite-matrices-and-cholesky).

**Positive semidefinite**
A real symmetric matrix with $x^TAx \ge 0$ for every $x$, equivalently with all eigenvalues $\ge 0$. $A^TA$ is always positive semidefinite.
See [Chapter 14](14-The-Spectral-Theorem.md#144-positive-definite-matrices-and-cholesky).

**Power iteration**
Repeatedly multiplying a vector by $A$ and rescaling. It converges to an eigenvector for the eigenvalue of largest absolute value, at a rate set by the ratio of the two largest.
See [Chapter 18](18-Numerical-Linear-Algebra.md#184-power-iteration-and-the-qr-algorithm).

**Preconditioning**
Replacing $Ax = b$ by an equivalent system such as $M^{-1}Ax = M^{-1}b$, with $M$ cheap to invert and close to $A$, so that an iterative method converges faster.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

**Primitive matrix**
A nonnegative matrix some power of which has all entries positive. Its Perron root is then strictly larger in absolute value than every other eigenvalue.
See [Chapter 10](10-Applications-of-Eigenvalues.md#105-perron-frobenius-and-population-models).

**Principal axes**
The directions of the eigenvectors of the symmetric matrix of a quadratic form, in which the form has no cross terms. For a rigid body, the eigenvectors of its inertia matrix.
See [Chapter 14](14-The-Spectral-Theorem.md#143-quadratic-forms-conic-sections-and-principal-axes).

**Principal component analysis**
Finding the orthogonal directions in which centred data varies most: the right singular vectors of the data matrix, or the eigenvectors of its sample covariance matrix. Abbreviated PCA.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#155-principal-component-analysis) and [Chapter 19](19-Linear-Algebra-in-the-World.md#194-machine-learning).

**Principal component scores**
The coordinates of the data points along the principal directions, $Xv_i = \sigma_i u_i$.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#155-principal-component-analysis).

**Principal directions**
In principal component analysis, the right singular vectors $v_1, v_2, \ldots$ of the centred data matrix; also called loadings.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#155-principal-component-analysis).

**Probability vector**
A vector with nonnegative entries adding up to 1, describing how likely each state of a Markov chain is.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#96-markov-chains-and-the-steady-state-and-pagerank).

**Projection**
The vector $\frac{\mathbf{u}\cdot\mathbf{v}}{\mathbf{u}\cdot\mathbf{u}}\mathbf{u}$, the shadow of $\mathbf{v}$ on the line through $\mathbf{u}$. More generally the closest point of a subspace; see orthogonal projection.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle) and [Chapter 12](12-Projections-and-Least-Squares.md#121-projecting-onto-a-line-and-onto-a-subspace).

**Projection matrix**
A matrix $P$ that sends each vector to its orthogonal projection onto a subspace. It is characterised by $P^2 = P$ and $P^T = P$.
See [Chapter 12](12-Projections-and-Least-Squares.md#121-projecting-onto-a-line-and-onto-a-subspace).

**Projection theorem**
In a Hilbert space, every point has a unique nearest point in a closed subspace $M$, and the difference is orthogonal to $M$; so $H = M \oplus M^\perp$.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Pseudoinverse**
For $A = U\Sigma V^T$, the matrix $A^+ = V\Sigma^+U^T$, where $\Sigma^+$ inverts the nonzero singular values; also called the Moore-Penrose inverse. $A^+b$ is the least squares solution of smallest length.
See [Chapter 7](07-The-Four-Subspaces.md#74-the-big-picture) and [Chapter 15](15-The-Singular-Value-Decomposition.md#154-the-pseudoinverse).

**Pseudospectra**
Sets of numbers $z$ for which $A - zI$ is nearly singular. They describe a non-normal matrix better than its eigenvalues alone.
See [Chapter 14](14-The-Spectral-Theorem.md#146-normal-operators-and-the-complex-spectral-theorem).

**Pure quaternion**
A quaternion with zero scalar part, $0 + \mathbf{v}$, identified with a vector of $\mathbb{R}^3$.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#135-quaternions).

**Pure tensor**
An element of a tensor product of the form $x \otimes y$. For vectors of $F^n$ and $F^m$ it is the rank-one matrix $xy^T$; most tensors are not pure.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#174-tensor-products).

**Pythagoras' theorem (in any dimension)**
If $u \perp v$ then $\|u + v\|^2 = \|u\|^2 + \|v\|^2$.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle) and [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

## Q

**QR algorithm**
The standard method for computing all eigenvalues of a matrix: factor $A_k = Q_kR_k$, set $A_{k+1} = R_kQ_k$, and repeat (with shifts); the iterates converge to triangular form.
See [Chapter 18](18-Numerical-Linear-Algebra.md#184-power-iteration-and-the-qr-algorithm).

**QR factorisation**
Writing a matrix with independent columns as $A = QR$, with $Q$ having orthonormal columns and $R$ upper triangular with positive diagonal. It is Gram-Schmidt recorded, and solves least squares by $R\hat x = Q^Tb$.
See [Chapter 12](12-Projections-and-Least-Squares.md#124-the-qr-factorisation).

**Quadratic form**
A function $q(x) = x^TAx = \sum a_{ij}x_ix_j$ with $A$ symmetric, a homogeneous polynomial of degree 2. More generally $q(v) = b(v, v)$ for a symmetric bilinear form $b$.
See [Chapter 14](14-The-Spectral-Theorem.md#143-quadratic-forms-conic-sections-and-principal-axes) and [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Quadric surface**
A surface given by a quadratic equation in three variables, such as an ellipsoid or a hyperboloid. The signs of the eigenvalues of its matrix classify it.
See [Chapter 14](14-The-Spectral-Theorem.md#143-quadratic-forms-conic-sections-and-principal-axes).

**Quaternion**
A number $q = a + bi + cj + dk$ with $i^2 = j^2 = k^2 = ijk = -1$, found by Hamilton in 1843. Unit quaternions describe rotations of space by $x \mapsto qxq^{-1}$, with no gimbal lock.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#135-quaternions).

**Qubit**
A quantum system whose state is a unit vector $\alpha|0\rangle + \beta|1\rangle$ in $\mathbb{C}^2$, with $|\alpha|^2 + |\beta|^2 = 1$.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

## R

**Range**
Another name for the image of a linear map.
See [Chapter 6](06-Linear-Maps.md#62-kernel-and-image).

**Rank**
The number of pivots of a matrix. It equals the dimension of the column space and of the row space, and the dimension of the image of the linear map.
See [Chapter 2](02-Systems-of-Linear-Equations.md#23-row-echelon-form-and-reduced-row-echelon-form), [Chapter 6](06-Linear-Maps.md#63-the-rank-nullity-theorem) and [Chapter 7](07-The-Four-Subspaces.md#72-row-rank-equals-column-rank).

**Rank-nullity theorem**
For a linear map $T$ on a finite-dimensional space $V$, $\dim\ker T + \dim\operatorname{im} T = \dim V$. For an $m \times n$ matrix, the nullity plus the rank is $n$.
See [Chapter 6](06-Linear-Maps.md#63-the-rank-nullity-theorem).

**Rational canonical form**
A block diagonal matrix of companion matrices of the invariant factors, similar to a given matrix over any field, with no need to find eigenvalues.
See [Chapter 16](16-Jordan-Form.md#166-rational-canonical-form).

**Rayleigh quotient**
The number $x^TAx/x^Tx$ for a symmetric matrix $A$. Its largest and smallest values are the largest and smallest eigenvalues, and it gives the best eigenvalue estimate for an approximate eigenvector.
See [Chapter 14](14-The-Spectral-Theorem.md#142-the-spectral-theorem) and [Chapter 18](18-Numerical-Linear-Algebra.md#184-power-iteration-and-the-qr-algorithm).

**Rayleigh quotient iteration**
Inverse iteration whose shift is updated at each step to the current Rayleigh quotient. For symmetric matrices it converges cubically.
See [Chapter 18](18-Numerical-Linear-Algebra.md#184-power-iteration-and-the-qr-algorithm).

**Real vector space**
A set with an addition and a scaling by real numbers satisfying the eight axioms: addition is commutative and associative with a zero and negatives, and scaling distributes and associates with $1v = v$.
See [Chapter 4](04-Vector-Spaces.md#41-the-axioms).

**Reduced row echelon form**
The row echelon form in which every pivot is 1 and is the only nonzero entry in its column. Every matrix has exactly one; abbreviated RREF.
See [Chapter 2](02-Systems-of-Linear-Equations.md#23-row-echelon-form-and-reduced-row-echelon-form).

**Reduced SVD**
The singular value decomposition $A = U_r\Sigma_rV_r^T$ keeping only the $r$ columns of $U$ and $V$ that belong to nonzero singular values; also called the thin SVD.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#151-statement-and-geometric-meaning).

**Reed-Muller code**
The first-order Reed-Muller code $RM(1, m)$ is the $[2^m, m + 1]$ linear code of value lists of affine functions on $\mathbb{F}_2^m$. Mariner 9 used $RM(1, 5)$ to send pictures of Mars.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Reed-Solomon code**
The code of value lists $(f(a_1), \ldots, f(a_n))$ of polynomials $f$ of degree less than $k$ over a finite field. It meets the Singleton bound and corrects bursts of errors well.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#195-coding-theory-again-and-compressed-sensing).

**Reflection**
An orthogonal map that fixes a line (in the plane) or a hyperplane, and reverses the direction perpendicular to it. It has determinant $-1$.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#132-rotations-and-reflections-in-2d-and-3d).

**Reflexive**
A normed space that its double dual identifies with. Every finite-dimensional space and every Hilbert space is reflexive, but $\ell^1$ is not.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Regularisation**
Changing an ill-conditioned problem slightly to make it stable, for example by dropping the small singular values (a truncated SVD).
See [Chapter 15](15-The-Singular-Value-Decomposition.md#154-the-pseudoinverse).

**Representation**
A homomorphism $\rho : G \to GL(V)$ from a group to the invertible linear maps of a vector space: a way for the group to act by matrices.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#203-representation-theory).

**Resonance**
The growth of an undamped oscillator driven at its own frequency. In matrix form it comes from a Jordan block, which makes $e^{tA}$ contain terms like $te^{\lambda t}$.
See [Chapter 16](16-Jordan-Form.md#165-the-matrix-exponential-again).

**Restricted isometry property**
A matrix has it when it nearly preserves the length of every sparse vector. It guarantees that compressed sensing recovers sparse signals exactly.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#195-coding-theory-again-and-compressed-sensing).

**Riesz representation theorem**
Every continuous linear functional on a Hilbert space is $x \mapsto \langle x, z\rangle$ for exactly one vector $z$.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Right shift**
The operator $(x_1, x_2, \ldots) \mapsto (0, x_1, x_2, \ldots)$ on $\ell^2$. It has no eigenvalues, but its spectrum is the whole closed unit disc.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Right singular vectors**
The columns $v_1, \ldots, v_n$ of $V$ in the singular value decomposition $A = U\Sigma V^T$; eigenvectors of $A^TA$.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#151-statement-and-geometric-meaning).

**Right-hand side**
The number $b$ in a linear equation $a_1x_1 + \cdots + a_nx_n = b$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#21-lines-meeting-three-pictures).

**Rodrigues' formula**
The formula $R = I + \sin\theta\, K + (1 - \cos\theta)K^2$ for the rotation by angle $\theta$ about a unit axis $u$, where $K$ is the matrix with $Kx = u \times x$ (Olinde Rodrigues, 1840).
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#133-every-rotation-in-3d-has-an-axis).

**Rotation**
An orthogonal matrix with determinant $+1$. In the plane it turns vectors by an angle about the origin; in space it turns about an axis.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#131-orthogonal-matrices-preserve-length).

**Rotoreflection**
An orthogonal map of space with determinant $-1$ that is a rotation followed by a reflection; also called an improper rotation.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#132-rotations-and-reflections-in-2d-and-3d).

**Row echelon form**
A matrix in which all zero rows are at the bottom and the leading entry of each nonzero row is strictly to the right of the leading entry of the row above. Abbreviated REF.
See [Chapter 2](02-Systems-of-Linear-Equations.md#23-row-echelon-form-and-reduced-row-echelon-form).

**Row space**
The span $C(A^T)$ of the rows of a matrix, a subspace of $\mathbb{R}^n$. Its dimension is the rank, and it is the orthogonal complement of the null space.
See [Chapter 7](07-The-Four-Subspaces.md#71-four-subspaces-from-one-matrix).

## S

**Saddle**
An equilibrium of a $2 \times 2$ system $x' = Ax$ with one positive and one negative eigenvalue. It is unstable.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability).

**Saddle point**
A critical point of a function of several variables where the Hessian has a positive and a negative eigenvalue, so the function rises in some directions and falls in others.
See [Chapter 14](14-The-Spectral-Theorem.md#145-the-second-derivative-test-revisited).

**Sample covariance matrix**
For a data matrix $X$ with centred columns and $n$ rows, the symmetric positive semidefinite matrix $\frac{1}{n-1}X^TX$.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#155-principal-component-analysis).

**Scalar**
A number used to scale vectors: a real number for $\mathbb{R}^n$, or an element of the field for a vector space over a field.
See [Chapter 1](01-Vectors.md#11-arrows-and-lists-of-numbers) and [Chapter 4](04-Vector-Spaces.md#41-the-axioms).

**Scalar multiplication**
The operation that combines a scalar $c$ and a vector $v$ into the vector $cv$.
See [Chapter 1](01-Vectors.md#12-adding-and-scaling) and [Chapter 4](04-Vector-Spaces.md#41-the-axioms).

**Scalar triple product**
The number $(\mathbf{u} \times \mathbf{v})\cdot\mathbf{w}$, the signed volume of the parallelepiped spanned by the three vectors. It is the determinant of the matrix with columns $\mathbf{u}, \mathbf{v}, \mathbf{w}$.
See [Chapter 1](01-Vectors.md#15-the-cross-product) and [Chapter 8](08-Determinants.md#81-area-and-volume-with-a-sign).

**Schur's lemma**
A linear map between irreducible representations that commutes with the group action is zero or an isomorphism; over $\mathbb{C}$, such a map from one irreducible representation to itself is a scalar.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#203-representation-theory).

**Schur's theorem**
For every complex square matrix $A$ there is a unitary $U$ with $U^*AU$ upper triangular.
See [Chapter 14](14-The-Spectral-Theorem.md#146-normal-operators-and-the-complex-spectral-theorem).

**Second derivative test**
At a critical point of a function of several variables, a positive definite Hessian gives a local minimum, a negative definite one a local maximum, and an indefinite one a saddle point.
See [Chapter 14](14-The-Spectral-Theorem.md#145-the-second-derivative-test-revisited).

**Sensitivity analysis**
Measuring how much a result, such as the growth rate of a population model, changes when one entry of the matrix changes.
See [Chapter 10](10-Applications-of-Eigenvalues.md#105-perron-frobenius-and-population-models).

**Separable**
A Hilbert or Banach space with a countable dense subset, equivalently (for Hilbert spaces) with a countable orthonormal basis. Every separable infinite-dimensional Hilbert space is isomorphic to $\ell^2$.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#201-infinite-dimensional-spaces-hilbert-and-banach).

**Shear**
A map that slides each line parallel to an axis by an amount proportional to its distance from the axis, such as $(x, y) \mapsto (x + y, y)$.
See [Chapter 3](03-Matrices.md#32-matrix-times-vector).

**Sign (of a permutation)**
$+1$ or $-1$ according to whether a permutation is a product of an even or odd number of swaps, equivalently $(-1)$ to the number of inversions. It is the determinant of the permutation matrix.
See [Chapter 8](08-Determinants.md#83-the-permutation-formula).

**Signature**
The numbers $(p, m)$ of positive and negative eigenvalues, or of positive and negative squares in a diagonal form, of a real symmetric matrix or quadratic form. Sylvester's law of inertia says it does not depend on the basis.
See [Chapter 14](14-The-Spectral-Theorem.md#143-quadratic-forms-conic-sections-and-principal-axes) and [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Signed area**
The area of the parallelogram spanned by two vectors, with a sign that records their orientation: the $2 \times 2$ determinant $ad - bc$.
See [Chapter 8](08-Determinants.md#81-area-and-volume-with-a-sign).

**Significand**
The digits part of a floating point number, multiplied by a power of 2 given by the exponent.
See [Chapter 18](18-Numerical-Linear-Algebra.md#181-floating-point-and-why-elimination-needs-pivoting).

**Similar matrices**
Square matrices $A$ and $A'$ with $A' = P^{-1}AP$ for some invertible $P$: the matrices of the same linear operator in two bases. They share rank, trace, determinant, characteristic polynomial and eigenvalues.
See [Chapter 6](06-Linear-Maps.md#66-change-of-basis-and-similar-matrices) and [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#92-the-characteristic-polynomial).

**Singleton bound**
Every $[n, k, d]$ linear code satisfies $d \le n - k + 1$. Codes that meet it are called MDS.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#195-coding-theory-again-and-compressed-sensing).

**Singular matrix**
A square matrix with no inverse, equivalently with determinant 0.
See [Chapter 3](03-Matrices.md#34-identity-inverse-transpose).

**Singular value decomposition**
Every real $m \times n$ matrix is $A = U\Sigma V^T$, with $U$ and $V$ orthogonal and $\Sigma$ diagonal with entries $\sigma_1 \ge \sigma_2 \ge \cdots \ge 0$. Every matrix is a rotation, a stretch along axes, and another rotation. Abbreviated SVD.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#151-statement-and-geometric-meaning).

**Singular values**
The numbers $\sigma_1 \ge \sigma_2 \ge \cdots \ge 0$ on the diagonal of $\Sigma$ in the SVD: the square roots of the eigenvalues of $A^TA$. They are the semi-axes of the ellipse that $A$ makes from the unit sphere.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#151-statement-and-geometric-meaning).

**Skew-symmetric**
A matrix with $A^T = -A$, or a bilinear form with $b(u, v) = -b(v, u)$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Softmax**
The map that turns numbers $z_1, \ldots, z_n$ into the positive weights $e^{z_i}/\sum_j e^{z_j}$ adding up to 1.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#194-machine-learning).

**Span**
The set of all linear combinations of given vectors, the smallest subspace containing them. A set spans $V$, or is a spanning set for $V$, when its span is all of $V$.
See [Chapter 4](04-Vector-Spaces.md#43-span).

**Spanning tree**
A set of edges of a connected graph that connects all the vertices and has no cycles. Kirchhoff's theorem counts them with a determinant.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Sparse matrix**
A matrix almost all of whose entries are zero. Storing only the nonzeros and using iterative methods makes very large problems feasible.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#96-markov-chains-and-the-steady-state-and-pagerank) and [Chapter 18](18-Numerical-Linear-Algebra.md#185-sparse-matrices).

**Sparsity**
In compressed sensing, the fact that a signal has only a few nonzero (or large) coefficients in a suitable basis. A vector is $s$-sparse if it has at most $s$ nonzero entries.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#195-coding-theory-again-and-compressed-sensing).

**Special orthogonal group**
The group $SO(n)$ of orthogonal matrices with determinant $+1$: the rotations.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#131-orthogonal-matrices-preserve-length).

**Special solutions**
The solutions of $Ax = 0$ found by setting one free variable to 1 and the others to 0. They form a basis of the null space.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#52-bases) and [Chapter 7](07-The-Four-Subspaces.md#71-four-subspaces-from-one-matrix).

**Spectral clustering**
Cutting a graph, or a data set, into groups by the signs or values of eigenvectors of its Laplacian, such as the Fiedler vector.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Spectral graph theory**
The study of a graph through the eigenvalues and eigenvectors of its adjacency matrix and Laplacian.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#191-graphs-and-their-matrices).

**Spectral norm**
The operator norm for lengths, $\|A\|_2 = \max_{\|x\| = 1}\|Ax\|$, the most $A$ can stretch a vector. It equals the largest singular value $\sigma_1$.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#153-low-rank-approximation-and-image-compression).

**Spectral radius**
The largest absolute value of an eigenvalue, $\rho(A) = \max|\lambda_i|$. Powers $A^k$ tend to 0 exactly when $\rho(A) < 1$. For a bounded operator it is the largest $|\lambda|$ in the spectrum.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability), [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Spectral theorem**
Every real symmetric matrix has real eigenvalues and an orthonormal basis of eigenvectors: $A = Q\Lambda Q^T$ with $Q$ orthogonal and $\Lambda$ diagonal. The complex version says the same for normal matrices with a unitary $Q$.
See [Chapter 14](14-The-Spectral-Theorem.md#142-the-spectral-theorem) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Spectrum**
The set of eigenvalues of a matrix. For a bounded operator, the set of $\lambda$ for which $T - \lambda I$ has no bounded inverse, which may contain more than the eigenvalues.
See [Chapter 14](14-The-Spectral-Theorem.md#142-the-spectral-theorem) and [Chapter 20](20-Where-Linear-Algebra-Goes.md#202-operators-and-spectra).

**Spiral**
An equilibrium of a $2 \times 2$ system $x' = Ax$ with complex eigenvalues of nonzero real part; also called a focus. It is stable when the real part is negative.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability).

**Stability (of an algorithm)**
How much an algorithm adds to the error that the conditioning of the problem already allows. A stable algorithm is as accurate as the problem deserves.
See [Chapter 18](18-Numerical-Linear-Algebra.md#182-conditioning-and-stability).

**Stable equilibrium**
An equilibrium such that solutions starting close to it stay close for all later times.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability).

**Standard basis**
The basis $e_1 = (1, 0, \ldots, 0), \ldots, e_n = (0, \ldots, 0, 1)$ of $F^n$.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#52-bases).

**Steady state**
A probability vector $\pi$ with $P\pi = \pi$ for the transition matrix $P$ of a Markov chain: an eigenvector for the eigenvalue 1. Also called a stationary distribution.
See [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#96-markov-chains-and-the-steady-state-and-pagerank).

**Strassen's algorithm**
Multiplying $2 \times 2$ block matrices with 7 block products instead of 8, and applying this recursively, to multiply $n \times n$ matrices in $O(n^{\log_2 7}) \approx O(n^{2.81})$ operations.
See [Chapter 18](18-Numerical-Linear-Algebra.md#186-fast-matrix-multiplication).

**Strictly diagonally dominant**
A matrix in which each diagonal entry is larger in absolute value than the sum of the absolute values of the other entries in its row. Jacobi and Gauss-Seidel then converge.
See [Chapter 18](18-Numerical-Linear-Algebra.md#183-iterative-methods).

**Subspace**
A subset of a vector space that is itself a vector space with the same operations: it contains 0 and is closed under addition and scaling.
See [Chapter 4](04-Vector-Spaces.md#42-subspaces).

**Subspace test**
A subset $W$ is a subspace exactly when it contains $0$ and is closed under addition and under multiplication by scalars.
See [Chapter 4](04-Vector-Spaces.md#42-subspaces).

**Sum (of subspaces)**
The subspace $U + W = \{u + w : u \in U, w \in W\}$, the smallest subspace containing both.
See [Chapter 4](04-Vector-Spaces.md#43-span) and [Chapter 5](05-Independence-Bases-and-Dimension.md#55-dimensions-of-subspaces-sums-and-intersections).

**Superposition principle**
For a linear equation such as $x' = Ax$ or $Ax = 0$, sums and multiples of solutions are again solutions.
See [Chapter 10](10-Applications-of-Eigenvalues.md#101-systems-of-differential-equations-x-ax).

**Surjective**
A function whose outputs cover the whole target; also called onto. A linear map is surjective exactly when its image is the whole target.
See [Chapter 6](06-Linear-Maps.md#62-kernel-and-image).

**Sylvester's criterion**
A real symmetric matrix is positive definite exactly when all its leading principal minors, the determinants of its upper-left $k \times k$ blocks, are positive.
See [Chapter 14](14-The-Spectral-Theorem.md#144-positive-definite-matrices-and-cholesky).

**Sylvester's law of inertia**
The numbers of positive, negative and zero coefficients in any diagonal form of a real quadratic form (its signature) do not depend on the basis chosen.
See [Chapter 14](14-The-Spectral-Theorem.md#143-quadratic-forms-conic-sections-and-principal-axes) and [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Symmetric bilinear form**
A bilinear form with $b(u, v) = b(v, u)$. Its matrix is symmetric, and over $\mathbb{R}$ it can be diagonalised by a change of basis.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Symmetric matrix**
A square matrix equal to its transpose, $A^T = A$, so $a_{ij} = a_{ji}$. By the spectral theorem it has real eigenvalues and orthonormal eigenvectors.
See [Chapter 3](03-Matrices.md#34-identity-inverse-transpose) and [Chapter 14](14-The-Spectral-Theorem.md#141-symmetric-matrices-have-real-eigenvalues).

**Symplectic space**
A vector space with a nondegenerate alternating bilinear form. Its dimension is even, and it is the setting of Hamiltonian mechanics.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#173-bilinear-forms).

**Syndrome**
For a received word $r$ and the check matrix $H$ of a linear code, the vector $Hr^T$. It is zero for codewords; for a single error in the Hamming code it is the column of $H$ that names the wrong position.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

**Systematic code**
A code in which the message itself appears as the first symbols of each codeword, followed by the check symbols.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes).

## T

**Taxicab norm**
The norm $\|x\|_1 = |x_1| + \cdots + |x_n|$ on $\mathbb{R}^n$. It does not come from an inner product.
See [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**Tensor product**
The space $V \otimes W$ in which bilinear maps out of $V \times W$ become linear maps. If $v_i$ and $w_j$ are bases, the $v_i \otimes w_j$ are a basis, so $\dim(V \otimes W) = \dim V \dim W$.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#174-tensor-products).

**Tensor rank**
The smallest number of pure tensors that add up to a given tensor. For a matrix it is the ordinary rank; the rank of the matrix multiplication tensor measures how fast matrices can be multiplied.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#174-tensor-products) and [Chapter 18](18-Numerical-Linear-Algebra.md#186-fast-matrix-multiplication).

**Tip-to-tail rule**
The picture of vector addition: draw $\mathbf{u}$, then draw $\mathbf{v}$ starting at its tip; $\mathbf{u} + \mathbf{v}$ goes from the start of the first to the end of the second.
See [Chapter 1](01-Vectors.md#12-adding-and-scaling).

**Trace**
The sum $\operatorname{tr} A = a_{11} + \cdots + a_{nn}$ of the diagonal entries of a square matrix. It equals the sum of the eigenvalues, is linear, and satisfies $\operatorname{tr}(AB) = \operatorname{tr}(BA)$.
See [Chapter 4](04-Vector-Spaces.md#42-subspaces), [Chapter 6](06-Linear-Maps.md#61-linear-maps) and [Chapter 9](09-Eigenvalues-and-Eigenvectors.md#92-the-characteristic-polynomial).

**Tracy-Widom distribution**
The limiting distribution of the largest eigenvalue of a large random symmetric matrix, after centring and scaling. It also appears in growth models and longest increasing subsequences.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#204-random-matrices).

**Transpose**
The matrix $A^T$ whose rows are the columns of $A$: $(A^T)_{ij} = a_{ji}$. It satisfies $(AB)^T = B^TA^T$, and in dual bases it is the matrix of the dual map.
See [Chapter 3](03-Matrices.md#34-identity-inverse-transpose) and [Chapter 17](17-Duality-and-Multilinear-Algebra.md#172-the-transpose-as-the-dual-map).

**Triangle inequality**
$\|u + v\| \le \|u\| + \|v\|$: one side of a triangle is no longer than the other two together. It follows from Cauchy-Schwarz.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle) and [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**Trivial solution**
The solution $x = 0$ of a homogeneous system $Ax = 0$.
See [Chapter 2](02-Systems-of-Linear-Equations.md#24-free-variables-and-the-solution-set).

**Truncated SVD**
The SVD with the smallest singular values set to zero: $A_k = \sigma_1u_1v_1^T + \cdots + \sigma_ku_kv_k^T$. It gives the best rank-$k$ approximation and is a simple regularisation.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#153-low-rank-approximation-and-image-compression).

## U

**Uncertainty relation**
For Hermitian $A$ and $B$ and a state $\psi$, the product of the spreads of $A$ and $B$ is at least $\frac12|\langle\psi, [A, B]\psi\rangle|$ (Robertson, 1929). It is a consequence of Cauchy-Schwarz.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Unit quaternion**
A quaternion of length 1, $|q| = 1$. Each one gives a rotation $x \mapsto qxq^{-1}$ of space, and $q$ and $-q$ give the same rotation.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#135-quaternions).

**Unit roundoff**
The number $u = 2^{-53} \approx 1.1 \times 10^{-16}$ in double precision: every real number in range is stored with relative error at most $u$.
See [Chapter 18](18-Numerical-Linear-Algebra.md#181-floating-point-and-why-elimination-needs-pivoting).

**Unit vector**
A vector of length 1. Dividing a nonzero vector by its length gives the unit vector in the same direction.
See [Chapter 1](01-Vectors.md#13-length-dot-product-and-angle) and [Chapter 11](11-Inner-Product-Spaces.md#112-norms-and-the-cauchy-schwarz-inequality).

**Unitary matrix**
A complex square matrix with $U^*U = I$, the complex version of orthogonal. Its columns are orthonormal, and it preserves inner products and lengths.
See [Chapter 14](14-The-Spectral-Theorem.md#146-normal-operators-and-the-complex-spectral-theorem) and [Chapter 19](19-Linear-Algebra-in-the-World.md#192-quantum-mechanics-as-linear-algebra).

**Unstable equilibrium**
An equilibrium that is not stable: some solutions starting arbitrarily close move away.
See [Chapter 10](10-Applications-of-Eigenvalues.md#104-stability).

**Upper triangular**
A square matrix whose entries below the main diagonal are all zero. Elimination turns a matrix into one, and its determinant is the product of the diagonal.
See [Chapter 2](02-Systems-of-Linear-Equations.md#22-gaussian-elimination-step-by-step) and [Chapter 3](03-Matrices.md#36-lu-factorisation).

## V

**Vanishing point**
The point on the screen where the images of parallel lines in space meet under perspective projection.
See [Chapter 19](19-Linear-Algebra-in-the-World.md#193-computer-graphics).

**Vector**
A quantity with a size and a direction, drawn as an arrow and recorded as a list of numbers, its components. More generally, any element of a vector space.
See [Chapter 1](01-Vectors.md#11-arrows-and-lists-of-numbers) and [Chapter 4](04-Vector-Spaces.md#41-the-axioms).

**Vector space over a field**
A set with an addition and a scaling by elements of a field $F$ satisfying the same eight axioms as a real vector space.
See [Chapter 4](04-Vector-Spaces.md#44-fields-other-than-the-reals).

## W

**Wedge product**
The product $v_1 \wedge \cdots \wedge v_k$ in the exterior algebra: multilinear, and zero when two factors are equal, so it changes sign when two swap. In $\mathbb{R}^3$ it is close kin to the cross product.
See [Chapter 17](17-Duality-and-Multilinear-Algebra.md#175-exterior-algebra-and-the-determinant-again).

**Weight**
The number of nonzero entries of a word or vector. The distance between two vectors is the weight of their difference.
See [Chapter 7](07-The-Four-Subspaces.md#75-linear-codes) and [Chapter 19](19-Linear-Algebra-in-the-World.md#195-coding-theory-again-and-compressed-sensing).

**Weighted least squares**
Least squares in which some equations count more than others: minimise $\sum w_i(b_i - (Ax)_i)^2$, giving the normal equations $A^TWA\hat x = A^TWb$.
See [Chapter 12](12-Projections-and-Least-Squares.md#123-fitting-lines-and-curves).

**Weyl's inequality**
A bound on how much the singular values (or the eigenvalues of a symmetric matrix) can move when the matrix changes: $\sigma_{i+j-1}(A + B) \le \sigma_i(A) + \sigma_j(B)$.
See [Chapter 15](15-The-Singular-Value-Decomposition.md#153-low-rank-approximation-and-image-compression).

**Wigner's semicircle law**
As $N \to \infty$, the eigenvalues of a large random symmetric matrix, suitably scaled, are spread over $[-2, 2]$ with the density $\frac{1}{2\pi}\sqrt{4 - x^2}$, a semicircle.
See [Chapter 20](20-Where-Linear-Algebra-Goes.md#204-random-matrices).

## Y

**Yaw, pitch and roll**
The three angles of a common choice of Euler angles, rotations about the vertical, sideways and forward axes, as used for aircraft and spacecraft.
See [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md#134-composing-rotations-euler-angles-and-gimbal-lock).

## Z

**Zero vector**
The vector $\mathbf{0}$ with all components 0, which added to any vector leaves it unchanged. Every vector space and every subspace contains it.
See [Chapter 1](01-Vectors.md#12-adding-and-scaling) and [Chapter 4](04-Vector-Spaces.md#41-the-axioms).

**Zorn's lemma**
An axiom of set theory, equivalent to the axiom of choice. It shows that every vector space has a basis, even when nobody can write one down.
See [Chapter 5](05-Independence-Bases-and-Dimension.md#53-the-exchange-lemma-and-dimension).
