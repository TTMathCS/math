# 18. Extremal combinatorics

*How many edges can a graph on $n$ vertices have without containing a triangle? How many subsets of $\{1, \ldots, n\}$ can
you pick so that none contains another? How many committees of size $k$ can you form so that every two share a member?
Each question asks for the largest object that avoids some pattern, and each has an exact answer with a beautiful proof.
This chapter proves the classical theorems of extremal combinatorics: Mantel and Turán for graphs, Sperner and
Erdős-Ko-Rado for families of sets, Dilworth and Mirsky for orders, and then states the Erdős-Stone theorem, which settles
the graph question for every forbidden graph at once, with one famous exception.*

!!! abstract "In this chapter"
    **You will learn:**

    - the extremal question "how big can it be before it must contain $H$?" and the extremal number $\operatorname{ex}(n,H)$
    - Mantel's theorem (at most $n^2/4$ edges without a triangle), with two proofs
    - Turán's theorem for graphs without $K_{r+1}$, and the Turán graph that achieves it
    - Sperner's theorem on antichains of subsets, via the LYM inequality
    - the Erdős-Ko-Rado theorem on intersecting families, via Katona's circle
    - Dilworth's and Mirsky's theorems on chains and antichains in partial orders
    - the Erdős-Stone theorem, and why bipartite graphs are the hard case

    **You need:** graphs ([Chapter 10](10-Graphs.md)), binomial coefficients ([Chapter 3](03-Binomial-Coefficients.md)),
    double counting ([Chapter 1](01-Counting-Principles.md)), the Erdős-Szekeres theorem of
    [Chapter 4](04-The-Pigeonhole-Principle.md), and for 18.2 optionally the random orderings of
    [Chapter 17](17-The-Probabilistic-Method.md).

    **Levels:** 18.1 is intermediate; 18.2 to 18.5 are advanced; 18.6 is expert.

## 18.1 Mantel's theorem

Ten people are at a party. Some pairs have shaken hands, and there are no three people who have all shaken hands with each
other. How many handshakes can there have been?

Split the ten people into two groups of five, and let everyone shake hands with everyone in the other group. That is
$5 \times 5 = 25$ handshakes, and there is no "triangle": any three people include two from the same group, who have not
shaken hands. Can you do better?

In graph language, the question is: how many edges can a **triangle-free** graph on $n$ vertices have? Here a **triangle**
is three vertices joined in pairs, a copy of $K_3$. The example generalises: the **complete bipartite graph**
$K_{a,b}$ has two parts of sizes $a$ and $b$ and all $ab$ edges between them, and it is triangle-free. With
$a + b = n$, the product $ab$ is largest when the parts are as equal as possible, giving
$\lfloor n/2 \rfloor \lceil n/2 \rceil = \lfloor n^2/4 \rfloor$ edges.

**Theorem 18.1 (Mantel, 1907).** A triangle-free graph on $n$ vertices has at most $\lfloor n^2/4 \rfloor$ edges. The only
graph achieving this is $K_{\lfloor n/2 \rfloor, \lceil n/2 \rceil}$.

So 25 is the answer for the party. This was a problem posed by W. Mantel in a Dutch problems journal in 1907, solved by him
and others; it is the first theorem of extremal graph theory.

### First proof: neighbours of an edge

Let $G$ have $m$ edges, and write $d(v)$ for the degree of $v$. If $uv$ is an edge, then $u$ and $v$ have no common
neighbour (that would make a triangle), so their neighbourhoods are disjoint subsets of the $n$ vertices:

$$
d(u) + d(v) \le n \quad \text{for every edge } uv.
$$

Add this over all $m$ edges. On the left, each vertex $v$ appears once for each edge at $v$, that is $d(v)$ times, so

$$
\sum_{v} d(v)^2 \le nm.
$$

Now the **Cauchy-Schwarz inequality** (for real numbers: $(\sum x_i)^2 \le n \sum x_i^2$) together with the handshake lemma
$\sum_v d(v) = 2m$ gives

$$
\frac{(2m)^2}{n} \le \sum_v d(v)^2 \le nm,
$$

so $4m^2 \le n^2 m$, that is, $m \le n^2/4$. Since $m$ is a whole number, $m \le \lfloor n^2/4 \rfloor$. $\square$

### Second proof: the vertex of largest degree

This proof also tells you what the extremal graph looks like. Let $v$ be a vertex of largest degree $\Delta$, and let $A$
be its set of neighbours, $|A| = \Delta$. No two vertices of $A$ are adjacent (with $v$ they would form a triangle). Let
$B$ be everything else, $|B| = n - \Delta$ (including $v$). Every edge has at least one end in $B$, because $A$ has no edges
inside it. So

$$
m \le \sum_{u \in B} d(u) \le (n - \Delta)\Delta \le \left\lfloor \frac{n^2}{4} \right\rfloor ,
$$

using $d(u) \le \Delta$ and the fact that $x(n - x)$ for whole numbers $x$ is largest at $x = \lfloor n/2 \rfloor$. For
equality, every inequality must be tight: $B$ has no edges inside it (otherwise the first $\le$ is strict), every vertex of
$B$ has degree $\Delta$, and $\Delta = \lfloor n/2 \rfloor$ or $\lceil n/2 \rceil$. Then all edges go between $A$ and $B$,
and there are $|A||B|$ of them, so the graph is the complete bipartite graph with parts $A$ and $B$. $\square$

*Check by computer:* a search through all graphs on 5 and 6 vertices finds the maximum triangle-free edge counts 6 and 9,
which are $\lfloor 25/4 \rfloor$ and $36/4$.

