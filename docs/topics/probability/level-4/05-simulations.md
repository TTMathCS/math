---
title: "Simulations"
---

# Simulations

*Probability · level 4, lesson 5 of 6*

## A question to start

A cereal company puts one toy in every box. There are **4 different toys** to collect, and each box is equally likely
to hold any of the four. You want the whole set.

How many boxes do you think you will need to buy?

At least 4, of course, if you are lucky and every box is different. But how lucky is that? And how many boxes does it
take **on average**? Make a guess now. Most people guess about 5 or 6.

This problem is hard to work out with the tools from this level: there is no limit on how many boxes it might take,
so the tree never ends. But there is another way to find out, and it uses nothing more than a die and some patience.

## The idea

### What a simulation is

A **simulation** is a pretend version of a chance process. Instead of buying hundreds of cereal boxes, you use
something cheap and quick, a die, coins, a spinner, or a computer, whose chances **match** the real thing. Then you
run the pretend version many times and count what happens.

The idea comes straight from [level 3](../level-3/05-experiment-theory.md): if you repeat an experiment many times, the
relative frequency of an event gets close to its probability. A simulation is an experiment you design yourself, so
you can repeat it cheaply.

### Four steps

**1. Make a model.** Match each real outcome with an outcome of your simulator that has **the same probability**.

For the cereal: each box holds toy 1, 2, 3 or 4, each with probability $\tfrac14$. A die has 6 faces, not 4. So:

- roll 1, 2, 3 or 4: that box holds that toy;
- roll 5 or 6: ignore it and roll again.

Why is that fair? Among the rolls that count, faces 1 to 4 are still equally likely, so each is $\tfrac14$. (A
spinner with 4 equal parts would also work. So would **two coins**: $HH, HT, TH, TT$ are 4 equally likely outcomes, as
you saw in [lesson 2](02-tree-diagrams.md).)

**2. Say what one trial is.** One **trial** is one complete run of the pretend story. Here: keep "opening boxes" until
all four toys have turned up, then write down how many boxes it took.

**3. Run many trials.** Ten is a start, a hundred is better, a thousand is better still.

**4. Use the results.** The fraction of trials where something happened estimates its probability. The average of the
results estimates the average in real life.

### Running a trial by hand

Here are three real trials, done with a die. Rolls of 5 and 6 are shown but not counted.

- Trial 1: rolls 4, 5, 4, 4, 5, 5, 2, 2, 5, 4, 6, 5, 2, 1, 4, 3. Ignoring the 5s and 6s, the boxes are
  4, 4, 4, 2, 2, 4, 2, 1, 4, 3. Toy 3 arrives last, in box **10**.
- Trial 2: the boxes were 2, 1, 1, 4, 4, 2, 1, 1, 1, 1, 2, 2, 1, 4, 3. Toy 3 took until box **15**.
- Trial 3: the boxes were 4, 2, 2, 3, 4, 1. All four by box **6**.

Three trials already show the main surprise: the **last** toy is the slow one. Once you have three toys, each new box
has only a 1 in 4 chance of being the one you need.

### A thousand trials

