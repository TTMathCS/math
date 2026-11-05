---
title: "Triangular numbers"
---

# Triangular numbers

*Patterns and sequences · level 3, lesson 3 of 6*

## A question to start

Ten pins stand at the end of a bowling lane in a triangle: a row of 1 at the front, then 2, then 3, then 4. At a
party, five friends each shake hands once with every other friend. How many handshakes is that? Count it carefully,
and you also get **10**.

Pins and handshakes have nothing to do with each other. So why the same number? And how could you find the number of
handshakes at a party of 100 people without counting for an hour? This lesson answers both.

## The idea

### Numbers that make triangles

Stack dots in rows: 1 dot on top, 2 in the row under it, then 3, then 4, each row one longer than the row above.
The shape is a triangle (or a staircase, if you push all the rows to one side, as in the picture). The totals are the
**triangular numbers**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 140" role="img" aria-label="Staircase triangles of dots with rows of 1; 1 and 2; 1, 2 and 3; 1, 2, 3 and 4. They hold 1, 3, 6 and 10 dots">
  <circle cx="20" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="125" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="88" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="88" cy="48" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="106" cy="48" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="97" y="125" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="174" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="174" cy="48" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="192" cy="48" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="174" cy="66" r="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="192" cy="66" r="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="210" cy="66" r="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="192" y="125" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="278" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="278" cy="48" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="296" cy="48" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="278" cy="66" r="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="296" cy="66" r="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="314" cy="66" r="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="278" cy="84" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="296" cy="84" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="314" cy="84" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="332" cy="84" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="305" y="125" font-size="13" text-anchor="middle" fill="currentColor">10</text>
</svg>
</div>

| Position (rows) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Triangular number | 1 | 3 | 6 | 10 | 15 | 21 | 28 | 36 | 45 | 55 |

The **next-term rule** is easy to see. To make the next triangle, add one more row, and the new row is one longer
than the last. So you add 2, then 3, then 4, then 5:

1, then $1 + 2 = 3$, then $3 + 3 = 6$, then $6 + 4 = 10$, then $10 + 5 = 15$, ...

Another way to say it: the 4th triangular number is $1 + 2 + 3 + 4$, and the 10th is $1 + 2 + 3 + \cdots + 10$.
Each triangular number is the **sum of the counting numbers** up to its position.

### Two triangles make a rectangle

Adding 1 + 2 + ... + 100 one number at a time is slow. Here is a quicker way, and it comes from a picture. Take the
staircase of 4 rows, then make a copy, turn it round, and push the two together.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="Two copies of the 4-row staircase, one orange and one blue turned round, fit together into a rectangle of 4 rows of 5 dots">
  <circle cx="40" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="64" cy="30" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="88" cy="30" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="30" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="136" cy="30" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="40" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="64" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="88" cy="54" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="54" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="136" cy="54" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="40" cy="78" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="64" cy="78" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="88" cy="78" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="78" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="136" cy="78" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="40" cy="102" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="64" cy="102" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="88" cy="102" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="102" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="136" cy="102" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="140" font-size="12" text-anchor="middle" fill="currentColor">4 rows × 5 dots = 20</text>
  <text x="88" y="158" font-size="12" text-anchor="middle" fill="currentColor">half of 20 is 10</text>
  <text x="200" y="45" font-size="12" text-anchor="start" fill="currentColor">orange staircase: 1 + 2 + 3 + 4</text>
  <text x="200" y="70" font-size="12" text-anchor="start" fill="currentColor">blue staircase: 4 + 3 + 2 + 1</text>
  <text x="200" y="95" font-size="12" text-anchor="start" fill="currentColor">together: a 4 by 5 rectangle</text>
  <text x="200" y="120" font-size="12" text-anchor="start" fill="currentColor">4th triangular = 4 × 5 ÷ 2 = 10</text>
</svg>
</div>

The orange staircase has rows of 1, 2, 3, 4 (going down). The blue copy, turned round, has rows of 4, 3, 2, 1. Each
row gets 1 + 4 = 5, or 2 + 3 = 5, or 3 + 2 = 5, or 4 + 1 = 5 dots: always 5. So the two staircases fill a
**rectangle** with 4 rows of 5 dots, which is 20 dots. One staircase is half of it: $20 \div 2 = 10$.

This works for every staircase. A staircase with some number of rows, together with its turned-round copy, makes a
rectangle that is that many rows tall and **one more** dot wide. So:

**triangular number = position × (position + 1) ÷ 2**

- The 10th triangular number: $10 \times 11 \div 2 = 110 \div 2 = 55$.
- The 100th: $100 \times 101 \div 2 = 10100 \div 2 = 5050$.

So $1 + 2 + 3 + \cdots + 100 = 5050$. The story goes that the great mathematician Carl Friedrich Gauss found this as a
schoolboy, when his teacher set the class that sum to keep them busy. Whether or not the story is true, the
rectangle trick is real, and you have just used it.

Why can we always halve? Of the two numbers side by side, like 10 and 11 or 4 and 5, one is always even. So their
product is even, and dividing by 2 gives a whole number, as a count of dots must.

