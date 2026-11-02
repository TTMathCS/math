---
title: "Probability as a fraction"
---

# Probability as a fraction

*Probability · level 3, lesson 2 of 6*

## A question to start

There are two bags of marbles. You may pick one bag, put your hand in without looking, and pull out one marble. If it
is red, you win a prize.

- **Bag A** has 3 red marbles and 2 blue ones.
- **Bag B** has 5 red marbles and 4 blue ones.

Bag B has more red marbles, so lots of people choose bag B. Is that the better choice?

Hold on to your guess. By the end of the lesson you will be able to give each bag an exact number for its chance, and
compare them like any two numbers.

## The idea

### From "3 out of 6" to a number

In level 2 you described chances in words: unlikely, even chance, likely. Words are useful, but they are not exact.
"Likely" could mean a little more than half or almost certain. Numbers fix that.

In the last lesson you learned to count the outcomes in an event. Now use that count. When **every outcome is equally
likely**, the **probability** of an event is

$$P(\text{event}) = \frac{\text{number of outcomes in the event}}{\text{number of outcomes in the sample space}}$$

The letter $P$ is short for "the probability of". You say $P(\text{even})$ as "the probability of even".

For one fair die there are 6 equally likely outcomes. The event "even" holds 3 of them: 2, 4 and 6. So

$$P(\text{even}) = \frac{3}{6} = \frac{1}{2}$$

The top number (the **numerator**) counts the outcomes you want. Some books call them the **favourable** outcomes. The
bottom number (the **denominator**) counts every outcome there is.

### Why a fraction is the right number

Why should "3 outcomes out of 6" give the number $\tfrac36$? Here is a reason you can picture.

Imagine rolling the die 600 times. The die is fair, so no face is special: each face comes up about as often as each
other face. Share 600 rolls equally among 6 faces and each face gets about 100 rolls.

The event "even" happens whenever we see a 2, a 4 or a 6. That is about $100 + 100 + 100 = 300$ rolls out of 600,
which is $\tfrac{300}{600} = \tfrac36 = \tfrac12$ of them.

So the probability tells you **what fraction of the time** the event happens, if you do the experiment again and
again. A probability of $\tfrac12$ means "about half the time". A probability of $\tfrac16$ means "about one time in
six". (Lesson 5 looks closely at the word "about".)

### The scale from 0 to 1

The number of outcomes in an event can be anything from 0 (none of them) up to all of them. So:

- The smallest a probability can be is $\tfrac{0}{6} = 0$. That is the **impossible** event.
- The biggest a probability can be is $\tfrac{6}{6} = 1$. That is the **certain** event.

A probability can **never** be less than 0 or more than 1. You cannot have fewer than none of the outcomes, or more
than all of them. If you ever work out a probability of $\tfrac76$ or $-\tfrac12$, something has gone wrong.

The chance line from level 2 now has numbers on it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 115" role="img" aria-label="A number line from 0 to 1 with marks at 0, one sixth, one half, five sixths and 1, labelled impossible, unlikely, even chance, likely and certain, with die events placed on it">
  <line x1="30" y1="60" x2="430" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="30.0" y1="52" x2="30.0" y2="68" stroke="currentColor" stroke-width="2"/>
  <text x="30" y="88" font-size="13" text-anchor="middle" fill="currentColor">0</text>
  <line x1="96.7" y1="52" x2="96.7" y2="68" stroke="currentColor" stroke-width="2"/>
  <text x="96.7" y="88" font-size="13" text-anchor="middle" fill="currentColor">1/6</text>
  <line x1="230.0" y1="52" x2="230.0" y2="68" stroke="currentColor" stroke-width="2"/>
  <text x="230.0" y="88" font-size="13" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="363.3" y1="52" x2="363.3" y2="68" stroke="currentColor" stroke-width="2"/>
  <text x="363.3" y="88" font-size="13" text-anchor="middle" fill="currentColor">5/6</text>
  <line x1="430.0" y1="52" x2="430.0" y2="68" stroke="currentColor" stroke-width="2"/>
  <text x="430" y="88" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="30" y="40" font-size="12" text-anchor="middle" fill="currentColor">impossible</text>
  <text x="96.7" y="40" font-size="12" text-anchor="middle" fill="currentColor">unlikely</text>
  <text x="230.0" y="40" font-size="12" text-anchor="middle" fill="currentColor">even chance</text>
  <text x="363.3" y="40" font-size="12" text-anchor="middle" fill="currentColor">likely</text>
  <text x="430" y="40" font-size="12" text-anchor="middle" fill="currentColor">certain</text>
  <circle cx="30.0" cy="60" r="6" fill="#9cc9ea"/>
  <text x="30" y="106" font-size="11" text-anchor="middle" fill="currentColor">roll a 7</text>
  <circle cx="96.7" cy="60" r="6" fill="#eea66f"/>
  <text x="96.7" y="106" font-size="11" text-anchor="middle" fill="currentColor">roll a 6</text>
  <circle cx="230.0" cy="60" r="6" fill="#7ccf9a"/>
  <text x="230.0" y="106" font-size="11" text-anchor="middle" fill="currentColor">roll an even</text>
  <circle cx="363.3" cy="60" r="6" fill="#eea66f"/>
  <text x="363.3" y="106" font-size="11" text-anchor="middle" fill="currentColor">not a 6</text>
  <circle cx="430.0" cy="60" r="6" fill="#9cc9ea"/>
  <text x="430" y="106" font-size="11" text-anchor="middle" fill="currentColor">roll under 7</text>
