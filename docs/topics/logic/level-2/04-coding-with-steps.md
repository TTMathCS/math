---
title: "Coding with steps"
---

# Coding with steps

*Logic and puzzles · level 2, lesson 4 of 6*

## A question to start

The orange robot wants to reach the star. The blue square is a rock: the robot cannot go through it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="A floor 6 squares across and 5 up. The robot is in the bottom left corner. A rock is 2 squares above it. The star is 2 squares right and 3 squares up.">
<g transform="translate(40,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="250" y1="10" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="250" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="250" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="250" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <rect x="16" y="96" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="110.0,54.8 114.0,64.5 124.5,65.3 116.5,72.1 118.9,82.3 110.0,76.8 101.1,82.3 103.5,72.1 95.5,65.3 106.0,64.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="30" cy="190" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="26" cy="188" r="2.2" fill="currentColor"/>
  <circle cx="34" cy="188" r="2.2" fill="currentColor"/>
</g>
</svg>
</div>

Here are two programs. Each arrow moves the robot **one square** in that direction.

- Program A: **↑ ↑ ↑ → →**
- Program B: **→ → ↑ ↑ ↑**

Both programs have exactly the same arrows: three ↑ and two →. Only the **order** is different. Do they both reach the
star? Trace them with your finger before you read on.

## The idea

### Arrow code

In level 1, the robot turned left and right, and "right" meant the **robot's** right. That was tricky. This time we
use a simpler code. There are four arrows, and each one moves the robot one square in that direction **on the page**:

- **↑** up one square;
- **↓** down one square;
- **←** left one square;
- **→** right one square.

The robot does not turn. "→" always means towards the right edge of the page, whichever way the robot is facing. A list
of arrows, done in order from left to right, is a **program**.

### Tracing

To find out what a program does, you **trace** it: put your finger on the robot, then do one arrow at a time, moving
your finger one square for each arrow. Do not skip, and do not look ahead.

Let us trace Program B from the start.

| Arrow | Robot moves to |
| --- | --- |
| start | bottom left corner |
| → | 1 square right |
| → | 2 squares right |
| ↑ | up 1 |
| ↑ | up 2 |
| ↑ | up 3: **the star** |

Now Program A: ↑ takes the robot up 1. The next ↑ takes it up 2, and that square is the **rock**. Crash! The robot
stops. Program A does not work.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 550 245" role="img" aria-label="Left: Program A goes up and crashes into the rock after 2 moves. Right: Program B goes right 2, then up 3, and reaches the star.">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="250" y1="10" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="250" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="250" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="250" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <rect x="16" y="96" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="30,190 30,150 30,110" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="30" cy="150" r="3" fill="currentColor"/>
  <circle cx="30" cy="110" r="3" fill="currentColor"/>
  <polygon points="110.0,54.8 114.0,64.5 124.5,65.3 116.5,72.1 118.9,82.3 110.0,76.8 101.1,82.3 103.5,72.1 95.5,65.3 106.0,64.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="30" cy="190" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="26" cy="188" r="2.2" fill="currentColor"/>
  <circle cx="34" cy="188" r="2.2" fill="currentColor"/>
  <text x="130" y="238" font-size="13" text-anchor="middle" fill="currentColor">A: crashes into the rock</text>
<g transform="translate(290,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="250" y1="10" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="250" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="250" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="250" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <rect x="16" y="96" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="30,190 70,190 110,190 110,150 110,110 110,70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="70" cy="190" r="3" fill="currentColor"/>
  <circle cx="110" cy="190" r="3" fill="currentColor"/>
  <circle cx="110" cy="150" r="3" fill="currentColor"/>
  <circle cx="110" cy="110" r="3" fill="currentColor"/>
  <circle cx="110" cy="70" r="3" fill="currentColor"/>
  <polygon points="110.0,54.8 114.0,64.5 124.5,65.3 116.5,72.1 118.9,82.3 110.0,76.8 101.1,82.3 103.5,72.1 95.5,65.3 106.0,64.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="30" cy="190" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="26" cy="188" r="2.2" fill="currentColor"/>
  <circle cx="34" cy="188" r="2.2" fill="currentColor"/>
  <text x="130" y="238" font-size="13" text-anchor="middle" fill="currentColor">B: reaches the star</text>
