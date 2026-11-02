---
title: "Square numbers and the locker puzzle"
---

# Square numbers and the locker puzzle

*Number theory · level 2, lesson 6 of 6*

## A question to start

A school has a long hall with **100 lockers**, numbered 1 to 100. They are all **closed**. 100 students walk down
the hall, one after another.

- Student 1 **opens** every locker.
- Student 2 goes to every 2nd locker (2, 4, 6, ...) and **changes** it: if it is open, she closes it; if it is
  closed, she opens it.
- Student 3 goes to every 3rd locker (3, 6, 9, ...) and changes it.
- Student 4 changes every 4th locker, and so on, until student 100 changes only locker 100.

When all 100 students have finished, **which lockers are open?**

It sounds like you would need to walk the hall 100 times. But the answer is short and beautiful, and by the end of
this lesson you will be able to say it without opening a single locker.

## The idea

### Square numbers

A **square number** is a number of counters that can make an array that is a **square**: the same number of rows as
counters in each row.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 160" role="img" aria-label="Square numbers as squares of dots: 1, 4, 9 and 16. Each square is the one before plus an L-shaped layer of the next odd number of dots: 1, then 3, then 5, then 7.">
  <circle cx="20" cy="100" r="7" fill="#eea66f"/>
  <text x="20" y="130" font-size="12" text-anchor="middle" fill="currentColor">1 × 1 = 1</text>
  <circle cx="80" cy="80" r="7" fill="#eea66f"/>
  <circle cx="100" cy="80" r="7" fill="#9cc9ea"/>
  <circle cx="80" cy="100" r="7" fill="#9cc9ea"/>
  <circle cx="100" cy="100" r="7" fill="#9cc9ea"/>
  <text x="90" y="130" font-size="12" text-anchor="middle" fill="currentColor">2 × 2 = 4</text>
  <circle cx="160" cy="60" r="7" fill="#eea66f"/>
  <circle cx="180" cy="60" r="7" fill="#9cc9ea"/>
  <circle cx="200" cy="60" r="7" fill="#7ccf9a"/>
  <circle cx="160" cy="80" r="7" fill="#9cc9ea"/>
  <circle cx="180" cy="80" r="7" fill="#9cc9ea"/>
  <circle cx="200" cy="80" r="7" fill="#7ccf9a"/>
  <circle cx="160" cy="100" r="7" fill="#7ccf9a"/>
  <circle cx="180" cy="100" r="7" fill="#7ccf9a"/>
  <circle cx="200" cy="100" r="7" fill="#7ccf9a"/>
  <text x="180" y="130" font-size="12" text-anchor="middle" fill="currentColor">3 × 3 = 9</text>
  <circle cx="260" cy="40" r="7" fill="#eea66f"/>
  <circle cx="280" cy="40" r="7" fill="#9cc9ea"/>
  <circle cx="300" cy="40" r="7" fill="#7ccf9a"/>
  <circle cx="320" cy="40" r="7" fill="#eea66f"/>
  <circle cx="260" cy="60" r="7" fill="#9cc9ea"/>
  <circle cx="280" cy="60" r="7" fill="#9cc9ea"/>
  <circle cx="300" cy="60" r="7" fill="#7ccf9a"/>
  <circle cx="320" cy="60" r="7" fill="#eea66f"/>
  <circle cx="260" cy="80" r="7" fill="#7ccf9a"/>
  <circle cx="280" cy="80" r="7" fill="#7ccf9a"/>
  <circle cx="300" cy="80" r="7" fill="#7ccf9a"/>
  <circle cx="320" cy="80" r="7" fill="#eea66f"/>
  <circle cx="260" cy="100" r="7" fill="#eea66f"/>
  <circle cx="280" cy="100" r="7" fill="#eea66f"/>
  <circle cx="300" cy="100" r="7" fill="#eea66f"/>
  <circle cx="320" cy="100" r="7" fill="#eea66f"/>
  <text x="290" y="130" font-size="12" text-anchor="middle" fill="currentColor">4 × 4 = 16</text>
  <text x="190.0" y="152" font-size="12" text-anchor="middle" fill="currentColor">each new layer is the next odd number: 1, 3, 5, 7</text>
</svg>
</div>

