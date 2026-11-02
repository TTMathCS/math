---
title: "9-by-9 Sudoku moves"
---

# 9-by-9 Sudoku moves

*Logic and puzzles · level 3, lesson 5 of 6*

## A question to start

A 9-by-9 Sudoku has 81 squares. A good one gives you about 25 to 35 numbers to start with, and you must fill in the
other 50 or so. There are more ways to fill a 9-by-9 grid with numbers than there are grains of sand on a beach, yet
the puzzle claims there is **exactly one** right answer, and that you can find it **without ever guessing**.

How can a few clues pin down every single square? And how could anyone be sure that a puzzle has only one answer?

## The idea

### The rules

The grid has 9 **rows** (across), 9 **columns** (down) and 9 **boxes** (the 3-by-3 squares with thick edges).

**Every row, every column and every box must contain each of the numbers 1 to 9 exactly once.**

Rows, columns and boxes are all called **units**. Every square belongs to exactly three units: its row, its column
and its box. That is the key to everything below: a number in a square **rules that number out** of every other square
in the same row, column and box.

We name squares by row and column, counting rows from the top and columns from the left. "Row 3, column 6" is the
square in the third row down and the sixth column across.

### The puzzle for this lesson

Here is a real puzzle with 32 clues. It has exactly one answer, and you can reach it using only the two moves in this
lesson. Three squares are coloured; we will fill them in below.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 290 290" role="img" aria-label="A 9 by 9 Sudoku puzzle with 32 clues. Row 1: 1 6 blank 7 9 blank 5 blank 2. Row 2: blank 2 then seven blanks. Row 3: 7 then five blanks, 1 3 blank. Row 4: blank blank 6 3 blank 7 blank blank 5. Row 5: 3 7 blank blank 2 blank blank 6 blank. Row 6: 9 blank blank blank 6 blank blank 8 blank. Row 7: 2 blank blank blank 7 blank 8 blank blank. Row 8: 8 9 5 2 blank blank blank 7 blank. Row 9: blank blank blank 8 blank blank blank 1 4. Coloured squares: row 1 column 8, row 3 column 6, row 9 column 3.">
  <rect x="220" y="10" width="30" height="30" fill="#eea66f"/>
  <rect x="160" y="70" width="30" height="30" fill="#9cc9ea"/>
  <rect x="70" y="250" width="30" height="30" fill="#7ccf9a"/>
  <line x1="10" y1="10" x2="280" y2="10" stroke="currentColor" stroke-width="2.5"/>
  <line x1="10" y1="10" x2="10" y2="280" stroke="currentColor" stroke-width="2.5"/>
  <line x1="10" y1="40" x2="280" y2="40" stroke="currentColor" stroke-width="0.8"/>
  <line x1="40" y1="10" x2="40" y2="280" stroke="currentColor" stroke-width="0.8"/>
  <line x1="10" y1="70" x2="280" y2="70" stroke="currentColor" stroke-width="0.8"/>
  <line x1="70" y1="10" x2="70" y2="280" stroke="currentColor" stroke-width="0.8"/>
  <line x1="10" y1="100" x2="280" y2="100" stroke="currentColor" stroke-width="2.5"/>
  <line x1="100" y1="10" x2="100" y2="280" stroke="currentColor" stroke-width="2.5"/>
  <line x1="10" y1="130" x2="280" y2="130" stroke="currentColor" stroke-width="0.8"/>
  <line x1="130" y1="10" x2="130" y2="280" stroke="currentColor" stroke-width="0.8"/>
  <line x1="10" y1="160" x2="280" y2="160" stroke="currentColor" stroke-width="0.8"/>
  <line x1="160" y1="10" x2="160" y2="280" stroke="currentColor" stroke-width="0.8"/>
  <line x1="10" y1="190" x2="280" y2="190" stroke="currentColor" stroke-width="2.5"/>
  <line x1="190" y1="10" x2="190" y2="280" stroke="currentColor" stroke-width="2.5"/>
  <line x1="10" y1="220" x2="280" y2="220" stroke="currentColor" stroke-width="0.8"/>
  <line x1="220" y1="10" x2="220" y2="280" stroke="currentColor" stroke-width="0.8"/>
  <line x1="10" y1="250" x2="280" y2="250" stroke="currentColor" stroke-width="0.8"/>
  <line x1="250" y1="10" x2="250" y2="280" stroke="currentColor" stroke-width="0.8"/>
  <line x1="10" y1="280" x2="280" y2="280" stroke="currentColor" stroke-width="2.5"/>
  <line x1="280" y1="10" x2="280" y2="280" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="17" text-anchor="middle" fill="currentColor">
    <text x="25" y="31">1</text><text x="55" y="31">6</text><text x="115" y="31">7</text><text x="145" y="31">9</text><text x="205" y="31">5</text><text x="265" y="31">2</text>
    <text x="55" y="61">2</text>
    <text x="25" y="91">7</text><text x="205" y="91">1</text><text x="235" y="91">3</text>
    <text x="85" y="121">6</text><text x="115" y="121">3</text><text x="175" y="121">7</text><text x="265" y="121">5</text>
    <text x="25" y="151">3</text><text x="55" y="151">7</text><text x="145" y="151">2</text><text x="235" y="151">6</text>
    <text x="25" y="181">9</text><text x="145" y="181">6</text><text x="235" y="181">8</text>
    <text x="25" y="211">2</text><text x="145" y="211">7</text><text x="205" y="211">8</text>
    <text x="25" y="241">8</text><text x="55" y="241">9</text><text x="85" y="241">5</text><text x="115" y="241">2</text><text x="235" y="241">7</text>
    <text x="115" y="271">8</text><text x="235" y="271">1</text><text x="265" y="271">4</text>
  </g>
