# 15. Counting with symmetry

*How many different necklaces can be made from six beads in three colours? How many different graphs are there on five
vertices? How many molecules can be made by attaching hydrogen, chlorine, bromine and fluorine to one carbon atom? In
each question, two things that differ only by a rotation, a relabelling or a reflection count as the same. Plain
counting overcounts, and it overcounts different objects by different amounts, so you cannot just divide. In this
chapter you will recall Burnside's lemma, which fixes this, then build Pólya's enumeration theorem, which counts all the
answers at once, sorted by how many of each colour they use. You will use it to count coloured cubes, graphs up to
isomorphism, and chemical isomers.*

!!! abstract "In this chapter"
    **You will learn:**

    - the necklace formula, and why it involves Euler's $\varphi$ function
    - Burnside's lemma: the number of essentially different objects is the average number of objects a symmetry fixes
    - the cycle index of a permutation group, and Pólya's enumeration theorem, with a proof
    - how to count colourings of a cube's faces, corners and edges
    - how to count graphs up to isomorphism, and why almost all large graphs have no symmetry at all
    - how chemists' counts of isomers (substituted methanes and benzenes, alcohols, alkanes) come out of the same
      formulas, and what those counts leave out

    **You need:** [Chapter 2](02-Permutations-and-Combinations.md) (permutations and combinations),
    [Chapter 7](07-Generating-Functions.md) (generating functions) and [Chapter 10](10-Graphs.md) (graph isomorphism).
    Groups are used lightly: what you need is in [Algebra, Chapter 13](../algebra/13-Groups.md) and the proof of
    Burnside's lemma is in [Algebra, Chapter 16](../algebra/16-Group-Actions-and-Sylow.md). A gentler version:
    [Burnside's lemma](../../topics/counting/level-8/06-burnside-lemma.md) in the Topics.

    **Levels:** 15.1 and 15.2 are intermediate; 15.3 and 15.4 are advanced; 15.5 is advanced, with an expert look at
    counting trees.

## 15.1 Necklaces again

*Level: intermediate.*

A **necklace** here is a ring of $n$ beads, each one of $k$ colours, where two rings count as the same if one can be
turned into the other by rotating it. (If flipping the ring over is also allowed, we call it a **bracelet**.)

There are $k^n$ ways to colour $n$ fixed positions. Each necklace corresponds to several colourings, one for each
position it can be turned to. If every necklace had exactly $n$ different rotations, the answer would be $k^n / n$. But
for $n = 4$ and $k = 2$ that is $16/4 = 4$, and the true answer is 6. The trouble is symmetric necklaces: the all-blue
necklace looks the same in every rotation, so it accounts for only 1 colouring, not 4, and the alternating necklace
orange-blue-orange-blue accounts for 2.

Here are the six for $n = 4$, $k = 2$, listed by number of orange beads, with the number of colourings each one covers:

| orange beads | necklaces | colourings covered |
|---|---|---|
| 0 | all blue | 1 |
| 1 | one orange | 4 |
| 2 | two adjacent | 4 |
| 2 | two opposite | 2 |
| 3 | one blue | 4 |
| 4 | all orange | 1 |

**Check:** $1 + 4 + 4 + 2 + 4 + 1 = 16 = 2^4$. The sizes differ, so dividing by 4 fails.

Listing works for 16 colourings. For 6 beads in 3 colours there are $3^6 = 729$, and listing becomes miserable. We need
a counting method that handles the symmetric objects correctly, and that method is Burnside's lemma.

## 15.2 Burnside's lemma

*Level: intermediate.*

Set up the language. The symmetries we allow form a **group** $G$: a set of rearrangements of the positions (rotations,
reflections, relabellings) that contains the "do nothing" rearrangement, contains the reverse of each of its members,
and contains the result of doing any two of them one after the other. The group **acts** on the set $X$ of colourings:
a symmetry $g$ moves a colouring $x$ to a colouring $g \cdot x$. Two colourings are the **same object** if some $g$
moves one to the other; the set of colourings the same as $x$ is its **orbit**. We want the number of orbits.

For each $g$, let $\operatorname{Fix}(g)$ be the set of colourings that $g$ leaves unchanged.

**Burnside's lemma.** The number of orbits is the average number of fixed colourings:

$$
\#\text{orbits} = \frac{1}{|G|} \sum_{g \in G} |\operatorname{Fix}(g)| .
$$

*Proof in brief.* Count the pairs $(g, x)$ with $g \cdot x = x$. Grouped by $g$, the count is
$\sum_g |\operatorname{Fix}(g)|$. Grouped by $x$, it is $\sum_x |G_x|$, where $G_x$ is the set of symmetries fixing $x$.
The orbit-stabilizer theorem says $|G_x| \cdot |\text{orbit of } x| = |G|$, so each orbit $O$ contributes
$|O| \cdot |G| / |O| = |G|$ to the second count. So the count is $|G|$ times the number of orbits. $\square$

The orbit-stabilizer theorem, the full proof and the history (it was known to Cauchy and Frobenius before Burnside put it
in his 1897 book) are in [Algebra, Chapter 16](../algebra/16-Group-Actions-and-Sylow.md). Here we use it.

### Fixed colourings come from cycles

How do we find $|\operatorname{Fix}(g)|$ without listing? Every rearrangement of positions splits the positions into
**cycles**: follow a position to where $g$ sends it, then where it sends that, and so on, until you come back.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 200" role="img" aria-label="Six beads on a ring, numbered 0 to 5. Turning by two places moves bead 0 to 2 to 4 and back, and bead 1 to 3 to 5 and back: two cycles of length 3">
<circle cx="110" cy="100" r="70" fill="none" stroke="currentColor" stroke-opacity="0.4"/>
<defs><marker id="arr15" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="117.0" y1="42.1" x2="163.1" y2="122.0" stroke="#eea66f" stroke-width="2.5" marker-end="url(#arr15)"/>
<line x1="163.6" y1="77.1" x2="117.5" y2="157.0" stroke="#9cc9ea" stroke-width="2.5" marker-end="url(#arr15)"/>
<line x1="156.6" y1="135.0" x2="64.4" y2="135.0" stroke="#eea66f" stroke-width="2.5" marker-end="url(#arr15)"/>
<line x1="103.0" y1="157.9" x2="56.9" y2="78.0" stroke="#9cc9ea" stroke-width="2.5" marker-end="url(#arr15)"/>
<line x1="56.4" y1="122.9" x2="102.5" y2="43.0" stroke="#eea66f" stroke-width="2.5" marker-end="url(#arr15)"/>
<line x1="63.4" y1="65.0" x2="155.6" y2="65.0" stroke="#9cc9ea" stroke-width="2.5" marker-end="url(#arr15)"/>
<circle cx="110.0" cy="30.0" r="12" fill="#eea66f" stroke="currentColor"/>
<text x="110.0" y="35.0" text-anchor="middle" font-size="13" fill="currentColor">0</text>
<circle cx="170.6" cy="65.0" r="12" fill="#9cc9ea" stroke="currentColor"/>
<text x="170.6" y="70.0" text-anchor="middle" font-size="13" fill="currentColor">1</text>
<circle cx="170.6" cy="135.0" r="12" fill="#eea66f" stroke="currentColor"/>
<text x="170.6" y="140.0" text-anchor="middle" font-size="13" fill="currentColor">2</text>
<circle cx="110.0" cy="170.0" r="12" fill="#9cc9ea" stroke="currentColor"/>
<text x="110.0" y="175.0" text-anchor="middle" font-size="13" fill="currentColor">3</text>
<circle cx="49.4" cy="135.0" r="12" fill="#eea66f" stroke="currentColor"/>
<text x="49.4" y="140.0" text-anchor="middle" font-size="13" fill="currentColor">4</text>
<circle cx="49.4" cy="65.0" r="12" fill="#9cc9ea" stroke="currentColor"/>
<text x="49.4" y="70.0" text-anchor="middle" font-size="13" fill="currentColor">5</text>
</svg>
</div>

Turning a ring of six beads by two places sends bead 0 to place 2, 2 to 4 and 4 back to 0; and 1 to 3, 3 to 5, 5 to 1.
Two cycles, each of length 3.

A colouring is fixed by $g$ exactly when every position has the same colour as the position $g$ moves it to. Following a
cycle, all its positions must share a colour. And any choice of one colour per cycle works. So:

**Fact.** If $g$ splits the positions into $c(g)$ cycles, then with $k$ colours, $|\operatorname{Fix}(g)| = k^{c(g)}$.

### The necklace formula

For necklaces, $G$ is the group of $n$ rotations, by $0, 1, \dots, n-1$ places.

**Lemma.** Rotation by $j$ places splits $n$ positions into $\gcd(j, n)$ cycles, each of length $n / \gcd(j, n)$.

*Proof.* Starting from position 0, the cycle visits $0, j, 2j, \dots$ (mod $n$) and returns to 0 at the first $m \ge 1$
with $mj \equiv 0 \pmod n$, which is $m = n / \gcd(j, n)$. Every cycle looks the same (shift it), so all cycles have
this length, and there are $n / m = \gcd(j, n)$ of them. $\square$

So the number of necklaces is $\frac{1}{n} \sum_{j=0}^{n-1} k^{\gcd(j, n)}$. Group the terms by the value of the gcd. The
number of $j$ in $\{0, \dots, n-1\}$ with $\gcd(j, n) = n/d$ is $\varphi(d)$, Euler's function (the number of whole
numbers from 1 to $d$ sharing no factor with $d$; see [Number theory, Chapter 6](../number-theory/06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)).
Indeed $\gcd(j, n) = n/d$ means $j = (n/d) i$ with $\gcd(i, d) = 1$ and $0 \le i < d$. So:

