# 9. Separation and metrisation

*The axioms of a topological space are very generous. They allow spaces in which a sequence converges to two different
limits at once, in which two different points cannot be told apart by any open set, and in which no continuous function
to the real line is anything but constant. Such spaces are not useless (algebraic geometry lives in one), but most of
the time we want the open sets to separate things: points from points, points from closed sets, closed sets from closed
sets. This chapter climbs that ladder of "separation axioms", proves what each rung buys us, and reaches two of the
great theorems of point-set topology: Urysohn's lemma, which builds continuous functions out of nothing but open sets,
and Urysohn's metrisation theorem, which says exactly when a topology secretly comes from a distance. It ends with a
small zoo of strange spaces that show why the axioms are needed.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a Hausdorff space is, and why limits are unique in it and compact sets are closed in it
    - why a continuous bijection from a compact space to a Hausdorff space is automatically a homeomorphism
    - the separation ladder T0, T1, T2, T3, T4, with examples that sit on each rung and not the next
    - Urysohn's lemma, with a complete proof by dyadic rationals, and the Tietze extension theorem
    - Urysohn's metrisation theorem: regular plus a countable basis gives a metric, with the proof by embedding in the Hilbert cube
    - the line with two origins, the Sorgenfrey line and the long line, and which axiom each one breaks

    **You need:** [Chapter 4](04-Topological-Spaces.md) (open and closed sets, bases, subspaces),
    [Chapter 5](05-Continuity-and-Homeomorphism.md) (continuity, homeomorphism), [Chapter 6](06-Building-New-Spaces.md)
    (products and quotients) and [Chapter 8](08-Compactness.md) (compactness). Metric spaces as in
    [Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md). For the long line in 9.5, ordinals as in
    [Logic, Chapter 8](../logic/08-Axiomatic-Set-Theory.md).

    **Levels:** 9.1 is intermediate; 9.2 is intermediate with an advanced example; 9.3 and 9.4 are advanced (full
    proofs at the level of a third-year course); 9.5 is advanced, with one expert aside on ordinals.

## 9.1 Hausdorff spaces and why we want them

Start with a question that sounds silly. In the real line, can a sequence converge to two different numbers? No: if
$x_n \to a$ and $x_n \to b$ with $a \neq b$, put $r = |a - b|/2$. Eventually every $x_n$ is within $r$ of $a$ and also
within $r$ of $b$, but the two intervals $(a - r, a + r)$ and $(b - r, b + r)$ do not overlap. The proof used exactly
one thing: **two different points have disjoint neighbourhoods.**

Now look at a topological space where that fails. Take an infinite set $X$ with the **cofinite topology** of
[Chapter 4](04-Topological-Spaces.md): the open sets are the empty set and the sets whose complement is finite. Let
$x_1, x_2, x_3, \ldots$ be a sequence of *different* points of $X$, and let $p$ be any point at all. A neighbourhood
$U$ of $p$ misses only finitely many points of $X$, so it misses only finitely many terms of the sequence, so the
sequence is eventually inside $U$. That is the definition of $x_n \to p$. So this one sequence converges to *every
point of the space at once*. Limits mean nothing here.

The repair is to demand the property the real-line proof used.

**Definition.** A topological space $X$ is **Hausdorff** (also called **T2**) if for any two different points
$x \neq y$ there are open sets $U \ni x$ and $V \ni y$ with $U \cap V = \varnothing$.

"Open sets $U \ni x$" is read "open sets $U$ containing $x$". The picture is two points, each in its own bubble, with
the bubbles apart.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 200" role="img" aria-label="Three separation axioms. Left, Hausdorff: two points x and y inside two disjoint open bubbles. Middle, regular: a point x and a closed set A inside disjoint open bubbles. Right, normal: two disjoint closed sets A and B inside disjoint open bubbles">
  <ellipse cx="65" cy="90" rx="32" ry="55" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <ellipse cx="135" cy="90" rx="32" ry="55" fill="#eea66f" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle cx="65" cy="90" r="4" fill="currentColor"/>
  <circle cx="135" cy="90" r="4" fill="currentColor"/>
  <text x="65" y="112" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">x</text>
  <text x="135" y="112" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">y</text>
  <text x="100" y="180" text-anchor="middle" font-size="13" fill="currentColor">Hausdorff (T2)</text>
  <ellipse cx="250" cy="90" rx="30" ry="55" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle cx="250" cy="90" r="4" fill="currentColor"/>
  <text x="250" y="112" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">x</text>
  <ellipse cx="345" cy="90" rx="35" ry="58" fill="#eea66f" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <ellipse cx="345" cy="90" rx="20" ry="38" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="345" y="95" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">A</text>
  <text x="300" y="180" text-anchor="middle" font-size="13" fill="currentColor">regular (T3)</text>
  <ellipse cx="450" cy="90" rx="32" ry="58" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <ellipse cx="450" cy="90" rx="18" ry="38" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="450" y="95" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">A</text>
  <ellipse cx="550" cy="90" rx="32" ry="58" fill="#eea66f" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <ellipse cx="550" cy="90" rx="18" ry="38" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="550" y="95" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">B</text>
  <text x="500" y="180" text-anchor="middle" font-size="13" fill="currentColor">normal (T4)</text>
</svg>
</div>

The dashed outlines are open sets; the solid green shapes are closed sets. Section 9.2 explains the middle and right
pictures.

### First examples

- **Every metric space is Hausdorff.** If $x \neq y$, put $r = d(x, y)/2 > 0$. The open balls $B(x, r)$ and $B(y, r)$
  are disjoint: a point $z$ in both would give $d(x, y) \le d(x, z) + d(z, y) < r + r = d(x, y)$, which is
  impossible. So $\mathbb{R}^n$, every subset of it, spheres, tori: all Hausdorff.
- **Every discrete space is Hausdorff** (use $U = \{x\}$, $V = \{y\}$).
- **An indiscrete space with at least two points is not Hausdorff**: the only open set containing $x$ is the whole
  space, which also contains $y$.
- **An infinite cofinite space is not Hausdorff.** Two nonempty open sets each miss only finitely many points, and an
  infinite set cannot be covered by two finite sets, so they meet.
- **The Zariski topology** on $\mathbb{C}$ (closed sets are the finite sets and $\mathbb{C}$ itself, the zero sets of
  polynomials) is the cofinite topology, so it is not Hausdorff either. Algebraic geometers use it every day; they
  simply do not expect it to behave like $\mathbb{R}^n$.

### Theorem 9.1 (limits are unique)

*In a Hausdorff space a sequence has at most one limit.*

**Proof.** Suppose $x_n \to a$ and $x_n \to b$ with $a \neq b$. Take disjoint open $U \ni a$ and $V \ni b$. There is
an $N_1$ with $x_n \in U$ for $n \ge N_1$, and an $N_2$ with $x_n \in V$ for $n \ge N_2$. For $n \ge \max(N_1, N_2)$
the point $x_n$ is in $U \cap V = \varnothing$, a contradiction. $\square$

### Heredity: subspaces and products

**Theorem 9.2.** *A subspace of a Hausdorff space is Hausdorff. A product of two Hausdorff spaces is Hausdorff.*

**Proof.** If $A \subseteq X$ and $x \neq y$ in $A$, separate them in $X$ by $U, V$; then $U \cap A$ and $V \cap A$
are disjoint open sets of $A$ containing them. For the product, let $(x_1, y_1) \neq (x_2, y_2)$ in $X \times Y$.
Then $x_1 \neq x_2$ or $y_1 \neq y_2$. Say $x_1 \neq x_2$, separated by $U_1, U_2$ in $X$. Then $U_1 \times Y$ and
$U_2 \times Y$ are disjoint open sets of the product containing the two points. The other case is the same. $\square$

