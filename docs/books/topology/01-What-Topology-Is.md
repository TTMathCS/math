# 1. What topology is

*A coffee cup and a doughnut look nothing alike, yet a topologist calls them the same shape. A walk across seven
bridges in an old Prussian city turns out to have nothing to do with distances or angles and everything to do with
how the pieces of land are joined. Topology is the part of mathematics that studies the properties of a shape that
survive stretching, bending and squeezing, as long as nothing is torn and nothing is glued. This chapter shows what
those properties are with four examples: Euler's solution of the Königsberg bridges, the letters of the alphabet
sorted by shape, the theorem that every closed loop drawn on paper has an inside and an outside, and a first careful
look at what "the same shape" will mean for the rest of the book.*

!!! abstract "In this chapter"

    **You will learn:**

    - the rubber-sheet idea: which properties of a shape survive continuous deformation, and which do not
    - Euler's 1736 solution of the Königsberg bridge problem, with a full proof in both directions
    - how to tell shapes apart with invariants such as cut points, ends and branch points
    - the Jordan curve theorem: what it says, why it is hard, and a proof for polygons
    - a first definition of homeomorphism, with examples and a warning example
    - a short, honest history of where topology came from

    **You need:** nothing beyond school algebra and the idea of a function. Gentler versions on the Topics shelf:
    [The Möbius strip](../../topics/infinity/level-2/01-mobius-strip.md),
    [Networks and Euler paths](../../topics/logic/level-6/05-networks-euler.md) and
    [Faces, edges and corners](../../topics/geometry/level-2/03-faces-edges-corners.md).

    **Levels:** 1.1 to 1.3 are beginner; 1.4 is intermediate (the polygon proof) with an expert remark; 1.5 is
    intermediate and prepares Part II.

## 1.1 The rubber-sheet idea

Draw a triangle on a balloon, then blow the balloon up. The triangle grows, its sides bend, its angles change. Its
area is now different, and its sides are not straight any more. What is left? It is still one closed loop. It still
divides the balloon into two regions, the part inside the loop and the part outside. A dot that was inside is still
inside. If two triangles were drawn so that they crossed at two points, they still cross at two points.

Those surviving facts are **topological properties**: properties that do not change when a shape is deformed
continuously. "Continuously" here means, for now, in the everyday sense: you may stretch, shrink, bend and twist,
but you may not cut, tear, puncture, or glue two separate points together. Length, angle, area, straightness and
curvature are not topological; they change under stretching. Being in one piece, having a hole, having an edge, and
which points lie next to which are topological.

This is why topology is sometimes called **rubber-sheet geometry**. Imagine every shape made of perfectly elastic
rubber that can be stretched as far as you like. Two shapes count as "the same" if one can be deformed into the
other.

### The coffee cup and the doughnut

An old joke defines a topologist as a person who cannot tell a coffee cup from a doughnut. Here is why. Picture a
cup made of soft clay. Push the bowl of the cup down into the body, flattening it, until the cup is a lump of clay
with a handle. Now let the lump shrink into the handle, thickening the handle as the lump disappears. What remains
is a ring of clay: a doughnut, which mathematicians call a **torus**. At no stage did we make a new hole or close an
old one. The single hole of the cup, the one your finger goes through in the handle, became the hole of the
doughnut.

A sphere, by contrast, cannot be deformed into a torus. Intuitively, the torus has a hole and the sphere does not,
and no amount of stretching makes a hole appear or disappear. Proving this properly takes real work: it is one of
the goals of this book (we prove it in [Chapter 13](13-The-Fundamental-Group.md) with the fundamental group and
again in [Chapter 16](16-Homology.md) with homology). For now notice the shape of the claim. To show two shapes are
the same, we exhibit a deformation. To show two shapes are different, we need something that every deformation
preserves and that the two shapes do not share. Such a thing is called a **topological invariant**. Much of
topology is the search for good invariants.

### What changes and what does not

Some quick examples sharpen the idea.

- A square and a circle are the same shape topologically: push the corners of the square outward and round them
  off. Corners are not topological.
- A solid ball and a solid cube are the same; so are a solid ball and a solid egg.
- A straight line segment and a wiggly curve with the same two ends are the same.
- A circle and a line segment are **not** the same. The segment has two end points; the circle has none. More
  convincingly: remove any one point from a circle and it stays in one piece; remove a middle point from a segment
  and it falls into two pieces. We will turn this into a proof in 1.3.
- A sphere and a torus are not the same (as above).
- The surface of Mars is, topologically, a sphere. Olympus Mons is about 22 kilometres high and Valles Marineris is
  several kilometres deep, but a mountain is a bump and a canyon is a dent; neither makes a hole through the planet.
  The same is true of any planet's surface, which is why the sphere is the first surface we study.

A knot tied in a closed loop of string is a subtler case. As a shape on its own, a knotted loop is just a circle:
an ant living on the string cannot tell it is knotted. But the knot cannot be undone inside space without cutting.
So "the same" depends on whether we care about the shape alone or about how it sits inside a bigger space. The first
question gives **homeomorphism** (1.5, then [Chapter 5](05-Continuity-and-Homeomorphism.md)); the second gives the
theory of knots ([Chapter 18](18-Knot-Theory.md)).

## 1.2 The bridges of Königsberg

The city of Königsberg in Prussia (today Kaliningrad, in Russia) stood on the river Pregel. The river split around
an island called the Kneiphof and around a second region of land to its east, so the city had four land areas: the
island, the north bank, the south bank, and the eastern land between the two arms of the river. Seven bridges joined
them. The townspeople asked whether one could take a walk that crossed every bridge exactly once. Nobody had found
one, and nobody could say why not.

