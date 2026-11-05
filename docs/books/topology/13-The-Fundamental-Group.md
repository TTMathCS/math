# 13. The fundamental group

*A rubber band lying on a table can be pulled in to a point. A rubber band looped around the post of a fence cannot,
however you slide it, unless you cut it or lift it over the top. That difference, between loops that can shrink away
and loops that are caught on something, is the first piece of algebra that topology attaches to a space. In this
chapter you will turn loops into the elements of a group, called the fundamental group, prove that the group laws
really hold, see how the group depends (and does not depend) on where the loops start, and learn how continuous
maps between spaces become homomorphisms between their groups. That last step is the engine of all algebraic
topology: if two spaces had the same shape, their groups would have to be the same, so a difference between the
groups proves that the shapes are different.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a path and a loop are, and how to join two loops end to end
    - what it means for two loops to be homotopic "relative to their ends"
    - why loops up to homotopy form a group, with complete proofs of every group law
    - why, in a path-connected space, the group does not depend on the starting point, up to isomorphism
    - what a simply connected space is, with proofs that convex sets and the spheres $S^n$ for $n \ge 2$ are
      simply connected
    - how a continuous map induces a homomorphism, and why homeomorphic or homotopy equivalent spaces have
      isomorphic fundamental groups

    **You need:** [Chapter 12](12-Homotopy.md) (homotopies, homotopy equivalence, retractions),
    [Chapter 7](07-Connectedness.md) (path connectedness) and [Chapter 8](08-Compactness.md) (compactness and the
    Lebesgue number lemma). From algebra: groups, subgroups, homomorphisms and isomorphisms, as in
    [Algebra Chapter 13](../algebra/13-Groups.md) and [Algebra Chapter 15](../algebra/15-Homomorphisms-and-Quotients.md).

    **Levels:** 13.1 is intermediate; 13.2 and 13.3 are advanced; 13.4 and 13.5 are advanced, with the proof that
    $S^n$ is simply connected at the upper end of advanced.

## 13.1 Loops and their composition

*Level: intermediate.*

Start with a question you can almost answer by eye. Take the plane with one point removed, say the origin: call it
$X = \mathbb{R}^2 \setminus \{0\}$. Draw a loop that starts and ends at the point $(1, 0)$ and goes once around the
hole. Can you deform it, through loops that start and end at $(1, 0)$ and never touch the origin, until it becomes
the "loop" that just sits still at $(1, 0)$?

Your eye says no: the loop is caught on the hole. But "caught" is not yet a mathematical word. To make it one, we
need three things: a precise definition of a loop, a precise definition of "deform", and a way of proving that a
deformation does not exist. This chapter supplies the first two and builds the algebra for the third. The proof
that this particular loop really is caught comes in [Chapter 14](14-The-Circle-and-Covering-Spaces.md).

### Paths and loops

Throughout, $I$ is the unit interval $[0, 1]$, and a space means a topological space.

A **path** in a space $X$ is a continuous map $f : I \to X$. Think of $s \in I$ as time: at time $s$ the path is at
the point $f(s)$. The point $f(0)$ is where the path **starts** and $f(1)$ is where it **ends**. A path is not just
its picture (its image): the same curve run twice as fast, or backwards, or with a pause in the middle, is a
different path.

A **loop** at a point $x_0$ is a path that starts and ends at $x_0$, that is, $f(0) = f(1) = x_0$. The point $x_0$ is
called the **base point**. The simplest loop is the **constant loop** $c_{x_0}$, defined by $c_{x_0}(s) = x_0$ for
every $s$: it never moves.

Two examples to keep in mind.

- In the circle $S^1 = \{(x, y) : x^2 + y^2 = 1\}$, the path $\omega(s) = (\cos 2\pi s, \sin 2\pi s)$ is a loop at
  $(1, 0)$ that goes once around, anticlockwise.
- In the same circle, $\omega_n(s) = (\cos 2\pi n s, \sin 2\pi n s)$ goes around $n$ times; for negative $n$ it goes
  clockwise. Every $\omega_n$ is a loop at $(1, 0)$.

### Joining paths

If one path ends where another starts, you can run them one after the other. Since a path must be defined on $[0,1]$,
we run each at double speed. For paths $f$ and $g$ with $f(1) = g(0)$, the **product** (or **concatenation**)
$f \cdot g$ is

$$
(f \cdot g)(s) =
\begin{cases}
f(2s) & 0 \le s \le \tfrac12, \\
g(2s - 1) & \tfrac12 \le s \le 1.
\end{cases}
$$

At $s = \tfrac12$ both lines give the same point, $f(1) = g(0)$, so the two pieces agree where they meet. The
**pasting lemma** ([Chapter 5](05-Continuity-and-Homeomorphism.md)) says that a function which is continuous on
each of two closed sets, and agrees on their overlap, is continuous on their union. So $f \cdot g$ is a path. It
starts at $f(0)$ and ends at $g(1)$. If $f$ and $g$ are loops at $x_0$, so is $f \cdot g$.

The **reverse** of a path $f$ is $\bar f(s) = f(1 - s)$: the same journey, backwards.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 210" role="img" aria-label="Left: the interval from 0 to 1 split at one half; the first half is coloured orange and labelled f at double speed, the second half blue and labelled g at double speed. Right: a green region with a small hole; a base point x0; an orange loop f goes around the hole, a blue loop g goes around the right side of the region without enclosing the hole. Both loops start and end at x0.">
  <line x1="30" y1="150" x2="120" y2="150" stroke="#eea66f" stroke-width="6"/>
  <line x1="120" y1="150" x2="210" y2="150" stroke="#9cc9ea" stroke-width="6"/>
  <line x1="30" y1="140" x2="30" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="140" x2="120" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210" y1="140" x2="210" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="180" font-size="13" text-anchor="middle" fill="currentColor">0</text>
  <text x="120" y="180" font-size="13" text-anchor="middle" fill="currentColor">1/2</text>
  <text x="210" y="180" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="75" y="128" font-size="12" text-anchor="middle" fill="currentColor">f, double speed</text>
  <text x="165" y="128" font-size="12" text-anchor="middle" fill="currentColor">g, double speed</text>
  <text x="120" y="60" font-size="14" text-anchor="middle" fill="currentColor">the loop f · g</text>
  <ellipse cx="340" cy="100" rx="110" ry="80" fill="#7ccf9a" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="300" cy="92" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M340 100 C 260 20, 240 170, 340 100" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M340 100 C 430 20, 440 180, 340 100" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="340" cy="100" r="4" fill="currentColor"/>
  <text x="348" y="118" font-size="13" fill="currentColor">x0</text>
  <text x="255" y="52" font-size="13" fill="currentColor">f</text>
  <text x="420" y="52" font-size="13" fill="currentColor">g</text>
  <text x="300" y="96" font-size="9" text-anchor="middle" fill="currentColor">hole</text>
</svg>
</div>

