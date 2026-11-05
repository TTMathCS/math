# 20. Metric spaces and the topology of the real line

*By now the same few arguments keep coming back: a sequence of witnesses, a convergent subsequence, a contradiction at
the limit; a Cauchy sequence that must converge; a supremum that must exist. They worked for numbers in Chapter 18 and for
functions in Chapter 19, with "distance" meaning $|x - y|$ in one case and the sup norm $\|f - g\|_\infty$ in the other.
This chapter takes the one idea they share, a distance, and asks what can be proved from it alone. The answer is a great
deal: open and closed sets, compactness, connectedness and completeness, each with a theorem that explains a piece of
calculus. The high point is the contraction mapping theorem, a half-page proof that finally proves Picard's theorem on the
existence and uniqueness of solutions of differential equations. The chapter ends with the Cantor set, a set that is
uncountable yet has length zero.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a metric space is, with examples from the plane, function spaces and error-correcting codes
    - open sets, closed sets, interior, closure and limit points, and how continuity looks in this language
    - compactness by open covers, the Heine-Borel theorem, and why the extreme value theorem is really about compactness
    - connectedness, why the connected subsets of the line are the intervals, and why that is the IVT
    - complete metric spaces, the completeness of $C[a, b]$, and the contraction mapping theorem
    - Picard's existence and uniqueness theorem for differential equations, proved
    - the Cantor set: compact, uncountable, length zero, nowhere dense

    **You need:** [Chapter 18](18-The-Real-Numbers.md) (completeness, Bolzano-Weierstrass, Heine-Cantor) and
    [Chapter 19](19-Uniform-Convergence.md) (the sup norm, uniform limits). [Chapter 14](14-Differential-Equations.md)
    for the differential equations in 20.4.

    **Levels:** 20.1 is advanced; 20.2 to 20.4 are advanced to expert; 20.5 is advanced.

## 20.1 Metric spaces, open and closed sets

*Level: advanced.* What does "close" mean? For numbers, $|x - y|$. For points of the plane, the length of the segment
between them. For two functions, the largest gap between their graphs. For two strings of bits, the number of places where
they differ. What do all of these have in common?

**Definition.** A **metric** on a set $X$ is a function $d$ that assigns to each pair of points $x, y \in X$ a real number
$d(x, y)$, the **distance**, such that for all $x, y, z \in X$:

1. $d(x, y) \ge 0$, and $d(x, y) = 0$ exactly when $x = y$;
2. $d(x, y) = d(y, x)$ (symmetry);
3. $d(x, z) \le d(x, y) + d(y, z)$ (the **triangle inequality**: a detour is never shorter).

A set with a metric is a **metric space**.

### Examples

1. **The real line**, $d(x, y) = |x - y|$. The triangle inequality is $|a + b| \le |a| + |b|$ with $a = x - y$,
   $b = y - z$.
