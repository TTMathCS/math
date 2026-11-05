---
title: "Where is change fastest?"
---

# Where is change fastest?

*Change and motion · level 6, lesson 6 of 6*

## A question to start

A new playground game spreads through a school of 1000 students. On day 0, 15 students play it. Each day, players
teach it to friends. Here is how many students know the game:

| Day | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Students who know | 15 | 30 | 59 | 111 | 200 | 333 | 500 | 667 | 800 | 889 | 941 | 970 | 985 |

At first it spreads slowly (few players to teach it), and at the end it spreads slowly too (almost everyone already
knows). Somewhere in the middle it spreads fastest. Where exactly, and why there?

And a second question. A ball is thrown up and comes back down. At the very top, how fast is its height changing?

## The idea

### Finding the fastest change in a table

The number of **new** students each day is the change from one day to the next:

| Day to day | 0-1 | 1-2 | 2-3 | 3-4 | 4-5 | 5-6 | 6-7 | 7-8 | 8-9 | 9-10 | 10-11 | 11-12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| New students | 15 | 29 | 52 | 89 | 133 | 167 | 167 | 133 | 89 | 52 | 29 | 15 |

The daily growth rises, peaks at 167 on the days either side of day 6, then falls in a mirror image. The game spreads
fastest at **day 6**, when exactly **500** students, half the school, know it. The central estimate at day 6 is
$(667 - 333) \div 2 = 167$ students per day (and a careful calculation gives about 173 per day at that instant).

### The S-shaped curve

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="An S-shaped curve of students who know the game, from 15 on day 0 to 985 on day 12. It is flat at first, steepest at day 6 where it passes 500, then flattens out near 1000. The tangent at day 6 is drawn.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="384" y2="20"/><line x1="60" y1="60" x2="384" y2="60"/><line x1="60" y1="100" x2="384" y2="100"/><line x1="60" y1="140" x2="384" y2="140"/>
    <line x1="114" y1="20" x2="114" y2="180"/><line x1="168" y1="20" x2="168" y2="180"/><line x1="222" y1="20" x2="222" y2="180"/><line x1="276" y1="20" x2="276" y2="180"/><line x1="330" y1="20" x2="330" y2="180"/><line x1="384" y1="20" x2="384" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="394" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60.0,177.5 66.8,177.1 73.5,176.5 80.2,175.9 87.0,175.2 93.8,174.3 100.5,173.2 107.2,172.0 114.0,170.6 120.8,168.9 127.5,167.0 134.2,164.8 141.0,162.2 147.8,159.3 154.5,156.0 161.2,152.2 168.0,148.0 174.8,143.3 181.5,138.2 188.2,132.6 195.0,126.7 201.8,120.3 208.5,113.7 215.2,106.9 222.0,100.0 228.8,93.1 235.5,86.3 242.2,79.7 249.0,73.3 255.8,67.4 262.5,61.8 269.2,56.7 276.0,52.0 282.8,47.8 289.5,44.0 296.2,40.7 303.0,37.8 309.8,35.2 316.5,33.0 323.2,31.1 330.0,29.4 336.8,28.0 343.5,26.8 350.2,25.7 357.0,24.8 363.8,24.1 370.5,23.5 377.2,22.9 384.0,22.5" fill="none" stroke="#9cc9ea" stroke-width="3.5"/>
  <line x1="176.1" y1="147.1" x2="267.9" y2="52.9" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="222" cy="100" r="4.5" fill="currentColor"/>
  <g font-size="12" fill="currentColor">
    <text x="232" y="112">steepest: day 6, 500 know it</text>
    <text x="70" y="160">slow start</text><text x="300" y="56">slow finish</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="114" y="196">2</text><text x="168" y="196">4</text><text x="222" y="196">6</text><text x="276" y="196">8</text><text x="330" y="196">10</text><text x="384" y="196">12</text>
    <text x="222" y="211">day</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">250</text><text x="54" y="104">500</text><text x="54" y="64">750</text><text x="54" y="24">1000</text>
  </g>
</svg>
</div>

