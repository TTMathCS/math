---
title: "Box plots"
---

# Box plots

*Statistics and data · level 5, lesson 2 of 6*

## A question to start

Two classes wrote the same math test. Here are all 30 scores:

- Class A: 52, 58, 61, 64, 66, 68, 70, 72, 73, 75, 77, 80, 84, 88, 95
- Class B: 40, 55, 63, 70, 74, 76, 78, 79, 81, 82, 84, 86, 89, 91, 93

Which class did better? Class A has the top score, 95. Class B has the bottom score, 40. Staring at two lists of
numbers, it is hard to say anything sure. In this lesson you turn each list into a simple picture, and put the two
pictures on the same scale. Then the answer jumps out in a second.

## The idea

### The five-number summary as a picture

In the last lesson you boiled a list down to five numbers: minimum, $Q_1$, median, $Q_3$, maximum. A **box plot**
(also called a **box-and-whisker plot**) draws exactly those five numbers above a number line.

Here is the box plot of the reading times from the last lesson, whose summary was 12, 18, 25, 34, 55:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 135" role="img" aria-label="Box plot on a scale from 10 to 60: whisker from 12 to 18, box from 18 to 34 with the median line at 25, whisker from 34 to 55; each of the four parts holds about 25 percent of the values">
  <line x1="20" y1="110" x2="420" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="30" y1="110" x2="30" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="30" y="128" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="68" y1="110" x2="68" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="128" font-size="11" text-anchor="middle" fill="currentColor">15</text>
  <line x1="106" y1="110" x2="106" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="128" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <line x1="144" y1="110" x2="144" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="144" y="128" font-size="11" text-anchor="middle" fill="currentColor">25</text>
  <line x1="182" y1="110" x2="182" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="128" font-size="11" text-anchor="middle" fill="currentColor">30</text>
  <line x1="220" y1="110" x2="220" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="220" y="128" font-size="11" text-anchor="middle" fill="currentColor">35</text>
  <line x1="258" y1="110" x2="258" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="258" y="128" font-size="11" text-anchor="middle" fill="currentColor">40</text>
  <line x1="296" y1="110" x2="296" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="128" font-size="11" text-anchor="middle" fill="currentColor">45</text>
  <line x1="334" y1="110" x2="334" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="334" y="128" font-size="11" text-anchor="middle" fill="currentColor">50</text>
  <line x1="372" y1="110" x2="372" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="372" y="128" font-size="11" text-anchor="middle" fill="currentColor">55</text>
  <line x1="410" y1="110" x2="410" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="410" y="128" font-size="11" text-anchor="middle" fill="currentColor">60</text>
  <line x1="45.2" y1="60" x2="90.8" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="45.2" y1="48" x2="45.2" y2="72" stroke="currentColor" stroke-width="2"/>
  <rect x="90.8" y="42" width="121.6" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <line x1="144" y1="42" x2="144" y2="78" stroke="#eea66f" stroke-width="4"/>
  <line x1="212.4" y1="60" x2="372" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="372" y1="48" x2="372" y2="72" stroke="currentColor" stroke-width="2"/>
  <text x="68" y="25" font-size="12" text-anchor="middle" fill="currentColor">25%</text>
  <text x="117.4" y="25" font-size="12" text-anchor="middle" fill="currentColor">25%</text>
  <text x="178.2" y="25" font-size="12" text-anchor="middle" fill="currentColor">25%</text>
  <text x="292.2" y="25" font-size="12" text-anchor="middle" fill="currentColor">25%</text>
  <text x="45.2" y="92" font-size="11" text-anchor="middle" fill="currentColor">min</text>
  <text x="90.8" y="92" font-size="11" text-anchor="middle" fill="currentColor">Q1</text>
  <text x="144" y="92" font-size="11" text-anchor="middle" fill="currentColor">median</text>
  <text x="212.4" y="92" font-size="11" text-anchor="middle" fill="currentColor">Q3</text>
  <text x="372" y="92" font-size="11" text-anchor="middle" fill="currentColor">max</text>
</svg>
</div>

The parts are:

- the **box**, which runs from $Q_1$ to $Q_3$;
- a line across the box at the **median**;
- two **whiskers**, lines that reach out from the box to the minimum and to the maximum.

The American statistician John Tukey made box plots popular in the 1970s, as a way to see the shape of data quickly
with pencil and paper.

