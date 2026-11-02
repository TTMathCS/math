---
title: "Valid arguments"
---

# Valid arguments

*Logic and puzzles · level 5, lesson 5 of 6*

## A question to start

Lewis Carroll, the author of *Alice in Wonderland*, was also a mathematician who taught logic. In his book *Symbolic
Logic* he set puzzles like this one. Take three facts as given:

1. No ducks waltz.
2. No officers ever decline to waltz.
3. All my poultry are ducks.

What can you conclude about my poultry and officers?

The sentences are silly on purpose. You cannot use what you know about ducks or officers, because you know nothing
about waltzing ducks. You can only use the **shape** of the reasoning. And yet a conclusion is forced on you: **none
of my poultry are officers**. By the end of this lesson you will be able to say exactly why, step by step, and why
the silliness does not matter at all.

## The idea

### Arguments, premises, conclusions

In logic an **argument** is not a quarrel. It is a list of statements called **premises** (the starting facts),
followed by one statement called the **conclusion**, which is claimed to follow from them. We often draw a line
before the conclusion, or write "therefore", shown by the symbol $\therefore$.

> If it rains, the match is cancelled.
>
> It is raining.
>
> $\therefore$ The match is cancelled.

### What "valid" means

An argument is **valid** if it is **impossible** for all the premises to be true while the conclusion is false. In
other words: **if** you accept the premises, you are forced to accept the conclusion.

