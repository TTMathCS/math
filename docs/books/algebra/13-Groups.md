# 13. Groups

*In Chapter 11 the key to every formula was how expressions in the roots change when the roots are shuffled. Shuffles
can be combined, undone, and done in sequence; so can the turns of a Rubik's cube, the symmetries of a crystal, the
rotations of a spacecraft and the steps of a clock. A **group** is what all of these have in common, stripped down to
three rules. In this chapter you will meet the rules, see why each one is there, prove the first facts that follow
from them, and work through the families of groups that come up everywhere: cyclic groups, dihedral groups and
permutation groups. You will finish with an honest count of the positions of a Rubik's cube, done with the tools of the
chapter.*

!!! abstract "In this chapter"
    **You will learn:**

    - how symmetries combine, using the eight symmetries of a square
    - the definition of a group, and the first theorems that follow from it
    - the standard examples: integers, integers mod $n$, units mod $n$, permutations, matrices, rotations
    - group tables, and the order of a group and of an element
    - cyclic groups: what they look like, their generators and their subgroups
    - dihedral and symmetric groups, cycle notation, and why a permutation is either even or odd
    - the Rubik's cube group: its exact size and why most "positions" cannot be reached

    **You need:** [Chapter 9](09-Complex-Numbers.md) (roots of unity, rotation as multiplication) and the idea of a
    function from [Chapter 6](06-Functions.md). Arithmetic mod $n$ helps for 13.3; the gentler versions are the Topics
    lessons [Clocks of any size](../../topics/number-theory/level-5/02-clocks-any-size.md),
    [Rotational symmetry](../../topics/geometry/level-4/06-rotational-symmetry.md) and
    [Lines of symmetry](../../topics/geometry/level-2/02-lines-of-symmetry.md).
    [Chapter 11](11-Cubics-and-Quartics.md), 11.8, explains why groups were invented, but is not needed.

    **Levels:** 13.1 to 13.4 are intermediate; 13.5 to 13.7 are advanced.

## 13.1 The symmetries of a square

Cut a square out of card and lay it in a square hole of the same size. In how many ways can you pick it up and put it
back so that it fits the hole again? Number the corner *positions* of the hole $1,2,3,4$, going clockwise from the
top left, so you can say where each corner of the card ends up.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="A square with corner positions 1 top left, 2 top right, 3 bottom right, 4 bottom left. Four dashed mirror lines pass through the centre: vertical, horizontal and the two diagonals. A curved arrow shows a quarter turn anticlockwise about the centre. On the right, a list: four rotations by 0, 90, 180 and 270 degrees, and four reflections in the dashed lines.">
  <rect x="50" y="50" width="120" height="120" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="28" x2="110" y2="192" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="28" y1="110" x2="192" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="36" y1="36" x2="184" y2="184" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="184" y1="36" x2="36" y2="184" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="50" cy="50" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="170" cy="50" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="170" cy="170" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="50" cy="170" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="170" y="55" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="170" y="175" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="50" y="175" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <path d="M 140 92 A 34 34 0 0 0 92 80" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="86,83 97,74 97,88" fill="#7ccf9a"/>
  <text x="128" y="78" font-size="12" fill="currentColor">r</text>
  <text x="105" y="22" font-size="12" fill="currentColor">s</text>
  <text x="225" y="60" font-size="13" fill="currentColor">4 rotations: 0°, 90°, 180°, 270°</text>
  <text x="225" y="85" font-size="13" fill="currentColor">  e, r, r², r³</text>
  <text x="225" y="120" font-size="13" fill="currentColor">4 reflections in the dashed lines</text>
  <text x="225" y="145" font-size="13" fill="currentColor">  s, rs, r²s, r³s</text>
  <text x="225" y="185" font-size="13" fill="currentColor">8 symmetries in all</text>
</svg>
</div>

There are eight ways:

- four **rotations** about the centre, by $0^\circ$, $90^\circ$, $180^\circ$ and $270^\circ$ anticlockwise. Call the
  quarter turn $r$; then the others are $r^2$ (do $r$ twice), $r^3$, and the "do nothing" move $e$, the
  **identity**.
- four **reflections** (flip the card over) in the four dashed lines: the vertical line, the horizontal line and the
  two diagonals. Call the flip in the vertical line $s$.

Why exactly eight? Corner $1$ of the card can go to any of the $4$ positions. Once it is placed, its neighbour corner
$2$ must go to one of the two positions next to it: $2$ choices. Then everything else is forced. $4\times2=8$.

**Combining.** Doing one symmetry and then another is again a symmetry. We write $ab$ for "**first $b$, then $a$**",
the way we write composition of functions $f(g(x))$: the one nearest the object acts first. This convention looks
backwards at first, but it is the standard one and it makes the algebra consistent.

Let us record a symmetry by where it sends each corner position. The quarter turn $r$ (anticlockwise) moves the
corner at position $1$ to position $4$, $4$ to $3$, $3$ to $2$, and $2$ to $1$. The flip $s$ in the vertical line swaps
positions $1\leftrightarrow2$ and $3\leftrightarrow4$.

Now compute $rs$: first $s$, then $r$. Follow each position:

- $1\xrightarrow{s}2\xrightarrow{r}1$: position $1$ stays;
- $2\xrightarrow{s}1\xrightarrow{r}4$;
- $3\xrightarrow{s}4\xrightarrow{r}3$: position $3$ stays;
- $4\xrightarrow{s}3\xrightarrow{r}2$.

So $rs$ fixes corners $1$ and $3$ and swaps $2$ and $4$: it is the flip in the diagonal through $1$ and $3$. Now the
other order, $sr$: $1\to4\to3$, $3\to2\to1$, $2\to1\to2$, $4\to3\to4$. This swaps $1$ and $3$ and fixes $2$ and $4$: the
flip in the *other* diagonal. So

$$rs\ne sr.$$

**The order matters.** This is the first thing to absorb about symmetries: unlike adding numbers, combining them is
usually not commutative. Try it with a book: turn it a quarter turn flat on the table and then flip it top over
bottom, and compare with doing the same two moves in the other order.

All eight symmetries can be written as $e,r,r^2,r^3,s,rs,r^2s,r^3s$, and every product of two of them is again one of
the eight. Some facts you can check by following corners:

$$r^4=e,\qquad s^2=e,\qquad sr=r^3s.$$

The last one lets you move every $s$ to the right, so any product can be simplified to the form $r^ks$ or $r^k$. We
will see the whole multiplication table in 13.4.

