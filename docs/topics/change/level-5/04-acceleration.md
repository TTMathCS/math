---
title: "Acceleration"
---

# Acceleration

*Change and motion · level 5, lesson 4 of 6*

## A question to start

Car adverts love one number: "0 to 100 km/h in 8 seconds". A car that does it in 4 seconds is called fast; one that
takes 15 seconds is called slow. But wait: all of them reach the **same** speed, 100 km/h. So the advert is not about
speed at all.

What is it about? It is about how quickly the **speed itself** changes. That is a rate of change of a rate of change,
and it has its own name: **acceleration**. How much faster does the 8-second car get in each second? And what strange
unit, "metres per second squared", hides inside that answer?

## The idea

### Speed can change too

So far a rate has told us how fast something changes: metres per second, dollars per item. Speed is itself a quantity
that can change. A bike starting off goes from 0 m/s to 3 m/s to 6 m/s; a car braking for a red light goes from 15 m/s
down to 0.

**Acceleration** is the rate of change of speed:

$$\text{acceleration} = \frac{\text{change in speed}}{\text{change in time}}.$$

(To be careful, scientists use the change in **velocity**, the speed with a sign for direction, from
[lesson 2](02-sign-of-slope.md). In this lesson everything moves in one direction, so speed and velocity are the same
number.)

### The units: metres per second, per second

Suppose a cyclist's speed goes from 4 m/s to 10 m/s in 3 seconds. The change in speed is $10 - 4 = 6$ m/s, so

$$\text{acceleration} = \frac{6 \text{ m/s}}{3 \text{ s}} = 2 \text{ m/s per second}.$$

"2 metres per second, per second" means: **each second, the speed goes up by 2 m/s.**

| Time (s) | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| Speed (m/s) | 4 | 6 | 8 | 10 |

Saying "metres per second per second" is long, so it is written $\text{m/s}^2$, read "metres per second squared".
The "squared" comes only from dividing by seconds twice:

$$\frac{\text{m/s}}{\text{s}} = \frac{\text{m}}{\text{s} \times \text{s}} = \frac{\text{m}}{\text{s}^2}.$$

There is no "square second" you can picture. Always translate it back in your head: **so many m/s gained each second**.

### The car advert

The car goes from 0 to 100 km/h in 8 s. First change the speed to metres per second: 100 km/h is 100 000 m in 3600 s,
which is

$$100\,000 \div 3600 \approx 27.8 \text{ m/s}.$$

Then

$$\text{acceleration} \approx \frac{27.8 \text{ m/s}}{8 \text{ s}} \approx 3.47 \text{ m/s}^2.$$

Each second, the car gains about 3.5 m/s, or $100 \div 8 = 12.5$ km/h. Both answers describe the same thing: one is
in km/h per second, the other in m/s per second.

### On a speed-time graph, acceleration is the slope

Put time across and **speed** up. Then the rise is the change in speed and the run is the change in time, so the slope
is change in speed over change in time: the **acceleration**. It is the same move as in lesson 1 (slope of a
distance-time graph is speed), one level up.

Here is a short car trip.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Speed-time graph of a car trip: speed rises in a straight line from 0 to 20 metres per second in the first 10 seconds, stays at 20 until 25 seconds, then falls in a straight line to 0 at 30 seconds">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="375" y2="20"/><line x1="60" y1="52" x2="375" y2="52"/><line x1="60" y1="84" x2="375" y2="84"/><line x1="60" y1="116" x2="375" y2="116"/><line x1="60" y1="148" x2="375" y2="148"/>
    <line x1="165" y1="20" x2="165" y2="180"/><line x1="270" y1="20" x2="270" y2="180"/><line x1="322.5" y1="20" x2="322.5" y2="180"/><line x1="375" y1="20" x2="375" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="165" y2="52" stroke="#7ccf9a" stroke-width="4"/>
  <line x1="165" y1="52" x2="322.5" y2="52" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="322.5" y1="52" x2="375" y2="180" stroke="#eea66f" stroke-width="4"/>
  <g font-size="12" fill="currentColor">
    <text x="118" y="130">P</text><text x="240" y="44">Q</text><text x="356" y="110">R</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="165" y="196">10</text><text x="270" y="196">20</text><text x="322.5" y="196">25</text><text x="375" y="196">30</text>
    <text x="220" y="211">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="152">5</text><text x="54" y="120">10</text><text x="54" y="88">15</text><text x="54" y="56">20</text><text x="54" y="24">25 m/s</text>
  </g>
