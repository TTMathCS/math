---
title: "Equally likely or not"
---

# Equally likely or not

*Probability · level 3, lesson 6 of 6*

## A question to start

Here is an argument you might hear:

"Tomorrow, either it will rain or it will not rain. That is two outcomes. So the chance of rain tomorrow is
$\tfrac12$."

And here is another one:

"When I buy a lottery ticket, either I win or I lose. Two outcomes. So I have a $\tfrac12$ chance of winning!"

You can feel that both are silly. If the second one were true, everyone would be rich. But they use exactly the same
fraction rule we have been using all level. So what is wrong? The answer is the most important small print in all of
probability.

## The idea

### The small print

Every time we used the fraction rule

$$P(\text{event}) = \frac{\text{outcomes in the event}}{\text{all outcomes}}$$

we added the words **"when every outcome is equally likely"**. Those words are not decoration. Without them, the rule
gives nonsense.

The lottery has two outcomes, win and lose, but they are not equally likely at all. "Lose" is enormously more likely
than "win". The same goes for rain: in a desert, "no rain" is far more likely; in a rainforest in the wet season,
"rain" is. Just because you can **list** two outcomes does not mean they have the same chance.

So the real question is: **when are outcomes equally likely, and how do we know?**

### Why a die is fair: symmetry

Why do we believe that each face of a die is equally likely? Not because there are 6 of them. Because of its
**shape**.

A good die is a cube. Every face is the same size and shape, every corner is the same, and the weight is spread evenly.
If you secretly swapped the numbers on two faces, nothing about how the cube tumbles would change. There is nothing
that could make one face come up more than another. This sameness is called **symmetry**. The die has no favourite
face because, apart from the dots, all its faces look exactly alike to the table.

The same reasoning works for:

- a **coin**: two flat faces, the same shape, thin enough that landing on its edge almost never happens;
- a **spinner with equal parts**: every part has the same angle at the centre, so the pointer has no reason to
  prefer one;
- **well-shuffled cards** or **a well-mixed bag**: no card or marble is in a special place, so each is equally likely
  to be picked.

Equally likely outcomes come from symmetry in the real object, or from careful mixing. When that symmetry is broken,
the outcomes stop being equally likely.

### Breaking the symmetry

Here are some ways outcomes can fail to be equally likely.

**Unequal parts.** A spinner whose parts are different sizes. The pointer stops anywhere around the circle, so the
bigger part catches it more often. Rain is like the left-hand spinner below: two outcomes, but nobody has said the
parts are equal.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 170" role="img" aria-label="Two spinners with the outcomes rain and no rain: one with a small rain part, one split in halves; just having two outcomes does not make them half each">
  <path d="M 90 80 L 90.0 20.0 A 60 60 0 1 1 30.0 80.0 Z" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 90 80 L 30.0 80.0 A 60 60 0 0 1 90.0 20.0 Z" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="105" y="105" font-size="12" text-anchor="middle" fill="currentColor">no rain</text>
  <text x="65" y="62" font-size="12" text-anchor="middle" fill="currentColor">rain</text>
  <path d="M 300 80 L 300.0 20.0 A 60 60 0 0 1 300.0 140.0 Z" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 300 80 L 300.0 140.0 A 60 60 0 0 1 300.0 20.0 Z" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="325" y="85" font-size="12" text-anchor="middle" fill="currentColor">no rain</text>
  <text x="275" y="85" font-size="12" text-anchor="middle" fill="currentColor">rain</text>
  <text x="90" y="160" font-size="12" text-anchor="middle" fill="currentColor">one possible “rain” spinner</text>
  <text x="300" y="160" font-size="12" text-anchor="middle" fill="currentColor">NOT how rain works</text>
</svg>
</div>

**Uneven shape.** A thumbtack (drawing pin) can land point up, or tipped over on its side with the point touching
the table.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 160" role="img" aria-label="A thumbtack in two positions: lying on its flat head with the point straight up, and tipped on its side with the rim of the head and the point touching the table">
  <line x1="20" y1="120" x2="400" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="100" cy="113" rx="40" ry="7" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="106" x2="100" y2="55" stroke="currentColor" stroke-width="3"/>
  <text x="100" y="145" font-size="13" text-anchor="middle" fill="currentColor">point up</text>
  <ellipse cx="270" cy="85" rx="7" ry="40" transform="rotate(-35 270 85)" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <line x1="270" y1="85" x2="226" y2="119" stroke="currentColor" stroke-width="3"/>
  <text x="290" y="145" font-size="13" text-anchor="middle" fill="currentColor">on its side, point down</text>
