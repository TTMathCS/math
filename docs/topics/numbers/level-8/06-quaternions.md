---
title: "Beyond the complex numbers"
---

# Beyond the complex numbers

*Numbers · level 8, lesson 6 of 6*

## A question to start

On 16 October 1843 the Irish mathematician William Rowan Hamilton was walking with his wife along the Royal Canal in
Dublin. For years he had been trying to do for three-dimensional space what the complex numbers do for the plane: to
find numbers that could be multiplied and divided, and whose multiplication would describe rotations in space. As they
reached Brougham Bridge, the answer came to him, and he cut it into the stone with a knife:

$$i^2 = j^2 = k^2 = ijk = -1$$

The carving has long since worn away, but a plaque on the bridge records it. The surprise in Hamilton's answer was
twofold. He needed **four** dimensions, not three. And to make it work he had to give up a rule that everyone took for
granted: that $ab = ba$. In his new numbers, $ij = k$ but $ji = -k$.

## The idea

### Why triples cannot work

The complex numbers are pairs $a + bi$, and they describe the plane. The natural next try is triples $a + bi + cj$
with $i^2 = j^2 = -1$, using the usual rules. Here is a short argument that this fails.

The product $ij$ must be some triple: $ij = a + bi + cj$ for real $a, b, c$. Multiply both sides on the left by $i$
(using that multiplication is associative, so $i(ij) = (ii)j$):

$$i(ij) = i^2 j = -j.$$

$$i(a + bi + cj) = ai + bi^2 + c\,ij = ai - b + c(a + bi + cj) = (ca - b) + (a + cb)i + c^2 j.$$

These must be equal, so comparing the $j$ parts, $c^2 = -1$. But $c$ is a real number. Contradiction. So no
multiplication of triples can keep these rules. Hamilton's insight was to add a third imaginary unit $k$ to hold the
product $ij$, making **four** parts.

### The quaternions

A **quaternion** is a number

$$q = a + bi + cj + dk$$

with real $a, b, c, d$. They are written $\mathbb{H}$, for Hamilton. Add them part by part. Multiply them by
expanding brackets, with real numbers commuting with everything, and these rules for $i, j, k$:

$$i^2 = j^2 = k^2 = -1, \qquad ij = k, \quad jk = i, \quad ki = j, \qquad ji = -k, \quad kj = -i, \quad ik = -j.$$

All of these follow from Hamilton's single line. For example, from $ijk = -1$, multiply both sides on the right by $k$:
$ij\,k^2 = -k$, so $-ij = -k$, so $ij = k$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 200" role="img" aria-label="i, j and k placed round a circle with arrows going from i to j to k and back to i. Multiplying two of them in the direction of the arrows gives the third; against the arrows gives minus the third">
  <circle cx="150" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="205.5,76.1 195.1,68.2 203.8,63.2" fill="#eea66f"/>
  <polygon points="143.0,160.0 155.0,155.0 155.0,165.0" fill="#eea66f"/>
  <polygon points="101.5,63.9 99.9,76.8 91.2,71.8" fill="#eea66f"/>
  <circle cx="150" cy="40" r="15" fill="#9cc9ea"/>
  <circle cx="202" cy="130" r="15" fill="#7ccf9a"/>
  <circle cx="98" cy="130" r="15" fill="#eea66f"/>
  <g font-size="16" fill="currentColor" text-anchor="middle">
    <text x="150" y="46">i</text><text x="202" y="136">j</text><text x="98" y="136">k</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="214" y="40">with the arrows:</text>
    <text x="214" y="56">ij = k, jk = i, ki = j</text>
    <text x="4" y="186">against: ji = −k, kj = −i, ik = −j</text>
  </g>
</svg>
</div>

