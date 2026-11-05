# 2. Pictures of data

*A list of 30 numbers tells you almost nothing at a glance; the right picture of the same numbers tells you their
centre, how spread out they are, whether they lean to one side and whether any are strange, all in a second. This
chapter builds the standard pictures of data (bar charts, histograms, stem plots, box plots and scatter plots), shows
how to read shape, centre and spread by eye, and then turns to the dark side: how a graph can tell the truth about every
number and still lie. It ends with Anscombe's quartet, four small datasets with the same averages, the same spreads and
the same best-fit line, which look nothing alike, and the reason every statistician plots the data first.*

!!! abstract "In this chapter"

    **You will learn:**

    - when to use a bar chart and when a histogram, and why a histogram with unequal bins must show density, not counts
    - how to make and read a stem plot
    - how to describe a distribution by shape (symmetric, skewed, one or two peaks), centre and spread
    - the five-number summary, the box plot, and Tukey's rule for flagging outliers
    - scatter plots: direction, form, strength and unusual points
    - how graphs mislead (truncated axes, areas and volumes, the "lie factor") and how to draw them honestly
    - Anscombe's quartet, and why summaries are never enough

    **You need:** [Chapter 1](01-What-Statistics-Is-For.md) (variables and their types). For a gentler version, see
    the Topics lessons [Bar graphs](../../topics/statistics/level-2/03-bar-graphs.md),
    [Line plots](../../topics/statistics/level-2/05-line-plots.md),
    [Stem-and-leaf plots](../../topics/statistics/level-3/05-stem-and-leaf.md),
    [Histograms](../../topics/statistics/level-4/02-histograms.md),
    [Graphs that mislead](../../topics/statistics/level-4/06-misleading-graphs.md),
    [Box plots](../../topics/statistics/level-5/02-box-plots.md),
    [Scatter plots](../../topics/statistics/level-6/01-scatter-plots.md) and
    [Shapes of distributions](../../topics/statistics/level-7/01-distribution-shapes.md).

    **Levels:** 2.1 to 2.5 are beginner (the density scale in 2.1 and the lie factor in 2.5 are a step up); 2.6 is
    beginner to intermediate.

## 2.1 Bar charts, histograms and stem plots

**A question.** You ask 120 students how they get to school, and 30 people how many minutes their commute takes.
Both answers fit in a table. Why do they need different pictures?

The first variable is **categorical** (walk, bus, car, bike); the second is **quantitative** (a number of minutes).
The **distribution** of a variable is the list of values it takes and how often it takes each. Every picture in this
section shows a distribution; the type of variable decides which picture fits.

### Bar charts, for categories

Here are made-up answers from 120 students.

| How they get to school | walk | bus | car | bike | total |
| --- | --- | --- | --- | --- | --- |
| **count** (frequency) | 42 | 35 | 28 | 15 | 120 |
| **proportion** (relative frequency) | 0.350 | 0.292 | 0.233 | 0.125 | 1 |

The **frequency** of a category is how many units fall in it; the **relative frequency** is the frequency divided by
the total. **Check:** $42 + 35 + 28 + 15 = 120$, and $42/120 = 0.35$.

A **bar chart** draws one bar per category, with height equal to the count (or proportion).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 240" role="img" aria-label="Bar chart of how 120 students get to school (made-up data): walk 42, bus 35, car 28, bike 15; separate bars with gaps">
  <line x1="50" y1="200" x2="380" y2="200" stroke="currentColor"/>
  <line x1="50" y1="200" x2="50" y2="20" stroke="currentColor"/>
  <text x="44" y="204" text-anchor="end" font-size="11" fill="currentColor">0</text>
  <line x1="47" y1="200" x2="50" y2="200" stroke="currentColor"/>
  <text x="44" y="169" text-anchor="end" font-size="11" fill="currentColor">10</text>
  <line x1="47" y1="165" x2="50" y2="165" stroke="currentColor"/>
  <text x="44" y="134" text-anchor="end" font-size="11" fill="currentColor">20</text>
  <line x1="47" y1="130" x2="50" y2="130" stroke="currentColor"/>
  <text x="44" y="99" text-anchor="end" font-size="11" fill="currentColor">30</text>
  <line x1="47" y1="95" x2="50" y2="95" stroke="currentColor"/>
  <text x="44" y="64" text-anchor="end" font-size="11" fill="currentColor">40</text>
  <line x1="47" y1="60" x2="50" y2="60" stroke="currentColor"/>
  <text x="44" y="29" text-anchor="end" font-size="11" fill="currentColor">50</text>
  <line x1="47" y1="25" x2="50" y2="25" stroke="currentColor"/>
  <rect x="70" y="53" width="50" height="147" fill="#9cc9ea" stroke="currentColor"/>
  <text x="95" y="48" text-anchor="middle" font-size="11" fill="currentColor">42</text>
  <text x="95" y="216" text-anchor="middle" font-size="12" fill="currentColor">walk</text>
  <rect x="150" y="77.5" width="50" height="122.5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="175" y="72.5" text-anchor="middle" font-size="11" fill="currentColor">35</text>
  <text x="175" y="216" text-anchor="middle" font-size="12" fill="currentColor">bus</text>
  <rect x="230" y="102" width="50" height="98" fill="#9cc9ea" stroke="currentColor"/>
  <text x="255" y="97" text-anchor="middle" font-size="11" fill="currentColor">28</text>
  <text x="255" y="216" text-anchor="middle" font-size="12" fill="currentColor">car</text>
  <rect x="310" y="147.5" width="50" height="52.5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="335" y="142.5" text-anchor="middle" font-size="11" fill="currentColor">15</text>
  <text x="335" y="216" text-anchor="middle" font-size="12" fill="currentColor">bike</text>
  <text x="16" y="110" text-anchor="middle" font-size="12" fill="currentColor" transform="rotate(-90 16 110)">students</text>
</svg>
</div>

Three rules make a bar chart honest and readable:

- **The bars are separate.** The gaps say that the categories are distinct, not points on a scale.
- **The vertical axis starts at zero.** The height is the message, so the whole height must be drawn (more in §2.5).
- **The order is a choice.** For a nominal variable there is no natural order, so sort the bars by size (as here) or
  in some other order that helps the reader. For an ordinal variable ("never", "sometimes", "often"), keep the natural
  order.

A **pie chart** shows the same proportions as slices of a circle, with each slice's angle equal to $360°$ times the
proportion (walk: $0.35 \times 360° = 126°$). Pie charts show "part of a whole" well when there are two or three
slices, but the eye judges angles and areas much less accurately than lengths, so for comparing several categories a
bar chart is almost always better. (Experiments on graphical perception by William Cleveland and Robert McGill in the
1980s found that people compare positions along a common scale more accurately than angles or areas.)

### Histograms, for numbers

Now a quantitative variable. Here are 30 made-up commute times in minutes, already sorted:

$$
\begin{aligned}
&4,\ 7,\ 8,\ 9,\ 10,\ 11,\ 12,\ 12,\ 13,\ 14,\ 15,\ 15,\ 16,\ 17,\ 18,\\
&18,\ 19,\ 20,\ 21,\ 22,\ 24,\ 25,\ 27,\ 29,\ 32,\ 35,\ 38,\ 44,\ 52,\ 61.
\end{aligned}
$$

