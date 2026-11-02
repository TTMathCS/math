---
title: "Stem-and-leaf plots"
---

# Stem-and-leaf plots

*Statistics and data · level 3, lesson 5 of 6*

## A question to start

Here are the scores of 15 children on a math test, out of 100, in the order the papers were handed in:

67, 81, 52, 73, 90, 64, 78, 86, 58, 75, 61, 95, 70, 84, 67

Quick: what is the median? What score did most children get, roughly? Were there any very low scores?

It is hard to tell from a jumble. You could draw a bar graph, but then you would lose the actual scores. There is a
neat trick, invented by statisticians for working with pencil and paper, that **sorts** the numbers, **keeps** every
one of them, and **draws a picture** of them, all at the same time. It is called a **stem-and-leaf plot**.

## The idea

### Splitting each number into a stem and a leaf

Take a two-digit number such as 73. Split it into two parts:

- the **stem**: the tens digit, 7;
- the **leaf**: the ones digit, 3.

Think of a plant: one stem can carry many leaves. All the scores in the seventies (70, 73, 75, 78) share the stem 7,
and each one adds its own leaf: 0, 3, 5, 8.

### Building the plot, step by step

1. **Find the smallest and largest values.** Here the smallest is 52 and the largest is 95, so the stems go from 5 to 9.
2. **Write the stems in a column**, smallest at the top, with a line to their right. Write **every** stem in between,
   even if no value uses it.
3. **Go through the data in order and write each leaf next to its stem.** 67 puts a 7 next to the stem 6; 81 puts a
   1 next to the 8; and so on. After all 15 scores:

```
5 | 2 8
6 | 7 4 1 7
7 | 3 8 5 0
8 | 1 6 4
9 | 0 5
```

4. **Put the leaves in each row in order**, smallest first. This is the **ordered** stem-and-leaf plot.
5. **Add a key** that tells the reader how to read one entry, such as "7 | 3 means 73". Without a key, "7 | 3" could
   mean 73, or 7.3, or 730.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 190" role="img" aria-label="Ordered stem-and-leaf plot. Stem 5: leaves 2, 8. Stem 6: 1, 4, 7, 7. Stem 7: 0, 3, 5, 8, with the 3 circled as the median. Stem 8: 1, 4, 6. Stem 9: 0, 5. Shaded strips behind each row show its length like a sideways bar graph. Key: 7 | 3 means 73">
  <rect x="88" y="20" width="56" height="24" fill="#9cc9ea" fill-opacity="0.45"/>
  <rect x="88" y="50" width="108" height="24" fill="#9cc9ea" fill-opacity="0.45"/>
  <rect x="88" y="80" width="108" height="24" fill="#9cc9ea" fill-opacity="0.45"/>
  <rect x="88" y="110" width="82" height="24" fill="#9cc9ea" fill-opacity="0.45"/>
  <rect x="88" y="140" width="56" height="24" fill="#9cc9ea" fill-opacity="0.45"/>
  <circle cx="129" cy="92" r="11" fill="#eea66f"/>
  <line x1="80" y1="16" x2="80" y2="168" stroke="currentColor" stroke-width="2"/>
  <g font-size="16" text-anchor="middle" fill="currentColor">
    <text x="62" y="37">5</text><text x="103" y="37">2</text><text x="129" y="37">8</text>
    <text x="62" y="67">6</text><text x="103" y="67">1</text><text x="129" y="67">4</text><text x="155" y="67">7</text><text x="181" y="67">7</text>
    <text x="62" y="97">7</text><text x="103" y="97">0</text><text x="129" y="97">3</text><text x="155" y="97">5</text><text x="181" y="97">8</text>
    <text x="62" y="127">8</text><text x="103" y="127">1</text><text x="129" y="127">4</text><text x="155" y="127">6</text>
    <text x="62" y="157">9</text><text x="103" y="157">0</text><text x="129" y="157">5</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="230" y="60">Key: 7 | 3 means 73</text>
    <text x="230" y="96">circled: the median, 73</text>
    <text x="230" y="132">(8th of 15 values)</text>
  </g>
  <text x="62" y="12" font-size="11" text-anchor="middle" fill="currentColor">stem</text>
  <text x="140" y="12" font-size="11" text-anchor="middle" fill="currentColor">leaves</text>
