# 14. Hamiltonian cycles and hard problems

*Euler's question, whether you can walk along every edge of a graph exactly once and come home, has a one-line answer:
check that every degree is even ([Chapter 10](10-Graphs.md)). Change "every edge" to "every vertex" and everything
changes. Nobody knows a fast way to decide whether a graph has a round trip through every vertex, and most
mathematicians believe there is none. In this chapter you will meet Hamiltonian cycles, prove the classical sufficient
conditions of Dirac and Ore, set up the travelling salesman problem, and learn in plain words what "P versus NP" asks and
why it matters. Then you will see the practical answer to hard problems: algorithms that are guaranteed to be close to
the best, and try them on a small route for a rover on Mars.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a Hamiltonian cycle is, and simple reasons a graph cannot have one
    - Dirac's and Ore's theorems, with a full proof of Ore's
    - the travelling salesman problem, why brute force fails, and the Held-Karp dynamic programme
    - what P, NP, NP-complete and the P versus NP question mean, without hand-waving and without hype
    - how to prove a problem is hard by reduction
    - the minimum spanning tree method, which is never worse than twice the best tour for distances that obey the triangle
      inequality, and what is known beyond it

    **You need:** [Chapter 10](10-Graphs.md) (graphs, Euler circuits, bipartite graphs) and
    [Chapter 11](11-Trees.md) (spanning trees, Kruskal and Prim). [Chapter 13](13-Matchings-and-Flows.md) is useful for
    contrast: there, every problem had a fast algorithm.

    **Levels:** 14.1 and 14.6 are intermediate; 14.2, 14.3 and 14.5 are advanced; 14.4 is advanced, with an expert
    remark at the end.

## 14.1 Hamiltonian cycles

*Level: intermediate.*

In 1857 the Irish mathematician William Rowan Hamilton invented a puzzle he called the Icosian game. On a board shaped
like the graph of a dodecahedron (20 vertices, each joined to 3 others), the player had to find a round trip visiting
every vertex exactly once. It was sold as a game in 1859. It was not a commercial success, but the name stuck.
Thomas Kirkman had asked the same kind of question about polyhedra a few years earlier.

**Definition.** A **Hamiltonian cycle** in a graph is a cycle that passes through every vertex exactly once. A
**Hamiltonian path** passes through every vertex exactly once but need not return. A graph with a Hamiltonian cycle is
**Hamiltonian**.

Compare the two great round-trip problems:

| | Euler circuit | Hamiltonian cycle |
|---|---|---|
| visits every | edge, once | vertex, once |
| exact test | connected, all degrees even | none known that is fast |
| proof that it exists | an algorithm builds it in linear time | in general, show the cycle |
| proof that it does not | point to an odd vertex | in general, no short proof known |

The right-hand column is the subject of this chapter.

### Easy examples

- The complete graph $K_n$ ($n \ge 3$) is Hamiltonian: visit the vertices in any order. The number of different
  Hamiltonian cycles is $(n-1)!/2$: fix the starting vertex, order the other $n - 1$ in $(n-1)!$ ways, and divide by 2
  because each cycle can be traversed in two directions. For $K_5$ that is $24/2 = 12$.
- The cycle $C_n$ is its own Hamiltonian cycle; a path or a tree with at least 2 vertices has none, since a cycle would
  need an edge back.
- The cube graph (8 corners, 12 edges) is Hamiltonian: $000 \to 001 \to 011 \to 010 \to 110 \to 111 \to 101 \to 100 \to 000$,
  changing one digit at each step. Such a list is called a **Gray code**.
- The dodecahedron is Hamiltonian: that was Hamilton's game.

### Proving that no cycle exists

Without a fast test, we rely on special arguments. Two are used constantly.

**Bipartite graphs with unequal sides.** In a bipartite graph, a cycle alternates sides, so it uses equally many
vertices from each. A Hamiltonian cycle uses all of them. So a bipartite graph with sides of different sizes is not
Hamiltonian. For example $K_{2,3}$ is not.

A grid of $m$ rows and $n$ columns of points, joined to their neighbours up, down, left and right, is bipartite
(colour it like a chessboard). If $mn$ is odd, the two colours differ by one, so there is no Hamiltonian cycle. The
$3 \times 3$ grid is the smallest example. If $mn$ is even and $m, n \ge 2$, a cycle exists: go along the first row,
snake back and forth through the remaining rows in the other columns, and return up the first column (try it on a
$2 \times 4$ or a $4 \times 4$ grid).

**Too many pieces.** If you delete $k$ vertices from a cycle, it falls into at most $k$ pieces (paths). If $G$ has a
Hamiltonian cycle $H$, deleting $k$ vertices from $G$ leaves a graph that contains what is left of $H$, which has at
most $k$ pieces and touches every remaining vertex. So:

**Lemma.** If deleting some $k$ vertices from $G$ leaves more than $k$ connected components, then $G$ is not
Hamiltonian.

*Example.* Two triangles that share one vertex (a "bow tie"): deleting the shared vertex leaves 2 components, and
$2 > 1$. Not Hamiltonian. *Example.* In $K_{2,3}$, delete the two vertices of the small side: the three others become
isolated, 3 pieces from 2 deletions.

The lemma is not a complete test. The **Petersen graph** (10 vertices, 15 edges, every vertex of degree 3; picture a
pentagon, a five-pointed star inside it, and five spokes joining them) passes it, and yet it is not Hamiltonian. The
standard hand proof is a case analysis using the fact that the Petersen graph has no cycles shorter than 5. A computer
can check it in a moment by trying all orders of the vertices, which is fine for 10 vertices and hopeless for 100.

## 14.2 Dirac and Ore

*Level: advanced.*

Since we cannot decide Hamiltonicity quickly in general, we look for **sufficient conditions**: easy-to-check
properties that guarantee a Hamiltonian cycle. The idea behind the classical ones is that a graph with many edges at
every vertex should be Hamiltonian.

