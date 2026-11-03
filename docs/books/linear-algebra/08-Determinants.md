# 8. Determinants

*Is a square matrix invertible? Elimination answers that by running an algorithm. The determinant answers it with a single number,
which is zero exactly when the matrix is not invertible. But it is far more than a test. The determinant of a matrix is the factor by
which its linear map multiplies area or volume, with a sign that says whether it turns space inside out. In this chapter you will start
from that geometric meaning, find the three simple rules that pin the determinant down completely, derive from them the formula with
$n!$ terms, and prove the product rule $\det(AB) = \det A \det B$. Then you will meet cofactors, the inverse formula and Cramer's rule,
and see why the determinant appears in every change of variables in calculus.*

!!! abstract "In this chapter"
    **You will learn:**

    - the determinant of a $2 \times 2$ and $3 \times 3$ matrix as a signed area and a signed volume
    - the three properties (multilinear, alternating, $\det I = 1$) that define the determinant, and why exactly one function has them
    - how to compute determinants quickly by elimination, and what row operations do to them
    - the permutation formula, the sign of a permutation, and why $\det A^T = \det A$
    - the product rule $\det(AB) = \det A \det B$ with its proof, and why $A$ is invertible exactly when $\det A \ne 0$
    - cofactor expansion, the adjugate formula for $A^{-1}$, and Cramer's rule
    - the determinant as the volume scaling factor of a linear map, and the Jacobian of calculus

    **You need:** [Chapter 3](03-Matrices.md) (matrix multiplication, elementary matrices, inverses),
    [Chapter 5](05-Independence-Bases-and-Dimension.md) and [Chapter 6](06-Linear-Maps.md) (independence, rank, invertibility,
    similar matrices). The cross product from [Chapter 1](01-Vectors.md) helps for 8.1. Area of parallelograms is revisited gently in
    [Geometry, Chapter 9](../geometry/09-Vectors.md). The U of T guide [MAT240 Unit 8, Determinants](../../uoft/MAT240H1/unit08.md)
    covers the same material in course form.

    **Levels:** 8.1 is intermediate (with a beginner start); 8.2, 8.5 and 8.6 are intermediate; 8.3 and 8.4 are intermediate to
    advanced (first-year university proofs).

Throughout, $A$ is an $n \times n$ matrix over a field $F$ with columns $a_1, \ldots, a_n$, and we write $\det A$ or
$\det(a_1, \ldots, a_n)$ for its determinant. The notation $|A|$, with vertical bars, also means the determinant.

## 8.1 Area and volume with a sign

Two arrows $u = (a, c)$ and $v = (b, d)$ from the origin span a parallelogram. What is its area?

Enclose the parallelogram in the rectangle from the origin to the far corner $u + v = (a + b,\; c + d)$ (when all four numbers are
positive, as in the picture). The rectangle has area $(a + b)(c + d)$. The parts of the rectangle outside the parallelogram are two
triangles with legs $a$ and $c$ (area $\tfrac12 ac$ each), two triangles with legs $b$ and $d$ (area $\tfrac12 bd$ each) and two small
rectangles $b \times c$. So

$$
\text{area} = (a + b)(c + d) - ac - bd - 2bc = ad - bc .
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 200" role="img" aria-label="A parallelogram spanned by the arrows u equal to (a, c) and v equal to (b, d), drawn from the origin at the bottom left. A dashed rectangle encloses it, from the origin to the far corner u plus v.">
  <defs>
    <marker id="la8-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 z" fill="currentColor"/>
    </marker>
  </defs>
  <rect x="40" y="50" width="160" height="120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <polygon points="40,170 160,130 200,50 80,90" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="170" x2="160" y2="130" stroke="#eea66f" stroke-width="3" marker-end="url(#la8-arr)"/>
  <line x1="40" y1="170" x2="80" y2="90" stroke="#7ccf9a" stroke-width="3" marker-end="url(#la8-arr)"/>
  <circle cx="40" cy="170" r="3" fill="currentColor"/>
  <text x="165" y="150" font-size="13" fill="currentColor">u = (a, c)</text>
  <text x="6" y="84" font-size="13" fill="currentColor">v = (b, d)</text>
  <text x="196" y="44" font-size="13" fill="currentColor">u + v</text>
  <text x="100" y="118" font-size="13" fill="currentColor">ad - bc</text>
  <text x="20" y="188" font-size="13" fill="currentColor">0</text>
</svg>
</div>

**Definition (2 by 2).** The **determinant** of $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, whose columns are $u$ and $v$, is
$ad - bc$.

*Check:* $u = (3, 1)$ and $v = (1, 2)$ give $3 \cdot 2 - 1 \cdot 1 = 5$. Counting unit squares in the picture (which is drawn with
exactly these vectors) agrees: the rectangle has area $4 \times 3 = 12$, and the pieces outside have area $1.5 + 1.5 + 1 + 1 + 1 + 1 = 7$.

### The sign

Swap $u$ and $v$ and the formula gives $bc - ad$: the same number with the opposite sign. The determinant is a **signed area**. It is
positive when turning from $u$ to $v$ the short way is anticlockwise (as from $e_1$ to $e_2$), and negative when it is clockwise. The
sign records **orientation**. For the map $x \mapsto Ax$, a negative determinant means the map reverses orientation, like a reflection
in a mirror: a left glove comes out as a right glove.

| Map of the plane | Matrix | Determinant | Meaning |
|---|---|---|---|
| rotation by $\theta$ | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ | $\cos^2\theta + \sin^2\theta = 1$ | keeps area and orientation |
| reflection in the $x$-axis | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ | $-1$ | keeps area, flips orientation |
| stretch | $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ | $6$ | multiplies area by 6 |
| shear | $\begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$ | $1$ | slides, keeps area |
| projection onto a line | $\begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$ | $0$ | flattens everything onto a line |

A determinant of $0$ means the parallelogram is flat: $u$ and $v$ lie on one line, they are dependent, and the matrix is not invertible.
That is the first glimpse of the main theorem of this chapter.

**Worked example: area of a triangle.** The triangle with corners $P = (1, 1)$, $Q = (4, 2)$, $R = (2, 5)$ is half the parallelogram
spanned by $Q - P = (3, 1)$ and $R - P = (1, 4)$. That parallelogram has signed area $3 \cdot 4 - 1 \cdot 1 = 11$, so the triangle has area
$\tfrac{11}{2}$. The positive sign says $P, Q, R$ go round anticlockwise.

