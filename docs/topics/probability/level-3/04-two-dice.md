---
title: "Two dice: 36 outcomes"
---

# Two dice: 36 outcomes

*Probability · level 3, lesson 4 of 6*

## A question to start

Roll two dice. Which of these is more likely?

- **a double** (both dice show the same number), or
- **a total of 7**?

Most people pick one of them quickly. Some say doubles are rare, so 7 must win. Others say 7 is just one total out of
eleven, so it cannot be very likely.

In fact they are **exactly equally likely**. In this lesson you will build the table that shows why, and use it to
find the chance of every total from 2 to 12.

## The idea

### Why there are 36 outcomes

When you roll two dice, the totals go from 2 (1 and 1) to 12 (6 and 6). That is 11 totals. It is very tempting to say
"11 outcomes, so each has a chance of $\tfrac{1}{11}$". In level 2's dice race you saw that this is not true: 7 wins
far more often than 2 or 12. Now we can see exactly why.

As with the two coins in [lesson 1](01-outcomes-events.md), imagine one die is **orange** and the other is **blue**.
An outcome is a **pair**: what the orange die shows and what the blue die shows. "Orange 3, blue 4" is a different
outcome from "orange 4, blue 3", even though both give a total of 7.

How many pairs are there? The orange die can show 6 numbers. For **each** of those, the blue die can show 6 numbers.
So there are 6 rows of 6:

$$6 \times 6 = 36 \text{ outcomes}$$

### Why the 36 are equally likely

Each single die is fair, and the two dice do not affect each other. Here is a picture-reason that every pair is
equally likely.

Roll the two dice 3600 times. The orange die is fair, so it shows a 1 about 600 times (one time in six). In those 600
rolls the blue die does not care what the orange die did, so it shows each of its 6 faces about 100 times. So "orange
1, blue 1" happens about 100 times, "orange 1, blue 2" about 100 times, and so on. The same is true for every row. Each
of the 36 pairs gets about 100 of the 3600 rolls: one time in 36.

So now we may use the fraction rule from [lesson 2](02-probability-fraction.md), as long as we count **pairs**.

### The table of totals

Put the orange die down the side and the blue die along the top. In each square, write the total.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 290" role="img" aria-label="A 6 by 6 table: orange die down the side, blue die across the top, each cell holding the sum; the six cells with sum 7 run along a green diagonal">
  <text x="180" y="18" font-size="12" text-anchor="middle" fill="currentColor">blue die</text>
  <text x="18" y="160" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 18 160)">orange die</text>
  <text x="80" y="34" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="120" y="34" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="160" y="34" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="200" y="34" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="240" y="34" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">5</text>
  <text x="280" y="34" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">6</text>
  <text x="48" y="65" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="48" y="105" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">2</text>
  <text x="48" y="145" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="48" y="185" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">4</text>
  <text x="48" y="225" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">5</text>
  <text x="48" y="265" font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">6</text>
  <rect x="60" y="40" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="65" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <rect x="100" y="40" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="65" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <rect x="140" y="40" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="65" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <rect x="180" y="40" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="65" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="220" y="40" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="240" y="65" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <rect x="260" y="40" width="40" height="40" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="280" y="65" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="60" y="80" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="105" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <rect x="100" y="80" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="105" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <rect x="140" y="80" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="105" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="180" y="80" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="105" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <rect x="220" y="80" width="40" height="40" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="240" y="105" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="260" y="80" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280" y="105" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <rect x="60" y="120" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="145" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <rect x="100" y="120" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="145" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="140" y="120" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="145" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <rect x="180" y="120" width="40" height="40" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="145" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="220" y="120" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="240" y="145" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <rect x="260" y="120" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280" y="145" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <rect x="60" y="160" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="185" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="100" y="160" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="185" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <rect x="140" y="160" width="40" height="40" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="185" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="180" y="160" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="185" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <rect x="220" y="160" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="240" y="185" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <rect x="260" y="160" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280" y="185" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <rect x="60" y="200" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="225" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <rect x="100" y="200" width="40" height="40" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="225" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="140" y="200" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="225" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <rect x="180" y="200" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="225" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <rect x="220" y="200" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="240" y="225" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <rect x="260" y="200" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280" y="225" font-size="13" text-anchor="middle" fill="currentColor">11</text>
  <rect x="60" y="240" width="40" height="40" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="265" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="100" y="240" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="265" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <rect x="140" y="240" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="265" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <rect x="180" y="240" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="265" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <rect x="220" y="240" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="240" y="265" font-size="13" text-anchor="middle" fill="currentColor">11</text>
  <rect x="260" y="240" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280" y="265" font-size="13" text-anchor="middle" fill="currentColor">12</text>
</svg>
</div>

