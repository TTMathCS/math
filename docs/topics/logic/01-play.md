---
title: "Play: Riddles, clues and Sudoku"
---

# Play: Riddles, clues and Sudoku

*Logic and puzzles · step 1 of 5*

## A question to start

Here are three boxes. One holds only apples, one holds only oranges, and one holds both. Someone has put a label
on each box, but **every label is wrong**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="Three closed boxes labelled Apples, Oranges, and Apples and oranges">
  <rect x="10" y="30" width="120" height="80" rx="6" fill="#eea66f"/>
  <rect x="150" y="30" width="120" height="80" rx="6" fill="#9cc9ea"/>
  <rect x="290" y="30" width="120" height="80" rx="6" fill="#7ccf9a"/>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="70" y="20">Apples</text>
    <text x="210" y="20">Oranges</text>
    <text x="350" y="20">Apples and oranges</text>
    <text x="70" y="78">?</text><text x="210" y="78">?</text><text x="350" y="78">?</text>
  </g>
</svg>
</div>

You may reach into **one** box, without looking, and pull out **one** fruit. After that you must say what is
really in every box. Which box should you reach into?

Think about it for a minute before you read on. The answer is in the worked example below, and it uses the most
important trick in this whole topic.

## The idea

### A clue rules things out

A **clue** is a piece of information you know is true. Most clues do not tell you the answer straight away.
Instead, they tell you what the answer **cannot** be. When you have ruled out everything except one choice, that
choice must be the answer.

Detectives work like this. So do doctors, mechanics and scientists. So does anyone who solves a Sudoku.

### Make a list of what is still possible

When a puzzle has several people or boxes or squares, keep a list of what each one *could* still be. Every time a
clue rules something out, cross it off. When a list is down to one thing, you have found an answer, and that answer
often rules something out somewhere else. One small step leads to the next.

### Try a guess, and see if it breaks

Sometimes no clue gives you a straight answer. Then you can say: *"Suppose it is this. What would happen?"* Follow
the clues. If you reach something **impossible**, like one box holding two different things, or a person being in
two places at once, then your guess was wrong and you can cross it off. This is called **trying a case**. It is how
mathematicians prove things, and you will meet it again at every step of this topic.

### Watch out for "every", "only" and "not"

Small words matter. "Every label is wrong" is a very strong clue: it tells you something about all three boxes at
once. "Not" turns a clue around. Read each clue slowly and ask: what does this tell me, and what does it **not**
tell me?

## Worked examples

**1. The three boxes.** Reach into the box labelled **"Apples and oranges"**. Here is why.

1. That label is wrong, so this box is **not** the mixed box. It holds only apples or only oranges.
2. So whatever fruit you pull out tells you the whole box. Say you pull out an apple. Then this box is the
   **apples** box.
3. Now look at the box labelled "Oranges". Its label is wrong, so it is not oranges. It is not apples either,
   because we just found the apples. So it must be the **mixed** box.
4. Only one box is left, the one labelled "Apples", and only one thing is left: **oranges**.

If you had pulled out an orange instead, the same steps work with apples and oranges swapped. Why not reach into
another box? If you reach into "Apples" and get an orange, that box could be the oranges box or the mixed box, and
you cannot tell which. The mixed-label box is the only one where one fruit tells you everything.

**2. A small Sudoku.** In a 4 by 4 Sudoku, each **row**, each **column** and each of the four 2 by 2 **boxes**
(the thick squares) must hold the numbers 1, 2, 3 and 4, each exactly once.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 200 200" role="img" aria-label="A 4 by 4 Sudoku. Row 1: 1, 2, blank, 4. Row 2: blank, 4, 1, blank. Row 3: blank, 1, 4, blank. Row 4: 4, blank, blank, 1.">
  <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" stroke-width="1"/>
  <g stroke="currentColor" stroke-width="1" opacity="0.5">
    <line x1="60" y1="20" x2="60" y2="180"/><line x1="140" y1="20" x2="140" y2="180"/>
    <line x1="20" y1="60" x2="180" y2="60"/><line x1="20" y1="140" x2="180" y2="140"/>
  </g>
  <g stroke="currentColor" stroke-width="3">
    <line x1="100" y1="20" x2="100" y2="180"/><line x1="20" y1="100" x2="180" y2="100"/>
    <rect x="20" y="20" width="160" height="160" fill="none"/>
  </g>
  <g font-size="22" text-anchor="middle" fill="currentColor">
    <text x="40" y="48">1</text><text x="80" y="48">2</text><text x="160" y="48">4</text>
    <text x="80" y="88">4</text><text x="120" y="88">1</text>
    <text x="80" y="128">1</text><text x="120" y="128">4</text>
    <text x="40" y="168">4</text><text x="160" y="168">1</text>
  </g>
