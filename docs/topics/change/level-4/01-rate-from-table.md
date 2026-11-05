---
title: "Rate of change from a table"
---

# Rate of change from a table

*Change and motion · level 4, lesson 1 of 6*

## A question to start

Two friends have weekend jobs. Each one wrote down two of their pay days:

| | Short day | Long day |
| --- | --- | --- |
| **Kai** | 3 hours, 33 dollars | 7 hours, 77 dollars |
| **Zoe** | 3 hours, 40 dollars | 7 hours, 64 dollars |

On the short day Zoe earned more. Is Zoe paid more per hour? Zoe's 3-hour day works out at about 13.33 dollars per
hour, and her 7-hour day at about 9.14 dollars per hour. Kai gets 11 dollars per hour both times. So is Zoe's pay
rate going **down** the longer she works?

It is not. Zoe is paid a steady amount for each hour, and you can find it. But you need a sharper tool than
"total ÷ hours". That tool is the **rate of change**.

## The idea

### Inputs and outputs

Many tables show how one quantity depends on another. The one you choose or control is the **input** (hours worked,
minutes passed, kilometres driven). The one that follows from it is the **output** (pay, temperature, fuel left).
In a table we usually put the input first.

In [level 3](../level-3/index.md) the input was always time, and we looked at the differences from one row to the
next. Now we sharpen that idea so it works between **any** two rows, with **any** input.

### The rate of change

Pick two rows of a table. Going from the first to the second:

- the **change in input** is the later input take away the earlier input;
- the **change in output** is the later output take away the earlier output.

The **rate of change** between those two rows is

$$\text{rate of change} = \frac{\text{change in output}}{\text{change in input}}.$$

It tells you **how much the output changes for each 1 unit of input**. It is the "per" idea from
[level 3](../level-3/01-per-rates.md), but applied to the **changes** instead of the totals.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="A table with rows 3 hours, 40 dollars and 7 hours, 64 dollars; on the left an arrow labelled plus 4 hours, on the right an arrow labelled plus 24 dollars; 24 divided by 4 is 6 dollars per hour">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <rect x="130" y="20" width="160" height="90"/>
    <line x1="210" y1="20" x2="210" y2="110"/><line x1="130" y1="50" x2="290" y2="50"/><line x1="130" y1="80" x2="290" y2="80"/>
  </g>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="170" y="40">hours</text><text x="250" y="40">pay</text>
    <text x="170" y="70">3</text><text x="250" y="70">40</text>
    <text x="170" y="100">7</text><text x="250" y="100">64</text>
  </g>
  <path d="M 125 66 Q 95 80 125 94" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 295 66 Q 325 80 295 94" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <g font-size="14" fill="currentColor">
    <text x="20" y="85">+4 hours</text><text x="322" y="85">+24 dollars</text>
  </g>
  <text x="210" y="138" font-size="14" fill="currentColor" text-anchor="middle">24 ÷ 4 = 6 dollars per hour</text>
</svg>
</div>

For Zoe: from 3 hours to 7 hours, the input changes by $7 - 3 = 4$ hours. The output changes by $64 - 40 = 24$
dollars. So the rate of change is $24 \div 4 = 6$ dollars per hour. **Each extra hour adds 6 dollars.**

For Kai: from 3 to 7 hours his pay goes up by $77 - 33 = 44$ dollars, so his rate is $44 \div 4 = 11$ dollars per
hour.

### Rate of change is not the same as total ÷ input

So why did "total ÷ hours" give Zoe two different answers? Because her pay includes a **fixed amount** that she gets
however long she works (maybe a travel allowance). Work backwards from her 3-hour day: 3 hours at 6 dollars is 18
dollars, and she earned 40, so the fixed amount is $40 - 18 = 22$ dollars.

Dividing her **total** pay by her hours mixes the 22 dollars in with the hourly pay, spreading it over the hours. On a
short day the 22 dollars is shared over few hours and makes the "per hour" look big; on a long day it is shared over
more hours and looks smaller. The rate of change looks only at **what changed**, so the fixed 22 dollars cancels out.
It answers the real question: what does **one more hour** earn?

Kai's two methods agree ($33 \div 3 = 11$ too) because Kai has no fixed amount: zero hours would earn zero dollars.
Total ÷ input equals the rate of change **only** when the output starts at 0 when the input is 0.

