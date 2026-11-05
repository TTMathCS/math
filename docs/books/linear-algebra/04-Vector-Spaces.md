# 4. Vector spaces

*So far a vector has been an arrow or a list of numbers. But look at what we actually used: we added vectors, we
multiplied them by numbers, and a handful of rules held. Polynomials can be added and multiplied by numbers, and obey
the same rules. So can functions, matrices, the solutions of many differential equations, and strings of bits sent by a
spacecraft. If every theorem we prove uses only those rules, then every theorem applies to all of these at once. This
chapter makes that idea precise. You will see the axioms of a vector space and what follows from them, learn to
recognise subspaces and spans, meet number systems other than the real numbers (including the two-element field in
which $1 + 1 = 0$), and look carefully at sets that fail to be vector spaces, and why.*

!!! abstract "In this chapter"

    **You will learn:**

    - the definition of a vector space by axioms, and the first consequences, with proofs
    - the main examples: $\mathbb{R}^n$, polynomials, functions, matrices, solutions of linear equations
    - subspaces, the one-line test for them, and the null space of a matrix
    - the span of a set of vectors, why it is the smallest subspace containing them, and the column space
    - fields: the rational, real and complex numbers, and the finite fields $\mathbb{F}_2$ and $\mathbb{F}_p$
    - non-examples, and how to find exactly which axiom fails

    **You need:** [Chapter 1](01-Vectors.md) (vectors in $\mathbb{R}^n$), [Chapter 2](02-Systems-of-Linear-Equations.md)
    (homogeneous systems) and [Chapter 3](03-Matrices.md) (matrices). From here on the book is at university level; the
    Topics shelf has no gentler version of this chapter, but the U of T guides
    [MAT240H1 Unit 1](../../uoft/MAT240H1/unit01.md) and [Unit 2](../../uoft/MAT240H1/unit02.md) cover the same ground
    in course form.

    **Levels:** 4.1 to 4.3 are intermediate; 4.4 is intermediate to advanced; 4.5 is intermediate.

## 4.1 The axioms

A question to start with. In Chapter 2 the solutions of the homogeneous system $A\mathbf{x} = \mathbf{0}$ had the
form $s\mathbf{v} + t\mathbf{w}$: add two solutions, or scale one, and you get another solution. Now consider the
differential equation

$$
y'' + y = 0 ,
$$

which describes a mass bouncing on a spring. Its solutions include $\cos x$ and $\sin x$. If $y_1$ and $y_2$ are
solutions, then so is $y_1 + y_2$, because $(y_1 + y_2)'' + (y_1 + y_2) = (y_1'' + y_1) + (y_2'' + y_2) = 0$; and so is
$cy_1$. In fact every solution has the form $a\cos x + b\sin x$ (Calculus, [Chapter 14](../calculus/14-Differential-Equations.md)).
The solutions are functions, not lists of numbers, but they behave exactly like the plane $\{a\mathbf{v} + b\mathbf{w}\}$.
Is that a coincidence? It is not, and the way to see why is to strip the idea of a vector down to its rules.

**Definition.** A **real vector space** is a set $V$, whose elements are called **vectors**, together with two
operations:

- **addition**, which combines any two vectors $\mathbf{u}, \mathbf{v}$ in $V$ into a vector $\mathbf{u} + \mathbf{v}$ in $V$;
- **scalar multiplication**, which combines any real number $c$ and any vector $\mathbf{v}$ in $V$ into a vector $c\mathbf{v}$ in $V$;

such that for all $\mathbf{u}, \mathbf{v}, \mathbf{w}$ in $V$ and all real numbers $a, b$:

1. $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ (addition is commutative);
2. $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$ (addition is associative);
3. there is a vector $\mathbf{0}$ in $V$ with $\mathbf{v} + \mathbf{0} = \mathbf{v}$ for every $\mathbf{v}$ (a zero vector);
4. for every $\mathbf{v}$ there is a vector $-\mathbf{v}$ with $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$ (negatives);
5. $a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$;
6. $(a + b)\mathbf{v} = a\mathbf{v} + b\mathbf{v}$;
7. $a(b\mathbf{v}) = (ab)\mathbf{v}$;
8. $1\mathbf{v} = \mathbf{v}$.

These are the eight rules of Section 1.2, now promoted to a definition. Two things are hidden in the words "in $V$"
above: the sum of two vectors of $V$, and a multiple of a vector of $V$, must again lie in $V$. These are called the
**closure** properties, and in practice they are the ones that most often fail.

A word on what the definition does *not* say. It does not say what vectors are, how long they are, or what angle they
make; there is no dot product in the axioms (that comes back in Chapter 11 as extra structure). It does not say how to
multiply two vectors. It only says what addition and scaling must obey. The numbers we scale by are called **scalars**;
here they are real numbers, and in Section 4.4 they may come from other number systems.

**First consequences.** Some facts that are "obvious" for arrows must now be proved from the axioms, because we want
them for polynomials and functions too, and for strange spaces where intuition can mislead. Each proof is a few lines;
the point is to see that the axioms are enough.

**Theorem 4.1.** In any vector space $V$:

1. the zero vector is unique;
2. each vector has only one negative;
3. $0\mathbf{v} = \mathbf{0}$ for every $\mathbf{v}$ (the scalar 0 times any vector is the zero vector);
4. $c\mathbf{0} = \mathbf{0}$ for every scalar $c$;
5. $(-1)\mathbf{v} = -\mathbf{v}$;
6. if $c\mathbf{v} = \mathbf{0}$, then $c = 0$ or $\mathbf{v} = \mathbf{0}$.

*Proof.* (1) If $\mathbf{0}$ and $\mathbf{0}'$ are both zero vectors, then $\mathbf{0} = \mathbf{0} + \mathbf{0}' = \mathbf{0}' + \mathbf{0} = \mathbf{0}'$:
the first equality because $\mathbf{0}'$ is a zero vector, the second by axiom 1, the third because $\mathbf{0}$ is.

