---
title: "Estimating instantaneous rates from data and graphs"
---

# Estimating instantaneous rates from data and graphs

*Change and motion · level 6, lesson 4 of 6*

## A question to start

A cup of hot cocoa sits on the table, and a thermometer reads its temperature once a minute.

| Time (min) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Temperature (°C) | 80.0 | 74.0 | 68.6 | 63.7 | 59.4 | 55.4 | 51.9 | 48.7 | 45.8 | 43.2 | 40.9 |

How fast is it cooling at **exactly** 4 minutes? There is no formula to put into the algebra of
[lesson 2](02-shrinking-interval.md), and we cannot shrink the interval below 1 minute: there are no readings in
between. Real science is full of situations like this. Is there an honest way to get a good answer?

## The idea

### Method 1: draw a tangent by eye

Plot the data and join the points with a smooth curve. Then lay a ruler against the curve at the point you care about
and turn it until it **matches the direction of the curve** there: it should touch the curve at that point and lean
neither into it nor away from it on either side. Draw the line. That is your tangent.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="The cocoa's temperature falling from 80 degrees towards 41 degrees over 10 minutes, a curve that gets flatter. A tangent line is drawn at 4 minutes, and a dashed chord joins the points at 3 and 5 minutes, almost parallel to the tangent.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="52" x2="380" y2="52"/><line x1="60" y1="84" x2="380" y2="84"/><line x1="60" y1="116" x2="380" y2="116"/><line x1="60" y1="148" x2="380" y2="148"/>
    <line x1="124" y1="20" x2="124" y2="180"/><line x1="188" y1="20" x2="188" y2="180"/><line x1="252" y1="20" x2="252" y2="180"/><line x1="316" y1="20" x2="316" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60.0,20.0 68.0,25.0 76.0,29.9 84.0,34.6 92.0,39.2 100.0,43.7 108.0,48.1 116.0,52.3 124.0,56.5 132.0,60.5 140.0,64.5 148.0,68.3 156.0,72.0 164.0,75.7 172.0,79.2 180.0,82.7 188.0,86.0 196.0,89.3 204.0,92.5 212.0,95.6 220.0,98.6 228.0,101.6 236.0,104.4 244.0,107.2 252.0,110.0 260.0,112.6 268.0,115.2 276.0,117.7 284.0,120.2 292.0,122.6 300.0,124.9 308.0,127.1 316.0,129.4 324.0,131.5 332.0,133.6 340.0,135.6 348.0,137.6 356.0,139.5 364.0,141.4 372.0,143.3 380.0,145.1" fill="none" stroke="#9cc9ea" stroke-width="3.5"/>
  <line x1="92.0" y1="46.2" x2="300.0" y2="132.5" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="156" y1="72" x2="220" y2="98.6" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="188" cy="86" r="4.5" fill="currentColor"/><circle cx="156" cy="72" r="3.5" fill="#7ccf9a" stroke="currentColor"/><circle cx="220" cy="98.6" r="3.5" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="12" fill="currentColor">
    <text x="240" y="70">curve: the cocoa</text><text x="210" y="150">tangent at 4 min</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="124" y="196">2</text><text x="188" y="196">4</text><text x="252" y="196">6</text><text x="316" y="196">8</text><text x="380" y="196">10</text>
    <text x="220" y="211">time (minutes)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">30</text><text x="54" y="152">40</text><text x="54" y="120">50</text><text x="54" y="88">60</text><text x="54" y="56">70</text><text x="54" y="24">80 °C</text>
  </g>
</svg>
</div>

(The up axis starts at 30 °C, not 0, to spread the curve out. That changes how steep things look, but not the
slopes worked out from the numbers on the axes.)

Now read **two points on your ruler line**, as far apart as you can, and work out rise over run. Do not use points
of the curve: the tangent is a different line. On this graph the tangent passes close to $(1, 72)$ and $(7.5, 45)$, so

$$\text{slope} \approx \frac{45 - 72}{7.5 - 1} = \frac{-27}{6.5} \approx -4.2 \text{ °C per minute}.$$

Drawing by eye is quick, and it works on any graph, but two people will draw slightly different lines. Expect an
answer good to about one or two figures.

### Method 2: use the numbers on each side

