---
title: "Circle graphs"
---

# Circle graphs

*Statistics and data · level 4, lesson 3 of 6*

## A question to start

A class of 40 students is asked how they get to school. Without counting anything, look at this picture:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 230" role="img" aria-label="Circle graph of how 40 students get to school: walk 45 percent, bus 25 percent, car 20 percent, bike 10 percent">
  <path d="M 110 110 L 110 20 A 90 90 0 0 1 137.8 195.6 Z" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 110 110 L 137.8 195.6 A 90 90 0 0 1 24.4 137.8 Z" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 110 110 L 24.4 137.8 A 90 90 0 0 1 57.1 37.2 Z" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 110 110 L 57.1 37.2 A 90 90 0 0 1 110 20 Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="164" y="105">Walk</text><text x="164" y="119">45%</text>
    <text x="85" y="157">Bus</text><text x="85" y="171">25%</text>
    <text x="58" y="91">Car</text><text x="58" y="105">20%</text>
    <text x="93" y="56">Bike</text><text x="93" y="70">10%</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="230" y="60">How 40 students</text><text x="230" y="78">get to school</text>
    <text x="230" y="120">Walk 18</text><text x="230" y="140">Bus 10</text><text x="230" y="160">Car 8</text><text x="230" y="180">Bike 4</text>
  </g>
</svg>
</div>

You can see at once that **almost half** walk, and that bus riders make up **a quarter**, a slice like the corner of
a square. That is what a **circle graph** (also called a **pie chart**) is good at: showing how one whole is split into
parts. But why is the bus slice a perfect right angle? And when is a circle graph the wrong choice? That is this
lesson.

## The idea

### Parts of a whole

A circle graph shows data where:

- there is **one whole** (all 40 students, a whole day, a whole budget);
- the whole is split into **parts that do not overlap** (each student is in exactly one group);
- the parts **add up to the whole**.

The whole circle stands for the whole group, 100%. Each slice, called a **sector**, stands for one part. A bigger
part gets a bigger slice.

### Percents: parts of 100

A **percent** means "out of 100" (per cent: "for each hundred"). 45% means 45 out of every 100. To turn a part into a
percent, write it as a fraction of the whole and then scale it to "out of 100":

$$\text{percent} = \frac{\text{part}}{\text{whole}} \times 100$$

For the walkers: $\frac{18}{40} \times 100 = 0.45 \times 100 = 45\%$. For the bus: $\frac{10}{40} = \frac{1}{4} = 25\%$.
The four percents add to 100%: $45 + 25 + 20 + 10 = 100$. They must, because the parts make up the whole.

### From percents to angles

The whole circle is a full turn, **360°** (degrees). Each part gets the same **fraction of 360°** as it is of the
whole group.

$$\text{angle} = \frac{\text{part}}{\text{whole}} \times 360°$$

Why is this right? A sector's size is set by its angle at the centre. If one part is a quarter of the group, it should
get a quarter of the circle, and a quarter of a full turn is $360 \div 4 = 90°$: a right angle. That is why the bus
slice (25%, a quarter) looks like the corner of a square.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="Four circles: half shaded is 50 percent and 180 degrees; a quarter shaded is 25 percent and 90 degrees; a tenth shaded is 10 percent and 36 degrees; three quarters shaded is 75 percent and 270 degrees">
  <circle cx="55" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 55 50 L 55 12 A 38 38 0 0 1 55 88 Z" fill="#eea66f" stroke="currentColor"/>
  <circle cx="160" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 160 50 L 160 12 A 38 38 0 0 1 198 50 Z" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="265" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 265 50 L 265 12 A 38 38 0 0 1 287.3 19.3 Z" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="370" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 370 50 L 370 12 A 38 38 0 1 1 332 50 Z" fill="#eea66f" stroke="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="55" y="108">50% = 180°</text><text x="160" y="108">25% = 90°</text>
    <text x="265" y="108">10% = 36°</text><text x="370" y="108">75% = 270°</text>
  </g>
</svg>
</div>

A handy shortcut: since 100% is 360°, **1% is 3.6°**, and an angle is the percent times 3.6.

| Way to school | Students | Fraction | Percent | Angle |
| --- | --- | --- | --- | --- |
| Walk | 18 | $\frac{18}{40}$ | 45% | $0.45 \times 360 = 162°$ |
| Bus | 10 | $\frac{10}{40}$ | 25% | $0.25 \times 360 = 90°$ |
| Car | 8 | $\frac{8}{40}$ | 20% | $0.20 \times 360 = 72°$ |
| Bike | 4 | $\frac{4}{40}$ | 10% | $0.10 \times 360 = 36°$ |
| **Total** | **40** | 1 | **100%** | **360°** |

**Always check that the angles add to 360°.** $162 + 90 + 72 + 36 = 360$ ✓. If rounding makes them add to 359° or
361°, adjust the biggest slice by a degree.

### Drawing a circle graph

1. Make the table: count, fraction, percent, angle. Check the total angle is 360°.
2. Draw a circle with compasses and mark the centre. Draw one radius straight up from the centre (the "12 o'clock"
   line).
3. With a protractor centred on the centre, measure the first angle (162°) clockwise from that line, and draw the next
   radius.
4. Measure the next angle (90°) from the line you just drew, and so on. The last slice should close up exactly; if it
   does not, check your measuring.
5. Label every slice with its name and its percent (or count), and give the graph a title.

### Reading a circle graph backwards

If you know the angle, the fraction of the whole is $\text{angle} \div 360$. If you also know the size of the whole,
multiply to get the count. A slice of 72° out of 40 students: $\frac{72}{360} = \frac{1}{5}$, and $\frac{1}{5}$ of 40
is 8 students.

