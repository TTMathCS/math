# 7. Connectedness

*The real line and the plane have the same number of points, and both are "smooth and infinite in every direction". Are
they homeomorphic? Chapter 5 could not say. This chapter introduces the first invariant strong enough to answer such
questions: whether a space is in one piece. We define "one piece" using open sets alone, prove that intervals are
connected (it is the completeness of the real numbers in disguise), recover the intermediate value theorem as a
one-line corollary, meet a famous space that is in one piece yet cannot be walked across, and then use connectedness to
prove that the line is not the plane, that a circle is not a segment, and which letters of the alphabet are the same
shape.*

!!! abstract "In this chapter"
    **You will learn:**

    - the definition of a connected space, and three equivalent ways to test it
    - a proof that intervals are connected and that the connected subsets of the line are exactly the intervals
    - why continuous images of connected spaces are connected, and why that is the intermediate value theorem
    - path connectedness, and the topologist's sine curve, which is connected but not path connected (with proof)
    - components and path components, and how to count them
    - how removing points proves that $\mathbb{R} \not\cong \mathbb{R}^2$, that $[0, 1]$, $[0, 1)$ and $(0, 1)$ are all different, and which letters are homeomorphic

    **You need:** [Chapter 5](05-Continuity-and-Homeomorphism.md) (continuity, homeomorphisms, invariants) and the
    subspace topology from [Chapter 4](04-Topological-Spaces.md). From the Calculus book: the least upper bound property
    ([Chapter 18](../calculus/18-The-Real-Numbers.md)) and the intermediate value theorem
    ([Chapter 3](../calculus/03-Continuity.md)). Gentler version of the IVT: [Continuity](../../topics/change/level-7/02-continuity.md)
    in the Topics shelf.

    **Levels:** 7.1, 7.2, 7.4 and 7.5 are intermediate; 7.3 is advanced.

## 7.1 Connected spaces

What should "in one piece" mean? A first try is "you can walk from any point to any other". That is a good idea, and it
becomes path connectedness in Section 7.3, but it turns out to be a slightly different notion. The basic definition
comes from the opposite direction: a space is in **two** pieces if it can be split into two parts, each of which is
open, so that neither part touches the other.

Look at the rational numbers $\mathbb{Q}$. Cut them at $\sqrt{2}$:

$$
A = \{q \in \mathbb{Q} : q < \sqrt{2}\}, \qquad B = \{q \in \mathbb{Q} : q > \sqrt{2}\}.
$$

Every rational is in exactly one of them, since $\sqrt{2}$ is not rational. Both are open in $\mathbb{Q}$ (each is the
intersection of $\mathbb{Q}$ with an open half-line). Neither is empty. So $\mathbb{Q}$ falls apart into two open
pieces: there is a "gap" at $\sqrt{2}$ that the rationals do not fill. The real line has no such gap, and we will prove
that it cannot be split.

**Definition.** A **separation** of a space $X$ is a pair of nonempty, disjoint open sets $U$ and $V$ with
$U \cup V = X$. The space $X$ is **connected** if it has no separation. A subset $A$ of a space is connected if it is
connected in the subspace topology.

**Theorem 7.1.** For a space $X$ the following are equivalent.

1. $X$ is connected.
2. The only subsets of $X$ that are both open and closed (**clopen**) are $\varnothing$ and $X$.
3. Every continuous map $f : X \to \{0, 1\}$, where $\{0, 1\}$ has the discrete topology, is constant.

*Proof.* (1 ⇔ 2) If $U, V$ is a separation, then $U = X \setminus V$ is closed as well as open, and it is neither empty
nor all of $X$. Conversely, if $U$ is clopen and neither $\varnothing$ nor $X$, then $U$ and $X \setminus U$ form a
separation.

(2 ⇔ 3) A function $f : X \to \{0, 1\}$ is continuous exactly when $f^{-1}(0)$ and $f^{-1}(1)$ are open (all subsets of
$\{0, 1\}$ are open). Since they are complements of each other, this says that $f^{-1}(1)$ is clopen. So nonconstant
continuous maps to $\{0, 1\}$ match clopen sets other than $\varnothing$ and $X$. $\square$

Form 3 is often the quickest to use: to prove a space connected, take any continuous "colouring" of it with two colours
and show that it uses only one.

### First examples

- A discrete space with at least two points is not connected: any one point is clopen.
- An indiscrete space is connected: its only open sets are $\varnothing$ and $X$.
- Sierpiński space ([Chapter 5](05-Continuity-and-Homeomorphism.md)) is connected: its only nonempty open sets are
  $\{1\}$ and the whole space, and they are not disjoint.
- An infinite set with the cofinite topology is connected. Two nonempty open sets $U$ and $V$ have finite complements, so
  $U \cap V$ has complement $(X \setminus U) \cup (X \setminus V)$, which is finite, so $U \cap V$ is not empty. No two
  nonempty open sets are disjoint, so there is no separation.
- $\mathbb{Q}$ is not connected (the cut at $\sqrt{2}$ above). Neither is $\mathbb{R} \setminus \{0\}$: the two half-lines
  separate it.
- For finite spaces, adapting the program in Section 5.3 shows that 19 of the 29 topologies on a three-point set are
  connected.

### Intervals are connected

An **interval** is a subset $I$ of $\mathbb{R}$ with the betweenness property: if $x, y \in I$ and $x < z < y$, then
$z \in I$. This covers all the kinds: $[a, b]$, $(a, b)$, $[a, b)$, half-lines, $\mathbb{R}$ itself, single points.

**Theorem 7.2.** Every interval is connected.