Leonhard Euler, then working at the Academy of Sciences in St Petersburg, heard of the problem and solved it. He
presented the solution to the Academy in 1735, and the paper, *Solutio problematis ad geometriam situs pertinentis*
("The solution of a problem relating to the geometry of position"), appeared in the Academy's volume for 1736. The
title refers to Leibniz, who had wished for a "geometry of position" that would study where things are rather than
how big they are. Euler's point was that the bridge problem is exactly such a question: lengths, the shapes of the
banks, and the width of the river are all irrelevant. Only the pattern of connections matters.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 210" role="img" aria-label="Left: a sketch of Königsberg. A river, drawn in blue, has an upper and a lower channel joined on the left and by a short vertical channel in the middle, which separate four land areas: the north bank B, the south bank C, the island A and the eastern land D. Seven short bars mark the bridges: two between A and B, two between A and C, one between A and D, one between B and D and one between C and D. Right: the same information as a graph with four dots A, B, C, D and seven edges.">
  <rect x="0" y="55" width="200" height="20" fill="#9cc9ea"/>
  <rect x="0" y="135" width="200" height="20" fill="#9cc9ea"/>
  <rect x="0" y="55" width="30" height="100" fill="#9cc9ea"/>
  <rect x="110" y="75" width="20" height="60" fill="#9cc9ea"/>
  <g stroke="currentColor" stroke-width="4">
    <line x1="55" y1="52" x2="55" y2="78"/>
    <line x1="85" y1="52" x2="85" y2="78"/>
    <line x1="55" y1="132" x2="55" y2="158"/>
    <line x1="85" y1="132" x2="85" y2="158"/>
    <line x1="107" y1="105" x2="133" y2="105"/>
    <line x1="165" y1="52" x2="165" y2="78"/>
    <line x1="165" y1="132" x2="165" y2="158"/>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="100" y="35">B</text>
    <text x="70" y="111">A</text>
    <text x="165" y="111">D</text>
    <text x="100" y="185">C</text>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="2">
    <path d="M300,105 Q342,76 350,25"/>
    <path d="M300,105 Q308,54 350,25"/>
    <path d="M300,105 Q342,134 350,185"/>
    <path d="M300,105 Q308,156 350,185"/>
    <line x1="300" y1="105" x2="420" y2="105"/>
    <line x1="350" y1="25" x2="420" y2="105"/>
    <line x1="350" y1="185" x2="420" y2="105"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <circle cx="300" cy="105" r="8"/>
    <circle cx="350" cy="25" r="8"/>
    <circle cx="350" cy="185" r="8"/>
    <circle cx="420" cy="105" r="8"/>
  </g>
  <g fill="currentColor" font-size="14">
    <text x="280" y="110">A</text>
    <text x="364" y="22">B</text>
    <text x="364" y="198">C</text>
    <text x="434" y="110">D</text>
  </g>
</svg>
</div>

### From a map to a graph

Shrink each land area to a point and keep each bridge as a line joining two points. The result, on the right of the
picture, is a **graph**: a set of **vertices** (the dots) and a set of **edges** (the lines), each edge joining two
vertices. Two vertices may be joined by more than one edge, as A and B are here; such a graph is sometimes called a
multigraph. The **degree** of a vertex is the number of edge-ends at it. In Königsberg:

| land area | bridges touching it | degree |
|---|---|---|
| A (island) | two to B, two to C, one to D | 5 |
| B (north bank) | two to A, one to D | 3 |
| C (south bank) | two to A, one to D | 3 |
| D (eastern land) | one each to A, B, C | 3 |

A walk crossing every bridge exactly once is now a walk in the graph that uses every edge exactly once. It is called
an **Euler path** (or Euler trail). If it also ends where it started, it is an **Euler circuit**.

### Why it cannot be done

Think about a vertex that is neither the start nor the end of the walk. Every time the walk arrives there along one
edge it must leave along another, unused, edge. So the edges at that vertex are used up in pairs, one in and one
out, and its degree must be even. Only the starting and finishing vertices can have odd degree: the start has one
extra "out", the finish one extra "in". If the walk is a circuit, start and finish are the same vertex and its
degree is even too.

In Königsberg all four vertices have odd degree. A walk could make at most two of them odd. So no walk crosses each
bridge exactly once. That is the whole argument, and it is Euler's.

### The full theorem

Euler stated more than the impossibility. In modern words:

**Theorem (Euler's criterion).** Let $G$ be a connected graph, that is, one where any two vertices are joined by
some walk. Then

1. $G$ has an Euler circuit exactly when every vertex has even degree;
2. $G$ has an Euler path that is not a circuit exactly when exactly two vertices have odd degree, and then the path
   must start at one of them and end at the other.

*Proof.* The "only if" halves are the counting argument above. For the "if" half of part 1, suppose every degree is
even. Start at any vertex $v$ and walk, never reusing an edge, until you get stuck. You can only get stuck at $v$:
whenever you enter another vertex $w$ you have used an odd number of its edges (each earlier visit used two, this
arrival used one), and its degree is even, so an unused edge is left to leave by. So the walk is a closed circuit
$C$.

If $C$ uses every edge, we are done. If not, remove the edges of $C$. Every vertex loses an even number of edges
(two for each pass of $C$ through it), so the remaining graph still has all degrees even. Because $G$ is connected,
some vertex $u$ on $C$ still has an unused edge (otherwise the edges of $C$ would form a whole connected piece and
the unused edges would lie in a separate piece, which a connected graph does not allow). Start a new closed walk at
$u$ in the remaining graph; by the same argument it returns to $u$. Splice it into $C$ at $u$: follow $C$ to $u$,
go round the new loop, then finish $C$. The result is a longer closed walk with no repeated edges. Repeat. Each time
the number of unused edges drops, so the process ends with a circuit using every edge.

For part 2, suppose exactly two vertices $x$ and $y$ have odd degree. Add one new edge joining $x$ and $y$. Now all
degrees are even, so by part 1 there is an Euler circuit. Delete the new edge from it: what remains is an Euler path
from $x$ to $y$ (or $y$ to $x$). $\square$

The careful proof of the "if" direction was not in Euler's paper; he regarded it as clear. The first published proof
is due to Carl Hierholzer, written before his death in 1871 and published in 1873. The splicing method above is
named after him.

**Check:** the degrees in Königsberg add up to $5 + 3 + 3 + 3 = 14 = 2 \times 7$, twice the number of bridges.
This is always true, because every edge has two ends: the sum of the degrees of any graph is twice the number of
edges. It follows that the number of odd-degree vertices is always even (exercise 9).

### Worked example: adding bridges

*How many new bridges must Königsberg build before a walk crossing every bridge once becomes possible, and before a
round trip becomes possible?*

Step 1. For a walk (not necessarily a round trip) we need at most two odd vertices. Each new bridge changes the
parity of exactly two vertices (its ends). One new bridge between B and C makes B and C even, leaving A and D odd:
an Euler path now exists, from A to D.

Step 2. For a round trip we need zero odd vertices. One bridge changes two parities, and four vertices are odd, so
at least two new bridges are needed. Two suffice: B to C and A to D.

**Check:** with the extra bridges B–C and A–D the degrees become A 6, B 4, C 4, D 4, all even, and the graph is
connected.

### Why this is topology

Nothing in the argument mentions length, angle, or position. You could stretch the city like rubber, make the river
twice as wide, curve every bridge; as long as the pattern of connections is kept, the answer is the same. That is
the sense in which Euler's bridges are the first theorem of topology, even though the word did not yet exist. Graphs
are studied as topological objects in their own right in [Chapter 3](03-Graphs-and-Planarity.md), and as
combinatorial objects in the Combinatorics book's [Chapter 10](../combinatorics/10-Graphs.md).

### Try it in Python

The test is so simple that a computer does it in one line per vertex.

```python
from collections import Counter

bridges = [("A","B"), ("A","B"), ("A","C"), ("A","C"),
           ("A","D"), ("B","D"), ("C","D")]

degree = Counter()
for u, v in bridges:
    degree[u] += 1
    degree[v] += 1

odd = [x for x in degree if degree[x] % 2 == 1]
print(dict(degree))          # {'A': 5, 'B': 3, 'C': 3, 'D': 3}
print("odd vertices:", odd)  # four of them: no walk exists
```

This checks parity only; the theorem also needs the graph to be connected, which here is plain from the picture.

## 1.3 Letters of the alphabet up to deformation

Write the capital letters in a plain sans-serif font, as lines of zero thickness. Which letters can be deformed into
which, if we are allowed to bend and stretch the lines but not cut them or glue points together?

This is a classic first exercise, and it already needs a convention, because fonts differ. In some fonts the tail of
Q crosses the circle; in others it only touches it. In some fonts the two arms of K meet the stem at one point; in
others at two. Topology does not care about font, but the letters drawn in different fonts can be genuinely
different shapes. We fix the following simple font:

- C G I J L M N S U V W Z are single strokes with two free ends (G has no inward bar);
- D and O are closed loops;
- E, F, T, Y each have one point where three strokes meet;
- K and X each have one point where four strokes meet;
- H has two points where three strokes meet;
- P is a loop with one tail;
- A and R are loops with two tails attached at two different points (for R, the leg leaves the bowl at a point
  other than where the bowl meets the stem);
- Q is a loop with a short tail that crosses it, so one point has four strokes meeting and there are two free ends;
- B is two loops meeting at a single point, like the digit 8.

### The tools: ends, branch points and cut points

To prove that two letters are different shapes we need invariants: numbers that every deformation preserves. Here
are three, defined without mentioning straightness or length.

- A point $p$ of a shape $X$ has **index** $k$ if a small enough neighbourhood of $p$ in $X$ looks like $k$ short
  segments joined at $p$, a little star with $k$ arms. Points inside a stroke have index 2. An **end** has index 1.
  A **branch point** has index 3 or more.
- A point $p$ is a **cut point** if removing it leaves the shape in more pieces than before.

Why are these invariant? A deformation carries a small neighbourhood of $p$ to a small neighbourhood of the image
point, and a star with $k$ arms stays a star with $k$ arms when it is stretched. And if removing $p$ leaves $m$
pieces, then removing the image of $p$ from the deformed shape leaves $m$ pieces too, because the deformation carries
each piece onto a piece and never tears a piece apart or joins two together. We will make "pieces" precise in
[Chapter 7](07-Connectedness.md) as connected components and prove the claim there; for now the intuition is
reliable.

So the number of ends, the number of branch points of each index, and the number of points whose removal gives a
certain number of pieces are all topological invariants.

### The classification

With the conventions above, the 26 letters fall into nine classes.

| class | letters | ends | branch points | loops |
|---|---|---|---|---|
| arc | C G I J L M N S U V W Z | 2 | none | 0 |
| circle | D O | 0 | none | 1 |
| tripod | E F T Y | 3 | one of index 3 | 0 |
| cross | K X | 4 | one of index 4 | 0 |
| H | H | 4 | two of index 3 | 0 |
| loop with tail | P | 1 | one of index 3 | 1 |
| loop with two tails | A R | 2 | two of index 3 | 1 |
| Q | Q | 2 | one of index 4 | 1 |
| figure eight | B | 0 | one of index 4 | 2 |

Letters in the same row really are the same shape: slide and straighten the strokes. For example T becomes Y by
bending the two halves of the crossbar up into a V. E is three arms meeting at one point (the middle of the stem):
the upper half of the stem with the top bar is one bent arm, the lower half with the bottom bar is another, and the
middle bar is the third. Straighten the bent arms and you have the three arms of a T.

Letters in different rows are different, because at least one invariant in the table differs. Rows "tripod" and
"loop with tail" both have one branch point of index 3, but P has one end and the tripod three. Rows "H" and
"loop with two tails" both have two branch points of index 3, but H has four ends and A two.

The column "loops" needs a word of care. A loop is intuitive, but proving that a circle is not a segment by
"counting loops" requires a definition of loops that deformation preserves. Cut points give an honest proof without
that.

### Worked example: a circle is not a segment

Claim: O cannot be deformed into I.

Step 1. Remove any one point from O. What is left is an arc, still one piece. So O has no cut points.

Step 2. Remove a point from the middle of I. What is left is two pieces. So I has cut points (in fact every point
except the two ends is a cut point).

Step 3. A deformation from I to O would carry a cut point of I to a cut point of O, since it carries pieces to
pieces. O has none. So no such deformation exists.

### Worked example: E is not H

Both have branch points of index 3, but E has three ends and H has four. That already settles it. Here is a second
proof using only cut points, which you can compare with exercise 3. Removing the branch point of E leaves three pieces. In H there are two points (the two branch points)
whose removal leaves three pieces, while in E there is only one. Since a deformation would match these points one to
one, E and H differ.

### Why this matters

This little exercise contains the whole method of topology in miniature. Showing two shapes are the same means
building a deformation. Showing they differ means finding an invariant. The invariants above (ends, branch points,
cut points) work for shapes made of strokes. For surfaces like the sphere and the torus, removing a point never
disconnects anything, and we need stronger invariants: the Euler characteristic ([Chapter 2](02-Surfaces-and-Euler-Characteristic.md)),
the fundamental group ([Chapter 13](13-The-Fundamental-Group.md)), homology ([Chapter 16](16-Homology.md)).

## 1.4 Inside and outside: the Jordan curve theorem

*Level: intermediate.*

Draw a closed loop on a sheet of paper without lifting the pen and without crossing your own line. It seems obvious
that the loop separates the paper into two regions, an inside and an outside, and that you cannot walk from inside to
outside without crossing the loop. This is the **Jordan curve theorem**, and it is one of the most famous examples in
mathematics of an obvious statement that is hard to prove.

**Definitions.** A **simple closed curve** in the plane is a set $J$ that is the image of a circle under a continuous
one-to-one map; informally, a loop that does not cross itself. The **complement** of $J$ is the set of all points of
the plane not on $J$. A region is **bounded** if it fits inside some large disc.

**Theorem (Jordan curve theorem).** If $J$ is a simple closed curve in the plane, its complement consists of exactly
two connected pieces. One is bounded (the **inside**) and one is unbounded (the **outside**), and $J$ is the
boundary of each: every point of $J$ can be approached from both pieces.

### Why it is hard

For a circle or a square the theorem is easy. The difficulty is that "continuous" allows very wild curves.

- The **Koch snowflake** (Helge von Koch, 1904) is a simple closed curve made by repeatedly replacing the middle
  third of each segment by two sides of a small triangle. In the limit it has infinite length, and it has no tangent
  line at any point. "Walking along the curve" and "looking to your left" make no sense for it.
- William Osgood showed in 1903 that a simple closed curve can have **positive area**: the curve itself, a set of
  points with no thickness in the intuitive sense, covers a region of positive area. So you cannot argue that "the
  curve is thin".
- A curve can wind like a maze: think of a double spiral that comes in, turns, and goes out again. Given a point deep
  inside, it may be far from clear whether it is inside or outside.

There is also a deeper reason. The theorem is false on some other surfaces. On a torus, a loop that goes once around
the tube (a **meridian**) does not separate the torus: you can walk from one side of it to the other the long way
round. So any proof must use something specific to the plane. That is a hint that the theorem is about the global
shape of the plane, which is exactly what algebraic topology measures. The standard modern proofs use homology
([Chapter 16](16-Homology.md)) or the fundamental group.

### History, briefly

Camille Jordan stated the theorem and gave a proof in his *Cours d'analyse* in 1887. For a long time his proof was
considered incomplete, and Oswald Veblen's paper of 1905 was often called the first rigorous proof. In 2007 Thomas
Hales re-examined Jordan's argument and argued that it is essentially correct, given the standards of its time and
the polygon case that Jordan took for granted. Hales also completed a fully computer-checked formal proof of the
theorem in 2005. Whatever one thinks of the priority, the theorem is now one of the best-checked results in
mathematics.

### A proof for polygons

For a **polygon** (a simple closed curve made of finitely many straight segments) there is a complete and elementary
proof. It is worth knowing because it is the idea every computer graphics program uses to decide whether a point is
inside a shape.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 200" role="img" aria-label="A U-shaped polygon drawn in blue with a notch cut down into it from the top. Point P inside the left arm sends a dashed ray to the right that crosses the polygon three times. Point Q, inside the notch and therefore outside the polygon, sends a dashed ray to the right that crosses the polygon twice.">
  <polygon points="40,30 260,30 260,170 190,170 190,80 110,80 110,170 40,170" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4">
    <line x1="75" y1="120" x2="290" y2="120"/>
    <line x1="150" y1="140" x2="290" y2="140"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <circle cx="110" cy="120" r="4"/>
    <circle cx="190" cy="120" r="4"/>
    <circle cx="260" cy="120" r="4"/>
    <circle cx="190" cy="140" r="4"/>
    <circle cx="260" cy="140" r="4"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="1.5">
    <circle cx="75" cy="120" r="5"/>
    <circle cx="150" cy="140" r="5"/>
  </g>
  <g fill="currentColor" font-size="14">
    <text x="62" y="112">P</text>
    <text x="143" y="160">Q</text>
  </g>
</svg>
</div>

**Theorem (Jordan curve theorem for polygons).** The complement of a simple polygon $J$ in the plane has exactly two
connected pieces, one bounded and one unbounded.

*Proof.* Fix a direction that is not parallel to any side of $J$; to keep the language simple, rotate the picture so
that this direction is "to the right" and no side is horizontal. For a point $p$ not on $J$, send the horizontal ray
from $p$ to the right and count how many times it crosses $J$. Some care is needed when the ray passes exactly
through a corner of $J$: count that corner as a crossing if the two sides at the corner lie on opposite sides of the
ray (one above, one below), and as no crossing if they lie on the same side (the ray just touches). Define the
**parity** $\pi(p)$ to be 0 if the count is even and 1 if it is odd.

Step 1: $\pi$ is constant along any path that avoids $J$. As $p$ moves a little without touching $J$, the ray moves a
little. The count changes only when the ray passes through a corner of $J$. Passing a corner where both sides lie
on the same side of the ray changes the count by 0 or 2 (two crossings appear or disappear together); passing a
corner where the sides lie on opposite sides moves a crossing from one side to the next without changing the count.
In every case the parity is unchanged.

Step 2: so the complement has at least two pieces. Points far away to the right have rays that miss $J$ entirely:
parity 0. Take a point just to the left of the middle of one side, very close to it; its ray crosses that side, and
a point just to the right of the same side has a ray with one crossing fewer. So the two nearby points have
different parities. By step 1 no path avoiding $J$ joins them. So the complement has at least two pieces: one where
$\pi = 0$ and one where $\pi = 1$.

Step 3: and at most two. Thicken $J$ slightly: near every point of $J$ there are points on its two "sides", and
following $J$ around, staying very close to it, you can walk from any point near $J$ on one side to any other point
near $J$ on the same side, without touching $J$. (This uses that $J$ is a polygon: near each side the two sides are
the two half-strips, and at each corner the strips join up.) So the points near $J$ form at most two groups, one
for each side. Any point $p$ not on $J$ can be joined to a point near $J$ by a straight segment: move from $p$
towards the nearest point of $J$ and stop just before it. So every point of the complement can be joined to one of
the two groups, and the complement has at most two pieces.

Step 4: one piece is bounded, the other not. Points far away have parity 0, and all far points can be joined by a
large circle avoiding $J$, so they lie in the parity-0 piece, which is therefore unbounded. The parity-1 piece is
contained in any large disc that contains $J$ (every point outside that disc has parity 0). $\square$

**Worked example.** In the picture, $J$ is the U-shaped polygon with corners $(40,30)$, $(260,30)$, $(260,170)$,
$(190,170)$, $(190,80)$, $(110,80)$, $(110,170)$, $(40,170)$, using screen coordinates (y grows downward).

- The ray from $P = (75,120)$ to the right crosses the vertical sides at $x = 110$, $x = 190$ and $x = 260$:
  3 crossings, odd, so $P$ is inside.
- The ray from $Q = (150,140)$ crosses at $x = 190$ and $x = 260$: 2 crossings, even, so $Q$ is outside, even
  though it is surrounded on three sides by the shape.

**Check:** $Q$ can be joined to the far outside by moving straight up out of the notch, through $(150, 20)$, without
touching $J$; $P$ cannot.

### Try it in Python

```python
def inside(p, poly):
    """Ray casting: count crossings of the ray going right from p."""
    x, y = p
    n, crossings = len(poly), 0
    for i in range(n):
        (x1, y1), (x2, y2) = poly[i], poly[(i + 1) % n]
        if (y1 > y) != (y2 > y):              # side straddles the ray's line
            xc = x1 + (y - y1) * (x2 - x1) / (y2 - y1)
            if xc > x:
                crossings += 1
    return crossings % 2 == 1

U = [(40,30),(260,30),(260,170),(190,170),(190,80),(110,80),(110,170),(40,170)]
print(inside((75,120), U), inside((150,140), U))   # True False
```

The test `(y1 > y) != (y2 > y)` is the corner rule of the proof in disguise: a corner exactly on the ray's line is
counted once if its two sides go to opposite sides of the line, and zero or two times otherwise.

### Beyond the plane

*Level: expert remark.* Two refinements show how subtle "inside" is.

- The **Jordan-Schoenflies theorem** (Arthur Schoenflies, early 1900s) says more: the inside of a simple closed
  curve in the plane is not just one piece, it is a disc, in the sense that there is a deformation of the whole plane
  carrying $J$ to a round circle. Carsten Thomassen gave a short graph-theoretic proof in 1992.
- In three dimensions the first statement survives (a sphere embedded in space separates it into two pieces; this
  is the Jordan-Brouwer separation theorem), but the second fails. In 1924 James Waddell Alexander described the
  **Alexander horned sphere**, a surface that is a deformed sphere but whose outside is not the outside of a round
  ball: a loop in its outside can be caught by the horns and cannot be shrunk away. Pictures of it are worth
  looking up.

<figure class="play" data-play="jordan"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Tap anywhere: a ray to the right crosses the curve an odd number of times from inside and an even number from outside.</figcaption></figure>

## 1.5 What "the same" will mean

So far "deformation" has been intuitive. Part II of this book makes it precise. Here is the definition we are aiming
at, stated for shapes sitting in the plane or in space, where we already know what distance means.

**Definition (preview).** A function $f : X \to Y$ between two shapes is **continuous** if points that are close
together in $X$ go to points that are close together in $Y$: for every point $x$ and every tolerance
$\varepsilon > 0$ there is a $\delta > 0$ such that any point within $\delta$ of $x$ is sent within $\varepsilon$ of
$f(x)$. A **homeomorphism** is a function $f : X \to Y$ that is

1. a bijection (each point of $Y$ is the image of exactly one point of $X$),
2. continuous, and
3. whose inverse $f^{-1} : Y \to X$ is also continuous.

Two shapes are **homeomorphic**, written $X \cong Y$, if there is a homeomorphism between them.

Notice what this definition does and does not say. It says nothing about a *process* of deformation over time; it
compares only the start and the end. Condition 1 forbids gluing (two points going to one) and forbids leaving
anything out. Condition 2 forbids tearing. Condition 3 forbids the opposite of tearing: gluing done in a sneaky way
that a continuous bijection can still achieve, as the warning example below shows.

### Example: an open interval and the whole line

Let $X = (-1, 1)$, the numbers strictly between $-1$ and $1$, and $Y = \mathbb{R}$, all real numbers. One is short
and the other is infinitely long, but they are homeomorphic. Define

$$
f(x) = \frac{x}{1 - |x|}, \qquad g(y) = \frac{y}{1 + |y|}.
$$

Both formulas are continuous (they are built from continuous pieces, and $1 - |x|$ is never zero on $X$). Check that
they undo each other. If $x \ge 0$ then $f(x) = x/(1-x) \ge 0$, and

$$
g(f(x)) = \frac{x/(1-x)}{1 + x/(1-x)} = \frac{x/(1-x)}{1/(1-x)} = x .
$$

The case $x < 0$ is the same with signs changed, and $f(g(y)) = y$ is checked the same way. So $f$ is a bijection
with continuous inverse $g$. Length is not a topological property.

**Check:** $f(0.5) = 0.5/0.5 = 1$ and $g(1) = 1/2$.

### Example: the circle minus a point and the line

Let $S^1$ be the unit circle $x^2 + y^2 = 1$ and $N = (0, 1)$ its north pole. **Stereographic projection** sends
a point $(x, y) \ne N$ of the circle to the point where the line from $N$ through $(x, y)$ meets the horizontal axis.
Similar triangles give the formula $\sigma(x, y) = \dfrac{x}{1 - y}$, with inverse

$$
\sigma^{-1}(t) = \left( \frac{2t}{t^2 + 1}, \ \frac{t^2 - 1}{t^2 + 1} \right).
$$

**Check:** $t = 1$ gives $(2/2, 0/2) = (1, 0)$, which is on the circle, and $\sigma(1, 0) = 1/(1 - 0) = 1$. For
general $t$, $(2t)^2 + (t^2-1)^2 = t^4 + 2t^2 + 1 = (t^2+1)^2$, so $\sigma^{-1}(t)$ is always on the circle.

So a circle with one point removed is homeomorphic to a line. Removing a point from a circle opens it up; there is
nothing left to tell you it was ever closed. The same projection one dimension up shows that a sphere with one point
removed is homeomorphic to the plane, which is how one makes maps of a whole planet onto a flat sheet, minus one
point. We meet this again in [Chapter 8](08-Compactness.md) where the sphere is built from the plane by adding one
point "at infinity".

### Warning example: a continuous bijection that is not a homeomorphism

Let $X = [0, 1)$, the numbers from 0 up to but not including 1, and wrap it around the circle:

$$
w(t) = (\cos 2\pi t, \ \sin 2\pi t).
$$

Every point of the circle is hit exactly once ($t = 0$ goes to $(1, 0)$, and as $t$ approaches 1 the image comes
back round towards $(1, 0)$ without reaching it). So $w$ is a continuous bijection. But its inverse is not continuous
at $(1, 0)$: points of the circle just below $(1, 0)$ (slightly clockwise from it) come from values of $t$ close to
1, while $(1, 0)$ itself comes from $t = 0$. Nearby points of the circle are sent far apart. The inverse tears the
circle open at $(1, 0)$. And indeed $[0,1)$ is not homeomorphic to the circle: removing the point $\tfrac12$ disconnects $[0, 1)$, but removing any point
from the circle does not. Condition 3 in the definition is doing real work.

### Intrinsic versus extrinsic

A homeomorphism compares two shapes on their own, ignoring how they sit in space. A knotted loop of string in space
and a round circle are homeomorphic (parametrise both by the angle around the loop), even though no motion through
space unknots the string. A Möbius strip with one half-twist and a band with three half-twists are homeomorphic as
surfaces, though they sit differently in space. Topologists separate the two questions:

- **intrinsic**: is $X$ homeomorphic to $Y$? (Parts II to IV.)
- **extrinsic**: can $X$, sitting inside a space $Z$, be moved through $Z$ to $Y$? This leads to **isotopy**,
  **embeddings** ([Chapter 5](05-Continuity-and-Homeomorphism.md)) and knot theory
  ([Chapter 18](18-Knot-Theory.md)).

### Where this definition goes next

The definition above uses distance, so it only applies to shapes where distance makes sense. The surprising
discovery of the early twentieth century was that distance is more than we need. Continuity can be described using
only the notion of an **open set**, and that leads to the general **topological space**
([Chapter 4](04-Topological-Spaces.md)): a set with a chosen family of open sets. With that, "homeomorphic" makes
sense for spaces that have no natural distance at all, such as spaces of solutions of polynomial equations, spaces
of all possible positions of a robot arm, or spaces of all loops in a shape.

## A short history

The word *topology* comes from Johann Benedict Listing, a student of Gauss, who used it in his *Vorstudien zur
Topologie* of 1847. The older name, used by Leibniz and Euler, was *geometria situs* or *analysis situs*, the
analysis of position. Euler's bridges (1736) and his formula $V - E + F = 2$ for polyhedra (stated in a letter to
Goldbach in 1750) are now seen as the first results of the subject ([Chapter 2](02-Surfaces-and-Euler-Characteristic.md)).
Bernhard Riemann, in his work on complex functions in the 1850s, needed to understand surfaces up to deformation and
counted their holes. August Möbius and Listing independently found the one-sided strip in 1858. Henri Poincaré's
long paper *Analysis Situs* of 1895 and its supplements founded algebraic topology, introducing the fundamental group
and the first form of homology. Around the same time Georg Cantor's set theory supplied the language of point sets,
and in the first decades of the twentieth century Maurice Fréchet, Felix Hausdorff and others gave the abstract
definitions of Part II. The subject the rest of this book follows runs from those definitions to the proof of
Poincaré's own conjecture by Grigori Perelman in 2002 and 2003.

