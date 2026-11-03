# 6. Linear maps

*A rotation of the plane, the shadow a light casts on a wall, and the derivative of a polynomial look like three different
things. Yet each one respects the two operations of a vector space: it sends a sum to the sum of the results, and a multiple
to the same multiple of the result. Maps with this property are called linear, and they are what linear algebra is really
about; matrices are only the way to write them down. In this chapter you will meet linear maps in their own right, find what
each one destroys (its kernel) and what it reaches (its image), and prove the rank-nullity theorem that balances the two. Then
you will see how a choice of bases turns any linear map into a matrix, and how changing those bases changes the matrix,
which is the first step towards finding the simplest matrix for a given map.*

!!! abstract "In this chapter"
    **You will learn:**

    - the definition of a linear map, with examples (rotations, projections, the derivative, evaluation) and non-examples
    - that a linear map is completely determined by what it does to a basis
    - kernel and image, and why a map is one-to-one exactly when its kernel is $\{0\}$
    - the rank-nullity theorem, its proof, and its consequences for equations and interpolation
    - how to build the matrix of a linear map in chosen bases, and why composition becomes matrix multiplication
    - isomorphisms, and why two finite-dimensional spaces over the same field are isomorphic exactly when they have the same dimension
    - change of basis, similar matrices, and the quantities (rank, trace) that do not depend on the basis

    **You need:** [Chapter 5](05-Independence-Bases-and-Dimension.md) (bases, dimension, coordinates), matrix
    multiplication and inverses from [Chapter 3](03-Matrices.md). For a gentler start with maps of the plane, the Topics
    lesson [Transformations on the grid](../../topics/geometry/level-5/03-transformations-grid.md) and
    [Geometry, Chapter 10](../geometry/10-Transformations-and-Symmetry.md). The U of T guides
    [MAT240 Unit 4, Linear Transformations](../../uoft/MAT240H1/unit04.md),
    [Unit 5, Rank-Nullity and Matrices](../../uoft/MAT240H1/unit05.md) and
    [Unit 6, Change of Basis and Similarity](../../uoft/MAT240H1/unit06.md) cover the same ground.

    **Levels:** 6.1, 6.2 and 6.4 are intermediate; 6.3, 6.5 and 6.6 are intermediate to advanced (first-year university proofs).

Throughout, $V$ and $W$ are vector spaces over the same field $F$.

## 6.1 Linear maps

Rotate the plane about the origin by an angle $\theta$. Take two arrows $u$ and $v$, add them by the parallelogram rule, and
rotate the sum. Or rotate $u$ and $v$ first, and then add. You get the same arrow, because rotating the whole parallelogram
gives a parallelogram. Likewise, rotating $2u$ gives twice the rotated $u$: rotation does not change lengths, so it does not
care whether you double before or after. That is the whole idea of linearity.

**Definition.** A function $T : V \to W$ is a **linear map** (or **linear transformation**) if for all $u, v \in V$ and all
scalars $c \in F$,

$$
T(u + v) = T(u) + T(v), \qquad T(c\,v) = c\,T(v).
$$

The two rules together say that $T$ **preserves linear combinations**:

$$
T(c_1 v_1 + c_2 v_2 + \cdots + c_k v_k) = c_1 T(v_1) + c_2 T(v_2) + \cdots + c_k T(v_k).
$$

(Apply the first rule $k - 1$ times and then the second rule to each term.) A linear map from $V$ to itself is often called a
**linear operator** on $V$. The set of all linear maps $V \to W$ is written $\mathcal{L}(V, W)$.

Two facts follow at once. First, $T(0) = 0$: take $c = 0$ in the second rule, $T(0) = T(0 \cdot 0) = 0 \cdot T(0) = 0$. Second,
$T(-v) = -T(v)$, by $c = -1$. The first fact gives a quick test for non-linearity: **a map that moves the origin is not linear**.

### Examples

**1. Matrix maps.** For an $m \times n$ matrix $A$, the map $T(x) = Ax$ from $F^n$ to $F^m$ is linear, because
$A(x + y) = Ax + Ay$ and $A(cx) = c\,Ax$ (Chapter 3). Section 6.4 shows that, once bases are chosen, every linear map between
finite-dimensional spaces is of this form.

**2. Rotation of the plane.** Let $R_\theta$ rotate $\mathbb{R}^2$ anticlockwise by $\theta$ about the origin. The argument at
the start of this section shows it is linear. Where does it send the standard basis? The point $(1, 0)$ on the unit circle goes
to $(\cos\theta, \sin\theta)$, and $(0, 1)$, a quarter turn further round, goes to $(\cos(\theta + 90°), \sin(\theta + 90°)) = (-\sin\theta, \cos\theta)$.
By linearity,

$$
R_\theta(x, y) = x\,(\cos\theta, \sin\theta) + y\,(-\sin\theta, \cos\theta) = (x\cos\theta - y\sin\theta,\; x\sin\theta + y\cos\theta).
$$

*Check with $\theta = 30°$:* $R_{30°}(2, 0) = (2 \cdot \tfrac{\sqrt3}{2},\ 2 \cdot \tfrac12) = (\sqrt 3, 1)$, a point at
distance $\sqrt{3 + 1} = 2$ from the origin and at angle $30°$, as it should be.

The same kind of map, in three dimensions, describes how a spacecraft or a rover is turned relative to the ground: the
vectors measured in the vehicle's own frame (where its camera points, which way is "forward") are carried to the map's frame by
a rotation. Rotations in space get their own chapter, [Chapter 13](13-Orthogonal-Matrices-and-Rotations.md).

**3. Projection onto a line.** Let $L$ be the line $y = x$ in $\mathbb{R}^2$, and let $P$ send each point to the foot of the
perpendicular from it to $L$. The unit vector along $L$ is $u = \tfrac{1}{\sqrt2}(1, 1)$, and the foot of the perpendicular from
$v$ is $(v \cdot u)\,u$ ([Chapter 1](01-Vectors.md)). So

$$
P(x, y) = \frac{x + y}{2}\,(1, 1),
$$

which is linear because $v \mapsto v \cdot u$ is. *Check:* $P(3, 1) = (2, 2)$, and $(3,1) - (2,2) = (1, -1)$ is perpendicular to
$(1,1)$. Projections are the subject of [Chapter 12](12-Projections-and-Least-Squares.md).

