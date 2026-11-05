---
title: "\"At least one\""
---

# "At least one"

*Probability · level 5, lesson 4 of 6*

## A question to start

Here are two old dice bets.

- **Bet 1:** roll one die 4 times. You win if at least one 6 turns up.
- **Bet 2:** roll two dice together 24 times. You win if at least one double six turns up.

A gambler might reason like this. "In bet 1, a 6 has a 1 in 6 chance, and I get 4 tries: $4 \times \tfrac16 = \tfrac23$.
In bet 2, a double six has a 1 in 36 chance, and I get 24 tries: $24 \times \tfrac{1}{36} = \tfrac23$. So both bets are
equally good, and both are good bets."

The story goes that a French gambler, the Chevalier de Méré, found in the 1650s that bet 1 seemed to win money over
time but bet 2 seemed to lose it, and he asked the mathematician Blaise Pascal why. Pascal wrote about it to Pierre de
Fermat in 1654, and their letters are often called the beginning of probability theory. By the end of this lesson you
will be able to answer de Méré yourself, exactly.

## The idea

### What "at least one" means

**At least one** means one or more. "At least one 6 in 4 rolls" is true if there is exactly one 6, or exactly two, or
three, or four, and the 6s can be on any of the rolls. That is a lot of different cases to add up.

### Why "times the number of tries" is wrong

The gambler's reasoning, $4 \times \tfrac16$, adds the chances of "6 on roll 1", "6 on roll 2", and so on. But those
events are **not** mutually exclusive: you can get a 6 on roll 1 **and** on roll 2. So adding counts the overlaps more
than once (lesson 2), and the answer is too big.

To see how wrong it is, carry on: in 6 rolls you would get $6 \times \tfrac16 = 1$, a certain 6. Yet everybody has
rolled a die 6 times without a 6. In 7 rolls you would get $\tfrac76$, a chance bigger than 1, which is impossible.

### The opposite is simple

Turn the question round. The opposite of "at least one 6" is **"no 6 at all"**. That is just one case: "not 6" on the
first roll **and** "not 6" on the second **and** so on. "And" with independent rolls means multiply (lesson 3).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="A tree for two rolls of a die. Each roll branches into 6 with chance 1/6 and not 6 with chance 5/6. Three of the four ends contain at least one 6. Only the bottom path, not 6 then not 6, has no 6, with chance 25/36.">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="20" y1="100" x2="130" y2="50"/><line x1="20" y1="100" x2="130" y2="150"/>
    <line x1="150" y1="50" x2="250" y2="25"/><line x1="150" y1="50" x2="250" y2="75"/>
    <line x1="150" y1="150" x2="250" y2="125"/>
  </g>
  <g stroke="#9cc9ea" stroke-width="5">
    <line x1="20" y1="100" x2="130" y2="150"/><line x1="150" y1="150" x2="250" y2="175"/>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="62" y="64">1/6</text><text x="62" y="146">5/6</text>
    <text x="192" y="30">1/6</text><text x="192" y="76">5/6</text>
    <text x="192" y="128">1/6</text><text x="192" y="176">5/6</text>
    <text x="133" y="54">6</text><text x="124" y="168">not 6</text>
    <text x="258" y="29">6, 6: at least one</text><text x="258" y="79">6, not 6: at least one</text>
    <text x="258" y="129">not 6, 6: at least one</text><text x="258" y="179">not, not: none, 25/36</text>
  </g>
</svg>
</div>

With two rolls, three of the four ends of the tree have "at least one 6", but only **one** end has "none". So it is
far less work to find $P(\text{none})$ and take it away from 1. That is the complement rule from level 3:

$$P(\text{at least one}) = 1 - P(\text{none}).$$

For two rolls: $P(\text{none}) = \tfrac56 \times \tfrac56 = \tfrac{25}{36}$, so $P(\text{at least one 6}) = 1 - \tfrac{25}{36} = \tfrac{11}{36}$.
Compare the wrong method: $2 \times \tfrac16 = \tfrac{12}{36}$. The extra $\tfrac{1}{36}$ is the double six, counted
twice.

### The general pattern

If each try fails with probability $q$, and the tries are independent, then the chance of **no** success in $n$ tries
is $q \times q \times \cdots \times q = q^n$, so