## Check yourself

??? question "1. A town has four islands. The bridge graph has degrees 4, 2, 3, 5, and it is connected. Is a walk crossing each bridge once possible? A round trip? How many bridges does the town have?"

    The odd degrees are 3 and 5: exactly two odd vertices. So by Euler's criterion an Euler path exists, starting at
    the island of degree 3 and ending at the island of degree 5 (or the reverse), but no Euler circuit. The number of
    bridges is half the degree sum: $(4 + 2 + 3 + 5)/2 = 14/2 = 7$.

??? question "2. The house drawing: a square with both diagonals and a triangular roof on top. Label the bottom corners 1 and 2, the top corners 3 (above 2) and 4 (above 1), and the roof apex 5. The edges are 12, 23, 34, 41, 13, 24, 35, 45. Can it be drawn in one stroke? Where must you start?"

    Degrees: vertex 1 has edges 12, 41, 13, so degree 3. Vertex 2 has 12, 23, 24: degree 3. Vertex 3 has 23, 34, 13,
    35: degree 4. Vertex 4 has 34, 41, 24, 45: degree 4. Vertex 5 has 35, 45: degree 2. Check: $3+3+4+4+2 = 16 =
    2 \times 8$. Exactly two odd vertices, 1 and 2, so a one-stroke drawing exists and must start at a bottom corner
    and end at the other. One such stroke: 1, 2, 4, 1, 3, 5, 4, 3, 2. It uses 12, 24, 41, 13, 35, 54, 43, 32: all
    eight edges once.