These eight symmetries, with this way of combining them, form a group: the **dihedral group** $D_4$. Before we say
exactly what that means, notice what properties we have been using. Combining two symmetries gives a symmetry. There is
a "do nothing" symmetry. Every symmetry can be undone by another one (a rotation by turning back, a reflection by
flipping again). And when you do three moves in a row, it does not matter how you group them in your head. Those are
the axioms.

## 13.2 The axioms

A **binary operation** on a set $G$ is a rule that takes two elements $a,b$ of $G$, in order, and gives an element of
$G$, written $a*b$ or just $ab$. ("Closure" is built in: the answer must be in $G$.)

**Definition.** A **group** is a set $G$ with a binary operation such that:

1. **Associativity.** $(ab)c=a(bc)$ for all $a,b,c$ in $G$.
2. **Identity.** There is an element $e$ in $G$ with $ea=ae=a$ for every $a$.
3. **Inverses.** For every $a$ in $G$ there is an element $a^{-1}$ in $G$ with $aa^{-1}=a^{-1}a=e$.

If also $ab=ba$ for all $a,b$, the group is **abelian** (after Niels Henrik Abel), or commutative. For abelian groups
the operation is often written $+$, the identity $0$ and the inverse $-a$.

*Why these three?* Each one is what you need to solve equations. To solve $ax=b$, multiply on the left by $a^{-1}$
(rule 3), regroup (rule 1), and simplify (rule 2):

$$x=ex=(a^{-1}a)x=a^{-1}(ax)=a^{-1}b.$$

So in a group, every equation $ax=b$ has exactly one solution. The rules are the minimum that makes this work.

*Why is associativity automatic for symmetries?* Symmetries are functions, and composition of functions is always
associative: $\big((f\circ g)\circ h\big)(x)=f(g(h(x)))=\big(f\circ(g\circ h)\big)(x)$ for every $x$. This is why every
collection of invertible functions closed under composition and inverses is a group.

### First theorems

Everything below follows from the three axioms alone, so it holds in every group at once. That is the economy of
abstraction: prove once, use everywhere.

**Theorem.** In any group:

1. the identity is unique;
2. each element has exactly one inverse;
3. **cancellation**: if $ab=ac$ then $b=c$, and if $ba=ca$ then $b=c$;
4. $(a^{-1})^{-1}=a$;
5. $(ab)^{-1}=b^{-1}a^{-1}$.

*Proofs.*

1. If $e$ and $e'$ are both identities, then $e=ee'$ (as $e'$ is an identity) and $ee'=e'$ (as $e$ is one), so $e=e'$.
2. If $b$ and $c$ are both inverses of $a$, then $b=be=b(ac)=(ba)c=ec=c$.
3. Multiply $ab=ac$ on the left by $a^{-1}$ and use associativity: $b=a^{-1}ab=a^{-1}ac=c$. The other side is the same
   on the right.
4. $a^{-1}a=aa^{-1}=e$ says that $a$ is an inverse of $a^{-1}$; by 2 it is the inverse.
5. $(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=aa^{-1}=e$, and similarly in the other order. By 2, $b^{-1}a^{-1}$ is the
   inverse of $ab$. $\square$

Rule 5 is sometimes called the **socks and shoes rule**: you put on socks, then shoes; to undo, you take off the shoes
first. The inverse of a sequence of moves is the reversed sequence of reversed moves. Every Rubik's cube solver uses
it.

**Powers.** For $n\ge1$ write $a^n=aa\cdots a$ ($n$ factors), $a^0=e$, and $a^{-n}=(a^{-1})^n$. Associativity makes
these well defined, and the usual laws hold: $a^ma^n=a^{m+n}$ and $(a^m)^n=a^{mn}$ for all integers $m,n$. But
$(ab)^n=a^nb^n$ only if $a$ and $b$ commute: in $D_4$, $(rs)^2=e$ while $r^2s^2=r^2\ne e$.

### Things that are not groups

- The integers under subtraction: $(5-3)-1=1$ but $5-(3-1)=3$. Not associative.
- The natural numbers $0,1,2,\dots$ under addition: no inverse for $1$, since $1+x=0$ has no natural solution.
- The integers under multiplication: identity $1$, but $2$ has no inverse ($\frac12$ is not an integer).
- The rationals under multiplication: $0$ has no inverse. Remove it, and the nonzero rationals *are* a group.
- $\{1,2,3,4,5\}$ under multiplication mod $6$: $2\cdot3=6\equiv0$, which is not in the set. No closure.

## 13.3 Examples everywhere

**Numbers under addition.** $(\mathbb{Z},+)$, $(\mathbb{Q},+)$, $(\mathbb{R},+)$, $(\mathbb{C},+)$ are abelian groups,
with identity $0$ and inverse $-a$.

**Numbers under multiplication.** The nonzero rationals, reals or complex numbers, $\mathbb{Q}^\times$, $\mathbb{R}^\times$,
$\mathbb{C}^\times$, are abelian groups with identity $1$. So are the positive reals, $\{1,-1\}$, and the **unit circle**
$\{z\in\mathbb{C}:|z|=1\}$ (since $|zw|=|z||w|$ and $|1/z|=1/|z|$). The $n$-th roots of unity form a group of $n$
elements inside it ([Chapter 9](09-Complex-Numbers.md)).

**Integers mod $n$.** $\mathbb{Z}/n=\{0,1,\dots,n-1\}$ with addition mod $n$ is an abelian group with $n$ elements.
Identity $0$; the inverse of $a$ is $n-a$ (and $0$ for $0$). This is clock arithmetic: on a 12-hour clock, $9+5=2$.

**Units mod $n$.** Multiplication mod $n$ does not make $\{0,\dots,n-1\}$ a group ($0$ has no inverse, and neither does
$2$ mod $6$). Keep only the numbers that have inverses:

$$U(n)=\{a:1\le a\le n,\ \gcd(a,n)=1\}.$$

**Theorem.** $U(n)$ is an abelian group under multiplication mod $n$, with $\varphi(n)$ elements, where $\varphi$ is
Euler's function counting the numbers from $1$ to $n$ coprime to $n$.

*Proof.* *Closure:* if $a$ and $b$ share no prime factor with $n$, neither does $ab$, and reducing mod $n$ does not
change $\gcd(ab,n)$. *Associativity* and *commutativity* come from ordinary multiplication. *Identity:* $1$. *Inverses:*
if $\gcd(a,n)=1$, Bézout's identity gives integers $x,y$ with $ax+ny=1$, so $ax\equiv1\pmod n$, and $x$ mod $n$ is
coprime to $n$ (a common factor would divide $ax+ny=1$). $\square$

Examples: $U(8)=\{1,3,5,7\}$, where $3\cdot5=15\equiv7$ and $3\cdot3=9\equiv1$. $U(7)=\{1,2,3,4,5,6\}$; for a prime
$p$, $U(p)$ is everything except $0$. $U(15)=\{1,2,4,7,8,11,13,14\}$ has $\varphi(15)=8$ elements. The groups $U(n)$
are the setting of RSA and Diffie-Hellman; the cryptography site builds both from them in
[its chapter on the arithmetic of secrets](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/).

**Permutations.** A **permutation** of a set $X$ is a one-to-one, onto function $X\to X$: a rearrangement. The
permutations of $\{1,2,\dots,n\}$, combined by composition, form the **symmetric group** $S_n$, with $n!$ elements (the
image of $1$ can be chosen in $n$ ways, then of $2$ in $n-1$ ways, and so on). For $n\ge3$ it is not abelian. Section
13.6 is about it.

**Matrices.** The invertible $2\times2$ real matrices form a group $GL_2(\mathbb{R})$ ("general linear group") under
matrix multiplication: the product of invertible matrices is invertible because $\det(AB)=\det A\det B\ne0$, the
identity is $I$, and inverses exist because the determinant is not $0$. It is not abelian:

$$\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}1&0\\1&1\end{pmatrix}=\begin{pmatrix}2&1\\1&1\end{pmatrix},\qquad
\begin{pmatrix}1&0\\1&1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}=\begin{pmatrix}1&1\\1&2\end{pmatrix}.$$