</g>
</svg>
</div>

So the answer to the question: same arrows, different order, **different result**. B works and A crashes.

### Why the end square depends only on the counts

Here is something surprising. If there were **no** rock, Program A would also have reached the star. In fact, **any**
order of three ↑ and two → ends on the star. Why?

Think about how far right the robot is. Only the → arrows change that. Each → moves it one square right, **whenever**
it comes in the program. Two → arrows means 2 squares right, in the end, whatever order they come in. In the same way,
three ↑ arrows means 3 squares up in the end.

It is like adding: 2 and 3 make 5, and 3 and 2 make 5. The order you add in does not change the total. So **where the
robot ends** depends only on **how many** of each arrow there are. (A ← cancels a →, and a ↓ cancels a ↑.)

But **the path** it takes on the way depends on the order. That is why order matters when there are rocks, walls or
edges. A program can end in the right place on paper, and still crash on the way.

### The shortest program

To go from the robot to the star, the robot must go 2 squares right and 3 squares up. Each arrow moves it only one
square, in one direction. So it needs at least 2 arrows → and at least 3 arrows ↑: that is **5 arrows**, and no program
can be shorter. A program that uses ← or ↓ will need extra arrows to undo them.

So: **count across, count up, add.** That is the length of the shortest program (if no rock is in the way of every
short path).

### Bugs and debugging

A mistake in a program is called a **bug**. Finding and fixing it is called **debugging**. Bugs come in a few kinds:

- a **wrong** arrow (↑ where there should be →);
- a **missing** arrow (one ↑ too few);
- an **extra** arrow (one → too many);
- arrows in the **wrong order** (so the path hits a rock).

How to debug:

1. Trace the program, one arrow at a time.
2. Find the **first** arrow where the robot goes somewhere you did not want.
3. Fix just that one arrow.
4. Trace the whole program **again**, to check the fix worked and did not cause a new bug.

Step 4 matters! Real programmers always test again after a fix.

### Why rovers on Mars run programs

Mars is very far away. A radio message from Earth takes between about 3 and 22 minutes to reach Mars, depending on
where the two planets are in their orbits. So nobody can drive a Mars rover with a joystick: by the time the rover got
"turn left!", it might already have driven into a rock. Instead, the rover team on Earth plans a **program** of moves,
checks it carefully, and sends the whole list. The rover then follows it step by step on its own. That is exactly what
you are doing on a much smaller floor.

## Worked examples

**Example 1. Trace it.** The robot starts in the bottom left corner. Where does **→ → ↑ → ↑ ↑ ←** take it?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="The robot starts bottom left. Its dashed path goes right 2, up 1, right 1, up 2, left 1.">
<g transform="translate(40,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="250" y1="10" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="250" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="250" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="250" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polyline points="30,190 70,190 110,190 110,150 150,150 150,110 150,70 110,70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="70" cy="190" r="3" fill="currentColor"/>
  <circle cx="110" cy="190" r="3" fill="currentColor"/>
  <circle cx="110" cy="150" r="3" fill="currentColor"/>
  <circle cx="150" cy="150" r="3" fill="currentColor"/>
  <circle cx="150" cy="110" r="3" fill="currentColor"/>
  <circle cx="150" cy="70" r="3" fill="currentColor"/>
  <circle cx="110" cy="70" r="3" fill="currentColor"/>
  <circle cx="30" cy="190" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="26" cy="188" r="2.2" fill="currentColor"/>
  <circle cx="34" cy="188" r="2.2" fill="currentColor"/>
</g>
</svg>
</div>

1. → → : 2 squares right.
2. ↑ : up 1.
3. → : 1 more right (3 right now).
4. ↑ ↑ : up 2 more (3 up now).
5. ← : back 1 left (2 right now).

It ends **2 squares right and 3 squares up** from the start. Check with counting: three → and one ← leave 2 right;
three ↑ make 3 up. ✓

