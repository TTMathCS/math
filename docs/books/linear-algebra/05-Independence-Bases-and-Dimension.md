# 5. Independence, bases and dimension

*A plane through the origin in space is "two-dimensional", and so is the set of all polynomials $a + bx$, and so is the
complex plane seen as a real vector space. What does "dimension" mean in a space with no pictures, such as a space of
functions or of matrices, and why must every honest way of measuring it give the same answer? In this chapter you will
learn when a list of vectors has no waste in it (independence), when it reaches everything (spanning), and that a list
doing both, a basis, always has the same length. That length is the dimension. You will then use bases to give every
vector a list of coordinates, and prove the formula that tells you how big the sum and the intersection of two subspaces
are.*

!!! abstract "In this chapter"
    **You will learn:**

    - what it means for vectors to be linearly independent, and how to test it by elimination
    - what a basis is, and why every vector has exactly one set of coordinates in a basis
    - the exchange lemma, and the proof that all bases of a space have the same number of vectors
    - how to find a basis of a subspace, and how to shrink a spanning list or grow an independent list to a basis
    - coordinates: how a basis turns any $n$-dimensional space into $F^n$
    - the dimension formula $\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$ and what it says about planes in space
    - how counting works over a finite field such as $\mathbb{Z}/2$

    **You need:** [Chapter 4](04-Vector-Spaces.md) (vector spaces, subspaces, span, fields other than the reals) and
    Gaussian elimination from [Chapter 2](02-Systems-of-Linear-Equations.md). The U of T guides
    [MAT240 Unit 2, Subspaces, Span and Independence](../../uoft/MAT240H1/unit02.md) and
    [MAT240 Unit 3, Bases and Dimension](../../uoft/MAT240H1/unit03.md) cover the same ground in course form.

    **Levels:** 5.1, 5.2 and 5.4 are intermediate; 5.3 and 5.5 are intermediate to advanced (first-year university
    proofs); the remarks on infinite-dimensional spaces at the end of 5.3 are expert.

Throughout, $V$ is a vector space over a field $F$. When the field does not matter you may think of $F = \mathbb{R}$,
but every proof in this chapter works word for word over any field, including $\mathbb{C}$ and $\mathbb{Z}/2$.
A **list** of vectors $v_1, \ldots, v_k$ is written in order and may repeat a vector; a **linear combination** of it is
any vector $c_1 v_1 + \cdots + c_k v_k$ with scalars $c_i \in F$, and its **span** is the set of all such combinations
(Chapter 4).

## 5.1 Linear independence

Here is a question that sounds like bookkeeping but turns out to be the heart of the subject. You are given three
vectors in $\mathbb{R}^3$:

$$
v_1 = (1, 2, 3), \qquad v_2 = (4, 5, 6), \qquad v_3 = (7, 8, 9).
$$

Their span is the set of everything you can build from them. Do you really need all three? Look at the middle one: it
is exactly halfway between the other two, since $\tfrac12(v_1 + v_3) = \tfrac12(8, 10, 12) = (4, 5, 6)$. So
$v_2 = \tfrac12 v_1 + \tfrac12 v_3$, and anything built with $v_2$ can be rebuilt without it. The third vector added
nothing new. Rearranged, the same fact reads

$$
v_1 - 2 v_2 + v_3 = 0.
$$

*Check:* $(1 - 8 + 7,\; 2 - 10 + 8,\; 3 - 12 + 9) = (0, 0, 0)$.

A list where some vector is wasted like this is called dependent. The clean way to say it uses the zero vector.

**Definition.** A list $v_1, \ldots, v_k$ in $V$ is **linearly independent** if the only way to write the zero vector
as a combination of it is the trivial way:

$$
c_1 v_1 + c_2 v_2 + \cdots + c_k v_k = 0 \quad \text{implies} \quad c_1 = c_2 = \cdots = c_k = 0.
$$

Otherwise the list is **linearly dependent**: some combination with at least one nonzero coefficient gives $0$. Such a
combination is called a **linear relation** (or dependence relation) among the vectors. The empty list counts as
independent, since there is nothing to check.

Why phrase it with zero, instead of "no vector is a combination of the others"? Because the zero form treats all the
vectors equally and gives one equation to solve, not $k$ separate questions. The two versions say the same thing, as
the next result shows, and the proof is worth reading because the same small argument comes back again and again.

**Theorem 5.1 (linear dependence lemma).** Suppose $v_1, \ldots, v_k$ is linearly dependent. Then some $v_j$ is a
linear combination of the vectors before it, $v_1, \ldots, v_{j-1}$. (For $j = 1$ this means $v_1 = 0$.) Removing that
$v_j$ does not change the span.

*Proof.* Take a relation $c_1 v_1 + \cdots + c_k v_k = 0$ with not all $c_i$ zero, and let $j$ be the largest index
with $c_j \ne 0$. Then $c_1 v_1 + \cdots + c_j v_j = 0$, and dividing by $c_j$ (allowed, since $F$ is a field),

$$
v_j = -\frac{c_1}{c_j} v_1 - \cdots - \frac{c_{j-1}}{c_j} v_{j-1}.
$$

For the second claim, take any combination $a_1 v_1 + \cdots + a_k v_k$. Replace $v_j$ in it by the expression above;
you get a combination of the other vectors. So every vector in the span is still in the span without $v_j$. $\square$

Conversely, if one vector is a combination of the others, moving it to the other side gives a relation whose
coefficient on that vector is $1 \ne 0$. So "dependent" and "one vector is wasted" are the same.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 205" role="img" aria-label="Three panels. Left: two arrows u and v from a common origin pointing in different directions, labelled independent. Middle: two arrows on the same line, v twice as long as u, labelled dependent, v equals 2u. Right: three arrows u, v and w equal to u plus v, with dashed lines completing the parallelogram, labelled dependent, w equals u plus v.">
  <defs>
    <marker id="la5-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 z" fill="currentColor"/>
    </marker>
  </defs>
  <circle cx="60" cy="160" r="3" fill="currentColor"/>
  <line x1="60" y1="160" x2="160" y2="140" stroke="#eea66f" stroke-width="3" marker-end="url(#la5-arr)"/>
  <line x1="60" y1="160" x2="90" y2="50" stroke="#9cc9ea" stroke-width="3" marker-end="url(#la5-arr)"/>
  <text x="150" y="160" font-size="14" fill="currentColor">u</text>
  <text x="96" y="58" font-size="14" fill="currentColor">v</text>
  <text x="50" y="192" font-size="13" fill="currentColor">independent</text>
  <circle cx="260" cy="160" r="3" fill="currentColor"/>
  <line x1="260" y1="160" x2="400" y2="80" stroke="#9cc9ea" stroke-width="7" marker-end="url(#la5-arr)"/>
  <line x1="260" y1="160" x2="330" y2="120" stroke="#eea66f" stroke-width="3" marker-end="url(#la5-arr)"/>
  <text x="305" y="148" font-size="14" fill="currentColor">u</text>
  <text x="392" y="102" font-size="14" fill="currentColor">v</text>
  <text x="240" y="192" font-size="13" fill="currentColor">dependent: v = 2u</text>
  <circle cx="460" cy="160" r="3" fill="currentColor"/>
  <line x1="520" y1="150" x2="530" y2="70" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="470" y1="80" x2="530" y2="70" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="460" y1="160" x2="520" y2="150" stroke="#eea66f" stroke-width="3" marker-end="url(#la5-arr)"/>
  <line x1="460" y1="160" x2="470" y2="80" stroke="#9cc9ea" stroke-width="3" marker-end="url(#la5-arr)"/>
  <line x1="460" y1="160" x2="530" y2="70" stroke="#7ccf9a" stroke-width="3" marker-end="url(#la5-arr)"/>
  <text x="520" y="170" font-size="14" fill="currentColor">u</text>
  <text x="452" y="78" font-size="14" fill="currentColor">v</text>
  <text x="538" y="70" font-size="14" fill="currentColor">w</text>
  <text x="430" y="192" font-size="13" fill="currentColor">dependent: w = u + v</text>
