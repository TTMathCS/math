---
title: "The general addition rule"
---

# The general addition rule

*Probability · level 5, lesson 2 of 6*

## A question to start

In a class of 30 students, 18 play a sport and 15 play a musical instrument.

But $18 + 15 = 33$, and there are only 30 students. Has somebody made a mistake?

No. Some students do both, and they were counted in **both** groups. If you are told that 8 students do both, you can
work out exactly how many do at least one, and how many do neither. This lesson shows how, and turns it into a rule
for **any** two events, whether they overlap or not.

## The idea

### "A and B": the overlap

In the last lesson, "A or B" meant A happens, or B happens, or both. Now we need a name for the "both" part.
**"A and B"** is the event that $A$ and $B$ **both** happen: the outcomes that are in both groups. On a Venn diagram
it is where the two loops overlap.

Take one card from an ordinary pack of 52. Let $H$ be "the card is a heart" (13 cards) and $K$ be "the card is a
king" (4 cards). Exactly one card is both: the king of hearts. So "H and K" is just that one card.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 190" role="img" aria-label="Venn diagram for a pack of 52 cards. The hearts loop holds 12 cards on its own, the overlap with the kings loop holds 1 card (the king of hearts), the kings loop holds 3 cards on its own, and 36 cards lie outside both loops.">
  <rect x="10" y="10" width="340" height="170" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="140" cy="95" r="68" fill="#eea66f" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="225" cy="95" r="58" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="18" text-anchor="middle" fill="currentColor">
    <text x="112" y="101">12</text><text x="186" y="101">1</text><text x="250" y="101">3</text><text x="320" y="165">36</text>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="105" y="44">hearts</text><text x="245" y="52">kings</text><text x="186" y="120">both</text>
    <text x="300" y="30">neither</text>
  </g>
</svg>
</div>

The four regions are: hearts that are not kings (12), the king of hearts (1), kings that are not hearts (3), and
cards that are neither (36). Check: $12 + 1 + 3 + 36 = 52$. ✓

### The rule

How many cards are "heart or king"? If you add $13 + 4 = 17$, the king of hearts has been counted twice: once as a
heart and once as a king. Take it away once and you get $17 - 1 = 16$. The diagram agrees: $12 + 1 + 3 = 16$.

Dividing by 52 turns this into probabilities. That gives the **general addition rule**:

$$P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B).$$

For the cards:

$$P(H \text{ or } K) = \frac{13}{52} + \frac{4}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}.$$

### Why the rule is true

Look at the three regions inside the loops in the picture. Call their sizes $x$ (only $A$), $y$ (both) and $z$ (only
$B$).

- The loop $A$ holds $x + y$ outcomes.
- The loop $B$ holds $y + z$ outcomes.
- "A or B" holds $x + y + z$ outcomes.

Adding the two loops gives $(x + y) + (y + z) = x + 2y + z$. That has one $y$ too many. Subtracting the overlap $y$
fixes it exactly:

$$(x + y) + (y + z) - y = x + y + z.$$

Every outcome in "A or B" is now counted exactly once. That is a complete proof when outcomes are equally likely. When
they are not (a spinner, say), the same argument works with areas, or with the rule of lesson 1 applied to the three
separate regions, which are mutually exclusive:

$$P(A \text{ or } B) = P(\text{only } A) + P(\text{both}) + P(\text{only } B).$$

This way of fixing a double count is called **inclusion-exclusion**: include everything, then exclude what was
counted too often.

### The old rule is a special case

If $A$ and $B$ are mutually exclusive, the overlap is empty, so $P(A \text{ and } B) = 0$ and the rule becomes
$P(A) + P(B)$, exactly the rule of lesson 1. So you can **always** use the general rule. When the events cannot both
happen, the last term is simply zero.

### Using the rule backwards

The rule links four numbers: $P(A)$, $P(B)$, $P(A \text{ or } B)$ and $P(A \text{ and } B)$. Know any three and you
can find the fourth. This is often how the rule is used in surveys, where people report "or" or "and" directly.

### Some limits it gives

Because $P(A \text{ and } B)$ is never negative, the rule shows that

$$P(A \text{ or } B) \le P(A) + P(B).$$

