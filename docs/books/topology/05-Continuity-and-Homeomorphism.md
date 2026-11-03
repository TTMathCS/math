# 5. Continuity and homeomorphism

*Chapter 4 gave us topological spaces: sets with a chosen family of open sets and no distances at all. Now we need to
compare them. When is a map between two spaces "continuous" if there is no $\varepsilon$ and no $\delta$ to work with?
And when are two spaces "the same shape", in the precise sense that the rubber-sheet idea of Chapter 1 promised? This
chapter answers both questions. Continuity becomes one short sentence about open sets, which we prove agrees with the
calculus definition. Sameness becomes the homeomorphism, and we spend the rest of the chapter learning to find
homeomorphisms between spaces that look very different, to prove that some spaces are not homeomorphic, and to tell
apart a space from the way it sits inside a bigger one.*

!!! abstract "In this chapter"
    **You will learn:**

    - why continuity is defined with preimages of open sets, and a proof that this agrees with the $\varepsilon$-$\delta$ definition
    - four equivalent ways to test continuity, and the pasting lemma for building maps out of pieces
    - what a homeomorphism is, why the inverse must be continuous too, and many examples (an interval and the whole line, a square and a circle, a sphere with a hole and the plane)
    - a complete proof that a circle is not homeomorphic to any interval
    - what a topological invariant is, and how invariants prove that two spaces are different
    - what an embedding is, and why a space is not the same thing as the way it sits in space

    **You need:** [Chapter 4](04-Topological-Spaces.md) (open and closed sets, closure, bases, subspaces).
    From the Calculus book, [Chapter 3](../calculus/03-Continuity.md) (continuity and the intermediate value theorem)
    and [Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md) (metric spaces). Gentler version of the
    calculus idea: [Continuity](../../topics/change/level-7/02-continuity.md) in the Topics shelf.

    **Levels:** 5.1 to 5.3 are intermediate; 5.4 is advanced.

## 5.1 Continuity as preimages of open sets

In calculus a function $f$ is continuous at a point $a$ when you can make $f(x)$ as close as you like to $f(a)$ by
taking $x$ close enough to $a$. In symbols: for every $\varepsilon > 0$ there is a $\delta > 0$ such that
$|x - a| < \delta$ implies $|f(x) - f(a)| < \varepsilon$. That sentence is full of distances. A topological space has
none. So the question is:

> Can we say "continuous" using only open sets?

The answer is yes, and the sentence is shorter than the calculus one. To state it we need one tool.

### Preimages

Let $f : X \to Y$ be any function and let $V$ be a subset of $Y$. The **preimage** of $V$ is the set of points of $X$
that $f$ sends into $V$:

$$
f^{-1}(V) = \{ x \in X : f(x) \in V \}.
$$

Read $f^{-1}(V)$ as "everything that lands in $V$". The notation looks like an inverse function, but no inverse is
needed: $f^{-1}(V)$ makes sense for every function, even one that is not one-to-one.

*Worked example.* Let $f(x) = x^2$ on $\mathbb{R}$.

- Which $x$ land in the open interval $(1, 4)$? We need $1 < x^2 < 4$, which means $1 < |x| < 2$. So
  $f^{-1}((1, 4)) = (-2, -1) \cup (1, 2)$.
- Which $x$ land in $(-1, 4)$? Every $x$ with $x^2 < 4$, so $f^{-1}((-1, 4)) = (-2, 2)$.
- Which $x$ land in $(-3, -1)$? None, since squares are never negative: $f^{-1}((-3, -1)) = \varnothing$.

*Check:* $x = 1.5$ gives $2.25 \in (1, 4)$, and $x = 0.5$ gives $0.25 \notin (1, 4)$, as the first answer says.

Each of these preimages is an open subset of $\mathbb{R}$. That is no accident, as we are about to see.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 175" role="img" aria-label="The parabola y equals x squared. A horizontal band between heights 1 and 4 is shaded on the y axis; the points of the x axis that land in the band form two open intervals, from minus 2 to minus 1 and from 1 to 2, also shaded.">
  <rect x="30" y="46" width="280" height="78" fill="#9cc9ea" opacity="0.45"/>
  <line x1="30" y1="150" x2="310" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="160" x2="170" y2="8" stroke="currentColor" stroke-width="1"/>
  <polyline fill="none" stroke="currentColor" stroke-width="1.6" points="50,12 55,23 60,34 65,43 70,53 74,62 79,71 84,79 89,86 93,94 98,100 103,107 108,113 113,118 117,123 122,128 127,132 132,136 137,139 141,142 146,144 151,146 156,148 160,149 165,150 170,150 175,150 180,149 184,148 189,146 194,144 199,142 203,139 208,136 213,132 218,128 223,123 227,118 232,113 237,107 242,100 247,94 251,86 256,79 261,71 266,62 270,53 275,43 280,34 285,23 290,12"/>
  <g stroke="#eea66f" stroke-width="6">
    <line x1="66" y1="150" x2="118" y2="150"/><line x1="222" y1="150" x2="274" y2="150"/>
  </g>
  <g stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3">
    <line x1="66" y1="150" x2="66" y2="46"/><line x1="118" y1="150" x2="118" y2="124"/>
    <line x1="222" y1="150" x2="222" y2="124"/><line x1="274" y1="150" x2="274" y2="46"/>
  </g>
  <g fill="currentColor" font-size="11" text-anchor="middle">
    <text x="66" y="167">−2</text><text x="118" y="167">−1</text><text x="222" y="167">1</text><text x="274" y="167">2</text>
    <text x="180" y="128">1</text><text x="180" y="50">4</text>
  </g>
</svg>
</div>

Preimages are friendly in a way that images are not. For any family of subsets $V_i$ of $Y$:

$$
f^{-1}\Big(\bigcup_i V_i\Big) = \bigcup_i f^{-1}(V_i), \qquad f^{-1}\Big(\bigcap_i V_i\Big) = \bigcap_i f^{-1}(V_i), \qquad f^{-1}(Y \setminus V) = X \setminus f^{-1}(V).
$$

Each is checked by reading the definition: $x$ lands in a union exactly when it lands in one of the pieces, and so on.
Images do not behave like this. With $f(x) = x^2$, $A = (-2, -1)$ and $B = (1, 2)$, the sets $A$ and $B$ do not meet,
so $f(A \cap B) = \varnothing$, but $f(A) = f(B) = (1, 4)$, so $f(A) \cap f(B) = (1, 4)$.

### The definition

**Definition.** Let $X$ and $Y$ be topological spaces. A function $f : X \to Y$ is **continuous** if the preimage of
every open set of $Y$ is an open set of $X$.

Why preimages and not images? Because a continuous map is allowed to crush and fold. The function $x \mapsto x^2$
sends the open interval $(-1, 1)$ onto $[0, 1)$, which is not open: the fold at $0$ creates an edge. What a continuous
map may not do is **tear**. If $f(a)$ sits inside an open set $V$, then everything near $a$ must also land in $V$; the
preimage of $V$ must contain a little open set around $a$. That is exactly what "$f^{-1}(V)$ is open" says.

### It agrees with calculus

Recall from [Chapter 4](04-Topological-Spaces.md) that in a metric space $(X, d)$ the **open ball** of radius $r$
around $a$ is $B(a, r) = \{x : d(x, a) < r\}$, and a set $U$ is open when every point of $U$ has some ball around it
inside $U$. Balls are themselves open.