### Three dimensions

Three vectors $u, v, w$ in $\mathbb{R}^3$ span a **parallelepiped**, a slanted box. Its volume is the area of the base (the
parallelogram of $v$ and $w$, which is $|v \times w|$) times the height (the component of $u$ along the direction $v \times w$, which is
perpendicular to the base). So the signed volume is the **triple product** $u \cdot (v \times w)$ ([Chapter 1](01-Vectors.md)). Written
out, with $u = (u_1, u_2, u_3)$ and so on,

$$
u \cdot (v \times w) = u_1(v_2 w_3 - v_3 w_2) - u_2(v_1 w_3 - v_3 w_1) + u_3(v_1 w_2 - v_2 w_1).
$$

This is the **$3 \times 3$ determinant** of the matrix with columns $u, v, w$ (or rows; we will see it makes no difference). Its sign
is $+$ when $u, v, w$ are arranged like $e_1, e_2, e_3$, a right-handed system, and $-$ for a left-handed one.

**Worked example.** The vectors $(1, 1, 0)$, $(0, 1, 1)$, $(1, 0, 1)$ span a box of volume

$$
\det\begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} = 1(1 \cdot 1 - 0 \cdot 1) - 1(0 \cdot 1 - 1 \cdot 1) + 0 = 1 + 1 = 2 .
$$

(Here the first column is expanded: $1 \cdot (1\cdot1 - 1\cdot0)$ from the top-left entry, $-1 \cdot (0 \cdot 1 - 1 \cdot 1)$ from the
middle-left entry, and nothing from the $0$; section 8.5 explains the pattern.)

What should the determinant of a $4 \times 4$ or $100 \times 100$ matrix be? There is no picture to draw. The way forward is to
list the **properties** that area and volume have, and to take them as the definition.

## 8.2 The properties that define it

Think of $\det(a_1, \ldots, a_n)$ as the signed volume of the box spanned by the columns. Three properties stand out.

**1. Normalisation.** The unit cube has volume 1: $\det I = \det(e_1, \ldots, e_n) = 1$.

**2. Linearity in each column.** Stretch one edge by $c$ and the volume is multiplied by $c$. And if one edge is a sum, $a_j = x + y$,
the box splits like a shear into two boxes, one with edge $x$ and one with edge $y$, whose signed volumes add (in two dimensions, this
is the fact that two parallelograms on the same base $u$ have total area equal to the parallelogram with the summed other edge). With
the other columns held fixed:

$$
\det(\ldots, x + y, \ldots) = \det(\ldots, x, \ldots) + \det(\ldots, y, \ldots), \qquad \det(\ldots, c\,x, \ldots) = c \det(\ldots, x, \ldots).
$$

A function that is linear in each column separately (when the others are held fixed) is called **multilinear**.

**3. Alternating.** If two columns are equal, the box is flat and the volume is $0$:

$$
\det(\ldots, x, \ldots, x, \ldots) = 0 .
$$

**Definition.** A **determinant function** on $n \times n$ matrices is a function $D$ from matrices to $F$ that is multilinear in the
columns, alternating, and has $D(I) = 1$.

You can check that $ad - bc$ has all three properties. The miracle is that these three properties alone force everything else.

### First consequences

**Theorem 8.1.** Let $D$ be multilinear and alternating. Then:

1. **Swapping two columns changes the sign** of $D$.
2. **Adding a multiple of one column to another does not change** $D$.
3. If a column is zero, $D = 0$.
4. If the columns are linearly dependent, $D = 0$.

*Proof.* (1) Put $x + y$ in both positions $i$ and $j$. By the alternating property and linearity in each of the two columns,

$$
0 = D(\ldots, x + y, \ldots, x + y, \ldots) = D(\ldots, x, \ldots, x, \ldots) + D(\ldots, x, \ldots, y, \ldots) + D(\ldots, y, \ldots, x, \ldots) + D(\ldots, y, \ldots, y, \ldots).
$$

The first and last terms are $0$, so $D(\ldots, x, \ldots, y, \ldots) = -D(\ldots, y, \ldots, x, \ldots)$.

(2) $D(\ldots, a_i + c\,a_j, \ldots, a_j, \ldots) = D(\ldots, a_i, \ldots, a_j, \ldots) + c\,D(\ldots, a_j, \ldots, a_j, \ldots)$, and the
last term is $0$.

(3) A zero column is $0$ times itself, so by linearity $D = 0 \cdot D = 0$.

(4) If the columns are dependent, some column is a combination of the others ([Chapter 5](05-Independence-Bases-and-Dimension.md), 5.1).
Subtracting that combination from it, using (2) one term at a time, does not change $D$ and makes the column zero; by (3), $D = 0$. $\square$

Property (2) is a shear: sliding the top of a box parallel to its base does not change its volume. That is Cavalieri's principle, and
the algebra proves it in every dimension.

Why take "alternating" as the rule rather than "swapping changes the sign"? Over $\mathbb{R}$ the two are equivalent (if swapping
columns $i$ and $j$ changes the sign and the two columns are equal, then $D = -D$, so $2D = 0$, so $D = 0$). But over a field where
$1 + 1 = 0$, such as $\mathbb{Z}/2$, "$D = -D$" says nothing, and only the alternating rule gives the right theory.

### Uniqueness: elimination computes the determinant

**Theorem 8.2.** There is at most one determinant function. Its value on any matrix is fixed by the three properties, and can be computed
by elimination.

*Proof.* Let $D$ be a determinant function. Since its properties are stated for columns, work with **column** operations (this is the
same as row reduction of $A^T$). Reduce $A$ by column operations of two kinds: swapping two columns (which multiplies $D$ by $-1$), and adding a multiple of one column to another (which leaves $D$ unchanged).
Elimination with these operations either produces a zero column, in which case $D(A) = 0$, or produces a triangular matrix with nonzero
diagonal entries $d_1, \ldots, d_n$. Continue eliminating to clear the off-diagonal entries (adding multiples of columns, no change), to
reach the diagonal matrix $\operatorname{diag}(d_1, \ldots, d_n)$. By linearity in each column, pulling out each $d_i$,

$$
D(\operatorname{diag}(d_1, \ldots, d_n)) = d_1 d_2 \cdots d_n \, D(I) = d_1 d_2 \cdots d_n .
$$

