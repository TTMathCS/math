# 20. Where combinatorics goes

*You began this book counting handshakes. You end it at the edge of what is known. Combinatorics today is not a bag of
puzzles but a large, connected subject, linked to number theory, algebra, geometry, probability and computer science, and
it is moving fast: several problems in this chapter were solved in the last ten years, some by short proofs nobody expected.
This last chapter is a guided tour. You will meet arithmetic progressions in dense sets and in the primes, the sunflower and
cap set problems and the polynomial method that cracked one of them, Young tableaux and the hook length formula, the graph
minor theorem, and a handful of open problems that you can state in a line and that nobody can solve.*

!!! abstract "In this chapter"
    **You will learn:**

    - Szemerédi's theorem on progressions in dense sets, and the Green-Tao theorem on progressions of primes
    - the Erdős-Rado sunflower lemma with its proof, and the 2019 improvement
    - cap sets, the card game SET, and the 2016 polynomial-method bound of Ellenberg and Gijswijt
    - symmetric functions, Young tableaux, the hook length formula with a proof sketch, and the RSK correspondence
    - graph minors, Wagner's theorem and the Robertson-Seymour graph minor theorem
    - open problems: Hadwiger's conjecture, the union-closed sets conjecture, Erdős-Hajnal, and $R(5,5)$

    **You need:** the whole book, especially Ramsey theory ([Chapter 16](16-Ramsey-Theory.md)), the probabilistic method
    ([Chapter 17](17-The-Probabilistic-Method.md)), extremal combinatorics ([Chapter 18](18-Extremal-Combinatorics.md)),
    planar graphs ([Chapter 12](12-Planar-Graphs-and-Colouring.md)), partitions ([Chapter 9](09-Stirling-Numbers-and-Partitions.md))
    and finite fields ([Chapter 19](19-Designs-and-Codes.md)). This chapter states more than it proves. Where a proof is
    given it is complete; where it is not, the text says so and names where to find it.

    **Levels:** everything here is expert in content but written as a survey. 20.1 and 20.2 need only the book so far;
    20.3 uses a little linear algebra and links to group representations; 20.4 and 20.5 need graphs.

## 20.1 Additive combinatorics: progressions in dense sets

*Level: expert.* An **arithmetic progression** (AP) of length $k$ is a list $a, a + d, a + 2d, \ldots, a + (k-1)d$ with
$d \ne 0$. Van der Waerden's theorem ([Chapter 16](16-Ramsey-Theory.md)) says that if you colour the positive integers with
finitely many colours, one colour contains arbitrarily long APs. In 1936 Erdős and Turán asked for more: is it the *size*
of a colour class that matters? A set that takes up a positive fraction of the integers should contain long progressions,
whatever the colouring.

The **upper density** of a set $A$ of positive integers is

$$
\bar d(A) = \limsup_{N \to \infty} \frac{|A \cap \{1, \ldots, N\}|}{N}.
$$

The even numbers have density $1/2$; the primes and the squares have density 0.

**Theorem 20.1 (Szemerédi, 1975).** Every set of positive integers with positive upper density contains arithmetic
progressions of every length.

Equivalently, in finite form: for every $k$ and $\delta > 0$ there is an $N$ such that every subset of $\{1, \ldots, N\}$
with at least $\delta N$ elements contains a $k$-term AP. Write $r_k(N)$ for the size of the largest subset of
$\{1, \ldots, N\}$ with no $k$-term AP; Szemerédi's theorem says $r_k(N)/N \to 0$.

*Check by computer:* $r_3(9) = 5$, for example $\{1, 3, 4, 8, 9\}$ has no 3-term AP, and every 6-element subset of
$\{1, \ldots, 9\}$ has one.

### How large can a progression-free set be?

**Example (the base-3 set).** Let $A$ be the numbers from 0 to $3^m - 1$ whose base-3 digits are all 0 or 1. Then $A$ has
$2^m$ elements and no 3-term AP.

*Proof.* A 3-term AP $x, y, z$ means $x + z = 2y$. Each digit of $2y$ is 0 or 2, and adding these digits produces no carries,
so the base-3 digits of $2y$ are just twice those of $y$. Each digit of $x$ and $z$ is 0 or 1, so the digit sums are 0, 1 or
2, with no carries either: the digits of $x + z$ are the sums $x_i + z_i$. Comparing digit by digit, $x_i + z_i = 2y_i$ is 0
or 2, which forces $x_i = z_i$ (both 0 or both 1). So $x = z$, and the progression has $d = 0$. $\square$

With $N = 3^m$ this set has $N^{\log 2/\log 3} \approx N^{0.63}$ elements: a vanishing fraction, but a large one. For
$m = 4$ it has 16 elements in $\{0, \ldots, 80\}$. In 1946 Felix Behrend did much better, using points on a sphere in
higher dimensions (no three points of a sphere are collinear), and found progression-free sets of size
$N e^{-c\sqrt{\log N}}$, larger than $N^{1 - \varepsilon}$ for every $\varepsilon > 0$.

### The proofs

Szemerédi's theorem is famous for the number of different proofs it has, each founding a field.

- **Roth (1953)** proved the case $k = 3$ with Fourier analysis: a set with no 3-term AP correlates with a wave, so it is
  denser on some long progression, and one repeats on that progression (a **density increment** argument).