**Theorem (Ore, 1960).** Let $G$ be a graph with $n \ge 3$ vertices. If $\deg u + \deg v \ge n$ for every pair of
non-adjacent vertices $u$, $v$, then $G$ is Hamiltonian.

**Theorem (Dirac, 1952).** Let $G$ be a graph with $n \ge 3$ vertices. If every vertex has degree at least $n/2$, then
$G$ is Hamiltonian.

Dirac's theorem follows from Ore's at once: if every degree is at least $n/2$, any two vertices have degrees adding to at
least $n$. So we prove Ore's.

*Proof of Ore's theorem.* Suppose the theorem is false, and let $G$ be a counterexample: it satisfies the degree
condition with $n \ge 3$ vertices but has no Hamiltonian cycle. Add edges to $G$ one at a time, as long as the graph stays
non-Hamiltonian. Adding edges only increases degrees, so the condition keeps holding. Since $K_n$ is Hamiltonian, we stop
before reaching it, at a graph $G'$ that is non-Hamiltonian but becomes Hamiltonian when any missing edge is added.
$G'$ is still a counterexample, so we can work with it, and rename it $G$.

$G$ is not complete, so pick two non-adjacent vertices $u$ and $v$. Adding the edge $uv$ creates a Hamiltonian cycle,
and that cycle must use the new edge (otherwise $G$ already had it). Remove the edge $uv$ from the cycle: what is left is
a Hamiltonian path in $G$ from $u$ to $v$. Number its vertices

$$
u = v_1, \; v_2, \; v_3, \; \dots, \; v_n = v .
$$

Now look at the two sets of positions

$$
S = \{ i : 1 \le i \le n-1, \; v_1 \text{ is adjacent to } v_{i+1} \}, \qquad
T = \{ i : 1 \le i \le n-1, \; v_i \text{ is adjacent to } v_n \} .
$$

Every neighbour of $v_1$ is some $v_{i+1}$ with $1 \le i \le n - 1$, so $|S| = \deg u$. Every neighbour of $v_n$ is
some $v_i$ with $1 \le i \le n-1$, so $|T| = \deg v$. Both sets sit inside $\{1, \dots, n-1\}$, which has $n - 1$
elements, but $|S| + |T| = \deg u + \deg v \ge n$. By the pigeonhole principle, $S$ and $T$ share some index $i$. So
$v_1$ is adjacent to $v_{i+1}$ and $v_i$ is adjacent to $v_n$.

(The shared index cannot be $i = 1$, because $1 \in T$ would mean $v_1$ adjacent to $v_n$; nor $i = n - 1$, because
$n - 1 \in S$ would mean the same. So $2 \le i \le n - 2$.)

Now build a cycle:

$$
v_1 \to v_{i+1} \to v_{i+2} \to \cdots \to v_n \to v_i \to v_{i-1} \to \cdots \to v_2 \to v_1 .
$$

It jumps from $v_1$ forward to $v_{i+1}$, runs along the path to the end, jumps back to $v_i$, and runs backwards along
the path to the start. It uses every vertex once. That is a Hamiltonian cycle in $G$, a contradiction. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 200" role="img" aria-label="A Hamiltonian path v1 to v8 drawn in a row. An arc joins v1 to v5 above the row and another joins v4 to v8 below it. Dropping the path edge v4 v5 and using both arcs gives a cycle through all eight vertices">
<line x1="40" y1="110" x2="90" y2="110" stroke="#eea66f" stroke-width="3"/>
<line x1="90" y1="110" x2="140" y2="110" stroke="#eea66f" stroke-width="3"/>
<line x1="140" y1="110" x2="190" y2="110" stroke="#eea66f" stroke-width="3"/>
<line x1="190" y1="110" x2="240" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="240" y1="110" x2="290" y2="110" stroke="#eea66f" stroke-width="3"/>
<line x1="290" y1="110" x2="340" y2="110" stroke="#eea66f" stroke-width="3"/>
<line x1="340" y1="110" x2="390" y2="110" stroke="#eea66f" stroke-width="3"/>
<path d="M 40 110 Q 140.0 0 240 110" fill="none" stroke="#eea66f" stroke-width="3"/>
<path d="M 190 110 Q 290.0 220 390 110" fill="none" stroke="#eea66f" stroke-width="3"/>
<circle cx="40" cy="110" r="9" fill="#9cc9ea" stroke="currentColor"/>
<text x="40" y="136" text-anchor="middle" font-size="12" fill="currentColor">v1</text>
<circle cx="90" cy="110" r="9" fill="#9cc9ea" stroke="currentColor"/>
<text x="90" y="96" text-anchor="middle" font-size="12" fill="currentColor">v2</text>
<circle cx="140" cy="110" r="9" fill="#9cc9ea" stroke="currentColor"/>
<text x="140" y="96" text-anchor="middle" font-size="12" fill="currentColor">v3</text>
<circle cx="190" cy="110" r="9" fill="#9cc9ea" stroke="currentColor"/>
<text x="202" y="96" text-anchor="middle" font-size="12" fill="currentColor">v4</text>
<circle cx="240" cy="110" r="9" fill="#9cc9ea" stroke="currentColor"/>
<text x="252" y="96" text-anchor="middle" font-size="12" fill="currentColor">v5</text>
<circle cx="290" cy="110" r="9" fill="#9cc9ea" stroke="currentColor"/>
<text x="290" y="96" text-anchor="middle" font-size="12" fill="currentColor">v6</text>
<circle cx="340" cy="110" r="9" fill="#9cc9ea" stroke="currentColor"/>
<text x="340" y="96" text-anchor="middle" font-size="12" fill="currentColor">v7</text>
<circle cx="390" cy="110" r="9" fill="#9cc9ea" stroke="currentColor"/>
<text x="390" y="96" text-anchor="middle" font-size="12" fill="currentColor">v8</text>
<text x="130" y="38" text-anchor="middle" font-size="12" fill="currentColor">v1 ~ v(i+1)</text>
<text x="290" y="190" text-anchor="middle" font-size="12" fill="currentColor">v(i) ~ vn</text>
</svg>
</div>

