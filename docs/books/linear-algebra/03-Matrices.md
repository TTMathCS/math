# 3. Matrices

*In Chapter 2 a matrix was a table of coefficients, a way to save ink. But a table of numbers can also be a machine:
feed it a vector, and it hands back another vector. A rover's navigation software does this many times a second,
turning "two metres ahead, one to the left" into "so many metres east and north". Once matrices are machines, it makes
sense to run one machine after another, and the rule for multiplying matrices, which looks strange at first, turns out
to be forced by that single idea. In this chapter you will learn to multiply a matrix by a vector and by another matrix,
see why the order matters, meet the identity, the inverse and the transpose, and then write elimination itself as
multiplication by simple matrices, which gives a way to compute inverses and the LU factorisation that real software
uses to solve systems.*

!!! abstract "In this chapter"

    **You will learn:**

    - matrices as tables of data and as machines that transform vectors
    - two ways to compute a matrix times a vector: rows dotted with the vector, or a combination of the columns
    - why matrix multiplication is defined the way it is (composition of machines), and why $AB \ne BA$ in general
    - the identity matrix, inverses (with the $2 \times 2$ formula), and the transpose, with proofs of their rules
    - elementary matrices, and how Gauss-Jordan elimination computes an inverse
    - the LU factorisation: elimination recorded as $A = LU$, and why it saves work

    **You need:** [Chapter 1](01-Vectors.md) (vectors, dot product) and
    [Chapter 2](02-Systems-of-Linear-Equations.md) (elimination, row operations). For a gentler start, the Topics
    lesson [Number machines](../../topics/algebra/level-2/03-number-machines.md) has the "machine" idea for single
    numbers, and [Functions](../../topics/algebra/level-7/04-functions.md) and
    [Inverse functions](../../topics/algebra/level-7/06-inverse-functions.md) cover composing and undoing functions.

    **Levels:** 3.1 and 3.2 are beginner; 3.3 and 3.4 are beginner to intermediate; 3.5 and 3.6 are intermediate.

## 3.1 Matrices as tables and as machines

A **matrix** is a rectangular array of numbers. A matrix with $m$ rows and $n$ columns is an **$m \times n$ matrix**
(say "$m$ by $n$"); rows are always counted first. The number in row $i$ and column $j$ is the **$(i, j)$ entry**,
written $a_{ij}$ for a matrix called $A$. So

$$
A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \end{pmatrix}
= \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}
$$

is $2 \times 3$, with $a_{12} = 2$ and $a_{23} = -1$. A matrix with as many rows as columns is **square**. A vector in
$\mathbb{R}^n$, written as a column, is an $n \times 1$ matrix; a row of $n$ numbers is a $1 \times n$ matrix, a
**row vector**.

**As a table.** A shop sells three trail mixes, A, B and C. Each bag contains so many grams of nuts, raisins and
chocolate (made-up numbers):

| grams per bag | Mix A | Mix B | Mix C |
|---|---|---|---|
| nuts | 100 | 50 | 80 |
| raisins | 50 | 100 | 40 |
| chocolate | 50 | 50 | 80 |

The numbers form a $3 \times 3$ matrix $M$. Each column describes one mix; each row describes one ingredient.

**As a machine.** Now an order arrives: 2 bags of A, 3 of B, 1 of C. How much of each ingredient goes out of the
door? Nuts: $100 \cdot 2 + 50 \cdot 3 + 80 \cdot 1 = 430$ grams. Raisins: $50 \cdot 2 + 100 \cdot 3 + 40 \cdot 1 = 440$.
Chocolate: $50 \cdot 2 + 50 \cdot 3 + 80 \cdot 1 = 330$. The matrix has turned an "order vector" $(2, 3, 1)$ into an
"ingredient vector" $(430, 440, 330)$. Written as a product,

$$
\begin{pmatrix} 100 & 50 & 80 \\ 50 & 100 & 40 \\ 50 & 50 & 80 \end{pmatrix}
\begin{pmatrix} 2 \\ 3 \\ 1 \end{pmatrix}
= \begin{pmatrix} 430 \\ 440 \\ 330 \end{pmatrix}.
$$

The same matrix accepts any order and produces the ingredients for it. That is the second and more important view: an
$m \times n$ matrix is a machine that takes a vector in $\mathbb{R}^n$ and returns a vector in $\mathbb{R}^m$. Its
inputs have as many entries as it has columns, and its outputs as many as it has rows.

**A geometric machine.** The matrix

$$
R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}
$$

takes $(x, y)$ to $(0 \cdot x - 1 \cdot y,\; 1 \cdot x + 0 \cdot y) = (-y, x)$. It sends $(1, 0)$ to $(0, 1)$ and
$(0, 1)$ to $(-1, 0)$: it rotates the plane by $90^\circ$ counterclockwise. The matrix
$F = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ sends $(x, y)$ to $(x, -y)$: it reflects in the $x$-axis. Machines
like these, which rotate, reflect, stretch and shear, are what most of this book is about. Chapter 6 calls them
**linear maps** and proves that every linear map between $\mathbb{R}^n$ and $\mathbb{R}^m$ is given by a matrix.

## 3.2 Matrix times vector

There are two ways to compute $A\mathbf{x}$, and you need both.

**By rows.** Entry $i$ of $A\mathbf{x}$ is the dot product of row $i$ of $A$ with $\mathbf{x}$:

$$
(A\mathbf{x})_i = a_{i1} x_1 + a_{i2} x_2 + \cdots + a_{in} x_n .
$$

This is how we computed the ingredient totals. It is the natural view for computing by hand.

**By columns.** $A\mathbf{x}$ is a linear combination of the columns of $A$, with the entries of $\mathbf{x}$ as
coefficients:

$$
A\mathbf{x} = x_1 \mathbf{a}_1 + x_2 \mathbf{a}_2 + \cdots + x_n \mathbf{a}_n ,
$$

where $\mathbf{a}_j$ is column $j$. In the shop: the order uses 2 copies of the column "mix A", 3 of "mix B", 1 of
"mix C", and the ingredients add up. This is the column picture of Chapter 2, and it is the natural view for
understanding.

