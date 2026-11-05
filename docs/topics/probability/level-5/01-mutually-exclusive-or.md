---
title: "Mutually exclusive events and \"or\""
---

# Mutually exclusive events and "or"

*Probability · level 5, lesson 1 of 6*

## A question to start

A weather forecast says: "30% chance of rain tomorrow, and 20% chance of snow."

Your friend says: "So there is a 50% chance of rain **or** snow. Just add them."

Is your friend right? Sometimes adding chances is exactly the right thing to do, and sometimes it gives a wrong
answer, even an impossible one. By the end of this lesson you will know exactly when adding is allowed, and **why**.
(The answer for the weather is at the end of "Try it".)

## The idea

### Events are groups of outcomes

Remember from level 3: an **outcome** is one possible result of an experiment, and the **sample space** is the list of
all the outcomes. When you roll an ordinary six-sided die, the sample space is

$$\{1, 2, 3, 4, 5, 6\}.$$

An **event** is a group of outcomes, the ones that make some statement true. "Roll an even number" is the event
$\{2, 4, 6\}$. "Roll more than 4" is the event $\{5, 6\}$. We name events with capital letters, like $A$ and $B$, and
write $P(A)$ for "the probability of $A$".

### What "or" means in mathematics

In everyday talk, "tea or coffee?" usually means one or the other, not both. In probability, **"A or B" means A
happens, or B happens, or both happen**. It is the event made of every outcome that is in $A$, in $B$, or in both.

So if $A$ is "even" $= \{2, 4, 6\}$ and $B$ is "more than 4" $= \{5, 6\}$, then

$$A \text{ or } B = \{2, 4, 5, 6\}.$$

Notice that 6 is in both groups, but we list it only once. That small detail is the whole story of this lesson and
the next one.

### Mutually exclusive events

Two events are **mutually exclusive** if they **cannot both happen** on the same go. "Mutually" means "each to the
other", and "exclusive" means "shutting out": each one shuts the other out. In terms of outcomes, they have **no
outcome in common**.

On one roll of a die:

- "Roll a 1 or a 2" and "roll a 6" are mutually exclusive. No single roll is both.
- "Roll an even number" and "roll an odd number" are mutually exclusive.
- "Roll an even number" and "roll more than 4" are **not** mutually exclusive: a 6 is both.

A picture called a **Venn diagram** makes this easy to see. The rectangle is the whole sample space, and each event is
a loop drawn round its outcomes. Mutually exclusive events are loops that do not touch.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 140" role="img" aria-label="A rectangle holding the numbers 1 to 6. An orange loop surrounds 1 and 2 (event A); a separate blue loop surrounds 6 (event B). The loops do not overlap.">
  <rect x="10" y="10" width="340" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="85" cy="72" rx="52" ry="32" fill="#eea66f" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="300" cy="72" r="30" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="18" text-anchor="middle" fill="currentColor">
    <text x="60" y="78">1</text><text x="110" y="78">2</text><text x="160" y="78">3</text>
    <text x="205" y="78">4</text><text x="250" y="78">5</text><text x="300" y="78">6</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="80" y="32">A</text><text x="296" y="34">B</text><text x="20" y="124">sample space: one roll of a die</text>
  </g>
</svg>
</div>

### The addition rule for mutually exclusive events

If $A$ and $B$ are mutually exclusive, then

$$P(A \text{ or } B) = P(A) + P(B).$$

In the picture, $P(A) = \tfrac26$ and $P(B) = \tfrac16$, so $P(A \text{ or } B) = \tfrac26 + \tfrac16 = \tfrac36 = \tfrac12$.
Check by counting: $A \text{ or } B = \{1, 2, 6\}$, which is 3 outcomes out of 6. ✓

### Why adding works

When the outcomes are **equally likely**, a probability is a count:

$$P(A) = \frac{\text{number of outcomes in } A}{\text{number of outcomes in the sample space}}.$$

To count the outcomes in "A or B", you count the ones in $A$ and then the ones in $B$. Because the loops do not
overlap, **no outcome gets counted twice**, and none is missed. So the count for "A or B" is the count for $A$ plus
the count for $B$. Divide everything by the size of the sample space and the counts become probabilities:

$$\frac{a + b}{n} = \frac{a}{n} + \frac{b}{n}.$$

That is the whole proof. It also tells you exactly when it **fails**: when some outcome lies in both loops, adding the
counts counts it twice. That is the next lesson.

### When outcomes are not equally likely

