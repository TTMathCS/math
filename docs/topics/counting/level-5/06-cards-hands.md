---
title: "Cards and hands"
---

# Cards and hands

*Counting and combinations · level 5, lesson 6 of 6*

## A question to start

Deal 5 cards from a shuffled pack of 52. How many different hands could you get?

The answer is **2 598 960**, about two and a half million. Card players know that "four of a kind" (four cards of the
same rank, like four queens) beats a "full house" (three of one rank and two of another). That is because four of a
kind is **rarer**: there are only 624 such hands, against 3744 full houses. In this lesson you will count both, and
then every other kind of hand, and see all the counts add up to exactly 2 598 960.

## The idea

### The pack

An ordinary pack has **52** cards. Each card has a **rank** and a **suit**:

- 13 ranks: A (ace), 2, 3, 4, 5, 6, 7, 8, 9, 10, J (jack), Q (queen), K (king);
- 4 suits: clubs, diamonds, hearts, spades.

Every rank comes once in every suit, so $13 \times 4 = 52$ cards. It helps to picture the pack as a grid:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 175" role="img" aria-label="A deck of 52 cards drawn as a grid of 4 suits by 13 ranks. A full house is highlighted: three kings and two sevens">
  <text x="102" y="16" font-size="11" text-anchor="middle" fill="currentColor">A</text>
  <text x="128" y="16" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="154" y="16" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="180" y="16" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="206" y="16" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="232" y="16" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="258" y="16" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <text x="284" y="16" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <text x="310" y="16" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <text x="336" y="16" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <text x="362" y="16" font-size="11" text-anchor="middle" fill="currentColor">J</text>
  <text x="388" y="16" font-size="11" text-anchor="middle" fill="currentColor">Q</text>
  <text x="414" y="16" font-size="11" text-anchor="middle" fill="currentColor">K</text>
  <text x="82" y="41" font-size="11" text-anchor="end" fill="currentColor">clubs</text>
  <rect x="90" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="116" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="142" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="168" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="194" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="246" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="272" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="298" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="324" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="350" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="376" y="24" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="402" y="24" width="22" height="26" rx="3" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="71" font-size="11" text-anchor="end" fill="currentColor">diamonds</text>
  <rect x="90" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="116" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="142" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="168" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="194" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="246" y="54" width="22" height="26" rx="3" fill="#9cc9ea" fill-opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="272" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="298" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="324" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="350" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="376" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="402" y="54" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="101" font-size="11" text-anchor="end" fill="currentColor">hearts</text>
  <rect x="90" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="116" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="142" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="168" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="194" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="246" y="84" width="22" height="26" rx="3" fill="#9cc9ea" fill-opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="272" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="298" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="324" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="350" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="376" y="84" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="402" y="84" width="22" height="26" rx="3" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <text x="82" y="131" font-size="11" text-anchor="end" fill="currentColor">spades</text>
  <rect x="90" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="116" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="142" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="168" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="194" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="246" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="272" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="298" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="324" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="350" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="376" y="114" width="22" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="402" y="114" width="22" height="26" rx="3" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="160" font-size="12" text-anchor="middle" fill="currentColor">a full house: three kings (orange) and two sevens (blue)</text>
</svg>
</div>

### A hand is a combination

A **hand** is the set of cards you hold. Being dealt the king of hearts first and the 7 of clubs second gives the same
hand as the other way round. So a 5-card hand is a combination:

$$\binom{52}{5} = \frac{52 \times 51 \times 50 \times 49 \times 48}{5 \times 4 \times 3 \times 2 \times 1} = \frac{311\,875\,200}{120} = 2\,598\,960.$$

The top, $311\,875\,200$, counts the ways to deal 5 cards **in order**. Each hand can be dealt in $5! = 120$ orders,
which is why we divide.

### The method: ranks first, then suits

Counting a type of hand directly from 52 cards is confusing. A clear method is to make a list of decisions:

1. Decide which **ranks** appear and what role each one plays (the rank of the three, the rank of the pair, and so on).
2. For each rank, decide which **suits** it comes in.
3. Multiply the decisions together.

