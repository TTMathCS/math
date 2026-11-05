# 7. The four subspaces

*Every matrix carries four subspaces with it: two in the space of its inputs and two in the space of its outputs. Between them
they answer every question about the equation $Ax = b$: whether it has a solution, how many, and what they look like. In this
chapter you will find bases of all four by one elimination, prove the surprising fact that the rows and the columns of any matrix
span spaces of the same dimension, and see how the four fit together at right angles. Then you will put the picture to work over
the field with two elements, where a matrix whose null space is a code can find and correct errors in a message, as one did for the
pictures Mariner 9 sent back from Mars.*

!!! abstract "In this chapter"
    **You will learn:**

    - the column space, null space, row space and left null space of a matrix, and how to find a basis of each from one elimination
    - why row rank equals column rank, with two proofs
    - exactly when $Ax = b$ has a solution, and the shape of the complete solution
    - the big picture: the four subspaces pair off as perpendicular complements, and $A$ carries the row space one-to-one onto the column space
    - linear codes: generator and parity-check matrices, the Hamming $(7, 4)$ code and syndrome decoding
    - the first-order Reed-Muller code that Mariner 9 used at Mars, and why it can correct 7 errors in 32 bits

    **You need:** [Chapter 5](05-Independence-Bases-and-Dimension.md) (bases and dimension) and
    [Chapter 6](06-Linear-Maps.md) (kernel, image, rank-nullity), elimination and reduced row echelon form from
    [Chapter 2](02-Systems-of-Linear-Equations.md), the dot product from [Chapter 1](01-Vectors.md), and arithmetic in
    $\mathbb{Z}/2$ from [Chapter 4](04-Vector-Spaces.md). The U of T guide
    [MAT240 Unit 7, Systems and Elementary Operations](../../uoft/MAT240H1/unit07.md) covers ranks and systems in course form.

    **Levels:** 7.1 to 7.3 are intermediate; 7.4 is intermediate to advanced; 7.5 is advanced (with an honest piece of space history).

Throughout, $A$ is an $m \times n$ matrix over a field $F$: $m$ rows, $n$ columns, a linear map from $F^n$ to $F^m$. Its **rank** $r$
is the number of pivots in its row echelon form. Section 7.2 shows that $r$ is also the dimension of the column space, the row
space, and of the image of the map $x \mapsto Ax$.

## 7.1 Four subspaces from one matrix

Consider again the matrix from [Chapter 6](06-Linear-Maps.md), 6.3:

$$
A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 4 \\ 3 & 6 & 1 & 5 \end{pmatrix}.
$$

You can read it in two directions. Its **columns** are four vectors in $\mathbb{R}^3$; its **rows** are three vectors in
$\mathbb{R}^4$. Each set of vectors spans a subspace, and each direction has its own equation $Ax = 0$ or $y^T A = 0$. That makes four
subspaces.

**Definition.** For an $m \times n$ matrix $A$:

| Name | Symbol | Definition | Lives in |
|---|---|---|---|
| column space | $C(A)$ | the span of the columns; equivalently all $Ax$ | $F^m$ |
| null space | $N(A)$ | all $x$ with $Ax = 0$ | $F^n$ |
| row space | $C(A^T)$ | the span of the rows (as vectors) | $F^n$ |
| left null space | $N(A^T)$ | all $y$ with $A^T y = 0$, that is, $y^T A = 0$ | $F^m$ |

The row space is the column space of the **transpose** $A^T$, which is why it is written $C(A^T)$. The left null space gets its name
because $A^T y = 0$ is the same as $y^T A = 0^T$: the vector $y$ multiplies $A$ from the left. In the language of
[Chapter 6](06-Linear-Maps.md), $C(A)$ is the image and $N(A)$ is the kernel of the map $x \mapsto Ax$; the other two are the image and
kernel of the map $y \mapsto A^T y$.

What each one means:

- $C(A)$: the right-hand sides $b$ for which $Ax = b$ can be solved.
- $N(A)$: the ways to combine the columns to get zero, the relations among the columns.
- $C(A^T)$: all combinations of the equations; every equation that follows linearly from the given ones.
- $N(A^T)$: the ways to combine the **rows** to get zero, the relations among the equations.

### One elimination finds all four

Row reduction gives the **reduced row echelon form** $R$ of $A$, together with an invertible matrix $E$ (the product of the
elementary matrices of the steps, [Chapter 3](03-Matrices.md)) with $EA = R$. For our $A$, subtract $2 \times$ row 1 from row 2 and
$3 \times$ row 1 from row 3, then the new row 2 from the new row 3:

$$
R = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \qquad
E = \begin{pmatrix} 1 & 0 & 0 \\ -2 & 1 & 0 \\ -1 & -1 & 1 \end{pmatrix}.
$$

(The last row of $E$ records that the final row 3 is $\text{row}_3 - 3\,\text{row}_1 - (\text{row}_2 - 2\,\text{row}_1) = -\text{row}_1 - \text{row}_2 + \text{row}_3$.)
The rank is $r = 2$, with pivots in columns 1 and 3. From these two matrices you can read a basis of every one of the four subspaces.

**Row space: the nonzero rows of $R$.** Here $(1, 2, 0, 1)$ and $(0, 0, 1, 2)$.

*Why.* Each row operation replaces a row by a combination of rows, and can be undone by another row operation. So every row of
the new matrix is a combination of the old rows, and every old row is a combination of the new ones: **row operations do not
change the row space**. So $C(A^T) = C(R^T)$. The nonzero rows of $R$ are independent, because each has a pivot $1$ in a column where
all the other rows have $0$: in a combination equal to zero, look at that column to see that its coefficient is $0$.

**Null space: the special solutions.** Here the free variables are $x_2, x_4$. Setting each free variable to 1 in turn and the other
to 0, and solving $Rx = 0$, gives

$$
s_1 = (-2, 1, 0, 0), \qquad s_2 = (-1, 0, -2, 1).
$$

