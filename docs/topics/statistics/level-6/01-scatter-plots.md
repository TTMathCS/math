---
title: "Scatter plots"
---

# Scatter plots

*Statistics and data · level 6, lesson 1 of 6*

## A question to start

Ten students kept track of how many hours they studied for a test, and then wrote down their score.

| Student | A | B | C | D | E | F | G | H | I | J |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hours studied | 1 | 2 | 2 | 3 | 4 | 5 | 5 | 6 | 7 | 8 |
| Test score | 52 | 58 | 65 | 61 | 70 | 68 | 78 | 80 | 79 | 90 |

Does studying more go with a higher score? Mostly, it seems. But not always: student E studied 4 hours and scored 70,
while student F studied 5 hours and scored only 68. Is there a real pattern here, or just noise? With twenty numbers
in a table, it is hard to tell. With one picture, you will see it in a second.

## The idea

### Two numbers for each person

Every graph in levels 1 to 5 showed **one** measurement per person: one height, one score, one travel time. Data with
one measurement per person is called **one-variable data**. (A **variable** is any quantity or quality that can vary
from one person or thing to the next.)

The table above is different. Each student gives us **two** numbers: hours and score. This is **two-variable data**,
also called **paired data**, because the two numbers belong together. You must never separate them: the 65 belongs to
student C, who studied 2 hours, and nobody else.

The question for two-variable data is new too. It is no longer "what is typical?" but "**how are the two variables
related?**" Do they rise together? Does one fall when the other rises? Or do they have nothing to do with each other?

### The scatter plot

A **scatter plot** draws each pair as **one dot** on a coordinate grid. The first number tells you how far across to
go, the second how far up, exactly as you plot points $(x, y)$ in geometry. Student A, with 1 hour and 52 points,
becomes the point $(1, 52)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 300" role="img" aria-label="Scatter plot of hours studied, 0 to 9, against test score, 40 to 100, with ten dots rising from lower left to upper right">
  <line x1="60" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="20" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="268" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="97.8" y1="250" x2="97.8" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="97.8" y="268" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="135.6" y1="250" x2="135.6" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="135.6" y="268" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="173.3" y1="250" x2="173.3" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="173.3" y="268" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="211.1" y1="250" x2="211.1" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="211.1" y="268" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="248.9" y1="250" x2="248.9" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="248.9" y="268" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="286.7" y1="250" x2="286.7" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="286.7" y="268" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="324.4" y1="250" x2="324.4" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="324.4" y="268" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="362.2" y1="250" x2="362.2" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="362.2" y="268" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="400" y1="250" x2="400" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="400" y="268" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <line x1="55" y1="250" x2="60" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="254" font-size="11" text-anchor="end" fill="currentColor">40</text>
  <line x1="55" y1="211.7" x2="60" y2="211.7" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="215.7" font-size="11" text-anchor="end" fill="currentColor">50</text>
  <line x1="55" y1="173.3" x2="60" y2="173.3" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="177.3" font-size="11" text-anchor="end" fill="currentColor">60</text>
  <line x1="55" y1="135" x2="60" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="139" font-size="11" text-anchor="end" fill="currentColor">70</text>
  <line x1="55" y1="96.7" x2="60" y2="96.7" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="100.7" font-size="11" text-anchor="end" fill="currentColor">80</text>
  <line x1="55" y1="58.3" x2="60" y2="58.3" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="62.3" font-size="11" text-anchor="end" fill="currentColor">90</text>
  <line x1="55" y1="20" x2="60" y2="20" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="24" font-size="11" text-anchor="end" fill="currentColor">100</text>
  <text x="230" y="292" font-size="12" text-anchor="middle" fill="currentColor">hours studied</text>
  <text x="16" y="135" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 16 135)">test score</text>
  <circle cx="97.8" cy="204" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="135.6" cy="181" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="135.6" cy="154.2" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="173.3" cy="169.5" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="211.1" cy="135" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="248.9" cy="142.7" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="248.9" cy="104.3" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="286.7" cy="96.7" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="324.4" cy="100.5" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="362.2" cy="58.3" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

Now the pattern is plain: the dots climb from the lower left to the upper right. Students who studied more generally
scored more. The dots do not lie exactly on a line (E and F are a little out of step), but the overall trend is clear.

### Which variable goes where?

Often one variable may help to **explain** or **predict** the other. Here, the hours studied might help explain the
score; it would be strange to say that the score explains how long someone studied, because the studying happened
first.

- The **independent variable** (also called the **explanatory variable**) is the one that may explain or predict. It
  goes on the **horizontal** axis, the $x$-axis.
- The **dependent variable** (also called the **response variable**) is the one we think may **depend** on the
  other. It goes on the **vertical** axis, the $y$-axis.

So: hours studied on the $x$-axis, test score on the $y$-axis.

How do you decide? Ask: "Which one would I like to **predict** from the other?" or "Which one happens first?" The
temperature outside might explain how many hot chocolates a café sells, so temperature is independent and sales are
dependent. Sometimes neither variable explains the other, for example a person's arm span and their height. Then you
may put either one on either axis; just label clearly.

The word "dependent" is only a name for a role in the graph. Putting a variable on the $y$-axis does not **prove** that
it depends on $x$. That question is so important that lesson 5 is all about it.

### Drawing a good scatter plot

1. Decide which variable is $x$ and which is $y$.
2. Choose a scale for each axis that covers the smallest to the largest value, with **equal steps**. The two axes may
   have different scales.
3. An axis does not have to start at 0. In the scatter plot above, the scores start at 40, so the dots use the
   whole picture instead of being squashed at the top. (This is fine for a scatter plot, where we look at the
   pattern, not at bar heights. If you like, mark the break in the axis with a small zigzag.)