</svg>
</div>

- "Even chance" is exactly $\tfrac12$.
- "Unlikely" means somewhere between 0 and $\tfrac12$.
- "Likely" means somewhere between $\tfrac12$ and 1.

### All the outcomes add up to 1

Here is a bag with 6 marbles: 3 orange, 2 blue and 1 green.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 185" role="img" aria-label="A bag holding six marbles: three orange, two blue and one green">
  <path d="M 60 40 Q 40 40 35 70 L 25 150 Q 25 175 55 175 L 205 175 Q 235 175 235 150 L 225 70 Q 220 40 200 40 Z" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M 60 40 Q 130 20 200 40" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="70" cy="90" r="17" fill="#eea66f"/>
  <circle cx="110" cy="80" r="17" fill="#eea66f"/>
  <circle cx="150" cy="95" r="17" fill="#eea66f"/>
  <circle cx="90" cy="135" r="17" fill="#9cc9ea"/>
  <circle cx="135" cy="140" r="17" fill="#9cc9ea"/>
  <circle cx="185" cy="130" r="17" fill="#7ccf9a"/>
  <text x="330" y="80" font-size="13" text-anchor="middle" fill="currentColor">3 orange</text>
  <text x="330" y="100" font-size="13" text-anchor="middle" fill="currentColor">2 blue</text>
  <text x="330" y="120" font-size="13" text-anchor="middle" fill="currentColor">1 green</text>
  <text x="330" y="145" font-size="13" text-anchor="middle" fill="currentColor">6 marbles in all</text>
</svg>
</div>

Each marble is equally likely to be picked, so

$$P(\text{orange}) = \frac36, \quad P(\text{blue}) = \frac26, \quad P(\text{green}) = \frac16$$

Add them: $\tfrac36 + \tfrac26 + \tfrac16 = \tfrac66 = 1$. That always happens when the events between them cover
every outcome once each. Every marble is counted once on top, and the bottom is the total, so the tops add up to the
bottom. This gives a handy check: **if your probabilities for every possible result do not add to 1, you have missed
something or counted something twice.**

### Simplifying and comparing

A probability is an ordinary fraction, so everything you know about fractions works.

- **Simplify** it when you can: $\tfrac36 = \tfrac12$, $\tfrac{4}{52} = \tfrac{1}{13}$. Both versions are correct; the
  simple one is easier to understand.
- **Compare** two probabilities as you would compare any two fractions. If the bottoms are the same, the bigger top
  wins. If not, change them to the same bottom first (equivalent fractions, from
  [Numbers level 3](../../numbers/level-3/06-equivalent-fractions.md)).

## Worked examples

**1. The two bags.** Back to the question at the start.

- Bag A: 3 red out of $3 + 2 = 5$ marbles. $P(\text{red}) = \tfrac35$.
- Bag B: 5 red out of $5 + 4 = 9$ marbles. $P(\text{red}) = \tfrac59$.

To compare $\tfrac35$ and $\tfrac59$, give them the same bottom number, 45:

$$\frac35 = \frac{27}{45}, \qquad \frac59 = \frac{25}{45}$$

$\tfrac{27}{45}$ is bigger, so **bag A** gives the better chance, even though it has fewer red marbles. What matters is
not how many red marbles there are, but what **fraction** of the marbles are red. Bag B has more red marbles, but it
also has more blue ones getting in the way.

**2. One die, many events.**

| Event | Outcomes | Probability |
| --- | --- | --- |
| a 5 | $\{5\}$ | $\tfrac16$ |
| more than 4 | $\{5, 6\}$ | $\tfrac26 = \tfrac13$ |
| an odd number | $\{1, 3, 5\}$ | $\tfrac36 = \tfrac12$ |
| a square number | $\{1, 4\}$ | $\tfrac26 = \tfrac13$ |
| less than 10 | all six | $\tfrac66 = 1$ |
| a 0 | none | $\tfrac06 = 0$ |

**3. A pack of cards.** An ordinary pack has 52 cards in 4 **suits** (hearts, diamonds, clubs, spades), 13 cards in
each suit. Hearts and diamonds are red; clubs and spades are black. Each suit has one king. Shuffle well and take one
card.

- $P(\text{heart}) = \tfrac{13}{52} = \tfrac14$.
- $P(\text{king}) = \tfrac{4}{52} = \tfrac{1}{13}$.
- $P(\text{red king}) = \tfrac{2}{52} = \tfrac{1}{26}$ (the king of hearts and the king of diamonds).
- $P(\text{red}) = \tfrac{26}{52} = \tfrac12$.

**4. Letters in a long word.** The 11 letters of MISSISSIPPI are put on 11 tiles. Count each letter: M once, I four
times, S four times, P twice. Check: $1 + 4 + 4 + 2 = 11$. ✓

