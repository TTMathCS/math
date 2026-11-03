# 3. Graphs and planarity

*Three houses each need a pipe or cable from each of three utilities. Can the nine lines be laid in a flat field so
that no two cross? Five towns want every pair joined by a road with no bridges or tunnels: possible? And how many
colours does a map-maker need so that neighbouring countries always differ? All three questions are about graphs
drawn on a surface, and the answers depend on which surface: what is impossible on a flat sheet becomes possible on a
doughnut. This chapter treats graphs as topological objects, proves Euler's formula for plane drawings and the
non-planarity of $K_5$ and $K_{3,3}$, states Kuratowski's theorem, tells the true story of the four colour theorem,
proves the five colour theorem, and shows why maps on a torus need seven colours.*

!!! abstract "In this chapter"

    **You will learn:**

    - graphs as 1-dimensional spaces, subdivisions, and the topological invariant $E - V + 1$ (the number of
      independent cycles)
    - why every graph can be drawn in 3-dimensional space without crossings, but not every graph in the plane
    - Euler's formula for plane graphs with any number of pieces, and the edge bounds $E \le 3V - 6$ and $E \le 2V - 4$
    - proofs that $K_5$ and $K_{3,3}$ are not planar, and Kuratowski's theorem
    - the honest history of the four colour theorem, and a complete proof of the five colour theorem
    - Heawood's bound for maps on surfaces, and a seven-country map on the torus

    **You need:** [Chapter 1](01-What-Topology-Is.md) (graphs, Euler paths, the Jordan curve theorem) and
    [Chapter 2](02-Surfaces-and-Euler-Characteristic.md) (Euler's formula, the torus, $\chi$). Gentler versions:
    [Networks and Euler paths](../../topics/logic/level-6/05-networks-euler.md) and
    [Graph colouring](../../topics/logic/level-6/06-graph-colouring.md) on the Topics shelf. The Combinatorics book's
    [Graphs](../combinatorics/10-Graphs.md) and [Planar graphs and colouring](../combinatorics/12-Planar-Graphs-and-Colouring.md)
    cover the same ground from the counting side, with more on colouring.

    **Levels:** 3.1 to 3.3 are beginner to intermediate; 3.4 is intermediate (statement and the easy half); 3.5 is a
    history anyone can read plus an intermediate proof; 3.6 is advanced.

## 3.1 Graphs as topological objects

In [Chapter 1](01-What-Topology-Is.md) a graph was a list: vertices, and edges joining pairs of them. Euler's
bridges, the letters of the alphabet and the edges of a cube are all graphs in this sense. A topologist also wants to
see the graph as a *space*, a shape made of points and arcs, and to ask which properties of the list are really
properties of the shape.

**Definition.** A **graph** $G$ consists of a finite set of vertices and a finite set of edges, each edge having two
ends that are vertices (equal ends give a **loop**; several edges with the same ends are **multiple edges**). A graph
is **simple** if it has no loops and no multiple edges. The **topological realisation** of $G$, often written $|G|$,
is the space made by taking one point for each vertex and one copy of the interval $[0, 1]$ for each edge, and gluing
the ends of each interval to the points of its end vertices.

A drawing of a graph on paper, in space, or on a surface is a picture of $|G|$ inside that space, with edges drawn as
arcs that meet only at shared end vertices. Such a drawing is called an **embedding**.

### Subdivision

Put a new vertex in the middle of an edge, splitting it in two. The graph has changed (one more vertex, one more
edge), but the space $|G|$ has not: an arc with a dot drawn on it is still the same arc. This operation is called
**subdividing** an edge. Two graphs are **homeomorphic** (as graphs) if they become the same after subdividing edges
of each; equivalently, if their realisations are homeomorphic spaces. A cycle with 3 vertices and a cycle with 7
vertices are homeomorphic: both are circles.

So the vertices of degree 2 are not really visible to topology. The visible features are the vertices of degree 1
(ends), the vertices of degree 3 or more (branch points), and the way they are joined, exactly as with the letters in
[1.3](01-What-Topology-Is.md).

### A first invariant: the cycle rank

**Definition.** For a graph with $V$ vertices, $E$ edges and $c$ connected pieces (components), the **Euler
characteristic** is $\chi(G) = V - E$, and the **cycle rank** (or first Betti number) is

$$
b_1(G) = E - V + c .
$$

**Theorem.** Subdividing an edge does not change $V - E$ or $b_1$. So both are topological invariants of graphs.

*Proof.* Subdividing adds 1 to $V$ and 1 to $E$ and does not change $c$. $\square$

What does $b_1$ count? For a tree (connected, no cycles), $E = V - 1$, so $b_1 = 0$. Adding an edge to a connected
graph between two existing vertices creates a new cycle and adds 1 to $b_1$. A connected graph can be built from a
**spanning tree** (a tree using all its vertices; one exists, by removing edges on cycles as in
[2.1](02-Surfaces-and-Euler-Characteristic.md)) by adding the remaining $E - (V - 1)$ edges one at a time, each
closing up one new cycle. So $b_1$ is the number of **independent cycles**: the number of edges you must cut to leave
a tree.

**Worked example.** The letter B as a graph (two loops at a point, [1.3](01-What-Topology-Is.md)): draw it with one
vertex where the loops meet, plus one vertex on each loop to avoid loops in the graph sense; that is 3 vertices and
4 edges, one component. $b_1 = 4 - 3 + 1 = 2$: two independent cycles. The letter A: a triangle with two tails,
5 vertices and 5 edges, $b_1 = 1$. The Königsberg graph: $b_1 = 7 - 4 + 1 = 4$.

**Check:** the theta graph (two vertices joined by three edges) has $b_1 = 3 - 2 + 1 = 2$, and indeed cutting any two
of the three edges leaves a tree (one edge), while cutting one leaves a cycle.

In [Chapter 15](15-Van-Kampen-and-Surfaces.md) we will see that $b_1$ is the number of generators of the fundamental
group of a connected graph, which is a free group; in [Chapter 16](16-Homology.md) it is the rank of the first
homology group.

### Every graph can be drawn in space

**Theorem.** Every finite graph can be embedded in 3-dimensional space with straight edges (if it is simple; loops
and multiple edges can be drawn as small curves).

*Proof.* Put the $n$ vertices at distinct points of the **moment curve** $t \mapsto (t, t^2, t^3)$, say at
$t = 1, 2, \ldots, n$, and draw every edge as a straight segment. We claim no two segments meet except at a shared end.

First, no four distinct points of the curve lie in one plane. A plane is the set of solutions of $a + bx + cy + dz = 0$
with $(b, c, d) \ne (0,0,0)$. A point $(t, t^2, t^3)$ is on it when $a + bt + ct^2 + dt^3 = 0$, a nonzero polynomial
of degree at most 3 in $t$ (nonzero because $b$, $c$, $d$ are not all 0). Such a polynomial has at most 3 roots, so at
most 3 points of the curve lie on the plane. In particular no three points of the curve are on one line (a line lies
in many planes, and adding a fourth point gives a plane through four of them).

Now take two edges. If they share no end, their four ends are not coplanar; but two segments that cross lie in one
plane, so their four ends would be coplanar. So they do not meet. If they share one end $u$, with other ends $v$
and $w$, the points $u$, $v$, $w$ are not on one line, so the segments $uv$ and $uw$ meet only at $u$. $\square$

**Check:** the four points with $t = 1, 2, 3, 4$ are not coplanar: the determinant with rows $(1, t, t^2, t^3)$ is a
Vandermonde determinant, equal to the product of differences $(2-1)(3-1)(4-1)(3-2)(4-2)(4-3) = 12 \ne 0$.

So space is roomy enough for every graph. The plane is not, and the rest of this chapter is about the difference.

## 3.2 Planar graphs and Euler's formula

A graph is **planar** if it can be embedded in the plane: drawn with no two edges crossing. A particular crossing-free
drawing is a **plane graph**. A planar graph also has drawings with crossings; planarity asks whether *some* drawing
has none.

The **faces** of a plane graph are the pieces into which the drawing cuts the plane. Exactly one face is unbounded,
the **outer face**. By stereographic projection ([1.5](01-What-Topology-Is.md)), drawing on the plane and drawing on the
sphere are the same problem: a drawing on the sphere that misses one point projects to a drawing in the plane, and any
plane drawing lifts to the sphere. On the sphere the outer face is no different from the others. Which face is
"outer" depends on where you put the projection point; any face can be made the outer one.

**Theorem (Euler's formula for plane graphs).** A plane graph with $V$ vertices, $E$ edges, $F$ faces and $c$
components satisfies

$$
V - E + F = 1 + c .
$$

In particular a connected plane graph has $V - E + F = 2$.

*Proof.* The connected case was proved in [2.1](02-Surfaces-and-Euler-Characteristic.md) by removing edges on cycles
and then leaves. Suppose $c > 1$. Pick a vertex $x$ in one component $K$ and a vertex $y$ in another, and a curve from
$x$ to $y$. Let $p$ be the last point of the curve that lies on $K$, and $q$ the first point after $p$ that lies on the
graph; $q$ is in a different component, since $p$ was the last point on $K$. Between $p$ and $q$ the curve meets no
part of the graph, so it runs inside a single face. If $p$ or $q$ is in the middle of an edge, subdivide that edge
there (this adds one vertex and one edge and changes nothing else). Now add the piece of curve from $p$ to $q$ as a new
edge. This adds 1 to $E$; it does not split the face, because its ends lie in different components, so it closes no
cycle and fences nothing in; and it lowers $c$ by 1. So $V - E + F - c$ is unchanged. After $c - 1$ such steps the
graph is connected and $V - E + F - c = 2 - 1 = 1$, and this value was the same at the start. $\square$

**Worked example.** Two disjoint triangles drawn side by side: $V = 6$, $E = 6$, faces: inside each triangle and the
outside, $F = 3$. Then $6 - 6 + 3 = 3 = 1 + 2$. **Check:** a triangle drawn inside another triangle also has
$F = 3$ (inner triangle's inside, the ring between them, the outside).

### Edge bounds

Euler's formula limits how many edges a planar graph can have. The key is to count, for each face, the number of
edge-sides along its boundary: the **length** of the face. An edge with a different face on each side contributes 1
to each of those faces; an edge with the same face on both sides (such as a tree edge) contributes 2 to that face.
Either way:

$$
\sum_{\text{faces}} \text{length} = 2E .
$$

**Theorem.** A simple planar graph with $V \ge 3$ vertices has $E \le 3V - 6$. If in addition it has no triangles
(no cycle of length 3), then $E \le 2V - 4$.

*Proof.* Adding edges cannot make a non-planar graph planar, so we may add edges to make the graph connected (as in
the previous proof); it suffices to prove the bound for connected simple plane graphs with $V \ge 3$. In a simple
graph every face has length at least 3: a face of length 1 would be bounded by a loop and a face of length 2 by two
parallel edges, or else the graph would be a single edge, excluded by $V \ge 3$. So $2E \ge 3F$, and $F \le 2E/3$.
Euler's formula gives $2 = V - E + F \le V - E + 2E/3 = V - E/3$, so $E \le 3V - 6$.

If there are no triangles, every face has length at least 4 (the boundary of a face is a closed walk; in a simple
graph with no triangles the shortest closed walk that bounds a face has length 4; again the tree case gives length
at least $2E \ge 4$). So $2E \ge 4F$, $F \le E/2$, and $2 \le V - E/2$, so $E \le 2V - 4$. $\square$

More generally, if every cycle has length at least $k$ (the **girth** is at least $k$, with $k \ge 3$) and the graph
has a cycle, the same argument gives $kF \le 2E$ and

$$
E \le \frac{k}{k - 2}(V - 2) .
$$

### Every planar graph has a vertex of small degree

**Theorem.** Every simple planar graph has a vertex of degree at most 5.

*Proof.* If $V \le 2$ this is clear. Otherwise $E \le 3V - 6$, so the sum of the degrees is $2E \le 6V - 12 < 6V$. The
average degree is less than 6, so some vertex has degree at most 5. $\square$

This small fact drives the colouring theorems of 3.5.

## 3.3 $K_5$ and $K_{3,3}$ are not planar

Two graphs are the smallest villains of planarity.

- $K_5$, the **complete graph** on 5 vertices: every pair of 5 vertices joined, $\binom52 = 10$ edges.
- $K_{3,3}$, the **complete bipartite graph**: two groups of 3 vertices (the houses and the utilities), every vertex
  of one group joined to every vertex of the other, $3 \times 3 = 9$ edges.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 190" role="img" aria-label="Left: K5, five vertices at the corners of a regular pentagon, with the five sides and the five diagonals forming a star, so edges cross. Right: K3,3, three vertices in a top row each joined to all three vertices in a bottom row, with crossing edges.">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <polygon points="90,25 156.6,73.4 131.1,151.6 48.9,151.6 23.4,73.4"/>
    <polygon points="90,25 131.1,151.6 23.4,73.4 156.6,73.4 48.9,151.6"/>
    <line x1="230" y1="40" x2="230" y2="150"/>
    <line x1="230" y1="40" x2="300" y2="150"/>
    <line x1="230" y1="40" x2="370" y2="150"/>
    <line x1="300" y1="40" x2="230" y2="150"/>
    <line x1="300" y1="40" x2="300" y2="150"/>
    <line x1="300" y1="40" x2="370" y2="150"/>
    <line x1="370" y1="40" x2="230" y2="150"/>
    <line x1="370" y1="40" x2="300" y2="150"/>
    <line x1="370" y1="40" x2="370" y2="150"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <circle cx="90" cy="25" r="6"/>
    <circle cx="156.6" cy="73.4" r="6"/>
    <circle cx="131.1" cy="151.6" r="6"/>
    <circle cx="48.9" cy="151.6" r="6"/>
    <circle cx="23.4" cy="73.4" r="6"/>
    <circle cx="230" cy="40" r="6"/>
    <circle cx="300" cy="40" r="6"/>
    <circle cx="370" cy="40" r="6"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <circle cx="230" cy="150" r="6"/>
    <circle cx="300" cy="150" r="6"/>
    <circle cx="370" cy="150" r="6"/>
  </g>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="90" y="182">K5</text>
    <text x="300" y="25">houses</text>
    <text x="300" y="175">utilities</text>
  </g>
</svg>
</div>

**Theorem.** $K_5$ is not planar.

*Proof.* $K_5$ is simple with $V = 5$ and $E = 10$. A simple planar graph with 5 vertices has at most
$3 \times 5 - 6 = 9$ edges. $10 > 9$. $\square$

**Theorem.** $K_{3,3}$ is not planar.

*Proof.* $K_{3,3}$ has no triangles: every edge joins a house to a utility, so any cycle alternates between the two
groups and has even length. It is simple with $V = 6$, $E = 9$. A simple planar graph with no triangles and 6 vertices
has at most $2 \times 6 - 4 = 8$ edges. $9 > 8$. $\square$

Notice that the bound $E \le 3V - 6$ alone does not catch $K_{3,3}$ ($9 \le 12$). It is the absence of triangles that
does.

### A second proof, by the Jordan curve theorem

The counting proofs are quick, but they hide the geometry. Here is a direct argument for $K_{3,3}$, which shows where
the obstruction lives.

*Proof.* Call the houses $h_1, h_2, h_3$ and the utilities $u_1, u_2, u_3$, and suppose a crossing-free drawing exists.
The six edges $h_1u_1$, $u_1h_2$, $h_2u_2$, $u_2h_3$, $h_3u_3$, $u_3h_1$ form a cycle $C$ through all six vertices. By
the Jordan curve theorem it has an inside and an outside. The three remaining edges are $h_1u_2$, $h_2u_3$, $h_3u_1$.
Each is drawn entirely inside or entirely outside $C$ (it cannot cross $C$). Two of the three are on the same side, by
the pigeonhole principle. But any two of these three edges have ends that alternate around $C$: going around $C$ in
the order $h_1, u_1, h_2, u_2, h_3, u_3$, the edge $h_1u_2$ separates $\{u_1, h_2\}$ from $\{h_3, u_3\}$, and each of
the other two edges has one end in each of these sets. Two chords of a circle on the same side whose ends alternate
must cross (the first chord cuts that side of $C$ into two regions, and the second chord has an end on the boundary of
each region). That contradicts the drawing having no crossings. $\square$

(The last step, "two alternating chords on the same side must cross", is itself a small Jordan curve argument: the
first chord together with one arc of $C$ forms a closed curve that separates the ends of the second chord.)

### The Petersen graph

The **Petersen graph** has 10 vertices and 15 edges: an outer 5-cycle, an inner 5-pointed star (a 5-cycle drawn as a
pentagram), and five spokes joining each outer vertex to the matching inner one. Every vertex has degree 3 and the
shortest cycle has length 5 (girth 5).

**Theorem.** The Petersen graph is not planar.

*Proof.* With girth 5 the bound is $E \le \frac{5}{3}(V - 2) = \frac{5}{3} \times 8 = \frac{40}{3} \approx 13.3$. But
$E = 15$. $\square$

### What the obstruction means

The plane is special because of the Jordan curve theorem: every cycle separates. On a torus, a cycle that goes around
the hole does not separate, and both villains can be drawn there without crossings. Run Euler's formula on the torus
($V - E + F = 0$ for a drawing whose faces are discs) and the bound becomes $E \le 3V$ for simple graphs, so
$K_5$ ($10 \le 15$) is no longer excluded, and indeed it embeds. $K_{3,3}$ can even be drawn without crossings on a
Möbius strip. Planarity is a topological question about the plane, not about graphs alone.

## 3.4 Kuratowski's theorem

*Level: intermediate.*

If a graph contains a copy of $K_5$ or $K_{3,3}$, it cannot be planar. The same is true if it contains a
**subdivision** of one of them: a copy in which some edges have been replaced by paths (extra vertices of degree 2
along the edges). Subdividing does not change the space, and the space is what we are trying to draw. The remarkable
fact is that these are the only obstructions.

**Theorem (Kuratowski, 1930).** A finite graph is planar if and only if it contains no subgraph that is a subdivision
of $K_5$ or of $K_{3,3}$.

*Proof of the easy half.* If $G$ is planar, so is every subgraph (erase the rest of the drawing). A subdivision of
$K_5$ or $K_{3,3}$ is homeomorphic to $K_5$ or $K_{3,3}$, which are not planar, so it is not planar either. So a planar
graph contains neither. $\square$

The hard half, that every non-planar graph contains one of the two, needs a careful induction on the number of edges
and a case analysis of how a minimal non-planar graph can look. It takes several pages; a clean modern version is in
the books by Diestel and by Mohar and Thomassen listed at the end. Kazimierz Kuratowski published it in 1930. Orrin
Frink and Paul Smith found a proof independently around the same time, but did not publish it after Kuratowski's
appeared.

### Minors: Wagner's form

A **minor** of a graph is anything obtained by deleting edges, deleting vertices, and **contracting** edges (shrinking
an edge to a point, merging its two ends). Contracting an edge of a plane drawing gives a plane drawing, so minors of
planar graphs are planar.

**Theorem (Wagner, 1937).** A finite graph is planar if and only if neither $K_5$ nor $K_{3,3}$ is a minor of it.

The two forms are not identical. The Petersen graph contains a subdivision of $K_{3,3}$ but no subdivision of $K_5$
(every vertex has degree 3, while a subdivision of $K_5$ needs vertices of degree 4); yet contracting its five spokes
turns it into $K_5$ (each outer vertex merges with its inner partner, and each of the five merged vertices is then
joined to the other four).

**Check:** after contracting the spokes, merged vertex $i$ is adjacent to $i \pm 1$ (outer cycle) and $i \pm 2$ (inner
pentagram), all mod 5: that is all four others.

Wagner's form started a large theory. Neil Robertson and Paul Seymour proved in a long series of papers (completed in
2004) that every minor-closed family of graphs is characterised by finitely many forbidden minors. For graphs on the
torus the list is known to be finite but has thousands of members; it has not been fully determined.

### Two facts worth knowing

- **Straight edges suffice.** Every simple planar graph can be drawn without crossings using straight line segments
  for edges. This is usually called **Fáry's theorem** (István Fáry, 1948); Klaus Wagner had proved it in 1936.
- **Planarity can be tested fast.** John Hopcroft and Robert Tarjan gave an algorithm in 1974 that decides whether a
  graph with $V$ vertices is planar in time proportional to $V$.

## 3.5 The four colour theorem and the five colour theorem

### From maps to graphs

Colour a map so that any two countries sharing a border (a stretch of boundary, not just a corner point) get different
colours. How many colours are needed? Put a capital city inside each country and join two capitals by a road crossing
their common border. The result is a plane graph, the **dual graph** of the map, and colouring the map is the same as
colouring the vertices of this graph so that the ends of every edge differ: a **proper colouring**. The smallest
number of colours that works is the **chromatic number**.

Countries must be in one piece for this to work. If a country has a separate enclave (as some real countries do) and
both pieces must share its colour, more than four colours can be needed.

### An honest history

- **1852.** Francis Guthrie, colouring a map of the counties of England, noticed that four colours sufficed and asked
  whether this is always so. His brother Frederick passed the question to Augustus De Morgan, who wrote about it to
  William Rowan Hamilton in a letter of 23 October 1852.
- **1878 to 1879.** Arthur Cayley raised the question at the London Mathematical Society and published a short note
  explaining why it is hard.
- **1879.** Alfred Kempe published a proof. It was accepted for eleven years. Its key idea, swapping colours along
  **Kempe chains**, is sound and is used below.
- **1890.** Percy Heawood found an error in Kempe's argument. In the same paper he proved that five colours always
  suffice, and he studied maps on other surfaces (3.6).
- **Twentieth century.** George Birkhoff (1913) and others developed the idea of **reducible configurations**: local
  patterns that cannot occur in a smallest counterexample. Heinrich Heesch, in the decades after the Second World War, developed
  the method of **discharging** to show that every planar map must contain one of a finite list of such patterns.
- **1976.** Kenneth Appel and Wolfgang Haken, at the University of Illinois, completed a proof along these lines. It
  reduced the problem to checking close to two thousand configurations, which was done by computer; the papers
  appeared in 1977. It was the first major theorem whose proof could not be checked by hand, and it was debated for
  years. Errors were found in parts of the hand-checked portion and repaired by the authors.
- **1997.** Neil Robertson, Daniel Sanders, Paul Seymour and Robin Thomas published a new proof using the same strategy
  with 633 configurations and a simpler discharging procedure, again checked by computer, with programs anyone could
  run.
- **2005.** Georges Gonthier, working with Benjamin Werner, completed a fully formal proof checked by the Coq proof
  assistant, so that both the computer part and the human reasoning were verified by machine.

**Theorem (four colour theorem).** Every planar graph can be properly coloured with 4 colours.

No short proof is known. What we can prove completely, in a page, are the six and five colour theorems.

### Six colours

**Theorem.** Every simple planar graph can be properly coloured with 6 colours.

*Proof.* Induction on the number of vertices $V$. With $V \le 6$, give every vertex its own colour. Otherwise, by 3.2
there is a vertex $v$ of degree at most 5. Delete $v$; the rest is still planar with fewer vertices, so by induction
it can be coloured with 6 colours. The neighbours of $v$ use at most 5 colours, so a sixth is free for $v$. $\square$

(Loops cannot be properly coloured at all, and multiple edges do not affect colouring, so restricting to simple graphs
loses nothing.)

### Five colours

**Theorem (Heawood, 1890).** Every simple planar graph can be properly coloured with 5 colours.

*Proof.* Induction on $V$; the case $V \le 5$ is clear. Fix a crossing-free drawing. There is a vertex $v$ of degree
at most 5. Delete it, and colour the rest with the colours 1 to 5 by induction. If the neighbours of $v$ use at most
4 colours, give $v$ the fifth. So suppose $v$ has exactly 5 neighbours, all differently coloured. Name them
$w_1, w_2, w_3, w_4, w_5$ in the clockwise order in which their edges leave $v$, with $w_i$ coloured $i$.

Consider the vertices coloured 1 or 3, and the edges between them. Call the part of this two-coloured subgraph that
can be reached from $w_1$ the **Kempe chain** $K_{13}$ through $w_1$.

*Case 1: $w_3$ is not in $K_{13}$.* Swap colours 1 and 3 on every vertex of $K_{13}$. The colouring stays proper:
inside the chain the two colours are swapped consistently, and a vertex just outside the chain that is adjacent to a
chain vertex has a colour other than 1 or 3 (otherwise it would be in the chain). Now $w_1$ has colour 3, and $w_3$
still has colour 3, so no neighbour of $v$ has colour 1. Give $v$ colour 1.

*Case 2: $w_3$ is in $K_{13}$.* Then there is a path from $w_1$ to $w_3$ using only colours 1 and 3. Together with
$v$ and the edges $vw_1$ and $vw_3$ it forms a cycle $C$. By the Jordan curve theorem, $C$ separates the plane. The
edges from $v$ to $w_2$ and to $w_4$ leave $v$ on opposite sides of $C$ (because $w_2$ lies between $w_1$ and $w_3$
in the clockwise order around $v$, and $w_4$ does not). So $w_2$ is on one side of $C$ and $w_4$ on the other.

Now consider the Kempe chain $K_{24}$ through $w_2$, using colours 2 and 4. Any path from $w_2$ to $w_4$ would have to
cross $C$, and in a plane drawing it could cross only at a vertex of $C$. But every vertex of $C$ other than $v$ has
colour 1 or 3, and $v$ is not coloured (it was deleted). So no path coloured 2 and 4 joins $w_2$ to $w_4$, and $w_4$
is not in $K_{24}$. Swap colours 2 and 4 on $K_{24}$, as in case 1. Now no neighbour of $v$ has colour 2, so give $v$
colour 2. $\square$

### Where Kempe's argument breaks for four colours

Try the same argument with 4 colours and a vertex of degree 5 whose neighbours use colours 1, 2, 3, 4, 2 in clockwise
order. Kempe swapped two chains at once to free a colour. Heawood showed that the two swaps can interfere: after the
first swap, the second chain can change shape, so the second swap undoes what the first achieved. Heawood gave an
explicit map where Kempe's procedure fails. The idea of the four colour theorem's eventual proof is to show that a
smallest counterexample cannot contain any configuration from a long list, and also must contain one of them: a
contradiction. Each of these two claims needs a computer.

### Try it in Python

A tiny greedy colouring of the icosahedron's graph (which is planar), checking the result is proper. Greedy colouring
does not always use the fewest colours, but it shows the definitions at work.

```python
import itertools

# icosahedron: vertices 0..11; 0 and 11 are poles, 1-5 upper ring, 6-10 lower ring
edges = set()
for i in range(5):
    a, b = 1 + i, 1 + (i + 1) % 5          # upper ring
    c, d = 6 + i, 6 + (i + 1) % 5          # lower ring
    edges |= {(0, a), (a, b), (c, d), (c, 11), (a, c), (b, c)}
adj = {v: set() for v in range(12)}
for u, v in edges:
    adj[u].add(v); adj[v].add(u)

print(len(edges), {len(adj[v]) for v in adj})   # 30 edges, every degree 5

colour = {}
for v in range(12):
    used = {colour[w] for w in adj[v] if w in colour}
    colour[v] = next(c for c in itertools.count() if c not in used)

print(max(colour.values()) + 1, "colours")          # 5 with this vertex order
print(all(colour[u] != colour[v] for u, v in edges))   # True
```

The icosahedron's chromatic number is in fact 4, so greedy colouring in this order wastes a colour; some other orders
find 4. Greedy is fast, not optimal.

## 3.6 Graphs on a torus: seven colours and Heawood's bound

*Level: advanced.*

Draw a map on the surface of a doughnut. Five countries can all border each other (since $K_5$ embeds on the torus),
and so can six, and seven. The four colour theorem fails on the torus: some maps there need 7 colours, and 7 always
suffice.

### Seven always suffice

The proof copies the six colour theorem, with the torus's Euler characteristic in place of the sphere's.

**Lemma.** A simple graph embedded in the torus, with $V \ge 3$, has $E \le 3V$.

*Proof for embeddings whose faces are discs.* On the torus $V - E + F = 0$ ([2.3](02-Surfaces-and-Euler-Characteristic.md)).
As in 3.2, every face has length at least 3, so $3F \le 2E$. Then $0 = V - E + F \le V - E/3$, so $E \le 3V$.
$\square$

When some faces are not discs (for example, a small graph drawn in one corner of the torus, whose outer face contains
the whole hole), the general inequality $V - E + F \ge 0$ still holds and the same conclusion follows; we omit that
step, which needs a little more care.

**Theorem.** Every graph embeddable on the torus can be properly coloured with 7 colours.

*Proof.* Induction on $V$. If $V \le 7$, use different colours. Otherwise, by the lemma the sum of degrees is
$2E \le 6V$, so some vertex has degree at most 6. Delete it (the rest is still on the torus), colour the rest with
7 colours, and give the deleted vertex a colour not used by its at most 6 neighbours. $\square$

### Seven are needed: $K_7$ on the torus

To show 7 colours are necessary, it is enough to embed $K_7$, the complete graph on 7 vertices, on the torus. Its
vertices then need 7 different colours (all pairs are adjacent), and in map terms there are seven countries each
bordering all the others.

**Construction.** Take vertices $0, 1, \ldots, 6$ (numbers mod 7) and the 14 triangles

$$
\{i, \ i+1, \ i+3\} \quad \text{and} \quad \{i, \ i+2, \ i+3\}, \qquad i = 0, 1, \ldots, 6 .
$$

Check the following, which together show that gluing these 14 triangles along shared edges gives a closed surface
with $\chi = 0$ containing every edge of $K_7$:

1. Every pair $\{a, b\}$ of vertices is an edge of exactly two triangles. The differences of the first family are
   $1, 2, 3$ (from $i$ to $i+1$, $i+1$ to $i+3$, $i$ to $i+3$), and of the second family $2, 1, 3$. Every pair of
   numbers mod 7 differs by $\pm1$, $\pm2$ or $\pm3$, and each family contains each difference once for each $i$,
   so each pair lies in exactly one triangle of each family. That gives $E = \binom72 = 21$ edges.
2. Around each vertex the triangles fit together in a single cycle of 6 (so the surface has no pinch points): for
   vertex 0 the triangles containing it are $\{0,1,3\}$, $\{6,0,2\}$, $\{4,5,0\}$, $\{0,2,3\}$, $\{5,0,1\}$,
   $\{4,6,0\}$, and their edges opposite 0 are $13$, $62$, $45$, $23$, $51$, $46$, which link up into the cycle
   $1, 3, 2, 6, 4, 5, 1$.
3. $V - E + F = 7 - 21 + 14 = 0$.
4. The triangles can be oriented consistently: listing them as $(i, i+1, i+3)$ and $(i, i+3, i+2)$, every edge is
   traversed once in each direction.

A closed surface with $\chi = 0$ that is orientable is a torus (this uses the classification of
[Chapter 10](10-Classification-of-Surfaces.md); without it, items 1 to 4 still give a surface on which $K_7$ is drawn
without crossings). So $K_7$ embeds on the torus.

**Check:** this is also the smallest triangulation of the torus allowed by exercise 7 of
[Chapter 2](02-Surfaces-and-Euler-Characteristic.md), which showed at least 7 vertices are needed.

The dual map (a country around each vertex) has 7 countries, each a hexagon (each vertex has 6 triangles around it),
each bordering all six others. Heawood described a map of this kind in 1890. Ákos Császár (1949) realised this
triangulation as a polyhedron in space without self-intersections, the **Császár polyhedron**, and Lajos Szilassi
(1977) realised the dual map as a polyhedron with seven hexagonal faces each touching all the others, the **Szilassi
polyhedron**. Both are torus-shaped.

### Heawood's formula for any surface

The same argument works on any closed surface $S$ with Euler characteristic $\chi \le 0$ (for example the surface of
genus $g \ge 1$, with $\chi = 2 - 2g$). For cellular embeddings $V - E + F = \chi$ and $3F \le 2E$ give
$E \le 3(V - \chi)$.

**Theorem (Heawood's bound, 1890).** Every graph embeddable on a closed surface with Euler characteristic $\chi \le 0$
can be properly coloured with

$$
H(\chi) = \left\lfloor \frac{7 + \sqrt{49 - 24\chi}}{2} \right\rfloor
$$

colours. For the surface of genus $g$ this is $\left\lfloor \tfrac{7 + \sqrt{1 + 48g}}{2} \right\rfloor$.

*Proof.* Write $H = H(\chi)$. It is enough to show that every such graph has a vertex of degree at most $H - 1$; then
the induction of the six colour theorem works with $H$ colours. If $V \le H$, every degree is at most $V - 1 \le H - 1$.
If $V \ge H + 1$, the average degree is

$$
\frac{2E}{V} \le 6 - \frac{6\chi}{V} \le 6 - \frac{6\chi}{H + 1},
$$

using $-6\chi \ge 0$ and $V \ge H + 1$. We claim this is less than $H$, which means $H^2 - 5H - 6 + 6\chi > 0$
(multiply $6 - 6\chi/(H+1) < H$ by $H + 1$ and rearrange). The roots of $h^2 - 5h - 6 + 6\chi = 0$ are
$h = \frac{5 \pm \sqrt{49 - 24\chi}}{2}$, so the inequality holds for $h > r = \frac{5 + \sqrt{49 - 24\chi}}{2}$.
And $H = \lfloor r + 1 \rfloor > r$, because $\lfloor x \rfloor > x - 1$ for every $x$. So the average degree is less
than $H$, and some vertex has degree at most $H - 1$. $\square$

| surface | $\chi$ | $H(\chi)$ | true answer |
|---|---|---|---|
| torus ($g = 1$) | 0 | 7 | 7 |
| Klein bottle | 0 | 7 | 6 (Philip Franklin, 1934) |
| genus 2 | $-2$ | 8 | 8 |
| genus 3 | $-4$ | 9 | 9 |
| genus 4 | $-6$ | 10 | 10 |

Heawood believed his bound was always exact, but he proved it only for the torus. Gerhard Ringel and J. W. T. Youngs
completed the proof in 1968 that $H(\chi)$ colours are needed on every closed surface except the Klein bottle, where
Franklin had shown 6 suffice. The work required embedding complete graphs on surfaces case by case and took many
years.

Strangely, the formula gives $H(2) = 4$ for the sphere, the right answer; but the proof above needs $\chi \le 0$ and
fails for the sphere, where the four colour theorem needs entirely different and much harder methods. The surface
that looks simplest is the hardest.

## Check yourself

??? question "1. Draw K4 in the plane without crossings. How many faces does your drawing have? Check with Euler's formula."

    Draw a triangle on three vertices and put the fourth vertex inside, joined to the three corners. There are no
    crossings. Faces: three small triangles inside and the outer face, $F = 4$. Euler: $V - E + F = 4 - 6 + 4 = 2$.

??? question "2. Show that K5 with one edge removed is planar, and use this to draw K5 with exactly one crossing."

    Call the vertices 1 to 5 and remove the edge 45. Draw the triangle 123. Put 4 inside the triangle and join it to
    1, 2, 3; put 5 outside and join it to 1, 2, 3 through the outer face. That is a crossing-free drawing of all
    nine edges. Now add the edge 45: from 4, go across the side 12 into the outer region and on to 5. It crosses only
    the edge 12. Since $K_5$ is not planar, at least one crossing is needed, so the least possible number of
    crossings is 1.

??? question "3. Is the cube graph (8 vertices, 12 edges, every vertex of degree 3) planar? Does the bound E at most 2V - 4 for triangle-free graphs decide it?"

    It is planar: draw a small square inside a large one and join corresponding corners (the flattened cube of
    [Chapter 2](02-Surfaces-and-Euler-Characteristic.md)). The cube graph has no triangles and $E = 12 = 2 \times 8 - 4$,
    exactly at the bound. The bound cannot prove planarity; it only rules graphs out. Here the planar drawing has
    6 faces, all of length 4.

??? question "4. A plane graph has 3 components, 10 vertices and 12 edges. How many faces does it have?"

    $V - E + F = 1 + c$, so $10 - 12 + F = 4$ and $F = 6$.

??? question "5. Compute the cycle rank of K5, K33 and the Petersen graph."

    $b_1 = E - V + 1$ for connected graphs. $K_5$: $10 - 5 + 1 = 6$. $K_{3,3}$: $9 - 6 + 1 = 4$. Petersen:
    $15 - 10 + 1 = 6$.

??? question "6. Prove that every simple planar graph with no triangles has a vertex of degree at most 3."

    If $V \le 3$ then every degree is at most 2. Otherwise $E \le 2V - 4$, so the degree sum is $2E \le 4V - 8 < 4V$.
    The average degree is less than 4, so some vertex has degree at most 3.

??? question "7. Prove that K8 cannot be embedded on the torus, and that K7 can (cite the chapter), so the largest complete graph on the torus is K7."

    $K_8$ is simple with $V = 8$ and $E = 28$. Any simple graph on the torus satisfies $E \le 3V = 24$. $28 > 24$, so
    $K_8$ does not embed. $K_7$ embeds by the 14-triangle construction of 3.6. Every complete graph with more than
    8 vertices contains $K_8$, so none of them embeds either.

??? question "8. Five countries on a flat map: can every pair share a border? What about four?"

    Five countries pairwise bordering would give a dual graph containing $K_5$ drawn in the plane without crossings,
    which is impossible. Four countries can: three countries arranged around a central fourth, each touching the
    other two outer ones and the centre (this is the plane drawing of $K_4$ from exercise 1, seen as a map).

??? question "9. Where does the proof of the five colour theorem use the plane? Explain why the same argument does not work on a torus."

    On the torus the cycle $C$ formed by $v$, $w_1$, the 1-3 path and $w_3$ may go around the hole and fail to
    separate the surface. Then $w_2$ and $w_4$ can be joined by a 2-4 path that goes around the other way without
    meeting $C$, both chains can link up, and neither swap frees a colour. This is one reason the torus needs 7
    colours: the argument relied on the plane's separation property.

??? question "10. Heawood's bound for the surface of genus 2 is 8. Verify the formula, and check that K8 is not ruled out by the edge bound there."

    $\lfloor (7 + \sqrt{1 + 96})/2 \rfloor = \lfloor (7 + \sqrt{97})/2 \rfloor$. Since $\sqrt{97} \approx 9.85$, this
    is $\lfloor 8.42 \rfloor = 8$. On genus 2, $\chi = -2$ and the bound is $E \le 3(V + 2)$. For $K_8$: $28 \le 30$,
    so the bound allows it. (In fact $K_8$ does embed on the genus 2 surface; that is part of the Ringel-Youngs
    theorem.) For $K_9$: $36 \le 33$ fails, so $K_9$ does not embed there.

??? question "11. Harder: prove that a simple planar graph in which every vertex has degree at least 3 has at least four vertices of degree at most 5. (Hint: add up 6 minus the degree over all vertices.)"

    Such a graph has $V \ge 4$ (a vertex of degree 3 needs 3 neighbours), so $E \le 3V - 6$ and
    $\sum_v \deg v = 2E \le 6V - 12$. Rearranged:

    $$
    \sum_v (6 - \deg v) \ge 12 .
    $$

    A vertex of degree 6 or more contributes 0 or a negative amount to this sum. A vertex of degree $d \le 5$
    contributes $6 - d$, which is at most 3 because $d \ge 3$. So the positive contributions add up to at least 12,
    and each is at most 3: at least $12/3 = 4$ vertices have degree at most 5. The icosahedron shows the bound on
    the sum is sharp: all 12 vertices have degree 5 and contribute 1 each, total 12. This kind of accounting, where
    each vertex carries a "charge" $6 - \deg v$ and the total is known, is the seed of the discharging method used
    in the four colour theorem.

## What you learned

- A graph is also a space; subdividing edges does not change it, and $b_1 = E - V + c$ (the number of independent
  cycles) is a topological invariant.
- Every graph embeds in 3-dimensional space (vertices on the moment curve), but not every graph in the plane.
- Plane graphs satisfy $V - E + F = 1 + c$; simple planar graphs have $E \le 3V - 6$, or $E \le 2V - 4$ without
  triangles, and so a vertex of degree at most 5.
- $K_5$ and $K_{3,3}$ are not planar (by counting, or by the Jordan curve theorem); Kuratowski: they and their
  subdivisions are the only obstructions; Wagner: the same with minors.
- Four colours suffice for planar maps (Appel and Haken 1976; Robertson, Sanders, Seymour and Thomas 1997; formally
  verified by Gonthier 2005); five colours have a one-page proof by Kempe chains.
- On the torus seven colours are necessary and sufficient ($K_7$ embeds); Heawood's bound $\lfloor (7 + \sqrt{49 -
  24\chi})/2 \rfloor$ is exact on every closed surface except the Klein bottle (Ringel and Youngs 1968).

**Next:** [Chapter 4](04-Topological-Spaces.md) leaves pictures behind and asks what "near" means in general. It
replaces distance by open sets and defines the topological space, the setting for everything that follows.

## Further reading

- Kazimierz Kuratowski, "Sur le problème des courbes gauches en topologie", *Fundamenta Mathematicae* 15 (1930).
- Kenneth Appel and Wolfgang Haken, "Every planar map is four colorable", *Illinois Journal of Mathematics* 21 (1977),
  two parts (the second with John Koch).
- Neil Robertson, Daniel Sanders, Paul Seymour and Robin Thomas, "The four-colour theorem", *Journal of Combinatorial
  Theory, Series B* 70 (1997).
- Georges Gonthier, "Formal proof: the four-color theorem", *Notices of the American Mathematical Society* 55 (2008).
- Gerhard Ringel and J. W. T. Youngs, "Solution of the Heawood map-coloring problem", *Proceedings of the National
  Academy of Sciences* 60 (1968); and Gerhard Ringel, *Map Color Theorem* (1974).
- Robin Wilson, *Four Colors Suffice: How the Map Problem Was Solved* (2002).
- Reinhard Diestel, *Graph Theory* (5th edition, 2017), chapter 4 for a full proof of Kuratowski's theorem.
- Bojan Mohar and Carsten Thomassen, *Graphs on Surfaces* (2001).
- Jonathan L. Gross and Thomas W. Tucker, *Topological Graph Theory* (1987).
- On this site: Topics lessons [Networks and Euler paths](../../topics/logic/level-6/05-networks-euler.md) and
  [Graph colouring](../../topics/logic/level-6/06-graph-colouring.md); the Combinatorics book's
  [Graphs](../combinatorics/10-Graphs.md), [Trees](../combinatorics/11-Trees.md) and
  [Planar graphs and colouring](../combinatorics/12-Planar-Graphs-and-Colouring.md); the
  [Algebra book](../algebra/index.md) for the groups that appear from [Chapter 13](13-The-Fundamental-Group.md).