**4. The derivative.** Let $P_n$ be the polynomials of degree at most $n$. Differentiation $D(p) = p'$ is a map
$P_n \to P_{n-1}$, and the rules $(p + q)' = p' + q'$ and $(cp)' = c\,p'$ from calculus say exactly that $D$ is linear. The same
holds for the derivative on differentiable functions, and for the integral $p \mapsto \int_0^x p(t)\,dt$. In this sense
calculus is built on two linear maps; the derivative of a function of several variables is itself defined as a linear map
([Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md)).

**5. Evaluation.** Fix a number $a$. The map $p \mapsto p(a)$ from $P_n$ to $\mathbb{R}$ is linear:
$(p + q)(a) = p(a) + q(a)$ and $(cp)(a) = c\,p(a)$. So is $p \mapsto (p(a_0), p(a_1), \ldots, p(a_n))$ into $\mathbb{R}^{n+1}$.

**6. Trace and transpose.** On $n \times n$ matrices, the **trace** $\operatorname{tr} A = a_{11} + a_{22} + \cdots + a_{nn}$, the
sum of the diagonal entries, is a linear map to $F$. The transpose $A \mapsto A^T$ is a linear operator.

**7. The zero map and the identity.** $0(v) = 0$ and $I(v) = v$ are linear.

### Non-examples

- **Translation** $T(v) = v + a$ with $a \ne 0$: it moves the origin, $T(0) = a \ne 0$.
- **Squaring** $T(x) = x^2$ on $\mathbb{R}$: $T(2 \cdot 1) = 4$ but $2\,T(1) = 2$.
- **Length** $T(v) = |v|$: $T(-v) = T(v)$, not $-T(v)$.
- **The map $T(x, y) = (x + 1, y)$**: again $T(0, 0) = (1, 0)$.
- **Complex conjugation** $z \mapsto \bar z$ is linear on $\mathbb{C}$ as a vector space over $\mathbb{R}$, but **not** over
  $\mathbb{C}$: $\overline{i \cdot 1} = -i$, while $i \cdot \bar 1 = i$. Linearity depends on the field of scalars.

The function $f(x) = 3x + 2$ that school algebra calls "linear" is not linear in this sense, because of the $+2$. Maps of the form
"linear map plus a constant vector" are called **affine**. They matter in geometry and graphics
([Chapter 19](19-Linear-Algebra-in-the-World.md)), but in this book "linear" always means $T(0) = 0$ and the two rules.

### A linear map is decided by a basis

How much do you need to know to know a linear map? Far less than its value at every point.

**Theorem 6.1.** Let $v_1, \ldots, v_n$ be a basis of $V$ and let $w_1, \ldots, w_n$ be **any** vectors in $W$. There is exactly
one linear map $T : V \to W$ with $T(v_j) = w_j$ for every $j$.

*Proof.* *Uniqueness.* If $T$ is linear with $T(v_j) = w_j$, then for any $v = c_1 v_1 + \cdots + c_n v_n$, linearity forces

$$
T(v) = c_1 w_1 + \cdots + c_n w_n .
$$

So there is at most one such $T$.