The same argument works for any product, finite or infinite. Quotients are different: gluing can destroy the Hausdorff
property, and Section 9.5 shows the standard example.

### Hausdorff means the diagonal is closed

There is a neat reformulation that is often the quickest way to check the property. The **diagonal** of $X$ is the
set $\Delta = \{(x, x) : x \in X\}$ inside $X \times X$.

**Theorem 9.3.** *$X$ is Hausdorff if and only if $\Delta$ is closed in $X \times X$.*

**Proof.** $\Delta$ is closed exactly when its complement is open, that is, when every point $(x, y)$ with $x \neq y$
has a basic open neighbourhood $U \times V$ missing the diagonal. And $U \times V$ misses the diagonal exactly when no
point lies in both $U$ and $V$, that is, $U \cap V = \varnothing$. So "the complement of $\Delta$ is open" says word
for word "any $x \neq y$ have disjoint neighbourhoods". $\square$

A useful consequence: if $f, g : X \to Y$ are continuous and $Y$ is Hausdorff, then the set $\{x : f(x) = g(x)\}$ is
closed, because it is the preimage of $\Delta_Y$ under the continuous map $x \mapsto (f(x), g(x))$. (Exercise 3 uses
this to show that two continuous maps into a Hausdorff space that agree on a dense set agree everywhere.)

### Compact sets are closed

Here is the result that makes Hausdorff spaces and compact spaces such a good team.

**Theorem 9.4.** *In a Hausdorff space every compact subset is closed.*

**Proof.** Let $K \subseteq X$ be compact and let $p \notin K$. We find an open set around $p$ that misses $K$. For
each $k \in K$ choose disjoint open sets $U_k \ni k$ and $V_k \ni p$. The sets $U_k$ cover $K$, so finitely many do:
$K \subseteq U_{k_1} \cup \cdots \cup U_{k_m}$. Put $V = V_{k_1} \cap \cdots \cap V_{k_m}$. This is a finite
intersection of open sets containing $p$, so it is open and contains $p$. It misses each $U_{k_i}$, so it misses $K$.
Every point outside $K$ has such a neighbourhood, so $X \setminus K$ is open. $\square$

The proof gives a little more, which we will use in 9.2: *in a Hausdorff space a point $p$ and a compact set $K$ not
containing it have disjoint neighbourhoods* (namely $V$ and $U_{k_1} \cup \cdots \cup U_{k_m}$).

Without Hausdorff the theorem fails. In an infinite cofinite space every subset is compact (any open cover has a member
that misses only finitely many points; add one set for each of those), yet the closed sets are only the finite sets and
the whole space.

### Theorem 9.5 (compact to Hausdorff)

*Let $f : X \to Y$ be a continuous bijection, with $X$ compact and $Y$ Hausdorff. Then $f$ is a homeomorphism.*

**Proof.** We must show the inverse is continuous, which means $f$ sends closed sets to closed sets. Let $C \subseteq X$
be closed. A closed subset of a compact space is compact ([Chapter 8](08-Compactness.md)), so $C$ is compact. The
continuous image of a compact set is compact, so $f(C)$ is compact. By Theorem 9.4, $f(C)$ is closed in $Y$. $\square$

This is one of the most used theorems in the subject, because it removes the hardest step of proving that two spaces
are homeomorphic. Here is the standard example.

**Worked example (the circle as a glued interval).** Let $X = [0, 1]/(0 \sim 1)$, the interval with its two ends glued
([Chapter 6](06-Building-New-Spaces.md)), and $S^1$ the unit circle in $\mathbb{R}^2$. The map
$f([t]) = (\cos 2\pi t, \sin 2\pi t)$ is well defined because $t = 0$ and $t = 1$ go to the same point $(1, 0)$.

1. *Continuous.* The map $t \mapsto (\cos 2\pi t, \sin 2\pi t)$ from $[0,1]$ is continuous and takes equal values on
   glued points, so it passes to the quotient (the universal property of the quotient topology).
2. *Bijective.* Each point of the circle is $(\cos \theta, \sin \theta)$ for exactly one $\theta \in [0, 2\pi)$, except
   that $(1, 0)$ comes from $\theta = 0$ and $\theta = 2\pi$, which are glued.
3. *Compact domain.* $X$ is the continuous image of the compact $[0, 1]$.
4. *Hausdorff target.* $S^1$ is a metric space.

By Theorem 9.5, $f$ is a homeomorphism. No inverse had to be written down.

**Non-example.** The same formula on the *half-open* interval $[0, 1)$ is also a continuous bijection onto $S^1$, but it
is not a homeomorphism: points of $S^1$ just below $(1, 0)$ come from $t$ near 1, which is far from $t = 0$ in
$[0, 1)$. Theorem 9.5 does not apply because $[0, 1)$ is not compact. In fact $[0, 1)$ and $S^1$ are not homeomorphic
at all: removing any point $t$ with $0 < t < 1$ disconnects $[0, 1)$, while removing any point of $S^1$ leaves an arc,
which is connected ([Chapter 7](07-Connectedness.md)).

### Weaker cousins: T0 and T1

Two weaker axioms come up often enough to name.

- **T0**: for any two different points, *some* open set contains one but not the other. (The topology can tell the
  points apart.)
- **T1**: for any two different points $x, y$, there is an open set containing $x$ but not $y$ (and, swapping roles, one
  containing $y$ but not $x$).

**Theorem 9.6.** *$X$ is T1 if and only if every one-point set $\{x\}$ is closed.*

**Proof.** If points are closed and $x \neq y$, then $X \setminus \{y\}$ is an open set containing $x$ but not $y$.
Conversely, if $X$ is T1, each $y \neq x$ has an open neighbourhood missing $x$, and the union of these is
$X \setminus \{x\}$, which is therefore open. $\square$

Hausdorff implies T1, and T1 implies T0. The infinite cofinite space is T1 (finite sets are closed) but not T2. The
**Sierpiński space** $\{0, 1\}$ with open sets $\varnothing, \{1\}, \{0, 1\}$ is T0 (the open set $\{1\}$ tells the
points apart) but not T1 (no open set contains $0$ without $1$). Small as it is, the Sierpiński space appears in logic
and computer science as the space of "has this program halted yet?": the open set $\{1\}$ is an observation you can
confirm in finite time.

## 9.2 Regular and normal spaces

Hausdorff separates points from points. The next two axioms separate points from closed sets, and closed sets from
closed sets. To make the ladder work cleanly we assume points are closed in both.

**Definitions.** Let $X$ be a T1 space.

- $X$ is **regular** (also **T3**) if for every closed set $A$ and point $x \notin A$ there are disjoint open sets
  $U \ni x$ and $V \supseteq A$.
- $X$ is **normal** (also **T4**) if for every two disjoint closed sets $A, B$ there are disjoint open sets
  $U \supseteq A$ and $V \supseteq B$.

Because points are closed, normal implies regular (take $A$ and the closed set $\{x\}$), and regular implies Hausdorff
(take the point $x$ and the closed set $\{y\}$). So we have a ladder:

$$
\text{normal (T4)} \Rightarrow \text{regular (T3)} \Rightarrow \text{Hausdorff (T2)} \Rightarrow \text{T1} \Rightarrow \text{T0}.
$$