??? question "3. Using cut points only (not ends or branch points), prove that T and O are different shapes, and that T and I are different shapes."

    T and O: removing the branch point of T leaves three pieces. Removing any point from O leaves one piece (an arc).
    A deformation carries a point whose removal leaves three pieces to such a point, so T is not O.

    T and I: in T there is a point (the branch point) whose removal leaves three pieces. In I, removing a point
    leaves one piece (if it is an end) or two pieces (otherwise), never three. So T is not I.

??? question "4. Is a circle homeomorphic to a figure eight? Prove your answer."

    No. Removing any one point from a circle leaves one piece. Removing the crossing point of a figure eight leaves
    two open loops, which are two pieces. A homeomorphism from the figure eight to the circle would send the crossing
    point to some point of the circle, and the complements would be homeomorphic, so they would have the same number
    of pieces: 2 against 1, a contradiction.

??? question "5. The polygon has corners (0,0), (6,0), (6,6), (4,6), (4,2), (2,2), (2,6), (0,6), in ordinary coordinates. Use ray casting to the right to decide whether (1,4) and (3,4) are inside."

    The polygon is a U with a notch $2 < x < 4$, $y > 2$. The horizontal line $y = 4$ meets the vertical sides at
    $x = 0$, $x = 2$, $x = 4$, $x = 6$ (the sides from $(0,6)$ to $(0,0)$, $(2,2)$ to $(2,6)$, $(4,6)$ to $(4,2)$ and
    $(6,0)$ to $(6,6)$ all straddle $y = 4$).

    - From $(1, 4)$ the ray to the right crosses at $x = 2, 4, 6$: three crossings, inside.
    - From $(3, 4)$ it crosses at $x = 4, 6$: two crossings, outside (the point is in the notch).

