---
title: "Build: Probability rules and tree diagrams"
---

# Build: "And", "or", and tree diagrams

*Probability · step 3 of 5*

## A question to start

Here is an old gambling bet. You roll one dice 4 times. If at least one 6 turns up, you win; if not, you lose. Is
this a good bet?

There are $6^4 = 1296$ possible sequences of four rolls, far too many to list. But with two short rules you can
show that the chance of winning is $\dfrac{671}{1296}$, a little better than a half (about 51.8%). The story goes that
a French gambler, the Chevalier de Méré, asked Blaise Pascal about bets like this in 1654, and the letters Pascal and
Pierre de Fermat then wrote to each other are often called the beginning of probability theory.

## The idea

### "Or": adding probabilities

Two events are **mutually exclusive** if they cannot both happen at once. Rolling a 2 and rolling a 5 on the same
roll are mutually exclusive. For such events:

$$P(\text{A or B}) = P(\text{A}) + P(\text{B}).$$

$P(2 \text{ or } 5) = \tfrac16 + \tfrac16 = \tfrac26 = \tfrac13$.

If the events **can** happen together, adding counts the overlap twice. Take a card from a pack of 52. "Heart" has
13 cards and "king" has 4, but the king of hearts is in both. So take it away once:

$$P(\text{A or B}) = P(\text{A}) + P(\text{B}) - P(\text{A and B}).$$

$$P(\text{heart or king}) = \frac{13}{52} + \frac{4}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}.$$

You can check it by counting: 13 hearts plus the 3 other kings make 16 cards.

### "And": multiplying probabilities

Two events are **independent** if one happening makes no difference at all to the chance of the other. Tossing a coin
and rolling a dice are independent; so are two separate rolls of a dice, since the dice has no memory. For independent
events:

$$P(\text{A and B}) = P(\text{A}) \times P(\text{B}).$$

$P(\text{heads and a } 6) = \tfrac12 \times \tfrac16 = \tfrac{1}{12}$. Check by counting: a coin and a dice give
$2 \times 6 = 12$ equally likely outcomes, and only one of them is "heads, 6".

Why multiply? Think of doing the experiment many times. Heads comes up in about $\tfrac12$ of them, and **of those**,
a 6 comes up in about $\tfrac16$. A sixth of a half is a twelfth.

### Tree diagrams

When an experiment happens in stages, a **tree diagram** keeps track. Draw a branch for each outcome of the first
stage, then branches from each of those for the second stage, and write the probability on every branch.

A bag holds 3 orange and 2 blue marbles. Take one, note its colour, **put it back**, and take another.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="Tree diagram: first pick orange 3/5 or blue 2/5; from each, second pick orange 3/5 or blue 2/5; the four paths have probabilities 9/25, 6/25, 6/25 and 4/25">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="20" y1="95" x2="140" y2="50"/><line x1="20" y1="95" x2="140" y2="140"/>
    <line x1="160" y1="50" x2="270" y2="25"/><line x1="160" y1="50" x2="270" y2="75"/>
    <line x1="160" y1="140" x2="270" y2="115"/><line x1="160" y1="140" x2="270" y2="165"/>
  </g>
  <circle cx="150" cy="50" r="10" fill="#eea66f"/><circle cx="150" cy="140" r="10" fill="#9cc9ea"/>
  <circle cx="280" cy="25" r="10" fill="#eea66f"/><circle cx="280" cy="75" r="10" fill="#9cc9ea"/>
  <circle cx="280" cy="115" r="10" fill="#eea66f"/><circle cx="280" cy="165" r="10" fill="#9cc9ea"/>
  <g font-size="13" fill="currentColor">
    <text x="60" y="62">3/5</text><text x="60" y="140">2/5</text>
    <text x="200" y="28">3/5</text><text x="200" y="76">2/5</text>
    <text x="200" y="118">3/5</text><text x="200" y="166">2/5</text>
    <text x="300" y="30">OO: 9/25</text><text x="300" y="80">OB: 6/25</text>
    <text x="300" y="120">BO: 6/25</text><text x="300" y="170">BB: 4/25</text>
  </g>
</svg>
</div>

Two rules for reading a tree:

1. **Along a path, multiply.** A path is one "this **and then** that", so use the "and" rule.
   $P(\text{orange, orange}) = \tfrac35 \times \tfrac35 = \tfrac{9}{25}$.
2. **Across paths, add.** Different paths are mutually exclusive, so use the "or" rule.
   $P(\text{same colour}) = P(\text{OO}) + P(\text{BB}) = \tfrac{9}{25} + \tfrac{4}{25} = \tfrac{13}{25}$.

