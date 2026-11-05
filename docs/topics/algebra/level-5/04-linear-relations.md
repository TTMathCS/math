---
title: "Linear relations"
---

# Linear relations

*Algebra · level 5, lesson 4 of 6*

## A question to start

A taxi charges 4 dollars as soon as you get in, and then 2 dollars for every kilometre. Your trip cost 22 dollars.
How far did you go?

And a second question that sounds almost the same: if a 3 km trip costs 10 dollars, does a 6 km trip cost twice as
much, 20 dollars?

You can answer the first by counting up in twos from 4. The second is a trap: the answer is no, a 6 km trip costs 16
dollars. This lesson explains why, and shows three ways to describe a situation like the taxi: a **table**, a
**graph** and an **equation**. Each one shows something the others hide, and moving between them is one of the most
useful skills in mathematics. (The first answer: 9 km. See worked example 4.)

## The idea

### A relation between two quantities

The taxi fare depends on the distance. When one quantity depends on another we call the pair a **relation**. The
quantity you choose freely (the distance) is the **independent variable**, usually called $x$. The one that depends on
it (the cost) is the **dependent variable**, usually $y$.

### View 1: the table

Work out the fare for a few distances:

| Distance $x$ (km) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cost $y$ (dollars) | 4 | 6 | 8 | 10 | 12 | 14 | 16 |

Each time $x$ goes up by 1, $y$ goes up by 2. The amounts $y$ goes up by are called **first differences**. In this
table they are all the same: 2, 2, 2, 2, 2, 2. When the $x$ values go up in equal steps and the first differences are
all equal, the relation is **linear**.

The table also shows the 3 km and 6 km fares at once: 10 dollars and 16 dollars. Doubling the distance did not double
the cost, because the 4 dollar starting fee is paid only once.

### View 2: the graph

Plot each pair $(x, y)$ as a point on a grid. The points line up exactly, so we can join them with a straight line.
(The word "linear" means "like a line".)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Graph of taxi cost against distance: a straight line starting at 4 on the cost axis and rising 2 for every kilometre. A dashed line from the origin shows y equals 2x for comparison.">
  <line x1="40" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="180" x2="40" y2="25" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="180" x2="360" y2="68" stroke="#9cc9ea" stroke-width="3" stroke-dasharray="6 5"/>
  <line x1="40" y1="152" x2="360" y2="40" stroke="#eea66f" stroke-width="3"/>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="40" cy="152" r="4"/><circle cx="80" cy="138" r="4"/><circle cx="120" cy="124" r="4"/>
    <circle cx="160" cy="110" r="4"/><circle cx="200" cy="96" r="4"/><circle cx="240" cy="82" r="4"/>
    <circle cx="280" cy="68" r="4"/><circle cx="320" cy="54" r="4"/><circle cx="360" cy="40" r="4"/>
  </g>
  <polyline points="120,124 160,124 160,110" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <g font-size="11" fill="currentColor">
    <text x="140" y="138" text-anchor="middle">1</text><text x="166" y="121">2</text>
    <text x="40" y="196" text-anchor="middle">0</text><text x="120" y="196" text-anchor="middle">2</text>
    <text x="200" y="196" text-anchor="middle">4</text><text x="280" y="196" text-anchor="middle">6</text>
    <text x="360" y="196" text-anchor="middle">8</text>
    <text x="34" y="156" text-anchor="end">4</text><text x="34" y="128" text-anchor="end">8</text>
    <text x="34" y="100" text-anchor="end">12</text><text x="34" y="72" text-anchor="end">16</text>
    <text x="34" y="44" text-anchor="end">20</text>
    <text x="390" y="210" text-anchor="end">distance x (km)</text><text x="46" y="22">cost y (dollars)</text>
    <text x="300" y="100">taxi: y = 2x + 4</text><text x="300" y="118">dashed: y = 2x</text>
  </g>
</svg>
</div>

Two features of the graph match the two numbers in the story:

- The line crosses the vertical axis at 4. This is the **initial value**: the cost before you have gone anywhere.
  On a graph it is called the **$y$-intercept**.
- The line climbs 2 for every 1 across (the small green step). This is the **rate of change**: 2 dollars per
  kilometre. On a graph it is called the **slope**, and it is the same everywhere on the line.

### Why equal steps make a straight line

Walk along the points from left to right. Each move is the same: 1 across and 2 up. A path made of identical steps,
each in the same direction, never bends, so the points sit on one straight line. If the first differences changed,
say 2, then 3, then 5, the steps would get steeper and the path would curve upwards.

