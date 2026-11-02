---
title: "De Morgan's laws"
---

# De Morgan's laws

*Logic and puzzles · level 5, lesson 3 of 6*

## A question to start

A shop sign says: **"We are open on Saturday and Sunday."** Your friend says the sign is wrong. What exactly is your
friend claiming?

Many people answer: "the shop is closed on Saturday and Sunday". But think about it. If the shop is open on
Saturday and closed on Sunday, the sign is already wrong. Your friend only needs **one** of the two days to fail.
So the true opposite is:

> The shop is closed on Saturday **or** closed on Sunday (or both).

The *and* turned into an *or*. Now try the other way. The opposite of "I will call you or text you" is not "I will
not call you or not text you". It is "I will **neither** call **nor** text you": not call **and** not text. The *or*
turned into an *and*.

These two swaps are called **De Morgan's laws**, after Augustus De Morgan, a 19th-century London mathematician who
wrote them down for logic and for sets. They are short, they are everywhere, and they are the most common place for
clear thinking to go wrong.

## The idea

### The two laws

In the symbols of level 4, with $\neg$ for *not*, $\land$ for *and*, $\lor$ for *or*:

$$\neg(p \land q) \equiv \neg p \lor \neg q, \qquad \neg(p \lor q) \equiv \neg p \land \neg q.$$

The sign $\equiv$ means **logically equivalent**: the two sides are true in exactly the same situations, so they say
the same thing.

In words: **to take the opposite of an *and* or an *or*, take the opposite of each part and swap *and* with *or*.**

### Why: a reason in words

**First law.** When is "$p$ and $q$" false? An *and* is a demanding promise: it needs **both** parts. So it fails as
soon as **at least one** part fails. "At least one part fails" is "not $p$ or not $q$".

**Second law.** When is "$p$ or $q$" false? An *or* is an easy promise: **one** true part is enough to keep it. So it
fails only when **every** part fails: "not $p$ and not $q$".

Demanding promises are easy to break; easy promises are hard to break. That is the whole idea.

### Why: a truth table

A truth table checks every possible case, so it is a complete proof for statements with a few letters.

| $p$ | $q$ | $p \land q$ | $\neg(p \land q)$ | $\neg p$ | $\neg q$ | $\neg p \lor \neg q$ |
| --- | --- | --- | --- | --- | --- | --- |
| T | T | T | **F** | F | F | **F** |
| T | F | F | **T** | F | T | **T** |
| F | T | F | **T** | T | F | **T** |
| F | F | F | **T** | T | T | **T** |

The two bold columns match in all four rows, so $\neg(p \land q) \equiv \neg p \lor \neg q$.

| $p$ | $q$ | $p \lor q$ | $\neg(p \lor q)$ | $\neg p$ | $\neg q$ | $\neg p \land \neg q$ |
| --- | --- | --- | --- | --- | --- | --- |
| T | T | T | **F** | F | F | **F** |
| T | F | T | **F** | F | T | **F** |
| F | T | T | **F** | T | F | **F** |
| F | F | F | **T** | T | T | **T** |

Again the bold columns match. Both laws are proved.

### Why: a picture

In the last lesson, *or* became union, *and* became intersection and *not* became complement. So De Morgan's laws
are also laws about sets:

$$(A \cup B)^c = A^c \cap B^c, \qquad (A \cap B)^c = A^c \cup B^c.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="Left: the region outside both circles shaded green, which is the complement of A union B. Right: the complement of A in orange and the complement of B in blue overlap exactly in the same region outside both circles">
  <defs>
    <mask id="l53-mA">
      <rect x="0" y="0" width="440" height="150" fill="white"/>
      <circle cx="295" cy="65" r="38" fill="black"/>
    </mask>
    <mask id="l53-mB">
      <rect x="0" y="0" width="440" height="150" fill="white"/>
      <circle cx="345" cy="65" r="38" fill="black"/>
    </mask>
    <mask id="l53-mAB">
      <rect x="0" y="0" width="440" height="150" fill="white"/>
      <circle cx="75" cy="65" r="38" fill="black"/>
      <circle cx="125" cy="65" r="38" fill="black"/>
    </mask>
  </defs>
  <rect x="10" y="10" width="180" height="110" fill="#7ccf9a" mask="url(#l53-mAB)"/>
  <rect x="10" y="10" width="180" height="110" fill="none" stroke="currentColor"/>
  <circle cx="75" cy="65" r="38" fill="none" stroke="currentColor"/>
  <circle cx="125" cy="65" r="38" fill="none" stroke="currentColor"/>
  <rect x="230" y="10" width="180" height="110" fill="#eea66f" fill-opacity="0.6" mask="url(#l53-mA)"/>
  <rect x="230" y="10" width="180" height="110" fill="#9cc9ea" fill-opacity="0.6" mask="url(#l53-mB)"/>
  <rect x="230" y="10" width="180" height="110" fill="none" stroke="currentColor"/>
  <circle cx="295" cy="65" r="38" fill="none" stroke="currentColor"/>
  <circle cx="345" cy="65" r="38" fill="none" stroke="currentColor"/>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="75" y="70">A</text><text x="125" y="70">B</text>
    <text x="295" y="70">A</text><text x="345" y="70">B</text>
    <text x="100" y="142">(A ∪ B)ᶜ</text>
    <text x="320" y="142">Aᶜ (orange) and Bᶜ (blue)</text>
  </g>