*Why.* Row operations do not change the solutions of $Ax = 0$ (each step can be undone), so $N(A) = N(R)$. Every solution of
$Rx = 0$ is determined by its free variables: $x = x_2 s_1 + x_4 s_2$. And the special solutions are independent, because each has a
1 in its own free position where the others have 0 (the argument of [Chapter 5](05-Independence-Bases-and-Dimension.md), 5.2).

**Column space: the pivot columns of $A$ itself** (not of $R$!). Here columns 1 and 3 of $A$: $(1, 2, 3)$ and $(0, 1, 1)$.

*Why.* A relation among the columns of $A$ is a vector $x$ with $Ax = 0$, and $A$ and $R$ have the same null space, so **the columns of
$A$ satisfy exactly the same relations as the columns of $R$**. In $R$, the pivot columns are $e_1, e_2, \ldots$, plainly
independent, and every other column is a combination of the pivot columns before it. The same relations hold in $A$: the pivot
columns of $A$ are independent, and every non-pivot column is a combination of them. Here the special solution $s_1$ says
$\text{col}_2 = 2\,\text{col}_1$ and $s_2$ says $\text{col}_4 = \text{col}_1 + 2\,\text{col}_3$. *Check:* $(1, 4, 5) = (1, 2, 3) + 2(0, 1, 1)$.

Why not the pivot columns of $R$? Because row operations **do** change the column space. Here every column of $R$ has third entry 0,
but $C(A)$ contains $(1, 2, 3)$. Row operations keep the relations among the columns but move the columns themselves.

**Left null space: the last $m - r$ rows of $E$.** Here the single row $(-1, -1, 1)$.

*Why.* Row $i$ of $EA = R$ says that (row $i$ of $E$) times $A$ equals row $i$ of $R$. For $i > r$, that row of $R$ is zero, so
the last $m - r$ rows of $E$ are vectors $y$ with $y^T A = 0$. They are independent, since $E$ is invertible. Section 7.2 shows that
$\dim N(A^T) = m - r$, so they form a basis.

*Check:* $-\text{row}_1 - \text{row}_2 + \text{row}_3 = (-1 - 2 + 3,\; -2 - 4 + 6,\; 0 - 1 + 1,\; -1 - 4 + 5) = 0$. The third equation is
the sum of the first two.

So for this $3 \times 4$ matrix of rank 2:

| Subspace | Basis | Dimension |
|---|---|---|
| $C(A) \subseteq \mathbb{R}^3$ | $(1,2,3)$, $(0,1,1)$ | $2 = r$ |
| $N(A^T) \subseteq \mathbb{R}^3$ | $(-1,-1,1)$ | $1 = m - r$ |
| $C(A^T) \subseteq \mathbb{R}^4$ | $(1,2,0,1)$, $(0,0,1,2)$ | $2 = r$ |
| $N(A) \subseteq \mathbb{R}^4$ | $(-2,1,0,0)$, $(-1,0,-2,1)$ | $2 = n - r$ |

## 7.2 Row rank equals column rank

Look at the dimensions in that table. The column space and the row space both have dimension 2. For this matrix that is no surprise,
since both counts came from the two pivots. But think about what it claims in general: three vectors in $\mathbb{R}^4$ (the rows)
and four vectors in $\mathbb{R}^3$ (the columns), built from the same twelve numbers, span spaces of exactly the same dimension. For a
$100 \times 3$ matrix with a jumble of entries, the hundred rows can never span more than 3 dimensions, because that is all the
columns have. That is not obvious, and it is one of the small miracles of linear algebra.

**Theorem 7.1 (row rank = column rank).** For every matrix $A$,

$$
\dim C(A) = \dim C(A^T).
$$

This common number is the **rank** of $A$, and it equals the number of pivots. In particular $\operatorname{rank} A = \operatorname{rank} A^T$.

*First proof (by elimination).* By 7.1, the nonzero rows of $R$ form a basis of the row space, so $\dim C(A^T)$ is the number of
pivots. Also by 7.1, the pivot columns of $A$ form a basis of the column space, so $\dim C(A)$ is the number of pivots too. $\square$

The first proof is complete, but it leans on a particular algorithm. The second shows the reason more directly.

*Second proof (by factorisation).* Let $c = \dim C(A)$ and choose a basis $u_1, \ldots, u_c$ of the column space. Put them as the
columns of an $m \times c$ matrix $U$. Every column $a_j$ of $A$ is a combination of the $u$'s, say $a_j = U w_j$ for some
$w_j \in F^c$. Let $W$ be the $c \times n$ matrix with columns $w_1, \ldots, w_n$. Then

$$
A = U W .
$$

Now read this product by **rows**: row $i$ of $A$ is (row $i$ of $U$) times $W$, a combination of the $c$ rows of $W$. So the row
space of $A$ lies inside the span of $c$ vectors, and $\dim C(A^T) \le c = \dim C(A)$. This holds for every matrix, so it holds for
$A^T$: $\dim C(A) \le \dim C(A^T)$. The two inequalities give equality. $\square$

For our example the factorisation is visible: take $U$ to be the pivot columns of $A$ and $W$ the nonzero rows of $R$,

$$
\begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 4 \\ 3 & 6 & 1 & 5 \end{pmatrix}
=
\begin{pmatrix} 1 & 0 \\ 2 & 1 \\ 3 & 1 \end{pmatrix}
\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 2 \end{pmatrix}.
$$

*Check the last column:* $1 \cdot (1, 2, 3) + 2 \cdot (0, 1, 1) = (1, 4, 5)$. Every matrix of rank $r$ is a product of an $m \times r$ and
an $r \times n$ matrix, a fact used constantly in data compression ([Chapter 15](15-The-Singular-Value-Decomposition.md)): a rank-$r$
matrix needs only $r(m + n)$ numbers instead of $mn$.

### The dimensions of all four