- 1 × 1 = **1**
- 2 × 2 = **4**
- 3 × 3 = **9**
- 4 × 4 = **16**
- then 5 × 5 = 25, 6 × 6 = 36, 7 × 7 = 49, 8 × 8 = 64, 9 × 9 = 81, 10 × 10 = **100**.

So the square numbers up to 100 are **1, 4, 9, 16, 25, 36, 49, 64, 81, 100**. There are 10 of them.

Look at the colours in the picture. To grow a square into the next one, you add an **L-shaped layer** around two of
its sides. The layers have 1, 3, 5, 7, ... dots: the odd numbers! That is why adding the odd numbers in order gives
the squares:

- 1 = 1
- 1 + 3 = 4
- 1 + 3 + 5 = 9
- 1 + 3 + 5 + 7 = 16

And the layers grow by 2 each time because each new L has one more dot along the top, one more down the side, and
they share the corner: that is 2 more than the L before.

### Counting factors: odd or even?

Let us count the factors of some numbers.

| Number | Factors | How many | Odd or even count? |
| --- | --- | --- | --- |
| 6 | 1, 2, 3, 6 | 4 | even |
| 9 | 1, 3, 9 | 3 | **odd** |
| 10 | 1, 2, 5, 10 | 4 | even |
| 12 | 1, 2, 3, 4, 6, 12 | 6 | even |
| 16 | 1, 2, 4, 8, 16 | 5 | **odd** |
| 18 | 1, 2, 3, 6, 9, 18 | 6 | even |
| 25 | 1, 5, 25 | 3 | **odd** |
| 36 | 1, 2, 3, 4, 6, 9, 12, 18, 36 | 9 | **odd** |

Do you see it? The numbers with an **odd** number of factors are 9, 16, 25 and 36: all **square numbers**. The
others have an **even** number of factors. This is always true, for every number. Here is why.

### Why squares have an odd number of factors

Remember from [Factors with arrays](03-factors-arrays.md): **factors come in pairs**. Each array gives a pair: the
number of rows and the number in each row. For 12 the pairs are 1 and 12, 2 and 6, 3 and 4. Pairs, pairs, pairs.
Every factor has a partner, so the count is **even**: 3 pairs is 6 factors. It is the "pairs of socks" idea from
level 1 again!

But in a **square**, one array is special: the square array. For 16 it is 4 rows of 4. The factor 4 is partners
**with itself**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 115" role="img" aria-label="The factors of 16 in a row, 1, 2, 4, 8, 16, with arcs joining 1 and 16, and 2 and 8. The 4 in the middle has no arc: it pairs with itself.">
  <path d="M 30 81 Q 110 -5.4 190 81" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M 70 81 Q 110 37.8 150 81" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="30" cy="95" r="13" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="100" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="70" cy="95" r="13" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="100" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="110" cy="95" r="13" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="110" y="100" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="150" cy="95" r="13" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="100" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="190" cy="95" r="13" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="190" y="100" font-size="13" text-anchor="middle" fill="currentColor">16</text>
</svg>
</div>

In the factor rainbow, 4 stands alone in the middle, with no arc. When you list the factors you write 4 only once.
So the factors of 16 are: two pairs (1 and 16, 2 and 8) and **one lonely factor** (4). Pairs and one lonely one: that
is an **odd** number, 5.

And only squares have a factor that pairs with itself, because "a number times itself" is exactly what a square
number is. So:

> A number has an **odd** number of factors **exactly when** it is a square number.

### Solving the locker puzzle

Now back to the hall. Which students touch locker 12?

Student 1 (who touches every locker), student 2 (every 2nd), student 3 (every 3rd), student 4, student 6 and student
12. Students 5, 7, 8, 9, 10 and 11 walk past it, because 12 is not in their skip count.

That is 1, 2, 3, 4, 6, 12: **the factors of 12**! Student number k touches locker 12 exactly when k is a factor of 12.
That is true for every locker: **locker number n is changed once for each factor of n.**