</svg>
</div>

On the left, shade everything **outside the union**: only the "neither" region. On the right, colour $A^c$ orange and
$B^c$ blue. Where **both** colours lie, that is $A^c \cap B^c$, and it is exactly the "neither" region again. Same
region, same set. (Do the same for the second law: everything except the middle lens is in $A^c$ or in $B^c$.)

### Why: chasing an element

The picture convinces, but a proof that works for **any** sets goes element by element. Take any $x$ in $U$.

- $x \in (A \cup B)^c$
- means: not ($x \in A$ or $x \in B$)
- means (first De Morgan law for statements): $x \notin A$ and $x \notin B$
- means: $x \in A^c$ and $x \in B^c$
- means: $x \in A^c \cap B^c$.

Each line means exactly the same as the one before, so an element is in the left set exactly when it is in the right
set. The two sets have the same elements, so they are equal. This "element chasing" is how set facts are proved at
university.

### More than two parts

The laws stretch to any number of parts. For three:

$$\neg(p \land q \land r) \equiv \neg p \lor \neg q \lor \neg r, \qquad \neg(p \lor q \lor r) \equiv \neg p \land \neg q \land \neg r.$$

"Everyone passed: Ann and Ben and Cal" fails if **somebody** failed. "At least one of them came" fails only if
**nobody** came. This is the bridge to the next lesson, where "and over everybody" becomes "for all", and "or over
everybody" becomes "there exists".

### Inequalities are hidden *ands*

A double inequality like $2 < x < 5$ is short for "$2 < x$ **and** $x < 5$". So its opposite is

$$\neg(2 < x \text{ and } x < 5) \equiv x \le 2 \text{ or } x \ge 5.$$

On a number line, "between 2 and 5" is one piece, and "not between" is **two** pieces going off in both directions.
Notice also that the opposite of $<$ is $\ge$, not $>$: the number 5 itself is not between 2 and 5, so it must be in
the opposite.

### The opposite of *if ... then*

From level 4, "if $p$ then $q$" is false in only one case: $p$ true and $q$ false. So

$$\neg(p \to q) \equiv p \land \neg q.$$

The opposite of a promise "if you tidy your room, you get ice cream" is **not** another *if* sentence. It is "you
tidied your room **and** you got no ice cream". (One way to see it with De Morgan: $p \to q$ means the same as
$\neg p \lor q$, and the opposite of that is $p \land \neg q$.)

## Worked examples

**1. Everyday opposites.** Write the opposite of each, using De Morgan.

- "The soup is hot and salty." Opposite: "The soup is not hot **or** it is not salty."
- "I will wear a hat or a scarf." Opposite: "I will wear no hat **and** no scarf."
- "The number is even and bigger than 10." Opposite: "The number is odd **or** at most 10." (Not even is odd; not
  bigger than 10 is at most 10.)

**2. A password rule.** A website says: "Your password is accepted if it has at least 8 characters **and** contains a
digit." When is a password rejected? Rejected means not accepted: fewer than 8 characters **or** no digit (or both).
"abc1" is rejected (too short) even though it has a digit; "abcdefgh" is rejected (no digit) even though it is long
enough.

**3. Checking with a three-letter table.** Is $\neg(p \lor q \lor r)$ the same as $\neg p \land \neg q \land \neg r$?
$p \lor q \lor r$ is false in exactly one row of the 8: all three false. So $\neg(p \lor q \lor r)$ is true in
exactly that row. And $\neg p \land \neg q \land \neg r$ is true only when all three $\neg$ parts are true, which is
the same single row. Same table, so yes.