4. Label both axes with the variable and its units, and give the graph a title.
5. Plot each pair as one dot. If two pairs are identical, draw the dot a little bigger or write "2" beside it, so no
   data are lost.
6. **Do not join the dots.** The dots are separate people, not a journey over time. A broken-line graph (level 3)
   joins its points because one thing changes over time; a scatter plot does not.

### Reading a scatter plot

A scatter plot answers two kinds of question.

- **About single dots.** Who studied the most? Did anyone score high with little study? Is there a dot far from the
  others (an outlier)?
- **About the whole cloud.** Does the cloud go up, go down, or neither? Is it a narrow band or a wide blob? Is it
  straight or curved? This overall pattern is called the **trend**, and the next lesson gives you the words to
  describe it.

## Worked examples

**1. Plotting points.** Plot student G (5 hours, 78 points) and student J (8 hours, 90 points).

- G: go 5 across, up to 78 (a little below the 80 line). Dot.
- J: go 8 across, up to 90. Dot.

On the plot above, G is the upper of the two dots at 5 hours; F, with 68, is the lower.

**2. Choosing the axes.** For each pair, which variable would you put on the $x$-axis?

- Outdoor temperature and number of ice creams sold at a beach stand: **temperature** on $x$ (it may help explain
  the sales).
- Age of a car and its selling price: **age** on $x$ (we want to predict price from age).
- Hand length and foot length of the students in a class: **either**. Neither causes the other; both grow together.
  Pick one and label clearly.

**3. Reading the study scatter plot.**

- How many students studied 5 hours or more? Count dots on or to the right of 5: F, G, H, I, J, so **5**.
- Did every extra hour mean a higher score? **No.** E (4 hours, 70) beat F (5 hours, 68), and H (6 hours, 80) beat
  I (7 hours, 79). The trend is upward, but individual students vary.
- What is the overall trend? Upward: more hours goes with higher scores. Roughly, each extra hour goes with about 5
  more points, since the scores rise from about 50 to about 90 while the hours go from 1 to 8. (You will make this
  exact in lesson 3.)

**4. Two variables from space.** Here are the average distances of six planets from the Sun, in astronomical units
(1 unit is Earth's average distance), and the time each takes to go once round the Sun, in Earth years:

| Planet | Mercury | Venus | Earth | Mars | Jupiter | Saturn |
| --- | --- | --- | --- | --- | --- | --- |
| Distance (AU) | 0.39 | 0.72 | 1 | 1.52 | 5.20 | 9.54 |
| Year length (Earth years) | 0.24 | 0.62 | 1 | 1.88 | 11.86 | 29.46 |

Distance on $x$, year length on $y$: the further the planet, the longer its year. A year on Mars lasts about 1.88
Earth years (687 Earth days), so a Mars birthday comes round less than every two of ours. If you plot these six
dots, you will see they curve **upwards**: the year grows faster than the distance. Johannes Kepler found the exact
rule in 1619: the square of the year length equals the cube of the distance, in these units. (Check Mars:
$1.88^2 \approx 3.53$ and $1.52^3 \approx 3.51$.)

## Try it

1. The arm span and height (both in cm) of six people are: (150, 148), (162, 160), (170, 172), (158, 155),
   (175, 178), (165, 163). Plot them on a scatter plot. Describe the trend.
2. For each pair, say which variable you would put on the $x$-axis: (a) hours of sunshine in a day and the number of
   people at a pool; (b) number of pages in a book and the time it takes to read; (c) a person's shoe size and their
   height.
3. In the study scatter plot, which student studied the least? Which scored the most?
4. Two students both studied 2 hours. Why does the scatter plot still show two dots at $x = 2$?
5. Why should you not join the dots of a scatter plot with lines?
6. A café owner plots daily temperature ($x$) against hot chocolates sold ($y$) and sees the dots go down from left to
   right. Describe the pattern in a sentence.
7. Your friend's scatter plot has 9 dots, but the table had 10 pairs. Give a possible reason, and how to fix it.

??? note "Answers"
    1. Put arm span (or height) on one axis, from about 145 to 180, and the other on the other axis. The six dots lie
       close to a rising line: people with a longer arm span tend to be taller, and arm span is close to height for
       each person.
    2. (a) Hours of sunshine (it may explain pool visits). (b) Number of pages (it may explain reading time).
       (c) Either: neither causes the other.
    3. Student A studied least (1 hour). Student J scored most (90).
    4. They are two different students, B (58 points) and C (65 points), so they are two dots at different heights.
    5. Each dot is a separate person (or thing). Lines would suggest a path from one dot to the next, which means
       nothing here. Lines are for data that change over time.
    6. For example: "On warmer days the café sells fewer hot chocolates."
    7. Two pairs may have been identical, so two dots landed in the same place; or a pair was missed. Check the table
       against the dots, and mark a repeated pair with a bigger dot or a "2".

## Common mistake

**Splitting the pairs.** A scatter plot only makes sense if each dot uses two numbers from the **same** person. If
you sort the hours and the scores separately and then pair the smallest with the smallest, you invent a perfect
pattern that is not in the data.

**Putting the variables on the wrong axes.** If you want to predict $y$ from $x$, the variable you are predicting
goes up the side. Swapping them does not change the dots' pattern much, but it changes the line you fit in lesson 3
and the predictions you make.

## Where it leads

- Back: [Bias](../level-5/06-bias.md) (the end of level 5) · Next: [Correlation](02-correlation.md)
- [Level 6 page](index.md) · [Statistics topic page](../index.md)
- Plotting points $(x, y)$ is the coordinate grid of [geometry level 3](../../geometry/level-3/06-coordinates-grid.md).
- Graphs where $y$ is exactly decided by $x$, with no scatter, are the functions of [algebra](../../algebra/index.md).
