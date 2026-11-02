---
title: "Quartiles and the five-number summary"
---

# Quartiles and the five-number summary

*Statistics and data · level 5, lesson 1 of 6*

## A question to start

After a test, the teacher tells the class: "The median score was 68." You scored 74. So you know you did better than
at least half the class. But did you make it into the **top quarter**? Or were you only just above the middle?

The median cannot answer that. It tells you where the middle is and nothing about the rest. Two classes could both
have a median of 68, one with almost everybody between 65 and 72, the other with scores from 20 to 100. In this lesson
you learn to cut a list into **four** equal parts instead of two. Five numbers then describe the whole list surprisingly
well.

## The idea

### From halves to quarters

Remember the **median**: sort the data from smallest to largest and take the middle value. If there are two middle
values, take the number halfway between them. The median cuts the sorted list into a lower half and an upper half.

Now do the same trick again, **inside each half**.

- The **lower quartile**, written $Q_1$, is the median of the lower half.
- The **upper quartile**, written $Q_3$, is the median of the upper half.
- The median itself is sometimes written $Q_2$, because it is the second cut.

The word **quartile** comes from "quarter". The three cuts $Q_1$, $Q_2$, $Q_3$ split the sorted data into four groups
with (about) the same number of values in each.

### A method that always works

Here is the method this site uses. It is the one most school textbooks use, and many school calculators use it too.

1. **Sort** the data from smallest to largest. Count the values; call the count $n$.
2. Find the **median**.
3. Make the two **halves**. If $n$ is **odd**, the median is one of the values: leave it out of both halves. If $n$ is
   **even**, the median falls between two values, and the list splits cleanly into two halves.
4. $Q_1$ is the median of the lower half. $Q_3$ is the median of the upper half.

Here it is for these eleven reading times, in minutes per day:

12, 15, 18, 20, 22, 25, 27, 30, 34, 40, 55

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 115" role="img" aria-label="Eleven sorted values; the 6th value 25 is the median; the lower half 12 to 22 has middle 18, which is Q1; the upper half 27 to 55 has middle 34, which is Q3">
  <rect x="23" y="40" width="30" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="38" y="60" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <rect x="57" y="40" width="30" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="72" y="60" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <rect x="91" y="40" width="30" height="30" rx="4" fill="#7ccf9a" stroke="currentColor"/>
  <text x="106" y="60" font-size="13" text-anchor="middle" fill="currentColor">18</text>
  <rect x="125" y="40" width="30" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="140" y="60" font-size="13" text-anchor="middle" fill="currentColor">20</text>
  <rect x="159" y="40" width="30" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="174" y="60" font-size="13" text-anchor="middle" fill="currentColor">22</text>
  <rect x="193" y="40" width="30" height="30" rx="4" fill="#eea66f" stroke="currentColor"/>
  <text x="208" y="60" font-size="13" text-anchor="middle" fill="currentColor">25</text>
  <rect x="227" y="40" width="30" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="242" y="60" font-size="13" text-anchor="middle" fill="currentColor">27</text>
  <rect x="261" y="40" width="30" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="276" y="60" font-size="13" text-anchor="middle" fill="currentColor">30</text>
  <rect x="295" y="40" width="30" height="30" rx="4" fill="#7ccf9a" stroke="currentColor"/>
  <text x="310" y="60" font-size="13" text-anchor="middle" fill="currentColor">34</text>
  <rect x="329" y="40" width="30" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="344" y="60" font-size="13" text-anchor="middle" fill="currentColor">40</text>
  <rect x="363" y="40" width="30" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="378" y="60" font-size="13" text-anchor="middle" fill="currentColor">55</text>
  <line x1="23" y1="85" x2="189" y2="85" stroke="currentColor" stroke-width="1.5"/>
  <line x1="23" y1="85" x2="23" y2="79" stroke="currentColor" stroke-width="1.5"/>
  <line x1="189" y1="85" x2="189" y2="79" stroke="currentColor" stroke-width="1.5"/>
  <text x="106" y="101" font-size="12" text-anchor="middle" fill="currentColor">lower half: 12, 15, 18, 20, 22</text>
  <line x1="227" y1="85" x2="393" y2="85" stroke="currentColor" stroke-width="1.5"/>
  <line x1="227" y1="85" x2="227" y2="79" stroke="currentColor" stroke-width="1.5"/>
  <line x1="393" y1="85" x2="393" y2="79" stroke="currentColor" stroke-width="1.5"/>
  <text x="310" y="101" font-size="12" text-anchor="middle" fill="currentColor">upper half: 27, 30, 34, 40, 55</text>
  <text x="106" y="30" font-size="12" text-anchor="middle" fill="currentColor">Q1</text>
  <text x="208" y="30" font-size="12" text-anchor="middle" fill="currentColor">median</text>
  <text x="310" y="30" font-size="12" text-anchor="middle" fill="currentColor">Q3</text>
