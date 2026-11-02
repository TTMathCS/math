---
title: "Direct and inverse proportion"
---

# Direct and inverse proportion

*Ratio, rates and money · level 5, lesson 2 of 7*

## A question to start

Here is an old puzzle that has tricked people for centuries:

> If a hen and a half lays an egg and a half in a day and a half, how many eggs does one hen lay in one day?

Most people answer "one egg" straight away. It sounds right: everything is "and a half", so take the halves away. But
it is wrong. The puzzle has **two** changes hiding in it (fewer hens **and** fewer days), and they act in the same
direction. To untangle it you need to know how each amount depends on the others. That is what this lesson is about.
The answer is in worked example 6.

## The idea

### Direct proportion: double one, double the other

Two amounts are **directly proportional** (or "in direct proportion") when one is always the **same number times**
the other. If $x$ is one amount and $y$ the other,

$$y = kx$$

for some fixed number $k$, called the **constant of proportionality**. You already know $k$ by another name: it is
the **unit rate**, the value of $y$ when $x = 1$.

Examples:

- Cost and number of items at a fixed price: cost $= 1.60 \times$ notebooks. Here $k = 1.60$ dollars per notebook.
- Distance and time at a steady speed: distance $= 80 \times$ hours. Here $k = 80$ km per hour.
- What a bathroom scale reads on Mars and on Earth. Gravity on Mars is about 38% of Earth's, so Mars reading
  $\approx 0.38 \times$ Earth reading. Here $k \approx 0.38$, a ratio with no units.

**Why "double one, double the other" follows.** If $y = kx$ and you replace $x$ by $2x$, the new $y$ is
$k \times 2x = 2 \times kx$, which is twice the old $y$. The same works for tripling, halving or any scale factor.

Three ways to spot direct proportion:

1. **In a table**, divide each $y$ by its $x$. If every answer is the same number, it is direct proportion, and that
   number is $k$.
2. **In words**, doubling one amount doubles the other, and 0 of one goes with 0 of the other.
3. **On a graph**, the points lie on a **straight line through the origin** (the point (0, 0)). The steepness of the
   line is $k$.

### Inverse proportion: double one, halve the other

Two amounts are **inversely proportional** when their **product** is always the same:

$$x \times y = k \qquad \text{or} \qquad y = \frac{k}{x}.$$

Doubling one **halves** the other, because $2x \times \dfrac{y}{2} = xy$, which is still $k$.

The classic example is work shared among workers. Suppose 4 painters take 6 days to paint a building. The whole job
is $4 \times 6 = 24$ **painter-days** (one painter working for 24 days, or 24 painters for 1 day, and so on). That
number is fixed by the size of the job. So

- 8 painters need $24 \div 8 = 3$ days;
- 3 painters need $24 \div 3 = 8$ days;
- 1 painter needs 24 days.

This assumes everyone works at the same speed and nobody gets in anyone's way. With 1000 painters on one small
building, the "3 hours each" answer would be silly, because people would trip over each other. Real life only follows
the model for sensible numbers.

Other examples:

- **Speed and time for a fixed trip.** A 240 km trip: at 80 km/h it takes 3 hours, at 60 km/h it takes 4 hours, at
  120 km/h it takes 2 hours. Speed $\times$ time $= 240$ every time.
- **Sharing a fixed amount.** 60 dollars shared equally: 2 people get 30 each, 3 people get 20 each, 6 people get 10
  each.

Three ways to spot inverse proportion:

1. **In a table**, multiply each $x$ by its $y$. If every product is the same, it is inverse proportion.
2. **In words**, doubling one amount halves the other.
3. **On a graph**, the points lie on a curve that falls steeply at first, then flattens out, never touching either
   axis. This curve is called a **hyperbola**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 180" role="img" aria-label="Two graphs. Left: direct proportion, a straight line rising from the origin. Right: inverse proportion, a curve falling steeply then flattening, never reaching either axis">
  <line x1="30" y1="150" x2="215" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="150" x2="30" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="150" x2="210" y2="24" stroke="#eea66f" stroke-width="3"/>
  <text x="120" y="172" font-size="12" text-anchor="middle" fill="currentColor">direct: y = kx</text>
  <line x1="250" y1="150" x2="440" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="250" y1="150" x2="250" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="265.0,30.0 272.5,70.0 280.0,90.0 295.0,110.0 310.0,120.0 340.0,130.0 370.0,135.0 400.0,138.0 430.0,140.0" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <text x="345" y="172" font-size="12" text-anchor="middle" fill="currentColor">inverse: xy = k</text>