</svg>
</div>

### Move 1: the only number for this square

Pick an empty square. List the numbers already in its row, its column and its box. Any number on that list cannot go
in the square. If only **one** number from 1 to 9 is left, it must go there.

**The orange square (row 1, column 8).**

- Row 1 already has 1, 6, 7, 9, 5, 2.
- Column 8 already has 3, 6, 8, 7, 1.
- Its box (top right) already has 5, 2, 1, 3.

Put them together: 1, 2, 3, 5, 6, 7, 8, 9. The only number from 1 to 9 that is missing is **4**. So row 1, column 8 is
**4**.

Why are we sure? The square must hold some number from 1 to 9. Eight of them would break a rule. So it is the ninth.

### Move 2: the only place for this number

Now turn it around. Pick one unit (a row, column or box) and one number that is missing from it. Look at each empty
square in that unit and ask: could this number go here, or is it already in this square's other units? If only
**one** square is possible, the number goes there.

**The blue square (row 3, column 6).** Look at the top middle box (rows 1 to 3, columns 4 to 6). It has 7 and 9, but
no **2**. Where can its 2 go?

- Row 1 already has a 2 (in column 9). So the 2 is not in row 1 of this box.
- Row 2 already has a 2 (in column 2). So it is not in row 2 either.
- That leaves row 3: columns 4, 5 or 6.
- Column 4 already has a 2 (row 8). Column 5 already has a 2 (row 5).
- Only column 6 is left.

So row 3, column 6 is **2**. This move is often called **cross-hatching**, because you imagine lines shooting out
from every 2 across the grid, crossing off rows and columns, until one square is left untouched.

**The green square (row 9, column 3).** Look at row 9: 8, 1 and 4 are there, but no **7**. The empty squares are in
columns 1, 2, 3, 5, 6 and 7.

- Column 1 has a 7 (row 3). Column 2 has a 7 (row 5). Column 5 has a 7 (row 7). Column 6 has a 7 (row 4).
- Column 7 has no 7, but its box (bottom right) has a 7 (row 8, column 8). So not there.
- Only column 3 is left.

So row 9, column 3 is **7**.

### Every new number is a new clue