The picture shows the trick with $n = 8$ and $i = 4$: the path edge $v_4 v_5$ (dashed) is dropped and the two crossing
chords are added.

**The bounds are sharp.** Dirac's $n/2$ cannot be lowered. Take $K_{k, k+1}$: it has $n = 2k + 1$ vertices, the smallest
degree is $k = (n-1)/2$, just below $n/2$, and it is bipartite with unequal sides, so it is not Hamiltonian. Another
example: two copies of $K_{k+1}$ sharing a single vertex. It has $n = 2k + 1$ vertices, minimum degree $k$, and deleting
the shared vertex leaves 2 pieces, so by the lemma of 14.1 it is not Hamiltonian.

**Closure.** The proof shows more than it states. If $\deg u + \deg v \ge n$ and $u$, $v$ are not adjacent, then $G$ is
Hamiltonian if and only if $G + uv$ is. Adrian Bondy and Václav Chvátal (1976) used this to define the **closure** of a
graph: keep adding such edges until none remain. A graph is Hamiltonian if and only if its closure is, and if the closure
is complete the graph is Hamiltonian. That strengthens both theorems above.

**Worked example.** Take the "house" graph: a square $a, b, c, d$ (edges $ab$, $bc$, $cd$, $da$) with a roof vertex $e$
joined to $a$ and $b$. Here $n = 5$. Degrees: $a = 3$, $b = 3$, $c = 2$, $d = 2$, $e = 2$. Dirac needs every degree at
least $2.5$: fails. Ore: non-adjacent pairs are $ac$ ($3 + 2 = 5$, fine), $bd$ (5, fine), $ce$ ($2 + 2 = 4 < 5$, fails).
So neither theorem applies. Yet the graph is Hamiltonian: $e \to a \to d \to c \to b \to e$. The conditions are
sufficient, not necessary.

### Tournaments: paths always exist

A **tournament** is what you get when every pair of $n$ players plays one game and there are no draws: a complete graph
with each edge given a direction, from winner to loser. A **Hamiltonian path** in a tournament is a ranking
$p_1, p_2, \dots, p_n$ in which each player beat the next one.

**Theorem (Rédei, 1934).** Every tournament has a Hamiltonian path.

*Proof.* Induction on $n$; one player is a path. Given $n + 1$ players, remove player $x$ and order the rest
$p_1 \to p_2 \to \cdots \to p_n$ by induction. If $x$ beat $p_1$, put $x$ first. If $p_n$ beat $x$, put $x$ last.
Otherwise $p_1$ beat $x$ and $x$ beat $p_n$: walk along the path and find the first $j$ with $x \to p_j$. Then
$j \ge 2$ and $p_{j-1}$ beat $x$ (by the choice of $j$), so insert $x$ between $p_{j-1}$ and $p_j$. $\square$

## 14.3 The travelling salesman problem

*Level: advanced.*

Give every edge of the complete graph $K_n$ a length (a distance, a cost, a travel time). The **travelling salesman
problem** (TSP) asks for the Hamiltonian cycle of smallest total length: the shortest round trip through $n$ cities.

Applications are everywhere: delivery routes, drilling holes in circuit boards (the drill head must visit every hole),
ordering telescope observations, and sequencing tasks where switching between tasks has a cost. The problem was studied
by mathematicians in Vienna and Princeton in the 1930s, and became famous after George Dantzig, Ray Fulkerson and Selmer
Johnson solved an instance with 49 cities (one in each of the 48 mainland US states plus Washington, D.C.) in 1954, using
linear programming with extra constraints added by hand.

### Brute force

There are $(n-1)!/2$ tours. Here is how fast that grows:

| cities $n$ | tours $(n-1)!/2$ |
|---|---|
| 5 | 12 |
| 10 | 181,440 |
| 15 | about $4.4 \times 10^{10}$ |
| 20 | about $6.1 \times 10^{16}$ |
| 30 | about $4.4 \times 10^{30}$ |

A computer that checks a billion tours a second needs about two years for 20 cities, and far longer than the age of the
universe (about $1.4 \times 10^{10}$ years, or $4 \times 10^{17}$ seconds) for 30. Faster computers barely help: adding one
city multiplies the work by about $n$.

### Dynamic programming: Held-Karp

You can do much better than trying every tour, though still not well. Michael Held and Richard Karp (and,
independently, Richard Bellman), in 1962, used **dynamic programming**: solve smaller problems first and store the
answers.

Number the cities $1, \dots, n$ and start at city 1. For a set $S$ of cities not containing 1, and a city $j \in S$, let

$$
D(S, j) = \text{length of the shortest path that starts at 1, visits every city of } S \text{ exactly once, and ends at } j .
$$

For a single city, $D(\{j\}, j) = d(1, j)$. For larger $S$, the path to $j$ arrived from some other city $k$ of $S$, and
the part before that is a shortest path through $S \setminus \{j\}$ ending at $k$:

$$
D(S, j) = \min_{k \in S, \, k \ne j} \big( D(S \setminus \{j\}, k) + d(k, j) \big) .
$$

The answer is $\min_j \big( D(\{2, \dots, n\}, j) + d(j, 1) \big)$. There are about $2^n \cdot n$ pairs $(S, j)$, and each
takes about $n$ steps, so the time is about $n^2 2^n$. For $n = 20$ that is about $4 \times 10^8$ steps, a second or so
on a laptop, instead of two years. For $n = 60$, it is again hopeless: the cost is still exponential. Over sixty years
later, no algorithm is known that solves every TSP instance in time $c^n$ with a constant $c < 2$.

### Try it in Python

