# 18. Knot theory

*Tie a knot in a piece of string and glue the ends together. Can you undo it without cutting? For an overhand knot you
cannot, as anyone who has tried knows, but knowing is not proving. As a space on its own, a knotted loop is just a
circle; what is knotted is the way it sits in space. In this chapter you will make that precise, reduce it to drawings
on paper and three local moves, and build invariants that prove knots are knotted: colourings, the linking number and
the Jones polynomial, which you will compute by hand for the trefoil. Then you will see where knots appear in DNA and
chemistry, and meet an open problem that sounds easy: how fast can a computer tell whether a tangle is really knotted?*

!!! abstract "In this chapter"
    **You will learn:**

    - what knots and links are, when two are the same, and Reidemeister's theorem that reduces this to three moves on diagrams
    - tricolourability and Fox colourings, with a complete proof that the trefoil is knotted
    - the linking number of two closed curves, and why it is an integer invariant
    - the Kauffman bracket and the Jones polynomial, computed for the trefoil, the figure-eight knot and the Hopf link
    - how knots show up in DNA and in molecules, said honestly
    - what is known about the complexity of recognising the unknot

    **You need:** [Chapter 5](05-Continuity-and-Homeomorphism.md) (embeddings), [Chapter 15](15-Van-Kampen-and-Surfaces.md)
    (the knot group, presentations), and some modular arithmetic for 18.2. Section 18.5 uses the language of
    [Logic, chapter 16: Complexity](../logic/16-Complexity.md) (P, NP, co-NP).

    **Levels:** 18.1 and 18.2 are intermediate; 18.3 is advanced; 18.4 is a survey anyone can read; 18.5 is expert.

## 18.1 Knots, links and Reidemeister moves

*Level: intermediate.* A **knot** is a subset of $\mathbb{R}^3$ homeomorphic to a circle; more precisely, an
embedding $K: S^1 \to \mathbb{R}^3$ ([Chapter 5](05-Continuity-and-Homeomorphism.md)). A **link** is a finite
collection of disjoint knots, called its **components**. The simplest knot is the **unknot**, a round circle in a
plane. The simplest true knot is the **trefoil**, the overhand knot with its ends joined.

### When are two knots the same?

Not "homeomorphic": every knot is homeomorphic to a circle. Not "deformable through embeddings" either: you could pull
the knotted part tighter and tighter until it shrinks to a point and vanishes, and every knot would become the unknot.
The right notion moves the whole of space:

**Definition.** Knots $K_0$ and $K_1$ are **equivalent** if there is a continuous family of homeomorphisms
$h_t: \mathbb{R}^3 \to \mathbb{R}^3$, $0 \le t \le 1$, with $h_0 = \mathrm{id}$ and $h_1(K_0) = K_1$. This is called an
**ambient isotopy**: space itself is deformed, carrying the knot along, and nothing is allowed to pass through
anything.

We also restrict to **tame** knots, those equivalent to a closed polygon with finitely many straight sides (every
smooth knot is tame). Wild knots, with infinitely many smaller and smaller tangles piling up at a point, exist; Fox and
Artin described famous examples in 1948. They are fascinating and beside the point here: from now on every knot is
tame.

### Diagrams

We study knots through their shadows. Project a knot onto a plane. After a small wiggle, the projection is **regular**:
only finitely many points of the shadow are double points, no point is triple, and at each double point the two
strands cross transversely. Mark at each double point which strand is on top by breaking the lower one. The result is a
**knot diagram**, and its double points are **crossings**. A diagram breaks into **arcs**: pieces of the curve that run
from one undercrossing to the next.

Here is the standard diagram of the trefoil. It has three crossings and three arcs, coloured differently; you will see
in 18.2 why the colours matter.

<div class="pattern-row" markdown="0">
<svg viewBox="20 40 260 240" role="img" aria-label="The standard diagram of the trefoil knot, with three crossings. The curve is broken into three arcs at its undercrossings, coloured orange, blue and green. At each crossing, the over-arc and the two ends of the under-arc have three different colours, a valid tricolouring">
  <polyline points="221.1,160.1 227.2,155.9 232.9,151.4 238.1,146.6 242.7,141.6 246.9,136.4 250.4,131 253.4,125.5 255.8,120 257.6,114.5 258.8,109 259.4,103.5 259.3,98.2 258.7,93 257.5,88.1 255.7,83.4 253.3,78.9 250.4,74.8 246.9,71.1 243,67.7 238.6,64.8 233.8,62.3 228.6,60.4 223.1,58.9 217.3,57.9 211.1,57.5 204.8,57.7 198.3,58.3 191.7,59.6 185,61.4 178.2,63.8 171.5,66.7 164.8,70.2 158.2,74.2 151.8,78.6 145.5,83.6 139.5,89 133.8,94.9 128.4,101.1 123.3,107.7 118.6,114.6 114.3,121.8 110.5,129.2 107.1,136.9 104.1,144.6 104.1,144.6" fill="none" stroke="#eea66f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="97,191.5 97.6,198.9 98.7,206.1 100.3,213 102.3,219.5 104.7,225.7 107.6,231.5 110.8,236.8 114.4,241.6 118.3,246 122.5,249.7 126.9,253 131.5,255.6 136.3,257.6 141.2,259 146.2,259.8 151.3,260 156.3,259.5 161.2,258.4 166.1,256.7 170.8,254.4 175.3,251.4 179.6,247.9 183.7,243.9 187.4,239.3 190.9,234.2 193.9,228.6 196.6,222.7 198.8,216.3 200.6,209.6 201.9,202.5 202.7,195.2 203.1,187.7 202.9,180 202.2,172.2 201.1,164.3 199.4,156.4 197.2,148.5 194.5,140.7 191.3,133 187.7,125.5 183.6,118.2 179.1,111.1 174.2,104.4 168.9,98 168.9,98" fill="none" stroke="#9cc9ea" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="131.9,68.4 125.2,65.2 118.4,62.5 111.7,60.4 105,58.9 98.4,57.9 92,57.5 85.8,57.7 79.8,58.3 74.1,59.6 68.7,61.3 63.7,63.5 59.1,66.2 55,69.4 51.3,72.9 48.1,76.8 45.5,81.1 43.4,85.7 41.8,90.5 40.9,95.6 40.6,100.8 40.8,106.2 41.7,111.7 43.2,117.3 45.3,122.8 48,128.3 51.3,133.7 55.1,139 59.5,144.1 64.5,149 69.9,153.7 75.8,158.1 82.1,162.1 88.9,165.8 96,169.1 103.4,172.1 111.1,174.5 119,176.6 127.1,178.2 135.4,179.2 143.7,179.9 152.1,180 160.5,179.6 168.8,178.8 176.9,177.4 176.9,177.4" fill="none" stroke="#7ccf9a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

