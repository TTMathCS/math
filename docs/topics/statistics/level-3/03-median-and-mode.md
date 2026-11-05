---
title: "The median and the mode"
---

# The median and the mode

*Statistics and data · level 3, lesson 3 of 6*

## A question to start

Three friends compare how many stickers they have: 1, 2 and 9. The mean is $(1 + 2 + 9) \div 3 = 12 \div 3 = 4$.
But **two** of the three friends have fewer than 4, and only one has more. Does "4 stickers" really describe a typical
friend here?

There is another way to find "the typical one", and it does not care how big the biggest number is. Line everyone up
in order and look at the person in the **middle**. In this lesson you meet that average, the **median**, and a third
one, the **mode**, which is the only average that works even when the data are not numbers at all.

## The idea

### The median: the middle value in order

The **median** is the value in the middle when the data are put **in order** from smallest to largest. "Median" comes
from an old word for "middle"; the strip of grass in the middle of a highway is also called a median.

To find it:

1. Put the values in order, smallest to largest. Keep repeats: if 4 appears three times, write it three times.
2. Cross off one value from each end, then the next one from each end, and keep going.
3. What is left in the middle is the median.

Nine children told us how many books they read this month: 4, 7, 2, 9, 4, 5, 12, 3, 4. In order they are:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="Top row: nine cards 2, 3, 4, 4, 4, 5, 7, 9, 12 with the fifth card, 4, highlighted as the median. Bottom row: ten cards 2, 3, 4, 4, 4, 5, 6, 7, 9, 12 with the fifth and sixth cards, 4 and 5, highlighted; the median is 4.5">
  <rect x="20" y="20" width="36" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="38" y="46" font-size="16" text-anchor="middle" fill="currentColor">2</text>
  <rect x="64" y="20" width="36" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="82" y="46" font-size="16" text-anchor="middle" fill="currentColor">3</text>
  <rect x="108" y="20" width="36" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="126" y="46" font-size="16" text-anchor="middle" fill="currentColor">4</text>
  <rect x="152" y="20" width="36" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="170" y="46" font-size="16" text-anchor="middle" fill="currentColor">4</text>
  <rect x="196" y="20" width="36" height="40" rx="4" fill="#eea66f" stroke="currentColor"/><text x="214" y="46" font-size="16" text-anchor="middle" fill="currentColor">4</text>
  <rect x="240" y="20" width="36" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="258" y="46" font-size="16" text-anchor="middle" fill="currentColor">5</text>
  <rect x="284" y="20" width="36" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="302" y="46" font-size="16" text-anchor="middle" fill="currentColor">7</text>
  <rect x="328" y="20" width="36" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="346" y="46" font-size="16" text-anchor="middle" fill="currentColor">9</text>
  <rect x="372" y="20" width="36" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="390" y="46" font-size="16" text-anchor="middle" fill="currentColor">12</text>
  <text x="214" y="78" font-size="12" text-anchor="middle" fill="currentColor">4 cards each side: median 4</text>
  <rect x="20" y="110" width="34" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="37" y="136" font-size="16" text-anchor="middle" fill="currentColor">2</text>
  <rect x="60" y="110" width="34" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="77" y="136" font-size="16" text-anchor="middle" fill="currentColor">3</text>
  <rect x="100" y="110" width="34" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="117" y="136" font-size="16" text-anchor="middle" fill="currentColor">4</text>
  <rect x="140" y="110" width="34" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="157" y="136" font-size="16" text-anchor="middle" fill="currentColor">4</text>
  <rect x="180" y="110" width="34" height="40" rx="4" fill="#eea66f" stroke="currentColor"/><text x="197" y="136" font-size="16" text-anchor="middle" fill="currentColor">4</text>
  <rect x="220" y="110" width="34" height="40" rx="4" fill="#eea66f" stroke="currentColor"/><text x="237" y="136" font-size="16" text-anchor="middle" fill="currentColor">5</text>
  <rect x="260" y="110" width="34" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="277" y="136" font-size="16" text-anchor="middle" fill="currentColor">6</text>
  <rect x="300" y="110" width="34" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="317" y="136" font-size="16" text-anchor="middle" fill="currentColor">7</text>
  <rect x="340" y="110" width="34" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="357" y="136" font-size="16" text-anchor="middle" fill="currentColor">9</text>
  <rect x="380" y="110" width="34" height="40" rx="4" fill="#9cc9ea" stroke="currentColor"/><text x="397" y="136" font-size="16" text-anchor="middle" fill="currentColor">12</text>
  <text x="217" y="168" font-size="12" text-anchor="middle" fill="currentColor">two in the middle: halfway between 4 and 5 is 4.5</text>
