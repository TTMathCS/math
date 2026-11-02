---
title: "Explore: Chances as numbers"
---

# Explore: Chances as numbers

*Probability · step 2 of 5*

## A question to start

Roll two dice and add the numbers. The total can be anything from 2 to 12. Are all the totals equally likely? If you
had to bet on one total, which would you choose?

Many people guess that every total is equally likely, or that 12 is as easy as 7. By the end of this page you will
see that 7 comes up **six times as often** as 12, and you will be able to say exactly how often each total appears.

## The idea

### Words you need

- An **experiment** is anything with a result you cannot be sure of in advance: tossing a coin, rolling a dice
  (one dice is also called a *die*), drawing a card.
- An **outcome** is one possible result: rolling a 4.
- The **sample space** is the list of **all** possible outcomes. For one dice it is 1, 2, 3, 4, 5, 6.
- An **event** is a group of outcomes you are interested in: "rolling an even number" is the event 2, 4, 6.

### Probability as a fraction

In the Play step we said "rolling a 6 happens in 1 way out of 6". The **probability** of an event turns that into a
number. When all outcomes are **equally likely**:

$$P(\text{event}) = \frac{\text{number of outcomes in the event}}{\text{total number of outcomes}}.$$

$P(\ldots)$ is short for "the probability of ...". So for one fair dice:

- $P(6) = \dfrac16$
- $P(\text{even}) = \dfrac36 = \dfrac12$
- $P(7) = \dfrac06 = 0$
- $P(\text{less than } 7) = \dfrac66 = 1$

A probability is always between 0 (impossible) and 1 (certain). It can be written as a fraction, a decimal or a
percentage: an even chance is $\tfrac12$, or 0.5, or 50%. The chance line from the Play step is now a number line
from 0 to 1.

### The probability that something does **not** happen

Either an event happens or it does not, so the two probabilities add up to 1. The event "A does not happen" is called
the **complement** of A, written "not A":

$$P(\text{not A}) = 1 - P(\text{A}).$$

$P(\text{not a } 6) = 1 - \tfrac16 = \tfrac56$. This simple rule is often the quickest way to an answer.

### Two dice: a table of all 36 outcomes

To find the chances for two dice, list every outcome. Imagine one dice is orange and the other blue, so that "orange
3, blue 4" and "orange 4, blue 3" are counted as the two different outcomes they really are. Orange has 6 results and
blue has 6, so there are $6 \times 6 = 36$ equally likely outcomes. Here are their totals:

| + | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | 2 | 3 | 4 | 5 | 6 | **7** |
| **2** | 3 | 4 | 5 | 6 | **7** | 8 |
| **3** | 4 | 5 | 6 | **7** | 8 | 9 |
| **4** | 5 | 6 | **7** | 8 | 9 | 10 |
| **5** | 6 | **7** | 8 | 9 | 10 | 11 |
| **6** | **7** | 8 | 9 | 10 | 11 | 12 |

The 7s run along a whole diagonal: **6 ways**. A 12 needs both dice to show 6: **1 way**. So

$$P(7) = \frac{6}{36} = \frac16, \qquad P(12) = \frac{1}{36}.$$

Count each total and you get this pattern, rising to 7 and falling again:

| Total | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ways (out of 36) | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |

### Probability from experiments

Some things cannot be worked out by counting equal outcomes. Will a drawing pin land point up or point down? The two
are not equally likely, and nothing tells you how unequal they are. So you **experiment**: drop it many times and
count.

$$\text{experimental probability} = \frac{\text{number of times it happened}}{\text{number of tries}}.$$

This is also called the **relative frequency**. The more tries you make, the closer it tends to get to the true
probability. Toss a coin 10 times and you might easily get 7 heads (0.7). Toss it 10,000 times and the fraction of
heads will almost always be very close to 0.5.

## Worked example

**Two fair dice are rolled. Find the probability of: (a) a double; (b) a total of 10 or more; (c) a total that is
not 10 or more.**

(a) A **double** means both dice show the same number: (1, 1), (2, 2), ..., (6, 6). That is 6 outcomes along the
other diagonal of the table.

$$P(\text{double}) = \frac{6}{36} = \frac16.$$

(b) Totals of 10, 11 and 12 can happen in 3, 2 and 1 ways. That is $3 + 2 + 1 = 6$ outcomes.

$$P(\text{10 or more}) = \frac{6}{36} = \frac16.$$

(c) This is the complement of (b), so there is no need to count 30 outcomes:

$$P(\text{less than } 10) = 1 - \frac16 = \frac56.$$

## Try it

1. A card is drawn from a full pack of 52 (4 suits of 13: hearts and diamonds are red, clubs and spades are black).
   Find $P(\text{heart})$, $P(\text{king})$ and $P(\text{red king})$.
2. A bag holds 3 red, 5 blue and 2 green marbles. One is taken without looking. What is $P(\text{not blue})$?
3. Two dice are rolled. What is the probability that the total is 8?
4. A drawing pin is dropped 50 times and lands point up 37 times. Estimate the probability that it lands point up
   next time. About how many times would you expect "point up" in 200 drops?
5. A coin is tossed 3 times. List all the outcomes (like HHT). What is the probability of exactly 2 heads?

??? note "Answers"
    1. $P(\text{heart}) = \dfrac{13}{52} = \dfrac14$. $P(\text{king}) = \dfrac{4}{52} = \dfrac{1}{13}$. There are 2
       red kings (hearts and diamonds), so $P(\text{red king}) = \dfrac{2}{52} = \dfrac{1}{26}$.
    2. There are 10 marbles and 5 are not blue, so $\dfrac{5}{10} = \dfrac12$. Or: $1 - \dfrac{5}{10} = \dfrac12$.
    3. From the table, 8 happens in 5 ways: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2). So $P(8) = \dfrac{5}{36}$.
    4. $\dfrac{37}{50} = 0.74$. In 200 drops you would expect about $0.74 \times 200 = 148$. (Only about: the real
       number will wobble around that.)
    5. HHH, HHT, HTH, HTT, THH, THT, TTH, TTT: 8 outcomes, each equally likely ($2 \times 2 \times 2$). Exactly two
       heads: HHT, HTH, THH. So $P = \dfrac38$.

## Common mistake

**Treating outcomes as equally likely when they are not.** "The total of two dice is one of 11 numbers, 2 to 12, so
$P(7) = \tfrac{1}{11}$" is wrong, because the 11 totals are **not** equally likely. The fraction rule only works
when you count outcomes that really are equally likely, like the 36 orange-and-blue pairs. When in doubt, make the
dice (or coins) different colours in your head and list everything.

## Where it leads

- Next step: [Build: rules, trees and "and" and "or"](03-build.md), where probabilities are combined without
  listing every outcome.
- Back a step: [Play: fair or unfair?](01-play.md)
- Listing 36 or 8 outcomes is the multiplication principle at work: see
  [Counting: the multiplication principle](../counting/level-2/index.md).
