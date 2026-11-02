---
title: "Patterns that trick you"
---

# Patterns that trick you

*Patterns and sequences · level 3, lesson 6 of 6*

## A question to start

Put some points on a circle and join every pair of points with a straight line. Then count the pieces (the
**regions**) the circle is cut into. Make sure no three lines ever cross at the same spot.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 115" role="img" aria-label="Five circles with 1, 2, 3, 4 and 5 points on the edge, every pair of points joined by a straight line. They are cut into 1, 2, 4, 8 and 16 regions">
  <circle cx="45" cy="50" r="38" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="45.0" cy="12.0" r="3.5" fill="currentColor"/>
  <text x="45" y="108" font-size="12" text-anchor="middle" fill="currentColor">1 point: 1</text>
  <circle cx="130" cy="50" r="38" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <line x1="111" y1="17.091" x2="149" y2="82.909" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="111.0" cy="17.1" r="3.5" fill="currentColor"/>
  <circle cx="149.0" cy="82.9" r="3.5" fill="currentColor"/>
  <text x="130" y="108" font-size="12" text-anchor="middle" fill="currentColor">2 points: 2</text>
  <circle cx="215" cy="50" r="38" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <line x1="215" y1="12" x2="244.11" y2="74.4259" stroke="currentColor" stroke-width="1.2"/>
  <line x1="215" y1="12" x2="177.577" y2="56.5986" stroke="currentColor" stroke-width="1.2"/>
  <line x1="244.11" y1="74.4259" x2="177.577" y2="56.5986" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="215.0" cy="12.0" r="3.5" fill="currentColor"/>
  <circle cx="244.1" cy="74.4" r="3.5" fill="currentColor"/>
  <circle cx="177.6" cy="56.6" r="3.5" fill="currentColor"/>
  <text x="215" y="108" font-size="12" text-anchor="middle" fill="currentColor">3 points: 4</text>
  <circle cx="300" cy="50" r="38" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <line x1="293.401" y1="12.5773" x2="337.423" y2="43.4014" stroke="currentColor" stroke-width="1.2"/>
  <line x1="293.401" y1="12.5773" x2="312.997" y2="85.7083" stroke="currentColor" stroke-width="1.2"/>
  <line x1="293.401" y1="12.5773" x2="263.295" y2="59.8351" stroke="currentColor" stroke-width="1.2"/>
  <line x1="337.423" y1="43.4014" x2="312.997" y2="85.7083" stroke="currentColor" stroke-width="1.2"/>
  <line x1="337.423" y1="43.4014" x2="263.295" y2="59.8351" stroke="currentColor" stroke-width="1.2"/>
  <line x1="312.997" y1="85.7083" x2="263.295" y2="59.8351" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="293.4" cy="12.6" r="3.5" fill="currentColor"/>
  <circle cx="337.4" cy="43.4" r="3.5" fill="currentColor"/>
  <circle cx="313.0" cy="85.7" r="3.5" fill="currentColor"/>
  <circle cx="263.3" cy="59.8" r="3.5" fill="currentColor"/>
  <text x="300" y="108" font-size="12" text-anchor="middle" fill="currentColor">4 points: 8</text>
  <circle cx="385" cy="50" r="38" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <line x1="385" y1="12" x2="422.423" y2="43.4014" stroke="currentColor" stroke-width="1.2"/>
  <line x1="385" y1="12" x2="404" y2="82.909" stroke="currentColor" stroke-width="1.2"/>
  <line x1="385" y1="12" x2="355.89" y2="74.4259" stroke="currentColor" stroke-width="1.2"/>
  <line x1="385" y1="12" x2="353.872" y2="28.2041" stroke="currentColor" stroke-width="1.2"/>
  <line x1="422.423" y1="43.4014" x2="404" y2="82.909" stroke="currentColor" stroke-width="1.2"/>
  <line x1="422.423" y1="43.4014" x2="355.89" y2="74.4259" stroke="currentColor" stroke-width="1.2"/>
  <line x1="422.423" y1="43.4014" x2="353.872" y2="28.2041" stroke="currentColor" stroke-width="1.2"/>
  <line x1="404" y1="82.909" x2="355.89" y2="74.4259" stroke="currentColor" stroke-width="1.2"/>
  <line x1="404" y1="82.909" x2="353.872" y2="28.2041" stroke="currentColor" stroke-width="1.2"/>
  <line x1="355.89" y1="74.4259" x2="353.872" y2="28.2041" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="385.0" cy="12.0" r="3.5" fill="currentColor"/>
  <circle cx="422.4" cy="43.4" r="3.5" fill="currentColor"/>
  <circle cx="404.0" cy="82.9" r="3.5" fill="currentColor"/>
  <circle cx="355.9" cy="74.4" r="3.5" fill="currentColor"/>
  <circle cx="353.9" cy="28.2" r="3.5" fill="currentColor"/>
  <text x="385" y="108" font-size="12" text-anchor="middle" fill="currentColor">5 points: 16</text>
