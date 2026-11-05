# 13. Matchings and flows

*Four people apply for four jobs, and each is qualified for only some of them. Can everyone get a job? Hundreds of
hospitals and tens of thousands of new doctors rank each other. Can they be paired so that nobody wants to break the
deal? Water, data or trucks move through a network of pipes with limited capacity. How much can get through? These look
like three different questions. In this chapter you will see that they are one question in three costumes. You will
prove Hall's marriage theorem, König's theorem, the stability of the Gale-Shapley algorithm, the max-flow min-cut theorem
and Menger's theorem, and see how each one says the same thing: when something cannot be done, there is a small,
checkable reason why.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a matching is, the difference between maximal and maximum, and Berge's augmenting path theorem
    - Hall's marriage theorem, with a full proof, and how it settles problems about cards, Latin squares and schedules
    - König's theorem: in a bipartite graph, the largest matching equals the smallest vertex cover
    - the Gale-Shapley algorithm, why it always ends in a stable matching, and how it is used to place new doctors
    - networks, flows and cuts, the max-flow min-cut theorem, and the augmenting path method
    - Menger's theorem on disjoint paths, proved from max-flow min-cut

    **You need:** [Chapter 10](10-Graphs.md) (graphs, paths, bipartite graphs) and [Chapter 11](11-Trees.md) for the
    language of trees. The pigeonhole style of argument from [Chapter 4](04-The-Pigeonhole-Principle.md) helps.

    **Levels:** 13.1 and 13.4 are intermediate; 13.2, 13.3 and 13.5 are advanced (full proofs); 13.6 is advanced to
    expert.

## 13.1 Matchings

*Level: intermediate.*

Start with a small puzzle. Four people, A, B, C and D, are looking for work, and four jobs, numbered 1 to 4, are open.
A can do jobs 1 or 2. B can only do job 1. C can do 2 or 3. D can do 3 or 4. Can every person get a job they can do,
with no job given to two people?

Draw it as a graph. Put the people on the left and the jobs on the right, and join a person to a job when the person can
do it. A graph whose vertices split into two sides, with every edge going from one side to the other, is called
**bipartite** ([Chapter 10](10-Graphs.md)). Giving out jobs means choosing some edges, no two of which share an
endpoint.

**Definition.** A **matching** in a graph is a set of edges with no vertex in common. A vertex touched by an edge of the
matching is **covered** (or **saturated**); the others are **free**. A matching is **perfect** if it covers every vertex.

Here is the natural first try: go down the list and give each person the first free job they can do. A takes 1. B wants
only 1, which is gone, so B gets nothing. C takes 2. D takes 3. That is three edges, $\{A1, C2, D3\}$, and no edge can
be added: every remaining edge touches a vertex already used. Yet a better answer exists: B1, A2, C3, D4 gives everyone
a job.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 245" role="img" aria-label="Two copies of a bipartite graph with people A, B, C, D on the left and jobs 1 to 4 on the right. Left: the maximal matching A1, C2, D3, which cannot be extended. Right: the perfect matching B1, A2, C3, D4">
<line x1="50" y1="35" x2="170" y2="35" stroke="#eea66f" stroke-width="4"/>
<line x1="50" y1="35" x2="170" y2="90" stroke="currentColor" stroke-width="1.2"/>
<line x1="50" y1="90" x2="170" y2="35" stroke="currentColor" stroke-width="1.2"/>
<line x1="50" y1="145" x2="170" y2="90" stroke="#eea66f" stroke-width="4"/>
<line x1="50" y1="145" x2="170" y2="145" stroke="currentColor" stroke-width="1.2"/>
<line x1="50" y1="200" x2="170" y2="145" stroke="#eea66f" stroke-width="4"/>
<line x1="50" y1="200" x2="170" y2="200" stroke="currentColor" stroke-width="1.2"/>
<circle cx="50" cy="35" r="13" fill="#9cc9ea" stroke="currentColor"/><text x="50" y="40" text-anchor="middle" font-size="13" fill="currentColor">A</text>
<circle cx="50" cy="90" r="13" fill="#9cc9ea" stroke="currentColor"/><text x="50" y="95" text-anchor="middle" font-size="13" fill="currentColor">B</text>
<circle cx="50" cy="145" r="13" fill="#9cc9ea" stroke="currentColor"/><text x="50" y="150" text-anchor="middle" font-size="13" fill="currentColor">C</text>
<circle cx="50" cy="200" r="13" fill="#9cc9ea" stroke="currentColor"/><text x="50" y="205" text-anchor="middle" font-size="13" fill="currentColor">D</text>
<circle cx="170" cy="35" r="13" fill="#7ccf9a" stroke="currentColor"/><text x="170" y="40" text-anchor="middle" font-size="13" fill="currentColor">1</text>
<circle cx="170" cy="90" r="13" fill="#7ccf9a" stroke="currentColor"/><text x="170" y="95" text-anchor="middle" font-size="13" fill="currentColor">2</text>
<circle cx="170" cy="145" r="13" fill="#7ccf9a" stroke="currentColor"/><text x="170" y="150" text-anchor="middle" font-size="13" fill="currentColor">3</text>
<circle cx="170" cy="200" r="13" fill="#7ccf9a" stroke="currentColor"/><text x="170" y="205" text-anchor="middle" font-size="13" fill="currentColor">4</text>
<text x="110" y="235" text-anchor="middle" font-size="13" fill="currentColor">maximal, size 3</text>
<line x1="270" y1="35" x2="390" y2="35" stroke="currentColor" stroke-width="1.2"/>
<line x1="270" y1="35" x2="390" y2="90" stroke="#eea66f" stroke-width="4"/>
<line x1="270" y1="90" x2="390" y2="35" stroke="#eea66f" stroke-width="4"/>
<line x1="270" y1="145" x2="390" y2="90" stroke="currentColor" stroke-width="1.2"/>
<line x1="270" y1="145" x2="390" y2="145" stroke="#eea66f" stroke-width="4"/>
<line x1="270" y1="200" x2="390" y2="145" stroke="currentColor" stroke-width="1.2"/>
<line x1="270" y1="200" x2="390" y2="200" stroke="#eea66f" stroke-width="4"/>
<circle cx="270" cy="35" r="13" fill="#9cc9ea" stroke="currentColor"/><text x="270" y="40" text-anchor="middle" font-size="13" fill="currentColor">A</text>
<circle cx="270" cy="90" r="13" fill="#9cc9ea" stroke="currentColor"/><text x="270" y="95" text-anchor="middle" font-size="13" fill="currentColor">B</text>
<circle cx="270" cy="145" r="13" fill="#9cc9ea" stroke="currentColor"/><text x="270" y="150" text-anchor="middle" font-size="13" fill="currentColor">C</text>
<circle cx="270" cy="200" r="13" fill="#9cc9ea" stroke="currentColor"/><text x="270" y="205" text-anchor="middle" font-size="13" fill="currentColor">D</text>
<circle cx="390" cy="35" r="13" fill="#7ccf9a" stroke="currentColor"/><text x="390" y="40" text-anchor="middle" font-size="13" fill="currentColor">1</text>
<circle cx="390" cy="90" r="13" fill="#7ccf9a" stroke="currentColor"/><text x="390" y="95" text-anchor="middle" font-size="13" fill="currentColor">2</text>
<circle cx="390" cy="145" r="13" fill="#7ccf9a" stroke="currentColor"/><text x="390" y="150" text-anchor="middle" font-size="13" fill="currentColor">3</text>
<circle cx="390" cy="200" r="13" fill="#7ccf9a" stroke="currentColor"/><text x="390" y="205" text-anchor="middle" font-size="13" fill="currentColor">4</text>
<text x="330" y="235" text-anchor="middle" font-size="13" fill="currentColor">maximum, size 4</text>
</svg>
</div>

