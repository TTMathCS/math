---
title: "Graphs that mislead"
---

# Graphs that mislead

*Statistics and data · level 4, lesson 6 of 6*

## A question to start

Two juice companies show you a graph of how many people prefer their juice. Company Kiwi's bar is **twice as tall** as
Company Mango's. Kiwi must be twice as popular, right?

Look at the numbers on the side: Kiwi 52 people, Mango 50 people. That is barely different. The graph is not lying
about the numbers; every number on it is true. It lies with its **shape**. The vertical axis starts at 48 instead of 0,
so only the tops of the bars are shown, and the tops are what your eye compares.

A graph is supposed to let your eyes see the truth faster than reading a table. That same power can be turned around.
In this lesson you learn four classic tricks, **why** each one fools the eye, and how to redraw the graph honestly.

## The idea

### The rule behind honest pictures

Almost every honest graph follows one rule:

**The size you see should be in proportion to the number it stands for.**

If one number is twice another, its bar should be twice as long, its slice twice as big, its picture twice the area.
Every trick in this lesson breaks this rule in some way.

### Trick 1: a bar graph axis that does not start at 0

A bar's **length** stands for its number, measured from 0. If the axis starts at 48, a bar for 50 shows only the
piece from 48 to 50 (2 units), and a bar for 52 shows the piece from 48 to 52 (4 units). The second looks **twice**
as tall, though 52 is only $\frac{2}{50} = 4\%$ more than 50.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 220" role="img" aria-label="Left: axis from 48 to 56, the Kiwi bar for 52 looks twice as tall as the Mango bar for 50. Right: the same data with the axis from 0 to 60, the two bars look almost equal">
  <line x1="40" y1="170" x2="190" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="20" x2="40" y2="170" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="134" width="45" height="36" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="125" y="98" width="45" height="72" fill="#eea66f" stroke="currentColor"/>
  <g font-size="11" fill="currentColor" text-anchor="end">
    <text x="34" y="174">48</text><text x="34" y="138">50</text><text x="34" y="102">52</text><text x="34" y="66">54</text><text x="34" y="30">56</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="82" y="188">Mango</text><text x="147" y="188">Kiwi</text>
    <text x="115" y="210">axis starts at 48</text>
  </g>
  <line x1="270" y1="170" x2="420" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="270" y1="20" x2="270" y2="170" stroke="currentColor" stroke-width="2"/>
  <rect x="290" y="45" width="45" height="125" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="355" y="40" width="45" height="130" fill="#eea66f" stroke="currentColor"/>
  <g font-size="11" fill="currentColor" text-anchor="end">
    <text x="264" y="174">0</text><text x="264" y="124">20</text><text x="264" y="74">40</text><text x="264" y="24">60</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="312" y="188">Mango</text><text x="377" y="188">Kiwi</text>
    <text x="345" y="210">axis starts at 0</text>
  </g>
</svg>
</div>

**The fix:** bar graphs start at 0. If small differences really matter (and they sometimes do), show the numbers
clearly, or graph the **differences** themselves.

A note on line graphs: a line graph shows **change**, and its height is read against the scale, not as a length from
zero. So a line graph of body temperature from 36 °C to 39 °C, with the axis starting at 35, can be perfectly honest,
as long as the axis is clearly labelled. A broken axis is often marked with a small zigzag near the bottom to warn the
reader. The rule "start at 0" is strict for **bars**, because bars are read as lengths.

### Trick 2: unequal intervals

The bottom axis of a line graph or histogram is a number line. Equal distances along it must stand for equal amounts
of time or value.

Suppose a town's population is given for the years 1990, 2000, 2010, 2020, 2021, 2022, and the graph puts those six
years **equally spaced**. The last three points are one year apart, but drawn as far apart as the ten-year gaps. Any
growth in the decade-long gaps is squashed, and a change from 2020 to 2022 looks as slow (or as fast) as a change over a
whole decade. The shape of the line is wrong.

In a histogram, unequal intervals cause a different problem. If one interval is 0-10 and the next is 10-50, the wide
interval collects more values just because it is wider, so its bar is taller even if values are no more common there.

**The fix:** space the axis by the actual numbers (2020 to 2021 is one tenth of the gap from 2000 to 2010), and keep
histogram intervals equal.

### Trick 3: 3D pie charts