### The extremal number

Mantel's theorem is the first case of the central definition of this chapter.

**Definition.** For a graph $H$, the **extremal number** $\operatorname{ex}(n, H)$ is the largest number of edges in a graph
on $n$ vertices that contains no copy of $H$ (as a subgraph, not necessarily induced).

Mantel says $\operatorname{ex}(n, K_3) = \lfloor n^2/4 \rfloor$. The rest of graph extremal theory is the attempt to compute
$\operatorname{ex}(n, H)$ for other $H$.

**Supersaturation, a first taste.** One more edge than Mantel allows forces not one triangle but many: a graph with
$\lfloor n^2/4 \rfloor + 1$ edges contains at least $\lfloor n/2 \rfloor$ triangles (Rademacher, unpublished, 1941;
Erdős proved the first results in print). Exceeding an extremal number is rarely a near miss.

## 18.2 Turán's theorem

*Level: advanced.* What if we forbid four mutually adjacent vertices, a $K_4$, instead of a triangle? A triangle is now
allowed. The natural guess: split the vertices into **three** nearly equal parts and join every pair of vertices in
different parts. Any four vertices include two in the same part, so there is no $K_4$.

**Definition.** The **Turán graph** $T(n, r)$ is the complete $r$-partite graph on $n$ vertices with parts as equal as
possible (sizes $\lfloor n/r \rfloor$ or $\lceil n/r \rceil$). Write $t(n, r)$ for its number of edges.

Each vertex of $T(n,r)$ is joined to everything outside its part, so it has degree about $n - n/r$, and

$$
t(n, r) \le \left(1 - \frac{1}{r}\right) \frac{n^2}{2},
$$

with equality when $r$ divides $n$.

**Worked example.** $T(10, 3)$ has parts of sizes $4, 3, 3$. The number of edges is all pairs minus the pairs inside a part:
$\binom{10}{2} - \binom{4}{2} - \binom{3}{2} - \binom{3}{2} = 45 - 6 - 3 - 3 = 33$. The formula gives
$(2/3)(100/2) = 33.3$, and indeed $33 \le 33.3$.

**Theorem 18.2 (Turán, 1941).** For $r \ge 1$, a graph on $n$ vertices with no $K_{r+1}$ has at most $t(n, r)$ edges, and
$T(n, r)$ is the only graph with exactly that many.

Paul Turán found this theorem in 1940 while he was held in a Hungarian forced-labour camp, and published it in 1941. The
theorem began extremal graph theory as a subject.

We need a small lemma first.

**Lemma 18.3.** Among all complete $r$-partite graphs on $n$ vertices, $T(n,r)$ has the most edges.

*Proof.* Suppose two parts have sizes $a$ and $b$ with $a \ge b + 2$. Move one vertex from the part of size $a$ to the
part of size $b$. That vertex loses its $b$ neighbours in the small part and gains the $a - 1$ other vertices of its old
part as new neighbours; nothing else changes. The edge count goes up by $(a - 1) - b \ge 1$. So a complete $r$-partite graph
with the most edges has all part sizes within 1 of each other, which is $T(n,r)$. $\square$

*Proof of Theorem 18.2 (the bound).* Induction on $r$. For $r = 1$: a graph with no $K_2$ has no edges, and
$t(n, 1) = 0$. Now let $r \ge 2$ and let $G$ have no $K_{r+1}$. Choose a vertex $v$ of largest degree $\Delta$, let $A$ be
its neighbourhood and $B$ the rest of the vertices, $|A| = \Delta$, $|B| = n - \Delta$.

The graph $G[A]$ formed by $A$ and the edges inside it has no $K_r$: a $K_r$ inside $A$ together with $v$ would be a
$K_{r+1}$. By induction, $G[A]$ has at most $t(\Delta, r-1)$ edges. Every other edge of $G$ has at least one end in $B$,
and there are at most $\sum_{u \in B} d(u) \le (n - \Delta)\Delta$ of those. So

$$
e(G) \le t(\Delta, r-1) + (n - \Delta)\Delta.
$$

The right side is exactly the number of edges of a complete $r$-partite graph: take $T(\Delta, r-1)$ on $A$ and add $B$ as
one more part, joined to everything in $A$. By Lemma 18.3 this is at most $t(n, r)$. $\square$

The uniqueness follows by checking when every inequality is an equality, as in Mantel's second proof: $B$ must be an
independent set of vertices all of degree $\Delta$, $G[A]$ must be $T(\Delta, r-1)$ (by induction), and the resulting
complete $r$-partite graph must be balanced (Lemma 18.3). This short argument is due to Paul Erdős (1970).

*Check by computer:* among all graphs on 6 vertices, the most edges without a $K_4$ is 12, and
$t(6,3) = \binom{6}{2} - 3\binom{2}{2} = 15 - 3 = 12$.

### A probabilistic proof

The Caro-Wei bound of [Chapter 17](17-The-Probabilistic-Method.md) gives a second proof of the bound in two lines. Let $G$
have no $K_{r+1}$, so its complement $\overline{G}$ (same vertices, edges exactly where $G$ has none) has no independent set
of size $r+1$. A random ordering argument (put the vertices in random order and keep each vertex that comes before all its
*non*-neighbours; the kept vertices form a clique in $G$) gives

$$
r \ge \omega(G) \ge \sum_v \frac{1}{n - d(v)} \ge \frac{n}{n - \bar d},
$$

