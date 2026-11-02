---
title: "4-by-4 Sudoku"
---

# 4-by-4 Sudoku

*Logic and puzzles · level 2, lesson 3 of 6*

## A question to start

This puzzle has 16 squares, and only **4** of them have numbers in them.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 172" role="img" aria-label="A 4 by 4 Sudoku with 4 clues. Row 1: 1, empty, empty, 4. Rows 2 and 3 empty. Row 4: empty, 3, 2, empty.">
<g transform="translate(84,0)">
  <line x1="6" y1="6" x2="6" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="6" x2="166" y2="6" stroke="currentColor" stroke-width="3"/>
  <line x1="46" y1="6" x2="46" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="6" y1="46" x2="166" y2="46" stroke="currentColor" stroke-width="1"/>
  <line x1="86" y1="6" x2="86" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="86" x2="166" y2="86" stroke="currentColor" stroke-width="3"/>
  <line x1="126" y1="6" x2="126" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="6" y1="126" x2="166" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="6" x2="166" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="166" x2="166" y2="166" stroke="currentColor" stroke-width="3"/>
  <text x="26" y="34" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="146" y="34" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="66" y="154" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="106" y="154" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
</g>
</svg>
</div>

The rules: every **row** (across), every **column** (down) and every **box** (the four 2 by 2 squares with thick
edges) must have the numbers 1, 2, 3 and 4, each exactly once.

With 12 empty squares and only 4 clues, you might think there are lots of ways to fill it in. But there is exactly
**one** way, and you can find it without guessing even once. Here is something even more surprising: people have
checked every possible 4 by 4 Sudoku, and **no** puzzle with only 3 clues has just one answer. Four is the fewest
clues that can work.

By the end of this lesson you will solve this puzzle (it is question 7), and you will know why 2 clues can never be
enough.

## The idea

### The rules, carefully

A 4 by 4 Sudoku has:

- **4 rows**, going across. We number them 1 to 4 from the top.
- **4 columns**, going down. We number them 1 to 4 from the left.
- **4 boxes**, each a 2 by 2 square: top left, top right, bottom left, bottom right.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 498 180" role="img" aria-label="Three empty 4 by 4 grids. The first has row 2 shaded, the second has column 3 shaded, the third has the bottom right box shaded.">
  <text x="78" y="18" font-size="13" text-anchor="middle" fill="currentColor">a row</text>
  <rect x="6" y="66" width="36" height="36" fill="#9cc9ea" fill-opacity="0.7"/>
  <rect x="42" y="66" width="36" height="36" fill="#9cc9ea" fill-opacity="0.7"/>
  <rect x="78" y="66" width="36" height="36" fill="#9cc9ea" fill-opacity="0.7"/>
  <rect x="114" y="66" width="36" height="36" fill="#9cc9ea" fill-opacity="0.7"/>
  <line x1="6" y1="30" x2="6" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="30" x2="150" y2="30" stroke="currentColor" stroke-width="3"/>
  <line x1="42" y1="30" x2="42" y2="174" stroke="currentColor" stroke-width="1"/>
  <line x1="6" y1="66" x2="150" y2="66" stroke="currentColor" stroke-width="1"/>
  <line x1="78" y1="30" x2="78" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="102" x2="150" y2="102" stroke="currentColor" stroke-width="3"/>
  <line x1="114" y1="30" x2="114" y2="174" stroke="currentColor" stroke-width="1"/>
  <line x1="6" y1="138" x2="150" y2="138" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="30" x2="150" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="174" x2="150" y2="174" stroke="currentColor" stroke-width="3"/>
  <text x="249" y="18" font-size="13" text-anchor="middle" fill="currentColor">a column</text>
  <rect x="249" y="30" width="36" height="36" fill="#7ccf9a" fill-opacity="0.7"/>
  <rect x="249" y="66" width="36" height="36" fill="#7ccf9a" fill-opacity="0.7"/>
  <rect x="249" y="102" width="36" height="36" fill="#7ccf9a" fill-opacity="0.7"/>
  <rect x="249" y="138" width="36" height="36" fill="#7ccf9a" fill-opacity="0.7"/>
  <line x1="177" y1="30" x2="177" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="177" y1="30" x2="321" y2="30" stroke="currentColor" stroke-width="3"/>
  <line x1="213" y1="30" x2="213" y2="174" stroke="currentColor" stroke-width="1"/>
  <line x1="177" y1="66" x2="321" y2="66" stroke="currentColor" stroke-width="1"/>
  <line x1="249" y1="30" x2="249" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="177" y1="102" x2="321" y2="102" stroke="currentColor" stroke-width="3"/>
  <line x1="285" y1="30" x2="285" y2="174" stroke="currentColor" stroke-width="1"/>
  <line x1="177" y1="138" x2="321" y2="138" stroke="currentColor" stroke-width="1"/>
  <line x1="321" y1="30" x2="321" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="177" y1="174" x2="321" y2="174" stroke="currentColor" stroke-width="3"/>
  <text x="420" y="18" font-size="13" text-anchor="middle" fill="currentColor">a box</text>
  <rect x="420" y="102" width="36" height="36" fill="#eea66f" fill-opacity="0.7"/>
  <rect x="456" y="102" width="36" height="36" fill="#eea66f" fill-opacity="0.7"/>
  <rect x="420" y="138" width="36" height="36" fill="#eea66f" fill-opacity="0.7"/>
  <rect x="456" y="138" width="36" height="36" fill="#eea66f" fill-opacity="0.7"/>
  <line x1="348" y1="30" x2="348" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="348" y1="30" x2="492" y2="30" stroke="currentColor" stroke-width="3"/>
  <line x1="384" y1="30" x2="384" y2="174" stroke="currentColor" stroke-width="1"/>
  <line x1="348" y1="66" x2="492" y2="66" stroke="currentColor" stroke-width="1"/>
  <line x1="420" y1="30" x2="420" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="348" y1="102" x2="492" y2="102" stroke="currentColor" stroke-width="3"/>
  <line x1="456" y1="30" x2="456" y2="174" stroke="currentColor" stroke-width="1"/>
  <line x1="348" y1="138" x2="492" y2="138" stroke="currentColor" stroke-width="1"/>
  <line x1="492" y1="30" x2="492" y2="174" stroke="currentColor" stroke-width="3"/>
  <line x1="348" y1="174" x2="492" y2="174" stroke="currentColor" stroke-width="3"/>
</svg>
</div>

Every row, every column and every box must contain 1, 2, 3 and 4, **each once**. That means no number can appear
twice in a row, twice in a column, or twice in a box.

Each square belongs to exactly **one row, one column and one box**. Those are the three "neighbourhoods" of the
square. A number in any of its neighbourhoods is a number that square **cannot** be.

### Move 1: the only number for this square

Pick one empty square. Look at its row, its column and its box. Every number you see there is ruled out for this
square. If only **one** number is left, it must go there.

This is just like the clue riddles in level 1: cross out what cannot be, and see what is left.

### Move 2: the only square for this number

Now turn it around. Pick one row (or column, or box) and one number that is **missing** from it, say 1. Look at each
empty square in that row and ask: "could 1 go here, or is there already a 1 in this square's column or box?" If only
**one** square can take the 1, it goes there.

Move 1 asks "which number fits this square?" Move 2 asks "which square fits this number?" Between them, they solve
every puzzle in this lesson.

### Why one number unlocks the next

Each number you write in is a new clue. It rules things out in its row, its column and its box. So a puzzle that
looked stuck often opens up after one more square is filled. Good solvers keep going round: fill one, then look again
at the squares near it.

### Never guess

You may be tempted to guess: "maybe this is a 3?" Do not. A guess that is wrong makes a mess that you only find much
later. Every number you write should have a **reason**: "it is 3 because row 2 already has 1, 2 and 4." If you cannot
say the reason, keep looking somewhere else.

### Why a good puzzle has only one answer

A good Sudoku has exactly **one** answer. That is what lets you solve it by reasons alone: if there were two different
answers, no reason could tell you which one to choose.

Here is a clever way to see that some puzzles **must** have more than one answer. Suppose a puzzle's clues use only
the numbers 1 and 2. No 3 or 4 is given anywhere. Solve it any way at all. Now swap every 3 for a 4, and every 4 for a
3. Is it still correct?

