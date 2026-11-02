---
title: "Velocity and acceleration"
---

# Velocity and acceleration

*Change and motion · level 7, lesson 6 of 6*

## A question to start

Throw a ball straight up. It slows down, stops for an instant at the very top, and falls back. At that top moment its
velocity is zero.

**Is its acceleration zero at the top, too?**

Many people say yes: it is not moving, so nothing is happening. But think about what zero acceleration would mean.
Acceleration is the rate at which velocity changes. If the velocity were 0 and **not changing**, it would stay 0, and
the ball would hang in the air forever. It doesn't. So at the top the velocity is 0 but it is **changing**, from
positive (going up) to negative (coming down). This lesson makes that exact, with derivatives.

## The idea

### Position, with a direction

Think of an object moving along a straight line: a ball going up and down, a car on a straight road, a bead on a
wire. Choose a zero point and a positive direction (for the ball, up). Its **position** at time $t$ is a number
$s(t)$, which can be negative if it is on the other side of zero. In this lesson time is in seconds and distance in
metres.

### Velocity is the derivative of position

The **velocity** is the rate of change of position:

$$v(t) = s'(t).$$

It is measured in metres per second (m/s). Unlike everyday "speed", velocity has a **sign**: positive means moving in
the positive direction, negative means moving the other way, and zero means stopped (perhaps just for an instant). The
**speed** is the size of the velocity, $|v(t)|$, with the sign thrown away. A ball going up at 5 m/s and a ball coming
down at 5 m/s have the same speed but velocities $5$ and $-5$.

### Acceleration is the derivative of velocity

The **acceleration** is the rate of change of velocity:

$$a(t) = v'(t) = s''(t).$$

If the velocity goes up by 3 m/s every second, the acceleration is 3 metres per second per second, written 3 m/s².

The sign of the acceleration alone does not tell you whether the object is speeding up. You need to compare signs:

| Velocity | Acceleration | What happens |
| --- | --- | --- |
| $+$ | $+$ | moving forwards and **speeding up** |
| $+$ | $-$ | moving forwards and **slowing down** |
| $-$ | $-$ | moving backwards and **speeding up** |
| $-$ | $+$ | moving backwards and **slowing down** |

**Same signs: speeding up. Opposite signs: slowing down.** A falling ball has negative velocity (moving down) and
negative acceleration (gravity pulls down), so it speeds up, just as you would expect.

### The ball thrown up at 20 m/s

Near the Earth's surface, ignoring air resistance, gravity changes every falling object's velocity by about 9.8 m/s
each second, downwards. So with "up" positive, $a(t) = -9.8$ for a thrown ball, the whole time: going up, at the top,
and coming down.

Throw the ball up at 20 m/s from ground level (we ignore the height of your hand). Then

- the velocity starts at 20 and loses 9.8 each second: $v(t) = 20 - 9.8t$;
- the position is a function whose derivative is $20 - 9.8t$ and which starts at 0:

$$s(t) = 20t - 4.9t^2.$$