*Proof.* Suppose an interval $I$ had a separation $I = A \cup B$, with $A$ and $B$ nonempty, disjoint and open in $I$.
Pick $a \in A$ and $b \in B$; swapping the names if needed, $a < b$. Then $[a, b] \subseteq I$. Let

$$
s = \sup \big( A \cap [a, b] \big).
$$

The set is nonempty (it contains $a$) and bounded above by $b$, so the supremum exists by the completeness of
$\mathbb{R}$ ([Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md)), and $a \le s \le b$. So $s \in I$, and $s$
is in $A$ or in $B$.

*Case $s \in A$.* Then $s \ne b$, so $s < b$. Since $A$ is open in $I$, there is an $\varepsilon > 0$ with
$(s - \varepsilon, s + \varepsilon) \cap I \subseteq A$. Then the points of $[a, b]$ a little to the right of $s$, such as
$\min(s + \varepsilon/2, b)$, are in $A \cap [a, b]$ and larger than $s$. That contradicts $s$ being an upper bound.
(If $\min(s + \varepsilon/2, b) = b$, we get $b \in A$, which is also impossible.)

*Case $s \in B$.* Then $s \ne a$, so $s > a$. Since $B$ is open in $I$, some $(s - \varepsilon, s + \varepsilon) \cap I$
lies in $B$, so no point of $(s - \varepsilon, s]$ is in $A$. Then every element of $A \cap [a, b]$ is at most
$s - \varepsilon$, so $s - \varepsilon$ is a smaller upper bound. That contradicts $s$ being the least upper bound.

Both cases are impossible, so there is no separation. $\square$

Where did we use that we were in $\mathbb{R}$ and not in $\mathbb{Q}$? Only in the existence of $s$. In $\mathbb{Q}$ the
set $A \cap [a, b]$ from the $\sqrt{2}$ cut has no least upper bound, and the argument breaks exactly there.
**Connectedness of the line is completeness, seen topologically.**

**Theorem 7.3.** A subset of $\mathbb{R}$ is connected if and only if it is an interval.

*Proof.* Intervals are connected by Theorem 7.2. If $A$ is not an interval, there are $x, y \in A$ and $z \notin A$
with $x < z < y$. Then $A \cap (-\infty, z)$ and $A \cap (z, \infty)$ are open in $A$, disjoint, cover $A$ (because
$z \notin A$), and are nonempty (they contain $x$ and $y$). That is a separation. $\square$

## 7.2 Continuous images and the intermediate value theorem

**Theorem 7.4.** If $X$ is connected and $f : X \to Y$ is continuous, then $f(X)$ is connected.

*Proof.* Let $g : f(X) \to \{0, 1\}$ be continuous. Then $g \circ f : X \to \{0, 1\}$ is continuous (a composition;
$f$ is continuous as a map into the subspace $f(X)$), so it is constant because $X$ is connected. Every point of $f(X)$
is some $f(x)$, so $g$ is constant. By Theorem 7.1, $f(X)$ is connected. $\square$

Two consequences follow at once. First, **connectedness is a topological invariant**: if $X \cong Y$ then $Y = h(X)$ for
a homeomorphism $h$, so $Y$ is connected when $X$ is. Second, the theorem every calculus student knows:

**Corollary 7.5 (intermediate value theorem).** Let $X$ be connected and $f : X \to \mathbb{R}$ continuous. If $f$ takes
the values $u < w$, then it takes every value in between.

*Proof.* $f(X)$ is a connected subset of $\mathbb{R}$, hence an interval (Theorem 7.3), and it contains $u$ and $w$. $\square$

With $X = [a, b]$ this is the version in [Calculus, Chapter 3](../calculus/03-Continuity.md). Notice how the proof has
been split into two independent facts: intervals are connected (a fact about $\mathbb{R}$), and continuous maps preserve
connectedness (a fact about continuity). Neither piece needs the other.

### Applications

**Roots of polynomials.** $p(x) = x^3 - 3x + 1$ has $p(-2) = -1$, $p(0) = 1$, $p(1) = -1$ and $p(2) = 3$. The signs change
three times, so $p$ has a root in each of $(-2, 0)$, $(0, 1)$ and $(1, 2)$: three real roots, which is the most a cubic can
have.

**A fixed point theorem in dimension one.** Every continuous $f : [0, 1] \to [0, 1]$ has a **fixed point**, a point with
$f(x) = x$.

*Proof.* Let $g(x) = f(x) - x$, continuous on $[0, 1]$. Then $g(0) = f(0) \ge 0$ and $g(1) = f(1) - 1 \le 0$. By the IVT,
$g(c) = 0$ for some $c$, that is, $f(c) = c$. $\square$

Brouwer's fixed point theorem says the same for continuous maps of a disc, or a ball of any dimension, to itself. The
IVT proof does not generalise; the disc case needs the fundamental group ([Chapter 14](14-The-Circle-and-Covering-Spaces.md))
and the general case needs homology ([Chapter 17](17-Applications-of-Algebraic-Topology.md)).

The IVT also gives a way to find the fixed point: halve the interval, keep the half where $g$ changes sign, repeat.

**Try it in Python.**

```python
import math

def fixed_point(f, a=0.0, b=1.0, steps=50):
    g = lambda x: f(x) - x          # g(a) >= 0 >= g(b)
    for _ in range(steps):
        m = (a + b) / 2
        if g(m) >= 0:
            a = m
        else:
            b = m
    return (a + b) / 2

c = fixed_point(math.cos)           # cos maps [0, 1] into [0, 1]
print(c, math.cos(c))               # both about 0.739085133215160
```