</svg>
</div>

There are 11 values, so the median is the 6th value, **25**. Leave it out. The lower half is the five values
12, 15, 18, 20, 22, whose middle is **18**. The upper half is 27, 30, 34, 40, 55, whose middle is **34**. So
$Q_1 = 18$, the median is 25 and $Q_3 = 34$.

### Why it works: what a quartile promises

Look at what each cut tells you.

- About a quarter of the values are at or below $Q_1$ (here 12, 15, 18).
- About half are at or below the median.
- About three quarters are at or below $Q_3$.

Why "about"? With 11 values you cannot make four groups of exactly equal size, because 11 is not a multiple of 4. And
when values repeat, several of them can sit right on a cut. The quartiles do the best job possible: in each of the
four groups the counts differ by at most one or two. With a few hundred values the "about" is hardly noticeable.

This is the real reason quartiles are useful. Your 74 is in the top quarter exactly when it is above $Q_3$, at least
roughly. So if the teacher had said "$Q_3$ was 79", you would know you were in the third quarter, not the top one.

### The five-number summary

Put together the smallest value, the three cuts and the largest value and you get the **five-number summary**:

$$\text{minimum},\ Q_1,\ \text{median},\ Q_3,\ \text{maximum}$$

For the reading times it is **12, 18, 25, 34, 55**. On a number line:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="Number line from 10 to 60 with the eleven values as dots and the five-number summary marked: minimum 12, Q1 18, median 25, Q3 34, maximum 55">
  <line x1="20" y1="80" x2="420" y2="80" stroke="currentColor" stroke-width="1"/>
  <line x1="30" y1="80" x2="30" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="30" y="98" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="68" y1="80" x2="68" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="68" y="98" font-size="11" text-anchor="middle" fill="currentColor">15</text>
  <line x1="106" y1="80" x2="106" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="98" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <line x1="144" y1="80" x2="144" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="144" y="98" font-size="11" text-anchor="middle" fill="currentColor">25</text>
  <line x1="182" y1="80" x2="182" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="98" font-size="11" text-anchor="middle" fill="currentColor">30</text>
  <line x1="220" y1="80" x2="220" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="220" y="98" font-size="11" text-anchor="middle" fill="currentColor">35</text>
  <line x1="258" y1="80" x2="258" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="258" y="98" font-size="11" text-anchor="middle" fill="currentColor">40</text>
  <line x1="296" y1="80" x2="296" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="98" font-size="11" text-anchor="middle" fill="currentColor">45</text>
  <line x1="334" y1="80" x2="334" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="334" y="98" font-size="11" text-anchor="middle" fill="currentColor">50</text>
  <line x1="372" y1="80" x2="372" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="372" y="98" font-size="11" text-anchor="middle" fill="currentColor">55</text>
  <line x1="410" y1="80" x2="410" y2="85" stroke="currentColor" stroke-width="1"/>
  <text x="410" y="98" font-size="11" text-anchor="middle" fill="currentColor">60</text>
  <circle cx="45.2" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="45.2" y1="74" x2="45.2" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="45.2" y="38" font-size="12" text-anchor="middle" fill="currentColor">min 12</text>
  <circle cx="90.8" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="90.8" y1="74" x2="90.8" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="90.8" y="38" font-size="12" text-anchor="middle" fill="currentColor">Q1 18</text>
  <circle cx="144" cy="80" r="5" fill="#eea66f" stroke="currentColor"/>
  <line x1="144" y1="74" x2="144" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="144" y="38" font-size="12" text-anchor="middle" fill="currentColor">median 25</text>
  <circle cx="212.4" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="212.4" y1="74" x2="212.4" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="212.4" y="38" font-size="12" text-anchor="middle" fill="currentColor">Q3 34</text>
  <circle cx="372" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="372" y1="74" x2="372" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="372" y="38" font-size="12" text-anchor="middle" fill="currentColor">max 55</text>
  <circle cx="45.2" cy="62" r="3" fill="currentColor"/>
  <circle cx="68" cy="62" r="3" fill="currentColor"/>
  <circle cx="90.8" cy="62" r="3" fill="currentColor"/>
  <circle cx="106" cy="62" r="3" fill="currentColor"/>
  <circle cx="121.2" cy="62" r="3" fill="currentColor"/>
  <circle cx="144" cy="62" r="3" fill="currentColor"/>
  <circle cx="159.2" cy="62" r="3" fill="currentColor"/>
  <circle cx="182" cy="62" r="3" fill="currentColor"/>
  <circle cx="212.4" cy="62" r="3" fill="currentColor"/>
  <circle cx="258" cy="62" r="3" fill="currentColor"/>
  <circle cx="372" cy="62" r="3" fill="currentColor"/>