**Theorem 5.1.** Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces and $f : X \to Y$. Then $f$ satisfies the
$\varepsilon$-$\delta$ definition of continuity at every point if and only if the preimage of every open set is open.

*Proof.* Suppose first that $f$ is $\varepsilon$-$\delta$ continuous at every point. Let $V \subseteq Y$ be open and
take any $a \in f^{-1}(V)$. Then $f(a) \in V$, and $V$ is open, so there is an $\varepsilon > 0$ with
$B(f(a), \varepsilon) \subseteq V$. Continuity at $a$ gives a $\delta > 0$ such that $d_X(x, a) < \delta$ implies
$d_Y(f(x), f(a)) < \varepsilon$. In other words $f$ sends $B(a, \delta)$ into $B(f(a), \varepsilon)$, which lies in $V$.
So $B(a, \delta) \subseteq f^{-1}(V)$. Every point of $f^{-1}(V)$ has a ball around it inside $f^{-1}(V)$, so
$f^{-1}(V)$ is open.

Conversely, suppose preimages of open sets are open. Fix $a \in X$ and $\varepsilon > 0$. The ball
$V = B(f(a), \varepsilon)$ is open, so $f^{-1}(V)$ is open, and it contains $a$. So there is a $\delta > 0$ with
$B(a, \delta) \subseteq f^{-1}(V)$. Unwinding: if $d_X(x, a) < \delta$ then $f(x) \in V$, that is,
$d_Y(f(x), f(a)) < \varepsilon$. That is the $\varepsilon$-$\delta$ condition at $a$. $\square$

So nothing is lost. Every continuous function from calculus (polynomials, $\sin$, $\exp$, $|x|$, and their sums,
products and compositions) is continuous in the new sense, and now the word also makes sense where there is no metric.

### Worked examples

**Example 1 (constants).** A constant map $f(x) = c$ is continuous whatever the topologies: the preimage of $V$ is
all of $X$ if $c \in V$ and empty if not, and both are open.

**Example 2 (the topology matters).** Let $\mathbb{R}_{\text{std}}$ be the real line with its usual topology and
$\mathbb{R}_{\text{disc}}$ the same set with the discrete topology (every subset open). The identity map
$\mathbb{R}_{\text{disc}} \to \mathbb{R}_{\text{std}}$ is continuous: every preimage is some subset, and every subset is
open in the discrete topology. The identity $\mathbb{R}_{\text{std}} \to \mathbb{R}_{\text{disc}}$ is not: $\{0\}$ is open
in the target, and its preimage $\{0\}$ is not open in the usual topology. The same rule of assignment is continuous
one way and not the other. **Continuity is a property of a function together with two topologies.** More open sets in
the domain make continuity easier; more open sets in the target make it harder.

**Example 3 (the extremes).** Every function out of a discrete space is continuous, and every function into an
indiscrete space (only $\varnothing$ and the whole space open) is continuous. Both follow at once from the definition.

**Example 4 (a jump).** Let $H(x) = 0$ for $x < 0$ and $H(x) = 1$ for $x \ge 0$. The open interval $(1/2, 2)$ has
preimage $[0, \infty)$, which is not open (no interval around $0$ fits inside it). So $H$ is not continuous, and the
failure sits exactly at the jump.

**Example 5 (Sierpiński space).** Let $S = \{0, 1\}$ with open sets $\varnothing$, $\{1\}$ and $S$. This is the
smallest space that is neither discrete nor indiscrete, and it is named after Wacław Sierpiński. For any space $X$, a
function $f : X \to S$ is continuous exactly when $f^{-1}(1)$ is open in $X$ (the other two preimages are $\varnothing$
and $X$). So continuous maps $X \to S$ match the open sets of $X$ one for one: $U$ corresponds to the map that is $1$
on $U$ and $0$ elsewhere. One small space "detects" all open sets.

**Example 6 (the cofinite topology).** On an infinite set, the cofinite topology has as open sets $\varnothing$ and the
sets with finite complement ([Chapter 4](04-Topological-Spaces.md)). Closed sets are then the finite sets and the whole
space. Any nonconstant polynomial $p : \mathbb{R} \to \mathbb{R}$ is continuous for the cofinite topology on both sides:
the preimage of a finite set $\{c_1, \dots, c_k\}$ is the set of solutions of $p(x) = c_1$, ..., $p(x) = c_k$, and each
equation has at most $\deg p$ solutions, so the preimage is finite, that is, closed. (Here we used the closed-set test,
coming next.)

### Four equivalent tests

**Theorem 5.2.** For a function $f : X \to Y$ between topological spaces the following are equivalent.

1. The preimage of every open set is open (the definition).
2. The preimage of every closed set is closed.
3. For one fixed basis $\mathcal{B}$ of $Y$, the preimage of every basis set is open.
4. For every subset $A \subseteq X$, $f(\overline{A}) \subseteq \overline{f(A)}$, where the bar means closure.

*Proof.* (1) and (2) are equivalent because closed sets are complements of open sets and
$f^{-1}(Y \setminus V) = X \setminus f^{-1}(V)$.

(1) implies (3) since basis sets are open. For (3) implies (1): every open $V$ is a union of basis sets,
$V = \bigcup_i B_i$, so $f^{-1}(V) = \bigcup_i f^{-1}(B_i)$ is a union of open sets, hence open.

(1) implies (4). Recall from [Chapter 4](04-Topological-Spaces.md) that $y \in \overline{C}$ exactly when every open set
containing $y$ meets $C$. Let $x \in \overline{A}$ and let $V$ be any open set containing $f(x)$. Then $f^{-1}(V)$ is an
open set containing $x$, so it meets $A$ in some point $a$. Then $f(a) \in V \cap f(A)$. So every open set around $f(x)$
meets $f(A)$, which means $f(x) \in \overline{f(A)}$.

(4) implies (2). Let $C \subseteq Y$ be closed and put $A = f^{-1}(C)$. Then $f(A) \subseteq C$, so
$f(\overline{A}) \subseteq \overline{f(A)} \subseteq \overline{C} = C$. Hence every point of $\overline{A}$ lands in $C$,
that is, $\overline{A} \subseteq f^{-1}(C) = A$. A set that contains its closure is closed. $\square$

Test (2) is often the quickest way to see that a set is closed. *Example:* the unit circle
$\{(x, y) : x^2 + y^2 = 1\}$ is the preimage of the closed set $\{1\}$ under the continuous map
$(x, y) \mapsto x^2 + y^2$, so it is closed in $\mathbb{R}^2$. The region $\{(x, y) : xy \ge 1\}$ is the preimage of
$[1, \infty)$ under $(x, y) \mapsto xy$, so it is closed too.

Test (4) says that continuous maps send "points stuck to $A$" to "points stuck to $f(A)$". *Example:* if
$f, g : \mathbb{R} \to \mathbb{R}$ are continuous and $f(q) = g(q)$ for every rational $q$, then $f = g$. Indeed
$h = f - g$ is continuous and $h(\mathbb{Q}) = \{0\}$; since $\overline{\mathbb{Q}} = \mathbb{R}$, test (4) gives
$h(\mathbb{R}) \subseteq \overline{\{0\}} = \{0\}$. A continuous function on the line is decided by its values at the
rationals.

### Compositions, points, and pasting

**Theorem 5.3.** If $f : X \to Y$ and $g : Y \to Z$ are continuous, so is $g \circ f$.

