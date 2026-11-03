# 10. Applications of eigenvalues

*Many things change at a rate that depends linearly on their present state: heat flowing between rooms, masses
joined by springs, the number of young and old animals in a population. Each such system is a matrix in disguise, and
its eigenvalues decide what happens: growth or decay, oscillation or calm, a steady shape or chaos at the edges. This
chapter solves systems of differential equations with eigenvectors, defines the exponential of a matrix, finds the
normal modes of vibrating systems, classifies stability, and ends with the Perron-Frobenius theorem and population
models.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to solve $x' = Ax$ by eigenvectors, including the case of complex eigenvalues
    - what $e^{tA}$ means, why it solves $x' = Ax$, and how to compute it
    - how coupled oscillators split into independent normal modes
    - how eigenvalues decide stability, for differential equations and for iterated maps, and the trace-determinant
      picture for 2 by 2 systems
    - the Perron-Frobenius theorem for positive matrices, and what it says about Leslie population models

    **You need:** [Chapter 9](09-Eigenvalues-and-Eigenvectors.md) (eigenvalues, diagonalisation, complex eigenvalues),
    and from calculus the exponential function and the simplest differential equation $x' = ax$
    ([Calculus, Chapter 14](../calculus/14-Differential-Equations.md); gentler version:
    [differential equations](../../topics/change/level-8/07-differential-equations.md)). Power series
    ([Calculus, Chapter 13](../calculus/13-Power-Series-and-Taylor.md)) help in 10.2.

    **Levels:** 10.1 and 10.3 are intermediate; 10.2 and 10.4 are intermediate to advanced; 10.5 is advanced.

## 10.1 Systems of differential equations $x' = Ax$

### One equation

The simplest differential equation says that a quantity changes at a rate proportional to itself:

$$
\frac{dx}{dt} = ax .
$$

Its solutions are $x(t) = e^{at}x(0)$, and there are no others ([Calculus, Chapter 14](../calculus/14-Differential-Equations.md)).
If $a < 0$ the quantity decays to 0, if $a > 0$ it grows without bound, and if $a = 0$ it stays put. Everything in
this section is that one fact, applied along eigenvectors.

### Many equations

Now suppose two quantities affect each other. A made-up model: two rooms side by side, with temperatures $x_1(t)$ and
$x_2(t)$ measured above the outdoor temperature. Each room loses heat to the outside at a rate equal to its own
temperature, and heat flows through the shared wall at a rate equal to the difference (in suitable units of time):

$$
\begin{aligned}
x_1' &= -x_1 - (x_1 - x_2) = -2x_1 + x_2, \\
x_2' &= -x_2 - (x_2 - x_1) = x_1 - 2x_2 .
\end{aligned}
$$

In matrix form, with $x = (x_1, x_2)$,

$$
x' = Ax, \qquad A = \begin{pmatrix} -2 & 1 \\ 1 & -2 \end{pmatrix}.
$$

Here $x'$ means the vector of derivatives $(x_1', x_2')$. The difficulty is that each equation involves both
unknowns: the system is **coupled**.

### The eigenvector trick

Guess a solution that keeps its direction and only changes its size: $x(t) = e^{\lambda t}v$ for a fixed vector $v$.
Then $x' = \lambda e^{\lambda t}v$ and $Ax = e^{\lambda t}Av$, so

$$
x' = Ax \iff \lambda e^{\lambda t}v = e^{\lambda t}Av \iff Av = \lambda v .
$$

**$e^{\lambda t}v$ solves $x' = Ax$ exactly when $v$ is an eigenvector of $A$ with eigenvalue $\lambda$.**

The equation is linear, so sums and multiples of solutions are solutions (the **superposition principle**). If $A$
has a basis of eigenvectors $v_1, \dots, v_n$ with eigenvalues $\lambda_1, \dots, \lambda_n$, then

$$
x(t) = c_1e^{\lambda_1t}v_1 + c_2e^{\lambda_2t}v_2 + \cdots + c_ne^{\lambda_nt}v_n
$$

is a solution for every choice of constants, and we can match any starting vector $x(0) = c_1v_1 + \cdots + c_nv_n$
because the $v_i$ form a basis.

**Why there are no other solutions.** Change variables to eigenvector coordinates: $x = Py$, where
$P = (v_1 \; \cdots \; v_n)$ and $A = PDP^{-1}$. Then $x' = Ax$ becomes $Py' = PDP^{-1}Py = PDy$, that is

$$
y' = Dy, \qquad \text{i.e.} \qquad y_i' = \lambda_i y_i \quad (i = 1, \dots, n).
$$

The system has **decoupled** into $n$ separate one-variable equations, each with the unique solution
$y_i(t) = e^{\lambda_it}y_i(0)$. So the solution is unique, and it is the formula above with $c_i = y_i(0)$.

**Example 1 (the two rooms).** $A$ is the matrix $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ of 9.1 minus $4I$,
so by Exercise 6 of Chapter 9 it has the same eigenvectors, with eigenvalues lowered by 4. Directly:
$\operatorname{tr}A = -4$ and $\det A = 3$, so $p_A(\lambda) = \lambda^2 + 4\lambda + 3 = (\lambda + 1)(\lambda + 3)$.

- $\lambda = -1$: $A + I = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}$, eigenvector $(1, 1)$.
- $\lambda = -3$: $A + 3I = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, eigenvector $(1, -1)$.

Start with room 1 one degree above outdoors and room 2 at outdoor temperature: $x(0) = (1, 0) = \frac12(1, 1) + \frac12(1, -1)$.
So

$$
x(t) = \tfrac12 e^{-t}\begin{pmatrix} 1 \\ 1 \end{pmatrix} + \tfrac12 e^{-3t}\begin{pmatrix} 1 \\ -1 \end{pmatrix},
\qquad
x_1(t) = \frac{e^{-t} + e^{-3t}}{2}, \quad x_2(t) = \frac{e^{-t} - e^{-3t}}{2}.
$$

Check: $x_1(0) = 1$, $x_2(0) = 0$, and $x_1' = \frac{-e^{-t} - 3e^{-3t}}{2}$, while
$-2x_1 + x_2 = \frac{-2e^{-t} - 2e^{-3t} + e^{-t} - e^{-3t}}{2} = \frac{-e^{-t} - 3e^{-3t}}{2}$.

The two eigenvectors have physical meanings. Along $(1, 1)$ the rooms are equally warm, no heat crosses the wall,
and the common temperature decays at rate 1. Along $(1, -1)$ one room is warm and the other cool by the same amount;
heat crosses the wall as well as leaking outside, so the difference dies faster, at rate 3. After a short time the
fast mode has gone and both rooms cool together, as $\frac12e^{-t}(1, 1)$.

### Higher-order equations become systems

A second-order equation such as

$$
u'' + 3u' + 2u = 0
$$

(a damped spring, say) becomes a first-order system by naming the velocity: $x_1 = u$, $x_2 = u'$. Then
$x_1' = x_2$ and $x_2' = u'' = -2x_1 - 3x_2$:

$$
x' = \begin{pmatrix} 0 & 1 \\ -2 & -3 \end{pmatrix}x .
$$

The characteristic polynomial is $\lambda^2 + 3\lambda + 2$, which is the "characteristic equation" of the
second-order ODE from calculus. Its roots $-1$ and $-2$ have eigenvectors $(1, \lambda)$: $(1, -1)$ and $(1, -2)$. With
$u(0) = 1$, $u'(0) = 0$: $(1, 0) = 2(1, -1) - (1, -2)$, so $u(t) = 2e^{-t} - e^{-2t}$. Check: $u(0) = 1$,
$u'(0) = -2 + 2 = 0$. Any linear ODE of order $n$ with constant coefficients becomes an $n \times n$ system in the same
way, and the matrix that appears is called a **companion matrix**.

