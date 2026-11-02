---
title: "Independent events"
---

# Independent events

*Probability · level 4, lesson 4 of 6*

## A question to start

You toss a coin and roll a die. The chance of heads is $\tfrac12$. The chance of a 6 is $\tfrac16$. What is the
chance of getting **both**, heads **and** a 6?

Someone says: "Add them: $\tfrac12 + \tfrac16 = \tfrac23$."

Before working anything out, there is a quick reason why that must be wrong. Getting heads **and** a 6 is harder than
getting heads alone: every time you get both, you certainly got heads, but lots of heads come with a 1, 2, 3, 4 or 5.
So the chance of both must be **smaller** than $\tfrac12$, not bigger. Adding made it bigger. The right answer is
$\tfrac{1}{12}$, and this lesson shows the rule that gives it, and when you are allowed to use it.

## The idea

### What "independent" means

Two events are **independent** if one happening makes **no difference** to the chance of the other.

- The coin and the die: the coin has no way of knowing what the die did. Independent.
- Two rolls of the same die: the die does not remember its last roll. Independent.
- Two dice rolled together: they bounce off each other, but neither face is pushed towards a particular number.
  Independent.
- Your die in Toronto and a friend's die in Vancouver. Independent.

And some that are **not** independent (they are called **dependent**):

- Taking a marble from a bag and **not** putting it back, then taking another. The first draw changes what is left
  in the bag, so it changes the chances for the second.
- "It is cloudy" and "it rains" on the same day. Knowing it is cloudy makes rain more likely.
- "A student is tall" and "a student is in grade 8" in a school. Older students tend to be taller.

Independence is about the **world**, not about the numbers. You decide it by asking: "If I knew how the first one
turned out, would I change my chances for the second?" If not, they are independent.

### The multiplication rule

For **independent** events $A$ and $B$:

$$P(A \text{ and } B) = P(A) \times P(B)$$

For the coin and die: $P(H \text{ and } 6) = \tfrac12 \times \tfrac16 = \tfrac{1}{12}$.

Check it against the table from [lesson 1](01-compound-tables.md): there are $2 \times 6 = 12$ equally likely squares,
and exactly one of them is $H6$. ✓

### Why multiply? A picture

Draw a square and call its area 1: it stands for "everything that can happen". Split it into two halves, left for
heads and right for tails. Then split it into six rows, one for each face of the die.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 225" role="img" aria-label="A square of area 1 split down the middle into heads and tails halves and across into six rows for the die; the single green cell, heads and 6, is one sixth of one half, which is one twelfth of the square">
  <rect x="40" y="20" width="240" height="180" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="40" y="170" width="120" height="30" fill="#7ccf9a"/>
  <rect x="40" y="20" width="120" height="150" fill="#eea66f" fill-opacity="0.35"/>
  <line x1="160" y1="20" x2="160" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="50" x2="280" y2="50" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="80" x2="280" y2="80" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="110" x2="280" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="140" x2="280" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="170" x2="280" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="28" y="40" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="28" y="70" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="28" y="100" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="28" y="130" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="28" y="160" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="28" y="190" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <text x="100.0" y="218" font-size="12" text-anchor="middle" fill="currentColor">heads (1/2)</text>
  <text x="220.0" y="218" font-size="12" text-anchor="middle" fill="currentColor">tails (1/2)</text>
  <text x="100.0" y="190" font-size="12" text-anchor="middle" fill="currentColor">H6</text>
  <text x="400" y="80" font-size="12" text-anchor="middle" fill="currentColor">the whole square = 1</text>
  <text x="400" y="100" font-size="12" text-anchor="middle" fill="currentColor">green = heads and a 6</text>
  <text x="400" y="120" font-size="12" text-anchor="middle" fill="currentColor">= 1/6 of 1/2 = 1/12</text>
</svg>
</div>

Because the coin and the die are independent, the die's six rows run straight across **both** halves, in the same
proportions. The heads half is split into sixths exactly like the tails half. (If the die "preferred" 6 after heads,
the rows would be different sizes on the two sides.)

