# 8. Compactness

*A continuous function on a closed interval $[a, b]$ has a largest value. On the open interval $(0, 1)$ it need not:
$1/x$ is unbounded, and even $x$ itself never reaches a largest value. What does $[a, b]$ have that $(0, 1)$ lacks? Not
length, not boundedness, but a property called compactness: whenever a space is covered by open sets, finitely many of
them already suffice. This chapter defines compactness, proves the Heine-Borel theorem that identifies the compact sets
of $\mathbb{R}^n$, and shows why compactness is the engine behind the extreme value theorem, uniform continuity and the
homeomorphisms of Chapter 6. Then we compare it with the sequence version used in analysis, state Tychonoff's theorem
on infinite products (and see why it needs the axiom of choice), and finish by turning the plane into a sphere by adding
one point.*

!!! abstract "In this chapter"
    **You will learn:**

    - what open covers and compactness are, with examples and non-examples
    - the Heine-Borel theorem: a subset of $\mathbb{R}^n$ is compact exactly when it is closed and bounded
    - why continuous images of compact spaces are compact, giving the extreme value theorem
    - why a continuous bijection from a compact space to a Hausdorff space is a homeomorphism
    - the Lebesgue number lemma and uniform continuity
    - the equivalence of compactness, sequential compactness and "complete and totally bounded" for metric spaces
    - Tychonoff's theorem, its finite case proved, and its link with the axiom of choice
    - the one-point compactification, and why the plane plus one point is a sphere

    **You need:** [Chapters 5](05-Continuity-and-Homeomorphism.md) and [6](06-Building-New-Spaces.md) (continuity,
    homeomorphisms, products). From the Calculus book: the least upper bound property and Bolzano-Weierstrass
    ([Chapter 18](../calculus/18-The-Real-Numbers.md)) and metric spaces ([Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md)).
    For 8.5, the axiom of choice and Zorn's lemma from [Logic, Chapter 8](../logic/08-Axiomatic-Set-Theory.md).

    **Levels:** 8.1 to 8.3 are intermediate; 8.4 and 8.6 are advanced; 8.5 is expert.

## 8.1 Open covers

Why does a continuous function on $[a, b]$ have to be bounded? Near any one point $x$ it is bounded: continuity gives
an open interval around $x$ on which $|f| < |f(x)| + 1$. So $[a, b]$ is covered by open intervals, on each of which $f$
is bounded. If **finitely many** of these intervals already cover $[a, b]$, then $f$ is bounded by the largest of the
finitely many bounds. On $(0, 1)$ the same local bounds exist for $f(x) = 1/x$, but no finite collection of the intervals
covers all of $(0, 1)$, and $f$ is unbounded. The whole difference is in the words "finitely many".

**Definitions.** An **open cover** of a space $X$ is a family $\mathcal{U}$ of open sets whose union is $X$. A
**subcover** is a subfamily that still covers $X$. The space $X$ is **compact** if every open cover has a finite
subcover. A subset $A$ of a space is compact if it is compact in the subspace topology; equivalently (by the definition
of the subspace topology), every family of open sets of the big space whose union contains $A$ has a finite subfamily
whose union contains $A$.

Compactness is about **every** open cover. To show a space is compact, you must handle an arbitrary cover; to show that it
is not, one bad cover is enough.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 150" role="img" aria-label="The half-open interval from 0 to 1 covered by the intervals from 1 over n to 1 for n from 2 to 8, drawn as stacked bars that reach further and further left towards 0 without reaching it.">
  <g stroke="#9cc9ea" stroke-width="6">
    <line x1="170" y1="20" x2="310" y2="20"/><line x1="123.3" y1="34" x2="310" y2="34"/>
    <line x1="100" y1="48" x2="310" y2="48"/><line x1="86" y1="62" x2="310" y2="62"/>
    <line x1="76.7" y1="76" x2="310" y2="76"/><line x1="70" y1="90" x2="310" y2="90"/>
    <line x1="65" y1="104" x2="310" y2="104"/>
  </g>
  <line x1="30" y1="126" x2="310" y2="126" stroke="#eea66f" stroke-width="4"/>
  <circle cx="30" cy="126" r="4" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="310" cy="126" r="4" fill="currentColor"/>
  <g fill="currentColor" font-size="11" text-anchor="middle">
    <text x="30" y="144">0</text><text x="310" y="144">1</text>
    <text x="170" y="144">1/2</text><text x="100" y="144">1/4</text>
    <text x="150" y="24">n = 2</text><text x="45" y="108">n = 8</text>
  </g>
</svg>
</div>

### Non-examples

- **$\mathbb{R}$ is not compact.** The intervals $(-n, n)$, $n = 1, 2, 3, \dots$, cover $\mathbb{R}$, but finitely many
  of them have union $(-N, N)$ for the largest $N$ used, which misses $N$.
- **$(0, 1]$ is not compact.** The intervals $(1/n, 1]$, $n = 2, 3, \dots$, are open in $(0, 1]$ and cover it (every
  $x > 0$ has $1/n < x$ for large $n$). Finitely many have union $(1/N, 1]$, which misses $1/(2N)$. (See the picture.)
- **An infinite discrete space is not compact.** The one-point sets are open and cover it, and no proper subfamily covers.

### Examples

- **Finite spaces**, and more generally any space with only finitely many open sets, are compact: any cover is
  already finite once repeats are removed.
- **The convergent sequence $K = \{0\} \cup \{1/n : n \ge 1\}$ is compact.** Let $\mathcal{U}$ be a cover by open sets
  of $\mathbb{R}$. Some $U_0 \in \mathcal{U}$ contains $0$, and being open it contains an interval $(-\varepsilon, \varepsilon)$,
  hence all $1/n$ with $n > 1/\varepsilon$. The finitely many remaining points $1/n$ with $n \le 1/\varepsilon$ each lie
  in some member of $\mathcal{U}$. Those finitely many members together with $U_0$ cover $K$. The point $0$ is what makes
  this work: without it, $\{1/n\}$ is not compact (exercise 3).
- **Any set with the cofinite topology is compact.** Given a cover, pick any nonempty member $U_0$. Its complement is a
  finite set $\{x_1, \dots, x_k\}$; choose a member $U_i$ containing each $x_i$. Then $U_0, U_1, \dots, U_k$ cover.

### Closed sets and the finite intersection property

Taking complements turns statements about open covers into statements about closed sets. A family of sets has the
**finite intersection property** if every finite subfamily has a nonempty intersection.

**Theorem 8.1.** $X$ is compact if and only if every family of closed sets with the finite intersection property has a
nonempty intersection.

