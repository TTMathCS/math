---
title: "Histograms"
---

# Histograms

*Statistics and data · level 4, lesson 2 of 6*

## A question to start

A school nurse measures the heights of the 24 students in a grade 6 class, in centimetres:

150, 146, 163, 138, 152, 157, 141, 149, 155, 132, 168, 151, 144, 153, 161, 147, 172, 150, 145, 158, 154, 165, 148, 156

She wants a picture that shows how the heights are spread out. A bar graph with one bar per height would need a bar
for 132, a bar for 138, a bar for 141, ... 22 different heights, most with one student each. That picture would be a
row of short, equal bars: it tells you almost nothing.

The trick is to stop asking "how many are **exactly** 150 cm?" and ask "how many are **between** 150 and 160 cm?".
That one change gives one of the most useful pictures in all of statistics, the **histogram**.

## The idea

### Grouping into intervals

An **interval** (also called a **class** or a **bin**) is a stretch of values, such as "150 cm up to, but not
including, 160 cm". We cut the whole number line that the data cover into intervals that are:

- **equal in width** (every interval 10 cm long, for example);
- **touching**, with no gaps between them;
- **not overlapping**, so every value falls into exactly **one** interval.

The last point needs care at the edges. Does 150 go into "140-150" or "150-160"? We must decide once and for all.
The usual rule is: **an interval includes its left end and not its right end**. So "150 to under 160" contains 150 and
159.9, but not 160. For heights rounded to whole centimetres, people often write this interval as 150-159.

### A frequency table

The **frequency** of an interval is how many values fall in it. Go through the data once, making a tally for each
value in the right interval, then count. (Ordering the data first makes this easier: 132, 138, 141, 144, 145, 146,
147, 148, 149, 150, 150, 151, 152, 153, 154, 155, 156, 157, 158, 161, 163, 165, 168, 172.)

| Height (cm) | Tally | Frequency |
| --- | --- | --- |
| 130-139 | 2 marks | 2 |
| 140-149 | 7 marks | 7 |
| 150-159 | 10 marks | 10 |
| 160-169 | 4 marks | 4 |
| 170-179 | 1 mark | 1 |
| **Total** | | **24** |

The total must equal the number of values, 24. It does, so no student was missed or counted twice.

### Drawing the histogram

A **histogram** is a graph of a frequency table for number data. Along the bottom is a **number line** of the measured
value (height), with the interval edges marked. Above each interval stands a bar whose height is the frequency.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 250" role="img" aria-label="Histogram of 24 heights. 130 to 140: 2. 140 to 150: 7. 150 to 160: 10. 160 to 170: 4. 170 to 180: 1. The bars touch">
  <g stroke="currentColor" stroke-width="1" opacity="0.3">
    <line x1="60" y1="170" x2="370" y2="170"/><line x1="60" y1="140" x2="370" y2="140"/><line x1="60" y1="110" x2="370" y2="110"/>
    <line x1="60" y1="80" x2="370" y2="80"/><line x1="60" y1="50" x2="370" y2="50"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.2">
    <rect x="60" y="170" width="60" height="30"/><rect x="120" y="95" width="60" height="105"/>
    <rect x="180" y="50" width="60" height="150" fill="#eea66f"/><rect x="240" y="140" width="60" height="60"/>
    <rect x="300" y="185" width="60" height="15"/>
  </g>
  <line x1="60" y1="200" x2="370" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="60" y1="40" x2="60" y2="200" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="216">130</text><text x="120" y="216">140</text><text x="180" y="216">150</text><text x="240" y="216">160</text>
    <text x="300" y="216">170</text><text x="360" y="216">180</text>
    <text x="210" y="236">Height (cm)</text><text x="210" y="24">Heights of 24 students</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="204">0</text><text x="54" y="174">2</text><text x="54" y="144">4</text><text x="54" y="114">6</text>
    <text x="54" y="84">8</text><text x="54" y="54">10</text>
  </g>
  <text x="18" y="120" font-size="12" fill="currentColor" text-anchor="middle" transform="rotate(-90 18 120)">Frequency</text>
</svg>
</div>

Now the shape of the data is plain to see: most heights are in the middle, around 150 cm; there are fewer and fewer
students as you go towards very short or very tall; and the shape is roughly balanced, with the tallest bar near the
middle. The interval with the highest bar, 150-159, is called the **modal class** (the interval version of the mode).

