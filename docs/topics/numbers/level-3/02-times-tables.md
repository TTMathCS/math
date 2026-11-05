---
title: "Times tables with understanding"
---

# Times tables with understanding

*Numbers · level 3, lesson 2 of 7*

## A question to start

Suppose you have forgotten what $7 \times 8$ is. Completely. No idea.

Can you still find it, quickly, without counting up in 7s from the start? Yes: you know $7 \times 5 = 35$ (half of
$7 \times 10$), and you know $7 \times 3 = 21$. Add them: $35 + 21 = 56$. So $7 \times 8 = 56$.

This lesson is about that trick and a few others. The times tables are not a hundred separate facts to learn by
heart. They are a web, and every fact is tied to easier facts. If you lose one, you can rebuild it in seconds.

## The idea

### What a times fact means

$7 \times 8$ means **7 groups of 8**, or 8 added up 7 times: $8 + 8 + 8 + 8 + 8 + 8 + 8$. We can draw it as an
**array**: a rectangle of dots or squares with 7 rows and 8 in each row. Counting the squares gives the answer.

### Turning the array: half the facts for free

Turn a 7 by 8 rectangle on its side and it becomes 8 rows of 7. It is the same rectangle, with the same number of
squares. So

$$7 \times 8 = 8 \times 7$$

The order does not matter when you multiply two numbers. Mathematicians call this the **commutative property**
("commute" means to travel back and forth, and the numbers can swap places). It means that if you know $8 \times 7$,
you also know $7 \times 8$.

That cuts the work a lot. In the tables from 1 to 10, once you know the easy ones (1s, 2s, 5s and 10s) and remember
that the order does not matter, only **21 facts** are left that use just 3, 4, 6, 7, 8 and 9. Six of them are
squares like $6 \times 6$.

### Splitting: build a hard fact from easy ones

Look at the 7 by 8 rectangle again. Cut it with one straight line into a 7 by 5 piece and a 7 by 3 piece.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 140" role="img" aria-label="A rectangle of 7 rows and 8 columns. The first 5 columns are orange (7 times 5 is 35) and the last 3 columns are blue (7 times 3 is 21)">
  <rect x="20" y="15" width="70" height="98" fill="#eea66f"/>
  <rect x="90" y="15" width="42" height="98" fill="#9cc9ea"/>
  <g stroke="currentColor" stroke-width="0.6">
    <line x1="34" y1="15" x2="34" y2="113"/><line x1="48" y1="15" x2="48" y2="113"/><line x1="62" y1="15" x2="62" y2="113"/>
    <line x1="76" y1="15" x2="76" y2="113"/><line x1="104" y1="15" x2="104" y2="113"/><line x1="118" y1="15" x2="118" y2="113"/>
    <line x1="20" y1="29" x2="132" y2="29"/><line x1="20" y1="43" x2="132" y2="43"/><line x1="20" y1="57" x2="132" y2="57"/>
    <line x1="20" y1="71" x2="132" y2="71"/><line x1="20" y1="85" x2="132" y2="85"/><line x1="20" y1="99" x2="132" y2="99"/>
  </g>
  <rect x="20" y="15" width="112" height="98" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="8" x2="90" y2="120" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="55" y="132">5</text><text x="111" y="132">3</text><text x="10" y="68">7</text>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="160" y="45">7 × 5 = 35</text>
    <text x="160" y="70">7 × 3 = 21</text>
    <text x="160" y="100">7 × 8 = 35 + 21 = 56</text>
  </g>
</svg>
</div>

Not one square is lost, and none is counted twice. So the two pieces together are the whole rectangle:

$$7 \times 8 = 7 \times 5 + 7 \times 3 = 35 + 21 = 56$$

This is called the **distributive property**: multiplying by $5 + 3$ is the same as multiplying by 5 and by 3
separately and adding. ("Distribute" means to hand out: the 7 is handed out to the 5 and to the 3.) It is the most
useful idea in this whole lesson, because it lets you break **any** multiplication into easier pieces. Next lesson,
it will let you multiply numbers of any size.

You can split in whatever way is easiest for you:

- $6 \times 7 = 5 \times 7 + 1 \times 7 = 35 + 7 = 42$ ("five sevens and one more seven")
- $8 \times 9 = 8 \times 10 - 8 \times 1 = 80 - 8 = 72$ (ten 8s take away one 8)
- $12 \times 6 = 10 \times 6 + 2 \times 6 = 60 + 12 = 72$

The second one uses taking away instead of adding. It works because an 8 by 10 rectangle with one column of 8 removed
is an 8 by 9 rectangle.

