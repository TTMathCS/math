---
title: "Area under speed-time graphs"
---

# Area under speed-time graphs

*Change and motion · level 5, lesson 6 of 6*

## A question to start

In the [acceleration lesson](04-acceleration.md) a car speeds up from 0 to 20 m/s in 10 seconds, drives steadily at
20 m/s for 15 seconds, then brakes to a stop in 5 seconds. You have only its **speed**-time graph: no distances
anywhere.

How far did the car travel? It sounds impossible: the graph never mentions metres. And yet the answer is hiding in
the picture, in a place you might not think to look: not in the line, but in the **space under it**.

## The idea

### Steady speed: distance is a rectangle

Start simple. A cyclist rides at a steady 6 m/s for 10 s. She covers $6 \times 10 = 60$ m.

On a speed-time graph, her ride is a flat line at height 6, from time 0 to time 10. The region under it is a
rectangle 10 wide (seconds) and 6 tall (m/s). Its area is

$$\text{width} \times \text{height} = 10 \text{ s} \times 6 \text{ m/s} = 60 \text{ m}.$$

The area of the rectangle is **exactly** the distance, because "time × speed" is both the area rule and the distance
rule. Even the units agree: seconds times metres per second is metres.

### Why area means distance, even when speed changes

When the speed changes, chop the time into short pieces. In each short piece the speed hardly changes, so the
distance covered in that piece is about "speed × short time", which is the area of a thin strip under the graph.
Add up all the strips and you get about the total distance. The thinner the strips, the better the estimate, and
the strips together fill the region under the graph. So:

**The distance travelled is the area under the speed-time graph.**

Let us test this carefully on the car's first 10 seconds, where the speed rises steadily from 0 to 20 m/s (2 m/s
every second).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Speed rising in a straight line from 0 to 20 metres per second over 10 seconds. Shaded bars under the line use each second's starting speed and fall short of the line; a dashed staircase above uses each second's ending speed and overshoots it.">
  <line x1="60" y1="180" x2="380" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <g fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8">
    <rect x="90" y="164" width="30" height="16"/><rect x="120" y="148" width="30" height="32"/><rect x="150" y="132" width="30" height="48"/><rect x="180" y="116" width="30" height="64"/><rect x="210" y="100" width="30" height="80"/><rect x="240" y="84" width="30" height="96"/><rect x="270" y="68" width="30" height="112"/><rect x="300" y="52" width="30" height="128"/><rect x="330" y="36" width="30" height="144"/>
  </g>
  <polyline points="60,180 60,164 90,164 90,148 120,148 120,132 150,132 150,116 180,116 180,100 210,100 210,84 240,84 240,68 270,68 270,52 300,52 300,36 330,36 330,20 360,20 360,180" fill="none" stroke="#eea66f" stroke-width="2" stroke-dasharray="5 3"/>
  <line x1="60" y1="180" x2="360" y2="20" stroke="#9cc9ea" stroke-width="3.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="210" y="196">5</text><text x="360" y="196">10</text>
    <text x="210" y="211">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="104">10</text><text x="54" y="24">20 m/s</text>
  </g>
</svg>
</div>

- If, in each second, the car went only at its speed at the **start** of that second, it would cover
  $0 + 2 + 4 + \dots + 18 = 90$ m (the green bars). That is too little, since the car is always a bit faster than that.
- If, in each second, it went at its speed at the **end** of that second, it would cover $2 + 4 + \dots + 20 = 110$ m
  (the dashed staircase). That is too much.

So the true distance is between 90 m and 110 m. Now use half-seconds instead: the same two counts give 95 m and 105 m.
With tenths of a second, 99 m and 101 m. With hundredths, 99.9 m and 100.1 m. Both staircases squeeze in on one
number, **100 m**, and that is exactly the area of the triangle under the line:

$$\tfrac{1}{2} \times \text{base} \times \text{height} = \tfrac{1}{2} \times 10 \times 20 = 100 \text{ m}.$$

(Squeezing two estimates together until they meet is a very powerful idea. It is how calculus defines areas under
curves, in [level 8](../level-8/index.md).)

### Steady acceleration from rest: a triangle

Whenever something speeds up steadily from rest, its speed-time graph is a sloping straight line from the origin, and
the region under it is a triangle. With acceleration $a$, after time $t$ the speed is $at$, so