### The three moves

Different diagrams can show the same knot. Kurt Reidemeister (1927), and independently James Alexander and Garland
Briggs (1926), found that three local moves are enough to get between any two of them.

- **R1 (twist).** Add or remove a small kink: a strand that loops over or under itself once.
- **R2 (poke).** Slide one strand over another to create two crossings, or pull it back to remove them.
- **R3 (slide).** A strand passing over (or under) a crossing can be slid from one side of the crossing to the other.

Each move changes only a small disc of the diagram; outside that disc nothing changes.

**Theorem 18.1 (Reidemeister).** Two knot diagrams represent equivalent knots if and only if one can be turned into
the other by a finite sequence of Reidemeister moves and deformations of the plane that do not change the crossings.

*Proof sketch.* One direction is clear: each move can be realised by moving the knot in space. For the other, work with
polygonal knots. Any equivalence of polygonal knots can be broken into **triangle moves**: replace one side $[p, q]$ by
two sides $[p, r], [r, q]$ (or the reverse) when the solid triangle $pqr$ meets the knot only along $[p,q]$. Subdivide so
the triangles are small, and project. The shadow of a small triangle crosses the rest of the diagram in a controlled
way, and by examining the finitely many cases (the triangle's shadow contains a crossing, a vertex, or a strand crossing
it) you find that each triangle move changes the diagram by a sequence of R1, R2 and R3 moves. The case check is
written out in Burde and Zieschang's *Knots* and in Lickorish's book (see Further reading). $\square$

The theorem turns topology into combinatorics. **A knot invariant is any quantity, computed from a diagram, that does not
change under R1, R2 and R3.** To prove a knot is knotted, find such a quantity that takes a different value on the
unknot.

### Crossing number, prime knots and the knot table

The **crossing number** $c(K)$ is the least number of crossings in any diagram of $K$. The unknot has $c = 0$; no
knot has $c = 1$ or $2$ (any diagram with one or two crossings can be simplified to the unknot); the trefoil has $c = 3$
and the **figure-eight knot** $c = 4$.

The **connected sum** $K_1 \# K_2$ cuts each knot open and joins the ends, side by side. A knot is **prime** if it is
not a connected sum of two non-trivial knots; Horst Schubert proved in 1949 that every knot is a connected sum of
prime knots in essentially one way, as with integers. Knot tables list prime knots. Ignoring mirror images, the numbers
of prime knots with crossing number 3, 4, 5, ..., 16 are

| crossings | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| prime knots | 1 | 1 | 2 | 3 | 7 | 21 | 49 | 165 | 552 | 2176 | 9988 | 46972 | 253293 | 1388705 |

The table up to 16 crossings was completed by Hoste, Thistlethwaite and Weeks in 1998, by computer.

**History.** Gauss studied linked curves in 1833 (18.2). In 1867 William Thomson (Lord Kelvin) suggested that atoms
might be knotted vortex rings in the ether. The theory was wrong, but it moved Peter Guthrie Tait to classify knots by
hand from the 1870s, with Thomas Kirkman and Charles Little. Their tables were remarkably accurate, but proving that two
knots in them were *different* needed invariants that did not yet exist. One pair, listed separately in tables for most
of a century, was shown by Kenneth Perko in 1974 to be the same knot. The first proof that the trefoil differs from its
mirror image was Max Dehn's in 1914.

**The knot group.** In [Chapter 15](15-Van-Kampen-and-Surfaces.md) you met the **knot group**
$\pi_1(\mathbb{R}^3 \setminus K)$. It is an invariant (equivalent knots have homeomorphic complements), and it detects
knottedness: the unknot has group $\mathbb{Z}$, while the trefoil's group $\langle x, y \mid x^2 = y^3 \rangle$ is not
abelian. Groups are hard to compare in general (see 18.5 and [Chapter 15](15-Van-Kampen-and-Surfaces.md) on the word
problem), so we look for invariants that are easier to compute.

## 18.2 Invariants: colourings and the linking number

*Level: intermediate.*

### Tricolourability

A **tricolouring** of a diagram assigns one of three colours to each arc so that at every crossing either all three
arcs meeting there have the same colour, or all three have different colours. (At a crossing, three arcs meet: the
over-arc and the two pieces of the under-strand. They may coincide as arcs, in which case they carry one colour.) A
tricolouring is **non-trivial** if it uses more than one colour. A diagram is **tricolourable** if it has a non-trivial
tricolouring.

**Theorem 18.2.** The number of tricolourings of a diagram does not change under Reidemeister moves. In particular,
tricolourability is a knot invariant.

*Proof.* For each move we give a bijection between the tricolourings before and after. The arcs that leave the small
disc where the move happens are the same before and after, and we show that any colouring of those ends that extends
inside the disc on one side extends on the other, in exactly one way.

- *R1.* The kink has one crossing. The strand runs into it, around the little loop and back over (or under) itself,
  so the over-arc there is the same arc as one of the two under-pieces. At least two of the three colours at the
  crossing are therefore equal, and the rule "all same or all different" forces all three to be equal. So the strand
  carries one colour through the kink, as it does without the kink. Bijection.