Look at the green squares. The total 7 appears **6 times**, along a diagonal. So

$$P(\text{total } 7) = \frac{6}{36} = \frac16$$

The doubles run along the other diagonal, from top left (1 and 1) to bottom right (6 and 6). That is also 6 squares,
so $P(\text{double}) = \tfrac{6}{36} = \tfrac16$. Equal, as promised.

### Why 7 has the most ways

There is a neat reason why 7 wins. Pick **any** number for the orange die. Is there a blue number that makes 7?

- orange 1 needs blue 6; orange 2 needs blue 5; orange 3 needs blue 4;
- orange 4 needs blue 3; orange 5 needs blue 2; orange 6 needs blue 1.

Every orange number has a partner, and the partner is always a real face (from 1 to 6). So 7 can be made in every
row: 6 ways. No total can do better, because each row of the table can hold a given total at most once.

Now try 8. Orange 1 would need blue 7, and there is no 7. So the first row has no 8, and 8 only gets 5 ways. Try 12:
only orange 6 works (with blue 6), 1 way. The further a total is from 7, the more rows "fall off the edge" of the die.

### The dice-sum mountain

Count the squares for each total and stack them up. Each block is one of the 36 pairs.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 395 255" role="img" aria-label="A block chart of the number of ways to get each sum of two dice: 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 blocks for the sums 2 to 12, with the tallest column of 6 at sum 7">
  <rect x="22" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="36" y="228" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <rect x="54" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="54" y="154" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="68" y="228" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <rect x="86" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="86" y="154" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="86" y="126" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="100" y="228" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <rect x="118" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="118" y="154" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="118" y="126" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="118" y="98" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="132" y="228" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="150" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="150" y="154" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="150" y="126" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="150" y="98" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="150" y="70" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="164" y="228" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <rect x="182" y="182" width="28" height="26" rx="3" fill="#7ccf9a"/>
  <rect x="182" y="154" width="28" height="26" rx="3" fill="#7ccf9a"/>
  <rect x="182" y="126" width="28" height="26" rx="3" fill="#7ccf9a"/>
  <rect x="182" y="98" width="28" height="26" rx="3" fill="#7ccf9a"/>
  <rect x="182" y="70" width="28" height="26" rx="3" fill="#7ccf9a"/>
  <rect x="182" y="42" width="28" height="26" rx="3" fill="#7ccf9a"/>
  <text x="196" y="228" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="214" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="214" y="154" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="214" y="126" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="214" y="98" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="214" y="70" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="228" y="228" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <rect x="246" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="246" y="154" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="246" y="126" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="246" y="98" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="260" y="228" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <rect x="278" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="278" y="154" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="278" y="126" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="292" y="228" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <rect x="310" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <rect x="310" y="154" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="324" y="228" font-size="13" text-anchor="middle" fill="currentColor">11</text>
  <rect x="342" y="182" width="28" height="26" rx="3" fill="#9cc9ea"/>
  <text x="356" y="228" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <line x1="18" y1="210" x2="374" y2="210" stroke="currentColor" stroke-width="1.5"/>
  <text x="196" y="248" font-size="12" text-anchor="middle" fill="currentColor">sum of the two dice (each block is one of the 36 ways)</text>
</svg>
</div>

| Total | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ways | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |
| Probability | $\tfrac{1}{36}$ | $\tfrac{2}{36}$ | $\tfrac{3}{36}$ | $\tfrac{4}{36}$ | $\tfrac{5}{36}$ | $\tfrac{6}{36}$ | $\tfrac{5}{36}$ | $\tfrac{4}{36}$ | $\tfrac{3}{36}$ | $\tfrac{2}{36}$ | $\tfrac{1}{36}$ |

Check: $1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1 = 36$. ✓ All the probabilities add to 1.

The mountain is **symmetric**: 6 and 8 have the same number of ways, so do 5 and 9, and 2 and 12. Why? Turn both
dice upside down. The opposite faces of a die always add to 7 (1 is opposite 6, 2 is opposite 5, 3 is opposite 4).
So a pair with total 5, like orange 1 and blue 4, turns into orange 6 and blue 3, total 9. Every way to make 5 turns
into a way to make 9, and back again. So they must have the same number of ways.

<figure class="play" data-play="dice" data-n="2"><span class="ai-tag">AI-created</span><figcaption><b>Check the table.</b> Roll two dice many times: each total turns up about as often as its share of the 36 squares (gold).</figcaption></figure>

## Worked examples

**1. A total of 8.** From the table, 8 appears 5 times: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2). Write pairs as
(orange, blue). So $P(8) = \tfrac{5}{36}$.

**2. A total of 10 or more.** Totals 10, 11 and 12 have $3 + 2 + 1 = 6$ ways.
$P(\text{10 or more}) = \tfrac{6}{36} = \tfrac16$.

