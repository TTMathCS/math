---
title: "Double bar graphs and broken-line graphs"
---

# Double bar graphs and broken-line graphs

*Statistics and data · level 3, lesson 6 of 6*

## A question to start

The grade 4 class and the grade 5 class each vote for their favourite sport. The grade 4 teacher draws a bar graph
on one page, and the grade 5 teacher draws a bar graph on another page, with a different scale. Now someone asks:
"Which sport is more popular in grade 5 than in grade 4?" You flip back and forth between the pages, squinting at the
two scales...

There is a better way: put **both** classes on **one** graph, side by side. And when the data are not groups but
**moments in time** (the temperature each day, the height of a plant each week), there is a graph that shows the
**change**: a line that goes up and down. This lesson is about those two graphs, and about one careful question:
when is it honest to **join the dots**?

## The idea

### The parts every graph needs

Every graph in this lesson, like the bar graphs of level 2, needs:

- a **title** that says what the graph is about;
- **labels** on both axes (the two edge lines), saying what is measured and in what unit;
- a **scale** with equal steps, starting at 0 for bar graphs;
- for graphs with two groups, a **legend** (also called a key): a little box that says which colour is which group.

### The double bar graph

A **double bar graph** shows two groups on the same set of categories. Each category gets a **pair** of bars standing
next to each other, one in each colour.

| Favourite sport | Grade 4 | Grade 5 |
| --- | --- | --- |
| Soccer | 8 | 6 |
| Hockey | 5 | 9 |
| Basketball | 4 | 7 |
| Swimming | 7 | 3 |
| **Total** | **24** | **25** |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 260" role="img" aria-label="Double bar graph of favourite sport. Soccer: grade 4 8, grade 5 6. Hockey: 5 and 9. Basketball: 4 and 7. Swimming: 7 and 3. Orange is grade 4, blue is grade 5">
  <g stroke="currentColor" stroke-width="1" opacity="0.3">
    <line x1="50" y1="168" x2="410" y2="168"/><line x1="50" y1="136" x2="410" y2="136"/><line x1="50" y1="104" x2="410" y2="104"/>
    <line x1="50" y1="72" x2="410" y2="72"/><line x1="50" y1="40" x2="410" y2="40"/>
  </g>
  <rect x="70" y="72" width="26" height="128" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="104" width="26" height="96" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="155" y="120" width="26" height="80" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="181" y="56" width="26" height="144" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="240" y="136" width="26" height="64" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="266" y="88" width="26" height="112" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="325" y="88" width="26" height="112" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="351" y="152" width="26" height="48" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <line x1="50" y1="200" x2="410" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="30" x2="50" y2="200" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="44" y="204">0</text><text x="44" y="172">2</text><text x="44" y="140">4</text><text x="44" y="108">6</text>
    <text x="44" y="76">8</text><text x="44" y="44">10</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="96" y="216">Soccer</text><text x="181" y="216">Hockey</text><text x="266" y="216">Basketball</text>
    <text x="351" y="216">Swimming</text>
    <text x="230" y="20">Favourite sport by grade</text>
  </g>
  <text x="16" y="120" font-size="12" fill="currentColor" text-anchor="middle" transform="rotate(-90 16 120)">Number of children</text>
  <rect x="140" y="232" width="14" height="14" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="160" y="244" font-size="12" fill="currentColor">Grade 4</text>
  <rect x="240" y="232" width="14" height="14" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="260" y="244" font-size="12" fill="currentColor">Grade 5</text>
</svg>
</div>

Now two kinds of comparison are easy:

- **Within a group**: look at one colour. Grade 4's tallest bar is soccer (8): soccer is grade 4's mode. Grade 5's
  tallest is hockey (9).
- **Between groups**: look at one pair. Hockey: the blue bar is taller than the orange by $9 - 5 = 4$, so 4 more
  children chose hockey in grade 5 than in grade 4. Swimming goes the other way: $7 - 3 = 4$ more in grade 4.

Why put the pair **side by side** and not one on top of the other? Because bars side by side start at the same zero
line, and your eye compares heights very well when bars stand on the same floor. That is the whole trick of the
graph.

