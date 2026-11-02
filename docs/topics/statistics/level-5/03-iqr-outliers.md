---
title: "Interquartile range and outliers"
---

# Interquartile range and outliers

*Statistics and data · level 5, lesson 3 of 6*

## A question to start

Thirteen students wrote down how many minutes it takes them to get to school:

5, 7, 8, 10, 10, 12, 12, 15, 15, 18, 20, 25, 48

One student takes 48 minutes. Is that value **strange**, or just a long trip? Where exactly is the line between
"a bit far from the others" and "something unusual is going on here"? Ask ten people and you may get ten answers. In
this lesson you meet a rule that gives everyone the **same** answer, and you see why the rule is built the way it is.

## The idea

### The range is fragile

The **range** is the largest value minus the smallest. For the travel times it is $48 - 5 = 43$ minutes. But look:
twelve of the thirteen students take between 5 and 25 minutes. Without the 48, the range would be only 20. One single
student more than doubled it.

That is the weakness of the range: it is built from the two most extreme values and nothing else. Whatever happens at
the very ends decides it. We want a measure of spread that describes the **bulk** of the data and does not jump when
one value is strange.

### The interquartile range

The **interquartile range**, or **IQR**, is the width of the box in a box plot:

$$\text{IQR} = Q_3 - Q_1$$

It measures the spread of the **middle half** of the data. "Inter" means "between": it is the range between the
quartiles.

For the travel times, the five-number summary is 5, 9, 12, 19, 48 (13 values, median the 7th value, 12; lower half
5, 7, 8, 10, 10, 12 gives $Q_1 = 9$; upper half 15, 15, 18, 20, 25, 48 gives $Q_3 = 19$). So

$$\text{IQR} = 19 - 9 = 10 \text{ minutes}.$$

### Why the IQR is hard to push around

Suppose the last student's time had been 28 minutes, or 48, or 480. The quartile $Q_3$ is the middle of the upper
half, and the largest value is only one of the six values in that half. It does not matter how large the largest value
is: the sorted order stays the same, so the middle of the upper half stays the same. The IQR stays 10.

A measure that one extreme value cannot drag far is called **resistant**. The median and the IQR are resistant. The
mean and the range are not. That is why the median and the IQR are such a good pair for data with strange values,
just as the median beat the mean in [level 4](../level-4/01-which-average.md).

### The 1.5 × IQR rule

Now the rule for outliers. An **outlier** is a value that lies far away from the rest of the data. The rule measures
"far" in units of the IQR, the typical spread of the middle:

1. Find $Q_1$, $Q_3$ and the IQR.
2. Work out $1.5 \times \text{IQR}$. Call this the **step**.
3. The **lower fence** is $Q_1 - 1.5 \times \text{IQR}$. The **upper fence** is $Q_3 + 1.5 \times \text{IQR}$.
4. A value is an outlier if it is **below the lower fence** or **above the upper fence**.

For the travel times: the step is $1.5 \times 10 = 15$. The fences are $9 - 15 = -6$ and $19 + 15 = 34$. Nothing is
below $-6$ (no trip takes negative time!), but 48 is above 34. So **48 is an outlier**, and it is the only one.

Why measure from the **quartiles** and not from the median? Because the box already holds the ordinary middle half.
The rule asks: how far beyond that ordinary middle does a value sit? Why measure in IQRs? Because then the rule
adjusts itself to the data. For tightly packed data the IQR is small and the fences are close; for widely spread data
the fences move out. A distance of 10 minutes is huge for data packed within 2 minutes and tiny for data spread over
hours.

### Why 1.5?

There is nothing magic about 1.5. Tukey, who invented the rule along with the box plot, chose it, and the story goes
that he said 1 was too small and 2 was too large. Here is a fact that shows it is a sensible choice: for data with the
common bell shape you will meet in [level 7](../level-7/index.md), only about 0.7% of the values (fewer than one in a
hundred) fall outside the fences. So in ordinary data the rule rarely cries "outlier", and when it does, it is worth
a look.

Since the rule is a convention, **always say which rule you used**. Some people use 3 × IQR for "extreme" outliers.

### The box plot with outliers

