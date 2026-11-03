# 16. Jordan form

*Diagonal matrices are the easiest to understand, and Chapters 9 and 14 showed that many matrices become diagonal in the
right basis. But not all: the shear $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has only one line of eigenvectors, and
no change of basis will ever make it diagonal. What is the simplest form every square matrix can be brought to? This
chapter answers with the Jordan normal form: diagonal except for some 1s just above the diagonal, in a precise pattern
that tells you everything about the matrix up to change of basis. Along the way you will meet generalised eigenvectors,
prove the Cayley-Hamilton theorem and use the minimal polynomial, see why differential equations produce solutions like
$te^{t}$, and finish with the rational canonical form, which works over any field at all.*

!!! abstract "In this chapter"
    **You will learn:**

    - why some matrices cannot be diagonalised, and the difference between algebraic and geometric multiplicity
    - generalised eigenvectors, and a proof that they always fill up the whole space when the characteristic polynomial splits
    - the Jordan normal form, how to find it from ranks alone, and why it is unique
    - a complete proof of the Cayley-Hamilton theorem, and the minimal polynomial as a test for diagonalisability
    - how Jordan blocks make $e^{tA}$ computable and where the solutions $t^ke^{\lambda t}$ come from
    - the rational canonical form, which classifies matrices up to similarity over any field

    **You need:** [Chapter 9](09-Eigenvalues-and-Eigenvectors.md) (eigenvalues, diagonalisation),
    [Chapter 10](10-Applications-of-Eigenvalues.md) (the matrix exponential and $x' = Ax$),
    [Chapter 6](06-Linear-Maps.md) (kernels, images, rank-nullity, similar matrices) and
    [Chapter 8](08-Determinants.md) (determinants, the adjugate). For 16.6, polynomials over a field from
    [Algebra, Chapter 17](../algebra/17-Rings-and-Ideals.md) help.

    **Levels:** 16.1 is intermediate; 16.2 to 16.5 are advanced; 16.6 is advanced to expert.

## 16.1 When a matrix cannot be diagonalised

**The question.** Can every square matrix be written as $PDP^{-1}$ with $D$ diagonal? Over the real numbers, certainly
not: a rotation by $90°$ has no real eigenvalues at all. That problem goes away over the complex numbers, where every
polynomial has roots. But there is a second, deeper obstruction that the complex numbers do not cure.

Look at $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. Its characteristic polynomial is $(\lambda - 1)^2$, so its only
eigenvalue is 1. The eigenvectors solve $(S - I)x = 0$, that is $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}x = 0$, so
$x_2 = 0$: only the multiples of $(1, 0)$. If $S = PDP^{-1}$, the diagonal entries of $D$ would be the eigenvalues, so
$D = I$, and then $S = PIP^{-1} = I$, which it is not. There are not enough eigenvectors to make a basis.

**Two multiplicities.** For an eigenvalue $\lambda$ of an $n\times n$ matrix $A$:

- the **algebraic multiplicity** $a(\lambda)$ is the number of times $\lambda$ is a root of the characteristic polynomial
  $p_A(x) = \det(xI - A)$;
- the **geometric multiplicity** $g(\lambda)$ is $\dim\ker(A - \lambda I)$, the number of independent eigenvectors.

For $S$, $a(1) = 2$ but $g(1) = 1$.

**Theorem 16.1.** Always $1 \le g(\lambda) \le a(\lambda)$.

*Proof.* $g \ge 1$ because $\lambda$ is an eigenvalue. Let $v_1, \dots, v_g$ be a basis of the eigenspace and extend it to
a basis $v_1, \dots, v_n$ of the whole space. In this basis $A$ has the block form

$$
\begin{pmatrix} \lambda I_g & * \\ 0 & C \end{pmatrix},
$$

because the first $g$ basis vectors are sent to $\lambda$ times themselves. A change of basis does not change the
characteristic polynomial, and the determinant of a block triangular matrix is the product of the diagonal blocks'
determinants, so $p_A(x) = (x - \lambda)^g\,p_C(x)$. Hence $\lambda$ is a root at least $g$ times. $\square$

**Theorem 16.2 (test for diagonalisability).** An $n\times n$ matrix $A$ over a field $F$ is diagonalisable over $F$ if and
only if its characteristic polynomial splits into linear factors over $F$ and $g(\lambda) = a(\lambda)$ for every
eigenvalue $\lambda$.

*Proof.* If $A = PDP^{-1}$, then $p_A(x) = \prod(x - d_{ii})$ splits, and the number of times $\lambda$ appears on the
diagonal of $D$ is both $a(\lambda)$ and the number of columns of $P$ that are eigenvectors for $\lambda$, which are
independent; so $g(\lambda) \ge a(\lambda)$, and with Theorem 16.1 they are equal. Conversely, if $p_A$ splits, the
$a(\lambda)$ add up to $n$; if each eigenspace has dimension $a(\lambda)$, the union of bases of the eigenspaces has $n$
vectors, and it is independent because eigenvectors for different eigenvalues are independent
([Chapter 9](09-Eigenvalues-and-Eigenvectors.md)). That is a basis of eigenvectors. $\square$

**Worked example.** $A = \begin{pmatrix} 3 & 1 \\ -1 & 1 \end{pmatrix}$. The trace is 4 and the determinant is 4, so
$p_A(x) = x^2 - 4x + 4 = (x - 2)^2$, with $a(2) = 2$. Now
$A - 2I = \begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix}$ has rank 1, so $g(2) = 2 - 1 = 1$. Not diagonalisable. Unlike
$S$, nothing about the entries of $A$ makes this obvious at a glance; the multiplicities reveal it.

**How common is this?** Rare, in one sense: a matrix with $n$ distinct eigenvalues is always diagonalisable, and a matrix
with random real entries has distinct eigenvalues with probability 1. But "rare" is misleading. Matrices with
structure, such as the companion matrix of a polynomial with a repeated root, a nilpotent matrix, or the matrix of
differentiation on polynomials, are often not diagonalisable, and those are precisely the ones that come up in
differential equations and algebra. Moreover, *nearly* defective matrices, with two eigenvalues very close together and
eigenvectors nearly parallel, behave numerically almost as badly as defective ones. We need a theory of what happens
instead.