The same works for $n\times n$ matrices and for entries in any field; the linear algebra book develops it.

**Rotations.** The rotations of the plane about the origin form an abelian group: rotating by $\alpha$ then by $\beta$
is rotating by $\alpha+\beta$. In complex numbers, rotation by $\theta$ is multiplication by $\cos\theta+i\sin\theta$, so
this is the unit circle group again. The rotations of *space* about the origin form the group $SO(3)$, which is not
abelian, as the book experiment in 13.1 shows. This is not an abstraction for engineers: the orientation of a
spacecraft, such as a Mars orbiter turning to point its antenna at Earth, is an element of $SO(3)$, and its flight
software composes rotations in this group (often written as unit quaternions; see
[Quaternions](../../topics/numbers/level-8/06-quaternions.md)), always minding the order.

**Symmetry groups.** For any shape, its symmetries (distance-preserving maps of space that carry the shape onto itself)
form a group. The square gives $D_4$ with $8$ elements; a regular $n$-gon gives $D_n$ with $2n$; the rotations of a
cube form a group of $24$; a sphere has infinitely many. Crystallographers classify crystals by their symmetry groups:
there are exactly $230$ space groups in three dimensions, a classification finished independently by Fedorov and
Schoenflies around 1891.

## 13.4 Group tables and order

For a small finite group you can write out every product in a **Cayley table**: the entry in row $a$, column $b$ is
$ab$. Here are two groups with four elements.

$\mathbb{Z}/4$ under addition:

| $+$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| **0** | 0 | 1 | 2 | 3 |
| **1** | 1 | 2 | 3 | 0 |
| **2** | 2 | 3 | 0 | 1 |
| **3** | 3 | 0 | 1 | 2 |

$U(8)$ under multiplication mod 8:

| $\times$ | 1 | 3 | 5 | 7 |
|---|---|---|---|---|
| **1** | 1 | 3 | 5 | 7 |
| **3** | 3 | 1 | 7 | 5 |
| **5** | 5 | 7 | 1 | 3 |
| **7** | 7 | 5 | 3 | 1 |

They are genuinely different. In $U(8)$ every element times itself is $1$ (look at the diagonal). In $\mathbb{Z}/4$,
$1+1=2\ne0$: the element $1$ needs four steps to get back to $0$. No renaming of elements can turn one table into the
other.

**Theorem (Latin square property).** In the Cayley table of a group, every element appears exactly once in each row and
exactly once in each column.

*Proof.* Row $a$ lists $ax$ as $x$ runs through $G$. If two entries were equal, $ax=ay$, cancellation gives $x=y$: so
the entries of a row are all different. And every $b$ appears, at $x=a^{-1}b$. Columns are the same on the other side.
$\square$

So a group table is a Latin square, like a completed Sudoku without the boxes. (The converse fails: not every Latin
square is a group table, because associativity is an extra condition.)

Here is the table of $D_4$, in our convention: row $a$, column $b$ gives $ab$, meaning first $b$, then $a$.

| | $e$ | $r$ | $r^2$ | $r^3$ | $s$ | $rs$ | $r^2s$ | $r^3s$ |
|---|---|---|---|---|---|---|---|---|
| $e$ | $e$ | $r$ | $r^2$ | $r^3$ | $s$ | $rs$ | $r^2s$ | $r^3s$ |
| $r$ | $r$ | $r^2$ | $r^3$ | $e$ | $rs$ | $r^2s$ | $r^3s$ | $s$ |
| $r^2$ | $r^2$ | $r^3$ | $e$ | $r$ | $r^2s$ | $r^3s$ | $s$ | $rs$ |
| $r^3$ | $r^3$ | $e$ | $r$ | $r^2$ | $r^3s$ | $s$ | $rs$ | $r^2s$ |
| $s$ | $s$ | $r^3s$ | $r^2s$ | $rs$ | $e$ | $r^3$ | $r^2$ | $r$ |
| $rs$ | $rs$ | $s$ | $r^3s$ | $r^2s$ | $r$ | $e$ | $r^3$ | $r^2$ |
| $r^2s$ | $r^2s$ | $rs$ | $s$ | $r^3s$ | $r^2$ | $r$ | $e$ | $r^3$ |
| $r^3s$ | $r^3s$ | $r^2s$ | $rs$ | $s$ | $r^3$ | $r^2$ | $r$ | $e$ |

The table is not symmetric across its diagonal, which is what non-abelian looks like: row $s$, column $r$ gives
$sr=r^3s$, while row $r$, column $s$ gives $rs$.

### Order

The **order** of a group, written $|G|$, is its number of elements: $|D_4|=8$, $|S_n|=n!$, $|U(n)|=\varphi(n)$,
$|\mathbb{Z}|=\infty$.

