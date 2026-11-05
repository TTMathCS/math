---
title: "Compound events with tables"
---

# Compound events with tables

*Probability · level 4, lesson 1 of 6*

## A question to start

Toss a coin and roll a die at the same time. How many different results are possible?

A very common answer is **8**: two for the coin plus six for the die. Another is **6**, because "the die has 6 and the
coin just comes along".

Both are wrong. The answer is **12**, and once you see why, you have the key to every problem about two things
happening at once. You will also be able to say, in a few seconds, that the chance of "heads and an even number" is
exactly $\tfrac{3}{12} = \tfrac14$.

## The idea

### Compound experiments

A **compound experiment** is two or more simple experiments done together, or one after the other: a coin and a die,
two spinners, choosing a main course and a drink, rolling a die twice. An outcome of the compound experiment says what
happened in **each** part. So it is a **pair** (or a list), like "heads and 4", written $(H, 4)$ or just $H4$.

A **compound event** is a group of these pairs: "heads and an even number", "the two spinners match", and so on.

### Building the table

The safest way to list every pair is a **table**, also called a grid. Put the outcomes of one experiment down the
side and the outcomes of the other along the top. Every square is one pair.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 175" role="img" aria-label="A table of 12 outcomes for a coin and a die: rows heads and tails, columns 1 to 6; the cells H2, H4 and H6 are shaded blue">
  <rect x="80" y="4" width="30" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="95.0" cy="19.0" r="2.4" fill="currentColor"/>
  <rect x="130" y="4" width="30" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="138.1" cy="12.1" r="2.4" fill="currentColor"/>
  <circle cx="151.9" cy="25.9" r="2.4" fill="currentColor"/>
  <rect x="180" y="4" width="30" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="188.1" cy="12.1" r="2.4" fill="currentColor"/>
  <circle cx="195.0" cy="19.0" r="2.4" fill="currentColor"/>
  <circle cx="201.9" cy="25.9" r="2.4" fill="currentColor"/>
  <rect x="230" y="4" width="30" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="238.1" cy="12.1" r="2.4" fill="currentColor"/>
  <circle cx="251.9" cy="12.1" r="2.4" fill="currentColor"/>
  <circle cx="238.1" cy="25.9" r="2.4" fill="currentColor"/>
  <circle cx="251.9" cy="25.9" r="2.4" fill="currentColor"/>
  <rect x="280" y="4" width="30" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="288.1" cy="12.1" r="2.4" fill="currentColor"/>
  <circle cx="301.9" cy="12.1" r="2.4" fill="currentColor"/>
  <circle cx="295.0" cy="19.0" r="2.4" fill="currentColor"/>
  <circle cx="288.1" cy="25.9" r="2.4" fill="currentColor"/>
  <circle cx="301.9" cy="25.9" r="2.4" fill="currentColor"/>
  <rect x="330" y="4" width="30" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="338.1" cy="12.1" r="2.4" fill="currentColor"/>
  <circle cx="351.9" cy="12.1" r="2.4" fill="currentColor"/>
  <circle cx="338.1" cy="19.0" r="2.4" fill="currentColor"/>
  <circle cx="351.9" cy="19.0" r="2.4" fill="currentColor"/>
  <circle cx="338.1" cy="25.9" r="2.4" fill="currentColor"/>
  <circle cx="351.9" cy="25.9" r="2.4" fill="currentColor"/>
  <circle cx="40" cy="65" r="17" fill="#eea66f"/>
  <text x="40" y="70" font-size="14" text-anchor="middle" fill="currentColor">H</text>
  <rect x="70" y="40" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="95" y="70" font-size="13" text-anchor="middle" fill="currentColor">H1</text>
  <rect x="120" y="40" width="50" height="50" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="70" font-size="13" text-anchor="middle" fill="currentColor">H2</text>
  <rect x="170" y="40" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="70" font-size="13" text-anchor="middle" fill="currentColor">H3</text>
  <rect x="220" y="40" width="50" height="50" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="245" y="70" font-size="13" text-anchor="middle" fill="currentColor">H4</text>
  <rect x="270" y="40" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="295" y="70" font-size="13" text-anchor="middle" fill="currentColor">H5</text>
  <rect x="320" y="40" width="50" height="50" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="345" y="70" font-size="13" text-anchor="middle" fill="currentColor">H6</text>
  <circle cx="40" cy="115" r="17" fill="#eea66f"/>
  <text x="40" y="120" font-size="14" text-anchor="middle" fill="currentColor">T</text>
  <rect x="70" y="90" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="95" y="120" font-size="13" text-anchor="middle" fill="currentColor">T1</text>
  <rect x="120" y="90" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="120" font-size="13" text-anchor="middle" fill="currentColor">T2</text>
  <rect x="170" y="90" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="120" font-size="13" text-anchor="middle" fill="currentColor">T3</text>
  <rect x="220" y="90" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="245" y="120" font-size="13" text-anchor="middle" fill="currentColor">T4</text>
  <rect x="270" y="90" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="295" y="120" font-size="13" text-anchor="middle" fill="currentColor">T5</text>
  <rect x="320" y="90" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="345" y="120" font-size="13" text-anchor="middle" fill="currentColor">T6</text>
  <text x="220" y="164" font-size="12" text-anchor="middle" fill="currentColor">12 outcomes; blue: heads and an even number (3 of 12)</text>
