---
title: "Terms and positions"
---

# Terms and positions

*Patterns and sequences · level 3, lesson 1 of 6*

## A question to start

Maya writes a pattern on the board: 4, 7, 10, 13, ... Her friend asks, "What is the 100th number?"

Maya could keep adding 3, one number at a time, all the way to the 100th. That is 99 additions, and one slip
anywhere ruins the answer. Is there a faster way? By the end of this lesson you will find the 100th number in about
ten seconds, and you will know **why** the quick way works.

## The idea

### Sequences and terms

A **sequence** is a list of numbers in a fixed order. Each number in the list is called a **term**. A sequence can
stop, or it can go on forever; the three dots "..." mean "and so on, following the same rule".

- 4, 7, 10, 13, ... is a sequence. Its terms are 4, 7, 10, 13 and so on.
- 2, 4, 6, 8, 10 is a sequence with exactly five terms.

### Positions

Every term has a **position**: where it stands in the line. The first term is in position 1, the second in position
2, and so on. A **position table** puts each term under its position:

| Position | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Term | 4 | 7 | 10 | 13 | 16 | 19 |

Read it like this: "the 3rd term is 10". The **position** is 3. The **term** is 10. These are two different
numbers, and mixing them up is the most common slip in this whole topic.

### Positions in a repeating pattern

Positions work for colour patterns too. Here the part that repeats (the **core**) is orange, blue, green: 3 beads
long.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 95" role="img" aria-label="Beads orange, blue, green repeating for 9 beads with positions 1 to 12 written underneath; positions 10, 11 and 12 are question marks">
  <circle cx="25" cy="30" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="25" y="65" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="58" cy="30" r="12" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="58" y="65" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="91" cy="30" r="12" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="91" y="65" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="124" cy="30" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="65" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="157" cy="30" r="12" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="157" y="65" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="190" cy="30" r="12" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="190" y="65" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="223" cy="30" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="223" y="65" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="256" cy="30" r="12" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="256" y="65" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="289" cy="30" r="12" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="289" y="65" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <text x="322" y="65" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <text x="355" y="65" font-size="12" text-anchor="middle" fill="currentColor">11</text>
  <text x="388" y="65" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <text x="322" y="35" font-size="18" text-anchor="middle" fill="currentColor">?</text>
  <text x="355" y="35" font-size="18" text-anchor="middle" fill="currentColor">?</text>
  <text x="388" y="35" font-size="18" text-anchor="middle" fill="currentColor">?</text>
  <text x="5" y="85" font-size="11" text-anchor="start" fill="currentColor">position</text>
</svg>
</div>

Which colour is the 10th bead? Look at the green beads: they sit at positions 3, 6, 9, ... the 3 times table. That is
no accident. Every time the core ends, a green bead is placed, and the core is 3 long, so the greens land on 3, 6, 9,
12, and so on.

Position 9 is green, so position 10 starts the core again: **orange**. For a far-away bead, like the 50th, divide
by the length of the core: $50 \div 3 = 16$ remainder 2. Sixteen whole cores take you to position 48 (green), and 2
more beads go orange, **blue**. The remainder tells you where you are inside the core.

### Jumps: the quick way to a far-away term

Now back to 4, 7, 10, 13. Put the terms on a number line. The rule is "add 3", so each step is a **jump** of 3.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 100" role="img" aria-label="A number line from 0 to 14 with dots at 4, 7, 10 and 13, labelled term 1 to term 4, joined by three jumps of plus 3">
  <line x1="20" y1="70" x2="410" y2="70" stroke="currentColor" stroke-width="1.5"/>
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
  <circle cx="128" cy="70" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="20" font-size="11" text-anchor="middle" fill="currentColor">term 1</text>
  <circle cx="209" cy="70" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="209" y="20" font-size="11" text-anchor="middle" fill="currentColor">term 2</text>
  <circle cx="290" cy="70" r="7" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="20" font-size="11" text-anchor="middle" fill="currentColor">term 3</text>
  <circle cx="371" cy="70" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="371" y="20" font-size="11" text-anchor="middle" fill="currentColor">term 4</text>
  <path d="M 128 62 Q 168.5 30 209 62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="168.5" y="44" font-size="11" text-anchor="middle" fill="currentColor">+3</text>
  <path d="M 209 62 Q 249.5 30 290 62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="249.5" y="44" font-size="11" text-anchor="middle" fill="currentColor">+3</text>
  <path d="M 290 62 Q 330.5 30 371 62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="330.5" y="44" font-size="11" text-anchor="middle" fill="currentColor">+3</text>
</svg>
</div>

Count carefully. To get from the 1st term to the 4th term you make **3** jumps, not 4. The 1st term is where you
**start**; you have not jumped yet.

| Position | 1 | 2 | 3 | 4 | 10 | 100 |
| --- | --- | --- | --- | --- | --- | --- |
| Jumps from the start | 0 | 1 | 2 | 3 | 9 | 99 |

The number of jumps is always **one less than the position**. So

- the 10th term is the start plus 9 jumps of 3: $4 + 9 \times 3 = 4 + 27 = 31$;
- the 100th term is the start plus 99 jumps of 3: $4 + 99 \times 3 = 4 + 297 = 301$.

That answers Maya's question: **301**. One multiplication and one addition instead of 99 additions.

### Why "one less" happens: fence posts

Picture a straight fence. Each post is a term. Each gap between two posts is a jump. A fence with 4 posts has only 3
gaps; a fence with 10 posts has 9 gaps. There is always one more post than gap, because the first post has no gap
in front of it. Builders call this the **fence-post** idea, and it hides inside many puzzles.

