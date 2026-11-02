---
title: "Patterns in the multiplication table"
---

# Patterns in the multiplication table

*Patterns and sequences · level 3, lesson 5 of 6*

## A question to start

Write down the **last digit** of each answer in the 4 times table: 4, 8, 12, 16, 20, 24, 28, ... gives

4, 8, 2, 6, 0, 4, 8, 2, 6, 0, ...

Now draw a circle with the digits 0 to 9 around it like a clock, and join the digits in that order. You get a
five-pointed star. Do the same with the 6 times table and you get **the same star**, drawn the other way round.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 195" role="img" aria-label="Two circles with the digits 0 to 9 around them. Joining the last digits of the 4 times table, 4, 8, 2, 6, 0, draws a five-pointed star; the 6 times table draws the same star the other way round">
  <circle cx="100" cy="90" r="60" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="100.0" cy="30.0" r="3" fill="currentColor"/>
  <text x="100" y="20" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="135.3" cy="41.5" r="3" fill="currentColor"/>
  <text x="143.496" y="34.1327" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="157.1" cy="71.5" r="3" fill="currentColor"/>
  <text x="170.378" y="71.1327" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="157.1" cy="108.5" r="3" fill="currentColor"/>
  <text x="170.378" y="116.867" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="135.3" cy="138.5" r="3" fill="currentColor"/>
  <text x="143.496" y="153.867" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="100.0" cy="150.0" r="3" fill="currentColor"/>
  <text x="100" y="168" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="64.7" cy="138.5" r="3" fill="currentColor"/>
  <text x="56.5039" y="153.867" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="42.9" cy="108.5" r="3" fill="currentColor"/>
  <text x="29.6218" y="116.867" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="42.9" cy="71.5" r="3" fill="currentColor"/>
  <text x="29.6218" y="71.1327" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="64.7" cy="41.5" r="3" fill="currentColor"/>
  <text x="56.5039" y="34.1327" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <polygon points="135.3,138.5 42.9,71.5 157.1,71.5 64.7,138.5 100.0,30.0" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <text x="100" y="188" font-size="12" text-anchor="middle" fill="currentColor">4s: 4, 8, 2, 6, 0, ...</text>
  <circle cx="310" cy="90" r="60" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="310.0" cy="30.0" r="3" fill="currentColor"/>
  <text x="310" y="20" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="345.3" cy="41.5" r="3" fill="currentColor"/>
  <text x="353.496" y="34.1327" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="367.1" cy="71.5" r="3" fill="currentColor"/>
  <text x="380.378" y="71.1327" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="367.1" cy="108.5" r="3" fill="currentColor"/>
  <text x="380.378" y="116.867" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="345.3" cy="138.5" r="3" fill="currentColor"/>
  <text x="353.496" y="153.867" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="310.0" cy="150.0" r="3" fill="currentColor"/>
  <text x="310" y="168" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="274.7" cy="138.5" r="3" fill="currentColor"/>
  <text x="266.504" y="153.867" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="252.9" cy="108.5" r="3" fill="currentColor"/>
  <text x="239.622" y="116.867" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="252.9" cy="71.5" r="3" fill="currentColor"/>
  <text x="239.622" y="71.1327" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="274.7" cy="41.5" r="3" fill="currentColor"/>
  <text x="266.504" y="34.1327" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <polygon points="274.7,138.5 367.1,71.5 252.9,71.5 345.3,138.5 310.0,30.0" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <text x="310" y="188" font-size="12" text-anchor="middle" fill="currentColor">6s: 6, 2, 8, 4, 0, ...</text>
</svg>
</div>

Why would two different times tables draw the same star? The multiplication table is full of patterns like this, and
every one of them has a reason you can find.

## The idea

### The table itself

Here is the multiplication table up to $10 \times 10$. Each answer sits where its row and column meet: row 3,
column 5 holds $3 \times 5 = 15$. The square numbers are in **bold**.

| × | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **1** | **1** | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| **2** | 2 | **4** | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 |
| **3** | 3 | 6 | **9** | 12 | 15 | 18 | 21 | 24 | 27 | 30 |
| **4** | 4 | 8 | 12 | **16** | 20 | 24 | 28 | 32 | 36 | 40 |
| **5** | 5 | 10 | 15 | 20 | **25** | 30 | 35 | 40 | 45 | 50 |
| **6** | 6 | 12 | 18 | 24 | 30 | **36** | 42 | 48 | 54 | 60 |
| **7** | 7 | 14 | 21 | 28 | 35 | 42 | **49** | 56 | 63 | 70 |
| **8** | 8 | 16 | 24 | 32 | 40 | 48 | 56 | **64** | 72 | 80 |
| **9** | 9 | 18 | 27 | 36 | 45 | 54 | 63 | 72 | **81** | 90 |
| **10** | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | **100** |

