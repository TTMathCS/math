---
title: "Networks and Euler paths"
---

# Networks and Euler paths

*Logic and puzzles · level 6, lesson 5 of 6*

## A question to start

The old city of Königsberg (today Kaliningrad, in Russia) was built on both banks of a river and on an island in the
middle, and the river split into two branches. Seven bridges joined the four pieces of land.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 200" role="img" aria-label="Sketch map of Königsberg: a north bank, a south bank, an island in the river and an eastern piece of land between two branches, joined by seven bridges">
  <rect x="0" y="0" width="440" height="200" fill="#9cc9ea"/>
  <g fill="#7ccf9a" stroke="currentColor">
    <rect x="0" y="0" width="440" height="60"/>
    <rect x="0" y="140" width="440" height="60"/>
    <ellipse cx="150" cy="100" rx="55" ry="22"/>
    <path d="M 250 100 L 440 75 L 440 125 Z"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <rect x="114" y="58" width="12" height="24"/><rect x="174" y="58" width="12" height="24"/>
    <rect x="114" y="118" width="12" height="24"/><rect x="174" y="118" width="12" height="24"/>
    <rect x="203" y="94" width="49" height="12"/>
    <rect x="334" y="58" width="12" height="32"/><rect x="334" y="110" width="12" height="32"/>
  </g>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="60" y="35">N (north bank)</text><text x="60" y="178">S (south bank)</text>
    <text x="150" y="105">I</text><text x="410" y="105">E</text>
  </g>
</svg>
</div>

People in the city liked a puzzle: **can you take a walk that crosses every bridge exactly once?** You may start and
finish anywhere, but no swimming, and no crossing a bridge twice.

Nobody managed it. In 1736 the Swiss mathematician Leonhard Euler proved that nobody ever could, and his reason was so
simple and so new that it started a whole branch of mathematics, now called **graph theory**. The reason fits in one
sentence, and by the end of this lesson you will be able to say it.

## The idea

### Throw away the map

Euler's first insight: the shapes of the land, the lengths of the bridges, the streets: **none of it matters**. All
that matters is which pieces of land are joined, and by how many bridges. So shrink each piece of land to a dot, and
draw each bridge as a line between dots.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 200" role="img" aria-label="The Königsberg graph: four dots N, S, I and E; N joined to I by two lines, S joined to I by two lines, and N, S and I each joined to E by one line">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <path d="M 220 25 Q 140 25 120 100"/>
    <path d="M 220 25 Q 200 90 120 100"/>
    <path d="M 220 175 Q 140 175 120 100"/>
    <path d="M 220 175 Q 200 110 120 100"/>
    <line x1="120" y1="100" x2="330" y2="100"/>
    <line x1="220" y1="25" x2="330" y2="100"/>
    <line x1="220" y1="175" x2="330" y2="100"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="220" cy="25" r="9"/><circle cx="220" cy="175" r="9"/>
    <circle cx="120" cy="100" r="9"/><circle cx="330" cy="100" r="9"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="236" y="22">N (3)</text><text x="236" y="190">S (3)</text>
    <text x="55" y="105">I (5)</text><text x="345" y="105">E (3)</text>
  </g>
</svg>
</div>

A drawing like this is called a **graph** (or a **network**). This has nothing to do with the graphs of functions.
Here:

- the dots are called **vertices** (one is a **vertex**);
- the lines are called **edges**; two vertices may be joined by more than one edge, as N and I are;
- the **degree** of a vertex is the number of edge-ends at it: how many edges touch it. In the picture the degrees
  are written in brackets: I has 5, and N, S and E have 3 each.

A graph is **connected** if you can get from any vertex to any other along edges.

### Euler paths and circuits

An **Euler path** is a walk along the edges that uses **every edge exactly once**. (Vertices may be visited as often
as you like.) An **Euler circuit** is an Euler path that ends where it started. The bridge puzzle asks: does the
Königsberg graph have an Euler path?

Drawing a figure "without lifting your pencil and without going over a line twice" is exactly the same question:
the corners and crossings are vertices and the lines are edges.

### Euler's reason: count the odd vertices