- Each row still has one 3 and one 4 (they just swapped places), so it still has 1, 2, 3, 4 once. Same for columns
  and boxes.
- The clues are only 1s and 2s, and we did not touch those. So the clues still match.

So the swapped grid is **another** answer, and it really is different, because every row has a 3 and a 4 that have
changed places. So a puzzle with clues using only two different numbers never has just one answer.
A good puzzle must use at least **three** different numbers in its clues. (That is part of why 2 clues are never
enough.)

## Worked examples

**Example 1. One missing.** Row 1 reads 3, 1, empty, 4. What goes in the empty square?

The row needs 1, 2, 3, 4. It has 3, 1 and 4. The only one missing is **2**. When a row, column or box has three
numbers, the last one is always easy.

**Example 2. The only number for this square.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 186" role="img" aria-label="A 4 by 4 grid with a 3 in row 1 column 1, a 1 in row 2 column 4, and a 2 in row 4 column 2. The square in row 2, column 2 is shaded orange.">
<g transform="translate(76,0)">
  <rect x="54" y="60" width="40" height="40" fill="#eea66f" fill-opacity="0.7"/>
  <rect x="134" y="60" width="40" height="40" fill="#9cc9ea" fill-opacity="0.7"/>
  <rect x="54" y="140" width="40" height="40" fill="#9cc9ea" fill-opacity="0.7"/>
  <rect x="14" y="20" width="40" height="40" fill="#9cc9ea" fill-opacity="0.7"/>
  <line x1="14" y1="20" x2="14" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="20" x2="174" y2="20" stroke="currentColor" stroke-width="3"/>
  <line x1="54" y1="20" x2="54" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="14" y1="60" x2="174" y2="60" stroke="currentColor" stroke-width="1"/>
  <line x1="94" y1="20" x2="94" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="100" x2="174" y2="100" stroke="currentColor" stroke-width="3"/>
  <line x1="134" y1="20" x2="134" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="14" y1="140" x2="174" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="174" y1="20" x2="174" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="180" x2="174" y2="180" stroke="currentColor" stroke-width="3"/>
  <text x="34" y="15" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="7" y="44" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="74" y="15" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="7" y="84" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="114" y="15" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="7" y="124" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="154" y="15" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="7" y="164" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="34" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="154" y="88" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="74" y="168" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
</g>
</svg>
</div>

Which number goes in the orange square (row 2, column 2)?

1. Its **row** (row 2) has a 1. So it is not 1.
2. Its **column** (column 2) has a 2. So it is not 2.
3. Its **box** (top left) has a 3. So it is not 3.
4. Only **4** is left. It must be 4.

Notice that no single clue was enough. The answer came from three neighbourhoods working together.

**Example 3. The only square for this number.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 186" role="img" aria-label="A 4 by 4 grid with a 1 in row 1 column 3 and a 1 in row 3 column 1. In the top left box, only the square in row 2, column 2 can hold a 1.">
<g transform="translate(76,0)">
  <rect x="14" y="20" width="40" height="40" fill="#9cc9ea" fill-opacity="0.7"/>
  <rect x="54" y="20" width="40" height="40" fill="#9cc9ea" fill-opacity="0.7"/>
  <rect x="14" y="60" width="40" height="40" fill="#9cc9ea" fill-opacity="0.7"/>
  <rect x="54" y="60" width="40" height="40" fill="#7ccf9a" fill-opacity="0.7"/>
  <line x1="14" y1="20" x2="14" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="20" x2="174" y2="20" stroke="currentColor" stroke-width="3"/>
  <line x1="54" y1="20" x2="54" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="14" y1="60" x2="174" y2="60" stroke="currentColor" stroke-width="1"/>
  <line x1="94" y1="20" x2="94" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="100" x2="174" y2="100" stroke="currentColor" stroke-width="3"/>
  <line x1="134" y1="20" x2="134" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="14" y1="140" x2="174" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="174" y1="20" x2="174" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="180" x2="174" y2="180" stroke="currentColor" stroke-width="3"/>
  <text x="34" y="15" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="7" y="44" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="74" y="15" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="7" y="84" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="114" y="15" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="7" y="124" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="154" y="15" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="7" y="164" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="114" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="34" y="128" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