```python
from itertools import combinations
from math import dist

def held_karp(pts):
    n = len(pts)
    d = [[dist(p, q) for q in pts] for p in pts]
    D = {(1 << j, j): d[0][j] for j in range(1, n)}          # sets stored as bit masks
    for size in range(2, n):
        for S in combinations(range(1, n), size):
            mask = sum(1 << j for j in S)
            for j in S:
                D[mask, j] = min(D[mask ^ (1 << j), k] + d[k][j] for k in S if k != j)
    full = (1 << n) - 2
    return min(D[full, j] + d[j][0] for j in range(1, n))

print(round(held_karp([(0, 0), (-4, 0), (-2, 4), (-1, 4), (6, 5), (2, 2)]), 2))   # 24.37
```

### What people actually do

Hard in the worst case does not mean hopeless in practice. The program Concorde, by David Applegate, Robert Bixby,
Václav Chvátal and William Cook, uses linear programming with cutting planes and branch-and-bound, and has solved, with
proof of optimality, instances with tens of thousands of cities; the largest, a circuit-board drilling instance with
85,900 points, was finished in 2006 after a large amount of computer time. Good heuristics (for example the
Lin-Kernighan method of 1973 and its descendants) find tours within a fraction of a percent of the best on large real
instances, but without a guarantee.

## 14.4 P versus NP in plain words

*Level: advanced.*

Every problem in [Chapter 13](13-Matchings-and-Flows.md), matching, stable matching, maximum flow, had an algorithm whose
running time grew like a power of the input size. The Hamiltonian cycle problem and the TSP do not have one that anyone
knows. Is that our ignorance, or a fact about the problems? That is the P versus NP question. To state it honestly we
need a few definitions.

**Decision problems.** We ask yes-or-no questions. "Does this graph have a Hamiltonian cycle?" "Does this map with these
distances have a tour of length at most 1000?" (Asking for the best tour is not much harder: with a yes-or-no oracle you
can find the optimal length by binary search and then the tour itself one edge at a time.)

**Running time.** The **size** of an input is the number of symbols it takes to write it down, say $N$. An algorithm
runs in **polynomial time** if for some fixed $k$ it always finishes within about $N^k$ steps. Polynomial is the
mathematical stand-in for "fast": $N^3$ grows reasonably, $2^N$ does not. (In practice $N^{100}$ would be useless, and
some exponential algorithms work fine on real data, but the line between polynomial and exponential has turned out to be
the right one to study.)

**P** is the class of decision problems that can be *solved* in polynomial time. Examples: is this graph connected? does
it have an Euler circuit? does this bipartite graph have a perfect matching? is this number prime (Agrawal, Kayal and
Saxena, 2002)?

**NP** is the class of decision problems where every "yes" answer has a **certificate** that can be *checked* in
polynomial time. For the Hamiltonian cycle problem, the certificate is the cycle itself: given a list of the vertices,
anyone can check in a moment that each appears once and that consecutive vertices are adjacent. For the TSP question
"is there a tour of length at most $L$?", the certificate is such a tour. Finding the certificate may be hard; checking
it is easy. (The letters stand for "nondeterministic polynomial time", from the original definition with machines that
can guess; the certificate definition is equivalent and much clearer.)

Every problem in P is in NP: if you can solve it fast, you can check a "yes" by solving it again, ignoring the
certificate. The question is whether the converse holds.

**The P versus NP question.** Is P equal to NP? In words: if a solution can always be checked quickly, can it always be
found quickly?

Almost all experts believe the answer is no, but nobody has proved it. It is one of the seven Millennium Prize Problems
announced by the Clay Mathematics Institute in 2000, with a prize of one million dollars.

### Reductions and NP-completeness

How can one compare the difficulty of problems without solving them? By **reduction**. Problem A **reduces** to problem
B if there is a polynomial-time way to turn any instance of A into an instance of B with the same yes-or-no answer. Then
a fast algorithm for B gives a fast algorithm for A: B is at least as hard as A.

**Example: Hamiltonian cycle reduces to TSP.** Given a graph $G$ on $n$ vertices, build a TSP instance on the same
vertices: distance 1 between adjacent vertices, distance 2 between non-adjacent ones. Ask: is there a tour of length at
most $n$?

- If $G$ has a Hamiltonian cycle, that cycle is a tour using $n$ edges of length 1: total $n$. Yes.
- If there is a tour of length at most $n$, it has $n$ edges each of length at least 1, so every edge has length 1, so
  every edge is an edge of $G$, and the tour is a Hamiltonian cycle of $G$. Yes.

The answers agree, and building the instance takes about $n^2$ steps. So the TSP is at least as hard as the Hamiltonian
cycle problem.

A problem is **NP-complete** if it is in NP and every problem in NP reduces to it. An NP-complete problem is a hardest
problem in NP: a polynomial-time algorithm for any one of them would give one for all of NP, and so prove P = NP.

It is not obvious that NP-complete problems exist at all. Stephen Cook proved in 1971 that one does: **satisfiability**
(SAT), the question whether a formula in logic, built from variables with "and", "or" and "not", can be made true by some
choice of true and false values. Leonid Levin found the same idea independently in the Soviet Union, published in 1973.
The proof encodes the step-by-step run of any checking algorithm as a large logical formula. In 1972 Richard Karp then
showed, by chains of reductions, that 21 well-known problems are NP-complete, among them the Hamiltonian cycle problem
(for directed and for undirected graphs), graph colouring, clique and set cover. Thousands more have been added since.
The TSP decision problem is NP-complete too: it is in NP, and Hamiltonian cycle reduces to it, as above.

So the contrast in this book is precise. Matching, flow, Euler circuits, shortest paths and spanning trees are in P.
Hamiltonian cycle, TSP, 3-colouring and largest clique are NP-complete. If P is not equal to NP, none of the second
group has a polynomial-time algorithm.

### What it does and does not mean

Some honest remarks, since this topic attracts exaggeration.

- **NP-complete is a worst-case statement.** It says that no fast algorithm is known that works on *every* instance.
  Many real instances are easy, and SAT solvers routinely handle formulas with millions of variables from industry.
