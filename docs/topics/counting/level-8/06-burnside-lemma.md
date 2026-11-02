---
title: "Counting with symmetry, properly"
---

# Counting with symmetry, properly

*Counting and combinations · level 8, lesson 6 of 6*

## A question to start

You make a necklace of 4 beads on a circle, each bead orange or blue. Two necklaces count as the **same** if you can
turn one to look like the other. How many different necklaces are there?

Here is a tempting argument: there are $2^4 = 16$ ways to colour the 4 places, and each necklace can be turned to 4
positions, so there are $16 / 4 = 4$ necklaces. But draw them and you find **6**:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 112" role="img" aria-label="The six different necklaces of four beads in two colours when turning is allowed, with how many of the sixteen colourings each one stands for: 1, 4, 4, 2, 4, 1">
  <circle cx="45" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="45" cy="28" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="67" cy="50" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="45" cy="72" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="23" cy="50" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="45" y="100" font-size="11" text-anchor="middle" fill="currentColor">1 of 16</text>
  <circle cx="117" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="117" cy="28" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="139" cy="50" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="117" cy="72" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="95" cy="50" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="117" y="100" font-size="11" text-anchor="middle" fill="currentColor">4 of 16</text>
  <circle cx="189" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="189" cy="28" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="211" cy="50" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="189" cy="72" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="167" cy="50" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="189" y="100" font-size="11" text-anchor="middle" fill="currentColor">4 of 16</text>
  <circle cx="261" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="261" cy="28" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="283" cy="50" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="261" cy="72" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="239" cy="50" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="261" y="100" font-size="11" text-anchor="middle" fill="currentColor">2 of 16</text>
  <circle cx="333" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="333" cy="28" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="355" cy="50" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="333" cy="72" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="311" cy="50" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="333" y="100" font-size="11" text-anchor="middle" fill="currentColor">4 of 16</text>
  <circle cx="405" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="405" cy="28" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="427" cy="50" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="405" cy="72" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="383" cy="50" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="405" y="100" font-size="11" text-anchor="middle" fill="currentColor">1 of 16</text>
</svg>
</div>

The argument went wrong because some necklaces do not look different in all 4 positions. The all-orange necklace looks
the same however you turn it, so it stands for only 1 of the 16 colourings, not 4. Back in level 3 you met this
problem and counted by hand. This lesson gives the proper method, which works for necklaces, cubes, molecules and
anything else with symmetry.

## The idea

### Colourings, symmetries and orbits

Fix the setting first.

- A **colouring** is a choice of colour for each position, with the positions held still. For 4 beads and 2 colours
  there are 16.
- A **symmetry** is a move that puts the object back in its own outline. For the necklace (turning only) there are 4:
  turn by 0°, 90°, 180° and 270°. The 0° turn, "do nothing", counts as a symmetry.
- Each symmetry moves colourings to colourings. The colourings that can be reached from one another by symmetries make
  up an **orbit**. "Different necklaces" means **different orbits**.

In the picture each necklace is one orbit, and the numbers under them are the orbit sizes: $1 + 4 + 4 + 2 + 4 + 1 = 16$.
Dividing by 4 would be right only if every orbit had size 4.

### Fixed colourings

A symmetry **fixes** a colouring if it leaves the colouring exactly as it was. Count, for each symmetry, how many of
the 16 colourings it fixes:

- **0° turn**: fixes all **16**.
- **90° turn**: each bead moves to the next place, so a fixed colouring must have all 4 beads the same colour: **2**.
- **180° turn**: beads 1 and 3 swap, and 2 and 4 swap. Fixed means bead 1 = bead 3 and bead 2 = bead 4: choose 2
  colours freely: $2^2 = 4$.
- **270° turn**: like 90°: **2**.

Now average these numbers: $\dfrac{16 + 2 + 4 + 2}{4} = \dfrac{24}{4} = 6$. That is exactly the number of necklaces.

### Burnside's lemma

> **Burnside's lemma.** The number of orbits (different objects up to symmetry) equals the **average**, over all
> symmetries, of the number of colourings each symmetry fixes:
>
> $$\text{number of orbits} = \frac{1}{|G|}\sum_{g \in G}\text{fix}(g),$$
>
> where $G$ is the collection of symmetries, $|G|$ their number, and $\text{fix}(g)$ the number of colourings that $g$
> fixes.

William Burnside put it in his 1897 textbook on groups, but Frobenius and Cauchy had known it earlier, so it is
sometimes jokingly called "the lemma that is not Burnside's".

### Why the average works

This is a double count, as in [level 7](../level-7/05-double-counting.md). Count the pairs (symmetry $g$, colouring
$c$) where $g$ fixes $c$.

**Counted by symmetry**, the number of pairs is $\sum_g\text{fix}(g)$, the top of the average.

**Counted by colouring**, each colouring $c$ contributes the number of symmetries that fix it. Here is the key fact:

$$(\text{number of symmetries fixing } c) \times (\text{size of the orbit of } c) = |G|.$$

Why? Sort all the symmetries by **where they send $c$**. They send $c$ to the colourings of its orbit, and each
colouring $d$ in the orbit is reached by the same number of symmetries: if a turn $r$ sends $c$ to $d$, the turns that
send $c$ to $d$ are exactly "first a turn fixing $c$, then $r$". So the $|G|$ symmetries split into (orbit size) piles,
each the size of (number fixing $c$). For the necklace: the orange-blue-orange-blue colouring has orbit size 2, and it
is fixed by 2 turns (0° and 180°): $2 \times 2 = 4$. ✓

So a colouring in an orbit of size $s$ contributes $|G|/s$ pairs. An orbit has $s$ colourings, contributing
$s \times |G|/s = |G|$ pairs. **Every orbit contributes exactly $|G|$ pairs**, whatever its size. So the total is
$|G| \times (\text{number of orbits})$. Set the two counts equal and divide by $|G|$. ∎

### A shortcut: count the cycles

A symmetry moves the positions around in **cycles**: the 90° turn sends $1 \to 2 \to 3 \to 4 \to 1$ (one cycle of 4);
the 180° turn has two cycles, $(1\ 3)$ and $(2\ 4)$. A colouring is fixed exactly when every cycle is one colour. So with
$k$ colours,

$$\text{fix}(g) = k^{\text{number of cycles of } g}.$$

For $n$ beads in a circle, a turn by $j$ places splits the beads into $\gcd(n, j)$ cycles (the greatest common divisor
of $n$ and $j$), each of length $n / \gcd(n, j)$. For example, 6 beads turned by 2 places: $1 \to 3 \to 5 \to 1$ and
$2 \to 4 \to 6 \to 2$, two cycles, and $\gcd(6, 2) = 2$.

### The cube

How many ways can you colour the 6 faces of a cube with 2 colours, if cubes that can be turned to match count as the
same? First, how many rotations does a cube have? Any face can be turned to the bottom (6 choices), and then the cube
can be spun 4 ways about the up-down axis: $6 \times 4 = 24$ rotations. Sort them by axis and count cycles of faces:

| Rotation | How many | Cycles of faces | Fixed with $k$ colours |
| --- | --- | --- | --- |
| do nothing | 1 | 6 (each face alone) | $k^6$ |
| 90° or 270° about a line through two opposite face centres | 6 | 3 (top, bottom, and the 4 side faces as one cycle) | $k^3$ |
| 180° about a line through two opposite face centres | 3 | 4 (top, bottom, two pairs of sides) | $k^4$ |
| 120° or 240° about a line through two opposite corners | 8 | 2 (the 3 faces at each corner) | $k^2$ |
| 180° about a line through the midpoints of two opposite edges | 6 | 3 (three pairs of faces) | $k^3$ |

Check: $1 + 6 + 3 + 8 + 6 = 24$. ✓ So the number of colourings is

$$\frac{k^6 + 3k^4 + 12k^3 + 8k^2}{24}.$$

With $k = 2$: $\dfrac{64 + 48 + 96 + 32}{24} = \dfrac{240}{24} = 10$. With $k = 3$: $\dfrac{729 + 243 + 324 + 72}{24} = 57$.

## Worked examples

**1. Four beads, three colours (turning only).** Fixed: 0°: $3^4 = 81$; 90° and 270°: one cycle each, $3$ each;
180°: two cycles, $3^2 = 9$. Average: $\dfrac{81 + 3 + 9 + 3}{4} = \dfrac{96}{4} = 24$.

**2. Six beads, two colours.** The turns by $j = 0, 1, 2, 3, 4, 5$ places have $\gcd(6, j) = 6, 1, 2, 3, 2, 1$ cycles,
so they fix $64, 2, 4, 8, 4, 2$ colourings. Average: $\dfrac{84}{6} = 14$ necklaces.

**3. Six beads, with flipping allowed.** A necklace you can also turn over (a **bracelet**) has 6 more symmetries:
flips. Three flips go through two opposite beads: those 2 beads stay put and the other 4 swap in pairs, so 4 cycles,
$2^4 = 16$ fixed each. Three flips go through the midpoints of two opposite gaps: 3 pairs, $2^3 = 8$ fixed each. Total
over 12 symmetries: $84 + 3(16) + 3(8) = 156$, and $156 / 12 = 13$ bracelets. One pair of necklaces that are mirror
images of each other has become a single bracelet.

**4. The 10 two-coloured cubes, checked.** Sort by the number of orange faces: 0 (1 way), 1 (1), 2 (2: next to each
other or opposite), 3 (2: around one corner, or in a band of three), 4 (2), 5 (1), 6 (1). Total
$1 + 1 + 2 + 2 + 2 + 1 + 1 = 10$. ✓

