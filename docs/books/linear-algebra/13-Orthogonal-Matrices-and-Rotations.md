# 13. Orthogonal matrices and rotations

*A spacecraft turning to point its antenna at Earth, a rover's camera mast swinging to look at a rock, a game character
turning its head: each is a rigid motion that keeps every length and every angle. Which matrices do that, and what do they
look like? In this chapter you will prove that the length-keeping matrices are exactly those with orthonormal columns,
sort them into rotations and reflections, prove Euler's theorem that every rotation of space turns about a fixed axis,
see why describing orientation by three angles breaks down (gimbal lock), meet Hamilton's quaternions, which do not, and
finish with the Householder reflection, the most useful orthogonal matrix in numerical computing.*

!!! abstract "In this chapter"
    **You will learn:**

    - what an orthogonal matrix is, and a proof that it keeps lengths, angles and dot products
    - that every $2 \times 2$ orthogonal matrix is a rotation or a reflection, with a formula for each
    - Euler's theorem: every rotation of 3D space has an axis, and how to find the axis and angle from the matrix
    - why rotations do not commute, how Euler angles work, and what gimbal lock really is
    - quaternions: how four numbers describe a rotation, and why spacecraft software likes them
    - Householder reflections, and how they build the QR factorisation

    **You need:** [Chapter 11](11-Inner-Product-Spaces.md) (orthonormal bases), [Chapter 12](12-Projections-and-Least-Squares.md)
    (projections and QR), [Chapter 8](08-Determinants.md) (determinants) and [Chapter 9](09-Eigenvalues-and-Eigenvectors.md)
    (eigenvalues, including complex ones in 9.5). A gentler start on turning shapes: the Topics lessons on
    [rotational symmetry](../../topics/geometry/level-4/06-rotational-symmetry.md) and
    [transformations on a grid](../../topics/geometry/level-5/03-transformations-grid.md).

    **Levels:** 13.1 and 13.2 are intermediate; 13.3 and 13.4 are intermediate to advanced; 13.5 and 13.6 are advanced.

## 13.1 Orthogonal matrices preserve length

Here is the question. A matrix $Q$ moves vectors: $x \mapsto Qx$. Suppose it is a *rigid* motion: it never stretches or
squeezes anything, so $\|Qx\| = \|x\|$ for every vector $x$. What must $Q$ look like?

Start with what it does to the standard basis vectors $e_1, \dots, e_n$. The columns of $Q$ are $q_1 = Qe_1$, ...,
$q_n = Qe_n$, so each column has length 1. That is not enough to pin $Q$ down, but we can also feed in sums. The
length of $e_i + e_j$ is $\sqrt 2$ when $i \ne j$, so $\|q_i + q_j\|^2 = 2$. Expand the left side:

$$
\|q_i + q_j\|^2 = \|q_i\|^2 + 2\, q_i \cdot q_j + \|q_j\|^2 = 2 + 2\, q_i \cdot q_j .
$$

So $q_i \cdot q_j = 0$. The columns are **orthonormal**: each has length 1 and any two are perpendicular. In matrix
language, the $(i,j)$ entry of $Q^T Q$ is $q_i \cdot q_j$, so orthonormal columns say exactly $Q^T Q = I$.

**Definition.** A real square matrix $Q$ is **orthogonal** if $Q^T Q = I$. (The name is a historical accident: the
columns are ortho*normal*, not just orthogonal. Everyone uses it anyway.)

Since $Q$ is square and $Q^T Q = I$, the matrix $Q^T$ is a left inverse, and a left inverse of a square matrix is the
inverse ([Chapter 3](03-Matrices.md)). So also $QQ^T = I$, and the *rows* of $Q$ are orthonormal too. This is a little
surprising: knowing that the columns of a square matrix are orthonormal tells you that the rows are as well.

**Theorem 13.1.** For a real $n \times n$ matrix $Q$ the following are equivalent:

1. $Q^T Q = I$ (the columns are orthonormal);
2. $Qx \cdot Qy = x \cdot y$ for all $x, y$ (dot products are kept);
3. $\|Qx\| = \|x\|$ for all $x$ (lengths are kept).

*Proof.* (1) gives (2): $Qx \cdot Qy = (Qx)^T (Qy) = x^T Q^T Q y = x^T y = x \cdot y$.

(2) gives (3): take $y = x$ and take square roots.

(3) gives (1): this is the argument we started with, done in general. The **polarisation identity**
$x \cdot y = \tfrac14 \left( \|x+y\|^2 - \|x-y\|^2 \right)$ recovers any dot product from lengths (expand both squares to
check it). If $Q$ keeps lengths, then

$$
Qx \cdot Qy = \tfrac14\left(\|Qx+Qy\|^2 - \|Qx-Qy\|^2\right) = \tfrac14\left(\|x+y\|^2 - \|x-y\|^2\right) = x \cdot y .
$$

Taking $x = e_i$ and $y = e_j$ gives $q_i \cdot q_j = e_i \cdot e_j$, which is 1 when $i = j$ and 0 otherwise. $\square$

Because angles are defined from dot products and lengths, $\cos\theta = \dfrac{x \cdot y}{\|x\|\,\|y\|}$, an orthogonal
matrix also keeps every angle. Distances are kept too: $\|Qx - Qy\| = \|Q(x-y)\| = \|x - y\|$.

**Two more facts.**

- *The determinant is $\pm 1$.* From $Q^TQ = I$ and $\det Q^T = \det Q$, we get $(\det Q)^2 = 1$.
- *Orthogonal matrices form a group.* If $Q$ and $R$ are orthogonal, so is $QR$, since $(QR)^T(QR) = R^TQ^TQR = R^TR = I$;
  and $Q^{-1} = Q^T$ is orthogonal. This group is called $O(n)$, the **orthogonal group**. The ones with determinant $+1$
  form a subgroup $SO(n)$, the **special orthogonal group**: these are the **rotations**.

**Worked example.** Is

$$
R = \frac13 \begin{pmatrix} 2 & -1 & 2 \\ 2 & 2 & -1 \\ -1 & 2 & 2 \end{pmatrix}
$$

orthogonal? The columns are $(2, 2, -1)/3$, $(-1, 2, 2)/3$ and $(2, -1, 2)/3$. Each has squared length
$(4 + 4 + 1)/9 = 1$. The dot products of the three pairs are $(-2 + 4 - 2)/9$, $(4 - 2 - 2)/9$ and $(-2 - 2 + 4)/9$, all 0.
So $R$ is orthogonal. Its determinant turns out to be $+1$, so it is a rotation. We will
find its axis and angle in 13.3.