*Proof.* For $W$ open in $Z$, $(g \circ f)^{-1}(W) = f^{-1}(g^{-1}(W))$. The inner preimage is open by continuity of
$g$, and then the outer one is open by continuity of $f$. $\square$

Continuity can also be checked one point at a time. Say $f$ is **continuous at** $x$ if for every open $V$ containing
$f(x)$ there is an open $U$ containing $x$ with $f(U) \subseteq V$. Then $f$ is continuous if and only if it is
continuous at every point. *Proof.* If $f$ is continuous, take $U = f^{-1}(V)$. Conversely, if $V$ is open and
$x \in f^{-1}(V)$, pick $U_x$ as in the definition; then $U_x \subseteq f^{-1}(V)$, so $f^{-1}(V) = \bigcup_x U_x$ is a
union of open sets. $\square$

Two more facts used constantly: the restriction of a continuous map to a subspace is continuous (the preimage under the
restriction is $A \cap f^{-1}(V)$, open in the subspace topology), and the inclusion of a subspace $A \hookrightarrow X$ is
continuous (the preimage of $U$ is $A \cap U$).

Often a map is defined by different formulas on different pieces. When is the result continuous?

**Theorem 5.4 (pasting lemma).** Suppose $X = A \cup B$ with $A$ and $B$ both closed in $X$. Let $f : A \to Y$ and
$g : B \to Y$ be continuous (with the subspace topologies) and agree on $A \cap B$. Then the function $h$ equal to $f$ on
$A$ and $g$ on $B$ is continuous.

*Proof.* $h$ is well defined because $f$ and $g$ agree where both apply. Let $C \subseteq Y$ be closed. Then
$h^{-1}(C) = f^{-1}(C) \cup g^{-1}(C)$. The set $f^{-1}(C)$ is closed in $A$, so it has the form $A \cap D$ with $D$
closed in $X$ ([Chapter 4](04-Topological-Spaces.md), subspaces); since $A$ is closed in $X$, $A \cap D$ is closed in $X$.
The same holds for $g^{-1}(C)$. A union of two closed sets is closed, so $h^{-1}(C)$ is closed, and test (2) of
Theorem 5.2 finishes the proof. $\square$

*Example:* $|x|$ is $-x$ on $(-\infty, 0]$ and $x$ on $[0, \infty)$; both pieces are closed and the formulas agree at
$0$. In [Chapter 13](13-The-Fundamental-Group.md) we will join two paths end to end, running the first at double speed on
$[0, 1/2]$ and the second on $[1/2, 1]$; the pasting lemma is what makes the joined path continuous.

*Non-example:* the jump function $H$ of Example 4 is $0$ on $A = (-\infty, 0)$ and $1$ on $B = [0, \infty)$. Both pieces
are continuous, but $A$ is not closed, and the lemma does not apply. Closedness is doing real work.

### A warning about sequences

In a topological space we say $x_n \to x$ if every open set containing $x$ contains all but finitely many of the
$x_n$. In a metric space this is the usual convergence, and Chapter 3 of the Calculus book showed that $f$ is continuous
exactly when $x_n \to x$ always implies $f(x_n) \to f(x)$.

In general spaces only half of that survives. If $f$ is continuous and $x_n \to x$, then for any open $V$ around $f(x)$
the open set $f^{-1}(V)$ contains $x$, hence all but finitely many $x_n$; so all but finitely many $f(x_n)$ lie in $V$,
and $f(x_n) \to f(x)$. The converse can fail. Give $\mathbb{R}$ the **cocountable topology**: open sets are $\varnothing$
and the sets whose complement is countable. If $x_n \to x$ in this topology, then the set
$C = \{x_n : x_n \ne x\}$ is countable, so $U = \mathbb{R} \setminus C$ is open and contains $x$; hence all but finitely
many $x_n$ lie in $U$, which means $x_n = x$ from some point on. Convergent sequences are eventually constant, so every
function out of this space preserves limits of sequences. Yet the identity map to $\mathbb{R}_{\text{std}}$ is not
continuous: the preimage of $(0, 1)$ is $(0, 1)$, whose complement is uncountable. Sequences are not enough to see the
topology of every space; open sets are. (Chapter 8 meets the same issue with compactness.)

## 5.2 Homeomorphisms

Chapter 1 described topology as the study of shapes up to stretching and bending, without cutting or gluing. Here is
the precise version.

**Definition.** A **homeomorphism** is a bijection $h : X \to Y$ such that both $h$ and its inverse $h^{-1}$ are
continuous. If one exists, $X$ and $Y$ are **homeomorphic**, written $X \cong Y$.

A homeomorphism matches the points of $X$ with the points of $Y$ one for one, and at the same time matches the open sets
of $X$ with the open sets of $Y$ one for one: $U$ is open in $X$ exactly when $h(U)$ is open in $Y$. As far as
topology can tell, the two spaces are the same space with the points renamed.

The word is old: Henri Poincaré used "homéomorphisme" in his 1895 memoir *Analysis Situs*, although his meaning was
closer to what we now call a smooth equivalence. The modern definition came after Felix Hausdorff's 1914 book
*Grundzüge der Mengenlehre* gave the first axioms for a topological space.

### Why the inverse must be continuous

You might hope that a continuous bijection is automatically a homeomorphism. It is not.

*Example.* Let $p : [0, 2\pi) \to S^1$, $p(t) = (\cos t, \sin t)$, where $S^1$ is the unit circle in $\mathbb{R}^2$.
It is continuous (its coordinates are), one-to-one (each point of the circle has exactly one angle in $[0, 2\pi)$) and
onto. But it is not a homeomorphism. The set $U = [0, 1)$ is open in $[0, 2\pi)$: it is the intersection of the
subspace with the open interval $(-1, 1)$. Its image $p(U)$ is the arc of angles from $0$ up to (not including) $1$
radian, and it contains $(1, 0) = p(0)$. Every open disc around $(1, 0)$ contains points of the circle just below the
$x$-axis, with angles close to $2\pi$, and those points are not in $p(U)$. So $p(U)$ is not open in $S^1$, even though
it is the preimage of the open set $U$ under $p^{-1}$. The inverse map is not continuous: it tears the circle open at
$(1, 0)$, sending nearby points to opposite ends of the interval.

The identity $\mathbb{R}_{\text{disc}} \to \mathbb{R}_{\text{std}}$ of Example 2 is another continuous bijection that is
not a homeomorphism.

**Theorem 5.5.** A continuous bijection $h : X \to Y$ is a homeomorphism if and only if it is **open**, meaning that
$h(U)$ is open in $Y$ for every open $U$ in $X$.

*Proof.* The preimage of $U$ under $h^{-1}$ is $\{y : h^{-1}(y) \in U\} = h(U)$. So $h^{-1}$ is continuous exactly when
every $h(U)$ is open. $\square$

**Theorem 5.6.** Being homeomorphic is an equivalence relation.

*Proof.* The identity is a homeomorphism $X \cong X$. If $h : X \to Y$ is one, so is $h^{-1}$, because the inverse of
$h^{-1}$ is $h$. If $h : X \to Y$ and $k : Y \to Z$ are homeomorphisms, then $k \circ h$ is a bijection, continuous by
Theorem 5.3, with continuous inverse $h^{-1} \circ k^{-1}$. $\square$

### A gallery of homeomorphisms

**1. A short interval and the whole line.** Let $h : (-1, 1) \to \mathbb{R}$, $h(x) = \dfrac{x}{1 - |x|}$. Its inverse
is $g(y) = \dfrac{y}{1 + |y|}$. Check one case: if $0 \le x < 1$ then $h(x) = x/(1 - x) \ge 0$ and