Check by differentiating: $s'(t) = 20 - 9.8t = v(t)$ ✓, $s''(t) = -9.8$ ✓, and $s(0) = 0$ ✓.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 620 200" role="img" aria-label="Left: the height of the ball, 20 t minus 4.9 t squared, a hill from 0 at t equals 0 up to 20.4 metres at about 2.04 seconds and back to 0 at about 4.08 seconds, with a flat tangent at the top. Right: the velocity 20 minus 9.8 t, a straight line falling from 20 to minus 20, crossing zero at about 2.04 seconds, directly below the top.">
  <line x1="30" y1="178" x2="285" y2="178" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="178" x2="30" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="85.4" y1="175" x2="85.4" y2="181" stroke="currentColor"/><text x="85.4" y="193" text-anchor="middle">1</text><line x1="140.9" y1="175" x2="140.9" y2="181" stroke="currentColor"/><text x="140.9" y="193" text-anchor="middle">2</text><line x1="196.3" y1="175" x2="196.3" y2="181" stroke="currentColor"/><text x="196.3" y="193" text-anchor="middle">3</text><line x1="251.7" y1="175" x2="251.7" y2="181" stroke="currentColor"/><text x="251.7" y="193" text-anchor="middle">4</text><line x1="27" y1="111.6" x2="33" y2="111.6" stroke="currentColor"/><text x="24" y="115.6" text-anchor="end">10</text><line x1="27" y1="45.2" x2="33" y2="45.2" stroke="currentColor"/><text x="24" y="49.2" text-anchor="end">20</text><text x="285" y="172" text-anchor="end">t (s)</text><text x="36" y="22">s (m)</text></g>
  <line x1="143.1" y1="178" x2="143.1" y2="42.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="30,178 32.8,171.3 35.7,164.8 38.5,158.4 41.3,152.3 44.1,146.2 47,140.4 49.8,134.7 52.6,129.2 55.5,123.9 58.3,118.7 61.1,113.7 63.9,108.9 66.8,104.2 69.6,99.7 72.4,95.4 75.3,91.3 78.1,87.3 80.9,83.5 83.7,79.8 86.6,76.4 89.4,73.1 92.2,69.9 95.1,67 97.9,64.2 100.7,61.5 103.5,59.1 106.4,56.8 109.2,54.7 112,52.7 114.8,51 117.7,49.4 120.5,47.9 123.3,46.6 126.2,45.5 129,44.6 131.8,43.8 134.6,43.3 137.5,42.8 140.3,42.6 143.1,42.5 146,42.6 148.8,42.8 151.6,43.3 154.4,43.8 157.3,44.6 160.1,45.5 162.9,46.6 165.8,47.9 168.6,49.4 171.4,51 174.2,52.7 177.1,54.7 179.9,56.8 182.7,59.1 185.6,61.5 188.4,64.2 191.2,67 194,69.9 196.9,73.1 199.7,76.4 202.5,79.8 205.4,83.5 208.2,87.3 211,91.3 213.8,95.4 216.7,99.7 219.5,104.2 222.3,108.9 225.2,113.7 228,118.7 230.8,123.9 233.6,129.2 236.5,134.7 239.3,140.4 242.1,146.2 245,152.3 247.8,158.4 250.6,164.8 253.4,171.3 256.3,178" fill="none" stroke="#eea66f" stroke-width="3"/>
  <line x1="109.9" y1="42.5" x2="176.4" y2="42.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="143.1" cy="42.5" r="4" fill="currentColor"/>
  <text x="143.1" y="34.5" font-size="12" text-anchor="middle" fill="currentColor">top: 20.4 m</text>
  <line x1="350" y1="95" x2="605" y2="95" stroke="currentColor" stroke-width="1.2"/>
  <line x1="350" y1="178" x2="350" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="405.4" y1="92" x2="405.4" y2="98" stroke="currentColor"/><text x="405.4" y="110" text-anchor="middle">1</text><line x1="516.3" y1="92" x2="516.3" y2="98" stroke="currentColor"/><text x="516.3" y="110" text-anchor="middle">3</text><line x1="571.7" y1="92" x2="571.7" y2="98" stroke="currentColor"/><text x="571.7" y="110" text-anchor="middle">4</text><line x1="347" y1="161.4" x2="353" y2="161.4" stroke="currentColor"/><text x="344" y="165.4" text-anchor="end">-20</text><line x1="347" y1="28.6" x2="353" y2="28.6" stroke="currentColor"/><text x="344" y="32.6" text-anchor="end">20</text><text x="605" y="89" text-anchor="end">t (s)</text><text x="356" y="22">v (m/s)</text></g>
  <line x1="463.1" y1="95" x2="463.1" y2="12" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="350" y1="28.6" x2="576.3" y2="161.4" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="463.1" cy="95" r="4" fill="currentColor"/>
  <text x="455.1" y="87" font-size="12" text-anchor="end" fill="currentColor">v = 0</text>
  <text x="535.4" y="128.7" font-size="12" text-anchor="start" fill="currentColor">slope −9.8</text>
</svg>
</div>

Now every question about the flight is a question about these functions.

**When is it at the top?** At the top it stops rising: $v(t) = 0$, so $20 - 9.8t = 0$ and
$t = \frac{20}{9.8} \approx 2.04$ s.

**How high does it go?** $s\left(\frac{20}{9.8}\right) = \frac{400}{9.8} - 4.9 \cdot \frac{400}{9.8^2} = \frac{400}{9.8} - \frac{200}{9.8} = \frac{200}{9.8} \approx 20.4$ m.

