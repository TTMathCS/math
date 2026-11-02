---
title: "Formulas in words"
---

# Formulas in words

*Algebra · level 3, lesson 5 of 6*

## A question to start

A garden is shaped like a rectangle, 9 metres long and 4 metres wide. You want to put a fence all the way around
it. How much fence do you need?

You could walk round and add: $9 + 4 + 9 + 4 = 26$ metres. Now imagine you run a fence shop, and a hundred
customers a day ask the same question with different gardens. You would want a **rule** that works for every
rectangle, so you can answer each customer in a moment. That rule is called a **formula**, and this lesson is
about reading, using and even running formulas backwards.

## The idea

### What a formula is

A **formula** is a rule that tells you how to work out one amount from other amounts. It is like a recipe: "to get
this, do that with these". For example:

> **cost = 3 dollars × number of tickets**

This says: to find the cost, multiply the number of tickets by 3 dollars. The formula works for any number of
tickets. Each amount that can change (the cost, the number of tickets) is a **variable**: something that varies.
The 3 dollars stays the same; it is a fixed number.

### Filling in values

To use a formula, you **fill in** (or **substitute**) the numbers you know, and then do the arithmetic. With 7
tickets:

$$\text{cost} = 3 \times 7 = 21 \text{ dollars.}$$

With 20 tickets: $3 \times 20 = 60$ dollars. One rule, any number of tickets.

### The perimeter of a rectangle

The **perimeter** of a shape is the distance all the way round its edge. A rectangle has two long sides (each one is
the **length**) and two short sides (each one is the **width**).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 170" role="img" aria-label="A rectangle with two long sides labelled length and two short sides labelled width">
  <rect x="50" y="35" width="220" height="95" fill="#9cc9ea" opacity="0.5"/>
  <line x1="50" y1="35" x2="270" y2="35" stroke="#eea66f" stroke-width="6"/>
  <line x1="50" y1="130" x2="270" y2="130" stroke="#eea66f" stroke-width="6"/>
  <line x1="50" y1="35" x2="50" y2="130" stroke="#7ccf9a" stroke-width="6"/>
  <line x1="270" y1="35" x2="270" y2="130" stroke="#7ccf9a" stroke-width="6"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="160" y="25">length</text><text x="160" y="152">length</text>
    <text x="25" y="87">width</text><text x="295" y="87">width</text>
  </g>
</svg>
</div>

Walking round, you go along a length, a width, a length and a width. So

> **perimeter = 2 × length + 2 × width**

Why can we be sure? Because a rectangle's opposite sides are always equal. The two orange sides are the same, so
together they make "2 × length". The two green sides are the same, so together they make "2 × width". Adding them
covers the whole edge once, with nothing missed and nothing counted twice.

For the garden: perimeter $= 2 \times 9 + 2 \times 4 = 18 + 8 = 26$ metres. Same as walking round.

### Two formulas, one answer

Here is another way to walk round: go along one length and one width (half the trip), then double it.

> **perimeter = 2 × (length + width)**

For the garden: $2 \times (9 + 4) = 2 \times 13 = 26$. The same answer! The two formulas look different, but they
always agree, because "two lots of (length and width)" is the same pile of sides as "two lengths and two widths".
The brackets mean: work out the part inside first.

### Short forms with letters

Writing words each time is slow, so people often use the first letter of each word:

$$P = 2 \times l + 2 \times w$$

Here $P$ stands for perimeter, $l$ for length and $w$ for width. Always say what each letter stands for, and its
**unit** (metres, dollars, minutes), so anyone reading the formula knows what it means.

### Running a formula backwards

A formula can also answer "what do I need?" questions. A fence shop has 30 metres of fence, and a customer wants a
rectangle that is 9 metres long. How wide can it be?

Start from the formula: $30 = 2 \times 9 + 2 \times w$. The two lengths use $2 \times 9 = 18$ metres. That leaves
$30 - 18 = 12$ metres for the two widths. So each width is $12 \div 2 = 6$ metres. Check:
$2 \times 9 + 2 \times 6 = 18 + 12 = 30$. ✓

This is the undoing from the two-step machines lesson. The formula is a machine, and you can run it backwards.

### Making a table from a formula

A formula is handy for making a table. Here is the ticket formula for 1 to 5 tickets:

| Tickets | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Cost (dollars) | 3 | 6 | 9 | 12 | 15 |

Each extra ticket adds 3 dollars. That is what "3 dollars per ticket" means: **per** means "for each one".

## Worked examples

**1. Cost of tickets.** A cinema ticket costs 8 dollars. Write a formula for the cost, and find the cost of 6
tickets.

- cost = 8 dollars × number of tickets.
- For 6 tickets: $8 \times 6 = 48$ dollars.