$$
N(n, k) = \frac{1}{n} \sum_{d \mid n} \varphi(d) \, k^{n/d} .
$$

**Worked example.** Six beads, three colours. The divisors of 6 are 1, 2, 3, 6, with $\varphi = 1, 1, 2, 2$:

$$
N(6, 3) = \frac{1}{6} \big( 1 \cdot 3^6 + 1 \cdot 3^3 + 2 \cdot 3^2 + 2 \cdot 3^1 \big) = \frac{729 + 27 + 18 + 6}{6} = \frac{780}{6} = 130 .
$$

**Check:** a computer that lists all 729 colourings and groups them by rotation finds 130.

**Bracelets.** Add the $n$ reflections; the group (the **dihedral group** $D_n$) now has $2n$ elements. For $n = 6$:
three reflections pass through two opposite beads, fixing those two and swapping the other four in pairs: $2 + 2 = 4$
cycles. Three pass between beads, swapping all six in pairs: 3 cycles. With $k = 3$:

$$
\frac{780 + 3 \cdot 3^4 + 3 \cdot 3^3}{12} = \frac{780 + 243 + 81}{12} = \frac{1104}{12} = 92 .
$$

So there are 130 necklaces but only 92 bracelets: 38 pairs of necklaces are mirror images of each other.

**A number theory bonus.** If $n = p$ is prime, the formula reads $N(p, k) = \big(k^p + (p-1)k\big)/p$. This is a whole
number, so $p$ divides $k^p + (p - 1)k = (k^p - k) + pk$, so $p$ divides $k^p - k$. That is Fermat's little theorem,
proved by counting necklaces.

<figure class="play" data-play="necklace"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Burnside's lemma on necklaces: c^n colourings, but far fewer necklaces once turning is allowed.</figcaption></figure>

## 15.3 The cycle index and Pólya's theorem

*Level: advanced.*

Burnside tells us how many necklaces there are. Often we want more: how many necklaces have exactly 3 orange beads and 3
blue? How many molecules have exactly two chlorine atoms? We could rerun Burnside on just those colourings, but there is
a better way: one formula that gives every such count at once, as the coefficients of a polynomial.

### The cycle index

Burnside only needed the number of cycles of each symmetry. For the refined count we need their lengths. If $g$ has $j_1$
cycles of length 1, $j_2$ of length 2, and so on, write its **cycle type** as the monomial $a_1^{j_1} a_2^{j_2} \cdots$,
where the $a_i$ are just symbols.

**Definition.** The **cycle index** of a group $G$ of rearrangements of $m$ positions is the average of the cycle types:

$$
Z(G; a_1, a_2, \dots, a_m) = \frac{1}{|G|} \sum_{g \in G} a_1^{j_1(g)} a_2^{j_2(g)} \cdots a_m^{j_m(g)} .
$$

**Examples.**

- *Four beads, rotations.* The identity has four 1-cycles: $a_1^4$. Rotation by 1 or 3 places is one 4-cycle: $a_4$
  each. Rotation by 2 places swaps two pairs: $a_2^2$. So $Z(C_4) = \frac{1}{4}\big(a_1^4 + a_2^2 + 2a_4\big)$.
- *Six beads, rotations.* By the lemma of 15.2, rotation by $j$ has $\gcd(j,6)$ cycles of length $6/\gcd(j,6)$:
  $Z(C_6) = \frac{1}{6}\big(a_1^6 + a_2^3 + 2a_3^2 + 2a_6\big)$.
