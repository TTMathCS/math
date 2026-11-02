---
title: "Constant rate means a straight line"
---

# Constant rate means a straight line

*Change and motion · level 4, lesson 2 of 6*

## A question to start

A plumber charges 40 dollars just to come to your house, plus 30 dollars for every hour of work. Make a table of the
bill for 0, 1, 2, 3, 4 and 5 hours of work, and plot the points on a graph.

Before you do: will the points lie on a perfectly straight line? Lots of people guess yes. But **why** must they?
Could they bend, even a tiny bit, somewhere you have not looked, say between 2 and 3 hours?

And a second puzzle: if a friend tells you only **two** of the bills, can you work out the plumber's whole pricing
system?

## The idea

### Linear change

When the rate of change is the **same** between every pair of rows, we say the change is **linear**, or that it has
a **constant rate**. "Linear" comes from "line", and this lesson shows why.

The plumber's bill is linear. Each extra hour always adds 30 dollars:

| Hours | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Bill (dollars) | 40 | 70 | 100 | 130 | 160 | 190 |

### Why a constant rate gives a straight line

Plot the points, with hours across and the bill up the side.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="The plumber's bill against hours: points at 40, 70, 100, 130, 160 and 190 dollars for 0 to 5 hours, all on one straight line, with identical staircase steps of one hour across and 30 dollars up between them">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="360" y2="20"/><line x1="60" y1="60" x2="360" y2="60"/><line x1="60" y1="100" x2="360" y2="100"/><line x1="60" y1="140" x2="360" y2="140"/>
    <line x1="120" y1="20" x2="120" y2="180"/><line x1="180" y1="20" x2="180" y2="180"/><line x1="240" y1="20" x2="240" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="370" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="148" x2="360" y2="28" stroke="#9cc9ea" stroke-width="3"/>
  <polyline points="60,148 120,148 120,124 180,124 180,100 240,100 240,76 300,76 300,52 360,52 360,28" fill="none" stroke="#eea66f" stroke-width="2" stroke-dasharray="5 3"/>
  <g fill="currentColor">
    <circle cx="60" cy="148" r="4"/><circle cx="120" cy="124" r="4"/><circle cx="180" cy="100" r="4"/><circle cx="240" cy="76" r="4"/><circle cx="300" cy="52" r="4"/><circle cx="360" cy="28" r="4"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="120" y="196">1</text><text x="180" y="196">2</text><text x="240" y="196">3</text><text x="300" y="196">4</text><text x="360" y="196">5</text>
    <text x="210" y="211">hours</text>
    <text x="90" y="164">+1 h</text><text x="140" y="140">+30</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">50</text><text x="54" y="104">100</text><text x="54" y="64">150</text><text x="54" y="24">200</text>
  </g>
</svg>
</div>

Going from each point to the next, you take the **same step**: 1 hour across, 30 dollars up. So the points make a
staircase whose steps are all exactly the same size. A staircase of identical steps climbs at the same steepness the
whole way, so a ruler laid along the corners touches every one of them.

But what about **between** the points? Here is the deeper reason. The rate of change is 30 dollars per hour for
**any** two times, not just whole hours. Half an hour adds 15 dollars; six minutes adds 3 dollars. So however finely
you zoom in, every little step has the same shape: rise is always 30 times the run. A graph that has the same
steepness everywhere, at every scale, cannot bend anywhere. It is a straight line.

It also works the other way. On a straight line, every piece has the same steepness, so the rate of change between
any two points is the same. So:

**A constant rate of change and a straight-line graph are the same thing, said in two ways.**

### The rule: start value plus rate times input

Two numbers tell you everything about a linear change:

- the **start value**: the output when the input is 0 (the plumber's 40 dollars);
- the **rate of change**: how much the output changes for each 1 unit of input (30 dollars per hour).

Then for any input:

$$\text{output} = \text{start value} + \text{rate} \times \text{input}.$$

For the plumber: bill $= 40 + 30 \times \text{hours}$. With letters, if $h$ is the number of hours and $B$ is the bill
in dollars,

$$B = 40 + 30h.$$

Why does this work? Starting from 0 hours you have the 40 dollars. Each hour adds 30, and $h$ hours add $h$ lots of
30, which is $30h$. That is all the formula says.

On the graph, the **start value** is where the line crosses the up-axis (the bill when no time has passed), and the
**rate** is how steep the line is.

### Negative rates: lines that slope down

A candle 30 cm tall burns down at a steady 2.5 cm per hour. Its rate of change is $-2.5$ cm per hour, and its height
after $t$ hours is

$$H = 30 - 2.5t.$$

The graph is a straight line sloping **down**. The candle is gone when $H = 0$: $2.5t = 30$, so $t = 12$ hours. (Of
course the formula would give negative heights after 12 hours, which make no sense. A rule is only good for the
inputs where the story makes sense.)

### From two points to the whole rule

Now the second puzzle. If you know that a change is linear and you know **two** rows, you can find everything:

1. **Rate:** change in output ÷ change in input.
2. **Start value:** go back from one of the rows to input 0, taking off the rate once for each unit.
3. **Check** with the other row.

Two points are enough because there is only one straight line through two points.

## Worked examples

**1. The plumber's bill.** Using $B = 40 + 30h$: a job of 3.5 hours costs $40 + 30 \times 3.5 = 40 + 105 = 145$
dollars. A bill of 220 dollars means $30h = 220 - 40 = 180$, so $h = 6$ hours.

**2. A stretching spring.** When a 2 kg bag hangs from a spring, the spring is 19 cm long. With a 5 kg bag it is 25 cm.
The stretch is linear (this is true for springs, as long as you do not overstretch them). Find the rule.

- Rate: $(25 - 19) \div (5 - 2) = 6 \div 3 = 2$ cm per kg.
- Start value: going back from 2 kg to 0 kg takes off $2 \times 2 = 4$ cm, so $19 - 4 = 15$ cm. That is the spring's
  length with nothing hanging on it.
- Rule: length $L = 15 + 2m$, where $m$ is the mass in kg.
- Check: $15 + 2 \times 5 = 25$. ✓

**3. Two phone plans.** Plan A costs 20 dollars a month plus 10 cents per minute of calls. Plan B costs 5 dollars a
month plus 25 cents per minute. Which is cheaper?

In dollars, with $m$ minutes: A $= 20 + 0.10m$ and B $= 5 + 0.25m$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Two straight lines: plan A starts at 20 dollars and rises gently, plan B starts at 5 dollars and rises steeply; they cross at 100 minutes and 30 dollars">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="360" y2="20"/><line x1="60" y1="73.3" x2="360" y2="73.3"/><line x1="60" y1="126.7" x2="360" y2="126.7"/>
    <line x1="135" y1="20" x2="135" y2="180"/><line x1="210" y1="20" x2="210" y2="180"/><line x1="285" y1="20" x2="285" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="370" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="126.7" x2="360" y2="73.3" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="60" y1="166.7" x2="360" y2="33.3" stroke="#eea66f" stroke-width="3"/>
  <circle cx="210" cy="100" r="5" fill="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="135" y="196">50</text><text x="210" y="196">100</text><text x="285" y="196">150</text><text x="360" y="196">200</text>
    <text x="210" y="211">minutes of calls</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="131">20</text><text x="54" y="77">40</text><text x="54" y="24">60 dollars</text>
  </g>
  <g font-size="13" fill="currentColor"><text x="300" y="98">A</text><text x="300" y="50">B</text><text x="218" y="118">(100, 30)</text></g>
</svg>
</div>

B starts cheaper but climbs faster. They cost the same when $20 + 0.10m = 5 + 0.25m$. Take $5 + 0.10m$ from both
sides: $15 = 0.15m$, so $m = 100$ minutes. Both cost 30 dollars then. **Under 100 minutes, B is cheaper; over 100
minutes, A is cheaper.** The start value wins at first, but in the long run the rate wins.

**4. Is it linear?** A table has inputs 1, 3, 4, 7 and outputs 5, 11, 14, 23. Rates: $6 \div 2 = 3$, $3 \div 1 = 3$,
$9 \div 3 = 3$. All equal, so **yes**, linear with rate 3. Going back from input 1 to 0 takes off 3: start value 2.
Rule: output $= 2 + 3 \times \text{input}$.

## Try it

1. Which of these tables show linear change? (a) inputs 0, 1, 2, 3 and outputs 7, 10, 13, 16; (b) inputs 0, 1, 2, 3
   and outputs 1, 2, 4, 8; (c) inputs 0, 2, 4, 6 and outputs 50, 44, 38, 32.
2. Write the rule for each linear table in question 1.
3. A pool has 200 litres in it and is filled at 50 litres per minute. Write the rule. How much is in it after 12
   minutes? When does it hold 1000 litres?
4. After 4 weeks Ana has saved 34 dollars, and after 10 weeks she has saved 70 dollars, saving the same each week
   on top of what she started with. Find her weekly saving and how much she started with.
5. Do the points (2, 9), (5, 18) and (9, 30) lie on one straight line? Explain using rates.
6. A lift starts 120 m above the ground and goes down at 4 metres per second. Write the rule for its height. When does
   it reach the ground?
7. Gym A costs 50 dollars to join plus 20 dollars a month. Gym B has no joining fee but costs 30 dollars a month.
   After how many months do they cost the same?
8. Challenge: a table has rates of change 3, 3 and 4 between its rows. Explain why its points cannot all lie on one
   straight line.

??? note "Answers"
    1. (a) Differences +3 each step: **linear**. (b) Differences +1, +2, +4: **not linear**. (c) Changes −6 for each
       step of 2, so −3 per unit each time: **linear**.
    2. (a) output $= 7 + 3 \times$ input. (c) output $= 50 - 3 \times$ input.
    3. Amount $= 200 + 50t$ litres after $t$ minutes. After 12 minutes: $200 + 600 = 800$ litres. For 1000 litres:
       $50t = 800$, so $t = 16$ minutes.
    4. Rate: $(70 - 34) \div (10 - 4) = 36 \div 6 = 6$ dollars per week. Start: $34 - 4 \times 6 = 10$ dollars.
       Check: $10 + 10 \times 6 = 70$. ✓
    5. From (2, 9) to (5, 18): $9 \div 3 = 3$. From (5, 18) to (9, 30): $12 \div 4 = 3$. The same rate, so **yes**,
       they are on one line.
    6. $H = 120 - 4t$. Ground when $4t = 120$: $t = 30$ seconds.
    7. A: $50 + 20m$. B: $30m$. Equal when $50 + 20m = 30m$, so $10m = 50$ and $m = 5$ months (both cost 150
       dollars). Before that B is cheaper; after that A is cheaper.
    8. A straight line has the same steepness everywhere, so the rate between **any** two of its points is the same.
       Here one stretch climbs 4 per unit while the others climb 3 per unit, so the graph gets steeper there: it
       bends. The points cannot all be on one line.

## Common mistake

**Forgetting the start value.** "30 dollars per hour, so 5 hours costs 150 dollars" forgets the 40-dollar call-out.
The rate tells you what is **added**; the start value is what you began with.

**Using a rule outside its story.** The candle rule gives a height of $-5$ cm after 14 hours. Rules describe the
world only where the story makes sense: here, from 0 to 12 hours.

## Where it leads

- Back: [Rate of change from a table](01-rate-from-table.md) · Next: [Speed-time graphs](03-speed-time-graphs.md)
- [Level 4 page](index.md) · [Change and motion topic page](../index.md)
- The same idea with patterns of shapes: [Finding the position rule](../../patterns/level-4/02-finding-position-rule.md)
  and [Graphing a pattern](../../patterns/level-4/03-graphing-a-pattern.md).
- Rules like $B = 40 + 30h$ with letters: [Linear relations](../../algebra/level-5/04-linear-relations.md) and
  [Solving one- and two-step equations](../../algebra/level-4/04-solving-equations.md).
- The rate becomes the **slope** of the line, and the rule becomes $y = mx + b$:
  [Slope and the equation of a line](../../geometry/level-6/06-slope-line-equation.md), and in this topic
  [level 5](../level-5/index.md).
