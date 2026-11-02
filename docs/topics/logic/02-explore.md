---
title: "Explore: Knights, knaves and true or false"
---

# Explore: Knights, knaves and true or false

*Logic and puzzles · step 2 of 5*

## A question to start

You land on an island where every person is either a **knight** or a **knave**. Knights always tell the truth.
Knaves always lie. You meet two islanders, A and B. A says:

> "We are both knaves."

What are A and B? Puzzles like this were made famous by the puzzle writer Raymond Smullyan. They look like tricks,
but they are really careful reasoning about **true** and **false**, and that is exactly what logic is.

## The idea

### Statements

A **statement** is a sentence that is either true or false, and not both.

- "7 is an odd number." A statement, and it is true.
- "5 is bigger than 9." A statement, and it is false. False statements are still statements.
- "Close the door." Not a statement. It is an order; it is not true or false.
- "$x + 1 = 3$." Not a statement yet. It is true when $x = 2$ and false otherwise, so we cannot say until we know
  $x$.

On the island, a knight's sentence is always a true statement and a knave's is always a false one.

### Not, and, or

Statements can be joined to make bigger statements. Three little words do most of the work.

- **Not.** "It is **not** raining" is true exactly when "It is raining" is false. *Not* flips true and false.
- **And.** "It is cold **and** windy" is true only when **both** parts are true. If either part is false, the
  whole thing is false.
- **Or.** "It is cold **or** windy" is true when **at least one** part is true, *including when both are*. In
  everyday talk, "tea or coffee?" usually means one or the other. In mathematics, *or* always allows both.

### The opposite of a statement

The opposite, or **negation**, of a statement is the statement that is true exactly when the first one is false.
Be careful with *and* and *or*:

- The opposite of "we are **both** knaves" is "**at least one** of us is a knight". It is *not* "we are both
  knights".
- The opposite of "it is cold **and** windy" is "it is **not** cold **or** it is **not** windy".
- The opposite of "it is cold **or** windy" is "it is **not** cold **and not** windy".

Notice how *and* turns into *or*, and *or* into *and*. You will see this rule again in the next step, with a name.

### The method: try every case

For a knights and knaves puzzle, make a list of the possible cases: A is a knight, or A is a knave. For each case,
follow what must happen. If a case leads to something **impossible** (a contradiction), cross it off. What is left
is the answer. If *every* case leads to the same conclusion, that conclusion is certain.

**The starting puzzle, solved.**

1. *Case 1: A is a knight.* Then A's statement is true, so A and B are both knaves. But then A is a knave, and we
   said A is a knight. Impossible. Cross this case off.
2. *Case 2: A is a knave.* Then A's statement is false. So it is **not** true that both are knaves: at least one
   is a knight. A is a knave, so B must be the knight.

Answer: **A is a knave and B is a knight.** Check it: a knave saying a false thing ("we are both knaves") is fine.

### Sudoku reasoning has two moves

On a full 9 by 9 Sudoku, almost every step is one of two moves.

- **Only number for this square.** Look at one empty square. Cross off every number already in its row, its
  column and its box. If only one number is left, write it in.
- **Only square for this number.** Look at one row (or column, or box) and one missing number, say 7. Check each
  empty square: could 7 go there, or is there already a 7 in that square's column or box? If only one square can
  take the 7, it goes there.

Both moves are the same idea as the island: list what is possible, rule out what is impossible.

## Worked example

Three islanders, A, B and C. A says: "B is a knave." B says: "A and C are the same kind." C says nothing. What is
C?

We do not know A, so we try both cases. A table keeps it tidy.

| | Case 1: A is a knight | Case 2: A is a knave |
| --- | --- | --- |
| A's statement "B is a knave" is ... | true, so B is a **knave** | false, so B is a **knight** |
| B's statement is therefore ... | false | true |
| So A and C are ... | different kinds | the same kind |
| So C is ... | a **knave** (A is a knight) | a **knave** (A is a knave) |

Neither case is impossible, so we cannot tell what A and B are. But in **both** cases C is a knave. So C is
**certainly a knave**, even though C never said a word.

This is a big idea: you do not always need to know everything to be sure of something. If every possible case gives
the same answer, that answer is proved.

## Try it

1. Which of these are statements? For the statements, are they true or false?
    - "12 is an even number."
    - "Please sit down."
    - "3 + 4 = 8."
    - "$n$ is a prime number."
2. A says: "B is a knight." B says: "A and I are different kinds." What are A and B?
3. A says: "At least one of us is a knave." What are A and B?
4. Is the statement "$n$ is even **or** $n$ is bigger than 10" true when $n = 12$? When $n = 7$? When $n = 4$?
5. Write the opposite of each statement, without starting with "It is not true that".
    - "Every door is locked."
    - "It is sunny and warm."
6. In one row of a 9 by 9 Sudoku, the numbers 3 and 8 are missing, and two squares are empty. The first empty
   square's column already has an 8. Which number goes where?

??? note "Answers"
    1. "12 is an even number": a statement, true. "Please sit down": not a statement, it is a request. "3 + 4 = 8":
       a statement, false. "$n$ is a prime number": not a statement until we know what $n$ is.
    2. *Case A is a knight:* then B is a knight, so B's statement is true and they are different kinds. But both
       are knights. Impossible. *Case A is a knave:* then "B is a knight" is false, so B is a knave. B's
       statement "different kinds" is then false, and indeed both are knaves, the same kind. That works. **Both
       are knaves.**
    3. *Case A is a knave:* then the statement is false, so neither is a knave, which makes A a knight.
       Impossible. So **A is a knight**, the statement is true, at least one is a knave, and that must be B.
       **A is a knight, B is a knave.**
    4. $n = 12$: true (both parts are true, and *or* allows both). $n = 7$: false (neither part is true).
       $n = 4$: true (the first part is true).
    5. "Some door is not locked" (or "at least one door is unlocked"). "It is not sunny, or it is not warm."
    6. The first empty square cannot be 8, so it is **3**, and the second is **8**.

## Common mistake

**Thinking the opposite of "all" is "none".** If a knave says "all of us are knights", the truth is not "none of us
are knights". It is only "**at least one** of us is **not** a knight". The opposite of a statement is the
smallest change that makes it false, not the most extreme statement on the other side.

## Where it leads

- Next step: [Build: statements and truth tables](03-build.md), where statements get letters and *if ... then*
  joins *not*, *and* and *or*.
- Back a step: [Play: riddles, clues and Sudoku](01-play.md)
- The idea of matching things up exactly, case by case, is also at the heart of
  [Infinity and strange math](../infinity/index.md).
