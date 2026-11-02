---
title: "Arranging some"
---

# Arranging some

*Counting and combinations · level 4, lesson 2 of 6*

## A question to start

Eight runners line up for a race final. Only the first three get medals: gold, silver and bronze. In how many
different ways can the medals be given out?

The full finishing order of all eight runners can be any of $8! = 40\,320$ orders. But the people handing out medals
do not care who came 4th or 8th. Many of those 40 320 orders give exactly the same medal winners.

The number of different medal results is **336**. In this lesson you will find it in two ways, one quick and one
clever, and the clever way explains the formula that every calculator uses.

## The idea

### Filling only some of the places

Treat the medals as three slots to fill, in order.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="A podium: gold in the middle on the tallest block with 8 choices, silver on the left with 7 choices, bronze on the right with 6 choices">
  <rect x="160" y="50" width="100" height="100" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="80" width="100" height="70" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="2"/>
  <rect x="260" y="105" width="100" height="45" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="2"/>
  <text x="210" y="80" font-size="15" text-anchor="middle" fill="currentColor">gold</text>
  <text x="210" y="105" font-size="13" text-anchor="middle" fill="currentColor">8 choices</text>
  <text x="110" y="108" font-size="15" text-anchor="middle" fill="currentColor">silver</text>
  <text x="110" y="132" font-size="13" text-anchor="middle" fill="currentColor">7 choices</text>
  <text x="310" y="124" font-size="15" text-anchor="middle" fill="currentColor">bronze</text>
  <text x="310" y="143" font-size="13" text-anchor="middle" fill="currentColor">6 choices</text>
  <text x="210" y="30" font-size="14" text-anchor="middle" fill="currentColor">8 × 7 × 6 = 336</text>
</svg>
</div>

- Gold: any of the 8 runners. **8** choices.
- Silver: any runner except the gold winner. **7** choices.
- Bronze: any runner except those two. **6** choices.

So there are $8 \times 7 \times 6 = 336$ medal results. We stop after three slots, because there are only three
medals.

An ordered choice of $r$ things from $n$ different things (no repeats) is called a **permutation of $r$ from $n$**,
or an **arrangement**. It is written ${}^{n}P_{r}$ (other books write $P(n, r)$ or ${}_{n}P_{r}$). So ${}^{8}P_{3} = 336$.

In general, start at $n$ and multiply $r$ numbers, going down by one each time:

$$^{n}P_{r} = n \times (n - 1) \times (n - 2) \times \cdots \times (n - r + 1).$$

Why does the last factor equal $n - r + 1$? The first factor is $n - 0$, the second $n - 1$, the third $n - 2$. The
$r$-th factor subtracts one less than its position, so it is $n - (r - 1) = n - r + 1$. For the medals:
$8 - 3 + 1 = 6$. ✓

### The clever way: finish the line and divide

Now the reason for the formula on calculators. Imagine the whole race result: all 8 runners in order. There are $8!$
of these. Every full result gives one medal result: just read off the first three.

How many full results give the **same** medal result? Fix the podium, say Ana gold, Ben silver, Cai bronze. The other
5 runners can finish 4th to 8th in **any** order, and that does not change the medals. They can be ordered in $5!$
ways. So each medal result appears exactly $5! = 120$ times among the $8!$ full results:

$$8! = (\text{number of medal results}) \times 5!.$$

Divide both sides by $5!$:

$$^{8}P_{3} = \frac{8!}{5!} = \frac{40\,320}{120} = 336.$$

The same idea works for any $n$ and $r$: fill all $n$ places, and then forget the order of the $n - r$ things that did
not get a place.

$$^{n}P_{r} = \frac{n!}{(n - r)!}$$

You can also see it by cancelling. The top is $8 \times 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1$, the
bottom is $5 \times 4 \times 3 \times 2 \times 1$. Everything from 5 down cancels, leaving $8 \times 7 \times 6$.

### Checking the edge cases

A good formula should give sensible answers at the extremes.

| Case | Formula | Answer | Does it make sense? |
| --- | --- | --- | --- |
| $r = 1$ | $\dfrac{n!}{(n-1)!}$ | $n$ | Choosing one thing for one place: $n$ ways. ✓ |
| $r = n$ | $\dfrac{n!}{0!}$ | $n!$ | Arranging all of them: $n!$. ✓ (This needs $0! = 1$.) |
| $r = 0$ | $\dfrac{n!}{n!}$ | 1 | Filling no places: one way, do nothing. ✓ |
| $r > n$ | | 0 | You cannot fill 9 places from 8 runners without repeats. |

Notice ${}^{5}P_{4} = 120 = {}^{5}P_{5}$. Once four of five things are placed, the fifth place has only one choice, so
adding it does not change the count.

### With repeats or without

Arrangements do not allow repeats: one runner cannot win two medals. When repeats **are** allowed (like the digits of a
PIN), each slot has all $n$ choices, giving $n^r$ instead.

