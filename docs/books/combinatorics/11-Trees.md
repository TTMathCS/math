# 11. Trees

*Seven villages are to be linked by roads so that you can drive from any village to any other, and roads are
expensive, so not one more road than necessary. What does such a network look like, how many roads does it have, how
many different ones are there, and if every possible road has its own price, which network is cheapest? The answer to
the first question is a tree: a connected graph with no cycles. Trees are the simplest connected graphs and the most
useful: family trees, file systems, evolutionary trees, the branching of rivers, the shortest-path trees of the
internet. In this chapter you prove six different descriptions of a tree are the same, count the labelled trees on $n$
vertices (there are $n^{n-2}$, Cayley's formula) with a beautiful bijection, find the cheapest spanning tree with two
greedy algorithms and prove that greed works here, and count the spanning trees of any graph with a determinant.*

!!! abstract "In this chapter"
    **You will learn:**

    - the six equivalent definitions of a tree, with a full proof, and why every tree has at least two leaves
    - spanning trees: why every connected graph has one, and the exchange property
    - Cayley's formula $n^{n-2}$ for labelled trees, proved by Prüfer codes, and the count of trees with given degrees
    - minimum spanning trees by Kruskal's and Prim's algorithms, and the cut property that makes greed correct
    - the matrix-tree theorem: the number of spanning trees is a determinant of the Laplacian matrix, with a proof

    **You need:** [Chapter 10](10-Graphs.md) (paths, connectivity, bridges, adjacency matrices). For 11.5,
    determinants and eigenvalues (the U of T guides on [determinants](../../uoft/MAT240H1/unit08.md) and
    [eigenvalues](../../uoft/MAT240H1/unit10.md)). Gentler version: [Tree diagrams](../../topics/counting/level-2/01-tree-diagrams.md)
    in the Topics shelf, for trees as a way to organise counting.

    **Levels:** 11.1 and 11.2 are intermediate, with complete proofs; 11.3 is intermediate to advanced; 11.4 is
    intermediate (algorithms) to advanced (proofs); 11.5 is advanced.

## 11.1 Equivalent definitions

### Trees and forests

A **tree** is a connected graph with no cycles. A graph with no cycles (connected or not) is a **forest**; its
components are trees, so a forest is a disjoint union of trees. A **leaf** is a vertex of degree 1.

Paths are trees; so are **stars** $K_{1,n-1}$ (one centre joined to $n - 1$ leaves). The graph with one vertex and no
edges is a tree too. Here are all the trees on 5 vertices, up to isomorphism: the path $P_5$, the star $K_{1,4}$, and
the "fork", a vertex of degree 3 with one of its branches extended. There are 3 of them. The numbers of trees up to
isomorphism on $n = 1, 2, \dots, 10$ vertices are

$$
1,\ 1,\ 1,\ 2,\ 3,\ 6,\ 11,\ 23,\ 47,\ 106,
$$

and there is no simple formula; counting them was one of the problems that led Cayley and later Pólya to the methods
of [Chapter 15](15-Counting-with-Symmetry.md).

**Lemma 11.1.** Every tree with at least 2 vertices has at least 2 leaves.

*Proof.* Take a longest path $v_0, v_1, \dots, v_k$ in the tree; $k \ge 1$ since the tree is connected with an edge.
All neighbours of $v_0$ lie on the path (otherwise the path could be extended). If $v_0$ had a neighbour $v_i$ with
$i \ge 2$, then $v_0, v_1, \dots, v_i, v_0$ would be a cycle. So $v_0$'s only neighbour is $v_1$: it is a leaf.
Likewise $v_k$. $\square$

Removing a leaf (with its edge) from a tree leaves a tree: still connected (no path between two other vertices passed
through a leaf, since a path enters and leaves each inner vertex), still without cycles. This makes induction on trees
easy: remove a leaf, use the induction hypothesis, put the leaf back.

### Six ways to say "tree"

**Theorem 11.2.** For a graph $G$ with $n$ vertices and $m$ edges, the following are equivalent:

1. $G$ is connected and has no cycle;
2. $G$ is connected and $m = n - 1$;
3. $G$ has no cycle and $m = n - 1$;
4. between every two vertices of $G$ there is exactly one path;
5. $G$ is connected, and removing any edge disconnects it (it is **minimally connected**);
6. $G$ has no cycle, and adding any new edge creates a cycle (it is **maximally acyclic**).

The proof uses one counting fact.

**Lemma 11.3.** A forest with $n$ vertices and $k$ components has exactly $n - k$ edges.

*Proof.* In a forest no edge lies on a cycle, so by Theorem 10.7 of [Chapter 10](10-Graphs.md) every edge is a bridge.
Remove the edges one at a time. What remains is always a forest, so each removal is of a bridge and raises the number
of components by exactly 1 (a bridge splits one component into two). After all $m$ removals there are $n$ isolated
vertices, so $k + m = n$. $\square$

*Proof of Theorem 11.2.*

**(1) ⇒ (2).** A tree is a forest with $k = 1$ component, so $m = n - 1$ by the lemma.

**(2) ⇒ (3).** Let $G$ be connected with $n - 1$ edges. If it had a cycle, remove an edge of that cycle; the graph
stays connected (the edge was not a bridge). Repeat until no cycles remain. You get a connected forest, a tree, with
fewer than $n - 1$ edges, contradicting (1) ⇒ (2). So $G$ has no cycle.

**(3) ⇒ (1).** $G$ is a forest with $k$ components and $n - k$ edges. Since $m = n - 1$, $k = 1$: $G$ is connected.

So (1), (2), (3) are equivalent.

**(1) ⇒ (4).** Paths exist because $G$ is connected. Suppose there were two different paths $P$ and $Q$ from $u$ to
$v$. Walk along both from $u$. Let $x$ be the last vertex at which they still agree before they first part, and let
$y$ be the first vertex after that point on $P$ that also lies on $Q$ (there is one, since $v$ is on both). The piece
of $P$ from $x$ to $y$ and the piece of $Q$ from $y$ back to $x$ share only $x$ and $y$, so together they form a cycle.
Contradiction.

**(4) ⇒ (1).** Paths exist, so $G$ is connected. A cycle through $u$ and $v$ would give two different paths from $u$ to
$v$, one each way around. So there is no cycle.

**(1) ⇔ (5).** Both say "connected". In a connected graph, "every edge is a bridge" is the same as "no edge lies on a
cycle" (Theorem 10.7), which is "no cycle".

**(1) ⇔ (6).** Both say "no cycle". In a graph without cycles, adding a new edge $uv$ creates a cycle exactly when
there was already a path from $u$ to $v$. So "adding any new edge creates a cycle" says that every two non-adjacent
vertices are joined by a path, that is, $G$ is connected. $\square$

Each description is useful in its own place. (2) and (3) are the quickest checks: to show a graph is a tree, count edges
and check one more property. (4) is the reason trees are good for routing: there is no choice of route. (5) and (6)
say a tree is the most economical way to connect, and the most a graph can hold without a cycle.

### Degrees in a tree

By the handshake lemma, the degrees of a tree add up to $2(n-1) = 2n - 2$. So the average degree is just under 2, and
if $L$ is the number of leaves,

$$
\sum_{v} (\deg v - 2) = -2, \qquad\text{that is}\qquad L = 2 + \sum_{\deg v \ge 3} (\deg v - 2).
$$

**Worked example.** A tree has 3 vertices of degree 3, 2 vertices of degree 2, and all other vertices are leaves. How
many leaves? $L = 2 + 3 \cdot (3 - 2) = 5$. Check: $n = 3 + 2 + 5 = 10$, $\sum \deg = 9 + 4 + 5 = 18 = 2 \cdot 9$.

Chemists use the same count. An alkane $\mathrm{C}_k\mathrm{H}_{2k+2}$ is a tree whose carbon atoms have degree 4 and
hydrogen atoms degree 1 (each carbon-carbon bond is single): with $k$ carbons, $L = 2 + 2k$ hydrogens, which is why the
formula has $2k + 2$.

### Rooted trees

Pick one vertex of a tree and call it the **root**. Every other vertex $v$ then has a unique path to the root (by (4)),
and the next vertex on it is the **parent** of $v$; $v$ is a **child** of its parent. This is how family trees, file
systems and the tree data structures of computer science are organised (see the U of T guide
[Trees](../../uoft/CSC148H1/unit07.md)). A **binary tree**, in which every vertex has at most a left child and a right
child, is counted by the Catalan numbers of [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md).

## 11.2 Spanning trees

### Every connected graph has one

A **spanning tree** of a graph $G$ is a subgraph that is a tree and contains every vertex of $G$. It is a skeleton that
keeps $G$ connected with as few edges as possible.

**Theorem 11.4.** A graph has a spanning tree if and only if it is connected.

*Proof.* A spanning tree is connected and touches every vertex, so a graph that has one is connected. Conversely, if
$G$ is connected, remove edges that lie on cycles, one at a time. Each removal keeps the graph connected (Theorem 10.7)
and spanning. The process stops, since edges are finite, when no edge lies on a cycle: a connected spanning subgraph
without cycles, a spanning tree. $\square$

Removing edges is one way. Building up is another, and it is what computers do: **breadth-first search** from a vertex
$r$ (as in [Chapter 10](10-Graphs.md)) records, for each newly reached vertex, the edge by which it was reached; these
$n - 1$ edges form a **BFS tree**, in which every vertex's path to $r$ is a shortest path in $G$. **Depth-first
search** (go as deep as possible before backing up) gives a **DFS tree**, the basis of many fast graph algorithms.

### Counting spanning trees by hand

Write $\tau(G)$ for the number of spanning trees of $G$ (with labelled vertices, so two spanning trees count as
different when they use different edge sets).

- A tree has exactly one spanning tree, itself.
- The cycle $C_n$ has $n$ spanning trees: remove any one of its $n$ edges.
- $K_4$: a spanning tree has 3 of the 6 edges, and $\binom63 = 20$ sets of 3 edges. A set of 3 edges fails exactly when
  it is a triangle (3 edges on 3 vertices leave the fourth vertex out), and $K_4$ has 4 triangles. So $\tau(K_4) = 16$.
- The **diamond** ($K_4$ minus one edge, say minus $cd$): 3 of 5 edges, $\binom53 = 10$ sets, minus the 2 triangles
  $abc$ and $abd$: $\tau = 8$.

### The exchange property

**Lemma 11.5.** Let $T$ be a spanning tree of $G$ and $e = uv$ an edge of $G$ not in $T$. Then $T + e$ contains exactly
one cycle, made of $e$ and the path from $u$ to $v$ in $T$; and for every edge $f$ on that cycle, $T + e - f$ is again a
spanning tree.

*Proof.* A cycle in $T + e$ must use $e$, since $T$ has none; the rest of it is a path from $u$ to $v$ in $T$, and there
is only one such path. Removing an edge $f$ of this cycle leaves the graph connected (Theorem 10.7), with $n - 1$
edges, so it is a tree by Theorem 11.2 (2). $\square$

This exchange is the main tool for comparing spanning trees, and the reason greedy algorithms work in 11.4.

## 11.3 Cayley's formula

*Level: intermediate to advanced.*

### The count

How many trees are there on the vertex set $\{1, 2, \dots, n\}$? Here the vertices have names, so two trees with the
same shape but different labels count separately; equivalently, we count the spanning trees of $K_n$.

- $n = 2$: one tree, the edge $12$.
- $n = 3$: a tree on 3 vertices is a path, determined by its middle vertex: 3 trees.
- $n = 4$: two shapes. Stars: choose the centre, 4 trees. Paths: $4!/2 = 12$ (orderings of the 4 vertices, with each
  path counted once from each end). Total 16, as found for $\tau(K_4)$ above.
- $n = 5$: three shapes. Paths $5!/2 = 60$; stars 5; forks: choose the vertex of degree 3 (5 ways), the vertex of
  degree 2 next to it (4 ways), and the leaf hanging from the degree-2 vertex (3 ways), 60 in all. Total 125.

$1, 3, 16, 125$: these are $2^0, 3^1, 4^2, 5^3$.

**Theorem 11.6 (Cayley's formula).** There are exactly $n^{n-2}$ trees on $n$ labelled vertices.

The formula was found by Carl Wilhelm Borchardt in 1860 in a paper on determinants, and given its name by Arthur Cayley,
who stated it in 1889 with a short argument for small cases. Many proofs are now known; the one we give, by Heinz Prüfer
(1918), turns every tree into a sequence of $n - 2$ numbers from $1$ to $n$. There are $n^{n-2}$ such sequences, so it is
enough to show the correspondence is a bijection.

### The Prüfer code

**Encoding.** Given a tree on $\{1, \dots, n\}$, $n \ge 2$: repeat $n - 2$ times: find the leaf with the **smallest
label**, write down the label of **its neighbour**, and delete the leaf. The $n - 2$ numbers written down, in order,
form the **Prüfer code** of the tree. (After $n-2$ steps two vertices remain, joined by an edge, and we stop.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 180" role="img" aria-label="A tree on seven vertices: leaves 1 and 2 are joined to vertex 5, vertex 5 is joined to 3, vertex 3 is joined to leaf 6 and to vertex 4, and vertex 4 is joined to leaf 7. Its Prüfer code is 5, 5, 3, 3, 4.">
  <g stroke="currentColor" stroke-width="1.6">
    <line x1="40" y1="40" x2="110" y2="80"/>
    <line x1="40" y1="120" x2="110" y2="80"/>
    <line x1="110" y1="80" x2="200" y2="80"/>
    <line x1="200" y1="80" x2="200" y2="150"/>
    <line x1="200" y1="80" x2="290" y2="80"/>
    <line x1="290" y1="80" x2="370" y2="80"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="40" cy="40" r="13" fill="#9cc9ea"/>
    <circle cx="40" cy="120" r="13" fill="#9cc9ea"/>
    <circle cx="110" cy="80" r="13" fill="#eea66f"/>
    <circle cx="200" cy="80" r="13" fill="#eea66f"/>
    <circle cx="200" cy="150" r="13" fill="#9cc9ea"/>
    <circle cx="290" cy="80" r="13" fill="#eea66f"/>
    <circle cx="370" cy="80" r="13" fill="#9cc9ea"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="40" y="45">1</text>
    <text x="40" y="125">2</text>
    <text x="110" y="85">5</text>
    <text x="200" y="85">3</text>
    <text x="200" y="155">6</text>
    <text x="290" y="85">4</text>
    <text x="370" y="85">7</text>
    <text x="300" y="140">code: 5, 5, 3, 3, 4</text>
  </g>
</svg>
</div>

**Worked example.** The tree in the picture has edges $15, 25, 35, 36, 34, 47$ and $n = 7$, so the code has 5 entries.

| step | leaves now | smallest leaf | its neighbour (written) |
|---|---|---|---|
| 1 | 1, 2, 6, 7 | 1 | 5 |
| 2 | 2, 6, 7 | 2 | 5 |
| 3 | 5, 6, 7 | 5 | 3 |
| 4 | 6, 7 | 6 | 3 |
| 5 | 3, 7 | 3 | 4 |

The code is $(5, 5, 3, 3, 4)$, and the last edge is $47$. Notice: vertex 5 appears twice and has degree 3; vertex 3
appears twice and has degree 3; vertex 4 appears once and has degree 2; the leaves 1, 2, 6, 7 never appear.

**Lemma 11.7.** In the Prüfer code of a tree, each vertex $v$ appears exactly $\deg(v) - 1$ times. In particular the
leaves are exactly the vertices that do not appear.

*Proof.* A vertex is written down once each time one of its neighbours is deleted as a leaf. Every vertex eventually
either is deleted (as a leaf, at which point exactly one neighbour remains, which is never written for it) or is one
of the two survivors (which also keep exactly one neighbour, each other). So $v$ loses all but one of its neighbours by
deletion, and is written $\deg(v) - 1$ times. $\square$

**Decoding.** Given a sequence $(a_1, \dots, a_{n-2})$ with entries in $\{1, \dots, n\}$: by the lemma, we know every
degree: $\deg(v) = 1 + (\text{number of times } v \text{ appears})$. Now for $i = 1, \dots, n-2$: the leaf removed at
step $i$ of the encoding was the smallest vertex that is a leaf *at that moment*, that is, the smallest vertex not yet
removed that does not appear among $a_i, a_{i+1}, \dots, a_{n-2}$. Join it to $a_i$ and mark it removed. At the end,
join the two vertices not yet removed.

**Worked example.** Decode $(4, 4, 2, 6)$, so $n = 6$.

| step | code still to come | smallest unremoved vertex not in it | edge |
|---|---|---|---|
| 1 | 4, 4, 2, 6 | 1 | $1$-$4$ |
| 2 | 4, 2, 6 | 3 | $3$-$4$ |
| 3 | 2, 6 | 4 | $4$-$2$ |
| 4 | 6 | 2 | $2$-$6$ |
| end | | remaining: 5, 6 | $5$-$6$ |

Check by encoding the result (edges $14, 34, 24, 26, 56$): the smallest leaf is 1, neighbour 4; then 3, neighbour 4;
then 4 (now a leaf), neighbour 2; then 2, neighbour 6. The code is $(4, 4, 2, 6)$ again.

*Proof of Theorem 11.6.* The decoding rule rebuilds the tree from its code, because at every step it makes the same
choice of leaf that the encoding made: the vertices still present that are leaves are exactly those that will never be
written again (Lemma 11.7 applied to the smaller tree). So encoding is one-to-one. Conversely, start from *any*
sequence of length $n-2$. The decoding rule always finds a vertex to remove (at step $i$, there are $n - i + 1$
unremoved vertices and at most $n - 1 - i$ distinct values to avoid), and it produces $n - 1$ edges. These edges form
a tree: each step joins a vertex that is never used again to a vertex still present, so, read backwards, each step
attaches a new leaf to a tree, starting from the final edge. Encoding that tree gives back the sequence (the same
choices again). So encoding is a bijection between trees on $\{1, \dots, n\}$ and the $n^{n-2}$ sequences. $\square$

### What the code gives for free

Because degrees are visible in the code, Prüfer's bijection counts much more than all trees.

**Corollary 11.8.** For positive integers $d_1, \dots, d_n$ with $\sum d_i = 2n - 2$, the number of trees on
$\{1, \dots, n\}$ in which vertex $i$ has degree $d_i$ is the multinomial coefficient

$$
\binom{n-2}{d_1 - 1,\ d_2 - 1,\ \dots,\ d_n - 1} = \frac{(n-2)!}{(d_1 - 1)!\,(d_2-1)!\cdots(d_n - 1)!}.
$$

*Proof.* These trees correspond to the sequences of length $n - 2$ in which $i$ appears exactly $d_i - 1$ times, and
the number of arrangements of such a multiset is the multinomial coefficient ([Chapter 2](02-Permutations-and-Combinations.md)). $\square$

**Check, $n = 4$.** Degrees $(3,1,1,1)$: $\frac{2!}{2!} = 1$ (the star centred at 1); four choices of centre give
4 stars. Degrees $(2,2,1,1)$: $\frac{2!}{1!\,1!} = 2$ (paths $3$-$1$-$2$-$4$ and $4$-$1$-$2$-$3$); six choices of the two
middle vertices give 12 paths. $4 + 12 = 16$.

Summing the corollary over all degree sequences gives $n^{n-2}$ by the multinomial theorem
($\sum \binom{n-2}{k_1, \dots, k_n} = (1 + 1 + \cdots + 1)^{n-2}$), a second view of Cayley's formula.

**Worked example: a leaf.** In how many trees on $\{1, \dots, n\}$ is vertex 1 a leaf? Exactly when 1 is absent from the
code: $(n-1)^{n-2}$ sequences. So a random labelled tree has vertex 1 as a leaf with probability
$\left(1 - \frac1n\right)^{n-2}$, which tends to $1/e \approx 0.37$. In a large random tree, about 37% of the vertices
are leaves.

### Other proofs

Cayley's formula has an unusually rich collection of proofs: by the matrix-tree theorem (in 11.5), by André Joyal's
bijection with functions from $\{1,\dots,n\}$ to itself (1981), and by Jim Pitman's double counting of ways to build a
rooted tree by adding edges (1999), one of the four proofs collected in Aigner and Ziegler's *Proofs from THE BOOK*.
We give Pitman's in brief, since it is short.

*Pitman's double count (sketch).* Count sequences of $n - 1$ directed edges that, added one at a time to $n$ isolated
vertices, build a **rooted** tree with every edge pointing away from the root. Starting from the finished tree: there are
$T_n$ trees, $n$ choices of root, and $(n-1)!$ orders for the edges, so $T_n\, n\,(n-1)!$ sequences. Starting from
nothing: when $k$ edges have been added, the graph is a forest of $n - k$ rooted trees; the next edge may start at any of
the $n$ vertices and must end at the root of one of the *other* trees (that root then stops being a root), one of
$n - k - 1$ roots, so there are
$n(n-k-1)$ choices. The product over $k = 0, \dots, n-2$ is $n^{n-1}(n-1)!$. Equating, $T_n\, n\,(n-1)! = n^{n-1}(n-1)!$,
so $T_n = n^{n-2}$. $\square$

## 11.4 Minimum spanning trees

### The problem

Back to the villages. Each possible road $e$ has a cost $w(e) > 0$, its **weight**. We want a spanning tree whose total
weight $\sum_{e \in T} w(e)$ is as small as possible: a **minimum spanning tree** (MST). Trying all spanning trees is
hopeless ($K_{20}$ has $20^{18} \approx 2.6 \times 10^{23}$ of them), but two simple greedy rules find an MST quickly.

**Kruskal's algorithm** (Joseph Kruskal, 1956). Sort the edges from lightest to heaviest. Go through them in order,
and keep an edge if it does not form a cycle with the edges kept so far. Stop when $n - 1$ edges are kept.

**Prim's algorithm** (Robert Prim, 1957, and earlier Vojtěch Jarník, 1930). Start from any vertex. At each step add the
lightest edge that joins a vertex already in the tree to a vertex not yet in it. Stop when all vertices are in.

Even earlier, Otakar Borůvka (1926) solved the problem with a third greedy method, for the design of an electricity
network in Moravia.

### A worked example

Six towns $A$ to $F$, nine possible links:

| edge | $AC$ | $CE$ | $AB$ | $BC$ | $EF$ | $DE$ | $CD$ | $BD$ | $DF$ |
|---|---|---|---|---|---|---|---|---|---|
| weight | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 195" role="img" aria-label="Six towns A to F with nine weighted edges. The minimum spanning tree edges AC 2, CE 3, AB 4, EF 6 and DE 7 are drawn thick and coloured; the other edges BC 5, CD 8, BD 10 and DF 11 are thin.">
  <g stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55">
    <line x1="140" y1="35" x2="140" y2="155"/>
    <line x1="140" y1="155" x2="290" y2="35"/>
    <line x1="140" y1="35" x2="290" y2="35"/>
    <line x1="290" y1="35" x2="390" y2="95"/>
  </g>
  <g stroke="#eea66f" stroke-width="5" stroke-linecap="round">
    <line x1="40" y1="95" x2="140" y2="155"/>
    <line x1="140" y1="155" x2="290" y2="155"/>
    <line x1="40" y1="95" x2="140" y2="35"/>
    <line x1="290" y1="155" x2="390" y2="95"/>
    <line x1="290" y1="35" x2="290" y2="155"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="40" cy="95" r="13" fill="#9cc9ea"/>
    <circle cx="140" cy="35" r="13" fill="#9cc9ea"/>
    <circle cx="140" cy="155" r="13" fill="#9cc9ea"/>
    <circle cx="290" cy="35" r="13" fill="#9cc9ea"/>
    <circle cx="290" cy="155" r="13" fill="#9cc9ea"/>
    <circle cx="390" cy="95" r="13" fill="#9cc9ea"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="40" y="100">A</text>
    <text x="140" y="40">B</text>
    <text x="140" y="160">C</text>
    <text x="290" y="40">D</text>
    <text x="290" y="160">E</text>
    <text x="390" y="100">F</text>
    <text x="80" y="57">4</text>
    <text x="80" y="143">2</text>
    <text x="128" y="99">5</text>
    <text x="215" y="27">10</text>
    <text x="215" y="174">3</text>
    <text x="302" y="99">7</text>
    <text x="350" y="57">11</text>
    <text x="350" y="143">6</text>
    <text x="228" y="108">8</text>
  </g>
</svg>
</div>

*Kruskal.* Take $AC$ (2), $CE$ (3), $AB$ (4). Skip $BC$ (5): $B$ and $C$ are already joined through $A$. Take $EF$ (6),
$DE$ (7). Five edges kept, $n - 1 = 5$: stop. Total $2 + 3 + 4 + 6 + 7 = 22$.

*Prim, from $A$.* Tree $\{A\}$: cheapest edge out is $AC$ (2). Tree $\{A, C\}$: candidates $AB$ 4, $BC$ 5, $CE$ 3,
$CD$ 8; take $CE$. Tree $\{A, C, E\}$: candidates $AB$ 4, $BC$ 5, $CD$ 8, $DE$ 7, $EF$ 6; take $AB$. Then $EF$ (6, against
$DE$ 7, $CD$ 8, $BD$ 10), then $DE$ (7, against $CD$ 8, $BD$ 10, $DF$ 11). Same tree, total 22.

### Why greed works: the cut property

Greedy rules usually fail: grabbing the best-looking piece now can spoil the whole. For spanning trees they cannot,
and the reason is one clean property. Split the vertex set into two non-empty parts $S$ and $V \setminus S$; this is a
**cut**, and an edge with one end on each side **crosses** it.

**Theorem 11.9 (cut property).** Suppose all edge weights are different. For every cut, the lightest edge crossing it
belongs to every minimum spanning tree.

*Proof.* Let $e = uv$ be the lightest crossing edge, $u \in S$, and suppose an MST $T$ does not contain $e$. In $T$
there is a path from $u$ to $v$; it starts in $S$ and ends outside, so some edge $f$ of it crosses the cut, and
$f \ne e$, so $w(f) > w(e)$. By the exchange lemma 11.5, $T + e - f$ is a spanning tree, and its weight is
$w(T) + w(e) - w(f) < w(T)$. This contradicts the minimality of $T$. $\square$

**Corollary 11.10.** With distinct weights, the MST is unique, and Kruskal's and Prim's algorithms find it.

*Proof.* *Prim:* at each step the edge chosen is the lightest crossing the cut between the current tree $S$ and the
rest, so it is in every MST. After $n - 1$ steps Prim has $n-1$ edges, all in every MST; since an MST has exactly
$n - 1$ edges, Prim's tree is every MST, which is therefore unique.

*Kruskal:* suppose Kruskal keeps $e = uv$, and let $S$ be the set of vertices joined to $u$ by the edges kept so far
(the component of $u$). Then $v \notin S$, or $e$ would close a cycle. Any edge lighter than $e$ crossing this cut was
looked at earlier; at that time its ends were in different components (components only grow, and they are still in
different ones now), so Kruskal kept it, and then its ends would now be in the same component, which they are not. So
$e$ is the lightest edge crossing the cut, and it is in every MST. The $n - 1$ kept edges are all in the unique MST.
$\square$

When weights may be equal, the same argument (with "some MST contains $e$" in the cut property, proved by the same
exchange) shows both algorithms still return *a* minimum spanning tree; there may then be several.

The opposite rule also works: the **cycle property** says that with distinct weights, the heaviest edge of any cycle is
in no MST. So you can also delete edges from heaviest to lightest, skipping those whose removal disconnects (the
"reverse-delete" algorithm).

### Try it in Python

Kruskal needs a fast way to ask "are $u$ and $v$ already connected?". The **union-find** structure keeps, for each
vertex, a pointer towards a representative of its component.

```python
def kruskal(vertices, weighted_edges):
    parent = {v: v for v in vertices}

    def find(v):                       # follow pointers to the representative
        while parent[v] != v:
            parent[v] = parent[parent[v]]   # path halving keeps trees shallow
            v = parent[v]
        return v

    tree, total = [], 0
    for w, u, v in sorted(weighted_edges):
        ru, rv = find(u), find(v)
        if ru != rv:                   # different components: no cycle
            parent[ru] = rv
            tree.append((u, v, w))
            total += w
    return tree, total

edges = [(2, 'A', 'C'), (3, 'C', 'E'), (4, 'A', 'B'), (5, 'B', 'C'), (6, 'E', 'F'),
         (7, 'D', 'E'), (8, 'C', 'D'), (10, 'B', 'D'), (11, 'D', 'F')]
print(kruskal('ABCDEF', edges))   # total 22
```

Greed is not always this lucky. The cheapest route that visits every town and returns, the travelling salesman problem
of [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md), has no known fast algorithm, although the MST gives a route
at most twice the optimum when distances obey the triangle inequality.

## 11.5 The matrix-tree theorem

*Level: advanced.*

### The Laplacian

How many spanning trees does a general graph have? Gustav Kirchhoff, studying electrical networks in 1847, found the
answer: a determinant.

Let $G$ have vertices $1, \dots, n$. Its **Laplacian matrix** is $L = D - A$, where $D$ is the diagonal matrix of
degrees and $A$ the adjacency matrix. So $L_{ii} = \deg(i)$, $L_{ij} = -1$ if $ij$ is an edge, and $L_{ij} = 0$
otherwise. Every row of $L$ sums to 0, so $L$ is singular: $\det L = 0$.

**Theorem 11.11 (matrix-tree theorem).** Delete row $i$ and column $i$ of $L$, for any $i$. The determinant of the
remaining $(n-1) \times (n-1)$ matrix is $\tau(G)$, the number of spanning trees.

**Worked example: $K_4$.** $L$ has 3 on the diagonal and $-1$ elsewhere. Deleting row and column 4:

$$
\det\begin{pmatrix} 3&-1&-1\\ -1&3&-1\\ -1&-1&3 \end{pmatrix} = 3(9 - 1) + 1(-3 - 1) - 1(1 + 3) = 24 - 4 - 4 = 16 .
$$

Check: 16, as counted in 11.2.

**Worked example: the diamond.** Vertices $a, b, c, d$, all edges except $cd$; degrees 3, 3, 2, 2. Delete the row and
column of $a$:

$$
\det\begin{pmatrix} 3&-1&-1\\ -1&2&0\\ -1&0&2 \end{pmatrix} = 3 \cdot 4 + 1 \cdot (-2) - 1 \cdot 2 = 8 .
$$

Check: 8, as counted by hand.

### The proof

The proof factors $L$ and uses the Cauchy-Binet formula from linear algebra. Give each edge an arbitrary direction. The
**incidence matrix** $B$ is the $n \times m$ matrix with $B_{ve} = +1$ if edge $e$ starts at $v$, $-1$ if it ends at $v$,
and 0 otherwise. Each column has one $+1$ and one $-1$.

**Step 1: $L = BB^{T}$.** The $(i,i)$ entry of $BB^{T}$ is $\sum_e B_{ie}^2$, the number of edges at $i$: $\deg(i)$. For
$i \ne j$ it is $\sum_e B_{ie}B_{je}$; only an edge joining $i$ and $j$ contributes, and it contributes $(+1)(-1) = -1$.

**Step 2: deleting a row.** Let $B_0$ be $B$ with row $i$ deleted. Then $L_0 = B_0B_0^{T}$ is $L$ with row and column $i$
deleted.

**Step 3: Cauchy-Binet.** For an $(n-1) \times m$ matrix $B_0$, the Cauchy-Binet formula says

$$
\det(B_0B_0^{T}) = \sum_{S} \det(B_0[S])^2,
$$

where $S$ runs over the sets of $n - 1$ columns (edges) and $B_0[S]$ is the square matrix made of those columns. (It
generalises $\det(XY) = \det X \det Y$ to non-square matrices; a proof is in most linear algebra texts, for example
Horn and Johnson's *Matrix Analysis*.)

**Step 4: the key lemma.** For a set $S$ of $n - 1$ edges, $\det B_0[S] = \pm 1$ if $S$ is a spanning tree, and $0$
otherwise.

*Proof.* If $S$ is not a spanning tree, then (having $n - 1$ edges) it is not connected, by Theorem 11.2. Take a
component $C$ of the graph $(V, S)$ that does not contain the deleted vertex $i$. Add up the rows of $B_0[S]$ belonging to
the vertices of $C$: each edge of $S$ inside $C$ contributes $+1$ and $-1$, and no edge of $S$ leaves $C$, so the sum is
the zero row. The rows are dependent and the determinant is 0.

If $S$ is a spanning tree, induct on $n$. For $n = 2$ the matrix is $1 \times 1$ with entry $\pm 1$. For larger $n$, the
tree has at least two leaves (Lemma 11.1), so it has a leaf $v \ne i$. The row of $v$ in $B_0[S]$ has a single non-zero
entry, $\pm 1$, in the column of $v$'s edge. Expanding the determinant along that row gives $\pm$ the determinant of the
matrix with $v$'s row and edge's column removed, which is the same construction for the tree $S$ minus the leaf $v$, on
$n - 1$ vertices. By induction it is $\pm 1$. $\square$

Putting the steps together, $\det L_0 = \sum_S \det(B_0[S])^2$ counts 1 for each spanning tree and 0 for everything else.
$\square$

### Eigenvalues, and Cayley again

The theorem has a second form. Let $0 = \mu_1 \le \mu_2 \le \cdots \le \mu_n$ be the eigenvalues of $L$ (they are real
and non-negative, because $L = BB^{T}$). Then

$$
\tau(G) = \frac{1}{n}\,\mu_2\mu_3\cdots\mu_n .
$$

*Why.* The characteristic polynomial $\det(xI - L) = \prod_k (x - \mu_k)$ has, as its coefficient of $x$, $(-1)^{n-1}$
times the sum of the $n$ principal minors of size $n - 1$ (expand the determinant; this is a standard fact). Each of
those minors is $\tau(G)$, so the coefficient is $(-1)^{n-1}n\,\tau(G)$. On the other side, since $\mu_1 = 0$, the
coefficient of $x$ in $x\prod_{k \ge 2}(x - \mu_k)$ is $(-1)^{n-1}\mu_2\cdots\mu_n$. $\square$

**Cayley's formula, second proof.** For $K_n$, $L = nI - J$. The all-ones vector has eigenvalue 0, and every vector
whose entries sum to 0 has eigenvalue $n$ (because $J$ kills it). So the eigenvalues are $0$ and $n$ repeated $n - 1$
times, and

$$
\tau(K_n) = \frac{1}{n}\,n^{n-1} = n^{n-2}.
$$

**More examples, all checked by computing the determinants.**

- The cube $Q_3$: Laplacian eigenvalues $0, 2, 2, 2, 4, 4, 4, 6$, so $\tau = \frac18 \cdot 2^3 \cdot 4^3 \cdot 6 = 384$.
- $K_{a,b}$: $\tau = a^{b-1}b^{a-1}$; for $K_{3,3}$ that is $81$, for $K_{2,3}$ it is $12$.
- The Petersen graph: $\tau = 2000$ (its Laplacian eigenvalues are $0$, $2$ five times and $5$ four times:
  $\frac{1}{10} \cdot 2^5 \cdot 5^4 = 2000$).

The Laplacian's second-smallest eigenvalue $\mu_2$, the **algebraic connectivity** (Miroslav Fiedler, 1973), measures how
well connected a graph is; it is positive exactly when the graph is connected, and it underlies "spectral clustering"
methods that split networks into communities.

### History thread

Kirchhoff's 1847 paper on electrical circuits contains the matrix-tree theorem in the language of currents: he showed
that the currents in a network of resistors can be written using sums over spanning trees. Borchardt (1860) found
$n^{n-2}$ through determinants; Cayley (1889) made it famous; Prüfer (1918) gave the bijection. Cayley's real interest was
chemistry: in the 1870s he counted tree-shaped molecules, the alkanes, which are unlabelled trees, and the problem of
counting unlabelled trees led to George Pólya's enumeration theorem of 1937 ([Chapter 15](15-Counting-with-Symmetry.md)).
The greedy algorithms for minimum spanning trees came from engineering: Borůvka's for power lines (1926), Kruskal's and
Prim's in the 1950s at the start of computer science, with Dijkstra rediscovering Prim's in 1959.

## Check yourself

??? question "1. A forest has 20 vertices and 15 edges. How many trees does it consist of?"

    By Lemma 11.3, $m = n - k$, so $k = 20 - 15 = 5$ trees.

??? question "2. A tree has 3 vertices of degree 4, one vertex of degree 3, and all its other vertices are leaves. How many vertices does it have?"

    $L = 2 + \sum_{\deg \ge 3}(\deg - 2) = 2 + 3 \cdot 2 + 1 = 9$ leaves, so $n = 3 + 1 + 9 = 13$. Check: degree sum
    $12 + 3 + 9 = 24 = 2(13 - 1)$.

??? question "3. Find the Prüfer code of the tree on $\{1, \dots, 6\}$ with edges $12, 23, 34, 25, 56$."

    Leaves 1, 4, 6. Remove 1, write 2. Leaves 4, 6: remove 4, write 3. Now 3 is a leaf (neighbour 2): leaves 3, 6;
    remove 3, write 2. Now 2 is a leaf (neighbour 5): leaves 2, 6; remove 2, write 5. Code $(2, 3, 2, 5)$, last edge 56.
    Check with Lemma 11.7: vertex 2 has degree 3 and appears twice.

??? question "4. Decode the Prüfer code $(3, 3, 1, 6, 6)$."

    $n = 7$. Step 1: smallest vertex not in $(3,3,1,6,6)$ is 2: edge $2$-$3$. Step 2: not in $(3,1,6,6)$, unremoved: 4:
    edge $4$-$3$. Step 3: not in $(1,6,6)$: 3: edge $3$-$1$. Step 4: not in $(6,6)$: 1: edge $1$-$6$. Step 5: not in
    $(6)$: 5: edge $5$-$6$. Remaining 6 and 7: edge $6$-$7$. Edges $23, 34, 13, 16, 56, 67$.

??? question "5. In how many trees on $\{1, \dots, 6\}$ is vertex 1 a leaf? In how many does vertex 1 have degree 3?"

    Leaf: 1 is absent from the code, $5^4 = 625$ of the $6^4 = 1296$ trees. Degree 3: 1 appears exactly twice in the
    code of length 4: $\binom42 \cdot 5^2 = 150$.

??? question "6. Count the labelled trees on 5 vertices of each shape (path, fork, star) using Corollary 11.8, and check the total."

    Path: three vertices of degree 2 and two of degree 1. Choose the degree-2 vertices ($\binom53 = 10$ ways); each
    choice gives $\frac{3!}{1!\,1!\,1!} = 6$ trees, 60 in all. Fork: one vertex of degree 3, one of degree 2, three
    leaves: $5 \cdot 4 = 20$ choices, times $\frac{3!}{2!\,1!} = 3$, giving 60. Star: 5 choices of centre, times
    $\frac{3!}{3!} = 1$, giving 5. Total $60 + 60 + 5 = 125 = 5^3$.

??? question "7. Run Kruskal's algorithm on $K_4$ with vertices $a, b, c, d$ and weights $ab = 1$, $bc = 2$, $ac = 3$, $ad = 4$, $bd = 5$, $cd = 6$. Then run Prim's from $d$."

    Kruskal: $ab$ (1), $bc$ (2), skip $ac$ (cycle $abc$), $ad$ (4): three edges, total 7. Prim from $d$: edges out of $d$
    are $ad$ 4, $bd$ 5, $cd$ 6; take $ad$. From $\{a, d\}$: $ab$ 1, $ac$ 3, $bd$ 5, $cd$ 6; take $ab$. From $\{a, b, d\}$:
    $bc$ 2, $ac$ 3, $cd$ 6; take $bc$. Same tree, total 7.

??? question "8. Use the matrix-tree theorem to find $\tau(K_{2,3})$, and check with the formula $a^{b-1}b^{a-1}$."

    Vertices $x_1, x_2$ (degree 3) and $y_1, y_2, y_3$ (degree 2). Delete the row and column of $x_1$: the remaining
    matrix has rows $x_2$: $(3, -1, -1, -1)$ and $y_j$: $-1$ in the $x_2$ column and 2 on the diagonal. Its determinant:
    subtract to clear the first column, $\det = 2^3 \cdot \left(3 - \tfrac12 \cdot 3\right) = 8 \cdot \tfrac32 = 12$. The
    formula gives $2^2 \cdot 3^1 = 12$.

??? question "9. Show that $K_n$ minus one edge has $(n-2)\,n^{n-3}$ spanning trees, and check $n = 4$."

    Each spanning tree of $K_n$ has $n - 1$ edges, so adding over all $n^{n-2}$ trees counts $(n-1)n^{n-2}$ pairs (tree,
    edge in it). By symmetry each of the $\binom{n}{2}$ edges lies in the same number of trees:
    $\frac{(n-1)n^{n-2}}{n(n-1)/2} = 2n^{n-3}$. Removing an edge kills exactly those trees: $n^{n-2} - 2n^{n-3} = (n-2)n^{n-3}$.
    For $n = 4$: $2 \cdot 4 = 8$, the diamond.

??? question "10. Prove that if all edge weights are distinct, a graph has exactly one minimum spanning tree. Give an example with equal weights and two."

    This is Corollary 11.10: the Prim tree's edges each belong to every MST, by the cut property, and an MST has
    exactly $n-1$ edges, so every MST equals the Prim tree. With equal weights: a triangle with all weights 1 has three
    minimum spanning trees (any two of its edges).

??? question "11. Show that every tree is bipartite, and that a tree with largest degree $\Delta$ has at least $\Delta$ leaves."

    A tree has no cycles, in particular no odd ones, so it is bipartite by König's theorem (Chapter 10). For leaves:
    $L = 2 + \sum_{\deg v \ge 3}(\deg v - 2) \ge 2 + (\Delta - 2) = \Delta$ when $\Delta \ge 3$; when $\Delta \le 2$ the tree
    is a path with $2 \ge \Delta$ leaves (or a single vertex, with $\Delta = 0$).

??? question "12. To find a maximum-weight spanning tree, is it enough to run Kruskal with the edges sorted from heaviest to lightest?"

    Yes. Replace each weight $w$ by $M - w$ for a constant $M$ larger than every weight. All spanning trees have $n-1$
    edges, so a tree's new total is $(n-1)M - (\text{old total})$: minimising the new is maximising the old. Kruskal on
    the new weights considers edges from heaviest to lightest in the old ones.

## What you learned

- A tree is a connected graph with no cycles; equivalently connected with $n - 1$ edges, acyclic with $n - 1$ edges,
  uniquely connected, minimally connected, or maximally acyclic. Every tree with 2 or more vertices has 2 leaves.
- Every connected graph has a spanning tree; adding an edge to a spanning tree makes one cycle, and removing any edge of
  it gives another spanning tree.
- There are $n^{n-2}$ labelled trees on $n$ vertices (Cayley); Prüfer codes prove it, and also count trees with given
  degrees by a multinomial coefficient.
- Kruskal's and Prim's greedy algorithms find a minimum spanning tree; the cut property (proved by exchange) is why.
- The matrix-tree theorem: any cofactor of the Laplacian $L = D - A$ counts spanning trees; equivalently
  $\tau = \frac1n\mu_2\cdots\mu_n$, which gives $n^{n-2}$ again in one line.

**Next:** [Chapter 12](12-Planar-Graphs-and-Colouring.md), graphs drawn in the plane without crossings, Euler's formula
for them, and the colouring of maps up to the four colour theorem.

## Further reading

- M. Aigner and G. M. Ziegler, *Proofs from THE BOOK*, many editions. The chapter "Cayley's formula for the number of
  trees" gives four proofs, including Pitman's.
- J. W. Moon, *Counting Labelled Trees*, 1970. Everything about Cayley's formula and its relatives.
- D. B. West, *Introduction to Graph Theory*, 2nd edition, 2001. Chapter 2 on trees, Prüfer codes, the matrix-tree
  theorem and spanning tree algorithms.
- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, *Introduction to Algorithms*, 3rd edition, 2009. The chapter
  on minimum spanning trees and union-find.
- N. Biggs, *Algebraic Graph Theory*, 2nd edition, 1993. Spectra, Laplacians and the matrix-tree theorem.
- H. Prüfer, "Neuer Beweis eines Satzes über Permutationen", *Archiv der Mathematik und Physik*, 1918.
- J. Pitman, "Coalescent random forests", *Journal of Combinatorial Theory, Series A*, 1999.
- R. L. Graham and P. Hell, "On the history of the minimum spanning tree problem", *Annals of the History of
  Computing*, 1985.
- On this site: the Topics lesson [Tree diagrams](../../topics/counting/level-2/01-tree-diagrams.md); the U of T guides
  [Trees](../../uoft/CSC148H1/unit07.md), [Binary search trees](../../uoft/CSC148H1/unit08.md),
  [Determinants](../../uoft/MAT240H1/unit08.md) and [Eigenvalues and diagonalization](../../uoft/MAT240H1/unit10.md); the
  Algebra book's [Group actions](../algebra/16-Group-Actions-and-Sylow.md), behind counting trees up to isomorphism.