### The square numbers run down the diagonal

The **diagonal** is the slanting line of boxes from the top-left corner to the bottom-right: row 1 column 1, row 2
column 2, and so on. Each of those boxes multiplies a number by **itself**, so the diagonal holds the square numbers
1, 4, 9, 16, ..., 100 from lesson 2.

### The table is the same when you flip it

Find 15 in row 3, column 5. Now look in row 5, column 3: also 15. In fact, if you folded the table along the
diagonal, every number would land on an equal number. Why?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 165" role="img" aria-label="An array of 3 rows of 5 orange dots, turned a quarter turn, becomes 5 rows of 3 blue dots: the same 15 dots">
  <circle cx="30" cy="40" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="30" cy="60" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="30" cy="80" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="50" cy="40" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="50" cy="60" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="50" cy="80" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="70" cy="40" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="70" cy="60" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="70" cy="80" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="90" cy="40" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="90" cy="60" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="90" cy="80" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="110" cy="40" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="110" cy="60" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="110" cy="80" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="260" cy="20" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="260" cy="40" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="260" cy="60" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="260" cy="80" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="260" cy="100" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="20" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="40" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="60" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="80" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="100" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="300" cy="20" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="300" cy="40" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="300" cy="60" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="300" cy="80" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="300" cy="100" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="120" font-size="12" text-anchor="middle" fill="currentColor">3 rows of 5</text>
  <text x="280" y="130" font-size="12" text-anchor="middle" fill="currentColor">5 rows of 3</text>
  <path d="M 140 60 Q 195 20 245 60" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="245,60 236,57 240,50" fill="currentColor"/>
  <text x="195" y="25" font-size="12" text-anchor="middle" fill="currentColor">turn a quarter turn</text>
  <text x="195" y="155" font-size="12" text-anchor="middle" fill="currentColor">same 15 dots: 3 × 5 = 5 × 3</text>
</svg>
</div>

$3 \times 5$ means 3 rows of 5 dots. Turn that picture a quarter turn and it becomes 5 rows of 3 dots, which is
$5 \times 3$. Turning does not add or remove any dots, so the two answers must be equal. That is true for any pair
of numbers, so the whole table is **symmetric** about its diagonal: the top-right half is a mirror copy of the
bottom-left half. It also means you only have to learn about half the table; the other half comes free.

### Why the last digits of the 4s repeat

The last digits of the 4 times table go 4, 8, 2, 6, 0 and then start again. Here is the reason.

The 5th answer is $4 \times 5 = 20$, which ends in **0**. Now compare any answer with the one five places later:
$4 \times 6$ is $4 \times 1$ plus five more fours, which is $4 + 20 = 24$. $4 \times 7$ is $4 \times 2 + 20 = 28$.
Adding 20 adds 2 to the tens but leaves the **ones digit alone**. So every five places, the last digit comes back to
what it was. The pattern must repeat every 5.

The 6s work the same way, because $6 \times 5 = 30$ also ends in 0: 6, 2, 8, 4, 0, then again.

### Why the 4s and the 6s draw the same star backwards

Put the two lists side by side:

| × | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 4s end in | 4 | 8 | 2 | 6 | 0 |
| 6s end in | 6 | 2 | 8 | 4 | 0 |
| sum of the two | 10 | 10 | 10 | 10 | 0 |

Each pair of last digits adds to 10 (or both are 0). The reason: four of something plus six of the same thing is
**ten** of it. $4 \times 3 + 6 \times 3 = 10 \times 3 = 30$, which ends in 0. So the last digits of $4 \times 3$ and
$6 \times 3$ must add up to 10 (or both be 0). On the clock of digits, a digit and its partner that adds to 10 sit
in mirror places (4 and 6, 8 and 2), so the 6s visit the same five points as the 4s, in the opposite direction.

The same idea pairs other tables: 2 and 8 ($2 + 8 = 10$), and 3 and 7 ($3 + 7 = 10$).

### The 9s: up one, down one

9, 18, 27, 36, 45, 54, 63, 72, 81, 90. The tens digit goes **up** by 1 each time and the ones digit goes **down** by
1, and the two digits always add to 9. Why? Adding 9 is the same as adding 10 and then taking away 1. Adding 10 puts
1 on the tens; taking away 1 takes 1 off the ones.

### Hiding next to the diagonal

Look at the boxes just beside the diagonal: $1 \times 2 = 2$, $2 \times 3 = 6$, $3 \times 4 = 12$,
$4 \times 5 = 20$, $5 \times 6 = 30$. Halve them: 1, 3, 6, 10, 15. The triangular numbers from lesson 3! That is
exactly the rectangle trick: a rectangle 4 by 5 is two staircases of 10.

