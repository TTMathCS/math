---
title: "Spreadsheets for data"
---

# Spreadsheets for data

*Statistics and data · level 4, lesson 5 of 6*

## A question to start

You have the standing-jump distances of 10 students and you have worked out the mean by hand: add ten numbers, divide
by 10. Then you notice that one distance was typed wrong: it should be 106 cm, not 160 cm. Now you must add everything
up again, divide again, sort again for the median, redraw the bar graph...

Or you could change **one** number and watch the mean, the median, the range and the graph all fix themselves in a
blink. That is what a **spreadsheet** does. Scientists, shopkeepers, sports coaches and the engineers who track a rover's
measurements all keep their data in tables like this. In this lesson you learn to use one properly, and, just as
important, to understand what it is doing for you so that you can catch it when it goes wrong.

## The idea

### Cells, rows and columns

A **spreadsheet** is a big grid on a computer. Popular ones include Google Sheets, Microsoft Excel and LibreOffice
Calc (free); they all work almost the same way.

- The grid has **columns** named by letters (A, B, C, ...) and **rows** numbered 1, 2, 3, ...
- Each box is a **cell**, named by its column and row: **B3** is the cell in column B, row 3.
- A block of cells is a **range**, written with a colon: **B2:B11** means "from B2 down to B11", which is 10 cells.

### Entering data: one row per case, one column per variable

The golden rule for data in a spreadsheet:

- **Row 1 holds headings**: a short name for what each column contains, with the unit ("Jump (cm)").
- **Each row below is one case**: one student, one day, one measurement.
- **Each column is one variable**: one kind of information (name, grade, jump distance).

Type **numbers only** in number columns: "155", not "155 cm" (the unit belongs in the heading). If you type "155 cm",
the spreadsheet treats it as text and leaves it out of its calculations, often without warning.

### Formulas: telling the spreadsheet to calculate