Each step halves the interval, so 50 steps pin the fixed point of $\cos$ down to within $2^{-50}$. *Check:*
$\cos(0.7390851332) \approx 0.7390851332$.

**Opposite points with equal temperature.** In [Chapter 5](05-Continuity-and-Homeomorphism.md) the IVT showed that every
continuous function on a circle takes equal values at some pair of opposite points. That argument is really a
connectedness argument: the function $\varphi(t) = g(p_t) - g(-p_t)$ on the connected space $[0, \pi]$ takes a value and
its negative, so it takes $0$.

**Cutting a region in half.** Let $R$ be a bounded region in the plane and let $A(t)$ be the area of the part of $R$ to
the left of the vertical line $x = t$. Then $A$ changes by at most $h \cdot |t - t'|$ when $t$ moves to $t'$, where $h$ is
the height of a box containing $R$, so $A$ is continuous. It goes from $0$ (far left) to the whole area (far right), so
by the IVT some vertical line cuts $R$ into two halves of equal area. The same works for lines in any fixed direction.
(Cutting **two** regions in half with one line needs the Borsuk-Ulam theorem of [Chapter 14](14-The-Circle-and-Covering-Spaces.md).)

### Building connected spaces

**Theorem 7.6.**
(a) If connected subsets $A_i$ of $X$ all contain one common point $p$, then $\bigcup_i A_i$ is connected.
(b) If $A$ is connected and $A \subseteq B \subseteq \overline{A}$, then $B$ is connected. In particular the closure of a
connected set is connected.
(c) If $X$ and $Y$ are connected, so is $X \times Y$.

*Proof.* (a) Let $f : \bigcup A_i \to \{0, 1\}$ be continuous. On each $A_i$ it is constant (since $A_i$ is connected),
and that constant is $f(p)$, because $p \in A_i$. So $f$ is constant.

(b) Let $f : B \to \{0, 1\}$ be continuous. It is constant on $A$, say equal to $0$. The set $f^{-1}(0)$ is closed in $B$
and contains $A$, so it contains the closure of $A$ in $B$, which is $\overline{A} \cap B = B$. So $f$ is constant.

(c) Fix a point $(x_0, y_0)$. For each $(x, y)$, the set $T_{x, y} = (X \times \{y_0\}) \cup (\{x\} \times Y)$ is a
union of a copy of $X$ and a copy of $Y$ that share the point $(x, y_0)$, so it is connected by (a). Every $T_{x, y}$
contains $(x_0, y_0)$ (it lies in $X \times \{y_0\}$) and $(x, y)$. So $X \times Y = \bigcup T_{x, y}$ is a union of
connected sets with a common point, connected by (a) again. $\square$

By induction on (c), $\mathbb{R}^n$ and every box $[a_1, b_1] \times \cdots \times [a_n, b_n]$ are connected; so are the
torus $S^1 \times S^1$ and the cylinder $S^1 \times [0, 1]$, once we know $S^1$ is connected. It is: $S^1$ is the image of
$[0, 2\pi]$ under $t \mapsto (\cos t, \sin t)$. For $n \ge 2$ the sphere $S^n$ is the union of the great circles through its
north pole; each is a copy of $S^1$, all contain the north pole, and every point of the sphere lies on one of them, so
(a) applies. (Products of infinitely many connected spaces are connected too, in the product topology; the proof adds an
approximation argument.)

## 7.3 Path connectedness

*Level: advanced.* Now the "walking" idea.

**Definition.** A **path** in $X$ from $p$ to $q$ is a continuous map $\gamma : [0, 1] \to X$ with $\gamma(0) = p$ and
$\gamma(1) = q$. The space $X$ is **path connected** if any two of its points are joined by a path.

Paths can be reversed, $t \mapsto \gamma(1 - t)$, and joined end to end: if $\gamma$ goes from $p$ to $q$ and $\delta$
from $q$ to $r$, then running $\gamma$ at double speed on $[0, \tfrac12]$ and $\delta$ on $[\tfrac12, 1]$ is continuous by
the pasting lemma (Theorem 5.4). These two operations are the seed of the fundamental group in
[Chapter 13](13-The-Fundamental-Group.md).

**Theorem 7.7.** Every path connected space is connected.

*Proof.* Fix $p \in X$. For each $x$ choose a path $\gamma_x$ from $p$ to $x$. Its image $\gamma_x([0, 1])$ is connected
(Theorems 7.2 and 7.4) and contains $p$ and $x$. So $X$ is the union of connected sets all containing $p$, connected by
Theorem 7.6(a). $\square$

### Examples

- A **convex** set in $\mathbb{R}^n$ (one that contains the segment between any two of its points) is path connected:
  use $\gamma(t) = (1 - t)p + tq$. Balls, boxes, half-planes, $\mathbb{R}^n$ itself.
- For $n \ge 2$, $\mathbb{R}^n \setminus \{0\}$ is path connected. Let $p, q \ne 0$. If the segment from $p$ to $q$
  misses $0$, use it. If not, $0$ lies on the line through $p$ and $q$; choose a point $r$ off that line (possible since
  $n \ge 2$) and go from $p$ to $r$ to $q$ along segments. The segment from $p$ to $r$ meets the line $pq$ only at $p$,
  which is not $0$; likewise for the segment from $r$ to $q$. So this path avoids $0$.
- $S^n$ is path connected for $n \ge 1$, being the image of $\mathbb{R}^{n+1} \setminus \{0\}$ under $x \mapsto x / \lVert x \rVert$
  (a path upstairs maps to a path on the sphere).