*Proof.* A family $\{C_i\}$ of closed sets has empty intersection exactly when the complements $U_i = X \setminus C_i$
cover $X$, and a finite subfamily of the $C_i$ has empty intersection exactly when the matching $U_i$ cover $X$. So "every
open cover has a finite subcover" says: if $\bigcap C_i = \varnothing$ then some finite intersection is empty. That is the
contrapositive of the statement in the theorem. $\square$

The most-used special case: in a compact space, a **decreasing sequence of nonempty closed sets**
$C_1 \supseteq C_2 \supseteq \cdots$ has a nonempty intersection, because any finite subfamily has intersection equal to
the smallest of its members. For closed intervals of $\mathbb{R}$ this is the nested interval property from
[Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md); for the open intervals $(0, 1/n)$ it fails, and indeed
$(0, 1)$ is not compact.

## 8.2 The Heine-Borel theorem

Which subsets of $\mathbb{R}^n$ are compact? The answer is simple and was first worked out for intervals.

**Theorem 8.2.** Every closed interval $[a, b]$ is compact.

*Proof.* Let $\mathcal{U}$ be a cover of $[a, b]$ by open sets of $\mathbb{R}$. Let $S$ be the set of $x \in [a, b]$
such that $[a, x]$ is covered by finitely many members of $\mathcal{U}$. Then $a \in S$ (one member contains $a$), and
$S$ is bounded by $b$, so $s = \sup S$ exists, with $a \le s \le b$.

The point $s$ lies in some $U \in \mathcal{U}$, which contains $(s - \varepsilon, s + \varepsilon)$ for some
$\varepsilon > 0$. Since $s$ is the least upper bound of $S$, some $x \in S$ has $x > s - \varepsilon$. Then $[a, x]$ is
covered by finitely many members, and adding $U$ covers $[a, t]$ for every $t$ in $[a, b]$ with $t < s + \varepsilon$.
So every such $t$ is in $S$. If $s < b$, the point $t = \min(s + \varepsilon/2, b)$ is in $S$ and larger than $s$,
contradicting $s = \sup S$. So $s = b$, and taking $t = b$ shows that $b \in S$: all of $[a, b]$ is covered by finitely
many members. $\square$

As with connectedness in [Chapter 7](07-Connectedness.md), the key step is the existence of a supremum. In $\mathbb{Q}$,
the interval $[0, 2] \cap \mathbb{Q}$ is not compact (exercise 1): compactness of closed intervals is another face of the
completeness of $\mathbb{R}$.

**Theorem 8.3 (Heine-Borel).** A subset of $\mathbb{R}^n$ is compact if and only if it is closed and bounded.

*Proof that closed and bounded sets are compact.* A bounded set lies in some cube $Q = [-M, M]^n$. We show $Q$ is compact;
then a closed subset of $Q$ is compact by Theorem 8.7(a) below.

Suppose some open cover $\mathcal{U}$ of $Q$ had no finite subcover. Cut $Q$ into $2^n$ closed cubes of half the side
length. If each of them had a finite subcover, so would $Q$; so at least one, call it $Q_1$, has none. Cut $Q_1$ into
$2^n$ halves and pick one, $Q_2$, with no finite subcover, and so on. This gives nested closed cubes
$Q \supseteq Q_1 \supseteq Q_2 \supseteq \cdots$, where $Q_k$ has side $2M / 2^k$ and is not covered by finitely many
members of $\mathcal{U}$.

In each coordinate the cubes give nested closed intervals whose lengths shrink to $0$, so by completeness
([Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md)) there is exactly one point $p$ in all the $Q_k$. It lies in
some $U \in \mathcal{U}$, which contains a ball $B(p, r)$. The cube $Q_k$ contains $p$ and has diameter
$\sqrt{n}\, 2M / 2^k$, which is less than $r$ for large $k$; then $Q_k \subseteq B(p, r) \subseteq U$. So $Q_k$ is
covered by the single member $U$, contradicting its choice. $\square$

*Proof that compact sets are closed and bounded.* This holds in every metric space:

**Theorem 8.4.** A compact subset $A$ of a metric space $X$ is closed and bounded.

*Proof.* Bounded: fix $p \in X$. The open balls $B(p, n)$, $n = 1, 2, \dots$, cover $A$; finitely many do, so
$A \subseteq B(p, N)$ for some $N$.

Closed: let $x \notin A$. The open sets $V_n = \{y : d(y, x) > 1/n\}$ cover $A$ (every point of $A$ is at positive
distance from $x$), and they increase with $n$, so finitely many of them cover $A$ exactly when a single one, $V_N$, does.
Then the ball $B(x, 1/N)$ misses $A$. Every point outside $A$ has a ball outside $A$, so the complement of $A$ is open. $\square$

*Examples.* The closed disc, the sphere $S^2$, the torus in $\mathbb{R}^3$, the Cantor set and any finite union of closed
boxes are compact. The open disc (not closed), a closed half-plane (not bounded) and the graph of $\sin(1/x)$ on $(0, 1]$
(not closed: its closure adds the segment $J$ of [Chapter 7](07-Connectedness.md)) are not. The topologist's sine curve
$G \cup J$ is compact.

**A warning.** "Closed and bounded" is not the same as compact in other metric spaces. Give $\mathbb{N}$ the metric
$d(m, n) = 1$ for $m \ne n$. The whole space is closed and bounded (every distance is at most 1), but it is an infinite
discrete space, so not compact. Section 8.4 gives the right replacement for "bounded" in general metric spaces.

## 8.3 Compact images and closed subsets

**Theorem 8.5.** If $X$ is compact and $f : X \to Y$ is continuous, then $f(X)$ is compact.

*Proof.* Let $\mathcal{V}$ be a family of open sets of $Y$ covering $f(X)$. The preimages $f^{-1}(V)$, $V \in \mathcal{V}$,
are open and cover $X$, so finitely many, $f^{-1}(V_1), \dots, f^{-1}(V_k)$, cover $X$. Then $V_1, \dots, V_k$ cover
$f(X)$. $\square$

**Corollary 8.6 (extreme value theorem).** If $X$ is compact and nonempty and $f : X \to \mathbb{R}$ is continuous, then
$f$ has a largest and a smallest value.

*Proof.* $f(X)$ is a compact subset of $\mathbb{R}$, so it is closed and bounded (Theorem 8.4). Being bounded and
nonempty, it has a supremum $M$; being closed, it contains $M$ (points of $f(X)$ come arbitrarily close to $M$). So
$M = f(x)$ for some $x$. The same for the infimum. $\square$

