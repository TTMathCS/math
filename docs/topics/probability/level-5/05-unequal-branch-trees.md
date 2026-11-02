---
title: "Trees with unequal branches"
---

# Trees with unequal branches

*Probability · level 5, lesson 5 of 6*

## A question to start

A bag holds 3 red balls and 5 blue balls. You take one ball out without looking, keep it out, and then take a second.

Which is more likely to be red: the **first** ball or the **second** ball?

Many people say the first, because "some reds might already be gone". Others say the second, because "if the first
was blue, there are more reds left". The surprising answer is that they are **exactly equally likely**, both
$\tfrac38$. A tree diagram will show it, and then a simple reason will make it obvious.

## The idea

### Trees, one more time

In level 4 you drew tree diagrams for coins and dice, where every branch had the same chance. A tree works just as
well when the branches have **different** chances, and when the chances on the second stage **change** depending on
what happened in the first stage. That is exactly what happens when you draw without replacement.

### Building the tree

**Stage 1.** 8 balls: 3 red, 5 blue. So the first ball is red with chance $\tfrac38$ and blue with chance $\tfrac58$.

**Stage 2.** Now 7 balls are left, but which 7 depends on stage 1.

- If the first was red, the bag holds 2 red and 5 blue: red $\tfrac27$, blue $\tfrac57$.
- If the first was blue, the bag holds 3 red and 4 blue: red $\tfrac37$, blue $\tfrac47$.

Put them all on one tree:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 210" role="img" aria-label="Tree diagram for drawing two balls without replacement from 3 red and 5 blue. First draw: red 3/8, blue 5/8. After red: red 2/7, blue 5/7. After blue: red 3/7, blue 4/7. Ends: red red 6/56, red blue 15/56, blue red 15/56, blue blue 20/56.">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="20" y1="105" x2="130" y2="55"/><line x1="20" y1="105" x2="130" y2="155"/>
    <line x1="150" y1="55" x2="260" y2="28"/><line x1="150" y1="55" x2="260" y2="82"/>
    <line x1="150" y1="155" x2="260" y2="128"/><line x1="150" y1="155" x2="260" y2="182"/>
  </g>
  <circle cx="140" cy="55" r="10" fill="#eea66f"/><circle cx="140" cy="155" r="10" fill="#9cc9ea"/>
  <circle cx="270" cy="28" r="10" fill="#eea66f"/><circle cx="270" cy="82" r="10" fill="#9cc9ea"/>
  <circle cx="270" cy="128" r="10" fill="#eea66f"/><circle cx="270" cy="182" r="10" fill="#9cc9ea"/>
  <g font-size="13" fill="currentColor">
    <text x="60" y="68">3/8</text><text x="60" y="152">5/8</text>
    <text x="198" y="34">2/7</text><text x="198" y="82">5/7</text>
    <text x="198" y="134">3/7</text><text x="198" y="182">4/7</text>
    <text x="290" y="33">RR: 3/8 × 2/7 = 6/56</text><text x="290" y="87">RB: 3/8 × 5/7 = 15/56</text>
    <text x="290" y="133">BR: 5/8 × 3/7 = 15/56</text><text x="290" y="187">BB: 5/8 × 4/7 = 20/56</text>
  </g>
</svg>
</div>

### The three rules of a tree

1. **Branches from one point add to 1.** From the start: $\tfrac38 + \tfrac58 = 1$. After red: $\tfrac27 + \tfrac57 = 1$.
   After blue: $\tfrac37 + \tfrac47 = 1$. Each point is a fresh "what happens next?", and something must happen.
2. **Multiply along a path.** A path is "this, and then that". The second number already allows for the first event
   (it is the chance **once the first has happened**), so the multiplication rule of lesson 3 applies.
3. **Add across paths.** Different paths are different, separate ways things can go, so they are mutually exclusive.
   To find the chance of an event, add up all the paths where it happens.

And one check: **all the ends add to 1.** Here $\tfrac{6 + 15 + 15 + 20}{56} = \tfrac{56}{56} = 1$. ✓ If your ends do
not add to 1, there is a mistake on a branch.

### Why multiplying along the path is right

Check the tree against plain counting. Give the balls names: red $r_1, r_2, r_3$ and blue $b_1, \dots, b_5$. A
"draw" is an ordered pair: the first ball, then a different second ball. There are $8 \times 7 = 56$ such pairs, all
equally likely.