Notice one more honest point: the two classes are almost the same size (24 and 25), so comparing counts is fair. If
one class had 50 children and the other 20, the bigger class would have taller bars almost everywhere, just because
it is bigger. Comparing groups of very different sizes needs fractions or percents, which you will use in level 4.

### The broken-line graph

Some data are measurements of **one thing at different times**. Here is the temperature at noon outside a school,
in degrees Celsius, for one week:

| Day | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Temperature (°C) | 12 | 15 | 14 | 9 | 11 | 16 | 18 |

To draw a **broken-line graph** (also called a **line graph**), put **time** along the bottom, in order and equally
spaced, and the measurement up the side. Mark a dot for each reading, then join neighbouring dots with straight line
segments. "Broken" means the line is made of straight pieces with corners, not that anything is damaged.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Broken-line graph of noon temperature: Monday 12, Tuesday 15, Wednesday 14, Thursday 9, Friday 11, Saturday 16, Sunday 18 degrees">
  <g stroke="currentColor" stroke-width="1" opacity="0.3">
    <line x1="45" y1="150" x2="395" y2="150"/><line x1="45" y1="110" x2="395" y2="110"/><line x1="45" y1="70" x2="395" y2="70"/>
    <line x1="45" y1="30" x2="395" y2="30"/>
  </g>
  <line x1="45" y1="190" x2="395" y2="190" stroke="currentColor" stroke-width="2"/>
  <line x1="45" y1="20" x2="45" y2="190" stroke="currentColor" stroke-width="2"/>
  <polyline points="70,94 120,70 170,78 220,118 270,102 320,62 370,46" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="70" cy="94" r="5"/><circle cx="120" cy="70" r="5"/><circle cx="170" cy="78" r="5"/><circle cx="220" cy="118" r="5"/>
    <circle cx="270" cy="102" r="5"/><circle cx="320" cy="62" r="5"/><circle cx="370" cy="46" r="5"/>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="70" y="84">12</text><text x="120" y="60">15</text><text x="170" y="68">14</text><text x="220" y="108">9</text>
    <text x="270" y="92">11</text><text x="320" y="52">16</text><text x="370" y="36">18</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="70" y="208">Mon</text><text x="120" y="208">Tue</text><text x="170" y="208">Wed</text><text x="220" y="208">Thu</text>
    <text x="270" y="208">Fri</text><text x="320" y="208">Sat</text><text x="370" y="208">Sun</text>
    <text x="220" y="225">Day</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="38" y="194">0</text><text x="38" y="154">5</text><text x="38" y="114">10</text><text x="38" y="74">15</text>
    <text x="38" y="34">20</text>
  </g>
</svg>
</div>

The line makes **change** easy to see. Where the line goes **up**, it got warmer; where it goes **down**, it got
colder; the **steeper** the piece, the bigger the change. The biggest drop was from Wednesday to Thursday
($14 - 9 = 5$ degrees, the steepest downhill piece) and the biggest rise from Friday to Saturday ($16 - 11 = 5$
degrees). From Friday to Sunday it warmed up every day: a **trend** (a steady direction of change).

### When to join the points

Joining the dots says something: "between these two readings, the value **passed through the values in between**".

- For **temperature**, that is roughly true. The temperature did not jump from 14 to 9 in an instant at midnight; it
  changed through the night, so there really were moments in between when it was 12, 11, 10. The line is a sensible
  guess at those in-between values. (Only a guess: the temperature may have wiggled up and down between readings.)
- For a **plant's height** measured each week, also true: the plant grew through the week.
- For **favourite sports**, joining the tops of the bars would be nonsense. There is nothing "between soccer and
  hockey", and the order of the sports on the page is just a choice. Categories get **bars**, never a line.
- For **separate things**, such as the test scores of children in a class, do not join either: there is no
  child halfway between Ali and Bea.

The rule: **join the points only when the thing along the bottom is time (or another measurement) that flows
continuously, and the value really changes through the gaps.** If in doubt, ask: "does a point halfway along the line
mean anything?"

### Two lines on one graph

Just as a double bar graph compares two groups, a line graph can carry **two lines** in two colours, with a legend: for
example the noon temperature in two cities over the same week. Where the lines cross, the two cities were equally warm
at that time.

## Worked examples

**1. Reading the double bar graph.** How many children in total chose basketball, and which grade liked it more?