2. **The plane $\mathbb{R}^2$** has several useful metrics. For $p = (x_1, y_1)$ and $q = (x_2, y_2)$:
    - Euclidean: $d_2(p, q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$, the straight-line distance;
    - taxicab: $d_1(p, q) = |x_1 - x_2| + |y_1 - y_2|$, the distance along a street grid;
    - maximum: $d_\infty(p, q) = \max(|x_1 - x_2|, |y_1 - y_2|)$.

    *Example:* from $(1, 2)$ to $(4, -2)$ the differences are 3 and 4, so $d_2 = 5$, $d_1 = 7$, $d_\infty = 4$. In general
    $d_\infty \le d_2 \le d_1 \le 2 d_\infty$, so the three metrics agree about which sequences converge.
3. **Functions.** $C[a, b]$, the continuous functions on $[a, b]$, with $d(f, g) = \|f - g\|_\infty = \max |f(x) - g(x)|$.
   Convergence in this metric is uniform convergence (Chapter 19). Another metric on the same set is
   $d(f, g) = \int_a^b |f - g|$, the area between the graphs; it gives a different notion of convergence.
4. **Bit strings and codes.** On strings of $n$ bits, the **Hamming distance** is the number of positions in which two
   strings differ. *Example:* $d(10110, 11100) = 2$. The triangle inequality holds because to change $x$ into $z$ you never
   need to change more positions than changing $x$ into $y$ and then $y$ into $z$.
5. **The discrete metric** on any set: $d(x, y) = 1$ if $x \neq y$ and 0 if $x = y$. Useless for computing, invaluable for
   counterexamples.

The Hamming distance is the mathematics behind error-correcting codes. A code is a chosen set of codewords that are far
apart. If every two codewords differ in at least $2t + 1$ places, a received word with at most $t$ errors is closer to the
codeword that was sent than to any other (by the triangle inequality, Exercise 12), so the receiver can correct it. When
Mariner 9 orbited Mars in 1971 and 1972, its pictures came home using a Reed-Muller code: 64 codewords of length 32, any
two differing in at least 16 places, so up to 7 flipped bits in each word could be corrected. The algebra of such codes is
in [Combinatorics Chapter 19](../combinatorics/19-Designs-and-Codes.md).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 135" role="img" aria-label="The unit ball around a point in three metrics on the plane: a round disc for the Euclidean metric, a diamond for the taxicab metric, and a square for the maximum metric.">
  <circle cx="60" cy="60" r="40" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="170,20 210,60 170,100 130,60" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <rect x="240" y="20" width="80" height="80" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <g fill="currentColor">
    <circle cx="60" cy="60" r="2.5"/><circle cx="170" cy="60" r="2.5"/><circle cx="280" cy="60" r="2.5"/>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="60" y="122">Euclidean d₂</text><text x="170" y="122">taxicab d₁</text><text x="280" y="122">maximum d∞</text>
  </g>
</svg>
</div>

### Open balls, open sets and closed sets

The **open ball** of radius $r > 0$ around $a$ is

$$
B(a, r) = \{x \in X : d(x, a) < r\},
$$

all points closer than $r$ to $a$. On the line, $B(a, r)$ is the interval $(a - r, a + r)$. In the plane its shape depends
on the metric, as the picture shows.

**Definition.** A set $U \subseteq X$ is **open** if around each of its points there is a ball inside $U$: for every
$a \in U$ there is $r > 0$ with $B(a, r) \subseteq U$. A set $F$ is **closed** if its complement $X \setminus F$ is open.

Intuitively, an open set does not contain any of its edge, and a closed set contains all of it.

**Examples on the line.**

- $(0, 1)$ is open: around $a \in (0, 1)$ take $r = \min(a, 1 - a)$.
- $[0, 1]$ is closed: its complement $(-\infty, 0) \cup (1, \infty)$ is open.
- $[0, 1)$ is neither: no ball around 0 stays inside it, and no ball around 1 stays inside its complement.
- $\mathbb{R}$ and the empty set are both open and closed.
- $\mathbb{Z}$ is closed (its complement is a union of open intervals $(n, n+1)$) and not open.
- $\mathbb{Q}$ is neither: every ball around any point contains both rationals and irrationals (density, Chapter 18).

An open ball really is open: if $x \in B(a, r)$, let $s = r - d(x, a) > 0$; then $B(x, s) \subseteq B(a, r)$ by the
triangle inequality, since $d(y, x) < s$ gives $d(y, a) < s + d(x, a) = r$.

**Theorem.** (a) Any union of open sets is open. (b) A finite intersection of open sets is open. (c) Any intersection of
closed sets is closed; a finite union of closed sets is closed.

*Proof.* (a) A point of the union lies in one of the sets, and a ball around it in that set lies in the union. (b) If $a$
lies in $U_1, \ldots, U_n$, with balls of radii $r_1, \ldots, r_n$, the ball of radius $\min r_i$ lies in all of them.
(c) Take complements in (a) and (b). $\square$

The word "finite" matters: $\bigcap_{n \ge 1} (-1/n, 1/n) = \{0\}$ is an intersection of open sets that is not open. (A
minimum of infinitely many radii can be 0.)

### Limit points, closure and sequences

A point $a$ is a **limit point** of a set $S$ if every ball around $a$ contains a point of $S$ other than $a$. The
**closure** $\overline{S}$ is $S$ together with all its limit points; the **interior** is the set of points that have a
ball around them inside $S$.

*Examples:* the closure of $(0, 1)$ is $[0, 1]$; the closure of $\mathbb{Q}$ is $\mathbb{R}$ and its interior is empty; the
set $\{1/n : n \ge 1\}$ has exactly one limit point, 0.

**Theorem (closed sets and sequences).** A set $F$ is closed if and only if whenever $x_n \in F$ and $x_n \to x$, the limit
$x$ is in $F$.

*Proof.* Suppose $F$ is closed and $x_n \to x$ with all $x_n \in F$. If $x \notin F$, some ball $B(x, r)$ lies in the open
complement; but $x_n$ is in that ball for large $n$, a contradiction. Conversely, suppose $F$ contains the limits of its
convergent sequences, and let $x \notin F$. If no ball around $x$ missed $F$, we could choose $x_n \in F \cap B(x, 1/n)$,
and then $x_n \to x$, forcing $x \in F$. So some ball around $x$ misses $F$: the complement is open. $\square$

### Continuity in the language of open sets

A function $f : X \to Y$ between metric spaces is **continuous at $a$** if for every $\varepsilon > 0$ there is
$\delta > 0$ with $d_Y(f(x), f(a)) < \varepsilon$ whenever $d_X(x, a) < \delta$. This is the definition of Chapter 3, with
$|\cdot|$ replaced by $d$.

**Theorem.** $f$ is continuous at every point if and only if for every open set $V \subseteq Y$, the preimage
$f^{-1}(V) = \{x : f(x) \in V\}$ is open in $X$.

*Proof.* Suppose $f$ is continuous and $V$ is open. If $f(a) \in V$, there is a ball $B(f(a), \varepsilon) \subseteq V$, and
continuity gives $\delta$ with $f(B(a, \delta)) \subseteq B(f(a), \varepsilon) \subseteq V$, so $B(a, \delta) \subseteq f^{-1}(V)$. Conversely, if preimages of open sets are open, apply this to $V = B(f(a), \varepsilon)$: its preimage is open
and contains $a$, so it contains a ball $B(a, \delta)$, which is exactly the epsilon-delta condition. $\square$

This version mentions no distances at all, only open sets. That is the starting point of **topology**: a topological space
is a set with a chosen family of "open" sets obeying the rules of the theorem above, and continuity is defined by
preimages. Everything in 20.2 and 20.3 makes sense in that generality.

**Example.** The set $\{(x, y) : x^2 + y^2 < 1, \ y > x^3\}$ is open in the plane, because it is
$f^{-1}((-\infty, 1)) \cap g^{-1}((0, \infty))$ with the continuous functions $f(x, y) = x^2 + y^2$ and
$g(x, y) = y - x^3$. No balls need to be drawn.

**The open sets of the line.** Every open subset of $\mathbb{R}$ is a union of countably many disjoint open intervals.
(Idea: each point of $U$ lies in a largest open interval inside $U$, found by taking the infimum and supremum of how far
you can go left and right; two such intervals are equal or disjoint; and each contains a rational, so there are at most
countably many.) In the plane and higher dimensions nothing so simple is true.

## 20.2 Compactness

*Level: advanced.* In Chapter 18 the extreme value theorem and the Heine-Cantor theorem had proofs with the same shape,
and both relied on one feature of $[a, b]$: every sequence in it has a subsequence converging to a point of $[a, b]$. On
$(0, 1)$ or $[0, \infty)$ both theorems fail. Compactness is the name for the feature, and there are two ways to say it.

**Definition (sequential).** A metric space $K$ is **sequentially compact** if every sequence in $K$ has a subsequence
converging to a point of $K$.

**Definition (open covers).** An **open cover** of $K$ is a family of open sets whose union contains $K$. $K$ is
**compact** if every open cover has a **finite subcover**: finitely many of the sets already cover $K$.

The open cover definition looks strange at first. Here is what it rules out. The sets $U_n = (1/n, 1)$ for
$n = 2, 3, \ldots$ cover $(0, 1)$, because every $x > 0$ has $1/n < x$ for some $n$. But any finitely many of them have a
largest $n$, and then they miss $(0, 1/n]$. So $(0, 1)$ is not compact: it "leaks" at 0. Likewise $(n - 1, n + 1)$ for
$n \in \mathbb{Z}$ cover $\mathbb{R}$ with no finite subcover: $\mathbb{R}$ leaks at infinity.

**Theorem.** For metric spaces, compact and sequentially compact are equivalent.

The proof that sequentially compact implies compact takes a page (it passes through "totally bounded": for each
$\varepsilon$, finitely many $\varepsilon$-balls cover); see Munkres, *Topology*, Theorem 28.2. The other direction is
Exercise 6. In general topological spaces the two notions differ, and the open cover version is the one that generalises.

### The Heine-Borel theorem

**Theorem (Heine-Borel).** A closed bounded interval $[a, b]$ is compact.

*Proof.* Let $\mathcal{U}$ be an open cover of $[a, b]$. Let $S$ be the set of $x \in [a, b]$ such that $[a, x]$ can be
covered by finitely many sets from $\mathcal{U}$. Then $a \in S$ (one set containing $a$ covers $[a, a]$), and $S$ is
bounded by $b$, so $c = \sup S$ exists, with $a \le c \le b$.

The point $c$ lies in some $U \in \mathcal{U}$, and since $U$ is open, $(c - r, c + r) \subseteq U$ for some $r > 0$. By the
epsilon test for suprema there is $x \in S$ with $x > c - r$. Cover $[a, x]$ by finitely many sets and add $U$: these
finitely many sets cover $[a, y]$ for every $y < c + r$ with $y \le b$. So every such $y$ is in $S$. If $c < b$, that gives
points of $S$ beyond $c$, contradicting $c = \sup S$. So $c = b$, and taking $y = b$ shows $b \in S$: $[a, b]$ has a
finite subcover. $\square$

**Theorem (Heine-Borel in $\mathbb{R}^n$).** A subset of $\mathbb{R}^n$ is compact if and only if it is closed and bounded.

*Proof sketch.* If $K$ is closed and bounded, every sequence in $K$ is bounded, so by Bolzano-Weierstrass in $\mathbb{R}^n$
(18.5) it has a convergent subsequence, and its limit lies in $K$ because $K$ is closed. So $K$ is sequentially compact,
hence compact. The converse is the next theorem. $\square$

**Theorem.** In any metric space, a compact set $K$ is closed and bounded. A closed subset of a compact set is compact.

*Proof.* *Bounded:* the balls $B(a, n)$, $n = 1, 2, \ldots$, around a fixed point cover $K$; a finite subcover means $K$
lies in one ball. *Closed:* if $x_n \in K$ and $x_n \to x$, then (sequential compactness) a subsequence converges to a point
of $K$, but it also converges to $x$, and limits are unique; so $x \in K$. *Closed subsets:* if $F \subseteq K$ is closed,
a sequence in $F$ has a subsequence converging to a point of $K$, which lies in $F$ because $F$ is closed. $\square$

**Closed and bounded is not enough in general.** Two examples.

- An infinite set with the discrete metric is closed and bounded (every distance is at most 1). The balls $B(x, 1/2) = \{x\}$ cover it, and no finitely many do.
- In $C[0, 1]$ with the sup metric, the closed ball $\{f : \|f\|_\infty \le 1\}$ is closed and bounded. The sequence
  $f_n(x) = x^n$ lies in it and has no convergent subsequence: a uniform limit of a subsequence would be continuous, but the
  pointwise limit is the discontinuous function of 19.1. So the ball is not compact.

The second example is typical: in infinite-dimensional spaces, closed balls are never compact (Chapter 22). Arzelà and
Ascoli found which sets of functions *are* compact: those that are bounded and "equicontinuous" (one $\delta$ for every
function in the set and every point).

### What compactness does

**Theorem.** A continuous image of a compact set is compact: if $f : K \to Y$ is continuous and $K$ is compact, then
$f(K)$ is compact.

*Proof.* Let $\mathcal{V}$ be an open cover of $f(K)$. The preimages $f^{-1}(V)$, $V \in \mathcal{V}$, are open (20.1) and
cover $K$, so finitely many cover $K$. The corresponding finitely many $V$ cover $f(K)$. $\square$

**Corollary (extreme value theorem, general form).** A continuous real function on a compact space is bounded and attains
its maximum and minimum.

*Proof.* $f(K)$ is a compact subset of $\mathbb{R}$, so it is closed and bounded. A non-empty closed bounded set of reals
contains its supremum (the supremum is a limit of points of the set, by the epsilon test). $\square$

So the EVT of Chapter 18 holds on a closed disc, on a sphere, on a closed box in $\mathbb{R}^n$, on any compact set. That is
what made the second derivative test and Lagrange multipliers of [Chapter 15](15-Functions-of-Several-Variables.md) safe on
closed bounded regions. The Heine-Cantor theorem generalises the same way: a continuous function on a compact metric space
is uniformly continuous, with the proof of 18.7 word for word.

**Example.** The distance from a point $p$ to a closed set $F$ in $\mathbb{R}^n$ is attained: there is a nearest point of
$F$. If $F$ is not bounded, intersect it with a big closed ball around $p$ containing at least one point of $F$; the
intersection is compact, and the continuous function $x \mapsto d(p, x)$ has a minimum on it.

## 20.3 Connectedness

*Level: advanced.* The intermediate value theorem says a continuous function cannot get from negative to positive without
passing through zero. The reason is that an interval is "in one piece". What does that mean?

**Definition.** A metric space $X$ is **disconnected** if it can be written as the union of two disjoint non-empty open
sets. Otherwise it is **connected**. A subset is connected if it is connected with the distance it inherits.

Equivalently, $X$ is connected if the only subsets that are both open and closed are $\varnothing$ and $X$.

**Examples.** $[0, 1] \cup [2, 3]$ is disconnected: the two pieces are each open within the set (each is the intersection
of the set with an open interval, such as $(-1, 1.5)$ and $(1.5, 4)$). The rationals are disconnected: split them into
$\{q < \sqrt 2\}$ and $\{q > \sqrt 2\}$, both open in $\mathbb{Q}$. Once again the gap at $\sqrt 2$ is the culprit.

**Theorem.** A subset of $\mathbb{R}$ is connected if and only if it is an interval (a set $I$ such that whenever
$a, b \in I$ and $a < c < b$, also $c \in I$).

*Proof.* If $I$ is not an interval, there are $a < c < b$ with $a, b \in I$ and $c \notin I$. Then
$I \cap (-\infty, c)$ and $I \cap (c, \infty)$ split $I$ into two disjoint non-empty open pieces.

Now let $I$ be an interval and suppose $I = A \cup B$ with $A, B$ disjoint, non-empty and open in $I$. Pick $a \in A$ and
$b \in B$, say $a < b$; then $[a, b] \subseteq I$. Let $c = \sup (A \cap [a, b])$. Then $c \in [a, b] \subseteq I$, so $c$
is in $A$ or in $B$.

- If $c \in A$: then $c < b$ (since $b \in B$), and $A$ is open in $I$, so a small interval $[c, c + r)$ lies in $A$ and in
  $[a, b]$, giving points of $A \cap [a, b]$ above $c$. Contradiction.
- If $c \in B$: then $c > a$, and $B$ open gives $(c - r, c] \subseteq B$ for some $r > 0$, so no point of
  $A \cap [a,b]$ lies in $(c - r, c]$, and none lies above $c$. Then $c - r$ is a smaller upper bound. Contradiction.

So no such split exists. $\square$

This is the proof of the IVT in Chapter 18, dressed differently: the same supremum, the same two cases. And now the IVT
comes out as a special case of a general principle.

**Theorem.** A continuous image of a connected space is connected.

*Proof.* If $f(X) = A \cup B$ were a split into disjoint non-empty open pieces, then $f^{-1}(A)$ and $f^{-1}(B)$ would
split $X$ the same way. $\square$

**Corollary (IVT again).** If $f : [a, b] \to \mathbb{R}$ is continuous, then $f([a, b])$ is connected, hence an interval,
hence contains every value between $f(a)$ and $f(b)$.

**Example.** There is no continuous function from $[0, 1]$ onto $\{0, 1\}$: the image would be connected, and $\{0, 1\}$
is not. More usefully: if a continuous function on an interval only takes integer values, it is constant.

**Path-connected.** A set is **path-connected** if any two of its points can be joined by a continuous path
$\gamma : [0, 1] \to X$. Path-connected sets are connected (if $X = A \cup B$ were a split, a path from a point of $A$ to a
point of $B$ would split $[0, 1]$). The converse fails: the **topologist's sine curve**, the graph of $\sin(1/x)$ for
$0 < x \le 1$ together with the segment $\{0\} \times [-1, 1]$, is connected but no path joins the segment to the curve.
Open connected subsets of $\mathbb{R}^n$, however, are always path-connected, and that is the case that matters in
[Chapter 17](17-Vector-Calculus.md) for conservative fields and in complex analysis.

## 20.4 Completeness and the contraction mapping theorem

*Level: advanced to expert.* A sequence $(x_n)$ in a metric space is **Cauchy** if for every $\varepsilon > 0$ there is $N$
with $d(x_m, x_n) < \varepsilon$ for all $m, n \ge N$. Every convergent sequence is Cauchy (triangle inequality). A metric
space is **complete** if every Cauchy sequence converges to a point of the space.

**Examples.**

- $\mathbb{R}$ is complete (18.5). So is $\mathbb{R}^n$ with any of the three metrics: a Cauchy sequence of points has
  Cauchy coordinates, which converge.
- $\mathbb{Q}$ is not: the decimal approximations to $\sqrt 2$ are Cauchy with no rational limit. Nor is $(0, 1)$: the
  sequence $1/n$ is Cauchy, and its limit 0 is outside.
- A closed subset of a complete space is complete (the limit exists in the big space and, by closedness, lies in the
  subset).
- Every compact metric space is complete (a Cauchy sequence with a convergent subsequence converges, as in 18.5).

**Theorem.** $C[a, b]$ with the sup metric is complete.

*Proof.* A Cauchy sequence in this metric satisfies the uniform Cauchy criterion of 19.1, so it converges uniformly to
some function $f$, and $f$ is continuous by 19.2. So the limit lies in $C[a, b]$. $\square$

That one sentence packages all of Chapter 19. With it we can prove a theorem that solves equations of every kind.

### The contraction mapping theorem

A map $T : X \to X$ is a **contraction** if there is a constant $k < 1$ with

$$
d(T(x), T(y)) \le k\, d(x, y) \quad \text{for all } x, y \in X.
$$

It brings any two points closer together by at least the factor $k$. A **fixed point** of $T$ is a point with $T(x) = x$.

**Contraction mapping theorem (Banach, 1922).** Let $X$ be a non-empty complete metric space and $T : X \to X$ a
contraction with constant $k < 1$. Then $T$ has exactly one fixed point $x^*$. Moreover, for any starting point $x_0$, the
iterates $x_{n+1} = T(x_n)$ converge to $x^*$, with

$$
d(x_n, x^*) \le \frac{k^n}{1 - k}\, d(x_1, x_0).
$$

*Proof.* *Uniqueness:* if $T(x) = x$ and $T(y) = y$, then $d(x, y) = d(T(x), T(y)) \le k\, d(x, y)$, and since $k < 1$
this forces $d(x, y) = 0$.

*Existence:* by induction $d(x_{n+1}, x_n) \le k^n d(x_1, x_0)$, since each step shrinks the previous one by $k$. For
$m > n$, the triangle inequality and the geometric series give

$$
d(x_m, x_n) \le \sum_{j=n}^{m-1} d(x_{j+1}, x_j) \le d(x_1, x_0) \sum_{j=n}^{\infty} k^j = \frac{k^n}{1 - k}\, d(x_1, x_0).
$$

This tends to 0 as $n \to \infty$, so $(x_n)$ is Cauchy, and by completeness it converges to some $x^*$. A contraction is
continuous (take $\delta = \varepsilon$), so $T(x^*) = \lim T(x_n) = \lim x_{n+1} = x^*$. Letting $m \to \infty$ in the
displayed inequality gives the error bound. $\square$

Every hypothesis is needed. On the incomplete space $(0, 1]$, $T(x) = x/2$ is a contraction with no fixed point (the
iterates head for the missing 0). On $[1, \infty)$, $T(x) = x + 1/x$ shrinks every distance but not by a fixed factor, and
has no fixed point (Exercise 10).

**Example: solving $x = \cos x$.** Take $X = [0, 1]$, complete as a closed subset of $\mathbb{R}$. The map $T(x) = \cos x$
sends $[0, 1]$ into $[\cos 1, 1] \subseteq [0, 1]$, and by the mean value theorem
$|\cos x - \cos y| \le \sin(1)\, |x - y|$, since $|\sin t| \le \sin 1 \approx 0.8415$ on $[0, 1]$. So $T$ is a contraction
with $k = \sin 1$. Starting from $x_0 = 1$:

$$
1,\ 0.5403,\ 0.8576,\ 0.6543,\ 0.7935,\ 0.7014,\ 0.7640,\ \ldots \to 0.739085\ldots
$$

The error bound promises 6 correct decimals after $n$ steps once $0.8415^n \cdot 0.4597/0.1585 < 10^{-6}$, which first
happens at $n = 87$. In practice 32 steps suffice: the bound is safe, not sharp. (Newton's method, Chapter 7, needs only three
steps for the same accuracy.)

The theorem is the rigorous form of a calculator game: press cos again and again and watch the display settle. The
Topics lesson [Iteration and fixed points](../../topics/patterns/level-8/05-iteration-fixed-points.md) plays it.

### Picard's theorem, proved

[Chapter 14](14-Differential-Equations.md) stated that the initial value problem

$$
y'(t) = F(t, y(t)), \qquad y(t_0) = y_0
$$

has exactly one solution near $t_0$ when $F$ is reasonable, and sketched Picard's iteration. Now we prove it.

**Picard-Lindelöf theorem.** Let $F$ be continuous on the rectangle $R = \{|t - t_0| \le a, \ |y - y_0| \le b\}$, with
$|F| \le M$ on $R$, and **Lipschitz in $y$**: $|F(t, y) - F(t, z)| \le L|y - z|$ for all $(t, y), (t, z) \in R$. Let
$h > 0$ satisfy $h \le a$, $h \le b/M$ and $hL < 1$. Then there is exactly one continuous function $y$ on
$[t_0 - h, t_0 + h]$ with values in $[y_0 - b, y_0 + b]$ solving the problem.

*Proof.* **Step 1: an integral equation.** By the fundamental theorem of calculus, a continuous $y$ solves the problem if
and only if

$$
y(t) = y_0 + \int_{t_0}^{t} F(s, y(s))\, ds \quad \text{for all } t \in [t_0 - h, t_0 + h].
$$

(If $y$ solves the differential equation, integrate. If $y$ solves the integral equation, the right side is
differentiable with derivative $F(t, y(t))$, and at $t_0$ it equals $y_0$.)

**Step 2: the space.** Let $X$ be the set of continuous functions on $I = [t_0 - h, t_0 + h]$ with
$|y(t) - y_0| \le b$ for all $t$, with the sup metric. It is a closed subset of the complete space $C(I)$ (a uniform limit
of such functions still satisfies the inequality), so it is complete. It is not empty: the constant $y_0$ is in it.

**Step 3: the map.** Define $(Ty)(t) = y_0 + \int_{t_0}^{t} F(s, y(s))\, ds$. For $y \in X$, $Ty$ is continuous, and

$$
|(Ty)(t) - y_0| \le \left| \int_{t_0}^{t} M \, ds \right| \le M h \le b,
$$

so $T$ maps $X$ into $X$. This is where $h \le b/M$ is used: the solution cannot leave the rectangle in time $h$.

**Step 4: a contraction.** For $y, z \in X$ and $t \in I$,

$$
|(Ty)(t) - (Tz)(t)| \le \left| \int_{t_0}^{t} |F(s, y(s)) - F(s, z(s))|\, ds \right| \le h L\, \|y - z\|_\infty.
$$

Taking the supremum over $t$: $\|Ty - Tz\|_\infty \le hL \, \|y - z\|_\infty$, with $hL < 1$.

**Step 5.** By the contraction mapping theorem $T$ has exactly one fixed point in $X$, which by Step 1 is exactly one
solution. $\square$

The proof gives more than existence. The iterates $y_{n+1} = T y_n$ starting from the constant $y_0$ are Picard's
approximations, and they converge uniformly to the solution, with an explicit error bound. (The condition $hL < 1$ can be
removed, giving a solution on the whole interval $|t - t_0| \le \min(a, b/M)$, by using a weighted sup norm or by applying
the theorem to a power of $T$; see Teschl or Hartman in the Further reading.)

**Example.** For $y' = y$, $y(0) = 1$, the Picard iterates are

$$
y_0 = 1, \quad y_1 = 1 + \int_0^t 1\, ds = 1 + t, \quad y_2 = 1 + \int_0^t (1 + s)\, ds = 1 + t + \frac{t^2}{2}, \quad \ldots
$$

and by induction $y_n(t) = \sum_{k=0}^{n} t^k/k!$, the Taylor polynomials of $e^t$. The theorem proves they converge to
the unique solution, so $e^t$ is the unique function with $y' = y$ and $y(0) = 1$.

**Why Lipschitz matters.** The problem $y' = 3y^{2/3}$, $y(0) = 0$, has $F(y) = 3y^{2/3}$, continuous but not Lipschitz
near $y = 0$ (its slope is infinite there). And uniqueness fails: both $y = 0$ and $y = t^3$ are solutions. *Check:* for
$y = t^3$, $y' = 3t^2$ and $3y^{2/3} = 3t^2$. A falling body with this law could sit still for a while and then start
moving at any moment, a reminder that real physical laws are Lipschitz for a reason.

The same theorem, in $\mathbb{R}^n$ instead of $\mathbb{R}$, covers systems of equations, and so every equation of
Newtonian mechanics: a spacecraft's trajectory from Earth to Mars is determined uniquely by its position and velocity at
one moment, because the gravitational force is Lipschitz away from the planets' centres.

## 20.5 The Cantor set

*Level: advanced.* Start with $[0, 1]$. Remove the open middle third $(1/3, 2/3)$. From each of the two remaining
intervals remove its open middle third. Keep going for ever. What is left is the **Cantor set** $C$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 130" role="img" aria-label="The first five stages of the Cantor set: the unit interval, then two thirds, then four ninths, then eight pieces, then sixteen pieces, each stage removing the open middle third of every piece.">
  <g stroke="#eea66f" stroke-width="7">
    <line x1="20.00" y1="20" x2="320.00" y2="20"/>
    <line x1="20.00" y1="42" x2="120.00" y2="42"/><line x1="220.00" y1="42" x2="320.00" y2="42"/>
    <line x1="20.00" y1="64" x2="53.33" y2="64"/><line x1="86.67" y1="64" x2="120.00" y2="64"/><line x1="220.00" y1="64" x2="253.33" y2="64"/><line x1="286.67" y1="64" x2="320.00" y2="64"/>
  </g>
  <g stroke="#9cc9ea" stroke-width="7">
    <line x1="20.00" y1="86" x2="31.11" y2="86"/><line x1="42.22" y1="86" x2="53.33" y2="86"/><line x1="86.67" y1="86" x2="97.78" y2="86"/><line x1="108.89" y1="86" x2="120.00" y2="86"/><line x1="220.00" y1="86" x2="231.11" y2="86"/><line x1="242.22" y1="86" x2="253.33" y2="86"/><line x1="286.67" y1="86" x2="297.78" y2="86"/><line x1="308.89" y1="86" x2="320.00" y2="86"/>
    <line x1="20.00" y1="108" x2="23.70" y2="108"/><line x1="27.41" y1="108" x2="31.11" y2="108"/><line x1="42.22" y1="108" x2="45.93" y2="108"/><line x1="49.63" y1="108" x2="53.33" y2="108"/><line x1="86.67" y1="108" x2="90.37" y2="108"/><line x1="94.07" y1="108" x2="97.78" y2="108"/><line x1="108.89" y1="108" x2="112.59" y2="108"/><line x1="116.30" y1="108" x2="120.00" y2="108"/><line x1="220.00" y1="108" x2="223.70" y2="108"/><line x1="227.41" y1="108" x2="231.11" y2="108"/><line x1="242.22" y1="108" x2="245.93" y2="108"/><line x1="249.63" y1="108" x2="253.33" y2="108"/><line x1="286.67" y1="108" x2="290.37" y2="108"/><line x1="294.07" y1="108" x2="297.78" y2="108"/><line x1="308.89" y1="108" x2="312.59" y2="108"/><line x1="316.30" y1="108" x2="320.00" y2="108"/>
  </g>
  <g fill="currentColor" font-size="11" text-anchor="middle">
    <text x="20" y="126">0</text><text x="120" y="126">1/3</text><text x="220" y="126">2/3</text><text x="320" y="126">1</text>
  </g>
</svg>
</div>

Write $C_0 = [0, 1]$, $C_1 = [0, 1/3] \cup [2/3, 1]$, and in general $C_n$ for the union of the $2^n$ closed intervals of
length $3^{-n}$ left after $n$ steps. Then $C = \bigcap_{n \ge 0} C_n$.

**It has length zero.** $C_n$ has total length $(2/3)^n \to 0$, and $C \subseteq C_n$ for every $n$. Equivalently, the
removed intervals have total length

$$
\frac13 + 2 \cdot \frac19 + 4 \cdot \frac{1}{27} + \cdots = \frac13 \sum_{n \ge 0} \left(\frac23\right)^n = \frac13 \cdot 3 = 1.
$$

We removed "everything", length-wise.

**It is not empty, and much more.** The endpoints $0, 1, 1/3, 2/3, 1/9, 2/9, \ldots$ are never removed. But the Cantor set
is far bigger than its endpoints. The clean description uses **base 3**. Every $x \in [0, 1]$ has a ternary expansion
$x = \sum_{n \ge 1} t_n 3^{-n}$ with digits $t_n \in \{0, 1, 2\}$. The first step removes exactly the numbers whose first
digit must be 1; the second removes those whose second digit must be 1; and so on. So:

$$
C = \left\{ \sum_{n \ge 1} t_n 3^{-n} : \text{every } t_n \in \{0, 2\} \right\}.
$$

(The endpoints have two expansions, for example $1/3 = 0.1000\ldots_3 = 0.0222\ldots_3$; one of them avoids the digit 1,
and that one counts.)

**Example.** $1/4 = 0.020202\ldots_3$, because $\sum_{k \ge 1} 2 \cdot 9^{-k} = 2 \cdot \frac{1/9}{1 - 1/9} = \frac14$.
So $1/4$ is in the Cantor set, though it is not an endpoint of any removed interval: it lies in $C_n$ for every $n$, alternately
in the left and the right piece of each interval, never at an end.

**It is uncountable.** Map $x = \sum t_n 3^{-n} \in C$ to the binary number $\sum (t_n/2) 2^{-n}$: replace each digit 2 by
1 and read in base 2. This map from $C$ onto $[0, 1]$ hits every number in $[0, 1]$. Since $[0, 1]$ is uncountable
(Chapter 18), so is $C$. So the Cantor set has as many points as the whole interval, yet length zero.

**It is compact.** Each $C_n$ is a finite union of closed intervals, hence closed; the intersection of closed sets is
closed; and $C \subseteq [0, 1]$ is bounded. By Heine-Borel, $C$ is compact.

**It contains no interval** (it is **nowhere dense**): any interval of length $\ell > 0$ is longer than $3^{-n}$ for
large $n$, so it cannot fit inside $C_n$, whose pieces have length $3^{-n}$. And it is **totally disconnected**: between
any two points of $C$ there is a removed gap, so the only connected subsets are single points.

**It is perfect**: every point of $C$ is a limit point of $C$. Given $x \in C$ with digits $t_n$, change the $n$th digit
(from 0 to 2 or 2 to 0) to get a point of $C$ within $2 \cdot 3^{-n}$ of $x$.

**Dimension.** The Cantor set is made of 2 copies of itself, each scaled by $1/3$. A line segment is made of 3 copies scaled
by $1/3$, a square of $9 = 3^2$, a cube of $27 = 3^3$. If "$N$ copies at scale $1/s$" means dimension $D$ with $N = s^D$,
the Cantor set has

$$
D = \frac{\ln 2}{\ln 3} \approx 0.6309,
$$

somewhere between a point and a line. This is its Hausdorff dimension, and the Cantor set is the simplest **fractal**.

**Why analysts care.** The Cantor set is the standard source of counterexamples. The **Cantor function** (the "devil's
staircase"), defined on $C$ by $\sum t_n 3^{-n} \mapsto \sum (t_n/2) 2^{-n}$ and extended to be constant on each removed
interval, is continuous, increasing, goes from 0 to 1, and has derivative 0 at every point outside $C$, that is, on a set
of total length 1. So the fundamental theorem of calculus in the form $f(1) - f(0) = \int_0^1 f'$ fails for it: the left
side is 1, the right side is 0. Chapter 21 explains which functions the theorem does hold for. And every compact metric
space is a continuous image of the Cantor set (the Hausdorff-Alexandroff theorem), so in a sense it is the mother of all
compact spaces.

Henry John Stephen Smith described such sets in 1875, and Cantor's version appeared in 1883. The Topics lesson
[The Cantor set](../../topics/infinity/level-7/05-cantor-set.md) builds it gently.

<figure class="play" data-play="fractal" data-kind="cantor"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The Cantor set: keep removing the middle thirds. What remains has total length 0 yet as many points as the whole line.</figcaption></figure>

## A short history

The pieces of this chapter came from different places. Open and closed sets on the line grew out of Cantor's work on sets
of points in the 1870s and 1880s, prompted by questions about where a Fourier series may fail to converge. Eduard Heine
(1872) and Émile Borel (1895) proved the covering theorem for intervals, Borel for countable covers; Henri Lebesgue and
others extended it. Maurice Fréchet introduced metric spaces, and the idea of treating functions as points of a space, in
his 1906 thesis; Felix Hausdorff's *Grundzüge der Mengenlehre* (1914) gave the axioms of a topological space in terms of
neighbourhoods. Stefan Banach's thesis, published in 1922, contains the contraction mapping theorem; the method of
successive approximation behind it goes back to Liouville and to Émile Picard's papers around 1890, and Ernst Lindelöf
sharpened the existence theorem in 1894.

## Check yourself

??? question "1. Compute $d_1$, $d_2$ and $d_\infty$ between $(-1, 3)$ and $(2, -1)$."

    The coordinate differences are 3 and 4. So $d_1 = 3 + 4 = 7$, $d_2 = \sqrt{9 + 16} = 5$ and $d_\infty = \max(3, 4) = 4$.
    *Check:* $d_\infty \le d_2 \le d_1 \le 2d_\infty$ reads $4 \le 5 \le 7 \le 8$.

??? question "2. Prove the triangle inequality for the taxicab metric on the plane."

    $d_1(p, r) = |x_p - x_r| + |y_p - y_r| \le (|x_p - x_q| + |x_q - x_r|) + (|y_p - y_q| + |y_q - y_r|) = d_1(p, q) + d_1(q, r)$,
    using $|a + b| \le |a| + |b|$ in each coordinate.

??? question "3. Which of these subsets of $\mathbb{R}$ are open, closed, both or neither: $[2, 5]$, $(2, 5)$, $(2, 5]$, $\{1/n : n \ge 1\}$, $\{0\} \cup \{1/n : n \ge 1\}$?"

    $[2,5]$ closed, not open. $(2,5)$ open, not closed. $(2,5]$ neither. $\{1/n\}$ is neither: it is not open (no ball
    around $1$ fits inside), and it is not closed because $1/n \to 0$ and $0$ is missing. Adding 0 gives a closed set (now it
    contains its only limit point), still not open.

??? question "4. Find the interior, closure and limit points of $S = \mathbb{Q} \cap [0, 1]$."

    Interior: empty, since every interval contains irrationals. Closure: $[0, 1]$, since every point of $[0, 1]$ is a limit
    of rationals in $[0, 1]$. Limit points: all of $[0, 1]$ (every ball around such a point contains infinitely many points
    of $S$).

??? question "5. Show that the open cover $\{(1/n, 2) : n \ge 1\}$ of $(0, 1]$ has no finite subcover. Why does this not contradict Heine-Borel?"

    The union is $(0, 2)$, which contains $(0, 1]$. A finite subfamily has a largest index $N$ and its union is
    $(1/N, 2)$, which misses $1/(2N) \in (0, 1]$. No contradiction: $(0, 1]$ is not closed, so Heine-Borel does not apply.

??? question "6. Prove that a compact metric space is sequentially compact."

    Let $(x_n)$ be a sequence in compact $K$ with no convergent subsequence. Then each point $y \in K$ has a ball
    $B(y, r_y)$ containing $x_n$ for only finitely many $n$ (otherwise we could choose a subsequence converging to $y$,
    taking $x_{n_k} \in B(y, 1/k)$ with increasing $n_k$). These balls cover $K$, so finitely many do; but then together
    they contain $x_n$ for only finitely many $n$, while they must contain every $x_n$. Contradiction.

??? question "7. Show that $\mathbb{Q}$ is not connected but that it has no isolated points."

    $\{q \in \mathbb{Q} : q < \sqrt 2\}$ and $\{q \in \mathbb{Q} : q > \sqrt 2\}$ are disjoint, non-empty, open in
    $\mathbb{Q}$ (intersections of $\mathbb{Q}$ with open rays) and cover $\mathbb{Q}$. No isolated points: every ball
    around a rational contains other rationals, by density.

??? question "8. Show that $T(x) = \tfrac12 x + 1$ is a contraction on $\mathbb{R}$, find its fixed point, and the iterates from $x_0 = 0$."

    $|T(x) - T(y)| = \tfrac12 |x - y|$, so $k = 1/2$. Fixed point: $x = x/2 + 1$ gives $x = 2$. Iterates: $0, 1, 1.5, 1.75, 1.875, \ldots$, with $x_n = 2 - 2^{1-n}$. *Check:* the bound $k^n/(1-k) \cdot d(x_1, x_0) = 2^{1-n}$ is exactly the
    error here.

??? question "9. Compute the Picard iterates $y_1, y_2, y_3$ for $y' = 2ty$, $y(0) = 1$, and guess the solution."

    $y_1 = 1 + \int_0^t 2s\, ds = 1 + t^2$. $y_2 = 1 + \int_0^t 2s(1 + s^2)\,ds = 1 + t^2 + t^4/2$.
    $y_3 = 1 + \int_0^t 2s(1 + s^2 + s^4/2)\,ds = 1 + t^2 + t^4/2 + t^6/6$. These are the partial sums of
    $\sum t^{2k}/k! = e^{t^2}$. *Check:* $(e^{t^2})' = 2t e^{t^2}$.

??? question "10. Let $T(x) = x + 1/x$ on $X = [1, \infty)$. Show $|T(x) - T(y)| < |x - y|$ for $x \neq y$, that $X$ is complete, and that $T$ has no fixed point. Which hypothesis of the contraction theorem fails?"

    $T(x) - T(y) = (x - y)\left(1 - \frac{1}{xy}\right)$ and $0 \le 1 - 1/(xy) < 1$, so distances shrink. $X$ is closed in
    $\mathbb{R}$, hence complete, and $T$ maps $X$ into $X$. A fixed point would need $1/x = 0$. What fails is a *uniform*
    factor $k < 1$: as $x, y \to \infty$, $1 - 1/(xy) \to 1$.

??? question "11. Show that $3/4$ and $1/10$ are in the Cantor set, and that $1/2$ is not."

    $3/4 = 0.202020\ldots_3$ (it is $1 - 1/4$, and subtracting from $1 = 0.222\ldots_3$ swaps 0s and 2s in $1/4$).
    $1/10 = 0.\overline{0022}_3$: indeed $0.0022_3 = 8/81$ and $\frac{8/81}{1 - 1/81} = \frac{8}{80} = \frac{1}{10}$. Both use
    only 0 and 2. But $1/2 = 0.111\ldots_3$ is in the first removed interval $(1/3, 2/3)$.

??? question "12. A code has minimum Hamming distance $2t + 1$. Prove that if at most $t$ bits of a codeword $c$ are flipped, giving $r$, then $c$ is the unique codeword nearest to $r$."

    $d(r, c) \le t$. For any other codeword $c'$, $2t + 1 \le d(c, c') \le d(c, r) + d(r, c') \le t + d(r, c')$, so
    $d(r, c') \ge t + 1 > d(r, c)$. For Mariner 9's code, minimum distance $16 \ge 2 \cdot 7 + 1$, so $t = 7$.

## What you learned

- A metric space is a set with a distance obeying the triangle inequality; numbers, vectors, functions and bit strings are
  all examples.
- Open sets contain a ball around each point; closed sets contain the limits of their sequences; continuity means
  preimages of open sets are open.
- Compact means every open cover has a finite subcover; in $\mathbb{R}^n$ that is closed and bounded (Heine-Borel), but not
  in infinite-dimensional spaces. Continuous images of compact sets are compact, which is the EVT.
- The connected subsets of $\mathbb{R}$ are the intervals; continuous images of connected sets are connected, which is the
  IVT.
- $C[a, b]$ with the sup metric is complete; on a complete space a contraction has a unique fixed point, reached by
  iteration.
- Picard's theorem follows: Lipschitz differential equations have unique local solutions, and Picard's iterates converge to
  them.
- The Cantor set is compact, perfect, uncountable, totally disconnected and of length zero, with dimension
  $\ln 2/\ln 3$.

**Next:** [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md), a better integral for limits of functions, and
Fourier's series that break any periodic signal into waves.

## Further reading

- J. R. Munkres, *Topology*, 2nd edition, 2000 (Chapters 2 and 3: open sets, compactness, connectedness).
- W. Rudin, *Principles of Mathematical Analysis*, 3rd edition, 1976, Chapter 2.
- A. N. Kolmogorov and S. V. Fomin, *Introductory Real Analysis*, English translation 1970 (metric spaces and the
  contraction principle with many applications).
- S. Banach, "Sur les opérations dans les ensembles abstraits et leur application aux équations intégrales",
  *Fundamenta Mathematicae* 3, 1922.
- G. Teschl, *Ordinary Differential Equations and Dynamical Systems*, 2012; P. Hartman, *Ordinary Differential Equations*,
  1964 (Picard-Lindelöf in full).
- K. Falconer, *Fractal Geometry: Mathematical Foundations and Applications*, 1990 (the Cantor set and Hausdorff dimension).
- U of T guides: [MAT257 Unit 1, The topology of R^n](../../uoft/MAT257Y1/unit01.md),
  [MAT257 Unit 2, Compactness](../../uoft/MAT257Y1/unit02.md),
  [MAT257 Unit 3, Continuity and connectedness](../../uoft/MAT257Y1/unit03.md).
- Topics lessons: [The Cantor set](../../topics/infinity/level-7/05-cantor-set.md),
  [Iteration and fixed points](../../topics/patterns/level-8/05-iteration-fixed-points.md).
- Other books on this site: [Combinatorics, designs and codes](../combinatorics/19-Designs-and-Codes.md),
  [Geometry, manifolds and Riemannian geometry](../geometry/20-Manifolds-and-Riemannian-Geometry.md),
  [Number Theory, p-adic numbers](../number-theory/18-p-adic-Numbers.md) (a metric in which the triangle inequality is
  much stronger).