### Why handshakes are triangular

Line up the five friends. The first shakes hands with the 4 others. The second has already shaken the first's hand,
so has 3 **new** handshakes. The third has 2 new ones, the fourth has 1, and the fifth has none left.

Total: $4 + 3 + 2 + 1 = 10$, a triangular number. With 100 people, the handshakes are
$99 + 98 + \cdots + 1$, the 99th triangular number: $99 \times 100 \div 2 = 4950$. Notice the people count is one
**more** than the position: 5 people give the 4th triangular number, and 100 people give the 99th.

### Two triangles make a square

Two triangular numbers next to each other always add to a square number: $1 + 3 = 4$, $3 + 6 = 9$,
$6 + 10 = 16$, $10 + 15 = 25$.

Picture a 4 by 4 square of dots and cut it along a staircase line, so one side gets the diagonal and everything
below it, and the other side gets everything above. The bigger piece is a staircase with rows 1, 2, 3, 4 (that is
10 dots). The smaller piece is a staircase with rows 1, 2, 3 (that is 6 dots). Together, $10 + 6 = 16 = 4 \times 4$.

<figure class="play" data-play="seq" data-kind="tri"><span class="ai-tag">AI-created</span><figcaption><b>Triangular numbers.</b> 1, 3, 6, 10 …: add 1 more each time than the time before.</figcaption></figure>

## Worked examples

**1. The 20th triangular number.** $20 \times 21 \div 2 = 420 \div 2 = 210$.

**2. Handshakes at a party of 6.** The first person shakes 5 hands, then 4 new, 3, 2, 1:
$5 + 4 + 3 + 2 + 1 = 15$. Using the rule for the 5th triangular number: $5 \times 6 \div 2 = 15$. ✓

**3. Is 50 a triangular number?** The list goes ..., 36, 45, 55, ... 50 falls between 45 and 55, so **no**.

**4. Stacking cans.** A shop stacks cans in a triangle with 8 cans in the bottom row, 7 above, and so on up to 1 at
the top. How many cans? $8 \times 9 \div 2 = 72 \div 2 = 36$ cans.

**5. A sum that does not start at 1.** Work out $11 + 12 + \cdots + 20$.

- All of $1 + 2 + \cdots + 20$ is $20 \times 21 \div 2 = 210$.
- The part we do not want, $1 + 2 + \cdots + 10$, is 55.
- So $11 + \cdots + 20 = 210 - 55 = 155$.

## Try it

1. Write the next three triangular numbers after 15.
2. Find the 12th triangular number using the rectangle rule.
3. Work out $1 + 2 + 3 + \cdots + 50$.
4. Seven people meet and every pair shakes hands once. How many handshakes?
5. Is 66 a triangular number? If so, which position?
6. Add the 5th and 6th triangular numbers. What kind of number do you get, and why?
7. At a party there were 45 handshakes, and every pair shook hands once. How many people were there?
8. Work out $21 + 22 + \cdots + 30$.

??? note "Answers"
    1. 21, 28, 36 (add 6, then 7, then 8).
    2. $12 \times 13 \div 2 = 156 \div 2 = 78$.
    3. $50 \times 51 \div 2 = 2550 \div 2 = 1275$.
    4. $6 + 5 + 4 + 3 + 2 + 1 = 21$. (The 6th triangular number: $6 \times 7 \div 2 = 21$.)
    5. **Yes**: $11 \times 12 \div 2 = 132 \div 2 = 66$, so 66 is the 11th triangular number.
    6. $15 + 21 = 36 = 6 \times 6$, a square number. A 6 by 6 square cut along a staircase splits into a staircase of
       6 rows (21 dots) and one of 5 rows (15 dots).
    7. 45 is the 9th triangular number ($9 \times 10 \div 2 = 45$). With handshakes, the people count is one more
       than the position, so there were **10** people. Check: the first shakes 9 hands, then 8 new, ..., 1, and
       $9 + 8 + \cdots + 1 = 45$. ✓
    8. $1 + \cdots + 30 = 30 \times 31 \div 2 = 465$, and $1 + \cdots + 20 = 210$. So the answer is
       $465 - 210 = 255$.

## Common mistake

**Forgetting to halve.** $10 \times 11 = 110$ is the whole rectangle, which is **two** staircases. The triangular
number is half: 55. A quick check: the 2nd triangular number is 3, and $2 \times 3 = 6$ is too big until you halve
it.

**Off by one with handshakes.** 10 people do not give the 10th triangular number. The first person shakes only 9
hands, so the count is $9 + 8 + \cdots + 1$, the 9th triangular number, 45.

## Where it leads

- Back: [Square numbers](02-square-numbers.md) · Next: [The Fibonacci sequence](04-fibonacci-sequence.md)
- [Level 3 page](index.md) · [Patterns topic page](../index.md)
- The pairing idea grows into a rule for adding any list that goes up by the same step in level 5 of this topic.
- Handshakes and diagonals are counting puzzles: [Counting](../../counting/index.md).
