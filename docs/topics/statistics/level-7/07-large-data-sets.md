---
title: "Organising large data sets"
---

# Organising large data sets

*Statistics and data · level 7, lesson 7 of 7*

## A question to start

In 2020 the committee that names human genes renamed several of them. Genes called SEPT2 and MARCH1 became SEPTIN2 and
MARCHF1. The reason was not biology. When scientists typed the old names into a spreadsheet, the program helpfully
turned them into dates (2 September, 1 March), and the errors spread silently into published data. Studies had found
the problem in a large share of papers that shared their gene lists as spreadsheets.

Real data sets have thousands or millions of rows. Nobody reads every row, so small mistakes hide well. Before any of
the statistics in this level can be trusted, the data have to be organised and cleaned. This lesson is about that
first, unglamorous, essential step.

## The idea

### Cases and variables

A data set is about some **cases** (also called individuals, records or observations): the things the data describe.
They can be people, days, rocks, cities or sales. For each case we record **variables**: characteristics that can
vary from case to case.

The standard way to store data is a **tidy table**:

- each **row** is one case;
- each **column** is one variable;
- each **cell** holds one value.

| id | grade | height_cm | pet | sleep_h |
| --- | --- | --- | --- | --- |
| 1 | 10 | 172 | dog | 8 |
| 2 | 10 | 165 | dog | 7.5 |
| 3 | 11 | 168 | cat | 7 |

The first column is an **identifier**: a label that names each case uniquely, so you can find it, check it and spot
duplicates. A short document called a **codebook** (or data dictionary) explains each variable: its name, what it
means, its units, how it was measured and how missing values are written. "height_cm" is a much better column name
than "h", and the codebook says it was measured in centimetres, in socks.

### Kinds of variables

The kind of variable decides which summaries and graphs make sense.

- **Categorical** variables put cases into groups.
    - **Nominal**: groups with no order: pet type, province, eye colour.
    - **Ordinal**: groups with a natural order: shirt size (S, M, L), survey answers (disagree, neutral, agree).
- **Numerical** (quantitative) variables are measured or counted numbers, where arithmetic makes sense.
    - **Discrete**: counts, with gaps between possible values: number of siblings, goals scored.
    - **Continuous**: measurements that could take any value in a range: height, time, temperature.

A number is not always numerical. Postal codes, jersey numbers and student IDs are written with digits, but the mean
jersey number is meaningless: they are categorical labels.

| Kind | Summaries | Graphs |
| --- | --- | --- |
| Categorical | counts, percents, mode | bar graph, circle graph, two-way table |
| Numerical | mean, median, SD, IQR, five-number summary | histogram, box plot, dot plot; scatter plot for two |

For ordinal data the median can make sense ("the median answer was 'agree'"), but the mean usually does not.

### Databases: many tables, linked

Large organisations keep data in **databases**: collections of tidy tables linked by identifiers. A school might keep
one table of students (id, name, grade) and another of test results (student id, subject, mark). The student id in
the second table is a **key** that links each result to its student. Keeping them separate means a student's name is
stored once, not copied into every result row, so it cannot be copied wrongly.

Whatever the tool (a spreadsheet, a database language such as SQL, or a statistics program), most work is built from
four moves:

1. **Filter**: keep only the rows you need ("grade 11 students").
2. **Sort**: order the rows by a variable.
3. **Group and summarise**: compute a summary for each group ("mean sleep for each grade"). In a spreadsheet this is
   `AVERAGEIF` or a pivot table; in SQL it is `GROUP BY`.
4. **Join**: combine two tables using a key.

### Cleaning messy data

**Cleaning** means finding and fixing problems before analysis. Common problems:

- **Duplicates**: the same case entered twice. Check that every identifier appears once.
- **Inconsistent categories**: "dog", "Dog", "DOG" and "dog " (with a space) are one category to you and four to a
  computer.
