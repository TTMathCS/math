---
title: "Knights and knaves"
---

# Knights and knaves

*Logic and puzzles · level 3, lesson 3 of 6*

## A question to start

You land on a strange island. Everyone who lives there is either a **knight** or a **knave**.

- **Knights always tell the truth.** Every sentence a knight says is true.
- **Knaves always lie.** Every sentence a knave says is false.

You cannot tell them apart by looking. You meet an islander, and you wonder what they might say about themselves.

Could an islander say "**I am a knight**"? Yes, anyone could. A knight would be telling the truth. A knave would be
lying, which is what knaves do.

Could an islander say "**I am a knave**"? Try it. If a knight said it, the knight would be saying something false,
and knights never do. If a knave said it, the knave would be saying something **true**, and knaves never do. So
**nobody on the island can ever say "I am a knave"**.

Puzzles like these were made famous by the puzzle writer and mathematician Raymond Smullyan. They look like riddles,
but they train the most important skill in logic: **trying every case and crossing off the impossible ones**.

## The idea

### The two rules, said carefully

For any sentence an islander says:

- If the speaker is a **knight**, the sentence is **true**.
- If the speaker is a **knave**, the sentence is **false**.

And it works backwards too. If you find out a sentence is true, the speaker must be a knight (a knave could not have
said it). If a sentence is false, the speaker must be a knave.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Two islanders, A and B. A has a speech bubble saying: we are both knaves.">
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="70" cy="85" r="18" fill="#eea66f"/>
    <rect x="52" y="105" width="36" height="38" rx="8" fill="#eea66f"/>
    <circle cx="350" cy="85" r="18" fill="#9cc9ea"/>
    <rect x="332" y="105" width="36" height="38" rx="8" fill="#9cc9ea"/>
    <rect x="110" y="15" width="200" height="44" rx="14" fill="none"/>
    <polyline points="130,59 92,76 150,59" fill="none"/>
  </g>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="70" y="90">A</text>
    <text x="350" y="90">B</text>
    <text x="210" y="42">"We are both knaves."</text>
  </g>
</svg>
</div>

### The method: try both cases

Each islander is one of two things, so you can always try both. Here is the plan.

1. **Pick a person** (usually the first speaker).
2. **Case 1:** suppose they are a knight. Then their sentence is true. Follow where that leads.
3. **Case 2:** suppose they are a knave. Then their sentence is false. Follow where that leads.
4. If a case leads to something **impossible** (a knight who lies, a person who is both, a sentence that is both
   true and false), **cross it off**.
5. Whatever survives is the answer. If both cases survive, see what they have **in common**: that part is certain.

Why does this work? Because the person really is one of the two kinds. If one case is impossible, the real answer
must be the other one. It is like a two-door room: if one door is locked, you know which door you came through.

### Solving the picture

A says: "We are both knaves."

**Case 1: A is a knight.** Then the sentence is true, so A and B are both knaves. But that makes A a knave, and we
supposed A is a knight. A cannot be both. **Impossible.** Cross it off.

**Case 2: A is a knave.** Then the sentence is false. "Both knaves" is false means **at least one** of them is a knight
(remember from [lesson 1](01-not-and-or.md): the opposite of an **and** is an **or**). A is a knave, so the knight must
be **B**.

Answer: **A is a knave, B is a knight.** Check: A, a knave, said "we are both knaves", which is false because B is a
knight. A knave saying something false. Everything fits.

### Writing a case table

When there are more people, a table keeps you tidy. Put the cases as columns and follow each one down.

A says: "B is a knave." B says: "A is a knave."

| | Case 1: A is a knight | Case 2: A is a knave |
| --- | --- | --- |
| A's sentence "B is a knave" is ... | true | false |
| So B is ... | a knave | a knight |
| B's sentence "A is a knave" is ... | false | true |
| Does B fit? | Yes: a knave says something false. | Yes: a knight says something true. |

**Both** cases survive! So we cannot tell who is who. But in both cases one is a knight and the other is a knave. So
we **can** be sure: **exactly one of them is a knight.** Even when a puzzle does not tell you everything, it may tell
you something for certain.

### Sentences with "or" and "if"

Islanders can use any of the little words from lessons 1 and 2. You just have to use the math meanings.

A says: "I am a knave **or** B is a knight."

**Case 2 first: A is a knave.** Then the first part "I am a knave" is true, so the whole **or** sentence is true (an
**or** needs only one true part). But a knave cannot say something true. **Impossible.**

**Case 1: A is a knight.** Then the sentence is true. Its first part, "I am a knave", is false, so the second part
must be true: **B is a knight**.

Answer: **both are knights.**

## Worked examples

**1. A three-person puzzle.** A says: "All three of us are knaves." B says: "Exactly one of us is a knight." What is
each person?

- Could A be a knight? Then "all three are knaves" is true, so A is a knave. Impossible. So **A is a knave**, and
  "all three are knaves" is false: at least one of them is a knight.
- Now B. **Case: B is a knave.** Then "exactly one of us is a knight" is false. A and B are both knaves, so C would
  have to be a knight (someone is). But then exactly one is a knight (C), which makes B's sentence true. A knave saying
  something true: impossible.
- **Case: B is a knight.** Then exactly one is a knight, and that is B. So **C is a knave**. Check A's sentence: "all
  three are knaves" is false (B is a knight). Good, A is a knave.