And look **across** the diagonal from 25: the boxes $4 \times 6 = 24$, $3 \times 7 = 21$, $2 \times 8 = 16$,
$1 \times 9 = 9$. They are $25 - 1$, $25 - 4$, $25 - 9$, $25 - 16$: the square minus the square numbers! To see one
of these: start from a 5 by 5 square (25 dots), take off one column of 5 to leave 5 rows of 4 (20 dots), then add
one more row of 4 to get 6 rows of 4 (24 dots). You took off 5 and put back 4, so you are 1 short: $24 = 25 - 1$.

## Worked examples

**1. The last digit of $4 \times 37$, without multiplying it all out.** The last digits of the 4s repeat every 5.
$37 \div 5 = 7$ remainder 2, so $4 \times 37$ ends like $4 \times 2 = 8$: it ends in **8**. (Check:
$4 \times 37 = 148$. ✓)

**2. The last digit of $6 \times 23$.** The 6s also repeat every 5. $23 \div 5 = 4$ remainder 3, so it ends like
$6 \times 3 = 18$: in **8**. (Check: $6 \times 23 = 138$. ✓)

**3. $9 \times 7$ by the up-one-down-one rule.** Counting down the 9 times table: 9, 18, 27, 36, 45, 54, **63**. The
tens digit is one less than 7, which is 6, and the ones digit makes the digits add to 9: 3. So 63.

**4. Around 49.** $7 \times 7 = 49$. Then, going across the diagonal: $6 \times 8 = 49 - 1 = 48$,
$5 \times 9 = 49 - 4 = 45$, $4 \times 10 = 49 - 9 = 40$. All correct.

## Try it

1. Write the last digits of the 8 times table for $8 \times 1$ to $8 \times 10$. How often do they repeat?
2. Do the last digits of the 3 times table use all ten digits before they repeat?
3. What is the last digit of $4 \times 58$? Use the repeating pattern, then check by multiplying.
4. $10 \times 10 = 100$. Without multiplying in the usual way, find $9 \times 11$ and $8 \times 12$.
5. $6 \times 6 = 36$. What is $5 \times 7$?
6. $5 \times 6 = 30$ sits just beside the diagonal. Halve it. Which triangular number is it?
7. Explain, with a picture of dots, why $4 \times 7 = 7 \times 4$.
8. The 3s end in 3, 6, 9, 2, 5, 8, 1, 4, 7, 0. Which other times table has the same last digits in the reverse
   order? Explain why.

??? note "Answers"
    1. 8, 6, 4, 2, 0, 8, 6, 4, 2, 0. They repeat every 5, because $8 \times 5 = 40$ ends in 0.
    2. **Yes**: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0 uses every digit once. It only repeats after 10, when
       $3 \times 10 = 30$ ends in 0.
    3. $58 \div 5 = 11$ remainder 3, so it ends like $4 \times 3 = 12$: in **2**. Check: $4 \times 58 = 232$. ✓
    4. Across the diagonal from 100: $9 \times 11 = 100 - 1 = 99$ and $8 \times 12 = 100 - 4 = 96$.
    5. $36 - 1 = 35$.
    6. $30 \div 2 = 15$, the 5th triangular number ($1 + 2 + 3 + 4 + 5$).
    7. Draw 4 rows of 7 dots. Turn the drawing a quarter turn: now it is 7 rows of 4 dots. It is the same dots, so the
       number is the same: 28.
    8. The **7s**: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0. Three of something plus seven of the same thing is ten of it, which
       ends in 0, so each pair of last digits adds to 10 (or both are 0): $3 + 7$, $6 + 4$, $9 + 1$, and so on.

## Common mistake

**Thinking a pattern repeats with the wrong length.** The 4s' last digits repeat every **5** answers, not every 4.
The length comes from the first answer that ends in 0 ($4 \times 5 = 20$), not from the number 4 itself.

**Reading only the last digit.** The pattern 4, 8, 2, 6, 0 tells you the last digit, not the whole answer. $4 \times
37$ ends in 8, but it is 148, not 8 or 28.

## Where it leads

- Back: [The Fibonacci sequence](04-fibonacci-sequence.md) · Next: [Patterns that trick you](06-patterns-that-trick.md)
- [Level 3 page](index.md) · [Patterns topic page](../index.md)
- The times tables themselves are in [Numbers](../../numbers/index.md); last digits of powers come back in
  clock arithmetic in [Number theory](../../number-theory/index.md).
- The "square minus a square" pattern around the diagonal becomes an algebra rule in
  [Algebra](../../algebra/index.md).