</svg>
</div>

1 point: 1 region. 2 points: 2. 3 points: 4. 4 points: 8. 5 points: 16. The numbers double every time! So surely 6
points will give 32?

Try it with a large circle and a ruler. However carefully you draw, you will count **31**. Not 32. And 7 points give
57, nowhere near 64. The doubling pattern was a trick: it looked perfect for five terms, and then it broke.

## The idea

### A few terms do not fix the rule

A sequence written as a few terms and "..." is really a **guess** about the rule. Often the guess is obvious, but
the terms alone never force it. Look at 1, 2, 4, ... Two rules fit those three terms perfectly:

| Rule | Terms |
| --- | --- |
| Double each time | 1, 2, 4, **8**, 16, 32, ... |
| Add 1, then add 2, then add 3, and so on | 1, 2, 4, **7**, 11, 16, ... |

Both rules agree on the first three terms and disagree on the fourth. Neither is "the right answer" unless someone
tells you the rule, or you know **where the numbers came from**.

The second rule is not made up just to be awkward. Cut a round pizza with straight cuts, as many pieces as possible:
0 cuts leave 1 piece, 1 cut makes 2, 2 crossing cuts make 4, and 3 cuts make at most **7**, not 8. (Draw it: the third
cut can cross both of the others, passing through 3 pieces and splitting each in two, so it adds 3 pieces.) The
fourth cut can cross all 3 earlier cuts and adds 4 pieces: 11.

And even 1, 2, 4, 8 is not enough. With a block of cheese and flat cuts, the most pieces from 0, 1, 2, 3, 4 cuts are
1, 2, 4, 8, **15**. Four terms of doubling, then a 15.

### What went wrong in the circle puzzle

The circle numbers are 1, 2, 4, 8, 16, 31, 57, ... They are **not** made by doubling. They come from counting how
the lines cross, and that count happens to match doubling for the first five terms. That is a coincidence of small
numbers, and small numbers are full of coincidences, because there are only a few of them for many patterns to
share.

(There is a second trap in this puzzle. If you place 6 points evenly, like the corners of a regular hexagon, three
of the long lines cross at the centre, and you lose a region: you get 30. That is why the puzzle says no three lines
may meet at one spot.)

### A famous trap with prime numbers

A **prime number** is a whole number bigger than 1 that can only be divided exactly by 1 and by itself: 2, 3, 5, 7,
11, 13, ... (6 is not prime because $6 = 2 \times 3$.)

Start at 41 and add 2, then 4, then 6, then 8, adding 2 more each time:

41, 43, 47, 53, 61, 71, 83, 97, 113, ...

Every one of these is prime. Check as many as you like: the 10th, the 20th, the 30th, the 40th term, all prime. The
great mathematician Leonhard Euler wrote about this rule in the 1700s. Forty primes in a row! Surely it gives primes
forever?

No. The 41st term is 1681, and $1681 = 41 \times 41$. Not prime. (You can find it with the triangular numbers from
lesson 3: by the 41st term you have added $2 + 4 + \cdots + 80$, which is twice $1 + 2 + \cdots + 40 = 820$, so the
41st term is $41 + 1640 = 1681$.)

### Checking is not proving

So how can we ever be sure a pattern goes on forever? We cannot check every term; there are infinitely many. What
we need is a **reason**: an explanation of **why** each term follows from the last, that works at every size.

Compare two patterns from this level:

- **Square numbers** (lesson 2): 1 + 3 = 4, 1 + 3 + 5 = 9, 1 + 3 + 5 + 7 = 16. We did not just check these. We saw
  that each new L-shape is a row, a column and a corner, and that this works for a square of **any** size. That is a
  reason. The pattern is safe forever.
- **Circle regions**: 1, 2, 4, 8, 16. We had five checks and no reason why the count should double. The pattern
  broke.

A careful explanation that covers every case is called a **proof**. Mathematicians do not trust a pattern, however
many times it has been checked, until someone proves it.

