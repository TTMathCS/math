---
title: "Average rate of change on a curve"
---

# Average rate of change on a curve

*Change and motion · level 5, lesson 3 of 6*

## A question to start

Drop a stone from a high bridge. Ignoring the air, after 1 second it has fallen 4.9 metres, after 2 seconds 19.6
metres, and after 3 seconds 44.1 metres.

In the second second it fell $19.6 - 4.9 = 14.7$ metres, three times as far as in the first second. In the third
second it fell $44.1 - 19.6 = 24.5$ metres, five times as far. So the stone has no single speed: it keeps speeding up,
and its distance-time graph is a **curve**, not a line.

A curve has no single slope. So what could "the speed of the stone from 0 to 2 seconds" possibly mean? And is there a
hidden pattern in the numbers 4.9, 14.7, 24.5?

## The idea

### A curve has many slopes

On a straight line the slope is the same everywhere: the rate is constant. On a curve the steepness changes from
place to place. The stone's curve starts almost flat (it starts from rest) and gets steeper and steeper.

So we ask a more modest question. Instead of "what is the rate?", we ask "what is the rate **on average**, between
here and there?".

### The secant line

Pick two points on the curve and join them with a straight line. A line that cuts through a curve at two points is
called a **secant line** (from the Latin *secare*, to cut). A secant line is straight, so it has one slope, and we
know how to find it: rise over run.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 225" role="img" aria-label="The curve of distance fallen, 4.9 t squared, from 0 to 3 seconds. A secant line joins the points at 0 seconds and 2 seconds, and a second, steeper secant joins the points at 1 second and 3 seconds.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="152.2" x2="360" y2="152.2"/><line x1="60" y1="114.4" x2="360" y2="114.4"/><line x1="60" y1="76.7" x2="360" y2="76.7"/><line x1="60" y1="38.9" x2="360" y2="38.9"/>
    <line x1="160" y1="20" x2="160" y2="190"/><line x1="260" y1="20" x2="260" y2="190"/><line x1="360" y1="20" x2="360" y2="190"/>
  </g>
  <line x1="60" y1="190" x2="380" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="190" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60.0,190.0 70.0,189.8 80.0,189.3 90.0,188.3 100.0,187.0 110.0,185.4 120.0,183.3 130.0,180.9 140.0,178.2 150.0,175.0 160.0,171.5 170.0,167.6 180.0,163.3 190.0,158.7 200.0,153.7 210.0,148.3 220.0,142.6 230.0,136.5 240.0,130.0 250.0,123.2 260.0,116.0 270.0,108.4 280.0,100.4 290.0,92.1 300.0,83.4 310.0,74.3 320.0,64.9 330.0,55.1 340.0,44.9 350.0,34.3 360.0,23.4" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="60" y1="190" x2="300" y2="101.1" stroke="#eea66f" stroke-width="3"/>
  <line x1="160" y1="171.5" x2="360" y2="23.4" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="60" cy="190" r="4.5" fill="#eea66f"/><circle cx="260" cy="116" r="4.5" fill="#eea66f"/>
  <circle cx="160" cy="171.5" r="4.5" fill="#9cc9ea"/><circle cx="360" cy="23.4" r="4.5" fill="#9cc9ea"/>
  <g font-size="12" fill="currentColor">
    <text x="268" y="128">(2, 19.6)</text><text x="300" y="20">(3, 44.1)</text><text x="166" y="186">(1, 4.9)</text>
    <text x="72" y="132">secant from 0 to 2</text><text x="140" y="60">secant from 1 to 3</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="206">0</text><text x="160" y="206">1</text><text x="260" y="206">2</text><text x="360" y="206">3</text>
    <text x="210" y="221">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="194">0</text><text x="54" y="156.2">10</text><text x="54" y="118.4">20</text><text x="54" y="80.7">30</text><text x="54" y="42.9">40 m</text>
  </g>
</svg>
</div>

The slope of the secant line is called the **average rate of change** between the two points.