### When a circle graph fits, and when it does not

A circle graph fits when you want to show **shares of one whole**, with a **few** parts (about 2 to 6).

It does **not** fit when:

- **The parts do not make a whole.** Temperatures for each day of a week are not parts of anything; nobody can say
  what "Tuesday's share of the week's temperature" means. Use a line graph.
- **People could choose more than one answer.** In "which sports do you play? (tick all that apply)", one student can
  be in three groups. The percents add up to more than 100%, and slices would overlap. Use a bar graph.
- **There are many small parts.** Twelve slices of about 8% each look nearly identical, and thin slivers cannot be
  labelled. A bar graph is clearer.
- **You want exact comparisons.** People judge angles and areas less accurately than lengths: 23% and 27% look almost
  the same as slices, but as bars side by side the difference is obvious. Bars also make it easier to compare **two**
  groups; comparing two pies means hunting for each slice in each pie.

Circle graphs show **shares**, not sizes. A pie of 40 students and a pie of 4000 students look the same size. If the
size of the whole matters, write it in the title.

## Worked examples

**1. A day in hours.** A student's school day (24 hours): sleep 9, school 7, play 3, eating 2, other 3.

1. Check the whole: $9 + 7 + 3 + 2 + 3 = 24$ ✓.
2. Angles: each hour is $360 \div 24 = 15°$. Sleep $9 \times 15 = 135°$, school $7 \times 15 = 105°$, play
   $3 \times 15 = 45°$, eating $2 \times 15 = 30°$, other $3 \times 15 = 45°$.
3. Check: $135 + 105 + 45 + 30 + 45 = 360$ ✓.
4. Percents: sleep $\frac{9}{24} = 37.5\%$, play $\frac{3}{24} = 12.5\%$.

**2. From percents.** A survey of favourite fruit gives apples 30%, bananas 15%, grapes 35%, oranges 20%.

1. Percents add to $30 + 15 + 35 + 20 = 100$ ✓.
2. Angles (percent × 3.6): apples $30 \times 3.6 = 108°$, bananas $54°$, grapes $126°$, oranges $72°$.
3. Check: $108 + 54 + 126 + 72 = 360$ ✓.

**3. Reading backwards.** In a circle graph of 120 library books, the "science" slice has an angle of 48°. How many
science books?

$\frac{48}{360} = \frac{2}{15}$, and $\frac{2}{15} \times 120 = 16$ books. (Or: each book is $360 \div 120 = 3°$, and
$48 \div 3 = 16$.)

**4. Is a circle graph right?** (a) How a club spends its yearly budget on equipment, trips, food, prizes: **yes**,
parts of one whole. (b) The number of goals scored in each month of a season: **no**, these are values over time; use
a bar or line graph. (c) "Which pets have you ever owned?" with answers adding to 160% of the class: **no**, the
answers overlap.

## Try it

1. What angle stands for: (a) 50%; (b) 10%; (c) 5%; (d) 1%?
2. Of 60 students, 15 chose red. What percent is that, and what angle?
3. A slice has an angle of 120°. What fraction and roughly what percent of the whole is it?
4. Make a table for 30 people's favourite season: winter 6, spring 9, summer 12, autumn 3. Find each percent and
   angle and check the total.
5. A circle graph of 200 votes has a 54° slice for "maybe". How many people voted "maybe"?
6. A newspaper's circle graph has slices of 40%, 35%, 20% and 15%. What is wrong?
7. Why would a circle graph be a poor way to show the heights of the 24 students from the histograms lesson?
8. Explain in your own words why 1% of a circle graph is 3.6°.

??? note "Answers"
    1. (a) 180°. (b) 36°. (c) 18°. (d) 3.6°.
    2. $\frac{15}{60} = \frac{1}{4} = 25\%$, angle 90°.
    3. $\frac{120}{360} = \frac{1}{3}$, about 33.3%.
    4. Winter $\frac{6}{30} = 20\%$, 72°. Spring $\frac{9}{30} = 30\%$, 108°. Summer $\frac{12}{30} = 40\%$, 144°.
       Autumn $\frac{3}{30} = 10\%$, 36°. Total $72 + 108 + 144 + 36 = 360°$ ✓ and 100% ✓.
    5. $\frac{54}{360} = 0.15$, and $0.15 \times 200 = 30$ people.
    6. The percents add to $40 + 35 + 20 + 15 = 110\%$. Parts of one whole must add to 100%: either there is an error,
       or people could pick more than one answer, and then a circle graph is the wrong graph.
    7. Heights are not parts of a whole: nothing is "shared out" among the students. You want the spread of the
       values, so a histogram or stem-and-leaf plot is right.
    8. 100% is the whole circle, 360°. Dividing both by 100, 1% is $360 \div 100 = 3.6°$.

## Common mistake

**Using the percent as the angle.** A 25% slice drawn at 25° is far too small; the angle is $25 \times 3.6 = 90°$.
Check that your angles add to 360°, not 100.

**Forgetting the size of the whole.** "60% prefer our cereal" means something very different if 5 people were asked
or 5000. Say how many are in the whole.

## Where it leads

- Back: [Histograms](02-histograms.md) · Next: [Infographics](04-infographics.md)
- [Level 4 page](index.md) · [Statistics topic page](../index.md)
- Angles, degrees and the protractor: [Geometry level 3](../../geometry/level-3/02-measuring-angles.md); a full turn
  is 360° in [Angles on a straight line and around a point](../../geometry/level-4/01-straight-line-point.md).
- Fractions and percents of a whole: [Ratio](../../ratio/index.md) and
  [Fractions to decimals and back](../../numbers/level-4/05-fractions-to-decimals.md).
- Lesson 6 of this level shows how 3D pie charts distort the slices.