</svg>
</div>

Two outcomes, but the thumbtack is not the same on both sides: one side is a flat head, the other is a sharp point.
There is no symmetry to tell us the chances. They could be anything, and they depend on the size of the head and the
length of the pin.

**Combined results.** Totals of two dice. Each pair is equally likely, but totals are groups of pairs, and different
groups have different sizes (1 pair makes 2, but 6 pairs make 7).

**A loaded die.** A die with a small weight hidden inside one face. That face tends to end up at the bottom, so the
face opposite it comes up more often. The cube still looks symmetric, but its weight is not.

### What to do when outcomes are not equally likely

You are not stuck. There are four good ways in.

**1. Split into equal pieces.** Sometimes you can cut unequal outcomes into smaller equally likely ones. A spinner that
is half red and a quarter each blue and green can be thought of as **4 equal quarters**: 2 red, 1 blue, 1 green. Then
$P(\text{red}) = \tfrac24$. You did this in lesson 1 with BANANA: list **tiles** (equally likely), not letters.

**2. Measure.** On a spinner, the chance of a part is its share of the full turn, $360°$. A part with an angle of $90°$
has probability $\tfrac{90}{360} = \tfrac14$. (Angles are in [Geometry level 3](../../geometry/level-3/index.md).)

**3. Experiment.** Drop the thumbtack many times and use the relative frequency from
[lesson 5](05-experiment-theory.md). Suppose a class drops one thumbtack 200 times and it lands point up 124 times.
Then $P(\text{point up})$ is about $\tfrac{124}{200} = 0.62$ **for that thumbtack**. A different thumbtack might give a
different answer.

**4. Use records.** Weather forecasters do not count outcomes. They use measurements and records of what happened in
the past in similar conditions. "Rain or no rain" is not a $\tfrac12$ guess; it comes from data and models.
([Level 4](../level-4/03-fraction-decimal-percent.md) looks at what "40% chance of rain" means.)

### "I don't know" is not the same as "equally likely"

One more trap. People sometimes say "I have no idea who will win, so it's 50-50." Not knowing is not a reason for
equal chances. Equal chances need a **reason**, like symmetry. A football match can be won, lost or drawn: three
outcomes, but there is no reason at all for each to be $\tfrac13$. A strong team playing a weak one might win most of
the time.

## Worked examples

**1. A spinner with angles.** A spinner has three parts with angles $180°$ (red), $120°$ (blue) and $60°$ (green).
Check: $180 + 120 + 60 = 360$. ✓

- $P(\text{red}) = \tfrac{180}{360} = \tfrac12$.
- $P(\text{blue}) = \tfrac{120}{360} = \tfrac13$.
- $P(\text{green}) = \tfrac{60}{360} = \tfrac16$.
- Check: $\tfrac36 + \tfrac26 + \tfrac16 = 1$. ✓

Another way to see it: cut the circle into 6 equal slices of $60°$. Red covers 3 slices, blue 2, green 1.

**2. Heads on two coins.** Toss two coins and count the heads: 0, 1 or 2. Three results, but not $\tfrac13$ each. Go
back to the equally likely outcomes $\{HH, HT, TH, TT\}$:

| Number of heads | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Outcomes | TT | HT, TH | HH |
| Probability | $\tfrac14$ | $\tfrac24 = \tfrac12$ | $\tfrac14$ |

One head is twice as likely as two heads.

**3. Testing a die that might be loaded.** A die is rolled 600 times with these results:

| Face | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Count | 61 | 97 | 104 | 99 | 102 | 137 |

A fair die would give about 100 of each. Faces 2 to 5 are close to 100, but 1 is far below and 6 is far above. The 1
and 6 are opposite faces. It looks as if something is pulling the 1 face down onto the table, so the 6 comes up
more. The best estimates now come from the experiment: $P(6)$ is about $\tfrac{137}{600}$, roughly 0.23, not
$\tfrac16$ (about 0.17).

