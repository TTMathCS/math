---
title: "Rectangle numbers"
---

# Rectangle numbers

*Number theory · level 1, lesson 5 of 6*

## A question to start

You have 6 counters. You can lay them out in a neat rectangle: 2 rows of 3. Now take one more counter, so you have
7. Can you make a neat rectangle with 7?

Try it with real counters, coins or buttons before you read on. Move them around as much as you like.

Here is the surprise: **it cannot be done**. 7 counters can only make one long line. And 7 is not the only number
like this. Some numbers love to make rectangles, and some numbers refuse. In this lesson you will find out which
numbers up to 12 are which, and you will meet some of the most important numbers in all of mathematics.

## The idea

### What a rectangle of counters is

A **rectangle of counters** is a neat block of counters with:

- **rows** going across, all the same length, and
- at least **2 rows**, with at least **2 counters in each row**.

There are no gaps, and no counter sticks out. If you put a frame around it, the frame would be a rectangle, the
shape you know from doors and books.

Here are 6 counters as a rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 280 120" role="img" aria-label="Six counters as 2 rows of 3, and the same rectangle turned to make 3 rows of 2">
  <circle cx="40" cy="40" r="9" fill="#eea66f"/>
  <circle cx="66" cy="40" r="9" fill="#eea66f"/>
  <circle cx="92" cy="40" r="9" fill="#eea66f"/>
  <circle cx="40" cy="66" r="9" fill="#eea66f"/>
  <circle cx="66" cy="66" r="9" fill="#eea66f"/>
  <circle cx="92" cy="66" r="9" fill="#eea66f"/>
  <circle cx="200" cy="27" r="9" fill="#eea66f"/>
  <circle cx="226" cy="27" r="9" fill="#eea66f"/>
  <circle cx="200" cy="53" r="9" fill="#eea66f"/>
  <circle cx="226" cy="53" r="9" fill="#eea66f"/>
  <circle cx="200" cy="79" r="9" fill="#eea66f"/>
  <circle cx="226" cy="79" r="9" fill="#eea66f"/>
  <text x="66" y="110" font-size="13" text-anchor="middle" fill="currentColor">2 rows of 3</text>
  <text x="213" y="110" font-size="13" text-anchor="middle" fill="currentColor">3 rows of 2</text>
  <text x="140" y="60" font-size="12" text-anchor="middle" fill="currentColor">turn it</text>
  <path d="M 115 70 L 165 70" stroke="currentColor" stroke-width="1.5" marker-end="none"/>
  <polygon points="165,70 157,66 157,74" fill="currentColor"/>
</svg>
</div>

On the left: **2 rows of 3**. On the right, the same counters turned on their side: **3 rows of 2**. Turning a
rectangle does not make a new one. It is the same rectangle, just looked at from another side, like turning a book
around on the table. So we count it once and call it "2 by 3".

A number that can make at least one rectangle is a **rectangle number**. 6 is a rectangle number.

### Why 7 refuses

