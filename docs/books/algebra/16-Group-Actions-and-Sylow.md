# 16. Group actions and Sylow

*Groups were born as groups of permutations: of the roots of an equation, of the corners of a solid, of the stickers of
a puzzle. A group action puts that origin back at the centre: the group moves the points of a set around. Counting how
the points move turns out to be one of the strongest tools in algebra. In this chapter you will prove the
orbit-stabilizer theorem, count colourings and molecules with Burnside's lemma, show that groups of prime-power order
have a nontrivial centre, prove Cauchy's theorem and the three Sylow theorems, and use them to pin down groups of orders
like 15 and 21. The chapter ends with the largest collaborative proof in mathematics: the classification of the finite
simple groups.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a group action is, with orbits and stabilizers, and Cayley's theorem that every group is a permutation group
    - the orbit-stabilizer theorem, with a proof, and how it counts the symmetries of solids
    - Burnside's lemma for counting things "up to symmetry": necklaces, coloured cubes, molecules
    - the class equation, and why every group of order $p^n$ has a nontrivial centre
    - Cauchy's theorem and the three Sylow theorems, all with proofs
    - how to use Sylow's theorems to classify groups of order $pq$ and prove groups are not simple
    - what simple groups are and what the classification of finite simple groups says

    **You need:** [Chapter 14](14-Subgroups-Cosets-and-Lagrange.md) (cosets, Lagrange, orders of elements) and
    [Chapter 15](15-Homomorphisms-and-Quotients.md) (homomorphisms, normal subgroups, quotients, direct products).

    **Levels:** 16.1 to 16.3 are advanced; 16.4 to 16.7 are advanced to expert (full university proofs); 16.8 is an
    expert-level survey of the frontier.

## 16.1 Actions, orbits, stabilizers

*Level: advanced.*

Turn a cube in your hand. Each rotation moves the six faces among themselves, the eight corners among themselves, the
twelve edges among themselves. The same group, the rotations of the cube, is shuffling three different sets. To talk
about this cleanly we separate the group from the things it moves.

**Definition.** An **action** of a group $G$ on a set $X$ is a rule that gives, for each $g \in G$ and $x \in X$, a
point $g \cdot x \in X$, such that

1. $e \cdot x = x$ for every $x$;
2. $g \cdot (h \cdot x) = (gh) \cdot x$ for all $g, h \in G$ and $x \in X$.

The second rule says: moving by $h$ and then by $g$ is the same as moving by the product $gh$. One also says "$G$ acts
on $X$" and calls $X$ a **$G$-set**.

Each $g$ moves the points of $X$ by a bijection (its inverse is the motion of $g^{-1}$), so an action is the same thing
as a homomorphism $G \to \operatorname{Sym}(X)$, the group of all permutations of $X$. The kernel of that homomorphism
is the set of elements that move nothing; if it is trivial, the action is called **faithful**.

### Examples

1. $S_n$ acts on $\{1, \dots, n\}$ by $\sigma \cdot i = \sigma(i)$.
2. The symmetry group $D_n$ of a regular $n$-gon acts on its $n$ corners, and also on its $n$ edges.
3. The rotation group of a cube acts on faces, corners, edges, and on the four long diagonals.
4. $GL_n(\mathbb{R})$ acts on $\mathbb{R}^n$ by $A \cdot v = Av$.
5. Any group acts on itself by **left multiplication**, $g \cdot x = gx$.
6. Any group acts on itself by **conjugation**, $g \cdot x = gxg^{-1}$. (Check rule 2:
   $g(hxh^{-1})g^{-1} = (gh)x(gh)^{-1}$.)
7. If $H \le G$, then $G$ acts on the set $G/H$ of left cosets by $g \cdot aH = gaH$.
8. $G$ acts on the set of its subgroups by conjugation, $g \cdot H = gHg^{-1}$.

### Orbits and stabilizers

**Definitions.** For $x \in X$:

- the **orbit** of $x$ is $G \cdot x = \{g \cdot x : g \in G\}$, everywhere $x$ can be moved to;
- the **stabilizer** of $x$ is $G_x = \{g \in G : g \cdot x = x\}$, the elements that leave $x$ where it is.

The stabilizer is a subgroup of $G$ (it contains $e$; if $g, h$ fix $x$ then so do $gh$ and $g^{-1}$). The orbits
partition $X$: the relation "$y$ is in the orbit of $x$" is an equivalence relation, by the two rules of an action. An
action with only one orbit is **transitive**.

**Example: the cube.** Under the rotation group, all six faces form one orbit (any face can be turned to the top). The
stabilizer of the top face is the four rotations about the vertical axis (0, 90, 180, 270 degrees).

**Example: conjugation.** The orbit of $x$ under conjugation is its **conjugacy class** $\{gxg^{-1}\}$. The stabilizer
is the **centralizer** $C_G(x) = \{g : gx = xg\}$. In $S_n$ the conjugacy classes are exactly the cycle shapes, because
$g\sigma g^{-1}$ is $\sigma$ with every number $i$ renamed $g(i)$: for instance, $g(1\,2\,3)(4\,5)g^{-1} =
(g(1)\;g(2)\;g(3))(g(4)\;g(5))$.

**Example: subgroups.** Under conjugation the orbit of a subgroup $H$ is the set of its **conjugates** $gHg^{-1}$, and
the stabilizer is the **normalizer** $N_G(H) = \{g : gHg^{-1} = H\}$. $H$ is normal exactly when its orbit is just
$\{H\}$.

### Cayley's theorem

**Theorem (Cayley, 1854).** Every group $G$ is isomorphic to a subgroup of a symmetric group, namely of
$\operatorname{Sym}(G)$. If $|G| = n$, then $G$ is isomorphic to a subgroup of $S_n$.

*Proof.* Use the left multiplication action. The homomorphism $G \to \operatorname{Sym}(G)$, $g \mapsto (x \mapsto gx)$,
has trivial kernel: if $gx = x$ for all $x$ then $g = e$. By the first isomorphism theorem, $G$ is isomorphic to its
image. $\square$