</svg>
</div>

| Part | Change in speed | Time | Acceleration | Story |
| --- | --- | --- | --- | --- |
| P | $20 - 0 = 20$ m/s | 10 s | $+2$ m/s² | speeding up |
| Q | $20 - 20 = 0$ m/s | 15 s | $0$ m/s² | steady speed |
| R | $0 - 20 = -20$ m/s | 5 s | $-4$ m/s² | braking |

Three lessons in one table:

- **Flat** on a speed-time graph means **steady speed**, not standing still. (On a distance-time graph, flat meant
  standing still. Always read the label on the up axis.)
- A **negative** acceleration means the speed is going down. People often call it **deceleration**: the car
  decelerates at 4 m/s².
- A steeper piece means a bigger acceleration. The brakes (R) change the speed twice as fast as the engine (P).

### Constant acceleration on a distance-time graph

What does steady acceleration look like on a **distance**-time graph? Take a car starting from rest with acceleration
2 m/s². Its speed after $t$ seconds is $2t$ m/s, and (you will see why in [lesson 6](06-area-speed-time.md)) the
distance it has covered is $t^2$ metres.

| Time (s) | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Distance (m) | 0 | 1 | 4 | 9 | 16 | 25 |
| Distance in that second (m) | | 1 | 3 | 5 | 7 | 9 |

The distance covered in each second grows: 1, 3, 5, 7, 9. Those numbers go up by exactly 2 each time, the
acceleration. Steady acceleration makes a **straight line** on a speed-time graph but a **curve** that keeps getting
steeper on a distance-time graph. The falling stone from lesson 3 is exactly like this, with the numbers 4.9, 14.7,
24.5, 34.3 going up by 9.8 each second.

### Gravity is an acceleration

That 9.8 is no accident. Near the Earth's surface, anything falling freely (with air resistance too small to matter)
gains about **9.8 m/s of speed every second**. This is called the **acceleration due to gravity**, often written $g$:

$$g \approx 9.8 \text{ m/s}^2 \text{ on Earth}.$$

A heavy stone and a light stone dropped together gain speed at the same rate (if the air does not interfere). On Mars,
which is smaller and pulls less strongly, $g$ is about 3.71 m/s². The next lesson is all about falling.

<figure class="play" data-play="motion" data-mode="accel"><span class="ai-tag">AI-created</span><figcaption><b>Acceleration.</b> Speed grows by the same amount each second.</figcaption></figure>

## Worked examples

**1. A sprinter.** A sprinter goes from 0 to 9 m/s in the first 3 s of a race. Find her average acceleration.

$\dfrac{9 - 0}{3} = 3$ m/s². (Real sprinters speed up fastest at the very start, so 3 m/s² is an average over those
3 seconds.)

**2. Braking.** A bus moving at 15 m/s brakes steadily and stops in 6 s. Find the acceleration.

$\dfrac{0 - 15}{6} = -2.5$ m/s². The bus loses 2.5 m/s of speed every second.

**3. How long to reach a speed?** A train accelerates at 0.5 m/s² from rest. How long until it reaches 30 m/s
(108 km/h)?

Each second it gains 0.5 m/s, so it needs $30 \div 0.5 = 60$ seconds, one minute.

**4. Speed after a time.** A cyclist going 3 m/s accelerates at 1.5 m/s² for 4 s. What is her new speed?

Gain $= 1.5 \times 4 = 6$ m/s. New speed $= 3 + 6 = 9$ m/s.

**5. Thrown upwards.** A ball is thrown straight up at 20 m/s. Gravity takes away 9.8 m/s of upward speed every
second. When does it stop rising?

