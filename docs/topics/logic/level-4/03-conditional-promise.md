---
title: "The conditional"
---

# The conditional

*Logic and puzzles · level 4, lesson 3 of 6*

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

Here is a rule: *"If a card has a vowel on one side, then it has an even number on the other side."*

Which cards **must** you turn over to find out whether the rule is broken? Turn as few as you can.

In a famous experiment from the 1960s, the psychologist Peter Wason gave people this puzzle, and most of them got it
wrong. The most popular answer was "A and 4". The right answer is **A and 7**. By the end of this lesson you will see
exactly why, from the truth table of "if ... then".

## The idea

### The conditional $p \to q$

"If $p$, then $q$" is written $p \to q$ and called a **conditional**. Its two parts have names:

- $p$ is the **hypothesis** (the "if" part);
- $q$ is the **conclusion** (the "then" part).

Its truth table is:

| $p$ | $q$ | $p \to q$ |
| --- | --- | --- |
| T | T | T |
| T | F | **F** |
| F | T | T |
| F | F | T |

It is false in **one** row only: when the hypothesis is true and the conclusion is false. The last two rows, where
$p$ is false, often surprise people. Here are two reasons they must be T.

### Reason 1: a promise is only broken one way

A coach says: "**If you come to every practice, then you will play in the final.**"

- You came to every practice and you played: promise kept. **T**.
- You came to every practice and you did not play: the coach broke the promise. **F**.
- You missed practices and you played anyway (maybe someone was ill): did the coach lie? No. The coach never said
  what would happen if you missed practice. **T**.
- You missed practices and you did not play: no promise was broken. **T**.

A conditional is a promise about what happens **when** $p$ is true. When $p$ is false, the promise does not apply, and
a promise that does not apply has not been broken. So we count it as true. This is sometimes said as "a false
hypothesis implies anything", and such a conditional is called **vacuously true** ("true because there is nothing to
check").

### Reason 2: mathematics needs it

Everyone agrees this is a true fact about whole numbers:

> For every whole number $n$: if $n$ is a multiple of 4, then $n$ is even.

"For every $n$" means the conditional must be true **for each** $n$. Look at some values:

| $n$ | $p$: multiple of 4 | $q$: even | $p \to q$ must be ... |
| --- | --- | --- | --- |
| 8 | T | T | T |
| 6 | F | T | T (6 is not a multiple of 4, but it is even) |
| 7 | F | F | T (7 is neither) |

If we counted the F-T row or the F-F row as false, then this true fact would become false just because of $n = 6$ or
$n = 7$. That would be silly. The fact is only claiming something about multiples of 4. So the rows with $p$ false must
be T. (And notice there is no $n$ at all in the T-F row: no multiple of 4 is odd. That is exactly why the fact is
true.)

### Another way to write it

$p \to q$ is false only when "$p$ is true and $q$ is false". So it is the same as **not** ($p$ and not $q$):

$$p \to q \equiv \neg(p \land \neg q) \equiv \neg p \lor q.$$

The second step is De Morgan's law. Check the last one with a table:

| $p$ | $q$ | $\neg p$ | $\neg p \lor q$ | $p \to q$ |
| --- | --- | --- | --- | --- |
| T | T | F | T | T |
| T | F | F | **F** | **F** |
| F | T | T | T | T |
| F | F | T | T | T |

The columns match. So "if it rains, I take an umbrella" says the same as "it does not rain, or I take an umbrella".

### Many ways to say $p \to q$

All of these mean $p \to q$:

- If $p$, then $q$.
- $q$ if $p$.
- $p$ **only if** $q$.
- $p$ is **sufficient** for $q$ (having $p$ is enough to get $q$).
- $q$ is **necessary** for $p$ (you cannot have $p$ without $q$).

"Only if" is the tricky one. "You can vote **only if** you are 18 or older" means: if you can vote, then you are 18 or
older. It does **not** say every 18-year-old can vote (they may need to register). So "$p$ only if $q$" is $p \to q$,
with the arrow pointing **away** from the "only if".

### If and only if: the biconditional $p \leftrightarrow q$

Sometimes the arrow goes both ways. "$p$ **if and only if** $q$", written $p \leftrightarrow q$ and called the
**biconditional**, means $p \to q$ **and** $q \to p$. It is true when $p$ and $q$ have the **same** truth value.

| $p$ | $q$ | $p \to q$ | $q \to p$ | $p \leftrightarrow q$ |
| --- | --- | --- | --- | --- |
| T | T | T | T | T |
| T | F | F | T | F |
| F | T | T | F | F |
| F | F | T | T | T |

Examples of true biconditionals:

- A whole number is even **if and only if** its last digit is even.
- A triangle has three equal sides **if and only if** it has three equal angles.

Mathematicians often shorten "if and only if" to **iff**. To prove an "iff", you must prove **both** directions.

## Worked examples

**1. The four cards.** Let $p$: "the card has a vowel" and $q$: "the card has an even number". The rule is
$p \to q$. It is broken only by a card with $p$ **true** and $q$ **false**: a vowel with an odd number. Check each card
for that possibility.

- **A**: $p$ is T. If the back is odd, the rule is broken. **Turn it.**
- **K**: $p$ is F. Whatever is on the back, $p \to q$ is T (the bottom rows). Leave it.
- **4**: $q$ is T. Whatever is on the back, $p \to q$ is T (rows 1 and 3). Leave it. A consonant on the back does not
  break the rule; the rule never said only vowels have even numbers.