**Example 2. Find a path round the rocks.** Write the shortest program to reach the star.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="The robot is bottom left. The star is in the top row, 4 squares right. Rocks: two in the second row from the bottom (2nd and 3rd columns) and one in the second row from the top (4th column).">
<g transform="translate(40,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="250" y1="10" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="250" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="250" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="250" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <rect x="56" y="136" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="96" y="136" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="136" y="56" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="190.0,14.8 194.0,24.5 204.5,25.3 196.5,32.1 198.9,42.3 190.0,36.8 181.1,42.3 183.5,32.1 175.5,25.3 186.0,24.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="30" cy="190" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="26" cy="188" r="2.2" fill="currentColor"/>
  <circle cx="34" cy="188" r="2.2" fill="currentColor"/>
</g>
</svg>
</div>

1. The star is 4 squares right and 4 squares up. Shortest possible: 4 and 4 make **8 arrows**.
2. Going right along the bottom first? After one →, the next ↑ would hit a rock in the second row. Going right along
   the second row from the bottom is blocked too.
3. So go **up first**: ↑ ↑. Now the robot is in the middle row, which has no rocks.
4. Go right along it: → → → →.
5. Then up: ↑ ↑. Both squares above are clear: the rock near the top is one square to the left of this column.

Program: **↑ ↑ → → → → ↑ ↑** (8 arrows, the shortest possible). Trace it to check: no rock touched.

**Example 3. A wrong arrow.** Tom wants to go from the robot to the star with **→ ↑ → ↑ ←**. Debug it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="The robot starts in the bottom row, second column. The star is 3 squares right and 2 squares up. Tom's buggy path goes right, up, right, up, then left, away from the star.">
<g transform="translate(40,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="250" y1="10" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="250" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="250" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="250" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polyline points="70,190 110,190 110,150 150,150 150,110 110,110" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="110" cy="190" r="3" fill="currentColor"/>
  <circle cx="110" cy="150" r="3" fill="currentColor"/>
  <circle cx="150" cy="150" r="3" fill="currentColor"/>
  <circle cx="150" cy="110" r="3" fill="currentColor"/>
  <circle cx="110" cy="110" r="3" fill="currentColor"/>
  <polygon points="190.0,94.8 194.0,104.5 204.5,105.3 196.5,112.1 198.9,122.3 190.0,116.8 181.1,122.3 183.5,112.1 175.5,105.3 186.0,104.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="70" cy="190" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="66" cy="188" r="2.2" fill="currentColor"/>
  <circle cx="74" cy="188" r="2.2" fill="currentColor"/>
</g>
</svg>
</div>

1. → : right 1. Good.
2. ↑ : up 1. Good.
3. → : right 1. Good.
4. ↑ : up 1. Good: now level with the star, one square to its left.
5. ← : left 1. **Bug!** The robot moves away from the star.

Fix: change the last arrow to **→**. New program: → ↑ → ↑ →. Trace again: it ends on the star. ✓

**Example 4. A missing arrow.** Ana's program **↑ ↑ ↑ → → →** should reach a star 3 squares right and 4 squares up.

1. Count: three ↑ make 3 up, but she needs 4 up. One ↑ is **missing**.
2. Trace confirms it: the robot ends one square **below** the star.
3. Fix: add one more ↑. **↑ ↑ ↑ ↑ → → →.** (With no rocks, the extra ↑ could go anywhere in the program.)

Counting the arrows found the bug before tracing. Counting is a quick first check; tracing is the full check.

## Try it

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="The robot is bottom left. The star is 5 squares right and 2 squares up. Rocks are in the third column in the bottom two rows, and in the fifth column in the second row from the top.">
<g transform="translate(40,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="250" y1="10" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="250" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="250" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="250" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="250" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <rect x="96" y="176" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="96" y="136" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="176" y="56" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="230.0,94.8 234.0,104.5 244.5,105.3 236.5,112.1 238.9,122.3 230.0,116.8 221.1,122.3 223.5,112.1 215.5,105.3 226.0,104.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="30" cy="190" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="26" cy="188" r="2.2" fill="currentColor"/>
  <circle cx="34" cy="188" r="2.2" fill="currentColor"/>
