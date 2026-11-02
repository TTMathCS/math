---
title: "A line and a square have the same number of points"
---

# A line and a square have the same number of points

*Infinity and strange math · level 7, lesson 6 of 6*

## A question to start

A line segment is one-dimensional: a point on it is fixed by **one** number. A square is two-dimensional: a point in
it needs **two** numbers, across and up. A square seems to contain a whole segment's worth of points in every row,
and there are a whole segment's worth of rows. Surely the square has far more points than the segment?

In 1874 Georg Cantor asked his friend Richard Dedekind exactly this, and expected the answer "yes, more". Three years
later he found that the answer is **no**: the segment and the square have exactly the same number of points. In a
letter to Dedekind in 1877 he wrote, in French, "*Je le vois, mais je ne le crois pas*": "I see it, but I don't
believe it." This lesson shows you what he saw.

## The idea

### Two numbers squeezed into one

Take the square of points $(x, y)$ with $0 \le x < 1$ and $0 \le y < 1$, and the segment of points $z$ with
$0 \le z < 1$. Write the two coordinates of a point in the square as decimals:

$$x = 0.a_1 a_2 a_3 a_4 \ldots \qquad y = 0.b_1 b_2 b_3 b_4 \ldots$$

Now **interleave** the digits, like shuffling two piles of cards together, one from each in turn:

$$z = 0.a_1 b_1 a_2 b_2 a_3 b_3 \ldots$$

The single number $z$ holds **all** the information of the pair: its odd-numbered digits spell out $x$ and its
even-numbered digits spell out $y$. Different points of the square give different numbers $z$, because if two pairs
differ anywhere, their interleaved numbers differ in the matching place.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 230" role="img" aria-label="A point in a unit square with coordinates 0.314 and 0.271 is sent to the point 0.327114 on a segment, by taking the digits in turn">
  <rect x="50" y="20" width="130" height="130" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <line x1="90.8" y1="150" x2="90.8" y2="114.8" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="50" y1="114.8" x2="90.8" y2="114.8" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="90.8" cy="114.8" r="5" fill="#eea66f"/>
  <text x="90.8" y="166" font-size="12" text-anchor="middle" fill="currentColor">0.314…</text>
  <text x="46" y="118.8" font-size="12" text-anchor="end" fill="currentColor">0.271…</text>
  <line x1="210" y1="90" x2="345" y2="90" stroke="currentColor" stroke-width="2"/>
  <line x1="210" y1="84" x2="210" y2="96" stroke="currentColor" stroke-width="2"/>
  <text x="210" y="112" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="345" y1="84" x2="345" y2="96" stroke="currentColor" stroke-width="2"/>
  <text x="345" y="112" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="254.2" cy="90" r="5" fill="#eea66f"/>
  <text x="254.2" y="78" font-size="12" text-anchor="middle" fill="currentColor">0.327114…</text>
  <path d="M 98.8 108.8 Q 200 45 248.2 58" fill="none" stroke="#7ccf9a" stroke-width="2"/>
  <text x="180" y="205" font-size="13" text-anchor="middle" fill="currentColor">(0.3 1 4…, 0.2 7 1…)  →  0.3 2 1 7 4 1…</text>
</svg>
</div>

Going backwards is just as easy: given $z$, **unweave** it. Its 1st, 3rd, 5th, ... digits make $x$, and its 2nd, 4th,
6th, ... digits make $y$. So every point of the square is sent to its own point of the segment, and the segment's
points can be pulled apart into pairs.

### Fixing the 0.999... problem

There is a small snag, the same one the diagonal argument met. Some numbers have two decimal forms, such as
$0.5 = 0.4999\ldots$ To make the map well defined, agree to use the form that does **not** end in endless 9s. Then:

- **Square to segment.** Interleaving gives each point $(x, y)$ exactly one $z$, and different points give
  different $z$. Could two different-looking $z$'s be the same number? Only if one ended in endless 9s, which would
  need both $x$ and $y$ to end in endless 9s, which we ruled out. So this is an **injection**: the square fits inside
  the segment.
- **But it is not quite onto.** The number $z = 0.090909\ldots$ unweaves to $x = 0.000\ldots = 0$ and
  $y = 0.999\ldots$, and $y$ is not written in the allowed form (it would be $1$, which is not in $[0, 1)$). So
  $z = 0.0909\ldots = \tfrac1{11}$ is never hit. A few numbers like this are missed.

So interleaving shows that the square is **at most** as big as the segment. The other direction is easy: the segment
fits inside the square, for example by sending $z$ to the point $(z, 0)$ on the bottom edge.