### Doubling

Some tables are just doubles of others.

- The **2s** are doubles: $2 \times 7 = 7 + 7 = 14$.
- The **4s** are doubles of doubles: $4 \times 7$ is double 14, which is 28.
- The **8s** are doubled three times: $8 \times 7$ is double 28, which is 56.

Why? Because 4 groups is 2 groups and 2 more groups, so 4 groups of 7 is twice 2 groups of 7. In the same way 8
groups is twice 4 groups. Doubling is easy in your head, so the 4s and 8s become easy too.

### Doubling and halving

Here is a surprising trick: if you **double one number and halve the other**, the answer does not change.

$$16 \times 25 = 8 \times 50 = 4 \times 100 = 400$$

Why? Picture the rectangle. Cut it in half down the middle, and put one half on top of the other. The new rectangle
is half as wide and twice as tall. It has the same squares, just moved.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 120" role="img" aria-label="A rectangle 2 rows by 6 columns, cut in half, becomes a rectangle 4 rows by 3 columns with the same 12 squares">
  <rect x="20" y="40" width="36" height="24" fill="#eea66f"/>
  <rect x="56" y="40" width="36" height="24" fill="#9cc9ea"/>
  <g stroke="currentColor" stroke-width="0.6">
    <line x1="32" y1="40" x2="32" y2="64"/><line x1="44" y1="40" x2="44" y2="64"/><line x1="68" y1="40" x2="68" y2="64"/><line x1="80" y1="40" x2="80" y2="64"/>
    <line x1="20" y1="52" x2="92" y2="52"/>
  </g>
  <rect x="20" y="40" width="72" height="24" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="56" y1="34" x2="56" y2="70" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="56" y="92" font-size="13" text-anchor="middle" fill="currentColor">2 × 6 = 12</text>
  <text x="160" y="58" font-size="22" text-anchor="middle" fill="currentColor">→</text>
  <rect x="240" y="16" width="36" height="24" fill="#9cc9ea"/>
  <rect x="240" y="40" width="36" height="24" fill="#eea66f"/>
  <g stroke="currentColor" stroke-width="0.6">
    <line x1="252" y1="16" x2="252" y2="64"/><line x1="264" y1="16" x2="264" y2="64"/>
    <line x1="240" y1="28" x2="276" y2="28"/><line x1="240" y1="52" x2="276" y2="52"/>
  </g>
  <rect x="240" y="16" width="36" height="48" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="240" y1="40" x2="276" y2="40" stroke="currentColor" stroke-width="2"/>
  <text x="258" y="92" font-size="13" text-anchor="middle" fill="currentColor">4 × 3 = 12</text>
</svg>
</div>

The trick is useful when halving one number makes it easy and doubling the other makes it round, like 25, 50 and
100.

### The 9s: a pattern with a reason

Write out the 9 times table and look at it:

| $9 \times$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| answer | 9 | 18 | 27 | 36 | 45 | 54 | 63 | 72 | 81 | 90 |

Two patterns jump out:

- The tens digit goes **up** by 1 each time (0, 1, 2, 3, ...) while the ones digit goes **down** by 1 (9, 8, 7, 6,
  ...).
- The two digits always **add to 9**: $1 + 8$, $2 + 7$, $3 + 6$, and so on.

**Why?** Because 9 is one less than 10. Nine groups of something is ten groups take away one group:

$$9 \times 7 = 10 \times 7 - 7 = 70 - 7 = 63$$

Each step along the table adds 9, which is the same as adding 10 and taking away 1. Adding 10 pushes the tens digit
up by one; taking away 1 pulls the ones digit down by one. One digit goes up, the other goes down, so their total
stays the same: 9.

There is also a quick check: for $9 \times n$ (with $n$ from 1 to 10), the tens digit is one less than $n$. So
$9 \times 7$ starts with 6, and the ones digit must make the total 9, so it is 3: 63.

### Multiplying by 10, 100 and 1000

$10 \times 34 = 340$. People say "add a zero", but that is a shortcut, not the reason. The reason is place value.
34 is 3 tens and 4 ones. Ten times that is 3 hundreds and 4 tens: 340. **Every digit moves one place to the left**,
because each place is worth ten times the place to its right. The zero then fills the empty ones place.

In the same way, multiplying by 100 moves every digit two places left ($34 \times 100 = 3400$), and by 1000 three
places ($34 \times 1000 = 34\,000$).

This lets you use small facts for big numbers: $30 \times 7$ is $10 \times 3 \times 7 = 10 \times 21 = 210$.
And $60 \times 80$ is $6 \times 8 \times 10 \times 10 = 48 \times 100 = 4800$.

