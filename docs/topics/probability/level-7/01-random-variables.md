---
title: "Random variables and their distributions"
---

# Random variables and their distributions

*Probability · level 7, lesson 1 of 7*

## A question to start

Roll two dice and add the numbers. A friend offers you a bet: you pick one total, she picks another, and whoever's
total comes up first wins. Which total should you pick?

Most people know by now that 7 is the best single choice. But this lesson asks a bigger question. Instead of
asking about one total at a time, can we describe **all** the totals at once, with their chances, in one table and
one picture? And once we have that picture, what else can we read off it: the chance of 10 or more, the chance of
something between 4 and 6, the "typical" total, how spread out the totals are?

The tool that does this is called a **random variable**, and nearly everything in the rest of probability is built
on it.

## The idea

### A number decided by chance

In earlier levels an experiment had **outcomes** (the things that can happen) and **events** (groups of outcomes).
Rolling two dice has 36 equally likely outcomes, the ordered pairs from $(1,1)$ to $(6,6)$.

Often we do not care about the whole outcome, only about one **number** that comes from it: the total, the larger of
the two numbers, the number of sixes. A **random variable** is a rule that gives a number to every outcome of an
experiment. We name random variables with capital letters such as $X$, $Y$, $N$.

For two dice, let $X$ be the sum. Then the rule is "add the two numbers":

- the outcome $(2, 5)$ gives $X = 7$;
- the outcome $(6, 6)$ gives $X = 12$;
- the outcome $(4, 3)$ gives $X = 7$ as well.

Different outcomes can give the same value. That is exactly why some values are more likely than others.

Two pieces of notation matter. A **capital** letter is the random variable itself (the rule, whose value we do not
know yet). A **small** letter is one particular value it might take. So $P(X = x)$ means "the probability that the
sum turns out to be the number $x$", and $P(X = 7)$ means "the probability that the sum is 7".

(A mathematician would say a random variable is a **function** from the sample space to the real numbers. The word
"variable" is an old name that stuck; it is really a function.)

### The probability distribution

To find $P(X = 7)$ we count the outcomes that give 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. Six of the 36, so
$P(X = 7) = \tfrac{6}{36}$. Doing this for every value gives the **probability distribution** of $X$: a list of every
value $X$ can take, each with its probability.

| $x$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $P(X = x)$ | $\tfrac{1}{36}$ | $\tfrac{2}{36}$ | $\tfrac{3}{36}$ | $\tfrac{4}{36}$ | $\tfrac{5}{36}$ | $\tfrac{6}{36}$ | $\tfrac{5}{36}$ | $\tfrac{4}{36}$ | $\tfrac{3}{36}$ | $\tfrac{2}{36}$ | $\tfrac{1}{36}$ |

The pattern 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 comes from the diagonals of the 6-by-6 table of two dice: each diagonal
running from bottom left to top right has a fixed sum, and the longest diagonal (the one for 7) has 6 cells.

### The picture: a probability histogram

Draw a bar for each value, with height equal to its probability.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 220" role="img" aria-label="Bar chart of the sum of two dice: heights 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 out of 36 for sums 2 to 12">
  <line x1="40" y1="180" x2="448" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="18" x2="40" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <rect x="44.5" y="155.9" width="28.2" height="24.1" fill="#9cc9ea"/>
  <text x="58.5" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="58.5" y="151.9" font-size="10" text-anchor="middle" fill="currentColor">1/36</text>
  <rect x="81.5" y="131.8" width="28.2" height="48.2" fill="#9cc9ea"/>
  <text x="95.6" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="95.6" y="127.8" font-size="10" text-anchor="middle" fill="currentColor">2/36</text>
  <rect x="118.6" y="107.7" width="28.2" height="72.3" fill="#9cc9ea"/>
  <text x="132.7" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="132.7" y="103.7" font-size="10" text-anchor="middle" fill="currentColor">3/36</text>
  <rect x="155.7" y="83.6" width="28.2" height="96.4" fill="#9cc9ea"/>
  <text x="169.8" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="169.8" y="79.6" font-size="10" text-anchor="middle" fill="currentColor">4/36</text>
  <rect x="192.8" y="59.5" width="28.2" height="120.5" fill="#9cc9ea"/>
  <text x="206.9" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="206.9" y="55.5" font-size="10" text-anchor="middle" fill="currentColor">5/36</text>
  <rect x="229.9" y="35.4" width="28.2" height="144.6" fill="#eea66f"/>
  <text x="244.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <text x="244.0" y="31.4" font-size="10" text-anchor="middle" fill="currentColor">6/36</text>
  <rect x="267.0" y="59.5" width="28.2" height="120.5" fill="#9cc9ea"/>
  <text x="281.1" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <text x="281.1" y="55.5" font-size="10" text-anchor="middle" fill="currentColor">5/36</text>
  <rect x="304.1" y="83.6" width="28.2" height="96.4" fill="#9cc9ea"/>
  <text x="318.2" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <text x="318.2" y="79.6" font-size="10" text-anchor="middle" fill="currentColor">4/36</text>
  <rect x="341.2" y="107.7" width="28.2" height="72.3" fill="#9cc9ea"/>
  <text x="355.3" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <text x="355.3" y="103.7" font-size="10" text-anchor="middle" fill="currentColor">3/36</text>
  <rect x="378.3" y="131.8" width="28.2" height="48.2" fill="#9cc9ea"/>
  <text x="392.4" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">11</text>
  <text x="392.4" y="127.8" font-size="10" text-anchor="middle" fill="currentColor">2/36</text>
  <rect x="415.4" y="155.9" width="28.2" height="24.1" fill="#9cc9ea"/>
  <text x="429.5" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <text x="429.5" y="151.9" font-size="10" text-anchor="middle" fill="currentColor">1/36</text>
  <text x="244.0" y="214.0" font-size="12" text-anchor="middle" fill="currentColor">value x of X (sum of two dice)</text>