</svg>
</div>

### Why it works: a sorted list and a graph in one

The plot does two jobs at once.

**It is a sorted list.** Read it from the top left, row by row: 52, 58, 61, 64, 67, 67, 70, 73, 75, 78, 81, 84, 86,
90, 95. That is the data in order, which is exactly what you need for the median, and nothing was lost: every score
is still there.

**It is a graph.** If every leaf is written the same width, a row with more leaves is **longer**. Turn your head to
the left, and the rows become bars: the shaded strips in the picture are a bar graph of how many scores fell in the
fifties, the sixties, the seventies and so on. You can see at once that most scores are in the sixties and seventies,
and that the scores trail off towards 50 and towards 100. This is why the leaves must be written neatly in columns:
a crooked plot is a crooked graph.

### Reading the median, the mode and the range

- **Median.** There are 15 values, so the median is the $(15 + 1) \div 2 = 8$th. Count leaves from the top: row 5 has
  2 (that is 2 so far), row 6 has 4 (6 so far), so the 8th is the **2nd leaf** of row 7, which is a 3. The median is
  **73**.
- **Mode.** Look for a leaf repeated in the same row. The only repeat is 7, 7 in row 6, so the mode is **67**.
- **Range.** The first leaf of the top row is the smallest, 52. The last leaf of the bottom row is the largest, 95.
  Range: $95 - 52 = 43$.
- **Mean.** The plot cannot add for you, but you have all the numbers: the total is 1101, and $1101 \div 15 = 73.4$.

### Back-to-back plots: comparing two groups

To compare two groups, use **one** column of stems and put the leaves of one group on the **right** and of the other
on the **left**. On the left, the leaves are written **going outwards from the stem**: the smallest leaf is next to
the stem, so you read them right to left.

Another class of 15 took the same test. Here are both classes:

```
        Class B |   | Class A
              8 | 4 |
            9 5 | 5 | 2 8
      9 8 6 3 2 | 6 | 1 4 7 7
      7 4 2 2 1 | 7 | 0 3 5 8
            3 0 | 8 | 1 4 6
                | 9 | 0 5

Key: 5 | 6 | 1 means 65 for class B and 61 for class A
```

Class B's scores, in order, are 48, 55, 59, 62, 63, 66, 68, 69, 71, 72, 72, 74, 77, 80, 83. Its median (8th value) is
**69**, its range is $83 - 48 = 35$, and its mode is **72**.

Compare: Class A's median (73) is higher than class B's (69), and class A has the only scores in the nineties. But
class A also has a bigger range (43 against 35): class A's scores are a little more spread out. Class B's leaves bunch
in the sixties and seventies. The back-to-back plot lets you **see** both groups' shapes side by side.

### Other kinds of stems

- **Three-digit numbers.** For 102, 115, 98, use the stem for the hundreds and tens together: 10 | 2, 11 | 5, 9 | 8.
- **Decimals.** For lengths like 3.4 cm, 4.1 cm, 4.8 cm, the stem is the whole number and the leaf is the tenths:
  3 | 4, 4 | 1, 4 | 8. The key "3 | 4 means 3.4 cm" is essential here.

A leaf is always a **single digit**.

## Worked examples

**1. Building a plot.** Heights of 12 sunflowers, in cm: 34, 28, 45, 31, 39, 27, 42, 36, 30, 47, 33, 38.

1. Smallest 27, largest 47: stems 2, 3, 4.
2. Unordered leaves: 2 | 8 7; 3 | 4 1 9 6 0 3 8; 4 | 5 2 7.
3. Ordered:

```
2 | 7 8
3 | 0 1 3 4 6 8 9
4 | 2 5 7

Key: 3 | 4 means 34 cm
```

