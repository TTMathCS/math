# 17. Duality and multilinear algebra

*A row vector and a column vector look like the same list of numbers turned on its side, and a matrix that eats two
vectors (as in $x^{\mathsf T} A y$) looks like the same table as a matrix that moves one vector. They are not the same
things, and the difference matters as soon as you change basis. This chapter sorts them out. You will meet the dual
space, the home of "measuring devices" for vectors; see that the transpose of a matrix is the matrix of a natural map
between dual spaces; study bilinear forms and their invariants; build the tensor product, the space that turns
"linear in each of two slots" into plain "linear"; and finally build the exterior algebra, where the determinant
reappears as the one number by which a map scales top-dimensional volume, with no formula and no basis in sight.*

!!! abstract "In this chapter"
    **You will learn:**

    - what the dual space $V^*$ and a dual basis are, and why $V^{**}$ is naturally the same as $V$ in finite dimension
    - that the transpose of a matrix is the matrix of the dual map, and a new proof that row rank equals column rank
    - bilinear forms, their matrices, congruence $P^{\mathsf T} B P$, Sylvester's law of inertia and symplectic forms
    - the tensor product $V \otimes W$: its construction, its universal property, its basis, and the rank of a tensor
    - the exterior algebra $\Lambda V$, the wedge product, and the determinant as the action on $\Lambda^n V$
    - how wedges give the cross product, Plücker coordinates and the differential forms of calculus

    **You need:** vector spaces, bases and dimension ([Chapter 4](04-Vector-Spaces.md),
    [Chapter 5](05-Independence-Bases-and-Dimension.md)), linear maps and their matrices
    ([Chapter 6](06-Linear-Maps.md)), the four subspaces ([Chapter 7](07-The-Four-Subspaces.md)), determinants
    ([Chapter 8](08-Determinants.md)) and the spectral theorem ([Chapter 14](14-The-Spectral-Theorem.md)) for 17.3.

    **Levels:** 17.1 and 17.2 are advanced but gentle; 17.3 is advanced; 17.4 and 17.5 are advanced to expert (the
    style of a third-year algebra course).

## 17.1 Dual spaces and dual bases

*Level: advanced.* Here is a question that sounds too simple. In $\mathbb{R}^2$ take the basis $v_1 = (1, 1)$,
$v_2 = (1, 2)$. Every vector $x$ is $c_1 v_1 + c_2 v_2$ for unique numbers $c_1, c_2$. The rule $x \mapsto c_1$, "how
much $v_1$ is in $x$", is a function from $\mathbb{R}^2$ to $\mathbb{R}$. What kind of function is it, and what is its
formula?

It is linear: the coordinates of $x + y$ are the sums of the coordinates, and the coordinates of $ax$ are $a$ times
them. So "take the first coordinate" is a linear map $\mathbb{R}^2 \to \mathbb{R}$. Such maps get a name.

**Definition.** Let $V$ be a vector space over a field $F$. A **linear functional** (also *covector* or *linear form*)
on $V$ is a linear map $\varphi : V \to F$. The set of all of them is the **dual space**

$$
V^* = \operatorname{Hom}(V, F) = \{\varphi : V \to F \mid \varphi \text{ linear}\}.
$$

You add functionals and scale them pointwise, $(\varphi + \psi)(v) = \varphi(v) + \psi(v)$ and
$(a\varphi)(v) = a\,\varphi(v)$, and with these operations $V^*$ is itself a vector space (the axioms are checked
pointwise, exactly as for functions in [Chapter 4](04-Vector-Spaces.md)).

Examples you already know:

- On $\mathbb{R}^n$, fix a row $a = (a_1, \ldots, a_n)$. Then $x \mapsto a_1 x_1 + \cdots + a_n x_n$ is a functional.
  A row vector *is* a functional on column vectors: it eats a column and returns a number.
- On the polynomials $P_2$ of degree at most 2, "evaluate at 1", $p \mapsto p(1)$, is a functional. So are
  $p \mapsto p'(0)$ and $p \mapsto \int_0^2 p(t)\,dt$.
- On $n \times n$ matrices, the trace $A \mapsto a_{11} + \cdots + a_{nn}$ is a functional.
- On continuous functions on $[0, 1]$, $f \mapsto \int_0^1 f(t) g(t)\,dt$ is a functional for each fixed $g$.

Not every function to $F$ is a functional: $x \mapsto \lVert x \rVert$ and $A \mapsto \det A$ are not linear.

### A picture: functionals are stacks of lines

A nonzero functional $\varphi$ on $\mathbb{R}^2$ is drawn well not as an arrow but as its **level lines**
$\varphi(x) = c$, one for each $c$: parallel, evenly spaced lines. The value $\varphi(v)$ counts how many lines the
arrow $v$ crosses. A "bigger" functional has lines packed closer together. This is why physicists draw a gradient as
a stack of contour lines rather than an arrow: the gradient of a function at a point is, at heart, a functional
(Calculus [Chapter 15](../calculus/15-Functions-of-Several-Variables.md)).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="Level lines 2x minus y equals c for c from minus 2 to 2 drawn as parallel slanted lines. The arrow v1 equals (1, 1) runs from the origin to the line c equals 1, and the arrow v2 equals (1, 2) lies along the line c equals 0">
  <line x1="0" y1="120" x2="440" y2="120" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
  <line x1="220" y1="0" x2="220" y2="240" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
  <line x1="120" y1="240" x2="240" y2="0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="140" y1="240" x2="260" y2="0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="160" y1="240" x2="280" y2="0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="180" y1="240" x2="300" y2="0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="200" y1="240" x2="320" y2="0" stroke="#9cc9ea" stroke-width="2"/>
  <text x="130" y="232" font-size="11" fill="currentColor">−2</text>
  <text x="150" y="232" font-size="11" fill="currentColor">−1</text>
  <text x="170" y="232" font-size="11" fill="currentColor">0</text>
  <text x="190" y="232" font-size="11" fill="currentColor">1</text>
  <text x="210" y="232" font-size="11" fill="currentColor">2</text>
  <line x1="220" y1="120" x2="256" y2="84" stroke="#eea66f" stroke-width="3"/>
  <polygon points="260,80 256.4,90.6 249.4,83.6" fill="#eea66f"/>
  <text x="266" y="88" font-size="13" fill="currentColor">v₁ = (1, 1)</text>
  <line x1="220" y1="120" x2="257" y2="46" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="260,40 260,51.1 251,46.7" fill="#7ccf9a"/>
  <text x="266" y="40" font-size="13" fill="currentColor">v₂ = (1, 2)</text>
  <text x="300" y="180" font-size="12" fill="currentColor">level lines of</text>
  <text x="300" y="196" font-size="12" fill="currentColor">φ₁(x, y) = 2x − y</text>
  <text x="300" y="212" font-size="12" fill="currentColor">(value c at the foot)</text>
</svg>
</div>

### Dual bases

**Theorem 17.1 (dual basis).** Let $v_1, \ldots, v_n$ be a basis of $V$. For each $i$ there is exactly one functional
$\varphi_i$ with

$$
\varphi_i(v_j) = \delta_{ij} = \begin{cases} 1 & i = j, \\ 0 & i \ne j, \end{cases}
$$

and $\varphi_1, \ldots, \varphi_n$ is a basis of $V^*$, called the **dual basis**. In particular $\dim V^* = \dim V$.

*Proof.* A linear map is fixed by its values on a basis, and any values may be chosen
([Chapter 6](06-Linear-Maps.md)); so $\varphi_i$ exists and is unique. Concretely, $\varphi_i(x)$ is the $i$-th
coordinate of $x$. *Independent:* if $\sum a_i \varphi_i = 0$, apply both sides to $v_j$: the left gives $a_j$, so every
$a_j = 0$. *Spanning:* for any $\psi \in V^*$, the functional $\sum_i \psi(v_i)\varphi_i$ agrees with $\psi$ on every
$v_j$, so it equals $\psi$. $\square$