A bar for every distinct value would be useless (most values occur once). Instead, cut the number line into
**bins** (or **classes**) of equal width and count how many values fall in each. Here we use bins of 10 minutes, with
the convention that a bin includes its left end and excludes its right end, so 10 goes in the bin $[10, 20)$.

| Bin (minutes) | $[0, 10)$ | $[10, 20)$ | $[20, 30)$ | $[30, 40)$ | $[40, 50)$ | $[50, 60)$ | $[60, 70)$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Count | 4 | 13 | 7 | 3 | 1 | 1 | 1 |

**Check:** $4 + 13 + 7 + 3 + 1 + 1 + 1 = 30$. A **histogram** draws a bar over each bin, with the bars touching,
because the bins together cover a continuous scale.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Histogram of 30 made-up commute times in bins of 10 minutes from 0 to 70: counts 4, 13, 7, 3, 1, 1, 1; the bars touch and the shape has a long right tail">
  <line x1="50" y1="200" x2="410" y2="200" stroke="currentColor"/>
  <line x1="50" y1="200" x2="50" y2="30" stroke="currentColor"/>
  <text x="44" y="204" text-anchor="end" font-size="11" fill="currentColor">0</text>
  <text x="44" y="180" text-anchor="end" font-size="11" fill="currentColor">2</text>
  <text x="44" y="156" text-anchor="end" font-size="11" fill="currentColor">4</text>
  <text x="44" y="132" text-anchor="end" font-size="11" fill="currentColor">6</text>
  <text x="44" y="108" text-anchor="end" font-size="11" fill="currentColor">8</text>
  <text x="44" y="84" text-anchor="end" font-size="11" fill="currentColor">10</text>
  <text x="44" y="60" text-anchor="end" font-size="11" fill="currentColor">12</text>
  <text x="44" y="36" text-anchor="end" font-size="11" fill="currentColor">14</text>
  <rect x="50" y="152" width="50" height="48" fill="#eea66f" stroke="currentColor"/>
  <rect x="100" y="44" width="50" height="156" fill="#eea66f" stroke="currentColor"/>
  <rect x="150" y="116" width="50" height="84" fill="#eea66f" stroke="currentColor"/>
  <rect x="200" y="164" width="50" height="36" fill="#eea66f" stroke="currentColor"/>
  <rect x="250" y="188" width="50" height="12" fill="#eea66f" stroke="currentColor"/>
  <rect x="300" y="188" width="50" height="12" fill="#eea66f" stroke="currentColor"/>
  <rect x="350" y="188" width="50" height="12" fill="#eea66f" stroke="currentColor"/>
  <text x="50" y="216" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="100" y="216" text-anchor="middle" font-size="11" fill="currentColor">10</text>
  <text x="150" y="216" text-anchor="middle" font-size="11" fill="currentColor">20</text>
  <text x="200" y="216" text-anchor="middle" font-size="11" fill="currentColor">30</text>
  <text x="250" y="216" text-anchor="middle" font-size="11" fill="currentColor">40</text>
  <text x="300" y="216" text-anchor="middle" font-size="11" fill="currentColor">50</text>
  <text x="350" y="216" text-anchor="middle" font-size="11" fill="currentColor">60</text>
  <text x="400" y="216" text-anchor="middle" font-size="11" fill="currentColor">70</text>
  <text x="225" y="236" text-anchor="middle" font-size="12" fill="currentColor">commute time (minutes)</text>
  <text x="16" y="120" text-anchor="middle" font-size="12" fill="currentColor" transform="rotate(-90 16 120)">number of people</text>
</svg>
</div>

The picture shows at once what the list hid: most commutes are between 10 and 20 minutes, and a few are much longer,
trailing off to the right.

**Choosing the bin width.** Too few bins and every shape looks like a single lump; too many and the picture is noise,
a few bars of height 1 with gaps. There is no single right answer. A traditional starting point is Sturges's rule
(1926): use about $1 + \log_2 n$ bins for $n$ values; for $n = 30$ that is about $5.9$, so 6 or 7 bins, which is what
we used. Better practice is to try two or three widths and see which features survive. Chapter 15 treats the choice
of smoothing properly, with kernel density estimates.

### The density scale, and unequal bins

*Level: beginner to intermediate.*

Sometimes the bins are not equal: data are sparse in the tail, so you might merge the last four bins into one,
$[30, 70)$, containing $3 + 1 + 1 + 1 = 6$ values. If you drew that bin with height 6, it would be four bins wide and
look like 24 values' worth of area. The eye reads **area**, so the area of each bar must be proportional to the number
of values in it.

The fix is the **density scale**. Let the bin have width $w$ and contain a fraction $f$ of the data (count divided by
$n$). Draw it with height

$$
\text{density} = \frac{f}{w} \qquad \text{(fraction of the data per unit on the horizontal axis)} .
$$

Then the bar's area is $w \times \frac{f}{w} = f$: **the area of each bar is the fraction of the data in that bin,**
and the total area of the histogram is the sum of all the fractions, which is 1.

For the commute times with bins $[0, 10)$, $[10, 20)$, $[20, 30)$, $[30, 70)$:

| Bin | count | fraction $f$ | width $w$ | density $f/w$ (per minute) |
| --- | --- | --- | --- | --- |
| $[0, 10)$ | 4 | $0.133$ | 10 | $0.0133$ |
| $[10, 20)$ | 13 | $0.433$ | 10 | $0.0433$ |
| $[20, 30)$ | 7 | $0.233$ | 10 | $0.0233$ |
| $[30, 70)$ | 6 | $0.200$ | 40 | $0.0050$ |

**Check:** the areas are $0.133 + 0.433 + 0.233 + 0.200 = 1$ (up to rounding; exactly $30/30$). The wide last bin
is drawn low, as it should be: per minute of commute, it holds few people.

The density scale is not just a fix for unequal bins; it is the bridge to probability. A **probability density
function** ([Probability, chapter 9](../probability/09-Continuous-Random-Variables.md)) is exactly a curve whose area
over an interval is a probability, and a density histogram of a large sample looks like the density of the
population it came from.

### Stem plots

For small datasets there is a picture that keeps every value. A **stem plot** (or **stem-and-leaf plot**) splits each
number into a **stem** (all but the last digit) and a **leaf** (the last digit), writes the stems in a column, and
writes each leaf to the right of its stem. The commute times become:

```text
0 | 4 7 8 9
1 | 0 1 2 2 3 4 5 5 6 7 8 8 9
2 | 0 1 2 4 5 7 9
3 | 2 5 8
4 | 4
5 | 2
6 | 1
key: 3 | 2 means 32 minutes
```

Turned on its side, it is the histogram with bins of 10, but every original number can be read off it, and you can
find the middle value by counting leaves. With 30 values the middle lies between the 15th and 16th, both of which are
18 (count along: 4 leaves on stem 0, then the 11th leaf on stem 1 is the 15th value). A stem plot needs a **key**,
since "3 | 2" could mean 32, 3.2 or 320.