- Red then red: 3 choices for the first, then 2 for the second, so $3 \times 2 = 6$ pairs.
- Red then blue: $3 \times 5 = 15$. Blue then red: $5 \times 3 = 15$. Blue then blue: $5 \times 4 = 20$.

These are exactly the numerators on the tree, over 56. The tree and the counting agree, and the tree is quicker,
especially when the numbers get large.

### The answer to the puzzle

Second ball red happens on two paths, RR and BR:

$$P(\text{second red}) = \frac{6}{56} + \frac{15}{56} = \frac{21}{56} = \frac38.$$

The same as the first ball. Here is the reason without any tree. Imagine shuffling all 8 balls into a random line
before you start, and "drawing" just means taking them from the front of the line. Every ball is equally likely to be
in any position. So the ball in position 2 is just as likely to be any of the 8 balls as the ball in position 1, and 3
of the 8 are red. Before you look at the first ball, the second one "does not know" it is second.

(Once you **have** seen the first ball, things change: then the second is red with chance $\tfrac27$ or $\tfrac37$.
Knowing more changes the chance. That is the subject of [level 6](../level-6/index.md).)

### With replacement, for comparison

If the first ball were put back, every second-stage branch would be the same as the first stage: red $\tfrac38$,
blue $\tfrac58$. The ends would be $\tfrac{9}{64}$, $\tfrac{15}{64}$, $\tfrac{15}{64}$ and $\tfrac{25}{64}$. Two reds
is a little more likely with replacement ($\tfrac{9}{64} \approx 0.141$) than without ($\tfrac{6}{56} \approx 0.107$),
because a red that is put back can be drawn again.

### Trees are not only for bags

Any situation that happens in stages can be drawn as a tree, as long as you know the chance of each step **given**
what came before it. Weather and travel, games played in rounds, a machine that is tested twice: all of them make
trees with unequal branches. Some trees even **stop early** on some paths, because the game is already decided.

## Worked examples

**1. One of each colour.** From the bag above (3 red, 5 blue, no replacement), find $P(\text{one of each colour})$.

One of each happens on two paths: RB and BR.

$$P = \frac{15}{56} + \frac{15}{56} = \frac{30}{56} = \frac{15}{28} \approx 0.54.$$

**2. Late for school.** On any school day, it rains with probability 0.3. On a rainy day, Mia's bus is late with
probability 0.4. On a dry day, it is late with probability 0.1. Find the probability that the bus is late.

Draw the tree: rain 0.3 or dry 0.7; then late or on time.

- Rain and late: $0.3 \times 0.4 = 0.12$.
- Dry and late: $0.7 \times 0.1 = 0.07$.
- $P(\text{late}) = 0.12 + 0.07 = 0.19$.

The other two ends are rain and on time, $0.3 \times 0.6 = 0.18$, and dry and on time, $0.7 \times 0.9 = 0.63$.
Check: $0.12 + 0.18 + 0.07 + 0.63 = 1$. ✓