For nice spaces, the two notions agree:

**Theorem 7.8.** A connected open subset $U$ of $\mathbb{R}^n$ is path connected.

*Proof.* Fix $p \in U$ and let $P$ be the set of points of $U$ that can be joined to $p$ by a path in $U$. $P$ is not
empty ($p \in P$, by the constant path).

$P$ is open: if $x \in P$, some ball $B(x, r)$ lies in $U$; every point of the ball is joined to $x$ by a straight segment
inside the ball, and joining that to a path from $p$ to $x$ gives a path from $p$.

$U \setminus P$ is open: if $x \notin P$ and $B(x, r) \subseteq U$, then no point $y$ of the ball is in $P$, because a path
from $p$ to $y$ followed by the segment from $y$ to $x$ would put $x$ in $P$.

So $P$ is clopen in $U$ and nonempty. Since $U$ is connected, $P = U$. $\square$

The proof used only one thing about $\mathbb{R}^n$: every point has small path connected neighbourhoods (the balls). A
space with this property is **locally path connected**, and the same proof shows that a connected, locally path connected
space is path connected. Manifolds ([Chapter 11](11-Manifolds.md)) are all locally path connected, so for them connected
and path connected mean the same.

### The topologist's sine curve

Here is a space that is in one piece but cannot be walked across. Let

$$
G = \left\{ \left( x, \sin \tfrac{1}{x} \right) : 0 < x \le 1 \right\}, \qquad J = \{0\} \times [-1, 1], \qquad S = G \cup J.
$$

$G$ is the graph of $\sin(1/x)$, which oscillates faster and faster as $x$ approaches $0$, sweeping up and down between
$-1$ and $1$ infinitely often. $J$ is the vertical segment that the graph piles up against. $S$ is called the
**topologist's sine curve**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 165" role="img" aria-label="The topologist's sine curve. The graph of sine of 1 over x for x between 0 and 1 oscillates more and more rapidly as x approaches 0, between heights minus 1 and 1. A vertical segment on the y axis from minus 1 to 1 is drawn in a second colour; the graph accumulates on it but never reaches it.">
  <line x1="20" y1="85" x2="325" y2="85" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
  <line x1="30" y1="30" x2="30" y2="140" stroke="#eea66f" stroke-width="3.5"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="1.4" points="310.0,39 289.3,36 270.1,34 252.3,33 235.8,31 220.6,30 206.4,30 193.4,31 181.3,32 170.1,35 159.7,39 150.1,45 141.2,53 133.0,62 125.3,74 118.3,87 111.7,100 105.7,114 100.1,126 94.9,136 90.1,140 85.6,137 81.5,126 77.7,107 74.2,82 70.9,56 68.0,36 65.5,30 63.3,39 61.3,60 59.6,87 58.0,114 56.6,134 55.4,140 54.2,131 53.2,110 52.2,83 51.3,56 50.5,36 49.7,30 49.0,39 48.4,60 47.8,87 47.2,114 46.7,134 46.2,140 45.7,131 45.2,110 44.8,83 44.4,56 44.0,36 43.7,30 43.3,39 43.0,60 42.7,87 42.4,114 42.1,134 41.9,140 41.6,131 41.4,110 41.1,83 40.9,56 40.7,36 40.5,30 40.3,39 40.1,60 39.9,87 39.7,114 39.5,134 39.4,140 39.2,131 39.1,110 38.9,83 38.8,56 38.6,36 38.5,30 38.3,39 38.2,60 38.1,87 38.0,114 37.9,134 37.7,140 37.6,131 37.5,110 37.4,83 37.3,56 37.2,36 37.1,30 37.0,39 36.9,60 36.8,87 36.8,114 36.7,134 36.6,140 36.5,131 36.4,110 36.4,83 36.3,56 36.2,36 36.1,30 36.1,39 36.0,60 35.9,87 35.9,114 35.8,134 35.7,140 35.7,131 35.6,110 35.6,83 35.5,56 35.5,36 35.4,30 35.3,39 35.3,60 35.2,87 35.2,114 35.1,134 35.1,140 35.0,131"/>
  <circle cx="310" cy="39" r="2.5" fill="currentColor"/>
  <g fill="currentColor" font-size="11">
    <text x="36" y="158">J</text><text x="200" y="22">G: y = sin(1/x)</text>
    <text x="292" y="58">(1, sin 1)</text><text x="8" y="34">1</text><text x="2" y="144">−1</text>
  </g>
</svg>
</div>

**Theorem 7.9.** The topologist's sine curve $S$ is connected but not path connected.

*Proof that $S$ is connected.* $G$ is the image of the interval $(0, 1]$ under the continuous map
$x \mapsto (x, \sin(1/x))$, so it is connected. Every point $(0, y)$ of $J$ is a limit of points of $G$: write
$y = \sin\theta$ with $\theta \in [-\pi/2, \pi/2]$ and let $x_k = 1/(\theta + 2\pi k)$ for $k = 1, 2, \dots$. Then
$x_k \to 0$, each $x_k$ is in $(0, 1]$, and $\sin(1/x_k) = \sin(\theta + 2\pi k) = y$. So the points $(x_k, y)$ of $G$
converge to $(0, y)$. Hence $G \subseteq S \subseteq \overline{G}$, and $S$ is connected by Theorem 7.6(b).

