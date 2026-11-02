---
title: "Squares on a chessboard"
---

# Squares on a chessboard

*Counting and combinations · level 3, lesson 4 of 6*

## A question to start

A chessboard is 8 squares wide and 8 squares tall. How many squares are on it?

"64" is the answer everyone gives first. But the whole board is a square too: that makes 65. And there are 2-by-2
squares, made of four little squares, all over the board. And 3-by-3 squares. And so on.

Counted properly, a chessboard has **204** squares. And if you count **rectangles** of every shape and size (squares
included), there are **1296**. In this lesson you will find both numbers without drawing a single rectangle more than
you need to, and you will see the neat reasons behind them.

## The idea

### Count by size

When there are too many things to count in one go, **sort them into groups** and count each group. Here the natural
groups are the sizes: 1 by 1, 2 by 2, 3 by 3, and so on up to 8 by 8. Every square on the board belongs to exactly one
size, so adding the groups counts every square exactly once.

Start small, with a 3-by-3 board.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Three 3 by 3 boards. The first shades one small square: there are 9 of that size. The second shades a 2 by 2 square and marks the 4 places its top-left corner can go. The third shades the whole board: there is 1 of that size">
  <g stroke="currentColor" stroke-width="1" fill="none">
    <rect x="20" y="15" width="90" height="90"/><line x1="50" y1="15" x2="50" y2="105"/><line x1="80" y1="15" x2="80" y2="105"/><line x1="20" y1="45" x2="110" y2="45"/><line x1="20" y1="75" x2="110" y2="75"/>
    <rect x="165" y="15" width="90" height="90"/><line x1="195" y1="15" x2="195" y2="105"/><line x1="225" y1="15" x2="225" y2="105"/><line x1="165" y1="45" x2="255" y2="45"/><line x1="165" y1="75" x2="255" y2="75"/>
    <rect x="310" y="15" width="90" height="90"/><line x1="340" y1="15" x2="340" y2="105"/><line x1="370" y1="15" x2="370" y2="105"/><line x1="310" y1="45" x2="400" y2="45"/><line x1="310" y1="75" x2="400" y2="75"/>
  </g>
  <rect x="50" y="45" width="30" height="30" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="2"/>
  <rect x="165" y="15" width="60" height="60" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <g fill="currentColor"><circle cx="172" cy="22" r="4"/><circle cx="202" cy="22" r="4"/><circle cx="172" cy="52" r="4"/><circle cx="202" cy="52" r="4"/></g>
  <rect x="310" y="15" width="90" height="90" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <text x="65" y="128" font-size="13" text-anchor="middle" fill="currentColor">1 by 1: 3 × 3 = 9</text>
  <text x="210" y="128" font-size="13" text-anchor="middle" fill="currentColor">2 by 2: 2 × 2 = 4</text>
  <text x="355" y="128" font-size="13" text-anchor="middle" fill="currentColor">3 by 3: 1 × 1 = 1</text>
</svg>
</div>

- **1 by 1:** the 9 little squares.
- **2 by 2:** a 2-by-2 square can sit in 4 places. The dots in the middle picture mark where its **top-left corner**
  can go. It can slide 2 ways across (left or right position) and 2 ways down, so 2 × 2 = 4.
- **3 by 3:** only the whole board. 1.

Total for a 3-by-3 board: 9 + 4 + 1 = **14** squares.

### Why the counts are square numbers

How many places can a square of a given size go? Look at its top-left corner. A 2-by-2 square on a 3-wide board can
start in column 1 or column 2, but not column 3 (it would hang off the edge). So it has 3 − 1 = 2 positions across.
The same thinking down the board gives 2 positions down. Across and down are separate choices, so multiply: 2 × 2.

On the full 8-by-8 board, a square of size $k$ by $k$ can start in any of the first $9 - k$ columns, and any of the
first $9 - k$ rows. (Size 1: 8 positions across. Size 2: 7. Size 8: just 1.) So:

| Size | Positions across | Positions down | How many |
| --- | --- | --- | --- |
| 1 by 1 | 8 | 8 | 64 |
| 2 by 2 | 7 | 7 | 49 |
| 3 by 3 | 6 | 6 | 36 |
| 4 by 4 | 5 | 5 | 25 |
| 5 by 5 | 4 | 4 | 16 |
| 6 by 6 | 3 | 3 | 9 |
| 7 by 7 | 2 | 2 | 4 |
| 8 by 8 | 1 | 1 | 1 |