**Worked example.** In $S^1$, compute $\omega \cdot \omega$. For $0 \le s \le \tfrac12$ it is
$\omega(2s) = (\cos 4\pi s, \sin 4\pi s)$. For $\tfrac12 \le s \le 1$ it is
$\omega(2s - 1) = (\cos(4\pi s - 2\pi), \sin(4\pi s - 2\pi)) = (\cos 4\pi s, \sin 4\pi s)$, since cosine and sine
have period $2\pi$. So $\omega \cdot \omega = \omega_2$ exactly: once around, then once around again, is twice
around. Check: at $s = \tfrac14$ both give $(\cos \pi, \sin \pi) = (-1, 0)$, the far side of the circle, reached
halfway through the first lap.

The product of three loops shows the first problem. $(f \cdot g) \cdot h$ runs $f$ during $[0, \tfrac14]$, $g$ during
$[\tfrac14, \tfrac12]$ and $h$ during $[\tfrac12, 1]$. But $f \cdot (g \cdot h)$ runs $f$ during $[0, \tfrac12]$,
$g$ during $[\tfrac12, \tfrac34]$ and $h$ during $[\tfrac34, 1]$. They visit the same places in the same order, at
different speeds, so as maps they are usually different: the product of paths is **not associative**. Similarly
$c_{x_0} \cdot f$ is not equal to $f$ (it waits for half the time, then runs $f$ at double speed), and
$f \cdot \bar f$ is not the constant loop. To get a group we must stop caring about speed, and more generally about
any change that is a continuous deformation. That is what homotopy is for.

### Homotopy of paths

[Chapter 12](12-Homotopy.md) defined a homotopy between maps. For paths we need a version that keeps the ends
fixed: otherwise every path could be pulled back to its starting point, and every loop would be trivial.

**Definition.** Two paths $f, g : I \to X$ with the same start $x_0$ and the same end $x_1$ are **path homotopic**,
written $f \simeq g$, if there is a continuous map $F : I \times I \to X$ with

$$
F(s, 0) = f(s), \quad F(s, 1) = g(s), \quad F(0, t) = x_0, \quad F(1, t) = x_1
$$

for all $s, t \in I$. The map $F$ is a **path homotopy** from $f$ to $g$.

Read $t$ as a second clock. For each fixed $t$, the map $s \mapsto F(s, t)$ is a path from $x_0$ to $x_1$, written
$f_t$. At $t = 0$ it is $f$; at $t = 1$ it is $g$; in between, the paths change continuously, and the two ends never
move. The phrase "homotopy relative to the endpoints" (or "rel $\{0,1\}$") means the same thing.

**Example: the straight-line homotopy.** Let $X$ be a convex subset of $\mathbb{R}^n$, meaning that the segment
between any two points of $X$ lies in $X$. If $f$ and $g$ are paths in $X$ from $x_0$ to $x_1$, then

$$
F(s, t) = (1 - t) f(s) + t\, g(s)
$$

is a path homotopy. It is continuous because it is built from continuous functions by sums and products; it stays in
$X$ because $F(s,t)$ lies on the segment from $f(s)$ to $g(s)$; and $F(0, t) = (1 - t)x_0 + t x_0 = x_0$, and
likewise at $s = 1$. So in a convex set **any two paths with the same ends are path homotopic.** In particular every
loop in $\mathbb{R}^2$ is path homotopic to the constant loop.

The same formula fails in $X = \mathbb{R}^2 \setminus \{0\}$: the segment from $\omega(s)$ to the constant point
$(1, 0)$ passes through the origin when $\omega(s) = (-1, 0)$, at $s = \tfrac12$, so the homotopy leaves $X$. That
does not yet prove there is no other homotopy, but it shows where the difficulty lies.

**Lemma 13.1.** Path homotopy is an equivalence relation on the set of paths from $x_0$ to $x_1$.

*Proof.* **Reflexive:** $F(s, t) = f(s)$ is a path homotopy from $f$ to itself. **Symmetric:** if $F$ goes from
$f$ to $g$, then $G(s, t) = F(s, 1 - t)$ goes from $g$ to $f$. **Transitive:** if $F$ goes from $f$ to $g$ and $G$
from $g$ to $h$, stack them:

$$
H(s, t) =
\begin{cases}
F(s, 2t) & 0 \le t \le \tfrac12, \\
G(s, 2t - 1) & \tfrac12 \le t \le 1.
\end{cases}
$$

At $t = \tfrac12$ both lines give $g(s)$, so the pasting lemma makes $H$ continuous; its ends stay fixed because
those of $F$ and $G$ do. $\square$

The equivalence class of $f$ is written $[f]$ and called its **path class** or **homotopy class**.

<figure class="play" data-play="winding"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Loops round a point: the image of a circle winds round 0 a whole number of times, an invariant that cannot change without passing through 0.</figcaption></figure>

## 13.2 The group axioms up to homotopy

*Level: advanced.*

**Definition.** The **fundamental group** of $X$ at $x_0$, written $\pi_1(X, x_0)$, is the set of path classes of
loops at $x_0$, with the operation

$$
[f] \cdot [g] = [f \cdot g].
$$

The symbol $\pi_1$ is read "pi one". The "1" is there because there are higher groups $\pi_n$, built from maps of
$n$-dimensional spheres; they appear in [Chapter 16](16-Homology.md) and [Chapter 20](20-Where-Topology-Goes.md).

We must prove four things: that the operation is well defined, that it is associative, that there is an identity,
and that every element has an inverse. Each proof is a homotopy written down explicitly.

### Well defined

**Lemma 13.2.** If $f \simeq f'$ and $g \simeq g'$, and $f(1) = g(0)$, then $f \cdot g \simeq f' \cdot g'$.

*Proof.* Let $F$ be a path homotopy from $f$ to $f'$ and $G$ one from $g$ to $g'$. Define

$$
H(s, t) =
\begin{cases}
F(2s, t) & 0 \le s \le \tfrac12, \\
G(2s - 1, t) & \tfrac12 \le s \le 1.
\end{cases}
$$

At $s = \tfrac12$ the first line gives $F(1, t) = f(1)$ and the second gives $G(0, t) = g(0)$; these are equal, so
$H$ is continuous by pasting. At $t = 0$, $H$ is $f \cdot g$; at $t = 1$, it is $f' \cdot g'$; and the ends
$H(0, t) = f(0)$, $H(1, t) = g(1)$ are fixed. $\square$

So the product of classes does not depend on which loops we pick from the classes.

### A reparametrisation lemma

The remaining three proofs share one trick: if two paths differ only in their timing, they are homotopic.

**Lemma 13.3 (reparametrisation).** Let $\varphi : I \to I$ be continuous with $\varphi(0) = 0$ and
$\varphi(1) = 1$. Then for any path $f$, the path $f \circ \varphi$ is path homotopic to $f$.

*Proof.* Put $F(s, t) = f\big((1 - t)\varphi(s) + t s\big)$. The number $(1 - t)\varphi(s) + ts$ lies between
$\varphi(s)$ and $s$, so it is in $I$, and $F$ is continuous as a composite of continuous maps. At $t = 0$ it is
$f(\varphi(s))$; at $t = 1$ it is $f(s)$. At $s = 0$ it is $f(0)$ and at $s = 1$ it is $f(1)$, for every $t$. $\square$

