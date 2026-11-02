---
title: "Expected counts"
---

# Expected counts

*Probability · level 4, lesson 6 of 6*

## A question to start

You are going to roll a fair die **300 times** and count the sixes.

1. About how many sixes do you expect?
2. What is the chance you get **exactly** that many?

The first answer is easy: a sixth of 300 is 50. The second answer surprises nearly everyone. The chance of exactly 50
sixes is only about **6%**. Roughly 94 times out of 100, you will get some other number.

So what use is "50"? This lesson shows what an expected count means, and how far away from it the real count usually
lands.

## The idea

### The expected count

If an event has probability $p$, and you do the experiment $n$ times, then the **expected count** (the number of times
you expect the event to happen) is

$$\text{expected count} = n \times p$$

For the die: $300 \times \tfrac16 = 50$.

**Why multiply?** A probability is the fraction of the time something happens in the long run
([lesson 3](03-fraction-decimal-percent.md)). A sixth of the time, out of 300 tries, is a sixth **of** 300. And "of"
means multiply.

Here are more expected counts:

| Experiment | Tries $n$ | Event | $p$ | Expected count $n \times p$ |
| --- | --- | --- | --- | --- |
| coin | 80 | heads | $\tfrac12$ | 40 |
| two dice | 360 | total 7 | $\tfrac16$ | 60 |
| two dice | 360 | total 12 | $\tfrac{1}{36}$ | 10 |
| spinner | 50 | red | $0.3$ | 15 |
| 3 coins | 200 | exactly two heads | $\tfrac38$ | 75 |
| coin | 5 | heads | $\tfrac12$ | 2.5 |

The last row shows something important. In 5 flips you "expect" 2.5 heads, but you can never actually get 2.5 heads.
The expected count is not a promise about one run. It is the **average** you would get if you did the whole thing
(5 flips) over and over: sometimes 2, sometimes 3, sometimes other numbers, averaging out to 2.5.

### Exactly 50 is unlikely

Back to the 300 rolls. 50 is the single most likely number of sixes, but there are so many other possible numbers
(49, 51, 48, 52, and so on), each with only a slightly smaller chance, that the chance is shared out among them all.
No single number gets much. Exactly 50 has a chance of about 0.062, roughly 6%.

So a better question is not "will it be 50?" but "**how close to 50** will it usually be?"

### How far off? An experiment with 1000 runs

A computer did the 300-roll experiment **1000 times**, counting the sixes each time. Here is how the counts came out.
Each bar covers three counts (the bar labelled 50 counts the runs with 49, 50 or 51 sixes).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 225" role="img" aria-label="A bar chart of 1000 computer runs of 300 die rolls, counting the sixes in each run; the bars form a hump centred on 50, with almost all runs between about 35 and 65">
  <rect x="41" y="178.4" width="24" height="1.6" fill="#9cc9ea"/>
  <text x="53" y="195" font-size="10" text-anchor="middle" fill="currentColor">32</text>
  <rect x="67" y="173.0" width="24" height="7.0" fill="#9cc9ea"/>
  <text x="79" y="195" font-size="10" text-anchor="middle" fill="currentColor">35</text>
  <rect x="93" y="148.7" width="24" height="31.3" fill="#9cc9ea"/>
  <text x="105" y="195" font-size="10" text-anchor="middle" fill="currentColor">38</text>
  <rect x="119" y="122.1" width="24" height="57.9" fill="#7ccf9a"/>
  <text x="131" y="195" font-size="10" text-anchor="middle" fill="currentColor">41</text>
  <rect x="145" y="94.0" width="24" height="86.0" fill="#7ccf9a"/>
  <text x="157" y="195" font-size="10" text-anchor="middle" fill="currentColor">44</text>
  <rect x="171" y="61.1" width="24" height="118.9" fill="#7ccf9a"/>
  <text x="183" y="195" font-size="10" text-anchor="middle" fill="currentColor">47</text>
  <rect x="197" y="40.0" width="24" height="140.0" fill="#7ccf9a"/>
  <text x="209" y="195" font-size="10" text-anchor="middle" fill="currentColor">50</text>
  <rect x="223" y="48.6" width="24" height="131.4" fill="#7ccf9a"/>
  <text x="235" y="195" font-size="10" text-anchor="middle" fill="currentColor">53</text>
  <rect x="249" y="77.5" width="24" height="102.5" fill="#7ccf9a"/>
  <text x="261" y="195" font-size="10" text-anchor="middle" fill="currentColor">56</text>
  <rect x="275" y="113.5" width="24" height="66.5" fill="#7ccf9a"/>
  <text x="287" y="195" font-size="10" text-anchor="middle" fill="currentColor">59</text>
  <rect x="301" y="152.6" width="24" height="27.4" fill="#9cc9ea"/>
  <text x="313" y="195" font-size="10" text-anchor="middle" fill="currentColor">62</text>
  <rect x="327" y="171.4" width="24" height="8.6" fill="#9cc9ea"/>
  <text x="339" y="195" font-size="10" text-anchor="middle" fill="currentColor">65</text>
  <rect x="353" y="178.4" width="24" height="1.6" fill="#9cc9ea"/>
  <text x="365" y="195" font-size="10" text-anchor="middle" fill="currentColor">68</text>
  <rect x="379" y="178.4" width="24" height="1.6" fill="#9cc9ea"/>
  <text x="391" y="195" font-size="10" text-anchor="middle" fill="currentColor">71</text>
  <line x1="40" y1="180" x2="404" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <text x="222" y="213" font-size="11" text-anchor="middle" fill="currentColor">sixes in 300 rolls (1000 computer runs; each bar covers 3 counts)</text>