</svg>
</div>

Five numbers, and you can already see a lot. The middle half of the readers spend between 18 and 34 minutes. The
bottom quarter is squeezed into a small stretch (12 to 18, only 6 minutes wide), while the top quarter is spread
across 34 to 55, which is 21 minutes wide. So the data are bunched up at the low end and stretched out at the high end.
The mean, $298 \div 11 \approx 27.1$, could never show you that.

In the next lesson the five-number summary becomes a picture called a **box plot**.

### Even counts

When $n$ is even, nothing is left out. With 10 values, the halves are the first 5 and the last 5. With 12 values, the
halves have 6 each, and each quartile is halfway between two values, exactly as the median of an even list is.

A quick way to find positions: in a sorted list of $n$ values, the median is at position $\frac{n+1}{2}$. Position
6.5 means "halfway between the 6th and 7th". The same rule works for each half.

### Different software, slightly different answers

Here is something surprising and true: there is **no single agreed definition** of a quartile. Statisticians have
written down at least nine slightly different rules, and different calculators and spreadsheets use different ones.

For example, some books **include** the median in both halves when $n$ is odd. For the reading times that gives a
lower half of 12, 15, 18, 20, 22, 25, with middle $(18 + 20) \div 2 = 19$, and an upper half 25, 27, 30, 34, 40, 55,
with middle $(30 + 34) \div 2 = 32$. A spreadsheet's `QUARTILE` function (in most spreadsheet programs) uses yet
another rule, based on positions between values, and for this list it also happens to give 19 and 32.

Does that mean somebody is wrong? No. All the rules agree on what a quartile is **for**: a cut with about a quarter
of the data below it. They differ only in how they handle the small gaps between values, and the differences shrink
as the data get bigger. The honest habit is: pick one method, use it for everything you compare, and if your answer
differs a little from someone else's, check whether you used the same method.

## Worked examples

**1. An odd count.** The heights, in centimetres, of seven sunflower seedlings are 3, 8, 9, 11, 14, 16, 20. Find the
five-number summary.

1. Sorted already, and $n = 7$. The median is at position $\frac{7+1}{2} = 4$: the 4th value, **11**.
2. Leave 11 out. Lower half: 3, 8, 9, so $Q_1 = 8$. Upper half: 14, 16, 20, so $Q_3 = 16$.
3. Summary: **3, 8, 11, 16, 20**.

**2. An even count.** The number of push-ups ten friends can do: 3, 5, 6, 8, 9, 11, 12, 14, 17, 20.

1. $n = 10$, so the median is at position 5.5, halfway between the 5th and 6th values: $(9 + 11) \div 2 = 10$.
2. Lower half: 3, 5, 6, 8, 9. Its middle is **6**, so $Q_1 = 6$.
3. Upper half: 11, 12, 14, 17, 20. Its middle is **14**, so $Q_3 = 14$.
4. Summary: **3, 6, 10, 14, 20**. Notice that the median, 10, is not one of the data values. That is fine, just as a
   mean need not be one of the values.

**3. Unsorted, with every quartile between two values.** Twelve times, in seconds, to solve a puzzle:
58, 41, 53, 64, 47, 60, 50, 70, 45, 55, 61, 52.

1. Sort: 41, 45, 47, 50, 52, 53, 55, 58, 60, 61, 64, 70. $n = 12$.
2. Median: halfway between the 6th and 7th values, $(53 + 55) \div 2 = 54$.
3. Lower half (6 values): 41, 45, 47, 50, 52, 53. Its middle is halfway between the 3rd and 4th:
   $(47 + 50) \div 2 = 48.5$.
4. Upper half: 55, 58, 60, 61, 64, 70. Halfway between 60 and 61: $60.5$.
5. Summary: **41, 48.5, 54, 60.5, 70**.

Check by counting: 3 values are below 48.5, 3 are between 48.5 and 54, 3 between 54 and 60.5, and 3 above 60.5.
Exactly a quarter in each part, because 12 is a multiple of 4.

**4. Reading a summary.** The five-number summary of the heights of 28 students is 138, 146, 151, 157, 169 cm. About
how many students are between 146 cm and 157 cm? Between $Q_1$ and $Q_3$ lies the middle half of the data, so about
$28 \div 2 = 14$ students. About how many are taller than 157 cm? About a quarter: 7 students.