- **Szemerédi (1975)** proved the general case by an intricate combinatorial argument. A tool from it, the **regularity
  lemma**, says that the vertices of any large graph can be split into a bounded number of parts such that almost all pairs
  of parts behave like random bipartite graphs. It has become one of the main tools of graph theory (it proves the
  Erdős-Stone theorem of [Chapter 18](18-Extremal-Combinatorics.md)).
- **Furstenberg (1977)** reproved it with ergodic theory, the study of measure-preserving dynamical systems, starting a
  branch of ergodic theory.
- **Gowers (1998, 2001)** extended Roth's Fourier method with new "uniformity norms", giving the first reasonable bounds for
  every $k$. He received the Fields Medal in 1998, partly for this work.
- **Hypergraph regularity** (Nagle, Rödl, Schacht and Skokan; Gowers, mid-2000s) gave yet another proof.

The quantitative question for $k = 3$ moved dramatically in 2023, when Zander Kelley and Raghu Meka proved that
$r_3(N) \le N e^{-c(\log N)^{\beta}}$ for a small positive constant $\beta$, close in shape to Behrend's lower bound. A few
years earlier (2020) Thomas Bloom and Olof Sisask had broken a long-standing "logarithmic barrier", which was enough to prove
the 3-term case of an old Erdős conjecture: any set of positive integers whose reciprocals have a divergent sum contains a
3-term AP.

### Primes in progression

The primes have density 0, so Szemerédi's theorem says nothing about them. Yet they seem to contain long progressions:

$$
7,\ 157,\ 307,\ 457,\ 607,\ 757,\ 907 \quad (\text{difference } 150),
$$

$$
199,\ 409,\ 619,\ 829,\ 1039,\ 1249,\ 1459,\ 1669,\ 1879,\ 2089 \quad (\text{difference } 210).
$$

*Check:* all 17 numbers are prime; the next terms, 1057 $= 7 \cdot 151$ and 2299 $= 11^2 \cdot 19$, are not.

**Theorem 20.2 (Green and Tao, 2004).** The primes contain arithmetic progressions of every length.

Ben Green and Terence Tao's proof (posted in 2004, published in 2008) is a **transference principle**: the primes are a dense
subset of a larger set of "almost primes" that behaves pseudorandomly, and they prove a version of Szemerédi's theorem
relative to such pseudorandom sets. The proof does not exhibit progressions; the record ones are found by computer searches
and have reached the high twenties of terms. Tao received a Fields Medal in 2006, with this theorem among the work cited.

For links to how primes are spread, see the [Number Theory book, chapter 13](../number-theory/13-How-Primes-Are-Spread.md)
and [chapter 21](../number-theory/21-Where-Number-Theory-Goes.md).

## 20.2 Sunflowers and cap sets

*Level: expert.*

### Sunflowers

A **sunflower** with $p$ petals is a family of $p$ distinct sets $S_1, \ldots, S_p$ whose pairwise intersections are all the
same set $Y$, the **core**: $S_i \cap S_j = Y$ for all $i \ne j$. The petals $S_i \setminus Y$ are disjoint. Three disjoint
sets form a sunflower with empty core; so do $\{1,2,5\}, \{1,2,6\}, \{1,2,7\}$ with core $\{1,2\}$.

**Theorem 20.3 (Erdős and Rado, 1960).** Any family of more than $k!\,(p-1)^k$ sets, each of size $k$, contains a sunflower
with $p$ petals.

*Proof.* Induction on $k$. For $k = 1$: more than $p - 1$ distinct one-element sets include $p$ disjoint ones, a sunflower
with empty core. For $k \ge 2$, let $\mathcal{F}$ have more than $k!(p-1)^k$ sets of size $k$. Take a largest collection of
pairwise disjoint sets in $\mathcal{F}$, say $S_1, \ldots, S_t$. If $t \ge p$, those form a sunflower. Otherwise $t \le p - 1$
and $U = S_1 \cup \cdots \cup S_t$ has at most $k(p-1)$ elements. Every set in $\mathcal{F}$ meets $U$ (otherwise it could be
added to the disjoint collection). So some element $x \in U$ lies in at least

$$
\frac{|\mathcal{F}|}{k(p-1)} > \frac{k!\,(p-1)^k}{k(p-1)} = (k-1)!\,(p-1)^{k-1}
$$

sets of $\mathcal{F}$. Remove $x$ from those sets. We get more than $(k-1)!(p-1)^{k-1}$ distinct sets of size $k - 1$, which
by induction contain a sunflower with $p$ petals. Put $x$ back into each of its sets: still a sunflower, with $x$ added to
the core. $\square$

Erdős and Rado conjectured that $k!(p-1)^k$ can be replaced by $C_p^k$ for a constant $C_p$ depending only on $p$: the
**sunflower conjecture**. Since $k! \approx (k/e)^k$, the gap is a factor of $k^k$. For sixty years nothing much better was
known. In 2019 Ryan Alweiss, Shachar Lovett, Kewen Wu and Jiapeng Zhang proved a bound of roughly $(C\,p \log k)^k$ (with
lower-order factors, later tidied by Rao and by others), replacing the $k$ in $k^k$ by $\log k$. The conjecture itself is
still open. The question matters in theoretical computer science, where sunflowers are used to prove lower bounds for
circuits.

### Cap sets and the game SET