A computer can do a thousand trials in a blink. A computer program uses **random numbers** (numbers picked by chance,
each equally likely) the same way we used the die. Here are the results of 1000 computer trials.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 225" role="img" aria-label="A bar chart of 1000 computer simulations of opening cereal boxes until all four prizes are found; the bars start at 4 boxes, peak at 5, and trail off in a long tail past 20 boxes">
  <rect x="41" y="99.4" width="16" height="80.6" fill="#7ccf9a"/>
  <text x="49" y="195" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <rect x="59" y="40.0" width="16" height="140.0" fill="#7ccf9a"/>
  <rect x="77" y="67.2" width="16" height="112.8" fill="#7ccf9a"/>
  <text x="85" y="195" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <rect x="95" y="69.7" width="16" height="110.3" fill="#7ccf9a"/>
  <rect x="113" y="85.8" width="16" height="94.2" fill="#7ccf9a"/>
  <text x="121" y="195" font-size="10" text-anchor="middle" fill="currentColor">8</text>
  <rect x="131" y="113.8" width="16" height="66.2" fill="#9cc9ea"/>
  <rect x="149" y="117.2" width="16" height="62.8" fill="#9cc9ea"/>
  <text x="157" y="195" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <rect x="167" y="141.0" width="16" height="39.0" fill="#9cc9ea"/>
  <rect x="185" y="145.2" width="16" height="34.8" fill="#9cc9ea"/>
  <text x="193" y="195" font-size="10" text-anchor="middle" fill="currentColor">12</text>
  <rect x="203" y="150.3" width="16" height="29.7" fill="#9cc9ea"/>
  <rect x="221" y="168.1" width="16" height="11.9" fill="#9cc9ea"/>
  <text x="229" y="195" font-size="10" text-anchor="middle" fill="currentColor">14</text>
  <rect x="239" y="163.0" width="16" height="17.0" fill="#9cc9ea"/>
  <rect x="257" y="170.7" width="16" height="9.3" fill="#9cc9ea"/>
  <text x="265" y="195" font-size="10" text-anchor="middle" fill="currentColor">16</text>
  <rect x="275" y="168.1" width="16" height="11.9" fill="#9cc9ea"/>
  <rect x="293" y="175.8" width="16" height="4.2" fill="#9cc9ea"/>
  <text x="301" y="195" font-size="10" text-anchor="middle" fill="currentColor">18</text>
  <rect x="311" y="170.7" width="16" height="9.3" fill="#9cc9ea"/>
  <rect x="329" y="175.8" width="16" height="4.2" fill="#9cc9ea"/>
  <text x="337" y="195" font-size="10" text-anchor="middle" fill="currentColor">20</text>
  <rect x="347" y="169.8" width="16" height="10.2" fill="#9cc9ea"/>
  <text x="355" y="195" font-size="10" text-anchor="middle" fill="currentColor">21+</text>
  <line x1="40" y1="180" x2="364" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <text x="202" y="213" font-size="11" text-anchor="middle" fill="currentColor">boxes opened until all 4 prizes were found (1000 tries)</text>
  <text x="374" y="60" font-size="11" text-anchor="start" fill="currentColor">tallest bar: 5 boxes</text>
  <text x="374" y="78" font-size="11" text-anchor="start" fill="currentColor">(165 tries)</text>
  <text x="374" y="110" font-size="11" text-anchor="start" fill="currentColor">green: done in 8</text>
  <text x="374" y="126" font-size="11" text-anchor="start" fill="currentColor">boxes or fewer</text>
</svg>
</div>

| Boxes needed | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 or more |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Trials | 95 | 165 | 133 | 130 | 111 | 78 | 74 | 46 | 41 | 127 |

Check: $95 + 165 + 133 + 130 + 111 + 78 + 74 + 46 + 41 + 127 = 1000$. ✓

What can we read from it?

- **The most common result was 5 boxes**, but only 165 of 1000 trials (about 17%) needed exactly 5.
- **The average was about 8.3 boxes.** (The computer added up all 1000 results and divided by 1000: 8.314.) Much more
  than most people guess.
- **Done in 8 boxes or fewer** happened in $95 + 165 + 133 + 130 + 111 = 634$ trials: about 63%. So more than a third of
  collectors need 9 boxes or more.
- **The tail is long.** 127 trials needed 13 or more boxes, and the longest needed 38.

### Checking a simulation

A good habit: whenever part of the answer **can** be worked out, check the simulation against it.

What is the exact chance of getting all four toys in just **4 boxes**? Use the multiplication rule from
[lesson 4](04-independent-events.md), since the boxes are independent:

- box 1: any toy (probability 1);
- box 2: one of the 3 toys you do not have: $\tfrac34$;
- box 3: one of the 2 you still need: $\tfrac24$;
- box 4: the last one: $\tfrac14$.

$$1 \times \frac34 \times \frac24 \times \frac14 = \frac{6}{64} = \frac{3}{32} \approx 0.094$$

The simulation gave $\tfrac{95}{1000} = 0.095$. Very close. ✓ That gives us confidence in the rest of the simulation,
including the parts we cannot yet calculate.

(The exact average **can** be found with ideas from [level 7](../level-7/index.md): it is
$4 \times \left(1 + \tfrac12 + \tfrac13 + \tfrac14\right) = \tfrac{25}{3} \approx 8.33$ boxes. The simulation's 8.314
was very close.)

### Random digits

Another simulator is a list of **random digits** 0 to 9, each equally likely, made by a calculator, a spreadsheet or a
computer. Each digit has probability $\tfrac{1}{10}$, so they can model many chances:

- probability $\tfrac{1}{10}$: one digit, say 0;
- probability $0.3$: three digits, say 0, 1, 2;
- probability $0.7$: seven digits, 0 to 6;
- probability $0.25$: use **pairs** of digits, 00 to 99 (100 equally likely), and let 00 to 24 be a success.

<figure class="play" data-play="dice" data-n="2"><span class="ai-tag">AI-created</span><figcaption><b>A simulation.</b> The browser rolls two dice a thousand times in a moment, far faster than by hand.</figcaption></figure>

## Worked examples

**1. Designing a model.** A basketball player makes 70% of her shots. Model one shot with random digits.

Seven digits out of ten is 70%: let 0, 1, 2, 3, 4, 5, 6 be "makes it" and 7, 8, 9 be "misses".

**2. Running a digit simulation.** Using that model, estimate the chance she makes **at least 4 of her next 5** shots.
One trial is a group of 5 digits. Here are 10 groups of random digits:

