---
title: "Change in tables"
---

# Change in tables

*Change and motion · level 3, lesson 4 of 6*

## A question to start

Ravi measured his bean plant on a few days, whenever he remembered:

| Day | 0 | 2 | 3 | 6 |
| --- | --- | --- | --- | --- |
| Height (cm) | 4 | 10 | 13 | 22 |

Between the measurements it grew 6 cm, then 3 cm, then 9 cm. Those numbers jump around. So was the plant growing
in fits and starts, fast, slow, fast? Or was it growing perfectly steadily all along?

It looks bumpy. It is actually perfectly steady. This lesson shows you how to tell.

## The idea

### A table of values

When something changes over time, we can measure it again and again and write the results in a **table**: one row
for the times and one row for the amounts (or two columns, one for each). Tables are where most real measurements
start, before anyone draws a graph.

Here is a much tidier plant, measured every day at the same time:

| Day | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Height (cm) | 5 | 8 | 11 | 14 | 17 | 20 |

### Look at the differences

The table tells you **how tall** the plant is. To see **how it is changing**, look at the gap between each number
and the next. Each gap is called a **difference**: it is the later number take away the earlier number.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="The heights 5, 8, 11, 14, 17, 20 in boxes, with an arrow from each box to the next labelled plus 3">
  <g fill="#7ccf9a" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="20" width="44" height="34"/><rect x="90" y="20" width="44" height="34"/><rect x="160" y="20" width="44" height="34"/>
    <rect x="230" y="20" width="44" height="34"/><rect x="300" y="20" width="44" height="34"/><rect x="370" y="20" width="44" height="34"/>
  </g>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="42" y="43">5</text><text x="112" y="43">8</text><text x="182" y="43">11</text><text x="252" y="43">14</text><text x="322" y="43">17</text><text x="392" y="43">20</text>
  </g>
  <g fill="none" stroke="#eea66f" stroke-width="2">
    <path d="M 46 58 Q 77 88 108 58"/><path d="M 116 58 Q 147 88 178 58"/><path d="M 186 58 Q 217 88 248 58"/><path d="M 256 58 Q 287 88 318 58"/><path d="M 326 58 Q 357 88 388 58"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="77" y="100">+3</text><text x="147" y="100">+3</text><text x="217" y="100">+3</text><text x="287" y="100">+3</text><text x="357" y="100">+3</text>
  </g>
</svg>
</div>

Every difference is +3. The plant grows **3 cm every day**. When the differences are all the same, we say the
differences are **constant** (constant means "never changing"), and the change is **steady**.

### Constant differences mean steady change

Steady change is the easiest kind to work with, because it lets you **predict**.

- **Next row:** the next height (day 6) is $20 + 3 = 23$ cm.
- **Far ahead:** on day 10, the plant has had 10 days of growing 3 cm, so it has grown $10 \times 3 = 30$ cm since day
  0. Its height is $5 + 30 = 35$ cm. You do not need to fill in every row.
- **A rule in words:** "Start at 5 cm and add 3 cm for every day." That one sentence holds the whole table, even the
  rows nobody has written yet.

(Of course, a real plant does not grow steadily for ever. A rule like this is good for a while, then the plant grows
more slowly and stops. The rule is a **model**: a simple picture of the truth that works for a while.)

### Going down: negative differences

Changes can be downwards too. A candle 24 cm tall burns down like this:

| Hour | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Height (cm) | 24 | 22 | 20 | 18 | 16 |

Each difference is $22 - 24 = -2$, then $20 - 22 = -2$, and so on. A difference with a minus sign means the amount
went **down**. The differences are constant (always −2), so this is steady change too: steady shrinking, 2 cm every
hour. The candle will be gone after $24 \div 2 = 12$ hours.

### Differences that are not constant

Now look at the number of small squares in a growing square pattern: a 1 by 1 square, a 2 by 2 square, and so on.

| Side | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Squares | 1 | 4 | 9 | 16 | 25 | 36 |
| Difference | | +3 | +5 | +7 | +9 | +11 |