- *In general, rotations.* $Z(C_n) = \frac{1}{n} \sum_{d \mid n} \varphi(d) \, a_d^{n/d}$.
- *All rearrangements of $n$ things.* For the full symmetric group $S_n$, the number of permutations with $j_k$ cycles
  of length $k$ (where $\sum_k k j_k = n$) is $n! / \prod_k \big(k^{j_k} j_k!\big)$: arrange the $n$ things in a row in
  $n!$ ways and cut the row into cycles in the chosen pattern; each cycle of length $k$ can start at any of its $k$
  members, and cycles of the same length can be listed in any order. So

$$
Z(S_n) = \sum_{j_1 + 2j_2 + \cdots + nj_n = n} \; \prod_{k=1}^{n} \frac{a_k^{j_k}}{k^{j_k} \, j_k!} .
$$

For $n = 3$: $Z(S_3) = \frac{1}{6}\big(a_1^3 + 3a_1 a_2 + 2a_3\big)$. For $n = 4$:
$Z(S_4) = \frac{1}{24}\big(a_1^4 + 6a_1^2 a_2 + 3a_2^2 + 8a_1 a_3 + 6a_4\big)$. **Check:** $1 + 6 + 3 + 8 + 6 = 24$.

Burnside's count with $k$ colours is $Z(G; k, k, \dots, k)$, because a symmetry with $c$ cycles contributes $k^c$.

### Pólya's theorem

Give each colour a variable: $x_1, x_2, \dots, x_k$ (or $r$ for orange, $b$ for blue). The **weight** of a colouring is
the product of the variables of its positions; a colouring with 3 orange and 1 blue bead has weight $r^3 b$. The
**pattern inventory** is the sum of the weights of the orbits: the coefficient of $r^3 b$ in it is the number of
different objects with 3 orange beads and 1 blue.

Write $p_i = x_1^i + x_2^i + \cdots + x_k^i$ (the **power sums**).

**Theorem (Pólya, 1937; anticipated by Redfield, 1927).** The pattern inventory equals the cycle index with $a_i$
replaced by $p_i$:

$$
\sum_{\text{orbits}} \text{weight} = Z(G; \, p_1, p_2, \dots, p_m) .
$$

*Proof.* The symmetries do not change weights (they only move positions around, keeping the colours), so all colourings
in an orbit have the same weight, and $G$ acts separately on the set $X_w$ of colourings with each weight $w$. Apply
Burnside's lemma to each $X_w$ separately and add up with weights:

$$
\sum_{\text{orbits}} \text{weight} = \sum_w w \cdot \frac{1}{|G|} \sum_{g} |\operatorname{Fix}_w(g)|
= \frac{1}{|G|} \sum_{g} \; \sum_{x \text{ fixed by } g} \text{weight}(x) .
$$

Now fix $g$ and compute the inner sum. A colouring is fixed by $g$ exactly when it is constant on each cycle of $g$, and
the colours on different cycles can be chosen independently. A cycle of length $i$ that is given colour $x_c$ contributes
$x_c^i$ to the weight. Summing over the colour choices for that cycle gives $x_1^i + \cdots + x_k^i = p_i$, and since the
choices are independent, the sum over all fixed colourings is the product over the cycles:

$$
\sum_{x \text{ fixed by } g} \text{weight}(x) = p_1^{j_1(g)} p_2^{j_2(g)} \cdots .
$$

Averaging over $g$ gives $Z(G; p_1, p_2, \dots)$. $\square$

So the theorem is really Burnside's lemma, kept honest about colours. Its power lies in the bookkeeping: the cycle
index is computed once for the symmetry, and then any number and kind of colours can be substituted.

**Worked example: four beads, two colours.** Substitute $a_1 = r + b$, $a_2 = r^2 + b^2$, $a_4 = r^4 + b^4$:

$$
\frac{1}{4}\Big( (r+b)^4 + (r^2 + b^2)^2 + 2(r^4 + b^4) \Big) = r^4 + r^3 b + 2 r^2 b^2 + r b^3 + b^4 .
$$

The coefficients 1, 1, 2, 1, 1 are exactly the table of 15.1: one necklace with no blue, one with one blue, two with two
blue (adjacent or opposite), and so on.

**Worked example: six beads, three orange and three blue.** Substitute into $Z(C_6)$ and look for $r^3 b^3$:

- $(r+b)^6$ contains $\binom{6}{3} r^3 b^3 = 20 r^3 b^3$;
- $(r^2 + b^2)^3$ has only even powers: 0;
- $2(r^3 + b^3)^2$ contains $2 \cdot 2 r^3 b^3 = 4 r^3 b^3$;
- $2(r^6 + b^6)$: 0.

Total $(20 + 4)/6 = 4$. **Check:** the four necklaces are OOOBBB, OOBOBB, OOBBOB and OBOBOB; the second and third
are mirror images, so as bracelets there would be 3.

### Using the substitution $x_i = 1$, and counting by size

A common trick: if there are two kinds, "present" (weight $x$) and "absent" (weight 1), then $p_i = 1 + x^i$, and the
coefficient of $x^e$ counts objects with $e$ positions present. We use this for graphs in 15.4.

## 15.4 Cubes and graphs

*Level: advanced.*

### Colouring the cube

The rotations of a cube form a group of 24 elements, sorted into five types by their axis ([Algebra, Chapter
16](../algebra/16-Group-Actions-and-Sylow.md) counts them). Each type moves the faces, the corners and the edges in its
own pattern of cycles:

| rotation | how many | faces (6) | corners (8) | edges (12) |
|---|---|---|---|---|
| identity | 1 | $a_1^6$ | $a_1^8$ | $a_1^{12}$ |
| 90 or 270 degrees about a face axis | 6 | $a_1^2 a_4$ | $a_4^2$ | $a_4^3$ |
| 180 degrees about a face axis | 3 | $a_1^2 a_2^2$ | $a_2^4$ | $a_2^6$ |
| 120 or 240 degrees about a corner axis | 8 | $a_3^2$ | $a_1^2 a_3^2$ | $a_3^4$ |
| 180 degrees about an edge axis | 6 | $a_2^3$ | $a_2^4$ | $a_1^2 a_2^5$ |

How to read one row: a 120 degree turn about the long diagonal through two opposite corners fixes those two corners and
cycles the other six in two groups of three; it cycles the three faces at one end, and the three at the other; and it
cycles the twelve edges in four groups of three. A 180 degree turn about the axis through the midpoints of two opposite
edges flips those two edges in place (two 1-cycles) and swaps the other ten in pairs.

**Faces.** $Z = \frac{1}{24}\big(a_1^6 + 6a_1^2 a_4 + 3a_1^2 a_2^2 + 8a_3^2 + 6a_2^3\big)$. With two colours, the
inventory is

