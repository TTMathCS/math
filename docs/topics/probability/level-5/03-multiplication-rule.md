---
title: "The multiplication rule"
---

# The multiplication rule

*Probability · level 5, lesson 3 of 6*

## A question to start

Which is more likely?

- **Bet 1:** roll two dice and get a double six.
- **Bet 2:** shuffle a pack of 52 cards and turn over the top two: both are aces.

Each has "a one in six" kind of feel and "a four in fifty-two" kind of feel. But how do you combine two chances into
one? You cannot add them (that was for "or"). This lesson shows that for "and" you **multiply**, why that works,
and what changes when the first event affects the second. (Bet 1 is about 6 times as likely as bet 2.)

## The idea

### Independent events

Two events are **independent** if one of them happening does **not change** the chance of the other. A coin does not
know what a die did. A die rolled today does not remember yesterday's roll. Two different dice do not talk to each
other.

Some pairs that are **not** independent:

- "It rains today" and "it rains tomorrow": rainy days tend to come in runs.
- "The first card is an ace" and "the second card is an ace", when the first card is not put back: once an ace has
  gone, fewer aces are left.

In level 6 you will see a precise test for independence. For now, independent means "no influence at all".

### The rule for independent events

If $A$ and $B$ are independent, then

$$P(A \text{ and } B) = P(A) \times P(B).$$

A coin and a die: $P(\text{heads and a 6}) = \tfrac12 \times \tfrac16 = \tfrac{1}{12}$.

### Why multiply? A fraction of a fraction

Imagine doing the experiment 1200 times. Heads comes up in about half of them: about 600 times. The die does not care
about the coin, so **among those 600**, a 6 comes up about a sixth of the time: about 100 times. So "heads and a 6"
happens about 100 times in 1200, which is $\tfrac{1}{12}$.

"A sixth **of** a half" is $\tfrac16 \times \tfrac12$. In mathematics, "of" a fraction means multiply.

### Why multiply? The area picture

Draw a square of area 1 for "everything that can happen". Split it left and right by the coin: the left half is heads.
Split it top and bottom by the die: the top sixth is "a 6". Because the die does not depend on the coin, the
horizontal cut is in the same place all the way across.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 250" role="img" aria-label="A unit square. A vertical line splits it into a left half for heads and a right half for tails. A horizontal line one sixth of the way down marks a 6. The small top-left rectangle, half wide and one sixth tall, is heads and a 6, with area one twelfth.">
  <rect x="40" y="20" width="200" height="200" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="40" y="20" width="100" height="200" fill="#eea66f" fill-opacity="0.3"/>
  <rect x="40" y="20" width="200" height="33.3" fill="#9cc9ea" fill-opacity="0.5"/>
  <rect x="40" y="20" width="100" height="33.3" fill="#7ccf9a"/>
  <line x1="140" y1="20" x2="140" y2="220" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="53.3" x2="240" y2="53.3" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="90" y="240">heads 1/2</text><text x="190" y="240">tails 1/2</text>
    <text x="90" y="41">1/12</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="248" y="41">a 6: 1/6</text><text x="248" y="140">not 6: 5/6</text>
  </g>
</svg>
</div>

The green corner is "heads **and** a 6". It is a rectangle $\tfrac12$ wide and $\tfrac16$ tall, so its area is
$\tfrac12 \times \tfrac16 = \tfrac{1}{12}$. Multiplying chances is the same as finding the area of a rectangle.

You can also check by counting: a coin and a die give $2 \times 6 = 12$ equally likely outcomes (H1, H2, ..., T6),
and exactly one of them is "H6".

### More than two events

The rule carries on. For three independent events,

$$P(A \text{ and } B \text{ and } C) = P(A) \times P(B) \times P(C).$$

Three coins all heads: $\tfrac12 \times \tfrac12 \times \tfrac12 = \tfrac18$. Each extra event takes a fraction of
what was left, so "and" chances shrink fast.

### With replacement and without replacement

Picking twice from a bag or a pack can be done two ways.

- **With replacement:** put the first one back (and mix) before the second pick. The second pick has exactly the same
  chances as the first, so the picks are independent. Multiply the two equal chances.
- **Without replacement:** keep the first one out. Now the second pick depends on the first, because the bag has
  changed. The picks are **not** independent.

Without replacement, you still multiply, but the second number must be the chance **after** the first event has
happened:

$$P(A \text{ and then } B) = P(A) \times P(B \text{, once } A \text{ has happened}).$$

In level 6 the second factor gets a proper name, "the probability of $B$ given $A$", written $P(B \mid A)$. The
reason this works is the same "fraction of a fraction" argument: $A$ happens in a fraction $P(A)$ of all tries, and
**among those tries**, $B$ happens in a fraction $P(B \text{, once } A \text{ has happened})$ of them.

### Two aces, both ways

**With replacement:** first card an ace, $\tfrac{4}{52}$. Put it back and shuffle. Second card an ace, again
$\tfrac{4}{52}$.

$$P(\text{two aces}) = \frac{4}{52} \times \frac{4}{52} = \frac{1}{13} \times \frac{1}{13} = \frac{1}{169}.$$

**Without replacement:** first card an ace, $\tfrac{4}{52}$. Now 51 cards are left, and only 3 of them are aces.

$$P(\text{two aces}) = \frac{4}{52} \times \frac{3}{51} = \frac{12}{2652} = \frac{1}{221}.$$

Check by counting: there are $52 \times 51 = 2652$ ways to deal a first and a second card, and $4 \times 3 = 12$ of
them are ace then ace. ✓ This answers the question at the start: a double six is $\tfrac{1}{36}$, about 0.028, and two
aces off the top is $\tfrac{1}{221}$, about 0.0045. The double six is about 6 times as likely.