**Theorem 7.2 (dimensions of the four subspaces).** If $A$ is $m \times n$ of rank $r$, then

$$
\dim C(A) = \dim C(A^T) = r, \qquad \dim N(A) = n - r, \qquad \dim N(A^T) = m - r .
$$

*Proof.* The first two are Theorem 7.1. Rank-nullity for $x \mapsto Ax$ on $F^n$ gives $\dim N(A) = n - \dim C(A) = n - r$.
Rank-nullity for $y \mapsto A^T y$ on $F^m$, whose image $C(A^T)$ also has dimension $r$, gives $\dim N(A^T) = m - r$. $\square$

In the input space $F^n$, the row space and null space have dimensions adding to $n$. In the output space $F^m$, the column space and
left null space have dimensions adding to $m$. Section 7.4 shows that each pair is a pair of perpendicular complements.

## 7.3 When does $Ax = b$ have a solution?

The equation $Ax = b$ says that $b$ is a combination of the columns of $A$ with coefficients $x_1, \ldots, x_n$. So, by the definition
of the column space:

> $Ax = b$ has a solution exactly when $b$ is in the column space $C(A)$.

That is true but not yet useful: how do you test whether $b$ is in $C(A)$ without solving? The left null space gives a test.

**Theorem 7.3 (solvability).** $Ax = b$ has a solution if and only if $y^T b = 0$ for every $y$ in the left null space $N(A^T)$.
It is enough to check this for the $m - r$ vectors of a basis of $N(A^T)$.

*Proof.* *Necessary.* If $Ax = b$ and $y^T A = 0$, then $y^T b = y^T A x = 0 \cdot x = 0$. In words: if a combination of the equations
has zero on the left, the same combination of the right-hand sides must be zero.

*Sufficient.* Take $EA = R$ as in 7.1, and apply $E$ to the whole system: $Ax = b$ has the same solutions as $Rx = Eb$ (since $E$ is
invertible). The last $m - r$ rows of $R$ are zero, so this system can be solved exactly when the last $m - r$ entries of $Eb$ are
zero (then back substitution solves the top $r$ rows, with free variables chosen freely). Those entries are $y_i^T b$ for the last
$m - r$ rows $y_i$ of $E$, which form a basis of $N(A^T)$. If $y^T b = 0$ for every $y \in N(A^T)$, they are all zero. $\square$

The test is a finite list of linear equations on $b$: the **compatibility conditions**.

**Worked example.** For our $A$, the left null space is spanned by $y = (-1, -1, 1)$, so

$$
Ax = b \text{ is solvable} \iff -b_1 - b_2 + b_3 = 0 \iff b_3 = b_1 + b_2 .
$$

The column space is the plane $b_3 = b_1 + b_2$ in $\mathbb{R}^3$. That makes sense: the third equation is the sum of the first two, so
its right-hand side must be the sum of theirs, or the equations contradict each other.

Take $b = (1, 3, 4)$, which passes the test. Reduce the augmented matrix:

$$
\left(\begin{array}{cccc|c} 1 & 2 & 0 & 1 & 1 \\ 2 & 4 & 1 & 4 & 3 \\ 3 & 6 & 1 & 5 & 4 \end{array}\right)
\longrightarrow
\left(\begin{array}{cccc|c} 1 & 2 & 0 & 1 & 1 \\ 0 & 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right).
$$

Setting the free variables $x_2 = x_4 = 0$ gives the **particular solution** $x_p = (1, 0, 1, 0)$. *Check:* $A x_p = (1, 2 + 1, 3 + 1) = (1, 3, 4)$.

### The complete solution

**Theorem 7.4.** If $x_p$ is one solution of $Ax = b$, the set of all solutions is

$$
x = x_p + x_n, \qquad x_n \in N(A).
$$

*Proof.* If $Ax_n = 0$, then $A(x_p + x_n) = b + 0 = b$. Conversely, if $Ax = b$, then $A(x - x_p) = b - b = 0$, so $x - x_p \in N(A)$. $\square$

For our example, the complete solution is

$$
x = (1, 0, 1, 0) + x_2\,(-2, 1, 0, 0) + x_4\,(-1, 0, -2, 1),
$$

a plane in $\mathbb{R}^4$ that does not pass through the origin: the null space, shifted by $x_p$. Such a shifted subspace is called an
**affine subspace**. The solution set of a system is either empty or an affine subspace of dimension $n - r$.

### The four cases

The rank decides everything about the *shape* of the solutions, before $b$ is even known.

| Rank | Shape of $A$ | Solutions of $Ax = b$ |
|---|---|---|
| $r = m = n$ | square, invertible | exactly one, for every $b$ |
| $r = n < m$ | tall, independent columns | zero or one (one exactly when $b \in C(A)$) |
| $r = m < n$ | wide, independent rows | infinitely many (over $\mathbb{R}$), for every $b$ |
| $r < m$, $r < n$ | neither | zero or infinitely many (over $\mathbb{R}$) |

The reasons: there are solutions for every $b$ exactly when $C(A) = F^m$, that is, $r = m$, so that $N(A^T) = \{0\}$ and there is
nothing to test; and a solution, when it exists, is unique exactly when $N(A) = \{0\}$, that is, $r = n$. (Over a finite field
$\mathbb{F}_q$, "infinitely many" becomes "exactly $q^{\,n - r}$".)

The second row is the common situation in science: more measurements than unknowns. Then usually $b$ is **not** in the column space,
because measurements carry errors, and there is no exact solution. The best one can do is to find the $x$ for which $Ax$ is closest
to $b$. That is the method of least squares, [Chapter 12](12-Projections-and-Least-Squares.md), and the four subspaces are its
skeleton.

<figure class="play" data-play="matrix2" data-mode="map" data-m="2,1,1,0.5"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Ax = b has a solution only when b is in the column space, the set the grid covers. With determinant 0 that is just a line.</figcaption></figure>

## 7.4 The big picture

*Level: intermediate to advanced.*