Let us try to build a rectangle with 7 counters, one row size at a time.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 110" role="img" aria-label="Seven counters: two rows of 3 leaves one over, three rows of 2 leaves one over, and the only way is a line of 7">
  <circle cx="30" cy="30" r="8" fill="#9cc9ea"/>
  <circle cx="52" cy="30" r="8" fill="#9cc9ea"/>
  <circle cx="74" cy="30" r="8" fill="#9cc9ea"/>
  <circle cx="30" cy="52" r="8" fill="#9cc9ea"/>
  <circle cx="52" cy="52" r="8" fill="#9cc9ea"/>
  <circle cx="74" cy="52" r="8" fill="#9cc9ea"/>
  <circle cx="96" cy="30" r="8" fill="#7ccf9a"/>
  <text x="63" y="95" font-size="13" text-anchor="middle" fill="currentColor">2 rows: 1 left</text>
  <circle cx="170" cy="30" r="8" fill="#9cc9ea"/>
  <circle cx="192" cy="30" r="8" fill="#9cc9ea"/>
  <circle cx="170" cy="52" r="8" fill="#9cc9ea"/>
  <circle cx="192" cy="52" r="8" fill="#9cc9ea"/>
  <circle cx="170" cy="74" r="8" fill="#9cc9ea"/>
  <circle cx="192" cy="74" r="8" fill="#9cc9ea"/>
  <circle cx="214" cy="30" r="8" fill="#7ccf9a"/>
  <text x="192" y="95" font-size="13" text-anchor="middle" fill="currentColor">3 rows: 1 left</text>
  <circle cx="290" cy="52" r="8" fill="#eea66f"/>
  <circle cx="312" cy="52" r="8" fill="#eea66f"/>
  <circle cx="334" cy="52" r="8" fill="#eea66f"/>
  <circle cx="356" cy="52" r="8" fill="#eea66f"/>
  <circle cx="378" cy="52" r="8" fill="#eea66f"/>
  <circle cx="400" cy="52" r="8" fill="#eea66f"/>
  <circle cx="422" cy="52" r="8" fill="#eea66f"/>
  <text x="356" y="95" font-size="13" text-anchor="middle" fill="currentColor">a line of 7</text>
</svg>
</div>

- **2 rows?** Deal 7 counters into 2 rows. That is sharing between two friends, and 7 is odd. So 1 is left over.
  No rectangle.
- **3 rows?** Deal into 3 rows: each row gets 2, and 1 is left over. No rectangle.
- **4 rows?** You need at least 2 in each row, so 4 rows need at least 8 counters. But we only have 7. No.
- **More rows?** Even more counters needed. No.

So 7 counters can only make **one line**: 1 row of 7. We call 7 a **line-only number**.

Notice the last step. You do not have to try every number of rows for ever. Once the rows need more counters than
you have, you can stop.

### Dealing into rows is sharing

Did you notice? Putting counters into 2 rows is **sharing between 2 friends**. Putting counters into 3 rows is
sharing between 3 friends, and so on. Each row is one friend's share.

- If the sharing comes out with **nothing left over**, the rows are all the same length, and you have a rectangle.
- If **something is left over**, the leftover sticks out, and it is not a rectangle.

So "Is 7 a rectangle number?" is the same question as "Can 7 counters be shared fairly among 2, or 3, or more
friends, with nothing left?" For 7, the answer is no, every time.

### Every number up to 12

