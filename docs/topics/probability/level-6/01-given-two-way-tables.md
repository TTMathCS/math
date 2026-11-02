---
title: "\"Given\": conditional probability"
---

# "Given": conditional probability

*Probability · level 6, lesson 1 of 6*

## A question to start

A friend takes a card at random from a full pack of 52 and peeks at it. Before they tell you anything, the chance it
is a heart is $\tfrac{13}{52} = \tfrac14$, and the chance it is a king is $\tfrac{4}{52} = \tfrac{1}{13}$.

Then your friend says: "It's red."

Now what is the chance it is a heart? And what is the chance it is a king?

The heart chance **doubles**, to $\tfrac12$. The king chance does **not change at all**: it is still $\tfrac{1}{13}$.
Information can change a probability, or leave it exactly as it was. This lesson shows how to work out the new
chance, and the next lesson shows what it means when the chance does not move.

## The idea

### Probability "given" some information

The **conditional probability** of $A$ given $B$ is the chance that $A$ happens **when we already know that $B$ has
happened**. It is written

$$P(A \mid B)$$

and read "the probability of $A$ given $B$". The upright line $\mid$ means "given". It is not a division sign.
"Conditional" means "depending on a condition": here the condition is $B$.

In the card question: $P(\text{heart} \mid \text{red}) = \tfrac12$ and $P(\text{king} \mid \text{red}) = \tfrac{1}{13}$.

### Knowing B shrinks the sample space

Here is the key idea. Once you know $B$ has happened, every outcome outside $B$ is ruled out. **$B$ becomes the new
sample space.** Inside that smaller world, you ask what fraction of it is also $A$.

With the card: knowing "red" leaves 26 possible cards, all still equally likely. Of those 26, 13 are hearts, so
$P(\text{heart} \mid \text{red}) = \tfrac{13}{26} = \tfrac12$. Of those 26, 2 are kings (hearts and diamonds), so
$P(\text{king} \mid \text{red}) = \tfrac{2}{26} = \tfrac{1}{13}$.

Here is a picture with two dice, a red one (across) and a blue one (down). Each cell shows the total. Suppose you are
told **the total is 8**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="A 6 by 6 grid of the 36 outcomes for two dice, each cell showing the total. The five cells with total 8 are coloured; one of them, 4 and 4, is a double and is coloured orange, the other four blue.">
  <text x="55" y="16" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="28" y="39" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="85" y="16" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="28" y="69" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="115" y="16" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="28" y="99" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="145" y="16" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="28" y="129" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="175" y="16" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="28" y="159" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="205" y="16" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <text x="28" y="189" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <rect x="40" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="55" y="39" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="40" y="50" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="55" y="69" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="40" y="80" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="55" y="99" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="40" y="110" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="55" y="129" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="40" y="140" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="55" y="159" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="40" y="170" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="55" y="189" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="70" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="85" y="39" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="70" y="50" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="85" y="69" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="70" y="80" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="85" y="99" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="70" y="110" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="85" y="129" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="70" y="140" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="85" y="159" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="70" y="170" width="30" height="30" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="85" y="189" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="100" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="115" y="39" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="100" y="50" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="115" y="69" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="100" y="80" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="115" y="99" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="100" y="110" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="115" y="129" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="100" y="140" width="30" height="30" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="115" y="159" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="100" y="170" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="115" y="189" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <rect x="130" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="39" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="130" y="50" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="69" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="130" y="80" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="99" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="130" y="110" width="30" height="30" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="129" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="130" y="140" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="159" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <rect x="130" y="170" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="189" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <rect x="160" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="39" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="160" y="50" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="69" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="160" y="80" width="30" height="30" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="99" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="160" y="110" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="129" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <rect x="160" y="140" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="159" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <rect x="160" y="170" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="189" font-size="11" text-anchor="middle" fill="currentColor">11</text>
  <rect x="190" y="20" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="205" y="39" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="190" y="50" width="30" height="30" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="205" y="69" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="190" y="80" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="205" y="99" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <rect x="190" y="110" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="205" y="129" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <rect x="190" y="140" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="205" y="159" font-size="11" text-anchor="middle" fill="currentColor">11</text>
  <rect x="190" y="170" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="205" y="189" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <g font-size="13" fill="currentColor">
    <text x="235" y="40">across: red die</text><text x="235" y="60">down: blue die</text>
    <rect x="235" y="90" width="14" height="14" fill="#9cc9ea"/><text x="256" y="102">total 8</text>
    <rect x="235" y="115" width="14" height="14" fill="#eea66f"/><text x="256" y="127">total 8 and a double</text>
    <text x="235" y="160">Given "total 8", only the</text><text x="235" y="178">5 coloured cells are left.</text>
  </g>
</svg>
</div>

Without the information, $P(\text{double}) = \tfrac{6}{36} = \tfrac16$. Given "total 8", only the 5 coloured cells are
possible, and they are still equally likely. One of them is a double. So

$$P(\text{double} \mid \text{total 8}) = \frac15.$$

