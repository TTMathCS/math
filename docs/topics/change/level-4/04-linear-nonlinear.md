---
title: "Linear and non-linear change"
---

# Linear and non-linear change

*Change and motion · level 4, lesson 4 of 6*

## A question to start

Two cousins each get 1000 dollars on their birthday and put it away for the future.

- **Cousin Steady** has a plan that adds 100 dollars every year.
- **Cousin Grow** has a savings account that adds 10% of whatever is in it, every year.

After one year, both have 1100 dollars. After two years, Steady has 1200 and Grow has 1210: just 10 dollars more.
It hardly seems to matter.

Guess: after 30 years, how much more does Grow have than Steady? A few hundred dollars? A thousand?

Steady has 4000 dollars. Grow has about **17,449 dollars**, more than four times as much. This lesson is about the
difference between these two kinds of change, and how to spot it early, long before the 30 years are up.

## The idea

### Linear change, again

From [the last lessons](02-constant-rate-line.md): change is **linear** when the rate of change is always the same.
In a table with **equal steps** in the input, that means the differences in the output are all the same. The graph is
a straight line.

Steady's money is linear: it goes 1000, 1100, 1200, 1300, ... with every difference exactly 100.

### Non-linear change

Change is **non-linear** when the rate of change is **not** always the same: in a table with equal input steps, the
differences are not all equal. The graph is not a straight line; it **curves**.

Here is Grow's money, year by year, to the nearest cent:

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Money (dollars) | 1000 | 1100 | 1210 | 1331 | 1464.10 | 1610.51 |
| Difference | | 100 | 110 | 121 | 133.10 | 146.41 |

The differences grow: 100, 110, 121, 133.10, ... Each one is 10% bigger than the one before.

### Why do Grow's differences grow?

Because the interest is 10% of **whatever is in the account**, and what is in the account keeps growing.

- Year 1: 10% of 1000 is 100.
- Year 2: 10% of 1100 is 110. The extra 10 dollars is interest earned on last year's 100 dollars of interest.
- Year 3: 10% of 1210 is 121.

Interest earns interest, which earns more interest. This is called **compound interest**. Steady's plan adds a fixed
amount; Grow's plan adds an amount that grows with the money itself. The bigger it gets, the faster it grows.

### The two graphs

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Money against years for 20 years: Steady's money is a straight line from 1000 to 3000 dollars; Grow's money is a curve that starts on top of the line and bends upwards, reaching about 6700 dollars">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="360" y2="20"/><line x1="60" y1="60" x2="360" y2="60"/><line x1="60" y1="100" x2="360" y2="100"/><line x1="60" y1="140" x2="360" y2="140"/>
    <line x1="135" y1="20" x2="135" y2="180"/><line x1="210" y1="20" x2="210" y2="180"/><line x1="285" y1="20" x2="285" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="370" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="160" x2="360" y2="120" stroke="#9cc9ea" stroke-width="3.5"/>
  <polyline points="60,160.0 75,158.0 90,155.8 105,153.4 120,150.7 135,147.8 150,144.6 165,141.0 180,137.1 195,132.8 210,128.1 225,122.9 240,117.2 255,111.0 270,104.1 285,96.5 300,88.1 315,78.9 330,68.8 345,57.7 360,45.5" fill="none" stroke="#eea66f" stroke-width="3.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="135" y="196">5</text><text x="210" y="196">10</text><text x="285" y="196">15</text><text x="360" y="196">20</text>
    <text x="210" y="211">years</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">2000</text><text x="54" y="104">4000</text><text x="54" y="64">6000</text><text x="54" y="24">8000</text>
  </g>
  <g font-size="13" fill="currentColor"><text x="300" y="70">Grow</text><text x="300" y="145">Steady</text></g>
</svg>
</div>

For the first few years the two graphs are almost on top of each other. Then the curve **bends away upwards**: it
gets steeper and steeper, while the straight line climbs at the same steepness for ever. In the long run, growth that
feeds on itself always overtakes steady growth, however far behind it starts.

### A second example: the area of a square

Non-linear change is not only about money. Make a square bigger, one centimetre of side at a time, and look at its
perimeter (the distance round it) and its area (the space inside).

| Side (cm) | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Perimeter (cm) | 4 | 8 | 12 | 16 | 20 | 24 |
| Area (cm²) | 1 | 4 | 9 | 16 | 25 | 36 |