Validity is about the **form**, not about whether the premises are actually true. The duck puzzle is valid even
though nobody has checked whether ducks waltz. And an argument can have true premises and a true conclusion and still
be **invalid**, if the conclusion does not follow (that is next lesson's topic).

How can we check "impossible"? For arguments built from statements $p$, $q$, $r$, a truth table lists every possible
situation. The argument is valid when **every row where all the premises are true also has the conclusion true**.

### Modus ponens: the basic step

The rain argument has this form:

> $p \to q$
>
> $p$
>
> $\therefore q$

It is called **modus ponens** (Latin for "the way of putting forward": you put forward $p$, and get $q$). Check it:

| $p$ | $q$ | $p \to q$ | $p$ | $q$ |
| --- | --- | --- | --- | --- |
| T | T | **T** | **T** | T |
| T | F | F | T | F |
| F | T | T | F | T |
| F | F | T | F | F |

Only the first row has both premises true (bold), and there the conclusion $q$ is true. Valid. This step is used so
often that most people do it without noticing: "If I press the switch the light comes on. I pressed it. So the light
is on."

### Modus tollens: running it backwards

> $p \to q$
>
> $\neg q$
>
> $\therefore \neg p$

This is **modus tollens** ("the way of taking away"). "If it rained, the ground is wet. The ground is dry. So it did
not rain." In the truth table, $p \to q$ and $\neg q$ are both true only in the last row ($p$ false, $q$ false), and
there $\neg p$ is true. Valid.

Why it works: in level 4 you met the **contrapositive**: $p \to q$ means the same as $\neg q \to \neg p$. Modus
tollens is just modus ponens applied to the contrapositive. Detectives use it constantly: "If the burglar had come
in through the window, there would be mud on the sill. There is no mud. So the burglar did not come through the
window."

### Chains of conditionals

> $p \to q$
>
> $q \to r$
>
> $\therefore p \to r$

This is called a **hypothetical syllogism**, or simply a **chain**. If $p$ is true, the first premise gives $q$, and
then the second gives $r$. So whenever $p$ holds, $r$ holds, which is what $p \to r$ says. Chains can be as long as
you like:

$$p \to q,\quad q \to r,\quad r \to s \quad \therefore\ p \to s.$$

Like dominoes: if each one knocks over the next, the first knocks over the last. Long chains are how mathematicians
get from simple facts to surprising ones.

### Ruling out: the disjunctive syllogism

> $p \lor q$
>
> $\neg p$
>
> $\therefore q$

"The key is in my coat or in my bag. It is not in my coat. So it is in my bag." If an *or* is true and one part is
false, the other part must carry it. This is the reasoning of every Sudoku and logic-grid puzzle you have solved: list
the possibilities, cross out all but one.

### Syllogisms about "all"

The oldest studied arguments, from the Greek philosopher Aristotle (about 2300 years ago), are about groups:

> All A are B.
>
> All B are C.
>
> $\therefore$ All A are C.

This is called a **syllogism**. The classic example: "All humans are mortal. Socrates is a human. Therefore Socrates is
mortal." (Here the middle line talks about one person, but the idea is the same.)

Why is it valid? Draw each group as a circle. "All A are B" means circle A sits **inside** circle B (A is a subset of
B, as in [lesson 1](01-sets.md)). "All B are C" means B sits inside C. Then A is forced to be inside C.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 190" role="img" aria-label="Three nested circles: A inside B inside C">
  <ellipse cx="160" cy="95" rx="145" ry="85" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <ellipse cx="175" cy="105" rx="95" ry="58" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor"/>
  <ellipse cx="195" cy="112" rx="45" ry="30" fill="#eea66f" fill-opacity="0.9" stroke="currentColor"/>
  <g font-size="17" fill="currentColor">
    <text x="40" y="100">C</text><text x="100" y="110">B</text><text x="188" y="118">A</text>
  </g>
</svg>
</div>

Pictures like this, where the circles show exactly how the groups sit inside each other, are called **Euler
diagrams** (after Leonhard Euler, who used them in letters teaching logic). In the language of sets: if
$A \subseteq B$ and $B \subseteq C$ then $A \subseteq C$. And in the language of quantifiers: if
$\forall x,\ A(x) \to B(x)$ and $\forall x,\ B(x) \to C(x)$, then for each $x$ the chain gives $A(x) \to C(x)$.

### Solving the duck puzzle

Rewrite each premise as an *if ... then* about any creature $x$:

1. "No ducks waltz": if $x$ is a duck, then $x$ does not waltz.
2. "No officers ever decline to waltz": if $x$ is an officer, then $x$ waltzes. Its **contrapositive**: if $x$ does
   not waltz, then $x$ is not an officer.
3. "All my poultry are ducks": if $x$ is my poultry, then $x$ is a duck.

Now line them up into a chain, starting from (3):

$$\text{my poultry} \to \text{duck} \to \text{does not waltz} \to \text{not an officer}.$$

So: **none of my poultry are officers.** The trick was to turn premise 2 around with the contrapositive so that the
links fit together end to end.

### Valid does not mean true

An argument can be valid with false premises:

> All cats can fly.
>
> Tom is a cat.
>
> $\therefore$ Tom can fly.

The form is perfect (a syllogism), so the argument is **valid**. The conclusion is false only because a premise is
false. An argument that is valid **and** has all its premises true is called **sound**, and the conclusion of a sound
argument must be true. Mathematics works by sound arguments: the premises are definitions and facts already proved,
and every step has a valid form.

## Worked examples

**1. Name the form.** Each argument is valid. Say which form it uses.

- "If a number ends in 0, it is divisible by 10. 370 ends in 0. So 370 is divisible by 10." **Modus ponens.**
- "If a shape is a square, its diagonals are equal. This shape's diagonals are not equal. So it is not a square."
  **Modus tollens.**
- "The answer is 12 or 15. It is not 12. So it is 15." **Disjunctive syllogism.**
- "If I save 5 dollars a week, I can buy the game by June. If I can buy the game by June, I can play it in the
  summer. So if I save 5 dollars a week, I can play it in the summer." **Chain.**

**2. Proving a chain valid with a truth table.** For $p \to q$, $q \to r$, $\therefore p \to r$ there are 8 rows.

| $p$ | $q$ | $r$ | $p \to q$ | $q \to r$ | $p \to r$ |
| --- | --- | --- | --- | --- | --- |
| T | T | T | **T** | **T** | T |
| T | T | F | T | F | F |
| T | F | T | F | T | T |
| T | F | F | F | T | F |
| F | T | T | **T** | **T** | T |
| F | T | F | T | F | T |
| F | F | T | **T** | **T** | T |
| F | F | F | **T** | **T** | T |

Both premises are true in rows 1, 5, 7 and 8, and in every one of them $p \to r$ is T. The only rows where the
conclusion is F (rows 2 and 4) each have a false premise. Valid.

**3. A longer argument in steps.** Premises: (1) If Sam is late, the bus left. (2) If the bus left, Kim drove.
(3) Kim did not drive. What follows?

- From (3) and (2), modus tollens: the bus did not leave.
- From that and (1), modus tollens again: Sam is not late.

Conclusion: **Sam is not late**. Each step is a valid form, so the whole argument is valid. (Or: chain (1) and (2)
into "if Sam is late, Kim drove", then one modus tollens with (3).)

**4. A syllogism with "no".** "No reptiles have fur. All snakes are reptiles. Therefore no snakes have fur." Draw
the snakes circle inside the reptiles circle, and the fur circle completely separate from reptiles. Then the snakes
circle cannot touch the fur circle. **Valid.** As a chain: snake $\to$ reptile $\to$ no fur.

**5. A number fact.** Known: every multiple of 6 is a multiple of 3, and every multiple of 3 has a digit sum that is a
multiple of 3 ([Number theory level 3](../../number-theory/level-3/03-tests-3-and-9.md)). Conclusion by syllogism:
every multiple of 6 has a digit sum that is a multiple of 3. Check: $6 \times 17 = 102$, digit sum 3. ✓ Then by modus
tollens: 7123 has digit sum 13, which is not a multiple of 3, so 7123 is **not** a multiple of 6.

## Try it

1. Complete with a valid conclusion: "If the shop is open, the lights are on. The shop is open. Therefore ..."
2. Complete: "If the shop is open, the lights are on. The lights are off. Therefore ..." Name the form.
3. Complete: "Either the cake has nuts or it has raisins (or both). It has no raisins. Therefore ..."
4. Use a truth table to show modus tollens is valid ($p \to q$, $\neg q$, $\therefore \neg p$).
5. What follows from: "All squares are rhombuses. All rhombuses have perpendicular diagonals."?
6. Chain these into one conclusion: "If I study, I understand. If I do not get nervous, I do well. If I understand, I
   do not get nervous."
7. Lewis Carroll style: "All babies are illogical. Nobody is despised who can manage a crocodile. Illogical persons
   are despised." What can you conclude about babies?
8. "All A are B. Some B are C. Therefore some A are C." Is this valid? Draw an Euler diagram where both premises are
   true and the conclusion is false, or explain why you cannot.

??? note "Answers"
    1. "... the lights are on." (Modus ponens.)
    2. "... the shop is not open." **Modus tollens.**
    3. "... it has nuts." (Disjunctive syllogism.)
    4. $p \to q$ is F only in row ($p$ T, $q$ F). $\neg q$ is T in rows where $q$ is F: ($p$ T, $q$ F) and ($p$ F,
       $q$ F). Both premises are T only in row ($p$ F, $q$ F), where $\neg p$ is T. So no row has true premises and a
       false conclusion: valid.
    5. "All squares have perpendicular diagonals." (Syllogism: squares $\subseteq$ rhombuses $\subseteq$ shapes with
       perpendicular diagonals.)
    6. Order the links so they fit end to end: study $\to$ understand $\to$ not nervous $\to$ do well. Conclusion:
       **"If I study, I do well."**
    7. Write as *if ... then*: baby $\to$ illogical; can manage a crocodile $\to$ not despised (contrapositive:
       despised $\to$ cannot manage a crocodile); illogical $\to$ despised. Chain: baby $\to$ illogical $\to$
       despised $\to$ cannot manage a crocodile. Conclusion: **babies cannot manage crocodiles.** (This is one of
       Carroll's own puzzles.)
    8. **Invalid.** Draw A inside B, and C overlapping B but on the other side, not touching A. "All A are B" is
       true, "some B are C" is true, but no A is C. Example: all cats are animals, some animals are fish, but no
       cats are fish. One counterexample of the form is enough to show a form is invalid.

## Common mistake

**Thinking "valid" means "true".** Validity says only: **if** the premises are true, the conclusion must be. "All cats
can fly, Tom is a cat, so Tom can fly" is valid but has a false premise. Always ask two questions: does it follow, and
are the starting facts true?

**Joining a chain at the wrong end.** From "$p \to q$" and "$r \to q$" nothing follows about $p$ and $r$: the arrows
both point **into** $q$ and do not link up. Links must fit like dominoes: the end of one is the start of the next.

## Where it leads

- Back: [Quantifiers](04-quantifiers.md) · Next: [Fallacies](06-fallacies.md), the arguments that look valid but are
  not.
- [Level 5 page](index.md) · [Logic topic page](../index.md) · Conditionals and contrapositives were built in
  [level 4](../level-4/04-converse-contrapositive.md).
- Chains of valid steps from definitions are exactly what a proof is: [level 7](../level-7/index.md). Patterns uses a
  chain that never ends, [proof by induction](../../patterns/level-8/01-proof-by-induction.md).
- On the U of T shelf, valid reasoning and proof is the first unit of [MAT137](../../../uoft/MAT137/unit01.md) and
  [MAT158](../../../uoft/MAT158H1/unit01.md); building an argument in an essay is
  [ENG140 unit 9](../../../uoft/ENG140Y1/unit09.md).