So $D(A) = (\pm 1) \, d_1 \cdots d_n$, with the sign $(-1)^{\text{number of swaps}}$. Every step was forced by the three properties, so any
two determinant functions agree on $A$. $\square$

That proves there is **at most one** determinant function. Is there **at least one**? Elimination can be done in many different orders.
Could two orders give different answers, so that no function has all three properties? Section 8.3 settles this by writing down an
explicit formula and checking the properties. Taking that on trust for a moment, the practical upshot is a rule that also holds for
rows (by Theorem 8.5 below, $\det A^T = \det A$):

> **Row operations and the determinant.** Swapping two rows multiplies $\det$ by $-1$. Multiplying a row by $c$ multiplies $\det$ by $c$.
> Adding a multiple of one row to another leaves $\det$ unchanged. The determinant of a triangular matrix is the product of its diagonal.

So **$\det A = \pm$ (product of the pivots)**, with $-$ when an odd number of row swaps were used.

**Worked example.** Compute $\det B$ for

$$
B = \begin{pmatrix} 2 & 1 & 3 \\ 4 & 1 & 7 \\ -2 & 2 & 1 \end{pmatrix}.
$$

Step 1: subtract $2 \times$ row 1 from row 2, and add row 1 to row 3 (no change to $\det$):
$\begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 1 \\ 0 & 3 & 4 \end{pmatrix}$.

Step 2: add $3 \times$ row 2 to row 3 (no change): $\begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 1 \\ 0 & 0 & 7 \end{pmatrix}$.

Step 3: triangular, no swaps: $\det B = 2 \cdot (-1) \cdot 7 = -14$.

*Check* by the triple product formula of 8.1, expanding along the first row:
$2(1 \cdot 1 - 7 \cdot 2) - 1(4 \cdot 1 - 7 \cdot (-2)) + 3(4 \cdot 2 - 1 \cdot (-2)) = -26 - 18 + 30 = -14$.

**Worked example ($4 \times 4$).** For $M = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 3 & 0 \\ 2 & 0 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{pmatrix}$:
subtract $2 \times$ row 1 from row 3 and row 1 from row 4, giving rows 3 and 4 equal to $(0, -4, 1, -1)$ and $(0, -1, 1, 0)$. Then add
$4 \times$ row 2 to row 3 and row 2 to row 4: rows 3 and 4 become $(0, 0, 13, -1)$ and $(0, 0, 4, 0)$. The matrix is now block
triangular, with diagonal entries $1, 1$ and a final $2 \times 2$ block $\begin{pmatrix} 13 & -1 \\ 4 & 0 \end{pmatrix}$ of determinant
$0 + 4 = 4$. So $\det M = 1 \cdot 1 \cdot 4 = 4$. (One more elimination step, row 4 minus $\tfrac{4}{13}$ row 3, gives the triangular
form with diagonal $1, 1, 13, \tfrac{4}{13}$, whose product is again 4.)

Elimination needs about $\tfrac23 n^3$ arithmetic operations. That is how computers find determinants, and it is the only sensible way
for large $n$.

## 8.3 The permutation formula

*Level: intermediate to advanced.*

Elimination computes the determinant, but does not give a formula. To find one, expand $\det A$ using nothing but multilinearity, and see
what the alternating rule leaves.

### Expanding by multilinearity

Each column is a combination of the standard basis vectors: $a_j = \sum_{i} a_{ij} e_i$. Expand the first column, then the second, and
so on. By linearity in each column,

$$
\det(a_1, \ldots, a_n) = \sum_{i_1 = 1}^n \sum_{i_2 = 1}^n \cdots \sum_{i_n = 1}^n a_{i_1 1}\, a_{i_2 2} \cdots a_{i_n n} \, \det(e_{i_1}, e_{i_2}, \ldots, e_{i_n}).
$$

That is $n^n$ terms. But whenever two of the indices $i_1, \ldots, i_n$ are equal, the matrix $(e_{i_1}, \ldots, e_{i_n})$ has two equal
columns and its determinant is $0$. The surviving terms are those where $i_1, \ldots, i_n$ are $1, \ldots, n$ in some order, that is,
where $j \mapsto i_j$ is a **permutation** $\sigma$ of $\{1, \ldots, n\}$, with $i_j = \sigma(j)$. There are $n!$ of them. The matrix
$(e_{\sigma(1)}, \ldots, e_{\sigma(n)})$ is a **permutation matrix**: the identity with its columns shuffled. Unshuffling it by swaps
reaches $I$, and each swap changes the sign, so its determinant is $\pm 1$. Call this sign $\operatorname{sgn} \sigma$. Then:

**Theorem 8.3 (Leibniz formula).** If a determinant function exists, it is

$$
\det A = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma)\, a_{\sigma(1)\,1}\, a_{\sigma(2)\,2} \cdots a_{\sigma(n)\,n},
$$

where $S_n$ is the set of all $n!$ permutations of $\{1, \ldots, n\}$.

Each term picks **one entry from each column and each row** (each column $j$ once, and rows $\sigma(1), \ldots, \sigma(n)$ all
different), multiplies them, and attaches a sign.

**For $n = 2$:** the permutations are the identity (sign $+$), giving $a_{11} a_{22}$, and the swap (sign $-$), giving $a_{21} a_{12}$.
So $\det A = a_{11} a_{22} - a_{21} a_{12} = ad - bc$.

**For $n = 3$:** six terms, three with $+$ (the identity and the two cyclic shifts) and three with $-$ (the three swaps):

$$
\det A = a_{11}a_{22}a_{33} + a_{21}a_{32}a_{13} + a_{31}a_{12}a_{23} - a_{11}a_{32}a_{23} - a_{31}a_{22}a_{13} - a_{21}a_{12}a_{33}.
$$

This is the "rule of Sarrus": copy the first two columns to the right, add the three down-right diagonals and subtract the three
up-right ones. It is only a mnemonic for $n = 3$. For $n = 4$ the formula has $24$ terms, not the $8$ diagonals the same picture would
suggest, and for $n = 10$ it has $3{,}628{,}800$ terms. The formula is for proofs, not for computing.

### The sign of a permutation

The argument above quietly assumed something: that unshuffling a permutation matrix always takes an even number of swaps, or always an
odd number, whichever route you take. Otherwise "$\operatorname{sgn} \sigma$" would be ill defined. Here is a way to define the sign
directly and prove this.