</svg>
</div>

### Small cases

- **One vector.** The list $v$ is independent exactly when $v \ne 0$: if $v \ne 0$ and $cv = 0$ then $c = 0$ (multiply by
  $c^{-1}$ if $c \ne 0$ to get $v = 0$, a contradiction).
- **Two vectors.** $u, v$ is dependent exactly when one is a multiple of the other. In the plane or in space: when the two
  arrows lie on one line through the origin.
- **Any list containing $0$** is dependent: $1 \cdot 0 = 0$ is a nontrivial relation.
- **Any list with a repeated vector** is dependent: $1 \cdot v - 1 \cdot v = 0$.
- **Sublists.** A sublist of an independent list is independent (a relation in the sublist is a relation in the whole list,
  with zeros on the extra vectors). A list containing a dependent sublist is dependent.

### Testing independence by elimination

For vectors in $F^m$ the test is mechanical. Put the vectors as the **columns** of a matrix $A$. A combination
$c_1 v_1 + \cdots + c_k v_k$ is the product $A c$ with $c = (c_1, \ldots, c_k)$ (Chapter 3). So

> the columns of $A$ are independent exactly when $A c = 0$ has only the solution $c = 0$,

and Chapter 2 tells you how to decide that: row reduce, and look for free variables. No free variable means only the zero
solution; a free variable gives a nonzero solution, which is a relation.

**Worked example.** Are $u_1 = (1, 1, 0, 2)$, $u_2 = (2, 1, 1, 3)$, $u_3 = (0, 1, -1, 1)$ independent in $\mathbb{R}^4$?

Step 1: the matrix with these columns, and its row reduction.

$$
\begin{pmatrix} 1 & 2 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & -1 \\ 2 & 3 & 1 \end{pmatrix}
\;\longrightarrow\;
\begin{pmatrix} 1 & 2 & 0 \\ 0 & -1 & 1 \\ 0 & 1 & -1 \\ 0 & -1 & 1 \end{pmatrix}
\;\longrightarrow\;
\begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.
$$

(First subtract row 1 from row 2 and twice row 1 from row 4; then use row 2 to clear the second column.)

Step 2: the third column has no pivot, so $c_3$ is free. Set $c_3 = 1$: the rows say $c_1 + 2 c_3 = 0$ and
$c_2 - c_3 = 0$, so $c_1 = -2$, $c_2 = 1$.

Step 3: the relation is $-2 u_1 + u_2 + u_3 = 0$, that is, $u_3 = 2u_1 - u_2$. The list is dependent.

*Check:* $2u_1 - u_2 = (2 - 2,\; 2 - 1,\; 0 - 1,\; 4 - 3) = (0, 1, -1, 1) = u_3$.

Notice a bonus. Elimination did not only say "dependent"; the reduced matrix also shows *which* vectors are wasted
(those in columns with no pivot) and *how* they are built from the others (read off the entries in their column). This is
true in general, and it is the reason the pivot columns of a matrix will be so important in [Chapter 7](07-The-Four-Subspaces.md).

**A consequence you can see right away.** More than $m$ vectors in $F^m$ are always dependent. With $k > m$ columns and
only $m$ rows, there are at most $m$ pivots, so at least $k - m$ free variables. Four vectors in $\mathbb{R}^3$ always have
a relation. Section 5.3 proves a far stronger version of this for every vector space.

### The field matters

The vectors $(1, 0, 1)$, $(0, 1, 1)$, $(1, 1, 0)$ are independent in $\mathbb{R}^3$: row reduction gives three pivots (the
determinant, Chapter 8, is $-2 \ne 0$). Over the field $\mathbb{Z}/2$ of [Chapter 4](04-Vector-Spaces.md), where $1 + 1 = 0$,
the same three vectors add up to

$$
(1 + 0 + 1,\; 0 + 1 + 1,\; 1 + 1 + 0) = (0, 0, 0),
$$

a nontrivial relation. The same entries, a different field, a different answer. The row reduction over $\mathbb{R}$
divided by $-2$ at some point, and $-2 = 0$ in $\mathbb{Z}/2$. When you work over a finite field, do the elimination there.

### Independence beyond $F^m$

Independence makes sense in any vector space, and there it can need an idea rather than a matrix.

**Polynomials.** The list $1, x, x^2, \ldots, x^n$ is independent in the space of real polynomials. A relation
$c_0 + c_1 x + \cdots + c_n x^n = 0$ means that this polynomial is the zero *function*, zero at every real $x$. A nonzero
polynomial of degree at most $n$ has at most $n$ roots, so all $c_i$ must be $0$.

**Functions.** Are $\sin x$ and $\cos x$ independent in the space of functions $\mathbb{R} \to \mathbb{R}$? Suppose
$a \sin x + b \cos x = 0$ for **every** $x$. Put $x = 0$: $b = 0$. Put $x = \pi/2$: $a = 0$. Independent. The trick is
that an equation of functions holds at every point, so you may choose convenient points.

**Exponentials.** The functions $e^x$ and $e^{2x}$ are independent. If $a e^x + b e^{2x} = 0$ for all $x$, then at $x = 0$,
$a + b = 0$; differentiating the identity gives $a e^x + 2b e^{2x} = 0$, and at $x = 0$, $a + 2b = 0$. Subtracting, $b = 0$,
then $a = 0$.

**Matrices.** In the space of $2 \times 2$ matrices, the four matrices $E_{11}, E_{12}, E_{21}, E_{22}$, each with a single
entry $1$ and zeros elsewhere, are independent: $\sum c_{ij} E_{ij}$ is the matrix with entries $c_{ij}$, and it is zero
only when every $c_{ij}$ is.

## 5.2 Bases

Independence is about having no waste; spanning is about having enough. A list that does both is the ideal set of
building blocks.

**Definition.** A **basis** of $V$ is a list $v_1, \ldots, v_n$ of vectors in $V$ that is linearly independent and spans
$V$.

