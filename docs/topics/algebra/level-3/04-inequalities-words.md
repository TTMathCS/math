---
title: "Inequalities in words and symbols"
---

# Inequalities in words and symbols

*Algebra · level 3, lesson 4 of 6*

## A question to start

A sign at a fair says: "To ride the roller coaster you must be **at least** 120 cm tall." Maya is 119 cm. Her
brother is exactly 120 cm. Their cousin is 135 cm. Who can ride?

The brother and the cousin can ride; Maya cannot (not yet!). Notice something interesting: an equation like
$□ + 9 = 23$ has **one** answer, but the rule "at least 120 cm" has **lots** of answers: 120, 121, 135, 150, and
every height above. This lesson is about sentences that have many answers, and the symbols for writing them.

## The idea

### Equal and not equal

An **equation** says two things are **the same**, like a balance scale that is level. But often two amounts are not
the same: one is bigger. A sentence that says one amount is bigger or smaller than another is called an
**inequality** ("not equal").

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 140" role="img" aria-label="Two scales: one level, labelled equal; one tipped down on the left, labelled left is more">
  <polygon points="100,120 85,132 115,132" fill="currentColor" opacity="0.6"/>
  <line x1="100" y1="120" x2="100" y2="55" stroke="currentColor" stroke-width="3"/>
  <line x1="30" y1="55" x2="170" y2="55" stroke="currentColor" stroke-width="3"/>
  <rect x="35" y="35" width="30" height="20" fill="#eea66f" stroke="currentColor"/>
  <rect x="135" y="35" width="30" height="20" fill="#eea66f" stroke="currentColor"/>
  <text x="100" y="22" font-size="13" text-anchor="middle" fill="currentColor">level: =</text>
  <polygon points="300,120 285,132 315,132" fill="currentColor" opacity="0.6"/>
  <line x1="300" y1="120" x2="300" y2="65" stroke="currentColor" stroke-width="3"/>
  <line x1="232" y1="83" x2="368" y2="47" stroke="currentColor" stroke-width="3"/>
  <rect x="236" y="42" width="30" height="40" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="334" y="34" width="30" height="20" fill="#7ccf9a" stroke="currentColor"/>
  <text x="300" y="22" font-size="13" text-anchor="middle" fill="currentColor">tipped: left is more, &gt;</text>
</svg>
</div>

### The symbols < and >

- $7 > 3$ is read "7 **is greater than** 3".
- $3 < 7$ is read "3 **is less than** 7".

Both sentences say the same thing, looked at from opposite ends. How to remember which is which: the symbol is
**wide open** on the side of the bigger number and comes to a **point** at the smaller number. The big end faces the
big number. (Some people imagine a hungry mouth that always opens towards the bigger meal.)

### "At least" and "at most"

Everyday words often mean "bigger **or equal**" or "smaller **or equal**".

| Words | Means | Symbol |
| --- | --- | --- |
| more than 5, greater than 5 | 6, 7, 8, ... (not 5) | $n > 5$ |
| less than 5, fewer than 5 | 4, 3, 2, ... (not 5) | $n < 5$ |
| at least 5, 5 or more, no fewer than 5 | 5, 6, 7, ... (5 is allowed) | $n \ge 5$ |
| at most 5, 5 or fewer, no more than 5 | 5, 4, 3, ... (5 is allowed) | $n \le 5$ |

The symbols $\ge$ and $\le$ are the < and > signs with a line underneath. The line is half of an equal sign, a
reminder that "equal" is allowed too. $n \ge 5$ is read "$n$ is greater than or equal to 5".

The whole difference between "more than 5" and "at least 5" is the number 5 itself. "More than 5" leaves 5 out;
"at least 5" lets it in. That one number causes most mistakes with inequalities, so always ask: **is the edge
number allowed?**

### Many answers: the solution set

Look at the sentence $n + 3 < 8$. Which whole numbers make it true? (The **whole numbers** are 0, 1, 2, 3, and so
on, with no fractions.) Try them one at a time:

| $n$ | $n + 3$ | Is it less than 8? |
| --- | --- | --- |
| 0 | 3 | yes |
| 1 | 4 | yes |
| 2 | 5 | yes |
| 3 | 6 | yes |
| 4 | 7 | yes |
| 5 | 8 | **no**: 8 is not less than 8 |
| 6 | 9 | no |

So the answers are 0, 1, 2, 3 and 4. All the answers together are called the **solution set**. We can show them on
a **number line** by putting a dot on each one:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 80" role="img" aria-label="A number line from 0 to 9 with filled dots on 0, 1, 2, 3 and 4">
  <line x1="20" y1="40" x2="340" y2="40" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="30" y1="34" x2="30" y2="46"/><line x1="64" y1="34" x2="64" y2="46"/><line x1="98" y1="34" x2="98" y2="46"/>
    <line x1="132" y1="34" x2="132" y2="46"/><line x1="166" y1="34" x2="166" y2="46"/><line x1="200" y1="34" x2="200" y2="46"/>
    <line x1="234" y1="34" x2="234" y2="46"/><line x1="268" y1="34" x2="268" y2="46"/><line x1="302" y1="34" x2="302" y2="46"/>
    <line x1="336" y1="34" x2="336" y2="46"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="30" cy="40" r="7"/><circle cx="64" cy="40" r="7"/><circle cx="98" cy="40" r="7"/>
    <circle cx="132" cy="40" r="7"/><circle cx="166" cy="40" r="7"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="30" y="66">0</text><text x="64" y="66">1</text><text x="98" y="66">2</text><text x="132" y="66">3</text>
    <text x="166" y="66">4</text><text x="200" y="66">5</text><text x="234" y="66">6</text><text x="268" y="66">7</text>
    <text x="302" y="66">8</text><text x="336" y="66">9</text>
  </g>