## 16.2 Generalised eigenvectors

*Level: advanced.*

**The idea.** For $A = \begin{pmatrix} 3 & 1 \\ -1 & 1 \end{pmatrix}$, put $N = A - 2I = \begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix}$.
We found that $N$ kills only a line. But $N^2 = 0$ (check it), so $N^2$ kills *everything*. Every vector is killed by some
power of $A - 2I$, even though only some are killed by the first power.

**Definition.** A nonzero vector $v$ is a **generalised eigenvector** of $A$ for $\lambda$ if $(A - \lambda I)^kv = 0$ for
some $k \ge 1$. The **generalised eigenspace** is

$$
G_\lambda = \{\, v : (A - \lambda I)^kv = 0 \text{ for some } k \,\} = \ker(A - \lambda I)^n ,
$$

where the last equality is part of the lemma below. Ordinary eigenvectors are the case $k = 1$.

**Chains.** For the $2\times 2$ example, start with a vector not killed by $N$, say $v_2 = (1, 0)$. Then
$v_1 = Nv_2 = (1, -1)$ is an ordinary eigenvector (since $Nv_1 = N^2v_2 = 0$). In the basis $v_1, v_2$:

$$
Av_1 = 2v_1, \qquad Av_2 = 2v_2 + Nv_2 = 2v_2 + v_1 .
$$

So with $P = \begin{pmatrix} 1 & 1 \\ -1 & 0 \end{pmatrix}$ (columns $v_1$, $v_2$),

$$
P^{-1}AP = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}.
$$

*Check:* $AP = \begin{pmatrix} 2 & 3 \\ -2 & -1 \end{pmatrix}$ and $P\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ -2 & -1 \end{pmatrix}$.
This is the best one can do: not diagonal, but diagonal plus a single 1. In general, a **Jordan chain** of length $s$ for
$\lambda$ is a list $v_1, \dots, v_s$ with $(A - \lambda I)v_1 = 0$ and $(A - \lambda I)v_{j} = v_{j-1}$ for $j \ge 2$; on
its span $A$ acts by the **Jordan block**

$$
J_s(\lambda) = \begin{pmatrix} \lambda & 1 & & \\ & \lambda & \ddots & \\ & & \ddots & 1 \\ & & & \lambda \end{pmatrix}
\qquad (s\times s,\ \lambda \text{ on the diagonal, 1 just above it}).
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="Two Jordan chains drawn as rows of dots with arrows labelled N pointing from right to left. Top row: v3 maps to v2, v2 maps to v1, and v1 maps to 0; this chain gives a 3 by 3 Jordan block. Bottom row: w1 maps to 0; this chain gives a 1 by 1 block, an ordinary eigenvector.">
  <circle cx="60" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="60" y="55" font-size="13" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="160" cy="50" r="16" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="55" font-size="13" text-anchor="middle" fill="currentColor">v1</text>
  <circle cx="260" cy="50" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="260" y="55" font-size="13" text-anchor="middle" fill="currentColor">v2</text>
  <circle cx="360" cy="50" r="16" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="360" y="55" font-size="13" text-anchor="middle" fill="currentColor">v3</text>
  <line x1="342" y1="50" x2="282" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="282,45 274,50 282,55" fill="currentColor"/>
  <line x1="242" y1="50" x2="182" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="182,45 174,50 182,55" fill="currentColor"/>
  <line x1="142" y1="50" x2="82" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="82,45 74,50 82,55" fill="currentColor"/>
  <text x="310" y="40" font-size="12" text-anchor="middle" fill="currentColor">N</text>
  <text x="210" y="40" font-size="12" text-anchor="middle" fill="currentColor">N</text>
  <text x="110" y="40" font-size="12" text-anchor="middle" fill="currentColor">N</text>
  <text x="400" y="55" font-size="12" fill="currentColor">J3(λ)</text>
  <circle cx="60" cy="120" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="60" y="125" font-size="13" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="160" cy="120" r="16" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="125" font-size="13" text-anchor="middle" fill="currentColor">w1</text>
  <line x1="142" y1="120" x2="82" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="82,115 74,120 82,125" fill="currentColor"/>
  <text x="110" y="110" font-size="12" text-anchor="middle" fill="currentColor">N</text>
  <text x="200" y="125" font-size="12" fill="currentColor">J1(λ)</text>
  <text x="220" y="162" font-size="12" text-anchor="middle" fill="currentColor">N = A − λI; green dots are ordinary eigenvectors</text>
</svg>
</div>

**Lemma 16.3 (Fitting).** Let $N$ be a linear map on an $n$-dimensional space $V$. Then
$V = \ker N^n \oplus \operatorname{im} N^n$, and both pieces are mapped into themselves by every linear map that commutes
with $N$.

*Proof.* The kernels grow, $\ker N \subseteq \ker N^2 \subseteq \cdots$. Once two in a row are equal, say
$\ker N^m = \ker N^{m+1}$, all later ones are equal too: if $N^{m+2}x = 0$ then $N^{m+1}(Nx) = 0$, so $N^m(Nx) = 0$, so
$x \in \ker N^{m+1}$. Each strict step raises the dimension by at least 1, and the dimension is at most $n$, so the chain
has stopped by step $n$: $\ker N^n = \ker N^{2n}$.

Now if $x \in \ker N^n \cap \operatorname{im} N^n$, write $x = N^ny$. Then $N^{2n}y = N^nx = 0$, so
$y \in \ker N^{2n} = \ker N^n$ and $x = N^ny = 0$. The intersection is $\{0\}$, and by rank-nullity
$\dim\ker N^n + \dim\operatorname{im}N^n = n$, so the sum is all of $V$. Finally, if $AN = NA$ then $A$ commutes with $N^n$,
so $N^nx = 0$ implies $N^n(Ax) = AN^nx = 0$, and $x = N^ny$ implies $Ax = N^n(Ay)$. $\square$

**Theorem 16.4 (generalised eigenspace decomposition).** If the characteristic polynomial of $A$ splits over $F$, as
$p_A(x) = (x - \lambda_1)^{a_1}\cdots(x - \lambda_k)^{a_k}$ with distinct $\lambda_i$, then

