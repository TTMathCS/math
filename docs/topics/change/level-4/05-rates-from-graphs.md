---
title: "Reading rates from graphs"
---

# Reading rates from graphs

*Change and motion · level 4, lesson 5 of 6*

## A question to start

On a spring day, the temperature climbs all morning, reaches its highest point in the early afternoon, then falls
in the evening.

At what time of day is the temperature **rising fastest**? Most people say "at the hottest time, of course". But at
the very hottest moment, the temperature is not rising at all. It has stopped climbing and is about to fall. So when
**is** it rising fastest? And when is it changing fastest of all, up or down?

A graph can answer this at a glance, if you know how to read rates from it.

## The idea

### The rate is in the steepness

In [level 3](../level-3/02-distance-time-graphs.md) you saw that a steeper distance-time graph means a faster speed.
That idea works for **every** graph against time, and for many others too:

**The steepness of a graph shows its rate of change.** Steep: changing fast. Gentle: changing slowly. Flat: not
changing. Going up: the rate is positive. Going down: the rate is negative.

### From steepness to a number

"Steep" and "gentle" are words. To get a number, pick two points on a straight piece of the graph, read their
coordinates **from the scales on the axes**, and divide, just as you did for tables in
[lesson 1](01-rate-from-table.md):

$$\text{rate of change} = \frac{\text{change in the up-axis quantity}}{\text{change in the across quantity}}.$$

The change up is often called the **rise** and the change across the **run**. So rate $=$ rise ÷ run, with units:
**up-axis units per across-axis unit**.

Here is a bike trip, as distance from home against time.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Distance from home against time for a bike trip: A rises from 0 to 15 km in the first hour, B is flat from 1 to 1.5 hours, C rises from 15 to 25 km between 1.5 and 2 hours, D falls from 25 km back to 0 between 2 and 3.5 hours">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="375" y2="20"/><line x1="60" y1="46.7" x2="375" y2="46.7"/><line x1="60" y1="73.3" x2="375" y2="73.3"/><line x1="60" y1="100" x2="375" y2="100"/><line x1="60" y1="126.7" x2="375" y2="126.7"/><line x1="60" y1="153.3" x2="375" y2="153.3"/>
    <line x1="105" y1="20" x2="105" y2="180"/><line x1="150" y1="20" x2="150" y2="180"/><line x1="195" y1="20" x2="195" y2="180"/><line x1="240" y1="20" x2="240" y2="180"/><line x1="285" y1="20" x2="285" y2="180"/><line x1="330" y1="20" x2="330" y2="180"/><line x1="375" y1="20" x2="375" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="385" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 150,100 195,100 240,46.7 375,180" fill="none" stroke="#eea66f" stroke-width="4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="150" y="196">1</text><text x="240" y="196">2</text><text x="330" y="196">3</text>
    <text x="215" y="211">time (hours)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="131">10</text><text x="54" y="77">20</text><text x="54" y="24">30 km</text>
  </g>
  <g font-size="13" fill="currentColor"><text x="95" y="128">A</text><text x="168" y="92">B</text><text x="205" y="68">C</text><text x="315" y="112">D</text></g>
</svg>
</div>

- **A:** from (0 h, 0 km) to (1 h, 15 km). Rise 15 km, run 1 h. Rate $15 \div 1 = 15$ km/h.
- **B:** flat at 15 km for half an hour. Rate 0: a rest.
- **C:** from (1.5 h, 15 km) to (2 h, 25 km). Rise 10 km, run 0.5 h. Rate $10 \div 0.5 = 20$ km/h.
- **D:** from (2 h, 25 km) to (3.5 h, 0 km). Rise $0 - 25 = -25$ km, run 1.5 h. Rate $-25 \div 1.5$, about
  $-16.7$ km/h. The minus sign means coming **back** towards home.

The fastest part is **C**, at 20 km/h. Part D is the longest line on the picture and drops the furthest, so it can
look the most dramatic, but it is spread over 1.5 hours. What matters is not how long a piece is, or how far it
climbs, but how far it climbs **for each unit across**.

### The biggest change in one hour

Now the temperature on that spring day, measured every hour from 6:00 to 18:00:

| Time | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| °C | 4 | 5 | 7 | 10 | 14 | 17 | 19 | 20 | 21 | 21 | 20 | 17 | 12 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Temperature from 6:00 to 18:00: rising slowly, then steeply between 9 and 10, levelling off at 21 degrees around 14 and 15, then falling, most steeply between 17 and 18">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="52" x2="380" y2="52"/><line x1="60" y1="84" x2="380" y2="84"/><line x1="60" y1="116" x2="380" y2="116"/><line x1="60" y1="148" x2="380" y2="148"/>
    <line x1="113.3" y1="20" x2="113.3" y2="180"/><line x1="166.7" y1="20" x2="166.7" y2="180"/><line x1="220" y1="20" x2="220" y2="180"/><line x1="273.3" y1="20" x2="273.3" y2="180"/><line x1="326.7" y1="20" x2="326.7" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60.0,154.4 86.7,148.0 113.3,135.2 140.0,116.0 166.7,90.4 193.3,71.2 220.0,58.4 246.7,52.0 273.3,45.6 300.0,45.6 326.7,52.0 353.3,71.2 380.0,103.2" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="140" y1="116" x2="166.7" y2="90.4" stroke="#eea66f" stroke-width="5"/>
  <line x1="353.3" y1="71.2" x2="380" y2="103.2" stroke="#7ccf9a" stroke-width="5"/>
  <g fill="currentColor">
    <circle cx="60" cy="154.4" r="3"/><circle cx="86.7" cy="148" r="3"/><circle cx="113.3" cy="135.2" r="3"/><circle cx="140" cy="116" r="3"/><circle cx="166.7" cy="90.4" r="3"/><circle cx="193.3" cy="71.2" r="3"/><circle cx="220" cy="58.4" r="3"/><circle cx="246.7" cy="52" r="3"/><circle cx="273.3" cy="45.6" r="3"/><circle cx="300" cy="45.6" r="3"/><circle cx="326.7" cy="52" r="3"/><circle cx="353.3" cy="71.2" r="3"/><circle cx="380" cy="103.2" r="3"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">6:00</text><text x="113.3" y="196">8:00</text><text x="166.7" y="196">10:00</text><text x="220" y="196">12:00</text><text x="273.3" y="196">14:00</text><text x="326.7" y="196">16:00</text><text x="380" y="196">18:00</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="152">5</text><text x="54" y="120">10</text><text x="54" y="88">15</text><text x="54" y="56">20</text><text x="54" y="24">25 °C</text>
  </g>
</svg>
</div>

The change in each hour is one step of the graph. List them:

| Hour | 6-7 | 7-8 | 8-9 | 9-10 | 10-11 | 11-12 | 12-13 | 13-14 | 14-15 | 15-16 | 16-17 | 17-18 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Change (°C) | +1 | +2 | +3 | +4 | +3 | +2 | +1 | +1 | 0 | −1 | −3 | −5 |

- **Rising fastest:** between 9:00 and 10:00, +4 °C in the hour (the orange piece, the steepest uphill step).
- **Changing fastest of all:** between 17:00 and 18:00, **−5** °C in the hour (the green piece). The biggest change
  can be a **fall**: compare the **sizes** of the changes, ignoring the signs, when the question is "biggest change".
- **The hottest time**, 14:00 to 15:00, is where the graph is **flat**: the rate there is 0.

So the answer to the opening puzzle: the temperature rises fastest in the **middle of the morning**, long before the
hottest time. At the top of a hill the ground is level; at the top of a graph the rate is zero. This simple fact turns
out to be one of the most useful ideas in mathematics: in [level 6](../level-6/index.md) and
[level 8](../level-8/index.md) it is how we find the biggest and smallest values of anything.

### Careful: looks can deceive

You can only compare steepness **by eye** on the same graph, or on graphs drawn with the **same scales**. If one graph
squashes its time axis, a slow change can look steep. Always turn steepness into a number with units before
comparing two different graphs. (Newspapers sometimes stretch axes on purpose to make a change look dramatic: see
[Graphs that mislead](../../statistics/level-4/06-misleading-graphs.md).)

## Worked examples

**1. A rise and run.** A straight line on a graph of distance (km) against time (h) passes through (2, 30) and
(5, 120). Rate: rise $120 - 30 = 90$ km, run $5 - 2 = 3$ h, so $90 \div 3 = 30$ km/h.

**2. A draining tank.** On a graph of water depth (cm) against time (min), a straight line goes from (0, 80) to (12, 20).
Rate: $(20 - 80) \div 12 = -60 \div 12 = -5$ cm per minute. The depth falls 5 cm every minute. If it keeps going, it
reaches 0 after another $20 \div 5 = 4$ minutes, at 16 minutes.