</svg>
</div>

In the top row there are 9 cards. Crossing off from both ends four times leaves the 5th card, a **4**. So the median
is 4 books: four children read 4 or fewer, and four read 4 or more.

### Why the middle is a good "typical" value

The median splits the data into two halves: **half the values are at or below it, and half are at or above it**. It
is the value of the child in the middle of the line, the one who is "not especially high and not especially low".

The median also does not care how far away the end values are. In the sticker question, 1, 2, 9 has median 2. If
the third friend had 900 stickers instead of 9, the median would **still** be 2, because the middle friend has not
changed. The mean would jump to $(1 + 2 + 900) \div 3 = 301$. That is why the median is often a fairer "typical" value
when one value is very different from the rest. (Level 4 looks at this choice closely.)

### An even number of values

Now suppose a tenth child reads 6 books. In order: 2, 3, 4, 4, 4, 5, 6, 7, 9, 12 (the bottom row of the picture).
Cross off from both ends, and you are left with **two** middle cards, 4 and 5, with nothing between them.

The rule: when there are two middle values, the median is **halfway between them**. Halfway between 4 and 5 is 4.5.
To find "halfway", add the two and divide by 2: $(4 + 5) \div 2 = 9 \div 2 = 4.5$. (That is the mean of the two
middle values.) So the median is **4.5 books**, even though nobody read 4.5 books.

If the two middle values are the same, for example 4 and 4, the median is simply 4.

### Where is the middle? A counting shortcut

For a long list, crossing off is slow. Here is a shortcut. With 9 values in order, the middle one has 4 values on
each side, so it is the 5th. With 15 values, it has 7 on each side, so it is the 8th. In general: **add 1 to the number
of values and halve it**. For 9 values: $(9 + 1) \div 2 = 5$, the 5th. For 10 values: $(10 + 1) \div 2 = 5.5$,
which means "halfway between the 5th and the 6th". This tells you **which position** the median is in; it is not the
median itself.

### The mode: the most common value

The **mode** is the value that appears **most often**. ("Mode" is a French word for "fashion": the mode is the value
that is most in fashion.) In the books data 2, 3, 4, 4, 4, 5, 7, 9, 12, the 4 appears three times and every other
value only once, so the mode is **4**.

The mode has some surprises:

- **Two modes.** In 3, 5, 5, 6, 8, 8, 9, both 5 and 8 appear twice. Both are modes. Data with two modes are called
  **bimodal** ("bi" means two, as in bicycle).
- **No mode.** In 2, 4, 7, 9, every value appears once. No value is more common than another, so there is **no mode**.
  (Do not say "the mode is 0": 0 is a value, and it is not in the list.)
- **Category data.** The mode is the only one of the three averages that works for words. If 8 children choose
  apples, 5 bananas and 3 grapes, the mode is "apples". There is no mean fruit and no middle fruit.

A tally chart or a line plot (level 2) shows the mode at a glance: it is the tallest pile.

### Three averages, three questions

| Average | How to find it | The question it answers |
| --- | --- | --- |
| Mean | Add, then divide by how many | "If we shared fairly, how much each?" |
| Median | Order, take the middle | "What is the middle one?" |
| Mode | Find the most common | "What is the most popular?" |

They often come out close together, and sometimes very different. Each is honest in its own way; the skill is
saying **which** one you used.

<figure class="play" data-play="stats" data-show="centre"><span class="ai-tag">AI-created</span><figcaption><b>Median and mode.</b> Add one very big value: the mean moves, the median hardly does.</figcaption></figure>

## Worked examples

