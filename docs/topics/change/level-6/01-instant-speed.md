---
title: "The problem of instant speed"
---

# The problem of instant speed

*Change and motion · level 6, lesson 1 of 6*

## A question to start

About 2500 years ago, a Greek thinker called Zeno of Elea posed a puzzle that is still quoted today. Think of an arrow
in flight. At any single **instant**, the arrow is in exactly one place, filling a space exactly its own size. In that
instant it does not move: there is no time for it to move in. But the flight is made of nothing but instants. So when
does the arrow ever move?

Now look at a car's speedometer. It says 50 km/h **right now**, at this instant. But speed is distance divided by
time, and in an instant no time passes and no distance is covered. That is $0 \div 0$.

So what does the speedometer mean? This whole level is the answer. It is one of the most important ideas in all of
mathematics, and it begins with taking the puzzle seriously.

## The idea

### What we already know: average speed

From level 3 onwards you have used

$$\text{average speed} = \frac{\text{change in distance}}{\text{change in time}}.$$

This needs a **stretch** of time: from 2 o'clock to 3 o'clock, or from $t = 1$ to $t = 3$ seconds. On a
distance-time graph, it is the slope of a secant line between two points (level 5, [lesson 3](../level-5/03-average-rate-curve.md)).

For steady motion, every stretch gives the same answer, so "the speed" is just that number. The trouble starts when
speed changes. A falling stone, a car pulling away from the lights, a sprinter at the start: different stretches give
different averages.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 150" role="img" aria-label="A speedometer dial marked from 0 to 120 kilometres per hour, with the needle pointing at 50">
  <path d="M 50 130 A 100 100 0 0 1 250 130" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <path d="M 50 130 A 100 100 0 0 1 124.1 33.4" fill="none" stroke="#7ccf9a" stroke-width="7" opacity="0.7"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="50" y1="130" x2="62" y2="130"/><line x1="63.4" y1="80" x2="73.8" y2="86"/><line x1="100" y1="43.4" x2="106" y2="53.8"/><line x1="150" y1="30" x2="150" y2="42"/><line x1="200" y1="43.4" x2="194" y2="53.8"/><line x1="236.6" y1="80" x2="226.2" y2="86"/><line x1="250" y1="130" x2="238" y2="130"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="76" y="134">0</text><text x="85.9" y="97">20</text><text x="113" y="70">40</text><text x="150" y="60">60</text><text x="187" y="70">80</text><text x="214.1" y="97">100</text><text x="224" y="134">120</text>
    <text x="150" y="146">km/h</text>
  </g>
  <line x1="150" y1="130" x2="129.3" y2="52.7" stroke="#eea66f" stroke-width="4"/>
  <circle cx="150" cy="130" r="6" fill="currentColor"/>
</svg>
</div>

### Why "distance over time" breaks at an instant

Try to use the formula at a single instant. The change in time is 0. The change in distance is 0 too: in no time, you
cannot go anywhere. So we would need $0 \div 0$.

Why is $0 \div 0$ meaningless? Division undoes multiplication: $12 \div 3 = 4$ because $4 \times 3 = 12$. So
$0 \div 0$ would be "the number that, times 0, gives 0". But **every** number does that: $5 \times 0 = 0$,
$50 \times 0 = 0$, $-7 \times 0 = 0$. There is no single answer, so $0 \div 0$ has no value. (And $6 \div 0$ would be
"the number that, times 0, gives 6", and there is none at all.) The formula is not wrong; it just cannot be used with
a zero-length stretch of time.

### And yet instant speed is real

We cannot simply give up, because instant speed clearly matters:

- A speed camera fines a driver for going 70 km/h at the moment the photo was taken, not on average over the day.
- A falling stone hits the ground faster than it started. "How fast was it going when it hit?" is a fair question with
  a definite answer, and that answer decides how much damage it does.
- When a ball thrown upwards reaches the top, it is stopped for an instant: its speed at that moment is 0, even though
  it is moving just before and just after.

### How a speedometer gets round it

A real speedometer does not divide 0 by 0. Many cars have a sensor that counts how many times a wheel turns in a short
moment, a small fraction of a second, and works out the distance from that. A phone's map app compares your GPS
position now with your position a moment ago. Either way, the device measures an **average speed over a very short
stretch of time**.

