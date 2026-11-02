---
title: "Build: Slopes and rates of change"
---

# Build: Slopes and rates of change

*Change and motion · step 3 of 5*

## A question to start

Some road signs show a percentage, like **10%**, next to a picture of a hill. It means the road rises 10 metres for
every 100 metres you travel across the map. If a road keeps up a 10% climb for 2.5 kilometres across the map, how
much higher do you end up?

That percentage is a **slope**. Slopes measure steepness, and steepness, it turns out, is the same thing as speed,
price per item, or any other **rate of change**. On this page they all become one idea with one formula.

## The idea

### Slope: rise over run

Pick two points on a straight line. Going from the first to the second, the **run** is how far you move across (the
change in $x$) and the **rise** is how far you move up (the change in $y$). The **slope**, usually called $m$, is

$$m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="A straight line through points (2, 5) and (6, 13). A run of 4 across and a rise of 8 up are marked between them.">
  <line x1="40" y1="180" x2="400" y2="180" stroke="currentColor" stroke-width="1.2"/>
  <line x1="60" y1="190" x2="60" y2="10" stroke="currentColor" stroke-width="1.2"/>
  <line x1="60" y1="170" x2="370" y2="15" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="140" y1="130" x2="300" y2="130" stroke="#eea66f" stroke-width="3" stroke-dasharray="6 4"/>
  <line x1="300" y1="130" x2="300" y2="50" stroke="#7ccf9a" stroke-width="3" stroke-dasharray="6 4"/>
  <circle cx="140" cy="130" r="5" fill="currentColor"/>
  <circle cx="300" cy="50" r="5" fill="currentColor"/>
  <g font-size="13" fill="currentColor">
    <text x="90" y="124">(2, 5)</text><text x="250" y="42">(6, 13)</text>
    <text x="190" y="150">run = 4</text><text x="308" y="95">rise = 8</text>
    <text x="392" y="196">x</text><text x="44" y="18">y</text>
  </g>
</svg>
</div>

For the line in the picture, from $(2, 5)$ to $(6, 13)$: run $= 6 - 2 = 4$, rise $= 13 - 5 = 8$, so
$m = \dfrac{8}{4} = 2$. Every 1 step across, the line goes up 2.

The magic of a straight line is that **any two points give the same slope**. That is what "straight" means.

### What the sign tells you

- $m > 0$: the line goes **up** from left to right.
- $m < 0$: the line goes **down** (the rise is negative).
- $m = 0$: the line is **flat** (horizontal).
- A vertical line has run 0, and you cannot divide by 0, so its slope is **undefined**.

The bigger the number (ignoring the sign), the steeper the line.

### The equation of a line

A line with slope $m$ that crosses the $y$-axis at height $b$ has the equation

$$y = mx + b.$$

The number $b$ is the **$y$-intercept**: the value of $y$ when $x = 0$. Starting at $b$, each step of 1 in $x$ adds
$m$ to $y$. This is just an arithmetic sequence (from [Patterns and sequences](../patterns/03-build.md)) drawn as a
line: constant steps give constant slope.

### Slope as a rate of change

When $x$ and $y$ are real quantities with units, the slope has units too: **units of $y$ per unit of $x$**. That
is why it is called a **rate of change**: how much $y$ changes for each 1 unit of change in $x$.

- On a **distance-time graph**, slope is metres per second: the **speed**.
- On a graph of **cost against litres** of fuel, slope is dollars per litre: the **price**.
- On a graph of **water in a tank against minutes**, slope is litres per minute: the **flow rate**. A negative
  slope means the tank is emptying.

### Curved graphs: the average rate of change

For a curve, the steepness changes from place to place, so there is no single slope. But we can still join two
points on the curve with a straight line, called a **secant line**, and find its slope. That is the **average rate
of change** of $f$ between $x = a$ and $x = b$:

$$\text{average rate of change} = \frac{f(b) - f(a)}{b - a}.$$

On a distance-time graph, this is exactly the average speed from the Explore step: change in distance divided by
change in time.

## Worked examples

