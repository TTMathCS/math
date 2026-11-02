---
title: "Coding with loops"
---

# Coding with loops

*Logic and puzzles · level 3, lesson 4 of 6*

## A question to start

A little robot holds a pen and draws a line wherever it moves. It understands only two kinds of command:

- `forward 50`: move forward 50 steps, drawing a line.
- `right 90`: turn on the spot to the right by 90 degrees (a quarter turn).

To draw a square, you could write:

```text
forward 50
right 90
forward 50
right 90
forward 50
right 90
forward 50
right 90
```

That is eight lines for one small square. How long would the code be for a row of ten squares? For a flower made of
36 squares? There must be a better way. There is, and it is one of the most important ideas in all of computing.

## The idea

### Code is a list of exact steps

A **program** (or **code**) is a list of instructions that a machine follows **exactly**, one at a time, from top to
bottom. The machine never guesses what you meant. If you write `right 90` when you meant `left 90`, it turns right.

This is why coding is a kind of logic: every step must be clear, and you must be able to say for sure what the machine
will do.

### Spot the pattern

Look again at the square code. The same two lines, `forward 50` and `right 90`, appear four times in a row. Whenever
code repeats itself, a computer person asks: can I say "do this 4 times" instead?

### The repeat loop

A **loop** is a command that runs a group of other commands again and again. We write it like this:

```text
repeat 4
    forward 50
    right 90
```

The two indented lines are the **body** of the loop: the part that gets repeated. The robot does the body, then does
it again, four times in all. Eight lines became three, and they draw exactly the same square.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 170" role="img" aria-label="A square drawn by the robot: it starts at the top left corner facing right, and each side is numbered 1 to 4 in the order it is drawn, going clockwise">
  <rect x="80" y="30" width="110" height="110" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="80" cy="30" r="6" fill="#eea66f" stroke="currentColor"/>
  <polygon points="122,24 134,30 122,36" fill="currentColor"/>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="135" y="20">1</text>
    <text x="205" y="90">2</text>
    <text x="135" y="160">3</text>
    <text x="65" y="90">4</text>
    <text x="40" y="34">start</text>
  </g>
</svg>
</div>

The robot starts at the dot facing right. It draws side 1, turns right (now facing down), draws side 2, and so on.
After the fourth turn it is back at the dot, facing right again, exactly as it began.

### Why 90 degrees? The total turn is a full circle

To get back to where it started, facing the way it started, the robot must turn **all the way round** once: 360
degrees. In a square it turns 4 times, so each turn is $360 \div 4 = 90$ degrees.

The same reasoning works for any shape with equal sides and equal corners (a **regular polygon**):

| Shape | Sides | Each turn | Code |
| --- | --- | --- | --- |
| triangle | 3 | $360 \div 3 = 120$ | `repeat 3` (`forward 50`, `right 120`) |
| square | 4 | $360 \div 4 = 90$ | `repeat 4` (`forward 50`, `right 90`) |
| pentagon | 5 | $360 \div 5 = 72$ | `repeat 5` (`forward 50`, `right 72`) |
| hexagon | 6 | $360 \div 6 = 60$ | `repeat 6` (`forward 50`, `right 60`) |