Let us do this for every number from 2 to 12. Here are all the rectangles we can find.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="Rectangles for the numbers up to 12: 4 is 2 by 2, 6 is 2 by 3, 8 is 2 by 4, 9 is 3 by 3, 10 is 2 by 5, 12 is 2 by 6 and also 3 by 4">
  <circle cx="28" cy="28" r="6" fill="#9cc9ea"/>
  <circle cx="46" cy="28" r="6" fill="#9cc9ea"/>
  <circle cx="28" cy="46" r="6" fill="#9cc9ea"/>
  <circle cx="46" cy="46" r="6" fill="#9cc9ea"/>
  <text x="37" y="72" font-size="12" text-anchor="middle" fill="currentColor">4: 2 by 2</text>
  <circle cx="98" cy="28" r="6" fill="#eea66f"/>
  <circle cx="116" cy="28" r="6" fill="#eea66f"/>
  <circle cx="134" cy="28" r="6" fill="#eea66f"/>
  <circle cx="98" cy="46" r="6" fill="#eea66f"/>
  <circle cx="116" cy="46" r="6" fill="#eea66f"/>
  <circle cx="134" cy="46" r="6" fill="#eea66f"/>
  <text x="116" y="72" font-size="12" text-anchor="middle" fill="currentColor">6: 2 by 3</text>
  <circle cx="188" cy="28" r="6" fill="#eea66f"/>
  <circle cx="206" cy="28" r="6" fill="#eea66f"/>
  <circle cx="224" cy="28" r="6" fill="#eea66f"/>
  <circle cx="242" cy="28" r="6" fill="#eea66f"/>
  <circle cx="188" cy="46" r="6" fill="#eea66f"/>
  <circle cx="206" cy="46" r="6" fill="#eea66f"/>
  <circle cx="224" cy="46" r="6" fill="#eea66f"/>
  <circle cx="242" cy="46" r="6" fill="#eea66f"/>
  <text x="215" y="72" font-size="12" text-anchor="middle" fill="currentColor">8: 2 by 4</text>
  <circle cx="298" cy="28" r="6" fill="#9cc9ea"/>
  <circle cx="316" cy="28" r="6" fill="#9cc9ea"/>
  <circle cx="334" cy="28" r="6" fill="#9cc9ea"/>
  <circle cx="298" cy="46" r="6" fill="#9cc9ea"/>
  <circle cx="316" cy="46" r="6" fill="#9cc9ea"/>
  <circle cx="334" cy="46" r="6" fill="#9cc9ea"/>
  <circle cx="298" cy="64" r="6" fill="#9cc9ea"/>
  <circle cx="316" cy="64" r="6" fill="#9cc9ea"/>
  <circle cx="334" cy="64" r="6" fill="#9cc9ea"/>
  <text x="316" y="90" font-size="12" text-anchor="middle" fill="currentColor">9: 3 by 3</text>
  <circle cx="28" cy="118" r="6" fill="#eea66f"/>
  <circle cx="46" cy="118" r="6" fill="#eea66f"/>
  <circle cx="64" cy="118" r="6" fill="#eea66f"/>
  <circle cx="82" cy="118" r="6" fill="#eea66f"/>
  <circle cx="100" cy="118" r="6" fill="#eea66f"/>
  <circle cx="28" cy="136" r="6" fill="#eea66f"/>
  <circle cx="46" cy="136" r="6" fill="#eea66f"/>
  <circle cx="64" cy="136" r="6" fill="#eea66f"/>
  <circle cx="82" cy="136" r="6" fill="#eea66f"/>
  <circle cx="100" cy="136" r="6" fill="#eea66f"/>
  <text x="64" y="162" font-size="12" text-anchor="middle" fill="currentColor">10: 2 by 5</text>
  <circle cx="168" cy="118" r="6" fill="#eea66f"/>
  <circle cx="186" cy="118" r="6" fill="#eea66f"/>
  <circle cx="204" cy="118" r="6" fill="#eea66f"/>
  <circle cx="222" cy="118" r="6" fill="#eea66f"/>
  <circle cx="240" cy="118" r="6" fill="#eea66f"/>
  <circle cx="258" cy="118" r="6" fill="#eea66f"/>
  <circle cx="168" cy="136" r="6" fill="#eea66f"/>
  <circle cx="186" cy="136" r="6" fill="#eea66f"/>
  <circle cx="204" cy="136" r="6" fill="#eea66f"/>
  <circle cx="222" cy="136" r="6" fill="#eea66f"/>
  <circle cx="240" cy="136" r="6" fill="#eea66f"/>
  <circle cx="258" cy="136" r="6" fill="#eea66f"/>
  <text x="213" y="162" font-size="12" text-anchor="middle" fill="currentColor">12: 2 by 6</text>
  <circle cx="318" cy="118" r="6" fill="#eea66f"/>
  <circle cx="336" cy="118" r="6" fill="#eea66f"/>
  <circle cx="354" cy="118" r="6" fill="#eea66f"/>
  <circle cx="372" cy="118" r="6" fill="#eea66f"/>
  <circle cx="318" cy="136" r="6" fill="#eea66f"/>
  <circle cx="336" cy="136" r="6" fill="#eea66f"/>
  <circle cx="354" cy="136" r="6" fill="#eea66f"/>
  <circle cx="372" cy="136" r="6" fill="#eea66f"/>
  <circle cx="318" cy="154" r="6" fill="#eea66f"/>
  <circle cx="336" cy="154" r="6" fill="#eea66f"/>
  <circle cx="354" cy="154" r="6" fill="#eea66f"/>
  <circle cx="372" cy="154" r="6" fill="#eea66f"/>
  <text x="345" y="180" font-size="12" text-anchor="middle" fill="currentColor">12: 3 by 4</text>