### The Cantor-Schröder-Bernstein theorem

Now we use a theorem that settles it.

**Theorem (Cantor-Schröder-Bernstein).** If $A$ fits inside $B$ (there is an injection $A \to B$) and $B$ fits inside
$A$ (there is an injection $B \to A$), then $A$ and $B$ have the same size (there is a bijection between them).

For finite sets this is obvious: $|A| \le |B|$ and $|B| \le |A|$ give $|A| = |B|$. For infinite sets it needs a
clever proof, which follows each point back and forth between the two injections and decides, chain by chain, which
of the two maps to use. Cantor stated it; Felix Bernstein proved it in 1897, aged 19, and Ernst Schröder worked on it
independently around the same time, which is why their names are attached. It is one of the most useful tools for comparing infinite sets,
because finding two injections is usually much easier than finding one bijection.

Here, the square fits inside the segment (by interleaving) and the segment fits inside the square (on the bottom
edge). So **the square and the segment have the same number of points**: both have size $\mathfrak{c}$.

(Dedekind spotted the missed numbers in Cantor's first letter, and Cantor repaired his proof using a different way of
writing numbers. A simpler later repair shuffles blocks of digits instead of single digits, where a block is a run of
0s followed by one nonzero digit (and every number is written in the form that does **not** end in endless 0s, so
that it splits into infinitely many blocks). Then nothing is missed and you get a bijection straight away.)

### Far beyond the square

The same trick goes much further.

- **A cube.** Interleave three numbers: $0.a_1 b_1 c_1 a_2 b_2 c_2 \ldots$ The cube has as many points as the
  segment. So does a "cube" in any number of dimensions.
- **The whole plane.** Lesson 2 showed that $(0, 1)$ and $\mathbb{R}$ have the same size. Stretch each coordinate the
  same way and the whole infinite plane matches the open square, which matches the segment. The plane has exactly as
  many points as a 1 cm segment.
- **Infinitely many coordinates.** Even a point described by an infinite sequence of coordinates $x_1, x_2, x_3,
  \ldots$ can be squeezed into one number, by walking the digits in the diagonal order you used in level 6 to list
  pairs (try it question 7).

### So what is dimension?

If a square and a segment have the same number of points, what makes the square two-dimensional? The answer is
**continuity**: how the points sit next to each other. Interleaving tears neighbourhoods apart. The points
$(0.1999, 0)$ and $(0.2, 0)$ are very close in the square, but they go to $0.10909090$ and $0.2$, which are not
especially close, and nearby points like $(0.19999999, 0)$ jump around even more.

Two facts make this precise.

- In 1890 Giuseppe Peano drew a **continuous** curve, an unbroken path drawn without lifting the pencil, that passes
  through **every** point of a square. So a segment can cover a square continuously. But such a curve must pass
  through some points more than once.
- No pairing can be **both** one-to-one **and** continuous both ways. A quick reason: remove the middle point of a
  segment and it falls apart into two pieces. Remove any point from a square and it stays in one piece (you can walk
  round the hole). A continuous pairing would have to keep "in one piece" the same on both sides, so none exists.
  L. E. J. Brouwer proved in 1911 that the same holds in every dimension: there is no such pairing between spaces of
  different dimensions.

So counting points cannot tell dimensions apart; it takes the shape of how they fit together.

## Worked examples

**1. Interleaving.** Send the point $(0.5, 0.25)$ to the segment.

Write $x = 0.5000\ldots$ and $y = 0.2500\ldots$ Interleave: $0.\,5\,2\,0\,5\,0\,0\,0\,0\ldots = 0.5205$.

**2. Unweaving.** Which point of the square goes to $z = 0.123456$?

Odd places: 1, 3, 5, so $x = 0.135$. Even places: 2, 4, 6, so $y = 0.246$. The point is $(0.135, 0.246)$. Check:
interleaving $0.135$ and $0.246$ gives $0.1\,2\,3\,4\,5\,6$. ✓

**3. A cube.** Send $(0.1, 0.2, 0.3)$ to the segment, taking one digit from each coordinate in turn.

$0.\,1\,2\,3\,0\,0\,0\ldots = 0.123$. And $(0.11, 0.22, 0.33)$ goes to $0.123123$.

**4. A missed point.** Show that $z = 0.2909090\ldots$ is not hit by interleaving.

Unweave: odd places 2, 0, 0, 0, ... give $x = 0.2$; even places 9, 9, 9, ... give $y = 0.999\ldots$ That form of
$y$ is not allowed (it equals 1, which is outside $[0, 1)$). So no point of the square goes to this $z$. The
interleaving map is one-to-one but not onto, which is why we needed Cantor-Schröder-Bernstein.