### View 3: the equation

In words: cost = 4 dollars + 2 dollars for each kilometre. In symbols:

$$y = 2x + 4.$$

The equation is the most compact view. It gives the cost of **any** distance, even one not in the table: 37 km costs
$2 \times 37 + 4 = 78$ dollars. And it lets you go backwards: a 22 dollar trip means $2x + 4 = 22$, so $x = 9$ km.

Every linear relation can be written the same way:

$$y = (\text{rate of change}) \times x + (\text{initial value}).$$

Geometry writes this as $y = mx + b$, with $m$ the slope and $b$ the intercept (see
[slope and the equation of a line](../../geometry/level-6/06-slope-line-equation.md)).

### Direct variation

Some relations have **no** starting amount. Apples at 3 dollars a kilogram: 0 kg costs 0 dollars, and the cost is
$y = 3x$. This kind of relation is called **direct variation** (or a **proportional** relation), and it has the form

$$y = kx.$$

The number $k$ is the **constant of variation**. Direct variation has three tell-tale signs:

- its graph is a straight line **through the origin** $(0, 0)$;
- doubling $x$ doubles $y$, tripling $x$ triples $y$, and so on;
- the ratio $\tfrac{y}{x}$ is the same for every pair (it is always $k$).

A real example: Mars's surface gravity is about 0.38 times Earth's, so the weight of an object on Mars varies directly
with its weight on Earth: $M = 0.38E$. Something that weighs 500 newtons on Earth weighs $0.38 \times 500 = 190$
newtons on Mars, and twice as heavy on Earth means twice as heavy on Mars.

### Partial variation

The taxi is different. Its relation $y = 2x + 4$ has a fixed part (4) and a varying part ($2x$). This is called
**partial variation**:

$$y = kx + b, \qquad b \ne 0.$$

Its graph is a straight line that does **not** pass through the origin, because when $x = 0$, $y = b$, not 0. That is
why doubling the distance does not double the cost: the varying part doubles, but the fixed part stays the same. In
the graph above, the dashed line is $y = 2x$ (direct variation), and the taxi line is the same line lifted up by 4.

### From a table to an equation

To find the equation of a linear relation from a table:

1. **Rate of change:** divide the change in $y$ by the change in $x$ between two rows. If $x$ goes up by 1 each
   time, this is just the first difference.
2. **Initial value:** find $y$ when $x = 0$. If the table does not show $x = 0$, work backwards from the first row by
   taking away the rate of change once for each step.
3. Write $y = (\text{rate}) \times x + (\text{initial value})$, and check with a row you did not use.

<figure class="play" data-play="graph" data-form="line"><span class="ai-tag">AI-created</span><figcaption><b>A line.</b> m sets how steep it is; b sets where it crosses the y-axis (red dot).</figcaption></figure>

## Worked examples

**1. A table with steps of 1.** Find the equation for this table.

| $x$ | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| $y$ | 5 | 8 | 11 | 14 |

- First differences: 3, 3, 3. They are equal, so the relation is linear with rate 3.
- Initial value: when $x = 0$, $y = 5$.
- Equation: $y = 3x + 5$. Check the last row: $3 \times 3 + 5 = 14$. ✓

**2. A table with steps of 2.** Find the equation for this table.

| $x$ | 2 | 4 | 6 | 8 |
| --- | --- | --- | --- | --- |
| $y$ | 7 | 13 | 19 | 25 |

- $y$ goes up by 6 each time, but $x$ goes up by 2. Rate of change $= \tfrac{6}{2} = 3$.
- Work back from $x = 2$ to $x = 0$: that is 2 steps of 1, so subtract $2 \times 3 = 6$. When $x = 0$, $y = 7 - 6 = 1$.
- Equation: $y = 3x + 1$. Check: $3 \times 8 + 1 = 25$. ✓

**3. Direct variation.** $y$ varies directly with $x$, and $y = 21$ when $x = 3$. Find $y$ when $x = 10$.

- Direct variation means $y = kx$. So $21 = 3k$, and $k = 7$.
- When $x = 10$: $y = 7 \times 10 = 70$.

**4. Partial variation from a story.** A plumber charges 60 dollars to come to your house, plus 45 dollars per
hour of work.