**5. A divisibility fact for free.** The average in Burnside's lemma always comes out a whole
number, because it counts something. For the cube that tells you, for free, that $k^6 + 3k^4 + 12k^3 + 8k^2$ is a
multiple of 24 for every whole number $k$. For $k = 4$: $4096 + 768 + 768 + 128 = 5760 = 24 \times 240$.

## Try it

1. How many necklaces of 3 beads in 2 colours are there (turning only)? List them.
2. How many necklaces of 5 beads in 2 colours? In 3 colours?
3. How many bracelets (turning and flipping) of 4 beads in 2 colours? Compare with the 6 necklaces.
4. Explain in one or two sentences why "16 colourings divided by 4 turns" gave the wrong answer.
5. How many ways can you colour the faces of a cube with 3 colours, up to rotation?
6. A regular tetrahedron has 12 rotations: doing nothing; 8 turns of 120° or 240° about a line through a corner and the
   centre of the opposite face; 3 half-turns about a line through the midpoints of opposite edges. How many ways are
   there to colour its 4 faces with 2 colours? With 3 colours?
7. For a prime number $p$ of beads and $k$ colours, show that the number of necklaces is $\dfrac{k^p + (p - 1)k}{p}$.
   Why does this prove that $k^p - k$ is always a multiple of $p$?

??? note "Answers"
    1. Turns: 0° fixes 8, 120° and 240° fix 2 each. $\frac{8 + 2 + 2}{3} = 4$: all orange, all blue, one orange and two
       blue, two orange and one blue.
    2. Five beads: every turn other than 0° is a single cycle of 5 (since 5 is prime), so
       $\frac{2^5 + 4 \times 2}{5} = \frac{40}{5} = 8$. Three colours: $\frac{3^5 + 4 \times 3}{5} = \frac{255}{5} = 51$.
    3. 8 symmetries. Turns: $16 + 2 + 4 + 2 = 24$. Two flips through opposite beads: 3 cycles, 8 fixed each. Two flips
       through opposite gaps: 2 cycles, 4 fixed each. Total $24 + 16 + 8 = 48$; $48 / 8 = 6$. The same 6: every 4-bead
       two-colour necklace already looks the same when flipped over.
    4. Dividing by 4 assumes every necklace appears in 4 different positions. Necklaces with symmetry (like all one
       colour, or alternating colours) appear in fewer, so they are undercounted.
    5. $\frac{3^6 + 3 \cdot 3^4 + 12 \cdot 3^3 + 8 \cdot 3^2}{24} = \frac{729 + 243 + 324 + 72}{24} = \frac{1368}{24} = 57$.
    6. Doing nothing: $k^4$. A turn about a corner fixes the opposite face and cycles the other 3: 2 cycles, $k^2$. A
       half-turn swaps the faces in 2 pairs: $k^2$. So $\frac{k^4 + 8k^2 + 3k^2}{12} = \frac{k^4 + 11k^2}{12}$. With 2
       colours: $\frac{16 + 44}{12} = 5$. With 3: $\frac{81 + 99}{12} = 15$.
    7. With $p$ prime, a turn by $j$ places ($0 < j < p$) has $\gcd(p, j) = 1$ cycle, so it fixes only the $k$
       one-colour necklaces; the 0° turn fixes $k^p$. Average over $p$ turns: $\frac{k^p + (p - 1)k}{p}$. This is a whole
       number, so $p$ divides $k^p + (p - 1)k = (k^p - k) + pk$, and therefore $p$ divides $k^p - k$. This is
       **Fermat's little theorem**, proved by counting necklaces.

## Common mistake

**Dividing by the number of symmetries.** That works only when no colouring is fixed by any symmetry except "do
nothing". As soon as some colourings have symmetry of their own, dividing undercounts them. Burnside's average fixes
this automatically.

**Forgetting "do nothing".** The identity symmetry is in $G$, and it fixes **every** colouring. Leave it out and both
the top and the bottom of the average are wrong. A quick check: $|G|$ must include it (4 turns for a square necklace,
24 rotations for a cube).

## Where it leads

- Back: [Generating functions](05-generating-functions.md) · This is the last lesson of the topic.
- [Level 8 page](index.md) · [Counting topic page](../index.md)
- Symmetry by turning: [rotational symmetry](../../geometry/level-4/06-rotational-symmetry.md) in Geometry; the faces
  and corners of a cube: [faces, edges and corners](../../geometry/level-2/03-faces-edges-corners.md).
- Fermat's little theorem, found here by counting necklaces, is a pillar of [Number theory](../../number-theory/index.md)
  and of modern codes: [cryptography](https://cryptography.akadian.ca/).
- The symmetries of an object form a **group**, the subject of abstract algebra at university; counting orbits by
  averaging is one of the first theorems about groups acting on things.