So abstract groups and permutation groups are the same subject. Cayley's theorem is mostly of philosophical value
(embedding a group of order 60 into $S_{60}$, a group with about $8 \times 10^{81}$ elements, is not efficient), but the
same idea, letting $G$ act on something smaller, is a workhorse. For example, a group acting on the $k$ left cosets of a
subgroup gives a homomorphism $G \to S_k$; this is how one proves groups are not simple in §16.7.

## 16.2 The orbit-stabilizer theorem

*Level: advanced.*

How many rotations does a cube have? Count them in a clever way: the top face can be sent to any of 6 faces, and once
you have decided where it goes, there are 4 rotations that do it (turn about the axis through that face). So the cube
has $6 \times 4 = 24$ rotations.

The general principle:

**Theorem (orbit-stabilizer).** Let $G$ act on $X$ and let $x \in X$. The map $gG_x \mapsto g \cdot x$ is a well-defined
bijection from the left cosets of the stabilizer to the orbit. Hence

$$
|G \cdot x| = [G : G_x], \qquad\text{and for finite } G,\qquad |G| = |G \cdot x|\;|G_x| .
$$

*Proof.* For $g, h \in G$:

$$
g \cdot x = h \cdot x \iff (h^{-1}g) \cdot x = x \iff h^{-1}g \in G_x \iff gG_x = hG_x .
$$

Reading this from right to left says the map is well defined; from left to right, that it is one-to-one. It is onto the
orbit by definition. The second formula is Lagrange. $\square$

So the size of every orbit divides the order of the group.

**Checks on the cube.** The rotation group $G$ has order 24, and:

| $G$ acting on | orbit size | stabilizer | product |
|---|---|---|---|
| faces | 6 | 4 rotations about the face axis | 24 |
| corners | 8 | 3 rotations about the long diagonal | 24 |
| edges | 12 | 2 (identity and the half-turn about the edge-midpoint axis) | 24 |

Three different counts of the same group. Acting on the four long diagonals, the action is faithful and every
permutation of the diagonals happens, which shows the rotation group of the cube is isomorphic to $S_4$. (This is a
standard argument; see Armstrong in Further reading.)

**Orbit-stabilizer for conjugation.** The size of the conjugacy class of $x$ is $[G : C_G(x)]$. In $S_n$ the class of
a permutation with cycle shape having $m_k$ cycles of length $k$ has size

$$
\frac{n!}{\prod_k k^{m_k}\, m_k!},
$$

because the centralizer has order $\prod_k k^{m_k} m_k!$ (rotate each cycle, permute cycles of equal length).
**Check** for $S_4$: the shape $(1\,2)(3\,4)$ has $m_2 = 2$, so $24/(2^2 \cdot 2!) = 3$; a 3-cycle has $m_1 = 1,
m_3 = 1$, so $24/(1 \cdot 3) = 8$, matching §14.5.

**Orbit-stabilizer for subgroups.** The number of conjugates of $H$ is $[G : N_G(H)]$. This will count Sylow subgroups.

## 16.3 Burnside counting

*Level: advanced.*

How many different necklaces can you make with four beads, each either orange or blue? There are $2^4 = 16$ ways to
colour four positions, but rotating a necklace does not make a new one. We want the number of **orbits** of the
rotation group $\mathbb{Z}_4$ acting on the 16 colourings.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 70" role="img" aria-label="Six necklaces of four beads: all blue, one orange, two adjacent orange, two opposite orange, three orange, all orange">
<rect x="15" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="15" cy="20" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/><circle cx="45" cy="20" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/><circle cx="45" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/><circle cx="15" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
<rect x="75" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="75" cy="20" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="105" cy="20" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/><circle cx="105" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/><circle cx="75" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
<rect x="135" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="135" cy="20" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="165" cy="20" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="165" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/><circle cx="135" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
<rect x="195" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="195" cy="20" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="225" cy="20" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/><circle cx="225" cy="50" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="195" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
<rect x="255" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="255" cy="20" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="285" cy="20" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="285" cy="50" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="255" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
<rect x="315" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="315" cy="20" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="345" cy="20" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="345" cy="50" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/><circle cx="315" cy="50" r="7" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
</svg>
</div>

The six necklaces of four beads in two colours, up to rotation. The orbit sizes are 1, 4, 4, 2, 4, 1, adding to 16.

Listing works for 16 colourings but not for a million. The tool is a lemma that counts orbits by counting fixed points.

