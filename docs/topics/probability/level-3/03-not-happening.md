---
title: "The chance of not happening"
---

# The chance of not happening

*Probability · level 3, lesson 3 of 6*

## A question to start

A school raffle sells 250 tickets. One ticket will be drawn to win the prize. You bought 3 tickets.

What is the chance that you do **not** win?

You could try to count all the tickets that are not yours. That is fine for 250 tickets, but what if there were a
million? There is a much quicker way, and it turns out to be one of the most useful tricks in all of probability.
Sometimes the easiest way to find the chance of something is to find the chance that it **doesn't** happen first.

## The idea

### The opposite of an event

Every event has an opposite: the event that it does **not** happen. If the event is called $A$, its opposite is
called "not $A$". Mathematicians also call it the **complement** of $A$. (A complement is the part that completes
something, the part that makes it whole. It has nothing to do with saying something nice, which is a compliment, with
an i.)

"Not $A$" is made of **all the outcomes that are not in $A$**.

- For a die, if $A$ is "roll a 6", which is $\{6\}$, then "not $A$" is $\{1, 2, 3, 4, 5\}$.
- If $A$ is "even", which is $\{2, 4, 6\}$, then "not $A$" is $\{1, 3, 5\}$: odd.

Picture the sample space as a rectangle holding every outcome. The event $A$ is a circle inside it. "Not $A$" is
everything in the rectangle outside the circle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 180" role="img" aria-label="A rectangle holding all outcomes; a blue circle inside is the event A; the orange part outside the circle is not A">
  <rect x="20" y="15" width="300" height="150" rx="6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <circle cx="130" cy="90" r="50" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="130" y="95" font-size="16" text-anchor="middle" fill="currentColor">A</text>
  <text x="250" y="150" font-size="14" text-anchor="middle" fill="currentColor">not A</text>
  <text x="170" y="33" font-size="12" text-anchor="middle" fill="currentColor">all outcomes</text>
</svg>
</div>

Each time you do the experiment, the outcome lands **either** inside the circle **or** outside it. Never both, and
never neither. So exactly one of $A$ and "not $A$" happens.

### The rule

Look at the die again, with $A$ = "roll a 6".

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 155" role="img" aria-label="A bar cut into six equal parts numbered 1 to 6; part 6 is blue and is one sixth; parts 1 to 5 are orange and make five sixths; together they make the whole bar">
  <rect x="30" y="30" width="60" height="50" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="60" y="61" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <rect x="90" y="30" width="60" height="50" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="120" y="61" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <rect x="150" y="30" width="60" height="50" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="180" y="61" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <rect x="210" y="30" width="60" height="50" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="61" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <rect x="270" y="30" width="60" height="50" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="300" y="61" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <rect x="330" y="30" width="60" height="50" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="360" y="61" font-size="15" text-anchor="middle" fill="currentColor">6</text>
  <path d="M 30 92 L 30 100 L 330 100 L 330 92" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="180" y="120" font-size="12" text-anchor="middle" fill="currentColor">not a 6: 5 of the 6 parts = 5/6</text>
  <path d="M 330 22 L 330 14 L 390 14 L 390 22" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="360" y="10" font-size="12" text-anchor="middle" fill="currentColor">a 6: 1/6</text>
  <text x="210" y="145" font-size="12" text-anchor="middle" fill="currentColor">together: 6/6 = 1, the whole bar</text>
</svg>
</div>

The six faces are split into two groups: 1 face in $A$, 5 faces in "not $A$". The two groups together are all 6
faces. So

$$P(6) + P(\text{not } 6) = \frac16 + \frac56 = \frac66 = 1$$

This works for any event, because the outcomes in $A$ and the outcomes in "not $A$" together are always all of the
outcomes, each counted once. So their probabilities always add up to 1. Turn that around, and you get the rule:

$$P(\text{not } A) = 1 - P(A)$$

In words: **the chance that something does not happen is 1 minus the chance that it does.**

Why "1 minus"? Because 1 stands for the whole, everything that could happen. Take away the part where $A$ happens, and
what is left is the part where it does not.

### The answer to the raffle