So far the four subspaces have been treated over any field. Over $\mathbb{R}$ there is more: the dot product, and with it right angles.
Two vectors $u, v \in \mathbb{R}^k$ are **orthogonal** if $u \cdot v = u^T v = 0$. Two subspaces $S, T$ are orthogonal if every vector of
one is orthogonal to every vector of the other. The **orthogonal complement** of a subspace $S$ of $\mathbb{R}^k$ is

$$
S^\perp = \{v \in \mathbb{R}^k : v \cdot s = 0 \text{ for all } s \in S\},
$$

which is itself a subspace (if $v$ and $w$ are orthogonal to every $s$, so are $v + w$ and $cv$).

**Theorem 7.5 (orthogonality of the four subspaces).** For a real $m \times n$ matrix $A$,

$$
N(A) = C(A^T)^\perp \ \text{ in } \mathbb{R}^n, \qquad N(A^T) = C(A)^\perp \ \text{ in } \mathbb{R}^m .
$$

Moreover $C(A^T) \cap N(A) = \{0\}$, so $\mathbb{R}^n = C(A^T) \oplus N(A)$, and likewise $\mathbb{R}^m = C(A) \oplus N(A^T)$.

*Proof.* The equation $Ax = 0$ says, row by row, that the dot product of each row of $A$ with $x$ is zero. So $x \in N(A)$ exactly
when $x$ is orthogonal to every row, hence to every combination of rows, that is, to the whole row space. This proves
$N(A) = C(A^T)^\perp$. Apply the same to $A^T$ for the second equation.

If $v$ is in both $C(A^T)$ and $N(A)$, then $v$ is orthogonal to itself: $v \cdot v = v_1^2 + \cdots + v_n^2 = 0$, and over the real
numbers this forces $v = 0$. So the intersection is $\{0\}$, and by the dimension formula ([Chapter 5](05-Independence-Bases-and-Dimension.md), 5.5)
$\dim(C(A^T) + N(A)) = r + (n - r) - 0 = n$, so the sum is all of $\mathbb{R}^n$. The same argument works in $\mathbb{R}^m$. $\square$

*Check on the example:* $(-2, 1, 0, 0) \cdot (1, 2, 0, 1) = 0$, $(-1, 0, -2, 1) \cdot (1, 2, 0, 1) = -1 + 1 = 0$,
$(-1, 0, -2, 1) \cdot (0, 0, 1, 2) = -2 + 2 = 0$, and $(-2,1,0,0) \cdot (0,0,1,2) = 0$. Each null space vector is orthogonal to each
row. And $(-1, -1, 1)$ is orthogonal to both basis columns $(1, 2, 3)$ and $(0, 1, 1)$.

Theorem 7.5 also completes the proof of the solvability test in a second way: $b \in C(A)$ if and only if $b \perp N(A^T)$, because
$C(A) = N(A^T)^\perp$ (a subspace that is the complement of its complement, which holds here by the dimension count).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 560 250" role="img" aria-label="The big picture of linear algebra. On the left, the input space R n is split into the row space, of dimension r, and the null space, of dimension n minus r, meeting at right angles. On the right, the output space R m is split into the column space, of dimension r, and the left null space, of dimension m minus r. An arrow labelled A carries the row space onto the column space; another arrow carries the null space to the zero vector.">
  <defs>
    <marker id="la7-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 z" fill="currentColor"/>
    </marker>
  </defs>
  <text x="95" y="16" font-size="15" fill="currentColor">input space R^n</text>
  <text x="385" y="16" font-size="15" fill="currentColor">output space R^m</text>
  <rect x="20" y="26" width="190" height="110" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor"/>
  <rect x="20" y="146" width="190" height="84" fill="#eea66f" fill-opacity="0.45" stroke="currentColor"/>
  <rect x="350" y="26" width="190" height="110" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor"/>
  <rect x="350" y="146" width="190" height="84" fill="#eea66f" fill-opacity="0.45" stroke="currentColor"/>
  <text x="32" y="60" font-size="13" fill="currentColor">row space C(A^T)</text>
  <text x="32" y="80" font-size="13" fill="currentColor">dimension r</text>
  <text x="32" y="176" font-size="13" fill="currentColor">null space N(A)</text>
  <text x="32" y="196" font-size="13" fill="currentColor">dimension n - r</text>
  <text x="362" y="60" font-size="13" fill="currentColor">column space C(A)</text>
  <text x="362" y="80" font-size="13" fill="currentColor">dimension r</text>
  <text x="362" y="176" font-size="13" fill="currentColor">left null space N(A^T)</text>
  <text x="362" y="196" font-size="13" fill="currentColor">dimension m - r</text>
  <line x1="190" y1="100" x2="345" y2="100" stroke="currentColor" stroke-width="2" marker-end="url(#la7-arr)"/>
  <text x="250" y="92" font-size="13" fill="currentColor">A, one-to-one</text>
  <circle cx="350" cy="141" r="4" fill="currentColor"/>
  <text x="330" y="146" font-size="13" fill="currentColor">0</text>
  <line x1="190" y1="190" x2="344" y2="143" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#la7-arr)"/>
  <text x="240" y="186" font-size="13" fill="currentColor">A sends to 0</text>
  <text x="196" y="145" font-size="13" fill="currentColor">90°</text>
</svg>
</div>

**Theorem 7.6.** The map $x \mapsto Ax$, restricted to the row space, is a one-to-one correspondence (an isomorphism) from $C(A^T)$
onto $C(A)$.

*Proof.* *Onto.* Any $b \in C(A)$ is $Ax$ for some $x$. Split $x = x_r + x_n$ with $x_r$ in the row space and $x_n$ in the null space
(Theorem 7.5). Then $b = Ax_r + Ax_n = Ax_r$. *One-to-one.* If $x_r, x_r'$ in the row space have $Ax_r = Ax_r'$, then $x_r - x_r'$ is in
the row space and in the null space, so it is $0$. $\square$

