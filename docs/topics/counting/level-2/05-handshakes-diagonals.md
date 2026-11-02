---
title: "Handshakes and diagonals"
---

# Handshakes and diagonals

*Counting and combinations · level 2, lesson 5 of 6*

## A question to start

Draw an octagon, a shape with 8 corners like a stop sign. Now draw every **diagonal**: every straight line from a
corner to another corner that is not right next to it. How many diagonals will you draw?

Try guessing before you count. Most people guess too low, because the lines get very crowded in the middle. The
answer is **20**, and in this lesson you will find it without drawing a single line, using the handshake numbers from
level 1.

## The idea

### The handshake numbers, again

In level 1, friends shook hands, everybody with everybody, once. The number of handshakes for 1, 2, 3, ... friends
were:

| friends | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| handshakes | 0 | 1 | 3 | 6 | 10 | 15 | 21 | 28 |

Each new friend shakes hands with everyone already there, so to get the next number you add the number of friends
already there: 6 + 4 = 10, 10 + 5 = 15, 15 + 6 = 21, 21 + 7 = 28.

### A second way: multiply, then halve

There is a faster way that uses this level's multiplying. With 8 friends, each one shakes hands with the **other 7**.
If every friend tells you "I shook 7 hands", you hear 8 × 7 = 56 hands. But every handshake has **two** people in it,
and both of them told you about it. So 56 counts every handshake **twice**. Half of 56 is **28**. ✓

Why must this always work? Every handshake is told to you by exactly two people, never one, never three. So the
total you hear is exactly double the number of handshakes. Halving undoes the doubling.

You can also **see** it. The handshakes for 5 friends were 4 + 3 + 2 + 1. Draw those as a staircase of squares. Two
copies of the staircase, one turned upside down, fit together into a rectangle 4 wide and 5 tall, which has 4 × 5 = 20 squares. One staircase
is half of that: **10**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="A staircase of orange columns 1, 2, 3 and 4 squares tall, and the same staircase in blue turned upside down on top of it. Together they make a rectangle 4 squares wide and 5 squares tall.">
  <g stroke="currentColor" stroke-width="1"><rect x="150" y="108" width="22" height="22" fill="#eea66f"/><rect x="150" y="86" width="22" height="22" fill="#9cc9ea"/><rect x="150" y="64" width="22" height="22" fill="#9cc9ea"/><rect x="150" y="42" width="22" height="22" fill="#9cc9ea"/><rect x="150" y="20" width="22" height="22" fill="#9cc9ea"/><rect x="172" y="108" width="22" height="22" fill="#eea66f"/><rect x="172" y="86" width="22" height="22" fill="#eea66f"/><rect x="172" y="64" width="22" height="22" fill="#9cc9ea"/><rect x="172" y="42" width="22" height="22" fill="#9cc9ea"/><rect x="172" y="20" width="22" height="22" fill="#9cc9ea"/><rect x="194" y="108" width="22" height="22" fill="#eea66f"/><rect x="194" y="86" width="22" height="22" fill="#eea66f"/><rect x="194" y="64" width="22" height="22" fill="#eea66f"/><rect x="194" y="42" width="22" height="22" fill="#9cc9ea"/><rect x="194" y="20" width="22" height="22" fill="#9cc9ea"/><rect x="216" y="108" width="22" height="22" fill="#eea66f"/><rect x="216" y="86" width="22" height="22" fill="#eea66f"/><rect x="216" y="64" width="22" height="22" fill="#eea66f"/><rect x="216" y="42" width="22" height="22" fill="#eea66f"/><rect x="216" y="20" width="22" height="22" fill="#9cc9ea"/></g>
  <g font-size="12" fill="currentColor">
    <text x="260" y="55">orange: 1 + 2 + 3 + 4 = 10</text>
    <text x="260" y="75">blue: the same, upside down</text>
    <text x="260" y="95">together: 4 × 5 = 20</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle"><text x="194" y="145">4 wide, 5 tall</text></g>
</svg>
</div>


So for any number of friends: multiply the number of friends by one less, then halve.

### Lines joining points

Put some points on a page, with no three of them in a straight line, and join every pair of points with a straight
line. How many lines?

This is the handshake problem wearing a disguise. Each **point** is a friend, and each **line** is a handshake: one
line for every pair of points. So 4 points need 6 lines, 5 points need 10, 6 points need 15. You saw exactly these
drawings in level 1, where the dots were friends.

Mathematicians love finding that two problems that **look** different are really the **same** problem. Once you
have solved one, you have solved them both.

### Sides and diagonals

Now put the points at the corners of a shape. The lines joining corners come in two kinds:

- a **side** joins two corners that are **next to each other**;
- a **diagonal** joins two corners that are **not** next to each other. It goes across the inside of the shape.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="A square with its 2 diagonals, a pentagon with its 5 diagonals and a hexagon with its 9 diagonals. Sides are drawn in blue and diagonals in orange.">
  <g stroke="#eea66f" stroke-width="2"><line x1="105.4" y1="44.6" x2="34.6" y2="115.4"/><line x1="105.4" y1="115.4" x2="34.6" y2="44.6"/></g>
  <g stroke="#9cc9ea" stroke-width="3"><line x1="105.4" y1="44.6" x2="105.4" y2="115.4"/><line x1="105.4" y1="44.6" x2="34.6" y2="44.6"/><line x1="105.4" y1="115.4" x2="34.6" y2="115.4"/><line x1="34.6" y1="115.4" x2="34.6" y2="44.6"/></g>
  <g fill="currentColor"><circle cx="105.4" cy="44.6" r="4"/><circle cx="105.4" cy="115.4" r="4"/><circle cx="34.6" cy="115.4" r="4"/><circle cx="34.6" cy="44.6" r="4"/></g>
  <g stroke="#eea66f" stroke-width="2"><line x1="210.0" y1="27.0" x2="242.3" y2="126.5"/><line x1="210.0" y1="27.0" x2="177.7" y2="126.5"/><line x1="262.3" y1="65.0" x2="177.7" y2="126.5"/><line x1="262.3" y1="65.0" x2="157.7" y2="65.0"/><line x1="242.3" y1="126.5" x2="157.7" y2="65.0"/></g>
  <g stroke="#9cc9ea" stroke-width="3"><line x1="210.0" y1="27.0" x2="262.3" y2="65.0"/><line x1="210.0" y1="27.0" x2="157.7" y2="65.0"/><line x1="262.3" y1="65.0" x2="242.3" y2="126.5"/><line x1="242.3" y1="126.5" x2="177.7" y2="126.5"/><line x1="177.7" y1="126.5" x2="157.7" y2="65.0"/></g>
  <g fill="currentColor"><circle cx="210.0" cy="27.0" r="4"/><circle cx="262.3" cy="65.0" r="4"/><circle cx="242.3" cy="126.5" r="4"/><circle cx="177.7" cy="126.5" r="4"/><circle cx="157.7" cy="65.0" r="4"/></g>
  <g stroke="#eea66f" stroke-width="2"><line x1="345.0" y1="25.0" x2="392.6" y2="107.5"/><line x1="345.0" y1="25.0" x2="345.0" y2="135.0"/><line x1="345.0" y1="25.0" x2="297.4" y2="107.5"/><line x1="392.6" y1="52.5" x2="345.0" y2="135.0"/><line x1="392.6" y1="52.5" x2="297.4" y2="107.5"/><line x1="392.6" y1="52.5" x2="297.4" y2="52.5"/><line x1="392.6" y1="107.5" x2="297.4" y2="107.5"/><line x1="392.6" y1="107.5" x2="297.4" y2="52.5"/><line x1="345.0" y1="135.0" x2="297.4" y2="52.5"/></g>
  <g stroke="#9cc9ea" stroke-width="3"><line x1="345.0" y1="25.0" x2="392.6" y2="52.5"/><line x1="345.0" y1="25.0" x2="297.4" y2="52.5"/><line x1="392.6" y1="52.5" x2="392.6" y2="107.5"/><line x1="392.6" y1="107.5" x2="345.0" y2="135.0"/><line x1="345.0" y1="135.0" x2="297.4" y2="107.5"/><line x1="297.4" y1="107.5" x2="297.4" y2="52.5"/></g>
  <g fill="currentColor"><circle cx="345.0" cy="25.0" r="4"/><circle cx="392.6" cy="52.5" r="4"/><circle cx="392.6" cy="107.5" r="4"/><circle cx="345.0" cy="135.0" r="4"/><circle cx="297.4" cy="107.5" r="4"/><circle cx="297.4" cy="52.5" r="4"/></g>
  <g font-size="12" fill="currentColor" text-anchor="middle"><text x="70" y="160">square: 2</text><text x="210" y="160">pentagon: 5</text><text x="345" y="160">hexagon: 9</text></g>
</svg>
</div>

Every line joining two corners is a side **or** a diagonal, never both. So, using "or adds":

> (all the lines joining corners) = (sides) + (diagonals).

All the lines joining corners is a handshake number. A shape with 6 corners also has 6 sides. So

**diagonals = handshake number − sides.**

| shape | corners and sides | all lines (handshakes) | diagonals |
| --- | --- | --- | --- |
| triangle | 3 | 3 | 3 − 3 = **0** |
| square | 4 | 6 | 6 − 4 = **2** |
| pentagon | 5 | 10 | 10 − 5 = **5** |
| hexagon | 6 | 15 | 15 − 6 = **9** |
| heptagon | 7 | 21 | 21 − 7 = **14** |
| octagon | 8 | 28 | 28 − 8 = **20** |