A sneak preview of a later idea: **of** the late days, what fraction were rainy? Late days make up 0.19 of all days,
and rainy late days 0.12 of them, so the fraction is $\tfrac{0.12}{0.19} \approx 0.63$. Rain is only 30% of days, but
about 63% of late days. Reasoning backwards along a tree like this is
[Bayes' theorem](../level-8/index.md).

**3. A tree that stops early.** Two friends play a "best of three" match: the first to win 2 games wins the match.
Ana wins each game with probability 0.6, independently. Find the chance Ana wins the match.

- Ana wins games 1 and 2: $0.6 \times 0.6 = 0.36$. The match stops; no game 3.
- Ana wins one of the first two and then game 3. Win, lose, win: $0.6 \times 0.4 \times 0.6 = 0.144$. Lose, win,
  win: $0.4 \times 0.6 \times 0.6 = 0.144$.
- $P(\text{Ana wins}) = 0.36 + 0.144 + 0.144 = 0.648$.

A best-of-three match turns a 60% game into a 64.8% match: the stronger player gains from playing more games.

**4. Three stages.** From the bag of 3 red and 5 blue, three balls are drawn without replacement. Find
$P(\text{all blue})$.

Follow one path: $\tfrac58 \times \tfrac47 \times \tfrac36 = \tfrac{60}{336} = \tfrac{5}{28}$.

**5. At least one red, with the tree.** From the two-draw tree, $P(\text{at least one red}) = 1 - P(\text{BB}) = 1 - \tfrac{20}{56} = \tfrac{36}{56} = \tfrac{9}{14}$.
(Adding the three paths RR, RB, BR gives $\tfrac{6 + 15 + 15}{56}$, the same.)

## Try it

1. A bag holds 4 red and 2 blue balls. Two are drawn without replacement. Draw the tree and find all four end
   probabilities. Check that they add to 1.
2. Using that tree, find $P(\text{both the same colour})$.
3. Using that tree, find $P(\text{the second ball is blue})$. Compare it with $P(\text{the first ball is blue})$.
4. A drawer has 6 black and 4 white socks. Two are taken in the dark. Find the probability they make a matching pair.
5. Leo's bus is on time with probability 0.8. If the bus is on time, he catches his train with probability 0.9. If it
   is late, he catches it with probability 0.3. Find the probability he catches his train.
6. In a best-of-three match, a player wins each game with probability 0.7, independently. Find the chance she wins
   the match. What if she wins each game with probability 0.5?
7. A bag holds 2 red and 3 blue balls. Balls are drawn one at a time, without replacement, until a red one appears.
   Find the probability that the first red appears on the third draw.
8. Three cards are dealt from a full pack. Find $P(\text{all three are hearts})$.

??? note "Answers"
    1. RR: $\dfrac46 \times \dfrac35 = \dfrac{12}{30}$. RB: $\dfrac46 \times \dfrac25 = \dfrac{8}{30}$.
       BR: $\dfrac26 \times \dfrac45 = \dfrac{8}{30}$. BB: $\dfrac26 \times \dfrac15 = \dfrac{2}{30}$.
       Total $\dfrac{12 + 8 + 8 + 2}{30} = 1$. ✓ (In lowest terms: $\dfrac25$, $\dfrac{4}{15}$, $\dfrac{4}{15}$, $\dfrac{1}{15}$.)
    2. RR or BB: $\dfrac{12}{30} + \dfrac{2}{30} = \dfrac{14}{30} = \dfrac{7}{15}$.
    3. RB or BB: $\dfrac{8}{30} + \dfrac{2}{30} = \dfrac{10}{30} = \dfrac13$. The first ball is blue with chance
       $\dfrac26 = \dfrac13$ too: the same, for the "random line" reason.
    4. Both black: $\dfrac{6}{10} \times \dfrac59 = \dfrac{30}{90}$. Both white: $\dfrac{4}{10} \times \dfrac39 = \dfrac{12}{90}$.
       Matching: $\dfrac{42}{90} = \dfrac{7}{15} \approx 0.47$.
    5. On time and catches: $0.8 \times 0.9 = 0.72$. Late and catches: $0.2 \times 0.3 = 0.06$. Total $0.78$.
    6. With 0.7: $0.7^2 + 2 \times (0.7 \times 0.3 \times 0.7) = 0.49 + 0.294 = 0.784$. With 0.5:
       $0.25 + 2 \times 0.125 = 0.5$: evenly matched players stay evenly matched.
    7. The path must be blue, blue, red: $\dfrac35 \times \dfrac24 \times \dfrac23 = \dfrac{12}{60} = \dfrac15$.
    8. $\dfrac{13}{52} \times \dfrac{12}{51} \times \dfrac{11}{50} = \dfrac{1716}{132\,600} = \dfrac{11}{850} \approx 0.013$.

## Common mistake

**Forgetting to change the second-stage numbers.** Without replacement, both the top and the bottom of the fraction
can change: after a red is taken, there is one fewer red **and** one fewer ball. Writing $\tfrac38$ again on the
second stage is drawing with replacement by accident.

**Missing a path.** "One of each colour" has two paths (red then blue, blue then red). Before adding, list every path
that gives the event, and check the ends of the whole tree add to 1.

## Where it leads

- Back: ["At least one"](04-at-least-one.md) · Next: [The gambler's fallacy and the hot hand](06-gamblers-fallacy.md).
- [Level 5 page](index.md) · [Probability topic page](../index.md)
- The second-stage numbers are conditional probabilities, the main idea of
  [level 6](../level-6/01-given-two-way-tables.md).
- Reading a tree backwards (which branch did we come from?) is Bayes' theorem, in [level 8](../level-8/index.md).
- Drawing without replacement many times leads to the hypergeometric distribution in [level 7](../level-7/index.md),
  and counting the draws all at once uses combinations from [Counting](../../counting/index.md).
