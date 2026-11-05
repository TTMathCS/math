---
title: "Slope means rate"
---

# Slope means rate

*Change and motion · level 5, lesson 1 of 6*

## A question to start

Two friends, Ana and Ben, ride the same bike trip together and each draws a distance-time graph of it at home. Ana's
line is steep, almost like a wall. Ben's line is gentle, like a ramp for a wheelchair. They argue: Ana says her graph
shows a faster ride.

But it was the **same** ride, at the same speed. How can one ride make a steep line and a gentle line? And if the
look of a line can fool you, what number about the line tells the truth?

The answer is the **slope**, measured as a number **with units**. By the end of this lesson you will see that the
slope of a graph is not just "how steep it looks": it is a **rate**, like a speed or a price, and it does not care
how the graph was drawn.

## The idea

### Slope, quickly

You may already know the slope of a line from [Geometry](../../geometry/level-6/06-slope-line-equation.md). Pick two
points on the line. Going from the first point to the second:

- the **run** is how far you move **across** (the change in the across quantity),
- the **rise** is how far you move **up** (the change in the up quantity).

The **slope** is

$$\text{slope} = \frac{\text{rise}}{\text{run}}.$$

In level 4 you met the **rate of change**: change in output divided by change in input. Look closely: that is the
same fraction. The rise **is** the change in output, and the run **is** the change in input. So:

**On any graph, the slope of a straight line is the rate of change of the up quantity compared with the across
quantity.**

This lesson is about what that sentence means in real stories.

### On a distance-time graph, slope is speed

Here is a cyclist riding at a steady pace. Time (in seconds) goes across; distance from the start (in metres) goes up.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Distance-time graph of a cyclist: a straight line from 0 metres at 0 seconds to 50 metres at 10 seconds. Between 2 seconds and 6 seconds a run of 4 seconds and a rise of 20 metres are marked.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="52" x2="380" y2="52"/><line x1="60" y1="84" x2="380" y2="84"/><line x1="60" y1="116" x2="380" y2="116"/><line x1="60" y1="148" x2="380" y2="148"/>
    <line x1="124" y1="20" x2="124" y2="180"/><line x1="188" y1="20" x2="188" y2="180"/><line x1="252" y1="20" x2="252" y2="180"/><line x1="316" y1="20" x2="316" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="380" y2="20" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="124" y1="148" x2="252" y2="148" stroke="#eea66f" stroke-width="3" stroke-dasharray="6 4"/>
  <line x1="252" y1="148" x2="252" y2="84" stroke="#7ccf9a" stroke-width="3" stroke-dasharray="6 4"/>
  <circle cx="124" cy="148" r="4.5" fill="currentColor"/><circle cx="252" cy="84" r="4.5" fill="currentColor"/>
  <g font-size="12" fill="currentColor">
    <text x="160" y="166">run = 4 s</text><text x="258" y="122">rise = 20 m</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="124" y="196">2</text><text x="188" y="196">4</text><text x="252" y="196">6</text><text x="316" y="196">8</text><text x="380" y="196">10</text>
    <text x="220" y="211">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="152">10</text><text x="54" y="120">20</text><text x="54" y="88">30</text><text x="54" y="56">40</text><text x="54" y="24">50 m</text>
  </g>
</svg>
</div>

From 2 seconds to 6 seconds, the run is $6 - 2 = 4$ seconds and the rise is $30 - 10 = 20$ metres. So

$$\text{slope} = \frac{20 \text{ m}}{4 \text{ s}} = 5 \text{ m/s}.$$

Why is that the speed? Read the rise and the run in words. The rise is **how far the cyclist went**. The run is **how
long it took**. Rise over run is distance over time, and distance over time is exactly what speed means. Nothing new
was invented: the slope is the speed because the two fractions are the same fraction.

### Slope has units

Notice that the answer was not "5". It was "5 metres per second". The units of the slope always come from the axes:

$$\text{units of slope} = \frac{\text{units going up}}{\text{units going across}} = \text{(up unit) per (across unit)}.$$

| Graph (up against across) | Units of slope | What the slope means |
| --- | --- | --- |
| distance (km) against time (h) | km per hour | speed |
| cost (dollars) against items bought | dollars per item | price of one item |
| water in a tank (L) against time (min) | litres per minute | flow rate |
| height of a plant (cm) against days | cm per day | growth rate |
| fuel used (L) against distance (km) | litres per km | fuel use |

A slope without units is like a price without "dollars": you cannot tell what it means. Always write them.

### On a cost graph, slope is the price per item