$$\text{distance} = \tfrac{1}{2} \times t \times at = \tfrac{1}{2}\,a\,t^2.$$

For a falling stone on Earth, $a = g = 9.8$, and this is $4.9t^2$: the rule from [lesson 5](05-falling-bodies.md),
now proved by a picture. The triangle is exactly half the rectangle "final speed × time", which is the same as saying
the average speed is half the final speed.

### Speeding up from a moving start: a trapezoid

If the speed goes steadily from $u$ to $v$ in time $t$, the region under the line is a **trapezoid** (a four-sided
shape with two parallel sides): the two upright sides have lengths $u$ and $v$, and its width is $t$. Its area is

$$\text{distance} = \frac{u + v}{2} \times t.$$

You can see it two ways. Cut the trapezoid into a rectangle $u$ tall and a triangle on top, $v - u$ tall: area
$ut + \tfrac{1}{2}(v - u)t$, which simplifies to the same thing. Or notice that $\dfrac{u + v}{2}$ is the average
speed, which works because the speed changes steadily. (The trapezoid area rule is in
[Measurement](../../measurement/level-4/03-trapezoid-area.md).)

### The whole car trip

Now the question from the start. Shade the region under the whole graph.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Speed-time graph of the car trip with the region under it shaded in three parts: a triangle P under the speeding-up part, a rectangle Q under the steady part, and a triangle R under the braking part">
  <polygon points="60,180 165,52 165,180" fill="#7ccf9a" fill-opacity="0.6"/>
  <polygon points="165,52 322.5,52 322.5,180 165,180" fill="#9cc9ea" fill-opacity="0.6"/>
  <polygon points="322.5,52 375,180 322.5,180" fill="#eea66f" fill-opacity="0.6"/>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 165,52 322.5,52 375,180" fill="none" stroke="currentColor" stroke-width="3"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="130" y="160">P: 100 m</text><text x="244" y="125">Q: 300 m</text><text x="345" y="160">R</text><text x="345" y="174">50 m</text>
    <text x="60" y="196">0</text><text x="165" y="196">10</text><text x="270" y="196">20</text><text x="322.5" y="196">25</text><text x="375" y="196">30</text>
    <text x="220" y="211">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="120">10</text><text x="54" y="56">20 m/s</text>
  </g>
</svg>
</div>

- P, speeding up: triangle, $\tfrac{1}{2} \times 10 \times 20 = 100$ m.
- Q, steady: rectangle, $15 \times 20 = 300$ m.
- R, braking: triangle, $\tfrac{1}{2} \times 5 \times 20 = 50$ m.

Total: $100 + 300 + 50 = 450$ m.

Check it another way: the whole shape is one big trapezoid, with parallel sides along the bottom (30 s) and the top
(15 s), and a height of 20 m/s. Area $= \dfrac{30 + 15}{2} \times 20 = 450$ m. ✓

So the graph knew the distance all along. **The slope of a speed-time graph is the acceleration; the area under it is
the distance.** These are the two great ideas of calculus, the derivative and the integral, met here in their
simplest form, with straight lines.

## Worked examples

**1. A falling stone.** A stone falls for 3 s on Earth. Its speed goes from 0 to $9.8 \times 3 = 29.4$ m/s. How far
does it fall?

Triangle: $\tfrac{1}{2} \times 3 \times 29.4 = 44.1$ m. That matches $4.9 \times 3^2 = 44.1$. ✓

**2. Overtaking.** A car speeds up steadily from 10 m/s to 30 m/s in 8 s. How far does it go?

Trapezoid: $\dfrac{10 + 30}{2} \times 8 = 20 \times 8 = 160$ m.

**3. Braking distance.** A car at 25 m/s brakes at 5 m/s². It stops after $25 \div 5 = 5$ s. Braking distance:
$\tfrac{1}{2} \times 5 \times 25 = 62.5$ m.

At twice the speed, 50 m/s, with the same brakes it takes $50 \div 5 = 10$ s to stop, and the distance is
$\tfrac{1}{2} \times 10 \times 50 = 250$ m: **four times** as far. Doubling the speed doubles both the base and the
height of the triangle, so the area grows by $2 \times 2 = 4$. This is why speed limits near schools matter so much.

**4. A bus between stops.** A bus speeds up from 0 to 12 m/s in 6 s, travels at 12 m/s for 30 s, then brakes to a
stop in 4 s. How far apart are the stops?

