---
title: "Guess and check, and undoing"
---

# Guess and check, and undoing

*Algebra · level 3, lesson 3 of 6*

## A question to start

Here is a puzzle that the undoing method from the last lesson **cannot** solve:

$$n \times n + n = 30$$

The trouble is that $n$ is used twice: once in $n \times n$ and once on its own. You cannot "undo" one step without
already knowing $n$ for the other.

But you can **guess**. Try $n = 4$: $4 \times 4 + 4 = 16 + 4 = 20$. Too small. Try $n = 6$: $36 + 6 = 42$. Too
big. So $n$ is between 4 and 6. Try $n = 5$: $25 + 5 = 30$. Got it!

Guessing sounds like cheating, but it is a real mathematical method when you do it carefully: each guess teaches you
something, and the next guess is better. This lesson shows how to guess well, and when undoing is quicker.

## The idea

### Guess and check

**Guess and check** (also called **trial and improvement**) has three parts:

1. **Guess** a value for the unknown.
2. **Check** it: put it into the sentence and work out the answer.
3. **Improve**: if the answer is too small or too big, use that to choose a better guess.

The key word is *improve*. A random list of guesses is slow. A good guesser looks at how far off each guess was and
moves in the right direction.

### Keep a table

Writing guesses in a **table** stops you from trying the same number twice and shows the pattern of your results.
Here is the puzzle $3 \times □ + 7 = 52$:

| Guess for □ | $3 \times □ + 7$ | Compared with 52 |
| --- | --- | --- |
| 10 | 37 | too small |
| 20 | 67 | too big |
| 15 | 52 | just right ✓ |

After two guesses we know the answer is between 10 and 20, so the next guess goes in the middle. That is a strong
habit: when one guess is too small and another is too big, the answer is **between** them.

### Why the answer is "between"

Look at the machine "times 3, then add 7". When you put in a bigger number, you always get out a bigger number:
three lots of a bigger number are bigger, and adding 7 does not change that. So the outputs climb steadily as the
inputs climb, like steps on a staircase.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 170" role="img" aria-label="Bars growing taller for guesses 10, 15 and 20, with a dashed line at 52 touching the middle bar">
  <line x1="40" y1="150" x2="320" y2="150" stroke="currentColor" stroke-width="2"/>
  <rect x="70" y="76" width="50" height="74" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="150" y="46" width="50" height="104" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="230" y="16" width="50" height="134" fill="#eea66f" stroke="currentColor"/>
  <line x1="40" y1="46" x2="320" y2="46" stroke="currentColor" stroke-dasharray="5 4"/>
  <text x="36" y="50" font-size="12" text-anchor="end" fill="currentColor">52</text>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="95" y="166">guess 10</text><text x="175" y="166">guess 15</text><text x="255" y="166">guess 20</text>
    <text x="95" y="70">37</text><text x="175" y="40">52</text><text x="255" y="12">67</text>
  </g>
</svg>
</div>

If guess 10 lands below 52 and guess 20 lands above it, then somewhere on the climb from 10 to 20 the output must
pass 52. That is why the right answer is between 10 and 20, and not somewhere else.

### An even smarter guess: how far off?

There is a clever way to jump straight to the answer for machines like "times 3, then add 7". Every time you
increase the guess by 1, the output goes up by 3 (one more lot of 3). The first guess, 10, gave 37, which is
$52 - 37 = 15$ short. Each extra 1 in the guess fixes 3 of the gap, so we need $15 \div 3 = 5$ more. The answer is
$10 + 5 = 15$. You found it with one guess and one bit of thinking.

### Undoing: when it works, it is fastest

The same puzzle can be solved by undoing, as in the last lesson. "Times 3, then add 7" gave 52:

- undo "add 7": $52 - 7 = 45$;
- undo "times 3": $45 \div 3 = 15$.

Two steps, no guessing. So which method should you use?

| Use undoing when ... | Use guess and check when ... |
| --- | --- |
| the unknown appears only **once** | the unknown appears **more than once**, like $n \times n + n$ |
| each step has a clear undo button | there is no easy undo, like "a number times the next number" |
| you want an exact answer fast | you want to explore, or to check another method |

Good mathematicians use both. They often undo to find the answer and then put it back in as a check, which is a
single guess-and-check step.

### Puzzles with two unknowns

Guess and check also works when there are two related unknowns. "Ana is 4 years older than Ben. Together their ages
add to 30. How old is each?" Guess Ben's age; Ana's age is then fixed (4 more), and you check the total.

| Ben | Ana (Ben + 4) | Total | Compared with 30 |
| --- | --- | --- | --- |
| 10 | 14 | 24 | too small by 6 |
| 15 | 19 | 34 | too big by 4 |
| 13 | 17 | 30 | just right ✓ |

