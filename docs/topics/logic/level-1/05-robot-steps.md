---
title: "Robot steps"
---

# Robot steps

*Logic and puzzles · level 1, lesson 5 of 6*

## A question to start

Here is a robot on a floor of squares. It is the orange arrow, and it is facing up. It wants to get to the star.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="A 5 by 5 floor of squares. The robot is in the bottom left corner facing up. The star is 3 squares up and 2 squares to the right.">
<g transform="translate(60,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="210" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="210" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="210" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="210" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polygon points="110.0,54.8 114.0,64.5 124.5,65.3 116.5,72.1 118.9,82.3 110.0,76.8 101.1,82.3 103.5,72.1 95.5,65.3 106.0,64.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="30.0,177.2 40.2,200.2 19.8,200.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
</svg>
</div>

Ana wrote these steps for the robot:

> forward 3, turn right, forward 2

Ben wrote different steps:

> turn right, forward 2, turn left, forward 3

Ana and Ben are arguing. Each one says the other's steps are wrong. Who is right? Put your finger on the robot and
try both. (The answer might surprise them.)

## The idea

### A robot does exactly what you say

A **robot** is a machine that follows instructions. It is very good at following them, and very bad at guessing what
you mean.

If you tell a person "go to the door", they will look around, find the door, and walk there. If you tell a robot "go
to the door", it does not know what a door is, or where it is. It just stands there!

So we talk to a robot in tiny, exact steps that it understands. Our robot knows only three steps.

- **forward** and a number, like **forward 3**: move that many squares the way you are facing.
- **turn right**: turn a quarter of the way round to the right, **staying on the same square**.
- **turn left**: turn a quarter of the way round to the left, staying on the same square.

A list of steps, in order, is called a **program**. People who write programs for computers and robots are called
**programmers**, and what they do is called **coding**.

### Turning does not move you

This is the first tricky thing. When the robot turns, it does **not** go to a new square. It just faces a new way,
like you do when you turn on the spot.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 110" role="img" aria-label="The robot on one square, turning right four times: it faces up, then right, then down, then left, then up again. It never leaves its square.">
<g transform="translate(0,10)">
  <line x1="10" y1="10" x2="10" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="60" y1="10" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="60" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="60" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polygon points="35.0,19.0 47.8,47.8 22.2,47.8" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
  <line x1="65" y1="45" x2="100" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="102,45 94,41 94,49" fill="currentColor"/>
  <text x="82" y="90" font-size="11" text-anchor="middle" fill="currentColor">turn</text>
  <text x="82" y="103" font-size="11" text-anchor="middle" fill="currentColor">right</text>
<g transform="translate(95,10)">
  <line x1="10" y1="10" x2="10" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="60" y1="10" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="60" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="60" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polygon points="51.0,35.0 22.2,47.8 22.2,22.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
  <line x1="160" y1="45" x2="195" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="197,45 189,41 189,49" fill="currentColor"/>
  <text x="177" y="90" font-size="11" text-anchor="middle" fill="currentColor">turn</text>
  <text x="177" y="103" font-size="11" text-anchor="middle" fill="currentColor">right</text>
<g transform="translate(190,10)">
  <line x1="10" y1="10" x2="10" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="60" y1="10" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="60" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="60" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polygon points="35.0,51.0 22.2,22.2 47.8,22.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
  <line x1="255" y1="45" x2="290" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="292,45 284,41 284,49" fill="currentColor"/>
  <text x="272" y="90" font-size="11" text-anchor="middle" fill="currentColor">turn</text>
  <text x="272" y="103" font-size="11" text-anchor="middle" fill="currentColor">right</text>
<g transform="translate(285,10)">
  <line x1="10" y1="10" x2="10" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="60" y1="10" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="60" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="60" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polygon points="19.0,35.0 47.8,22.2 47.8,47.8" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
  <line x1="350" y1="45" x2="385" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="387,45 379,41 379,49" fill="currentColor"/>
  <text x="367" y="90" font-size="11" text-anchor="middle" fill="currentColor">turn</text>
  <text x="367" y="103" font-size="11" text-anchor="middle" fill="currentColor">right</text>
<g transform="translate(380,10)">
  <line x1="10" y1="10" x2="10" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="60" y1="10" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="60" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="60" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polygon points="35.0,19.0 47.8,47.8 22.2,47.8" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