*Proof that $S$ is not path connected.* Suppose $\gamma : [0, 1] \to S$ were a path from $(0, 0)$ to $(1, \sin 1)$.
Write $\gamma(t) = (x(t), y(t))$; both coordinates are continuous. The set $T = \{t : \gamma(t) \in J\} = \gamma^{-1}(J)$
is closed (it is the preimage of the closed set $J$), contains $0$, and does not contain $1$. A closed bounded nonempty
set of reals contains its supremum, so $t_0 = \sup T$ is in $T$, and $t_0 < 1$. Thus $x(t_0) = 0$, and for every
$t > t_0$ the point $\gamma(t)$ is in $G$, so $x(t) > 0$ and $y(t) = \sin(1/x(t))$.

Now let $\delta > 0$ be small (with $t_0 + \delta \le 1$) and put $a = x(t_0 + \delta) > 0$. On the interval
$[t_0, t_0 + \delta]$, the continuous function $x$ takes the values $0$ and $a$, so by the IVT it takes every value in
between. Choose $k$ so large that both $u = \dfrac{1}{\pi/2 + 2\pi k}$ and $w = \dfrac{1}{3\pi/2 + 2\pi k}$ are less than
$a$. There are times $t_1, t_2$ in $(t_0, t_0 + \delta]$ with $x(t_1) = u$ and $x(t_2) = w$, and then
$y(t_1) = \sin(\pi/2 + 2\pi k) = 1$ and $y(t_2) = \sin(3\pi/2 + 2\pi k) = -1$.

So in every interval $(t_0, t_0 + \delta]$, however short, $y$ takes both values $1$ and $-1$. Then $y(t)$ cannot tend to
$y(t_0)$ as $t \to t_0$ from the right: whatever $y(t_0)$ is, one of $1$ and $-1$ is at distance at least $1$ from it.
This contradicts the continuity of $y$. $\square$

What goes wrong is that $S$ is not locally path connected: near a point of $J$, the space consists of $J$ together with
infinitely many short arcs of $G$, none of which is joined to $J$ inside the neighbourhood. Connectedness is "cannot be
split by open sets"; path connectedness is "can be walked". They agree for the spaces we mostly care about, but they are
not the same idea.

## 7.4 Components

A space that is not connected falls into pieces. What exactly are the pieces?

Say $x \approx y$ if some connected subset of $X$ contains both $x$ and $y$. This is an equivalence relation: reflexive
(the one-point set $\{x\}$ is connected), symmetric, and transitive, since if $A$ contains $x, y$ and $B$ contains
$y, z$, then $A \cup B$ is connected by Theorem 7.6(a) (they share $y$) and contains $x$ and $z$. The equivalence
classes are the **components** (or connected components) of $X$.

**Theorem 7.10.** The components of $X$ are connected, closed, pairwise disjoint and cover $X$. Every connected subset of
$X$ lies inside one component. So the components are the maximal connected subsets of $X$.

*Proof.* The component $C$ of $x$ is the union of all connected sets containing $x$ (by definition of $\approx$), so it
is connected by Theorem 7.6(a). A connected set $A$ meeting $C$ at a point $y$ consists of points $\approx y \approx x$,
so $A \subseteq C$. The closure $\overline{C}$ is connected (Theorem 7.6(b)) and contains $x$, so $\overline{C} \subseteq C$:
$C$ is closed. Disjointness and covering hold for the classes of any equivalence relation. $\square$

In the same way, the **path components** are the classes of the relation "joined by a path" (an equivalence relation
by reversing and joining paths). Each path component is path connected, and lies inside a component, since its points
are joined by paths, whose images are connected.

**Components are invariants.** A homeomorphism $h : X \to Y$ sends connected sets to connected sets and so maps
components onto components, one for one (its inverse does the same). So **the number of components is a topological
invariant**, and so is the number of path components.

### Examples

- $\mathbb{R} \setminus \{0\}$ has two components, $(-\infty, 0)$ and $(0, \infty)$: each is an interval, hence
  connected, and no connected set can contain points of both, since it would be a connected subset of $\mathbb{R}$
  containing a negative and a positive number but not $0$, which is not an interval.
- In $\mathbb{Q}$ every component is a single point: a connected subset of $\mathbb{Q}$ is a connected subset of
  $\mathbb{R}$, hence an interval, and an interval with two points contains irrationals. A space whose components are
  single points is **totally disconnected**. Note that the components $\{q\}$ are not open in $\mathbb{Q}$: components
  are always closed but need not be open.
- The **Cantor set** $K$ (what is left of $[0, 1]$ after repeatedly removing open middle thirds,
  [Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md)) is totally disconnected. Let $x < y$ in $K$.
  Choose $n$ with $3^{-n} < y - x$. After $n$ steps, $K$ lies in $2^n$ closed intervals of length $3^{-n}$, so $x$ and $y$
  are in different ones, and between those two intervals lies a removed gap containing a point $z \notin K$. Then
  $K \cap (-\infty, z)$ and $K \cap (z, \infty)$ separate $x$ from $y$. Yet $K$ is uncountable and has no isolated points.
- The topologist's sine curve has **one component** but **two path components**, $G$ and $J$. Each is path connected
  ($G$ is the image of an interval, $J$ is a segment), and Theorem 7.9 showed that no path joins them.
- $\mathbb{Q} \times \mathbb{R}$ (a subspace of the plane) has as components the vertical lines $\{q\} \times \mathbb{R}$
  (exercise 8).

When are components open? If every point has at least one connected open neighbourhood (for example, in a **locally
connected** space, in which every point has arbitrarily small connected open neighbourhoods), then a component $C$
contains, with each of its points, a connected open neighbourhood of it (that neighbourhood is connected and meets $C$, so
it lies in $C$). So $C$ is open. This is the case for open subsets of $\mathbb{R}^n$, for manifolds, and for all the
graphs and cell complexes of this book. In particular an open subset of $\mathbb{R}$ is a disjoint union of open
intervals, its components, and there are at most countably many of them, since each contains a rational.