The picture is the easy way to remember: going round the circle **with** the arrows, the product of two neighbours is
the third; going **against** the arrows, it is minus the third. If you know the cross product of vectors, this is the
same pattern: $\mathbf{x} \times \mathbf{y} = \mathbf{z}$ but $\mathbf{y} \times \mathbf{x} = -\mathbf{z}$. (Hamilton's
quaternions are where the vector cross product and dot product came from.)

### What still works

- Addition is as before, and multiplication is still **associative**: $(pq)r = p(qr)$.
- The **distributive law** holds on both sides.
- Every quaternion except 0 has an **inverse**. Define the conjugate $\bar q = a - bi - cj - dk$. Then (worked example 3)
  $q\bar q = a^2 + b^2 + c^2 + d^2$, a positive real number, written $|q|^2$. So $q^{-1} = \dfrac{\bar q}{|q|^2}$.
- Lengths still multiply: $|pq| = |p|\,|q|$. Written out, this says that a sum of **four** squares times a sum of four
  squares is again a sum of four squares, an identity Euler had found a century earlier.

### What is lost: $pq \ne qp$

Multiplication is **not commutative**: the order matters. $ij = k$ but $ji = -k$. In everyday life many actions do not
commute either: putting on socks and then shoes is not the same as shoes and then socks. Rotations in space are like
this. Hold a book flat, turn it a quarter turn about a vertical axis and then a quarter turn about a left-right axis;
then start again and do the same two turns in the other order. The book ends up facing different ways. A number system
that describes rotations in space **must** be non-commutative, and that is why Hamilton could not keep $ab = ba$.

Some familiar facts break. For example, $x^2 = -1$ has **infinitely many** quaternion solutions: every
$bi + cj + dk$ with $b^2 + c^2 + d^2 = 1$ (Try it question 5). The fundamental theorem of algebra, and even the
factor theorem from the last lesson, depended on commutativity.

### Rotating space with quaternions

Treat a point $(x, y, z)$ of space as the **pure** quaternion $v = xi + yj + zk$ (real part 0). To rotate it by an
angle $\theta$ about an axis pointing along the unit vector $u = u_1 i + u_2 j + u_3 k$ (with $u_1^2 + u_2^2 + u_3^2 = 1$),
take

$$q = \cos\frac\theta2 + \sin\frac\theta2\,(u_1 i + u_2 j + u_3 k)$$

and compute $q\,v\,\bar q$. The result is again a pure quaternion, the rotated point. (The angle is halved because $q$
acts twice, once on each side.) You can compare it with the plane: there, multiplying by $\cos\theta + i\sin\theta$
rotated by $\theta$; in space, the sandwich $q\,v\,\bar q$ does the same job.

This is not a curiosity. Quaternions are used to store and combine orientations in 3D computer games and animation, in
robotics, and in the attitude control of spacecraft, including those that travel to Mars. Four numbers are cheaper to
store than a $3 \times 3$ table, combining two rotations is one multiplication, it is easy to blend smoothly between
two orientations, and they avoid "gimbal lock", where describing an orientation by three separate angles breaks down
in certain positions.

### The ladder and its price

| Step | Dimension | Gained | Lost |
| --- | --- | --- | --- |
| $\mathbb{R}$, the reals | 1 | no holes, limits | (it has order: $<$ and $>$) |
| $\mathbb{C}$, the complex numbers | 2 | every polynomial has a root | **order** |
| $\mathbb{H}$, the quaternions | 4 | rotations of 3D space | **commutativity**: $pq \ne qp$ |
| $\mathbb{O}$, the octonions | 8 | links to geometry and physics | **associativity**: $(pq)r \ne p(qr)$ |

The **octonions** were found in 1843, soon after the quaternions, by Hamilton's friend John Graves, and independently by
Arthur Cayley in 1845. Doubling once more gives 16-dimensional numbers in which division fails: two non-zero numbers can
multiply to zero.