### Units of a rate of change

The units of a rate of change are always

**units of output per unit of input**.

- Pay against hours: **dollars per hour**.
- Temperature against minutes: **degrees per minute** (°C/min).
- Fuel left against kilometres driven: **litres per kilometre**.
- Temperature against height up a mountain: **degrees per metre**.

The units tell you what the number means. A rate of change of 6 with no units is useless; "6 dollars per hour" is a
complete fact.

### Positive and negative rates

If the output goes **down** when the input goes up, the change in output is negative, so the rate of change is
**negative**.

A bathtub holds 180 litres. 4 minutes after the plug is pulled it holds 100 litres. The change in output is
$100 - 180 = -80$ litres, the change in input is 4 minutes, so the rate is $-80 \div 4 = -20$ litres per minute. The
minus sign says "the amount is going **down**, by 20 litres each minute".

A rate of change of **zero** means the output is not changing at all.

### When the rate is not the same everywhere

For Zoe, every pair of rows would give 6 dollars per hour. But for many tables, different pairs of rows give
different rates. Then the rate between two rows is the **average rate of change** over that stretch: what the steady
rate would have been to get from the first row to the second. It is exactly like the average speed of
[level 3](../level-3/06-average-speed.md): total change in distance ÷ total change in time.

### A short way to write "change in"

Mathematicians write the Greek capital letter **delta**, $\Delta$, to mean "change in". So "change in pay" is written
$\Delta\,\text{pay}$, and the rate of change is $\dfrac{\Delta\,\text{output}}{\Delta\,\text{input}}$. You do not have to
use it, but you will see it everywhere in science.

<figure class="play" data-play="graph" data-form="line"><span class="ai-tag">AI-created</span><figcaption><b>Rate from a table.</b> The slope is how much y changes for each 1 of x.</figcaption></figure>

## Worked examples

**1. An oven warming up.** An oven is switched on.

| Time (min) | 0 | 2 | 5 | 9 |
| --- | --- | --- | --- | --- |
| Temperature (°C) | 20 | 60 | 120 | 180 |

- 0 to 2 min: $(60 - 20) \div (2 - 0) = 40 \div 2 = 20$ °C per minute.
- 2 to 5 min: $(120 - 60) \div 3 = 60 \div 3 = 20$ °C per minute.
- 5 to 9 min: $(180 - 120) \div 4 = 60 \div 4 = 15$ °C per minute.

The oven heats steadily at 20 °C per minute at first, then more slowly (15 °C per minute) as it nears its setting.
Notice the plain differences (40, 60, 60) would have misled you, because the time steps (2, 3, 4) are not equal.

**2. A taxi fare.** A 3 km taxi ride costs 10.50 dollars, and an 8 km ride costs 23 dollars. Each kilometre costs the
same. Find the cost per kilometre and the fixed starting fee.

- Rate of change: $(23 - 10.50) \div (8 - 3) = 12.50 \div 5 = 2.50$ dollars per kilometre.
- The 3 km ride: 3 km at 2.50 dollars is 7.50 dollars, so the fixed fee is $10.50 - 7.50 = 3$ dollars.

Check with the 8 km ride: $3 + 8 \times 2.50 = 3 + 20 = 23$ dollars. ✓

**3. Climbing a mountain.** The input does not have to be time. As you climb, the air usually gets colder. On one day:

| Height (m) | 0 | 1000 | 2000 | 3000 |
| --- | --- | --- | --- | --- |
| Temperature (°C) | 15 | 8.5 | 2 | −4.5 |

Each 1000 m the temperature changes by $-6.5$ °C, so the rate of change is $-6.5 \div 1000 = -0.0065$ degrees per
metre. A whole degree per metre would be silly, so people say it in a friendlier unit: **−6.5 °C per kilometre**.
Choosing a sensible unit for the input is part of reporting a rate well.

**4. A ball in the air.** A ball's height is measured each second:

| Time (s) | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Height (m) | 0 | 15 | 20 | 15 | 0 |

Rates of change: $+15$, $+5$, $-5$, $-15$ metres per second. On the way up the rate is positive but shrinking (it is
slowing down); at the top it changes sign; on the way down it is negative and growing in size (speeding up
downwards). The average rate of change from 0 to 4 seconds is $(0 - 0) \div 4 = 0$: it ended where it started, even
though it was moving the whole time.