- **Mixed units**: a height of 1.68 among heights like 172 was entered in metres, not centimetres.
- **Impossible values**: 30 hours of sleep a night, a negative age, a test mark of 112 out of 100.
- **Missing values**: a blank cell, or a code such as 0, −99 or "NA". Codes are dangerous: a computer will happily
  average them as real numbers.
- **Format problems**: dates written three different ways, numbers stored as text, the gene-name problem above.

Good habits:

- **Never change the raw file.** Keep the original, and do the cleaning in a copy or, better, in steps a program can
  repeat.
- **Keep a cleaning log**: every change, and why. Someone else must be able to repeat your work.
- **Fix only what you can justify.** If 1.68 is clearly metres, convert it. If 30 hours of sleep could be 3.0 or 10,
  you cannot know; mark it missing rather than guess.
- **Report what you removed**: "8 rows received; 1 duplicate removed; 2 values set to missing."
- **Look before you calculate**: sort each column and look at the smallest and largest values; draw a quick histogram.
  Typos usually appear at the ends.

## Worked examples

**1. Cleaning a small survey.** Here is a raw file of 8 rows:

| id | grade | height_cm | pet | sleep_h |
| --- | --- | --- | --- | --- |
| 1 | 10 | 172 | Dog | 8 |
| 2 | 10 | 165 | dog | 7.5 |
| 3 | 11 | 1.68 | Cat | 7 |
| 4 | 11 | 180 | cat␣ | (blank) |
| 5 | 10 | 158 | DOG | 30 |
| 2 | 10 | 165 | dog | 7.5 |
| 6 | 12 | 175 | none | 6 |
| 7 | 12 | 0 | fish | 8 |

(The ␣ marks a space typed after "cat".)

Cleaning log:

- id 2 appears twice with identical values: remove the second copy. 7 cases remain.
- Pet: change everything to lower case and remove spaces. Categories: dog (3), cat (2), none (1), fish (1).
- Height 1.68 for id 3 is clearly metres: convert to 168 cm.
- Height 0 for id 7 is not a real height: treat as missing.
- Sleep 30 for id 5 is impossible: set to missing (it could have been 3.0 or 10; we cannot tell).
- Sleep blank for id 4: missing.

**2. What the cleaning changes.** Compare the mean sleep before and after.

- Raw, with the blank read as 0 and the duplicate kept: $(8 + 7.5 + 7 + 0 + 30 + 7.5 + 6 + 8) \div 8 = 74 \div 8 =$
  **9.25 hours**.
- Clean, using the 5 valid values 8, 7.5, 7, 6, 8: $36.5 \div 5 =$ **7.3 hours**.

Mean height: raw $(172 + 165 + 1.68 + 180 + 158 + 165 + 175 + 0) \div 8 \approx 127.1$ cm, a height of a young child.
Clean, with the 6 valid heights 172, 165, 168, 180, 158, 175: $1018 \div 6 \approx 169.7$ cm.

**3. One typo in a big data set.** A data set has 1000 heights with mean 165.0 cm. One height of 165 was typed as
1650. The total rises by $1650 - 165 = 1485$, so the mean rises by $1485 \div 1000 = 1.485$ cm, to about 166.5. That
looks harmless, which is exactly the danger: nobody notices. The standard deviation suffers much more, because the
squared deviation of 1650 from the mean is about $1484^2 \approx 2.2$ million. The median does not move. Sorting the
column puts 1650 at the end where it is easy to see.

**4. Group and summarise.** From the cleaned table, the mean sleep by grade: grade 10 (ids 1, 2; id 5 missing):
$(8 + 7.5) \div 2 = 7.75$ hours; grade 11 (id 3; id 4 missing): 7 hours; grade 12 (ids 6, 7): $(6 + 8) \div 2 = 7$
hours. Always report the count beside each mean: these groups have only 2, 1 and 2 valid values, far too few to
compare grades seriously.

**5. Two categorical variables.** A two-way table counts cases by two categorical variables at once. Grade by "has a
pet" (dog, cat or fish counts as yes):