*Existence.* Define $T$ by that formula. It makes sense because the coordinates $c_j$ of $v$ are unique (Theorem 5.2). It sends
$v_j$ to $w_j$ (the coordinates of $v_j$ are $0$ except a $1$ in place $j$). And it is linear: if $v$ has coordinates $c_j$ and
$v'$ has $c'_j$, then $v + v'$ has coordinates $c_j + c'_j$ and $a\,v$ has $a\,c_j$, so
$T(v + v') = \sum (c_j + c'_j) w_j = T(v) + T(v')$ and $T(a v) = \sum a c_j w_j = a T(v)$. $\square$

**Worked example.** Find the linear map $T : \mathbb{R}^2 \to \mathbb{R}^2$ with $T(1, 1) = (2, 0)$ and $T(1, -1) = (0, 4)$.

Step 1: $(1, 1)$ and $(1, -1)$ form a basis, so $T$ exists and is unique.

Step 2: write the standard basis in terms of it: $e_1 = \tfrac12 (1,1) + \tfrac12 (1,-1)$ and $e_2 = \tfrac12 (1,1) - \tfrac12 (1,-1)$.

Step 3: by linearity $T(e_1) = \tfrac12 (2,0) + \tfrac12 (0,4) = (1, 2)$ and $T(e_2) = \tfrac12 (2,0) - \tfrac12 (0,4) = (1, -2)$.

Step 4: so $T(x, y) = x(1, 2) + y(1, -2) = (x + y,\; 2x - 2y)$.

*Check:* $T(1, 1) = (2, 0)$ and $T(1, -1) = (0, 4)$.

This theorem is the reason a matrix, a finite table of numbers, can describe a map on infinitely many vectors: you only record
where the basis goes.

### Linear maps form a vector space

If $S, T \in \mathcal{L}(V, W)$, define $(S + T)(v) = S(v) + T(v)$ and $(cT)(v) = c\,T(v)$. Both are again linear, and with
these operations $\mathcal{L}(V, W)$ is itself a vector space (the axioms hold because they hold in $W$, value by value). Linear
maps can also be **composed**: if $T : U \to V$ and $S : V \to W$ are linear, so is $S \circ T$, written $ST$, since
$S(T(u + u')) = S(T(u) + T(u')) = S(T(u)) + S(T(u'))$, and the same for scalars.

## 6.2 Kernel and image

Every linear map has two subspaces attached to it: what it kills, and what it reaches.

**Definition.** For $T : V \to W$ linear,

- the **kernel** (or **null space**) of $T$ is $\ker T = \{v \in V : T(v) = 0\}$, a subset of $V$;
- the **image** (or **range**) of $T$ is $\operatorname{im} T = \{T(v) : v \in V\}$, a subset of $W$.

**Theorem 6.2.** $\ker T$ is a subspace of $V$, and $\operatorname{im} T$ is a subspace of $W$.

*Proof.* Kernel: $T(0) = 0$, so $0 \in \ker T$; if $T(u) = T(v) = 0$ then $T(u + v) = 0 + 0 = 0$ and $T(cu) = c \cdot 0 = 0$.
Image: $0 = T(0)$ is in it; $T(u) + T(v) = T(u + v)$ and $c\,T(u) = T(cu)$ are values of $T$ again. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 200" role="img" aria-label="Two ovals, V on the left and W on the right. Inside V a shaded region labelled ker T; an arrow goes from it to the single point 0 in W. Inside W a shaded region labelled im T containing 0; an arrow goes from another point of V into im T.">
  <defs>
    <marker id="la6-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 z" fill="currentColor"/>
    </marker>
  </defs>
  <ellipse cx="120" cy="100" rx="100" ry="80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="400" cy="100" rx="100" ry="80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="100" cy="130" rx="45" ry="25" fill="#eea66f" fill-opacity="0.45" stroke="currentColor"/>
  <ellipse cx="410" cy="90" rx="60" ry="40" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor"/>
  <circle cx="390" cy="105" r="4" fill="currentColor"/>
  <circle cx="130" cy="130" r="3" fill="currentColor"/>
  <circle cx="150" cy="60" r="3" fill="currentColor"/>
  <line x1="133" y1="129" x2="383" y2="106" stroke="currentColor" stroke-width="1.5" marker-end="url(#la6-arr)"/>
  <line x1="153" y1="60" x2="425" y2="72" stroke="currentColor" stroke-width="1.5" marker-end="url(#la6-arr)"/>
  <circle cx="428" cy="72" r="3" fill="currentColor"/>
  <text x="30" y="40" font-size="16" fill="currentColor">V</text>
  <text x="482" y="40" font-size="16" fill="currentColor">W</text>
  <text x="70" y="135" font-size="13" fill="currentColor">ker T</text>
  <text x="430" y="115" font-size="13" fill="currentColor">im T</text>
  <text x="380" y="125" font-size="13" fill="currentColor">0</text>
  <text x="265" y="105" font-size="13" fill="currentColor">T</text>
</svg>
</div>

**Examples.**

- **Projection** $P$ onto the line $y = x$: the kernel is the line $y = -x$ (the points whose shadow is the origin), and the image
  is the line $y = x$ itself.
- **Rotation** $R_\theta$: kernel $\{0\}$ (only the origin goes to the origin), image all of $\mathbb{R}^2$.
- **Derivative** $D : P_n \to P_{n-1}$: the kernel is the constants (the polynomials with derivative $0$), and the image is all of
  $P_{n-1}$, since every polynomial of degree at most $n - 1$ is the derivative of one of degree at most $n$ (integrate it).
- **Trace** on $2 \times 2$ matrices: the kernel is the matrices $\begin{pmatrix} a & b \\ c & -a \end{pmatrix}$, and the image
  is all of $F$ (the matrix with a single $t$ in the corner has trace $t$).
- **A matrix map** $T(x) = Ax$: the kernel is the solution set of $Ax = 0$, and the image is the set of $b$ for which $Ax = b$ has
  a solution, which is the span of the columns of $A$ (because $Ax = x_1 a_1 + \cdots + x_n a_n$). These are the **null space** and
  the **column space** of $A$, two of the four subspaces of [Chapter 7](07-The-Four-Subspaces.md).

### One-to-one and onto

A function is **injective** (one-to-one) if different inputs give different outputs, and **surjective** (onto) if every element of
the target is an output. Surjectivity of $T$ just says $\operatorname{im} T = W$. Injectivity, for a linear map, comes down to a
single equation.

**Theorem 6.3.** A linear map $T$ is injective if and only if $\ker T = \{0\}$.

*Proof.* If $T$ is injective, then since $T(0) = 0$, no other vector can map to $0$. Conversely, suppose $\ker T = \{0\}$ and
$T(u) = T(v)$. Then $T(u - v) = T(u) - T(v) = 0$, so $u - v \in \ker T$, so $u - v = 0$. $\square$

So instead of comparing every pair of inputs, you solve one equation $T(v) = 0$. This is the abstract form of a fact from
Chapter 2: if $x_p$ is one solution of $Ax = b$, then **all** solutions are $x_p + z$ with $z$ in the null space. The solutions of
$T(v) = w$, when there are any, form a copy of $\ker T$ shifted by one particular solution.

## 6.3 The rank-nullity theorem

*Level: intermediate to advanced.*

Look again at the derivative $D : P_3 \to P_2$. The space $P_3$ has dimension 4. The derivative collapses a 1-dimensional
kernel (the constants) and reaches a 3-dimensional image ($P_2$). And $1 + 3 = 4$. Or the projection onto a line in the plane:
a 1-dimensional kernel, a 1-dimensional image, total 2. That is no coincidence.

**Definition.** The **rank** of $T$ is $\dim \operatorname{im} T$, and the **nullity** of $T$ is $\dim \ker T$.

**Theorem 6.4 (rank-nullity theorem).** If $V$ is finite-dimensional and $T : V \to W$ is linear, then $\operatorname{im} T$ is
finite-dimensional and

$$
\dim V = \dim \ker T + \dim \operatorname{im} T .
$$

In words: every dimension of the domain is either **destroyed** (it lies in the kernel) or **delivered** (it shows up in the image).
None goes missing and none is created.

*Proof.* Let $u_1, \ldots, u_k$ be a basis of $\ker T$ (a subspace of $V$, so finite-dimensional by Theorem 5.8). Extend it to a
basis $u_1, \ldots, u_k, v_1, \ldots, v_r$ of $V$ (Theorem 5.4), so $\dim V = k + r$. We show that $T(v_1), \ldots, T(v_r)$ is a
basis of $\operatorname{im} T$; then $\dim \operatorname{im} T = r = \dim V - \dim \ker T$.

*They span the image.* Any vector of the image is $T(v)$ for some $v = a_1 u_1 + \cdots + a_k u_k + b_1 v_1 + \cdots + b_r v_r$.
Since $T(u_i) = 0$,

$$
T(v) = b_1 T(v_1) + \cdots + b_r T(v_r).
$$

*They are independent.* Suppose $b_1 T(v_1) + \cdots + b_r T(v_r) = 0$. Then $T(b_1 v_1 + \cdots + b_r v_r) = 0$, so
$b_1 v_1 + \cdots + b_r v_r$ is in the kernel, and equals $a_1 u_1 + \cdots + a_k u_k$ for some scalars. Then
$a_1 u_1 + \cdots + a_k u_k - b_1 v_1 - \cdots - b_r v_r = 0$ is a relation in a basis of $V$, so every coefficient is zero; in
particular all $b_j = 0$. $\square$

The proof shows more than the count: the part of $V$ spanned by $v_1, \ldots, v_r$, a complement of the kernel, is carried by $T$
one-to-one onto the image. [Chapter 7](07-The-Four-Subspaces.md) will pick a particularly good complement, the row space.

**Worked example.** Take $T(x) = Ax$ with

$$
A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 4 \\ 3 & 6 & 1 & 5 \end{pmatrix},
$$

a map from $\mathbb{R}^4$ to $\mathbb{R}^3$.

Step 1: row reduce. Subtract twice row 1 from row 2 and three times row 1 from row 3; then subtract the new row 2 from the new
row 3:

$$
\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 1 & 2 \end{pmatrix}
\longrightarrow
\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}.
$$

Step 2: the pivots are in columns 1 and 3; $x_2$ and $x_4$ are free. The equations are $x_1 + 2x_2 + x_4 = 0$ and $x_3 + 2x_4 = 0$.
Setting $(x_2, x_4) = (1, 0)$ and then $(0, 1)$ gives the kernel basis

$$
(-2, 1, 0, 0), \qquad (-1, 0, -2, 1).
$$

So the nullity is 2.

Step 3: rank-nullity predicts rank $4 - 2 = 2$. Indeed the image is spanned by the columns of $A$; the second column is twice the
first, the fourth is the first plus twice the third, and the first and third columns $(1,2,3)$, $(0,1,1)$ are independent. So the
image is a plane in $\mathbb{R}^3$.

*Check:* $A(-2,1,0,0) = (-2 + 2,\; -4 + 4,\; -6 + 6) = 0$ and $A(-1,0,-2,1) = (-1 + 1,\; -2 - 2 + 4,\; -3 - 2 + 5) = 0$.

### Consequences

Rank-nullity is short, but it settles a surprising number of questions without any computation.

**1. Too many unknowns.** A homogeneous system $Ax = 0$ with more unknowns than equations ($n > m$) has a nonzero solution. The map
$x \mapsto Ax$ goes from $F^n$ to $F^m$, its rank is at most $m$, so its nullity is at least $n - m > 0$.

**2. Too few unknowns.** A system $Ax = b$ with more equations than unknowns ($m > n$) cannot be solvable for every $b$: the rank is at
most $n < m$, so the image is not all of $F^m$.

**3. No injective map to a smaller space, no surjective map to a bigger one.** If $\dim V > \dim W$, then
$\dim \ker T = \dim V - \operatorname{rank} T \ge \dim V - \dim W > 0$, so $T$ is not injective. If $\dim V < \dim W$, then
$\operatorname{rank} T \le \dim V < \dim W$, so $T$ is not surjective.

**4. Equal dimensions: one-to-one equals onto.** If $\dim V = \dim W$ (finite), then

$$
T \text{ injective} \iff \ker T = \{0\} \iff \operatorname{rank} T = \dim V = \dim W \iff T \text{ surjective}.
$$

For a square matrix, this says: if $Ax = 0$ has only the zero solution, then $Ax = b$ has a solution for **every** $b$, and that
solution is unique. Uniqueness gives existence for free. This is false for infinite-dimensional spaces: on the space of all
polynomials, differentiation is onto but not one-to-one, and multiplication by $x$ is one-to-one but not onto.

### Interpolation for free

**Theorem 6.5.** Given $n + 1$ distinct numbers $a_0, \ldots, a_n$ and any values $y_0, \ldots, y_n$, there is exactly one polynomial
$p$ of degree at most $n$ with $p(a_i) = y_i$ for every $i$.

*Proof.* Consider the evaluation map $E : P_n \to F^{n+1}$, $E(p) = (p(a_0), \ldots, p(a_n))$, which is linear (6.1, Example 5). If
$E(p) = 0$, then $p$ has $n + 1$ distinct roots but degree at most $n$, so $p = 0$. So $E$ is injective. Both spaces have dimension
$n + 1$, so by Consequence 4, $E$ is also surjective. Surjective gives existence of $p$, injective gives uniqueness. $\square$

No formula was needed, though there is one (Lagrange's). **Worked example:** the polynomial of degree at most 2 with
$p(0) = 1$, $p(1) = 3$, $p(2) = 7$. Write $p = a + bx + cx^2$: then $a = 1$, $a + b + c = 3$, $a + 2b + 4c = 7$. So $b + c = 2$ and
$2b + 4c = 6$, giving $c = 1$, $b = 1$: $p = 1 + x + x^2$. *Check:* $p(1) = 3$, $p(2) = 1 + 2 + 4 = 7$. The same theorem over a
finite field underlies Reed-Solomon codes and secret sharing.

## 6.4 The matrix of a linear map

A linear map is decided by where the basis vectors go (Theorem 6.1). Write those images in coordinates and you have a table of
numbers: the matrix of the map.

**Definition.** Let $B = (v_1, \ldots, v_n)$ be a basis of $V$ and $C = (w_1, \ldots, w_m)$ a basis of $W$. For a linear map
$T : V \to W$, write each $T(v_j)$ in the basis $C$:

$$
T(v_j) = a_{1j} w_1 + a_{2j} w_2 + \cdots + a_{mj} w_m .
$$

The $m \times n$ matrix $A = (a_{ij})$ is the **matrix of $T$** in the bases $B$ and $C$, written $[T]_{C \leftarrow B}$ (or
$[T]_B$ when $V = W$ and $B = C$).

The recipe in one line: **column $j$ of the matrix is the coordinate vector of $T(v_j)$.**

**Theorem 6.6.** For every $v \in V$,

$$
[T(v)]_C = [T]_{C \leftarrow B}\,[v]_B .
$$

*Proof.* If $[v]_B = (c_1, \ldots, c_n)$, then $T(v) = \sum_j c_j T(v_j) = \sum_j c_j \sum_i a_{ij} w_i = \sum_i \big(\sum_j a_{ij} c_j\big) w_i$.
The coefficient of $w_i$ is $\sum_j a_{ij} c_j$, which is entry $i$ of the product $A c$. $\square$

So the matrix does to coordinates exactly what $T$ does to vectors. In a picture, "go across by $T$, then take coordinates" equals
"take coordinates, then multiply by $A$".

### Examples

**Rotation.** In the standard basis of $\mathbb{R}^2$, the columns are $R_\theta(e_1) = (\cos\theta, \sin\theta)$ and
$R_\theta(e_2) = (-\sin\theta, \cos\theta)$:

$$
[R_\theta] = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}.
$$

**Projection onto $y = x$.** $P(e_1) = (\tfrac12, \tfrac12)$ and $P(e_2) = (\tfrac12, \tfrac12)$, so
$[P] = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$.

**The derivative.** Take $D : P_3 \to P_2$ with the bases $1, x, x^2, x^3$ and $1, x, x^2$. Then $D(1) = 0$, $D(x) = 1$,
$D(x^2) = 2x$, $D(x^3) = 3x^2$, and these give the four columns:

$$
[D] = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \end{pmatrix}.
$$

*Check with Theorem 6.6:* $p = 2 + x - x^3$ has coordinates $(2, 1, 0, -1)$, and $[D](2,1,0,-1) = (1, 0, -3)$, the coordinates of
$1 - 3x^2 = p'$.

**Shift of a polynomial.** Let $S : P_2 \to P_2$, $S(p)(x) = p(x + 1)$. In the basis $1, x, x^2$: $S(1) = 1$, $S(x) = 1 + x$,
$S(x^2) = 1 + 2x + x^2$, so

$$
[S] = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix},
$$

with the binomial coefficients appearing in the columns. (For $P_n$ you get Pascal's triangle.)

### Composition is multiplication

Here is the real reason matrix multiplication is defined the way it is ([Chapter 3](03-Matrices.md), 3.3).

**Theorem 6.7.** If $T : U \to V$ and $S : V \to W$ are linear and $A, B, C$ are bases of $U, V, W$, then

$$
[S T]_{C \leftarrow A} = [S]_{C \leftarrow B}\,[T]_{B \leftarrow A} .
$$

*Proof.* For every $u \in U$, apply Theorem 6.6 twice:
$[S(T(u))]_C = [S]_{C \leftarrow B}\,[T(u)]_B = [S]_{C \leftarrow B}\,[T]_{B \leftarrow A}\,[u]_A$. Also
$[ST(u)]_C = [ST]_{C \leftarrow A}\,[u]_A$. Two matrices that give the same result on every coordinate vector, in particular on
each standard basis vector, have the same columns, so they are equal. $\square$

**Example.** Rotating by $\alpha$ and then by $\beta$ is rotating by $\alpha + \beta$, so $[R_\beta][R_\alpha] = [R_{\alpha + \beta}]$.
Multiplying the matrices out,

$$
\begin{pmatrix} \cos\beta & -\sin\beta \\ \sin\beta & \cos\beta \end{pmatrix}
\begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix}
=
\begin{pmatrix} \cos\beta\cos\alpha - \sin\beta\sin\alpha & -(\cos\beta\sin\alpha + \sin\beta\cos\alpha) \\ \sin\beta\cos\alpha + \cos\beta\sin\alpha & \cos\beta\cos\alpha - \sin\beta\sin\alpha \end{pmatrix},
$$

and comparing with $[R_{\alpha+\beta}]$ entry by entry gives the addition formulas for sine and cosine. Linear algebra proves
trigonometry.

### The space of matrices and the space of maps

With bases fixed, $T \mapsto [T]_{C \leftarrow B}$ is a one-to-one correspondence between $\mathcal{L}(V, W)$ and $m \times n$
matrices (Theorem 6.1 says any matrix comes from exactly one map), and it respects addition and scaling. So

$$
\dim \mathcal{L}(V, W) = (\dim V)(\dim W).
$$

## 6.5 Isomorphisms

*Level: intermediate to advanced.*

The space $P_2$ of quadratics and the space $\mathbb{R}^3$ of triples look different, but $a + bx + cx^2 \leftrightarrow (a, b, c)$
matches them perfectly, and the matching respects addition and scaling. As vector spaces, they are the same space with different
labels.

**Definition.** A linear map $T : V \to W$ is an **isomorphism** if it is bijective (injective and surjective). Then $V$ and $W$ are
**isomorphic**, written $V \cong W$.

**Theorem 6.8.** If $T$ is an isomorphism, its inverse function $T^{-1} : W \to V$ is also linear.

*Proof.* Let $w, w' \in W$, and put $v = T^{-1}(w)$, $v' = T^{-1}(w')$. Then $T(v + v') = w + w'$, so
$T^{-1}(w + w') = v + v' = T^{-1}(w) + T^{-1}(w')$. Likewise $T(cv) = cw$ gives $T^{-1}(cw) = c\,T^{-1}(w)$. $\square$

An isomorphism carries everything linear across: independent lists to independent lists, spanning lists to spanning lists, bases
to bases, subspaces to subspaces of the same dimension. (For instance, if $v_1, \ldots, v_n$ is a basis of $V$ and $T$ an
isomorphism, a relation $\sum c_i T(v_i) = 0$ gives $T(\sum c_i v_i) = 0$, so $\sum c_i v_i = 0$ by injectivity, so all $c_i = 0$;
and every $w = T(v)$ is a combination of the $T(v_i)$.)

**Theorem 6.9.** Two finite-dimensional vector spaces over the same field are isomorphic if and only if they have the same
dimension. In particular, every $n$-dimensional space over $F$ is isomorphic to $F^n$.

*Proof.* If $T : V \to W$ is an isomorphism, it carries a basis of $V$ to a basis of $W$, so the dimensions agree. Conversely, if
$\dim V = \dim W = n$, choose bases $v_1, \ldots, v_n$ and $w_1, \ldots, w_n$, and let $T$ be the linear map with $T(v_j) = w_j$
(Theorem 6.1). Its kernel is $\{0\}$ (if $T(\sum c_j v_j) = \sum c_j w_j = 0$ then all $c_j = 0$), so it is injective, and by
rank-nullity it is also surjective. $\square$

So, up to isomorphism, there is exactly one vector space of each finite dimension over each field. The space $P_3$, the
$2 \times 2$ matrices, $\mathbb{C}^2$ seen over $\mathbb{R}$, and $\mathbb{R}^4$ are all "the same" 4-dimensional real space. The
coordinate map $v \mapsto [v]_B$ of [Chapter 5](05-Independence-Bases-and-Dimension.md) is the isomorphism $V \to F^n$.

Why then bother with abstract spaces at all? Because the isomorphism with $F^n$ depends on choosing a basis, and there is usually no
best one. The derivative on $P_3$ has a natural meaning; its matrix depends on which basis you happen to pick. Keeping the space
abstract keeps track of what is really there.

**Invertible matrices.** A square matrix $A$ is invertible exactly when the map $x \mapsto Ax$ is an isomorphism, and then $A^{-1}$ is
the matrix of the inverse map. By Consequence 4 of 6.3, for a square matrix it is enough to know **one** of: $Ax = 0$ has only the
solution $0$; the columns of $A$ are independent; the columns span $F^n$; $A$ has rank $n$; $A$ has a left inverse; $A$ has a right
inverse. Each of these implies all the others. (If $BA = I$, then $Ax = 0$ gives $x = BAx = 0$, so $A$ is injective, hence bijective,
and then $B = A^{-1}$.)

## 6.6 Change of basis and similar matrices

*Level: intermediate to advanced.*

The matrix of a linear map depends on the bases you choose. A clever choice can make it very simple. Look at

$$
A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}.
$$

In the standard basis, nothing about this map is obvious. But try the vectors $b_1 = (1, 1)$ and $b_2 = (1, -2)$:

$$
A b_1 = (4 + 1,\; 2 + 3) = (5, 5) = 5\,b_1, \qquad A b_2 = (4 - 2,\; 2 - 6) = (2, -4) = 2\,b_2 .
$$

In the basis $b_1, b_2$, the map just stretches the first direction by 5 and the second by 2. Its matrix in that basis is
$\begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$. How are the two matrices related?

### Coordinates in two bases

Let $B = (b_1, \ldots, b_n)$ be a new basis of $F^n$, and let $P$ be the matrix whose **columns are the new basis vectors** (written
in the standard coordinates). For a vector $v$ with new coordinates $c = [v]_B$,

$$
v = c_1 b_1 + \cdots + c_n b_n = P c, \qquad\text{so}\qquad v = P\,[v]_B, \qquad [v]_B = P^{-1} v .
$$

$P$ is invertible because its columns form a basis (6.5). It is called the **change-of-basis matrix**: it converts new coordinates
into old ones. More generally, in any space $V$ with an old basis $E$ and a new basis $B$, the matrix $P = [I]_{E \leftarrow B}$, whose
columns are the old coordinates of the new basis vectors, satisfies $[v]_E = P\,[v]_B$.

### How the matrix of an operator changes

**Theorem 6.10.** Let $T : V \to V$ be linear, let $E$ and $B$ be bases of $V$, and let $P = [I]_{E \leftarrow B}$. Then

$$
[T]_B = P^{-1}\,[T]_E\,P .
$$

*Proof.* Read the right side from right to left, as a recipe for a vector given in $B$-coordinates: $P$ converts to $E$-coordinates,
$[T]_E$ applies $T$ in $E$-coordinates, $P^{-1}$ converts the answer back to $B$-coordinates. The result is the $B$-coordinates of
$T(v)$, which is what $[T]_B$ produces. Formally, by Theorem 6.7, $[T]_B = [I\,T\,I]_{B \leftarrow B} = [I]_{B \leftarrow E}\,[T]_E\,[I]_{E \leftarrow B}$,
and $[I]_{B \leftarrow E} = P^{-1}$ because $[I]_{B \leftarrow E}[I]_{E \leftarrow B} = [I]_{B \leftarrow B}$ is the identity matrix. $\square$

**Worked example.** For $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ and the basis $b_1 = (1, 1)$, $b_2 = (1, -2)$:

Step 1: $P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}$. Its inverse (Chapter 3: swap the diagonal, negate the off-diagonal,
divide by $ad - bc = -3$) is

$$
P^{-1} = \frac{1}{-3}\begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix}.
$$

