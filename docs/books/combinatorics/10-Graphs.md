# 10. Graphs

*Can you walk through a town crossing each of its bridges exactly once? Can six people at a party all have shaken
different numbers of hands? Can a group be split into two teams so that no two friends are on the same team? Is this
tangle of lines really the same network as that one, drawn differently? These questions are about things and
connections between them, and nothing else: not distances, not angles, not shapes. The mathematical object that keeps
exactly that information is a graph. In this chapter you learn the language of graphs, prove the handshake lemma,
solve the bridges of Königsberg as Euler did and then prove his answer completely, find out exactly which graphs can be
split into two sides, and learn to tell graphs apart and to count walks in them with matrices.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a graph is (vertices, edges, degrees), the common families of graphs, subgraphs and complements
    - the handshake lemma and what follows from it: an even number of odd vertices, no 7 people shaking 3 hands each, two vertices of equal degree
    - walks, trails, paths and cycles, connectivity and components, and how many edges force a graph to be connected
    - Euler's theorem on the Königsberg bridges, with a complete proof and Hierholzer's way of finding the route
    - bipartite graphs, and the theorem that a graph is bipartite exactly when it has no cycle of odd length
    - when two graphs are the same (isomorphism), the adjacency matrix, and why its powers count walks

    **You need:** counting from Part I, especially double counting ([Chapter 1](01-Counting-Principles.md)) and the
    pigeonhole principle ([Chapter 4](04-The-Pigeonhole-Principle.md)); matrix multiplication for 10.6. Gentler
    versions: [Handshakes and diagonals](../../topics/counting/level-2/05-handshakes-diagonals.md),
    [Networks and Euler paths](../../topics/logic/level-6/05-networks-euler.md) and
    [Graph colouring](../../topics/logic/level-6/06-graph-colouring.md) in the Topics shelf.

    **Levels:** 10.1 and 10.2 are beginner; 10.3 and 10.4 are beginner to intermediate, with full proofs; 10.5 is
    intermediate; 10.6 is intermediate to advanced.

## 10.1 Vertices, edges, degrees

### The idea

Draw some dots and join some pairs of them by lines. The dots might be people and the lines friendships; or towns and
roads; or atoms and chemical bonds; or web pages and links; or courses and "these two exams cannot be at the same
time". In each case what matters is *which* pairs are joined, not where the dots sit or how the lines curve.

A **graph** $G$ consists of a set $V$ of **vertices** (the dots; singular **vertex**) and a set $E$ of **edges**, each
edge being a pair $\{u, v\}$ of distinct vertices. We write $G = (V, E)$, and usually $n = |V|$ for the number of
vertices and $m = |E|$ for the number of edges. The edge $\{u,v\}$ is written $uv$ for short. If $uv$ is an edge,
$u$ and $v$ are **adjacent** (or **neighbours**), and the edge is **incident** with each of them.

These are **simple graphs**: at most one edge between two vertices, and no edge from a vertex to itself. When we need
repeated edges (several bridges between the same two banks) or **loops** (an edge from a vertex to itself), we say
**multigraph**. In a **directed graph** each edge has a direction, from a tail to a head; we will meet directed graphs
in [Chapter 13](13-Matchings-and-Flows.md). Unless we say otherwise, "graph" means a finite simple undirected graph.

The **degree** $\deg(v)$ of a vertex is the number of edges incident with it, which in a simple graph is the number of
its neighbours. (In a multigraph a loop adds 2 to the degree.) A vertex of degree 0 is **isolated**; one of degree 1
is a **leaf** (or pendant vertex). The smallest degree in $G$ is written $\delta(G)$ and the largest $\Delta(G)$. If all
degrees equal $k$, the graph is **$k$-regular**.

### A gallery of families

A few graphs appear so often that they have names.

- The **complete graph** $K_n$: $n$ vertices, every pair joined. It has $\binom{n}{2}$ edges and is $(n-1)$-regular.
- The **path** $P_n$: vertices $v_1, \dots, v_n$ with edges $v_1v_2, v_2v_3, \dots, v_{n-1}v_n$; $n - 1$ edges.
- The **cycle** $C_n$ ($n \ge 3$): the path plus the edge $v_nv_1$; $n$ edges, 2-regular.
- The **complete bipartite graph** $K_{a,b}$: $a$ vertices on one side, $b$ on the other, every vertex on one side
  joined to every vertex on the other, and no edges within a side; $ab$ edges.
- The **cube** $Q_d$: vertices are the $2^d$ strings of $d$ zeros and ones, two joined when they differ in exactly one
  place. $Q_2$ is a square, $Q_3$ the corners and edges of an ordinary cube. It is $d$-regular.