</g>
</svg>
</div>

The robot always starts in the bottom left corner of a floor 6 squares across and 5 squares up.

1. Trace **↑ ↑ → → → ↓**. Where does the robot end?
2. What is the shortest program from the bottom left corner to the top right corner? How many arrows?
3. Write a short program to reach the star in the picture below without touching a rock.
4. Max wants to reach a star 4 squares right and 3 squares up. His program is **→ → ↑ ↑ → ↑ ↑**. Where does the robot
   end? Find the bug and fix it.
5. Do **↑ → ↑ →**, **→ → ↑ ↑** and **↑ ↑ → →** all end in the same place (on a floor with no rocks)? Explain why.
6. Write a program that walks all the way round a 2 by 2 block of squares and comes back to where it started.
7. The program **→ → ↑** moves the robot away. Write a program that brings it back to the start. What do you notice?
8. Why do the people who drive rovers on Mars send a whole program, instead of steering live?

??? note "Answers"
    1. ↑ ↑ : up 2. → → → : right 3. ↓ : down 1. It ends **3 squares right and 1 square up** from the start.
    2. The top right corner is 5 squares right and 4 squares up. Shortest: **9 arrows**, for example
       → → → → → ↑ ↑ ↑ ↑. (Any order of five → and four ↑ works, since there are no rocks.)
    3. The star is 5 right and 2 up. The rocks block the bottom two rows in the third column. So go up first:
       **↑ ↑ → → → → →**. That is 7 arrows, the shortest possible (5 and 2 make 7). The rock in the second row from
       the top is not on this path.
    4. Trace: → → (2 right), ↑ ↑ (2 up), → (3 right), ↑ ↑ (4 up). It ends 3 right and 4 up: one square too far up and
       one square short to the right. The 6th arrow should be → instead of ↑: **→ → ↑ ↑ → → ↑**. Check by counting:
       four → and three ↑. ✓
    5. **Yes.** Each has two ↑ and two →. Where the robot ends depends only on how many of each arrow there are, not
       the order: each → adds one square right whenever it happens. All three end 2 right and 2 up.
    6. For example **↑ ↑ → → ↓ ↓ ← ←**. It goes up 2, right 2, down 2, left 2: back at the start. (Many others work,
       like → → ↑ ↑ ← ← ↓ ↓.)
    7. **↓ ← ←**. You notice two things: every arrow is flipped to its **opposite**, and the order is
       **backwards**. The last move (↑) is undone first. It is like taking off your shoes before your socks.
    8. Radio messages take between about 3 and 22 minutes to travel from Earth to Mars, one way. A live steering
       command would arrive far too late. So the team checks a whole program in advance, and the rover follows it.

## Common mistake

**Counting the start square.** If the star is 3 squares to the right, you need 3 arrows, not 4. Count the **moves**
(the jumps between squares), not the squares you touch.

**Fixing a bug and not testing again.** After you fix one arrow, trace the whole program again from the start. A fix
can move the path onto a rock that was not in the way before.

## Where it leads

- Previous lesson: [4-by-4 Sudoku](03-four-by-four-sudoku.md). Next lesson: [River crossing](05-river-crossing.md).
- This level: [Level 2: Rules and puzzles](index.md). The whole topic: [Logic and puzzles](../index.md).
- Back to turning robots: [Robot steps](../level-1/05-robot-steps.md) in level 1.
- "→ → → →" is "→ four times". In level 3 you will write **loops** to shorten programs like this:
  [Level 3](../level-3/index.md).
- Adding in any order gives the same total: [Adding and subtracting](../../numbers/level-2/02-adding-subtracting.md)
  in Numbers.
- Moving on a grid, and coordinates: [Geometry](../../geometry/index.md).
- At university, coding grows into a whole course: [CSC108: Introduction to Computer Programming](../../../uoft/CSC108H1/index.md).