Step 2: $AP$ has columns $Ab_1 = (5, 5)$ and $Ab_2 = (2, -4)$.

Step 3: $P^{-1}(AP)$: the first column is $P^{-1}(5, 5) = (\tfrac{10}{3} + \tfrac53,\; \tfrac53 - \tfrac53) = (5, 0)$, the second is
$P^{-1}(2, -4) = (\tfrac43 - \tfrac43,\; \tfrac23 + \tfrac43) = (0, 2)$.

So $P^{-1} A P = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$, as predicted. Finding such a basis in general is the problem of
eigenvectors, [Chapter 9](09-Eigenvalues-and-Eigenvectors.md).

**Worked example: a reflection.** Find the matrix of the reflection $F$ of $\mathbb{R}^2$ in the line $y = 2x$.

Step 1: choose a basis that suits $F$: $b_1 = (1, 2)$ along the line (fixed: $F b_1 = b_1$) and $b_2 = (2, -1)$ perpendicular to it
(flipped: $F b_2 = -b_2$). So $[F]_B = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$.

Step 2: $P = \begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}$, $P^{-1} = \frac{1}{-5}\begin{pmatrix} -1 & -2 \\ -2 & 1 \end{pmatrix}$, and
by Theorem 6.10 turned around, $[F]_E = P\,[F]_B\,P^{-1}$.

