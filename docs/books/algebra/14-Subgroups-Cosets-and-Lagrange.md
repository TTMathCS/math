# 14. Subgroups, cosets and Lagrange

*A group can hide smaller groups inside it: the rotations of a square sit inside all its symmetries, the even
numbers sit inside the integers. Which sizes can these smaller groups have? This chapter answers with the first real
theorem of group theory, Lagrange's theorem: the size of a subgroup always divides the size of the group. You will
prove it by cutting the group into equal pieces called cosets, and then use it to get Fermat's little theorem and
Euler's theorem in two lines each, to find the possible orders of elements, to see that the converse is false, and to
list every group with up to eight elements.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a subgroup is, and a quick test for spotting one
    - how a set of elements generates a subgroup, and why every subgroup of a cyclic group is cyclic
    - cosets: how a subgroup cuts a group into equal slices
    - Lagrange's theorem with its proof, and Fermat's and Euler's theorems as corollaries
    - how to find the order of an element, in cyclic groups and in permutation groups
    - why a group of order 12 can have no subgroup of order 6 ($A_4$)
    - every group of order 1 to 8, with proofs for the small cases

    **You need:** [Chapter 13](13-Groups.md) (the group axioms, cyclic, dihedral and symmetric groups, cycle
    notation). [Chapter 8](08-Sequences-Series-and-Induction.md) for proof by induction. Some modular arithmetic
    helps: the gentler versions are [Inverses mod n](../../topics/number-theory/level-6/04-inverses-mod-n.md),
    [Fermat's little theorem](../../topics/number-theory/level-7/01-fermats-little-theorem.md) and
    [Euler's phi function](../../topics/number-theory/level-7/03-euler-phi.md).

    **Levels:** 14.1 to 14.3 are intermediate; 14.4 to 14.6 are advanced; 14.7 is advanced with an expert ending.

## 14.1 Subgroups and the test

Take the eight symmetries of a square from [Chapter 13](13-Groups.md): the identity $e$, the rotations $r$, $r^2$,
$r^3$ by 90, 180 and 270 degrees, and four reflections. Throw away the reflections and keep only the rotations
$\{e, r, r^2, r^3\}$. Something nice happens: two rotations, one after the other, are again a rotation; the inverse of a
rotation is a rotation; the identity is a rotation. The rotations form a group by themselves, living inside the larger
group. That is a subgroup.

**Definition.** Let $G$ be a group. A subset $H \subseteq G$ is a **subgroup** of $G$, written $H \le G$, if $H$ is a
group under the same operation as $G$. Spelled out, this means three things:

1. $H$ contains the identity $e$ of $G$;
2. $H$ is **closed** under the operation: if $a, b \in H$ then $ab \in H$;
3. $H$ is closed under inverses: if $a \in H$ then $a^{-1} \in H$.

Associativity comes free: it holds for all elements of $G$, so in particular for those of $H$. Every group has two
**trivial** subgroups, $\{e\}$ and $G$ itself; any other subgroup is called **proper** and **nontrivial**.

Notice what "the same operation" rules out. The set $\{0, 1, 2, 3\}$ with addition mod 4 is a group, and it is a subset
of the integers, but it is not a subgroup of $(\mathbb{Z}, +)$: in $\mathbb{Z}$, $3 + 3 = 6$, which is not in the set. A
subgroup must use the big group's operation, not a new one.

### Examples and non-examples

- **Even integers.** $2\mathbb{Z} = \{\dots, -4, -2, 0, 2, 4, \dots\}$ is a subgroup of $(\mathbb{Z}, +)$: it contains 0,
  even plus even is even, and the negative of an even number is even. The same goes for $n\mathbb{Z}$, the multiples of
  any fixed $n$.
- **Odd integers.** Not a subgroup of $(\mathbb{Z}, +)$: $1 + 1 = 2$ is even, and 0 is missing anyway.
- **Positive reals.** $(\mathbb{R}_{>0}, \times)$ is a subgroup of the nonzero reals $(\mathbb{R}^{\times}, \times)$. The
  negative reals are not: $(-1)(-1) = 1$.
- **The circle.** The complex numbers of modulus 1, $\{z \in \mathbb{C} : |z| = 1\}$, form a subgroup of
  $(\mathbb{C}^{\times}, \times)$, because $|zw| = |z||w|$ and $|1/z| = 1/|z|$ ([Chapter 9](09-Complex-Numbers.md)).
  Inside it, the $n$th roots of unity $\{z : z^n = 1\}$ form a smaller subgroup with $n$ elements.
- **Determinant one.** Inside $GL_2(\mathbb{R})$, the invertible 2 by 2 real matrices, the matrices with determinant 1
  form a subgroup $SL_2(\mathbb{R})$, because $\det(AB) = \det A \det B$.
- **Even permutations.** Inside the symmetric group $S_n$, the even permutations form the **alternating group** $A_n$:
  even times even is even, the inverse of an even permutation is even, the identity is even.

### The one-step test

Checking three conditions is tedious. They fold into one.

**Theorem (subgroup test).** A subset $H$ of a group $G$ is a subgroup if and only if $H$ is not empty and
$ab^{-1} \in H$ whenever $a, b \in H$.

*Proof.* If $H$ is a subgroup, it contains $e$ (so it is not empty), and for $a, b \in H$ it contains $b^{-1}$ and then
$ab^{-1}$.

Conversely, suppose $H$ is not empty and closed under $(a, b) \mapsto ab^{-1}$. Pick any $a \in H$. Taking $b = a$ gives
$aa^{-1} = e \in H$. Taking the pair $(e, a)$ gives $ea^{-1} = a^{-1} \in H$, so $H$ has inverses. Finally, for
$a, b \in H$ we now know $b^{-1} \in H$, and the pair $(a, b^{-1})$ gives $a(b^{-1})^{-1} = ab \in H$. So $H$ is
closed. $\square$

In an additive group the test reads: $H$ is not empty and $a - b \in H$ whenever $a, b \in H$.

**Worked example.** Show that $H = \{(x, y) \in \mathbb{Z}^2 : 3x + 5y = 0\}$ is a subgroup of $(\mathbb{Z}^2, +)$.

- $(0, 0) \in H$, so $H$ is not empty.
- If $(x, y)$ and $(u, v)$ are in $H$, then $3(x - u) + 5(y - v) = (3x + 5y) - (3u + 5v) = 0 - 0 = 0$, so
  $(x, y) - (u, v) \in H$.

Done. (In fact $H = \{(5t, -3t) : t \in \mathbb{Z}\}$, all multiples of one element.)

### Finite subsets need even less

**Theorem.** If $H$ is a finite, nonempty subset of a group and $H$ is closed under the operation, then $H$ is a
subgroup.

*Proof.* Take $a \in H$. By closure, all the powers $a, a^2, a^3, \dots$ lie in $H$. Since $H$ is finite, two of them
are equal: $a^i = a^j$ with $i < j$. Multiply by $a^{-i}$: $a^{j-i} = e$, with $j - i \ge 1$. So $e = a^{j-i} \in H$,
and $a \cdot a^{j-i-1} = e$ shows $a^{-1} = a^{j-i-1}$, which is $e$ if $j - i = 1$ and a positive power of $a$
otherwise; either way it lies in $H$. $\square$

The finiteness matters: the positive integers $\{1, 2, 3, \dots\}$ are closed under addition but are not a subgroup of
$\mathbb{Z}$, since they have no 0 and no negatives.

**Check:** the subset $\{1, 2, 4\}$ of the nonzero residues mod 7 under multiplication is closed ($2 \cdot 4 = 8 \equiv
1$, $4 \cdot 4 = 16 \equiv 2$, $2 \cdot 2 = 4$), so it is a subgroup. It is the set of nonzero squares mod 7.

## 14.2 Generated subgroups

Pick one element $a$ of a group $G$. Any subgroup that contains $a$ must contain $a^2 = aa$, $a^3$, all positive powers,
then $e = a^0$ and $a^{-1}$, then all negative powers. And the set of all powers is already a subgroup, since
$a^m (a^n)^{-1} = a^{m-n}$. So:

**Definition.** The **cyclic subgroup generated by $a$** is $\langle a \rangle = \{a^n : n \in \mathbb{Z}\}$, the
smallest subgroup of $G$ containing $a$. In additive notation, $\langle a \rangle = \{na : n \in \mathbb{Z}\}$.

Examples: in $\mathbb{Z}$, $\langle 6 \rangle = 6\mathbb{Z}$. In the integers mod 12, $\langle 8 \rangle = \{0, 8, 4\}$
(since $8 + 8 = 16 \equiv 4$ and $4 + 8 = 12 \equiv 0$). In the symmetries of a square, $\langle r \rangle$ is the
rotation subgroup, and for a reflection $s$, $\langle s \rangle = \{e, s\}$.

More generally, for any subset $S \subseteq G$, the **subgroup generated by $S$**, written $\langle S \rangle$, is the
smallest subgroup containing $S$. Two descriptions give the same set:

- **from above:** the intersection of all subgroups of $G$ that contain $S$ (an intersection of subgroups is a
  subgroup, by the one-step test, so this makes sense);
- **from below:** all finite products $s_1^{\pm 1} s_2^{\pm 1} \cdots s_k^{\pm 1}$ of elements of $S$ and their
  inverses (with the empty product being $e$).

The products are in every subgroup containing $S$, and they form a subgroup themselves (the product of two such words
is a word, the inverse of a word is the reversed word of inverses), so the two sets coincide.

**Example: two integers.** In $(\mathbb{Z}, +)$, what is $\langle 6, 10 \rangle$? Its elements are all $6x + 10y$ with
$x, y$ integers. Every such number is even. And $2 = 6 \cdot 2 + 10 \cdot (-1)$ is one of them, so all multiples of 2
are too. Hence $\langle 6, 10 \rangle = 2\mathbb{Z}$. In general $\langle a, b \rangle = d\mathbb{Z}$ where
$d = \gcd(a, b)$: this is exactly Bezout's identity in group language (gentler version:
[Bezout's identity](../../topics/number-theory/level-6/01-bezout-identity.md)).

**Example: permutations.** The transpositions (2-cycles) generate all of $S_n$, because every permutation is a product
of transpositions ([Chapter 13](13-Groups.md)). Fewer suffice: $S_n$ is generated by just $(1\,2)$ and the long cycle
$(1\,2\,\cdots\,n)$. Conjugating $(1\,2)$ by powers of the long cycle gives $(2\,3), (3\,4), \dots$, and adjacent
transpositions generate all transpositions, by $(i\;\,i{+}2) = (i{+}1\;\,i{+}2)(i\;\,i{+}1)(i{+}1\;\,i{+}2)$. A Rubik's
cube is the same story: its group is generated by six face turns.

### Subgroups of cyclic groups

A group is **cyclic** if $G = \langle g \rangle$ for some $g$. The subgroups of cyclic groups are completely known.

**Theorem.** Every subgroup of a cyclic group is cyclic. If $G = \langle g \rangle$ has order $n$, then for each
positive divisor $d$ of $n$ there is exactly one subgroup of order $d$, namely $\langle g^{n/d} \rangle$, and there are
no others.

*Proof.* Let $H \le \langle g \rangle$. If $H = \{e\}$, it is $\langle e \rangle$. Otherwise $H$ contains some $g^k$
with $k \ne 0$, and then also $g^{-k}$, so it contains a positive power of $g$. Let $m$ be the smallest positive integer
with $g^m \in H$. We claim $H = \langle g^m \rangle$. Certainly $\langle g^m \rangle \subseteq H$. Take any $g^k \in H$
and divide: $k = qm + r$ with $0 \le r < m$. Then $g^r = g^k (g^m)^{-q} \in H$, and since $m$ was the smallest positive
exponent, $r = 0$. So $g^k = (g^m)^q \in \langle g^m \rangle$.

Now let $|G| = n$, so $g^n = e$. Then $g^n \in H$, and the same division argument shows $m$ divides $n$. The subgroup
$\langle g^m \rangle = \{e, g^m, g^{2m}, \dots, g^{n-m}\}$ has exactly $n/m$ elements. So the subgroups are the
$\langle g^m \rangle$ for divisors $m$ of $n$, one for each divisor, and the one of order $d$ has $m = n/d$. $\square$

**Example.** $\mathbb{Z}_{12}$ (the integers mod 12 under addition) has exactly six subgroups, one for each divisor of
12:

| order | subgroup |
|---|---|
| 1 | $\{0\}$ |
| 2 | $\langle 6 \rangle = \{0, 6\}$ |
| 3 | $\langle 4 \rangle = \{0, 4, 8\}$ |
| 4 | $\langle 3 \rangle = \{0, 3, 6, 9\}$ |
| 6 | $\langle 2 \rangle = \{0, 2, 4, 6, 8, 10\}$ |
| 12 | $\langle 1 \rangle = \mathbb{Z}_{12}$ |

Applied to $\mathbb{Z}$ itself (cyclic and infinite, generated by 1), the first half of the proof says: **every subgroup
of $\mathbb{Z}$ is $n\mathbb{Z}$ for some $n \ge 0$.** This little fact returns in [Chapter 17](17-Rings-and-Ideals.md)
as "every ideal of $\mathbb{Z}$ is principal".

## 14.3 Cosets

Here is a puzzle. Colour the twelve hours of a clock by their remainder mod 3: hours $0, 3, 6, 9$ in one colour,
$1, 4, 7, 10$ in a second, $2, 5, 8, 11$ in a third. The first colour class is the subgroup $H = \langle 3 \rangle$. The
other two are not subgroups (they miss 0), but they are the same shape as $H$, just slid around the clock by 1 and by 2.
The clock is cut into three equal copies of $H$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 200 200" role="img" aria-label="Twelve points on a clock, joined into three squares by their remainder mod 3">
<circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
<polygon points="100,30 170,100 100,170 30,100" fill="#eea66f" fill-opacity="0.25" stroke="#eea66f" stroke-width="2"/>
<polygon points="135,39.4 160.6,135 65,160.6 39.4,65" fill="#9cc9ea" fill-opacity="0.25" stroke="#9cc9ea" stroke-width="2"/>
<polygon points="160.6,65 135,160.6 39.4,135 65,39.4" fill="#7ccf9a" fill-opacity="0.25" stroke="#7ccf9a" stroke-width="2"/>
<circle cx="100" cy="30" r="5" fill="#eea66f"/><circle cx="170" cy="100" r="5" fill="#eea66f"/>
<circle cx="100" cy="170" r="5" fill="#eea66f"/><circle cx="30" cy="100" r="5" fill="#eea66f"/>
<circle cx="135" cy="39.4" r="5" fill="#9cc9ea"/><circle cx="160.6" cy="135" r="5" fill="#9cc9ea"/>
<circle cx="65" cy="160.6" r="5" fill="#9cc9ea"/><circle cx="39.4" cy="65" r="5" fill="#9cc9ea"/>
<circle cx="160.6" cy="65" r="5" fill="#7ccf9a"/><circle cx="135" cy="160.6" r="5" fill="#7ccf9a"/>
<circle cx="39.4" cy="135" r="5" fill="#7ccf9a"/><circle cx="65" cy="39.4" r="5" fill="#7ccf9a"/>
<g font-size="11" text-anchor="middle" fill="currentColor">
<text x="100" y="16">0</text><text x="144" y="27.8">1</text><text x="176.2" y="60">2</text>
<text x="188" y="104">3</text><text x="176.2" y="148">4</text><text x="144" y="180.2">5</text>
<text x="100" y="192">6</text><text x="56" y="180.2">7</text><text x="23.8" y="148">8</text>
<text x="12" y="104">9</text><text x="23.8" y="60">10</text><text x="56" y="27.8">11</text>
</g>
</svg>
</div>

The subgroup $\{0, 3, 6, 9\}$ and its two cosets $1 + H$ and $2 + H$ in $\mathbb{Z}_{12}$: three equal squares that
together use every hour exactly once.

**Definition.** Let $H \le G$ and $g \in G$. The **left coset** of $H$ containing $g$ is
$gH = \{gh : h \in H\}$, and the **right coset** is $Hg = \{hg : h \in H\}$. In additive notation one writes $g + H$.

Cosets are the "slid copies" of the subgroup. Only one of them, $eH = H$, is a subgroup; the others do not contain $e$.

### Cosets cut the group into equal pieces

Three facts make cosets useful. Fix $H \le G$.

**Fact 1. Every element lies in a coset:** $g = ge \in gH$.

**Fact 2. Two left cosets are either equal or disjoint.** Moreover $aH = bH$ exactly when $a^{-1}b \in H$.

*Proof.* Suppose $aH$ and $bH$ share an element: $ah_1 = bh_2$ for some $h_1, h_2 \in H$. Then $b = ah_1h_2^{-1}$, so
for any $h \in H$, $bh = a(h_1 h_2^{-1} h) \in aH$, because $h_1h_2^{-1}h \in H$. So $bH \subseteq aH$, and by symmetry
$aH \subseteq bH$; they are equal. For the second claim: if $aH = bH$ then $b = be \in aH$, so $b = ah$ and
$a^{-1}b = h \in H$. Conversely if $a^{-1}b = h \in H$ then $b = ah \in aH$, so the cosets share $b$ and are equal.
$\square$

Another way to say Fact 2: the relation $a \sim b \iff a^{-1}b \in H$ is an **equivalence relation** (reflexive,
symmetric, transitive), and its equivalence classes are the left cosets. An equivalence relation always splits a set
into disjoint classes, called a **partition**.

**Fact 3. All cosets have the same size as $H$.** The map $H \to gH$, $h \mapsto gh$, is a bijection: it is onto by the
definition of $gH$, and one-to-one because $gh_1 = gh_2$ implies $h_1 = h_2$ (multiply on the left by $g^{-1}$).

So the left cosets of $H$ chop $G$ into disjoint pieces, each a perfect copy of $H$ in size. The number of left cosets is
called the **index** of $H$ in $G$, written $[G : H]$. (It can be infinite: $\mathbb{Z}$ has infinitely many cosets of
$\{0\}$, but $2\mathbb{Z}$ has index 2, with cosets the evens and the odds.)

### Left and right can differ

In an **abelian** group (one where $ab = ba$ always) $gH = Hg$, so there is only one kind of coset. Not so in general.
Take $G = S_3$ and $H = \{e, (1\,2)\}$, composing permutations right to left (do the right-hand one first). The left
cosets are

$$
\{e, (1\,2)\}, \qquad \{(1\,3), (1\,2\,3)\}, \qquad \{(2\,3), (1\,3\,2)\},
$$

while the right cosets are

$$
\{e, (1\,2)\}, \qquad \{(2\,3), (1\,2\,3)\}, \qquad \{(1\,3), (1\,3\,2)\}.
$$

For instance $(1\,2\,3)H = \{(1\,2\,3), (1\,2\,3)(1\,2)\} = \{(1\,2\,3), (1\,3)\}$, but
$H(1\,2\,3) = \{(1\,2\,3), (1\,2)(1\,2\,3)\} = \{(1\,2\,3), (2\,3)\}$. Both families are partitions into three pairs,
just different ones. Subgroups whose left and right cosets agree are special; they are the **normal** subgroups of
[Chapter 15](15-Homomorphisms-and-Quotients.md).

The map $gH \mapsto Hg^{-1}$ is a well-defined bijection from left cosets to right cosets (because
$(gh)^{-1} = h^{-1}g^{-1}$), so there are always as many right cosets as left ones. The index does not care which side
you use.

### A familiar example: lines in the plane

In $(\mathbb{R}^2, +)$ take $H$ to be the line $y = 2x$ through the origin. A coset $(a, b) + H$ is the parallel line
through the point $(a, b)$. The cosets are all the lines of slope 2, and they fill the plane without overlapping. This is
the picture behind the solution sets of linear equations in [Chapter 3](03-Lines-and-Linear-Systems.md): the solutions
of $Ax = b$ are a coset of the solutions of $Ax = 0$.

## 14.4 Lagrange's theorem

*Level: advanced.*

Now put the three facts together. If $G$ is finite, its left cosets of $H$ are $[G:H]$ disjoint sets, each of size
$|H|$, and together they make up $G$. Counting elements:

**Theorem (Lagrange).** If $G$ is a finite group and $H \le G$, then

$$
|G| = [G : H]\,|H| .
$$

In particular, the order of every subgroup divides the order of the group.

*Proof.* By Facts 1 and 2, the distinct left cosets $g_1H, g_2H, \dots, g_kH$ (with $k = [G:H]$) are pairwise disjoint
and their union is $G$. By Fact 3, each has exactly $|H|$ elements. So $|G| = k|H|$. $\square$

That is the whole proof, and it is worth admiring for a moment. A statement about all possible subgroups of all possible
finite groups, most of which nobody will ever write down, follows from a counting argument on one line.

Lagrange's theorem is a powerful *negative* tool. A group of order 12 cannot contain a subgroup of order 5, 7, 8, 9, 10
or 11. A group of order 35 has subgroups only of orders 1, 5, 7 and 35. The symmetries of a square (order 8) cannot hide
a subgroup of order 3, so no symmetry of a square has order 3, a fact you can also see by looking at a square.

**History.** Joseph-Louis Lagrange did not prove this theorem in this form, because groups had not been defined. In his
long memoir *Réflexions sur la résolution algébrique des équations* (1770-1771) he studied how many different values a
formula in the roots $x_1, \dots, x_n$ of an equation takes when the roots are permuted, and showed that this number
divides $n!$. In modern words, it is the index of a subgroup of $S_n$. The statement for abstract groups came in the
nineteenth century, after Galois, Cauchy and Cayley had made groups into objects of their own (Cayley gave the abstract
definition in 1854).

### Corollaries

The **order** of an element $a$, written $|a|$ or $\operatorname{ord}(a)$, is the smallest positive integer $n$ with
$a^n = e$ (or infinity if there is none). It equals the size of the cyclic subgroup $\langle a \rangle$: if $|a| = n$,
then $e, a, \dots, a^{n-1}$ are all different (if $a^i = a^j$ with $0 \le i < j < n$ then $a^{j-i} = e$ with
$0 < j - i < n$, which is impossible) and every power of $a$ is one of them (divide the exponent by $n$).

**Corollary 1.** In a finite group, the order of every element divides the order of the group.

*Proof.* $|a| = |\langle a \rangle|$, and $\langle a \rangle$ is a subgroup. $\square$

**Corollary 2.** In a finite group $G$, $a^{|G|} = e$ for every $a$.

*Proof.* Write $|G| = k\,|a|$. Then $a^{|G|} = (a^{|a|})^k = e^k = e$. $\square$

**Corollary 3.** A group of prime order $p$ is cyclic, and every element other than $e$ generates it.

*Proof.* Take $a \ne e$. Then $|a|$ divides $p$ and is not 1, so $|a| = p$ and $\langle a \rangle$ has all $p$ elements.
$\square$

So there is, up to renaming, only one group of each prime order: $\mathbb{Z}_p$. The first time you meet this, it is
startling. Seven is prime; therefore there is exactly one way to build a group with seven elements.

### Fermat and Euler as corollaries

Number theorists knew two theorems long before groups existed. Group theory turns each into a one-liner.

Let $U(n)$ be the set of residues mod $n$ that have a multiplicative inverse, which are the residues coprime to $n$
(gentler version: [Inverses mod n](../../topics/number-theory/level-6/04-inverses-mod-n.md)). Under multiplication mod
$n$, $U(n)$ is a group: the product of two invertible residues is invertible, with inverse $b^{-1}a^{-1}$. Its order is
**Euler's phi function** $\varphi(n)$, the number of integers from 1 to $n$ coprime to $n$. For example
$U(10) = \{1, 3, 7, 9\}$ and $\varphi(10) = 4$.

**Euler's theorem.** If $\gcd(a, n) = 1$, then $a^{\varphi(n)} \equiv 1 \pmod n$.

*Proof.* The residue of $a$ lies in $U(n)$, a group of order $\varphi(n)$. Apply Corollary 2. $\square$

**Fermat's little theorem.** If $p$ is prime and $p \nmid a$, then $a^{p-1} \equiv 1 \pmod p$. Consequently
$a^p \equiv a \pmod p$ for every integer $a$.

*Proof.* For a prime, every nonzero residue is coprime to $p$, so $\varphi(p) = p - 1$; apply Euler. For the second
form, multiply by $a$; and if $p \mid a$ both sides are $0$ mod $p$. $\square$

Fermat stated the theorem in a letter of 1640 without proof; Leonhard Euler gave proofs in the 1730s and the
generalisation to any modulus in the 1760s. His proofs were clever arrangements of residues. The coset proof shows what
was really going on.

**Worked example.** Find $3^{100} \bmod 7$.

- $7$ is prime and $7 \nmid 3$, so $3^6 \equiv 1 \pmod 7$.
- $100 = 6 \cdot 16 + 4$, so $3^{100} = (3^6)^{16} \cdot 3^4 \equiv 3^4 = 81 \pmod 7$.
- $81 = 11 \cdot 7 + 4$.

So $3^{100} \equiv 4 \pmod 7$. **Check:** `pow(3, 100, 7)` in Python gives 4.

**Worked example.** What is the last digit of $7^{222}$?

- The last digit is the residue mod 10. $\gcd(7, 10) = 1$ and $\varphi(10) = 4$, so $7^4 \equiv 1 \pmod{10}$.
- $222 = 4 \cdot 55 + 2$, so $7^{222} \equiv 7^2 = 49 \equiv 9$.

The last digit is 9. **Check:** `pow(7, 222, 10)` gives 9.

These two theorems are the engine of RSA encryption; the cryptography book on this site builds RSA from exactly this
corollary (see [cryptography.akadian.ca/book](https://cryptography.akadian.ca/book/)).

### Index is multiplicative

**Corollary 4.** If $K \le H \le G$ with $G$ finite, then $[G : K] = [G : H]\,[H : K]$.

*Proof.* $[G:K] = |G|/|K| = (|G|/|H|)(|H|/|K|)$. $\square$

(The formula holds for infinite groups too, as long as the indices are finite, by choosing coset representatives; this
is the group cousin of the tower law for fields in [Chapter 19](19-Fields-and-Extensions.md).)

<figure class="play" data-play="cosets"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A subgroup of the clock group and its cosets. The cosets never overlap and are all the same size, so the subgroup's size divides n.</figcaption></figure>

## 14.5 The order of an element

*Level: advanced.*

Lagrange says the order of an element divides $|G|$. Which divisors actually occur, and how do you find them fast?

### Two basic rules

**Rule 1.** If $|a| = n$, then $a^k = e$ if and only if $n \mid k$.

*Proof.* If $k = qn$ then $a^k = (a^n)^q = e$. Conversely, divide: $k = qn + r$ with $0 \le r < n$; then
$e = a^k = (a^n)^q a^r = a^r$, and since $n$ is the smallest positive exponent giving $e$, $r = 0$. $\square$

**Rule 2.** If $|a| = n$, then $|a^k| = \dfrac{n}{\gcd(n, k)}$.

*Proof.* Let $d = \gcd(n, k)$. By Rule 1, $(a^k)^m = a^{km} = e$ exactly when $n \mid km$, that is, when
$\frac{n}{d} \mid \frac{k}{d} m$. Since $\frac{n}{d}$ and $\frac{k}{d}$ are coprime, this happens exactly when
$\frac{n}{d} \mid m$. The smallest such positive $m$ is $n/d$. $\square$

**Example.** In $\mathbb{Z}_{12}$ (additive, so "powers" are multiples), the element 8 has order
$12/\gcd(12, 8) = 3$: indeed $8, 16 \equiv 4, 24 \equiv 0$. The element 5 has order $12/\gcd(12,5) = 12$, so 5
generates $\mathbb{Z}_{12}$. In general $k$ generates $\mathbb{Z}_n$ exactly when $\gcd(n, k) = 1$, so $\mathbb{Z}_n$
has $\varphi(n)$ generators.

**A counting identity.** In $\mathbb{Z}_n$, each element generates exactly one subgroup, and there is exactly one
subgroup $C_d$ of order $d$ for each divisor $d$; its generators are the elements of order $d$, and there are
$\varphi(d)$ of them. Counting all $n$ elements by their order:

$$
\sum_{d \mid n} \varphi(d) = n .
$$

**Check** for $n = 12$: $\varphi(1) + \varphi(2) + \varphi(3) + \varphi(4) + \varphi(6) + \varphi(12) =
1 + 1 + 2 + 2 + 2 + 4 = 12$.

### Commuting elements

If $ab = ba$, $|a| = m$, $|b| = n$ and $\gcd(m, n) = 1$, then $|ab| = mn$.

*Proof.* Since $a$ and $b$ commute, $(ab)^k = a^kb^k$. So $(ab)^{mn} = (a^m)^n(b^n)^m = e$. Conversely, suppose
$(ab)^k = e$. Then $a^k = b^{-k}$ lies in both $\langle a \rangle$ and $\langle b \rangle$. Their intersection is a
subgroup of each, so by Lagrange its order divides both $m$ and $n$, hence is 1. So $a^k = e = b^k$, so $m \mid k$ and
$n \mid k$, so $mn \mid k$. $\square$

Both hypotheses matter. Without commuting: in $S_3$, $(1\,2)$ and $(2\,3)$ have order 2 but their product
$(1\,2)(2\,3) = (1\,2\,3)$ has order 3, not a divisor of anything you would guess. Without coprimality: $a$ and
$a^{-1}$ commute and have the same order, but $aa^{-1} = e$.

### Orders of permutations

A permutation written as a product of disjoint cycles has order equal to the **least common multiple** of the cycle
lengths.

*Why.* A cycle of length $\ell$ has order $\ell$: applying it $k$ times moves each of its points $k$ steps around the
cycle, which returns everything home exactly when $\ell \mid k$. Disjoint cycles commute and move different points, so
$\sigma^k = e$ exactly when every cycle length divides $k$, that is, when the lcm divides $k$. $\square$

**Example.** $\sigma = (1\,2\,3)(4\,5)$ in $S_5$ has order $\operatorname{lcm}(3, 2) = 6$. It is the largest order in
$S_5$: the cycle shapes in $S_5$ give orders 1, 2, 3, 4, 5, 6 (from $(1\,2)(3\,4\,5)$) and nothing bigger. In $S_{10}$
the largest order is $\operatorname{lcm}(2, 3, 5) = 30$, from a 2-cycle, a 3-cycle and a 5-cycle.

**Example: all of $S_4$.** The 24 permutations of four things, by cycle shape:

| shape | example | how many | order |
|---|---|---|---|
| identity | $e$ | 1 | 1 |
| one 2-cycle | $(1\,2)$ | 6 | 2 |
| two 2-cycles | $(1\,2)(3\,4)$ | 3 | 2 |
| one 3-cycle | $(1\,2\,3)$ | 8 | 3 |
| one 4-cycle | $(1\,2\,3\,4)$ | 6 | 4 |

**Check:** $1 + 6 + 3 + 8 + 6 = 24$. All orders divide 24, as Lagrange demands, but no element has order 6, 8, 12 or 24:
divisors of $|G|$ need not be orders of elements.

### Try it in Python

```python
from math import gcd
from itertools import permutations

def order(p):
    """Order of a permutation given as a tuple p, where p[i] is the image of i."""
    e = tuple(range(len(p)))
    k, q = 1, p
    while q != e:
        q = tuple(p[i] for i in q)   # q = p after q
        k += 1
    return k

counts = {}
for p in permutations(range(4)):
    counts[order(p)] = counts.get(order(p), 0) + 1
print(counts)      # {1: 1, 2: 9, 3: 8, 4: 6}
```

## 14.6 The converse fails: $A_4$

*Level: advanced.*

Lagrange says: if $H$ is a subgroup of $G$, then $|H|$ divides $|G|$. Is the converse true? If $d$ divides $|G|$, must
$G$ have a subgroup of order $d$?

For cyclic groups, yes (§14.2). For many small groups, yes. But not always, and the smallest counterexample is the
alternating group $A_4$, the twelve even permutations of $\{1, 2, 3, 4\}$. They are:

- the identity $e$;
- the three double transpositions $(1\,2)(3\,4)$, $(1\,3)(2\,4)$, $(1\,4)(2\,3)$, each of order 2;
- the eight 3-cycles $(1\,2\,3), (1\,3\,2), (1\,2\,4), (1\,4\,2), (1\,3\,4), (1\,4\,3), (2\,3\,4), (2\,4\,3)$, each of
  order 3.

(Geometrically, $A_4$ is the rotation group of a regular tetrahedron: the 3-cycles are rotations by 120 and 240 degrees
about the axes through a corner and the centre of the opposite face, and the double transpositions are half-turns about
the axes through midpoints of opposite edges.)

**Theorem.** $A_4$ has no subgroup of order 6, although 6 divides 12.

*Proof.* Suppose $H \le A_4$ with $|H| = 6$. Its index is $12/6 = 2$, so there are exactly two left cosets: $H$ itself,
and the set $A_4 \setminus H$ of everything else.

*Step 1: every square lies in $H$.* Take any $g \in A_4$. If $g \in H$ then $g^2 \in H$. If $g \notin H$, suppose
$g^2 \notin H$ too. Then $g^2$ and $g$ are both in the other coset $gH$, so $g^2 = gh$ for some $h \in H$, which gives
$g = h \in H$, a contradiction. So $g^2 \in H$ always.

*Step 2: every 3-cycle is a square.* If $\sigma$ has order 3 then $\sigma = \sigma^4 = (\sigma^2)^2$.

*Step 3: count.* By steps 1 and 2, all eight 3-cycles lie in $H$, together with $e$. That is nine elements in a set of
six. Contradiction. $\square$

The subgroups $A_4$ does have are: $\{e\}$; three of order 2; four of order 3 (one for each axis of the tetrahedron);
one of order 4, namely $V = \{e, (1\,2)(3\,4), (1\,3)(2\,4), (1\,4)(2\,3)\}$; and $A_4$ itself. That is ten subgroups,
and none of order 6.

So "divides" is necessary but not sufficient. The rest of group theory has spent a long time finding partial converses.
Two of them, proved in [Chapter 16](16-Group-Actions-and-Sylow.md), are the strongest general ones:

- **Cauchy's theorem:** if a prime $p$ divides $|G|$, then $G$ has an element of order $p$ (so a subgroup of order $p$).
- **Sylow's first theorem:** if $p^k$ is the largest power of $p$ dividing $|G|$, then $G$ has a subgroup of order
  $p^k$.

The converse of Lagrange does hold for every divisor in some classes of groups, for example all abelian groups (this
follows from [Chapter 15](15-Homomorphisms-and-Quotients.md)'s classification) and, more generally, all finite groups
whose order is a power of a prime.

## 14.7 Groups of small order

*Level: advanced; the end of the section is expert.*

With Lagrange in hand you can start answering the most natural question of all: how many different groups of each size
are there? "Different" means **not isomorphic**: two groups are isomorphic if one is the other with the elements
renamed, so that the multiplication tables match. ([Chapter 15](15-Homomorphisms-and-Quotients.md) makes this precise.)

### Orders 1, 2, 3, 5, 7: primes

The trivial group is the only group of order 1. Orders 2, 3, 5 and 7 are prime, so by Corollary 3 the only groups are
the cyclic groups $\mathbb{Z}_2$, $\mathbb{Z}_3$, $\mathbb{Z}_5$, $\mathbb{Z}_7$.

### Order 4: two groups

**Theorem.** A group of order 4 is isomorphic to $\mathbb{Z}_4$ or to the **Klein four-group**
$V = \{e, a, b, c\}$ with $a^2 = b^2 = c^2 = e$, $ab = c$, $bc = a$, $ca = b$.

*Proof.* By Lagrange, every element has order 1, 2 or 4. If some element has order 4, it generates the group, which is
cyclic. Otherwise every element other than $e$ has order 2; call them $a, b, c$. What is $ab$? It is not $e$ (that
would make $b = a^{-1} = a$), not $a$ (that would make $b = e$), not $b$ (that would make $a = e$). So $ab = c$. The same
argument gives every other product, and the table is forced. $\square$

The two groups really are different: $\mathbb{Z}_4$ has an element of order 4 and $V$ does not. The Klein group appears
everywhere: as $\{e, (1\,2)(3\,4), (1\,3)(2\,4), (1\,4)(2\,3)\}$ inside $A_4$; as the symmetries of a non-square
rectangle (identity, two reflections, half-turn); as $U(8) = \{1, 3, 5, 7\}$, where $3^2 = 9 \equiv 1$,
$5^2 = 25 \equiv 1$, $7^2 = 49 \equiv 1 \pmod 8$. On the other hand $U(5) = \{1, 2, 3, 4\}$ is cyclic, generated by 2
($2, 4, 8 \equiv 3, 16 \equiv 1$).

### Order 6: two groups

**Lemma.** A finite group of even order has an element of order 2.

*Proof.* Pair each element $x$ with its inverse $x^{-1}$. Elements with $x \ne x^{-1}$ come in pairs, so there is an
even number of them. The rest, those with $x = x^{-1}$, that is $x^2 = e$, are therefore even in number too (even minus
even). They include $e$, so there is at least one more, and it has order 2. $\square$

**Theorem.** A group of order 6 is isomorphic to $\mathbb{Z}_6$ or to $S_3$.

*Proof.* Let $|G| = 6$. Element orders divide 6. If some element has order 6, $G$ is cyclic. Assume not, so every
element other than $e$ has order 2 or 3.

*There is an element of order 3.* If not, $x^2 = e$ for all $x$, and then $G$ is abelian: $ab = (ab)^{-1} = b^{-1}a^{-1}
= ba$. Take $a \ne b$, both not $e$. Then $\{e, a, b, ab\}$ is closed (check: $a \cdot ab = b$, $ab \cdot b = a$,
$(ab)^2 = e$, and so on), so it is a subgroup of order 4, which is impossible since 4 does not divide 6. So some $a$ has
order 3. Let $H = \langle a \rangle = \{e, a, a^2\}$, of index 2.

*There is an element of order 2,* by the lemma; call it $b$. It is not in $H$ (whose elements have order 1 or 3), so
the two cosets are $H$ and $bH$, and $G = \{e, a, a^2, b, ba, ba^2\}$.

*The product $ab$ is forced.* $ab \notin H$ (else $b = a^{-1}(ab) \in H$), so $ab \in bH = \{b, ba, ba^2\}$. Now
$ab = b$ would give $a = e$. And $ab = ba$ would make $G$ abelian (every element is a product of $a$'s and $b$'s), and
then $ab$ would have order $\operatorname{lcm}(3, 2) = 6$ by the commuting rule of §14.5, against our assumption. So
$ab = ba^2 = ba^{-1}$.

The three rules $a^3 = e$, $b^2 = e$, $ab = ba^{-1}$ let you rewrite any product into the form $b^ja^i$, so they fix the
whole table. $S_3$ obeys the same rules with $a = (1\,2\,3)$, $b = (1\,2)$: indeed $(1\,2\,3)(1\,2) = (1\,3)$ and
$(1\,2)(1\,3\,2) = (1\,3)$. So $G \cong S_3$. $\square$

$S_3$ is also the symmetry group of an equilateral triangle, the dihedral group $D_3$. It is the smallest group that is
not abelian.

### Order 8: five groups

Here the work grows. There are exactly five groups of order 8:

- three abelian ones: $\mathbb{Z}_8$, $\mathbb{Z}_4 \times \mathbb{Z}_2$, $\mathbb{Z}_2 \times \mathbb{Z}_2 \times
  \mathbb{Z}_2$ (direct products are defined in [Chapter 15](15-Homomorphisms-and-Quotients.md));
- the dihedral group $D_4$ of the square (some books call it $D_8$, after its order);
- the **quaternion group** $Q_8 = \{\pm 1, \pm i, \pm j, \pm k\}$ with $i^2 = j^2 = k^2 = ijk = -1$, found by William
  Rowan Hamilton in 1843 inside his quaternions ([Chapter 17](17-Rings-and-Ideals.md)).

They are told apart by counting elements of each order: $\mathbb{Z}_8$ has an element of order 8; $D_4$ has five
elements of order 2 (four reflections and the half-turn); $Q_8$ has only one ($-1$); the abelian groups differ in their
largest order (8, 4, 2). The proof that there are no others is a case analysis much like the one for order 6: if there is
an element of order 8 the group is cyclic; if all elements have order at most 2 it is $\mathbb{Z}_2^3$; otherwise there
is an element $a$ of order 4, $\langle a \rangle$ has index 2, and one studies the square and the conjugation action of
an element outside it. You can carry this out after [Chapter 15](15-Homomorphisms-and-Quotients.md); it is done in full
in Dummit and Foote (see Further reading).

### The table, and how it goes on

| order $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| groups of order $n$ | 1 | 1 | 1 | 2 | 1 | 2 | 1 | 5 | 2 | 2 | 1 | 5 | 1 | 2 | 1 | 14 |

Patterns you will be able to prove by [Chapter 16](16-Group-Actions-and-Sylow.md): a group of order $p^2$ is abelian, so
there are two ($\mathbb{Z}_{p^2}$ and $\mathbb{Z}_p \times \mathbb{Z}_p$), which explains 4 and 9. A group of order $2p$,
with $p$ an odd prime, is cyclic or dihedral, which explains 6, 10 and 14. A group of order 15 must be cyclic.

The counts then grow wildly at powers of 2. The groups of every order up to 2000 have been counted by computer (Besche,
Eick and O'Brien, 2002): there are 49,487,365,422 groups of order $1024 = 2^{10}$, more than 99 percent of all the groups
of order at most 2000. Nobody has a formula for the number of groups of order $n$; good asymptotic estimates for prime
powers go back to Graham Higman (1960) and Charles Sims (1965). Classifying all finite groups up to isomorphism is
hopeless. What group theorists do instead is classify the **simple** groups, the atoms out of which every finite group is
built; that story is in §16.8.

## Check yourself

??? question "1. Which of these are subgroups? (a) $\{0, 4, 8\}$ in $\mathbb{Z}_{12}$; (b) $\{0, 3, 6\}$ in $\mathbb{Z}_{12}$; (c) $\{1, -1\}$ in $(\mathbb{R}^{\times}, \times)$; (d) the integers in $(\mathbb{Q}^{\times}, \times)$, without zero."

    (a) Yes: it is $\langle 4 \rangle$, of order 3.
    (b) No: $6 + 6 = 12 \equiv 0$ is fine, but $3 + 6 = 9$ is missing. (Also its size 3 would make it $\langle 4\rangle$,
    the only subgroup of order 3.)
    (c) Yes: closed under products and inverses, contains 1.
    (d) No: 2 is there but its inverse $1/2$ is not.

??? question "2. Find all subgroups of $\mathbb{Z}_{18}$ and give a generator of each."

    One for each divisor of 18: order 1: $\{0\}$; order 2: $\langle 9 \rangle$; order 3: $\langle 6 \rangle$;
    order 6: $\langle 3 \rangle$; order 9: $\langle 2 \rangle$; order 18: $\langle 1 \rangle$. Six subgroups in all.

??? question "3. What is $\langle 12, 18 \rangle$ in $\mathbb{Z}$? What is $\langle 12, 18 \rangle$ in $\mathbb{Z}_{30}$?"

    In $\mathbb{Z}$ it is $\gcd(12, 18)\mathbb{Z} = 6\mathbb{Z}$, since $6 = 12 \cdot (-1) + 18 \cdot 1$.
    In $\mathbb{Z}_{30}$ it is $\langle 6 \rangle = \{0, 6, 12, 18, 24\}$, of order $30/6 = 5$: every element is a
    multiple of 6 mod 30, and 6 itself is reached.

??? question "4. List the left cosets of $H = \{e, r^2\}$ in the symmetry group of a square (with rotations $e, r, r^2, r^3$ and reflections $s, rs, r^2s, r^3s$). How many are there?"

    $H = \{e, r^2\}$, $rH = \{r, r^3\}$, $sH = \{s, sr^2\}$ and $rsH = \{rs, rsr^2\}$. Since $sr^2 = r^{-2}s = r^2s$
    (reflections reverse rotations), $sH = \{s, r^2s\}$ and $rsH = \{rs, r^3s\}$. Four cosets of size 2, as Lagrange
    says: $8 = 4 \cdot 2$.

??? question "5. Compute $2^{1000} \bmod 13$ and $5^{2026} \bmod 11$ using Fermat."

    $2^{12} \equiv 1 \pmod{13}$ and $1000 = 12 \cdot 83 + 4$, so $2^{1000} \equiv 2^4 = 16 \equiv 3$.
    $5^{10} \equiv 1 \pmod{11}$ and $2026 = 10 \cdot 202 + 6$, so $5^{2026} \equiv 5^6$. Now $5^2 = 25 \equiv 3$, so
    $5^6 \equiv 3^3 = 27 \equiv 5$. Answers: 3 and 5. (Check: `pow(2,1000,13)`, `pow(5,2026,11)`.)

??? question "6. In $\mathbb{Z}_{40}$, what are the orders of 15, 16 and 28? How many elements of order 8 are there?"

    $|15| = 40/\gcd(40,15) = 40/5 = 8$; $|16| = 40/8 = 5$; $|28| = 40/4 = 10$. The elements of order 8 are the
    generators of the unique subgroup of order 8, $\langle 5 \rangle$, and there are $\varphi(8) = 4$ of them: 5, 15,
    25, 35.

??? question "7. What is the order of $(1\,2\,3\,4)(5\,6\,7\,8\,9\,10)$ in $S_{10}$? Of $(1\,2)(3\,4\,5)(6\,7\,8\,9\,10)$?"

    $\operatorname{lcm}(4, 6) = 12$ and $\operatorname{lcm}(2, 3, 5) = 30$.

??? question "8. Let $G$ be a group of order 35 and $H, K$ subgroups of orders 5 and 7. Show $H \cap K = \{e\}$."

    $H \cap K$ is a subgroup of both $H$ and $K$, so its order divides 5 and divides 7. The only common divisor is 1.

??? question "9. Prove: if $G$ is finite and $H, K \le G$ with $\gcd(|H|, |K|) = 1$, then $H \cap K = \{e\}$. Then prove that two different subgroups of prime order $p$ meet only in $e$."

    First part: as in question 8, $|H \cap K|$ divides both orders, so it is 1.
    Second part: if $H \ne K$ both have order $p$, then $H \cap K$ is a subgroup of $H$, so its order is 1 or $p$. If it
    were $p$ then $H \cap K = H$, and likewise $= K$, so $H = K$. Hence $H \cap K = \{e\}$. (Useful in Chapter 16: the
    subgroups of order $p$ share only the identity, so they contain disjoint sets of $p - 1$ elements of order $p$.)

??? question "10. Show that if $[G : H] = 2$ then $gH = Hg$ for every $g$."

    If $g \in H$ both cosets equal $H$. If $g \notin H$, the left cosets are $H$ and $G \setminus H$, so
    $gH = G \setminus H$; the right cosets are $H$ and $G \setminus H$ too, so $Hg = G \setminus H$. Equal.

??? question "11. Show that $\mathbb{Q}$ under addition has no subgroup of finite index other than $\mathbb{Q}$ itself."

    Suppose $[\mathbb{Q} : H] = n$. The cosets $H, x + H, 2x + H, \dots, nx + H$ are $n+1$ cosets among $n$, so two
    agree: $ix - jx \in H$ for some $0 \le j < i \le n$, so $kx \in H$ for some $1 \le k \le n$. Hence $n!\,x \in H$
    for every $x \in \mathbb{Q}$ (as $k \mid n!$). Given any $y \in \mathbb{Q}$, take $x = y/n!$: then $y = n!\,x \in H$.
    So $H = \mathbb{Q}$.

??? question "12. Prove that a group of order 9 has a subgroup of order 3, using only Lagrange."

    Take $a \ne e$. Its order divides 9, so it is 3 or 9. If 3, $\langle a \rangle$ works. If 9, then $a^3$ has order
    $9/\gcd(9,3) = 3$ by Rule 2, and $\langle a^3 \rangle$ works.

## What you learned

- A subgroup is a subset that is a group under the same operation; test it with "nonempty and $ab^{-1} \in H$", or just
  closure if it is finite.
- $\langle S \rangle$ is the smallest subgroup containing $S$; subgroups of cyclic groups are cyclic, one for each
  divisor of the order.
- Left cosets $gH$ partition $G$ into pieces of equal size; their number is the index $[G:H]$.
- Lagrange: $|G| = [G:H]\,|H|$. Hence element orders divide $|G|$, $a^{|G|} = e$, and groups of prime order are cyclic.
- Fermat's and Euler's theorems are Lagrange applied to $U(n)$.
- $|a^k| = n/\gcd(n,k)$; a permutation's order is the lcm of its cycle lengths.
- The converse of Lagrange fails: $A_4$ has order 12 and no subgroup of order 6.
- Up to isomorphism there are 1, 1, 1, 2, 1, 2, 1, 5 groups of orders 1 to 8.

**Next:** [Chapter 15](15-Homomorphisms-and-Quotients.md), maps between groups, normal subgroups, and how to divide a
group by a subgroup to get a new group.

## Further reading

- D. S. Dummit and R. M. Foote, *Abstract Algebra*, 3rd edition, 2004. Chapters 2 and 3; the groups of order 8 are
  classified in Section 4.5 and later.
- J. A. Gallian, *Contemporary Abstract Algebra* (many editions since 1986). Very friendly chapters on cyclic groups and
  cosets.
- M. A. Armstrong, *Groups and Symmetry*, 1988. Groups through geometry, with Lagrange early.
- I. N. Herstein, *Topics in Algebra*, 2nd edition, 1975. Classic, with hard exercises.
- J.-L. Lagrange, *Réflexions sur la résolution algébrique des équations*, 1770-1771, the source of the idea.
- I. Kleiner, "The evolution of group theory: a brief survey", *Mathematics Magazine* 59, 1986.
- H. U. Besche, B. Eick and E. A. O'Brien, "A millennium project: constructing small groups", *International Journal
  of Algebra and Computation* 12, 2002.
- On this site: [Fermat's little theorem](../../topics/number-theory/level-7/01-fermats-little-theorem.md),
  [Euler's phi function](../../topics/number-theory/level-7/03-euler-phi.md),
  [Rotational symmetry](../../topics/geometry/level-4/06-rotational-symmetry.md),
  [Logic, sets and proof (MAT158H1 unit 1)](../../uoft/MAT158H1/unit01.md), the [Algebra book](index.md).
- Euler's theorem at work in RSA: [cryptography.akadian.ca/book](https://cryptography.akadian.ca/book/), chapters 3 and
  13.