$$
g(h(x)) = \frac{x/(1-x)}{1 + x/(1-x)} = \frac{x/(1-x)}{1/(1-x)} = x .
$$

The case $x < 0$ is the mirror image, and $h(g(y)) = y$ is checked the same way. Both maps are continuous (built from
$|x|$ and division by a nonzero quantity). *Check with numbers:* $h(1/2) = 1$, $h(-3/4) = -3$, $g(3) = 3/4$,
$g(-1) = -1/2$. So an interval of length 2 is homeomorphic to the infinite line: **length and boundedness are not
topological properties.** (The map $x \mapsto \tan(\pi x / 2)$ works too.)

**2. All open intervals.** The map $x \mapsto c + (d - c)\dfrac{x - a}{b - a}$ is a homeomorphism $(a, b) \cong (c, d)$,
with an inverse of the same kind; the same formula gives $[a, b] \cong [c, d]$. Also $(0, 1) \cong (0, \infty)$ by
$x \mapsto x / (1 - x)$, and $(0, \infty) \cong \mathbb{R}$ by $\ln$. So every open interval, bounded or not, is
homeomorphic to $\mathbb{R}$.

**3. A square and a circle.** Let $Q$ be the boundary of the square $[-1, 1]^2$: the points with
$\max(|x|, |y|) = 1$. The map $p \mapsto p / \lVert p \rVert$ pushes each point of $Q$ along its ray from the origin onto
the unit circle. Its inverse is $q \mapsto q / \max(|q_1|, |q_2|)$, which pushes back out. Both are continuous (the
denominators never vanish on these sets), so $Q \cong S^1$. Corners are invisible to topology.

The same idea works for the filled shapes. Send $p \ne 0$ in the square $[-1, 1]^2$ to
$\dfrac{\max(|p_1|, |p_2|)}{\lVert p \rVert}\, p$ and $0$ to $0$. This shrinks each ray of the square to the matching
ray of the disc. It is continuous away from $0$ by the formula, and at $0$ because the image has length
$\max(|p_1|, |p_2|) \le \lVert p \rVert$, which tends to $0$. The inverse is
$q \mapsto \dfrac{\lVert q \rVert}{\max(|q_1|, |q_2|)}\, q$, with $0 \mapsto 0$, continuous for the same reason. So the
filled square is homeomorphic to the closed disc.

**4. A sphere with a hole and the plane.** Let $S^2$ be the unit sphere in $\mathbb{R}^3$ and $N = (0, 0, 1)$ its north
pole. For a point $P$ of the sphere other than $N$, draw the straight line from $N$ through $P$ and see where it hits
the plane $z = 0$. This is **stereographic projection**. The line is $N + s(P - N)$, and its third coordinate
$1 + s(z - 1)$ vanishes at $s = 1/(1 - z)$, so

$$
\sigma(x, y, z) = \left( \frac{x}{1 - z}, \ \frac{y}{1 - z} \right).
$$

Going back, a point $(u, v)$ of the plane comes from

$$
\sigma^{-1}(u, v) = \left( \frac{2u}{u^2 + v^2 + 1}, \ \frac{2v}{u^2 + v^2 + 1}, \ \frac{u^2 + v^2 - 1}{u^2 + v^2 + 1} \right).
$$

*Check:* for $(u, v) = (3, 4)$ we have $u^2 + v^2 = 25$, so $\sigma^{-1}(3, 4) = (6/26, 8/26, 24/26) = (3/13, 4/13, 12/13)$.
Its squared length is $(9 + 16 + 144)/169 = 1$, so it is on the sphere, and $1 - z = 1/13$, so
$\sigma$ sends it back to $(3, 4)$. Both maps are continuous (denominators nonzero away from $N$), so
$S^2 \setminus \{N\} \cong \mathbb{R}^2$. The equator ($z = 0$) goes to the unit circle, the southern hemisphere to the
inside of the unit disc, the northern hemisphere to the outside, and points near $N$ to points far away.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 160" role="img" aria-label="Stereographic projection in cross-section. A circle stands on a horizontal line through its centre. Straight lines from the north pole pass through a point of the southern half, meeting the line inside the circle, and through a point of the northern half, meeting the line far outside the circle.">
  <line x1="20" y1="95" x2="330" y2="95" stroke="currentColor" stroke-width="1"/>
  <circle cx="170" cy="95" r="50" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.4"/>
  <g stroke="#eea66f" stroke-width="1.6">
    <line x1="170" y1="45" x2="202.1" y2="133.3"/>
    <line x1="170" y1="45" x2="307.4" y2="95"/>
  </g>
  <g fill="currentColor">
    <circle cx="170" cy="45" r="3"/>
    <circle cx="202.1" cy="133.3" r="3"/><circle cx="188.2" cy="95" r="3"/>
    <circle cx="202.1" cy="56.7" r="3"/><circle cx="307.4" cy="95" r="3"/>
  </g>
  <g fill="currentColor" font-size="11">
    <text x="160" y="38">N</text>
    <text x="208" y="146">P</text><text x="176" y="110">σ(P)</text>
    <text x="207" y="53">Q</text><text x="290" y="110">σ(Q)</text>
    <text x="24" y="88">plane z = 0</text>
  </g>
</svg>
</div>

Mars is very nearly a sphere, and maps of its polar regions are commonly drawn in polar stereographic projection, which
is this map centred on a pole. The projection keeps angles (it is conformal) but stretches areas more and more towards
the edge of the map, and it can never include the pole it projects from. The [Geometry book](../geometry/16-Spherical-Geometry.md)
explains why no flat map can be faithful to distances; topology adds that no flat map can even show the whole sphere
without tearing (see the remark after Theorem 5.7).

**5. Graphs of functions.** If $f : A \to \mathbb{R}$ is continuous on a subset $A$ of $\mathbb{R}$, its graph
$\Gamma = \{(x, f(x))\}$ is homeomorphic to $A$: the map $x \mapsto (x, f(x))$ is a continuous bijection onto $\Gamma$,
and its inverse is the restriction of the projection $(x, y) \mapsto x$, which is continuous. So a parabola is
homeomorphic to a line, and the open upper hemisphere $\{z = \sqrt{1 - x^2 - y^2}\}$, the graph of a continuous function
on the open unit disc, is homeomorphic to the open disc.

**6. A knot and a circle.** Tie a knot in a piece of string and fuse the ends. The result is a closed curve in space
that cannot be moved into a round circle without passing through itself ([Chapter 18](18-Knot-Theory.md)). Yet as a
space it **is** homeomorphic to a circle: walk along it and record your position, exactly as with a round circle.
A homeomorphism concerns the space alone, not how it is placed in a bigger space. Section 5.4 makes this distinction
precise.

### A non-example, proved: the circle is not an interval

It is easy to believe that a circle is not homeomorphic to a segment. Proving it means showing that **no** map
whatsoever works, and for that we need an idea.

**Theorem 5.7.** There is no continuous one-to-one function from the circle $S^1$ to $\mathbb{R}$. In particular $S^1$
is not homeomorphic to any interval, nor to any subset of $\mathbb{R}$.

*Proof.* Let $g : S^1 \to \mathbb{R}$ be continuous. For $t \in [0, \pi]$ compare the values of $g$ at the two ends of
a diameter:

$$
\varphi(t) = g(\cos t, \sin t) - g(-\cos t, -\sin t).
$$

