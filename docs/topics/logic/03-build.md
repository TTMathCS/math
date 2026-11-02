---
title: "Build: Statements and truth tables"
---

# Build: Statements and truth tables

*Logic and puzzles · step 3 of 5*

## A question to start

Four cards lie on a table. Each card has a letter on one side and a number on the other. You can see:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 110" role="img" aria-label="Four cards showing A, K, 4 and 7">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="15" y="10" width="70" height="90" rx="8" fill="#eea66f"/>
    <rect x="115" y="10" width="70" height="90" rx="8" fill="#eea66f"/>
    <rect x="215" y="10" width="70" height="90" rx="8" fill="#9cc9ea"/>
    <rect x="315" y="10" width="70" height="90" rx="8" fill="#9cc9ea"/>
  </g>
  <g font-size="36" text-anchor="middle" fill="currentColor">
    <text x="50" y="68">A</text><text x="150" y="68">K</text><text x="250" y="68">4</text><text x="350" y="68">7</text>
  </g>
</svg>
</div>

Here is a rule: *"If a card has a vowel on one side, then it has an even number on the other side."* Which cards
must you turn over to check whether the rule is broken? Turn over as few as you can.

In a famous experiment by the psychologist Peter Wason, most people got this wrong. Most chose A and 4. By the end
of this page you will see why the answer is **A and 7**.

## The idea

### Letters for statements

To think clearly about how statements fit together, we give them letters, usually $p$, $q$ and $r$. For example,
$p$ might stand for "the card shows a vowel" and $q$ for "the other side is even". Each letter is either true (T)
or false (F).

### Five ways to join statements

| Words | Symbol | True when ... |
| --- | --- | --- |
| not $p$ | $\neg p$ | $p$ is false |
| $p$ and $q$ | $p \land q$ | both are true |
| $p$ or $q$ | $p \lor q$ | at least one is true |
| if $p$ then $q$ | $p \to q$ | every time except when $p$ is true and $q$ is false |
| $p$ if and only if $q$ | $p \leftrightarrow q$ | $p$ and $q$ have the same truth value |

In $p \to q$, the part $p$ is called the **hypothesis** and $q$ the **conclusion**.

### Truth tables

A **truth table** lists every possible combination of T and F for the letters, and works out the whole statement
in each row. With two letters there are $2 \times 2 = 4$ rows; with three letters there are 8.

| $p$ | $q$ | $\neg p$ | $p \land q$ | $p \lor q$ | $p \to q$ | $p \leftrightarrow q$ |
| --- | --- | --- | --- | --- | --- | --- |
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

### Why "if ... then" works that way

The last two rows of $p \to q$ surprise people: when $p$ is false, $p \to q$ counts as **true**, whatever $q$ is.
Think of it as a promise. A parent says: *"If you tidy your room, then you get ice cream."*

- You tidy, you get ice cream: promise kept.
- You tidy, no ice cream: promise **broken**. This is the only row that is F.
- You do not tidy, you get ice cream anyway: the promise said nothing about that case. Not broken.
- You do not tidy, no ice cream: not broken either.

A promise is only broken when the "if" part happens and the "then" part does not. That is exactly the truth table.

### Converse and contrapositive

Starting from $p \to q$, you can make three related statements.

- The **converse**: $q \to p$.
- The **inverse**: $\neg p \to \neg q$.
- The **contrapositive**: $\neg q \to \neg p$.

The contrapositive always has the **same** truth table as the original. The converse does not. Example: "If an
animal is a dog, then it has four legs" is true. Its contrapositive, "If an animal does not have four legs, then it
is not a dog", is also true. Its converse, "If an animal has four legs, then it is a dog", is false (a cat).

Two statements with the same truth table in every row are called **logically equivalent**, written $\equiv$.

### De Morgan's laws

The rule from the Explore step, that *and* and *or* swap when you take an opposite, is named after the 19th-century
mathematician Augustus De Morgan:

$$\neg(p \land q) \equiv \neg p \lor \neg q, \qquad \neg(p \lor q) \equiv \neg p \land \neg q.$$

## Worked examples

**1. The four cards.** Let $p$ be "vowel" and $q$ be "even number". The rule is $p \to q$. The only way to break it
is the row where $p$ is T and $q$ is F: a vowel with an odd number. So check each card for that row.