$$P(\text{at least one success in } n \text{ tries}) = 1 - q^n.$$

Since $q$ is less than 1, $q^n$ gets smaller and smaller as $n$ grows, so the chance of at least one success creeps
up towards 1 but never reaches or passes it. That is the honest version of "more tries means more chance".

Here is the chance of at least one 6 in $n$ rolls:

| Rolls $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 10 | 13 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $1 - (5/6)^n$ | 0.167 | 0.306 | 0.421 | 0.518 | 0.598 | 0.665 | 0.838 | 0.907 | 0.974 |

Even in 6 rolls there is about a 1 in 3 chance of seeing no 6 at all.

### Spare parts and backups

The same rule explains why important machines carry spares. Suppose a radio fails on a long trip with probability
0.05. With one radio, the chance of losing contact is 0.05. With two radios that fail independently, contact is lost
only if **both** fail: $0.05 \times 0.05 = 0.0025$. So the chance that at least one works is $1 - 0.0025 = 0.9975$.
Space missions, including the rovers on Mars, often carry backups of vital equipment for this reason. (The
"independently" matters: two radios that share one power supply can fail together.)

<figure class="play" data-play="dice" data-n="1"><span class="ai-tag">AI-created</span><figcaption><b>At least one six.</b> Roll a few times and count how often a six shows up at all.</figcaption></figure>

## Worked examples

**1. De Méré's bet 1.** At least one 6 in 4 rolls.

- $P(\text{no 6 on one roll}) = \tfrac56$.
- $P(\text{no 6 in 4 rolls}) = \left(\tfrac56\right)^4 = \tfrac{625}{1296}$.
- $P(\text{at least one 6}) = 1 - \tfrac{625}{1296} = \tfrac{671}{1296} \approx 0.518$.

Just over a half, so in the long run this bet wins a little more often than it loses. Not $\tfrac23$, though.

**2. De Méré's bet 2.** At least one double six in 24 rolls of two dice.

- $P(\text{double six}) = \tfrac{1}{36}$, so $P(\text{not a double six}) = \tfrac{35}{36}$.
- $P(\text{no double six in 24 rolls}) = \left(\tfrac{35}{36}\right)^{24} \approx 0.509$.
- $P(\text{at least one double six}) \approx 1 - 0.509 = 0.491$.

Just **under** a half. So bet 2 loses slightly more often than it wins, which is what de Méré noticed. The difference
between 0.518 and 0.491 is small, and the story goes that he noticed it after a great many games. With 25 rolls, bet 2
becomes $1 - \left(\tfrac{35}{36}\right)^{25} \approx 0.506$, just better than even.

**3. How many tries?** How many times must you roll a die to have at least a 90% chance of seeing a 6?

- We need $1 - \left(\tfrac56\right)^n \ge 0.9$, which means $\left(\tfrac56\right)^n \le 0.1$.
- Try values with a calculator: $\left(\tfrac56\right)^{12} \approx 0.112$, too big, and $\left(\tfrac56\right)^{13} \approx 0.093$, small enough.
  (So 12 rolls give 0.888 and 13 rolls give 0.907.)
- So **13 rolls**.

**4. At least one head.** Five coins are tossed. $P(\text{no heads}) = \left(\tfrac12\right)^5 = \tfrac{1}{32}$, so
$P(\text{at least one head}) = \tfrac{31}{32}$.

**5. At least two.** In 4 rolls of a die, find the chance of **at least two** 6s.

"At least two" is the opposite of "none or exactly one".

- $P(\text{none}) = \tfrac{625}{1296}$ (from example 1).
- Exactly one 6: the 6 can be on any of the 4 rolls. Each such pattern (like 6, not, not, not) has chance
  $\tfrac16 \times \tfrac56 \times \tfrac56 \times \tfrac56 = \tfrac{125}{1296}$, and the 4 patterns are mutually
  exclusive, so $P(\text{exactly one}) = 4 \times \tfrac{125}{1296} = \tfrac{500}{1296}$.
- $P(\text{at least two}) = 1 - \tfrac{625}{1296} - \tfrac{500}{1296} = \tfrac{171}{1296} = \tfrac{19}{144} \approx 0.13$.