That does not make checking useless. Checking finds patterns worth explaining, and one counterexample (one case
that breaks the rule, like 1681) is enough to show a rule is false. Checking can say **no** for sure; only a reason
can say **yes** for sure.

## Worked examples

**1. Two rules for 3, 5, 7.**

- "The odd numbers from 3": next is **9**.
- "The prime numbers from 3": next is **11** (9 is $3 \times 3$, not prime).
- The three terms do not tell you which. You need the rule.

**2. A pizza with 3 cuts.** Draw two cuts crossing in an X (4 pieces). The third cut is a straight line that misses
the centre and crosses both earlier cuts. It passes through 3 of the 4 pieces and splits each one, adding 3 pieces:
$4 + 3 = 7$. It cannot cross a straight line twice, so it cannot pass through more than 3 pieces. The most is 7.

**3. A beautiful pattern that breaks.** Square numbers made of ones:

| Multiplication | Answer |
| --- | --- |
| $1 \times 1$ | 1 |
| $11 \times 11$ | 121 |
| $111 \times 111$ | 12321 |
| $1111 \times 1111$ | 1234321 |
| $111111111 \times 111111111$ (nine ones) | 12345678987654321 |
| $1111111111 \times 1111111111$ (ten ones) | 1234567900987654321 |

Up to nine ones the answer counts up and back down. With ten ones there would have to be a "10" in the middle, and
carrying wrecks the pattern. The pattern had a reason (the columns of ones add up like a staircase), but the reason
only worked while every column held fewer than 10.

**4. Checking Euler's rule a little way.** Terms 6 to 9 are 71, 83, 97, 113. Each is prime: none of them can be
divided exactly by 2, 3, 5 or 7, and for numbers this small that is enough. The rule looks safe, but the 41st term
shows it is not.

## Try it

1. Give two different rules that fit 1, 2, 3, ... and give the next term for each.
2. Give two different next terms for 2, 4, 8, ... and say the rule for each.
3. What is the most pieces you can cut a pizza into with 4 straight cuts?
4. Write the 6th, 7th and 8th terms of the rule "start at 41 and add 2, then 4, then 6, ...".
5. Draw 4 points on a circle (not a square, any 4 points) and join every pair. Count the regions.
6. Ben says: "5, 15, 25, 35, ... adds 10 each time, so every term ends in 5. I have checked four terms, so that is a
   proof." Is it a proof? Can you give a proper reason?
7. Work out $11111 \times 11111$ using the pattern, then check with a calculator.
8. The 42nd term of Euler's rule is 1763. Show that it is not prime. (Hint: try 41.)

??? note "Answers"
    1. "Add 1 each time": next is **4**. "Each term is the sum of the two before" (Fibonacci-style from 1, 2): next
       is $2 + 3 = 5$. (Other rules work too.)
    2. "Double each time": **16**. "Add 2, then 4, then 6": $8 + 6 = 14$.
    3. The 4th cut can cross all 3 earlier cuts, so it passes through 4 pieces and adds 4: $7 + 4 = 11$.
    4. After 61 you add 10 to get **71**, then 12 to get **83**, then 14 to get **97**.
    5. **8** regions (as long as the 4 points are on the circle and you draw all 6 lines).
    6. Checking four terms is not a proof, but there is a real reason: adding 10 adds 1 to the tens digit and never
       changes the ones digit. The first term ends in 5, so every term after it ends in 5 too. **That** reason is a
       proof, because it works at every step.
    7. With five ones, count up to 5 and back: **123454321**. A calculator agrees.
    8. $41 \times 43 = 1763$, so 1763 can be divided by 41 (and by 43). It is not prime.

## Common mistake

**"It worked five times, so it always works."** Five checks, or even forty, are not a reason. Ask yourself:
*why* would the next term follow the rule? If you cannot say, the pattern is a guess, a good guess perhaps, but a
guess.

**Thinking there is only one right answer to "what comes next?"** If only a few terms are given, there are always
other rules that fit. A good answer says which rule you used.

## Where it leads

- Back: [Patterns in the multiplication table](05-multiplication-table-patterns.md) · Next level:
  [Level 4: rules with position numbers](../level-4/index.md)
- [Level 3 page](index.md) · [Patterns topic page](../index.md)
- The circle regions are counted exactly with the tools of [Counting](../../counting/index.md); primes are in
  [Number theory](../../number-theory/index.md).
- Turning checks into proofs is what university maths is about: see the introduction to logic and proof in
  [U of T MAT137 Unit 1](../../../uoft/MAT137/unit01.md).