The green piece, heads **and** 6, is one row of the left half. It is $\tfrac16$ **of** $\tfrac12$ of the square:

$$\frac16 \text{ of } \frac12 = \frac16 \times \frac12 = \frac{1}{12}$$

"Of" means multiply, just as $\tfrac13$ of 12 is $\tfrac13 \times 12 = 4$. So the multiplication rule is really just
saying: **the second event happens in the same fraction of the first event's cases as it does overall.**

The same picture explains why the answer is smaller than both $\tfrac12$ and $\tfrac16$. Multiplying by a fraction
less than 1 makes things smaller: a part of a part is smaller than the whole part.

### Multiply along the branches

In [lesson 2](02-tree-diagrams.md) you multiplied along the branches of a tree. That was this rule at work: coin flips
are independent, so the chance of $H$ then $H$ then $T$ is $\tfrac12 \times \tfrac12 \times \tfrac12$.

Here is the tree for rolling two dice and looking for sixes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 220" role="img" aria-label="A tree for rolling two dice and looking for sixes: each die branches into six with probability one sixth and not six with probability five sixths; the four ends are 1/36, 5/36, 5/36 and 25/36">
  <line x1="26" y1="105" x2="120" y2="55" stroke="currentColor" stroke-width="1.3"/>
  <text x="73" y="75" font-size="11" text-anchor="middle" fill="currentColor">1/6</text>
  <line x1="26" y1="105" x2="120" y2="155" stroke="currentColor" stroke-width="1.3"/>
  <text x="73" y="125" font-size="11" text-anchor="middle" fill="currentColor">5/6</text>
  <line x1="156" y1="55" x2="260" y2="25" stroke="currentColor" stroke-width="1.3"/>
  <text x="208" y="35" font-size="11" text-anchor="middle" fill="currentColor">1/6</text>
  <line x1="156" y1="55" x2="260" y2="85" stroke="currentColor" stroke-width="1.3"/>
  <text x="208" y="65" font-size="11" text-anchor="middle" fill="currentColor">5/6</text>
  <line x1="156" y1="155" x2="260" y2="125" stroke="currentColor" stroke-width="1.3"/>
  <text x="208" y="135" font-size="11" text-anchor="middle" fill="currentColor">1/6</text>
  <line x1="156" y1="155" x2="260" y2="185" stroke="currentColor" stroke-width="1.3"/>
  <text x="208" y="165" font-size="11" text-anchor="middle" fill="currentColor">5/6</text>
  <circle cx="20" cy="105" r="5" fill="currentColor"/>
  <rect x="122" y="43" width="56" height="24" rx="6" fill="#7ccf9a"/>
  <text x="150" y="59" font-size="11" text-anchor="middle" fill="currentColor">six</text>
  <rect x="122" y="143" width="56" height="24" rx="6" fill="#9cc9ea"/>
  <text x="150" y="159" font-size="11" text-anchor="middle" fill="currentColor">not 6</text>
  <rect x="262" y="13" width="56" height="24" rx="6" fill="#7ccf9a"/>
  <text x="290" y="29" font-size="11" text-anchor="middle" fill="currentColor">six</text>
  <rect x="262" y="73" width="56" height="24" rx="6" fill="#9cc9ea"/>
  <text x="290" y="89" font-size="11" text-anchor="middle" fill="currentColor">not 6</text>
  <rect x="262" y="113" width="56" height="24" rx="6" fill="#7ccf9a"/>
  <text x="290" y="129" font-size="11" text-anchor="middle" fill="currentColor">six</text>
  <rect x="262" y="173" width="56" height="24" rx="6" fill="#9cc9ea"/>
  <text x="290" y="189" font-size="11" text-anchor="middle" fill="currentColor">not 6</text>
  <text x="330" y="29" font-size="12" text-anchor="start" fill="currentColor">six, six: 1/36</text>
  <text x="330" y="89" font-size="12" text-anchor="start" fill="currentColor">six, not: 5/36</text>
  <text x="330" y="129" font-size="12" text-anchor="start" fill="currentColor">not, six: 5/36</text>
  <text x="330" y="189" font-size="12" text-anchor="start" fill="currentColor">not, not: 25/36</text>
  <text x="150" y="210" font-size="11" text-anchor="middle" fill="currentColor">1st die</text>
  <text x="290" y="210" font-size="11" text-anchor="middle" fill="currentColor">2nd die</text>