Follow a walk as it passes **through** a vertex: it comes in along one edge and leaves along another. Each visit in
the middle of the walk uses up edges **in pairs**: one in, one out. So if a walk uses every edge at a vertex exactly
once, and that vertex is not where the walk starts or ends, the vertex must have **even** degree.

Only the start and the end can break this: the start has one extra "out", and the end has one extra "in". So:

- **In an Euler path, at most two vertices have odd degree**, and if there are two, the path must start at one and
  end at the other.
- **In an Euler circuit, every vertex has even degree** (the start and end are the same vertex, and its extra "out"
  and extra "in" make a pair).

Königsberg has **four** vertices of odd degree (5, 3, 3, 3). Four is more than two. So there is no Euler path, and
the walk is impossible. That is Euler's one sentence: **every land area touches an odd number of bridges, and a walk
can have at most two places where it does not come and go in pairs.**

### The other direction

Euler's argument shows when a path is **impossible**. Is the converse also true, that the conditions are enough? Yes:

> **Euler's theorem.** A connected graph has an Euler circuit exactly when every vertex has even degree. It has an
> Euler path (that is not a circuit) exactly when exactly two vertices have odd degree; the path then starts at one
> odd vertex and ends at the other.

Why even degrees are enough, in outline: start anywhere and keep walking along unused edges. You can only get stuck
at the start, because every other vertex you enter has an unused edge to leave by (even degree: in-out pairs). If
some edges are still unused, one of them touches your loop somewhere (the graph is connected); walk a new loop from
there, and splice it into the first loop. Repeat until every edge is used. For two odd vertices, add one imaginary
edge between them, find the circuit, then remove the imaginary edge: the circuit becomes a path from one odd vertex
to the other.

### The handshake rule

Could a graph have exactly **one** odd vertex? Never. Each edge has two ends, so adding up all the degrees counts
every edge twice:

$$\text{sum of all degrees} = 2 \times \text{number of edges}.$$

That sum is even. If an odd number of vertices had odd degree, the sum would be odd. So **the number of odd vertices
is always even**: 0, 2, 4, and so on. It is called the **handshake lemma**, because at a party the total number of
hands shaken (counted per person) is twice the number of handshakes. Check Königsberg: $5 + 3 + 3 + 3 = 14 = 2 \times 7$
bridges. ✓

## Worked examples

**1. The house.** Can you draw this house (a square, both diagonals, and a roof) without lifting your pencil?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 210" role="img" aria-label="A house: a square with both diagonals and a triangular roof. Bottom corners A and B, top corners D and C, roof point E">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <path d="M 50 190 H 170 V 90 H 50 Z"/>
    <line x1="50" y1="190" x2="170" y2="90"/><line x1="170" y1="190" x2="50" y2="90"/>
    <path d="M 50 90 L 110 30 L 170 90"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="50" cy="190" r="6"/><circle cx="170" cy="190" r="6"/>
    <circle cx="170" cy="90" r="6"/><circle cx="50" cy="90" r="6"/><circle cx="110" cy="30" r="6"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="22" y="200">A (3)</text><text x="176" y="200">B (3)</text>
    <text x="176" y="88">C (4)</text><text x="4" y="88">D (4)</text><text x="122" y="28">E (2)</text>
  </g>
</svg>
</div>

Degrees: A 3, B 3, C 4, D 4, E 2. Exactly two odd vertices, A and B, so **yes**, and you must start at A or B. One
route: A–B–C–D–A–C–E–D–B. Check: that uses AB, BC, CD, DA, AC, CE, ED, DB, which are all 8 edges, each once. ✓
Start at C instead and you will always get stuck.

**2. Fixing Königsberg.** How many new bridges would make the walk possible, and where? One new bridge between two odd
areas, say N and S, makes both even: degrees I 5, N 4, S 4, E 3. Now exactly two are odd (I and E), so an Euler path
exists, from I to E. To make a **circuit** possible, a second new bridge between I and E would make all four even.

