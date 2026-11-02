---
title: "Algorithms and flowcharts"
---

# Algorithms and flowcharts

*Logic and puzzles · level 6, lesson 3 of 6*

## A question to start

A thousand people stand in a line. You want to find the tallest. You are only allowed one kind of move: pick two
people and ask them to stand back to back, and see who is taller. Each such move is called a **comparison**.

How many comparisons do you need? Could a clever method do it in 500? In 100?

Here is a method: walk along the line holding a "tallest so far" card. Give it to the first person. Then compare the
card holder with the next person, and pass the card on if the new person is taller. At the end, the card holder is
the tallest. That takes 999 comparisons. The surprise is that **no method at all can do it with fewer**, and by the
end of this lesson you will be able to prove it.

A clear list of steps like the card method is called an **algorithm**. This lesson is about writing algorithms
precisely, drawing them as flowcharts, and counting how much work they take.

## The idea

### What an algorithm is

An **algorithm** is a finite list of instructions for solving a problem, so clear that it could be followed by
someone (or something) that does not understand the problem at all. A good algorithm has these properties:

- **Input and output.** It says what it starts with (a list of heights) and what it produces (the tallest).
- **Precise.** Every step has exactly one meaning. "Add salt to taste" is not precise; "add 5 grams of salt" is.
- **Doable.** Every step is something the follower can actually do (compare two heights, write a number down).
- **Finite.** It stops after a finite number of steps, for every allowed input.

The word comes from the name of al-Khwarizmi, a 9th-century Persian mathematician who worked in Baghdad and wrote
about step-by-step methods for calculating with Hindu-Arabic numerals. (The word *algebra* comes from the title of
another of his books.)

Precision matters most when the follower cannot ask questions. A radio signal takes roughly 3 to 22 minutes to travel
from Earth to Mars, depending on where the two planets are in their orbits. A rover there cannot say "what did you
mean?" and get an answer at once, so its instructions have to be exact in advance.

### Variables and assignment

Algorithms keep track of values in named boxes called **variables**. The instruction

$$\text{biggest} \leftarrow 7$$