The idea: $\varphi$ is a new timetable for the same journey, and the homotopy slides the timetable back to the
normal one. Note what is used: the interval $I$ is convex, so the straight-line homotopy works **in the time
domain**, even if $X$ itself is not convex at all.

### Associativity

**Theorem 13.4.** $([f] \cdot [g]) \cdot [h] = [f] \cdot ([g] \cdot [h])$ whenever the products are defined.

*Proof.* We find a timetable $\varphi$ with $(f \cdot g) \cdot h = \big(f \cdot (g \cdot h)\big) \circ \varphi$.
Recall the schedules: on the left, $f$ runs in $[0, \tfrac14]$, $g$ in $[\tfrac14, \tfrac12]$, $h$ in
$[\tfrac12, 1]$; on the right, $f$ in $[0, \tfrac12]$, $g$ in $[\tfrac12, \tfrac34]$, $h$ in $[\tfrac34, 1]$. So
$\varphi$ must map each left interval onto the matching right interval, linearly:

$$
\varphi(s) =
\begin{cases}
2s & 0 \le s \le \tfrac14, \\
s + \tfrac14 & \tfrac14 \le s \le \tfrac12, \\
\tfrac12(s + 1) & \tfrac12 \le s \le 1.
\end{cases}
$$

Check the joins: at $s = \tfrac14$ the first two lines both give $\tfrac12$; at $s = \tfrac12$ the last two both
give $\tfrac34$. So $\varphi$ is continuous, with $\varphi(0) = 0$, $\varphi(1) = 1$.

Now check the formula piece by piece. Write $k = f \cdot (g \cdot h)$.

- For $0 \le s \le \tfrac14$: $k(2s) = f(4s)$, because $2s \le \tfrac12$. And $((f \cdot g) \cdot h)(s) = (f \cdot g)(2s) = f(4s)$. Equal.
- For $\tfrac14 \le s \le \tfrac12$: $k(s + \tfrac14) = (g \cdot h)(2s - \tfrac12) = g(4s - 1)$, because $2s - \tfrac12 \in [0, \tfrac12]$. And $((f \cdot g) \cdot h)(s) = (f \cdot g)(2s) = g(4s - 1)$. Equal.
- For $\tfrac12 \le s \le 1$: $k(\tfrac12(s+1)) = (g \cdot h)(s) = h(2s - 1)$. And $((f \cdot g) \cdot h)(s) = h(2s - 1)$. Equal.

By Lemma 13.3, $(f \cdot g) \cdot h = k \circ \varphi \simeq k$. $\square$

### Identity

**Theorem 13.5.** For a path $f$ from $x_0$ to $x_1$, $[c_{x_0}] \cdot [f] = [f] = [f] \cdot [c_{x_1}]$. In
particular $[c_{x_0}]$ is an identity element of $\pi_1(X, x_0)$.

*Proof.* The path $c_{x_0} \cdot f$ waits at $x_0$ for half the time and then runs $f$ at double speed. So
$c_{x_0} \cdot f = f \circ \varphi$ with $\varphi(s) = 0$ for $s \le \tfrac12$ and $\varphi(s) = 2s - 1$ for
$s \ge \tfrac12$. Check: for $s \le \tfrac12$, $f(\varphi(s)) = f(0) = x_0 = c_{x_0}(2s)$; for $s \ge \tfrac12$,
$f(\varphi(s)) = f(2s - 1)$. Lemma 13.3 gives $c_{x_0} \cdot f \simeq f$. On the other side,
$f \cdot c_{x_1} = f \circ \psi$ with $\psi(s) = \min(2s, 1)$. $\square$

### Inverses

**Theorem 13.6.** For a path $f$ from $x_0$ to $x_1$, $f \cdot \bar f \simeq c_{x_0}$ and
$\bar f \cdot f \simeq c_{x_1}$. In particular $[\bar f]$ is the inverse of $[f]$ in $\pi_1(X, x_0)$.

*Proof.* The idea: go out along $f$ only as far as $f(1 - t)$, then come straight back. As $t$ grows the trip gets
shorter, and at $t = 1$ there is no trip at all. In formulas,

$$
H(s, t) =
\begin{cases}
f\big(2s(1 - t)\big) & 0 \le s \le \tfrac12, \\
f\big((2 - 2s)(1 - t)\big) & \tfrac12 \le s \le 1.
\end{cases}
$$

At $s = \tfrac12$ both lines give $f(1 - t)$, so $H$ is continuous. At $t = 0$ the lines are $f(2s)$ and
$f(2 - 2s) = \bar f(2s - 1)$, which is $f \cdot \bar f$. At $t = 1$ both lines are $f(0) = x_0$: the constant loop.
At $s = 0$ and $s = 1$ the value is $f(0) = x_0$ for every $t$. So $H$ is a path homotopy from $f \cdot \bar f$ to
$c_{x_0}$. Applying this to $\bar f$ (whose reverse is $f$) gives the second statement. $\square$

Putting 13.2 to 13.6 together:

**Theorem 13.7.** $\pi_1(X, x_0)$ with the operation $[f][g] = [f \cdot g]$ is a group, with identity $[c_{x_0}]$
and inverse $[f]^{-1} = [\bar f]$.

The group need not be abelian. You will see in [Chapter 15](15-Van-Kampen-and-Surfaces.md) that for the figure
eight (two circles joined at a point) the loop "around the left circle, then around the right circle" is not
homotopic to "right, then left".

### First examples

- If $X$ is a convex subset of $\mathbb{R}^n$, every loop is path homotopic to the constant loop (straight-line
  homotopy), so $\pi_1(X, x_0)$ is the **trivial group** $\{1\}$, with one element. This includes $\mathbb{R}^n$, any
  disc and any ball.
- A one-point space has one loop, so its group is trivial.
- For the circle, the loops $\omega_n$ give classes $[\omega_n]$, and the worked example above shows
  $[\omega]^2 = [\omega_2]$; in the same way $[\omega]^n = [\omega_n]$. The main theorem of
  [Chapter 14](14-The-Circle-and-Covering-Spaces.md) is that these classes are all different and that there are no
  others: $\pi_1(S^1, (1,0)) \cong \mathbb{Z}$, with $[\omega_n] \leftrightarrow n$.

### Try it in Python

The **winding number** of a loop in the punctured plane counts how many times it turns around the origin. You can
estimate it by adding up the small changes of angle along the loop. The program below checks two facts you will
prove in Chapter 14: winding numbers add when loops are joined, and a loop followed by its reverse winds zero times.