</svg>
</div>

The coin has 2 rows. The die has 6 columns. Every row has all 6 columns, so the number of squares is

$$2 \times 6 = 12$$

That is why we **multiply**, not add. Adding (2 + 6) counts the coin's results and the die's results separately, as
if you either toss the coin or roll the die. But we do both, and every coin result can go with every die result. Each
of the 2 coin results opens up a whole row of 6.

This is a general rule. If one experiment has $m$ outcomes and the other has $n$, doing both has $m \times n$ outcomes.
In [level 3](../level-3/04-two-dice.md) the two dice gave $6 \times 6 = 36$.

### When are the squares equally likely?

We want to use the fraction rule, so we need the 12 squares to be equally likely. They are, when two things are true:

1. **Each part on its own has equally likely outcomes.** The coin is fair; the die is fair.
2. **The parts do not affect each other.** The coin does not know what the die did.

Why does that give equal squares? Picture doing the experiment 1200 times. The coin lands heads in about 600 of them.
In those 600, the die does not care about the coin, so it shares itself out equally: about 100 of each face. So $H1$,
$H2$, ..., $H6$ each happen about 100 times, and the same is true for the tails row. Every square gets about 100 out of
1200, which is one in 12.

(Lesson 4 of this level gives the second condition its proper name: **independence**.)

### Reading events from the table

Once you have the table, an event is just a set of squares. Shade them and count.

- **"Heads and an even number"**: the squares $H2$, $H4$, $H6$, shaded blue above. So
  $P(H \text{ and even}) = \tfrac{3}{12} = \tfrac14$.
- **"Heads or a 6"**: the whole heads row (6 squares) plus $T6$ (1 more square). Do not count $H6$ twice! So
  $P(H \text{ or } 6) = \tfrac{7}{12}$.

"And" means a square must be in **both** groups. "Or" means it can be in **either** group, or both. Shading makes the
difference easy to see.

### Two spinners

The table works for any two experiments. Here spinner A has three equal parts (orange, blue, green) and spinner B has
two equal halves (1 and 2).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 165" role="img" aria-label="Spinner A in three equal parts orange, blue and green; spinner B in two equal halves 1 and 2; a 3 by 2 table of the six outcomes O1, O2, B1, B2, G1, G2">
  <path d="M 70 70 L 70.0 20.0 A 50 50 0 0 1 113.3 95.0 Z" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 70 70 L 113.3 95.0 A 50 50 0 0 1 26.7 95.0 Z" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 70 70 L 26.7 95.0 A 50 50 0 0 1 70.0 20.0 Z" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="98" y="62" font-size="13" text-anchor="middle" fill="currentColor">O</text>
  <text x="70" y="105" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <text x="42" y="62" font-size="13" text-anchor="middle" fill="currentColor">G</text>
  <path d="M 200 70 L 200.0 20.0 A 50 50 0 0 1 200.0 120.0 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 200 70 L 200.0 120.0 A 50 50 0 0 1 200.0 20.0 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="222" y="75" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <text x="178" y="75" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <text x="70" y="140" font-size="12" text-anchor="middle" fill="currentColor">spinner A: thirds</text>
  <text x="200" y="140" font-size="12" text-anchor="middle" fill="currentColor">spinner B: halves</text>
  <text x="318" y="22" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="354" y="22" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="290" y="53" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">O</text>
  <rect x="300" y="30" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="318" y="53" font-size="12" text-anchor="middle" fill="currentColor">O1</text>
  <rect x="336" y="30" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="354" y="53" font-size="12" text-anchor="middle" fill="currentColor">O2</text>
  <text x="290" y="89" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">B</text>
  <rect x="300" y="66" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="318" y="89" font-size="12" text-anchor="middle" fill="currentColor">B1</text>
  <rect x="336" y="66" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="354" y="89" font-size="12" text-anchor="middle" fill="currentColor">B2</text>
  <text x="290" y="125" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">G</text>
  <rect x="300" y="102" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="318" y="125" font-size="12" text-anchor="middle" fill="currentColor">G1</text>
  <rect x="336" y="102" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="354" y="125" font-size="12" text-anchor="middle" fill="currentColor">G2</text>
  <text x="336" y="158" font-size="12" text-anchor="middle" fill="currentColor">3 × 2 = 6</text>