**2. Perimeter.** Find the perimeter of a rectangle 15 cm long and 7 cm wide, using both formulas.

- $2 \times 15 + 2 \times 7 = 30 + 14 = 44$ cm.
- $2 \times (15 + 7) = 2 \times 22 = 44$ cm. ✓ The two agree.

**3. A formula with a fixed part.** A taxi charges 4 dollars to start plus 2 dollars for each kilometre. Write a
formula and find the cost of a 9 km ride.

- cost = 4 + 2 × kilometres (in dollars).
- For 9 km: $4 + 2 \times 9 = 4 + 18 = 22$ dollars. (Multiply before you add.)

**4. Backwards.** The same taxi ride cost 30 dollars. How far was it?

- Take off the starting charge: $30 - 4 = 26$ dollars for the kilometres.
- Each kilometre is 2 dollars: $26 \div 2 = 13$ km.
- Check: $4 + 2 \times 13 = 4 + 26 = 30$. ✓

**5. Area.** The area of a rectangle is **length × width** (the number of unit squares that cover it). A rug is 3 m
long and has an area of 12 square metres. How wide is it?

- $12 = 3 \times w$, so $w = 12 \div 3 = 4$ metres. Check: $3 \times 4 = 12$. ✓

**6. Time on a timer.** A recipe says: cooking time = 20 minutes + 10 minutes for every 500 g of food. How long for
1500 g?

- 1500 g is 3 lots of 500 g, so 3 lots of 10 minutes, which is 30 minutes.
- Total: $20 + 30 = 50$ minutes.

## Try it

1. Bus tickets cost 2 dollars each. What do 12 tickets cost?
2. Find the perimeter of a rectangle 11 m long and 5 m wide.
3. A square has four equal sides. Write a formula for its perimeter, and use it for a square with sides of 7 cm.
4. A gym charges 10 dollars to join plus 5 dollars for each visit. What does it cost for 8 visits?
5. The same gym: Ravi paid 65 dollars in all. How many visits did he make?
6. A rectangle has a perimeter of 40 cm and a length of 12 cm. How wide is it?
7. A rectangle has an area of 36 square cm. Find two different whole-number lengths and widths it could have.
8. Show that $2 \times l + 2 \times w$ and $2 \times (l + w)$ give the same perimeter for a rectangle 6 cm long and
   2 cm wide. Then explain in words why they always agree.

??? note "Answers"
    1. $2 \times 12 = 24$ dollars.
    2. $2 \times 11 + 2 \times 5 = 22 + 10 = 32$ m.
    3. perimeter = 4 × side. For a 7 cm square: $4 \times 7 = 28$ cm.
    4. $10 + 5 \times 8 = 10 + 40 = 50$ dollars.
    5. Take off the joining fee: $65 - 10 = 55$. Each visit is 5 dollars: $55 \div 5 = 11$ visits. Check:
       $10 + 5 \times 11 = 65$. ✓
    6. The two lengths use $2 \times 12 = 24$ cm, leaving $40 - 24 = 16$ cm for two widths, so the width is
       $16 \div 2 = 8$ cm. Check: $24 + 16 = 40$. ✓
    7. Any two of: 1 by 36, 2 by 18, 3 by 12, 4 by 9, 6 by 6 (a square is a kind of rectangle).
    8. $2 \times 6 + 2 \times 2 = 12 + 4 = 16$ and $2 \times (6 + 2) = 2 \times 8 = 16$. They always agree because
       both count every side exactly once: "two lengths and two widths" and "two lots of a length-and-a-width" are
       the same four sides, just grouped differently.

## Common mistake

**Adding before multiplying.** In "4 + 2 × kilometres", some people work out $4 + 2 = 6$ first and then multiply.
That would mean 6 dollars for every kilometre, which is not what the taxi charges. Multiply first, then add, unless
brackets tell you otherwise.

**Forgetting the units.** "The perimeter is 26" could be 26 metres or 26 centimetres, a big difference for a fence.
Always write the unit with your answer.

## Where it leads

- Previous: [Inequalities in words and symbols](04-inequalities-words.md) · Next:
  [A mind-reading trick](06-mind-reading-trick.md)
- [Level 3 page](index.md) · [Algebra topic page](../index.md)
- Perimeter, area and units are explored in depth in [Measurement](../../measurement/index.md). Rectangles and
  their sides are in [Geometry level 3: the quadrilateral family](../../geometry/level-3/05-quadrilateral-family.md).
- The order of operations (multiply before you add) gets its full story in
  [Numbers level 4: order of operations](../../numbers/level-4/07-order-of-operations.md).
- Prices "per ticket" are rates: see [Ratio](../../ratio/index.md). In [level 4](../level-4/index.md) these
  formulas are written with letters, like $P = 2l + 2w$.