This is a continuous function on $[0, \pi]$. Since $(\cos \pi, \sin \pi) = (-1, 0)$, we get
$\varphi(\pi) = g(-1, 0) - g(1, 0) = -\varphi(0)$. So $\varphi(0)$ and $\varphi(\pi)$ are either both zero or of opposite
signs. In either case the intermediate value theorem gives a $t$ with $\varphi(t) = 0$, that is, a point $p$ with
$g(p) = g(-p)$. Since $p \ne -p$, the function $g$ is not one-to-one.

If $S^1$ were homeomorphic to a subset $A$ of $\mathbb{R}$, the homeomorphism followed by the inclusion of $A$ would be
a continuous one-to-one map $S^1 \to \mathbb{R}$, which we have just ruled out. $\square$

The proof found more than we asked for: every continuous real function on a circle takes equal values at some pair of
**opposite** points. Idealise the temperature along Mars's equator at one instant as a continuous function. Then there
are, at that instant, two diametrically opposite points on the equator with exactly the same temperature. The
two-dimensional version (Borsuk-Ulam, [Chapter 14](14-The-Circle-and-Covering-Spaces.md)) says that every continuous map
$S^2 \to \mathbb{R}^2$ sends some pair of opposite points to the same place. So there is no continuous one-to-one map
from the whole sphere into the plane: any flat map of all of Mars must tear the surface somewhere or show some places
twice.

## 5.3 Topological invariants

How do we prove that two spaces are **not** homeomorphic? Theorem 5.7 needed a special trick. We want a general method.

**Definition.** A **topological invariant** is a property of spaces (or a number, or a group, attached to spaces) that
is the same for any two homeomorphic spaces.

If $X$ has an invariant property and $Y$ does not, then $X \not\cong Y$. That is the whole method. There is a simple
principle for spotting invariants:

> **Any property defined using only points, open sets and the relations between them is a topological invariant.**

The reason is that a homeomorphism $h$ is a renaming. It is a bijection on points, and $U \mapsto h(U)$ is a bijection
between the two families of open sets that respects unions, intersections, complements and containment. Any statement
about $X$ written in those terms translates, word for word, into the same statement about $Y$.

### Examples, with proofs

**The number of points**, and the number of open sets. A homeomorphism is a bijection.

**Isolated points.** A point $x$ is **isolated** if $\{x\}$ is open. If $h$ is a homeomorphism then $\{x\}$ is open if
and only if $h(\{x\}) = \{h(x)\}$ is open. So $h$ sends isolated points to isolated points, and the number of isolated
points is an invariant.

*Example.* Compare $\mathbb{N} = \{1, 2, 3, \dots\}$, $K^\ast = \{1/n : n \ge 1\}$ and $K = \{0\} \cup \{1/n : n \ge 1\}$,
all as subspaces of $\mathbb{R}$. All three are countable. In $\mathbb{N}$ every point is isolated: $\{n\} = \mathbb{N} \cap (n - \tfrac12, n + \tfrac12)$.
In $K^\ast$ every point is isolated too: $1/n$ is the only point of $K^\ast$ strictly between $\tfrac{1}{n+1}$ and $\tfrac{1}{n-1}$
(for $n = 1$, between $\tfrac12$ and $2$). Both are discrete, and any bijection between two discrete spaces is a
homeomorphism, so $\mathbb{N} \cong K^\ast$ via $n \mapsto 1/n$. But in $K$ the point $0$ is not isolated: every open
interval around $0$ contains $1/n$ for large $n$. So $K \not\cong \mathbb{N}$. Adding a single limit point changed the
topology.

*Example.* $\mathbb{Z}$ and $\mathbb{Q}$ (subspaces of $\mathbb{R}$) are both countable. $\mathbb{Z}$ is discrete,
while $\mathbb{Q}$ has no isolated points at all (every interval around a rational contains other rationals). So
$\mathbb{Z} \not\cong \mathbb{Q}$. And $\mathbb{Q} \not\cong \mathbb{R}$, because $\mathbb{Q}$ is countable and
$\mathbb{R}$ is not ([Logic, Chapter 7](../logic/07-Infinity-and-Cardinality.md)).

**Points are closed** (the $T_1$ property). If every $\{x\}$ is closed in $X$, then every $\{h(x)\}$ is closed in $Y$,
since homeomorphisms send closed sets to closed sets (complements of open sets go to complements of open sets).

**The Hausdorff property.** $X$ is **Hausdorff** if any two different points have disjoint open neighbourhoods. Suppose
$X$ is Hausdorff and $h : X \to Y$ is a homeomorphism. Given $y_1 \ne y_2$ in $Y$, the points $h^{-1}(y_1)$ and
$h^{-1}(y_2)$ are different, so they have disjoint open sets $U_1$, $U_2$ around them. Then $h(U_1)$ and $h(U_2)$ are
open, contain $y_1$ and $y_2$, and are disjoint because $h$ is one-to-one. So $Y$ is Hausdorff.
([Chapter 9](09-Separation-and-Metrisation.md) studies this property properly.)

**Separability and countable bases.** A space is **separable** if it has a countable dense subset (for example
$\mathbb{Q}$ in $\mathbb{R}$), and **second countable** if its topology has a countable basis (for example intervals
with rational endpoints in $\mathbb{R}$). Homeomorphisms carry dense sets to dense sets and bases to bases, so both are
invariants.

**Metrisability.** A space is **metrisable** if some metric produces exactly its open sets. If $X$ is metrisable with
metric $d$ and $h : X \to Y$ is a homeomorphism, then $d'(y_1, y_2) = d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on $Y$
whose open sets are exactly the images of the open sets of $X$, which are the open sets of $Y$.

### What is not invariant

Many familiar properties are not topological, and seeing why sharpens the idea.

- **Length and boundedness.** $(-1, 1) \cong \mathbb{R}$ (gallery item 1).
- **Completeness.** With the usual metrics, $\mathbb{R}$ is complete and $(-1, 1)$ is not (the Cauchy sequence
  $1 - 1/n$ has no limit inside it), yet they are homeomorphic. Completeness belongs to the metric, not the topology.
- **Straightness, corners, curvature, angles.** A square is homeomorphic to a circle (item 3).
- **Being closed in a bigger space.** $\mathbb{R}$ is closed in $\mathbb{R}$, while $(-1, 1)$ is not, but they are
  homeomorphic. Whether a set is closed is a question about how it sits inside another space, not about the set as a
  space of its own.

### Counting spaces

How many essentially different topologies are there on a small set? On a two-point set $\{a, b\}$ there are four
topologies: the indiscrete one, the discrete one, $\{\varnothing, \{a\}, \{a, b\}\}$ and
$\{\varnothing, \{b\}, \{a, b\}\}$. The last two are homeomorphic (swap $a$ and $b$); both are copies of Sierpiński
space. So there are three spaces with two points, up to homeomorphism.

For larger sets, a computer can list every family of subsets that obeys the axioms and then group them by renaming.

**Try it in Python.**

```python
from itertools import combinations, permutations

def topologies(n):
    full, empty = frozenset(range(n)), frozenset()
    middle = [frozenset(c) for r in range(1, n) for c in combinations(range(n), r)]
    for r in range(len(middle) + 1):
        for fam in combinations(middle, r):
            T = set(fam) | {full, empty}
            if all(a | b in T and a & b in T for a in T for b in T):
                yield T

def canonical(T, n):   # the same name for homeomorphic topologies
    return min(tuple(sorted(tuple(sorted(p[i] for i in U)) for U in T))
               for p in permutations(range(n)))

for n in range(1, 5):
    Ts = list(topologies(n))
    print(n, len(Ts), len({canonical(T, n) for T in Ts}))
```