## 7.5 Using connectedness to tell spaces apart

Connectedness alone does not separate $\mathbb{R}$ from $\mathbb{R}^2$: both are connected. The trick is to remove a
point and look again.

If $h : X \to Y$ is a homeomorphism and $p \in X$, then $h$ restricts to a homeomorphism
$X \setminus \{p\} \cong Y \setminus \{h(p)\}$ (a restriction of a homeomorphism to a subspace is a homeomorphism onto
the image). So the number of components of $X \setminus \{p\}$ equals the number of components of $Y \setminus \{h(p)\}$.
Call a point $p$ of a connected space $X$ a **cut point** if $X \setminus \{p\}$ is disconnected. Homeomorphisms send cut
points to cut points, and more precisely they preserve, for each $k$, the number of points whose removal leaves exactly
$k$ components.

**Theorem 7.11.** $\mathbb{R}$ is not homeomorphic to $\mathbb{R}^n$ for any $n \ge 2$.

*Proof.* Every point of $\mathbb{R}$ is a cut point: $\mathbb{R} \setminus \{p\}$ is two half-lines. No point of
$\mathbb{R}^n$ is a cut point: $\mathbb{R}^n \setminus \{q\}$ is homeomorphic to $\mathbb{R}^n \setminus \{0\}$ (by a
translation) and that is path connected (Section 7.3), hence connected. A homeomorphism would send a cut point to a cut
point. $\square$

So a line and a plane, which have exactly the same number of points ([Logic, Chapter 7](../logic/07-Infinity-and-Cardinality.md)),
are topologically different. Cantor's bijection between them must be wildly discontinuous.

**Theorem 7.12.** The intervals $[0, 1]$, $[0, 1)$ and $(0, 1)$ are pairwise non-homeomorphic.

*Proof.* Count the points that are **not** cut points. Removing an interior point from any of the three leaves two
intervals, which is disconnected (Theorem 7.3). Removing an endpoint leaves an interval, still connected. So $[0, 1]$ has
exactly two non-cut points, $[0, 1)$ has one, and $(0, 1)$ has none. The counts differ. $\square$

Combined with Chapter 5: every interval with more than one point is homeomorphic to exactly one of $[0, 1]$, $[0, 1)$,
$(0, 1)$, and these three are different. So there are exactly three "shapes" of nondegenerate interval.

**The circle.** No point of $S^1$ is a cut point: removing a point leaves a space homeomorphic to $\mathbb{R}$
(stereographic projection, Chapter 5, exercise 10), which is connected. So $S^1$ is not homeomorphic to any interval with
more than one point, all of which have cut points. This gives a second proof of part of Theorem 5.7, and it extends:

- **The circle is not the figure eight.** Removing the crossing point from the figure eight $S^1 \vee S^1$ leaves two open
  arcs, two components; removing any point from the circle leaves one.
- **The circle is not the sphere.** Remove two points. From $S^1$ this leaves two open arcs (remove one point to get a
  copy of $\mathbb{R}$, then a second point cuts the line). From $S^2$ it leaves a copy of $\mathbb{R}^2$ minus a point
  (stereographic projection from one of the two removed points), which is connected.

**Continuous injections again.** Here is a short proof that there is no continuous one-to-one $f : S^1 \to \mathbb{R}$,
using only connectedness. The image $f(S^1)$ is connected, so it is an interval $I$, with more than one point because $f$
is one-to-one. Pick $p \in S^1$ with $f(p)$ an interior point of $I$. Then $f(S^1 \setminus \{p\})$ is connected (a
continuous image of a copy of $\mathbb{R}$), but since $f$ is one-to-one it equals $I \setminus \{f(p)\}$, which is
disconnected. Contradiction.

### Letters of the alphabet

In [Chapter 1](01-What-Topology-Is.md) we sorted capital letters (drawn as simple strokes, without serifs) by shape,
trusting our eyes. Now we can prove the "different" half. For each point $p$ of a letter, count the components of the
letter with $p$ removed.

- In **X**, the crossing point leaves **4** components; every other point leaves at most 2.
- In **T** and **Y**, the junction leaves **3**; every other point at most 2. In **E** and **F**, the junction where the
  middle arm meets the upright leaves 3, and the corners are just bends, which leave 2.
- In **I**, **L**, **M**, **N**, **S**, **Z** every point leaves at most 2, and the two ends leave 1.
- In **O**, every point leaves 1: no cut points at all.

Since homeomorphisms preserve these counts, X is not homeomorphic to T, T is not homeomorphic to I, and O is not
homeomorphic to any of them. The counts agree within each group, and in these cases the letters really are homeomorphic:
E, F, T and Y are each three arcs joined at one point, and I, L, M, N, S, Z are each a single arc. (An invariant that
agrees does not prove "same"; there we must write down the homeomorphism, which here is easy: straighten and bend the
strokes.) The letter K, drawn with both arms meeting the upright at one point, is homeomorphic to X.

### What point removal cannot do