### Going further: a quick rule of thumb

For a small chance $p$ per try, the number of tries you need for an even chance of at least one success is about
$0.7 \div p$. For a 6 ($p = \tfrac16$) that is about $0.7 \times 6 = 4.2$, so 4 rolls; for a double six it is about
$0.7 \times 36 = 25.2$, so 25 rolls. Both agree with the exact answers above. (The 0.7 is really 0.693..., a number
you will meet again with logarithms in [Change](../../change/index.md).)

## Try it

1. Three coins are tossed. Find $P(\text{at least one head})$.
2. A die is rolled 3 times. Find $P(\text{at least one 6})$ as a fraction.
3. A basketball player scores each free throw with probability 0.7, independently. She takes 3 shots. Find the
   probability she scores at least once.
4. A scratch card wins with probability $\tfrac15$. You buy 4 cards (independent). Find the probability that at least
   one wins. Is it more or less than a half?
5. How many coins must you toss to have at least a 99% chance of at least one head?
6. A bag holds 3 red and 7 blue marbles. Two are taken without replacement. Find $P(\text{at least one red})$. (Careful:
   the picks are not independent, but the complement still works.)
7. A house has two smoke alarms. Each one works with probability 0.9, independently. What is the probability that at
   least one works?
8. Four coins are tossed. Find $P(\text{at least two heads})$.

??? note "Answers"
    1. $P(\text{no heads}) = \left(\dfrac12\right)^3 = \dfrac18$, so $P(\text{at least one}) = \dfrac78$.
    2. $1 - \left(\dfrac56\right)^3 = 1 - \dfrac{125}{216} = \dfrac{91}{216} \approx 0.42$.
    3. She misses each with probability 0.3. $P(\text{misses all 3}) = 0.3^3 = 0.027$, so
       $P(\text{at least one}) = 1 - 0.027 = 0.973$.
    4. $P(\text{no win}) = \left(\dfrac45\right)^4 = \dfrac{256}{625}$, so $P(\text{at least one win}) = \dfrac{369}{625} \approx 0.59$.
       More than a half, but far less than $4 \times \dfrac15 = \dfrac45$.
    5. We need $\left(\dfrac12\right)^n \le 0.01$. $\left(\dfrac12\right)^6 = \dfrac{1}{64} \approx 0.016$ (not enough) and
       $\left(\dfrac12\right)^7 = \dfrac{1}{128} \approx 0.0078$. So **7 coins**.
    6. $P(\text{no red}) = P(\text{both blue}) = \dfrac{7}{10} \times \dfrac69 = \dfrac{42}{90} = \dfrac{7}{15}$.
       So $P(\text{at least one red}) = 1 - \dfrac{7}{15} = \dfrac{8}{15}$.
    7. Both fail with probability $0.1 \times 0.1 = 0.01$, so at least one works with probability $0.99$.
    8. $P(\text{no heads}) = \dfrac{1}{16}$. Exactly one head: it can be any of the 4 coins, each pattern
       $\dfrac{1}{16}$, so $\dfrac{4}{16}$. $P(\text{at least two}) = 1 - \dfrac{1}{16} - \dfrac{4}{16} = \dfrac{11}{16}$.

## Common mistake

**Multiplying the chance by the number of tries.** "$4 \times \tfrac16$" adds chances of events that overlap. It is
always too big, and for enough tries it goes above 1. Use $1 - P(\text{none})$ instead.

**Getting the complement wrong.** The opposite of "at least one" is "none", not "exactly one" and not "all". The
opposite of "at least two" is "none or one". Say the opposite in words before you calculate.

## Where it leads

- Back: [The multiplication rule](03-multiplication-rule.md) · Next: [Trees with unequal branches](05-unequal-branch-trees.md).
- [Level 5 page](index.md) · [Probability topic page](../index.md)
- "Exactly one" and "exactly two" in $n$ tries lead to the binomial distribution in [level 7](../level-7/index.md).
- The same complement trick, used with dependent picks, solves the birthday problem in
  [level 6](../level-6/04-birthday-problem.md).
- Counting the patterns (which rolls are the 6s) is a job for combinations in [Counting](../../counting/index.md).