| Group | 94580 | 73021 | 57368 | 19303 | 64262 | 12997 | 22003 | 32245 | 38323 | 64056 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Makes (digits 0 to 6) | 3 | 4 | 3 | 4 | 5 | 2 | 5 | 5 | 4 | 5 |
| At least 4? | no | yes | no | yes | yes | no | yes | yes | yes | yes |

7 of the 10 trials had at least 4 makes, so the estimate is $\tfrac{7}{10} = 0.7$.

Only 10 trials is rough. The exact answer, which [level 7](../level-7/index.md) shows how to find, is about $0.53$. With
a few hundred trials the estimate would usually land much closer to that.

**3. Two coins as a four-sided die.** For the cereal problem without a die: toss two coins. $HH$ = toy 1, $HT$ = toy 2,
$TH$ = toy 3, $TT$ = toy 4. Each has probability $\tfrac14$, which is exactly what the model needs.

**4. A bad model.** Someone models the cereal with a die, saying "1 and 2 are toy 1, 3 is toy 2, 4 is toy 3, 5 and 6 are
toy 4". That gives toys 1 and 4 a chance of $\tfrac26$ each, and toys 2 and 3 only $\tfrac16$. The chances do not match
the real boxes, so the results would be wrong, however many trials were run.

## Try it

1. How could you use a die to simulate an event with probability $\tfrac12$? With probability $\tfrac13$?
2. How could you use random digits to simulate an event with probability $0.4$?
3. With random digits, how could you simulate an event with probability $0.15$?
4. There are only **3** toys to collect. Design a simulation with one die. Then work out the exact chance of getting
   all three in just 3 boxes.
5. Use the model "0 to 6 = make" on these digit groups to estimate the chance of making **all 5** shots:
   94580, 73021, 57368, 19303, 64262, 12997, 22003, 32245, 38323, 64056.
6. In the 1000 cereal trials, 127 needed 13 or more boxes. Estimate the probability. Out of 400 collectors, about how
   many would need 13 or more boxes?
7. Why is a simulation with 1000 trials better than one with 10?
8. Amir simulates a coin with a die: "1, 2, 3 = heads; 4, 5 = tails; 6 = roll again". Is his model fair? Explain.

??? note "Answers"
    1. $\tfrac12$: let odd = success, even = failure (3 faces each). $\tfrac13$: let 1 or 2 = success (2 faces of 6).
    2. Four digits of ten, for example 0, 1, 2, 3 = success.
    3. Use pairs of digits 00 to 99; let 00 to 14 be success. That is 15 pairs out of 100.
    4. Rolls 1 or 2 = toy A, 3 or 4 = toy B, 5 or 6 = toy C (each $\tfrac26 = \tfrac13$). One trial: roll until all three
       toys have appeared and record the number of rolls. Exact chance of 3 boxes: box 1 anything (1), box 2 new
       ($\tfrac23$), box 3 the last one ($\tfrac13$): $1 \times \tfrac23 \times \tfrac13 = \tfrac29$, about 0.22.
    5. All 5 means 5 makes: groups 64262, 22003, 32245 and 64056. So 4 of 10, an estimate of 0.4. (The exact answer is
       $0.7^5$, about 0.17. Ten trials is far too few to trust; this is why we run many.)
    6. $\tfrac{127}{1000} = 0.127$. Out of 400: $0.127 \times 400 \approx 51$, so about 50 collectors.
    7. Relative frequencies wobble a lot for small numbers of trials and settle down for large numbers (the law of
       large numbers). 1000 trials give an estimate that is usually much closer to the true probability.
    8. No. Among the rolls that count (1 to 5), heads has 3 faces and tails 2. That is $\tfrac35$ heads and $\tfrac25$
       tails, **not** fair. A fair version: 1, 2 = heads; 3, 4 = tails; 5, 6 = roll again (or odd and even).

## Common mistake

**Using a model whose chances do not match.** A simulation can only be as good as its model. Check that every real
outcome gets the same probability in the pretend version.

**Trusting too few trials.** Ten trials can be far off, as question 5 showed (0.4 instead of about 0.17). Run as many
trials as you can, and check against any part you can calculate exactly.

## Where it leads

- Back: [Independent events](04-independent-events.md) · Next: [Expected counts](06-expected-counts.md), how many
  times to expect something, and how far off that usually is.
- [Level 4 page](index.md) · [Probability topic page](../index.md)
- Simulating the Monty Hall problem and other puzzles: [level 6](../level-6/index.md).
- Exact averages (expected value) and waiting times: [level 7](../level-7/index.md).
- Big simulations with thousands of random points, such as estimating $\pi$ (the "Monte Carlo" method):
  [level 8](../level-8/index.md).
- Writing your own simulation in code: the CS course [CSC108](../../../uoft/CSC108H1/index.md) at U of T teaches
  Python from the start.
