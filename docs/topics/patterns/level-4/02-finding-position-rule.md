---
title: "Finding the position rule"
---

# Finding the position rule

*Patterns and sequences · level 4, lesson 2 of 6*

## A question to start

Here are four different sequences:

- 3, 7, 11, 15, ...
- 1, 5, 9, 13, ...
- 6, 10, 14, 18, ...
- 100, 104, 108, 112, ...

They start in different places, but each one goes up by 4. Their position rules turn out to be $4n - 1$, $4n - 3$,
$4n + 2$ and $4n + 96$. Every one has "$4n$" in it. That is not a coincidence. By the end of this lesson you will be
able to write the position rule of any sequence like these in a few seconds, and explain why the trick works.

## The idea

### Constant difference

Subtract each term from the next. These subtractions are the **differences** (the gaps). If every difference is the
same number, the sequence has a **constant difference**, and we call that number $d$.

| Term | 3 | | 7 | | 11 | | 15 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Difference | | +4 | | +4 | | +4 | |

The sequences in this lesson all have a constant difference. (In level 5 you will call them **arithmetic sequences**.)

### Step 1: the difference is the multiplier

Write the $d$ times table under the sequence. For 3, 7, 11, 15, ... with $d = 4$:

| $n$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $4n$ | 4 | 8 | 12 | 16 | 20 |
| $t_n$ | 3 | 7 | 11 | 15 | 19 |
| $t_n - 4n$ | −1 | −1 | −1 | −1 | −1 |

The 4 times table also goes up by 4 at every step. So the two rows climb **side by side**, and the distance between
them never changes. Here every term is exactly 1 less than $4n$, so $t_n = 4n - 1$.

That is the reason the difference becomes the multiplier: **only $d \times n$ grows by exactly $d$ each time $n$
goes up by 1**. A rule with $5n$ would grow by 5 each step, too fast; a rule with $3n$ would grow by 3, too slow.

### Step 2: adjust with the zero term

Once you know the multiplier, you need the fixed number to add on. There is a neat way to find it. Imagine running
the sequence **one step backwards**, to a position 0 before the first term. That imaginary term is the **zero term**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 100" role="img" aria-label="A number line with terms 5, 8, 11, 14 joined by jumps of plus 3, and one dashed jump back to the zero term at 2">
  <line x1="15" y1="70" x2="410" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="65" x2="20" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="90" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="47" y1="65" x2="47" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="47" y="90" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="74" y1="65" x2="74" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="90" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="101" y1="65" x2="101" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="101" y="90" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="128" y1="65" x2="128" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="90" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="155" y1="65" x2="155" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="155" y="90" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="182" y1="65" x2="182" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="90" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="209" y1="65" x2="209" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="209" y="90" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="236" y1="65" x2="236" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="90" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="263" y1="65" x2="263" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="263" y="90" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <line x1="290" y1="65" x2="290" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="90" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="317" y1="65" x2="317" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="317" y="90" font-size="11" text-anchor="middle" fill="currentColor">11</text>
  <line x1="344" y1="65" x2="344" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="344" y="90" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <line x1="371" y1="65" x2="371" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="371" y="90" font-size="11" text-anchor="middle" fill="currentColor">13</text>
  <line x1="398" y1="65" x2="398" y2="75" stroke="currentColor" stroke-width="1"/>
  <text x="398" y="90" font-size="11" text-anchor="middle" fill="currentColor">14</text>
  <circle cx="74" cy="70" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="20" font-size="11" text-anchor="middle" fill="currentColor">zero term</text>
  <circle cx="155" cy="70" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="155" y="20" font-size="11" text-anchor="middle" fill="currentColor">term 1</text>
  <circle cx="236" cy="70" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="20" font-size="11" text-anchor="middle" fill="currentColor">term 2</text>
  <circle cx="317" cy="70" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="317" y="20" font-size="11" text-anchor="middle" fill="currentColor">term 3</text>
  <circle cx="398" cy="70" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="398" y="20" font-size="11" text-anchor="middle" fill="currentColor">term 4</text>
  <path d="M 74 62 Q 114.5 32 155 62" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="114.5" y="44" font-size="11" text-anchor="middle" fill="currentColor">+3</text>
  <path d="M 155 62 Q 195.5 32 236 62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="195.5" y="44" font-size="11" text-anchor="middle" fill="currentColor">+3</text>
  <path d="M 236 62 Q 276.5 32 317 62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="276.5" y="44" font-size="11" text-anchor="middle" fill="currentColor">+3</text>
  <path d="M 317 62 Q 357.5 32 398 62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="357.5" y="44" font-size="11" text-anchor="middle" fill="currentColor">+3</text>