**Theorem (Burnside's lemma).** If a finite group $G$ acts on a finite set $X$, the number of orbits is

$$
\frac{1}{|G|}\sum_{g \in G} |\operatorname{Fix}(g)|, \qquad \operatorname{Fix}(g) = \{x \in X : g \cdot x = x\},
$$

the average number of points fixed by an element of $G$.

*Proof.* Count the pairs $(g, x)$ with $g \cdot x = x$ in two ways. By $g$: $\sum_g |\operatorname{Fix}(g)|$. By $x$:
$\sum_x |G_x|$. By orbit-stabilizer $|G_x| = |G|/|G \cdot x|$, so

$$
\sum_{x} |G_x| = |G| \sum_{x} \frac{1}{|G \cdot x|} .
$$

In the last sum, the points of each orbit $O$ contribute $|O| \cdot \frac{1}{|O|} = 1$, so the sum is the number of
orbits. Divide by $|G|$. $\square$

The name is a historical accident: William Burnside put it in his 1897 book *Theory of Groups of Finite Order*, but it
was known to Cauchy (1845) and to Frobenius (1887). Some books call it the Cauchy-Frobenius lemma, or "the lemma that is
not Burnside's".

**Worked example: the necklaces again.** The group is $\{e, r, r^2, r^3\}$, rotations by 0, 1, 2, 3 places.

- $e$ fixes all $2^4 = 16$ colourings.
- $r$ (one place) fixes a colouring only if all four beads are equal: 2.
- $r^2$ (two places) fixes colourings with bead 1 = bead 3 and bead 2 = bead 4: $2^2 = 4$.
- $r^3$: like $r$, 2.

Orbits: $(16 + 2 + 4 + 2)/4 = 24/4 = 6$. **Check:** matches the picture.

The general rule: a permutation of the positions fixes a colouring exactly when the colouring is constant on each of its
cycles, so with $k$ colours it fixes $k^{c}$ colourings, where $c$ is its number of cycles.

**Worked example: six beads, and benzene.** With six beads in two colours under rotation ($\mathbb{Z}_6$), the rotation
by $j$ places has $\gcd(j, 6)$ cycles, so the count is

$$
\frac{2^6 + 2^1 + 2^2 + 2^3 + 2^2 + 2^1}{6} = \frac{84}{6} = 14 .
$$

If the necklace can also be flipped over (the dihedral group $D_6$ of order 12), add the six reflections: three through
opposite beads have 4 cycles each ($2^4 = 16$ fixed), three through opposite gaps have 3 cycles ($2^3 = 8$ fixed). Total
$(84 + 48 + 24)/12 = 156/12 = 13$. Chemists know this number: put a hydrogen or a chlorine atom at each of the six
carbon atoms of a benzene ring, and you get exactly 13 different molecules, from benzene ($\mathrm{C_6H_6}$) through the
three dichlorobenzenes (ortho, meta, para) to hexachlorobenzene. George Pólya developed this counting into a general
theory in 1937, motivated partly by counting chemical isomers.

**Worked example: colouring a cube.** Paint each face of a cube one of $k$ colours. How many cubes are different up to
rotation? The 24 rotations, by type:

| rotation type | how many | cycles on the 6 faces | fixed colourings |
|---|---|---|---|
| identity | 1 | 6 | $k^6$ |
| 90 or 270 degrees about a face axis | 6 | 3 (top, bottom, a 4-cycle) | $k^3$ |
| 180 degrees about a face axis | 3 | 4 (top, bottom, two 2-cycles) | $k^4$ |
| 120 or 240 degrees about a long diagonal | 8 | 2 (two 3-cycles) | $k^2$ |
| 180 degrees about an edge axis | 6 | 3 (three 2-cycles) | $k^3$ |

(Check: $1 + 6 + 3 + 8 + 6 = 24$.) The number of cubes is

$$
\frac{k^6 + 3k^4 + 12k^3 + 8k^2}{24} .
$$

For $k = 2$: $(64 + 48 + 96 + 32)/24 = 240/24 = 10$. For $k = 3$: $(729 + 243 + 324 + 72)/24 = 1368/24 = 57$. The
formula must give a whole number for every $k$, which is a nontrivial divisibility fact proved for free.

### Try it in Python

```python
from itertools import product

def count_orbits(n, k):
    """Necklaces of n beads in k colours, up to rotation, by brute force."""
    seen, orbits = set(), 0
    for c in product(range(k), repeat=n):
        if c not in seen:
            orbits += 1
            seen.update(c[i:] + c[:i] for i in range(n))
    return orbits

print(count_orbits(4, 2), count_orbits(6, 2))   # 6 14
```

## 16.4 The class equation, and $p$-groups have a centre

*Level: advanced.*

Let $G$ act on itself by conjugation. The orbits are the conjugacy classes, and they partition $G$. An element $z$ is
alone in its class exactly when $gzg^{-1} = z$ for all $g$, that is, when $z$ is in the centre $Z(G)$. Collect those
one-element classes together, and pick one representative $x_1, \dots, x_r$ from each of the other classes. Counting
elements and using orbit-stabilizer:

**Theorem (class equation).** For a finite group $G$,

$$
|G| = |Z(G)| + \sum_{i=1}^{r} [G : C_G(x_i)],
$$

where each $[G : C_G(x_i)]$ is a divisor of $|G|$ greater than 1.

**Examples.** $S_3$: $6 = 1 + 2 + 3$ (identity; two 3-cycles; three transpositions). $D_4$: $8 = 2 + 2 + 2 + 2$, where
$|Z(D_4)| = 2$ ($e$ and $r^2$) and the classes $\{r, r^3\}$, $\{s, r^2s\}$, $\{rs, r^3s\}$ have size 2. $A_4$:
$12 = 1 + 3 + 4 + 4$ (the 3-cycles split into two classes of 4 inside $A_4$). $S_4$: $24 = 1 + 3 + 6 + 6 + 8$.

A **$p$-group** is a group whose order is a power of a prime $p$.

**Theorem.** If $|G| = p^n$ with $n \ge 1$, then $Z(G) \ne \{e\}$.

*Proof.* In the class equation, every $[G : C_G(x_i)]$ is a divisor of $p^n$ greater than 1, hence divisible by $p$.
And $|G|$ is divisible by $p$. So $|Z(G)| = |G| - \sum [G:C_G(x_i)]$ is divisible by $p$. Since $e \in Z(G)$,
$|Z(G)| \ge 1$, so $|Z(G)| \ge p$. $\square$

**Corollary.** Every group of order $p^2$ is abelian, so it is $\mathbb{Z}_{p^2}$ or $\mathbb{Z}_p \times \mathbb{Z}_p$.

*Proof.* $|Z(G)|$ is $p$ or $p^2$. If it were $p$, then $G/Z(G)$ would have order $p$, so it would be cyclic, and a
group with $G/Z(G)$ cyclic is abelian (exercise 8 of [Chapter 15](15-Homomorphisms-and-Quotients.md)), giving
$Z(G) = G$, a contradiction. So $Z(G) = G$. By the classification of abelian groups (§15.8), $G$ is
$\mathbb{Z}_{p^2}$ or $\mathbb{Z}_p \times \mathbb{Z}_p$. $\square$

The same counting trick gives a lemma we will use three times.

**Fixed point lemma.** If a $p$-group $P$ acts on a finite set $X$, and $X^P$ is the set of points fixed by every
element of $P$, then

$$
|X| \equiv |X^P| \pmod p .
$$

*Proof.* The orbits partition $X$. An orbit of size 1 is a fixed point. Every other orbit has size $[P : P_x]$, a
divisor of $|P| = p^n$ bigger than 1, hence divisible by $p$. $\square$

## 16.5 Cauchy's theorem

*Level: advanced to expert.*

Lagrange's converse fails in general (§14.6), but it holds for primes.

**Theorem (Cauchy, 1845).** If $G$ is a finite group and $p$ is a prime dividing $|G|$, then $G$ has an element of order
$p$.

The proof below, by James McKay (1959), is short and entirely a counting argument.

*Proof.* Let $n = |G|$ and consider the set of $p$-tuples whose product is the identity:

$$
X = \{(x_1, x_2, \dots, x_p) \in G^p : x_1x_2\cdots x_p = e\}.
$$

You may choose $x_1, \dots, x_{p-1}$ freely, and then $x_p = (x_1\cdots x_{p-1})^{-1}$ is forced, so
$|X| = n^{p-1}$, which is divisible by $p$.

The cyclic group $\mathbb{Z}_p$ acts on $X$ by rotating tuples: $(x_1, x_2, \dots, x_p) \mapsto (x_2, \dots, x_p, x_1)$.
This keeps us inside $X$: if $x_1 y = e$ where $y = x_2\cdots x_p$, then $y = x_1^{-1}$, so $y x_1 = e$ too.

$\mathbb{Z}_p$ is a $p$-group, so by the fixed point lemma the number of fixed tuples is $\equiv |X| \equiv 0
\pmod p$. A tuple is fixed by rotation exactly when all its entries are equal, $(x, x, \dots, x)$ with $x^p = e$. The
tuple $(e, \dots, e)$ is one, so there are at least $p$ fixed tuples, and in particular some $(x, \dots, x)$ with
$x \ne e$ and $x^p = e$. Since $p$ is prime, $x$ has order exactly $p$. $\square$

**Consequences.** A finite group is a $p$-group if and only if every element has order a power of $p$ (if another prime
$q$ divided $|G|$, Cauchy would give an element of order $q$). And the lemma of §14.7 (even order implies an element of
order 2) is the case $p = 2$.

**History.** Augustin-Louis Cauchy proved this theorem in 1845, in a long series of papers on permutations. McKay's
proof appeared in the *American Mathematical Monthly* in 1959 under the title "Another proof of Cauchy's group theorem".

## 16.6 The Sylow theorems

*Level: expert.*

Cauchy gives subgroups of prime order. Ludwig Sylow, a Norwegian schoolteacher, proved in 1872 that much more is true:
there are subgroups of the largest possible prime-power order, and they are all alike.

Throughout, $|G| = p^k m$ with $p$ prime, $k \ge 1$ and $p \nmid m$. A subgroup of order $p^k$ is called a **Sylow
$p$-subgroup**; let $n_p$ be the number of them.

**Theorem (Sylow).**

1. **Existence.** $G$ has a Sylow $p$-subgroup.
2. **Conjugacy.** Any two Sylow $p$-subgroups are conjugate, and every $p$-subgroup of $G$ is contained in some Sylow
   $p$-subgroup.
3. **Counting.** $n_p$ divides $m$, and $n_p \equiv 1 \pmod p$. Moreover $n_p = [G : N_G(P)]$ for any Sylow $P$.

A useful corollary of 2: **a Sylow $p$-subgroup is normal if and only if $n_p = 1$** (its conjugates are all the Sylow
$p$-subgroups, and it is normal exactly when it is its only conjugate).

### Proof of existence

*Proof of 1.* By strong induction on $|G|$. If $|G| = p^k$ the group itself is the Sylow subgroup. Otherwise, there are
two cases.

*Case A: $p$ divides $|Z(G)|$.* By Cauchy, $Z(G)$ has an element $z$ of order $p$. The subgroup $N = \langle z \rangle$
is central, hence normal. The quotient $G/N$ has order $p^{k-1}m$, smaller than $|G|$. If $k = 1$, $N$ itself is a Sylow
subgroup. If $k \ge 2$, by induction $G/N$ has a subgroup $\bar P$ of order $p^{k-1}$. By the correspondence theorem
(§15.6), $\bar P = P/N$ for a subgroup $P$ with $N \le P \le G$, and $|P| = |\bar P|\,|N| = p^{k-1} \cdot p = p^k$.

*Case B: $p$ does not divide $|Z(G)|$.* In the class equation
$|G| = |Z(G)| + \sum [G : C_G(x_i)]$, the left side is divisible by $p$ and $|Z(G)|$ is not, so some term
$[G : C_G(x_i)]$ is not divisible by $p$. Then $|C_G(x_i)| = |G|/[G : C_G(x_i)]$ is divisible by $p^k$. Since $x_i$ is
not central, $C_G(x_i) \ne G$, so it is smaller than $G$, and by induction it contains a subgroup of order $p^k$, which
is a Sylow $p$-subgroup of $G$. $\square$

(Helmut Wielandt gave a different proof in 1959, letting $G$ act on all subsets of size $p^k$ and counting with a
binomial coefficient. Both are standard.)

### Proof of conjugacy

*Proof of 2.* Let $P$ be a Sylow $p$-subgroup and $Q$ any $p$-subgroup. Let $Q$ act on the set $G/P$ of left cosets of
$P$ by left multiplication. There are $|G/P| = m$ cosets, and $p \nmid m$. By the fixed point lemma, the number of cosets
fixed by all of $Q$ is $\equiv m \not\equiv 0 \pmod p$; so there is at least one, say $gP$. Fixed means $qgP = gP$ for
all $q \in Q$, i.e. $g^{-1}qg \in P$, i.e. $Q \subseteq gPg^{-1}$. So $Q$ lies in the Sylow subgroup $gPg^{-1}$. If $Q$
is itself a Sylow subgroup, the two have the same size, so $Q = gPg^{-1}$. $\square$

### Proof of counting

*Proof of 3.* By part 2, $G$ acts transitively by conjugation on the set $\operatorname{Syl}_p$ of Sylow
$p$-subgroups, and the stabilizer of $P$ is $N_G(P)$. By orbit-stabilizer, $n_p = [G : N_G(P)]$. Since
$P \le N_G(P) \le G$, the index $[G : N_G(P)]$ divides $[G : P] = m$ (Corollary 4 of §14.4).

For the congruence, let $P$ itself act on $\operatorname{Syl}_p$ by conjugation. $P$ fixes $P$. Suppose $P$ also fixes
some $Q \in \operatorname{Syl}_p$, so $P \le N_G(Q)$. Then $P$ and $Q$ are both Sylow $p$-subgroups of the group
$N_G(Q)$ (their order $p^k$ is the largest power of $p$ dividing $|G|$, hence also $|N_G(Q)|$). By part 2 applied inside
$N_G(Q)$, they are conjugate there: $P = nQn^{-1}$ for some $n \in N_G(Q)$. But $n$ normalizes $Q$, so $nQn^{-1} = Q$.
Thus $P = Q$: $P$ is the only fixed point. By the fixed point lemma, $n_p \equiv 1 \pmod p$. $\square$

**Worked example: $S_4$, $p = 2$ and $p = 3$.** $|S_4| = 24 = 2^3 \cdot 3$.

- $n_3$ divides 8 and is $\equiv 1 \pmod 3$: so $n_3 \in \{1, 4\}$. In fact there are 8 three-cycles, giving
  4 subgroups of order 3, so $n_3 = 4$.
- $n_2$ divides 3 and is odd: $n_2 \in \{1, 3\}$. The Sylow 2-subgroups have order 8; they are the three copies of $D_4$
  inside $S_4$, the symmetries of the three ways to arrange 1, 2, 3, 4 at the corners of a square up to rotation and
  reflection. So $n_2 = 3$.

**Worked example: $A_5$.** $|A_5| = 60 = 2^2 \cdot 3 \cdot 5$. The 24 five-cycles give $24/4 = 6$ subgroups of order 5,
and $6 \equiv 1 \pmod 5$, $6 \mid 12$. The 20 three-cycles give $10$ subgroups of order 3: $10 \equiv 1 \pmod 3$,
$10 \mid 20$. **Check.**

## 16.7 Using Sylow

*Level: expert.*

The Sylow theorems turn questions about groups into arithmetic. The typical move: list the divisors of $m$ that are
$\equiv 1 \pmod p$. If only 1 qualifies, the Sylow subgroup is normal.

### Groups of order 15: only one

Let $|G| = 15 = 3 \cdot 5$.

- $n_3$ divides 5 and $n_3 \equiv 1 \pmod 3$: the divisors of 5 are 1 and 5, and $5 \equiv 2$. So $n_3 = 1$.
- $n_5$ divides 3 and $n_5 \equiv 1 \pmod 5$: only $n_5 = 1$.

So the Sylow subgroups $P_3 \cong \mathbb{Z}_3$ and $P_5 \cong \mathbb{Z}_5$ are both normal. They meet trivially (orders
coprime) and $|P_3P_5| = 15$ by the product formula, so by the internal direct product theorem (§15.7),
$G \cong \mathbb{Z}_3 \times \mathbb{Z}_5 \cong \mathbb{Z}_{15}$. **Every group of order 15 is cyclic.**

The same argument proves: **if $p < q$ are primes and $p \nmid q - 1$, every group of order $pq$ is cyclic.** ($n_q$
divides $p$ and is $\equiv 1 \bmod q$, so it is 1 since $p < q$; $n_p$ divides $q$ and is $\equiv 1 \bmod p$, and
$q \not\equiv 1 \bmod p$, so it is 1.) Orders 15, 33, 35, 51, 65, 77, 85, 87, 91, 95 all have only the cyclic group.

### Groups of order 21: exactly two

Let $|G| = 21 = 3 \cdot 7$. Now $n_7$ divides 3 and is $\equiv 1 \pmod 7$, so $n_7 = 1$: there is a normal subgroup
$N = \langle a \rangle$ of order 7. But $n_3$ divides 7 and is $\equiv 1 \pmod 3$, which allows $n_3 = 1$ or $n_3 = 7$
(as $7 \equiv 1 \pmod 3$).

- If $n_3 = 1$, both Sylow subgroups are normal and $G \cong \mathbb{Z}_{21}$ as before.
- If $n_3 = 7$, take $b$ of order 3. Since $N$ is normal, $bab^{-1} = a^j$ for some $j$, and then
  $a = b^3ab^{-3} = a^{j^3}$, so $j^3 \equiv 1 \pmod 7$. The solutions are $j = 1, 2, 4$. If $j = 1$, $a$ and $b$
  commute and $G$ is abelian, hence cyclic, contradicting $n_3 = 7$. So $j = 2$ or $4$; replacing $b$ by $b^2 = b^{-1}$
  turns $j = 4$ into $j = 2$ (since $4^2 = 16 \equiv 2 \pmod 7$). So $G$ is generated by $a, b$ with
  $a^7 = e$, $b^3 = e$ and $bab^{-1} = a^2$, and these rules fix the multiplication table (every element is $a^ib^j$).

Does such a group exist? Yes: the maps $x \mapsto ux + v$ of $\mathbb{Z}_7$ to itself with $u \in \{1, 2, 4\}$ (the
nonzero squares mod 7) and $v \in \mathbb{Z}_7$. There are $3 \times 7 = 21$ of them, they are closed under composition
(the $u$'s multiply, and $\{1, 2, 4\}$ is a subgroup of $U(7)$), and they do not commute. With $a: x \mapsto x + 1$ and
$b: x \mapsto 2x$, one checks $bab^{-1}: x \mapsto 2(x/2 + 1) = x + 2$, which is $a^2$. It has 14 elements of order 3,
so indeed $n_3 = 7$. This is the **semidirect product** $\mathbb{Z}_7 \rtimes \mathbb{Z}_3$.

**Conclusion:** there are exactly two groups of order 21. In general, for primes $p < q$ with $p \mid q - 1$, there are
exactly two groups of order $pq$, the cyclic one and one nonabelian semidirect product.

### Groups of order $2p$

For an odd prime $p$, let $|G| = 2p$. Then $n_p$ divides 2 and is $\equiv 1 \pmod p$, so $n_p = 1$: there is a normal
$\langle a \rangle$ of order $p$. Take $b$ of order 2 (Cauchy). Then $bab^{-1} = a^j$ with $j^2 \equiv 1 \pmod p$, so
$j \equiv \pm 1$. If $j = 1$, $G$ is abelian and $\cong \mathbb{Z}_{2p}$. If $j = -1$, $bab^{-1} = a^{-1}$, which is the
rule for the dihedral group $D_p$. So **a group of order $2p$ is cyclic or dihedral**, which explains orders 6, 10, 14
in the table of §14.7.

### Proving groups are not simple

A group is **simple** if its only normal subgroups are $\{e\}$ and itself. A normal Sylow subgroup, or any other
nontrivial proper normal subgroup, shows a group is not simple. Counting elements is the key trick: distinct subgroups
of prime order $p$ meet only in $e$, so $n_p$ subgroups of order $p$ contain $n_p(p - 1)$ elements of order $p$.

**Order 12.** $n_3 \in \{1, 4\}$. If $n_3 = 4$, the four subgroups of order 3 contain $4 \times 2 = 8$ elements of order
3. That leaves $12 - 8 = 4$ elements, exactly enough for one Sylow 2-subgroup (order 4), which is then the only one, so
$n_2 = 1$. Either way some Sylow subgroup is normal. (For $A_4$, $n_3 = 4$ and the normal Sylow 2-subgroup is
$V$.)

**Order 30.** $n_3 \in \{1, 10\}$ and $n_5 \in \{1, 6\}$. If both were greater than 1 we would have $10 \times 2 = 20$
elements of order 3 and $6 \times 4 = 24$ of order 5: 44 elements in a group of 30. So $n_3 = 1$ or $n_5 = 1$.

**Order 56.** $n_7 \in \{1, 8\}$. If $n_7 = 8$, there are $8 \times 6 = 48$ elements of order 7, leaving 8 elements,
exactly one Sylow 2-subgroup, which is then normal.

**Order $p^n$, $n \ge 2$.** The centre is a nontrivial normal subgroup; if it is all of $G$, any subgroup of order $p$
is normal. Not simple.

### $A_5$ is simple

**Theorem.** The alternating group $A_5$, of order 60, is simple.

*Proof.* A normal subgroup is a union of conjugacy classes (it contains all conjugates of its elements), including the
class $\{e\}$, and by Lagrange its order divides 60. So we need the classes of $A_5$. The even permutations of five
things have cycle shapes: $e$ (1 element), 3-cycles (20), double transpositions (15), 5-cycles (24). A class of $S_5$
either stays a single class in $A_5$ or splits into two halves: it stays whole when the centralizer in $S_5$ contains
an odd permutation (then the $A_5$-centralizer has half the size and, by orbit-stabilizer, the class has the same size).
$(1\,2\,3)$ commutes with the odd $(4\,5)$, and $(1\,2)(3\,4)$ commutes with the odd $(1\,2)$; so those classes stay
whole, with 20 and 15 elements. The centralizer of $(1\,2\,3\,4\,5)$ in $S_5$ has order $120/24 = 5$, so it is
$\langle (1\,2\,3\,4\,5) \rangle$, all even; that class splits into two classes of 12. So

$$
60 = 1 + 12 + 12 + 15 + 20 .
$$

A normal subgroup has order 1 plus a sum of some of $12, 12, 15, 20$. Running through the sixteen subsets, the possible
values are 1, 13, 16, 21, 25, 28,
33, 36, 40, 45, 48 and 60, and the only ones dividing 60 are 1 and 60. So the only
normal subgroups are $\{e\}$ and $A_5$. $\square$

$A_5$ is also the rotation group of the regular icosahedron and of the dodecahedron. It is the smallest simple group that
is not cyclic of prime order, and it is the reason the general quintic equation has no formula in radicals
([Chapter 20](20-Galois-Theory.md)).

## 16.8 Simple groups and the classification

*Level: expert (an honest summary).*

### Simple groups are the atoms

If $N$ is a nontrivial proper normal subgroup of $G$, then $G$ is built from two smaller groups, $N$ and $G/N$. Repeating,
every finite group has a **composition series**

$$
\{e\} = G_0 \trianglelefteq G_1 \trianglelefteq \cdots \trianglelefteq G_r = G
$$

with each $G_{i}/G_{i-1}$ simple. The **Jordan-Hölder theorem** (Camille Jordan 1870, Otto Hölder 1889) says that the
list of these simple **composition factors**, with multiplicities, does not depend on the series chosen. They are to a
group what prime factors are to a number. For example, $S_4$ has the series $\{e\} \trianglelefteq V'
\trianglelefteq V \trianglelefteq A_4 \trianglelefteq S_4$ (with $V' = \{e, (1\,2)(3\,4)\}$), and factors
$\mathbb{Z}_2, \mathbb{Z}_2, \mathbb{Z}_3, \mathbb{Z}_2$.

The analogy is imperfect in one important way: different groups can have the same factors ($\mathbb{Z}_4$ and
$\mathbb{Z}_2 \times \mathbb{Z}_2$ both have $\mathbb{Z}_2, \mathbb{Z}_2$), and putting atoms together, the "extension
problem", is very hard. But the first job is to know the atoms.

Groups whose composition factors are all cyclic are called **solvable**. The name comes from equations: Galois proved
that a polynomial equation can be solved by radicals exactly when its group is solvable ([Chapter 20](20-Galois-Theory.md)).

### The list

The abelian simple groups are the $\mathbb{Z}_p$, $p$ prime (an abelian group has every subgroup normal). The
**classification of finite simple groups** says that every finite simple group is one of:

1. a cyclic group $\mathbb{Z}_p$ of prime order;
2. an alternating group $A_n$ with $n \ge 5$;
3. a **group of Lie type**: one of 16 infinite families of matrix groups over finite fields, such as $PSL_n(q)$, the
   $n \times n$ matrices of determinant 1 over the field with $q$ elements, modulo scalar matrices (with a few small
   exceptions that are not simple);
4. one of **26 sporadic groups**, which fit no family.

The smallest nonabelian simple groups are $A_5$ (order 60) and $PSL_2(7)$ (order 168), the symmetry group of the Fano
plane, the smallest projective plane. The first sporadic groups, the five Mathieu groups, were found by Émile Mathieu in
the 1860s and 1870s, nearly a century before the others. The largest sporadic group, the **Monster**, has order

$$
2^{46} \cdot 3^{20} \cdot 5^9 \cdot 7^6 \cdot 11^2 \cdot 13^3 \cdot 17 \cdot 19 \cdot 23 \cdot 29 \cdot 31 \cdot 41
\cdot 47 \cdot 59 \cdot 71 ,
$$

a 54-digit number, about $8 \times 10^{53}$. Its existence was predicted in the early 1970s by Bernd Fischer and Robert
Griess, and Griess constructed it by hand in 1982. Its smallest faithful representation by matrices uses matrices of
size 196,883. John McKay noticed
that $196{,}884 = 196{,}883 + 1$ is a coefficient of the $j$-function from number theory, which led to the "monstrous
moonshine" conjectures of John Conway and Simon Norton (1979), proved by Richard Borcherds in 1992 (part of his Fields
Medal citation in 1998).

### The proof

The proof is not a single argument but a programme carried out by over a hundred mathematicians, mostly between the
1950s and the early 1980s, in hundreds of journal articles totalling tens of thousands of pages. A landmark was the
**Feit-Thompson theorem** (Walter Feit and John Thompson, 1963): every finite group of odd order is solvable. Its proof
fills a 255-page issue of the *Pacific Journal of Mathematics*. It implies that every nonabelian finite simple group has
even order, and so contains elements of order 2, whose centralizers became the main tool of the programme.

The classification was announced as complete in the early 1980s. A gap remained in the case of "quasithin" groups; Michael
Aschbacher and Stephen Smith closed it in two volumes of about 1,200 pages published in 2004. Daniel Gorenstein, Richard
Lyons and Ronald Solomon began in 1994 a series of books giving a "second generation" proof, organised and checked in one
place; the series is still in progress. The Feit-Thompson theorem was verified in full by computer, in the Coq proof
assistant, by a team led by Georges Gonthier (2012). The full classification has not been formally verified.

Honestly, then: the classification is accepted by experts and used everywhere, but no single person has checked every
page, and the effort to write it out in a form one person can read is ongoing.

## Check yourself

??? question "1. The symmetry group $D_6$ of a regular hexagon (order 12) acts on the six corners. Find the stabilizer of a corner and check orbit-stabilizer."

    The action is transitive (rotations move any corner to any other), so the orbit has 6 elements. The stabilizer of a
    corner is the identity and the reflection through the axis through that corner and the opposite one: 2 elements.
    $6 \times 2 = 12$.

??? question "2. How many rotations does a regular tetrahedron have? Use orbit-stabilizer in two ways."

    Faces: 4 faces in one orbit, stabilizer of a face is the 3 rotations about the axis through it: $4 \times 3 = 12$.
    Edges: 6 edges, stabilizer of an edge is the identity and the half-turn about the axis through its midpoint and the
    midpoint of the opposite edge: $6 \times 2 = 12$. (The group is $A_4$.)

??? question "3. How many necklaces of 5 beads in 2 colours are there up to rotation? Up to rotation and reflection?"

    Rotations by 1, 2, 3, 4 places each have one cycle (5 is prime): $(32 + 4 \cdot 2)/5 = 40/5 = 8$. Reflections (5 of
    them, each through one bead and the opposite gap) have 3 cycles: $2^3 = 8$ each. Under $D_5$: $(40 + 40)/10 = 8$.
    Both answers are 8.

??? question "4. How many ways are there to colour the corners of a square with 3 colours, up to rotations and reflections?"

    $D_4$ has 8 elements. Identity: $3^4 = 81$. Rotations by 90 and 270 degrees: 1 cycle, $3$ each. Rotation by 180: 2
    cycles, $9$. Two reflections through opposite corners: 3 cycles, $27$ each. Two reflections through edge midpoints:
    2 cycles, $9$ each. Total $81 + 6 + 9 + 54 + 18 = 168$, and $168/8 = 21$.

??? question "5. Write the class equation of $D_5$ (order 10)."

    Centre $\{e\}$ (for odd $n$ the dihedral centre is trivial). Rotation classes $\{r, r^4\}$ and $\{r^2, r^3\}$, and
    all five reflections in one class. $10 = 1 + 2 + 2 + 5$.

??? question "6. Show that a group of order 35 is cyclic and a group of order 45 is abelian."

    35: $n_5 \mid 7$, $n_5 \equiv 1 \pmod 5$ gives 1; $n_7 \mid 5$, $\equiv 1 \pmod 7$ gives 1. Both normal, so
    $G \cong \mathbb{Z}_5 \times \mathbb{Z}_7 \cong \mathbb{Z}_{35}$.
    45 $= 9 \cdot 5$: $n_3 \mid 5$, $\equiv 1 \pmod 3$ gives 1; $n_5 \mid 9$, $\equiv 1 \pmod 5$ gives 1 (9 and 3 are
    not $\equiv 1$). So $G \cong P_9 \times P_5$, with $P_9$ of order $3^2$, abelian by §16.4. So $G$ is abelian:
    $\mathbb{Z}_{45}$ or $\mathbb{Z}_3 \times \mathbb{Z}_{15}$.

??? question "7. Prove that no group of order 20 is simple."

    $20 = 2^2 \cdot 5$. $n_5$ divides 4 and is $\equiv 1 \pmod 5$, so $n_5 = 1$. The Sylow 5-subgroup is normal.

??? question "8. Prove that no group of order 36 is simple. (Hint: let $G$ act on the cosets of a Sylow 3-subgroup.)"

    $n_3 \in \{1, 4\}$. If 1, done. If $n_3 = 4$, let $P$ be a Sylow 3-subgroup (order 9); $G$ acts on the 4 left
    cosets of $P$, giving a homomorphism $\varphi: G \to S_4$. Its kernel is not all of $G$ (the action is transitive),
    and it is not $\{e\}$, because $|G| = 36$ does not divide $|S_4| = 24$, so $\varphi$ is not one-to-one. So
    $\ker\varphi$ is a nontrivial proper normal subgroup.

??? question "9. Use Cauchy's theorem to show that a group of order $2p$, $p$ an odd prime, has exactly one subgroup of order $p$, and that it is normal."

    Cauchy gives an element of order $p$, so a subgroup $H$ of order $p$. It has index 2, so it is normal. If $K$ were
    another, $H \cap K = \{e\}$ and $|HK| = p^2 > 2p$ (as $p > 2$), impossible. So it is unique.

??? question "10. Find $n_2$, $n_3$, $n_5$ for $A_5$, and check them against Sylow's theorem."

    $60 = 4 \cdot 3 \cdot 5$. $n_5 = 6$ (24 five-cycles, 4 per subgroup); $6 \mid 12$, $6 \equiv 1 \pmod 5$.
    $n_3 = 10$ (20 three-cycles, 2 per subgroup); $10 \mid 20$, $10 \equiv 1 \pmod 3$. $n_2 = 5$: the Sylow
    2-subgroups have order 4, and each is a Klein group made of $e$ and three double transpositions on four of the
    five points (one for each point left out); $5 \mid 15$, $5 \equiv 1 \pmod 2$.

??? question "11. Show that a group of order $p^n$, $n \ge 1$, has a normal subgroup of order $p$."

    The centre $Z(G)$ is nontrivial (§16.4). By Cauchy it has an element $z$ of order $p$. $\langle z \rangle$ is
    central, so $gzg^{-1} = z$ for all $g$, and it is normal of order $p$.

??? question "12. Count the distinct ways to colour the faces of a cube with exactly 2 colours, each used 3 times, up to rotation."

    Use Burnside on the 20 colourings with three faces of each colour. Identity: 20. 90-degree face rotations (6): the
    4-cycle must be one colour, leaving 2 faces, so impossible (4 > 3): 0. 180-degree face rotations (3): cycles of
    sizes 1, 1, 2, 2; three faces of one colour means $1 + 2$: choose which single face (2 ways) and which 2-cycle (2
    ways): 4 each, 12 total. Vertex rotations (8): two 3-cycles, one per colour, 2 ways each: 16. Edge rotations (6):
    three 2-cycles, cannot make 3: 0. Total $(20 + 12 + 16)/24 = 48/24 = 2$. (The two: three faces meeting at a corner,
    or three faces in a "U" band.)

## What you learned

- An action of $G$ on $X$ is a homomorphism $G \to \operatorname{Sym}(X)$; orbits partition $X$, stabilizers are
  subgroups, and every group is a permutation group (Cayley).
- Orbit-stabilizer: $|G| = |G \cdot x|\,|G_x|$. It counts symmetries, conjugacy classes and conjugate subgroups.
- Burnside: the number of orbits is the average number of fixed points. It counts necklaces, cubes and molecules.
- The class equation shows $p$-groups have nontrivial centre, so groups of order $p^2$ are abelian.
- Cauchy: a prime dividing $|G|$ is the order of some element (McKay's proof).
- Sylow: subgroups of order $p^k$ exist, are all conjugate, and number $n_p \equiv 1 \pmod p$, $n_p \mid m$.
- With Sylow: groups of order 15 are cyclic, there are two groups of order 21, groups of order 12, 30, 56 are not simple,
  and $A_5$ is simple.
- Finite simple groups are classified: cyclic, alternating, Lie type, and 26 sporadic groups up to the Monster.

**Next:** [Chapter 17](17-Rings-and-Ideals.md), structures with two operations, addition and multiplication: rings,
ideals and quotient rings.

## Further reading

- D. S. Dummit and R. M. Foote, *Abstract Algebra*, 3rd edition, 2004. Chapter 4 (actions, class equation, Sylow) and
  Section 6.2 (applications).
- M. A. Armstrong, *Groups and Symmetry*, 1988. Rotation groups of solids and counting with Burnside.
- J. J. Rotman, *An Introduction to the Theory of Groups*, 4th edition, 1995.
- J. H. McKay, "Another proof of Cauchy's group theorem", *American Mathematical Monthly* 66, 1959.
- L. Sylow, "Théorèmes sur les groupes de substitutions", *Mathematische Annalen* 5, 1872.
- W. Burnside, *Theory of Groups of Finite Order*, 1897.
- G. Pólya, "Kombinatorische Anzahlbestimmungen für Gruppen, Graphen und chemische Verbindungen", *Acta Mathematica* 68,
  1937.
- W. Feit and J. G. Thompson, "Solvability of groups of odd order", *Pacific Journal of Mathematics* 13, 1963.
- R. Solomon, "A brief history of the classification of the finite simple groups", *Bulletin of the AMS* 38, 2001.
- M. Ronan, *Symmetry and the Monster*, 2006. A popular account of the classification and moonshine.
- On this site: [Rotational symmetry](../../topics/geometry/level-4/06-rotational-symmetry.md),
  [Lines of symmetry](../../topics/geometry/level-2/02-lines-of-symmetry.md), the [Algebra book](index.md).