The two views give the same numbers; they just add the same products in a different grouping. Look at the example

$$
\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 5 \\ 6 \end{pmatrix}.
$$

By rows: $(1 \cdot 5 + 2 \cdot 6,\; 3 \cdot 5 + 4 \cdot 6) = (17, 39)$. By columns:
$5\,(1, 3) + 6\,(2, 4) = (5, 15) + (12, 24) = (17, 39)$.

**Systems in one line.** The whole system of Chapter 2,

$$
\begin{aligned}
a_{11} x_1 + \cdots + a_{1n} x_n &= b_1 \\
&\;\;\vdots \\
a_{m1} x_1 + \cdots + a_{mn} x_n &= b_m ,
\end{aligned}
$$

is now the single equation $A\mathbf{x} = \mathbf{b}$. "Solve the system" means "find the input that the machine $A$
turns into $\mathbf{b}$". The column view says this is possible exactly when $\mathbf{b}$ is a combination of the
columns.

**Linearity.** Multiplication by a matrix respects the two vector operations:

$$
A(\mathbf{x} + \mathbf{y}) = A\mathbf{x} + A\mathbf{y}, \qquad A(c\mathbf{x}) = c\,(A\mathbf{x}).
$$

*Why:* each entry of $A\mathbf{x}$ is a dot product with a row of $A$, and dot products have exactly these two
properties (Section 1.3). In the shop: the ingredients for two orders together are the sum of the ingredients for each.
This pair of rules is the definition of "linear" in Chapter 6.

**The columns are the images of the basis vectors.** Feed the machine $\mathbf{e}_1 = (1, 0, \ldots, 0)$: by the
column view, $A\mathbf{e}_1 = \mathbf{a}_1$, the first column. In general $A\mathbf{e}_j = \mathbf{a}_j$. This gives a
practical recipe: *to find the matrix of a geometric transformation, find where it sends $\mathbf{e}_1, \mathbf{e}_2, \ldots$
and write those vectors as columns.*

**Example 3.1 (rotation).** Rotating the plane counterclockwise by an angle $\theta$ sends $\mathbf{e}_1 = (1, 0)$ to
$(\cos\theta, \sin\theta)$ and $\mathbf{e}_2 = (0, 1)$ to $(-\sin\theta, \cos\theta)$ (draw the unit circle). So the
rotation matrix is

$$
R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}.
$$

With $\theta = 90^\circ$ this is the matrix $R$ of Section 3.1. A rover heading at angle $\theta$ from east, which sees
an obstacle 2 metres ahead and 1 metre to its left, finds the obstacle's offset in map coordinates (east, north) as
$R_\theta (2, 1)$. For $\theta = 30^\circ$ that is
$(2\cos 30^\circ - \sin 30^\circ,\; 2\sin 30^\circ + \cos 30^\circ) \approx (1.23, 1.87)$. **Check:** the length is
still $\sqrt{1.23^2 + 1.87^2} \approx 2.24 \approx \sqrt5$, as a rotation should keep it.

**Example 3.2 (other machines).**

- $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ stretches $x$ by 2 and $y$ by 3. A matrix whose only nonzero entries
  are on the main diagonal is a **diagonal matrix**; it scales each coordinate separately.
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ sends $(x, y)$ to $(x + y, y)$: a **shear**, sliding each horizontal
  line sideways by its height, like a deck of cards pushed over.
- $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ sends $(x, y)$ to $(x, 0)$: the **projection** onto the $x$-axis,
  dropping each point straight down.

## 3.3 Matrix multiplication as composition

Run one machine and then another. First $B$ turns $\mathbf{x}$ into $B\mathbf{x}$; then $A$ turns that into
$A(B\mathbf{x})$. Is the combined machine again a matrix, and if so, which one?

**Back to the shop.** The supplier charges 2 cents per gram of nuts, 1 cent per gram of raisins and 3 cents per gram of
chocolate. Write the prices as a row vector $\mathbf{p} = (2, 1, 3)$: a $1 \times 3$ machine turning an ingredient vector
into a cost. The cost of our order can be computed in two ways. Either work out the ingredients first, then price them:
$\mathbf{p}(M\mathbf{x}) = 2 \cdot 430 + 1 \cdot 440 + 3 \cdot 330 = 2290$ cents. Or work out once and for all the
cost of each kind of bag, $\mathbf{p}M$: mix A costs $2 \cdot 100 + 1 \cdot 50 + 3 \cdot 50 = 400$ cents, mix B costs
$100 + 100 + 150 = 350$, mix C costs $160 + 40 + 240 = 440$; then the order costs
$400 \cdot 2 + 350 \cdot 3 + 440 \cdot 1 = 2290$ cents, or 22.90 dollars. Same answer. The row $(400, 350, 440)$ is the
product $\mathbf{p}M$: each entry is $\mathbf{p}$ dotted with a column of $M$.

**The rule.** Let $A$ be $m \times n$ and $B$ be $n \times p$. Column $j$ of $B$ is $B\mathbf{e}_j$, the image of
$\mathbf{e}_j$ under the first machine. The combined machine sends $\mathbf{e}_j$ to $A(B\mathbf{e}_j)$, so by the
recipe of Section 3.2 its matrix has columns $A\mathbf{b}_1, \ldots, A\mathbf{b}_p$. That is the definition:

$$
AB = \begin{pmatrix} A\mathbf{b}_1 & A\mathbf{b}_2 & \cdots & A\mathbf{b}_p \end{pmatrix},
\qquad\text{entry by entry}\qquad
(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj} .
$$

Entry $(i, j)$ of $AB$ is row $i$ of $A$ dotted with column $j$ of $B$. The sizes must fit: rows of $A$ have $n$
entries, so columns of $B$ must too. An $m \times n$ matrix times an $n \times p$ matrix is $m \times p$: the inner
sizes cancel, the outer ones remain.

**Theorem 3.1.** For every vector $\mathbf{x}$, $(AB)\mathbf{x} = A(B\mathbf{x})$.