The **order of an element** $g$ is the smallest $k\ge1$ with $g^k=e$, if there is one; otherwise $g$ has infinite order.
In additive notation, it is the smallest $k\ge1$ with $kg=0$.

**Examples.**

- In $D_4$: $r$ has order $4$, $r^2$ has order $2$, and each of the four reflections has order $2$.
- In $\mathbb{Z}/4$: $1$ and $3$ have order $4$, $2$ has order $2$, $0$ has order $1$.
- In $U(8)$: $3$, $5$, $7$ all have order $2$.
- In $U(15)$: $1$ has order 1; $4,11,14$ have order $2$; $2,7,8,13$ have order $4$. (Check: $2,4,8,16\equiv1$.)
- In $\mathbb{Z}$, $1$ has infinite order. In $GL_2(\mathbb{R})$, $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ has infinite order:
  its $n$-th power is $\begin{pmatrix}1&n\\0&1\end{pmatrix}$, never $I$ for $n\ge1$.

**Theorem.** In a finite group every element has finite order.

*Proof.* The powers $g,g^2,g^3,\dots$ cannot all be different, since $G$ is finite (pigeonhole principle). So $g^i=g^j$
for some $i<j$, and multiplying by $g^{-i}$ gives $g^{j-i}=e$ with $j-i\ge1$. $\square$

**Theorem.** If $g$ has order $k$, then $g^m=e$ exactly when $k$ divides $m$.

*Proof.* Divide: $m=qk+t$ with $0\le t<k$. Then $g^m=(g^k)^qg^t=g^t$. So $g^m=e$ iff $g^t=e$, and since $k$ is the
*smallest* positive exponent giving $e$ and $t<k$, this happens iff $t=0$. $\square$

## 13.5 Cyclic groups

*Level: advanced.*

Some groups are entirely made of the powers of one element. In $\mathbb{Z}/12$, every element is a multiple of $1$; in
$U(7)$, the powers of $3$ are

$$3^1=3,\ 3^2=2,\ 3^3=6,\ 3^4=4,\ 3^5=5,\ 3^6=1,$$

all six elements. The rotations of a square are $e,r,r^2,r^3$.

**Definition.** For an element $g$ of a group $G$, the set of all its powers

$$\langle g\rangle=\{g^k:k\in\mathbb{Z}\}=\{\dots,g^{-2},g^{-1},e,g,g^2,\dots\}$$

is the **cyclic subgroup generated by $g$**. (It is a group itself, with the same operation: products and inverses of
powers are powers. A subset of a group that is a group with the same operation is a **subgroup**; [Chapter 14](14-Subgroups-Cosets-and-Lagrange.md)
studies them.) $G$ is **cyclic** if $G=\langle g\rangle$ for some $g$, called a **generator**.

**Examples.** $\mathbb{Z}=\langle1\rangle=\langle-1\rangle$. $\mathbb{Z}/n=\langle1\rangle$. $U(7)=\langle3\rangle$.
The $n$-th roots of unity are $\langle e^{2\pi i/n}\rangle$. $U(5)=\langle2\rangle$, since $2,4,3,1$ are the powers of
$2$ mod $5$. $U(8)$ is *not* cyclic: each element has order at most $2$, so each generates at most $2$ elements.
$D_4$ is not cyclic, since it is not abelian:

**Theorem.** Every cyclic group is abelian.

*Proof.* $g^ag^b=g^{a+b}=g^{b+a}=g^bg^a$. $\square$

**Theorem.** Let $g$ have order $n$. Then $g^a=g^b$ exactly when $a\equiv b\pmod n$. So $\langle g\rangle$ has exactly
$n$ elements, $e,g,\dots,g^{n-1}$, and $|\langle g\rangle|$ equals the order of $g$. If $g$ has infinite order, all its
powers are different.

*Proof.* $g^a=g^b$ iff $g^{a-b}=e$ iff $n\mid a-b$, by the last theorem of 13.4. If $g$ has infinite order and
$g^a=g^b$ with $a>b$, then $g^{a-b}=e$, contradicting infinite order. $\square$

### All cyclic groups, up to renaming

Two groups are **isomorphic**, written $G\cong H$, if there is a one-to-one correspondence $\phi:G\to H$ that respects
the operation: $\phi(ab)=\phi(a)\phi(b)$. Isomorphic groups have the same table up to renaming the elements; as groups,
they are the same. ([Chapter 15](15-Homomorphisms-and-Quotients.md) studies such maps properly.)

**Theorem (classification of cyclic groups).** A cyclic group is isomorphic to $\mathbb{Z}$ if it is infinite, and to
$\mathbb{Z}/n$ if it has $n$ elements.

*Proof.* Let $G=\langle g\rangle$. If $g$ has order $n$, define $\phi:\mathbb{Z}/n\to G$ by $\phi(k)=g^k$. By the
previous theorem this is well defined (changing $k$ by a multiple of $n$ does not change $g^k$) and one-to-one, and
it is onto because $G$ consists of the powers of $g$. It respects the operation: $\phi(a+b)=g^{a+b}=g^ag^b=\phi(a)\phi(b)$.
The infinite case is the same with $\mathbb{Z}$. $\square$

So $U(7)$, the sixth roots of unity, the rotations of a regular hexagon and $\mathbb{Z}/6$ are four costumes on one
group. That is the point of the abstraction: one theory, many disguises.

### Orders and generators

**Theorem.** If $g$ has order $n$, then $g^k$ has order $\dfrac{n}{\gcd(n,k)}$.

*Proof.* Let $d=\gcd(n,k)$. Then $(g^k)^m=e$ iff $n\mid km$ iff $\frac nd\mid\frac kd\,m$. Since $\frac nd$ and
$\frac kd$ share no common factor, this holds iff $\frac nd\mid m$. The smallest such positive $m$ is $\frac nd$.
$\square$

**Corollary.** The generators of $\mathbb{Z}/n$ are the $k$ with $\gcd(k,n)=1$; there are $\varphi(n)$ of them. A
cyclic group of order $n$ has exactly $\varphi(n)$ generators.

**Example.** In $\mathbb{Z}/12$, the orders of $0,1,\dots,11$ are

$$1,\ 12,\ 6,\ 4,\ 3,\ 12,\ 2,\ 12,\ 3,\ 4,\ 6,\ 12.$$

The generators are $1,5,7,11$, and $\varphi(12)=4$. On a 12-hour clock, stepping by $5$ hours visits every hour before
returning; stepping by $8$ visits only $0,8,4$.

### Subgroups of cyclic groups

