# 12. Planar graphs and colouring

*Three houses each need a line to each of three utilities, water, gas and electricity. Can the nine lines be laid in a
flat field without any two crossing? And how many colours does a map-maker need so that countries sharing a border
always get different colours? Both questions are about graphs drawn on paper. The first asks whether a graph can be
drawn without crossings; the second, turned into a graph, asks for its chromatic number. The answers run from a
two-line counting argument, through Euler's formula, to the four colour theorem, the first major theorem whose proof
needed a computer. In this chapter you prove Euler's formula for plane graphs, show that $K_5$ and $K_{3,3}$ (the
utilities graph) cannot be drawn without crossings, prove that five colours always suffice for a map, learn the honest
story of the four colour theorem, and meet the chromatic polynomial, which counts colourings.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a planar graph and its faces are, and Euler's formula $V - E + F = 2$ for connected plane graphs, with a proof
    - the edge bounds $E \le 3V - 6$ and $E \le 2V - 4$, why $K_5$ and $K_{3,3}$ are not planar, and Kuratowski's theorem
    - proper colourings, the chromatic number, greedy colouring and Brooks' theorem, and where colouring is used
    - complete proofs of the six colour and five colour theorems, with Kempe chains
    - the history of the four colour theorem: Guthrie, Kempe's flawed proof, Heawood, Appel and Haken's computer proof, and Gonthier's formal check
    - chromatic polynomials: deletion-contraction, their coefficients, and their link with Stirling numbers

    **You need:** [Chapter 10](10-Graphs.md) (degrees, cycles, bipartite graphs) and [Chapter 11](11-Trees.md) (trees
    have $n - 1$ edges). The falling factorials of [Chapter 9](09-Stirling-Numbers-and-Partitions.md) appear in 12.6.
    Gentler versions: [Graph colouring](../../topics/logic/level-6/06-graph-colouring.md) and
    [Networks and Euler paths](../../topics/logic/level-6/05-networks-euler.md) in the Topics shelf, and
    [Euler's formula for polyhedra](../geometry/11-Solid-Geometry.md) in the Geometry book.

    **Levels:** 12.1 and 12.2 are intermediate, with full proofs; 12.3 is intermediate; 12.4 is advanced; 12.5 is a
    history anyone can read, with expert pointers; 12.6 is intermediate to advanced.

## 12.1 Planar drawings and Euler's formula

### Drawings without crossings

A **drawing** of a graph in the plane puts each vertex at a point and each edge along a curve between its ends, with
no curve passing through a vertex other than its ends. A graph is **planar** if it has a drawing in which no two edges
cross (meet except at a shared end). Such a drawing is a **plane graph**, or a **planar embedding**. Being planar is a
property of the graph; a planar graph also has many bad drawings with crossings.

$K_4$ looks non-planar when drawn as a square with both diagonals, but it is planar: draw it as a triangle with the
fourth vertex in the middle. The cube graph $Q_3$ is planar: draw a small square inside a large one and join the
corners. So are all trees, all cycles, and the graph of every convex polyhedron (look through one face and flatten
the rest, as in the Geometry book's [Chapter 11](../geometry/11-Solid-Geometry.md)).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 185" role="img" aria-label="Left: K4 drawn without crossings, as a triangle with a vertex in the middle joined to all three corners; it has 4 faces. Middle: K5 drawn as a pentagon with a pentagram inside, showing crossings. Right: K3,3, three top vertices each joined to three bottom vertices, also with crossings.">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="70" y1="30" x2="15" y2="145"/>
    <line x1="15" y1="145" x2="125" y2="145"/>
    <line x1="125" y1="145" x2="70" y2="30"/>
    <line x1="70" y1="105" x2="70" y2="30"/>
    <line x1="70" y1="105" x2="15" y2="145"/>
    <line x1="70" y1="105" x2="125" y2="145"/>
    <line x1="215" y1="33" x2="267.3" y2="71"/>
    <line x1="267.3" y1="71" x2="247.3" y2="132.5"/>
    <line x1="247.3" y1="132.5" x2="182.7" y2="132.5"/>
    <line x1="182.7" y1="132.5" x2="162.7" y2="71"/>
    <line x1="162.7" y1="71" x2="215" y2="33"/>
    <line x1="215" y1="33" x2="247.3" y2="132.5"/>
    <line x1="215" y1="33" x2="182.7" y2="132.5"/>
    <line x1="267.3" y1="71" x2="182.7" y2="132.5"/>
    <line x1="267.3" y1="71" x2="162.7" y2="71"/>
    <line x1="247.3" y1="132.5" x2="162.7" y2="71"/>
    <line x1="300" y1="40" x2="300" y2="135"/>
    <line x1="300" y1="40" x2="350" y2="135"/>
    <line x1="300" y1="40" x2="400" y2="135"/>
    <line x1="350" y1="40" x2="300" y2="135"/>
    <line x1="350" y1="40" x2="350" y2="135"/>
    <line x1="350" y1="40" x2="400" y2="135"/>
    <line x1="400" y1="40" x2="300" y2="135"/>
    <line x1="400" y1="40" x2="350" y2="135"/>
    <line x1="400" y1="40" x2="400" y2="135"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="70" cy="30" r="7" fill="#7ccf9a"/>
    <circle cx="15" cy="145" r="7" fill="#7ccf9a"/>
    <circle cx="125" cy="145" r="7" fill="#7ccf9a"/>
    <circle cx="70" cy="105" r="7" fill="#7ccf9a"/>
    <circle cx="215" cy="33" r="7" fill="#eea66f"/>
    <circle cx="267.3" cy="71" r="7" fill="#eea66f"/>
    <circle cx="247.3" cy="132.5" r="7" fill="#eea66f"/>
    <circle cx="182.7" cy="132.5" r="7" fill="#eea66f"/>
    <circle cx="162.7" cy="71" r="7" fill="#eea66f"/>
    <circle cx="300" cy="40" r="7" fill="#9cc9ea"/>
    <circle cx="350" cy="40" r="7" fill="#9cc9ea"/>
    <circle cx="400" cy="40" r="7" fill="#9cc9ea"/>
    <circle cx="300" cy="135" r="7" fill="#eea66f"/>
    <circle cx="350" cy="135" r="7" fill="#eea66f"/>
    <circle cx="400" cy="135" r="7" fill="#eea66f"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="70" y="175">K4: planar, 4 faces</text>
    <text x="215" y="175">K5</text>
    <text x="350" y="175">K3,3 (utilities)</text>
  </g>
</svg>
</div>

### Faces

A plane graph cuts the plane into connected regions called **faces**. Exactly one face is unbounded, the **outer
face**. The triangle-with-centre drawing of $K_4$ has 4 faces: three small triangles and the outside. A tree has only
one face, since it encloses nothing. The **degree** (or length) of a face is the number of edge-sides along its
boundary: walk around the inside of the face's boundary and count the edges you pass, counting an edge twice if the face
lies on both sides of it (like a tree's edges, which the single face touches on both sides).

Each edge has two sides, and each side belongs to exactly one face, so

$$
\sum_{\text{faces } f} \deg(f) = 2E,
$$

the handshake lemma for faces.

### Euler's formula

**Theorem 12.1 (Euler's formula).** For every connected plane graph with $V$ vertices, $E$ edges and $F$ faces,

$$
V - E + F = 2 .
$$

*Proof.* Induction on the number of edges, for a fixed number $V$ of vertices. A connected graph has at least $V - 1$
edges, so start there. If $E = V - 1$, the graph is a tree ([Chapter 11](11-Trees.md)); a tree encloses no region, so
$F = 1$, and $V - (V-1) + 1 = 2$.

If $E \ge V$, the graph is connected but not a tree, so it has a cycle. Take an edge $e$ on a cycle. The cycle is a
closed curve without self-crossings, and by the **Jordan curve theorem** it separates the plane into an inside and an
outside; $e$ has the inside on one side and the outside on the other, so the faces on the two sides of $e$ are different.
Delete $e$. The graph stays connected ($e$ was on a cycle, so it was not a bridge), it has one edge fewer, and the two
faces on either side of $e$ merge into one, so it has one face fewer. By induction
$V - (E - 1) + (F - 1) = 2$, which is $V - E + F = 2$. $\square$

The Jordan curve theorem, that a closed curve without self-crossings has exactly one inside and one outside, sounds
obvious and is surprisingly hard to prove for wild curves. For the curves in a graph drawing we can always take them to
be made of finitely many straight segments (polygonal arcs), and for polygons the theorem has an elementary proof (count
how many times a ray from a point crosses the polygon). So the proof above is complete for polygonal drawings, and every
planar graph has one.

**Checks.** $K_4$: $4 - 6 + 4 = 2$. Cube $Q_3$: $8 - 12 + 6 = 2$. The dodecahedron: $20 - 30 + 12 = 2$. A cycle $C_n$:
$n - n + 2 = 2$ (inside and outside).

For a plane graph with $k$ components the same induction (or joining the components by $k - 1$ extra edges, which adds no
face) gives $V - E + F = 1 + k$.

Euler's formula says the number of faces does not depend on the drawing: every planar embedding of a connected planar
graph has $F = 2 - V + E$ faces. In the language of topology, the number $V - E + F$ is the **Euler characteristic** of
the sphere (a plane drawing is a drawing on a sphere with one point removed). On a torus the corresponding number is 0,
which is why graphs that cannot be drawn in the plane can sometimes be drawn on a doughnut.

## 12.2 $K_5$ and $K_{3,3}$ are not planar

### Too many edges

Euler's formula limits how many edges a planar graph can have.

**Theorem 12.2.** If $G$ is a simple planar graph with $V \ge 3$ vertices, then $E \le 3V - 6$. If moreover $G$ has no
triangle, then $E \le 2V - 4$.

*Proof.* We may assume $G$ is connected: if not, add edges joining components, drawn without crossings, which only
increases $E$ (each component can be drawn in the outer face of the others, so a new edge can join the outer boundaries).
If $E < 3$ the first bound holds anyway, since $3V - 6 \ge 3$ when $V \ge 3$; so suppose $E \ge 3$. Then every face has
degree at least 3: a face of degree 1 or 2 would need a loop or two parallel edges, or a graph that is a single edge. By
the face handshake lemma $2E = \sum \deg(f) \ge 3F$, so $F \le \frac{2E}{3}$. Euler's formula gives

$$
2 = V - E + F \le V - E + \frac{2E}{3} = V - \frac{E}{3},
$$

so $E \le 3V - 6$. Without triangles, every face has degree at least 4 (a face of degree 3 would be bounded by a
triangle), so $F \le \frac{E}{2}$ and $2 \le V - E + \frac{E}{2}$, giving $E \le 2V - 4$. $\square$

**Corollary 12.3.** $K_5$ and $K_{3,3}$ are not planar.

*Proof.* $K_5$ has $V = 5$ and $E = 10 > 3 \cdot 5 - 6 = 9$. $K_{3,3}$ is bipartite, so it has no triangles (no odd
cycles at all, [Chapter 10](10-Graphs.md)), and $E = 9 > 2 \cdot 6 - 4 = 8$. $\square$

So the three utilities cannot be connected to the three houses without crossings, at least not in a plane. (On the
surface of a coffee mug, a torus, they can.)

**Corollary 12.4.** Every simple planar graph has a vertex of degree at most 5.

*Proof.* For $V \le 6$ every degree is at most $V - 1 \le 5$. Otherwise, if every degree were at least 6, the handshake
lemma would give $2E \ge 6V$, so $E \ge 3V > 3V - 6$, contradicting Theorem 12.2. $\square$

This small fact drives every colouring proof in 12.4.

**More examples.**

- The Petersen graph has $V = 10$, $E = 15$ and no cycle shorter than 5. Repeating the argument with faces of degree at
  least 5: $2E \ge 5F$, so $2 \le V - E + \frac{2E}{5}$, giving $E \le \frac{5(V - 2)}{3} = \frac{40}{3}$, about 13.3. But
  $E = 15$. Not planar.
- $Q_4$, the 4-dimensional cube: $V = 16$, $E = 4 \cdot 2^3 = 32$, bipartite. The bound is $2 \cdot 16 - 4 = 28 < 32$. Not
  planar.
- $K_5$ minus one edge has $E = 9 = 3 \cdot 5 - 6$, so the bound does not rule it out, and indeed it is planar (draw $K_4$
  as a triangle with a centre, and put the fifth vertex outside, joined to the three corners).

The bounds are necessary conditions only. A graph can satisfy $E \le 3V - 6$ and still be non-planar, for example
$K_{3,3}$ with many extra isolated vertices, or $K_{3,3}$ with a long path attached.

### Kuratowski's theorem

The two forbidden graphs are, in a precise sense, the only obstacles. A **subdivision** of a graph is what you get by
placing new vertices of degree 2 along its edges (replacing edges by paths). Subdividing does not change planarity: the
picture is the same, with some extra dots on the curves.

**Theorem 12.5 (Kuratowski, 1930).** A graph is planar if and only if it contains no subdivision of $K_5$ or of $K_{3,3}$
as a subgraph.

One direction is Corollary 12.3: a subgraph of a planar graph is planar, and so would be the $K_5$ or $K_{3,3}$ hiding
inside the subdivision. The other direction, that every non-planar graph contains one of them, is a genuine theorem with
a proof of several pages; good accounts are in West's and Diestel's textbooks, and a short proof by Carsten Thomassen
(1981) is now standard. Kazimierz Kuratowski published it in 1930; Lev Pontryagin is said to have found it
independently but did not publish, and Orrin Frink and Paul Smith submitted a proof the same year that was not published
because Kuratowski's appeared first.

A related form, by Klaus Wagner (1937), uses **minors**: a minor of $G$ is anything obtained by deleting edges and
vertices and **contracting** edges (merging their two ends into one vertex). **A graph is planar if and only if it has
neither $K_5$ nor $K_{3,3}$ as a minor.** The Petersen graph contains $K_5$ as a minor (contract the five spokes) and also
a subdivision of $K_{3,3}$ (though not of $K_5$, since its degrees are only 3). Minors lead to one of the deepest results
in combinatorics, the Robertson-Seymour graph minor theorem ([Chapter 20](20-Where-Combinatorics-Goes.md)).

Two more facts, stated without proof. **Fáry's theorem** (Wagner 1936, István Fáry 1948): every planar graph can be drawn
with straight-line edges and no crossings. And planarity can be tested by computer in time proportional to the number
of vertices (John Hopcroft and Robert Tarjan, 1974), so the question "is this circuit layout flat?" is easy in practice.

## 12.3 Colouring and the chromatic number

### From maps to graphs

A map-maker colours countries so that two countries sharing a border (more than a single point) get different colours.
Put a vertex in each country and join two vertices when their countries share a border: this **dual graph** of the map
is planar (draw each edge across the shared border). Colouring the map is the same as colouring the vertices of the
graph so that adjacent vertices differ. The same works for any map drawn on a globe, including a map of the regions of
Mars or the countries of Earth: the question "how many colours does a map need?" is a question about planar graphs.

A **proper colouring** of a graph with $k$ colours is a function $c\colon V \to \{1, \dots, k\}$ with $c(u) \ne c(v)$ for
every edge $uv$. The graph is **$k$-colourable** if it has one, and its **chromatic number** $\chi(G)$ is the smallest such
$k$. Each colour class (the vertices of one colour) is an **independent set**: no edge inside it. So a $k$-colouring is a
partition of $V$ into $k$ independent sets, and $\chi(G) \le 2$ means exactly "bipartite".

**Examples.**

- $\chi(K_n) = n$: all vertices are adjacent, so all colours must differ.
- $\chi(C_n) = 2$ for even $n$ and 3 for odd $n$ (Chapter 10: odd cycles are not bipartite).
- $\chi(\text{tree}) = 2$ for any tree with an edge.
- The Petersen graph: it contains a 5-cycle, so $\chi \ge 3$, and a 3-colouring exists (exercise), so $\chi = 3$.
- The **wheel** $W_n$, a cycle $C_n$ plus a hub joined to all of it: the hub needs a colour of its own, so
  $\chi(W_n) = 1 + \chi(C_n)$, which is 3 for even $n$ and 4 for odd $n$.

### Bounds

**Lower bound.** If $G$ contains a **clique** (a complete subgraph) of size $\omega$, then $\chi(G) \ge \omega$. But the
bound can be far off: Jan Mycielski (1955) built graphs with no triangle at all ($\omega = 2$) and any chromatic number
you like. The smallest triangle-free graph with $\chi = 4$ is the Grötzsch graph on 11 vertices. Colouring is a
global property; it cannot always be seen locally.

**Upper bound: greedy colouring.** List the vertices in any order and give each the smallest colour not used by its
already-coloured neighbours.

**Theorem 12.6.** $\chi(G) \le \Delta(G) + 1$, where $\Delta$ is the largest degree.

*Proof.* When the greedy algorithm reaches a vertex $v$, at most $\deg(v) \le \Delta$ of its neighbours are coloured, so
at most $\Delta$ colours are forbidden and one of the colours $1, \dots, \Delta + 1$ is free. $\square$

Complete graphs and odd cycles need exactly $\Delta + 1$ colours. **Brooks' theorem** (Leonard Brooks, 1941) says they are
the only connected graphs that do: every other connected graph has $\chi \le \Delta$. We do not prove it here.

The order matters for greedy. In the "crown" graph ($K_{n,n}$ minus a perfect matching: vertices $a_i$ and $b_i$, with
$a_ib_j$ an edge when $i \ne j$), the order $a_1, b_1, a_2, b_2, \dots$ makes greedy use $n$ colours, while the graph is
bipartite and needs 2. Finding $\chi(G)$ exactly is hard in general: even deciding whether a graph is 3-colourable is
NP-complete ([Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md) explains what that means).

### Where colouring is used

- **Timetables.** Courses are vertices, joined when some student takes both; colours are exam slots. The chromatic number
  is the fewest slots without clashes.
- **Radio frequencies.** Transmitters close enough to interfere are joined; colours are frequencies.
- **Register allocation.** A compiler joins two variables that are needed at the same time; colours are the processor's
  registers.
- **Sudoku.** The 81 cells are vertices, joined when in the same row, column or box; a solved grid is a 9-colouring that
  extends the given clues.

**Worked example.** Five exams $A, B, C, D, E$; some student takes both of each pair $AB$, $AC$, $BC$, $BD$, $CE$, $DE$.
The triangle $ABC$ forces 3 slots. Greedy in the order $A, B, C, D, E$: $A = 1$, $B = 2$, $C = 3$, $D = 1$ (neighbours $B$,
$E$; only $B$ coloured, with 2), $E = 2$ (neighbours $C = 3$, $D = 1$). Three slots suffice: $\{A, D\}$, $\{B, E\}$, $\{C\}$.

<figure class="play" data-play="colour"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Colour a made-up map so that neighbours differ. Its middle region touches a ring of five, so it needs four colours.</figcaption></figure>

## 12.4 The five colour theorem

*Level: advanced.*

### Six colours, easily

**Theorem 12.7.** Every planar graph is 6-colourable.

*Proof.* Induction on $V$. A graph with at most 6 vertices is trivially 6-colourable. Otherwise, by Corollary 12.4 there
is a vertex $v$ of degree at most 5. Remove it; the rest is planar with fewer vertices, so by induction it has a
6-colouring. The neighbours of $v$ use at most 5 colours, so a sixth is free for $v$. $\square$

(We may assume the graph is simple: loops cannot be properly coloured at all, and parallel edges change nothing.)

### Five colours, with Kempe chains

To save a colour we need a way to recolour. Suppose $G$ is properly coloured and $i, j$ are two colours. The subgraph
**induced** by the vertices of colours $i$ and $j$ (all of them, with all edges of $G$ between them) splits into
components called **Kempe chains**. Swapping colours $i$ and $j$ inside one Kempe chain gives another proper colouring:
inside the chain, neighbours had different colours among $i, j$ and still do; and an edge leaving the chain goes to a
vertex whose colour is neither $i$ nor $j$ (otherwise that vertex would be in the chain), so it cannot clash.

**Theorem 12.8 (Heawood, 1890).** Every planar graph is 5-colourable.

*Proof.* Induction on $V$, the first steps as before. Let $G$ be a simple plane graph with more than 5 vertices, and $v$ a
vertex of degree at most 5. Remove $v$ and 5-colour the rest by induction. If the neighbours of $v$ use at most 4
colours, give $v$ the fifth and stop.

Otherwise $v$ has exactly 5 neighbours, all of different colours. Call them $v_1, v_2, v_3, v_4, v_5$ in the order in
which their edges leave $v$ going clockwise in the drawing, with $v_i$ coloured $i$.

Look at the Kempe chain $K$ of colours 1 and 3 that contains $v_1$.

- If $v_3$ is **not** in $K$, swap colours 1 and 3 inside $K$. Now $v_1$ has colour 3, $v_3$ still has colour 3, and no
  neighbour of $v$ has colour 1. Give $v$ colour 1.
- If $v_3$ **is** in $K$, there is a path from $v_1$ to $v_3$ whose vertices are all coloured 1 or 3. Together with the
  edges $vv_1$ and $vv_3$ it forms a cycle $C$ through $v$. Because the edges at $v$ go out in the order
  $v_1, v_2, v_3, v_4, v_5$, the vertex $v_2$ lies on one side of $C$ (inside or outside) and $v_4$ on the other. By the
  Jordan curve theorem every path from $v_2$ to $v_4$ in the plane graph crosses $C$, and since edges do not cross, it
  must pass through a vertex of $C$. All vertices of $C$ other than $v$ have colours 1 or 3. So no path coloured only 2 and
  4 joins $v_2$ to $v_4$: the 2-4 Kempe chain of $v_2$ does not contain $v_4$. Swap colours 2 and 4 in that chain. Now
  $v_2$ has colour 4, and no neighbour of $v$ has colour 2. Give $v$ colour 2.

Either way $G$ is 5-coloured. $\square$

### Why four is harder

Alfred Kempe's 1879 "proof" of the four colour theorem ran exactly like this, with one colour fewer. Removing a vertex $v$
of degree at most 5 and 4-colouring the rest, the hard case is degree 5, where the five neighbours may use all four
colours with one colour repeated. Kempe performed *two* chain swaps at once to free a colour. In 1890 Percy Heawood gave
a map where the first swap changes the colours along the second chain, so that after both swaps $v$ again sees all four
colours; Kempe's argument breaks down. Heawood saved what the argument does prove, the five colour theorem above, and
the four colour question stayed open for 86 more years.

## 12.5 The four colour theorem

### The statement

**Theorem 12.9 (four colour theorem).** Every planar graph is 4-colourable. Equivalently, the countries of any map in
the plane (each a single connected region) can be coloured with four colours so that countries sharing a border get
different colours.

Four is needed: $K_4$ is planar and needs four colours, which as a map is a country surrounded by three others that all
touch each other.

### An honest history

- **1852.** Francis Guthrie, colouring a map of the counties of England, noticed that four colours seemed to suffice
  and asked his brother Frederick, a student of Augustus De Morgan, whether it was always so. On 23 October 1852 De
  Morgan wrote to William Rowan Hamilton about the question; that letter is the first written record of it.
- **1878-1879.** Arthur Cayley raised the problem at the London Mathematical Society and published a short note on why
  it is hard. In 1879 Alfred Kempe, a barrister and amateur mathematician, published a proof, which was accepted for
  eleven years. Peter Guthrie Tait gave other arguments in 1880, also flawed.
- **1890.** Heawood found the gap in Kempe's proof, proved the five colour theorem, and studied colouring on other
  surfaces (below).
- **1913-1970s.** George Birkhoff introduced "reducible configurations": small pieces of a map that cannot appear in a
  smallest counterexample, because a colouring of the rest could always be extended. The strategy took shape: find a list
  of reducible configurations that is **unavoidable**, meaning every planar map contains at least one of them. Heinrich
  Heesch developed the "discharging" method for proving unavoidability and believed a finite list would work, but it was
  too large to check by hand.
- **1976.** Kenneth Appel and Wolfgang Haken at the University of Illinois, with programming help from John Koch,
  announced a proof: an unavoidable set of well over a thousand configurations, each shown to be reducible by a computer
  program that ran for well over a thousand hours. The proof appeared in two papers in the *Illinois Journal of
  Mathematics* in 1977. The university's postmark that year read "Four colors suffice".
- **Reception.** Many mathematicians were uneasy: no person could check the computer part by hand, and the hand-checked
  part was long and intricate; some small errors were found and fixed by Appel and Haken. The debate about whether a
  proof that cannot be surveyed by a human is a proof was serious and productive.
- **1996-1997.** Neil Robertson, Daniel Sanders, Paul Seymour and Robin Thomas gave a new proof along the same lines with
  633 configurations and simpler discharging rules, and with programs that anyone could rerun.
- **2005.** Georges Gonthier, working with Benjamin Werner, completed a fully formal proof in the Coq proof assistant: a
  computer checked every logical step, including the parts that had been checked by hand before. The proof was described
  in the *Notices of the AMS* in 2008. Today the four colour theorem is among the most thoroughly verified theorems in
  mathematics.

No short, human-readable proof is known. Whether one exists is open, and many mathematicians suspect not.

### Other surfaces

On surfaces other than the sphere the problem was, surprisingly, easier. Heawood showed in 1890 that a map on a
surface with $g$ holes ($g \ge 1$; a torus has $g = 1$) can always be coloured with

$$
\left\lfloor \frac{7 + \sqrt{1 + 48g}}{2} \right\rfloor
$$

colours, using Euler's formula for that surface the way 12.2 used it for the plane. For the torus this is 7. Heawood
believed this was also the exact number needed, which requires showing that a large enough complete graph can be drawn on
each surface. Gerhard Ringel and J. W. T. Youngs completed that proof in 1968. For the torus, $K_7$ can indeed be drawn
without crossings, so seven colours are needed there. The formula gives 4 when $g = 0$, but Heawood's argument for the
upper bound fails on the sphere, which is why the plane case needed Appel and Haken.

## 12.6 Chromatic polynomials

*Level: intermediate to advanced.*

### Counting colourings

George Birkhoff, in 1912, hoped to prove the four colour theorem with algebra. His idea: for a graph $G$ and a whole
number $x$, let $P(G, x)$ be the number of proper colourings of $G$ using colours from $\{1, \dots, x\}$ (not every colour
need be used). Then the four colour theorem says $P(G, 4) > 0$ for every planar $G$. Birkhoff showed that $P(G,x)$ is a
polynomial in $x$, the **chromatic polynomial**. The proof of the theorem went another way, but the polynomial has become
an important object in its own right.

**First examples.**

- The empty graph $\overline{K_n}$ (no edges): every vertex chooses freely, $P = x^n$.
- $K_n$: the first vertex has $x$ choices, the second $x - 1$, and so on: $P(K_n, x) = x(x-1)\cdots(x-n+1) = x^{\underline{n}}$,
  the falling factorial of [Chapter 9](09-Stirling-Numbers-and-Partitions.md).
- A tree on $n$ vertices: colour a root ($x$ ways), then each other vertex once its parent is coloured, avoiding the
  parent's colour ($x - 1$ ways): $P = x(x-1)^{n-1}$. Every tree on $n$ vertices has the same chromatic polynomial.

The chromatic number is the smallest positive integer $x$ with $P(G, x) > 0$.

### Deletion and contraction

For an edge $e = uv$, let $G - e$ be $G$ with the edge deleted and $G / e$ be $G$ with $e$ **contracted**: $u$ and $v$
merged into one vertex adjacent to all their neighbours (keeping one copy of any doubled edge).

**Theorem 12.10 (deletion-contraction).** $P(G, x) = P(G - e, x) - P(G / e, x)$.

*Proof.* The proper colourings of $G - e$ are of two kinds: those with $c(u) \ne c(v)$, which are exactly the proper
colourings of $G$; and those with $c(u) = c(v)$, which are exactly the proper colourings of $G / e$ (give the merged
vertex the common colour). So $P(G - e) = P(G) + P(G/e)$. $\square$

Deletion makes a graph with fewer edges, contraction one with fewer vertices, so repeating the rule ends with empty
graphs, whose polynomials are powers of $x$. This proves:

**Corollary 12.11.** $P(G, x)$ is a polynomial in $x$ with integer coefficients. $\square$

**Worked example: the 4-cycle.** Delete one edge of $C_4$: a path $P_4$, with $P = x(x-1)^3$. Contract it: a triangle,
with $P = x(x-1)(x-2)$. So

$$
P(C_4, x) = x(x-1)^3 - x(x-1)(x-2) = x(x-1)\big((x-1)^2 - (x - 2)\big) = x(x-1)(x^2 - 3x + 3).
$$

Expanded: $x^4 - 4x^3 + 6x^2 - 3x$. Check: $P(C_4, 2) = 2 \cdot 1 \cdot 1 = 2$ (the two alternating colourings) and
$P(C_4, 3) = 3 \cdot 2 \cdot 3 = 18$.

**All cycles.** By the same step, $P(C_n) = P(P_n) - P(C_{n-1}) = x(x-1)^{n-1} - P(C_{n-1})$, and induction from the
triangle gives

$$
P(C_n, x) = (x-1)^n + (-1)^n (x - 1).
$$

*Check the induction step:* $x(x-1)^{n-1} - (x-1)^{n-1} - (-1)^{n-1}(x-1) = (x-1)^{n-1}(x - 1) + (-1)^n(x-1)$. At $n = 3$:
$(x-1)^3 - (x-1) = (x-1)\big((x-1)^2 - 1\big) = x(x-1)(x-2)$. Correct. For $n = 5$, $x = 3$: $2^5 - 2 = 30$.

**Worked example: the diamond** ($K_4$ minus an edge $cd$). Two triangles $abc$ and $abd$ sharing the edge $ab$. Colour
$a$ and $b$ ($x(x-1)$ ways); then $c$ and $d$ each avoid both colours, independently: $(x-2)^2$. So
$P = x(x-1)(x-2)^2 = x^4 - 5x^3 + 8x^2 - 4x$. Deletion-contraction agrees: deleting $ab$ leaves $C_4$, contracting $ab$
leaves a path on 3 vertices, and $x(x-1)(x^2 - 3x + 3) - x(x-1)^2 = x(x-1)(x^2 - 4x + 4)$.

### What the coefficients say

**Theorem 12.12.** For a simple graph $G$ with $n$ vertices and $m$ edges:

1. $P(G, x)$ has degree $n$ and leading coefficient 1;
2. the coefficient of $x^{n-1}$ is $-m$;
3. the coefficients alternate in sign: $P(G,x) = x^n - a_{n-1}x^{n-1} + a_{n-2}x^{n-2} - \cdots$ with all $a_i \ge 0$;
4. the constant term is 0 (if $n \ge 1$), and more generally $x^k$ divides $P$ when $G$ has $k$ components.

*Proof.* Induction on $m$. For $m = 0$, $P = x^n$ and all four hold. For $m \ge 1$, pick an edge $e$. $G - e$ has $n$
vertices and $m - 1$ edges; $G/e$ has $n - 1$ vertices and at most $m - 1$ edges. By induction
$P(G - e) = x^n - (m-1)x^{n-1} + \cdots$ and $P(G/e) = x^{n-1} - \cdots$, both alternating. Subtracting: the leading term
$x^n$ survives, the coefficient of $x^{n-1}$ is $-(m-1) - 1 = -m$, and subtracting an alternating polynomial of degree
$n - 1$ from an alternating one of degree $n$ keeps the signs alternating (the signs of $-P(G/e)$ match those of
$P(G-e)$ in each degree). For (4): $P(G, 0) = 0$ because there are no colourings with no colours; and the colourings of
a graph with $k$ components are independent on each, so $P$ is a product of $k$ chromatic polynomials, each divisible by
$x$. $\square$

These conditions rule out many polynomials. For example $x^4 - 3x^3 + 3x^2$ has the right shape for 4 vertices and 3
edges, but it is not a chromatic polynomial (exercise 8).

### Colourings and independent partitions

The falling factorials of Chapter 9 give a second formula. A proper colouring that uses exactly $k$ colours splits $V$
into $k$ non-empty independent sets (its colour classes). Conversely, given a partition of $V$ into $k$ independent sets,
there are $x^{\underline{k}}$ ways to give the blocks different colours. So

$$
P(G, x) = \sum_{k} a_k(G)\, x^{\underline{k}},
$$

where $a_k(G)$ is the number of partitions of $V$ into $k$ independent sets. For the empty graph every set is independent,
$a_k = S(n,k)$, and this is the identity $x^n = \sum_k S(n,k)x^{\underline k}$ of Chapter 9. So chromatic polynomials
generalise Stirling numbers.

**Check with $C_4$** (vertices $1, 2, 3, 4$ in order; the independent sets of size 2 are $\{1,3\}$ and $\{2,4\}$): $a_2 = 1$
($\{1,3\}\{2,4\}$), $a_3 = 2$ ($\{1,3\}\{2\}\{4\}$ and $\{2,4\}\{1\}\{3\}$), $a_4 = 1$. So
$P = x^{\underline2} + 2x^{\underline3} + x^{\underline4}$; at $x = 3$, $6 + 12 + 0 = 18$. Matches.

### Roots, and a theorem of the frontier

The chromatic polynomial has no roots in the intervals $(-\infty, 0)$ and $(0, 1)$, and none in $(1, 32/27]$ (Bill
Jackson, 1993). Bill Tutte found remarkable identities for planar triangulations at $x = \phi + 1$, where
$\phi$ is the golden ratio, and the chromatic polynomial is a special case of the **Tutte polynomial**, a two-variable
invariant that also counts spanning trees, forests and much more. In 2012 June Huh proved that the absolute values of
the coefficients of every chromatic polynomial form a **log-concave** sequence ($a_i^2 \ge a_{i-1}a_{i+1}$), settling a
conjecture of Ronald Read from 1968 with methods from algebraic geometry; this was part of the work for which Huh received
the Fields Medal in 2022.

## Check yourself

??? question "1. A connected planar graph has 10 vertices, all of degree 3. How many edges and faces does any plane drawing of it have?"

    $E = \frac{10 \cdot 3}{2} = 15$, and Euler's formula gives $F = 2 - V + E = 2 - 10 + 15 = 7$.

??? question "2. Show that $K_5$ minus one edge, and $K_{3,3}$ minus one edge, are both planar."

    $K_5 - e$: draw $K_4$ on $a, b, c, d$ as triangle $abc$ with $d$ in the middle, then put $e$ outside the triangle
    joined to $a, b, c$ (the missing edge is $de$); no crossings. $K_{3,3} - a_1b_1$: draw the 6-cycle
    $a_1b_2a_3b_1a_2b_3a_1$ as a hexagon; the remaining edges are $a_2b_2$ and $a_3b_3$; draw one inside the hexagon and
    the other outside. No crossings.

??? question "3. Is the cube $Q_3$ planar? Is $Q_4$?"

    $Q_3$ is planar: a small square inside a large one, corners joined. $Q_4$ has $V = 16$, $E = 32$ and is bipartite,
    so a planar drawing would need $E \le 2V - 4 = 28$. It is not planar.

??? question "4. Prove that a connected plane graph in which every face has degree at least 5 satisfies $E \le \frac{5}{3}(V - 2)$, and deduce that the Petersen graph is not planar."

    $2E = \sum \deg f \ge 5F$, so $F \le \frac{2E}{5}$, and $2 = V - E + F \le V - \frac{3E}{5}$, giving
    $E \le \frac{5}{3}(V - 2)$. The Petersen graph has no cycles of length 3 or 4, so in a planar drawing every face would
    have degree at least 5; but $15 > \frac53 \cdot 8 \approx 13.3$.

??? question "5. A convex polyhedron has only pentagonal and hexagonal faces, and three faces meet at each vertex. Show that it has exactly 12 pentagons."

    Let $p$ and $h$ be the numbers of pentagons and hexagons. Counting edge-sides, $5p + 6h = 2E$; counting edge ends at
    vertices, $3V = 2E$. Euler: $V - E + F = 2$ with $F = p + h$. Multiply by 6: $4E - 6E + 6p + 6h = 12$, so
    $6p + 6h - (5p + 6h) = 12$, that is $p = 12$. (A football has 12 pentagons and 20 hexagons.)

??? question "6. Find the chromatic number of the wheel $W_n$ (a cycle $C_n$ plus a hub joined to every vertex of the cycle) for every $n \ge 3$."

    The hub is adjacent to everything, so it needs a colour no rim vertex uses, and $\chi(W_n) = 1 + \chi(C_n)$: 3 when $n$
    is even, 4 when $n$ is odd. ($W_3 = K_4$.)

??? question "7. Find the chromatic polynomials of the star $K_{1,3}$ and of a triangle with one pendant edge attached. How many proper 3-colourings does each have?"

    $K_{1,3}$ is a tree on 4 vertices: $x(x-1)^3$; at $x = 3$, $3 \cdot 8 = 24$. Triangle $abc$ with pendant $d$ on $c$:
    colour the triangle ($x(x-1)(x-2)$), then $d$ avoids $c$'s colour ($x - 1$): $x(x-1)^2(x-2)$; at $x = 3$,
    $3 \cdot 4 \cdot 1 = 12$.

??? question "8. Show that $x^4 - 3x^3 + 3x^2$ is not the chromatic polynomial of any graph."

    The degree and the coefficient $-3$ of $x^3$ force 4 vertices and 3 edges. A graph with 4 vertices and 3 edges is
    either a tree ($x(x-1)^3 = x^4 - 3x^3 + 3x^2 - x$) or a triangle plus an isolated vertex
    ($x \cdot x(x-1)(x-2) = x^4 - 3x^3 + 2x^2$). Neither is the given polynomial.

??? question "9. Show that the Petersen graph is 3-colourable."

    Use the outer cycle $0,1,2,3,4$ and inner vertices $5,6,7,8,9$ with spokes $i$-$(i+5)$ and inner edges
    $5$-$7$, $7$-$9$, $9$-$6$, $6$-$8$, $8$-$5$. Outer: $0{:}1$, $1{:}2$, $2{:}1$, $3{:}2$, $4{:}3$. Inner: $5$ (spoke to
    0, colour 1) gets 2; $6$ (spoke to 1, colour 2) gets 1; $7$ (spoke to 2, colour 1; inner neighbour 5 has 2) gets 3;
    $8$ (spoke to 3, colour 2; inner neighbours 5 and 6 have 2 and 1) gets 3; $9$ (spoke to 4, colour 3; inner neighbours
    7 and 6 have 3 and 1) gets 2. Check the inner edges: $5$-$7$ is 2-3, $7$-$9$ is 3-2, $9$-$6$ is 2-1, $6$-$8$ is 1-3,
    $8$-$5$ is 3-2. All proper.

??? question "10. Prove that every planar graph without triangles is 4-colourable, using only Euler's formula."

    A simple triangle-free planar graph has $E \le 2V - 4$ (for $V \ge 3$), so the average degree $2E/V < 4$, and some
    vertex has degree at most 3. Remove it, 4-colour the rest by induction, and give it a colour not used by its at
    most 3 neighbours. (Grötzsch's theorem, 1959, says 3 colours are enough, but the proof is much harder.)

??? question "11. Use $P(C_n, x) = (x-1)^n + (-1)^n(x-1)$ to count the proper 3-colourings of $C_5$ and $C_6$, and check $C_5$ another way."

    $C_5$: $2^5 - 2 = 30$. $C_6$: $2^6 + 2 = 66$. Check $C_5$: colour the vertices $1, \dots, 5$ in order; there are
    $3 \cdot 2^4 = 48$ colourings of the path where each vertex differs from the previous, and we must remove those with
    $c(5) = c(1)$; merging 5 and 1 makes those the proper colourings of $C_4$, which number
    $P(C_4, 3) = 18$. $48 - 18 = 30$.

??? question "12. In the five colour proof, why could we not simply swap colours 1 and 3 in the chain of $v_1$ when $v_3$ is in the same chain?"

    Then the swap would recolour $v_3$ as well, from 3 to 1, while $v_1$ becomes 3. The neighbours of $v$ would still show
    all five colours, so nothing would be gained. That is why the proof switches to the 2-4 chain, which the 1-3 path
    blocks from reaching $v_4$.

## What you learned

- A planar graph can be drawn without crossings; a connected plane graph satisfies $V - E + F = 2$, proved by deleting
  cycle edges down to a spanning tree.
- Hence $E \le 3V - 6$ for simple planar graphs, $E \le 2V - 4$ without triangles; $K_5$ and $K_{3,3}$ are not planar,
  and by Kuratowski's theorem they are the only obstacles, up to subdivision.
- Every planar graph has a vertex of degree at most 5, which gives the six colour theorem at once and, with Kempe chains,
  the five colour theorem.
- A colouring is a partition into independent sets; $\omega \le \chi \le \Delta + 1$, with Brooks' theorem for the
  exceptions; colouring models timetables, frequencies and registers.
- The four colour theorem (Appel and Haken 1976, Robertson-Sanders-Seymour-Thomas 1997, Gonthier's formal proof 2005)
  needed computers; on a surface with $g \ge 1$ holes Heawood's formula holds (Ringel and Youngs 1968).
- The chromatic polynomial counts colourings; deletion-contraction computes it; its coefficients are alternating with
  $x^{n-1}$ coefficient $-m$, and in the falling-factorial basis they count partitions into independent sets.

**Next:** [Chapter 13](13-Matchings-and-Flows.md), pairing up the two sides of a bipartite graph: Hall's marriage theorem,
stable matchings, and the flow of goods through a network.

## Further reading

- R. Wilson, *Four Colors Suffice: How the Map Problem Was Solved*, revised colour edition, 2014. The history, told
  carefully.
- K. Appel and W. Haken, "Every planar map is four colorable. Part I: Discharging" (with Part II, "Reducibility", with
  J. Koch), *Illinois Journal of Mathematics* 21, 1977.
- N. Robertson, D. Sanders, P. Seymour and R. Thomas, "The four-colour theorem", *Journal of Combinatorial Theory,
  Series B* 70, 1997.
- G. Gonthier, "Formal proof: the four-color theorem", *Notices of the American Mathematical Society* 55(11), 2008.
- D. B. West, *Introduction to Graph Theory*, 2nd edition, 2001. Chapters 5 and 6 on colouring and planarity, including
  Kuratowski's theorem.
- R. Diestel, *Graph Theory*, 5th edition, 2017. Chapters 4 and 5, with Thomassen's proof of Kuratowski's theorem.
- F. M. Dong, K. M. Koh and K. L. Teo, *Chromatic Polynomials and Chromaticity of Graphs*, 2005.
- T. R. Jensen and B. Toft, *Graph Coloring Problems*, 1995. A survey of open problems.
- On this site: the Topics lessons [Graph colouring](../../topics/logic/level-6/06-graph-colouring.md),
  [Networks and Euler paths](../../topics/logic/level-6/05-networks-euler.md) and
  [P versus NP](../../topics/logic/level-8/06-p-versus-np.md); the Geometry book's
  [Solid geometry](../geometry/11-Solid-Geometry.md) (Euler's formula for polyhedra) and
  [Where geometry goes](../geometry/21-Where-Geometry-Goes.md).