For the stone from 0 to 2 seconds: the rise is $19.6 - 0 = 19.6$ m and the run is $2 - 0 = 2$ s, so

$$\text{average speed} = \frac{19.6 \text{ m}}{2 \text{ s}} = 9.8 \text{ m/s}.$$

What does that number really mean? A second stone, falling at a **steady** 9.8 m/s, would cover exactly the same 19.6
metres in the same 2 seconds. On the graph, that steady stone **is** the secant line. The real stone is slower at the
start, faster at the end, but it arrives at the same place at the same time. The average rate is the steady rate that
would do the same job.

### Writing it with function notation

It helps to have a short way to say "the distance at time $t$". Mathematicians write $d(t)$, read "$d$ of $t$". For
the stone on Earth,

$$d(t) = 4.9\,t^2.$$

So $d(2) = 4.9 \times 2^2 = 4.9 \times 4 = 19.6$. The brackets here do not mean "multiply": $d(2)$ means "the
distance when $t = 2$". (Functions are explained fully in [Algebra](../../algebra/level-7/04-functions.md).)

Then the average rate of change of $d$ from $t = a$ to $t = b$ is

$$\frac{d(b) - d(a)}{b - a} = \frac{\text{change in distance}}{\text{change in time}}.$$

The same formula works for any quantity $f$ that changes with $x$: change in $f$ over change in $x$.

### The stone, second by second

| Interval (s) | Change in distance (m) | Average speed (m/s) |
| --- | --- | --- |
| 0 to 1 | $4.9 - 0 = 4.9$ | 4.9 |
| 1 to 2 | $19.6 - 4.9 = 14.7$ | 14.7 |
| 2 to 3 | $44.1 - 19.6 = 24.5$ | 24.5 |
| 3 to 4 | $78.4 - 44.1 = 34.3$ | 34.3 |
| 0 to 2 | $19.6 - 0 = 19.6$ | 9.8 |
| 1 to 3 | $44.1 - 4.9 = 39.2$ | 19.6 |

Two things jump out:

1. The average speeds for the one-second intervals go up by **9.8** each time: 4.9, 14.7, 24.5, 34.3. The stone gains
   9.8 m/s of speed every second. That number will be the hero of [lesson 4](04-acceleration.md) and
   [lesson 5](05-falling-bodies.md).
2. The answer depends on **which interval** you pick. "The average speed of the stone" means nothing until you say
   "from when to when".

### The hidden pattern, and a picture proof

Look at the averages again: from 0 to 1 it is 4.9 = $4.9 \times (0 + 1)$; from 1 to 2 it is $14.7 = 4.9 \times (1 + 2)$;
from 2 to 3 it is $24.5 = 4.9 \times (2 + 3)$; from 1 to 3 it is $19.6 = 4.9 \times (1 + 3)$. It seems that

$$\text{average speed from } a \text{ to } b = 4.9\,(a + b).$$

Is this always true? The average is

$$\frac{4.9b^2 - 4.9a^2}{b - a} = 4.9 \times \frac{b^2 - a^2}{b - a}.$$

So the question is: why is $b^2 - a^2$ divided by $b - a$ equal to $a + b$? Here is a picture. Take a square of side
$b$ and cut a smaller square of side $a$ out of its corner. What is left has area $b^2 - a^2$. Cut the leftover
L-shape into two strips and lay them end to end:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 490 190" role="img" aria-label="A big square of side b with a small square of side a in its bottom-left corner. The leftover L-shape is cut into a top strip and a right strip, which are laid end to end to make one rectangle of length a plus b and height b minus a.">
  <rect x="20" y="80" width="90" height="90" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="20" y="20" width="150" height="60" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="110" y="80" width="60" height="90" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="200" y="110" width="150" height="60" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="350" y="110" width="90" height="60" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="65" y="130">a × a</text><text x="95" y="14">b</text><text x="65" y="185">a</text><text x="140" y="185">b − a</text>
    <text x="320" y="100">length a + b</text><text x="320" y="185">b</text><text x="395" y="185">a</text>
  </g>
  <text x="446" y="144" font-size="12" fill="currentColor">b − a</text>