- **A**: a vowel. If the other side is odd, the rule is broken. **Turn it.**
- **K**: not a vowel, so $p$ is F. The rule is true whatever is on the back. Leave it.
- **4**: even, so $q$ is T. The rule is true whatever is on the back. Leave it. (A consonant behind it does not
  break the rule; the rule never said only vowels have even numbers. That would be the converse.)
- **7**: odd, so $q$ is F. If there is a vowel on the back, the rule is broken. **Turn it.** This is the
  contrapositive at work: "not even, so not a vowel".

**2. Proving the contrapositive is equivalent.** Build the table for $\neg q \to \neg p$ and compare it with
$p \to q$.

| $p$ | $q$ | $\neg q$ | $\neg p$ | $\neg q \to \neg p$ | $p \to q$ |
| --- | --- | --- | --- | --- | --- |
| T | T | F | F | T | T |
| T | F | T | F | **F** | **F** |
| F | T | F | T | T | T |
| F | F | T | T | T | T |

In the 5th column, the only F is the row where $\neg q$ is T and $\neg p$ is F, which is the second row. The last
two columns match in every row, so $\neg q \to \neg p \equiv p \to q$.

**3. Checking De Morgan.** For $\neg(p \land q)$: it is F only when $p \land q$ is T, which is only the top row.
For $\neg p \lor \neg q$: it is F only when both $\neg p$ and $\neg q$ are F, which means $p$ and $q$ are both T,
again only the top row. Same table, so they are equivalent.

## Try it

1. Make the truth table for $p \land \neg q$. In which row is it true?
2. Take the statement "If a shape is a square, then it is a rectangle." Write its converse and its contrapositive.
   Which of the three are true?
3. Use a truth table to show that $p \to q$ is equivalent to $\neg p \lor q$.
4. Write the negation of "I am tired and I am hungry" using De Morgan's law.
5. The rule at a fair is: "If you ride the roller coaster, then you are at least 120 cm tall." You see four tickets:
   *rode*, *did not ride*, *135 cm*, *110 cm*. Each ticket has the ride on one side and the height on the other.
   Which tickets must you turn over?
6. On the island of knights and knaves, A says: "If I am a knight, then B is a knight." What are A and B?

??? note "Answers"
    1. Rows ($p$, $q$): TT gives F, TF gives **T**, FT gives F, FF gives F. It is true only when $p$ is true and
       $q$ is false, exactly the row where $p \to q$ fails.
    2. Converse: "If a shape is a rectangle, then it is a square." **False** (a 2 by 5 rectangle is not a
       square). Contrapositive: "If a shape is not a rectangle, then it is not a square." **True**, like the
       original.
    3. $\neg p \lor q$ is F only when $\neg p$ is F and $q$ is F, that is, $p$ is T and $q$ is F. That is the one
       row where $p \to q$ is F as well. All other rows are T for both, so the tables match.
    4. "I am not tired, or I am not hungry."
    5. **Rode** (check the height is at least 120 cm) and **110 cm** (check they did not ride). This is the same
       puzzle as the four cards, but most people find it much easier. Same logic, friendlier story.
    6. *Case A is a knave:* the statement is false. An *if ... then* is false only when the "if" part is true and
       the "then" part is false, so A would have to be a knight. Impossible. So **A is a knight**, the statement
       is true, and its "if" part (A is a knight) is true, so its "then" part is true: **B is a knight**.

## Common mistake

**Mixing up a statement and its converse.** "If it is raining, the ground is wet" is true. "If the ground is wet,
it is raining" is not: someone may have watered the garden. Proving $p \to q$ tells you nothing about $q \to p$.
When you need both directions, you need $p \leftrightarrow q$, and you must check each direction separately.

## Where it leads

- Next step: [Master: sets and "for all, there exists"](04-master.md), where *and*, *or* and *not* become
  intersection, union and complement.
- Back a step: [Explore: knights, knaves and true or false](02-explore.md)
- Computers run on these same operations: every *and*, *or* and *not* in a program is a truth table. Logic for
  university mathematics starts in [MAT137 Unit 1: logic, sets and proofs](../../uoft/MAT137/unit01.md).
