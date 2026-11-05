---
title: "The Fibonacci sequence"
---

# The Fibonacci sequence

*Patterns and sequences · level 3, lesson 4 of 6*

## A question to start

A staircase has 5 steps. You climb it taking either **1 step or 2 steps** at a time. You could go 1, 1, 1, 1, 1. Or
2, 2, 1. Or 1, 2, 2. How many different ways are there to reach the top?

Try it with a pencil before reading on. The answer is **8**. And if the staircase had 10 steps, the answer would be
89. Those two numbers belong to one of the most famous sequences in mathematics, which was first written about in a
book in **1202**, in a puzzle about rabbits.

## The idea

### The rule: add the two before

Most sequences so far had a rule that looks at **one** term to make the next one ("add 3"). The Fibonacci sequence
looks at **two**:

**Start with 1 and 1. After that, each term is the sum of the two terms before it.**

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Term | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 | 144 |

$1 + 1 = 2$, $1 + 2 = 3$, $2 + 3 = 5$, $3 + 5 = 8$, $5 + 8 = 13$, and so on. These are the **Fibonacci
numbers**. Notice the jump method from lesson 1 does not work here: the gaps (0, 1, 1, 2, 3, 5, ...) keep changing.
In fact the gaps are the Fibonacci numbers themselves! To find the 12th term, you really do have to walk through the
terms one by one.

### Where the name comes from: the rabbit puzzle

