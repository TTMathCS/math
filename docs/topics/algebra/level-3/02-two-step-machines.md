---
title: "Two-step machines"
---

# Two-step machines

*Algebra · level 3, lesson 2 of 6*

## A question to start

A number machine has two parts. The first part **multiplies by 3**. The second part **adds 2**. You drop a secret
number in at the top, and out of the bottom comes **32**.

What did you put in?

Many people try "32 divided by 3", get stuck because it does not come out evenly, and give up. The trick is to undo
the steps in the right **order**. By the end of this lesson you will find the secret number in a few seconds, and
you will know exactly why the order matters. (The answer is in worked example 2.)

## The idea

### One-step machines, a quick reminder

In level 2 you met **number machines**. A number goes in, the machine does something to it, and a new number comes
out. A machine that "adds 5" turns 3 into 8. To go backwards, from what came out to what went in, you use the
**opposite** step, called the **inverse**:

| The machine does ... | ... its inverse is |
| --- | --- |
| add 5 | subtract 5 |
| subtract 4 | add 4 |
| multiply by 3 | divide by 3 |
| divide by 2 | multiply by 2 |

An inverse is an "undo button". Whatever the step did, the inverse un-does it, and you are back where you started.

### Two machines joined together

Now join two machines in a row, so that what comes out of the first goes straight into the second. Here is the
"times 3, then add 2" machine with the number 4 going in:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="Forwards: 4 goes into times 3 to make 12, then into add 2 to make 14. Backwards: 14 goes into subtract 2 to make 12, then into divide by 3 to make 4.">
  <text x="25" y="50" font-size="18" text-anchor="middle" fill="currentColor">4</text>
  <line x1="40" y1="45" x2="85" y2="45" stroke="currentColor" stroke-width="2"/>
  <polygon points="85,40 95,45 85,50" fill="currentColor"/>
  <rect x="95" y="25" width="80" height="40" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="135" y="51" font-size="15" text-anchor="middle" fill="currentColor">× 3</text>
  <line x1="175" y1="45" x2="210" y2="45" stroke="currentColor" stroke-width="2"/>
  <polygon points="210,40 220,45 210,50" fill="currentColor"/>
  <text x="200" y="35" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <rect x="220" y="25" width="80" height="40" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="260" y="51" font-size="15" text-anchor="middle" fill="currentColor">+ 2</text>
  <line x1="300" y1="45" x2="345" y2="45" stroke="currentColor" stroke-width="2"/>
  <polygon points="345,40 355,45 345,50" fill="currentColor"/>
  <text x="380" y="50" font-size="18" text-anchor="middle" fill="currentColor">14</text>
  <text x="380" y="135" font-size="18" text-anchor="middle" fill="currentColor">14</text>
  <line x1="365" y1="130" x2="310" y2="130" stroke="currentColor" stroke-width="2"/>
  <polygon points="310,125 300,130 310,135" fill="currentColor"/>
  <rect x="220" y="110" width="80" height="40" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="260" y="136" font-size="15" text-anchor="middle" fill="currentColor">− 2</text>
  <line x1="220" y1="130" x2="185" y2="130" stroke="currentColor" stroke-width="2"/>
  <polygon points="185,125 175,130 185,135" fill="currentColor"/>
  <text x="200" y="120" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <rect x="95" y="110" width="80" height="40" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="135" y="136" font-size="15" text-anchor="middle" fill="currentColor">÷ 3</text>
  <line x1="95" y1="130" x2="50" y2="130" stroke="currentColor" stroke-width="2"/>
  <polygon points="50,125 40,130 50,135" fill="currentColor"/>
  <text x="25" y="135" font-size="18" text-anchor="middle" fill="currentColor">4</text>
  <text x="210" y="92" font-size="12" text-anchor="middle" fill="currentColor">forwards on top, backwards underneath</text>
</svg>
</div>

Going forwards: $4 \times 3 = 12$, and $12 + 2 = 14$. So 4 goes in and 14 comes out.

Going backwards, look at the bottom row. You start at 14 on the **right**, and the first machine you meet is the
**last** one you used going forwards. You undo "add 2" first ($14 - 2 = 12$), and then undo "times 3"
($12 \div 3 = 4$). You are back at 4.

### Why the reverse order?

Think about getting dressed. You put on your socks, then your shoes. To get undressed, you take off your **shoes
first**, then your socks. If you try to pull off your socks first, the shoes are in the way.

A two-step machine is just the same. The last thing that happened is on the "outside", like the shoes. In the
machine above, the number 14 is "12 with 2 added on top". The "add 2" is wrapped around the outside, so it has to
come off first. Only then can you get at the 12 and undo the "times 3".

Here is what goes wrong if you undo in the wrong order. Start at 14 and divide by 3 first: $14 \div 3$ is 4 and 2
left over, not a whole number. Then subtract 2 and you get something that is not 4. The wrong order gives the wrong
answer.

### Order matters going forwards too

"Times 3, then add 2" and "add 2, then times 3" sound almost the same, but they are different machines. Put 4 into
each:

- times 3, then add 2: $4 \times 3 = 12$, then $12 + 2 = 14$.
- add 2, then times 3: $4 + 2 = 6$, then $6 \times 3 = 18$.

So when you describe a machine, always say which step comes first.

### Finding the rule from a table

Sometimes you see what goes in and what comes out, but the machine is hidden. Can you work out its rule? Here is a
mystery machine:

| In | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Out | 5 | 7 | 9 | 11 | 13 |