There are three natural ways to estimate the rate at 4 minutes from the table:

| Method | Uses | Calculation | Estimate (°C/min) |
| --- | --- | --- | --- |
| After (**forward**) | 4 and 5 min | $(55.4 - 59.4) \div 1$ | $-4.0$ |
| Before (**backward**) | 3 and 4 min | $(59.4 - 63.7) \div 1$ | $-4.3$ |
| Both sides (**central**) | 3 and 5 min | $(55.4 - 63.7) \div 2$ | $-4.15$ |

Which should you trust? A very careful calculation (using a formula that fits this cocoa, from
[level 8](../level-8/index.md)) gives a true rate at 4 minutes of $-4.15$ °C per minute to 2 decimal places. The
central estimate is spot on; the other two are off by about 0.15.

### Why the central estimate is better

Look at the picture. The cocoa cools fast at first and then more slowly, so the curve is bending. Over the minute
**after** 4, the cooling has already eased off a little, so the forward estimate is too gentle. Over the minute
**before** 4, the cooling was a little faster, so the backward estimate is too steep. The two errors lean opposite
ways, and when you use both sides together they nearly cancel.

In the picture, the dashed chord from 3 to 5 minutes runs almost exactly **parallel** to the tangent at 4 minutes.
The central estimate is the slope of that chord. (Notice: the central estimate is the average of the forward and the
backward ones, $(-4.0 + -4.3) \div 2 = -4.15$.)

For some curves the central estimate is not just good but **exact**. For the falling stone, $d = 4.9t^2$, the average
speed over any interval is $4.9 \times (a + b)$ (level 5, [lesson 3](../level-5/03-average-rate-curve.md)). For the
interval from $t - h$ to $t + h$ that is $4.9 \times 2t = 9.8t$, which is exactly the speed at $t$, whatever the size
of $h$.

### What a good estimate needs

- **Use the centre** when you have data on both sides. Use a one-sided estimate only at the very first or last
  reading, and say that it is less reliable.
- **Smaller steps are better**, if the measurements are precise. But every reading has a small error (this thermometer
  rounds to 0.1 °C). Dividing a tiny change by a tiny time can blow those errors up: with readings a second apart,
  a rounding error of 0.05 °C could change the estimate by 3 °C per minute. In practice, use the smallest step for
  which the change is still much bigger than the measuring error.
- **Say the units.** A rate of change of temperature over time is in °C per minute (or per hour, or per second).
- **Uneven steps are fine.** Always divide the change in output by the actual change in input.

## Worked examples

**1. The very first reading.** Estimate how fast the cocoa is cooling at $t = 0$.

Only "after" is possible: $(74.0 - 80.0) \div 1 = -6.0$ °C per minute. The true rate is about $-6.3$: at the start
the cooling is fastest, so the minute after is a bit gentler on average. A one-sided estimate is the best we can do,
but we should say it is probably a little too small in size.

**2. Later on.** Estimate the rate at 8 minutes.

Central: $(43.2 - 48.7) \div 2 = -5.5 \div 2 = -2.75$ °C per minute. (The careful value is $-2.72$.) The cocoa is
cooling at about two thirds of its rate at 4 minutes: it slows down as it gets closer to room temperature.

**3. The sunflower.** In level 5 a sunflower measured 8, 20, 56, 120 and 164 cm on days 0, 10, 20, 30 and 40.
Estimate its growth rate on day 20 and on day 30.

- Day 20: $(120 - 20) \div (30 - 10) = 100 \div 20 = 5$ cm per day.
- Day 30: $(164 - 56) \div (40 - 20) = 108 \div 20 = 5.4$ cm per day.

**4. Uneven data.** A town had 12 000 people in 2000, 13 100 in 2005 and 14 500 in 2012. Estimate the growth rate in
2005.

Central (over 2000 to 2012, 12 years): $(14\,500 - 12\,000) \div 12 \approx 208$ people per year. Note that 2005 is not
in the middle of this interval, so this is a rougher estimate than usual. The one-sided ones are
$(13\,100 - 12\,000) \div 5 = 220$ (before) and $(14\,500 - 13\,100) \div 7 = 200$ (after); the true rate is probably
between them.