64 + 49 + 36 + 25 + 16 + 9 + 4 + 1 = **204**. All the square numbers from 1 × 1 up to 8 × 8, added together.

For a board of any size, the number of squares is the sum of the square numbers up to the board's width. A 4-by-4 board
has 16 + 9 + 4 + 1 = 30 squares. A 5-by-5 board has 25 + 16 + 9 + 4 + 1 = 55.

### Rectangles: choose the lines

Rectangles come in many more shapes (1 by 2, 3 by 5, 7 by 1, ...), and counting each shape separately would take a
long time. Here is a much smarter way.

Look at the **lines** on the board, not the squares. An 8-by-8 board has **9** lines going up and down (the two edges
and 7 in between) and **9** lines going across.

Every rectangle on the board has a left side and a right side, which lie on two of the up-and-down lines, and a top
and a bottom, which lie on two of the across lines. And the other way round: if you **pick any 2 up-and-down lines and
any 2 across lines**, they box in exactly one rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="A 3 by 3 board with 4 up-and-down lines numbered 1 to 4 and 4 across lines numbered 1 to 4. Up-and-down lines 2 and 4 and across lines 1 and 3 are drawn thick, and the rectangle between them is shaded">
  <rect x="200" y="30" width="80" height="80" fill="#eea66f" fill-opacity="0.6"/>
  <g stroke="currentColor" stroke-width="1">
    <line x1="160" y1="30" x2="160" y2="150"/><line x1="200" y1="30" x2="200" y2="150"/><line x1="240" y1="30" x2="240" y2="150"/><line x1="280" y1="30" x2="280" y2="150"/>
    <line x1="160" y1="30" x2="280" y2="30"/><line x1="160" y1="70" x2="280" y2="70"/><line x1="160" y1="110" x2="280" y2="110"/><line x1="160" y1="150" x2="280" y2="150"/>
  </g>
  <g stroke="#9cc9ea" stroke-width="4">
    <line x1="200" y1="22" x2="200" y2="158"/><line x1="280" y1="22" x2="280" y2="158"/>
  </g>
  <g stroke="#7ccf9a" stroke-width="4">
    <line x1="152" y1="30" x2="288" y2="30"/><line x1="152" y1="110" x2="288" y2="110"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="160" y="15">1</text><text x="200" y="15">2</text><text x="240" y="15">3</text><text x="280" y="15">4</text>
    <text x="140" y="34">1</text><text x="140" y="74">2</text><text x="140" y="114">3</text><text x="140" y="154">4</text>
  </g>
  <text x="305" y="60" font-size="12" fill="currentColor">up-and-down</text>
  <text x="305" y="76" font-size="12" fill="currentColor">lines 2 and 4</text>
  <text x="305" y="110" font-size="12" fill="currentColor">across lines</text>
  <text x="305" y="126" font-size="12" fill="currentColor">1 and 3</text>
  <text x="20" y="80" font-size="12" fill="currentColor">one choice of lines</text>
  <text x="20" y="96" font-size="12" fill="currentColor">= one rectangle</text>
</svg>
</div>

So counting rectangles is the same as counting **ways to choose two lines** one way **and** two lines the other way.

How many ways are there to choose 2 lines out of 9? This is the **handshake problem** from level 2. If 9 people each
shake hands once with everyone else, the number of handshakes is the number of ways to pick a pair. The first person
shakes 8 hands, the next has 7 new people left to shake, then 6, and so on:

8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36.

So there are 36 ways to choose the left and right sides, and 36 ways to choose the top and bottom. "And" multiplies:

36 × 36 = **1296** rectangles on a chessboard.

Of those, 204 are squares, so 1296 − 204 = 1092 are rectangles that are not squares.

### Check the line trick on a small board

Level 2 counted the rectangles in a 2-by-3 grid by hand and got 18. The grid has 4 up-and-down lines and 3 across lines.
Pairs from 4 lines: 3 + 2 + 1 = 6. Pairs from 3 lines: 2 + 1 = 3. And 6 × 3 = **18**. ✓