??? question "6. Show that the Jordan curve theorem fails on the surface of a torus by giving a simple closed curve that does not separate it. Does every simple closed curve on a sphere separate it?"

    Picture the torus as a square whose opposite edges are glued. The vertical segment $x = \tfrac12$ becomes a
    closed curve after gluing (its top and bottom ends are identified). Its complement is the square minus that
    segment, whose left part and right part are joined through the glued left and right edges. So the complement is
    one piece: the curve does not separate.

    On a sphere every simple closed curve separates it into two pieces. Remove a point $N$ of the sphere not on the
    curve; stereographic projection from $N$ is a homeomorphism from the rest of the sphere to the plane, so the curve
    becomes a simple closed curve in the plane, which separates the plane into two pieces. Putting $N$ back adds one
    point to the unbounded piece (it is the "point at infinity"), which does not change the number of pieces.

??? question "7. Show that the open interval (0, 1) is homeomorphic to the open interval (3, 10), and then that (0, 1) is homeomorphic to the whole line."

    The map $h(x) = 3 + 7x$ is a continuous bijection from $(0,1)$ to $(3,10)$, with continuous inverse
    $h^{-1}(y) = (y - 3)/7$. Check: $h(0.5) = 6.5$ and $h^{-1}(6.5) = 0.5$.

    For the line, first map $(0, 1)$ to $(-1, 1)$ by $x \mapsto 2x - 1$ (inverse $y \mapsto (y+1)/2$), then use
    $f(x) = x/(1 - |x|)$ from 1.5. A composition of homeomorphisms is a homeomorphism (its inverse is the composition
    of the inverses, in reverse order). So $x \mapsto \dfrac{2x-1}{1 - |2x - 1|}$ is a homeomorphism from $(0,1)$ to
    $\mathbb{R}$. Check: $x = 0.75$ gives $0.5/0.5 = 1$.