Work in $\mathbb{F}_3^n$, the vectors of length $n$ with entries $0, 1, 2$ added mod 3. Three distinct points $x, y, z$ form
a **line** exactly when $x + y + z = 0$: in each coordinate the three entries are either all equal or all different (check:
$0 + 0 + 0$, $1 + 1 + 1 = 3$, $2 + 2 + 2 = 6$ and $0 + 1 + 2 = 3$ are the only ways to get a multiple of 3). A **cap set** is
a set of points with no line; it is the $\mathbb{F}_3^n$ version of a progression-free set, since lines are exactly the
3-term APs $x, x + d, x + 2d$.

The card game SET has 81 cards, each with four features (number, colour, shading, shape) taking three values: the cards are
$\mathbb{F}_3^4$, and a "set" in the game is a line. The largest collection of cards with no set has 20 cards (Pellegrino,
1970). The largest cap sets known for $n = 1, \ldots, 6$ have $2, 4, 9, 20, 45, 112$ points, and these are known to be
maximal.

*Check by computer:* in $\mathbb{F}_3^2$ the largest cap has 4 points, for instance $\{(0,0), (0,1), (1,0), (1,1)\}$, and
in $\mathbb{F}_3^3$ the largest has 9.

How fast does the largest cap set grow? Trivially it is at most $3^n$. Roth's density increment gives $O(3^n/n)$ (Meshulam,
1995), and in 2012 Bateman and Katz improved this slightly. Lower-bound constructions give about $2.22^n$. Was the truth
$3^n$ divided by something small, or exponentially smaller?

**Theorem 20.4 (Ellenberg and Gijswijt, 2016).** A cap set in $\mathbb{F}_3^n$ has at most $3 \cdot 2.756^n$ points.

In May 2016 Ernie Croot, Vsevolod Lev and Péter Pál Pach found a polynomial method for the analogous problem in
$(\mathbb{Z}/4)^n$. Within about a week, Jordan Ellenberg and Dion Gijswijt independently adapted it to $\mathbb{F}_3^n$. The
whole proof fits on three pages. Here is its skeleton, in the "slice rank" language Terence Tao introduced shortly after.

*Proof sketch.* Let $A$ be a cap set. Consider the function $T: A \times A \times A \to \mathbb{F}_3$ with $T(x, y, z) = 1$
if $x + y + z = 0$ and 0 otherwise. In a cap set, $x + y + z = 0$ happens only when $x = y = z$ (if two are equal, say
$x = y$, then $z = -2x = x$; if all are distinct, they would form a line). So $T$ is "diagonal": nonzero exactly on the
$|A|$ triples $(x, x, x)$.

*Step 1 (algebra).* Define the **slice rank** of a function of three variables as the fewest functions of the form
$f(x)g(y, z)$, $f(y)g(x, z)$ or $f(z)g(x, y)$ needed to add up to it. A lemma (half a page, by linear algebra) says a
diagonal function with all diagonal entries nonzero has slice rank equal to the number of diagonal entries, here $|A|$.

*Step 2 (a polynomial).* In $\mathbb{F}_3$, $1 - t^2$ equals 1 when $t = 0$ and 0 when $t = \pm 1$. So

$$
T(x, y, z) = \prod_{i=1}^{n} \big(1 - (x_i + y_i + z_i)^2\big),
$$

a polynomial of degree $2n$ in the $3n$ variables. Expand it into monomials $x^{a} y^{b} z^{c}$, where each variable can be
taken with exponent 0, 1 or 2 (since $t^3 = t$ on $\mathbb{F}_3$). Each monomial has total degree at most $2n$, so at least
one of its $x$-part, $y$-part or $z$-part has degree at most $2n/3$. Group the monomials by which part is small: those with
small $x$-part are $x^a$ times a function of $(y, z)$, and so on. So the slice rank is at most $3M$, where $M$ is the number
of monomials in $n$ variables with exponents in $\{0, 1, 2\}$ and degree at most $2n/3$.

*Step 3 (counting).* For any $0 < u < 1$, $M \le (1 + u + u^2)^n / u^{2n/3}$, since each such monomial contributes at least
$u^{2n/3}$ to the expansion of $(1 + u + u^2)^n$, which has all coefficients positive. The minimum of
$(1 + u + u^2)/u^{2/3}$ is about $2.7551$, at $u \approx 0.593$.

Combining: $|A| = \text{slice rank} \le 3M \le 3 \cdot 2.756^n$. $\square$

The method spread at once. It gave an exponential improvement in the Erdős-Szemerédi sunflower problem for families of
subsets, new results in additive combinatorics and in the complexity of matrix multiplication, and it echoes Zeev Dvir's
2008 polynomial proof of the finite-field Kakeya conjecture. Short algebraic proofs beating decades of analysis are part of
the character of modern combinatorics.

## 20.3 Algebraic combinatorics: Young tableaux

*Level: expert.* Algebraic combinatorics uses algebra to count and counting to understand algebra. Its best-known object is
the Young tableau.

### Partitions and diagrams