**5. Using the theorem.** Show that $[0, 1]$ and $[0, 1) \times [0, 1)$ (the square including its bottom and left
edges) have the same size.

Square into segment: interleave, as above, giving numbers in $[0, 1)$, which is inside $[0, 1]$. Segment into square:
send $z$ to $(z/2, 0)$; this is one-to-one, and $z/2 \in [0, \tfrac12]$, which is inside $[0, 1)$. Two injections, so by
Cantor-Schröder-Bernstein the sizes are equal.

## Try it

1. Interleave $(0.1, 0.9)$ and $(0.37, 0.48)$.
2. Unweave $z = 0.70$ and $z = 0.142857$.
3. Interleave $\left(\tfrac13, \tfrac23\right) = (0.333\ldots, 0.666\ldots)$. What fraction do you get?
4. Which point of the square goes to $z = 0.5$?
5. Give an injection from the square $[0,1) \times [0,1)$ into the cube $[0,1)^3$, and one from the cube into the
   square. What can you conclude?
6. Two points of the square, $(0.3, 0)$ and $(0.2999, 0)$, are very close. How far apart are the points they go to?
7. Challenge: a point has infinitely many coordinates $x_1, x_2, x_3, \ldots$, each in $[0, 1)$. Describe a way to
   combine all their digits into one decimal so that every digit of every coordinate gets a place. (Hint: write the
   digits in a grid, row $k$ for $x_k$, and remember how level 6 listed all pairs.)

??? note "Answers"
    1. $(0.1, 0.9)$: $x = 0.1000\ldots$, $y = 0.9000\ldots$, so $z = 0.19$. $(0.37, 0.48)$: digits 3, 4, 7, 8, so
       $z = 0.3478$.
    2. $0.70$: odd places 7, 0, ... give $x = 0.7$; even places 0, 0, ... give $y = 0$; the point $(0.7, 0)$.
       $0.142857$: odd places 1, 2, 5 give $x = 0.125$; even places 4, 8, 7 give $y = 0.487$; the point
       $(0.125, 0.487)$.
    3. $z = 0.363636\ldots = \tfrac{36}{99} = \tfrac{4}{11}$.
    4. $0.5 = 0.5000\ldots$ unweaves to $x = 0.5$, $y = 0$: the point $(0.5, 0)$.
    5. Square into cube: $(x, y) \mapsto (x, y, 0)$. Cube into square: $(x, y, z) \mapsto (w, 0)$ where $w$ is the
       three-way interleaving of $x, y, z$ (one-to-one, as for two coordinates). By Cantor-Schröder-Bernstein the
       square and the cube have the same number of points.
    6. $(0.3, 0) \mapsto 0.30$, that is $0.3$. $(0.2999, 0) \mapsto 0.20909090 = 0.2090909$. They are about
       $0.3 - 0.2091 = 0.0909$ apart, even though the original points were only $0.0001$ apart. Interleaving is not
       continuous.
    7. Write digit $j$ of $x_k$ in row $k$, column $j$ of an infinite grid. Read the grid along the diagonals, as in
       level 6's listing of pairs: (1,1); then (1,2), (2,1); then (1,3), (2,2), (3,1); and so on. Each grid square is
       reached after finitely many steps, so every digit of every coordinate gets its own decimal place. Together with
       a fix for endless 9s, this shows even infinitely many coordinates fit into one segment.

## Common mistake

**"More dimensions means more points."** It means more **numbers per point**, but two (or a thousand) numbers can be
packed into one without losing anything. Size, in Cantor's sense, does not see dimension.

**"One-to-one in both directions means a bijection is obvious."** For finite sets, yes. For infinite sets, the
injections themselves are usually not bijections (interleaving misses some points); the Cantor-Schröder-Bernstein
theorem is what turns two injections into a bijection.

## Where it leads

- Previous: [The Cantor set](05-cantor-set.md). Next level: [Level 8: at the edge of mathematics](../level-8/index.md),
  starting with the exact definition of a limit and ending with the point at infinity.
- [Level 7 page](index.md) · [Infinity topic page](../index.md)
- Coordinates in the plane: [Geometry, the coordinate grid](../../geometry/level-3/06-coordinates-grid.md); points in
  space: [Algebra, lines and planes in space](../../algebra/level-8/08-lines-planes-space.md).
- On the U of T shelf: continuity in [MAT137 Unit 2](../../../uoft/MAT137/unit02.md), and why removing a point
  matters (connectedness) in [MAT257 Unit 3](../../../uoft/MAT257Y1/unit03.md).