### A second way to see the same rule

Write the 3 times table under the sequence:

| Position | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 3 × position | 3 | 6 | 9 | 12 | 15 |
| Term | 4 | 7 | 10 | 13 | 16 |

Every term is exactly **1 more** than 3 × its position. So the 100th term is $3 \times 100 + 1 = 301$. Same answer,
a different road. When two different ways give the same answer, you can trust it much more. (In level 4 you will
see why these two ways must always agree.)

<figure class="play" data-play="seq" data-kind="arith"><span class="ai-tag">AI-created</span><figcaption><b>Term and position.</b> The small numbers under the bars are the positions.</figcaption></figure>

## Worked examples

**1. The 10th and 25th terms of 5, 9, 13, 17, ...**

- The rule is "add 4", so each jump is 4. The start is 5.
- 10th term: 9 jumps. $5 + 9 \times 4 = 5 + 36 = 41$.
- 25th term: 24 jumps. $5 + 24 \times 4 = 5 + 96 = 101$.
- Check the small one by counting: 5, 9, 13, 17, 21, 25, 29, 33, 37, 41. The 10th is 41. ✓

**2. The colour of the 25th and 30th beads** in the orange, blue, green pattern above.

- The core is 3 long. $25 \div 3 = 8$ remainder 1. Eight whole cores end at position 24; one more bead is the
  first colour of the core: **orange**.
- $30 \div 3 = 10$ remainder 0. Remainder 0 means a core has just finished, so the 30th bead is the last colour:
  **green**. (Positions 3, 6, 9, ..., 30 are all green.)

**3. Where does 52 appear in 4, 7, 10, 13, ...?** This runs the question backwards: we know the term and want the
position.

- From the start, 4, up to 52 is $52 - 4 = 48$.
- Each jump is 3, so that is $48 \div 3 = 16$ jumps.
- 16 jumps means position $16 + 1 = 17$ (one more than the jumps, fence-post again).
- Check with the other way: $3 \times 17 + 1 = 51 + 1 = 52$. ✓

**4. A sequence that goes down: 50, 46, 42, 38, ...** What is the 10th term?

- Each jump is 4 **down**. The 10th term is 9 jumps down from 50.
- $50 - 9 \times 4 = 50 - 36 = 14$.
- Check: 50, 46, 42, 38, 34, 30, 26, 22, 18, 14. ✓

## Try it

1. Make a position table for 2, 7, 12, 17, ... up to position 6.
2. Find the 10th term of 6, 8, 10, 12, ...
3. Find the 20th term of 3, 8, 13, 18, ...
4. A letter pattern repeats A, B, B, C. What is the 30th letter?
5. Find the 100th term of 1, 4, 7, 10, ...
6. Is 60 a term of 4, 7, 10, 13, ...? Explain how you know.
7. A fence has 10 posts in a straight line, 2 metres apart. How long is the fence?
8. The sequence 100, 93, 86, ... goes down by 7 each time and stops at the last term that is not below zero. What is
   that last term, and what is its position?

??? note "Answers"
    1. The rule is "add 5":

        | Position | 1 | 2 | 3 | 4 | 5 | 6 |
        | --- | --- | --- | --- | --- | --- | --- |
        | Term | 2 | 7 | 12 | 17 | 22 | 27 |

    2. 9 jumps of 2 from 6: $6 + 9 \times 2 = 6 + 18 = 24$.
    3. 19 jumps of 5 from 3: $3 + 19 \times 5 = 3 + 95 = 98$.
    4. The core A, B, B, C is 4 long. $30 \div 4 = 7$ remainder 2. Seven cores end at position 28; two more letters
       are A, **B**. So the 30th letter is B.
    5. 99 jumps of 3 from 1: $1 + 99 \times 3 = 1 + 297 = 298$. (Check with the other way: every term is 2 less than
       3 × position, and $3 \times 100 - 2 = 298$. ✓)
    6. **No.** From 4 up to 60 is 56, and 56 is not in the 3 times table ($56 \div 3 = 18$ remainder 2), so you
       cannot get there with jumps of 3. Another way: every term is 1 more than a number in the 3 times table, but
       60 is itself in the 3 times table ($3 \times 20$), so 59 would be "1 less", not "1 more".
    7. 10 posts make 9 gaps. $9 \times 2 = 18$ metres.
    8. $100 \div 7 = 14$ remainder 2. So 14 jumps of 7 take you down to $100 - 98 = 2$, and one more jump would go
       below zero. The last term is **2**, after 14 jumps, which is position **15**.

## Common mistake

**Using the position as the number of jumps.** For the 10th term of 4, 7, 10, ... people often work out
$4 + 10 \times 3 = 34$. But the 10th term has had only 9 jumps. A quick test: try your method on the 1st term. It
must give back the first term itself (here 4), because the 1st term has had no jumps at all. $4 + 1 \times 3 = 7$ is
wrong, so the method is wrong.

**Mixing up the term and the position.** "The 17th term is 52" means position 17, term 52. If a question asks for
"the position of 52", the answer is 17, not 52.

## Where it leads

- Next: [Square numbers](02-square-numbers.md)
- [Level 3 page](index.md) · [Patterns topic page](../index.md)
- In [level 4](../level-4/index.md) you write the "3 × position + 1" rule with a letter, and see why the jump
  method and the times-table method always agree.
- The remainder trick for colour patterns is the start of clock arithmetic in
  [Number theory](../../number-theory/index.md).