$$
r^6 + r^5 b + 2r^4 b^2 + 2r^3 b^3 + 2r^2 b^4 + r b^5 + b^6 ,
$$

ten cubes in all. The two cubes with three red faces: the red faces meet at a corner, or they form a strip around the
cube. With three colours, putting $a_i = 3$ gives 57 cubes, and the coefficient of $r^2 b^2 g^2$ (two faces of each
colour) is 6. With six different colours, one per face, every rotation except the identity fixes nothing, so the answer
is $6!/24 = 30$: there are 30 different ways to number a die's faces with 1 to 6.

**Corners.** With two colours: $\frac{1}{24}\big(2^8 + 6 \cdot 2^2 + 3 \cdot 2^4 + 8 \cdot 2^4 + 6 \cdot 2^4\big) = \frac{256 + 24 + 48 + 128 + 96}{24} = \frac{552}{24} = 23$.

**Edges.** With two colours: $\frac{1}{24}\big(2^{12} + 6 \cdot 2^3 + 3 \cdot 2^6 + 8 \cdot 2^4 + 6 \cdot 2^7\big) = \frac{4096 + 48 + 192 + 128 + 768}{24} = \frac{5232}{24} = 218$.

**Check:** a computer that generates the 24 rotations from two quarter turns and sorts all colourings into orbits finds
10, 57, 23 and 218.

### Counting graphs up to isomorphism

A **graph on $n$ labelled vertices** is a choice, for each of the $\binom{n}{2}$ pairs, of edge or no edge: there are
$2^{\binom{n}{2}}$ of them. Two graphs are **isomorphic** if relabelling the vertices turns one into the other
([Chapter 10](10-Graphs.md)). How many graphs are there up to isomorphism?

This is a colouring problem. The positions are the $\binom{n}{2}$ pairs of vertices. The colours are "edge" (weight $x$)
and "no edge" (weight 1). The symmetries are the $n!$ relabellings of the vertices, acting on pairs: a permutation
$\sigma$ of the vertices sends the pair $\{u, v\}$ to $\{\sigma(u), \sigma(v)\}$. We need the cycle index of $S_n$
acting on pairs, which is different from its cycle index acting on vertices.

**Four vertices.** Go through the five cycle types of $S_4$ and see what each does to the six pairs
$12, 13, 14, 23, 24, 34$:

- identity (1 of them): six fixed pairs, $a_1^6$;
- a swap like $(1\,2)$ (6 of them): fixes the pairs 12 and 34; swaps $13 \leftrightarrow 23$ and $14 \leftrightarrow 24$:
  $a_1^2 a_2^2$;
- two swaps like $(1\,2)(3\,4)$ (3 of them): fixes 12 and 34; swaps $13 \leftrightarrow 24$ and $14 \leftrightarrow 23$:
  $a_1^2 a_2^2$;
- a 3-cycle like $(1\,2\,3)$ (8 of them): cycles $12 \to 23 \to 13$ and $14 \to 24 \to 34$: $a_3^2$;
- a 4-cycle like $(1\,2\,3\,4)$ (6 of them): cycles $12 \to 23 \to 34 \to 14$ and swaps $13 \leftrightarrow 24$:
  $a_2 a_4$.

So the cycle index on pairs is $\frac{1}{24}\big(a_1^6 + 9a_1^2 a_2^2 + 8a_3^2 + 6a_2 a_4\big)$. Substitute
$a_i = 1 + x^i$:

$$
\frac{(1+x)^6 + 9(1+x)^2(1+x^2)^2 + 8(1+x^3)^2 + 6(1+x^2)(1+x^4)}{24} = 1 + x + 2x^2 + 3x^3 + 2x^4 + x^5 + x^6 .
$$