## Try it

1. Find the five-number summary of 3, 8, 9, 11, 14, 16, 20, 25. (Careful: there are now 8 values.)
2. Find the five-number summary of 21, 25, 26, 30, 31, 33, 35, 38, 40, 46.
3. Sort and then find the five-number summary of 14, 7, 22, 9, 18, 11, 25, 16, 10.
4. Find $Q_1$, the median and $Q_3$ of 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 12, 15.
5. The five-number summary of 40 runners' times (in minutes) is 18, 24, 27, 33, 51. About how many runners took more
   than 24 minutes? Which quarter of the runners is spread over the widest stretch of time?
6. For the list 1, 2, 3, 4, 5, 6, 7, our method gives $Q_1 = 2$. A spreadsheet gives $Q_1 = 2.5$. Did somebody make
   a mistake?
7. Make up a list of 8 whole numbers whose five-number summary is exactly 10, 20, 30, 40, 50.

??? note "Answers"
    1. Sorted, $n = 8$. Median: halfway between 11 and 14, so 12.5. Lower half 3, 8, 9, 11:
       $Q_1 = (8 + 9) \div 2 = 8.5$. Upper half 14, 16, 20, 25: $Q_3 = (16 + 20) \div 2 = 18$. Summary: **3, 8.5, 12.5, 18, 25**.
    2. $n = 10$. Median $= (31 + 33) \div 2 = 32$. Lower half 21, 25, 26, 30, 31: $Q_1 = 26$. Upper half 33, 35, 38,
       40, 46: $Q_3 = 38$. Summary: **21, 26, 32, 38, 46**.
    3. Sorted: 7, 9, 10, 11, 14, 16, 18, 22, 25 ($n = 9$). Median: 5th value, 14. Leave it out. Lower half 7, 9, 10,
       11: $Q_1 = (9 + 10) \div 2 = 9.5$. Upper half 16, 18, 22, 25: $Q_3 = (18 + 22) \div 2 = 20$. Summary:
       **7, 9.5, 14, 20, 25**.
    4. $n = 12$. Median: halfway between the 6th and 7th values, $(8 + 9) \div 2 = 8.5$. Lower half 5, 6, 6, 7, 8, 8:
       $Q_1 = (6 + 7) \div 2 = 6.5$. Upper half 9, 10, 11, 12, 12, 15: $Q_3 = (11 + 12) \div 2 = 11.5$.
    5. Above $Q_1 = 24$ are about three quarters of the runners: $\frac{3}{4} \times 40 = 30$. The four quarters
       cover $24 - 18 = 6$, $27 - 24 = 3$, $33 - 27 = 6$ and $51 - 33 = 18$ minutes, so the **slowest** quarter is the
       most spread out.
    6. No. Both follow a rule; they follow **different** rules. The spreadsheet's rule puts $Q_1$ at position
       $1 + \frac{1}{4} \times (7 - 1) = 2.5$, halfway between the 2nd and 3rd values. Both answers have about a
       quarter of the data below them.
    7. One answer: **10, 18, 22, 28, 32, 38, 42, 50**. Check: median $(28 + 32) \div 2 = 30$; lower half 10, 18, 22,
       28 gives $Q_1 = (18 + 22) \div 2 = 20$; upper half 32, 38, 42, 50 gives $Q_3 = (38 + 42) \div 2 = 40$. Many
       other lists work: you only need the 2nd and 3rd values to average 20, the 4th and 5th to average 30, and the
       6th and 7th to average 40.

## Common mistake

**Forgetting to sort.** Quartiles are positions in the **sorted** list. Taking the "middle of the first half" of an
unsorted list gives a number that means nothing. Always sort first, and count your values after sorting to make sure
none went missing.

**Using the wrong halves.** With an odd count, leave the median out of both halves (in this site's method). With an
even count, nothing is left out. Mixing these up moves $Q_1$ and $Q_3$ by a little, and then your answers will not
match a classmate's.

## Where it leads

- Back: [Level 4: choosing and showing](../level-4/index.md), where the median met its rivals, the mean and the mode.
- Next: [Box plots](02-box-plots.md), the picture of the five-number summary.
- [Level 5 page](index.md) · [Statistics topic page](../index.md)
- Quartiles are the 25th, 50th and 75th **percentiles**; percentiles return in [level 7](../level-7/index.md).
- Ordering numbers and finding the number halfway between two decimals are skills from
  [numbers](../../numbers/index.md).