**Theorem.** Every subgroup of a cyclic group is cyclic. If $|\langle g\rangle|=n$, then for each divisor $d$ of $n$
there is exactly one subgroup of order $d$, namely $\langle g^{n/d}\rangle$, and there are no others.

*Proof.* Let $H$ be a subgroup of $\langle g\rangle$. If $H=\{e\}$, it is $\langle e\rangle$. Otherwise $H$ contains some
$g^a$ with $a\ne0$, and then also $g^{-a}$, so it contains a positive power of $g$. Let $m$ be the smallest positive
integer with $g^m\in H$. For any $g^a\in H$, divide: $a=qm+t$ with $0\le t<m$. Then
$g^t=g^a(g^m)^{-q}\in H$, so by the choice of $m$, $t=0$. So every element of $H$ is a power of $g^m$: $H=\langle g^m\rangle$.

For the finite case, $g^n=e\in H$, so by the same division $m\mid n$, and $H=\langle g^m\rangle$ has order
$\frac nm$ (by the order formula, since $\gcd(n,m)=m$). So a subgroup of order $d$ must be $\langle g^{n/d}\rangle$:
exactly one for each divisor. $\square$

**Example.** The subgroups of $\mathbb{Z}/12$ are $\langle0\rangle$, $\langle6\rangle=\{0,6\}$, $\langle4\rangle=\{0,4,8\}$,
$\langle3\rangle=\{0,3,6,9\}$, $\langle2\rangle$ (the six even numbers) and $\langle1\rangle$, one for each divisor
$1,2,3,4,6,12$ of $12$.

**Which $U(n)$ are cyclic?** Gauss proved in his *Disquisitiones Arithmeticae* (1801) that $U(n)$ is cyclic exactly when
$n$ is $1$, $2$, $4$, $p^k$ or $2p^k$ for an odd prime $p$. A generator of $U(n)$ is called a **primitive root** mod
$n$; $3$ is one mod $7$, and $2$ is one mod $9$ (powers $2,4,8,7,5,1$). For a prime $p$, $U(p)$ is cyclic of order
$p-1$, and the Diffie-Hellman key exchange is built on exactly that cyclic group. The proof needs the fact that a
polynomial of degree $d$ has at most $d$ roots mod $p$ ([Chapter 10](10-Roots-and-Coefficients.md)); it is done in
[Chapter 19](19-Fields-and-Extensions.md), for every finite field.

## 13.6 Dihedral and symmetric groups

*Level: advanced.*

### Dihedral groups

The symmetries of a regular $n$-gon ($n\ge3$) form the **dihedral group** $D_n$ (some books write $D_{2n}$, counting
elements instead of sides; always check). As for the square, vertex $1$ can go to any of $n$ positions and then its
neighbour to one of $2$, so $|D_n|=2n$: $n$ rotations $e,r,\dots,r^{n-1}$ by multiples of $\frac{360^\circ}{n}$, and $n$
reflections $s,rs,\dots,r^{n-1}s$. They obey

$$r^n=e,\qquad s^2=e,\qquad srs=r^{-1}.$$

The last relation says that reflecting, rotating and reflecting back gives the rotation in the opposite direction:
seen in a mirror, a clockwise turn looks anticlockwise. From it, $sr^k=r^{-k}s$ for every $k$, and the whole
multiplication follows:

$$r^ar^b=r^{a+b},\qquad r^a(r^bs)=r^{a+b}s,\qquad (r^as)r^b=r^{a-b}s,\qquad (r^as)(r^bs)=r^{a-b}.$$

(Exponents mod $n$.) Every reflection has order $2$, and $D_n$ is not abelian for $n\ge3$ since $sr=r^{-1}s\ne rs$
($r^{-1}\ne r$ when $n\ge3$).

$D_3$, the symmetries of an equilateral triangle, has $6$ elements, and every arrangement of the three corners is
achieved by exactly one symmetry. So $D_3$ is "the same as" $S_3$, all permutations of three things. For $n\ge4$,
$D_n$ is much smaller than $S_n$: a square has $8$ symmetries but its corners can be shuffled in $24$ ways, most of
which tear the square.

### Cycle notation

Write a permutation of $\{1,\dots,n\}$ in **two-line notation**, the inputs above the outputs:

$$\sigma=\begin{pmatrix}1&2&3&4&5&6\\3&5&1&6&2&4\end{pmatrix}.$$

Follow where $1$ goes: $1\to3\to1$. Then start again at the smallest number not yet used: $2\to5\to2$. Then
$4\to6\to4$. Record each loop as a **cycle**:

$$\sigma=(1\,3)(2\,5)(4\,6).$$

A cycle $(a_1\,a_2\,\dots\,a_k)$ sends $a_1\to a_2\to\cdots\to a_k\to a_1$ and fixes everything else; it is a
**$k$-cycle**, and a 2-cycle is a **transposition**. Fixed points are usually left out. The square's quarter turn, in
13.1, is the 4-cycle $r=(1\,4\,3\,2)$, and the flip is $s=(1\,2)(3\,4)$.

**Products.** Composition is right to left, as for symmetries. To compute $(1\,2\,3)(2\,3\,4)$, follow each number
through the right-hand cycle first:

- $1$: the right cycle fixes $1$; the left sends $1\to2$. So $1\to2$.
- $2$: right sends $2\to3$; left sends $3\to1$. So $2\to1$.
- $3$: right sends $3\to4$; left fixes $4$. So $3\to4$.
- $4$: right sends $4\to2$; left sends $2\to3$. So $4\to3$.

So $(1\,2\,3)(2\,3\,4)=(1\,2)(3\,4)$. In the other order, $(2\,3\,4)(1\,2\,3)=(1\,3)(2\,4)$. Different, so $S_4$ is not
abelian.

**Theorem (cycle decomposition).** Every permutation of a finite set is a product of disjoint cycles (cycles with no
number in common), and this decomposition is unique apart from the order of the cycles and from which element each
cycle is written starting with.

*Proof.* Start at any $x$ and apply $\sigma$ repeatedly: $x,\sigma(x),\sigma^2(x),\dots$. Because the set is finite, some
value repeats, and the first repeat must be $x$ itself (if $\sigma^i(x)=\sigma^j(x)$ with $0<i<j$ were the first repeat,
then applying $\sigma^{-1}$ gives an earlier one). So $x$ lies on a cycle. Different starting points either give the
same cycle or disjoint ones, since each number has only one image and one preimage. The cycles are forced by $\sigma$,
which gives uniqueness. $\square$