A word of warning: books disagree about conventions. Some do not include T1 in "regular" and "normal", and a few even
swap the meanings of T3 and "regular". When you read another text, check its definitions first. This book always
includes T1.

There is a useful way to restate regularity, which we will also use for normality.

**Lemma 9.7.** *A T1 space $X$ is regular if and only if for every point $x$ and open set $W \ni x$ there is an open
$U$ with $x \in U \subseteq \overline{U} \subseteq W$. It is normal if and only if for every closed $A$ and open
$W \supseteq A$ there is an open $U$ with $A \subseteq U \subseteq \overline{U} \subseteq W$.*

Here $\overline{U}$ is the closure of $U$, the smallest closed set containing it.

**Proof (normal case; the regular case is the same with $A = \{x\}$).** Suppose $X$ is normal and $A \subseteq W$.
The closed sets $A$ and $X \setminus W$ are disjoint, so there are disjoint open $U \supseteq A$ and
$V \supseteq X \setminus W$. Then $U \subseteq X \setminus V$, and $X \setminus V$ is closed, so
$\overline{U} \subseteq X \setminus V \subseteq W$. Conversely, given disjoint closed $A, B$, apply the condition to
$A$ and $W = X \setminus B$ to get $U$; then $U$ and $X \setminus \overline{U}$ are disjoint open sets containing $A$
and $B$. $\square$

In words: you can always fit a "closed buffer" between a closed set and any open set around it.

### Metric spaces are normal

**Theorem 9.8.** *Every metric space is normal.*

**Proof.** For a nonempty set $A$ put $d(x, A) = \inf_{a \in A} d(x, a)$, the distance from $x$ to $A$. Two facts:

- $|d(x, A) - d(y, A)| \le d(x, y)$, so $x \mapsto d(x, A)$ is continuous. (For any $a$,
  $d(x, A) \le d(x, a) \le d(x, y) + d(y, a)$; take the infimum over $a$ to get $d(x, A) \le d(x, y) + d(y, A)$, and
  swap $x$ and $y$.)
- If $A$ is closed, $d(x, A) = 0$ exactly when $x \in A$. (If $d(x, A) = 0$, there are points of $A$ arbitrarily close
  to $x$, so $x$ is in the closure of $A$, which is $A$.)

Now let $A, B$ be disjoint, closed and nonempty (if one is empty there is nothing to do). Define

$$
f(x) = \frac{d(x, A)}{d(x, A) + d(x, B)}.
$$

The denominator is never zero, because a point with $d(x, A) = d(x, B) = 0$ would lie in both $A$ and $B$. So $f$ is
continuous, $0 \le f \le 1$, $f = 0$ exactly on $A$ and $f = 1$ exactly on $B$. The sets $U = f^{-1}([0, \tfrac12))$
and $V = f^{-1}((\tfrac12, 1])$ are open (preimages of open subsets of $[0, 1]$), disjoint, and contain $A$ and $B$.
Points are closed in a metric space, so the T1 condition holds too. $\square$

**Worked example.** In $\mathbb{R}$, take $A = \{0\}$ and $B = [1, 2]$. Then $d(x, A) = |x|$, and $d(x, B)$ is
$1 - x$ for $x \le 1$, $0$ on $[1, 2]$ and $x - 2$ for $x \ge 2$. At $x = 0.5$: $f = 0.5/(0.5 + 0.5) = 0.5$. At
$x = 0.25$: $f = 0.25/(0.25 + 0.75) = 0.25$. At $x = -1$: $f = 1/(1 + 2) = 1/3$. At $x = 3$: $f = 3/(3 + 1) = 3/4$.
For $x < 0$ the value is $-x/(1 - 2x)$, which is always below $\tfrac12$; so here
$U = f^{-1}([0, \frac12)) = (-\infty, 0.5)$ and $V = f^{-1}((\frac12, 1]) = (0.5, \infty)$.
Check: on $[0, 1]$ the function is $f(x) = x/(x + 1 - x) = x$, so $f(0.5) = 0.5$ and $f$ rises from 0 to 1 across the
gap between $A$ and $B$.

The function $f$ in that proof is more than a separation: it is a continuous function that is 0 on one closed set and
1 on the other. In a metric space we got it for free from the distance. Urysohn's lemma (9.3) says that in *any* normal
space such a function still exists, even though there is no distance to build it from.

### Compact Hausdorff spaces are normal

**Theorem 9.9.** *Every compact Hausdorff space is normal.*

**Proof.** Points are closed (Hausdorff implies T1). Let $A, B$ be disjoint closed sets. Both are compact, as closed
subsets of a compact space. By the remark after Theorem 9.4, for each $a \in A$ there are disjoint open sets
$U_a \ni a$ and $V_a \supseteq B$. The $U_a$ cover the compact set $A$, so finitely many do:
$A \subseteq U_{a_1} \cup \cdots \cup U_{a_m} = U$. Put $V = V_{a_1} \cap \cdots \cap V_{a_m}$. Then $V \supseteq B$
is open, and it misses each $U_{a_i}$, so $U \cap V = \varnothing$. $\square$

The proof is the proof of Theorem 9.4 done twice: once to separate a point from a compact set, and again to separate
two compact sets. So spheres, tori, closed surfaces, the Cantor set and every closed bounded subset of $\mathbb{R}^n$
are normal.

### A Hausdorff space that is not regular

*Level: advanced.*

Rungs of a ladder are only interesting if they are really different. Here is a space on the second rung but not the
third. Let $K = \{1, \tfrac12, \tfrac13, \tfrac14, \ldots\} = \{1/n : n \ge 1\}$. The **K-topology** $\mathbb{R}_K$ on
the real line has as a basis all open intervals $(a, b)$ and all sets $(a, b) \setminus K$.

- *Hausdorff.* Every ordinary open set is still open, so the ordinary disjoint intervals still separate points.
- *$K$ is closed.* Its complement is open: a point $x$ with $x < 0$, $x > 1$ or $1/(n+1) < x < 1/n$ has an ordinary
  interval around it missing $K$; and $0$ has the basic set $(-1, 1) \setminus K$, which misses $K$.
- *$0$ and $K$ cannot be separated.* Suppose $U \supseteq K$ and $V \ni 0$ were disjoint and open. The set $V$ contains a
  basic set around $0$. An ordinary interval around $0$ contains points $1/n$ of $K \subseteq U$, so the basic set must
  be of the form $(a, b) \setminus K$ with $a < 0 < b$. Choose $n$ with $1/n < b$. Around $1/n$, the open set $U$
  contains a basic set, and it must be an ordinary interval $(c, d) \ni 1/n$ (the other kind misses $1/n$). The
  intervals $(a, b)$ and $(c, d)$ overlap in a nonempty open interval around $1/n$, and that interval contains points
  that are not in the countable set $K$. Such a point lies in $(a, b) \setminus K \subseteq V$ and in
  $(c, d) \subseteq U$, so $U \cap V \neq \varnothing$, a contradiction.

So $\mathbb{R}_K$ is Hausdorff but not regular.

There are also regular spaces that are not normal. The standard example is the **Sorgenfrey plane**, the product of two
copies of the Sorgenfrey line of 9.5. The proof that it is not normal (Sorgenfrey, 1947) takes about a page; the idea is
that the "anti-diagonal" $\{(x, -x)\}$ is a closed discrete set with uncountably many points, while the plane has a
countable dense set, and these two facts together leave too few continuous functions to separate all the subsets of the
anti-diagonal. Munkres, *Topology*, §31 gives the full argument. Notice what it shows: **a product of two normal spaces
need not be normal**, unlike Hausdorff (Theorem 9.2) and regular (which is preserved by products).

