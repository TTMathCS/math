---
title: "Paths to the playground"
---

# Paths to the playground

*Counting and combinations · level 1, lesson 5 of 6*

## A question to start

Nia lives on a corner of a town where the streets make neat squares. The playground is 2 blocks to the right and 2
blocks up from her home. Nia always walks the short way: she only ever walks **right** or **up**, never left and
never down.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 195" role="img" aria-label="A grid of streets 2 blocks wide and 2 blocks tall. Home is at the bottom-left corner and the playground is at the top-right corner.">
  <g stroke="#9cc9ea" stroke-width="6" stroke-linecap="round">
    <line x1="150" y1="160" x2="270" y2="160"/><line x1="150" y1="100" x2="270" y2="100"/><line x1="150" y1="40" x2="270" y2="40"/>
    <line x1="150" y1="160" x2="150" y2="40"/><line x1="210" y1="160" x2="210" y2="40"/><line x1="270" y1="160" x2="270" y2="40"/>
  </g>
  <polygon points="138,172 162,172 162,156 150,146 138,156" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="270" cy="40" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="150" y="190">home</text><text x="270" y="20">playground</text>
    <text x="345" y="105">right →</text><text x="75" y="105">up ↑</text>
  </g>
</svg>
</div>

How many different ways can Nia walk to the playground? Try to trace them with your finger. Is it 2? 4? More?

The answer is **6**, and in this lesson you will find all 6, be sure there are no more, and learn a clever trick that
counts the paths **without** tracing them at all.

## The idea

### What is a path?

A **path** here is a walk along the streets from home to the playground, going only right or up. Two paths are
**different** if they use different streets, even for one block.

Since Nia only goes right or up, every path has the same length. She must go **2 blocks right** altogether (to get
across) and **2 blocks up** altogether (to get up). That is 4 blocks, every time. The only thing that changes from
path to path is the **order** of the blocks.

### Write a path as letters

Writing "right, right, up, up" takes a long time, so let's write **R** for one block right and **U** for one block
up. Then the path along the bottom street and up the right-hand side is **R R U U**.

Every path is 4 letters: two R's and two U's, in some order. And every order of two R's and two U's is a path. So
counting paths is the same as counting the ways to write two R's and two U's in a row.

### Trace every path, tidily

Be organised, the same way as before: sort the paths by their **first** step.

- **Right first.** After one R, there is 1 more R and 2 U's to place. The paths are R R U U, R U R U, R U U R.
- **Up first.** After one U, there are 2 R's and 1 more U to place. The paths are U R R U, U R U R, U U R R.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 115" role="img" aria-label="Six small grids, each 2 blocks by 2 blocks, each showing one path from the bottom-left corner to the top-right corner: R R U U, R U R U, R U U R, U R R U, U R U R, U U R R">
  <g stroke="currentColor" stroke-width="1"><line x1="15" y1="80" x2="15" y2="36"/><line x1="37" y1="80" x2="37" y2="36"/><line x1="59" y1="80" x2="59" y2="36"/><line x1="15" y1="80" x2="59" y2="80"/><line x1="15" y1="58" x2="59" y2="58"/><line x1="15" y1="36" x2="59" y2="36"/><line x1="83" y1="80" x2="83" y2="36"/><line x1="105" y1="80" x2="105" y2="36"/><line x1="127" y1="80" x2="127" y2="36"/><line x1="83" y1="80" x2="127" y2="80"/><line x1="83" y1="58" x2="127" y2="58"/><line x1="83" y1="36" x2="127" y2="36"/><line x1="151" y1="80" x2="151" y2="36"/><line x1="173" y1="80" x2="173" y2="36"/><line x1="195" y1="80" x2="195" y2="36"/><line x1="151" y1="80" x2="195" y2="80"/><line x1="151" y1="58" x2="195" y2="58"/><line x1="151" y1="36" x2="195" y2="36"/><line x1="219" y1="80" x2="219" y2="36"/><line x1="241" y1="80" x2="241" y2="36"/><line x1="263" y1="80" x2="263" y2="36"/><line x1="219" y1="80" x2="263" y2="80"/><line x1="219" y1="58" x2="263" y2="58"/><line x1="219" y1="36" x2="263" y2="36"/><line x1="287" y1="80" x2="287" y2="36"/><line x1="309" y1="80" x2="309" y2="36"/><line x1="331" y1="80" x2="331" y2="36"/><line x1="287" y1="80" x2="331" y2="80"/><line x1="287" y1="58" x2="331" y2="58"/><line x1="287" y1="36" x2="331" y2="36"/><line x1="355" y1="80" x2="355" y2="36"/><line x1="377" y1="80" x2="377" y2="36"/><line x1="399" y1="80" x2="399" y2="36"/><line x1="355" y1="80" x2="399" y2="80"/><line x1="355" y1="58" x2="399" y2="58"/><line x1="355" y1="36" x2="399" y2="36"/></g>
  <polyline points="15,80 37,80 59,80 59,58 59,36" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="15" cy="80" r="4" fill="#9cc9ea"/><circle cx="59" cy="36" r="4" fill="#7ccf9a"/>
  <polyline points="83,80 105,80 105,58 127,58 127,36" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="83" cy="80" r="4" fill="#9cc9ea"/><circle cx="127" cy="36" r="4" fill="#7ccf9a"/>
  <polyline points="151,80 173,80 173,58 173,36 195,36" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="151" cy="80" r="4" fill="#9cc9ea"/><circle cx="195" cy="36" r="4" fill="#7ccf9a"/>
  <polyline points="219,80 219,58 241,58 263,58 263,36" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="219" cy="80" r="4" fill="#9cc9ea"/><circle cx="263" cy="36" r="4" fill="#7ccf9a"/>
  <polyline points="287,80 287,58 309,58 309,36 331,36" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="287" cy="80" r="4" fill="#9cc9ea"/><circle cx="331" cy="36" r="4" fill="#7ccf9a"/>
  <polyline points="355,80 355,58 355,36 377,36 399,36" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="355" cy="80" r="4" fill="#9cc9ea"/><circle cx="399" cy="36" r="4" fill="#7ccf9a"/>
  <g font-size="12" fill="currentColor" text-anchor="middle"><text x="105" y="20">right first</text><text x="309" y="20">up first</text></g>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="37" y="102">R R U U</text><text x="105" y="102">R U R U</text><text x="173" y="102">R U U R</text><text x="241" y="102">U R R U</text><text x="309" y="102">U R U R</text><text x="377" y="102">U U R R</text></g>