A good check: the probabilities at all the tips add up to 1. Here $\tfrac{9 + 6 + 6 + 4}{25} = 1$. ✓

### "At least one": use the complement

"At least one 6 in 4 rolls" could mean one 6, or two, or three, or four, in many different positions. That is a lot
of paths. The **opposite** is simple: "no 6 at all", which means "not 6" **and** "not 6" **and** "not 6" **and** "not
6". So

$$P(\text{at least one}) = 1 - P(\text{none}).$$

## Worked examples

**1. The old bet.** At least one 6 in 4 rolls of a dice.

- Each roll is "not 6" with probability $\tfrac56$, and the rolls are independent.
- $P(\text{no } 6 \text{ in } 4 \text{ rolls}) = \left(\tfrac56\right)^4 = \dfrac{625}{1296} \approx 0.482$.
- $P(\text{at least one } 6) = 1 - \dfrac{625}{1296} = \dfrac{671}{1296} \approx 0.518$.

Just over a half, so in the long run the person betting on "at least one 6" wins slightly more often than they lose.

**2. A spinner played three times.** A spinner gives a win with probability 0.3 each time, independently.

- Win all three: $0.3 \times 0.3 \times 0.3 = 0.027$.
- Win none: $0.7 \times 0.7 \times 0.7 = 0.343$.
- Win at least once: $1 - 0.343 = 0.657$.

**3. One of each.** From the marble tree above, what is the probability of one orange and one blue, in either
order?

Two paths give that: OB and BO. Add them: $\tfrac{6}{25} + \tfrac{6}{25} = \tfrac{12}{25}$. Forgetting that "one of
each" can happen in two orders is a very common slip.

## Try it

1. A card is drawn from a full pack. Find $P(\text{heart or spade})$ and $P(\text{red or queen})$.
2. Two coins are tossed and a dice is rolled. What is the probability of two heads and a 6?
3. A bag has 4 green and 1 yellow marble. A marble is picked, put back, and a second is picked. Draw the tree. Find
   $P(\text{both green})$ and $P(\text{one of each colour})$.
4. A basketball player scores each free throw with probability 0.8, independently. She takes 2 shots. What is the
   probability she scores at least once?
5. The Chevalier de Méré's second bet: roll **two** dice 24 times; you win if at least one double 6 appears. Is that
   better or worse than an even chance?

??? note "Answers"
    1. Hearts and spades cannot both happen (mutually exclusive): $\dfrac{13}{52} + \dfrac{13}{52} = \dfrac12$.
       Red and queen can overlap (the 2 red queens): $\dfrac{26}{52} + \dfrac{4}{52} - \dfrac{2}{52} = \dfrac{28}{52} = \dfrac{7}{13}$.
    2. $\dfrac12 \times \dfrac12 \times \dfrac16 = \dfrac{1}{24}$.
    3. $P(\text{both green}) = \dfrac45 \times \dfrac45 = \dfrac{16}{25}$. One of each: green then yellow, or yellow
       then green: $\dfrac45 \times \dfrac15 + \dfrac15 \times \dfrac45 = \dfrac{8}{25}$.
    4. $P(\text{miss both}) = 0.2 \times 0.2 = 0.04$, so $P(\text{at least one}) = 1 - 0.04 = 0.96$.
    5. Worse. A double 6 has probability $\dfrac{1}{36}$, so no double 6 in 24 rolls has probability
       $\left(\dfrac{35}{36}\right)^{24} \approx 0.509$. Then $P(\text{at least one}) \approx 1 - 0.509 = 0.491$, just
       under a half. The story goes that de Méré had expected the two bets to be equally good.

## Common mistake

**Adding when you should multiply.** "The chance of a 6 is $\tfrac16$ each time, so in 4 rolls it is
$4 \times \tfrac16 = \tfrac23$" is wrong. Follow that thinking to 7 rolls and you get $\tfrac76$, more than 1, which is
impossible. Adding only works for events that cannot happen together, and 6s on different rolls certainly can. For
"at least one", use $1 - P(\text{none})$.

## Where it leads

- Next step: [Master: conditional probability](04-master.md), where the second stage of a tree **depends** on the
  first, as when you do not put the marble back.
- Back a step: [Explore: chances as numbers](02-explore.md)
- The lottery's 13,983,816 tickets from [Counting: combinations](../counting/level-5/index.md) give a jackpot chance of
  $\tfrac{1}{13{,}983{,}816}$ per ticket.