**3. Two graphs, two scales.** Two cyclists' distance-time graphs look **equally steep**: on each, the line goes up 2
squares for every 1 square across. On graph P each square across is 1 hour and each square up is 5 km. On graph Q each
square across is 10 minutes and each square up is 1 km.

- P: 2 squares up is 10 km in 1 hour: **10 km/h**.
- Q: 2 squares up is 2 km in 10 minutes, which is 12 km in an hour: **12 km/h**.

Same look, different speeds. The scales decide.

**4. The whole trip.** For the bike trip, what was the average speed for the whole 3.5 hours?

The rider went out 25 km and back 25 km: 50 km in all. Average speed $= 50 \div 3.5$, about **14.3 km/h**. (Careful:
the graph of distance **from home** ends at 0, but the distance **travelled** is 50 km. The average rate of change of
"distance from home" over the whole trip is $0 \div 3.5 = 0$, which says only that the rider ended where they started.)

## Try it

1. On the temperature graph, what was the average rate of change from 6:00 to 12:00?
2. In which single hour did the temperature not change at all?
3. A line on a graph of litres (L) against minutes passes through (0, 12) and (4, 2). Find the rate of change. When
   does it reach 0 litres?
4. On a graph of a plant's height (cm) against days, a straight piece goes from (10, 24) to (16, 42). Find the growth
   rate.
5. True or false: "The hottest time of the day is when the temperature is rising fastest." Explain.
6. Two graphs of savings against months look equally steep, but one has 10 dollars per square up and the other 50
   dollars per square up (same months across). Which shows faster saving?
7. On the bike trip graph, how far from home was the rider at 3 hours?
8. Challenge: from the temperature table, find the 3-hour stretch (such as 7:00 to 10:00) in which the temperature
   rose the most.

??? note "Answers"
    1. From 4 °C to 19 °C: rise 15 °C in 6 hours. $15 \div 6 = 2.5$ °C per hour.
    2. **14:00 to 15:00** (21 °C both times).
    3. Rate $(2 - 12) \div 4 = -10 \div 4 = -2.5$ litres per minute. To lose the last 2 litres takes
       $2 \div 2.5 = 0.8$ minutes more, so it is empty at **4.8 minutes**. (Or: 12 litres at 2.5 per minute,
       $12 \div 2.5 = 4.8$.)
    4. $(42 - 24) \div (16 - 10) = 18 \div 6 = 3$ cm per day.
    5. **False.** At the hottest time the temperature has stopped rising: its rate is 0. It rose fastest in the
       middle of the morning (here 9:00 to 10:00).
    6. The one with **50 dollars per square**. The same number of squares up is 5 times as much money.
    7. In part D the rider comes home at $25 \div 1.5$ km/h, about 16.7 km/h. One hour into D (at 3 hours) the rider
       has come about 16.7 km back, so is about $25 - 16.7 = 8.3$ km from home. (Or: at 3 hours, there is half an
       hour left to cover the remaining distance at 16.7 km/h, about 8.3 km.)
    8. Rises over 3 hours: 6 to 9: 6; 7 to 10: 9; **8 to 11: 10**; 9 to 12: 9; 10 to 13: 6; later ones are smaller.
       The biggest is **8:00 to 11:00**, +10 °C.

## Common mistake

**Judging steepness by length or height.** A long line that drops a long way may still be gentle if it takes a long
time. Steepness is rise **per** unit of run. Work out the rate.

**Forgetting the scales.** Counting squares is only safe if you then turn squares into real units using each axis's
scale. Two graphs with different scales cannot be compared by eye.

## Where it leads

- Back: [Linear and non-linear change](04-linear-nonlinear.md) · Next: [How fast are things?](06-how-fast.md)
- [Level 4 page](index.md) · [Change and motion topic page](../index.md)
- Reading data from line graphs: [Double bar graphs and broken-line graphs](../../statistics/level-3/06-double-bar-line.md).
- Rise over run becomes the **slope**: [Slope and the equation of a line](../../geometry/level-6/06-slope-line-equation.md)
  and [level 5](../level-5/index.md).
- Zero rate at the top of a graph, and finding the biggest and smallest values with calculus:
  [MAT137 Unit 3: Derivatives](../../../uoft/MAT137/unit03.md), at university.
