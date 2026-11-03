# 19. Linear algebra in the world

*Why does almost every part of science and engineering end up as linear algebra? Partly because linear problems are
the ones we can solve, so we work hard to make problems linear; partly because some things, such as quantum mechanics,
really are linear at their core. This chapter visits five places where the theory of this book does real work. You will
find clusters in a network from an eigenvector of a matrix built from the graph; see that quantum mechanics is,
mathematically, linear algebra over the complex numbers; draw three-dimensional scenes on a flat screen with
$4 \times 4$ matrices; look honestly at what linear algebra does inside machine learning; and correct errors in a
message, then recover a signal from far fewer measurements than unknowns.*

!!! abstract "In this chapter"
    **You will learn:**

    - the adjacency and Laplacian matrices of a graph, why the Laplacian's zero eigenvalues count connected pieces, and spectral clustering
    - the matrix-tree theorem: counting spanning trees with a determinant
    - the linear algebra of quantum mechanics: states, Hermitian observables, the Born rule, unitary evolution, tensor products and entanglement, and an uncertainty principle proved from Cauchy-Schwarz
    - homogeneous coordinates, perspective projection, and why normals transform by the inverse transpose
    - what vectors, matrices and low rank do in machine learning, and what they do not
    - Reed-Solomon codes decoded by solving a linear system, the Singleton bound, and the idea of compressed sensing

    **You need:** eigenvalues and the spectral theorem ([Chapter 9](09-Eigenvalues-and-Eigenvectors.md),
    [Chapter 14](14-The-Spectral-Theorem.md)), inner products ([Chapter 11](11-Inner-Product-Spaces.md)), rotations
    ([Chapter 13](13-Orthogonal-Matrices-and-Rotations.md)), the SVD ([Chapter 15](15-The-Singular-Value-Decomposition.md)),
    tensor products ([Chapter 17](17-Duality-and-Multilinear-Algebra.md)) and linear codes
    ([Chapter 7](07-The-Four-Subspaces.md), 7.5).

    **Levels:** 19.3 is intermediate; 19.1, 19.4 and 19.5 are advanced; 19.2 is advanced (complex inner product spaces).
    The sections are independent and can be read in any order.

## 19.1 Graphs and their matrices

*Level: advanced.* A **graph** is a set of vertices joined by edges: people and friendships, web pages and links, atoms
and bonds, cities and roads ([Combinatorics, Chapter 10](../combinatorics/10-Graphs.md)). A graph is not a matrix, but it
can be stored as one, and then something remarkable happens: eigenvalues and eigenvectors of that matrix reveal shapes
in the graph that are hard to see directly. This is **spectral graph theory**.

### Adjacency and degree

For a graph with vertices $1, \ldots, n$ (undirected, no loops), the **adjacency matrix** $A$ has $a_{ij} = 1$ if $i$ and
$j$ are joined, $0$ otherwise. It is symmetric, so it has real eigenvalues and an orthonormal eigenbasis (spectral
theorem). Its powers count walks: $(A^k)_{ij}$ is the number of walks of length $k$ from $i$ to $j$ (proved in
[Combinatorics, Chapter 10](../combinatorics/10-Graphs.md), 10.6). The **degree matrix** $D$ is diagonal with $d_{ii}$ the
number of edges at $i$.

### The Laplacian

**Definition.** The **graph Laplacian** is $L = D - A$.

The name comes from physics: on a grid, $(Lx)_i = \sum_{j \sim i}(x_i - x_j)$ is (minus) the discrete version of the
Laplacian $\partial^2/\partial x^2 + \partial^2/\partial y^2$ that governs heat flow. If $x_i$ is the temperature at
vertex $i$, then $(Lx)_i$ measures how much hotter $i$ is than its neighbours.

**Theorem 19.1.** For every vector $x \in \mathbb{R}^n$,

$$
x^{\mathsf T}Lx = \sum_{\text{edges } \{i, j\}}(x_i - x_j)^2.
$$

Hence $L$ is symmetric positive semidefinite, its eigenvalues are $0 = \mu_1 \le \mu_2 \le \cdots \le \mu_n$, and the
all-ones vector $\mathbf{1}$ is an eigenvector for $0$.

*Proof.* $x^{\mathsf T}Lx = \sum_i d_i x_i^2 - \sum_{i,j}a_{ij}x_ix_j$. Each edge $\{i,j\}$ contributes $x_i^2 + x_j^2$ to
the first sum (once through $d_i$, once through $d_j$) and $2x_ix_j$ to the second (as $a_{ij}$ and $a_{ji}$). So each
edge contributes $x_i^2 + x_j^2 - 2x_ix_j = (x_i - x_j)^2$. A sum of squares is never negative, so all eigenvalues are
$\ge 0$ (if $Lx = \mu x$ with $\lVert x\rVert = 1$, then $\mu = x^{\mathsf T}Lx \ge 0$). Each row of $L$ sums to
$d_i - d_i = 0$, so $L\mathbf{1} = 0$. $\square$

**Theorem 19.2.** The multiplicity of the eigenvalue $0$ of $L$ equals the number of connected components of the graph.

*Proof.* $Lx = 0$ if and only if $x^{\mathsf T}Lx = 0$ (one direction is clear; for the other, $L$ is positive
semidefinite, so $x^{\mathsf T}Lx = 0$ forces $x$ into the null space, by writing $x$ in an eigenbasis: $\sum\mu_i c_i^2 = 0$
with all $\mu_i \ge 0$ forces $c_i = 0$ whenever $\mu_i > 0$). By Theorem 19.1, $x^{\mathsf T}Lx = 0$ means $x_i = x_j$
across every edge, so $x$ is constant on each connected component. The space of such vectors has a basis of indicator
vectors, one per component, so its dimension is the number of components. $\square$

So the eigenvalue $\mu_2$ is positive exactly when the graph is connected. Miroslav Fiedler (1973) called it the
**algebraic connectivity**: a small $\mu_2$ means the graph is "nearly disconnected", and the eigenvector for $\mu_2$,
now called the **Fiedler vector**, shows where it nearly breaks.

### Spectral clustering