Adding chances can only **over**-estimate "or", never under-estimate it. And because "A or B" contains all of $A$,
$P(A \text{ or } B)$ is at least as big as $P(A)$ and at least as big as $P(B)$.

### Two-way tables do the bookkeeping

A **two-way table** sorts outcomes by two questions at once. For the class of 30 at the start, with 8 students who do
both:

| | Instrument | No instrument | Total |
| --- | --- | --- | --- |
| **Sport** | 8 | 10 | 18 |
| **No sport** | 7 | 5 | 12 |
| **Total** | 15 | 15 | 30 |

Fill it in from what you know: 8 in the top-left; then $18 - 8 = 10$ across, $15 - 8 = 7$ down; then the totals fix
the last cell, $12 - 7 = 5$. "Sport or instrument" is every cell except "no sport, no instrument": $8 + 10 + 7 = 25$.
The rule agrees: $18 + 15 - 8 = 25$.

### Three events (going further)

With three loops $A$, $B$, $C$, adding the three counts counts the pairwise overlaps twice, so you take them away.
But then the middle part, in all three loops, has been added 3 times and taken away 3 times, so it has vanished; add
it back once:

$$P(A \text{ or } B \text{ or } C) = P(A) + P(B) + P(C) - P(A \text{ and } B) - P(A \text{ and } C) - P(B \text{ and } C) + P(A \text{ and } B \text{ and } C).$$

Example: how many whole numbers from 1 to 100 are divisible by 2, 3 or 5? Divisible by 2: 50. By 3: 33. By 5: 20. By
both 2 and 3 (that is, by 6): 16. By 10: 10. By 15: 6. By all three (by 30): 3. So the count is
$50 + 33 + 20 - 16 - 10 - 6 + 3 = 74$, and a number picked at random from 1 to 100 has a $\tfrac{74}{100}$ chance.

## Worked examples

**1. A die, overlapping events.** One die is rolled. Find $P(\text{even or more than 4})$.

- Even $= \{2, 4, 6\}$, so $P = \tfrac36$. More than 4 $= \{5, 6\}$, so $P = \tfrac26$.
- Both: $\{6\}$, so $P = \tfrac16$.
- $P(\text{even or more than 4}) = \tfrac36 + \tfrac26 - \tfrac16 = \tfrac46 = \tfrac23$.
- Check by listing: $\{2, 4, 5, 6\}$, 4 outcomes out of 6. ✓

**2. The class.** In the class of 30, find the probability that a student picked at random does at least one of the
activities, and the probability they do neither.

- $P(\text{sport or instrument}) = \tfrac{18}{30} + \tfrac{15}{30} - \tfrac{8}{30} = \tfrac{25}{30} = \tfrac56$.
- $P(\text{neither}) = 1 - \tfrac56 = \tfrac16$, which is the 5 students in the table.

**3. A survey in percentages.** In a survey, 60% of people like pizza, 50% like burgers, and 30% like both. What
percentage like at least one? What percentage like neither?

- $P(\text{pizza or burgers}) = 0.6 + 0.5 - 0.3 = 0.8$, so 80%.
- Neither: $1 - 0.8 = 0.2$, so 20%.

**4. Using the rule backwards.** $P(A) = 0.5$, $P(B) = 0.4$ and $P(A \text{ or } B) = 0.7$. Find $P(A \text{ and } B)$.

- $0.7 = 0.5 + 0.4 - P(A \text{ and } B)$.
- So $P(A \text{ and } B) = 0.9 - 0.7 = 0.2$.

**5. Two dice.** Two dice are rolled, one red and one blue. Find $P(\text{red die shows 6, or total is at least 10})$.

- Red shows 6: 6 outcomes, (6,1) to (6,6).
- Total at least 10: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6), which is 6 outcomes (red die first).
- Both: (6,4), (6,5), (6,6), which is 3 outcomes.
- $P = \tfrac{6}{36} + \tfrac{6}{36} - \tfrac{3}{36} = \tfrac{9}{36} = \tfrac14$.

## Try it