| Space | T1 | T2 | T3 | T4 | metrisable |
| --- | --- | --- | --- | --- | --- |
| $\mathbb{R}^n$, any metric space | yes | yes | yes | yes | yes |
| compact Hausdorff, e.g. $S^2$ | yes | yes | yes | yes | if second countable |
| infinite cofinite space | yes | no | no | no | no |
| $\mathbb{R}_K$ | yes | yes | no | no | no |
| Sorgenfrey line | yes | yes | yes | yes | no |
| Sorgenfrey plane | yes | yes | yes | no | no |
| line with two origins (9.5) | yes | no | no | no | no |

Every "no" in the last column follows from the theorems of this chapter: metrisable spaces are normal (Theorem 9.8), and
the Sorgenfrey line fails for a different reason, proved in 9.4. (One caution on the second row: a compact Hausdorff
space is metrisable exactly when it is second countable, a fact proved in 9.4 in one direction.)

## 9.3 Urysohn's lemma

*Level: advanced.*

In a metric space, the function $d(x, A)/(d(x, A) + d(x, B))$ climbs continuously from $0$ on $A$ to $1$ on $B$. In a
general space there is no distance. Can open sets alone build a continuous function? This is the question Pavel
Urysohn answered.

**Urysohn's lemma.** *Let $X$ be a normal space and $A, B$ disjoint closed subsets. There is a continuous function
$f : X \to [0, 1]$ with $f = 0$ on $A$ and $f = 1$ on $B$.*

Such an $f$ is called an **Urysohn function** for $A$ and $B$. The converse is easy: if such an $f$ exists then
$f^{-1}([0, \frac12))$ and $f^{-1}((\frac12, 1])$ separate $A$ and $B$. So for T1 spaces, *normal* means exactly *any
two disjoint closed sets can be told apart by a continuous real function*.

### The idea: contour lines first, the function afterwards

Think of a hill whose height is $f$. Before you know the heights, imagine you know the regions "height less than
$r$" for many values of $r$: nested regions, each one's closure inside the next. Then the height at a point is
recovered as the smallest $r$ whose region contains the point. Urysohn's proof builds those regions first, using only
Lemma 9.7, and then defines $f$ from them.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 220" role="img" aria-label="The nested open sets in the proof of Urysohn's lemma. The closed set A sits inside U0, whose closure sits inside U one quarter, then U one half, then U three quarters, all inside U1, the complement of the closed set B on the right. The function f is the level of the first set containing a point">
  <rect x="370" y="10" width="60" height="200" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="400" y="114" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">B</text>
  <ellipse cx="170" cy="110" rx="160" ry="92" fill="#9cc9ea" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <ellipse cx="170" cy="110" rx="130" ry="80" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <ellipse cx="170" cy="110" rx="100" ry="65" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <ellipse cx="170" cy="110" rx="70" ry="50" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <ellipse cx="170" cy="110" rx="40" ry="30" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/>
  <text x="170" y="115" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">A</text>
  <text x="225" y="114" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">U<tspan font-size="9" dy="4">0</tspan></text>
  <text x="255" y="114" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">U<tspan font-size="9" dy="4">1/4</tspan></text>
  <text x="285" y="114" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">U<tspan font-size="9" dy="4">1/2</tspan></text>
  <text x="315" y="114" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">U<tspan font-size="9" dy="4">3/4</tspan></text>
  <text x="350" y="40" text-anchor="middle" font-size="12" fill="currentColor" font-style="italic">U<tspan font-size="9" dy="4">1</tspan></text>
</svg>
</div>

### The proof

Let $D$ be the set of **dyadic rationals** in $[0, 1]$, the numbers $k/2^n$ with $0 \le k \le 2^n$. They are dense in
$[0, 1]$: every interval contains one.

*Step 1: build open sets $U_r$, one for each $r \in D$, such that*

$$
A \subseteq U_0, \qquad U_1 = X \setminus B, \qquad \overline{U_r} \subseteq U_s \text{ whenever } r < s.
$$

Put $U_1 = X \setminus B$, which is open and contains $A$. By Lemma 9.7 there is an open $U_0$ with
$A \subseteq U_0 \subseteq \overline{U_0} \subseteq U_1$. That handles the dyadics with denominator 1.

Suppose all $U_r$ with denominator $2^{n-1}$ are built with the nesting property. A new dyadic with denominator $2^n$
is $r = (2k+1)/2^n$, sitting halfway between its neighbours $p = k/2^{n-1}$ and $q = (k+1)/2^{n-1}$, which are already
built with $\overline{U_p} \subseteq U_q$. Apply Lemma 9.7 to the closed set $\overline{U_p}$ inside the open set
$U_q$: there is an open $U_r$ with

$$
\overline{U_p} \subseteq U_r \subseteq \overline{U_r} \subseteq U_q.
$$

Do this for every new $r$. The nesting property still holds for all pairs, because any two dyadics of denominator
$2^n$ are separated by a chain of neighbours, and the inclusions chain together. By induction, all $U_r$, $r \in D$,
exist.

It is convenient to extend the family: put $U_r = X$ for dyadic $r > 1$ and $U_r = \varnothing$ for dyadic $r < 0$.
The nesting $\overline{U_r} \subseteq U_s$ for $r < s$ still holds for all dyadic rationals $r, s$.

*Step 2: define $f$.* For $x \in X$ let

$$
f(x) = \inf\{ r \text{ dyadic} : x \in U_r \}.
$$

Every $x$ is in $U_r$ for all $r > 1$, and in no $U_r$ with $r < 0$, so $0 \le f(x) \le 1$. If $x \in A$ then
$x \in U_0$, so $f(x) = 0$. If $x \in B$ then $x \notin U_1$, and so $x \notin U_r$ for any $r \le 1$ (those are
inside $U_1$), so $f(x) = 1$.

*Step 3: two facts.* For dyadic $r$:

- (i) If $x \in \overline{U_r}$ then $f(x) \le r$. Indeed for every dyadic $s > r$, $x \in \overline{U_r} \subseteq U_s$,
  so $f(x) \le s$; dyadics $s$ come arbitrarily close to $r$ from above, so $f(x) \le r$.
- (ii) If $x \notin U_r$ then $f(x) \ge r$. Indeed if $x \in U_s$ with $s < r$, then $x \in U_s \subseteq U_r$, which is
  false; so every $s$ with $x \in U_s$ is at least $r$ (and not equal to $r$), and the infimum is at least $r$.

*Step 4: continuity.* Take $x_0$ and an open interval $(c, d)$ containing $f(x_0)$. Choose dyadic rationals $p, q$ with
$c < p < f(x_0) < q < d$ (possible because dyadics are dense; we allow $p < 0$ or $q > 1$ if needed). Let

$$
W = U_q \setminus \overline{U_p}.
$$

This is open. It contains $x_0$: since $f(x_0) < q$, fact (ii) says $x_0 \in U_q$; since $f(x_0) > p$, fact (i) says
$x_0 \notin \overline{U_p}$. And for any $x \in W$: $x \in U_q \subseteq \overline{U_q}$, so $f(x) \le q < d$ by (i);
and $x \notin \overline{U_p} \supseteq U_p$, so $f(x) \ge p > c$ by (ii). So $f(W) \subseteq (c, d)$. Every point has
such a neighbourhood, so $f$ is continuous. $\square$

