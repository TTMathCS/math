---
title: "Multiplying bigger numbers"
---

# Multiplying bigger numbers

*Numbers · level 3, lesson 3 of 7*

## A question to start

A school orders 23 boxes of pencils, and each box holds 47 pencils. How many pencils is that?

You could add 47 twenty-three times. That is slow, and one slip spoils it. Or you could learn the method people use
everywhere, the one with the numbers stacked up and little carried digits. Many people learn that method as a recipe
and never know why it works. In this lesson you will see that the method is really just a **rectangle cut into
pieces**, written down in a short way. Once you see the rectangle, the method can never trick you.

## The idea

### Estimate first

Before any careful working, make a rough guess. Round each number to something easy: 23 is close to 20 and 47 is
close to 50. $20 \times 50 = 1000$. So the answer should be **around 1000**. If you later get 108 or 10 810, you will
know at once that something went wrong.

An estimate is not the answer. It is a guard that stands next to the answer and checks it.

### The area model

Remember from the last lesson that $23 \times 47$ can be drawn as a rectangle 23 rows tall and 47 columns wide, with
one square for each pencil. Counting 1081 squares one by one would be dreadful. But we can **split** the rectangle,
just as we split $7 \times 8$ into $7 \times 5$ and $7 \times 3$.

Split each number by its places: $23 = 20 + 3$ and $47 = 40 + 7$. Cut the rectangle along those lines. You get four
smaller rectangles, and each one is easy:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 175" role="img" aria-label="A rectangle 47 wide and 23 tall, cut into four pieces: 20 by 40 is 800, 20 by 7 is 140, 3 by 40 is 120, 3 by 7 is 21">
  <rect x="40" y="25" width="240" height="100" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="280" y="25" width="42" height="100" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="40" y="125" width="240" height="15" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="280" y="125" width="42" height="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="160" y="18">40</text><text x="301" y="18">7</text>
    <text x="25" y="80">20</text><text x="25" y="137">3</text>
    <text x="160" y="80">20 × 40 = 800</text>
    <text x="301" y="72">20 × 7</text><text x="301" y="88">= 140</text>
    <text x="160" y="137" font-size="11">3 × 40 = 120</text>
    <text x="301" y="137" font-size="11">21</text>
    <text x="180" y="166">800 + 140 + 120 + 21 = 1081</text>
  </g>
</svg>
</div>

- $20 \times 40 = 800$ (because $2 \times 4 = 8$, and two tens give two more places)
- $20 \times 7 = 140$
- $3 \times 40 = 120$
- $3 \times 7 = 21$

The four pieces fill the whole rectangle with no gaps and no overlaps, so their total is the answer:

$$23 \times 47 = 800 + 140 + 120 + 21 = 1081$$

The school ordered **1081 pencils**, close to our estimate of 1000. Each of the four little answers is called a
**partial product** ("partial" means "part of"; a **product** is the answer to a multiplication).

**Why does this work?** It is the distributive property from the last lesson, used twice. 23 rows of 47 is 20 rows
of 47 plus 3 rows of 47. And each row of 47 is 40 plus 7. Every square in the big rectangle belongs to exactly one of
the four pieces.

### Partial products in a column

The area model can be written without the drawing. Stack the numbers and list every partial product:

```
       4 7
   ×   2 3
   -------
       2 1     3 × 7
     1 2 0     3 × 40
     1 4 0     20 × 7
     8 0 0     20 × 40
   -------
   1 0 8 1
```

This is exactly the same four pieces as the picture. Many people find this the safest way to multiply, because you
can see what every line means.

### The standard method is the area model, squeezed

The usual written method does the same thing in fewer lines. It joins the pieces in each **row** of the rectangle
together.

- The bottom row of the rectangle is 3 rows of 47: $3 \times 47 = 120 + 21 = 141$.
- The top part is 20 rows of 47: $20 \times 47 = 800 + 140 = 940$.

```
       4 7
   ×   2 3
   -------
     1 4 1     3 × 47
     9 4 0     20 × 47
   -------
   1 0 8 1
```

When you work out $3 \times 47$ in the standard method, you say "3 times 7 is 21, write 1, carry 2. 3 times 4 is 12,
plus the 2 is 14." The carried 2 is really **2 tens** from the 21, being added to the 12 tens from $3 \times 40$.
Nothing magic: it is just tens joining tens.

And the zero at the start of the second line? That line is $20 \times 47$, not $2 \times 47$. Multiplying by 20 is
multiplying by 2 and then by 10, and multiplying by 10 moves every digit one place to the left. The 0 fills the
empty ones place. People who forget the zero are really multiplying by 2 instead of 20.

### Bigger numbers work the same way

For a three-digit number, the rectangle just has more pieces. $368 \times 24$:

- Split 368 into $300 + 60 + 8$ and 24 into $20 + 4$. That is $3 \times 2 = 6$ pieces.
- Or, with the standard method: $4 \times 368 = 1472$ and $20 \times 368 = 7360$. Add: $1472 + 7360 = 8832$.

Estimate first: $368$ is about 400, and 24 is about 25. $400 \times 25 = 10\,000$. We rounded both numbers **up**, so
the true answer should be a bit less than 10 000. And 8832 is. ✓

## Worked examples

**1. One-digit times three-digit: $236 \times 7$.**

Estimate: $200 \times 7 = 1400$, and 236 is more than 200, so a bit more than 1400.