| 4 slots from 10 symbols | Formula | Count |
| --- | --- | --- |
| repeats allowed | $10^4$ | 10 000 |
| no repeats | ${}^{10}P_{4} = 10 \times 9 \times 8 \times 7$ | 5040 |

## Worked examples

**1. Officers of a club.** A club of 12 members elects a president, a vice-president and a secretary, three different
people. How many ways?

The jobs are different, so order matters: ${}^{12}P_{3} = 12 \times 11 \times 10 = 1320$.

**2. Four-letter "words".** How many 4-letter strings with no repeated letter can be made from the 26 letters?

${}^{26}P_{4} = 26 \times 25 \times 24 \times 23 = 358\,800$.

**3. Working backwards.** For some $n$, ${}^{n}P_{2} = 56$. Find $n$.

${}^{n}P_{2} = n(n - 1)$, two numbers in a row multiplied. Which two consecutive numbers multiply to 56? $8 \times 7$.
So $n = 8$. (Check: 8 runners, gold and silver: $8 \times 7 = 56$. ✓)

**4. Chairs on a stage.** Six children want to sit in 3 chairs labelled 1, 2, 3 on a stage. In how many ways can the
chairs be filled?

The chairs are labelled, so the order matters: ${}^{6}P_{3} = 6 \times 5 \times 4 = 120$. Using the formula:
$\dfrac{6!}{3!} = \dfrac{720}{6} = 120$. ✓

**5. A medal for Ana.** In the 8-runner race, in how many medal results does Ana get a medal?

Count the complement (level 3, lesson 3). Results where Ana gets **no** medal: the three medals go to the other 7,
${}^{7}P_{3} = 210$. So Ana gets a medal in $336 - 210 = 126$ results.

Check another way: choose Ana's medal (3 ways), then fill the other two medals from the other 7 runners in order
($7 \times 6 = 42$ ways): $3 \times 42 = 126$. ✓

## Try it

1. Work out ${}^{7}P_{3}$ and ${}^{9}P_{4}$.
2. In a league of 12 teams, how many different (1st, 2nd) results are possible?
3. For which $n$ is ${}^{n}P_{2} = 90$?
4. Ten children audition for 5 different parts in a play, one part each. In how many ways can the parts be given out?
5. How many 3-digit numbers have three different digits, all from 1 to 9?
6. Use the "finish the line" idea to explain why ${}^{6}P_{2} = \dfrac{6!}{4!}$.
7. A PIN has 4 digits. How many PINs have **some** repeated digit? (Use the table above.)
8. Explain why ${}^{n}P_{n-1} = {}^{n}P_{n}$ for every $n$.

??? note "Answers"
    1. ${}^{7}P_{3} = 7 \times 6 \times 5 = 210$. ${}^{9}P_{4} = 9 \times 8 \times 7 \times 6 = 3024$.
    2. ${}^{12}P_{2} = 12 \times 11 = 132$.
    3. $n(n - 1) = 90 = 10 \times 9$, so $n = 10$.
    4. ${}^{10}P_{5} = 10 \times 9 \times 8 \times 7 \times 6 = 30\,240$.
    5. ${}^{9}P_{3} = 9 \times 8 \times 7 = 504$.
    6. Line up all 6 in $6!$ ways. Each choice of the first two (in order) appears once for each order of the other
       4, which is $4!$ times. So ${}^{6}P_{2} \times 4! = 6!$, giving ${}^{6}P_{2} = \dfrac{720}{24} = 30 = 6 \times 5$.
    7. All PINs: 10 000. No repeats: 5040. Some repeat: $10\,000 - 5040 = 4960$.
    8. When $n - 1$ of the $n$ things are placed, exactly one is left, so there is only one way to fill the last
       place. The formulas agree: $\dfrac{n!}{1!} = \dfrac{n!}{0!} = n!$.

## Common mistake

**Dividing by the wrong factorial.** ${}^{8}P_{3}$ is $\dfrac{8!}{5!}$, not $\dfrac{8!}{3!}$. You divide by the
factorial of the things that are **left out** ($8 - 3 = 5$ runners without medals), because their order is the part
you forget. Quick check: the answer must be $8 \times 7 \times 6$, three factors starting at 8.

**Using arrangements when order does not matter.** If the three fastest runners just go through to the next round
(no gold, silver or bronze), then Ana-Ben-Cai and Cai-Ben-Ana are the **same** result. That is a choice, not an
arrangement, and it is counted differently: see level 5.

## Where it leads

- Back: [Factorials](01-factorials.md) · Next: [Arranging with identical things](03-identical-things.md)
- [Level 4 page](index.md) · [Counting topic page](../index.md)
- When order does not matter, divide again by $r!$:
  [Level 5, choosing, not arranging](../level-5/01-choosing-not-arranging.md).
- The chance that a given runner wins a medal, 126 out of 336, is a question for
  [Probability](../../probability/index.md).