A **partition** $\lambda = (\lambda_1 \ge \lambda_2 \ge \cdots)$ of $n$ is a way of writing $n$ as a sum of positive parts in
decreasing order ([Chapter 9](09-Stirling-Numbers-and-Partitions.md), and the
[Number Theory book, chapter 16](../number-theory/16-Partitions.md)). Its **Young diagram** has $\lambda_1$ boxes in the first
row, $\lambda_2$ in the second, and so on, left-justified. A **standard Young tableau** (SYT) of shape $\lambda$ fills the
boxes with $1, \ldots, n$, each once, increasing along every row and down every column. Write $f^{\lambda}$ for the number of
them.

**Example.** Shape $(2, 1)$ has two SYT: rows $12/3$ and $13/2$. So $f^{(2,1)} = 2$. Shape $(n, n)$ (two rows of $n$) has
$C_n$ tableaux, the Catalan number of [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md): reading $1, \ldots, 2n$ and
writing an up-step for each number in the top row and a down-step for each in the bottom row gives exactly the Dyck paths.

### The hook length formula

The **hook** of a box is the box itself, all boxes to its right in its row, and all boxes below it in its column. The
**hook length** $h(b)$ counts them.

**Theorem 20.5 (hook length formula: Frame, Robinson and Thrall, 1954).** For a partition $\lambda$ of $n$,

$$
f^{\lambda} = \frac{n!}{\prod_{b \in \lambda} h(b)}.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="The Young diagram of the partition 4, 3, 1: rows of 4, 3 and 1 boxes. Each box shows its hook length: 6, 4, 3, 1 in the first row, 4, 2, 1 in the second and 1 in the third. The hook of the top-left box, its row and column, is shaded orange">
  <rect x="130" y="30" width="40" height="40" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="170" y="30" width="40" height="40" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="210" y="30" width="40" height="40" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="250" y="30" width="40" height="40" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="130" y="70" width="40" height="40" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="170" y="70" width="40" height="40" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="210" y="70" width="40" height="40" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="130" y="110" width="40" height="40" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="56" text-anchor="middle" font-size="16" fill="currentColor">6</text>
  <text x="190" y="56" text-anchor="middle" font-size="16" fill="currentColor">4</text>
  <text x="230" y="56" text-anchor="middle" font-size="16" fill="currentColor">3</text>
  <text x="270" y="56" text-anchor="middle" font-size="16" fill="currentColor">1</text>
  <text x="150" y="96" text-anchor="middle" font-size="16" fill="currentColor">4</text>
  <text x="190" y="96" text-anchor="middle" font-size="16" fill="currentColor">2</text>
  <text x="230" y="96" text-anchor="middle" font-size="16" fill="currentColor">1</text>
  <text x="150" y="136" text-anchor="middle" font-size="16" fill="currentColor">1</text>
  <text x="210" y="178" text-anchor="middle" font-size="13" fill="currentColor">f = 8! / (6·4·3·1·4·2·1·1) = 40320 / 576 = 70</text>
</svg>
</div>

**Worked example.** For $\lambda = (4, 3, 1)$, $n = 8$, the hook lengths are shown in the picture. Their product is
$6 \cdot 4 \cdot 3 \cdot 1 \cdot 4 \cdot 2 \cdot 1 \cdot 1 = 576$, and $8! = 40320$, so $f^{(4,3,1)} = 70$. *Check:* a
program that builds all tableaux box by box counts 70. For $(3, 3)$: hooks $4, 3, 2 / 3, 2, 1$, product 144, and
$720/144 = 5 = C_3$.

**Proof sketch (Greene, Nijenhuis and Wilf, 1979).** Write $F(\lambda) = n!/\prod h(b)$. A **corner** of $\lambda$ is a box
with nothing to its right or below. In any SYT, the number $n$ sits in a corner, and removing it leaves an SYT of the smaller
shape. So $f^{\lambda} = \sum_{c} f^{\lambda - c}$ over corners $c$, with $f = 1$ for a single box. If $F$ satisfies the same
recursion, then $F = f$ by induction. The recursion for $F$ says $\sum_c F(\lambda - c)/F(\lambda) = 1$, and Greene,
Nijenhuis and Wilf found a random process whose outcome probabilities are exactly these terms: the **hook walk**. Pick a box
uniformly at random; then repeatedly jump to a uniformly random *other* box in the current box's hook; stop at a corner. They
prove, by a direct (half-page) computation of the probability of each path, that the walk ends at corner $c$ with
probability $F(\lambda - c)/F(\lambda)$. Since the walk always ends somewhere, these probabilities add to 1. $\square$

### The RSK correspondence

Since $f^{\lambda}$ counts tableaux, $\sum_{\lambda} (f^{\lambda})^2$ counts *pairs* of tableaux of the same shape. Look:

| $n$ | shapes | $\sum (f^{\lambda})^2$ |
|---|---|---|
| 3 | $(3), (2,1), (1,1,1)$ | $1 + 4 + 1 = 6$ |
| 4 | $(4), (3,1), (2,2), (2,1,1), (1,1,1,1)$ | $1 + 9 + 4 + 9 + 1 = 24$ |

These are $3!$ and $4!$.

**Theorem 20.6 (Robinson 1938, Schensted 1961, Knuth 1970).** There is a bijection between permutations of $\{1, \ldots, n\}$
and pairs $(P, Q)$ of standard Young tableaux of the same shape with $n$ boxes. Hence $\sum_{\lambda \vdash n} (f^{\lambda})^2
= n!$.