### Why every part holds a quarter

The five numbers cut the sorted data into four groups of about the same size. So in a box plot:

- the left whisker covers about **25%** of the values;
- the left part of the box, from $Q_1$ to the median, covers about **25%**;
- the right part of the box covers about **25%**;
- the right whisker covers about **25%**.

The box together holds the **middle half** of the data, about 50%.

This is the most important thing to understand about a box plot: **every part holds about the same number of values,
whatever its length.** A long part does **not** mean more values. It means the same number of values, spread out over
more room. A short part means the values there are packed tightly together.

In the reading-time plot, the right whisker is very long (34 to 55) and the left whisker is short (12 to 18). Both
hold about a quarter of the readers. So the slowest quarter is crowded close together and the top quarter is spread
thin. When one side of a box plot stretches out like this, we say the data are **skewed** towards that side: here,
skewed to the right.

### How to draw a box plot

1. Find the five-number summary.
2. Draw a number line with an even scale that covers everything from the minimum to the maximum. Label it.
3. Above the line, draw short marks at $Q_1$ and $Q_3$ and join them into a box. The height of the box does not matter.
4. Draw a line across the box at the median.
5. Draw the whiskers out to the minimum and maximum, with a small end mark on each.
6. Give the plot a title, and say what the numbers measure (minutes, centimetres, points).

Box plots can also stand up vertically, with the number line on the left. Everything works the same way.

### What a box plot shows, and what it hides

A box plot shows at a glance: the **centre** (the median), the **spread** of the middle half (the width of the box),
the full **range** (whisker end to whisker end), and whether the data lean to one side.

But it hides things too:

- **How many values** there are. A box plot of 10 values and one of 10 000 values can look identical.
- **Gaps and clusters** inside a part. If all the values in the box are bunched at its two ends, the box plot cannot
  show it. A stem-and-leaf plot or a histogram would.
- **The mean.** Some software adds the mean as a small cross or diamond, but a plain box plot does not show it.

So a box plot is a summary, not the whole story. It is best at one job: **comparing groups**.

### Comparing groups side by side

Here are the two classes from the start, drawn on **one** scale:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 165" role="img" aria-label="Two box plots on one scale from 30 to 100. Class A: 52, 64, 72, 80, 95. Class B: 40, 70, 79, 86, 93">
  <line x1="60" y1="140" x2="420" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="140" x2="70" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="158" font-size="11" text-anchor="middle" fill="currentColor">30</text>
  <line x1="118.6" y1="140" x2="118.6" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="118.6" y="158" font-size="11" text-anchor="middle" fill="currentColor">40</text>
  <line x1="167.1" y1="140" x2="167.1" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="167.1" y="158" font-size="11" text-anchor="middle" fill="currentColor">50</text>
  <line x1="215.7" y1="140" x2="215.7" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="215.7" y="158" font-size="11" text-anchor="middle" fill="currentColor">60</text>
  <line x1="264.3" y1="140" x2="264.3" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="264.3" y="158" font-size="11" text-anchor="middle" fill="currentColor">70</text>
  <line x1="312.9" y1="140" x2="312.9" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="312.9" y="158" font-size="11" text-anchor="middle" fill="currentColor">80</text>
  <line x1="361.4" y1="140" x2="361.4" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="361.4" y="158" font-size="11" text-anchor="middle" fill="currentColor">90</text>
  <line x1="410" y1="140" x2="410" y2="145" stroke="currentColor" stroke-width="1"/>
  <text x="410" y="158" font-size="11" text-anchor="middle" fill="currentColor">100</text>
  <text x="35" y="55" font-size="12" text-anchor="middle" fill="currentColor">Class A</text>
  <line x1="176.9" y1="50" x2="235.1" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="176.9" y1="40" x2="176.9" y2="60" stroke="currentColor" stroke-width="2"/>
  <rect x="235.1" y="35" width="77.7" height="30" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <line x1="274" y1="35" x2="274" y2="65" stroke="#eea66f" stroke-width="4"/>
  <line x1="312.9" y1="50" x2="385.7" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="385.7" y1="40" x2="385.7" y2="60" stroke="currentColor" stroke-width="2"/>
  <text x="35" y="105" font-size="12" text-anchor="middle" fill="currentColor">Class B</text>
  <line x1="118.6" y1="100" x2="264.3" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="118.6" y1="90" x2="118.6" y2="110" stroke="currentColor" stroke-width="2"/>
  <rect x="264.3" y="85" width="77.7" height="30" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <line x1="308" y1="85" x2="308" y2="115" stroke="#eea66f" stroke-width="4"/>
  <line x1="342" y1="100" x2="376" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="376" y1="90" x2="376" y2="110" stroke="currentColor" stroke-width="2"/>