*Proof.* Write $\mathbf{x} = x_1\mathbf{e}_1 + \cdots + x_p\mathbf{e}_p$. Using linearity of $B$ and of $A$ (Section
3.2), $A(B\mathbf{x}) = A(x_1 \mathbf{b}_1 + \cdots + x_p \mathbf{b}_p) = x_1 A\mathbf{b}_1 + \cdots + x_p A\mathbf{b}_p$,
and this is $(AB)\mathbf{x}$ by the column view, since the columns of $AB$ are the $A\mathbf{b}_j$. $\square$

So the multiplication rule is not an arbitrary convention: it is the only rule that makes "multiply by $AB$" mean
"apply $B$, then $A$". Note the order: in $AB$, the machine on the right acts first, just as in $f(g(x))$ for functions.

**Example 3.3.**

$$
\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}
\begin{pmatrix} 1 & 0 \\ 2 & 1 \\ 3 & 4 \end{pmatrix}
= \begin{pmatrix} 1 + 4 + 0 & 0 + 2 + 0 \\ 0 + 2 - 3 & 0 + 1 - 4 \end{pmatrix}
= \begin{pmatrix} 5 & 2 \\ -1 & -3 \end{pmatrix}.
$$

A $2 \times 3$ times a $3 \times 2$ gives a $2 \times 2$. In the other order, a $3 \times 2$ times a $2 \times 3$
gives a $3 \times 3$ matrix, not even the same size.

**Order matters.** Even for square matrices, $AB$ and $BA$ are usually different. Take the rotation $R$ and the
reflection $F$ from Section 3.1:

$$
RF = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix},
\qquad
FR = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}.
$$

$RF$ (reflect first, then rotate) sends $(x, y)$ to $(y, x)$: the reflection in the line $y = x$. $FR$ (rotate first,
then reflect) sends $(x, y)$ to $(-y, -x)$: the reflection in the line $y = -x$. Watch what happens to a letter F:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 580 230" role="img" aria-label="Three panels with axes. Left: an orange letter F standing upright in the first quadrant. Middle: the green image under RF, the F reflected in the line y = x, lying in the first quadrant. Right: the blue image under FR, the F reflected in the line y = -x, lying in the third quadrant.">
  <line x1="10" y1="110" x2="170" y2="110" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="90" y1="25" x2="90" y2="195" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="90,110 105,110 105,80 125,80 125,65 105,65 105,50 135,50 135,35 90,35" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <line x1="210" y1="110" x2="370" y2="110" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="290" y1="25" x2="290" y2="195" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="290,110 290,95 320,95 320,75 335,75 335,95 350,95 350,65 365,65 365,110" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <line x1="410" y1="110" x2="570" y2="110" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="490" y1="25" x2="490" y2="195" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <polygon points="490,110 490,125 460,125 460,145 445,145 445,125 430,125 430,155 415,155 415,110" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="222" text-anchor="middle" font-size="14" fill="currentColor">original</text>
  <text x="290" y="222" text-anchor="middle" font-size="14" fill="currentColor">RF: F first, then R</text>
  <text x="490" y="222" text-anchor="middle" font-size="14" fill="currentColor">FR: R first, then F</text>
</svg>
</div>

You can check this with a book on a table: turning it a quarter turn and then flipping it over gives a different result
from flipping first and then turning. Matrix multiplication is **not commutative**. This is the single most important
difference from the arithmetic of numbers, and it is not a defect: the world's transformations do not commute, and a
multiplication that did could not describe them. Rotations in space do not commute either, which is why the order of
manoeuvres matters for a spacecraft turning to point its antenna (Chapter 13).

A second surprise: a product can be zero although neither factor is.

$$
\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}.
$$

The second matrix sends everything onto the line of $(1, -1)$, and the first sends that line to zero. So from $AB = 0$
you cannot conclude $A = 0$ or $B = 0$, and from $AB = AC$ you cannot cancel $A$.

**What does survive.** The other laws of arithmetic still hold, whenever the sizes fit:

- **associativity**: $(AB)C = A(BC)$;
- **distributivity**: $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$;
- scalars move freely: $(cA)B = c(AB) = A(cB)$.

(Matrices of the same size are added, and multiplied by scalars, entry by entry, just like vectors.)

*Proof of associativity.* Both $(AB)C$ and $A(BC)$ are the machine "apply $C$, then $B$, then $A$": by Theorem 3.1,
$((AB)C)\mathbf{x} = (AB)(C\mathbf{x}) = A(B(C\mathbf{x}))$ and $(A(BC))\mathbf{x} = A((BC)\mathbf{x}) = A(B(C\mathbf{x}))$.
Two matrices that do the same thing to every vector are equal, since they do the same thing to each $\mathbf{e}_j$ and so
have the same columns. $\square$

The shop example was associativity in action: $\mathbf{p}(M\mathbf{x}) = (\mathbf{p}M)\mathbf{x}$. In practice this
law is what makes matrices efficient: if the same composite machine is used millions of times, multiply the matrices
once and apply the product.

**Example 3.4 (the addition formulas).** Rotating by $\beta$ and then by $\alpha$ is rotating by $\alpha + \beta$, so
$R_\alpha R_\beta = R_{\alpha + \beta}$. Multiply out the left side:

$$
\begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix}
\begin{pmatrix} \cos\beta & -\sin\beta \\ \sin\beta & \cos\beta \end{pmatrix}
= \begin{pmatrix} \cos\alpha\cos\beta - \sin\alpha\sin\beta & \cdots \\ \sin\alpha\cos\beta + \cos\alpha\sin\beta & \cdots \end{pmatrix}.
$$

Comparing with the first column of $R_{\alpha + \beta}$ gives both addition formulas of trigonometry,
$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$ and $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$,
with no geometry beyond the meaning of rotation. Rotations of the plane *do* commute with each other, since
$\alpha + \beta = \beta + \alpha$; it is rotations combined with reflections, or rotations in space, that do not.

