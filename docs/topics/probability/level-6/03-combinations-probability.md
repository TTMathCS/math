---
title: "Probability with combinations"
---

# Probability with combinations

*Probability · level 6, lesson 3 of 6*

## A question to start

In a classic 6/49 lottery, you choose 6 different numbers from 1 to 49. Six winning numbers are drawn. You win the
jackpot if your six are exactly the six drawn, in any order.

The chance of that is **1 in 13 983 816**. If you bought one ticket every week, you would expect to wait about
13 983 816 weeks for a win, which is more than 260 000 years.

Where does such a precise number come from? Nobody listed nearly 14 million tickets. In this lesson you use
**combinations** to count huge numbers of equally likely choices, and turn the counts into probabilities: lottery
prizes, poker hands and committees picked out of a hat.

## The idea

### Combinations, quickly

A **combination** is a choice of some objects from a group where the **order does not matter**. Choosing Ana and Ben
for a team is the same choice as choosing Ben and Ana.

The number of ways to choose $r$ objects from $n$ is written $\binom{n}{r}$, read "$n$ choose $r$". (Some books and
calculators write $C(n, r)$ or $^nC_r$.) Choosing 2 letters from A, B, C, D, E gives 10 combinations: each one is a
line joining two of the five points below.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 190" role="img" aria-label="Five points labelled A to E at the corners of a pentagon, with all 10 lines joining pairs of points drawn. Each line is one way to choose 2 of the 5.">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="100" y1="25" x2="166.6" y2="73.4"/><line x1="100" y1="25" x2="141.1" y2="151.6"/>
    <line x1="100" y1="25" x2="58.9" y2="151.6"/><line x1="100" y1="25" x2="33.4" y2="73.4"/>
    <line x1="166.6" y1="73.4" x2="141.1" y2="151.6"/><line x1="166.6" y1="73.4" x2="58.9" y2="151.6"/>
    <line x1="166.6" y1="73.4" x2="33.4" y2="73.4"/><line x1="141.1" y1="151.6" x2="58.9" y2="151.6"/>
    <line x1="141.1" y1="151.6" x2="33.4" y2="73.4"/><line x1="58.9" y1="151.6" x2="33.4" y2="73.4"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="100" cy="25" r="8"/><circle cx="166.6" cy="73.4" r="8"/><circle cx="141.1" cy="151.6" r="8"/>
    <circle cx="58.9" cy="151.6" r="8"/><circle cx="33.4" cy="73.4" r="8"/>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="96" y="14">A</text><text x="178" y="72">B</text><text x="150" y="172">C</text><text x="40" y="172">D</text><text x="12" y="72">E</text>
    <text x="215" y="60">AB AC AD AE</text><text x="215" y="85">BC BD BE</text><text x="215" y="110">CD CE</text><text x="215" y="135">DE</text>
    <text x="215" y="165">10 lines: 5 choose 2 = 10</text>
  </g>
</svg>
</div>

The formula is

$$\binom{n}{r} = \frac{n!}{r!\,(n - r)!},$$

where $n!$ ("$n$ factorial") means $n \times (n - 1) \times \cdots \times 2 \times 1$.

**Why?** If order **did** matter, there would be $n$ choices for the first object, $n - 1$ for the second, and so on:
$n \times (n - 1) \times \cdots \times (n - r + 1)$ ordered choices. But each unordered group of $r$ objects appears
in $r!$ different orders, so the ordered count is $r!$ times too big. Dividing by $r!$ fixes it. For 2 from 5:
$5 \times 4 = 20$ ordered pairs, each pair counted twice (AB and BA), so $\tfrac{20}{2} = 10$. (The full story is in
[Counting](../../counting/index.md).)

A handy shortcut: for small $r$, $\binom{n}{r} = \dfrac{n \times (n-1) \times \cdots}{r \times (r - 1) \times \cdots \times 1}$
with $r$ factors on top and on the bottom. So $\binom{10}{3} = \dfrac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$.

### The key idea: every group is equally likely

When objects are chosen **at random** (from a well-shuffled pack, from a hat, by a fair lottery machine), every
possible group of $r$ is equally likely. So the basic rule of level 3 applies, with groups as the outcomes:

$$P(\text{event}) = \frac{\text{number of groups that give the event}}{\binom{n}{r}}.$$

The bottom is "all the ways to choose". The top is "the ways that work".

### Counting the groups that work

Usually the good groups are built in parts, and you **multiply** the number of ways to make each part (the product
rule: choose this part **and** that part).