</g>
</svg>
</div>

The top left box has no 1 yet. Which of its four squares can take the 1?

1. Row 1 already has a 1 (in column 3). So neither square in row 1 of the box can be 1.
2. Column 1 already has a 1 (in row 3). So the square in row 2, column 1 cannot be 1.
3. Only one square is left: row 2, column 2. The **1 goes there**.

We do not know yet what the other three squares of the box are. But we know exactly where the 1 is.

**Example 4. A whole puzzle.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 186" role="img" aria-label="A 4 by 4 Sudoku. Row 1: 1, 2, empty, 4. Row 2: empty, 4, 1, empty. Row 3: empty, 1, 4, empty. Row 4: 4, empty, empty, 1.">
<g transform="translate(76,0)">
  <line x1="14" y1="20" x2="14" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="20" x2="174" y2="20" stroke="currentColor" stroke-width="3"/>
  <line x1="54" y1="20" x2="54" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="14" y1="60" x2="174" y2="60" stroke="currentColor" stroke-width="1"/>
  <line x1="94" y1="20" x2="94" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="100" x2="174" y2="100" stroke="currentColor" stroke-width="3"/>
  <line x1="134" y1="20" x2="134" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="14" y1="140" x2="174" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="174" y1="20" x2="174" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="180" x2="174" y2="180" stroke="currentColor" stroke-width="3"/>
  <text x="34" y="15" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="7" y="44" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="74" y="15" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="7" y="84" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="114" y="15" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="7" y="124" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="154" y="15" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="7" y="164" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="34" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="74" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="154" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="74" y="88" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="114" y="88" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="74" y="128" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="114" y="128" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="34" y="168" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="154" y="168" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
</g>
</svg>
</div>

1. **Row 1** has 1, 2 and 4. The empty square is **3**.
2. **Row 2** is missing 2 and 3. Its first square is in the top left box, which already has 1, 2 and 4. So that square cannot be 2: it is **3**, and the last square of row 2 is **2**.
3. **Row 3** is missing 2 and 3. Its first square is in column 1, which now has 1, 3 and 4. So it is **2**, and the
   last square of row 3 is **3**.
4. **Row 4** is missing 2 and 3. Its second square is in column 2, which has 2, 4 and 1. So it is **3**, and the
   other empty square is **2**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 186" role="img" aria-label="The finished Sudoku: 1 2 3 4; 3 4 1 2; 2 1 4 3; 4 3 2 1. The clues are bold and the filled-in numbers are lighter.">
<g transform="translate(76,0)">
  <line x1="14" y1="20" x2="14" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="20" x2="174" y2="20" stroke="currentColor" stroke-width="3"/>
  <line x1="54" y1="20" x2="54" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="14" y1="60" x2="174" y2="60" stroke="currentColor" stroke-width="1"/>
  <line x1="94" y1="20" x2="94" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="100" x2="174" y2="100" stroke="currentColor" stroke-width="3"/>
  <line x1="134" y1="20" x2="134" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="14" y1="140" x2="174" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="174" y1="20" x2="174" y2="180" stroke="currentColor" stroke-width="3"/>
  <line x1="14" y1="180" x2="174" y2="180" stroke="currentColor" stroke-width="3"/>
  <text x="34" y="15" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="7" y="44" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="74" y="15" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="7" y="84" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="114" y="15" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="7" y="124" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="154" y="15" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="7" y="164" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="34" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="74" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="114" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" opacity="0.65">3</text>
  <text x="154" y="48" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="34" y="88" font-size="20.0" text-anchor="middle" fill="currentColor" opacity="0.65">3</text>
  <text x="74" y="88" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="114" y="88" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="154" y="88" font-size="20.0" text-anchor="middle" fill="currentColor" opacity="0.65">2</text>
  <text x="34" y="128" font-size="20.0" text-anchor="middle" fill="currentColor" opacity="0.65">2</text>
  <text x="74" y="128" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="114" y="128" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="154" y="128" font-size="20.0" text-anchor="middle" fill="currentColor" opacity="0.65">3</text>
  <text x="34" y="168" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="74" y="168" font-size="20.0" text-anchor="middle" fill="currentColor" opacity="0.65">3</text>
  <text x="114" y="168" font-size="20.0" text-anchor="middle" fill="currentColor" opacity="0.65">2</text>
  <text x="154" y="168" font-size="20.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
