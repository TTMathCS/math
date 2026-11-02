---
title: "Explore: Number sequences and their rules"
---

# Explore: Number sequences and their rules

*Patterns and sequences · step 2 of 5*

## A question to start

A sunflower's seeds sit in spirals. Count the spirals turning one way and the spirals turning the other way, and on
most sunflowers you get two numbers from this list: 21, 34, 55, 89. Where does that list come from? By the end
of this page you will be able to make it yourself.

## The idea

### Sequences, terms and positions

A **sequence** is a list of numbers in order. Each number is a **term**. Every term has a **position**: 1st, 2nd,
3rd and so on.

| Position | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Term | 4 | 7 | 10 | 13 | 16 |

Putting a sequence in a table like this makes two kinds of rule easy to see.

**A "next term" rule** tells you how to get from one term to the next: *start at 4, add 3 each time*.

**A "position" rule** tells you how to get a term straight from its position, without working through all the
ones before it. Here: *multiply the position by 3, then add 1*. Check it: position 1 gives 3 × 1 + 1 = 4,
position 2 gives 3 × 2 + 1 = 7, position 5 gives 3 × 5 + 1 = 16. It works for every one.

The next-term rule is easier to find. The position rule is more powerful: the 100th term is
3 × 100 + 1 = 301 straight away, with no need to write out 99 terms first.

### Three famous sequences

**Square numbers: 1, 4, 9, 16, 25, ...** The number of dots in a square, as in the Play step. Position rule: the
position times itself. The 7th square number is 7 × 7 = 49. Look at the gaps between them: 3, 5, 7, 9, ... the odd
numbers. Each new square adds an L-shaped border of dots, and the border is always 2 dots longer than the last one.

**Triangle numbers: 1, 3, 6, 10, 15, ...** The number of dots in a triangle: a row of 1, then rows of 1 and 2, then
1, 2 and 3, and so on. Next-term rule: add 2, then 3, then 4, then 5. The 4th triangle number is 1 + 2 + 3 + 4 = 10.
Bowling pins are arranged as the 4th triangle number.

**Fibonacci numbers: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...** The rule is unusual: *each term is the sum of
the two terms before it*. 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8 and so on. Leonardo of Pisa, called Fibonacci,
wrote about it in 1202 in a puzzle about rabbits breeding. It turns up in sunflower heads, pine cones and
pineapples, because plants that add each new seed at a fixed turning angle end up packing them in spirals whose
counts are Fibonacci numbers.

## Worked example

**Find the position rule for 2, 7, 12, 17, 22, ... and use it to find the 50th term.**

1. Make the table.

    | Position | 1 | 2 | 3 | 4 | 5 |
    | --- | --- | --- | --- | --- | --- |
    | Term | 2 | 7 | 12 | 17 | 22 |

2. Find the next-term rule: each term is 5 more than the last. So the rule will involve **5 × position**.
3. Compare 5 × position with the terms: 5, 10, 15, 20, 25. Each is 3 too big.
4. So the position rule is **5 × position − 3**. Check: 5 × 1 − 3 = 2 ✓, 5 × 4 − 3 = 17 ✓.
5. The 50th term is 5 × 50 − 3 = **247**.

The trick in step 2 always works when a sequence adds the same amount each time: the amount you add becomes the
number you multiply the position by. The next step, Build, explains why.

## Try it

1. Write the next three terms of 1, 3, 6, 10, 15, ...
2. Write the next three Fibonacci numbers after 55, 89.
3. Find the position rule for 6, 10, 14, 18, ... and the 20th term.
4. Is 100 a term of 3, 7, 11, 15, ...? Explain how you know.
5. The gaps between square numbers are 3, 5, 7, 9, ... What is the gap between the 10th and the 11th square numbers?

??? note "Answers"
    1. 21, 28, 36. Add 6, then 7, then 8.
    2. 144, 233, 377. 55 + 89 = 144, 89 + 144 = 233, 144 + 233 = 377.
    3. It adds 4 each time, so try 4 × position: 4, 8, 12, 16. Each is 2 too small, so the rule is
       **4 × position + 2**. The 20th term is 4 × 20 + 2 = 82.
    4. No. The rule is 4 × position − 1, so every term is one less than a multiple of 4. 100 is a multiple of 4
       itself, so it is never one less than one.
    5. 21. The 10th square is 100 and the 11th is 121; 121 − 100 = 21. The gaps are the odd numbers, and the 10th
       gap (between squares 10 and 11) is 2 × 10 + 1 = 21.

## Common mistake

**Mixing up the position and the term.** In 4, 7, 10, 13, the *3rd term* is 10, but *3* is its position. When a
question asks for "the 20th term", 20 is the position you put **into** the rule, not the answer.

## Where it leads

- Next step: [Build: arithmetic sequences](03-build.md). You will see why the rule above always works and add up
  a hundred terms in seconds.
- Back a step: [Play: what comes next?](01-play.md)
- The Fibonacci numbers come back in [Beyond](05-beyond.md), where they lead to the golden ratio.