</svg>
</div>

This is a **probability histogram**. It is the shape of the random variable: tall in the middle at 7, symmetric, and
falling away in straight steps to 2 and 12. Compare this with a histogram of real data in
[Statistics](../../statistics/index.md): data histograms show what **did** happen; a probability histogram shows what
the model says **will** happen in the long run. If you rolled two dice 3600 times and drew the data histogram, it
would look very like this one (about 600 sevens, about 100 twos), but not exactly.

### The two rules every distribution obeys

A table is a probability distribution only if:

1. **every probability is between 0 and 1**: $0 \le P(X = x) \le 1$;
2. **the probabilities add to 1**: $\sum P(X = x) = 1$.

The symbol $\sum$ (the Greek capital sigma, "sum") means "add these up over every value $x$".

Why must they add to 1? Each outcome of the experiment gives exactly **one** value of $X$. So the events
"$X = 2$", "$X = 3$", ..., "$X = 12$" split the whole sample space into separate pieces, with no overlap and nothing
left over. The probabilities of separate pieces add, and the whole sample space has probability 1. For the dice:
$1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1 = 36$, and $\tfrac{36}{36} = 1$. ✓

This check is the first thing to do whenever you build a distribution. If your probabilities add to $\tfrac{35}{36}$,
you have missed an outcome.

### Reading events off the distribution

Any statement about $X$ is an event, and its probability is the sum of the matching bars.

- $P(X \ge 10) = P(10) + P(11) + P(12) = \tfrac{3 + 2 + 1}{36} = \tfrac{6}{36} = \tfrac16$.
- $P(4 \le X \le 6) = \tfrac{3 + 4 + 5}{36} = \tfrac{12}{36} = \tfrac13$.
- $P(X \text{ is odd}) = \tfrac{2 + 4 + 6 + 4 + 2}{36} = \tfrac{18}{36} = \tfrac12$.

Running totals have a name. The **cumulative probability** $P(X \le x)$ adds all the bars up to and including $x$.
For the dice sum, $P(X \le 4) = \tfrac{1 + 2 + 3}{36} = \tfrac{6}{36}$. Calculators and spreadsheets often give
cumulative probabilities, so it pays to read carefully whether a number means "exactly", "at most" or "at least".
"At least 10" is the complement of "at most 9": $P(X \ge 10) = 1 - P(X \le 9)$.

### One experiment, many random variables

The same two dice give other random variables. Let $M$ be the **larger** of the two numbers (the maximum). $M = 1$
only for $(1,1)$. $M = 2$ for $(1,2), (2,1), (2,2)$: three outcomes. In general, $M = m$ for the outcomes in an
"L"-shaped strip of the table: $m$ outcomes with first die $m$, plus $m - 1$ more with second die $m$ and first die
smaller. That is $2m - 1$ outcomes.

| $m$ | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| $P(M = m)$ | $\tfrac{1}{36}$ | $\tfrac{3}{36}$ | $\tfrac{5}{36}$ | $\tfrac{7}{36}$ | $\tfrac{9}{36}$ | $\tfrac{11}{36}$ |

Check: $1 + 3 + 5 + 7 + 9 + 11 = 36$. ✓ (The sum of the first six odd numbers is $6^2$, which is also why the
"L" shapes fit together into the 6-by-6 square.) This distribution is not symmetric: it leans toward 6, because
the larger of two numbers tends to be large.

