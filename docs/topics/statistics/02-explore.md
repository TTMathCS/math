---
title: "Explore: Averages"
---

# Explore: Averages, mean, median and mode

*Statistics and data · step 2 of 5*

## A question to start

Five friends compare their weekly pocket money. They get 4, 5, 5, 6 and 30 dollars. One of them says, "On average we
get 10 dollars a week!" That is true, in a way: 4 + 5 + 5 + 6 + 30 = 50, and 50 shared equally among 5 friends is 10
each. But four of the five friends get 6 dollars or less. Is 10 dollars a fair answer to "what does a typical friend
get"? This page gives you three different kinds of average and shows how to pick the honest one.

## The idea

An **average** is one number that stands for a whole list of numbers: a "typical" value. There are three common
averages. Each one answers the question "what is typical?" in its own way.

### The mean: share it out equally

To find the **mean**, add up all the values and divide by how many values there are.

$$\text{mean} = \frac{\text{sum of the values}}{\text{number of values}}$$

The mean is what each person would get if everything were put in one pile and shared out equally. Picture towers of
blocks of different heights. If you move blocks from the tall towers to the short ones until every tower is the
same height, that height is the mean.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 130" role="img" aria-label="Towers of 2, 6 and 4 blocks are levelled into three towers of 4 blocks each">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="0.5">
    <rect x="20" y="96" width="24" height="16"/><rect x="20" y="80" width="24" height="16"/>
    <rect x="56" y="96" width="24" height="16"/><rect x="56" y="80" width="24" height="16"/>
    <rect x="56" y="64" width="24" height="16"/><rect x="56" y="48" width="24" height="16"/>
    <rect x="56" y="32" width="24" height="16"/><rect x="56" y="16" width="24" height="16"/>
    <rect x="92" y="96" width="24" height="16"/><rect x="92" y="80" width="24" height="16"/>
    <rect x="92" y="64" width="24" height="16"/><rect x="92" y="48" width="24" height="16"/>
  </g>
  <text x="185" y="72" font-size="30" text-anchor="middle" fill="currentColor">→</text>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="0.5">
    <rect x="250" y="96" width="24" height="16"/><rect x="250" y="80" width="24" height="16"/>
    <rect x="250" y="64" width="24" height="16"/><rect x="250" y="48" width="24" height="16"/>
    <rect x="286" y="96" width="24" height="16"/><rect x="286" y="80" width="24" height="16"/>
    <rect x="286" y="64" width="24" height="16"/><rect x="286" y="48" width="24" height="16"/>
    <rect x="322" y="96" width="24" height="16"/><rect x="322" y="80" width="24" height="16"/>
    <rect x="322" y="64" width="24" height="16"/><rect x="322" y="48" width="24" height="16"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="32" y="126">2</text><text x="68" y="126">6</text><text x="104" y="126">4</text>
    <text x="262" y="126">4</text><text x="298" y="126">4</text><text x="334" y="126">4</text>
  </g>
</svg>
</div>

Towers of 2, 6 and 4 blocks hold 12 blocks. Shared among 3 towers, that is 4 each. So the mean of 2, 6 and 4 is 4.

### The median: the one in the middle

To find the **median**, put the values **in order** from smallest to largest and take the one in the middle.

- For 3, 9, 4, 7, 1: in order they are 1, 3, **4**, 7, 9. The median is 4.
- If there is an **even** number of values, there are two in the middle. The median is halfway between them. For
  3, 7, 8, 10 the middle two are 7 and 8, so the median is 7.5.

A quick way to find the middle of a long list: with $n$ values in order, the median is in position
$\dfrac{n+1}{2}$. For 7 values that is position 4. For 10 values it is position 5.5, meaning halfway between the
5th and the 6th.

### The mode: the most common

The **mode** is the value that appears **most often**. In 2, 3, 3, 5, 3, 8 the mode is 3. A list can have two modes
(it is then called *bimodal*), or no mode at all if every value appears once. The mode is the only average that also
works for answers that are not numbers, such as favourite colours or pets.

### The range: how spread out

An average tells you the middle, but not how far the values wander. The simplest measure of that is the **range**:

$$\text{range} = \text{largest value} - \text{smallest value}$$