For example, to choose 3 people from 6 girls and 4 boys so that exactly 2 are girls: choose the 2 girls,
$\binom62 = 15$ ways, **and** choose the 1 boy, $\binom41 = 4$ ways. That is $15 \times 4 = 60$ groups.

### Two methods, one answer

Many of these questions can also be done step by step with the multiplication rule from level 5 (one pick after
another, without replacement). Both are right. The combination method counts **unordered groups**; the step-by-step
method follows **one order** of picks. Doing a question both ways is an excellent check, and worked example 2 does
exactly that.

<figure class="play" data-play="binom"><span class="ai-tag">AI-created</span><figcaption><b>Count, then divide.</b> Each bar is (n choose x) times the chance of one such run.</figcaption></figure>

## Worked examples

**1. A committee by lot.** A club has 10 members: 6 girls and 4 boys. Three names are drawn from a hat to form a
committee. Find the chance that (a) all three are girls, (b) exactly two are girls, (c) a particular member, Zoe, is
on the committee.

- All possible committees: $\binom{10}{3} = 120$.
- (a) All girls: choose 3 of the 6 girls, $\binom63 = 20$. So $P = \tfrac{20}{120} = \tfrac16$.
- (b) Exactly 2 girls: $\binom62 \times \binom41 = 15 \times 4 = 60$. So $P = \tfrac{60}{120} = \tfrac12$.
- (c) Zoe is on it: Zoe takes one place, and the other 2 places are filled from the other 9 members:
  $\binom92 = 36$. So $P = \tfrac{36}{120} = \tfrac{3}{10}$. That is $\tfrac{3}{10}$ because 3 of the 10 members are
  chosen, and each member has the same chance.

**2. The same question step by step.** All three girls, one draw at a time:

$$\frac{6}{10} \times \frac59 \times \frac48 = \frac{120}{720} = \frac16. \checkmark$$

Exactly two girls, step by step, needs care: the boy can be drawn first, second or third (GGB, GBG, BGG), and each
order has chance $\tfrac{6 \times 5 \times 4}{10 \times 9 \times 8} = \tfrac{120}{720} = \tfrac16$. Three orders:
$3 \times \tfrac16 = \tfrac12$. ✓ The combination method counted all three orders at once.

**3. Two aces.** Two cards are dealt from a full pack. Find $P(\text{both aces})$.

- All 2-card hands: $\binom{52}{2} = \tfrac{52 \times 51}{2} = 1326$.
- Hands of 2 aces: $\binom42 = 6$.
- $P = \tfrac{6}{1326} = \tfrac{1}{221}$, the same as the step-by-step answer in
  [level 5](../level-5/03-multiplication-rule.md).

**4. A full house.** In poker, a 5-card hand is a **full house** if it has three cards of one rank and two of another
(like three 8s and two kings). Find its chance.

- All 5-card hands: $\binom{52}{5} = 2\,598\,960$.
- Build a full house in four steps. Choose the rank for the three: 13 ways. Choose 3 of its 4 suits: $\binom43 = 4$.
  Choose a **different** rank for the pair: 12 ways. Choose 2 of its 4 suits: $\binom42 = 6$.
- Number of full houses: $13 \times 4 \times 12 \times 6 = 3744$.
- $P = \tfrac{3744}{2\,598\,960} \approx 0.00144$, about 1 in 694.

Why $13 \times 12$ and not $\binom{13}{2}$? Because the two ranks play **different roles**: three 8s and two kings is
a different hand from three kings and two 8s. Order matters between the roles, so we do not divide by 2.

**5. The lottery.** In a 6/49 lottery, all possible tickets: $\binom{49}{6} = 13\,983\,816$.

- Jackpot: only 1 ticket matches all six. $P = \tfrac{1}{13\,983\,816}$.
- Exactly 3 of your numbers drawn: your ticket has 3 of the 6 winning numbers, $\binom63 = 20$ ways, **and** 3 of the
  43 losing numbers, $\binom{43}{3} = 12\,341$ ways. That is $20 \times 12\,341 = 246\,820$ tickets.
  $P = \tfrac{246\,820}{13\,983\,816} \approx 0.0177$, about 1 in 57.

Doing this for every number of matches gives the full picture:

| Matches | Tickets | Chance |
| --- | --- | --- |
| 6 | 1 | about 1 in 14 million |
| 5 | 258 | about 1 in 54 000 |
| 4 | 13 545 | about 0.00097 |
| 3 | 246 820 | about 0.018 |
| 2 | 1 851 150 | about 0.132 |
| 1 | 5 775 588 | about 0.413 |
| 0 | 6 096 454 | about 0.436 |

The ticket counts add up to 13 983 816, as they must. Matching no numbers at all is the most likely result.

## Try it

1. Work out $\binom62$, $\binom{10}{3}$ and $\binom{52}{2}$.
2. A bag holds 5 red and 4 blue balls. Three are taken at random. Find $P(\text{all red})$ and $P(\text{exactly 2 red})$.
3. A committee of 4 is chosen at random from 12 people, including Ana. Find the chance that Ana is on it.
4. Find the chance that a 5-card hand is all hearts, and the chance it is a **flush** (all five cards the same suit).
5. A **four of a kind** is a 5-card hand with all four cards of one rank plus one other card. How many are there, and
   what is the chance?
6. In the 6/49 lottery, check the number 258 in the table for exactly 5 matches.
7. A box holds 20 light bulbs, and 3 of them are faulty. An inspector tests 4 at random. Find the chance that none of
   the 4 is faulty, and the chance that at least one is.
8. A small lottery: choose 3 numbers from 1 to 10. Find the chance of the jackpot, and the chance of matching exactly
   2 of the 3.

??? note "Answers"
    1. $\binom62 = \dfrac{6 \times 5}{2} = 15$. $\binom{10}{3} = 120$ (worked out above). $\binom{52}{2} = \dfrac{52 \times 51}{2} = 1326$.
    2. All groups: $\binom93 = 84$. All red: $\binom53 = 10$, so $\dfrac{10}{84} = \dfrac{5}{42}$. Exactly 2 red:
       $\binom52 \times \binom41 = 10 \times 4 = 40$, so $\dfrac{40}{84} = \dfrac{10}{21}$.
    3. Committees with Ana: $\binom{11}{3} = 165$. All committees: $\binom{12}{4} = 495$. $P = \dfrac{165}{495} = \dfrac13$
       (which is $\dfrac{4}{12}$: 4 of 12 people are chosen).
    4. All hearts: $\binom{13}{5} = 1287$, so $P = \dfrac{1287}{2\,598\,960} \approx 0.000495$. A flush can be in any of
       the 4 suits: $4 \times 1287 = 5148$, so $P \approx 0.00198$, about 1 in 505.
    5. Choose the rank: 13 ways. All 4 cards of it: 1 way. The fifth card: any of the other 48. So $13 \times 48 = 624$
       hands, and $P = \dfrac{624}{2\,598\,960} = \dfrac{1}{4165} \approx 0.00024$.
    6. Choose 5 of the 6 winning numbers, $\binom65 = 6$, and 1 of the 43 others, 43 ways: $6 \times 43 = 258$. ✓
    7. No faulty bulb: choose all 4 from the 17 good ones. $\dfrac{\binom{17}{4}}{\binom{20}{4}} = \dfrac{2380}{4845} \approx 0.491$.
       At least one faulty: $1 - 0.491 = 0.509$.
    8. All tickets: $\binom{10}{3} = 120$, so the jackpot is $\dfrac{1}{120}$. Exactly 2: choose 2 of the 3 winning
       numbers, $\binom32 = 3$, and 1 of the 7 others, 7 ways: $21$ tickets, $P = \dfrac{21}{120} = \dfrac{7}{40}$.

## Common mistake

**Mixing ordered and unordered counts.** If the bottom counts unordered groups ($\binom{n}{r}$), the top must count
unordered groups too. If you count orders on top (like $6 \times 5 \times 4$) you must count orders on the bottom
($10 \times 9 \times 8$). Mixing them gives answers that are too big by a factor like $3! = 6$.

**Forgetting the "other" part.** "Exactly 2 girls" in a group of 3 means 2 girls **and** 1 boy. Counting only
$\binom62$ forgets to choose the boy. Every place in the group must be filled from somewhere.

## Where it leads

- Back: [Independence, properly](02-independence-properly.md) · Next: [The birthday problem](04-birthday-problem.md),
  where the complement and the multiplication rule beat the counting.
- [Level 6 page](index.md) · [Probability topic page](../index.md)
- How to count combinations, permutations and arrangements in depth: [Counting](../../counting/index.md).
- Drawing a sample and counting "successes" like faulty bulbs is the hypergeometric distribution of
  [level 7](../level-7/index.md).