</svg>
</div>

For 5, 8, 11, 14, ... with $d = 3$, one step back from 5 is $5 - 3 = 2$. The zero term is 2, and the rule is

$$t_n = 3n + 2$$

Why does this work? Every term is the zero term plus $n$ jumps of $d$. Position 1 is one jump from the zero term,
position 2 is two jumps, position $n$ is $n$ jumps. So $t_n = (\text{zero term}) + d \times n$. Starting from the zero
term, the number of jumps **equals** the position, and the "one less" from level 3 disappears.

The recipe, in full:

1. Check the differences are all the same. Call the difference $d$.
2. Find the zero term: first term minus $d$.
3. The rule is $t_n = dn + (\text{zero term})$.
4. Check the rule on two terms, including $n = 1$.

### Going down

If the sequence goes **down**, the difference is negative. For 20, 17, 14, 11, ..., $d = -3$. One step back from
20 goes **up**: the zero term is $20 - (-3) = 23$. So

$$t_n = 23 - 3n$$

Check: $t_1 = 23 - 3 = 20$ ✓, $t_4 = 23 - 12 = 11$ ✓. It is usually clearer to write the zero term first, as here,
rather than $-3n + 23$; they mean the same thing.

### Gaps that are not whole numbers

The recipe works for any constant difference. For 2.5, 4, 5.5, 7, ..., $d = 1.5$ and the zero term is
$2.5 - 1.5 = 1$, so $t_n = 1.5n + 1$. Check: $t_4 = 6 + 1 = 7$ ✓.

### When you are not given the first terms

Sometimes the table skips positions. If position 2 holds 9 and position 5 holds 18, you go from 2 to 5 in 3 steps,
and the term rises by $18 - 9 = 9$. Each step is then $9 \div 3 = 3$, so $d = 3$. Now use any known term to find
the zero term: position 2 is 2 jumps from the zero term, so the zero term is $9 - 2 \times 3 = 3$. The rule is
$t_n = 3n + 3$. Check: $t_5 = 15 + 3 = 18$ ✓.

<figure class="play" data-play="seq" data-kind="arith"><span class="ai-tag">AI-created</span><figcaption><b>Find the rule.</b> The step d is the jump between bars.</figcaption></figure>

## Worked examples

**1. 11, 18, 25, 32, ...**

- Differences: 7, 7, 7. So $d = 7$.
- Zero term: $11 - 7 = 4$.
- Rule: $t_n = 7n + 4$. Check: $t_3 = 21 + 4 = 25$ ✓.
- The 100th term: $700 + 4 = 704$.

**2. 20, 17, 14, 11, ...: the 10th term.**

- $d = -3$, zero term $23$, rule $t_n = 23 - 3n$.
- $t_{10} = 23 - 30 = -7$. The sequence goes below zero after the 7th term ($t_7 = 2$, $t_8 = -1$).

**3. A table with gaps.**

| $n$ | 2 | 5 | 9 |
| --- | --- | --- | --- |
| $t_n$ | 13 | 25 | 41 |

- From $n = 2$ to $n = 5$: 3 steps, a rise of 12. So $d = 4$. (Check with $n = 5$ to $n = 9$: 4 steps, a rise of
  16, $16 \div 4 = 4$ ✓. The difference really is constant.)