The spanning step gives a formula worth remembering: **$\psi = \sum_i \psi(v_i)\,\varphi_i$**. The coordinates of a
functional in the dual basis are its values on the original basis.

**Worked example 1.** Find the dual basis of $v_1 = (1, 1)$, $v_2 = (1, 2)$ in $\mathbb{R}^2$.

Write the basis vectors as the columns of $P = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. A functional is a row
$a$, and the conditions $\varphi_i(v_j) = \delta_{ij}$ say exactly that the rows $\varphi_1, \varphi_2$ stacked into a
matrix $Q$ satisfy $QP = I$. So $Q = P^{-1}$:

$$
P^{-1} = \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}, \qquad \varphi_1(x, y) = 2x - y, \quad \varphi_2(x, y) = -x + y.
$$

Check: $\varphi_1(1, 1) = 1$, $\varphi_1(1, 2) = 0$, $\varphi_2(1, 1) = 0$, $\varphi_2(1, 2) = 1$. And the opening
question is answered: "how much $v_1$ is in $x$" is $2x - y$. The picture above shows exactly this: $v_1$ climbs one
level of $\varphi_1$, while $v_2$ runs along the level line $\varphi_1 = 0$.

Notice something unexpected. The first dual functional $\varphi_1$ depends on *both* $v_1$ and $v_2$. If you keep $v_1$
and change $v_2$, the function "coefficient of $v_1$" changes. There is no way to attach a functional to a single
vector without extra structure (such as a dot product). This is the first sign that $V$ and $V^*$, though they have the
same dimension, are not the same space.

**Worked example 2 (Simpson's rule from duality).** Take $V = P_2$ with the functionals $e_0, e_1, e_2$ where
$e_k(p) = p(k)$. These form a basis of $P_2^*$: they are the dual basis of the Lagrange polynomials

$$
L_0(t) = \tfrac{1}{2}(t - 1)(t - 2), \quad L_1(t) = -t(t - 2), \quad L_2(t) = \tfrac{1}{2}t(t - 1),
$$

since $L_j(k) = \delta_{jk}$. Now take the functional $I(p) = \int_0^2 p(t)\,dt$. By the formula
$\psi = \sum \psi(v_i)\varphi_i$, its coordinates are $I(L_0), I(L_1), I(L_2)$. Integrate:
$\int_0^2 L_0 = \tfrac{1}{3}$, $\int_0^2 L_1 = \tfrac{4}{3}$, $\int_0^2 L_2 = \tfrac{1}{3}$. So for every polynomial of
degree at most 2,

$$
\int_0^2 p(t)\,dt = \tfrac{1}{3}\bigl(p(0) + 4p(1) + p(2)\bigr).
$$

This is Simpson's rule, and duality explains why such a rule must exist: $P_2^*$ is 3-dimensional, so *any* functional
on $P_2$, including integration, is some combination of three point evaluations. Check with $p(t) = t^2$: the integral
is $\tfrac{8}{3}$ and the rule gives $\tfrac{1}{3}(0 + 4 + 4) = \tfrac{8}{3}$. (By a symmetry accident Simpson's rule is
exact for cubics too: try $t^3 - 2t + 5$; both sides give 10.) In the same way the derivative at 1 is
$p'(1) = \tfrac{1}{2}\bigl(p(2) - p(0)\bigr)$ on $P_2$: the central difference formula, exact for quadratics.

### Annihilators

For a subspace $W \subseteq V$, the **annihilator** is the set of functionals that vanish on all of $W$:

$$
W^0 = \{\varphi \in V^* \mid \varphi(w) = 0 \text{ for all } w \in W\}.
$$

It is a subspace of $V^*$. In $\mathbb{R}^3$, the annihilator of a line is the set of rows orthogonal to it (a plane of
rows), and the annihilator of a plane is a line of rows: the normal direction, written as a row.

**Theorem 17.2.** If $\dim V = n$ and $\dim W = k$, then $\dim W^0 = n - k$.

*Proof.* Take a basis $w_1, \ldots, w_k$ of $W$ and extend it to a basis $w_1, \ldots, w_n$ of $V$
([Chapter 5](05-Independence-Bases-and-Dimension.md)). Let $\varphi_1, \ldots, \varphi_n$ be the dual basis. A
functional $\psi = \sum a_i \varphi_i$ vanishes on $W$ exactly when $\psi(w_j) = a_j = 0$ for $j \le k$. So $W^0$ is
spanned by $\varphi_{k+1}, \ldots, \varphi_n$, which are independent. $\square$

This is the coordinate-free version of a fact from [Chapter 7](07-The-Four-Subspaces.md): a subspace of dimension $k$
in $\mathbb{R}^n$ is cut out by $n - k$ independent linear equations, and those equations are a basis of its
annihilator.

### The double dual

Since $V^*$ is a vector space, it has a dual too: $V^{**}$, the functionals on functionals. There is a map
$\iota : V \to V^{**}$ that needs no choices at all: a vector $v$ gives the functional "evaluate at $v$",

$$
\iota(v)(\varphi) = \varphi(v).
$$

**Theorem 17.3.** If $V$ is finite-dimensional, $\iota$ is an isomorphism $V \to V^{**}$.

*Proof.* $\iota$ is linear in $v$, since each $\varphi$ is. It is injective: if $v \ne 0$, extend $v$ to a basis; the
first dual basis functional $\varphi_1$ has $\varphi_1(v) = 1 \ne 0$, so $\iota(v) \ne 0$. And
$\dim V^{**} = \dim V^* = \dim V$, so an injective linear map between them is also onto (rank-nullity,
[Chapter 6](06-Linear-Maps.md)). $\square$

Here is the point of this theorem. $V$ and $V^*$ are isomorphic (same dimension), but every isomorphism between them
depends on a choice, such as a basis or an inner product. $V$ and $V^{**}$ are isomorphic with no choice: the map
$\iota$ is the same for every basis. Mathematicians call such a map **natural** (or *canonical*), and the wish to make
"natural" precise led Eilenberg and Mac Lane to invent category theory in the 1940s (see the
[Algebra book, 22.1](../algebra/22-Where-Algebra-Goes.md)).

**In infinite dimension it fails.** Let $V = F[t]$, all polynomials, with basis $1, t, t^2, \ldots$. A functional is
fixed by its values on the basis, and any sequence of values is allowed, so $V^*$ is the space of *all* sequences
$(a_0, a_1, a_2, \ldots)$, while $V$ corresponds only to sequences with finitely many nonzero terms. For $F = \mathbb{R}$
the space $V$ has a countable basis but $V^*$ has none (its dimension is uncountable), so $\iota$ is injective but not
onto. Analysts repair this by keeping only the *continuous* functionals on a normed space; see
[Chapter 20](20-Where-Linear-Algebra-Goes.md).

## 17.2 The transpose as the dual map

*Level: advanced.* In [Chapter 3](03-Matrices.md) the transpose was a bookkeeping trick: swap rows and columns. Why
should such a trick be meaningful? Duality gives the answer.

**Definition.** Let $T : V \to W$ be linear. The **dual map** (or *transpose*) $T^* : W^* \to V^*$ is

$$
T^*(\psi) = \psi \circ T.
$$

A functional on $W$ becomes a functional on $V$ by first applying $T$. Notice that the arrow turns around: $T$ goes
from $V$ to $W$, but $T^*$ goes from $W^*$ to $V^*$. The rules $(ST)^* = T^* S^*$ and $(T^*)^* = T$ (after identifying
$V^{**}$ with $V$) follow at once: $(ST)^*\psi = \psi \circ S \circ T = T^*(S^*\psi)$.

**Theorem 17.4.** Let $A$ be the matrix of $T$ in bases $v_1, \ldots, v_n$ of $V$ and $w_1, \ldots, w_m$ of $W$. Then
the matrix of $T^*$ in the dual bases $\psi_1, \ldots, \psi_m$ and $\varphi_1, \ldots, \varphi_n$ is $A^{\mathsf T}$.

*Proof.* By definition of the matrix, $T v_j = \sum_i a_{ij} w_i$. The $(k, l)$ entry of the matrix of $T^*$ is the
$\varphi_k$-coordinate of $T^*\psi_l$, which by the formula $\psi = \sum \psi(v_k)\varphi_k$ is

$$
(T^*\psi_l)(v_k) = \psi_l(T v_k) = \psi_l\Bigl(\sum_i a_{ik} w_i\Bigr) = a_{lk}.
$$

So the $(k, l)$ entry is $a_{lk}$: the matrix is $A^{\mathsf T}$. $\square$

So $(AB)^{\mathsf T} = B^{\mathsf T}A^{\mathsf T}$ is no longer a computation to memorise: it is $(ST)^* = T^*S^*$, the
reversal you would expect from "first $T$, then $S$, then pull back".

### Kernels, images and the rank once more

**Theorem 17.5.** For $T : V \to W$ between finite-dimensional spaces,

$$
\ker T^* = (\operatorname{im} T)^0, \qquad \operatorname{im} T^* = (\ker T)^0, \qquad \operatorname{rank} T^* = \operatorname{rank} T.
$$

*Proof.* $\psi \in \ker T^*$ means $\psi \circ T = 0$, that is, $\psi$ kills every $Tv$: this is $\psi \in (\operatorname{im} T)^0$.
By Theorem 17.2, $\dim \ker T^* = m - \operatorname{rank} T$, and rank-nullity for $T^* : W^* \to V^*$ gives
$\operatorname{rank} T^* = m - \dim \ker T^* = \operatorname{rank} T$. For the image: if $\varphi = \psi \circ T$ then
$\varphi$ kills $\ker T$, so $\operatorname{im} T^* \subseteq (\ker T)^0$; both have dimension
$n - \dim\ker T = \operatorname{rank} T$, so they are equal. $\square$

Read through Theorem 17.4, the statement $\operatorname{rank} T^* = \operatorname{rank} T$ says **the column rank of
$A^{\mathsf T}$ equals the column rank of $A$**, which is "row rank equals column rank", proved in
[Chapter 7](07-The-Four-Subspaces.md) by elimination and here by pure counting. And $\ker T^* = (\operatorname{im} T)^0$
is the "left null space is orthogonal to the column space" of the four-subspaces picture, now stated without any dot
product: an equation $\psi(b) = 0$ that every $b = Ax$ satisfies is a solvability condition for $Ax = b$.

**Worked example 3.** $T : P_2 \to P_1$, $T(p) = p'$. In the bases $1, t, t^2$ and $1, t$,

$$
A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}, \qquad A^{\mathsf T} = \begin{pmatrix} 0 & 0 \\ 1 & 0 \\ 0 & 2 \end{pmatrix}.
$$