Step 3: $P\,[F]_B = \begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}$, and multiplying by $P^{-1}$,

$$
[F]_E = \frac{1}{-5}\begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} -1 & -2 \\ -2 & 1 \end{pmatrix}
= \frac{1}{-5}\begin{pmatrix} 3 & -4 \\ -4 & -3 \end{pmatrix}
= \frac15\begin{pmatrix} -3 & 4 \\ 4 & 3 \end{pmatrix}.
$$

*Check:* $[F]_E (1, 2) = \tfrac15(-3 + 8,\; 4 + 6) = (1, 2)$, and $[F]_E (2, -1) = \tfrac15(-6 - 4,\; 8 - 3) = (-2, 1)$. A
reflection done twice is the identity, and indeed $\tfrac{1}{25}\begin{pmatrix} 9 + 16 & -12 + 12 \\ -12 + 12 & 16 + 9 \end{pmatrix} = I$.

This is the standard strategy of the whole subject: **pick the basis in which the map is simple, then translate back**.

### Similar matrices

**Definition.** Two $n \times n$ matrices $A$ and $A'$ are **similar** if $A' = P^{-1} A P$ for some invertible matrix $P$.

By Theorem 6.10, similar matrices are exactly the matrices of the **same** linear operator in two different bases. So anything that
is a property of the operator, rather than of the basis, must be the same for similar matrices. Such quantities are called
**invariants**.