When there are outliers, a box plot changes in one way: **the whisker stops at the most extreme value that is not an
outlier**, and each outlier is drawn as a separate dot. Here are the travel times, with the fences shown dashed (the
fences are only for working; you do not usually draw them):

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 155" role="img" aria-label="Box plot of travel times on a scale from minus 10 to 50: whisker from 5 to 9, box from 9 to 19 with median 12, whisker to 25, and a separate dot at 48. Dashed fences at minus 6 and 34; 48 lies beyond the upper fence">
  <line x1="20" y1="130" x2="420" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="30" y1="130" x2="30" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="30" y="148" font-size="11" text-anchor="middle" fill="currentColor">-10</text>
  <line x1="93.3" y1="130" x2="93.3" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="93.3" y="148" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="156.7" y1="130" x2="156.7" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="156.7" y="148" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="220" y1="130" x2="220" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="220" y="148" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <line x1="283.3" y1="130" x2="283.3" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="283.3" y="148" font-size="11" text-anchor="middle" fill="currentColor">30</text>
  <line x1="346.7" y1="130" x2="346.7" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="346.7" y="148" font-size="11" text-anchor="middle" fill="currentColor">40</text>
  <line x1="410" y1="130" x2="410" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="410" y="148" font-size="11" text-anchor="middle" fill="currentColor">50</text>
  <line x1="125" y1="70" x2="150.3" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="125" y1="58.7" x2="125" y2="81.3" stroke="currentColor" stroke-width="2"/>
  <rect x="150.3" y="53" width="63.3" height="34" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <line x1="169.3" y1="53" x2="169.3" y2="87" stroke="#eea66f" stroke-width="4"/>
  <line x1="213.7" y1="70" x2="251.7" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="251.7" y1="58.7" x2="251.7" y2="81.3" stroke="currentColor" stroke-width="2"/>
  <circle cx="397.3" cy="70" r="5" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="55.3" y1="30" x2="55.3" y2="112" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="55.3" y="22" font-size="11" text-anchor="middle" fill="currentColor">lower fence −6</text>
  <line x1="308.7" y1="30" x2="308.7" y2="112" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="308.7" y="22" font-size="11" text-anchor="middle" fill="currentColor">upper fence 34</text>
</svg>
</div>

The right whisker now ends at 25, the largest ordinary value, and 48 stands alone. This is honest: it shows twelve
students forming one group and one student far away, which a whisker stretched all the way to 48 would hide.

### What to do with an outlier

Finding an outlier is the start of a question, not the end. Ask:

- **Is it a mistake?** A typo (a height of 1620 cm instead of 162 cm), a wrong unit, a broken instrument. If so,
  correct it if you can, or remove it and **say** that you did.
- **Is it real but different?** The student who takes 48 minutes may simply live far away. Real outliers belong in the
  data. Deleting them because they are inconvenient is not honest.
- **Does it change my conclusion?** Report results with and without it if it matters. With the 48, the mean travel
  time is $205 \div 13 \approx 15.8$ minutes; without it, $157 \div 12 \approx 13.1$ minutes. The median is 12 either
  way.

Sometimes the outlier is the most interesting value in the whole data set: the patient who recovered, the star that
flickered, the one test score that shows a student needs help.

## Worked examples

**1. A low outlier.** Ten quiz scores: 14, 61, 65, 70, 72, 75, 78, 80, 83, 85.

1. $n = 10$. Median $= (72 + 75) \div 2 = 73.5$.
2. Lower half 14, 61, 65, 70, 72: $Q_1 = 65$. Upper half 75, 78, 80, 83, 85: $Q_3 = 80$.
3. $\text{IQR} = 80 - 65 = 15$, step $= 1.5 \times 15 = 22.5$.
4. Fences: $65 - 22.5 = 42.5$ and $80 + 22.5 = 102.5$.
5. 14 is below 42.5: **14 is an outlier**. Nothing is above 102.5.
6. In the box plot, the left whisker stops at 61, the smallest value that is not an outlier, and 14 is a dot.

**2. The two classes again.** In the last lesson Class B's summary was 40, 70, 79, 86, 93.

$\text{IQR} = 86 - 70 = 16$, step $= 24$, fences $70 - 24 = 46$ and $86 + 24 = 110$. The score 40 is below 46, so it
**is** an outlier. The left whisker should stop at 55, the next score up. Class A (summary 52, 64, 72, 80, 95, also
IQR 16) has fences $64 - 24 = 40$ and $80 + 24 = 104$; nothing lies outside, so Class A has no outliers.