**When does it land?** When $s(t) = 0$: $t(20 - 4.9t) = 0$, so $t = 0$ (the throw) or $t = \frac{20}{4.9} \approx 4.08$ s.
That is exactly twice the time to the top: the trip down takes as long as the trip up.

**How fast is it going when it lands?** $v\left(\frac{20}{4.9}\right) = 20 - 9.8 \cdot \frac{20}{4.9} = 20 - 40 = -20$ m/s.
The same speed it was thrown with, now downwards.

**And the opening question:** at the top, $v = 0$ but $a = -9.8$ m/s². The velocity graph crosses zero there with
its usual slope of $-9.8$, which is why the ball does not stay.

### Where the formula comes from, in general

The same reasoning works for any constant acceleration $a$, starting position $s_0$ and starting velocity $v_0$:

$$s(t) = s_0 + v_0 t + \tfrac12 a t^2, \qquad v(t) = v_0 + a t.$$

Differentiate to check: $s'(t) = v_0 + at$ and $s''(t) = a$. These are the standard equations of motion from physics;
calculus shows where they come from.

### The same throw on Mars

Gravity on Mars is about 3.71 m/s², about 38% of Earth's. With the same 20 m/s throw,

$$s(t) = 20t - 1.855t^2, \qquad v(t) = 20 - 3.71t.$$

