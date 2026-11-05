---
title: "Paths on a grid"
---

# Paths on a grid

*Counting and combinations · level 5, lesson 4 of 6*

## A question to start

Your home is at the corner A of a grid of streets. School is at corner B, 4 blocks east and 3 blocks north. You only
ever walk **east** or **north**, so you never waste a step. How many different routes can you take to school?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="A grid 4 blocks wide and 3 blocks high, from A at bottom left to B at top right. One route is drawn thick: east, east, north, east, north, north, east">
  <g stroke="currentColor" stroke-width="1" stroke-opacity="0.5">
    <line x1="60" y1="160" x2="260" y2="160"/><line x1="60" y1="110" x2="260" y2="110"/>
    <line x1="60" y1="60" x2="260" y2="60"/><line x1="60" y1="10" x2="260" y2="10"/>
    <line x1="60" y1="10" x2="60" y2="160"/><line x1="110" y1="10" x2="110" y2="160"/>
    <line x1="160" y1="10" x2="160" y2="160"/><line x1="210" y1="10" x2="210" y2="160"/>
    <line x1="260" y1="10" x2="260" y2="160"/>
  </g>
  <polyline points="60,160 110,160 160,160 160,110 210,110 210,60 210,10 260,10" fill="none" stroke="#eea66f" stroke-width="5" stroke-linejoin="round"/>
  <circle cx="60" cy="160" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="260" cy="10" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="45" y="178" font-size="14" fill="currentColor">A</text>
  <text x="270" y="16" font-size="14" fill="currentColor">B</text>
  <text x="160" y="192" font-size="13" text-anchor="middle" fill="currentColor">E E N E N N E</text>
</svg>
</div>

If you try to draw them all, you will probably lose count somewhere past twenty. The answer is **35**, and by the end
of this lesson you will be able to get it in one line, and also handle a street closed for repairs.

## The idea

### A route is a word

Every route from A to B has exactly 7 blocks: 4 going east (E) and 3 going north (N), in some order. The thick route
in the picture is **EENENNE**. Each route gives one such "word", and each word made of 4 Es and 3 Ns gives one route
(just follow the letters). So counting routes is the same as counting words.

To make a word, you have 7 empty slots. Choose **which 3 of the 7 slots** hold an N; the other 4 must be E. The order
in which you pick the 3 slots does not matter (picking slots 2, 5, 6 is the same as picking 6, 2, 5), so this is a
combination:

$$\binom{7}{3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35 \text{ routes.}$$

You could equally choose which 4 slots hold an E: $\dbinom{7}{4} = 35$ as well, which is the in/out fact from lesson 2.

In general, a route that goes $a$ blocks east and $b$ blocks north has $a + b$ blocks, and you choose which $b$ of
them go north:

$$\text{number of routes} = \binom{a+b}{b} = \binom{a+b}{a} = \frac{(a+b)!}{a!\,b!}$$

The last form is the "letters with repeats" count from level 4: arranging $a$ Es and $b$ Ns.

### Counting corner by corner

There is a second method that needs no formula, and it works even when the grid has holes in it. Write at each corner
the number of routes from A to that corner.

- Corners along the bottom edge or up the left edge can only be reached one way (straight along), so they get **1**.
- Any other corner is reached either from the corner just to its **left** (last step E) or from the corner just
  **below** it (last step N). Those are two separate kinds of route, so **add** the two numbers.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="The same grid with the number of routes written at every corner. Bottom row 1, 1, 1, 1, 1. Next row 1, 2, 3, 4, 5. Next 1, 3, 6, 10, 15. Top row 1, 4, 10, 20, 35">
  <g stroke="currentColor" stroke-width="1" stroke-opacity="0.5">
    <line x1="60" y1="170" x2="260" y2="170"/><line x1="60" y1="120" x2="260" y2="120"/>
    <line x1="60" y1="70" x2="260" y2="70"/><line x1="60" y1="20" x2="260" y2="20"/>
    <line x1="60" y1="20" x2="60" y2="170"/><line x1="110" y1="20" x2="110" y2="170"/>
    <line x1="160" y1="20" x2="160" y2="170"/><line x1="210" y1="20" x2="210" y2="170"/>
    <line x1="260" y1="20" x2="260" y2="170"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <circle cx="60" cy="170" r="13"/><circle cx="110" cy="170" r="13"/><circle cx="160" cy="170" r="13"/><circle cx="210" cy="170" r="13"/><circle cx="260" cy="170" r="13"/>
    <circle cx="60" cy="120" r="13"/><circle cx="110" cy="120" r="13"/><circle cx="160" cy="120" r="13"/><circle cx="210" cy="120" r="13"/><circle cx="260" cy="120" r="13"/>
    <circle cx="60" cy="70" r="13"/><circle cx="110" cy="70" r="13"/><circle cx="160" cy="70" r="13"/><circle cx="210" cy="70" r="13"/><circle cx="260" cy="70" r="13"/>
    <circle cx="60" cy="20" r="13"/><circle cx="110" cy="20" r="13"/><circle cx="160" cy="20" r="13"/><circle cx="210" cy="20" r="13"/>
  </g>
  <circle cx="160" cy="70" r="13" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="210" cy="120" r="13" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="210" cy="70" r="13" fill="#eea66f" stroke="currentColor"/>
  <circle cx="260" cy="20" r="15" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="60" y="175">1</text><text x="110" y="175">1</text><text x="160" y="175">1</text><text x="210" y="175">1</text><text x="260" y="175">1</text>
    <text x="60" y="125">1</text><text x="110" y="125">2</text><text x="160" y="125">3</text><text x="210" y="125">4</text><text x="260" y="125">5</text>
    <text x="60" y="75">1</text><text x="110" y="75">3</text><text x="160" y="75">6</text><text x="210" y="75">10</text><text x="260" y="75">15</text>
    <text x="60" y="25">1</text><text x="110" y="25">4</text><text x="160" y="25">10</text><text x="210" y="25">20</text><text x="260" y="25">35</text>
  </g>
</svg>
</div>

For example the orange 10 is the green 6 to its left plus the green 4 below it. Turn the page so that A is at the top:
the numbers on each slanting line are rows of Pascal's triangle. That is no accident. The corner-by-corner rule is
exactly Pascal's rule from lesson 3, "the last step was E or it was N" instead of "Dee is in or Dee is out".

### Routes through a given corner

Suppose you must stop at the shop at corner P, 2 east and 1 north of A, on the way to school. Every such route splits
into two parts: A to P, then P to B. Any first part can be joined to any second part, so **multiply**:

- A to P: 2 E and 1 N, $\dbinom{3}{1} = 3$ routes.
- P to B: the rest is $4 - 2 = 2$ E and $3 - 1 = 2$ N, $\dbinom{4}{2} = 6$ routes.
- Through P: $3 \times 6 = 18$ routes.

### Routes that avoid something

If a dog lives at corner P and you want to **avoid** it, count all routes and take away the ones through P:
$35 - 18 = 17$. This is the "count what you do not want" idea from level 3.

A closed street (one block, rather than a corner) works the same way. Suppose the block going north from P is closed.
A route uses that block if it goes A to P (3 ways), then that block, then from the corner above P to B. The corner above P is
2 E and 2 N from A, so from it to B is 2 E and 1 N, $\dbinom{3}{1} = 3$ ways. Routes using the closed block:
$3 \times 1 \times 3 = 9$. Routes avoiding it: $35 - 9 = 26$.

You can always check with the corner-by-corner method: write the numbers again, but do not add along the closed
block. Both methods give 26.

<figure class="play" data-play="pascal"><span class="ai-tag">AI-created</span><figcaption><b>Grid paths.</b> The number of paths to each corner of a grid is a number in Pascal's triangle.</figcaption></figure>

## Worked examples

**1. A bigger grid.** How many shortest routes cross a grid 6 blocks east and 4 blocks north?

10 blocks, choose which 4 go north: $\dbinom{10}{4} = \dfrac{10 \times 9 \times 8 \times 7}{24} = \dfrac{5040}{24} = 210$.

**2. A rover with a stop.** A rover's planned drive is drawn on a map as a grid of squares. It must travel 6 squares
east and 4 squares north, always east or north, and it must stop at a rock 3 east and 2 north of the start to take a
sample. How many routes?

- Start to rock: 3 E, 2 N, $\dbinom{5}{2} = 10$.
- Rock to finish: 3 E, 2 N, $\dbinom{5}{2} = 10$.
- Total $10 \times 10 = 100$. Routes that **miss** the rock: $210 - 100 = 110$.

(Real rovers on Mars do not drive on a grid, but their drivers on Earth do plan each drive as a string of short
moves, and counting the possible strings is exactly this kind of problem.)

**3. Corner by corner with a closed street.** A grid is 5 east by 3 north. The block going east from the corner
(2, 1) to the corner (3, 1) is closed (corners are written as (east, north) from A). How many routes?

By subtraction: routes to (2, 1) are $\dbinom{3}{1} = 3$; from (3, 1) to (5, 3) is 2 E and 2 N, $\dbinom{4}{2} = 6$.
Routes through the closed block: $3 \times 6 = 18$. All routes: $\dbinom{8}{3} = 56$. Answer: $56 - 18 = 38$.

**4. Up a cube.** An ant walks along the edges of a 2 by 2 by 2 frame of small cubes, from one corner to the opposite
corner, always moving east, north or up. Every route has 2 Es, 2 Ns and 2 Us. Arranging those letters gives

$$\frac{6!}{2!\,2!\,2!} = \frac{720}{8} = 90 \text{ routes.}$$

## Try it

1. How many shortest routes go 5 blocks east and 3 blocks north?
2. On a square grid 6 blocks by 6 blocks, how many shortest routes go from one corner to the opposite corner?
3. For the grid in question 1, how many routes pass through the corner 3 east and 1 north of the start?
4. How many routes in question 1 avoid that corner?
5. Draw the 4 by 3 grid from the lesson and fill in the corner numbers when the block going **east** from the corner
   (1, 1) to (2, 1) is closed. What number do you get at B?
6. A grid is 6 east by 4 north. How many routes go through both the corner (2, 1) and the corner (4, 3)?
7. How many 8-letter words can be made from 5 Es and 3 Ns? Why is this the same as question 1?
8. An ant walks on a 3 by 3 by 3 frame from one corner to the opposite corner, always east, north or up. How many
   routes?

??? note "Answers"
    1. 8 blocks, choose 3 to go north: $\dbinom{8}{3} = \dfrac{8 \times 7 \times 6}{6} = 56$.
    2. 12 blocks, choose 6: $\dbinom{12}{6} = 924$.
    3. Start to (3, 1): $\dbinom{4}{1} = 4$. From (3, 1) to (5, 3): 2 E and 2 N, $\dbinom{4}{2} = 6$. Total
       $4 \times 6 = 24$.
    4. $56 - 24 = 32$.
    5. Routes through the closed block: start to (1, 1) is $\dbinom{2}{1} = 2$; from (2, 1) to (4, 3) is
       $\dbinom{4}{2} = 6$; so $2 \times 6 = 12$. B gets $35 - 12 = 23$. With corner numbers, row by row from the
       bottom: 1, 1, 1, 1, 1; then 1, 2, 1, 2, 3 (the corner (2, 1) gets only the 1 from below, since its left block
       is closed); then 1, 3, 4, 6, 9; then 1, 4, 8, 14, 23. ✓
    6. Start to (2, 1): $\dbinom{3}{1} = 3$. (2, 1) to (4, 3): 2 E, 2 N, $\dbinom{4}{2} = 6$. (4, 3) to (6, 4):
       2 E, 1 N, $\dbinom{3}{1} = 3$. Total $3 \times 6 \times 3 = 54$.
    7. Choose the 3 places for the Ns: $\dbinom{8}{3} = 56$. Each word is a route (E means one block east, N one
       block north) and each route is a word, so the two counts are equal.
    8. 9 moves, 3 of each kind: $\dfrac{9!}{3!\,3!\,3!} = \dfrac{362880}{216} = 1680$.

## Common mistake

**Choosing from the wrong total.** For 4 east and 3 north, the answer is $\dbinom{7}{3}$, not $\dbinom{4}{3}$ or
$4 \times 3$. You are choosing positions among **all** 7 steps of the route, so the top number is always the total
number of blocks walked.

**Adding instead of multiplying for a route through a point.** "3 ways to P and 6 ways from P" gives $3 \times 6$,
not $3 + 6$: each of the 3 first halves can be followed by each of the 6 second halves. "And" multiplies, "or" adds,
as in level 2.

## Where it leads

- Back: [Pascal's triangle](03-pascals-triangle.md) · Next: [Committees with conditions](05-committees-conditions.md)
- [Level 5 page](index.md) · [Counting topic page](../index.md)
- Grid routes were first traced by hand in [Level 1](../level-1/index.md).
- Matching routes with words is a **bijection**, explored fully in
  [Level 6, counting by a bijection](../level-6/05-counting-bijection.md). Routes that never cross the diagonal give
  the Catalan numbers in [Level 8](../level-8/index.md).
- Naming corners by (east, north) is using coordinates: [Geometry level 3, coordinates on a grid](../../geometry/level-3/06-coordinates-grid.md).
- If each step is east or north at random, the chance of passing a given corner is a
  [Probability](../../probability/index.md) question.