- *R2.* Strand $s$ passes over strand $t$ twice, cutting $t$ into three pieces $t_1, t_2, t_3$ (with $t_2$ the short
  middle piece). Let $s$ have colour $a$ and $t_1$ colour $b$. If $a = b$, the first crossing forces $t_2 = a$, and then
  the second forces $t_3 = a = b$. If $a \ne b$, the first crossing forces $t_2 = c$, the third colour, and the second
  crossing (colours $a$ and $c$) forces $t_3 = b$. Either way $t_3 = t_1$, and $t_2$ is determined, matching the diagram
  without the poke, where $t$ is one arc. Bijection.
- *R3.* Three strands, top, middle and bottom, with three crossings, and the top strand moves across the crossing of the
  other two. Given the colours $x, y, z$ of the three strands entering on one side, every colour inside and leaving on
  the other side is forced by the crossing rule, and a check of the cases ($x, y, z$ all equal, two equal, all different;
  there are five patterns up to renaming colours) shows that the colours leaving are the same before and after the move.
  The check is short if you use the algebraic form below: the rule at a crossing is a linear equation, and the leaving
  colours come out as the same linear combinations on both sides. $\square$

**Theorem 18.3.** The trefoil is knotted.

*Proof.* The unknot has a diagram with one arc and no crossings, so it has exactly 3 tricolourings, all trivial. The
trefoil diagram above has three arcs and three crossings, and at each crossing the three arcs are all different, so
colouring the arcs with three different colours (as in the picture) is a non-trivial tricolouring. Counting precisely:
all 3 one-colour choices work, and so do all $3! = 6$ ways to give the three arcs three different colours (a colouring
with exactly two colours fails: some crossing would see two of one colour and one of the other). So the trefoil has
$3 + 6 = 9$ tricolourings, and the unknot has 3. By Theorem 18.2, no sequence of moves connects them. $\square$

### Fox colourings: the algebra behind it

Ralph Fox's reformulation makes this computable. Use the numbers $0, 1, 2$ for colours. At a crossing with over-arc
colour $o$ and under-pieces $u_1, u_2$, the rule "all same or all different" is exactly

$$
2o \equiv u_1 + u_2 \pmod 3 .
$$

(Check: if all equal, $2o = 2o$; if all different, $u_1 + u_2 + o \equiv 0 + 1 + 2 \equiv 0$, so $u_1 + u_2 \equiv -o
\equiv 2o$. Two equal and one different fails.) Replace 3 by any prime $p$: a **Fox $p$-colouring** labels arcs by
$\mathbb{Z}/p$ with $2o \equiv u_1 + u_2 \pmod p$ at each crossing. The same proof shows that the number of
$p$-colourings is a knot invariant. It is always a power of $p$, because the colourings form a vector space over
$\mathbb{Z}/p$ (solutions of linear equations), and it is at least $p$ (the constant colourings).

**Worked example 1 (the figure-eight knot).** The figure-eight knot has a diagram with four arcs $a_0, a_1, a_2, a_3$ and
four crossings, which we can label so that the crossing equations are

$$
2a_0 = a_2 + a_3,\quad 2a_1 = a_3 + a_0,\quad 2a_2 = a_0 + a_1,\quad 2a_3 = a_1 + a_2 .
$$

- Modulo 3: solving the four equations (by hand in exercise 3, or with the code below) shows the only solutions are
  constant: 3 colourings. Tricolourability cannot tell the
  figure-eight from the unknot.
- Modulo 5: there are $25$ solutions. For example $a_0, a_1, a_2, a_3 = 0, 1, 3, 2$: check $2 \cdot 0 = 0 \equiv 3 + 2$,
  $2 \cdot 1 = 2 \equiv 2 + 0$, $2 \cdot 3 = 6 \equiv 1 = 0 + 1$, $2 \cdot 2 = 4 = 1 + 3$. All hold mod 5. The unknot has
  only 5. So the figure-eight is knotted, and it is not the trefoil (which has 5 colourings mod 5 and 9 mod 3).

The matrix of the crossing equations, with one row and one column deleted, has a determinant whose absolute value is
also a knot invariant, the **determinant** of the knot: 3 for the trefoil, 5 for the figure-eight. A knot has non-constant
$p$-colourings exactly when the prime $p$ divides its determinant.

**Try it in Python.** Counting colourings by brute force:

```python
from itertools import product

def colourings(crossings, n_arcs, p):
    """crossings: list of (over, under1, under2) arc numbers."""
    return sum(all((2 * c[o] - c[u] - c[v]) % p == 0 for o, u, v in crossings)
               for c in product(range(p), repeat=n_arcs))

trefoil = [(0, 1, 2), (1, 2, 0), (2, 0, 1)]
figure8 = [(0, 2, 3), (1, 3, 0), (2, 0, 1), (3, 1, 2)]
for p in (3, 5, 7):
    print(p, colourings(trefoil, 3, p), colourings(figure8, 4, p))
# 3 9 3
# 5 5 25
# 7 7 7
```

A non-trivial tricolouring of a knot also gives a homomorphism from the knot group onto the symmetric group $S_3$:
send the loop around each arc to the transposition named by its colour. The crossing rule is exactly the Wirtinger
relation of [Chapter 15](15-Van-Kampen-and-Surfaces.md) holding among transpositions. So tricolourability is a shadow
of the knot group, made computable.

### The linking number

Now two closed curves $K_1, K_2$, each with a direction (an **orientation**). At a crossing of oriented strands there
is a sign. Turn the picture so that the over-strand points up. If the under-strand passes from right to left, the
crossing is **positive** ($+1$); if from left to right, **negative** ($-1$). (Equivalently: a positive crossing looks
like the right-hand rule: curl the fingers of your right hand from the over-strand to the under-strand and your thumb
points toward you.)

**Definition.** The **linking number** $\operatorname{lk}(K_1, K_2)$ is half the sum of the signs of the crossings
where one strand belongs to $K_1$ and the other to $K_2$. (Crossings of a component with itself are ignored.)

**Theorem 18.4.** The linking number is an integer and is unchanged by Reidemeister moves.

*Proof.* Split the sum in two: $s_{\text{over}}$, the sum of signs at crossings where $K_1$ passes over $K_2$, and
$s_{\text{under}}$, the sum where $K_1$ passes under $K_2$.