- **It is not proved that these problems are hard.** It is proved that they are all equally hard, up to polynomial
  factors. The belief that P is not NP rests on decades of failed attempts at fast algorithms, on the strange
  consequences P = NP would have (for example, finding a proof of a theorem would be roughly as easy as checking one),
  and on intuition.
- **Proving P is not NP looks very hard.** There are theorems showing that whole families of proof methods cannot work:
  relativization (Baker, Gill and Solovay, 1975), natural proofs (Razborov and Rudich, 1994) and algebrization (Aaronson
  and Wigderson, 2008).
- **Cryptography needs more than P not equal to NP.** A cipher must be hard to break on typical instances, not only in
  the worst case. See the [cryptography book](https://cryptography.akadian.ca/book/) for how real systems choose their
  hard problems.

*Expert remark.* Between P and NP-complete there may be problems that are neither; Richard Ladner proved in 1975 that if
P is not NP, such problems must exist. Graph isomorphism ([Chapter 10](10-Graphs.md)) is the most famous candidate; in
2015 László Babai announced a quasi-polynomial algorithm for it, time $\exp\big((\log n)^{c}\big)$, far faster than
exponential but not known to be polynomial. Factoring integers is another candidate.

## 14.5 Approximation

*Level: advanced.*

If the TSP has no fast exact algorithm, we can ask for a fast algorithm that is **guaranteed** to be close. An
algorithm is a **$\rho$-approximation** for a minimisation problem if it runs in polynomial time and always returns an
answer at most $\rho$ times the optimum.

### The general TSP cannot be approximated

Without some assumption on the distances, no guarantee at all is possible.

**Theorem.** If P is not equal to NP, then for no constant $\rho \ge 1$ is there a $\rho$-approximation for the general
TSP.

*Proof.* Suppose there were one. Given a graph $G$ on $n$ vertices, set distance 1 on edges of $G$ and distance
$\rho n + 1$ on non-edges. If $G$ is Hamiltonian, the optimum is $n$, so the algorithm returns a tour of length at most
$\rho n$; that tour cannot use a non-edge (one non-edge alone costs $\rho n + 1$), so it is a Hamiltonian cycle. If $G$
is not Hamiltonian, every tour uses a non-edge and has length more than $\rho n$. So by looking at the length returned we
decide Hamiltonicity in polynomial time, which would give P = NP. $\square$

### Metric TSP and the tree method

Real distances usually obey the **triangle inequality**: $d(x, z) \le d(x, y) + d(y, z)$; going straight is never
longer than going via a third point. A TSP instance with this property is called **metric**. For metric instances there
is a simple guarantee.

**The tree method (double tree).**

1. Find a minimum spanning tree $T$ of the cities ([Chapter 11](11-Trees.md): Kruskal or Prim).
2. Walk around the tree, starting at any city, going down every branch and back (a depth-first walk). This walk uses
   every tree edge twice.
3. Turn the walk into a tour by visiting the cities in the order they are *first* reached, skipping repeats (this
   order is called the **preorder**), and return to the start.

**Theorem.** For metric instances, the tree method returns a tour of length at most $2 \cdot \mathrm{OPT}$, where
$\mathrm{OPT}$ is the length of the shortest tour.

*Proof.* Two inequalities.

*The tree is shorter than the best tour.* Take a shortest tour and delete one edge. What is left is a path through all
cities, which is a spanning tree. Its length is at most $\mathrm{OPT}$ (we removed an edge of nonnegative length), and
the *minimum* spanning tree is no longer than any spanning tree. So $w(T) \le \mathrm{OPT}$.

*The tour is shorter than the double walk.* The walk in step 2 has length exactly $2 w(T)$. Skipping repeated cities
replaces a stretch of the walk $x \to \cdots \to z$ by the direct step $x \to z$, which by the triangle inequality (used
several times) is no longer. So the tour has length at most $2w(T) \le 2 \, \mathrm{OPT}$. $\square$

The proof contains a useful byproduct: $w(T)$ is a **lower bound** on the optimum that can be computed fast. Any
heuristic tour can be compared with it to see how far from optimal it could be, at worst.

### Doing better

Nicos Christofides (1976), and independently Anatoliy Serdyukov (1978), improved the factor 2 to $3/2$. The double walk
is wasteful: it doubles every edge just to make every degree even, so that an Euler circuit exists
([Chapter 10](10-Graphs.md)). Instead, take the vertices of odd degree in $T$ (there is an even number of them, by the
handshake lemma), add a minimum-weight perfect matching on them ([Chapter 13](13-Matchings-and-Flows.md)), take an Euler
circuit of the result, and shortcut. The matching weighs at most $\mathrm{OPT}/2$, which gives the bound $3/2$.

For over forty years nobody could beat $3/2$ for general metric instances. In 2020 Anna Karlin, Nathan Klein and Shayan
Oveis Gharan announced a randomised algorithm with factor $3/2 - \varepsilon$ for a tiny fixed $\varepsilon$ (their
paper gives $\varepsilon$ about $10^{-36}$). The improvement is minute; the importance was that the barrier fell. On the
other side, it is known that, unless P = NP, no polynomial algorithm can guarantee a factor below $123/122$ (Karpinski,
Lampis and Schmied, 2015). The truth lies somewhere between.

When the cities are points in the plane with ordinary distance, much more is possible: Sanjeev Arora and Joseph Mitchell
(independently, around 1996-1998) found, for every fixed $\varepsilon > 0$, a polynomial-time $(1 + \varepsilon)$-
approximation. The running time grows quickly as $\varepsilon$ shrinks, but the factor can be made as close to 1 as
desired.

## 14.6 A rover's route on Mars

*Level: intermediate.*

Here is a small example to try all of this on. It is a made-up exercise, not a real mission plan. Picture a rover
next to its lander, L, with five sites, A to E, that a science team wants it to visit before coming back to the lander
to relay its data. Put the lander at the origin and measure in units of 100 metres:

$$
L = (0,0), \quad A = (-4, 0), \quad B = (-2, 4), \quad C = (-1, 4), \quad D = (6, 5), \quad E = (2, 2) .
$$

Straight-line distances (rounded to two decimals):

| | L | A | B | C | D | E |
|---|---|---|---|---|---|---|
| L | 0 | 4.00 | 4.47 | 4.12 | 7.81 | 2.83 |
| A | 4.00 | 0 | 4.47 | 5.00 | 11.18 | 6.32 |
| B | 4.47 | 4.47 | 0 | 1.00 | 8.06 | 4.47 |
| C | 4.12 | 5.00 | 1.00 | 0 | 7.07 | 3.61 |
| D | 7.81 | 11.18 | 8.06 | 7.07 | 0 | 5.00 |
| E | 2.83 | 6.32 | 4.47 | 3.61 | 5.00 | 0 |

Straight-line distances obey the triangle inequality, so this is a metric instance.

**The exact answer.** There are $5!/2 = 60$ different tours, few enough to try them all (or to run the Held-Karp code
of 14.3). The shortest is

$$
L \to A \to B \to C \to D \to E \to L, \qquad 4.00 + 4.47 + 1.00 + 7.07 + 5.00 + 2.83 = 24.37 ,
$$

about 2.4 km. **Check:** the next best tour has length about 25.89, so the optimum is clear.

**Nearest neighbour.** A natural greedy rule: from wherever you are, drive to the closest site not yet visited. From L
the closest is E (2.83), then C (3.61), then B (1.00), then A (4.47). Only D is left, and it is on the far side: A to D is
11.18, and D back to L is 7.81. Total

$$
2.83 + 3.61 + 1.00 + 4.47 + 11.18 + 7.81 = 30.90 ,
$$

about 27 percent longer than the best. Greedy did well early and paid for it at the end, a typical failure.

**The tree method.** Kruskal's algorithm takes edges in order of length and skips any that would close a cycle: BC
(1.00), LE (2.83), CE (3.61), LA (4.00); LC (4.12) would close the cycle L, E, C, so skip; the three edges of length 4.47
(AB, BE, LB) all close cycles, so skip; AC (5.00) closes a cycle, skip; DE (5.00) connects D. Five edges, the spanning
tree:

$$
LE, \; EC, \; CB, \; LA, \; ED, \qquad w(T) = 2.83 + 3.61 + 1.00 + 4.00 + 5.00 = 16.44 .
$$

(The exact sum is 16.43; the rounded parts add to 16.44.) Since $w(T) \le \mathrm{OPT}$, we know at once that no tour is
shorter than about 16.4, without trying any.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 560 200" role="img" aria-label="Six points: the lander L and sites A to E. Left: the shortest round trip L, A, B, C, D, E, L, length about 24.4. Right: the minimum spanning tree with edges LE, EC, CB, LA and ED, total length about 16.4">
<line x1="120" y1="150" x2="40" y2="150" stroke="#eea66f" stroke-width="3"/>
<line x1="40" y1="150" x2="80" y2="70" stroke="#eea66f" stroke-width="3"/>
<line x1="80" y1="70" x2="100" y2="70" stroke="#eea66f" stroke-width="3"/>
<line x1="100" y1="70" x2="240" y2="50" stroke="#eea66f" stroke-width="3"/>
<line x1="240" y1="50" x2="160" y2="110" stroke="#eea66f" stroke-width="3"/>
<line x1="160" y1="110" x2="120" y2="150" stroke="#eea66f" stroke-width="3"/>
<rect x="113" y="143" width="14" height="14" fill="#7ccf9a" stroke="currentColor"/>
<text x="120" y="170" text-anchor="middle" font-size="13" fill="currentColor">L</text>
<circle cx="40" cy="150" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="40" y="170" text-anchor="middle" font-size="13" fill="currentColor">A</text>
<circle cx="80" cy="70" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="80" y="59" text-anchor="middle" font-size="13" fill="currentColor">B</text>
<circle cx="100" cy="70" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="100" y="59" text-anchor="middle" font-size="13" fill="currentColor">C</text>
<circle cx="240" cy="50" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="240" y="39" text-anchor="middle" font-size="13" fill="currentColor">D</text>
<circle cx="160" cy="110" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="160" y="99" text-anchor="middle" font-size="13" fill="currentColor">E</text>
<text x="140" y="192" text-anchor="middle" font-size="13" fill="currentColor">shortest tour, 24.37</text>
<line x1="400" y1="150" x2="440" y2="110" stroke="#9cc9ea" stroke-width="3"/>
<line x1="440" y1="110" x2="380" y2="70" stroke="#9cc9ea" stroke-width="3"/>
<line x1="380" y1="70" x2="360" y2="70" stroke="#9cc9ea" stroke-width="3"/>
<line x1="400" y1="150" x2="320" y2="150" stroke="#9cc9ea" stroke-width="3"/>
<line x1="440" y1="110" x2="520" y2="50" stroke="#9cc9ea" stroke-width="3"/>
<rect x="393" y="143" width="14" height="14" fill="#7ccf9a" stroke="currentColor"/>
<text x="400" y="170" text-anchor="middle" font-size="13" fill="currentColor">L</text>
<circle cx="320" cy="150" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="320" y="170" text-anchor="middle" font-size="13" fill="currentColor">A</text>
<circle cx="360" cy="70" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="360" y="59" text-anchor="middle" font-size="13" fill="currentColor">B</text>
<circle cx="380" cy="70" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="380" y="59" text-anchor="middle" font-size="13" fill="currentColor">C</text>
<circle cx="520" cy="50" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="520" y="39" text-anchor="middle" font-size="13" fill="currentColor">D</text>
<circle cx="440" cy="110" r="6" fill="#9cc9ea" stroke="currentColor"/>
<text x="440" y="99" text-anchor="middle" font-size="13" fill="currentColor">E</text>
<text x="420" y="192" text-anchor="middle" font-size="13" fill="currentColor">minimum spanning tree, 16.43</text>
</svg>
</div>

Now walk the tree from L. Visit the branch to A first, then the branch to E, and under E visit C (then B) before D. The
first-visit order is L, A, E, C, B, D, giving the tour

$$
L \to A \to E \to C \to B \to D \to L, \qquad 4.00 + 6.32 + 3.61 + 1.00 + 8.06 + 7.81 = 30.80 .
$$

Under E, if we visit D before C, the order is L, A, E, D, C, B and the tour is
$4.00 + 6.32 + 5.00 + 7.07 + 1.00 + 4.47 = 27.86$. Both are within the guarantee $2 \cdot 16.43 = 32.87$, and the
second is only about 14 percent above optimal. The guarantee is a worst case; the result often lands well inside it.

**What the example teaches.**

- The exact answer was easy here because 60 tours is a small number. With 25 stops in all there would be about
  $3 \times 10^{23}$ tours, and Held-Karp would need about $2 \times 10^{10}$ steps: still possible, but the growth
  is plain.
- The spanning tree gave, for almost no effort, both a tour and a proof that the tour is at most about twice the
  optimum (here the bound says the best is at least 16.43, and we found 24.37).
- Real planning for a Mars rover is far richer than this model. Driving distance is not straight-line distance:
  slopes, rocks and sand change both the route and the energy it costs. There are limits on how far the rover can
  drive in a day, windows when an orbiter overhead can relay data, and science priorities that change as results
  arrive. Route planning on rough ground is a shortest-path problem over a map of costs, solved before the order
  of visits is chosen. The TSP is a clean core inside a messy problem, which is often how mathematics is used.

## Check yourself

??? question "1. How many Hamiltonian cycles does $K_6$ have? And $K_{3,3}$?"

    $K_6$: $(6-1)!/2 = 120/2 = 60$. $K_{3,3}$: a Hamiltonian cycle alternates sides, $a_1 b_1 a_2 b_2 a_3 b_3$. Fix
    $a_1$ first; order the other two left vertices in $2!$ ways and the three right vertices in $3!$ ways, giving
    $2 \cdot 6 = 12$ sequences, and each cycle is counted twice (two directions): 6 cycles. In general $K_{n,n}$ has
    $n!\,(n-1)!/2$ Hamiltonian cycles.

??? question "2. Show that the $3 \times 3$ grid graph has no Hamiltonian cycle, but the $3 \times 4$ grid does."

    Colour the 9 points like a chessboard: 5 of one colour, 4 of the other. The graph is bipartite, and a cycle
    alternates colours, so it would need equal numbers. For the $3 \times 4$ grid, write $(r, c)$ for row $r$ and column
    $c$ and follow this cycle: $(1,1), (1,2), (1,3), (1,4), (2,4), (3,4), (3,3), (2,3), (2,2), (3,2), (3,1), (2,1)$, and
    back to $(1,1)$. It visits all 12 points once, and each step moves to a neighbour.

??? question "3. Prove that the cube graph $Q_n$ (vertices are strings of $n$ bits, adjacent when they differ in one bit) is Hamiltonian for $n \ge 2$."

    Induction. $Q_2$ is a square: $00, 01, 11, 10$. Suppose $g_1, \dots, g_m$ (with $m = 2^n$) is a Hamiltonian cycle
    of $Q_n$, a Gray code. Then $0g_1, 0g_2, \dots, 0g_m, 1g_m, 1g_{m-1}, \dots, 1g_1$ is a Hamiltonian cycle of
    $Q_{n+1}$: consecutive entries differ in one bit inside each half, the jump $0g_m \to 1g_m$ changes only the first
    bit, and so does the return $1g_1 \to 0g_1$. This is the reflected Gray code.

??? question "4. A graph has 10 vertices and minimum degree 5. Must it be Hamiltonian? What about 11 vertices and minimum degree 5?"

    With $n = 10$, $5 \ge n/2$, so Dirac's theorem says yes. With $n = 11$, $n/2 = 5.5$ and Dirac does not apply; indeed
    $K_{5,6}$ has 11 vertices and minimum degree 5, and it is not Hamiltonian (bipartite with unequal sides).

??? question "5. Show that in a graph satisfying Dirac's condition, any two non-adjacent vertices have a common neighbour."

    Let $u$, $v$ be non-adjacent. Their neighbours lie among the other $n - 2$ vertices, and $\deg u + \deg v \ge n$.
    Two subsets of an $(n-2)$-element set with sizes adding to at least $n > n - 2$ must overlap, so they share at least
    2 vertices. In particular the graph is connected with diameter at most 2.

??? question "6. Show that the bow tie graph (two triangles sharing one vertex) satisfies neither Ore's condition nor the conclusion, and find a non-adjacent pair with degree sum below $n$."

    $n = 5$; the shared vertex has degree 4 and the others degree 2. Two vertices from different triangles (neither the
    centre) are non-adjacent with degree sum $2 + 2 = 4 < 5$, so Ore's condition fails. The graph is not Hamiltonian:
    deleting the centre leaves 2 components.

??? question "7. In the Held-Karp algorithm for $n$ cities, exactly how many values $D(S, j)$ are computed?"

    $S$ is a nonempty subset of the $n - 1$ cities other than city 1, and $j \in S$. Summing over sizes,
    $\sum_{s=1}^{n-1} \binom{n-1}{s} s = (n-1) 2^{n-2}$ (choose $j$ first, then any subset of the other $n - 2$). For
    $n = 6$: $5 \cdot 16 = 80$.

??? question "8. Using the TSP reduction of 14.4, explain why a polynomial-time algorithm for the TSP decision problem would decide whether a graph is Hamiltonian in polynomial time."

    Given a graph $G$ with $n$ vertices, build the instance with distance 1 for edges and 2 for non-edges (about $n^2$
    steps) and ask whether a tour of length at most $n$ exists. 14.4 showed the answer is yes exactly when $G$ is
    Hamiltonian. Building plus the assumed fast algorithm is polynomial overall, because a polynomial applied to an input
    of polynomial size is still polynomial.

??? question "9. For the rover example, a planner proposes the tour L, E, D, C, B, A, L. How long is it, and what can you say about it without knowing the optimum?"

    $2.83 + 5.00 + 7.07 + 1.00 + 4.47 + 4.00 = 24.37$. It is the optimal tour in the other direction. Without knowing
    that, the spanning tree gives $\mathrm{OPT} \ge 16.43$, so the tour is at most $24.37 / 16.43 \approx 1.48$ times the
    optimum. (In fact it is optimal.)

??? question "10. Why does the tree method need the triangle inequality? Give a 4-city example where shortcutting makes things worse without it."

    Shortcutting replaces a detour $x \to y \to z$ by $x \to z$, which is shorter only if $d(x,z) \le d(x,y) + d(y,z)$.
    Example: cities 1, 2, 3, 4 with every distance 1 except $d(1, 3) = 100$. The tree $\{12, 23, 24\}$ (weight 3), walked
    from 1, can visit 3 before 4, giving the tour $1 \to 2 \to 3 \to 4 \to 1$ of length 4, fine; but if it visits 4
    before 3, the preorder 1, 2, 4, 3 gives $1 \to 2 \to 4 \to 3 \to 1$ of length $1 + 1 + 1 + 100 = 103$, far more than twice the
    optimum 4. With the triangle inequality, $d(1,3) \le 2$ would be forced.

??? question "11. Sketch a proof that every strongly connected tournament with at least 3 players has a Hamiltonian cycle (strongly connected: every player can reach every other along directed edges)."

    This is Camion's theorem (1959). A strongly connected tournament has a cycle (follow an edge $u \to v$ and a path
    back). Take a longest cycle $C$ and suppose some player is off it. If an outside player $x$ beats someone on $C$ and
    loses to someone on $C$, then going around $C$ there are consecutive players with $c_i \to x \to c_{i+1}$, and
    inserting $x$ gives a longer cycle. Otherwise every outside player is in $W$ (beats all of $C$) or in $L$ (loses to
    all of $C$). Players of $C$ can reach $L$ only, so to get back to $C$ there must be an edge leaving $L$; it cannot go
    to $C$, so it goes $l \to w$ with $l \in L$, $w \in W$. Then replace an edge $c_i \to c_{i+1}$ by
    $c_i \to l \to w \to c_{i+1}$, a cycle two longer. Both cases contradict the choice of $C$, so $C$ contains
    everyone.