</svg>
</div>

### A shortcut: find the edge first

Instead of testing every number, find the **edge**: the number that makes the two sides exactly equal. For
$n + 3 < 8$, the edge is where $n + 3 = 8$, which is $n = 5$. Now think: adding 3 to a smaller number gives a
smaller answer. So every $n$ **below** 5 gives a total below 8, and every $n$ above 5 gives a total above 8. The edge
itself gives exactly 8, which is not "less than 8", so 5 is out. The answer is "all whole numbers less than 5":
0, 1, 2, 3, 4.

Why can we trust this? Because $n + 3$ always moves the same way as $n$: if $n$ goes up by 1, so does $n + 3$. So
the sentence switches from true to false at only one place, the edge.

### Some solution sets go on forever

For $2 \times n > 10$, the edge is $n = 5$ (since $2 \times 5 = 10$), and 5 itself is not allowed. Bigger numbers
give bigger doubles, so the answers are 6, 7, 8, 9, ... and they **never stop**. You cannot list them all, so you
write "all whole numbers greater than 5", or $n > 5$, or draw dots with an arrow going on.

## Worked examples

**1. Reading symbols.** Write each in words and say if it is true: (a) $12 > 9$; (b) $4 \ge 4$; (c) $15 < 10$.

(a) "12 is greater than 9": true. (b) "4 is greater than or equal to 4": true, because 4 is equal to 4.
(c) "15 is less than 10": false.

**2. Words to symbols.** A lift can carry **at most** 8 people. Write this with $p$ for the number of people, and
list the possible numbers.

$p \le 8$. Since you cannot have a fraction of a person, $p$ can be 0, 1, 2, 3, 4, 5, 6, 7 or 8.

**3. A solution set.** List the whole numbers that make $n + 6 \le 10$ true.

The edge: $n + 6 = 10$ gives $n = 4$. Here "equal" is allowed ($\le$), so 4 is in. Smaller $n$ give smaller totals.
The answers are **0, 1, 2, 3, 4**. Check the edge: $4 + 6 = 10$, and $10 \le 10$ is true. ✓ Check 5:
$11 \le 10$ is false, so 5 is out. ✓

**4. Between two numbers.** A school trip needs **at least** 12 children and **at most** 40 (one bus). Write it
with $c$.

Both rules at once: $12 \le c \le 40$, read "12 is less than or equal to $c$, and $c$ is less than or equal to 40".
Any whole number from 12 to 40, including both ends, works.

**5. Times inequalities.** Which whole numbers make $3 \times n < 20$ true?

Edge: $3 \times 6 = 18$ and $3 \times 7 = 21$, so 20 is between them. 6 gives 18 (less than 20, yes); 7 gives 21
(no). The answers are **0, 1, 2, 3, 4, 5, 6**.

## Try it

1. Put < or > between each pair: (a) 45 and 54; (b) 0 and 3; (c) 1000 and 999.
2. Write in symbols, using $a$ for age: (a) you must be older than 10; (b) you must be at least 10; (c) children
   under 5 go free.
3. List all the whole numbers that make $n + 4 < 9$ true.
4. List all the whole numbers that make $n - 2 \le 3$ true. (Careful: $n - 2$ needs $n$ to be at least 2 here.)
5. Describe all the whole numbers that make $5 \times n > 30$ true. Can you list them all?
6. A bag can hold at most 5 kg. You already have 2 kg in it. Write an inequality for $w$, the weight you can still
   add, and give the largest whole number of kilograms.
7. Is "at least 7" the same as "more than 7"? Give a number that shows the difference.
8. Find a whole number that makes both $n > 4$ and $n < 6$ true. How many such numbers are there?

??? note "Answers"
    1. (a) $45 < 54$. (b) $0 < 3$. (c) $1000 > 999$.
    2. (a) $a > 10$. (b) $a \ge 10$. (c) $a < 5$.
    3. Edge: $n + 4 = 9$ at $n = 5$, which is not allowed (< only). Answers: **0, 1, 2, 3, 4**.
    4. Edge: $n - 2 = 3$ at $n = 5$, and $\le$ lets 5 in. Smaller $n$ give smaller results. Answers: **2, 3, 4, 5**
       (and if you allow subtracting past zero, 0 and 1 work too, since $-2$ and $-1$ are less than 3).
    5. Edge: $5 \times 6 = 30$, which is not allowed. The answers are **7, 8, 9, 10, ...**, every whole number
       greater than 6. They go on forever, so you cannot list them all; write $n > 6$.
    6. $2 + w \le 5$. The edge is $w = 3$, which is allowed, so at most **3 kg** more.
    7. No. 7 itself is "at least 7" but it is not "more than 7".
    8. $n = 5$. It is the **only** one: 4 is not more than 4, and 6 is not less than 6.

## Common mistake

**Forgetting about the edge number.** "Fewer than 5" does not include 5; "at most 5" does. Before writing your answer,
test the edge number on its own and decide if it is in or out.

**Mixing up < and >.** Read the sentence aloud from left to right. $3 < 7$ says "3 is less than 7". If what you say
out loud is false, the symbol is the wrong way round.

## Where it leads

- Previous: [Guess and check, and undoing](03-guess-and-check.md) · Next: [Formulas in words](05-formulas-in-words.md)
- [Level 3 page](index.md) · [Algebra topic page](../index.md)
- In [level 4](../level-4/index.md) you solve inequalities like $x + 4 > 9$ for all numbers, including fractions
  and negatives, and draw them with open and closed dots.
- Comparing numbers on a number line starts in [Numbers](../../numbers/index.md); comparing chances with "more
  likely" and "less likely" is in [Probability](../../probability/index.md).