### The formula

When outcomes are equally likely, the counting above says

$$P(A \mid B) = \frac{\text{number of outcomes in } A \text{ and } B}{\text{number of outcomes in } B}.$$

Divide the top and the bottom by the total number of outcomes $n$. That does not change the fraction, but it turns
each count into a probability:

$$P(A \mid B) = \frac{P(A \text{ and } B)}{P(B)}.$$

This formula is the **definition** of conditional probability, and it works even when outcomes are not equally
likely. Read it as "the share of $B$ that is also $A$". It only makes sense when $P(B) > 0$: you cannot be "given"
something impossible.

Check it on the dice: $P(\text{double and total 8}) = \tfrac{1}{36}$ and $P(\text{total 8}) = \tfrac{5}{36}$, so
$P(\text{double} \mid \text{total 8}) = \tfrac{1/36}{5/36} = \tfrac15$. ✓

### Two-way tables

A **two-way table** is the natural home of conditional probability. Here is a survey of 100 students:

| | Walks | Takes the bus | Total |
| --- | --- | --- | --- |
| **Grade 9** | 30 | 20 | 50 |
| **Grade 10** | 15 | 35 | 50 |
| **Total** | 45 | 55 | 100 |

Pick a student at random.

- $P(\text{bus}) = \tfrac{55}{100} = 0.55$. The whole table is the sample space.
- $P(\text{bus} \mid \text{grade 10})$: "given grade 10" means **look only at the grade 10 row**. 35 of those 50 take
  the bus: $\tfrac{35}{50} = 0.7$.
- $P(\text{grade 10} \mid \text{bus})$: "given bus" means **look only at the bus column**. 35 of those 55 are in
  grade 10: $\tfrac{35}{55} = \tfrac{7}{11} \approx 0.64$.

The rule for tables: **the "given" part tells you which row or column to stand in; its total goes on the bottom.**

### The order matters

$P(\text{bus} \mid \text{grade 10}) = 0.7$ but $P(\text{grade 10} \mid \text{bus}) \approx 0.64$. They share the same
top (the 35), but they divide by different groups. Swapping the two sides of the line changes the question.

An extreme example with cards: $P(\text{face card} \mid \text{king}) = 1$ (every king is a face card), but
$P(\text{king} \mid \text{face card}) = \tfrac{4}{12} = \tfrac13$. Mixing these two up is one of the most common and
most serious mistakes in probability, and [level 8](../level-8/index.md) shows how it can mislead even doctors and
courts.

### The general multiplication rule

Multiply both sides of the formula by $P(B)$:

$$P(A \text{ and } B) = P(B) \times P(A \mid B).$$

With the letters the other way round, $P(A \text{ and } B) = P(A) \times P(B \mid A)$. This is exactly what you did
on the trees of [level 5](../level-5/05-unequal-branch-trees.md): the number on a second-stage branch is a conditional
probability, "the chance of this, given what happened on the first branch", and you multiply along the path.

### Conditional probabilities are probabilities

Inside the new, smaller sample space, all the old rules still work. For example,

$$P(\text{not } A \mid B) = 1 - P(A \mid B).$$

From the table: $P(\text{walks} \mid \text{grade 10}) = 1 - 0.7 = 0.3$, which is $\tfrac{15}{50}$. ✓

## Worked examples

**1. One die.** A die is rolled. Find $P(6 \mid \text{even})$ and $P(\text{even} \mid \text{more than 3})$.

- Given even, the sample space is $\{2, 4, 6\}$. One of the three is a 6: $P(6 \mid \text{even}) = \tfrac13$.
- Given "more than 3", the sample space is $\{4, 5, 6\}$. Two are even: $P(\text{even} \mid \text{more than 3}) = \tfrac23$.

**2. Two dice, three questions.** Find (a) $P(\text{total 8} \mid \text{red die shows 3})$, (b)
$P(\text{total 8} \mid \text{double})$, (c) $P(\text{red die shows 3} \mid \text{total 8})$.

- (a) Given the red die is 3, there are 6 equally likely outcomes, (3,1) to (3,6). Only (3,5) totals 8: $\tfrac16$.
- (b) Given a double, there are 6 outcomes, (1,1) to (6,6). Only (4,4) totals 8: $\tfrac16$.
- (c) Given total 8, there are 5 outcomes. Only (3,5) has the red die 3: $\tfrac15$.

Compare (a) and (c): same two events, different "given", different answers.

**3. Using the formula with probabilities.** $P(A) = 0.5$, $P(B) = 0.4$ and $P(A \text{ and } B) = 0.1$. Find
$P(A \mid B)$ and $P(B \mid A)$.

- $P(A \mid B) = \tfrac{0.1}{0.4} = 0.25$.
- $P(B \mid A) = \tfrac{0.1}{0.5} = 0.2$.

**4. Two children.** A family has two children. Assume each is a boy (B) or girl (G) with chance $\tfrac12$,
independently, so BB, BG, GB, GG are equally likely. Given that **at least one** is a girl, find the chance both are
girls.