*Each one-sided sum is invariant.* R1 creates or removes a self-crossing, which counts in neither sum. R2 creates or
removes two crossings between the same two strands, with the same strand on top both times and opposite signs, so both
sums are unchanged. R3 moves a strand across a crossing without changing which strands cross, which is on top, or the
signs. So $s_{\text{over}}$ and $s_{\text{under}}$ are invariants, and so is $\operatorname{lk} =
\tfrac12(s_{\text{over}} + s_{\text{under}})$.

*The two halves are equal.* Switch every crossing where $K_1$ is under $K_2$. Switching a crossing reverses its sign, so
the new diagram has $s'_{\text{over}} = s_{\text{over}} - s_{\text{under}}$. In the new diagram $K_1$ lies entirely above
$K_2$, so it can be lifted straight up and moved away, leaving a diagram with no crossings between them; by invariance
$s'_{\text{over}} = 0$. Hence $s_{\text{over}} = s_{\text{under}}$ and $\operatorname{lk} = s_{\text{over}}$, an integer.
$\square$

**Worked example 2.**

- *The Hopf link* (two round circles, each passing once through the other) has two crossings between the components,
  both of the same sign. So $\operatorname{lk} = \pm 1$, depending on orientations. It is linked.
- *The unlink* (two separate circles) has $\operatorname{lk} = 0$.
- *The Whitehead link* has $\operatorname{lk} = 0$, yet it cannot be pulled apart. The linking number misses it; the
  Jones polynomial (18.3) does not.
- *The Borromean rings* (three rings, no two linked, all three inseparable) have every pairwise linking number 0.
  Remove any one ring and the other two fall apart.

Gauss found the linking number in 1833 as an integral: for parametrised curves $\gamma_1, \gamma_2$,

$$
\operatorname{lk}(\gamma_1, \gamma_2) = \frac{1}{4\pi} \oint\!\!\oint \frac{(\gamma_1 - \gamma_2) \cdot (d\gamma_1 \times
d\gamma_2)}{|\gamma_1 - \gamma_2|^3},
$$

which reappears in electromagnetism: it measures how many times the magnetic field of a current in one loop circulates
through the other. It is the same integer as the crossing count.

## 18.3 The Jones polynomial

*Level: advanced.* Colourings and linking numbers are useful but blunt. In 1984 Vaughan Jones, working on operator
algebras, a field far from knots, found a polynomial invariant that distinguishes far more knots, including the
trefoil from its mirror image. The discovery opened connections to statistical mechanics and quantum field theory, and
Jones received a Fields Medal in 1990. In 1987 Louis Kauffman gave a short, elementary construction, which we follow.

### The Kauffman bracket

Every crossing can be **smoothed** in two ways: cut it open and reconnect the four ends without crossing. Look at a
crossing; it divides a small disc into four regions. Rotate the over-strand counterclockwise until it meets the
under-strand: it sweeps two opposite regions, called the **A-regions**; the other two are **B-regions**. The
**A-smoothing** joins the two A-regions into one channel; the **B-smoothing** joins the B-regions.

**Definition (Kauffman, 1987).** The **bracket** $\langle D \rangle$ of an unoriented diagram $D$ is the Laurent
polynomial in a variable $A$ determined by three rules:

1. $\langle \bigcirc \rangle = 1$ for the diagram of one circle with no crossings;
2. $\langle D \sqcup \bigcirc \rangle = d \,\langle D \rangle$, with $d = -A^2 - A^{-2}$, for a diagram with an extra
   separate circle;
3. $\langle D \rangle = A \langle D_A \rangle + A^{-1} \langle D_B \rangle$, where $D_A, D_B$ are $D$ with one chosen
   crossing given its A- or B-smoothing.

Unwinding rule 3 at every crossing gives a **state sum**. A **state** $S$ chooses A or B at each crossing; smoothing
them all leaves a collection of $|S|$ disjoint circles. With $a(S)$ and $b(S)$ the numbers of A and B choices,

$$
\langle D \rangle = \sum_{S} A^{a(S) - b(S)}\, d^{\,|S| - 1} .
$$

For a diagram with $n$ crossings there are $2^n$ states, so this is a finite (if large) computation.

**Theorem 18.5.** The bracket is unchanged by R2 and R3. Under R1 it is multiplied by $-A^{3}$ or $-A^{-3}$.

*Proof.* *R1.* Smooth the kink's crossing. One smoothing gives the strand with a small separate circle (factor $d$), the
other gives the plain strand. If the A-smoothing is the one with the circle, the bracket becomes
$A\, d\, \langle D' \rangle + A^{-1} \langle D' \rangle = (A(-A^2 - A^{-2}) + A^{-1})\langle D' \rangle = -A^3 \langle D'
\rangle$, where $D'$ is the diagram without the kink. For the kink twisted the other way, A and B swap and the factor is
$-A^{-3}$.