There are 11 graphs on four vertices: 1 with no edges, 1 with one edge, 2 with two edges, 3 with three, 2 with four, 1
with five and 1 with six. The symmetry of the coefficients is no accident: taking the complement (swap edges and
non-edges) pairs graphs with $e$ edges with graphs with $6 - e$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 200" role="img" aria-label="The 11 graphs on 4 vertices up to isomorphism, ordered by number of edges: 0 edges 1 graph, 1 edge 1, 2 edges 2, 3 edges 3, 4 edges 2, 5 edges 1, 6 edges 1">
<rect x="10" y="8" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<circle cx="25" cy="23" r="4.5" fill="currentColor"/>
<circle cx="65" cy="23" r="4.5" fill="currentColor"/>
<circle cx="65" cy="63" r="4.5" fill="currentColor"/>
<circle cx="25" cy="63" r="4.5" fill="currentColor"/>
<text x="45" y="92" text-anchor="middle" font-size="11" fill="currentColor">0: none</text>
<rect x="82" y="8" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="97" y1="23" x2="137" y2="23" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="97" cy="23" r="4.5" fill="currentColor"/>
<circle cx="137" cy="23" r="4.5" fill="currentColor"/>
<circle cx="137" cy="63" r="4.5" fill="currentColor"/>
<circle cx="97" cy="63" r="4.5" fill="currentColor"/>
<text x="117" y="92" text-anchor="middle" font-size="11" fill="currentColor">1: 1 edge</text>
<rect x="154" y="8" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="169" y1="23" x2="209" y2="23" stroke="#eea66f" stroke-width="2.5"/>
<line x1="209" y1="23" x2="209" y2="63" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="169" cy="23" r="4.5" fill="currentColor"/>
<circle cx="209" cy="23" r="4.5" fill="currentColor"/>
<circle cx="209" cy="63" r="4.5" fill="currentColor"/>
<circle cx="169" cy="63" r="4.5" fill="currentColor"/>
<text x="189" y="92" text-anchor="middle" font-size="11" fill="currentColor">2: path</text>
<rect x="226" y="8" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="241" y1="23" x2="281" y2="23" stroke="#eea66f" stroke-width="2.5"/>
<line x1="281" y1="63" x2="241" y2="63" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="241" cy="23" r="4.5" fill="currentColor"/>
<circle cx="281" cy="23" r="4.5" fill="currentColor"/>
<circle cx="281" cy="63" r="4.5" fill="currentColor"/>
<circle cx="241" cy="63" r="4.5" fill="currentColor"/>
<text x="261" y="92" text-anchor="middle" font-size="11" fill="currentColor">2: 2 apart</text>
<rect x="298" y="8" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="313" y1="23" x2="353" y2="23" stroke="#eea66f" stroke-width="2.5"/>
<line x1="353" y1="23" x2="353" y2="63" stroke="#eea66f" stroke-width="2.5"/>
<line x1="313" y1="23" x2="353" y2="63" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="313" cy="23" r="4.5" fill="currentColor"/>
<circle cx="353" cy="23" r="4.5" fill="currentColor"/>
<circle cx="353" cy="63" r="4.5" fill="currentColor"/>
<circle cx="313" cy="63" r="4.5" fill="currentColor"/>
<text x="333" y="92" text-anchor="middle" font-size="11" fill="currentColor">3: triangle</text>
<rect x="370" y="8" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="385" y1="23" x2="425" y2="23" stroke="#eea66f" stroke-width="2.5"/>
<line x1="425" y1="23" x2="425" y2="63" stroke="#eea66f" stroke-width="2.5"/>
<line x1="425" y1="63" x2="385" y2="63" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="385" cy="23" r="4.5" fill="currentColor"/>
<circle cx="425" cy="23" r="4.5" fill="currentColor"/>
<circle cx="425" cy="63" r="4.5" fill="currentColor"/>
<circle cx="385" cy="63" r="4.5" fill="currentColor"/>
<text x="405" y="92" text-anchor="middle" font-size="11" fill="currentColor">3: path</text>
<rect x="46" y="103" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="61" y1="118" x2="101" y2="118" stroke="#eea66f" stroke-width="2.5"/>
<line x1="61" y1="118" x2="101" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="61" y1="118" x2="61" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="61" cy="118" r="4.5" fill="currentColor"/>
<circle cx="101" cy="118" r="4.5" fill="currentColor"/>
<circle cx="101" cy="158" r="4.5" fill="currentColor"/>
<circle cx="61" cy="158" r="4.5" fill="currentColor"/>
<text x="81" y="187" text-anchor="middle" font-size="11" fill="currentColor">3: star</text>
<rect x="118" y="103" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="133" y1="118" x2="173" y2="118" stroke="#eea66f" stroke-width="2.5"/>
<line x1="173" y1="118" x2="173" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="173" y1="158" x2="133" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="133" y1="158" x2="133" y2="118" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="133" cy="118" r="4.5" fill="currentColor"/>
<circle cx="173" cy="118" r="4.5" fill="currentColor"/>
<circle cx="173" cy="158" r="4.5" fill="currentColor"/>
<circle cx="133" cy="158" r="4.5" fill="currentColor"/>
<text x="153" y="187" text-anchor="middle" font-size="11" fill="currentColor">4: square</text>
<rect x="190" y="103" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="205" y1="118" x2="245" y2="118" stroke="#eea66f" stroke-width="2.5"/>
<line x1="245" y1="118" x2="245" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="205" y1="118" x2="245" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="245" y1="158" x2="205" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="205" cy="118" r="4.5" fill="currentColor"/>
<circle cx="245" cy="118" r="4.5" fill="currentColor"/>
<circle cx="245" cy="158" r="4.5" fill="currentColor"/>
<circle cx="205" cy="158" r="4.5" fill="currentColor"/>
<text x="225" y="187" text-anchor="middle" font-size="11" fill="currentColor">4: paw</text>
<rect x="262" y="103" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="277" y1="118" x2="317" y2="118" stroke="#eea66f" stroke-width="2.5"/>
<line x1="317" y1="118" x2="317" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="317" y1="158" x2="277" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="277" y1="158" x2="277" y2="118" stroke="#eea66f" stroke-width="2.5"/>
<line x1="277" y1="118" x2="317" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="277" cy="118" r="4.5" fill="currentColor"/>
<circle cx="317" cy="118" r="4.5" fill="currentColor"/>
<circle cx="317" cy="158" r="4.5" fill="currentColor"/>
<circle cx="277" cy="158" r="4.5" fill="currentColor"/>
<text x="297" y="187" text-anchor="middle" font-size="11" fill="currentColor">5: K4 - edge</text>
<rect x="334" y="103" width="70" height="70" rx="6" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.3"/>
<line x1="349" y1="118" x2="389" y2="118" stroke="#eea66f" stroke-width="2.5"/>
<line x1="389" y1="118" x2="389" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="389" y1="158" x2="349" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="349" y1="158" x2="349" y2="118" stroke="#eea66f" stroke-width="2.5"/>
<line x1="349" y1="118" x2="389" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<line x1="389" y1="118" x2="349" y2="158" stroke="#eea66f" stroke-width="2.5"/>
<circle cx="349" cy="118" r="4.5" fill="currentColor"/>
<circle cx="389" cy="118" r="4.5" fill="currentColor"/>
<circle cx="389" cy="158" r="4.5" fill="currentColor"/>
<circle cx="349" cy="158" r="4.5" fill="currentColor"/>
<text x="369" y="187" text-anchor="middle" font-size="11" fill="currentColor">6: K4</text>
</svg>
</div>

**More vertices.** The same method, with more bookkeeping, gives the counts

| vertices $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| labelled graphs $2^{\binom{n}{2}}$ | 1 | 2 | 8 | 64 | 1,024 | 32,768 | 2,097,152 | 268,435,456 |
| graphs up to isomorphism | 1 | 2 | 4 | 11 | 34 | 156 | 1,044 | 12,346 |

**Check:** for $n$ up to 6, a computer can run Burnside directly over all $n!$ relabellings and finds 1, 2, 4, 11, 34,
156.

**Almost all graphs have no symmetry.** Compare the two rows. For large $n$, the number of unlabelled graphs is close to
$2^{\binom{n}{2}} / n!$: for $n = 8$, $268{,}435{,}456 / 40{,}320 \approx 6{,}658$, against the true 12,346; the ratio
tends to 1 as $n$ grows (Erdős and Rényi proved in 1963 that almost all graphs have no symmetry other than the identity). The reason is Burnside's lemma itself: the identity contributes $2^{\binom{n}{2}}$, and every other
relabelling fixes far fewer graphs, because it has far fewer cycles on the pairs. So in the average, the identity term
dominates.

### Try it in Python

```python
from itertools import combinations, permutations

def count_graphs(n):
    """Graphs on n vertices up to isomorphism, by Burnside over all n! relabellings."""
    pairs = list(combinations(range(n), 2))
    index = {p: i for i, p in enumerate(pairs)}
    total = 0
    for s in permutations(range(n)):
        image = [index[tuple(sorted((s[u], s[v])))] for u, v in pairs]
        seen, cycles = set(), 0
        for i in range(len(pairs)):
            if i not in seen:
                cycles += 1
                while i not in seen:
                    seen.add(i); i = image[i]
        total += 2 ** cycles
    return total // len(list(permutations(range(n))))

print([count_graphs(n) for n in range(1, 7)])   # [1, 2, 4, 11, 34, 156]
```