- The **Petersen graph**: the 10 two-element subsets of $\{1,2,3,4,5\}$, two joined when they are disjoint. It is
  3-regular with 15 edges, and it is the counterexample to so many hopeful conjectures that it has a book of its own
  (Holton and Sheehan, 1993).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 185" role="img" aria-label="Three graphs: the complete graph K4 on four vertices with all six edges, the cycle C5 drawn as a pentagon, and the complete bipartite graph K3,3 with three vertices on top each joined to three vertices below.">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="35" y1="45" x2="125" y2="45"/>
    <line x1="125" y1="45" x2="125" y2="135"/>
    <line x1="125" y1="135" x2="35" y2="135"/>
    <line x1="35" y1="135" x2="35" y2="45"/>
    <line x1="35" y1="45" x2="125" y2="135"/>
    <line x1="125" y1="45" x2="35" y2="135"/>
    <line x1="210" y1="40" x2="252.8" y2="71.1"/>
    <line x1="252.8" y1="71.1" x2="236.5" y2="121.4"/>
    <line x1="236.5" y1="121.4" x2="183.5" y2="121.4"/>
    <line x1="183.5" y1="121.4" x2="167.2" y2="71.1"/>
    <line x1="167.2" y1="71.1" x2="210" y2="40"/>
    <line x1="305" y1="45" x2="305" y2="135"/>
    <line x1="305" y1="45" x2="350" y2="135"/>
    <line x1="305" y1="45" x2="395" y2="135"/>
    <line x1="350" y1="45" x2="305" y2="135"/>
    <line x1="350" y1="45" x2="350" y2="135"/>
    <line x1="350" y1="45" x2="395" y2="135"/>
    <line x1="395" y1="45" x2="305" y2="135"/>
    <line x1="395" y1="45" x2="350" y2="135"/>
    <line x1="395" y1="45" x2="395" y2="135"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="35" cy="45" r="7" fill="#eea66f"/>
    <circle cx="125" cy="45" r="7" fill="#eea66f"/>
    <circle cx="125" cy="135" r="7" fill="#eea66f"/>
    <circle cx="35" cy="135" r="7" fill="#eea66f"/>
    <circle cx="210" cy="40" r="7" fill="#9cc9ea"/>
    <circle cx="252.8" cy="71.1" r="7" fill="#9cc9ea"/>
    <circle cx="236.5" cy="121.4" r="7" fill="#9cc9ea"/>
    <circle cx="183.5" cy="121.4" r="7" fill="#9cc9ea"/>
    <circle cx="167.2" cy="71.1" r="7" fill="#9cc9ea"/>
    <circle cx="305" cy="45" r="7" fill="#eea66f"/>
    <circle cx="350" cy="45" r="7" fill="#eea66f"/>
    <circle cx="395" cy="45" r="7" fill="#eea66f"/>
    <circle cx="305" cy="135" r="7" fill="#7ccf9a"/>
    <circle cx="350" cy="135" r="7" fill="#7ccf9a"/>
    <circle cx="395" cy="135" r="7" fill="#7ccf9a"/>
  </g>
  <text x="80" y="172" text-anchor="middle" font-size="14" fill="currentColor">K4</text>
  <text x="210" y="172" text-anchor="middle" font-size="14" fill="currentColor">C5</text>
  <text x="350" y="172" text-anchor="middle" font-size="14" fill="currentColor">K3,3</text>
</svg>
</div>

### Subgraphs, complements, and how many graphs there are

A **subgraph** of $G$ is a graph whose vertices are some of $G$'s vertices and whose edges are some of $G$'s edges
(between those vertices). It is **spanning** if it uses all the vertices, and **induced** if it keeps *every* edge of
$G$ between its chosen vertices. The **complement** $\overline{G}$ has the same vertices as $G$, and $uv$ is an edge of
$\overline{G}$ exactly when it is *not* an edge of $G$. So $\overline{K_n}$ has no edges, and the complement of $C_5$
is again a 5-cycle (check: in the pentagon, the non-adjacent pairs form a pentagram, another 5-cycle).

How many graphs are there with vertex set $\{1, 2, \dots, n\}$? Each of the $\binom{n}{2}$ possible edges is either in
or out, independently, so there are

$$
2^{\binom{n}{2}}
$$

**labelled graphs** on $n$ vertices: 8 for $n = 3$, 64 for $n = 4$, 1024 for $n = 5$. Many of these look alike: on 3
vertices, the three graphs with exactly one edge differ only in which vertices are called what. Counting graphs "up to
renaming" is harder; we return to it in 10.6 and [Chapter 15](15-Counting-with-Symmetry.md).

### Degree sequences

The **degree sequence** of a graph lists its degrees, usually from largest to smallest. $K_4$ has $(3,3,3,3)$; $P_4$
has $(2,2,1,1)$; $K_{2,3}$ has $(3,3,2,2,2)$. Not every list of numbers is a degree sequence:

- $(3,3,3,3,3)$ cannot be: the sum is odd, which the handshake lemma below forbids.
- $(4,4,1,1)$ cannot be: in a simple graph on 4 vertices no degree exceeds 3.
- $(3,3,1,1)$ cannot be: the two vertices of degree 3 are each joined to all three others, so every vertex has degree
  at least 2.

A sequence that is the degree sequence of some simple graph is called **graphic**. There is a fast test (the
Havel-Hakimi algorithm, from the 1950s and early 1960s): remove the largest entry $d$, subtract 1 from the next $d$
largest entries, and repeat; the sequence is graphic exactly when you never get a negative number and end with all
zeros. We do not need it later, so we leave the proof to the further reading.

## 10.2 The handshake lemma

At a party some guests shake hands. Afterwards each guest says how many hands they shook, and the host adds up the
answers. Could the total be 37?

**Theorem 10.1 (handshake lemma).** In every graph (indeed every multigraph),

$$
\sum_{v \in V} \deg(v) = 2m .
$$

*Proof by double counting.* Count the pairs $(v, e)$ where $v$ is a vertex and $e$ an edge incident with $v$. Counting
by vertices, vertex $v$ is in $\deg(v)$ pairs, so the total is $\sum_v \deg(v)$. Counting by edges, every edge has
exactly two ends, so the total is $2m$. (A loop is counted twice at its single vertex, which is why it adds 2 to the
degree.) $\square$

So the total at the party is twice the number of handshakes and cannot be 37. The lemma is Euler's: it appears in his
1736 paper on the bridges.

**Corollary 10.2.** Every graph has an even number of vertices of odd degree.

*Proof.* The sum of all degrees is even. The vertices of even degree contribute an even amount, so the vertices of odd
degree must too; a sum of odd numbers is even only if there is an even number of them. $\square$

**Worked examples.**

- *Can 7 people each shake hands with exactly 3 others?* That would be a 3-regular graph on 7 vertices, with
  $\sum \deg = 21$, odd. Impossible. In general a $k$-regular graph on $n$ vertices has $nk/2$ edges, so $nk$ must be
  even.
- *How many edges does $Q_d$ have?* It has $2^d$ vertices, each of degree $d$, so $m = d\,2^d/2 = d\,2^{d-1}$. For the
  cube $Q_3$: 12 edges.
- *The Petersen graph:* 10 vertices of degree 3, so $m = 30/2 = 15$.
- *Average degree:* $\bar d = 2m/n$. A graph with 10 vertices and 20 edges has average degree 4, so some vertex has
  degree at least 4 and some vertex has degree at most 4.