- Let $h$ be the hours and $C$ the cost in dollars. Then $C = 45h + 60$: partial variation.
- A 3 hour job costs $45 \times 3 + 60 = 195$ dollars.
- A bill of 240 dollars means $45h + 60 = 240$, so $45h = 180$ and $h = 4$ hours.
- (The taxi in the question at the start is the same: $2x + 4 = 22$ gives $x = 9$ km.)

**5. Is it linear?** Look at this table.

| $x$ | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| $y$ | 1 | 2 | 4 | 8 |

- First differences: 1, 2, 4. They are not equal, so the relation is **not linear**. Its graph curves upwards.
  (Each $y$ is double the one before: you will meet relations like this in [level 6](../level-6/06-linear-nonlinear.md).)

## Try it

1. Find the equation for the table $x$: 0, 1, 2, 3, 4 and $y$: 7, 11, 15, 19, 23.
2. A gym charges a 25 dollar sign-up fee and 15 dollars per month. Write an equation for the total cost $C$ after $m$
   months. How much is a year? How many months can you have for 160 dollars?
3. Direct or partial variation? (a) $y = 5x$; (b) $y = 5x + 2$; (c) the cost of apples at 3 dollars per kilogram;
   (d) the taxi in this lesson.
4. $y$ varies directly with $x$, and $y = 12$ when $x = 4$. Find $y$ when $x = 15$, and $x$ when $y = 45$.
5. Find the equation for the table $x$: 1, 3, 5, 7 and $y$: 4, 10, 16, 22.
6. A candle 24 cm tall burns down 1.5 cm every hour. Write an equation for its height $h$ after $t$ hours. How tall
   is it after 6 hours? When does it burn out?
7. Explain, without drawing, why the graph of $y = 4x + 3$ cannot pass through the origin.

??? note "Answers"
    1. First differences are all 4 and $y = 7$ when $x = 0$, so $y = 4x + 7$. Check: $4 \times 4 + 7 = 23$. ✓
    2. $C = 15m + 25$. A year: $15 \times 12 + 25 = 205$ dollars. For 160 dollars: $15m + 25 = 160$, so $15m = 135$
       and $m = 9$ months.
    3. (a) Direct: no fixed part. (b) Partial: fixed part 2. (c) Direct: 0 kg costs 0 dollars, $y = 3x$.
       (d) Partial: the 4 dollar fee is a fixed part.
    4. $12 = 4k$, so $k = 3$ and $y = 3x$. When $x = 15$, $y = 45$. When $y = 45$, $x = 15$. (The two questions have
       the same answer pair, which is a nice check.)
    5. $y$ goes up 6 when $x$ goes up 2, so the rate is 3. Back one step of 1 from $x = 1$: $y = 4 - 3 = 1$. So
       $y = 3x + 1$. Check: $3 \times 7 + 1 = 22$. ✓
    6. $h = 24 - 1.5t$ (the rate of change is negative: the height goes down). After 6 hours: $24 - 9 = 15$ cm. It
       burns out when $24 - 1.5t = 0$, so $1.5t = 24$ and $t = 16$ hours.
    7. At the origin $x = 0$, and then $y = 4 \times 0 + 3 = 3$, not 0. So the point $(0, 0)$ is not on the line;
       the line crosses the $y$-axis at 3 instead.

## Common mistake

**Assuming everything is proportional.** It is tempting to say "3 km costs 10 dollars, so 6 km costs 20". That only
works for direct variation, where there is no fixed part. Before scaling up, ask: is the value 0 when $x$ is 0? If
not, use the equation instead.

**Reading the rate from uneven steps.** If the $x$ values go 2, 4, 6, 8, the first difference of $y$ is **not** the
rate of change. Divide the change in $y$ by the change in $x$, as in worked example 2.

## Where it leads

- Previous: [Rearranging formulas](03-rearranging-formulas.md) · Next: [Solving inequalities](05-solving-inequalities.md)
- [Level 5 page](index.md) · [Algebra topic page](../index.md)
- Slope and $y = mx + b$ in detail: [Slope and the equation of a line](../../geometry/level-6/06-slope-line-equation.md).
- Where two linear relations cross: [Linear systems by graphing](../level-6/04-systems-graphing.md). Telling linear and
  curved relations apart: [Linear and non-linear relations](../level-6/06-linear-nonlinear.md).
- Proportion and constant rates: [Ratio](../../ratio/index.md). Sequences with a constant difference:
  [Patterns](../../patterns/index.md). Rates that are not constant: [Change](../../change/index.md).