The bijection is **row insertion**. Read the permutation left to right. Insert each number $x$ into the first row of $P$: if
$x$ is larger than everything there, put it at the end; otherwise it replaces ("bumps") the smallest entry larger than $x$,
and the bumped entry is inserted into the next row in the same way. Record in $Q$, in the box that was created, the step
number.

**Worked example.** The permutation $3\,1\,4\,2$:

- insert 3: $P = 3$;
- insert 1: 1 bumps 3 to row 2: $P = 1 / 3$;
- insert 4: $P = 1\,4 / 3$;
- insert 2: 2 bumps 4, and 4 goes to row 2: $P = 1\,2 / 3\,4$.

The new boxes appeared at steps 1 (row 1), 2 (row 2), 3 (row 1), 4 (row 2), so $Q = 1\,3 / 2\,4$. Undoing the bumps from
the box numbered 4 in $Q$ recovers the permutation, which is why the map is a bijection.

**Schensted's theorem (1961).** The length of the first row of $P$ is the length of the longest increasing subsequence of
the permutation, and the number of rows is the length of the longest decreasing one. *Check:* $3142$ has longest increasing
subsequences of length 2 (such as 34) and longest decreasing ones of length 2 (such as 31), and $P$ has shape $(2, 2)$.

This connects back to the Erdős-Szekeres theorem of [Chapter 4](04-The-Pigeonhole-Principle.md), and much further: for a random
permutation the longest increasing subsequence has length about $2\sqrt{n}$ (Logan and Shepp; Vershik and Kerov, 1977), and
in 1999 Baik, Deift and Johansson found that its fluctuations follow the Tracy-Widom distribution of random matrix theory.

### Why algebraists care

The numbers $f^{\lambda}$ are the dimensions of the irreducible representations of the symmetric group $S_n$
([Algebra book, chapter 21](../algebra/21-Modules-and-Representations.md)), and $\sum (f^{\lambda})^2 = n!$ is the familiar
fact that the squares of these dimensions add up to the order of the group. The characters of these representations are
encoded by **symmetric functions**: polynomials in $x_1, x_2, \ldots$ unchanged by any permutation of the variables, such as
the elementary $e_k$ (sum of all products of $k$ distinct variables), the complete $h_k$ (all monomials of degree $k$) and
the power sums $p_k = \sum x_i^k$. The **Schur functions** $s_{\lambda} = \sum_T x^T$, a sum over tableaux $T$ of shape
$\lambda$ with entries allowed to repeat along rows (semistandard tableaux), form the most important basis, and the
Littlewood-Richardson rule, a combinatorial rule about tableaux, says how they multiply. Stanley's *Enumerative
Combinatorics*, volume 2, is the standard account.

## 20.4 The graph minor theorem

*Level: expert.* A graph $H$ is a **minor** of a graph $G$ if $H$ can be obtained from $G$ by deleting vertices, deleting
edges, and **contracting** edges (merging the two ends of an edge into one vertex, keeping all other edges). For example,
contracting the five "spokes" of the Petersen graph gives $K_5$, so $K_5$ is a minor of the Petersen graph.

A family of graphs is **minor-closed** if every minor of a member is a member. Planar graphs are minor-closed (deleting and
contracting keep a drawing planar), and so are forests, graphs that can be drawn on a torus, and graphs that can be embedded
in space with no two cycles linked.

**Theorem 20.7 (Wagner, 1937).** A graph is planar if and only if it has neither $K_5$ nor $K_{3,3}$ as a minor.

This is a close cousin of Kuratowski's theorem ([Chapter 12](12-Planar-Graphs-and-Colouring.md)). It describes an infinite
family by two forbidden graphs. Is that always possible?

**Theorem 20.8 (Robertson and Seymour, the graph minor theorem).** In every infinite sequence of finite graphs
$G_1, G_2, \ldots$ there are $i < j$ such that $G_i$ is a minor of $G_j$.

**Corollary 20.9.** Every minor-closed family of graphs is exactly the set of graphs that contain none of some *finite* list
of forbidden minors.

*Proof of the corollary from the theorem.* Let $\mathcal{F}$ be minor-closed, and let the **excluded minors** be the graphs
not in $\mathcal{F}$ all of whose proper minors are in $\mathcal{F}$. A graph is outside $\mathcal{F}$ exactly when it has an
excluded minor as a minor (delete and contract until you cannot without entering $\mathcal{F}$). No excluded minor is a minor
of another: a proper minor of an excluded minor is in $\mathcal{F}$. So if there were infinitely many excluded minors, listing
them would give a sequence contradicting the theorem. $\square$

The theorem, conjectured by Klaus Wagner, was proved by Neil Robertson and Paul Seymour in a series of twenty papers,
*Graph Minors I* to *XX*, published between 1983 and 2004, more than 500 pages in all. Along the way they proved a structure
theorem describing all graphs without a given minor, which has become a basic tool.

**Examples of the finite lists.**

| family | excluded minors |
|---|---|
| forests | $K_3$ |
| outerplanar graphs | $K_4$, $K_{2,3}$ |
| planar graphs | $K_5$, $K_{3,3}$ |
| linklessly embeddable graphs | the 7 graphs of the Petersen family (Robertson, Seymour, Thomas, 1995) |
| graphs on the projective plane | 35 graphs (Archdeacon, 1981) |
| graphs on the torus | finite, but the full list is still unknown; thousands are known |