Split: $200 \times 7 = 1400$, $30 \times 7 = 210$, $6 \times 7 = 42$. Total: $1400 + 210 + 42 = 1652$. ✓ (a bit more
than 1400)

**2. Area model: $65 \times 43$.**

Estimate: $70 \times 40 = 2800$.

Pieces: $60 \times 40 = 2400$, $60 \times 3 = 180$, $5 \times 40 = 200$, $5 \times 3 = 15$.
Total: $2400 + 180 + 200 + 15 = 2795$. Close to 2800. ✓

**3. Standard method: $128 \times 35$.**

Estimate: 128 is close to 130, and $130 \times 35 = 100 \times 35 + 30 \times 35 = 3500 + 1050 = 4550$. So the
answer should be a bit under 4550.

- $5 \times 128$: $5 \times 8 = 40$, write 0 carry 4; $5 \times 2 = 10$, plus 4 is 14, write 4 carry 1;
  $5 \times 1 = 5$, plus 1 is 6. That gives **640**.
- $30 \times 128$: write a 0 first, then $3 \times 128 = 384$. That gives **3840**.
- Add: $640 + 3840 = 4480$. A bit under 4550. ✓

**4. Use a nicer number: $99 \times 24$.**

99 is one less than 100. So $99 \times 24 = 100 \times 24 - 1 \times 24 = 2400 - 24 = 2376$. The rectangle is a 100
by 24 rectangle with one row cut off.

**5. Is it right?** Sam works out $52 \times 18$ and gets 466. Without working it out, how can you tell it is wrong?

Estimate: $50 \times 20 = 1000$. 466 is less than half of that, so it is far too small. (Sam probably wrote
$10 \times 52$ as 52 instead of 520.) The right answer: $52 \times 8 = 416$ and $52 \times 10 = 520$, total
$416 + 520 = 936$.

## Try it

1. Estimate, then work out $34 \times 56$ with the area model. Draw the rectangle.
2. Work out $405 \times 6$. Why is there a 0 in the middle of 405, and what does it do to the pieces?
3. Use the standard method for $213 \times 32$.
4. Mars rovers drive slowly and carefully. Suppose a rover drives 30 metres each hour. How far does it go in 56
   hours of driving?
5. Which is bigger: $49 \times 51$ or $50 \times 50$? Work out both.
6. Fill in the missing number: $\square \times 25 = 1000$. Explain how you found it.
7. Find the mistake: $\;47 \times 23$ written as $141 + 94 = 235$.
8. Harder: a rectangle is cut into four pieces with areas 600, 90, 80 and 12. The cuts split the sides into tens and
   ones. What was the multiplication?

??? note "Answers"
    1. Estimate $30 \times 60 = 1800$. Pieces: $30 \times 50 = 1500$, $30 \times 6 = 180$, $4 \times 50 = 200$,
       $4 \times 6 = 24$. Total: $1500 + 180 + 200 + 24 = 1904$.
    2. $400 \times 6 = 2400$, $0 \times 6 = 0$, $5 \times 6 = 30$. Total **2430**. The 0 means there are no tens, so
       the tens piece is empty: it adds nothing, but you must keep the place, or the answer would come out wrong.
    3. $2 \times 213 = 426$ and $30 \times 213 = 6390$. Total $426 + 6390 = 6816$. Estimate: $200 \times 30 = 6000$. ✓
    4. $30 \times 56 = 3 \times 56 \times 10 = 168 \times 10 = 1680$ metres, about 1.7 km.
    5. $50 \times 50 = 2500$. $49 \times 51$: $49 \times 50 = 2450$, plus one more 49 is $2499$. So $50 \times 50$
       is bigger, by exactly 1.
    6. $4 \times 25 = 100$, so $40 \times 25 = 1000$. The missing number is **40**.
    7. The 94 should be **940**: the second line is $20 \times 47$, not $2 \times 47$. Correct:
       $141 + 940 = 1081$. An estimate ($20 \times 50 = 1000$) shows 235 is far too small.
    8. The ones piece is 12 and the tens-times-tens piece is 600. Try tens 30 and 20: $30 \times 20 = 600$. Then the
       ones must give $30 \times b = 90$ (so $b = 3$) and $a \times 20 = 80$ (so $a = 4$), and $4 \times 3 = 12$. ✓
       It was $34 \times 23$, and the total is $600 + 90 + 80 + 12 = 782$.

## Common mistake

**Forgetting the zero on the tens line.** In $47 \times 23$, the second line is $20 \times 47 = 940$. Writing 94 is
like saying 20 boxes hold only 94 pencils. Always estimate first, and this mistake shows up at once.

**Multiplying only matching places.** $23 \times 47$ is not $20 \times 40 + 3 \times 7 = 821$. That uses only two of
the four pieces of the rectangle. Every part of one number must meet every part of the other.

## Where it leads

- Previous: [Times tables with understanding](02-times-tables.md) · Next: [Division with
  remainders](04-long-division.md), which runs this lesson backwards.
- [Level 3 page](index.md) · [Numbers topic page](../index.md)
- The area model returns for multiplying fractions in [Level 4](../level-4/02-multiplying-fractions.md), and for
  multiplying expressions like $(x + 3)(x + 7)$ in [Algebra](../../algebra/index.md).
- Area itself, in square centimetres and square metres: [Measurement](../../measurement/index.md).
