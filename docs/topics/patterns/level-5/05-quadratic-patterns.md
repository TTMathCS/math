---
title: "Quadratic patterns"
---

# Quadratic patterns

*Patterns and sequences · level 5, lesson 5 of 6*

## A question to start

A **diagonal** of a polygon is a straight line joining two corners that are not next to each other. Count them:

| Sides | 3 (triangle) | 4 (square) | 5 (pentagon) | 6 (hexagon) | 7 (heptagon) |
| --- | --- | --- | --- | --- | --- |
| Diagonals | 0 | 2 | 5 | 9 | 14 |

How many diagonals does a polygon with **20** sides have? Drawing it would be a mess of lines. In this lesson you will
find a formula that gives the answer in one line, in two different ways: from the numbers alone, and from a reason
about the shape. (Answer in worked example 4.)

## The idea

### What we are looking for

In lesson 4 you learned that a sequence with constant second differences is **quadratic**: its rule has the form

$$t_n = an^2 + bn + c$$

for some numbers $a$, $b$ and $c$. You also learned the first clue: the second difference is always $2a$, so

$$a = \frac{\text{second difference}}{2}.$$

This lesson finds $b$ and $c$ as well. There are two good methods. Learn both: one is faster, the other is easier to
check.

### Method 1: take away the square part

Once you know $a$, subtract $an^2$ from every term. What is left over is $bn + c$, which is **linear**, and you already
know how to find a linear rule (the constant difference, then the zero term).

Try it on $2, 6, 12, 20, 30$. The second differences are 2, so $a = 1$. Subtract $n^2$:

| $n$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $t_n$ | 2 | 6 | 12 | 20 | 30 |
| $n^2$ | 1 | 4 | 9 | 16 | 25 |
| $t_n - n^2$ | 1 | 2 | 3 | 4 | 5 |

The leftover row is just $n$. So $t_n = n^2 + n$, which factors as $n(n + 1)$. Check: $t_4 = 16 + 4 = 20$. ✓

**Why this always works:** subtracting $an^2$ removes the part of the sequence that makes its second differences
equal to $2a$. What remains has second differences $2a - 2a = 0$, so its first differences are constant: it is linear.

### Method 2: the zero term and three equations

Run the difference table **backwards** one step to find the term at position 0, $t_0$. Putting $n = 0$ into
$an^2 + bn + c$ gives just $c$, so

$$c = t_0.$$

Then $t_1 = a + b + c$ gives $b$. Try it on $3, 8, 15, 24, 35$:

- First differences 5, 7, 9, 11; second differences 2, so $a = 1$.
- Going back: the first difference before 5 must be $5 - 2 = 3$, so $t_0 = 3 - 3 = 0$, and $c = 0$.
- $t_1 = a + b + c$: $3 = 1 + b + 0$, so $b = 2$.
- $t_n = n^2 + 2n = n(n + 2)$. Check: $t_5 = 25 + 10 = 35$. ✓

### Method 3: see it in a picture

Quadratic sequences often come from pictures that grow in **two directions** at once. A pattern that grows in one
direction (a row getting longer) adds the same amount each time: linear. A pattern that grows in two directions (a
rectangle getting both wider and taller) adds more each time: quadratic.

Here is $2, 6, 12, 20$ as rectangles of dots:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 290 150" role="img" aria-label="Rectangles of dots 1 by 2, 2 by 3, 3 by 4 and 4 by 5, holding 2, 6, 12 and 20 dots; in each, an n by n square in blue and one extra row of n in orange">
  <circle cx="25" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="25" cy="96" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="25" y="135" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="65" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="65" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="65" cy="82" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="79" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="79" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="79" cy="82" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="72" y="135" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="120" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="120" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="120" cy="82" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="120" cy="68" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="134" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="134" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="134" cy="82" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="134" cy="68" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="148" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="148" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="148" cy="82" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="148" cy="68" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="134" y="135" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <circle cx="195" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="195" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="195" cy="82" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="195" cy="68" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="195" cy="54" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="209" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="209" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="209" cy="82" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="209" cy="68" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="209" cy="54" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="223" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="223" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="223" cy="82" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="223" cy="68" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="223" cy="54" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="237" cy="110" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="237" cy="96" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="237" cy="82" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="237" cy="68" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="237" cy="54" r="5" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <text x="216" y="135" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <text x="145" y="20" font-size="12" text-anchor="middle" fill="currentColor">n by n square (blue) + a row of n (orange)</text>