</svg>
</div>

Why does the inverse curve never touch the axes? If it touched the $x$-axis, $y$ would be 0, and then $xy$ would be 0,
not $k$. If it touched the $y$-axis, $x$ would be 0, with the same problem. (Zero painters never finish the job.)

### Neither: the most common case of all

Many relationships are neither direct nor inverse. Learn to spot them, because using a proportion on them gives wrong
answers.

- **A fixed part plus a rate.** A phone plan costs 15 dollars a month plus 10 cents per text. 100 texts cost
  25 dollars, but 200 texts cost 35 dollars, not 50. The graph is a straight line, but it does not go through the
  origin. (These are **linear relations**, studied in [Algebra](../../algebra/index.md).)
- **Squares.** A square with sides 2 cm has area 4 square cm. Double the side to 4 cm and the area is 16 square cm:
  four times as big, not twice.
- **Things that just do not scale.** One oven bakes a cake in 40 minutes. Two cakes in two ovens still take
  40 minutes, not 80 and not 20.

### Testing a table

Given a table of values, run two quick tests:

| Test | If every answer is the same... |
| --- | --- |
| Divide: $y \div x$ | ...it is direct proportion, $y = kx$ |
| Multiply: $x \times y$ | ...it is inverse proportion, $xy = k$ |

If neither test gives a constant, it is neither.

### More than two amounts

Sometimes one amount depends on two others at once. Eggs laid depend on **hens** (more hens, more eggs: direct) and
on **days** (more days, more eggs: direct). Painting time depends on **painters** (inverse) and on **size of the
building** (direct). Handle one change at a time, keeping everything else fixed. That is the secret to the hen
puzzle.

## Worked examples

**1. Weight on Mars.** A backpack makes a bathroom scale on Earth read 20 kg. Using $k \approx 0.38$, what would the
same scale read on Mars?

- Direct proportion: Mars reading $\approx 0.38 \times 20 = 7.6$ kg. The backpack has the same amount of stuff in it,
  but Mars pulls on it less, so it feels much lighter to carry.

**2. Painters.** 4 painters take 6 days. How long would 3 painters take?

- Fewer painters means more days: inverse. Work $= 4 \times 6 = 24$ painter-days.
- $24 \div 3 = 8$ days.

**3. Classify and use a table.**

| $x$ | 2 | 4 | 6 |
| --- | --- | --- | --- |
| $y$ | 15 | 7.5 | 5 |

- Divide: $15 \div 2 = 7.5$, $7.5 \div 4 = 1.875$. Not constant, so not direct.
- Multiply: $2 \times 15 = 30$, $4 \times 7.5 = 30$, $6 \times 5 = 30$. Constant, so **inverse**, with $k = 30$.
- When $x = 10$: $y = 30 \div 10 = 3$.

**4. Speed and time.** A drive takes 3 hours at 80 km/h. How long at 60 km/h?

- Distance is fixed: $80 \times 3 = 240$ km. Speed and time are inversely proportional.
- $240 \div 60 = 4$ hours. Slower speed, longer time. ✓

**5. Spotting "neither".** A square has side 3 cm and area 9 square cm. Is area proportional to side?

- With side 6 cm the area is 36 square cm. Side $\times 2$ gave area $\times 4$. Not direct.
- $3 \times 9 = 27$ but $6 \times 36 = 216$. Not inverse either. Area grows with the **square** of the side.

**6. The hen puzzle.** 1.5 hens lay 1.5 eggs in 1.5 days. How many eggs does 1 hen lay in 1 day?

- Change the hens first, keeping 1.5 days. Eggs are directly proportional to hens. From 1.5 hens to 1 hen is
  $\times \tfrac{2}{3}$, so the eggs go from 1.5 to $1.5 \times \tfrac{2}{3} = 1$ egg. So **1 hen lays 1 egg in 1.5
  days**.
- Now change the days, keeping 1 hen. Eggs are directly proportional to days. From 1.5 days to 1 day is
  $\times \tfrac{2}{3}$, so 1 egg becomes $\tfrac{2}{3}$ of an egg.
