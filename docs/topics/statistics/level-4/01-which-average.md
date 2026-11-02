---
title: "Which average is fair?"
---

# Which average is fair?

*Statistics and data · level 4, lesson 1 of 6*

## A question to start

A small bakery has eight people on its payroll. Seven bakers and helpers earn 30, 32, 34, 35, 35, 36 and 38 thousand
dollars a year. The owner pays herself 300 thousand dollars a year.

A job advert says: **"Join us! The average pay here is 67.5 thousand dollars a year."**

That is true: it is the mean. But no worker earns anywhere near it. Every one of the seven earns 38 thousand or less.
Is the advert honest? It used real numbers and did the arithmetic correctly, and still it gives a false picture. In
this lesson you learn **why** that happens, and how to choose the average that tells the truth about your data.

## The idea

### A quick reminder

From level 3:

- the **mean** is the total shared out equally (add, then divide by how many);
- the **median** is the middle value once the data are in order;
- the **mode** is the most common value.

All three are called **measures of centre**: each tries to give one "typical" value. They answer different questions,
and they react differently to unusual values.

### Outliers drag the mean

An **outlier** is a value far away from the rest of the data. The owner's 300 is an outlier.

Work out the bakery's averages:

- Total: $30 + 32 + 34 + 35 + 35 + 36 + 38 + 300 = 540$. Mean: $540 \div 8 = 67.5$ thousand.
- In order: 30, 32, 34, **35, 35**, 36, 38, 300. Median: halfway between the 4th and 5th, $(35 + 35) \div 2 = 35$
  thousand.
- Mode: 35 thousand (twice).

Now take the owner out and look at only the seven workers. Their total is $540 - 300 = 240$, and $240 \div 7$ is about
34.3 thousand. The median of 30, 32, 34, **35**, 35, 36, 38 is 35 thousand.

| | Mean | Median |
| --- | --- | --- |
| Seven workers | about 34.3 | 35 |
| Seven workers and the owner | 67.5 | 35 |

One person nearly **doubled** the mean. The median did not move at all.

### Why the mean moves so much

Think of the mean as a fair share. The owner's 300 thousand goes into the same pot as everybody else's pay, and then
the pot is shared equally among 8 people. Her pay is 265 thousand more than a 35-thousand worker's, and sharing that
extra among 8 people adds $265 \div 8$, about 33 thousand, to **everyone's** share. One giant value raises the mean
for everyone on paper, though nobody's real pay changed.

Or think of the balance point (level 3, lesson 2): the mean is where the number line balances. Put a heavy value far
out at 300, and the balance point must slide a long way towards it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="Number line from 0 to 300. Seven dots bunched between 30 and 38, one dot at 300. The median 35 sits in the bunch; the mean 67.5 sits off to the right of the bunch, where there are no workers">
  <line x1="20" y1="60" x2="420" y2="60" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="20" y1="55" x2="20" y2="65"/><line x1="86.7" y1="55" x2="86.7" y2="65"/><line x1="153.3" y1="55" x2="153.3" y2="65"/>
    <line x1="220" y1="55" x2="220" y2="65"/><line x1="286.7" y1="55" x2="286.7" y2="65"/><line x1="353.3" y1="55" x2="353.3" y2="65"/>
    <line x1="420" y1="55" x2="420" y2="65"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="60" cy="50" r="4"/><circle cx="62.7" cy="42" r="4"/><circle cx="65.3" cy="34" r="4"/><circle cx="66.7" cy="26" r="4"/>
    <circle cx="66.7" cy="18" r="4"/><circle cx="68" cy="10" r="4"/><circle cx="70.7" cy="50" r="4"/>
  </g>
  <circle cx="420" cy="48" r="6" fill="#eea66f" stroke="currentColor"/>
  <polygon points="66.7,64 60.7,76 72.7,76" fill="#7ccf9a" stroke="currentColor"/>
  <polygon points="110,64 104,76 116,76" fill="#eea66f" stroke="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="20" y="96">0</text><text x="86.7" y="96">50</text><text x="153.3" y="96">100</text><text x="220" y="96">150</text>
    <text x="286.7" y="96">200</text><text x="353.3" y="96">250</text><text x="420" y="96">300</text>
    <text x="55" y="114">median 35</text><text x="140" y="114">mean 67.5</text>
    <text x="400" y="30">owner</text>
  </g>