Let $\psi_0, \psi_1$ be the dual basis of $1, t$ ("constant coefficient", "coefficient of $t$"). Then
$T^*\psi_1$ is the functional $p \mapsto$ (coefficient of $t$ in $p'$) $= 2 \times$ (coefficient of $t^2$ in $p$),
which is $2\varphi_2$: the second column of $A^{\mathsf T}$ is $(0, 0, 2)$, as it should be. The kernel of $T$ is the
constants, and $\operatorname{im} T^* = (\ker T)^0$ is the set of functionals on $P_2$ that ignore the constant term,
spanned by $\varphi_1, \varphi_2$. Check: rank $2$ on both sides.

### When an inner product is present

On $\mathbb{R}^n$ with the dot product, every functional is $x \mapsto u \cdot x$ for exactly one vector $u$. In general,
on a finite-dimensional inner product space ([Chapter 11](11-Inner-Product-Spaces.md)) the map $u \mapsto \langle \cdot, u \rangle$
is an isomorphism $V \to V^*$ (over $\mathbb{C}$ it is conjugate-linear); this is the finite-dimensional **Riesz
representation theorem**. Through it, the dual map $T^*$ turns into the **adjoint**, defined by
$\langle Tv, w\rangle = \langle v, T^*w \rangle$, with matrix $A^{\mathsf T}$ (or $\bar A^{\mathsf T}$ over $\mathbb{C}$)
in orthonormal bases. That is why the same letter is used. But the dual map exists with no inner product at all; the
adjoint needs one. In infinite dimension the Riesz theorem becomes a deep fact about Hilbert spaces
([Chapter 20](20-Where-Linear-Algebra-Goes.md)).

## 17.3 Bilinear forms

*Level: advanced.* The expression $x^{\mathsf T} A y$ appears all over this book: the dot product is $x^{\mathsf T} y$,
a quadratic form is $x^{\mathsf T} A x$ ([Chapter 14](14-The-Spectral-Theorem.md)), the "inner product" of special
relativity is $t_1 t_2 - x_1 x_2 - y_1 y_2 - z_1 z_2$. What these have in common is that they eat two vectors and are
linear in each.

**Definition.** A **bilinear form** on $V$ is a function $b : V \times V \to F$ that is linear in each argument when the
other is fixed:

$$
b(u + u', v) = b(u, v) + b(u', v), \quad b(au, v) = a\,b(u, v),
$$

and the same in the second slot. It is **symmetric** if $b(u, v) = b(v, u)$, **alternating** if $b(v, v) = 0$ for all
$v$, and **skew-symmetric** if $b(u, v) = -b(v, u)$.

Alternating implies skew: expand $0 = b(u + v, u + v) = b(u, u) + b(u, v) + b(v, u) + b(v, v)$. The converse holds when
$1 + 1 \ne 0$ in $F$ (put $u = v$ in skew-symmetry to get $2b(v, v) = 0$). Over $\mathbb{Z}/2$ they differ: there
$b(u,v) = u_1v_1$ on $F^1$ is symmetric and skew but not alternating.

### The matrix of a form, and congruence

Given a basis $v_1, \ldots, v_n$, put $B_{ij} = b(v_i, v_j)$. Bilinearity gives, for coordinate columns $x, y$,

$$
b\Bigl(\sum x_i v_i, \sum y_j v_j\Bigr) = \sum_{i,j} x_i y_j B_{ij} = x^{\mathsf T} B y.
$$

Symmetric forms have symmetric matrices, alternating forms have skew-symmetric matrices with zero diagonal.

**How the matrix changes with the basis.** If the new basis vectors have old coordinates given by the columns of an
invertible $P$, then old coordinates are $x = Px'$, $y = Py'$, and $x^{\mathsf T} B y = x'^{\mathsf T}(P^{\mathsf T} B P) y'$.
So the new matrix is

$$
B' = P^{\mathsf T} B P.
$$

Compare with a linear map, whose matrix changes to $P^{-1} A P$ (similarity, [Chapter 6](06-Linear-Maps.md)). Two
matrices related by $B' = P^{\mathsf T} B P$ are called **congruent**. The same square table of numbers can stand for a
map or a form, and the two readings transform differently. This is the clearest sign of the difference between $V^*$
and $V$: a bilinear form is really a linear map $V \to V^*$, namely $u \mapsto b(u, \cdot)$, and $P^{\mathsf T}$ appears
because functionals transform by the transpose. When $P$ is orthogonal, $P^{\mathsf T} = P^{-1}$ and the two rules agree,
which is why the distinction can be ignored as long as you use only orthonormal bases.

**Invariants.** Congruence keeps the rank of $B$ (multiplying by invertible matrices keeps rank). The form is
**nondegenerate** if $B$ is invertible, equivalently if $b(u, v) = 0$ for all $v$ forces $u = 0$, equivalently if
$u \mapsto b(u, \cdot)$ is an isomorphism $V \to V^*$. The determinant is *not* invariant: $\det B' = (\det P)^2 \det B$.
Over $\mathbb{R}$ its sign is invariant, since $(\det P)^2 > 0$.

### Symmetric forms: diagonalising and Sylvester's law of inertia

A symmetric bilinear form $b$ gives a **quadratic form** $q(v) = b(v, v)$, and when $1 + 1 \ne 0$ you can recover $b$ from
$q$ by **polarisation**:

$$
b(u, v) = \tfrac{1}{2}\bigl(q(u + v) - q(u) - q(v)\bigr).
$$

**Theorem 17.6 (diagonalisation).** If $1 + 1 \ne 0$ in $F$, every symmetric bilinear form has a diagonal matrix in some
basis.

*Proof.* Induction on $n = \dim V$. If $b = 0$ any basis works. Otherwise $q$ is not identically zero (by polarisation),
so pick $v_1$ with $q(v_1) \ne 0$. The set $W = \{v : b(v_1, v) = 0\}$ is the kernel of the nonzero functional
$b(v_1, \cdot)$, so it has dimension $n - 1$, and $v_1 \notin W$, so $V = Fv_1 \oplus W$. By induction $W$ has a basis
$v_2, \ldots, v_n$ in which $b$ is diagonal; with $v_1$ added, every $b(v_1, v_j) = 0$ for $j \ge 2$. $\square$

Over $\mathbb{R}$ you can do better twice over. The spectral theorem ([Chapter 14](14-The-Spectral-Theorem.md))
diagonalises by an *orthogonal* $P$, so $P^{\mathsf T}BP = P^{-1}BP$ is the diagonal matrix of eigenvalues. And you may
rescale each basis vector by $1/\sqrt{|q(v_i)|}$, so each diagonal entry becomes $1$, $-1$ or $0$.

**Worked example 4.** $q(x, y) = x^2 + 4xy + y^2$ has matrix $B = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ (the $4xy$
splits as $2xy + 2yx$). Two routes to a diagonal form:

- *Completing the square:* $q = (x + 2y)^2 - 3y^2$. With $x' = x + 2y$, $y' = \sqrt{3}\,y$ you get $x'^2 - y'^2$.
- *Eigenvalues:* $B$ has eigenvalues $3$ and $-1$, so in an orthonormal eigenbasis $q = 3u^2 - v^2$.

Different diagonal entries ($1, -3$ against $3, -1$), but each route has one positive and one negative entry. That is no
accident.

**Theorem 17.7 (Sylvester's law of inertia, 1852).** Let $q$ be a real quadratic form on an $n$-dimensional space. In
every diagonalising basis, the number $p$ of positive diagonal entries, the number $m$ of negative ones and the number
$z$ of zeros are the same. The triple, or the pair $(p, m)$, is the **signature** of $q$.

*Proof.* $z$ is $n$ minus the rank, which is invariant. Suppose two diagonalising bases give $p$ and $p'$ positive
entries, and say $p > p'$. Let $U$ be the span of the $p$ basis vectors of the first basis on which $q$ is positive:
$q(u) > 0$ for every nonzero $u \in U$, because $q(\sum c_i u_i) = \sum c_i^2 q(u_i)$. Let $N$ be the span of the
$n - p'$ vectors of the second basis on which $q$ is negative or zero: $q(w) \le 0$ for every $w \in N$. Now
$\dim U + \dim N = p + n - p' > n$, so $U \cap N$ contains a nonzero vector $w$ (the dimension formula of
[Chapter 5](05-Independence-Bases-and-Dimension.md)). Then $q(w) > 0$ and $q(w) \le 0$, a contradiction. So $p = p'$, and
then $m = n - z - p$ agrees too. $\square$

So over $\mathbb{R}$, symmetric bilinear forms up to change of basis are classified completely by the signature. The
dot product on $\mathbb{R}^n$ is $(n, 0)$, positive definite. The Minkowski form of special relativity,
$t^2 - x^2 - y^2 - z^2$, has signature $(1, 3)$, and the light cone $q = 0$ separates "timelike" vectors from
"spacelike" ones. In Calculus [Chapter 15](../calculus/15-Functions-of-Several-Variables.md), the second derivative test
is a statement about the signature of the Hessian (see also [Chapter 14](14-The-Spectral-Theorem.md), 14.5).

**Worked example 5.** $q(x, y, z) = x^2 + 2xy + 2yz + z^2$. Completing squares,
$q = (x + y)^2 + (y + z)^2 - 2y^2$, so the signature is $(2, 1)$. Check with eigenvalues: the matrix
$\begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ has eigenvalues $2, 1, -1$: two positive, one negative.

Over $\mathbb{C}$ the story is even simpler (every nonzero diagonal entry can be scaled to $1$, so only the rank
matters), and over $\mathbb{Q}$ or finite fields it becomes a rich subject linking to number theory: whether
$x^2 + y^2 = 3z^2$ has a nonzero rational solution is a question about a rational quadratic form (it has none).

### Alternating forms and symplectic space

**Theorem 17.8.** If $b$ is a nondegenerate alternating form on $V$, then $\dim V$ is even, $n = 2k$, and there is a
basis $e_1, \ldots, e_k, f_1, \ldots, f_k$ with

$$
b(e_i, f_j) = \delta_{ij}, \qquad b(e_i, e_j) = b(f_i, f_j) = 0,
$$

so the matrix is $J = \begin{pmatrix} 0 & I_k \\ -I_k & 0 \end{pmatrix}$.

*Proof.* Take any $e_1 \ne 0$. By nondegeneracy some $v$ has $b(e_1, v) \ne 0$; scale it to get $f_1$ with
$b(e_1, f_1) = 1$. Then $b(f_1, e_1) = -1$, and $b(e_1,e_1) = b(f_1,f_1) = 0$ because $b$ is alternating. Let $W$ be the
set of $v$ with $b(e_1, v) = b(f_1, v) = 0$, the intersection of two kernels of independent functionals, of dimension
$n - 2$. Any $v$ splits as $v = \bigl(b(v, f_1)e_1 - b(v, e_1) f_1\bigr) + w$ with $w \in W$ (check by applying
$b(e_1, \cdot)$ and $b(f_1, \cdot)$), so $V = \operatorname{span}(e_1, f_1) \oplus W$, and $b$ restricted to $W$ is
still nondegenerate and alternating. Induct. Each step uses up two dimensions, so $n$ is even. $\square$

A space with such a form is called **symplectic**. Alternating forms are tied to the determinant: for a skew-symmetric
$A$ of odd size, $\det A = \det A^{\mathsf T} = \det(-A) = (-1)^n \det A = -\det A$, so $\det A = 0$ (over a field with
$1 + 1 \ne 0$), the matrix shadow of Theorem 17.8. Symplectic forms are the geometry of classical mechanics: positions
$q_i$ and momenta $p_i$ pair up as $e_i, f_i$, and Hamilton's equations preserve the form $\sum dq_i \wedge dp_i$ (that
$\wedge$ will be explained in 17.5).