Write a permutation in **one-line notation** as the list $\sigma(1), \sigma(2), \ldots, \sigma(n)$. An **inversion** is a pair of
positions $i < j$ with $\sigma(i) > \sigma(j)$: a pair that is out of order. Define

$$
\operatorname{sgn}(\sigma) = (-1)^{\text{number of inversions of } \sigma}.
$$

**Theorem 8.4.** Swapping two entries of the one-line list changes the number of inversions by an odd number. Hence: any way of sorting
$\sigma$ into $1, 2, \ldots, n$ by swaps uses an even number of swaps if $\operatorname{sgn}(\sigma) = +1$ and an odd number if it is $-1$.

*Proof.* Swap the entries $p$ and $q$ in positions $i < j$, with $k$ entries between them. The pair $\{p, q\}$ itself changes from in order
to out of order or back: a change of $\pm 1$. Each entry $m$ strictly between the two positions forms two pairs, one with $p$ and one with
$q$; before and after the swap, $m$ is compared with the same two numbers but from the other side, so the number of inversions among
these two pairs changes by $-2$, $0$ or $+2$. Pairs that involve neither position $i$ nor $j$ are untouched. A position $h$ outside the range from
$i$ to $j$ forms two pairs, with positions $i$ and $j$; it lies on the same side of both before and after the swap, and is compared with
the same two values $p$ and $q$, so together these two pairs contribute the same number of inversions as before. So the total change is $\pm 1$ plus
an even number: odd. Sorting reaches the identity, which has 0 inversions; each swap flips the parity of the inversion count; so the
number of swaps has the parity of the original count. $\square$

*Example:* $\sigma = 2, 4, 1, 3$ has inversions $(2,1)$, $(4,1)$, $(4,3)$: three, so $\operatorname{sgn} \sigma = -1$. Sorting it by swaps:
swap 2 and 1 to get $1, 4, 2, 3$; swap 4 and 2 to get $1, 2, 4, 3$; swap 4 and 3 to get $1, 2, 3, 4$. Three swaps, odd, as promised.
(Permutations and their signs are the subject of [Algebra, Chapter 13](../algebra/13-Groups.md), where the even permutations form the
alternating group.)

### Existence

**Theorem 8.5.** The Leibniz formula defines a determinant function: it is multilinear, alternating, and gives $\det I = 1$. Moreover
$\det A^T = \det A$.

*Proof.* *Multilinear.* Each term $a_{\sigma(1)1} \cdots a_{\sigma(n)n}$ contains exactly one entry from column $j$, so as a function of
column $j$ (others fixed) it is a constant times one entry of that column, which is linear. A sum of linear functions is linear.

*$\det I = 1$.* In the identity, $a_{\sigma(j)j} = 0$ unless $\sigma(j) = j$, so only the identity permutation contributes, with sign $+1$
and product $1$.

*Alternating.* Suppose columns $k$ and $l$ are equal ($k \ne l$). Let $\tau$ be the transposition swapping $k$ and $l$, and pair each
permutation $\sigma$ with $\sigma\tau$ (which agrees with $\sigma$ except that $\sigma\tau(k) = \sigma(l)$ and $\sigma\tau(l) = \sigma(k)$).
This splits $S_n$ into pairs. In the term for $\sigma\tau$, the factors from columns $k$ and $l$ are $a_{\sigma(l)k} a_{\sigma(k)l}$, which
equals $a_{\sigma(l)l} a_{\sigma(k)k}$ because the two columns are equal; so the two products are the same. Their signs are opposite (the
one-line list of $\sigma\tau$ is that of $\sigma$ with two entries swapped, Theorem 8.4). So each pair cancels, and $\det A = 0$.

*Transpose.* The term for $\sigma$ is $\prod_j a_{\sigma(j)j}$. Reindex by $i = \sigma(j)$: the same product is
$\prod_i a_{i\,\sigma^{-1}(i)}$, which is the term for $\sigma^{-1}$ in the formula for $\det A^T$ (whose $(j, i)$ entry is $a_{ij}$). And
$\operatorname{sgn}\sigma^{-1} = \operatorname{sgn}\sigma$, because $\sigma$ and $\sigma^{-1}$ have the same inversions read backwards (a
pair of values out of order in one is a pair of positions out of order in the other). As $\sigma$ runs over $S_n$ so does $\sigma^{-1}$,
so the two sums agree. $\square$

So the determinant exists and is unique. Because $\det A^T = \det A$, **everything said about columns holds for rows**: the determinant is
multilinear and alternating in the rows too, and row operations act on it as listed in 8.2.

**Triangular matrices.** If $A$ is upper triangular ($a_{ij} = 0$ for $i > j$), every term with $\sigma \ne$ identity contains a zero:
since the $\sigma(j)$ add up to the same total as the $j$, if some $\sigma(j) \ne j$ then some $\sigma(j) > j$, and $a_{\sigma(j)j} = 0$. So
$\det A = a_{11} a_{22} \cdots a_{nn}$. By the transpose rule the same holds for lower triangular matrices.

## 8.4 The product rule

*Level: intermediate to advanced.*

Apply one linear map and then another. The first multiplies volumes by $\det B$, the second by $\det A$, so the composite should multiply
them by $\det A \cdot \det B$. That is a picture, not a proof, and it hides a real surprise: the formula with $n!$ terms is multiplicative.

**Theorem 8.6 (product rule).** For all $n \times n$ matrices $A, B$,

$$
\det(AB) = \det A \, \det B .
$$

*Proof.* *Case 1: $A$ is not invertible.* Then $\operatorname{rank} A < n$, and $C(AB) \subseteq C(A)$ (every column $Ab_j$ of $AB$ is a
combination of the columns of $A$), so $\operatorname{rank}(AB) < n$. Both $A$ and $AB$ have dependent columns, so both determinants are $0$
(Theorem 8.1(4)), and $0 = 0 \cdot \det B$.

*Case 2: $A$ is invertible,* so its columns are independent and $\det A \ne 0$ (elimination reaches the identity without a zero column,
Theorem 8.2, so $\det A$ is $\pm$ a product of nonzero pivots). Define a function of $B$ by

$$
D(B) = \frac{\det(AB)}{\det A}.
$$

The columns of $AB$ are $Ab_1, \ldots, Ab_n$. Since $B \mapsto Ab_j$ is linear in $b_j$, and $\det$ is multilinear, $D$ is multilinear in the
columns of $B$. If two columns of $B$ are equal, two columns of $AB$ are equal, so $D(B) = 0$: $D$ is alternating. And
$D(I) = \det A / \det A = 1$. So $D$ is a determinant function, and by uniqueness (Theorem 8.2) $D(B) = \det B$. Multiply by $\det A$. $\square$