It prints `1 1 1`, `2 4 3`, `3 29 9` and `4 355 33`: on four points there are 355 topologies but only 33 different
spaces. (For a finite family, closure under pairwise unions and intersections is the same as the axioms.) Nobody knows a
formula for these numbers; they are listed in the Online Encyclopedia of Integer Sequences.

### Invariants as tools

An invariant can prove that two spaces are different. It can never prove that two spaces are the same: two spaces can
agree on every invariant in a list and still differ. Topology keeps inventing finer invariants, and much of this book
is a tour of them:

- **connectedness** and the number of pieces, [Chapter 7](07-Connectedness.md): it will prove $\mathbb{R} \not\cong \mathbb{R}^2$
  and $[0, 1] \not\cong (0, 1)$;
- **compactness**, [Chapter 8](08-Compactness.md): it will prove $S^2 \not\cong \mathbb{R}^2$;
- separation properties, [Chapter 9](09-Separation-and-Metrisation.md);
- the **Euler characteristic** and orientability, [Chapters 2](02-Surfaces-and-Euler-Characteristic.md) and
  [10](10-Classification-of-Surfaces.md), which classify closed surfaces completely;
- the **fundamental group**, [Chapter 13](13-The-Fundamental-Group.md), and **homology**,
  [Chapter 16](16-Homology.md), which can tell $\mathbb{R}^2$ from $\mathbb{R}^3$ and a sphere from a torus.

The questions "are these the same?" and "are these different?" need different tools: to prove "same", build a
homeomorphism; to prove "different", find an invariant.

## 5.4 Embeddings

*Level: advanced.* A trefoil knot and a round circle are homeomorphic as spaces, yet they sit in space differently. A
Möbius strip in your hand and the same strip drawn in a flat diagram with glued edges are "the same strip". To talk about
a space **inside** another we need one more definition.

**Definition.** A continuous map $f : X \to Y$ is an **embedding** if it is one-to-one and, as a map from $X$ onto its
image $f(X)$ with the subspace topology, it is a homeomorphism.

So an embedding is a way of placing a faithful copy of $X$ inside $Y$. The image is not just a set in the shape of $X$;
it carries the same topology as $X$.

### Examples

- The inclusion of any subspace $A \hookrightarrow X$ is an embedding.
- The map $\mathbb{R} \to \mathbb{R}^2$, $x \mapsto (x, 0)$, embeds the line as the $x$-axis; the map
  $t \mapsto (\cos t, \sin t)$ on $[0, \pi]$ embeds a closed interval as a half circle.
- The map $x \mapsto (x, f(x))$ of gallery item 5 embeds $A$ as the graph of $f$.
- The inverse of stereographic projection embeds the plane in $\mathbb{R}^3$ as the sphere minus a point.
- The map $t \mapsto (t^2, t^3)$ embeds $\mathbb{R}$ in the plane as a curve with a sharp cusp at the origin. It is
  one-to-one because $t$ is the cube root of the second coordinate, and that cube root is a continuous inverse on the
  image. Embeddings need not be smooth: topology does not see the cusp.

### Non-examples

Being continuous and one-to-one is not enough.

*The wrapped interval.* The map $p : [0, 2\pi) \to \mathbb{R}^2$, $p(t) = (\cos t, \sin t)$, is continuous and
one-to-one, with image the whole circle. Section 5.2 showed that the inverse is not continuous on the image, so $p$ is
not an embedding.

*The figure eight.* Let $f : (-\pi, \pi) \to \mathbb{R}^2$, $f(t) = (\sin 2t, \sin t)$. As $t$ runs from $-\pi$ to
$\pi$, the point traces the lower loop, passes through the origin at $t = 0$, traces the upper loop, and approaches the
origin again as $t \to \pm\pi$, without reaching it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 140" role="img" aria-label="A figure eight traced by the curve sine 2t, sine t. The middle crossing point is reached at t equals 0; the two ends of the parameter interval approach the same crossing point without reaching it.">
  <polyline fill="none" stroke="#eea66f" stroke-width="2.2" points="183,73 195,77 207,80 218,84 229,87 238,90 247,93 254,96 260,99 265,102 268,105 270,108 270,110 268,112 265,114 260,116 254,118 247,120 238,121 229,122 218,123 207,124 195,125 183,125 170,125 157,125 145,125 133,124 122,123 111,122 102,121 93,120 86,118 80,116 75,114 72,112 70,110 70,108 72,105 75,102 80,99 86,96 93,93 102,90 111,87 122,84 133,80 145,77 157,73 170,70 183,67 195,63 207,60 218,56 229,53 238,50 247,47 254,44 260,41 265,38 268,35 270,32 270,30 268,28 265,26 260,24 254,22 247,20 238,19 229,18 218,17 207,16 195,15 183,15 170,15 157,15 145,15 133,16 122,17 111,18 102,19 93,20 86,22 80,24 75,26 72,28 70,30 70,32 72,35 75,38 80,41 86,44 93,47 102,50 111,53 122,56 133,60 145,63 157,67"/>
  <circle cx="170" cy="70" r="3" fill="currentColor"/>
  <g fill="currentColor" font-size="11">
    <text x="178" y="62">f(0)</text>
    <text x="282" y="34">t &gt; 0</text><text x="282" y="114">t &lt; 0</text>
  </g>
</svg>
</div>

It is one-to-one. Suppose $f(s) = f(t)$. From $\sin s = \sin t$ with $s, t \in (-\pi, \pi)$, either $s = t$, or
$s$ and $t$ are mirror images: $t = \pi - s$ (if $s > 0$) or $t = -\pi - s$ (if $s < 0$). In the mirror case
$\sin 2t = \sin(\pm 2\pi - 2s) = -\sin 2s$, so $\sin 2s = \sin 2t$ forces $\sin 2s = 0$; with $s \in (0, \pi)$ or
$(-\pi, 0)$ this means $s = \pm\pi/2$, and then $t = s$ anyway. So $f$ is a continuous bijection onto the figure eight.

It is not an embedding. Take $t_n = \pi - 1/n$. Then $f(t_n) \to (\sin 2\pi, \sin \pi) = (0, 0) = f(0)$. If the inverse
$f^{-1}$ were continuous on the image, we would get $t_n = f^{-1}(f(t_n)) \to f^{-1}(0, 0) = 0$; but $t_n \to \pi$.
Near the crossing point, the image has four arms, while every point of an open interval has only two directions; the
open interval and the figure eight are not homeomorphic ([Chapter 7](07-Connectedness.md) will prove such statements
by counting pieces after removing a point).

*A dense line on a torus.* Wrap the line around the torus $S^1 \times S^1$ by
$t \mapsto (\cos t, \sin t, \cos \alpha t, \sin \alpha t)$ with $\alpha$ irrational. The map is one-to-one, but its
image comes back arbitrarily close to every point of the torus, so the subspace topology on the image is nothing like
the topology of $\mathbb{R}$. (The torus as a product appears in [Chapter 6](06-Building-New-Spaces.md).)

### Tests for being an embedding

**Theorem 5.8.** A continuous one-to-one map $f : X \to Y$ that is open (sends open sets to open sets) or closed (sends
closed sets to closed sets) is an embedding.