- Zero term: $13 - 2 \times 4 = 5$.
- Rule: $t_n = 4n + 5$. Check: $t_9 = 36 + 5 = 41$ ✓.

**4. What the rule tells you about the terms.** 7, 12, 17, 22, ... has $t_n = 5n + 2$. Every term is 2 more than a
multiple of 5, so every term ends in 2 or 7. That instantly tells you 1000 is **not** a term (it ends in 0), and
neither is 333 (ends in 3), without solving anything.

## Try it

1. Find the position rule for 4, 9, 14, 19, ...
2. Find the position rule for 10, 13, 16, 19, ... and the 50th term.
3. Find the position rule for 30, 26, 22, 18, ... Which is the first negative term?
4. Find the position rule for 0.5, 1, 1.5, 2, ... What is special about its zero term?
5. Which sequence has the rule $6n - 5$? (a) 1, 7, 13, ... (b) 6, 11, 16, ... (c) 1, 6, 11, ...
6. The 3rd term of a sequence with a constant difference is 11, and the 7th is 27. Find the rule.
7. Is 1000 a term of 7, 12, 17, 22, ...? Is 1002?
8. Find the rule for 9, 15, 21, 27, ... Show that every term is an odd multiple of 3.

??? note "Answers"
    1. $d = 5$, zero term $4 - 5 = -1$: $t_n = 5n - 1$.
    2. $d = 3$, zero term $10 - 3 = 7$: $t_n = 3n + 7$. $t_{50} = 150 + 7 = 157$.
    3. $d = -4$, zero term $30 + 4 = 34$: $t_n = 34 - 4n$. It is negative when $4n > 34$, that is $n > 8.5$, so the
       first negative term is $t_9 = 34 - 36 = -2$.
    4. $d = 0.5$, zero term $0.5 - 0.5 = 0$: $t_n = 0.5n$. The zero term is 0, so nothing is added: each term is
       just half its position.
    5. (a). $6 \times 1 - 5 = 1$ and the difference is 6. ((b) is $5n + 1$, (c) is $5n - 4$.)
    6. From position 3 to 7 is 4 steps and a rise of $27 - 11 = 16$, so $d = 4$. Zero term $11 - 3 \times 4 = -1$.
       Rule $t_n = 4n - 1$. Check: $t_7 = 28 - 1 = 27$ ✓.
    7. $t_n = 5n + 2$. 1000 ends in 0, so **no**. For 1002: $5n + 2 = 1002$ gives $n = 200$: **yes**, the 200th term.
    8. $d = 6$, zero term $3$: $t_n = 6n + 3$. Then $t_n = 3 \times (2n + 1)$, which is 3 times an odd number, because
       $2n + 1$ is one more than an even number.

## Common mistake

**Using the first term instead of the zero term.** For 5, 8, 11, ... writing $t_n = 3n + 5$ gives $t_1 = 8$, which is
the second term. The number you add on is the term **before** the first one, $5 - 3 = 2$.

**Getting the sign of a falling sequence wrong.** For 20, 17, 14, ... the zero term is $20 + 3 = 23$ (going
backwards means going **up**), and the rule has $-3n$. Writing $3n + 17$ makes the sequence go up instead of down.
Test: does $t_2 < t_1$?

## Where it leads

- Back: [Two kinds of rule](01-two-kinds-rule.md) · Next: [Graphing a pattern](03-graphing-a-pattern.md)
- [Level 4 page](index.md) · [Patterns topic page](../index.md)
- In level 5 the same idea is written $t_n = a + (n - 1)d$, and used to find $a$ and $d$ from any two terms.
- "Every term is 2 more than a multiple of 5" is the language of remainders in
  [Number theory](../../number-theory/index.md).
- A rule like $t_n = 3n + 2$ is a linear relation, as in [Algebra](../../algebra/index.md).