*Check:* take $x = (1, 1, 1)$. Then $Rx = \tfrac13(3, 3, 3) = (1, 1, 1)$. The length is unchanged, as it must be; in fact
this vector is not moved at all, a first hint of the axis.

**A warning about "orthogonal".** A matrix whose columns are perpendicular but not of length 1, like
$\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$, is *not* orthogonal: it multiplies lengths by 5. Dividing by 5 fixes it.

**Why we care.** Orthogonal matrices are the matrices you can invert for free ($Q^{-1} = Q^T$), and they never amplify
errors: if the input has an error $\delta$, the output has an error of exactly the same size $\|Q\delta\| = \|\delta\|$.
That is why the stable algorithms of numerical linear algebra ([Chapter 18](18-Numerical-Linear-Algebra.md)) are built
from them. They are also the language of rigid motion in physics, robotics and graphics.

## 13.2 Rotations and reflections in 2D and 3D

**In the plane.** Which $2 \times 2$ matrices are orthogonal? The first column is a unit vector, so it is
$(\cos\theta, \sin\theta)$ for some angle $\theta$. The second column is a unit vector perpendicular to it, and in the
plane there are only two: $(-\sin\theta, \cos\theta)$ and $(\sin\theta, -\cos\theta)$. That proves:

**Theorem 13.2.** Every $2 \times 2$ orthogonal matrix is one of

$$
R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \quad (\det = 1),
\qquad
F_\theta = \begin{pmatrix} \cos\theta & \sin\theta \\ \sin\theta & -\cos\theta \end{pmatrix} \quad (\det = -1).
$$

$R_\theta$ is the **rotation** by the angle $\theta$ anticlockwise about the origin. $F_\theta$ is the **reflection**
in the line through the origin at angle $\theta/2$.

Why is $F_\theta$ a reflection, and in which line? Put $u = (\cos\frac\theta2, \sin\frac\theta2)$. Using the double angle
formulas $\cos\theta = \cos^2\frac\theta2 - \sin^2\frac\theta2$ and $\sin\theta = 2\sin\frac\theta2\cos\frac\theta2$, you
can check that $F_\theta u = u$; and the perpendicular vector $u^\perp = (-\sin\frac\theta2, \cos\frac\theta2)$ goes to
$-u^\perp$. A map that fixes one line and flips the perpendicular direction is the mirror in that line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="Left panel: a vector along the x axis from the origin, and the same vector rotated anticlockwise by the angle theta, with an arc marking theta; the caption says rotation, determinant plus one. Right panel: a dashed mirror line through the origin at 30 degrees, a vector w at 70 degrees, and its mirror image at minus 10 degrees, with a dotted segment joining their tips that crosses the mirror at right angles; the caption says reflection, determinant minus one.">
  <line x1="40" y1="160" x2="200" y2="160" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="100" y1="200" x2="100" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="100" y1="160" x2="180" y2="160" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="100" y1="160" x2="151.4" y2="98.7" stroke="#eea66f" stroke-width="4"/>
  <path d="M 140 160 A 40 40 0 0 0 125.7 129.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="146" y="146" font-size="13" fill="currentColor">θ</text>
  <text x="182" y="176" font-size="13" fill="currentColor">x</text>
  <text x="152" y="92" font-size="13" fill="currentColor">Rθ x</text>
  <text x="120" y="222" font-size="13" text-anchor="middle" fill="currentColor">rotation, det = +1</text>
  <line x1="260" y1="160" x2="420" y2="160" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="320" y1="200" x2="320" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="242.1" y1="205" x2="397.9" y2="115" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="320" y1="160" x2="347.4" y2="84.8" stroke="#eea66f" stroke-width="4"/>
  <line x1="320" y1="160" x2="398.8" y2="173.9" stroke="#7ccf9a" stroke-width="4"/>
  <line x1="347.4" y1="84.8" x2="398.8" y2="173.9" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="350" y="80" font-size="13" fill="currentColor">w</text>
  <text x="402" y="190" font-size="13" fill="currentColor">Fw</text>
  <text x="386" y="104" font-size="13" fill="currentColor">mirror</text>
  <text x="340" y="222" font-size="13" text-anchor="middle" fill="currentColor">reflection, det = −1</text>
</svg>
</div>

**Worked example.** The matrix $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$ is $R_\theta$ with
$\cos\theta = 3/5$ and $\sin\theta = 4/5$, so $\theta \approx 53.13°$. The matrix
$\frac15\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}$ is $F_\theta$ for the same $\theta$: the reflection in the line at
about $26.57°$, which is the line $y = x/2$ (since $\tan 26.57° \approx 0.5$). *Check:* it should fix $(2, 1)$:
$\frac15(6 + 4, 8 - 3) = (2, 1)$. Yes.

**Composing in the plane.** Rotations add their angles, $R_\alpha R_\beta = R_{\alpha+\beta}$ (multiply out and use the
addition formulas), so 2D rotations commute. Two reflections make a rotation: $F_\alpha F_\beta = R_{\alpha - \beta}$. If
the mirror lines meet at angle $\varphi$, the result is a rotation by $2\varphi$. This is why a kaleidoscope with two mirrors
at $60°$ repeats its picture by turns of $120°$, and shows six copies of it in all (three turned, three mirrored).

**In space.** The three **coordinate rotations** turn about the $x$, $y$ and $z$ axes:

$$
R_x(\theta) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta \end{pmatrix}, \quad
R_y(\theta) = \begin{pmatrix} \cos\theta & 0 & \sin\theta \\ 0 & 1 & 0 \\ -\sin\theta & 0 & \cos\theta \end{pmatrix}, \quad
R_z(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}.
$$

Each is a 2D rotation in one coordinate plane, with the third coordinate left alone. (Notice the sign pattern in $R_y$:
it is the rotation that turns $z$ towards $x$, which keeps all three anticlockwise when you look down the positive axis
towards the origin.)

A **reflection in a plane** through the origin with unit normal $n$ keeps the part of $x$ in the plane and flips the
part along $n$. The part along $n$ is the projection $(n \cdot x)\,n = nn^Tx$ ([Chapter 12](12-Projections-and-Least-Squares.md)),
so

$$
H = I - 2nn^T .
$$