*Check:* $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 5 & 2 \end{pmatrix} = \begin{pmatrix} 10 & 5 \\ 20 & 11 \end{pmatrix}$.
The determinants are $-2$, $-5$ and $110 - 100 = 10 = (-2)(-5)$.

The proof is a good example of how uniqueness theorems are used: to show that two expressions are equal, show that one of them has the
defining properties of the other.

### Consequences

**Theorem 8.7 (invertibility).** A square matrix $A$ is invertible if and only if $\det A \ne 0$, and then $\det(A^{-1}) = 1 / \det A$.

*Proof.* If $A$ is invertible, $\det A \cdot \det A^{-1} = \det(AA^{-1}) = \det I = 1$, so $\det A \ne 0$ and $\det A^{-1} = 1/\det A$. If $A$
is not invertible, its columns are dependent ([Chapter 6](06-Linear-Maps.md), 6.5) and $\det A = 0$ by Theorem 8.1(4). $\square$

So, for a square matrix, the following are all the same: $\det A \ne 0$; $A$ is invertible; the columns are independent; the rows are
independent; $Ax = 0$ has only the zero solution; $\operatorname{rank} A = n$. A single number decides them all.

**Similar matrices have the same determinant.** $\det(P^{-1}AP) = \det P^{-1} \det A \det P = \det A$, since the numbers commute. So the
determinant of a **linear operator** $T : V \to V$ on a finite-dimensional space is well defined: compute $\det [T]_B$ in any basis $B$
(compare trace and rank in [Chapter 6](06-Linear-Maps.md), 6.6).

**Other quick facts.**

- $\det(cA) = c^n \det A$ for an $n \times n$ matrix (each of the $n$ columns is multiplied by $c$).
- $\det(A^k) = (\det A)^k$.
- $\det(AB) = \det(BA)$, although $AB \ne BA$ in general.
- If $A^T A = I$ (an **orthogonal** matrix, [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md)), then $(\det A)^2 = \det A^T \det A = 1$, so
  $\det A = \pm 1$. Rotations have $+1$, reflections $-1$.
- Elementary matrices ([Chapter 3](03-Matrices.md), 3.5) have determinants $-1$ (swap), $c$ (scale a row by $c$) and $1$ (add a multiple of a
  row). Since $EA$ performs the row operation on $A$, the row rules of 8.2 are the product rule in disguise.

## 8.5 Cofactors and Cramer's rule

The $3 \times 3$ formula in 8.1 was written as a combination of $2 \times 2$ determinants. That works in every size.

**Definitions.** The **minor** $M_{ij}$ of $A$ is the determinant of the $(n-1) \times (n-1)$ matrix left when row $i$ and column $j$ are
deleted. The **cofactor** is $C_{ij} = (-1)^{i+j} M_{ij}$. The signs $(-1)^{i+j}$ form a checkerboard starting with $+$ in the top left:

$$
\begin{pmatrix} + & - & + & \cdots \\ - & + & - & \cdots \\ + & - & + & \cdots \\ \vdots & \vdots & \vdots & \ddots \end{pmatrix}.
$$

**Theorem 8.8 (Laplace or cofactor expansion).** For any column $j$,

$$
\det A = a_{1j} C_{1j} + a_{2j} C_{2j} + \cdots + a_{nj} C_{nj},
$$

and for any row $i$, $\det A = a_{i1} C_{i1} + a_{i2} C_{i2} + \cdots + a_{in} C_{in}$.

*Proof.* Column $j$ is $\sum_i a_{ij} e_i$, so by linearity in column $j$, $\det A = \sum_i a_{ij} \det A^{(i)}$, where $A^{(i)}$ is $A$ with
column $j$ replaced by $e_i$. It remains to show $\det A^{(i)} = C_{ij}$. In $A^{(i)}$, move column $j$ to the front by $j - 1$ swaps of
neighbouring columns, and row $i$ to the top by $i - 1$ swaps of neighbouring rows. That changes the sign by $(-1)^{i + j - 2} = (-1)^{i+j}$,
keeps the other rows and columns in their order, and gives a matrix of the form

$$
\begin{pmatrix} 1 & * \\ 0 & A_{ij} \end{pmatrix},
$$

with first column $e_1$ and the matrix $A_{ij}$ (row $i$ and column $j$ deleted) in the bottom right. In the Leibniz formula for this
matrix, the only nonzero entry of the first column is the $1$ at the top, so only permutations with $\sigma(1) = 1$ contribute, and these
are exactly the permutations of the remaining $n - 1$ indices, with the same signs. So its determinant is $\det A_{ij} = M_{ij}$, and
$\det A^{(i)} = (-1)^{i+j} M_{ij} = C_{ij}$. The row version follows from $\det A^T = \det A$. $\square$

Cofactor expansion is handy when a row or column has many zeros, and for proofs by induction on $n$. For a general matrix it still costs
about $n!$ operations, so for anything bigger than $4 \times 4$ use elimination.

**Worked example: the Vandermonde determinant.** For numbers $a, b, c$,

$$
V = \det\begin{pmatrix} 1 & a & a^2 \\ 1 & b & b^2 \\ 1 & c & c^2 \end{pmatrix} = (b - a)(c - a)(c - b).
$$

Step 1: subtract row 1 from rows 2 and 3 (no change): the rows become $(1, a, a^2)$, $(0, b - a, b^2 - a^2)$, $(0, c - a, c^2 - a^2)$.

Step 2: expand along the first column: $V = (b - a)(c^2 - a^2) - (c - a)(b^2 - a^2)$.

Step 3: factor out $(b - a)(c - a)$ using $c^2 - a^2 = (c - a)(c + a)$ and $b^2 - a^2 = (b - a)(b + a)$:
$V = (b - a)(c - a)\big[(c + a) - (b + a)\big] = (b - a)(c - a)(c - b)$.

So $V \ne 0$ exactly when $a, b, c$ are distinct. That is another proof that a quadratic through three points with distinct
$x$-coordinates exists and is unique ([Chapter 6](06-Linear-Maps.md), 6.3), since $V$ is the determinant of that interpolation problem.

### The inverse formula