At a fair you pay 4 dollars to get in, then 2 dollars for each ride. Here is the total cost against the number of
rides.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Cost graph at a fair: a straight line starting at 4 dollars for 0 rides and rising to 20 dollars for 8 rides. Between 2 rides and 6 rides a run of 4 rides and a rise of 8 dollars are marked.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="60" x2="380" y2="60"/><line x1="60" y1="100" x2="380" y2="100"/><line x1="60" y1="140" x2="380" y2="140"/>
    <line x1="140" y1="20" x2="140" y2="180"/><line x1="220" y1="20" x2="220" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="148" x2="380" y2="20" stroke="#eea66f" stroke-width="4"/>
  <line x1="140" y1="116" x2="300" y2="116" stroke="#9cc9ea" stroke-width="3" stroke-dasharray="6 4"/>
  <line x1="300" y1="116" x2="300" y2="52" stroke="#7ccf9a" stroke-width="3" stroke-dasharray="6 4"/>
  <circle cx="60" cy="148" r="4.5" fill="currentColor"/><circle cx="140" cy="116" r="4" fill="currentColor"/><circle cx="300" cy="52" r="4" fill="currentColor"/>
  <g font-size="12" fill="currentColor">
    <text x="190" y="132">run = 4 rides</text><text x="306" y="90">rise = 8 dollars</text><text x="68" y="166">start: 4 dollars</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="140" y="196">2</text><text x="220" y="196">4</text><text x="300" y="196">6</text><text x="380" y="196">8</text>
    <text x="220" y="211">number of rides</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">5</text><text x="54" y="104">10</text><text x="54" y="64">15</text><text x="54" y="24">20</text>
  </g>
</svg>
</div>

From 2 rides (8 dollars) to 6 rides (16 dollars), the run is 4 rides and the rise is 8 dollars, so the slope is
$8 \div 4 = 2$ dollars per ride. Of course: each extra ride adds 2 dollars. The slope tells you the **price of one
more**.

The 4 dollar entry fee is a different kind of number. It is where the line **starts**, on the up axis, when the
across quantity is 0. That starting value is called the **intercept** (more on it in
[Algebra](../../algebra/level-5/04-linear-relations.md)). The intercept moves the line up or down; the slope tilts
it. In level 4 you wrote rules like "cost = start + rate × number"; now you can see both parts in the picture.

### Why every pair of points gives the same slope

On a straight line it does not matter which two points you choose. From 0 to 10 seconds, the cyclist's run is 10 s
and the rise is 50 m: $50 \div 10 = 5$ m/s again. Why must that be?

Draw the little rise-and-run triangle for the points at 2 s and 6 s, and the big triangle for 0 s and 10 s. Both
triangles have the same angles, because they sit under the same straight line. Triangles with the same angles are
the same shape, one just a zoomed copy of the other (these are **similar** triangles, from
[Geometry](../../geometry/index.md)). Zooming multiplies the rise and the run by the same number, so the fraction rise
over run does not change. Here, the big triangle is $2.5$ times the small one: $4 \times 2.5 = 10$ and
$20 \times 2.5 = 50$.

That is the deep reason a straight line has **one** slope, and so **one** rate. Steady change and a straight line
are the same thing.

### The answer to Ana and Ben

Ana squeezed her time axis: 1 centimetre of paper for every 10 seconds. Ben stretched his: 1 centimetre for every
second. On Ana's paper the line climbs sharply; on Ben's it creeps. But if each of them reads two points and works
out rise over run **using the numbers on the axes**, both get the same speed with the same units. The look of a line
depends on the drawing; the slope with units depends only on the ride.

So never compare steepness by eye between graphs with different scales. Compare the numbers.

<figure class="play" data-play="graph" data-form="line"><span class="ai-tag">AI-created</span><figcaption><b>Slope is rate.</b> Up m for every 1 across, wherever you look on the line.</figcaption></figure>

## Worked examples

**1. A runner's speed.** A runner's distance-time graph is a straight line through (0 s, 0 m) and (40 s, 200 m).
Find her speed in m/s and in km/h.

1. Run $= 40 - 0 = 40$ s, rise $= 200 - 0 = 200$ m.
2. Slope $= 200 \div 40 = 5$ m/s.
3. In km/h: in one hour (3600 s) she would go $5 \times 3600 = 18\,000$ m, which is 18 km. So **18 km/h**.

A useful shortcut: to change m/s to km/h, multiply by 3.6 (because $3600 \div 1000 = 3.6$).

**2. A phone plan.** A plan costs 15 dollars a month plus a charge for each gigabyte (GB) of data. The cost line goes
through (2 GB, 21 dollars) and (7 GB, 36 dollars). Find the price per GB, and check the 15 dollar start.

1. Run $= 7 - 2 = 5$ GB. Rise $= 36 - 21 = 15$ dollars.
2. Slope $= 15 \div 5 = 3$ dollars per GB.
3. Check: at 0 GB the cost should be $21 - 2 \times 3 = 15$ dollars. Correct.

**3. A filling tank.** A tank has 120 litres at 9:00 and 300 litres at 9:15, filling steadily. What is the flow rate,
and when will it hold 500 litres?

1. Run $= 15$ min, rise $= 300 - 120 = 180$ L. Slope $= 180 \div 15 = 12$ litres per minute.
2. From 300 L to 500 L is 200 more litres. At 12 L/min that takes $200 \div 12 = 16\frac{2}{3}$ minutes, which is
   16 minutes 40 seconds.
3. So the tank holds 500 L at about **9:31:40**.