**3. An all-even graph.** A square with a vertex in the middle joined to all four corners: corners have degree 3
(two sides and one spoke), the middle has degree 4. Four odd corners: no Euler path. Remove the spokes to two
opposite corners (keep two spokes): now those two corners have degree 2, the other two corners still have degree 3,
the middle has degree 2. Two odd vertices: a path exists, between the two remaining odd corners.

**4. An impossible party.** Can 7 people each shake hands with exactly 3 of the others? Make each person a vertex and
each handshake an edge. The degrees would add up to $7 \times 3 = 21$, which is odd. But the sum of degrees is always
twice the number of edges, so it must be even. **Impossible.** (With 8 people, each shaking 3 hands, it can be done:
$8 \times 3 = 24 = 2 \times 12$ handshakes.)

**5. A snow plough.** A plough must clear every street of a neighbourhood once and return to the depot. If every
street corner has an even number of streets meeting there, an Euler circuit does it with no repeats. If not, some
streets must be driven twice, and the odd corners tell you exactly where the trouble is. Mail carriers and road
inspectors face the same problem.

## Try it

1. A graph has vertices with degrees 2, 4, 3, 3, 2. Does it have an Euler path? An Euler circuit? (Assume it is
   connected.)
2. How many edges does the graph in question 1 have?
3. Can a graph have degrees 3, 3, 3, 2, 2? Explain.
4. Draw a triangle with all three of its middle lines (joining the midpoints of the sides). Can you trace it without
   lifting your pencil? Where must you start?
5. The five-pointed star (pentagram) drawn with five straight strokes: count the degrees and decide whether it has an
   Euler circuit.
6. Königsberg is changed: the bridge between I and E is removed. Is a walk crossing each remaining bridge once now
   possible? If so, where must it start and end?
7. Explain in your own words why an Euler path cannot exist when four vertices have odd degree.
8. Every vertex of a connected graph has degree 4. What can you say for certain?

??? note "Answers"
    1. Two odd vertices (the two 3s), so an Euler **path** exists, from one 3 to the other; no Euler **circuit**.
    2. Sum of degrees $2 + 4 + 3 + 3 + 2 = 14 = 2 \times 7$, so **7** edges.
    3. **No.** The sum $3 + 3 + 3 + 2 + 2 = 13$ is odd, but it must be twice the number of edges. (Equivalently: three
       odd vertices, and the number of odd vertices must be even.)
    4. The picture has 6 vertices: the three corners have degree 2, and the three midpoints have degree 4 (two from
       the side they sit on, two from middle lines). All even, so there is an **Euler circuit**: you can start
       anywhere and you will finish where you started.
    5. The star drawn as five strokes has its 5 points as vertices (the inner crossings are just lines passing over
       each other, not joins). Each point has degree 2. All even: an Euler circuit, which is exactly how you draw it
       in one go.
    6. Degrees become I 4, N 3, S 3, E 2. Two odd vertices, N and S: **yes**, and the walk must start on one bank
       (N or S) and end on the other.
    7. A walk passes through each vertex in pairs (in, out). Only its first and last vertex can have an unpaired
       edge. Four odd vertices need four unpaired ends, but a walk has only two ends.
    8. Every degree is even and the graph is connected, so it **has an Euler circuit**: you can travel every edge
       exactly once and return to the start.

## Common mistake

**Counting vertices instead of degrees.** The test is about how many **odd-degree** vertices there are, not how many
vertices or edges. Count the edge-ends at every vertex, then count how many of those numbers are odd.

**Starting at the wrong place.** With exactly two odd vertices, the path exists, but only if you start at one of
them. Starting at an even vertex will strand you, and then people wrongly conclude it cannot be done.

## Where it leads

- Back: [Searching and sorting](04-searching-sorting.md) · Next: [Graph colouring and maps](06-graph-colouring.md),
  more graph theory with a famous computer proof.
- [Level 6 page](index.md) · [Logic topic page](../index.md)
- The handshake count connects to [handshakes in Counting](../../counting/level-2/05-handshakes-diagonals.md);
  shortcut puzzles about walks on grids are in [Counting level 5](../../counting/level-5/04-grid-paths.md).
- The "in-out pairs" argument is a proof by contradiction, a method studied properly in [level 7](../level-7/index.md).