The theorem is strangely **non-constructive**: it guarantees that the list for the torus is finite without producing it.
Robertson and Seymour also showed that for each fixed $H$ one can test whether $H$ is a minor of an $n$-vertex graph in
time $O(n^3)$ (improved later to $O(n^2)$ and beyond). So every minor-closed property can be tested in polynomial time, by
an algorithm that we may not be able to write down because we do not know the list. This is a theorem about what algorithms
exist, not about how to find them, and it shook computer scientists' ideas of what "efficiently solvable" means.

## 20.5 Open problems

*Level: expert.* Here are a few problems, each easy to state, that are open as of this writing. Be careful: open problems
get solved, and progress on these is fast.

### Hadwiger's conjecture (1943)

**Conjecture.** Every graph with no $K_t$ minor can be properly coloured with $t - 1$ colours.

For $t = 2, 3$ it is easy (no $K_3$ minor means a forest). For $t = 4$ it was proved by Hadwiger and by Dirac. For $t = 5$
Wagner showed in 1937 that it is equivalent to the four colour theorem ([Chapter 12](12-Planar-Graphs-and-Colouring.md)),
so it is true. For $t = 6$, Robertson, Seymour and Thomas proved it in 1993, again by reducing it to the four colour theorem.
For $t \ge 7$ it is open. The best general result, by Delcourt and Postle (2021), is that $O(t \log \log t)$ colours suffice.
Bollobás, Catlin and Erdős called it "one of the deepest unsolved problems in graph theory" in 1980.

### The union-closed sets conjecture (Frankl, 1979)

A family $\mathcal{F}$ of sets is **union-closed** if $A, B \in \mathcal{F}$ implies $A \cup B \in \mathcal{F}$.

**Conjecture.** In every finite union-closed family with at least one nonempty set, some element belongs to at least half
of the sets.

It is easy to check in small cases and was widely believed, but for forty years nobody could prove that some element lies in
even 1% of the sets. In November 2022 Justin Gilmer, then at Google, posted a proof that some element lies in at least 1% of
the sets, using information theory (entropy). Within days several groups (Alweiss, Huang and Sellke; Chase and Lovett; Sawin;
and others) sharpened his argument to about 38%, the constant $(3 - \sqrt{5})/2 \approx 0.382$, and a little beyond. The full
conjecture, one half, remains open.

### The Erdős-Hajnal conjecture (1989)

Ramsey theory ([Chapter 16](16-Ramsey-Theory.md)) says every graph on $n$ vertices has a clique or independent set of size
about $\frac12\log_2 n$, and Erdős' random graphs ([Chapter 17](17-The-Probabilistic-Method.md)) show that one cannot do much
better. Random graphs contain every small graph as an induced subgraph. What if a graph *avoids* some fixed induced
subgraph $H$?

**Conjecture (Erdős and Hajnal).** For every graph $H$ there is $\varepsilon > 0$ such that every graph on $n$ vertices
with no induced copy of $H$ has a clique or an independent set of size at least $n^{\varepsilon}$.

So forbidding any one pattern should change the answer from logarithmic to polynomial. Erdős and Hajnal proved the weaker
bound $e^{c\sqrt{\log n}}$. The conjecture is known only for some small or specially built $H$; in 2023 Nguyen, Scott and
Seymour settled the case of the path with five vertices, which had been a famous small open case.

### Ramsey numbers

From [Chapter 16](16-Ramsey-Theory.md): $R(4, 4) = 18$, but $R(5,5)$ is unknown. The best bounds are

$$
43 \le R(5,5) \le 46,
$$

the lower bound from a colouring of $K_{42}$ found by Exoo in 1989, the upper bound by Angeltveit and McKay in 2024 after a
large computation. For $R(6,6)$ the gap between the known bounds is far wider (the lower bound is 102), and nobody expects
to close it by computer search alone.

For large $k$, Erdős' bounds $\sqrt{2}^{\,k} < R(k,k) < 4^k$ stood almost untouched for 75 years, until in 2023 Marcelo
Campos, Simon Griffiths, Robert Morris and Julian Sahasrabudhe proved $R(k,k) \le (4 - \varepsilon)^k$ for a small fixed
$\varepsilon > 0$; later work pushed the base to about 3.8. Whether the truth is nearer $\sqrt{2}$ or 4 (or somewhere
between) is unknown.

### A few more

- **The sunflower conjecture** (20.2): is $C_p^k$ enough?
- **The cap set constant**: the largest cap sets grow like $c^n$ for some $c$ between about 2.22 and 2.756. What is $c$?
- **Projective planes** (Chapter 19): is there a plane of order 12? Must every order be a prime power?
- **Zarankiewicz** (Chapter 18): what is the order of $\operatorname{ex}(n, K_{4,4})$? Of $\operatorname{ex}(n, C_8)$?
- **The lonely runner, graceful trees, the Erdős-Faber-Lovász conjecture**: look them up, but check the date of what you
  read. The last was proved for large $n$ by Kang, Kelly, Kühn, Methuku and Osthus in 2021.

## A short history

