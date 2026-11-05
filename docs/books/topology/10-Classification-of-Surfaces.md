# 10. Classification of surfaces

*A sphere, a torus, a two-holed torus, a Klein bottle: how many different closed surfaces are there, and how can you
tell which one you are holding when it arrives crumpled, described only by a list of glued triangles? This chapter
answers both questions completely. Every closed surface is a sphere, a sphere with some number of handles, or a sphere
with some number of cross-caps, and two numbers decide which: the Euler characteristic and whether the surface is
orientable. You will learn to describe surfaces by polygons with labelled edges, to compute both invariants from such a
word by hand or in Python, and to follow the cut-and-paste proof that turns any surface into one of the standard
forms.*

!!! abstract "In this chapter"
    **You will learn:**

    - how a polygon with labelled, paired edges describes a closed surface, and how to count its vertices
    - what orientability is, and how to read it off a word in one glance
    - the connected sum of surfaces, and why $\chi(M \# N) = \chi(M) + \chi(N) - 2$
    - the classification theorem and the outline of its cut-and-paste proof
    - why the Euler characteristic and orientability together determine a closed surface
    - how surfaces with boundary are classified by adding one more number, the count of boundary circles

    **You need:** [Chapter 2](02-Surfaces-and-Euler-Characteristic.md) (Euler characteristic, Möbius strip, Klein bottle,
    glued squares), [Chapter 6](06-Building-New-Spaces.md) (quotient spaces), [Chapter 8](08-Compactness.md) (compactness)
    and [Chapter 9](09-Separation-and-Metrisation.md) (Hausdorff spaces). The gentle
    [Sphere geometry](../../topics/geometry/level-8/06-sphere-geometry.md) lesson is a warm-up for thinking about closed
    surfaces.

    **Levels:** 10.1 and 10.2 are intermediate; 10.3 is intermediate with an advanced proof; 10.4 is advanced (a proof
    outline with the key moves done in full); 10.5 is intermediate in its use and advanced in its foundations; 10.6 is
    intermediate.

## 10.1 Polygons with edge labels

A **surface** is a space that looks like the plane near each of its points. Precisely, a surface is a Hausdorff,
second countable space in which every point has a neighbourhood homeomorphic to an open disc. (The Hausdorff and second
countable conditions are the small print explained in [Chapter 9](09-Separation-and-Metrisation.md), section 9.5.) A
**closed surface** is a surface that is compact and connected. "Closed" here means "compact with no edge", not "closed
subset": a sphere is a closed surface, a disc is not (its rim has no disc-shaped neighbourhood), and the plane is not
(it is not compact).

How do we describe a closed surface concretely enough to compute with it? In [Chapter 2](02-Surfaces-and-Euler-Characteristic.md)
we glued the sides of a square in pairs to make a torus, a Klein bottle and a projective plane. That idea scales up:
take a polygon with an even number of sides, label the sides with letters so that each letter is used exactly twice,
put an arrow on each side, and glue each pair of sides with the same letter so that the arrows match.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 215" role="img" aria-label="Three squares with edge labels. Torus: both a edges point right, both b edges point up. Klein bottle: the a edges point in opposite directions, the b edges both point up. Projective plane: both pairs point in opposite directions">
  <rect x="40" y="30" width="120" height="120" fill="#9cc9ea" fill-opacity="0.2" stroke="none"/>
  <line x1="40" y1="150" x2="160" y2="150" stroke="#eea66f" stroke-width="3"/>
  <polygon points="106,150 96,155 96,145" fill="currentColor"/>
  <text x="100" y="170" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <line x1="160" y1="150" x2="160" y2="30" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="160,89 165,99 155,99" fill="currentColor"/>
  <polygon points="160,79 165,89 155,89" fill="currentColor"/>
  <text x="176" y="95" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">b</text>
  <line x1="40" y1="30" x2="160" y2="30" stroke="#eea66f" stroke-width="3"/>
  <polygon points="106,30 96,35 96,25" fill="currentColor"/>
  <text x="100" y="20" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <line x1="40" y1="150" x2="40" y2="30" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="40,89 45,99 35,99" fill="currentColor"/>
  <polygon points="40,79 45,89 35,89" fill="currentColor"/>
  <text x="24" y="95" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">b</text>
  <text x="100" y="200" text-anchor="middle" font-size="13" fill="currentColor">torus  aba⁻¹b⁻¹</text>
  <rect x="240" y="30" width="120" height="120" fill="#9cc9ea" fill-opacity="0.2" stroke="none"/>
  <line x1="240" y1="150" x2="360" y2="150" stroke="#eea66f" stroke-width="3"/>
  <polygon points="306,150 296,155 296,145" fill="currentColor"/>
  <text x="300" y="170" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <line x1="360" y1="150" x2="360" y2="30" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="360,89 365,99 355,99" fill="currentColor"/>
  <polygon points="360,79 365,89 355,89" fill="currentColor"/>
  <text x="376" y="95" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">b</text>
  <line x1="360" y1="30" x2="240" y2="30" stroke="#eea66f" stroke-width="3"/>
  <polygon points="294,30 304,25 304,35" fill="currentColor"/>
  <text x="300" y="20" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <line x1="240" y1="150" x2="240" y2="30" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="240,89 245,99 235,99" fill="currentColor"/>
  <polygon points="240,79 245,89 235,89" fill="currentColor"/>
  <text x="224" y="95" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">b</text>
  <text x="300" y="200" text-anchor="middle" font-size="13" fill="currentColor">Klein bottle  abab⁻¹</text>
  <rect x="440" y="30" width="120" height="120" fill="#9cc9ea" fill-opacity="0.2" stroke="none"/>
  <line x1="440" y1="150" x2="560" y2="150" stroke="#eea66f" stroke-width="3"/>
  <polygon points="506,150 496,155 496,145" fill="currentColor"/>
  <text x="500" y="170" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <line x1="560" y1="150" x2="560" y2="30" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="560,89 565,99 555,99" fill="currentColor"/>
  <polygon points="560,79 565,89 555,89" fill="currentColor"/>
  <text x="576" y="95" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">b</text>
  <line x1="560" y1="30" x2="440" y2="30" stroke="#eea66f" stroke-width="3"/>
  <polygon points="494,30 504,25 504,35" fill="currentColor"/>
  <text x="500" y="20" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <line x1="440" y1="30" x2="440" y2="150" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="440,91 435,81 445,81" fill="currentColor"/>
  <polygon points="440,101 435,91 445,91" fill="currentColor"/>
  <text x="424" y="95" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">b</text>
  <text x="500" y="200" text-anchor="middle" font-size="13" fill="currentColor">projective plane  abab</text>
</svg>
</div>

### Words

We record a labelled polygon by a **word**: start at a corner, walk around the boundary counterclockwise, and write
down each side's letter as you pass it, with exponent $+1$ (written plainly) if the arrow points the way you are walking
and $-1$ (written $a^{-1}$) if it points against you. In the pictures above, starting at the bottom left corner:

- torus: $aba^{-1}b^{-1}$ (bottom $a$ forwards, right $b$ forwards, top $a$ backwards, left $b$ backwards);
- Klein bottle: $abab^{-1}$;
- projective plane $\mathbb{RP}^2$: $abab$.

Two more examples use only two sides. The word $aa^{-1}$ describes a disc whose boundary is two arcs glued like a
zip being closed: that is a **sphere**. The word $aa$ describes a disc whose boundary arcs are glued with each point
going to the opposite point: that is $\mathbb{RP}^2$ again, the disc with antipodal boundary points identified.

A word is only defined up to some harmless changes, each of which gives a homeomorphic surface:

- **rotating** it (starting at another corner): $abab^{-1}$ and $bab^{-1}a$ describe the same polygon;
- **mirroring** it (reading the other way round, which reverses the word and inverts every letter): $abab^{-1}$ becomes
  $ba^{-1}b^{-1}a^{-1}$;
- **renaming** letters, or **flipping** one pair (replacing $a$ by $a^{-1}$ in both places).

### Why the result is a surface

Let $P$ be the polygon and $X = P/\!\sim$ the quotient by the gluing. $X$ is compact (a continuous image of the compact
polygon) and connected (an image of a connected set). It is Hausdorff because the gluing relation is closed (Exercise
12 of Chapter 9 gives the general principle). The real question is whether every point has a disc neighbourhood.

- A point **inside** the polygon has a small disc around it untouched by the gluing.
- A point **inside a side** is glued to exactly one point of the partner side. Each has a half-disc neighbourhood in
  $P$, and the two half-discs glue along their diameters into a full disc.
- A **corner** is glued to some other corners. Each corner contributes a wedge (a pizza slice); following the gluings,
  the wedges are attached edge to edge in a cycle, and a cycle of wedges closing up is a disc.

The last point needs a word. Corners fall into classes: two corners are in the same class if a chain of gluings
connects them. Each class becomes a single point of $X$, a **vertex**. So the number of vertices of $X$ is the number
of corner classes, and it is usually smaller than the number of corners.

### Counting vertices, and the Euler characteristic

The polygon gives $X$ a decomposition into $V$ vertices, $E$ edges and $F = 1$ face, where $E$ is half the number of
sides. Its **Euler characteristic** is

$$
\chi = V - E + F = V - E + 1.
$$

Why should this be the same number as the Euler characteristic of a triangulation, the definition in
[Chapter 2](02-Surfaces-and-Euler-Characteristic.md)? Because any such decomposition can be cut into triangles by two
kinds of steps, and neither changes $V - E + F$:

- adding a new vertex in the middle of an edge splits the edge in two: $V$ and $E$ both go up by 1;
- adding a new edge across a face from one vertex to another splits the face in two: $E$ and $F$ both go up by 1.

So subdividing preserves $\chi$. That two *unrelated* triangulations of the same surface give the same $\chi$ is a deeper
fact: it is proved with homology in [Chapter 16](16-Homology.md), where $\chi$ appears as an alternating sum of numbers
that depend only on the topology. We use it freely from now on.

**Worked example (the torus).** In $aba^{-1}b^{-1}$, label the corners $P_1, P_2, P_3, P_4$ counterclockwise from the
bottom left, so side 1 runs $P_1 \to P_2$, side 2 runs $P_2 \to P_3$, and so on.

1. Side 1 is $a$ with arrow $P_1 \to P_2$. Side 3 is $a^{-1}$, walked $P_3 \to P_4$, so its arrow is $P_4 \to P_3$.
   Matching arrows glues tail to tail and head to head: $P_1 \sim P_4$ and $P_2 \sim P_3$.
2. Side 2 is $b$ with arrow $P_2 \to P_3$. Side 4 is $b^{-1}$, walked $P_4 \to P_1$, arrow $P_1 \to P_4$. So
   $P_2 \sim P_1$ and $P_3 \sim P_4$.
3. All four corners are now in one class: $V = 1$. Then $\chi = 1 - 2 + 1 = 0$.

Check: a torus triangulated as in Chapter 2 also has $\chi = 0$.

**Worked example (a hexagon).** Take $abca^{-1}b^{-1}c^{-1}$, corners $P_1, \ldots, P_6$, side $i$ walked from $P_i$
to $P_{i+1}$ (with $P_7 = P_1$).

1. $a$: side 1 has arrow $P_1 \to P_2$; side 4 is $a^{-1}$, arrow $P_5 \to P_4$. So $P_1 \sim P_5$, $P_2 \sim P_4$.
2. $b$: side 2 has arrow $P_2 \to P_3$; side 5 is $b^{-1}$, arrow $P_6 \to P_5$. So $P_2 \sim P_6$, $P_3 \sim P_5$.
3. $c$: side 3 has arrow $P_3 \to P_4$; side 6 is $c^{-1}$, arrow $P_1 \to P_6$. So $P_3 \sim P_1$, $P_4 \sim P_6$.
4. Classes: $\{P_1, P_3, P_5\}$ and $\{P_2, P_4, P_6\}$. So $V = 2$, $E = 3$, $\chi = 2 - 3 + 1 = 0$.

The same $\chi$ as the torus, and (as 10.2 shows) this word is also orientable. By the end of the chapter that will
prove it *is* a torus: the hexagon with opposite sides glued by translation is the torus that hexagonal tiles make.

### Try it in Python

The bookkeeping is mechanical, so a computer can do it. This function joins corner classes with a small union-find,
then reports $\chi$ and the orientability test of 10.2 (standard library only).

```python
def classify(word):
    """word: list of (letter, +1 or -1) read around the polygon."""
    n = len(word)
    parent = list(range(n))            # corner i is the start of side i
    def find(i):
        while parent[i] != i:
            i = parent[i]
        return i
    seen = {}
    for i, (x, e) in enumerate(word):
        tail, head = (i, (i + 1) % n) if e == 1 else ((i + 1) % n, i)
        if x in seen:
            t2, h2, e2 = seen[x]
            parent[find(tail)] = find(t2)
            parent[find(head)] = find(h2)
        else:
            seen[x] = (tail, head, e)
    V = len({find(i) for i in range(n)})
    E = n // 2
    chi = V - E + 1
    orientable = all(sum(e for y, e in word if y == x) == 0 for x in seen)
    if orientable:
        return chi, "orientable, g = %d" % ((2 - chi) // 2)
    return chi, "non-orientable, k = %d" % (2 - chi)

def parse(s):                          # "aba'b'" -> [('a',1),('b',1),('a',-1),('b',-1)]
    out = []
    for ch in s:
        if ch == "'":
            out[-1] = (out[-1][0], -1)
        else:
            out.append((ch, 1))
    return out

for w in ["aba'b'", "abab'", "abab", "abcabc", "abca'b'c'", "abcab'c'"]:
    print(w, classify(parse(w)))
```

It prints

```text
aba'b' (0, 'orientable, g = 1')
abab' (0, 'non-orientable, k = 2')
abab (1, 'non-orientable, k = 1')
abcabc (1, 'non-orientable, k = 1')
abca'b'c' (0, 'orientable, g = 1')
abcab'c' (-1, 'non-orientable, k = 3')
```

The numbers $g$ and $k$ in the output are explained in 10.4 and 10.5.

<figure class="play" data-play="gluing" data-mode="klein"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The Klein bottle's square: one pair of edges glued with a twist, so the walker comes back mirrored.</figcaption></figure>

## 10.2 Orientability

An ant walking on a sphere can carry a small clock face with it, and wherever it goes the clock still runs clockwise as
seen from outside. On a Möbius band it cannot: walk once around the core and the clock comes back mirror-reversed. That
is the difference between orientable and non-orientable surfaces.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 170" role="img" aria-label="Two rectangles. Left: both short edges labelled a with arrows pointing up, glued without a twist they give an annulus. Right: the short edges point in opposite directions, glued with a twist they give a Moebius band">
  <rect x="40" y="40" width="190" height="80" fill="#9cc9ea" fill-opacity="0.2" stroke="none"/>
  <line x1="40" y1="40" x2="230" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="120" x2="230" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="120" x2="40" y2="40" stroke="#eea66f" stroke-width="3"/>
  <polygon points="40,74 45,84 35,84" fill="currentColor"/>
  <text x="26" y="85" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <line x1="230" y1="120" x2="230" y2="40" stroke="#eea66f" stroke-width="3"/>
  <polygon points="230,74 235,84 225,84" fill="currentColor"/>
  <text x="244" y="85" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <text x="135" y="155" text-anchor="middle" font-size="13" fill="currentColor">annulus (cylinder)</text>
  <rect x="290" y="40" width="190" height="80" fill="#9cc9ea" fill-opacity="0.2" stroke="none"/>
  <line x1="290" y1="40" x2="480" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="120" x2="480" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="120" x2="290" y2="40" stroke="#eea66f" stroke-width="3"/>
  <polygon points="290,74 295,84 285,84" fill="currentColor"/>
  <text x="276" y="85" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <line x1="480" y1="40" x2="480" y2="120" stroke="#eea66f" stroke-width="3"/>
  <polygon points="480,86 475,76 485,76" fill="currentColor"/>
  <text x="494" y="85" text-anchor="middle" font-size="14" fill="currentColor" font-style="italic">a</text>
  <text x="385" y="155" text-anchor="middle" font-size="13" fill="currentColor">Möbius band</text>
</svg>
</div>

A rectangle with its two short sides glued, arrows matching, is an annulus if the arrows point the same way and a
**Möbius band** if they point opposite ways (one side has to be flipped over before it is glued).

**Definition.** A surface is **non-orientable** if it contains a subspace homeomorphic to the Möbius band, and
**orientable** if it does not.

This definition is clearly a topological invariant: a homeomorphism carries a Möbius band to a Möbius band. There is a
combinatorial version, more useful for computing: a triangulated surface is orientable exactly when each triangle can be
given a direction of travel around its boundary so that, along every edge, the two triangles that meet there travel
that edge in opposite directions (the way two gears that mesh turn opposite ways). That the two definitions agree is a
standard fact that takes some care to prove; we use it without proof, and you can find it in Massey's or Armstrong's
books listed at the end.

### Reading orientability off a word

**Theorem 10.1.** *The surface given by a word is orientable if and only if every letter appears once with exponent $+1$
and once with exponent $-1$.*

Call a pair of the form $a \ldots a^{-1}$ a **plain pair** and a pair $a \ldots a$ (same exponent twice) a **twisted
pair**. The theorem says: orientable exactly when there are no twisted pairs.

**Proof.** *If there is a twisted pair, there is a Möbius band.* Suppose $a$ appears twice with the same exponent. Walking
counterclockwise round the polygon, both copies of $a$ are walked in the direction of their arrows. Draw a narrow strip
across the polygon from the middle of one $a$-side to the middle of the other. Stretch the polygon so that the two
$a$-sides become the left and right ends of a rectangle and the strip runs straight across. The counterclockwise
direction goes *up* one end and *down* the other end of the strip, so the two arrows point in opposite directions, as in
the right-hand picture above. The strip, glued at its ends, is a Möbius band.

*If there are no twisted pairs, the surface is orientable.* Give the polygon the counterclockwise direction of travel.
At each glued pair $a \ldots a^{-1}$, the polygon travels one copy of the side along the arrow and the other against it,
so after gluing, the two sides of the edge are travelled in opposite directions, exactly the meshing-gears condition.
Subdividing the polygon into triangles, each with the counterclockwise direction, keeps the condition on the new edges
inside the polygon. So the surface has a consistent orientation. $\square$

**Worked examples.**

- Torus $aba^{-1}b^{-1}$: both pairs plain. Orientable.
- Klein bottle $abab^{-1}$: $a$ is twisted. Non-orientable.
- $\mathbb{RP}^2$ as $aa$ or $abab$: twisted. Non-orientable.
- Hexagon $abca^{-1}b^{-1}c^{-1}$: all plain. Orientable.
- $abca^{-1}cb$: $a$ is plain but $b$ and $c$ are twisted. Non-orientable.

### One-sided and non-orientable

You may have heard "the Möbius strip has only one side". For surfaces sitting inside $\mathbb{R}^3$, being
non-orientable and being one-sided go together. But orientability is *intrinsic*: it is about the surface alone, not about
how it sits in space, and "sides" are about the surrounding space. A closed surface inside $\mathbb{R}^3$ is always
orientable; this is a theorem (it follows from a version of the Jordan curve theorem one dimension up, proved with
homology). That is why the Klein bottle and $\mathbb{RP}^2$ cannot be built in $\mathbb{R}^3$ without passing through
themselves: the glass "Klein bottles" sold as curiosities are pictures of a map into $\mathbb{R}^3$ that crosses itself
along a circle. Both surfaces can be built without self-crossing in $\mathbb{R}^4$.

## 10.3 Connected sum

Take two surfaces, cut a small round hole in each, and sew the two holes together along their rims. The result is the
**connected sum** $M \# N$.

**Definition.** Let $M, N$ be closed surfaces. Choose closed discs $D \subseteq M$ and $D' \subseteq N$, remove their
interiors, and glue the two boundary circles by a homeomorphism. The result is $M \# N$.

It is a theorem that the result does not depend, up to homeomorphism, on which discs are chosen or how the circles are
glued. The proof needs two facts: any two discs in a connected surface can be moved onto each other by a homeomorphism
of the whole surface (the "disc theorem"), and every homeomorphism of a circle extends over the disc it bounds (by
coning: send $r e^{i\theta}$ to $r f(e^{i\theta})$). The only remaining choice is whether the gluing preserves or reverses
the direction around the circle, and every closed surface has a mirror-image self-homeomorphism that converts one choice
into the other. We do not prove the disc theorem here.

Three examples set the pattern.

- **The sphere is the identity:** $M \# S^2 \cong M$. Removing a disc from $S^2$ leaves a disc, so $M \# S^2$ is $M$
  with a hole that has been filled in again.
- **$T \# T$** is the double torus, a surface of **genus 2**: a sphere with two handles. In general the
  **genus-$g$ surface** is $\Sigma_g = T \# T \# \cdots \# T$ ($g$ tori), with $\Sigma_0 = S^2$.
- **$\mathbb{RP}^2 \# \mathbb{RP}^2 \# \cdots \# \mathbb{RP}^2$** ($k$ copies) is written $N_k$. Removing a disc from
  $\mathbb{RP}^2$ leaves a Möbius band (shown in 10.6), so $N_k$ is a sphere with $k$ holes, each sewn up with a Möbius
  band. Each such patch is called a **cross-cap**.

### Connected sum of words

If $M$ is given by a word $w_1$ and $N$ by a word $w_2$ using different letters, then $M \# N$ is given by the
concatenated word $w_1 w_2$.

**Why (sketch).** In the polygon $w_1 w_2$, draw a diagonal $c$ separating the sides of $w_1$ from the sides of $w_2$,
and cut along it into two polygons $w_1 c$ and $c^{-1} w_2$ (the cut rule below). The two ends of $c$ are glued to the
same vertex: in the polygon $w_1$ alone they were a single corner, and the side gluings that went round that corner
still connect its two halves. So on the surface $c$ is a closed loop, the boundary of the piece $w_1 c$. Gluing a disc
onto that loop (a one-sided polygon $c^{-1}$) gives back the polygon $w_1$, which is $M$; so the piece $w_1 c$ is $M$
with a disc removed. Likewise $c^{-1} w_2$ is $N$ with a disc removed, and the original polygon glues the two pieces
along their boundary circles: that is $M \# N$. Massey, Chapter 1, has the details and pictures.

**Examples.** $T \# T$ is $a_1 b_1 a_1^{-1} b_1^{-1} a_2 b_2 a_2^{-1} b_2^{-1}$, an octagon. In general $\Sigma_g$ is
the $4g$-gon

$$
a_1 b_1 a_1^{-1} b_1^{-1} \, a_2 b_2 a_2^{-1} b_2^{-1} \cdots a_g b_g a_g^{-1} b_g^{-1},
$$

and $N_k$ is the $2k$-gon $a_1 a_1 a_2 a_2 \cdots a_k a_k$.

### The Euler characteristic of a connected sum

**Theorem 10.2.** $\chi(M \# N) = \chi(M) + \chi(N) - 2$.

**Proof.** Triangulate $M$ and $N$, and use one triangle of each as the removed disc. Removing the open triangle from $M$
loses one face. Gluing the two boundary triangles together identifies 3 vertices of $M$ with 3 vertices of $N$ and 3
edges with 3 edges. Counting:

$$
\chi(M \# N) = (V_M + V_N - 3) - (E_M + E_N - 3) + (F_M - 1 + F_N - 1) = \chi(M) + \chi(N) - 2. \qquad \square
$$

**Consequences.** Since $\chi(T) = 0$ and $\chi(\mathbb{RP}^2) = 1$,

$$
\chi(\Sigma_g) = 2 - 2g, \qquad \chi(N_k) = 2 - k.
$$

Check with words: $\Sigma_g$ as a $4g$-gon has all corners in one class (Exercise 5), so
$\chi = 1 - 2g + 1 = 2 - 2g$. For $g = 2$: $\chi = -2$.

### The Klein bottle is two cross-caps

**Worked example.** We show $abab^{-1} \cong bbcc$, so the Klein bottle is $N_2 = \mathbb{RP}^2 \# \mathbb{RP}^2$. Two
rules of cut and paste are all we need:

- **cut:** a polygon with word $PQ$ (where $P$ and $Q$ are strings of sides) can be cut along a diagonal $c$ into two
  polygons $Pc$ and $c^{-1}Q$; the surface does not change, because the gluing along $c$ puts them back;
- **paste:** two polygons $Xa$ and $a^{-1}Y$ that share a side $a$ glue into one polygon $XY$.

Now:

1. Rotate $abab^{-1}$ to $bab^{-1}a$, and cut it as $P = ba$, $Q = b^{-1}a$ into $bac$ and $c^{-1}b^{-1}a$.
2. Rotate the first piece to $cba$, which is $Xa$ with $X = cb$.
3. The second piece contains $a$, not $a^{-1}$, so mirror it: $c^{-1}b^{-1}a$ becomes $a^{-1}bc$, which is $a^{-1}Y$
   with $Y = bc$.
4. Paste along $a$: $XY = cbbc$, which rotates to $bbcc$.

Check: $abab^{-1}$ has $V = 1$, $E = 2$, so $\chi = 0$, and so does $bbcc$; both have twisted pairs. In words: the
Klein bottle can be cut into two Möbius bands (Exercise 10).

### Dyck's theorem

One more relation is needed, and it is the surprising one: a handle and a cross-cap together are the same as three
cross-caps.

**Dyck's theorem.** $T \# \mathbb{RP}^2 \cong \mathbb{RP}^2 \# \mathbb{RP}^2 \# \mathbb{RP}^2$.

*Idea.* In a non-orientable surface, a handle can be slid once around a cross-cap; it comes back mirror-reversed, and a
torus handle reversed this way is a Klein bottle handle. So $T \# \mathbb{RP}^2 \cong K \# \mathbb{RP}^2$, and
$K \cong \mathbb{RP}^2 \# \mathbb{RP}^2$ by the worked example. In words, it is three cut-and-paste moves turning
$aba^{-1}b^{-1}cc$ into $aabbcc$; Massey, Chapter 1, draws them. Check the invariants: both words have
$V = 1$, $E = 3$, $\chi = -1$, and both have a twisted pair.

Dyck's theorem means there is no point in mixing handles and cross-caps: once there is one cross-cap, every handle can be
traded for two more.

## 10.4 The classification theorem

*Level: advanced.*

**Classification theorem.** *Every closed surface is homeomorphic to exactly one of*

- *the sphere $S^2$,*
- *a connected sum of $g \ge 1$ tori, $\Sigma_g$, or*
- *a connected sum of $k \ge 1$ projective planes, $N_k$.*

In words: a sphere with $g$ handles, or a sphere with $k$ cross-caps. Equivalently, every closed surface has a word of
one of the **normal forms**

$$
aa^{-1}, \qquad a_1 b_1 a_1^{-1} b_1^{-1} \cdots a_g b_g a_g^{-1} b_g^{-1}, \qquad a_1 a_1 a_2 a_2 \cdots a_k a_k.
$$

"Exactly one" has two halves. **Existence** (every surface is on the list) is the cut-and-paste proof below.
**Uniqueness** (no two surfaces on the list are homeomorphic) is 10.5.

### The proof outline

**Step 0: triangulate.** Every closed surface can be triangulated: it is homeomorphic to a finite collection of
triangles glued edge to edge, each edge shared by exactly two triangles, and the triangles around each vertex forming a
single cycle. This is **Radó's theorem** (Tibor Radó, 1925). Its proof is genuinely hard; it rests on the
Jordan–Schoenflies theorem (a simple closed curve in the plane bounds a disc), and we do not give it. Everything after
this step is combinatorics.

**Step 1: one polygon.** Number the triangles. Start with triangle 1. Since the surface is connected, some triangle
not yet used shares an edge with what we have; glue it on along that edge. The result is still a disc (a polygon),
because we glued a triangle to a disc along a single edge. Continue until all triangles are used. The surface is now a
single polygon with its sides glued in pairs: a word.

**Step 2: cancel folds.** If the word contains $aa^{-1}$ next to each other (and is not just $aa^{-1}$), the two sides
fold together like closing a zip, and we can delete them: $X a a^{-1} Y$ becomes $XY$. Repeat until there are no such
adjacent pairs. If what is left is $aa^{-1}$, the surface is a sphere and we are done.

**Step 3: make all corners one vertex.** Suppose there are two or more vertex classes. Then somewhere two neighbouring
corners are in different classes, say a side $b$ runs from a corner in class $P$ to one in class $Q$, followed by a side
$c$. Cut off the triangle formed by $b$, $c$ and a diagonal, and paste it back along the partner of $b$. The effect is to
remove one corner from class $P$ and add one to class $Q$. Repeating this (and cancelling folds as they appear) shrinks
class $P$ until it vanishes. The number of classes drops by one; repeat until there is one class. Massey, Chapter 1,
draws the move.

**Step 4: bring twisted pairs together.** Suppose the word has a twisted pair: up to rotation, $x A x B$ where $A, B$ are
strings. Cut along a diagonal $y$ joining the corner before the first $x$ to the corner before the second $x$, giving
pieces $xAy$ and $y^{-1}xB$. Rotate the first to $Ayx$; mirror the second to $B^{-1}x^{-1}y$ and rotate it to
$x^{-1}yB^{-1}$. Paste along $x$:

$$
xAxB \;\longrightarrow\; Ayy B^{-1}.
$$

Here $B^{-1}$ means $B$ read backwards with every exponent inverted. The twisted pair is now adjacent, as $yy$. Do this to
every twisted pair; it does not separate pairs already brought together.

Check on a small case: $xpxp$ (this is $\mathbb{RP}^2$) becomes $p\,yy\,p^{-1}$, which rotates to $yy\,p^{-1}p$ and
cancels to $yy$: $\mathbb{RP}^2$ again.

**Step 5: bring handles together.** Now every pair still separated is plain, $x \ldots x^{-1}$. Claim: some other plain
pair $y \ldots y^{-1}$ **interlocks** with it, meaning the word looks like
$\ldots x \ldots y \ldots x^{-1} \ldots y^{-1} \ldots$. Indeed, write the word as $x A x^{-1} B$, with $A$ and $B$ nonempty (otherwise Step 2 would cancel the pair). Let
the first $x$ run from corner $c_0$ to corner $c_1$, the stretch $A$ from $c_1$ to $c_2$, the side $x^{-1}$ from $c_2$ to
$c_3$, and $B$ from $c_3$ back to $c_0$. The gluing of $x$ matches tails and heads: $c_0 \sim c_3$ and $c_1 \sim c_2$.
If every letter of $A$ had its partner in $A$, then the corners from $c_1$ to $c_2$ would be glued only to each other,
and the corners from $c_3$ to $c_0$ only to each other, so there would be at least two vertex classes, contradicting
Step 3. So some letter $y$ has one copy in $A$ and one in $B$. Two more cuts and pastes
(Massey, Chapter 1) give

$$
A\,x\,B\,y\,C\,x^{-1}D\,y^{-1}E \;\longrightarrow\; A\,D\,C\,B\,x\,y\,x^{-1}y^{-1}E,
$$

so the handle $xyx^{-1}y^{-1}$ is collected in one place. Repeat for every interlocking pair.

**Step 6: tidy up.** The word is now a product of blocks $yy$ (cross-caps) and $xyx^{-1}y^{-1}$ (handles), in some
order (blocks can be moved past each other by rotation and Step 5). If there are only handles, we have $\Sigma_g$. If
there are only cross-caps, we have $N_k$. If there are both, use Dyck's theorem to replace each handle by two cross-caps,
giving $N_k$. $\square$

**Check (Step 5 on an example).** Take $p\,x\,q\,y\,p^{-1}x^{-1}q^{-1}y^{-1}$, with $A = p$, $B = q$, $C = p^{-1}$,
$D = q^{-1}$ and $E$ empty. The move gives $p\,q^{-1}p^{-1}q\,x\,y\,x^{-1}y^{-1}$. The `classify` function of 10.1
gives both words $\chi = -2$ and calls both orientable, so both should be $\Sigma_2$, and indeed the result is two handles
side by side (the first block $pq^{-1}p^{-1}q$ is a handle with $b = q^{-1}$).

### Another proof

A shorter and more visual proof is John Conway's **ZIP proof** ("zero irrelevancy proof"), written up by George Francis
and Jeffrey Weeks in 1999. It starts from the triangles, zips edges together one at a time, and keeps track of the
partly zipped surface, which is always a sphere with some holes, handles and cross-caps. It still needs Radó's
triangulation theorem.

## 10.5 Euler characteristic and orientability determine a closed surface

Combining the classification with the formulas of 10.3:

| Surface | Word | Orientable | $\chi$ |
| --- | --- | --- | --- |
| $S^2$ | $aa^{-1}$ | yes | 2 |
| $T = \Sigma_1$ | $aba^{-1}b^{-1}$ | yes | 0 |
| $\Sigma_2$ | $a_1b_1a_1^{-1}b_1^{-1}a_2b_2a_2^{-1}b_2^{-1}$ | yes | $-2$ |
| $\Sigma_g$ | $4g$-gon | yes | $2 - 2g$ |
| $\mathbb{RP}^2 = N_1$ | $aa$ | no | 1 |
| $K = N_2$ | $aabb$ | no | 0 |
| $N_3$ | $aabbcc$ | no | $-1$ |
| $N_k$ | $2k$-gon | no | $2 - k$ |

**Theorem 10.3.** *Two closed surfaces are homeomorphic if and only if they have the same Euler characteristic and are
both orientable or both non-orientable.*

**Proof.** Homeomorphic surfaces have the same $\chi$ (it is a topological invariant; see below) and the same
orientability (a homeomorphism carries Möbius bands to Möbius bands). Conversely, by the classification each surface is
some $\Sigma_g$ or $N_k$. Among orientable ones, $\chi = 2 - 2g$ determines $g$; among non-orientable ones,
$\chi = 2 - k$ determines $k$. So the pair (orientability, $\chi$) picks out exactly one surface of the list. $\square$

The same proof finishes the uniqueness half of the classification: the surfaces on the list have different pairs
(orientability, $\chi$), so no two of them are homeomorphic.

**The honest foundation.** The proof leans on one fact: *the Euler characteristic is a topological invariant*, the same
for any two triangulations of homeomorphic surfaces. Subdivision (10.1) shows that $\chi$ does not change when a
triangulation is refined, but two unrelated triangulations need not have a common refinement that is easy to find. The
clean proof is through homology ([Chapter 16](16-Homology.md)), where $\chi = b_0 - b_1 + b_2$ with Betti numbers that
are homotopy invariants. For surfaces, one can also prove that any two triangulations have a common subdivision
(Radó's work again), but that is the hard road.

**Worked examples (identify the surface).**

1. $abcabc$. A hand count as in 10.1 (or the `classify` function) gives three corner classes, $\{P_1, P_4\}$,
   $\{P_2, P_5\}$ and $\{P_3, P_6\}$, so $V = 3$, $E = 3$, $\chi = 1$; the pairs are twisted. Non-orientable with $\chi = 1$: this is
   $\mathbb{RP}^2$. (It is the hexagon with opposite points identified through the centre, a disc with antipodal
   boundary points glued.)
2. $abcab^{-1}c^{-1}$. $V = 1$, $E = 3$, $\chi = -1$; $a$ is twisted. Non-orientable with $\chi = -1$: $N_3$.
3. $abca^{-1}cb$. $V = 2$, $E = 3$, $\chi = 0$; $b$ and $c$ are twisted. Non-orientable with $\chi = 0$: the Klein bottle.
4. $abc^{-1}a^{-1}cb^{-1}$. $V = 2$, $E = 3$, $\chi = 0$; all pairs plain. Orientable with $\chi = 0$: the torus.
5. $\Sigma_2 \# \mathbb{RP}^2$. Non-orientable, and $\chi = -2 + 1 - 2 = -3$, so it is $N_5$.

Check: each of these was run through `classify`, which agrees.

### The genus, and the shape of a planet

For orientable surfaces the **genus** $g = (2 - \chi)/2$ counts handles. The surface of a ball, of a cube, of a planet
are all genus 0: topologically spheres. The surface of a doughnut or a coffee mug is genus 1, a pretzel with three holes
genus 3 and $\chi = -4$. A map of Mars or of Earth is an attempt to put a genus-0 surface onto a flat sheet; topology
already says it cannot be done without cutting somewhere (a sphere is compact and has no boundary, and no subset of the
plane is both, as [Chapter 11](11-Manifolds.md) shows), and the [Geometry book](../geometry/16-Spherical-Geometry.md)
explains what else every flat map must distort.

### Euler characteristic and curvature

There is a beautiful bridge to geometry. The **Gauss–Bonnet theorem**
([Geometry, Chapter 19](../geometry/19-Curves-and-Surfaces.md)) says that for a closed surface with a Riemannian metric
and Gaussian curvature $K$,

$$
\int_M K \, dA = 2\pi \chi(M).
$$

The left side is geometry (it depends on the metric), the right side is topology (it does not). For a round sphere of
radius $R$, $K = 1/R^2$ and the area is $4\pi R^2$, so the integral is $4\pi = 2\pi \cdot 2$. Check. It follows that a
torus cannot carry a metric of everywhere positive curvature (the integral would be positive, but $\chi = 0$), and that
every surface of genus $g \ge 2$ must have negative curvature somewhere.

## 10.6 Surfaces with boundary

A disc, an annulus and a Möbius band are not closed surfaces: they have edges. To include them, let the model space be
the **closed half-plane** $H = \{(x, y) : y \ge 0\}$.

**Definition.** A **surface with boundary** is a Hausdorff, second countable space in which every point has a
neighbourhood homeomorphic to an open subset of $H$. Points that correspond to points on the line $y = 0$ form the
**boundary** $\partial M$; the others form the **interior**.

That a point cannot be both (have one neighbourhood like an open disc and another like a half-disc centred on the
edge) is not obvious; it follows from invariance of domain, [Chapter 11](11-Manifolds.md), section 11.4. The boundary of
a compact surface with boundary is a compact 1-manifold, and every compact connected 1-manifold is a circle, so
$\partial M$ is a finite disjoint union of circles.

**Theorem 10.4 (classification with boundary).** *A compact connected surface with boundary is homeomorphic to a closed
surface with $b$ open discs removed (discs with disjoint closures), where $b$ is the number of boundary circles. Two such
surfaces are homeomorphic if and only if they have the same orientability, the same Euler characteristic and the same
number of boundary circles.*

*Proof idea.* Glue a disc onto each boundary circle. The result is a closed surface, classified by 10.4; removing the
discs again gives back the original. The invariants: removing an open triangle from a triangulation lowers $F$ by 1,
so

$$
\chi(S \text{ minus } b \text{ discs}) = \chi(S) - b.
$$

So $\chi = 2 - 2g - b$ in the orientable case and $\chi = 2 - k - b$ in the non-orientable case, and from
(orientability, $\chi$, $b$) one recovers $g$ or $k$. $\square$

| Surface | Closed surface it comes from | $b$ | Orientable | $\chi$ |
| --- | --- | --- | --- | --- |
| disc | $S^2$ minus 1 disc | 1 | yes | 1 |
| annulus | $S^2$ minus 2 discs | 2 | yes | 0 |
| pair of pants | $S^2$ minus 3 discs | 3 | yes | $-1$ |
| punctured torus | $T$ minus 1 disc | 1 | yes | $-1$ |
| Möbius band | $\mathbb{RP}^2$ minus 1 disc | 1 | no | 0 |

The annulus and the Möbius band have the same $\chi$; they differ in both $b$ and orientability. The pair of pants and
the punctured torus have the same $\chi$ and are both orientable; they differ in $b$.

**Worked example ($\mathbb{RP}^2$ minus a disc is a Möbius band).** Think of $\mathbb{RP}^2$ as the sphere with antipodal
points identified. Remove the two polar caps above latitude $\pm\theta_0$; they are swapped by the antipodal map, so in
$\mathbb{RP}^2$ they are a single disc. What is left is the band around the equator, an annulus with coordinates
(longitude $\phi$, height $h$), $-c \le h \le c$, and the antipodal map sends $(\phi, h)$ to $(\phi + \pi, -h)$. A
fundamental piece is the rectangle $0 \le \phi \le \pi$, $-c \le h \le c$, and its left edge is glued to its right
edge by $(0, h) \sim (\pi, -h)$: the edges are glued with a flip. That is the Möbius band. Check: $\chi(\mathbb{RP}^2) - 1 = 0$,
$b = 1$, non-orientable, matching the table.

### Discs with bands

Many surfaces with boundary come naturally as **discs with bands attached**: take some discs, and attach thin strips
(bands) whose two ends are glued to the rims of the discs, each band either flat or with a half-twist. A band is a
rectangle whose two short sides are glued onto arcs of a rim; after subdividing the rim so that those arcs are edges,
attaching it adds no new vertices, two new edges (its long sides) and one face. So each band lowers $\chi$ by 1, and

$$
\chi = (\text{number of discs}) - (\text{number of bands}).
$$

**Worked example.** One disc with two flat bands. If the band ends alternate around the rim (band 1, band 2, band 1,
band 2), tracing the boundary shows a single boundary circle: $b = 1$, $\chi = 1 - 2 = -1$, orientable, so this is the
punctured torus. If the ends do not alternate (band 1, band 1, band 2, band 2), tracing gives three boundary circles:
$b = 3$, $\chi = -1$, the pair of pants. Same $\chi$, different surfaces, distinguished by $b$. One disc with one band
with a half-twist is a Möbius band: $\chi = 0$, $b = 1$, non-orientable.

Every knot in space is the boundary of some orientable surface with one boundary circle, built in exactly this way from
discs and twisted bands; this is **Seifert's theorem** (Herbert Seifert, 1934). Such **Seifert surfaces** reappear in
[Chapter 18](18-Knot-Theory.md).

## A short history

The classification grew out of complex analysis. Bernhard Riemann's work on functions of a complex variable (1851, 1857)
introduced the surfaces now named after him and the idea of counting their handles. August Möbius, around 1863, and
Camille Jordan, in 1866, gave classifications of orientable surfaces; Möbius and Johann Listing had independently
described the one-sided band in 1858. Walther von Dyck treated non-orientable surfaces and proved his theorem in 1888.
The first proof by the modern cut-and-paste method was given by Max Dehn and Poul Heegaard in their 1907 encyclopaedia
article, and Henry Brahana gave a fully rigorous combinatorial proof in 1921, assuming a triangulation. Tibor Radó proved
in 1925 that every surface can be triangulated, completing the argument. Conway's ZIP proof was published by Francis and
Weeks in the *American Mathematical Monthly* in 1999.

## Check yourself

??? question "1. Find $\chi$ and the orientability of the word $abc^{-1}a^{-1}cb^{-1}$, and name the surface."
    Corners $P_1, \ldots, P_6$, side $i$ from $P_i$ to $P_{i+1}$. $a$: side 1 arrow $P_1 \to P_2$, side 4 is $a^{-1}$
    with arrow $P_5 \to P_4$: $P_1 \sim P_5$, $P_2 \sim P_4$. $b$: side 2 arrow $P_2 \to P_3$, side 6 is $b^{-1}$ with
    arrow $P_1 \to P_6$: $P_2 \sim P_1$, $P_3 \sim P_6$. $c$: side 3 is $c^{-1}$ with arrow $P_4 \to P_3$, side 5 arrow
    $P_5 \to P_6$: $P_4 \sim P_5$, $P_3 \sim P_6$. Classes: $\{P_1, P_2, P_4, P_5\}$ and $\{P_3, P_6\}$, so $V = 2$,
    $E = 3$, $\chi = 0$. Every letter appears once plain and once inverted, so it is orientable. Orientable with
    $\chi = 0$: the torus.

??? question "2. Show that the word $aa$ and the word $abab$ give the same surface."
    Both are non-orientable. For $aa$: two corners, and the gluing sends the tail of the first $a$ to the tail of the
    second, which is the head of the first; so both corners are one class, $V = 1$, $E = 1$, $\chi = 1$. For $abab$:
    corners $P_1, \ldots, P_4$; $a$ glues $P_1 \sim P_3$, $P_2 \sim P_4$; $b$ glues $P_2 \sim P_4$, $P_3 \sim P_1$. Two
    classes, $V = 2$, $E = 2$, $\chi = 1$. Same $\chi$ and both non-orientable, so both are $\mathbb{RP}^2$ by Theorem 10.3.

??? question "3. Which surface is $\Sigma_2 \# \mathbb{RP}^2$? Which is $K \# K$?"
    $\chi(\Sigma_2 \# \mathbb{RP}^2) = -2 + 1 - 2 = -3$, non-orientable, so $N_5$. $\chi(K \# K) = 0 + 0 - 2 = -2$,
    non-orientable, so $N_4$ (as expected, since $K = N_2$).

??? question "4. List all closed surfaces with $\chi = 0$, and all with $\chi = -2$."
    Orientable: $2 - 2g = 0$ gives $g = 1$, the torus; non-orientable: $2 - k = 0$ gives $k = 2$, the Klein bottle. For
    $\chi = -2$: $g = 2$ (the double torus $\Sigma_2$) and $k = 4$ ($N_4$).

??? question "5. Show that in the $4g$-gon word of $\Sigma_g$ all corners form one class, and deduce $\chi(\Sigma_g) = 2 - 2g$."
    Look at one block $a b a^{-1} b^{-1}$ with corners $Q_0, Q_1, Q_2, Q_3$, and let $Q_4$ be the first corner of the
    next block (for $g = 1$, $Q_4 = Q_0$). Side $a$ has arrow $Q_0 \to Q_1$; side $a^{-1}$ is walked $Q_2 \to Q_3$, so
    its arrow is $Q_3 \to Q_2$. Matching gives $Q_0 \sim Q_3$ and $Q_1 \sim Q_2$. Side $b$ has arrow $Q_1 \to Q_2$;
    side $b^{-1}$ is walked $Q_3 \to Q_4$, arrow $Q_4 \to Q_3$. Matching gives $Q_1 \sim Q_4$ and $Q_2 \sim Q_3$. So
    $Q_0, \ldots, Q_4$ are all one class, and the last corner of each block is the first corner of the next. By
    induction all corners are one class: $V = 1$, $E = 2g$, $\chi = 1 - 2g + 1 = 2 - 2g$.

??? question "6. Show that the word $a_1 a_1 a_2 a_2 \cdots a_k a_k$ has one vertex class and $\chi = 2 - k$."
    In a block $a a$ with corners $R_0, R_1, R_2$ (the side pair runs $R_0 \to R_1$ and $R_1 \to R_2$), the gluing
    matches tails $R_0 \sim R_1$ and heads $R_1 \sim R_2$. So each block's start and end corner are in one class, and
    consecutive blocks share a corner. All $2k$ corners are one class: $V = 1$, $E = k$, $\chi = 1 - k + 1 = 2 - k$.

??? question "7. Prove that the Euler characteristic of an orientable closed surface is even. Is there an orientable closed surface with $\chi = 1$?"
    By the classification an orientable closed surface is $\Sigma_g$ for some $g \ge 0$, and $\chi(\Sigma_g) = 2 - 2g$,
    which is even. So no orientable closed surface has $\chi = 1$; the only closed surface with $\chi = 1$ is
    $\mathbb{RP}^2$.

??? question "8. A closed surface carries a metric of constant curvature $K = -1$ and has genus 2. What is its area?"
    Gauss–Bonnet: $\int K \, dA = 2\pi\chi$. With $K = -1$ the left side is $-\text{Area}$, and
    $\chi(\Sigma_2) = -2$. So $-\text{Area} = -4\pi$, and the area is $4\pi$. (In general a hyperbolic surface of genus
    $g$ has area $4\pi(g - 1)$.)

??? question "9. Show that the pair of pants and the punctured torus are not homeomorphic, although both are orientable with $\chi = -1$."
    The boundary of a surface with boundary is a topological invariant (a homeomorphism sends points with disc
    neighbourhoods to points with disc neighbourhoods, and so boundary to boundary, by invariance of domain). The pair of
    pants has 3 boundary circles and the punctured torus has 1. A homeomorphism would restrict to a homeomorphism between
    the boundaries, and a union of 3 circles has 3 components, a union of 1 circle has 1. So they are not homeomorphic.

??? question "10. Glue two Möbius bands along their boundary circles. Which closed surface do you get?"
    Each Möbius band is $\mathbb{RP}^2$ minus a disc (10.6), so gluing two along their boundaries is exactly
    $\mathbb{RP}^2 \# \mathbb{RP}^2$, the Klein bottle. Check the invariants: gluing two surfaces along a circle adds
    their Euler characteristics (a circle has $\chi = 0$: a triangulated circle has equally many vertices and edges), so
    $\chi = 0 + 0 = 0$; and it contains a Möbius band, so it is non-orientable. Non-orientable with $\chi = 0$: the
    Klein bottle.

??? question "11. Remove a disc from a torus and glue in a Möbius band. Name the result, and check with Euler characteristics."
    This is $T \# \mathbb{RP}^2$. $\chi = (0 - 1) + 0 = -1$ (remove a disc, lowering $\chi$ by 1; glue a Möbius band
    along a circle, adding its $\chi = 0$). It contains a Möbius band, so it is non-orientable. Non-orientable with
    $\chi = -1$ is $N_3$, in agreement with Dyck's theorem.

??? question "12. A surface is made from one disc with three flat bands whose ends meet the rim in the order 1, 2, 3, 1, 2, 3. Find $\chi$, the number of boundary circles $b$, and name it."
    $\chi = 1 - 3 = -2$. All bands are flat, so it is orientable. Trace the boundary: number the six band ends $0, \ldots, 5$ around the rim
    (ends $0, 3$ belong to band 1, ends $1, 4$ to band 2, ends $2, 5$ to band 3). The rule is: arrive at a band end,
    cross the band to its other end, then continue along the rim to the next end. From end 0: cross to 3, move on to 4,
    cross to 1, move on to 2, cross to 5, move on to 0. That closes one circle (it leaves the rim at ends 0, 4 and 2). Starting from end 1:
    cross to 4, move on to 5, cross to 2, move on to 3, cross to 0, move on to 1. A second circle. So $b = 2$, and $2 - 2g - b = -2$ gives $g = 1$: a torus with
    two discs removed. Check: in the analogous case with two bands in order 1, 2, 1, 2 the same tracing gives $b = 1$, the
    punctured torus, as in 10.6.

## What you learned

- A closed surface can be described by a polygon whose sides are glued in pairs, recorded as a word; corner classes
  give the vertices and $\chi = V - E + 1$.
- A surface is non-orientable when it contains a Möbius band; for a word, exactly when some letter appears twice with
  the same exponent.
- The connected sum concatenates words and satisfies $\chi(M \# N) = \chi(M) + \chi(N) - 2$; the Klein bottle is
  $\mathbb{RP}^2 \# \mathbb{RP}^2$, and a handle plus a cross-cap equals three cross-caps (Dyck).
- **Classification:** every closed surface is $S^2$, $\Sigma_g$ (with $\chi = 2 - 2g$) or $N_k$ (with $\chi = 2 - k$),
  proved by triangulating (Radó) and cutting and pasting into a normal form.
- $\chi$ and orientability determine a closed surface; the invariance of $\chi$ is proved with homology.
- Compact surfaces with boundary are classified by orientability, $\chi$ and the number of boundary circles.

**Next:** [Chapter 11](11-Manifolds.md), the same idea in every dimension: spaces that look locally like $\mathbb{R}^n$.

## Further reading

- W. S. Massey, *Algebraic Topology: An Introduction*, 1967 (and as part of *A Basic Course in Algebraic Topology*,
  1991). Chapter 1 is the classic cut-and-paste proof, with all the pictures.
- M. A. Armstrong, *Basic Topology*, 1983. Chapter 7 classifies surfaces through triangulations and surgery.
- G. K. Francis and J. R. Weeks, "Conway's ZIP proof", *American Mathematical Monthly* 106, 1999.
- J. R. Weeks, *The Shape of Space*, 2nd edition, 2002. Surfaces and 3-manifolds for the general reader, with exercises.
- C. Thomassen, "The Jordan–Schönflies theorem and the classification of surfaces", *American Mathematical Monthly*
  99, 1992. A self-contained route including triangulation.
- H. R. Brahana, "Systems of circuits on two-dimensional manifolds", *Annals of Mathematics* 23, 1921.
- On this site: [Geometry, Chapter 19](../geometry/19-Curves-and-Surfaces.md) for Gauss–Bonnet;
  [Geometry, Chapter 20](../geometry/20-Manifolds-and-Riemannian-Geometry.md) for uniformization (every closed surface
  is spherical, flat or hyperbolic); [Combinatorics, Chapter 12](../combinatorics/12-Planar-Graphs-and-Colouring.md) for
  Euler's formula on planar graphs; the U of T guide
  [MAT257Y1 Unit 13: Manifolds in R^n](../../uoft/MAT257Y1/unit13.md).