The ball reaches the top at $t = \frac{20}{3.71} \approx 5.39$ s, rises to $\frac{20^2}{2 \times 3.71} \approx 53.9$ m,
and lands after about 10.8 s. Gravity is about $\frac{9.8}{3.71} \approx 2.6$ times weaker, and the ball goes about
2.6 times higher and stays up about 2.6 times longer. (Mars's thin air would slow a real ball only slightly.)

### Displacement and distance travelled

The ball ends where it started, so its **displacement** (final position minus starting position) is 0. But it
**travelled** about $20.4 + 20.4 = 40.8$ m. To find distance travelled, find every time the velocity changes sign
(every turn-round), and add up the lengths of the pieces in between.

## Worked examples

**1. A particle that turns round twice.** A particle moves with $s(t) = t^3 - 6t^2 + 9t$ for $0 \le t \le 4$. Describe
its motion.

Differentiate: $v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$, and $a(t) = 6t - 12 = 6(t - 2)$. It is at rest when
$v = 0$: at $t = 1$ and $t = 3$. The acceleration changes sign at $t = 2$. Now the signs, interval by interval:

| Interval | $v$ | $a$ | Motion |
| --- | --- | --- | --- |
| $0 < t < 1$ | $+$ | $-$ | forwards, slowing down |
| $1 < t < 2$ | $-$ | $-$ | backwards, speeding up |
| $2 < t < 3$ | $-$ | $+$ | backwards, slowing down |
| $3 < t < 4$ | $+$ | $+$ | forwards, speeding up |

Positions: $s(0) = 0$, $s(1) = 4$, $s(3) = 0$, $s(4) = 4$. It goes out 4 m, back 4 m, out 4 m again. So the
distance travelled is $4 + 4 + 4 = 12$ m, while the displacement is only $s(4) - s(0) = 4$ m.

**2. Braking.** A car is travelling at 25 m/s when the driver brakes. Its position after braking begins is
$s(t) = 25t - 2.5t^2$. How long does it take to stop, and how far does it go?

1. $v(t) = 25 - 5t$ and $a(t) = -5$ m/s² (steady braking).
2. Stops when $v = 0$: $t = 5$ s.
3. Distance: $s(5) = 125 - 62.5 = 62.5$ m.

Notice: double the speed to 50 m/s with the same brakes and the car needs 10 s and $50 \times 10 - 2.5 \times 100 = 250$ m,
**four** times as far. Stopping distance grows with the **square** of the speed, which is why speed limits matter.

**3. Reading the graphs.** In the picture of the ball, the $s$ graph is a hill and the $v$ graph is a falling line.
The $v$ line crosses 0 exactly below the top of the hill (flat tangent), and the slope of the $v$ line, $-9.8$, is the
acceleration. This is the derivative-as-a-function idea from [the last lesson](05-derivative-function.md), applied to
motion.

## Try it

1. A cart has position $s(t) = 3t^2 + 2t$. Find its velocity and acceleration, and its velocity at $t = 4$.
2. A ball is thrown up at 15 m/s on Earth: $s(t) = 15t - 4.9t^2$. When does it reach the top, and how high is that?
3. The same throw on Mars: $s(t) = 15t - 1.855t^2$. When does it reach the top, and how high?
4. A particle moves with $s(t) = t^2 - 6t + 5$ for $0 \le t \le 5$. When is it at rest, and where? Find its
   displacement and the total distance travelled.
5. A car braking from 30 m/s has acceleration $-6$ m/s². Write $v(t)$ and $s(t)$, and find the stopping time and
   distance.
6. A stone is dropped from the top of an 80 m cliff, so its height is $h(t) = 80 - 4.9t^2$. When does it hit the
   bottom, and how fast is it going?
7. For $s(t) = t^3 - 3t$ with $t \ge 0$, when is the particle speeding up and when slowing down?
8. A ball is thrown up at speed $v_0$ under gravity $g$, so $s(t) = v_0 t - \frac12 g t^2$. Show that it reaches a
   height of $\dfrac{v_0^2}{2g}$. What happens to the height if you throw twice as fast?

??? note "Answers"
    1. $v(t) = 6t + 2$, $a(t) = 6$ m/s². $v(4) = 26$ m/s.
    2. $v(t) = 15 - 9.8t = 0$ at $t = \frac{15}{9.8} \approx 1.53$ s. Height
       $s = 15 \times 1.5306 - 4.9 \times 1.5306^2 \approx 11.5$ m (exactly $\frac{225}{19.6}$).
    3. $v(t) = 15 - 3.71t = 0$ at $t \approx 4.04$ s. Height $\frac{15^2}{2 \times 3.71} = \frac{225}{7.42} \approx 30.3$ m.
    4. $v(t) = 2t - 6 = 0$ at $t = 3$, where $s(3) = 9 - 18 + 5 = -4$. $s(0) = 5$, $s(5) = 0$. Displacement
       $0 - 5 = -5$ m. Distance: from 5 down to $-4$ is 9 m, then from $-4$ up to 0 is 4 m: **13 m**.
    5. $v(t) = 30 - 6t$ and $s(t) = 30t - 3t^2$. Stops at $t = 5$ s, after $150 - 75 = 75$ m.
    6. $4.9t^2 = 80$ gives $t = \sqrt{80/4.9} \approx 4.04$ s. $v(t) = -9.8t \approx -39.6$ m/s, so it is falling at
       about **39.6 m/s** (over 140 km/h).
    7. $v(t) = 3t^2 - 3 = 3(t - 1)(t + 1)$ and $a(t) = 6t$. For $0 < t < 1$: $v < 0$, $a > 0$: **slowing down**. For
       $t > 1$: $v > 0$, $a > 0$: **speeding up**.
    8. $v(t) = v_0 - gt = 0$ at $t = \frac{v_0}{g}$. Then
       $s = v_0 \cdot \frac{v_0}{g} - \frac12 g \cdot \frac{v_0^2}{g^2} = \frac{v_0^2}{g} - \frac{v_0^2}{2g} = \frac{v_0^2}{2g}$.
       Doubling $v_0$ multiplies the height by $2^2 = 4$. (Check: $\frac{400}{19.6} \approx 20.4$, as in the lesson.)

## Common mistake

**Thinking "at rest" means "no acceleration".** At the top of the throw, $v = 0$ and $a = -9.8$. Velocity zero is a
position on the velocity graph; acceleration is its slope.

**Using displacement as distance.** If the object turns round, $s(\text{end}) - s(\text{start})$ is not the distance
travelled. Find when $v = 0$, split the time there, and add the pieces as positive lengths.

## Where it leads

- Back: [The derivative as a function](05-derivative-function.md) · Next level: [Level 8: calculus](../level-8/index.md),
  starting with [the product, quotient and chain rules](../level-8/01-product-quotient-chain.md).
- [Level 7 page](index.md) · [Change and motion topic page](../index.md)
- Acceleration and falling as slopes and tables: [level 5](../level-5/index.md).
- Going backwards from velocity to position is the area under a curve: [level 8, lesson 6](../level-8/06-area-fundamental-theorem.md).
- Projectiles, parabolas and their vertex: [Algebra: quadratic relations](../../algebra/level-7/01-quadratic-relations.md).
- On the U of T shelf: [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md), and kinematics in
  [PHY131](../../../uoft/PHY131H1/index.md).