**Theorem 5.2 (unique coordinates).** A list $v_1, \ldots, v_n$ is a basis of $V$ if and only if every $v \in V$ can be
written in **exactly one** way as

$$
v = c_1 v_1 + c_2 v_2 + \cdots + c_n v_n .
$$

*Proof.* Suppose it is a basis. Since the list spans, every $v$ can be written in at least one way. If
$v = \sum c_i v_i = \sum d_i v_i$, subtract: $\sum (c_i - d_i) v_i = 0$. Independence forces every $c_i - d_i = 0$. So
the way is unique.

Conversely, suppose every vector can be written in exactly one way. Then in particular every vector can be written, so the
list spans. And $0$ can be written in only one way; since $0 = 0 v_1 + \cdots + 0 v_n$ is one way, any relation
$\sum c_i v_i = 0$ must have all $c_i = 0$. So the list is independent. $\square$

This is the reason bases matter: spanning gives **existence** of coefficients, independence gives **uniqueness**. The
unique numbers $c_1, \ldots, c_n$ are the **coordinates** of $v$ in that basis (section 5.4).

### The standard examples

- **$F^n$.** The **standard basis** $e_1 = (1, 0, \ldots, 0)$, $e_2 = (0, 1, 0, \ldots, 0)$, ..., $e_n = (0, \ldots, 0, 1)$.
  Every $(x_1, \ldots, x_n) = x_1 e_1 + \cdots + x_n e_n$ in exactly one way.
- **Polynomials of degree at most $n$**, written $P_n$: the basis $1, x, x^2, \ldots, x^n$. It spans by definition of
  "polynomial" and is independent by 5.1. So $P_n$ has a basis of $n + 1$ vectors.
- **Matrices.** The $m \times n$ matrices have the basis of the $mn$ matrices $E_{ij}$ with one entry $1$.
- **$\mathbb{C}$ over $\mathbb{R}$.** Every complex number is $a \cdot 1 + b \cdot i$ with unique real $a, b$: the basis
  is $1, i$. But $\mathbb{C}$ over $\mathbb{C}$ has the basis $1$ alone, since every $z = z \cdot 1$. The same set, two fields,
  two different sizes of basis.

A space has many bases, not one. In $\mathbb{R}^2$, any two vectors that are not on one line form a basis; for example
$(1, 1), (1, -1)$, or $(2, 1), (1, 3)$. The standard basis is just the most convenient one for $F^n$. Much of the rest
of this book is about finding a basis that suits a particular problem better than the standard one.

### Every spanning list contains a basis

**Theorem 5.3.** If a finite list spans $V$, some sublist of it is a basis of $V$.

*Proof.* Go through the list $w_1, \ldots, w_m$ from left to right. Throw $w_j$ away if it lies in the span of the
vectors kept so far; keep it otherwise. Each vector thrown away was already in the span of what was kept, so throwing it
away does not shrink the span (Theorem 5.1, second part): what is kept still spans $V$. And no kept vector is a combination
of the kept vectors before it, so by Theorem 5.1 the kept list is independent. $\square$

**Definition.** $V$ is **finite-dimensional** if some finite list spans it. By Theorem 5.3, a finite-dimensional space has
a basis. (The zero space $\{0\}$ has the empty list as its basis.)

**Worked example: a basis of a plane.** Find a basis of $U = \{(x, y, z) \in \mathbb{R}^3 : x + y + z = 0\}$.

Step 1: solve the defining equation. It says $x = -y - z$, with $y$ and $z$ free. So the vectors of $U$ are

$$
(x, y, z) = (-y - z,\; y,\; z) = y\,(-1, 1, 0) + z\,(-1, 0, 1).
$$

Step 2: so $(-1, 1, 0)$ and $(-1, 0, 1)$ span $U$. They are independent: look at the second and third entries of
$y(-1,1,0) + z(-1,0,1) = 0$, which say $y = 0$ and $z = 0$.

Step 3: they form a basis of $U$, so $U$ has a basis of 2 vectors. *Check:* both satisfy $x + y + z = 0$.

This "set the free variables to $1$ one at a time" recipe always works for the solution set of $Ax = 0$, and it always gives
an independent list, because each vector has a $1$ in its own free position where the others have $0$. You will meet it
again as the **special solutions** of [Chapter 7](07-The-Four-Subspaces.md).

### Every independent list can be extended to a basis

**Theorem 5.4.** In a finite-dimensional space, every independent list can be extended to a basis.