??? question "8. A function sends [0, 1] onto the circle by t to (cos 2 pi t, sin 2 pi t). Is it a homeomorphism? Is [0, 1] homeomorphic to the circle at all?"

    It is not a homeomorphism: it is not one-to-one, since $t = 0$ and $t = 1$ both go to $(1, 0)$. And no
    homeomorphism exists. Removing the point $\tfrac12$ from $[0,1]$ leaves two pieces, $[0, \tfrac12)$ and
    $(\tfrac12, 1]$. Removing any point from the circle leaves one piece. A homeomorphism would match the complements,
    so the number of pieces would agree. Contradiction.

??? question "9. Prove that in every graph the sum of the degrees is twice the number of edges, and deduce that the number of vertices of odd degree is even."

    Each edge has two ends, and each end contributes 1 to the degree of the vertex it lies at (a loop at a vertex
    contributes 2 to that vertex). So adding up all degrees counts every edge exactly twice: the sum is $2E$.

    Split the sum into the even-degree vertices and the odd-degree vertices. The even part is even, and the total
    $2E$ is even, so the sum of the odd degrees is even. A sum of odd numbers is even only if there is an even number
    of terms. So the number of odd-degree vertices is even.

??? question "10. A mug has two handles. Which simpler shape is it homeomorphic to: a sphere, a doughnut, or a two-holed doughnut? What about a pair of glasses frames without the arms, and a solid ball with a straight tunnel drilled through it?"

    Shrink the body of the mug into the handles as in 1.1: the mug with two handles becomes two rings joined
    together, a solid two-holed doughnut. The glasses frame (two lens rings joined by a bridge, as solid objects) is
    likewise a thickened figure eight, again a solid two-holed doughnut. A ball with one tunnel is a solid doughnut:
    widen the tunnel and thin the ball. (These are statements about solid objects; their surfaces are a surface with
    two holes, a surface with two holes, and a torus, the subjects of [Chapter 2](02-Surfaces-and-Euler-Characteristic.md).)