## 17.4 Tensor products

*Level: advanced to expert.* Bilinear maps are everywhere: the dot product, matrix multiplication
$(A, B) \mapsto AB$, the cross product, the product of polynomials. But linear algebra is the theory of *linear* maps.
Is there a way to turn a bilinear map into a linear one, so that all the tools of this book apply? There is, and it
works by building a new space.

### What we want

Given spaces $V$ and $W$ over $F$, we want a space $V \otimes W$ and a bilinear map
$\otimes : V \times W \to V \otimes W$, written $(v, w) \mapsto v \otimes w$, that is the "most general" bilinear map:
every bilinear map out of $V \times W$ factors through it, in exactly one way.

**Universal property.** For every vector space $U$ and every bilinear $\beta : V \times W \to U$ there is exactly one
*linear* map $\tilde\beta : V \otimes W \to U$ with $\tilde\beta(v \otimes w) = \beta(v, w)$ for all $v, w$.

In words: bilinear maps out of $V \times W$ are the same thing as linear maps out of $V \otimes W$. That is the whole
purpose of the construction.

### Building it

*Construction.* Start with a huge vector space $\mathcal{F}$ having one basis vector $[v, w]$ for *every* pair
$(v, w) \in V \times W$ (the "free vector space" on the set $V \times W$). It knows nothing about bilinearity: in it
$[2v, w]$ and $2[v, w]$ are different basis vectors. Now force bilinearity: let $R$ be the subspace spanned by all