$$
F^n = G_{\lambda_1} \oplus G_{\lambda_2} \oplus \cdots \oplus G_{\lambda_k}, \qquad \dim G_{\lambda_i} = a_i ,
$$

each $G_{\lambda_i}$ is mapped into itself by $A$, and on $G_{\lambda_i}$ the only eigenvalue of $A$ is $\lambda_i$.

*Proof.* Apply Fitting's lemma to $N = A - \lambda_1I$, which commutes with $A$: $F^n = G_{\lambda_1} \oplus W$ with
$W = \operatorname{im}N^n$, both invariant under $A$. In a basis adapted to this splitting, $A$ is block diagonal, so
$p_A = p_{A|G}\cdot p_{A|W}$. On $G_{\lambda_1}$, $N$ is nilpotent ($N^n = 0$ there), so if $Av = \mu v$ with
$v \in G_{\lambda_1}$ nonzero, then $N^nv = (\mu - \lambda_1)^nv = 0$ forces $\mu = \lambda_1$: the only eigenvalue of
$A$ on $G_{\lambda_1}$ is $\lambda_1$, and since $p_{A|G}$ divides $p_A$ and splits, $p_{A|G} = (x - \lambda_1)^{\dim G}$.
On $W$, $\lambda_1$ is not an eigenvalue: a vector of $W$ killed by $N$ lies in $\ker N^n \cap W = \{0\}$. Comparing the
powers of $(x - \lambda_1)$ in $p_A = p_{A|G}\,p_{A|W}$ gives $\dim G_{\lambda_1} = a_1$. Now repeat with $A$ restricted to
$W$, whose characteristic polynomial $(x-\lambda_2)^{a_2}\cdots(x-\lambda_k)^{a_k}$ still splits; by induction on $k$, $W$
is the direct sum of the generalised eigenspaces of $A|_W$, of dimensions $a_2, \dots, a_k$. Each of these lies inside the
corresponding $G_{\lambda_i}$ of $A$, which also has dimension $a_i$ (by the first part of the argument applied to
$\lambda_i$), so they are equal. $\square$

Over $\mathbb C$ the characteristic polynomial always splits, so **every complex matrix is the direct sum of its
generalised eigenspaces**. This is the decisive step: it reduces everything to one eigenvalue at a time, and on
$G_\lambda$ the map $A - \lambda I$ is nilpotent.

## 16.3 Jordan normal form

*Level: advanced.*

**Theorem 16.5 (Jordan normal form).** Let $A$ be an $n \times n$ matrix over a field $F$ whose characteristic polynomial
splits over $F$ (for example, any complex matrix). Then there is an invertible $P$ with

$$
P^{-1}AP = J = \begin{pmatrix} J_{s_1}(\lambda_1) & & \\ & \ddots & \\ & & J_{s_m}(\lambda_m) \end{pmatrix},
$$