**3. Not a 7.** Use the opposite rule from [lesson 3](03-not-happening.md):
$P(\text{not } 7) = 1 - \tfrac16 = \tfrac56$. Much faster than counting 30 squares.

**4. A prime total.** The totals that are prime are 2, 3, 5, 7 and 11. Their ways: $1 + 2 + 4 + 6 + 2 = 15$. So
$P(\text{prime}) = \tfrac{15}{36} = \tfrac{5}{12}$.

**5. A different table: the difference.** Instead of adding, take the bigger number minus the smaller (a double gives
0). Make a new 6-by-6 table and count:

| Difference | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Ways | 6 | 10 | 8 | 6 | 4 | 2 |

Check: $6 + 10 + 8 + 6 + 4 + 2 = 36$. ✓ The most likely difference is 1, with
$P(1) = \tfrac{10}{36} = \tfrac{5}{18}$. A table of 36 works for any rule you like, not just adding.

**6. At least one 6.** Which squares have a 6 on at least one die? The bottom row (6 squares) and the right-hand
column (6 squares), but the corner (6, 6) is in both, so there are $6 + 6 - 1 = 11$ squares. Or use the opposite:
"no 6" means both dice show 1 to 5, a 5-by-5 block of 25 squares, so $P(\text{at least one } 6) = 1 - \tfrac{25}{36} = \tfrac{11}{36}$. Both ways agree.

## Try it

1. Use the table to find $P(\text{total } 5)$ and $P(\text{total } 11)$.
2. Find $P(\text{total of 4 or less})$.
3. Find $P(\text{the total is odd})$. Can you explain the answer without counting?
4. Find $P(\text{total } 13)$ and $P(\text{total from 2 to 12})$.
5. Find $P(\text{both dice show an even number})$.
6. Make a table where each square holds the **product** (the two numbers multiplied). How many squares hold 12? What
   is $P(\text{product is } 12)$?
7. In a game, you win if the total is 2, 3, 11 or 12. Your friend wins if it is 7. Who is more likely to win?
8. Find $P(\text{the bigger of the two numbers is } 6)$. (For a double 6, the bigger number counts as 6.) Compare it
   with your answer in worked example 6.

??? note "Answers"
    1. Total 5: (1, 4), (2, 3), (3, 2), (4, 1), so $\tfrac{4}{36} = \tfrac19$. Total 11: (5, 6), (6, 5), so
       $\tfrac{2}{36} = \tfrac{1}{18}$.
    2. Totals 2, 3, 4 have $1 + 2 + 3 = 6$ ways: $\tfrac{6}{36} = \tfrac16$.
    3. Odd totals 3, 5, 7, 9, 11: $2 + 4 + 6 + 4 + 2 = 18$ ways, so $\tfrac{18}{36} = \tfrac12$. Without counting:
       whatever the orange die shows, exactly 3 of the 6 blue faces make the total odd (the odd ones if orange is
       even, the even ones if orange is odd). So half of every row is odd.
    4. 13 is impossible: $0$. Every total is from 2 to 12, so that event is certain: $1$.
    5. Orange even (3 ways) and blue even (3 ways): a 3-by-3 block of 9 squares. $\tfrac{9}{36} = \tfrac14$.
    6. Product 12: (2, 6), (3, 4), (4, 3), (6, 2). 4 squares, so $\tfrac{4}{36} = \tfrac19$.
    7. You: $1 + 2 + 2 + 1 = 6$ ways. Your friend: 6 ways. **Equally likely**, $\tfrac16$ each.
    8. The bigger number is 6 exactly when at least one die shows 6: the same 11 squares. $\tfrac{11}{36}$. It is the
       same event said in different words.

## Common mistake

**Counting totals instead of pairs.** "There are 11 totals, so each is $\tfrac{1}{11}$" is the most famous mistake
with two dice. The 11 totals are events, not equally likely outcomes. The 36 coloured pairs are the equally likely
outcomes.

**Counting (3, 4) and (4, 3) as one outcome.** They are two different squares in the table. Real dice that look the
same still land separately; colour them in your head.

## Where it leads

- Back: [The chance of not happening](03-not-happening.md) · Next:
  [Experimental and theoretical probability](05-experiment-theory.md), where you test the table by really rolling.
- [Level 3 page](index.md) · [Probability topic page](../index.md)
- Level 2's [dice sum race](../level-2/index.md) is explained by the mountain.
- Tables for **any** two things at once (a coin and a die, two spinners): [level 4](../level-4/01-compound-tables.md).
- Later the mountain becomes a **probability distribution** for the random variable "sum of two dice":
  [level 7](../level-7/index.md).
- Why $6 \times 6$: the multiplication principle in [Counting](../../counting/index.md).