This is the theorem of [Calculus, Chapter 3](../calculus/03-Continuity.md), now for any compact space: a continuous
temperature field on the surface of a planet, idealised as a sphere, has a hottest and a coldest point; a continuous
function on a torus, or on the space of all orientations of a rover, has a maximum.

Since a homeomorphic image of a compact space is compact, **compactness is a topological invariant**. So:

- $[0, 1] \not\cong (0, 1)$ and $[0, 1] \not\cong [0, 1)$ (we also proved this with cut points in Chapter 7);
- $S^1 \not\cong \mathbb{R}$, and $S^2 \not\cong \mathbb{R}^2$: a sphere is compact, the plane is not. A map of a whole
  planet onto a whole plane, one-to-one and continuous both ways, cannot exist. Stereographic projection shows that
  removing one point is enough to make it possible.

**Theorem 8.7.** (a) A closed subset of a compact space is compact.
(b) A compact subset of a Hausdorff space is closed.

*Proof.* (a) Let $C$ be closed in the compact space $X$, and let $\mathcal{U}$ be a family of open sets of $X$ covering
$C$. Add the open set $X \setminus C$: this gives an open cover of $X$, which has a finite subcover. Removing
$X \setminus C$ from it (if it is there) leaves finitely many members of $\mathcal{U}$ covering $C$.

(b) Recall that $Y$ is **Hausdorff** if any two different points have disjoint open neighbourhoods
([Chapter 5](05-Continuity-and-Homeomorphism.md); [Chapter 9](09-Separation-and-Metrisation.md) studies this). Let $K$ be
compact in $Y$ and $y \notin K$. For each $k \in K$ choose disjoint open sets $U_k \ni k$ and $V_k \ni y$. The $U_k$
cover $K$, so finitely many, $U_{k_1}, \dots, U_{k_m}$, do. Then $V = V_{k_1} \cap \cdots \cap V_{k_m}$ is an open set
containing $y$, and it misses $U_{k_1} \cup \cdots \cup U_{k_m} \supseteq K$. So every point outside $K$ has an open
neighbourhood outside $K$: $K$ is closed. $\square$

The proof of (b) shows a little more, which [Chapter 9](09-Separation-and-Metrisation.md) uses: in a Hausdorff space, a
compact set and a point outside it have disjoint open neighbourhoods, and repeating the argument, so do two disjoint
compact sets.

Without the Hausdorff property, (b) fails: in an infinite set with the cofinite topology every subset is compact (the
argument in 8.1 works for any subset), but only the finite subsets and the whole space are closed.

### The theorem that makes gluing work

Here is the result quoted throughout [Chapter 6](06-Building-New-Spaces.md).

**Theorem 8.8.** Let $f : X \to Y$ be continuous, with $X$ compact and $Y$ Hausdorff.
(a) $f$ is a **closed map**: it sends closed sets to closed sets.
(b) If $f$ is a bijection, it is a homeomorphism.
(c) If $f$ is one-to-one, it is an embedding.

*Proof.* (a) A closed $C \subseteq X$ is compact (Theorem 8.7(a)), so $f(C)$ is compact (Theorem 8.5), so $f(C)$ is
closed in the Hausdorff space $Y$ (Theorem 8.7(b)).

(b) For the inverse $g = f^{-1}$ and any closed $C \subseteq X$, the preimage $g^{-1}(C) = f(C)$ is closed by (a). So $g$
is continuous.

(c) Regard $f$ as a bijection $X \to f(X)$. The subspace $f(X)$ of a Hausdorff space is Hausdorff, so (b) applies. $\square$

Every homeomorphism in Chapter 6 ($[0, 1]/{\sim} \cong S^1$, the glued square $\cong$ the torus, $C(S^n) \cong D^{n+1}$,
$S(S^n) \cong S^{n+1}$, $D^n / S^{n-1} \cong S^n$) came from this theorem: write down a continuous bijection out of a
compact quotient, and the inverse is continuous for free. And the two failures of Chapter 5 are explained: the maps
$[0, 2\pi) \to S^1$ and $(-\pi, \pi) \to$ figure eight are continuous bijections onto Hausdorff spaces, but their domains
are not compact.

### Uniform continuity

**Theorem 8.9 (Lebesgue number lemma).** Let $X$ be a compact metric space and $\mathcal{U}$ an open cover. There is a
$\delta > 0$ such that every subset of $X$ of diameter less than $\delta$ lies inside a single member of $\mathcal{U}$.
Such a $\delta$ is a **Lebesgue number** of the cover.

*Proof.* For each $x \in X$ choose $r_x > 0$ such that $B(x, 2r_x)$ lies in some member of $\mathcal{U}$. The balls
$B(x, r_x)$ cover $X$, so finitely many do, with centres $x_1, \dots, x_m$. Let $\delta = \min(r_{x_1}, \dots, r_{x_m}) > 0$.
If $A$ has diameter less than $\delta$, pick $a \in A$; then $a \in B(x_i, r_{x_i})$ for some $i$, and every point of $A$
is within $\delta \le r_{x_i}$ of $a$, hence within $2r_{x_i}$ of $x_i$. So $A \subseteq B(x_i, 2r_{x_i})$, which lies in a
member of $\mathcal{U}$. $\square$

*Example.* Cover $[0, 1]$ by $(-1, 0.6)$, $(0.4, 0.8)$ and $(0.7, 2)$. The tightest spot is the overlap $(0.7, 0.8)$, of
width $0.1$. Every subset of diameter less than $0.1$ lies in one of the three sets, but $[0.7, 0.8]$, of diameter exactly
$0.1$, lies in none. So $0.1$ is the largest Lebesgue number (exercise 7).