### Complex eigenvalues give oscillations

**Example 2.** $x' = Ax$ with $A = \begin{pmatrix} -1 & 2 \\ -2 & -1 \end{pmatrix}$. Here $\operatorname{tr}A = -2$,
$\det A = 5$, and $\lambda = -1 \pm 2i$. For $\lambda = -1 + 2i$, $A - \lambda I = \begin{pmatrix} -2i & 2 \\ -2 & -2i \end{pmatrix}$,
whose first row gives $y = ix$, so $v = (1, i)$.

The complex solution is $e^{(-1 + 2i)t}(1, i)$. Using Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$,

$$
e^{-t}(\cos 2t + i\sin 2t)\begin{pmatrix} 1 \\ i \end{pmatrix}
= e^{-t}\begin{pmatrix} \cos 2t \\ -\sin 2t \end{pmatrix} + i\,e^{-t}\begin{pmatrix} \sin 2t \\ \cos 2t \end{pmatrix}.
$$

Because $A$ is real, the real and imaginary parts of a complex solution are each real solutions (take real and
imaginary parts of $z' = Az$). So the real solutions are

$$
x(t) = e^{-t}\left(a\begin{pmatrix} \cos 2t \\ -\sin 2t \end{pmatrix} + b\begin{pmatrix} \sin 2t \\ \cos 2t \end{pmatrix}\right).
$$

The **imaginary part 2 of the eigenvalue sets the angular frequency**, and the **real part $-1$ sets the decay**: the
point $x(t)$ spirals clockwise into the origin, its distance shrinking like $e^{-t}$. Check one solution:
$x = e^{-t}(\cos 2t, -\sin 2t)$ has $x_1' = e^{-t}(-\cos 2t - 2\sin 2t)$ and
$-x_1 + 2x_2 = e^{-t}(-\cos 2t - 2\sin 2t)$.

The general rule: an eigenvalue $\lambda = a + bi$ contributes terms $e^{at}\cos bt$ and $e^{at}\sin bt$.

## 10.2 The matrix exponential

*Level: intermediate to advanced.*

For one equation the answer was $x(t) = e^{at}x(0)$. It would be pleasant to write the answer to $x' = Ax$ as
$x(t) = e^{tA}x(0)$. To do that we have to say what the exponential of a matrix is.

**Definition.** For a square matrix $M$,

$$
e^M = I + M + \frac{M^2}{2!} + \frac{M^3}{3!} + \cdots = \sum_{k = 0}^{\infty}\frac{M^k}{k!}.
$$

This copies the power series $e^x = \sum x^k/k!$ ([Calculus, Chapter 13](../calculus/13-Power-Series-and-Taylor.md)),
replacing numbers by matrices; all the operations make sense because we only add matrices, multiply them and divide by
numbers.

**Theorem 1.** The series converges for every square matrix $M$ (each entry converges absolutely).

*Proof.* Let $m$ be the largest absolute value of an entry of $M$, and $n$ the size. An entry of $M^2$ is a sum of $n$
products of two entries, so it is at most $nm^2$ in absolute value. By induction, every entry of $M^k$ is at most
$n^{k-1}m^k \leq (nm)^k$ in absolute value. So each entry of the series is bounded term by term by
$\sum (nm)^k/k! = e^{nm} < \infty$, and converges absolutely. $\square$

### Computing $e^M$

**Diagonal matrices.** If $D = \operatorname{diag}(d_1, \dots, d_n)$, then $D^k = \operatorname{diag}(d_1^k, \dots, d_n^k)$,
so $e^D = \operatorname{diag}(e^{d_1}, \dots, e^{d_n})$. The exponential just acts on each diagonal entry.

**Diagonalisable matrices.** If $A = PDP^{-1}$ then $A^k = PD^kP^{-1}$, so every partial sum of the series for $e^A$
is $P(\text{partial sum for } e^D)P^{-1}$, and in the limit

$$
e^{tA} = Pe^{tD}P^{-1} = P\begin{pmatrix} e^{\lambda_1 t} & & \\ & \ddots & \\ & & e^{\lambda_n t} \end{pmatrix}P^{-1}.
$$

For the two rooms, with $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ and $P^{-1} = \frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$,

$$
e^{tA} = \frac12\begin{pmatrix} e^{-t} + e^{-3t} & e^{-t} - e^{-3t} \\ e^{-t} - e^{-3t} & e^{-t} + e^{-3t} \end{pmatrix}.
$$

Its first column is the solution starting from $(1, 0)$ found in Example 1, as it should be.

**Nilpotent matrices.** If $N^m = 0$ for some $m$, the series stops. For $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$,
$N^2 = 0$, so

$$
e^{tN} = I + tN = \begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}.
$$

The system $x' = Nx$ says $x_1' = x_2$, $x_2' = 0$: constant velocity. Its solution $x_1 = x_1(0) + t\,x_2(0)$ grows
linearly, not exponentially. Polynomials in $t$ appear exactly when $A$ is not diagonalisable.

**A rotation generator.** For $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ we have $J^2 = -I$, $J^3 = -J$,
$J^4 = I$, and the pattern repeats. Sorting the series into the terms with $I$ and the terms with $J$,

$$
e^{tJ} = \left(1 - \frac{t^2}{2!} + \frac{t^4}{4!} - \cdots\right)I + \left(t - \frac{t^3}{3!} + \cdots\right)J
= \begin{pmatrix} \cos t & -\sin t \\ \sin t & \cos t \end{pmatrix}.
$$

The exponential of the "infinitesimal rotation" $J$ is the rotation by angle $t$. This is the matrix form of
$e^{it} = \cos t + i\sin t$, with $J$ playing the part of $i$. It is also the first example of the passage from a Lie
algebra (here, antisymmetric matrices) to a Lie group (rotations), a theme of [Chapter 20](20-Where-Linear-Algebra-Goes.md).

### Properties

**Theorem 2.** For square matrices $A$, $B$ of the same size and real numbers $s$, $t$:

1. $e^0 = I$.
2. If $AB = BA$ then $e^{A + B} = e^Ae^B$.
3. $e^{(s + t)A} = e^{sA}e^{tA}$, and $e^A$ is invertible with inverse $e^{-A}$.
4. $\frac{d}{dt}e^{tA} = Ae^{tA} = e^{tA}A$.

*Proof.* (1) is clear. (2): when $A$ and $B$ commute, the binomial theorem holds for them,
$(A + B)^k = \sum_{j}\binom{k}{j}A^jB^{k - j}$, because the proof of the binomial theorem only uses that we may
reorder factors. So

$$
e^{A + B} = \sum_k\frac{1}{k!}\sum_{j + l = k}\frac{k!}{j!\,l!}A^jB^l = \sum_{j, l}\frac{A^j}{j!}\frac{B^l}{l!} = e^Ae^B .
$$

Rearranging the double sum is legitimate because, by the bound in Theorem 1, every entry converges absolutely (this is
the Cauchy product of two absolutely convergent series). (3) follows from (2), since $sA$ and $tA$ commute, and taking
$s = -t$ gives $e^{tA}e^{-tA} = e^0 = I$. (4): each entry of $e^{tA}$ is a power series in $t$ that converges for all
$t$, so it may be differentiated term by term ([Calculus, Chapter 13](../calculus/13-Power-Series-and-Taylor.md)):

$$
\frac{d}{dt}\sum_k\frac{t^kA^k}{k!} = \sum_{k \geq 1}\frac{t^{k-1}A^k}{(k - 1)!} = A\sum_{j \geq 0}\frac{t^jA^j}{j!} = Ae^{tA},
$$

and $A$ can be pulled out on either side. $\square$