??? question "12. A $\rho$-approximation is run on a metric instance and returns a tour of length 300, and a minimum spanning tree has weight 160. What is the best you can say about $\mathrm{OPT}$?"

    $160 \le \mathrm{OPT} \le 300$: the tree is a lower bound and any tour is an upper bound. If the algorithm is the
    tree method, its guarantee only says $300 \le 2 \, \mathrm{OPT}$, i.e. $\mathrm{OPT} \ge 150$, which is weaker than
    the tree bound already used. So the tour is at most $300/160 \approx 1.88$ times optimal.

## What you learned

- A Hamiltonian cycle visits every vertex once. Unlike Euler circuits, no fast test is known; bipartite counting and
  "too many pieces after deleting $k$ vertices" prove that some graphs have none.
- Ore's theorem (degree sums at least $n$ for non-adjacent pairs) and Dirac's theorem (all degrees at least $n/2$)
  guarantee a Hamiltonian cycle; the proof turns a Hamiltonian path into a cycle using the pigeonhole principle.
- The TSP asks for the shortest tour. Brute force grows like $(n-1)!$; Held-Karp dynamic programming like $n^2 2^n$.
- P is "solvable fast", NP is "checkable fast". NP-complete problems are the hardest in NP; Hamiltonian cycle and TSP are
  among them. Whether P = NP is open.
