# 4. Topological spaces

*Part I used pictures: rubber sheets, drawings, glued squares. To prove theorems about shapes that cannot be drawn,
such as spaces of polynomials, of functions or of all positions of a machine, we need a definition of "shape" that
does not depend on a picture. The surprise is how little is needed. A shape is a set together with a decision about
which of its subsets count as open, subject to three rules. This chapter starts from distance, where open sets are
familiar, extracts the three rules, and builds the basic vocabulary of point-set topology: closed sets, closure,
interior and boundary, bases, and subspaces.*

!!! abstract "In this chapter"

    **You will learn:**

    - how a metric (a distance function) defines open sets, and why different metrics can give the same open sets
    - the three axioms of a topology, with the main examples: discrete, indiscrete, cofinite, Sierpiński, and the
      idea of the Zariski topology
    - closed sets, closure, interior and boundary, and how to compute them
    - why sequences are not enough to describe closure in general
    - bases and subbases: how to specify a topology economically, and how to compare two topologies
    - the subspace topology, which gives every subset of a space a topology of its own

    **You need:** [Chapter 1](01-What-Topology-Is.md) (the idea of homeomorphism), sets, unions, intersections and
    complements (the Logic book's [Sets](../logic/05-Sets.md)), and the Calculus book's
    [Metric spaces and the topology of the real line](../calculus/20-Metric-Spaces-and-Topology-of-R.md), which this
    chapter builds on rather than repeats. Gentler versions on the Topics shelf:
    [Sets](../../topics/logic/level-5/01-sets.md) and [Union and intersection](../../topics/logic/level-5/02-union-intersection.md).

    **Levels:** 4.1 and 4.2 are intermediate; 4.3 and 4.4 are intermediate with advanced parts (sequences and closure,
    comparing topologies); 4.5 is intermediate. Every theorem has a full proof.

## 4.1 From metric spaces to open sets

### Distance

A **metric** on a set $X$ is a function $d$ that gives a number $d(x, y) \ge 0$ for each pair of points, such that for
all $x, y, z$ in $X$:

1. $d(x, y) = 0$ exactly when $x = y$;
2. $d(x, y) = d(y, x)$ (symmetry);
3. $d(x, z) \le d(x, y) + d(y, z)$ (the **triangle inequality**: a detour is never shorter).

A set with a metric is a **metric space**. The main examples:

- $\mathbb{R}$ with $d(x, y) = |x - y|$.
- $\mathbb{R}^n$ with the **Euclidean metric** $d_2(x, y) = \sqrt{(x_1 - y_1)^2 + \cdots + (x_n - y_n)^2}$.
- $\mathbb{R}^n$ with the **taxicab metric** $d_1(x, y) = |x_1 - y_1| + \cdots + |x_n - y_n|$ (distance along a grid
  of streets).
- $\mathbb{R}^n$ with the **maximum metric** $d_\infty(x, y) = \max_i |x_i - y_i|$.
- Any set with the **discrete metric**: $d(x, y) = 1$ if $x \ne y$ and $0$ if $x = y$.

The Calculus book's [Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md) checks the axioms for these and
studies metric spaces in detail. Here we need only the definitions that follow.

### Open balls and open sets

The **open ball** of radius $r > 0$ around a point $x$ is

$$
B(x, r) = \{ y \in X : d(x, y) < r \},
$$

all points closer than $r$ to $x$. In $\mathbb{R}$ it is the open interval $(x - r, x + r)$; in $\mathbb{R}^2$ with
$d_2$ it is the inside of a disc, with $d_\infty$ the inside of a square, with $d_1$ the inside of a diamond (a square
turned $45^\circ$).

A subset $U \subseteq X$ is **open** if every point of $U$ has some ball around it that stays inside $U$: for each
$x \in U$ there is an $r > 0$ with $B(x, r) \subseteq U$. Informally, an open set is one where every point has some
room to move without leaving.

**Examples in $\mathbb{R}$.** $(0, 1)$ is open: for $x$ in it, take $r = \min(x, 1 - x)$. $[0, 1)$ is not open: no
ball around $0$ stays inside it, since every ball around $0$ contains negative numbers. $\mathbb{R}$ itself is open.
The empty set $\varnothing$ is open, because there is no point in it for which the condition could fail.

**Lemma.** Every open ball is an open set.

*Proof.* Let $y \in B(x, r)$, so $d(x, y) < r$. Put $s = r - d(x, y) > 0$. If $z \in B(y, s)$ then by the triangle
inequality $d(x, z) \le d(x, y) + d(y, z) < d(x, y) + s = r$, so $z \in B(x, r)$. Thus $B(y, s) \subseteq B(x, r)$.
$\square$

### The three properties

**Theorem.** In any metric space $X$:

1. $\varnothing$ and $X$ are open;
2. any union of open sets (even infinitely many) is open;
3. the intersection of finitely many open sets is open.

*Proof.* (1) was observed above. (2) If $x$ is in the union of a family of open sets $U_i$, it is in one of them,
say $U_j$, and some ball $B(x, r) \subseteq U_j$, which is inside the union. (3) It is enough to do two sets; then
induction handles any finite number. If $x \in U \cap V$ with $U$, $V$ open, there are balls $B(x, r) \subseteq U$
and $B(x, s) \subseteq V$. The smaller ball $B(x, \min(r, s))$ lies in both. $\square$

Why only *finite* intersections? Because the minimum of infinitely many positive radii can be 0. In $\mathbb{R}$, each
interval $(-\tfrac1n, \tfrac1n)$ is open, but

$$
\bigcap_{n = 1}^{\infty} \left( -\tfrac1n, \tfrac1n \right) = \{0\},
$$

and $\{0\}$ is not open. A point is in the intersection only if it is within $\tfrac1n$ of 0 for every $n$, and
the only such number is 0.

### Different metrics, same open sets

On $\mathbb{R}^2$ the Euclidean, taxicab and maximum metrics give different balls (discs, diamonds, squares). Do
they give different open sets? No.

**Theorem.** On $\mathbb{R}^n$, the metrics $d_1$, $d_2$ and $d_\infty$ have exactly the same open sets.

*Proof.* For any $x, y$ in $\mathbb{R}^n$, write $a_i = |x_i - y_i|$. Then

$$
\max_i a_i \le \sqrt{a_1^2 + \cdots + a_n^2} \le a_1 + \cdots + a_n \le n \max_i a_i .
$$

The first inequality holds because the largest $a_i^2$ is one of the terms under the root. The second holds because
$(a_1 + \cdots + a_n)^2$ expands to $a_1^2 + \cdots + a_n^2$ plus non-negative cross terms. The third holds because
each of the $n$ terms is at most the largest. So $d_\infty \le d_2 \le d_1 \le n\, d_\infty$.

Now suppose $U$ is open for $d_1$ and $x \in U$: some $d_1$-ball $B_1(x, r) \subseteq U$. If $d_\infty(x, y) < r/n$
then $d_1(x, y) \le n\, d_\infty(x, y) < r$, so the $d_\infty$-ball of radius $r/n$ sits inside $B_1(x, r)$, inside
$U$. So $U$ is open for $d_\infty$. Conversely if $U$ is open for $d_\infty$ with $B_\infty(x, r) \subseteq U$, then
$d_1(x, y) < r$ implies $d_\infty(x, y) \le d_1(x, y) < r$, so $B_1(x, r) \subseteq B_\infty(x, r) \subseteq U$. So
$d_1$ and $d_\infty$ have the same open sets, and $d_2$, squeezed between them, has the same open sets too (the same
two arguments work with $d_2$ in place of either). $\square$

**Check:** for $x = (0,0)$, $y = (3,4)$: $d_\infty = 4$, $d_2 = 5$, $d_1 = 7$, and $4 \le 5 \le 7 \le 2 \times 4 = 8$.

The lesson: open sets forget a great deal. They do not see the shape of balls, or even their size: the metric
$d'(x, y) = \min(d(x, y), 1)$ has the same open sets as $d$ (balls of radius less than 1 are unchanged, and openness
only needs small balls), yet in $d'$ every distance is at most 1. "Being bounded" is not a property of the open sets.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 340" role="img" aria-labelledby="sk-m-balls-t"><title id="sk-m-balls-t">The unit balls of three distances in the plane drawn on one pair of axes: a diamond inside a circle inside a square</title><defs><filter id="sk-m-balls-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-balls-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-balls-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-balls-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-balls-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="340" filter="url(#sk-m-balls-paper)"/><g filter="url(#sk-m-balls-pen)"><text x="30" y="44" text-anchor="start" class="h">Three distances, three shapes of ball</text><path class="p" d="M30 190 L310 190 M170 50 L170 320"/><path class="p gold" style="fill-opacity:.35" d="M60 80 L280 80 L280 300 L60 300Z"/><circle cx="170" cy="190" r="110" class="p blue" style="fill:none"/><path class="p rust" style="fill-opacity:.6" d="M170 80 L280 190 L170 300 L60 190Z"/><text x="360" y="100" text-anchor="start" class="s">diamond: |x| + |y| < 1</text><text x="360" y="124" text-anchor="start" class="s">circle: √(x² + y²) < 1</text><text x="360" y="148" text-anchor="start" class="s">square: max(|x|, |y|) < 1</text><text x="360" y="196" text-anchor="start" class="s">Each shape fits inside the next,</text><text x="360" y="218" text-anchor="start" class="s">and a shrunken copy of each fits</text><text x="360" y="240" text-anchor="start" class="s">inside the others, so all three</text><text x="360" y="262" text-anchor="start" class="s">give the same open sets.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

