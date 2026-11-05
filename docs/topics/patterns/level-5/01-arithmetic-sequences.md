---
title: "Arithmetic sequences"
---

# Arithmetic sequences

*Patterns and sequences · level 5, lesson 1 of 6*

## A question to start

A day on Mars, called a **sol**, is about 24 hours and 40 minutes long. When a rover lands, the people driving it on
Earth often live on "Mars time" for the first months: they start work when the morning starts at the rover. Because
the Martian day is 40 minutes longer, their start time on an Earth clock moves about **40 minutes later every day**.

Suppose the team starts at 8:00 on the first day. When do they start on day 10? On day 37? Is there a day when they
start at exactly 8:00 in the evening?

You could add 40 minutes again and again on your fingers. By the end of this lesson you will answer each of these
in one line. (Answers in worked example 5.)

## The idea

### Adding the same amount each time

In level 4 you met patterns like 5, 8, 11, 14, 17, ..., where you add the same number to get from each term to the
next. A sequence like this has a name:

> An **arithmetic sequence** is a sequence where the difference between each term and the one before it is always
> the same number. That number is called the **common difference**, written $d$.

("Arithmetic" here is said with the stress on "met": a-rith-MET-ic. It comes from the Greek word for number.)

Some examples:

- 5, 8, 11, 14, 17, ... has $d = 3$. It is **increasing**: $d$ is positive.
- 90, 83, 76, 69, ... has $d = -7$. It is **decreasing**: $d$ is negative, so adding $d$ takes you down.
- 2.5, 3.25, 4, 4.75, ... has $d = 0.75$. The difference does not have to be a whole number.
- 6, 6, 6, 6, ... has $d = 0$. A constant sequence counts as arithmetic too, a boring one.

On a number line, an arithmetic sequence is a row of equal jumps:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 120" role="img" aria-label="A number line from 0 to 20 with the terms 5, 8, 11, 14 and 17 marked, joined by equal jumps of 3">
  <line x1="20" y1="80" x2="300" y2="80" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="75" x2="20" y2="85" stroke="currentColor" stroke-width="1.5"/>
  <line x1="300" y1="75" x2="300" y2="85" stroke="currentColor" stroke-width="1.5"/>
  <text x="20" y="102" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="300" y="102" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <path d="M 90 76 Q 111 40 132 76" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 132 76 Q 153 40 174 76" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 174 76 Q 195 40 216 76" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 216 76 Q 237 40 258 76" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="111" y="48" font-size="12" text-anchor="middle" fill="currentColor">+3</text>
  <text x="153" y="48" font-size="12" text-anchor="middle" fill="currentColor">+3</text>
  <text x="195" y="48" font-size="12" text-anchor="middle" fill="currentColor">+3</text>
  <text x="237" y="48" font-size="12" text-anchor="middle" fill="currentColor">+3</text>
  <circle cx="90" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="132" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="174" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="216" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="258" cy="80" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="90" y="102" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="132" y="102" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <text x="174" y="102" font-size="12" text-anchor="middle" fill="currentColor">11</text>
  <text x="216" y="102" font-size="12" text-anchor="middle" fill="currentColor">14</text>
  <text x="258" y="102" font-size="12" text-anchor="middle" fill="currentColor">17</text>
  <text x="160" y="20" font-size="12" text-anchor="middle" fill="currentColor">equal jumps: d = 3</text>
</svg>
</div>

### How to test a sequence