Each number you write in becomes a clue for the next move. Filling in the 4 in row 1 helps its row, its column and its
box. The trick of a good solver is to keep sweeping: try Move 2 for each number in each box, then try Move 1 on squares
that look nearly full, then go round again.

Both moves are the same idea you used on the knights and knaves island: **list what is possible, cross off what is
impossible, and what survives must be true.**

### Why a good puzzle has exactly one answer

Suppose a puzzle had **two** different answers. Then somewhere there is a square where the two answers disagree, say
one puts a 1 there and the other a 2. Neither the "only number" move nor the "only place" move could ever fill that
square, because neither number is ruled out: each one leads to a perfectly good finished grid. You would be stuck, and
the only way forward would be to **guess**.

Here is the smallest way it can happen. Look at four empty squares at the corners of a rectangle, spread over two rows,
two columns and two boxes:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 120" role="img" aria-label="Two copies of four squares at the corners of a rectangle. Left: 1 and 2 on top, 2 and 1 below. Right: 2 and 1 on top, 1 and 2 below. Both obey every rule.">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="20" width="36" height="36" fill="#eea66f"/>
    <rect x="110" y="20" width="36" height="36" fill="#9cc9ea"/>
    <rect x="20" y="70" width="36" height="36" fill="#9cc9ea"/>
    <rect x="110" y="70" width="36" height="36" fill="#eea66f"/>
    <rect x="214" y="20" width="36" height="36" fill="#9cc9ea"/>
    <rect x="304" y="20" width="36" height="36" fill="#eea66f"/>
    <rect x="214" y="70" width="36" height="36" fill="#eea66f"/>
    <rect x="304" y="70" width="36" height="36" fill="#9cc9ea"/>
  </g>
  <g font-size="18" text-anchor="middle" fill="currentColor">
    <text x="38" y="45">1</text><text x="128" y="45">2</text><text x="38" y="95">2</text><text x="128" y="95">1</text>
    <text x="232" y="45">2</text><text x="322" y="45">1</text><text x="232" y="95">1</text><text x="322" y="95">2</text>
    <text x="180" y="68">or</text>
  </g>
</svg>
</div>

If the clues do not decide between 1 and 2 here, both patterns work: each row, column and box still gets one 1 and one
2. The puzzle has two answers, and no amount of logic can tell which one the setter meant.

So a puzzle maker always checks, usually with a computer, that the puzzle has exactly one answer. That is also why it is
safe to solve without guessing: if the puzzle has one answer, every square is forced by the clues, and careful logic
can reach it.

How few clues can a puzzle have and still have one answer? In 2012 a team of mathematicians used a huge computer
search to show that **16 clues are never enough**. The smallest possible number is **17**, and puzzles with 17 clues
do exist.

### A shortcut: every unit adds to 45

$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45$. So every finished row, column and box adds up to 45. If a unit has only one
empty square, add the eight numbers you have and take the total from 45. (Of course you can also just see which number
is missing, but the sum is a nice check.)

## Worked examples

**1. Only number.** In the puzzle above, find row 4, column 1.

- Row 4 has 6, 3, 7, 5.
- Column 1 has 1, 7, 3, 9, 2, 8.
- Its box (middle left) has 6, 3, 7, 9.

Together: 1, 2, 3, 5, 6, 7, 8, 9. Missing: **4**.

**2. Only place in a box.** Where does **2** go in the middle-left box (rows 4 to 6, columns 1 to 3)?

The empty squares in that box are row 4 columns 1 and 2, row 5 column 3, and row 6 columns 2 and 3.

- Row 5 has a 2 (column 5). So not row 5, column 3.
- Column 1 has a 2 (row 7). So not row 4, column 1.
- Column 2 has a 2 (row 2). So not row 4, column 2, and not row 6, column 2.
- One square is left: **row 6, column 3** is 2.

**3. Using 45.** A row reads 3, 9, \_, 1, 5, 8, 2, 6, 4. What is missing?

$3 + 9 + 1 + 5 + 8 + 2 + 6 + 4 = 38$, and $45 - 38 = 7$. The missing number is **7** (and indeed 7 is the only number
from 1 to 9 not in the row).