## 15.5 Chemistry: counting isomers

*Level: advanced.*

Chemists were counting with symmetry long before group theory gave them the tools. Two molecules with the same atoms but
different structures are **isomers**. For example, $\mathrm{C_4H_{10}}$ is both butane (four carbons in a chain) and
isobutane (three carbons attached to a central one). Counting isomers is a colouring problem with a symmetry group, and
George Pólya's 1937 paper, which set out the theorem of 15.3, was titled (in German) "Combinatorial enumeration for
groups, graphs and chemical compounds".

An honest warning first. The counts below are of **structural** (constitutional) isomers, or of arrangements up to a
stated symmetry group. Real chemistry adds complications that the simple model leaves out: some arrangements are
mirror-image pairs (**stereoisomers**), some predicted molecules are too strained or unstable to exist, and the
symmetry of a molecule is an idealisation of a moving object. With that said, the counts match the chemistry well.

### Substituted methanes

Methane, $\mathrm{CH_4}$, has a carbon at the centre of a regular tetrahedron with a hydrogen at each corner. Replace
some hydrogens by other atoms, say chlorine, bromine or fluorine. How many different molecules are there?

The rotations of a tetrahedron form a group of 12: the identity ($a_1^4$); eight rotations by 120 or 240 degrees about
an axis through a corner and the opposite face, which fix that corner and cycle the other three ($a_1 a_3$); and three
rotations by 180 degrees about an axis through the midpoints of opposite edges ($a_2^2$). So

$$
Z_{\text{rot}} = \frac{1}{12}\big(a_1^4 + 8a_1 a_3 + 3a_2^2\big) .
$$

With $k$ kinds of atom, the number of molecules up to rotation is $(k^4 + 8k^2 + 3k^2)/12 = (k^4 + 11k^2)/12$. With
$k = 4$ (H, F, Cl, Br): $(256 + 176)/12 = 36$.

If we also count mirror images as the same, the group is all 24 rearrangements of the four corners (every permutation of
the corners of a regular tetrahedron is a rotation or a rotation combined with a reflection), and the count is
$Z(S_4; k, \dots, k)$. With $k = 4$: $(256 + 6 \cdot 64 + 3 \cdot 16 + 8 \cdot 16 + 6 \cdot 4)/24 = 840/24 = 35$.

The difference, $36 - 35 = 1$, is exactly one pair of mirror images that no rotation can match: the molecule with all
four atoms different, $\mathrm{CHFClBr}$ (bromochlorofluoromethane). It is **chiral**, like a left and a right hand,
and its two forms really are different molecules. Every other arrangement repeats some atom, and then the mirror plane
through the carbon and the other two corners swaps the two equal atoms and leaves the molecule unchanged, so it is its
own mirror image. Here Pólya's arithmetic detects a real
chemical phenomenon: the gap between the rotation count and the full count is the number of chiral pairs.

### Substituted benzenes

Benzene, $\mathrm{C_6H_6}$, is a flat ring of six carbons, each with one hydrogen. Its symmetry group, acting on the six
positions, is the dihedral group of the hexagon, of order 12. Replace hydrogens by chlorine: with weight $x$ for Cl, the
cycle index of $D_6$ gives the inventory

$$
1 + x + 3x^2 + 3x^3 + 3x^4 + x^5 + x^6 ,
$$

13 molecules in all. The 3 with two chlorines are the familiar ortho-, meta- and para-dichlorobenzene (chlorines on
neighbouring, next-but-one, and opposite carbons). This example is worked out in detail in [Algebra, Chapter
16](../algebra/16-Group-Actions-and-Sylow.md).

**Naphthalene**, $\mathrm{C_{10}H_8}$, is two benzene rings sharing an edge. It has 8 hydrogen positions and a symmetry
group of order 4 (two reflections and a half turn in the plane of the molecule; for counting positions, flipping the flat
molecule over does the same as one of these). None of the three non-identity symmetries fixes a hydrogen position, and
each swaps the eight positions in four pairs, so $Z = \frac{1}{4}\big(a_1^8 + 3a_2^4\big)$. The number of
dichloronaphthalenes is the coefficient of $x^2$ in $\frac{1}{4}\big((1+x)^8 + 3(1+x^2)^4\big)$:

$$
\frac{\binom{8}{2} + 3\binom{4}{1}}{4} = \frac{28 + 12}{4} = 10 ,
$$

and there are indeed ten dichloronaphthalenes.

### Alcohols and alkanes: counting trees

*Expert.* The hardest classical case is a family of molecules of unbounded size. An **alkane** is $\mathrm{C_nH_{2n+2}}$:
the carbons form a tree in which every carbon has at most 4 neighbours, and hydrogens fill the remaining bonds. So
counting alkanes means counting trees with $n$ vertices and maximum degree 4, up to isomorphism. Arthur Cayley began
counting such trees in the 1870s; the right method came with Pólya.

Start with a simpler family: **alkyl groups** $\mathrm{C_nH_{2n+1}}$, the pieces you get by removing one hydrogen, with a
free bond at one carbon (the root). They count the **alcohols** $\mathrm{C_nH_{2n+1}OH}$: attach an OH group to the free
bond. Let $a_n$ be the number of alkyl groups with $n$ carbons, and set $a_0 = 1$ (a lone hydrogen, the "empty" group).

An alkyl group with $n \ge 1$ carbons is a root carbon with three attached smaller groups (each possibly empty), whose
order does not matter: the three slots can be permuted freely, so the group is $S_3$. A multiset of three groups is a
"colouring" of 3 slots in which the colours are themselves the smaller groups, weighted by $x^{\text{carbons}}$. Pólya's
theorem, with the power sums replaced by $A(x^i)$, gives

$$
A(x) = 1 + x \cdot Z\big(S_3; A(x), A(x^2), A(x^3)\big) = 1 + \frac{x}{6}\Big(A(x)^3 + 3A(x)A(x^2) + 2A(x^3)\Big) ,
$$

where $A(x) = \sum_n a_n x^n$. (Substituting $A(x^i)$ for $a_i$ is the same proof: a cycle of length $i$ among the three
slots must hold $i$ copies of the same group, which contributes $x^{i \cdot (\text{its carbons})}$.) The equation
determines the coefficients one at a time, since the right side only uses smaller ones. The result:

| carbons $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| alkyl groups (alcohols) | 1 | 1 | 2 | 4 | 8 | 17 | 39 | 89 | 211 | 507 |
| alkanes | 1 | 1 | 1 | 2 | 3 | 5 | 9 | 18 | 35 | 75 |