After 1 s its upward speed is $20 - 9.8 = 10.2$ m/s; after 2 s, $20 - 19.6 = 0.4$ m/s. It stops when
$20 - 9.8t = 0$, so $t = 20 \div 9.8 \approx 2.04$ s. At that instant its speed is zero, but its acceleration is still
$-9.8$ m/s²: gravity never switches off, which is why it starts falling back.

## Try it

1. A scooter goes from 2 m/s to 8 m/s in 4 s. Find its acceleration.
2. A car moving at 30 m/s brakes to 10 m/s in 5 s. Find its acceleration, with the right sign.
3. A motorbike goes from 0 to 100 km/h in 4 s. Find its acceleration in km/h per second and in m/s² (to 2 decimal
   places).
4. Starting from rest, a lift accelerates at 1.2 m/s². What is its speed after 2.5 s?
5. On a speed-time graph, a line goes from (0 s, 12 m/s) to (8 s, 12 m/s). What is the acceleration? What is the car
   doing?
6. A plane needs 70 m/s to take off and accelerates at 2.5 m/s² from rest. How long does its run take?
7. A car has speed $3t$ m/s after $t$ seconds, starting from rest; its distance is $1.5t^2$ m. Make a table of the
   distance at $t$ = 0, 1, 2, 3, 4, and of the distance covered in each second. What do you notice?
8. A stone is dropped on Mars, where it gains 3.71 m/s every second. How fast is it falling after 3 s? How long would
   it take to reach the speed a stone on Earth reaches in 1 s?

??? note "Answers"
    1. $(8 - 2) \div 4 = 1.5$ m/s².
    2. $(10 - 30) \div 5 = -20 \div 5 = -4$ m/s² (slowing down).
    3. $100 \div 4 = 25$ km/h per second. In m/s: $100 \div 3.6 \approx 27.78$ m/s, so $27.78 \div 4 \approx 6.94$
       m/s².
    4. $1.2 \times 2.5 = 3$ m/s.
    5. Change in speed $= 0$, so acceleration $= 0$ m/s². The car is moving at a **steady** 12 m/s (not stopped).
    6. $70 \div 2.5 = 28$ seconds.
    7. Distances: 0, 1.5, 6, 13.5, 24. In each second: 1.5, 4.5, 7.5, 10.5. These go up by **3** each time, which is
       the acceleration (3 m/s²).
    8. $3.71 \times 3 = 11.13$ m/s. An Earth stone reaches 9.8 m/s after 1 s; on Mars that takes
       $9.8 \div 3.71 \approx 2.64$ s.

## Common mistake

**Thinking zero speed means zero acceleration.** At the top of its flight a ball thrown up is still for an instant,
but its speed is changing (from going up to going down), so its acceleration is $-9.8$ m/s², not 0.

**Thinking a flat speed-time graph means stopped.** Flat means the **speed** is not changing. The object is moving at
a steady speed. Only a graph that sits **on** the time axis (speed 0) means stopped.

**Mixing units.** In "0 to 100 km/h in 8 s", dividing 100 by 8 gives 12.5 **km/h per second**, not m/s². Turn km/h
into m/s first (divide by 3.6) if you want m/s².

## Where it leads

- Back: [Average rate of change on a curve](03-average-rate-curve.md) · Next: [Falling](05-falling-bodies.md), on
  Earth and on Mars.
- [Level 5 page](index.md) · [Change and motion topic page](../index.md)
- Speed-time graphs, a first look: [Level 4](../level-4/index.md).
- Changing km/h to m/s and other unit changes: [Speed as a rate](../../ratio/level-3/05-speed-as-rate.md) in Ratio, and
  [Measurement](../../measurement/index.md).
- Acceleration at one instant, when it is not steady: [level 7](../level-7/index.md), where it becomes the
  derivative of velocity.
- The physics shelf: [PHY131 Unit 2: kinematics in one dimension](../../../uoft/PHY131H1/unit02.md) and
  [Unit 4: Newton's laws](../../../uoft/PHY131H1/unit04.md), where forces cause accelerations.