Here it is for a small hall with just 10 lockers and 10 students. A blue square means "this student changes this
locker".

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 334" role="img" aria-label="A grid for 10 lockers and 10 students. Student k changes locker j when k is a factor of j, shown in blue. At the end, lockers 1, 4 and 9 are open, shown in orange.">
  <text x="83.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="109.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="135.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="161.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="187.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="213.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="239.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <text x="265.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <text x="291.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <text x="317.0" y="22" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <text x="60" y="47.0" font-size="10" text-anchor="end" fill="currentColor">student 1</text>
  <rect x="70" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="30" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="73.0" font-size="10" text-anchor="end" fill="currentColor">student 2</text>
  <rect x="70" y="56" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="56" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="56" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="56" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="56" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="56" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="56" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="56" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="56" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="56" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="99.0" font-size="10" text-anchor="end" fill="currentColor">student 3</text>
  <rect x="70" y="82" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="82" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="82" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="82" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="82" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="82" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="82" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="82" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="82" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="82" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="125.0" font-size="10" text-anchor="end" fill="currentColor">student 4</text>
  <rect x="70" y="108" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="108" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="108" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="108" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="108" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="108" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="108" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="108" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="108" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="108" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="151.0" font-size="10" text-anchor="end" fill="currentColor">student 5</text>
  <rect x="70" y="134" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="134" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="134" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="134" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="134" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="134" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="134" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="134" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="134" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="134" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="177.0" font-size="10" text-anchor="end" fill="currentColor">student 6</text>
  <rect x="70" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="160" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="160" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="203.0" font-size="10" text-anchor="end" fill="currentColor">student 7</text>
  <rect x="70" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="186" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="186" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="229.0" font-size="10" text-anchor="end" fill="currentColor">student 8</text>
  <rect x="70" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="212" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="212" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="255.0" font-size="10" text-anchor="end" fill="currentColor">student 9</text>
  <rect x="70" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="238" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="238" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="281.0" font-size="10" text-anchor="end" fill="currentColor">student 10</text>
  <rect x="70" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="122" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="174" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="200" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="226" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="252" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="278" y="264" width="26" height="26" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="304" y="264" width="26" height="26" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="60" y="315.0" font-size="10" text-anchor="end" fill="currentColor">at the end</text>
  <rect x="70" y="298" width="26" height="26" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="83.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor">open</text>
  <rect x="96" y="298" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="109.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor"></text>
  <rect x="122" y="298" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="135.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor"></text>
  <rect x="148" y="298" width="26" height="26" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="161.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor">open</text>
  <rect x="174" y="298" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="187.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor"></text>
  <rect x="200" y="298" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="213.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor"></text>
  <rect x="226" y="298" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="239.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor"></text>
  <rect x="252" y="298" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor"></text>
  <rect x="278" y="298" width="26" height="26" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="291.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor">open</text>
  <rect x="304" y="298" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="317.0" y="315.0" font-size="8" text-anchor="middle" fill="currentColor"></text>
  <text x="200" y="8" font-size="11" text-anchor="middle" fill="currentColor">locker number</text>
</svg>
</div>

Now follow one locker. It starts **closed**. Each change flips it: closed, open, closed, open, ...

- After an **even** number of changes, it is back to **closed** (the changes pair up: open, close, open, close).
- After an **odd** number of changes, it is **open** (one change has no partner to undo it).

So a locker ends **open** exactly when its number has an **odd number of factors**: exactly when its number is a
**square**.

In the small hall, lockers **1, 4 and 9** end open. In the big hall with 100 lockers, the open lockers are:

**1, 4, 9, 16, 25, 36, 49, 64, 81, 100**

That is **10 lockers**, and every other locker is closed. Nobody had to walk the hall at all. That is the power of
a good reason.

## Worked examples

**Example 1. Is 49 a square? How many factors?**

1. 7 × 7 = 49, so yes, 49 is a square.
2. Its factors: 1 and 49 make a pair. 2, 3, 4, 5, 6 do not go into 49. 7 pairs with itself.
3. So the factors are **1, 7, 49**: three factors, an odd number, as the rule says.

**Example 2. Locker 30.** In the 100-locker puzzle, is locker 30 open or closed at the end? Which students touch it?

1. 30 is not a square (5 × 5 = 25 and 6 × 6 = 36, so 30 is between two squares).
2. So it has an even number of factors, and it ends **closed**.
3. The students who touch it are its factors: 1, 2, 3, 5, 6, 10, 15, 30. That is 8 students, 4 pairs. Open, close,
   open, close, open, close, open, close. Closed. ✓