To decide whether a list of numbers is arithmetic, **subtract each term from the next one** (always "later minus
earlier"). If every answer is the same, the sequence is arithmetic and that answer is $d$.

| Sequence | Differences | Arithmetic? |
| --- | --- | --- |
| 4, 9, 14, 19, 24 | 5, 5, 5, 5 | yes, $d = 5$ |
| 30, 26, 22, 18 | −4, −4, −4 | yes, $d = -4$ |
| 1, 4, 9, 16, 25 | 3, 5, 7, 9 | no |
| 2, 4, 8, 16 | 2, 4, 8 | no |

The order matters. In 30, 26, 22 the difference is $26 - 30 = -4$, not $+4$. The sign tells you which way the
sequence goes.

Notice also that four or five terms can only **suggest** a pattern. If someone writes "4, 9, 14, 19, ..." and calls it
arithmetic, we take them at their word. But in [Patterns that trick you](../level-3/06-patterns-that-trick.md) you saw
that a list can start one way and then do something else. A sequence is arithmetic because its **rule** says "add $d$
every time", not because the first few terms happen to.

### Names for the parts

As in level 4, $t_n$ means the term in position $n$: $t_1$ is the first term, $t_2$ the second, and so on. For an
arithmetic sequence we give two numbers their own letters:

- $a$ is the **first term**, so $a = t_1$;
- $d$ is the **common difference**.

These two numbers decide the whole sequence. Tell me $a = 7$ and $d = 4$, and I can write 7, 11, 15, 19, ... for as
long as you like. The recursive (next-term) rule from level 4 says exactly this:

$$t_1 = a, \qquad t_{n+1} = t_n + d$$

### The general term, and why it says n − 1

The recursive rule is slow if you want the 500th term. We want a position rule instead. Build the terms up from $a$
and **count how many times $d$ has been added**:

| Position $n$ | Term $t_n$ | Number of $d$'s added |
| --- | --- | --- |
| 1 | $a$ | 0 |
| 2 | $a + d$ | 1 |
| 3 | $a + d + d = a + 2d$ | 2 |
| 4 | $a + 3d$ | 3 |
| 10 | $a + 9d$ | 9 |
| $n$ | $a + (n - 1)d$ | $n - 1$ |

So the **general term** of an arithmetic sequence is

$$t_n = a + (n - 1)d$$

Why $n - 1$ and not $n$? Because the first term has had **no** jumps yet. Look at the number line: five terms, but only
four jumps between them. Getting from position 1 to position $n$ takes $n - 1$ jumps. It is the same reason a fence
with 5 posts has only 4 gaps between them, which is why this mistake is often called the **fence-post error**.

A quick way to check any formula you write: put $n = 1$ into it. It must give back $a$. With $t_n = a + (n - 1)d$ you
get $a + 0 \times d = a$. ✓

### Tidying the formula: the zero term

You can multiply out the formula. For $a = 5$ and $d = 3$:

$$t_n = 5 + (n - 1) \times 3 = 5 + 3n - 3 = 3n + 2$$

This is the level 4 rule $t_n = 3n + 2$. The number in front of $n$ is the difference, and the number on its own, 2,
is the **zero term**: the term that would come one step **before** the first one ($5 - 3 = 2$). In general
$t_n = dn + (a - d)$. Both forms are correct; use whichever is handier. The form $a + (n - 1)d$ shows the first term
clearly, and the form $dn + (a - d)$ is quicker for calculating.

### What the graph looks like

If you plot the points $(n, t_n)$, each step to the right of 1 goes up by exactly $d$, so the points lie on a straight
line with slope $d$ (you saw why in [Graphing a pattern](../level-4/03-graphing-a-pattern.md)). Arithmetic sequences
are the whole-number version of **linear relations**. A decreasing sequence gives a line going down.

<figure class="play" data-play="seq" data-kind="arith"><span class="ai-tag">AI-created</span><figcaption><b>Add the same each time.</b> Change the start and the step d.</figcaption></figure>

## Worked examples

**1. Any term from the formula.** Find $t_{50}$ for 7, 11, 15, 19, ...

- Differences: $11 - 7 = 4$, $15 - 11 = 4$, $19 - 15 = 4$. So $a = 7$ and $d = 4$.
- $t_n = 7 + (n - 1) \times 4 = 4n + 3$.
- $t_{50} = 4 \times 50 + 3 = 203$.

Check with $n = 2$: $4 \times 2 + 3 = 11$. ✓

**2. A decreasing sequence.** For 90, 83, 76, 69, ... find $t_{20}$ and the first negative term.

- $a = 90$, $d = 83 - 90 = -7$.
- $t_n = 90 + (n - 1)(-7) = 90 - 7n + 7 = 97 - 7n$.
- $t_{20} = 97 - 140 = -43$.
- The term is negative when $97 - 7n < 0$, that is when $7n > 97$, or $n > 13.857...$. Positions are whole numbers,
  so the first negative term is at $n = 14$: $t_{14} = 97 - 98 = -1$. (And $t_{13} = 97 - 91 = 6$ is still positive.)

**3. Decimals.** For 2.5, 3.25, 4, 4.75, ... find $t_9$.

$a = 2.5$, $d = 0.75$, so $t_9 = 2.5 + 8 \times 0.75 = 2.5 + 6 = 8.5$. Eight jumps, not nine.

**4. How many terms?** How many terms are in the list 12, 17, 22, ..., 257?

- $a = 12$, $d = 5$. Set the general term equal to the last number: $12 + (n - 1) \times 5 = 257$.
- $(n - 1) \times 5 = 245$, so $n - 1 = 49$ and $n = 50$.

In words: from 12 to 257 is a climb of 245, which is 49 jumps of 5, and 49 jumps join **50** terms. Dividing alone
(245 ÷ 5 = 49) would give the number of gaps, not the number of terms.

**5. Mars time.** Measure start times in minutes after 8:00 on an Earth clock. Day 1 is 0, and each day adds 40, so
$t_n = 0 + (n - 1) \times 40 = 40(n - 1)$.

- Day 10: $t_{10} = 40 \times 9 = 360$ minutes = 6 hours, so the team starts at **14:00** (2 in the afternoon).
- Day 37: $t_{37} = 40 \times 36 = 1440$ minutes = exactly 24 hours, so they start at **8:00 again**, a whole day
  later. Every 36 days the start time goes all the way round the clock.
- 8:00 in the evening is 12 hours = 720 minutes after 8:00. Solve $40(n - 1) = 720$: $n - 1 = 18$, so **day 19**.

(The real extra time is about 39.6 minutes, not 40, so a real team drifts round the clock in a little over 36 days.
The rounding changes the answers only slightly.)

## Try it

1. Which of these are arithmetic? For each one that is, give $d$.
   (a) 3, 8, 13, 18; (b) 2, 4, 8, 16; (c) 10, 7, 4, 1, −2; (d) 1, 1, 1, 1.
2. Write the general term of 6, 10, 14, 18, ... in both forms, and find $t_{30}$.
3. For 50, 46.5, 43, 39.5, ... find $t_{15}$.
4. How many terms are in 4, 11, 18, ..., 410?
5. A sequence has $t_n = 5n - 2$. Write its first four terms, and give $a$ and $d$.
6. Is the sequence with $t_n = n^2$ arithmetic? Explain using differences.
7. Sequence A is $t_n = 3n - 1$. Sequence B starts at 100 and goes down by 4 each time. At which position do they have
   the same term, and what is it?
8. How many whole numbers from 1 to 1000 leave a remainder of 3 when divided by 7?

??? note "Answers"
    1. (a) Differences 5, 5, 5: arithmetic, $d = 5$. (b) Differences 2, 4, 8: not arithmetic (each term is double the
       one before; that kind is in level 6). (c) Differences −3, −3, −3, −3: arithmetic, $d = -3$. (d) Differences
       0, 0, 0: arithmetic, $d = 0$.
    2. $a = 6$, $d = 4$: $t_n = 6 + (n - 1) \times 4$, which tidies to $t_n = 4n + 2$ (zero term $6 - 4 = 2$).
       $t_{30} = 4 \times 30 + 2 = 122$.
    3. $d = 46.5 - 50 = -3.5$. $t_{15} = 50 + 14 \times (-3.5) = 50 - 49 = 1$.
    4. $4 + (n - 1) \times 7 = 410$ gives $(n - 1) \times 7 = 406$, so $n - 1 = 58$ and $n = 59$ terms.
    5. $t_1 = 3$, $t_2 = 8$, $t_3 = 13$, $t_4 = 18$. So $a = 3$ and $d = 5$ (the number in front of $n$).
       Check: $3 + (n - 1) \times 5 = 5n - 2$. ✓
    6. No. The terms are 1, 4, 9, 16, 25 and the differences are 3, 5, 7, 9: they keep growing, so they are not all
       the same. (Lesson 4 shows what to do with sequences like this.)
    7. B is $t_n = 100 + (n - 1)(-4) = 104 - 4n$. Set $3n - 1 = 104 - 4n$: $7n = 105$, so $n = 15$. Both 15th terms
       are $3 \times 15 - 1 = 44$ and $104 - 60 = 44$. ✓
    8. These numbers are 3, 10, 17, ..., an arithmetic sequence with $a = 3$, $d = 7$. The largest one up to 1000:
       $7 \times 142 = 994$, so it is $994 + 3 = 997$. Then $3 + (n - 1) \times 7 = 997$ gives $n - 1 = 142$,
       so there are **143** of them.

## Common mistake

**Using $nd$ instead of $(n - 1)d$.** The 10th term has had $d$ added **9** times, not 10, because the first term had
none. If your formula gives the wrong first term when you put in $n = 1$, this is almost always why.

**Counting gaps instead of terms.** "From 12 to 257 in steps of 5" is $245 \div 5 = 49$ **steps**, but **50** numbers.
Whenever you divide to count, ask: am I counting the posts or the gaps?

## Where it leads

- Next: [Working backwards](02-working-backwards.md), rebuilding a sequence from any two of its terms.
- [Level 5 page](index.md) · [Patterns topic page](../index.md)
- Back to the start of the idea: [Finding the position rule](../level-4/02-finding-position-rule.md) in level 4.
- The graph of an arithmetic sequence is a set of points on a line: [Algebra](../../algebra/index.md) has linear
  relations in its [level 5](../../algebra/level-5/04-linear-relations.md).
- Multiplying instead of adding gives a very different kind of sequence: [Level 6](../level-6/index.md).