Szemerédi's 1975 theorem and its many proofs made additive combinatorics a field; the Green-Tao theorem (2004) carried it to
the primes. The polynomial method's arrival in 2016 solved the cap set problem in weeks after decades of slow progress. Young
tableaux go back to Alfred Young around 1900; the hook length formula is from 1954, RSK from 1938-1970, and algebraic
combinatorics took its modern form with Stanley's work from the 1970s. Robertson and Seymour's graph minor project ran from
the early 1980s to 2004. Recent years have seen a burst of solutions: the sensitivity conjecture (Hao Huang, 2019), the
Kahn-Kalai conjecture (Park and Pham, 2022), Gilmer's union-closed breakthrough (2022), and the diagonal Ramsey bound (2023).

## Check yourself

??? question "1. The progression $199, 409, \ldots, 2089$ has 10 primes with difference 210. Explain why any progression of 10 primes, none of them 2, 3, 5 or 7, must have a difference divisible by $210 = 2 \cdot 3 \cdot 5 \cdot 7$."

    Take a prime $q \le 7$ and suppose $q \nmid d$. Then the first $q$ terms $a, a + d, \ldots, a + (q-1)d$ cover all residues
    mod $q$, so one of them is divisible by $q$; being prime, it would equal $q$, which we excluded. So $q \mid d$ for
    $q = 2, 3, 5, 7$, and since $10 \ge q$ for each of them, the argument applies: $210 \mid d$.

??? question "2. List the base-3 progression-free set for $m = 2$ and check that it has no 3-term AP."

    Base-3 numbers with digits 0, 1 below $9$: $00, 01, 10, 11$, that is $\{0, 1, 3, 4\}$. Possible APs need
    $x + z = 2y$: pairs $(x, z)$ with even sum are $(0, 4)$ (midpoint 2) and $(1, 3)$ (midpoint 2), and 2 is not in the set.
    So there is none.

??? question "3. Show that $r_3(9) \ge 5$ by exhibiting a set, and explain why $\{1, 2, 4, 5, 10, 11, 13, 14\}$ has no 3-term AP."

    $\{1, 3, 4, 8, 9\}$ works. A 3-term AP $x, y, z$ needs $x + z$ even with midpoint $y$ in the set. The pairs with even
    sum are $1, 3$ (midpoint 2), $1, 9$ (midpoint 5), $3, 9$ (midpoint 6) and $4, 8$ (midpoint 6), and 2, 5, 6 are missing. The
    second set is the base-3 set $\{0, 1, 3, 4, 9, 10, 12, 13\}$ shifted by 1, and shifting preserves APs.

??? question "4. Using Erdős-Rado with $k = 2$, $p = 3$, how many edges in a graph force a sunflower with 3 petals? What do such sunflowers look like, and how many edges can you have without one?"

    More than $2! \cdot 2^2 = 8$ edges, so 9 suffice. A 3-petal sunflower of edges is either 3 disjoint edges (empty core)
    or 3 edges at one vertex (core one vertex). Avoiding both means maximum degree at most 2 and no 3 disjoint edges; two
    disjoint triangles have 6 edges and do this, and one can check 6 is the maximum, well below 9.

??? question "5. In $\mathbb{F}_3^2$ (the $3 \times 3$ grid with wrap-around), show that $\{(0,0), (0,1), (1,0), (1,1)\}$ is a cap set and that adding any fifth point creates a line."

    Any three of the four points include two that agree in some coordinate where the third differs (for example $(0,0),
    (0,1), (1,0)$ have first coordinates $0, 0, 1$: neither all equal nor all different), so there is no line. The other five
    points each complete a line: $(2,2)$ with $(0,0), (1,1)$; $(2,0)$ with $(0,0), (1,0)$; $(2,1)$ with $(0,1), (1,1)$;
    $(0,2)$ with $(0,0), (0,1)$; $(1,2)$ with $(1,0), (1,1)$. In each case the coordinates add up to $0 \bmod 3$.

??? question "6. Verify in $\mathbb{F}_3$ that $1 - t^2$ is 1 at $t = 0$ and 0 at $t = 1, 2$. Why does the proof need the variables to have exponents only 0, 1, 2?"

    $1 - 0 = 1$; $1 - 1 = 0$; $1 - 4 = -3 \equiv 0$. Every function $\mathbb{F}_3 \to \mathbb{F}_3$ is a polynomial of degree
    at most 2, since $t^3 = t$ for all $t \in \mathbb{F}_3$ (Fermat). So higher powers can be reduced, and the monomial count
    $M$ counts all the functions that can appear.

??? question "7. Use the hook length formula to compute $f^{(3,2)}$ and $f^{(2,2,1)}$, and list the tableaux of shape $(3,2)$."

    $(3,2)$: hooks $4, 3, 1 / 2, 1$, product 24, $5!/24 = 5$. Tableaux (top/bottom): $123/45$, $124/35$, $125/34$,
    $134/25$, $135/24$. $(2,2,1)$ is the transpose of $(3,2)$, with the same hooks, so also 5.

??? question "8. Run row insertion on $2\,4\,1\,3$. What are $P$ and $Q$, and what does Schensted's theorem predict?"

    Insert 2: $2$. Insert 4: $2\,4$. Insert 1: bumps 2: $1\,4 / 2$. Insert 3: bumps 4: $1\,3 / 2\,4$. New boxes at steps
    1, 2 (row 1), 3, 4 (row 2): $Q = 1\,2 / 3\,4$. Shape $(2,2)$: longest increasing subsequence 2 (24 or 13), longest
    decreasing 2 (21, 41 or 43). Correct.