</g>
</svg>
</div>

**Check** every row, column and box: each has 1, 2, 3 and 4 once. Checking at the end is part of solving.

## Try it

Puzzles for questions 3, 4 and 5:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 474 172" role="img" aria-label="Three puzzles. A: 3 1 . . / 4 2 3 . / 1 . 2 3 / . . . . . B: 2 3 . 1 / . . 2 . / . 2 . . / . . 1 . . C: . 2 . . / . . . 3 / 1 . . . / . . 4 . .">
  <text x="74" y="18" font-size="13" text-anchor="middle" fill="currentColor">puzzle A</text>
  <line x1="6" y1="30" x2="6" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="30" x2="142" y2="30" stroke="currentColor" stroke-width="3"/>
  <line x1="40" y1="30" x2="40" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="6" y1="64" x2="142" y2="64" stroke="currentColor" stroke-width="1"/>
  <line x1="74" y1="30" x2="74" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="98" x2="142" y2="98" stroke="currentColor" stroke-width="3"/>
  <line x1="108" y1="30" x2="108" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="6" y1="132" x2="142" y2="132" stroke="currentColor" stroke-width="1"/>
  <line x1="142" y1="30" x2="142" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="6" y1="166" x2="142" y2="166" stroke="currentColor" stroke-width="3"/>
  <text x="23" y="53.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="57" y="53.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="23" y="87.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="57" y="87.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="91" y="87.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="23" y="121.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="91" y="121.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="125" y="121.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="237" y="18" font-size="13" text-anchor="middle" fill="currentColor">puzzle B</text>
  <line x1="169" y1="30" x2="169" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="169" y1="30" x2="305" y2="30" stroke="currentColor" stroke-width="3"/>
  <line x1="203" y1="30" x2="203" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="169" y1="64" x2="305" y2="64" stroke="currentColor" stroke-width="1"/>
  <line x1="237" y1="30" x2="237" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="169" y1="98" x2="305" y2="98" stroke="currentColor" stroke-width="3"/>
  <line x1="271" y1="30" x2="271" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="169" y1="132" x2="305" y2="132" stroke="currentColor" stroke-width="1"/>
  <line x1="305" y1="30" x2="305" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="169" y1="166" x2="305" y2="166" stroke="currentColor" stroke-width="3"/>
  <text x="186" y="53.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="220" y="53.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="288" y="53.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="254" y="87.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="220" y="121.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="254" y="155.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="400" y="18" font-size="13" text-anchor="middle" fill="currentColor">puzzle C</text>
  <line x1="332" y1="30" x2="332" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="332" y1="30" x2="468" y2="30" stroke="currentColor" stroke-width="3"/>
  <line x1="366" y1="30" x2="366" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="332" y1="64" x2="468" y2="64" stroke="currentColor" stroke-width="1"/>
  <line x1="400" y1="30" x2="400" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="332" y1="98" x2="468" y2="98" stroke="currentColor" stroke-width="3"/>
  <line x1="434" y1="30" x2="434" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="332" y1="132" x2="468" y2="132" stroke="currentColor" stroke-width="1"/>
  <line x1="468" y1="30" x2="468" y2="166" stroke="currentColor" stroke-width="3"/>
  <line x1="332" y1="166" x2="468" y2="166" stroke="currentColor" stroke-width="3"/>
  <text x="383" y="53.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="451" y="87.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="349" y="121.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="417" y="155.8" font-size="17.0" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
</svg>
</div>

1. Row 3 reads 4, empty, 1, 2. What is the empty square?
2. An empty square's row has 2 and 4. Its column has 1. Its box has 2 and 1. What number goes in it?
3. Solve puzzle A below.
4. Solve puzzle B below.
5. Solve puzzle C below (only 4 clues!).
6. Nia made a puzzle whose only clues are a 1 in the top left corner and a 2 in the bottom right corner. Explain why
   her puzzle cannot have just one answer.