*Proof.* Let $f$ be open and $U \subseteq X$ open. Then $f(U)$ is open in $Y$, so $f(U) = f(U) \cap f(X)$ is open in the
subspace $f(X)$. Hence the bijection $X \to f(X)$ is open, and Theorem 5.5 says it is a homeomorphism. The closed case
is the same with closed sets, using test (2) of Theorem 5.2 for the inverse. $\square$

The most useful test needs compactness, and is proved in [Chapter 8](08-Compactness.md) (Theorem 8.8):

> **A continuous one-to-one map from a compact space to a Hausdorff space is an embedding.**

It explains both non-examples above: $[0, 2\pi)$ and $(-\pi, \pi)$ are not compact. Replace $[0, 2\pi)$ by the closed
interval $[0, \pi]$ and the half-circle map becomes an embedding with no further work.

### The same space, placed differently

Since an embedding $f : X \to Y$ makes $f(X)$ a copy of $X$, two embeddings of the same space differ only in how the copy
sits in $Y$. This is where much of topology's depth lies.

- **In the plane, circles are tame.** The Jordan curve theorem ([Chapter 1](01-What-Topology-Is.md)) says that any
  embedded circle in $\mathbb{R}^2$ splits the plane into an inside and an outside. The stronger Schoenflies theorem
  says the inside together with the curve is homeomorphic to a closed disc. So in the plane every embedded circle sits
  like a round circle.
- **In space, circles can knot.** Embeddings of $S^1$ in $\mathbb{R}^3$ are **knots**, and many of them cannot be moved
  to a round circle ([Chapter 18](18-Knot-Theory.md)).
- **In space, spheres can be wild.** J. W. Alexander described in 1924 an embedding of the sphere $S^2$ in $\mathbb{R}^3$,
  the **Alexander horned sphere**, whose outside region is not homeomorphic to the outside of a round sphere: the outside
  contains loops that cannot be shrunk to a point. So the Schoenflies theorem fails one dimension up.
- **Some spaces need room.** The Klein bottle ([Chapter 6](06-Building-New-Spaces.md)) has no embedding in
  $\mathbb{R}^3$, although it embeds in $\mathbb{R}^4$; pictures of it in three dimensions always pass through themselves.
  The proof that it cannot embed in $\mathbb{R}^3$ needs the tools of [Chapter 16](16-Homology.md).
- **How much room is enough?** Hassler Whitney proved that every smooth manifold of dimension $n$
  ([Chapter 11](11-Manifolds.md)) embeds in $\mathbb{R}^{2n+1}$ (1936), and in fact in $\mathbb{R}^{2n}$ (1944). For
  surfaces ($n = 2$) this gives $\mathbb{R}^4$, which the Klein bottle shows cannot be improved in general.

## A short history

The $\varepsilon$-$\delta$ definition of continuity grew out of the work of Bernard Bolzano (1817) and Augustin-Louis
Cauchy (1821), and took its modern form in Karl Weierstrass's Berlin lectures in the 1860s and 1870s. Maurice Fréchet's
thesis (1906) introduced metric spaces, where the same definition works for functions of functions. Felix Hausdorff's
*Grundzüge der Mengenlehre* (1914) defined topological spaces by axioms on neighbourhoods; Kazimierz Kuratowski (1922)
gave an equivalent definition by axioms for the closure operation. The open-set axioms and the definition of continuity
by preimages, used in this chapter, became the standard over the following decades and are the form in every modern
textbook. Poincaré's *Analysis Situs* (1895) had already used the word homeomorphism and the idea that topology studies
what is unchanged by such maps.

## Check yourself

??? question "1. For $f(x) = x^2$ on $\mathbb{R}$, find $f^{-1}((0, 9))$ and $f^{-1}([4, \infty))$, and the image $f((-1, 2))$. Which of the three sets are open?"

    $f^{-1}((0, 9))$: we need $0 < x^2 < 9$, so $0 < |x| < 3$, giving $(-3, 0) \cup (0, 3)$, which is open.
    $f^{-1}([4, \infty))$: $x^2 \ge 4$ means $|x| \ge 2$, giving $(-\infty, -2] \cup [2, \infty)$, closed (the preimage
    of a closed set). The image $f((-1, 2))$: the values $x^2$ for $-1 < x < 2$ fill $[0, 4)$ ($0$ is reached at $x = 0$,
    and values close to $4$ come from $x$ close to $2$). It is not open, although $(-1, 2)$ is: images of open sets need
    not be open.

??? question "2. Let $S$ be Sierpiński space ($\{0, 1\}$ with open sets $\varnothing$, $\{1\}$, $S$). Which of the four functions $S \to S$ are continuous?"

    The identity and the two constant maps are continuous (Example 1). The swap $0 \leftrightarrow 1$ is not: the
    preimage of the open set $\{1\}$ is $\{0\}$, which is not open. So three of the four are continuous, and the only
    homeomorphism of $S$ is the identity.

??? question "3. Give $\mathbb{R}$ the cofinite topology on both sides. Show that every one-to-one function $\mathbb{R} \to \mathbb{R}$ is continuous. Is every continuous function for the usual topology also continuous for the cofinite one?"

    Closed sets in the cofinite topology are the finite sets and $\mathbb{R}$. If $f$ is one-to-one, the preimage of a
    finite set has at most as many points, so it is finite, hence closed; and $f^{-1}(\mathbb{R}) = \mathbb{R}$. By the
    closed-set test $f$ is continuous. For the second question, no: $\sin$ is continuous in the usual sense but
    $\sin^{-1}(\{0\}) = \{k\pi : k \in \mathbb{Z}\}$ is infinite, so it is not closed in the cofinite topology.

??? question "4. Show that the identity map from $\mathbb{R}$ with the usual topology to $\mathbb{R}$ with the cofinite topology is continuous, but its inverse is not."

    A cofinite-open set is $\mathbb{R}$ minus finitely many points, which is a union of open intervals, hence open in
    the usual topology; so the identity is continuous. The inverse is not: $(0, 1)$ is open in the usual topology, but
    its complement is infinite, so it is not cofinite-open. The usual topology is strictly finer.

??? question "5. Give explicit homeomorphisms $(0, 1) \cong (1, \infty)$ and $[0, 1) \cong [0, \infty)$, with their inverses."

    $x \mapsto 1/x$ sends $(0, 1)$ onto $(1, \infty)$, decreasing, and it is its own inverse formula: $y \mapsto 1/y$.
    For the second, $x \mapsto x / (1 - x)$ sends $[0, 1)$ onto $[0, \infty)$, with inverse $y \mapsto y / (1 + y)$.
    *Check:* $x = 1/2 \mapsto 1 \mapsto 1/2$; $x = 3/4 \mapsto 3 \mapsto 3/4$. All four formulas are continuous on their
    domains.

??? question "6. Using the formula for stereographic projection, where do the equator, the south pole and the point $(0, 1, 0)$ go? Which point of the sphere goes to $(1, 1)$?"

    On the equator $z = 0$, so $\sigma(x, y, 0) = (x, y)$ with $x^2 + y^2 = 1$: the equator goes to the unit circle.
    The south pole $(0, 0, -1)$ goes to $(0, 0)$. The point $(0, 1, 0)$ is on the equator and goes to $(0, 1)$.
    For $(1, 1)$: $u^2 + v^2 = 2$, so $\sigma^{-1}(1, 1) = (2/3, 2/3, 1/3)$. *Check:* $4/9 + 4/9 + 1/9 = 1$, and
    $1 - z = 2/3$ gives $\sigma = ((2/3)/(2/3), (2/3)/(2/3)) = (1, 1)$.