</svg>
</div>

The median only asks "who is in the middle of the line?" The owner is at the end of the line whether she earns 40
thousand or 40 million, so the middle does not change. Statisticians say the median is **resistant** to outliers: it
resists being pulled.

### When the median is better

Use the median when the data have **outliers** or are **lopsided** (a long tail of large values on one side). Pay,
house prices and the prices of things in general are classic examples: a few very large values pull the mean up, and
the median is closer to what a typical person sees. This is why news reports about pay or house prices usually give
the **median**.

### When the mean is better

The mean is not a bad average. It uses **every** value, which is a strength when there are no wild values, and it has a
special power: **mean × number of values = total**. So the mean is the right choice when the total matters:

- Sharing a restaurant bill or the cost of a trip: each person's fair share is the mean.
- Planning supplies: if a class of 25 eats a mean of 2 apples a week each, you need $25 \times 2 = 50$ apples, whatever
  the median is.
- Data that are roughly balanced around the middle, with no outliers, such as heights of children of the same age:
  the mean and median will be close, and the mean uses all the information.

### When the mode is the only one that makes sense

Sometimes the mean and the median are useless.

- **Category data.** Favourite colours, types of pet, the brand of a phone. There is no "mean colour" and no
  "middle colour", since colours have no order. Only the mode works: "blue was the most common choice".
- **Choosing what to stock.** A shoe shop orders shoes in sizes. The mean shoe size of its customers might be 7.36, a
  size nobody can buy. The median might be 7.5, but the shop wants to know which size **sells most**, so it needs the
  mode. Shoe sizes are numbers, yet the useful question is "which is most common?".

### A decision guide

| Your data or question | Use |
| --- | --- |
| Categories (colours, pets, brands) | Mode |
| "Which is most popular / sells most?" | Mode |
| Numbers with outliers or a long tail (pay, prices) | Median |
| "What does the person in the middle have?" | Median |
| Numbers with no outliers, roughly balanced | Mean (and the median will be close) |
| "What is each person's fair share?" or the total matters | Mean |

The most honest habit of all: **say which average you used**, and when the mean and median are far apart, give both.
The gap between them is itself a clue that something lopsided is going on. In the bakery, "the mean pay is 67.5
thousand but the median is 35 thousand" tells the whole story in one sentence.

## Worked examples

**1. House prices.** Five houses on a street sold for 400, 420, 450, 480 and 2000 thousand dollars (the last one is a
mansion).

1. Mean: total $400 + 420 + 450 + 480 + 2000 = 3750$, and $3750 \div 5 = 750$ thousand.
2. Median: 400, 420, **450**, 480, 2000, so 450 thousand.
3. Four of the five houses cost under 500 thousand, but the mean is 750 thousand. The median (450 thousand) describes a
   typical house on this street; the mean is dragged up by the mansion.

**2. Test scores with no outlier.** Scores: 68, 72, 75, 75, 79, 81.

1. Mean: total 450, and $450 \div 6 = 75$.
2. Median: $(75 + 75) \div 2 = 75$.
3. Mode: 75.

All three agree. With balanced data and no outliers, any of them is fair, and the mean is a good choice because it uses
all six scores.

**3. A low outlier.** Seven children's times to run a lap, in seconds: 62, 64, 65, 66, 68, 70 and 140 (one child
stopped to tie a shoelace).

1. Mean: total $62 + 64 + 65 + 66 + 68 + 70 + 140 = 535$, and $535 \div 7$ is about 76.4 seconds.
2. Median: 62, 64, 65, **66**, 68, 70, 140, so 66 seconds.

Here the outlier is a **slow** time, and it drags the mean towards it (up, because slow means a big number). Six of the
seven children ran faster than the mean. The median, 66 seconds, is the fair "typical time". Before choosing, also ask:
does the outlier belong in the data at all? A time that includes tying a shoelace is not really a running time, and a
careful report might leave it out and **say so**.