- **Perimeter** differences: 4, 4, 4, 4, 4. **Linear.** Each extra centimetre of side adds 1 cm to each of the 4
  sides.
- **Area** differences: 3, 5, 7, 9, 11. **Non-linear.** The area grows faster and faster.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 150" role="img" aria-label="A 4 by 4 square of small squares grown into a 5 by 5 square: the new squares form an L-shaped border of 4 plus 4 plus 1 equals 9 squares">
  <g stroke="currentColor" stroke-width="1" fill="#9cc9ea" fill-opacity="0.4">
    <rect x="40" y="45" width="100" height="100"/>
  </g>
  <g stroke="currentColor" stroke-width="0.6" opacity="0.6">
    <line x1="65" y1="45" x2="65" y2="145"/><line x1="90" y1="45" x2="90" y2="145"/><line x1="115" y1="45" x2="115" y2="145"/>
    <line x1="40" y1="70" x2="140" y2="70"/><line x1="40" y1="95" x2="140" y2="95"/><line x1="40" y1="120" x2="140" y2="120"/>
  </g>
  <g stroke="currentColor" stroke-width="1" fill="#eea66f" fill-opacity="0.7">
    <rect x="40" y="20" width="25" height="25"/><rect x="65" y="20" width="25" height="25"/><rect x="90" y="20" width="25" height="25"/><rect x="115" y="20" width="25" height="25"/>
    <rect x="140" y="45" width="25" height="25"/><rect x="140" y="70" width="25" height="25"/><rect x="140" y="95" width="25" height="25"/><rect x="140" y="120" width="25" height="25"/>
  </g>
  <rect x="140" y="20" width="25" height="25" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <g font-size="13" fill="currentColor">
    <text x="190" y="50">4 along the top</text><text x="190" y="72">4 down the side</text><text x="190" y="94">1 in the corner</text>
    <text x="190" y="122">4 + 4 + 1 = 9 new squares</text>
  </g>
</svg>
</div>

Why do the area's differences grow by 2 each time? To grow a 4 by 4 square into a 5 by 5 square, you add a row of 4
along the top, a column of 4 down the side, and 1 in the corner: $4 + 4 + 1 = 9$. To grow 5 by 5 into 6 by 6, you add
$5 + 5 + 1 = 11$. Each time the arms of the L are one longer, so the border has 2 more squares.

There is a quick test too. **Double the side** from 3 cm to 6 cm: the perimeter doubles (12 to 24), but the area goes
from 9 to 36, **four times** as big. A doubled square holds 2 rows of 2 copies of the old square.

### Telling them apart from a table

1. Check that the input steps are **equal**. If they are not, work out the rate of change for each gap instead of
   the plain differences (as in [lesson 1](01-rate-from-table.md)).
2. Find the differences (or rates).
3. All the same: **linear**, a straight line. Not all the same: **non-linear**, a curve.

For non-linear change, the rate of change depends on **where** you look. The area of a square grows by 3 cm² per cm
between sides 1 and 2, but by 11 cm² per cm between sides 5 and 6. There is no single "rate" for the whole table.

## Worked examples

**1. Thirty years of savings.** After $n$ years, Steady has $1000 + 100n$ dollars: after 30 years,
$1000 + 3000 = 4000$. Grow's money is multiplied by 1.1 each year (adding 10% is the same as multiplying by 1.1), so
after 30 years it is $1000 \times 1.1^{30}$. A calculator gives about 17,449.40 dollars. The gap is about 13,449
dollars.

**2. Which tables are linear?**

- (a) Inputs 0, 1, 2, 3; outputs 3, 6, 12, 24. Differences 3, 6, 12: **non-linear** (each output doubles).
- (b) Inputs 2, 4, 6, 8; outputs 11, 17, 23, 29. Differences 6, 6, 6 for steps of 2: **linear**, rate 3 per unit.
- (c) Inputs 0, 1, 3, 6; outputs 5, 7, 11, 17. Plain differences 2, 4, 6 look non-linear, but the steps are 1, 2, 3.
  Rates: $2 \div 1 = 2$, $4 \div 2 = 2$, $6 \div 3 = 2$. **Linear**, rate 2. The plain differences fooled us.

**3. Simple versus compound interest.** 500 dollars earns 4% a year.