| | has a pet | no pet | total |
| --- | --- | --- | --- |
| grade 10 | 3 | 0 | 3 |
| grade 11 | 2 | 0 | 2 |
| grade 12 | 1 | 1 | 2 |
| total | 6 | 1 | 7 |

## Try it

1. Classify each variable: (a) number of pets; (b) favourite season; (c) time to run 100 m; (d) a movie rating of 1
   to 5 stars; (e) telephone area code; (f) mass of a rock sample.
2. Why is the mean of a column of postal codes meaningless, even though a computer will calculate it?
3. A survey column of ages contains: 14, 15, 15, 16, 150, 14, −1, 16, 15. Which values need attention, and what would
   you do with each?
4. In a spreadsheet, missing marks were entered as 0. The real marks of 18 students average 72, and 2 students have
   missing marks. What mean will the spreadsheet report?
5. Write a cleaning log entry for each: (a) "Toronto", "toronto" and "TO" in a city column; (b) a date written as
   "03/04/2025" in a file where all other dates are written year-month-day.
6. Design a tidy table for a week of weather on Mars from a rover: name the cases, five variables with units, and say
   which are categorical and which numerical.
7. A data set of 500 incomes has one value typed with three extra zeros: 45 000 became 45 000 000. Explain the effect
   on the mean and on the median.

??? note "Answers"
    1. (a) numerical, discrete; (b) categorical, nominal; (c) numerical, continuous; (d) categorical, ordinal (an
       average star rating is often reported, but the gaps between stars need not be equal); (e) categorical,
       nominal (digits used as labels); (f) numerical, continuous.
    2. Postal codes are labels for places. Adding them or averaging them does not describe anything: the "average"
       code may not exist, and nearby codes need not be nearby places.
    3. 150 is impossible for a school survey (perhaps 15 typed with an extra 0, but we cannot be sure): set to
       missing, or check the paper form if there is one. −1 is probably a "missing" code: set to missing. Note both in
       the log. Then 7 valid ages remain: 14, 15, 15, 16, 14, 16, 15.
    4. The total of real marks is $18 \times 72 = 1296$. The spreadsheet divides by 20: $1296 \div 20 = 64.8$. The
       correct mean of the known marks is 72.
    5. (a) "Changed 'toronto' and 'TO' to 'Toronto' (n rows) so that all three spellings count as one city." (b)
       "'03/04/2025' is ambiguous (3 April or 4 March). Checked the source: [result]. If the source cannot be checked,
       set to missing." Never guess silently.
    6. Cases: sols (Martian days), one row each. Variables, for example: sol number (identifier); minimum air
       temperature (°C, numerical continuous); maximum air temperature (°C, numerical continuous); air pressure
       (pascals, numerical continuous); sky condition such as clear or dusty (categorical nominal); dust level
       (low, medium, high: categorical ordinal).
    7. The total rises by $45\,000\,000 - 45\,000 = 44\,955\,000$, so the mean rises by
       $44\,955\,000 \div 500 = 89\,910$ dollars, a huge change. The median does not change, since the order of the middle values is the
       same. Sorting the column would show the 45 000 000 at the top.

## Common mistake

**Letting a missing-value code become data.** A 0 or −99 meaning "no answer" will be averaged like any number. Find
out how missing values are coded before the first calculation, and set them to true blanks.

**Cleaning without a record.** If you delete rows or change values without writing it down, nobody, including you a
month later, can check or repeat the analysis. The cleaning log is part of the results.

## Where it leads

- Back: [Non-linear models](06-non-linear-models.md) · Next: [Level 8: reading data honestly](../level-8/index.md)
- [Level 7 page](index.md) · [Statistics topic page](../index.md)
- Spreadsheets for data, the first steps: [Level 4](../level-4/index.md).
- The whole cycle of question, data, analysis and conclusion: [A full investigation](../level-8/07-full-investigation.md).
- Storing and processing tables of data with a program:
  [CSC108 (introduction to computer programming)](../../../uoft/CSC108H1/index.md).