Adding still works even when outcomes are not equally likely. Think of a spinner. The chance of landing in a region
is the fraction of the circle that region covers. If two regions do not overlap, the area of the two together is the
area of one plus the area of the other.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 170" role="img" aria-label="A spinner divided into four sectors: red 45 percent, blue 30 percent, green 15 percent, yellow 10 percent">
  <g transform="translate(85,85)" stroke="currentColor" stroke-width="1.5">
    <path d="M 0 0 L 70 0 A 70 70 0 0 1 -66.6 21.6 Z" fill="#eea66f"/>
    <path d="M 0 0 L -66.6 21.6 A 70 70 0 0 1 0 -70 Z" fill="#9cc9ea"/>
    <path d="M 0 0 L 0 -70 A 70 70 0 0 1 56.6 -41.1 Z" fill="#7ccf9a"/>
    <path d="M 0 0 L 56.6 -41.1 A 70 70 0 0 1 70 0 Z" fill="none"/>
  </g>
  <g font-size="13" fill="currentColor">
    <rect x="180" y="30" width="14" height="14" fill="#eea66f"/><text x="200" y="42">red 45%</text>
    <rect x="180" y="60" width="14" height="14" fill="#9cc9ea"/><text x="200" y="72">blue 30%</text>
    <rect x="180" y="90" width="14" height="14" fill="#7ccf9a"/><text x="200" y="102">green 15%</text>
    <rect x="180" y="120" width="14" height="14" fill="none" stroke="currentColor"/><text x="200" y="132">yellow 10%</text>
  </g>
</svg>
</div>

So the rule is true for every kind of chance, not just counting. In fact, in 1933 the Russian mathematician Andrey
Kolmogorov wrote down a short list of starting rules for all of probability, and "add the chances of events that
cannot happen together" is one of them. Everything else in this level is built on top of it.

### More than two events

If several events are all mutually exclusive (no two of them can happen together), you can add all of them:

$$P(A \text{ or } B \text{ or } C) = P(A) + P(B) + P(C).$$

On the spinner, $P(\text{red or green or yellow}) = 0.45 + 0.15 + 0.10 = 0.70$.

### The complement rule is a special case

An event $A$ and its opposite, "not A" (also called the **complement** of $A$), are always mutually exclusive: an
outcome is either in $A$ or it is not. And between them they cover the whole sample space, so "A or not A" is
certain, with probability 1. Adding:

$$P(A) + P(\text{not } A) = 1, \quad\text{so}\quad P(\text{not } A) = 1 - P(A).$$

You met this rule in level 3. Now you can see where it comes from. On the spinner, $P(\text{not blue}) = 1 - 0.30 = 0.70$,
the same answer as adding red, green and yellow.

### How to test "mutually exclusive"

Ask one question: **"Is there a single outcome that is in both events?"** Try to build one. If you can, they are not
mutually exclusive. If it is impossible, they are.

<figure class="play" data-play="venn"><span class="ai-tag">AI-created</span><figcaption><b>Overlap or not.</b> Multiples of 2 and of 3 overlap at 6, 12, 18; pick 4 and 6 and see a different overlap.</figcaption></figure>

## Worked examples

**1. A die.** Find the probability of rolling a 2 or a 5.

- Can one roll be both a 2 and a 5? No. So the events are mutually exclusive.
- $P(2 \text{ or } 5) = \tfrac16 + \tfrac16 = \tfrac26 = \tfrac13$.

**2. Cards.** A card is taken at random from an ordinary pack of 52 (four suits of 13: hearts and diamonds are red,
clubs and spades are black). Find $P(\text{club or red card})$.

- Can a card be a club and red? No: clubs are black. Mutually exclusive.
- $P(\text{club}) = \tfrac{13}{52}$ and $P(\text{red}) = \tfrac{26}{52}$.
- $P(\text{club or red}) = \tfrac{13}{52} + \tfrac{26}{52} = \tfrac{39}{52} = \tfrac34$.
- Check with the complement: "not club and not red" means spades, $\tfrac{13}{52} = \tfrac14$, and $1 - \tfrac14 = \tfrac34$. ✓

**3. Two dice.** In some dice games, a first throw totalling 7 or 11 wins at once. With two dice, which is more
likely: a total of 7 or 11, or a double?

From the 6-by-6 table of level 3, there are 36 equally likely outcomes.

- A total of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), which is 6 ways.
- A total of 11: (5,6), (6,5), which is 2 ways.
- A roll cannot total both 7 and 11, so $P(7 \text{ or } 11) = \tfrac{6}{36} + \tfrac{2}{36} = \tfrac{8}{36} = \tfrac29$.
- A double: (1,1) up to (6,6), 6 ways, so $P(\text{double}) = \tfrac{6}{36} = \tfrac16$.

So "7 or 11" is more likely: $\tfrac{8}{36}$ against $\tfrac{6}{36}$.

**4. A spinner where outcomes are not equally likely.** Using the spinner above, find $P(\text{red or green})$ and
$P(\text{not yellow})$.

- The regions do not overlap: $P(\text{red or green}) = 0.45 + 0.15 = 0.60$.
- $P(\text{not yellow}) = 1 - 0.10 = 0.90$. (Or $0.45 + 0.30 + 0.15 = 0.90$. ✓)