</svg>
</div>

The branches for the second die are the **same** whichever way the first die went ($\tfrac16$ and $\tfrac56$ both
times). That is what independence looks like on a tree: the second set of branches does not change.

- Two sixes: $\tfrac16 \times \tfrac16 = \tfrac{1}{36}$.
- No sixes: $\tfrac56 \times \tfrac56 = \tfrac{25}{36}$.
- Exactly one six: $\tfrac{5}{36} + \tfrac{5}{36} = \tfrac{10}{36} = \tfrac{5}{18}$.

Check: $\tfrac{1 + 5 + 5 + 25}{36} = 1$. ✓ And it agrees with the 36-square table in
[level 3](../level-3/04-two-dice.md): $1 + 10 = 11$ squares with at least one 6.

### More than two

The rule keeps going. For independent events, multiply all their probabilities. Five coins all heads:

$$\frac12 \times \frac12 \times \frac12 \times \frac12 \times \frac12 = \frac{1}{32}$$

Each extra coin halves the chance. Ten coins all heads is $\tfrac{1}{1024}$, a little less than one in a thousand.

### When you may not multiply like this

If the events are **dependent**, the chances for the second event change, and multiplying the two "starting" chances
gives the wrong answer. Take a bag with 3 red and 2 blue marbles.

- **With** putting back: each draw is red with probability $\tfrac35$. Two reds: $\tfrac35 \times \tfrac35 = \tfrac{9}{25}$.
- **Without** putting back: after a red is taken out, the bag has 2 red and 2 blue. Now the second draw is red with
  probability $\tfrac24$, not $\tfrac35$. The draws are dependent.

Level 5 shows how trees handle that case: you still multiply along a branch, but you use the **changed** chances.

## Worked examples

**1. Heads and even.** A coin and a die. $P(H) = \tfrac12$ and $P(\text{even}) = \tfrac12$, and they are independent.
$P(H \text{ and even}) = \tfrac12 \times \tfrac12 = \tfrac14$. Lesson 1 found $\tfrac{3}{12} = \tfrac14$ by counting
squares. ✓

**2. Three dice, all even.** Each die is even with probability $\tfrac12$, independently:
$\tfrac12 \times \tfrac12 \times \tfrac12 = \tfrac18$. (Listing would need all $6 \times 6 \times 6 = 216$ outcomes;
there are $3 \times 3 \times 3 = 27$ all-even ones, and $\tfrac{27}{216} = \tfrac18$. ✓)

**3. A spinner and a die.** A spinner is red with probability $\tfrac13$. It is spun, and a die is rolled. Find
$P(\text{red and more than } 4)$.

$P(\text{more than } 4) = \tfrac26 = \tfrac13$. Independent, so $\tfrac13 \times \tfrac13 = \tfrac19$.

**4. Decimals work too.** A basketball player scores a free throw with probability 0.8, and we assume each shot is
independent of the last.

- Two in a row: $0.8 \times 0.8 = 0.64$.
- Miss both: $0.2 \times 0.2 = 0.04$.
- At least one: $1 - 0.04 = 0.96$.
- Exactly one: $0.8 \times 0.2 + 0.2 \times 0.8 = 0.32$. Check: $0.64 + 0.32 + 0.04 = 1$. ✓

("We assume" matters. A real player might get nervous after a miss, which would make the shots dependent. Saying
"independent" is a choice about how to model the world, and it should be a sensible one.)

**5. All different on three dice.** Roll three dice. What is the chance they all show different numbers?

- The first die can be anything.
- The second must differ from the first: $\tfrac56$.
- The third must differ from both: $\tfrac46$.

$1 \times \tfrac56 \times \tfrac46 = \tfrac{20}{36} = \tfrac59$. The dice are independent; the chances $\tfrac56$ and
$\tfrac46$ come from what we need, not from the dice changing.