</svg>
</div>

The summaries are: Class A, 52, 64, 72, 80, 95; Class B, 40, 70, 79, 86, 93. Now the comparison is easy:

- **Centre.** Class B's median (79) is 7 points above Class A's (72). Class B's whole box sits further right.
- **Spread of the middle half.** Both boxes are 16 points wide ($80 - 64 = 16$ and $86 - 70 = 16$). The middle
  halves of the classes are equally spread out.
- **Range.** Class B's range is bigger ($93 - 40 = 53$ against $95 - 52 = 43$), but almost all of that comes from one
  student who scored 40. In the next lesson you will see that 40 counts as an **outlier**.
- **A strong statement.** Class B's $Q_1$ is 70, so about three quarters of Class B scored 70 or more. In Class A,
  about half scored 72 or less.

So, on the whole, Class B did better, even though Class A had the single best score.

Always compare box plots on the **same** scale. Two box plots drawn on different number lines can make a narrow box
look wide.

<figure class="play" data-play="stats" data-show="spread"><span class="ai-tag">AI-created</span><figcaption><b>Build a box plot.</b> Add and remove values and watch the box and whiskers.</figcaption></figure>

## Worked examples

**1. Drawing a box plot.** Ten friends' push-up counts have the summary 3, 6, 10, 14, 20 (from the last lesson).

1. A scale from 0 to 22, counting by 2, fits everything.
2. Box from 6 to 14, median line at 10.
3. Whiskers from 3 to 6 and from 14 to 20.
4. Title: "Push-ups, 10 friends".

The two halves of the box are equal (4 each), and the right whisker (6) is a little longer than the left (3), so the
data are fairly balanced with a slightly longer upper tail.

**2. Reading a box plot.** This box plot shows the number of minutes 40 students spent on homework one evening.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 105" role="img" aria-label="Box plot on a scale from 0 to 50: minimum 4, Q1 15, median 22, Q3 26, maximum 45">
  <line x1="20" y1="80" x2="420" y2="80" stroke="currentColor" stroke-width="1"/>
  <line x1="30" y1="80" x2="30" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="30" y="98" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="68" y1="80" x2="68" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="98" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="106" y1="80" x2="106" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="98" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="144" y1="80" x2="144" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="144" y="98" font-size="11" text-anchor="middle" fill="currentColor">15</text>
  <line x1="182" y1="80" x2="182" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="98" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <line x1="220" y1="80" x2="220" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="220" y="98" font-size="11" text-anchor="middle" fill="currentColor">25</text>
  <line x1="258" y1="80" x2="258" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="258" y="98" font-size="11" text-anchor="middle" fill="currentColor">30</text>
  <line x1="296" y1="80" x2="296" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="98" font-size="11" text-anchor="middle" fill="currentColor">35</text>
  <line x1="334" y1="80" x2="334" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="334" y="98" font-size="11" text-anchor="middle" fill="currentColor">40</text>
  <line x1="372" y1="80" x2="372" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="372" y="98" font-size="11" text-anchor="middle" fill="currentColor">45</text>
  <line x1="410" y1="80" x2="410" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="410" y="98" font-size="11" text-anchor="middle" fill="currentColor">50</text>
  <line x1="60.4" y1="40" x2="144" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="60.4" y1="30" x2="60.4" y2="50" stroke="currentColor" stroke-width="2"/>
  <rect x="144" y="25" width="83.6" height="30" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <line x1="197.2" y1="25" x2="197.2" y2="55" stroke="#eea66f" stroke-width="4"/>
  <line x1="227.6" y1="40" x2="372" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="372" y1="30" x2="372" y2="50" stroke="currentColor" stroke-width="2"/>
</svg>
</div>

Read off the summary: minimum 4, $Q_1 = 15$, median 22, $Q_3 = 26$, maximum 45.