</svg>
</div>

There are $3 \times 2 = 6$ equally likely pairs. So, for example, $P(\text{green and } 2) = \tfrac16$, and
$P(\text{blue or } 1)$ is the B row (2 squares) plus $O1$ and $G1$ (2 more), so $\tfrac46 = \tfrac23$.

### When the parts of a spinner are not equal

Suppose spinner C is **half** red, a **quarter** blue and a **quarter** yellow. You cannot make a table with one row
for red, one for blue and one for yellow, because those rows would not be equally likely.

Use the trick from [level 3](../level-3/06-equally-likely.md): cut the spinner into equal pieces. Think of it as four
quarters: red, red, blue, yellow. Now give it **four** rows, two of them red. Every square is equally likely again.

<figure class="play" data-play="dice" data-n="2"><span class="ai-tag">AI-created</span><figcaption><b>Two dice, one table.</b> 36 squares, each a pair.</figcaption></figure>

## Worked examples

**1. A coin and a die.** Find $P(\text{tails and more than } 4)$.

Tails row, columns 5 and 6: $T5$, $T6$. That is 2 of the 12 squares, so $\tfrac{2}{12} = \tfrac16$.

**2. Two spinners with numbers.** Spinner P has 4 equal parts, 1 to 4. Spinner Q has 3 equal parts, 1 to 3. Both are
spun and the numbers added. Make a table of sums.

| + | 1 | 2 | 3 |
| --- | --- | --- | --- |
| **1** | 2 | 3 | 4 |
| **2** | 3 | 4 | 5 |
| **3** | 4 | 5 | 6 |
| **4** | 5 | 6 | 7 |

There are $4 \times 3 = 12$ squares.

- $P(\text{sum } 5) = \tfrac{3}{12} = \tfrac14$ (the three 5s).
- $P(\text{sum } 4) = \tfrac{3}{12} = \tfrac14$ as well.
- $P(\text{sum is at least } 6) = \tfrac{3}{12} = \tfrac14$ (two 6s and one 7).

**3. The unequal spinner and a coin.** Spinner C (half red, quarter blue, quarter yellow) is spun and a coin is
tossed. Find $P(\text{red and heads})$.

Rows for C: red, red, blue, yellow. Columns: H, T. That is $4 \times 2 = 8$ equally likely squares. Red and heads
appears in **2** of them (one in each red row). So $P = \tfrac28 = \tfrac14$.

Notice that $\tfrac14$ is $\tfrac12$ (red) of $\tfrac12$ (heads). That is not an accident: lesson 4 shows why.

**4. A captain and a vice-captain.** Four friends, Ali, Bea, Cam and Dev, choose a captain and a vice-captain by lot.
The same person cannot be both. What is the chance that Ali gets one of the two jobs?

Make a 4-by-4 table: captain down the side, vice-captain along the top. The squares on the diagonal (Ali-Ali,
Bea-Bea, and so on) are impossible, so cross them out. That leaves $16 - 4 = 12$ equally likely squares.

Ali is captain in 3 squares (with Bea, Cam or Dev as vice) and vice-captain in 3 more. So $P = \tfrac{6}{12} = \tfrac12$.

This is a table where the second choice **depends** on the first: once a captain is chosen, only 3 people are left.
The table handles it by crossing out squares.