??? question "9. Check $\sum_{\lambda \vdash 5} (f^{\lambda})^2 = 120$ using the hook length formula."

    Shapes and $f$: $(5)$ 1; $(4,1)$ 4; $(3,2)$ 5; $(3,1,1)$ 6; $(2,2,1)$ 5; $(2,1,1,1)$ 4; $(1^5)$ 1. Squares:
    $1 + 16 + 25 + 36 + 25 + 16 + 1 = 120 = 5!$.

??? question "10. Show that the Petersen graph is not planar using minors."

    Draw it as an outer 5-cycle, an inner pentagram, and five spokes joining them. Contract the five spokes: each outer
    vertex merges with its inner partner, and the 5 merged vertices are joined by the outer cycle edges and the pentagram
    edges, which together are all 10 pairs. That is $K_5$, so by Wagner's theorem the Petersen graph is not planar.

??? question "11. Prove the union-closed conjecture for any union-closed family $\mathcal{F}$ that contains a one-element set $\{x\}$."

    Map each $A \in \mathcal{F}$ with $x \notin A$ to $A \cup \{x\}$, which is in $\mathcal{F}$ (union of $A$ and $\{x\}$)
    and contains $x$. The map is one-to-one ($A$ is recovered by removing $x$). So the sets without $x$ are at most as many
    as the sets with $x$, and $x$ is in at least half of them.

??? question "12. Why is Corollary 20.9 a statement about existence only? Give a family where the list is not known."

    The proof shows that the set of excluded minors cannot be infinite, by contradiction with the graph minor theorem; it
    gives no procedure for finding them or bounding their size. Graphs embeddable on the torus form a minor-closed family
    whose excluded minors are finite in number, but the complete list is not known.

## What you learned

- Szemerédi: dense sets contain long arithmetic progressions; its proofs founded the regularity method, higher Fourier
  analysis and ergodic Ramsey theory, and Green and Tao carried it to the primes.
- Erdős-Rado's sunflower lemma has a short inductive proof; the 2019 improvement brought the bound close to the conjecture.
- Cap sets in $\mathbb{F}_3^n$ are exponentially smaller than $3^n$, by the 2016 polynomial method of Croot-Lev-Pach and
  Ellenberg-Gijswijt.
- The hook length formula counts standard Young tableaux; RSK pairs permutations with pairs of tableaux and reads off
  longest increasing subsequences.
- The graph minor theorem: every minor-closed family is defined by finitely many forbidden minors, though the list may be
  unknown.
- Hadwiger, union-closed sets, Erdős-Hajnal, $R(5,5)$ and the diagonal Ramsey growth rate are open, and some have moved in the
  last few years.

**Next:** this is the last chapter. Go back to the [book's index](index.md) for the full list of chapters and the glossary,
or continue in the [Algebra](../algebra/index.md), [Number Theory](../number-theory/index.md) and
[Geometry](../geometry/index.md) books.

## Further reading

- T. Tao and V. H. Vu, *Additive Combinatorics*, Cambridge University Press, 2006.
- Y. Zhao, *Graph Theory and Additive Combinatorics: Exploring Structure and Randomness*, Cambridge University Press, 2023.
- E. Szemerédi, "On sets of integers containing no k elements in arithmetic progression", *Acta Arithmetica* 27, 1975.
- B. Green and T. Tao, "The primes contain arbitrarily long arithmetic progressions", *Annals of Mathematics* 167, 2008.
- J. S. Ellenberg and D. Gijswijt, "On large subsets of $\mathbb{F}_q^n$ with no three-term arithmetic progression",
  *Annals of Mathematics* 185, 2017; E. Croot, V. Lev and P. P. Pach, "Progression-free sets in $\mathbb{Z}_4^n$ are
  exponentially small", same volume.
- R. Alweiss, S. Lovett, K. Wu and J. Zhang, "Improved bounds for the sunflower lemma", *Annals of Mathematics* 194, 2021.
- R. P. Stanley, *Enumerative Combinatorics*, volume 2, Cambridge University Press, 1999.
- B. E. Sagan, *The Symmetric Group*, 2nd edition, Springer, 2001; W. Fulton, *Young Tableaux*, Cambridge University Press,
  1997.
- C. Greene, A. Nijenhuis and H. S. Wilf, "A probabilistic proof of a formula for the number of Young tableaux of a given
  shape", *Advances in Mathematics* 31, 1979.
- N. Robertson and P. D. Seymour, "Graph Minors. XX. Wagner's conjecture", *Journal of Combinatorial Theory B* 92, 2004;
  L. Lovász, "Graph minor theory", *Bulletin of the AMS* 43, 2006 (a readable survey).
- J. Gilmer, "A constant lower bound for the union-closed sets conjecture", arXiv:2211.09055, 2022.
- M. Campos, S. Griffiths, R. Morris and J. Sahasrabudhe, "An exponential improvement for diagonal Ramsey", arXiv:2303.09521,
  2023.
- On this site: [partitions in the Topics](../../topics/counting/level-8/04-partitions.md); the
  [Number Theory book, chapter 21](../number-theory/21-Where-Number-Theory-Goes.md) and the
  [Algebra book, chapter 22](../algebra/22-Where-Algebra-Goes.md) for the matching tours of those subjects; the
  [Geometry book, chapter 21](../geometry/21-Where-Geometry-Goes.md).