*R2.* The poke has two crossings, so four states. Draw them and you find: the states $AA$ and $BB$ both give the
"turned back" picture (a cap above a cup), with weights $A^2$ and $A^{-2}$; of the two mixed states, each of weight
$A \cdot A^{-1} = 1$, one gives the turned-back picture with an extra small circle in the middle, and the other gives
the two strands side by side, which is the picture without the poke. Writing $\langle \asymp \rangle$ for the turned-back picture and $\langle )(
\rangle$ for the side-by-side one,

$$
\langle \text{poke} \rangle = A^2 \langle \asymp \rangle + \langle )( \rangle + d \langle \asymp \rangle + A^{-2}\langle
\asymp \rangle = \langle )( \rangle + (A^2 + A^{-2} + d)\langle \asymp \rangle = \langle )( \rangle,
$$

since $A^2 + A^{-2} + d = 0$. That is invariance under R2, and it is why $d$ was chosen as it was.

*R3.* Expand the bracket at the crossing between the two lower strands, on both sides of the move. The A-smoothing gives,
on the two sides, diagrams that are already identical. The B-smoothing gives, on the two sides, diagrams that differ by
two R2 moves of the top strand, so they have equal brackets by the R2 case. Adding, the two sides agree. $\square$

### Writhe and the Jones polynomial

To repair R1, use orientation. For an oriented diagram, the **writhe** $w(D)$ is the sum of the signs of all crossings
(including self-crossings). R2 and R3 do not change it (the same argument as for the linking number), and R1 changes it
by $\pm 1$, in step with the bracket's factor $-A^{\pm 3}$. So

$$
X(D) = (-A^3)^{-w(D)} \langle D \rangle
$$

is unchanged by all three moves: a knot invariant. The **Jones polynomial** $V_K(t)$ is $X$ with $A = t^{-1/4}$. For
knots it is a Laurent polynomial in $t$; for links with an even number of components it involves half-integer powers
$t^{1/2}$.

A useful fact: for a positive crossing, the A-smoothing is the one that respects the orientations of both strands (the
"Seifert smoothing"); for a negative crossing it is the B-smoothing. Check it with a drawing using the rotation rule
above.

### Worked example 3: the trefoil

Draw the trefoil as two vertical strands twisting around each other three times, the top ends joined to the bottom ends
round the back (the closure of the braid $\sigma_1^3$). Orient both strands upward. All three crossings are positive,
so $w = 3$, and at each crossing the A-smoothing is the vertical one (the oriented smoothing) and the B-smoothing is the
horizontal one (a cap over a cup).

Step 1, count circles. Let $k$ be the number of B-smoothings in a state.

- $k = 0$: all vertical; the two strands close up into 2 circles.
- $k \ge 1$: each horizontal smoothing caps the strands; with $k$ caps there are $k$ circles in total (one big circle,
  plus one small circle trapped between each pair of consecutive caps).

Step 2, add up the $2^3 = 8$ states, grouped by $k$ (there are $\binom{3}{k}$ states with $k$ B's, each with weight
$A^{(3-k) - k}$):

| $k$ | states | weight | circles | contribution |
| --- | --- | --- | --- | --- |
| 0 | 1 | $A^3$ | 2 | $A^3 d$ |
| 1 | 3 | $A$ | 1 | $3A$ |
| 2 | 3 | $A^{-1}$ | 2 | $3A^{-1} d$ |
| 3 | 1 | $A^{-3}$ | 3 | $A^{-3} d^2$ |

Step 3, expand with $d = -A^2 - A^{-2}$ and $d^2 = A^4 + 2 + A^{-4}$:

$$
\begin{aligned}
\langle D \rangle &= (-A^5 - A) + 3A + (-3A - 3A^{-3}) + (A + 2A^{-3} + A^{-7}) \\
&= -A^5 - A^{-3} + A^{-7}.
\end{aligned}
$$

Step 4, normalise: $X = (-A^3)^{-3}\langle D\rangle = -A^{-9}(-A^5 - A^{-3} + A^{-7}) = A^{-4} + A^{-12} - A^{-16}$.

Step 5, substitute $A = t^{-1/4}$, so $A^{-4} = t$:

$$
V_{\text{right trefoil}}(t) = t + t^3 - t^4 .
$$

Check: $V(1) = 1 + 1 - 1 = 1$. For every knot, $V_K(1) = 1$ (at $t = 1$, $A^4 = 1$ and $d = -2$, and a standard
argument shows $X = 1$), so this is a sanity test the answer passes.

**The mirror image.** Reflecting a diagram in the plane of the paper turns every crossing over, which swaps A- and
B-smoothings (so $A \leftrightarrow A^{-1}$ in the bracket) and negates the writhe. So $V_{\overline K}(t) =
V_K(t^{-1})$, and the left-handed trefoil has

$$
V_{\text{left trefoil}}(t) = t^{-1} + t^{-3} - t^{-4} \ne t + t^3 - t^4 .
$$

**The trefoil is not equivalent to its mirror image.** A knot equivalent to its mirror image is called **amphichiral**;
the trefoil is **chiral**, like a left and a right hand. Dehn's 1914 proof took pages of group theory; here it took five
lines of algebra.

**Worked example 4 (more values).** The same computation (by the program below) gives:

- unknot: $V = 1$;
- figure-eight knot: $V = t^{2} - t + 1 - t^{-1} + t^{-2}$, symmetric under $t \leftrightarrow t^{-1}$, as it must be,
  because the figure-eight knot *is* equivalent to its mirror image;
- positive Hopf link (closure of $\sigma_1^2$, two positive crossings): bracket $-A^4 - A^{-4}$, writhe 2, and
  $V = -t^{1/2} - t^{5/2}$.

**The skein relation.** Jones's polynomial satisfies, for three oriented diagrams $L_+, L_-, L_0$ that are identical
except near one crossing, where $L_+$ has a positive crossing, $L_-$ a negative one and $L_0$ the oriented smoothing,

$$
t^{-1} V_{L_+} - t\, V_{L_-} = \left(t^{1/2} - t^{-1/2}\right) V_{L_0} .
$$

Check it on the trefoil: change one crossing of $\sigma_1^3$ and you get $\sigma_1 \sigma_1 \sigma_1^{-1}$, whose
closure is the unknot; smooth it and you get $\sigma_1^2$, the positive Hopf link. Left side:
$t^{-1}(t + t^3 - t^4) - t = 1 + t^2 - t^3 - t$. Right side: $(t^{1/2} - t^{-1/2})(-t^{1/2} - t^{5/2}) = -t - t^3 + 1 +
t^2$. They agree.

### Try it in Python

A diagram can be stored as a **PD code** (planar diagram code): number the edges of the diagram between crossings
$1, 2, \dots, 2n$ along the orientation, and record each crossing as the four edge numbers met going counterclockwise,
starting from the incoming under-strand. With that convention the A-smoothing joins the first edge to the second and
the third to the fourth, and a crossing is positive when its over-strand runs from the fourth edge to the second.

```python
from itertools import product
from collections import Counter

def mul(p, q):
    r = Counter()
    for a, x in p.items():
        for b, y in q.items():
            r[a + b] += x * y
    return {k: v for k, v in r.items() if v}

def circles(pairs):                   # count loops after smoothing (union-find)
    parent = {}
    def find(x):
        parent.setdefault(x, x)
        while parent[x] != x:
            x = parent[x]
        return x
    for a, b in pairs:
        parent[find(a)] = find(b)
    return len({find(x) for x in parent})

def bracket(pd):                       # exponents of A -> coefficients
    total, d = Counter(), {2: -1, -2: -1}
    for state in product("AB", repeat=len(pd)):
        pairs, power = [], 0
        for (i, j, k, l), s in zip(pd, state):
            pairs += [(i, j), (k, l)] if s == "A" else [(i, l), (j, k)]
            power += 1 if s == "A" else -1
        term = {power: 1}
        for _ in range(circles(pairs) - 1):
            term = mul(term, d)
        for e, c in term.items():
            total[e] += c
    return {e: c for e, c in total.items() if c}

def jones(pd):                         # returns {power of t: coefficient}
    w = sum(1 if (j == l + 1 or l > j + 1) else -1 for i, j, k, l in pd)
    x = mul({-3 * w: (-1) ** w}, bracket(pd))
    return dict(sorted((-e / 4, c) for e, c in x.items()))

print(jones([(1, 5, 2, 4), (3, 1, 4, 6), (5, 3, 6, 2)]))
# {1.0: 1, 3.0: 1, 4.0: -1}             the trefoil: t + t^3 - t^4
print(jones([(4, 2, 5, 1), (8, 6, 1, 5), (6, 3, 7, 4), (2, 7, 3, 8)]))
# {-2.0: 1, -1.0: -1, 0.0: 1, 1.0: -1, 2.0: 1}   the figure-eight
```

The state sum has $2^n$ terms, so this program is hopeless beyond about 25 crossings. That is not just a weak program:
computing the Jones polynomial is **#P-hard** in general (Jaeger, Vertigan and Welsh, 1990), so a fast algorithm for all
knots would be a major surprise.

### What the Jones polynomial does and does not know

It distinguishes all prime knots with few crossings from one another, apart from some pairs; it detects chirality in
many cases (not all); and it distinguishes the Whitehead link and the Borromean rings from unlinks. Whether **a knot with
$V_K(t) = 1$ must be the unknot** is a famous open problem. For links of two or more components the answer is known to be
no: Thistlethwaite and others found non-trivial links with the same Jones polynomial as an unlink.

Two later developments explain where the polynomial comes from. In 1989 Edward Witten showed that it arises from a
quantum field theory in three dimensions (Chern-Simons theory). Around 2000 Mikhail Khovanov built **Khovanov homology**,
a sequence of homology groups, in the sense of [Chapter 16](16-Homology.md), whose Euler characteristic is the Jones
polynomial. Khovanov homology is stronger: Kronheimer and Mrowka proved in 2011 that it does detect the unknot.

## 18.4 Knots in DNA and chemistry

*Level: survey.* Knot theory began with a mistaken physical theory (Kelvin's knotted atoms) and spent a century as pure
mathematics. In the late twentieth century, knots turned up in real molecules.

**DNA.** A DNA molecule is two strands wound around each other in a double helix. In many bacteria, and in
mitochondria, DNA forms closed loops, so the two strands are two closed curves with a **linking number**
(18.2), traditionally written $\operatorname{Lk}$. It cannot change without cutting a strand. The geometric shape of the
loop splits it, by a theorem of Călugăreanu, White and Fuller (1959 to 1971), into two parts,
$\operatorname{Lk} = \operatorname{Tw} + \operatorname{Wr}$: the **twist** (how much the strands wind around the axis)
and the **writhe** (how much the axis coils on itself, the "supercoiling"). Twist and writhe are real numbers that vary
as the molecule moves; their sum is a fixed integer. This is why releasing twist in one place makes the loop coil up in
another, like a telephone cord.

Cells must cut and rejoin DNA to copy and unpack it, and enzymes called **topoisomerases** do exactly that.
A type I topoisomerase cuts one strand, lets the other pass through and rejoins, changing $\operatorname{Lk}$ by $\pm 1$;
a type II topoisomerase cuts both strands and passes another part of the double helix through the gap, changing
$\operatorname{Lk}$ by $\pm 2$. Other enzymes (site-specific recombinases) cut and reconnect DNA at two places at once,
and when they act on a closed loop the product can be a knot or a link. In the 1980s, biochemists including Steven
Wasserman and Nicholas Cozzarelli photographed such products under an electron microscope and identified them as specific
knots and links. Claus Ernst and De Witt Sumners then used the mathematics of **tangles** (pieces of knots inside a ball)
to work backwards from the knots produced to models of how the enzyme holds and cuts the DNA.

Said honestly: topology does not tell biologists what an enzyme does. It gives constraints, a list of mechanisms
consistent with the knots observed, which experiments then test.

**Chemistry.** Chemists have built knotted and linked molecules on purpose. Molecules made of interlocked rings, called
**catenanes**, and a molecular trefoil knot, made by Christiane Dietrich-Buchecker and Jean-Pierre Sauvage in 1989,
showed that topology can be designed at the molecular scale. Sauvage shared the 2016 Nobel Prize in Chemistry with
J. Fraser Stoddart and Bernard Feringa for molecular machines, some of which are built from such interlocked parts. Since
the trefoil is chiral, a molecular trefoil comes in a left- and a right-handed form, a molecular instance of 18.3. Knots
also appear in some natural proteins, where the chain of amino acids threads through a loop of itself; a deeply knotted
protein was described by William Taylor in 2000, and how such proteins fold is still studied.

## 18.5 How hard is it to recognise the unknot?

*Level: expert.* You are handed a diagram with $n$ crossings. Is it the unknot? Reidemeister's theorem says that if it
is, some sequence of moves proves it, but the sequence might need to pass through *larger* diagrams first, and nothing in
the theorem bounds its length. Is the problem even decidable?

**Decidable.** Wolfgang Haken proved in 1961 that it is, by a completely different route. A knot is trivial exactly
when it bounds an embedded disc. Haken's theory of **normal surfaces** shows that if the knot's complement (cut into
tetrahedra) contains such a disc, it contains one in a special "normal" form described by finitely many integer
coordinates, and the candidates can be listed and checked. It was the first algorithm, and a very slow one.

**In NP.** A problem is in **NP** if every "yes" answer has a certificate that can be checked in polynomial time
([Logic, chapter 16](../logic/16-Complexity.md)). Hass, Lagarias and Pippenger proved in 1999 that unknot recognition is
in NP: the disc, written in normal coordinates, is such a certificate (the coordinates can be huge numbers, but they have
polynomially many digits). Lackenby later proved (published in 2015) that an unknot diagram with $n$ crossings can be
reduced to the trivial diagram by at most $(236 n)^{11}$ Reidemeister moves. That bound is polynomial, so the sequence of
moves itself is another certificate.

**In co-NP.** A problem is in **co-NP** if every "no" answer has a short certificate: here, a short proof that a knot *is*
knotted. Greg Kuperberg showed in 2014 that this holds if the generalised Riemann hypothesis is true (the certificate is
a homomorphism of the knot group into a finite group, checked modulo a prime). Marc Lackenby later gave an unconditional
proof, published in 2021, using different certificates built from surfaces.

**What is not known.** No polynomial-time algorithm for unknot recognition is known, and it is not known that none
exists. Since the problem is in NP and co-NP, it is very unlikely to be NP-complete: if it were, then NP would equal co-NP,
which most complexity theorists believe false. In 2021 Lackenby announced an algorithm running in quasi-polynomial time
(time $n^{O(\log n)}$, between polynomial and exponential); treat that as an announced result and check its current
standing before relying on it. In practice, computer programs such as SnapPy and Regina settle the examples people
actually meet quickly, using hyperbolic geometry and normal surfaces, but practice is not proof.

Some neighbouring problems are known to be hard: deciding the genus of a knot in a general 3-manifold is NP-complete
(Agol, Hass and Thurston, 2006). Whether unknot recognition is in P is a natural question, near the boundary between
topology and computer science, that remains open.

## Check yourself

??? question "1. Show that the writhe of a diagram changes under R1 but not under R2. Why is that not a contradiction with the writhe appearing in the Jones polynomial?"
    R1 adds or removes one crossing, of sign $+1$ or $-1$, so $w$ changes by $\pm1$. R2 adds two crossings with opposite
    signs, so $w$ does not change. The writhe is not itself an invariant; it is used to cancel the factor $-A^{\pm3}$ that
    R1 introduces into the bracket. Because both change in step under R1, the combination $(-A^3)^{-w}\langle D\rangle$ is
    invariant.

??? question "2. List all tricolourings of the trefoil diagram and confirm there are 9."
    The three arcs meet at every crossing, so at each crossing all three arcs appear. Either all three arcs have the same
    colour (3 colourings) or all three are different (any assignment of the three colours to the three arcs: $3! = 6$).
    Two colours with one repeated fails at every crossing. Total $3 + 6 = 9$.

??? question "3. Using the equations of Worked example 1, show by hand that the figure-eight knot has only constant 3-colourings."
    Mod 3, $2 \equiv -1$, so each equation says $a_i + u_1 + u_2 \equiv 0$: $a_0 + a_2 + a_3 \equiv 0$,
    $a_1 + a_3 + a_0 \equiv 0$, $a_2 + a_0 + a_1 \equiv 0$, $a_3 + a_1 + a_2 \equiv 0$. Subtracting the first two:
    $a_2 \equiv a_1$. Subtracting the second and third: $a_3 \equiv a_2$. Subtracting the third and fourth:
    $a_0 \equiv a_3$. So all four are equal, and any common value $a$ works ($3a \equiv 0$). Exactly 3 colourings.

??? question "4. A connected sum $K_1 \# K_2$ is formed by joining one arc of $K_1$ to one arc of $K_2$. Show that the number of 3-colourings of $K_1 \# K_2$ is $\mathrm{col}(K_1)\,\mathrm{col}(K_2)/3$. How many does the granny knot (trefoil # trefoil) have?"
    A colouring of the sum is a colouring of each part that agrees on the joining arc. By symmetry (permuting colours),
    each part has $\mathrm{col}(K_i)/3$ colourings with any given colour on that arc. So the count is
    $3 \cdot \frac{\mathrm{col}(K_1)}{3} \cdot \frac{\mathrm{col}(K_2)}{3} = \frac{\mathrm{col}(K_1)\mathrm{col}(K_2)}{3}$.
    For the granny knot, $9 \cdot 9 / 3 = 27$. Since $27 \ne 9$, the granny knot is not the trefoil.

??? question "5. The closure of the 2-strand braid $\sigma_1^4$ is a link with two components (the (2,4) torus link). With both strands oriented upward, what is its linking number?"
    All four crossings are positive (the same twist, both strands upward) and each is between the two components (with
    an even number of half-twists, each strand returns to itself, and at every crossing the two strands are different
    components). So $\operatorname{lk} = \frac{4 \cdot (+1)}{2} = 2$.

??? question "6. Compute the Kauffman bracket of the Hopf link as the closure of $\sigma_1^2$, and its Jones polynomial with both crossings positive."
    States by number $k$ of B-smoothings: $k = 0$: weight $A^2$, 2 circles, $A^2 d$. $k = 1$: two states of weight 1,
    1 circle each, total 2. $k = 2$: weight $A^{-2}$, 2 circles, $A^{-2}d$. Sum: $(A^2 + A^{-2})d + 2 = -(A^2 +
    A^{-2})^2 + 2 = -A^4 - A^{-4}$. Writhe 2: $X = A^{-6}(-A^4 - A^{-4}) = -A^{-2} - A^{-10}$, and with
    $A = t^{-1/4}$, $V = -t^{1/2} - t^{5/2}$.

??? question "7. Show that adding a kink to a diagram multiplies the bracket by $-A^3$ when the A-smoothing of the kink's crossing produces the extra circle."
    Expanding at that crossing: $\langle D_{\text{kink}} \rangle = A \langle D' \sqcup \bigcirc\rangle + A^{-1}\langle
    D'\rangle = (A d + A^{-1})\langle D'\rangle = (-A^3 - A^{-1} + A^{-1})\langle D' \rangle = -A^3 \langle D'\rangle$.

??? question "8. Explain why $V_{\overline K}(t) = V_K(t^{-1})$, and use it to decide whether a knot with $V(t) = t + t^3 - t^4$ can be amphichiral."
    Mirroring swaps over and under at every crossing, so the A- and B-regions swap and the bracket becomes
    $\langle D\rangle$ with $A$ replaced by $A^{-1}$; the writhe changes sign. So $X_{\overline K}(A) = X_K(A^{-1})$, and
    since $t = A^{-4}$, $V_{\overline K}(t) = V_K(t^{-1})$. An amphichiral knot has $V(t) = V(t^{-1})$. But
    $t + t^3 - t^4 \ne t^{-1} + t^{-3} - t^{-4}$, so no knot with this polynomial is amphichiral.

??? question "9. Write the figure-eight knot as the closure of the 3-strand braid $\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-1}$. Changing one negative crossing gives the unknot, and smoothing it gives the positive Hopf link. Check the skein relation."
    At the chosen crossing, $L_-$ is the figure-eight, $L_+$ is the unknot (the braid becomes $\sigma_1\sigma_2\sigma_1\sigma_2^{-1}
    = \sigma_2\sigma_1\sigma_2\sigma_2^{-1} = \sigma_2\sigma_1$, whose closure is one unknotted circle), and $L_0$ is the
    closure of $\sigma_1\sigma_1\sigma_2^{-1}$, which is the closure of $\sigma_1^2$, the positive Hopf link. Left side:
    $t^{-1} \cdot 1 - t(t^2 - t + 1 - t^{-1} + t^{-2}) = t^{-1} - t^3 + t^2 - t + 1 - t^{-1} = 1 - t + t^2 - t^3$. Right
    side: $(t^{1/2} - t^{-1/2})(-t^{1/2} - t^{5/2}) = -t - t^3 + 1 + t^2$. They agree.

??? question "10. Why does unknot recognition being in NP and co-NP make it unlikely to be NP-complete?"
    If an NP-complete problem $X$ were in co-NP, then every problem $Y$ in NP reduces to $X$ in polynomial time, and the
    co-NP certificates for $X$, pulled back through the reduction, give co-NP certificates for $Y$. So NP $\subseteq$
    co-NP, and by symmetry NP $=$ co-NP. Most complexity theorists believe NP $\ne$ co-NP.

??? question "11. The linking number of the Whitehead link is 0. Name two different invariants from this chapter or Chapter 15 that could prove it is not the unlink."
    The Jones polynomial (it differs from that of the two-component unlink, $-t^{1/2} - t^{-1/2}$) and the fundamental
    group of the complement (the unlink's complement has free group of rank 2, while the Whitehead link's group is not
    free). Also Fox colourings of links, suitably extended, can be used.

??? question "12. Lackenby's bound says an unknot diagram with $n$ crossings needs at most $(236n)^{11}$ moves. How many is that for $n = 3$? What does the size of the number tell you?"
    $(708)^{11} \approx 2.25 \times 10^{31}$. The bound is polynomial in $n$, which is what matters for complexity
    theory (it gives an NP certificate), but it is far too large to search by hand or by computer. Polynomial bounds can
    be astronomically large; theorems about growth rates say nothing about small cases.

## What you learned

- Knots are embeddings of a circle in space, up to ambient isotopy; diagrams represent them, and Reidemeister's three
  moves connect any two diagrams of the same knot.
- Tricolourings and Fox $p$-colourings are linear algebra mod $p$; they prove the trefoil and figure-eight knots are
  knotted and different.
- The linking number counts signed crossings between two components; it is an integer invariant that misses some links.
- The Kauffman bracket, corrected by the writhe, gives the Jones polynomial; for the trefoil $t + t^3 - t^4$, which proves
  the trefoil is chiral.
- Knots appear in closed DNA, where $\operatorname{Lk} = \operatorname{Tw} + \operatorname{Wr}$ and enzymes change the
  topology, and in designed molecules.
- Unknot recognition is decidable, in NP and in co-NP; whether it is in P is open.

**Next:** [Chapter 19](19-The-Poincare-Conjecture.md), the most famous problem about 3-dimensional spaces, and how it
was solved.

## Further reading

- C. Adams, *The Knot Book*, W. H. Freeman, 1994 (the friendliest introduction).
- W. B. R. Lickorish, *An Introduction to Knot Theory*, Springer, 1997 (Reidemeister moves, the Jones polynomial, with
  proofs).
- D. Rolfsen, *Knots and Links*, Publish or Perish, 1976.
- G. Burde and H. Zieschang, *Knots*, de Gruyter, 1985.
- V. F. R. Jones, "A polynomial invariant for knots via von Neumann algebras", *Bulletin of the American Mathematical
  Society* 12, 1985.
- L. H. Kauffman, "State models and the Jones polynomial", *Topology* 26, 1987.
- J. Hass, J. C. Lagarias and N. Pippenger, "The computational complexity of knot and link problems", *Journal of the
  ACM* 46, 1999.
- M. Lackenby, "A polynomial upper bound on Reidemeister moves", *Annals of Mathematics* 182, 2015.
- S. A. Wasserman and N. R. Cozzarelli, "Biochemical topology: applications to DNA recombination and transposition",
  *Science* 232, 1986.
- On this site: [Chapter 15](15-Van-Kampen-and-Surfaces.md) (the knot group), [Logic, chapter 16: Complexity](../logic/16-Complexity.md)
  (P, NP and co-NP), [Logic, chapter 14: Undecidability](../logic/14-Undecidability.md) (when no algorithm exists at all),
  [Algebra, chapter 13: Groups](../algebra/13-Groups.md) (the symmetric group $S_3$ behind tricolourings), and
  [Geometry, chapter 21](../geometry/21-Where-Geometry-Goes.md) (hyperbolic knot complements).