where $\omega(G)$ is the size of the largest clique, $\bar d = 2m/n$ is the average degree, and the last step is Jensen's
inequality for the convex function $1/(n - x)$. Rearranging, $\bar d \le n(1 - 1/r)$, so $m \le (1 - 1/r)n^2/2$. This gives
the bound $(1-1/r)n^2/2$ but not the exact $t(n,r)$ when $r$ does not divide $n$.

### An application to geometry

**Example.** Take $n$ points in the plane, no two further apart than 1 (the set has **diameter** 1). How many pairs can be
at distance more than $1/\sqrt{2}$?

Make a graph whose edges are the "far" pairs. Among any four points in the plane, three of them form an angle of at least
$90°$: if the four are in convex position, the angles of the quadrilateral add up to $360°$, so one is at least $90°$; if
one point is inside the triangle of the other three, it sees the three sides under angles adding up to $360°$, so one of
those is at least $120°$. Let the wide angle be at $B$ in triangle $ABC$. If $AB$ and $BC$ were both greater than
$1/\sqrt{2}$, the law of cosines would give $AC^2 \ge AB^2 + BC^2 > 1/2 + 1/2 = 1$, impossible. So among any four points
some pair is not far: the graph has no $K_4$. By Turán, there are at most $t(n, 3) \le n^2/3$ far pairs. Three tight
clusters at the corners of an equilateral triangle of side 1 show that this is best possible.

## 18.3 Sperner's theorem

*Level: advanced.* Now change the objects. Instead of graphs, consider families of subsets of $[n] = \{1, 2, \ldots, n\}$.

A family $\mathcal{F}$ of subsets is an **antichain** (or **Sperner family**) if no member contains another: for distinct
$A, B \in \mathcal{F}$, $A \not\subseteq B$. A **chain** is the opposite: a family in which any two members are comparable,
$A_1 \subset A_2 \subset \cdots$.

**Question.** How large can an antichain of subsets of $[n]$ be?

An easy example: all subsets of one size $k$ form an antichain (two different sets of the same size cannot contain one
another), of size $\binom{n}{k}$. The largest binomial coefficient is the middle one, $\binom{n}{\lfloor n/2 \rfloor}$.

**Theorem 18.4 (Sperner, 1928).** An antichain of subsets of $[n]$ has at most $\binom{n}{\lfloor n/2 \rfloor}$ members.

For $n = 4$ that is 6: the six 2-element subsets. You cannot find 7 subsets of $\{1,2,3,4\}$ with none inside another.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 225" role="img" aria-label="The subsets of 1, 2, 3 drawn in four levels by size, with lines joining each set to the sets one larger that contain it. A maximal chain from the empty set through 2 and 1 2 to 1 2 3 is highlighted in orange. The three two-element sets, an antichain, are shaded blue">
  <line x1="210" y1="200" x2="110" y2="145" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="210" y1="200" x2="210" y2="145" stroke="#eea66f" stroke-width="4"/>
  <line x1="210" y1="200" x2="310" y2="145" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="110" y1="145" x2="110" y2="85" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="110" y1="145" x2="210" y2="85" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="210" y1="145" x2="110" y2="85" stroke="#eea66f" stroke-width="4"/>
  <line x1="210" y1="145" x2="310" y2="85" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="310" y1="145" x2="210" y2="85" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="310" y1="145" x2="310" y2="85" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="110" y1="85" x2="210" y2="30" stroke="#eea66f" stroke-width="4"/>
  <line x1="210" y1="85" x2="210" y2="30" stroke="currentColor" stroke-opacity="0.5"/>
  <line x1="310" y1="85" x2="210" y2="30" stroke="currentColor" stroke-opacity="0.5"/>
  <rect x="185" y="189" width="50" height="22" rx="6" fill="#eea66f" stroke="currentColor"/>
  <rect x="85" y="134" width="50" height="22" rx="6" fill="none" stroke="currentColor"/>
  <rect x="185" y="134" width="50" height="22" rx="6" fill="#eea66f" stroke="currentColor"/>
  <rect x="285" y="134" width="50" height="22" rx="6" fill="none" stroke="currentColor"/>
  <rect x="80" y="74" width="60" height="22" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="180" y="74" width="60" height="22" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="280" y="74" width="60" height="22" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="175" y="19" width="70" height="22" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="210" y="205" text-anchor="middle" font-size="13" fill="currentColor">∅</text>
  <text x="110" y="150" text-anchor="middle" font-size="13" fill="currentColor">{1}</text>
  <text x="210" y="150" text-anchor="middle" font-size="13" fill="currentColor">{2}</text>
  <text x="310" y="150" text-anchor="middle" font-size="13" fill="currentColor">{3}</text>
  <text x="110" y="90" text-anchor="middle" font-size="13" fill="currentColor">{1,2}</text>
  <text x="210" y="90" text-anchor="middle" font-size="13" fill="currentColor">{1,3}</text>
  <text x="310" y="90" text-anchor="middle" font-size="13" fill="currentColor">{2,3}</text>
  <text x="210" y="35" text-anchor="middle" font-size="13" fill="currentColor">{1,2,3}</text>
  <text x="400" y="205" text-anchor="end" font-size="12" fill="currentColor">size 0</text>
  <text x="400" y="150" text-anchor="end" font-size="12" fill="currentColor">size 1</text>
  <text x="400" y="90" text-anchor="end" font-size="12" fill="currentColor">size 2</text>
  <text x="400" y="35" text-anchor="end" font-size="12" fill="currentColor">size 3</text>
</svg>
</div>

The picture shows the subsets of $\{1,2,3\}$, with a line from each set up to each set with one more element containing
it. A **maximal chain** climbs from $\varnothing$ to $[n]$ adding one element at a time (orange). An antichain (blue) can
meet each chain at most once. That observation is the whole proof.