Look at what the proof needed: only Lemma 9.7, used countably many times. That is why normality is exactly the right
hypothesis.

**Worked example (checking the recipe in a metric space).** Take $X = \mathbb{R}$, $A = (-\infty, 0]$ and
$B = [1, \infty)$. A valid choice of sets is $U_r = (-\infty, \tfrac12 + \tfrac12 r)$ for dyadic $r < 1$ and
$U_1 = (-\infty, 1)$. Check the nesting: for $r < s < 1$, $\overline{U_r} = (-\infty, \tfrac12 + \tfrac12 r]$, which is
inside $(-\infty, \tfrac12 + \tfrac12 s)$; and every $\overline{U_r}$ with $r < 1$ ends before $1$, so it sits inside
$U_1$. The resulting $f$ is $0$ for $x \le \tfrac12$, then $f(x) = 2x - 1$ for $\tfrac12 \le x \le 1$, then $1$.
Check: $f(0.75) = \inf\{r : 0.75 < 0.5 + 0.5r\} = \inf\{r : r > 0.5\} = 0.5 = 2(0.75) - 1$. The recipe produced a
ramp, as it should.

### The Tietze extension theorem

Urysohn's lemma extends functions from a very special closed set $A \cup B$ (constant on each part). The same idea,
applied over and over, extends *any* continuous function from a closed set.

**Tietze extension theorem.** *Let $X$ be normal, $C \subseteq X$ closed, and $g : C \to [-1, 1]$ continuous. Then $g$
extends to a continuous $G : X \to [-1, 1]$. The same holds with $\mathbb{R}$ in place of $[-1, 1]$.*

**Proof sketch.** Let $A = g^{-1}([-1, -\tfrac13])$ and $B = g^{-1}([\tfrac13, 1])$, disjoint closed subsets of $C$,
hence of $X$. Urysohn gives $h_1 : X \to [-\tfrac13, \tfrac13]$, equal to $-\tfrac13$ on $A$ and $\tfrac13$ on $B$ (a
rescaled Urysohn function). On $C$, the error $g - h_1$ has size at most $\tfrac23$: check the three cases $g$ near $-1$,
near $0$, near $1$. Now repeat with $g - h_1$, which lives in $[-\tfrac23, \tfrac23]$, to get $h_2$ of size at most
$\tfrac13 \cdot \tfrac23$, and so on. The series $G = h_1 + h_2 + \cdots$ converges uniformly (its terms are bounded by
$\tfrac13 (\tfrac23)^{n-1}$, a geometric series with sum $1$), so $G$ is continuous, and on $C$ the errors shrink to
zero, so $G = g$ there. The unbounded case takes one more trick; Munkres §35 has the details. $\square$

Tietze's theorem is why you can always extend a temperature reading taken along the closed edge of a region to a
continuous temperature on the whole region. It also shows up in 9.4 and, in its smooth form, as **partitions of unity**,
the tool that glues local constructions on manifolds together (see [Chapter 11](11-Manifolds.md) and the U of T guide
[MAT257Y1 Unit 10: Partitions of Unity and Change of Variables](../../uoft/MAT257Y1/unit10.md)).

## 9.4 Urysohn's metrisation theorem

*Level: advanced.*

A space is **metrisable** if there is a metric whose open balls generate its topology. Metrisable spaces are as nice as
spaces get: sequences describe closure, compactness equals sequential compactness, and everything on the separation
ladder holds. So the natural question is: *which topological spaces are metrisable?* We already have necessary
conditions: a metrisable space must be normal (Theorem 9.8). Urysohn found a simple sufficient one.

Recall from [Chapter 4](04-Topological-Spaces.md) that $X$ is **second countable** if its topology has a countable
basis. $\mathbb{R}^n$ is: the balls with rational centres and rational radii form one.

**Urysohn's metrisation theorem.** *Every regular, second countable space is metrisable.*

(Regular includes T1, as always in this book.) Urysohn proved it in 1924–25 for normal second countable spaces; Andrey
Tychonoff observed in 1926 that regular is enough, because of the first step below.

### The proof

**Step 1: regular and second countable implies normal.** This takes a page; here is the idea. Let $A, B$ be disjoint
closed sets and $\{B_n\}$ a countable basis. By regularity, each point of $A$ lies in some basic set whose closure
misses $B$; list these basic sets as $V_1, V_2, \ldots$ (countably many, because the basis is countable). Likewise list
basic sets $W_1, W_2, \ldots$ covering $B$ with closures missing $A$. The unions $\bigcup V_n$ and $\bigcup W_n$
contain $A$ and $B$ but may overlap. Trim them in alternation:

$$
V_n' = V_n \setminus (\overline{W_1} \cup \cdots \cup \overline{W_n}), \qquad
W_n' = W_n \setminus (\overline{V_1} \cup \cdots \cup \overline{V_n}).
$$