**Warning.** Without $AB = BA$, (2) is false. Take $X = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ and
$Y = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$. Then $e^X = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and
$e^Y = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$, so $e^Xe^Y = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$. But
$X + Y = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ has $(X + Y)^2 = I$, so
$e^{X + Y} = \cosh 1\,I + \sinh 1\,(X + Y) = \begin{pmatrix} \cosh 1 & \sinh 1 \\ \sinh 1 & \cosh 1 \end{pmatrix}$,
whose entries are irrational. Exercise 12 asks for the details.

**Theorem 3 (existence and uniqueness).** For every $x_0 \in \mathbb{R}^n$, the function $x(t) = e^{tA}x_0$ solves
$x' = Ax$ with $x(0) = x_0$, and it is the only solution.

*Proof.* It is a solution by property 4: $x' = Ae^{tA}x_0 = Ax$, and $x(0) = Ix_0 = x_0$. For uniqueness, let $y(t)$ be
any solution with $y(0) = x_0$ and set $z(t) = e^{-tA}y(t)$. By the product rule (which holds for matrix-valued
functions, entry by entry) and property 4,

$$
z' = -Ae^{-tA}y + e^{-tA}y' = -Ae^{-tA}y + e^{-tA}Ay = 0,
$$

because $A$ commutes with $e^{-tA}$. So $z$ is constant, $z(t) = z(0) = x_0$, and $y(t) = e^{tA}x_0$. $\square$

This theorem needs no diagonalisation: $e^{tA}$ works for every matrix. For example $A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} = 2I + N$
with $N$ as above, and $2I$ commutes with everything, so

$$
e^{tA} = e^{2tI}e^{tN} = e^{2t}\begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}.
$$

The factor $t$ in $te^{2t}$ is the mark of the missing eigenvector. [Chapter 16](16-Jordan-Form.md) shows that every
matrix splits as "diagonalisable plus nilpotent, commuting", so every $e^{tA}$ is built from terms $t^je^{\lambda t}$.

**Theorem 4.** $\det e^A = e^{\operatorname{tr}A}$.

*Proof for diagonalisable $A$.* $\det e^A = \det(Pe^DP^{-1}) = \det e^D = e^{\lambda_1}\cdots e^{\lambda_n} = e^{\lambda_1 + \cdots + \lambda_n} = e^{\operatorname{tr}A}$,
using Theorem 1 of Chapter 9 for the trace. For general $A$, either use the Jordan form of Chapter 16 (the same
computation with triangular matrices) or note that diagonalisable matrices are dense (any matrix is a limit of
matrices with distinct eigenvalues) and both sides are continuous in $A$. $\square$

In particular $\det e^A > 0$ always, so a reflection (determinant $-1$) is never the exponential of a real matrix.

```python
# e^M by summing the series, standard library only
def matmul(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(len(B))) for j in range(len(B[0]))] for i in range(len(A))]

def expm(M, terms=40):
    n = len(M)
    result = [[float(i == j) for j in range(n)] for i in range(n)]
    term = [row[:] for row in result]
    for k in range(1, terms):
        term = [[x / k for x in row] for row in matmul(term, M)]       # M^k / k!
        result = [[result[i][j] + term[i][j] for j in range(n)] for i in range(n)]
    return result

print(expm([[0, -1.5708], [1.5708, 0]]))   # about [[0, -1], [1, 0]]: rotation by 90 degrees
```

Summing the series is fine for small matrices with small entries, but for large entries it loses accuracy badly
(try $M = -30I$: with 40 terms the top-left entry comes out near $-8.6 \times 10^{10}$ instead of
$e^{-30} \approx 9.4 \times 10^{-14}$, and even with 300 terms cancellation between huge terms of opposite signs leaves
an error near $10^{-5}$). Practical software uses "scaling and squaring": compute $e^{M/2^s}$ for a
large $s$, by a short series or rational approximation, then square $s$ times. The classic survey of the pitfalls is
Moler and Van Loan's "Nineteen dubious ways to compute the exponential of a matrix".

## 10.3 Coupled oscillators and normal modes

Two equal masses $m$ slide without friction on a line between two walls. Three equal springs, with spring constant
$k$, join the left wall to mass 1, mass 1 to mass 2, and mass 2 to the right wall. Let $x_1$ and $x_2$ be the
displacements of the masses from their resting positions (positive to the right).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 130" role="img" aria-label="Two walls with two equal masses between them. Three equal springs join the left wall to the first mass, the first mass to the second, and the second mass to the right wall. Below each mass an arrow shows its displacement, x1 and x2.">
  <rect x="10" y="20" width="20" height="80" fill="#9cc9ea" opacity="0.6" stroke="currentColor"/>
  <rect x="370" y="20" width="20" height="80" fill="#9cc9ea" opacity="0.6" stroke="currentColor"/>
  <polyline points="30,60 38,60 42.0,68 50.0,52 58.0,68 66.0,52 74.0,68 82.0,52 90.0,68 98.0,52 102,60 110,60" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="150,60 158,60 163.2,68 173.8,52 184.2,68 194.8,52 205.2,68 215.8,52 226.2,68 236.8,52 242,60 250,60" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="290,60 298,60 302.0,68 310.0,52 318.0,68 326.0,52 334.0,68 342.0,52 350.0,68 358.0,52 362,60 370,60" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="110" y="40" width="40" height="40" fill="#eea66f" stroke="currentColor"/>
  <rect x="250" y="40" width="40" height="40" fill="#eea66f" stroke="currentColor"/>
  <text x="130" y="65" font-size="13" text-anchor="middle" fill="currentColor">m</text>
  <text x="270" y="65" font-size="13" text-anchor="middle" fill="currentColor">m</text>
  <text x="70" y="40" font-size="12" text-anchor="middle" fill="currentColor">k</text>
  <text x="200" y="40" font-size="12" text-anchor="middle" fill="currentColor">k</text>
  <text x="330" y="40" font-size="12" text-anchor="middle" fill="currentColor">k</text>
  <line x1="130" y1="100" x2="165" y2="100" stroke="#7ccf9a" stroke-width="2"/>
  <polygon points="165,96 173,100 165,104" fill="#7ccf9a"/>
  <line x1="270" y1="100" x2="305" y2="100" stroke="#7ccf9a" stroke-width="2"/>
  <polygon points="305,96 313,100 305,104" fill="#7ccf9a"/>
  <text x="140" y="120" font-size="12" fill="currentColor">x₁</text>
  <text x="280" y="120" font-size="12" fill="currentColor">x₂</text>
</svg>
</div>

**The equations.** Mass 1 feels the left spring, stretched by $x_1$, pulling it back with force $-kx_1$, and the
middle spring, stretched by $x_2 - x_1$, pulling it towards mass 2 with force $k(x_2 - x_1)$. Newton's law
(mass times acceleration equals force) gives

$$
\begin{aligned}
m x_1'' &= -kx_1 + k(x_2 - x_1) = -2kx_1 + kx_2, \\
m x_2'' &= -k(x_2 - x_1) - kx_2 = kx_1 - 2kx_2 .
\end{aligned}
$$

So

$$
x'' = -\frac{k}{m}Kx, \qquad K = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}.
$$

**Look for a normal mode**: a motion in which both masses oscillate at the same frequency, in step, keeping a fixed
shape: $x(t) = \cos(\omega t)\,v$. Then $x'' = -\omega^2\cos(\omega t)\,v$, and the equation becomes

$$
\omega^2 v = \frac{k}{m}Kv .
$$

So $v$ must be an eigenvector of $K$, and $\omega^2 = \frac{k}{m}\mu$ where $\mu$ is its eigenvalue. Now
$\operatorname{tr}K = 4$, $\det K = 3$, so the eigenvalues are $\mu = 1$ and $\mu = 3$:

- $\mu = 1$, eigenvector $(1, 1)$: **the masses move together.** The middle spring is never stretched, each mass
  feels only its outer spring, and the frequency is $\omega_1 = \sqrt{k/m}$, the same as one mass on one spring.
- $\mu = 3$, eigenvector $(1, -1)$: **the masses move in opposite directions.** The middle spring is stretched twice as
  much as each outer one, the restoring force is three times as strong, and $\omega_2 = \sqrt{3k/m}$.

Every motion is a combination of the two modes, since the general solution is

$$
x(t) = (a_1\cos\omega_1t + b_1\sin\omega_1t)\begin{pmatrix} 1 \\ 1 \end{pmatrix} + (a_2\cos\omega_2t + b_2\sin\omega_2t)\begin{pmatrix} 1 \\ -1 \end{pmatrix}.
$$

(Why is this every solution? Write the second-order system as a first-order system in $(x, x')$, of size 4; its
eigenvalues are $\pm i\omega_1$ and $\pm i\omega_2$, distinct, and 10.1 applies. Or decouple directly: in the
coordinates $y = P^{-1}x$ the equations become $y_i'' = -\omega_i^2 y_i$, two independent oscillators.)

**Example 3.** Pull mass 1 to the right by a distance $a$, hold mass 2 at rest, and let go. Then $x(0) = (a, 0)$ and
$x'(0) = 0$, so all the $b$'s are 0 and $(a, 0) = \frac a2(1, 1) + \frac a2(1, -1)$:

$$
x_1(t) = \frac a2(\cos\omega_1t + \cos\omega_2t), \qquad x_2(t) = \frac a2(\cos\omega_1t - \cos\omega_2t).
$$

Since $\omega_2/\omega_1 = \sqrt 3$ is irrational, this motion never exactly repeats, even though each mode does.

**Weak coupling and beats.** Replace the middle spring by a weak one, with constant $\kappa$ much smaller than $k$.
The same calculation (Exercise 8) gives modes $(1, 1)$ and $(1, -1)$ with $\omega_1 = \sqrt{k/m}$ and
$\omega_2 = \sqrt{(k + 2\kappa)/m}$, now very close. By the identity
$\cos\alpha + \cos\beta = 2\cos\frac{\alpha - \beta}{2}\cos\frac{\alpha + \beta}{2}$, Example 3's motion becomes

$$
x_1(t) = a\cos\left(\frac{\omega_2 - \omega_1}{2}t\right)\cos\left(\frac{\omega_1 + \omega_2}{2}t\right),
\qquad
x_2(t) = a\sin\left(\frac{\omega_2 - \omega_1}{2}t\right)\sin\left(\frac{\omega_1 + \omega_2}{2}t\right):
$$

a fast oscillation whose size swells and fades slowly. The energy passes from mass 1 to mass 2 and back again, with
the slow period set by the small difference $\omega_2 - \omega_1$. Two pendulums hanging from a common, slightly
flexible bar show this beautifully.

**More masses.** With three equal masses and four equal springs, $K = \begin{pmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{pmatrix}$.
Its eigenvalues are $2 - \sqrt 2$, $2$ and $2 + \sqrt 2$, with eigenvectors $(1, \sqrt 2, 1)$, $(1, 0, -1)$ and
$(1, -\sqrt 2, 1)$: all in step, the middle one still with the outer two opposite, and alternating. With $N$ masses
the eigenvectors are samples of sine waves: the $p$-th mode has entries $\sin\frac{jp\pi}{N + 1}$ for
$j = 1, \dots, N$, and as $N \to \infty$ they become the
standing waves of a vibrating string, the starting point of Fourier series
([Chapter 11](11-Inner-Product-Spaces.md), section 11.6).

**Why this matters.** Normal modes are everywhere a structure can vibrate. The vibrational modes of a molecule are
eigenvectors of a matrix built from its bond stiffnesses and atomic masses, and their frequencies are what infrared
spectroscopy measures. Engineers compute the low-frequency modes of bridges, buildings and aircraft so that no
regular push (wind, footsteps, an engine) matches a natural frequency. Spacecraft, including those sent to Mars, are
shaken on vibration tables before launch, partly to check that their measured modes agree with the computed ones. In
the general case the masses differ and the system is $Mx'' = -Kx$ with symmetric matrices $M$ and $K$; the modes then
solve $Kv = \omega^2Mv$, a "generalised" eigenvalue problem, and the theory that guarantees real frequencies and a full
set of modes is the spectral theorem of [Chapter 14](14-The-Spectral-Theorem.md).

## 10.4 Stability

*Level: intermediate to advanced.*

An **equilibrium** of $x' = Ax$ is a constant solution; $x = 0$ is always one. The question is what nearby solutions
do.

**Definitions.** The equilibrium $0$ is **stable** if solutions that start close to 0 stay close (for every
$\varepsilon > 0$ there is $\delta > 0$ with $|x(0)| < \delta \Rightarrow |x(t)| < \varepsilon$ for all $t \geq 0$). It
is **asymptotically stable** if moreover every solution tends to 0 as $t \to \infty$. It is **unstable** if it is not
stable.

For linear systems the eigenvalues decide everything.

**Theorem 5.** Let $A$ be a real $n \times n$ matrix.

1. If every eigenvalue has negative real part, then every solution of $x' = Ax$ tends to 0: the origin is
   asymptotically stable.
2. If some eigenvalue has positive real part, the origin is unstable.
3. If every eigenvalue has real part $\leq 0$, those with real part 0 are stable or not according to whether their
   geometric and algebraic multiplicities agree.

*Proof for diagonalisable $A$.* Each solution is $x(t) = \sum c_je^{\lambda_jt}v_j$ (with complex $c_j$, $v_j$ if
needed), and $|e^{\lambda t}| = e^{(\operatorname{Re}\lambda)t}$. If all $\operatorname{Re}\lambda_j < 0$, each term
tends to 0. If $\operatorname{Re}\lambda_1 > 0$, the solutions $\varepsilon\operatorname{Re}(e^{\lambda_1t}v_1)$ start as
close to 0 as we like and grow without bound (if $\lambda_1$ is real this is just $\varepsilon e^{\lambda_1t}v_1$).
If some $\operatorname{Re}\lambda = 0$ and $A$ is diagonalisable, those terms have constant size $|c_j||v_j|$, so
solutions stay bounded and the origin is stable but not asymptotically stable.

*For general $A$*, by the Jordan form ([Chapter 16](16-Jordan-Form.md)) the entries of $e^{tA}$ are combinations of
$t^je^{\lambda t}$ with $j$ less than the size of the largest Jordan block for $\lambda$. An exponential with negative
real part beats any power of $t$, so (1) still holds; and a Jordan block of size at least 2 for an eigenvalue with
real part 0 gives terms like $t$ or $t\cos bt$, which grow, as in the example $x' = Nx$ of 10.2. $\square$

### The 2 by 2 picture

For $n = 2$ everything is decided by $\tau = \operatorname{tr}A$ and $\Delta = \det A$, because the eigenvalues are

$$
\lambda = \frac{\tau \pm \sqrt{\tau^2 - 4\Delta}}{2}.
$$

- $\Delta < 0$: the eigenvalues are real with opposite signs. Solutions approach 0 along one eigenvector and leave
  along the other: a **saddle**, unstable.
- $\Delta > 0$ and $\tau^2 > 4\Delta$: two real eigenvalues of the same sign as $\tau$: a **node**, stable if $\tau < 0$.
- $\Delta > 0$ and $\tau^2 < 4\Delta$: complex eigenvalues with real part $\tau/2$: a **spiral** (or focus), stable if
  $\tau < 0$; when $\tau = 0$ solutions go round closed ellipses: a **centre**.

**Theorem 6.** For a real $2 \times 2$ matrix, both eigenvalues have negative real part exactly when
$\operatorname{tr}A < 0$ and $\det A > 0$.

*Proof.* If the eigenvalues are complex, $\lambda$ and $\bar\lambda$, then $\det A = |\lambda|^2 > 0$ and
$\operatorname{tr}A = 2\operatorname{Re}\lambda$, so the condition is $\operatorname{tr}A < 0$. If they are real,
$\lambda_1\lambda_2 = \det A$ and $\lambda_1 + \lambda_2 = \operatorname{tr}A$; both are negative exactly when their
product is positive (same sign) and their sum is negative (that sign is minus). $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 260" role="img" aria-label="The trace-determinant plane. The horizontal axis is the trace, the vertical axis the determinant. The parabola det equals trace squared over four opens upward through the origin. Above the parabola are spirals, stable on the left and unstable on the right; between the parabola and the horizontal axis are nodes, stable on the left and unstable on the right; below the horizontal axis are saddles. The positive determinant axis holds the centres.">
  <path d="M40 200 L360 200 L360 20 Q200 380 40 20 Z" fill="#eea66f" opacity="0.18"/>
  <path d="M40 20 Q200 380 360 20" fill="none" stroke="#eea66f" stroke-width="2"/>
  <rect x="20" y="200" width="360" height="50" fill="#9cc9ea" opacity="0.25"/>
  <line x1="20" y1="200" x2="385" y2="200" stroke="currentColor" stroke-width="1.2"/>
  <line x1="200" y1="250" x2="200" y2="10" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="385" y="216" font-size="12" text-anchor="end" fill="currentColor">trace τ</text>
  <text x="192" y="18" font-size="12" text-anchor="end" fill="currentColor">det Δ</text>
  <text x="150" y="110" font-size="12" text-anchor="middle" fill="currentColor">stable spiral</text>
  <text x="250" y="110" font-size="12" text-anchor="middle" fill="currentColor">unstable spiral</text>
  <text x="70" y="172" font-size="12" text-anchor="middle" fill="currentColor">stable node</text>
  <text x="330" y="172" font-size="12" text-anchor="middle" fill="currentColor">unstable node</text>
  <text x="200" y="232" font-size="12" text-anchor="middle" fill="currentColor">saddles (Δ &lt; 0)</text>
  <text x="208" y="52" font-size="12" fill="currentColor">centres</text>
  <text x="56" y="30" font-size="11" fill="currentColor">Δ = τ²/4</text>
</svg>
</div>

**Example 4 (a pendulum).** A pendulum with friction, angle $\theta$ from the bottom, obeys
$\theta'' + c\theta' + \frac gL\sin\theta = 0$. Near the bottom, $\sin\theta \approx \theta$; take $g/L = 1$ and
$c = 0.5$ (units chosen for convenience). With $x = (\theta, \theta')$ the linearised system has
$A = \begin{pmatrix} 0 & 1 \\ -1 & -0.5 \end{pmatrix}$: $\tau = -0.5$, $\Delta = 1$, $\tau^2 < 4\Delta$, so a stable
spiral. The pendulum swings with shrinking amplitude. Near the top, write $\theta = \pi + \phi$; then
$\sin\theta = -\sin\phi \approx -\phi$, and $A = \begin{pmatrix} 0 & 1 \\ 1 & -0.5 \end{pmatrix}$ has $\Delta = -1 < 0$:
a saddle. Balanced upright, the pendulum falls at the slightest touch, except along the one stable direction.

**Linearisation, honestly.** The pendulum is not linear; we replaced $\sin\theta$ by its tangent line. In general, for
$x' = f(x)$ with an equilibrium $f(x^*) = 0$, the linear system uses the Jacobian matrix $A = Df(x^*)$ of partial
derivatives ([Calculus, Chapter 15](../calculus/15-Functions-of-Several-Variables.md)). The theorem that justifies
this (Lyapunov's indirect method, and the sharper Hartman-Grobman theorem) says: if every eigenvalue of $A$ has
negative real part, the nonlinear equilibrium is asymptotically stable; if some eigenvalue has positive real part, it
is unstable; and if no eigenvalue has real part 0, the picture near $x^*$ looks like the linear one after a continuous
change of coordinates. When some eigenvalue has real part exactly 0 (a centre, for instance), the linear part cannot
decide, and the nonlinear terms do. The proofs are in books on dynamical systems, such as Hirsch, Smale and Devaney.

### Discrete time

For an iterated map $x_{k+1} = Ax_k$ the solution is $x_k = A^kx_0$, and the terms are $\lambda^k$ instead of
$e^{\lambda t}$. Now $|\lambda^k| = |\lambda|^k$, so the dividing line is the unit circle instead of the imaginary
axis.

**Theorem 7.** $A^kx_0 \to 0$ for every $x_0$ exactly when every eigenvalue of $A$ has $|\lambda| < 1$, that is, when
the **spectral radius** $\rho(A) = \max|\lambda_i|$ is less than 1.

*Proof (diagonalisable case).* $A^kx_0 = \sum c_i\lambda_i^kv_i$; if every $|\lambda_i| < 1$ each term tends to 0.
If some $|\lambda_1| \geq 1$, starting at $x_0 = v_1$ gives $|A^kv_1| = |\lambda_1|^k|v_1| \not\to 0$. (For a complex
$v_1$, its real or imaginary part is a real starting vector that does not tend to 0.) The general case uses Jordan
form: $k^j\lambda^k \to 0$ when $|\lambda| < 1$. $\square$

The two settings are linked: $x(t + 1) = e^{A}x(t)$ for the flow of $x' = Ax$, and the eigenvalues of $e^A$ are
$e^{\lambda_i}$, which lie inside the unit circle exactly when $\operatorname{Re}\lambda_i < 0$.

Theorem 7 governs the convergence of every iterative method in [Chapter 18](18-Numerical-Linear-Algebra.md): an
iteration $x_{k+1} = Mx_k + c$ converges, from every start, exactly when $\rho(M) < 1$. It also explains the Markov
chains of Chapter 9: there the eigenvalue 1 is the steady state, and the rest must lie strictly inside the circle.

## 10.5 Perron-Frobenius and population models

*Level: advanced.*

### Positive matrices

Population models, Markov chains, PageRank and input-output models of economies all lead to matrices with no negative
entries. Such matrices have a remarkable eigenvalue structure. Write $A > 0$ when every entry of $A$ is positive and
$A \geq 0$ when every entry is nonnegative; the same for vectors.

**Theorem 8 (Perron, 1907).** Let $A$ be an $n \times n$ matrix with $A > 0$, and let $r = \rho(A)$ be its spectral
radius. Then:

1. $r > 0$ and $r$ is itself an eigenvalue of $A$ (the **Perron root**).
2. There is an eigenvector $v > 0$ with $Av = rv$ (the **Perron vector**), unique up to a positive multiple.
3. $r$ is a simple root of the characteristic polynomial (algebraic multiplicity 1).
4. Every other eigenvalue $\lambda$ satisfies $|\lambda| < r$.
5. No other eigenvalue has a nonnegative eigenvector.
6. Consequently, for every $x_0 \geq 0$, $x_0 \neq 0$, the vectors $A^kx_0/r^k$ converge to a positive multiple of $v$.

The full proof takes several pages; it is in Meyer's book (chapter 8) or in Horn and Johnson (chapter 8). Here is the
idea of the most important part, existence of a positive eigenvector, and the proof of 4 from it.

*Idea for 1 and 2.* Consider the set $\Sigma$ of nonnegative vectors whose entries add to 1, a triangle when $n = 3$.
The map $x \mapsto Ax/(\mathbf 1^{\mathsf T}Ax)$ sends $\Sigma$ to itself (since $A > 0$, $Ax > 0$ for every $x \in \Sigma$). By
Brouwer's fixed-point theorem it has a fixed point, which is an eigenvector $v \geq 0$ with eigenvalue
$\mathbf 1^{\mathsf T}Av > 0$; and $v = Av/(\mathbf 1^{\mathsf T}Av) > 0$ because $A > 0$. A more elementary route, due to
Wielandt, maximises $\min_i (Ax)_i/x_i$ over $x \in \Sigma$. One then shows that this eigenvalue is the spectral radius.

*Proof of 4.* Let $Az = \lambda z$ with $|\lambda| = r$, $z \neq 0$.
Write $|z|$ for the vector of absolute values. By the triangle inequality, entry by entry,
$r|z| = |\lambda z| = |Az| \leq A|z|$. Suppose the inequality $A|z| \geq r|z|$ were strict in some entry. Then
$w = A|z| - r|z| \geq 0$ and $w \neq 0$, so $Aw > 0$, and hence $A(A|z|) > rA|z|$ entry by entry; so for a small
$\varepsilon > 0$, $A u \geq (r + \varepsilon)u$ with $u = A|z| > 0$. Applying $A$ repeatedly,
$A^ku \geq (r + \varepsilon)^ku$, which forces $\rho(A) \geq r + \varepsilon$ (compare norms), a contradiction. So
$A|z| = r|z|$; since $A > 0$ this also shows $|z| > 0$. So $|Az| = A|z|$: equality holds in the triangle inequality
$\left|\sum_j a_{ij}z_j\right| \leq \sum_j a_{ij}|z_j|$, with every $a_{ij} > 0$. That happens only when all the
$z_j$ have the same complex argument, $z = e^{i\theta}|z|$. Then $\lambda z = Az = e^{i\theta}A|z| = e^{i\theta}r|z| = rz$,
so $\lambda = r$. Every eigenvalue on the circle $|\lambda| = r$ is $r$ itself. $\square$

**Theorem 9 (Frobenius, 1912), stated.** For $A \geq 0$ the conclusions weaken. If $A$ is **irreducible** (for every
$i, j$ some power $A^k$ has a positive $(i, j)$ entry; for a Markov chain, every state can reach every other), then 1,
2, 3 and 5 still hold, but there may be other eigenvalues with $|\lambda| = r$: they are exactly $r$ times the $h$-th
roots of unity for some period $h$. If moreover some power $A^m > 0$ (the matrix is **primitive**), then $h = 1$ and all
six conclusions hold, because Theorem 8 applies to $A^m$.

The swap matrix $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ of Chapter 9 is irreducible with period 2 (eigenvalues
$\pm1$), and indeed its chain oscillates forever. Theorem 9 of Chapter 9 (positive stochastic matrices) is Theorem 8
with $r = 1$.

### Leslie matrices

In 1945 the British biologist P. H. Leslie published a matrix model of a population divided into age classes. Here is
a made-up example: a beetle that lives at most three years.

- Class 1, newborns (age 0 to 1), do not breed. A fraction $s_1 = 0.9$ survive to class 2.
- Class 2 (age 1 to 2) produce on average $f_2 = 2$ female offspring each. A fraction $s_2 = 0.5$ survive to class 3.
- Class 3 (age 2 to 3) produce $f_3 = 1.5$ female offspring each, then die.

(As usual in these models, only females are counted.) If $x_k = (a_k, b_k, c_k)$ is the number in each class in year
$k$, then

$$
x_{k+1} = Lx_k, \qquad L = \begin{pmatrix} 0 & 2 & 1.5 \\ 0.9 & 0 & 0 \\ 0 & 0.5 & 0 \end{pmatrix}.
$$

The first row counts births; the sub-diagonal moves survivors up a class. In general a **Leslie matrix** has the
fertilities $f_1, \dots, f_n$ in its first row, the survival rates $s_1, \dots, s_{n-1}$ just below the diagonal, and
zeros elsewhere.

**Eigenvalues.** Expanding the determinant along the first row,

$$
\det(\lambda I - L) = \lambda^3 - f_2s_1\lambda - f_3s_1s_2 = \lambda^3 - 1.8\lambda - 0.675 .
$$

Trying $\lambda = 1.5$: $3.375 - 2.7 - 0.675 = 0$. Dividing out, $\lambda^3 - 1.8\lambda - 0.675 = (\lambda - 1.5)(\lambda^2 + 1.5\lambda + 0.45)$,
and the quadratic has roots $\frac{-1.5 \pm \sqrt{0.45}}{2} \approx -1.085$ and $-0.415$.

**The stable age distribution.** For an eigenvalue $\lambda$ of a Leslie matrix, the last rows of $Lv = \lambda v$
say $s_1v_1 = \lambda v_2$ and $s_2v_2 = \lambda v_3$, so

$$
v = \left(1, \frac{s_1}{\lambda}, \frac{s_1s_2}{\lambda^2}\right) = (1, 0.6, 0.2) \quad \text{for } \lambda = 1.5 .
$$

Scaled to proportions, $(5/9, 1/3, 1/9)$: in the long run, five ninths of the beetles are newborns, one third are one
year old and one ninth are two.

**Why the population settles into this shape.** $L$ is not positive (it has zeros), but $L \geq 0$ and $L^5 > 0$, so
it is primitive, and the Perron-Frobenius theorem applies. (For a Leslie matrix with all $s_i > 0$ and $f_n > 0$,
primitivity holds whenever the ages at which breeding happens have greatest common divisor 1; here they are 2 and 3.)
The Perron root is $r = 1.5$, so the population grows by 50% a year, and $x_k/1.5^k$ tends to a multiple of $v$.

Starting from 100 newborns:

| year $k$ | class 1 | class 2 | class 3 | total | ratio to year before |
|---|---|---|---|---|---|
| 0 | 100 | 0 | 0 | 100 | |
| 1 | 0 | 90 | 0 | 90 | 0.90 |
| 2 | 180 | 0 | 45 | 225 | 2.50 |
| 3 | 67.5 | 162 | 0 | 229.5 | 1.02 |
| 4 | 324 | 60.8 | 81 | 465.8 | 2.03 |
| 5 | 243 | 291.6 | 30.4 | 565.0 | 1.21 |
| 6 | 628.8 | 218.7 | 145.8 | 993.3 | 1.76 |
| 7 | 656.1 | 565.9 | 109.4 | 1331.3 | 1.34 |
| 8 | 1295.8 | 590.5 | 282.9 | 2169.2 | 1.63 |
| 9 | 1605.4 | 1166.2 | 295.2 | 3066.9 | 1.41 |
| 10 | 2775.3 | 1444.9 | 583.1 | 4803.3 | 1.57 |

The yearly ratio oscillates and settles towards 1.5, slowly, because the second eigenvalue $-1.085$ is not much
smaller than 1.5 in absolute value: the transient dies like $(1.085/1.5)^k \approx 0.72^k$. Its negative sign is the
see-saw between good and bad years in the table.

```python
L = [[0, 2, 1.5], [0.9, 0, 0], [0, 0.5, 0]]
x = [100, 0, 0]
for year in range(1, 41):
    new = [sum(L[i][j] * x[j] for j in range(3)) for i in range(3)]
    ratio, x = sum(new) / sum(x), new
print(round(ratio, 4), [round(t / sum(x), 4) for t in x])   # 1.5 and about [0.5556, 0.3333, 0.1111]
```

**Growth or decline: the net reproductive number.** Divide the characteristic equation by $\lambda^3$:

$$
1 = \frac{f_2s_1}{\lambda^2} + \frac{f_3s_1s_2}{\lambda^3}.
$$

The right side is a decreasing function of $\lambda > 0$, so it equals 1 at exactly one positive $\lambda$, the Perron
root $r$. At $\lambda = 1$ the right side is $R_0 = f_2s_1 + f_3s_1s_2$, the expected number of daughters one newborn
will have in her life (survive to age 1 and breed, plus survive to age 2 and breed). Since the right side decreases,
$r > 1$ exactly when $R_0 > 1$: **the population grows exactly when each female more than replaces herself.** Here
$R_0 = 1.8 + 0.675 = 2.475$. The same argument works for any number of age classes.

**Honest caveats.** A real population cannot grow by 50% a year for long: food, space, predators and disease make the
rates depend on the population, and the model becomes nonlinear. Leslie models are used in ecology and demography
mainly for the short and medium term, for comparing management choices (which age class to protect), and for
**sensitivity analysis**: how much $r$ changes when one $f_i$ or $s_i$ changes, which has a neat formula,
$\partial r/\partial a_{ij} = w_iv_j/(w^{\mathsf T}v)$, in terms of the right Perron vector $v$ and the left one $w$
(Caswell's book develops this).

**Other places Perron-Frobenius appears.** The Leontief input-output model of an economy, where it decides whether an
economy can produce a surplus; the steady states of Markov chains and PageRank (Chapter 9); the growth rate of the
number of paths in a graph, which is the Perron root of its adjacency matrix ([Chapter 19](19-Linear-Algebra-in-the-World.md));
and ranking methods for sports teams.

## A short history

Systems of linear differential equations with constant coefficients were solved by d'Alembert, Euler and Lagrange in
the eighteenth century, in problems of vibrating strings and of small oscillations of mechanical systems; Lagrange's
*Mécanique analytique* (1788) treats small oscillations about an equilibrium in what we would now call normal
coordinates. The exponential of a matrix, defined by its power series, was used by Peano in 1888 for linear systems of
differential equations, and became standard with the rise of matrix methods in the twentieth century. Oskar Perron proved his theorem for positive
matrices in 1907 in work on continued fractions, and Georg Frobenius extended it to nonnegative irreducible matrices in
1912. Leslie's population matrices appeared in *Biometrika* in 1945; similar models had been used a few years earlier
by H. Bernardelli and by E. G. Lewis.

## Check yourself

??? question "1. Solve $x' = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}x$ with $x(0) = (1, 1)$. Is the origin stable?"

    The system is already decoupled: $x_1' = 3x_1$, $x_2' = -x_2$. So $x(t) = (e^{3t}, e^{-t})$.

    The eigenvalue 3 is positive, so the origin is unstable (a saddle: $\det = -3 < 0$).

??? question "2. Solve $x' = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}x$ with $x(0) = (2, -1)$."

    From Chapter 9, the eigenvalues are 2 and 5 with eigenvectors $(1, -2)$ and $(1, 1)$.

    Solve $(2, -1) = c_1(1, -2) + c_2(1, 1)$: $c_1 + c_2 = 2$ and $-2c_1 + c_2 = -1$. Subtracting, $3c_1 = 3$, so
    $c_1 = 1$, $c_2 = 1$.

    $x(t) = e^{2t}(1, -2) + e^{5t}(1, 1) = (e^{2t} + e^{5t},\; -2e^{2t} + e^{5t})$.

    Check: $x_1' = 2e^{2t} + 5e^{5t}$ and $4x_1 + x_2 = 4e^{2t} + 4e^{5t} - 2e^{2t} + e^{5t} = 2e^{2t} + 5e^{5t}$.

??? question "3. Compute $e^{tA}$ for $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and solve $x' = Ax$, $x(0) = (0, 1)$."

    $A = I + N$ with $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, and $I$ commutes with $N$, so
    $e^{tA} = e^{tI}e^{tN} = e^t\begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}$.

    $x(t) = e^{tA}(0, 1) = (te^t, e^t)$. Check: $x_1' = e^t + te^t = x_1 + x_2$, and $x_2' = e^t = x_2$.

??? question "4. Show that $e^{tA}$ for $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ solves Newton's first law $u'' = 0$ (constant velocity)."

    With $x = (u, u')$, the equation $u'' = 0$ is $x_1' = x_2$, $x_2' = 0$, that is $x' = Ax$.
    $e^{tA} = I + tA = \begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}$, so $u(t) = u(0) + t\,u'(0)$ and $u'(t) = u'(0)$:
    straight-line motion at constant speed.

??? question "5. Classify the origin for $x' = Ax$ when $A$ is (a) $\begin{pmatrix} -3 & 4 \\ -2 & 1 \end{pmatrix}$, (b) $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$, (c) $\begin{pmatrix} 2 & -5 \\ 1 & -2 \end{pmatrix}$."

    (a) $\tau = -2$, $\Delta = -3 + 8 = 5$, $\tau^2 - 4\Delta = 4 - 20 < 0$: eigenvalues $-1 \pm 2i$, a stable spiral.

    (b) $\Delta = 1 - 4 = -3 < 0$: a saddle (eigenvalues 3 and $-1$), unstable.

    (c) $\tau = 0$, $\Delta = -4 + 5 = 1$: eigenvalues $\pm i$, a centre. Solutions go round closed ellipses; stable
    but not asymptotically stable.

??? question "6. Compare $u'' + 4u = 0$ and $u'' + u' + 4u = 0$ through the eigenvalues of their companion matrices."

    $u'' + 4u = 0$ gives $A = \begin{pmatrix} 0 & 1 \\ -4 & 0 \end{pmatrix}$, with $\lambda^2 + 4 = 0$, $\lambda = \pm 2i$:
    a centre. The solutions $\cos 2t$, $\sin 2t$ oscillate forever with angular frequency 2.

    $u'' + u' + 4u = 0$ gives $A = \begin{pmatrix} 0 & 1 \\ -4 & -1 \end{pmatrix}$ with $\lambda^2 + \lambda + 4 = 0$,
    $\lambda = \frac{-1 \pm i\sqrt{15}}{2}$: a stable spiral. The solutions $e^{-t/2}\cos\frac{\sqrt{15}}{2}t$ and
    $e^{-t/2}\sin\frac{\sqrt{15}}{2}t$ oscillate slightly more slowly (angular frequency $\sqrt{15}/2 \approx 1.94$) and
    die away.

??? question "7. Prove that $\det e^A = e^{\operatorname{tr}A}$ for diagonalisable $A$, and check it for $A = \begin{pmatrix} -2 & 1 \\ 1 & -2 \end{pmatrix}$ using the formula for $e^{tA}$ in 10.2."

    $\det e^A = \det(Pe^DP^{-1}) = \det e^D = \prod e^{\lambda_i} = e^{\sum\lambda_i} = e^{\operatorname{tr}A}$.

    For the two-rooms matrix at $t = 1$, $e^A = \frac12\begin{pmatrix} e^{-1} + e^{-3} & e^{-1} - e^{-3} \\ e^{-1} - e^{-3} & e^{-1} + e^{-3} \end{pmatrix}$, with
    determinant $\frac14\left((e^{-1} + e^{-3})^2 - (e^{-1} - e^{-3})^2\right) = \frac14 \cdot 4e^{-1}e^{-3} = e^{-4}$,
    and $\operatorname{tr}A = -4$.

??? question "8. Two masses $m$ between walls, outer springs with constant $k$, middle spring with constant $\kappa$. Find the normal modes and frequencies."

    $mx_1'' = -kx_1 + \kappa(x_2 - x_1)$ and $mx_2'' = -\kappa(x_2 - x_1) - kx_2$, so $x'' = -\frac1mKx$ with
    $K = \begin{pmatrix} k + \kappa & -\kappa \\ -\kappa & k + \kappa \end{pmatrix}$.

    $K(1, 1) = (k, k)$ and $K(1, -1) = (k + 2\kappa, -(k + 2\kappa))$. So the modes are $(1, 1)$ with
    $\omega_1 = \sqrt{k/m}$ and $(1, -1)$ with $\omega_2 = \sqrt{(k + 2\kappa)/m}$. With $\kappa = k$ this is the
    $\sqrt{k/m}$, $\sqrt{3k/m}$ of 10.3.

??? question "9. A Leslie matrix has $f = (0, 1, 2)$ and survival rates $s_1 = s_2 = 0.5$. Find its characteristic polynomial, its Perron root and its stable age distribution. What is $R_0$?"

    $L = \begin{pmatrix} 0 & 1 & 2 \\ 0.5 & 0 & 0 \\ 0 & 0.5 & 0 \end{pmatrix}$. Expanding along the first row,
    $\det(\lambda I - L) = \lambda^3 - f_2s_1\lambda - f_3s_1s_2 = \lambda^3 - 0.5\lambda - 0.5$.

    $\lambda = 1$ is a root: $1 - 0.5 - 0.5 = 0$. Then $\lambda^3 - 0.5\lambda - 0.5 = (\lambda - 1)(\lambda^2 + \lambda + 0.5)$,
    whose other roots $\frac{-1 \pm i}{2}$ have absolute value $\frac{\sqrt 2}{2} < 1$. So $r = 1$: the population
    neither grows nor shrinks in the long run.

    Stable distribution: $v = (1, s_1/r, s_1s_2/r^2) = (1, 0.5, 0.25)$, or $(4, 2, 1)/7$ as proportions.

    $R_0 = f_2s_1 + f_3s_1s_2 = 0.5 + 0.5 = 1$, consistent with $r = 1$.

??? question "10. Does $x_{k+1} = Ax_k$ with $A = \begin{pmatrix} 0.5 & 0.4 \\ 0.1 & 0.7 \end{pmatrix}$ go to zero from every start?"

    $\tau = 1.2$, $\Delta = 0.35 - 0.04 = 0.31$, so $\lambda = \frac{1.2 \pm \sqrt{1.44 - 1.24}}{2} = \frac{1.2 \pm \sqrt{0.2}}{2}$,
    about 0.824 and 0.376. Both are less than 1 in absolute value, so yes (Theorem 7), roughly like $0.824^k$.

    Note that the continuous-time criterion would say the opposite: $\operatorname{tr}A > 0$. For maps the test is
    $|\lambda| < 1$, not $\operatorname{Re}\lambda < 0$.

??? question "11. A real $2 \times 2$ matrix has $\operatorname{tr}A = 0$ and $\det A > 0$. Show that every solution of $x' = Ax$ is periodic, and find the period."

    The eigenvalues satisfy $\lambda^2 + \det A = 0$, so $\lambda = \pm i\omega$ with $\omega = \sqrt{\det A} > 0$.
    They are distinct, so $A$ is diagonalisable over $\mathbb{C}$ and each solution is $c_1e^{i\omega t}v + c_2e^{-i\omega t}\bar v$,
    which has period $2\pi/\omega$. In fact, by Cayley-Hamilton ([Chapter 16](16-Jordan-Form.md)) $A^2 = -\omega^2I$,
    so $e^{tA} = \cos(\omega t)I + \frac{\sin(\omega t)}{\omega}A$, visibly periodic with period $2\pi/\omega$.

??? question "12. For $X = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ and $Y = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$, compute $e^X$, $e^Y$, $e^Xe^Y$ and $e^{X + Y}$, and conclude that $e^{X + Y} \neq e^Xe^Y$."

    $X^2 = Y^2 = 0$, so $e^X = I + X = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and $e^Y = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$.
    Their product is $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$.

    $S = X + Y = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ has $S^2 = I$. Splitting the series into even and odd
    powers, $e^S = (1 + \frac1{2!} + \frac1{4!} + \cdots)I + (1 + \frac1{3!} + \cdots)S = \cosh 1\,I + \sinh 1\,S$,
    that is $\begin{pmatrix} \cosh 1 & \sinh 1 \\ \sinh 1 & \cosh 1 \end{pmatrix} \approx \begin{pmatrix} 1.543 & 1.175 \\ 1.175 & 1.543 \end{pmatrix}$.

    These differ, and indeed $XY = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \neq YX = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$.
    (Both have determinant 1, as Theorem 4 predicts: $\operatorname{tr}X = \operatorname{tr}Y = 0$.)

## What you learned

- $e^{\lambda t}v$ solves $x' = Ax$ exactly when $Av = \lambda v$; with a basis of eigenvectors, the system decouples
  and every solution is $\sum c_ie^{\lambda_it}v_i$.
- Complex eigenvalues $a \pm bi$ give oscillations at angular frequency $b$ growing or decaying like $e^{at}$.
- The matrix exponential $e^{tA} = \sum t^kA^k/k!$ always converges, solves $x' = Ax$ uniquely, and equals
  $Pe^{tD}P^{-1}$ for diagonalisable $A$; $e^{A + B} = e^Ae^B$ needs $AB = BA$.
- Coupled oscillators have normal modes: eigenvectors of the stiffness matrix, each vibrating at its own frequency.
- The origin is asymptotically stable for $x' = Ax$ when every $\operatorname{Re}\lambda < 0$, and for
  $x_{k+1} = Ax_k$ when every $|\lambda| < 1$; for 2 by 2 systems the trace and determinant decide.
- A positive (or primitive) matrix has a dominant positive eigenvalue with a positive eigenvector, which governs the
  long-run growth rate and shape; for Leslie models, growth happens exactly when $R_0 > 1$.

**Next:** [Chapter 11](11-Inner-Product-Spaces.md), where we add angles and lengths to abstract vector spaces, and
find that Fourier series are coordinates in an orthogonal basis.

## Further reading

- M. W. Hirsch, S. Smale and R. L. Devaney, *Differential Equations, Dynamical Systems, and an Introduction to Chaos*,
  3rd edition, Academic Press, 2013, chapters 2 to 6 and 8.
- G. Strang, *Introduction to Linear Algebra*, 5th edition, Wellesley-Cambridge Press, 2016, sections 6.3 and 10.3.
- C. D. Meyer, *Matrix Analysis and Applied Linear Algebra*, SIAM, 2000, chapter 8 (Perron-Frobenius, with proofs).
- R. A. Horn and C. R. Johnson, *Matrix Analysis*, 2nd edition, Cambridge University Press, 2013, chapter 8.
- C. Moler and C. Van Loan, "Nineteen Dubious Ways to Compute the Exponential of a Matrix", *SIAM Review* 20, 1978,
  and "Nineteen Dubious Ways to Compute the Exponential of a Matrix, Twenty-Five Years Later", *SIAM Review* 45, 2003.
- P. H. Leslie, "On the Use of Matrices in Certain Population Mathematics", *Biometrika* 33, 1945.
- H. Caswell, *Matrix Population Models*, 2nd edition, Sinauer, 2001.
- On this site: [Calculus, Chapter 14: Differential equations](../calculus/14-Differential-Equations.md),
  [Calculus, Chapter 13: Power series and Taylor](../calculus/13-Power-Series-and-Taylor.md),
  [Calculus, Chapter 15: Functions of several variables](../calculus/15-Functions-of-Several-Variables.md),
  [Probability, Chapter 13: Markov chains](../probability/13-Markov-Chains.md), the gentle
  [differential equations lesson](../../topics/change/level-8/07-differential-equations.md), and the U of T guides
  [MAT240H1 Unit 10: Eigenvalues and diagonalization](../../uoft/MAT240H1/unit10.md) and
  [MAT247H1 Unit 9: Primary decomposition and Jordan form](../../uoft/MAT247H1/unit09.md).
- Other books on the shelf: [Calculus](../calculus/index.md), [Probability](../probability/index.md).