**Other views of the product.** Besides "row times column", three more readings are useful. Column $j$ of $AB$ is $A$
times column $j$ of $B$ (the definition). Row $i$ of $AB$ is row $i$ of $A$ times $B$, a combination of the rows of
$B$. And $AB$ is the sum over $k$ of (column $k$ of $A$) times (row $k$ of $B$), each a matrix of rank one. The last
reading becomes important for the singular value decomposition in Chapter 15. Matrices can also be cut into blocks and
multiplied block by block, as if the blocks were numbers, provided the cuts match.

**Powers.** For a square matrix, $A^2 = AA$, $A^3 = AAA$, and so on; by associativity the brackets do not matter.
Powers describe a process repeated in time, and Chapter 9 computes them with eigenvalues.

**Try it in Python.**

```python
def matmul(A, B):
    # entry (i, j) is row i of A dotted with column j of B
    assert len(A[0]) == len(B), "inner sizes must match"
    return [[sum(A[i][k] * B[k][j] for k in range(len(B)))
             for j in range(len(B[0]))] for i in range(len(A))]

R = [[0, -1], [1, 0]]          # rotate 90 degrees
F = [[1, 0], [0, -1]]          # reflect in the x-axis
print(matmul(R, F))            # first F, then R:  [[0, 1], [1, 0]]
print(matmul(F, R))            # first R, then F:  [[0, -1], [-1, 0]]

L = [[1, 0, 0], [2, 1, 0], [4, 3, 1]]
U = [[2, 1, 1], [0, 1, 1], [0, 0, 2]]
print(matmul(L, U))            # [[2, 1, 1], [4, 3, 3], [8, 7, 9]], see section 3.6
```

The three nested loops (over $i$, $j$ and $k$) show the cost: multiplying two $n \times n$ matrices this way takes
$n^3$ multiplications. Whether one can do substantially better is a famous open problem (Chapter 18 and Chapter 20).

## 3.4 Identity, inverse, transpose

**The identity.** The $n \times n$ **identity matrix** $I$ (or $I_n$) has 1s on the main diagonal and 0s elsewhere.
Its columns are $\mathbf{e}_1, \ldots, \mathbf{e}_n$, so $I\mathbf{x} = \mathbf{x}$ for every $\mathbf{x}$: it is the
machine that does nothing. Therefore $AI = A$ and $IA = A$ whenever the sizes fit. It plays the role of the number 1.

**The inverse.** Can a machine be undone? A square matrix $A$ is **invertible** if there is a matrix $A^{-1}$ with

$$
A^{-1}A = I \quad\text{and}\quad AA^{-1} = I .
$$

Then if $A\mathbf{x} = \mathbf{b}$, multiplying by $A^{-1}$ on the left gives $\mathbf{x} = A^{-1}\mathbf{b}$: the
system has exactly one solution, and the inverse produces it. A square matrix with no inverse is called **singular**.

*An inverse is unique.* If $B$ and $C$ are both inverses of $A$, then $B = BI = B(AC) = (BA)C = IC = C$. So we may
speak of *the* inverse.

*Not every matrix has one.* The projection $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ sends $(3, 5)$ and $(3, 7)$ to
the same point $(3, 0)$; no machine can recover which one went in. Neither can the zero matrix, nor the matrix
$\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ of Section 3.3. In general, if $A\mathbf{x} = \mathbf{0}$ for some
$\mathbf{x} \ne \mathbf{0}$, then $A$ is not invertible: $A$ sends both $\mathbf{x}$ and $\mathbf{0}$ to $\mathbf{0}$.

**The $2 \times 2$ case.** For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, multiply by
$\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$:

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
= \begin{pmatrix} ad - bc & 0 \\ 0 & ad - bc \end{pmatrix} = (ad - bc)\,I ,
$$

and the same in the other order. So if $ad - bc \ne 0$,

$$
A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}:
$$

swap the diagonal entries, change the signs of the other two, divide by $ad - bc$. If $ad - bc = 0$, $A$ is not
invertible: the product above is then the zero matrix, so either $A$ is zero, or some nonzero column $\mathbf{y}$ of
$\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ satisfies $A\mathbf{y} = \mathbf{0}$. The number $ad - bc$ is the
**determinant**, the subject of Chapter 8, which also explains it geometrically: it is the factor by which $A$ scales
areas.

**Example 3.5.** $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$,
because $ad - bc = 6 - 5 = 1$. **Check:** $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 6 - 5 & -2 + 2 \\ 15 - 15 & -5 + 6 \end{pmatrix} = I$.

For a rotation, $ad - bc = \cos^2\theta + \sin^2\theta = 1$ and $R_\theta^{-1} = R_{-\theta}$: undo a turn by turning
back.

**Inverse of a product.** If $A$ and $B$ are invertible $n \times n$ matrices, so is $AB$, and

$$
(AB)^{-1} = B^{-1}A^{-1}.
$$

*Proof.* $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$, and similarly in the other order. $\square$

The order reverses for the same reason as with socks and shoes: you put on socks, then shoes; to undo it, take off the
shoes first.

**The transpose.** The **transpose** $A^T$ of an $m \times n$ matrix $A$ is the $n \times m$ matrix whose rows are the
columns of $A$: $(A^T)_{ij} = a_{ji}$. Flip the matrix over its main diagonal.

$$
\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}^T = \begin{pmatrix} 1 & 0 \\ 2 & 1 \\ 0 & -1 \end{pmatrix}.
$$

The transpose of a column vector is a row vector, and this gives a neat way to write the dot product as a matrix
product: $\mathbf{x} \cdot \mathbf{y} = \mathbf{x}^T\mathbf{y}$, a $1 \times n$ times $n \times 1$ product, which is a
$1 \times 1$ matrix, that is, a number.

**Rules.** $(A^T)^T = A$; $(A + B)^T = A^T + B^T$; and, again with a reversal,

$$
(AB)^T = B^T A^T .
$$

*Proof.* The $(i, j)$ entry of $(AB)^T$ is the $(j, i)$ entry of $AB$, which is $\sum_k a_{jk}b_{ki}$. The $(i, j)$
entry of $B^T A^T$ is $\sum_k (B^T)_{ik}(A^T)_{kj} = \sum_k b_{ki} a_{jk}$. These are the same sum. $\square$