</svg>
</div>

The top strip is $b$ long and $b - a$ tall. The right strip is $a$ long (once turned on its side) and $b - a$ tall.
End to end they make a rectangle $a + b$ long and $b - a$ tall. So

$$b^2 - a^2 = (b - a)(b + a),$$

and dividing by $b - a$ leaves $a + b$. The pattern is not luck: it holds for **every** interval.

There is a bonus. $4.9(a + b) = 9.8 \times \dfrac{a + b}{2}$, and $\dfrac{a + b}{2}$ is the time halfway between $a$
and $b$. In [level 6](../level-6/index.md) you will find that the stone's speed at the exact instant $t$ is $9.8t$. So
for a falling stone, the average speed over any interval equals the speed at the **middle** of the interval. That is a
special property of curves like $t^2$, and it makes them easy to work with.

<figure class="play" data-play="secant"><span class="ai-tag">AI-created</span><figcaption><b>Average rate on a curve.</b> The secant's slope is the average rate between two points.</figcaption></figure>

## Worked examples

**1. Late in the fall.** Find the stone's average speed from $t = 3$ to $t = 5$.

$d(5) = 4.9 \times 25 = 122.5$ m and $d(3) = 44.1$ m. Average $= \dfrac{122.5 - 44.1}{5 - 3} = \dfrac{78.4}{2} = 39.2$
m/s. The pattern agrees: $4.9 \times (3 + 5) = 39.2$. ✓

**2. A growing plant.** A sunflower's height was measured every 10 days.

| Day | 0 | 10 | 20 | 30 | 40 |
| --- | --- | --- | --- | --- | --- |
| Height (cm) | 8 | 20 | 56 | 120 | 164 |

Find the average growth rate from day 0 to day 40, and from day 20 to day 30.

- Day 0 to 40: $\dfrac{164 - 8}{40} = \dfrac{156}{40} = 3.9$ cm per day.
- Day 20 to 30: $\dfrac{120 - 56}{10} = \dfrac{64}{10} = 6.4$ cm per day.

The plant's fastest stretch grew much faster than its overall average. A single average hides the story.

**3. A thrown ball.** A ball thrown straight up has height $h(t) = 20t - 5t^2$ metres (roughly, on Earth). Find the
average rate of change of height from 0 to 1 s, from 1 to 2 s, from 2 to 3 s, and from 0 to 4 s.

- $h(0) = 0$, $h(1) = 15$, $h(2) = 20$, $h(3) = 15$, $h(4) = 0$.
- 0 to 1: $15 \div 1 = 15$ m/s. 1 to 2: $5$ m/s. 2 to 3: $-5$ m/s. 0 to 4: $(0 - 0) \div 4 = 0$ m/s.

Going up, the ball slows (15, then 5); coming down, the rate is negative. Over the whole flight the average is 0
because it ends where it began. A zero average does not mean it never moved.

**4. A growing square.** A square's side $s$ grows from 3 cm to 5 cm. How fast does its area $A = s^2$ change, on
average, per centimetre of side?

$\dfrac{25 - 9}{5 - 3} = \dfrac{16}{2} = 8$ cm² per cm. The picture proof gives the same: $3 + 5 = 8$.

## Try it

1. For the stone, $d(t) = 4.9t^2$: find the average speed from 0 to 3 s and from 2 to 4 s.
2. Use the pattern $4.9(a + b)$ to find the stone's average speed from 1.5 s to 2.5 s. Check it the long way.
3. A car's distance from a junction is 0 m at 0 s, 12 m at 2 s, 48 m at 4 s and 108 m at 6 s. Find the average
   speed for each 2-second interval. Is the car speeding up?
4. Temperatures on a spring day: 6 °C at 6:00, 9 °C at 9:00, 17 °C at 12:00, 19 °C at 15:00, 14 °C at 18:00.
   Which 3-hour interval had the biggest average rate of change? The most negative?