Over a short stretch, the speed hardly has time to change, so the average is a very good stand-in for the speed at the
instant. And a shorter stretch gives an even better one. That suggests a way out.

### The way out: watch where the averages are heading

Take the falling stone on Earth, $d = 4.9t^2$ metres. What is its speed at exactly $t = 2$ s? Find average speeds over
stretches that start at $t = 2$ and get shorter:

| Stretch of time | Change in distance (m) | Average speed (m/s) |
| --- | --- | --- |
| 2 to 3 s | $44.1 - 19.6 = 24.5$ | 24.5 |
| 2 to 2.5 s | $30.625 - 19.6 = 11.025$ | 22.05 |
| 2 to 2.1 s | $21.609 - 19.6 = 2.009$ | 20.09 |

The averages are falling and seem to be settling down towards some number a little under 20. In the
[next lesson](02-shrinking-interval.md) we push this much further and find that number exactly: **19.6 m/s**.

So here is the plan, and it is the heart of calculus:

**The speed at an instant is the number that the average speeds get closer and closer to as the stretch of time
shrinks towards zero.**

We never use a stretch of exactly zero, so we never divide by zero. We only look at where the averages are **heading**.
That is a new kind of thinking: not "what is the answer at 0?" but "what does the answer approach as we get near 0?".

Zeno's arrow is answered the same way. The arrow's speed at an instant is not "distance moved in that instant ÷ time
taken in that instant", which is the meaningless $0 \div 0$. It is the number its average speeds settle on as we look
at shorter and shorter stretches of flight around that instant. That number is not zero, so the arrow is moving.

### A picture: matching steady motion

Here is another way to think of instant speed. Imagine that at the instant $t = 2$ s, the stone's gravity were
switched off, so it kept going at whatever speed it had, steadily. That steady speed is the instant speed. On the
distance-time graph, the steady motion is a straight line that just grazes the curve at $t = 2$: the **tangent line**.
You will meet it properly in [lesson 3](03-secant-tangent.md).

## Worked examples

**1. A car pulling away.** A dashcam records a car's distance from the traffic lights each second.

| Time (s) | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Distance (m) | 0 | 5 | 14 | 27 | 44 | 65 |

Estimate its speed at $t = 3$ s.

1. The second **before**: from 2 to 3 s, average $= 27 - 14 = 13$ m/s.
2. The second **after**: from 3 to 4 s, average $= 44 - 27 = 17$ m/s.
3. The car is speeding up, so at the instant $t = 3$ it is faster than 13 and slower than 17. A good guess is halfway:
   about **15 m/s**.

**2. Better data.** A GPS logger records the same car every tenth of a second near $t = 3$: 25.52 m at 2.9 s, 27 m at
3 s and 28.52 m at 3.1 s. Improve the estimate.

- Before: $(27 - 25.52) \div 0.1 = 1.48 \div 0.1 = 14.8$ m/s.
- After: $(28.52 - 27) \div 0.1 = 15.2$ m/s.

