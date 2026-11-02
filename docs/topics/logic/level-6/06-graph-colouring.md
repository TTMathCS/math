---
title: "Graph colouring and maps"
---

# Graph colouring and maps

*Logic and puzzles · level 6, lesson 6 of 6*

## A question to start

You are colouring a map. The rule: two regions that share a border must get different colours. (Regions that touch
at a single point, like squares meeting at a corner of a chessboard, may share a colour.)

How many colours do you need? For some maps, two are enough. Here is a map that needs **four**: a round region
surrounded by three regions in a ring. Every one of the four regions borders all three others, so all four colours
must be different.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 200" role="img" aria-label="Left: a map with a middle circle (region 4) surrounded by three ring regions 1, 2 and 3; every region borders every other. Right: the same map as a graph, four dots each joined to the other three">
  <g stroke="currentColor" stroke-width="1.5">
    <path d="M 110.0 20.0 A 80 80 0 0 0 40.7 140.0 L 79.7 117.5 A 35 35 0 0 1 110.0 65.0 Z" fill="#eea66f"/>
    <path d="M 40.7 140.0 A 80 80 0 0 0 179.3 140.0 L 140.3 117.5 A 35 35 0 0 1 79.7 117.5 Z" fill="#9cc9ea"/>
    <path d="M 179.3 140.0 A 80 80 0 0 0 110.0 20.0 L 110.0 65.0 A 35 35 0 0 1 140.3 117.5 Z" fill="#7ccf9a"/>
    <circle cx="110" cy="100" r="35" fill="none"/>
  </g>
  <g font-size="16" text-anchor="middle" fill="currentColor">
    <text x="60" y="77">1</text><text x="110" y="163">2</text><text x="160" y="77">3</text><text x="110" y="106">4</text>
  </g>
  <g stroke="currentColor" stroke-width="2">
    <line x1="280" y1="55" x2="380" y2="55"/><line x1="280" y1="55" x2="330" y2="170"/><line x1="380" y1="55" x2="330" y2="170"/>
    <line x1="330" y1="105" x2="280" y2="55"/><line x1="330" y1="105" x2="380" y2="55"/><line x1="330" y1="105" x2="330" y2="170"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="280" cy="55" r="13" fill="#eea66f"/><circle cx="330" cy="170" r="13" fill="#9cc9ea"/>
    <circle cx="380" cy="55" r="13" fill="#7ccf9a"/><circle cx="330" cy="105" r="13" fill="none"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="280" y="60">1</text><text x="330" y="175">2</text><text x="380" y="60">3</text><text x="330" y="110">4</text>
  </g>
</svg>
</div>

(The fourth colour is shown as plain white.) So some maps need four colours. Is there a map that needs **five**? People
drew maps for more than a hundred years trying to find one, and never did. In 1976 two mathematicians proved that
there never will be one, and they needed a computer to do it. It was the first famous theorem whose proof no human
could check entirely by hand.

## The idea

### From maps to graphs

As in the [last lesson](05-networks-euler.md), throw away the shapes. Draw a **vertex** for each region, and an
**edge** between two vertices whenever the two regions share a border (more than a single point). The map's rule
becomes a graph rule:

> **Colour the vertices so that the two ends of every edge get different colours.**

Such a colouring is called a **proper colouring**. The smallest number of colours that gives a proper colouring is
called the **chromatic number** of the graph ("chroma" is Greek for colour).

Graph colouring is more general than maps. Any graph can be coloured, including graphs that do not come from any map,
and many real problems turn out to be colouring problems in disguise.

### Lower bounds: why you need at least this many

To show a graph **needs** at least $k$ colours, find a reason no smaller number can work.

- **Any edge** needs 2 colours: its two ends must differ.
- **A triangle** (three vertices all joined to each other) needs 3: each vertex differs from the other two.
- **Four vertices all joined to each other** need 4. That is the map in the opening question.

A group of vertices all joined to each other is called a **clique**, and a clique of size $k$ always forces at least
$k$ colours. But a graph can need many colours even without a big clique, as the next idea shows.

### Odd cycles need three

A **cycle** is a ring of vertices, each joined to the next, the last joined back to the first. Try to colour a cycle
with just two colours, A and B. Going round, the colours must alternate: A, B, A, B, and so on. When you get back to
the start, the last vertex is joined to the first:

- if the cycle has an **even** number of vertices, the last one is B and the first is A. Fine: 2 colours work.
- if the cycle has an **odd** number, the last one is A, the same as the first. Clash! So an odd cycle needs
  **3** colours.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 190" role="img" aria-label="A five-vertex cycle coloured 1, 2, 1, 2 and then 3, because the fifth vertex touches both a 1 and a 2">
  <g stroke="currentColor" stroke-width="2">
    <polygon points="110,30 52.9,71.5 74.7,138.5 145.3,138.5 167.1,71.5" fill="none"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="110" cy="30" r="13" fill="#eea66f"/>
    <circle cx="52.9" cy="71.5" r="13" fill="#9cc9ea"/>
    <circle cx="74.7" cy="138.5" r="13" fill="#eea66f"/>
    <circle cx="145.3" cy="138.5" r="13" fill="#9cc9ea"/>
    <circle cx="167.1" cy="71.5" r="13" fill="#7ccf9a"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="110" y="35">1</text><text x="52.9" y="76">2</text><text x="74.7" y="143">1</text>
    <text x="145.3" y="143">2</text><text x="167.1" y="76">3</text>
    <text x="110" y="180">odd cycle: the last vertex needs a 3rd colour</text>
  </g>
</svg>
</div>

The pentagon has no triangle in it, yet it needs 3 colours. In fact the rule is exact: **a graph can be coloured with
2 colours if and only if it has no odd cycle.** A chessboard's squares (joined when they share a side) form such a
graph, which is why black and white are enough.

### Upper bounds: a simple method that always works

To show a graph **can** be coloured with $k$ colours, it is enough to show one colouring. A simple algorithm, called
**greedy colouring**:

1. Put the vertices in some order.
2. Go through them one at a time. Give each vertex the **lowest-numbered** colour that none of its already-coloured
   neighbours has.

Greedy colouring always gives a proper colouring. And it never needs more than (largest degree + 1) colours: a vertex
with $d$ neighbours can see at most $d$ different colours among them, so one of the first $d + 1$ colours is free.
Greedy is fast, but it is not always best: a bad order can waste colours, and finding the true chromatic number of a
big graph is, as far as anyone knows, extremely hard (more in [level 8](../level-8/index.md)).

### The four colour theorem

> **The four colour theorem.** Every map drawn on a flat sheet of paper (with each region in one connected piece) can
> be coloured with at most four colours so that neighbouring regions differ.

The story goes that the question was first asked in 1852 by Francis Guthrie, a young man colouring a map of the
counties of England, who noticed four colours always seemed enough. A "proof" by Alfred Kempe in 1879 was believed
for eleven years, until Percy Heawood found a mistake in 1890. Heawood rescued part of the argument and proved that
**five** colours are always enough; that proof is short enough for a university course. But four resisted.

In 1976 Kenneth Appel and Wolfgang Haken, at the University of Illinois, proved it. Their idea, in outline:

- they found a long list of small map pieces (well over a thousand) and showed that **every** map must contain at
  least one of them;
- then they showed that each piece is "reducible": if the rest of the map can be four-coloured, so can the whole.

The second step meant checking each piece in detail, far too much for any person by hand, so a computer did it, over
many hours. Some mathematicians were uneasy: is a proof a proof if no human can read all of it? Later mathematicians
found a shorter list and checked the computer work in other ways, and today the theorem is accepted. The debate it
started, about what counts as a proof, goes on.

Why is it four and not three? The opening map shows three are not always enough. Why does nobody ever find a map
needing five? It turns out that five regions can never **all** border each other on a flat sheet, but this alone does
not prove four colours suffice. That was the hard part, and why it took 124 years.

### Colouring in disguise: timetables

A school has to set exam times. Two exams cannot be at the same time if some student takes both. Make each exam a
vertex, and join two exams with an edge if they share a student. Then:

- a time slot is a **colour**;
- exams at the same time must not be joined, so a proper colouring **is** a timetable;
- the chromatic number is the **fewest time slots** that work.

The same idea assigns radio frequencies to transmitters (nearby ones must differ), registers in a computer chip, and
even solves Sudoku: each of the 81 cells is a vertex, joined to every cell in its row, column and box, and a solved
Sudoku is a proper colouring with 9 colours (the digits).

## Worked examples

**1. A wheel with five spokes.** A centre vertex joined to all five vertices of a pentagon (a "wheel"). The pentagon is
an odd cycle, so it needs 3 colours by itself. The centre is joined to all five, so it cannot use any of those 3: it
needs a **4th**. Chromatic number **4**. Notice that the biggest clique here is only a triangle (the centre and
two neighbouring rim vertices); no four vertices are all joined, because two rim vertices that are not next to each
other are not joined. So 4 colours are needed with no clique of 4. Cliques do not tell the whole story.

**2. A wheel with six spokes.** The rim is a hexagon, an even cycle: 2 colours, alternating. The centre needs a 3rd.
Chromatic number **3**.

**3. An exam timetable.** Five exams: Maths (M), English (E), French (F), History (H), Science (S). Shared students:
M–E, M–F, M–S, E–F, H–S. Greedy in the order M, E, F, H, S:

- M gets colour 1.
- E is joined to M (1): E gets 2.
- F is joined to M (1) and E (2): F gets 3.
- H is joined only to S, which is not coloured yet: H gets 1.
- S is joined to M (1) and H (1): S gets 2.