**Example 3. Locker 64.**

1. 8 × 8 = 64, so 64 is a square. It ends **open**.
2. Check: the factors of 64 are 1 and 64, 2 and 32, 4 and 16, and 8 alone. That is 3 pairs and 1 lonely factor:
   **7** factors. An odd number of changes, so it is open. ✓

**Example 4. Which number below 50 is touched by the most students?**

1. We want the number below 50 with the most factors.
2. Try numbers with many small factors: 24 has 8 (1, 2, 3, 4, 6, 8, 12, 24). 36 has 9. 48 has 10 (1, 2, 3, 4, 6, 8,
   12, 16, 24, 48).
3. Checking all the numbers below 50 the same way, none has more than 10. So **48** is touched by the most students:
   10 of them. (It ends closed: 48 is not a square.)

## Try it

1. Write the square numbers from 1 × 1 to 12 × 12.
2. What is 1 + 3 + 5 + 7 + 9? Is it a square? Draw it with an L-shaped layer for each odd number.
3. List the factors of 25. How many are there?
4. Without listing them, does 81 have an odd or an even number of factors? What about 80?
5. In the 100-locker puzzle, is locker 50 open or closed? Is locker 81?
6. Which students touch locker 16? List them.
7. If the hall had **200** lockers and 200 students, how many lockers would be open at the end?
8. In the 100-locker puzzle, which lockers are touched by **exactly two** students? What kind of numbers are they?

??? note "Answers"
    1. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.
    2. 1 + 3 + 5 + 7 + 9 = **25**. Yes, 25 = 5 × 5. The five L-shaped layers of 1, 3, 5, 7 and 9 dots build a 5 by 5
       square.
    3. **1, 5, 25**: 3 factors. 5 pairs with itself.
    4. 81 = 9 × 9 is a square, so it has an **odd** number of factors (1, 3, 9, 27, 81: five). 80 is not a square
       (8 × 8 = 64, 9 × 9 = 81), so it has an **even** number (1, 2, 4, 5, 8, 10, 16, 20, 40, 80: ten).
    5. 50 is not a square (7 × 7 = 49, 8 × 8 = 64), so locker 50 is **closed**. 81 = 9 × 9 is a square, so locker
       81 is **open**.
    6. The factors of 16: students **1, 2, 4, 8 and 16**. Five changes: open, close, open, close, open. It ends open.
    7. The open lockers are the squares up to 200: 1, 4, 9, ..., 196 (14 × 14 = 196; 15 × 15 = 225 is too big). That
       is **14 lockers**.
    8. Numbers with exactly two factors: the **primes**! Locker 7 is touched only by student 1 (open) and student 7
       (close). So every prime locker is touched by exactly two students, and ends closed. There are 25 of them, from
       2 up to 97.

## Common mistake

**Counting the middle factor twice.** For 36, the pair "6 and 6" is one factor, not two. Write the factors of 36 as 1,
2, 3, 4, 6, 9, 12, 18, 36: nine factors. If you write 6 twice you get ten and the rule seems to break.

**Thinking "odd number" and "odd number of factors" are the same.** 15 is odd but has 4 factors (1, 3, 5, 15), an
even count. And 16 is even but has 5 factors, an odd count. What matters is being a **square**, not being odd.

## Where it leads

- Back: [The sieve of Eratosthenes](05-sieve-eratosthenes.md). This is the last lesson of level 2.
- This level: [Level 2: Factors and multiples](index.md). Next level: [Level 3: Divisibility](../level-3/index.md).
  The whole topic: [Number theory](../index.md).
- Back to level 1, where it all started: [Pairs: everything has a partner](../level-1/01-pairs-partners.md).
- Square numbers as areas of squares: [Measurement](../../measurement/index.md). Adding odd numbers to make squares
  is a pattern: [Patterns](../../patterns/index.md).
- In level 3 you will learn to **count** factors fast: 36 = 2 × 2 × 3 × 3 has 3 × 3 = 9 factors. The same idea
  explains why only squares give an odd count.
- Finding a clever pairing to count things without listing them is a big idea in
  [Counting](../../counting/index.md).
