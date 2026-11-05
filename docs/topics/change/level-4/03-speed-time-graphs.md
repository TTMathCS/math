---
title: "Speed-time graphs"
---

# Speed-time graphs

*Change and motion · level 4, lesson 3 of 6*

## A question to start

Here is a graph with a flat line on it, at the height 20.

Sam says: "Flat means stopped. The car is parked." Lee says: "No, flat means the car is going steadily at 20 metres
per second." They are looking at the same line. Who is right?

Both of them could be, depending on one thing they forgot to look at. And once you know which kind of graph it is,
you can find out something surprising from it: how far the car went, by measuring an **area**.

## The idea

### A new kind of graph

In [level 3](../level-3/02-distance-time-graphs.md) you met **distance-time graphs**: time across, distance up. Now
meet the **speed-time graph**: time across, **speed** up the side.

Each point now says "at **this** time, I was going at **this** speed". It does not tell you where you are, only how
fast you are going.

So who was right in the puzzle? If the graph is distance-time, a flat line means the distance is not changing: Sam is
right, the car is stopped. If it is speed-time, a flat line at 20 means the speed is not changing and is 20 m/s: Lee is
right. **Always read the labels on the axes before anything else.**

### Reading the shapes

On a speed-time graph:

| The line is... | It means... |
| --- | --- |
| flat, above the time axis | moving at a steady speed |
| flat, on the time axis (speed 0) | stopped |
| sloping up | speeding up |
| sloping down | slowing down (not going backwards!) |
| steeper | the speed is changing faster |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 140" role="img" aria-label="Four small speed-time graphs: a flat line above the axis for steady speed, a line on the axis for stopped, a line sloping up for speeding up, and a line sloping down for slowing down">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <polyline points="15,15 15,105 100,105"/><polyline points="125,15 125,105 210,105"/><polyline points="235,15 235,105 320,105"/><polyline points="345,15 345,105 430,105"/>
  </g>
  <line x1="15" y1="50" x2="95" y2="50" stroke="#9cc9ea" stroke-width="3.5"/>
  <line x1="125" y1="103" x2="205" y2="103" stroke="#9cc9ea" stroke-width="3.5"/>
  <line x1="235" y1="100" x2="315" y2="25" stroke="#eea66f" stroke-width="3.5"/>
  <line x1="345" y1="25" x2="425" y2="100" stroke="#7ccf9a" stroke-width="3.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="57" y="125">steady speed</text><text x="167" y="125">stopped</text><text x="277" y="125">speeding up</text><text x="387" y="125">slowing down</text>
  </g>
</svg>
</div>

The steepness of a speed-time graph tells you how quickly the **speed** is changing. A sports car that reaches
motorway speed in a few seconds has a steep line; a heavy lorry has a gentle one. The amount of speed gained each
second has a name, **acceleration**, and it gets its own lesson in [level 5](../level-5/index.md).

### Distance is the area under the graph

Now the surprise. A car goes at a steady 20 metres per second (m/s) for 10 seconds. How far does it go?

From [the rate lessons](../level-3/01-per-rates.md): 20 metres in each second, for 10 seconds, is
$20 \times 10 = 200$ metres.

Now look at its speed-time graph. It is a flat line at height 20, from time 0 to time 10. The region under the line
(down to the time axis) is a **rectangle**, 10 wide and 20 tall. Its area is width × height $= 10 \times 20 = 200$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 215" role="img" aria-label="Speed-time graph: a flat line at 20 metres per second from 0 to 10 seconds; the rectangle under it, 10 wide and 20 tall, is shaded and labelled 200 metres">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="360" y2="20"/><line x1="60" y1="60" x2="360" y2="60"/><line x1="60" y1="100" x2="360" y2="100"/><line x1="60" y1="140" x2="360" y2="140"/>
    <line x1="110" y1="20" x2="110" y2="180"/><line x1="160" y1="20" x2="160" y2="180"/><line x1="210" y1="20" x2="210" y2="180"/><line x1="260" y1="20" x2="260" y2="180"/><line x1="310" y1="20" x2="310" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <rect x="60" y="20" width="250" height="160" fill="#7ccf9a" fill-opacity="0.35"/>
  <line x1="60" y1="180" x2="370" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="20" x2="310" y2="20" stroke="#9cc9ea" stroke-width="4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="110" y="196">2</text><text x="160" y="196">4</text><text x="210" y="196">6</text><text x="260" y="196">8</text><text x="310" y="196">10</text><text x="360" y="196">12</text>
    <text x="210" y="211">time (seconds)</text>
    <text x="185" y="98" font-size="14">area = 10 × 20 = 200</text><text x="185" y="116" font-size="13">so 200 metres</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">5</text><text x="54" y="104">10</text><text x="54" y="64">15</text><text x="54" y="24">20 m/s</text>
  </g>