</svg>
</div>

Turn right once: now the robot faces right. Turn right again: it faces down. Again: it faces left. Again: it faces up,
where it started. **Four** quarter turns bring you all the way round.

### The robot's right, not your right

This is the second tricky thing. "Right" means the **robot's** right, not yours.

When the robot faces up the page, its right is the same as your right. But when the robot faces **down**, towards you,
its right is on **your left**! Try it: stand up, face the same way as a friend, and you both point right. Now turn to
face your friend. Point to your right. You are pointing in opposite directions.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 118" role="img" aria-label="A robot facing down the page. Its right hand points to the left of the page, and its left hand points to the right of the page.">
<g transform="translate(90,10)">
  <line x1="10" y1="10" x2="10" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="60" y1="10" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="110" y1="10" x2="110" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="160" y1="10" x2="160" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="160" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="60" x2="160" y2="60" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polygon points="85.0,51.0 72.2,22.2 97.8,22.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
  <line x1="70" y1="45" x2="20" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="14,45 22,41 22,49" fill="currentColor"/>
  <line x1="270" y1="45" x2="320" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="326,45 318,41 318,49" fill="currentColor"/>
  <text x="45" y="75" font-size="12" text-anchor="middle" fill="currentColor">robot's right</text>
  <text x="295" y="75" font-size="12" text-anchor="middle" fill="currentColor">robot's left</text>
  <text x="170" y="108" font-size="12" text-anchor="middle" fill="currentColor">the robot faces down, towards you</text>
</svg>
</div>

A good trick: pretend you are the robot. Turn your own body to face the same way, and then ask "which way is my
right?"

### Following a program: tracing

To check a program, you **trace** it. Put your finger on the robot. Do one step at a time, and only that step. After
each step, say where the robot is and which way it faces.

Let us trace Ana's program from the start.

| Step | Where is the robot? | Facing |
| --- | --- | --- |
| start | bottom left corner | up |
| forward 3 | 3 squares up | up |
| turn right | same square | right |
| forward 2 | 2 squares to the right | right |

It lands on the star! Now Ben's program.

| Step | Where is the robot? | Facing |
| --- | --- | --- |
| start | bottom left corner | up |
| turn right | same square | right |
| forward 2 | 2 squares to the right, on the bottom row | right |
| turn left | same square | up |
| forward 3 | 3 squares up | up |

It lands on the star too! **Both** programs work. They take different paths, but they end in the same place.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 245" role="img" aria-label="Two floors side by side. Left: Ana's path goes up 3 then right 2 to the star. Right: Ben's path goes right 2 then up 3 to the same star.">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="210" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="210" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="210" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="210" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polyline points="30,190 30,150 30,110 30,70 70,70 110,70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="30" cy="150" r="3" fill="currentColor"/>
  <circle cx="30" cy="110" r="3" fill="currentColor"/>
  <circle cx="30" cy="70" r="3" fill="currentColor"/>
  <circle cx="70" cy="70" r="3" fill="currentColor"/>
  <circle cx="110" cy="70" r="3" fill="currentColor"/>
  <polygon points="110.0,54.8 114.0,64.5 124.5,65.3 116.5,72.1 118.9,82.3 110.0,76.8 101.1,82.3 103.5,72.1 95.5,65.3 106.0,64.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="30.0,177.2 40.2,200.2 19.8,200.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="110" y="238" font-size="13" text-anchor="middle" fill="currentColor">Ana: up, then right</text>
<g transform="translate(250,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="210" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="210" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="210" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="210" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polyline points="30,190 70,190 110,190 110,150 110,110 110,70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="70" cy="190" r="3" fill="currentColor"/>
  <circle cx="110" cy="190" r="3" fill="currentColor"/>
  <circle cx="110" cy="150" r="3" fill="currentColor"/>
  <circle cx="110" cy="110" r="3" fill="currentColor"/>
  <circle cx="110" cy="70" r="3" fill="currentColor"/>
  <polygon points="110.0,54.8 114.0,64.5 124.5,65.3 116.5,72.1 118.9,82.3 110.0,76.8 101.1,82.3 103.5,72.1 95.5,65.3 106.0,64.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="30.0,177.2 40.2,200.2 19.8,200.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="110" y="238" font-size="13" text-anchor="middle" fill="currentColor">Ben: right, then up</text>