### Discrete random variables

All the random variables in this level take values you can **list**: whole numbers like 0, 1, 2, ... They are called
**discrete**. In [level 8](../level-8/index.md) you will meet **continuous** random variables (a waiting time, a
height), which can take any value in an interval and need a different picture: a curve instead of bars.

<figure class="play" data-play="dice" data-n="2"><span class="ai-tag">AI-created</span><figcaption><b>A random variable.</b> The total of two dice: each value has its own chance.</figcaption></figure>

## Worked examples

**1. Heads in three flips.** Flip a fair coin three times and let $H$ be the number of heads. Find the distribution
of $H$ and draw it.

The 8 equally likely outcomes are HHH, HHT, HTH, THH, HTT, THT, TTH, TTT. Count heads in each:

- $H = 3$: HHH, 1 outcome;
- $H = 2$: HHT, HTH, THH, 3 outcomes;
- $H = 1$: HTT, THT, TTH, 3 outcomes;
- $H = 0$: TTT, 1 outcome.

| $h$ | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| $P(H = h)$ | $\tfrac18$ | $\tfrac38$ | $\tfrac38$ | $\tfrac18$ |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 220" role="img" aria-label="Bar chart of the number of heads in three coin flips: 1/8, 3/8, 3/8, 1/8">
  <line x1="40" y1="180" x2="288" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="18" x2="40" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <rect x="47.4" y="131.8" width="47.1" height="48.2" fill="#7ccf9a"/>
  <text x="71.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="71.0" y="127.8" font-size="10" text-anchor="middle" fill="currentColor">1/8</text>
  <rect x="109.4" y="35.4" width="47.1" height="144.6" fill="#7ccf9a"/>
  <text x="133.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="133.0" y="31.4" font-size="10" text-anchor="middle" fill="currentColor">3/8</text>
  <rect x="171.4" y="35.4" width="47.1" height="144.6" fill="#7ccf9a"/>
  <text x="195.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="195.0" y="31.4" font-size="10" text-anchor="middle" fill="currentColor">3/8</text>
  <rect x="233.4" y="131.8" width="47.1" height="48.2" fill="#7ccf9a"/>
  <text x="257.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="257.0" y="127.8" font-size="10" text-anchor="middle" fill="currentColor">1/8</text>
  <text x="164.0" y="214.0" font-size="12" text-anchor="middle" fill="currentColor">number of heads</text>
</svg>
</div>

Check: $\tfrac{1 + 3 + 3 + 1}{8} = 1$. ✓ The numbers 1, 3, 3, 1 are a row of Pascal's triangle; that is no accident,
and lesson 4 explains why.

**2. Finding a missing constant.** A random variable $X$ takes the values 1, 2, 3, 4 with $P(X = x) = kx$. Find $k$
and $P(X \ge 3)$.

The probabilities are $k, 2k, 3k, 4k$. They must add to 1: $10k = 1$, so $k = \tfrac{1}{10}$. All four are between 0
and 1, so the table is valid. Then $P(X \ge 3) = 3k + 4k = \tfrac{7}{10}$.

**3. Is it a distribution?** A spinner is labelled with a table: $P(0) = 0.4$, $P(1) = 0.35$, $P(2) = 0.3$. Is this a
valid probability distribution?

Each value is between 0 and 1, but the sum is $0.4 + 0.35 + 0.3 = 1.05$. More than 1, so it is **not** a valid
distribution. Somebody's numbers are wrong: perhaps $P(2)$ should be 0.25.

**4. The difference of two dice.** Let $D$ be the larger number minus the smaller, so $D = |a - b|$. Find
$P(D = 0)$ and $P(D = 1)$.

$D = 0$ when the dice match: the 6 doubles, so $P(D = 0) = \tfrac{6}{36}$. $D = 1$ for $(1,2)$, $(2,3)$, $(3,4)$,
$(4,5)$, $(5,6)$ and the same pairs reversed: 10 outcomes, so $P(D = 1) = \tfrac{10}{36}$. (The full table is in the
Try it answers.)

## Try it