Your chance of winning is $P(\text{win}) = \tfrac{3}{250}$, because 3 of the 250 equally likely tickets are yours. So

$$P(\text{not win}) = 1 - \frac{3}{250} = \frac{250}{250} - \frac{3}{250} = \frac{247}{250}$$

That is very close to 1: almost certain. You never had to think about the 247 other tickets one by one.

### When "not" is the easy way round

The rule is most useful when the event you want has lots of outcomes, but its opposite has only a few. Then you count
the few, and subtract.

Here is an example. Spin a spinner with 20 equal parts, numbered 1 to 20. What is the chance of **not** getting a
number that ends in 0? Only two numbers end in 0: 10 and 20. So

$$P(\text{ends in } 0) = \frac{2}{20}, \qquad P(\text{does not end in } 0) = 1 - \frac{2}{20} = \frac{18}{20} = \frac{9}{10}$$

Counting 18 outcomes is slow and easy to get wrong. Counting 2 is not.

### Saying the opposite correctly

The rule is easy. The hard part is often saying **exactly** what the opposite of an event is. Everyday words can
trick you.

- The opposite of "more than 4" is **not** "less than 4". On a die, "more than 4" is $\{5, 6\}$. Its opposite is
  $\{1, 2, 3, 4\}$, which is "4 or less". The 4 belongs to the opposite!
- Toss two coins. The opposite of "both heads" is **not** "both tails". "Both heads" is $\{HH\}$. Everything else is
  $\{HT, TH, TT\}$, which is "at least one tail". "Both tails" is only one part of it.
- The opposite of "at least one head" (one head or two heads) is "**no** heads", which means both tails.

A good test: an event and its opposite must **cover every outcome** and **never share one**. "More than 4" and "less
than 4" fail the test: the outcome 4 is in neither of them.

### Not, not

What is the opposite of "not $A$"? It is just $A$ again. Two "nots" cancel, like turning round twice. The rule agrees:
$1 - P(\text{not } A) = 1 - (1 - P(A)) = P(A)$.

And the two ends of the scale are opposites of each other: the opposite of the certain event is the impossible one.
$1 - 1 = 0$ and $1 - 0 = 1$.

## Worked examples

**1. Not a heart.** A card is taken from a full pack of 52. $P(\text{heart}) = \tfrac{13}{52} = \tfrac14$, so

$$P(\text{not a heart}) = 1 - \frac14 = \frac34$$

Check by counting: the cards that are not hearts are 13 diamonds, 13 clubs and 13 spades, $39$ cards, and
$\tfrac{39}{52} = \tfrac34$. ✓

**2. At least one head.** Toss two coins. The sample space is $\{HH, HT, TH, TT\}$, 4 equally likely outcomes.

- "At least one head" means one head or two heads.
- Its opposite is "no heads": only $\{TT\}$, so $P(\text{no heads}) = \tfrac14$.
- So $P(\text{at least one head}) = 1 - \tfrac14 = \tfrac34$.

Check: at least one head is $\{HH, HT, TH\}$, 3 outcomes out of 4. ✓ With two coins counting is easy anyway, but
the same trick works for 10 coins, where there are 1024 outcomes to list. Only one of them, all tails, has no heads.

**3. A marble that is not blue.** A bag holds 7 red, 9 blue, 3 green and 1 white marble: 20 in all.
$P(\text{blue}) = \tfrac{9}{20}$, so $P(\text{not blue}) = 1 - \tfrac{9}{20} = \tfrac{11}{20}$.

Check: not blue means red, green or white: $7 + 3 + 1 = 11$. ✓

**4. Working backwards.** The chance that a bus is late is $\tfrac{2}{7}$. What is the chance it is **not** late?
$1 - \tfrac27 = \tfrac57$. Here there is no list of outcomes at all. The rule still works, because "late" and "not
late" between them cover everything that can happen, with no overlap.

**5. Finding the missing piece.** A spinner can land on red, blue or green. $P(\text{red}) = \tfrac{1}{2}$ and
$P(\text{blue}) = \tfrac{1}{3}$. What is $P(\text{green})$?