The differences are **not** the same. They get bigger: 3, then 5, then 7. So the number of squares grows **faster
and faster**. This is not steady change.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 110" role="img" aria-label="Squares of side 1, 2, 3 and 4; each new square adds an L-shaped border of 3, 5 and 7 small squares, shown in orange">
  <g stroke="currentColor" stroke-width="1" fill="#9cc9ea" fill-opacity="0.4">
    <rect x="15" y="80" width="20" height="20"/>
    <rect x="55" y="80" width="20" height="20"/>
    <rect x="115" y="80" width="20" height="20"/><rect x="135" y="80" width="20" height="20"/><rect x="115" y="60" width="20" height="20"/><rect x="135" y="60" width="20" height="20"/>
    <rect x="195" y="80" width="20" height="20"/><rect x="215" y="80" width="20" height="20"/><rect x="235" y="80" width="20" height="20"/>
    <rect x="195" y="60" width="20" height="20"/><rect x="215" y="60" width="20" height="20"/><rect x="235" y="60" width="20" height="20"/>
    <rect x="195" y="40" width="20" height="20"/><rect x="215" y="40" width="20" height="20"/><rect x="235" y="40" width="20" height="20"/>
  </g>
  <g stroke="currentColor" stroke-width="1" fill="#eea66f">
    <rect x="75" y="80" width="20" height="20"/><rect x="55" y="60" width="20" height="20"/><rect x="75" y="60" width="20" height="20"/>
    <rect x="155" y="80" width="20" height="20"/><rect x="155" y="60" width="20" height="20"/><rect x="115" y="40" width="20" height="20"/><rect x="135" y="40" width="20" height="20"/><rect x="155" y="40" width="20" height="20"/>
    <rect x="255" y="80" width="20" height="20"/><rect x="255" y="60" width="20" height="20"/><rect x="255" y="40" width="20" height="20"/>
    <rect x="195" y="20" width="20" height="20"/><rect x="215" y="20" width="20" height="20"/><rect x="235" y="20" width="20" height="20"/><rect x="255" y="20" width="20" height="20"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="25" y="14">1</text><text x="75" y="44">+3</text><text x="145" y="30">+5</text><text x="235" y="12">+7</text>
  </g>
</svg>
</div>

The picture shows **why**. To grow a square by one, you add a border along the top and down one side. Each new
border is 2 longer than the last (one more on each arm), so each difference is 2 more than the one before. These
are the [square numbers](../../patterns/level-3/02-square-numbers.md) from Patterns.

Differences can also get **smaller**: something that grows quickly at first and then slows down. That is the next
lesson.

### Three kinds of differences

| Differences are... | The change is... | Example |
| --- | --- | --- |
| all the same | steady | the plant, +3 each day |
| getting bigger | speeding up | the squares, +3, +5, +7 |
| getting smaller | slowing down | a cup of cocoa cooling |

### Careful: are the time steps equal?

Now back to Ravi's plant from the start. The gaps between his measurements were **not** equal: 2 days, then 1 day,
then 3 days. Comparing a 2-day difference with a 1-day difference is not fair, just like comparing Mia's 4 days of
reading with Sam's 5 days in [lesson 1](01-per-rates.md).

So find the growth **per day** for each gap:

| From | To | Days | Growth | Per day |
| --- | --- | --- | --- | --- |
| day 0 | day 2 | 2 | 6 cm | $6 \div 2 = 3$ cm |
| day 2 | day 3 | 1 | 3 cm | $3 \div 1 = 3$ cm |
| day 3 | day 6 | 3 | 9 cm | $9 \div 3 = 3$ cm |

Every gap gives **3 cm per day**. Ravi's plant was growing perfectly steadily. It only looked bumpy because the
gaps between measurements were bumpy.

The lesson: **differences can only be compared when the steps in time are equal**. When they are not, divide each
difference by its time step to get a rate.

### Tables and graphs

If you draw the tidy plant table as points on a graph (day across, height up) you get points in a **straight line**.
Each step of 1 day to the right takes you 3 cm up, every time, so each step is the same little staircase. Equal
steps make a straight line. The square numbers make a curve that bends upwards, because their steps keep getting
bigger. A table and a graph are two ways of showing the same change. (More in [Graphing a
pattern](../../patterns/level-4/03-graphing-a-pattern.md).)

## Worked examples

**1. Is it steady?** A tank is filled with water, then drained. Minute by minute it holds 200, 185, 170, 155, 140
litres.

Differences: $185 - 200 = -15$, then $-15$, $-15$, $-15$. Constant, so the tank drains **steadily**, 15 litres per
minute. When will it be empty? It loses 15 litres a minute, and $200 \div 15$ is a bit more than 13 (since
$13 \times 15 = 195$). After 13 minutes it holds 5 litres, and it is empty a few seconds later, early in the 14th
minute.