**5. The stone, centrally.** Estimate the stone's speed at $t = 2$ using $t = 1.9$ and $t = 2.1$.

$d(1.9) = 4.9 \times 3.61 = 17.689$ and $d(2.1) = 21.609$. Central: $(21.609 - 17.689) \div 0.2 = 3.92 \div 0.2 = 19.6$
m/s: exactly right, as promised.

## Try it

1. A cyclist's distance (m) at times 0 to 6 s is: 0, 2, 7, 15, 25, 36, 48. Estimate her speed at 3 s using the
   forward, backward and central methods.
2. For the same cyclist, estimate her speed at 5 s (central) and at 0 s (the only way possible).
3. From the cocoa table, estimate the rate of cooling at 2 minutes, centrally.
4. Explain in your own words why the central estimate is usually better than the forward one on a curved graph.
5. Show that, for the stone $d = 4.9t^2$, the central estimate at $t = 3$ using $t = 2$ and $t = 4$ is exactly 29.4 m/s.
6. A plant is 30 cm tall on day 4, 34 cm on day 6 and 42 cm on day 10. Estimate the growth rate on day 6.
7. On a hand-drawn tangent you read the points $(2, 150)$ and $(10, 30)$, where across is minutes and up is litres of
   water in a tank. What is the rate, and what is happening to the tank?
8. A thermometer rounds to the nearest 0.1 °C. Two readings 1 second apart are 59.4 and 59.3. Why would it be silly
   to say "the rate is $-0.1$ °C per second, or $-6$ °C per minute" at 4 minutes, when the central estimate from
   readings a minute apart is $-4.15$?

??? note "Answers"
    1. Forward: $(25 - 15) \div 1 = 10$ m/s. Backward: $(15 - 7) \div 1 = 8$ m/s. Central: $(25 - 7) \div 2 = 9$ m/s.
    2. At 5 s: $(48 - 25) \div 2 = 11.5$ m/s. At 0 s: forward only, $(2 - 0) \div 1 = 2$ m/s (probably too high, as
       she is speeding up).
    3. $(63.7 - 74.0) \div 2 = -10.3 \div 2 = -5.15$ °C per minute.
    4. On a curve, the slope just after a point and just before it differ, one too big and one too small. Using both
       sides balances the two errors; using only one side keeps the whole error.
    5. $d(4) = 78.4$, $d(2) = 19.6$. $(78.4 - 19.6) \div 2 = 58.8 \div 2 = 29.4$ m/s, which equals $9.8 \times 3$.
    6. Central: $(42 - 30) \div (10 - 4) = 12 \div 6 = 2$ cm per day. (One-sided: $4 \div 2 = 2$ and $8 \div 4 = 2$:
       all agree, so the growth looks steady here.)
    7. $(30 - 150) \div (10 - 2) = -120 \div 8 = -15$ litres per minute. The tank is **draining** at about 15 litres
       a minute at that moment.
    8. Each reading could be off by up to 0.05 °C, so the true change in that second could be anywhere from 0 to
       about 0.2 °C. Over one second the rounding error is as big as the change itself. Over 2 minutes the change
       (8.3 °C) is far bigger than the rounding error, so the estimate is much more trustworthy.

## Common mistake

**Using two points of the curve instead of two points of the tangent.** That gives a secant slope (an average), not
the rate at the point. After drawing the tangent, read points **on your line**, far apart.

**Forgetting the scale of the axes.** On the cocoa graph, one square up is 10 °C and one square across is 2 minutes.
Count squares only after turning them into real amounts.

**Trusting tiny steps too much.** Shrinking the interval is perfect in algebra, but with real measurements, rounding
errors grow when you divide by a tiny time.

## Where it leads

- Back: [From secant to tangent](03-secant-tangent.md) · Next: [Rates in exponential change](05-exponential-rates.md),
  where the cocoa reappears.
- [Level 6 page](index.md) · [Change and motion topic page](../index.md)
- Data, error and measurement: [Statistics](../../statistics/index.md), [Measurement](../../measurement/index.md).
- How computers estimate rates from data (numerical methods) goes far beyond school; the exact theory starts with the
  derivative in [level 7](../level-7/index.md).
- On the U of T shelf: [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md).