**Theorem 10.3.** Every simple graph with at least 2 vertices has two vertices of the same degree.

*Proof.* With $n$ vertices, each degree is one of $0, 1, \dots, n-1$: $n$ possible values for $n$ vertices, so the
pigeonhole principle does not yet apply. But 0 and $n-1$ cannot both occur: a vertex of degree $n - 1$ is adjacent to
every other vertex, so no vertex is isolated. So at most $n - 1$ values are used by $n$ vertices, and two vertices share
a degree. $\square$

At any party of two or more people, then, two guests shook the same number of hands.

## 10.3 Paths and connectivity

### Getting from here to there

A **walk** of length $k$ is a sequence of vertices $v_0, v_1, \dots, v_k$ in which each consecutive pair $v_{i-1}v_i$
is an edge. Its **length** counts edges, not vertices. A walk may repeat vertices and edges. Three more careful kinds:

- a **trail** is a walk that does not repeat an edge;
- a **path** is a walk that does not repeat a vertex (so it does not repeat an edge either);
- a **cycle** is a closed walk $v_0, v_1, \dots, v_k = v_0$ with $k \ge 3$ whose vertices $v_0, \dots, v_{k-1}$ are all
  different. Its length is $k$.

In $K_4$ with vertices $a, b, c, d$: $a, b, a, c$ is a walk but not a trail (edge $ab$ is used twice); $a, b, c, a, d$
is a trail but not a path ($a$ repeats); $a, b, c, d$ is a path; $a, b, c, a$ is a cycle of length 3, a **triangle**.

**Lemma 10.4.** If there is a walk from $u$ to $v$, there is a path from $u$ to $v$.

*Proof.* Take a shortest walk from $u$ to $v$. If it repeated a vertex, $v_i = v_j$ with $i < j$, we could cut out the
piece between them, $v_{i+1}, \dots, v_j$, and get a shorter walk from $u$ to $v$. So a shortest walk repeats no
vertex: it is a path. $\square$

### Connected graphs and components

A graph is **connected** if there is a path between every two of its vertices. For any graph, write $u \sim v$ when
there is a walk from $u$ to $v$. This relation is reflexive (the walk of length 0), symmetric (walk backwards) and
transitive (join two walks). So it is an equivalence relation, and its classes are the **connected components** of $G$:
the maximal connected pieces. A graph is connected exactly when it has one component.

The **distance** $d(u,v)$ between two vertices in the same component is the length of a shortest path between them. A
computer finds all distances from a start vertex $s$ by **breadth-first search**: first $s$ (distance 0), then its
neighbours (distance 1), then their unvisited neighbours (distance 2), and so on.

```python
from collections import deque

def distances(adj, s):
    """adj maps each vertex to a list of neighbours. Returns {vertex: distance from s}."""
    dist = {s: 0}
    queue = deque([s])
    while queue:
        v = queue.popleft()
        for w in adj[v]:
            if w not in dist:
                dist[w] = dist[v] + 1
                queue.append(w)
    return dist

petersen = {}
for i in range(5):
    petersen.setdefault(i, []).extend([(i + 1) % 5, (i - 1) % 5, i + 5])       # outer 5-cycle and spokes
    petersen.setdefault(i + 5, []).extend([5 + (i + 2) % 5, 5 + (i - 2) % 5, i]) # inner pentagram
print(distances(petersen, 0))   # every vertex is within distance 2 of vertex 0
```

### How many edges does it take?

A connected graph on $n$ vertices needs at least $n - 1$ edges. More precisely:

**Theorem 10.5.** A graph with $n$ vertices and $m$ edges has at least $n - m$ components.

*Proof.* Start with $n$ isolated vertices: $n$ components. Add the $m$ edges one at a time. An edge joining two
vertices in different components merges those two into one, lowering the count by 1; an edge inside a component leaves
the count unchanged. So after $m$ edges there are at least $n - m$ components. $\square$

So a connected graph has $1 \ge n - m$, that is $m \ge n - 1$. Equality, $m = n - 1$ in a connected graph, is the
world of **trees**, the subject of [Chapter 11](11-Trees.md).

In the other direction, enough edges force connectivity.

**Theorem 10.6.** If every vertex of a graph on $n$ vertices has degree at least $(n-1)/2$, the graph is connected.

*Proof.* Take two vertices $u$ and $v$. If they are adjacent we are done. Otherwise their neighbourhoods lie among the
other $n - 2$ vertices and have at least $(n-1)/2$ elements each, together at least $n - 1 > n - 2$. By pigeonhole they
share a vertex $w$, and $u, w, v$ is a path. $\square$

The bound is sharp: two disjoint copies of $K_{n/2}$ ($n$ even) have every degree $n/2 - 1$, just below $(n-1)/2$, and
are disconnected.

### Bridges

An edge whose removal increases the number of components is a **bridge** (or cut edge). A vertex whose removal does
so is a **cut vertex**. In a road network, bridges are the single points of failure.

**Theorem 10.7.** An edge is a bridge if and only if it lies on no cycle.

*Proof.* Let $e = uv$. If $e$ lies on a cycle, the rest of the cycle is a path from $u$ to $v$ avoiding $e$; any walk
that used $e$ can detour along it, so removing $e$ disconnects nothing. Conversely, if removing $e$ does not
disconnect $u$ from $v$, there is a path from $u$ to $v$ without $e$, and adding $e$ closes it into a cycle through
$e$. And removing $e$ can only separate $u$ from $v$ (any other walk that used $e$ can be rerouted through a $u$-$v$
connection if one exists). So $e$ is a bridge exactly when no such path exists, exactly when $e$ is on no cycle.
$\square$

## 10.4 Königsberg and Euler circuits

### The bridges

The city of Königsberg in Prussia (today Kaliningrad, Russia) stood on the river Pregel. Two branches of the river
flowed through the city; between them lay a stretch of land to the east and, further west, an island, the Kneiphof,
below which the branches joined. Seven bridges
joined the four land areas: the north bank, the south bank, the island, and the land between the two branches to the
east. The townspeople, the story goes, wondered whether one
could take a walk crossing every bridge exactly once.

