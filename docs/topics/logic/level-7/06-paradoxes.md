---
title: "Paradoxes"
---

# Paradoxes

*Logic and puzzles · level 7, lesson 6 of 6*

## A question to start

Read this sentence:

> **This sentence is false.**

Is it true or false?

If it is true, then what it says is right, and what it says is that it is false. So it is false. If it is false,
then what it says ("this sentence is false") is wrong, so it is not false: it is true. Each answer flips into the
other. It cannot be true, and it cannot be false.

Every proof in this level relied on the rule that a statement is either true or false. Here is a sentence that
seems to break that rule with five words. This lesson looks at the most famous paradoxes, finds out exactly where
each one goes wrong, and shows why mathematicians take them very seriously.

## The idea

### What a paradox is

A **paradox** is an argument that starts from things that seem obviously true, uses steps that seem obviously
valid, and ends at something that seems obviously false or impossible. Since something has to give, a paradox always
teaches you something. There are three kinds, depending on what gives:

- **Surprising but true.** The conclusion only *seems* impossible. Example: in a room of just 23 people, the chance
  that two share a birthday is more than one half (about 0.507, ignoring leap years). Our intuition is wrong, not the
  maths. (See [Probability](../../probability/index.md).)
- **A hidden mistake.** One step is quietly invalid. Example: the "proofs" that $2 = 1$ which secretly divide by 0.
- **A real contradiction.** The steps are all valid, so one of the starting assumptions must be false. These are
  the important ones: they show that something everyone believed cannot be right.

### The liar

"This sentence is false" is the **liar paradox**, discussed since ancient Greece. A related story goes that the
Cretan poet Epimenides said "All Cretans are liars." That version is not a real paradox: if some Cretan has ever
told the truth, the sentence is simply false, and nothing flips. The true liar needs a sentence that talks about
**its own** truth.

Look at it as a proof by contradiction. Call the sentence $L$. It says "$L$ is false". So if $L$ is a statement,
then

$$L \text{ is true} \iff L \text{ is false}.$$

That is impossible for any statement. So the assumption must be wrong: **$L$ is not a statement**. Remember from
[Statements and letters](../level-4/01-statements-letters.md) that a statement is a sentence that is definitely true
or false. "Close the door" is not one; neither, it turns out, is the liar sentence, even though it looks like one.

You have seen this before. In [Knights and knaves](../level-3/03-knights-and-knaves.md), nobody on the island can
say "I am a knave": a knight would be lying and a knave would be telling the truth. The liar sentence is the same
trap, with nobody to blame.

The serious lesson: **a sentence that refers to its own truth can go wrong**. A language that can talk about the
truth of its own sentences has to be handled with great care. In the 1930s the logician Alfred Tarski showed that,
for languages like the language of arithmetic, "true" cannot be defined inside the language itself without allowing
a liar sentence. And Kurt Gödel used a close cousin of the liar, "this sentence cannot be proved", to discover the
limits of proof ([level 8](../level-8/04-godel-incompleteness.md)).

### The barber

In a village there is a barber, a man, who shaves **exactly** those men of the village who do not shave themselves.
Every man who does not shave himself is shaved by the barber, and the barber shaves nobody who shaves himself.

**Does the barber shave himself?**

- If he does, then he is a man who shaves himself, and the barber shaves nobody like that. So he does not.
- If he does not, then he is a man who does not shave himself, and the barber shaves every such man. So he does.

Both cases contradict themselves. What gives? This one has a clean answer: **no such barber can exist**. The
description is contradictory, the way "a square circle" is. The paradox is really a proof by contradiction that
the village described is impossible.

Written in symbols, the reason is short. Let $S(x, y)$ mean "$x$ shaves $y$", and let $b$ be the barber. The rule
says: for every man $x$, $S(b, x) \leftrightarrow \neg S(x, x)$. A for-all statement holds for every $x$, so it
holds for $x = b$: $S(b, b) \leftrightarrow \neg S(b, b)$. That is a statement equivalent to its own negation:
impossible.