</svg>
</div>

1. **Row 1** has 1, 2 and 4. Only 3 is missing, so the empty square is **3**.
2. **Row 2** is missing 2 and 3. Look at its first square. The top-left box already has 1, 2 and 4, so this
   square cannot be 2. It must be **3**, and the last square of row 2 is **2**.
3. **Row 3** is missing 2 and 3. Its first square is in column 1, which now has 1, 3 and 4. So it is **2**, and
   the last square of row 3 is **3**.
4. **Row 4** is missing 2 and 3. Its second square is in column 2, which has 2, 4 and 1. So it is **3**, and the
   other empty square is **2**.

The finished grid, row by row: 1 2 3 4, then 3 4 1 2, then 2 1 4 3, then 4 3 2 1. Check every column and box:
each has 1, 2, 3 and 4 once. Checking at the end is part of solving.

Notice that no step needed a guess. Each one asked: *what is still possible here?* and found only one answer.

## Try it

1. Ann, Ben and Sam each have one pet: a cat, a dog or a fish, all different. Ann's pet has no legs. Ben's pet
   does not bark. Who has which pet?
2. A farmer must take a wolf, a goat and a cabbage across a river. The boat holds the farmer and **one** other
   thing. If left alone together, the wolf eats the goat, and the goat eats the cabbage. How can the farmer get
   everything across?
3. A drawer holds 10 red socks and 10 blue socks, all mixed up. The room is dark. How many socks must you take
   out to be **sure** you have two of the same colour?
4. One row of a 4 by 4 Sudoku reads 2, empty, empty, 4. The column of the first empty square already has a 1 in
   it. Fill in the row.
5. On a puzzle island, some people always tell the truth and the rest always lie. Can anyone on the island say
   "I am a liar"?

??? note "Answers"
    1. Ann's pet has no legs, so Ann has the **fish**. Ben's pet does not bark, so it is not the dog, and the fish
       is taken, so Ben has the **cat**. Sam has the **dog**.
    2. Take the goat over first (the wolf will not eat the cabbage). Go back alone. Take the wolf over, and bring
       the **goat back**. Take the cabbage over and leave it with the wolf. Go back alone and fetch the goat. That
       is 7 trips across the river. The clever step is bringing something back.
    3. **3 socks.** With 2 socks you might be unlucky and get one of each colour. A 3rd sock must match one of
       them, because there are only two colours.
    4. The row is missing 1 and 3. The first empty square cannot be 1, so it is 3, and the other is 1. The row is
       **2, 3, 1, 4**.
    5. **No.** A truth-teller cannot say it, because it would be a lie. A liar cannot say it either, because it
       would be true, and liars never say true things. Some sentences are impossible for everyone on the island.
       You will use this idea in the next step.

## Common mistake

**Stopping as soon as an answer fits.** In the box puzzle, it is easy to think "the 'Apples' box has oranges" and
stop. But a good solver checks that the answer works with **every** clue, and also asks whether some other answer
might fit just as well. If two answers fit, you have not finished yet; you need another clue or another step.

## Where it leads

- Next step: [Explore: knights, knaves and true or false](02-explore.md), where the truth-tellers and liars of
  question 5 get their own puzzles.
- Sudoku is also a counting puzzle: how many ways can a grid be filled? See
  [Counting and combinations](../counting/index.md).
- Finding a rule that fits every clue is what you do with sequences too: [Patterns and sequences](../patterns/index.md).