Leonhard Euler heard of the problem and in 1736 wrote a paper on it, "Solutio problematis ad geometriam situs
pertinentis" (the solution of a problem relating to the geometry of position), published by the St Petersburg Academy
a few years later. He saw that the shapes of the land and the lengths of the bridges are irrelevant. Shrink each land
area to a point and each bridge to a line between two points: the result is a multigraph.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="The Königsberg bridges as a multigraph. North bank A and island C are joined by two edges, south bank B and island C by two edges, and A, B and C are each joined by one edge to the eastern land D. A, B and D have degree 3 and C has degree 5.">
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M120,30 Q92,62 120,95"/>
    <path d="M120,30 Q148,62 120,95"/>
    <path d="M120,160 Q92,128 120,95"/>
    <path d="M120,160 Q148,128 120,95"/>
    <line x1="120" y1="30" x2="280" y2="95"/>
    <line x1="120" y1="160" x2="280" y2="95"/>
    <line x1="120" y1="95" x2="280" y2="95"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="120" cy="30" r="12" fill="#9cc9ea"/>
    <circle cx="120" cy="160" r="12" fill="#9cc9ea"/>
    <circle cx="120" cy="95" r="12" fill="#eea66f"/>
    <circle cx="280" cy="95" r="12" fill="#7ccf9a"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="120" y="35">A</text>
    <text x="120" y="165">B</text>
    <text x="120" y="100">C</text>
    <text x="280" y="100">D</text>
    <text x="50" y="35">north bank, 3</text>
    <text x="50" y="165">south bank, 3</text>
    <text x="55" y="100">island, 5</text>
    <text x="350" y="100">east, 3</text>
  </g>
</svg>
</div>

The question becomes: is there a trail that uses every edge of this multigraph exactly once? Such a trail is an
**Euler trail**; if it ends where it started it is an **Euler circuit** (or Eulerian circuit), and a graph with an
Euler circuit is **Eulerian**.

Euler's key observation: every time a walk passes *through* a vertex, it enters by one edge and leaves by another,
using up two of that vertex's edges. So at every vertex other than the start and the end, the edges are used in pairs,
and the degree must be even. In Königsberg all four vertices have odd degree (3, 3, 3 and 5). At most two vertices (the
start and the end) may have odd degree, so no such walk exists.

### Euler's theorem

Euler proved the "only if" direction and stated the converse; a complete proof of the converse was first published by
Carl Hierholzer in 1873, after his death. Here is the full theorem.

**Theorem 10.8.** A connected multigraph with at least one edge has an Euler circuit if and only if every vertex has
even degree. It has an Euler trail that is not closed if and only if exactly two vertices have odd degree, and then the
trail starts at one of them and ends at the other.

We need one lemma.

**Lemma 10.9.** If every vertex of a (multi)graph with at least one edge has degree at least 2, the graph contains a
cycle (in a multigraph, possibly a loop or two parallel edges).

*Proof.* If there is a loop or a pair of parallel edges, that is a cycle. Otherwise take a longest path
$v_0, v_1, \dots, v_k$. Its end $v_k$ has degree at least 2, so it has a neighbour $w \ne v_{k-1}$. If $w$ were not on
the path, we could extend the path to $w$, contradicting "longest". So $w = v_i$ for some $i \le k - 2$, and
$v_i, v_{i+1}, \dots, v_k, v_i$ is a cycle. $\square$

*Proof of Theorem 10.8.* **Only if.** Follow an Euler circuit. Each time it passes through a vertex it uses two edges
there, and the start, which is also the end, is left once at the beginning and entered once at the end: two more.
Every edge is used exactly once, so every degree is even.