Bertrand Russell used the barber to explain a much more serious paradox he found in 1901, about sets that do not
contain themselves. That one could not be dismissed by saying "there is no such village", and it shook the
foundations of mathematics. It is the subject of [Russell's paradox](../level-8/03-russells-paradox.md).

### The surprise test

On Friday afternoon a teacher announces: "There will be a test one day next week, Monday to Friday. You will not
know which day until that morning: it will be a surprise."

A clever student reasons like this.

1. The test cannot be on **Friday**. If no test has happened by Thursday afternoon, we would know it must be
   Friday, and it would not be a surprise.
2. So Friday is ruled out. Then it cannot be on **Thursday** either: if no test has happened by Wednesday
   afternoon, and Friday is impossible, we would know it is Thursday.
3. In the same way, Wednesday, Tuesday and Monday are ruled out.
4. So there can be no surprise test at all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="Five days Monday to Friday; the student rules out Friday first, then Thursday, then each earlier day in turn">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="15" y="30" width="70" height="44" rx="6" fill="#9cc9ea"/>
    <rect x="95" y="30" width="70" height="44" rx="6" fill="#9cc9ea"/>
    <rect x="175" y="30" width="70" height="44" rx="6" fill="#7ccf9a"/>
    <rect x="255" y="30" width="70" height="44" rx="6" fill="#9cc9ea"/>
    <rect x="335" y="30" width="70" height="44" rx="6" fill="#eea66f"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="50" y="57">Mon</text><text x="130" y="57">Tue</text><text x="210" y="57">Wed</text>
    <text x="290" y="57">Thu</text><text x="370" y="57">Fri</text>
  </g>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="370" y="92">ruled out 1st</text>
    <text x="290" y="92">ruled out 2nd</text>
    <text x="50" y="92">ruled out 5th</text>
    <text x="210" y="92">the test came</text>
    <text x="210" y="106">here: surprise!</text>
    <text x="210" y="20">the student "proves" no day is possible</text>
  </g>
</svg>
</div>

The student relaxes. On Wednesday morning the teacher hands out the test, and the student is completely surprised.
The teacher's announcement came true.

Where did the reasoning go wrong? This paradox has been argued over by philosophers since the 1940s, and there is
**no single agreed answer**. One popular view: the announcement is about what the student will **know**, and the
student's first step assumes they will still believe the announcement on Thursday afternoon. But by then the
student's own argument has "proved" the announcement false, so they cannot trust it any more, and Friday would be a
surprise after all. Once a statement talks about our own knowledge of it, the ordinary rules of logic are not enough
to settle it. That is the honest state of the question.

### Why paradoxes matter

Paradoxes are not just party tricks. They are the smoke alarms of mathematics.

- The barber, in its set-theory form, showed that the most natural way to think about sets was contradictory, and
  led to the careful axioms used for sets today.
- The liar led to Tarski's work on truth and to Gödel's theorem on the limits of proof.
- The same self-referring trick proves that no computer program can decide whether every program stops
  ([the halting problem](../level-8/05-halting-problem.md)).

Every time, the shape is the same: something is made to talk about **itself**, and a contradiction appears. In each
case the paradox became a theorem: *there is no such barber*, *there is no set of all sets*, *there is no such
program*.

## Worked examples

**1. The missing dollar (a hidden mistake).** Three friends pay 30 dollars for a room, 10 each. The clerk realises
the room costs 25 dollars and sends a porter with 5 dollars. The porter keeps 2 dollars and gives each friend 1
dollar back. Now each friend has paid 9 dollars, and $3 \times 9 = 27$. Add the porter's 2 dollars: 29. Where is
the missing dollar?

There is none. The step "27 + 2" adds two things that should be **subtracted**. The friends paid 27 dollars in
total; of that, 25 is with the clerk and 2 is with the porter: $25 + 2 = 27$. The other 3 dollars are in the
friends' pockets: $27 + 3 = 30$. The question added the porter's 2 to the 27, which already contains it. A hidden
mistake, dressed up as a paradox.

**2. The card (a real contradiction).** One side of a card says "The sentence on the other side is true." The other
side says "The sentence on the other side is false." Can the sentences be true or false?

Call them $A$ (first side) and $B$ (second side). $A$ says "$B$ is true", and $B$ says "$A$ is false".

- *Case $A$ true*: then $B$ is true, so $A$ is false. Contradiction.
- *Case $A$ false*: then $B$ is not true, so $B$ is false, so "$A$ is false" is wrong, so $A$ is true. Contradiction.

Neither sentence alone mentions itself, but together they make a loop, and the loop is a liar. So neither is a
statement. Self-reference can hide inside a cycle.

**3. The barber in symbols.** Show that no person, anywhere, can be "a person who likes exactly those people who do
not like themselves".

Suppose there is such a person $b$. Then for every person $x$, $b$ likes $x$ if and only if $x$ does not like $x$.
Take $x = b$: $b$ likes $b$ if and only if $b$ does not like $b$. A statement equivalent to its negation is
impossible. So no such person exists. ∎ Change "likes" to any relation at all, and the proof still works.

## Try it

1. "This sentence has five words." Is it true, false, or a paradox? So is every sentence that talks about itself a
   paradox?
2. "This sentence is true." Can it be true? Can it be false? How is it different from the liar?
3. Which kind of paradox is each: (a) the birthday fact above; (b) a "proof" that $1 = 2$ that divides by $a - b$
   where $a = b$; (c) the barber?
4. A library makes a catalogue that lists exactly those catalogues in the library that do not list themselves.
   Should the new catalogue list itself? What do you conclude?
5. Three friends pay 60 dollars, 20 each, for a meal that costs 50. The waiter brings back 10 dollars, keeps 4 and
   gives each friend 2. "Each paid 18, which is 54, plus 4 is 58. Where are the other 2 dollars?" Explain.
6. Call an adjective **autological** if it describes itself ("short" is a short word; "English" is English) and
   **heterological** if it does not ("long" is not a long word). Is the word "heterological" heterological?
7. A teacher says on Thursday: "There will be a surprise test tomorrow, and you will not expect it." Can the
   announcement come true?
8. Harder. Explain why the sentence "the smallest positive whole number that cannot be described in fewer than
   twenty English words" leads to trouble. (Count the words in the description.)

??? note "Answers"
    1. It has exactly five words (This, sentence, has, five, words), so it is **true**. Self-reference is not
       always a paradox; it causes trouble only when a sentence denies its own truth (or, as here, in loops).
    2. It can consistently be true, and it can consistently be false: nothing inside it decides which. It is not
       contradictory like the liar, but it is not a proper statement either: nothing fixes its truth value. It is
       called the truth-teller.
    3. (a) Surprising but true. (b) A hidden mistake (dividing by 0). (c) A real contradiction, which shows that no
       such barber can exist.
    4. If it lists itself, it is a catalogue that lists itself, so it should not be listed. If it does not list
       itself, it is one that does not list itself, so it must be listed. Contradiction either way: **no such
       catalogue can exist**. It is the barber again.
    5. The friends paid 54 dollars in total: 50 is with the restaurant and 4 with the waiter ($50 + 4 = 54$). The
       other 6 dollars are back in their pockets ($54 + 6 = 60$). Adding the waiter's 4 to the 54 counts it twice.
    6. If "heterological" is heterological, it describes itself, so it is autological. If it is autological, it
       describes itself, and what it says is "heterological", so it is heterological. Contradiction either way. This
       is the Grelling paradox, another self-referring loop: the word cannot consistently be sorted.
    7. A student who believes it expects a test tomorrow, so the test would be no surprise: believed, the
       announcement cannot come true. But a student who reasons "so it cannot happen, and there will be no test" no
       longer expects it, and is surprised when it comes. Whether it is a surprise depends on what the student
       believes about the announcement itself. That is the whole paradox in a one-day version.
    8. The description has 15 words, fewer than twenty. If such a number exists, the description describes it in
       15 words, so it **can** be described in fewer than twenty words. Contradiction. (Since there are only
       finitely many descriptions under twenty words, some number really cannot be described that way, so the
       trouble lies in the word "described", which is not exact.) This is the Berry paradox.

## Common mistake

**Thinking a paradox breaks logic.** It does not. A real paradox is a valid argument from a false assumption. The
job is to find the false assumption ("there is such a barber", "every sentence is a statement"), and the result is
usually a theorem.

**Calling every surprise a paradox.** The birthday fact is surprising, not contradictory. Check the reasoning before
deciding which kind you have.

## Where it leads

- Back: [Counterexamples and cases](05-counterexamples-cases.md) · Next level: [Level 8: the limits of logic](../level-8/index.md),
  starting with [Predicate logic](../level-8/01-predicate-logic.md).
- [Level 7 page](index.md) · [Logic topic page](../index.md)
- Paradoxes about the infinite (Hilbert's hotel, and more): [Infinity](../../infinity/index.md).
- Surprising-but-true results in chance: [Probability](../../probability/index.md).
- Where the barber becomes serious: [Russell's paradox](../level-8/03-russells-paradox.md), and where the liar becomes
  a theorem: [Gödel's incompleteness theorems](../level-8/04-godel-incompleteness.md).