a block diagonal matrix of Jordan blocks (the $\lambda$'s here need not be distinct). The blocks are unique up to their
order. In particular, two such matrices are similar if and only if they have the same Jordan blocks.

The Jordan form records, for each eigenvalue $\lambda$:

- the number of blocks, which is $g(\lambda)$ (each block has exactly one eigenvector, its first basis vector);
- the total size of the blocks, which is $a(\lambda)$;
- the size of the largest block, which (16.4) is the power of $(x - \lambda)$ in the minimal polynomial.

$A$ is diagonalisable exactly when all blocks have size 1.

*Proof sketch.* By Theorem 16.4 it is enough to treat one generalised eigenspace $G_\lambda$, where $N = A - \lambda I$ is
nilpotent; we need a basis of $G_\lambda$ made of Jordan chains for $N$. This is the **structure theorem for nilpotent
maps**: if $N$ is nilpotent on a space $V$, then $V$ has a basis consisting of chains
$v, Nv, N^2v, \dots, N^{s-1}v$ with $N^sv = 0$. The standard proof is by induction on $\dim V$. Since $N$ is nilpotent,
$\operatorname{im}N$ is a smaller invariant subspace, so by induction it has a chain basis. Each chain in $\operatorname{im}N$
ends (at its top) in a vector of the form $Nu$; adding $u$ lengthens that chain by one. The bottoms of the chains of
$\operatorname{im}N$ are independent vectors of $\ker N$; extend them to a basis of $\ker N$ with extra vectors, each a chain
of length 1. Counting with rank-nullity shows the total number of vectors is $\dim V$, and a short argument (apply $N$ to a
supposed dependence and use the induction hypothesis) shows they are independent. The details take about a page and are
in Axler's *Linear Algebra Done Right*, chapter 8, or Friedberg, Insel and Spence, chapter 7, both listed below.
Uniqueness follows from the rank formula below, since ranks do not depend on a choice of basis. $\square$

**Finding the Jordan form from ranks.** In a single block $J_s(0)$, each power of $J_s(0)$ moves the diagonal of 1s one
place further up, so $\operatorname{rank}J_s(0)^k = \max(s - k, 0)$. Going from the $(k-1)$-th power to the $k$-th lowers
the rank by 1 exactly when $s \ge k$. Adding over the blocks for $\lambda$ (blocks for other eigenvalues keep full rank
under powers of $A - \lambda I$, so they do not affect differences), we get:

$$
\#\{\text{blocks for } \lambda \text{ of size} \ge k\} = \operatorname{rank}(A - \lambda I)^{k-1} - \operatorname{rank}(A - \lambda I)^k .
$$

This formula proves uniqueness and is also the practical way to find $J$.

**Worked example.** Find the Jordan form of

$$
B = \begin{pmatrix} 2 & 0 & 1 & -1 \\ 0 & 2 & 1 & -1 \\ -1 & 1 & 1 & 2 \\ -1 & 1 & -1 & 4 \end{pmatrix}.
$$

*Step 1: eigenvalues.* The characteristic polynomial is $(x - 2)^3(x - 3)$ (a computer algebra system, or expansion along
a row, gives it; *check:* the trace is $2 + 2 + 1 + 4 = 9 = 2 + 2 + 2 + 3$).

*Step 2: ranks for $\lambda = 2$.* With $N = B - 2I = \begin{pmatrix} 0 & 0 & 1 & -1 \\ 0 & 0 & 1 & -1 \\ -1 & 1 & -1 & 2 \\ -1 & 1 & -1 & 2 \end{pmatrix}$,
rows 1 and 2 are equal and rows 3 and 4 are equal, and the two distinct rows are independent, so $\operatorname{rank}N = 2$.
One computes $N^2$: its first two rows are zero and its last two are both $(-1, 1, -1, 2)$, so $\operatorname{rank}N^2 = 1$;
and $\operatorname{rank}N^3 = 1$ as well. With $\operatorname{rank}N^0 = 4$:

- blocks of size $\ge 1$: $4 - 2 = 2$;
- blocks of size $\ge 2$: $2 - 1 = 1$;
- blocks of size $\ge 3$: $1 - 1 = 0$.

So for $\lambda = 2$ there is one block of size 2 and one of size 1 (total $3 = a(2)$, as it must be). For $\lambda = 3$,
$a(3) = 1$ forces a single block of size 1.

$$
J = \begin{pmatrix} 2 & 1 & 0 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \end{pmatrix}.
$$

*Step 3: a Jordan basis.* We need a vector in $\ker N^2$ but not in $\ker N$: $v_2 = (-1, 0, 1, 0)$ works, and
$v_1 = Nv_2 = (1, 1, 0, 0)$. Then another eigenvector for 2 independent of $v_1$: $w = (1, 0, 1, 1)$ (check $Nw = 0$).
And an eigenvector for 3: $u = (0, 0, 1, 1)$ (check $Bu = (0, 0, 3, 3)$). With $P = (v_1\ v_2\ w\ u)$, which has
determinant 1, $P^{-1}BP = J$.

*Check by machine.* With sympy (a library outside Python's standard one), `Matrix(B).jordan_form()` returns a matrix $P$
and the same $J$.

**What Jordan form is good for, and what it is not.** It answers every algebraic question about a single matrix: its
powers, its exponential, its minimal polynomial, which matrices commute with it, whether it has a square root. It is the
classification of matrices up to similarity over $\mathbb C$. But it is *not* computable in floating point: an arbitrarily
small change to the entries can change the Jordan form (perturb $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ to
$\begin{pmatrix} 0 & 1 \\ \varepsilon & 0 \end{pmatrix}$, whose eigenvalues $\pm\sqrt\varepsilon$ are distinct, so it is
diagonalisable). Numerical software uses the Schur form ([Chapter 14](14-The-Spectral-Theorem.md)) instead, which is
stable. Jordan form is a tool for proofs and for exact computation.

## 16.4 Cayley-Hamilton and the minimal polynomial

*Level: advanced.*

**A surprising identity.** Take $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ with characteristic polynomial
$p(x) = x^2 - (a + d)x + (ad - bc)$. Substitute the *matrix* $A$ for $x$:

$$
A^2 - (a + d)A + (ad - bc)I = \begin{pmatrix} a^2 + bc & ab + bd \\ ca + dc & cb + d^2 \end{pmatrix} - \begin{pmatrix} a^2 + ad & ab + bd \\ ac + cd & ad + d^2 \end{pmatrix} + \begin{pmatrix} ad - bc & 0 \\ 0 & ad - bc \end{pmatrix} = 0 .
$$

Every matrix satisfies its own characteristic polynomial.

**Theorem 16.6 (Cayley-Hamilton).** For every $n\times n$ matrix $A$ over any field (indeed over any commutative ring),
$p_A(A) = 0$, where $p_A(x) = \det(xI - A)$.

**A tempting false proof.** "Put $x = A$ in $\det(xI - A)$ to get $\det(A - A) = \det 0 = 0$." This is wrong: $p_A(A)$ is a
*matrix*, while $\det(AI - A)$ is a *number*, and substituting a matrix for $x$ inside a determinant is not the same as
substituting it into the polynomial that the determinant produces.

*Proof.* Recall the adjugate ([Chapter 8](08-Determinants.md)): for every square matrix $M$, $M\operatorname{adj}(M) = \det(M)I$.
Apply this to $M = xI - A$, a matrix whose entries are polynomials in $x$:

$$
(xI - A)\operatorname{adj}(xI - A) = p_A(x)I .
$$

The entries of $\operatorname{adj}(xI - A)$ are $(n-1)\times(n-1)$ minors, polynomials of degree at most $n - 1$, so we can
collect powers of $x$ and write $\operatorname{adj}(xI - A) = B_0 + B_1x + \cdots + B_{n-1}x^{n-1}$ with constant matrices
$B_k$. Write $p_A(x) = x^n + c_{n-1}x^{n-1} + \cdots + c_1x + c_0$. Comparing coefficients of each power of $x$:

$$
\begin{aligned}
x^0:&\quad -AB_0 = c_0I \\
x^k\ (1 \le k \le n-1):&\quad B_{k-1} - AB_k = c_kI \\
x^n:&\quad B_{n-1} = I .
\end{aligned}
$$

Multiply the equation for $x^k$ on the left by $A^k$ and add all of them up:

$$
-AB_0 + (AB_0 - A^2B_1) + (A^2B_1 - A^3B_2) + \cdots + (A^{n-1}B_{n-2} - A^nB_{n-1}) + A^nB_{n-1} = c_0I + c_1A + \cdots + c_{n-1}A^{n-1} + A^n .
$$

The left side telescopes to 0, and the right side is $p_A(A)$. $\square$

(Comparing coefficients is legitimate because both sides are polynomials in $x$ with matrix coefficients, and two such
polynomials are equal exactly when their coefficients are. All the products in the sum are of matrices that need not
commute, but we only ever multiplied on the left by powers of $A$, so the telescoping is honest.)

**Using it.** Cayley-Hamilton says $A^n$ is a combination of $I, A, \dots, A^{n-1}$, so every power of $A$, and every
polynomial in $A$, is such a combination. For an invertible $A$ it also gives the inverse as a polynomial in $A$: from
$p_A(A) = 0$ and $c_0 = \pm\det A \ne 0$,

$$
A^{-1} = -\frac{1}{c_0}\left(A^{n-1} + c_{n-1}A^{n-2} + \cdots + c_1I\right).
$$

**Worked example.** $M = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ has trace 5 and determinant 5, so $M^2 - 5M + 5I = 0$.
Then $M(5I - M) = 5I$ and

$$
M^{-1} = \frac15(5I - M) = \frac15\begin{pmatrix} 3 & -1 \\ -1 & 2 \end{pmatrix}.
$$

*Check:* $\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} 3 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 5 & 0 \\ 0 & 5 \end{pmatrix}$.
And $M^3 = M\cdot M^2 = M(5M - 5I) = 5M^2 - 5M = 5(5M - 5I) - 5M = 20M - 25I$.

**The minimal polynomial.** The polynomials $f$ with $f(A) = 0$ include $p_A$, so there are nonzero ones. The monic one of
smallest degree is the **minimal polynomial** $m_A$.

**Theorem 16.7.**

1. $m_A$ divides every polynomial $f$ with $f(A) = 0$; in particular $m_A$ divides $p_A$.
2. $m_A$ and $p_A$ have the same roots: the eigenvalues of $A$.
3. If $p_A$ splits, $m_A = \prod_\lambda(x - \lambda)^{s_\lambda}$ where $s_\lambda$ is the size of the largest Jordan block
   for $\lambda$.
4. $A$ is diagonalisable over $F$ if and only if $m_A$ splits over $F$ into *distinct* linear factors.

*Proof.* (1) Divide: $f = qm_A + r$ with $\deg r < \deg m_A$. Then $r(A) = f(A) - q(A)m_A(A) = 0$, so $r = 0$ by
minimality.

(2) By (1) every root of $m_A$ is a root of $p_A$. Conversely, if $Av = \lambda v$ with $v \ne 0$ then $A^kv = \lambda^kv$,
so $0 = m_A(A)v = m_A(\lambda)v$ and $m_A(\lambda) = 0$.

(3) A polynomial $f$ kills $A$ if and only if it kills each Jordan block (polynomials in a block diagonal matrix act block
by block, and similar matrices have the same annihilating polynomials). For one block $J_s(\lambda) = \lambda I + N$, the
power $(J_s(\lambda) - \lambda I)^k = N^k$ is 0 exactly when $k \ge s$, and by (2) the only factor that matters for this
block is $x - \lambda$ (the others, $x - \mu$ with $\mu \ne \lambda$, are invertible on it). So the smallest exponent of
$(x - \lambda)$ that kills all the blocks for $\lambda$ is the largest block size.

(4) If $A$ is diagonalisable with distinct eigenvalues $\lambda_1, \dots, \lambda_k$, then $\prod(A - \lambda_iI)$ kills
every vector of an eigenbasis, so $m_A$ divides $\prod(x - \lambda_i)$, which has distinct roots. Conversely, if $m_A$
splits with distinct roots, then $p_A$ splits too (its roots are those of $m_A$, by (2), so they lie in $F$), and by (3)
every Jordan block has size 1. $\square$

**Worked example.** For $B$ in 16.3, the largest block for 2 has size 2 and for 3 size 1, so
$m_B(x) = (x - 2)^2(x - 3)$, while $p_B(x) = (x - 2)^3(x - 3)$. *Check:* $(B - 2I)(B - 3I) \ne 0$ but
$(B - 2I)^2(B - 3I) = 0$.

**A quick test in practice.** If $A^2 = A$ (a projection), then $m_A$ divides $x^2 - x = x(x - 1)$, which has distinct
roots, so $A$ is diagonalisable with eigenvalues among 0 and 1, without computing anything else. If $A^k = I$ over
$\mathbb C$ (a matrix of finite order, such as a rotation of a crystal's symmetry group), $m_A$ divides $x^k - 1$, which
has $k$ distinct roots, so $A$ is diagonalisable over $\mathbb C$.

## 16.5 The matrix exponential again

*Level: advanced.*

In [Chapter 10](10-Applications-of-Eigenvalues.md) we solved $x' = Ax$ by $x(t) = e^{tA}x(0)$, computing $e^{tA}$ through
diagonalisation. Jordan form handles the remaining case, and explains where the strange solutions $te^{\lambda t}$ of
differential equations with repeated roots ([Calculus, Chapter 14](../calculus/14-Differential-Equations.md)) come from.

**One block.** Write $J = J_s(\lambda) = \lambda I + N$ with $N$ the matrix of 1s just above the diagonal, so $N^s = 0$.
Since $\lambda I$ commutes with $N$, $e^{t(\lambda I + N)} = e^{\lambda t}e^{tN}$ (the identity $e^{X + Y} = e^Xe^Y$ holds
for commuting matrices, by the same series argument as for numbers). And the series for $e^{tN}$ stops:

$$
e^{tJ_s(\lambda)} = e^{\lambda t}\left(I + tN + \frac{t^2}{2!}N^2 + \cdots + \frac{t^{s-1}}{(s-1)!}N^{s-1}\right)
= e^{\lambda t}\begin{pmatrix} 1 & t & \frac{t^2}{2} & \cdots \\ & 1 & t & \cdots \\ & & \ddots & \vdots \\ & & & 1 \end{pmatrix}.
$$

For example, $e^{tJ_3(2)} = e^{2t}\begin{pmatrix} 1 & t & t^2/2 \\ 0 & 1 & t \\ 0 & 0 & 1 \end{pmatrix}$.

For a general $A = PJP^{-1}$, $e^{tA} = Pe^{tJ}P^{-1}$, computed block by block. Even without finding $P$, one can use the
generalised eigenspace splitting: if $A$ has a single eigenvalue $\lambda$, then $A - \lambda I$ is nilpotent and
$e^{tA} = e^{\lambda t}\sum_{k<n}\frac{t^k}{k!}(A - \lambda I)^k$ directly.

**Worked example.** $A = \begin{pmatrix} 3 & 1 \\ -1 & 1 \end{pmatrix}$ has the single eigenvalue 2, and
$(A - 2I)^2 = 0$. So

$$
e^{tA} = e^{2t}\left(I + t(A - 2I)\right) = e^{2t}\begin{pmatrix} 1 + t & t \\ -t & 1 - t \end{pmatrix}.
$$

*Check:* at $t = 0$ this is $I$; and differentiating,
$\frac{d}{dt}e^{tA} = e^{2t}\left(2I + 2t(A - 2I) + (A - 2I)\right)$, while
$Ae^{tA} = e^{2t}(A + tA(A - 2I)) = e^{2t}(A + 2t(A - 2I))$ using $A(A - 2I) = (A - 2I)^2 + 2(A - 2I) = 2(A - 2I)$; the two
agree since $2I + (A - 2I) = A$.

**Repeated roots in a differential equation.** The critically damped oscillator $y'' + 2y' + y = 0$ becomes, with
$x = (y, y')$, the system $x' = Cx$ with $C = \begin{pmatrix} 0 & 1 \\ -1 & -2 \end{pmatrix}$. Its characteristic
polynomial is $x^2 + 2x + 1 = (x + 1)^2$, a double root, and $C + I = \begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix}$ is not
zero, so $C$ is a single Jordan block $J_2(-1)$ in disguise. Then

$$
e^{tC} = e^{-t}\left(I + t(C + I)\right) = e^{-t}\begin{pmatrix} 1 + t & t \\ -t & 1 - t \end{pmatrix},
$$

and the first row gives $y(t) = \big(y(0) + (y(0) + y'(0))\,t\big)e^{-t}$. The $te^{-t}$ term that calculus courses
introduce as a trick "when the roots are repeated" is simply the off-diagonal 1 of a Jordan block.

**Stability, completed.** Each entry of $e^{tA}$ is a combination of terms $t^ke^{\lambda t}$ with $k$ less than the size
of a Jordan block for $\lambda$. So:

- if every eigenvalue has negative real part, $e^{tA} \to 0$ (the exponential decay beats any power of $t$);
- if some eigenvalue has positive real part, some solutions grow exponentially;
- if the eigenvalues with real part 0 all have blocks of size 1 (and the rest have negative real part), solutions stay
  bounded but need not decay; if one of them has a block of size 2 or more, solutions grow like a power of $t$.

The last case is the matrix form of **resonance**: the undamped oscillator $y'' = 0$ (eigenvalue 0, one block of size 2)
has the unbounded solution $y = t$. This completes the stability discussion of [Chapter 10](10-Applications-of-Eigenvalues.md).

## 16.6 Rational canonical form

*Level: advanced to expert.*

**The problem.** Jordan form needs the eigenvalues to lie in the field. Over $\mathbb Q$ or $\mathbb R$, or over a finite
field like $\mathbb F_2$, they often do not. The rotation $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ has no
eigenvalues in $\mathbb R$; over $\mathbb C$ it is $\operatorname{diag}(i, -i)$, but that is not a statement about real
matrices. Is there a normal form that lives entirely in the field we started with?

**Companion matrices.** For a monic polynomial $f(x) = x^d + a_{d-1}x^{d-1} + \cdots + a_1x + a_0$, the **companion
matrix** is

$$
C(f) = \begin{pmatrix} 0 & 0 & \cdots & 0 & -a_0 \\ 1 & 0 & \cdots & 0 & -a_1 \\ 0 & 1 & \cdots & 0 & -a_2 \\ \vdots & & \ddots & & \vdots \\ 0 & 0 & \cdots & 1 & -a_{d-1} \end{pmatrix}.
$$

It sends $e_1 \to e_2 \to \cdots \to e_d$, and $e_d \to -a_0e_1 - \cdots - a_{d-1}e_d$. In other words, $C(f)$ is the matrix
of "multiply by $x$" on polynomials of degree less than $d$, reduced modulo $f$, in the basis $1, x, \dots, x^{d-1}$.

**Lemma 16.8.** The characteristic polynomial and the minimal polynomial of $C(f)$ are both $f$.

*Proof.* Write $C = C(f)$. Since $C^ke_1 = e_{k+1}$ for $k < d$, no nonzero polynomial $g$ of degree less than $d$ can kill
$C$: $g(C)e_1$ is a nontrivial combination of $e_1, \dots, e_d$. So $\deg m_C \ge d$. Also
$C^de_1 = Ce_d = -\sum a_ie_{i+1} = -\sum a_iC^ie_1$, so $f(C)e_1 = 0$, and then $f(C)e_j = f(C)C^{j-1}e_1 = C^{j-1}f(C)e_1 = 0$
for all $j$. So $f(C) = 0$, and $m_C = f$ (monic, right degree, and divides $f$). By Cayley-Hamilton $m_C$ divides $p_C$,
both are monic of degree $d$, so $p_C = f$. $\square$

For example $C(x^2 + 1) = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ is the rotation $R$ above.

**Theorem 16.9 (rational canonical form).** Every $n\times n$ matrix $A$ over a field $F$ is similar over $F$ to a block
diagonal matrix

$$
C(d_1) \oplus C(d_2) \oplus \cdots \oplus C(d_k), \qquad d_1 \mid d_2 \mid \cdots \mid d_k ,
$$

with $d_i$ monic polynomials of positive degree, each dividing the next. The $d_i$ are uniquely determined by $A$ and are
called its **invariant factors**. The last one is the minimal polynomial, and their product is the characteristic
polynomial. Two matrices over $F$ are similar if and only if they have the same invariant factors.

*Proof idea.* Make $F^n$ into a module over the polynomial ring $F[x]$ by letting $x$ act as $A$: $f(x)\cdot v = f(A)v$.
This module is finitely generated and every element is killed by $p_A$. The ring $F[x]$ is a principal ideal domain
([Algebra, Chapter 18](../algebra/18-Factorization-in-Rings.md)), and the **structure theorem for finitely generated modules
over a principal ideal domain** ([Algebra, Chapter 21](../algebra/21-Modules-and-Representations.md)) says such a module is
a direct sum of cyclic modules $F[x]/(d_1) \oplus \cdots \oplus F[x]/(d_k)$ with $d_1 \mid \cdots \mid d_k$, uniquely. On a
cyclic piece $F[x]/(d)$, multiplication by $x$ in the basis $1, x, \dots, x^{\deg d - 1}$ is $C(d)$. Similar matrices give
isomorphic modules and conversely, which gives the last sentence. The same theorem, applied to the ring $\mathbb Z$, is the
classification of finite abelian groups. $\square$

Splitting each $d_i$ into powers of irreducible polynomials gives the **elementary divisors**; using a companion block for
each of those instead gives a variant called the primary rational form. When an elementary divisor is $(x - \lambda)^s$,
one can use the Jordan block $J_s(\lambda)$ in its place (it is similar to $C((x-\lambda)^s)$), and over an algebraically
closed field this recovers exactly the Jordan normal form.

**Worked example.** $A = \operatorname{diag}(2, 2, 3)$ over $\mathbb Q$. Its minimal polynomial is $(x - 2)(x - 3)$ and its
characteristic polynomial is $(x - 2)^2(x - 3)$. The invariant factors must have last term $m_A$ and product $p_A$, so they
are $d_1 = x - 2$ and $d_2 = (x - 2)(x - 3) = x^2 - 5x + 6$. The rational canonical form is

$$
C(x - 2) \oplus C(x^2 - 5x + 6) = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 0 & -6 \\ 0 & 1 & 5 \end{pmatrix}.
$$

*Check:* the trace is $2 + 0 + 5 = 7 = 2 + 2 + 3$. The example shows that the rational form is not designed to be
pretty; it is designed to exist over every field and be unique.

**A finite field.** Over $\mathbb F_2 = \{0, 1\}$ the matrix $A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$ is
$C(x^2 + x + 1)$ (since $-1 = 1$ in $\mathbb F_2$). The polynomial $x^2 + x + 1$ has no root in $\mathbb F_2$ (it is 1 at
both 0 and 1), so $A$ has no eigenvalues there and no Jordan form over $\mathbb F_2$. Its rational form is itself. Because
$x^3 - 1 = (x - 1)(x^2 + x + 1)$, Cayley-Hamilton gives $A^3 = I$, and the four matrices $0, I, A, A^2$ form a field with
four elements, $\mathbb F_4$, realised as $2\times2$ matrices over $\mathbb F_2$. Matrices like this are how finite fields
are implemented in coding theory and cryptography (see the cryptography book at <https://cryptography.akadian.ca/book/>).

**Similarity does not depend on the field.** Since the invariant factors of $A$ can be computed inside $F[x]$ (for example,
as quotients of greatest common divisors of minors of $xI - A$, by the Smith normal form), they do not change when $F$ is
enlarged. So: *if two matrices with entries in $F$ are similar over a bigger field $K$, they are already similar over $F$.*
Two real matrices that are similar over $\mathbb C$ are similar over $\mathbb R$; two rational matrices similar over
$\mathbb R$ are similar over $\mathbb Q$. This is not obvious from the definition of similarity, and Jordan form alone
cannot prove it.

## A short history

Karl Weierstrass developed the theory of elementary divisors in 1868, for pairs of quadratic and bilinear forms. Camille
Jordan published his canonical form in 1870, in his *Traité des substitutions et des équations algébriques*, for linear
substitutions over finite fields of prime order; the form we use over $\mathbb C$ is its translation. The two approaches
were the subject of a public dispute between Jordan and Leopold Kronecker in 1874. Arthur Cayley stated the theorem now
named after him in his 1858 "A memoir on the theory of matrices", checking it for $2\times2$ matrices and saying he had
verified the $3\times 3$ case; William Rowan Hamilton had found a related identity for linear functions of quaternions in
the 1850s. Ferdinand Georg Frobenius gave the first general proof in 1878, introduced the minimal polynomial, and
developed the invariant factors behind the rational canonical form, which is sometimes called the Frobenius normal form.
The module-theoretic proof came in the 20th century, with Emmy Noether's school and van der Waerden's *Moderne Algebra*
(1930-1931).

## Check yourself

??? question "1. Find the algebraic and geometric multiplicities of the eigenvalue of $\begin{pmatrix} 5 & -1 \\ 1 & 3 \end{pmatrix}$. Is it diagonalisable?"

    Trace 8, determinant $15 + 1 = 16$, so $p(x) = x^2 - 8x + 16 = (x - 4)^2$: $a(4) = 2$. $A - 4I = \begin{pmatrix} 1 & -1 \\ 1 & -1 \end{pmatrix}$
    has rank 1, so $g(4) = 1$. Not diagonalisable; its Jordan form is $J_2(4)$.

??? question "2. For the matrix of question 1, find $P$ with $P^{-1}AP = J_2(4)$ and compute $e^{tA}$."

    $N = A - 4I$ has $N^2 = 0$. Take $v_2 = (1, 0)$, then $v_1 = Nv_2 = (1, 1)$. $P = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$.
    And $e^{tA} = e^{4t}(I + tN) = e^{4t}\begin{pmatrix} 1 + t & -t \\ t & 1 - t \end{pmatrix}$.

??? question "3. Find the Jordan form of $T = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ using ranks."

    The only eigenvalue is 1. $T - I = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$ has rank 2 and
    $(T - I)^2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0\end{pmatrix}$ has rank 1, $(T - I)^3 = 0$. Blocks of size
    $\ge 1$: $3 - 2 = 1$; $\ge 2$: $2 - 1 = 1$; $\ge 3$: $1 - 0 = 1$. One block, $J_3(1)$.

??? question "4. A $5\times5$ matrix has characteristic polynomial $(x - 1)^5$, $\operatorname{rank}(A - I) = 2$ and $(A - I)^2 = 0$. Find its Jordan form."

    Blocks: size $\ge 1$: $5 - 2 = 3$; size $\ge 2$: $2 - 0 = 2$; size $\ge 3$: $0$. So two blocks of size 2 and one of size 1:
    $J_2(1) \oplus J_2(1) \oplus J_1(1)$. *Check:* $2 + 2 + 1 = 5$.

??? question "5. How many similarity classes of nilpotent $4\times 4$ complex matrices are there?"

    A nilpotent matrix has only the eigenvalue 0, so its Jordan form is determined by the block sizes, a partition of 4:
    $4$, $3+1$, $2+2$, $2+1+1$, $1+1+1+1$. Five classes.

??? question "6. Verify Cayley-Hamilton for $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and use it to express $A^{-1}$ and $A^3$ in terms of $A$ and $I$."

    $p(x) = x^2 - 5x - 2$. $A^2 = \begin{pmatrix} 7 & 10 \\ 15 & 22 \end{pmatrix}$, and $A^2 - 5A - 2I = \begin{pmatrix} 7 - 5 - 2 & 10 - 10 \\ 15 - 15 & 22 - 20 - 2 \end{pmatrix} = 0$.
    So $A(A - 5I) = 2I$ and $A^{-1} = \frac12(A - 5I) = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$. And
    $A^3 = A(5A + 2I) = 5A^2 + 2A = 5(5A + 2I) + 2A = 27A + 10I$.

??? question "7. Find the minimal polynomial of $\begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ and compare it with the characteristic polynomial."

    It is $J_2(1) \oplus J_2(1)$: the largest block has size 2, so $m(x) = (x - 1)^2$, while $p(x) = (x - 1)^4$. *Check:*
    $(A - I)^2 = 0$ but $A - I \ne 0$.

??? question "8. Show that if $A^3 = A$ then $A$ is diagonalisable over $\mathbb R$, and list its possible eigenvalues."

    $m_A$ divides $x^3 - x = x(x - 1)(x + 1)$, which splits over $\mathbb R$ with distinct roots. By Theorem 16.7(4) $A$ is
    diagonalisable, with eigenvalues among $0, 1, -1$.

??? question "9. Solve $y'' - 4y' + 4y = 0$ with $y(0) = 1$, $y'(0) = 0$ using a Jordan block."

    With $x = (y, y')$, $C = \begin{pmatrix} 0 & 1 \\ -4 & 4 \end{pmatrix}$, $p(x) = (x - 2)^2$ and
    $C - 2I = \begin{pmatrix} -2 & 1 \\ -4 & 2 \end{pmatrix}$, whose square is 0. So
    $e^{tC} = e^{2t}\begin{pmatrix} 1 - 2t & t \\ -4t & 1 + 2t \end{pmatrix}$, and the first row applied to $(1, 0)$ gives
    $y = (1 - 2t)e^{2t}$. *Check:* $y' = -2e^{2t} + 2(1 - 2t)e^{2t} = -4te^{2t}$, so $y'(0) = 0$; $y'' = (-4 - 8t)e^{2t}$, and
    $y'' - 4y' + 4y = e^{2t}(-4 - 8t + 16t + 4 - 8t) = 0$.

??? question "10. Find the rational canonical form over $\mathbb Q$ of $\operatorname{diag}(1, 1, 1, 2)$."

    $m(x) = (x - 1)(x - 2)$ and $p(x) = (x - 1)^3(x - 2)$. The invariant factors divide each other, end with $m$ and multiply
    to $p$: $d_1 = x - 1$, $d_2 = x - 1$, $d_3 = (x - 1)(x - 2) = x^2 - 3x + 2$. The form is
    $(1) \oplus (1) \oplus \begin{pmatrix} 0 & -2 \\ 1 & 3 \end{pmatrix}$.

??? question "11. Prove that a matrix and its transpose are always similar."

    Over a field where $p_A$ splits: $J_s(\lambda)^T$ is similar to $J_s(\lambda)$ via the matrix that reverses the order of
    the basis, so $A^T = (PJP^{-1})^T$ is similar to $J^T$, hence to $J$, hence to $A$. Over any field: $xI - A$ and
    $xI - A^T$ have the same minors up to transposition, so the same invariant factors (by the Smith normal form
    description), so $A$ and $A^T$ have the same rational canonical form.

??? question "12. Over $\mathbb F_2$, show that $A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$ satisfies $A^2 = A + I$ and $A^3 = I$, and that $I + A$ is invertible."

    $A^2 = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$ mod 2, which is
    $A + I$. Then $A^3 = A^2 + A = 2A + I = I$. Finally $I + A = A^2$, and $A^2 \cdot A = I$, so $(I + A)^{-1} = A$.

## What you learned

- A matrix can fail to be diagonalisable over $\mathbb C$ only when some eigenvalue has geometric multiplicity smaller than
  its algebraic multiplicity.
- The generalised eigenspaces $\ker(A - \lambda I)^n$ always fill up the space when the characteristic polynomial splits,
  and their dimensions are the algebraic multiplicities.
- Every complex matrix is similar to a Jordan form, unique up to the order of the blocks; the number of blocks of size at
  least $k$ is $\operatorname{rank}(A - \lambda I)^{k-1} - \operatorname{rank}(A - \lambda I)^k$.
- Every matrix satisfies its characteristic polynomial (Cayley-Hamilton); the minimal polynomial has the largest block
  sizes as exponents, and distinct roots exactly when the matrix is diagonalisable.
- Jordan blocks explain the $t^ke^{\lambda t}$ terms in $e^{tA}$, repeated roots in differential equations, and resonance.
- The rational canonical form, built from companion matrices of the invariant factors, classifies matrices up to
  similarity over any field.

**Next:** [Chapter 17](17-Duality-and-Multilinear-Algebra.md), which turns from single maps to dual spaces, bilinear forms,
tensor products and the exterior algebra.

## Further reading

- S. Axler, *Linear Algebra Done Right*, 4th ed., 2024, chapter 8 (generalised eigenvectors and Jordan form, without
  determinants).
- S. H. Friedberg, A. J. Insel and L. E. Spence, *Linear Algebra*, 5th ed., 2018, chapter 7 (Jordan and rational canonical
  forms, with full proofs).
- K. Hoffman and R. Kunze, *Linear Algebra*, 2nd ed., 1971, chapters 6 and 7 (the classic treatment of the rational and
  Jordan forms).
- D. S. Dummit and R. M. Foote, *Abstract Algebra*, 3rd ed., 2004, chapter 12 (modules over a principal ideal domain and
  canonical forms).
- C. Moler and C. Van Loan, "Nineteen dubious ways to compute the exponential of a matrix, twenty-five years later",
  *SIAM Review* 45, 2003.
- T. Hawkins, "Weierstrass and the theory of matrices", *Archive for History of Exact Sciences* 17, 1977.
- On this site: [Unit 9, Primary decomposition and Jordan form](../../uoft/MAT247H1/unit09.md) and
  [Unit 10, Rational form, bilinear and quadratic forms](../../uoft/MAT247H1/unit10.md) (U of T MAT247H1);
  [Unit 10, Eigenvalues and diagonalization](../../uoft/MAT240H1/unit10.md) (U of T MAT240H1);
  [Modules and representations](../algebra/21-Modules-and-Representations.md) in the Algebra book;
  [Differential equations](../calculus/14-Differential-Equations.md) in the Calculus book.