A curve like this is called an **S-curve** (or a **logistic** curve). It turns up whenever growth starts out
exponential but runs out of room: a game or a rumour in a school, a new kind of phone spreading through a country,
yeast in a jar of sugar, a sunflower approaching its full height.

Before day 6 the curve gets **steeper** and steeper; after day 6 it gets **flatter**. The point where it switches from
"getting steeper" to "getting flatter" is where the rate of change is greatest. It has a name: the **point of
inflection**.

### Why halfway?

How many new students learn the game on a day depends on two things:

- how many students already **know** it (they do the teaching), and
- how many **don't** know it yet (only they can learn).

If few know it, there are few teachers. If almost everyone knows it, there are few left to learn. In this model the
rate is proportional to the **product** of the two:

$$\text{rate} \approx 0.000693 \times (\text{know}) \times (\text{don't know}).$$

The two numbers always add up to 1000. When is their product biggest?

| Know | 100 | 200 | 300 | 400 | 500 | 600 | 700 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Don't know | 900 | 800 | 700 | 600 | 500 | 400 | 300 |
| Product | 90 000 | 160 000 | 210 000 | 240 000 | 250 000 | 240 000 | 210 000 |

The product is biggest when the two are equal, 500 and 500. Here is why, with a picture: think of the two numbers as
the sides of a rectangle with a fixed perimeter. Moving from a square to a rectangle that is $d$ longer one way and $d$
shorter the other changes the area from $500 \times 500$ to $(500 + d)(500 - d) = 250\,000 - d^2$. The $d^2$ is always
taken away, so the square wins. (Do you recognise $(a + b)(a - b) = a^2 - b^2$ from the picture proof in
[level 5](../level-5/03-average-rate-curve.md)?)

So the game spreads fastest when **half** the school knows it, and the fastest rate is about
$0.000693 \times 500 \times 500 \approx 173$ students per day. At the start, while "don't know" is close to 1000, the
rule is nearly "rate $= 0.693 \times$ know": the exponential growth of the [last lesson](05-exponential-rates.md).

### Highest and lowest points: the rate is zero

Now the ball. Its height is $H(t) = 20t - 5t^2$ metres. In [lesson 2](02-shrinking-interval.md) you found its upward
speed is 10 m/s at $t = 1$ and $-10$ m/s at $t = 3$. The same algebra at any time $t$ gives the average over
$[t, t + h]$ as $20 - 10t - 5h$, which tends to

$$\text{rate of change of height} = 20 - 10t.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="The height of a thrown ball, a hill-shaped curve rising from 0 to 20 metres at 2 seconds and falling back to 0 at 4 seconds. Tangent lines at 1, 2 and 3 seconds: sloping up, flat at the top, and sloping down.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="52" x2="380" y2="52"/><line x1="60" y1="84" x2="380" y2="84"/><line x1="60" y1="116" x2="380" y2="116"/><line x1="60" y1="148" x2="380" y2="148"/>
    <line x1="140" y1="20" x2="140" y2="180"/><line x1="220" y1="20" x2="220" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60.0,180.0 68.0,167.5 76.0,155.7 84.0,144.5 92.0,133.9 100.0,124.0 108.0,114.7 116.0,106.1 124.0,98.1 132.0,90.7 140.0,84.0 148.0,77.9 156.0,72.5 164.0,67.7 172.0,63.5 180.0,60.0 188.0,57.1 196.0,54.9 204.0,53.3 212.0,52.3 220.0,52.0 228.0,52.3 236.0,53.3 244.0,54.9 252.0,57.1 260.0,60.0 268.0,63.5 276.0,67.7 284.0,72.5 292.0,77.9 300.0,84.0 308.0,90.7 316.0,98.1 324.0,106.1 332.0,114.7 340.0,124.0 348.0,133.9 356.0,144.5 364.0,155.7 372.0,167.5 380.0,180.0" fill="none" stroke="#9cc9ea" stroke-width="3.5"/>
  <line x1="92.0" y1="122.4" x2="188.0" y2="45.6" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="172.0" y1="52.0" x2="268.0" y2="52.0" stroke="#eea66f" stroke-width="3"/>
  <line x1="252.0" y1="45.6" x2="348.0" y2="122.4" stroke="#7ccf9a" stroke-width="2.5"/>
  <g fill="currentColor"><circle cx="140" cy="84" r="4"/><circle cx="220" cy="52" r="4"/><circle cx="300" cy="84" r="4"/></g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="110" y="62">+10 m/s</text><text x="220" y="40">0 m/s</text><text x="330" y="62">−10 m/s</text>
    <text x="60" y="196">0</text><text x="140" y="196">1</text><text x="220" y="196">2</text><text x="300" y="196">3</text><text x="380" y="196">4</text>
    <text x="220" y="211">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="120">10</text><text x="54" y="56">20 m</text>
  </g>
</svg>
</div>

| Time (s) | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Height (m) | 0 | 15 | 20 | 15 | 0 |
| Rate of change of height (m/s) | 20 | 10 | 0 | $-10$ | $-20$ |

The rate is **zero** at $t = 2$, exactly at the top, where the height is 20 m. The tangent there is **flat**.

Why must it be zero at the top? Just before the top the ball is still rising, so the rate is positive. Just after,
it is falling, so the rate is negative. The rate changes smoothly (here it is $20 - 10t$, a straight line), and to
go from positive to negative without jumping it has to pass through zero. It does that exactly at the top. If the rate
at some point were positive, the curve would still be going up there, so that point could not be the highest; if it
were negative, the curve would have been higher just before. Only a rate of zero is left.

The same is true at a **lowest** point of a smooth curve: going down before, up after, zero in between. So:

**At the highest or lowest point of a smooth curve, the rate of change is zero and the tangent is flat.**

This gives a powerful way to find the biggest or smallest value of something: look for where its rate of change is
zero. That idea, called **optimization**, is one of the most useful things calculus does (much more in
[level 8](../level-8/index.md)).

### Two warnings

- **Flat does not always mean top or bottom.** The curve $y = x^3$ has rate 0 at $x = 0$ (the average over $[0, h]$ is
  $h^3 \div h = h^2$, which tends to 0). But the curve keeps going up on both sides; it just levels off for an instant.
  So after finding a zero rate, check what happens on each side.
- **A corner can be a top with no tangent at all.** A ball bouncing on the floor has its lowest points at sharp
  corners, where the rate jumps from negative to positive without passing through zero. Zero rates find the smooth
  tops and bottoms; corners and endpoints must be checked separately.

<figure class="play" data-play="graph" data-form="sine"><span class="ai-tag">AI-created</span><figcaption><b>Where is it changing fastest?</b> A sine wave is steepest as it crosses its centre line.</figcaption></figure>

## Worked examples

**1. The highest point of a throw.** A ball's height is $H(t) = 30t - 5t^2$ m. When is it highest, and how high?

The same algebra as before gives the rate $30 - 10t$. It is zero at $t = 3$ s. Height: $H(3) = 90 - 45 = 45$ m. Check
the sides: at $t = 2$ the rate is $+10$ (rising), at $t = 4$ it is $-10$ (falling). So 45 m is the top.

**2. The biggest field.** A farmer has 40 m of fence for a rectangular pen. If one side is $x$ m, the other is
$20 - x$, and the area is $A = x(20 - x) = 20x - x^2$. What is the biggest area?

The average rate over $[x, x + h]$ is $\dfrac{20h - 2xh - h^2}{h} = 20 - 2x - h$, which tends to $20 - 2x$. That is
zero at $x = 10$: a 10 m by 10 m square, area **100 m²**. (A 9 by 11 pen gives only 99 m².) It is the same "equal
sides win" fact as the spreading game.

**3. A daily temperature.** Temperatures on a summer day were 18 °C at 8:00, 24 at 11:00, 28 at 14:00, 27 at 15:00
and 23 at 18:00. Around when was it hottest, and what was the rate there?

The temperature was still rising fast between 11:00 and 14:00 and was already falling between 14:00 and 15:00, so the top came around 14:00. At the hottest
moment, the rate of change of temperature was **zero**: it had stopped rising and not yet started to fall.

**4. Steepest point from data.** Using the sunflower of level 5 (8, 20, 56, 120, 164 cm on days 0, 10, 20, 30, 40),
which ten days had the fastest growth?

Changes: 12, 36, 64, 44 cm. The fastest was from day 20 to day 30 (6.4 cm per day). Like the game, a sunflower's growth
is an S-curve: slow, then fast, then slow as it reaches full height. Its point of inflection is somewhere in that
stretch.

## Try it

1. From the game table, between which two days did the most students learn it? How many did on day 2 to 3?
2. Show that $450 \times 550$ is less than $500 \times 500$, using $(500 + 50)(500 - 50)$.
3. A ball's height is $H(t) = 15t - 5t^2$ m. Its rate of change of height is $15 - 10t$. When is it highest, and how
   high?
4. A stone thrown upwards on Mars has height $H(t) = 12t - 1.855t^2$ m, and its rate of change of height is
   $12 - 3.71t$. When is it highest, and how high (to 1 decimal place)?
5. 60 m of fence makes a rectangle. Find the biggest area. What shape is it?
6. Find the rate of change of $y = x^2 - 6x + 10$ by the shrinking-interval method, and the lowest point of its graph.
7. The rate of change of $y = x^3$ at $x = 0$ is 0. Is $(0, 0)$ a highest point, a lowest point, or neither? Explain.
8. For the spreading game, use rate $\approx 0.000693 \times$ know $\times$ don't know to estimate the rate when 200
   students know it. Compare with the table.

??? note "Answers"
    1. Days 5-6 and 6-7 (167 each). From day 2 to 3, 52 students learned it.
    2. $(500 + 50)(500 - 50) = 500^2 - 50^2 = 250\,000 - 2500 = 247\,500$, which is less than 250 000.
    3. $15 - 10t = 0$ at $t = 1.5$ s. Height: $22.5 - 11.25 = 11.25$ m.
    4. $12 - 3.71t = 0$ at $t = 12 \div 3.71 \approx 3.23$ s. Height: $12 \times 3.2345 - 1.855 \times 3.2345^2 \approx 38.81 - 19.41 \approx 19.4$ m. (On Earth the same throw would peak at only about 7.3 m.)
    5. Sides $x$ and $30 - x$; area $30x - x^2$; rate $30 - 2x = 0$ at $x = 15$. A 15 m by 15 m **square**, 225 m².
    6. Average over $[x, x + h]$: $\dfrac{(x + h)^2 - 6(x + h) + 10 - (x^2 - 6x + 10)}{h} = \dfrac{2xh + h^2 - 6h}{h} = 2x - 6 + h \to 2x - 6$. Zero at $x = 3$, where $y = 9 - 18 + 10 = 1$. Lowest point $(3, 1)$ (falling before,
       rising after).
    7. **Neither.** Just left of 0, $x^3$ is negative; just right, it is positive. The curve goes up through $(0, 0)$,
       only levelling off for an instant.
    8. $0.000693 \times 200 \times 800 \approx 111$ students per day. The table's central estimate at day 4 (where
       200 know it) is $(333 - 111) \div 2 = 111$. They agree.

## Common mistake

**Mixing up "biggest value" and "biggest rate".** At the top of the ball's flight the **height** is biggest and the
**rate** is zero. On the S-curve, the **rate** is biggest at the inflection point, where the amount is only halfway.
Always ask: the biggest what?

**Believing every flat point is a top or a bottom.** $y = x^3$ is flat at 0 and is neither. Check the sign of the rate
on both sides.

## Where it leads

- Back: [Rates in exponential change](05-exponential-rates.md) · Next level: [Level 7: limits and the derivative](../level-7/index.md).
- [Level 6 page](index.md) · [Change and motion topic page](../index.md)
- The highest point of a parabola by completing the square, with no calculus: [Completing the square](../../algebra/level-7/02-completing-the-square.md).
- Growth that slows as it runs out of room: [Ratio](../../ratio/index.md) and [Statistics](../../statistics/index.md).
- Maxima, minima and inflection points with derivatives: [level 8](../level-8/index.md); on the U of T shelf,
  [MAT137 Unit 6: applications of derivatives](../../../uoft/MAT137/unit06.md).