$$
[v + v', w] - [v, w] - [v', w], \quad [v, w + w'] - [v, w] - [v, w'], \quad [av, w] - a[v, w], \quad [v, aw] - a[v, w],
$$

and define $V \otimes W = \mathcal{F}/R$, the quotient space (the space of cosets of $R$, as in the MAT247 unit on
quotient spaces linked below). Write $v \otimes w$ for the coset of $[v, w]$. Because the generators of $R$ are now
zero, $\otimes$ is bilinear. Given a bilinear $\beta$, define a linear map on $\mathcal{F}$ by $[v, w] \mapsto \beta(v, w)$
on basis vectors; it kills every generator of $R$ precisely because $\beta$ is bilinear, so it passes to the quotient
and gives $\tilde\beta$. It is unique because the $v \otimes w$ span $V \otimes W$. That proves the universal property.

The construction is abstract on purpose: it shows that $V \otimes W$ exists without choosing bases. The next theorem
says what it looks like.

**Theorem 17.9 (basis of a tensor product).** If $v_1, \ldots, v_n$ is a basis of $V$ and $w_1, \ldots, w_m$ a basis of
$W$, then the $nm$ vectors $v_i \otimes w_j$ form a basis of $V \otimes W$. So
$\dim(V \otimes W) = \dim V \cdot \dim W$.

*Proof.* *Spanning:* every $v \otimes w$ expands, by bilinearity, as
$\sum_{i,j} x_i y_j\, v_i \otimes w_j$, and the $v \otimes w$ span. *Independence:* let $\varphi_i$ and $\psi_j$ be the
dual bases. For each pair $(k, l)$ the map $(v, w) \mapsto \varphi_k(v)\psi_l(w)$ is bilinear, so by the universal
property there is a linear $\lambda_{kl} : V \otimes W \to F$ with $\lambda_{kl}(v_i \otimes w_j) = \delta_{ik}\delta_{jl}$.
If $\sum c_{ij}\, v_i \otimes w_j = 0$, apply $\lambda_{kl}$ to get $c_{kl} = 0$. $\square$

So, concretely, $\mathbb{R}^n \otimes \mathbb{R}^m$ is a space of dimension $nm$, and you can picture its elements as
$n \times m$ arrays $(c_{ij})$; the **pure tensor** $x \otimes y$ is the array $c_{ij} = x_i y_j$, the outer product
$x y^{\mathsf T}$.

Note the contrast with the direct sum: $\dim(V \oplus W) = n + m$ but $\dim(V \otimes W) = nm$. The direct sum glues
spaces side by side; the tensor product multiplies their possibilities.

### Pure tensors and tensor rank

Not every element of $V \otimes W$ is a pure tensor $v \otimes w$. Under the identification with $n \times m$ matrices,
a pure tensor is a matrix $xy^{\mathsf T}$, which has rank at most 1, and a general element is a sum of such.

**Theorem 17.10.** Under $\mathbb{R}^n \otimes \mathbb{R}^m \cong \{n \times m \text{ matrices}\}$, the least number of pure
tensors needed to write an element equals the rank of the matrix.

*Proof.* A sum of $r$ outer products $\sum_{k=1}^r x_k y_k^{\mathsf T}$ has column space inside the span of
$x_1, \ldots, x_r$, so rank at most $r$. Conversely a matrix $C$ of rank $r$ can be written $C = XY^{\mathsf T}$ with
$X$ of size $n \times r$ (a basis of the column space) and $Y$ of size $m \times r$, and
$XY^{\mathsf T} = \sum_k x_k y_k^{\mathsf T}$ over the columns. (The SVD of [Chapter 15](15-The-Singular-Value-Decomposition.md)
gives such a decomposition with orthogonal pieces.) $\square$

**Worked example 6.** $e_1 \otimes e_1 + e_2 \otimes e_2$ in $\mathbb{R}^2 \otimes \mathbb{R}^2$ corresponds to the
identity matrix, of rank 2, so it is **not** a pure tensor. In quantum mechanics this exact phenomenon is
**entanglement** ([Chapter 19](19-Linear-Algebra-in-the-World.md), 19.2): a state of two particles is a vector in a
tensor product, and it is entangled when it is not a pure tensor.

For tensors with three or more factors, $U \otimes V \otimes W$, the same definition of rank (least number of pure
tensors $u \otimes v \otimes w$) behaves very differently: there is no "SVD" for it, and Håstad proved in 1990 that
computing it is NP-hard. It is also the heart of fast matrix multiplication: multiplying $2 \times 2$ matrices is a
tensor in $\mathbb{R}^4 \otimes \mathbb{R}^4 \otimes \mathbb{R}^4$ whose rank is $7$, and that number 7 *is* Strassen's
algorithm ([Chapter 18](18-Numerical-Linear-Algebra.md), 18.6).

### Linear maps as tensors, and the Kronecker product

**Theorem 17.11.** For finite-dimensional $V, W$ there is a natural isomorphism $V^* \otimes W \cong \operatorname{Hom}(V, W)$,
sending $\varphi \otimes w$ to the rank-one map $v \mapsto \varphi(v)\,w$.

*Proof.* The rule $(\varphi, w) \mapsto [v \mapsto \varphi(v)w]$ is bilinear, so it gives a linear map
$V^* \otimes W \to \operatorname{Hom}(V, W)$ by the universal property. It sends the basis $\varphi_j \otimes w_i$ to the
map with matrix $E_{ij}$ (a single 1 in place $(i, j)$), and these form a basis of $\operatorname{Hom}(V,W)$. A linear
map taking a basis to a basis is an isomorphism. $\square$

So a matrix is a tensor with one "upper" (vector) and one "lower" (covector) index, which is the language physicists use;
a bilinear form is an element of $V^* \otimes V^*$; and the trace is the linear map
$V^* \otimes V \to F$ induced by $(\varphi, v) \mapsto \varphi(v)$, which explains at a stroke why the trace does not
depend on the basis.

If $S : V \to V'$ and $T : W \to W'$ are linear, the map $(v, w) \mapsto Sv \otimes Tw$ is bilinear, so it gives a
linear map $S \otimes T : V \otimes W \to V' \otimes W'$ with $(S \otimes T)(v \otimes w) = Sv \otimes Tw$. In the bases
$v_i \otimes w_j$, ordered $(1,1), (1,2), \ldots$, its matrix is the **Kronecker product**

$$
A \otimes B = \begin{pmatrix} a_{11}B & a_{12}B & \cdots \\ a_{21}B & a_{22}B & \cdots \\ \vdots & & \ddots \end{pmatrix}.
$$

**Worked example 7.** With $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$,

$$
A \otimes B = \begin{pmatrix} 0 & 1 & 0 & 2 \\ 1 & 0 & 2 & 0 \\ 0 & 3 & 0 & 4 \\ 3 & 0 & 4 & 0 \end{pmatrix}.
$$