*Proof.* Let $u_1, \ldots, u_m$ be independent and let $w_1, \ldots, w_n$ span $V$. The combined list
$u_1, \ldots, u_m, w_1, \ldots, w_n$ spans $V$. Run the procedure of Theorem 5.3 on it. None of the $u_i$ is thrown away,
because each $u_i$ is not in the span of $u_1, \ldots, u_{i-1}$ (that would be a relation among the $u$'s). The result is a
basis that begins with $u_1, \ldots, u_m$. $\square$

**Worked example.** Extend $(1, 1, 0)$ to a basis of $\mathbb{R}^3$. Run the procedure on $(1,1,0), e_1, e_2, e_3$:
keep $(1,1,0)$; keep $e_1$ (not a multiple of $(1,1,0)$); throw away $e_2 = (1,1,0) - e_1$; keep $e_3$, since everything in
the span of $(1,1,0)$ and $e_1$ has third entry $0$. The basis is $(1, 1, 0), (1, 0, 0), (0, 0, 1)$.

## 5.3 The exchange lemma and dimension

The plane $U$ above has the basis $(-1, 1, 0), (-1, 0, 1)$. It also has the basis $(1, -1, 0), (1, 1, -2)$ (check that
both lie in $U$ and are not multiples of each other). Could some third basis of $U$ have three vectors, or one? If it could,
"dimension" would mean nothing. The theorem that rules this out is the first real theorem of linear algebra.

**Theorem 5.5 (exchange lemma, or replacement theorem).** In a vector space $V$, if $u_1, \ldots, u_m$ is linearly
independent and $w_1, \ldots, w_n$ spans $V$, then $m \le n$.

In words: **an independent list is never longer than a spanning list.** The proof swaps the $u$'s into the spanning list one
at a time, each time pushing out a $w$. If there were more $u$'s than $w$'s, you would run out of $w$'s to push out.

*Proof.* Start with the spanning list $B_0 = (w_1, \ldots, w_n)$. We will build lists $B_1, B_2, \ldots, B_m$, where
$B_j$ consists of $u_1, \ldots, u_j$ followed by $n - j$ of the $w$'s, and **every $B_j$ spans $V$**.

Step $j$ (for $j = 1, \ldots, m$). The list $B_{j-1}$ spans $V$, so $u_j$ is a combination of it. Put $u_j$ in front:

$$
u_j,\; u_1, \ldots, u_{j-1},\; (\text{the } n - j + 1 \text{ remaining } w\text{'s}).
$$

This list still spans and is dependent, since $u_j$ is a combination of the rest. Reorder it as
$u_1, \ldots, u_j, (\text{remaining } w\text{'s})$, which is the same set of vectors and still dependent. By the linear dependence
lemma (Theorem 5.1), some vector in it is a combination of the vectors before it. That vector cannot be one of
$u_1, \ldots, u_j$, because the $u$'s are independent, and a $u$ that is a combination of earlier $u$'s would give a
relation among them. So it is one of the $w$'s. Remove that $w$; the span does not change (Theorem 5.1 again). The result,
$B_j$, is $u_1, \ldots, u_j$ followed by $n - j$ of the $w$'s, and it spans $V$.

In particular, at every step there **was** a $w$ to remove. At step $j$ the list held $n - j + 1$ of the $w$'s, and this
number had to be at least $1$. Taking $j = m$: $n - m + 1 \ge 1$, so $m \le n$. $\square$

**Theorem 5.6 (dimension is well defined).** In a finite-dimensional vector space, any two bases have the same number of
vectors.

*Proof.* Let $B$ have $m$ vectors and $B'$ have $n$. $B$ is independent and $B'$ spans, so $m \le n$ by the exchange lemma.
$B'$ is independent and $B$ spans, so $n \le m$. Hence $m = n$. $\square$

**Definition.** The **dimension** of a finite-dimensional space $V$, written $\dim V$ (or $\dim_F V$ when the field needs
saying), is the number of vectors in any basis of $V$.

From the examples of 5.2:

| Space | A basis | Dimension |
|---|---|---|
| $F^n$ | $e_1, \ldots, e_n$ | $n$ |
| $P_n$, polynomials of degree $\le n$ | $1, x, \ldots, x^n$ | $n + 1$ |
| $m \times n$ matrices | the $E_{ij}$ | $mn$ |
| $\mathbb{C}$ over $\mathbb{R}$ | $1, i$ | $2$ |
| $\mathbb{C}$ over $\mathbb{C}$ | $1$ | $1$ |
| the plane $x + y + z = 0$ in $\mathbb{R}^3$ | $(-1,1,0), (-1,0,1)$ | $2$ |
| $\{0\}$ | the empty list | $0$ |

### What dimension buys you

Once $\dim V = n$ is known, the exchange lemma turns into a set of quick tests.

**Theorem 5.7.** Let $\dim V = n$.

1. Every independent list in $V$ has at most $n$ vectors; every spanning list has at least $n$.
2. An independent list of exactly $n$ vectors is a basis.
3. A spanning list of exactly $n$ vectors is a basis.

*Proof.* (1) A basis spans and has $n$ vectors, so an independent list has at most $n$ (exchange lemma); a basis is
independent with $n$ vectors, so a spanning list has at least $n$. (2) Extend the independent list to a basis (Theorem 5.4).
That basis has exactly $n$ vectors, so nothing was added: the list was already a basis. (3) Shrink the spanning list to a
basis (Theorem 5.3). It has $n$ vectors, so nothing was removed. $\square$

Parts 2 and 3 halve the work: to check that $n$ vectors in an $n$-dimensional space form a basis, you only need **one** of
the two conditions.

**Worked example.** Is $1,\; 1 + x,\; 1 + x + x^2$ a basis of $P_2$? Since $\dim P_2 = 3$ and there are three vectors, it is
enough to check independence. If $a \cdot 1 + b(1 + x) + c(1 + x + x^2) = 0$, the coefficient of $x^2$ gives $c = 0$, then
the coefficient of $x$ gives $b = 0$, then the constant gives $a = 0$. Yes, it is a basis.

**Infinite dimension.** The space $P$ of *all* polynomials is not finite-dimensional. A finite list of polynomials has a
largest degree $d$ among its members, and every combination of them has degree at most $d$, so $x^{d+1}$ is not in the span.
No finite list spans $P$. The same holds for the space of all functions $\mathbb{R} \to \mathbb{R}$, or all continuous ones,
since they contain $P$ (a subspace of a finite-dimensional space is finite-dimensional, by Theorem 5.8 below).

### A short history

The idea that a space has a "number of independent directions" is old in geometry, but making it precise for
abstract spaces took the nineteenth century. Hermann Grassmann's *Ausdehnungslehre* (1844, revised 1862) worked with linear
combinations, independence and dimension in a general setting, but its style kept readers away for decades. Giuseppe Peano
gave the first axiomatic definition of a real vector space in his *Calcolo geometrico* (1888), and in it defined dimension
as the largest number of independent elements. The exchange argument of Theorem 5.5 is usually named after Ernst Steinitz,
who used it in a 1913 paper, though the idea is older; it is often called the **Steinitz exchange lemma**. The modern
basis-free style of the subject spread through the 1920s and 1930s, and Paul Halmos's *Finite-Dimensional Vector Spaces*
(1942) set the pattern for teaching it.

### Expert remark: bases of infinite-dimensional spaces

*Level: expert.*

Does every vector space have a basis, even an infinite-dimensional one? For an infinite set $S$, "independent" means every
finite sublist is independent, and "spans" means every vector is a combination of finitely many members of $S$; such a basis
is called a **Hamel basis**. The polynomial space $P$ has the basis $1, x, x^2, \ldots$, and that is easy. But for
$\mathbb{R}$ as a vector space over $\mathbb{Q}$ nobody can write a basis down. That one exists follows from **Zorn's lemma**,
an axiom equivalent to the axiom of choice: a maximal independent set exists, and a maximal independent set must span (if
$v$ were outside the span, adding $v$ would keep it independent). In fact, Andreas Blass proved in 1984 that "every vector
space has a basis" is equivalent to the axiom of choice. In analysis, Hamel bases are rarely useful; spaces of functions are
studied instead with bases in which a vector is an *infinite* convergent sum, such as Fourier series
([Chapter 11](11-Inner-Product-Spaces.md) and [Chapter 20](20-Where-Linear-Algebra-Goes.md)).

## 5.4 Coordinates

A basis is a coordinate system. Once you fix a basis $B = (v_1, \ldots, v_n)$ of $V$, Theorem 5.2 gives every vector $v$ a
unique list of numbers.

**Definition.** If $v = c_1 v_1 + \cdots + c_n v_n$, the **coordinate vector** of $v$ in the basis $B$ is

$$
[v]_B = \begin{pmatrix} c_1 \\ \vdots \\ c_n \end{pmatrix} \in F^n .
$$

The order of the basis matters here, which is why a basis is a *list* and not a set.

**Worked example in the plane.** Take $B = (b_1, b_2)$ with $b_1 = (1, 1)$, $b_2 = (1, -1)$, and $v = (5, 1)$. Find $[v]_B$.

Step 1: write $v = a b_1 + c b_2 = (a + c,\; a - c)$.

Step 2: so $a + c = 5$ and $a - c = 1$. Adding, $2a = 6$, $a = 3$; then $c = 2$.

Step 3: $[v]_B = (3, 2)$. *Check:* $3(1,1) + 2(1,-1) = (5, 1)$.

In the picture, the standard grid of $\mathbb{R}^2$ is replaced by a grid tilted by $45°$: you reach $v$ by walking 3 steps
along $b_1$ and then 2 steps along $b_2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 205" role="img" aria-label="The plane with x and y axes. From the origin an arrow 3 b1 goes up and to the right at 45 degrees, then an arrow 2 b2 goes down and to the right at 45 degrees, ending at the point v equal to (5, 1). A thin dashed arrow goes straight from the origin to v.">
  <defs>
    <marker id="la5-arr2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 z" fill="currentColor"/>
    </marker>
  </defs>
  <line x1="20" y1="130" x2="300" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="195" x2="60" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="148" font-size="13" fill="currentColor">x</text>
  <text x="66" y="20" font-size="13" fill="currentColor">y</text>
  <line x1="85" y1="126" x2="85" y2="134" stroke="currentColor"/>
  <line x1="110" y1="126" x2="110" y2="134" stroke="currentColor"/>
  <line x1="135" y1="126" x2="135" y2="134" stroke="currentColor"/>
  <line x1="160" y1="126" x2="160" y2="134" stroke="currentColor"/>
  <line x1="185" y1="126" x2="185" y2="134" stroke="currentColor"/>
  <text x="181" y="150" font-size="12" fill="currentColor">5</text>
  <line x1="60" y1="130" x2="135" y2="55" stroke="#eea66f" stroke-width="3" marker-end="url(#la5-arr2)"/>
  <line x1="135" y1="55" x2="185" y2="105" stroke="#9cc9ea" stroke-width="3" marker-end="url(#la5-arr2)"/>
  <line x1="60" y1="130" x2="185" y2="105" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="185" cy="105" r="4" fill="#7ccf9a" stroke="currentColor"/>
  <text x="70" y="80" font-size="13" fill="currentColor">3 b1</text>
  <text x="166" y="72" font-size="13" fill="currentColor">2 b2</text>
  <text x="194" y="110" font-size="13" fill="currentColor">v = (5, 1)</text>
</svg>
</div>

**Worked example with polynomials.** In $P_2$ take the basis $B = (1,\; x - 1,\; (x - 1)^2)$ (it is a basis by the same
"look at the top coefficient" argument as in 5.3). Find the coordinates of $p(x) = x^2 + 3x + 2$.

Step 1: put $t = x - 1$, so $x = t + 1$.

Step 2: $p = (t + 1)^2 + 3(t + 1) + 2 = t^2 + 2t + 1 + 3t + 3 + 2 = t^2 + 5t + 6$.

Step 3: so $p = 6 \cdot 1 + 5 (x - 1) + 1 \cdot (x - 1)^2$, and $[p]_B = (6, 5, 1)$.

*Check:* $6 + 5x - 5 + x^2 - 2x + 1 = x^2 + 3x + 2$. These are the Taylor coefficients of $p$ at $x = 1$: $p(1) = 6$,
$p'(1) = 5$, $p''(1)/2 = 1$. A Taylor expansion is a change of coordinates in a space of polynomials.

### Coordinates turn every space into $F^n$

The coordinate map $v \mapsto [v]_B$ respects the operations: since coefficients add when vectors add,

$$
[u + v]_B = [u]_B + [v]_B, \qquad [c\,v]_B = c\,[v]_B .
$$

(If $u = \sum a_i v_i$ and $v = \sum b_i v_i$ then $u + v = \sum (a_i + b_i) v_i$, and these are *the* coordinates by
uniqueness.) It is one-to-one, because coordinates determine the vector, and onto, because every list $(c_1, \ldots, c_n)$ is
the coordinate vector of $\sum c_i v_i$. In the language of [Chapter 6](06-Linear-Maps.md), it is an **isomorphism**
$V \to F^n$.

The practical meaning is large. Every question about independence, span or dimension in an $n$-dimensional space can be
translated into the same question about coordinate vectors in $F^n$, and answered there by elimination. For example, to decide
whether $p_1 = 1 + x^2$, $p_2 = x + x^2$, $p_3 = 1 + 2x + 3x^2$ are independent in $P_2$, write their coordinates in the
basis $1, x, x^2$, namely $(1,0,1)$, $(0,1,1)$, $(1,2,3)$, and test those. Here $(1,2,3) = (1,0,1) + 2(0,1,1)$, so
$p_3 = p_1 + 2p_2$ and the list is dependent. *Check:* $1 + x^2 + 2x + 2x^2 = 1 + 2x + 3x^2$.

The same translation is why the rest of this book can work mostly with columns of numbers without losing generality: any
finite-dimensional space, once a basis is chosen, *is* $F^n$ in disguise. What a choice of basis cannot do is make the
answers depend on that choice, and much of the theory ahead ([Chapter 6](06-Linear-Maps.md), 6.6) is about separating what
depends on the basis from what does not.

### Try it in Python

Coordinates in a basis of $\mathbb{R}^n$ are the solution of one linear system: if the basis vectors are the columns of a
matrix $P$, then $v = P\,[v]_B$. With exact fractions (standard library only):

```python
from fractions import Fraction as Fr

def solve(P, v):
    """Solve P c = v by Gauss-Jordan elimination (P square, invertible)."""
    n = len(P)
    M = [[Fr(P[i][j]) for j in range(n)] + [Fr(v[i])] for i in range(n)]
    for col in range(n):
        piv = next(r for r in range(col, n) if M[r][col] != 0)
        M[col], M[piv] = M[piv], M[col]
        M[col] = [x / M[col][col] for x in M[col]]
        for r in range(n):
            if r != col:
                M[r] = [a - M[r][col] * b for a, b in zip(M[r], M[col])]
    return [row[-1] for row in M]

P = [[1, 1],
     [1, -1]]          # columns b1 = (1, 1), b2 = (1, -1)
print(solve(P, [5, 1]))  # [Fraction(3, 1), Fraction(2, 1)]
```

## 5.5 Dimensions of subspaces, sums and intersections

*Level: intermediate to advanced.*

Two planes through the origin in $\mathbb{R}^3$ that are not the same plane always meet in a line. Two planes through the
origin in $\mathbb{R}^4$ can meet in just the origin. Why? The answer is a counting formula for subspaces, and this section
proves it.

### Subspaces are no bigger than the space

**Theorem 5.8.** If $V$ is finite-dimensional and $U$ is a subspace of $V$, then $U$ is finite-dimensional and
$\dim U \le \dim V$, with equality only if $U = V$.

*Proof.* Let $n = \dim V$. Build a list in $U$: start empty; while the list does not span $U$, add a vector of $U$ outside its
span. Each added vector keeps the list independent (Theorem 5.1: if the new list were dependent, some vector would be a
combination of the earlier ones; it is not one of the old ones, which were independent, and it is not the new one, which was
chosen outside their span). An independent list in $V$ has at most $n$ vectors, so the process stops after at most $n$ steps,
and when it stops the list is a basis of $U$. So $\dim U \le n$. If $\dim U = n$, a basis of $U$ is an independent list of
$n$ vectors in $V$, hence a basis of $V$ (Theorem 5.7), so $U = V$. $\square$

So the subspaces of $\mathbb{R}^3$ come in exactly four sizes: $\{0\}$ (dimension 0), lines through the origin (1), planes
through the origin (2), and $\mathbb{R}^3$ itself (3). Nothing else is possible: a subspace of dimension 3 is all of
$\mathbb{R}^3$.

### Sums and intersections

If $U$ and $W$ are subspaces of $V$, two new subspaces come from them.

- The **intersection** $U \cap W$, the vectors in both. It is a subspace: it contains $0$, and if $u, v$ are in both, so
  are $u + v$ and $cu$.
- The **sum** $U + W = \{u + w : u \in U,\ w \in W\}$, everything you can get by adding a vector of $U$ to a vector of $W$.
  It is a subspace (it contains $0 = 0 + 0$, and $(u + w) + (u' + w') = (u + u') + (w + w')$, $c(u + w) = cu + cw$), and it is
  the smallest subspace containing both $U$ and $W$. If $U$ is spanned by a list and $W$ by another, then $U + W$ is spanned
  by the two lists put together.

(The union $U \cup W$ is usually *not* a subspace: the union of the $x$-axis and the $y$-axis in $\mathbb{R}^2$ contains
$(1,0)$ and $(0,1)$ but not their sum.)

**Theorem 5.9 (dimension formula).** If $U$ and $W$ are finite-dimensional subspaces of $V$, then

$$
\dim(U + W) = \dim U + \dim W - \dim(U \cap W).
$$

It looks like the counting rule $|A \cup B| = |A| + |B| - |A \cap B|$ for finite sets, and the idea of the proof is the same:
the intersection would be counted twice.

*Proof.* Let $x_1, \ldots, x_k$ be a basis of $U \cap W$, so $k = \dim(U \cap W)$. It is an independent list in $U$, so extend
it to a basis $x_1, \ldots, x_k, u_1, \ldots, u_p$ of $U$ (Theorem 5.4); then $\dim U = k + p$. Likewise extend it to a basis
$x_1, \ldots, x_k, w_1, \ldots, w_q$ of $W$, so $\dim W = k + q$. We show that the combined list

$$
x_1, \ldots, x_k,\; u_1, \ldots, u_p,\; w_1, \ldots, w_q
$$

is a basis of $U + W$. Then $\dim(U + W) = k + p + q = (k + p) + (k + q) - k$, which is the formula.

*It spans $U + W$.* Every vector of $U + W$ is $u + w$ with $u \in U$, $w \in W$. Here $u$ is a combination of the $x$'s and
$u$'s, and $w$ of the $x$'s and $w$'s, so $u + w$ is a combination of the combined list.

*It is independent.* Suppose

$$
a_1 x_1 + \cdots + a_k x_k + b_1 u_1 + \cdots + b_p u_p + c_1 w_1 + \cdots + c_q w_q = 0 .
$$

Move the $w$-part to the other side and call it $y$:

$$
y = c_1 w_1 + \cdots + c_q w_q = -(a_1 x_1 + \cdots + a_k x_k + b_1 u_1 + \cdots + b_p u_p).
$$

The first expression shows $y \in W$; the second shows $y \in U$. So $y \in U \cap W$, and $y = d_1 x_1 + \cdots + d_k x_k$ for
some scalars $d_i$. Then $c_1 w_1 + \cdots + c_q w_q - d_1 x_1 - \cdots - d_k x_k = 0$, a relation in the basis of $W$, so all
$c_j = 0$ (and all $d_i = 0$). Now the original relation reads $\sum a_i x_i + \sum b_j u_j = 0$, a relation in the basis of
$U$, so all $a_i = 0$ and $b_j = 0$. $\square$

### What the formula says

**Two planes in $\mathbb{R}^3$.** Let $U \ne W$ be planes through the origin. Then $U + W$ is a subspace strictly bigger than
$U$ (it contains $W \not\subseteq U$), so by Theorem 5.8 its dimension is 3. The formula gives
$3 = 2 + 2 - \dim(U \cap W)$, so $\dim(U \cap W) = 1$: they meet in a line. That is the fact from the start of the section,
now proved without a picture.

**Two planes in $\mathbb{R}^4$.** Now $\dim(U + W) \le 4$, so $\dim(U \cap W) = 4 - \dim(U + W) \ge 0$, and $0$ is allowed.
For example, $U = \operatorname{span}(e_1, e_2)$ and $W = \operatorname{span}(e_3, e_4)$ meet only in $0$. This is one of the
first places where intuition from three dimensions fails.

**General lower bound.** Since $\dim(U + W) \le \dim V$, the formula gives

$$
\dim(U \cap W) \ge \dim U + \dim W - \dim V .
$$

Two subspaces that are "big enough" are forced to share a nonzero vector. Two 3-dimensional subspaces of $\mathbb{R}^5$ share
at least a line; two 6-dimensional subspaces of $\mathbb{R}^{10}$ share at least a plane.

**Worked example.** In $\mathbb{R}^4$ let

$$
U = \operatorname{span}\big((1,0,1,0),\,(0,1,0,1)\big), \qquad W = \operatorname{span}\big((1,1,1,1),\,(1,0,0,0)\big).
$$

Step 1: the dimensions of $U$ and $W$. Each spanning pair is independent (neither vector is a multiple of the other), so
$\dim U = \dim W = 2$.

Step 2: describe $U$. A vector $a(1,0,1,0) + b(0,1,0,1) = (a, b, a, b)$, so $U$ is the set of vectors with $x_1 = x_3$ and
$x_2 = x_4$.

Step 3: the intersection. A vector of $W$ is $c(1,1,1,1) + d(1,0,0,0) = (c + d,\; c,\; c,\; c)$. It lies in $U$ when
$c + d = c$ and $c = c$, that is, when $d = 0$. So $U \cap W = \operatorname{span}(1,1,1,1)$, of dimension 1.

Step 4: the formula predicts $\dim(U + W) = 2 + 2 - 1 = 3$.

*Check:* $U + W$ is spanned by the four vectors together. Since $(1,1,1,1) = (1,0,1,0) + (0,1,0,1)$, it is spanned by
$(1,0,1,0), (0,1,0,1), (1,0,0,0)$. These are independent: $(1,0,0,0)$ is not in $U$ (its first and third entries differ),
and the other two are independent. So $\dim(U + W) = 3$.

### Direct sums

When $U \cap W = \{0\}$ the formula becomes $\dim(U + W) = \dim U + \dim W$, nothing is counted twice, and something more is
true.

**Definition.** The sum $U + W$ is **direct**, written $U \oplus W$, if every vector of $U + W$ can be written as $u + w$ in
**only one** way.

**Theorem 5.10.** $U + W$ is direct if and only if $U \cap W = \{0\}$.

*Proof.* If $v \in U \cap W$ is nonzero, then $0 = 0 + 0 = v + (-v)$ are two different ways to write $0$, so the sum is not
direct. Conversely, if $U \cap W = \{0\}$ and $u + w = u' + w'$, then $u - u' = w' - w$ lies in $U$ and in $W$, so it is $0$,
giving $u = u'$ and $w = w'$. $\square$

**Theorem 5.11 (complements).** Every subspace $U$ of a finite-dimensional $V$ has a **complement**: a subspace $W$ with
$V = U \oplus W$.

*Proof.* Extend a basis $u_1, \ldots, u_k$ of $U$ to a basis $u_1, \ldots, u_k, w_1, \ldots, w_m$ of $V$, and let
$W = \operatorname{span}(w_1, \ldots, w_m)$. Every vector of $V$ is (combination of $u$'s) + (combination of $w$'s), so
$V = U + W$; and $\dim(U \cap W) = \dim U + \dim W - \dim V = k + m - (k + m) = 0$. $\square$

A complement is **not** unique. In $\mathbb{R}^2$, every line through the origin other than the $x$-axis is a complement of the
$x$-axis. Choosing a *best* complement needs more structure, namely angles: the perpendicular complement of
[Chapter 11](11-Inner-Product-Spaces.md). The four subspaces of a matrix in [Chapter 7](07-The-Four-Subspaces.md) are the first
place where these perpendicular complements appear on their own.

### Counting over a finite field

*Level: advanced.*

Over $\mathbb{Z}/2$, or any finite field $\mathbb{F}_q$ with $q$ elements, dimension becomes a count. If $\dim V = n$, the
coordinate map is a one-to-one correspondence between $V$ and $\mathbb{F}_q^n$, so

$$
|V| = q^{\,n}.
$$

A subspace of dimension $k$ has exactly $q^k$ elements. That gives a quick way to count bases.

**Theorem 5.12.** The number of ordered bases of $\mathbb{F}_q^n$ is

$$
(q^n - 1)(q^n - q)(q^n - q^2) \cdots (q^n - q^{n-1}).
$$

*Proof.* Choose the basis one vector at a time, keeping the list independent. The first vector can be anything except $0$:
$q^n - 1$ choices. Once $j$ independent vectors are chosen, they span a subspace with $q^j$ elements, and the next vector may be
anything outside it (Theorem 5.1): $q^n - q^j$ choices. After $n$ vectors, the list is independent of length $n$, hence a basis
(Theorem 5.7). Multiply the choices. $\square$

For $\mathbb{Z}/2$ and $n = 3$: $(8 - 1)(8 - 2)(8 - 4) = 7 \cdot 6 \cdot 4 = 168$. These ordered bases are the columns of the
invertible $3 \times 3$ matrices over $\mathbb{Z}/2$, so there are 168 of those; they form the group
$GL_3(\mathbb{F}_2)$, which is also the symmetry group of the seven-point Fano plane. And the lines through the origin of
$\mathbb{F}_2^3$, the 1-dimensional subspaces, are $\{0, v\}$ for each of the $7$ nonzero $v$: seven of them, the seven points of
the Fano plane ([Geometry, Chapter 18](../geometry/18-Projective-Geometry.md)). Counts of this kind are the bread and butter of
coding theory ([Chapter 7](07-The-Four-Subspaces.md), 7.5).

**Field extensions.** Dimension also measures how big one field is over another. If $K$ is a field containing a smaller field
$F$, then $K$ is a vector space over $F$, and $\dim_F K$ is called the **degree** $[K : F]$. For example
$[\mathbb{C} : \mathbb{R}] = 2$, and $\mathbb{Q}(\sqrt 2) = \{a + b\sqrt 2 : a, b \in \mathbb{Q}\}$ has degree 2 over
$\mathbb{Q}$ with basis $1, \sqrt 2$. The tower law $[L : F] = [L : K][K : F]$ is proved by multiplying bases, an argument in the
spirit of Theorem 5.9; see [Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md), where it settles the ancient
problems of trisecting an angle and doubling a cube.

## Check yourself

??? question "1. Are $(1, 2)$ and $(-3, -6)$ independent in $\mathbb{R}^2$? Are $(1, 2)$ and $(2, 1)$?"

    $(-3, -6) = -3(1, 2)$, so $3(1,2) + 1(-3,-6) = 0$ is a nontrivial relation: dependent. For $(1,2), (2,1)$: neither is a
    multiple of the other (a multiple of $(1,2)$ has second entry twice the first, and $(2,1)$ does not), so they are
    independent, and since $\dim \mathbb{R}^2 = 2$ they form a basis.

??? question "2. Find a linear relation among $(1, 0, 2)$, $(0, 1, 1)$, $(2, 3, 7)$, or show there is none."

    Try $(2,3,7) = a(1,0,2) + b(0,1,1) = (a, b, 2a + b)$. The first two entries force $a = 2$, $b = 3$, and then the third is
    $2 \cdot 2 + 3 = 7$. It works: $2(1,0,2) + 3(0,1,1) - (2,3,7) = 0$. *Check:* $(2 + 0 - 2,\; 0 + 3 - 3,\; 4 + 3 - 7) = 0$.

??? question "3. Show that $\sin x$, $\cos x$ and $\sin(x + 1)$ are linearly dependent functions."

    By the addition formula, $\sin(x + 1) = \cos 1 \cdot \sin x + \sin 1 \cdot \cos x$ for every $x$. So
    $\cos 1 \cdot \sin x + \sin 1 \cdot \cos x - \sin(x + 1) = 0$, a relation with the coefficient $-1 \ne 0$. They are dependent:
    the span of $\sin x$ and $\cos x$ already contains every shifted sine wave.

??? question "4. Find a basis and the dimension of the space of $2 \times 2$ real symmetric matrices (those with $A^T = A$)."

    A symmetric $2 \times 2$ matrix is $\begin{pmatrix} a & b \\ b & c \end{pmatrix} = a \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + b \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + c \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$.
    The three matrices on the right span, and they are independent because the combination is zero only when $a = b = c = 0$.
    So the dimension is 3. (In general, $n \times n$ symmetric matrices have dimension $n(n+1)/2$.)

??? question "5. Let $U = \{p \in P_3 : p(1) = 0\}$. Find a basis of $U$ and its dimension."

    By the factor theorem, $p(1) = 0$ exactly when $p(x) = (x - 1) q(x)$ with $q \in P_2$. So $U$ is spanned by
    $(x-1),\ (x-1)x,\ (x-1)x^2$, or more neatly by $x - 1,\ (x - 1)^2,\ (x - 1)^3$. These are independent (their degrees are
    $1, 2, 3$, so in a relation the top coefficient forces the $(x-1)^3$ coefficient to be $0$, then the next, and so on).
    So $\dim U = 3$. Another view: $U$ is a proper subspace of $P_3$ (it misses the constant $1$), so $\dim U \le 3$, and it
    contains three independent vectors.

??? question "6. Is $(1, 1, 0)$, $(0, 1, 1)$, $(1, 0, 1)$ a basis of $\mathbb{R}^3$? Of $(\mathbb{Z}/2)^3$?"

    Over $\mathbb{R}$: if $a(1,1,0) + b(0,1,1) + c(1,0,1) = 0$ then $a + c = 0$, $a + b = 0$, $b + c = 0$. Adding all three,
    $2(a + b + c) = 0$, so $a + b + c = 0$, and subtracting each equation gives $b = 0$, $c = 0$, $a = 0$. Three independent
    vectors in a 3-dimensional space: a basis. Over $\mathbb{Z}/2$: the sum of the three vectors is $(2,2,2) = (0,0,0)$, a
    nontrivial relation, so it is not a basis. The step "divide by 2" fails when $2 = 0$.

??? question "7. Find the coordinates of $(2, 7)$ in the basis $b_1 = (1, 2)$, $b_2 = (1, 3)$ of $\mathbb{R}^2$."

    Solve $a(1,2) + c(1,3) = (2,7)$: $a + c = 2$ and $2a + 3c = 7$. From the first, $a = 2 - c$; then $4 - 2c + 3c = 7$, so
    $c = 3$ and $a = -1$. The coordinates are $(-1, 3)$. *Check:* $-(1,2) + 3(1,3) = (2, 7)$.

??? question "8. Two 3-dimensional subspaces $U$ and $W$ of $\mathbb{R}^5$ are given. What are the possible values of $\dim(U \cap W)$?"

    By the dimension formula $\dim(U \cap W) = 6 - \dim(U + W)$, and $U + W$ contains $U$, so $3 \le \dim(U + W) \le 5$.
    Hence $1 \le \dim(U \cap W) \le 3$. All three values happen: $U = W$ gives 3; $U = \operatorname{span}(e_1, e_2, e_3)$ and
    $W = \operatorname{span}(e_1, e_2, e_4)$ give 2; $U = \operatorname{span}(e_1, e_2, e_3)$ and $W = \operatorname{span}(e_3, e_4, e_5)$
    give 1. They can never meet in only the origin.

??? question "9. Prove that $e^x$, $e^{2x}$, $e^{3x}$ are linearly independent."

    Suppose $a e^x + b e^{2x} + c e^{3x} = 0$ for all $x$. Differentiate twice and set $x = 0$ in the identity and its two
    derivatives: $a + b + c = 0$, $a + 2b + 3c = 0$, $a + 4b + 9c = 0$. Subtracting the first from the second and the second
    from the third gives $b + 2c = 0$ and $2b + 6c = 0$, so $2c = 0$, then $c = 0$, $b = 0$, $a = 0$. (The matrix of this
    system is a Vandermonde matrix, which [Chapter 8](08-Determinants.md) shows is invertible whenever the rates $1, 2, 3$ are
    distinct; the same proof works for $e^{\lambda_1 x}, \ldots, e^{\lambda_n x}$ with distinct $\lambda_i$.)

??? question "10. How many 1-dimensional subspaces does $(\mathbb{Z}/2)^4$ have? How many 2-dimensional ones?"

    A 1-dimensional subspace is $\{0, v\}$ for a nonzero $v$, and different nonzero $v$ give different subspaces (the only
    nonzero multiple of $v$ over $\mathbb{Z}/2$ is $v$). So there are $2^4 - 1 = 15$. For dimension 2, count ordered bases of
    a 2-dimensional subspace inside $\mathbb{F}_2^4$: the number of ordered independent pairs is $(16 - 1)(16 - 2) = 210$, and
    each 2-dimensional subspace has $(4 - 1)(4 - 2) = 6$ ordered bases (Theorem 5.12 with $n = 2$). So there are
    $210 / 6 = 35$ such subspaces.

??? question "11. Show that $P$, the space of all real polynomials, contains independent lists of every length, and deduce once more that it is infinite-dimensional."

    For every $n$, the list $1, x, \ldots, x^n$ has $n + 1$ vectors and is independent (a nonzero polynomial has finitely many
    roots). If $P$ were spanned by a list of length $m$, the exchange lemma would say every independent list has at most $m$
    vectors; but $1, x, \ldots, x^m$ has $m + 1$. So no finite list spans $P$.

??? question "12. Let $U$ and $W$ be subspaces of $V$ with $\dim V = 10$, $\dim U = 7$, $\dim W = 6$. Show that $U \cap W$ contains a nonzero vector, and that $U + W$ cannot be a direct sum."

    $\dim(U \cap W) = 7 + 6 - \dim(U + W) \ge 13 - 10 = 3$. So the intersection has dimension at least 3, and in particular
    contains nonzero vectors. By Theorem 5.10 a sum is direct only when the intersection is $\{0\}$, so this one is not.

## What you learned

- A list is **linearly independent** when only the trivial combination gives $0$; it is dependent exactly when some vector is
  a combination of the earlier ones, and that vector can be dropped without changing the span.
- For vectors in $F^m$, independence is tested by elimination: the columns of $A$ are independent exactly when $Ax = 0$ has
  no free variables. The answer depends on the field.
- A **basis** is an independent spanning list; it gives every vector unique **coordinates**.
- Spanning lists shrink to bases and independent lists grow to bases.
- The **exchange lemma**: an independent list is never longer than a spanning list. So all bases have the same length, the
  **dimension**, and $n$ vectors in an $n$-dimensional space are a basis as soon as they are independent or as soon as they span.
- Choosing a basis identifies any $n$-dimensional space with $F^n$.
- Subspaces have smaller dimension, and $\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$; the sum is direct exactly when the
  intersection is $\{0\}$. Over $\mathbb{F}_q$, a $k$-dimensional space has $q^k$ elements.

**Next:** [Chapter 6](06-Linear-Maps.md), the maps between vector spaces that respect addition and scaling, and the
rank-nullity theorem that balances what a map destroys against what it reaches.

## Further reading

- S. Axler, *Linear Algebra Done Right*, 4th edition, Springer, 2024 (chapter 2 follows the same route: the dependence lemma,
  then the exchange argument).
- P. R. Halmos, *Finite-Dimensional Vector Spaces*, 2nd edition, Van Nostrand, 1958.
- S. H. Friedberg, A. J. Insel and L. E. Spence, *Linear Algebra*, 4th edition, Prentice Hall, 2003 (the replacement
  theorem, section 1.6).
- K. Hoffman and R. Kunze, *Linear Algebra*, 2nd edition, Prentice Hall, 1971.
- G. Strang, *Introduction to Linear Algebra*, 6th edition, Wellesley-Cambridge Press, 2023.
- A. Blass, "Existence of bases implies the axiom of choice", in *Axiomatic Set Theory*, Contemporary Mathematics 31, American
  Mathematical Society, 1984.
- On this site: the U of T guides [MAT240 Unit 2, Subspaces, Span and Independence](../../uoft/MAT240H1/unit02.md) and
  [MAT240 Unit 3, Bases and Dimension](../../uoft/MAT240H1/unit03.md); degrees of field extensions in
  [Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md); vectors with pictures in
  [Geometry, Chapter 9](../geometry/09-Vectors.md); the Topics lesson
  [Vectors: adding, scaling, length, components](../../topics/geometry/level-8/04-vectors.md) for a gentle start; the
  [Linear algebra book index](index.md).