**4. Same ride, two scales.** Ana's graph has the points (10 s, 50 m) and (30 s, 150 m). Ben's has (12 s, 60 m) and
(20 s, 100 m). Did they draw the same speed?

Ana: $(150 - 50) \div (30 - 10) = 100 \div 20 = 5$ m/s. Ben: $(100 - 60) \div (20 - 12) = 40 \div 8 = 5$ m/s.
**Yes**, both show 5 m/s, however steep the lines look on paper.

**5. Choosing good points.** On a graph, a line passes close to (1, 3.2) and exactly through grid corners at (0, 2)
and (5, 8). Which points should you use? The grid corners: they can be read exactly. Slope $= (8 - 2) \div (5 - 0) = 6 \div 5 = 1.2$. Points far apart also make reading errors matter less.

## Try it

1. A distance-time line goes through (0 s, 0 m) and (8 s, 24 m). What is the speed?
2. What are the units of the slope of a graph of (a) temperature in °C against time in hours; (b) money saved in
   dollars against weeks; (c) height climbed in metres against distance walked in metres?
3. A cost line goes through (3 notebooks, 7.50 dollars) and (8 notebooks, 20 dollars). What is the price of one
   notebook? Is there a starting fee?
4. A car's distance-time line goes through (1 h, 90 km) and (3.5 h, 290 km). Find its speed in km/h and in m/s
   (to 1 decimal place).
5. A garden hose fills a paddling pool. The graph of water (L) against time (min) goes through (2, 30) and (10, 110).
   Find the flow rate. How much water was in the pool at time 0?
6. On one graph, 1 cm across means 1 hour and 1 cm up means 10 km. On another, 1 cm across means 1 hour and 1 cm up
   means 50 km. A car going 60 km/h is drawn on both. On which one does its line look steeper, and is the slope
   (with units) different?
7. Explain, using similar triangles, why the slope of a straight line comes out the same whichever two points you
   use.
8. Taxi A charges 3 dollars plus 1.80 dollars per km. Taxi B charges 6 dollars plus 1.50 dollars per km. Which line
   is steeper? For which trip lengths is B cheaper?

??? note "Answers"
    1. $24 \div 8 = 3$ m/s.
    2. (a) degrees Celsius per hour; (b) dollars per week; (c) metres per metre, which is a plain number (a gradient,
       like a road sign's 10% meaning 0.1 metres up per metre across).
    3. Slope $= (20 - 7.5) \div (8 - 3) = 12.5 \div 5 = 2.50$ dollars per notebook. At 0 notebooks:
       $7.50 - 3 \times 2.50 = 0$, so there is **no** starting fee.
    4. $(290 - 90) \div (3.5 - 1) = 200 \div 2.5 = 80$ km/h. In m/s: $80 \div 3.6 = 22.2$ m/s.
    5. $(110 - 30) \div (10 - 2) = 80 \div 8 = 10$ litres per minute. At time 0: $30 - 2 \times 10 = 10$ litres
       were already in the pool.
    6. On the first graph 60 km is 6 cm up for 1 cm across; on the second it is only 1.2 cm up. It looks **steeper on
       the first**. The slope with units is the **same**, 60 km/h, on both.
    7. Any two points on the line make a right triangle with the line as its slanted side. All these triangles have
       the same angles (the line's tilt is the same everywhere), so they are similar: each is a scaled copy of the
       others. Scaling multiplies rise and run by the same number, so rise ÷ run stays the same.
    8. A is steeper (slope 1.80 dollars per km against 1.50). Cost A $= 3 + 1.8d$, cost B $= 6 + 1.5d$. They are
       equal when $3 + 1.8d = 6 + 1.5d$, so $0.3d = 3$ and $d = 10$ km. For trips **longer than 10 km**, B is
       cheaper (its smaller slope catches up with its higher start). For example at 20 km: A costs 39 dollars,
       B costs 36 dollars.

## Common mistake

**Judging speed by how steep a line looks.** Steepness on paper depends on the scales of the axes. Two graphs can
show the same speed with very different-looking lines. Always work out rise over run using the numbers on the axes.

**Counting grid squares instead of reading the axes.** If one square across is 5 seconds and one square up is 10
metres, then "2 squares up for 1 square across" is $20 \div 5 = 4$ m/s, not 2. Turn squares into real amounts first.

## Where it leads

- Before this: [Level 4: rate of change](../level-4/index.md), where rates came from tables.
- Next: [Positive, negative, zero and changing rates](02-sign-of-slope.md): what the sign of a slope says in a story.
- [Level 5 page](index.md) · [Change and motion topic page](../index.md)
- The slope formula and the equation of a line: [Slope and the equation of a line](../../geometry/level-6/06-slope-line-equation.md)
  in Geometry, and [Linear relations](../../algebra/level-5/04-linear-relations.md) in Algebra.
- Speed as distance over time, with unit changes: [Speed as a rate](../../ratio/level-3/05-speed-as-rate.md) in Ratio.
- Slopes from data that do not lie exactly on a line: [Line of best fit](../../statistics/level-6/03-line-best-fit.md).