### A beautiful extra

The number of ways to choose 2 lines from 9 is 36 = 1 + 2 + ... + 8, so the number of rectangles is
(1 + 2 + ... + 8) × (1 + 2 + ... + 8). It turns out that this is also equal to
1 × 1 × 1 + 2 × 2 × 2 + ... + 8 × 8 × 8, the sum of the **cubes** up to 8. For an 8-by-8 board both give 1296. You can
test it for a 2-by-2 board: (1 + 2) × (1 + 2) = 9, and 1 + 8 = 9. The proof belongs to a later level, but the pattern
is real.

## Worked examples

**1. Squares on a 4-by-4 board.** Sizes 1 by 1 to 4 by 4: 16 + 9 + 4 + 1 = **30**.

**2. Rectangles on a 3-by-3 board.** 4 lines each way. Pairs from 4 lines: 3 + 2 + 1 = 6. Rectangles: 6 × 6 = **36**.
Of these, 14 are squares (from above), so 22 are not.

**3. Squares on a board that is not square.** How many squares are on a board 3 wide and 4 tall?

1. 1 by 1: 3 across × 4 down = 12.
2. 2 by 2: 2 positions across, 3 down: 6.
3. 3 by 3: 1 across, 2 down: 2.
4. A 4-by-4 square does not fit (the board is only 3 wide).
5. Total: 12 + 6 + 2 = **20**.

**4. Rectangles on that board.** 4 up-and-down lines (pairs: 6) and 5 across lines (pairs: 4 + 3 + 2 + 1 = 10).
6 × 10 = **60** rectangles.

## Try it

1. How many squares are on a 2-by-2 board? Draw it and check.
2. How many squares are on a 5-by-5 board?
3. How many rectangles are on a 2-by-2 board? Use the line trick, then find them all in a drawing.
4. How many rectangles are on a 5-by-5 board?
5. How many squares are on a board 2 wide and 5 tall?
6. How many squares of size 3 by 3 are on an ordinary chessboard?
7. A chessboard-style board has 140 squares in total. How big is it? (Keep adding square numbers.)
8. How many rectangles on a chessboard are exactly 1 square tall (thin strips, including the 1-by-1 squares)?

??? note "Answers"
    1. 4 small squares + 1 big one = 5.
    2. 25 + 16 + 9 + 4 + 1 = 55.
    3. 3 lines each way; pairs from 3 lines: 2 + 1 = 3. 3 × 3 = 9 rectangles: 4 small squares, 2 tall 1-by-2 ones, 2
       wide 2-by-1 ones and the whole board.
    4. 6 lines each way; pairs: 5 + 4 + 3 + 2 + 1 = 15. 15 × 15 = 225.
    5. 1 by 1: 2 × 5 = 10. 2 by 2: 1 across × 4 down = 4. Total 14.
    6. 6 positions across × 6 down = 36.
    7. 1 + 4 + 9 + 16 + 25 + 36 + 49 = 140, so a 7-by-7 board.
    8. The top and bottom must be two **neighbouring** across lines: 8 ways (one for each row). The sides are any 2 of
       the 9 up-and-down lines: 36 ways. 8 × 36 = 288.

## Common mistake

**Counting only the small squares.** "Squares on a chessboard" includes every size. When a question says "how many
squares (or triangles, or rectangles) in this picture", sort them by size and count each size.

**Counting the positions wrongly.** A 2-by-2 square on an 8-wide board has 7 starting columns, not 8 and not 6. Check
with the smallest case: a 1-by-1 square has 8 positions across, and an 8-by-8 square has 1. The rule "9 minus the size"
gives both.

## Where it leads

- Back: [Counting what you do not want](03-counting-the-rest.md) · Next: [Counting by symmetry](05-counting-by-symmetry.md)
- [Level 3 page](index.md) · [Counting topic page](../index.md)
- "Choose 2 lines out of 9" is the handshake count. In level 5 it gets its own name, "9 choose 2":
  [Level 5](../level-5/index.md).
- The sums 1 + 4 + 9 + ... and 1 + 2 + 3 + ... are famous number patterns: [Patterns](../../patterns/index.md).
- Squares, rectangles and their areas are in [Geometry level 3](../../geometry/level-3/index.md).