"Green" is the opposite of "red or blue". Red and blue together have probability $\tfrac12 + \tfrac13 = \tfrac36 + \tfrac26 = \tfrac56$. So $P(\text{green}) = 1 - \tfrac56 = \tfrac16$.

## Try it

1. A fair die is rolled. Find $P(\text{not } 3)$ and $P(\text{not even})$.
2. The chance of snow tomorrow is $\tfrac{3}{10}$. What is the chance it does not snow?
3. Write the opposite of each event for one roll of a die, as a list of outcomes and in words: (a) "less than 3";
   (b) "a 1 or a 6"; (c) "at most 5".
4. A bag has 50 marbles; 4 are gold. What is the chance of taking a marble that is not gold?
5. Toss two coins. Give the opposite of "at least one tail" and find its probability. Then find
   $P(\text{at least one tail})$.
6. A spinner lands on A, B, C or D. $P(A) = \tfrac{1}{4}$, $P(B) = \tfrac{1}{4}$ and $P(C) = \tfrac{1}{3}$. Find
   $P(D)$.
7. Zoe says: "The opposite of 'I roll more than 2' is 'I roll less than 2', so its probability is $\tfrac16$." Find
   her mistake and give the right answer.
8. Ten coins are tossed. There are 1024 equally likely outcomes (lists of 10 letters, H or T). What is the chance of
   at least one head?

??? note "Answers"
    1. $P(\text{not } 3) = 1 - \tfrac16 = \tfrac56$. $P(\text{not even}) = 1 - \tfrac12 = \tfrac12$ (that is "odd").
    2. $1 - \tfrac{3}{10} = \tfrac{7}{10}$.
    3. (a) Less than 3 is $\{1, 2\}$; the opposite is $\{3, 4, 5, 6\}$, "3 or more". (b) The opposite is
       $\{2, 3, 4, 5\}$, "from 2 to 5". (c) At most 5 is $\{1, 2, 3, 4, 5\}$; the opposite is $\{6\}$, "a 6".
    4. $P(\text{gold}) = \tfrac{4}{50}$, so $P(\text{not gold}) = 1 - \tfrac{4}{50} = \tfrac{46}{50} = \tfrac{23}{25}$.
    5. The opposite of "at least one tail" is "no tails", which is $\{HH\}$, probability $\tfrac14$. So
       $P(\text{at least one tail}) = 1 - \tfrac14 = \tfrac34$.
    6. $P(A) + P(B) + P(C) = \tfrac14 + \tfrac14 + \tfrac13 = \tfrac{3}{12} + \tfrac{3}{12} + \tfrac{4}{12} = \tfrac{10}{12}$. So $P(D) = 1 - \tfrac{10}{12} = \tfrac{2}{12} = \tfrac16$.
    7. "More than 2" is $\{3, 4, 5, 6\}$. Its opposite must hold every other outcome: $\{1, 2\}$, which is "2 or
       less", not "less than 2". Zoe forgot the 2. The right answer is $1 - \tfrac46 = \tfrac26 = \tfrac13$.
    8. Only one outcome has no heads: all ten tails. So $P(\text{no heads}) = \tfrac{1}{1024}$ and
       $P(\text{at least one head}) = 1 - \tfrac{1}{1024} = \tfrac{1023}{1024}$.

## Common mistake

**Getting the opposite wrong at the edge.** The opposite of "more than 4" is "4 or less", not "less than 4". Check
that the event and its opposite together hold every outcome and share none.

**Thinking "both heads" and "both tails" are opposites.** They cannot both happen, but they also leave things out
(HT and TH). Opposites must cover everything. The opposite of "both heads" is "at least one tail".

## Where it leads

- Back: [Probability as a fraction](02-probability-fraction.md) · Next: [Two dice](04-two-dice.md), where the
  opposite trick saves counting in a table of 36.
- [Level 3 page](index.md) · [Probability topic page](../index.md)
- This rule grows into the "at least one" method of [level 5](../level-5/index.md): the chance of at least one 6 in
  four rolls is $1 - P(\text{no } 6)$.
- Subtracting fractions from 1: [Numbers level 4](../../numbers/level-4/01-adding-fractions.md).
- "Not", "and" and "or" are the words of [Logic](../../logic/index.md).