```python
import math

def winding(loop, n=2000):
    """Total turning of a loop around the origin, in full turns."""
    total = 0.0
    x0, y0 = loop(0)
    for k in range(1, n + 1):
        x1, y1 = loop(k / n)
        # signed angle from (x0, y0) to (x1, y1)
        total += math.atan2(x0 * y1 - y0 * x1, x0 * x1 + y0 * y1)
        x0, y0 = x1, y1
    return round(total / (2 * math.pi), 6) + 0.0

def concat(f, g):
    return lambda s: f(2 * s) if s <= 0.5 else g(2 * s - 1)

def reverse(f):
    return lambda s: f(1 - s)

omega = lambda s: (math.cos(2 * math.pi * s), math.sin(2 * math.pi * s))
print(winding(omega), winding(concat(omega, omega)), winding(concat(omega, reverse(omega))))
# 1.0 2.0 0.0
```

The winding number is unchanged by a path homotopy in the punctured plane (that is the content of Chapter 14), so
these three numbers already tell you that $[\omega]$, $[\omega]^2$ and the identity are three different elements.

### A short history

Henri Poincaré introduced the fundamental group in his long 1895 paper *Analysis Situs*, the paper usually counted
as the start of algebraic topology. He wanted invariants that could tell apart spaces of dimension three and more,
where pictures no longer help. In a supplement of 1904 he constructed a three-dimensional space with the same
Betti numbers (see [Chapter 16](16-Homology.md)) as the three-sphere but with a nontrivial fundamental group, which
showed that the group sees things the counting of holes does not. The same supplement asked the question now called
the Poincaré conjecture ([Chapter 19](19-The-Poincare-Conjecture.md)): is a closed three-dimensional manifold with
trivial fundamental group necessarily the three-sphere?

## 13.3 Dependence on base point

*Level: advanced.*

The group $\pi_1(X, x_0)$ is built from loops at one particular point. What happens if we choose another?

If $x_0$ and $x_1$ lie in different path components (pieces that cannot be joined by a path), the two groups have
nothing to do with each other. For example, let $X$ be a circle together with a separate point $p$. Then
$\pi_1(X, p)$ is trivial (the only loop at $p$ is constant, since a path from $p$ cannot leave the one-point
component), while $\pi_1(X, (1,0))$ is the group of the circle. The fundamental group only sees the path component
of the base point.

If the points can be joined by a path, the groups are isomorphic, and the path tells you how.

**Theorem 13.8.** Let $h$ be a path from $x_0$ to $x_1$. Define
$\beta_h : \pi_1(X, x_0) \to \pi_1(X, x_1)$ by

$$
\beta_h [f] = [\bar h \cdot f \cdot h].
$$

Then $\beta_h$ is a group isomorphism.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="A loop f drawn in orange at the base point x0 on the left. A blue path h runs from x0 to x1 on the right. The new loop at x1 runs back along h to x0, around f, and out along h again to x1.">
  <rect x="10" y="10" width="420" height="150" rx="40" fill="#7ccf9a" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <path d="M120 90 C 40 10, 30 160, 120 90" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M120 90 C 200 40, 260 140, 330 90" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="120" cy="90" r="4" fill="currentColor"/>
  <circle cx="330" cy="90" r="4" fill="currentColor"/>
  <text x="128" y="112" font-size="13" fill="currentColor">x0</text>
  <text x="338" y="112" font-size="13" fill="currentColor">x1</text>
  <text x="48" y="48" font-size="13" fill="currentColor">f</text>
  <text x="225" y="76" font-size="13" fill="currentColor">h</text>
  <text x="300" y="40" font-size="12" text-anchor="middle" fill="currentColor">new loop at x1:</text>
  <text x="300" y="56" font-size="12" text-anchor="middle" fill="currentColor">back along h, f, out along h</text>
</svg>
</div>

*Proof.* First, $\beta_h$ is well defined: $\bar h \cdot f \cdot h$ starts at $h(1) = x_1$, runs back to $x_0$, goes
around $f$, and returns to $x_1$; and by Lemma 13.2 its class depends only on $[f]$. (Since the product of classes
is associative, we can drop brackets in triple products.)

**Homomorphism:** using $h \cdot \bar h \simeq c_{x_0}$ (Theorem 13.6) and the identity law,

$$
\beta_h[f]\,\beta_h[g] = [\bar h \cdot f \cdot h \cdot \bar h \cdot g \cdot h] = [\bar h \cdot f \cdot g \cdot h] = \beta_h[f \cdot g].
$$

**Bijective:** the reverse path $\bar h$ runs from $x_1$ to $x_0$, so it gives
$\beta_{\bar h} : \pi_1(X, x_1) \to \pi_1(X, x_0)$, $\beta_{\bar h}[g] = [h \cdot g \cdot \bar h]$. Then
$\beta_{\bar h}\beta_h[f] = [h \cdot \bar h \cdot f \cdot h \cdot \bar h] = [f]$ and similarly
$\beta_h \beta_{\bar h}[g] = [g]$. So $\beta_{\bar h}$ is an inverse function, and $\beta_h$ is a bijection. $\square$

**Corollary 13.9.** If $X$ is path connected, then all the groups $\pi_1(X, x_0)$, for $x_0 \in X$, are isomorphic.

Because of this, people often write $\pi_1(X)$ for a path-connected space and speak of "the" fundamental group.
That is safe when you only care about the group up to isomorphism, which is most of the time.

### Is the isomorphism canonical?

There is a subtlety worth seeing once. Different paths $h$ and $k$ from $x_0$ to $x_1$ may give different
isomorphisms. Compare them:

$$
\beta_k^{-1}\beta_h[f] = [k \cdot \bar h \cdot f \cdot h \cdot \bar k] = [g]^{-1}[f][g], \quad \text{where } g = h \cdot \bar k .
$$

Here $g$ is a loop at $x_0$ (out along $h$, back along $k$), and $[g]^{-1} = [k \cdot \bar h]$. So the two
isomorphisms differ by **conjugation** by the element $[g]$. Two consequences follow.

- If $\pi_1(X, x_0)$ is **abelian**, conjugation does nothing, so every path gives the same isomorphism, and the groups
  at different points can be identified without any choice.
- If it is not abelian, there is no preferred isomorphism. What is well defined is the **conjugacy class** of an
  element. This is why a loop drawn with no base point (a "free loop") gives a conjugacy class in $\pi_1$, not an
  element.

**Worked example.** In the figure eight of Chapter 15, with loops $a$ and $b$ around the two circles, the free loop
"once around $a$" can be based at the join in several ways, and you get $[a]$ or a conjugate such as $[b][a][b]^{-1}$.
In the free group these are different elements, but they are conjugate.

## 13.4 Simply connected spaces

*Level: advanced.*

**Definition.** A space $X$ is **simply connected** if it is path connected and $\pi_1(X, x_0)$ is trivial for one
(and hence, by Corollary 13.9, every) point $x_0$.

So a simply connected space is one in which every loop can be shrunk to a point while its base point stays put. The
word "simply" is old usage: it means "connected in the simplest way", with no loops caught on anything.

### Two useful reformulations

**Proposition 13.10.** A path-connected space $X$ is simply connected if and only if any two paths in $X$ with the
same start and the same end are path homotopic.

