---
title: "The range"
---

# The range

*Statistics and data · level 3, lesson 4 of 6*

## A question to start

Two towns have the same mean temperature over a year: 15 degrees Celsius. Would you pack the same clothes for both?

Not if one of them is by the sea, where it is mild all year, and the other is in the middle of a big continent, with
baking summers and freezing winters. The **mean is the same**, but the towns are **not** alike at all. The mean tells
you where the middle is. It does not tell you how far the values wander away from the middle.

On Mars the thin air holds very little heat, so between a sunny afternoon and the cold hours before dawn the
temperature can drop by tens of degrees. A "mean temperature" for a Martian day would hide that completely. This
lesson gives you the simplest way to measure how **spread out** data are: the **range**.

## The idea

### Middle and spread

When we describe a list of numbers, we want to know two things:

- **Where is the middle?** That is what averages tell us: the mean, the median, the mode.
- **How spread out are the values?** Are they all bunched close together, or scattered far apart?

The second idea is called **spread** (statisticians also say **variation**). Data with **small** spread are
**consistent**: every value is close to every other. Data with **large** spread vary a lot.

### The range

The **range** is the distance from the smallest value to the largest value:

$$\text{range} = \text{largest value} - \text{smallest value}$$

On a number line, the range is the **length** of the stretch that the data cover.

The range is a single number, a **distance**, not a pair of numbers. People sometimes say "the scores ranged from 6 to
20", which is fine in everyday talk, but in statistics **the range is 14**, the gap between them.

### Same mean, very different spread

Here are spelling test scores, out of 20, for five children from each of two classes.

- Class A: 14, 15, 15, 16, 15
- Class B: 6, 20, 19, 10, 20

Find the means:

- Class A: $14 + 15 + 15 + 16 + 15 = 75$, and $75 \div 5 = 15$.
- Class B: $6 + 20 + 19 + 10 + 20 = 75$, and $75 \div 5 = 15$.

The same mean, 15. Now the ranges:

- Class A: $16 - 14 = 2$.
- Class B: $20 - 6 = 14$.

Draw both on line plots (an X or dot above a number line for each value, as in level 2), and the difference jumps out:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 190" role="img" aria-label="Two line plots from 5 to 20. Class A: dots at 14, three at 15, and 16, all bunched, range 2. Class B: dots at 6, 10, 19 and two at 20, spread out, range 14. A triangle marks the mean 15 under each line">
  <g stroke="currentColor">
    <line x1="40" y1="67" x2="40" y2="73"/><line x1="64" y1="67" x2="64" y2="73"/><line x1="88" y1="67" x2="88" y2="73"/>
    <line x1="112" y1="67" x2="112" y2="73"/><line x1="136" y1="67" x2="136" y2="73"/><line x1="160" y1="67" x2="160" y2="73"/>
    <line x1="184" y1="67" x2="184" y2="73"/><line x1="208" y1="67" x2="208" y2="73"/><line x1="232" y1="67" x2="232" y2="73"/>
    <line x1="256" y1="67" x2="256" y2="73"/><line x1="280" y1="67" x2="280" y2="73"/><line x1="304" y1="67" x2="304" y2="73"/>
    <line x1="328" y1="67" x2="328" y2="73"/><line x1="352" y1="67" x2="352" y2="73"/><line x1="376" y1="67" x2="376" y2="73"/>
    <line x1="400" y1="67" x2="400" y2="73"/>
    <line x1="40" y1="157" x2="40" y2="163"/><line x1="64" y1="157" x2="64" y2="163"/><line x1="88" y1="157" x2="88" y2="163"/>
    <line x1="112" y1="157" x2="112" y2="163"/><line x1="136" y1="157" x2="136" y2="163"/><line x1="160" y1="157" x2="160" y2="163"/>
    <line x1="184" y1="157" x2="184" y2="163"/><line x1="208" y1="157" x2="208" y2="163"/><line x1="232" y1="157" x2="232" y2="163"/>
    <line x1="256" y1="157" x2="256" y2="163"/><line x1="280" y1="157" x2="280" y2="163"/><line x1="304" y1="157" x2="304" y2="163"/>
    <line x1="328" y1="157" x2="328" y2="163"/><line x1="352" y1="157" x2="352" y2="163"/><line x1="376" y1="157" x2="376" y2="163"/>
    <line x1="400" y1="157" x2="400" y2="163"/>
  </g>
  <line x1="30" y1="70" x2="410" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="160" x2="410" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="256" cy="60" r="7" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="280" cy="60" r="7" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="280" cy="44" r="7" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="280" cy="28" r="7" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="304" cy="60" r="7" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="64" cy="150" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="160" cy="150" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="376" cy="150" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="400" cy="150" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="400" cy="134" r="7" fill="#eea66f" stroke="currentColor"/>
  <polygon points="280,74 274,84 286,84" fill="#7ccf9a" stroke="currentColor"/>
  <polygon points="280,164 274,174 286,174" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="40" y="86">5</text><text x="160" y="86">10</text><text x="400" y="86">20</text>
    <text x="40" y="186">5</text><text x="160" y="186">10</text><text x="400" y="186">20</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="40" y="34">Class A: range 2</text>
    <text x="40" y="118">Class B: range 14</text>
  </g>