**Check against chemistry:** there are 2 propanols (1-propanol and 2-propanol), 4 butanols (1-butanol, 2-butanol,
isobutanol, tert-butanol) and 8 pentanols, counting structures only. (2-butanol is chiral, so counting mirror forms
separately gives 5 butanols.)

For the alkanes themselves, the trees have no root, and the trick is to root them in a canonical place, near the middle
of the tree. Richard Otter (1948) found a neat way: for any tree, (number of vertices) minus (number of edges) is 1, and
summing that identity over the orbits under symmetry gives a formula for unrooted trees in terms of rooted ones. Henry
Henze and Charles Blair had already computed the alkane numbers in 1931 with recursive formulas of this kind. The counts
grow fast: there are 366,319 alkanes with 20 carbons (most of which nobody has ever made).

### Try it in Python

```python
def alkyl_counts(N):
    """a_0..a_{N-1} from A(x) = 1 + x (A^3 + 3 A(x) A(x^2) + 2 A(x^3)) / 6."""
    a = [1] + [0] * (N - 1)
    for n in range(1, N):
        A = a[:n]                      # coefficients known so far
        def coef(m, k):                # coefficient of x^m in A(x^k)
            return A[m // k] if m % k == 0 and m // k < n else 0
        m = n - 1                      # we need x^(n-1) of the bracket
        cube = sum(A[i] * A[j] * A[m - i - j] for i in range(n) for j in range(n - i) if m - i - j < n)
        mixed = sum(A[i] * coef(m - i, 2) for i in range(n))
        a[n] = (cube + 3 * mixed + 2 * coef(m, 3)) // 6
    return a

print(alkyl_counts(11))   # [1, 1, 1, 2, 4, 8, 17, 39, 89, 211, 507]
```

### What lies beyond

Pólya's theorem is the beginning of a large subject. Nicolaas de Bruijn extended it to count when the colours themselves
can be permuted (for example, counting colourings up to swapping colours as well as rotating). Frank Harary and Edgar
Palmer's book *Graphical Enumeration* (1973) applies it to many kinds of graphs. In modern algebraic combinatorics the
cycle index of $S_n$ is recognised as a generating function for the symmetric functions of
[Chapter 20](20-Where-Combinatorics-Goes.md), and the whole theory sits inside the language of **combinatorial
species** introduced by André Joyal in 1981.

## Check yourself

??? question "1. How many necklaces of 5 beads in 2 colours are there? How many bracelets?"

    5 is prime, so $N(5, 2) = (2^5 + 4 \cdot 2)/5 = 40/5 = 8$. For bracelets add 5 reflections, each through one bead
    and the opposite gap: they fix that bead and swap two pairs, 3 cycles, $2^3 = 8$ fixed each. Total
    $(40 + 40)/10 = 8$. Every necklace of 5 beads in 2 colours equals its own mirror image.

??? question "2. Find $N(6, 2)$ from the necklace formula, and the number of 6-bead bracelets in 2 colours."

    $N(6,2) = \frac{1}{6}(2^6 + 2^3 + 2 \cdot 2^2 + 2 \cdot 2) = \frac{64 + 8 + 8 + 4}{6} = \frac{84}{6} = 14$. Bracelets:
    add three reflections with 4 cycles ($2^4 = 16$ each) and three with 3 cycles ($2^3 = 8$ each):
    $(84 + 48 + 24)/12 = 13$.

??? question "3. Colour the four corners of a square with $k$ colours, up to rotations and reflections. Find the formula and evaluate it for $k = 2$ and $k = 3$."

    The dihedral group $D_4$ has 8 elements: identity ($a_1^4$); rotations by 90 and 270 degrees ($a_4$ each); rotation
    by 180 ($a_2^2$); two reflections through opposite corners (fix two corners, swap two: $a_1^2 a_2$); two
    reflections through opposite edge midpoints ($a_2^2$). Count: $(k^4 + 2k + 3k^2 + 2k^3)/8$. For $k = 2$:
    $(16 + 4 + 12 + 16)/8 = 6$. For $k = 3$: $(81 + 6 + 27 + 54)/8 = 168/8 = 21$.

??? question "4. Show that $Z(S_n; k, k, \dots, k) = \binom{n + k - 1}{n}$. Why should it be?"

    Under all permutations of the $n$ positions, two colourings are the same exactly when they use each colour the same
    number of times. So orbits correspond to multisets of size $n$ from $k$ colours, and by stars and bars
    ([Chapter 2](02-Permutations-and-Combinations.md)) there are $\binom{n+k-1}{n}$ of them. Burnside's lemma says the
    number of orbits is $Z(S_n; k, \dots, k)$. (For $n = 4$: $(k^4 + 6k^3 + 11k^2 + 6k)/24 = k(k+1)(k+2)(k+3)/24$.)

??? question "5. List the three graphs on four vertices with three edges, and check that their numbers of labellings add to $\binom{6}{3} = 20$."

    Triangle plus an isolated vertex: choose the isolated vertex, 4 labellings. Path on four vertices: $4!/2 = 12$
    labellings (a path and its reverse are the same). Star $K_{1,3}$: choose the centre, 4 labellings. Total
    $4 + 12 + 4 = 20$. **Check:** each count is $4!/|\text{automorphisms}|$: $24/6$, $24/2$, $24/6$.

??? question "6. How many ways are there to colour the faces of a cube so that two faces are red, two blue and two green?"

    Find the coefficient of $r^2 b^2 g^2$, rotation type by rotation type.

    - Identity: $\frac{6!}{2!\,2!\,2!} = 90$ colourings.
    - 90 degree face rotations ($a_1^2 a_4$): a 4-cycle needs four faces of one colour, 0.
    - 180 degree face rotations ($a_1^2 a_2^2$): if the two fixed faces had different colours, each of those colours
      would need one more face, but the other faces come in pairs; so the fixed faces share a colour (3 ways) and the two
      2-cycles take the other two colours (2 ways): 6 each, 18 for the three rotations.
    - Corner rotations ($a_3^2$): 0.
    - Edge rotations ($a_2^3$): one colour per 2-cycle, $3! = 6$ each, 36 for the six rotations.

    Total $(90 + 18 + 36)/24 = 144/24 = 6$.

??? question "7. How many molecules can be made by attaching H or Cl to the four bonds of a carbon atom (up to rotation)? List them."

    $(k^4 + 11k^2)/12$ with $k = 2$: $(16 + 44)/12 = 5$. They are $\mathrm{CH_4}$, $\mathrm{CH_3Cl}$, $\mathrm{CH_2Cl_2}$,
    $\mathrm{CHCl_3}$ and $\mathrm{CCl_4}$: one for each number of chlorines, since with only two kinds of atom no
    arrangement is chiral.