Facts that follow from $(S \otimes T)(S' \otimes T') = SS' \otimes TT'$: the eigenvalues of $A \otimes B$ are the
products $\lambda_i \mu_j$, and for $A$ of size $n$ and $B$ of size $m$, $\det(A \otimes B) = (\det A)^m (\det B)^n$.
Check: $\det A = -2$, $\det B = -1$, so the formula gives $(-2)^2(-1)^2 = 4$, and expanding the $4 \times 4$
determinant directly also gives 4.

### Changing the field

One more use. A real matrix may have complex eigenvalues, and in [Chapter 9](09-Eigenvalues-and-Eigenvectors.md) we
quietly treated it as complex. The honest way is the **complexification** $V_{\mathbb{C}} = \mathbb{C} \otimes_{\mathbb{R}} V$,
a complex vector space of the same dimension in which a real map $T$ extends as $1 \otimes T$. Tensor products are how
one "extends scalars" in general, from $\mathbb{Q}$ to $\mathbb{R}$, from $\mathbb{Z}$ to $\mathbb{Z}/p$, and so on
([Algebra book, Chapter 21](../algebra/21-Modules-and-Representations.md), where tensor products of modules appear).

## 17.5 Exterior algebra and the determinant again

*Level: expert.* In [Chapter 8](08-Determinants.md) the determinant was characterised by three properties: it is
multilinear in the columns, alternating (zero when two columns are equal), and $\det I = 1$. The permutation formula
followed. That was concrete but left a question: the determinant of a *linear map* $T : V \to V$ was defined through a
matrix and then shown not to depend on the basis. Is there a definition that never mentions a basis? The exterior
algebra gives one, and with it the language of differential forms.

### The wedge product

Think of a pair of vectors $u, v$ in $\mathbb{R}^3$ as a little oriented parallelogram. We want a product $u \wedge v$
that records that parallelogram (its plane, its area and its orientation) and nothing else. Then it should be:

- bilinear, because stretching a side stretches the area;
- alternating, $v \wedge v = 0$, because a degenerate parallelogram has no area. As in 17.3 this gives
  $u \wedge v = -v \wedge u$: reversing the order reverses orientation.

**Definition.** The $k$-th **exterior power** $\Lambda^k V$ is the space generated by symbols $v_1 \wedge \cdots \wedge v_k$
subject only to multilinearity and the rule that the symbol is zero when two of the $v_i$ are equal. (Formally: the
quotient of the $k$-fold tensor product $V \otimes \cdots \otimes V$ by the subspace spanned by tensors with two equal
factors.) It has the universal property you would guess: alternating multilinear maps $V^k \to U$ correspond to linear
maps $\Lambda^k V \to U$. By convention $\Lambda^0 V = F$ and $\Lambda^1 V = V$, and the **exterior algebra** is
$\Lambda V = \Lambda^0 V \oplus \Lambda^1 V \oplus \cdots$ with the product $\wedge$.

**Theorem 17.12.** If $e_1, \ldots, e_n$ is a basis of $V$, then the wedges $e_{i_1} \wedge \cdots \wedge e_{i_k}$ with
$i_1 < \cdots < i_k$ form a basis of $\Lambda^k V$. Hence $\dim \Lambda^k V = \binom{n}{k}$, $\Lambda^k V = 0$ for $k > n$,
and $\dim \Lambda V = 2^n$.

*Proof sketch.* *Spanning:* expand each $v_j$ in the basis; by multilinearity $v_1 \wedge \cdots \wedge v_k$ becomes a sum of
wedges of basis vectors. Any wedge with a repeated $e_i$ is zero, and the others can be reordered into increasing order at
the cost of a sign. *Independence* is the real content. For each increasing index set $I$, the function sending
$(v_1, \ldots, v_k)$ to the $k \times k$ minor of the coordinate matrix in rows $I$ is multilinear and alternating (a
property of determinants from [Chapter 8](08-Determinants.md)), so it gives a linear functional on $\Lambda^k V$ that is
$1$ on $e_I$ and $0$ on every other $e_J$. As in Theorem 17.9 this proves independence. (A fully self-contained proof that
avoids determinants, so that it can be used to *define* them, is in Lang's *Algebra* or Greub's *Multilinear Algebra*.)
$\square$

**Worked example 8 (two dimensions).** In $\mathbb{R}^2$, with $u = a e_1 + b e_2$ and $v = c e_1 + d e_2$,

$$
u \wedge v = ac\, e_1 \wedge e_1 + ad\, e_1 \wedge e_2 + bc\, e_2 \wedge e_1 + bd\, e_2 \wedge e_2 = (ad - bc)\, e_1 \wedge e_2.
$$

The coefficient is the determinant $\det\begin{pmatrix} a & c \\ b & d \end{pmatrix}$, the signed area of the
parallelogram (Section 8.1), and it fell out of nothing but the two rules.

**Worked example 9 (three dimensions and the cross product).** In $\mathbb{R}^3$, $\Lambda^2$ has basis
$e_1 \wedge e_2$, $e_1 \wedge e_3$, $e_2 \wedge e_3$. For $u = (1, 2, 3)$ and $v = (4, 5, 6)$, the coefficient of
$e_i \wedge e_j$ is $u_i v_j - u_j v_i$:

$$
u \wedge v = -3\, e_1 \wedge e_2 - 6\, e_1 \wedge e_3 - 3\, e_2 \wedge e_3.
$$

The cross product is $u \times v = (-3, 6, -3)$. The same three numbers, with one sign flipped: the cross product is the
wedge product transported back to vectors by the rule $e_2 \wedge e_3 \mapsto e_1$, $e_3 \wedge e_1 \mapsto e_2$,
$e_1 \wedge e_2 \mapsto e_3$ (note $e_3 \wedge e_1 = -e_1 \wedge e_3$). That rule, the **Hodge star**, uses the dot product
and the orientation; it only exists because $\binom{3}{2} = 3$. In $\mathbb{R}^4$, $\Lambda^2$ has dimension 6, there is
no cross product of two vectors, but the wedge is still there. This is why the cross product of Section 1.5 was
"3D only".

### The determinant without a basis

Now the payoff. Let $T : V \to V$ be linear and $\dim V = n$. The map
$(v_1, \ldots, v_n) \mapsto Tv_1 \wedge \cdots \wedge Tv_n$ is multilinear and alternating, so it induces a linear map
$\Lambda^n T : \Lambda^n V \to \Lambda^n V$. But $\Lambda^n V$ has dimension $\binom{n}{n} = 1$, and a linear map from a
1-dimensional space to itself is multiplication by a single number.

**Definition / Theorem 17.13.** $\det T$ is the number with

$$
Tv_1 \wedge \cdots \wedge Tv_n = (\det T)\; v_1 \wedge \cdots \wedge v_n \quad \text{for all } v_1, \ldots, v_n \in V.
$$

It agrees with the determinant of the matrix of $T$ in any basis, and $\det(ST) = \det S \cdot \det T$.

*Proof.* With $v_j = e_j$ a basis and $Te_j = \sum_i a_{ij} e_i$, expand $Te_1 \wedge \cdots \wedge Te_n$ by multilinearity.
Terms with a repeated $e_i$ vanish; the survivors have one term for each permutation $\sigma$, namely
$a_{\sigma(1)1} \cdots a_{\sigma(n)n}\, e_{\sigma(1)} \wedge \cdots \wedge e_{\sigma(n)}$, and reordering the wedge costs
$\operatorname{sgn}\sigma$. So the coefficient is $\sum_\sigma \operatorname{sgn}(\sigma) \prod_j a_{\sigma(j)j}$, the
permutation formula of Section 8.3. For the product rule:
$STv_1 \wedge \cdots \wedge STv_n = \det S \cdot (Tv_1 \wedge \cdots \wedge Tv_n) = \det S \det T \,(v_1 \wedge \cdots \wedge v_n)$.
$\square$