**Definition.** The **adjugate** $\operatorname{adj} A$ is the transpose of the matrix of cofactors: its $(i, j)$ entry is $C_{ji}$.

**Theorem 8.9.** $A \,\operatorname{adj}(A) = \operatorname{adj}(A)\, A = (\det A)\, I$. So if $\det A \ne 0$,

$$
A^{-1} = \frac{1}{\det A}\,\operatorname{adj} A .
$$

*Proof.* The $(i, k)$ entry of $A\,\operatorname{adj}A$ is $\sum_j a_{ij} C_{kj}$. When $k = i$ this is the expansion of $\det A$ along row
$i$. When $k \ne i$, it is the expansion along row $k$ of the matrix obtained from $A$ by replacing row $k$ with a copy of row $i$ (the
cofactors $C_{kj}$ do not involve row $k$, so they are the same for that matrix). That matrix has two equal rows, so its determinant is $0$.
The same argument with columns gives $\operatorname{adj}(A)\,A = (\det A) I$. $\square$

For $2 \times 2$ this is the familiar rule: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.

**Worked example.** For $E = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 3 & 2 \\ 1 & 0 & 0 \end{pmatrix}$, expand along row 3 (two zeros): only
$a_{31} = 1$ contributes, with cofactor $C_{31} = +\det\begin{pmatrix} 1 & 1 \\ 3 & 2 \end{pmatrix} = 2 - 3 = -1$. So $\det E = -1$. The
nine cofactors, computed the same way, give

$$
\operatorname{adj} E = \begin{pmatrix} 0 & 0 & -1 \\ 2 & -1 & -3 \\ -3 & 1 & 5 \end{pmatrix},
\qquad
E^{-1} = \frac{1}{-1}\operatorname{adj}E = \begin{pmatrix} 0 & 0 & 1 \\ -2 & 1 & 3 \\ 3 & -1 & -5 \end{pmatrix}.
$$

*Check:* the first row of $E$ times the columns of $E^{-1}$ gives $(0 - 2 + 3,\; 0 + 1 - 1,\; 2 + 3 - 5) = (1, 0, 0)$, and the other rows work
the same way. Notice that $E^{-1}$ has integer entries. That is because $\det E = \pm 1$: an integer matrix has an integer inverse exactly
when its determinant is $\pm 1$ (exercise 8).

### Cramer's rule

**Theorem 8.10 (Cramer's rule).** If $\det A \ne 0$, the unique solution of $Ax = b$ is

$$
x_j = \frac{\det A_j}{\det A}, \qquad j = 1, \ldots, n,
$$

where $A_j$ is $A$ with its column $j$ replaced by $b$.

*Proof.* $b = Ax = x_1 a_1 + \cdots + x_n a_n$. Put this in column $j$ and expand by linearity in that column:

$$
\det A_j = \sum_k x_k \det(a_1, \ldots, a_{j-1}, a_k, a_{j+1}, \ldots, a_n).
$$

For $k \ne j$ the matrix has $a_k$ twice, so its determinant is $0$. Only $k = j$ survives: $\det A_j = x_j \det A$. $\square$

**Worked example.** Solve $2x + y = 5$, $x + 3y = 10$. Here $\det A = 6 - 1 = 5$,

$$
x = \frac{\det\begin{pmatrix} 5 & 1 \\ 10 & 3 \end{pmatrix}}{5} = \frac{15 - 10}{5} = 1, \qquad
y = \frac{\det\begin{pmatrix} 2 & 5 \\ 1 & 10 \end{pmatrix}}{5} = \frac{20 - 5}{5} = 3 .
$$

*Check:* $2 + 3 = 5$ and $1 + 9 = 10$.

**With $E$ above** and $b = (4, 6, 1)$: replacing each column of $E$ in turn by $b$ gives three determinants, each equal to $-1$, so
$x = (1, 1, 1)$. *Check:* $E(1, 1, 1) = (2 + 1 + 1,\; 1 + 3 + 2,\; 1) = (4, 6, 1)$.

Cramer's rule is a theoretical tool, not a practical method: it needs $n + 1$ determinants. But it shows something elimination hides. Each
$x_j$ is a ratio of polynomials in the entries of $A$ and $b$, so the solution depends **continuously** (even smoothly) on the data as long
as $\det A \ne 0$; and if $A$ and $b$ have integer entries, the solution has denominator dividing $\det A$.

## 8.6 Determinant as volume scaling

We began with the area of a parallelogram. Now the circle closes.

**Theorem 8.11.** Let $A$ be a real $n \times n$ matrix and $S$ a region of $\mathbb{R}^n$ with a volume (area when $n = 2$). Then the image
$A(S) = \{Ax : x \in S\}$ has volume

$$
\operatorname{vol}(A(S)) = |\det A| \cdot \operatorname{vol}(S).
$$

*Proof sketch.* If $\det A = 0$, the image lies in the column space, a subspace of dimension less than $n$, which has volume $0$. Otherwise
$A$ is a product of elementary matrices ([Chapter 3](03-Matrices.md), 3.5). For each kind the statement can be checked on boxes: scaling a
coordinate by $c$ multiplies the volume of every box by $|c|$; swapping two coordinates just relabels axes; and a shear (adding a multiple
of one coordinate to another) preserves the volume of every box, by Cavalieri's principle, since it slides each slice parallel to itself.
So for elementary matrices the volume scales by $|\det|$, and by the product rule (Theorem 8.6) the factors multiply correctly for any
product. Finally, any region with a volume can be approximated from inside and outside by finite unions of small boxes, and $A$ maps the
boxes to sets whose volumes scale by the same factor. Making this last step rigorous is a matter of integration theory, not of linear
algebra; see [Calculus, Chapter 16](../calculus/16-Multiple-Integrals.md), 16.4, and for the general version, measure theory. $\square$

In particular the unit cube goes to the parallelepiped spanned by the columns of $A$, whose volume is $|\det A|$. That justifies the
picture we started from in every dimension: **$|\det A|$ is the volume of the box spanned by the columns**, and the sign of $\det A$ says
whether $A$ preserves or reverses orientation.

**Worked example: the area of an ellipse.** The ellipse $x^2/a^2 + y^2/b^2 \le 1$ is the image of the unit disc under
$A = \begin{pmatrix} a & 0 \\ 0 & b \end{pmatrix}$ (if $u^2 + v^2 \le 1$, then $(x, y) = (au, bv)$ satisfies the inequality, and conversely).
So its area is $|\det A| \cdot \pi = \pi a b$, with no integration.

**Composition.** If $B$ scales volume by $|\det B|$ and $A$ by $|\det A|$, then $AB$ scales it by $|\det A||\det B|$. That is the product rule
read geometrically, and it explains why the determinant of an invertible map can never be zero: a map that crushes volume to $0$ cannot be
undone.

### The Jacobian

Calculus uses linear algebra to study maps that are not linear. A smooth map $\Phi : \mathbb{R}^n \to \mathbb{R}^n$ (a change of
coordinates) is, near each point $p$, close to a linear map: its derivative, given by the **Jacobian matrix** $J\Phi(p)$ of partial
derivatives ([Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md)). A tiny box near $p$ is carried to a set that is
almost a parallelepiped, with volume multiplied by about $|\det J\Phi(p)|$. Adding up over many tiny boxes gives the **change of variables
formula**

$$
\int_{\Phi(S)} f(y)\, dy = \int_S f(\Phi(x))\, |\det J\Phi(x)|\, dx ,
$$

proved in [Calculus, Chapter 16](../calculus/16-Multiple-Integrals.md), 16.4.

**Example: polar coordinates.** $\Phi(r, \theta) = (r\cos\theta,\; r\sin\theta)$ has

$$
J\Phi = \begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix}, \qquad
\det J\Phi = r\cos^2\theta + r\sin^2\theta = r .
$$