### The LYM inequality

A maximal chain $\varnothing \subset \{a_1\} \subset \{a_1, a_2\} \subset \cdots \subset [n]$ is the same thing as an
ordering $a_1, a_2, \ldots, a_n$ of $[n]$, so there are $n!$ maximal chains.

**Theorem 18.5 (LYM inequality: Lubell 1966, Yamamoto 1954, Meshalkin 1963).** If $\mathcal{F}$ is an antichain of subsets
of $[n]$, then

$$
\sum_{A \in \mathcal{F}} \frac{1}{\binom{n}{|A|}} \le 1.
$$

*Proof.* Double count the pairs $(A, C)$ where $A \in \mathcal{F}$ and $C$ is a maximal chain through $A$. A maximal chain
passes through $A$ when its first $|A|$ elements are the elements of $A$ in some order, and the rest come in some order:
that is $|A|!\,(n - |A|)!$ chains. Each maximal chain contains at most one member of the antichain. So

$$
\sum_{A \in \mathcal{F}} |A|!\,(n - |A|)! \le n!.
$$

Divide by $n!$, and note $|A|!(n-|A|)!/n! = 1/\binom{n}{|A|}$. $\square$

*Proof of Sperner's theorem.* Each term $1/\binom{n}{|A|}$ is at least $1/\binom{n}{\lfloor n/2 \rfloor}$, since the middle
binomial coefficient is the largest. So $|\mathcal{F}| / \binom{n}{\lfloor n/2 \rfloor} \le 1$. $\square$

The LYM proof also shows when equality holds: all the terms must equal the smallest possible value, so every member has
size $n/2$ (for even $n$); for odd $n$, a little more work shows that the family must be all sets of size $(n-1)/2$ or all
of size $(n+1)/2$.

**Worked example.** Take $\mathcal{F} = \big\{\{1\}, \{2,3\}, \{2,4\}, \{3,4\}\big\}$ in $[4]$. No member contains
another, so it is an antichain, and its LYM sum is $\frac{1}{4} + 3 \cdot \frac{1}{6} = \frac{3}{4} \le 1$. Can we add a
set? Anything containing 1 contains $\{1\}$. Anything avoiding 1 is a subset of $\{2,3,4\}$: the empty set and the
singletons $\{2\}, \{3\}, \{4\}$ lie inside one of the pairs, and $\{2,3,4\}$ contains them. So nothing can be added:
$\mathcal{F}$ is a **maximal** antichain (it cannot be enlarged) with only 4 members, while the **maximum** (largest
possible) is 6. Greedy enlarging can get stuck; that is why the theorem needs a global argument such as LYM.

Sperner's theorem has a famous application in probability. Littlewood and Offord asked: if $a_1, \ldots, a_n$ are real
numbers all with $|a_i| \ge 1$, how many of the $2^n$ sums $\pm a_1 \pm \cdots \pm a_n$ can lie in one open interval of
length 2? Erdős showed in 1945, by turning the sign patterns into an antichain, that the answer is at most
$\binom{n}{\lfloor n/2 \rfloor}$, exactly Sperner's bound.

## 18.4 The Erdős-Ko-Rado theorem

*Level: advanced.* A family of sets is **intersecting** if every two of its members share at least one element.

**Question.** How large can an intersecting family of $k$-element subsets of $[n]$ be?

If $n < 2k$, any two $k$-subsets of $[n]$ intersect (together they have $2k > n$ elements counted with repetition), so the
answer is all $\binom{n}{k}$ of them. The interesting case is $n \ge 2k$. A natural candidate is a **star**: all $k$-sets
containing one fixed element, say 1. That gives $\binom{n-1}{k-1}$ sets.

**Theorem 18.6 (Erdős, Ko and Rado).** If $n \ge 2k$ and $\mathcal{F}$ is an intersecting family of $k$-subsets of $[n]$,
then

$$
|\mathcal{F}| \le \binom{n-1}{k-1}.
$$

Erdős, Chao Ko and Richard Rado proved this in 1938 but did not publish it until 1961. The proof below, by Gyula Katona (1972), is one of the
most elegant in combinatorics.

### Katona's circle

Arrange the numbers $1, \ldots, n$ around a circle in some order $\sigma$ (a **cyclic order**). An **arc** of length $k$ is a
set of $k$ consecutive numbers on the circle; there are exactly $n$ arcs.

**Lemma 18.7.** If $n \ge 2k$, at most $k$ of the $n$ arcs of one cyclic order can belong to an intersecting family.

*Proof.* Suppose the arc $A$ is in $\mathcal{F}$. Think of the $k - 1$ gaps between consecutive elements of $A$ (inside the
arc, not its two ends). Any other arc that meets $A$ either starts inside $A$ (just after one of its first $k-1$ positions)
and runs out past its right end, or ends inside $A$ and comes in from its left; each such arc starts or ends at one of the
$k - 1$ inner gaps. For each gap $g$, there are exactly two arcs other than $A$ with an end at $g$: the one that ends just
before $g$ (coming from the left) and the one that starts just after $g$ (going to the right). These two arcs are disjoint,
because together they occupy $2k$ consecutive positions and $n \ge 2k$. So at most one of each pair is in $\mathcal{F}$.
That gives at most $k - 1$ arcs besides $A$, and at most $k$ in total. $\square$