</svg>
</div>

And here is the whole list.

| Number | Rectangles | Kind |
| --- | --- | --- |
| 2 | none (only 1 row of 2) | line-only |
| 3 | none | line-only |
| 4 | 2 by 2 | rectangle |
| 5 | none | line-only |
| 6 | 2 by 3 | rectangle |
| 7 | none | line-only |
| 8 | 2 by 4 | rectangle |
| 9 | 3 by 3 | rectangle |
| 10 | 2 by 5 | rectangle |
| 11 | none | line-only |
| 12 | 2 by 6, and 3 by 4 | rectangle (two ways!) |

The line-only numbers up to 12 are **2, 3, 5, 7 and 11**.

A few things to notice:

- **4 and 9 make squares.** 2 by 2 and 3 by 3 have the same number of rows as counters in a row. A square is a
  special rectangle, so they count.
- **12 makes two different rectangles**, 2 by 6 and 3 by 4. That is why egg boxes often hold 12 eggs (2 rows of 6),
  and muffin trays often hold 12 muffins (3 rows of 4). 12 is a very friendly number.
- **Every even number from 4 up is a rectangle number**, because you can always put it in 2 rows (it shares fairly
  between two). So 2 is the only even line-only number. 2 has to be a line, because 2 rows of 1 is not allowed
  (each row needs at least 2).
- **Odd numbers can be rectangles too.** 9 is 3 by 3. (Later you will find 15 is 3 by 5.)

### What about 1?

1 counter is just one counter. It is not a rectangle, and it is not really a line either. So 1 is left out of the
game. It is neither a rectangle number nor a line-only number. Mathematicians treat 1 as special, and you will see
why in level 2.

### The line-only numbers have a famous name

The line-only numbers, 2, 3, 5, 7, 11, 13, 17, 19, ..., are called **prime numbers** by mathematicians. They are
some of the most studied numbers in all of math, and there are still questions about them that nobody has been able
to answer. You will meet them properly in [Primes and composites](../level-2/04-primes-composites.md) in level 2.

### A rectangle on Mars

The rovers Curiosity and Perseverance, which drive on Mars, each have **6 wheels**: 3 on the left side and 3 on the
right. Seen from above, the wheels make a rectangle: 2 rows of 3.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 170 115" role="img" aria-label="Six wheels in 2 rows of 3, like the wheels of a rover seen from above">
  <circle cx="40" cy="30" r="14" fill="#7ccf9a"/>
  <circle cx="80" cy="30" r="14" fill="#7ccf9a"/>
  <circle cx="120" cy="30" r="14" fill="#7ccf9a"/>
  <circle cx="40" cy="70" r="14" fill="#7ccf9a"/>
  <circle cx="80" cy="70" r="14" fill="#7ccf9a"/>
  <circle cx="120" cy="70" r="14" fill="#7ccf9a"/>
  <text x="80" y="105" font-size="12" text-anchor="middle" fill="currentColor">6 wheels: 2 rows of 3</text>
  <rect x="20" y="10" width="120" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
</svg>
</div>

<figure class="play" data-play="array" data-mode="rect"><span class="ai-tag">AI-created</span><figcaption><b>Rectangle numbers.</b> Every rectangle you can make with n dots. A prime makes only a single row.</figcaption></figure>

## Worked examples

**Example 1. Is 10 a rectangle number?**

1. Try 2 rows. 10 is even, so it shares fairly between two: 5 in each row.
2. That is a rectangle: **2 by 5**. So **yes**, 10 is a rectangle number.
3. Are there more? Try 3 rows: 3 in each row and 1 left over. No. Try 4 rows: 2 in each row and 2 left over. No.
   5 rows of 2 is just 2 by 5 turned around. So 10 has exactly one rectangle.