*Proof.* Suppose $X$ is simply connected and $f, g$ are paths from $x_0$ to $x_1$. Then $f \cdot \bar g$ is a loop at
$x_0$, so $[f \cdot \bar g] = [c_{x_0}]$. Multiply on the right by $[g]$:
$[f] = [f][\bar g][g] = [c_{x_0}][g] = [g]$. (We used Theorems 13.5 and 13.6 for paths, not only loops.)
Conversely, if any two paths with the same ends are homotopic, then in particular every loop at $x_0$ is
homotopic to $c_{x_0}$. $\square$

**Proposition 13.11.** A loop $f$ at $x_0$ is path homotopic to the constant loop if and only if the map
$S^1 \to X$ it defines extends to a continuous map of the closed disc $D^2 \to X$.

Here a loop $f$ defines a map $\hat f : S^1 \to X$ by $\hat f(\cos 2\pi s, \sin 2\pi s) = f(s)$; this is well
defined because $f(0) = f(1)$, and continuous because $S^1$ is a quotient of $I$ that glues $0$ to $1$
([Chapter 6](06-Building-New-Spaces.md)).

*Proof sketch.* If $F$ is a path homotopy from $f$ to $c_{x_0}$, then $F$ is constant on the three sides
$s = 0$, $s = 1$ and $t = 1$ of the square $I \times I$. Collapsing those three sides to one point turns the square
into a disc whose boundary circle is the bottom side, and $F$ passes to a map on that disc which extends $\hat f$.
Conversely, given an extension $G : D^2 \to X$, put
$F(s, t) = G\big((1 - t)(\cos 2\pi s, \sin 2\pi s) + t\,(1, 0)\big)$: it shrinks each point of the circle along a
straight segment to the point $(1, 0)$, which lies inside the disc, and it is a path homotopy from $f$ to the constant
loop at $G(1, 0) = x_0$. $\square$

This is the precise version of the rubber band picture. A loop is trivial in $\pi_1$ exactly when you can fill it in
with a (possibly crumpled, self-intersecting) disc inside the space.

### Examples

**Convex sets.** Proved above: every convex subset of $\mathbb{R}^n$ is simply connected.

**Star-shaped sets.** A subset $X \subseteq \mathbb{R}^n$ is **star shaped** about a point $p$ if for every
$x \in X$ the whole segment from $x$ to $p$ lies in $X$. A star, a plus sign, or a filled letter L is star shaped but
not convex. Every star-shaped set is simply connected: for a loop $f$ at $p$, the formula
$F(s, t) = (1 - t)f(s) + tp$ stays in $X$ (each point slides along its own segment to $p$) and is a path homotopy to
the constant loop. The set is path connected (join any two points through $p$), so by Corollary 13.9 the group is
trivial at every base point.

**Products.** For spaces $X$ and $Y$,

$$
\pi_1(X \times Y, (x_0, y_0)) \cong \pi_1(X, x_0) \times \pi_1(Y, y_0).
$$

*Proof.* A map into a product is continuous exactly when both of its coordinates are (this is the defining property
of the product topology, [Chapter 6](06-Building-New-Spaces.md)). So a loop in $X \times Y$ is the same thing as a
pair $(f, g)$ of loops, and a path homotopy in $X \times Y$ is the same thing as a pair of path homotopies. Hence the
map $[(f, g)] \mapsto ([f], [g])$ is well defined and bijective. It is a homomorphism because joining pairs of
loops joins each coordinate: $(f, g) \cdot (f', g') = (f \cdot f', g \cdot g')$. $\square$

Combined with Chapter 14's $\pi_1(S^1) \cong \mathbb{Z}$, this gives at once the group of the torus
$T^2 = S^1 \times S^1$: $\pi_1(T^2) \cong \mathbb{Z} \times \mathbb{Z}$. The two generators are the loop around the
tube and the loop around the hole of the doughnut, and the group is abelian: going around one way and then the
other is homotopic to doing them in the opposite order. In the square picture of the torus
([Chapter 6](06-Building-New-Spaces.md)) the homotopy is visible: the two routes from one corner of the square to
the opposite corner, along the bottom then up the right side, or up the left side then along the top, are homotopic
across the square.

### Spheres of dimension two and more

**Theorem 13.12.** For $n \ge 2$ the sphere $S^n = \{x \in \mathbb{R}^{n+1} : |x| = 1\}$ is simply connected.

A first attempt at a proof goes like this. Take a loop $f$ at $x_0$. Pick a point $p$ that the loop misses. The
sphere minus one point is homeomorphic to $\mathbb{R}^n$ by stereographic projection ([Chapter 5](05-Continuity-and-Homeomorphism.md)),
which is convex, so the loop shrinks to a point inside $S^n \setminus \{p\}$. Done?

Not quite. **A loop need not miss any point.** There are continuous surjections from $I$ onto the square, and hence
onto $S^2$: these are the **space-filling curves** of Peano (1890) and Hilbert (1891). So "pick a point the loop
misses" can fail. The real proof first deforms the loop so that it does miss a point.

*Proof.* Let $f$ be a loop at $x_0$, and pick a point $p \ne x_0$. Let $B$ be a small open cap (an open ball of the
sphere) around $p$ whose closure $\bar B$ does not contain $x_0$. The closed cap $\bar B$ is homeomorphic to a closed
disc $D^n$, with its edge $\partial B$ going to the boundary sphere $S^{n-1}$; work in this disc picture when needed.

**Step 1: finitely many visits.** The set $f^{-1}(B)$ is an open subset of the open interval $(0, 1)$ (open because
$B$ is open, and it misses $0$ and $1$ because $f(0) = f(1) = x_0 \notin B$). Every open subset of $\mathbb{R}$ is a
union of disjoint open intervals, its components. The set $f^{-1}(p)$ is closed in $I$, hence compact, and it is
covered by these intervals, so finitely many of them, say $(a_1, b_1), \dots, (a_m, b_m)$, already cover it. On each
$[a_i, b_i]$ the loop stays in $\bar B$, and the endpoints $f(a_i)$, $f(b_i)$ lie on the edge $\partial B$ (an endpoint
of a component of $f^{-1}(B)$ is not in $f^{-1}(B)$, but it is a limit of points that are).

**Step 2: reroute each visit.** The edge $\partial B$ is homeomorphic to $S^{n-1}$, which is path connected because
$n - 1 \ge 1$. So there is a path $g_i$ in $\partial B$ from $f(a_i)$ to $f(b_i)$, and $g_i$ misses $p$. The two
paths $f|_{[a_i, b_i]}$ (rescaled to $I$) and $g_i$ both lie in $\bar B$, which is homeomorphic to a convex disc, so
they are path homotopic inside $\bar B$ by the straight-line homotopy in the disc picture. Replace each piece
$f|_{[a_i, b_i]}$ by $g_i$, using that homotopy on $[a_i, b_i]$ and leaving $f$ fixed elsewhere. The result is a
loop $f'$, path homotopic to $f$.