</svg>
</div>

3 and 3 make **6 paths**.

### Why there are no more

Look at the first group, right first. After the first R, Nia still has to place 1 R and 2 U's. The only question is
**where the leftover R goes**: second, third or last. That gives exactly 3 paths. It is just like lining up 2 red
blocks and 1 blue block in the last lesson: the lonely R is the blue block.

The second group, up first, works the same way: the only question is where the leftover U goes. Second, third or
last: 3 paths.

Every path starts with R or with U, so every path is in one of the two groups. Nothing is missing, nothing is twice.
There are exactly 6.

### The corner trick

Tracing works for small grids, but it gets slow. Here is a lovely trick. At **every corner**, write the number of
ways Nia can get there from home.

Start at home: write **1** (there is one way to "get" home: don't move).

Now think about any other corner. Nia only walks right or up, so she can only arrive at a corner **from the left**
or **from below**. Every path to this corner comes in one of those two ways. So:

> the number at a corner = the number on its left + the number below it.

Along the bottom street, every corner can only be reached from the left, so each one gets **1**: there is only one
way, straight along. Up the left-hand street, every corner gets 1 too. Then fill in the rest by adding:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="The same grid with a number at each corner. Bottom row: 1, 1, 1. Middle row: 1, 2, 3. Top row: 1, 3, 6. The playground corner shows 6.">
  <g stroke="#9cc9ea" stroke-width="6" stroke-linecap="round">
    <line x1="150" y1="170" x2="270" y2="170"/><line x1="150" y1="110" x2="270" y2="110"/><line x1="150" y1="50" x2="270" y2="50"/>
    <line x1="150" y1="170" x2="150" y2="50"/><line x1="210" y1="170" x2="210" y2="50"/><line x1="270" y1="170" x2="270" y2="50"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <circle cx="150" cy="170" r="14"/><circle cx="210" cy="170" r="14"/><circle cx="270" cy="170" r="14"/>
    <circle cx="150" cy="110" r="14"/><circle cx="210" cy="110" r="14"/><circle cx="270" cy="110" r="14"/>
    <circle cx="150" cy="50" r="14"/><circle cx="210" cy="50" r="14"/>
  </g>
  <circle cx="270" cy="50" r="14" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="150" y="175">1</text><text x="210" y="175">1</text><text x="270" y="175">1</text>
    <text x="150" y="115">1</text><text x="210" y="115">2</text><text x="270" y="115">3</text>
    <text x="150" y="55">1</text><text x="210" y="55">3</text><text x="270" y="55">6</text>
    <text x="150" y="195">home</text><text x="270" y="25">playground</text>
  </g>
</svg>
</div>

- The middle corner: 1 from the left and 1 from below, so **2**.
- The corner to its right: 2 from the left and 1 from below, so **3**.
- The corner above the middle: 1 from the left and 2 from below, so **3**.
- The playground: 3 from the left and 3 from below, so **6**. ✓

The trick and the tracing agree. And notice the two 3's at the end: they are exactly our two groups! The 3 paths
that arrive from the left are the ones whose **last** step is R, and the 3 that arrive from below end with U.

## Worked examples

**1. One block each way.** The playground is 1 block right and 1 block up. Paths: R U (along then up) and U R (up then
along). **2 paths.** Corner trick: home 1, the corners beside and above it 1 each, playground 1 and 1 make 2. ✓

**2. Two right, one up.** Paths have two R's and one U. Where does the U go? First, second or last: U R R, R U R,
R R U. **3 paths.** This is the middle row of our corner picture: the 3 is there.

**3. Three right, two up.** Now tracing is hard work. Use the corner trick. Fill in the bottom row and the left
column with 1's, then add:

| | 0 right | 1 right | 2 right | 3 right |
| --- | --- | --- | --- | --- |
| **2 up** | 1 | 3 | 6 | **10** |
| **1 up** | 1 | 2 | 3 | 4 |
| **0 up** (home's street) | 1 | 1 | 1 | 1 |

Each number is the one on its left plus the one below it. For example, 6 is 3 and 3, and 10 is 6 and 4. There are
**10 paths**.

**4. A street is closed.** Back on the 2-by-2 grid, the street from the middle corner going up is closed for
repairs. How many paths now?

Use the corner trick, but **do not add** across the closed street. The corner above the middle can now only be reached
from its left: it gets **1** instead of 3. The playground is then 1 (from the left) and 3 (from below), which is
**4 paths**. Check by tracing: of the 6 paths, the two that go through the middle corner and then up (R U U R and
U R U R) are gone, leaving 4. ✓

## Try it

1. The playground is 3 blocks right and 0 blocks up. How many paths?
2. The playground is 1 block right and 2 blocks up. List all the paths using R and U.
3. Copy the 2-by-2 grid and fill in the corner numbers yourself without looking.
4. The playground is 1 block right and 3 blocks up. How many paths?
5. The playground is 2 blocks right and 3 blocks up. Use the corner trick. (Hint: turn the table in example 3 on its
   side.)
6. On the 2-by-2 grid, the street along the bottom from home to the first corner is closed. How many paths now?
7. On the 3-by-3 grid (3 right, 3 up), how many paths are there? Fill in all the corners.

??? note "Answers"
    1. **1 path**: R R R, straight along. You cannot go up at all, so there is no choice.
    2. **3 paths**: R U U, U R U, U U R. (Where does the one R go? First, second or last.)
    3. Bottom row 1, 1, 1; middle row 1, 2, 3; top row 1, 3, 6. The playground gets **6**.
    4. **4 paths**: the one R can go first, second, third or last: R U U U, U R U U, U U R U, U U U R. With the
       corner trick the column next to the 1's reads 1, 2, 3, 4.
    5. **10 paths**. It is the same grid as example 3, just turned on its side (going up instead of across), so the
       answer is the same.
    6. The first corner along the bottom could only be reached from home along that street, so now it cannot be
       reached at all: it gets **0**, and so does the corner after it. The bottom row is 1, 0, 0. Middle row: 1, then 1 and 0 make 1, then 1 and 0 make
       1. Top row: 1, then 1 and 1 make 2, then 2 and 1 make 3. **3 paths**: they are exactly the ones that start
       with U.
    7. Bottom row 1, 1, 1, 1. Next row 1, 2, 3, 4. Next 1, 3, 6, 10. Top row 1, 4, 10, **20**. There are 20 paths.

## Common mistake

**Going backwards.** A path that goes left or down is longer and is not allowed here. If your path ever goes left or
down, it is not one of the paths we are counting.

**Adding the wrong neighbours.** In the corner trick, add the number on the **left** and the number **below**, not
the ones on the right or above. Those corners come **after** this one, so Nia has not been there yet.

## Where it leads

- Previous: [Handshakes](04-handshakes.md) · Next: [Being organised](06-being-organised.md), where we collect all
  the tidy-listing tricks of this level.
- [Level 1 page](index.md) · [Counting topic page](../index.md)
- Giving a robot directions on a grid is in [Geometry level 1: where is it?](../../geometry/level-1/03-where-is-it.md)
- The numbers in the corners (1, 2, 3, 4 ... 1, 3, 6, 10 ...) are the handshake numbers from the last lesson! In
  level 5 they become **Pascal's triangle**. They are a famous pattern too: [Patterns](../../patterns/index.md).