- **7**: $q$ is F. If the back is a vowel, we have the T-F row and the rule is broken. **Turn it.**

So the answer is **A and 7**. People who choose 4 are testing the turned-around rule "if even, then vowel", which is a
different rule (the **converse**, in [the next lesson](04-converse-contrapositive.md)).

**2. Truth values.** Find the truth value of each conditional.

- "If $3 > 1$, then $5 > 2$." T → T: **T**.
- "If $3 > 1$, then $5 < 2$." T → F: **F**.
- "If $3 < 1$, then $5 < 2$." F → F: **T** (vacuously).
- "If 7 is even, then 7 is prime." F → T: **T** (vacuously).

**3. Translate "only if".** "A shape is a square only if it has four right angles." Write it as "if ... then".

"Only if" points the arrow away from itself: **If a shape is a square, then it has four right angles.** True. (The
other direction, "if it has four right angles, then it is a square", is false: a 2-by-5 rectangle.)

**4. Is it an iff?** "A whole number is divisible by 10 if and only if it ends in 0." Check both directions.

- If a number ends in 0, it is a whole number of tens, so it is divisible by 10. ✓
- If a number is divisible by 10, it is $10 \times k$ for a whole number $k$, and multiplying by 10 puts a 0 on the end.
  ✓

Both directions hold, so the biconditional is **true**.

## Try it

1. Find the truth value: (a) "If $2 + 2 = 4$, then 10 is even." (b) "If $2 + 2 = 4$, then 10 is odd." (c) "If
   $2 + 2 = 5$, then 10 is odd."
2. A sign says: "If you are under 12, you must wear a helmet." Which of these people break the rule? Mia, 10, with a
   helmet. Raj, 10, without. Sue, 14, without. Ted, 14, with.
3. Rewrite as "if ... then": (a) "You can enter only if you have a ticket." (b) "Being a square is sufficient for
   being a rectangle." (c) "Water is necessary for a plant to grow."
4. Build the truth table of $\neg q \to \neg p$ and compare it with $p \to q$.
5. On the table are four cards, each with a ride on one side and a height on the other: *rode the roller coaster*, *did
   not ride*, *135 cm*, *110 cm*. The rule is: "If you ride the roller coaster, then you are at least 120 cm tall."
   Which cards must you turn over?
6. Is it true? "A whole number is a multiple of 3 if and only if it is a multiple of 6." If not, which direction fails?
7. Show with a truth table that $p \leftrightarrow q$ is equivalent to $(p \land q) \lor (\neg p \land \neg q)$.
8. Sam says: "If I win the lottery, I will buy you a bike." Sam does not win, and does not buy a bike. Did Sam lie?
   What if Sam does not win but buys you a bike anyway?

??? note "Answers"
    1. (a) T → T: **T**. (b) T → F: **F**. (c) F → F: **T** (vacuously true).
    2. Only **Raj** (under 12, so the hypothesis is true, and no helmet, so the conclusion is false). Sue is 14, so the
       rule does not apply to her.
    3. (a) "If you can enter, then you have a ticket." (b) "If a shape is a square, then it is a rectangle." (c) "If a
       plant grows, then it has water."
    4. Rows ($p$, $q$): TT: $\neg q$ F, $\neg p$ F, F → F = T. TF: $\neg q$ T, $\neg p$ F, T → F = **F**. FT: $\neg q$
       F, so T. FF: $\neg q$ T, $\neg p$ T, T → T = T. So $\neg q \to \neg p$ reads T F T T, exactly like $p \to q$.
       They are equivalent. (This is the **contrapositive**, the star of the next lesson.)
    5. **"Rode"** (check the height is at least 120 cm) and **"110 cm"** (check they did not ride). This is the four-card
       puzzle in disguise, and most people find this version much easier, though the logic is identical.
    6. **False.** "If a multiple of 6, then a multiple of 3" is true ($6k = 3 \times 2k$). But "if a multiple of 3, then
       a multiple of 6" fails: 9 is a multiple of 3 but not of 6. So only one direction holds.
    7. $(p \land q) \lor (\neg p \land \neg q)$: TT gives T or F = T. TF gives F or F = F. FT gives F or F = F. FF gives
       F or T = T. So T F F T, the same as $p \leftrightarrow q$. Equivalent: "both true, or both false".
    8. **No** in both cases. Sam's promise was only about what happens if Sam wins. Sam did not win, so the hypothesis
       is false and the conditional is (vacuously) true either way. Buying a bike anyway is just generous.

## Common mistake

**Thinking a false hypothesis makes the conditional false.** "If pigs can fly, then I am a pilot" is **true** as a
conditional, because the hypothesis is false. It is a strange-sounding sentence, but it breaks no promise.

**Reading "only if" backwards.** "$p$ only if $q$" means $p \to q$, not $q \to p$. "I'll go only if you go" means "if I
go, you are going", not "if you go, I'll go".

## Where it leads

- Back: [Truth tables](02-truth-tables.md) · Next: [Converse, inverse and contrapositive](04-converse-contrapositive.md).
- [Level 4 page](index.md) · [Logic topic page](../index.md)
- The same idea in plain words, with the wet ground and the sprinkler: [If ... then](../level-3/02-if-then.md).
- In [level 5](../level-5/index.md), chains of conditionals become arguments ("if $p$ then $q$; $p$; so $q$").
- Geometry is full of if-then facts and iff facts, like the isosceles triangle facts in
  [Geometry](../../geometry/index.md).
- On the U of T shelf, implications and "iff" are in [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