??? question "7. Prove that being $T_1$ (every one-point set is closed) is a topological invariant, and use isolated points to show that $\{0\} \cup \{1/n : n \ge 1\}$ is not homeomorphic to $\{1/n : n \ge 1\}$."

    A homeomorphism $h$ sends closed sets to closed sets, since $h(X \setminus U) = Y \setminus h(U)$ is the complement of
    an open set. If $X$ is $T_1$ and $y \in Y$, then $\{h^{-1}(y)\}$ is closed in $X$, so $\{y\}$ is closed in $Y$.
    In $\{1/n\}$ every point is isolated (Section 5.3). In $\{0\} \cup \{1/n\}$ the point $0$ is not isolated, since every
    open set around $0$ contains points $1/n$. A homeomorphism sends isolated points to isolated points and, applied
    through its inverse, non-isolated points to non-isolated points. So homeomorphic spaces have the same number of
    non-isolated points; here the counts are $1$ and $0$, so the spaces are not homeomorphic.

??? question "8. Give an example where the pasting lemma fails because one piece is not closed, and say exactly which hypothesis breaks."

    Let $X = \mathbb{R}$, $A = (-\infty, 0)$, $B = [0, \infty)$, $f = 0$ on $A$, $g = 1$ on $B$. Each piece is
    continuous and they never overlap, but the glued function is the jump $H$, which is not continuous. The hypothesis
    that fails is "$A$ closed": $A$ is open, not closed, and its closure contains $0$, where the two formulas disagree.

??? question "9. Show that $f : \mathbb{R} \to \mathbb{R}^2$, $f(t) = (t^2, t^3)$, is an embedding."

    $f$ is continuous (polynomial coordinates). It is one-to-one: if $s^3 = t^3$ then $s = t$, since cubing is
    increasing on $\mathbb{R}$. On the image the inverse is $(x, y) \mapsto \sqrt[3]{y}$, the real cube root of the second
    coordinate, which is continuous on $\mathbb{R}^2$ and so on the image. So $f$ is a homeomorphism onto its image.

??? question "10. Prove that the circle minus one point is homeomorphic to $\mathbb{R}$, using a one-dimensional stereographic projection."

    Remove $N = (0, 1)$ from $S^1$ and send $(x, y)$ to where the line from $N$ through $(x, y)$ meets the $x$-axis:
    $\sigma(x, y) = x/(1 - y)$. The inverse is $u \mapsto \left( \frac{2u}{u^2 + 1}, \frac{u^2 - 1}{u^2 + 1} \right)$.
    *Check:* $(2u)^2 + (u^2 - 1)^2 = u^4 + 2u^2 + 1 = (u^2 + 1)^2$, so the point is on the circle; and
    $1 - y = 2/(u^2 + 1)$, so $\sigma$ returns $\frac{2u}{u^2+1} \cdot \frac{u^2+1}{2} = u$. Both maps are continuous, so
    $S^1 \setminus \{N\} \cong \mathbb{R}$. Compare Theorem 5.7: removing one point changes the topology of the circle.

??? question "11. Prove that there is no continuous one-to-one map from $\mathbb{R}^2$ to $\mathbb{R}$. Is there a continuous map from $\mathbb{R}^2$ onto $\mathbb{R}$?"

    If $g : \mathbb{R}^2 \to \mathbb{R}$ were continuous and one-to-one, its restriction to the unit circle would be a
    continuous one-to-one map $S^1 \to \mathbb{R}$, impossible by Theorem 5.7. Onto maps do exist: $(x, y) \mapsto x$ is
    continuous and onto. Squeezing a plane onto a line is easy; it is putting it in one-to-one that is impossible.

??? question "12. Let $h : X \to Y$ be a homeomorphism and $A \subseteq X$. Prove that $h(\overline{A}) = \overline{h(A)}$ and $h(\partial A) = \partial h(A)$, where $\partial$ means boundary."

    Test (4) of Theorem 5.2 for $h$ gives $h(\overline{A}) \subseteq \overline{h(A)}$. Applied to $h^{-1}$ and the set
    $h(A)$ it gives $h^{-1}(\overline{h(A)}) \subseteq \overline{A}$, that is, $\overline{h(A)} \subseteq h(\overline{A})$.
    So they are equal. The same holds for interiors, by applying the closure result to complements
    (interior of $A$ is the complement of the closure of the complement, and $h$ preserves complements). The boundary is
    closure minus interior, and $h$ is a bijection, so it preserves the difference too: $h(\partial A) = \partial h(A)$.

## What you learned

- A map is continuous when the preimage of every open set is open. In metric spaces this is exactly the
  $\varepsilon$-$\delta$ definition, but it makes sense in every topological space.
- Equivalent tests: preimages of closed sets are closed; preimages of basis sets are open; $f(\overline{A}) \subseteq \overline{f(A)}$.
  Compositions of continuous maps are continuous, and the pasting lemma glues maps defined on closed pieces.
- In general spaces, preserving limits of sequences is weaker than continuity.
- A homeomorphism is a bijection, continuous both ways; a continuous bijection need not be one. Homeomorphic spaces are
  the same space with the points renamed.
- An interval is homeomorphic to the line, a square to a circle, a sphere minus a point to the plane; a circle is not
  homeomorphic to any subset of the line, because every continuous real function on a circle agrees at two opposite
  points.
- Topological invariants are properties defined by open sets alone; they prove spaces different, never the same.
- An embedding places a faithful copy of a space inside another; the same space can sit in different ways, which is
  where knots and wild spheres come from.

**Next:** [Chapter 6](06-Building-New-Spaces.md), building new spaces from old ones by products and by gluing: the torus,
the Möbius strip, the Klein bottle and the projective plane.

## Further reading

- J. R. Munkres, *Topology*, 2nd edition, 2000 (Section 18: continuous functions and homeomorphisms).
- M. A. Armstrong, *Basic Topology*, 1983 (Chapter 2, with many pictures of homeomorphisms).
- W. A. Sutherland, *Introduction to Metric and Topological Spaces*, 2nd edition, 2009 (the passage from metric to
  topological continuity, very carefully).
- L. A. Steen and J. A. Seebach, *Counterexamples in Topology*, 1970 (the cofinite, cocountable and Sierpiński spaces,
  and many more).
- F. Hausdorff, *Grundzüge der Mengenlehre*, 1914.
- J. W. Alexander, "An example of a simply connected surface bounding a region which is not simply connected",
  *Proceedings of the National Academy of Sciences* 10, 1924.
- Other books on this site: [Calculus, Chapter 3: Continuity](../calculus/03-Continuity.md),
  [Calculus, Chapter 20: Metric spaces](../calculus/20-Metric-Spaces-and-Topology-of-R.md),
  [Geometry, Chapter 16: Spherical geometry](../geometry/16-Spherical-Geometry.md) (maps of a sphere),
  [Logic, Chapter 6: Relations and functions](../logic/06-Relations-and-Functions.md).
- U of T guides: [MAT257 Unit 3, Continuity and connectedness](../../uoft/MAT257Y1/unit03.md),
  [MAT158 Unit 4, Continuous functions](../../uoft/MAT158H1/unit04.md).
- Topics lessons: [Continuity](../../topics/change/level-7/02-continuity.md).