**Example 2. Is 11 a rectangle number?**

1. 2 rows: 11 is odd, so 1 is left over. No.
2. 3 rows: 3 in each row is 9, and 2 are left over. No.
3. 4 rows: 2 in each row is 8, and 3 are left over. No.
4. 5 rows: 2 in each row is 10, and 1 is left over. No.
5. 6 rows would need at least 12 counters. Too many. Stop.
6. So **11 is line-only**.

**Example 3. Every rectangle for 12.**

1. 2 rows: 6 in each. **2 by 6.**
2. 3 rows: 4 in each. **3 by 4.**
3. 4 rows: 3 in each. But 4 by 3 is 3 by 4 turned around. Already found!
4. 5 rows: 2 in each row is 10, and 2 are left. No.
5. 6 rows: 2 in each. That is 2 by 6 turned around. Already found.
6. So 12 makes **two** rectangles: 2 by 6 and 3 by 4.

Notice step 3: once you start finding the same rectangles turned around, there is nothing new to find.

## Try it

1. Make a rectangle with 8 counters. How many rows? How many in each row?
2. Is 5 a rectangle number? Try 2 rows and 3 rows.
3. Draw the square you can make with 9 counters.
4. Which numbers up to 12 are line-only?
5. Is 14 a rectangle number? Is 13?
6. Is 15 a rectangle number? Draw it.
7. A muffin tray holds 3 rows of 4. How many muffins is that? Can you think of a different rectangle with the same
   number of muffins?
8. Tia says: "Every odd number is line-only." Find a number that shows she is wrong.

??? note "Answers"
    1. **2 rows of 4** (or, turned around, 4 rows of 2). It is the same rectangle: 2 by 4.
    2. **No.** 2 rows: 2 in each and 1 left over. 3 rows: each row needs at least 2, so 3 rows need at least 6
       counters, and we only have 5. So 5 is line-only.
    3. 3 rows of 3. Draw three dots, then three under them, then three more under those.
    4. **2, 3, 5, 7 and 11**.
    5. **14 is a rectangle number**: it is even, so 2 rows of 7. **13 is line-only**: 2 rows of 6 leaves 1, 3 rows of 4
       leaves 1, 4 rows of 3 leaves 1, 5 rows of 2 leaves 3, 6 rows of 2 leaves 1, and 7 rows would need at least
       14 counters, which is too many.
    6. **Yes**: 3 rows of 5. (15 is odd, so 2 rows does not work, but 3 rows does.)
    7. 3 rows of 4 is **12 muffins** (count by 4s: 4, 8, 12). A different rectangle with 12 is **2 rows of 6**, like
       an egg box.
    8. **9** (3 by 3) or **15** (3 by 5). Both are odd and both make rectangles. Being odd only means 2 rows will not
       work; 3 rows (or more) might.

## Common mistake

**Counting a turned rectangle as new.** 3 by 4 and 4 by 3 are the same rectangle, turned. Count it once.

**Forgetting that a square is a rectangle.** 4 counters make a 2 by 2 square. A square has rows all the same length
and is a special rectangle, so 4 **is** a rectangle number.

**Calling a number line-only too soon.** 9 does not work with 2 rows, but it is not line-only: try 3 rows. Keep
trying more rows until the rows would need more counters than you have.

## Where it leads

- Back: [Skip counting by 2s, 5s and 10s](04-skip-counting.md). Next lesson: [Leftovers](06-leftovers.md), where
  we look closely at what is left when sharing does not come out even.
- This level: [Level 1: Odd, even and sharing](index.md). The whole topic: [Number theory](../index.md).
- Rectangles and squares as shapes: [Circles, triangles, squares and rectangles](../../geometry/level-1/01-naming-shapes.md)
  in geometry.
- In level 2, rectangles become **factors**: [Factors with arrays](../level-2/03-factors-arrays.md), and line-only
  numbers become **primes**: [Primes and composites](../level-2/04-primes-composites.md).