Three slots: {M, H}, {E, S}, {F}. Can it be done in 2? No: M, E, F form a triangle. So 3 is the minimum.

**4. A bad order for greedy.** Take a 6-vertex graph: vertices $a_1, a_2, a_3$ and $b_1, b_2, b_3$, with $a_i$
joined to $b_j$ whenever $i \ne j$. It has no odd cycle (every edge goes between an $a$ and a $b$), so 2 colours
suffice: all $a$s one colour, all $b$s the other. But greedy in the order $a_1, b_1, a_2, b_2, a_3, b_3$ gives
$a_1$ colour 1; $b_1$ colour 1 (it is not joined to $a_1$); $a_2$ colour 2 (joined to $b_1$, which has 1);
$b_2$ colour 2 (joined to $a_1$, which has 1, and not to $a_2$); $a_3$ colour 3 (joined to $b_1$ and $b_2$, which
have 1 and 2); $b_3$ colour 3 (joined to $a_1$ and $a_2$).
Three colours where two would do. **The order matters.**

**5. A map of six regions.** Six countries in a row along a coast, each bordering only its neighbours to the left and
right, plus one inland country bordering all six. The coastal row is a path (no cycle), so it alternates 2 colours;
the inland country borders all of them and needs a 3rd. Answer: **3** colours.

## Try it

1. What is the chromatic number of a single triangle? Of a square (4-cycle)? Of a 7-cycle?
2. Explain why a graph with at least one edge needs at least 2 colours.
3. Colour the vertices of a cube (8 corners, joined along the 12 edges) with as few colours as possible. How many?
4. Five exams with shared students A–B, B–C, C–D, D–E, E–A. How many time slots are needed? Why?
5. Using greedy in alphabetical order, colour the graph with edges A–B, A–C, B–D, C–D, D–E. How many colours did you
   use? Is that the minimum?
6. In a map of the provinces of a made-up country, one province borders five others, which border each other in a
   ring around it. How many colours does this part of the map need?
7. Why does a Sudoku puzzle count as a graph colouring problem? How many vertices and how many colours?
8. Why is "I tried hundreds of maps and four colours always worked" not a proof of the four colour theorem?

??? note "Answers"
    1. Triangle: **3**. Square: **2** (even cycle, alternate). 7-cycle: **3** (odd cycle).
    2. The two ends of the edge must have different colours, so at least two colours appear.
    3. **2.** Colour a corner A, its three neighbours B, their other neighbours A, and so on. It works because every
       cycle on a cube has even length (each step changes exactly one of the three coordinates, so to return you
       change each an even number of times). Think of corners as $(x, y, z)$ with each 0 or 1: colour by whether
       $x + y + z$ is even or odd.
    4. The conflicts form a 5-cycle, which is odd, so **3** slots are needed; for example A, C in slot 1; B, D in
       slot 2; E in slot 3.
    5. A: 1. B (joined to A): 2. C (joined to A): 2. D (joined to B, C, both 2): 1. E (joined to D, 1): 2. **Two**
       colours, which is the minimum since there is an edge.
    6. The ring of five is an odd cycle: 3 colours. The middle province borders all five, so it needs a 4th:
       **4** colours.
    7. Each cell is a vertex; two cells are joined if they share a row, column or box; the digits 1 to 9 are colours.
       A solution is a proper colouring with 9 colours of the 81 vertices, keeping the given clues.
    8. Trying examples, however many, cannot rule out a map nobody has drawn yet. A "for all maps" statement needs a
       reason covering every map at once ([quantifiers](../level-5/04-quantifiers.md)). That is what Appel and Haken
       supplied.

## Common mistake

**Counting a corner touch as a border.** If two regions meet only at a single point, they may share a colour. If you
counted corner touches, a pie cut into many slices would need as many colours as slices, and the four colour theorem
would be false.

**Assuming the biggest clique tells you the answer.** A clique of size $k$ forces at least $k$ colours, but the graph
may need more: the pentagon has no triangle and still needs 3, and the five-spoke wheel has no group of four and still
needs 4.

## Where it leads

- Back: [Networks and Euler paths](05-networks-euler.md) · This is the last lesson of level 6. Next:
  [Level 7: how a proof works](../level-7/index.md).
- [Level 6 page](index.md) · [Logic topic page](../index.md)
- Sudoku as logic: [level 3](../level-3/05-sudoku-moves.md). Hard problems where checking is easy but finding is hard,
  like colouring and scheduling: P versus NP in [level 8](../level-8/index.md).
- Counting colourings is a counting problem: [Counting](../../counting/index.md). Shapes on a flat sheet versus on a
  ball or a doughnut are [Geometry](../../geometry/index.md) questions.