- **Simple** interest pays 4% of the **original** 500 each year: 20 dollars, every year. Linear: 500, 520, 540, 560.
- **Compound** interest pays 4% of the **current** amount: 500, 520, 540.80, 562.43. Differences 20, 20.80, 21.63.
  Non-linear, though only just, at first.

Over a few years the two are close. Over a lifetime they are very different.

## Try it

1. Linear or non-linear? (Inputs 0, 1, 2, 3 each time.) (a) 4, 9, 14, 19; (b) 1, 3, 9, 27; (c) 100, 90, 81, 72.9;
   (d) 0, 1, 4, 9.
2. What is the area of a square of side 7 cm? What is the difference from a square of side 6 cm, and how does the L
   picture explain it?
3. The volume of a cube of side 1, 2, 3, 4 cm is 1, 8, 27, 64 cm³. Find the differences. Linear or not?
4. Put 500 dollars into an account paying 4% compound interest. Show that the amounts for years 0 to 3 are 500, 520,
   540.80 and 562.43 dollars.
5. With 4% **simple** interest on 500 dollars, what is the amount after 10 years? Is it linear?
6. A square's side doubles from 5 cm to 10 cm. What happens to its perimeter? To its area?
7. Find the average rate of change of a square's area between sides 2 and 4 cm, and between sides 4 and 6 cm. What
   does this show?
8. Challenge: in the cousins' story, in which year does Grow first have **more than 1000 dollars more** than Steady?
   (Use a calculator and the rules $1000 \times 1.1^{n}$ and $1000 + 100n$.)

??? note "Answers"
    1. (a) Differences 5, 5, 5: **linear**. (b) 2, 6, 18: **non-linear** (each output is 3 times the last).
       (c) −10, −9, −8.1: **non-linear** (each output is 90% of the last, shrinking by less each time). (d) 1, 3, 5:
       **non-linear** (square numbers).
    2. $7 \times 7 = 49$ cm². Difference $49 - 36 = 13$. The L-shaped border round a 6 by 6 square has 6 along the
       top, 6 down the side and 1 in the corner: $6 + 6 + 1 = 13$.
    3. Differences 7, 19, 37: **non-linear**, and growing even faster than the square's.
    4. $500 \times 1.04 = 520$; $520 \times 1.04 = 540.80$; $540.80 \times 1.04 = 562.432$, which is 562.43 dollars
       to the nearest cent.
    5. 4% of 500 is 20 dollars each year: $500 + 10 \times 20 = 700$ dollars. **Linear** (the same 20 dollars every
       year).
    6. Perimeter: 20 cm to 40 cm, **doubles**. Area: 25 cm² to 100 cm², **four times** as big.
    7. Sides 2 to 4: $(16 - 4) \div 2 = 6$ cm² per cm. Sides 4 to 6: $(36 - 16) \div 2 = 10$ cm² per cm. The rate is
       different in different places, so the change is non-linear: the area grows faster for bigger squares.
    8. Year 12: Grow about 3138.43, Steady 2200, gap about 938. Year 13: Grow about 3452.27, Steady 2300, gap about
       1152. So the first year is **year 13**.

## Common mistake

**Judging from the first few rows.** After one year the cousins are equal, and after two the gap is only 10 dollars.
Non-linear growth often looks linear at the start. Look at the **differences**: if they are creeping up, the change
is not linear, and the gap will widen.

**Calling every rule with a start value "doubling".** For a linear rule like $40 + 30h$, doubling $h$ does **not**
double the output (the 40 stays put). The "doubling" test only tells you about rules that start at 0. The safe test is
always: are the differences (or rates) the same?

## Where it leads

- Back: [Speed-time graphs](03-speed-time-graphs.md) · Next: [Reading rates from graphs](05-rates-from-graphs.md)
- [Level 4 page](index.md) · [Change and motion topic page](../index.md)
- Interest in more detail: [Simple interest](../../ratio/level-5/06-simple-interest.md) and
  [Compound interest](../../ratio/level-6/04-compound-interest.md).
- Square numbers and their growing borders: [Square numbers](../../patterns/level-3/02-square-numbers.md) and
  [Sums of odd numbers](../../patterns/level-4/06-odd-number-sums.md).
- Linear and non-linear relations with algebra: [Linear and non-linear relations](../../algebra/level-6/06-linear-nonlinear.md).
- Rates of change for curves, which keep changing from point to point: [level 5](../level-5/index.md) and
  [level 6](../level-6/index.md).