Does removing a point tell $\mathbb{R}^2$ from $\mathbb{R}^3$? No: both stay connected. Removing a line does not help
either, since a homeomorphism need not send lines to lines. The difference between $\mathbb{R}^2 \setminus \{0\}$ and
$\mathbb{R}^3 \setminus \{0\}$ is subtler: in the first, a loop around the missing point cannot be shrunk to a point; in
the second, every loop can. Making that precise is the job of the fundamental group
([Chapters 13](13-The-Fundamental-Group.md) and [14](14-The-Circle-and-Covering-Spaces.md)). In general,
$\mathbb{R}^m \not\cong \mathbb{R}^n$ for $m \ne n$ is a real theorem (invariance of dimension, proved by Brouwer in
1911), and the cleanest proof uses homology ([Chapters 11](11-Manifolds.md) and [16](16-Homology.md)).

## A short history

Georg Cantor gave a definition of connected sets of points in 1883, in the course of his work on the structure of the
continuum. The definition by separations used in this chapter took its modern form in the early twentieth century, in
work of N. J. Lennes and of Felix Hausdorff, and Bronisław Knaster and Kazimierz Kuratowski's 1921 paper "Sur les
ensembles connexes" began the systematic study of connected sets in the plane, including many strange examples. The
intermediate value theorem itself is much older: Bernard Bolzano gave an analytic proof in 1817, precisely to show that it
did not depend on geometric intuition. L. E. J. Brouwer's proof of the invariance of dimension in 1911 settled a question
that Cantor's bijection between the line and the plane had raised in 1877.

## Check yourself

??? question "1. Which of these are connected: $\{0\} \cup [1, 2]$; $[0, 1] \cap \mathbb{Q}$; $\mathbb{R} \setminus \mathbb{Z}$; the graph of $\sin(1/x)$ on $(0, 1]$; $[0, 1] \times \{0, 1\}$; the unit circle with its centre?"

    Only the graph of $\sin(1/x)$, which is the continuous image of the interval $(0, 1]$. The others: $\{0\} \cup [1, 2]$
    is not an interval (Theorem 7.3). $[0, 1] \cap \mathbb{Q}$ is not an interval of $\mathbb{R}$ either (it misses
    $1/\sqrt{2}$). $\mathbb{R} \setminus \mathbb{Z}$ is separated by $(-\infty, \tfrac12) \setminus \mathbb{Z}$ and
    $(\tfrac12, \infty) \setminus \mathbb{Z}$; it has infinitely many components $(n, n + 1)$. $[0, 1] \times \{0, 1\}$ is
    two disjoint segments, each open in the union. The circle with its centre: the centre is isolated (a small disc around
    it meets the set only there), so it is clopen.

??? question "2. Let $X$ be connected and $f : X \to \mathbb{R}$ continuous with only integer values. Prove that $f$ is constant."

    $f(X)$ is connected, so it is an interval. An interval containing two different integers $m < n$ contains
    $m + \tfrac12$, which is not an integer. So $f(X)$ is a single integer.

??? question "3. Show that $p(x) = x^3 - 3x + 1$ has exactly three real roots, and locate each between consecutive integers."

    $p(-2) = -8 + 6 + 1 = -1$, $p(0) = 1$, $p(1) = 1 - 3 + 1 = -1$, $p(2) = 8 - 6 + 1 = 3$. By the IVT there are roots in
    $(-2, 0)$, $(0, 1)$ and $(1, 2)$. These are three different roots, and a cubic has at most three. (Narrowing further:
    $p(-1) = 3 > 0$, so the first root is in $(-2, -1)$; the roots are about $-1.879$, $0.347$ and $1.532$.)

??? question "4. Prove that the closure of a connected set is connected, but give an example where the interior of a connected set is not connected."

    The first is Theorem 7.6(b) with $B = \overline{A}$. For the second, take two closed discs in the plane that touch at
    one point, such as the discs of radius 1 around $(-1, 0)$ and $(1, 0)$. Their union is connected (two connected sets
    sharing the point $(0, 0)$). Its interior is the union of the two open discs, which are disjoint open sets: disconnected.

??? question "5. Prove that $\mathbb{R}^n$ (for $n \ge 2$) with any countable set of points removed is path connected."

    Let $C$ be the countable set and $p, q \notin C$. For each point $r$ on the perpendicular bisector of the segment $pq$
    (a line or hyperplane, with uncountably many points), consider the broken path $p \to r \to q$. Two such paths with
    different $r$ meet only at $p$ and $q$: the first segment of each path lies on $p$'s side of the bisector and the
    second on $q$'s side, touching the bisector only at $r$, and two segments from $p$ to different points $r_1$, $r_2$ of
    the bisector lie on different rays from $p$ (since $p$ is not on the bisector); likewise at $q$. Each point of $C$ lies
    on at most one of these paths, so $C$ blocks at most countably many of them. Uncountably many remain, and any of them joins $p$ to $q$
    avoiding $C$.

??? question "6. Show that the cofinite topology on an infinite set is connected, and that the cofinite topology on a finite set with at least two points is not."

    Infinite case: two nonempty open sets have finite complements, so they intersect (Section 7.1); there is no separation.
    Finite case: every subset has finite complement, so every subset is open: the topology is discrete, and a discrete
    space with two points is disconnected.

??? question "7. Prove that the circle is not homeomorphic to the figure eight, and that the figure eight is not homeomorphic to the letter X."

    Circle versus figure eight: removing the crossing point of the figure eight leaves two components; removing any point
    of the circle leaves one. Figure eight versus X: removing the crossing point of X leaves four components; in the figure
    eight, removing the crossing point leaves two and removing any other point leaves one (the rest of its loop is still
    attached through the crossing). No point of the figure eight leaves four.