It follows that $(A^{-1})^T = (A^T)^{-1}$ for invertible $A$: transpose $AA^{-1} = I$ to get $(A^{-1})^T A^T = I$.

**The transpose and the dot product.** For an $m \times n$ matrix $A$, $\mathbf{x}$ in $\mathbb{R}^n$ and
$\mathbf{y}$ in $\mathbb{R}^m$,

$$
(A\mathbf{x}) \cdot \mathbf{y} = \mathbf{x} \cdot (A^T\mathbf{y}),
$$

because both sides equal $\mathbf{y}^T A \mathbf{x}$ (the left side is $(A\mathbf{x})^T\mathbf{y} = \mathbf{x}^T A^T \mathbf{y}$,
which is a number and so equals its own transpose). This identity is the real meaning of the transpose: it is the
machine that moves $A$ to the other side of a dot product. It drives the four subspaces of Chapter 7 and least squares
in Chapter 12, and it becomes the "adjoint" of Chapters 11 and 14.

**Symmetric matrices.** A square matrix with $A^T = A$ is **symmetric**: $a_{ij} = a_{ji}$, a mirror image across the
diagonal. Distance tables between cities are symmetric. For any matrix $A$, the products $A^TA$ and $AA^T$ are
symmetric, since $(A^TA)^T = A^T(A^T)^T = A^TA$. Symmetric matrices have the most beautiful theory in the book, the
spectral theorem of Chapter 14.

## 3.5 Elementary matrices and computing inverses

Every row operation of Chapter 2 can be done by multiplying on the left by a matrix.

**Definition.** An **elementary matrix** is a matrix obtained from $I$ by one elementary row operation.

**Example 3.6.** For $3 \times 3$ matrices:

$$
E = \begin{pmatrix} 1 & 0 & 0 \\ -2 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix},\qquad
P = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix},\qquad
D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 5 \end{pmatrix}.
$$

$E$ came from $I$ by "row 2 minus 2 times row 1". $P$ came from swapping rows 1 and 2; a matrix obtained from $I$ by
reordering rows is a **permutation matrix**. $D$ came from scaling row 3 by 5.

**Theorem 3.2.** If the elementary matrix $E$ comes from $I$ by a row operation, then $EA$ is the result of doing the
same row operation to $A$.

*Proof.* Row $i$ of $EA$ is (row $i$ of $E$) times $A$, which is a combination of the rows of $A$ with the entries of
row $i$ of $E$ as coefficients (Section 3.3). For the matrix $E$ above, row 2 of $E$ is $(-2, 1, 0)$, so row 2 of $EA$ is
$-2(\text{row } 1) + (\text{row } 2)$, and the other rows of $E$ are rows of $I$, which copy the rows of $A$. The swap and
scale cases are the same check. $\square$

For instance,
$E\begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 8 & 7 & 9 \end{pmatrix}$.

Every elementary matrix is invertible, and its inverse is the elementary matrix of the reverse operation: the inverse
of $E$ ("subtract 2 times row 1 from row 2") is "add 2 times row 1 to row 2", the same matrix with $+2$ in place of
$-2$. $P^{-1} = P$, and $D^{-1}$ has $\tfrac15$ in place of 5.

**Elimination is multiplication.** Gauss-Jordan elimination applies a sequence of row operations to $A$; by Theorem
3.2 this is multiplying by elementary matrices: $E_k \cdots E_2 E_1 A = R$, where $R$ is the RREF. If $R = I$, then
the product $E_k \cdots E_1$ is a matrix $B$ with $BA = I$.

**Theorem 3.3 (the invertible matrix theorem, first version).** For a square $n \times n$ matrix $A$ the following
are equivalent (each one implies all the others):

1. $A$ is invertible.
2. $A\mathbf{x} = \mathbf{0}$ has only the solution $\mathbf{x} = \mathbf{0}$.
3. The RREF of $A$ is $I$ (there is a pivot in every column).
4. $A$ is a product of elementary matrices.
5. $A\mathbf{x} = \mathbf{b}$ has a solution for every $\mathbf{b}$ in $\mathbb{R}^n$.
6. There is a matrix $B$ with $BA = I$.
7. There is a matrix $C$ with $AC = I$.

*Proof.* (1 ⇒ 6 and 7) Take $B = C = A^{-1}$. (6 ⇒ 2) If $A\mathbf{x} = \mathbf{0}$ then
$\mathbf{x} = BA\mathbf{x} = B\mathbf{0} = \mathbf{0}$. (2 ⇒ 3) With only the trivial solution there are no free
variables (Section 2.4), so all $n$ columns are pivot columns; an $n \times n$ RREF with $n$ pivots is $I$.
(3 ⇒ 4) If $E_k \cdots E_1 A = I$, multiply on the left by the inverses: $A = E_1^{-1} \cdots E_k^{-1}$, a product of
elementary matrices. (4 ⇒ 1) Elementary matrices are invertible and products of invertible matrices are invertible.
So 1, 2, 3, 4 and 6 are equivalent. (3 ⇒ 5) A pivot in every row leaves no room for a pivot in the right-hand
column, so every system is consistent (Section 2.3). (5 ⇒ 7) Solve $A\mathbf{c}_j = \mathbf{e}_j$ for each $j$ and let
$C$ have columns $\mathbf{c}_j$; then $AC = I$. (7 ⇒ 1) If $AC = I$, then $C^T A^T = I$, so $A^T$ satisfies condition 6,
hence $A^T$ is invertible, hence so is $A = (A^T)^T$ (with inverse $((A^T)^{-1})^T$). $\square$

Statement 6 ⇒ 1 is worth pausing on. For square matrices, a one-sided inverse is automatically two-sided: if $BA = I$
then also $AB = I$. This is false for non-square matrices and false for "infinite matrices" (Chapter 20), so it is a
genuine theorem about finite dimensions. Chapter 7 and Chapter 8 add more equivalent conditions to this list.