And the ladder really does end. Ferdinand Georg Frobenius proved in 1877 that $\mathbb{R}$, $\mathbb{C}$ and
$\mathbb{H}$ are the only systems of this kind (finite-dimensional over $\mathbb{R}$, associative, with division). Adolf
Hurwitz proved in 1898 that if you also ask for lengths that multiply, $|pq| = |p|\,|q|$, then the only possible
dimensions are 1, 2, 4 and 8. Each step up costs a rule, and after 8 there is nothing left to pay with.

## Worked examples

**1. Order matters.** Work out $(1 + i)(1 + j)$ and $(1 + j)(1 + i)$.

1. $(1 + i)(1 + j) = 1 + j + i + ij = 1 + i + j + k$.
2. $(1 + j)(1 + i) = 1 + i + j + ji = 1 + i + j - k$.

The answers differ only in the sign of $k$: the order of the factors changed the result.

**2. A longer product.** Work out $(2 + 3i)(1 - j)$.

$2 \cdot 1 + 2(-j) + 3i \cdot 1 + 3i(-j) = 2 - 2j + 3i - 3ij = 2 + 3i - 2j - 3k$. (In the other order the answer is
$2 + 3i - 2j + 3k$.)

**3. Conjugate, length and inverse.** For $q = 1 + i + j + k$, find $q\bar q$, $|q|$ and $q^{-1}$.

1. $\bar q = 1 - i - j - k$.
2. $q\bar q$: when you expand, the cross terms cancel in pairs (for example $i(-j) + j(-i) = -k + k = 0$, and
   $i \cdot 1 + 1 \cdot(-i) = 0$), and the squares give $1 + (-i^2) + (-j^2) + (-k^2) = 1 + 1 + 1 + 1 = 4$.
3. So $|q| = 2$ and $q^{-1} = \dfrac{\bar q}{4} = \tfrac14 - \tfrac14 i - \tfrac14 j - \tfrac14 k$.

**4. A quarter turn about the vertical axis.** Rotate the point $(1, 0, 0)$, that is $v = i$, by 90° about the
$z$-axis (the axis $k$).

1. $q = \cos45° + \sin45°\,k = \tfrac{1}{\sqrt2}(1 + k)$, and $\bar q = \tfrac{1}{\sqrt2}(1 - k)$.
2. $q\,v\,\bar q = \tfrac12(1 + k)\,i\,(1 - k)$.
3. $(1 + k)i = i + ki = i + j$.
4. $(i + j)(1 - k) = i - ik + j - jk = i + j + j - i = 2j$. (Using $ik = -j$ and $jk = i$.)
5. Times $\tfrac12$: the result is $j$, the point $(0, 1, 0)$. A quarter turn about the vertical axis takes the
   $x$-direction to the $y$-direction. ✓

**5. A turn that cycles the axes.** Rotate by 120° about the axis through $(1, 1, 1)$.

1. Unit axis $\tfrac{1}{\sqrt3}(i + j + k)$; half-angle 60°; $\cos60° = \tfrac12$ and $\sin60° = \tfrac{\sqrt3}{2}$. So
   $q = \tfrac12 + \tfrac{\sqrt3}{2}\cdot\tfrac{1}{\sqrt3}(i + j + k) = \tfrac12(1 + i + j + k)$.
2. Computing $q\,i\,\bar q$ the same way gives $j$, and $q\,j\,\bar q$ gives $k$. The rotation sends the $x$-axis to the
   $y$-axis and the $y$-axis to the $z$-axis, turning a cube about its long diagonal by a third of a turn.

## Try it

1. Work out $jk$, $kj$, $k^2$ and $ijk$ from the rules (and check with the circle picture).
2. Work out $(1 + 2i)(j + k)$.
3. Find $|q|$ and $q^{-1}$ for $q = 1 + 2i + 2j + 4k$.
4. Check that $|pq| = |p|\,|q|$ for $p = 1 + 2i + k$ and $q = 3 + j - k$. (The product is $pq = 4 + 5i + 3j + 4k$.)
5. Show that $(i + j)^2 = -2$, and that $\left(\tfrac{i + j}{\sqrt2}\right)^2 = -1$. How many square roots of $-1$ are
   there among the quaternions?