Answer: **A knave, B knight, C knave.**

**2. Certain about the silent one.** A says: "B is a knave." B says: "A and C are the same kind." C says nothing.

| | Case 1: A is a knight | Case 2: A is a knave |
| --- | --- | --- |
| So B is ... | a knave | a knight |
| B's sentence is ... | false: A and C differ | true: A and C are the same |
| So C is ... | a **knave** (A is a knight) | a **knave** (A is a knave) |

We cannot tell A and B apart, but in both cases **C is a knave**, so that is certain, even though C never spoke.

**3. An island that cannot exist.** A says: "B is a knight." B says: "A is a knave."

- **Case 1: A is a knight.** Then B is a knight, so B's sentence is true, so A is a knave. Impossible.
- **Case 2: A is a knave.** Then B is a knave, so B's sentence is false, so A is a knight. Impossible.

Both cases are crossed off. That means these two sentences **cannot both be said** on the island. A puzzle like this
has no answer, and proving that is an answer too.

**4. The two guards.** You reach two doors. One leads out, one leads to a pit. Each door has a guard: one is a knight,
one is a knave, and you do not know which. You may ask **one** guard **one** question.

Ask either guard: "**Which door would the other guard tell me leads out?**" Then take the **other** door.

- If you asked the knight: the knave would point to the pit, and the knight truthfully reports that. You hear "the
  pit door".
- If you asked the knave: the knight would point to the exit, and the knave lies about that. You hear "the pit door".

In **both** cases you hear the pit door, so you take the other one and walk free.

## Try it

1. An islander says: "2 plus 2 is 4." What are they?
2. An islander says: "2 plus 2 is 5." What are they?
3. A says: "At least one of us is a knave." What are A and B?
4. A says: "B is a knight." B says: "A and I are different kinds." What are A and B?
5. A says: "B and I are the same kind." What can you be sure of?
6. Explain why nobody on the island can say: "I am a knave and 2 plus 2 is 4."
7. A says: "If I am a knight, then B is a knight." What are A and B? (Remember [lesson 2](02-if-then.md): an if-then
   sentence is false only when the if-part is true and the then-part is false.)
8. Three islanders. A says: "Exactly one of us is a knight." B says: "Exactly two of us are knights." List **every**
   possible answer. Is anyone's kind certain?

??? note "Answers"
    1. The sentence is true, so they are a **knight**.
    2. The sentence is false, so they are a **knave**.
    3. *Case A is a knave:* the sentence is false, so neither is a knave, which makes A a knight. Impossible. So **A is
       a knight**, the sentence is true, at least one is a knave, and it must be **B**.
    4. *Case A is a knight:* B is a knight, so B's sentence is true, so they are different kinds. But both are knights.
       Impossible. *Case A is a knave:* "B is a knight" is false, so B is a knave. B's sentence "different kinds" is
       false, and indeed both are knaves. It works. **Both are knaves.**
    5. *Case A is a knight:* the sentence is true, so B is the same kind: a knight. *Case A is a knave:* the sentence
       is false, so B is a different kind: a knight. Either way **B is a knight**. We cannot tell what A is.
    6. If a knight said it, the sentence would be true, so "I am a knave" would be true. Impossible. If a knave said it,
       it would be false. But "I am a knave" is true and "2 plus 2 is 4" is true, so the **and** sentence is true. A
       knave saying something true: impossible. Both cases fail.
    7. *Case A is a knave:* the sentence must be false, so its if-part ("I am a knight") must be true. But A is a knave.
       Impossible. So **A is a knight**. The sentence is then true and its if-part is true, so its then-part is true:
       **B is a knight**. Both are knights.
    8. Try each count of knights. A and B cannot both be knights (they would say different counts, and only one count
       is right). **Case A knight, B knave:** exactly one knight, which is A, so C is a knave. B says "two", false.
       Works: **A knight, B knave, C knave.** **Case A knave, B knight:** exactly two knights, so C is a knight. A says
       "one", false. Works: **A knave, B knight, C knight.** **Case both knaves:** A's "one" is false and B's "two" is
       false, so the number of knights is not 1 and not 2. Only C is left, so the number is 0 or 1. It cannot be 1, so
       it is 0: **all three knaves.** That works too. So there are **three** answers, and nobody's kind is the same in
       all three: nothing is certain.

## Common mistake

**Stopping after one case.** If you try "A is a knight", find that it works, and stop, you may miss that "A is a
knave" works too (as in the case table above). Always try **both** cases before you say what is certain.

**Getting the opposite wrong.** When a knave says "we are both knaves", the truth is **not** "we are both knights". It
is "at least one of us is a knight". Use the opposite rules from [lesson 1](01-not-and-or.md).

## Where it leads

- Back: [If ... then](02-if-then.md) · Next: [Coding with loops](04-coding-with-loops.md).
- [Level 3 page](index.md) · [Logic topic page](../index.md)
- In level 4, truth tables check every case at once, like a giant case table: [Truth tables](../level-4/02-truth-tables.md).
- "Suppose it is true and reach something impossible" is how mathematicians prove things. It is called proof by
  contradiction, and you meet it again in [Number theory: there is no biggest prime](../../number-theory/level-4/05-no-biggest-prime.md).
- Trying every case and ticking off what survives is also how you count carefully: [Counting](../../counting/index.md).