That is where the $r$ in $dA = r\,dr\,d\theta$ comes from: a small polar rectangle of sides $dr$ and $d\theta$ has area about $r\,dr\,d\theta$,
because the arc it sweeps at radius $r$ has length $r\,d\theta$.

The sign of the Jacobian determinant also matters in geometry: a coordinate change with positive Jacobian preserves orientation. This is
the beginning of the theory of **differential forms** ([Calculus, Chapter 17](../calculus/17-Vector-Calculus.md)), and of the exterior
algebra of [Chapter 17](17-Duality-and-Multilinear-Algebra.md), where the determinant reappears as the one natural way to multiply $n$
vectors in an $n$-dimensional space.

### A short history

Determinants are older than matrices. In Japan, Seki Takakazu described determinants in 1683 while eliminating variables from systems of
polynomial equations. In Europe, Leibniz wrote to L'Hôpital in 1693 about the condition for three linear equations in two unknowns to have a
common solution, with what amounts to a $3 \times 3$ determinant. Gabriel Cramer published his rule in 1750, in a book on algebraic curves,
for fitting curves through given points. Alexandre-Théophile Vandermonde and Pierre-Simon Laplace, both in the early 1770s, treated
determinants as objects of study; Laplace gave the cofactor expansion. Gauss used the word "determinant" in 1801 for a different
quantity attached to quadratic forms. Augustin-Louis Cauchy, in 1812, gave the word its modern meaning, developed the general theory and
proved the product rule, which Jacques Binet also presented the same year. Cayley introduced the notation with vertical bars in 1841. The
geometric meaning as signed volume, and the definition by the three properties, came later; Karl Weierstrass and Leopold Kronecker, in their Berlin lectures, are usually
credited with the characterisation by properties, and Thomas Muir's four-volume *Theory of Determinants in the Historical Order of Development* (1890-1923)
records the whole story.

## Check yourself

??? question "1. Compute $\det\begin{pmatrix} 3 & 7 \\ 2 & 5 \end{pmatrix}$ and $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{pmatrix}$."

    $3 \cdot 5 - 7 \cdot 2 = 15 - 14 = 1$. The second is upper triangular, so the determinant is the product of the diagonal:
    $1 \cdot 4 \cdot 6 = 24$.

??? question "2. Find the area of the triangle with corners $(0, 0)$, $(5, 1)$, $(2, 4)$, and say whether the corners go round clockwise or anticlockwise."

    The triangle is half the parallelogram spanned by $(5, 1)$ and $(2, 4)$, whose signed area is $5 \cdot 4 - 1 \cdot 2 = 18$. So the area is
    $9$, and the positive sign means $(0,0) \to (5,1) \to (2,4)$ goes anticlockwise.

??? question "3. A matrix $A$ is $4 \times 4$ with $\det A = 3$. Find $\det(2A)$, $\det(A^{-1})$, $\det(A^T)$, $\det(A^3)$, and the determinant of the matrix obtained from $A$ by swapping rows 1 and 4 and then adding row 2 to row 3."

    $\det(2A) = 2^4 \cdot 3 = 48$. $\det(A^{-1}) = 1/3$. $\det(A^T) = 3$. $\det(A^3) = 27$. The swap changes the sign and the row addition
    changes nothing: $-3$.

??? question "4. Compute $\det\begin{pmatrix} 0 & 1 & 2 \\ 1 & 0 & 3 \\ 4 & -3 & 8 \end{pmatrix}$ by elimination, keeping track of row swaps."

    Swap rows 1 and 2 (sign $-1$): rows $(1, 0, 3)$, $(0, 1, 2)$, $(4, -3, 8)$. Subtract $4 \times$ row 1 from row 3: $(0, -3, -4)$. Add
    $3 \times$ row 2 to row 3: $(0, 0, 2)$. The triangular matrix has diagonal $1, 1, 2$, so the determinant is $-1 \cdot 2 = -2$.
    *Check* by the first row: $0 - 1(1 \cdot 8 - 3 \cdot 4) + 2(1 \cdot (-3) - 0 \cdot 4) = -1(-4) + 2(-3) = 4 - 6 = -2$.

??? question "5. Find the sign of the permutation $3, 1, 4, 5, 2$ by counting inversions, and confirm by sorting it with swaps."

    Out-of-order pairs: $(3,1)$, $(3,2)$, $(4,2)$, $(5,2)$: four inversions, so the sign is $+1$. Sorting: swap 3 and 1 to get
    $1, 3, 4, 5, 2$; swap 3 and 2 to get $1, 2, 4, 5, 3$; swap 4 and 3 to get $1, 2, 3, 5, 4$; swap 5 and 4 to get $1, 2, 3, 4, 5$. Four swaps,
    even.

??? question "6. Show that there is no real $3 \times 3$ matrix $A$ with $A^2 = -I$. Is there a real $2 \times 2$ one?"

    Taking determinants, $(\det A)^2 = \det(-I) = (-1)^3 = -1$, impossible for a real number. For $2 \times 2$, $\det(-I) = (-1)^2 = 1$, so the
    determinant gives no obstruction, and indeed the rotation by $90°$, $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, squares to $-I$
    (turning twice by a quarter turn is a half turn).