A **formula** is an instruction that starts with an **equals sign**. Type it into a cell, press Enter, and the cell
shows the **answer**, while the formula stays hidden behind it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 300" role="img" aria-label="A spreadsheet. Column A lists students 1 to 10, column B their jump in centimetres. Column D names the results and column E holds formulas: count 10, mean 149.2, median 150, mode 155, range 29">
<rect x="0" y="10" width="420" height="19" fill="currentColor" fill-opacity="0.1"/>
<rect x="0" y="10" width="30" height="247" fill="currentColor" fill-opacity="0.1"/>
<rect x="340" y="48" width="80" height="95" fill="#7ccf9a" fill-opacity="0.3"/>
<rect x="120" y="29" width="80" height="19" fill="#eea66f" fill-opacity="0.4"/>
<rect x="120" y="48" width="80" height="190" fill="#9cc9ea" fill-opacity="0.35"/>
<g stroke="currentColor" stroke-width="0.6" opacity="0.6">
<line x1="0" y1="10" x2="420" y2="10"/>
<line x1="0" y1="29" x2="420" y2="29"/>
<line x1="0" y1="48" x2="420" y2="48"/>
<line x1="0" y1="67" x2="420" y2="67"/>
<line x1="0" y1="86" x2="420" y2="86"/>
<line x1="0" y1="105" x2="420" y2="105"/>
<line x1="0" y1="124" x2="420" y2="124"/>
<line x1="0" y1="143" x2="420" y2="143"/>
<line x1="0" y1="162" x2="420" y2="162"/>
<line x1="0" y1="181" x2="420" y2="181"/>
<line x1="0" y1="200" x2="420" y2="200"/>
<line x1="0" y1="219" x2="420" y2="219"/>
<line x1="0" y1="238" x2="420" y2="238"/>
<line x1="0" y1="257" x2="420" y2="257"/>
<line x1="0" y1="10" x2="0" y2="257"/>
<line x1="30" y1="10" x2="30" y2="257"/>
<line x1="120" y1="10" x2="120" y2="257"/>
<line x1="200" y1="10" x2="200" y2="257"/>
<line x1="220" y1="10" x2="220" y2="257"/>
<line x1="340" y1="10" x2="340" y2="257"/>
<line x1="420" y1="10" x2="420" y2="257"/>
</g><g font-size="11" fill="currentColor">
<text x="75.0" y="24" text-anchor="middle">A</text>
<text x="160.0" y="24" text-anchor="middle">B</text>
<text x="210.0" y="24" text-anchor="middle">C</text>
<text x="280.0" y="24" text-anchor="middle">D</text>
<text x="380.0" y="24" text-anchor="middle">E</text>
<text x="15" y="43" text-anchor="middle">1</text>
<text x="15" y="62" text-anchor="middle">2</text>
<text x="15" y="81" text-anchor="middle">3</text>
<text x="15" y="100" text-anchor="middle">4</text>
<text x="15" y="119" text-anchor="middle">5</text>
<text x="15" y="138" text-anchor="middle">6</text>
<text x="15" y="157" text-anchor="middle">7</text>
<text x="15" y="176" text-anchor="middle">8</text>
<text x="15" y="195" text-anchor="middle">9</text>
<text x="15" y="214" text-anchor="middle">10</text>
<text x="15" y="233" text-anchor="middle">11</text>
<text x="15" y="252" text-anchor="middle">12</text>
<text x="35" y="43">Student</text>
<text x="125" y="43">Jump (cm)</text>
<text x="35" y="62">Student 1</text>
<text x="194" y="62" text-anchor="end">142</text>
<text x="35" y="81">Student 2</text>
<text x="194" y="81" text-anchor="end">155</text>
<text x="35" y="100">Student 3</text>
<text x="194" y="100" text-anchor="end">138</text>
<text x="35" y="119">Student 4</text>
<text x="194" y="119" text-anchor="end">160</text>
<text x="35" y="138">Student 5</text>
<text x="194" y="138" text-anchor="end">151</text>
<text x="35" y="157">Student 6</text>
<text x="194" y="157" text-anchor="end">147</text>
<text x="35" y="176">Student 7</text>
<text x="194" y="176" text-anchor="end">155</text>
<text x="35" y="195">Student 8</text>
<text x="194" y="195" text-anchor="end">133</text>
<text x="35" y="214">Student 9</text>
<text x="194" y="214" text-anchor="end">162</text>
<text x="35" y="233">Student 10</text>
<text x="194" y="233" text-anchor="end">149</text>
<text x="225" y="62">Count</text>
<text x="414" y="62" text-anchor="end">10</text>
<text x="225" y="81">Mean</text>
<text x="414" y="81" text-anchor="end">149.2</text>
<text x="225" y="100">Median</text>
<text x="414" y="100" text-anchor="end">150</text>
<text x="225" y="119">Mode</text>
<text x="414" y="119" text-anchor="end">155</text>
<text x="225" y="138">Range</text>
<text x="414" y="138" text-anchor="end">29</text>
<text x="225" y="43">Result</text><text x="345" y="43">Value</text></g>
<text x="215" y="278" font-size="11" text-anchor="middle" fill="currentColor">Cell E3 holds the formula =AVERAGE(B2:B11)</text>
<text x="215" y="294" font-size="11" text-anchor="middle" fill="currentColor">and shows its answer, 149.2</text>
</svg>
</div>

Here are the formulas for this lesson. (They work the same in Google Sheets, Excel and LibreOffice.)

| You want | Type this | For our data |
| --- | --- | --- |
| How many values | `=COUNT(B2:B11)` | 10 |
| The total | `=SUM(B2:B11)` | 1492 |
| The mean | `=AVERAGE(B2:B11)` | 149.2 |
| The median | `=MEDIAN(B2:B11)` | 150 |
| The mode | `=MODE(B2:B11)` | 155 |
| The largest, smallest | `=MAX(B2:B11)`, `=MIN(B2:B11)` | 162, 133 |
| The range | `=MAX(B2:B11)-MIN(B2:B11)` | 29 |