**Corollary (Heine-Cantor).** A continuous map $f$ from a compact metric space $X$ to a metric space $Y$ is uniformly
continuous: for every $\varepsilon > 0$ there is a $\delta > 0$ such that $d(x, x') < \delta$ implies
$d(f(x), f(x')) < \varepsilon$.

*Proof.* The sets $f^{-1}(B(y, \varepsilon/2))$, $y \in Y$, form an open cover of $X$. Let $\delta$ be a Lebesgue number.
If $d(x, x') < \delta$, the set $\{x, x'\}$ has diameter less than $\delta$, so both points lie in one
$f^{-1}(B(y, \varepsilon/2))$, and $d(f(x), f(x')) \le d(f(x), y) + d(y, f(x')) < \varepsilon$. $\square$

This is the theorem that makes every continuous function on $[a, b]$ integrable
([Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md) proves it with sequences).

## 8.4 Compactness in metric spaces

*Level: advanced.* Analysis usually uses a different definition: a space is **sequentially compact** if every sequence in
it has a convergent subsequence. Bolzano-Weierstrass ([Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md)) says
that $[a, b]$ is sequentially compact. Is this the same as compactness?

For metric spaces, yes. We need one more idea. A metric space is **totally bounded** if for every $\varepsilon > 0$ it is
covered by finitely many balls of radius $\varepsilon$. (Bounded means one ball suffices for some large radius; totally
bounded means finitely many suffice for every small radius.) The unit square is totally bounded: for
$\varepsilon = 1/10$ the $10 \times 10$ balls centred at the points $\big(\tfrac{2i - 1}{20}, \tfrac{2j - 1}{20}\big)$ cover it,
because each covers a little square of side $1/10$ (whose corners are at distance $\sqrt{2}/20 < 1/10$ from its centre).
The space $\mathbb{N}$ with all distances equal to 1 is bounded but not totally bounded.

**Theorem 8.10.** For a metric space $X$ the following are equivalent:
(1) $X$ is compact; (2) $X$ is sequentially compact; (3) $X$ is complete and totally bounded.

*Proof.* We give each step in compressed form; Munkres (Theorem 28.2 and Section 45) has every detail.

(1 ⇒ 2) Let $(x_n)$ be a sequence. If no subsequence converges to a point $x$, then some ball $B_x$ around $x$ contains
$x_n$ for only finitely many $n$ (otherwise we could pick $n_1 < n_2 < \cdots$ with $x_{n_k} \in B(x, 1/k)$, a subsequence
converging to $x$). If this happened at every point, the balls $B_x$ would cover $X$, finitely many would do, and so only
finitely many indices $n$ would exist. That is absurd, so some subsequence converges.

(2 ⇒ 3) Complete: a Cauchy sequence has a convergent subsequence, and a Cauchy sequence with a convergent subsequence
converges to the same limit. Totally bounded: if for some $\varepsilon$ no finitely many $\varepsilon$-balls covered $X$, we
could choose $x_1$, then $x_2$ outside $B(x_1, \varepsilon)$, then $x_3$ outside both balls, and so on. Any two of these
points are at distance at least $\varepsilon$, so no subsequence is Cauchy, let alone convergent.

(3 ⇒ 2) Given a sequence, cover $X$ by finitely many balls of radius $1$; one of them contains $x_n$ for infinitely many
$n$. Cover by finitely many balls of radius $\tfrac12$; one of them contains infinitely many of those terms. Continue
with radius $\tfrac14$, $\tfrac18$, ..., and pick one term from each stage with increasing indices. Any two terms picked
after stage $k$ lie in one ball of radius $2^{-k}$, so the subsequence is Cauchy, and it converges by completeness.

(2 ⇒ 1) Let $\mathcal{U}$ be an open cover. First, it has a Lebesgue number: otherwise for each $n$ there is a set $A_n$
of diameter less than $1/n$ inside no member of $\mathcal{U}$; pick $a_n \in A_n$ and a subsequence $a_{n_k} \to a$; then
$a$ lies in some $U \in \mathcal{U}$ with $B(a, r) \subseteq U$, and for large $k$ the whole set $A_{n_k}$ lies within
$r/2 + 1/n_k < r$ of $a$, so inside $U$: a contradiction. Now take a Lebesgue number $\delta$ and cover $X$ by finitely
many balls of radius $\delta/3$ (total boundedness, from 2 ⇒ 3). Each ball has diameter at most $2\delta/3 < \delta$, so it
lies in one member of $\mathcal{U}$, and those finitely many members cover $X$. $\square$

The proof of (3 ⇒ 2) is the bisection argument behind Bolzano-Weierstrass, done with balls instead of halves of an
interval. Here it is on an actual sequence.

**Try it in Python.**

```python
import math

N = 10**6
terms = [math.sin(n) for n in range(N)]       # a sequence in [-1, 1]

lo, hi, last, picks = -1.0, 1.0, -1, []
for step in range(12):
    mid = (lo + hi) / 2
    left = sum(1 for n in range(last + 1, N) if lo <= terms[n] <= mid)
    right = sum(1 for n in range(last + 1, N) if mid <= terms[n] <= hi)
    lo, hi = (lo, mid) if left >= right else (mid, hi)   # keep the fuller half
    last = next(n for n in range(last + 1, N) if lo <= terms[n] <= hi)
    picks.append((last, round(terms[last], 5)))
print(picks)
print("all later picks lie in", (round(lo, 5), round(hi, 5)))
```

It picks the indices $0, 1, 2, 8, 14, 33, 52, 58, 77, 121, 278, 322$, and the last interval is about
$(0.99951, 1)$: a subsequence of $\sin n$ closing in on $1$. A computer can only look at finitely many terms, so it
keeps the half with more terms among the first million; the proof keeps a half with infinitely many, which is not
something a finite search can certify. That gap between "infinitely many" and "the most I have seen" is exactly why the
proof needs the completeness of $\mathbb{R}$ and cannot be turned into an algorithm in general.

### Closed and bounded is not enough in infinite dimensions

In $\mathbb{R}^n$, Heine-Borel says compact means closed and bounded. Theorem 8.10 explains why: closed subsets of
$\mathbb{R}^n$ are complete, and bounded subsets of $\mathbb{R}^n$ are totally bounded (cut a cube into small cubes). In
infinite-dimensional spaces bounded sets need not be totally bounded.

*Example.* In the space $\ell^2$ of square-summable sequences, with $\lVert x \rVert = \sqrt{\sum x_i^2}$, the unit vectors
$e_1 = (1, 0, 0, \dots)$, $e_2 = (0, 1, 0, \dots)$, ... all lie in the closed unit ball, and
$\lVert e_m - e_n \rVert = \sqrt{2}$ for $m \ne n$. No subsequence is Cauchy, so the closed unit ball, though closed and
bounded, is not compact. The same happens in $C[0, 1]$ with the maximum distance: tent functions with disjoint supports and
height 1 are all at distance 1 from each other. In fact, a theorem of Frigyes Riesz says that the closed unit ball of a
normed vector space is compact only when the space is finite-dimensional.

For spaces of functions, the right criterion is the **Arzelà-Ascoli theorem**: a set of continuous functions on $[a, b]$
has compact closure (in the maximum distance) exactly when it is bounded and **equicontinuous** (one $\delta$ works for every
function in the set and every $\varepsilon$). This is how analysts prove that differential equations have solutions and that
minimising problems have minimisers ([Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md) states it).

### Beyond metric spaces

For general topological spaces the two notions part ways, and neither implies the other. The product $[0, 1]^{[0, 1]}$
(one copy of $[0, 1]$ for each real number in $[0, 1]$) is compact by Tychonoff's theorem (8.5) but not sequentially compact.
The set of countable ordinals with its order topology is sequentially compact but not compact. Both examples are worked
out in Steen and Seebach's *Counterexamples in Topology*. In topology, "compact" always means the open cover definition.

## 8.5 Tychonoff's theorem

*Level: expert.* Is a product of compact spaces compact? For two factors we prove it with a beautiful lemma.

**Theorem 8.11 (tube lemma).** Let $Y$ be compact and $x_0 \in X$. If an open set $N \subseteq X \times Y$ contains the
whole slice $\{x_0\} \times Y$, then it contains a whole **tube** $W \times Y$ for some open $W \ni x_0$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 160" role="img" aria-label="The tube lemma. A rectangle represents X times Y with X horizontal. An irregular open region N contains the vertical slice above the point x0. Inside N a vertical band W times Y, a tube around the slice, is shaded.">
  <rect x="40" y="20" width="260" height="110" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="110,20 200,20 215,50 185,80 210,130 100,130 120,90 95,55" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="130" y="20" width="40" height="110" fill="#eea66f" fill-opacity="0.75" stroke="none"/>
  <line x1="150" y1="20" x2="150" y2="130" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="140" x2="170" y2="140" stroke="#eea66f" stroke-width="4"/>
  <g fill="currentColor" font-size="11" text-anchor="middle">
    <text x="150" y="155">W ∋ x₀</text><text x="230" y="110">N</text>
    <text x="320" y="80">Y</text><text x="290" y="150">X</text>
  </g>
</svg>
</div>

*Proof.* For each $y \in Y$, the point $(x_0, y)$ lies in $N$, so some basic open rectangle $U_y \times V_y$ with
$(x_0, y) \in U_y \times V_y \subseteq N$ exists. The sets $V_y$ cover $Y$, so finitely many, $V_{y_1}, \dots, V_{y_m}$, do.
Let $W = U_{y_1} \cap \cdots \cap U_{y_m}$, an open set containing $x_0$. For any $(x, y) \in W \times Y$, $y$ lies in some
$V_{y_i}$ and $x \in W \subseteq U_{y_i}$, so $(x, y) \in U_{y_i} \times V_{y_i} \subseteq N$. $\square$

The picture shows why compactness matters: without it, the rectangles around the slice could get thinner and thinner
along $Y$, and their intersection would be just $\{x_0\}$. *Example:* in $\mathbb{R} \times \mathbb{R}$, the open set
$N = \{(x, y) : |xy| < 1\}$ contains the slice $\{0\} \times \mathbb{R}$ but no tube around it, since for any $\varepsilon > 0$
the point $(\varepsilon/2, 4/\varepsilon)$ has $|xy| = 2$. The factor $\mathbb{R}$ is not compact.

**Theorem 8.12.** If $X$ and $Y$ are compact, so is $X \times Y$. Hence any finite product of compact spaces is compact.

*Proof.* Let $\mathcal{A}$ be an open cover of $X \times Y$. For each $x \in X$, the slice $\{x\} \times Y$ is homeomorphic
to $Y$, hence compact, so finitely many members of $\mathcal{A}$ cover it. Their union $N_x$ is open and contains the
slice, so by the tube lemma it contains a tube $W_x \times Y$. The open sets $W_x$ cover $X$, so finitely many,
$W_{x_1}, \dots, W_{x_k}$, do. The tubes $W_{x_i} \times Y$ then cover $X \times Y$, and each is covered by finitely many
members of $\mathcal{A}$; altogether finitely many. Induction gives finite products. $\square$

This gives a second proof of Heine-Borel: the cube $[-M, M]^n$ is a product of $n$ compact intervals.

### Infinitely many factors

**Theorem 8.13 (Tychonoff).** Any product of compact spaces, with the product topology, is compact.

Andrey Tychonoff proved it for products of closed intervals in 1930 and in general in 1935. Unlike everything so far,
this theorem depends on the **axiom of choice** ([Logic, Chapter 8](../logic/08-Axiomatic-Set-Theory.md)): John Kelley
showed in 1950 that, in ordinary set theory without choice, Tychonoff's theorem implies the axiom of choice. So the two are
equivalent, and any proof must use choice in some form.

*Proof sketch.* We use Theorem 8.1: given a family $\mathcal{A}$ of closed sets in $X = \prod X_i$ with the finite
intersection property, we must find a point in all of them.

1. By Zorn's lemma, enlarge $\mathcal{A}$ to a family $\mathcal{D}$ of subsets of $X$ (not necessarily closed) that has
   the finite intersection property and is **maximal** with it. Maximality gives two facts, each a short argument: finite
   intersections of members of $\mathcal{D}$ are in $\mathcal{D}$, and any set that meets every member of $\mathcal{D}$
   is itself in $\mathcal{D}$.
2. For each coordinate $i$, the closures of the projections $\pi_i(D)$, $D \in \mathcal{D}$, are closed sets in the
   compact space $X_i$ with the finite intersection property. So their intersection is nonempty; **choose** a point $x_i$
   in it, for every $i$ at once (this is a second use of choice).
3. Let $x = (x_i)$. For any basic open set $\pi_i^{-1}(U_i)$ around $x$, the open set $U_i$ around $x_i$ meets every
   $\pi_i(D)$ (as $x_i$ is in the closure), so $\pi_i^{-1}(U_i)$ meets every $D$, and by fact 1 it belongs to $\mathcal{D}$.
   So do finite intersections of such sets, which are the basic open sets of the product topology. Hence every basic
   neighbourhood of $x$ meets every $D \in \mathcal{D}$, so $x$ lies in the closure of every $D$, in particular in every
   member of $\mathcal{A}$ (which are closed). $\square$

Step 3 is where the product topology matters: its basic open sets restrict only **finitely many** coordinates, and those
are finite intersections of the sets $\pi_i^{-1}(U_i)$. In the box topology the theorem is false. *Example:*
$\{0, 1\}^{\mathbb{N}}$ with the box topology: each point $(a_1, a_2, \dots)$ is the box $\{a_1\} \times \{a_2\} \times \cdots$,
a product of open subsets of the discrete space $\{0, 1\}$. So every point is open, the space is an infinite discrete
space, and it is not compact, although each factor $\{0, 1\}$ is.

### What Tychonoff gives

- **The Cantor set as a product.** $\{0, 1\}^{\mathbb{N}}$ (product topology) is compact. The map
  $(a_1, a_2, \dots) \mapsto \sum_k 2a_k / 3^k$ is a continuous bijection onto the Cantor set (the ternary digits 0 and 2
  are exactly the points that survive), so by Theorem 8.8 it is a homeomorphism. The Cantor set is "infinitely many coin
  tosses". (For countable products of metric spaces Tychonoff does not need the full axiom of choice; a diagonal argument
  suffices.)
- **The Hilbert cube** $[0, 1]^{\mathbb{N}}$ is compact. Every compact metric space embeds in it.
- **The compactness theorem of logic.** A set of statements of propositional logic, every finite part of which can be
  satisfied, can be satisfied as a whole. One proof: the truth assignments form the compact space $\{0, 1\}^{\text{variables}}$,
  the assignments satisfying one statement form a closed set, and the hypothesis is the finite intersection property
  ([Logic, Chapter 11](../logic/11-Completeness-and-Compactness.md) proves the theorem differently).
- **Functional analysis.** The Banach-Alaoglu theorem (the unit ball of a dual space is compact in the weak-star topology)
  and the Stone-Čech compactification are both built on Tychonoff's theorem.

## 8.6 The one-point compactification

*Level: advanced.* Stereographic projection ([Chapter 5](05-Continuity-and-Homeomorphism.md)) identifies the sphere minus
its north pole with the plane. Points near the north pole go to points far from the origin. It is as if the plane had
one extra point "at infinity" which, put back, closes it up into a sphere. Can we do this for any space?

**Definition.** Let $X$ be a Hausdorff space that is not compact, and let $\infty$ be a new point. The **one-point
compactification** $X^\ast = X \cup \{\infty\}$ has these open sets:

- the open sets of $X$;
- the sets $\{\infty\} \cup (X \setminus K)$, for every compact subset $K$ of $X$.

So a neighbourhood of $\infty$ is "everything outside a compact set": in the plane, everything outside some closed disc.
Compact sets of a Hausdorff space are closed (Theorem 8.7(b)), so $X \setminus K$ is open in $X$.

*These form a topology.* The empty set is open in $X$, and $X^\ast = \{\infty\} \cup (X \setminus \varnothing)$. For
unions: a union of open sets of $X$ is open in $X$; a union that includes sets of the second kind is
$\{\infty\} \cup (X \setminus K) \cup U$ with $K = \bigcap K_j$ (closed in a compact $K_{j}$, so compact) and $U$ open in
$X$, and $(X \setminus K) \cup U = X \setminus (K \setminus U)$, where $K \setminus U = K \cap (X \setminus U)$ is a closed
subset of the compact $K$, hence compact. For intersections:
$(X \setminus K_1) \cap (X \setminus K_2) = X \setminus (K_1 \cup K_2)$, and a union of two compact sets is compact;
and $U \cap \big(\{\infty\} \cup (X \setminus K)\big) = U \setminus K$, open in $X$.

**Theorem 8.14.** (a) $X^\ast$ is compact, and $X$ is an open subspace of $X^\ast$ whose closure is all of $X^\ast$.
(b) $X^\ast$ is Hausdorff if and only if $X$ is **locally compact**: every point of $X$ has an open neighbourhood contained
in a compact set.

*Proof.* (a) Let $\mathcal{U}$ be an open cover of $X^\ast$. Some member contains $\infty$; it is
$\{\infty\} \cup (X \setminus K)$ for a compact $K$. The other members meet $X$ in open sets of $X$ that cover $K$, so
finitely many of them cover $K$. Together with the first member they cover $X^\ast$. The subspace topology on $X$ is the
original one, since $X \cap \big(\{\infty\} \cup (X \setminus K)\big) = X \setminus K$ is open in $X$. Every neighbourhood of
$\infty$ meets $X$, because $X$ is not compact and so $X \ne K$; so $\infty$ is in the closure of $X$.

(b) Two points of $X$ are separated by disjoint open sets of $X$. A point $x \in X$ and $\infty$ are separated exactly
when there are an open $U \ni x$ and a compact $K$ with $U \cap (X \setminus K) = \varnothing$, that is, $U \subseteq K$:
which is local compactness at $x$. $\square$

### Examples

**$\mathbb{R}^\ast \cong S^1$ and $(\mathbb{R}^n)^\ast \cong S^n$.** Let $\sigma : S^n \setminus \{N\} \to \mathbb{R}^n$
be stereographic projection, a homeomorphism, and extend its inverse to $F : (\mathbb{R}^n)^\ast \to S^n$ by
$F(\infty) = N$. $F$ is a bijection. It is continuous at points of $\mathbb{R}^n$ because $\sigma^{-1}$ is. At $\infty$:
if $W$ is an open set of $S^n$ containing $N$, then $S^n \setminus W$ is closed in $S^n$, so compact, and it lies in
$S^n \setminus \{N\}$; its image $K = \sigma(S^n \setminus W)$ is compact in $\mathbb{R}^n$, and
$F^{-1}(W) = \{\infty\} \cup (\mathbb{R}^n \setminus K)$, an open set. So $F$ is a continuous bijection from a compact
space to a Hausdorff space: a homeomorphism (Theorem 8.8).

How "far" is a point of the sphere? For $P = (x, y, z)$ on $S^2$, $x^2 + y^2 = 1 - z^2$, so

$$
\lVert \sigma(P) \rVert^2 = \frac{x^2 + y^2}{(1 - z)^2} = \frac{(1 - z)(1 + z)}{(1 - z)^2} = \frac{1 + z}{1 - z}.
$$

*Check:* at the equator $z = 0$ this is $1$ (the unit circle); at the south pole $z = -1$ it is $0$; as $z \to 1$ it
blows up. Points beyond radius $10$ come from $(1 + z)/(1 - z) > 100$, that is, $z > 99/101$: a small cap around the north
pole is a neighbourhood of $\infty$.

More examples:

- **The Riemann sphere.** For $n = 2$, identify $\mathbb{R}^2$ with the complex numbers. Then $\mathbb{C}^\ast$ is the
  Riemann sphere of complex analysis, on which $z \mapsto 1/z$ (with $0 \mapsto \infty$ and $\infty \mapsto 0$) is a
  homeomorphism, and so is every Möbius transformation $z \mapsto (az + b)/(cz + d)$ with $ad - bc \ne 0$. The
  [Geometry book](../geometry/13-Inversion-and-Complex-Geometry.md) uses this sphere for inversion.
- **The natural numbers.** $\mathbb{N}^\ast \cong \{0\} \cup \{1/n : n \ge 1\}$, by $n \mapsto 1/n$ and $\infty \mapsto 0$: a
  neighbourhood of $\infty$ contains all but finitely many $n$, just as a neighbourhood of $0$ contains all but finitely
  many $1/n$. The compact space $K$ of Section 8.1 is the one-point compactification of a sequence.
- **Intervals.** $[0, 1)^\ast \cong [0, 1]$, the new point filling the missing end. $(0, 1)^\ast \cong S^1$, since
  $(0, 1) \cong \mathbb{R}$: both missing ends become the same new point. For two ends you would need the **two-point**
  compactification $[0, 1]$, which is not a one-point construction.
- **Two open intervals.** $\big((0, 1) \cup (2, 3)\big)^\ast$ is two circles sharing the point $\infty$: the figure eight
  $S^1 \vee S^1$.
- **A failure.** $\mathbb{Q}$ is not locally compact (no neighbourhood of a rational has compact closure in $\mathbb{Q}$),
  so $\mathbb{Q}^\ast$ is compact but not Hausdorff.

So the sphere has three descriptions now: a disc with its boundary squeezed to a point
([Chapter 6](06-Building-New-Spaces.md)), two discs glued along their rims, and the plane plus one point. Mars, a compact
surface, is the third description made physical: any chart of the whole planet on an unbounded flat sheet must leave out
at least one point, and stereographic projection from a pole shows that one point is enough.

## A short history

Eduard Heine's 1872 proof that a continuous function on a closed interval is uniformly continuous used an argument with
covers. Émile Borel proved in 1895 that every **countable** cover of a closed interval by open intervals has a finite
subcover; versions for arbitrary covers followed within a few years, from several mathematicians including Henri
Lebesgue, and the double name "Heine-Borel" was attached later. Maurice Fréchet introduced sequential compactness in
metric settings in 1906. The open-cover definition for general spaces was set out by Pavel Alexandrov and Pavel Urysohn in
the 1920s (their term was "bicompact"). Tychonoff proved his product theorem in 1930 for cubes and in 1935 in general,
Eduard Čech and Marshall Stone constructed the compactification that bears their names in 1937, and Alexandrov introduced
the one-point compactification in 1924. Kelley's proof that Tychonoff's theorem implies the axiom of choice appeared in
1950.

## Check yourself

??? question "1. Show directly from the definition that $(0, 1)$ is not compact, and that $[0, 2] \cap \mathbb{Q}$ is not compact as a subspace of $\mathbb{Q}$."

    $(0, 1)$: the open sets $(1/n, 1)$, $n \ge 2$, cover it, and finitely many have union $(1/N, 1)$, missing $1/(2N)$.
    $[0, 2] \cap \mathbb{Q}$: let $s = \sqrt{2}$ and $U_n = \{q : |q - s| > 1/n\}$, open in $\mathbb{Q}$. They cover
    $[0, 2] \cap \mathbb{Q}$ because no rational equals $s$. Finitely many have union $U_N$, which misses the rationals
    within $1/N$ of $s$, and there are such rationals in $[0, 2]$.

??? question "2. Prove that a union of finitely many compact subsets of a space is compact. Is a union of infinitely many?"

    Given a cover of $K_1 \cup \cdots \cup K_m$, it covers each $K_j$, so finitely many members cover each $K_j$; together
    they are finitely many and cover the union. Infinite unions can fail: $\mathbb{R} = \bigcup_n [-n, n]$ is not compact.

??? question "3. Is $\{1/n : n \ge 1\}$ compact? Give a cover with no finite subcover, and say which theorem predicts the answer."

    No. Each point $1/n$ is isolated: $U_n = \big(\tfrac{1}{n} - \tfrac{1}{2n^2}, \tfrac{1}{n} + \tfrac{1}{2n^2}\big)$
    contains $1/n$ and no other $1/m$ (the nearest other points are at distance at least $\tfrac{1}{n(n+1)} \ge \tfrac{1}{2n^2}$,
    and the interval is open). These sets
    cover, and removing any one of them uncovers its point, so no finite subfamily covers. Heine-Borel predicts it: the set
    is bounded but not closed ($0$ is a limit point not in it).

??? question "4. Find the largest value of $f(x) = x(1 - x)$ on $[0, 1]$ and on $(0, 1)$, and of $g(x) = x$ on both. What does this show about the extreme value theorem?"

    $f(x) = \tfrac14 - (x - \tfrac12)^2$, so the maximum is $\tfrac14$ at $x = \tfrac12$, on both sets. $g$ has maximum $1$
    on $[0, 1]$, but on $(0, 1)$ it has no maximum (values approach $1$, never reach it). Compactness guarantees maxima, but
    a function on a non-compact space may still happen to have one: compactness is sufficient, not necessary.

??? question "5. Give $\mathbb{R}$ the cofinite topology. Show that every subset is compact. Which subsets are closed? Why does this not contradict Theorem 8.7(b)?"

    Let $A \subseteq \mathbb{R}$ and $\mathcal{U}$ a cover of $A$ by cofinite-open sets. One nonempty member $U_0$ misses only
    finitely many points of $\mathbb{R}$, so only finitely many of $A$; cover those with one member each. The closed sets
    are the finite sets and $\mathbb{R}$, so for instance $[0, 1]$ is compact but not closed. Theorem 8.7(b) needs the
    Hausdorff property, and the cofinite topology on an infinite set is not Hausdorff (any two nonempty open sets meet).

??? question "6. Prove that a continuous bijection $f : S^1 \to S^1$ is a homeomorphism. Is a continuous bijection $\mathbb{R} \to \mathbb{R}$ always a homeomorphism?"

    $S^1$ is compact (closed and bounded in $\mathbb{R}^2$) and Hausdorff, so Theorem 8.8(b) applies. For $\mathbb{R}$ the
    theorem does not apply, but the answer is still yes, for a different reason: a continuous one-to-one function on an
    interval is strictly monotonic (by the IVT), so it maps open intervals onto open intervals, hence is an open map, and
    Theorem 5.5 applies.

??? question "7. Cover $[0, 1]$ by $(-1, 0.6)$, $(0.4, 0.8)$ and $(0.7, 2)$. Show that $0.1$ is a Lebesgue number and that no larger number is."

    Let $A$ have diameter $d < 0.1$, with $a = \inf A$ and $b = \sup A$, so $A \subseteq [a, b]$ and $b - a = d$. If
    $b \ge 0.8$ then $a > 0.7$, so $A \subseteq (0.7, 2)$. If $b < 0.8$ and $a > 0.4$ then $A \subseteq (0.4, 0.8)$. If
    $b < 0.8$ and $a \le 0.4$ then $b < 0.5$, so $A \subseteq (-1, 0.6)$. Larger numbers fail: $[0.7, 0.8]$ has diameter
    exactly $0.1$ and lies in none of the three sets ($0.8 \notin (0.4, 0.8)$, $0.7 \notin (0.7, 2)$, $0.8 \notin (-1, 0.6)$).
    So for any $\delta > 0.1$, a set of diameter $0.1 < \delta$ fails.

??? question "8. Show that the closed unit ball of $\ell^2$ is closed and bounded but not compact, using the vectors $e_n$."

    It is bounded by definition and closed because $x \mapsto \lVert x \rVert$ is continuous and the ball is the preimage of
    $[0, 1]$. The $e_n$ lie in it and $\lVert e_m - e_n \rVert^2 = 1 + 1 = 2$ for $m \ne n$, so no subsequence is Cauchy and
    none converges. The ball is not sequentially compact, hence not compact by Theorem 8.10.

??? question "9. Prove that a compact metric space has a countable dense subset."

    For each $n$, the balls $B(x, 1/n)$ cover $X$, so finitely many do; let $F_n$ be their finitely many centres. Then
    $D = \bigcup_n F_n$ is countable. It is dense: any ball $B(x, r)$ contains a point of $F_n$ when $1/n < r$, since $x$
    lies within $1/n$ of some centre in $F_n$.

??? question "10. Show that every compact metric space $X$ has two points at maximal distance."

    The function $d : X \times X \to \mathbb{R}$ is continuous, and $X \times X$ is compact (Theorem 8.12). By the extreme
    value theorem $d$ has a largest value, attained at some pair $(p, q)$. *Example:* on the closed unit disc any two
    opposite boundary points are at the maximal distance $2$. On the open disc no pair attains the supremum $2$.

??? question "11. Identify the one-point compactifications of $[0, 1)$, of $(0, 1) \cup (2, 3)$, and of $\mathbb{R}^2 \setminus \{0\}$."

    $[0, 1)^\ast \cong [0, 1]$: the map that is the identity on $[0, 1)$ and sends $\infty$ to $1$ is a continuous bijection
    from a compact space to a Hausdorff space (neighbourhoods of $\infty$, complements of compact subsets of $[0, 1)$, contain
    some $(1 - \varepsilon, 1)$). $\big((0, 1) \cup (2, 3)\big)^\ast$ is a figure eight: each interval is a copy of
    $\mathbb{R}$, whose compactification is a circle, and the four open ends all go to the one point $\infty$.
    $(\mathbb{R}^2 \setminus \{0\})^\ast$: via stereographic projection, $\mathbb{R}^2 \setminus \{0\}$ is the sphere minus
    the north and south poles; adding one point for both "ends" glues the two poles together. The result is a sphere with
    two points identified, which is not a surface (near the glued point it looks like two discs touching at their centres).

??? question "12. Which points of the sphere does stereographic projection send outside the disc of radius $R$? How large is that region for $R = 10$?"

    $\lVert \sigma(P) \rVert^2 = (1 + z)/(1 - z) > R^2$ means $1 + z > R^2 - R^2 z$, that is,
    $z > (R^2 - 1)/(R^2 + 1)$. For $R = 10$: $z > 99/101 \approx 0.980$. The area of a spherical cap $z > h$ on the unit
    sphere is $2\pi(1 - h)$ (Archimedes), so this cap has area $2\pi \cdot 2/101 = 4\pi/101$, about $1\%$ of the sphere's
    $4\pi$. Everything outside a disc of radius $10$ is crowded into one percent of the sphere around the north pole.

## What you learned

- A space is compact if every open cover has a finite subcover; equivalently, closed sets with the finite intersection
  property have a common point.
- Heine-Borel: in $\mathbb{R}^n$, compact means closed and bounded. In other metric spaces closed and bounded is not
  enough.
- Continuous images of compact spaces are compact, so continuous real functions on compact spaces have maxima and minima;
  compactness is a topological invariant ($S^2 \not\cong \mathbb{R}^2$).
- Closed subsets of compact spaces are compact; compact subsets of Hausdorff spaces are closed; a continuous bijection from
  a compact space to a Hausdorff space is a homeomorphism.
- In compact metric spaces every open cover has a Lebesgue number, and continuous maps are uniformly continuous.
- For metric spaces, compact = sequentially compact = complete and totally bounded.
- Tychonoff: any product of compact spaces is compact in the product topology. Finite products follow from the tube lemma;
  the general case is equivalent to the axiom of choice.
- Adding one point at infinity compactifies a locally compact Hausdorff space; for $\mathbb{R}^n$ it gives the sphere $S^n$.

**Next:** [Chapter 9](09-Separation-and-Metrisation.md), separation axioms: how well open sets can tell points and closed
sets apart, Urysohn's lemma, and when a topological space comes from a metric.

## Further reading

- J. R. Munkres, *Topology*, 2nd edition, 2000 (Sections 26 to 29 on compactness, Section 37 on Tychonoff's theorem,
  Section 45 on compactness in metric spaces).
- W. Rudin, *Principles of Mathematical Analysis*, 3rd edition, 1976, Chapter 2 (compact sets in metric spaces).
- J. L. Kelley, *General Topology*, 1955 (Tychonoff's theorem and compactifications).
- J. L. Kelley, "The Tychonoff product theorem implies the axiom of choice", *Fundamenta Mathematicae* 37, 1950.
- A. Tychonoff, "Über die topologische Erweiterung von Räumen", *Mathematische Annalen* 102, 1930.
- L. A. Steen and J. A. Seebach, *Counterexamples in Topology*, 1970 (compact versus sequentially compact).
- Other books on this site: [Calculus, Chapter 18: The real numbers](../calculus/18-The-Real-Numbers.md),
  [Calculus, Chapter 20: Metric spaces](../calculus/20-Metric-Spaces-and-Topology-of-R.md),
  [Logic, Chapter 8: Axiomatic set theory](../logic/08-Axiomatic-Set-Theory.md) (the axiom of choice),
  [Logic, Chapter 11: Completeness and compactness](../logic/11-Completeness-and-Compactness.md),
  [Geometry, Chapter 13: Inversion and complex geometry](../geometry/13-Inversion-and-Complex-Geometry.md).
- U of T guides: [MAT257 Unit 2, Compactness](../../uoft/MAT257Y1/unit02.md),
  [MAT158 Unit 5, The three hard theorems](../../uoft/MAT158H1/unit05.md).
- Topics lessons: [The point at infinity](../../topics/infinity/level-8/07-point-at-infinity.md),
  [The Cantor set](../../topics/infinity/level-7/05-cantor-set.md).