1. Flip two coins and let $X$ be the number of heads. Write the distribution of $X$.
2. Using the two-dice sum table, find $P(X \ge 9)$ and $P(X = 2 \text{ or } X = 12)$.
3. A table says $P(X = 1) = 0.2$, $P(X = 2) = 0.5$, $P(X = 3) = 0.2$, $P(X = 4) = 0.2$. Is it valid? Why?
4. $Y$ takes the values 1, 2, 3 with $P(Y = y) = c\,y^2$. Find $c$.
5. Complete the distribution of $D = |a - b|$ for two dice (values 0 to 5) and check it adds to 1.
6. Let $N$ be the **smaller** of two dice. Explain why $P(N = 1) = \tfrac{11}{36}$ without listing every outcome.
7. A bag has 3 red and 2 blue marbles. Take two without putting the first back. Let $R$ be the number of red marbles
   taken. Find the distribution of $R$.
8. For the dice sum $X$, find $P(X \le 6)$ and use it to find $P(X \ge 7)$. Why is $P(X \ge 7)$ more than $\tfrac12$?

??? note "Answers"
    1. Outcomes HH, HT, TH, TT. $P(X = 0) = \tfrac14$, $P(X = 1) = \tfrac24 = \tfrac12$, $P(X = 2) = \tfrac14$.
       Check: $\tfrac14 + \tfrac12 + \tfrac14 = 1$.
    2. $P(X \ge 9) = \tfrac{4 + 3 + 2 + 1}{36} = \tfrac{10}{36} = \tfrac{5}{18}$.
       $P(X = 2 \text{ or } 12) = \tfrac{1 + 1}{36} = \tfrac{1}{18}$.
    3. Not valid: $0.2 + 0.5 + 0.2 + 0.2 = 1.1$, which is more than 1.
    4. $c(1 + 4 + 9) = 1$, so $14c = 1$ and $c = \tfrac{1}{14}$. The probabilities are $\tfrac{1}{14}$,
       $\tfrac{4}{14}$, $\tfrac{9}{14}$.
    5. Count pairs with each difference. $D = 0$: 6. $D = 1$: 10. $D = 2$: $(1,3), (2,4), (3,5), (4,6)$ and reversed,
       8. $D = 3$: $(1,4), (2,5), (3,6)$ and reversed, 6. $D = 4$: $(1,5), (2,6)$ and reversed, 4. $D = 5$: $(1,6)$
       and reversed, 2. So the probabilities are $\tfrac{6}{36}$, $\tfrac{10}{36}$, $\tfrac{8}{36}$, $\tfrac{6}{36}$,
       $\tfrac{4}{36}$, $\tfrac{2}{36}$, and $6 + 10 + 8 + 6 + 4 + 2 = 36$. ✓
    6. $N = 1$ means at least one die shows 1. The complement is "both dice show 2 to 6": $5 \times 5 = 25$
       outcomes. So $36 - 25 = 11$ outcomes have a 1, and $P(N = 1) = \tfrac{11}{36}$.
    7. $P(R = 2) = \tfrac35 \times \tfrac24 = \tfrac{6}{20}$. $P(R = 0) = \tfrac25 \times \tfrac14 = \tfrac{2}{20}$.
       $P(R = 1) = 1 - \tfrac{6}{20} - \tfrac{2}{20} = \tfrac{12}{20}$ (or directly: red then blue
       $\tfrac35 \times \tfrac24 = \tfrac{6}{20}$, blue then red $\tfrac25 \times \tfrac34 = \tfrac{6}{20}$, total
       $\tfrac{12}{20}$). So $\tfrac{1}{10}, \tfrac{6}{10}, \tfrac{3}{10}$ for $R = 0, 1, 2$.
    8. $P(X \le 6) = \tfrac{1 + 2 + 3 + 4 + 5}{36} = \tfrac{15}{36}$, so
       $P(X \ge 7) = 1 - \tfrac{15}{36} = \tfrac{21}{36}$. It is more than a half because 7 itself is included, and 7 is the most likely total; the
       values below 7 and above 7 balance exactly ($\tfrac{15}{36}$ each).

## Common mistake

**Treating the values as equally likely.** The sum of two dice has 11 possible values, but $P(X = 7)$ is not
$\tfrac{1}{11}$. The values come from outcomes, and the outcomes (not the values) are the equally likely things.
Always go back to the outcomes to count.

**Forgetting the check.** If your probabilities do not add to 1, the table is wrong, however reasonable each entry
looks. A missing value (often 0, or the largest value) is the usual culprit.

## Where it leads

- Back: [Level 6](../level-6/index.md) (conditional probability) · Next: [Expected value](02-expected-value.md)
- [Level 7 page](index.md) · [Probability topic page](../index.md)
- Counting outcomes is the engine of every distribution: see [Counting](../../counting/index.md).
- Histograms of real data and how they compare with a model: [Statistics](../../statistics/index.md).
- A random variable is a function, and functions are the heart of [Algebra](../../algebra/index.md).