(2) If $\mathbf{w}$ and $\mathbf{w}'$ are both negatives of $\mathbf{v}$, then
$\mathbf{w} = \mathbf{w} + \mathbf{0} = \mathbf{w} + (\mathbf{v} + \mathbf{w}') = (\mathbf{w} + \mathbf{v}) + \mathbf{w}' = \mathbf{0} + \mathbf{w}' = \mathbf{w}'$.

(3) By axiom 6, $0\mathbf{v} = (0 + 0)\mathbf{v} = 0\mathbf{v} + 0\mathbf{v}$. Add $-(0\mathbf{v})$ to both sides:
the left becomes $\mathbf{0}$, the right becomes $0\mathbf{v} + \mathbf{0} = 0\mathbf{v}$ (using associativity).
So $0\mathbf{v} = \mathbf{0}$.

(4) The same trick with axiom 5: $c\mathbf{0} = c(\mathbf{0} + \mathbf{0}) = c\mathbf{0} + c\mathbf{0}$, and adding
$-(c\mathbf{0})$ to both sides gives $c\mathbf{0} = \mathbf{0}$.

(5) $\mathbf{v} + (-1)\mathbf{v} = 1\mathbf{v} + (-1)\mathbf{v} = (1 + (-1))\mathbf{v} = 0\mathbf{v} = \mathbf{0}$ by
axioms 8 and 6 and part (3). So $(-1)\mathbf{v}$ is a negative of $\mathbf{v}$, and by part (2) it is *the* negative.

(6) Suppose $c\mathbf{v} = \mathbf{0}$ and $c \ne 0$. Then
$\mathbf{v} = 1\mathbf{v} = (c^{-1}c)\mathbf{v} = c^{-1}(c\mathbf{v}) = c^{-1}\mathbf{0} = \mathbf{0}$ by axioms 8 and 7
and part (4). $\square$

Notice that part (6) used division by the scalar $c$. That is why the scalars must form a number system in which every
nonzero number has an inverse, a field (Section 4.4).

We write $\mathbf{u} - \mathbf{v}$ for $\mathbf{u} + (-\mathbf{v})$, and, thanks to associativity, sums of many vectors
need no brackets.

**Example 4.1: $\mathbb{R}^n$.** Lists of $n$ real numbers with componentwise operations. All eight axioms hold because
they hold for real numbers in each component (Section 1.2). This is the model for everything else.

**Example 4.2: polynomials.** Let $\mathcal{P}_n$ be the set of polynomials of degree at most $n$ with real
coefficients,

$$
p(x) = a_0 + a_1 x + a_2 x^2 + \cdots + a_n x^n ,
$$

with the usual addition (add coefficients of the same power) and scaling (multiply every coefficient). The zero vector
is the zero polynomial, all of whose coefficients are 0. Adding two polynomials of degree at most $n$ gives a
polynomial of degree at most $n$, so closure holds. The axioms hold because they hold coefficient by coefficient. In
fact $p(x) \leftrightarrow (a_0, a_1, \ldots, a_n)$ matches $\mathcal{P}_n$ with $\mathbb{R}^{n+1}$, and the operations
match too; Chapter 6 calls such a matching an isomorphism. The set $\mathcal{P}$ of *all* polynomials, of any degree, is
also a vector space; it does not match any $\mathbb{R}^n$, since it is "infinite-dimensional" (Chapter 5).

**Example 4.3: functions.** Let $S$ be any set, and let $\mathcal{F}(S)$ be the set of all functions $f: S \to \mathbb{R}$.
Define $f + g$ and $cf$ **pointwise**:

$$
(f + g)(s) = f(s) + g(s), \qquad (cf)(s) = c\,f(s) \qquad \text{for every } s \in S .
$$

The zero vector is the function that is 0 everywhere, and $-f$ is the function $s \mapsto -f(s)$. Each axiom holds
because it holds at every point $s$, where it is a statement about real numbers. For instance, for axiom 5:
$(a(f + g))(s) = a(f(s) + g(s)) = af(s) + ag(s) = (af + ag)(s)$ for every $s$, and two functions that agree at every
point are equal.

This one example contains many others. With $S = \{1, 2, \ldots, n\}$ a function is a list of $n$ numbers
$(f(1), \ldots, f(n))$, so $\mathcal{F}(S)$ is $\mathbb{R}^n$ again. With $S = \{1, 2, 3, \ldots\}$ it is the space of
all real **sequences** $(a_1, a_2, a_3, \ldots)$. With $S = \mathbb{R}$ it is the space of all real functions, the
setting of [Chapter 11](11-Inner-Product-Spaces.md), where functions get lengths and angles and Fourier series become
projections.

**Example 4.4: matrices.** The set $M_{m \times n}$ of all $m \times n$ real matrices, with entrywise addition and
scaling, is a vector space; it is $\mathbb{R}^{mn}$ with the entries arranged in a rectangle. (It is $\mathcal{F}(S)$
for $S$ the set of positions $(i, j)$.) Matrix *multiplication* plays no role in the vector space structure.

**Example 4.5: solution sets.** The solutions of $y'' + y = 0$, with pointwise operations, form a vector space: we
checked closure at the start of the section, and the axioms are inherited from the space of all functions. The same is
true of the solutions of any homogeneous linear system $A\mathbf{x} = \mathbf{0}$. Both are instances of the idea of the
next section: a subset of a known vector space that is closed under the operations is itself a vector space.

**Example 4.6: the complex numbers as a real space.** $\mathbb{C} = \{a + bi\}$, with ordinary addition and with
multiplication by *real* scalars, is a real vector space; $a + bi \leftrightarrow (a, b)$ matches it with $\mathbb{R}^2$.
(Multiplying by complex scalars gives a different structure, Section 4.4.)

**Example 4.7: the zero space.** The set $\{\mathbf{0}\}$ with one element, with $\mathbf{0} + \mathbf{0} = \mathbf{0}$
and $c\mathbf{0} = \mathbf{0}$, satisfies every axiom. It is the smallest vector space.

## 4.2 Subspaces

Most vector spaces in practice are found inside bigger ones: the solutions of $A\mathbf{x} = \mathbf{0}$ inside
$\mathbb{R}^n$, the solutions of a differential equation inside the space of all functions, the polynomials with some
property inside $\mathcal{P}_n$. Checking eight axioms each time would be tedious, and it is unnecessary.

**Definition.** A **subspace** of a vector space $V$ is a subset $W$ of $V$ that is itself a vector space with the same
addition and scalar multiplication.

**Theorem 4.2 (subspace test).** A subset $W$ of a vector space $V$ is a subspace if and only if

1. $\mathbf{0} \in W$,
2. $\mathbf{u} + \mathbf{v} \in W$ whenever $\mathbf{u}, \mathbf{v} \in W$ (closed under addition), and
3. $c\mathbf{v} \in W$ whenever $\mathbf{v} \in W$ and $c$ is a scalar (closed under scaling).

*Proof.* If $W$ is a subspace, it has a zero vector $\mathbf{0}_W$; then $\mathbf{0}_W + \mathbf{0}_W = \mathbf{0}_W$
in $V$, and adding the negative of $\mathbf{0}_W$ in $V$ to both sides gives $\mathbf{0}_W = \mathbf{0}$. Closure holds
because $W$'s operations must land in $W$. Conversely, suppose the three conditions hold. Then the operations of $V$,
applied to elements of $W$, land in $W$. Axioms 1, 2 and 5 to 8 are equations that hold for all vectors of $V$, so in
particular for those in $W$. Axiom 3 holds because $\mathbf{0} \in W$. For axiom 4: if $\mathbf{v} \in W$ then
$-\mathbf{v} = (-1)\mathbf{v}$ (Theorem 4.1) is in $W$ by condition 3. $\square$

Conditions 2 and 3 together say: *every linear combination of vectors in $W$ is in $W$*. Some books combine them into
one condition, $a\mathbf{u} + b\mathbf{v} \in W$. Condition 1 can be replaced by "$W$ is not empty" (if
$\mathbf{v} \in W$ then $0\mathbf{v} = \mathbf{0} \in W$ by condition 3), but checking $\mathbf{0}$ is the quickest way
to catch a non-subspace.

**Example 4.8 (lines and planes through the origin).** The line $L = \{t\mathbf{d} : t \in \mathbb{R}\}$ in
$\mathbb{R}^3$ is a subspace: $\mathbf{0} = 0\mathbf{d}$, $s\mathbf{d} + t\mathbf{d} = (s + t)\mathbf{d}$, and
$c(t\mathbf{d}) = (ct)\mathbf{d}$. So is a plane $\{s\mathbf{d}_1 + t\mathbf{d}_2\}$. But the line
$\{\mathbf{p} + t\mathbf{d}\}$ with $\mathbf{p}$ not on $L$ is not a subspace: it does not contain $\mathbf{0}$.

**Example 4.9 (the null space).** For an $m \times n$ matrix $A$, the set

$$
N(A) = \{\mathbf{x} \in \mathbb{R}^n : A\mathbf{x} = \mathbf{0}\}
$$

is a subspace of $\mathbb{R}^n$, called the **null space** (or **kernel**) of $A$. *Proof:* $A\mathbf{0} = \mathbf{0}$;
if $A\mathbf{u} = A\mathbf{v} = \mathbf{0}$ then $A(\mathbf{u} + \mathbf{v}) = A\mathbf{u} + A\mathbf{v} = \mathbf{0}$;
and $A(c\mathbf{u}) = cA\mathbf{u} = \mathbf{0}$. Everything rests on the linearity of matrix multiplication (Section
3.2). The solution set of Example 2.6's homogeneous system, $\{s(-2, 1, 0, 0) + t(-1, 0, -2, 1)\}$, is a null space.

By contrast, for $\mathbf{b} \ne \mathbf{0}$ the solutions of $A\mathbf{x} = \mathbf{b}$ do **not** form a subspace,
since $\mathbf{0}$ is not a solution. They form the null space shifted by a particular solution (Theorem 2.5), an
**affine subspace**.

**Example 4.10 (inside the polynomials).** In $\mathcal{P}_3$:

- $W_1 = \{p : p(1) = 0\}$ is a subspace. The zero polynomial vanishes at 1; if $p(1) = q(1) = 0$ then
  $(p + q)(1) = 0$ and $(cp)(1) = 0$.
- $W_2 = \{p : p(1) = 5\}$ is not: the zero polynomial is not in it.
- $W_3 = \{p : p(-x) = p(x) \text{ for all } x\}$, the even polynomials $a_0 + a_2 x^2$, is a subspace.
- $W_4 = \{p : p \text{ has integer coefficients}\}$ is not: it is closed under addition, but $\tfrac12 \cdot 1$ is not
  in it.

**Example 4.11 (inside the functions).** In $\mathcal{F}(\mathbb{R})$, the continuous functions form a subspace
$C(\mathbb{R})$, since sums and multiples of continuous functions are continuous (Calculus,
[Chapter 3](../calculus/03-Continuity.md)). Inside that, the differentiable functions form a subspace, and inside that,
the solutions of $y'' + y = 0$. Each is a vector space in its own right. The polynomials $\mathcal{P}$ are a subspace
of $C(\mathbb{R})$ (each polynomial defines a function).

**Example 4.12 (inside the matrices).** The symmetric $n \times n$ matrices ($A^T = A$) form a subspace of
$M_{n \times n}$: $(A + B)^T = A^T + B^T = A + B$ and $(cA)^T = cA^T = cA$. So do the upper triangular matrices, the
diagonal matrices, and the matrices with trace 0 (the **trace** is the sum of the diagonal entries). The invertible
matrices do **not**: the zero matrix is not invertible, and $I + (-I) = 0$.

**Every vector space has two trivial subspaces**: $\{\mathbf{0}\}$ and $V$ itself. All other subspaces are called
**proper** and **nonzero**. For the plane we can list them all.

**Theorem 4.3.** The subspaces of $\mathbb{R}^2$ are exactly: $\{\mathbf{0}\}$, the lines through the origin, and
$\mathbb{R}^2$.

*Proof.* Let $W$ be a subspace. If $W = \{\mathbf{0}\}$ we are done. Otherwise $W$ contains some $\mathbf{v} \ne \mathbf{0}$,
and with it the whole line $L = \{t\mathbf{v}\}$. If $W = L$, done. Otherwise $W$ contains a vector $\mathbf{w}$ that
is not a multiple of $\mathbf{v}$. Write $\mathbf{v} = (a, c)$ and $\mathbf{w} = (b, d)$. Then $ad - bc \ne 0$: if it
were 0, the vectors would be parallel (if $a \ne 0$, then $d = bc/a$ and $\mathbf{w} = (b/a)\mathbf{v}$; if $a = 0$ then
$c \ne 0$, so $b = 0$ and $\mathbf{w} = (d/c)\mathbf{v}$). By Section 3.4 the matrix with columns $\mathbf{v}, \mathbf{w}$
is invertible, so every $\mathbf{b}$ in $\mathbb{R}^2$ equals $x\mathbf{v} + y\mathbf{w}$ for some $x, y$. All such
combinations lie in $W$, so $W = \mathbb{R}^2$. $\square$

In the same way the subspaces of $\mathbb{R}^3$ are $\{\mathbf{0}\}$, lines through $\mathbf{0}$, planes through
$\mathbf{0}$, and $\mathbb{R}^3$; Chapter 5 proves this neatly using dimension.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 200" role="img" aria-label="Four small panels with axes. First: an orange line through the origin, marked with a solid dot, labelled subspace. Second: a blue line that misses the origin, which is marked with an open circle, labelled no zero vector. Third: the first quadrant shaded green with a vector v inside and its negative pointing out of the quadrant, labelled minus v escapes. Fourth: the two axes in orange, with the sum of a vector on each axis pointing into the empty region between them, labelled u plus v escapes.">
  <line x1="13" y1="95" x2="137" y2="95" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="75" y1="30" x2="75" y2="160" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="15" y1="135" x2="135" y2="55" stroke="#eea66f" stroke-width="3"/>
  <circle cx="75" cy="95" r="4" fill="currentColor"/>
  <line x1="163" y1="95" x2="287" y2="95" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="225" y1="30" x2="225" y2="160" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="165" y1="105" x2="285" y2="25" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="225" cy="95" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="313" y1="95" x2="437" y2="95" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="375" y1="30" x2="375" y2="160" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="375" y="35" width="60" height="60" fill="#7ccf9a" fill-opacity="0.35"/>
  <line x1="375" y1="95" x2="397.9" y2="72.1" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="405,65 401.1,75.3 394.7,68.9" fill="#7ccf9a"/>
  <line x1="375" y1="95" x2="352.1" y2="117.9" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
  <polygon points="345,125 348.9,114.7 355.3,121.1" fill="currentColor"/>
  <line x1="463" y1="95" x2="587" y2="95" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="525" y1="30" x2="525" y2="160" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="465" y1="95" x2="585" y2="95" stroke="#eea66f" stroke-width="3"/>
  <line x1="525" y1="33" x2="525" y2="157" stroke="#eea66f" stroke-width="3"/>
  <line x1="525" y1="95" x2="557.9" y2="62.1" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
  <polygon points="565,55 561.1,65.3 554.7,58.9" fill="currentColor"/>
  <text x="75" y="188" text-anchor="middle" font-size="13" fill="currentColor">subspace</text>
  <text x="225" y="188" text-anchor="middle" font-size="13" fill="currentColor">no zero vector</text>
  <text x="375" y="188" text-anchor="middle" font-size="13" fill="currentColor">−v escapes</text>
  <text x="525" y="188" text-anchor="middle" font-size="13" fill="currentColor">u + v escapes</text>
</svg>
</div>

**Intersections and unions.** If $U$ and $W$ are subspaces of $V$, then $U \cap W$ (the vectors in both) is a
subspace. *Proof:* $\mathbf{0}$ is in both; if $\mathbf{u}, \mathbf{v}$ are in both, then $\mathbf{u} + \mathbf{v}$ and
$c\mathbf{u}$ are in $U$ (since $U$ is a subspace) and in $W$ (since $W$ is), so in both. The same proof works for the
intersection of any number of subspaces, even infinitely many. In $\mathbb{R}^3$, two different planes through the
origin meet in a line through the origin; in equations, each new homogeneous equation cuts the solution space down to
a subspace of it.

The union $U \cup W$ (the vectors in at least one) is usually **not** a subspace. The $x$-axis and the $y$-axis in
$\mathbb{R}^2$ are subspaces, but $(1, 0) + (0, 1) = (1, 1)$ lies on neither: the fourth panel above. Exercise 9 shows
that a union of two subspaces is a subspace only when one of them contains the other. The right way to combine two
subspaces is not the union but the sum, in the next section.

## 4.3 Span

Given some vectors, what is the smallest subspace containing them? It must contain all their linear combinations, by
closure. The surprise is that nothing more is needed.

**Definition.** The **span** of vectors $\mathbf{v}_1, \ldots, \mathbf{v}_k$ in $V$ is the set of all their linear
combinations:

$$
\operatorname{span}(\mathbf{v}_1, \ldots, \mathbf{v}_k) = \{c_1\mathbf{v}_1 + \cdots + c_k\mathbf{v}_k : c_1, \ldots, c_k \text{ scalars}\}.
$$

By convention the span of no vectors at all is $\{\mathbf{0}\}$. For an infinite set $S$ of vectors, $\operatorname{span}(S)$
is the set of all linear combinations of *finitely many* vectors from $S$. If $\operatorname{span}(S) = V$, we say that
$S$ **spans** $V$, or is a **spanning set** for $V$.

**Theorem 4.4.** $\operatorname{span}(\mathbf{v}_1, \ldots, \mathbf{v}_k)$ is a subspace of $V$ containing each
$\mathbf{v}_i$, and it is contained in every subspace that contains all the $\mathbf{v}_i$. In short, it is the smallest
subspace containing them.

*Proof.* It contains $\mathbf{0} = 0\mathbf{v}_1 + \cdots + 0\mathbf{v}_k$. The sum of two combinations,
$\sum c_i\mathbf{v}_i + \sum d_i\mathbf{v}_i = \sum (c_i + d_i)\mathbf{v}_i$, is a combination, and so is
$a\sum c_i\mathbf{v}_i = \sum (ac_i)\mathbf{v}_i$. So it is a subspace. It contains $\mathbf{v}_1 = 1\mathbf{v}_1 + 0\mathbf{v}_2 + \cdots$,
and similarly each $\mathbf{v}_i$. Finally, a subspace $W$ containing all $\mathbf{v}_i$ contains all their multiples and
all sums of those, so it contains every linear combination. $\square$

**Example 4.13 (a plane in space).** Let $\mathbf{v}_1 = (1, 0, 1)$ and $\mathbf{v}_2 = (0, 1, 1)$. A combination is
$a(1, 0, 1) + b(0, 1, 1) = (a, b, a + b)$, so the span is the set of vectors whose third entry is the sum of the first
two: the plane $z = x + y$ through the origin. Is $(1, 2, 3)$ in it? Yes, with $a = 1$, $b = 2$. Is $(1, 2, 4)$? No:
$4 \ne 1 + 2$. **Check** with the cross product of Chapter 1: $\mathbf{v}_1 \times \mathbf{v}_2 = (0 \cdot 1 - 1 \cdot 1,\; 1 \cdot 0 - 1 \cdot 1,\; 1 \cdot 1 - 0 \cdot 0) = (-1, -1, 1)$,
a normal to the plane, and the plane's equation is $-x - y + z = 0$, the same thing.

**Deciding membership is solving a system.** In $\mathbb{R}^m$, $\mathbf{b}$ is in $\operatorname{span}(\mathbf{a}_1, \ldots, \mathbf{a}_n)$
exactly when $x_1\mathbf{a}_1 + \cdots + x_n\mathbf{a}_n = \mathbf{b}$ has a solution, that is, when $A\mathbf{x} = \mathbf{b}$
is consistent, where $A$ has columns $\mathbf{a}_j$. So the span of the columns of a matrix deserves a name.

**Definition.** The **column space** $C(A)$ of an $m \times n$ matrix $A$ is the span of its columns, a subspace of
$\mathbb{R}^m$. Equivalently, $C(A) = \{A\mathbf{x} : \mathbf{x} \in \mathbb{R}^n\}$, the set of all outputs of the
machine $A$.

*The system $A\mathbf{x} = \mathbf{b}$ is solvable if and only if $\mathbf{b} \in C(A)$.* This sentence restates the
column picture of Chapter 2 in the language of subspaces. Together with the null space $N(A)$, the column space is one
of the four subspaces of [Chapter 7](07-The-Four-Subspaces.md).

**Example 4.14 (spanning polynomials).** $1, x, x^2$ span $\mathcal{P}_2$, by the definition of a polynomial. Less
obviously, so do $1$, $1 + x$, $1 + x + x^2$. To show it, it is enough to reach $1, x, x^2$ themselves, since then every
combination of them is reached too:

$$
1 = 1, \qquad x = (1 + x) - 1, \qquad x^2 = (1 + x + x^2) - (1 + x).
$$

Do $1 + x$ and $x + x^2$ span $\mathcal{P}_2$? A combination $a(1 + x) + b(x + x^2) = a + (a + b)x + bx^2$ has
$x$-coefficient equal to the sum of the other two coefficients, so $x^2 + 1$, say, cannot be reached ($0 \ne 1 + 1$).
They span only a subspace.

**Example 4.15 (the null space as a span).** Elimination always describes a null space as a span. In Example 2.6, the
homogeneous solutions were $s(-2, 1, 0, 0) + t(-1, 0, -2, 1)$, so

$$
N(A) = \operatorname{span}\big((-2, 1, 0, 0),\; (-1, 0, -2, 1)\big),
$$

with one spanning vector for each free variable. A subspace given by equations ($A\mathbf{x} = \mathbf{0}$) has been
turned into a subspace given by generators (a span). Going the other way, from a span to equations, is what we did in
Example 4.13. Both descriptions are useful, and passing between them is a basic skill.

**Example 4.16 (matrices).** $M_{2 \times 2}$ is spanned by the four matrices
$E_{11} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $E_{12} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$,
$E_{21} = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$, $E_{22} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$, since
$\begin{pmatrix} a & b \\ c & d \end{pmatrix} = aE_{11} + bE_{12} + cE_{21} + dE_{22}$. The symmetric $2 \times 2$
matrices are spanned by three: $E_{11}$, $E_{22}$ and $E_{12} + E_{21}$.

**Example 4.17 (no finite spanning set).** No finite set of polynomials spans $\mathcal{P}$. *Proof:* if
$p_1, \ldots, p_k$ have degrees at most $d$, every combination has degree at most $d$, so $x^{d+1}$ is not in their span.
A space with no finite spanning set is called **infinite-dimensional**. The space of all functions on $\mathbb{R}$ is
another example; such spaces are the subject of [Chapter 20](20-Where-Linear-Algebra-Goes.md).

**Redundant vectors.** If one vector is a combination of the others, removing it does not change the span.

**Theorem 4.5.** If $\mathbf{v}_k \in \operatorname{span}(\mathbf{v}_1, \ldots, \mathbf{v}_{k-1})$, then
$\operatorname{span}(\mathbf{v}_1, \ldots, \mathbf{v}_k) = \operatorname{span}(\mathbf{v}_1, \ldots, \mathbf{v}_{k-1})$.

*Proof.* The right side is contained in the left (use coefficient 0 for $\mathbf{v}_k$). For the other direction, write
$\mathbf{v}_k = a_1\mathbf{v}_1 + \cdots + a_{k-1}\mathbf{v}_{k-1}$; then any combination
$c_1\mathbf{v}_1 + \cdots + c_k\mathbf{v}_k$ equals $(c_1 + c_ka_1)\mathbf{v}_1 + \cdots + (c_{k-1} + c_ka_{k-1})\mathbf{v}_{k-1}$,
which is in the right side. $\square$

For instance, $\operatorname{span}((1, 0, 1), (0, 1, 1), (1, 1, 2))$ is still the plane of Example 4.13, since
$(1, 1, 2)$ is the sum of the first two. Throwing away redundant vectors until none is left leads to the idea of a
**basis**, a spanning set with no redundancy, which is the subject of
[Chapter 5](05-Independence-Bases-and-Dimension.md).

**Sums of subspaces.** For subspaces $U$ and $W$ of $V$, their **sum** is

$$
U + W = \{\mathbf{u} + \mathbf{w} : \mathbf{u} \in U,\; \mathbf{w} \in W\}.
$$

It is a subspace (check the three conditions), and it is the smallest subspace containing both $U$ and $W$, that is,
the span of $U \cup W$. The $x$-axis plus the $y$-axis is all of $\mathbb{R}^2$. Two different lines through the
origin in $\mathbb{R}^3$ add up to the plane containing them. If $U = \operatorname{span}(\mathbf{u}_1, \ldots)$ and
$W = \operatorname{span}(\mathbf{w}_1, \ldots)$, then $U + W$ is the span of all the $\mathbf{u}_i$ and $\mathbf{w}_j$
together. Chapter 5 proves a formula linking the sizes: $\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$, like counting
the elements of a union of two sets.

<figure class="play" data-play="matrix2" data-mode="map" data-m="1,2,0.5,1"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The span of two vectors (the gold and blue arrows): the grid is every combination of them. Line them up (determinant 0) and the span collapses to a line.</figcaption></figure>

## 4.4 Fields other than the reals

*Level: intermediate to advanced.*

Look again at what the axioms asked of the scalars. We added them, multiplied them, used 0 and 1, negatives, and (in
Theorem 4.1(6)) the inverse $c^{-1}$ of a nonzero scalar. Elimination in Chapter 2 also only ever added, subtracted,
multiplied and divided. Any number system with these four operations, obeying the usual rules, can serve as scalars.

**Definition.** A **field** is a set $F$ with two operations, addition and multiplication, such that:

- addition and multiplication are commutative and associative, and multiplication distributes over addition;
- there are elements $0 \ne 1$ with $a + 0 = a$ and $1a = a$ for all $a$;
- every $a$ has a negative $-a$ with $a + (-a) = 0$;
- every $a \ne 0$ has an inverse $a^{-1}$ with $aa^{-1} = 1$.

The rational numbers $\mathbb{Q}$, the real numbers $\mathbb{R}$ and the complex numbers $\mathbb{C}$ are fields. The
integers $\mathbb{Z}$ are not: 2 has no inverse among the integers. The Algebra book develops fields in depth in
[Chapter 19](../algebra/19-Fields-and-Extensions.md), with rings, of which fields are a special kind, in
[Chapter 17](../algebra/17-Rings-and-Ideals.md).

A **vector space over a field $F$** is defined by the same eight axioms, with "real number" replaced by "element of
$F$". Every theorem of this chapter, and nearly every theorem of Chapters 2 to 9, holds over any field with the same
proof, because the proofs use only the field operations. Elimination, RREF, inverses and LU all work over any field.
(Things that need more, such as lengths and angles, square roots, or the ordering $<$, are exceptions; they return with
the real and complex numbers in Part IV.)

**Complex vector spaces.** $\mathbb{C}^n$, the lists of $n$ complex numbers, is a vector space over $\mathbb{C}$. This
is the natural home of eigenvalues (Chapter 9), where even real matrices such as rotations need complex numbers, and of
quantum mechanics (Chapter 19). Note that the same set can be a vector space over different fields: $\mathbb{C}$ is a
vector space over $\mathbb{C}$ (needing one number to describe each vector) and over $\mathbb{R}$ (needing two, the real
and imaginary parts). Even $\mathbb{R}$ is a vector space over $\mathbb{Q}$, a strange infinite-dimensional one.

**The field with two elements.** Now something genuinely new. Let $\mathbb{F}_2 = \{0, 1\}$, with the operations

$$
\begin{array}{c|cc} + & 0 & 1 \\ \hline 0 & 0 & 1 \\ 1 & 1 & 0 \end{array}
\qquad\qquad
\begin{array}{c|cc} \times & 0 & 1 \\ \hline 0 & 0 & 0 \\ 1 & 0 & 1 \end{array}
$$

This is arithmetic of remainders after division by 2: even plus odd is odd, odd plus odd is even. In particular

$$
1 + 1 = 0 .
$$

All the field axioms hold (they hold for integers, and taking remainders mod 2 respects addition and multiplication).
The negative of 1 is 1 itself, since $1 + 1 = 0$; so subtraction is the same as addition. The only nonzero element, 1,
is its own inverse. Computer scientists know these operations as XOR (exclusive or) for $+$ and AND for $\times$.

**Bit strings as vectors.** $\mathbb{F}_2^n$ is the set of strings of $n$ bits, added position by position with
$1 + 1 = 0$:

$$
(1, 0, 1, 1) + (1, 1, 0, 1) = (0, 1, 1, 0).
$$

The only scalars are 0 and 1, so scaling is trivial ($0\mathbf{v} = \mathbf{0}$, $1\mathbf{v} = \mathbf{v}$), and the
interesting structure is all in the addition. Two features are startling at first: every vector is its own negative,
$\mathbf{v} + \mathbf{v} = \mathbf{0}$; and the whole space is finite, with $2^n$ vectors.

**Example 4.18 (a subspace of bit strings).** In $\mathbb{F}_2^3$ the vectors with an even number of 1s,

$$
E = \{(0,0,0),\; (1,1,0),\; (1,0,1),\; (0,1,1)\},
$$

form a subspace. *Proof:* the number of 1s in $\mathbf{u} + \mathbf{v}$ has the same parity (even or odd) as the
number in $\mathbf{u}$ plus the number in $\mathbf{v}$, because at each position where both have a 1, two 1s disappear.
So even plus even is even; $\mathbf{0}$ is even; and scaling by 0 or 1 is no problem. $E$ is the span of $(1, 1, 0)$
and $(0, 1, 1)$: their sum is $(1, 0, 1)$. It is the simplest **error-detecting code**: send three bits only if they have
even parity, and any single flipped bit is noticed at the other end, because it lands outside $E$. This is a **linear
code**, a subspace of $\mathbb{F}_2^n$ used to protect data; [Chapter 7](07-The-Four-Subspaces.md) builds the Hamming
code from the same idea and tells the story of the code used by the Mariner 9 orbiter at Mars.

**Try it in Python.** Spans over $\mathbb{F}_2$ are finite, so we can simply list them.

```python
from itertools import product

def span_mod2(gens):
    n = len(gens[0])
    vectors = set()
    for coeffs in product((0, 1), repeat=len(gens)):     # every choice of 0/1 coefficients
        v = tuple(sum(c * g[i] for c, g in zip(coeffs, gens)) % 2 for i in range(n))
        vectors.add(v)
    return sorted(vectors)

print(span_mod2([(1, 1, 0), (0, 1, 1)]))
# [(0, 0, 0), (0, 1, 1), (1, 0, 1), (1, 1, 0)]
print(span_mod2([(1, 1, 0), (0, 1, 1), (1, 0, 1)]))     # the third is redundant
# [(0, 0, 0), (0, 1, 1), (1, 0, 1), (1, 1, 0)]
print(len(span_mod2([(1, 0, 0, 0), (0, 1, 0, 0), (0, 0, 1, 1)])))
# 8
```

A span of $k$ vectors over $\mathbb{F}_2$ has at most $2^k$ elements, one per choice of coefficients, and exactly $2^k$
when there is no redundancy. That count is a preview of dimension. A brute-force search over all subsets shows that
$\mathbb{F}_2^3$ has exactly 16 subspaces: $\{\mathbf{0}\}$, 7 "lines" with 2 elements each (one for each nonzero
vector $\mathbf{v}$, namely $\{\mathbf{0}, \mathbf{v}\}$), 7 "planes" with 4 elements each, and the whole space.

**Elimination over $\mathbb{F}_2$.** Solve $x + y = 1$, $y + z = 1$, $x + y + z = 0$ over $\mathbb{F}_2$. Subtract
(that is, add) the first equation to the third: $z = 0 + 1 = 1$. Then $y = 1 + z = 0$ (since $-z = z$), and
$x = 1 + y = 1$. **Check:** $1 + 0 = 1$, $0 + 1 = 1$, $1 + 0 + 1 = 0$. The same steps as Chapter 2, with a different
addition table.

**The fields $\mathbb{F}_p$.** For any prime $p$, the remainders $\{0, 1, \ldots, p - 1\}$ with addition and
multiplication mod $p$ form a field $\mathbb{F}_p$ (also written $\mathbb{Z}/p\mathbb{Z}$ or $\mathbb{Z}/p$). The only
axiom that needs thought is inverses.

**Theorem 4.6.** If $p$ is prime and $a \not\equiv 0 \pmod p$, then $a$ has an inverse mod $p$.

*Proof.* Look at the $p - 1$ numbers $a \cdot 1, a \cdot 2, \ldots, a \cdot (p - 1)$, taken mod $p$. None is 0, since a
prime dividing $ak$ must divide $a$ or $k$, and it divides neither. They are all different: if $ak \equiv ak'$, then
$p$ divides $a(k - k')$, hence divides $k - k'$, and two numbers between 1 and $p - 1$ that differ by a multiple of $p$
are equal. So these $p - 1$ different nonzero remainders are all of $1, \ldots, p - 1$ in some order, and one of them
is 1: $ak \equiv 1$ for some $k$. $\square$

For example, in $\mathbb{F}_7$, $3 \cdot 5 = 15 \equiv 1$, so $3^{-1} = 5$. In practice inverses are computed by the
extended Euclidean algorithm (Number Theory, [Chapter 3](../number-theory/03-GCD-and-Euclids-Algorithm.md)). For a
number $n$ that is not prime, the remainders mod $n$ do *not* form a field: mod 6, $2 \cdot 3 = 0$, and 2 can have no
inverse (if $2b \equiv 1$ then $3 = 3 \cdot 2b = 6b \equiv 0$, a contradiction). There are also finite fields with
$p^k$ elements, for every prime power, and none of any other size; they are built in the Algebra book's Chapter 19 and
used throughout modern cryptography (see the [cryptography book](https://cryptography.akadian.ca/book/)) and in
coding theory, from the codes on CDs to those on deep-space links.

**What changes over a finite field.** Most of linear algebra carries over unchanged, but intuition from pictures can
mislead. Over $\mathbb{F}_2$ a nonzero vector can be orthogonal to itself in the dot-product sense:
$(1, 1) \cdot (1, 1) = 1 + 1 = 0$. So the "length" $\sqrt{\mathbf{v} \cdot \mathbf{v}}$ makes no sense, and Part IV of
this book (orthogonality, projections, least squares) is genuinely about real and complex spaces. Everything in Parts
I and II, and most of Part III, works over any field.

## 4.5 Non-examples

Definitions are understood best at their edges. Here are sets with operations that look like vector spaces but are
not, each with the exact axiom that fails. When you check whether something is a vector space, look first at the zero
vector and the closure properties: that is where things usually go wrong.

**1. A line that misses the origin.** $\{(x, y) : y = 2x + 1\}$ with the usual operations. It does not contain
$(0, 0)$, so axiom 3 fails within the set; also $(0, 1) + (0, 1) = (0, 2)$ is not on the line, so it is not closed under
addition. Lines and planes *not* through the origin are affine subspaces, translates of subspaces, as in Theorem 2.5.

**2. The first quadrant.** $Q = \{(x, y) : x \ge 0,\; y \ge 0\}$. It contains $\mathbf{0}$ and is closed under addition,
but not under scaling: $(-1)(1, 1) = (-1, -1) \notin Q$. Negatives (axiom 4) are missing. Such a set, closed under
addition and under scaling by *non-negative* numbers, is called a **cone**, and cones are central in optimisation and
linear programming.

**3. Two lines through the origin.** The union of the $x$-axis and $y$-axis is closed under scaling (a multiple of a
point on an axis stays on that axis) but not under addition, as in Section 4.2.

**4. Polynomials of degree exactly 2.** Not closed under addition: $(x^2 + x) + (-x^2) = x$, which has degree 1. And the
zero polynomial does not have degree 2. (The polynomials of degree *at most* 2 are fine.)

**5. The unit circle.** $\{(x, y) : x^2 + y^2 = 1\}$. No zero vector; $2(1, 0) = (2, 0)$ is not on it. Curved sets are
never subspaces: a subspace containing a nonzero vector contains the whole line through it.

**6. Integer vectors.** $\mathbb{Z}^2$, pairs of integers, with real scalars: $\tfrac12(1, 0) = (\tfrac12, 0)$ is not
in $\mathbb{Z}^2$. With integer scalars, $\mathbb{Z}^2$ satisfies all eight axioms, but the integers are not a field;
such a structure is called a **module** over $\mathbb{Z}$, the subject of the Algebra book's
[Chapter 21](../algebra/21-Modules-and-Representations.md). Modules behave like vector spaces in some ways and very
differently in others; for example, over the integers $2x = 0$ can have nonzero solutions in modules like $\mathbb{Z}/2$.

**7. Invertible matrices.** No zero matrix, and not closed under addition ($I + (-I) = 0$). They form a group under
*multiplication* (the general linear group; see the Algebra book's [Chapter 13](../algebra/13-Groups.md)),
which is a different kind of structure.

**8. Solutions of a non-homogeneous or nonlinear equation.** The solutions of $y'' + y = 1$ do not include $y = 0$, so
they are not a subspace (they are $1 + a\cos x + b\sin x$, an affine subspace). The solutions of $y' = y^2$ include
$y = 1/(1 - x)$ (on an interval avoiding $x = 1$), but twice that function is not a solution: $(2y)' = 2y^2$, while
$(2y)^2 = 4y^2$. Linearity of the equation is exactly what makes solution sets subspaces.

**9. Probability vectors.** The vectors $(p_1, \ldots, p_n)$ with $p_i \ge 0$ and $p_1 + \cdots + p_n = 1$ describe
probability distributions. The sum of two of them has entries adding to 2, so this set is not closed under addition. It
is closed under **convex combinations** $t\mathbf{p} + (1 - t)\mathbf{q}$ with $0 \le t \le 1$: mixing two distributions
gives a distribution. Markov chains (Chapter 9) live in this set.

**10. Wrong operations on a good set.** The set can be fine and the operations wrong. On $\mathbb{R}^2$, keep ordinary
addition but define $c \odot (x, y) = (cx, y)$. Then axiom 6 fails:
$(1 + 1) \odot (0, 1) = (0, 1)$, while $1 \odot (0, 1) + 1 \odot (0, 1) = (0, 2)$. Or define
$c \odot (x, y) = (cx, 0)$; then axiom 8 fails, since $1 \odot (0, 1) = (0, 0) \ne (0, 1)$. Every axiom is needed: for
each one there are examples satisfying all the others but not it, which is why the list has eight items and not fewer.

**A surprise in the other direction.** Strange operations can also give a genuine vector space. Let $V$ be the set of
positive real numbers, with "addition" $x \oplus y = xy$ and "scalar multiplication" $c \odot x = x^c$. Check the axioms:

- $x \oplus y = xy = yx = y \oplus x$, and associativity is that of multiplication;
- the zero vector is the number 1, since $x \oplus 1 = x$; the negative of $x$ is $1/x$, since $x \oplus (1/x) = 1$;
- $c \odot (x \oplus y) = (xy)^c = x^c y^c = (c \odot x) \oplus (c \odot y)$;
- $(a + b) \odot x = x^{a + b} = x^a x^b = (a \odot x) \oplus (b \odot x)$;
- $a \odot (b \odot x) = (x^b)^a = x^{ab} = (ab) \odot x$, and $1 \odot x = x^1 = x$.

All eight hold, and closure holds because products and real powers of positive numbers are positive. This is the
positive half-line wearing a disguise: the logarithm turns $\oplus$ into $+$ and $\odot$ into ordinary scaling, since
$\log(xy) = \log x + \log y$ and $\log(x^c) = c\log x$. It is the same space as $\mathbb{R}$ itself, written
multiplicatively, and Chapter 6 will call the logarithm an **isomorphism** between them. The lesson: being a vector
space is about how the operations behave, not about what the elements look like.

## A short history thread

The ingredients were in place long before the definition. Hermann Grassmann's *Ausdehnungslehre* (1844, rewritten in
1862) worked with linear combinations, independence and dimension of abstract "extensive quantities", in any number of
dimensions. Giuseppe Peano, in *Calcolo geometrico secondo l'Ausdehnungslehre di H. Grassmann* (1888), was the first to
write down axioms for what he called a "linear system", essentially the definition in Section 4.1 with real scalars.
His definition attracted little attention
at the time. The abstract notion of a field grew out of nineteenth-century number theory and Galois theory, in the work
of Richard Dedekind and Heinrich Weber among others, and Ernst Steinitz gave the first systematic abstract treatment of
fields in 1910. The axiomatic vector space became standard in the 1920s and 1930s, with Stefan Banach's work on spaces
of functions (his *Théorie des opérations linéaires*, 1932, is a landmark) and with the algebra textbooks of the period,
notably B. L. van der Waerden's *Moderne Algebra* (1930 to 1931), which taught a generation to think of linear algebra
over an arbitrary field.

## Check yourself

??? question "1. Is $W = \{(x, y, z) : x + 2y - z = 0\}$ a subspace of $\mathbb{R}^3$? What about $\{(x, y, z) : x + 2y - z = 1\}$?"

    $W$ is the null space of the $1 \times 3$ matrix $(1\;\; 2\;\; {-1})$, so it is a subspace (Example 4.9): a plane
    through the origin with normal $(1, 2, -1)$. The second set does not contain $(0, 0, 0)$, since $0 \ne 1$, so it is
    not a subspace; it is the same plane shifted off the origin.

??? question "2. Show that the symmetric $2 \times 2$ matrices form a subspace of $M_{2 \times 2}$, and find three matrices that span it."

    $0^T = 0$; if $A^T = A$ and $B^T = B$ then $(A + B)^T = A + B$ and $(cA)^T = cA$. A symmetric matrix is
    $\begin{pmatrix} a & b \\ b & d \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + d\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$,
    so these three matrices span it.

??? question "3. Is $(3, 1, 5)$ in the span of $(1, 1, 1)$ and $(1, 0, 2)$? Is $(3, 1, 4)$?"

    We need $a(1, 1, 1) + b(1, 0, 2) = (a + b, a, a + 2b)$. For $(3, 1, 5)$: the second entry gives $a = 1$, the first
    $b = 2$, and then the third is $1 + 4 = 5$. Yes: $(3, 1, 5) = (1, 1, 1) + 2(1, 0, 2)$. For $(3, 1, 4)$ the same $a$
    and $b$ are forced, but $1 + 4 \ne 4$, so no.

??? question "4. Prove from the axioms that $-(-\mathbf{v}) = \mathbf{v}$ and that $(-c)\mathbf{v} = -(c\mathbf{v})$."

    $-\mathbf{v} + \mathbf{v} = \mathbf{v} + (-\mathbf{v}) = \mathbf{0}$ by axioms 1 and 4, so $\mathbf{v}$ is a negative
    of $-\mathbf{v}$; negatives are unique (Theorem 4.1), so $-(-\mathbf{v}) = \mathbf{v}$. Next,
    $c\mathbf{v} + (-c)\mathbf{v} = (c + (-c))\mathbf{v} = 0\mathbf{v} = \mathbf{0}$ by axiom 6 and Theorem 4.1(3), so
    $(-c)\mathbf{v}$ is the negative of $c\mathbf{v}$.

??? question "5. Which of these are subspaces of $\mathcal{P}_3$: (a) $p(0) = 0$; (b) $p(0) = 1$; (c) $p'(1) = 0$; (d) $p(2) = p(3)$; (e) $p(x) \ge 0$ for all $x$?"

    (a) Yes: the conditions are linear and the zero polynomial satisfies them. (b) No: the zero polynomial fails.
    (c) Yes: $(p + q)' = p' + q'$ and $(cp)' = cp'$, so the condition is preserved. (d) Yes: if $p(2) = p(3)$ and
    $q(2) = q(3)$ then $(p + q)(2) = (p + q)(3)$, and similarly for $cp$. (e) No: $p = 1$ is in it but $-1 \cdot p$ is
    not. (It is a cone, like the first quadrant.)

??? question "6. Show that the set of sequences $(a_1, a_2, \ldots)$ with $a_{n+2} = a_{n+1} + a_n$ for all $n$ is a subspace of the space of all sequences. Which element has $a_1 = a_2 = 1$?"

    The zero sequence satisfies $0 = 0 + 0$. If $(a_n)$ and $(b_n)$ satisfy the rule, then
    $a_{n+2} + b_{n+2} = (a_{n+1} + b_{n+1}) + (a_n + b_n)$, and $ca_{n+2} = ca_{n+1} + ca_n$. So it is a subspace.
    The element with $a_1 = a_2 = 1$ is the Fibonacci sequence $1, 1, 2, 3, 5, 8, \ldots$. Every element is fixed by
    its first two terms, so this space behaves like $\mathbb{R}^2$; Chapter 9 uses that to find a formula for the
    Fibonacci numbers.

??? question "7. List the span of $(1, 1, 0)$ and $(0, 1, 1)$ in $\mathbb{F}_2^3$, and of $(1, 0, 1)$ and $(1, 1, 1)$. Is $(1, 1, 1)$ in the first?"

    First: $\mathbf{0}$, $(1, 1, 0)$, $(0, 1, 1)$ and their sum $(1, 0, 1)$: the even-weight subspace $E$. $(1, 1, 1)$
    has three 1s, an odd number, so it is not in $E$. Second: $\mathbf{0}$, $(1, 0, 1)$, $(1, 1, 1)$ and their sum
    $(0, 1, 0)$.

??? question "8. Solve over $\mathbb{F}_2$: $x + y + z = 1$, $x + z = 0$, $y + z = 1$. Then solve the same system over $\mathbb{R}$."

    Over $\mathbb{F}_2$: adding the second equation to the first gives $y = 1$ (since $x + x = 0$ and $z + z = 0$). Then
    the third gives $z = 1 + y = 0$, and the second gives $x = z = 0$. Solution $(0, 1, 0)$; check: $0 + 1 + 0 = 1$,
    $0 + 0 = 0$, $1 + 0 = 1$. Over $\mathbb{R}$: subtracting the second from the first gives $y = 1$; then $z = 0$ and
    $x = 0$, the same answer here. (Over $\mathbb{F}_2$ the first step adds instead of subtracting, but $-1 = 1$ there.)

??? question "9. Prove that if $U$ and $W$ are subspaces of $V$ and $U \cup W$ is a subspace, then $U \subseteq W$ or $W \subseteq U$."

    Suppose neither holds. Then there is $\mathbf{u} \in U$ with $\mathbf{u} \notin W$, and $\mathbf{w} \in W$ with
    $\mathbf{w} \notin U$. Since $U \cup W$ is a subspace, $\mathbf{u} + \mathbf{w}$ is in $U$ or in $W$. If it is in
    $U$, then $\mathbf{w} = (\mathbf{u} + \mathbf{w}) - \mathbf{u} \in U$, a contradiction. If it is in $W$, then
    $\mathbf{u} = (\mathbf{u} + \mathbf{w}) - \mathbf{w} \in W$, a contradiction.

??? question "10. In the space of positive reals with $x \oplus y = xy$ and $c \odot x = x^c$, compute $(3 \odot 2) \oplus ((-1) \odot 4)$. Which positive numbers form a subspace?"

    $3 \odot 2 = 2^3 = 8$ and $(-1) \odot 4 = 4^{-1} = \tfrac14$, so the result is $8 \cdot \tfrac14 = 2$. Under the
    logarithm this space is $\mathbb{R}$, whose only subspaces are $\{0\}$ and $\mathbb{R}$; so the only subspaces here
    are $\{1\}$ (the zero vector) and the whole set. Directly: if a subspace contains some $x \ne 1$, it contains every
    $x^c$, and these are all positive numbers.

??? question "11. Show that $\mathbb{Z}/4 = \{0, 1, 2, 3\}$ with arithmetic mod 4 is not a field, and find where the proof of Theorem 4.6 breaks."

    $2 \cdot 2 = 4 \equiv 0$, so 2 has no inverse: if $2b \equiv 1$ then $0 \equiv 2 \cdot 2b \equiv 2$, false. In the
    proof of Theorem 4.6, the multiples $2 \cdot 1, 2 \cdot 2, 2 \cdot 3$ are $2, 0, 2$: one is 0 and two coincide,
    because 4 is not prime, so "$p$ divides $ak$ implies $p$ divides $a$ or $k$" fails. (A field with 4 elements does
    exist, but it is not $\mathbb{Z}/4$; see the Algebra book's Chapter 19.)

??? question "12. Let $U = \operatorname{span}((1, 0, 0), (0, 1, 0))$ and $W = \operatorname{span}((0, 1, 1))$ in $\mathbb{R}^3$. Describe $U \cap W$ and $U + W$."

    $U$ is the plane $z = 0$; $W$ is the line of multiples $(0, t, t)$. A point $(0, t, t)$ has $z = 0$ only when
    $t = 0$, so $U \cap W = \{\mathbf{0}\}$. $U + W$ contains $(1, 0, 0)$, $(0, 1, 0)$ and $(0, 1, 1)$, hence also
    $(0, 0, 1) = (0, 1, 1) - (0, 1, 0)$, so it contains $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ and is all of
    $\mathbb{R}^3$. (In Chapter 5's formula: $3 = 2 + 1 - 0$.)

## What you learned

- A vector space is a set with an addition and a scalar multiplication obeying eight axioms; facts like
  $0\mathbf{v} = \mathbf{0}$ and $(-1)\mathbf{v} = -\mathbf{v}$ are proved from them.
- $\mathbb{R}^n$, polynomials, functions, sequences, matrices and solution sets of homogeneous linear equations are all
  vector spaces, so every theorem about vector spaces applies to all of them.
- A subset is a subspace exactly when it contains $\mathbf{0}$ and is closed under addition and scaling; the null space
  $N(A)$ is the basic example, intersections are subspaces, unions usually are not.
- The span of some vectors is the set of their linear combinations, the smallest subspace containing them;
  $A\mathbf{x} = \mathbf{b}$ is solvable exactly when $\mathbf{b}$ is in the column space $C(A)$.
- Scalars can come from any field: $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$, or the finite fields $\mathbb{F}_p$, where
  bit strings with $1 + 1 = 0$ become vectors and subspaces become error-detecting codes.
- Non-examples fail in specific places, usually the zero vector or closure; and odd-looking operations can still give a
  genuine vector space, like the positive reals under multiplication.

**Next:** [Chapter 5](05-Independence-Bases-and-Dimension.md) removes redundancy from spanning sets, defines a basis,
and proves that the number of vectors in a basis, the dimension, is the same however the basis is chosen.

## Further reading

- Sheldon Axler, *Linear Algebra Done Right* (4th edition, 2024), Chapter 1, free online from the author.
- Kenneth Hoffman and Ray Kunze, *Linear Algebra* (2nd edition, 1971), Chapters 1 and 2.
- Paul R. Halmos, *Finite-Dimensional Vector Spaces* (2nd edition, 1958), the classic short treatment over any field.
- Sergei Treil, *Linear Algebra Done Wrong* (free online from the author).
- Rudolf Lidl and Harald Niederreiter, *Introduction to Finite Fields and Their Applications* (revised edition, 1994),
  for $\mathbb{F}_p$ and beyond.
- Giuseppe Peano, *Calcolo geometrico secondo l'Ausdehnungslehre di H. Grassmann* (1888), where the axioms first appear.
- On this site: the U of T guides [MAT240H1 Unit 1, Fields and vector spaces](../../uoft/MAT240H1/unit01.md) and
  [MAT240H1 Unit 2, Subspaces, span and independence](../../uoft/MAT240H1/unit02.md); the Algebra book's
  [Chapter 19, Fields and extensions](../algebra/19-Fields-and-Extensions.md) and
  [Chapter 21, Modules and representations](../algebra/21-Modules-and-Representations.md); the Number Theory book's
  [Chapter 4, Congruences](../number-theory/04-Congruences.md); and the
  [cryptography book](https://cryptography.akadian.ca/book/), where finite fields do real work.