$H$ is symmetric, $H^2 = I$ (reflect twice and you are back), and $H^TH = H^2 = I$, so it is orthogonal. Its determinant
is $-1$: in a basis made of $n$ and two vectors in the plane, $H$ is $\operatorname{diag}(-1, 1, 1)$.

**Worked example.** The reflection in the plane $x + y + z = 0$ has $n = (1,1,1)/\sqrt3$ and

$$
H = I - \tfrac23 \begin{pmatrix} 1&1&1\\1&1&1\\1&1&1 \end{pmatrix} = \frac13\begin{pmatrix} 1&-2&-2\\-2&1&-2\\-2&-2&1 \end{pmatrix}.
$$

*Check:* $H(1,1,1) = \tfrac13(-3,-3,-3) = -(1,1,1)$, the normal is flipped; and $H(1,-1,0) = \tfrac13(3, -3, 0) = (1,-1,0)$,
a vector in the plane is kept.

What about orthogonal $3 \times 3$ matrices with determinant $-1$ that are not mirrors, like $-I$ (which sends every
vector to its opposite)? We will see in 13.3 that each is a rotation followed by a reflection in the plane perpendicular to
the axis. $-I$ is the rotation by $180°$ about any axis followed by the mirror perpendicular to it. These are sometimes
called **rotoreflections** or improper rotations. A rigid object cannot be moved into its mirror image by a continuous
motion, which is why physicists separate $SO(3)$, the motions you can actually perform, from the rest of $O(3)$.

<figure class="play" data-play="matrix2" data-mode="rot"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Orthogonal 2 × 2 matrices: every one is a rotation or a reflection. The unit square keeps its shape and area; a reflection flips it.</figcaption></figure>

## 13.3 Every rotation in 3D has an axis

*Level: intermediate to advanced.*

Throw a ball, and whatever spin it has, at each instant it is turning about some axis. A stronger fact is true and less
obvious: if you pick up a book, turn it any way you like, as many times as you like, and put it down, then the final
position could have been reached by *one* turn about *one* fixed line. Euler proved this in 1775.