- Triangle: $\tfrac{1}{2} \times 6 \times 12 = 36$ m. Rectangle: $30 \times 12 = 360$ m. Triangle:
  $\tfrac{1}{2} \times 4 \times 12 = 24$ m.
- Total $= 36 + 360 + 24 = 420$ m. As one trapezoid: $\dfrac{40 + 30}{2} \times 12 = 35 \times 12 = 420$ m. ✓

## Try it

1. A runner goes at a steady 4 m/s for 90 s. Draw the speed-time graph in your head. What shape is the area, and how
   far does she run?
2. A bike speeds up steadily from rest to 8 m/s in 5 s. How far does it go in that time?
3. A car slows steadily from 20 m/s to 8 m/s in 6 s. How far does it travel while slowing?
4. On Mars a stone falls for 4 s, reaching $3.71 \times 4 = 14.84$ m/s. Use a triangle to find how far it fell.
5. A train speeds up from 0 to 30 m/s in 60 s, runs at 30 m/s for 4 minutes, then brakes to a stop in 40 s. How far
   apart are the stations, in km?
6. A car at 15 m/s brakes and stops in 3 s. Another car at 30 m/s has the same brakes. What is each braking
   distance?
7. For the car speeding up from 0 to 20 m/s in 10 s, the start-of-each-second staircase gave 90 m. Work out what it
   gives with half-second steps, and check that it is 95 m.
8. A lift speeds up from rest at 1 m/s² for 2 s, moves steadily for 10 s, then slows to a stop in 2 s. How high does
   it go?

??? note "Answers"
    1. A rectangle, $90 \times 4 = 360$ m.
    2. $\tfrac{1}{2} \times 5 \times 8 = 20$ m.
    3. Trapezoid: $\dfrac{20 + 8}{2} \times 6 = 14 \times 6 = 84$ m.
    4. $\tfrac{1}{2} \times 4 \times 14.84 = 29.68$ m. (Rule check: $1.855 \times 16 = 29.68$. ✓)
    5. Triangle $\tfrac{1}{2} \times 60 \times 30 = 900$ m; rectangle $240 \times 30 = 7200$ m; triangle
       $\tfrac{1}{2} \times 40 \times 30 = 600$ m. Total $8700$ m $= 8.7$ km.
    6. First: $\tfrac{1}{2} \times 3 \times 15 = 22.5$ m. Second: deceleration is $15 \div 3 = 5$ m/s², so it takes
       $30 \div 5 = 6$ s, and $\tfrac{1}{2} \times 6 \times 30 = 90$ m: four times as far.
    7. Each half-second starts at speed 0, 1, 2, ..., 19 m/s (the speed rises 1 m/s every half-second). Distances:
       $0.5 \times (0 + 1 + \dots + 19) = 0.5 \times 190 = 95$ m. ✓
    8. Top speed $1 \times 2 = 2$ m/s. Triangle $\tfrac{1}{2} \times 2 \times 2 = 2$ m, rectangle $10 \times 2 = 20$ m,
       triangle $\tfrac{1}{2} \times 2 \times 2 = 2$ m. Total **24 m**.

## Common mistake

**Using the slope when you need the area (or the other way round).** On a speed-time graph, **slope** gives
acceleration and **area** gives distance. On a distance-time graph, slope gives speed, and the area means nothing
useful. Check the label on the up axis before you start.

**Using final speed × time.** That is the area of the whole rectangle, which is twice the triangle when starting from
rest. Only a flat (steady) speed-time graph makes a rectangle.

## Where it leads

- Back: [Falling, on Earth and on Mars](05-falling-bodies.md) · Next level: [Level 6: speed at an instant](../level-6/index.md),
  starting with [The problem of instant speed](../level-6/01-instant-speed.md).
- [Level 5 page](index.md) · [Change and motion topic page](../index.md)
- Areas of triangles and trapezoids: [Triangle area](../../measurement/level-4/02-triangle-area.md) and
  [Trapezoid area](../../measurement/level-4/03-trapezoid-area.md) in Measurement.
- Adding $0 + 2 + 4 + \dots + 18$ quickly: [Patterns](../../patterns/index.md) (series and sums).
- Areas under curved graphs, by squeezing staircases, and the fundamental theorem of calculus: [level 8](../level-8/index.md).
- On the U of T shelf: [MAT137 Unit 7: the definition of the integral](../../../uoft/MAT137/unit07.md).