</svg>
</div>

The green triangles mark the mean, 15, which is the same for both. In class A every child scored close to 15. In
class B nobody did: some did brilliantly and some found the test very hard. The teacher of class B has a very
different job from the teacher of class A, and the mean alone would never have told you.

So a good description of data gives **a middle and a spread**: "the mean score was 15 and the range was 2" paints a
quite different picture from "the mean score was 15 and the range was 14".

### Why the range works, and its weak spot

The range is easy to find and easy to understand: "every value lies inside a stretch this long". That is its
strength.

Its weak spot is that it uses **only two values**, the two most extreme ones. Everything in between is ignored. Look
at these two lists:

- 1, 10, 10, 10, 10, 10, 10, 19
- 1, 2, 5, 8, 12, 15, 18, 19

Both have range $19 - 1 = 18$. But in the first list almost everything is exactly 10; in the second the values are
spread evenly all the way along. The range cannot see the difference. And one unusual value at either end can change
the range a lot: if one child in class A had been ill and scored 3, the range of class A would jump from 2 to
$16 - 3 = 13$, even though the other four are just as bunched as before.

In level 5 you will meet measures of spread that look at the middle half of the data and are not fooled by one strange
value, and in level 6 one that uses every value. For now, the range is a quick first look.

### Range with negative numbers

Temperatures can go below zero. If one winter day goes from a low of $-8$ degrees to a high of 3 degrees, the range is
the distance on the number line from $-8$ up to 3. From $-8$ up to 0 is 8 steps, and from 0 up to 3 is 3 more, so the
range is $8 + 3 = 11$ degrees. In symbols, $3 - (-8) = 11$; subtracting a negative number is explained in
[Negative numbers](../../numbers/level-4/06-negative-numbers.md).

<figure class="play" data-play="stats" data-show="spread"><span class="ai-tag">AI-created</span><figcaption><b>The range.</b> Highest minus lowest; one extreme value changes it a lot.</figcaption></figure>

## Worked examples

**1. A simple range.** Lengths of six worms, in mm: 42, 35, 58, 40, 51, 37.

1. Smallest: 35. Largest: 58.
2. Range: $58 - 35 = 23$ mm.

You do not need to put all the values in order for the range, only to find the smallest and largest. But ordering
helps you not miss one: 35, 37, 40, 42, 51, 58.

**2. Who is more consistent?** Two basketball players' points in five games:

- Ana: 8, 12, 10, 9, 11. Total 50, mean 10. Range $12 - 8 = 4$.
- Bo: 2, 20, 6, 18, 4. Total 50, mean 10. Range $20 - 2 = 18$.