**Computing $A^{-1}$.** The proof contains an algorithm. Write $A$ and $I$ side by side as $(A \mid I)$ and row reduce.
The same row operations that turn $A$ into $I$ turn $I$ into $E_k \cdots E_1 = A^{-1}$:

$$
(A \mid I) \longrightarrow (I \mid A^{-1}).
$$

If $A$ cannot be reduced to $I$ (a column has no pivot), $A$ is not invertible.

**Example 3.7.** Invert $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.

$$
\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 5 & 6 & 0 & 0 & 0 & 1 \end{array}\right)
\xrightarrow{R_3 - 5R_1}
\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & -4 & -15 & -5 & 0 & 1 \end{array}\right)
\xrightarrow{R_3 + 4R_2}
\left(\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right)
$$

Now clear above the pivots, from the bottom up: $R_2 - 4R_3$ and $R_1 - 3R_3$, then $R_1 - 2R_2$.

$$
\left(\begin{array}{ccc|ccc} 1 & 2 & 0 & 16 & -12 & -3 \\ 0 & 1 & 0 & 20 & -15 & -4 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right)
\xrightarrow{R_1 - 2R_2}
\left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -24 & 18 & 5 \\ 0 & 1 & 0 & 20 & -15 & -4 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right).
$$

So $A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}$. **Check** one entry of $AA^{-1}$:
row 1 of $A$ times column 1 of $A^{-1}$ is $-24 + 40 - 15 = 1$; row 3 times column 2 is $90 - 90 + 0 = 0$. (Check the
rest yourself, or with the `matmul` function.) All the entries are whole numbers because the determinant of $A$ is 1
(Chapter 8).

**Do you need the inverse?** Rarely. To solve $A\mathbf{x} = \mathbf{b}$, elimination on $(A \mid \mathbf{b})$ is about
three times cheaper than computing $A^{-1}$ and then $A^{-1}\mathbf{b}$, and it is more accurate in floating point. The
inverse is a fine theoretical tool ("the solution is $A^{-1}\mathbf{b}$") and a poor computational one. The next
section shows what software does instead.

## 3.6 LU factorisation

*Level: intermediate.*

A spacecraft's navigation team, a structural engineer or a weather model often has to solve $A\mathbf{x} = \mathbf{b}$
for the same matrix $A$ and many different right-hand sides $\mathbf{b}$, arriving one at a time. Repeating the whole
elimination each time wastes the $n^3/3$ operations of the forward phase. The fix is to record the elimination once,
as a factorisation of $A$.

**Example 3.8.** Eliminate on $A = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix}$, keeping track of
the multipliers. Column 1: subtract $2 \times$ row 1 from row 2 (multiplier $\ell_{21} = 2$) and $4 \times$ row 1 from
row 3 ($\ell_{31} = 4$):

$$
\begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 3 & 5 \end{pmatrix}.
$$

Column 2: subtract $3 \times$ row 2 from row 3 ($\ell_{32} = 3$):

$$
U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}.
$$

Now put the multipliers into a lower triangular matrix with 1s on the diagonal:

$$
L = \begin{pmatrix} 1 & 0 & 0 \\ \ell_{21} & 1 & 0 \\ \ell_{31} & \ell_{32} & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}.
$$

Then $A = LU$. **Check** (as the Python output above confirms): row 3 of $LU$ is
$4(2, 1, 1) + 3(0, 1, 1) + 1(0, 0, 2) = (8, 7, 9)$.

**Why it works.** A matrix is **lower triangular** if all entries above the main diagonal are zero, and **upper
triangular** if all entries below are zero. Elimination without row swaps is $E_{32}E_{31}E_{21}A = U$, where
$E_{ij}$ subtracts $\ell_{ij}$ times row $j$ from row $i$. So $A = E_{21}^{-1}E_{31}^{-1}E_{32}^{-1}U$. Each
$E_{ij}^{-1}$ adds the multiple back, and is lower triangular with the single entry $\ell_{ij}$ below the diagonal. The
product of these inverses, taken in this order, simply places each $\ell_{ij}$ in position $(i, j)$, with no
interaction between them. That is the pleasant surprise that makes $L$ free to write down: *$L$ is the table of
multipliers.*

To see why the multipliers do not interact, read $A = LU$ row by row: row $i$ of $A$ equals row $i$ of $U$ plus
$\ell_{i1}$ (row 1 of $U$) $+ \cdots + \ell_{i,i-1}$ (row $i - 1$ of $U$). That is exactly what elimination did in
reverse: each row of $U$ is the original row minus the multiples of earlier *finished* rows of $U$ that were subtracted
from it. (In the forward direction the multipliers do interact, which is why $E_{32}E_{31}E_{21}$ itself is messier
than $L$; Exercise 8 lets you see this.)

**Solving with $LU$.** To solve $A\mathbf{x} = \mathbf{b}$, write it as $L(U\mathbf{x}) = \mathbf{b}$ and solve two
triangular systems:

1. **Forward substitution:** solve $L\mathbf{c} = \mathbf{b}$ for $\mathbf{c}$ (top to bottom).
2. **Back substitution:** solve $U\mathbf{x} = \mathbf{c}$ for $\mathbf{x}$ (bottom to top).

Each costs about $n^2/2$ multiplications, far less than the $n^3/3$ of the factorisation, which is done once.

**Example 3.9.** Solve $A\mathbf{x} = (4, 10, 24)$ with the $A$ of Example 3.8. Forward: $c_1 = 4$;
$2c_1 + c_2 = 10$ gives $c_2 = 2$; $4c_1 + 3c_2 + c_3 = 24$ gives $c_3 = 24 - 16 - 6 = 2$. Back: $2x_3 = 2$, so
$x_3 = 1$; $x_2 + x_3 = 2$, so $x_2 = 1$; $2x_1 + x_2 + x_3 = 4$, so $x_1 = 1$. **Check:** $2 + 1 + 1 = 4$,
$4 + 3 + 3 = 10$, $8 + 7 + 9 = 24$. Notice that $\mathbf{c}$ is exactly the right-hand side that elimination would have
produced on $(A \mid \mathbf{b})$: forward substitution with $L$ replays the elimination on $\mathbf{b}$ alone.