- About what percent spent more than 26 minutes? $Q_3$ is 26, so about **25%**.
- About how many students spent between 15 and 26 minutes? That is the box, the middle half: about $40 \div 2 =$
  **20 students**.
- About what percent spent 15 minutes or more? Everything except the left whisker: about **75%**.
- Range: $45 - 4 = 41$ minutes. Width of the box: $26 - 15 = 11$ minutes.
- Shape: from 22 to 26 is only 4 minutes, but from 26 to 45 is 19 minutes. The third quarter is packed tightly and
  the top quarter is very spread out: the data are skewed to the right.

**3. Two box plots, a fair conclusion.** For the two classes above, a student writes: "Class A did better, because the
best score was in Class A." Why is that a weak argument?

One student's score is a single value at the very end of a whisker. It tells you about one person, not about the
class. The medians and the boxes describe the bulk of each class, and they put Class B ahead. A good comparison talks
about the **centre** and the **spread**, and mentions single extreme values only as extra detail.

**4. Same picture, different data.** The lists 1, 3, 5, 7, 9, 11, 13 and 1, 3, 6, 7, 8, 11, 13 both have the
five-number summary 1, 3, 7, 11, 13. So their box plots are exactly the same. This is the sense in which a box plot
"hides" detail: in the second list the middle values are bunched near 7, but the picture cannot show it.

## Try it

1. Find the five-number summary of 2, 5, 7, 8, 10, 12, 13, 15, 21 and describe how you would draw its box plot.
2. In the homework box plot (worked example 2), what fraction of the students spent between 22 and 45 minutes?
3. A box plot of 60 values has $Q_1 = 30$ and $Q_3 = 50$. About how many values are between 30 and 50? About how many
   are above 50?
4. True or false: "The right whisker of the homework box plot is longer than the whole box, so more students are in
   the top quarter than in the middle half." Explain.
5. In Class A, the top score was 95. Suppose it had been 100 instead. Which parts of the box plot change?
6. Two box plots of heights are drawn, one for 12-year-olds and one for 14-year-olds. The 14-year-olds' box is further
   right and wider. Describe what this means in a sentence about the two groups.
7. Explain why a box plot alone cannot tell you how many students are in a class.

??? note "Answers"
    1. Sorted already, $n = 9$. Median: 5th value, **10**. Lower half 2, 5, 7, 8: $Q_1 = (5 + 7) \div 2 = 6$. Upper
       half 12, 13, 15, 21: $Q_3 = (13 + 15) \div 2 = 14$. Summary: **2, 6, 10, 14, 21**. Draw a scale from 0 to 22,
       a box from 6 to 14 with a line at 10, and whiskers to 2 and 21.
    2. From the median (22) to the maximum (45) is the upper half: about **half** of them, so about 20 students.
    3. Between the quartiles is the middle half: about **30** values. Above $Q_3$ is about a quarter: about **15**.
    4. **False.** The right whisker holds about a quarter of the students and the box holds about half. The whisker is
       long because those students' times are spread out, not because there are more of them.
    5. Only the right whisker changes: it now reaches 100. The minimum, $Q_1$, median and $Q_3$ do not depend on how
       big the largest value is, as long as it stays the largest.
    6. For example: "The 14-year-olds are generally taller (their median is higher), and their heights vary more (the
       middle half of them covers a wider range of heights)."
    7. The box plot shows only five numbers, which are positions in the sorted list. Ten values or a thousand values
       can have the same five numbers, so the same picture.

## Common mistake

**Reading length as amount.** The longest part of a box plot is the most spread out, not the most crowded. Each of the
four parts holds about a quarter of the data. If you catch yourself saying "most of the data are in the long whisker",
stop: it is the other way round. The values in the long whisker are the most **scattered**.

**Comparing box plots on different scales.** Two box plots only compare honestly when they share one number line.

## Where it leads

- Back: [Quartiles and the five-number summary](01-quartiles-five-number.md) · Next: [Interquartile range and
  outliers](03-iqr-outliers.md), where the whiskers learn to stop before an outlier.
- [Level 5 page](index.md) · [Statistics topic page](../index.md)
- Box plots and histograms tell the same story in two ways; histograms are in
  [level 4](../level-4/02-histograms.md), and the shapes of distributions (skewed, symmetric) come back in
  [level 7](../level-7/index.md).