### Why the bars touch

In a histogram the bars **touch**, and that is not decoration. The bottom axis is a number line, and every point on it
is a possible height. The interval 140-150 ends exactly where 150-160 begins: there is no height that falls "between"
them. A gap between bars would suggest that some heights are impossible, which is false.

In an ordinary **bar graph** of categories (favourite sports, colours), the bars are separate, with gaps, because the
categories are separate things: nothing lies between "soccer" and "hockey", and the order is your choice.

| | Bar graph | Histogram |
| --- | --- | --- |
| Data | categories (or a few separate values) | numbers that are measured or counted, grouped into intervals |
| Bottom axis | labels, in any order | a number line, in order |
| Bars | separated by gaps | touching |
| Can you rearrange the bars? | yes | no, the order is fixed by the numbers |

### Choosing the interval width

The width of the intervals is your choice, and it changes the picture. Here are the same 24 heights with intervals 5
cm wide:

| Height (cm) | 130 | 135 | 140 | 145 | 150 | 155 | 160 | 165 | 170 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Frequency | 1 | 1 | 2 | 5 | 6 | 4 | 2 | 2 | 1 |

(Each column is the interval starting at that height: "145" means 145 to under 150.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 240" role="img" aria-label="Histogram of the same heights with intervals of 5 cm: 1, 1, 2, 5, 6, 4, 2, 2, 1. The bars touch">
  <g stroke="currentColor" stroke-width="1" opacity="0.3">
    <line x1="60" y1="170" x2="340" y2="170"/><line x1="60" y1="140" x2="340" y2="140"/><line x1="60" y1="110" x2="340" y2="110"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="1.2">
    <rect x="60" y="185" width="30" height="15"/><rect x="90" y="185" width="30" height="15"/><rect x="120" y="170" width="30" height="30"/>
    <rect x="150" y="125" width="30" height="75"/><rect x="180" y="110" width="30" height="90"/><rect x="210" y="140" width="30" height="60"/>
    <rect x="240" y="170" width="30" height="30"/><rect x="270" y="170" width="30" height="30"/><rect x="300" y="185" width="30" height="15"/>
  </g>
  <line x1="60" y1="200" x2="340" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="60" y1="90" x2="60" y2="200" stroke="currentColor" stroke-width="2"/>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="60" y="216">130</text><text x="120" y="216">140</text><text x="180" y="216">150</text><text x="240" y="216">160</text>
    <text x="300" y="216">170</text><text x="200" y="234">Height (cm)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="204">0</text><text x="54" y="174">2</text><text x="54" y="144">4</text><text x="54" y="114">6</text>
  </g>
</svg>
</div>

The same hill shape shows up, with more detail and a little more bumpiness. Now imagine the two extremes:

- **Too wide**: one interval, 130-180, with all 24 students. One big block. All shape is lost.
- **Too narrow**: intervals of 1 cm. Most bars are 0 or 1 high, a comb of tiny bars. The shape drowns in detail.

A good histogram is in between. A common rule of thumb is **about 5 to 10 intervals**, with a width that is a "nice"
number (2, 5, 10, 20, ...) so that the edges are easy to read. Start the first interval at a nice number just below
the smallest value. Different widths can give slightly different pictures of the same data, so an honest analyst
tries a couple and checks that the story does not depend on the choice.

### What a histogram loses

Grouping throws something away: once the heights are in a histogram, you no longer know that the two shortest students
were 132 and 138 cm, only that two were in 130-139. So you **cannot** find the exact mean or median from a histogram,
only the interval the median falls in. That is the price of a clearer picture. (A stem-and-leaf plot, from level 3,
keeps every value, which is why it is handy for small data sets; for hundreds or thousands of values, histograms win.)

## Worked examples

**1. Reading the histogram.** Using the 10 cm histogram:

- How many students are at least 160 cm? Intervals 160-169 and 170-179: $4 + 1 = 5$ students.
- What fraction are under 150 cm? $2 + 7 = 9$ of 24, which simplifies to $\frac{3}{8}$.

**2. Which interval holds the median?** There are 24 values, so the median is halfway between the 12th and 13th.
Count up from the left: the first interval holds values 1-2, the second values 3-9, the third values 10-19. The 12th
and 13th are both in **150-159**. (From the ordered list, they are 151 and 152, so the median is 151.5; the histogram
alone only tells you the interval.)

**3. Building a frequency table.** Minutes 20 children spent on homework: 12, 35, 28, 41, 19, 25, 33, 8, 22, 30, 27,
45, 15, 38, 29, 24, 31, 17, 26, 36.

1. Smallest 8, largest 45. Intervals of width 10, starting at 0: 0-9, 10-19, 20-29, 30-39, 40-49 (five intervals).
2. Tally: 0-9: 8, that is **1**. 10-19: 12, 19, 15, 17, that is **4**. 20-29: 28, 25, 22, 27, 29, 24, 26, that is
   **7**. 30-39: 35, 33, 30, 38, 31, 36, that is **6**. 40-49: 41, 45, that is **2**.
3. Check: $1 + 4 + 7 + 6 + 2 = 20$. ✓
4. Draw five touching bars of heights 1, 4, 7, 6, 2 above the number line from 0 to 50. Modal class: 20-29 minutes.

**4. Histogram or bar graph?** (a) The number of children choosing each school club: a **bar graph** (categories).
(b) The masses of 200 apples: a **histogram** (measured numbers, many values). (c) The number of brothers and sisters
of each child (0, 1, 2, 3, 4): only a few separate whole numbers, so a bar graph or line plot with one bar per value is
best; no grouping is needed.

## Try it

1. Why do the bars of a histogram touch?
2. Using the interval rule "include the left end, not the right end", which interval does 160 cm go into: 150-160 or
   160-170?
3. Using the 5 cm table of heights, how many students are 145 cm or taller but under 155 cm?
4. Make a frequency table with intervals 0-9, 10-19, ... for these quiz scores out of 50: 23, 41, 37, 15, 29, 33, 48,
   27, 31, 36, 19, 44, 38, 25, 34.
5. For the scores in question 4, which interval contains the median?
6. A histogram of 30 values has bars of heights 3, 8, 12, 5 and an unknown last bar. What is the last bar's height?
7. Explain why you cannot find the exact range of a data set from its histogram, but you can give a largest possible
   range.
8. Someone draws a histogram of 50 values with intervals of width 100 when all the values are between 0 and 120.
   What goes wrong, and what would you suggest?

??? note "Answers"
    1. The bottom axis is a number line with no gaps: each interval ends exactly where the next begins, and every
       value belongs to one of them.
    2. 160-170 (160 is the left end of that interval, and the right end of 150-160 is not included).
    3. Intervals 145 and 150: $5 + 6 = 11$ students.
    4. 10-19: 15, 19, that is 2. 20-29: 23, 29, 27, 25, that is 4. 30-39: 37, 33, 31, 36, 38, 34, that is 6.
       40-49: 41, 48, 44, that is 3. Total $2 + 4 + 6 + 3 = 15$. ✓
    5. 15 values, so the 8th. The first two intervals hold values 1-6, the third holds 7-12. The 8th is in **30-39**.
    6. $30 - (3 + 8 + 12 + 5) = 30 - 28 = 2$.
    7. You only know which interval the smallest and largest values are in, not the values themselves. The range is at
       most (right end of the last non-empty interval) minus (left end of the first one).
    8. Only two intervals, 0-99 and 100-199, and the second is mostly empty space. Almost all the shape is lost. Use
       about 6 to 12 intervals of width 10 or 20.

## Common mistake

**Leaving gaps between histogram bars, or using unequal intervals without saying so.** Gaps suggest values are
impossible. Unequal intervals make a wide interval's bar look important just because it collects more values; keep
intervals equal at this level. (Lesson 6 of this level shows how unequal intervals can mislead.)

**Letting intervals overlap.** "140-150" and "150-160" with no rule means 150 is counted twice. Decide which interval
owns each edge.

## Where it leads

- Back: [Which average is fair?](01-which-average.md) · Next: [Circle graphs](03-circle-graphs.md)
- [Level 4 page](index.md) · [Statistics topic page](../index.md)
- Stem-and-leaf plots, which group by tens and keep every value: [level 3, lesson 5](../level-3/05-stem-and-leaf.md).
- The shapes that histograms reveal (balanced, lopsided, two humps) are named in level 7, and the smooth bell curve
  that many histograms resemble is the normal curve.
- Counting how many fall in each interval is careful counting: [Counting](../../counting/index.md).