**When row swaps are needed.** If a zero appears in a pivot position, elimination must swap rows, and $A = LU$ may be
impossible. For example $A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$ has no LU factorisation with 1s on the
diagonal of $L$: the $(1,1)$ entry of $LU$ would be $1 \cdot u_{11}$, forcing $u_{11} = 0$, and then the $(2,1)$ entry
would be $\ell_{21}u_{11} = 0 \ne 1$. The fix is to do all the swaps first. If $P$ is the permutation matrix of the
swaps, then

$$
PA = LU .
$$

Every invertible matrix has such a factorisation, and in fact every square matrix does (with $U$ possibly having zeros
on its diagonal). Software always computes $PA = LU$, and swaps rows even when it is not forced to: it chooses the
largest available pivot in each column ("partial pivoting"), because dividing by a small pivot magnifies rounding
errors. Chapter 18 explains why. For symmetric positive definite matrices there is an even better variant,
$A = LL^T$, the Cholesky factorisation of Chapter 14; and replacing elimination by orthogonal transformations gives the
QR factorisation of Chapter 12.

**A Mars connection, honestly.** Orbit determination for spacecraft, including Mars orbiters, repeatedly solves linear
systems built from tracking measurements (the least-squares problems of Chapter 12), and factorisations like these, or
their orthogonal cousins, are what the software uses. The details belong to the navigation teams; the principle,
"factor once, solve many times", is the one in this section.

## A short history thread

Arrays of numbers for solving equations are as old as the *Nine Chapters* (Chapter 2), but matrices as objects that can
be added and multiplied are a nineteenth-century idea. James Joseph Sylvester introduced the word **matrix** in 1850
(Latin for "womb"), for an array from which determinants could be "born". His friend Arthur Cayley, in "A memoir on the
theory of matrices" (1858), defined matrix addition and multiplication as we use them, noted that multiplication is not
commutative, defined the inverse, and stated the Cayley-Hamilton theorem of Chapter 16. Cayley's motivation was exactly
Section 3.3: he wanted the matrix of the composite of two linear substitutions of variables. For decades matrices
remained a specialist topic; physicists embraced them only in 1925, when Werner Heisenberg, Max Born and Pascual Jordan
built quantum mechanics on non-commuting arrays (Chapter 19). The view of elimination as a factorisation into triangular
matrices came with the first electronic computers: Alan Turing analysed it in his paper "Rounding-off errors in matrix
processes" (1948), which is where much of the modern language of LU factorisation and of the sensitivity of linear
systems begins.

## Check yourself

??? question "1. Compute $AB$ and $BA$ for $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. What does multiplying by $B$ on each side do?"

    $AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$ and $BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$.
    $B$ is the permutation matrix that swaps two things. On the right ($AB$) it swaps the columns of $A$; on the left
    ($BA$) it swaps the rows. The two products differ, another example of non-commutativity.

??? question "2. Find the $2 \times 2$ matrix that rotates by $90^\circ$ counterclockwise and then doubles every length. Does the order of the two steps matter?"

    Doubling is $2I$ and rotating is $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$. The product is
    $(2I)R = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}$. The order does not matter here, because $2I$ commutes with
    every matrix: $(2I)R = 2R = R(2I)$.

??? question "3. Invert $\begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$ and use the inverse to solve $3x + 5y = 1$, $x + 2y = 1$."

    $ad - bc = 6 - 5 = 1$, so the inverse is $\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$. Then
    $\mathbf{x} = A^{-1}(1, 1) = (2 - 5, -1 + 3) = (-3, 2)$. Check: $-9 + 10 = 1$ and $-3 + 4 = 1$.

??? question "4. Let $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. Compute $N^2$ and $N^3$, guess $N^k$, and prove your guess."

    $N^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ and $N^3 = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$. Guess
    $N^k = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$. Proof by induction: it holds for $k = 1$, and if it holds for
    $k$, then $N^{k+1} = N^k N = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & k + 1 \\ 0 & 1 \end{pmatrix}$.
    Geometrically, $k$ shears in a row make one shear $k$ times as strong.

??? question "5. Find all $2 \times 2$ matrices $X$ that commute with $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$."

    Write $X = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. Then $NX = \begin{pmatrix} a + c & b + d \\ c & d \end{pmatrix}$
    and $XN = \begin{pmatrix} a & a + b \\ c & c + d \end{pmatrix}$. Equal entries: $a + c = a$ gives $c = 0$;
    $b + d = a + b$ gives $d = a$; the bottom row then agrees. So $X = \begin{pmatrix} a & b \\ 0 & a \end{pmatrix}$
    for any $a, b$, that is, $X = aI + b\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.

??? question "6. Write down the $3 \times 3$ elementary matrix that adds 4 times row 3 to row 1, and its inverse. Check that their product is $I$."

    $E = \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ and $E^{-1} = \begin{pmatrix} 1 & 0 & -4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.
    In $EE^{-1}$ the only entry that needs thought is $(1, 3)$: $1 \cdot (-4) + 0 + 4 \cdot 1 = 0$. All other entries
    are those of $I$.

??? question "7. Find the LU factorisation of $\begin{pmatrix} 1 & 2 \\ 3 & 8 \end{pmatrix}$ and of $\begin{pmatrix} 1 & 1 & 1 \\ 2 & 3 & 3 \\ 3 & 5 & 6 \end{pmatrix}$."

    First: the multiplier is 3, and row 2 becomes $(0, 2)$. So $L = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}$,
    $U = \begin{pmatrix} 1 & 2 \\ 0 & 2 \end{pmatrix}$; check $3 \cdot 2 + 2 = 8$. Second: $R_2 - 2R_1 = (0, 1, 1)$,
    $R_3 - 3R_1 = (0, 2, 3)$, then $R_3 - 2R_2 = (0, 0, 1)$. So
    $L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & 2 & 1 \end{pmatrix}$ and
    $U = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$; check row 3 of $LU$:
    $3(1, 1, 1) + 2(0, 1, 1) + (0, 0, 1) = (3, 5, 6)$.