Disjoint cycles **commute**, since they move different numbers. That makes powers easy: the $m$-th power of a product of
disjoint cycles is the product of their $m$-th powers.

**Theorem.** The order of a permutation is the least common multiple of the lengths of its disjoint cycles.

*Proof.* A $k$-cycle has order $k$. If $\sigma=c_1c_2\cdots c_t$ with disjoint cycles of lengths $k_1,\dots,k_t$, then
$\sigma^m=c_1^m\cdots c_t^m$, and this is $e$ iff each $c_i^m=e$ (they move different numbers, so none can undo another),
iff each $k_i\mid m$. The smallest such $m$ is $\mathrm{lcm}(k_1,\dots,k_t)$. $\square$

**Example.** $(1\,2\,3)(4\,5)$ in $S_5$ has order $\mathrm{lcm}(3,2)=6$. The largest order of an element of $S_5$ is $6$; of
$S_7$ it is $12$, from $(1\,2\,3)(4\,5\,6\,7)$; of $S_{10}$ it is $30$, from cycle lengths $2,3,5$.

### Even and odd permutations

Every cycle is a product of transpositions:

$$(a_1\,a_2\,\dots\,a_k)=(a_1\,a_k)(a_1\,a_{k-1})\cdots(a_1\,a_3)(a_1\,a_2),$$

($k-1$ transpositions; check $(1\,2\,3)=(1\,3)(1\,2)$ by following $1\to2$, $2\to1\to3$, $3\to1$). So every permutation is
a product of transpositions. There are many ways to do it, with different numbers of factors. But the **parity** of the
number never changes.

**Theorem.** A permutation cannot be both a product of an even number of transpositions and a product of an odd number.

*Proof.* Take $n$ variables and form

$$\Delta=\prod_{1\le i<j\le n}(x_j-x_i).$$

(Its square is the discriminant of [Chapter 11](11-Cubics-and-Quartics.md).) A permutation $\sigma$ acts on $\Delta$ by
renaming the variables, $x_i\mapsto x_{\sigma(i)}$. The factors of $\sigma(\Delta)$ are again all the differences
$x_j-x_i$, each exactly once, but some appear with the opposite sign. So $\sigma(\Delta)=\pm\Delta$; call the sign
$\mathrm{sgn}(\sigma)$. Acting by $\sigma$ then $\tau$ multiplies the signs, so $\mathrm{sgn}(\tau\sigma)=\mathrm{sgn}(\tau)\,\mathrm{sgn}(\sigma)$.

Now take a transposition $(a\,b)$ with $a<b$, and count the factors of $\Delta$ that change sign. The factor
$x_b-x_a$ becomes $x_a-x_b$: one flip. For each $c$ strictly between $a$ and $b$, the factors $x_c-x_a$ and $x_b-x_c$
become $x_c-x_b$ and $x_a-x_c$: two flips. Every other factor is either untouched or is swapped with another factor
without a sign change. That is $1+2(b-a-1)$ flips, an odd number, so $\mathrm{sgn}((a\,b))=-1$.

Therefore a product of $m$ transpositions has sign $(-1)^m$. If $\sigma$ were a product of both an even and an odd
number, its sign would be both $+1$ and $-1$. $\square$

A permutation is **even** if it is a product of an even number of transpositions, **odd** otherwise. A $k$-cycle has
sign $(-1)^{k-1}$: a 3-cycle is even, a 4-cycle odd. The even permutations of $\{1,\dots,n\}$ form a subgroup, the
**alternating group** $A_n$, with $n!/2$ elements for $n\ge2$ (multiplying by $(1\,2)$ matches even with odd one to
one). These are the permutations that leave $\Delta$ unchanged: the "two-valued expression" of 11.8.

**A famous application.** In the 15 puzzle (fifteen numbered tiles and a gap in a $4\times4$ frame), the position with
$14$ and $15$ swapped and everything else in order cannot be reached from the solved position. In 1879 W. W. Johnson and
W. E. Story proved that exactly half of all arrangements are reachable. The reason is parity: every slide is a
transposition of a tile with the gap, and when the gap returns to its corner it has made an even number of moves, so the
arrangement of the tiles is an even permutation, while swapping $14$ and $15$ alone is odd.

### Every group is a permutation group

**Theorem (Cayley, 1854).** Every group $G$ is isomorphic to a group of permutations of the set $G$.

*Proof sketch.* For each $g$, the map $\lambda_g:x\mapsto gx$ is a permutation of $G$ (by the Latin square property).
And $\lambda_g\lambda_h=\lambda_{gh}$ by associativity, and different $g$ give different maps ($\lambda_g(e)=g$). So
$g\mapsto\lambda_g$ is an isomorphism onto its image. $\square$

So permutation groups are, in principle, all groups. That is why Lagrange's and Galois's study of permutations of roots
grew into the general theory.

## 13.7 The Rubik's cube as a group

*Level: advanced.*

Ernő Rubik built his cube in 1974. Each move turns one face; let $R,L,U,D,F,B$ be the quarter turns of the right,
left, up, down, front and back faces, clockwise as you look at that face. Every sequence of moves rearranges the $48$
coloured stickers that can move (the $6$ centre stickers stay put), so each sequence is a permutation of $48$ stickers,
and the set of all permutations you can reach is a subgroup of $S_{48}$: the **Rubik's cube group**. Inverses are
the socks and shoes rule: to undo $RU$, do $U^{-1}R^{-1}$.

### How many positions?

Take the cube apart into its $8$ corner pieces and $12$ edge pieces and reassemble it any way you like. The corners can
be placed in $8!$ ways and each twisted in $3$ ways; the edges placed in $12!$ ways and each flipped in $2$ ways:

$$8!\cdot3^8\cdot12!\cdot2^{12}=519{,}024{,}039{,}293{,}878{,}272{,}000.$$

But a cube reassembled at random usually cannot be solved by turning faces. Turning faces preserves three quantities.

1. **Parity.** A quarter turn moves four corners in a 4-cycle and four edges in a 4-cycle. A 4-cycle is odd (13.6). So
   each quarter turn changes the parity of the corner permutation *and* of the edge permutation. Starting from solved
   (both even), the two parities are always equal. This halves the count.
2. **Corner twist.** Give each corner a twist number $0,1,2$ according to which of its stickers faces up or down. With
   a suitable convention, every face turn changes the sum of the twists by a multiple of $3$. So the total twist is
   always $0$ mod $3$, and the twist of the last corner is determined by the other seven. This divides the count by $3$.