<figure class="play" data-play="hundred" data-mode="multiples"><span class="ai-tag">AI-created</span><figcaption><b>A times table on the hundred chart.</b> Pick a number and see its multiples.</figcaption></figure>

## Worked examples

**1. Rebuild $6 \times 8$.** Split 6 into 5 and 1: $5 \times 8 = 40$ (half of 80) and $1 \times 8 = 8$. Total
$40 + 8 = 48$.

**2. Rebuild $9 \times 6$.** Ten sixes take away one six: $60 - 6 = 54$. Check with the digit pattern: the tens
digit is one less than 6, so 5, and $5 + 4 = 9$. ✓

**3. Use doubling for $8 \times 6$.** Double 6 is 12, double 12 is 24, double 24 is **48**. Same as example 1, as it
must be.

**4. Doubling and halving: $35 \times 4$.** Halve the 4 and double the 35: $70 \times 2 = 140$.

**5. Bigger numbers: $40 \times 70$.** $4 \times 7 = 28$, and two tens give two more places: $28 \times 100 = 2800$.

**6. Split a two-digit number: $7 \times 14$.** $7 \times 10 = 70$, $7 \times 4 = 28$, so $7 \times 14 = 98$.

## Try it

1. Use $8 \times 5 = 40$ and $8 \times 2 = 16$ to find $8 \times 7$.
2. Use ten nines to find $9 \times 8$. Check with the digit pattern.
3. Find $4 \times 9$ by doubling, and $8 \times 9$ by doubling again.
4. Use doubling and halving: (a) $14 \times 5$ (b) $25 \times 12$ (c) $45 \times 4$.
5. Work out: (a) $56 \times 10$ (b) $56 \times 100$ (c) $30 \times 50$ (d) $200 \times 80$.
6. Draw a picture to show why $6 \times 9 = 5 \times 9 + 9$.
7. Explain why the ones digits of the 5 times table are always 5 or 0.
8. Harder: $11 \times 12$. Split one of the numbers to find it.

??? note "Answers"
    1. Split 7 into 5 and 2: $8 \times 7 = 40 + 16 = 56$.
    2. $9 \times 8 = 10 \times 8 - 8 = 80 - 8 = 72$. Tens digit one less than 8 is 7, and $7 + 2 = 9$. ✓
    3. $2 \times 9 = 18$, $4 \times 9 = 36$, $8 \times 9 = 72$.
    4. (a) $7 \times 10 = 70$. (b) Halve 12, double 25: $50 \times 6 = 300$ (or once more: $100 \times 3 = 300$).
       (c) $90 \times 2 = 180$.
    5. (a) 560. (b) 5600. (c) $3 \times 5 = 15$, then two more places: 1500. (d) $2 \times 8 = 16$, then three more
       places: 16 000.
    6. Draw 6 rows of 9 squares. Draw a line under the 5th row. Above the line are 5 rows of 9 ($5 \times 9 = 45$);
       below it is 1 row of 9. So $6 \times 9 = 45 + 9 = 54$.
    7. Each step of the 5 times table adds 5. Starting from 0, adding 5 lands on a ones digit of 5, adding 5 again
       lands on 0 (because $5 + 5 = 10$), and so on, back and forth. Another way: two 5s make a 10, so an even number
       of 5s is a whole number of tens (ends in 0), and an odd number is some tens and one more 5 (ends in 5).
    8. $11 \times 12 = 10 \times 12 + 1 \times 12 = 120 + 12 = 132$.

## Common mistake

**Thinking "times 10" always means "add a zero".** It works for whole numbers, but next year you will multiply
$2.5 \times 10$, and "adding a zero" would give 2.50, which is the same as 2.5. The real rule is "every digit moves
one place left", which gives 25. Learn the reason, not just the shortcut.

**Splitting both numbers the wrong way.** $7 \times 8$ is **not** $7 \times 5 + 3$. When you split the 8 into
$5 + 3$, the 7 has to multiply **both** pieces. The picture shows why: both pieces of the rectangle are 7 rows tall.

## Where it leads

- Previous: [Numbers to a million and beyond](01-millions-and-beyond.md) · Next: [Multiplying bigger
  numbers](03-multi-digit-multiplication.md), where splitting does all the work.
- [Level 3 page](index.md) · [Numbers topic page](../index.md)
- Patterns in the tables, and why some numbers appear in many tables: [Patterns](../../patterns/index.md) and
  [Number theory](../../number-theory/index.md) (multiples and factors).
- The distributive property again, with letters: [Algebra](../../algebra/index.md).