Same mean; Ana's range is much smaller, so Ana is more **consistent**. If the team needs about 10 points every game, Ana
is the safer choice. If the team is losing badly and needs a big score, Bo might be worth the gamble: he can score
20, and Ana never scored more than 12.

**3. A winter day.** The temperature over a day went from $-12$ degrees at 6 am to $-2$ degrees at 3 pm. Range:
from $-12$ up to $-2$ is 10 steps, so the range is **10 degrees**. Notice that both numbers are negative, and the range
is still a positive distance.

**4. A missing value.** Five scores have range 12. Four of them are 7, 10, 13 and 15. What could the fifth be?

1. Without the fifth score, the smallest is 7 and the largest is 15, a range of $15 - 7 = 8$. We need 12, so the
   fifth must be a new smallest or a new largest.
2. If it is the new largest: $7 + 12 = 19$. Check: range $19 - 7 = 12$. ✓
3. If it is the new smallest: $15 - 12 = 3$. Check: range $15 - 3 = 12$. ✓

So the fifth score is **3 or 19**. Both answers are correct; a good statistician gives both.

## Try it

1. Find the range of 23, 17, 31, 19, 26.
2. Find the range of 4, 4, 4, 4. What does that range tell you?
3. Two groups of plants: group P has heights 12, 15, 13, 14, 16 cm; group Q has 8, 20, 11, 19, 12 cm. Find each
   mean and each range. Which group grew more evenly?
4. One day the low was $-5$ degrees and the high was 7 degrees. Find the range.
5. A list has range 0. What must be true about the list?
6. The range of six numbers is 20 and the smallest is 9. What is the largest?
7. Make up two lists of five numbers that both have mean 10, one with range 2 and one with range 20.
8. Explain why adding one very large value to a list always increases the range, but might hardly change the median.

??? note "Answers"
    1. Smallest 17, largest 31. Range $31 - 17 = 14$.
    2. $4 - 4 = 0$. Every value is the same: there is no spread at all.
    3. P: total $12 + 15 + 13 + 14 + 16 = 70$, mean 14, range $16 - 12 = 4$. Q: total
       $8 + 20 + 11 + 19 + 12 = 70$, mean 14, range $20 - 8 = 12$. Group P grew more evenly (smaller range).
    4. From $-5$ up to 0 is 5, and from 0 up to 7 is 7 more: range $5 + 7 = 12$ degrees.
    5. The largest and smallest are equal, so every value is the same.
    6. $9 + 20 = 29$.
    7. One answer. Range 2: 9, 10, 10, 10, 11 (total 50, mean 10, range $11 - 9 = 2$). Range 20: 0, 5, 10, 15, 20
       (total 50, mean 10, range $20 - 0 = 20$).
    8. A new value larger than everything becomes the new largest, so the gap from the smallest gets bigger. The median
       only moves from the middle value to (at most) the next value along, because adding one value at the top just
       shifts the middle by half a place.

## Common mistake

**Writing the range as two numbers.** "The range is 6 to 20" is not a range; it is the smallest and the largest. The
range is one number, the difference: $20 - 6 = 14$.

**Using the first and last values as written.** In 23, 17, 31, 19, 26, the first is 23 and the last is 26, but the
range uses the **smallest** (17) and the **largest** (31). Look through the whole list.

## Where it leads

- Back: [The median and the mode](03-median-and-mode.md) · Next: [Stem-and-leaf plots](05-stem-and-leaf.md)
- [Level 3 page](index.md) · [Statistics topic page](../index.md)
- Better measures of spread come later: quartiles and the interquartile range in [level 5](../level-5/index.md), the
  standard deviation in [level 6](../level-6/index.md).
- Distances on the number line, including below zero: [Negative numbers](../../numbers/level-4/06-negative-numbers.md).
- Measuring temperature and length carefully: [Measurement](../../measurement/index.md).