3. **Edge flip.** Similarly each edge has a flip number $0,1$, and every face turn changes the total by an even amount.
   The flip of the last edge is determined. This divides by $2$.

So at most a twelfth of the assembled positions are reachable. The converse is also true: every position satisfying
the three conditions can be reached, which is shown by building explicit move sequences (commutators $ABA^{-1}B^{-1}$
that twist two corners, flip two edges or cycle three pieces, while leaving the rest alone). We prove only the parity
condition fully here; conditions 2 and 3 need a careful definition of twist and flip, done in the books by Joyner and
by Bandelow listed below. The result:

$$|G|=\frac{8!\cdot3^8\cdot12!\cdot2^{12}}{12}=43{,}252{,}003{,}274{,}489{,}856{,}000=2^{27}\cdot3^{14}\cdot5^3\cdot7^2\cdot11,$$

about $4.3\times10^{19}$ positions.

### Orders of moves

Every element of a finite group has finite order (13.4), so repeating any move sequence long enough brings the cube
back to solved. How long?

- A single face turn $R$ has order $4$.
- The commutator $RUR^{-1}U^{-1}$ has order $6$.
- The sequence $RU$ has order $105$. On the pieces it moves five corners in a 5-cycle, but they come back twisted, so
  their stickers need $15$ repetitions to return; one more corner stays in place and only twists (order $3$); and seven
  edges go round a 7-cycle. The order is $\mathrm{lcm}(15,3,7)=105$.
- The largest order of any element is $1260$, attained for example by $RU^2D^{-1}BD^{-1}$.

These numbers are easy to check by computer: represent a move as a permutation of the $54$ stickers and use the lcm of
cycle lengths from 13.6.

```python
import itertools
from math import gcd

# A sticker is (position of its piece, outward direction), both vectors in {-1,0,1}^3.
stickers = [(p, tuple(p[a] if b == a else 0 for b in range(3)))
            for p in itertools.product((-1, 0, 1), repeat=3) for a in range(3) if p[a]]
index = {s: i for i, s in enumerate(stickers)}

def quarter(v, axis):                       # clockwise quarter turn seen from the + side of the axis
    x, y, z = v
    return {0: (x, z, -y), 1: (-z, y, x), 2: (y, -x, z)}[axis]

def move(axis, side):                       # side = +1 or -1 picks the face
    perm = list(range(len(stickers)))
    for i, (p, n) in enumerate(stickers):
        if p[axis] == side:
            f = (lambda v: quarter(v, axis)) if side == 1 else \
                (lambda v: quarter(quarter(quarter(v, axis), axis), axis))
            perm[i] = index[(f(p), f(n))]
    return perm

def then(*perms):                           # apply the perms left to right
    out = list(range(len(stickers)))
    for p in perms:
        out = [p[i] for i in out]
    return out

def order(p):
    seen, result = set(), 1
    for i in range(len(p)):
        length, j = 0, i
        while j not in seen:
            seen.add(j); j = p[j]; length += 1
        if length:
            result = result * length // gcd(result, length)
    return result

R, U = move(0, 1), move(1, 1)
print(order(R), order(then(R, U)))          # 4 105
```

### God's number

What is the fewest moves that always suffice to solve the cube from any position? In graph terms, it is the diameter
of the group's Cayley graph with the face turns as steps. In 2010 Tomas Rokicki, Herbert Kociemba, Morley Davidson and
John Dethridge proved, using a large computation with time donated by Google, that the answer is **20** if a half turn
such as $U^2$ counts as one move. In 2014 Rokicki and Davidson showed it is **26** if only quarter turns count. Both
results needed group theory to cut the problem down: the positions were split into about $2.2$ billion cosets of a
subgroup (the topic of [Chapter 14](14-Subgroups-Cosets-and-Lagrange.md)), each of nearly $2\times10^{10}$ positions,
and symmetry reduced the number of cosets that had to be solved to about $56$ million.

### A short history of the group idea

The word and the concept came from the theory of equations. Lagrange (1770-71) studied how expressions in the roots
change under permutations (11.8). Ruffini and then Cauchy developed the calculus of permutations; Cauchy's papers of
1815 and 1844-46 set out products, cycles and orders. Galois, around 1830-32, used the word *groupe* for a set of
permutations closed under composition and made it the key to solvability; his work was published by Liouville in 1846.
Arthur Cayley in 1854 gave the first definition of an abstract group, by its multiplication table. Camille Jordan's
*Traité des substitutions* (1870) made permutation groups a subject. Felix Klein's Erlangen programme (1872) proposed to
study each geometry through its group of symmetries, and Sophus Lie began the theory of continuous groups. The short
list of axioms used today was settled around the end of the nineteenth century.

## Check yourself

??? question "1. Which of these are groups? (a) the integers under subtraction; (b) $\{1,-1,i,-i\}$ under multiplication; (c) $\{1,2,3,4,5\}$ under multiplication mod 6; (d) the even integers under addition; (e) the odd integers under addition."

    (a) No: subtraction is not associative. (b) Yes: the fourth roots of unity, cyclic of order 4 generated by $i$.
    (c) No: $2\cdot3\equiv0$ is not in the set. (d) Yes: closed, identity $0$, inverse $-a$ is even. (e) No: $1+1=2$ is not
    odd (and $0$ is missing).

??? question "2. Write the table of $U(10)$ and decide whether it is cyclic."

    $U(10)=\{1,3,7,9\}$. Powers of $3$: $3,9,27\equiv7,21\equiv1$. All four elements, so $U(10)=\langle3\rangle$ is cyclic
    and isomorphic to $\mathbb{Z}/4$ (match $3^k$ with $k$). Table rows: $1:1,3,7,9$; $3:3,9,1,7$; $7:7,1,9,3$; $9:9,7,3,1$.

??? question "3. Find the order of every element of $U(15)$. Is $U(15)$ cyclic?"

    $1$: order 1. $4,11,14$: order 2 ($16,121,196$ are all $\equiv1$). $2,7,8,13$: order 4 (e.g. $2,4,8,1$; $7,4,13,1$).
    No element has order 8, so $U(15)$, with 8 elements, is not cyclic. (Consistent with Gauss's theorem: $15$ is not
    $1,2,4,p^k$ or $2p^k$.)

??? question "4. List the generators of $\mathbb{Z}/12$. What is the order of $8$? Of $9$?"

    Generators: $k$ with $\gcd(k,12)=1$: $1,5,7,11$. The order of $8$ is $12/\gcd(12,8)=3$ ($8,16\equiv4,12\equiv0$); of $9$,
    $12/3=4$ ($9,6,3,0$).