7. Solve the puzzle from the start of the lesson.

??? note "Answers"
    1. The row has 4, 1, 2. The missing number is **3**.
    2. Ruled out: 2 and 4 (row), 1 (column). Only **3** is left.
    3. Finished grid, row by row: **3 1 4 2**, **4 2 3 1**, **1 4 2 3**, **2 3 1 4**. One way: row 1 has 3 and 1, and
       its third square is in column 3, which has 3 and 2, so it is 4, and the last square is 2. Row 2 has 4, 2, 3, so
       its last square is 1. Row 3's empty square is 4 (row has 1, 2, 3). Row 4: column 1 has 3, 4, 1, so 2; column 2
       has 1, 2, 4, so 3; column 3 has 4, 3, 2, so 1; column 4 has 2, 1, 3, so 4.
    4. Finished grid: **2 3 4 1**, **4 1 2 3**, **1 2 3 4**, **3 4 1 2**. One way: row 1 is missing only 4. Row 2's last
       square: row has 2, column 4 has 1, box top right has 4 and 1 and 2, so it is 3. Row 3's third square: column 3
       has 4, 2, 1, so it is 3; its last square: column 4 has 1, 3, so 2 or 4, and row 3 now has 2 and 3, so 4; then
       row 3's first square is 1. Then row 2: first square, column 1 has 2, 1, box has 2, 3, so 4; second square is 1.
       Row 4: column 1 has 2, 4, 1, so 3; column 2 has 3, 1, 2, so 4; column 4 has 1, 3, 4, so 2.
    5. Finished grid: **3 2 1 4**, **4 1 2 3**, **1 4 3 2**, **2 3 4 1**. Start with row 1, column 3: its row has 2,
       its column has 4, its box has 3, so it is **1**. Then row 1, column 4: row has 2 and 1, column has 3, so **4**.
       Row 1's first square is then **3**. Keep going with Move 1, square by square, and check at the end.
    6. Her clues use only two different numbers, 1 and 2. Take any answer and swap every 3 with every 4: you get
       another correct grid, and the 1 and the 2 have not moved. So there are at least two answers. (In fact there
       are many more.)
    7. Finished grid: **1 2 3 4**, **3 4 1 2**, **2 1 4 3**, **4 3 2 1**. Steps: row 1, column 2: row has 1, 4,
       column has 3, so **2**; then row 1, column 3 is **3**. Row 2, column 2: column has 2, 3, box has 1, 2, so it
       is not 1, 2 or 3: **4**. Row 2, column 1: box has 1, 2, 4, so **3**. Row 2, column 3: row has 3, 4, column has
       3, 2, so **1**; row 2, column 4 is **2**. Row 3, column 2: column has 2, 4, 3, so **1**. Row 3, column 3:
       column has 3, 1, 2, so **4**. Row 3, column 1: row has 1, 4, column has 1, 3, so **2**; row 3, column 4 is
       **3**. Row 4: column 1 has 1, 3, 2, so **4**; the last square is **1**.

## Common mistake

**Checking only the row.** A square has three neighbourhoods: its row, its column and its box. If you only look at
the row, you might write a number that is already in the column. Always check all three.

**Guessing and hoping.** If you write a number without a reason and it is wrong, you may not find out until much
later, and then many squares are wrong. Write only what you can explain.

## Where it leads

- Previous lesson: [Sorting circles](02-sorting-circles.md). Next lesson: [Coding with steps](04-coding-with-steps.md).
- This level: [Level 2: Rules and puzzles](index.md). The whole topic: [Logic and puzzles](../index.md).
- Crossing out what cannot be: [Clue riddles](../level-1/06-clue-riddles.md) in level 1.
- In level 3 you will move up to the full 9 by 9 Sudoku: [Level 3](../level-3/index.md).
- How many 4 by 4 Sudoku grids are there? Exactly 288. Counting things like this is part of
  [Counting](../../counting/index.md).