John Tukey popularised the stem plot in the 1970s as a quick pencil-and-paper tool; his *Exploratory Data Analysis*
(1977) is full of them. With more than about 100 values it becomes unwieldy, and a histogram takes over.

## 2.2 Shape, centre and spread by eye

**A question.** Look at the histogram of commute times again. Without computing anything, what would you say about it?

To describe a distribution of a quantitative variable, statisticians look at three things, and then for anything
unusual.

**1. Shape.**

- **Peaks.** A distribution with one clear peak is **unimodal**; with two, **bimodal**; with several, **multimodal**.
  (A **mode** is a peak.) Two peaks often mean two groups mixed together: the heights of a group of adults have two
  humps if you mix women and men, and the time between eruptions of the Old Faithful geyser in Yellowstone is
  famously bimodal, with a cluster of short waits and a cluster of long ones.
- **Symmetry and skew.** If the left and right halves of the histogram are roughly mirror images, the distribution is
  **symmetric**. If one tail stretches out further, it is **skewed** in the direction of the long tail: **right-skewed**
  (or **positively skewed**) if the long tail is on the right, **left-skewed** if on the left. Incomes, house prices,
  commute times, city populations and the sizes of files on a computer are typically right-skewed: there is a floor
  (zero) but no ceiling. Scores on an easy test are often left-skewed: most people near the top, a tail of low scores.
- **Uniform.** A histogram with all bars about the same height (rolls of a fair die, many times) has a flat or
  **uniform** shape.

**2. Centre.** Where is the "middle" of the data? By eye: the value that splits the histogram's area in half (this
is the **median**, Chapter 3), or the balance point, where the histogram would balance on a knife edge (the **mean**).
For a symmetric distribution they are the same. For a skewed one, the long tail pulls the balance point toward it, so
**in a right-skewed distribution the mean is usually larger than the median.** The commute times have median 18 and
mean $21.6$.

**3. Spread.** How far do the values range around the centre? By eye: where do most of the values lie? For the
commutes, about half lie between 12 and 27 minutes (these are the quartiles of §2.3).

**4. Unusual features.** **Gaps** (a stretch of the scale with no values) and **outliers** (values far from the rest)
deserve a look. An outlier may be a typing error, a unit recorded in the wrong units, or the most interesting
observation in the dataset. Never delete one without finding out which.

**Worked example 2.1.** Describe the commute histogram in one or two sentences.

*Answer.* The distribution is unimodal and right-skewed: most commutes take 10 to 20 minutes, the centre is around 18
minutes, and a long tail extends to the right, with a few commutes of 50 minutes or more that may be outliers. No gaps
appear inside the main body of the data.

A good description names the shape, gives a centre and a spread in the units of the data, and mentions anything
unusual. It also says what the data are: "30 commute times in minutes (made-up data)".

**Time plots.** When data are collected over time (daily temperatures, monthly sales), the order matters, and a
histogram throws the order away. Then plot each value against its time and join the dots: a **time plot** (or
**line graph**). It shows trends, seasonal cycles and sudden changes that a histogram would hide. Chapter 16 is about
such data.

## 2.3 Box plots

**A question.** You want to compare commute times in five different cities, side by side, on one page. Five
histograms take up a lot of room. Is there a compact picture that keeps the main features?

### The five-number summary

The **quartiles** split the sorted data into four parts with about equal numbers of values. One common way to find them:

1. Sort the data and find the **median** $M$: the middle value if $n$ is odd, the average of the two middle values
   if $n$ is even.