means "put 7 in the box called *biggest*", throwing away whatever was there. The arrow is read "becomes" or "gets".
It is not an equation: $\text{count} \leftarrow \text{count} + 1$ is a perfectly sensible instruction ("add 1 to the
count"), while the equation $c = c + 1$ has no solution.

### Flowcharts

A **flowchart** draws an algorithm as boxes joined by arrows. There are three main shapes:

- an **oval** for start and stop;
- a **rectangle** for an action ("do this");
- a **diamond** for a decision, a yes-or-no question, with one arrow out for each answer.

Here is the card method, for any list of numbers:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 440" role="img" aria-label="Flowchart for finding the largest number in a list: start, set biggest to the first number, then while numbers are left take the next number x and if x is bigger than biggest set biggest to x; when none are left output biggest and stop">
  <defs>
    <marker id="l63-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 Z" fill="currentColor"/>
    </marker>
  </defs>
  <g stroke="currentColor" stroke-width="1.5">
    <ellipse cx="170" cy="25" rx="45" ry="16" fill="#7ccf9a"/>
    <rect x="75" y="60" width="190" height="34" rx="4" fill="#9cc9ea"/>
    <path d="M 170 118 L 250 150 L 170 182 L 90 150 Z" fill="#eea66f"/>
    <rect x="275" y="133" width="135" height="34" rx="4" fill="#9cc9ea"/>
    <ellipse cx="342" cy="225" rx="40" ry="16" fill="#7ccf9a"/>
    <rect x="95" y="205" width="150" height="34" rx="4" fill="#9cc9ea"/>
    <path d="M 170 262 L 250 294 L 170 326 L 90 294 Z" fill="#eea66f"/>
    <rect x="95" y="350" width="150" height="34" rx="4" fill="#9cc9ea"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#l63-arr)">
    <line x1="170" y1="41" x2="170" y2="59"/>
    <line x1="170" y1="94" x2="170" y2="117"/>
    <line x1="250" y1="150" x2="274" y2="150"/>
    <line x1="342" y1="167" x2="342" y2="208"/>
    <line x1="170" y1="182" x2="170" y2="204"/>
    <line x1="170" y1="239" x2="170" y2="261"/>
    <line x1="170" y1="326" x2="170" y2="349"/>
    <path d="M 170 384 V 410 H 40 V 150 H 89"/>
  </g>
  <line x1="90" y1="294" x2="40" y2="294" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="170" y="30">start</text>
    <text x="170" y="82">biggest ← first number</text>
    <text x="170" y="148">any numbers</text><text x="170" y="163">left?</text>
    <text x="342" y="155">output biggest</text>
    <text x="342" y="230">stop</text>
    <text x="170" y="227">x ← next number</text>
    <text x="170" y="298">x &gt; biggest?</text>
    <text x="170" y="372">biggest ← x</text>
    <text x="262" y="142">no</text><text x="185" y="198">yes</text>
    <text x="185" y="342">yes</text><text x="72" y="288">no</text>
  </g>
</svg>
</div>

Follow the arrows with your finger. The path that goes round and back up to "any numbers left?" is a **loop**: the
same steps repeat, once for each number. The diamonds are the *if ... then* of level 4: one question, two ways out.

The same algorithm written as numbered steps (often called **pseudocode**, "almost code"):

1. Set *biggest* to the first number.
2. If no numbers are left, output *biggest* and stop.
3. Let *x* be the next number.
4. If *x* > *biggest*, set *biggest* to *x*.
5. Go back to step 2.

### Why it is correct

How do we **know** the card holder is the tallest? Here is the reason, and it is the standard way to prove an
algorithm correct. Each time we reach step 2, this sentence is true:

> *biggest* is the largest of the numbers looked at so far.

It is true at the start (only one number looked at). And if it is true before steps 3 and 4, it is still true after
them: the new number either beats the old biggest (and takes its place) or does not (and the old one stays). So it
stays true every time round. When the loop ends, "looked at so far" means "all of them". A sentence that stays true
every time round a loop is called a **loop invariant**. (If this reminds you of dominoes, it should: it is
[proof by induction](../../patterns/level-8/01-proof-by-induction.md) in disguise.)

### Why it stops

Each time round the loop uses up one number, and there are finitely many. So the loop runs once for each number after
the first, and then stops. Stopping is not automatic: here is a famous rule where nobody knows.

> Start with any whole number $n$. If $n$ is even, halve it. If $n$ is odd, replace it by $3n + 1$. Repeat until you
> reach 1.

From 6: 6, 3, 10, 5, 16, 8, 4, 2, 1. It has been checked by computer for enormous numbers of starting values and has
always reached 1, but nobody has proved it always will. This is the **Collatz conjecture**, an open problem. Until
it is proved, "repeat until you reach 1" is not known to be a finite algorithm.

### Efficiency: counting the work

Two correct algorithms can take very different amounts of work. To compare them, count the main step (here,
comparisons) as a formula in $n$, the size of the input.

For the largest of $n$ numbers, the loop does one comparison for each number after the first: $n - 1$ comparisons.
For 1000 numbers, 999.

Compare a slower job: checking whether a list has two **equal** numbers by comparing every pair. The number of pairs
is $\frac{n(n-1)}{2}$ (each of $n$ numbers pairs with $n - 1$ others, and each pair is counted twice).

| $n$ | $n - 1$ | $\frac{n(n-1)}{2}$ |
| --- | --- | --- |
| 10 | 9 | 45 |
| 100 | 99 | 4,950 |
| 1,000 | 999 | 499,500 |
| 1,000,000 | 999,999 | 499,999,500,000 |

The first grows **in step** with $n$: ten times the data, ten times the work. The second grows like $n^2$: ten times
the data, about **a hundred** times the work. For big inputs, the shape of the formula matters far more than any
small speed-up.

### Why 999 is the best possible

Now the promise from the start. Suppose any method at all finds the largest of 1000 different numbers. Every number
**except** the largest must lose at least one comparison: if some number $y$ never lost, the method has no evidence
that $y$ is not the largest, and it could not be sure of its answer. That is 999 numbers that each lose at least once.
But each comparison has exactly **one** loser. So at least 999 comparisons are needed. The card method uses exactly
999, so it is **optimal**: no algorithm can beat it.

Proving that **no** method can do better is much harder than finding one good method, and it is one of the deep
questions of computer science. It leads, at the end of this topic, to the P versus NP problem
([level 8](../level-8/index.md)).

## Worked examples

**1. Tracing the flowchart.** Run the largest-number algorithm on 7, 3, 12, 5, 12, 9. A **trace table** records the
variables at each step.

| step | $x$ | $x >$ biggest? | biggest |
| --- | --- | --- | --- |
| start | | | 7 |
| 1 | 3 | no | 7 |
| 2 | 12 | yes | 12 |
| 3 | 5 | no | 12 |
| 4 | 12 | no (equal is not bigger) | 12 |
| 5 | 9 | no | 12 |

Output 12, after 5 comparisons for 6 numbers ($n - 1 = 5$). ✓

**2. Euclid's algorithm.** To find the greatest common divisor of two whole numbers $a > b > 0$: divide $a$ by $b$;
if the remainder is 0, output $b$; otherwise replace $a, b$ by $b$ and the remainder, and repeat. For 252 and 105:

- $252 = 2 \times 105 + 42$, so the pair becomes 105, 42.
- $105 = 2 \times 42 + 21$, so the pair becomes 42, 21.
- $42 = 2 \times 21 + 0$. Remainder 0: output **21**.

It stops because the remainders shrink each time and cannot go below 0. It is more than 2000 years old, one of the
oldest algorithms still used every day ([Number theory level 4](../../number-theory/level-4/04-euclids-algorithm.md)).

**3. Fixing an unclear instruction.** "Keep adding numbers until it is big enough" fails three ways: which numbers?
in what order? how big is "big enough"? A precise version: "Set *total* $\leftarrow$ 0. For each number in the list,
in order: set *total* $\leftarrow$ *total* + number; if *total* $> 100$, output the number of numbers used and stop.
If the list runs out, output *not reached*." It now also says what happens when the target is never reached, a case
the vague version forgot.

**4. Counting the work for a sum.** Adding up $n$ numbers one by one takes $n - 1$ additions (the first number needs
no addition). For a list of 1000 numbers: 999 additions. Like the largest number, the work grows in step with $n$.

**5. Smallest and largest together.** To find both the smallest and the largest of $n$ numbers, running the card method
twice costs $2(n - 1)$ comparisons: 1998 for 1000 numbers. A cleverer method first compares the numbers in pairs
(500 comparisons), then finds the largest among the 500 pair-winners (499) and the smallest among the 500 pair-losers
(499): $500 + 499 + 499 = 1498$. Thinking about the structure of the problem saved a quarter of the work.

## Try it

1. Which of these are algorithms? Explain. (a) "Cook until done." (b) "Count from 1 to 100, saying each number."
   (c) "Write down every whole number."
2. Change the largest-number flowchart so that it finds the **smallest** number. What is the only box you change?
3. Trace the largest-number algorithm on 4, 9, 2, 9, 11, 1. How many times does *biggest* change?
4. Use Euclid's algorithm to find the greatest common divisor of 1071 and 462.
5. Write pseudocode that counts how many numbers in a list are even.
6. A list has 50 numbers. How many comparisons does the card method need to find the largest? How many pairs are
   there to compare when checking for two equal numbers?
7. Run the Collatz rule from 7. How many steps to reach 1?
8. In a knockout tennis tournament with 64 players, each match has one loser who is out. How many matches are needed
   to find the champion? Connect this to the "999 is the best" argument.

??? note "Answers"
    1. (a) **No**: "done" is not precise, and "cook" is not one clear step. (b) **Yes**: precise, doable, stops after
       100 steps. (c) **No**: it never stops, so it is not finite.
    2. Change the decision diamond "$x >$ biggest?" to "$x <$ smallest?" (and rename the variable). The loop and
       everything else stay the same.
    3. Biggest goes 4, 9 (changes), stays 9 at 2, stays 9 at the second 9, becomes 11 (changes), stays 11 at 1. It
       changes **2 times**; output 11 after 5 comparisons.
    4. $1071 = 2 \times 462 + 147$; $462 = 3 \times 147 + 21$; $147 = 7 \times 21 + 0$. The answer is **21**.
    5. Set *count* $\leftarrow$ 0. For each number $x$ in the list: if $x$ divided by 2 leaves remainder 0, set
       *count* $\leftarrow$ *count* + 1. After the list, output *count*.
    6. $50 - 1 = 49$ comparisons. Pairs: $\frac{50 \times 49}{2} = 1225$.
    7. 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1. That is **16 steps**.
    8. Every player except the champion must lose exactly once, and each match makes exactly one loser, so there are
       $64 - 1 = 63$ matches. Same argument: $n - 1$ "losses" are needed, one per comparison.

## Common mistake

**Steps that are not precise.** "Repeat until it looks right" or "pick a good one" cannot be followed by a machine.
Each step must say exactly what to do, and every loop must say exactly when to stop.

**Forgetting the edge cases.** What does the algorithm do with an empty list? With two equal numbers? With a target
that is never reached? Many real bugs live in the cases the writer did not imagine. A trace table on a small, awkward
example finds them.

## Where it leads

- Back: [Boolean algebra](02-boolean-algebra.md) · Next: [Searching and sorting](04-searching-sorting.md), where
  clever algorithms beat simple ones by enormous margins.
- [Level 6 page](index.md) · [Logic topic page](../index.md) · Loops and conditions started in
  [level 3](../level-3/04-coding-with-loops.md) and [level 4](../level-4/05-coding-conditions.md).
- Euclid's algorithm: [Number theory level 4](../../number-theory/level-4/04-euclids-algorithm.md). Which problems no
  algorithm can solve: [level 8](../level-8/index.md).
- On the U of T shelf, algorithms as real code: [CSC108 unit 2: control flow](../../../uoft/CSC108H1/unit02.md) and
  [CSC148 unit 9: efficiency analysis](../../../uoft/CSC148H1/unit09.md).
