# 8. Catalan numbers and lattice paths

*Walk on a grid from one corner to the opposite one, one step east or north at a time. How many routes are there? That
is easy. How many never cross the diagonal? That is harder, and its answer, $\frac{1}{n+1}\binom{2n}{n}$, turns up
again and again: in the ways to bracket a product, to cut a polygon into triangles, to build binary trees, to pair
people around a table without crossing arms. These are the Catalan numbers. In this chapter you will count grid paths,
prove the reflection principle, derive the Catalan formula three ways (by reflection, by a cyclic shift, and by a
generating function), see why so many problems share it, solve Bertrand's ballot problem, and meet the Catalan
numbers' relatives: Narayana, Motzkin and Schröder.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to count lattice paths, with and without forbidden points
    - the reflection principle, with a proof, and the Catalan formula $\frac{1}{n+1}\binom{2n}{n}$ from it
    - why brackets, triangulations, binary trees, Dyck paths and non-crossing handshakes are all counted by Catalan numbers
    - the cycle lemma, a second proof of the formula
    - the generating function $\frac{1 - \sqrt{1-4x}}{2x}$ and the growth rate $4^n/(\sqrt{\pi}\,n^{3/2})$
    - Bertrand's ballot theorem, and its honest history
    - Narayana, Motzkin, Schröder and Fuss-Catalan numbers

    **You need:** [Chapter 2](02-Permutations-and-Combinations.md) and [Chapter 3](03-Binomial-Coefficients.md)
    (binomial coefficients, Stirling's approximation) for §8.1 to §8.3, and [Chapter 7](07-Generating-Functions.md)
    for §8.4. The gentler versions are [Grid paths](../../topics/counting/level-5/04-grid-paths.md) and
    [Catalan numbers](../../topics/counting/level-8/02-catalan-numbers.md).

    **Levels:** 8.1 is beginner to intermediate; 8.2 and 8.3 are intermediate; 8.4 and 8.5 are advanced;
    8.6 is advanced, with pointers to expert work.

## 8.1 Lattice paths

A **lattice point** is a point $(x, y)$ of the plane with whole-number coordinates. A **lattice path** here is a route
from one lattice point to another made of unit steps, each either **east**, $E = (1, 0)$, or **north**, $N = (0, 1)$.

**How many paths from $(0,0)$ to $(m, n)$?** Every such path has exactly $m$ east steps and $n$ north steps, $m + n$
in all, in some order. Conversely any order of $m$ E's and $n$ N's is a path that ends at $(m, n)$. So a path is the
same as a choice of which $n$ of the $m + n$ steps are north:

$$
\#\{\text{paths } (0,0) \to (m, n)\} = \binom{m + n}{n} = \frac{(m + n)!}{m!\,n!} .
$$

For example, from $(0,0)$ to $(6,4)$ there are $\binom{10}{4} = 210$ paths. A taxi driver in a city of square blocks,
six blocks east and four north of her destination, has 210 shortest routes.

**Another way to see it: Pascal.** Let $P(a, b)$ be the number of paths to $(a, b)$. The last step into $(a,b)$ came
from $(a - 1, b)$ or $(a, b - 1)$, so $P(a, b) = P(a - 1, b) + P(a, b - 1)$, with $P(a, 0) = P(0, b) = 1$. That is
Pascal's rule, and writing the numbers on the grid gives Pascal's triangle turned on its side
([Chapter 3](03-Binomial-Coefficients.md)).

**Through a point.** How many of the 210 paths to $(6, 4)$ pass through $(3, 2)$? A path through $(3,2)$ is a path to
$(3,2)$ followed by a path from $(3,2)$ to $(6,4)$, which is like a path from $(0,0)$ to $(3,2)$. By the product rule,
$\binom{5}{2}\binom{5}{2} = 10 \cdot 10 = 100$. So $210 - 100 = 110$ paths avoid that point: if the corner at $(3,2)$
is closed for roadworks, 110 routes remain.

**An identity from paths.** Every path from $(0,0)$ to $(n,n)$ crosses the line $x + y = n$ exactly once, at some point
$(k, n - k)$. Counting by that point:

$$
\binom{2n}{n} = \sum_{k=0}^{n} \binom{n}{k}\binom{n}{n-k} = \sum_{k=0}^{n} \binom{n}{k}^2 .
$$

**Check.** $n = 4$: $1 + 16 + 36 + 16 + 1 = 70 = \binom{8}{4}$.

**In three dimensions.** Paths from $(0,0,0)$ to $(a,b,c)$ with unit steps in the three directions are arrangements of
$a$ x-steps, $b$ y-steps and $c$ z-steps: the multinomial coefficient $\frac{(a+b+c)!}{a!\,b!\,c!}$. To $(2,2,2)$ there
are $\frac{6!}{2!\,2!\,2!} = 90$.

**The question for the rest of the chapter.** Of the $\binom{2n}{n}$ paths from $(0,0)$ to $(n,n)$, how many never go
**above** the diagonal $y = x$? They may touch it, but at every point the path has taken at least as many east steps as
north steps. Call such a path **good**. For $n = 1$ there is 1 (EN, not NE). For $n = 2$ there are 2 (EENN and ENEN).
For $n = 3$ you can list 5: EEENNN, EENENN, EENNEN, ENEENN, ENENEN. The sequence $1, 2, 5, \dots$ (with 1 for $n = 0$)
is the start of the Catalan numbers.

## 8.2 The reflection principle

*Level: intermediate.*

Counting the good paths directly is hard. Counting the **bad** ones, the paths that go above the diagonal somewhere, turns
out to be easy, thanks to a mirror.

A path goes above $y = x$ exactly when it touches the line $y = x + 1$ (one step above the diagonal): steps are of length
one, so to get strictly above $y = x$ a path must land on a point with $y = x + 1$.

!!! note "Lemma (reflection)"
    The paths from $(0,0)$ to $(n,n)$ that touch the line $y = x + 1$ are in bijection with all paths from $(0,0)$ to $(n-1, n+1)$.

**Proof.** Take a bad path, and let $T$ be the **first** point where it touches $y = x + 1$. Reflect the part of the path
after $T$ in the line $y = x + 1$; reflection in that line swaps east and north steps, so the reflected part is still a
lattice path. Reflection sends a point $(x,y)$ to $(y - 1, x + 1)$, so the end $(n, n)$ goes to $(n - 1, n + 1)$. That
gives a path from $(0,0)$ to $(n-1,n+1)$.

Going back: every path from $(0,0)$ to $(n-1, n+1)$ must touch $y = x + 1$, because it starts with $y - x = 0$ and ends
with $y - x = 2$, and $y - x$ changes by exactly 1 at each step. Reflect the part after its first touching point and
you get a path to $(n,n)$ that touches the line. The two operations undo each other (they use the same first touching
point, which the reflection does not change). So they are a bijection. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 310 230" role="img" aria-label="A grid with the diagonal y equals x and the line y equals x plus 1. An orange path from A at (0,0) to B at (4,4) first touches the upper line at (1,2). After that point its blue reflection ends at B prime, (3,5).">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.4">
    <line x1="30" y1="200" x2="150" y2="200"/><line x1="30" y1="170" x2="150" y2="170"/><line x1="30" y1="140" x2="150" y2="140"/>
    <line x1="30" y1="110" x2="150" y2="110"/><line x1="30" y1="80" x2="150" y2="80"/><line x1="30" y1="50" x2="150" y2="50"/>
    <line x1="30" y1="50" x2="30" y2="200"/><line x1="60" y1="50" x2="60" y2="200"/><line x1="90" y1="50" x2="90" y2="200"/>
    <line x1="120" y1="50" x2="120" y2="200"/><line x1="150" y1="50" x2="150" y2="200"/>
  </g>
  <line x1="30" y1="200" x2="150" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="30" y1="170" x2="150" y2="50" stroke="#7ccf9a" stroke-width="2"/>
  <polyline points="30,200 60,200 60,170 60,140 90,140 120,140 120,110 150,110 150,80" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="60,140 60,110 60,80 90,80 90,50 120,50" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="60" cy="140" r="4" fill="currentColor"/>
  <g fill="currentColor" font-size="13">
    <text x="12" y="215">A</text>
    <text x="156" y="76">B</text>
    <text x="124" y="44">B′</text>
    <text x="66" y="150">T</text>
    <text x="170" y="120">dashed: y = x</text>
    <text x="170" y="140">green: y = x + 1</text>
    <text x="170" y="160">orange: a bad path</text>
    <text x="170" y="180">blue: tail reflected</text>
  </g>
</svg>
</div>

**The count.** There are $\binom{2n}{n-1}$ paths to $(n - 1, n + 1)$, so $\binom{2n}{n-1}$ bad paths, and

$$
\#\{\text{good paths}\} = \binom{2n}{n} - \binom{2n}{n-1} .
$$

Simplify, using $\binom{2n}{n-1} = \frac{(2n)!}{(n-1)!\,(n+1)!} = \frac{n}{n+1}\binom{2n}{n}$:

$$
\binom{2n}{n} - \frac{n}{n+1}\binom{2n}{n} = \frac{1}{n+1}\binom{2n}{n} .
$$

!!! note "Definition (Catalan numbers)"
    The $n$-th Catalan number is $C_n = \frac{1}{n+1}\binom{2n}{n}$, the number of paths from $(0,0)$ to $(n,n)$ that never go above the diagonal.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $C_n$ | 1 | 1 | 2 | 5 | 14 | 42 | 132 | 429 | 1430 | 4862 | 16796 |

**Check.** $n = 3$: $\binom63 - \binom62 = 20 - 15 = 5$, matching the list in §8.1.

Since $C_n/\binom{2n}{n} = \frac{1}{n+1}$, a path chosen
at random among all $\binom{2n}{n}$ is good with probability exactly $\frac{1}{n+1}$. That is a strikingly simple answer,
and §8.3 gives a proof that explains the $\frac{1}{n+1}$ directly.

### The general reflection count

The same argument works for any end point below the line. The number of paths from $(0,0)$ to $(m,k)$ with $k \le m$
that never go above $y = x$ is

$$
\binom{m + k}{k} - \binom{m + k}{k - 1} = \frac{m - k + 1}{m + 1}\binom{m+k}{k} .
$$

(Reflecting the end $(m, k)$ in $y = x + 1$ gives $(k - 1, m + 1)$, which needs $k - 1$ east steps out of $m + k$.)
For example, to $(7, 3)$: $\binom{10}{3} - \binom{10}{2} = 120 - 45 = 75$. These numbers fill the **Catalan triangle**.

The principle is older and more general than lattice paths: it is used for random walks and for Brownian motion in
probability, where it gives the distribution of the maximum of a walk.

## 8.3 Catalan numbers everywhere

*Level: intermediate.*

Richard Stanley's book *Catalan Numbers* (2015) lists more than 200 different kinds of objects counted by $C_n$. Here are
the most important, and the two techniques that connect them: a shared recurrence, and direct bijections.

### Dyck paths and brackets

Turn the grid 45 degrees: write each east step as an up-step $U = (1, 1)$ and each north step as a down-step
$D = (1, -1)$. A good path becomes a path from $(0,0)$ to $(2n, 0)$ that never goes below the horizontal axis. Such a path
is a **Dyck path** of semilength $n$ (after the German mathematician Walther von Dyck). Think of it as a mountain range
drawn with $n$ upstrokes and $n$ downstrokes.

Now write "(" for $U$ and ")" for $D$. The condition "never below the axis" says: reading from the left, there are never
more closing brackets than opening ones. So Dyck paths are the same as **balanced bracket sequences**: $n$ pairs of
brackets that match up correctly. For $n = 3$:

$$
((())), \quad (()()), \quad (())(), \quad ()(()), \quad ()()() .
$$

### The Catalan recurrence

Every non-empty Dyck path returns to the axis for the first time at some point $(2k + 2, 0)$. Up to there it looks like
$U\,P_1\,D$, where $P_1$ is a Dyck path of semilength $k$ (raised by one level, so it never touches the axis); after
that comes an arbitrary Dyck path $P_2$ of semilength $n - k$. In brackets: every balanced sequence is uniquely
$(\,A\,)\,B$ with $A$ and $B$ balanced. This **first-return decomposition** gives

$$
C_{n+1} = \sum_{k=0}^{n} C_k\,C_{n-k}, \qquad C_0 = 1 .
$$

**Check.** $C_4 = C_0C_3 + C_1C_2 + C_2C_1 + C_3C_0 = 5 + 2 + 2 + 5 = 14$.

The recurrence, with $C_0 = 1$, determines every $C_n$. So **any family of objects that obeys the same recurrence with
the same start is counted by the Catalan numbers.** That is the first technique.

### Bracketing a product

In how many ways can you put brackets into a product $x_0x_1\cdots x_n$ of $n + 1$ factors, so that it says in which
order to do the $n$ multiplications? For four factors:

$$
((ab)c)d, \quad (a(bc))d, \quad (ab)(cd), \quad a((bc)d), \quad a(b(cd)) .
$$

Five ways. In general the **last** multiplication splits the product into a left part $x_0\cdots x_k$ (with $k + 1$
factors) and a right part $x_{k+1}\cdots x_n$ (with $n - k$ factors), each bracketed in any way. If $b_n$ counts
bracketings of $n + 1$ factors, then $b_n = \sum_{k} b_k b_{n-1-k}$ with $b_0 = 1$: the Catalan recurrence. So $b_n =
C_n$. This was the problem Eugène Catalan solved in 1838.

### Binary trees

A **binary tree** is either empty or a root with a left subtree and a right subtree, each a binary tree. The number of
binary trees with $n$ nodes satisfies: one node is the root, and the other $n - 1$ split as $k$ in the left subtree and
$n - 1 - k$ in the right. Again the Catalan recurrence. So there are $C_n$ binary trees with $n$ nodes. (A bracketing
of $n + 1$ factors is the same as a binary tree: the last multiplication is the root.)

### Triangulations of a polygon

A **triangulation** of a convex polygon cuts it into triangles by diagonals that do not cross. A convex $(n + 2)$-gon
has $C_n$ triangulations. The pentagon ($n = 3$) has 5:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 410 95" role="img" aria-label="The five triangulations of a regular pentagon. In each, two orange diagonals from one vertex cut the pentagon into three triangles; the five pictures use the five different vertices.">
  <polygon points="44.0,12.0 80.1,38.3 66.3,80.7 21.7,80.7 7.9,38.3" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="44.0" y1="12.0" x2="66.3" y2="80.7" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="44.0" y1="12.0" x2="21.7" y2="80.7" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="124.0,12.0 160.1,38.3 146.3,80.7 101.7,80.7 87.9,38.3" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="160.1" y1="38.3" x2="101.7" y2="80.7" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="160.1" y1="38.3" x2="87.9" y2="38.3" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="204.0,12.0 240.1,38.3 226.3,80.7 181.7,80.7 167.9,38.3" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="226.3" y1="80.7" x2="167.9" y2="38.3" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="226.3" y1="80.7" x2="204.0" y2="12.0" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="284.0,12.0 320.1,38.3 306.3,80.7 261.7,80.7 247.9,38.3" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="261.7" y1="80.7" x2="284.0" y2="12.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="261.7" y1="80.7" x2="320.1" y2="38.3" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="364.0,12.0 400.1,38.3 386.3,80.7 341.7,80.7 327.9,38.3" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="327.9" y1="38.3" x2="400.1" y2="38.3" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="327.9" y1="38.3" x2="386.3" y2="80.7" stroke="#eea66f" stroke-width="2.5"/>
</svg>
</div>

**Proof.** Label the polygon's vertices $v_0, v_1, \dots, v_{n+1}$ and look at the side $v_0v_{n+1}$. In any
triangulation it lies in exactly one triangle, whose third vertex is some $v_{k+1}$ with $0 \le k \le n - 1$. That
triangle splits the rest into the polygon $v_0v_1\cdots v_{k+1}$ (with $k + 2$ vertices) and the polygon
$v_{k+1}\cdots v_{n+1}$ (with $n - k + 1$ vertices), triangulated independently. (A "polygon" with 2 vertices is just an
edge, with one empty triangulation.) If $t_n$ counts triangulations of an $(n+2)$-gon, then
$t_n = \sum_{k=0}^{n-1} t_k t_{n-1-k}$, with $t_0 = 1$: Catalan again. $\square$

This problem is the oldest: Leonhard Euler counted triangulations in 1751, in a letter to Christian Goldbach, and found
the numbers $1, 2, 5, 14, 42, 132, \dots$ with a product formula; Johann Segner gave the recurrence in 1758.

### Non-crossing handshakes, and plane trees

- $2n$ people sit around a round table and shake hands in $n$ pairs at once, with no two arms crossing. Person 1 shakes
  hands with someone, which splits the others into two groups (those on each side of that handshake) who must shake
  hands among themselves, without crossing it. Each group has even size. That is the Catalan recurrence again: $C_n$
  ways. Eight people: $C_4 = 14$.
- A **plane tree** (or ordered tree) is a rooted tree in which the children of each node are put in order. Walk around
  a plane tree with $n + 1$ nodes, starting at the root and keeping the tree on your left; write $U$ each time you go
  down an edge (away from the root) and $D$ each time you come back up. Each of the $n$ edges is walked once down and
  once up, and you can never come up more often than you went down. So you get a Dyck path of semilength $n$, and every
  Dyck path comes from exactly one tree. There are $C_n$ plane trees with $n + 1$ nodes.

### A second proof of the formula: the cycle lemma

*Level: advanced.*

Why $\frac{1}{n+1}$? Here is an argument that explains it. Write $U = +1$ and $D = -1$, and consider all sequences of
$n$ $U$'s and $n + 1$ $D$'s. There are $\binom{2n+1}{n}$ of them, and each has total $-1$.

!!! note "Cycle lemma"
    For each such sequence, exactly one of its $2n + 1$ cyclic shifts has all its proper partial sums $\ge 0$ (that is, the sums of its first $j$ terms, for $1 \le j \le 2n$). Moreover the $2n + 1$ cyclic shifts are all different.

**Proof.** *Shifts are different.* If a sequence equalled one of its shifts by $d$ places, $0 < d < 2n + 1$, it would
repeat with period $g = \gcd(d, 2n+1)$, so it would be made of $(2n+1)/g$ copies of one block. The total $-1$ would then
be $(2n+1)/g$ times the block's sum, so $(2n+1)/g$ divides $1$, giving $g = 2n + 1$, which is impossible as $g \le d$.

*Exactly one good shift.* Let $S_0 = 0, S_1, \dots, S_{2n+1} = -1$ be the partial sums, and let $i$ be the **first**
index in $0, 1, \dots, 2n$ at which $S_i$ is smallest. Start the sequence just after position $i$. The partial sums of
the shifted sequence are $S_t - S_i$ for $t = i + 1, \dots, 2n + 1$, which are $\ge 0$ by the choice of $i$, except the
last one, $-1 - S_i$, which is $\ge 0$ as well when $i > 0$ (because then $S_i < S_0 = 0$, so $S_i \le -1$); then come
$-1 - S_i + S_t$ for $t = 1, \dots, i - 1$, which are $\ge 0$ because $S_t > S_i$ for $t < i$. So this shift is good.
Conversely, if the shift starting after position $i$ is good, those same inequalities force $S_i$ to be the smallest
value, reached for the first time at $i$. So the good shift is unique. $\square$

**The count.** Group the $\binom{2n+1}{n}$ sequences into classes of $2n + 1$ cyclic shifts. Each class contains exactly
one good sequence. A good sequence always ends in $D$ (its last partial sum drops to $-1$), and deleting that $D$ leaves
a Dyck path; every Dyck path arises this way. So

$$
C_n = \frac{1}{2n+1}\binom{2n+1}{n} = \frac{(2n)!}{n!\,(n+1)!} = \frac{1}{n+1}\binom{2n}{n} .
$$

The fraction $\frac{1}{2n+1}$ is now visible: one good sequence in each orbit of size $2n + 1$. This argument goes back
to Aryeh Dvoretzky and Theodore Motzkin (1947), and the same idea counts many tree families (exercise 12).

<figure class="play" data-play="lattice"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Lattice paths on a grid: of all (2n choose n), exactly 1 in n + 1 never rise above the diagonal. That count is the Catalan number.</figcaption></figure>

## 8.4 The generating function derivation

*Level: advanced.*

Here is a third derivation, which [Chapter 7](07-Generating-Functions.md) prepared. Let

$$
C(x) = \sum_{n \ge 0} C_n x^n = 1 + x + 2x^2 + 5x^3 + 14x^4 + \dots
$$

The recurrence $C_{n+1} = \sum_k C_kC_{n-k}$ says the coefficient of $x^n$ in $C(x)^2$ is $C_{n+1}$. So
$C(x)^2 = \sum_n C_{n+1}x^n = \frac{C(x) - 1}{x}$, that is,

$$
x\,C(x)^2 - C(x) + 1 = 0 .
$$

In words: a Dyck path is empty (the 1), or $U\,P_1\,D\,P_2$ (one $x$ for the pair $U$, $D$, times $C(x)$ for each of
$P_1$, $P_2$). This is a quadratic equation in $C(x)$, and the quadratic formula gives

$$
C(x) = \frac{1 \pm \sqrt{1 - 4x}}{2x} .
$$

Which sign? $C(x)$ must be a power series with constant term 1. With the plus sign the numerator tends to 2 as
$x \to 0$, so the fraction blows up like $1/x$: not a power series. With the minus sign the numerator starts
$1 - (1 - 2x - \dots) = 2x + \dots$, which is divisible by $x$. So

$$
C(x) = \frac{1 - \sqrt{1 - 4x}}{2x} .
$$

**Reading off the coefficients.** By Newton's binomial theorem (§7.1),
$\sqrt{1 - 4x} = \sum_{k \ge 0} \binom{1/2}{k}(-4)^k x^k$. Compute the coefficient for $k \ge 1$:

$$
\binom{1/2}{k} = \frac{\frac12\left(\frac12 - 1\right)\cdots\left(\frac12 - k + 1\right)}{k!} = \frac{(-1)^{k-1}}{2^k}\cdot\frac{1 \cdot 1 \cdot 3 \cdot 5 \cdots (2k - 3)}{k!} .
$$

The product of odd numbers is $1 \cdot 3 \cdots (2k-3) = \frac{(2k-2)!}{2^{k-1}(k-1)!}$. Multiplying by $(-4)^k$, the
signs and powers of 2 combine: $(-1)^{k-1}(-1)^k = -1$ and $4^k/(2^k\,2^{k-1}) = 2$. So

$$
[x^k]\sqrt{1 - 4x} = -\frac{2}{k}\cdot\frac{(2k-2)!}{(k-1)!\,(k-1)!} = -\frac{2}{k}\binom{2k-2}{k-1} \qquad (k \ge 1).
$$

**Check.** $k = 1, 2, 3$: $-2$, $-2$, $-4$; and indeed $\sqrt{1-4x} = 1 - 2x - 2x^2 - 4x^3 - \dots$ (square it to see).

Then $1 - \sqrt{1 - 4x} = \sum_{k \ge 1} \frac{2}{k}\binom{2k-2}{k-1}x^k$, and dividing by $2x$ (so $k = n + 1$):

$$
C_n = \frac{1}{n+1}\binom{2n}{n} .
$$

Three proofs, three ideas: a mirror, a rotation and a quadratic equation.

### Consequences

**A first-order recurrence.** From the formula, $\frac{C_{n+1}}{C_n} = \frac{(2n+2)(2n+1)}{(n+2)(n+1)} = \frac{2(2n+1)}{n+2}$,
so $C_{n+1} = \frac{2(2n+1)}{n+2}C_n$. This is the quickest way to compute a table: $C_5 = \frac{2\cdot9}{6}\cdot14 = 42$.

**Growth.** The ratio $\frac{2(2n+1)}{n+2}$ tends to 4, so $C_n$ grows roughly like $4^n$. To be precise, Stirling's
approximation $n! \sim \sqrt{2\pi n}\,(n/e)^n$ ([Chapter 3](03-Binomial-Coefficients.md)) gives
$\binom{2n}{n} \sim \frac{4^n}{\sqrt{\pi n}}$, so

$$
C_n \sim \frac{4^n}{\sqrt{\pi}\,n^{3/2}} .
$$

This agrees with the singularity view of [Chapter 7](07-Generating-Functions.md): $C(x)$ has its singularity at
$x = \frac14$ (where $\sqrt{1 - 4x}$ stops being smooth), which gives the $4^n$; the square-root type gives the
$n^{-3/2}$. The estimate is good but slow to settle: the ratio of $C_n$ to it is about 0.898 for $n = 10$ and 0.989 for
$n = 100$.

## 8.5 The ballot problem

*Level: advanced.*

In an election, candidate A receives $a$ votes and candidate B receives $b$ votes, with $a > b$. The votes are counted
one at a time, in a random order. What is the probability that A is **strictly ahead** throughout the count?

!!! note "Ballot theorem"
    If all orders of the votes are equally likely, the probability that A stays strictly ahead from the first vote counted to the last is $\frac{a - b}{a + b}$.

Joseph Bertrand stated this in 1887; Désiré André published a proof the same year.

**Proof.** Picture the count as a path: up one for a vote for A, down one for a vote for B, starting at height 0. There
are $\binom{a+b}{a}$ paths, ending at height $a - b > 0$. A good path stays strictly above 0 after the start. So its
first step must be up, and from the point $(1, 1)$ it must never touch height 0.

Count the paths from $(1,1)$ to $(a + b, a - b)$ that **do** touch 0. Reflect the part **before** the first touching
point in the horizontal axis. This gives a path from $(1, -1)$ to $(a + b, a - b)$, and, as in §8.2, this is a
bijection with all paths from $(1, -1)$ to $(a + b, a - b)$ (every such path must cross 0). A path from $(1,-1)$ climbs
$a - b + 1$ in $a + b - 1$ steps, so it has $a$ ups and $b - 1$ downs: there are $\binom{a + b - 1}{a}$ of them. All paths
from $(1,1)$ have $a - 1$ ups and $b$ downs: $\binom{a+b-1}{a-1}$. So the good paths number

$$
\binom{a + b - 1}{a - 1} - \binom{a + b - 1}{a} = \frac{a}{a+b}\binom{a+b}{a} - \frac{b}{a+b}\binom{a+b}{a} = \frac{a - b}{a + b}\binom{a+b}{a} .
$$

Dividing by $\binom{a+b}{a}$ gives the theorem. $\square$

**Worked example.** A wins 5 to 3. Of the $\binom{8}{3} = 56$ orders, $\frac{2}{8}\cdot56 = 14$ keep A strictly ahead
throughout: probability $\frac14$.

**Check.** A brute-force count over all 56 orders gives 14.

**Catalan again.** Take $a = n + 1$, $b = n$: the number of counts in which A stays strictly ahead is
$\frac{1}{2n+1}\binom{2n+1}{n} = C_n$. Indeed, the first vote is for A, and the remaining $2n$ votes take the path
from height 1 back to height 1 without ever touching 0. So these counts are Dyck paths of semilength $n$, raised by one.

**A weak version.** The probability that A is **never behind** (ties allowed) is $\frac{a + 1 - b}{a + 1}$ for
$a \ge b$ (exercise 11). With $a = b = n$ this is $\frac{1}{n+1}$, the probability of a good path in §8.2.

### History, honestly

The ballot theorem is a good example of how mathematical history gets simplified. Bertrand posed and stated it in 1887
in the *Comptes rendus* of the French Academy, and André published a proof in the same journal a few weeks later.
Textbooks have long said that André's proof was the reflection argument. As Marc Renault pointed out in 2008, it was
not: André used a different bijection, a switching of an initial segment, close in spirit but not a reflection. The
reflection picture seems to have been attached to André's name later. Also, a closely related result had appeared
earlier, in William Allen Whitworth's *Choice and Chance* (1878). So the theorem has several fathers, and the
"reflection principle of André" is better called just the reflection principle.

## 8.6 Narayana and beyond

*Level: advanced; the last part points to expert work.*

### Narayana numbers: counting peaks

A **peak** of a Dyck path is a place where an up-step is immediately followed by a down-step. Let $N(n, k)$ be the number
of Dyck paths of semilength $n$ with exactly $k$ peaks. For $n = 3$: $((()))$ has 1 peak, $()()()$ has 3, and the other
three have 2. So $N(3,1), N(3,2), N(3,3) = 1, 3, 1$.

!!! note "Theorem (Narayana)"
    $N(n, k) = \frac{1}{n}\binom{n}{k}\binom{n}{k-1}$ for $1 \le k \le n$.

| $n \backslash k$ | 1 | 2 | 3 | 4 | 5 | 6 | sum |
|---|---|---|---|---|---|---|---|
| 1 | 1 | | | | | | 1 |
| 2 | 1 | 1 | | | | | 2 |
| 3 | 1 | 3 | 1 | | | | 5 |
| 4 | 1 | 6 | 6 | 1 | | | 14 |
| 5 | 1 | 10 | 20 | 10 | 1 | | 42 |
| 6 | 1 | 15 | 50 | 50 | 15 | 1 | 132 |

Each row sums to $C_n$ and is symmetric. These are the **Narayana numbers**, after T. V. Narayana, who studied them in
the 1950s.

**Proof sketch.** A Dyck path with $k$ peaks has $k$ runs of up-steps and $k$ runs of down-steps, alternating. Their
lengths form two compositions of $n$ into $k$ positive parts, $\binom{n-1}{k-1}$ choices each, but not every pair
gives a path that stays above the axis. Several bijective proofs show that the pairs that work number exactly
$\frac{1}{n}\binom{n}{k}\binom{n}{k-1}$; one of them adapts the cycle lemma of §8.3 to the sequence of runs. We do not
give the details here; Stanley's *Catalan Numbers* collects proofs. Exercise 10 checks two consequences, and a
brute-force count for $n \le 6$ agrees with the table.

The Narayana numbers also count non-crossing partitions of $\{1, \dots, n\}$ into $k$ blocks, and binary trees with $n$
nodes and $k$ left-leaning leaves, among other things: each Catalan family splits up by some natural statistic.

### Motzkin numbers

Allow a third, flat step $F = (1, 0)$ as well as $U$ and $D$, still never going below the axis, and count paths from
$(0, 0)$ to $(n, 0)$. These are **Motzkin paths**, counted by the **Motzkin numbers** $M_n$:

$$
1, 1, 2, 4, 9, 21, 51, 127, 323, 835, \dots
$$

Splitting on the first step: either it is $F$ followed by any Motzkin path of length $n - 1$, or it is $U$, followed by
a Motzkin path up to the first return, $D$, then another Motzkin path:

$$
M_n = M_{n-1} + \sum_{k=0}^{n-2} M_k M_{n-2-k} .
$$

$M_n$ also counts the ways to draw any number of non-crossing chords between $n$ points on a circle (each point used at
most once). The generating function satisfies $M(x) = 1 + xM(x) + x^2M(x)^2$, with singularity at $x = \frac13$, so
$M_n$ grows like $3^n$ times a power of $n$.

### Schröder numbers and Hipparchus

Now allow a diagonal step $(1,1)$ in the original east-north picture, and count paths from $(0,0)$ to $(n,n)$ using
$E$, $N$ and the diagonal step, never going above the diagonal. These are counted by the **large Schröder numbers**

$$
1, 2, 6, 22, 90, 394, 1806, \dots
$$

and, from $n = 1$ on, half of each is a **little Schröder number**: $1, 1, 3, 11, 45, 197, 903, 4279, 20793, 103049,
\dots$ The little Schröder numbers count the ways to bracket a sequence of $n$ symbols when a pair of brackets may
contain any number (at least two) of items, not just two: Ernst Schröder's "fourth problem" of 1870.

There is a remarkable footnote. Plutarch reports that the astronomer Hipparchus (second century BCE) found that from ten
simple propositions one can form 103,049 compound ones. For centuries this number was taken to be meaningless. In 1994,
David Hough, then a graduate student, noticed that 103,049 is exactly the tenth little Schröder number; Richard
Stanley wrote up the story in 1997, together with a reading of Hipparchus's count that produces it. Whatever Hipparchus
actually did, he seems to have solved a non-trivial counting problem correctly two thousand years ago.

### Fuss-Catalan numbers

Trees in which every internal node has exactly $m$ children (instead of 2) are counted by the **Fuss-Catalan
numbers**

$$
\frac{1}{(m-1)n + 1}\binom{mn}{n} ,
$$

$n$ being the number of internal nodes. For $m = 2$ this is $C_n$. For $m = 3$ (ternary trees) it gives
$1, 1, 3, 12, 55, 273, \dots$ The cycle lemma proves it (exercise 12). They are named after Nicolas Fuss, who in 1791
counted the ways to dissect a polygon into $(m+1)$-gons.

### Where this leads

*Level: expert, pointers only.*

Catalan numbers are a meeting point of much modern mathematics. In algebraic combinatorics, the $q$-analogues of
$C_n$ and the "$q,t$-Catalan numbers" of Adriano Garsia and Mark Haiman (1996) count Dyck paths by two statistics at
once and connect to the representation theory of symmetric groups and to the geometry of Hilbert schemes. In free
probability, non-crossing partitions play the role that ordinary set partitions play in classical probability, and the
Catalan numbers are the moments of the semicircle law, which also describes the eigenvalues of large random symmetric
matrices (Wigner's semicircle law). Stanley's *Catalan Numbers* (2015) is the place to start.

### History of the name

Ming Antu, a Mongolian astronomer and mathematician at the Qing court, met these numbers in the 1730s in infinite series
for trigonometric functions; his work, completed by his students, was published in 1839. In Europe, Euler and Segner
studied them through triangulations in the 1750s, as told in §8.3. Eugène Catalan met them in 1838 through bracketings,
and the numbers now carry his name, though he was neither the first nor the last to find them.

## Check yourself

??? question "1. How many shortest grid paths go from $(0,0)$ to $(5,5)$ through $(2,3)$?"

    To $(2,3)$: $\binom{5}{2} = 10$. From $(2,3)$ to $(5,5)$, 3 east and 2 north: $\binom{5}{2} = 10$. Total $100$.

??? question "2. How many paths from $(0,0)$ to $(6,6)$ avoid the centre point $(3,3)$?"

    All paths: $\binom{12}{6} = 924$. Through $(3,3)$: $\binom{6}{3}^2 = 400$. Avoiding it: $524$.

??? question "3. List the 14 balanced bracket sequences with 4 pairs, grouped by the first-return decomposition."

    Write each as $(A)B$. $A$ empty, $B$ of 3 pairs (5): $()((()))$, $()(()())$, $()(())()$, $()()(())$, $()()()()$.
    $A$ of 1 pair, $B$ of 2 (2): $(())(())$, $(())()()$. $A$ of 2, $B$ of 1 (2): $((()))()$, $(()())()$.
    $A$ of 3, $B$ empty (5): $(((())))$, $((()()))$, $((())())$, $(()(()))$, $(()()())$. Total $5 + 2 + 2 + 5 = 14$.

??? question "4. How many paths from $(0,0)$ to $(n,n)$ touch the diagonal only at their two ends? Check for $n = 4$."

    A path that stays strictly below the diagonal between the ends must start with $E$ and end with $N$, and in
    between it is a good path from $(1,0)$ to $(n, n-1)$ relative to the line $y = x - 1$: $C_{n-1}$ ways. The same
    number stay strictly above. So $2C_{n-1}$; for $n = 4$, $2 \cdot 5 = 10$, which a brute-force count confirms.

??? question "5. In how many ways can 10 people sitting around a round table shake hands in 5 pairs without crossing arms? How many triangulations does a convex octagon have?"

    Handshakes: $C_5 = 42$. An octagon is an $(n + 2)$-gon with $n = 6$: $C_6 = 132$.

??? question "6. Use $C_{n+1} = \frac{2(2n+1)}{n+2}C_n$ to compute $C_{11}$ from $C_{10} = 16796$."

    $C_{11} = \frac{2 \cdot 21}{12} \cdot 16796 = 3.5 \cdot 16796 = 58786$.

??? question "7. A wins an election 6 votes to 4. What is the probability that A was strictly ahead throughout the count? How many of the 210 orders is that?"

    $\frac{6 - 4}{6 + 4} = \frac15$, so $\frac{210}{5} = 42$ orders. (Check with the formula
    $\binom{9}{5} - \binom{9}{6} = 126 - 84 = 42$.)

??? question "8. How many paths from $(0,0)$ to $(7,3)$ never go above the line $y = x$?"

    $\binom{10}{3} - \binom{10}{2} = 120 - 45 = 75$, or $\frac{7 - 3 + 1}{7 + 1}\binom{10}{3} = \frac58 \cdot 120 = 75$.

??? question "9. Show that $\sqrt{1-4x} = 1 - 2x - 2x^2 - 4x^3 - 10x^4 - \dots$ by squaring, and explain how the coefficients relate to $C_n$."

    By §8.4 the coefficient of $x^k$ in $\sqrt{1-4x}$ is $-\frac{2}{k}\binom{2k-2}{k-1} = -2C_{k-1}$ for $k \ge 1$, so
    $\sqrt{1 - 4x} = 1 - 2x\,C(x)$, which is $C(x) = \frac{1 - \sqrt{1-4x}}{2x}$ rearranged. To check by squaring,
    use $xC^2 = C - 1$: $(1 - 2xC)^2 = 1 - 4xC + 4x^2C^2 = 1 - 4xC +
    4x(C - 1) = 1 - 4x$, using $xC^2 = C - 1$.

??? question "10. Check that the Narayana numbers of row $n = 5$ sum to $C_5$ and that the formula is symmetric: $N(n,k) = N(n, n+1-k)$."

    $\frac15\binom5k\binom5{k-1}$ for $k = 1..5$: $\frac15(5\cdot1, 10\cdot5, 10\cdot10, 5\cdot10, 1\cdot5) =
    1, 10, 20, 10, 1$, sum $42 = C_5$. Symmetry: $\binom{n}{n+1-k} = \binom{n}{k-1}$ and $\binom{n}{n-k} = \binom{n}{k}$,
    so swapping $k$ and $n + 1 - k$ swaps the two factors.

??? question "11. (Harder.) Prove that if A gets $a$ votes and B gets $b \le a$, the probability that A is never behind is $\frac{a+1-b}{a+1}$."

    A bad count is one whose path reaches height $-1$. Reflect the part before the first visit to $-1$ in the line
    $y = -1$: the start $0$ goes to $-2$. This is a bijection between bad paths and all paths from height $-2$ to
    $a - b$ in $a + b$ steps, which have $a + 1$ ups and $b - 1$ downs: $\binom{a+b}{a+1}$ of them. So the good count is
    $\binom{a+b}{a} - \binom{a+b}{a+1} = \binom{a+b}{a}\left(1 - \frac{b}{a+1}\right)$, probability $\frac{a+1-b}{a+1}$.
    Check: $a = 5$, $b = 3$: $\frac36 \cdot 56 = 28$ orders, as a brute-force count confirms.

??? question "12. (Harder.) Use the cycle lemma idea to show that the number of ternary trees with $n$ internal nodes is $\frac{1}{2n+1}\binom{3n}{n}$."

    Read a ternary tree in preorder (root, then its three subtrees left to right), writing $+2$ for an internal node
    and $-1$ for a leaf. A tree with $n$ internal nodes has $2n + 1$ leaves, so the sequence has length $3n + 1$ and
    total $-1$, and a sequence comes from a tree exactly when all its proper partial sums are $\ge 0$. The cycle lemma
    argument works word for word for steps of $+2$ and $-1$ with total $-1$: exactly one of the $3n + 1$ (distinct)
    cyclic shifts is good. So the count is $\frac{1}{3n+1}\binom{3n+1}{n} = \frac{1}{2n+1}\binom{3n}{n}$. Check
    $n = 2$: $\frac15\binom62 = 3$ (the second internal node is one of the three children of the root).

## What you learned

- There are $\binom{m+n}{n}$ lattice paths from $(0,0)$ to $(m,n)$; forbidden points are handled with the product rule
  and complements.
- The reflection principle counts paths that touch a line by reflecting them after the first touch, and gives
  $C_n = \binom{2n}{n} - \binom{2n}{n-1} = \frac{1}{n+1}\binom{2n}{n}$.
- Dyck paths, balanced brackets, bracketings of a product, binary trees, triangulations, non-crossing handshakes and
  plane trees are all counted by $C_n$, through the recurrence $C_{n+1} = \sum C_kC_{n-k}$ or direct bijections.
- The cycle lemma explains the factor $\frac{1}{2n+1}$: one good sequence in each orbit of cyclic shifts.
- The generating function satisfies $xC^2 - C + 1 = 0$, so $C(x) = \frac{1 - \sqrt{1-4x}}{2x}$, and
  $C_n \sim 4^n/(\sqrt\pi\,n^{3/2})$.
- In an election won $a$ to $b$, A leads throughout with probability $\frac{a-b}{a+b}$; the history of that theorem is
  more tangled than the textbooks say.
- Narayana numbers split $C_n$ by peaks; Motzkin, Schröder and Fuss-Catalan numbers are close relatives.

**Next:** [Chapter 9](09-Stirling-Numbers-and-Partitions.md), which counts the ways to split a set into blocks and a
permutation into cycles: the Stirling and Bell numbers, and integer partitions.

## Further reading

- R. P. Stanley, *Catalan Numbers*, 2015.
- R. L. Graham, D. E. Knuth and O. Patashnik, *Concrete Mathematics*, 2nd ed., 1994 (Section 7.5 on the Catalan
  numbers and the cycle lemma, there called Raney's lemma).
- A. Dvoretzky and Th. Motzkin, "A problem of arrangements", *Duke Mathematical Journal* 14, 1947.
- M. Renault, "Four proofs of the ballot theorem", *Mathematics Magazine* 80, 2007, and "Lost (and found) in
  translation: André's actual method and its application to the generalized ballot problem", *American Mathematical
  Monthly* 115, 2008.
- R. P. Stanley, "Hipparchus, Plutarch, Schröder, and Hough", *American Mathematical Monthly* 104, 1997.
- W. Feller, *An Introduction to Probability Theory and Its Applications, Volume 1*, 3rd ed., 1968 (Chapter III:
  random walks and the reflection principle).
- On this site: the gentler lessons [Grid paths](../../topics/counting/level-5/04-grid-paths.md) and
  [Catalan numbers](../../topics/counting/level-8/02-catalan-numbers.md);
  [Chapter 7](07-Generating-Functions.md) for generating functions and singularities; and
  [Algebra, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md) for the binomial theorem.