- The general TSP cannot be approximated within any constant factor unless P = NP, but metric TSP can: the tree method
  is within a factor 2, Christofides within 3/2, and since 2020 slightly better.
- A minimum spanning tree gives a fast lower bound on any tour, which lets you measure how good a route is.

**Next:** [Chapter 15](15-Counting-with-Symmetry.md), back to counting: how many objects are really different when
rotations and reflections are allowed.

## Further reading

- O. Ore, "Note on Hamilton circuits", *American Mathematical Monthly* 67, 1960.
- G. A. Dirac, "Some theorems on abstract graphs", *Proceedings of the London Mathematical Society* 2, 1952.
- J. A. Bondy and V. Chvátal, "A method in graph theory", *Discrete Mathematics* 15, 1976.
- R. M. Karp, "Reducibility among combinatorial problems", in *Complexity of Computer Computations*, 1972.
- S. A. Cook, "The complexity of theorem-proving procedures", *Proceedings of the 3rd ACM Symposium on Theory of
  Computing*, 1971.
- M. R. Garey and D. S. Johnson, *Computers and Intractability: A Guide to the Theory of NP-Completeness*, 1979.
- W. J. Cook, *In Pursuit of the Traveling Salesman: Mathematics at the Limits of Computation*, 2012.
- D. L. Applegate, R. E. Bixby, V. Chvátal and W. J. Cook, *The Traveling Salesman Problem: A Computational Study*, 2006.
- N. Christofides, "Worst-case analysis of a new heuristic for the travelling salesman problem", Report 388, Carnegie
  Mellon University, 1976.
- A. R. Karlin, N. Klein and S. Oveis Gharan, "A (slightly) improved approximation algorithm for metric TSP",
  *Proceedings of STOC*, 2021.
- L. Fortnow, *The Golden Ticket: P, NP, and the Search for the Impossible*, 2013. A popular account.
- On this site: [Efficiency analysis](../../uoft/CSC148H1/unit09.md) (running times, big-O),
  [Recursion](../../uoft/CSC148H1/unit05.md), [Trees](11-Trees.md), [Matchings and flows](13-Matchings-and-Flows.md),
  the [Combinatorics book](index.md), and the [cryptography book](https://cryptography.akadian.ca/book/) for hard
  problems used in practice.