**1. The hill.** A 10% slope is $m = \dfrac{10}{100} = 0.1$. Across 2.5 km, which is 2500 m, the rise is
$0.1 \times 2500 = 250$ m. You climb **250 metres**.

**2. The line through two points.** Find the equation of the line through $(2, 5)$ and $(6, 13)$.

1. Slope: $m = \dfrac{13 - 5}{6 - 2} = \dfrac{8}{4} = 2$.
2. So $y = 2x + b$. Put in one point, $(2, 5)$: $5 = 2 \times 2 + b$, so $b = 1$.
3. The line is $y = 2x + 1$. Check with the other point: $2 \times 6 + 1 = 13$. Correct.

**3. A ball thrown up.** A ball's height after $t$ seconds is $h(t) = 20t - 5t^2$ metres. (This is roughly right on
Earth, ignoring air.) Find the average rate of change of height from $t = 0$ to $t = 1$, and from $t = 1$ to
$t = 2$.

- $h(0) = 0$, $h(1) = 20 - 5 = 15$, $h(2) = 40 - 20 = 20$.
- From 0 to 1: $\dfrac{15 - 0}{1 - 0} = 15$ m/s.
- From 1 to 2: $\dfrac{20 - 15}{2 - 1} = 5$ m/s.

The average upward speed dropped from 15 m/s to 5 m/s. The ball is **slowing down** as it rises, just as you would
expect. On a curved graph the average rate of change depends on **which** interval you choose.

## Try it

1. Find the slope of the line through $(-1, 4)$ and $(3, -4)$. Does the line go up or down?
2. Write the equation of the line with slope 3 that crosses the $y$-axis at 5.
3. A taxi charges a 4 dollar start fee plus 2 dollars per kilometre. Write the cost $C$ for a trip of $x$ km. What is
   the slope, and what does it mean? How much does a 7.5 km trip cost?
4. Is this table a straight line? $x$: 0, 1, 2, 3. $y$: 1, 4, 9, 16. Explain how you can tell.
5. Find the average rate of change of $f(x) = x^2$ from $x = 2$ to $x = 5$.
6. For the ball $h(t) = 20t - 5t^2$, find the average rate of change from $t = 1$ to $t = 3$. Why is the answer
   what it is?

??? note "Answers"
    1. $m = \dfrac{-4 - 4}{3 - (-1)} = \dfrac{-8}{4} = -2$. Negative, so the line goes **down**.
    2. $y = 3x + 5$.
    3. $C = 2x + 4$. The slope is 2 **dollars per kilometre**: each extra kilometre adds 2 dollars. A 7.5 km trip
       costs $2 \times 7.5 + 4 = 19$ dollars.
    4. **No.** The changes in $y$ are 3, 5, 7. For a straight line, equal steps in $x$ must give equal changes in
       $y$. (This is $y = (x + 1)^2$, a curve.)
    5. $\dfrac{25 - 4}{5 - 2} = \dfrac{21}{3} = 7$.
    6. $h(1) = 15$ and $h(3) = 60 - 45 = 15$, so the average rate is $\dfrac{15 - 15}{3 - 1} = 0$ m/s. The ball went
       up and came back down to the same height, so overall its height did not change. An average of 0 does not
       mean it never moved.

## Common mistake

**Subtracting in different orders.** In $\dfrac{y_2 - y_1}{x_2 - x_1}$, the top and bottom must start from the
**same** point. Writing $\dfrac{y_2 - y_1}{x_1 - x_2}$ flips the sign and turns an uphill line into a downhill one.
A quick check: does the sign of your answer match the picture?

## Where it leads

- Next step: [Master: speed at an instant, the derivative](04-master.md), where we shrink the interval until the
  secant line becomes a tangent.
- Back a step: [Explore: speed, distance and time](02-explore.md)
- Lines, their equations and their graphs are a big part of [Algebra](../algebra/index.md); slope as a price or a
  flow rate is [Ratio and rates](../ratio/index.md).
- Motion graphs done the physics way: [PHY131 Unit 2: kinematics in one dimension](../../uoft/PHY131H1/unit02.md).