**Theorem 6.11.** Similar matrices have the same rank and the same trace.

*Proof.* *Rank:* the rank of $A$ is the dimension of the image of $x \mapsto Ax$; multiplying on either side by an invertible matrix
composes with an isomorphism, which does not change the dimension of the image. More concretely,
$\operatorname{im}(P^{-1} A P) = P^{-1}(\operatorname{im} A)$ because $P$ is onto, and $P^{-1}$ carries a subspace to one of the same
dimension.

*Trace:* first, $\operatorname{tr}(MN) = \operatorname{tr}(NM)$ for any $n \times n$ matrices, because both equal
$\sum_{i,j} m_{ij} n_{ji}$. Then $\operatorname{tr}(P^{-1} A P) = \operatorname{tr}\big((P^{-1}A)P\big) = \operatorname{tr}\big(P (P^{-1} A)\big) = \operatorname{tr} A$. $\square$

*Check on the example:* $\operatorname{tr}\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} = 7 = 5 + 2$. Other invariants are coming: the
determinant ([Chapter 8](08-Determinants.md), 8.4), the eigenvalues and the characteristic polynomial
([Chapter 9](09-Eigenvalues-and-Eigenvectors.md)), and, as a complete answer to "when are two matrices similar?", the Jordan form
([Chapter 16](16-Jordan-Form.md)). So the trace and the determinant of a linear **operator** make sense: compute them in any basis.