??? question "7. Find the volume of the parallelepiped with edges $(1, 2, 0)$, $(0, 1, 3)$, $(2, 0, 1)$ from one corner."

    The determinant with these columns, expanded along the first row of $\begin{pmatrix} 1 & 0 & 2 \\ 2 & 1 & 0 \\ 0 & 3 & 1 \end{pmatrix}$, is
    $1(1 \cdot 1 - 0 \cdot 3) - 0 + 2(2 \cdot 3 - 1 \cdot 0) = 1 + 12 = 13$. The volume is $13$.

??? question "8. Prove that a square matrix $A$ with integer entries has an inverse with integer entries if and only if $\det A = \pm 1$."

    If $A^{-1}$ has integer entries, then $\det A$ and $\det A^{-1}$ are integers (the Leibniz formula uses only sums and products) with
    product $\det I = 1$, so both are $\pm 1$. Conversely, if $\det A = \pm 1$, the adjugate has integer entries (its entries are
    determinants of integer matrices, with signs), so $A^{-1} = \pm \operatorname{adj} A$ is an integer matrix (Theorem 8.9).

??? question "9. Use Cramer's rule to solve $3x - y = 1$, $5x + 2y = 9$."

    $\det A = 3 \cdot 2 - (-1) \cdot 5 = 11$. $x = \det\begin{pmatrix} 1 & -1 \\ 9 & 2 \end{pmatrix}/11 = (2 + 9)/11 = 1$ and
    $y = \det\begin{pmatrix} 3 & 1 \\ 5 & 9 \end{pmatrix}/11 = (27 - 5)/11 = 2$. *Check:* $3 - 2 = 1$ and $5 + 4 = 9$.

??? question "10. Let $A$ be $2 \times 3$ and $B$ be $3 \times 2$. Show that $\det(BA) = 0$ always, but $\det(AB)$ can be nonzero."

    $BA$ is $3 \times 3$, and its column space is inside $C(B)$, which has dimension at most 2. So $BA$ has rank at most 2 and is not
    invertible: $\det(BA) = 0$. But with $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ and $B = A^T$, $AB = I_2$, with
    determinant 1. The rule $\det(AB) = \det(BA)$ is only for square matrices.

??? question "11. Show that the determinant of the $4 \times 4$ Vandermonde matrix with rows $(1, x_i, x_i^2, x_i^3)$ for $x_1, \ldots, x_4$ is $\prod_{i<j}(x_j - x_i)$ (assume the $3 \times 3$ case)."

    Subtract $x_1$ times each column from the next one, working from the right (column 4 minus $x_1 \cdot$ column 3, then column 3 minus
    $x_1 \cdot$ column 2, then column 2 minus $x_1 \cdot$ column 1): no change to the determinant. Row $i$ becomes
    $(1,\; x_i - x_1,\; x_i(x_i - x_1),\; x_i^2(x_i - x_1))$, and row 1 becomes $(1, 0, 0, 0)$. Expand along row 1, then take the factor
    $x_i - x_1$ out of each remaining row $i = 2, 3, 4$: what is left is the $3 \times 3$ Vandermonde determinant in $x_2, x_3, x_4$. So the
    determinant is $(x_2 - x_1)(x_3 - x_1)(x_4 - x_1)\prod_{2 \le i < j \le 4}(x_j - x_i) = \prod_{i<j}(x_j - x_i)$. The same step proves the
    $n \times n$ case by induction.

??? question "12. A linear map of the plane sends the unit square to a parallelogram of area 6, and sends the disc of radius 2 to some region. What is the area of that region? Why does the shape not matter?"

    The map multiplies every area by the same factor $|\det A|$, which the unit square shows is $6$. The disc of radius 2 has area $4\pi$, so
    its image has area $24\pi$. Shape does not matter because Theorem 8.11 holds for every region: the scaling factor belongs to the map,
    not to the region.

## What you learned

- In two and three dimensions the determinant is the signed area or volume spanned by the columns; the sign records orientation.
- The determinant is the unique function that is multilinear and alternating in the columns and has $\det I = 1$. Everything else follows
  from these three properties.
- Row operations change it predictably, so $\det A = \pm$ the product of the pivots; triangular matrices have the product of the diagonal.
- The Leibniz formula sums $n!$ signed products, one entry from each row and column; the sign of a permutation is well defined, and
  $\det A^T = \det A$.
- $\det(AB) = \det A \det B$; $A$ is invertible exactly when $\det A \ne 0$; similar matrices have the same determinant.
- Cofactor expansion, the adjugate formula $A^{-1} = \operatorname{adj}A / \det A$, and Cramer's rule $x_j = \det A_j / \det A$ are exact
  formulas, good for proofs and small cases.
- $|\det A|$ is the factor by which $A$ multiplies every volume; for nonlinear maps, the Jacobian determinant plays that role locally.

**Next:** [Chapter 9](09-Eigenvalues-and-Eigenvectors.md), the directions that a matrix only stretches, found with the help of the
determinant $\det(A - \lambda I) = 0$.

## Further reading

- S. Axler, *Linear Algebra Done Right*, 4th edition, Springer, 2024 (chapter 9: determinants via alternating multilinear forms, and
  volume).
- G. Strang, *Introduction to Linear Algebra*, 6th edition, Wellesley-Cambridge Press, 2023 (chapter 5).
- K. Hoffman and R. Kunze, *Linear Algebra*, 2nd edition, Prentice Hall, 1971 (chapter 5: determinant functions and uniqueness).
- S. H. Friedberg, A. J. Insel and L. E. Spence, *Linear Algebra*, 4th edition, Prentice Hall, 2003 (chapter 4).
- T. Muir, *The Theory of Determinants in the Historical Order of Development*, 4 volumes, Macmillan, 1890-1923.
- On this site: the U of T guide [MAT240 Unit 8, Determinants](../../uoft/MAT240H1/unit08.md); the Jacobian and change of variables in
  [Calculus, Chapter 16](../calculus/16-Multiple-Integrals.md); the cross product and volume in
  [Geometry, Chapter 9](../geometry/09-Vectors.md); signs of permutations in [Algebra, Chapter 13](../algebra/13-Groups.md); the
  [Linear algebra book index](index.md).