This is the whole of linear algebra in one picture, often drawn as two pairs of perpendicular subspaces. Every input $x$ splits into a
row space part, which $A$ carries faithfully to the column space, and a null space part, which $A$ destroys. Every output space splits
into the reachable part, $C(A)$, and the part orthogonal to everything reachable, $N(A^T)$.

**Worked example.** Split $x = (1, 1, 1, 1)$ into its row space and null space parts for our $A$.

Step 1: write $x = a(1,2,0,1) + b(0,0,1,2) + c(-2,1,0,0) + d(-1,0,-2,1)$, four equations in four unknowns.

Step 2: solving (by elimination, or as in [Chapter 12](12-Projections-and-Least-Squares.md) by projection) gives
$a = \tfrac{7}{13}$, $b = \tfrac{5}{13}$, $c = -\tfrac{1}{13}$, $d = -\tfrac{4}{13}$.

Step 3: so $x_r = \tfrac{1}{13}(7, 14, 5, 17)$ and $x_n = \tfrac{1}{13}(6, -1, 8, -4)$.

*Check:* $x_r + x_n = \tfrac{1}{13}(13, 13, 13, 13) = x$; $x_r \cdot x_n = \tfrac{1}{169}(42 - 14 + 40 - 68) = 0$; and
$A x_r = A x = (1 + 2 + 0 + 1,\; 2 + 4 + 1 + 4,\; 3 + 6 + 1 + 5) = (4, 11, 15)$, so the null space part made no difference to the output.

Two later chapters finish the picture. The **pseudoinverse** ([Chapter 15](15-The-Singular-Value-Decomposition.md)) inverts the
one-to-one map of Theorem 7.6, from column space back to row space, and so gives the "best" inverse of any matrix, square or not. The
**singular value decomposition** chooses orthonormal bases of all four subspaces at once in which $A$ becomes diagonal.

**Over other fields.** The equations $N(A) = C(A^T)^\perp$ and $N(A^T) = C(A)^\perp$ hold over any field (the proof only used that
$Ax = 0$ means "each row dotted with $x$ is zero"), and so do the dimension counts $\dim S^\perp = k - \dim S$ for $S \subseteq F^k$.
What fails is "$v \cdot v = 0$ implies $v = 0$". Over $\mathbb{Z}/2$, $(1, 1) \cdot (1, 1) = 1 + 1 = 0$, so a nonzero vector can be
orthogonal to itself, and a subspace can meet its own orthogonal complement, or even equal it. That is not a defect; in the next
section it is a feature.

## 7.5 Linear codes

*Level: advanced.*

A space probe sends its pictures home as a stream of bits. Over hundreds of millions of kilometres the signal is faint, and noise flips
some of the bits. You cannot ask the probe to repeat everything. The answer is to send **redundant** bits, chosen so that the receiver
can tell which bits were flipped and flip them back. The four subspaces over $\mathbb{Z}/2$ are exactly the right language for this.

Write $\mathbb{F}_2$ for the field $\mathbb{Z}/2 = \{0, 1\}$, with $1 + 1 = 0$.

**Definition.** A **linear code** of length $n$ and dimension $k$, an $[n, k]$ code, is a $k$-dimensional subspace $C$ of $\mathbb{F}_2^n$.
Its elements are **codewords**. It has $2^k$ codewords, so it can carry $k$ bits of message in each block of $n$ bits.

There are two ways to describe a subspace, and both are used.

- **As a column space (or row space): the generator matrix.** Choose a basis of $C$ and put it as the rows of a $k \times n$ matrix $G$.
  A message $m \in \mathbb{F}_2^k$ (a row vector) is **encoded** as the codeword $c = mG$. The code is the row space of $G$.
- **As a null space: the parity-check matrix.** By 7.4, $C$ is the null space of any matrix whose rows span $C^\perp$. Choose an
  $(n - k) \times n$ matrix $H$ of rank $n - k$ with $C = \{c : Hc^T = 0\}$. Each row of $H$ is a **parity check**, a set of positions
  whose bits must add up to 0.

The two are linked by $G H^T = 0$ (every basis codeword passes every check), together with the dimension count from rank-nullity:
$\dim N(H) = n - \operatorname{rank} H = n - (n - k) = k$.

### Distance

The **weight** of a word is the number of 1s in it; the **distance** between two words is the number of places where they differ, which
is the weight of their difference (over $\mathbb{F}_2$, difference and sum are the same). The **minimum distance** $d$ of a code is the
smallest distance between two different codewords. For a linear code, since $c - c'$ is again a codeword, $d$ is simply the smallest
weight of a nonzero codeword.

Why it matters: if the codewords are at least $d$ apart and at most $t$ bits are flipped with $2t + 1 \le d$, then the received word is
closer to the codeword that was sent than to any other (if it were within $t$ of two codewords, those two would be within $2t < d$ of
each other). So decoding to the **nearest** codeword corrects up to $t = \lfloor (d - 1)/2 \rfloor$ errors.

**Theorem 7.7.** The minimum distance of the code $C = N(H)$ is the smallest number of columns of $H$ that add up to zero, that is, the
smallest number of dependent columns.

*Proof.* A word $c$ is a codeword exactly when $Hc^T = 0$, and $Hc^T$ is the sum of the columns of $H$ in the positions where $c$ has a 1.
So a codeword of weight $w$ is the same thing as a set of $w$ columns summing to zero. $\square$

### The Hamming (7, 4) code

In 1950 Richard Hamming, at Bell Telephone Laboratories, published codes that correct one error per block. He later recalled that he
was driven to them by the relay computers of the time, which stopped a job whenever they detected an error, so his weekend
calculations kept failing. The smallest interesting one has length 7.

Take $H$ to be the $3 \times 7$ matrix whose columns are **all seven nonzero vectors** of $\mathbb{F}_2^3$. In a convenient order,

