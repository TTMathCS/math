# Glossary

*Short definitions of the terms this book uses, from A to Z, each with a link to the chapter that teaches it.*

## A

**Adjacency matrix**
For a graph with vertices numbered $1, \dots, n$, the $n \times n$ matrix $A$ with $A_{ij} = 1$ when $i$ and $j$ are joined and 0 otherwise. The entry $(A^k)_{ij}$ counts the walks of length $k$ from $i$ to $j$.
See [Chapter 10](10-Graphs.md#the-adjacency-matrix).

**Adjacent**
Two vertices are adjacent (or neighbours) if an edge joins them. The edge is then incident with each of them.
See [Chapter 10](10-Graphs.md#the-idea).

**Affine function**
A function $a_0 + a_1x_1 + \dots + a_mx_m$ (mod 2) on binary vectors $(x_1, \ldots, x_m)$. Its list of values on all $2^m$ vectors is a codeword of the first-order Reed-Muller code.
See [Chapter 19](19-Designs-and-Codes.md#first-order-reed-muller-codes).

**Affine plane**
What is left when one line and its points are removed from a projective plane of order $n$. Its lines fall into $n + 1$ parallel classes, which is how planes and Latin squares are linked.
See [Chapter 19](19-Designs-and-Codes.md#192-finite-projective-planes).

**Algebraic connectivity**
The second-smallest eigenvalue $\mu_2$ of the Laplacian of a graph, introduced by Miroslav Fiedler in 1973. It is positive exactly when the graph is connected, and it measures how well connected the graph is.
See [Chapter 11](11-Trees.md#eigenvalues-and-cayley-again).

**Alkane**
A molecule $\mathrm{C_nH_{2n+2}}$ whose carbon skeleton is a tree with every carbon of degree at most 4. Counting alkanes up to isomorphism is a classical tree-counting problem solved by Pólya's methods.
See [Chapter 15](15-Counting-with-Symmetry.md#alcohols-and-alkanes-counting-trees).

**Almost surely**
A random graph $G(n,p)$ has a property almost surely (or with high probability) if the probability that it has the property tends to 1 as $n \to \infty$.
See [Chapter 17](17-The-Probabilistic-Method.md#the-models).

**Alternating path**
Given a matching $M$, a path whose edges are alternately outside and inside $M$.
See [Chapter 13](13-Matchings-and-Flows.md#augmenting-paths).

**Antichain**
A family of sets in which no member contains another (also called a Sperner family); more generally, a set of pairwise incomparable elements of a poset. Sperner's theorem bounds the size of an antichain of subsets of $[n]$.
See [Chapter 18](18-Extremal-Combinatorics.md#183-sperners-theorem).

**Approximation algorithm**
An algorithm is a $\rho$-approximation for a minimisation problem if it runs in polynomial time and always returns an answer at most $\rho$ times the optimum. The tree method is a 2-approximation for the metric TSP.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#145-approximation).

**Arithmetic progression**
A list $a, a + d, a + 2d, \dots, a + (k-1)d$ with $d \ge 1$, of length $k$. Van der Waerden's and Szemerédi's theorems find long ones in colourings and in dense sets.
See [Chapter 16](16-Ramsey-Theory.md#van-der-waerdens-theorem).

**Assignment problem**
The problem of giving each worker one job so that the total cost is least. Kuhn's Hungarian method solves it using König's theorem.
See [Chapter 13](13-Matchings-and-Flows.md#duality-the-deep-idea).

**Augmenting path (matching)**
An alternating path for a matching $M$ that starts and ends at two different free vertices. Swapping the edges along it gives a matching one larger; Berge's theorem says $M$ is maximum exactly when there is none.
See [Chapter 13](13-Matchings-and-Flows.md#augmenting-paths).

**Augmenting path (network)**
A path from the source to the sink in the residual network. Pushing flow along it increases the value of the flow by its smallest residual capacity.
See [Chapter 13](13-Matchings-and-Flows.md#augmenting-paths-in-networks).

**Automorphism**
An isomorphism from a graph to itself: a symmetry of the graph.
See [Chapter 10](10-Graphs.md#when-are-two-graphs-the-same).

## B

**Balanced bracket sequence**
A string of $n$ opening and $n$ closing brackets in which no prefix has more closing than opening brackets. Such sequences correspond to Dyck paths and are counted by the Catalan numbers.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#dyck-paths-and-brackets).

**Balanced incomplete block design**
A $(v, k, \lambda)$ design, or 2-$(v, k, \lambda)$ design: a set of $v$ points with a collection of $k$-element subsets called blocks, such that every pair of points lies in exactly $\lambda$ blocks.
See [Chapter 19](19-Designs-and-Codes.md#193-block-designs-and-fishers-inequality).

**Ball (in a code)**
The ball of radius $t$ around a string is the set of all strings within Hamming distance $t$ of it. Packing disjoint balls gives the Hamming bound.
See [Chapter 19](19-Designs-and-Codes.md#the-hamming-bound-and-perfect-codes).

**Ballot theorem**
If candidate A gets $a$ votes and B gets $b < a$, and all orders of counting are equally likely, then A is strictly ahead throughout the count with probability $\frac{a - b}{a + b}$. Stated by Bertrand in 1887 and proved by reflection.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#85-the-ballot-problem).

**Bell number**
The number $B_n$ of partitions of an $n$-element set into any number of blocks: $B_n = \sum_k S(n, k)$. The sequence begins $1, 1, 2, 5, 15, 52, 203$.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#bell-numbers).

**Berge's theorem**
A matching in a graph is maximum if and only if the graph has no augmenting path for it (Claude Berge, 1957).
See [Chapter 13](13-Matchings-and-Flows.md#augmenting-paths).

**Bichromatic angle**
A pair of edges at a common vertex that have different colours. Counting them shows that every 2-colouring of $K_6$ has at least two monochromatic triangles.
See [Chapter 16](16-Ramsey-Theory.md#161-r33-6-again).

**Big-O notation**
$T(n) = O(f(n))$ means $T(n)$ is at most a constant times $f(n)$ for large $n$; $\Theta$ means both at most and at least a constant times, and $\Omega$ means at least.
See [Chapter 6](06-Recurrences.md#65-divide-and-conquer-recurrences).

**Bijection**
A function that is both injective and surjective, also called a one-to-one correspondence. Every element of the target is hit exactly once, and the function has an inverse.
See [Chapter 1](01-Counting-Principles.md#14-bijections-the-key-idea).

**Bijection principle**
If there is a bijection between finite sets $A$ and $B$, then $|A| = |B|$. It lets you trade a hard set for an easier partner of the same size.
See [Chapter 1](01-Counting-Principles.md#14-bijections-the-key-idea).

**Binary code**
A set $C$ of strings of $n$ bits, the codewords; $n$ is the length of the code.
See [Chapter 19](19-Designs-and-Codes.md#distance-and-correction).

**Binary tree**
Either empty, or a root with a left subtree and a right subtree, each a binary tree. The binary trees with $n$ nodes are counted by the Catalan number $C_n$.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#binary-trees).

**Binet's formula**
The closed form $F_n = \frac{\varphi^n - \psi^n}{\sqrt5}$ for the Fibonacci numbers, where $\varphi = \frac{1 + \sqrt5}{2}$ and $\psi = \frac{1 - \sqrt5}{2}$. Published by Binet in 1843, but known earlier to de Moivre.
See [Chapter 6](06-Recurrences.md#binets-formula).

**Binomial coefficient**
The number $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$ of $k$-element subsets of an $n$-element set, read "$n$ choose $k$". They are the coefficients in the expansion of $(x + y)^n$.
See [Chapter 2](02-Permutations-and-Combinations.md#23-choosing-combinations).

**Binomial theorem**
For every whole number $n \ge 0$, $(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}$. Choosing values of $x$ and $y$ turns it into many identities.
See [Chapter 3](03-Binomial-Coefficients.md#32-the-binomial-theorem).

**Bipartite graph**
A graph whose vertices can be split into two sets, the parts or sides, so that every edge joins the two parts. A graph is bipartite if and only if it has no cycle of odd length.
See [Chapter 10](10-Graphs.md#two-teams).

**Block (of a design)**
One of the $k$-element subsets of points that make up a block design.
See [Chapter 19](19-Designs-and-Codes.md#193-block-designs-and-fishers-inequality).

**Block (of a set partition)**
One of the non-empty, non-overlapping pieces into which a partition of a set cuts it.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#definitions).

**Bonferroni inequalities**
If the inclusion-exclusion sum is stopped early, the truncated sums alternate between upper and lower bounds for the size of the union. The first of them, $|A_1 \cup \dots \cup A_n| \le \sum |A_i|$, is the union bound.
See [Chapter 5](05-Inclusion-Exclusion.md#bonferroni-inequalities).

**Book (in Ramsey theory)**
A set of vertices joined in one colour to everything in another set. Books were the key structure in the 2023 exponential improvement of the upper bound for $R(k, k)$.
See [Chapter 16](16-Ramsey-Theory.md#166-recent-progress).

**Bracelet**
A ring of coloured beads in which two rings count as the same if one can be rotated or flipped into the other. Its symmetry group is the dihedral group.
See [Chapter 15](15-Counting-with-Symmetry.md#151-necklaces-again).

**Breadth-first search**
A way to explore a graph from a start vertex: first the start, then its neighbours, then their new neighbours, and so on. It finds all distances from the start and gives a BFS tree in which each path to the root is a shortest path.
See [Chapter 10](10-Graphs.md#connected-graphs-and-components).

**Bridge (in a graph)**
An edge whose removal increases the number of components (a cut edge). An edge is a bridge if and only if it lies on no cycle.
See [Chapter 10](10-Graphs.md#bridges).

**Brooks' theorem**
A connected graph that is neither a complete graph nor an odd cycle can be coloured with $\Delta$ colours, where $\Delta$ is its largest degree (Leonard Brooks, 1941).
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#bounds).

**Bruck-Ryser theorem**
If $n \equiv 1$ or $2 \pmod 4$ and there is a projective plane of order $n$, then $n$ is a sum of two squares. It rules out order 6, for example.
See [Chapter 19](19-Designs-and-Codes.md#which-orders-exist).

**Burnside necklace formula**
The number of necklaces of $n$ beads in $k$ colours is $N(n, k) = \frac{1}{n}\sum_{d \mid n} \varphi(d)\, k^{n/d}$, because rotation by $j$ places splits the positions into $\gcd(j, n)$ cycles.
See [Chapter 15](15-Counting-with-Symmetry.md#the-necklace-formula).

**Burnside's lemma**
When a group $G$ acts on a finite set, the number of orbits is the average number of fixed points: $\frac{1}{|G|} \sum_{g \in G} |\operatorname{Fix}(g)|$. It counts objects up to symmetry.
See [Chapter 15](15-Counting-with-Symmetry.md#152-burnsides-lemma).

## C

**Cap set**
A set of points in $\mathbb{F}_3^n$ with no three on a line, where $x, y, z$ form a line exactly when $x + y + z = 0$. Ellenberg and Gijswijt proved in 2016 that a cap set has at most $3 \cdot 2.756^n$ points.
See [Chapter 20](20-Where-Combinatorics-Goes.md#cap-sets-and-the-game-set).

**Capacity (of a channel)**
The rate, from Shannon's 1948 theorem, below which codes exist that make the error probability as small as you like, and above which they do not.
See [Chapter 19](19-Designs-and-Codes.md#the-hamming-bound-and-perfect-codes).

**Capacity (of a cut)**
The total capacity of the edges going from the source side $S$ to the sink side $T$ of an $s$-$t$ cut. Every flow has value at most the capacity of every cut.
See [Chapter 13](13-Matchings-and-Flows.md#cuts).

**Cardinality**
The number of elements $|A|$ of a finite set $A$, also called its size.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Caro-Wei bound**
Every graph has an independent set of size at least $\sum_v \frac{1}{d(v) + 1}$, the sum over its vertices. It is proved by putting the vertices in a random order.
See [Chapter 17](17-The-Probabilistic-Method.md#independent-sets-the-caro-wei-bound).

**Cartesian product**
The set $A \times B$ of all ordered pairs $(a, b)$ with $a \in A$ and $b \in B$. By the product rule $|A \times B| = |A| \cdot |B|$.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Cassini's identity**
$F_{n-1}F_{n+1} - F_n^2 = (-1)^n$ for $n \ge 1$. The cleanest proof takes determinants of powers of the matrix $Q = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$.
See [Chapter 6](06-Recurrences.md#64-fibonacci-identities-by-tiling).

**Catalan number**
The number $C_n = \frac{1}{n+1}\binom{2n}{n}$, beginning $1, 1, 2, 5, 14, 42$. It counts Dyck paths, balanced bracket sequences, binary trees, triangulations of a convex $(n+2)$-gon and many other families.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#83-catalan-numbers-everywhere).

**Catalan recurrence**
$C_{n+1} = \sum_{k=0}^{n} C_k C_{n-k}$ with $C_0 = 1$, from the first-return decomposition of a Dyck path.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#the-catalan-recurrence).

**Catalan triangle**
The table of the numbers of lattice paths from $(0, 0)$ to $(a, b)$ with $b \le a$ that never go above the diagonal, $\binom{a+b}{b} - \binom{a+b}{b-1}$. The diagonal entries are the Catalan numbers.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#the-general-reflection-count).

**Cauchy-Hadamard formula**
The radius of convergence of $\sum a_n x^n$ is $1/\limsup |a_n|^{1/n}$. So the exponential growth rate of a sequence can be read from its generating function.
See [Chapter 7](07-Generating-Functions.md#exponential-growth-and-the-radius-of-convergence).

**Cayley's formula**
There are exactly $n^{n-2}$ trees on $n$ labelled vertices. Found by Borchardt in 1860 and named after Cayley; the Prüfer code gives a bijective proof.
See [Chapter 11](11-Trees.md#113-cayleys-formula).

**Ceiling**
The ceiling $\lceil x \rceil$ of $x$ is the smallest whole number at least $x$. If $N$ objects go into $k$ boxes, some box gets at least $\lceil N/k \rceil$.
See [Chapter 4](04-The-Pigeonhole-Principle.md#41-the-simple-and-strong-forms).

**Certificate**
A piece of evidence that lets a "yes" answer be checked quickly, such as a Hamiltonian cycle for "is this graph Hamiltonian?". In matching theory, a matching and a vertex cover of the same size certify each other's optimality.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#144-p-versus-np-in-plain-words).

**Chain**
A set of pairwise comparable elements of a poset; for sets, a family in which of any two members one contains the other. A maximal chain of subsets of $[n]$ climbs from $\varnothing$ to $[n]$ one element at a time.
See [Chapter 18](18-Extremal-Combinatorics.md#185-dilworth-and-mirsky).

**Characteristic equation**
For $a_n = c_1a_{n-1} + \dots + c_ka_{n-k}$, the equation $r^k = c_1r^{k-1} + \dots + c_k$, found by trying $a_n = r^n$. Its roots, the characteristic roots, give the general solution.
See [Chapter 6](06-Recurrences.md#the-idea-try-a-geometric-sequence).

**Chebyshev's inequality**
$P(|X - E[X]| \ge a) \le \operatorname{Var}(X)/a^2$. It is the basis of the second moment method.
See [Chapter 17](17-The-Probabilistic-Method.md#174-the-second-moment-method).

**Chinese postman problem**
The problem of finding the shortest closed walk that uses every edge of a graph at least once.
See [Chapter 10](10-Graphs.md#finding-the-circuit-hierholzers-method).

**Chiral**
A molecule is chiral if it differs from its mirror image, like a left and a right hand, as $\mathrm{CHFClBr}$ does.
See [Chapter 15](15-Counting-with-Symmetry.md#substituted-methanes).

**Chromatic number**
The smallest $k$ such that a graph $G$ has a proper colouring with $k$ colours, written $\chi(G)$. It is at least the clique number and at most $\Delta(G) + 1$.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#123-colouring-and-the-chromatic-number).

**Chromatic polynomial**
The number $P(G, x)$ of proper colourings of $G$ with $x$ available colours, which is a polynomial in $x$. It satisfies deletion-contraction and has degree $n$, leading coefficient 1 and second coefficient $-m$.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#126-chromatic-polynomials).

**Circulant graph**
A graph on vertices $0, \dots, n-1$ around a circle in which $i$ and $j$ are joined according to the difference $i - j$ mod $n$. Such graphs give the matching lower bounds for small Ramsey numbers.
See [Chapter 16](16-Ramsey-Theory.md#lower-bounds-by-construction).

**Circular arrangement**
A seating around a circle in which seatings that differ by a rotation count as the same. There are $(n-1)!$ circular arrangements of $n$ different people.
See [Chapter 2](02-Permutations-and-Combinations.md#25-circular-arrangements).

**Clique**
A set of vertices that are all joined to each other: a complete subgraph. A graph with a clique of size $\omega$ needs at least $\omega$ colours.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#bounds).

**Closed form**
A formula for the $n$-th term of a sequence that does not need the earlier terms.
See [Chapter 6](06-Recurrences.md#61-setting-up-recurrences).

**Closure (of a graph)**
The graph obtained by repeatedly joining non-adjacent vertices $u$, $v$ with $\deg u + \deg v \ge n$ (Bondy and Chvátal, 1976). A graph is Hamiltonian if and only if its closure is.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#142-dirac-and-ore).

**Codeword**
One of the strings that a code allows to be sent. Using only some strings lets the receiver detect and correct errors.
See [Chapter 19](19-Designs-and-Codes.md#195-error-correcting-codes).

**Coefficient of $x^n$**
In a generating function $A(x) = \sum a_n x^n$, the number $a_n$, written $[x^n]A(x)$.
See [Chapter 7](07-Generating-Functions.md#71-power-series-as-clotheslines).

**Colouring (proper)**
A proper colouring of a graph with $k$ colours is a function $c\colon V \to \{1, \dots, k\}$ with $c(u) \ne c(v)$ for every edge $uv$. Each colour class is an independent set.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#123-colouring-and-the-chromatic-number).

**Combination**
A $k$-combination of a set is a subset with $k$ elements: a choice where order does not matter. An $n$-set has $\binom{n}{k}$ of them.
See [Chapter 2](02-Permutations-and-Combinations.md#23-choosing-combinations).

**Combinatorial proof**
A proof of an identity that finds a set which each side counts. It is called a bijective proof when it builds an explicit bijection.
See [Chapter 3](03-Binomial-Coefficients.md#33-identities-by-counting-two-ways).

**Combinatorics**
The mathematics of finite arrangements: counting them, deciding whether they exist, and finding the best ones.
See [Chapter 1](01-Counting-Principles.md#11-why-counting-is-hard).

**Comparable**
Two elements $x$, $y$ of a poset are comparable if $x \le y$ or $y \le x$.
See [Chapter 18](18-Extremal-Combinatorics.md#185-dilworth-and-mirsky).

**Complement (of a graph)**
The graph $\overline{G}$ with the same vertices as $G$, in which $uv$ is an edge exactly when it is not an edge of $G$.
See [Chapter 10](10-Graphs.md#subgraphs-complements-and-how-many-graphs-there-are).

**Complement (of a set)**
The set $\overline{A}$ of elements of the universe $U$ not in $A$. The complement rule says $|A| = |U| - |\overline{A}|$, which is useful when "none" is easier to count than "at least one".
See [Chapter 1](01-Counting-Principles.md#13-counting-the-complement).

**Complete bipartite graph**
The graph $K_{a,b}$ with $a$ vertices on one side and $b$ on the other, every vertex on one side joined to every vertex on the other. It has $ab$ edges.
See [Chapter 10](10-Graphs.md#a-gallery-of-families).

**Complete graph**
The graph $K_n$ on $n$ vertices with every pair joined. It has $\binom{n}{2}$ edges and is $(n-1)$-regular.
See [Chapter 10](10-Graphs.md#a-gallery-of-families).

**Component (connected)**
A class of the relation "joined by a path" on the vertices of a graph, together with its edges. A graph is connected exactly when it has one component.
See [Chapter 10](10-Graphs.md#connected-graphs-and-components).

**Composition**
An ordered list of positive integers adding to $n$. There are $2^{n-1}$ compositions of $n$, and $\binom{n-1}{k-1}$ of them have $k$ parts.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#95-compositions).

**Conjugate partition**
The partition obtained by reading the Ferrers diagram of a partition by columns instead of rows. Conjugation shows that partitions into $k$ parts match partitions with largest part $k$.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#ferrers-diagrams-and-conjugation).

**Connected graph**
A graph in which there is a path between every two vertices.
See [Chapter 10](10-Graphs.md#connected-graphs-and-components).

**Contraction (of an edge)**
Merging the two ends of an edge $e = uv$ into one vertex, keeping the other edges; the result is written $G / e$.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#deletion-and-contraction).

**Convolution**
The sequence $c_n = \sum_{k=0}^{n} a_k b_{n-k}$, the coefficients of the product of the generating functions of $(a_n)$ and $(b_n)$.
See [Chapter 7](07-Generating-Functions.md#formal-power-series).

**Coprime**
Two whole numbers are coprime if they have no common factor greater than 1. Among any $n + 1$ numbers from $\{1, \dots, 2n\}$, two are coprime.
See [Chapter 4](04-The-Pigeonhole-Principle.md#42-classic-uses).

**Cube graph**
The graph $Q_d$ whose vertices are the $2^d$ strings of $d$ zeros and ones, two joined when they differ in exactly one place.
See [Chapter 10](10-Graphs.md#a-gallery-of-families).

**Cut (in a graph)**
A split of the vertices into two non-empty sets; an edge with one end on each side crosses the cut. In Chapter 17 the size of a cut is the number of edges crossing it, and every graph has a cut with at least half its edges.
See [Chapter 11](11-Trees.md#why-greed-works-the-cut-property).

**Cut property**
If all edge weights are different, then for every cut the lightest edge crossing it belongs to every minimum spanning tree. It explains why the greedy algorithms of Kruskal and Prim work.
See [Chapter 11](11-Trees.md#why-greed-works-the-cut-property).

**Cut vertex**
A vertex whose removal increases the number of components of a graph.
See [Chapter 10](10-Graphs.md#bridges).

**Cycle (in a graph)**
A closed walk $v_0, v_1, \dots, v_k = v_0$ with $k \ge 3$ whose vertices $v_0, \dots, v_{k-1}$ are all different. The graph $C_n$ is a single cycle on $n$ vertices.
See [Chapter 10](10-Graphs.md#getting-from-here-to-there).

**Cycle index**
The average, over a group of rearrangements of $m$ positions, of the cycle-type monomials $a_1^{j_1} a_2^{j_2} \cdots$. Substituting power sums into it gives Pólya's theorem.
See [Chapter 15](15-Counting-with-Symmetry.md#the-cycle-index).

**Cycle lemma**
For each sequence of $n$ steps $+1$ and $n + 1$ steps $-1$, exactly one of its $2n + 1$ cyclic shifts has all proper partial sums at least 0, and the shifts are all different. It explains the factor $\frac{1}{n+1}$ in the Catalan formula.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#a-second-proof-of-the-formula-the-cycle-lemma).

**Cycle (of a permutation)**
A closed loop $a \mapsto \sigma(a) \mapsto \sigma^2(a) \mapsto \dots \mapsto a$ of a permutation. Every permutation splits uniquely into disjoint cycles.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#permutations-are-made-of-cycles).

**Cycle property**
With distinct weights, the heaviest edge of any cycle is in no minimum spanning tree.
See [Chapter 11](11-Trees.md#why-greed-works-the-cut-property).

**Cycle type**
The partition of $n$ formed by the cycle lengths of a permutation of $n$ elements.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#set-partitions-and-permutations-sorted-by-shape).

## D

**Decision problem**
A question with a yes-or-no answer, such as "does this graph have a Hamiltonian cycle?". The classes P and NP are classes of decision problems.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#144-p-versus-np-in-plain-words).

**Deferred acceptance algorithm**
The Gale-Shapley algorithm: free proposers propose in order of preference, and each receiver holds its best offer so far and rejects the rest. It always ends in a stable matching, the best one for every proposer.
See [Chapter 13](13-Matchings-and-Flows.md#the-deferred-acceptance-algorithm).

**Deficiency**
In a bipartite graph with sides $X$ and $Y$, the largest value of $|S| - |N(S)|$ over subsets $S$ of $X$. The largest matching has size $|X|$ minus the deficiency.
See [Chapter 13](13-Matchings-and-Flows.md#a-deficiency-version).

**Degree (of a vertex)**
The number $\deg(v)$ of edges incident with a vertex $v$; in a simple graph, its number of neighbours. A loop adds 2. The smallest and largest degrees are written $\delta(G)$ and $\Delta(G)$.
See [Chapter 10](10-Graphs.md#the-idea).

**Degree sequence**
The list of the degrees of a graph, usually from largest to smallest. A sequence that is the degree sequence of some simple graph is called graphic.
See [Chapter 10](10-Graphs.md#degree-sequences).

**Deletion method**
A probabilistic argument in two steps: pick a random structure that has few defects on average, then delete the defects and keep what is left. Also called alteration.
See [Chapter 17](17-The-Probabilistic-Method.md#173-the-deletion-method).

**Deletion-contraction**
The rule $P(G, x) = P(G - e, x) - P(G / e, x)$ for the chromatic polynomial, where $G - e$ deletes the edge $e$ and $G / e$ contracts it.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#deletion-and-contraction).

**Density increment**
A proof strategy for progression theorems: if a set has no long progression, it is denser on some long progression, and one repeats the argument on that progression.
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-proofs).

**Dependency graph**
For events $A_1, \ldots, A_N$, a graph on them such that each $A_i$ is mutually independent of the events it is not joined to. The local lemma needs its maximum degree to be small.
See [Chapter 17](17-The-Probabilistic-Method.md#175-the-lovasz-local-lemma).

**Derangement**
A permutation with no fixed point. The number of derangements of $n$ things is $n!\sum_{k=0}^{n} \frac{(-1)^k}{k!}$, the nearest whole number to $n!/e$.
See [Chapter 5](05-Inclusion-Exclusion.md#53-derangements-and-1e).

**Diameter**
The largest distance between two vertices of a connected graph.
See [Chapter 10](10-Graphs.md#when-are-two-graphs-the-same).

**Dihedral group**
The group $D_n$ of the $n$ rotations and $n$ reflections of a regular $n$-gon, with $2n$ elements. It is the symmetry group for bracelets.
See [Chapter 15](15-Counting-with-Symmetry.md#the-necklace-formula).

**Dilworth's theorem**
A finite poset can be split into $w$ chains, where $w$ is its width, the size of its largest antichain (Dilworth, 1950).
See [Chapter 18](18-Extremal-Combinatorics.md#185-dilworth-and-mirsky).

**Dirac's theorem**
A graph with $n \ge 3$ vertices in which every vertex has degree at least $n/2$ is Hamiltonian (Gabriel Dirac, 1952).
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#142-dirac-and-ore).

**Directed graph**
A graph in which each edge has a direction, from a tail to a head. Networks and tournaments are directed graphs.
See [Chapter 10](10-Graphs.md#the-idea).

**Dirichlet's approximation theorem**
For every real $x$ and whole number $N \ge 1$ there are whole numbers $p$ and $q$ with $1 \le q \le N$ and $|qx - p| < \frac{1}{N}$. So $\left| x - \frac{p}{q} \right| < \frac{1}{q^2}$, and an irrational $x$ has infinitely many such fractions.
See [Chapter 4](04-The-Pigeonhole-Principle.md#44-dirichlets-approximation-theorem).

**Dirichlet's box principle**
Another name for the pigeonhole principle, also the drawer principle, after Dirichlet's use of it in 1842.
See [Chapter 4](04-The-Pigeonhole-Principle.md#41-the-simple-and-strong-forms).

**Disjoint**
Two sets are disjoint if they have no element in common.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Distance (in a graph)**
The length $d(u, v)$ of a shortest path between two vertices in the same component.
See [Chapter 10](10-Graphs.md#connected-graphs-and-components).

**Divide-and-conquer recurrence**
A recurrence $T(n) = aT(n/b) + f(n)$ for the running time of an algorithm that splits a problem into $a$ subproblems of size $n/b$ and combines the answers at cost $f(n)$. The master theorem solves it.
See [Chapter 6](06-Recurrences.md#65-divide-and-conquer-recurrences).

**Division principle**
If a set of $N$ objects splits into groups that all have $d$ members, there are $N/d$ groups. It is how the copies in a multiset are made identical again.
See [Chapter 2](02-Permutations-and-Combinations.md#22-permutations-of-a-multiset).

**Dobiński's formula**
The infinite series $B_n = \frac{1}{e}\sum_{m=0}^{\infty} \frac{m^n}{m!}$ for the Bell numbers (Dobiński, 1877).
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#dobinskis-formula).

**Double counting**
Counting one set in two different ways, often a set of pairs, and setting the two answers equal. It proves the handshake lemma and many identities.
See [Chapter 1](01-Counting-Principles.md#15-double-counting).

**Drawing (of a graph)**
A placement of each vertex at a point of the plane and each edge along a curve between its ends, with no curve passing through a vertex other than its ends.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#drawings-without-crossings).

**Dual graph**
The graph of a map that has a vertex for each country, two joined when the countries share a border. Colouring a map is colouring its dual graph.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#from-maps-to-graphs).

**Dyck path**
A path of $n$ up-steps and $n$ down-steps that never goes below its starting level (semilength $n$); equivalently, a lattice path to $(n, n)$ that never goes above the diagonal. Dyck paths are counted by the Catalan numbers.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#dyck-paths-and-brackets).

**Dynamic programming**
A method that solves smaller problems first and stores their answers to build larger ones. The Held-Karp algorithm solves the TSP this way in about $n^2 2^n$ steps.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#dynamic-programming-held-karp).

## E

**Edge**
One of the lines of a graph: a pair $uv$ of vertices, which are its ends.
See [Chapter 10](10-Graphs.md#the-idea).

**Edge-disjoint paths**
Paths between the same two vertices that share no edge.
See [Chapter 13](13-Matchings-and-Flows.md#136-mengers-theorem).

**Equivalence relation**
A relation that is reflexive, symmetric and transitive. Its classes form a partition of the set, so equivalence relations on an $n$-set are counted by $B_n$.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#bell-numbers).

**Erdős-Hajnal conjecture**
For every graph $H$ there is $\varepsilon > 0$ such that every graph on $n$ vertices with no induced copy of $H$ has a clique or an independent set of size at least $n^{\varepsilon}$. It is open.
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-erdos-hajnal-conjecture-1989).

**Erdős-Ko-Rado theorem**
If $n \ge 2k$, an intersecting family of $k$-subsets of $[n]$ has at most $\binom{n-1}{k-1}$ members, the size of a star. Katona's circle gives a short proof.
See [Chapter 18](18-Extremal-Combinatorics.md#184-the-erdos-ko-rado-theorem).

**Erdős-Rényi random graph**
The random graph $G(n, p)$ on vertices $1, \ldots, n$ in which each of the $\binom{n}{2}$ possible edges is present with probability $p$, independently.
See [Chapter 17](17-The-Probabilistic-Method.md#the-models).

**Erdős's Ramsey lower bound**
If $\binom{n}{k} 2^{1 - \binom{k}{2}} < 1$ then $R(k, k) > n$; in particular $R(k, k) > \lfloor 2^{k/2} \rfloor$ for $k \ge 3$ (Erdős, 1947). It shows that a random colouring has no large monochromatic clique.
See [Chapter 16](16-Ramsey-Theory.md#164-erdoss-lower-bound-by-counting).

**Erdős-Stone theorem**
For all $r$, $t$ and $\varepsilon > 0$, every large graph with at least $\left(1 - \frac{1}{r} + \varepsilon\right)\frac{n^2}{2}$ edges contains the complete $(r+1)$-partite graph with $t$ vertices in each part. It gives the extremal number of every non-bipartite graph up to $o(n^2)$.
See [Chapter 18](18-Extremal-Combinatorics.md#186-the-erdos-stone-theorem).

**Erdős-Szekeres theorem**
Every sequence of $rs + 1$ different real numbers contains an increasing subsequence of length $r + 1$ or a decreasing subsequence of length $s + 1$ (1935). The bound is best possible.
See [Chapter 4](04-The-Pigeonhole-Principle.md#43-monotone-subsequences-erdos-szekeres).

**Euler characteristic**
The number $V - E + F$ for a graph drawn on a surface. It is 2 for the plane and the sphere, and smaller for surfaces with handles.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#eulers-formula).

**Euler circuit**
A closed trail that uses every edge of a graph exactly once; a graph with one is Eulerian. A connected multigraph has one if and only if every degree is even.
See [Chapter 10](10-Graphs.md#the-bridges).

**Euler trail**
A trail that uses every edge exactly once. A connected multigraph has one that is not closed if and only if exactly two vertices have odd degree.
See [Chapter 10](10-Graphs.md#the-bridges).

**Euler's 36 officers problem**
Euler's 1782 puzzle asking for a pair of orthogonal Latin squares of order 6. None exists (Tarry, 1900), but Euler's conjecture that none exists for any $n \equiv 2 \pmod 4$ was false for every such $n$ except 2 and 6 (Bose, Shrikhande and Parker, 1959-1960).
See [Chapter 19](19-Designs-and-Codes.md#eulers-conjecture-and-its-fall).

**Euler's distinct-odd theorem**
The number of partitions of $n$ into distinct parts equals the number of partitions of $n$ into odd parts, since $\prod_k (1 + x^k) = \prod_k \frac{1}{1 - x^{2k-1}}$.
See [Chapter 7](07-Generating-Functions.md#partitions).

**Euler's formula (planar graphs)**
For every connected plane graph with $V$ vertices, $E$ edges and $F$ faces, $V - E + F = 2$. It implies $E \le 3V - 6$ for simple planar graphs with $V \ge 3$.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#eulers-formula).

**Euler's phi function**
The number $\varphi(n)$ of numbers in $1, \dots, n$ coprime to $n$. By inclusion-exclusion, $\varphi(n) = n \prod_{p \mid n} \left(1 - \frac{1}{p}\right)$.
See [Chapter 5](05-Inclusion-Exclusion.md#55-eulers-phi-function-again).

**Event**
A subset $A$ of a probability space; $P(A)$ is the total probability of its outcomes. If $P(A) > 0$ then $A$ is not empty.
See [Chapter 17](17-The-Probabilistic-Method.md#the-language).

**Excluded minors**
For a minor-closed family, the graphs not in the family all of whose proper minors are in it. By the graph minor theorem there are only finitely many; for planar graphs they are $K_5$ and $K_{3,3}$.
See [Chapter 20](20-Where-Combinatorics-Goes.md#204-the-graph-minor-theorem).

**Existence proof**
A proof that an object exists which does not say how to find it, also called non-constructive. Pigeonhole and probabilistic arguments are typical.
See [Chapter 4](04-The-Pigeonhole-Principle.md#41-the-simple-and-strong-forms).

**Expectation**
The mean $E[X] = \sum_{\omega} P(\omega) X(\omega)$ of a random variable. Some outcome has $X \ge E[X]$ and some has $X \le E[X]$.
See [Chapter 17](17-The-Probabilistic-Method.md#172-linearity-of-expectation).

**Experimental design**
The planning of experiments so that treatments are compared fairly, developed by R. A. Fisher; Latin squares and block designs are its backbone.
See [Chapter 19](19-Designs-and-Codes.md#eulers-conjecture-and-its-fall).

**Exponential formula**
If $\hat{C}(x)$ is the exponential generating function of "connected" structures, then the structures that are sets of connected ones have exponential generating function $\exp(\hat{C}(x))$. For example, permutations are sets of cycles.
See [Chapter 7](07-Generating-Functions.md#the-exponential-formula).

**Exponential generating function**
The series $\hat{A}(x) = \sum_n a_n \frac{x^n}{n!}$ of a sequence, suited to labelled structures. The product of two EGFs counts ways to split the labels and put one structure on each part.
See [Chapter 7](07-Generating-Functions.md#74-exponential-generating-functions).

**Extremal number**
The largest number $\operatorname{ex}(n, H)$ of edges in a graph on $n$ vertices that contains no copy of $H$. Mantel's theorem gives $\operatorname{ex}(n, K_3) = \lfloor n^2/4 \rfloor$.
See [Chapter 18](18-Extremal-Combinatorics.md#the-extremal-number).

## F

**Face**
One of the connected regions into which a plane graph cuts the plane; exactly one, the outer face, is unbounded. The degree of a face is the number of edge-sides along its boundary.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#faces).

**Factorial**
For $n \ge 1$, $n! = n(n-1)\cdots 2 \cdot 1$, the number of permutations of $n$ different objects; $0! = 1$, since there is one way to arrange nothing.
See [Chapter 2](02-Permutations-and-Combinations.md#21-factorials-and-arrangements).

**Factorial moment**
The average of $X^{\underline{k}}$ for a random variable $X$, its $k$-th factorial moment. Stirling numbers convert between factorial moments and ordinary moments.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#stirling-numbers-in-probability).

**Falling factorial**
$x^{\underline{k}} = x(x-1)\cdots(x-k+1)$, read "$x$ to the $k$ falling". For whole $n$, $n^{\underline{k}}$ counts the one-to-one functions from a $k$-set to an $n$-set.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#two-kinds-of-powers).

**Fano plane**
The smallest projective plane, of order 2: 7 points and 7 lines of 3 points each. Its lines form a 3-uniform hypergraph that cannot be 2-coloured.
See [Chapter 19](19-Designs-and-Codes.md#192-finite-projective-planes).

**Fáry's theorem**
Every planar graph can be drawn in the plane with straight edges and no crossings (Wagner 1936, Fáry 1948).
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#kuratowskis-theorem).

**Fault tolerance**
The ability of a network to stay connected when some nodes or links fail. By Menger's theorem, a $k$-connected network survives the failure of any $k - 1$ nodes.
See [Chapter 13](13-Matchings-and-Flows.md#connectivity).

**Ferrers diagram**
The picture of a partition of $n$ as left-justified rows of dots, one row for each part, from largest to smallest.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#ferrers-diagrams-and-conjugation).

**Fibonacci numbers**
The sequence $F_0 = 0$, $F_1 = 1$, $F_n = F_{n-1} + F_{n-2}$. It counts tilings of a strip by squares and dominoes, compositions into 1s and 2s, and binary strings with no two adjacent 1s.
See [Chapter 6](06-Recurrences.md#tilings).

**Fibonacci tilings**
Tilings of a board of $n$ cells by squares and dominoes, counted by $F_{n+1}$. Counting them two ways proves Fibonacci identities.
See [Chapter 6](06-Recurrences.md#64-fibonacci-identities-by-tiling).

**Finite projective plane**
A finite set of points with subsets called lines, such that two points lie on exactly one line, two lines meet in exactly one point, and there are four points with no three on a line. A plane of order $n$ has $n^2 + n + 1$ points and $n^2 + n + 1$ lines, with $n + 1$ points on each line.
See [Chapter 19](19-Designs-and-Codes.md#192-finite-projective-planes).

**First moment method**
If a counting variable $X$ has $E[X] \to 0$, then almost surely $X = 0$, by Markov's inequality.
See [Chapter 17](17-The-Probabilistic-Method.md#174-the-second-moment-method).

**First-return decomposition**
Splitting a nonempty balanced bracket sequence as $(\,A\,)\,B$ with $A$ and $B$ balanced, at the point where the path first returns to the diagonal. It gives the Catalan recurrence.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#the-catalan-recurrence).

**Fisher's inequality**
In every $(v, k, \lambda)$ design, $b \ge v$: there are at least as many blocks as points (R. A. Fisher, 1940).
See [Chapter 19](19-Designs-and-Codes.md#193-block-designs-and-fishers-inequality).

**Five colour theorem**
Every planar graph can be properly coloured with 5 colours (Heawood, 1890). The proof uses a vertex of degree at most 5 and Kempe chains.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#124-the-five-colour-theorem).

**Fixed point**
An element $i$ with $\sigma(i) = i$ under a permutation $\sigma$: a cycle of length 1.
See [Chapter 5](05-Inclusion-Exclusion.md#53-derangements-and-1e).

**Flow**
An assignment of a number $f(u, v)$ to each edge of a network, between 0 and the edge's capacity, such that at every vertex other than the source and the sink the flow in equals the flow out. Its value is the net amount leaving the source.
See [Chapter 13](13-Matchings-and-Flows.md#flows).

**Ford-Fulkerson method**
Repeatedly find an augmenting path in the residual network and push flow along it, until none is left. With whole-number capacities it ends with an integer maximum flow.
See [Chapter 13](13-Matchings-and-Flows.md#the-algorithm-and-whole-numbers).

**Forest**
A graph with no cycles. Its components are trees, and a forest with $n$ vertices and $k$ components has $n - k$ edges.
See [Chapter 11](11-Trees.md#trees-and-forests).

**Formal power series**
An infinite list of coefficients written as a series $\sum a_n x^n$, added and multiplied like polynomials with no question of convergence. Such series form a ring.
See [Chapter 7](07-Generating-Functions.md#formal-power-series).

**Forward difference**
$\Delta f(x) = f(x+1) - f(x)$. It acts on falling factorials as the derivative acts on powers: $\Delta x^{\underline{k}} = k\,x^{\underline{k-1}}$.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#two-kinds-of-powers).

**Four colour theorem**
Every planar graph is 4-colourable; equivalently, any map in the plane can be coloured with four colours so that countries sharing a border differ. Proved by Appel and Haken in 1976 with a computer.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#125-the-four-colour-theorem).

**Fractional part**
The number $\{y\} = y - \lfloor y \rfloor$, which lies in $[0, 1)$.
See [Chapter 4](04-The-Pigeonhole-Principle.md#44-dirichlets-approximation-theorem).

**Function**
A rule $f$ that assigns to each element of a set $X$ one value in a set $Y$. With $|X| = n$ and $|Y| = k$ there are $k^n$ functions.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Fuss-Catalan numbers**
The numbers $\frac{1}{(m-1)n + 1}\binom{mn}{n}$, counting trees with $n$ internal nodes in which every internal node has exactly $m$ children. For $m = 2$ they are the Catalan numbers.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#fuss-catalan-numbers).

## G

**Gale-Shapley theorem**
The deferred acceptance algorithm stops after at most $n^2$ proposals with a perfect, stable matching (1962). So a stable matching always exists.
See [Chapter 13](13-Matchings-and-Flows.md#why-it-works).

**Generating function**
A power series whose coefficients are the terms of a sequence, so that the whole sequence can be handled as one object. The two main kinds are ordinary and exponential generating functions.
See [Chapter 7](07-Generating-Functions.md#71-power-series-as-clotheslines).

**Giant component**
For $p = c/n$ with $c > 1$, the random graph $G(n, p)$ almost surely has a single component with about $\beta n$ vertices, while all other components are small.
See [Chapter 17](17-The-Probabilistic-Method.md#the-evolution-of-gn-p).

**Girth**
The length of the shortest cycle of a graph. Erdős proved in 1959 that there are graphs with both girth and chromatic number as large as you like.
See [Chapter 17](17-The-Probabilistic-Method.md#high-girth-and-high-chromatic-number).

**Golden ratio**
The number $\varphi = \frac{1 + \sqrt5}{2} \approx 1.618$, the larger root of $r^2 = r + 1$. The Fibonacci numbers grow like $\varphi^n/\sqrt5$.
See [Chapter 6](06-Recurrences.md#binets-formula).

**Graph**
A set $V$ of vertices and a set $E$ of edges, each edge joining two vertices. Unless said otherwise graphs are simple: no loops and at most one edge between two vertices.
See [Chapter 10](10-Graphs.md#the-idea).

**Graph minor theorem**
In every infinite sequence of finite graphs there are $i < j$ such that $G_i$ is a minor of $G_j$ (Robertson and Seymour). So every minor-closed family is described by a finite list of excluded minors.
See [Chapter 20](20-Where-Combinatorics-Goes.md#204-the-graph-minor-theorem).

**Gray code**
A list of all binary strings of length $n$ in which consecutive strings differ in one digit. It is a Hamiltonian path (or cycle) in the cube graph $Q_n$.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#easy-examples).

**Green-Tao theorem**
The primes contain arithmetic progressions of every length (Green and Tao, 2004). The proof is a transference principle from Szemerédi's theorem.
See [Chapter 20](20-Where-Combinatorics-Goes.md#primes-in-progression).

## H

**Hadamard transform**
A fast transform that compares a received word with all $2^{m+1}$ codewords of $RM(1, m)$ in about $m \cdot 2^m$ additions. It made decoding practical on Mariner 9.
See [Chapter 19](19-Designs-and-Codes.md#first-order-reed-muller-codes).

**Hadwiger's conjecture**
Every graph with no $K_t$ minor can be properly coloured with $t - 1$ colours. It is proved for $t \le 6$ and open for $t \ge 7$.
See [Chapter 20](20-Where-Combinatorics-Goes.md#hadwigers-conjecture-1943).

**Hall's condition**
For a bipartite graph with sides $X$ and $Y$: $|N(S)| \ge |S|$ for every subset $S$ of $X$, where $N(S)$ is the neighbourhood of $S$.
See [Chapter 13](13-Matchings-and-Flows.md#132-halls-marriage-theorem).

**Hall's marriage theorem**
A bipartite graph with sides $X$ and $Y$ has a matching covering all of $X$ if and only if Hall's condition holds. It gives perfect matchings in regular bipartite graphs and extends Latin rectangles.
See [Chapter 13](13-Matchings-and-Flows.md#132-halls-marriage-theorem).

**Hamiltonian cycle**
A cycle that passes through every vertex of a graph exactly once; a graph with one is Hamiltonian. Deciding whether a graph has one is NP-complete.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#141-hamiltonian-cycles).

**Hamiltonian path**
A path that passes through every vertex exactly once but need not return. Every tournament has one (Rédei, 1934).
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#141-hamiltonian-cycles).

**Hamming bound**
A binary code of length $n$ with minimum distance at least $2t + 1$ has $|C| \sum_{i=0}^{t} \binom{n}{i} \le 2^n$, because the balls of radius $t$ around codewords are disjoint (Hamming, 1950).
See [Chapter 19](19-Designs-and-Codes.md#the-hamming-bound-and-perfect-codes).

**Hamming code**
The $[7, 4]$ code with 16 codewords of 7 bits, check bits in positions 1, 2 and 4, and minimum distance 3. Its syndrome gives the position of a single flipped bit, and it is perfect.
See [Chapter 19](19-Designs-and-Codes.md#the-hamming-7-4-code).

**Hamming distance**
The number $d(x, y)$ of positions in which two strings of the same length differ. It satisfies the triangle inequality.
See [Chapter 19](19-Designs-and-Codes.md#distance-and-correction).

**Handshake lemma**
In every graph the sum of the degrees is twice the number of edges. So the number of vertices of odd degree is even.
See [Chapter 10](10-Graphs.md#102-the-handshake-lemma).

**Harmonic number**
The number $H_n = 1 + \frac12 + \dots + \frac1n$, about $\ln n$. A random permutation of $n$ elements has on average $H_n$ cycles.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#how-many-cycles-does-a-random-permutation-have).

**Height (of a poset)**
The size of the largest chain in a poset. Mirsky's theorem splits the poset into that many antichains.
See [Chapter 18](18-Extremal-Combinatorics.md#185-dilworth-and-mirsky).

**Held-Karp algorithm**
A dynamic-programming algorithm for the travelling salesman problem that computes the shortest path through each set of cities ending at each city, in about $n^2 2^n$ steps.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#dynamic-programming-held-karp).

**Hierholzer's method**
A way to find an Euler circuit: follow unused edges until you return to the start, then splice in further closed trails from vertices that still have unused edges.
See [Chapter 10](10-Graphs.md#finding-the-circuit-hierholzers-method).

**Hockey stick identity**
$\sum_{m=k}^{n} \binom{m}{k} = \binom{n+1}{k+1}$, proved by sorting the $(k+1)$-subsets of $\{1, \dots, n+1\}$ by their largest element.
See [Chapter 3](03-Binomial-Coefficients.md#33-identities-by-counting-two-ways).

**Homogeneous recurrence**
A linear recurrence with no extra term, $a_n = c_1a_{n-1} + \dots + c_ka_{n-k}$. Its solutions form a vector space of dimension $k$.
See [Chapter 6](06-Recurrences.md#62-linear-recurrences-with-constant-coefficients).

**Hook length**
The number $h(b)$ of boxes in the hook of a box $b$ of a Young diagram: the box itself, all boxes to its right in its row, and all boxes below it in its column.
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-hook-length-formula).

**Hook length formula**
The number of standard Young tableaux of shape $\lambda \vdash n$ is $n!$ divided by the product of the hook lengths of all boxes (Frame, Robinson and Thrall, 1954).
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-hook-length-formula).

**Hook walk**
A random process on a Young diagram, found by Nijenhuis and Wilf, whose outcome probabilities give a probabilistic proof of the hook length formula.
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-hook-length-formula).

**Hypergraph**
A $k$-uniform hypergraph is a collection of $k$-element subsets, called edges, of a vertex set. It is 2-colourable (has property B) if the vertices can be coloured red and blue with no monochromatic edge.
See [Chapter 17](17-The-Probabilistic-Method.md#uses).

**Hypergraph Ramsey theorem**
For any $r$, any number of colours and any $k$, every colouring of the $r$-element subsets of a large enough set has $k$ elements all of whose $r$-subsets have the same colour.
See [Chapter 16](16-Ramsey-Theory.md#infinite-and-higher-versions).

## I

**Incidence matrix**
For a design, the $v \times b$ matrix with a 1 where a point lies in a block and 0 otherwise. For a directed graph (Chapter 11) it has $+1$ and $-1$ at the two ends of each edge.
See [Chapter 19](19-Designs-and-Codes.md#193-block-designs-and-fishers-inequality).

**Inclusion-exclusion**
The formula $|A_1 \cup \dots \cup A_n| = \sum_{\emptyset \ne S} (-1)^{|S|+1} |A_S|$, where $A_S$ is the intersection of the $A_i$ with $i \in S$. Its "none of them" form counts the elements of the universe with none of the properties.
See [Chapter 5](05-Inclusion-Exclusion.md#52-the-general-formula).

**Independent set**
A set of vertices with no edge between any two of them; $\alpha(G)$ is the largest size of one. Each colour class of a proper colouring is an independent set.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#123-colouring-and-the-chromatic-number).

**Indicator variable**
For an event $A$, the random variable $I_A$ that is 1 if $A$ happens and 0 otherwise, so $E[I_A] = P(A)$. Writing a count as a sum of indicators makes its expectation easy.
See [Chapter 17](17-The-Probabilistic-Method.md#172-linearity-of-expectation).

**Induced subgraph**
A subgraph that keeps every edge of $G$ between its chosen vertices.
See [Chapter 10](10-Graphs.md#subgraphs-complements-and-how-many-graphs-there-are).

**Infinite Ramsey theorem**
If the edges of the complete graph on the natural numbers are coloured with finitely many colours, there is an infinite set of vertices all of whose edges have the same colour.
See [Chapter 16](16-Ramsey-Theory.md#infinite-and-higher-versions).

**Initial values**
The first few terms of a sequence, which together with a recurrence determine every term.
See [Chapter 6](06-Recurrences.md#61-setting-up-recurrences).

**Injective**
A function is injective (one-to-one) if different elements go to different elements: $f(a) = f(a')$ only when $a = a'$.
See [Chapter 1](01-Counting-Principles.md#14-bijections-the-key-idea).

**Integer partition**
A way of writing a positive integer $n$ as a sum of positive integers, the parts, where order does not matter. The number of them is the partition number $p(n)$, with $p(5) = 7$.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#definitions-and-small-values).

**Integrality theorem**
If all capacities in a network are integers, there is a maximum flow in which every edge carries an integer amount. It is how flows prove theorems about matchings and paths.
See [Chapter 13](13-Matchings-and-Flows.md#the-algorithm-and-whole-numbers).

**Internally vertex-disjoint paths**
Paths from $u$ to $v$ that share no vertex other than $u$ and $v$.
See [Chapter 13](13-Matchings-and-Flows.md#136-mengers-theorem).

**Intersecting family**
A family of sets in which every two members share at least one element.
See [Chapter 18](18-Extremal-Combinatorics.md#184-the-erdos-ko-rado-theorem).

**Invariant**
A property or number that isomorphic graphs share, such as the degree sequence or the number of triangles. Two graphs that differ in an invariant are not isomorphic.
See [Chapter 10](10-Graphs.md#when-are-two-graphs-the-same).

**Involution**
A permutation with $\sigma(\sigma(i)) = i$ for all $i$, so all its cycles have length 1 or 2.
See [Chapter 7](07-Generating-Functions.md#the-exponential-formula).

**Isolated vertex**
A vertex of degree 0.
See [Chapter 10](10-Graphs.md#the-idea).

**Isomers**
Different molecules with the same chemical formula, such as butane and isobutane for $\mathrm{C_4H_{10}}$. Pólya's theorem counts structural isomers.
See [Chapter 15](15-Counting-with-Symmetry.md#155-chemistry-counting-isomers).

**Isomorphic graphs**
Graphs $G$ and $H$ for which there is a bijection $f$ between their vertex sets with $uv$ an edge of $G$ exactly when $f(u)f(v)$ is an edge of $H$. The bijection is an isomorphism.
See [Chapter 10](10-Graphs.md#when-are-two-graphs-the-same).

## J

**Jordan curve theorem**
A closed curve in the plane without self-crossings separates the plane into an inside and an outside.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#eulers-formula).

## K

**Karatsuba multiplication**
Multiplying two $n$-digit numbers with three half-size multiplications instead of four, so $T(n) = 3T(n/2) + O(n)$ and $T(n) = \Theta(n^{\log_2 3})$.
See [Chapter 6](06-Recurrences.md#karatsuba-multiplication).

**Katona's circle**
The proof of the Erdős-Ko-Rado theorem that arranges $1, \ldots, n$ in a cyclic order and counts the arcs of length $k$ in an intersecting family: at most $k$ per cyclic order.
See [Chapter 18](18-Extremal-Combinatorics.md#katonas-circle).

**$k$-connected graph**
A graph with more than $k$ vertices that stays connected whenever fewer than $k$ vertices are removed. By Menger's theorem, any two vertices are then joined by $k$ internally vertex-disjoint paths.
See [Chapter 13](13-Matchings-and-Flows.md#connectivity).

**Kempe chain**
A component of the subgraph induced by the vertices of two colours $i$ and $j$ in a proper colouring. Swapping $i$ and $j$ inside one chain gives another proper colouring.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#five-colours-with-kempe-chains).

**Kirkman's schoolgirl problem**
Fifteen schoolgirls walk in five rows of three on seven days; arrange it so that no two walk in the same row twice (Kirkman, 1850). A solution is a resolvable Steiner triple system of order 15.
See [Chapter 19](19-Designs-and-Codes.md#kirkmans-schoolgirls).

**Kneser graph**
The graph $KG(n, k)$ whose vertices are the $k$-subsets of $[n]$, joined when disjoint. An intersecting family is an independent set in it.
See [Chapter 18](18-Extremal-Combinatorics.md#katonas-circle).

**König's criterion**
A graph is bipartite if and only if it has no cycle of odd length (Dénes König).
See [Chapter 10](10-Graphs.md#konigs-criterion).

**König's theorem**
In a bipartite graph, the largest matching has the same size as the smallest vertex cover (König and Egerváry, 1931). In matrix form: the most 1s with no two in a line equals the fewest lines covering all 1s.
See [Chapter 13](13-Matchings-and-Flows.md#133-konigs-theorem).

**Königsberg bridges**
Euler's 1736 problem of walking over the seven bridges of Königsberg exactly once each. It has no solution because all four land areas have odd degree.
See [Chapter 10](10-Graphs.md#the-bridges).

**$k$-regular graph**
A graph in which every vertex has degree $k$.
See [Chapter 10](10-Graphs.md#the-idea).

**Kruskal's algorithm**
To find a minimum spanning tree, go through the edges from lightest to heaviest and keep each one that does not close a cycle with the edges already kept (Kruskal, 1956).
See [Chapter 11](11-Trees.md#the-problem).

**Kummer's theorem**
The exact power of a prime $p$ dividing $\binom{m+n}{m}$ equals the number of carries when $m$ and $n$ are added in base $p$ (Kummer, 1852).
See [Chapter 3](03-Binomial-Coefficients.md#35-lucas-theorem-and-pascals-triangle-mod-2).

**Kuratowski's theorem**
A graph is planar if and only if it contains no subdivision of $K_5$ or of $K_{3,3}$ as a subgraph (1930).
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#kuratowskis-theorem).

## L

**Labelled graph**
A graph on the fixed vertex set $\{1, \dots, n\}$, where graphs with different edge sets count as different even if they look alike. There are $2^{\binom{n}{2}}$ of them.
See [Chapter 10](10-Graphs.md#subgraphs-complements-and-how-many-graphs-there-are).

**Labelled structure**
A structure built on distinguishable atoms, such as people, numbered points or positions in a permutation. Labelled structures are counted with exponential generating functions.
See [Chapter 7](07-Generating-Functions.md#74-exponential-generating-functions).

**Lah numbers**
The numbers that convert rising factorials into falling factorials, a third family beside the two kinds of Stirling numbers.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#from-falling-factorials-to-powers-and-orthogonality).

**Laplacian matrix**
The matrix $L = D - A$ of a graph, where $D$ is the diagonal matrix of degrees and $A$ is the adjacency matrix. By the matrix-tree theorem it counts spanning trees.
See [Chapter 11](11-Trees.md#the-laplacian).

**Latin rectangle**
A $k \times n$ grid, with $k < n$, filled with the symbols $1, \dots, n$ so that no symbol repeats in a row or a column. Hall's theorem shows that every Latin rectangle extends to a Latin square.
See [Chapter 13](13-Matchings-and-Flows.md#using-hall).

**Latin square**
An $n \times n$ grid filled with $n$ symbols so that each symbol appears exactly once in each row and once in each column. Its size $n$ is its order.
See [Chapter 19](19-Designs-and-Codes.md#191-latin-squares-and-orthogonality).

**Lattice path**
A route from one lattice point to another made of unit steps, each east $E = (1, 0)$ or north $N = (0, 1)$. There are $\binom{m+n}{m}$ lattice paths from $(0, 0)$ to $(m, n)$.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#81-lattice-paths).

**Lattice point**
A point $(x, y)$ of the plane with whole-number coordinates.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#81-lattice-paths).

**Leaf**
A vertex of degree 1, also called a pendant vertex. Every tree with at least 2 vertices has at least 2 leaves.
See [Chapter 10](10-Graphs.md#the-idea).

**Legendre's formula (primes)**
The formula $\pi(x) - \pi(\sqrt{x}) + 1 = \sum_{d \mid P} \mu(d) \lfloor x/d \rfloor$, where $P$ is the product of the primes up to $\sqrt{x}$ (Legendre, around 1800). It is the sieve of Eratosthenes written as an inclusion-exclusion.
See [Chapter 5](05-Inclusion-Exclusion.md#the-sieve-of-eratosthenes-counted).

**Length (of a code)**
The number $n$ of bits in each codeword of a binary code.
See [Chapter 19](19-Designs-and-Codes.md#distance-and-correction).

**Length (of a walk)**
The number of edges of a walk, path or cycle, not the number of vertices.
See [Chapter 10](10-Graphs.md#getting-from-here-to-there).

**Linear code**
A code in which the XOR (sum mod 2) of two codewords is again a codeword. Its minimum distance is the smallest number of 1s in a nonzero codeword.
See [Chapter 19](19-Designs-and-Codes.md#the-hamming-7-4-code).

**Linear recurrence with constant coefficients**
A recurrence $a_n = c_1a_{n-1} + \dots + c_ka_{n-k} + g(n)$ of order $k$ with fixed numbers $c_i$. It is solved through its characteristic equation, plus a particular solution when $g \ne 0$.
See [Chapter 6](06-Recurrences.md#62-linear-recurrences-with-constant-coefficients).

**Linearity of expectation**
$E[c_1X_1 + \dots + c_mX_m] = c_1E[X_1] + \dots + c_mE[X_m]$ for any random variables, independent or not.
See [Chapter 17](17-The-Probabilistic-Method.md#172-linearity-of-expectation).

**Log-concave sequence**
A sequence with $a_i^2 \ge a_{i-1}a_{i+1}$ for all $i$. June Huh proved that the absolute values of the coefficients of every chromatic polynomial form one.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#roots-and-a-theorem-of-the-frontier).

**Lovász local lemma**
If events $A_1, \ldots, A_N$ each have probability at most $p$, with a dependency graph of maximum degree at most $d$, and $e\,p\,(d+1) \le 1$, then with positive probability none of them happens.
See [Chapter 17](17-The-Probabilistic-Method.md#175-the-lovasz-local-lemma).

**Lucas' theorem**
For a prime $p$, $\binom{n}{k} \equiv \prod_i \binom{n_i}{k_i} \pmod p$, where $n_i$ and $k_i$ are the base-$p$ digits of $n$ and $k$ (1878). For $p = 2$ it explains the Sierpinski pattern in Pascal's triangle.
See [Chapter 3](03-Binomial-Coefficients.md#35-lucas-theorem-and-pascals-triangle-mod-2).

**LYM inequality**
For an antichain $\mathcal{F}$ of subsets of $[n]$, $\sum_{A \in \mathcal{F}} 1/\binom{n}{|A|} \le 1$ (Lubell, Yamamoto, Meshalkin). Sperner's theorem follows at once.
See [Chapter 18](18-Extremal-Combinatorics.md#the-lym-inequality).

## M

**Mantel's theorem**
A triangle-free graph on $n$ vertices has at most $\lfloor n^2/4 \rfloor$ edges, and only $K_{\lfloor n/2 \rfloor, \lceil n/2 \rceil}$ has that many (1907).
See [Chapter 18](18-Extremal-Combinatorics.md#181-mantels-theorem).

**Markov's inequality**
If $X \ge 0$ and $a > 0$, then $P(X \ge a) \le E[X]/a$.
See [Chapter 17](17-The-Probabilistic-Method.md#174-the-second-moment-method).

**Master theorem**
For $T(n) = aT(n/b) + f(n)$ with $e = \log_b a$: $T(n) = \Theta(n^e)$ if $f$ grows more slowly than $n^e$ by a power, $\Theta(n^e \log n)$ if $f = \Theta(n^e)$, and $\Theta(f(n))$ if $f$ grows faster by a power and is regular.
See [Chapter 6](06-Recurrences.md#the-master-theorem).

**Matching**
A set of edges of a graph with no vertex in common. It is maximal if no edge can be added, maximum if no matching is larger, and perfect if it covers every vertex.
See [Chapter 13](13-Matchings-and-Flows.md#131-matchings).

**Matrix-tree theorem**
Deleting any row $i$ and column $i$ of the Laplacian of a graph leaves a matrix whose determinant is the number of spanning trees (Kirchhoff, 1847).
See [Chapter 11](11-Trees.md#115-the-matrix-tree-theorem).

**Max-flow min-cut theorem**
In every network, the largest value of a flow equals the smallest capacity of an $s$-$t$ cut (Ford and Fulkerson; Elias, Feinstein and Shannon; 1956).
See [Chapter 13](13-Matchings-and-Flows.md#135-networks-and-the-max-flow-min-cut-theorem).

**Maximum distance separable**
A code that meets the Singleton bound, with minimum distance $n - k + 1$. Reed-Solomon codes are maximum distance separable.
See [Chapter 19](19-Designs-and-Codes.md#reed-solomon-codes).

**Max-min theorem**
A theorem saying that the maximum of one kind of object equals the minimum of another, such as König's, max-flow min-cut, Menger's and Dilworth's. The easy half is weak duality; equality is the deep part.
See [Chapter 13](13-Matchings-and-Flows.md#the-family-of-max-min-theorems).

**Ménage problem**
The number of ways to seat $n$ married couples around a round table, men and women alternating, with no one next to their own spouse. Touchard's formula solves it with rook polynomials.
See [Chapter 5](05-Inclusion-Exclusion.md#the-menage-problem).

**Menger's theorem**
The largest number of edge-disjoint $u$-$v$ paths equals the smallest number of edges whose removal separates $u$ from $v$. The vertex version, for non-adjacent $u$ and $v$, does the same with internally vertex-disjoint paths and vertices.
See [Chapter 13](13-Matchings-and-Flows.md#136-mengers-theorem).

**Merge sort**
Sort each half of a list recursively, then merge the two sorted halves. Its running time satisfies $T(n) = 2T(n/2) + n$, so it is $\Theta(n \log n)$.
See [Chapter 6](06-Recurrences.md#merge-sort).

**Metric TSP**
A travelling salesman instance whose distances satisfy the triangle inequality $d(x, z) \le d(x, y) + d(y, z)$. For it the tree method is within a factor 2 of optimal and Christofides' algorithm within $3/2$.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#metric-tsp-and-the-tree-method).

**Minimum distance**
The smallest Hamming distance between two different codewords of a code. A code with minimum distance $d \ge 2t + 1$ corrects any $t$ errors.
See [Chapter 19](19-Designs-and-Codes.md#distance-and-correction).

**Minimum spanning tree**
A spanning tree of a weighted graph whose total edge weight is as small as possible. Kruskal's and Prim's greedy algorithms find one.
See [Chapter 11](11-Trees.md#114-minimum-spanning-trees).

**Minor**
A graph obtained from $G$ by deleting edges and vertices and contracting edges. Wagner's theorem says a graph is planar if and only if it has neither $K_5$ nor $K_{3,3}$ as a minor.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#kuratowskis-theorem).

**Minor-closed family**
A family of graphs in which every minor of a member is a member, such as the planar graphs or the forests.
See [Chapter 20](20-Where-Combinatorics-Goes.md#204-the-graph-minor-theorem).

**Mirsky's theorem**
A finite poset can be split into $h$ antichains, where $h$ is its height (1971). It is the easy dual of Dilworth's theorem and implies Erdős-Szekeres.
See [Chapter 18](18-Extremal-Combinatorics.md#185-dilworth-and-mirsky).

**MOLS**
Mutually orthogonal Latin squares: a set of Latin squares of the same order, any two of which are orthogonal. There are at most $n - 1$ MOLS of order $n$, and exactly $n - 1$ when $n$ is a prime power.
See [Chapter 19](19-Designs-and-Codes.md#at-most-n-1).

**Monochromatic**
Having all its edges (or elements) of the same colour, as in a monochromatic triangle.
See [Chapter 4](04-The-Pigeonhole-Principle.md#45-a-first-ramsey-fact).

**Monotone increasing property**
A graph property that adding edges cannot destroy, such as containing a triangle or being connected. Every such property has a threshold.
See [Chapter 17](17-The-Probabilistic-Method.md#the-models).

**Motzkin numbers**
The numbers $M_n$ of Motzkin paths: paths from $(0, 0)$ to $(n, 0)$ with steps up, down and level that never go below the axis. They begin $1, 1, 2, 4, 9, 21$.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#motzkin-numbers).

**Multigraph**
A graph that may have repeated edges between the same two vertices and loops from a vertex to itself.
See [Chapter 10](10-Graphs.md#the-idea).

**Multinomial coefficient**
The number $\binom{n}{k_1, \dots, k_m} = \frac{n!}{k_1! \cdots k_m!}$, with $k_1 + \dots + k_m = n$: the number of arrangements of a multiset with $k_i$ copies of kind $i$. They are the coefficients in the multinomial theorem.
See [Chapter 3](03-Binomial-Coefficients.md#34-the-multinomial-theorem).

**Multinomial theorem**
$(x_1 + \dots + x_m)^n = \sum \binom{n}{k_1, \dots, k_m} x_1^{k_1} \cdots x_m^{k_m}$, the sum over all $k_1 + \dots + k_m = n$.
See [Chapter 3](03-Binomial-Coefficients.md#34-the-multinomial-theorem).

**Multiset**
A collection in which repetition is allowed, like $\{A, A, A, B, N, N\}$. A multiset of $n$ objects with $n_i$ copies of kind $i$ has $\frac{n!}{n_1! \cdots n_k!}$ arrangements.
See [Chapter 2](02-Permutations-and-Combinations.md#22-permutations-of-a-multiset).

**Mutually independent**
An event $A$ is mutually independent of events $B_1, \ldots, B_m$ if $P(A \mid C) = P(A)$ for every event $C$ built from the $B_j$ by intersections and complements.
See [Chapter 17](17-The-Probabilistic-Method.md#175-the-lovasz-local-lemma).

## N

**Narayana numbers**
The numbers $N(n, k) = \frac{1}{n}\binom{n}{k}\binom{n}{k-1}$ of Dyck paths of semilength $n$ with exactly $k$ peaks. Each row sums to the Catalan number $C_n$.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#narayana-numbers-counting-peaks).

**Necklace**
A ring of $n$ beads, each one of $k$ colours, where rings that differ by a rotation count as the same. Burnside's lemma gives their number as $\frac{1}{n}\sum_{d \mid n} \varphi(d)\, k^{n/d}$.
See [Chapter 15](15-Counting-with-Symmetry.md#151-necklaces-again).

**Neighbourhood**
For a set $S$ of vertices, the set $N(S)$ of vertices joined to at least one member of $S$.
See [Chapter 13](13-Matchings-and-Flows.md#132-halls-marriage-theorem).

**Network**
A directed graph with a source $s$, a sink $t$ and a capacity $c(u, v) \ge 0$ on each edge.
See [Chapter 13](13-Matchings-and-Flows.md#flows).

**Non-homogeneous recurrence**
A linear recurrence with an extra term $g(n)$. Every solution is one particular solution plus a solution of the associated homogeneous recurrence.
See [Chapter 6](06-Recurrences.md#63-non-homogeneous-recurrences).

**NP**
The class of decision problems in which every "yes" answer has a certificate that can be checked in polynomial time. It contains P.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#144-p-versus-np-in-plain-words).

**NP-complete**
A problem in NP to which every problem in NP reduces. Satisfiability was the first (Cook 1971, Levin 1973); the Hamiltonian cycle problem and the TSP decision problem are others.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#reductions-and-np-completeness).

## O

**Onto function**
A function that hits every element of its target, also called surjective. The number of onto functions from an $n$-set to a $k$-set is $\sum_{j} (-1)^j \binom{k}{j}(k-j)^n = k!\,S(n, k)$.
See [Chapter 5](05-Inclusion-Exclusion.md#54-onto-functions).

**Orbit**
The set of all objects obtained from one object by the symmetries of a group. Counting objects up to symmetry is counting orbits.
See [Chapter 15](15-Counting-with-Symmetry.md#152-burnsides-lemma).

**Ordinary generating function**
The series $A(x) = \sum_n a_n x^n$ of a sequence. Products of ordinary generating functions count combinations of independent choices.
See [Chapter 7](07-Generating-Functions.md#71-power-series-as-clotheslines).

**Ore's theorem**
If a graph with $n \ge 3$ vertices has $\deg u + \deg v \ge n$ for every pair of non-adjacent vertices, it is Hamiltonian (1960). It implies Dirac's theorem.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#142-dirac-and-ore).

**Orthogonal Latin squares**
Two Latin squares of order $n$ such that, laid one on top of the other, each of the $n^2$ ordered pairs of symbols appears exactly once. Pairs exist for every $n$ except 2 and 6.
See [Chapter 19](19-Designs-and-Codes.md#191-latin-squares-and-orthogonality).

**Orthogonality relations**
The identities saying that the matrices of Stirling numbers of the second kind and of signed Stirling numbers of the first kind are inverse to each other.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#from-falling-factorials-to-powers-and-orthogonality).

## P

**P (complexity class)**
The class of decision problems that can be solved in polynomial time.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#144-p-versus-np-in-plain-words).

**P versus NP**
The open question whether every problem whose solutions can be checked quickly can also be solved quickly. Most experts believe P is not equal to NP.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#144-p-versus-np-in-plain-words).

**Paley graph**
The graph on $\mathbb{Z}/17$ joining $i$ and $j$ when $i - j$ is a nonzero square mod 17. It has no $K_4$ and no independent set of size 4, so $R(4,4) > 17$.
See [Chapter 16](16-Ramsey-Theory.md#lower-bounds-by-construction).

**Partially ordered set**
A set $P$ with a relation $\le$ that is reflexive, antisymmetric and transitive; a poset for short. The subsets of a set ordered by inclusion and the divisors of $n$ ordered by divisibility are examples.
See [Chapter 18](18-Extremal-Combinatorics.md#185-dilworth-and-mirsky).

**Particular solution**
Any one solution of a non-homogeneous recurrence, often found by guessing a form like the extra term $g(n)$.
See [Chapter 6](06-Recurrences.md#63-non-homogeneous-recurrences).

**Partition number**
The number $p(n)$ of partitions of the integer $n$, with $p(0) = 1$. Its generating function is $\prod_{k \ge 1} \frac{1}{1 - x^k}$.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#definitions-and-small-values).

**Partition of a set**
A way of cutting a set into non-empty, non-overlapping blocks whose union is the set, with no order on the blocks. It is the same as an equivalence relation on the set.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#definitions).

**Pascal's rule**
$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ for $1 \le k \le n - 1$: each entry of Pascal's triangle is the sum of the two above it.
See [Chapter 3](03-Binomial-Coefficients.md#31-pascals-triangle).

**Pascal's triangle**
The triangle of binomial coefficients, row $n$ holding $\binom{n}{0}, \dots, \binom{n}{n}$. Each row is symmetric and unimodal and sums to $2^n$.
See [Chapter 3](03-Binomial-Coefficients.md#31-pascals-triangle).

**Path (in a graph)**
A walk that does not repeat a vertex. The graph $P_n$ is a single path on $n$ vertices with $n - 1$ edges.
See [Chapter 10](10-Graphs.md#getting-from-here-to-there).

**Pattern inventory**
The sum of the weights of the orbits of colourings, where the weight of a colouring is the product of the variables of its colours. Its coefficients count the colourings up to symmetry with each colour used a given number of times.
See [Chapter 15](15-Counting-with-Symmetry.md#polyas-theorem).

**Peak (of a Dyck path)**
A place where an up-step is immediately followed by a down-step.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#narayana-numbers-counting-peaks).

**Perfect code**
A code that meets the Hamming bound exactly, so the balls around its codewords tile all strings with no gaps. The Hamming $[7, 4]$ code is perfect.
See [Chapter 19](19-Designs-and-Codes.md#the-hamming-bound-and-perfect-codes).

**Perfect matching**
A matching that covers every vertex of the graph. $K_{n,n}$ has $n!$ of them and $K_{2n}$ has $(2n-1)(2n-3)\cdots 1$.
See [Chapter 13](13-Matchings-and-Flows.md#131-matchings).

**Permanent**
The sum over all permutations $\sigma$ of $\prod_i a_{i\sigma(i)}$: the determinant without the signs. For a 0/1 matrix of a bipartite graph it counts the perfect matchings, and computing it is #P-complete (Valiant, 1979).
See [Chapter 13](13-Matchings-and-Flows.md#counting-matchings).

**Permutation**
An arrangement of $n$ different objects in a row; equivalently a bijection from a set to itself. There are $n!$ permutations of $n$ objects.
See [Chapter 2](02-Permutations-and-Combinations.md#21-factorials-and-arrangements).

**$k$-permutation**
An arrangement of $k$ of $n$ different objects in a row. There are $n^{\underline{k}} = \frac{n!}{(n-k)!}$ of them.
See [Chapter 2](02-Permutations-and-Combinations.md#21-factorials-and-arrangements).

**Petersen graph**
The graph on the 10 two-element subsets of $\{1, 2, 3, 4, 5\}$, two joined when they are disjoint. It is 3-regular with 15 edges, has no Hamiltonian cycle, and is a standard counterexample.
See [Chapter 10](10-Graphs.md#a-gallery-of-families).

**Pigeonhole principle**
If more than $n$ objects are put into $n$ boxes, some box contains at least two. The strong form: if $n_1 + \dots + n_k - k + 1$ objects go into $k$ boxes, some box $i$ gets at least $n_i$. Also called Dirichlet's box principle.
See [Chapter 4](04-The-Pigeonhole-Principle.md#41-the-simple-and-strong-forms).

**Planar graph**
A graph that can be drawn in the plane with no two edges crossing. Such a drawing is a plane graph, or planar embedding.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#drawings-without-crossings).

**Plane tree**
A rooted tree in which the children of each node are put in order (an ordered tree). Plane trees with $n + 1$ vertices are counted by $C_n$.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#non-crossing-handshakes-and-plane-trees).

**Pólya's theorem**
The pattern inventory of colourings under a group equals the cycle index with $a_i$ replaced by the power sum $p_i = x_1^i + \dots + x_k^i$ (Pólya 1937, anticipated by Redfield 1927).
See [Chapter 15](15-Counting-with-Symmetry.md#polyas-theorem).

**Polynomial time**
An algorithm runs in polynomial time if for some fixed $k$ it always finishes within about $N^k$ steps on inputs of size $N$. Polynomial time is the working meaning of "fast".
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#144-p-versus-np-in-plain-words).

**Power sums**
The polynomials $p_i = x_1^i + x_2^i + \dots + x_k^i$ that are substituted into the cycle index in Pólya's theorem.
See [Chapter 15](15-Counting-with-Symmetry.md#polyas-theorem).

**Prefix sums**
The sums $S_0 = 0$, $S_1 = a_1$, ..., $S_n = a_1 + \dots + a_n$ of the first terms of a sequence. Pigeonholing them mod $n$ shows that some consecutive terms have sum divisible by $n$.
See [Chapter 4](04-The-Pigeonhole-Principle.md#42-classic-uses).

**Prim's algorithm**
To find a minimum spanning tree, start from any vertex and repeatedly add the lightest edge joining the tree to a new vertex (Prim 1957, Jarník 1930).
See [Chapter 11](11-Trees.md#the-problem).

**Probabilistic method**
Proving that an object with some property exists by showing that a random object has it with positive probability. Erdős's 1947 Ramsey bound is the founding example.
See [Chapter 17](17-The-Probabilistic-Method.md#171-existence-by-averaging).

**Probability space**
In this book, a finite set $\Omega$ of outcomes, each with a probability, usually all equally likely.
See [Chapter 17](17-The-Probabilistic-Method.md#the-language).

**Product principle for generating functions**
If objects of type A of size $k$ are counted by $a_k$ and of type B by $b_k$, then pairs of total size $n$ are counted by the coefficient of $x^n$ in $A(x)B(x)$.
See [Chapter 7](07-Generating-Functions.md#73-making-change).

**Product rule**
If a procedure has steps with $n_1, n_2, \dots, n_k$ options, the number of options at each step not depending on earlier choices, then there are $n_1 n_2 \cdots n_k$ outcomes. In set form, $|A \times B| = |A| \cdot |B|$.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Projective plane**
See finite projective plane. For a finite field $\mathbb{F}_q$, the plane $PG(2, q)$ of lines and planes through the origin in $\mathbb{F}_q^3$ has order $q$.
See [Chapter 19](19-Designs-and-Codes.md#192-finite-projective-planes).

**Prüfer code**
The sequence of $n - 2$ labels obtained from a tree on $\{1, \dots, n\}$ by repeatedly deleting the leaf with the smallest label and writing down its neighbour. It is a bijection from trees to sequences, which proves Cayley's formula.
See [Chapter 11](11-Trees.md#the-prufer-code).

## R

**Ramsey number**
The smallest $n$, written $R(s, t)$, such that every 2-colouring of the edges of $K_n$ has an orange $K_s$ or a blue $K_t$. Known values include $R(3,3) = 6$, $R(3,4) = 9$, $R(3,5) = 14$ and $R(4,4) = 18$.
See [Chapter 16](16-Ramsey-Theory.md#162-ramseys-theorem).

**Ramsey's theorem**
For all $s, t \ge 2$ the Ramsey number $R(s, t)$ exists, with $R(s,t) \le R(s-1,t) + R(s,t-1)$ and so $R(s, t) \le \binom{s+t-2}{s-1}$ (Ramsey 1930; this form Erdős and Szekeres 1935).
See [Chapter 16](16-Ramsey-Theory.md#162-ramseys-theorem).

**Random graph**
A graph chosen at random, usually $G(n, p)$, where each possible edge is present with probability $p$ independently.
See [Chapter 17](17-The-Probabilistic-Method.md#176-random-graphs-and-thresholds).

**Random variable**
A number attached to each outcome of a probability space, such as the number of monochromatic triangles in a random colouring.
See [Chapter 17](17-The-Probabilistic-Method.md#172-linearity-of-expectation).

**Rate (of a code)**
The fraction of the bits sent that carry information. The repetition code that sends each bit three times has rate $1/3$.
See [Chapter 19](19-Designs-and-Codes.md#distance-and-correction).

**Rational generating function**
A sequence satisfies a linear recurrence $a_n = c_1a_{n-1} + \dots + c_ka_{n-k}$ exactly when its generating function is $P(x)/Q(x)$ with $Q(x) = 1 - c_1x - \dots - c_kx^k$ and $\deg P < k$. The smallest root of $Q$ fixes the growth.
See [Chapter 7](07-Generating-Functions.md#rational-generating-functions-the-general-theorem).

**Recurrence relation**
A rule that gives the $n$-th term of a sequence in terms of earlier terms, such as $a_n = a_{n-1} + a_{n-2}$. With enough initial values it determines every term.
See [Chapter 6](06-Recurrences.md#61-setting-up-recurrences).

**Recursion tree**
A picture of a divide-and-conquer recurrence as a tree of subproblems, each labelled with its cost. Summing the costs level by level solves the recurrence.
See [Chapter 6](06-Recurrences.md#merge-sort).

**Rédei's theorem**
Every tournament has a Hamiltonian path: the players can always be ranked so that each beat the next (1934).
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#tournaments-paths-always-exist).

**Reduction**
Problem A reduces to problem B if there is a polynomial-time way to turn each instance of A into an instance of B with the same answer. Then a fast algorithm for B gives one for A.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#reductions-and-np-completeness).

**Reed-Muller code**
The first-order Reed-Muller code $RM(1, m)$ consists of the value lists of all $2^{m+1}$ affine functions on $m$ bits. It has length $2^m$ and minimum distance $2^{m-1}$; $RM(1, 5)$ sent the Mariner 9 pictures of Mars in 1971.
See [Chapter 19](19-Designs-and-Codes.md#first-order-reed-muller-codes).

**Reed-Solomon code**
Over a finite field, the code $RS(n, k)$ of the value lists of all polynomials of degree less than $k$ at $n$ fixed points. It has minimum distance $n - k + 1$ and handles bursts of errors well.
See [Chapter 19](19-Designs-and-Codes.md#reed-solomon-codes).

**Reflection principle**
Reflecting the part of a lattice path up to its first touch of a line gives a bijection between bad paths and all paths to a reflected end point. It shows that $\binom{2n}{n} - \binom{2n}{n-1}$ paths stay weakly below the diagonal.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#82-the-reflection-principle).

**Repunit**
A number $11\ldots1$ whose digits are all 1. Every number coprime to 10 divides some repunit.
See [Chapter 4](04-The-Pigeonhole-Principle.md#42-classic-uses).

**Resolvable design**
A design whose blocks can be split into parallel classes, each class a partition of the points. Kirkman's schoolgirls need a resolvable STS(15).
See [Chapter 19](19-Designs-and-Codes.md#kirkmans-schoolgirls).

**Rhyme scheme**
A pattern such as AABB or ABAB for which lines of a poem rhyme. Rhyme schemes of $n$ lines are set partitions, counted by the Bell number $B_n$.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#bell-numbers).

**Rook polynomial**
For a board $B$ of squares, $R_B(x) = \sum_k r_k(B)x^k$, where $r_k(B)$ counts the ways to place $k$ non-attacking rooks on $B$. The permutations avoiding $B$ number $\sum_k (-1)^k r_k(B)(n-k)!$.
See [Chapter 5](05-Inclusion-Exclusion.md#56-rook-polynomials-and-forbidden-positions).

**Rooted tree**
A tree with one vertex chosen as the root. Every other vertex then has a parent, the next vertex on its path to the root, and is a child of its parent.
See [Chapter 11](11-Trees.md#rooted-trees).

**Row insertion**
The step of the RSK correspondence that inserts a number into the first row of a tableau, bumping the smallest larger entry down to the next row, and so on.
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-rsk-correspondence).

**RSK correspondence**
A bijection between permutations of $\{1, \ldots, n\}$ and pairs of standard Young tableaux of the same shape (Robinson 1938, Schensted 1961, Knuth 1970). So $\sum_{\lambda \vdash n} (f^{\lambda})^2 = n!$.
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-rsk-correspondence).

## S

**Satisfiability**
The problem of deciding whether a logical formula has a choice of true and false values that makes it true. Cook proved in 1971 that it is NP-complete.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#reductions-and-np-completeness).

**Schensted's theorem**
The length of the first row of the tableaux that RSK gives a permutation equals the length of its longest increasing subsequence (1961).
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-rsk-correspondence).

**Schröder numbers**
The large Schröder numbers $1, 2, 6, 22, 90, \dots$ count lattice paths to $(n, n)$ with east, north and diagonal steps that never go above the diagonal. The little Schröder numbers, half of them from $n = 1$ on, count general bracketings; the tenth, 103049, appears in Hipparchus.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#schroder-numbers-and-hipparchus).

**Schur functions**
The symmetric functions $s_{\lambda} = \sum_T x^T$, sums over the semistandard tableaux of shape $\lambda$. They describe the characters of the symmetric group.
See [Chapter 20](20-Where-Combinatorics-Goes.md#why-algebraists-care).

**Schur number**
The largest $N$, written $S(c)$, for which $\{1, \dots, N\}$ can be coloured with $c$ colours with no monochromatic solution of $x + y = z$. For example $S(2) = 4$.
See [Chapter 16](16-Ramsey-Theory.md#schurs-theorem).

**Schur's theorem**
For every number of colours $c$ there is an $N$ such that every $c$-colouring of $\{1, \dots, N\}$ has $x$, $y$, $z$ of the same colour with $x + y = z$ (1916). It follows from Ramsey's theorem.
See [Chapter 16](16-Ramsey-Theory.md#schurs-theorem).

**Second moment method**
For a counting variable $X$, $P(X = 0) \le \operatorname{Var}(X)/E[X]^2$, by Chebyshev's inequality. So if the variance is small compared with $E[X]^2$, then almost surely $X > 0$.
See [Chapter 17](17-The-Probabilistic-Method.md#174-the-second-moment-method).

**Sequence**
A list of numbers $a_0, a_1, a_2, \dots$, one for each whole number $n$.
See [Chapter 6](06-Recurrences.md#61-setting-up-recurrences).

**Sharp threshold**
A threshold at which the probability of a property jumps from near 0 to near 1 as $p$ changes by a factor of only $1 + \varepsilon$. Triangles have no sharp threshold; connectivity of $G(n, p)$ has one at $p = \ln n / n$.
See [Chapter 17](17-The-Probabilistic-Method.md#connectivity-a-sharp-threshold).

**Sicherman dice**
The pair of dice with faces $1, 2, 2, 3, 3, 4$ and $1, 3, 4, 5, 6, 8$, which give the same sums with the same probabilities as two ordinary dice. Factoring the generating function shows they are the only other pair.
See [Chapter 7](07-Generating-Functions.md#dice).

**Sierpinski triangle**
The fractal pattern of the odd entries of Pascal's triangle: three half-size copies of the whole with a hole in the middle. Row $n$ has $2^{s(n)}$ odd entries, where $s(n)$ counts the 1s in the binary form of $n$.
See [Chapter 3](03-Binomial-Coefficients.md#35-lucas-theorem-and-pascals-triangle-mod-2).

**Sieve of Eratosthenes**
Crossing out the multiples of each prime up to $\sqrt{x}$ leaves the primes between $\sqrt{x}$ and $x$. Counting what survives is an inclusion-exclusion.
See [Chapter 5](05-Inclusion-Exclusion.md#the-sieve-of-eratosthenes-counted).

**Simple graph**
A graph with at most one edge between two vertices and no loops.
See [Chapter 10](10-Graphs.md#the-idea).

**Singleton bound**
A code of length $n$ over $q$ symbols with $q^k$ codewords has minimum distance at most $n - k + 1$.
See [Chapter 19](19-Designs-and-Codes.md#reed-solomon-codes).

**Singularity**
A point of the complex plane where a generating function stops being well behaved, such as a pole. The nearest singularity to 0 fixes the exponential growth rate of the coefficients.
See [Chapter 7](07-Generating-Functions.md#exponential-growth-and-the-radius-of-convergence).

**Slice rank**
The fewest functions of the special form $f(x)g(y, z)$ (or with the roles of the variables changed) that sum to a given function of three variables. It is the key tool in the cap set bound.
See [Chapter 20](20-Where-Combinatorics-Goes.md#cap-sets-and-the-game-set).

**Snake oil method**
Wilf's method for evaluating a sum $f(n) = \sum_k (\ldots)$: write down $\sum_n f(n)x^n$, swap the order of summation, do the inner sum as a known series, and read off the coefficients.
See [Chapter 7](07-Generating-Functions.md#75-the-snake-oil-method).

**Spanning subgraph**
A subgraph that uses all the vertices of the graph.
See [Chapter 10](10-Graphs.md#subgraphs-complements-and-how-many-graphs-there-are).

**Spanning tree**
A subgraph that is a tree and contains every vertex of the graph. A graph has one if and only if it is connected; their number $\tau(G)$ is given by the matrix-tree theorem.
See [Chapter 11](11-Trees.md#112-spanning-trees).

**Spectrum (of a graph)**
The eigenvalues of the adjacency matrix of a graph. Spectral graph theory reads properties of the graph from them.
See [Chapter 10](10-Graphs.md#a-whole-family-at-once-k_n).

**Sperner's theorem**
An antichain of subsets of $[n]$ has at most $\binom{n}{\lfloor n/2 \rfloor}$ members (1928). The middle layer shows the bound is best possible.
See [Chapter 18](18-Extremal-Combinatorics.md#183-sperners-theorem).

**Stable matching**
A matching with no blocking pair: no resident and hospital who are not paired with each other but would both prefer each other to their partners. The Gale-Shapley algorithm always finds one.
See [Chapter 13](13-Matchings-and-Flows.md#134-stable-matching).

**Standard Young tableau**
A filling of the Young diagram of a partition of $n$ with $1, \ldots, n$, each once, increasing along every row and down every column. Their number $f^{\lambda}$ is given by the hook length formula.
See [Chapter 20](20-Where-Combinatorics-Goes.md#partitions-and-diagrams).

**Star**
The tree $K_{1,n-1}$: one centre joined to $n - 1$ leaves. In extremal set theory (Chapter 18), a star is the family of all $k$-sets containing one fixed element.
See [Chapter 11](11-Trees.md#trees-and-forests).

**Stars and bars**
The number of solutions of $x_1 + \dots + x_k = n$ in whole numbers $x_i \ge 0$ is $\binom{n + k - 1}{k - 1}$, by arranging $n$ stars and $k - 1$ bars. With every $x_i \ge 1$ it is $\binom{n-1}{k-1}$.
See [Chapter 2](02-Permutations-and-Combinations.md#24-with-repetition-stars-and-bars).

**Steiner triple system**
A set of $v$ points with a collection of triples such that every pair of points is in exactly one triple, written STS($v$). One exists if and only if $v \equiv 1$ or $3 \pmod 6$.
See [Chapter 19](19-Designs-and-Codes.md#194-steiner-triple-systems).

**Stirling number of the first kind**
The number $c(n, k)$ of permutations of an $n$-set with exactly $k$ cycles. They satisfy $c(n, k) = c(n-1, k-1) + (n-1)c(n-1, k)$, and the signed versions $(-1)^{n-k}c(n,k)$ convert falling factorials to powers.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#92-cycles-and-stirling-numbers-of-the-first-kind).

**Stirling number of the second kind**
The number $S(n, k)$ of partitions of an $n$-element set into exactly $k$ non-empty blocks. They satisfy $S(n, k) = S(n-1, k-1) + k\,S(n-1, k)$, and $k!\,S(n, k)$ counts onto functions.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#definitions).

**Stirling's formula**
$n! \sim \sqrt{2\pi n}\left(\frac{n}{e}\right)^n$ as $n \to \infty$, meaning the ratio tends to 1. It gives $\binom{2n}{n} \sim \frac{4^n}{\sqrt{\pi n}}$.
See [Chapter 3](03-Binomial-Coefficients.md#36-stirlings-approximation).

**Subdivision**
A graph obtained by replacing edges with paths, that is, by putting new vertices of degree 2 on edges.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#kuratowskis-theorem).

**Subgraph**
A graph whose vertices are some of the vertices of $G$ and whose edges are some of the edges of $G$ between them.
See [Chapter 10](10-Graphs.md#subgraphs-complements-and-how-many-graphs-there-are).

**Subsequence**
What is left of a sequence after deleting some terms, keeping the order. It is increasing if each term is larger than the one before and decreasing if each is smaller.
See [Chapter 4](04-The-Pigeonhole-Principle.md#43-monotone-subsequences-erdos-szekeres).

**Subset**
A set whose elements all belong to a given set $S$. An $n$-element set has $2^n$ subsets.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Sum rule**
If $A$ and $B$ are finite and disjoint, then $|A \cup B| = |A| + |B|$; more generally the size of a union of pairwise disjoint sets is the sum of their sizes.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Sum-free set**
A set $B$ of numbers with no $x, y, z \in B$ (not necessarily different) such that $x + y = z$. Every set of $n$ nonzero integers has a sum-free subset of more than $n/3$ elements.
See [Chapter 17](17-The-Probabilistic-Method.md#sum-free-subsets).

**Sunflower**
A family of $p$ distinct sets whose pairwise intersections are all the same set $Y$, the core; the petals $S_i \setminus Y$ are disjoint. Erdős and Rado showed that more than $k!\,(p-1)^k$ sets of size $k$ contain a sunflower with $p$ petals.
See [Chapter 20](20-Where-Combinatorics-Goes.md#sunflowers).

**Sunflower conjecture**
The conjecture of Erdős and Rado that the bound $k!\,(p-1)^k$ can be replaced by $C_p^k$ for a constant $C_p$ depending only on $p$. It is open, though much improved since 2019.
See [Chapter 20](20-Where-Combinatorics-Goes.md#sunflowers).

**Surjective**
A function is surjective (onto) if every element of the target is hit: for each $b$ there is some $a$ with $f(a) = b$.
See [Chapter 1](01-Counting-Principles.md#14-bijections-the-key-idea).

**Symmetric design**
A block design with as many blocks as points, $b = v$ (equivalently $r = k$). Projective planes are symmetric designs.
See [Chapter 19](19-Designs-and-Codes.md#193-block-designs-and-fishers-inequality).

**Symmetric difference**
The set $M \triangle M'$ of edges in exactly one of two matchings $M$ and $M'$. It splits into alternating paths and even cycles, which proves Berge's theorem.
See [Chapter 13](13-Matchings-and-Flows.md#augmenting-paths).

**Symmetric functions**
Polynomials in $x_1, x_2, \ldots$ unchanged by any permutation of the variables, such as the power sums $p_k = \sum x_i^k$ and the Schur functions.
See [Chapter 20](20-Where-Combinatorics-Goes.md#why-algebraists-care).

**Syndrome**
The pattern of failed checks when a received word is tested, read as a binary number. For the Hamming code it is the position of a single flipped bit.
See [Chapter 19](19-Designs-and-Codes.md#the-hamming-7-4-code).

**Szemerédi's theorem**
Every set of positive integers with positive upper density contains arithmetic progressions of every length (1975). The case of length 3 is Roth's theorem (1953).
See [Chapter 20](20-Where-Combinatorics-Goes.md#201-additive-combinatorics-progressions-in-dense-sets).

## T

**Threshold**
For a monotone increasing property, a function $p^*(n)$ such that $G(n, p)$ almost surely lacks the property when $p \ll p^*$ and almost surely has it when $p \gg p^*$. The threshold for containing a triangle is $1/n$.
See [Chapter 17](17-The-Probabilistic-Method.md#the-models).

**Touchard's formula**
The solution of the ménage problem: $\sum_{k=0}^{n} (-1)^k \frac{2n}{2n-k}\binom{2n-k}{k}(n-k)!$ ways to seat the men (Touchard, 1934).
See [Chapter 5](05-Inclusion-Exclusion.md#the-menage-problem).

**Tournament**
A complete graph with each edge given a direction, from winner to loser: the result of every pair of $n$ players playing one game with no draws.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#tournaments-paths-always-exist).

**Tower of Hanoi**
The puzzle of moving $n$ discs between three pegs, never putting a larger disc on a smaller one. The fewest moves satisfy $T_n = 2T_{n-1} + 1$, so $T_n = 2^n - 1$.
See [Chapter 6](06-Recurrences.md#the-tower-of-hanoi).

**Trail**
A walk that does not repeat an edge.
See [Chapter 10](10-Graphs.md#getting-from-here-to-there).

**Transfer theorems**
Odlyzko's theorems (1990) turning the behaviour of a generating function near its dominant singularity, such as $(1 - x/\rho)^{\alpha}$, into the asymptotic size of its coefficients.
See [Chapter 7](07-Generating-Functions.md#other-singularities).

**Transference principle**
The idea behind the Green-Tao theorem: the primes are a dense subset of a pseudorandom set, and Szemerédi's theorem can be transferred to such sets.
See [Chapter 20](20-Where-Combinatorics-Goes.md#primes-in-progression).

**Travelling salesman problem**
Given distances between $n$ cities, find the shortest tour that visits each city once and returns to the start. No polynomial-time algorithm is known, and the decision version is NP-complete.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#143-the-travelling-salesman-problem).

**Tree**
A connected graph with no cycles. Equivalently, a connected graph on $n$ vertices with $n - 1$ edges, or a graph in which every two vertices are joined by exactly one path.
See [Chapter 11](11-Trees.md#trees-and-forests).

**Tree diagram**
A branching picture of a counting procedure, one level per step and one branch per option. Its leaves are the outcomes.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Tree method**
The double-tree heuristic for the metric TSP: find a minimum spanning tree, walk around it visiting cities in preorder, and skip repeats. The tour is at most twice the optimum.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#metric-tsp-and-the-tree-method).

**Triangle (in a graph)**
A cycle of length 3: three vertices joined in pairs, a copy of $K_3$.
See [Chapter 10](10-Graphs.md#getting-from-here-to-there).

**Triangle inequality**
$d(x, z) \le d(x, y) + d(y, z)$: going straight is never longer than going via a third point. Hamming distance and road distances satisfy it.
See [Chapter 14](14-Hamiltonian-Cycles-and-Hard-Problems.md#metric-tsp-and-the-tree-method).

**Triangle-free graph**
A graph containing no three vertices joined in pairs. Mantel's theorem bounds its number of edges by $n^2/4$.
See [Chapter 18](18-Extremal-Combinatorics.md#181-mantels-theorem).

**Triangulation**
A division of a convex polygon into triangles by diagonals that do not cross. A convex $(n + 2)$-gon has $C_n$ triangulations.
See [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md#triangulations-of-a-polygon).

**Turán graph**
The complete $r$-partite graph $T(n, r)$ on $n$ vertices with parts as equal as possible. Its number of edges is written $t(n, r)$.
See [Chapter 18](18-Extremal-Combinatorics.md#182-turans-theorem).

**Turán's theorem**
A graph on $n$ vertices with no $K_{r+1}$ has at most $t(n, r) \le \left(1 - \frac{1}{r}\right)\frac{n^2}{2}$ edges, and only the Turán graph $T(n, r)$ has exactly that many (1941).
See [Chapter 18](18-Extremal-Combinatorics.md#182-turans-theorem).

**Tutte polynomial**
A two-variable invariant of a graph that has the chromatic polynomial as a special case and also counts spanning trees, forests and much more.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#roots-and-a-theorem-of-the-frontier).

**Twelvefold way**
The table of the twelve problems of putting $k$ balls into $n$ boxes, according to whether the balls are distinguishable, whether the boxes are, and whether each box gets any number, at most one, or at least one ball. Its organisation is due to Gian-Carlo Rota.
See [Chapter 2](02-Permutations-and-Combinations.md#26-the-twelvefold-way).

## U

**Unimodal**
A sequence that rises to a maximum and then falls, as each row of Pascal's triangle does.
See [Chapter 3](03-Binomial-Coefficients.md#31-pascals-triangle).

**Union**
The set $A \cup B$ of everything in $A$ or $B$ or both.
See [Chapter 1](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).

**Union bound**
For any events, $P(A_1 \cup \dots \cup A_m) \le P(A_1) + \dots + P(A_m)$. If the sum is less than 1, some outcome avoids all the events.
See [Chapter 17](17-The-Probabilistic-Method.md#the-language).

**Union-closed family**
A family of sets in which $A, B \in \mathcal{F}$ implies $A \cup B \in \mathcal{F}$.
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-union-closed-sets-conjecture-frankl-1979).

**Union-closed sets conjecture**
In every finite union-closed family with at least one nonempty set, some element belongs to at least half the sets (Frankl, 1979). Since Gilmer's 2022 breakthrough about 38% is proved; one half is open.
See [Chapter 20](20-Where-Combinatorics-Goes.md#the-union-closed-sets-conjecture-frankl-1979).

**Union-find**
A data structure that keeps track of which vertices are already connected, used to make Kruskal's algorithm fast.
See [Chapter 11](11-Trees.md#try-it-in-python).

**Universe**
The big set $U$ of all objects under consideration, inside which complements are taken.
See [Chapter 5](05-Inclusion-Exclusion.md#the-none-of-them-form).

**Upper density**
For a set $A$ of positive integers, $\bar d(A) = \limsup_{N \to \infty} \frac{|A \cap \{1, \ldots, N\}|}{N}$. The even numbers have density $1/2$; the primes have density 0.
See [Chapter 20](20-Where-Combinatorics-Goes.md#201-additive-combinatorics-progressions-in-dense-sets).

## V

**Van der Waerden number**
The smallest $N$, written $W(c, k)$, such that every $c$-colouring of $\{1, \dots, N\}$ has a monochromatic arithmetic progression of length $k$. For example $W(2, 3) = 9$.
See [Chapter 16](16-Ramsey-Theory.md#van-der-waerdens-theorem).

**Van der Waerden's theorem**
For all $c$ and $k$ there is an $N$ such that whenever $\{1, \dots, N\}$ is coloured with $c$ colours, some arithmetic progression of length $k$ is monochromatic (1927).
See [Chapter 16](16-Ramsey-Theory.md#van-der-waerdens-theorem).

**Vandermonde's identity**
$\binom{m+n}{k} = \sum_j \binom{m}{j}\binom{n}{k-j}$: choose $k$ people from $m$ women and $n$ men by first deciding how many women.
See [Chapter 3](03-Binomial-Coefficients.md#33-identities-by-counting-two-ways).

**Variance**
$\operatorname{Var}(X) = E[(X - E[X])^2] = E[X^2] - E[X]^2$, which measures how far a random variable strays from its mean.
See [Chapter 17](17-The-Probabilistic-Method.md#174-the-second-moment-method).

**Vertex**
One of the dots of a graph (plural vertices).
See [Chapter 10](10-Graphs.md#the-idea).

**Vertex cover**
A set of vertices that touches every edge: every edge has at least one end in it. Every matching is at most as large as every vertex cover.
See [Chapter 13](13-Matchings-and-Flows.md#133-konigs-theorem).

## W

**Walk**
A sequence of vertices $v_0, v_1, \dots, v_k$ in which each consecutive pair is an edge; $k$ is its length. A walk may repeat vertices and edges.
See [Chapter 10](10-Graphs.md#getting-from-here-to-there).

**Weak composition**
A composition in which zero parts are allowed. There are $\binom{n + k - 1}{k - 1}$ weak compositions of $n$ into $k$ parts.
See [Chapter 9](09-Stirling-Numbers-and-Partitions.md#95-compositions).

**Weak duality**
The easy half of a max-min theorem: every object of one kind is bounded by every object of the other, such as every matching by every vertex cover.
See [Chapter 13](13-Matchings-and-Flows.md#133-konigs-theorem).

**Weight (of an edge)**
A cost $w(e)$ attached to an edge of a graph. The weight of a spanning tree is the sum of the weights of its edges.
See [Chapter 11](11-Trees.md#the-problem).

**Wheel**
The graph $W_n$: a cycle $C_n$ plus a hub joined to all of it. It needs 4 colours when $n$ is odd and 3 when $n$ is even.
See [Chapter 12](12-Planar-Graphs-and-Colouring.md#bounds).

**Width (of a poset)**
The size of the largest antichain in a poset. Dilworth's theorem splits the poset into that many chains.
See [Chapter 18](18-Extremal-Combinatorics.md#185-dilworth-and-mirsky).

## Y

**Young diagram**
For a partition $\lambda$ of $n$, the left-justified rows of $\lambda_1, \lambda_2, \dots$ boxes. It is the Ferrers diagram drawn with boxes.
See [Chapter 20](20-Where-Combinatorics-Goes.md#partitions-and-diagrams).

## Z

**Zarankiewicz problem**
The problem of finding $\operatorname{ex}(n, H)$ for bipartite $H$, where the answer is $o(n^2)$. Kővári, Sós and Turán proved $\operatorname{ex}(n, K_{s,t}) = O(n^{2 - 1/s})$; for $C_4$ the bound is $O(n^{3/2})$.
See [Chapter 18](18-Extremal-Combinatorics.md#the-degenerate-case-bipartite-h).