Equal invariants do not guarantee similarity. The matrices $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ and
$N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ have the same rank (2) and trace (2), but they are not similar, because
$P^{-1} I P = I$ for every $P$: the identity is similar only to itself.

### A short history

Linear substitutions of variables, $x' = ax + by$, $y' = cx + dy$, were studied long before anyone spoke of linear maps: Gauss used
them in 1801 to classify quadratic forms, and Arthur Cayley's 1858 "A memoir on the theory of matrices" introduced matrices as
abbreviations for such substitutions and defined their product so that it matched composition, the content of Theorem 6.7. Peano's
1888 book gave the axioms for a vector space and treated linear maps between such spaces. The habit of working with abstract
linear maps and choosing bases only when needed spread in the twentieth century, through functional analysis (where spaces are
infinite-dimensional and coordinates are hard to use) and through textbooks such as van der Waerden's *Moderne Algebra* (1930-31)
and Halmos's *Finite-Dimensional Vector Spaces* (1942).

## Check yourself

??? question "1. Which of these maps $\mathbb{R}^2 \to \mathbb{R}^2$ are linear? (a) $(x, y) \mapsto (2x - y, 3y)$, (b) $(x, y) \mapsto (x + 1, y)$, (c) $(x, y) \mapsto (xy, 0)$, (d) $(x, y) \mapsto (y, x)$."

    (a) Linear: it is $x \mapsto Ax$ with $A = \begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}$. (b) Not linear: it sends $(0,0)$ to
    $(1,0)$. (c) Not linear: $(1,1) \mapsto (1, 0)$ but $(2,2) \mapsto (4, 0) \ne 2(1,0)$. (d) Linear: it is the reflection in the line
    $y = x$, with matrix $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.

??? question "2. Find the kernel and image of $T : \mathbb{R}^3 \to \mathbb{R}^2$, $T(x, y, z) = (x + y,\; y + z)$, and check rank-nullity."

    Kernel: $x + y = 0$ and $y + z = 0$, so $x = -y$, $z = -y$: the kernel is the line spanned by $(1, -1, 1)$, nullity 1. Image:
    $T(1,0,0) = (1,0)$ and $T(0,0,1) = (0,1)$, so the image contains a basis of $\mathbb{R}^2$ and is all of it, rank 2. And
    $1 + 2 = 3 = \dim \mathbb{R}^3$.

??? question "3. Explain, without computing, why no linear map $\mathbb{R}^5 \to \mathbb{R}^3$ is injective, and no linear map $\mathbb{R}^3 \to \mathbb{R}^5$ is surjective."

    For $T : \mathbb{R}^5 \to \mathbb{R}^3$: the rank is at most 3, so the nullity is at least $5 - 3 = 2 > 0$; the kernel contains a
    nonzero vector, and $T$ is not injective (Theorem 6.3). For $T : \mathbb{R}^3 \to \mathbb{R}^5$: the rank is at most
    $\dim \mathbb{R}^3 = 3 < 5$, so the image is not all of $\mathbb{R}^5$.

??? question "4. What is the dimension of the space of $n \times n$ matrices with trace $0$?"

    The trace is a linear map from the $n^2$-dimensional space of $n \times n$ matrices onto $F$ (it is onto, since the matrix with a
    single $t$ in the top-left corner has trace $t$). Its rank is 1, so its kernel, the trace-zero matrices, has dimension $n^2 - 1$.
    For $n = 2$ that is 3, matching $\begin{pmatrix} a & b \\ c & -a \end{pmatrix}$.

??? question "5. Write the matrix of $S(p)(x) = p(x - 1)$ on $P_2$ in the basis $1, x, x^2$, and check that it is the inverse of the matrix of $p(x) \mapsto p(x+1)$ found in 6.4."

    $S(1) = 1$, $S(x) = x - 1$, $S(x^2) = x^2 - 2x + 1$, so the columns are $(1,0,0)$, $(-1,1,0)$, $(1,-2,1)$:
    $\begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix}$. Multiplying by $\begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}$:
    the first row gives $(1,\ 1 - 1,\ 1 - 2 + 1) = (1, 0, 0)$, the second $(0,\ 1,\ 2 - 2) = (0, 1, 0)$, the third $(0, 0, 1)$. The
    product is $I$, as it must be, since shifting by $+1$ and then by $-1$ does nothing (Theorem 6.7).

??? question "6. Find the matrix (in the standard basis) of the linear map $T : \mathbb{R}^2 \to \mathbb{R}^2$ with $T(1, 2) = (3, 0)$ and $T(0, 1) = (1, 1)$."

    $e_2 = (0,1)$, so $T(e_2) = (1, 1)$. And $e_1 = (1, 2) - 2(0, 1)$, so $T(e_1) = (3, 0) - 2(1, 1) = (1, -2)$. The matrix has these as
    columns: $\begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}$. *Check:* times $(1, 2)$ gives $(1 + 2,\; -2 + 2) = (3, 0)$.