Grade 4: 4, grade 5: 7. Total $4 + 7 = 11$. Grade 5 liked it more, by $7 - 4 = 3$ children.

**2. Drawing a double bar graph.** Books borrowed from the library by two classes: fiction 12 and 15, science 9 and
6, comics 14 and 14. Steps: (a) the largest value is 15, so a scale counting by 2 or by 5 up to 16 or 15 fits; (b)
three pairs of bars, the same order of colours in every pair; (c) title "Books borrowed by class", axis labels, legend.
For comics the two bars are equal height: the classes borrowed the same number.

**3. Reading the line graph.** On which day was it warmest, and what was the range of the noon temperatures?

Warmest: Sunday, 18 °C. Coldest: Thursday, 9 °C. Range: $18 - 9 = 9$ degrees. The mean is
$(12 + 15 + 14 + 9 + 11 + 16 + 18) \div 7 = 95 \div 7$, about 13.6 °C.

**4. Join or not?** (a) A baby's mass measured every month: **join**; the baby grows between visits. (b) The number of
goals scored by each player on a team: **do not join**, use bars; players are separate categories. (c) The number of
cars passing the school in each hour of a day: a careful case. Each value is a count for a whole hour, not a reading
at one moment, so bars are better; but many people draw a line to show the trend through the day, and that is
acceptable if you remember the line between hours is only a picture of the trend.

## Try it

1. Using the sports graph: which sport did the same number of children choose in total as soccer? (Soccer total:
   $8 + 6 = 14$.)
2. Using the sports graph: in which sport is the difference between the grades the smallest?
3. A plant was measured each Monday: 2 cm, 5 cm, 9 cm, 12 cm, 14 cm. In which week did it grow most? Should the
   points be joined?
4. Should you draw a line graph or a bar graph for: (a) favourite ice cream flavour; (b) the water level in a lake
   each month; (c) the number of pets of each child in your class?
5. A double bar graph compares the numbers of girls and boys who chose each colour. There are 30 girls and 10 boys.
   Why could comparing the bars directly be misleading?
6. Using the temperature graph, between which two days did the temperature change by exactly 1 degree?
7. On a line graph, a piece of the line is flat. What does that mean?

??? note "Answers"
    1. Swimming: $7 + 3 = 10$, no. Hockey: $5 + 9 = 14$. **Hockey** ties with soccer.
    2. Soccer ($8 - 6 = 2$). Hockey 4, basketball 3, swimming 4.
    3. Growth each week: $5 - 2 = 3$, $9 - 5 = 4$, $12 - 9 = 3$, $14 - 12 = 2$. Most in the second week (4 cm). Yes,
       join them: the plant grows continuously.
    4. (a) Bar graph (categories). (b) Line graph (one lake, changing over time). (c) Bar graph or line plot (separate
       children, nothing in between).
    5. Three times as many girls answered, so the girls' bars will tend to be taller just because there are more
       girls. To compare fairly you would compare fractions of each group, for example 6 of 30 girls with 2 of 10
       boys (both one fifth).
    6. Tuesday to Wednesday ($15 - 14 = 1$). (Also check the others: Mon-Tue 3, Wed-Thu 5, Thu-Fri 2, Fri-Sat 5,
       Sat-Sun 2.)
    7. The value stayed the same between those two times: no change.

## Common mistake

**Joining points that are categories.** A line through the tops of "soccer, hockey, basketball, swimming" invents a
trend that does not exist; change the order of the sports and the "trend" changes. Lines are for change over time.

**Uneven time steps.** If readings were taken on Monday, Tuesday and then Friday, the gap to Friday must be three
times as wide on the bottom scale. Squeezing it to the same width makes the change look faster than it was.

## Where it leads

- Back: [Stem-and-leaf plots](05-stem-and-leaf.md) · Next level: [Level 4: choosing and showing](../level-4/index.md)
- [Level 3 page](index.md) · [Statistics topic page](../index.md)
- Bar graphs and scales began in [level 2](../level-2/index.md). Level 4 adds histograms, circle graphs and graphs
  that mislead.
- Plotting points against two axes is the coordinate grid: [Coordinates on a grid](../../geometry/level-3/06-coordinates-grid.md).
- How steep a line is becomes slope and rate of change: [Change](../../change/index.md).