??? question "8. Use the necklace formula to prove that $n$ divides $\sum_{d \mid n} \varphi(d) k^{n/d}$ for all $n, k \ge 1$. Check it for $n = 4$, $k = 3$."

    The sum divided by $n$ is the number of necklaces, which is a whole number. For $n = 4$, $k = 3$:
    $\varphi(1) 3^4 + \varphi(2) 3^2 + \varphi(4) 3^1 = 81 + 9 + 6 = 96$, and $96 / 4 = 24$ necklaces.

??? question "9. Using the cycle index of $S_3$ on the pairs of three vertices, count graphs on 3 vertices by number of edges."

    On the three pairs $12, 13, 23$: the identity gives $a_1^3$; each of the 3 swaps, such as $(1\,2)$, fixes 12 and swaps
    13 with 23: $a_1 a_2$; each of the 2 three-cycles cycles all pairs: $a_3$. So $Z = \frac{1}{6}(a_1^3 + 3a_1 a_2 + 2a_3)$
    (the same as on vertices, because each pair is named by the one vertex it leaves out). With $a_i = 1 + x^i$:
    $\frac{1}{6}\big((1+x)^3 + 3(1+x)(1+x^2) + 2(1+x^3)\big) = 1 + x + x^2 + x^3$. Four graphs: 0, 1, 2 or 3 edges.

??? question "10. Count the bracelets of 6 beads with exactly 2 orange and 4 blue, by Pólya and by listing."

    By listing: the two orange beads are 1, 2 or 3 apart around the ring: 3 bracelets. By Pólya with $D_6$: coefficient of
    $r^2 b^4$. Identity: $\binom{6}{2} = 15$. Rotations by 1, 5 ($a_6$) and by 2, 4 ($a_3^2$): 0. Rotation by 3 ($a_2^3$):
    choose one 2-cycle orange, 3. Reflections through beads ($a_1^2 a_2^2$, three of them): both fixed beads orange (1)
    or one 2-cycle orange (2), so 3 each, 9 in all. Reflections through gaps ($a_2^3$, three): 3 each, 9. Total
    $(15 + 3 + 9 + 9)/12 = 36/12 = 3$.

??? question "11. Extend the alkyl recursion by one step: given $a_0, \dots, a_4 = 1, 1, 1, 2, 4$, compute $a_5$."

    $a_5$ is the coefficient of $x^4$ in $\frac{1}{6}\big(A(x)^3 + 3A(x)A(x^2) + 2A(x^3)\big)$.

    In $A(x)^3$: add $a_i a_j a_l$ over ordered triples with $i + j + l = 4$. Sort them by pattern: $(4, 0, 0)$ in 3
    orders gives $3 \cdot 4 = 12$; $(3, 1, 0)$ in 6 orders gives $6 \cdot 2 = 12$; $(2, 2, 0)$ in 3 orders gives 3;
    $(2, 1, 1)$ in 3 orders gives 3. Total 30.

    In $A(x)A(x^2)$: the second factor has terms only in even powers, $a_m x^{2m}$, so the coefficient of $x^4$ is
    $a_4 a_0 + a_2 a_1 + a_0 a_2 = 4 + 1 + 1 = 6$.

    In $A(x^3)$: no $x^4$ term, 0.

    So $a_5 = (30 + 3 \cdot 6 + 0)/6 = 48/6 = 8$, matching the table: there are 8 pentyl groups and 8 pentanols.

??? question "12. Show that the number of graphs on $n$ vertices up to isomorphism is at least $2^{\binom{n}{2}}/n!$, and use it to show that for $n = 8$ there are at least 6,658."

    Each isomorphism class contains at most $n!$ labelled graphs (the relabellings of one of them). So the
    $2^{\binom{n}{2}}$ labelled graphs fill at least $2^{\binom{n}{2}}/n!$ classes. For $n = 8$:
    $2^{28}/40320 = 268435456/40320 \approx 6657.6$, so at least 6,658 (the true number is 12,346).

## What you learned

- To count objects up to symmetry, average the number of colourings each symmetry fixes (Burnside); a symmetry with $c$
  cycles fixes $k^c$ colourings.
- Rotation by $j$ of $n$ beads has $\gcd(j, n)$ cycles, which gives the necklace formula
  $\frac{1}{n}\sum_{d \mid n}\varphi(d)k^{n/d}$, and Fermat's little theorem as a bonus.
- The cycle index records the cycle types of a symmetry group; Pólya's theorem substitutes power sums into it and
  produces every refined count at once.
- The cube's 24 rotations give 10 two-coloured cubes by faces, 23 by corners and 218 by edges.
- Graphs up to isomorphism are colourings of pairs of vertices: 11 on four vertices, 34 on five, and for large $n$
  almost exactly $2^{\binom{n}{2}}/n!$.
- Chemical isomer counts (substituted methanes and benzenes, alcohols, alkanes) come from the same formulas, with the
  gap between rotation and full symmetry counting chiral molecules.

**Next:** [Chapter 16](16-Ramsey-Theory.md), where symmetry gives way to inevitability: in any large enough structure,
order must appear.

## Further reading

- G. Pólya, "Kombinatorische Anzahlbestimmungen für Gruppen, Graphen und chemische Verbindungen", *Acta Mathematica*
  68, 1937. English translation with commentary: G. Pólya and R. C. Read, *Combinatorial Enumeration of Groups, Graphs,
  and Chemical Compounds*, 1987.
- J. H. Redfield, "The theory of group-reduced distributions", *American Journal of Mathematics* 49, 1927.
- F. Harary and E. M. Palmer, *Graphical Enumeration*, 1973.
- R. Otter, "The number of trees", *Annals of Mathematics* 49, 1948.
- H. R. Henze and C. M. Blair, "The number of isomeric hydrocarbons of the methane series", *Journal of the American
  Chemical Society* 53, 1931.
- N. G. de Bruijn, "Pólya's theory of counting", in E. F. Beckenbach (editor), *Applied Combinatorial Mathematics*,
  1964.
- R. P. Stanley, *Enumerative Combinatorics*, Volume 2, 1999. Chapter 7 (symmetric functions and the cycle index).
- On this site: [Burnside's lemma](../../topics/counting/level-8/06-burnside-lemma.md) (gentle),
  [Counting by symmetry](../../topics/counting/level-3/05-counting-by-symmetry.md),
  [Algebra, Chapter 16](../algebra/16-Group-Actions-and-Sylow.md) (orbit-stabilizer, Burnside, the cube's rotations),
  the [Number theory book](../number-theory/index.md) for $\varphi$, and the [Combinatorics book](index.md).