A circle graph drawn as a tilted 3D disc looks impressive, but tilting changes what you see. The slices at the
**front** show their thick edge as well as their top, and with perspective the near side is drawn larger than the far
side. Slices at the back are squashed.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 170" role="img" aria-label="Left: a tilted 3D pie with four slices that are each 25 percent; the front slice shows a thick edge and looks largest, the back slice looks thin. Right: the same four quarters in a flat pie, clearly equal">
  <path d="M 210 70 A 100 40 0 0 1 180.7 98.3 L 180.7 118.3 A 100 40 0 0 0 210 90 Z" fill="#9cc9ea" stroke="currentColor"/>
  <path d="M 180.7 98.3 A 100 40 0 0 1 39.3 98.3 L 39.3 118.3 A 100 40 0 0 0 180.7 118.3 Z" fill="#eea66f" stroke="currentColor"/>
  <path d="M 39.3 98.3 A 100 40 0 0 1 10 70 L 10 90 A 100 40 0 0 0 39.3 118.3 Z" fill="#7ccf9a" stroke="currentColor"/>
  <path d="M 110 70 L 180.7 98.3 A 100 40 0 0 1 39.3 98.3 Z" fill="#eea66f" stroke="currentColor"/>
  <path d="M 110 70 L 39.3 98.3 A 100 40 0 0 1 39.3 41.7 Z" fill="#7ccf9a" stroke="currentColor"/>
  <path d="M 110 70 L 39.3 41.7 A 100 40 0 0 1 180.7 41.7 Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor"/>
  <path d="M 110 70 L 180.7 41.7 A 100 40 0 0 1 180.7 98.3 Z" fill="#9cc9ea" stroke="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="110" y="100">25%</text><text x="110" y="48">25%</text><text x="55" y="74">25%</text><text x="165" y="74">25%</text>
    <text x="110" y="150">tilted 3D</text>
  </g>
  <path d="M 340 75 L 382.4 117.4 A 60 60 0 0 1 297.6 117.4 Z" fill="#eea66f" stroke="currentColor"/>
  <path d="M 340 75 L 297.6 117.4 A 60 60 0 0 1 297.6 32.6 Z" fill="#7ccf9a" stroke="currentColor"/>
  <path d="M 340 75 L 297.6 32.6 A 60 60 0 0 1 382.4 32.6 Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor"/>
  <path d="M 340 75 L 382.4 32.6 A 60 60 0 0 1 382.4 117.4 Z" fill="#9cc9ea" stroke="currentColor"/>
  <text x="340" y="160" font-size="12" text-anchor="middle" fill="currentColor">flat: four equal quarters</text>
</svg>
</div>

All four slices are exactly 25%, but in the 3D version the front (orange) slice looks the biggest, because you also see
its side, and the back (grey) one looks the thinnest. A company could put its own product in the front slice and let
the drawing do the boasting.

**The fix:** draw circle graphs flat, and write the percent on every slice. (Or use a bar graph: lesson 3.)

### Trick 4: pictures scaled in two directions

A pictograph might use a drawing of a bag of rice to show sales: 100 bags in year 1, 200 bags in year 2. The sneaky
version draws the year 2 bag **twice as tall and twice as wide**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 190" role="img" aria-label="Left: a small square bag for 100 bags. Middle: a bag twice as tall and twice as wide for 200 bags; dashed lines show that four small bags fit inside it. Right: the honest version, two small bags side by side">
  <rect x="20" y="110" width="40" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="40" y="170" font-size="11" text-anchor="middle" fill="currentColor">year 1: 100</text>
  <rect x="100" y="70" width="80" height="80" rx="6" fill="#eea66f" stroke="currentColor"/>
  <line x1="140" y1="70" x2="140" y2="150" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="100" y1="110" x2="180" y2="110" stroke="currentColor" stroke-dasharray="4 3"/>
  <text x="140" y="170" font-size="11" text-anchor="middle" fill="currentColor">year 2: 200</text>
  <text x="140" y="186" font-size="11" text-anchor="middle" fill="currentColor">looks 4 times bigger</text>
  <rect x="270" y="110" width="40" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="290" y="170" font-size="11" text-anchor="middle" fill="currentColor">year 1</text>
  <rect x="340" y="110" width="40" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="385" y="110" width="40" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="382" y="170" font-size="11" text-anchor="middle" fill="currentColor">year 2: two bags</text>
  <text x="100" y="40" font-size="12" fill="currentColor">misleading</text>
  <text x="300" y="40" font-size="12" fill="currentColor">honest</text>
</svg>
</div>

Why is it misleading? The eye judges a picture by its **area** (how much ink), not its height. Doubling the height
**and** the width multiplies the area by $2 \times 2 = 4$: four small bags fit inside the big one, as the dashed lines
show. So a doubling looks like a **fourfold** jump. If the picture is drawn as a 3D object (a box, a barrel) and grows
in all three directions, the volume it suggests is $2 \times 2 \times 2 = 8$ times bigger.

**The fix:** keep every picture the same size and use **more** of them (a pictograph with a key, as in level 2), or use
bars, which grow in only one direction.

### A checklist for any graph