**If.** Induction on the number of edges $m$. Suppose $G$ is connected, every degree is even, and $m \ge 1$. Then no
vertex has degree 0 (it is connected with an edge) and none has degree 1 (odd), so all degrees are at least 2, and by
the lemma $G$ contains a cycle $C$. Remove the edges of $C$. Every vertex loses 0 or 2 from its degree, so all degrees
stay even. The remaining graph may fall into several components; each component with an edge is connected with even
degrees and fewer edges, so by induction it has an Euler circuit. Every such component shares a vertex with $C$
(because $G$ was connected, and only $C$'s edges were removed). Now walk around $C$; each time you first reach a
vertex of a component you have not yet toured, go around that component's Euler circuit, return to the same vertex,
and continue along $C$. This uses every edge exactly once and returns to the start. (If removing $C$ leaves no
edges at all, $C$ itself is the Euler circuit; this covers the smallest cases.)

**Trails.** If exactly two vertices $u, v$ have odd degree, add a new edge $uv$ (a parallel edge is fine in a
multigraph). Now all degrees are even, so there is an Euler circuit; it uses the new edge once, and deleting it leaves an
Euler trail from $u$ to $v$. Conversely, an open Euler trail gives odd degree exactly at its two ends, by the counting
in the "only if" part. $\square$

### Finding the circuit: Hierholzer's method

The proof is an algorithm. Start anywhere and walk, never reusing an edge, until you get stuck; with all degrees even
you can only get stuck back at the start, so you have a closed trail. If edges remain, pick a vertex on your trail that
still has unused edges, walk a new closed trail from it, and splice it in. Repeat.

**Worked example (bow tie).** Two triangles $a, b, c$ and $a, d, e$ sharing the vertex $a$. Degrees: $a$ has 4, the
others 2. Start at $b$: walk $b, c, a, b$ and you are stuck at $b$ with edges $ad, de, ea$ unused. The vertex $a$ on
the trail has unused edges: walk $a, d, e, a$. Splice it in where the first trail passes $a$:

$$
b, c, \underbrace{a, d, e, a}_{\text{detour}}, b .
$$

Six edges, each once. Check: $bc, ca, ad, de, ea, ab$.

**Worked example (the house).** The children's puzzle: draw a house (a square with both diagonals and a roof) without
lifting the pencil or retracing a line. Label the square $1$ (bottom left), $2$ (bottom right), $3$ (top right), $4$
(top left), and the roof peak $5$. The edges are $12, 23, 34, 41, 13, 24, 35, 45$. Degrees: $\deg 1 = 3$,
$\deg 2 = 3$, $\deg 3 = 4$, $\deg 4 = 4$, $\deg 5 = 2$. Exactly two odd vertices, so there is an Euler trail, and it
must start at the bottom left or bottom right corner. One: $1, 2, 4, 1, 3, 4, 5, 3, 2$. Check the edges used:
$12, 24, 41, 13, 34, 45, 53, 32$, all eight, none twice. Starting at the roof is hopeless, whatever you try.

**Königsberg repaired.** Add a bridge between two of the odd land areas, say the two banks $A$ and $B$, and only $C$
and $D$ remain odd: an Euler trail now exists from $C$ to $D$. Add one more, between $C$ and $D$, and all degrees are
even: an Euler circuit exists.

A related practical question, the **Chinese postman problem**, asks for the shortest closed walk using every edge *at
least* once (a postman covering every street). It was posed by the Chinese mathematician Kwan Mei-Ko in 1962, and it can
be solved efficiently: the answer is an Euler circuit after the cheapest way of duplicating edges to make all degrees
even, and finding that cheapest way is a matching problem (in a general graph, harder than the bipartite matchings of
[Chapter 13](13-Matchings-and-Flows.md), but still efficiently solvable).

<figure class="play" data-play="graphdeg"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The bridges of Königsberg: tap a bridge to remove it and count the places with an odd number of bridges.</figcaption></figure>

## 10.5 Bipartite graphs

### Two teams

A class is to be split into two teams for a debate so that no two close friends are on the same team (friends tend to
agree). When is it possible?

A graph is **bipartite** if its vertices can be split into two sets $X$ and $Y$ (the **parts** or sides) so that
every edge joins a vertex of $X$ to a vertex of $Y$. Equivalently, the vertices can be coloured with two colours so that
the two ends of every edge have different colours. Examples:

- $K_{a,b}$, by definition;
- every even cycle $C_{2k}$: colour alternately around the cycle;
- the cube $Q_d$: put the strings with an even number of 1s in $X$ and an odd number in $Y$; changing one digit
  changes the parity;
- every path, and (as Chapter 11 shows) every tree.

Not bipartite: the triangle $K_3$, and every odd cycle $C_{2k+1}$. Try to 2-colour a 5-cycle: the colours must
alternate, red, blue, red, blue, red, and the fifth vertex is red and adjacent to the first, also red.

The odd cycle is the only obstacle.

### König's criterion

**Theorem 10.10.** A graph is bipartite if and only if it has no cycle of odd length.

The theorem is due to Dénes König, whose 1936 book was the first textbook of graph theory. We need a lemma about
walks.

**Lemma 10.11.** A closed walk of odd length contains (its vertices and edges include) a cycle of odd length.

*Proof.* Induction on the length $k$ of the closed walk $v_0, v_1, \dots, v_k = v_0$. If no vertex repeats except
$v_k = v_0$, then the walk is itself a cycle (an odd closed walk without repeats has length at least 3, since length 1
would be a loop). Otherwise some vertex appears twice, $v_i = v_j$ with $0 \le i < j < k$. Split the walk at that vertex into two closed walks, $v_i, \dots, v_j$ and $v_j, \dots, v_k = v_0, \dots,
v_i$. Their lengths add up to $k$, which is odd, so one of them has odd length, and it is shorter than $k$. By
induction it contains an odd cycle. $\square$

*Proof of Theorem 10.10.* **Only if.** In a bipartite graph every edge changes sides. A cycle returns to its starting
side, so it changes sides an even number of times: its length is even.

**If.** Suppose $G$ has no odd cycle. It is enough to 2-colour each connected component, so assume $G$ is connected.
Fix a vertex $r$ and colour each vertex $v$ by the parity of its distance $d(r, v)$: $X$ = even distance,
$Y$ = odd distance. Suppose some edge $uv$ had both ends in the same part, so $d(r,u)$ and $d(r,v)$ have the same parity.
Take a shortest path from $r$ to $u$, the edge $uv$, and a shortest path from $v$ back to $r$. This is a closed walk of
length $d(r,u) + 1 + d(r,v)$, which is odd. By the lemma it contains an odd cycle, a contradiction. So every edge joins
$X$ to $Y$. $\square$

The proof is also an algorithm: run breadth-first search from any vertex, colour by parity of distance, then check
every edge. Either you get a valid 2-colouring or an edge inside one colour class, and that edge with the two search
paths gives an odd cycle you can show as proof.

**Worked example.** Is the Petersen graph bipartite? No: its outer five vertices form a 5-cycle. Is $Q_3$? Yes, by the
parity colouring. Is the graph with vertices $1, \dots, 6$ and edges $12, 23, 34, 45, 56, 61, 14$ bipartite? The
6-cycle is even; colour $1, 3, 5$ red and $2, 4, 6$ blue. The chord $14$ joins red to blue. Yes. With the chord $13$
instead, $1, 2, 3$ would be a triangle: no.

### How many edges can a bipartite graph have?

A bipartite graph with parts of sizes $a$ and $b$, $a + b = n$, has at most $ab$ edges, and

$$
ab \le \left(\frac{a + b}{2}\right)^2 = \frac{n^2}{4}
$$

because $(a+b)^2 - 4ab = (a - b)^2 \ge 0$. So a bipartite graph on $n$ vertices has at most $\lfloor n^2/4 \rfloor$
edges, reached by $K_{\lfloor n/2 \rfloor, \lceil n/2 \rceil}$. In [Chapter 18](18-Extremal-Combinatorics.md),
Mantel's theorem shows the surprising converse: any graph with *more* edges than this must contain a triangle.

Bipartite graphs model every "two kinds of things" situation: workers and jobs, students and courses, applicants and
hospitals. Matching the two sides is the subject of [Chapter 13](13-Matchings-and-Flows.md).

## 10.6 Isomorphism, adjacency matrices and counting walks

*Level: intermediate to advanced.*

### When are two graphs the same?

Draw a 5-cycle as a pentagon, and draw it again as a five-pointed star. The pictures look different, but the graphs
are the same: rename the vertices and one becomes the other. Precisely, two graphs $G$ and $H$ are **isomorphic**,
written $G \cong H$, if there is a bijection $f\colon V(G) \to V(H)$ such that $uv$ is an edge of $G$ exactly when
$f(u)f(v)$ is an edge of $H$. The bijection $f$ is an **isomorphism**; an isomorphism from $G$ to itself is an
**automorphism**, a symmetry of the graph.

To show two graphs are isomorphic, exhibit $f$ and check every pair. To show they are *not*, find an **invariant**, a
quantity that isomorphic graphs must share, on which they differ. Useful invariants:

- the numbers of vertices and edges, and the degree sequence;
- the number of triangles, or of cycles of each length;
- connectedness and the number of components;
- being bipartite; the largest distance between two vertices (the **diameter**);
- the degrees of the neighbours of each vertex.

**Worked example.** $C_6$ and two disjoint triangles: both have 6 vertices, 6 edges and degree sequence
$(2,2,2,2,2,2)$, but one is connected and the other is not. Not isomorphic.

**Worked example.** $K_{3,3}$ and the **triangular prism** (two triangles $a_1a_2a_3$ and $b_1b_2b_3$ with edges
$a_ib_i$): both are 3-regular on 6 vertices, so both have 9 edges. But the prism contains a triangle and $K_{3,3}$, being
bipartite, has none. Not isomorphic.

No list of easy invariants is known that settles every case, and deciding isomorphism quickly is a famous problem in
computer science. In 2015 László Babai announced an algorithm that runs in "quasipolynomial" time, much faster than
anything known before, though whether a truly polynomial-time algorithm exists is still open.

How many graphs are there on $n$ vertices up to isomorphism? Without labels, for $n = 1, 2, \dots, 7$:

$$
1,\ 2,\ 4,\ 11,\ 34,\ 156,\ 1044 .
$$

For $n = 4$ the 64 labelled graphs fall into 11 classes. Counting such classes in general uses the symmetry methods of
[Chapter 15](15-Counting-with-Symmetry.md). For large $n$ almost all graphs have no symmetry except the identity, so
the number is close to $2^{\binom n2}/n!$.

### The adjacency matrix

Number the vertices $1, \dots, n$. The **adjacency matrix** of $G$ is the $n \times n$ matrix $A$ with
$A_{ij} = 1$ if $ij$ is an edge and $A_{ij} = 0$ otherwise. It is symmetric with zeros on the diagonal, and row $i$
sums to $\deg(i)$. (For a multigraph, $A_{ij}$ is the number of edges between $i$ and $j$.)

**Example.** The graph with vertices $1, 2, 3, 4$ and edges $12, 13, 23, 34$ (a triangle with a tail):

$$
A = \begin{pmatrix} 0&1&1&0\\ 1&0&1&0\\ 1&1&0&1\\ 0&0&1&0 \end{pmatrix}.
$$

Renaming the vertices by a permutation $\pi$ replaces $A$ by $PAP^{-1}$ (with $P$ the matching permutation matrix),
so two graphs are isomorphic exactly when their adjacency matrices are related this way. Anything computed from $A$
that does not change under such a relabelling, like its eigenvalues or the trace of its powers, is an invariant.

### Powers count walks

**Theorem 10.12.** For every $k \ge 0$, the entry $(A^k)_{ij}$ is the number of walks of length $k$ from vertex $i$
to vertex $j$.

*Proof.* Induction on $k$. For $k = 0$, $A^0 = I$, and there is exactly one walk of length 0 from $i$ to $i$ and none
from $i$ to $j \ne i$. Suppose the statement holds for $k$. A walk of length $k + 1$ from $i$ to $j$ is a walk of length
$k$ from $i$ to some vertex $l$, followed by an edge from $l$ to $j$. For each $l$ there are $(A^k)_{il}$ choices for
the first part and $A_{lj}$ for the last step, so the number of walks is

$$
\sum_{l=1}^{n} (A^k)_{il}\, A_{lj} = (A^{k+1})_{ij},
$$

which is the definition of matrix multiplication. $\square$

**Worked example.** For the triangle with a tail,

$$
A^2 = \begin{pmatrix} 2&1&1&1\\ 1&2&1&1\\ 1&1&3&0\\ 1&1&0&1 \end{pmatrix}, \qquad
A^3 = \begin{pmatrix} 2&3&4&1\\ 3&2&4&1\\ 4&4&2&3\\ 1&1&3&0 \end{pmatrix}.
$$

Check two entries by hand. $(A^2)_{33} = 3$: the walks of length 2 from 3 back to 3 go out along one of its 3 edges and
straight back. $(A^3)_{14} = 1$: a walk $1, x, y, 4$ needs $y$ adjacent to 4, so $y = 3$, and then $x$ adjacent to
both 1 and 3, so $x = 2$. The only such walk is $1, 2, 3, 4$.

Two consequences are worth stating.

- The diagonal of $A^2$ is the degree list, since a closed walk of length 2 is "out along an edge and back". So
  $\operatorname{tr}(A^2) = \sum \deg = 2m$. Above: $2 + 2 + 3 + 1 = 8 = 2 \cdot 4$.
- A closed walk of length 3 is a triangle traversed from one of its 3 vertices in one of 2 directions, so

$$
\#\text{triangles} = \frac{\operatorname{tr}(A^3)}{6}.
$$

Above: $\operatorname{tr}(A^3) = 2 + 2 + 2 + 0 = 6$, one triangle. Check.

### A whole family at once: $K_n$

For $K_n$, $A = J - I$, where $J$ is the all-ones matrix. Since $J^2 = nJ$, powers of $A$ can be found in closed form;
the cleanest route is through eigenvalues. $J$ has eigenvalue $n$ on the all-ones vector and $0$ on the
$(n-1)$-dimensional space of vectors with entries summing to 0. So $A = J - I$ has eigenvalues $n - 1$ (once) and $-1$
($n-1$ times). Working this out (exercise 9 does the trace) gives the number of walks of length $k$ in $K_n$:

$$
(A^k)_{ii} = \frac{(n-1)^k + (n-1)(-1)^k}{n}, \qquad (A^k)_{ij} = \frac{(n-1)^k - (-1)^k}{n} \quad (i \ne j).
$$

Check with $K_4$, $k = 3$: closed walks $\frac{27 - 3}{4} = 6$ (the two directions around each of the 3 triangles
through a vertex), and walks between two different vertices $\frac{27 + 1}{4} = 7$. A direct count: from $a$ to $b$ in
three steps, the middle two vertices $x, y$ must satisfy $x \ne a$, $y \ne x$, $y \ne b$; there are 3 choices of $x$
and then 2 or 3 of $y$, and the total is 7.

These formulas solve a classic puzzle: a frog jumps each second from its current corner of a tetrahedron to one of
the other three at random. The chance that it is back where it started after $k$ jumps is $(A^k)_{ii}/3^k
= \frac14 + \frac34\left(-\frac13\right)^k$, which tends to $\frac14$, as it should.

The eigenvalues of $A$ form the **spectrum** of the graph, and **spectral graph theory** reads a great deal from it:
the largest eigenvalue of a connected $k$-regular graph is $k$; a connected graph is bipartite exactly when its
spectrum is symmetric about 0; and the **Laplacian matrix** $D - A$ ($D$ the diagonal matrix of degrees) counts
spanning trees, as [Chapter 11](11-Trees.md) shows.

### History thread

Euler's paper of 1736 is usually called the first paper in graph theory, although Euler drew no graph: he worked with
sequences of letters naming the land areas. The word "graph" in this sense came from J. J. Sylvester in 1878, by
analogy with the chemical diagrams of molecules that he and others were drawing. Kirchhoff's work on electrical
networks (1847) and Cayley's on counting trees for chemistry (from 1857) brought graphs into physics and chemistry;
the four colour problem ([Chapter 12](12-Planar-Graphs-and-Colouring.md)) kept them in mathematics. Dénes König's
*Theorie der endlichen und unendlichen Graphen* (1936) was the first book on the subject, and after 1950 graph theory
grew into one of the largest branches of mathematics, driven by computing, networks and the work of Erdős, Tutte and
many others.

## Check yourself

??? question "1. Draw a graph with degree sequence $(3,3,2,2,2)$. How many edges must it have?"

    Edges $= (3+3+2+2+2)/2 = 6$. One example: $K_{2,3}$, with the two vertices of degree 3 on one side, each joined to
    the three vertices of degree 2. Another: a 5-cycle $1,2,3,4,5$ plus the chord $13$ (then $\deg 1 = \deg 3 = 3$).

??? question "2. At a meeting of 9 people, can each person know exactly 5 others? Exactly 4 others?"

    5 others: the degree sum would be $9 \cdot 5 = 45$, odd, impossible. 4 others: yes, for example arrange the 9 in a
    circle and let each know the two nearest on each side ($C_9$ with "distance 2" chords added); every degree is 4.

??? question "3. Show that the complement of a disconnected graph is connected."

    Let $G$ be disconnected and $u, v$ two vertices. If they are in different components of $G$, then $uv$ is not an
    edge of $G$, so it is an edge of $\overline{G}$. If they are in the same component, pick $w$ in a different
    component; then $uw$ and $wv$ are non-edges of $G$, so $u, w, v$ is a path in $\overline{G}$. Either way they are
    connected in $\overline{G}$.

??? question "4. Which complete graphs $K_n$ have an Euler circuit? Which complete bipartite graphs $K_{a,b}$?"

    $K_n$ is $(n-1)$-regular, so it is Eulerian exactly when $n - 1$ is even: $n$ odd ($n \ge 3$). In $K_{a,b}$ the
    vertices have degrees $b$ and $a$, so both $a$ and $b$ must be even (and both at least 1, for connectivity).

??? question "5. How many bridges must be added to Königsberg (between existing land areas) for an Euler trail? For an Euler circuit?"

    All four areas have odd degree. Each new bridge changes the parity of exactly two areas. A trail needs at most two
    odd areas: one bridge (between two odd areas) suffices, and zero does not. A circuit needs none odd: two bridges,
    pairing up the four odd areas, and one is not enough.

??? question "6. Prove that a graph with $n$ vertices and more than $\binom{n-1}{2}$ edges is connected."

    If $G$ were disconnected, split its vertices into a component $X$ with $k$ vertices and the rest $Y$ with $n-k$,
    $1 \le k \le n - 1$. There are no edges between $X$ and $Y$, so $m \le \binom{k}{2} + \binom{n-k}{2}$. This is
    largest at $k = 1$ or $k = n-1$ (it is a convex function of $k$), where it equals $\binom{n-1}{2}$. So
    $m \le \binom{n-1}{2}$, a contradiction. The bound is sharp: $K_{n-1}$ plus an isolated vertex.

??? question "7. Is the graph with vertices $1, \dots, 8$ and edges $12, 23, 34, 41, 56, 67, 78, 85, 15, 37$ bipartite?"

    Try colouring by parity: $1$ red, so $2, 4, 5$ blue; then $3$ red (from 2), $6, 8$ red (from 5); $7$ must be blue
    (neighbour of 6 and 8, both red), and edge $37$ joins red 3 to blue 7, fine; check $34$: red-blue; $78$:
    blue-red; $67$: red-blue. Every edge is two-coloured, so yes, it is bipartite, with parts $\{1,3,6,8\}$ and
    $\{2,4,5,7\}$.

??? question "8. Find the number of walks of length 3 from a vertex to a neighbouring vertex in $K_4$, by the formula and by listing."

    Formula: $\frac{(n-1)^k - (-1)^k}{n} = \frac{27 + 1}{4} = 7$. Listing from $a$ to $b$ with vertices $a,b,c,d$ (walks
    $a, x, y, b$ with $x \ne a$, $y \ne x$, $y \ne b$): $x = b$: $y \in \{a, c, d\}$, three walks; $x = c$: $y \in \{a, d\}$,
    two; $x = d$: $y \in \{a, c\}$, two. Total 7.

??? question "9. Use $\operatorname{tr}(A^3)/6$ and the eigenvalues of $J - I$ to show that $K_n$ has $\binom{n}{3}$ triangles."

    The trace of $A^3$ is the sum of the cubes of the eigenvalues: $(n-1)^3 + (n-1)(-1)^3 = (n-1)\big((n-1)^2 - 1\big)
    = (n-1)(n-2)n$. Dividing by 6 gives $\frac{n(n-1)(n-2)}{6} = \binom{n}{3}$, as it must be, since every three
    vertices of $K_n$ form a triangle.

??? question "10. Show that $K_{3,3}$ and the triangular prism are not isomorphic, and that the Petersen graph and the 5-prism (two 5-cycles joined by a matching, $C_5 \times K_2$) are not isomorphic either."

    $K_{3,3}$ has no triangle (bipartite), the prism has two. For the second pair: both are 3-regular with 10 vertices
    and 15 edges. The 5-prism has 4-cycles ($a_1a_2b_2b_1$). The Petersen graph has none, because no two vertices
    have two common neighbours. Two adjacent vertices are disjoint pairs, covering 4 of the 5 elements; a common
    neighbour would be a pair disjoint from both, inside the 1 remaining element: none. Two non-adjacent vertices
    share an element, like $\{1,2\}$ and $\{1,3\}$, covering 3 elements; a common neighbour is a pair inside the
    remaining 2 elements: exactly one. A 4-cycle would need two vertices with two common neighbours. Not isomorphic.

??? question "11. Of the 64 labelled graphs on the vertices $\{1,2,3,4\}$, how many are connected?"

    Count the disconnected ones by the component containing vertex 1. If it has $k$ vertices ($k = 1, 2, 3$), choose
    its other $k - 1$ vertices, make it connected, and put any graph on the other $4 - k$ vertices. With $c_1 = 1$,
    $c_2 = 1$, $c_3 = 4$ connected labelled graphs on 1, 2, 3 vertices: $k = 1$: $1 \cdot 1 \cdot 2^3 = 8$; $k = 2$:
    $3 \cdot 1 \cdot 2^1 = 6$; $k = 3$: $3 \cdot 4 \cdot 1 = 12$. Disconnected: $26$. Connected: $64 - 26 = 38$.

??? question "12. A graph has $n$ vertices and every vertex has degree at least $\delta \ge 2$. Show that it contains a cycle of length at least $\delta + 1$."

    Take a longest path $v_0, \dots, v_k$. All neighbours of $v_0$ lie on the path (otherwise the path could be
    extended). $v_0$ has at least $\delta$ neighbours among $v_1, \dots, v_k$, so some neighbour $v_j$ has
    $j \ge \delta$. Then $v_0, v_1, \dots, v_j, v_0$ is a cycle of length $j + 1 \ge \delta + 1$.

## What you learned

- A graph is a set of vertices with edges between pairs; degree, regularity, subgraphs, complements, and the families
  $K_n$, $P_n$, $C_n$, $K_{a,b}$, $Q_d$ and the Petersen graph give the vocabulary.
- The handshake lemma $\sum \deg v = 2m$ (double counting) forces an even number of odd vertices; every graph has two
  vertices of equal degree.
- Walks contain paths; connectivity is an equivalence relation whose classes are components; $n$ vertices need at
  least $n - 1$ edges to connect, and minimum degree $(n-1)/2$ forces connectivity; bridges are the edges on no cycle.
- A connected multigraph has an Euler circuit exactly when all degrees are even, and an Euler trail exactly when zero
  or two degrees are odd (Euler 1736, Hierholzer 1873); the proof builds the route.
- A graph is bipartite exactly when it has no odd cycle (König); breadth-first search finds the two sides or an odd
  cycle.
- Isomorphism is renaming; invariants prove two graphs differ; $(A^k)_{ij}$ counts walks of length $k$, and traces
  of powers count edges and triangles.

**Next:** [Chapter 11](11-Trees.md), the graphs with just enough edges to be connected: trees, how many there are
(Cayley's $n^{n-2}$), and how to find the cheapest one.

## Further reading

- R. J. Wilson, *Introduction to Graph Theory*, 5th edition, 2010. The gentlest complete introduction.
- D. B. West, *Introduction to Graph Theory*, 2nd edition, 2001. The standard undergraduate text, full of exercises.
- J. A. Bondy and U. S. R. Murty, *Graph Theory*, Graduate Texts in Mathematics 244, 2008.
- R. Diestel, *Graph Theory*, 5th edition, 2017 (free electronic edition from the author).
- N. L. Biggs, E. K. Lloyd and R. J. Wilson, *Graph Theory 1736-1936*, 1976. The original papers, including Euler's
  on Königsberg and Hierholzer's, in English, with commentary.
- D. A. Holton and J. Sheehan, *The Petersen Graph*, 1993.
- L. Babai, "Graph Isomorphism in Quasipolynomial Time", 2015 (arXiv 1512.03547).
- On this site: the Topics lessons [Handshakes and diagonals](../../topics/counting/level-2/05-handshakes-diagonals.md),
  [Networks and Euler paths](../../topics/logic/level-6/05-networks-euler.md) and
  [Graph colouring](../../topics/logic/level-6/06-graph-colouring.md); the U of T guides
  [Trees](../../uoft/CSC148H1/unit07.md) (trees as a data structure) and
  [Eigenvalues and diagonalization](../../uoft/MAT240H1/unit10.md) (for the spectrum in 10.6); the Geometry book's
  [Solid geometry](../geometry/11-Solid-Geometry.md), whose polyhedra are graphs drawn in space.