Notice: each year added to Ben adds a year to Ana too, so the total goes up by 2. From the first guess, 6 short,
we need $6 \div 2 = 3$ more years: Ben is $10 + 3 = 13$.

## Worked examples

**1. Guess and check with a table.** Solve $5 \times □ - 4 = 61$.

| Guess | $5 \times □ - 4$ | |
| --- | --- | --- |
| 10 | 46 | too small by 15 |
| 13 | 61 | ✓ |

Each extra 1 adds 5, and we were 15 short, so add $15 \div 5 = 3$ to the guess: 13. Check: $65 - 4 = 61$. ✓
By undoing: $61 + 4 = 65$, $65 \div 5 = 13$. Same answer.

**2. A number times the next number.** Two numbers next to each other multiply to 132. What are they?

- Guess 10 and 11: $110$, too small. Guess 12 and 13: $156$, too big.
- So try 11 and 12: $11 \times 12 = 132$. ✓
- There is no single undo button for this one, so guess and check is the right tool.

**3. The starting puzzle again.** $n \times n + n = 30$. The table is: $n = 4$ gives 20, $n = 6$ gives 42, $n = 5$
gives 30. ✓ So $n = 5$.

**4. Coins.** Lily has 10 coins, some worth 2 dollars and the rest worth 1 dollar. Together they are worth 16 dollars.
How many 2-dollar coins does she have?

| 2-dollar coins | 1-dollar coins | Value |
| --- | --- | --- |
| 5 | 5 | $10 + 5 = 15$, too small by 1 |
| 6 | 4 | $12 + 4 = 16$ ✓ |

Swapping a 1-dollar coin for a 2-dollar coin adds 1 dollar, so one more swap fixed the gap. She has **6** two-dollar
coins.

## Try it

1. Use guess and check to solve $4 \times □ + 9 = 57$. Then solve it by undoing.
2. Solve $n \times n = 81$.
3. Solve $n \times n + n = 56$.
4. Two numbers next to each other multiply to 210. What are they?
5. Sam is 6 years older than his sister. Their ages add to 24. How old is each?
6. A farmer has some hens and some cows: 8 animals with 22 legs in all. How many cows? (A hen has 2 legs, a cow 4.)
7. Why can't you solve $n \times n + n = 30$ by undoing?
8. Without guessing, explain why $7 \times □ + 2 = 50$ has no whole-number answer.

??? note "Answers"
    1. Guess 10: $40 + 9 = 49$, 8 short. Each extra 1 adds 4, so add $8 \div 4 = 2$: try 12, $48 + 9 = 57$. ✓
       Undoing: $57 - 9 = 48$, $48 \div 4 = 12$.
    2. $9 \times 9 = 81$, so $n = 9$. (Guesses: 8 gives 64, too small; 10 gives 100, too big.)
    3. $n = 7$: $49 + 7 = 56$. ✓ (6 gives 42, too small; 8 gives 72, too big.)
    4. $14 \times 15 = 210$. ✓ (14 and 15.) A good first guess: $15 \times 15 = 225$ is a bit too big.
    5. Guess the sister is 10: Sam is 16, total 26, too big by 2. Each year less takes 2 off the total, so take
       1 year off: sister **9**, Sam **15**. Check: $9 + 15 = 24$ ✓ and $15 - 9 = 6$ ✓.
    6. Guess 4 cows and 4 hens: $16 + 8 = 24$ legs, 2 too many. Swapping a cow for a hen takes off 2 legs, so one
       swap: **3 cows** and 5 hens. Check: $12 + 10 = 22$ legs, $3 + 5 = 8$ animals. ✓
    7. The unknown is used twice. To undo "times $n$" you would need to know $n$ already. Undoing works only when the
       unknown appears once.
    8. Undo: $50 - 2 = 48$, and $48 \div 7$ is 6 with 6 left over, not whole. Guesses show it too: □ $= 6$ gives 44
       and □ $= 7$ gives 51, and there is no whole number between 6 and 7.

## Common mistake

**Guessing without learning.** Some people guess 10, then 3, then 25, then 8, jumping around. After each guess,
write "too small" or "too big" in your table, and make the next guess in the right direction.

**Stopping before checking.** A guess that "looks about right" is not the answer until you have worked it out and it
gives exactly the number in the puzzle.

## Where it leads

- Previous: [Two-step machines](02-two-step-machines.md) · Next:
  [Inequalities in words and symbols](04-inequalities-words.md)
- [Level 3 page](index.md) · [Algebra topic page](../index.md)
- Guess and check grows up into a powerful idea: computers solve hard equations by guessing and improving, again
  and again. You will see it in [Numbers level 6: approximating roots](../../numbers/level-6/07-approximating-roots.md).
- Puzzle-solving strategies like making a table are in [Logic](../../logic/index.md).