*Proof of Theorem 18.6.* Double count pairs $(\sigma, A)$ where $\sigma$ is one of the $(n-1)!$ cyclic orders of $[n]$ and
$A \in \mathcal{F}$ is an arc of $\sigma$. By the lemma, each $\sigma$ contributes at most $k$ pairs: at most $k(n-1)!$ in
total. On the other hand, a fixed $k$-set $A$ is an arc of exactly $k!\,(n-k)!$ cyclic orders: arrange $A$ as a block in
$k!$ ways, then arrange the block and the other $n - k$ elements around the circle in $(n-k)!$ ways (a circle with
$n - k + 1$ objects has $(n-k)!$ arrangements). So

$$
|\mathcal{F}| \cdot k!\,(n-k)! \le k\,(n-1)!, \qquad |\mathcal{F}| \le \frac{k\,(n-1)!}{k!\,(n-k)!} = \frac{(n-1)!}{(k-1)!\,(n-k)!} = \binom{n-1}{k-1}.
$$

$\square$

**Worked example.** For $n = 5$, $k = 2$: at most $\binom{4}{1} = 4$ pairs from $\{1, \ldots, 5\}$ that pairwise meet. The
star $\{12, 13, 14, 15\}$ achieves it. The triangle $\{12, 13, 23\}$ is intersecting too, but has only 3 members and cannot
be enlarged: any other pair contains at most one of 1, 2, 3, so it misses one of the three pairs (for example $\{1,4\}$
misses $\{2,3\}$, and $\{4,5\}$ misses all three).

*Check by computer:* a clique search over all intersecting families gives the maxima 4, 10, 15 for $(n, k) = (5,2), (6,3),
(7,3)$, matching $\binom{4}{1}, \binom{5}{2}, \binom{6}{2}$.

When $n > 2k$, the stars are the only families of maximum size (Hilton and Milner, 1967, found the largest non-star
families). When $n = 2k$ there are many: any family that takes exactly one set from each complementary pair
$\{A, [n] \setminus A\}$ is intersecting and has $\frac{1}{2}\binom{2k}{k} = \binom{2k-1}{k-1}$ members.

A related graph: the **Kneser graph** $KG(n,k)$ has the $k$-subsets of $[n]$ as vertices, joined when disjoint. An
intersecting family is an independent set in it, so EKR computes its independence number. In 1978 László Lovász proved
Kneser's 1955 conjecture that its chromatic number is $n - 2k + 2$, using the Borsuk-Ulam theorem from topology. That
proof started the field of topological combinatorics.

## 18.5 Dilworth and Mirsky

*Level: advanced.* Chains and antichains make sense in any ordering, not just of sets.

**Definitions.** A **partially ordered set** (**poset**) is a set $P$ with a relation $\le$ that is reflexive
($x \le x$), antisymmetric ($x \le y$ and $y \le x$ imply $x = y$) and transitive ($x \le y \le z$ implies $x \le z$). Two
elements are **comparable** if $x \le y$ or $y \le x$. A **chain** is a set of pairwise comparable elements, an
**antichain** a set of pairwise incomparable ones. The **height** of $P$ is the size of its largest chain, the **width** the
size of its largest antichain.