1. Read the **title**, the **axis labels** and the **units**.
2. Do the bars **start at 0**?
3. Are the steps on each axis **equal**?
4. Is the graph **flat**, with sizes in proportion to the numbers?
5. Read the **actual numbers** and compare them yourself: how much bigger is one really, as a fraction or percent?
6. Who made the graph, and is anything **left out** (missing years, missing groups)?

## Worked examples

**1. How big does it look, how big is it?** A bar graph's axis starts at 90. Bar P is 95 and bar Q is 100.

1. Visible lengths: P shows $95 - 90 = 5$ units, Q shows $100 - 90 = 10$ units. Q **looks** twice as big.
2. Real comparison: Q is $100 - 95 = 5$ more than P, and $\frac{5}{95}$ is about 5% more.
3. Honest redraw: axis from 0 to 100; the bars are almost the same height.

**2. A shrinking picture.** A poster shows coins: last year's coin has diameter 4 cm and this year's has diameter 2 cm,
for savings of 400 and 200 dollars. The real ratio is $200 : 400$, a half. The picture's area ratio is
$(2 \times 2) : (4 \times 4) = 4 : 16$, a quarter. The savings look as if they fell to a quarter when they halved.

**3. Squeezed time.** A graph of a club's members shows 2015: 20, 2020: 40, 2021: 44, 2022: 48, with the four years
equally spaced. Real rates: from 2015 to 2020, $40 - 20 = 20$ new members in 5 years, that is 4 a year. From 2020 to
2022, $48 - 40 = 8$ in 2 years, also 4 a year. With honest spacing the line is a straight line: steady growth. With
equal spacing, the first piece looks very steep (20 in one step) and the rest look slow, suggesting the club stalled.
It did not.

**4. Reading a 3D pie.** A 3D pie shows "Brand A" in front looking about half the pie, with labels 35%, 30%, 20%, 15%
and A labelled 35%. Trust the label, not the look: A is just over a third, and the pie overstates it because of its
front position.

## Try it

1. A bar graph has an axis starting at 1000. Bars show 1010 and 1040. How many times taller does the second **look**?
   How much bigger is it really, in percent?
2. A pictograph doubles a cow's height and width to show milk production going from 50 to 100 litres. How many times
   bigger does the second cow look?
3. If a 3D box picture is tripled in height, width and depth, how many times bigger does it look?
4. Why is it acceptable for a line graph of a fever (37 to 39 °C) to start its axis at 36 °C, but not for a bar graph?
5. A graph shows test scores for the years 2019, 2020, 2023, 2024, equally spaced. What is misleading?
6. Redraw in words: a bar chart of 3 classes' book totals (120, 125, 130) with an axis from 115 to 130. What would an
   honest version look like?
7. Find a graph in a newspaper, a website or an advert, and run the six-point checklist on it. Write one sentence on
   whether it is fair.

??? note "Answers"
    1. Visible lengths $1010 - 1000 = 10$ and $1040 - 1000 = 40$: it looks **4 times** taller. Really it is
       $1040 - 1010 = 30$ more, and $\frac{30}{1010}$ is about 3% more.
    2. Area grows by $2 \times 2 = 4$: it looks **4 times** bigger, though production only doubled.
    3. $3 \times 3 \times 3 = 27$ times.
    4. A line graph is read against its scale to see change, so a labelled axis starting at 36 is fine. Bars are read as
       lengths from 0, so cutting the axis distorts the comparison of lengths.
    5. The gap 2020 to 2023 (three years) is drawn the same as one-year gaps, so change over those three years looks as
       if it happened in one year.
    6. Axis from 0 to about 140, in steps of 20. The three bars look nearly equal (120, 125, 130), which is true: the
       largest is only $\frac{10}{120}$, about 8%, more than the smallest.
    7. Answers will vary. A good answer names the trick (if any) and states the true comparison in numbers.

## Common mistake

**Comparing what the bars look like instead of what the numbers say.** Always do the arithmetic: "52 against 50 is 2
more, about 4%", and only then look at the picture.

**Calling every cut axis a lie.** Bars must start at 0; a clearly labelled line graph need not. Judge the graph by
whether the shape you see matches the numbers.

## Where it leads

- Back: [Spreadsheets for data](05-spreadsheets.md) · Next level: [Level 5: spread and samples](../level-5/index.md)
- [Level 4 page](index.md) · [Statistics topic page](../index.md)
- Bar graphs and pictographs with a key: [level 2](../level-2/index.md). Circle graphs: [lesson 3](03-circle-graphs.md).
- Why doubling the sides of a shape gives four times the area: [Measurement](../../measurement/index.md).
- Misleading claims in the news, with cherry-picked time ranges and risks, come back in level 8.