??? question "7. Let $D$ be differentiation on $P_3$ (as a map from $P_3$ to itself). Write its matrix in the basis $1, x, x^2, x^3$, and show that $D^4 = 0$. What are the kernel and image of $D$?"

    Columns: $D(1) = 0$, $D(x) = 1$, $D(x^2) = 2x$, $D(x^3) = 3x^2$, so the matrix is $\begin{pmatrix} 0&1&0&0\\0&0&2&0\\0&0&0&3\\0&0&0&0 \end{pmatrix}$.
    Differentiating four times kills every polynomial of degree at most 3, so $D^4 = 0$, and by Theorem 6.7 the fourth power of the
    matrix is the zero matrix. The kernel is the constants (dimension 1), the image is $P_2$ (dimension 3), and $1 + 3 = 4$. Unlike
    the case $D : P_3 \to P_2$, here the image is not the whole target.

??? question "8. Prove that if $T : V \to W$ is linear and $v_1, \ldots, v_k$ are vectors whose images $T(v_1), \ldots, T(v_k)$ are independent, then $v_1, \ldots, v_k$ are independent. Is the converse true?"

    If $\sum c_i v_i = 0$, apply $T$: $\sum c_i T(v_i) = T(0) = 0$, so all $c_i = 0$ because the images are independent. The converse
    fails: the zero map sends any independent list to a list of zeros. It holds when $T$ is injective (see 6.5).

??? question "9. Show that $A = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$ and $A' = \begin{pmatrix} 1 & 0 \\ 0 & 4 \end{pmatrix}$ are not similar."

    Similar matrices have the same trace (Theorem 6.11). $\operatorname{tr} A = 4$ and $\operatorname{tr} A' = 5$. So they are not
    similar. (Both have rank 2, so rank alone could not decide it.)

??? question "10. Find a basis in which the projection $P(x, y) = \tfrac{x + y}{2}(1, 1)$ has a diagonal matrix, and write that matrix."

    Take $b_1 = (1, 1)$, which $P$ fixes ($P b_1 = \tfrac{2}{2}(1,1) = b_1$), and $b_2 = (1, -1)$, which $P$ kills ($P b_2 = 0$). Then
    $[P]_B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. Rank 1, trace 1, the same as for the standard matrix
    $\begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$, as Theorem 6.11 requires.

??? question "11. Let $V$ be finite-dimensional and $T : V \to V$ linear with $T^2 = T$ (a projection). Prove that $V = \ker T \oplus \operatorname{im} T$."

    Every $v$ can be written $v = (v - T v) + T v$. Here $T v \in \operatorname{im} T$, and $T(v - Tv) = Tv - T^2 v = 0$, so
    $v - Tv \in \ker T$. So $V = \ker T + \operatorname{im} T$. If $w$ is in both, then $w = T u$ for some $u$ and $T w = 0$; but
    $T w = T^2 u = T u = w$, so $w = 0$. The intersection is $\{0\}$ and the sum is direct (Theorem 5.10). (This needs no dimension
    count, so it holds in infinite dimensions too.)

??? question "12. Let $S, T : V \to V$ be linear with $V$ finite-dimensional. Prove that $\operatorname{rank}(ST) \le \min(\operatorname{rank} S, \operatorname{rank} T)$."

    The image of $ST$ is $S(\operatorname{im} T)$, a subset of $\operatorname{im} S$, so $\operatorname{rank}(ST) \le \operatorname{rank} S$.
    Also $S$ restricted to the subspace $\operatorname{im} T$ is a linear map from it, and by rank-nullity its image has dimension at most
    $\dim \operatorname{im} T$. So $\operatorname{rank}(ST) \le \operatorname{rank} T$.

## What you learned

- A **linear map** preserves sums and scalar multiples, hence all linear combinations; it sends $0$ to $0$. Rotations, projections,
  the derivative, evaluation and trace are linear; translations and squaring are not.
- A linear map is fixed by its values on a basis, and those values can be chosen freely.
- The **kernel** and **image** are subspaces; $T$ is injective exactly when $\ker T = \{0\}$.
- **Rank-nullity:** $\dim V = \dim \ker T + \operatorname{rank} T$. Between spaces of equal finite dimension, injective, surjective and
  bijective are the same thing.
- The **matrix** of $T$ in bases $B, C$ has the coordinates of $T(v_j)$ as its columns; composition of maps is multiplication of
  matrices.
- Isomorphic finite-dimensional spaces are exactly those of the same dimension; every $n$-dimensional space is a copy of $F^n$.
- Changing basis replaces $A$ by the **similar** matrix $P^{-1} A P$; rank and trace (and soon determinant and eigenvalues) are
  unchanged.

**Next:** [Chapter 7](07-The-Four-Subspaces.md), the four subspaces of a matrix, why row rank equals column rank, and how a
parity-check matrix corrects errors in a message sent from Mars.

## Further reading

- S. Axler, *Linear Algebra Done Right*, 4th edition, Springer, 2024 (chapter 3: linear maps, the fundamental theorem of linear
  maps, matrices, invertibility).
- P. R. Halmos, *Finite-Dimensional Vector Spaces*, 2nd edition, Van Nostrand, 1958.
- S. H. Friedberg, A. J. Insel and L. E. Spence, *Linear Algebra*, 4th edition, Prentice Hall, 2003 (chapter 2).
- G. Strang, *Introduction to Linear Algebra*, 6th edition, Wellesley-Cambridge Press, 2023.
- A. Cayley, "A memoir on the theory of matrices", *Philosophical Transactions of the Royal Society of London* 148, 1858.
- S. Treil, *Linear Algebra Done Wrong*, free online text, Brown University (chapter 1 and 2 on linear transformations and
  rank).
- On this site: the U of T guides [MAT240 Unit 4, Linear Transformations](../../uoft/MAT240H1/unit04.md),
  [MAT240 Unit 5, Rank-Nullity and Matrices](../../uoft/MAT240H1/unit05.md) and
  [MAT240 Unit 6, Change of Basis and Similarity](../../uoft/MAT240H1/unit06.md); maps of the plane in
  [Geometry, Chapter 10](../geometry/10-Transformations-and-Symmetry.md); the derivative as a linear map in
  [Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md); the Topics lesson
  [Transformations on the grid](../../topics/geometry/level-5/03-transformations-grid.md) for a gentle start.