- $P(\text{S}) = \tfrac{4}{11}$, $P(\text{P}) = \tfrac{2}{11}$, $P(\text{M}) = \tfrac{1}{11}$.
- $P(\text{a vowel}) = P(\text{I}) = \tfrac{4}{11}$.
- Check: $\tfrac{1}{11} + \tfrac{4}{11} + \tfrac{4}{11} + \tfrac{2}{11} = \tfrac{11}{11} = 1$. ✓

**5. Making a probability you want.** You want a bag where $P(\text{blue}) = \tfrac14$, using 12 marbles. A quarter of
12 is 3, so put in **3 blue** and 9 of other colours. With 20 marbles you would need 5 blue. Any bag where blue is one
marble in every four works.

## Try it

1. A fair die is rolled. Find (a) $P(3)$; (b) $P(\text{less than } 3)$; (c) $P(\text{a multiple of } 3)$;
   (d) $P(\text{a number from 1 to } 6)$.
2. A bag holds 4 red, 5 yellow and 1 white marble. Find the probability of each colour, and check that they add to 1.
3. A spinner has 8 equal parts numbered 1 to 8. Find $P(\text{even})$, $P(\text{greater than } 5)$ and
   $P(\text{a prime number})$.
4. A card is taken from a full pack of 52. Find $P(\text{a black card})$, $P(\text{an ace})$ and
   $P(\text{the queen of spades})$.
5. Which is more likely: a red marble from a bag of 2 red and 3 blue, or a red marble from a bag of 3 red and 5 blue?
6. Sam says the probability of his team winning is $\tfrac54$. What is wrong?
7. Design a bag of 10 marbles, in three colours, where $P(\text{green}) = \tfrac12$ and $P(\text{red}) = \tfrac15$.
8. The letters of the word PROBABILITY are on tiles. Find $P(\text{B})$, $P(\text{I})$, and $P(\text{a letter that appears only once})$.

??? note "Answers"
    1. (a) $\tfrac16$. (b) $\{1, 2\}$, so $\tfrac26 = \tfrac13$. (c) $\{3, 6\}$, so $\tfrac26 = \tfrac13$.
       (d) $\tfrac66 = 1$, certain.
    2. There are $4 + 5 + 1 = 10$ marbles. $P(\text{red}) = \tfrac{4}{10}$, $P(\text{yellow}) = \tfrac{5}{10}$,
       $P(\text{white}) = \tfrac{1}{10}$. Sum: $\tfrac{10}{10} = 1$. ✓
    3. Even: $\{2, 4, 6, 8\}$, so $\tfrac48 = \tfrac12$. Greater than 5: $\{6, 7, 8\}$, so $\tfrac38$. Primes:
       $\{2, 3, 5, 7\}$ (1 is not prime), so $\tfrac48 = \tfrac12$.
    4. Black: $\tfrac{26}{52} = \tfrac12$. Ace: $\tfrac{4}{52} = \tfrac{1}{13}$. Queen of spades: only one card,
       $\tfrac{1}{52}$.
    5. First bag: $\tfrac25$. Second bag: $\tfrac38$. Same bottom 40: $\tfrac25 = \tfrac{16}{40}$ and
       $\tfrac38 = \tfrac{15}{40}$. The **first bag** is (just) more likely.
    6. $\tfrac54$ is more than 1. A probability can never be more than 1, because an event cannot hold more outcomes
       than there are.
    7. Green: half of 10 is **5**. Red: a fifth of 10 is **2**. The third colour gets the rest: $10 - 5 - 2 = 3$, for
       example 3 blue.
    8. PROBABILITY has 11 letters: P, R, O, B, A, B, I, L, I, T, Y. B appears twice and I appears twice; the other 7
       letters (P, R, O, A, L, T, Y) appear once each. Check: $2 + 2 + 7 = 11$. ✓ So $P(\text{B}) = \tfrac{2}{11}$,
       $P(\text{I}) = \tfrac{2}{11}$, and $P(\text{a letter that appears once}) = \tfrac{7}{11}$.

## Common mistake

**Comparing counts instead of fractions.** "Bag B has 5 red and bag A has only 3, so bag B is better" ignores the
other marbles. A probability is always **part out of whole**. Work out both fractions, then compare.

**Using the fraction rule when outcomes are not equally likely.** The rule counts outcomes, so it only works when each
outcome is as likely as every other. A spinner with one big part and one small part has 2 outcomes, but the chance of
each is not $\tfrac12$. Lesson 6 looks at this trap closely.

## Where it leads

- Back: [Outcomes and events](01-outcomes-events.md) · Next: [Not happening](03-not-happening.md), a shortcut that
  saves a lot of counting.
- [Level 3 page](index.md) · [Probability topic page](../index.md)
- Fractions, simplifying and comparing: [Numbers level 3](../../numbers/level-3/index.md), especially
  [fractions as numbers](../../numbers/level-3/05-fractions-as-numbers.md).
- Later, probabilities are also written as decimals and percents ("a 40% chance of rain"):
  [level 4, lesson 3](../level-4/03-fraction-decimal-percent.md).