The one thing to be careful about is in step 1. If two ranks play **different roles** (like "the three" and "the
pair" in a full house), then choosing kings-for-the-three and sevens-for-the-pair is different from
sevens-for-the-three and kings-for-the-pair, so pick them **one after the other**, in order. If two ranks play the
**same role** (like the two pairs in "two pair"), then swapping them gives the same hand, so use a **combination**.

### Four of a kind

Four cards of one rank, plus one other card.

1. The rank of the four: 13 ways.
2. All four suits of that rank are used: $\dbinom{4}{4} = 1$ way.
3. The fifth card can be any of the other $52 - 4 = 48$ cards.

Total: $13 \times 1 \times 48 = 624$.

### Full house

Three cards of one rank and two of another, like K K K 7 7 in the picture.

1. The rank of the three: 13 ways. The rank of the pair: 12 ways (it must be different). These roles are different,
   so it is $13 \times 12$, not $\dbinom{13}{2}$.
2. Suits for the three: $\dbinom{4}{3} = 4$. Suits for the pair: $\dbinom{4}{2} = 6$.

Total: $13 \times 12 \times 4 \times 6 = 3744$.

So there are 6 times as many full houses as hands with four of a kind, which is why four of a kind ranks higher.

### All the hands

Using the same method for every type of hand gives this table. A **straight** is five ranks in a row (the ace can be
low, A 2 3 4 5, or high, 10 J Q K A, which gives 10 possible runs). A **flush** is five cards of one suit. A
**straight flush** is both. Each line counts only hands that are not in a line above it.

| Hand | How to count it | Number |
| --- | --- | --- |
| straight flush | 10 runs × 4 suits | 40 |
| four of a kind | $13 \times 48$ | 624 |
| full house | $13 \times 12 \times \binom{4}{3} \times \binom{4}{2}$ | 3 744 |
| flush (not straight) | $4 \times \binom{13}{5} - 40$ | 5 108 |
| straight (not flush) | $10 \times 4^5 - 40$ | 10 200 |
| three of a kind | $13 \times \binom{4}{3} \times \binom{12}{2} \times 4^2$ | 54 912 |
| two pair | $\binom{13}{2} \times \binom{4}{2}^2 \times 44$ | 123 552 |
| one pair | $13 \times \binom{4}{2} \times \binom{12}{3} \times 4^3$ | 1 098 240 |
| nothing | everything else | 1 302 540 |
| **total** | $\binom{52}{5}$ | **2 598 960** |

The last line is a strong check. The "nothing" hands can also be counted directly: 5 different ranks that are not a
run, $\dbinom{13}{5} - 10 = 1277$ ways, times suits that are not all the same, $4^5 - 4 = 1020$ ways, giving
$1277 \times 1020 = 1\,302\,540$. ✓ Everything fits together.

### From counts to chances

When every hand is equally likely, the chance of a type of hand is its count divided by the total. A full house comes
up about once in every $2\,598\,960 \div 3744 \approx 694$ hands; four of a kind about once in every 4165 hands; a
pair about 42 times in every 100 hands. This is where counting hands over to
[Probability](../../probability/index.md).

## Worked examples

**1. Three of a kind.** Three cards of one rank and two other cards of two **different** other ranks (otherwise it
would be a full house or four of a kind).

- Rank of the three: 13. Its suits: $\dbinom{4}{3} = 4$.
- The two other ranks play the same role (two odd cards), so choose them together: $\dbinom{12}{2} = 66$.
- A suit for each of those two cards: $4 \times 4 = 16$.
- Total: $13 \times 4 \times 66 \times 16 = 54\,912$.

**2. Two pair.** Like Q Q 5 5 9.

- The two ranks for the pairs play the same role (swapping them gives the same hand): $\dbinom{13}{2} = 78$.
- Suits for each pair: $\dbinom{4}{2} \times \dbinom{4}{2} = 36$.
- The fifth card must not match either pair's rank: $52 - 8 = 44$ cards.
- Total: $78 \times 36 \times 44 = 123\,552$.
- If you had used $13 \times 12$ for the ranks, you would get twice this: Q Q 5 5 9 would be counted as
  "queens then fives" and again as "fives then queens".

**3. Exactly two aces.** How many 5-card hands contain exactly two aces?

- Choose 2 of the 4 aces: $\dbinom{4}{2} = 6$.
- Choose the other 3 cards from the 48 non-aces: $\dbinom{48}{3} = \dfrac{48 \times 47 \times 46}{6} = 17\,296$.
- Total: $6 \times 17\,296 = 103\,776$.

**4. At least one ace.** Count the opposite: hands with no ace at all come from the 48 non-aces, $\dbinom{48}{5} = 1\,712\,304$.
So hands with at least one ace number $2\,598\,960 - 1\,712\,304 = 886\,656$.

## Try it

1. How many 2-card hands can be dealt from a 52-card pack? How many of them are a pair of aces?
2. How many 5-card hands are all hearts?
3. How many 5-card hands are a flush of any suit, counting straight flushes too?
4. Count the one-pair hands yourself and check the table: one rank appears twice, and three other different ranks
   appear once each.
5. How many 5-card hands contain no picture cards (J, Q or K)?
6. How many 5-card hands contain all four suits?
7. In the game of bridge each player gets 13 cards. How many different bridge hands are there? (Use a calculator;
   the answer has 12 digits.)
8. A student counts full houses as $\dbinom{13}{2} \times \dbinom{4}{3} \times \dbinom{4}{2}$. Explain the mistake and
   by what factor the answer is too small.

??? note "Answers"
    1. $\dbinom{52}{2} = \dfrac{52 \times 51}{2} = 1326$. Pairs of aces: $\dbinom{4}{2} = 6$.
    2. Choose 5 of the 13 hearts: $\dbinom{13}{5} = \dfrac{13 \times 12 \times 11 \times 10 \times 9}{120} = 1287$.
    3. $4 \times 1287 = 5148$. (Take away the 40 straight flushes to get the 5108 in the table.)
    4. Rank of the pair 13, its suits $\dbinom{4}{2} = 6$; the three single ranks $\dbinom{12}{3} = 220$ (same role,
       so a combination); a suit for each, $4^3 = 64$. Total $13 \times 6 \times 220 \times 64 = 1\,098\,240$. ✓
    5. There are 12 picture cards, so 40 others: $\dbinom{40}{5} = \dfrac{40 \times 39 \times 38 \times 37 \times 36}{120} = 658\,008$.
    6. Five cards in four suits: one suit has 2 cards, the others 1 each. Choose the doubled suit (4), its two cards
       $\dbinom{13}{2} = 78$, and one card from each other suit, $13^3 = 2197$. Total
       $4 \times 78 \times 2197 = 685\,464$.
    7. $\dbinom{52}{13} = 635\,013\,559\,600$, about 635 thousand million.
    8. In a full house the two ranks play **different** roles (three of one, two of the other), so KKK77 and 777KK are
       different hands. $\dbinom{13}{2}$ treats them as the same. The answer $78 \times 4 \times 6 = 1872$ is too
       small by a factor of 2; the right count is $13 \times 12 \times 4 \times 6 = 3744$.

## Common mistake

**Using a combination for ranks that play different roles (or a permutation for ranks that play the same role).**
Ask the swap question for the **ranks**: if I swap the rank of the three with the rank of the pair, do I get a
different hand? Yes (KKK77 is not 777KK), so choose them in order. If I swap the ranks of the two pairs in two pair, do
I get a different hand? No, so choose them together.

**Forgetting to keep the extra card from matching.** In "four of a kind" the fifth card is any of 48, but in "two
pair" the fifth card must avoid **both** pair ranks (44 cards), and in "three of a kind" the two odd cards must be of
different ranks from each other and from the three. Otherwise you count full houses as three of a kind.

## Where it leads

- Back: [Committees with conditions](05-committees-conditions.md) · Next level:
  [Level 6: counting with overlaps and stars](../level-6/index.md)
- [Level 5 page](index.md) · [Counting topic page](../index.md)
- Shuffling a whole pack, $52!$ orders, is in [Level 4](../level-4/index.md).
- Turning these counts into chances, and lotteries, is in [Level 6, counting outcomes for
  probability](../level-6/06-counting-for-probability.md) and in [Probability](../../probability/index.md).
- The "nothing" hands were counted by taking away the hands we did not want; with several overlapping conditions you
  need [inclusion-exclusion](../level-6/01-inclusion-exclusion.md).