</svg>
</div>

What the picture shows:

- The counts pile up in a **hump** around 50, the expected count.
- The hump is fairly wide. The very first ten runs gave 38, 54, 57, 47, 57, 48, 59, 47, 50 and 61 sixes. Only one of
  those ten was exactly 50.
- **Nearly all runs were between 40 and 60** (the green bars): 899 of the 1000, about 90%.
- **Every run was between 31 and 70.** Being 20 away from 50 happened, but rarely.
- Exactly 50 happened in 61 of the 1000 runs, about 6%, just as predicted.

So "about 50" means, roughly, "almost always within about 10 or so of 50, and nearly never more than 20 away".

### More tries: bigger wobble, smaller fraction

What happens if you do many more tries? Here are exact chances for coin flips, worked out with the methods of
[level 7](../level-7/index.md):

| Flips | Expected heads | Usually between (about 96% of the time) | Wobble in the count | Wobble in the fraction |
| --- | --- | --- | --- | --- |
| 100 | 50 | 40 and 60 | about 10 | about $\tfrac{10}{100} = 0.1$ |
| 10 000 | 5000 | 4900 and 5100 | about 100 | about $\tfrac{100}{10\,000} = 0.01$ |

With 100 times as many flips:

- the **count** wobbles more, about 10 times as much (100 instead of 10);
- but the **fraction** of heads wobbles less, about a tenth as much (0.01 instead of 0.1).

This is the same thing you saw in [level 3](../level-3/05-experiment-theory.md): the gap between heads and tails can
grow, while the fraction settles down. Notice it is "100 times the tries, 10 times the wobble", not 100 times. That
pattern (the wobble grows like the **square root** of the number of tries, since $10 \times 10 = 100$) is explained
properly in levels 7 and 8.

### Using expected counts to spot something odd

Expected counts let you test whether something is fair. Compare what you **got** with what you **expected**, and ask
whether the difference is a normal wobble or something too big to be chance.

In [level 3](../level-3/06-equally-likely.md) a die rolled 600 times showed 137 sixes. Expected: $600 \times \tfrac16 = 100$. For 600 rolls of a fair die, the count of sixes is between 82 and 118 about 96% of the time, and 137 or more
happens only about 6 times in 100 000. So 137 is not a normal wobble. That die is very likely loaded.

## Worked examples

**1. Expected counts with two dice.** Two dice are rolled 180 times. How many times do you expect a total of 8? A
double?

- $P(8) = \tfrac{5}{36}$, so $180 \times \tfrac{5}{36} = \tfrac{900}{36} = 25$.
- $P(\text{double}) = \tfrac{6}{36} = \tfrac16$, so $180 \times \tfrac16 = 30$.

**2. From a percent.** A forecaster says "30% chance of rain" on 40 different days. About how many of them do you
expect to be rainy?

$40 \times 0.3 = 12$ days. Not exactly 12; something near 12.

**3. Working backwards.** In a game, the expected number of wins in 120 tries is 20. What is the chance of winning
one try?