4. Count the leaves: $2 + 7 + 3 = 12$. ✓ Every height is there.

**2. Reading it.** Using the sunflower plot:

1. Median: 12 values, so halfway between the 6th and 7th. Count: row 2 gives 2, then row 3: the 3rd value is 30, 4th
   31, 5th 33, 6th 34, 7th 36. Median: $(34 + 36) \div 2 = 70 \div 2 = 35$ cm.
2. Range: $47 - 27 = 20$ cm.
3. Mode: no leaf repeats within a row, so there is **no mode**.
4. Shape: the row for the thirties is the longest; most sunflowers are in their thirties of centimetres.

**3. A back-to-back comparison.** Using the two-class plot above: what fraction of each class scored 70 or more?

1. Class A: rows 7, 8, 9 have $4 + 3 + 2 = 9$ leaves: 9 of 15.
2. Class B: rows 7, 8 have $5 + 2 = 7$ leaves: 7 of 15.

So class A had more high scores, which fits its higher median.

**4. Decimals.** A plot has the key "1 | 5 means 1.5 kg" and the row "2 | 0 4 4 9". The values are 2.0, 2.4, 2.4 and
2.9 kg.

## Try it

1. What number is shown by 6 | 8 if the key is "6 | 8 means 68"?
2. Make an ordered stem-and-leaf plot of: 25, 41, 33, 28, 36, 47, 30, 22, 39, 44, 31.
3. Use your plot from question 2 to find the median and the range.
4. How many values are in this plot, and what is the median? 1 | 2 5 / 2 | 0 3 3 8 / 3 | 1 4 (key 1 | 2 means 12).
5. What is the mode of the plot in question 4?
6. Why must you keep the stem 4 in the plot of 35, 38, 52, 56, even though no value is in the forties?
7. In the back-to-back test plot, how many children in class B scored below 60? In class A?
8. Make a stem-and-leaf plot of 2.3, 3.1, 2.8, 4.0, 3.6, 3.1 (in seconds) with a key.

??? note "Answers"
    1. 68.
    2. Stems 2, 3, 4. Ordered: 2 | 2 5 8; 3 | 0 1 3 6 9; 4 | 1 4 7 (key 3 | 6 means 36). That is $3 + 5 + 3 = 11$
       values.
    3. 11 values, so the median is the 6th: 22, 25, 28, 30, 31, **33**. Median 33. Range $47 - 22 = 25$.
    4. $2 + 4 + 2 = 8$ values: 12, 15, 20, 23, 23, 28, 31, 34. The 4th and 5th are 23 and 23, so the median is 23.
    5. 23 (it appears twice, every other value once).
    6. The plot is also a graph. Leaving out stem 4 would hide the gap between the thirties and the fifties, and the
       picture would be wrong.
    7. Class B: 48, 55, 59, that is **3** children. Class A: 52, 58, that is **2** children.
    8. Stems 2, 3, 4: 2 | 3 8; 3 | 1 1 6; 4 | 0. Key: 2 | 3 means 2.3 seconds.

## Common mistake

**Forgetting the key, or forgetting the empty stems.** Without a key nobody knows whether 4 | 5 is 45 or 4.5. And
skipping a stem with no leaves squashes the picture so that gaps vanish.

**Reading the left side of a back-to-back plot the wrong way.** On the left, the leaf next to the stem is the
smallest. In the row "9 5 | 5 |", class B's values are 55 and 59, not 95 and 59.

## Where it leads

- Back: [The range](04-the-range.md) · Next: [Double bar graphs and broken-line graphs](06-double-bar-line.md)
- [Level 3 page](index.md) · [Statistics topic page](../index.md)
- The stem and the leaf are just place value: tens and ones. See [Numbers](../../numbers/index.md).
- Grouping values into the fifties, sixties, seventies grows into histograms in [level 4](../level-4/index.md), and
  splitting sorted data into quarters into box plots in [level 5](../level-5/index.md).