</g>
</svg>
</div>

So the answer to the question at the start is: Ana and Ben are **both** right. There is often more than one good
program.

### The order of the steps matters

What if we swap two steps of Ana's program?

- Ana's program: forward 3, **turn right**, forward 2.
- Swapped: **turn right**, forward 3, forward 2.

The swapped one turns first, then goes 5 squares to the right, along the bottom. That ends somewhere else entirely.
Same steps, different order, different place. In a program, **order matters**.

### Finding the mistake

When a program does not work, it has a mistake in it. Programmers call a mistake a **bug**, and finding and fixing it
is called **debugging**. The way to debug is to trace, step by step, and find the **first** step where the robot goes
somewhere you did not want.

## Worked examples

**Example 1. Trace it.** The robot starts in the bottom left corner, facing up. Where does this program take it?

> forward 2, turn right, forward 3, turn left, forward 1

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="The robot starts bottom left facing up. Its dashed path goes up 2, right 3, then up 1.">
<g transform="translate(60,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="210" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="210" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="210" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="210" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polyline points="30,190 30,150 30,110 70,110 110,110 150,110 150,70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="30" cy="150" r="3" fill="currentColor"/>
  <circle cx="30" cy="110" r="3" fill="currentColor"/>
  <circle cx="70" cy="110" r="3" fill="currentColor"/>
  <circle cx="110" cy="110" r="3" fill="currentColor"/>
  <circle cx="150" cy="110" r="3" fill="currentColor"/>
  <circle cx="150" cy="70" r="3" fill="currentColor"/>
  <polygon points="30.0,177.2 40.2,200.2 19.8,200.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
</svg>
</div>

1. forward 2: up 2 squares. Facing up.
2. turn right: same square. Now facing right.
3. forward 3: 3 squares to the right. Facing right.
4. turn left: same square. Now facing up.
5. forward 1: up 1 square.

The robot ends **3 squares to the right** and **3 squares up** from where it started (2 up, then 1 more up), facing
up. Notice the trick: the two "up" moves were split by the move to the right, so you have to add them: 2 and 1 make 3.

**Example 2. Go round the rock.** The robot cannot drive through a rock. Write a program to get to the star.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="The robot is bottom left facing up. A rock is 2 squares above it. The star is 3 squares up and 3 squares to the right.">
<g transform="translate(60,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="210" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="210" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="210" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="210" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <rect x="16" y="96" width="28" height="28" rx="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150.0,54.8 154.0,64.5 164.5,65.3 156.5,72.1 158.9,82.3 150.0,76.8 141.1,82.3 143.5,72.1 135.5,65.3 146.0,64.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="30.0,177.2 40.2,200.2 19.8,200.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
</svg>
</div>

1. The star is 3 squares up and 3 squares to the right.
2. Going up first will not work: the rock is 2 squares up, right in the way.
3. So go right first: **turn right, forward 3**. Now the robot is under the star.
4. Then go up: **turn left, forward 3**.

Program: **turn right, forward 3, turn left, forward 3**. Trace it to check: right 3 squares along the bottom, then up
3 squares, and the rock is never touched.

**Example 3. Find the bug.** The robot starts at the bottom, in the middle, facing up. Zoe wants it to reach the star.
Her program:

> forward 3, turn left, forward 2

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 220" role="img" aria-label="The robot starts at the bottom middle facing up. The star is 3 squares up and 2 squares to the right. Zoe's buggy path goes up 3 and then 2 squares left, away from the star.">
<g transform="translate(60,0)">
  <line x1="10" y1="10" x2="10" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="10" x2="50" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="90" y1="10" x2="90" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="130" y1="10" x2="130" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="170" y1="10" x2="170" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="210" y1="10" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="10" x2="210" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="50" x2="210" y2="50" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="90" x2="210" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="130" x2="210" y2="130" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="10" y1="210" x2="210" y2="210" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <polyline points="110,190 110,150 110,110 110,70 70,70 30,70" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="110" cy="150" r="3" fill="currentColor"/>
  <circle cx="110" cy="110" r="3" fill="currentColor"/>
  <circle cx="110" cy="70" r="3" fill="currentColor"/>
  <circle cx="70" cy="70" r="3" fill="currentColor"/>
  <circle cx="30" cy="70" r="3" fill="currentColor"/>
  <polygon points="190.0,54.8 194.0,64.5 204.5,65.3 196.5,72.1 198.9,82.3 190.0,76.8 181.1,82.3 183.5,72.1 175.5,65.3 186.0,64.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="110.0,177.2 120.2,200.2 99.8,200.2" fill="#eea66f" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</g>