**1. Median and mode of an odd list.** Heights of seven seedlings, in cm: 6, 9, 5, 9, 7, 11, 8.

1. In order: 5, 6, 7, **8**, 9, 9, 11.
2. Seven values, so the median is in position $(7 + 1) \div 2 = 4$. The 4th value is **8 cm**.
3. 9 appears twice, everything else once: the mode is **9 cm**.

**2. Median of an even list.** Minutes six children spent on homework: 30, 15, 45, 20, 35, 60.

1. In order: 15, 20, **30, 35**, 45, 60.
2. Six values: position $(6 + 1) \div 2 = 3.5$, halfway between the 3rd and 4th.
3. The 3rd is 30 and the 4th is 35. Median: $(30 + 35) \div 2 = 65 \div 2 = 32.5$ minutes.
4. Every value appears once: **no mode**.

**3. More than one mode.** Goals scored by a team in eight games: 2, 0, 3, 1, 2, 4, 1, 3. Make a tally: 0 once, 1
twice, 2 twice, 3 twice, 4 once. Three values tie for "most often", so this list has **three modes**: 1, 2 and 3. That
is allowed, but with so many modes the mode tells us little. Median: in order 0, 1, 1, **2, 2**, 3, 3, 4; the 4th and
5th are both 2, so the median is **2**.

**4. Mean, median and mode side by side.** Pocket money of five friends, in dollars: 4, 5, 5, 6, 30.

- Mean: $(4 + 5 + 5 + 6 + 30) \div 5 = 50 \div 5 = 10$ dollars.
- Median: 4, 5, **5**, 6, 30, so 5 dollars.
- Mode: 5 dollars.

Four of the five friends get 6 dollars or less, so the median and mode (5) describe a typical friend better than the
mean (10), which the one large value of 30 pulled up.

## Try it

1. Find the median of 8, 3, 6, 1, 9.
2. Find the median of 12, 7, 10, 5.
3. Find the mode of 4, 6, 6, 2, 9, 4, 6.
4. Find the median and the mode of 3, 3, 7, 7, 8, 10. Is the list bimodal?
5. Does 5, 1, 8, 2 have a mode? Explain.
6. Twenty children chose a favourite season: winter 3, spring 5, summer 9, autumn 3. Which average can you find, and
   what is it?
7. Make up a list of five numbers with median 6 and mode 2.
8. The median of four different whole numbers is 10. The two middle numbers are not 10. Give an example.

??? note "Answers"
    1. In order 1, 3, **6**, 8, 9. Median 6.
    2. In order 5, **7, 10**, 12. Median $(7 + 10) \div 2 = 17 \div 2 = 8.5$.
    3. 6 appears three times, more than any other. Mode 6.
    4. Six values, so halfway between the 3rd and 4th: both are 7, so the median is 7. Modes: 3 and 7 each appear twice,
       so the list is bimodal, with modes 3 and 7.
    5. No. Every value appears exactly once, so no value is more common than another.
    6. Only the mode, because seasons are categories. The mode is summer (9 children).
    7. One answer: 2, 2, 6, 7, 9. In order, the middle (3rd) value is 6, and 2 is the only value that appears twice.
    8. One answer: 1, 9, 11, 20. The middle two are 9 and 11, and $(9 + 11) \div 2 = 10$.

## Common mistake

**Not putting the values in order first.** In the list 9, 1, 3 the number in the middle as written is 1, but the
median is 3 (in order: 1, 3, 9). Always sort before you look for the middle.

**Giving the position instead of the value.** For 10 values, "$(10 + 1) \div 2 = 5.5$" means "between the 5th and the
6th". The median is the number halfway between those two **values**, not 5.5.

## Where it leads

- Back: [The mean](02-the-mean.md) · Next: [The range](04-the-range.md)
- [Level 3 page](index.md) · [Statistics topic page](../index.md)
- The line plots of [level 2](../level-2/index.md) make the mode easy to spot.
- In [level 4](../level-4/index.md), lesson 1 asks which average is fairest; in [level 5](../level-5/index.md) the
  median's cousins, the quartiles, split data into four.
- Halfway between two numbers on the number line: see [Numbers](../../numbers/index.md).