The window has narrowed from "13 to 17" to "14.8 to 15.2". The speed at 3 s is very close to **15 m/s**. (In fact this
car's distance is $2t^2 + 3t$, and its speed at 3 s is exactly 15 m/s, as you will be able to prove soon.)

**3. The stone at 1 second.** Find average speeds of the falling stone from 1 s to 2 s, to 1.5 s and to 1.1 s. Where
do they seem to be heading?

$d(1) = 4.9$, $d(2) = 19.6$, $d(1.5) = 11.025$, $d(1.1) = 5.929$.

- 1 to 2: $14.7 \div 1 = 14.7$ m/s.
- 1 to 1.5: $6.125 \div 0.5 = 12.25$ m/s.
- 1 to 1.1: $1.029 \div 0.1 = 10.29$ m/s.

They are heading down towards about **9.8 m/s**, half of the 19.6 at $t = 2$. (At 2 s it has had twice as long to
speed up.)

**4. The top of a throw.** A ball's height is $h = 20t - 5t^2$ metres. Find its average vertical speed from 1.9 s to
2.1 s.

$h(1.9) = 38 - 18.05 = 19.95$ and $h(2.1) = 42 - 22.05 = 19.95$. Average $= 0 \div 0.2 = 0$ m/s. Over this short stretch
it went up a little and came back down by the same amount. At $t = 2$ the ball is at the top, and its instant vertical
speed is 0.

## Try it

1. Why can't you find the speed at an instant by putting "time = 0" into speed = distance ÷ time?
2. Explain why $0 \div 0$ has no value, using multiplication.
3. Using the dashcam table in example 1, estimate the car's speed at $t = 2$ s and at $t = 4$ s.
4. For the stone $d = 4.9t^2$, find the average speeds from 3 s to 4 s, to 3.5 s and to 3.1 s. What number do they seem
   to be heading towards?
5. A runner's distance is 40 m at 8.0 s, 41.1 m at 8.1 s and 42.2 m at 8.2 s. Estimate her speed at 8.1 s.
6. A phone measures speed by comparing GPS positions 1 s apart. Will it show the speed of a braking car a little too
   high or a little too low? (Think about which second it uses: the one just gone.)
7. For the ball $h = 20t - 5t^2$, find its average speed from 1 s to 1.1 s and from 0.9 s to 1 s. Estimate its speed at
   exactly 1 s.
8. Zeno says the arrow cannot move because in each instant it moves no distance. In two or three sentences, explain
   what is wrong with his argument.

??? note "Answers"
    1. In zero time you also cover zero distance, so you would need $0 \div 0$, which has no value. The formula only
       works for a stretch of time.
    2. $0 \div 0$ would be the number that gives 0 when multiplied by 0. Every number does that, so there is no one
       answer.
    3. At 2 s: the second before gives $14 - 5 = 9$ m/s, the second after $27 - 14 = 13$ m/s; about **11 m/s**. At 4 s:
       $44 - 27 = 17$ and $65 - 44 = 21$; about **19 m/s**. (Exactly right for this car: its speed is $4t + 3$.)
    4. $d(3) = 44.1$, $d(4) = 78.4$, $d(3.5) = 60.025$, $d(3.1) = 47.089$. Averages: $34.3$, $15.925 \div 0.5 = 31.85$,
       $2.989 \div 0.1 = 29.89$ m/s. Heading towards about **29.4 m/s**.
    5. Before: $1.1 \div 0.1 = 11$ m/s; after: $1.1 \div 0.1 = 11$ m/s. About **11 m/s**.
    6. **Too high.** The car was faster at the start of the second just gone, so the average over that second is more
       than the speed at the end of it, which is "now".
    7. $h(1) = 15$, $h(1.1) = 22 - 6.05 = 15.95$, $h(0.9) = 18 - 4.05 = 13.95$. From 1 to 1.1: $0.95 \div 0.1 = 9.5$
       m/s. From 0.9 to 1: $1.05 \div 0.1 = 10.5$ m/s. About **10 m/s**.
    8. Speed at an instant is not "distance in that instant ÷ time in that instant" (that is $0 \div 0$). It is the
       number the average speeds approach over shorter and shorter stretches around that instant, and for a flying
       arrow that number is not zero. Being at one place at each instant is not the same as being at the **same**
       place at every instant.

## Common mistake

**Thinking a very short average is the instant speed.** The average over a tenth of a second is a good estimate, not
the exact answer. The exact instant speed is the number the averages are heading towards, which needs the idea of
"getting closer and closer", worked out properly in the next lesson.

**Using only the stretch after (or only before).** When speed is changing, the average over the next second is too
high (if speeding up) and the one over the last second too low. Looking both ways and taking the middle is much better.
[Lesson 4](04-estimating-rates.md) shows why.

## Where it leads

- Before this: [Level 5: slope as a rate](../level-5/index.md), especially [Average rate of change on a curve](../level-5/03-average-rate-curve.md).
- Next: [Shrinking the interval](02-shrinking-interval.md), where the averages settle on exactly 19.6 m/s.
- [Level 6 page](index.md) · [Change and motion topic page](../index.md)
- Zeno's other puzzles, about adding up infinitely many smaller and smaller steps: [Infinity](../../infinity/index.md).
- On the U of T shelf: [MAT137 Prologue: why calculus exists](../../../uoft/MAT137/prologue.md).