### Independence is an assumption

The multiplication rule for independent events is only as good as the independence. Coins and dice are as close to
independent as anything in the real world. People, weather and machines often are not: if one part of a machine
fails because of a power cut, another part may fail for the same reason. When you multiply, say out loud "I am
assuming these are independent", and ask whether that is believable.

## Worked examples

**1. Three dice.** Three dice are rolled. Find $P(\text{all three show 6})$ and $P(\text{all three are even})$.

- The dice are independent.
- $P(\text{three 6s}) = \tfrac16 \times \tfrac16 \times \tfrac16 = \tfrac{1}{216}$.
- $P(\text{all even}) = \tfrac12 \times \tfrac12 \times \tfrac12 = \tfrac18$.

**2. A bag, with replacement.** A bag holds 5 red and 3 blue counters. One is taken, its colour noted, and it is put
back. Then a second is taken. Find $P(\text{both red})$.

$$P(\text{both red}) = \frac58 \times \frac58 = \frac{25}{64} \approx 0.39.$$

**3. The same bag, without replacement.** Now the first counter is not put back.

- First red: $\tfrac58$. That leaves 4 red and 3 blue, 7 counters.
- Second red, once the first was red: $\tfrac47$.
- $P(\text{both red}) = \tfrac58 \times \tfrac47 = \tfrac{20}{56} = \tfrac{5}{14} \approx 0.36$.

It is a little less likely than with replacement, because taking out a red leaves fewer reds.

**4. Different kinds of chance together.** A spinner shows "win" with probability 0.3, and a die is rolled. Find
$P(\text{win and an odd number})$.

The spinner and die are independent: $0.3 \times \tfrac12 = 0.15$.

**5. A guessing game.** A quiz has 4 questions, each with 3 choices. Someone guesses every answer at random. What is
the chance they get all 4 right?

Each guess is right with probability $\tfrac13$, independently: $\left(\tfrac13\right)^4 = \tfrac{1}{81}$, a little over 1%.

## Try it

1. A coin is tossed and a die is rolled. Find $P(\text{tails and an odd number})$.
2. Four coins are tossed. Find $P(\text{all heads})$ and $P(\text{all the same})$.
3. Two cards are dealt from a full pack without replacement. Find $P(\text{both hearts})$. What would it be with
   replacement?
4. A bag holds 4 green and 6 yellow sweets. Two are eaten, one after the other. Find $P(\text{both yellow})$.
5. A machine works only if all three of its parts work. The parts work with probabilities 0.9, 0.95 and 0.99,
   independently. Find the probability that the machine works.
6. Two cards are dealt without replacement. Is "the second card is red" independent of "the first card is red"?
   Give the two chances that show it.
7. A 4-digit code uses digits 0 to 9, and digits may repeat. A thief guesses one code at random. What is the chance it
   is right?
8. "The chance of rain on any day here is 0.3, so the chance of rain on both Saturday and Sunday is
   $0.3 \times 0.3 = 0.09$." What assumption is hiding here, and is it believable?

??? note "Answers"
    1. $\dfrac12 \times \dfrac12 = \dfrac14$ (3 of the 6 faces are odd).
    2. All heads: $\left(\dfrac12\right)^4 = \dfrac{1}{16}$. All the same means all heads **or** all tails, which are
       mutually exclusive, so add: $\dfrac{1}{16} + \dfrac{1}{16} = \dfrac18$.
    3. Without replacement: $\dfrac{13}{52} \times \dfrac{12}{51} = \dfrac{156}{2652} = \dfrac{1}{17}$.
       With replacement: $\dfrac{13}{52} \times \dfrac{13}{52} = \dfrac14 \times \dfrac14 = \dfrac{1}{16}$.
    4. $\dfrac{6}{10} \times \dfrac59 = \dfrac{30}{90} = \dfrac13$.
    5. $0.9 \times 0.95 \times 0.99 = 0.84645$, about 0.85. Even with good parts, needing all of them pulls the
       chance down.
    6. No. If the first card is red, 25 of the remaining 51 are red: $\dfrac{25}{51}$. If the first card is black,
       26 of the 51 are red: $\dfrac{26}{51}$. The chance changes, so they are not independent.
    7. There are $10 \times 10 \times 10 \times 10 = 10\,000$ codes, all equally likely to be the right one, so the
       chance is $\left(\dfrac{1}{10}\right)^4 = \dfrac{1}{10\,000}$.
    8. It assumes Saturday's weather and Sunday's weather are **independent**. They usually are not: a rainy Saturday
       makes a rainy Sunday more likely, because weather systems last more than a day. So the true chance of a
       rainy weekend is probably more than 0.09.

## Common mistake

**Multiplying events that are not independent, as if they were.** Without replacement, the second chance changes.
Always ask "has the first event changed anything?" and use the new numbers if it has.

**Adding for "and".** $\tfrac16 + \tfrac16$ is the chance of "6 on the first **or** 6 on the second" (and even that
needs the overlap taken away). "6 on the first **and** 6 on the second" is $\tfrac16 \times \tfrac16$. "And" makes
chances smaller, so the answer must be less than each of the separate chances.

## Where it leads

- Back: [The general addition rule](02-general-addition-rule.md) · Next: ["At least one"](04-at-least-one.md), where the
  multiplication rule and the complement solve a famous gambling question.
- [Level 5 page](index.md) · [Probability topic page](../index.md)
- The counting version of this rule (if one thing can be done in $m$ ways and the next in $n$ ways, together they
  can be done in $m \times n$ ways) is the product rule of [Counting](../../counting/index.md).
- The area picture is the start of [level 6](../level-6/index.md), where "once A has happened" becomes conditional
  probability, and independence is tested with numbers.