$120 \times p = 20$, so $p = \tfrac{20}{120} = \tfrac16$.

**4. Is this result surprising?** A coin is flipped 100 times and lands heads 58 times. Is the coin unfair?

Expected: 50. The count is 8 away. For a fair coin, 100 flips are between 40 and 60 heads about 96% of the time. 58 is
inside that range, so it is a perfectly normal wobble. There is no good evidence that the coin is unfair.

Now suppose a coin lands heads 5800 times in 10 000 flips. That is the same fraction (0.58), but now it is 800 away
from 5000, when the usual wobble is about 100. That **is** strong evidence the coin is unfair. The same fraction can be
ordinary in a small experiment and very surprising in a big one.

**5. A cereal check.** In the 1000 cereal trials in [lesson 5](05-simulations.md), how many trials would you expect to
finish in exactly 4 boxes? The chance is $\tfrac{3}{32}$, so $1000 \times \tfrac{3}{32} = 93.75$, about 94. The
simulation got 95: a tiny wobble.

## Try it

1. A die is rolled 240 times. How many times do you expect (a) a 6; (b) an even number; (c) a number greater than 4?
2. A spinner lands on blue with probability 0.15. It is spun 200 times. How many blues do you expect?
3. Two dice are rolled 72 times. How many times do you expect a total of 7? Of 2?
4. A coin is flipped 7 times. What is the expected number of heads? Can you actually get that many?
5. A bag has 2 red and 3 blue marbles. A marble is drawn and put back, 50 times. How many reds do you expect?
6. Two classes each flip a coin many times. Class A: 100 flips, 61 heads (61%). Class B: 10 000 flips, 5150 heads
   (51.5%). Which result is more surprising for a fair coin? Explain.
7. A die is rolled 600 times and shows 112 sixes. Is that evidence the die is loaded?
8. In a game you roll two dice and win if the total is 11 or 12. You play 108 times. How many wins do you expect?

??? note "Answers"
    1. (a) $240 \times \tfrac16 = 40$. (b) $240 \times \tfrac12 = 120$. (c) $\{5, 6\}$ is $\tfrac13$, so
       $240 \times \tfrac13 = 80$.
    2. $200 \times 0.15 = 30$.
    3. Total 7: $72 \times \tfrac16 = 12$. Total 2: $72 \times \tfrac{1}{36} = 2$.
    4. $7 \times \tfrac12 = 3.5$. No: you can get 3 or 4 heads, never 3.5. The expected count is a long-run average,
       not a possible result.
    5. $P(\text{red}) = \tfrac25$, so $50 \times \tfrac25 = 20$.
    6. Class A is 11 above the expected 50, a little more than the usual wobble of about 10: somewhat surprising
       (61 or more heads happens about 2 times in 100). Class B is 150 above the expected 5000, when the usual wobble
       is about 100: **more surprising** (5150 or more happens only about 1 time in 700). Class B's fraction, 51.5%,
       is much closer to 50%, but with 10 000 flips even a small difference in the fraction is a big difference in
       the count.
    7. Expected 100. 112 is 12 away, and for a fair die the count is between 82 and 118 about 96% of the time. 112 is
       inside that range: **no** good evidence.
    8. $P(11 \text{ or } 12) = \tfrac{2 + 1}{36} = \tfrac{3}{36} = \tfrac{1}{12}$. Expected wins: $108 \times \tfrac{1}{12} = 9$.

## Common mistake

**Expecting the expected count.** In 300 rolls you expect 50 sixes, but exactly 50 happens only about 6% of the time.
The expected count is the centre of where results land, not a forecast of one result.

**Judging by the fraction alone.** 58% heads is ordinary in 100 flips and astonishing in 10 000 flips. How surprising a
result is depends on how big the wobble usually is, and that depends on the number of tries.

## Where it leads

- Back: [Simulations](05-simulations.md) · This is the last lesson of level 4.
- [Level 4 page](index.md) · [Probability topic page](../index.md)
- Next level: [Level 5: probability rules](../level-5/index.md), for "or", "at least one" and trees without putting
  back.
- The expected count $n \times p$ becomes the mean of the binomial distribution, and the "wobble" becomes the standard
  deviation, in [level 7](../level-7/index.md). The hump shape becomes the normal curve in [level 8](../level-8/index.md).
- Is a difference just chance? Deciding that from real data is a big part of [Statistics](../../statistics/index.md).