- "At least one girl" leaves three equally likely cases: BG, GB, GG.
- Only one is GG. So the answer is $\tfrac13$, not $\tfrac12$.

If instead you are told "the **older** child is a girl", the cases are GB and GG, and the answer is $\tfrac12$. The
exact wording of what you are given changes the sample space.

**5. Backwards on a tree.** In [level 5](../level-5/05-unequal-branch-trees.md), it rained with chance 0.3; the bus was
late with chance 0.4 on rainy days and 0.1 on dry days, so $P(\text{late}) = 0.19$ and
$P(\text{rain and late}) = 0.12$. Given the bus was late, find the chance it was raining.

$$P(\text{rain} \mid \text{late}) = \frac{P(\text{rain and late})}{P(\text{late})} = \frac{0.12}{0.19} \approx 0.63.$$

## Try it

1. A die is rolled. Find $P(\text{prime} \mid \text{odd})$. (The primes on a die are 2, 3, 5.)
2. A card is drawn from a full pack. Find $P(\text{heart} \mid \text{red})$, $P(\text{red} \mid \text{heart})$ and
   $P(\text{queen} \mid \text{face card})$.
3. Two dice are rolled and the total is 8. Find the chance that at least one die shows a 3.
4. In a survey of 120 students, 30 play chess. Of the chess players, 24 like maths. Of the other 90 students, 36 like
   maths. Make a two-way table. Then find $P(\text{likes maths})$, $P(\text{likes maths} \mid \text{chess})$ and
   $P(\text{chess} \mid \text{likes maths})$.
5. $P(A) = 0.6$, $P(B) = 0.3$ and $P(A \text{ and } B) = 0.12$. Find $P(A \mid B)$ and $P(B \mid A)$.
6. $P(B) = 0.25$ and $P(A \mid B) = 0.6$. Find $P(A \text{ and } B)$.
7. Three coins are tossed. Given that at least two show heads, find the chance that all three show heads.
8. Explain, with an example from question 4, why $P(A \mid B)$ and $P(B \mid A)$ are usually different.

??? note "Answers"
    1. Given odd: $\{1, 3, 5\}$. Primes among them: 3 and 5. $P = \dfrac23$.
    2. $P(\text{heart} \mid \text{red}) = \dfrac{13}{26} = \dfrac12$. $P(\text{red} \mid \text{heart}) = \dfrac{13}{13} = 1$.
       $P(\text{queen} \mid \text{face card}) = \dfrac{4}{12} = \dfrac13$.
    3. Total 8: (2,6), (3,5), (4,4), (5,3), (6,2). Two of the five contain a 3, so $\dfrac25$.
    4. Table: chess and maths 24, chess and not maths 6 (total 30); not chess and maths 36, not chess and not maths 54
       (total 90). Maths total $24 + 36 = 60$. $P(\text{likes maths}) = \dfrac{60}{120} = 0.5$.
       $P(\text{likes maths} \mid \text{chess}) = \dfrac{24}{30} = 0.8$. $P(\text{chess} \mid \text{likes maths}) = \dfrac{24}{60} = 0.4$.
    5. $P(A \mid B) = \dfrac{0.12}{0.3} = 0.4$. $P(B \mid A) = \dfrac{0.12}{0.6} = 0.2$.
    6. $P(A \text{ and } B) = 0.25 \times 0.6 = 0.15$.
    7. "At least two heads": HHT, HTH, THH, HHH, which are 4 equally likely cases. One is HHH, so $\dfrac14$.
    8. Both have the same top (the students who are in both groups, 24), but they divide by different groups:
       $P(\text{likes maths} \mid \text{chess})$ divides by the 30 chess players, and $P(\text{chess} \mid \text{likes maths})$
       divides by the 60 maths fans. Different bottoms give different answers (0.8 and 0.4).

## Common mistake

**Dividing by the wrong total.** In a table, the bottom of the fraction is the total of the **given** row or column,
never the grand total. $P(\text{bus} \mid \text{grade 10})$ is $\tfrac{35}{50}$, not $\tfrac{35}{100}$ (that is
$P(\text{bus and grade 10})$).

**Swapping the condition.** $P(A \mid B)$ is not $P(B \mid A)$. Say it in words before you calculate: "of the
students who take the bus, what fraction are in grade 10?" The words "of the ..." tell you the bottom.

## Where it leads

- Back: [Level 5: the gambler's fallacy](../level-5/06-gamblers-fallacy.md) · Next: [Independence, properly](02-independence-properly.md),
  which explains why the king chance in the opening question did not change.
- [Level 6 page](index.md) · [Probability topic page](../index.md)
- Turning $P(\text{positive test} \mid \text{disease})$ into $P(\text{disease} \mid \text{positive test})$ is Bayes'
  theorem, in [level 8](../level-8/index.md).
- Two-way tables of real survey data are a main tool of [Statistics](../../statistics/index.md).