**3. Outliers at both ends.** Data: 1, 20, 22, 23, 25, 26, 28, 30, 60.

1. $n = 9$, median 25 (the 5th value). Lower half 1, 20, 22, 23: $Q_1 = 21$. Upper half 26, 28, 30, 60:
   $Q_3 = 29$.
2. $\text{IQR} = 8$, step $= 12$. Fences $21 - 12 = 9$ and $29 + 12 = 41$.
3. **Both 1 and 60 are outliers.** The whiskers stop at 20 and 30.

**4. Right on the fence.** If a fence is 34 and a value is exactly 34, it is **not** an outlier: the rule says
"beyond" the fence, that is, strictly below the lower one or strictly above the upper one.

## Try it

1. Find the IQR of 2, 4, 4, 5, 7, 8, 9, 12. Would a new value of 20 be an outlier? (Use the quartiles of the eight
   values you have.)
2. Find any outliers in 31, 33, 35, 36, 38, 40, 41, 43, 70.
3. A data set has $Q_1 = 50$ and $Q_3 = 62$. Find the fences. Which of these values are outliers: 30, 33, 75, 80?
4. Explain why changing the largest value of a data set from 70 to 700 does not change the IQR.
5. Every value in a data set is increased by 10. What happens to the IQR? To the fences?
6. A survey of family incomes in a town finds one family with an income 50 times the median. Should the researcher
   delete it? What should they do instead?
7. Make up a data set of 7 values with an IQR of 0. What does the 1.5 × IQR rule say about any value that differs
   from the others?

??? note "Answers"
    1. $n = 8$: halves 2, 4, 4, 5 and 7, 8, 9, 12. $Q_1 = (4 + 4) \div 2 = 4$ and $Q_3 = (8 + 9) \div 2 = 8.5$.
       $\text{IQR} = 4.5$. Upper fence: $8.5 + 1.5 \times 4.5 = 8.5 + 6.75 = 15.25$. Since $20 > 15.25$, **yes**.
    2. $n = 9$, median 38. Lower half 31, 33, 35, 36: $Q_1 = 34$. Upper half 40, 41, 43, 70: $Q_3 = 42$.
       $\text{IQR} = 8$, step 12, fences 22 and 54. **70 is an outlier**; nothing is below 22.
    3. $\text{IQR} = 12$, step 18. Fences: $50 - 18 = 32$ and $62 + 18 = 80$. **30** is an outlier (below 32).
       33 is not. 75 is not. **80 is exactly on the fence, so it is not** an outlier.
    4. The largest value stays the largest, so the sorted order does not change and the middle of the upper half,
       $Q_3$, stays put. $Q_1$ does not involve it at all. So the IQR is unchanged.
    5. $Q_1$ and $Q_3$ both go up by 10, so the IQR (their difference) does **not** change. The fences both go up by
       10. The same values are outliers as before.
    6. No, not just because it is large. They should check that it is not a mistake. If it is real, it belongs in the
       data; they should use resistant measures (median, IQR), and could report results with and without it.
    7. For example 5, 5, 5, 5, 5, 5, 9: $Q_1 = Q_3 = 5$, so $\text{IQR} = 0$ and both fences are 5. **Any** value that
       is not 5 is an outlier, so 9 is one. When nearly all values are equal, the rule flags everything else. This is
       a reminder that a rule is a tool to use with judgement.

## Common mistake

**Measuring the fences from the median.** The fences are $1.5 \times \text{IQR}$ beyond the **quartiles**:
$Q_1 - 1.5 \times \text{IQR}$ and $Q_3 + 1.5 \times \text{IQR}$. Measuring from the median puts the fences too close,
and ordinary values get called outliers.

**Drawing the whisker to the outlier.** Once a value is an outlier, the whisker stops at the most extreme value that
is **not** an outlier, and the outlier gets its own dot.

## Where it leads

- Back: [Box plots](02-box-plots.md) · Next: [Populations and samples](04-populations-samples.md)
- [Level 5 page](index.md) · [Statistics topic page](../index.md)
- The IQR is the resistant measure of spread. Its partner that uses every value, the **standard deviation**, comes in
  [level 6](../level-6/06-standard-deviation.md).
- Why outliers drag the mean: [which average is fair](../level-4/01-which-average.md).