## Try it

1. You earn 30 dollars for 2 hours and 75 dollars for 5 hours. What is the rate of change of your pay?
2. A cup of tea is 90 °C, and 8 minutes later it is 50 °C. Find the rate of change, with units.
3. A car's fuel tank is checked as it drives: 0 km, 50 L; 10 km, 49.2 L; 25 km, 48 L; 40 km, 46.8 L. Is the rate of
   change the same for every gap? What is it?
4. A graph shows the cost of cheese against its mass in kilograms. What are the units of the rate of change?
5. A gym charges 105 dollars for 3 months and 205 dollars for 7 months. Each month costs the same, plus a joining fee.
   Find the monthly cost and the joining fee.
6. A town's population was 8000 in 2010, 9200 in 2014, 9900 in 2016 and 11400 in 2021. In which stretch did it grow
   fastest per year?
7. Zoe's pay is 22 dollars plus 6 dollars per hour. Why is "pay ÷ hours" a bad way to find how much one extra hour
   earns her?
8. Challenge: a tank has 30 litres in it, and water flows in at a rate of 12 litres per minute. Make a table for 0, 1,
   2, 3 and 10 minutes. When does it hold 150 litres?

??? note "Answers"
    1. $(75 - 30) \div (5 - 2) = 45 \div 3 = 15$ dollars per hour.
    2. $(50 - 90) \div 8 = -40 \div 8 = -5$ °C per minute. The minus means it is cooling, by 5 degrees each minute
       (on average over those 8 minutes).
    3. $(49.2 - 50) \div 10 = -0.08$; $(48 - 49.2) \div 15 = -1.2 \div 15 = -0.08$; $(46.8 - 48) \div 15 = -0.08$.
       **Yes**, the same each time: $-0.08$ litres per kilometre (it uses 8 litres every 100 km).
    4. **Dollars per kilogram** (output per unit of input).
    5. Monthly cost: $(205 - 105) \div (7 - 3) = 100 \div 4 = 25$ dollars per month. Joining fee:
       $105 - 3 \times 25 = 105 - 75 = 30$ dollars. Check: $30 + 7 \times 25 = 205$. ✓
    6. 2010 to 2014: $1200 \div 4 = 300$ per year. 2014 to 2016: $700 \div 2 = 350$ per year. 2016 to 2021:
       $1500 \div 5 = 300$ per year. Fastest: **2014 to 2016**, even though its total change (700) was the
       smallest.
    7. Dividing the total spreads the fixed 22 dollars over the hours, so the answer depends on how long she worked.
       One extra hour always adds exactly 6 dollars; the rate of change finds that, because the fixed part cancels
       when you subtract.
    8. Table: 0 min, 30 L; 1 min, 42 L; 2 min, 54 L; 3 min, 66 L; 10 min, $30 + 10 \times 12 = 150$ L. It holds 150
       litres at **10 minutes**. (Working: it needs $150 - 30 = 120$ more litres, and $120 \div 12 = 10$.)

## Common mistake

**Dividing totals instead of changes.** "64 dollars for 7 hours, so 64 ÷ 7 per hour" is only right when the output
would be 0 at an input of 0. To find what one more unit of input does, divide the **change** in output by the
**change** in input.

**Putting the changes upside down.** The output change goes on top. "Dollars per hour" means dollars ÷ hours. If you
divide hours by dollars you get hours per dollar, a different (and here less useful) rate.

## Where it leads

- Next: [Constant rate means a straight line](02-constant-rate-line.md), where a constant rate of change becomes a
  rule and a straight graph.
- [Level 4 page](index.md) · [Change and motion topic page](../index.md)
- Before this: [Change in tables](../level-3/04-change-in-tables.md) and ["Per": what a rate tells you](../level-3/01-per-rates.md).
- Unit rates and prices: [Rates and unit rates](../../ratio/level-3/04-rates-unit-rates.md).
- Rules with a fixed part and a rate part, written with letters: [Linear relations](../../algebra/level-5/04-linear-relations.md).
- At university, the rate of change at a single instant is called the derivative:
  [MAT137 Unit 3: Derivatives](../../../uoft/MAT137/unit03.md). You will build up to it through levels 5 to 8.