**5. Rock, paper, scissors.** Two players each choose at random. The table has $3 \times 3 = 9$ squares. Three of them
are draws (the diagonal). Of the other six, player A wins in 3 (rock beats scissors, scissors beats paper, paper beats
rock) and B wins in 3. So $P(\text{draw}) = P(\text{A wins}) = P(\text{B wins}) = \tfrac39 = \tfrac13$. A fair game.

## Try it

1. A coin is tossed and a die is rolled. Find $P(H \text{ and } 5)$ and $P(T \text{ and odd})$.
2. Two spinners each have 4 equal parts numbered 1 to 4. How many outcomes are there? Find $P(\text{the numbers match})$ and $P(\text{the sum is } 5)$.
3. Spinner P (1 to 4) and spinner Q (1 to 3) are spun and the numbers **multiplied**. Find
   $P(\text{the product is even})$.
4. A café offers pizza, soup or salad, and juice or milk. You pick a main and a drink at random. Find
   $P(\text{pizza and juice})$ and $P(\text{soup or milk})$.
5. A coin is tossed and a die is rolled. Find $P(H \text{ or a number less than } 3)$.
6. Spinner C (half red, quarter blue, quarter yellow) is spun twice. Using rows red, red, blue, yellow and the same
   columns, find $P(\text{both red})$ and $P(\text{same colour twice})$.
7. Five people are in a club. A president and a secretary are chosen by lot, and they must be different people. How
   many outcomes are there? What is the chance that Mo and Lin get the two jobs (in either order)?
8. Two coins and a die are thrown. How many outcomes are there? What is $P(\text{two heads and a } 6)$?

??? note "Answers"
    1. $H5$ is 1 square: $\tfrac{1}{12}$. Tails and odd: $T1$, $T3$, $T5$: $\tfrac{3}{12} = \tfrac14$.
    2. $4 \times 4 = 16$. Matches: (1, 1), (2, 2), (3, 3), (4, 4), so $\tfrac{4}{16} = \tfrac14$. Sum 5: (1, 4),
       (2, 3), (3, 2), (4, 1), so $\tfrac{4}{16} = \tfrac14$.
    3. A product is odd only when both numbers are odd: P is 1 or 3, Q is 1 or 3, which is $2 \times 2 = 4$ squares.
       So 8 of the 12 are even: $\tfrac{8}{12} = \tfrac23$.
    4. $3 \times 2 = 6$ squares. Pizza and juice: $\tfrac16$. Soup or milk: soup row (2) plus pizza-milk and
       salad-milk (2 more) is 4 squares, $\tfrac46 = \tfrac23$.
    5. The heads row (6 squares) plus $T1$ and $T2$ (2 more): $\tfrac{8}{12} = \tfrac23$.
    6. $4 \times 4 = 16$ squares. Both red: 2 red rows times 2 red columns, 4 squares, $\tfrac{4}{16} = \tfrac14$.
       Same colour: red-red 4, blue-blue 1, yellow-yellow 1, total 6: $\tfrac{6}{16} = \tfrac38$.
    7. A 5-by-5 table minus the 5 diagonal squares: $25 - 5 = 20$ outcomes (or $5 \times 4$). Mo and Lin in either
       order: 2 squares. $\tfrac{2}{20} = \tfrac{1}{10}$.
    8. $2 \times 2 \times 6 = 24$ outcomes. Only one is $(H, H, 6)$: $\tfrac{1}{24}$.

## Common mistake

**Adding instead of multiplying.** A coin and a die give $2 \times 6 = 12$ outcomes, not $2 + 6 = 8$. Each coin result
is paired with **every** die result.

**Counting an overlap twice for "or".** For "heads or a 6", the square $H6$ is in both groups. Shade the squares and
count each shaded square once.

## Where it leads

- Next: [Tree diagrams](02-tree-diagrams.md), which handle three or more stages, where tables run out of directions.
- [Level 4 page](index.md) · [Probability topic page](../index.md)
- Before this: the [two-dice table](../level-3/04-two-dice.md) in level 3.
- Counting pairs without drawing the table, $m \times n$: [Counting](../../counting/index.md).
- "Or" without double counting becomes the addition rule in [level 5](../level-5/index.md); "given" questions on
  tables are [level 6](../level-6/index.md).