5. For $f(x) = x^2$, find the average rate of change from $x = 4$ to $x = 4.5$, and from $x = 4$ to $x = 4.1$. What
   number do the answers seem to approach?
6. For the ball $h(t) = 20t - 5t^2$, find the average rate of change from 1 to 3 s. Explain the answer from the
   story.
7. A secant line on a distance-time graph joins (2 s, 10 m) and (6 s, 70 m). Describe a steady motion that would
   arrive at the same place at the same time.
8. Use the square picture to work out $53^2 - 47^2$ in your head.

??? note "Answers"
    1. 0 to 3: $44.1 \div 3 = 14.7$ m/s. 2 to 4: $(78.4 - 19.6) \div 2 = 58.8 \div 2 = 29.4$ m/s. (Pattern:
       $4.9 \times 3 = 14.7$ and $4.9 \times 6 = 29.4$. ✓)
    2. $4.9 \times (1.5 + 2.5) = 4.9 \times 4 = 19.6$ m/s. Long way: $d(2.5) = 4.9 \times 6.25 = 30.625$ and
       $d(1.5) = 4.9 \times 2.25 = 11.025$; $(30.625 - 11.025) \div 1 = 19.6$ m/s. ✓
    3. 0 to 2: $12 \div 2 = 6$ m/s. 2 to 4: $36 \div 2 = 18$ m/s. 4 to 6: $60 \div 2 = 30$ m/s. Yes, the average
       speeds keep growing, so it is speeding up (by 12 m/s every 2 seconds).
    4. 6 to 9: $+1$ °C/h. 9 to 12: $+8 \div 3 \approx +2.67$ °C/h (the biggest). 12 to 15: $+2 \div 3 \approx +0.67$ °C/h. 15 to 18: $-5 \div 3 \approx -1.67$ °C/h (the most negative).
    5. $(20.25 - 16) \div 0.5 = 4.25 \div 0.5 = 8.5$. $(16.81 - 16) \div 0.1 = 0.81 \div 0.1 = 8.1$. They seem to
       approach **8**. (The picture pattern says the average is $4 + b$, which gets close to $4 + 4 = 8$ as $b$ gets
       close to 4. That is level 6's big idea.)
    6. $h(3) = 60 - 45 = 15$ and $h(1) = 15$, so the average is $0 \div 2 = 0$ m/s. The ball rose from 15 m to 20 m
       and fell back to 15 m: the same height at both ends.
    7. Slope $= (70 - 10) \div (6 - 2) = 60 \div 4 = 15$ m/s. Something passing the 10 m mark at 2 s and moving at a
       steady 15 m/s would be at the 70 m mark at 6 s.
    8. $53^2 - 47^2 = (53 - 47)(53 + 47) = 6 \times 100 = 600$.

## Common mistake

**Averaging the speeds instead of using the secant.** The stone's speed is 0 at the start and 19.6 m/s at $t = 2$. For
this special stone, the average of those two happens to be right (9.8 m/s). But for most motions, adding the start
and end speeds and halving gives the wrong answer (remember the level 3 trip at 30 and 60 km/h, which averaged 40).
The safe method is always the same: **total change in distance divided by total change in time**.

**Forgetting to say the interval.** "The average speed was 14.7 m/s" is only true from 1 to 2 seconds (or from 0 to
3). Different intervals give different averages on a curve.

## Where it leads

- Back: [Positive, negative, zero and changing rates](02-sign-of-slope.md) · Next: [Acceleration](04-acceleration.md).
- [Level 5 page](index.md) · [Change and motion topic page](../index.md)
- Average speed for a trip with stops: [level 3](../level-3/index.md).
- Making the interval tiny to find the speed at one instant: [Shrinking the interval](../level-6/02-shrinking-interval.md)
  in level 6.
- Functions and function notation: [Functions](../../algebra/level-7/04-functions.md); the $t^2$ curve is a parabola,
  studied in [Quadratic relations](../../algebra/level-7/01-quadratic-relations.md).
- On the U of T shelf, the average rate of change becomes the difference quotient:
  [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md).