Notice the triangle turns **120**, not 60. A triangle's corners are 60 degrees inside, but the robot turns through the
**outside** angle: it has to swing round from the side it just drew to face along the next one. The inside corner and
the turn together make a straight line, 180 degrees, so the turn is $180 - 60 = 120$. (The full story of this is in
[Geometry: angles in a triangle](../../geometry/level-4/03-triangle-angle-sum.md), where the same walk proves that a
triangle's angles add to 180.)

### A loop inside a loop

Here is a row of three squares, side by side, touching.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 140" role="img" aria-label="A row of three touching squares, drawn left to right; the robot starts at the top left corner and ends at the top right corner">
  <g stroke="currentColor" stroke-width="2.5" fill-opacity="0.4">
    <rect x="40" y="30" width="90" height="90" fill="#eea66f"/>
    <rect x="130" y="30" width="90" height="90" fill="#9cc9ea"/>
    <rect x="220" y="30" width="90" height="90" fill="#7ccf9a"/>
  </g>
  <circle cx="40" cy="30" r="6" fill="#eea66f" stroke="currentColor"/>
  <circle cx="310" cy="30" r="6" fill="currentColor"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="40" y="18">start</text>
    <text x="310" y="18">end</text>
  </g>
</svg>
</div>

The robot draws one square. After the square it is back at the top-left corner, facing right. Then it moves `forward
50` along the top edge to the next corner and draws the next square. So the code is "draw a square, then move along",
three times:

```text
repeat 3
    repeat 4
        forward 50
        right 90
    forward 50
```

This is a **nested loop**: a loop inside the body of another loop. The **inner** loop (`repeat 4`) draws one square.
The **outer** loop (`repeat 3`) does that whole job three times, with a `forward 50` after each square.

How many lines would it take without any loops? Each square is 8 lines, plus 1 line to move along: 9 lines, three
times, is $9 \times 3 = 27$ lines. With loops it is 5 lines. For a row of 100 squares you change one number: `repeat
100`.

### How many times does a line run?

In nested loops, multiply. In the code above, `forward 50` inside the inner loop runs 4 times for each square, and
there are 3 squares, so it runs $4 \times 3 = 12$ times. The outer `forward 50` runs 3 times. In all the robot moves
forward $12 + 3 = 15$ times.

### Loops with a counter

Loops are not only for drawing. Here is a loop that **changes** a number each time:

```text
set n to 1
repeat 5
    say n
    add 2 to n
```

Follow it by hand, keeping a note of `n`:

| Time round the loop | `n` at the start | says | `n` after "add 2" |
| --- | --- | --- | --- |
| 1 | 1 | 1 | 3 |
| 2 | 3 | 3 | 5 |
| 3 | 5 | 5 | 7 |
| 4 | 7 | 7 | 9 |
| 5 | 9 | 9 | 11 |

It says **1, 3, 5, 7, 9**: the first five odd numbers. Following code line by line like this, with a table of the
numbers, is called **tracing**. It is how programmers find out what code really does.

### Debugging

A **bug** is a mistake in code. **Debugging** means finding and fixing it. A good way: trace the code by hand, step
by step, and compare what it does with what you wanted.

## Worked examples

**1. Shorten the code.** Shorten this code with a loop:

```text
forward 30
right 120
forward 30
right 120
forward 30
right 120
```

The pair `forward 30`, `right 120` appears 3 times. So: `repeat 3` with body `forward 30`, `right 120`. It draws a
triangle with sides of 30.

**2. Find the bug.** Zara wants a square but writes:

```text
repeat 4
    forward 50
    right 60
```

Trace it: each turn is only 60 degrees, so after 4 turns the robot has turned $4 \times 60 = 240$ degrees, not 360. It
draws four sides of a **hexagon** and stops with a gap. The fix: change `right 60` to `right 90`.

**3. A star.** What does this draw?

```text
repeat 5
    forward 100
    right 144
```

Each turn is 144 degrees, which is a sharp turn (more than a right angle). After 5 turns the robot has turned
$5 \times 144 = 720$ degrees, which is **two** full turns. It ends where it began, facing the same way, and it draws a
five-pointed **star**. It turned round twice because the star's lines cross over each other, going round the middle
twice.

**4. A flower.** What does this draw, and how many times does `forward 40` run?

```text
repeat 8
    repeat 4
        forward 40
        right 90
    right 45
```

The inner loop draws a square. Then the robot turns 45 degrees and draws another square, tilted. After 8 squares it has
turned $8 \times 45 = 360$ degrees in the outer loop, so the squares go all the way round: a **flower** of 8 squares
around one corner. `forward 40` runs $4 \times 8 = 32$ times.

## Try it

1. Write a loop that draws a square with sides of 80.
2. Write a loop that draws a regular hexagon with sides of 40.
3. How many degrees should each turn be for a regular **octagon** (8 sides)? Write the loop.
4. Trace this code. What does it say?

    ```text
    set n to 10
    repeat 4
        say n
        take 3 from n
    ```

5. Leo writes `repeat 3` (`forward 50`, `right 60`) to draw a triangle. What does the robot actually draw? Fix it.
6. Write a nested loop that draws a row of 5 touching triangles with sides of 50, all pointing the same way. (Hint: a
   triangle drawn with `right 120` ends back where it started, facing the same way.)
7. In this code, how many times does `forward 20` run?

    ```text
    repeat 6
        repeat 3
            forward 20
            right 120
        right 60
    ```

8. A robot turns `right 30` each time round a loop. How many times round must it go to face the way it started? What
   shape does `repeat` that many (`forward 20`, `right 30`) draw?

??? note "Answers"
    1. `repeat 4` with body `forward 80`, `right 90`.
    2. Each turn is $360 \div 6 = 60$. `repeat 6` with body `forward 40`, `right 60`.
    3. $360 \div 8 = 45$ degrees. `repeat 8` with body `forward 50`, `right 45` (any side length works).
    4. Start with `n` = 10. Round 1 says **10**, then `n` = 7. Round 2 says **7**, then 4. Round 3 says **4**, then 1.
       Round 4 says **1**, then $-2$. So it says 10, 7, 4, 1.
    5. It turns only $3 \times 60 = 180$ degrees in all, so it draws three sides of a **hexagon** (half a hexagon) and
       does not close up. The fix: `right 120`, because a triangle's turns must add to 360 and $360 \div 3 = 120$.
    6. One way:

        ```text
        repeat 5
            repeat 3
                forward 50
                right 120
            forward 50
        ```

        Each inner loop draws a triangle hanging below the line, starting and ending at its left corner facing right.
        Then `forward 50` moves to the next corner.
    7. The inner `forward 20` runs 3 times per triangle, and there are 6 triangles: $3 \times 6 = 18$ times.
    8. It needs a full turn: $360 \div 30 = 12$ times. `repeat 12` (`forward 20`, `right 30`) draws a regular
       **12-sided shape** (a dodecagon), which looks almost like a circle.

## Common mistake

**Using the inside angle as the turn.** A triangle's inside corners are 60 degrees, but the robot turns 120. Think of
the total: the turns must add up to 360 (one full turn) for the robot to come home facing the same way.

**Putting a line in the wrong place in a nested loop.** In the row of squares, `forward 50` that moves to the next
square belongs in the **outer** loop, after the inner loop ends. If you indent it into the inner loop, the robot moves
on after every side instead of after every square, and the drawing goes wrong. Indentation shows which loop a line
belongs to.

## Where it leads

- Back: [Knights and knaves](03-knights-and-knaves.md) · Next: [9-by-9 Sudoku moves](05-sudoku-moves.md).
- [Level 3 page](index.md) · [Logic topic page](../index.md)
- In level 4, code makes choices with **if** and **else**: [Coding with conditions](../level-4/05-coding-conditions.md).
- Turns that add to 360 degrees, and angles in shapes: [Geometry level 4](../../geometry/level-4/index.md).
- The counting loop made the odd numbers. Number patterns made by rules: [Patterns](../../patterns/index.md).
- Rovers on Mars are driven this way. A radio signal takes several minutes each way between Earth and Mars, so nobody
  can steer a rover live with a joystick. Instead the team sends a planned list of commands, and the rover carries
  them out by itself.