1. A card is drawn from a full pack. Find $P(\text{red or queen})$.
2. One die is rolled. Find $P(\text{odd or less than 3})$, and check by listing.
3. $P(A) = 0.45$, $P(B) = 0.35$ and $P(A \text{ and } B) = 0.15$. Find $P(A \text{ or } B)$ and $P(\text{neither})$.
4. In a class of 32, 20 students have a dog, 14 have a cat, and 5 have neither. How many have both? Draw the Venn
   diagram with a number in each region.
5. A card is drawn. Find $P(\text{face card or spade})$. (The face cards are the jack, queen and king of each suit.)
6. A whole number from 1 to 50 is picked at random. Find the probability it is a multiple of 3 or a multiple of 5.
7. $P(A) = 0.7$ and $P(B) = 0.6$. What is the smallest possible value of $P(A \text{ and } B)$? The largest?
8. A whole number from 1 to 60 is picked at random. Use the three-event rule to find the probability it is divisible
   by 2, 3 or 5.

??? note "Answers"
    1. Red: 26 cards. Queens: 4. Both (red queens): 2. $P = \dfrac{26 + 4 - 2}{52} = \dfrac{28}{52} = \dfrac{7}{13}$.
    2. Odd $= \{1, 3, 5\}$, less than 3 $= \{1, 2\}$, both $= \{1\}$. $P = \dfrac36 + \dfrac26 - \dfrac16 = \dfrac46 = \dfrac23$.
       Listing: $\{1, 2, 3, 5\}$, 4 out of 6. ✓
    3. $P(A \text{ or } B) = 0.45 + 0.35 - 0.15 = 0.65$. $P(\text{neither}) = 1 - 0.65 = 0.35$.
    4. At least one pet: $32 - 5 = 27$ students. So $20 + 14 - \text{both} = 27$, and both $= 34 - 27 = 7$. Regions:
       dog only $20 - 7 = 13$, both 7, cat only $14 - 7 = 7$, neither 5. Check: $13 + 7 + 7 + 5 = 32$. ✓
    5. Face cards: 12. Spades: 13. Both (jack, queen, king of spades): 3. $P = \dfrac{12 + 13 - 3}{52} = \dfrac{22}{52} = \dfrac{11}{26}$.
    6. Multiples of 3 up to 50: 16 (3 to 48). Of 5: 10. Of both, so of 15: 3 (15, 30, 45). Count $= 16 + 10 - 3 = 23$,
       so $P = \dfrac{23}{50}$.
    7. Since $P(A \text{ or } B) \le 1$: $0.7 + 0.6 - P(A \text{ and } B) \le 1$, so $P(A \text{ and } B) \ge 0.3$.
       The smallest is **0.3**. The overlap cannot be bigger than the smaller event, so the largest is **0.6** (when
       all of $B$ lies inside $A$).
    8. Divisible by 2: 30. By 3: 20. By 5: 12. By 6: 10. By 10: 6. By 15: 4. By 30: 2.
       Count $= 30 + 20 + 12 - 10 - 6 - 4 + 2 = 44$, so $P = \dfrac{44}{60} = \dfrac{11}{15}$.

## Common mistake

**Forgetting to subtract the overlap.** If your answer for "or" is bigger than it should be (or bigger than 1), you
have probably counted the overlap twice. Always ask "what is in both?" before adding.

**Subtracting when there is no overlap, or subtracting twice.** For mutually exclusive events the overlap is empty, so
nothing is taken away. And the overlap is taken away **once**, not twice: it was counted twice, and you want it
counted once.

## Where it leads

- Back: [Mutually exclusive events and "or"](01-mutually-exclusive-or.md) · Next: [The multiplication rule](03-multiplication-rule.md),
  which finds $P(A \text{ and } B)$ when you are not given it.
- [Level 5 page](index.md) · [Probability topic page](../index.md)
- Inclusion-exclusion is a key tool of [Counting](../../counting/index.md); the three-event version counts things like
  the numbers with no factor 2, 3 or 5, which leads into [Number theory](../../number-theory/index.md).
- Two-way tables come back in [level 6](../level-6/01-given-two-way-tables.md), where they give conditional
  probability.
- Sets, "and", "or" and Venn diagrams are the first unit of university calculus:
  [MAT137 Unit 1: Logic, sets and proofs](../../../uoft/MAT137/unit01.md).