**Theorem 13.3 (Euler's rotation theorem).** If $Q$ is a $3 \times 3$ orthogonal matrix with $\det Q = 1$, then $1$ is an
eigenvalue of $Q$: there is a unit vector $u$ with $Qu = u$. The line through $u$ is the **axis**, and $Q$ acts on the
plane perpendicular to $u$ as a 2D rotation by some angle $\theta$.

*Proof.* We show $\det(Q - I) = 0$. Since $QQ^T = I$, we can factor out $Q$:

$$
Q - I = Q - QQ^T = Q(I - Q^T) = Q(I - Q)^T .
$$

Take determinants, using $\det Q = 1$ and $\det M^T = \det M$:

$$
\det(Q - I) = \det Q \cdot \det(I - Q)^T = \det(I - Q) = (-1)^3 \det(Q - I) = -\det(Q - I).
$$

A number equal to its own negative is 0. So $Q - I$ is singular and there is a nonzero $u$ with $Qu = u$; scale it to
length 1.

Now let $P = u^\perp$ be the plane of vectors perpendicular to $u$. If $x \in P$ then
$Qx \cdot u = Qx \cdot Qu = x \cdot u = 0$, so $Qx \in P$: the plane is **invariant**. Choose an orthonormal basis
$v, w$ of $P$ with $u, v, w$ right-handed. In the orthonormal basis $(u, v, w)$, the matrix of $Q$ is

$$
\begin{pmatrix} 1 & 0 \\ 0 & B \end{pmatrix}
$$

with $B$ a $2\times 2$ orthogonal matrix (it keeps lengths in $P$), and $1 \cdot \det B = \det Q = 1$. By Theorem 13.2,
$B = R_\theta$ for some $\theta$. $\square$

Notice where the argument used that the size is 3: the factor $(-1)^3 = -1$. In even dimensions the theorem is false.
In the plane, $R_\theta$ fixes no nonzero vector unless $\theta = 0$. In four dimensions, the rotation that turns two
perpendicular planes at once, by $R_\alpha$ in the first and $R_\beta$ in the second, fixes nothing.

**A second proof, by eigenvalues.** It is worth seeing why from the eigenvalue point of view. If $Qz = \lambda z$ for a
complex vector $z \ne 0$, then (since $Q$ is real, $\bar Q = Q$) $\overline{Qz}^T Qz = \bar z^T Q^TQ z = \bar z^T z$, so
$|\lambda|^2 \|z\|^2 = \|z\|^2$ and $|\lambda| = 1$. All eigenvalues lie on the unit circle. The characteristic
polynomial is a real cubic, so it has either three real roots, each $\pm 1$, or one real root $r$ and a conjugate pair
$e^{\pm i\theta}$. The product of the eigenvalues is $\det Q = 1$. In the second case $r \cdot e^{i\theta}e^{-i\theta} = r = 1$.
In the first case, an even number of the roots are $-1$, so at least one is $+1$. Either way, 1 is an eigenvalue, and the
other two are $e^{\pm i\theta}$, matching the rotation by $\theta$ in the perpendicular plane.

**Finding the angle.** The trace (the sum of the diagonal entries) does not change under a change of basis
([Chapter 9](09-Eigenvalues-and-Eigenvectors.md)), and in the basis $(u, v, w)$ it is $1 + 2\cos\theta$. So

$$
\cos\theta = \frac{\operatorname{tr} Q - 1}{2} .
$$

**Finding the axis.** Solve $(Q - I)u = 0$. There is also a shortcut: the antisymmetric part $Q - Q^T$ equals
$2\sin\theta\,[u]_\times$, where $[u]_\times$ is the matrix of "cross product with $u$":

$$
[u]_\times = \begin{pmatrix} 0 & -u_3 & u_2 \\ u_3 & 0 & -u_1 \\ -u_2 & u_1 & 0 \end{pmatrix}, \qquad [u]_\times x = u \times x .
$$

This shortcut also gives the *sign* of the angle (turning anticlockwise when you look from the tip of $u$ back towards
the origin), which the trace alone cannot. It fails only when $\sin\theta = 0$, that is for $\theta = 0$ or $180°$.

**Worked example.** Take the matrix $R$ of 13.1. Its trace is $(2 + 2 + 2)/3 = 2$, so $\cos\theta = (2-1)/2 = \tfrac12$
and $\theta = 60°$. For the axis,

$$
R - R^T = \frac13 \begin{pmatrix} 0 & -3 & 3 \\ 3 & 0 & -3 \\ -3 & 3 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 1 \\ 1 & 0 & -1 \\ -1 & 1 & 0 \end{pmatrix},
$$

which is $[a]_\times$ with $a = (1, 1, 1)$. So the axis is along $(1,1,1)$ and the rotation is by $+60°$.
*Check:* $2\sin 60° \cdot u$ should equal $a$: $2 \cdot \frac{\sqrt3}{2} \cdot \frac{(1,1,1)}{\sqrt3} = (1,1,1)$. Yes.
And we saw in 13.1 that $R(1,1,1) = (1,1,1)$. A further check: six turns of $60°$ is a full turn, and indeed $R^6 = I$.
Two turns, $R^2$, is the permutation matrix that sends $e_1 \to e_2 \to e_3 \to e_1$, a $120°$ turn about the same axis.

**Building a rotation from axis and angle.** Going the other way, the rotation by $\theta$ about the unit vector $u$ is
given by **Rodrigues' formula** (Olinde Rodrigues, 1840):

$$
R = I + \sin\theta\, K + (1 - \cos\theta) K^2, \qquad K = [u]_\times .
$$

*Why it works.* Split $x$ into its part along the axis, $x_\parallel = (u\cdot x)u$, and the perpendicular part
$x_\perp = x - x_\parallel$. The rotation leaves $x_\parallel$ alone and turns $x_\perp$ in the plane spanned by $x_\perp$
and $u \times x_\perp = u \times x$, which has the same length and is $90°$ ahead. So
$Rx = x_\parallel + \cos\theta\, x_\perp + \sin\theta\, (u \times x)$. Since $K^2 x = u \times (u \times x) = -x_\perp$ (a
standard identity, checked by expanding $u \times (u \times x) = (u\cdot x)u - (u \cdot u)x$), we have
$x_\perp = -K^2x$ and $x_\parallel = x + K^2x$, which gives the formula.

**Mars.** When engineers describe the orientation (the **attitude**) of an orbiter or a rover, they mean the rotation
that carries a fixed reference frame (for instance, one tied to the stars or to the planet's surface) to the frame of the
spacecraft's body. Euler's theorem says this rotation is always one turn about one axis, by an angle at most $180°$. A
"slew" from one attitude to another is therefore, in principle, a single turn, though in practice the turn chosen is
shaped by limits on the spacecraft's wheels and on where the Sun and the antenna may point.

## 13.4 Composing rotations, Euler angles and gimbal lock

*Level: intermediate to advanced.*

**Rotations in space do not commute.** Hold a book flat in front of you. Turn it $90°$ about the vertical axis, then
$90°$ about the axis pointing towards you. Start again and do the two turns in the other order. The book ends in
different positions. In matrices, with $R_x = R_x(90°)$ and $R_z = R_z(90°)$:

$$
R_x R_z = \begin{pmatrix} 0 & -1 & 0 \\ 0 & 0 & -1 \\ 1 & 0 & 0 \end{pmatrix}, \qquad
R_z R_x = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}.
$$

(Remember that $R_xR_z$ means "first $R_z$, then $R_x$": the matrix nearest the vector acts first.) The first sends $e_1$
to $e_3$, the second sends $e_1$ to $e_2$. By Euler's theorem each product is itself one rotation. Both have trace 0,
so both turn by $120°$. The axis of $R_zR_x$ is $(1,1,1)$; the axis of $R_xR_z$ is $(1,-1,1)$. Different axes: the order
matters.

**Euler angles.** A rotation of space has three degrees of freedom: two to say where the axis points, one for the angle.
A popular way to describe it with three numbers is as a product of three coordinate rotations. Aircraft and spacecraft
often use **yaw, pitch and roll**:

$$
R = R_z(\psi)\, R_y(\theta)\, R_x(\varphi) ,
$$

roll $\varphi$ about the body's forward axis, then pitch $\theta$, then yaw $\psi$ about the vertical. There are twelve
possible orders of axes (such as $zyx$ or $zxz$) and two conventions for whether the axes move with the body, so always
check which one a document means. Every rotation can be written in this form, and for most rotations the three angles are
unique within their ranges. The trouble is the word "most".

**Gimbal lock.** Set the pitch to $\theta = 90°$ and multiply out (a direct computation):

$$
R_z(\psi)\, R_y(90°)\, R_x(\varphi) = \begin{pmatrix} 0 & -\sin(\psi - \varphi) & \cos(\psi - \varphi) \\ 0 & \cos(\psi - \varphi) & \sin(\psi - \varphi) \\ -1 & 0 & 0 \end{pmatrix}.
$$

The answer depends only on the *difference* $\psi - \varphi$. Changing yaw and changing roll do the same thing: one
degree of freedom has disappeared. Near this pitch, small changes in the orientation can force huge changes in the
angles, and the formulas that turn angular velocity into rates of change of the angles divide by $\cos\theta$, which is
0 here.

The name comes from hardware. A gyroscope platform held in three nested rings (**gimbals**) can turn freely about three
axes, until two of the rings line up; then it has only two. The Apollo spacecraft's inertial platform had three gimbals,
and the crews had to keep the spacecraft away from attitudes near this lock.

Is this a defect of yaw-pitch-roll that a cleverer choice of three angles would avoid? No. It is a theorem of topology
that no choice of three coordinates can describe all of $SO(3)$ smoothly, one-to-one and without a singular
point: the set of rotations is a curved
three-dimensional space that cannot be flattened onto a piece of ordinary 3D space without tearing somewhere. (The
precise statement and proof belong to differential topology; the key fact is that $SO(3)$ is compact, and a compact
3-dimensional manifold cannot be covered by a single coordinate chart.) Every three-angle description has a singular
place. The fix is to use more than three numbers: the nine entries of the matrix, or the four of a quaternion.

**Try it in Python.** This checks the gimbal-lock formula numerically (standard library only):

```python
from math import cos, sin, radians

def mul(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(3)) for j in range(3)] for i in range(3)]

def Rx(t): return [[1, 0, 0], [0, cos(t), -sin(t)], [0, sin(t), cos(t)]]
def Ry(t): return [[cos(t), 0, sin(t)], [0, 1, 0], [-sin(t), 0, cos(t)]]
def Rz(t): return [[cos(t), -sin(t), 0], [sin(t), cos(t), 0], [0, 0, 1]]

p = radians(90)
A = mul(Rz(radians(50)), mul(Ry(p), Rx(radians(20))))  # yaw 50, roll 20
B = mul(Rz(radians(40)), mul(Ry(p), Rx(radians(10))))  # yaw 40, roll 10
print(max(abs(A[i][j] - B[i][j]) for i in range(3) for j in range(3)))  # about 1e-16
```

Two different angle triples, the same rotation: the difference $\psi - \varphi$ is $30°$ in both.

## 13.5 Quaternions

*Level: advanced.*

**Hamilton's problem.** Complex numbers multiply like rotations of the plane: multiplying by $e^{i\theta}$ turns by
$\theta$ (see [Algebra, Chapter 9](../algebra/09-Complex-Numbers.md)). William Rowan Hamilton spent years in the 1830s
and 1840s looking for "triples", a multiplication on 3D vectors that would do the same for space. There is none with the
properties he wanted. On 16 October 1843, walking along the Royal Canal in Dublin, he realised that four numbers were
needed, and he carved the rules into the stone of Brougham Bridge. A plaque there records it today.

**Definition.** A **quaternion** is an expression $q = a + bi + cj + dk$ with real $a, b, c, d$. They add term by term
and multiply by the distributive law and the rules

$$
i^2 = j^2 = k^2 = ijk = -1 ,
$$

from which follow $ij = k$, $jk = i$, $ki = j$ and $ji = -k$, $kj = -i$, $ik = -j$. (For example, from $ijk = -1$
multiply on the right by $k$: $ij k^2 = -k$, so $-ij = -k$ and $ij = k$.) Multiplication is associative but **not
commutative**: $ij = k$ while $ji = -k$. That is exactly what we need, since rotations do not commute.

It is convenient to write $q = a + \mathbf v$, a **scalar part** $a$ and a **vector part** $\mathbf v = (b, c, d)$. Then
the product has a neat form, which you can check from the rules:

$$
(a + \mathbf v)(b + \mathbf w) = (ab - \mathbf v \cdot \mathbf w) + (a\mathbf w + b\mathbf v + \mathbf v \times \mathbf w).
$$

The dot product and cross product of [Chapter 1](01-Vectors.md) were in fact born here: Gibbs and Heaviside later split
Hamilton's product into these two pieces.

The **conjugate** is $\bar q = a - \mathbf v$, and $q\bar q = a^2 + \|\mathbf v\|^2 = |q|^2$, the squared length of $q$
as a vector in $\mathbb R^4$. So every nonzero quaternion has an inverse $q^{-1} = \bar q / |q|^2$, and the quaternions
form a **division ring** (a number system where you can divide, but multiplication need not commute). One also checks
$|pq| = |p|\,|q|$ and $\overline{pq} = \bar q\, \bar p$.

**Rotating with quaternions.** Identify a vector $x \in \mathbb R^3$ with the **pure** quaternion $0 + x$. Let $q$ be a
**unit** quaternion, $|q| = 1$. Every unit quaternion can be written

$$
q = \cos\tfrac\theta2 + \sin\tfrac\theta2\, u, \qquad u \text{ a unit vector}.
$$

**Theorem 13.4.** The map $x \mapsto q x \bar q$ sends pure quaternions to pure quaternions and is the rotation by the
angle $\theta$ about the axis $u$.

*Proof.* First, $qx\bar q$ is pure: its conjugate is $\overline{q x \bar q} = q \bar x \bar q = -q x \bar q$, and a
quaternion equal to minus its conjugate has scalar part 0. The map is linear in $x$, and it keeps length:
$|qx\bar q| = |q|\,|x|\,|\bar q| = |x|$. So it is an orthogonal map of $\mathbb R^3$. It fixes $u$: $q$ and $u$ commute
(both are combinations of $1$ and $u$), so $q u \bar q = u q \bar q = u$. It remains to see the angle. Take a unit vector
$v \perp u$ and put $w = u \times v$. Write $c = \cos\frac\theta2$ and $s = \sin\frac\theta2$. Using the product formula
and $uv = -u\cdot v + u \times v = w$, $vu = -w$, $wu = v$, we get

$$
qv\bar q = (c + su)\,v\,(c - su) = (cv + sw)(c - su) = c^2 v - cs\, vu + cs\, w - s^2 wu = (c^2 - s^2)v + 2cs\,w .
$$

That is $\cos\theta\, v + \sin\theta\, w$: the vector $v$ turned by $\theta$ towards $w = u \times v$. So the plane
perpendicular to $u$ is rotated by $\theta$, and the map is that rotation. $\square$

Notice the half angle: $q$ contains $\theta/2$, because $q$ appears twice in $qx\bar q$.

**Worked example 1.** Rotate $e_1$ by $90°$ about the $z$ axis. Here $q = \cos 45° + \sin 45°\,k = \frac{\sqrt2}{2}(1 + k)$.
Then

$$
q\, i\, \bar q = \tfrac12 (1 + k)\, i\, (1 - k) = \tfrac12 (i + ki)(1 - k) = \tfrac12 (i + j)(1 - k) = \tfrac12 (i - ik + j - jk) = \tfrac12(i + j + j - i) = j .
$$

So $e_1 \mapsto e_2$, as a $90°$ turn about $z$ should do. *Check:* $ik = -j$ and $jk = i$ were used.

**Worked example 2.** The quaternion $q = \tfrac12(1 + i + j + k)$ has $|q|^2 = 4/4 = 1$. Its scalar part is
$\frac12 = \cos 60°$, so $\theta/2 = 60°$, $\theta = 120°$; its vector part is $\frac12(1,1,1) = \sin 60° \cdot (1,1,1)/\sqrt3$.
So it is the $120°$ rotation about $(1,1,1)$, the same as the permutation matrix $R_zR_x$ of 13.4, and indeed
$q\,i\,\bar q = j$, $q\,j\,\bar q = k$ (multiply it out, or run the code below).

**Composing.** If $p$ and $q$ are unit quaternions, rotating by $q$ and then by $p$ is
$x \mapsto p(qx\bar q)\bar p = (pq)x\overline{(pq)}$. So composition of rotations is just quaternion multiplication.
For instance, with $q_z = \frac{\sqrt2}{2}(1 + k)$ and $q_x = \frac{\sqrt2}{2}(1 + i)$, the product
$q_x q_z = \frac12(1 + i - j + k)$, which is the $120°$ rotation about $(1,-1,1)$, matching the matrix $R_xR_z$ of 13.4.

**Two to one.** $q$ and $-q$ give the same rotation, since the two minus signs cancel in $qx\bar q$. The unit
quaternions form the 3-sphere $S^3$ in $\mathbb R^4$, and the map $S^3 \to SO(3)$ is two-to-one. A turn by $360°$
corresponds to $q = \cos 180° = -1$, not to $+1$; only a $720°$ turn brings $q$ back. This is a real phenomenon in physics
(the spin of an electron behaves this way), not just bookkeeping.

**Why spacecraft use them (honestly).** Attitude software on many spacecraft stores orientation as a unit quaternion:
star trackers commonly report attitude as a quaternion, and attitude-control loops often compute with them. The reasons
are practical, not mystical.

- *Four numbers instead of nine.* A rotation matrix has nine entries tied by six constraints.
- *Easy repair.* Rounding errors slowly push a stored rotation off $SO(3)$. A matrix then has to be re-orthogonalised;
  a quaternion only has to be divided by its length.
- *No gimbal lock.* There is no singular orientation; the price is the two-to-one sign ambiguity, which software handles
  by choosing the sign with nonnegative scalar part.
- *Smooth interpolation.* Turning smoothly from one attitude to another follows a great-circle arc on $S^3$
  ("slerp", spherical linear interpolation), which is the shortest turn.
- *Cheap composition.* One quaternion product is 16 multiplications against 27 for a matrix product.

Matrices still win for transforming many vectors at once (convert the quaternion to a matrix first), and Euler angles
still win for human readers. Real systems use all three.

**Try it in Python.**

```python
def qmul(p, q):
    a1, b1, c1, d1 = p
    a2, b2, c2, d2 = q
    return (a1*a2 - b1*b2 - c1*c2 - d1*d2,
            a1*b2 + b1*a2 + c1*d2 - d1*c2,
            a1*c2 - b1*d2 + c1*a2 + d1*b2,
            a1*d2 + b1*c2 - c1*b2 + d1*a2)

def rotate(q, v):
    conj = (q[0], -q[1], -q[2], -q[3])
    return qmul(qmul(q, (0,) + tuple(v)), conj)[1:]

q = (0.5, 0.5, 0.5, 0.5)          # 120 degrees about (1,1,1)
print(rotate(q, (1, 0, 0)))       # (0.0, 1.0, 0.0)
print(rotate(q, (0, 1, 0)))       # (0.0, 0.0, 1.0)
```

## 13.6 Householder reflections

*Level: advanced.*

**The problem.** Given a vector $x$, find an orthogonal matrix that sends it onto the first axis, so that all its entries
except the first become 0. Why would you want this? Because doing it column by column turns a matrix into an upper
triangular one using only orthogonal steps, which gives the QR factorisation ([Chapter 12](12-Projections-and-Least-Squares.md))
in the most stable way known.

Since orthogonal matrices keep length, the target must be $\alpha e_1$ with $|\alpha| = \|x\|$. Reflect! The mirror that
swaps $x$ and $y = \alpha e_1$ (two vectors of the same length) is the perpendicular bisector plane of the segment from
$x$ to $y$, whose normal is $v = x - y$.

**Definition.** For a nonzero vector $v$, the **Householder reflection** is

$$
H_v = I - 2\,\frac{vv^T}{v^Tv} .
$$

It is the reflection in the hyperplane perpendicular to $v$ (the formula $I - 2nn^T$ of 13.2 with $n = v/\|v\|$). It is
symmetric and orthogonal, and $H_v^{-1} = H_v$.

**Lemma 13.5.** If $\|x\| = \|y\|$ and $x \ne y$, and $v = x - y$, then $H_v x = y$.

*Proof.* Since $\|x\| = \|y\|$, we have $v^T x = x^Tx - y^Tx$ and $v^Tv = x^Tx - 2y^Tx + y^Ty = 2(x^Tx - y^Tx)$. So
$v^Tv = 2v^Tx$, and

$$
H_v x = x - 2v\,\frac{v^Tx}{v^Tv} = x - v = y . \qquad \square
$$

**Which sign?** Either $\alpha = \|x\|$ or $\alpha = -\|x\|$ works. If $x$ is almost along $+e_1$ and we pick
$\alpha = +\|x\|$, then $v = x - \alpha e_1$ is a small difference of nearly equal vectors, and the subtraction loses
accuracy. So one always picks $\alpha = -\operatorname{sign}(x_1)\|x\|$, making $v_1 = x_1 + \operatorname{sign}(x_1)\|x\|$
a sum, never a cancellation.

**Worked example.** $x = (2, 1, 2)$, $\|x\| = 3$, $x_1 > 0$, so $\alpha = -3$ and $v = x + 3e_1 = (5, 1, 2)$, with
$v^Tv = 30$. Then

$$
H_v = I - \frac{2}{30}\begin{pmatrix} 25 & 5 & 10 \\ 5 & 1 & 2 \\ 10 & 2 & 4 \end{pmatrix}
= \begin{pmatrix} -\tfrac23 & -\tfrac13 & -\tfrac23 \\ -\tfrac13 & \tfrac{14}{15} & -\tfrac{2}{15} \\ -\tfrac23 & -\tfrac{2}{15} & \tfrac{11}{15} \end{pmatrix},
\qquad H_v x = (-3, 0, 0).
$$

*Check the first entry:* $-\tfrac43 - \tfrac13 - \tfrac43 = -3$. *Second:* $-\tfrac23 + \tfrac{14}{15} - \tfrac4{15} = 0$.

**QR by Householder.** For $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \\ 2 & 1 \end{pmatrix}$, the first column is the $x$ above,
and

$$
H_v A = \begin{pmatrix} -3 & -\tfrac73 \\ 0 & \tfrac73 \\ 0 & -\tfrac13 \end{pmatrix}.
$$

The next step works on the lower $2 \times 1$ block $(\tfrac73, -\tfrac13)$, of length $\tfrac{\sqrt{50}}{3} = \tfrac{5\sqrt2}{3}$,
with a $2\times 2$ Householder reflection (padded by a 1 in the corner so it does not disturb the first row). After it,
$H_2H_1 A = R$ is upper triangular with diagonal $-3, -\frac{5\sqrt2}3$, and $A = QR$ with $Q = H_1H_2$ (each $H$ is its
own inverse). In general, $n$ reflections triangularise an $m \times n$ matrix with $m > n$. Compared with Gram-Schmidt
([Chapter 11](11-Inner-Product-Spaces.md)), the $Q$ produced this way stays orthogonal to working precision even when the
columns of $A$ are nearly dependent, which is why library QR routines use Householder reflections (or Givens rotations,
which are 2D rotations acting on two coordinates at a time).

**Every orthogonal matrix is a product of reflections.** Householder's lemma gives a nice structural fact too.

**Theorem 13.6.** Every $n \times n$ orthogonal matrix is a product of at most $n$ reflections.

*Proof.* By induction on $n$; for $n = 1$, $Q = \pm 1$ and $-1$ is a reflection. Given $Q$, if $Qe_1 \ne e_1$, the
reflection $H$ with $v = Qe_1 - e_1$ swaps $Qe_1$ and $e_1$ (Lemma 13.5), so $HQ$ is orthogonal and fixes $e_1$; if
$Qe_1 = e_1$ take $H = I$. An orthogonal matrix that fixes $e_1$ also maps $e_1^\perp$ to itself (as in the proof of
Theorem 13.3), so $HQ = \begin{pmatrix} 1 & 0 \\ 0 & Q' \end{pmatrix}$ with $Q'$ orthogonal of size $n-1$. By induction
$Q'$ is a product of at most $n-1$ reflections of $\mathbb R^{n-1}$, each of which extends to a reflection of
$\mathbb R^n$ fixing $e_1$. Then $Q = H \cdot (HQ)$ uses at most $n$. $\square$

(The full **Cartan-Dieudonné theorem** says the same for any nondegenerate symmetric bilinear form over a field of
characteristic not 2.) Since a reflection has determinant $-1$, a rotation is a product of an even number of reflections.
In 3D, a rotation is a product of exactly two (or zero), which matches the 2D picture: two mirrors at angle $\varphi$ give
a turn by $2\varphi$ about their line of intersection.

## A short history

Leonhard Euler proved that a rigid motion of a sphere about its centre has a fixed axis in a paper presented in 1775
and published in 1776, while studying the motion of rigid bodies. Olinde Rodrigues published the axis-angle formula,
and a composition rule for rotations equivalent to quaternion multiplication, in 1840. Hamilton found the quaternions in
1843 and spent the rest of his life developing them; in the 1880s Josiah Willard Gibbs and Oliver Heaviside extracted
the dot and cross products for physics, and vectors overtook quaternions in teaching. Arthur Cayley (1846) found a
rational parametrisation of rotations, $Q = (I - S)(I + S)^{-1}$ with $S$ antisymmetric. Alston Householder published his
reflections for matrix computation in 1958, and they became the core of the QR algorithm for eigenvalues
([Chapter 18](18-Numerical-Linear-Algebra.md)). Quaternions came back in the second half of the 20th century, in
spacecraft attitude control and, from the 1980s, in computer animation.

## Check yourself

??? question "1. Show that $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$ is orthogonal, decide whether it is a rotation or a reflection, and find the angle."

    The columns $(3,4)/5$ and $(-4,3)/5$ have length 1 and dot product $(-12 + 12)/25 = 0$, so it is orthogonal. Its
    determinant is $(9 + 16)/25 = 1$, so it is a rotation $R_\theta$ with $\cos\theta = 3/5$, $\sin\theta = 4/5$:
    $\theta = \arctan(4/3) \approx 53.13°$.

??? question "2. If $Q$ is orthogonal, prove that $\|Qx - Qy\| = \|x - y\|$ and that the angle between $Qx$ and $Qy$ equals the angle between $x$ and $y$."

    $\|Qx - Qy\| = \|Q(x - y)\| = \|x - y\|$ by Theorem 13.1. For angles, $\cos$ of the angle between $Qx$ and $Qy$ is
    $\dfrac{Qx\cdot Qy}{\|Qx\|\,\|Qy\|} = \dfrac{x \cdot y}{\|x\|\,\|y\|}$, the same number, so the angles (taken in
    $[0, \pi]$) are equal.

??? question "3. Write the reflection of the plane in the line $y = x$ as $F_\theta$, and check it on $(3, 1)$."

    The line is at $45°$, so $\theta = 90°$ and $F_{90°} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. It sends
    $(3,1)$ to $(1,3)$, the mirror image in $y = x$.

??? question "4. Prove that the product of two reflections $F_\alpha F_\beta$ of the plane is the rotation $R_{\alpha-\beta}$."

    Multiply: the $(1,1)$ entry is $\cos\alpha\cos\beta + \sin\alpha\sin\beta = \cos(\alpha - \beta)$; the $(1,2)$ entry
    is $\cos\alpha\sin\beta - \sin\alpha\cos\beta = -\sin(\alpha-\beta)$; the $(2,1)$ entry is
    $\sin\alpha\cos\beta - \cos\alpha\sin\beta = \sin(\alpha-\beta)$; the $(2,2)$ entry is
    $\sin\alpha\sin\beta + \cos\alpha\cos\beta = \cos(\alpha-\beta)$. That is $R_{\alpha-\beta}$. Since the mirror lines
    are at $\alpha/2$ and $\beta/2$, the rotation angle is twice the angle between the mirrors.

??? question "5. Find the matrix of the reflection of space in the plane $x + y + z = 0$, and the image of $(1, 2, 3)$."

    With $n = (1,1,1)/\sqrt3$, $H = I - \frac23 J$ where $J$ is the all-ones matrix:
    $H = \frac13\begin{pmatrix} 1&-2&-2\\-2&1&-2\\-2&-2&1\end{pmatrix}$. Then $H(1,2,3) = \frac13(1-4-6, -2+2-6, -2-4+3) = (-3,-2,-1)$.
    *Check:* the midpoint $(-1, 0, 1)$ lies in the plane, and the difference $(4, 4, 4)$ is along the normal.

??? question "6. Find the axis and angle of the rotation $R_z(90°)R_x(90°)$."

    The product is $\begin{pmatrix} 0&0&1\\1&0&0\\0&1&0\end{pmatrix}$. Its trace is 0, so $\cos\theta = -\frac12$ and
    $\theta = 120°$. Solving $(Q - I)u = 0$ gives $u \parallel (1,1,1)$. The antisymmetric part $Q - Q^T$ is
    $[a]_\times$ with $a = (1,1,1)$, and $2\sin 120° \cdot (1,1,1)/\sqrt3 = (1,1,1)$, so the turn is $+120°$ about
    $(1,1,1)$.

??? question "7. Why does Euler's theorem fail for $2\times 2$ rotations, and where exactly does the proof use the dimension 3?"

    $R_\theta$ with $0 < \theta < 2\pi$ fixes only $0$: its eigenvalues $e^{\pm i\theta}$ are not real. The proof shows
    $\det(Q - I) = (-1)^n\det(Q - I)$, which forces $\det(Q - I) = 0$ only when $n$ is odd. In every odd dimension a
    rotation fixes some nonzero vector; in even dimensions it need not.

??? question "8. Show that the quaternion $q = \frac12(1 + i + j + k)$ satisfies $q^3 = -1$, and explain this in terms of rotations."

    Write $q = \cos 60° + \sin 60°\, u$ with $u = (1,1,1)/\sqrt3$. Since $u^2 = -u\cdot u = -1$ (the product formula with
    $\mathbf v = \mathbf w = u$), $u$ behaves like $i$ in $\mathbb C$ and de Moivre's formula holds:
    $q^3 = \cos 180° + \sin 180°\,u = -1$. As a rotation, $q^3$ is three turns of $120°$, a full turn, and $-1$ gives the
    identity rotation ($x \mapsto (-1)x(-1) = x$). The sign reflects the two-to-one map: a $360°$ turn corresponds to
    $-1$, not $+1$.

??? question "9. Use the quaternion product formula to show that $ij = k$ and $ji = -k$."

    $i = 0 + e_1$ and $j = 0 + e_2$. The formula gives $ij = (0 - e_1 \cdot e_2) + (e_1 \times e_2) = 0 + e_3 = k$, and
    $ji = -e_2\cdot e_1 + e_2 \times e_1 = -e_3 = -k$.

??? question "10. Find the Householder reflection that sends $x = (3, 4)$ to a multiple of $e_1$, using the stable choice of sign."

    $\|x\| = 5$ and $x_1 > 0$, so $\alpha = -5$ and $v = x + 5e_1 = (8, 4)$, $v^Tv = 80$. Then
    $H = I - \frac{2}{80}\begin{pmatrix} 64 & 32 \\ 32 & 16 \end{pmatrix} = \begin{pmatrix} -\frac35 & -\frac45 \\ -\frac45 & \frac35 \end{pmatrix}$,
    and $Hx = (-\frac{9}{5} - \frac{16}{5}, -\frac{12}{5} + \frac{12}5) = (-5, 0)$.

??? question "11. Prove that the eigenvalues of a real orthogonal matrix all have absolute value 1, and that a real eigenvector for $\lambda = 1$ and one for $\lambda = -1$ are perpendicular."

    If $Qz = \lambda z$ with $z \in \mathbb C^n$ nonzero, then $\bar z^T z = \bar z^T Q^TQz = \overline{(Qz)}^T(Qz) = |\lambda|^2\bar z^Tz$,
    so $|\lambda| = 1$. If $Qu = u$ and $Qw = -w$, then $u \cdot w = Qu \cdot Qw = u \cdot (-w) = -u\cdot w$, so
    $u \cdot w = 0$.

??? question "12. (Cayley.) Let $S$ be a real antisymmetric matrix ($S^T = -S$). Show that $I + S$ is invertible and that $Q = (I - S)(I + S)^{-1}$ is orthogonal. Compute $Q$ for $S = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$."

    If $(I+S)x = 0$ then $x^Tx = -x^TSx$, and $x^TSx = 0$ for antisymmetric $S$ (it equals its own transpose
    $x^TS^Tx = -x^TSx$). So $x = 0$ and $I + S$ is invertible. The matrices $I - S$ and $(I + S)^{-1}$ commute (both are
    functions of $S$). Then $Q^TQ = (I+S)^{-T}(I-S)^T(I-S)(I+S)^{-1} = (I - S)^{-1}(I + S)(I - S)(I + S)^{-1}$, and
    since $I+S$ and $I-S$ commute this is $I$. For the given $S$, $(I+S)^{-1} = \frac12\begin{pmatrix}1&1\\-1&1\end{pmatrix}$
    and $Q = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$, the rotation by $-90°$.

## What you learned

- A square matrix keeps lengths exactly when it keeps dot products, exactly when $Q^TQ = I$; then $Q^{-1} = Q^T$ and
  $\det Q = \pm 1$.
- In the plane, orthogonal matrices are rotations $R_\theta$ (determinant 1) and reflections $F_\theta$ (determinant
  $-1$); two reflections make a rotation by twice the angle between the mirrors.
- Every rotation of space turns about an axis (Euler); the angle comes from $\operatorname{tr} Q = 1 + 2\cos\theta$, the
  axis from $Q - I$ or $Q - Q^T$.
- Rotations of space do not commute, and every description by three angles has a singular place (gimbal lock).
- Unit quaternions $\cos\frac\theta2 + \sin\frac\theta2\,u$ rotate by $x \mapsto qx\bar q$; composing rotations is
  multiplying quaternions, and $q$ and $-q$ give the same rotation.
- Householder reflections $I - 2vv^T/v^Tv$ zero out a column in one stable step; they build QR and generate the whole
  orthogonal group.

**Next:** [Chapter 14](14-The-Spectral-Theorem.md), where symmetric matrices turn out to be exactly the matrices that an
orthogonal change of basis makes diagonal.

## Further reading

- G. Strang, *Introduction to Linear Algebra*, 6th ed., 2023, chapter 4 (orthogonal matrices and QR).
- L. N. Trefethen and D. Bau, *Numerical Linear Algebra*, 1997, lectures 7 to 10 (Householder triangularisation and its
  stability).
- J. B. Kuipers, *Quaternions and Rotation Sequences*, 1999 (rotations, Euler angles and quaternions for aerospace).
- S. L. Altmann, *Rotations, Quaternions, and Double Groups*, 1986 (the history, including Rodrigues).
- A. S. Householder, "Unitary triangularization of a nonsymmetric matrix", *Journal of the ACM* 5, 1958.
- J. Stillwell, *Naive Lie Theory*, 2008 (quaternions, $SO(3)$ and the 3-sphere, at undergraduate level).
- On this site: [Unit 4, Isometries: orthogonal and unitary operators](../../uoft/MAT247H1/unit04.md) (U of T MAT247H1);
  [Vectors](../../topics/geometry/level-8/04-vectors.md) and [Transformations on a grid](../../topics/geometry/level-5/03-transformations-grid.md)
  (Topics); [Complex numbers](../algebra/09-Complex-Numbers.md) in the Algebra book; the [Geometry book](../geometry/index.md).