Notice that the spreadsheet calls the mean **AVERAGE**. That is a reminder from lesson 1: when people say "average"
without saying which one, they nearly always mean the mean.

### Check the machine with your own head

A spreadsheet never makes an arithmetic slip, but it does **exactly** what you type, including your mistakes. So
always check that the answers are **reasonable**:

- The mean and median must lie between the smallest and largest values (133 and 162). ✓
- Mean × count = total: $149.2 \times 10 = 1492$. ✓
- Count the values yourself: 10 students, and COUNT says 10. ✓ If COUNT says 9, one of the cells holds text instead of a
  number, or the range missed a row.

Let us check the median by hand too. Sorted, the jumps are 133, 138, 142, 147, **149, 151**, 155, 155, 160, 162. With
10 values the median is halfway between the 5th and 6th: $(149 + 151) \div 2 = 150$. ✓ And 155 appears twice, every
other value once, so the mode is 155. ✓

**About MODE.** If no value repeats, MODE gives an error message (such as #N/A) rather than "no mode". If two values
tie, it shows only one of them. So read the data yourself before you trust a mode from a spreadsheet.

### Why formulas beat typing the answer

You could work out 149.2 on a calculator and type "149.2" into E3. Do not. A formula **remembers how** the answer was
made, so when the data change, the answer changes too. Fix the typo, change cell B5 from 160 to 106, and instantly:

- total $1492 - 160 + 106 = 1438$;
- mean $1438 \div 10 = 143.8$;
- median: sorted 106, 133, 138, 142, **147, 149**, 151, 155, 155, 162, so $(147 + 149) \div 2 = 148$;
- range $162 - 106 = 56$.

A typed number would have stayed wrong, quietly.

### Copying formulas down

Suppose you want each jump in metres in column C. In C2 type `=B2/100` (the slash means divide). Now copy C2 into C3
to C11 (drag the small square at the cell's corner down, or copy and paste). The spreadsheet **shifts the reference**
for you: C3 becomes `=B3/100`, C4 becomes `=B4/100`, and so on. This is called a **relative reference**: the formula
means "the cell one to my left, divided by 100", wherever it is copied.

### Sorting, carefully

To sort students from shortest to longest jump, select the **whole table** (columns A and B, rows 2 to 11), then use
the menu **Data → Sort** and choose column B, smallest to largest.

**Danger:** if you select only column B and sort it, the jumps get reordered but the names do **not**. Student 1 now
appears next to someone else's jump, and your data are scrambled for good. Always sort whole rows together. (Keeping
an untouched copy of the original data on another sheet is a professional habit.)

### Making a chart

Select the headings and the data (A1:B11), then **Insert → Chart**. The spreadsheet guesses a chart type; you choose
the right one using levels 3 and 4:

- one bar per student or per category: a **bar graph** (column chart);
- many measurements grouped into intervals: a **histogram** (most spreadsheets offer one);
- parts of a whole: a **circle graph** (pie chart);
- values over time: a **line graph**.

Then check what the computer chose for you: is there a **title**? Are the **axes labelled**? Does the bar graph's
scale **start at 0**? Spreadsheets sometimes start the axis just below the smallest value, which makes small
differences look huge (lesson 6). You can fix the axis in the chart settings.

## Worked examples

**1. Setting up.** A student records the noon temperature (°C) for a week. Plan: A1 "Day", B1 "Temperature (°C)";
A2 to A8 the days; B2 to B8 the temperatures 12, 15, 14, 9, 11, 16, 18. Formulas: `=AVERAGE(B2:B8)` gives about
13.57 (by hand $95 \div 7 = 13.571...$ ✓); `=MAX(B2:B8)-MIN(B2:B8)` gives $18 - 9 = 9$ ✓. Chart: a line graph,
because the days are in time order (level 3, lesson 6).

**2. A bug that hides.** A sheet holds our 10 jumps in B2:B11, but the mean cell contains `=AVERAGE(B2:B10)`. That
range is only 9 cells, so the tenth student (149 cm, in B11) is left out. The sheet shows
$(1492 - 149) \div 9 = 1343 \div 9$, about 149.2, which **looks** right, because the missing value happened to be close
to the mean. The mistake is invisible in the answer. Only a check like `=COUNT(B2:B10)`, which shows 9 instead of 10,
reveals it. With a different missing value the mean would be visibly off, but you cannot count on that.

**3. A text number.** A sheet has 10 jumps but COUNT gives 9 and the mean looks too big. Looking down column B, one
cell reads "133 cm". The spreadsheet treated it as text and ignored it, so it averaged only 9 values, and the missing
one was the smallest, so the mean came out too big: $(1492 - 133) \div 9 = 1359 \div 9 = 151$. Retype the cell as 133,
and COUNT becomes 10 and the mean 149.2.

**4. Percents for a circle graph.** Ways to school: Walk 18, Bus 10, Car 8, Bike 4 in B2:B5. In B6 type
`=SUM(B2:B5)` to get 40. In C2 type `=B2/40` and copy down, then format column C as percent: 45%, 25%, 20%, 10%.
Then insert a pie chart of A1:B5 (lesson 3).

## Try it

1. What does the range A1:A5 contain? How many cells is C2:C21?
2. Write the formula for the median of the values in D2 to D31.
3. A column of 8 test scores has `=SUM(B2:B9)` equal to 600. What will `=AVERAGE(B2:B9)` show?
4. A formula `=AVERAGE(B2:B6)` shows 20. One cell in that range is changed from 12 to 22. What does the formula show
   now?
5. You sort only the "Score" column of a table of names and scores. What has gone wrong?
6. `=MODE(B2:B6)` for the data 4, 7, 9, 12, 15 shows an error. Why?
7. Your spreadsheet bar chart of sales of 50, 52 and 55 has a vertical axis starting at 48. What should you change, and
   why?
8. Write formulas for the range of the data in B2:B21 and for checking how many numbers it contains.

??? note "Answers"
    1. A1, A2, A3, A4, A5: five cells. C2:C21 is $21 - 2 + 1 = 20$ cells.
    2. `=MEDIAN(D2:D31)`.
    3. $600 \div 8 = 75$.
    4. The total was $20 \times 5 = 100$. It becomes $100 - 12 + 22 = 110$, so the mean is $110 \div 5 = 22$.
    5. The scores have been reordered but the names have not, so names are now next to the wrong scores. Undo, select
       the whole table, and sort by the score column.
    6. No value appears more than once, so there is no mode; the spreadsheet shows an error instead of "no mode".
    7. Make the axis start at 0. Starting at 48 makes 52 look twice as tall as 50 above the axis ($4$ against $2$
       units), when it is only 4% more.
    8. `=MAX(B2:B21)-MIN(B2:B21)` and `=COUNT(B2:B21)` (which should say 20 if every cell holds a number).

## Common mistake

**Trusting the screen without checking.** A wrong range, a number typed as text or a scrambled sort gives a confident,
neatly formatted, wrong answer. Check that COUNT matches the number of cases and that the mean lies between MIN and
MAX.

**Typing answers instead of formulas.** Then nothing updates when the data change. Keep the data in cells and let
formulas do the work.

## Where it leads

- Back: [Infographics](04-infographics.md) · Next: [Graphs that mislead](06-misleading-graphs.md)
- [Level 4 page](index.md) · [Statistics topic page](../index.md)
- The mean, median, mode and range by hand: [level 3](../level-3/index.md).
- Large data sets with many variables, and cleaning messy data, come back in level 7.
- At U of T, the first programming course stores data in lists and computes with them in Python: see
  [CSC108, Unit 5: Lists](../../../uoft/CSC108H1/unit05.md).