Examples: subsets of $[n]$ ordered by $\subseteq$ (Sperner's theorem says the width is $\binom{n}{\lfloor n/2 \rfloor}$);
positive integers ordered by divisibility ($a \le b$ when $a \mid b$); tasks in a project ordered by "must be done before".

A chain and an antichain share at most one element. So if $P$ is split into chains, there are at least as many chains as
the width; and if $P$ is split into antichains, there are at least as many antichains as the height. The two theorems say
these obvious lower bounds are exact.

**Theorem 18.8 (Mirsky, 1971).** A finite poset can be split into $h$ antichains, where $h$ is its height.

*Proof.* For each $x$, let $f(x)$ be the size of the largest chain whose top element is $x$. Then $1 \le f(x) \le h$. Let
$A_i = \{x : f(x) = i\}$. Each $A_i$ is an antichain: if $x < y$ with $f(x) = i$, then a chain of size $i$ ending at $x$
followed by $y$ is a chain of size $i + 1$ ending at $y$, so $f(y) > i$. So $A_1, \ldots, A_h$ is the required split.
$\square$

In the project example, $A_1$ is the tasks with no prerequisites, $A_2$ the tasks whose longest prerequisite chain has one
task, and so on: the height is the number of rounds needed if unlimited workers are available.

**Theorem 18.9 (Dilworth, 1950).** A finite poset can be split into $w$ chains, where $w$ is its width.

This is harder. The proof below is due to Fred Galvin (1994).

*Proof.* Induction on $|P|$; the empty poset is trivial. Let $a$ be a maximal element of $P$ (nothing is above it) and
$P' = P \setminus \{a\}$, of width $k$. By induction, $P' = C_1 \cup \cdots \cup C_k$ with chains $C_i$. Every antichain of
size $k$ in $P'$ meets every $C_i$ exactly once (it meets each at most once, and has $k$ elements).

For each $i$, let $x_i$ be the largest element of $C_i$ that lies in some antichain of size $k$ in $P'$ (it exists because
$P'$ has such antichains). *Claim:* $\{x_1, \ldots, x_k\}$ is an antichain. Suppose $x_i < x_j$. Take an antichain $S$ of
size $k$ containing $x_j$; it meets $C_i$ in some $y$, and $y \le x_i$ by the choice of $x_i$. Then $y \le x_i < x_j$ with
$y, x_j \in S$, contradicting that $S$ is an antichain.

*Case 1:* $a$ is incomparable to every $x_i$. Then $\{x_1, \ldots, x_k, a\}$ is an antichain of size $k+1$, so $P$ has width
$k+1$, and the chains $C_1, \ldots, C_k, \{a\}$ split $P$.

*Case 2:* $a > x_i$ for some $i$ ($a$ cannot be below anything, being maximal). Let
$K = \{a\} \cup \{z \in C_i : z \le x_i\}$, a chain. In $P \setminus K$ there is no antichain of size $k$: such an antichain
would lie in $P'$ and meet $C_i$ in an element above $x_i$, contradicting the choice of $x_i$. So $P \setminus K$ has width
at most $k - 1$, and by induction splits into $k - 1$ chains. With $K$ that is $k$ chains, and $P$ has width $k$. $\square$

**Worked example.** The divisors of 60 under divisibility: $1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60$.

- Longest chain: $1 \mid 2 \mid 4 \mid 12 \mid 60$, size 5. Mirsky's split into 5 antichains is by the number of prime
  factors counted with repetition: $\{1\}$, $\{2, 3, 5\}$, $\{4, 6, 10, 15\}$, $\{12, 20, 30\}$, $\{60\}$.
- Largest antichain: $\{4, 6, 10, 15\}$, size 4 (a computer search confirms it is the only one of that size). Dilworth
  promises 4 chains: $1 \mid 2 \mid 4 \mid 12 \mid 60$, $\;3 \mid 6 \mid 30$, $\;5 \mid 10 \mid 20$, $\;15$.

*Check:* the four chains use all 12 divisors once each.

**Erdős-Szekeres from Mirsky.** Take a sequence $s_1, \ldots, s_N$ of distinct numbers and order the *positions* by
$i \preceq j$ when $i \le j$ and $s_i \le s_j$. Chains are increasing subsequences and antichains are decreasing ones. If
there is no increasing subsequence of length $a+1$, the height is at most $a$, so by Mirsky the positions split into at most
$a$ decreasing subsequences, and one of them has length at least $N/a$. With $N = ab + 1$ some decreasing subsequence has
length $b+1$. That is the theorem of [Chapter 4](04-The-Pigeonhole-Principle.md).

Dilworth's theorem is equivalent to König's theorem on bipartite matchings ([Chapter 13](13-Matchings-and-Flows.md)): each
can be derived from the other in a few lines, and both are instances of max-flow min-cut duality.

## 18.6 The Erdős-Stone theorem

*Level: expert.* Turán computed $\operatorname{ex}(n, K_{r+1})$. What about other forbidden graphs, such as the Petersen
graph, or a cycle of length 4?

There is an easy lower bound. If $H$ has **chromatic number** $\chi(H) = r + 1$ (it needs $r+1$ colours), then $H$ is not a
subgraph of any $r$-partite graph, because an $r$-partite graph's parts would colour $H$ with $r$ colours. So $T(n, r)$
does not contain $H$, and

$$
\operatorname{ex}(n, H) \ge t(n, \chi(H) - 1).
$$

The astonishing fact is that this is essentially right.

**Theorem 18.10 (Erdős and Stone, 1946).** For all $r \ge 1$, $t \ge 1$ and $\varepsilon > 0$, every graph on $n$ vertices
with at least $\left(1 - \frac{1}{r} + \varepsilon\right)\frac{n^2}{2}$ edges contains the complete $(r+1)$-partite graph
$K_{r+1}(t)$ with $t$ vertices in each part, once $n$ is large enough.

**Corollary 18.11 (Erdős and Simonovits, 1966).** For every graph $H$ with at least one edge,

$$
\operatorname{ex}(n, H) = \left(1 - \frac{1}{\chi(H) - 1} + o(1)\right) \frac{n^2}{2}.
$$

*Proof of the corollary from the theorem.* Let $\chi(H) = r + 1$ and let $H$ have $t$ vertices. Colour $H$ with $r+1$
colours; the colour classes show that $H$ is a subgraph of $K_{r+1}(t)$. The lower bound is the Turán graph, as above. For the
upper bound, Erdős-Stone says that more than $(1 - 1/r + \varepsilon)n^2/2$ edges force $K_{r+1}(t)$ and hence $H$, for
every $\varepsilon > 0$ and large $n$. $\square$

The proof of the theorem itself takes a few pages. The modern proof uses Szemerédi's regularity lemma
([Chapter 20](20-Where-Combinatorics-Goes.md)), which says that every large graph can be cut into a bounded number of
pieces between which the edges look random; Turán's theorem applied to the "reduced graph" of the pieces then finds the
blow-up. See Bollobás, *Modern Graph Theory*, chapter IV, or Diestel, *Graph Theory*, chapter 7.

**Examples.**

- The Petersen graph has chromatic number 3, so its extremal number is $(1/4 + o(1))n^2$, the same as for a triangle.
- The octahedron $K_{2,2,2}$ has chromatic number 3: again $n^2/4$ asymptotically.
- $K_5$ minus an edge has chromatic number 4: $(1/3 + o(1))n^2$.

### The degenerate case: bipartite $H$

When $\chi(H) = 2$, that is, $H$ is bipartite, the corollary says only $\operatorname{ex}(n, H) = o(n^2)$. The true order
of magnitude is between $n$ and $n^2$ and is, for most bipartite graphs, unknown. This is the **degenerate** or
**Zarankiewicz** problem, and it is one of the most active areas of the subject.

**Theorem 18.12.** A graph on $n$ vertices with no 4-cycle $C_4$ has at most $\frac{n}{4}\left(1 + \sqrt{4n-3}\right)$
edges.

*Proof.* Count "cherries": pairs $(v, \{a, b\})$ where $a$ and $b$ are two different neighbours of $v$. Vertex $v$ is the
middle of $\binom{d(v)}{2}$ cherries. A pair $\{a, b\}$ can be the ends of at most one cherry, since two would form a
4-cycle $a v b v' a$. So

$$
\sum_v \binom{d(v)}{2} \le \binom{n}{2}.
$$

The function $\binom{x}{2} = x(x-1)/2$ is convex, so the left side is at least $n\binom{\bar d}{2}$, where
$\bar d = 2m/n$ is the average degree. This gives $\bar d(\bar d - 1) \le n - 1$, so
$\bar d \le \tfrac{1}{2}(1 + \sqrt{4n - 3})$, and $m = n\bar d/2$ gives the bound. $\square$

So $\operatorname{ex}(n, C_4) \le (\tfrac12 + o(1)) n^{3/2}$. A matching construction comes from the finite projective
planes of [Chapter 19](19-Designs-and-Codes.md): Erdős, Rényi and Sós and, independently, W. G. Brown (1966) built $C_4$-free
graphs from the points and lines of a projective plane over a finite field with $(\tfrac12 + o(1))n^{3/2}$ edges. So
$\operatorname{ex}(n, C_4) \sim \tfrac12 n^{3/2}$.

*Check by computer:* exhaustive search gives $\operatorname{ex}(n, C_4) = 3, 4, 6, 7, 9, 11$ for $n = 3, \ldots, 8$; the bound
gives $3, 4.6, 6.4, 8.4, 10.5, 12.8$.

For general bipartite $H$ with parts of sizes $s \le t$, Kővári, Sós and Turán proved in 1954 that
$\operatorname{ex}(n, K_{s,t}) = O(n^{2 - 1/s})$, by the same cherry-counting idea. Whether this is the right order for
$K_{s,s}$ when $s \ge 4$ is a famous open problem, as is the order of $\operatorname{ex}(n, C_8)$.

## A short history

Mantel's problem appeared in 1907. Sperner's theorem (1928) came from a question in order theory. Turán's 1941 paper asked
the general question for graphs and so founded extremal graph theory; Erdős and Stone (1946) and Erdős and Simonovits (1966)
answered it for non-bipartite graphs. Erdős, Ko and Rado proved their theorem in 1938 and published it in 1961; Katona's
circle proof came in 1972, Lubell's proof of Sperner in 1966. Dilworth's theorem (1950) came from lattice theory, and Mirsky
noticed its easy dual only in 1971. Bollobás's *Extremal Graph Theory* (1978) set the subject out as a whole.

## Check yourself

??? question "1. What is the largest number of edges in a triangle-free graph on 9 vertices? Describe the graph."

    $\lfloor 81/4 \rfloor = 20$, achieved only by $K_{4,5}$ (parts of 4 and 5, all $4 \times 5 = 20$ edges between them).

??? question "2. A graph on 10 vertices has 34 edges. Must it contain a $K_4$?"

    Yes. Turán's theorem with $r = 3$ says a $K_4$-free graph on 10 vertices has at most $t(10, 3) = 33$ edges (parts
    4, 3, 3: $45 - 6 - 3 - 3 = 33$).