The left picture shows a **maximal** matching: one you cannot add an edge to. The right shows a **maximum** matching:
one with as many edges as possible. Every maximum matching is maximal, but not the other way round, and the greedy
method only promises maximal. This is the first lesson of the chapter: in matching problems, the obvious greedy method
can get stuck, and we need a way to get unstuck.

### Augmenting paths

Look at the path B, 1, A, 2, C, 3, D, 4 in the left picture. Its edges alternate: B1 is not in the matching, 1A is, A2
is not, 2C is, C3 is not, 3D is, D4 is not. It starts and ends at free vertices (B and 4). Swap: take out the three
matched edges of the path and put in the four unmatched ones. The result is still a matching, because every inner vertex
of the path is still covered exactly once, and it has one more edge.

**Definition.** Given a matching $M$, an **alternating path** is a path whose edges are alternately outside and inside
$M$. An **augmenting path** is an alternating path that starts and ends at two different free vertices.

An augmenting path has one more edge outside $M$ than inside it, so swapping gives a matching with one more edge. The
remarkable fact is that this is the only way a matching can fail to be as large as possible.

**Theorem (Berge, 1957).** A matching $M$ in a graph $G$ is maximum if and only if $G$ has no augmenting path for $M$.

*Proof.* If there is an augmenting path, swapping along it gives a bigger matching, so $M$ was not maximum.

For the other direction, suppose $M$ is not maximum: some matching $M'$ has more edges. Look at the edges that are in
exactly one of $M$ and $M'$ (the **symmetric difference**, written $M \triangle M'$). Every vertex touches at most one
edge of $M$ and at most one of $M'$, so in this set of edges every vertex has degree 0, 1 or 2. A graph where every
degree is at most 2 splits into separate paths and cycles. Along each path or cycle the edges alternate between $M$ and
$M'$ (two edges of the same matching cannot meet at a vertex). A cycle that alternates has as many $M$ edges as $M'$
edges. Since $M'$ has more edges than $M$ in total, and the edges they share cancel out, some path has more $M'$ edges
than $M$ edges. Such a path starts and ends with an $M'$ edge, and its two end vertices are not covered by $M$ (if one
were, the $M$ edge there would continue the path). So it is an augmenting path for $M$. $\square$

Berge's theorem turns into an algorithm: start with any matching, look for an augmenting path, swap, repeat. Each swap
adds an edge, so there are at most $n/2$ rounds. In a bipartite graph an augmenting path can be found by a search that
grows alternating paths from all free left vertices at once (in a general graph, odd cycles make the search harder; Jack
Edmonds solved that in 1965 with his "blossom" algorithm, one of the first algorithms proved to run in polynomial time).

**Worked example.** In the job graph, start from the greedy matching $M = \{A1, C2, D3\}$. Free vertices: B on the left,
4 on the right. Search from B: B's only edge goes to 1, which is matched to A. From A, try an unmatched edge: A2. Job 2
is matched to C. From C, try C3. Job 3 is matched to D. From D, try D4. Job 4 is free. Augmenting path found:
B-1-A-2-C-3-D-4. Swap to get $\{B1, A2, C3, D4\}$. **Check:** four edges, each person and each job used once.

### Counting matchings

How many perfect matchings does a graph have? In the **complete bipartite graph** $K_{n,n}$ (every left vertex joined to
every right vertex), a perfect matching is a way to give each of the $n$ left vertices a different right vertex: a
permutation. So there are $n!$. In the complete graph $K_{2n}$ on $2n$ vertices, pair the vertices up: the lowest
numbered vertex has $2n - 1$ possible partners, then the lowest remaining vertex has $2n - 3$, and so on, giving

$$
(2n-1)(2n-3)\cdots 3 \cdot 1 = \frac{(2n)!}{2^n \, n!}
$$

perfect matchings. For $2n = 6$ that is $5 \cdot 3 \cdot 1 = 15$. **Check:** $720 / (8 \cdot 6) = 15$.

For a general bipartite graph, counting perfect matchings is the same as computing the **permanent** of its 0/1 matrix
(the determinant formula with all the minus signs turned into plus signs). Leslie Valiant proved in 1979 that computing
permanents is #P-complete, a class believed to be even harder than the NP-complete problems of
[Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md). Finding one perfect matching is easy; counting them all is
believed to be hard. That contrast is worth remembering.

## 13.2 Hall's marriage theorem

*Level: advanced.*

Change the puzzle slightly. A can do 1 or 2, B can do only 1, D can do 1 or 2, and C can do 2, 3 or 4. Now no matching
can cover all of the people, and there is an instant reason: A, B and D between them can only do jobs 1 and 2. Three
people, two jobs: by the pigeonhole principle two of them would need the same job.

For a set $S$ of left vertices, write $N(S)$ for its **neighbourhood**: the set of right vertices joined to at least one
vertex of $S$. If a matching covers every vertex of $S$, the partners of $S$ are $|S|$ different vertices inside $N(S)$,
so $|N(S)| \ge |S|$. This is a necessary condition, one for every subset $S$. Philip Hall proved in 1935 that it is
also enough.