## Try it

1. A coin is tossed and a die rolled. Find $P(H \text{ and } 3)$ by multiplying, and check with the 12-square table.
2. Two dice are rolled. Find $P(\text{both odd})$ and $P(\text{first is } 6 \text{ and second is not } 6)$.
3. Four coins are tossed. Find $P(\text{all tails})$ and $P(\text{at least one head})$.
4. A spinner wins with probability 0.3, independently each spin. It is spun twice. Find $P(\text{win both})$,
   $P(\text{win neither})$ and $P(\text{win exactly one})$. Check that they add to 1.
5. Independent or not? (a) two flips of one coin; (b) "it is cloudy" and "it rains" today; (c) the first and second
   cards drawn from a pack without putting the first back; (d) your die roll and your friend's in another city.
6. Draw an area picture (a square split into parts) for a coin and a spinner that is red with probability $\tfrac14$.
   Shade "heads and red" and find its probability.
7. Mo says: "The chance of a 6 is $\tfrac16$, so the chance of two 6s is $\tfrac16 + \tfrac16 = \tfrac13$." Give two
   reasons why that cannot be right.
8. A die is rolled 3 times. Find $P(\text{no } 6 \text{ at all})$ and $P(\text{at least one } 6)$, as fractions and as
   percents (to one decimal place).

??? note "Answers"
    1. $\tfrac12 \times \tfrac16 = \tfrac{1}{12}$. In the table, only the square $H3$: $\tfrac{1}{12}$. ✓
    2. Both odd: $\tfrac12 \times \tfrac12 = \tfrac14$. First 6, second not: $\tfrac16 \times \tfrac56 = \tfrac{5}{36}$.
    3. All tails: $\left(\tfrac12\right)^4 = \tfrac{1}{16}$. At least one head: $1 - \tfrac{1}{16} = \tfrac{15}{16}$.
    4. Both: $0.3 \times 0.3 = 0.09$. Neither: $0.7 \times 0.7 = 0.49$. Exactly one: $0.3 \times 0.7 + 0.7 \times 0.3 = 0.42$. Sum: $0.09 + 0.49 + 0.42 = 1$. ✓
    5. (a) Independent. (b) Dependent: clouds make rain more likely. (c) Dependent: the first card is no longer in
       the pack. (d) Independent.
    6. Split the square down the middle (heads, tails) and across into 4 equal rows (one row red, three not). "Heads
       and red" is one row of the left half: $\tfrac14 \times \tfrac12 = \tfrac18$ of the square.
    7. First, "two 6s" must be **less** likely than one 6, but $\tfrac13$ is more than $\tfrac16$. Second, by the same
       thinking, six 6s would have chance $\tfrac66 = 1$, certain, which is silly. The right answer is
       $\tfrac16 \times \tfrac16 = \tfrac{1}{36}$.
    8. No 6: $\tfrac56 \times \tfrac56 \times \tfrac56 = \tfrac{125}{216}$, about $0.579$, or $57.9\%$. At least one 6:
       $1 - \tfrac{125}{216} = \tfrac{91}{216}$, about $0.421$, or $42.1\%$.

## Common mistake

**Adding for "and".** Adding is for "or" (and only when the events cannot both happen). For "and" with independent
events, multiply. A quick sense check: "A and B" can never be more likely than A alone.

**Multiplying when the events are dependent.** If the first result changes the chances for the second (no putting
back, weather on the same day), the plain multiplication rule does not apply.

## Where it leads

- Back: [Fractions, decimals and percents](03-fraction-decimal-percent.md) · Next: [Simulations](05-simulations.md),
  for problems too hard to multiply out.
- [Level 4 page](index.md) · [Probability topic page](../index.md)
- The rules for "and", "or" and "at least one", with and without replacement: [level 5](../level-5/index.md).
- Independence defined exactly, and checked with tables: [level 6](../level-6/index.md).
- "A fraction of a fraction": [multiplying fractions](../../numbers/level-4/02-multiplying-fractions.md) in Numbers
  level 4. The area picture is the same one.