Leonardo of Pisa, later nicknamed Fibonacci, wrote a big book of arithmetic in 1202, the *Liber Abaci* ("book of
calculation"). It helped bring the digits 0 to 9 that we use today into Europe. One puzzle in it is about rabbits.
Here is a tidy version of it:

- A pair of baby rabbits is put in a field in month 1.
- A pair takes one month to grow up. From then on, every grown-up pair has one new baby pair each month.
- No rabbits ever leave. (It is a puzzle, not real life.)

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Grown-up pairs | 0 | 1 | 1 | 2 | 3 | 5 | 8 |
| Baby pairs | 1 | 0 | 1 | 1 | 2 | 3 | 5 |
| Total pairs | 1 | 1 | 2 | 3 | 5 | 8 | 13 |

**Why does the total follow the "add the two before" rule?** Take month 7. Every pair alive in month 6 is still
there: that is 8 pairs. On top of those come the new babies, one for each grown-up pair. And which pairs are grown up
in month 7? Exactly the pairs that were alive back in month 5, because they have all had at least a month to grow:
that is 5. So month 7 has $8 + 5 = 13$ pairs. The same reasoning works for every month: **this month = last month +
the month before**.

(Fibonacci's book starts a little differently, with a pair that is already grown up, so its counts run 2, 3, 5,
8, ... and reach 377 pairs at the end of the year. It is the same sequence, just started one step along.)

### Why the staircase is Fibonacci too

Go back to the staircase. Think about your **last** move to the top. It was either a 1-step or a 2-step.

- If it was a 1-step, you were standing on step 4 before it. So the number of ways like this is the number of ways
  to climb 4 steps.
- If it was a 2-step, you were on step 3. The number of ways like this is the number of ways to climb 3 steps.

So: ways for 5 steps = ways for 4 steps + ways for 3 steps. That is the Fibonacci rule again! Starting from 1 step
(1 way) and 2 steps (2 ways: 1+1, or 2), the counts go 1, 2, 3, 5, **8**. For 10 steps you get 89.

This is what makes a pattern feel deep: two puzzles that look different (rabbits, stairs) obey the same rule for the
same **reason**: "the last thing that happened was one of two kinds".

### A rectangle of squares

Draw a square of side 1, and another next to it. Under them, a square of side 2. Beside all that, a square of side
3. Then 5 underneath, then 8 beside. Each new square fits exactly along the longest edge so far, because its side is
the sum of the two before.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 216" role="img" aria-label="Squares of side 1, 1, 2, 3, 5 and 8 fitted together into a rectangle 13 wide and 8 tall">
  <rect x="60" y="10" width="22" height="22" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="71" y="26" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="82" y="10" width="22" height="22" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="93" y="26" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="60" y="32" width="44" height="44" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="82" y="59" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <rect x="104" y="10" width="66" height="66" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="137" y="48" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <rect x="60" y="76" width="110" height="110" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="136" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="170" y="10" width="176" height="176" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="258" y="103" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <text x="203" y="206" font-size="12" text-anchor="middle" fill="currentColor">squares 1, 1, 2, 3, 5, 8 fill an 8 by 13 rectangle</text>
</svg>
</div>

The squares fill a rectangle 8 tall and 13 wide. Now count the area two ways. Adding up the squares:
$1 + 1 + 4 + 9 + 25 + 64 = 104$. The whole rectangle: $8 \times 13 = 104$. ✓ So adding the **squares** of the first
few Fibonacci numbers gives two Fibonacci numbers multiplied together. If you draw a quarter circle inside each
square, corner to corner, you get the famous Fibonacci spiral.

### Odd, odd, even

Look at which terms are even: 2, 8, 34, 144, ... They sit at positions 3, 6, 9, 12: every third term. Why? Odd + odd
makes even; odd + even makes odd; even + odd makes odd. So the pattern of odd and even goes

odd, odd, **even**, odd, odd, **even**, ...

and it must repeat forever, because each pair of neighbours decides the next one, and after "odd, odd, even" comes
"odd, odd" again, the same as at the start.

### Sunflowers and pinecones

Look closely at the middle of a sunflower: the seeds sit in spirals, some turning clockwise and some anticlockwise.
Count the spirals each way, and on many sunflowers you get two Fibonacci numbers next to each other, like 34 and 55,
or 55 and 89. Pinecones often show 8 and 13, and pineapples often show 8 and 13 as well.

But **often is not always**. When people have counted the spirals on large numbers of real sunflowers, most fitted
the Fibonacci pattern, and a fair number did not: some had near misses, some had other numbers. Plants grow by
adding each new seed at a fixed turning angle, and that tends to produce Fibonacci spirals, but nature is messy. Be
suspicious of anyone who says Fibonacci numbers are "everywhere".

<figure class="play" data-play="seq" data-kind="fib"><span class="ai-tag">AI-created</span><figcaption><b>Fibonacci.</b> Each term is the two before added together.</figcaption></figure>

## Worked examples

**1. Continue the sequence to the 15th term.** From the table, the 11th and 12th terms are 89 and 144.
$89 + 144 = 233$, $144 + 233 = 377$, $233 + 377 = 610$. So the 13th, 14th and 15th terms are 233, 377, 610.

**2. All the ways to climb 4 steps.** The rule says 5 ways. List them to check: 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2.
Five. ✓

**3. Is the 18th Fibonacci number odd or even?** 18 is in the 3 times table, so it lands on one of the "even" places in
the "odd, odd, even" pattern: **even**. (It is 2584.)

**4. A Fibonacci-style sequence with a different start.** Use the same rule but start with 2 and 5:
2, 5, 7, 12, 19, 31, 50, ... ($2 + 5 = 7$, $5 + 7 = 12$, $7 + 12 = 19$, ...)

**5. Running it backwards.** A Fibonacci-style sequence has ?, ?, 10, 16. Find the missing terms.

- 16 is the sum of the two terms just before it, which are the second ? and 10. So the second ? is
  $16 - 10 = 6$.
- Then 10 is the sum of the first ? and 6, so the first ? is $10 - 6 = 4$.
- The sequence is 4, 6, 10, 16. Check: $4 + 6 = 10$ ✓, $6 + 10 = 16$ ✓.

## Try it

1. Write the three Fibonacci numbers after 34, 55.
2. Make a Fibonacci-style sequence starting 3, 4. Write six terms.
3. How many ways are there to climb 6 steps, taking 1 or 2 at a time?
4. Is the 20th Fibonacci number odd or even? Explain without working it out.
5. In the rabbit puzzle, how many pairs are there in month 10?
6. Add $1 + 1 + 4 + 9 + 25 + 64 + 169$ (the squares of the first seven Fibonacci numbers). Which two Fibonacci numbers
   multiply to give your answer?
7. Find the missing terms of a Fibonacci-style sequence: ?, ?, 13, 21.
8. Add up the first 5 Fibonacci numbers, then the first 6, then the first 7. Compare each answer with the Fibonacci
   list. What do you notice?

??? note "Answers"
    1. $34 + 55 = 89$, $55 + 89 = 144$, $89 + 144 = 233$.
    2. 3, 4, 7, 11, 18, 29.
    3. The counts go 1, 2, 3, 5, 8 for 1 to 5 steps; then $5 + 8 = 13$ ways for 6 steps.
    4. **Odd.** Only every third term (positions 3, 6, 9, ...) is even, and 20 is not in the 3 times table. (It is
       6765.)
    5. The totals are the Fibonacci numbers: month 10 has the 10th one, **55** pairs.
    6. The sum is 273. The squares fill a rectangle 13 tall and 21 wide, and $13 \times 21 = 273$. ✓
    7. The second ? is $21 - 13 = 8$, and the first is $13 - 8 = 5$: so 5, 8, 13, 21.
    8. $1 + 1 + 2 + 3 + 5 = 12$, then $+ 8 = 20$, then $+ 13 = 33$. Each answer is **one less than a Fibonacci
       number**: 12 is $13 - 1$, 20 is $21 - 1$, 33 is $34 - 1$. (The Fibonacci number you need is two places
       further along than the last one you added.)

## Common mistake

**Adding the same amount each time.** After 1, 1, 2, 3, 5, some people write 7 (adding 2) or 6. The rule is not
"add a fixed number"; you add the **two terms before**: $3 + 5 = 8$.

**Believing every spiral is Fibonacci.** Many sunflowers, pinecones and shells are said to "follow Fibonacci" when
nobody counted. Count first. A pattern you have checked is worth more than one you were told.

## Where it leads

- Back: [Triangular numbers](03-triangular-numbers.md) · Next: [Patterns in the multiplication table](05-multiplication-table-patterns.md)
- [Level 3 page](index.md) · [Patterns topic page](../index.md)
- In level 7 of this topic, the ratios of Fibonacci numbers next to each other close in on the golden ratio, about
  1.618.
- Counting ways to climb stairs is a classic [Counting](../../counting/index.md) puzzle.