- Answer: **two thirds of an egg** per hen per day (on average, of course; no hen lays a fraction of an egg).

The mistake "1 egg" comes from undoing only one of the two changes.

## Try it

1. $y$ is directly proportional to $x$, and $y = 12$ when $x = 4$. Find $k$, and find $y$ when $x = 10$.
2. $y$ is inversely proportional to $x$, and $y = 12$ when $x = 4$. Find $y$ when $x = 6$.
3. Direct, inverse or neither?

    | Table A: $x$ | 1 | 2 | 5 |
    | --- | --- | --- | --- |
    | $y$ | 7 | 14 | 35 |

    | Table B: $x$ | 2 | 3 | 6 |
    | --- | --- | --- | --- |
    | $y$ | 9 | 6 | 3 |

    | Table C: $x$ | 1 | 2 | 3 |
    | --- | --- | --- | --- |
    | $y$ | 5 | 8 | 11 |

4. 6 workers build a wall in 10 hours. How long would 4 workers take? Which kind of proportion is it?
5. A 1200-litre tank fills in 30 minutes when water flows at 40 litres per minute. How long at 60 litres per minute?
6. A phone plan costs 15 dollars plus 10 cents per text. Is the bill proportional to the number of texts? Explain
   using 100 and 200 texts.
7. One oven bakes a cake in 40 minutes. How long do 2 ovens take to bake 2 cakes? Why is this not a proportion
   problem?
8. 2 hens lay 2 eggs in 2 days. How many eggs do 6 hens lay in 6 days?

??? note "Answers"
    1. $k = 12 \div 4 = 3$, so $y = 3x$. When $x = 10$, $y = 30$.
    2. $k = 4 \times 12 = 48$, so $y = 48 \div 6 = 8$.
    3. Table A: $y \div x$ is 7 every time, so **direct**, $y = 7x$. Table B: $x \times y$ is 18 every time, so
       **inverse**, $xy = 18$. Table C: $y \div x$ is 5, 4, 3.67 and $x \times y$ is 5, 16, 33, so **neither**.
       (It goes up by 3 each time: $y = 3x + 2$, a straight line not through the origin.)
    4. Inverse. Work $= 6 \times 10 = 60$ worker-hours, so 4 workers take $60 \div 4 = 15$ hours.
    5. Inverse (the amount of water is fixed). $1200 \div 60 = 20$ minutes. Check: $40 \times 30 = 1200$ and
       $60 \times 20 = 1200$. ✓
    6. No. 100 texts cost $15 + 10 = 25$ dollars and 200 texts cost $15 + 20 = 35$ dollars. Doubling the texts did not
       double the bill, because the 15 dollars is paid whatever happens.
    7. **40 minutes.** Each oven bakes its own cake at the same time. Doubling the cakes and doubling the ovens cancel
       out, so neither a direct nor an inverse rule from "one oven, one cake" applies on its own.
    8. One change at a time. 2 hens, 2 days: 2 eggs. 6 hens (three times as many), 2 days: 6 eggs. 6 hens, 6 days
       (three times as long): 18 eggs. Or with a unit rate: 2 eggs from $2 \times 2 = 4$ hen-days is half an egg per
       hen-day, and 6 hens for 6 days is 36 hen-days, so 18 eggs.

## Common mistake

**Treating everything as direct proportion.** "More workers, more time" is the wrong direction; "twice the side,
twice the area" is the wrong amount. Before you scale, ask: if this doubles, does that **double**, **halve**, or do
something else?

**Undoing only one change.** When two things change at once (hens and days), change them one at a time and check the
direction of each.

## Where it leads

- Back: [Proportions](01-proportions.md) · Next: [Percent increase and decrease](03-percent-change.md)
- [Level 5 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Graphs of $y = kx$ and $y = mx + b$: [Algebra](../../algebra/index.md). Speed on a distance-time graph:
  [Change](../../change/index.md).
- Area growing with the square of the side, and volume with the cube: [Geometry](../../geometry/index.md) and
  [Measurement](../../measurement/index.md).
- Inverse proportion is everywhere in science: light gets dimmer with the square of distance, which is why Mars, about
  1.5 times as far from the Sun as Earth, gets less than half as much sunlight ($1 \div 1.5^2 \approx 0.44$).