**4. A number line.** Write without the word *not*: "it is not true that $x \le -1$ or $x > 4$".

De Morgan: not ($x \le -1$) **and** not ($x > 4$), which is $x > -1$ and $x \le 4$, that is,
$-1 < x \le 4$. Two pieces going outward became one piece in the middle.

**5. A coding condition.** A game repeats a turn **while** "lives > 0 and time < 60". When does it stop? It stops when
the condition is false: lives $\le 0$ **or** time $\ge 60$. Whichever happens first ends the game. Programmers use De
Morgan every day, and getting it wrong is a classic bug (see
[coding with conditions](../level-4/05-coding-conditions.md) in level 4).

## Try it

1. Write the opposite of: "Mia plays the violin and the piano."
2. Write the opposite of: "We will go to the beach or to the park."
3. Write the opposite of "$x \ge 0$ and $y \ge 0$" (the point $(x, y)$ is in the first quarter of the plane, edges
   included). Describe the opposite region in words.
4. Write without *not*: "it is not true that $3 \le n \le 7$".
5. A ride's rule: "You may ride if you are at least 120 cm tall **and** at least 8 years old **and** with an adult."
   Write the rule for who may **not** ride.
6. Use a truth table to check whether $\neg(p \land q)$ is the same as $\neg p \land \neg q$. If not, find a row
   where they differ and say it in everyday words.
7. Show with region numbers from [lesson 2](02-union-intersection.md) that $(A \cap B)^c = A^c \cup B^c$ for two
   sets (regions: A only, B only, both, neither).
8. Write the opposite of "If it is a weekday, then I take the bus."

??? note "Answers"
    1. "Mia does not play the violin **or** she does not play the piano."
    2. "We will go neither to the beach nor to the park": not the beach **and** not the park.
    3. "$x < 0$ **or** $y < 0$." In words: the point is to the left of the $y$-axis or below the $x$-axis (or both):
       every part of the plane except the closed first quarter.
    4. $3 \le n \le 7$ means $3 \le n$ and $n \le 7$. The opposite: $n < 3$ **or** $n > 7$.
    5. You may not ride if you are under 120 cm, **or** under 8 years old, **or** without an adult. Any one of
       these is enough to stop you.
    6. They differ in two rows. With $p$ true and $q$ false: $\neg(p \land q)$ is T but $\neg p \land \neg q$ is F.
       (Same with $p$ false and $q$ true.) In words: "not (hot and salty)" is true for a hot soup with no salt, but
       "not hot and not salty" is false for it. That is exactly the mistake in the shop-sign question.
    7. $A \cap B$ is "both", so $(A \cap B)^c$ is A only, B only, neither. $A^c$ is B only and neither; $B^c$ is
       A only and neither; their union is A only, B only, neither. Same three regions. ✓
    8. The opposite of "if $p$ then $q$" is "$p$ and not $q$": "It is a weekday **and** I do not take the bus."

## Common mistake

**Negating the parts but forgetting to swap.** The opposite of "hot and salty" is **not** "not hot and not salty".
That sentence is much stronger: it describes only cold, unsalted soup, and leaves out hot unsalted soup, which also
breaks "hot and salty". Whenever you push a *not* inside brackets, the *and* and the *or* must swap.

**Getting the edge of an inequality wrong.** The opposite of $x < 5$ is $x \ge 5$, not $x > 5$. The number 5 has to
go somewhere.

## Where it leads

- Back: [Union, intersection, complement](02-union-intersection.md) · Next: [Quantifiers](04-quantifiers.md), where
  De Morgan's laws grow into the rules for negating "for all" and "there exists".
- [Level 5 page](index.md) · [Logic topic page](../index.md) · Truth tables are built in [level 4](../level-4/index.md).
- De Morgan's laws are how logic circuits are simplified: [Boolean algebra](../level-6/02-boolean-algebra.md) in
  level 6. In [Probability](../../probability/level-5/04-at-least-one.md), "at least one" is the opposite of "none",
  which is De Morgan in disguise.
- On the U of T shelf: [MAT137 unit 1](../../../uoft/MAT137/unit01.md) and [MAT158 unit 1](../../../uoft/MAT158H1/unit01.md);
  conditions in code are in [CSC108 unit 2](../../../uoft/CSC108H1/unit02.md).