??? question "11. Prove the converse half of Euler's criterion in a small case by hand: find an Euler circuit in the graph with vertices 1 to 5 and edges 12, 23, 31, 34, 45, 53 (two triangles sharing vertex 3), using Hierholzer's splicing."

    All degrees are even: vertex 3 has degree 4, the rest degree 2. Start at 1 and walk until stuck: 1, 2, 3, 1. The
    edges 34, 45, 53 are unused, and vertex 3 lies on the first circuit and has unused edges. Walk from 3 in the
    rest: 3, 4, 5, 3. Splice at 3: 1, 2, 3, 4, 5, 3, 1. It uses 12, 23, 34, 45, 53, 31, each once.

??? question "12. Harder: prove that no continuous one-to-one map sends the circle onto the interval [0, 1]."

    Suppose $f$ from the circle to $[0,1]$ is a continuous bijection. Some point $p$ goes to $\tfrac12$. Remove $p$:
    the circle minus $p$ is one piece (an arc), and $f$ restricted to it is a continuous map onto $[0, \tfrac12) \cup
    (\tfrac12, 1]$. A continuous map sends a piece (a connected set) to a single piece, because if the image split
    into two separated parts, their preimages would split the arc. But $[0, \tfrac12) \cup (\tfrac12, 1]$ is two
    separated pieces: contradiction. (The facts "an arc is connected" and "continuous images of connected sets are
    connected" are proved in [Chapter 7](07-Connectedness.md). Note that we did not need the inverse to be
    continuous.)

## What you learned

- Topology studies properties that survive continuous deformation: being in one piece, having holes or ends, which
  points are near which. Length, angle and area are not topological.
- Euler's Königsberg solution: a connected graph has an Euler circuit exactly when all degrees are even, and an Euler
  path exactly when zero or two degrees are odd. The proof counts edge-ends; the converse is by Hierholzer's
  splicing.
- To show two shapes are the same, build a homeomorphism; to show they differ, find an invariant they do not share.
  Ends, branch points and cut points classify the capital letters into nine shapes.
- The Jordan curve theorem: every simple closed curve in the plane has exactly one inside and one outside. It is
  hard for wild curves, false on the torus, and provable for polygons by counting ray crossings.
- A homeomorphism is a continuous bijection with continuous inverse. Length is not preserved ($(-1,1) \cong
  \mathbb{R}$, circle minus a point $\cong$ line), and the inverse condition matters ($[0,1)$ wraps onto the circle
  but is not homeomorphic to it).
- Homeomorphism is intrinsic; how a shape sits inside space (knots) is a separate, extrinsic question.

**Next:** [Chapter 2](02-Surfaces-and-Euler-Characteristic.md) counts vertices, edges and faces, proves Euler's
formula $V - E + F = 2$ and uses it to find the five Platonic solids, then meets the torus, the Möbius strip and the
Klein bottle.

## Further reading

- Leonhard Euler, "Solutio problematis ad geometriam situs pertinentis" (1736), translated in N. L. Biggs, E. K.
  Lloyd and R. J. Wilson, *Graph Theory 1736-1936* (1976), which also reprints Hierholzer's paper.
- Richard Courant and Herbert Robbins, *What Is Mathematics?* (1941; 2nd edition revised by Ian Stewart, 1996),
  chapter V on topology.
- Stephen Barr, *Experiments in Topology* (1964), hands-on paper models.
- M. A. Armstrong, *Basic Topology* (1983), chapter 1 for the same tour at university level.
- David S. Richeson, *Euler's Gem: The Polyhedron Formula and the Birth of Topology* (2008).
- Thomas C. Hales, "The Jordan curve theorem, formally and informally", *American Mathematical Monthly* 114 (2007).
- Carsten Thomassen, "The Jordan-Schönflies theorem and the classification of surfaces", *American Mathematical
  Monthly* 99 (1992).
- On this site: Topics lessons [The Möbius strip](../../topics/infinity/level-2/01-mobius-strip.md),
  [Networks and Euler paths](../../topics/logic/level-6/05-networks-euler.md) and
  [The point at infinity](../../topics/infinity/level-8/07-point-at-infinity.md); the Combinatorics book's
  [Graphs](../combinatorics/10-Graphs.md); the Calculus book's
  [Continuity](../calculus/03-Continuity.md) and
  [Metric spaces and the topology of the real line](../calculus/20-Metric-Spaces-and-Topology-of-R.md); the
  [Geometry book](../geometry/index.md); the U of T guide
  [MAT257 Unit 1: The Topology of R^n](../../uoft/MAT257Y1/unit01.md).