Look at the "out" row. Each time the input goes up by **1**, the output goes up by **2**. That is the clue to the
multiply step. If a machine multiplies by 2, then one more going in means two more coming out, because one extra 1
gets doubled into 2. So the first step is probably "times 2".

Now test it. $1 \times 2 = 2$, but the output is 5. We need 3 more. Try $2 \times 2 = 4$; the output is 7, again 3
more. So the second step is "add 3".

**Rule: times 2, then add 3.** Check the last column: $5 \times 2 + 3 = 13$. ✓

This works for any "times something, then add something" machine: the jump in the outputs tells you the times
number, and then you find what is added.

## Worked examples

**1. Running a machine forwards.** The machine is "times 3, then add 2". Fill in the outputs for 1, 2, 5 and 10.

| In | 1 | 2 | 5 | 10 |
| --- | --- | --- | --- | --- |
| After × 3 | 3 | 6 | 15 | 30 |
| Out (+ 2) | 5 | 8 | 17 | 32 |

**2. The starting puzzle.** "Times 3, then add 2" gave 32. What went in?

- Undo the last step first: $32 - 2 = 30$.
- Then undo "times 3": $30 \div 3 = 10$.
- Check forwards: $10 \times 3 = 30$, and $30 + 2 = 32$. ✓ The secret number is **10**. (Look: the table above
  already shows 10 giving 32.)

**3. Subtract first, then double.** A machine does "subtract 4, then double". It gave 18. What went in?

- The last step was "double", so undo it first: half of 18 is 9.
- Then undo "subtract 4": $9 + 4 = 13$.
- Check: $13 - 4 = 9$, and $9 \times 2 = 18$. ✓

**4. Finding a hidden rule.** A machine gives these results:

| In | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Out | 7 | 11 | 15 | 19 |

- The outputs go up by 4 each time, so the first step is "times 4".
- $1 \times 4 = 4$, but the output is 7, which is 3 more. So the second step is "add 3".
- Rule: **times 4, then add 3**. Check: $4 \times 4 + 3 = 19$. ✓

**5. A three-step machine.** "Add 1, then times 5, then subtract 3" gave 22. What went in?

- Undo the steps from last to first. Undo "subtract 3": $22 + 3 = 25$.
- Undo "times 5": $25 \div 5 = 5$.
- Undo "add 1": $5 - 1 = 4$.
- Check: $4 + 1 = 5$, $5 \times 5 = 25$, $25 - 3 = 22$. ✓

## Try it

1. A machine does "times 2, then add 5". What comes out when 8 goes in?
2. The same machine gave 31. What went in?
3. A machine does "add 6, then times 2". What comes out when 4 goes in? Is this the same as "times 2, then add 6"?
4. A machine does "divide by 4, then add 1". It gave 6. What went in?
5. Find the rule of this machine: in 1, 2, 3, 4 gives out 8, 13, 18, 23.
6. A machine does "times 10, then subtract 7". It gave 63. What went in?
7. A three-step machine does "subtract 2, then times 3, then add 4". It gave 25. What went in?
8. Tom undoes "times 3, then add 2" with output 20 like this: "$20 \div 3$ ..." What should he do instead, and what
   is the answer?

??? note "Answers"
    1. $8 \times 2 = 16$, then $16 + 5 = 21$.
    2. Undo "add 5": $31 - 5 = 26$. Undo "times 2": $26 \div 2 = 13$. Check: $13 \times 2 + 5 = 31$. ✓
    3. $4 + 6 = 10$, then $10 \times 2 = 20$. The other machine gives $4 \times 2 + 6 = 14$. Not the same: order
       matters.
    4. Undo "add 1": $6 - 1 = 5$. Undo "divide by 4": $5 \times 4 = 20$. Check: $20 \div 4 = 5$, $5 + 1 = 6$. ✓
    5. The outputs go up by 5, so the first step is "times 5". $1 \times 5 = 5$, and the output is 8, so add 3.
       Rule: **times 5, then add 3**. Check: $4 \times 5 + 3 = 23$. ✓
    6. Undo "subtract 7": $63 + 7 = 70$. Undo "times 10": $70 \div 10 = 7$. Check: $7 \times 10 - 7 = 63$. ✓
    7. Undo "add 4": $25 - 4 = 21$. Undo "times 3": $21 \div 3 = 7$. Undo "subtract 2": $7 + 2 = 9$. Check:
       $9 - 2 = 7$, $7 \times 3 = 21$, $21 + 4 = 25$. ✓
    8. He should undo the **last** step first: $20 - 2 = 18$, then $18 \div 3 = 6$. Check: $6 \times 3 + 2 = 20$. ✓

## Common mistake

**Undoing in the same order as the machine.** The machine goes "first, second"; the undoing goes "second, first".
Write the steps down in a row, then start from the right-hand end when you go backwards.

**Using the wrong undo button.** The inverse of "times 3" is "divide by 3", not "subtract 3". Say the step out loud
and then say its opposite.

## Where it leads

- Previous: [Letters and shapes for unknowns](01-letters-and-shapes.md) · Next:
  [Guess and check, and undoing](03-guess-and-check.md)
- [Level 3 page](index.md) · [Algebra topic page](../index.md)
- In [level 4](../level-4/index.md) the machine "times 3, then add 2" becomes the short expression $3n + 2$, and
  undoing it becomes solving the equation $3n + 2 = 32$.
- Tables where the outputs go up by the same jump each time are arithmetic sequences: see
  [Patterns](../../patterns/index.md).