$$
H = \begin{pmatrix} 1 & 1 & 0 & 1 & 1 & 0 & 0 \\ 1 & 0 & 1 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 1 & 0 & 0 & 1 \end{pmatrix}.
$$

Its last three columns are the identity, so $\operatorname{rank} H = 3$ and the code $C = N(H)$ has dimension $7 - 3 = 4$: 16 codewords,
4 message bits and 3 check bits per block.

**Minimum distance 3.** No column is zero, so no single column sums to zero; no two columns are equal, so no two sum to zero; but
three can: column 1 + column 5 + column 6 $= (1,1,0) + (1,0,0) + (0,1,0) = 0$. By Theorem 7.7, $d = 3$, so the code corrects one error.

**The generator matrix.** Write $H = (P^T \mid I_3)$ with $P^T$ the first four columns. Then $G = (I_4 \mid P)$ satisfies
$GH^T = P + P = 0$ (over $\mathbb{F}_2$), and has rank 4, so its rows are a basis of $C$:

$$
G = \begin{pmatrix} 1 & 0 & 0 & 0 & 1 & 1 & 0 \\ 0 & 1 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 & 1 & 1 & 1 \end{pmatrix}.
$$

This is a **systematic** form: the first four bits of each codeword are the message itself, and the last three are the check bits.

**Worked example: encode.** The message $m = (1, 0, 1, 1)$ is encoded as rows 1 + 3 + 4 of $G$:

$$
c = (1,0,0,0,1,1,0) + (0,0,1,0,0,1,1) + (0,0,0,1,1,1,1) = (1, 0, 1, 1, 0, 1, 0).
$$

*Check:* each row of $H$ picks out four positions of $c$, whose bits must add to $0$. Row 1, $(1,1,0,1,1,0,0)$, picks
positions 1, 2, 4, 5, holding $1, 0, 1, 0$: sum $0$. Row 2, $(1,0,1,1,0,1,0)$, picks positions 1, 3, 4, 6, holding $1, 1, 1, 1$:
sum $0$. Row 3, $(0,1,1,1,0,0,1)$, picks positions 2, 3, 4, 7, holding $0, 1, 1, 0$: sum $0$. So $Hc^T = 0$.

**Worked example: decode.** Suppose bit 6 is flipped on the way, and $r = (1, 0, 1, 1, 0, 0, 0)$ arrives. Compute the **syndrome**
$s = Hr^T$:

$$
s = H r^T = \text{col}_1 + \text{col}_3 + \text{col}_4 = (1,1,0) + (0,1,1) + (1,1,1) = (0, 1, 0).
$$

Since $r = c + e_6$, with $Hc^T = 0$, the syndrome is $He_6^T$, which is **column 6 of $H$**. And column 6 is $(0, 1, 0)$. The syndrome
names the position of the error. Flip bit 6 back: $(1,0,1,1,0,1,0)$, and read the message $(1, 0, 1, 1)$ from the first four bits.

That is the beauty of choosing all seven nonzero columns: every possible single error has its own syndrome, and the syndrome $0$ means
"no error". The receiver never compares $r$ with all 16 codewords; one matrix-vector product does the work.

**Perfect.** Around each of the 16 codewords, the words within distance 1 form a ball of $1 + 7 = 8$ words, and the balls do not overlap
(the distance is 3). They contain $16 \times 8 = 128 = 2^7$ words: every word of $\mathbb{F}_2^7$. So every possible received word is
within one flip of exactly one codeword. Codes with this property are called **perfect**, and they are rare.

### Reed-Muller codes and Mariner 9

Correcting one error in seven bits is not enough for a weak signal from Mars. NASA's Mariner 9 entered orbit around Mars on
14 November 1971, the first spacecraft to orbit another planet. Its pictures were made of pixels, each pixel a brightness from 0 to 63,
which is 6 bits. Each 6-bit pixel was sent as a 32-bit codeword of the **first-order Reed-Muller code** $RM(1, 5)$, a $[32, 6]$ linear
code of minimum distance 16. Since $2 \cdot 7 + 1 = 15 \le 16$, it corrects up to 7 flipped bits in every 32.

The code is easy to describe with this chapter's tools. List the 32 points of $\mathbb{F}_2^5$ in some fixed order. Its generator
matrix $G$ has 6 rows of length 32:

- row 0 is all ones;
- rows 1 to 5 are the five coordinate functions: row $i$ lists the $i$-th coordinate of each of the 32 points.

The codewords, the combinations of these rows, are the lists of values at the 32 points of the **affine functions**
$f(x) = a_0 + a_1 x_1 + \cdots + a_5 x_5$ over $\mathbb{F}_2$. The rows are independent (different coefficient vectors give different
functions, which differ at some point), so the dimension is 6. The minimum distance is 16 because a non-constant affine function is 1 at
exactly half the points; the short proof is in [Combinatorics, Chapter 19](../combinatorics/19-Designs-and-Codes.md), 19.6.

The small version $RM(1, 3)$ shows the pattern. With the 8 points of $\mathbb{F}_2^3$ listed as $000, 001, 010, \ldots, 111$,

$$
G = \begin{pmatrix} 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \end{pmatrix},
$$

an $[8, 4]$ code in which every codeword other than $0$ and the all-ones word has weight exactly 4. Any two rows of $G$ share an even
number of 1s, and each row has even weight, so $GG^T = 0$: every codeword is orthogonal to every codeword, and since
$\dim C = 4 = 8 - 4 = \dim C^\perp$, the code is its own orthogonal complement, $C = C^\perp$. Over $\mathbb{R}$ that is impossible
(Theorem 7.5); over $\mathbb{F}_2$ it happens, and $G$ is at the same time a generator matrix and a parity-check matrix of this code.