Each is open (an open set minus a closed set), $\bigcup V_n' \supseteq A$ and $\bigcup W_n' \supseteq B$ (the closures
removed miss the relevant set), and a short case check shows $V_j' \cap W_k' = \varnothing$ for all $j, k$. (If
$j \le k$, a point of $V_j' \subseteq V_j$ is removed from $W_k'$; if $j > k$, a point of $W_k' \subseteq W_k$ is
removed from $V_j'$.) So $A$ and $B$ are separated.

**Step 2: countably many Urysohn functions.** Let $\{B_n\}$ be a countable basis. For each pair of indices $(n, m)$
with $\overline{B_n} \subseteq B_m$, Urysohn's lemma (for the normal space $X$) gives a continuous
$g_{n,m} : X \to [0, 1]$ equal to $1$ on $\overline{B_n}$ and $0$ outside $B_m$. There are countably many pairs, so
list the functions as $f_1, f_2, f_3, \ldots$. They have this property:

*(P) for every point $x$ and every open $U \ni x$ there is a $k$ with $f_k(x) > 0$ and $f_k = 0$ outside $U$.*

Indeed, choose a basic $B_m$ with $x \in B_m \subseteq U$; by regularity (Lemma 9.7) choose a basic $B_n$ with
$x \in B_n \subseteq \overline{B_n} \subseteq B_m$; then $g_{n,m}(x) = 1$ and $g_{n,m}$ vanishes outside $B_m$, hence
outside $U$.

**Step 3: embed into the Hilbert cube.** The **Hilbert cube** is $Q = [0, 1]^{\mathbb{N}}$, the set of all sequences
$t = (t_1, t_2, \ldots)$ with each $t_k \in [0, 1]$, with the metric

$$
D(s, t) = \sum_{k=1}^{\infty} 2^{-k} |s_k - t_k|.
$$

(This metric gives the product topology: a sequence of points of $Q$ converges exactly when each coordinate
converges.) Define

$$
F : X \to Q, \qquad F(x) = (f_1(x), f_2(x), f_3(x), \ldots).
$$

We show that $F$ is a homeomorphism onto its image. Then $d(x, y) = D(F(x), F(y))$ is a metric on $X$ giving its
topology.

- *Continuous.* Each coordinate is continuous, so $F$ is continuous into the product topology. (Directly: given
  $\varepsilon$, choose $N$ with $2^{-N} < \varepsilon/2$; the tail of the sum is then less than $\varepsilon/2$ for any
  two points, and the finitely many first coordinates are each continuous, so they can be made close.)
- *Injective.* If $x \neq y$, the set $U = X \setminus \{y\}$ is open (T1) and contains $x$. By (P) there is a $k$ with
  $f_k(x) > 0 = f_k(y)$. So $F(x) \neq F(y)$.
- *Open onto its image.* Let $U \subseteq X$ be open and $x_0 \in U$. By (P) choose $k$ with $f_k(x_0) > 0$ and
  $f_k = 0$ outside $U$. The set $O = \{t \in Q : t_k > 0\}$ is open in $Q$, and $F(x_0) \in O$. If $F(x) \in O$ then
  $f_k(x) > 0$, so $x \in U$. So $O \cap F(X)$ is an open set of $F(X)$ around $F(x_0)$ inside $F(U)$, and $F(U)$ is
  open in $F(X)$. $\square$

The theorem has a striking corollary: *every regular second countable space is, up to homeomorphism, a subspace of one
fixed space, the Hilbert cube.* All the separable metric spaces of analysis, every manifold, every finite simplicial
complex: all of them live inside $[0, 1]^{\mathbb{N}}$.

### Consequences

**Corollary 9.10.** *A compact Hausdorff space is metrisable if and only if it is second countable.*

One direction is the theorem (compact Hausdorff is normal, Theorem 9.9, so regular). For the other, a compact metric
space has, for each $m$, a finite cover by balls of radius $1/m$; all these balls together form a countable basis.

**Corollary 9.11.** *Every topological manifold is metrisable.* In [Chapter 11](11-Manifolds.md) a manifold is defined
to be Hausdorff and second countable and locally like $\mathbb{R}^n$. Being locally Euclidean and Hausdorff, it is
regular (a point has a neighbourhood homeomorphic to an open ball, and closed balls inside it give the closed buffers of
Lemma 9.7; the closed ball is compact, so it is closed in the Hausdorff space). So the theorem applies.

### A space that is not metrisable, and why

The **Sorgenfrey line** $\mathbb{R}_\ell$ is the real line with the half-open intervals $[a, b)$ as a basis. It is
finer than the usual topology, so it is Hausdorff, and with a little work it is normal. Is it metrisable? Urysohn's
theorem cannot say yes, because:

**Claim.** *$\mathbb{R}_\ell$ is not second countable.* Let $\mathcal{B}$ be any basis. For each real $x$, the open set
$[x, x + 1)$ contains $x$, so some $B_x \in \mathcal{B}$ satisfies $x \in B_x \subseteq [x, x + 1)$. Then $x$ is the
smallest element of $B_x$. So different $x$ give different $B_x$, and $\mathcal{B}$ has at least as many members as
$\mathbb{R}$: uncountably many.

And it cannot be metrisable, because of this fact about metric spaces:

**Lemma 9.12.** *A metric space with a countable dense subset is second countable.*

**Proof.** Let $\{q_1, q_2, \ldots\}$ be dense. The balls $B(q_i, 1/m)$ for $i, m \ge 1$ form a countable family. If
$U$ is open and $x \in U$, pick $m$ with $B(x, 2/m) \subseteq U$, then $q_i$ with $d(x, q_i) < 1/m$. Then
$x \in B(q_i, 1/m) \subseteq B(x, 2/m) \subseteq U$ (a point within $1/m$ of $q_i$ is within $2/m$ of $x$). $\square$

The rationals are dense in $\mathbb{R}_\ell$ (every $[a, b)$ contains one). If $\mathbb{R}_\ell$ were metrisable,
Lemma 9.12 would make it second countable, contradicting the claim. So **the Sorgenfrey line is normal but not
metrisable**: normality is necessary for a metric, but not sufficient.

For spaces without a countable basis the complete answer came in 1950–51: the **Nagata–Smirnov metrisation theorem**
(Jun-iti Nagata, Yurii Smirnov) says a space is metrisable exactly when it is regular and has a basis that is a
countable union of locally finite families; R. H. Bing proved a similar theorem independently. Munkres §40 proves it.

## 9.5 Strange spaces

*Level: advanced.*

The definition of a manifold in [Chapter 11](11-Manifolds.md) will say three things: locally Euclidean, Hausdorff,
second countable. The last two can look like fussy small print. This section shows the spaces that the small print is
there to exclude. They are not pathological curiosities invented to annoy students; each one arises naturally from a
simple construction, and each one breaks a theorem we would like to have.

### The line with two origins

Take two copies of the real line, $\mathbb{R} \times \{a\}$ and $\mathbb{R} \times \{b\}$, and glue them together at
every point except zero: $(x, a) \sim (x, b)$ for all $x \neq 0$. The quotient space $X$ looks like a line, except that
it has two origins, $0_a$ and $0_b$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 160" role="img" aria-label="The line with two origins. A horizontal line with a gap at the middle and two separate points above and below the gap, labelled 0a and 0b. An orange neighbourhood of 0a and a blue neighbourhood of 0b both contain the line on either side of the gap, so they always overlap">
  <line x1="30" y1="80" x2="204" y2="80" stroke="currentColor" stroke-width="2"/>
  <line x1="216" y1="80" x2="390" y2="80" stroke="currentColor" stroke-width="2"/>
  <line x1="140" y1="72" x2="204" y2="72" stroke="#eea66f" stroke-width="4"/>
  <line x1="216" y1="72" x2="280" y2="72" stroke="#eea66f" stroke-width="4"/>
  <line x1="160" y1="88" x2="204" y2="88" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="216" y1="88" x2="260" y2="88" stroke="#9cc9ea" stroke-width="4"/>
  <circle cx="210" cy="50" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="228" y="46" text-anchor="start" font-size="13" fill="currentColor">0a</text>
  <text x="228" y="122" text-anchor="start" font-size="13" fill="currentColor">0b</text>
  <text x="210" y="150" text-anchor="middle" font-size="12" fill="currentColor">any neighbourhoods of the two origins overlap</text>
</svg>
</div>

- *Locally Euclidean.* Each point has a neighbourhood homeomorphic to an open interval. For $0_a$, take the image of
  $(-1, 1) \times \{a\}$: it contains $0_a$ but not $0_b$, and it is a copy of $(-1, 1)$.
- *Second countable.* Images of rational intervals in the two copies give a countable basis.
- *Not Hausdorff.* Any open set containing $0_a$ contains the image of some $(-\varepsilon, \varepsilon) \times \{a\}$,
  hence all the points $x \neq 0$ with $|x| < \varepsilon$. The same is true for $0_b$ with some $\varepsilon'$. Points
  with $0 < |x| < \min(\varepsilon, \varepsilon')$ lie in both. So $0_a$ and $0_b$ cannot be separated.

The sequence $x_n = 1/n$ converges to $0_a$ *and* to $0_b$. Every theorem that uses uniqueness of limits fails: for
instance, the two continuous maps $\mathbb{R} \to X$, "include as copy $a$" and "include as copy $b$", agree on the dense
set $\mathbb{R} \setminus \{0\}$ but differ at $0$ (compare Exercise 3). In analysis on such a space, the solution of a
differential equation can split into two at the origin. This is why manifolds are required to be Hausdorff.

The example also shows that **a quotient of a Hausdorff space need not be Hausdorff**, even when the space is as nice as
two disjoint lines and the gluing looks harmless.

### The Sorgenfrey line, again

The Sorgenfrey line of 9.4 is Hausdorff and normal, and it has the rationals as a countable dense set, but it has no
countable basis and is not metrisable. It is a good source of counterexamples: it is **totally disconnected** (each
$[a, b)$ is both open and closed, since its complement $(-\infty, a) \cup [b, \infty)$ is a union of half-open
intervals), yet it has no isolated points.

### The long line

*Level: expert aside.* The construction uses ordinals; skip it if you have not met them.

The first uncountable ordinal $\omega_1$ is the set of all countable ordinals, ordered by size. It is uncountable, but
every one of its elements has only countably many predecessors. The **closed long ray** is

$$
L = \omega_1 \times [0, 1)
$$

in the **dictionary order**: $(\alpha, s) < (\beta, t)$ if $\alpha < \beta$, or $\alpha = \beta$ and $s < t$. Give it
the order topology, whose basic open sets are open intervals (and half-open intervals at the least point $(0, 0)$).
Picture it as uncountably many copies of $[0, 1)$ laid end to end. Each initial segment $\{p \in L : p < (\alpha, 0)\}$
with $\alpha$ countable is homeomorphic to $[0, 1)$; this is proved by transfinite induction and we do not give it here.

What the long ray does:

- *It is Hausdorff*, like every order topology: if $p < q$, either there is a point $r$ strictly between them and the
  sets $\{x < r\}$, $\{x > r\}$ separate $p$ and $q$, or there is none and $\{x < q\}$, $\{x > p\}$ do.
- *It is locally Euclidean away from its first point*, because every point lies in a countable initial segment, which
  is a copy of $[0, 1)$. Removing the first point gives the **open long ray**, a space in which every point has a
  neighbourhood homeomorphic to an open interval.
- *It is not second countable and not metrisable.* Here is a clean proof. Every sequence $p_n = (\alpha_n, s_n)$ in $L$
  is contained in a countable initial segment: the supremum of countably many countable ordinals is countable (a
  countable union of countable sets is countable, which uses a weak form of the axiom of choice), so some
  $\beta < \omega_1$ exceeds all $\alpha_n$. The closed segment $\{p \le (\beta, 0)\}$ is homeomorphic to $[0, 1]$, so
  the sequence has a convergent subsequence by Bolzano–Weierstrass. So $L$ is **sequentially compact**. But it is not
  **compact**: the open sets $\{p < (\alpha, 0)\}$, $\alpha < \omega_1$, cover $L$, and any finitely many of them have a
  largest one, which misses $(\alpha + 1, 0)$ for its $\alpha$. In a metric space, sequential compactness and compactness
  are the same ([Chapter 8](08-Compactness.md)). So $L$ has no metric.

Gluing two open long rays at their ends gives the **long line**. The open long ray and the long line are Hausdorff,
connected and locally like $\mathbb{R}$, but they are "too long" to be manifolds in the sense of Chapter 11. This is why
manifolds are required to be second countable: without it, a "one-dimensional manifold" could be too long to have a
metric, and theorems such as the existence of partitions of unity and the Whitney embedding theorem (every manifold sits
inside some $\mathbb{R}^N$) fail.

### Sierpiński space and the Zariski topology, briefly

Not every non-Hausdorff space is a failure. The two-point Sierpiński space of 9.1 classifies open sets: for any space
$X$, continuous maps $X \to \{0, 1\}$ correspond exactly to open subsets of $X$ (the preimage of $\{1\}$). And the
Zariski topology on the solutions of polynomial equations, though far from Hausdorff, is the natural home of algebraic
geometry, where its closed sets are exactly the sets cut out by equations. The lesson is not "Hausdorff good, the rest
bad". It is that each axiom buys specific theorems, and you should know which ones you are paying for.

## A short history

Felix Hausdorff's book *Grundzüge der Mengenlehre* (1914) gave the first axioms for a topological space, in terms of
neighbourhoods, and his axioms included the separation property that now bears his name. Heinrich Tietze proved his
extension theorem for metric spaces in 1915. Pavel Urysohn, working in Moscow with Pavel Alexandroff, proved the lemma
and the metrisation theorem in the early 1920s. He drowned while swimming off the coast of Brittany in August 1924, aged
26; his papers, including "Zum Metrisationsproblem", were published after his death in *Mathematische Annalen* in 1925,
prepared by Alexandroff. Andrey Tychonoff showed in 1926 that "normal" in Urysohn's theorem can be weakened to
"regular". Robert Sorgenfrey's 1947 note showed that the product of his line with itself is not normal. The general
metrisation problem was settled by Nagata (1950), Smirnov (1951) and Bing (1951).

## Check yourself

??? question "1. Let $X = \{a, b\}$ with the indiscrete topology. Which of T0, T1, T2 hold? Does the constant sequence $a, a, a, \ldots$ converge to $b$?"
    None of them. The only open sets are $\varnothing$ and $X$, so no open set contains one point and not the other: not
    T0, and hence not T1 or T2. The constant sequence converges to $b$: the only neighbourhood of $b$ is $X$, which
    contains every term. So it converges to both $a$ and $b$.

??? question "2. Show that a finite T1 space is discrete."
    In a T1 space every point is closed (Theorem 9.6). A finite union of closed sets is closed, so every subset of a
    finite T1 space, being a finite union of points, is closed. Then every complement is closed too, so every subset is
    open: the topology is discrete. In particular the only finite Hausdorff spaces are the discrete ones.

??? question "3. Let $f, g : X \to Y$ be continuous, $Y$ Hausdorff, and suppose $f = g$ on a dense subset $S$ of $X$. Prove $f = g$."
    The set $E = \{x : f(x) = g(x)\}$ is the preimage of the diagonal $\Delta_Y$ under the continuous map
    $x \mapsto (f(x), g(x))$ into $Y \times Y$. Since $Y$ is Hausdorff, $\Delta_Y$ is closed (Theorem 9.3), so $E$ is
    closed. It contains $S$, so it contains the closure of $S$, which is $X$. Hence $f = g$ everywhere. The line with two
    origins in 9.5 shows the hypothesis "Hausdorff" cannot be dropped.

??? question "4. Prove directly that $\mathbb{R}$ with the cofinite topology is T1 but not Hausdorff."
    T1: a single point $\{x\}$ is finite, so it is closed. Not Hausdorff: let $U, V$ be nonempty open sets. Their
    complements are finite, so $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is finite. Since
    $\mathbb{R}$ is infinite, $U \cap V$ is not empty. So no two points have disjoint neighbourhoods.

??? question "5. Let $\mathbb{R}/\mathbb{Q}$ be the quotient of $\mathbb{R}$ in which $x \sim y$ when $x - y$ is rational. Describe its topology."
    It is indiscrete. Let $W$ be a nonempty open set in the quotient. Its preimage $U$ in $\mathbb{R}$ is open, nonempty
    and saturated: if $x \in U$ then $x + q \in U$ for every rational $q$. $U$ contains an interval $I$, and every real
    number $y$ is $x + q$ for some $x \in I$ and rational $q$ (choose a rational $q$ in the interval $y - I$). So
    $U = \mathbb{R}$ and $W$ is everything. The only open sets are $\varnothing$ and the whole space; the quotient is not
    even T0, although $\mathbb{R}$ is metric.

??? question "6. In $\mathbb{R}$, let $A = (-\infty, -1]$ and $B = [2, \infty)$. Write down the Urysohn function $f = d(x,A)/(d(x,A) + d(x,B))$ explicitly and compute $f(0)$, $f(1)$, $f(1.5)$."
    For $-1 \le x \le 2$: $d(x, A) = x + 1$ and $d(x, B) = 2 - x$, so $f(x) = (x + 1)/3$. For $x \le -1$, $f = 0$; for
    $x \ge 2$, $f = 1$. So $f(0) = 1/3$, $f(1) = 2/3$, $f(1.5) = 2.5/3 = 5/6$. Check: $f(-1) = 0$ and $f(2) = 1$, and
    the formula is a straight ramp between the two closed sets.

??? question "7. Prove that a subspace of a regular space is regular."
    Let $Y \subseteq X$, $X$ regular. Points of $Y$ are closed in $Y$ (intersect closed points of $X$ with $Y$). Let
    $C$ be closed in $Y$ and $y \in Y \setminus C$. Then $C = \overline{C} \cap Y$, where $\overline{C}$ is the closure
    in $X$, so $y \notin \overline{C}$. By regularity of $X$ choose disjoint open $U \ni y$, $V \supseteq \overline{C}$.
    Then $U \cap Y$ and $V \cap Y$ are disjoint open sets of $Y$ containing $y$ and $C$.

??? question "8. Is $\mathbb{R}_K$ (the K-topology of 9.2) metrisable? Is the torus $S^1 \times S^1$?"
    $\mathbb{R}_K$ is not regular (shown in 9.2), and every metric space is normal, hence regular, so $\mathbb{R}_K$ has
    no metric. The torus is a subspace of $\mathbb{R}^2 \times \mathbb{R}^2 = \mathbb{R}^4$, so the Euclidean distance of
    $\mathbb{R}^4$ restricted to it is a metric giving its topology. (Alternatively: it is compact Hausdorff and second
    countable, so Corollary 9.10 applies.)

??? question "9. Prove that in a metric space every closed set $A$ is a countable intersection of open sets."
    If $A$ is empty, it is the intersection of the single open set $\varnothing$. Otherwise let
    $U_n = \{x : d(x, A) < 1/n\}$, open because $x \mapsto d(x, A)$ is continuous. Each $U_n$ contains $A$. A point in
    every $U_n$ has $d(x, A) = 0$, so it lies in $A$ because $A$ is closed. So $A = \bigcap_n U_n$. (Such sets are called
    $G_\delta$ sets. In the Sorgenfrey plane this property fails for some closed sets, which is another way to see it is
    not metrisable.)

??? question "10. Show that the Sorgenfrey line is not homeomorphic to $\mathbb{R}$, using connectedness."
    In $\mathbb{R}_\ell$ the set $[0, 1)$ is open, and it is also closed, since its complement
    $(-\infty, 0) \cup [1, \infty) = \bigcup_{n \ge 1} [-n, 0) \cup \bigcup_{n \ge 1} [1, n)$ is a union of basic open
    sets. So $\mathbb{R}_\ell$ splits into the two nonempty open sets $[0, 1)$ and its complement: it is disconnected.
    $\mathbb{R}$ is connected ([Chapter 7](07-Connectedness.md)). Connectedness is a topological invariant, so they are
    not homeomorphic.

??? question "11. A continuous bijection $f$ from $[0, 1]$ onto a subset $C$ of $\mathbb{R}^3$ is given. Is $C$ homeomorphic to $[0,1]$? What if the domain is $[0, 1)$?"
    For $[0, 1]$: yes. The domain is compact, the target $C$ is a subspace of a metric space, hence Hausdorff, so by
    Theorem 9.5 the bijection is a homeomorphism. For $[0, 1)$ the theorem does not apply, and the answer can be no:
    $t \mapsto (\cos 2\pi t, \sin 2\pi t, 0)$ is a continuous bijection from $[0, 1)$ onto a circle, and a circle is
    not homeomorphic to $[0, 1)$ (removing an interior point disconnects $[0,1)$ but no point disconnects a circle).

??? question "12. Let $X$ be compact Hausdorff and $\sim$ an equivalence relation whose quotient map $q : X \to X/\!\sim$ is closed (sends closed sets to closed sets). Show that $X/\!\sim$ is Hausdorff."
    First, points of the quotient are closed: an equivalence class is $q^{-1}(q(x))$, and $q(\{x\})$ is the image of a
    closed set, so it is closed. Now take two different classes, i.e. two different points $u, v$ of the quotient. The
    sets $A = q^{-1}(u)$, $B = q^{-1}(v)$ are disjoint closed subsets of the compact Hausdorff, hence normal, space $X$
    (Theorem 9.9). Choose disjoint open $U \supseteq A$, $V \supseteq B$. Let $U' = X \setminus q^{-1}(q(X \setminus U))$,
    the union of all classes lying entirely inside $U$. Since $q$ is closed, $q(X \setminus U)$ is closed, so $U'$ is an
    open saturated set containing $A$; likewise $V'$ for $B$. Then $q(U')$ and $q(V')$ are disjoint open sets of the
    quotient containing $u$ and $v$. This is how one shows that the torus, the Klein bottle and $\mathbb{RP}^2$, built by
    gluing a square in [Chapter 6](06-Building-New-Spaces.md), are Hausdorff.

## What you learned

- A space is **Hausdorff** when different points have disjoint neighbourhoods. Then limits are unique, compact sets
  are closed, and a continuous bijection from a compact space onto it is a homeomorphism.
- The separation ladder runs T0, T1, T2, T3 (regular), T4 (normal); every rung is strictly stronger, as the cofinite
  space, $\mathbb{R}_K$ and the Sorgenfrey plane show.
- Metric spaces and compact Hausdorff spaces are normal.
- **Urysohn's lemma**: in a normal space, disjoint closed sets have a continuous function $0$ on one and $1$ on the
  other, built from nested open sets indexed by dyadic rationals. **Tietze** extends any continuous function from a
  closed set.
- **Urysohn's metrisation theorem**: regular and second countable implies metrisable, by embedding in the Hilbert cube.
- The line with two origins (not Hausdorff), the Sorgenfrey line (normal, not metrisable) and the long line (not second
  countable) show why the definition of a manifold has its small print.

**Next:** [Chapter 10](10-Classification-of-Surfaces.md), every closed surface is a sphere with handles or cross-caps,
and the Euler characteristic tells which.

## Further reading

- J. R. Munkres, *Topology*, 2nd edition, 2000. Chapter 4 (§§30–36) covers separation, Urysohn's lemma, metrisation
  and Tietze; §40 proves Nagata–Smirnov.
- L. A. Steen and J. A. Seebach, *Counterexamples in Topology*, 2nd edition, 1978. A catalogue of 143 spaces, with the
  separation properties of each.
- S. Willard, *General Topology*, 1970.
- R. Engelking, *General Topology*, revised edition, 1989. The encyclopaedic reference, with historical notes.
- F. Hausdorff, *Grundzüge der Mengenlehre*, 1914.
- P. Urysohn, "Zum Metrisationsproblem", *Mathematische Annalen* 94, 1925.
- R. H. Sorgenfrey, "On the topological product of paracompact spaces", *Bulletin of the AMS* 53, 1947.
- On this site: [Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md) for metric spaces;
  [Logic, Chapter 8](../logic/08-Axiomatic-Set-Theory.md) for ordinals and the axiom of choice; the U of T guides
  [MAT257Y1 Unit 1: The Topology of R^n](../../uoft/MAT257Y1/unit01.md) and
  [MAT257Y1 Unit 2: Compactness](../../uoft/MAT257Y1/unit02.md); the gentle
  [Countable sets](../../topics/infinity/level-6/01-countable-sets.md) lesson for the countability arguments.