A small range means the values are close together. A large range means they are scattered.

### Which average is fair?

Back to the pocket money: 4, 5, 5, 6, 30.

- Mean: $50 \div 5 = 10$.
- Median: in order, 4, 5, **5**, 6, 30, so the median is 5.
- Mode: 5 appears twice, so the mode is 5.
- Range: $30 - 4 = 26$.

The one big value, 30, pulled the mean up to 10, higher than what four of the five friends get. A value that is far
away from the others is called an **outlier**. The mean is sensitive to outliers; the median is not. If 30 became
3000, the median would still be 5. So when there is an outlier, the **median** usually gives the fairer picture of
"typical". When the values are close together with no outlier, the mean is a fine choice, and it uses every value.

## Worked example

**The data:** the highest temperature each day for one week, in degrees Celsius:

12, 15, 14, 9, 15, 17, 16

Find the mean, median, mode and range.

1. **Mean.** Add them up: $12 + 15 + 14 + 9 + 15 + 17 + 16 = 98$. There are 7 values, so the mean is
   $98 \div 7 = 14$ degrees.
2. **Median.** Put them in order: 9, 12, 14, **15**, 15, 16, 17. With 7 values the middle is position
   $\dfrac{7+1}{2} = 4$. The 4th value is 15, so the median is 15 degrees.
3. **Mode.** 15 appears twice and every other value once, so the mode is 15 degrees.
4. **Range.** $17 - 9 = 8$ degrees.

**What it tells us.** The mean (14) is a little below the median (15). That is because one cold day, 9 degrees,
pulled the mean down. Most days were around 15 degrees, and the temperature moved over a range of 8 degrees in the
week.

**A useful trick.** If you know the mean and how many values there are, you know the total:
$\text{total} = \text{mean} \times \text{number of values}$. For this week, $14 \times 7 = 98$, which matches. This
trick solves many "what score do I need?" puzzles, as in question 3 below.

## Try it

1. Find the mean, median, mode and range of 6, 2, 9, 2, 6, 6, 4.
2. Find the median of 11, 4, 8, 15.
3. Your mean score on four tests is 70. What do you need on the fifth test to raise your mean to 74?
4. A shoe shop wants to know which size to order most of. Should it use the mean, the median or the mode? Why?
5. The numbers 3, 5, 7 have mean 5. You add one more number, 5. What happens to the mean and to the median?
6. Make up a list of five whole numbers with mean 6 and median 4.

??? note "Answers"
    1. Sum $= 35$, so the mean is $35 \div 7 = 5$. In order: 2, 2, 4, **6**, 6, 6, 9, so the median is 6. The mode is 6
       (it appears three times). The range is $9 - 2 = 7$.
    2. In order: 4, 8, 11, 15. The middle two are 8 and 11, so the median is halfway between them, 9.5.
    3. For a mean of 74 over 5 tests you need a total of $74 \times 5 = 370$. You have $70 \times 4 = 280$ so far.
       You need $370 - 280 = 90$ on the fifth test.
    4. The mode. The shop wants the size that the most customers ask for. A mean shoe size such as 7.36 might not even
       be a size you can buy.
    5. Neither changes. The new list 3, 5, 5, 7 has sum 20 and mean $20 \div 4 = 5$; its median is halfway between 5
       and 5, which is 5. Adding a value equal to the mean never changes the mean.
    6. One answer: 1, 2, 4, 10, 13. In order, the middle value is 4, and the sum is 30, so the mean is
       $30 \div 5 = 6$. There are many other answers; you need the middle number to be 4 and the total to be 30.

## Common mistake

**Forgetting to put the values in order before finding the median.** The median of 3, 9, 4, 7, 1 is **not** 4
because 4 happens to be in the middle of the list as written; it is 4 because 4 is in the middle *after sorting*
(1, 3, 4, 7, 9). Try 9, 1, 3 to see the difference: the middle of the list as written is 1, but the median is 3.

## Where it leads

- Next step: [Build: spread, how far from the middle](03-build.md), where the range gets better partners: quartiles,
  box plots and the standard deviation.
- Back a step: [Play: counting, sorting and charts](01-play.md)
- Sharing out equally to find the mean is the same idea as dividing in [ratio and rates](../ratio/index.md).