6. Rotate the point $(0, 0, 1)$, that is $k$, by 180° about the $x$-axis, using $q = \cos90° + \sin90°\,i = i$.
7. Explain in words why describing rotations of space needs a multiplication that is not commutative.
8. In the step "why triples cannot work", where exactly was associativity used? Why is it fair to assume it?

??? note "Answers"
    1. $jk = i$ and $kj = -i$ (with and against the arrows). $k^2 = -1$. $ijk = (ij)k = k \cdot k = -1$.
    2. $j + k + 2ij + 2ik = j + k + 2k - 2j = -j + 3k$.
    3. $|q|^2 = 1 + 4 + 4 + 16 = 25$, so $|q| = 5$, and $q^{-1} = \dfrac{1 - 2i - 2j - 4k}{25}$.
    4. $|p|^2 = 1 + 4 + 0 + 1 = 6$ and $|q|^2 = 9 + 0 + 1 + 1 = 11$, so $|p|^2|q|^2 = 66$. And
       $|pq|^2 = 16 + 25 + 9 + 16 = 66$. ✓ So $|pq| = \sqrt{66} = |p|\,|q|$.
    5. $(i + j)^2 = i^2 + ij + ji + j^2 = -1 + k - k - 1 = -2$. Dividing $i + j$ by $\sqrt2$ divides the square by 2,
       giving $-1$. In general $(bi + cj + dk)^2 = -(b^2 + c^2 + d^2)$, because the cross terms cancel in pairs. So
       every pure quaternion of length 1 squares to $-1$: there are infinitely many square roots of $-1$, filling a
       sphere.
    6. $\bar q = -i$. $q\,k\,\bar q = i\,k\,(-i) = -(ik)i = -(-j)i = ji = -k$. The point goes to $(0, 0, -1)$: a half
       turn about the $x$-axis turns "up" into "down". ✓
    7. Two rotations of space done in different orders usually give different results (the book experiment). If a
       number system describes "first this rotation, then that one" by multiplying, its multiplication must also give
       different answers in different orders.
    8. In $i(ij) = (ii)j = i^2 j$. It is fair because we were asking for a system that keeps the usual rules of
       arithmetic other than (possibly) commutativity, and associativity is one of them. The argument shows that even
       giving up commutativity, three dimensions cannot work.

## Common mistake

**Swapping the order of factors.** With quaternions, $(1 + i)(1 + j)$ and $(1 + j)(1 + i)$ are different. When
expanding brackets, keep every product in its original left-to-right order, and only move **real** numbers freely.

**Forgetting the half-angle in rotations.** To rotate by $\theta$, use $\cos\frac\theta2$ and $\sin\frac\theta2$ in
$q$. Using $\cos\theta$ and $\sin\theta$ rotates by $2\theta$.

## Where it leads

- Back: [The fundamental theorem of algebra](05-fundamental-theorem.md) · This is the last lesson of the Numbers
  topic.
- [Level 8 page](index.md) · [Numbers topic page](../index.md) · Back to the start of the story:
  [Why each family of numbers was invented](../level-7/01-why-new-numbers.md).
- Rotations, vectors and the cross product in space: [Geometry](../../geometry/index.md). Rules such as
  associativity and commutativity, studied for their own sake: [Algebra](../../algebra/index.md) and
  [Logic](../../logic/index.md).
- On the U of T shelf: rotations as matrices and linear maps in
  [MAT240 Unit 4 (linear transformations)](../../../uoft/MAT240H1/unit04.md), and rotations that keep lengths in
  [MAT247 Unit 4 (orthogonal and unitary operators)](../../../uoft/MAT247H1/unit04.md).