**Theorem (Hall's marriage theorem).** Let $G$ be a bipartite graph with sides $X$ and $Y$, with $X$ finite. There is a
matching that covers every vertex of $X$ if and only if

$$
|N(S)| \ge |S| \quad \text{for every subset } S \subseteq X .
$$

The condition is called **Hall's condition**. The name "marriage theorem" comes from an old way of telling it: $X$ is a
set of women, $Y$ a set of men, an edge means "would happily marry", and the question is whether every woman can marry.
The mathematics does not care about the story.

*Proof.* We have seen that a matching covering $X$ forces Hall's condition. For the converse we use induction on
$n = |X|$. If $n = 1$, the single vertex $x$ has $|N(\{x\})| \ge 1$, so it has a neighbour; match them.

Now let $n \ge 2$ and suppose the theorem is true for every bipartite graph with fewer than $n$ vertices on the left. Two
cases.

*Case 1: there is slack everywhere.* Suppose every nonempty proper subset $S$ of $X$ (not empty, not all of $X$) has
$|N(S)| \ge |S| + 1$. Pick any $x \in X$ and any neighbour $y$ of $x$, and match them. Remove $x$ and $y$ from the graph.
In what is left, any nonempty set $S \subseteq X \setminus \{x\}$ has lost at most one neighbour (namely $y$), so it
still has at least $|S| + 1 - 1 = |S|$ neighbours. Hall's condition holds in the smaller graph, so by induction the rest
of $X$ can be matched, avoiding $y$. Together with $xy$ this covers $X$.

*Case 2: some set is tight.* Suppose some nonempty proper subset $S_0 \subset X$ has $|N(S_0)| = |S_0|$ exactly. Hall's
condition holds for subsets of $S_0$, and they have the same neighbours inside $N(S_0)$, so by induction ($|S_0| < n$)
we can match $S_0$ into $N(S_0)$. Because $|N(S_0)| = |S_0|$, this uses up all of $N(S_0)$.

Now look at the rest: left side $X \setminus S_0$, right side $Y \setminus N(S_0)$. We check Hall's condition there.
Take any $T \subseteq X \setminus S_0$, and let $N'(T)$ be its neighbours outside $N(S_0)$. In the original graph,

$$
|N(T \cup S_0)| \ge |T| + |S_0| ,
$$

and $N(T \cup S_0)$ is made of $N(S_0)$ together with $N'(T)$, which do not overlap. So
$|N'(T)| + |S_0| \ge |T| + |S_0|$, which gives $|N'(T)| \ge |T|$. By induction ($|X \setminus S_0| < n$), the rest of
$X$ can be matched into $Y \setminus N(S_0)$. The two matchings use different right vertices, so together they cover $X$.
$\square$

The proof is short, but notice its shape. When there is room to spare, make any choice; when some group is exactly
tight, handle that group first, and show that what remains is still fine. This shape comes back often in combinatorics.

### Using Hall

**The deck of cards.** Deal an ordinary 52-card deck into 13 piles of 4 cards each, any way you like. Then it is always
possible to choose one card from each pile so that the 13 chosen cards are one of each rank: an ace, a two, ..., a king.

*Proof.* Make a bipartite graph: piles on the left, the 13 ranks on the right, and join a pile to a rank when the pile
holds a card of that rank. Take any $k$ piles. They hold $4k$ cards. Each rank has only 4 cards in the whole deck, so
those $4k$ cards include at least $4k / 4 = k$ different ranks. So $|N(S)| \ge |S|$ for every set $S$ of piles, and
Hall gives a matching that covers all 13 piles: a different rank from each pile, which with 13 ranks is all of them.
$\square$

**Regular bipartite graphs.** A graph is **$k$-regular** if every vertex has degree $k$.

**Corollary.** If $k \ge 1$, every $k$-regular bipartite graph has a perfect matching.

*Proof.* Count edges from each side: $k|X| = k|Y|$, so $|X| = |Y|$. Take $S \subseteq X$. The $k|S|$ edges leaving $S$
all land in $N(S)$, and each vertex of $N(S)$ receives at most $k$ edges in total, so $k|S| \le k|N(S)|$, giving
$|N(S)| \ge |S|$. Hall gives a matching covering $X$, which, as $|X| = |Y|$, is perfect. $\square$

Removing that perfect matching leaves a $(k-1)$-regular bipartite graph. Repeat, and the edges split into $k$ perfect
matchings. This was proved by Dénes König in 1916, and it has a practical reading. Suppose each of 30 teachers must meet
each of 30 classes for exactly one period, with each class and each teacher busy every period. The teacher-class graph is
30-regular, so it splits into 30 perfect matchings, and each matching is one period's timetable.

**Latin rectangles.** A **Latin square** of order $n$ is an $n \times n$ grid filled with the symbols $1, \dots, n$ so
that every symbol appears once in each row and once in each column. A **Latin rectangle** is the same with only $k < n$
rows. Can every Latin rectangle be finished into a Latin square? Yes, one row at a time. To add a row, join each column
to the symbols it does not yet contain. Each column is missing $n - k$ symbols, and each symbol appears in $k$ columns
(once per row), so it is missing from $n - k$ columns. The graph is $(n-k)$-regular and bipartite, so it has a perfect
matching, and that matching is a new row. Latin squares come back in [Chapter 19](19-Designs-and-Codes.md).

**Worked example.** Does this Latin rectangle extend?

| | col 1 | col 2 | col 3 | col 4 |
|---|---|---|---|---|
| row 1 | 1 | 2 | 3 | 4 |
| row 2 | 2 | 1 | 4 | 3 |

Missing symbols: column 1 misses $\{3, 4\}$, column 2 misses $\{3, 4\}$, column 3 misses $\{1, 2\}$, column 4 misses
$\{1, 2\}$. Choose 3, 4, 1, 2 for row 3. Then each column misses one symbol: 4, 3, 2, 1, which is row 4. **Check:** the
four rows 1234, 2143, 3412, 4321 have each symbol once per column.

### A deficiency version

Hall's theorem also tells us how large the largest matching is when no matching covers $X$. The **deficiency** of the
graph is

$$
d = \max_{S \subseteq X} \big( |S| - |N(S)| \big) ,
$$

which is at least 0 (take $S$ empty). The largest matching covers exactly $|X| - d$ vertices of $X$. To see this, add
$d$ new vertices to $Y$, each joined to every vertex of $X$. Now every $S$ has $|N(S)| + d \ge |S|$ neighbours, Hall
applies, and a matching covers $X$. At most $d$ of its edges use new vertices, so at least $|X| - d$ of them are real.
And no matching can do better, because the set $S$ that achieves the maximum can have at most $|N(S)|$ of its vertices
matched.

## 13.3 König's theorem

*Level: advanced.*

A **vertex cover** of a graph is a set $C$ of vertices that touches every edge: every edge has at least one end in $C$.
Think of guards placed at street corners so that every street is watched.

If $M$ is any matching and $C$ any vertex cover, then each edge of $M$ needs its own vertex of $C$ (no vertex of $C$ can
cover two edges of $M$, since they share no vertex). So

$$
|M| \le |C| \quad \text{for every matching } M \text{ and every vertex cover } C .
$$

This is called **weak duality**: one kind of object is bounded above by every object of the other kind. In general
graphs the two can be different. In a triangle, the largest matching has 1 edge but any cover needs 2 vertices. In a
bipartite graph, they always meet.

**Theorem (König, 1931; also Egerváry, 1931).** In a bipartite graph, the largest matching has the same size as the
smallest vertex cover.

*Proof.* Let the sides be $X$ and $Y$, and let $C$ be a smallest vertex cover. Write $C_X = C \cap X$ and
$C_Y = C \cap Y$. We build a matching of size $|C|$ in two pieces.

First, match $C_X$ into $Y \setminus C_Y$. Use Hall in the bipartite graph $H$ with left side $C_X$, right side
$Y \setminus C_Y$, and the original edges between them. Suppose some $S \subseteq C_X$ had fewer than $|S|$ neighbours
in $Y \setminus C_Y$; call that neighbour set $N_H(S)$. Replace $S$ by $N_H(S)$ in the cover:

$$
C' = (C \setminus S) \cup N_H(S) .
$$

Is $C'$ still a cover? An edge not touching $S$ was covered by some other vertex of $C$, which is still there. An edge
from $x \in S$ to $y \in Y$: if $y \in C_Y$ it is covered by $y$; otherwise $y \in N_H(S)$, which is in $C'$. So $C'$ is a
cover, and it is smaller than $C$, a contradiction. So Hall's condition holds in $H$, and $C_X$ can be matched into
$Y \setminus C_Y$.

The same argument with the sides swapped matches $C_Y$ into $X \setminus C_X$. The two matchings use disjoint sets of
vertices ($C_X$ with part of $Y \setminus C_Y$; $C_Y$ with part of $X \setminus C_X$), so together they form a matching
of size $|C_X| + |C_Y| = |C|$. With weak duality, this matching is maximum and $C$ is minimum, and they are equal.
$\square$

### The matrix version

König's theorem has a pretty form for grids of 0s and 1s. Call a **line** a row or a column.

**Corollary.** In any 0/1 matrix, the largest number of 1s with no two in the same line equals the smallest number of
lines that together contain all the 1s.

To see it, make a bipartite graph with the rows on one side and the columns on the other, and join row $i$ to column $j$
when the entry $(i, j)$ is 1. A set of 1s with no two in a line is a matching. A set of lines containing every 1 is a
vertex cover.

**Worked example.**

$$
A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 1 \end{pmatrix}
$$

Row 4, column 1 and column 2 contain every 1: three lines. And the entries $(2,1)$, $(1,2)$, $(4,3)$ are three 1s in
different rows and columns. So both numbers are 3, and three lines is best possible. **Check:** rows 1, 2, 3 have 1s
only in columns 1 and 2, so at most two of those three rows can get independent 1s, and the fourth row adds one more:
3.

### Duality, the deep idea

König's theorem is the first example of a pattern that runs through this chapter: a **max-min theorem**. A maximum of
one thing (matchings) equals a minimum of another (covers). Weak duality, the easy inequality, always holds. The strong
statement, equality, is the deep part. Its practical value is the **certificate**: if someone hands you a matching and a
cover of the same size, you know at once that both are optimal, without checking anything else. The same pattern is
behind linear programming duality, which John von Neumann noticed around 1947, and König's theorem is one of its
special cases where every optimal value happens to be a whole number.

Jenő Egerváry proved a weighted version in the same year as König, and in 1955 Harold Kuhn turned Egerváry's proof into
an algorithm for the **assignment problem** (give each worker a job so that the total cost is least). He called it the
Hungarian method, in honour of the two Hungarian mathematicians.

## 13.4 Stable matching

*Level: intermediate.*

Matching jobs to people who can do them ignores something important: people have preferences, and so do employers.
Suppose $n$ residents (new doctors) and $n$ hospitals, each with one position, each rank all of the other side in order.
We want to pair them up. Not every pairing is acceptable in practice, because of this danger:

**Definition.** In a matching, a resident $r$ and a hospital $h$ who are not paired with each other form a **blocking
pair** if $r$ prefers $h$ to its own partner and $h$ prefers $r$ to its own partner. A matching with no blocking pair is
**stable**.

A blocking pair has every reason to ignore the official assignment and make a private deal. Markets where that happens
unravel: offers get made earlier and earlier, under pressure, with worse information. That happened in the American
market for medical residents in the 1940s, which led to a central clearinghouse in the early 1950s.

### The deferred acceptance algorithm

David Gale and Lloyd Shapley published the following algorithm in 1962, in a paper titled "College admissions and the
stability of marriage".

1. Every resident starts unmatched.
2. While some resident is unmatched and has not yet proposed to every hospital: that resident proposes to the highest
   ranked hospital it has not yet proposed to.
3. A hospital that receives a proposal compares it with the resident it is holding, if any. It holds the one it prefers
   and rejects the other.
4. When no more proposals are made, every hospital is matched with the resident it is holding.

The word "deferred" matters: a hospital never says yes for good. It only says "maybe", and can trade up later.

**Worked example.** Residents A, B, C and hospitals X, Y, Z, with these rankings (best first):

| resident | ranking | | hospital | ranking |
|---|---|---|---|---|
| A | X, Y, Z | | X | B, A, C |
| B | Y, X, Z | | Y | A, B, C |
| C | X, Y, Z | | Z | A, B, C |

Residents propose. A proposes to X: X holds A. B proposes to Y: Y holds B. C proposes to X: X prefers A, rejects C. C
proposes to Y: Y prefers B, rejects C. C proposes to Z: Z holds C. Nobody is free. Result: A-X, B-Y, C-Z.

Now let the hospitals propose instead. X proposes to B: B holds X. Y proposes to A: A holds Y. Z proposes to A: A prefers
Y, rejects Z. Z proposes to B: B prefers X, rejects Z. Z proposes to C: C holds Z. Result: A-Y, B-X, C-Z.

Both are stable (check: in the first, A and B got their first choices, so they will not move, and C can only want X or Y,
which both prefer their own residents to C). They are different. In the first, the residents A and B get their first
choices; in the second, the hospitals X and Y do. The side that proposes does better. **Check:** of the $3! = 6$
possible matchings, a computer search finds exactly these two stable ones.

### Why it works

**Theorem (Gale and Shapley, 1962).** The algorithm always stops, after at most $n^2$ proposals, and the matching it
produces is perfect and stable.

*Proof.* *It stops.* Each resident proposes to each hospital at most once, so there are at most $n \cdot n = n^2$
proposals.

*Once a hospital holds someone, it always does, and only trades up.* A hospital drops a resident only to take one it
prefers. So the residents a hospital holds get better and better in its own ranking.

*The matching is perfect.* Suppose at the end some resident $r$ is unmatched. The algorithm only stops for $r$ if $r$
has proposed to every hospital. So every hospital was proposed to at least once, and from then on held someone. Then all
$n$ hospitals are holding residents, so $n$ residents are matched, and $r$ is not among them: but there are only $n$
residents. Contradiction.

*It is stable.* Suppose $r$ and $h$ are not matched to each other, and $r$ prefers $h$ to its final partner $h'$.
Residents propose in their order of preference, so $r$ proposed to $h$ before proposing to $h'$. At that moment, or
later, $h$ rejected $r$ in favour of someone it preferred. From then on, $h$ only traded up. So $h$ ends with a resident
it prefers to $r$, and $(r, h)$ is not a blocking pair. Since this holds for every possible pair, there is no blocking
pair. $\square$

In particular, a stable matching **always exists**. That is not obvious. For the "stable roommates" problem, where any
person can be paired with any other (no two sides), it can fail; see exercise 7.

### Who wins

Gale and Shapley proved more. Call a hospital $h$ **valid** for resident $r$ if some stable matching pairs them.

**Theorem.** In the resident-proposing algorithm, every resident ends with its favourite valid hospital. (So the result
does not depend on the order of the proposals, and it is the best stable matching for every resident at once.)

*Proof.* Suppose not, and look at the first moment in the run when some resident $r$ is rejected by a hospital $h$ that
is valid for $r$. At that moment $h$ took or kept some resident $r'$ it prefers to $r$. Since $h$ is valid for $r$, there
is a stable matching $S$ with $r$ paired to $h$; let $h'$ be the partner of $r'$ in $S$. Before this moment, no resident
had been rejected by a valid hospital, so $r'$ had not yet been rejected by $h'$ (which is valid for $r'$). Since $r'$
reached $h$ in its list without having been rejected by $h'$, it must rank $h$ above $h'$. So in $S$: $h$ prefers $r'$
to its partner $r$, and $r'$ prefers $h$ to its partner $h'$. That is a blocking pair in $S$, which contradicts
stability. $\square$

A similar argument shows the same matching is the *worst* stable matching for every hospital. The proposing side gets
the advantage, which is why the choice of which side proposes was argued over in practice.

### Real use

In the United States, the National Resident Matching Program has paired new doctors with residency programmes through a
central algorithm since the early 1950s. Alvin Roth showed in 1984 that the procedure it had used since then was
essentially the hospital-proposing deferred acceptance algorithm, found independently a decade before Gale and Shapley.
In the late 1990s Roth and Elliott Peranson redesigned the match to be applicant-proposing and to handle real
complications: couples who want positions in the same city, and programmes with several positions. With couples, a
stable matching need not exist in theory, but in the real data it almost always does. Variants of deferred acceptance
are also used to assign students to schools in several cities, including New York and Boston. Shapley and Roth shared the
2012 Nobel Memorial Prize in Economic Sciences for this line of work. (Gale had died in 2008.)

### Try it in Python

```python
def gale_shapley(P, Q):
    """P: proposers -> list of acceptors, best first.  Q: acceptors -> list of proposers."""
    rank = {q: {p: i for i, p in enumerate(Q[q])} for q in Q}
    free, nxt, held = list(P), {p: 0 for p in P}, {}
    while free:
        p = free.pop()
        q = P[p][nxt[p]]; nxt[p] += 1
        if q not in held:
            held[q] = p
        elif rank[q][p] < rank[q][held[q]]:
            free.append(held[q]); held[q] = p
        else:
            free.append(p)
    return {p: q for q, p in held.items()}

R = {"A": "XYZ", "B": "YXZ", "C": "XYZ"}
H = {"X": "BAC", "Y": "ABC", "Z": "ABC"}
print(gale_shapley(R, H))   # {'A': 'X', 'B': 'Y', 'C': 'Z'} (in some order)
print(gale_shapley(H, R))   # {'B': 'X', 'A': 'Y', 'C': 'Z'}
```

## 13.5 Networks and the max-flow min-cut theorem

*Level: advanced.*

### Flows

A **network** is a directed graph with two special vertices, a **source** $s$ and a **sink** $t$, and a **capacity**
$c(u,v) \ge 0$ on each directed edge $(u, v)$: the most that edge can carry. Think of pipes with water entering at $s$
and leaving at $t$, or roads with a limit on trucks per hour.

A **flow** assigns a number $f(u, v)$ to each edge so that:

- **capacity:** $0 \le f(u,v) \le c(u,v)$ on every edge;
- **conservation:** at every vertex other than $s$ and $t$, what flows in equals what flows out.

The **value** of the flow, $|f|$, is the net amount leaving $s$ (out minus in). The **max-flow problem** asks for a flow
of largest value.

Here is a network with a flow already drawn. Each label is "flow / capacity". At $b$, for example, 8 arrives from $s$
and 2 from $a$, and 4 leaves for $c$ and 6 for $d$: $10 = 10$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 250" role="img" aria-label="A flow network from s to t with nine edges labelled flow over capacity. The total flow is 16. A dashed curve cuts the edges s to b, a to b and a to c, which are all full and have capacities 8, 2 and 6, adding to 16">
<defs><marker id="arr13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="53.2" y1="116.0" x2="135.1" y2="60.1" stroke="currentColor" stroke-width="1.5" marker-end="url(#arr13)"/>
<text x="81" y="80" text-anchor="middle" font-size="13" fill="currentColor">8/10</text>
<line x1="53.2" y1="134.0" x2="135.1" y2="189.9" stroke="#eea66f" stroke-width="2.5" marker-end="url(#arr13)"/>
<text x="81" y="176" text-anchor="middle" font-size="13" fill="currentColor">8/8</text>
<line x1="150.0" y1="66.0" x2="150.0" y2="182.0" stroke="#eea66f" stroke-width="2.5" marker-end="url(#arr13)"/>
<text x="128" y="129" text-anchor="middle" font-size="13" fill="currentColor">2/2</text>
<line x1="166.0" y1="50.0" x2="282.0" y2="50.0" stroke="#eea66f" stroke-width="2.5" marker-end="url(#arr13)"/>
<text x="195" y="40" text-anchor="middle" font-size="13" fill="currentColor">6/6</text>
<line x1="161.3" y1="188.7" x2="287.3" y2="62.7" stroke="currentColor" stroke-width="1.5" marker-end="url(#arr13)"/>
<text x="197" y="123" text-anchor="middle" font-size="13" fill="currentColor">4/4</text>
<line x1="166.0" y1="200.0" x2="282.0" y2="200.0" stroke="currentColor" stroke-width="1.5" marker-end="url(#arr13)"/>
<text x="225" y="218" text-anchor="middle" font-size="13" fill="currentColor">6/7</text>
<line x1="300.0" y1="66.0" x2="300.0" y2="182.0" stroke="currentColor" stroke-width="1.5" marker-end="url(#arr13)"/>
<text x="322" y="129" text-anchor="middle" font-size="13" fill="currentColor">2/3</text>
<line x1="313.2" y1="59.0" x2="395.1" y2="114.9" stroke="currentColor" stroke-width="1.5" marker-end="url(#arr13)"/>
<text x="371" y="80" text-anchor="middle" font-size="13" fill="currentColor">8/9</text>
<line x1="313.2" y1="191.0" x2="395.1" y2="135.1" stroke="currentColor" stroke-width="1.5" marker-end="url(#arr13)"/>
<text x="371" y="176" text-anchor="middle" font-size="13" fill="currentColor">8/8</text>
<circle cx="40" cy="125" r="16" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
<text x="40" y="130" text-anchor="middle" font-size="15" fill="currentColor">s</text>
<circle cx="150" cy="50" r="16" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
<text x="150" y="55" text-anchor="middle" font-size="15" fill="currentColor">a</text>
<circle cx="150" cy="200" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
<text x="150" y="205" text-anchor="middle" font-size="15" fill="currentColor">b</text>
<circle cx="300" cy="50" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
<text x="300" y="55" text-anchor="middle" font-size="15" fill="currentColor">c</text>
<circle cx="300" cy="200" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
<text x="300" y="205" text-anchor="middle" font-size="15" fill="currentColor">d</text>
<circle cx="410" cy="125" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
<text x="410" y="130" text-anchor="middle" font-size="15" fill="currentColor">t</text>
<path d="M 225 12 C 225 120, 110 120, 100 242" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="20" y="240" font-size="12" fill="currentColor">S = {s, a}</text>
</svg>
</div>

### Cuts

An **$s$-$t$ cut** is a split of the vertices into two sets, $S$ containing $s$ and $T$ containing $t$. Its **capacity**
is the total capacity of the edges going from $S$ to $T$ (edges from $T$ back to $S$ do not count). In the picture, the
dashed line marks $S = \{s, a\}$, $T = \{b, c, d, t\}$. The edges from $S$ to $T$ are $sb$, $ab$ and $ac$, with
capacities $8 + 2 + 6 = 16$.

**Lemma.** For any flow $f$ and any $s$-$t$ cut $(S, T)$,

$$
|f| = \sum_{u \in S, \, v \in T} f(u,v) \;-\; \sum_{u \in T, \, v \in S} f(u,v) \;\le\; c(S, T) .
$$

*Proof.* Add up "out minus in" over every vertex of $S$. For $s$ it is $|f|$, and for every other vertex of $S$ it is 0
by conservation, so the total is $|f|$. In this sum, an edge with both ends in $S$ is counted once as out and once as
in, and cancels. What is left is the flow on edges from $S$ to $T$ minus the flow on edges from $T$ to $S$: that is the
equality. For the inequality, the first sum is at most the capacity of those edges, and the second sum is at least 0.
$\square$

So every flow is at most every cut: weak duality again. In the picture, the flow has value 16 and the cut has capacity
16, so the flow is maximum and the cut is minimum. The theorem says this always happens.

**Theorem (max-flow min-cut; Ford and Fulkerson, 1956; also Elias, Feinstein and Shannon, 1956).** In every network, the
largest value of a flow equals the smallest capacity of an $s$-$t$ cut.

### Augmenting paths in networks

To prove it, we need a way to improve a flow, like augmenting paths for matchings. Given a flow $f$, the **residual
network** has, for each edge $(u, v)$:

- a forward edge $u \to v$ with residual capacity $c(u,v) - f(u,v)$, if this is positive (room to send more);
- a backward edge $v \to u$ with residual capacity $f(u,v)$, if this is positive (room to cancel flow already sent).

An **augmenting path** is a path from $s$ to $t$ in the residual network. If its smallest residual capacity is $\delta$,
push $\delta$ along it: add $\delta$ on forward edges, subtract $\delta$ on edges used backwards. Capacities still hold
(that is how $\delta$ was chosen), conservation still holds (at each inner vertex of the path, one unit more arrives and
one more leaves, or a backwards step swaps one incoming unit for another), and the value goes up by $\delta$.

**Worked example (why backward edges matter).** Start from zero flow in the network above and push greedily along paths:

| path | amount | reason it stops |
|---|---|---|
| $s \to a \to c \to d \to t$ | 3 | $cd$ full |
| $s \to a \to c \to t$ | 3 | $ac$ full |
| $s \to a \to b \to d \to t$ | 2 | $ab$ full |
| $s \to b \to d \to t$ | 3 | $dt$ full |
| $s \to b \to c \to t$ | 4 | $bc$ full |

The total is 15, and now there is no path from $s$ to $t$ using only edges with room left: $s$ can reach $a$ and $b$;
from $b$, both $bc$ (4 of 4) and $dt$ (8 of 8) are blocked, and $c$ can only be reached through full edges. Greedy is
stuck at 15. But the residual network has a backward edge: $c \to d$ carries 3, so $d \to c$ has residual capacity 3.
The path $s \to b \to d \to c \to t$ has residual capacities 1, 2, 3, 3, so push 1 along it. This means: send one more
unit along $sb$ and $bd$, and at $d$, instead of passing it on to $t$ (which is full), let it replace a unit that $c$ was
sending to $d$; that unit of $c$ now goes straight to $t$. The total becomes 16, the flow in the picture.

**Proof of max-flow min-cut.** Take a flow $f$ of maximum value. (A maximum exists, because the flows form a closed and
bounded set in the space of all edge labellings, and the value is continuous; for whole-number capacities the algorithm
below also finds one directly.) Let $S$ be the set of vertices that can be reached from $s$ in the residual network, and
$T$ the rest.

$t$ is not in $S$: otherwise there would be an augmenting path and $f$ would not be maximum. So $(S, T)$ is an $s$-$t$
cut. Now:

- every edge $(u, v)$ with $u \in S$, $v \in T$ is full, $f(u,v) = c(u,v)$: otherwise the forward residual edge would put
  $v$ in $S$;
- every edge $(u, v)$ with $u \in T$, $v \in S$ is empty, $f(u,v) = 0$: otherwise the backward residual edge $v \to u$
  would put $u$ in $S$.

Put these into the lemma: $|f| = c(S, T) - 0$. So the maximum flow equals the capacity of this cut, and by weak duality
no cut is smaller. $\square$

In the example, after the final push, $s$ can reach $a$ (since $sa$ carries 8 of 10), but from $a$ both edges are full,
and $sb$ is full. So $S = \{s, a\}$, the cut in the picture.

### The algorithm, and whole numbers

The **Ford-Fulkerson method** repeats: find an augmenting path, push. If all capacities are whole numbers, each push adds
at least 1, so it stops after at most (max flow value) rounds, and every flow along the way has whole-number values.
That gives a fact that is used constantly:

**Integrality theorem.** If all capacities are integers, there is a maximum flow in which every $f(u,v)$ is an integer.

Two warnings. With badly chosen paths the number of rounds can be as large as the flow value, which can be huge compared
to the size of the network. And with irrational capacities, a badly chosen sequence of paths can go on forever, and even
converge to the wrong value. Jack Edmonds and Richard Karp showed in 1972 that always choosing a *shortest* augmenting
path (fewest edges, found by breadth-first search) needs a number of rounds at most proportional to $VE$, where $V$ and
$E$ count vertices and edges, whatever the capacities. Faster algorithms followed for decades; in 2022 Li Chen, Rasmus Kyng, Yang Liu,
Richard Peng, Maximilian Probst Gutenberg and Sushant Sachdeva announced an algorithm whose running time is
$E^{1 + o(1)}$, almost linear in the size of the network.

### Hall's theorem from max-flow

Flows contain matchings. Take a bipartite graph with sides $X$, $Y$. Add a source $s$ with an edge of capacity 1 to every
$x \in X$, a sink $t$ with an edge of capacity 1 from every $y \in Y$, and direct each original edge from $X$ to $Y$ with
capacity 1 (any capacity at least 1 works; use a large number $L$). By integrality, a maximum flow uses each edge 0 or 1
times, and the middle edges carrying 1 form a matching of the same size as the flow.

Now suppose Hall's condition holds. Take any cut $(S, T)$, and let $A = X \cap T$ (left vertices on the sink side) and
$B = X \cap S$. If some $x \in B$ has a neighbour in $T$, the cut includes a middle edge of capacity $L$, so it is at
least $L$. Otherwise all of $N(B)$ is in $S$, and those vertices each send an edge of capacity 1 to $t$. The cut then
contains the edges $s \to x$ for $x \in A$ and $y \to t$ for $y \in N(B)$, so its capacity is at least
$|A| + |N(B)| \ge |A| + |B| = |X|$. Every cut has capacity at least $|X|$ (take $L \ge |X|$), so the max flow is $|X|$,
and the matching covers $X$. This is a second proof of Hall's theorem, from max-flow min-cut.

<figure class="play" data-play="maxflow"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The max-flow algorithm on a small made-up network: push flow along paths with spare room until none is left; the flow then equals the minimum cut.</figcaption></figure>

## 13.6 Menger's theorem

*Level: advanced to expert.*

How well connected is a network? One measure: how many ways can you get from $u$ to $v$ that do not depend on each
other? Two paths from $u$ to $v$ are **edge-disjoint** if they share no edge, and **internally vertex-disjoint** if
they share no vertex other than $u$ and $v$. A set of edges **separates** $u$ from $v$ if every $u$-$v$ path uses one of
them; likewise for a set of vertices (not containing $u$ or $v$).

If there are $k$ edge-disjoint paths, then any separating edge set needs at least one edge from each, so at least $k$
edges. Weak duality yet again. Karl Menger proved in 1927 that equality holds.

**Theorem (Menger, edge version).** In a graph (directed or not), the largest number of edge-disjoint $u$-$v$ paths
equals the smallest number of edges whose removal separates $u$ from $v$.

*Proof.* For a directed graph, give every edge capacity 1 and take $s = u$, $t = v$. By the integrality theorem there is
a maximum flow with every edge carrying 0 or 1. Its value, $k$, equals the minimum cut capacity, which is the number of
edges in some cut; removing those edges separates $u$ from $v$. So the minimum separating set has at most $k$ edges.

It remains to find $k$ edge-disjoint paths in the 0/1 flow. Follow edges carrying flow 1 from $s$: by conservation,
whenever we enter a vertex other than $t$ we can leave it by an unused edge carrying 1, so the walk must reach $t$ (there
are finitely many edges). If the walk visits a vertex twice, cut out the loop between the visits. Remove the edges of
the path; what is left is a 0/1 flow of value $k - 1$. Repeat $k$ times.

For an undirected graph, replace each edge $xy$ by the two directed edges $x \to y$ and $y \to x$, each of capacity 1.
If a flow uses both of them, cancel both: the value does not change. Directed edge-disjoint paths then give undirected
edge-disjoint paths. $\square$

**Theorem (Menger, vertex version).** If $u$ and $v$ are not adjacent, the largest number of internally vertex-disjoint
$u$-$v$ paths equals the smallest number of vertices (other than $u$, $v$) whose removal separates $u$ from $v$.

*Proof idea.* Split each vertex $w \ne u, v$ into two vertices, $w_{\text{in}}$ and $w_{\text{out}}$, joined by an edge
$w_{\text{in}} \to w_{\text{out}}$ of capacity 1. Every edge that used to enter $w$ now enters $w_{\text{in}}$, and every
edge that used to leave $w$ now leaves $w_{\text{out}}$; give those edges a large capacity. Paths that share no inner
vertex become paths that share no edge of the form $w_{\text{in}} \to w_{\text{out}}$. A minimum cut uses only the
capacity-1 edges (any other edge would cost too much), and those correspond to vertices. Apply the edge version. $\square$

**Worked example: the cube.** The vertices of a cube are the strings 000 to 111, joined when they differ in one place.
From $u = 000$ to $v = 111$ there are three internally disjoint paths:

$$
000 \to 100 \to 110 \to 111, \qquad 000 \to 010 \to 011 \to 111, \qquad 000 \to 001 \to 101 \to 111 .
$$

They share no inner vertex (the middle vertices 100, 110, 010, 011, 001, 101 are all different). And three vertices
are enough to separate: remove the three neighbours of 000. So the answer is 3 both ways. **Check:** no fourth path can
exist, since 000 has only three edges.

### Connectivity

A graph is **$k$-connected** if it has more than $k$ vertices and stays connected whenever fewer than $k$ vertices are
removed. Menger's theorem gives a second description, which is often the useful one: a graph is $k$-connected if and only
if every two vertices are joined by $k$ internally disjoint paths (Hassler Whitney, 1932). One direction is immediate. For
the other, two non-adjacent vertices are handled by the vertex version of Menger; for adjacent vertices $u$, $v$, delete
the edge $uv$, show the rest still has $k - 1$ disjoint $u$-$v$ paths (a short extra argument), and add the edge back as
the $k$-th path.

For communication networks this is the meaning of **fault tolerance**: if every pair of nodes is joined by $k$ disjoint
routes, then any $k - 1$ nodes can fail and the rest still talk. A deep-space link in practice has very few routes (a
rover can talk to Earth directly, or relay through an orbiter), and the same counting decides how many failures it can
survive.

### The family of max-min theorems

Here are the theorems of this chapter side by side.

| maximum of | equals minimum of | where |
|---|---|---|
| matching | vertex cover | bipartite graphs (König) |
| flow value | cut capacity | networks (Ford-Fulkerson) |
| edge-disjoint $u$-$v$ paths | separating edge set | any graph (Menger) |
| vertex-disjoint $u$-$v$ paths | separating vertex set | any graph (Menger) |

Each one is a special case of the max-flow min-cut theorem, and that theorem is a special case of linear programming
duality, where the matrices involved happen to force whole-number answers. Max-min theorems like these are one of the
main sources of fast algorithms: the "min" side gives a certificate that the "max" side cannot be improved. In
[Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md) you will meet problems where nobody knows a certificate of that
kind, and where nobody knows a fast algorithm either.

## Check yourself

??? question "1. How many perfect matchings does $K_{3,3}$ have? How many does $K_6$ have?"

    In $K_{3,3}$, give each of the 3 left vertices a different right vertex: $3! = 6$ perfect matchings. In $K_6$, the
    first vertex has 5 possible partners, the next unmatched vertex 3, the last pair is forced: $5 \cdot 3 \cdot 1 = 15$.

??? question "2. Left side $\{1, 2, 3, 4\}$, right side $\{a, b, c, d\}$, with $N(1) = \{a, b\}$, $N(2) = \{a\}$, $N(3) = \{a, b\}$, $N(4) = \{b, c, d\}$. Is there a matching covering the left side? Find a maximum matching and a minimum vertex cover."

    No: $S = \{1, 2, 3\}$ has $N(S) = \{a, b\}$, only 2 neighbours for 3 vertices, so Hall's condition fails. A maximum
    matching: $2a$, $1b$, $4c$ (3 edges). A vertex cover of size 3: $\{a, b, 4\}$; edges at 1, 2, 3 all end at $a$ or
    $b$, and all edges at 4 are covered by 4. Sizes equal, so both are optimal, as König's theorem promises. The
    deficiency is $|S| - |N(S)| = 1$, and $4 - 1 = 3$.

??? question "3. Remove two opposite corners from an 8 by 8 chessboard. Explain, in the language of matchings, why the 62 squares cannot be covered by 31 dominoes."

    Make a graph with a vertex for each square and an edge between squares sharing a side. A domino tiling is a perfect
    matching. The graph is bipartite (black squares and white squares, every edge joins two colours). Opposite corners
    have the same colour, so 30 squares of one colour and 32 of the other remain. A perfect matching in a bipartite graph
    needs equal sides. So no tiling exists. (In Hall's terms: the 32 squares of the larger colour have at most 30
    neighbours.)

??? question "4. Show that the edges of a $k$-regular bipartite graph split into $k$ perfect matchings."

    By the corollary in 13.2, the graph has a perfect matching $M_1$. Removing it lowers every degree by exactly 1, so
    what is left is $(k-1)$-regular and still bipartite. If $k - 1 \ge 1$, it has a perfect matching $M_2$; remove it,
    and continue. After $k$ steps no edges remain, and the edges are split into $M_1, \dots, M_k$.

??? question "5. Run resident-proposing deferred acceptance: A ranks X, Y, Z; B ranks X, Z, Y; C ranks Y, X, Z. X ranks C, B, A; Y ranks A, C, B; Z ranks B, A, C."

    A proposes to X: held. B proposes to X: X prefers B to A, holds B, rejects A. A proposes to Y: held. C proposes to Y:
    Y prefers A to C, rejects C. C proposes to X: X prefers C to B, holds C, rejects B. B proposes to Z: held. Result:
    A-Y, B-Z, C-X. **Check stability:** A is with Y and prefers only X, but X holds C, whom it ranks first. B is with Z and
    prefers only X, but X prefers C to B. C prefers only Y, which ranks A above C. No blocking pair.

??? question "6. In a stable matching instance, can a resident be unmatched in one stable matching and matched in another? (Assume equal numbers and full rankings.)"

    With $n$ residents, $n$ hospitals and full rankings, every stable matching is perfect: if a resident $r$ and a
    hospital $h$ were both unmatched, each prefers the other to being alone, so they block. With equal numbers, an
    unmatched resident forces an unmatched hospital. So no: everyone is matched in every stable matching. (In the
    general version with unequal numbers or incomplete lists, the "rural hospitals theorem" says the same
    people are unmatched in every stable matching.)

??? question "7. Four people share two-person rooms. A ranks B, C, D; B ranks C, A, D; C ranks A, B, D; D ranks A, B, C (anything). Show that no stable pairing exists."

    There are three pairings. If D is with A, then B and C are together, and C prefers A to B while A prefers C to D:
    $(A, C)$ blocks. If D is with B, then A and C are together; A prefers B to C, and B prefers A to D: $(A, B)$ blocks.
    If D is with C, then A and B are together; B prefers C to A, and C prefers B to D: $(B, C)$ blocks. Whoever is with
    D is ranked first by someone who is ranked above D by them. So without two sides, stability can fail.

??? question "8. Network: $s \to a$ capacity 5, $s \to b$ 4, $a \to b$ 3, $a \to t$ 3, $b \to t$ 5. Find a maximum flow and a minimum cut."

    The four cuts: $S = \{s\}$ has capacity $5 + 4 = 9$; $S = \{s, a\}$ has $4 + 3 + 3 = 10$; $S = \{s, b\}$ has
    $5 + 5 = 10$; $S = \{s, a, b\}$ has $3 + 5 = 8$. The minimum is 8. A flow of 8: $s \to a$ 4, $a \to t$ 3,
    $a \to b$ 1, $s \to b$ 4, $b \to t$ 5. **Check:** at $a$, $4 = 3 + 1$; at $b$, $4 + 1 = 5$. Value 8 equals the cut,
    so both are optimal.

??? question "9. Prove that if a network has a cut of capacity 0, there is no flow of positive value."

    By the lemma in 13.5, $|f| \le c(S, T)$ for every flow $f$ and every cut $(S, T)$. With $c(S, T) = 0$ this gives
    $|f| \le 0$ for every flow. (Intuitively: every edge from the $s$ side to the $t$ side has capacity 0, so nothing
    can cross.)

??? question "10. In the cube graph, find a set of 3 edges whose removal separates 000 from 111, and explain why no 2 edges can do it."

    Remove the three edges at 000 (to 100, 010, 001): then 000 is isolated. No 2 edges suffice, because 13.6 found three
    paths from 000 to 111 that share no vertex and so no edge; removing 2 edges leaves at least one of them intact.
    This is Menger's edge version: 3 disjoint paths, 3 edges in a minimum separating set.

??? question "11. A matrix with nonnegative entries is doubly stochastic if every row and column adds to 1. Prove that it has $n$ positive entries with no two in the same row or column."

    Make the bipartite graph of rows and columns, with an edge when the entry is positive. Take a set $S$ of $k$ rows.
    Their entries add to $k$, and all of that mass sits in the columns of $N(S)$. Those columns hold total mass
    $|N(S)|$ (each column adds to 1), so $k \le |N(S)|$. Hall's condition holds, so there is a perfect matching: $n$
    positive entries in different rows and columns. (Subtracting a multiple of that permutation matrix and repeating
    proves the Birkhoff-von Neumann theorem: every doubly stochastic matrix is an average of permutation matrices.)

??? question "12. Show that a bipartite graph with sides $X$, $Y$ in which every vertex of $X$ has degree at least $d$ and every vertex of $Y$ has degree at most $d$ (with $d \ge 1$) has a matching covering $X$."

    Take $S \subseteq X$. At least $d|S|$ edges leave $S$, and they all land in $N(S)$, where each vertex receives at
    most $d$ edges. So $d|S| \le d|N(S)|$, giving $|N(S)| \ge |S|$. Hall's theorem finishes it.

## What you learned

- A matching is maximum exactly when it has no augmenting path (Berge), so you can always improve a stuck greedy answer
  by swapping along an alternating path.
- Hall's theorem: a bipartite graph matches all of $X$ exactly when every set of $k$ vertices of $X$ has at least $k$
  neighbours. It settles problems about cards, timetables and Latin squares.
- König's theorem: in bipartite graphs, the largest matching equals the smallest vertex cover.
- The Gale-Shapley algorithm always finds a stable matching, best for the proposing side, and it runs the residency
  match for new doctors.
- In networks, the maximum flow equals the minimum cut; augmenting paths (with backward edges) find it, and integer
  capacities give integer flows.
- Menger's theorem: the number of disjoint paths between two vertices equals the size of the smallest separating set.

**Next:** [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md), where a question that looks just as innocent, a
round trip through every vertex, turns out to have no known fast answer.

## Further reading

- P. Hall, "On representatives of subsets", *Journal of the London Mathematical Society* 10, 1935.
- D. Gale and L. S. Shapley, "College admissions and the stability of marriage", *American Mathematical Monthly* 69,
  1962.
- L. R. Ford and D. R. Fulkerson, "Maximal flow through a network", *Canadian Journal of Mathematics* 8, 1956.
- J. Edmonds and R. M. Karp, "Theoretical improvements in algorithmic efficiency for network flow problems", *Journal
  of the ACM* 19, 1972.
- A. E. Roth and E. Peranson, "The redesign of the matching market for American physicians", *American Economic Review*
  89, 1999.
- D. Gusfield and R. W. Irving, *The Stable Marriage Problem: Structure and Algorithms*, 1989.
- L. Lovász and M. D. Plummer, *Matching Theory*, 1986.
- R. Diestel, *Graph Theory*, 5th edition, 2017. Chapters 2 (matchings) and 3 (connectivity, Menger).
- J. Kleinberg and É. Tardos, *Algorithm Design*, 2005. Chapters 1 (stable matching) and 7 (network flow).
- On this site: [Pigeonhole principle](../../topics/counting/level-4/06-pigeonhole-principle.md) (a gentle start),
  [Graphs](10-Graphs.md), [Designs and codes](19-Designs-and-Codes.md), the [Combinatorics book](index.md), and
  [Efficiency analysis](../../uoft/CSC148H1/unit09.md) for running times of algorithms.