**5. When adding goes wrong.** With two dice, find $P(\text{total of 8 or a double})$.

- Is there an outcome that is both? Yes: (4,4) totals 8 **and** is a double. So these are **not** mutually exclusive.
- Adding would give $\tfrac{5}{36} + \tfrac{6}{36} = \tfrac{11}{36}$. But (4,4) has been counted twice.
- Count carefully: the totals of 8 are (2,6), (3,5), (4,4), (5,3), (6,2), and the doubles add (1,1), (2,2), (3,3),
  (5,5), (6,6) that are new. That is $5 + 5 = 10$ outcomes, so the answer is $\tfrac{10}{36} = \tfrac{5}{18}$.

The next lesson turns this "take away the double count" into a rule.

## Try it

1. One die is rolled. Which pairs of events are mutually exclusive? (a) "even" and "odd"; (b) "even" and "more than 4";
   (c) "a 1" and "a prime number" (the primes on a die are 2, 3, 5); (d) "less than 3" and "more than 3".
2. A card is drawn from a full pack. Find $P(\text{ace or king})$.
3. Two dice are rolled. Find $P(\text{a total of 2, 3 or 12})$.
4. A bag holds 4 red, 3 blue, 2 green and 1 yellow counter. One is taken at random. Find $P(\text{red or yellow})$ and
   $P(\text{not green})$.
5. A spinner lands on red with probability 0.25 and on blue with probability 0.4. Everything else is green. Find
   $P(\text{green})$ and $P(\text{red or green})$.
6. Sam says: "For two mutually exclusive events, $P(A) = 0.6$ and $P(B) = 0.5$." Explain why Sam must be wrong.
7. Back to the forecast: 30% chance of rain, 20% chance of snow. Why can you not just say 50% for "rain or snow"? What
   is the largest and the smallest that $P(\text{rain or snow})$ could be?

??? note "Answers"
    1. (a) Yes: no number is both even and odd. (b) No: 6 is both. (c) Yes: 1 is not a prime number, so no outcome is
       in both. (d) Yes: no number is both less than 3 and more than 3 (3 itself is in neither).
    2. A card cannot be both an ace and a king, so add: $\dfrac{4}{52} + \dfrac{4}{52} = \dfrac{8}{52} = \dfrac{2}{13}$.
    3. A total of 2: 1 way, (1,1). A total of 3: 2 ways, (1,2) and (2,1). A total of 12: 1 way, (6,6). These cannot
       happen together, so $P = \dfrac{1 + 2 + 1}{36} = \dfrac{4}{36} = \dfrac19$.
    4. There are 10 counters. $P(\text{red or yellow}) = \dfrac{4}{10} + \dfrac{1}{10} = \dfrac{5}{10} = \dfrac12$.
       $P(\text{not green}) = 1 - \dfrac{2}{10} = \dfrac{8}{10} = \dfrac45$.
    5. The three colours are mutually exclusive and cover everything, so they add to 1:
       $P(\text{green}) = 1 - 0.25 - 0.4 = 0.35$. Then $P(\text{red or green}) = 0.25 + 0.35 = 0.6$
       (which is also $1 - P(\text{blue}) = 1 - 0.4$ ✓).
    6. If they were mutually exclusive, $P(A \text{ or } B) = 0.6 + 0.5 = 1.1$. No probability can be more than 1, so
       the events cannot be mutually exclusive with those chances. They must overlap (or a number is wrong).
    7. Rain and snow **can** both happen on the same day (rain in the morning, snow at night, or sleet), so they are not
       mutually exclusive and adding may count those days twice. If they never happen together, the chance is the
       full $30\% + 20\% = 50\%$, the largest it can be. If every snowy day were also rainy, "rain or snow" would just
       be "rain", 30%, the smallest it can be. So the answer is somewhere from 30% to 50%.

## Common mistake

**Adding chances of events that can happen together.** Before you add, always ask "can both happen at once?" If
there is even one outcome in both, plain adding counts it twice, and in bad cases gives an answer above 1. A total
above 1 is a loud alarm that you have added overlapping events.

**Thinking "or" means "one but not both".** In probability, "A or B" includes the case where both happen. If you
really want "exactly one of them", you must say so and take the "both" cases out.

## Where it leads

- Next: [The general addition rule](02-general-addition-rule.md), which handles events that overlap.
- [Level 5 page](index.md) · [Probability topic page](../index.md)
- Back to the level before: [Level 4: Two things at once](../level-4/index.md), with tables of outcomes.
- Counting outcomes in groups without overlap is the addition principle of [Counting](../../counting/index.md).
- Loops, overlaps and "or" are also the language of sets in [Logic](../../logic/index.md), and first-year university
  mathematics starts there: [MAT137 Unit 1: Logic, sets and proofs](../../../uoft/MAT137/unit01.md).