## Try it

1. In a finished 9-by-9 Sudoku, how many 5s are there altogether? Why?
2. In the puzzle above, find row 9, column 2 using Move 1.
3. In the puzzle above, where does **6** go in the bottom-left box (rows 7 to 9, columns 1 to 3)?
4. In the puzzle above, find row 9, column 1. (You can use your answer to question 3, or Move 1.)
5. A column has eight numbers: 7, 2, 9, 4, 1, 8, 3, 6. Which number goes in the empty square? Check with the 45 rule.
6. Explain why a square can never have **zero** possible numbers in a correctly made puzzle, if you have made no
   mistakes. What does it mean if you find one?
7. A 4-by-4 Sudoku (numbers 1 to 4, rows, columns and 2-by-2 boxes) has only four clues: its top row is 1, 2, 3, 4.
   Find **two different** finished grids. Is this a fair puzzle?
8. Why might a puzzle that is solvable by Move 1 and Move 2 alone be called "fair", while one that needs guessing is
   not?

??? note "Answers"
    1. **Nine.** Each of the 9 rows has exactly one 5. (Or: each of the 9 boxes has one.)
    2. Row 9 has 8, 1, 4. Column 2 has 6, 2, 7, 9. Its box (bottom left) has 2, 8, 9, 5. Together: 1, 2, 4, 5, 6, 7,
       8, 9. Missing: **3**.
    3. The box's empty squares: row 7 columns 2 and 3, row 9 columns 1, 2 and 3. Row 7 has no 6, and row 9 has no 6.
       But column 2 has a 6 (row 1), which rules out row 7 column 2 and row 9 column 2. Column 3 has a 6 (row 4),
       which rules out row 7 column 3 and row 9 column 3. Only **row 9, column 1** is left.
    4. **6**, by question 3. With Move 1: row 9 has 8, 1, 4; column 1 has 1, 7, 3, 9, 2, 8; the box has 2, 8, 9, 5.
       Together that is 1, 2, 3, 4, 5, 7, 8, 9, so the missing number is 6. The two moves agree, as they must.
    5. $7 + 2 + 9 + 4 + 1 + 8 + 3 + 6 = 40$, and $45 - 40 =$ **5**. And 5 is indeed the only number not listed.
    6. The puzzle has an answer, and the answer puts some number in every square. That number is never ruled out by
       a correct clue. So if you find a square with nothing possible, **you made a mistake** earlier: some number you
       wrote in is wrong. Go back and check your last few moves.
    7. One answer: rows 1 2 3 4 / 3 4 1 2 / 2 1 4 3 / 4 3 2 1. Another: rows 1 2 3 4 / 3 4 1 2 / 4 3 2 1 / 2 1 4 3
       (the last two rows swapped). Check each: every row, column and 2-by-2 box has 1 to 4 once. (There are 12
       finished grids in all with this top row.) It is **not** a fair puzzle: it has more than one answer.
    8. In a fair puzzle every step is **forced**: you can explain why each number must go where it goes. If you must
       guess, you are not reasoning any more; you are hoping, and a guess can lead you far before you find out it was
       wrong.

## Common mistake

**Forgetting one of the three units.** When you list what a square cannot be, check its row, its column **and** its
box. Missing the box is the most common slip, and it leads to writing a number that is already in the box.

**Writing a number because it "probably" goes there.** If two squares are still possible, do not choose one. Leave it,
and come back when another clue has decided it.

## Where it leads

- Back: [Coding with loops](04-coding-with-loops.md) · Next: [Weighing puzzles](06-weighing-puzzles.md).
- [Level 3 page](index.md) · [Logic topic page](../index.md)
- Smaller grids first: [Level 2](../level-2/index.md) has 4-by-4 Sudoku.
- Counting how many grids there are is a counting problem: [Counting](../../counting/index.md).
- Checking a finished Sudoku is quick, but finding the answer can be slow. That gap is the heart of one of the biggest
  open questions in mathematics, P versus NP, in [level 8](../level-8/index.md).