</svg>
</div>

Picture $n$ is $n$ dots wide and $n + 1$ dots tall, so it holds $n(n + 1)$ dots. The colours show the same rule a
second way: an $n$ by $n$ square, which is $n^2$, plus one extra row of $n$. So $n(n + 1) = n^2 + n$, exactly what
Method 1 found. When the numbers and the picture agree, you can be sure of the rule: the picture explains **why**
every term follows it, not just the first five.

### Some famous quadratic sequences

| Name | Terms | Rule | Picture |
| --- | --- | --- | --- |
| square numbers | 1, 4, 9, 16 | $n^2$ | $n$ by $n$ square |
| oblong (rectangle) numbers | 2, 6, 12, 20 | $n(n + 1)$ | $n$ by $n + 1$ rectangle |
| triangular numbers | 1, 3, 6, 10 | $\dfrac{n(n + 1)}{2}$ | half an oblong |
| pentagonal numbers | 1, 5, 12, 22 | $\dfrac{n(3n - 1)}{2}$ | nested pentagons |

Notice that the rule can have fractions in it even though every term is a whole number. In $\dfrac{n(n + 1)}{2}$, one
of $n$ and $n + 1$ is always even, so the division always comes out exactly.

<figure class="play" data-play="seq" data-kind="square"><span class="ai-tag">AI-created</span><figcaption><b>A quadratic pattern.</b> The bar tops curve upward.</figcaption></figure>

## Worked examples

**1. A rule with a fraction.** Find the rule for $5, 8, 14, 23, 35$.

- First differences 3, 6, 9, 12; second differences 3. So $a = 1.5$.
- Subtract $1.5n^2$: $5 - 1.5 = 3.5$, $8 - 6 = 2$, $14 - 13.5 = 0.5$, $23 - 24 = -1$, $35 - 37.5 = -2.5$.
- The leftover goes down by 1.5 each time, starting at 3.5. Its zero term is $3.5 + 1.5 = 5$, so it is $-1.5n + 5$.
- $t_n = 1.5n^2 - 1.5n + 5$. Check $n = 5$: $37.5 - 7.5 + 5 = 35$. ✓
- Neater: $t_n = \dfrac{3n(n - 1)}{2} + 5$.

**2. Is it a term?** The sequence $7, 9, 13, 19, 27$ has first differences 2, 4, 6, 8 and second differences 2, so
$a = 1$. Subtracting $n^2$ leaves $6, 5, 4, 3, 2$, which is $7 - n$. So $t_n = n^2 - n + 7$.

Is 247 a term? Solve $n^2 - n + 7 = 247$, that is $n^2 - n = 240$, or $n(n - 1) = 240$. Two whole numbers next to
each other that multiply to 240: $16 \times 15$. So $n = 16$, and **247 is the 16th term**. Check:
$256 - 16 + 7 = 247$. ✓

**3. Pentagonal numbers.** $1, 5, 12, 22, 35$: first differences 4, 7, 10, 13; second differences 3, so $a = 1.5$.
Zero term: the first difference before 4 is 1, so $t_0 = 1 - 1 = 0$ and $c = 0$. Then $1 = 1.5 + b$, so $b = -0.5$.
The rule is $t_n = 1.5n^2 - 0.5n = \dfrac{n(3n - 1)}{2}$. The 10th pentagonal number is $\dfrac{10 \times 29}{2} = 145$.

**4. The diagonals.** Let $s$ be the number of sides, starting at $s = 3$.

*From the numbers:* $0, 2, 5, 9, 14$ has first differences 2, 3, 4, 5 and second differences 1, so the rule has
$\tfrac12 s^2$ in it. Subtracting $\tfrac12 s^2$ from each term ($4.5, 8, 12.5, 18, 24.5$) leaves
$-4.5, -6, -7.5, -9, -10.5$, which goes down by 1.5 for each extra side: that is $-1.5s$. So the number of diagonals is
$\tfrac12 s^2 - 1.5s = \dfrac{s(s - 3)}{2}$.

*From the shape:* each corner joins to every other corner except itself and its two neighbours, so each of the $s$
corners starts $s - 3$ diagonals. That counts $s(s - 3)$, but every diagonal has two ends and was counted from both,
so divide by 2. Same formula, now with a reason.