**2. Predicting far ahead.** A jar has 12 marbles, and you add 4 marbles every day. How many after 20 days?

Steady change, +4 each day. After 20 days you have added $20 \times 4 = 80$ marbles, so there are
$12 + 80 = 92$ marbles. (Not $20 \times 4 = 80$: do not forget the 12 you started with.)

**3. Uneven steps.** A puppy is weighed:

| Week | 0 | 2 | 5 | 6 |
| --- | --- | --- | --- | --- |
| Mass (kg) | 3 | 5 | 8.6 | 9.8 |

Per week: $2 \div 2 = 1$ kg, then $3.6 \div 3 = 1.2$ kg, then $1.2 \div 1 = 1.2$ kg. Not quite steady: it gained 1 kg
per week at first and then 1.2 kg per week. The puppy's growth sped up a little after week 2.

## Try it

1. Find the differences and say whether the change is steady: 7, 11, 15, 19, 23. What comes next?
2. Find the differences: 50, 46, 42, 38. Is it steady? What comes next?
3. Find the differences: 2, 3, 5, 8, 12. Is the change steady, speeding up or slowing down? Guess the next number.
4. Hour by hour, the temperature is 12 °C, 14 °C, 17 °C, 21 °C. Is it warming steadily?
5. A sunflower is measured in weeks 0, 2, 5 and 6, and is 10, 16, 25 and 28 cm tall. Was it growing steadily? If it
   keeps going the same way, how tall will it be in week 10?
6. Aisha has 20 dollars and saves 7 dollars every week. After how many weeks will she have 90 dollars?
7. A ball rolls down a slope. Its distance from the top, second by second, is 0, 1, 4, 9, 16 metres. What do the
   differences tell you about the ball?
8. Challenge: find the differences of 1, 2, 4, 8, 16, 32. What do you notice?

??? note "Answers"
    1. Differences +4, +4, +4, +4: **steady**. Next: $23 + 4 = 27$.
    2. Differences −4, −4, −4: **steady** (steadily going down). Next: $38 - 4 = 34$.
    3. Differences +1, +2, +3, +4: getting bigger, so **speeding up**. If the pattern goes on, the next difference
       is +5, giving $12 + 5 = 17$.
    4. Differences +2, +3, +4. **No**: it is warming faster and faster each hour.
    5. Per week: $(16 - 10) \div 2 = 3$, $(25 - 16) \div 3 = 3$, $(28 - 25) \div 1 = 3$. **Yes, steady**, 3 cm per
       week. In week 10 it has grown $10 \times 3 = 30$ cm since week 0, so it is $10 + 30 = 40$ cm.
    6. She needs $90 - 20 = 70$ dollars more. At 7 dollars a week: $70 \div 7 = 10$ weeks.
    7. Differences 1, 3, 5, 7: each second it rolls further than the second before. The ball is **speeding up**.
       (In fact the differences go up by 2 each time, just like the square numbers, and the distances are the
       square numbers.)
    8. Differences 1, 2, 4, 8, 16. They are the **same numbers as the list itself**. Each number doubles, so each
       jump is as big as the number you jumped from. This kind of change speeds up very, very fast.

## Common mistake

**Comparing differences over unequal steps.** "It grew 6 cm and then only 3 cm, so it slowed down" is wrong if the
first gap was 2 days and the second was 1 day. Always check the time row first. If the steps are not equal, work out
the change **per** one step.

**Forgetting the start.** For "start at 12 and add 4 each day", the number after 20 days is $12 + 20 \times 4$, not
$20 \times 4$. The rate tells you how much was **added**, not how much there is.

## Where it leads

- Back: [Telling the story of a graph](03-graph-stories.md) · Next: [Fast at first, then slower](05-fast-then-slower.md)
- [Level 3 page](index.md) · [Change and motion topic page](../index.md)
- Rules for patterns, and patterns as tables: [Patterns level 3](../../patterns/level-3/index.md) and
  [Two kinds of rule](../../patterns/level-4/01-two-kinds-rule.md).
- Differences of differences, a powerful tool later on: [Finite differences](../../patterns/level-5/04-finite-differences.md).
- In [level 4](../level-4/index.md), the "per step" change becomes the **rate of change**, and steady change becomes
  a straight-line rule.