</svg>
</div>

The same number, 200, twice. That is no accident:

- distance = speed × time;
- on the graph, speed is the **height** of the rectangle and time is its **width**;
- so distance = height × width = **area** of the rectangle.

The units agree as well: the area is (metres per second) × (seconds), and the "per second" and the "seconds" cancel,
leaving **metres**.

**The distance travelled is the area under the speed-time graph.** This is one of the most important ideas in the
whole topic: it comes back in [level 5](../level-5/index.md) for changing speeds and in [level 8](../level-8/index.md)
as the heart of calculus.

### A trip in parts: add the areas

If a trip has several steady parts, the region under the graph is several rectangles. Add their areas.

A bus drives at 10 m/s for 60 seconds, stops at a bus stop for 30 seconds, then drives at 15 m/s for 60 seconds. (We
pretend it changes speed instantly; really it takes a few seconds, but the idea is the same.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 215" role="img" aria-label="Speed-time graph of a bus: 10 metres per second from 0 to 60 seconds, 0 from 60 to 90 seconds, 15 metres per second from 90 to 150 seconds; the two rectangles under the graph have areas 600 and 900">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="360" y2="20"/><line x1="60" y1="60" x2="360" y2="60"/><line x1="60" y1="100" x2="360" y2="100"/><line x1="60" y1="140" x2="360" y2="140"/>
    <line x1="120" y1="20" x2="120" y2="180"/><line x1="180" y1="20" x2="180" y2="180"/><line x1="240" y1="20" x2="240" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <rect x="60" y="100" width="120" height="80" fill="#9cc9ea" fill-opacity="0.4"/>
  <rect x="240" y="60" width="120" height="120" fill="#eea66f" fill-opacity="0.4"/>
  <line x1="60" y1="180" x2="380" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,100 180,100 180,178 240,178 240,60 360,60" fill="none" stroke="currentColor" stroke-width="3"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="120" y="196">30</text><text x="180" y="196">60</text><text x="240" y="196">90</text><text x="300" y="196">120</text><text x="360" y="196">150</text>
    <text x="210" y="211">time (seconds)</text>
    <text x="120" y="145" font-size="13">600 m</text><text x="300" y="125" font-size="13">900 m</text><text x="210" y="168" font-size="11">stop</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">5</text><text x="54" y="104">10</text><text x="54" y="64">15</text><text x="54" y="24">20 m/s</text>
  </g>
</svg>
</div>

- First part: $10 \times 60 = 600$ metres.
- The stop: speed 0, so the "rectangle" has no height and no area: 0 metres. Of course: a stopped bus goes nowhere.
- Last part: $15 \times 60 = 900$ metres.
- Total: $600 + 0 + 900 = 1500$ metres.

### The same trip, two graphs

Here is the bus trip as a **distance-time** graph, for comparison. Each steady part of the speed-time graph (a flat
line) is a sloping straight line on the distance-time graph, and the stop (on the axis) is a flat line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 215" role="img" aria-label="Distance-time graph of the same bus trip: a line rising to 600 metres at 60 seconds, flat until 90 seconds, then a steeper line rising to 1500 metres at 150 seconds">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="360" y2="20"/><line x1="60" y1="60" x2="360" y2="60"/><line x1="60" y1="100" x2="360" y2="100"/><line x1="60" y1="140" x2="360" y2="140"/>
    <line x1="120" y1="20" x2="120" y2="180"/><line x1="180" y1="20" x2="180" y2="180"/><line x1="240" y1="20" x2="240" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="380" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 180,120 240,120 360,30" fill="none" stroke="#eea66f" stroke-width="4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="120" y="196">30</text><text x="180" y="196">60</text><text x="240" y="196">90</text><text x="300" y="196">120</text><text x="360" y="196">150</text>
    <text x="210" y="211">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">400</text><text x="54" y="104">800</text><text x="54" y="64">1200</text><text x="54" y="24">1600 m</text>
  </g>
</svg>
</div>

The two graphs tell the same story in two languages:

- **steepness** of the distance-time graph = **height** of the speed-time graph (both are the speed);
- **height** of the distance-time graph = **area** under the speed-time graph (both are the distance so far).

These two facts are the two halves of calculus, seen here with nothing but rectangles.

<figure class="play" data-play="motion"><span class="ai-tag">AI-created</span><figcaption><b>Speed-time graphs.</b> Right: flat lines are steady speeds.</figcaption></figure>

## Worked examples

**1. Reading the bus graph.** How far did the bus go, and what was its average speed?

Distance: total area $= 1500$ m. Time: 150 s. Average speed: $1500 \div 150 = 10$ m/s. The stop pulled the average
down: while moving, the bus did 10 m/s and 15 m/s.

**2. A train.** A train runs at a steady 25 m/s for 2 minutes. How far does it go?

Careful with units: the speed is per **second**, so change 2 minutes into $2 \times 60 = 120$ seconds. Area
$= 25 \times 120 = 3000$ metres, which is 3 km.

**3. A cyclist (a peek ahead).** A cyclist speeds up steadily from 0 to 8 m/s in 4 seconds, rides at 8 m/s for 6
seconds, then brakes steadily to a stop in 2 seconds.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 215" role="img" aria-label="Speed-time graph shaped like a trapezoid: rising from 0 to 8 metres per second over 4 seconds, flat at 8 until 10 seconds, falling to 0 at 12 seconds; it is split into a triangle, a rectangle and a smaller triangle">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="30" x2="360" y2="30"/><line x1="60" y1="60" x2="360" y2="60"/><line x1="60" y1="90" x2="360" y2="90"/><line x1="60" y1="120" x2="360" y2="120"/><line x1="60" y1="150" x2="360" y2="150"/>
    <line x1="110" y1="20" x2="110" y2="180"/><line x1="160" y1="20" x2="160" y2="180"/><line x1="210" y1="20" x2="210" y2="180"/><line x1="260" y1="20" x2="260" y2="180"/><line x1="310" y1="20" x2="310" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <polygon points="60,180 160,60 160,180" fill="#eea66f" fill-opacity="0.4"/>
  <rect x="160" y="60" width="150" height="120" fill="#9cc9ea" fill-opacity="0.4"/>
  <polygon points="310,60 360,180 310,180" fill="#7ccf9a" fill-opacity="0.45"/>
  <line x1="60" y1="180" x2="380" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 160,60 310,60 360,180" fill="none" stroke="currentColor" stroke-width="3"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="110" y="196">2</text><text x="160" y="196">4</text><text x="210" y="196">6</text><text x="260" y="196">8</text><text x="310" y="196">10</text><text x="360" y="196">12</text>
    <text x="210" y="211">time (seconds)</text>
    <text x="132" y="160" font-size="13">16</text><text x="235" y="125" font-size="13">48</text><text x="324" y="160" font-size="13">8</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="154">2</text><text x="54" y="124">4</text><text x="54" y="94">6</text><text x="54" y="64">8</text><text x="54" y="34">10 m/s</text>
  </g>
</svg>
</div>

- **0 to 4 s:** sloping up, speeding up. **4 to 10 s:** flat, steady at 8 m/s. **10 to 12 s:** sloping down, braking.
  The braking line is steeper than the starting line: the speed changes faster when braking (8 m/s lost in 2 s,
  compared with 8 m/s gained in 4 s).
- **Distance in the middle:** rectangle, $8 \times 6 = 48$ m.
- **Distance while speeding up:** the speed rose steadily from 0 to 8, so on average it was 4 m/s (halfway). In 4
  seconds: $4 \times 4 = 16$ m. And the triangle's area is $\frac{1}{2} \times 4 \times 8 = 16$. The area rule still
  works!
- **Distance while braking:** average speed 4 m/s for 2 s: 8 m, which is the small triangle, $\frac{1}{2} \times 2 \times 8$.
- **Total:** $16 + 48 + 8 = 72$ metres.

You will see why the area rule works for every shape in [level 5](../level-5/index.md).

**4. A lift.** A lift goes from the ground floor to the top floor. Its speed-time graph starts at 0, slopes up, is
flat for most of the trip, slopes down to 0. Story: the lift starts from rest, speeds up, travels steadily, slows down
and stops at the top. Nothing in the graph says "up" or "down": a speed-time graph shows only **how fast**.

## Try it

1. A speed-time graph is a flat line at 12 m/s from 0 to 30 seconds. What is happening? How far does it go?
2. Part of a speed-time graph lies right on the time axis. What does that mean?
3. A car drives at 20 m/s for 15 seconds, then at 30 m/s for 10 seconds. Sketch the speed-time graph and find the
   total distance.
4. A person walks at 1.5 m/s for 4 minutes. How far do they walk?
5. A speed-time graph rises steadily from 0 to 10 m/s in 5 seconds, is flat for 10 seconds, then falls steadily to 0 in
   5 seconds. Describe the motion, and find the distance using areas.
6. Ana says: "The speed-time graph goes down, so the car is reversing." Is she right?
7. Car A goes at 20 m/s for 30 seconds. Car B goes at 15 m/s. How long must car B drive to go the same distance?
8. Challenge: a ball rolls from rest, speeding up steadily to 6 m/s in 3 seconds. How far has it rolled? Explain in
   two ways.

??? note "Answers"
    1. Moving at a steady 12 m/s. Distance = area $= 12 \times 30 = 360$ metres.
    2. The speed is 0 there: the object is **stopped**.
    3. Two flat pieces: at 20 from 0 to 15 s, at 30 from 15 to 25 s. Distance: $20 \times 15 + 30 \times 10$
       $= 300 + 300 = 600$ metres.
    4. 4 minutes is 240 seconds. $1.5 \times 240 = 360$ metres.
    5. It speeds up from rest, goes steadily at 10 m/s, then slows to a stop. Areas: triangle
       $\frac{1}{2} \times 5 \times 10 = 25$, rectangle $10 \times 10 = 100$, triangle 25. Total **150 metres**.
    6. **No.** Going down on a speed-time graph means the speed is getting smaller: the car is **slowing down**, still
       moving forwards. (A speed-time graph never shows direction.)
    7. Car A goes $20 \times 30 = 600$ m. Car B needs $600 \div 15 = 40$ seconds.
    8. (1) The speed rises steadily from 0 to 6, so the average speed is 3 m/s; $3 \times 3 = 9$ metres.
       (2) The area under the graph is a triangle with base 3 and height 6: $\frac{1}{2} \times 3 \times 6 = 9$.
       Both give **9 metres**.

## Common mistake

**Reading a speed-time graph as a distance-time graph.** On a distance-time graph, flat means stopped. On a speed-time
graph, flat means steady speed, and only a line **on the time axis** means stopped. Read the axis labels first, every
time.

**Mixing minutes and seconds in the area.** If the speed is in metres per second, the time across must be in seconds
before you multiply. 25 m/s for 2 minutes is $25 \times 120$, not $25 \times 2$.

## Where it leads

- Back: [Constant rate means a straight line](02-constant-rate-line.md) · Next: [Linear and non-linear change](04-linear-nonlinear.md)
- [Level 4 page](index.md) · [Change and motion topic page](../index.md)
- Areas of rectangles, triangles and trapezoids: [Area of a triangle](../../measurement/level-4/02-triangle-area.md) and
  [Area of a trapezoid](../../measurement/level-4/03-trapezoid-area.md).
- Acceleration and the area under changing speeds: [level 5](../level-5/index.md).
- Speed as a rate, with more practice: [Speed as a rate](../../ratio/level-3/05-speed-as-rate.md).