Compare this with the proof of $\det(AB) = \det A \det B$ in Section 8.4. Here it is one line, because the hard part
(that $\Lambda^n V$ is one-dimensional) was done once, in Theorem 17.12. And the meaning is clear: $\det T$ is the factor
by which $T$ scales signed $n$-dimensional volume, with "volume" meaning an element of $\Lambda^n V$. No basis was chosen.

**Worked example 10.** $T = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ on $\mathbb{R}^2$:
$Te_1 \wedge Te_2 = (2e_1 + e_2) \wedge (e_1 + 3e_2) = 6\, e_1 \wedge e_2 + e_2 \wedge e_1 = 5\, e_1 \wedge e_2$, so
$\det T = 5$. Check: $2 \cdot 3 - 1 \cdot 1 = 5$.

The intermediate powers carry information too. $\Lambda^k T$ acts on $\Lambda^k V$, its matrix entries are the
$k \times k$ minors of $A$, and its trace is the sum of the principal $k \times k$ minors, which is (up to sign) the
coefficient of $\lambda^{n-k}$ in the characteristic polynomial. So the whole characteristic polynomial is written in
the exterior powers: $\det(\lambda I - T) = \sum_k (-1)^k \operatorname{tr}(\Lambda^k T)\,\lambda^{n-k}$. The
**Cauchy-Binet formula** for $\det(AB)$ with non-square $A, B$ is just $\Lambda^k(ST) = \Lambda^k S\, \Lambda^k T$
written out in coordinates.

### Plücker coordinates: wedges as subspaces

A nonzero pure wedge $u \wedge v$ determines the plane $\operatorname{span}(u, v)$: if you replace $u, v$ by another
basis of the same plane, the wedge changes only by the determinant of the change of basis (Theorem 17.13 again). So a
2-plane in $F^4$ is recorded, up to scale, by the six coefficients $p_{ij}$ of $u \wedge v$, its **Plücker
coordinates**. Not every element of $\Lambda^2 F^4$ is a pure wedge: the pure ones are exactly those satisfying one
quadratic equation,

$$
p_{12}p_{34} - p_{13}p_{24} + p_{14}p_{23} = 0.
$$

(Necessity: for $\omega = u \wedge v$, $\omega \wedge \omega = 0$ because it repeats $u$; and
$\omega \wedge \omega = 2(p_{12}p_{34} - p_{13}p_{24} + p_{14}p_{23})\, e_1 \wedge e_2 \wedge e_3 \wedge e_4$. Sufficiency
takes a little more work.)

**Worked example 11.** The plane spanned by the rows of $\begin{pmatrix} 1 & 0 & 1 & 2 \\ 0 & 1 & 3 & 4 \end{pmatrix}$ has
$p_{ij}$ equal to the $2 \times 2$ minor in columns $i, j$: $p_{12} = 1$, $p_{13} = 3$, $p_{14} = 4$, $p_{23} = -1$,
$p_{24} = -2$, $p_{34} = -2$. Check the relation: $1 \cdot (-2) - 3 \cdot (-2) + 4 \cdot (-1) = -2 + 6 - 4 = 0$.

The set of all 2-planes in 4-space is thus a quadric hypersurface in a 5-dimensional projective space, the first example
of a **Grassmannian**, a central object of algebraic geometry and, through Schubert calculus, of enumerative questions
like "how many lines meet four given lines in space?" (answer: two, in general).

### Differential forms

In calculus, the objects you integrate over surfaces are **2-forms** such as $P\,dy \wedge dz + Q\,dz \wedge dx + R\,dx \wedge dy$.
At each point, $dx, dy, dz$ are the dual basis of $(\mathbb{R}^3)^*$ (they read off the components of a small displacement)
and a 2-form is an element of $\Lambda^2 (\mathbb{R}^3)^*$ attached to each point. The rule $dx \wedge dy = -dy \wedge dx$ is
why orientation matters in surface integrals, and the change of variables formula with its Jacobian determinant
([Calculus, Chapter 16](../calculus/16-Multiple-Integrals.md)) is Theorem 17.13 applied pointwise:
$df_1 \wedge \cdots \wedge df_n = \det(J)\, dx_1 \wedge \cdots \wedge dx_n$. Green's, Stokes's and the divergence theorem
become one statement, $\int_M d\omega = \int_{\partial M} \omega$; see the one-page sketch in
[Calculus, Chapter 17](../calculus/17-Vector-Calculus.md), 17.7.

<figure class="play" data-play="matrix2" data-mode="map" data-m="1,0.6,-0.4,1.2"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The determinant as the signed area of the parallelogram the two columns span, the wedge product of the columns.</figcaption></figure>

## A short history

Hermann Grassmann published the exterior algebra in *Die lineale Ausdehnungslehre* in 1844, with a revised version in
1862; it was so far ahead of its time that it was little read for decades, and it already contained what we call
vector spaces, dimension and the wedge product. Sylvester stated his law of inertia in 1852. Bilinear and quadratic
forms over the integers were studied intensively by Gauss (in the *Disquisitiones*, 1801) for number theory. Tensors,
as arrays transforming in a definite way under change of coordinates, came from the absolute differential calculus of
Ricci and Levi-Civita (1900) and became famous through general relativity. The coordinate-free tensor product with its
universal property is a twentieth-century algebraic idea: Hassler Whitney defined tensor products of abelian groups in
1938, and Bourbaki's *Algèbre* made the universal-property style standard. Élie Cartan developed differential forms in
the early twentieth century.

## Check yourself

??? question "1. Find the dual basis of $v_1 = (1, 0, 0)$, $v_2 = (1, 1, 0)$, $v_3 = (1, 1, 1)$ in $\mathbb{R}^3$."
    Put the vectors as columns of $P = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$. The dual basis is
    the rows of $P^{-1} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$:
    $\varphi_1 = x - y$, $\varphi_2 = y - z$, $\varphi_3 = z$.
    Check: $\varphi_1(v_2) = 1 - 1 = 0$, $\varphi_2(v_2) = 1 - 0 = 1$, $\varphi_2(v_3) = 1 - 1 = 0$, $\varphi_3(v_3) = 1$.

??? question "2. On $P_2$, write the functional $p \mapsto \int_0^1 p(t)\,dt$ as a combination of $p(0)$, $p(1)$ and $p(2)$."
    Its coordinates in the dual basis $e_0, e_1, e_2$ are $\int_0^1 L_k$ for the Lagrange polynomials of 17.1:
    $\int_0^1 \tfrac12(t-1)(t-2)\,dt = \tfrac{5}{12}$, $\int_0^1 -t(t-2)\,dt = \tfrac{2}{3}$,
    $\int_0^1 \tfrac12 t(t-1)\,dt = -\tfrac{1}{12}$. So $\int_0^1 p = \tfrac{5}{12}p(0) + \tfrac{8}{12}p(1) - \tfrac{1}{12}p(2)$.
    Check with $p = t^2$: $\tfrac{8}{12} - \tfrac{4}{12} = \tfrac{4}{12} = \tfrac13$. Correct.

??? question "3. Let $W \subseteq \mathbb{R}^4$ be spanned by $(1, 1, 0, 0)$ and $(0, 1, 1, 0)$. Find a basis of $W^0$."
    A row $(a, b, c, d)$ kills $W$ when $a + b = 0$ and $b + c = 0$, with $d$ free. Solutions: $(1, -1, 1, 0)$ and
    $(0, 0, 0, 1)$. So $W^0$ has dimension $2 = 4 - 2$, as Theorem 17.2 says.