??? question "8. For Example 3.8, compute $E = E_{32}E_{31}E_{21}$ (the matrix that performs the whole elimination). Why is $L = E^{-1}$ simpler than $E$?"

    $E_{21}$ has $-2$ in position $(2,1)$, $E_{31}$ has $-4$ in $(3,1)$, $E_{32}$ has $-3$ in $(3,2)$. Multiplying,
    $E = \begin{pmatrix} 1 & 0 & 0 \\ -2 & 1 & 0 \\ 2 & -3 & 1 \end{pmatrix}$: the $(3,1)$ entry is $-4 + (-3)(-2) = 2$,
    because row 3 lost 4 copies of row 1 directly but then gained 6 back when 3 copies of the new row 2 (which
    contained $-2$ times row 1) were subtracted. In $L = E_{21}^{-1}E_{31}^{-1}E_{32}^{-1}$ the factors act in the
    opposite order, and no such mixing occurs, so each multiplier lands untouched in its place:
    $L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}$. Check: $EL = I$ (for example, row 3 of $E$
    times column 1 of $L$ is $2 - 6 + 4 = 0$).

??? question "9. Prove that if $A$ is invertible and symmetric, then $A^{-1}$ is symmetric."

    $(A^{-1})^T = (A^T)^{-1}$ (Section 3.4) $= A^{-1}$, because $A^T = A$.

??? question "10. Show that for any matrix $A$ and vector $\mathbf{x}$, $\mathbf{x}^T A^T A \mathbf{x} = \|A\mathbf{x}\|^2$. Deduce that if $A^TA\mathbf{x} = \mathbf{0}$ then $A\mathbf{x} = \mathbf{0}$."

    $\mathbf{x}^T A^T A\mathbf{x} = (A\mathbf{x})^T(A\mathbf{x}) = (A\mathbf{x}) \cdot (A\mathbf{x}) = \|A\mathbf{x}\|^2$,
    using $(A\mathbf{x})^T = \mathbf{x}^TA^T$. If $A^TA\mathbf{x} = \mathbf{0}$, then $\|A\mathbf{x}\|^2 = \mathbf{x}^T\mathbf{0} = 0$,
    so $A\mathbf{x} = \mathbf{0}$. This little fact is the key to least squares in Chapter 12: $A^TA$ is invertible
    exactly when $A\mathbf{x} = \mathbf{0}$ has only the zero solution.

??? question "11. Let $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$. Show $N^2 = 0$, and use it to find the inverse of $I + N$ without any formula. Generalise."

    $N^2 = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ by direct multiplication. Then
    $(I + N)(I - N) = I - N + N - N^2 = I$, and the same in the other order, so $(I + N)^{-1} = I - N = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$.
    In general, if $N^k = 0$ for some $k$ (such an $N$ is called **nilpotent**), then
    $(I - N)^{-1} = I + N + N^2 + \cdots + N^{k-1}$, the geometric series that stops; multiply out to check that
    everything cancels except $I - N^k = I$.

??? question "12. Can a $2 \times 3$ matrix $A$ have a $3 \times 2$ matrix $C$ with $AC = I_2$? Can it have a $B$ with $BA = I_3$?"

    $AC = I_2$ is possible: $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ and $C = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$.
    $BA = I_3$ is impossible: by Theorem 2.4 the homogeneous system $A\mathbf{x} = \mathbf{0}$ (2 equations, 3
    unknowns) has a nonzero solution $\mathbf{x}$, and then $\mathbf{x} = I_3\mathbf{x} = BA\mathbf{x} = \mathbf{0}$,
    a contradiction. One-sided inverses that are not two-sided exist only for non-square matrices.

## What you learned

- A matrix is a table and a machine: an $m \times n$ matrix turns vectors in $\mathbb{R}^n$ into vectors in
  $\mathbb{R}^m$, and its columns are the images of $\mathbf{e}_1, \ldots, \mathbf{e}_n$.
- $A\mathbf{x}$ is computed by rows (dot products) or by columns (a combination of the columns); $A\mathbf{x} = \mathbf{b}$
  is a whole linear system.
- Matrix multiplication is composition: $(AB)\mathbf{x} = A(B\mathbf{x})$. It is associative and distributive but not
  commutative, and products can vanish when the factors do not.
- The inverse undoes a matrix; for square matrices a one-sided inverse is two-sided; $(AB)^{-1} = B^{-1}A^{-1}$ and
  $(AB)^T = B^TA^T$; the transpose moves a matrix across a dot product.
- Row operations are multiplications by elementary matrices; row reducing $(A \mid I)$ gives $(I \mid A^{-1})$.
- Elimination records itself as $A = LU$ (or $PA = LU$ with row swaps), with the multipliers in $L$: factor once,
  then solve each new system with two cheap triangular solves.

**Next:** [Chapter 4](04-Vector-Spaces.md) steps back from lists of numbers and asks what vectors really need to be,
finding them among polynomials, functions, matrices and strings of bits.

## Further reading

- Gilbert Strang, *Introduction to Linear Algebra* (6th edition, 2023), Chapter 2 (elimination and LU).
- Carl D. Meyer, *Matrix Analysis and Applied Linear Algebra* (2000), Chapter 3.
- Lloyd N. Trefethen and David Bau III, *Numerical Linear Algebra* (1997), Lectures 20 to 23 on LU and pivoting.
- Arthur Cayley, "A memoir on the theory of matrices", *Philosophical Transactions of the Royal Society of London* 148
  (1858).
- Alan M. Turing, "Rounding-off errors in matrix processes", *Quarterly Journal of Mechanics and Applied Mathematics* 1
  (1948).
- On this site: the Geometry book's [Chapter 10, Transformations and symmetry](../geometry/10-Transformations-and-Symmetry.md);
  the Topics lesson [Functions](../../topics/algebra/level-7/04-functions.md); the U of T guides
  [MAT240H1 Unit 5, Rank-nullity and matrices](../../uoft/MAT240H1/unit05.md) and
  [MAT240H1 Unit 7, Systems and elementary operations](../../uoft/MAT240H1/unit07.md).