Why this code for Mariner 9? It is far from perfect, and other codes with 64 codewords of length 32 could, in principle, be better. But
it has an exceptionally fast decoder. Written with $+1$ and $-1$ in place of 0 and 1, the codewords are, up to sign, the rows of a
Hadamard matrix, and comparing a received word with all 64 codewords at once becomes a fast Hadamard transform. A dedicated decoder at
the Jet Propulsion Laboratory, known as the "Green machine" after its designer R. R. Green, did this. Later missions moved on to other
codes (convolutional, Reed-Solomon, and today turbo and low-density parity-check codes), but every one of them is still a subspace of
$\mathbb{F}_2^n$ or of $\mathbb{F}_q^n$, described by a generator matrix and a parity-check matrix.

### Try it in Python

```python
H = [[1,1,0,1,1,0,0],
     [1,0,1,1,0,1,0],
     [0,1,1,1,0,0,1]]
cols = [tuple(H[i][j] for i in range(3)) for j in range(7)]

def syndrome(r):
    return tuple(sum(H[i][j] * r[j] for j in range(7)) % 2 for i in range(3))

def decode(r):
    s = syndrome(r)
    r = list(r)
    if any(s):
        r[cols.index(s)] ^= 1   # the syndrome is the column of the error position
    return r[:4]                # systematic code: the message is the first 4 bits

print(decode([1, 0, 1, 1, 0, 0, 0]))   # [1, 0, 1, 1]
```

### A short history

Hamming's paper "Error detecting and error correcting codes" appeared in the *Bell System Technical Journal* in 1950, two years after
Claude Shannon's 1948 paper proved that reliable communication over a noisy channel is possible at any rate below its capacity, without
saying how. David Muller described the codes now named after him in 1954, in a paper on switching circuits, and Irving Reed gave a
decoding method for them the same year. Mariner 9 used $RM(1, 5)$ in 1971-72. The phrase "the four fundamental subspaces" and the picture
of 7.4 owe much to Gilbert Strang, whose 1993 article "The fundamental theorem of linear algebra" in the *American Mathematical Monthly*
and whose textbooks made them the organising picture of a first course.

## Check yourself

??? question "1. Find a basis of each of the four subspaces of $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$."

    The rank is 1 (row 2 is twice row 1). Column space: spanned by $(1, 2)$. Row space: spanned by $(1, 2)$. Null space: $x_1 + 2x_2 = 0$,
    spanned by $(-2, 1)$. Left null space: $y_1 + 2y_2 = 0$ (since $A^T = A$ here), spanned by $(-2, 1)$. *Check:* $(-2, 1) \cdot (1, 2) = 0$,
    as Theorem 7.5 requires.

??? question "2. A $5 \times 7$ matrix has rank 3. What are the dimensions of its four subspaces, and in which spaces do they live?"

    Column space: dimension 3, in $\mathbb{R}^5$. Left null space: $5 - 3 = 2$, in $\mathbb{R}^5$. Row space: 3, in $\mathbb{R}^7$. Null
    space: $7 - 3 = 4$, in $\mathbb{R}^7$. The pairs add up to 5 and to 7.

??? question "3. For $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{pmatrix}$, find the conditions on $b$ for $Ax = b$ to be solvable."

    Rank 1, so the left null space has dimension $3 - 1 = 2$. Two independent solutions of $y^T A = 0$, that is,
    $y_1 + 2y_2 + 3y_3 = 0$: $(-2, 1, 0)$ and $(-3, 0, 1)$. The conditions are $-2b_1 + b_2 = 0$ and $-3b_1 + b_3 = 0$, that is,
    $b = b_1 (1, 2, 3)$: $b$ must be a multiple of the single independent column.

??? question "4. Can a nonzero real vector lie in both the row space and the null space of a real matrix? What about over $\mathbb{F}_2$? Try $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$."

    Over $\mathbb{R}$, no: such a $v$ would be orthogonal to itself, $v \cdot v = 0$, forcing $v = 0$ (Theorem 7.5). Over $\mathbb{F}_2$
    it can happen. For this $A$ the row space is $\{0, (1,1)\}$, and the null space is the set of $x$ with $x_1 + x_2 = 0$, which over
    $\mathbb{F}_2$ is also $\{0, (1, 1)\}$. Row space and null space are equal.

??? question "5. Prove that for a real matrix, $N(A^T A) = N(A)$, and deduce that $\operatorname{rank}(A^T A) = \operatorname{rank} A$."

    If $Ax = 0$ then $A^TAx = 0$. Conversely, if $A^TAx = 0$, then $0 = x^T A^T A x = (Ax)^T(Ax) = |Ax|^2$, so $Ax = 0$. So the null
    spaces are equal. $A^T A$ is $n \times n$ and $A$ has $n$ columns, so by rank-nullity both ranks are $n - \dim N(A)$. (This is the
    fact that makes least squares work in [Chapter 12](12-Projections-and-Least-Squares.md). It fails over $\mathbb{F}_2$:
    for the column $A = (1, 1)^T$, of rank 1, the product $A^TA = (1 + 1) = (0)$ has rank 0.)

??? question "6. Using the Hamming code of 7.5, decode the received word $r = (0, 1, 1, 0, 1, 0, 1)$."

    Its 1s are in positions 2, 3, 5, 7, so the syndrome is $\text{col}_2 + \text{col}_3 + \text{col}_5 + \text{col}_7 = (1,0,1) + (0,1,1) + (1,0,0) + (0,0,1) = (0, 1, 1)$.
    That is column 3, so bit 3 was flipped. The corrected word is $(0, 1, 0, 0, 1, 0, 1)$, which is row 2 of $G$, and the message is
    $(0, 1, 0, 0)$. *Check:* its syndrome is $\text{col}_2 + \text{col}_5 + \text{col}_7 = (1,0,1) + (1,0,0) + (0,0,1) = (0,0,0)$.