2. The **first quartile** $Q_1$ is the median of the lower half of the data (the values below the median's position).
3. The **third quartile** $Q_3$ is the median of the upper half.

When $n$ is odd, leave the median itself out of both halves. (Other textbooks and software use slightly different
conventions, which give slightly different quartiles for small datasets; §3.4 explains why and shows that they agree
for large ones.)

The **five-number summary** is

$$
\text{minimum}, \quad Q_1, \quad M, \quad Q_3, \quad \text{maximum}.
$$

The **interquartile range** is $\text{IQR} = Q_3 - Q_1$: the width of the middle half of the data.

**Worked example 2.2.** The commute times ($n = 30$).

- Median: the 15th and 16th values are 18 and 18, so $M = 18$.
- Lower half: the first 15 values, $4, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 15, 16, 17, 18$. Its median is the 8th:
  $Q_1 = 12$.
- Upper half: the last 15 values, $18, 19, 20, 21, 22, 24, 25, 27, 29, 32, 35, 38, 44, 52, 61$. Its median is the 8th:
  $Q_3 = 27$.
- Five-number summary: $4, 12, 18, 27, 61$. IQR $= 27 - 12 = 15$ minutes.

### Tukey's rule for outliers

A value is flagged as a possible **outlier** if it lies more than $1.5 \times \text{IQR}$ below $Q_1$ or above
$Q_3$. The boundaries are called the **fences**:

$$
\text{lower fence} = Q_1 - 1.5\,\text{IQR}, \qquad \text{upper fence} = Q_3 + 1.5\,\text{IQR}.
$$

For the commutes, $1.5 \times 15 = 22.5$, so the fences are $12 - 22.5 = -10.5$ and $27 + 22.5 = 49.5$. Nothing is
below $-10.5$; the values 52 and 61 are above $49.5$ and are flagged.

Why $1.5$? It is a convention chosen by Tukey, not a theorem. It is a useful one: for data from a normal (bell-shaped)
distribution, the fences fall about $2.7$ standard deviations from the centre, so only about 0.7% of values are
flagged (exercise 12 computes this). A flagged point is a point to look at, not a point to delete.

### Drawing the box plot

A **box plot** (or **box-and-whisker plot**) draws:

- a **box** from $Q_1$ to $Q_3$, with a line inside at the median;
- **whiskers** from the box out to the most extreme values that are *not* flagged as outliers;
- each **outlier** as a separate dot.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Box plot of the 30 made-up commute times: whisker from 4 to 44, box from 12 to 27 with the median line at 18, and two outliers marked at 52 and 61">
  <line x1="60" y1="60" x2="100" y2="60" stroke="currentColor"/>
  <line x1="175" y1="60" x2="260" y2="60" stroke="currentColor"/>
  <line x1="60" y1="48" x2="60" y2="72" stroke="currentColor"/>
  <line x1="260" y1="48" x2="260" y2="72" stroke="currentColor"/>
  <rect x="100" y="35" width="75" height="50" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="130" y1="35" x2="130" y2="85" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="300" cy="60" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="345" cy="60" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="110" x2="390" y2="110" stroke="currentColor"/>
  <line x1="40" y1="110" x2="40" y2="114" stroke="currentColor"/>
  <text x="40" y="128" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <line x1="90" y1="110" x2="90" y2="114" stroke="currentColor"/>
  <text x="90" y="128" text-anchor="middle" font-size="11" fill="currentColor">10</text>
  <line x1="140" y1="110" x2="140" y2="114" stroke="currentColor"/>
  <text x="140" y="128" text-anchor="middle" font-size="11" fill="currentColor">20</text>
  <line x1="190" y1="110" x2="190" y2="114" stroke="currentColor"/>
  <text x="190" y="128" text-anchor="middle" font-size="11" fill="currentColor">30</text>
  <line x1="240" y1="110" x2="240" y2="114" stroke="currentColor"/>
  <text x="240" y="128" text-anchor="middle" font-size="11" fill="currentColor">40</text>
  <line x1="290" y1="110" x2="290" y2="114" stroke="currentColor"/>
  <text x="290" y="128" text-anchor="middle" font-size="11" fill="currentColor">50</text>
  <line x1="340" y1="110" x2="340" y2="114" stroke="currentColor"/>
  <text x="340" y="128" text-anchor="middle" font-size="11" fill="currentColor">60</text>
  <line x1="390" y1="110" x2="390" y2="114" stroke="currentColor"/>
  <text x="390" y="128" text-anchor="middle" font-size="11" fill="currentColor">70</text>
  <text x="100" y="29" text-anchor="middle" font-size="11" fill="currentColor">Q1 = 12</text>
  <text x="175" y="29" text-anchor="middle" font-size="11" fill="currentColor">Q3 = 27</text>
  <text x="130" y="100" text-anchor="middle" font-size="11" fill="currentColor">median 18</text>
  <text x="322.5" y="46" text-anchor="middle" font-size="11" fill="currentColor">outliers</text>
  <text x="215" y="146" text-anchor="middle" font-size="12" fill="currentColor">commute time (minutes)</text>
</svg>
</div>

The whisker on the right goes to 44, the largest value inside the upper fence, not to the fence itself. (Some books
draw the whiskers all the way to the minimum and maximum and do not mark outliers; that is the "simple" box plot. The
version with fences is Tukey's.)

Read it this way: the box holds the middle half of the data; the median line sits left of the box's centre and the
right whisker is longer, both signs of right skew; two points are far out on the right.

### Side-by-side box plots

The great strength of the box plot is comparison. Five box plots stacked on one axis show at a glance which city has
the longest typical commute (the median line furthest right), which is most variable (the widest box) and which has
extreme cases. Clinical trials use them to compare a treatment group with a control group; quality engineers use
them to compare machines.

### What a box plot hides

A box plot is built from five numbers, so it cannot show anything those five numbers miss. In particular it **cannot
show two peaks**: the datasets

$$
A: \ 0,\ 1,\ 3,\ 4,\ 5,\ 6,\ 7,\ 9,\ 10 \qquad \text{and} \qquad B: \ 0,\ 2,\ 2,\ 2,\ 5,\ 8,\ 8,\ 8,\ 10
$$

have the same five-number summary $0, 2, 5, 8, 10$ (check it: for $A$, the lower half $0, 1, 3, 4$ has median $2$),
but $A$ is spread evenly while $B$ is clumped at 2 and 8 with almost nothing between. Same box plot, different story.
For a single variable, a histogram is the safer picture; box plots are for comparing many.

## 2.4 Scatter plots

**A question.** Do students who study longer score higher? You have two numbers for each student. What picture shows
how they go together?

A **scatter plot** shows two quantitative variables measured on the same units: each unit is one point, with one
variable on the horizontal axis and the other on the vertical. If one variable might explain or predict the other, it
goes on the horizontal axis and is called the **explanatory variable** (or predictor, or $x$); the other is the
**response variable** (or outcome, or $y$).

Here are made-up data for 12 students: hours spent studying for a test, and the score out of 100.

| Hours $x$ | 1 | 2 | 2 | 3 | 4 | 4 | 5 | 6 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Score $y$ | 52 | 55 | 61 | 58 | 64 | 70 | 68 | 75 | 71 | 80 | 78 | 86 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 260" role="img" aria-label="Scatter plot of 12 made-up students: hours studied from 1 to 9 on the horizontal axis and test score from 52 to 86 on the vertical axis; the points rise from lower left to upper right">
  <line x1="50" y1="210" x2="400" y2="210" stroke="currentColor"/>
  <line x1="50" y1="210" x2="50" y2="10" stroke="currentColor"/>
  <text x="50" y="226" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="120" y="226" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="190" y="226" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <text x="260" y="226" text-anchor="middle" font-size="11" fill="currentColor">6</text>
  <text x="330" y="226" text-anchor="middle" font-size="11" fill="currentColor">8</text>
  <text x="400" y="226" text-anchor="middle" font-size="11" fill="currentColor">10</text>
  <text x="44" y="214" text-anchor="end" font-size="11" fill="currentColor">40</text>
  <text x="44" y="174" text-anchor="end" font-size="11" fill="currentColor">50</text>
  <text x="44" y="134" text-anchor="end" font-size="11" fill="currentColor">60</text>
  <text x="44" y="94" text-anchor="end" font-size="11" fill="currentColor">70</text>
  <text x="44" y="54" text-anchor="end" font-size="11" fill="currentColor">80</text>
  <text x="44" y="14" text-anchor="end" font-size="11" fill="currentColor">90</text>
  <circle cx="85" cy="162" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="120" cy="150" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="120" cy="126" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="155" cy="138" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="190" cy="114" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="190" cy="90" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="225" cy="98" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="260" cy="70" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="260" cy="86" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="295" cy="50" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="330" cy="58" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="365" cy="26" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="225" y="244" text-anchor="middle" font-size="12" fill="currentColor">hours studied</text>
  <text x="16" y="110" text-anchor="middle" font-size="12" fill="currentColor" transform="rotate(-90 16 110)">test score</text>
</svg>
</div>

To describe a scatter plot, look for four things.

1. **Direction.** If $y$ tends to rise as $x$ rises, the association is **positive**; if it tends to fall, **negative**.
   Here it is positive.
2. **Form.** Do the points follow a straight line, a curve, or several clusters? Here, roughly a straight line.
3. **Strength.** How closely do the points follow the form? Tight around a line is **strong**; a loose cloud is
   **weak**. Here, strong: the points stay within a few marks of a straight line.
4. **Unusual points.** A point far from the pattern (an outlier in the vertical direction), or far out on the
   horizontal axis (a point with high **leverage**, which can drag a fitted line toward it), needs a second look.

Chapter 4 turns direction and strength into a number, the **correlation coefficient**, and "roughly a straight line"
into a particular line, the **least squares line**. For these 12 points the correlation is about $0.97$ and the line is
about $y = 49.1 + 4.02x$; Chapter 4 shows how to compute both.

**Two warnings that Chapter 4 makes precise.**

- A strong association is not proof of cause. Students who study more may also sleep better, attend more classes and
  care more; any of these could explain the scores.
- A pattern seen over one range of $x$ need not continue outside it. Nobody should conclude that 30 hours of study
  would give a score of $49.1 + 4.02 \times 30 \approx 170$ out of 100. Predicting outside the range of the data is
  called **extrapolation**, and it is dangerous.

**Adding a third variable.** A scatter plot can carry a categorical variable as colour or symbol: plot students from
two schools in two colours. This often reveals that one cloud is really two (Chapter 4's Simpson's paradox is the
extreme case).

## 2.5 Honest and dishonest graphs

**A question.** A poster shows two bars: brand A at 52% and brand B at 48%. Bar A is three times as tall as bar B.
Every number on the poster is correct. Is the poster honest?

### Truncated axes

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="The same two numbers, 52 and 48, drawn twice. Left: the axis starts at 0 and the bars look almost equal. Right: the axis starts at 46 and the first bar looks three times as tall as the second">
  <text x="110" y="20" text-anchor="middle" font-size="12" fill="currentColor">axis from 0</text>
  <line x1="40" y1="190" x2="190" y2="190" stroke="currentColor"/><line x1="40" y1="190" x2="40" y2="40.0" stroke="currentColor"/>
  <text x="34" y="194.0" text-anchor="end" font-size="11" fill="currentColor">0</text>
  <text x="34" y="144.0" text-anchor="end" font-size="11" fill="currentColor">20</text>
  <text x="34" y="94.0" text-anchor="end" font-size="11" fill="currentColor">40</text>
  <text x="34" y="44.0" text-anchor="end" font-size="11" fill="currentColor">60</text>
  <rect x="65" y="60.0" width="45" height="130.0" fill="#9cc9ea" stroke="currentColor"/>
  <text x="87.5" y="206" text-anchor="middle" font-size="12" fill="currentColor">A: 52</text>
  <rect x="130" y="70.0" width="45" height="120.0" fill="#9cc9ea" stroke="currentColor"/>
  <text x="152.5" y="206" text-anchor="middle" font-size="12" fill="currentColor">B: 48</text>
  <text x="330" y="20" text-anchor="middle" font-size="12" fill="currentColor">axis from 46</text>
  <line x1="260" y1="190" x2="410" y2="190" stroke="currentColor"/><line x1="260" y1="190" x2="260" y2="40.0" stroke="currentColor"/>
  <text x="254" y="194" text-anchor="end" font-size="11" fill="currentColor">46</text>
  <text x="254" y="156.5" text-anchor="end" font-size="11" fill="currentColor">48</text>
  <text x="254" y="119" text-anchor="end" font-size="11" fill="currentColor">50</text>
  <text x="254" y="81.5" text-anchor="end" font-size="11" fill="currentColor">52</text>
  <text x="254" y="44" text-anchor="end" font-size="11" fill="currentColor">54</text>
  <rect x="285" y="77.5" width="45" height="112.5" fill="#eea66f" stroke="currentColor"/>
  <text x="307.5" y="206" text-anchor="middle" font-size="12" fill="currentColor">A: 52</text>
  <rect x="350" y="152.5" width="45" height="37.5" fill="#eea66f" stroke="currentColor"/>
  <text x="372.5" y="206" text-anchor="middle" font-size="12" fill="currentColor">B: 48</text>
</svg>
</div>

Both panels show the same two numbers, 52 and 48. On the left the vertical axis starts at 0, and the bars are nearly
equal, which is the truth: 52 is about 8% more than 48. On the right the axis starts at 46, so the visible bars have
heights $52 - 46 = 6$ and $48 - 46 = 2$: bar A looks three times as tall as bar B. The numbers are right; the picture is
wrong.

The rule is simple for **bar charts** (and any chart where a length or area stands for an amount): **the axis must
start at zero**, because the reader compares lengths. For **line graphs and scatter plots**, where the message is the
*change* or the *position*, a non-zero axis is often fine and sometimes necessary (a line chart of body temperature
from 0 °C to 40 °C would flatten every fever). Then the honest thing is to label the axis clearly and choose a range
that does not exaggerate.

### The lie factor

Edward Tufte, in *The Visual Display of Quantitative Information* (1983), proposed a measure of how much a graphic
distorts:

$$
\text{lie factor} = \frac{\text{size of the effect shown in the graphic}}{\text{size of the effect in the data}},
$$

where the "size of the effect" is a relative change: (second value $-$ first value) / first value.

**Worked example 2.3.** For the truncated panel, compare B (48) to A (52).

- In the data: $\frac{52 - 48}{48} = \frac{4}{48} \approx 0.083$, an 8.3% difference.
- In the graphic: the drawn heights are 6 and 2, so $\frac{6 - 2}{2} = 2$, a 200% difference.
- Lie factor: $2 / 0.0833 = 24$.

**Check:** $0.0833 \times 24 = 2.0$. A lie factor near 1 is honest; Tufte suggested that values outside roughly 0.95 to
1.05 deserve suspicion. This panel exaggerates the difference 24-fold.

### Area and volume tricks

The eye judges a picture by its area (or, for a drawing of a solid object, its apparent volume). Suppose a magazine
wants to show that a country's oil production doubled, and draws two oil barrels, the second twice as tall *and*
twice as wide. Its area is $2 \times 2 = 4$ times the first: the reader sees four times as much, not twice.

**Worked example 2.4.** Compute the lie factor of the doubled-barrel picture, read by area.

- Data: $\frac{2 - 1}{1} = 1$ (a 100% increase).
- Graphic: areas 1 and 4, so $\frac{4 - 1}{1} = 3$.
- Lie factor: $3 / 1 = 3$.

If the reader sees the barrel as a solid object, the apparent volume grows by $2^3 = 8$, and the lie factor is $7$.
The honest versions: scale the area, not the side (multiply each side by $\sqrt{2} \approx 1.41$), or better, use bars,
or draw two separate barrels side by side ("one barrel stands for so many million").

Nightingale knew this. In her polar area diagrams (Chapter 1), each month's wedge has the same angle, and the *area*
of each coloured part is proportional to the number of deaths. Since the area of a wedge grows with the square of its
radius, she set the radius proportional to the *square root* of the count, so that the eye's area reading is right.

### Other ways to mislead

- **Three-dimensional effects.** A 3D pie chart tilts the circle, so slices at the front look larger than equal slices
  at the back. A 3D bar chart makes it hard to see where the bar top meets the axis. Avoid both.
- **Two vertical axes.** A chart with a different scale on the left and right can make any two series appear to move
  together, by choosing the two scales. The reader cannot tell what is a real match and what is a choice of scale.
- **Cherry-picked windows.** A time plot that starts in an unusually low year makes any later year look like growth.
  Ask: why does the chart start here?
- **Counts instead of rates.** A map showing the number of cases of a disease by region mostly shows where people live.
  Divide by the population to show a rate.
- **Unlabelled or missing axes.** A graph with no scale cannot be checked, which is sometimes the point.

### A checklist for an honest graph

1. Title, axis labels and units; say where the data come from (and if they are made up, say so).
2. Bars start at zero; areas are proportional to the amounts they show.
3. Choose the scale to show the data, not to make a point.
4. Show the variation, not just the averages, when it matters (box plots, dots, error bars).
5. Prefer positions on a common scale (dots, bars) to angles, areas, volumes and colours.

<figure class="play" data-play="bars" data-mode="cut"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A bar graph whose scale starts above 0 makes small differences look huge: one of the commonest dishonest graphs.</figcaption></figure>

## 2.6 Anscombe's quartet

**A question.** If two datasets have the same mean, the same spread and the same best-fit line, are they essentially
the same?

In 1973 the statistician Francis Anscombe published four small datasets in a short paper, "Graphs in statistical
analysis", in *The American Statistician*. Each has 11 points $(x, y)$. Here they are in full.

| | I | | II | | III | | IV | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | $x$ | $y$ | $x$ | $y$ | $x$ | $y$ | $x$ | $y$ |
| 1 | 10 | 8.04 | 10 | 9.14 | 10 | 7.46 | 8 | 6.58 |
| 2 | 8 | 6.95 | 8 | 8.14 | 8 | 6.77 | 8 | 5.76 |
| 3 | 13 | 7.58 | 13 | 8.74 | 13 | 12.74 | 8 | 7.71 |
| 4 | 9 | 8.81 | 9 | 8.77 | 9 | 7.11 | 8 | 8.84 |
| 5 | 11 | 8.33 | 11 | 9.26 | 11 | 7.81 | 8 | 8.47 |
| 6 | 14 | 9.96 | 14 | 8.10 | 14 | 8.84 | 8 | 7.04 |
| 7 | 6 | 7.24 | 6 | 6.13 | 6 | 6.08 | 8 | 5.25 |
| 8 | 4 | 4.26 | 4 | 3.10 | 4 | 5.39 | 19 | 12.50 |
| 9 | 12 | 10.84 | 12 | 9.13 | 12 | 8.15 | 8 | 5.56 |
| 10 | 7 | 4.82 | 7 | 7.26 | 7 | 6.42 | 8 | 7.91 |
| 11 | 5 | 5.68 | 5 | 4.74 | 5 | 5.73 | 8 | 6.89 |

Compute the usual summaries for each (the formulas are in Chapters 3 and 4; Python's `statistics` module does them
in one line each). For **all four** datasets:

| Summary | Value (all four sets) |
| --- | --- |
| mean of $x$ | 9 |
| variance of $x$ (dividing by $n - 1$) | 11 |
| mean of $y$ | 7.50 (to 2 decimals) |
| variance of $y$ | 4.12 or 4.13 (to 2 decimals) |
| correlation of $x$ and $y$ | 0.816 (to 3 decimals) |
| least squares line | $y = 3.00 + 0.500x$ (to 2 and 3 decimals) |

Now plot them. The orange line in each panel is the same fitted line $y = 3 + 0.5x$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 400" role="img" aria-label="Anscombe's quartet: four scatter plots, each with the same fitted line y = 3 + 0.5x. Set I is a noisy straight-line cloud; set II is a smooth curve that bends down; set III is an exact line except for one high outlier; set IV has ten points stacked at x = 8 and one point far away at x = 19">
  <rect x="40" y="20" width="180" height="150" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="48" y="36" font-size="13" fill="currentColor">I</text>
  <line x1="40" y1="145" x2="220" y2="32.5" stroke="#eea66f" stroke-width="2"/>
  <circle cx="120" cy="94.5" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="100" cy="108.1" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="150" cy="100.2" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="110" cy="84.9" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="130" cy="90.9" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="160" cy="70.5" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="80" cy="104.5" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="60" cy="141.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="140" cy="59.5" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="90" cy="134.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="70" cy="124" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="70" y="184" text-anchor="middle" font-size="10" fill="currentColor">5</text>
  <text x="120" y="184" text-anchor="middle" font-size="10" fill="currentColor">10</text>
  <text x="170" y="184" text-anchor="middle" font-size="10" fill="currentColor">15</text>
  <text x="220" y="184" text-anchor="middle" font-size="10" fill="currentColor">20</text>
  <text x="35" y="148" text-anchor="end" font-size="10" fill="currentColor">4</text>
  <text x="35" y="98" text-anchor="end" font-size="10" fill="currentColor">8</text>
  <text x="35" y="48" text-anchor="end" font-size="10" fill="currentColor">12</text>
  <rect x="260" y="20" width="180" height="150" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="268" y="36" font-size="13" fill="currentColor">II</text>
  <line x1="260" y1="145" x2="440" y2="32.5" stroke="#eea66f" stroke-width="2"/>
  <circle cx="340" cy="80.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="93.2" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="370" cy="85.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="330" cy="85.4" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="350" cy="79.2" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="380" cy="93.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="300" cy="118.4" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="280" cy="156.2" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="360" cy="80.9" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="310" cy="104.2" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="290" cy="135.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="290" y="184" text-anchor="middle" font-size="10" fill="currentColor">5</text>
  <text x="340" y="184" text-anchor="middle" font-size="10" fill="currentColor">10</text>
  <text x="390" y="184" text-anchor="middle" font-size="10" fill="currentColor">15</text>
  <text x="440" y="184" text-anchor="middle" font-size="10" fill="currentColor">20</text>
  <text x="255" y="148" text-anchor="end" font-size="10" fill="currentColor">4</text>
  <text x="255" y="98" text-anchor="end" font-size="10" fill="currentColor">8</text>
  <text x="255" y="48" text-anchor="end" font-size="10" fill="currentColor">12</text>
  <rect x="40" y="215" width="180" height="150" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="48" y="231" font-size="13" fill="currentColor">III</text>
  <line x1="40" y1="340" x2="220" y2="227.5" stroke="#eea66f" stroke-width="2"/>
  <circle cx="120" cy="296.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="100" cy="305.4" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="150" cy="230.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="110" cy="301.1" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="130" cy="292.4" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="160" cy="279.5" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="80" cy="314" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="60" cy="322.6" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="140" cy="288.1" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="90" cy="309.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="70" cy="318.4" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="70" y="379" text-anchor="middle" font-size="10" fill="currentColor">5</text>
  <text x="120" y="379" text-anchor="middle" font-size="10" fill="currentColor">10</text>
  <text x="170" y="379" text-anchor="middle" font-size="10" fill="currentColor">15</text>
  <text x="220" y="379" text-anchor="middle" font-size="10" fill="currentColor">20</text>
  <text x="35" y="343" text-anchor="end" font-size="10" fill="currentColor">4</text>
  <text x="35" y="293" text-anchor="end" font-size="10" fill="currentColor">8</text>
  <text x="35" y="243" text-anchor="end" font-size="10" fill="currentColor">12</text>
  <rect x="260" y="215" width="180" height="150" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="268" y="231" font-size="13" fill="currentColor">IV</text>
  <line x1="260" y1="340" x2="440" y2="227.5" stroke="#eea66f" stroke-width="2"/>
  <circle cx="320" cy="307.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="318" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="293.6" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="279.5" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="284.1" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="302" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="324.4" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="430" cy="233.8" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="320.5" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="291.1" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="320" cy="303.9" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="290" y="379" text-anchor="middle" font-size="10" fill="currentColor">5</text>
  <text x="340" y="379" text-anchor="middle" font-size="10" fill="currentColor">10</text>
  <text x="390" y="379" text-anchor="middle" font-size="10" fill="currentColor">15</text>
  <text x="440" y="379" text-anchor="middle" font-size="10" fill="currentColor">20</text>
  <text x="255" y="343" text-anchor="end" font-size="10" fill="currentColor">4</text>
  <text x="255" y="293" text-anchor="end" font-size="10" fill="currentColor">8</text>
  <text x="255" y="243" text-anchor="end" font-size="10" fill="currentColor">12</text>
</svg>
</div>

- **I** is what the summaries suggest: a noisy, roughly linear relationship. The line is a fair description.
- **II** is a smooth **curve** with no noise at all: $y$ rises and then falls. A straight line is the wrong form; a
  parabola would fit exactly. (Check by computing $y$ at $x = 4, 9, 14$: $3.10, 8.77, 8.10$, rising then falling.)
- **III** is an exact straight line except for **one outlier** at $(13, 12.74)$. The outlier tilts the fitted line and
  lowers the correlation from what would be essentially 1 for the other ten points.
- **IV** has no relationship at all for ten of the points: they all have $x = 8$, and $y$ varies at random. A single
  point at $x = 19$ creates the entire "correlation" and fixes the line. Remove it, and the slope cannot even be
  computed (all remaining $x$ are equal).

Anscombe's point was that graphs are not mere decoration and should be part of every analysis; he
argued against the view that numerical calculations are exact and graphs rough. Four datasets, identical summaries,
four different truths, and only the picture tells them apart.

**Try it in Python.**

```python
from statistics import mean, variance, correlation, linear_regression
x = [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5]
y2 = [9.14, 8.14, 8.74, 8.77, 9.26, 8.10, 6.13, 3.10, 9.13, 7.26, 4.74]
print(mean(x), variance(x), mean(y2), variance(y2))
print(correlation(x, y2), linear_regression(x, y2))
```

(`correlation` and `linear_regression` need Python 3.10 or later.) It prints a mean of 9, a variance of 11, a mean of
about 7.5009, a variance of about 4.1276, a correlation of about 0.8162 and a slope of 0.5 with intercept about 3.0009.

**A modern sequel.** In 2017 Justin Matejka and George Fitzmaurice took the idea further with the "Datasaurus Dozen":
a set of point clouds, one shaped like a dinosaur (from an earlier example by Alberto Cairo), others like a star, a
circle and parallel lines, all with the same means, standard deviations and correlation to two decimal places. They
made them by nudging points a little at a time while keeping the summaries fixed. The lesson is the same as in 1973,
with a smile: **always plot your data.**

### A short history thread

Most of these pictures are younger than you might think. The Scottish engineer William Playfair published line graphs
and bar charts of trade data in *The Commercial and Political Atlas* (1786) and pie charts in his *Statistical
Breviary* (1801). The word "histogram" was introduced by Karl Pearson in the 1890s. Nightingale's polar area diagrams
date from 1858. The stem plot and box plot are John Tukey's, from around 1970, gathered in *Exploratory Data Analysis*
(1977), a book whose message was that looking at data, with pencil and paper if need be, is a serious part of
statistics and comes before any formal test. Tufte's books from 1983 onward made graphical honesty a subject of its
own.

## Check yourself

??? question "1. For each variable, would you draw a bar chart or a histogram? (a) The blood types of 200 donors. (b) The weights of 200 newborn babies. (c) The number of goals scored in each of 380 football matches. (d) The month in which each of 500 people was born."
    (a) Bar chart: blood type is categorical. (b) Histogram: weight is continuous. (c) The number of goals is
    quantitative and discrete with only a few values (0 to about 8), so a bar for each value works well; it is a
    histogram with bins of width 1, and many people draw it as a bar chart with bars touching or nearly touching. (d)
    Bar chart, with the months in calendar order (the variable is categorical but ordered, and cyclic).

??? question "2. Make a stem plot of these made-up quiz scores and use it to find the median: 43, 51, 55, 58, 62, 64, 64, 67, 69, 71, 72, 75, 78, 81, 84, 88, 93."
    ```text
    4 | 3
    5 | 1 5 8
    6 | 2 4 4 7 9
    7 | 1 2 5 8
    8 | 1 4 8
    9 | 3
    key: 7 | 2 means 72
    ```
    There are 17 values, so the median is the 9th. Counting leaves: 1 on stem 4, 3 on stem 5 (total 4), then the 5th
    leaf on stem 6 is the 9th value: $69$. The shape is roughly symmetric, unimodal, centred near 70.

??? question "3. A made-up table of the ages of 50 people uses bins 0 to 20 (10 people), 20 to 30 (15), 30 to 40 (12) and 40 to 70 (13). Compute the density height of each bar and check that the total area is 1."
    Fractions: $10/50 = 0.20$, $15/50 = 0.30$, $12/50 = 0.24$, $13/50 = 0.26$. Widths: 20, 10, 10, 30. Densities
    (per year of age): $0.20/20 = 0.010$, $0.30/10 = 0.030$, $0.24/10 = 0.024$, $0.26/30 \approx 0.00867$. Areas:
    $0.010 \times 20 = 0.20$, $0.030 \times 10 = 0.30$, $0.024 \times 10 = 0.24$, $0.00867 \times 30 = 0.26$; total
    $1.00$. Drawn with counts instead, the last bar (13) would look like the tallest-but-one and, being three times as
    wide, would have the largest area of all, badly overstating how many people are over 40.

??? question "4. A dataset of house prices in a city has mean 820 000 dollars and median 640 000 dollars. What does that suggest about the shape? Which number better describes a 'typical' house?"
    The mean is well above the median, which suggests a right-skewed distribution: a long tail of very expensive
    houses pulls the mean up. The median is a better description of a typical house: half the houses cost less than
    640 000 dollars and half cost more. The mean is still useful for some purposes (the total value of all houses is
    the mean times the number of houses).

??? question "5. Find the five-number summary and the fences for the made-up data 3, 5, 6, 7, 8, 9, 10, 12, 30, and say which values are flagged as outliers."
    $n = 9$, so the median is the 5th value, $M = 8$. Leaving it out, the lower half is $3, 5, 6, 7$ with median
    $Q_1 = (5 + 6)/2 = 5.5$, and the upper half is $9, 10, 12, 30$ with median $Q_3 = (10 + 12)/2 = 11$. Five-number
    summary: $3, 5.5, 8, 11, 30$. IQR $= 5.5$, so $1.5 \times \text{IQR} = 8.25$; fences $5.5 - 8.25 = -2.75$ and
    $11 + 8.25 = 19.25$. Only $30$ is flagged. The upper whisker would end at 12.

??? question "6. Show that the datasets A = 0, 1, 3, 4, 5, 6, 7, 9, 10 and B = 0, 2, 2, 2, 5, 8, 8, 8, 10 have the same five-number summary. What would a histogram show that the box plot cannot?"
    Both have $n = 9$, minimum 0, maximum 10 and median (5th value) 5. For A, the lower half $0, 1, 3, 4$ gives
    $Q_1 = 2$ and the upper half $6, 7, 9, 10$ gives $Q_3 = 8$. For B, $0, 2, 2, 2$ gives $Q_1 = 2$ and
    $8, 8, 8, 10$ gives $Q_3 = 8$. So both summaries are $0, 2, 5, 8, 10$ and the box plots are identical. A histogram
    with bins of width 2 would show A spread fairly evenly and B with two peaks (around 2 and around 8) and only one
    value in between: a bimodal shape.

??? question "7. A chart shows sales of 100 units in January and 110 in February, as bars of heights 1 cm and 3.5 cm. Compute the lie factor."
    In the data the change is $(110 - 100)/100 = 0.10$. In the graphic it is $(3.5 - 1)/1 = 2.5$. Lie factor
    $= 2.5 / 0.10 = 25$. The axis must start at about 96 units: with 1 cm for 4 units, the bars have heights
    $(100 - 96)/4 = 1$ and $(110 - 96)/4 = 3.5$.

??? question "8. A poster shows the number of electric cars sold tripling, drawn as two car pictures, the second with three times the length and three times the height of the first. What does the reader see? Compute the lie factor read by area, and say how to draw it honestly."
    The area of the second picture is $3 \times 3 = 9$ times the first. Data change: $(3 - 1)/1 = 2$. Graphic change by
    area: $(9 - 1)/1 = 8$. Lie factor $= 8/2 = 4$. Honest versions: scale each side by $\sqrt{3} \approx 1.73$ so that
    the area triples, or use a bar chart, or draw three identical cars against one.

??? question "9. Describe the scatter plot of the 12 made-up students in §2.4 in the four terms of direction, form, strength and unusual points. Why should you not use it to predict the score of a student who studied 15 hours?"
    Direction: positive (more hours, higher score). Form: roughly linear. Strength: strong; the points stay close to a
    line (the correlation is about $0.97$). Unusual points: none stands out, though the pair at 6 hours (75 and 71)
    and the dip at 8 hours (78 after 80 at 7 hours) show that the relationship is not exact. Fifteen hours is well
    outside the observed range of 1 to 9 hours: the line would predict about $49.1 + 4.02 \times 15 \approx 109$, which
    is impossible on a test out of 100. That is extrapolation; scores must level off.

??? question "10. Using the table in §2.6, verify by hand that set IV has mean $x$ equal to 9 and mean $y$ equal to about 7.50."
    The $x$ values are ten 8s and one 19: total $80 + 19 = 99$, mean $99/11 = 9$. The $y$ values add to
    $6.58 + 5.76 + 7.71 + 8.84 + 8.47 + 7.04 + 5.25 + 12.50 + 5.56 + 7.91 + 6.89 = 82.51$, so the mean is
    $82.51 / 11 \approx 7.501$.

??? question "11. Prove that a density-scale histogram has total area 1, whatever the bins, as long as every value lies in exactly one bin."
    Let the bins have widths $w_1, \dots, w_k$ and counts $c_1, \dots, c_k$, with $c_1 + \dots + c_k = n$ because every
    value is in exactly one bin. Bar $j$ has height $\frac{c_j/n}{w_j}$, so its area is
    $w_j \cdot \frac{c_j/n}{w_j} = \frac{c_j}{n}$. The total area is $\frac{c_1 + \dots + c_k}{n} = \frac{n}{n} = 1$.

??? question "12. For a normal distribution with mean $\mu$ and standard deviation $\sigma$, the quartiles are $\mu \pm 0.6745\sigma$. Where are Tukey's fences, and what fraction of the distribution lies outside them?"
    $\text{IQR} = 2 \times 0.6745\sigma = 1.349\sigma$, so $1.5\,\text{IQR} = 2.0235\sigma$, and the fences are at
    $\mu \pm (0.6745 + 2.0235)\sigma = \mu \pm 2.698\sigma$. For a standard normal $Z$,
    $P(|Z| > 2.698) \approx 0.0070$, so about 0.7% of values from normal data are flagged, roughly 1 in 143. (The
    normal distribution and its table are in [Probability, chapter 10](../probability/10-The-Normal-Distribution.md).)
    So in a large normal dataset some flagged points are to be expected; they are not errors.

## What you learned

- Categorical variables get bar charts (separate bars, axis from zero); quantitative variables get histograms
  (touching bars over bins) or, for small datasets, stem plots that keep every value.
- With unequal bins, a histogram must use the density scale, height = fraction / width, so that area = fraction and
  the total area is 1.
- Describe a distribution by its shape (peaks, symmetry or skew), centre, spread and any gaps or outliers; in a
  right-skewed distribution the mean usually exceeds the median.
- The five-number summary (minimum, $Q_1$, median, $Q_3$, maximum) makes a box plot; Tukey's fences at
  $1.5\,\text{IQR}$ beyond the quartiles flag possible outliers. Box plots are best for comparing groups and cannot
  show two peaks.
- Scatter plots show two quantitative variables; describe direction, form, strength and unusual points, and do not
  extrapolate.
- Graphs mislead through truncated axes, areas and volumes that grow faster than the numbers, 3D effects, dual axes and
  chosen windows; Tufte's lie factor measures the distortion.
- Anscombe's quartet (1973): four datasets with the same means, variances, correlation and line, and completely
  different pictures. Plot the data first.

**Next:** [Chapter 3](03-Summaries.md) turns the "by eye" centre and spread into numbers (mean, median, variance,
standard deviation, percentiles), asks which of them an outlier can break, and proves that the mean and median are
each the best single guess for a different idea of "error".

## Further reading

- John W. Tukey, *Exploratory Data Analysis* (1977): stem plots, box plots and the whole idea of looking first.
- Edward R. Tufte, *The Visual Display of Quantitative Information* (1983; 2nd edition 2001): the lie factor and the
  principles of graphical integrity.
- William S. Cleveland, *The Elements of Graphing Data* (1985).
- William S. Cleveland and Robert McGill, "Graphical perception: theory, experimentation, and application to the
  development of graphical methods", *Journal of the American Statistical Association* 79 (1984).
- Darrell Huff, *How to Lie with Statistics* (1954): short, old and still funny about misleading graphs.
- F. J. Anscombe, "Graphs in statistical analysis", *The American Statistician* 27 (1973), 17 to 21.
- Justin Matejka and George Fitzmaurice, "Same stats, different graphs: generating datasets with varied appearance
  and identical statistics through simulated annealing", *Proceedings of the ACM CHI Conference* (2017).
- H. A. Sturges, "The choice of a class interval", *Journal of the American Statistical Association* 21 (1926).
- On this site: the Topics lessons [Double bar graphs and broken-line graphs](../../topics/statistics/level-3/06-double-bar-line.md),
  [Circle graphs](../../topics/statistics/level-4/03-circle-graphs.md),
  [Quartiles and the five-number summary](../../topics/statistics/level-5/01-quartiles-five-number.md),
  [Interquartile range and outliers](../../topics/statistics/level-5/03-iqr-outliers.md) and
  [The normal curve as a model of data](../../topics/statistics/level-7/02-normal-curve.md);
  [Probability, chapter 9](../probability/09-Continuous-Random-Variables.md) for densities and
  [Probability, chapter 10](../probability/10-The-Normal-Distribution.md) for the normal curve; and the
  [Probability book](../probability/index.md).