The octagon has **20 diagonals**, as promised.

The triangle has **no** diagonals at all. That makes sense: in a triangle, every corner is next to both other
corners, so every line between corners is a side.

### A third way: count from each corner

Stand on one corner of the hexagon. Where can a diagonal from here go? Not to your own corner, and not to your two
neighbours (those lines are sides). With 6 corners, that leaves 6 − 3 = **3** corners, so 3 diagonals start at every
corner.

6 corners × 3 diagonals = 18. But a diagonal has **two** ends, so each one was counted from both of its corners.
Halve: 18 ÷ 2 = **9**. ✓ The same as the table.

For the octagon: from each corner, 8 − 3 = 5 diagonals. 8 × 5 = 40, and half of 40 is **20**. ✓

So here is the recipe, in words: **take away 3 from the number of corners, multiply by the number of corners, then
halve.** It is the handshake recipe ("multiply by one less, then halve") with the two neighbours left out.

## Worked examples

**1. A party of 8.** Everyone shakes hands with everyone once. How many handshakes?

Multiply, then halve: 8 × 7 = 56, half is **28**. Or add: 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. ✓

**2. A league.** Five teams play each other once. How many games?

A game is a pair of teams, and order does not matter (team A against team B is the same game as B against A). It is a
handshake problem: 5 × 4 = 20, half is **10 games**.

If every pair plays **twice**, once at each team's home ground, then the order **does** matter (home team first):
5 × 4 = **20 games**, and no halving.

**3. A ten-sided shape.** How many diagonals does a decagon (10 corners) have?

From each corner: 10 − 3 = 7. Then 10 × 7 = 70, half is **35**. Check with the other way: 10 points make
10 × 9 = 90, half is 45 lines, and 45 − 10 sides = **35**. ✓

**4. Working backwards.** A shape has 14 diagonals. How many sides does it have?

Look along the table: 0, 2, 5, 9, **14**. It is the heptagon, with **7 sides**.

## Try it

1. Seven friends shake hands, everyone with everyone, once. How many handshakes? Do it two ways.
2. You put 6 points on a circle and join every pair. How many lines?
3. How many diagonals does a pentagon have? Draw it to check: what shape do the diagonals make?
4. Six teams play each other once. How many games? What if each pair plays twice?
5. How many diagonals start at one corner of a shape with 12 corners? How many diagonals does it have altogether?
6. A shape has 27 diagonals. How many sides does it have? (Hint: carry on the table.)
7. At a party there were 45 handshakes, everyone with everyone. How many people were there?
8. Why can a shape never have exactly 1 diagonal?

??? note "Answers"
    1. Add: 1 + 2 + 3 + 4 + 5 + 6 = **21**. Multiply and halve: 7 × 6 = 42, half is **21**. ✓
    2. Handshakes for 6: 6 × 5 = 30, half is **15 lines**.
    3. **5 diagonals** (10 lines minus 5 sides). Together they make a five-pointed **star**.
    4. 6 × 5 = 30, half is **15 games**. Twice each: **30 games**.
    5. From one corner: 12 − 3 = **9**. Altogether: 12 × 9 = 108, half is **54**.
    6. Carry on the table: 8 sides give 20, 9 sides: 9 × 6 = 54, half is 27. So **9 sides** (a nonagon).
    7. Try people: 9 people make 9 × 8 = 72, half is 36. 10 people make 10 × 9 = 90, half is 45. **10 people**.
    8. A triangle has 0 diagonals. A shape with 4 or more corners has at least one diagonal starting at **every**
       corner (there is always a corner that is not a neighbour). But one diagonal only has 2 ends, so it can only
       touch 2 corners. To touch 4 or more corners you need at least 2 diagonals. So the number of diagonals is 0 or
       at least 2, never exactly 1.

## Common mistake

**Forgetting to halve.** "8 corners, 5 diagonals from each, so 40" counts every diagonal from both of its ends.
Halve: 20.

**Counting sides as diagonals.** A diagonal never joins two neighbours. If you forget to take the sides away, you get
the handshake number instead of the diagonal number.

## Where it leads

- Previous: [Codes and locks](04-codes-and-locks.md) · Next: [Counting shapes in a picture](06-counting-shapes.md),
  where the handshake numbers turn up yet again.
- [Level 2 page](index.md) · [Counting topic page](../index.md)
- Back to the start of the story: [Handshakes](../level-1/04-handshakes.md) in level 1.
- Pentagons, hexagons and octagons, and their sides and corners: [Geometry level 2: regular polygons](../../geometry/level-2/01-regular-polygons.md).
- The staircase picture shows a famous fact about adding 1 + 2 + 3 + ... and the triangle numbers:
  [Patterns](../../patterns/index.md).
- In level 5 the handshake numbers become "choosing 2 from a group", the first combinations.