??? question "3. Show that $t(n, r) \le (1 - 1/r)n^2/2$, with equality when $r$ divides $n$."

    If the part sizes are $n_1, \ldots, n_r$ with sum $n$, then
    $t(n,r) = \frac12\big(n^2 - \sum n_i^2\big)$ (all ordered pairs minus those inside a part, halved). By
    Cauchy-Schwarz $\sum n_i^2 \ge n^2/r$, with equality when all $n_i = n/r$. So $t(n, r) \le \frac12(n^2 - n^2/r)$.

??? question "4. Find an antichain of 10 subsets of $\{1, 2, 3, 4, 5\}$. Can there be 11?"

    All ten 2-element subsets (or all ten 3-element subsets). No: Sperner's theorem gives at most $\binom{5}{2} = 10$.

??? question "5. A family of subsets of $[6]$ is an antichain and contains 4 sets of size 1. At most how many sets of size 3 can it contain?"

    By LYM: $4 \cdot \frac{1}{6} + x \cdot \frac{1}{20} \le 1$, so $x \le 20/3$, that is $x \le 6$. Directly: the 3-sets
    must avoid the 4 singletons' elements, so they lie in a 2-element set, which is impossible: $x = 0$. LYM is a bound,
    not always the truth.

??? question "6. How many 3-element subsets of $\{1, \ldots, 8\}$ can you choose so that every two share an element?"

    $n = 8 \ge 2k = 6$, so by Erdős-Ko-Rado at most $\binom{7}{2} = 21$, achieved by all 3-sets containing 1.

??? question "7. For $n = 2k$, prove the EKR bound directly without Katona's circle."

    The $k$-subsets come in $\frac12\binom{2k}{k}$ complementary pairs $\{A, [2k] \setminus A\}$, and the two sets of a pair
    are disjoint, so an intersecting family has at most one from each pair: at most
    $\frac12\binom{2k}{k} = \binom{2k-1}{k-1}$.

??? question "8. Use Dilworth's or Mirsky's theorem to prove: in any sequence of $n^2 + 1$ distinct numbers there is a monotone subsequence of length $n + 1$."

    Order positions by $i \preceq j$ if $i \le j$ and $s_i < s_j$ (or $i = j$). Chains are increasing subsequences,
    antichains decreasing ones. If every chain has at most $n$ elements, Mirsky splits the $n^2 + 1$ positions into at
    most $n$ antichains, and by pigeonhole one has at least $n + 1$ elements: a decreasing subsequence of length $n + 1$.