**4. Shoe sizes.** A shop sold these sizes on Saturday: 6, 7, 7, 7.5, 8, 8, 8, 8, 9, 10.

1. Mean: total 78.5, and $78.5 \div 10 = 7.85$. Not a size.
2. Median: halfway between the 5th and 6th values, $(8 + 8) \div 2 = 8$.
3. Mode: 8 (four times).

To decide what to reorder, the shop uses the mode: size 8 sold most.

## Try it

1. Find the mean and median of 2, 3, 3, 4, 38. Which is the fairer "typical value", and why?
2. A cafe's daily customers for a week: 120, 115, 130, 125, 118, 122, 400 (a festival day). Find the mean and the
   median. Which would you tell someone thinking of opening a cafe nearby?
3. Which average would you use for: (a) the most common eye colour in a class; (b) the typical price of a house in a
   city; (c) how much each of 6 friends pays towards a 90-dollar gift?
4. The mean of five numbers is 10 and the median is 6. Make up five numbers that fit. What does the gap between mean
   and median suggest?
5. Explain why adding one very large value changes the mean a lot but the median only a little.
6. A list of 9 values has median 20. The largest value, 25, is changed to 2500. What is the new median?
7. In a class, the mean number of hours of TV per week is 12 but the median is 8. Which of these is likely: (a) a few
   students watch a lot of TV; (b) a few students watch almost none? Explain.
8. Can the mode be a fair "typical value" when it is very far from the mean and the median? Give an example.

??? note "Answers"
    1. Mean $50 \div 5 = 10$; median 3. The median: four of the five values are 4 or less, and the 38 is an outlier
       that pulls the mean up to 10, which is bigger than all the other values.
    2. Total $120 + 115 + 130 + 125 + 118 + 122 + 400 = 1130$, mean $1130 \div 7$, about 161.4. In order: 115, 118,
       120, **122**, 125, 130, 400, median 122. The median: the festival day is not typical. (Better still, mention
       the festival day separately.)
    3. (a) Mode (category data). (b) Median (prices have a long tail of expensive houses). (c) Mean:
       $90 \div 6 = 15$ dollars each, the fair share.
    4. The total must be $10 \times 5 = 50$ and the middle value 6. One answer: 1, 2, 6, 7, 34 (total 50). The mean
       is well above the median, which suggests one or more large values pulling the mean up.
    5. The mean shares the total: one huge value adds a lot to the total, and that extra is shared among everyone. The
       median depends only on which value is in the middle position; adding one value at the top moves the middle by
       only half a place.
    6. Still 20. The middle (5th) value has not changed; only the largest one has.
    7. (a). The mean is above the median, so some large values are pulling it up: a few students who watch a lot.
    8. Yes, sometimes. In a survey of shoe sizes 5, 5, 5, 5, 9, 10, 10 the mode is 5, mean is $49 \div 7 = 7$ and
       median 5. For a question like "which size sells most?", the mode is exactly the right answer however far it is
       from the mean.

## Common mistake

**Thinking "average" always means the mean, and the mean is always right.** The bakery advert was arithmetically
correct and still misleading. Ask which question you are answering, check for outliers, and say which average you used.

**Deleting outliers just because they are inconvenient.** An outlier may be a mistake (a typing slip, a shoelace),
and then it can be removed, saying so. But an outlier may also be real and important: the owner really does earn 300
thousand. Report it; do not hide it.

## Where it leads

- Next: [Histograms](02-histograms.md), which show at a glance whether data are balanced or lopsided.
- [Level 4 page](index.md) · [Statistics topic page](../index.md)
- The averages themselves: [level 3](../level-3/index.md), especially [The mean](../level-3/02-the-mean.md) and
  [The median and the mode](../level-3/03-median-and-mode.md).
- A rule for exactly when a value counts as an outlier (the 1.5 × IQR rule) comes in [level 5](../level-5/index.md);
  lopsided ("skewed") shapes and where the mean and median sit in them come in level 7.
- Averages of chances and payouts: [Probability](../../probability/index.md).