**Step 3: shrink.** The new loop $f'$ misses $p$: on each $[a_i, b_i]$ it runs in $\partial B$, and outside these
intervals it equals $f$, which does not hit $p$ there because the intervals cover $f^{-1}(p)$. So $f'$ is a loop in
$S^n \setminus \{p\} \cong \mathbb{R}^n$, where it is homotopic to the constant loop. Hence $[f] = [f'] = 1$. $\square$

Where was $n \ge 2$ used? Only in Step 2, to find a path in the edge $\partial B \cong S^{n-1}$. For $n = 1$ the edge
of a small arc of the circle is two points, $S^0$, which is not path connected, and the proof breaks, as it must:
the circle is not simply connected.

**Worked example.** $\pi_1(S^2 \times S^1) \cong \pi_1(S^2) \times \pi_1(S^1) \cong \{1\} \times \mathbb{Z} \cong \mathbb{Z}$.
And $\pi_1(S^2 \times S^2)$ is trivial, so $S^2 \times S^2$ is simply connected. Check: this matches a picture only
partly, since $S^2 \times S^2$ is four-dimensional; the algebra does the seeing for us.

**A planet.** The surface of Mars, idealised as a sphere, is simply connected: any closed route a rover drives on it
can be shrunk, through closed routes with the same start, to the rover sitting still. On a torus-shaped world that
would fail for a route around the hole. Simply connected surfaces and spheres are the same thing among closed
surfaces, a fact that follows from the classification of [Chapter 10](10-Classification-of-Surfaces.md) together with
the groups computed in [Chapter 15](15-Van-Kampen-and-Surfaces.md).

## 13.5 Functoriality: induced maps

*Level: advanced.*

So far we have a group for each space. The power of the idea comes from the way maps between spaces become maps
between groups.

**Definition.** Let $\varphi : X \to Y$ be continuous and $\varphi(x_0) = y_0$. The **induced homomorphism**
$\varphi_* : \pi_1(X, x_0) \to \pi_1(Y, y_0)$ is

$$
\varphi_*[f] = [\varphi \circ f].
$$

In words: push each loop forward along $\varphi$.

It is well defined: if $F$ is a path homotopy from $f$ to $g$, then $\varphi \circ F$ is a path homotopy from
$\varphi \circ f$ to $\varphi \circ g$. It is a homomorphism because $\varphi \circ (f \cdot g) = (\varphi \circ f) \cdot (\varphi \circ g)$,
which you can see by applying $\varphi$ to each line of the definition of $f \cdot g$.

**Theorem 13.13 (functoriality).**

- If $\varphi : (X, x_0) \to (Y, y_0)$ and $\psi : (Y, y_0) \to (Z, z_0)$ are continuous, then $(\psi \circ \varphi)_* = \psi_* \circ \varphi_*$.
- The identity map induces the identity: $(\mathrm{id}_X)_* = \mathrm{id}_{\pi_1(X, x_0)}$.

*Proof.* $(\psi \circ \varphi)_*[f] = [\psi \circ \varphi \circ f] = \psi_*[\varphi \circ f] = \psi_*\varphi_*[f]$, and
$(\mathrm{id})_*[f] = [f]$. $\square$

These two short lines are what mathematicians mean when they say that $\pi_1$ is a **functor**: a rule that turns
spaces into groups and maps into homomorphisms, respecting composition and identities. The first consequence is the
reason for the whole construction.

**Corollary 13.14.** If $\varphi : X \to Y$ is a homeomorphism, then $\varphi_* : \pi_1(X, x_0) \to \pi_1(Y, \varphi(x_0))$
is an isomorphism. So the fundamental group is a **topological invariant**: homeomorphic path-connected spaces have
isomorphic fundamental groups.

*Proof.* Let $\psi = \varphi^{-1}$. Then $\psi_*\varphi_* = (\psi\varphi)_* = \mathrm{id}_* = \mathrm{id}$, and
likewise $\varphi_*\psi_* = \mathrm{id}$. So $\varphi_*$ has an inverse. $\square$

Read it backwards and you get a tool for proving that spaces are **different**: if the groups are not isomorphic,
no homeomorphism can exist. For instance, once Chapter 14 shows $\pi_1(S^1) \cong \mathbb{Z}$, it follows that the
circle is not homeomorphic to the sphere $S^2$ (trivial group), and once Chapter 15 shows that the figure eight has a
non-abelian group, it follows that the figure eight is not homeomorphic to the torus (abelian group
$\mathbb{Z}^2$), nor is it homotopy equivalent to it.

### Homotopic maps

Homeomorphism is a strong requirement. The fundamental group is in fact invariant under the much weaker relation of
homotopy equivalence from [Chapter 12](12-Homotopy.md). The key step is to see what a homotopy of maps does to
induced homomorphisms; the base point may move during the homotopy, and that is the only complication.

**Theorem 13.15.** Let $H : X \times I \to Y$ be a homotopy from $\varphi$ to $\psi$ (so $H(x, 0) = \varphi(x)$ and
$H(x, 1) = \psi(x)$). Let $h(t) = H(x_0, t)$, the path traced by the base point, from $\varphi(x_0)$ to $\psi(x_0)$.
Then

$$
\psi_* = \beta_h \circ \varphi_* .
$$

In particular, if the homotopy keeps the base point fixed, $\psi_* = \varphi_*$.

*Proof.* Take a loop $f$ at $x_0$ and consider $G(s, t) = H(f(s), t)$, a continuous map of the square
$I \times I$ into $Y$. Along the four sides of the square $G$ restricts to:

- bottom ($t = 0$): $\varphi \circ f$;
- top ($t = 1$): $\psi \circ f$;
- left ($s = 0$) and right ($s = 1$): $t \mapsto H(x_0, t) = h(t)$, since $f(0) = f(1) = x_0$.

In the square, the route "along the bottom, then up the right side" and the route "up the left side, then along the
top" are two paths from the corner $(0, 0)$ to the corner $(1, 1)$. The square is convex, so they are path homotopic
in the square; composing with $G$ gives a path homotopy in $Y$:

$$
(\varphi \circ f) \cdot h \simeq h \cdot (\psi \circ f).
$$

Multiply on the left by $[\bar h]$: $[\bar h \cdot (\varphi \circ f) \cdot h] = [\psi \circ f]$, that is,
$\beta_h \varphi_*[f] = \psi_*[f]$. $\square$

**Theorem 13.16.** If $\varphi : X \to Y$ is a homotopy equivalence, then
$\varphi_* : \pi_1(X, x_0) \to \pi_1(Y, \varphi(x_0))$ is an isomorphism.

*Proof.* Let $\psi : Y \to X$ be a homotopy inverse, so $\psi\varphi \simeq \mathrm{id}_X$ and
$\varphi\psi \simeq \mathrm{id}_Y$. By Theorem 13.15 applied to $\psi\varphi \simeq \mathrm{id}_X$,

$$
\psi_* \circ \varphi_* = (\psi\varphi)_* = \beta_h \circ (\mathrm{id}_X)_* = \beta_h ,
$$

which is an isomorphism (Theorem 13.8). Here $\varphi_*$ starts at $\pi_1(X, x_0)$ and $\psi_*$ at
$\pi_1(Y, \varphi(x_0))$. Since $\psi_* \circ \varphi_*$ is bijective, $\varphi_*$ is injective and this $\psi_*$ is
surjective. Applying the same argument to $\varphi\psi \simeq \mathrm{id}_Y$ at the base point $\varphi(x_0)$ shows
that $\varphi'_* \circ \psi_*$ is bijective, where $\varphi'_*$ is $\varphi_*$ at the base point $\psi\varphi(x_0)$;
so $\psi_*$ is also injective. Thus $\psi_*$ is an isomorphism, and $\varphi_* = \psi_*^{-1} \circ \beta_h$ is one
too. $\square$

**Corollary 13.17.** A contractible space (one homotopy equivalent to a point) is simply connected. If $A$ is a
deformation retract of $X$, the inclusion $A \hookrightarrow X$ induces an isomorphism on $\pi_1$.

**Worked example: the punctured plane.** In [Chapter 12](12-Homotopy.md) the circle $S^1$ was shown to be a
deformation retract of $\mathbb{R}^2 \setminus \{0\}$, by $H(x, t) = (1 - t)x + t\, x/|x|$. So
$\pi_1(\mathbb{R}^2 \setminus \{0\}) \cong \pi_1(S^1)$, which Chapter 14 shows is $\mathbb{Z}$. This finally answers the
question at the start of the chapter: the loop around the hole is caught. Likewise the annulus, the solid torus and
the infinite cylinder $S^1 \times \mathbb{R}$ all have fundamental group $\mathbb{Z}$, while the sphere with two points
removed (which is homeomorphic to the cylinder, by stereographic projection from one of them) does too.

### Retractions

A **retraction** of $X$ onto a subspace $A$ is a continuous map $r : X \to A$ with $r(a) = a$ for every $a \in A$
([Chapter 12](12-Homotopy.md)). Write $i : A \to X$ for the inclusion; then $r \circ i = \mathrm{id}_A$.

**Proposition 13.18.** If $r : X \to A$ is a retraction and $a_0 \in A$, then
$i_* : \pi_1(A, a_0) \to \pi_1(X, a_0)$ is injective and $r_* : \pi_1(X, a_0) \to \pi_1(A, a_0)$ is surjective.

*Proof.* $r_* \circ i_* = (r \circ i)_* = \mathrm{id}$. A map with a left inverse is injective, and a map with a
right inverse is surjective. $\square$

**Corollary 13.19.** If $X$ is simply connected and $A$ is a retract of $X$, then $A$ is simply connected (if it is
path connected).

This is a clean obstruction. The disc $D^2$ is simply connected. If the circle were a retract of the disc, the circle
would be simply connected. Chapter 14 proves it is not, so **there is no retraction of the disc onto its boundary
circle**, and from that one fact comes the Brouwer fixed point theorem ([Chapter 14](14-The-Circle-and-Covering-Spaces.md#144-the-brouwer-fixed-point-theorem-in-two-dimensions)).

### Free homotopy and the empty base point

You will sometimes see homotopy classes of maps $S^1 \to X$, with no base point and no fixed ends, called **free
homotopy classes**. For a path-connected $X$ they correspond exactly to the conjugacy classes of $\pi_1(X, x_0)$. The
proof uses the base-point-change computation of 13.3: sliding the base point of a loop around another loop $g$
replaces $[f]$ by $[g]^{-1}[f][g]$. For an abelian group, conjugacy classes are single elements, so free and based
classes match. This is why, for the circle and the torus, you can count loops without worrying about base points.

## Check yourself

??? question "1. Let $\omega(s) = (\cos 2\pi s, \sin 2\pi s)$ and $\bar\omega$ its reverse. Write $\omega \cdot \bar\omega$ as an explicit formula and describe its motion."

    For $0 \le s \le \tfrac12$ it is $\omega(2s) = (\cos 4\pi s, \sin 4\pi s)$, once around anticlockwise at double speed.
    For $\tfrac12 \le s \le 1$ it is $\bar\omega(2s - 1) = \omega(2 - 2s) = (\cos 4\pi s, -\sin 4\pi s)$,
    since $\cos(4\pi - 4\pi s) = \cos 4\pi s$ and $\sin(4\pi - 4\pi s) = -\sin 4\pi s$: once around clockwise. Check at $s = 0.75$: $(\cos 3\pi, -\sin 3\pi) = (-1, 0)$,
    halfway back. By Theorem 13.6 this loop is homotopic to the constant loop, even in the circle: the homotopy
    shortens the trip, going out only as far as $\omega(1 - t)$ and coming back.

??? question "2. Show directly that any loop $f$ at the origin in $\mathbb{R}^2$ is path homotopic to the constant loop. Why does the same formula not work in $\mathbb{R}^2 \setminus \{(1, 1)\}$?"

    $F(s, t) = (1 - t)f(s)$ is continuous, equals $f$ at $t = 0$ and the origin at $t = 1$, and keeps the base point
    fixed: $F(0, t) = (1 - t)\cdot 0 = 0$. In $\mathbb{R}^2 \setminus \{(1, 1)\}$ the segment from $f(s)$ to the origin
    may pass through $(1, 1)$, for example if $f(s) = (2, 2)$; then $F(s, \tfrac12) = (1, 1)$ is outside the space.
    (That space is still not simply connected, but the reason is the hole, not this failed formula.)

??? question "3. Using only the definitions, show that $(f \cdot g) \cdot h$ and $f \cdot (g \cdot h)$ are usually different maps by evaluating both at $s = 1/8$."

    $((f \cdot g) \cdot h)(\tfrac18) = (f \cdot g)(\tfrac14) = f(\tfrac12)$. And $(f \cdot (g \cdot h))(\tfrac18) = f(\tfrac14)$.
    These differ whenever $f(\tfrac12) \ne f(\tfrac14)$, for example for $f = \omega$ in the circle, where they are
    $(-1, 0)$ and $(0, 1)$. Only their path classes agree.

??? question "4. Prove that if $h \simeq h'$ (paths from $x_0$ to $x_1$), then $\beta_h = \beta_{h'}$."

    By Lemma 13.2 (applied twice) and the fact that $\bar h \simeq \bar{h'}$ (reverse the time of a homotopy:
    $\bar F(s, t) = F(1 - s, t)$), we have $\bar h \cdot f \cdot h \simeq \bar{h'} \cdot f \cdot h'$ for every loop $f$.
    So $\beta_h[f] = \beta_{h'}[f]$.

??? question "5. Let $X$ be path connected with abelian fundamental group. Show that $\beta_h$ does not depend on the path $h$ from $x_0$ to $x_1$."

    From 13.3, $\beta_k^{-1}\beta_h[f] = [g]^{-1}[f][g]$ with $g = h \cdot \bar k$ a loop at $x_0$. In an abelian group
    $[g]^{-1}[f][g] = [f]$, so $\beta_k^{-1}\beta_h$ is the identity and $\beta_h = \beta_k$.

??? question "6. Prove that a star-shaped set is path connected and simply connected. Is the union of the two coordinate axes in $\mathbb{R}^2$ simply connected?"

    If $X$ is star shaped about $p$, any $x, y \in X$ are joined by the segment from $x$ to $p$ followed by the segment
    from $p$ to $y$. For a loop $f$ at $p$, $F(s, t) = (1 - t)f(s) + tp$ stays in $X$ and contracts $f$; by
    Corollary 13.9 the group is trivial everywhere. The union of the axes is star shaped about the origin (the
    segment from any point on an axis to the origin lies on that axis), so yes, it is simply connected.

??? question "7. Compute $\pi_1(S^1 \times S^2 \times \mathbb{R}^3)$ and $\pi_1(T^2 \times S^1)$, using $\pi_1(S^1) \cong \mathbb{Z}$ from Chapter 14."

    Products give $\mathbb{Z} \times \{1\} \times \{1\} \cong \mathbb{Z}$ and
    $\mathbb{Z} \times \mathbb{Z} \times \mathbb{Z} = \mathbb{Z}^3$ (the three-torus).

??? question "8. Show that the sphere with two points removed has fundamental group $\mathbb{Z}$."

    Rotate the sphere so the removed points are the north pole $N$ and some point $q$. Stereographic projection from
    $N$ is a homeomorphism from $S^2 \setminus \{N\}$ to $\mathbb{R}^2$; it sends $q$ to a single point $q'$. So
    $S^2 \setminus \{N, q\} \cong \mathbb{R}^2 \setminus \{q'\}$. Translate $q'$ to the origin; the punctured plane
    deformation retracts onto a circle around it, so by Corollary 13.17 the group is $\pi_1(S^1) \cong \mathbb{Z}$.

??? question "9. A continuous map $\varphi : X \to Y$ is constant. What is $\varphi_*$? Deduce that if $\varphi_*$ is not the trivial homomorphism, $\varphi$ is not homotopic to a constant map by a homotopy fixing the base point."

    $\varphi \circ f$ is a constant loop for every $f$, so $\varphi_*$ sends everything to the identity. If
    $\varphi \simeq c$ fixing the base point, Theorem 13.15 gives $\varphi_* = c_*$, the trivial map. So a nontrivial
    $\varphi_*$ rules this out. (If the base point is allowed to move, $\varphi_* = \beta_h \circ c_*$ is still trivial,
    so the conclusion holds for any homotopy.)

??? question "10. Let $A$ be a retract of $X$, with $X$ simply connected. Prove that $A$ is simply connected (assuming it is path connected). Use this, together with $\pi_1(S^1) \cong \mathbb{Z}$, to show that the circle is not a retract of the disc."

    By Proposition 13.18, $i_* : \pi_1(A, a_0) \to \pi_1(X, a_0) = \{1\}$ is injective, so $\pi_1(A, a_0)$ is trivial.
    The disc is convex, hence simply connected; if $S^1$ were a retract, $\pi_1(S^1)$ would be trivial, but it is
    $\mathbb{Z}$. So no retraction exists.

??? question "11. Show that $\mathbb{R}^2$ is not homeomorphic to $\mathbb{R}^n$ for $n \ge 3$, using the fundamental group of the space with one point removed."

    A homeomorphism $\varphi : \mathbb{R}^2 \to \mathbb{R}^n$ would restrict to a homeomorphism
    $\mathbb{R}^2 \setminus \{p\} \to \mathbb{R}^n \setminus \{\varphi(p)\}$. The first space has $\pi_1 \cong \mathbb{Z}$
    (Question 8's argument). The second deformation retracts onto $S^{n-1}$ (by $x \mapsto x/|x|$ after translating),
    and $S^{n-1}$ is simply connected for $n - 1 \ge 2$ (Theorem 13.12). Since $\mathbb{Z} \not\cong \{1\}$, no such
    homeomorphism exists. (The same idea with connectedness, removing a point, separates $\mathbb{R}$ from $\mathbb{R}^2$
    in [Chapter 7](07-Connectedness.md).)

??? question "12. Where exactly does the proof of Theorem 13.12 fail for $n = 1$, and why must it fail?"

    In Step 2 we need a path inside the edge $\partial B$ joining the two points where the loop enters and leaves the
    small cap. For $n = 1$ the cap is an arc, and its edge is two points, which cannot be joined by a path within the
    edge. It must fail because the conclusion is false for $n = 1$: the loop $\omega$ around $S^1$ is not homotopic to
    a constant, as Chapter 14 proves.

## What you learned

- A loop is a path that returns to its base point; loops are joined end to end at double speed, and a path
  homotopy deforms a path while keeping its ends fixed.
- Up to path homotopy, joining loops is associative, the constant loop is an identity, and the reversed loop is an
  inverse; each law is proved by an explicit homotopy, most of them by reparametrising time.
- The result is the fundamental group $\pi_1(X, x_0)$; in a path-connected space it is independent of the base point
  up to an isomorphism that is canonical only up to conjugation.
- Convex and star-shaped sets, and the spheres $S^n$ for $n \ge 2$, are simply connected; products of spaces have
  products of groups.
- Continuous maps induce homomorphisms, compatibly with composition. So homeomorphic, and even homotopy equivalent,
  spaces have isomorphic groups, and different groups prove spaces different.
- A retraction gives an injective map on $\pi_1$, which will show that the disc does not retract onto its boundary.

**Next:** [Chapter 14](14-The-Circle-and-Covering-Spaces.md) proves $\pi_1(S^1) \cong \mathbb{Z}$ by lifting loops to
the real line, and uses it to prove the fundamental theorem of algebra and the fixed point theorems of Brouwer and
Borsuk-Ulam in the plane.

## Further reading

- Allen Hatcher, *Algebraic Topology*, Cambridge University Press, 2002 (free online from the author), Section 1.1.
- James R. Munkres, *Topology*, 2nd edition, Prentice Hall, 2000, Chapter 9.
- William S. Massey, *A Basic Course in Algebraic Topology*, Springer, 1991, Chapter 2.
- John M. Lee, *Introduction to Topological Manifolds*, 2nd edition, Springer, 2011, Chapter 7.
- Henri Poincaré, *Papers on Topology: Analysis Situs and Its Five Supplements*, translated by John Stillwell,
  American Mathematical Society, 2010.
- On this site: [Algebra Chapter 13, Groups](../algebra/13-Groups.md),
  [Algebra Chapter 15, Homomorphisms and quotients](../algebra/15-Homomorphisms-and-Quotients.md),
  [Calculus Chapter 20, Metric spaces and the topology of R](../calculus/20-Metric-Spaces-and-Topology-of-R.md),
  [Geometry Chapter 20, Manifolds and Riemannian geometry](../geometry/20-Manifolds-and-Riemannian-Geometry.md),
  and the U of T guide [MAT257 Unit 3, Continuity and connectedness](../../uoft/MAT257Y1/unit03.md).
- The [topology book's index](index.md) and the other books on the shelf, such as [Algebra](../algebra/index.md).