??? question "8. Find the components and the path components of $\mathbb{Q} \times \mathbb{R}$."

    Each vertical line $\{q\} \times \mathbb{R}$ is path connected. Conversely, let $A$ be a connected subset. Its
    projection to the first coordinate is a connected subset of $\mathbb{Q}$ (a continuous image), hence a single point
    $q$, so $A$ lies in $\{q\} \times \mathbb{R}$. So the components, and the path components, are exactly the vertical
    lines.

??? question "9. Prove that a connected metric space with at least two points is uncountable."

    Let $a \ne b$ and $f(x) = d(x, a)$, which is continuous. $f(X)$ is connected, so it is an interval, and it contains
    $f(a) = 0$ and $f(b) = d(a, b) > 0$. So $f(X)$ contains $[0, d(a, b)]$, which is uncountable. Since $f$ maps $X$ onto a
    set containing an uncountable set, $X$ is uncountable. (Compare $\mathbb{Q}$, a countable metric space, which must
    therefore be disconnected.)

??? question "10. Is the topologist's sine curve with the segment $J$ replaced by the single point $(0, 0)$ connected? Path connected?"

    The set $G \cup \{(0, 0)\}$ is connected: $(0, 0)$ is in the closure of $G$ (take $x_k = 1/(2\pi k)$, where
    $\sin(1/x_k) = 0$), so $G \subseteq G \cup \{(0, 0)\} \subseteq \overline{G}$ and Theorem 7.6(b) applies. It is not
    path connected: the proof of Theorem 7.9 works word for word, since it only used that a path starting in the part
    on the $y$-axis must have $y$ oscillating between $1$ and $-1$ right after leaving it.

??? question "11. Prove that no two of $\mathbb{R}$, $S^1$ and $S^2$ are homeomorphic."

    $\mathbb{R}$ has cut points; $S^1$ and $S^2$ do not (removing a point gives $\mathbb{R}$ and $\mathbb{R}^2$
    respectively, both connected). So $\mathbb{R} \not\cong S^1$ and $\mathbb{R} \not\cong S^2$. Removing two points
    disconnects $S^1$ but not $S^2$ (Section 7.5), so $S^1 \not\cong S^2$.

??? question "12. Prove that every continuous $f : [0, 1] \to \mathbb{R}$ with $f(0) = f(1)$ has a horizontal chord of length $\tfrac12$: there is an $x \in [0, \tfrac12]$ with $f(x) = f(x + \tfrac12)$."

    Let $g(x) = f(x + \tfrac12) - f(x)$ on $[0, \tfrac12]$, continuous. Then $g(0) + g(\tfrac12) = f(\tfrac12) - f(0) + f(1) - f(\tfrac12) = f(1) - f(0) = 0$,
    so $g(0)$ and $g(\tfrac12)$ are both zero or have opposite signs. By the IVT $g$ has a zero. (The same argument with $n$
    terms gives chords of length $1/n$; a theorem of Paul Lévy says that lengths not of this form can fail.)

## What you learned

- A space is connected if it cannot be split into two disjoint nonempty open sets; equivalently, it has no nontrivial
  clopen sets, or every continuous map to $\{0, 1\}$ is constant.
- The connected subsets of $\mathbb{R}$ are exactly the intervals, and the proof is the completeness of the reals.
- Continuous images of connected spaces are connected; with the previous fact this is the intermediate value theorem.
- Unions of connected sets with a common point, closures of connected sets and products of connected spaces are
  connected.
- Path connected implies connected; the converse fails for the topologist's sine curve but holds for open subsets of
  $\mathbb{R}^n$ and for manifolds.
- Components are the maximal connected subsets; their number is a topological invariant.
- Removing points and counting components proves that $\mathbb{R} \not\cong \mathbb{R}^2$, that the three kinds of interval
  differ, that a circle is not an interval, a figure eight or a sphere, and sorts the letters of the alphabet.

**Next:** [Chapter 8](08-Compactness.md), compactness: the property that turns "for every point there is a neighbourhood"
into "finitely many neighbourhoods suffice", and the reason continuous functions on closed intervals have maxima.

## Further reading

- J. R. Munkres, *Topology*, 2nd edition, 2000 (Sections 23 to 25: connectedness, path connectedness, components).
- M. A. Armstrong, *Basic Topology*, 1983 (Chapter 3, on compactness and connectedness).
- L. A. Steen and J. A. Seebach, *Counterexamples in Topology*, 1970 (the topologist's sine curve and many relatives).
- B. Knaster and C. Kuratowski, "Sur les ensembles connexes", *Fundamenta Mathematicae* 2, 1921.
- B. Bolzano, *Rein analytischer Beweis des Lehrsatzes, dass zwischen je zwey Werthen, die ein entgegengesetztes Resultat
  gewähren, wenigstens eine reelle Wurzel der Gleichung liege*, 1817.
- Other books on this site: [Calculus, Chapter 3: Continuity](../calculus/03-Continuity.md),
  [Calculus, Chapter 18: The real numbers](../calculus/18-The-Real-Numbers.md),
  [Calculus, Chapter 20: Metric spaces](../calculus/20-Metric-Spaces-and-Topology-of-R.md),
  [Logic, Chapter 7: Infinity and cardinality](../logic/07-Infinity-and-Cardinality.md).
- U of T guides: [MAT257 Unit 3, Continuity and connectedness](../../uoft/MAT257Y1/unit03.md),
  [MAT158 Unit 5, The three hard theorems](../../uoft/MAT158H1/unit05.md).
- Topics lessons: [Continuity](../../topics/change/level-7/02-continuity.md),
  [The Cantor set](../../topics/infinity/level-7/05-cantor-set.md),
  [The line and the square](../../topics/infinity/level-7/06-line-and-square.md).