**Worked example 1.** Two triangles $\{1, 2, 3\}$ and $\{4, 5, 6\}$ joined by one edge $3$–$4$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 180" role="img" aria-label="Two triangles of vertices, 1, 2, 3 on the left and 4, 5, 6 on the right, joined by a single dashed edge from 3 to 4. Each vertex is labelled with its Fiedler vector entry: minus 1, minus 1, minus 0.56 on the left and 0.56, 1, 1 on the right">
  <line x1="60" y1="40" x2="60" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="40" x2="150" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="140" x2="150" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <line x1="380" y1="40" x2="380" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="90" x2="380" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="90" x2="380" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="90" x2="290" y2="90" stroke="#7ccf9a" stroke-width="3" stroke-dasharray="7 5"/>
  <text x="220" y="80" font-size="12" text-anchor="middle" fill="currentColor">the cut</text>
  <circle cx="60" cy="40" r="16" fill="#eea66f" stroke="currentColor"/>
  <circle cx="60" cy="140" r="16" fill="#eea66f" stroke="currentColor"/>
  <circle cx="150" cy="90" r="16" fill="#eea66f" stroke="currentColor"/>
  <circle cx="290" cy="90" r="16" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="380" cy="40" r="16" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="380" cy="140" r="16" fill="#9cc9ea" stroke="currentColor"/>
  <text x="60" y="45" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="60" y="145" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="150" y="95" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="290" y="95" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <text x="380" y="45" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="380" y="145" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <text x="60" y="16" font-size="11" text-anchor="middle" fill="currentColor">−1</text>
  <text x="60" y="172" font-size="11" text-anchor="middle" fill="currentColor">−1</text>
  <text x="150" y="124" font-size="11" text-anchor="middle" fill="currentColor">−0.56</text>
  <text x="290" y="124" font-size="11" text-anchor="middle" fill="currentColor">0.56</text>
  <text x="380" y="16" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="380" y="172" font-size="11" text-anchor="middle" fill="currentColor">1</text>
</svg>
</div>

The Laplacian is

$$
L = \begin{pmatrix} 2 & -1 & -1 & 0 & 0 & 0 \\ -1 & 2 & -1 & 0 & 0 & 0 \\ -1 & -1 & 3 & -1 & 0 & 0 \\ 0 & 0 & -1 & 3 & -1 & -1 \\ 0 & 0 & 0 & -1 & 2 & -1 \\ 0 & 0 & 0 & -1 & -1 & 2 \end{pmatrix},
$$

with characteristic polynomial $\mu(\mu - 3)^3(\mu^2 - 5\mu + 2)$. So the eigenvalues are $0$, $\mu_2 = \frac{5 - \sqrt{17}}{2} \approx 0.438$,
$3, 3, 3$ and $\frac{5 + \sqrt{17}}{2} \approx 4.562$. The Fiedler vector is

$$
\Bigl(-1,\ -1,\ \tfrac{3 - \sqrt{17}}{2},\ \tfrac{\sqrt{17} - 3}{2},\ 1,\ 1\Bigr) \approx (-1, -1, -0.56, 0.56, 1, 1).
$$

Its signs split the vertices into $\{1, 2, 3\}$ and $\{4, 5, 6\}$: exactly the two triangles. Check: $L$ times this vector,
first entry: $2(-1) - (-1) - (-0.56) = -0.44 \approx 0.438 \times (-1)$.

**Why it works.** Suppose we want to cut the vertices into two groups $S$ and $\bar S$ with few edges between them. Put
$x_i = +1$ on $S$ and $-1$ on $\bar S$. By Theorem 19.1, $x^{\mathsf T}Lx = 4 \times (\text{number of cut edges})$; for the
two triangles and $S = \{1, 2, 3\}$ it is $4$. So minimising the cut is minimising $x^{\mathsf T}Lx$ over $\pm1$ vectors.
That is a hard combinatorial problem (balanced versions are NP-hard). **Relax** it: allow any real $x$ with
$\lVert x\rVert^2 = n$ and $x \perp \mathbf{1}$ (the last condition rules out the trivial constant vector and asks for
roughly balanced groups). The minimum of the Rayleigh quotient $x^{\mathsf T}Lx/x^{\mathsf T}x$ over $x \perp \mathbf{1}$ is
exactly $\mu_2$, attained at the Fiedler vector (the min-max characterisation of eigenvalues from
[Chapter 14](14-The-Spectral-Theorem.md)). Then round back by taking signs.

The relaxation is not always optimal, but **Cheeger's inequality** for graphs (Alon and Milman, and others, 1980s) proves
that it is never terribly wrong. For a $d$-regular graph, let $\phi$ be the smallest possible ratio of the number of cut
edges to $d$ times the size of the smaller side, and let $\lambda = \mu_2/d$. Then $\lambda/2 \le \phi \le \sqrt{2\lambda}$, and
the proof of the upper bound actually finds a good cut from the Fiedler vector (sort the vertices by their entries and
try every threshold). **Spectral
clustering** (Shi and Malik, 2000; Ng, Jordan and Weiss, 2002) extends the idea: use the first $k$ eigenvectors as
coordinates for each vertex and group nearby points. It is used to segment images (pixels as vertices, similar
neighbouring pixels joined by heavily weighted edges) and to find communities in networks.

### Counting spanning trees

A **spanning tree** of a connected graph is a set of edges that connects all vertices with no cycles
([Combinatorics, Chapter 11](../combinatorics/11-Trees.md)). Counting them seems to need a search, but:

**Theorem 19.3 (Kirchhoff's matrix-tree theorem, 1847).** The number of spanning trees equals any cofactor of $L$, for
example the determinant of $L$ with its first row and column deleted.

**Example.** For the complete graph $K_4$, $L = 4I - J$ ($J$ all ones). Deleting a row and column leaves the $3 \times 3$
matrix $4I - J$, whose eigenvalues are $4 - 3 = 1$ and $4, 4$, so its determinant is $16$. Cayley's formula $n^{n-2}$ gives
$4^2 = 16$. Check. For the two triangles of Example 1, the reduced determinant is $9 = 3 \times 3$: three ways to choose a
spanning tree in each triangle (drop one of its three edges), and the bridge must be kept.

The proof uses the factorisation $L = BB^{\mathsf T}$, where $B$ is the vertex-edge incidence matrix with a $+1$ and a
$-1$ in each column, and the Cauchy-Binet formula ([Chapter 17](17-Duality-and-Multilinear-Algebra.md), 17.5) to expand
$\det(B_0B_0^{\mathsf T})$ as a sum over sets of $n - 1$ edges, each term being $1$ for a spanning tree and $0$ otherwise.
Kirchhoff found it while studying electrical networks: the same Laplacian, with conductances as edge weights, gives the
currents in a circuit, and effective resistances are entries of its pseudoinverse
([Chapter 15](15-The-Singular-Value-Decomposition.md), 15.4).

## 19.2 Quantum mechanics as linear algebra

*Level: advanced.* Quantum mechanics is strange physics but, mathematically, familiar linear algebra. The postulates,
as von Neumann set them out in 1932, are statements about a complex inner product space. Here they are for systems with
finitely many outcomes, such as the spin of an electron or a qubit in a quantum computer. (Position and momentum need
infinite-dimensional spaces, and there the mathematics becomes genuinely harder: [Chapter 20](20-Where-Linear-Algebra-Goes.md).)

### The postulates in matrix form

**1. States are unit vectors.** The state of the system is a vector $\psi \in \mathbb{C}^n$ with $\lVert\psi\rVert = 1$,
and $\psi$ and $e^{i\theta}\psi$ describe the same state. The inner product is $\langle\phi, \psi\rangle = \sum\bar\phi_i\psi_i$
(physicists write $\langle\phi|\psi\rangle$, and write a basis vector as $|0\rangle$, $|1\rangle$; this is called **Dirac
notation**). For a **qubit**, $n = 2$ and a state is $\psi = \alpha|0\rangle + \beta|1\rangle$ with $|\alpha|^2 + |\beta|^2 = 1$.

**2. Measurable quantities are Hermitian matrices.** An **observable** is a matrix $A$ with $A = A^*$ (the conjugate
transpose). By the complex spectral theorem ([Chapter 14](14-The-Spectral-Theorem.md), 14.6) it has real eigenvalues
$a_1, \ldots, a_n$ and an orthonormal eigenbasis $e_1, \ldots, e_n$. The possible results of measuring $A$ are its
eigenvalues. This is why the spectral theorem is the mathematical heart of quantum mechanics: measured values are real,
and Hermitian matrices are exactly the ones whose eigenvalues are guaranteed to be real with orthogonal eigenvectors.

**3. The Born rule.** Measuring $A$ in state $\psi$ gives the result $a_i$ with probability
$|\langle e_i, \psi\rangle|^2$, the squared length of the projection of $\psi$ onto $e_i$ (for a repeated eigenvalue, the
squared length of the projection onto its eigenspace). These add to 1 because $\psi$ is a unit vector and the $e_i$ are
orthonormal (Parseval). After the measurement the state is the normalised projection. The **expected value** is

$$
\langle A\rangle = \sum_i a_i|\langle e_i, \psi\rangle|^2 = \langle\psi, A\psi\rangle.
$$

(Expand $\psi = \sum c_ie_i$; then $A\psi = \sum a_ic_ie_i$ and $\langle\psi, A\psi\rangle = \sum a_i|c_i|^2$.)

**4. Time evolution is unitary.** Between measurements, the state evolves by $\psi(t) = U(t)\psi(0)$ with
$U(t) = e^{-iHt/\hbar}$, where the Hermitian **Hamiltonian** $H$ is the energy observable. This is the Schrödinger
equation $i\hbar\,\psi' = H\psi$, a linear system of differential equations solved by the matrix exponential
([Chapter 10](10-Applications-of-Eigenvalues.md)). $U(t)$ is **unitary** ($U^*U = I$): indeed
$U^* = e^{iHt/\hbar}$ because $H^* = H$, and $e^{iHt/\hbar}e^{-iHt/\hbar} = I$. Unitary matrices preserve length, so
total probability stays 1.

**5. Composite systems use the tensor product.** The state space of two systems is $\mathbb{C}^n \otimes \mathbb{C}^m$,
of dimension $nm$ ([Chapter 17](17-Duality-and-Multilinear-Algebra.md), 17.4). Two qubits live in $\mathbb{C}^4$ with basis
$|00\rangle, |01\rangle, |10\rangle, |11\rangle$, and $k$ qubits in $\mathbb{C}^{2^k}$.

### Qubits by hand

The **Pauli matrices**

$$
X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \qquad Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \qquad Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

are Hermitian with eigenvalues $\pm1$; they measure the spin of an electron along the $x$, $y$ and $z$ axes (in units of
$\hbar/2$).

**Worked example 2.** State $\psi = \tfrac35|0\rangle + \tfrac{4i}{5}|1\rangle$. Measuring $Z$, whose eigenvectors are
$|0\rangle$ (value $+1$) and $|1\rangle$ (value $-1$), gives $+1$ with probability $\tfrac{9}{25}$ and $-1$ with probability
$\left|\tfrac{4i}{5}\right|^2 = \tfrac{16}{25}$. Check: they sum to 1, and
$\langle Z\rangle = \tfrac{9}{25} - \tfrac{16}{25} = -\tfrac{7}{25}$.

**Worked example 3.** The **Hadamard gate** $H = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ is unitary
(and Hermitian). It sends $|0\rangle$ to $|+\rangle = \frac{1}{\sqrt2}(|0\rangle + |1\rangle)$. Measuring $Z$ in $|+\rangle$
gives $\pm1$ with probability $\tfrac12$ each, so $\langle Z\rangle = 0$; but $|+\rangle$ is an eigenvector of $X$ with
eigenvalue 1, so measuring $X$ gives $+1$ with certainty and $\langle X\rangle = 1$. The same state is perfectly
predictable for one observable and completely random for another.

### Entanglement

The two-qubit **Bell state** $\Phi = \frac{1}{\sqrt2}(|00\rangle + |11\rangle)$ corresponds, under
$\mathbb{C}^2 \otimes \mathbb{C}^2 \cong 2 \times 2$ matrices, to $\frac{1}{\sqrt2}I$, which has rank 2. By Theorem 17.10 it is
**not** a pure tensor $u \otimes v$. Physically: neither qubit has a state of its own. Measure the first qubit in the
$Z$ basis: you get 0 or 1 with probability $\tfrac12$ each, and the state collapses to $|00\rangle$ or $|11\rangle$, so a
later measurement of the second qubit agrees with certainty, however far apart they are. Such correlations, between
measurements in various bases, violate inequalities that any "local hidden variable" theory must satisfy (Bell, 1964), and
experiments have confirmed the quantum predictions; the 2022 Nobel Prize in Physics went to Aspect, Clauser and Zeilinger
for such experiments. In linear-algebra terms, entanglement is the gap between "rank one" and "general" in a tensor
product.

### An uncertainty principle from Cauchy-Schwarz

The **commutator** of two matrices is $[A, B] = AB - BA$. The spread of an observable in state $\psi$ is its standard
deviation $\sigma_A = \lVert(A - \langle A\rangle)\psi\rVert$.

**Theorem 19.4 (Robertson's uncertainty relation, 1929).** For Hermitian $A, B$ and a unit vector $\psi$,

$$
\sigma_A\,\sigma_B \ge \tfrac{1}{2}\bigl|\langle\psi, [A, B]\psi\rangle\bigr|.
$$

*Proof.* Let $A_0 = A - \langle A\rangle I$ and $B_0 = B - \langle B\rangle I$; they are Hermitian and $[A_0, B_0] = [A, B]$. Put
$z = \langle A_0\psi, B_0\psi\rangle$. By Cauchy-Schwarz ([Chapter 11](11-Inner-Product-Spaces.md)),
$|z| \le \lVert A_0\psi\rVert\,\lVert B_0\psi\rVert = \sigma_A\sigma_B$. Since $A_0, B_0$ are Hermitian,
$z = \langle\psi, A_0B_0\psi\rangle$ and $\bar z = \langle B_0\psi, A_0\psi\rangle = \langle\psi, B_0A_0\psi\rangle$, so
$z - \bar z = \langle\psi, [A, B]\psi\rangle$. But $z - \bar z = 2i\operatorname{Im}z$, hence
$|\langle\psi, [A,B]\psi\rangle| = 2|\operatorname{Im}z| \le 2|z| \le 2\sigma_A\sigma_B$. $\square$

When $A$ and $B$ commute the bound is 0, and indeed commuting Hermitian matrices can be diagonalised by one common
orthonormal basis, so both can be sharp at once. When they do not commute, they cannot. For position and momentum,
$[\hat x, \hat p] = i\hbar$ (on an infinite-dimensional space; this relation has no solution in finite matrices, since the
trace of a commutator is 0 and the trace of $i\hbar I$ is not), and the theorem becomes Heisenberg's
$\sigma_x\sigma_p \ge \hbar/2$.

### An honest note on quantum computing

A quantum computer applies unitary matrices to a state in $\mathbb{C}^{2^k}$ and then measures. The space is
exponentially large, which is why classical simulation is hard; but you only ever see one measurement result, which is
why quantum algorithms are hard to design. Shor's algorithm (1994) would factor integers in polynomial time on a large
error-corrected quantum computer, which is why cryptography is moving to "post-quantum" methods
([cryptography book](https://cryptography.akadian.ca/book/)). Building such a machine is an engineering problem not yet
solved at the needed scale. Quantum error correction, which protects qubits with codes built from linear algebra over
$\mathbb{Z}/2$, links this section to 19.5.

## 19.3 Computer graphics

*Level: intermediate.* Every frame of a video game or animated film is computed with $4 \times 4$ matrices. Why four, in
a three-dimensional world?

### The trouble with translation

Rotations and scalings of $\mathbb{R}^3$ are linear maps, given by $3 \times 3$ matrices, and composing them is matrix
multiplication. But moving an object, $x \mapsto x + t$, is not linear (it moves the origin), so it cannot be a
$3 \times 3$ matrix. A graphics program must chain dozens of rotations, scalings and translations for every object, and
it would like a single matrix for the whole chain.

### Homogeneous coordinates

Represent the point $(x, y, z)$ by the 4-vector $(x, y, z, 1)$. Then translation by $t = (t_1, t_2, t_3)$ is linear on
4-vectors:

$$
\begin{pmatrix} 1 & 0 & 0 & t_1 \\ 0 & 1 & 0 & t_2 \\ 0 & 0 & 1 & t_3 \\ 0 & 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \\ 1 \end{pmatrix} = \begin{pmatrix} x + t_1 \\ y + t_2 \\ z + t_3 \\ 1 \end{pmatrix}.
$$

A $3 \times 3$ matrix $R$ becomes the block matrix $\begin{pmatrix} R & 0 \\ 0 & 1 \end{pmatrix}$, and any **affine** map
$x \mapsto Rx + t$ is $\begin{pmatrix} R & t \\ 0 & 1 \end{pmatrix}$. Composition is again matrix multiplication.
Directions (differences of points) get a $0$ in the last slot, $(v_1, v_2, v_3, 0)$, so translations do not move them,
which is correct: a direction has no position.

**Worked example 4.** Translate by $(3, -1, 2)$, then rotate by $90°$ about the $z$-axis, applied to the point $(1, 0, 0)$.
The translation gives $(4, -1, 2)$, and the rotation $(x, y, z) \mapsto (-y, x, z)$ gives $(1, 4, 2)$. In the other order,
rotate first: $(0, 1, 0)$, then translate: $(3, 0, 2)$. Different answers: the matrices $RT$ and $TR$ do not commute, and
in a program the order of matrices is the order of operations read right to left.

Homogeneous coordinates come from projective geometry ([Geometry, Chapter 18](../geometry/18-Projective-Geometry.md)):
Möbius introduced them in 1827 and Plücker developed them around 1830. The 4-vectors $(x, y, z, w)$ and
$(cx, cy, cz, cw)$ for $c \ne 0$ represent the same point $(x/w, y/w, z/w)$, and $w = 0$ gives "points at infinity".
That last feature is exactly what perspective needs.

### Perspective projection

A pinhole camera at the origin, looking along the positive $z$-axis, with the image plane at distance $f$ (the focal
length), sends the point $(x, y, z)$ to the image point $\left(f\frac{x}{z}, f\frac{y}{z}\right)$ by similar triangles. Division
by $z$ is not linear, but in homogeneous coordinates it is, because the division is postponed:

$$
\begin{pmatrix} f & 0 & 0 & 0 \\ 0 & f & 0 & 0 \\ 0 & 0 & 1 & 0 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \\ 1 \end{pmatrix} = \begin{pmatrix} fx \\ fy \\ z \end{pmatrix} \sim \Bigl(\frac{fx}{z}, \frac{fy}{z}\Bigr).
$$

**Worked example 5.** With $f = 1$, the point $(2, 1, 4)$ lands at $(0.5, 0.25)$. The parallel lines $(1, 0, z)$ and
$(-1, 0, z)$ (two rails) land at $(1/z, 0)$ and $(-1/z, 0)$, which both tend to $(0, 0)$ as $z \to \infty$: parallel lines
meet at a **vanishing point**, exactly as in Renaissance perspective drawing.

Real graphics pipelines use a $4 \times 4$ version of this matrix that also keeps a transformed depth for hidden-surface
removal (the "$z$-buffer"), and graphics hardware performs the division by $w$ automatically for every vertex. The full
chain for each vertex is

$$
\text{screen} = \text{Viewport} \cdot \text{Projection} \cdot \text{View} \cdot \text{Model} \cdot \text{vertex},
$$

four matrices that can be multiplied once per object and then applied to millions of vertices. The camera models used
to turn stereo images from Mars rover cameras into three-dimensional terrain are refinements of the same pinhole model,
with extra terms for lens distortion. Rotations of objects and cameras are often stored as unit quaternions and
converted to matrices only at the end ([Chapter 13](13-Orthogonal-Matrices-and-Rotations.md), 13.5).

### Normals and the inverse transpose

Lighting needs the **normal** vector $n$ of each surface (perpendicular to it). When a model is transformed by a matrix $M$
(the $3 \times 3$ linear part), tangent vectors $t$ become $Mt$. Does the normal become $Mn$? Not in general: under a
stretch along $x$, a $45°$ slope becomes flatter, and its normal must tilt the other way.

**Theorem 19.5.** If $n$ is perpendicular to every tangent vector $t$ of a surface, then $(M^{-1})^{\mathsf T}n$ is
perpendicular to every transformed tangent $Mt$.

*Proof.* $\bigl((M^{-1})^{\mathsf T}n\bigr)^{\mathsf T}(Mt) = n^{\mathsf T}M^{-1}Mt = n^{\mathsf T}t = 0$. $\square$

When $M$ is a rotation, $(M^{-1})^{\mathsf T} = M$ and there is no difference; with non-uniform scaling there is. This is
duality from [Chapter 17](17-Duality-and-Multilinear-Algebra.md) in disguise: a normal is really a covector (the
functional "how far off the surface"), and covectors transform by the inverse transpose.

## 19.4 Machine learning

*Level: advanced.* Modern machine learning, from spam filters to large language models, is built from linear algebra
plus a few non-linear functions, trained by calculus and run on hardware designed to multiply matrices fast. This
section says what the linear algebra does, without overselling.

### Data as a matrix

A data set of $n$ examples, each described by $d$ numbers (**features**), is an $n \times d$ matrix $X$: one row per
example. A house might be (area, rooms, age, distance to the station); an image of $28 \times 28$ grey pixels is a vector in
$\mathbb{R}^{784}$. Everything in this book now applies:

- **Linear regression** fits $y \approx Xw$ by least squares: $w$ solves the normal equations, or better, a QR or SVD
  problem ([Chapter 12](12-Projections-and-Least-Squares.md); [Statistics, Chapter 12](../statistics/12-Multiple-Regression.md)).
- **Principal component analysis** finds the directions of greatest variance as the top right singular vectors of the
  centred $X$ ([Chapter 15](15-The-Singular-Value-Decomposition.md), 15.5; [Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md)).
- **Recommendation systems** model a huge, mostly empty matrix of ratings (users by films) as approximately low rank,
  $R \approx UV^{\mathsf T}$ with thin $U$ and $V$: each user and each film gets a short vector of "tastes", and a rating is
  predicted by a dot product. The Netflix Prize competition (2006-2009) made this approach famous.

### Neural networks

A **layer** of a neural network is an affine map followed by a simple non-linear function applied entry by entry:

$$
h = \sigma(Wx + b),
$$

with a weight matrix $W$, a bias vector $b$, and for example $\sigma(t) = \max(t, 0)$ (called ReLU). A network is a
composition of layers. Without the $\sigma$'s, the composition would be a single affine map, no more powerful than
linear regression; the non-linearity is essential, but almost all the *computation* is in the matrix products $Wx$, done
for many inputs at once as matrix-matrix products. Training adjusts the entries of all the $W$'s and $b$'s by gradient
descent, and the gradients are computed by the chain rule, in which the derivative of each layer is a matrix (the
Jacobian, [Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md)) and its transpose carries the
error backwards. That is "backpropagation": the chain rule plus transposes.

### Embeddings and similarity

An **embedding** represents a word, an image or a user as a vector in $\mathbb{R}^d$ (often $d$ is a few hundred or
thousand) learned so that similar things have similar vectors. Similarity is measured by the **cosine** of the angle,
$\cos\theta = \frac{u \cdot v}{\lVert u\rVert\lVert v\rVert}$ (Chapter 1).

**Worked example 6 (made-up numbers).** Suppose three words had the toy embeddings cat $= (0.9, 0.8, 0.1)$,
dog $= (0.8, 0.9, 0.2)$, car $= (0.1, 0.2, 0.9)$. Then $\cos(\text{cat}, \text{dog}) \approx 0.99$,
$\cos(\text{cat}, \text{car}) \approx 0.30$ and $\cos(\text{dog}, \text{car}) \approx 0.39$. (Check the first:
$0.72 + 0.72 + 0.02 = 1.46$, divided by $\sqrt{1.46}\sqrt{1.49} \approx 1.475$.) Real embeddings are learned from data, not
written by hand, and their individual coordinates usually have no simple meaning.

Mikolov and colleagues (2013) reported that word vectors trained on large text collections satisfy approximate
analogies such as king $-$ man $+$ woman $\approx$ queen. That observation was striking, but later studies showed it is
less robust than first presented (for example, the search for the nearest vector usually excludes the input words
themselves) and that embeddings also absorb biases present in their training text. They are a useful tool, not a model
of meaning.

### Attention

The "transformer" architecture behind current large language models (Vaswani and others, 2017) is built around
**attention**. Each position of the input has a query vector $q$, a key vector $k$ and a value vector $v$ (each computed
from the input by a learned matrix). The output at a position is a weighted average of the values, with weights from a
**softmax** of the dot products of its query with all the keys:

$$
\operatorname{Attention}(Q, K, V) = \operatorname{softmax}\Bigl(\frac{QK^{\mathsf T}}{\sqrt d}\Bigr)V,
$$

where the softmax turns each row of scores $s_j$ into positive weights $e^{s_j}/\sum_l e^{s_l}$ that add to 1.

**Worked example 7.** One query $q = (1, 0)$, two keys $k_1 = (1, 0)$, $k_2 = (0, 1)$, values $v_1 = (1, 2)$, $v_2 = (3, 4)$,
$d = 2$. Scores: $q \cdot k_1/\sqrt2 \approx 0.707$ and $0$. Weights: $e^{0.707}/(e^{0.707} + 1) \approx 0.670$ and $0.330$.
Output: $0.670(1, 2) + 0.330(3, 4) \approx (1.660, 2.660)$. The query "attends" mostly to the first position, whose key it
matches.

Everything here except the softmax is matrix multiplication, which is why the hardware that trains such models is
built to multiply matrices (18.6 explains the cost). Linear algebra also explains some practical tricks: **low-rank
adaptation** (Hu and others, 2021) fine-tunes a huge model by learning an update $\Delta W = BA$ of low rank, with $B$ thin
and $A$ wide, instead of a full matrix, based on the observation that useful updates are often well approximated by low
rank (Eckart-Young, [Chapter 15](15-The-Singular-Value-Decomposition.md)).

**What linear algebra does not tell you.** It explains the computations, not why trained networks generalise to new
data so well, which remains an active research question; and a model's output being the result of matrix products says
nothing either way about whether it "understands". Honest uses of these tools come with honest descriptions of their
limits ([Statistics, Chapter 19](../statistics/19-Statistical-Learning.md)).

## 19.5 Coding theory again, and compressed sensing

*Level: advanced.* In [Chapter 7](07-The-Four-Subspaces.md) you met linear codes: a code is a subspace $C$ of
$\mathbb{F}_q^n$ (vectors of length $n$ over a finite field), given by a generator matrix, and errors are detected by a
parity-check matrix $H$ whose null space is $C$. The Hamming $(7, 4)$ code corrects one error, and the first-order
Reed-Muller code carried pictures from Mariner 9 at Mars in 1971-72 ([Combinatorics, Chapter 19](../combinatorics/19-Designs-and-Codes.md)).
Here are two further ideas: codes built from polynomials, decoded by solving a linear system, and the surprising
continuous cousin of coding theory, compressed sensing.

### Distance and the Singleton bound

The **weight** of a vector is its number of nonzero entries; the **distance** between two vectors is the weight of their
difference. A code with minimum distance $d$ detects up to $d - 1$ errors and corrects up to $\lfloor(d - 1)/2\rfloor$
(balls of radius $(d-1)/2$ around codewords do not overlap). For a linear code, the minimum distance is the minimum
weight of a nonzero codeword, because the difference of codewords is a codeword. A linear code of length $n$, dimension
$k$ and minimum distance $d$ is called an $[n, k, d]$ code.

**Theorem 19.6 (Singleton bound).** Every $[n, k, d]$ linear code satisfies $d \le n - k + 1$.

*Proof.* Look at the first $k - 1$ coordinates: the linear map $C \to \mathbb{F}_q^{k-1}$ that keeps only those coordinates has a domain of dimension $k$ and a
target of dimension $k - 1$, so by rank-nullity its kernel contains a nonzero codeword $c$. This $c$ is zero in its first
$k - 1$ places, so its weight is at most $n - (k - 1)$. Hence $d \le n - k + 1$. $\square$

Codes meeting the bound are called **MDS** (maximum distance separable). They exist, and they are built from polynomials.

### Reed-Solomon codes

Fix a finite field $\mathbb{F}_q$ and $n$ distinct points $a_1, \ldots, a_n$ in it (so $n \le q$). A message is a polynomial
$f$ of degree less than $k$ (its $k$ coefficients are the message), and the codeword is the list of values

$$
\bigl(f(a_1), f(a_2), \ldots, f(a_n)\bigr).
$$

This is linear in $f$, so the code is a subspace; its generator matrix is a Vandermonde matrix with rows
$(1, a_i, a_i^2, \ldots, a_i^{k-1})$.

**Theorem 19.7.** The Reed-Solomon code is an $[n, k, n - k + 1]$ code: it meets the Singleton bound.

*Proof.* A nonzero polynomial of degree less than $k$ has at most $k - 1$ roots ([Algebra book](../algebra/index.md)), so
a nonzero codeword has at most $k - 1$ zero entries, hence weight at least $n - k + 1$. The map $f \mapsto$ codeword is
injective for the same reason (since $n \ge k$), so the dimension is $k$. Combine with Theorem 19.6. $\square$

Reed and Solomon published the codes in 1960. They correct **bursts** of errors well when each symbol is a byte
(working over $\mathbb{F}_{256}$), which is why they protect CDs, DVDs, QR codes and data storage. In deep space, Voyager
used a Reed-Solomon code concatenated with a convolutional code, and the international CCSDS standards that Mars orbiters
and rovers follow include Reed-Solomon, turbo and LDPC codes, chosen per mission and link.

### Decoding by linear algebra: the Berlekamp-Welch idea

Suppose a codeword is received with at most $e$ errors, where $n \ge k + 2e$. Let $r_i$ be the received values. Here is a
decoding method that is only linear algebra (Welch and Berlekamp, patented in 1986).

Let $E(x)$ be the unknown **error locator**, the monic polynomial of degree $e$ whose roots include the positions where
errors happened. Then for every $i$, $E(a_i)\,r_i = E(a_i)\,f(a_i)$: at an error position both sides are 0, and elsewhere
$r_i = f(a_i)$. Put $Q = Ef$, a polynomial of degree less than $k + e$. The conditions

$$
Q(a_i) = r_i\,E(a_i), \qquad i = 1, \ldots, n,
$$

are **linear equations** in the unknown coefficients of $Q$ and $E$. Solve them; then $f = Q/E$.

**Worked example 8.** Over $\mathbb{F}_7$, take $k = 2$, $e = 1$, $n = 4$ points $0, 1, 2, 3$. The message $f(x) = 2 + 3x$ gives
the codeword $(2, 5, 1, 4)$ (since $f(2) = 8 \equiv 1$ and $f(3) = 11 \equiv 4$). The channel corrupts the third entry,
and we receive $r = (2, 5, 6, 4)$. Unknowns: $Q = q_0 + q_1x + q_2x^2$ and $E = x + e_0$. The four equations
$q_0 + q_1a + q_2a^2 - r\,e_0 = r\,a$ are

$$
\begin{aligned}
q_0 \phantom{{}+ q_1 + q_2} - 2e_0 &= 0, \\
q_0 + q_1 + q_2 - 5e_0 &= 5, \\
q_0 + 2q_1 + 4q_2 - 6e_0 &= 12 \equiv 5, \\
q_0 + 3q_1 + 9q_2 - 4e_0 &= 12 \equiv 5,
\end{aligned}
$$

all mod 7. Elimination mod 7 gives $q_0 = q_1 = q_2 = 3$ and $e_0 = 5$. So $E(x) = x + 5 = x - 2$: the error was at the point
$2$, the third position. And $Q(x) = 3x^2 + 3x + 3 = 3(x^2 + x + 1)$. Divide: $(3x^2 + 3x + 3) \div (x - 2) = 3x + 2$ with
remainder 0 mod 7 (check: $(x - 2)(3x + 2) = 3x^2 - 4x - 4 \equiv 3x^2 + 3x + 3$). So $f(x) = 2 + 3x$: the message is
recovered.

Faster decoders (Berlekamp-Massey, and list decoding by Sudan and by Guruswami and Sudan, which corrects even more errors
by allowing a short list of candidate messages) refine this idea, but it is linear algebra over a finite field all the
way down. The finite field arithmetic itself is the same as that used in cryptography
([cryptography book](https://cryptography.akadian.ca/book/)).

### Compressed sensing

Now go from finite fields back to $\mathbb{R}$, and from errors to measurements. You want to recover a signal
$x \in \mathbb{R}^n$ (an image, say) from $m$ linear measurements $b = Ax$, where $m < n$. The system is underdetermined:
a whole affine subspace of solutions. Linear algebra says recovery is hopeless... unless you know something more about $x$.
The extra knowledge is **sparsity**: most natural signals, written in a suitable basis (wavelets for images), have only a
few large coefficients. Call $x$ **$s$-sparse** if it has at most $s$ nonzero entries.

**Theorem 19.8.** If every set of $2s$ columns of $A$ is linearly independent, then $Ax = b$ has at most one $s$-sparse
solution.

*Proof.* If $x$ and $x'$ are both $s$-sparse solutions, then $A(x - x') = 0$, and $x - x'$ has at most $2s$ nonzero entries.
So $A(x - x') = 0$ is a dependence among at most $2s$ columns of $A$, which by assumption must be the trivial one:
$x - x' = 0$. $\square$

This is the same counting as the Singleton argument above, in a new setting: the null space of $A$ must contain no sparse
vectors, just as a code must contain no low-weight codewords.

**Worked example 9.** $A = \begin{pmatrix} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 2 \end{pmatrix}$ has every pair of columns
independent (check the six $2 \times 2$ determinants: all nonzero), so a 1-sparse solution of $Ax = b$ is unique. For
$b = (3, 6)$: $b = 3 \times$ (column 4), so $x = (0, 0, 0, 3)$, and no other single column is a multiple of $(3, 6)$. The full
solution set is a plane in $\mathbb{R}^4$, but only one point of it is 1-sparse.

Finding the sparsest solution is NP-hard in general. The breakthrough, by Emmanuel Candès, Justin Romberg and Terence Tao
and independently by David Donoho (papers of 2006), was that for suitable $A$ (for example with random Gaussian entries) one
can instead solve the **convex** problem

$$
\text{minimise } \lVert x\rVert_1 = \sum_i|x_i| \quad \text{subject to } Ax = b,
$$

which is a linear program, solvable efficiently, and it returns the sparse solution exactly, provided
$m \ge Cs\log(n/s)$ for a constant $C$. In Example 9 this works: among the basic solutions (those using two columns) the
$\ell_1$ norms are 9, 9, 6, 3, 3, 3, and the minimum 3 is the sparse solution $(0, 0, 0, 3)$. The guarantee is proved through the
**restricted isometry property**: $A$ nearly preserves the length of every sparse vector, a statement about the singular
values of all column-submatrices of $A$, which random matrices satisfy with high probability (20.4 is about such
matrices).

Why $\ell_1$ and not $\ell_2$? The least-norm solution ([Chapter 15](15-The-Singular-Value-Decomposition.md), 15.4) minimises
$\lVert x\rVert_2$ and spreads energy over all coordinates; it is almost never sparse. The $\ell_1$ ball is a pointed
"diamond" whose corners lie on the axes, so the first point where a growing $\ell_1$ ball touches the solution plane tends to
be a corner: a sparse vector.

Compressed sensing is used in magnetic resonance imaging, where each measurement takes time and fewer measurements mean
shorter scans; commercial MRI scanners now offer compressed-sensing modes. It is also used in radar, astronomy and
single-pixel cameras.

## A short history

Kirchhoff's matrix-tree theorem (1847) came from circuit theory. Spectral graph theory grew in the 1950s to 1970s in
chemistry (Hückel's model of molecular orbitals uses the adjacency matrix of a molecule's carbon skeleton) and
mathematics, with Fiedler's algebraic connectivity in 1973. Heisenberg's matrix mechanics (1925) was written in the
language of matrices by Born and Jordan, who recognised Heisenberg's tables as matrices; von Neumann's *Mathematical
Foundations of Quantum Mechanics* (1932) recast the theory in Hilbert spaces. Homogeneous coordinates (Möbius, 1827;
Plücker) entered computer graphics in the 1960s, notably through work of Lawrence Roberts. Reed-Solomon codes date from
1960; Mariner 9 used Reed-Muller codes in 1971. Compressed sensing was born in 2004-2006 from work of Candès, Romberg, Tao and
Donoho.

## Check yourself

??? question "1. Find the Laplacian of the path $1 - 2 - 3$ and its eigenvalues. Is the graph connected?"
    $L = \begin{pmatrix} 1 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 1 \end{pmatrix}$. Its characteristic polynomial is
    $\mu(\mu - 1)(\mu - 3)$ (trace 4, and $(1,0,-1)$ is an eigenvector with eigenvalue 1, $(1,-2,1)$ with eigenvalue 3). The
    eigenvalue 0 is simple, so the graph is connected (Theorem 19.2); $\mu_2 = 1$.

??? question "2. A graph has Laplacian eigenvalues $0, 0, 0, 2, 3, 5$. How many connected components does it have?"
    Three: the multiplicity of 0 (Theorem 19.2).

??? question "3. Use the matrix-tree theorem to count the spanning trees of a 4-cycle."
    $L$ has 2 on the diagonal and $-1$ for neighbours. Delete vertex 1: the reduced matrix for vertices 2, 3, 4 (with 2 and 4
    adjacent to 3) is $\begin{pmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{pmatrix}$, with determinant
    $2(4 - 1) + 1(-2) = 4$. Check directly: a spanning tree of a 4-cycle drops exactly one of its 4 edges.

??? question "4. Measure $X$ on the qubit state $\psi = \tfrac35|0\rangle + \tfrac45|1\rangle$. Give the probabilities and $\langle X\rangle$."
    The eigenvectors of $X$ are $|\pm\rangle = \frac{1}{\sqrt2}(|0\rangle \pm |1\rangle)$ with eigenvalues $\pm1$.
    $\langle +, \psi\rangle = \frac{1}{\sqrt2}\cdot\frac75$, probability $\frac{49}{50}$; $\langle -, \psi\rangle = \frac{1}{\sqrt2}\cdot(-\frac15)$,
    probability $\frac{1}{50}$. $\langle X\rangle = \frac{49 - 1}{50} = \frac{24}{25}$. Check: $\langle\psi, X\psi\rangle = 2\cdot\frac35\cdot\frac45 = \frac{24}{25}$.

??? question "5. Show that $XZ = -ZX$ and compute $[X, Z]$. Express it with $Y$."
    $XZ = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, $ZX = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} = -XZ$. So
    $[X, Z] = 2XZ = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix} = -2iY$, since $iY = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$.

??? question "6. Is $\frac12(|00\rangle + |01\rangle + |10\rangle + |11\rangle)$ entangled?"
    As a matrix it is $\frac12\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, of rank 1, so it is a pure tensor:
    $|+\rangle \otimes |+\rangle$. Not entangled.

??? question "7. Write the $4 \times 4$ homogeneous matrix for: scale by 2 about the point $(1, 1, 0)$ (that point stays fixed)."
    Translate $(1,1,0)$ to the origin, scale, translate back: $x \mapsto 2(x - p) + p = 2x - p$ with $p = (1, 1, 0)$. So the
    matrix is $\begin{pmatrix} 2 & 0 & 0 & -1 \\ 0 & 2 & 0 & -1 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$. Check: $(1, 1, 0, 1) \mapsto (1, 1, 0, 1)$.

??? question "8. A surface has normal $n = (1, 1, 0)$ and the model is scaled by $M = \operatorname{diag}(2, 1, 1)$. Find the new normal, and check it against a transformed tangent."
    New normal $(M^{-1})^{\mathsf T}n = (\tfrac12, 1, 0)$. A tangent is $t = (1, -1, 0)$, transformed to $Mt = (2, -1, 0)$. Dot:
    $1 - 1 + 0 = 0$. Using $Mn = (2, 1, 0)$ instead gives $4 - 1 = 3 \ne 0$: wrong.

??? question "9. Compute the softmax weights for scores $(2, 0, 0)$ and the attention output with values $(1, 0)$, $(0, 1)$, $(0, 1)$."
    $e^2 \approx 7.389$, so weights $7.389/9.389 \approx 0.787$ and $1/9.389 \approx 0.107$ twice. Output
    $0.787(1, 0) + 0.213(0, 1) \approx (0.787, 0.213)$.

??? question "10. Over $\mathbb{F}_5$ with points $0, 1, 2, 3, 4$ and $k = 2$, what are $n$, $d$ and the number of errors corrected? Encode $f(x) = 1 + 2x$."
    $n = 5$, $d = n - k + 1 = 4$, corrects $\lfloor 3/2\rfloor = 1$ error (and detects 3). Codeword: $f(0..4) = 1, 3, 5, 7, 9 \equiv (1, 3, 0, 2, 4)$.

??? question "11. Prove that if $A$ ($m \times n$) has every $2s$ columns independent, then $m \ge 2s$. What does that say about Example 9?"
    $2s$ independent vectors in $\mathbb{R}^m$ need $m \ge 2s$. In Example 9, $m = 2$ and $s = 1$: the bound $2 \ge 2$ is tight. To
    recover 2-sparse signals uniquely by this theorem you need at least 4 measurements.

??? question "12. Show that the Laplacian's Rayleigh quotient for $x = (1, 1, 1, -1, -1, -1)$ in Example 1 is $\tfrac23$, and compare with $\mu_2$."
    $x^{\mathsf T}Lx = (1 - (-1))^2 = 4$ (only the cut edge contributes), and $x^{\mathsf T}x = 6$, so the quotient is $\tfrac23 \approx 0.667$.
    This vector is orthogonal to $\mathbf 1$, so the quotient is at least $\mu_2 \approx 0.438$; it is, and the Fiedler vector does
    a little better by letting vertices 3 and 4, the ends of the cut edge, take smaller values.

## What you learned

- The Laplacian $L = D - A$ of a graph satisfies $x^{\mathsf T}Lx = \sum(x_i - x_j)^2$; its zero eigenvalues count components,
  its second eigenvalue measures connectivity, and the signs of its Fiedler vector suggest a good cut.
- Kirchhoff's theorem counts spanning trees with a determinant.
- Quantum states are unit vectors, observables Hermitian matrices, outcomes eigenvalues with Born-rule probabilities,
  evolution unitary; composite systems use tensor products, and entanglement is "not a pure tensor".
- Robertson's uncertainty relation is Cauchy-Schwarz applied to a commutator.
- Homogeneous coordinates make translations and perspective linear; normals transform by the inverse transpose.
- Machine learning is built on matrix products, least squares, SVD and low rank; linear algebra explains the computation,
  not the success or the meaning.
- Reed-Solomon codes meet the Singleton bound and can be decoded by solving a linear system; compressed sensing recovers
  sparse signals from few measurements by $\ell_1$ minimisation.

**Next:** [Chapter 20](20-Where-Linear-Algebra-Goes.md), where linear algebra goes next: infinite dimensions, spectra,
representations, random matrices and open problems.

## Further reading

- F. R. K. Chung, *Spectral Graph Theory*, AMS, 1997; D. A. Spielman, *Spectral and Algebraic Graph Theory* (book draft,
  Yale, online).
- U. von Luxburg, "A tutorial on spectral clustering", *Statistics and Computing* 17, 2007.
- M. Fiedler, "Algebraic connectivity of graphs", *Czechoslovak Mathematical Journal* 23, 1973.
- M. A. Nielsen and I. L. Chuang, *Quantum Computation and Quantum Information*, Cambridge University Press, 2000.
- J. von Neumann, *Mathematical Foundations of Quantum Mechanics*, 1932 (English translation Princeton, 1955).
- J. D. Foley, A. van Dam, S. K. Feiner and J. F. Hughes, *Computer Graphics: Principles and Practice*, 2nd edition,
  Addison-Wesley, 1990.
- G. Strang, *Linear Algebra and Learning from Data*, Wellesley-Cambridge Press, 2019.
- A. Vaswani and others, "Attention is all you need", NeurIPS 2017.
- F. J. MacWilliams and N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland, 1977.
- I. S. Reed and G. Solomon, "Polynomial codes over certain finite fields", *Journal of the SIAM* 8, 1960.
- E. J. Candès, J. Romberg and T. Tao, "Robust uncertainty principles: exact signal reconstruction from highly
  incomplete frequency information", *IEEE Transactions on Information Theory* 52, 2006; D. L. Donoho, "Compressed sensing",
  same journal and volume, 2006.
- S. Foucart and H. Rauhut, *A Mathematical Introduction to Compressive Sensing*, Birkhäuser, 2013.
- On this site: U of T guides [MAT247 Unit 5: Hermitian, symmetric and normal operators](../../uoft/MAT247H1/unit05.md) and
  [MAT247 Unit 6: The spectral theorem](../../uoft/MAT247H1/unit06.md); [Combinatorics, Chapter 10](../combinatorics/10-Graphs.md)
  and [Chapter 19](../combinatorics/19-Designs-and-Codes.md); [Probability, Chapter 13](../probability/13-Markov-Chains.md) for
  PageRank; [Statistics, Chapter 18](../statistics/18-High-Dimensional-Statistics.md) and
  [Chapter 19](../statistics/19-Statistical-Learning.md); [Geometry, Chapter 18](../geometry/18-Projective-Geometry.md) for
  homogeneous coordinates; the [cryptography book](https://cryptography.akadian.ca/book/) for finite fields and
  post-quantum cryptography.