??? question "7. Suppose two bits of a Hamming codeword are flipped. What does the decoder do?"

    The syndrome is the sum of two different columns of $H$, which is nonzero (the columns are distinct) and, since all nonzero vectors
    of $\mathbb{F}_2^3$ are columns, equals some third column. The decoder flips that third bit, producing a codeword at distance 3 from
    the one sent: a wrong message. Hamming $(7, 4)$ corrects one error but is fooled by two. Adding an eighth bit, the parity of all
    seven, gives an $[8, 4, 4]$ code that corrects one error and detects two.

??? question "8. The repetition code sends each bit three times: $0 \mapsto 000$, $1 \mapsto 111$. Write its generator and a parity-check matrix, and find its minimum distance."

    $G = (1\ 1\ 1)$, a $1 \times 3$ matrix: $k = 1$, $n = 3$. A parity-check matrix needs rank $3 - 1 = 2$ and rows orthogonal to
    $(1,1,1)$: $H = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$ works. Its columns are $(1,1)$, $(1,0)$, $(0,1)$, distinct and
    nonzero, while all three sum to zero, so $d = 3$ (Theorem 7.7): it corrects one error, like Hamming $(7, 4)$, but carries only 1
    message bit per 3 sent, against Hamming's 4 per 7.

??? question "9. Show that every nonzero codeword of $RM(1, 3)$, other than the all-ones word, has weight 4."

    A codeword is the value list of $f(x) = a_0 + a_1 x_1 + a_2 x_2 + a_3 x_3$ at the 8 points. If $(a_1, a_2, a_3) = 0$, $f$ is constant:
    weight 0 or 8. Otherwise some $a_i = 1$. Pair each point $x$ with the point $x'$ that differs from it only in coordinate $i$; then
    $f(x') = f(x) + 1$, so each pair contains exactly one point where $f = 1$. There are 4 pairs, so the weight is 4.

??? question "10. Let $A$ be $m \times n$ with rank $r$. Prove: $Ax = b$ has a solution for every $b$ if and only if $r = m$; and $A$ has a right inverse $B$ (an $n \times m$ matrix with $AB = I_m$) if and only if $r = m$."

    $Ax = b$ is solvable for every $b$ exactly when $C(A) = F^m$, that is, $\dim C(A) = m$, that is, $r = m$. If $r = m$, solve
    $Ab_j = e_j$ for each standard basis vector and let $B$ have columns $b_j$; then $AB = I$. Conversely, if $AB = I$, every $b$ equals
    $A(Bb)$, so $C(A) = F^m$ and $r = m$.

??? question "11. Prove that for any linear code $C \subseteq \mathbb{F}_2^n$ of dimension $k$, the dual code $C^\perp$ has dimension $n - k$."

    Let $G$ be a $k \times n$ generator matrix of rank $k$. A word $v$ is in $C^\perp$ exactly when it is orthogonal to every row of $G$,
    that is, $Gv^T = 0$. So $C^\perp = N(G)$, which by Theorem 7.2 (which holds over any field) has dimension $n - \operatorname{rank} G = n - k$.

??? question "12. A real $3 \times 3$ matrix has the vector $(1, 1, 1)$ in its null space and also in its column space. Is that possible? What if the matrix is symmetric?"

    Possible in general: for $A = \begin{pmatrix} 1 & -1 & 0 \\ 1 & -1 & 0 \\ 1 & -1 & 0 \end{pmatrix}$, $A(1,1,1) = 0$ and the first
    column is $(1,1,1)$. If $A$ is symmetric, $C(A) = C(A^T)$ is the row space, which is orthogonal to the null space (Theorem 7.5); a
    vector in both is orthogonal to itself, so it is $0$. So for a symmetric matrix it is impossible.

## What you learned

- An $m \times n$ matrix has four subspaces: the column space and left null space in $F^m$, the row space and null space in $F^n$.
- One elimination $EA = R$ gives bases of all four: nonzero rows of $R$, special solutions, pivot columns of $A$, last rows of $E$.
- Row rank equals column rank; the dimensions are $r$, $r$, $n - r$, $m - r$.
- $Ax = b$ is solvable exactly when $b$ is orthogonal to the left null space; the complete solution is one particular solution plus the
  null space.
- Over $\mathbb{R}$, the null space is the orthogonal complement of the row space and the left null space that of the column space;
  $A$ maps the row space one-to-one onto the column space.
- A linear code is a subspace of $\mathbb{F}_2^n$: the row space of a generator matrix and the null space of a parity-check matrix. The
  Hamming $(7, 4)$ code corrects one error with a syndrome; the Reed-Muller code $RM(1, 5)$ corrected up to 7 in 32 for Mariner 9.

**Next:** [Chapter 8](08-Determinants.md), the single number that says whether a square matrix is invertible, and by how much it
stretches area and volume.

## Further reading

- G. Strang, "The fundamental theorem of linear algebra", *American Mathematical Monthly* 100(9), 1993.
- G. Strang, *Introduction to Linear Algebra*, 6th edition, Wellesley-Cambridge Press, 2023 (chapter 3 on the four subspaces).
- R. W. Hamming, "Error detecting and error correcting codes", *Bell System Technical Journal* 29, 1950.
- C. E. Shannon, "A mathematical theory of communication", *Bell System Technical Journal* 27, 1948.
- D. E. Muller, "Application of Boolean algebra to switching circuit design and to error detection", *IRE Transactions on
  Electronic Computers* 3, 1954.
- I. S. Reed, "A class of multiple-error-correcting codes and the decoding scheme", *IRE Transactions on Information Theory* 4, 1954.
- F. J. MacWilliams and N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland, 1977.
- On this site: codes, Reed-Muller and Reed-Solomon in [Combinatorics, Chapter 19](../combinatorics/19-Designs-and-Codes.md); finite
  fields in [Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md); the U of T guides
  [MAT240 Unit 5, Rank-Nullity and Matrices](../../uoft/MAT240H1/unit05.md) and
  [MAT240 Unit 7, Systems and Elementary Operations](../../uoft/MAT240H1/unit07.md); finite fields at work in the
  [Cryptography book](https://cryptography.akadian.ca/book/).