??? question "9. The positive divisors of 72 are ordered by divisibility. Find the height and the width."

    $72 = 2^3 \cdot 3^2$, divisors $2^a 3^b$ with $0 \le a \le 3$, $0 \le b \le 2$. The rank $a + b$ runs from 0 to 5, so the
    longest chain has 6 elements ($1 \mid 2 \mid 4 \mid 8 \mid 24 \mid 72$): height 6. Ranks have sizes 1, 2, 3, 3, 2, 1, and
    one can check (de Bruijn-Tengbergen-Kruyswijk) that the largest antichain is a largest rank: width 3, for example
    $\{8, 12, 18\}$ (rank 3) or $\{4, 6, 9\}$ (rank 2). Dilworth's 3 chains:
    $1 \mid 2 \mid 4 \mid 8 \mid 24 \mid 72$, $\;3 \mid 6 \mid 12 \mid 36$, $\;9 \mid 18$.

??? question "10. Six points in the plane have diameter 1. At most how many pairs are more than $1/\sqrt{2}$ apart?"

    The "far" graph has no $K_4$ (18.2), so at most $t(6, 3) = 15 - 3 = 12$ pairs. Two points at each corner of an
    equilateral triangle of side 1 (very close together) achieve 12.

??? question "11. What does Erdős-Stone say about graphs with no copy of the Petersen graph? With no $K_{3,3}$?"

    The Petersen graph has $\chi = 3$, so $\operatorname{ex}(n, \text{Petersen}) = (\tfrac14 + o(1))n^2$, as for
    triangles. $K_{3,3}$ is bipartite, so Erdős-Stone gives only $o(n^2)$; in fact Kővári-Sós-Turán gives $O(n^{5/3})$,
    and Brown's construction shows that $n^{5/3}$ is the right order.

??? question "12. Use Theorem 18.12 to bound the number of edges of a $C_4$-free graph on 7 vertices, and on 31 vertices."

    For $n = 7$: $\frac74(1 + \sqrt{25}) = 10.5$, so at most 10 edges (an exhaustive search shows the true maximum is 9).
    For $n = 31$: $\frac{31}{4}(1 + \sqrt{121}) = \frac{31 \cdot 12}{4} = 93$. Here the projective plane of order 5 has
    $5^2 + 5 + 1 = 31$ points, and the Erdős-Rényi-Sós/Brown construction from it gives a $C_4$-free graph on 31 vertices
    with $\frac12 \cdot 31 \cdot 6 - \frac12 \cdot 6 = 90$ edges (each vertex has degree 6 except the 6 "absolute" points,
    which have degree 5), within 3 of the bound.

## What you learned

- Extremal problems ask for the largest structure avoiding a pattern; $\operatorname{ex}(n,H)$ is the graph version.
- Mantel: triangle-free graphs have at most $n^2/4$ edges; Turán: $K_{r+1}$-free graphs have at most $t(n,r)$ edges, with
  the balanced complete $r$-partite graph as the unique extremal graph.
- Sperner: antichains of subsets have at most $\binom{n}{\lfloor n/2 \rfloor}$ members, proved by counting maximal chains
  (LYM).
- Erdős-Ko-Rado: intersecting families of $k$-sets with $n \ge 2k$ have at most $\binom{n-1}{k-1}$ members, proved with
  Katona's circle.
- Mirsky and Dilworth: a poset splits into as many antichains as its height and as many chains as its width.
- Erdős-Stone: $\operatorname{ex}(n,H)$ is decided by $\chi(H)$, except when $H$ is bipartite, where the order of
  magnitude is often unknown.

**Next:** [Chapter 19](19-Designs-and-Codes.md), perfectly balanced structures: Latin squares, finite planes, block designs
and the codes that carried Mariner 9's pictures home from Mars.

## Further reading

- M. Aigner and G. M. Ziegler, *Proofs from THE BOOK*, 6th edition, Springer, 2018 (Turán, Sperner/LYM, EKR via Katona).
- S. Jukna, *Extremal Combinatorics*, 2nd edition, Springer, 2011.
- B. Bollobás, *Extremal Graph Theory*, Academic Press, 1978 (Dover reprint 2004), and *Modern Graph Theory*, Springer, 1998.
- I. Anderson, *Combinatorics of Finite Sets*, Oxford, 1987 (Dover reprint 2002).
- P. Turán, "On an extremal problem in graph theory" (in Hungarian), *Matematikai és Fizikai Lapok* 48, 1941.
- G. O. H. Katona, "A simple proof of the Erdős-Chao Ko-Rado theorem", *Journal of Combinatorial Theory B* 13, 1972.
- R. P. Dilworth, "A decomposition theorem for partially ordered sets", *Annals of Mathematics* 51, 1950.
- L. Mirsky, "A dual of Dilworth's decomposition theorem", *American Mathematical Monthly* 78, 1971.
- F. Galvin, "A proof of Dilworth's chain decomposition theorem", *American Mathematical Monthly* 101, 1994.
- P. Erdős and A. H. Stone, "On the structure of linear graphs", *Bulletin of the AMS* 52, 1946.
- On this site: [Pascal's triangle](../../topics/counting/level-5/03-pascals-triangle.md) and
  [the pigeonhole principle](../../topics/counting/level-4/06-pigeonhole-principle.md) in the Topics; the random-ordering
  proofs in [Chapter 17](17-The-Probabilistic-Method.md); projective planes in the
  [Geometry book, chapter 18](../geometry/18-Projective-Geometry.md).