??? question "5. In $S_5$ compute $(1\,3\,5)(1\,2)$ and $(1\,2)(1\,3\,5)$, and give the order of each."

    $(1\,3\,5)(1\,2)$: $1\to2$, $2\to1\to3$, $3\to5$, $5\to1$, so $(1\,2\,3\,5)$. $(1\,2)(1\,3\,5)$: $1\to3$, $3\to5$,
    $5\to1\to2$, $2\to1$, so $(1\,3\,5\,2)$. Both are 4-cycles, of order 4, but they are different.

??? question "6. Write $(1\,2\,3\,4\,5\,6)$ as a product of transpositions. Is it even or odd? What is its sign?"

    $(1\,6)(1\,5)(1\,4)(1\,3)(1\,2)$: five transpositions, so it is odd, sign $-1$. In general a $k$-cycle has sign $(-1)^{k-1}$.

??? question "7. In $D_4$, verify that $srs=r^{-1}$ by following corners, and list the elements of order 2."

    $srs$ (right to left: $s$, then $r$, then $s$): $1\to2\to1\to2$, $2\to1\to4\to3$, $3\to4\to3\to4$, $4\to3\to2\to1$.
    So $srs=(1\,2\,3\,4)=r^3=r^{-1}$. Elements of order 2: $r^2$, $s$, $rs$, $r^2s$, $r^3s$, five of them.

??? question "8. Prove that if $g^2=e$ for every element $g$ of a group, then the group is abelian."

    Every element is its own inverse. So for any $a,b$: $ab=(ab)^{-1}=b^{-1}a^{-1}=ba$. ($U(8)$ is an example.)

??? question "9. Prove that a group of even order contains an element of order 2."

    Pair each element $g$ with $g^{-1}$. Elements with $g\ne g^{-1}$ come in pairs, so there is an even number of them.
    The rest satisfy $g=g^{-1}$, i.e. $g^2=e$; since the total is even, their number is even too. It includes $e$, so it
    is at least $2$: some $g\ne e$ has $g^2=e$, which means order 2.

??? question "10. What is the largest order of an element of $S_7$? Give an example."

    The order is the lcm of the cycle lengths, which add up to at most 7. Options: $7\to7$, $6+1\to6$, $5+2\to10$,
    $4+3\to12$, $3+2+2\to6$, $4+2+1\to4$, $3+3+1\to3$, and so on. The maximum is $12$, from $(1\,2\,3)(4\,5\,6\,7)$.

??? question "11. Show that $U(9)$ is cyclic but $U(8)$ is not."

    $U(9)=\{1,2,4,5,7,8\}$, and the powers of $2$ mod 9 are $2,4,8,7,5,1$: all six, so $U(9)=\langle2\rangle$. In $U(8)$ every
    element squares to $1$, so no element has order 4.

??? question "12. A friend takes a solved Rubik's cube apart and puts it back together with two edge pieces swapped, everything else correct. Can the cube be solved by turning faces?"

    No. In that position the corner permutation is even (the identity) and the edge permutation is odd (one transposition).
    Every reachable position has equal parities, since each quarter turn changes both. So the position is not in the cube
    group, and no sequence of turns solves it. (It needs one more piece swap, or any odd change on the corners, to become
    solvable.)

## What you learned

- A group is a set with an associative operation, an identity and inverses; these are exactly what you need to solve
  $ax=b$ uniquely.
- From the axioms: unique identity and inverses, cancellation, and $(ab)^{-1}=b^{-1}a^{-1}$.
- Examples: $\mathbb{Z}$, $\mathbb{Z}/n$, $U(n)$, $S_n$, $GL_n$, rotation groups, symmetry groups; many are not abelian.
- Every row and column of a group table contains each element once. In a finite group every element has finite order,
  and $g^m=e$ iff the order divides $m$.
- Cyclic groups are $\mathbb{Z}$ or $\mathbb{Z}/n$ in disguise; $g^k$ has order $n/\gcd(n,k)$; their subgroups are cyclic,
  one for each divisor.
- Permutations split into disjoint cycles; the order is the lcm of the lengths; each permutation is even or odd, never
  both.
- The Rubik's cube group has $43{,}252{,}003{,}274{,}489{,}856{,}000$ elements, a twelfth of the assembled positions,
  because of parity, twist and flip.

**Next:** [Chapter 14](14-Subgroups-Cosets-and-Lagrange.md), subgroups and cosets, and Lagrange's theorem: the order of
a subgroup always divides the order of the group.

## Further reading

- M. A. Armstrong, *Groups and Symmetry*, Springer, 1988. Groups through symmetry, at the level of this chapter and the
  next few.
- J. A. Gallian, *Contemporary Abstract Algebra*, first published 1986 (many later editions). Many examples and
  exercises on $U(n)$, cyclic and dihedral groups.
- C. C. Pinter, *A Book of Abstract Algebra*, McGraw-Hill, 1982 (Dover reprint 2010). Gentle and clear.
- D. S. Dummit and R. M. Foote, *Abstract Algebra*, Prentice Hall, 1991 (3rd ed. Wiley, 2004). The standard graduate
  reference for Chapters 13 to 21.
- D. Joyner, *Adventures in Group Theory: Rubik's Cube, Merlin's Machine, and Other Mathematical Toys*, Johns Hopkins,
  2002. The cube group in full, including the twist and flip invariants.
- C. Bandelow, *Inside Rubik's Cube and Beyond*, Birkhäuser, 1982.
- T. Rokicki, H. Kociemba, M. Davidson and J. Dethridge, "The Diameter of the Rubik's Cube Group Is Twenty", *SIAM
  Journal on Discrete Mathematics* 27(2), 2013.
- On this site: [Clocks of any size](../../topics/number-theory/level-5/02-clocks-any-size.md),
  [Rotational symmetry](../../topics/geometry/level-4/06-rotational-symmetry.md),
  [Counting with symmetry, properly](../../topics/counting/level-8/06-burnside-lemma.md) and
  [Roots of unity](../../topics/numbers/level-8/03-roots-of-unity.md) on the Topics shelf; the
  [Algebra book index](index.md).
- Cyclic groups at work in cryptography: [cryptography.akadian.ca, The arithmetic of secrets](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/)
  and [Diffie-Hellman](https://cryptography.akadian.ca/book/12-Diffie-Hellman/).