### Why open sets are enough

Here is the reason to keep only the open sets. In the Calculus book a function $f$ between metric spaces is
continuous if, for every $x$ and every $\varepsilon > 0$, there is $\delta > 0$ with $d(x, x') < \delta \Rightarrow
d(f(x), f(x')) < \varepsilon$. In [Chapter 5](05-Continuity-and-Homeomorphism.md) we prove that this is equivalent to:

> for every open set $V$ in the target, the set $f^{-1}(V)$ of points sent into $V$ is open.

That condition mentions no distances at all. Limits, continuity, connectedness and compactness can all be expressed
through open sets. So if we know which sets are open we can do topology, and we may forget the metric. That is the
step taken next.

## 4.2 The axioms of a topology

**Definition.** A **topology** on a set $X$ is a collection $\tau$ of subsets of $X$, called the **open sets**, such
that

1. $\varnothing \in \tau$ and $X \in \tau$;
2. the union of any collection of sets in $\tau$ is in $\tau$;
3. the intersection of any two (hence any finitely many) sets in $\tau$ is in $\tau$.

A **topological space** is a pair $(X, \tau)$; we write just $X$ when $\tau$ is clear. An open set containing a
point $x$ is called an **open neighbourhood** of $x$.

These are exactly the three properties proved for metric spaces. A metric space is therefore a topological space,
with the **metric topology**. A topological space whose topology comes from some metric is called **metrisable**. We
will see that many interesting spaces are not.

### Examples

**The discrete topology.** $\tau$ = all subsets of $X$. Every set is open. This is the metric topology of the discrete
metric: the ball $B(x, \tfrac12)$ is $\{x\}$, so every single point is open, and every set is a union of single
points.

**The indiscrete (trivial) topology.** $\tau = \{\varnothing, X\}$. The axioms hold trivially. Here no set except $X$
is open, so the space cannot tell its points apart: every point is "near" every other.

**The Sierpiński space.** $X = \{0, 1\}$ with $\tau = \{\varnothing, \{1\}, X\}$. Check: unions and intersections of
these three sets are among them. It is the smallest space that is neither discrete nor indiscrete. One way to read
it: $\{1\}$ is "the event happened", which can be confirmed by an observation, while $\{0\}$, "the event has not
happened", cannot be confirmed by any finite observation. Spaces like this are used in the theory of computation for
exactly that reason.

**The cofinite topology.** Let $X$ be any set. Declare $U$ open if $U = \varnothing$ or the complement $X \setminus U$
is finite.

*Check of the axioms.* (1) $\varnothing$ is open by decree; $X \setminus X = \varnothing$ is finite, so $X$ is open.
(2) Let $U_i$ be open sets, not all empty (if all are empty, the union is empty, which is open). Pick a non-empty
$U_j$. The complement of the union is contained in $X \setminus U_j$, which is finite, so it is finite. (3) If $U$
and $V$ are non-empty open sets, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is a union of two
finite sets, finite. If one of them is empty the intersection is empty, which is open. $\square$

On a finite set the cofinite topology is discrete (every set has finite complement). On an infinite set such as
$\mathbb{R}$ it is very different from the usual topology: every two non-empty open sets intersect (each misses only
finitely many points, so together they miss only finitely many, and $\mathbb{R}$ is infinite). In the usual topology
$(0, 1)$ and $(2, 3)$ are disjoint open sets; in the cofinite topology no such pair exists.

**The Zariski topology (the idea).** Let $X = \mathbb{R}^n$ (or $\mathbb{C}^n$). For a set $S$ of polynomials in
$n$ variables, let $Z(S)$ be the set of points where every polynomial in $S$ is zero. The **Zariski topology**
declares the sets $Z(S)$ to be the *closed* sets (complements of open sets; see 4.3), so the open sets are their
complements. In one variable, a non-zero polynomial has finitely many roots, so the closed sets are the finite sets
and the whole line ($Z(\{0\}) = \mathbb{R}$): the Zariski topology on $\mathbb{R}$ is the cofinite topology. In two
variables the closed sets include whole curves, such as the circle $Z(\{x^2 + y^2 - 1\})$ and the line
$Z(\{y - 2x\})$, and finite unions of such curves and points. The axioms hold because $Z(S) \cup Z(T) = Z(\{fg : f
\in S, g \in T\})$ (a point kills every product $fg$ exactly when it kills all of $S$ or all of $T$) and the
intersection of any family $Z(S_i)$ is $Z(\bigcup S_i)$. This topology was introduced by Oscar Zariski in the 1940s
to bring geometric ideas to algebraic geometry, and in a much generalised form it is the basic topology of modern
algebraic geometry. Its open sets are huge: any two non-empty ones intersect, just as in the cofinite case.

**Check (product rule):** in $\mathbb{R}^2$, $Z(\{x\}) \cup Z(\{y\})$ is the union of the two axes, and
$Z(\{xy\})$ is the set where $xy = 0$, the same union.

### Comparing topologies

Two topologies $\tau_1$ and $\tau_2$ on the same set can be compared when one contains the other. If
$\tau_1 \subseteq \tau_2$, we say $\tau_2$ is **finer** (it has more open sets) and $\tau_1$ is **coarser**. On any
set the indiscrete topology is the coarsest and the discrete the finest. On $\mathbb{R}$ the cofinite topology is
coarser than the usual one (every set with finite complement is a union of open intervals, but $(0, 1)$ is not
cofinite-open). Two topologies need not be comparable at all.

A finer topology has more open sets, so it separates points better, but fewer functions *into* it are continuous and
fewer sequences converge in it (see 4.3).

### How many topologies on a small set?

On $\{a, b\}$ there are exactly 4 topologies: $\{\varnothing, X\}$, $\{\varnothing, \{a\}, X\}$,
$\{\varnothing, \{b\}, X\}$, and the discrete topology. The two in the middle are both Sierpiński spaces, with the
roles of the points swapped. On 3 points there are 29 topologies and on 4 points 355. No simple formula for the
number on $n$ points is known.

### Try it in Python

A brute-force count: try every family of subsets containing $\varnothing$ and $X$, and keep those closed under
union and intersection (for a finite family, closure under pairs is enough).

```python
from itertools import combinations

def count_topologies(n):
    X = frozenset(range(n))
    subsets = [frozenset(c) for r in range(n + 1) for c in combinations(range(n), r)]
    middle = [s for s in subsets if s and s != X]       # sets other than empty and X
    count = 0
    for mask in range(1 << len(middle)):
        fam = {frozenset(), X} | {middle[i] for i in range(len(middle)) if mask >> i & 1}
        if all(a | b in fam and a & b in fam for a in fam for b in fam):
            count += 1
    return count

print([count_topologies(n) for n in range(1, 5)])    # [1, 4, 29, 355]
```

### Not every topology comes from a metric

**Theorem.** In a metric space, any two distinct points $x \ne y$ have disjoint open neighbourhoods.

*Proof.* Let $r = d(x, y) / 2 > 0$. If some $z$ were in both $B(x, r)$ and $B(y, r)$, then $d(x, y) \le d(x, z) +
d(z, y) < r + r = d(x, y)$, a contradiction. $\square$

A space with this property is called **Hausdorff** ([Chapter 9](09-Separation-and-Metrisation.md)). So:

- the indiscrete topology on a set with at least two points is not metrisable (the only neighbourhood of either point
  is $X$);
- the Sierpiński space is not metrisable (the only neighbourhood of $0$ is $X$, which contains $1$);
- the cofinite topology on an infinite set is not metrisable (any two non-empty open sets meet).

## 4.3 Closed sets, closure, interior, boundary

### Closed sets

**Definition.** A subset $C$ of a topological space $X$ is **closed** if its complement $X \setminus C$ is open.

By De Morgan's laws (the complement of a union is the intersection of the complements, and vice versa), the axioms
for open sets turn into:

1. $\varnothing$ and $X$ are closed;
2. any intersection of closed sets is closed;
3. any finite union of closed sets is closed.

Many people's first instinct is that "closed" is the opposite of "open". It is not. In $\mathbb{R}$:

- $[0, 1]$ is closed (its complement $(-\infty, 0) \cup (1, \infty)$ is open) and not open;
- $(0, 1)$ is open and not closed;
- $[0, 1)$ is neither;
- $\mathbb{R}$ and $\varnothing$ are both. A set that is both open and closed is called **clopen**. In
  [Chapter 7](07-Connectedness.md) we will see that $\mathbb{R}$ has no other clopen sets, and that this is exactly
  what it means for $\mathbb{R}$ to be connected.

In the discrete topology every set is clopen. In the cofinite topology the closed sets are the finite sets and $X$.
In the Zariski topology the closed sets are the zero sets of polynomials.

### Interior and closure

Given any set $A$ in a space $X$, there is a largest open set inside it and a smallest closed set containing it.

**Definition.** The **interior** of $A$, written $\operatorname{int} A$, is the union of all open sets contained in
$A$. The **closure** of $A$, written $\overline{A}$, is the intersection of all closed sets containing $A$.

By axiom 2 the interior is open, and by the closed-set version of axiom 2 the closure is closed. So
$\operatorname{int} A$ is the largest open subset of $A$, and $\overline{A}$ the smallest closed superset. In
particular $A$ is open exactly when $A = \operatorname{int} A$, and closed exactly when $A = \overline{A}$.

The definitions are clean but not easy to compute with. The working tool is this.

**Theorem.** Let $A \subseteq X$ and $x \in X$.

1. $x \in \operatorname{int} A$ if and only if some open set $U$ satisfies $x \in U \subseteq A$.
2. $x \in \overline{A}$ if and only if every open set containing $x$ meets $A$ (has a point in common with $A$).

*Proof.* (1) If $x \in \operatorname{int} A$, take $U = \operatorname{int} A$. Conversely, an open $U$ with
$x \in U \subseteq A$ is one of the sets in the union defining $\operatorname{int} A$.

(2) We prove the equivalent statement with both sides negated: $x \notin \overline{A}$ if and only if some open set
containing $x$ misses $A$. If $x \notin \overline{A}$, then $U = X \setminus \overline{A}$ is open, contains $x$,
and misses $A$ (since $A \subseteq \overline{A}$). Conversely, if $U$ is open, contains $x$ and misses $A$, then
$X \setminus U$ is closed and contains $A$, so $\overline{A} \subseteq X \setminus U$, and $x \notin \overline{A}$.
$\square$

A point $x$ is a **limit point** (or accumulation point) of $A$ if every open set containing $x$ meets $A$ in some
point *other than* $x$. Let $A'$ be the set of limit points. Then $\overline{A} = A \cup A'$: a point of the closure
either is in $A$, or is not in $A$ and then every neighbourhood meets $A$ in a point other than itself.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 338" role="img" aria-labelledby="sk-m-closure-t"><title id="sk-m-closure-t">A blob-shaped set with part of its edge solid and part dashed; a small disc round an inside point stays inside, a disc round a point on the edge pokes out</title><defs><filter id="sk-m-closure-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-closure-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-closure-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-closure-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-closure-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="338" filter="url(#sk-m-closure-paper)"/><g filter="url(#sk-m-closure-pen)"><text x="30" y="44" text-anchor="start" class="h">Inside, edge, and everything you can reach</text><path class="p gold" style="stroke:none" d="M90 150 C80 90 200 70 250 100 C300 130 330 90 360 140 C390 200 300 260 220 250 C150 245 100 210 90 150Z"/><path class="p red" style="fill:none;stroke-width:3" d="M90 150 C80 90 200 70 250 100"/><path class="p dash" style="fill:none" d="M250 100 C300 130 330 90 360 140 C390 200 300 260 220 250 C150 245 100 210 90 150"/><circle cx="215" cy="170" r="22" class="p room" style="fill-opacity:.7"/><circle cx="215" cy="170" r="3" class="p f"/><text x="215" y="208" text-anchor="middle" class="s">interior point</text><circle cx="360" cy="140" r="18" class="p room" style="fill:none"/><circle cx="360" cy="140" r="3" class="p f"/><text x="384" y="130" text-anchor="start" class="s">boundary point</text><text x="430" y="180" text-anchor="start" class="s">Solid red edge: in the set.</text><text x="430" y="202" text-anchor="start" class="s">Dashed edge: not in it.</text><text x="30" y="300" text-anchor="start" class="s">An interior point has a small ball inside the set. Every ball round a boundary point meets the</text><text x="30" y="320" text-anchor="start" class="s">set and its outside. Closure adds the whole boundary; interior removes it.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

### Boundary

**Definition.** The **boundary** of $A$ is $\partial A = \overline{A} \setminus \operatorname{int} A$: the points of
the closure that are not interior.

By the theorem, $x \in \partial A$ exactly when every open set containing $x$ meets both $A$ and its complement. So
$\partial A = \overline{A} \cap \overline{X \setminus A}$, and in particular $A$ and its complement have the same
boundary.

**Worked example.** In $\mathbb{R}$ with the usual topology, let $A = (0, 1] \cup \{2\}$.

Step 1 (interior). A point $x$ with $0 < x < 1$ has the open interval $(0, 1)$ around it inside $A$, so it is
interior. The point 1 is not: every interval around 1 contains numbers slightly bigger than 1, not in $A$. The point
2 is not: every interval around 2 contains numbers near 2 not in $A$. So $\operatorname{int} A = (0, 1)$.

Step 2 (closure). Points of $A$ are in the closure. The point 0 is too: every interval around 0 contains small
positive numbers, in $A$. Any $x < 0$, or $1 < x < 2$, or $x > 2$ has an interval around it missing $A$ (for
$1 < x < 2$, take the interval between 1 and 2 around $x$). So $\overline{A} = [0, 1] \cup \{2\}$.

Step 3 (boundary). $\partial A = \overline{A} \setminus \operatorname{int} A = \{0, 1, 2\}$.

**Check:** each of $0$, $1$, $2$ has, in every interval around it, points of $A$ and points not in $A$.

**Worked example.** The rationals $\mathbb{Q}$ in $\mathbb{R}$. Every open interval contains rational and irrational
numbers. So no point is interior to $\mathbb{Q}$ (an interval around it would contain irrationals), and every point
is in its closure. $\operatorname{int} \mathbb{Q} = \varnothing$, $\overline{\mathbb{Q}} = \mathbb{R}$, and
$\partial \mathbb{Q} = \mathbb{R}$. The boundary of a set can be everything.

A set whose closure is the whole space is called **dense**. $\mathbb{Q}$ is dense in $\mathbb{R}$, and it is
countable, which makes $\mathbb{R}$ a **separable** space.

**Worked example.** The same set in a different topology. In the cofinite topology on $\mathbb{R}$, the closed sets
are $\mathbb{R}$ and the finite sets. The closure of $(0, 1)$ is the smallest closed set containing it; it is
infinite, so the only closed set containing it is $\mathbb{R}$. So $\overline{(0,1)} = \mathbb{R}$. Its interior is
empty (an open non-empty set has finite complement, so it is not contained in $(0, 1)$). Its boundary is
$\mathbb{R}$. The same subset has a different closure in a different topology: closure is a property of the set *and*
the topology.

### Sequences, and a warning

In a metric space, a point is in the closure of $A$ exactly when it is the limit of a sequence of points of $A$. In a
general space convergence still makes sense: a sequence $x_1, x_2, \ldots$ **converges** to $x$ if every open set
containing $x$ contains all the $x_n$ from some point on. But sequences behave badly in two ways.

**Limits need not be unique.** In the cofinite topology on $\mathbb{R}$, the sequence $x_n = n$ converges to every
real number. Take any $x$ and any open $U$ containing $x$. Its complement is finite, so it contains only finitely
many of the numbers $1, 2, 3, \ldots$; from some $n$ on, every $x_n$ lies in $U$. In a Hausdorff space (such as a
metric space) this cannot happen: two disjoint neighbourhoods of two limits cannot both contain the tail of the
sequence.

**Sequences may not detect closure.** Consider the **cocountable topology** on $\mathbb{R}$: $U$ is open if
$U = \varnothing$ or $\mathbb{R} \setminus U$ is countable (the axioms are checked just as for the cofinite topology).
Let $A = \mathbb{R} \setminus \{0\}$.

- $0 \in \overline{A}$: every non-empty open set is uncountable, so it cannot be contained in the single point
  $\{0\}$, and must meet $A$.
- But no sequence in $A$ converges to 0. Given a sequence $x_n$ in $A$, the set $U = \mathbb{R} \setminus \{x_1, x_2,
  \ldots\}$ has countable complement, so it is open; it contains 0 (since no $x_n$ is 0) and contains none of the
  $x_n$. So the sequence never enters this neighbourhood of 0.

So in general topology, closure is defined by neighbourhoods, not by sequences. Sequences suffice in metric spaces and
more generally in **first countable** spaces (every point has a countable family of neighbourhoods such that every
neighbourhood contains one of them); for the rest there are generalisations called nets and filters.

### Kuratowski's 14

Closure and complement can be applied to a set repeatedly: $A$, $\overline{A}$, $X \setminus \overline{A}$,
$\overline{X \setminus \overline{A}}$, and so on. Kazimierz Kuratowski proved in 1922 that, starting from any subset
of any space, at most 14 different sets can arise this way, and that 14 is achieved: a standard example in
$\mathbb{R}$ is $(0, 1) \cup (1, 2) \cup \{3\} \cup (\mathbb{Q} \cap [4, 5])$. It is a good puzzle to compute them all.
The key fact behind the bound is that $\overline{\operatorname{int}\, \overline{\operatorname{int} A}} =
\overline{\operatorname{int} A}$ for every set $A$.

## 4.4 Bases

Describing a topology by listing every open set is hopeless for an infinite space. In $\mathbb{R}$ we instead said:
a set is open if it is a union of open intervals. The open intervals form a *basis*.

**Definition.** A **basis** for a topology on $X$ is a collection $\mathcal{B}$ of subsets of $X$ (the **basis
elements**) such that

- (B1) every point of $X$ lies in at least one basis element;
- (B2) if $x$ lies in two basis elements $B_1$ and $B_2$, there is a basis element $B_3$ with
  $x \in B_3 \subseteq B_1 \cap B_2$.

The **topology generated by** $\mathcal{B}$ declares $U$ open if for every $x \in U$ there is a $B \in \mathcal{B}$
with $x \in B \subseteq U$.

**Theorem.** If $\mathcal{B}$ satisfies (B1) and (B2), the topology generated by $\mathcal{B}$ is a topology, and its
open sets are exactly the unions of basis elements.

*Proof.* First the axioms. $\varnothing$ is open (no points to check). $X$ is open by (B1). A union of open sets is
open: a point of the union lies in one of them, $U_j$, so a basis element $B$ with $x \in B \subseteq U_j$ exists,
and $B$ lies in the union. For intersections, let $U$, $V$ be open and $x \in U \cap V$. There are basis elements
$x \in B_1 \subseteq U$ and $x \in B_2 \subseteq V$; by (B2) there is $B_3$ with $x \in B_3 \subseteq B_1 \cap B_2
\subseteq U \cap V$. So $U \cap V$ is open.

Now the description. Each basis element is open (for $x \in B$, take $B$ itself), so every union of basis elements
is open. Conversely if $U$ is open, for each $x \in U$ choose $B_x$ with $x \in B_x \subseteq U$; then $U$ is the
union of all the $B_x$ (each $B_x$ is inside $U$, and each point $x$ of $U$ is in its $B_x$). $\square$

**Examples.**

- The open intervals $(a, b)$ form a basis for the usual topology on $\mathbb{R}$. (B2) holds because the
  intersection of two open intervals is an open interval or empty.
- In any metric space, the open balls form a basis for the metric topology. (B2) holds because, for $x$ in
  $B(p, r) \cap B(q, s)$, the lemma of 4.1 gives small balls around $x$ inside each, and the smaller of the two lies
  in both.
- The open intervals with rational endpoints form a basis for $\mathbb{R}$ as well. This basis is **countable**. A
  space with a countable basis is called **second countable**, an important condition in
  [Chapter 9](09-Separation-and-Metrisation.md) and [Chapter 11](11-Manifolds.md).
- The single points $\{x\}$ form a basis for the discrete topology.

### Comparing topologies through bases

**Theorem.** Let $\mathcal{B}$ and $\mathcal{B}'$ be bases for topologies $\tau$ and $\tau'$ on $X$. Then $\tau'$ is
finer than $\tau$ ($\tau \subseteq \tau'$) if and only if: for every $B \in \mathcal{B}$ and every $x \in B$, there
is $B' \in \mathcal{B}'$ with $x \in B' \subseteq B$.

*Proof.* If $\tau \subseteq \tau'$, each $B \in \mathcal{B}$ is in $\tau$, hence open in $\tau'$, so for $x \in B$
there is $B' \in \mathcal{B}'$ with $x \in B' \subseteq B$ (by the definition of the topology generated by
$\mathcal{B}'$). Conversely, assume the condition, and let $U \in \tau$, $x \in U$. There is $B \in \mathcal{B}$ with
$x \in B \subseteq U$, and then $B' \in \mathcal{B}'$ with $x \in B' \subseteq B \subseteq U$. So $U$ is open in
$\tau'$. $\square$

The proof in 4.1 that $d_1$, $d_2$, $d_\infty$ give the same topology is this theorem used twice: every diamond
around $x$ contains a square around $x$, and every square around $x$ contains a diamond around $x$.

### The lower limit topology

Here is a topology on $\mathbb{R}$ strictly finer than the usual one. Let $\mathcal{B}_\ell$ be the collection of
half-open intervals $[a, b)$ with $a < b$. (B1) holds, and (B2) holds because $[a, b) \cap [c, d) =
[\max(a, c), \min(b, d))$ is either empty or another such interval. The topology it generates is the **lower limit
topology**; $\mathbb{R}$ with it is called the **Sorgenfrey line** $\mathbb{R}_\ell$, after Robert Sorgenfrey, who
used it in 1947 to settle a question about products of spaces (see [Chapter 9](09-Separation-and-Metrisation.md)).

**Theorem.** The lower limit topology is strictly finer than the usual topology on $\mathbb{R}$.

*Proof.* Finer: given an open interval $(a, b)$ and $x$ in it, the half-open interval $[x, b)$ contains $x$ and lies
in $(a, b)$. By the comparison theorem, every usual open set is open in $\mathbb{R}_\ell$. Strictly: $[0, 1)$ is open
in $\mathbb{R}_\ell$ but not in the usual topology, because no open interval around 0 is contained in $[0, 1)$. By
the comparison theorem in the other direction, the usual topology is not finer. $\square$

In $\mathbb{R}_\ell$ a sequence converges to $x$ only if it approaches from the right (or equals $x$ eventually):
the neighbourhood $[x, x + \varepsilon)$ excludes every point to the left of $x$. The Sorgenfrey line is a standard
source of counterexamples, and we will meet it again.

### Subbases

Sometimes it is easier to give a collection that is not a basis but generates one. A **subbasis** is any collection
$\mathcal{S}$ of subsets whose union is $X$. The finite intersections of members of $\mathcal{S}$ form a basis (they
satisfy (B1), and (B2) because an intersection of two finite intersections is a finite intersection), and the
topology it generates is the **topology generated by** $\mathcal{S}$: the coarsest topology in which every set of
$\mathcal{S}$ is open.

**Example.** The open rays $(-\infty, b)$ and $(a, \infty)$ form a subbasis for the usual topology on $\mathbb{R}$:
$(a, b) = (a, \infty) \cap (-\infty, b)$. The same recipe applied to any ordered set gives its **order topology**.
Subbases are how the product topology of [Chapter 6](06-Building-New-Spaces.md) will be defined.

## 4.5 Subspace topology

A circle sits inside the plane; an interval sits inside the line. A subset of a space should inherit a topology, so
that we can call a subset "connected" or "compact" or ask whether two subsets are homeomorphic. The natural choice:
the open sets of the subset are the traces of open sets of the big space.

**Definition.** Let $(X, \tau)$ be a topological space and $Y \subseteq X$. The **subspace topology** on $Y$ is

$$
\tau_Y = \{ U \cap Y : U \in \tau \}.
$$

A set open in $\tau_Y$ is called **open in $Y$** or **relatively open**.

**Theorem.** $\tau_Y$ is a topology on $Y$.

*Proof.* $\varnothing = \varnothing \cap Y$ and $Y = X \cap Y$. For unions, $\bigcup_i (U_i \cap Y) = (\bigcup_i U_i)
\cap Y$, and $\bigcup_i U_i$ is open in $X$. For intersections, $(U \cap Y) \cap (V \cap Y) = (U \cap V) \cap Y$,
and $U \cap V$ is open in $X$. $\square$

### Examples

- $Y = [0, 1]$ in $\mathbb{R}$. The set $[0, \tfrac12)$ is open in $Y$, since it equals $(-1, \tfrac12) \cap Y$. It
  is not open in $\mathbb{R}$. "Open" depends on the ambient space.
- $Y = \mathbb{Z}$ in $\mathbb{R}$. Each $\{n\} = (n - \tfrac12, n + \tfrac12) \cap \mathbb{Z}$ is open in
  $\mathbb{Z}$, so every subset of $\mathbb{Z}$ is open: $\mathbb{Z}$ gets the discrete topology.
- $Y = \{0\} \cup \{1/n : n = 1, 2, \ldots\}$ in $\mathbb{R}$. Each $\{1/n\}$ is open in $Y$ (an interval around
  $1/n$ small enough to miss the other points), but $\{0\}$ is not: every interval around 0 contains points $1/n$.
  This space is not discrete, unlike $\mathbb{Z}$, though both are countable sets of isolated-looking points.
- $Y = \mathbb{Q}$ in $\mathbb{R}$. The open sets are traces of open sets of $\mathbb{R}$. Notice that
  $\{q \in \mathbb{Q} : q^2 < 2\} = (-\sqrt2, \sqrt2) \cap \mathbb{Q} = [-\sqrt2, \sqrt2] \cap \mathbb{Q}$ is both open
  and closed in $\mathbb{Q}$, although it is neither in $\mathbb{R}$.
- The unit circle $S^1$ in $\mathbb{R}^2$. An open disc meets the circle in an open arc (or the whole circle, or
  nothing), so the open sets of $S^1$ are unions of open arcs, matching intuition.
- The subspace topology on a subset of a metric space $(X, d)$ is the metric topology of $d$ restricted to $Y$. The
  balls of the restricted metric are $B_Y(y, r) = B(y, r) \cap Y$, so every basis element of one topology is a basis
  element of the other, traced on $Y$; the comparison theorem applies in both directions.

### Closed sets and closure in a subspace

**Theorem.** Let $Y \subseteq X$ have the subspace topology.

1. A set $C \subseteq Y$ is closed in $Y$ if and only if $C = D \cap Y$ for some $D$ closed in $X$.
2. For $A \subseteq Y$, the closure of $A$ in $Y$ is $\overline{A} \cap Y$, where $\overline{A}$ is the closure in
   $X$.
3. If $Y$ is open in $X$, then a subset of $Y$ is open in $Y$ if and only if it is open in $X$. If $Y$ is closed in
   $X$, the same holds for closed sets.

*Proof.* (1) $C$ is closed in $Y$ when $Y \setminus C$ is open in $Y$, that is, $Y \setminus C = U \cap Y$ with $U$
open in $X$. Then $C = Y \setminus (U \cap Y) = (X \setminus U) \cap Y$, and $D = X \setminus U$ is closed in $X$.
The converse runs the same steps backwards.

(2) $\overline{A} \cap Y$ is closed in $Y$ by (1) and contains $A$, so the closure of $A$ in $Y$ is contained in it.
Conversely, the closure of $A$ in $Y$ is closed in $Y$, so it equals $D \cap Y$ for some closed $D$ in $X$, and
$D \supseteq A$, so $D \supseteq \overline{A}$ and $D \cap Y \supseteq \overline{A} \cap Y$.

(3) If $Y$ and $U$ are open in $X$, then $U \cap Y$ is open in $X$ (finite intersection); so every set open in $Y$ is
open in $X$. Conversely, a subset $V$ of $Y$ open in $X$ equals $V \cap Y$, so it is open in $Y$. The closed version
is the same with (1). $\square$

**Worked example.** Let $Y = [0, 1] \cup (2, 3)$ inside $\mathbb{R}$. Is $[0, 1]$ open in $Y$? Yes: $[0, 1] =
(-1, \tfrac32) \cap Y$. Is it closed in $Y$? Yes: $[0, 1] = [0, 1] \cap Y$, and $[0, 1]$ is closed in $\mathbb{R}$.
So $[0, 1]$ is clopen in $Y$, which says that $Y$ falls into two separate pieces, a fact made precise in
[Chapter 7](07-Connectedness.md). **Check:** the closure of $(2, 3)$ in $Y$ is $[2, 3] \cap Y = (2, 3)$, so $(2, 3)$ is
also closed in $Y$, as its complement $[0, 1]$ in $Y$ is open.

**Worked example.** Closure in a subspace. Let $Y = (0, 1]$ and $A = (0, \tfrac12)$. In $\mathbb{R}$,
$\overline{A} = [0, \tfrac12]$; in $Y$, the closure is $[0, \tfrac12] \cap Y = (0, \tfrac12]$. The point 0, which
the sequence $1/n$ approaches, is simply not in the space $Y$.

### Subspaces of subspaces

If $Z \subseteq Y \subseteq X$, the topology $Z$ gets as a subspace of $Y$ is the same as the one it gets as a
subspace of $X$: $(U \cap Y) \cap Z = U \cap Z$ for every $U$. So we can say "the subspace $Z$" without worrying about
the route.

From now on, whenever we speak of a subset of a topological space as a space (the circle in the plane, the sphere in
$\mathbb{R}^3$, a graph drawn on a torus, the solution set of an equation), it carries the subspace topology unless
we say otherwise. All the shapes of Part I are subspaces of $\mathbb{R}^n$ in this way.

## A short history

Point-set topology grew out of analysis. Georg Cantor, in the 1870s and 1880s, studied sets of real numbers through
their limit points and introduced closed sets and derived sets in the course of his work on Fourier series. Maurice
Fréchet's thesis of 1906 introduced abstract metric spaces (he called them by another name) and studied compactness
in them. Felix Hausdorff's *Grundzüge der Mengenlehre* (1914) defined a topological space through neighbourhoods,
with his separation axiom built in; the spaces we now call Hausdorff spaces are named for it. Kuratowski in 1922
showed that a topology could equally well be described by a closure operation, and found the 14-set theorem. The
form used in this chapter, with open sets as the basic notion and no separation built in, became the standard one
over the following decades, and was fixed in textbooks by the middle of the century. Zariski's topology (1940s) and
the spaces of functional analysis showed why the generality was worth having: many important spaces are not
metrisable, or not naturally so.

## Check yourself

??? question "1. List all topologies on X = {a, b}. Which of them are metrisable?"

    A topology must contain $\varnothing$ and $X$; the only other subsets are $\{a\}$ and $\{b\}$, and any choice of
    them gives a family closed under unions and intersections (since $\{a\} \cup \{b\} = X$ and $\{a\} \cap \{b\} =
    \varnothing$). So there are four: $\{\varnothing, X\}$, $\{\varnothing, \{a\}, X\}$, $\{\varnothing, \{b\}, X\}$,
    and the discrete topology. Only the discrete topology is metrisable (by the discrete metric). The other three
    fail the Hausdorff property: in each, one of the points has $X$ as its only open neighbourhood.

??? question "2. Is the family of sets: empty set, {a}, {b}, {a, b, c} a topology on {a, b, c}? If not, what is the smallest topology containing it?"

    No: $\{a\} \cup \{b\} = \{a, b\}$ is not in the family, so axiom 2 fails. Adding $\{a, b\}$ gives
    $\{\varnothing, \{a\}, \{b\}, \{a,b\}, X\}$. Check: all unions and intersections of these are in the list
    ($\{a\} \cap \{b\} = \varnothing$, $\{a\} \cap \{a,b\} = \{a\}$, and so on). This is the smallest topology
    containing the original family.

??? question "3. For A = [0, 1) union {2} union (Q intersected with (3, 4)) in R, find the interior, closure and boundary."

    Interior: the points with an open interval around them inside $A$. Points of $(0, 1)$ qualify; 0 does not
    (negative numbers nearby); 2 does not; no point of $(3, 4)$ does (every interval contains irrationals). So
    $\operatorname{int} A = (0, 1)$.

    Closure: points every interval around which meets $A$. That is $[0, 1]$ (including 1, approached from the left),
    the point 2, and all of $[3, 4]$ (rationals are dense, and 3, 4 are approached by rationals inside). So
    $\overline{A} = [0, 1] \cup \{2\} \cup [3, 4]$.

    Boundary: $\overline{A} \setminus \operatorname{int} A = \{0, 1, 2\} \cup [3, 4]$.

??? question "4. Describe the closure and interior of a set A (not empty, not X) in the discrete and in the indiscrete topology."

    Discrete: every set is open and closed, so $\overline{A} = A$ and $\operatorname{int} A = A$; the boundary is
    empty. Indiscrete: the only closed set containing $A$ is $X$, so $\overline{A} = X$; the only open subset of $A$
    is $\varnothing$, so $\operatorname{int} A = \varnothing$; the boundary is $X$.

??? question "5. Prove that int(A intersect B) = int A intersect int B, and give an example in R where int(A union B) is different from int A union int B."

    $\operatorname{int} A \cap \operatorname{int} B$ is open (finite intersection) and contained in $A \cap B$, so it
    is contained in $\operatorname{int}(A \cap B)$, the largest open subset of $A \cap B$. Conversely
    $\operatorname{int}(A \cap B)$ is an open subset of $A$, so it is inside $\operatorname{int} A$, and likewise
    inside $\operatorname{int} B$.

    Example: $A = \mathbb{Q}$, $B = \mathbb{R} \setminus \mathbb{Q}$. Both have empty interior, so
    $\operatorname{int} A \cup \operatorname{int} B = \varnothing$, but $A \cup B = \mathbb{R}$ has interior
    $\mathbb{R}$.

??? question "6. Show that on R^2 the taxicab metric and the Euclidean metric satisfy d2 at most d1 at most sqrt(2) d2, and conclude they give the same topology. Check with x = (0,0), y = (1,1)."

    With $a = |x_1 - y_1|$ and $b = |x_2 - y_2|$: $d_2 = \sqrt{a^2 + b^2} \le a + b = d_1$ because
    $(a + b)^2 = a^2 + b^2 + 2ab \ge a^2 + b^2$. And $(a + b)^2 \le 2(a^2 + b^2)$ because the difference is
    $a^2 + b^2 - 2ab = (a - b)^2 \ge 0$; so $d_1 \le \sqrt2\, d_2$. Hence every $d_1$-ball of radius $r$ contains the
    $d_2$-ball of radius $r/\sqrt2$, and every $d_2$-ball of radius $r$ contains the $d_1$-ball of radius $r$; by
    the comparison theorem the topologies are equal. For $(0,0)$ and $(1,1)$: $d_2 = \sqrt2 \approx 1.414$,
    $d_1 = 2$, and $\sqrt2 \cdot \sqrt2 = 2$, so the second inequality is an equality here.

??? question "7. In the Sorgenfrey line, show that [0, 1) is both open and closed. Is (0, 1] open? Is it closed?"

    $[0, 1)$ is a basis element, so it is open. Its complement $(-\infty, 0) \cup [1, \infty)$ is the union of the
    basis elements $[-n, 0)$ and $[1, n)$ for $n = 1, 2, \ldots$, so it is open, and $[0,1)$ is closed.

    $(0, 1]$ is neither. Not open: an open set containing 1 must contain some $[1, 1 + \varepsilon)$, which has points
    bigger than 1. Not closed: its complement $(-\infty, 0] \cup (1, \infty)$ contains 0, and every basis set
    $[0, \varepsilon)$ around 0 contains small positive numbers, which lie in $(0, 1]$; so the complement is not open.
    Compare: in the Sorgenfrey line, a half-open interval closed on the left is clopen, one closed on the right is
    neither. Checking point by point is the reliable method.

??? question "8. Let Y = [0, 1] union (2, 3) in R. Which of these are open in Y, and which closed in Y: [0, 1], (2, 3), [0, 1/2), (5/2, 3)?"

    $[0, 1] = (-1, \tfrac32) \cap Y$: open in $Y$; also $[0, 1] \cap Y$: closed in $Y$. $(2, 3)$ is open in
    $\mathbb{R}$, hence open in $Y$; it equals $[2, 3] \cap Y$, so closed in $Y$. $[0, \tfrac12) = (-1, \tfrac12)
    \cap Y$: open in $Y$; not closed, since $\tfrac12$ is in its closure in $Y$ (which is $[0, \tfrac12]$).
    $(\tfrac52, 3)$ is open in $\mathbb{R}$, so open in $Y$; its closure in $Y$ is $[\tfrac52, 3] \cap Y =
    [\tfrac52, 3)$, which contains $\tfrac52$, so it is not closed in $Y$.

??? question "9. In the cofinite topology on R, show that the sequence x_n = 1/n converges to every real number."

    Let $x$ be any real number and $U$ an open set containing $x$. Then $U$ is non-empty, so $\mathbb{R} \setminus U$
    is finite. Only finitely many of the distinct numbers $1, \tfrac12, \tfrac13, \ldots$ can lie in a finite set, so
    from some $n$ on all $x_n$ lie in $U$. That is the definition of convergence to $x$.

??? question "10. Show that if B is a basis for a topology on X and Y is a subset of X, then the sets B intersect Y, for B in the basis, form a basis for the subspace topology on Y."

    Let $V$ be open in $Y$, so $V = U \cap Y$ with $U$ open in $X$, and let $y \in V$. Since $y \in U$, there is
    $B \in \mathcal{B}$ with $y \in B \subseteq U$. Then $y \in B \cap Y \subseteq U \cap Y = V$. Each $B \cap Y$ is
    open in $Y$. So every open set of $Y$ is a union of sets $B \cap Y$, and these sets are open in $Y$: they form a
    basis for the subspace topology. (Properties (B1) and (B2) follow from those of $\mathcal{B}$ by intersecting
    with $Y$.)

??? question "11. Prove that the closure of a set A in a space X is A together with its limit points."

    If $x \in \overline{A}$ and $x \notin A$, then every open set containing $x$ meets $A$ (theorem in 4.3), and the
    point where it meets $A$ is not $x$ (as $x \notin A$); so $x$ is a limit point. Hence $\overline{A} \subseteq A
    \cup A'$. Conversely $A \subseteq \overline{A}$, and if $x$ is a limit point, every open set containing $x$
    meets $A$, so $x \in \overline{A}$ by the same theorem. So $\overline{A} = A \cup A'$.

??? question "12. Harder: prove that a topology on a finite set X is metrisable only if it is discrete."

    Let $d$ be a metric on finite $X$ and $x \in X$. If $X = \{x\}$ the topology is discrete. Otherwise let
    $r$ be the smallest distance from $x$ to another point; $r > 0$ since there are finitely many other points, each
    at positive distance. Then $B(x, r) = \{x\}$, so $\{x\}$ is open. Every point is open, so every set (a finite
    union of points) is open: the topology is discrete. So a finite space with any other topology, such as the
    Sierpiński space, is not metrisable. On 3 points, 28 of the 29 topologies are not metrisable.

## What you learned

- A metric gives open sets (every point has a ball around it inside the set); open sets satisfy three rules: the empty
  set and whole space, arbitrary unions, finite intersections. Different metrics, such as $d_1$, $d_2$, $d_\infty$ on
  $\mathbb{R}^n$, can give the same open sets.
- A topology is any collection satisfying those rules. Main examples: discrete, indiscrete, Sierpiński, cofinite,
  cocountable, Zariski, lower limit. Metric spaces are Hausdorff, so many topologies are not metrisable.
- Closed sets are complements of open sets; interior is the largest open subset, closure the smallest closed
  superset, boundary the difference. A point is in the closure exactly when every neighbourhood meets the set.
- Sequences can have many limits and can fail to detect closure outside metric (or first countable) spaces.
- A basis generates a topology by unions; the comparison theorem tells when one topology is finer; subbases generate
  through finite intersections.
- The subspace topology makes every subset a space: open sets are traces $U \cap Y$; closure in $Y$ is
  $\overline{A} \cap Y$.

**Next:** [Chapter 5](05-Continuity-and-Homeomorphism.md) defines continuous maps between topological spaces by
preimages of open sets, proves this matches the epsilon-delta definition, and makes "the same shape" precise with
homeomorphisms.

## Further reading

- James R. Munkres, *Topology* (2nd edition, 2000), chapter 2.
- M. A. Armstrong, *Basic Topology* (1983), chapters 2 and 3.
- Stephen Willard, *General Topology* (1970).
- Lynn Arthur Steen and J. Arthur Seebach Jr., *Counterexamples in Topology* (2nd edition, 1978), for the cofinite,
  cocountable and Sorgenfrey topologies and many stranger ones.
- Felix Hausdorff, *Grundzüge der Mengenlehre* (1914).
- Kazimierz Kuratowski, "Sur l'opération Ā de l'Analysis Situs", *Fundamenta Mathematicae* 3 (1922).
- Robert Sorgenfrey, "On the topological product of paracompact spaces", *Bulletin of the American Mathematical
  Society* 53 (1947).
- On this site: the Calculus book's [The real numbers](../calculus/18-The-Real-Numbers.md) and
  [Metric spaces and the topology of the real line](../calculus/20-Metric-Spaces-and-Topology-of-R.md); the Logic
  book's [Sets](../logic/05-Sets.md) and [Infinity and cardinality](../logic/07-Infinity-and-Cardinality.md) (countable
  and uncountable sets, used for the cocountable topology); the U of T guides
  [MAT257 Unit 1: The Topology of R^n](../../uoft/MAT257Y1/unit01.md) and
  [MAT257 Unit 3: Continuity and Connectedness](../../uoft/MAT257Y1/unit03.md); Topics lessons
  [Sets](../../topics/logic/level-5/01-sets.md) and [Countable sets](../../topics/infinity/level-6/01-countable-sets.md).