</svg>
</div>

Trace it.

1. forward 3: up 3 squares. Good so far: the star is on this row.
2. turn left: now the robot faces **left**. But the star is to the **right**! This is the bug.
3. forward 2: the robot goes 2 squares left, away from the star.

Fix: change "turn left" to "**turn right**". New program: forward 3, turn right, forward 2. Trace it again: up 3,
face right, 2 squares right. On the star.

**Example 4. Facing down.** The robot starts at the top, facing **down**. The star is 2 squares down and 2 squares to
the right (as you look at the page). Which turn do you need?

1. forward 2: down 2 squares. Now the robot is level with the star.
2. The star is to the right of the page. The robot faces down, towards you. Its right is your left! So it must turn
   **left** to face the right side of the page.
3. forward 2.

Program: **forward 2, turn left, forward 2.** If you said "turn right", stand up and pretend to be the robot facing
down. You will see.

## Try it

For questions 1 to 5, the robot starts in the bottom left corner of a 5 by 5 floor, facing up (like in the first
picture).

1. Where does "forward 4" take it?
2. Where does "turn right, forward 3" take it?
3. The star is 2 squares up and 3 squares to the right. Write a program to reach it.
4. Max wants to reach a star 2 squares up and 4 squares to the right. His program is "forward 2, turn right, forward
   3". Where does the robot end? Find and fix the bug.
5. Write a program that goes 4 squares to the right, along the bottom, and then faces **up** at the end.
6. The robot starts in the top left corner, facing **down**. Where does "forward 2, turn left, forward 2" take it?
7. How many "turn right" steps make the robot face the opposite way? How many make it face the same way as at the
   start?
8. Play it for real: one person is the robot, one is the programmer. The programmer can only say forward (with a
   number), turn left and turn right. Can you get the robot to the door?

??? note "Answers"
    1. Up 4 squares: the **top left corner**, still facing up.
    2. The turn keeps the robot on its square, facing right. Then 3 squares right: the bottom row, **4th square from
       the left**, facing right.
    3. **forward 2, turn right, forward 3.** (Or: turn right, forward 3, turn left, forward 2. Both work.)
    4. Trace: up 2, turn right, 3 squares right. It ends **one square short** of the star. The bug is "forward 3"; it
       should be **forward 4**.
    5. **turn right, forward 4, turn left.** The last turn makes it face up. (Without it, the robot would still face
       right.)
    6. Down 2 squares. Turn left: facing down, the robot's left is the right side of the page. So it goes 2 squares
       **to the right** of the page. It ends 2 down and 2 across from the top left corner, facing right.
    7. **2** turns right make it face the opposite way (a half turn). **4** turns right bring it all the way round to
       face the same way again.
    8. Any program is fine. Count the squares (or steps) first. Trace it in your head before you say it.

## Common mistake

**Moving when you turn.** "turn right" does not move the robot to the square on the right. It only spins it round on
the same square. To move right, you need "turn right" **and then** "forward".

**Using your right instead of the robot's right.** When the robot faces you, its right is your left. Turn your body to
face the same way as the robot before you decide.

## Where it leads

- Previous lesson: [True or false](04-true-or-false.md). Next lesson: [Clue riddles](06-clue-riddles.md).
- This level: [Level 1: Sorting and clues](index.md). The whole topic: [Logic and puzzles](../index.md).
- Words for where things are, and more robot directions: [Where is it?](../../geometry/level-1/03-where-is-it.md) in
  Geometry.
- Patterns of moves, like "step, clap, step, clap": [Sounds and moves](../../patterns/level-1/02-sounds-and-moves.md)
  in Patterns.
- In level 2 you will code with arrows, fix bigger bugs, and see why rovers on Mars are driven with programs:
  [Coding with steps](../level-2/04-coding-with-steps.md).