For 20 sides: $\dfrac{20 \times 17}{2} = 170$ diagonals.

## Try it

1. Find the rule for $3, 6, 11, 18, 27$.
2. Find the rule for $2, 8, 18, 32, 50$.
3. Find the rule for $0, 3, 8, 15, 24$, and factor it.
4. Find the rule for $4, 10, 18, 28, 40$. Draw (or describe) a dot picture that grows like this.
5. Use the pentagonal rule to find the 20th pentagonal number. Check the first three terms against the rule.
6. A quadratic sequence starts $6, 15, 28$. Find its rule, factor it, and find $t_4$ and $t_5$.
7. Is 120 a term of $t_n = n^2 + 2n$? Is 140?
8. In a tournament, every team plays every other team **twice** (home and away). With 2, 3, 4, 5 teams there are
   2, 6, 12, 20 games. Find a rule from the numbers, then explain it with a reason. How many games for 18 teams?

??? note "Answers"
    1. First differences 3, 5, 7, 9; second 2, so $a = 1$. Subtract $n^2$: $2, 2, 2, 2, 2$. So $t_n = n^2 + 2$.
    2. First differences 6, 10, 14, 18; second 4, so $a = 2$. Subtract $2n^2$: all 0. So $t_n = 2n^2$.
    3. Second difference 2, $a = 1$. Subtract $n^2$: $-1$ every time. So $t_n = n^2 - 1 = (n - 1)(n + 1)$.
    4. First differences 6, 8, 10, 12; second 2, $a = 1$. Subtract $n^2$: $3, 6, 9, 12, 15$, which is $3n$. So
       $t_n = n^2 + 3n = n(n + 3)$. A picture: a rectangle $n$ wide and $n + 3$ tall, or an $n$ by $n$ square with three
       extra rows of $n$ on top.
    5. $\dfrac{20 \times 59}{2} = 590$. Check: $n = 1$ gives $\dfrac{1 \times 2}{2} = 1$; $n = 2$ gives
       $\dfrac{2 \times 5}{2} = 5$; $n = 3$ gives $\dfrac{3 \times 8}{2} = 12$. ✓
    6. First differences 9, 13; second 4, so $a = 2$. Subtract $2n^2$: $4, 7, 10$, which is $3n + 1$. So
       $t_n = 2n^2 + 3n + 1 = (2n + 1)(n + 1)$. Then $t_4 = 9 \times 5 = 45$ and $t_5 = 11 \times 6 = 66$.
    7. $n^2 + 2n = 120$: try $n = 10$: $100 + 20 = 120$. Yes, the 10th term. For 140: $n = 10$ gives 120 and $n = 11$
       gives $121 + 22 = 143$, and the terms only go up, so 140 is skipped: not a term.
    8. With $t$ teams: 2, 6, 12, 20 are $1 \times 2$, $2 \times 3$, $3 \times 4$, $4 \times 5$, so the rule is
       $t(t - 1)$. Reason: each of the $t$ teams has a home game against each of the other $t - 1$ teams, and every
       game is exactly one team's home game, so there are $t(t - 1)$ games. For 18 teams: $18 \times 17 = 306$.

## Common mistake

**Using the second difference as $a$.** The second difference is $2a$. For $2, 8, 18, 32$ the second difference is 4,
so $a = 2$, not 4. Method 1 catches the slip for you: subtracting $4n^2$ leaves $-2, -8, -18, -32$, whose differences
($-6, -10, -14$) are not constant, so the leftover is not linear and something went wrong.

**Not checking the rule.** It takes ten seconds to put $n = 4$ or $n = 5$ into your finished rule. A single wrong sign
in $b$ or $c$ shows up at once.

## Where it leads

- Previous: [Finite differences](04-finite-differences.md) · Next: [Arithmetic sequences in real life](06-real-life.md).
- [Level 5 page](index.md) · [Patterns topic page](../index.md)
- The triangular and square numbers as dot pictures: [Triangular numbers](../level-3/03-triangular-numbers.md) and
  [Square numbers](../level-3/02-square-numbers.md) in level 3.
- Counting diagonals and games by "each one, then divide by the double count" is a key idea in
  [Counting](../../counting/index.md).
- Graphs of quadratic rules are parabolas: [Algebra level 7](../../algebra/level-7/01-quadratic-relations.md).