??? question "4. Prove that $\varphi_1, \ldots, \varphi_k \in V^*$ are linearly independent if and only if the map $V \to F^k$, $v \mapsto (\varphi_1(v), \ldots, \varphi_k(v))$, is onto."
    Call the map $\Phi$. Its image is a subspace of $F^k$; if it is proper, it lies in the kernel of some nonzero
    functional on $F^k$, that is, there are $c_i$ not all zero with $\sum c_i \varphi_i(v) = 0$ for all $v$, so the
    $\varphi_i$ are dependent. Conversely if $\sum c_i \varphi_i = 0$ with some $c_i \ne 0$, every $\Phi(v)$ lies in the
    proper subspace $\sum c_i y_i = 0$, so $\Phi$ is not onto.

??? question "5. Using only the definition $T^*\psi = \psi \circ T$, show that $T$ is injective if and only if $T^*$ is onto (finite dimension)."
    By Theorem 17.5, $\operatorname{im} T^* = (\ker T)^0$. This is all of $V^*$ exactly when $(\ker T)^0$ has dimension
    $n$, that is (Theorem 17.2) when $\dim\ker T = 0$, which means $T$ is injective.

??? question "6. Find the signature of $q(x, y, z) = 2xy + 2yz + 2zx$."
    The matrix is $\begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} = J - I$ where $J$ is all ones. $J$ has
    eigenvalues $3, 0, 0$, so $J - I$ has $2, -1, -1$. Signature $(1, 2)$. By completing squares: put $x = u + v$, $y = u - v$;
    then $2xy = 2u^2 - 2v^2$ and $2yz + 2zx = 4uz$, so $q = 2(u + z)^2 - 2z^2 - 2v^2$: one plus, two minus.

??? question "7. Show that congruent real symmetric matrices need not be similar, using $B = I_2$ and $B' = \operatorname{diag}(1, 4)$."
    $B' = P^{\mathsf T} I P$ with $P = \operatorname{diag}(1, 2)$, so they are congruent (both signature $(2,0)$). But similar
    matrices have the same eigenvalues, and $I_2$ has eigenvalues $1, 1$ while $B'$ has $1, 4$. Not similar.

??? question "8. Is $e_1 \otimes e_1 + e_1 \otimes e_2 + e_2 \otimes e_1 + e_2 \otimes e_2$ a pure tensor? What about $e_1 \otimes e_2 - e_2 \otimes e_1$?"
    The first is the matrix with all four entries 1, of rank 1: it equals $(e_1 + e_2) \otimes (e_1 + e_2)$. The second is
    $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$, of rank 2, so it is not pure (Theorem 17.10).

??? question "9. Compute $u \wedge v \wedge w$ for $u = (1, 0, 2)$, $v = (0, 1, 1)$, $w = (1, 1, 0)$ in $\mathbb{R}^3$."
    By Theorem 17.13 it is $\det\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 2 & 1 & 0 \end{pmatrix} e_1 \wedge e_2 \wedge e_3$.
    Expanding along the first row: $1(0 - 1) - 0 + 1(0 - 2) = -3$. So $u \wedge v \wedge w = -3\, e_1 \wedge e_2 \wedge e_3$:
    the three vectors span a parallelepiped of volume 3 with negative orientation.

??? question "10. Show that $\dim \Lambda^2 V = \dim(V \otimes V) - \dim S^2 V$, where $S^2 V$ (symmetric tensors) has dimension $\binom{n+1}{2}$, and check for $n = 3$."
    $\dim V \otimes V = n^2$ and $\binom{n+1}{2} + \binom{n}{2} = \frac{n(n+1) + n(n-1)}{2} = n^2$. So
    $\binom{n}{2} = n^2 - \binom{n+1}{2}$. For $n = 3$: $3 = 9 - 6$. This reflects $V \otimes V = S^2V \oplus \Lambda^2 V$
    (when $1 + 1 \ne 0$): every matrix is symmetric part plus skew part.

??? question "11. Prove that a nondegenerate symmetric bilinear form on a real space of dimension 2 with negative determinant (in some basis) has signature $(1, 1)$, and find two independent vectors with $q = 0$ for $q = x^2 + 4xy + y^2$."
    The sign of the determinant is invariant under congruence, and in a diagonal basis the determinant is the product of
    the diagonal entries, so one is positive and one negative. For $q = (x + 2y)^2 - 3y^2$, $q = 0$ when
    $x + 2y = \pm\sqrt3\, y$, giving $(-2 + \sqrt3, 1)$ and $(-2 - \sqrt3, 1)$, the two "light-like" lines.
    Check the first: $x = -2 + \sqrt3$, $x^2 = 7 - 4\sqrt3$, $4xy = -8 + 4\sqrt3$, $y^2 = 1$; sum $0$.

??? question "12. Verify the Plücker relation for the plane spanned by $(1, 2, 0, 1)$ and $(0, 1, 1, 1)$."
    Minors: $p_{12} = 1\cdot1 - 2\cdot0 = 1$, $p_{13} = 1\cdot 1 - 0 \cdot 0 = 1$, $p_{14} = 1\cdot1 - 1\cdot0 = 1$,
    $p_{23} = 2\cdot1 - 0\cdot1 = 2$, $p_{24} = 2\cdot1 - 1\cdot1 = 1$, $p_{34} = 0\cdot1 - 1\cdot1 = -1$.
    Then $p_{12}p_{34} - p_{13}p_{24} + p_{14}p_{23} = -1 - 1 + 2 = 0$.

## What you learned

- The dual space $V^*$ is the space of linear functionals; a basis has a dual basis, and the coordinates of a functional
  are its values on the basis. Simpson's rule is one consequence.
- $V$ and $V^*$ have the same finite dimension but are not naturally the same; $V$ and $V^{**}$ are, via evaluation.
- The dual map $T^*\psi = \psi \circ T$ has matrix $A^{\mathsf T}$; its kernel and image are annihilators, which proves
  row rank equals column rank again.
- Bilinear forms change by congruence $P^{\mathsf T}BP$, not similarity. Real symmetric forms are classified by their
  signature (Sylvester); nondegenerate alternating forms live only in even dimension, with a standard symplectic basis.
- The tensor product turns bilinear maps into linear maps; $\dim(V \otimes W) = \dim V \dim W$; the rank of a tensor in
  $V \otimes W$ is matrix rank, but for three factors it is a hard problem.
- The exterior power $\Lambda^k V$ has dimension $\binom{n}{k}$; $\Lambda^n V$ is a line and the determinant is how $T$
  acts on it, which makes $\det(ST) = \det S \det T$ immediate.

**Next:** [Chapter 18](18-Numerical-Linear-Algebra.md), what happens when all this meets a computer with rounding errors,
millions of unknowns and a time budget.

## Further reading

- P. R. Halmos, *Finite-Dimensional Vector Spaces*, 2nd edition, Van Nostrand, 1958 (duality and tensor products in a
  short classic).
- S. Axler, *Linear Algebra Done Right*, 4th edition, Springer, 2024 (chapters on duality and multilinear algebra).
- W. H. Greub, *Multilinear Algebra*, 2nd edition, Springer, 1978.
- S. Lang, *Algebra*, revised 3rd edition, Springer, 2002 (tensor and exterior algebras in full generality).
- K. Conrad, expository notes "Tensor products" and "Exterior powers" (University of Connecticut, online), very clear.
- V. I. Arnold, *Mathematical Methods of Classical Mechanics*, Springer, 1978 (symplectic forms and differential forms
  in mechanics).
- On this site: U of T guides [MAT247 Unit 8: Dual spaces and quotient spaces](../../uoft/MAT247H1/unit08.md),
  [MAT247 Unit 10: Rational form, bilinear and quadratic forms](../../uoft/MAT247H1/unit10.md) and
  [MAT240 Unit 8: Determinants](../../uoft/MAT240H1/unit08.md); [Calculus, Chapter 17](../calculus/17-Vector-Calculus.md)
  for differential forms; the [Algebra book, Chapter 21](../algebra/21-Modules-and-Representations.md) for modules and
  tensor products over rings; the [Geometry book](../geometry/index.md) for the geometry behind forms and Grassmannians.