**4. Choosing equally likely outcomes.** A bag holds 2 red marbles and 1 blue. Ben says: "Two colours, so
$P(\text{blue}) = \tfrac12$." Name the marbles R1, R2, B. These three **are** equally likely (the bag is well mixed),
so $P(\text{blue}) = \tfrac13$. Ben listed colours, which are not equally likely.

## Try it

1. Which of these have equally likely outcomes? Give a reason. (a) a fair coin; (b) whether a slice of toast lands
   butter side up or down; (c) the suit of a card from a shuffled pack; (d) the number of heads when you toss three
   coins.
2. A spinner has parts of $90°$ (yellow), $90°$ (blue) and $180°$ (red). Find each probability.
3. Explain what is wrong with: "A basketball shot either goes in or it doesn't, so the chance is $\tfrac12$."
4. A spinner is half red, one third blue and the rest green. Find $P(\text{green})$ and the angle of the green part.
5. A cereal-box "die" is made from a long box shape, with two small square ends and four long sides. Is each face
   equally likely? Which faces do you think come up most? How could you find out?
6. A thumbtack lands point up 39 times out of 60 drops. Estimate $P(\text{point up})$ and $P(\text{on its side})$.
7. Toss three coins. The number of heads can be 0, 1, 2 or 3. List the 8 equally likely outcomes and find the
   probability of each number of heads.

??? note "Answers"
    1. (a) Yes: both faces are the same shape (symmetry). (b) No: the butter makes one side different, and there is
       no symmetry to give equal chances; you would need to experiment. (c) Yes: 13 cards in each suit, all equally
       likely if well shuffled, so each suit is $\tfrac14$. (d) No: some numbers of heads can happen in more ways than
       others (question 7).
    2. Yellow $\tfrac{90}{360} = \tfrac14$, blue $\tfrac14$, red $\tfrac{180}{360} = \tfrac12$.
    3. "In" and "not in" are not equally likely. A good player scores more often than they miss from close up; a
       beginner from far away misses more. The chance depends on the player and the shot, and could be found from
       records of past shots.
    4. $P(\text{green}) = 1 - \tfrac12 - \tfrac13 = \tfrac66 - \tfrac36 - \tfrac26 = \tfrac16$. Angle: $\tfrac16$ of
       $360°$ is $60°$.
    5. No: the faces are not all the same, so there is no symmetry between the long sides and the small ends. It will
       very likely land on one of the four long sides most of the time, since a small end is hard to balance on. To
       get numbers, roll it many times and use relative frequencies.
    6. $P(\text{point up})$ is about $\tfrac{39}{60} = 0.65$. $P(\text{on its side})$ is about
       $1 - 0.65 = 0.35$ (or $\tfrac{21}{60}$).
    7. HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. 0 heads: TTT, $\tfrac18$. 1 head: HTT, THT, TTH, $\tfrac38$. 2 heads:
       HHT, HTH, THH, $\tfrac38$. 3 heads: HHH, $\tfrac18$. Check: $\tfrac{1 + 3 + 3 + 1}{8} = 1$. ✓

## Common mistake

**"Two outcomes, so a half."** Being able to list two (or three, or eleven) outcomes says nothing about their chances.
The fraction rule needs outcomes that are **equally likely**, and that needs a reason: symmetry, or careful mixing.

**Listing the wrong outcomes.** When the obvious outcomes (colours, totals, letters, numbers of heads) are not equally
likely, look for smaller ones that are (marbles, pairs, tiles, lists of H and T).

## Where it leads

- Back: [Experimental and theoretical probability](05-experiment-theory.md) · Next level:
  [Level 4: two things at once](../level-4/index.md), starting with
  [compound events with tables](../level-4/01-compound-tables.md).
- [Level 3 page](index.md) · [Probability topic page](../index.md)
- Probabilities as percents, and what a weather forecast means:
  [level 4, lesson 3](../level-4/03-fraction-decimal-percent.md).
- Symmetry of shapes: [Geometry](../../geometry/index.md). Real data and records: [Statistics](../../statistics/index.md).
- The three-coin list returns as a tree diagram in [level 4, lesson 2](../level-4/02-tree-diagrams.md).
