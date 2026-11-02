---
title: "The hypergeometric distribution"
---

# The hypergeometric distribution

*Probability · level 7, lesson 6 of 7*

## A question to start

A box holds 20 phone chargers, and 4 of them are faulty, though nobody knows which. An inspector picks 5 chargers at
random and tests them. If none of the 5 is faulty, the whole box is passed.

What is the chance the box passes, even though one charger in five is faulty? It is tempting to use the binomial
from lesson 4: each charger is faulty with chance $\tfrac{4}{20} = 0.2$, so "none faulty" is $0.8^5 \approx 0.328$.
But that is not quite right. Once a good charger has been taken out, the box holds a slightly higher proportion of
faulty ones. The true answer is about 0.282. This lesson shows where it comes from, and when the quick binomial answer
is good enough.

## The idea

### Sampling without replacement

The binomial needs independent trials with the same chance every time. Drawing from a box **with replacement** (put
each item back and mix before the next draw) gives exactly that. Drawing **without replacement** does not: each draw
changes what is left, so the chances change.

The set-up for this lesson:

- a **population** of $N$ items;
- of which $K$ are "successes" (faulty chargers, red marbles, hearts, winning numbers) and $N - K$ are not;
- a **sample** of $n$ items is drawn at random **without replacement** (so every group of $n$ items is equally likely
  to be the sample).

Let $X$ be the number of successes in the sample. Then $X$ has a **hypergeometric distribution**.

### The formula, by counting

Since every sample of $n$ items is equally likely, a probability is (number of good samples) over (number of
samples). We do not care about the **order** of the draws, only which items end up in the sample, so we count with
combinations.

- Number of possible samples: choose $n$ of the $N$ items, $\dbinom{N}{n}$ ways.
- Samples with exactly $k$ successes: choose $k$ of the $K$ successes, **and** $n - k$ of the $N - K$ others. By the
  multiplication principle of [Counting](../../counting/index.md), $\dbinom{K}{k}\dbinom{N - K}{n - k}$ ways.

So

$$P(X = k) = \frac{\dbinom{K}{k}\dbinom{N - K}{n - k}}{\dbinom{N}{n}}.$$

The top numbers add up ($K + (N - K) = N$) and so do the bottom numbers ($k + (n - k) = n$). That pattern is an easy
check that you have written it correctly.

**The chargers.** $N = 20$, $K = 4$, $n = 5$. There are $\dbinom{20}{5} = 15\,504$ samples. The chance of no faulty
charger is

$$P(X = 0) = \frac{\dbinom40 \dbinom{16}{5}}{\dbinom{20}{5}} = \frac{1 \times 4368}{15\,504} \approx 0.282.$$

The same answer comes from multiplying along a tree, one draw at a time:
$\tfrac{16}{20} \cdot \tfrac{15}{19} \cdot \tfrac{14}{18} \cdot \tfrac{13}{17} \cdot \tfrac{12}{16} = \tfrac{524\,160}{1\,860\,480} \approx 0.282$.
Both methods are right; the combinations formula is faster when $k$ is not 0, because it counts all the orders at
once.

The full distribution:

| $k$ faulty in sample | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| good samples | 4368 | 7280 | 3360 | 480 | 16 |
| $P(X = k)$ | 0.2817 | 0.4696 | 0.2167 | 0.0310 | 0.0010 |

Check: $4368 + 7280 + 3360 + 480 + 16 = 15\,504$. ✓ The sample cannot hold 5 faulty chargers, because there are only 4.

### The mean: a symmetry argument

What is the chance that the **third** charger drawn is faulty? Before anything is drawn, every charger is equally
likely to end up in third place, so the chance is simply $\tfrac{4}{20}$, the same as for the first. (Not knowing what
was drawn first and second, you have no reason to treat third place differently.)

So each draw, on its own, is a success with chance $\tfrac{K}{N}$. Write $X$ as a sum of $n$ indicators, one per draw,
and use "expected values add" (which does not need independence):

$$E(X) = n \cdot \frac{K}{N}.$$

The chargers: $E(X) = 5 \times \tfrac{4}{20} = 1$. Check from the table:
$\tfrac{0 + 7280 + 2 \times 3360 + 3 \times 480 + 4 \times 16}{15\,504} = \tfrac{15\,504}{15\,504} = 1$. ✓ The mean is the
**same** as the binomial's $np$ with $p = \tfrac{K}{N}$.

### The spread is smaller

The variance is different. Here it is the binomial variance times a **correction factor**:

$$\operatorname{Var}(X) = n \cdot \frac{K}{N}\left(1 - \frac{K}{N}\right) \cdot \frac{N - n}{N - 1}.$$

(The proof uses the indicators again, but they are not independent, so the extra "cross" terms from lesson 3 no longer
vanish; they are slightly negative, because one faulty charger drawn makes another a little less likely.) For the
chargers the factor is $\tfrac{15}{19}$, so the variance is $0.8 \times \tfrac{15}{19} \approx 0.63$, compared with the
binomial's 0.8.

Why smaller? Without replacement, the sample cannot wander as far from the true proportion: each faulty charger
taken makes the next one less likely, and each good one makes the next more likely, pulling the count back toward the
middle. In the extreme case $n = N$ (test every charger), the factor is 0: you get exactly $K$ faulty, with no
uncertainty at all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 220" role="img" aria-label="Side by side bars for 0 to 4 faulty items in a sample of 5: hypergeometric from a box of 20 with 4 faulty, and binomial with p = 0.2; the hypergeometric is taller in the middle and shorter in the tails">
  <line x1="40" y1="180" x2="448" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <rect x="57.8" y="89.8" width="22" height="90.2" fill="#eea66f"/>
  <text x="68.8" y="85.8" font-size="9" text-anchor="middle" fill="currentColor">0.282</text>
  <rect x="81.8" y="75.1" width="22" height="104.9" fill="#9cc9ea"/>
  <text x="92.8" y="71.1" font-size="9" text-anchor="middle" fill="currentColor">0.328</text>
  <text x="80.8" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <rect x="139.4" y="29.7" width="22" height="150.3" fill="#eea66f"/>
  <text x="150.4" y="25.7" font-size="9" text-anchor="middle" fill="currentColor">0.470</text>
  <rect x="163.4" y="48.9" width="22" height="131.1" fill="#9cc9ea"/>
  <text x="174.4" y="44.9" font-size="9" text-anchor="middle" fill="currentColor">0.410</text>
  <text x="162.4" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="221.0" y="110.7" width="22" height="69.3" fill="#eea66f"/>
  <text x="232.0" y="106.7" font-size="9" text-anchor="middle" fill="currentColor">0.217</text>
  <rect x="245.0" y="114.5" width="22" height="65.5" fill="#9cc9ea"/>
  <text x="256.0" y="110.5" font-size="9" text-anchor="middle" fill="currentColor">0.205</text>
  <text x="244.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="302.6" y="170.1" width="22" height="9.9" fill="#eea66f"/>
  <text x="313.6" y="166.1" font-size="9" text-anchor="middle" fill="currentColor">0.031</text>
  <rect x="326.6" y="163.6" width="22" height="16.4" fill="#9cc9ea"/>
  <text x="337.6" y="159.6" font-size="9" text-anchor="middle" fill="currentColor">0.051</text>
  <text x="325.6" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="384.2" y="179.7" width="22" height="0.3" fill="#eea66f"/>
  <text x="395.2" y="175.7" font-size="9" text-anchor="middle" fill="currentColor">0.001</text>
  <rect x="408.2" y="178.0" width="22" height="2.0" fill="#9cc9ea"/>
  <text x="419.2" y="174.0" font-size="9" text-anchor="middle" fill="currentColor">0.006</text>
  <text x="407.2" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="250.0" y="214.0" font-size="12" text-anchor="middle" fill="currentColor">number of faulty items in the sample</text>
  <rect x="270" y="20" width="12" height="12" fill="#eea66f"/>
  <text x="288.0" y="30.0" font-size="11" text-anchor="start" fill="currentColor">hypergeometric (box of 20)</text>
  <rect x="270" y="40" width="12" height="12" fill="#9cc9ea"/>
  <text x="288.0" y="50.0" font-size="11" text-anchor="start" fill="currentColor">binomial, p = 0.2</text>
</svg>
</div>

### When the binomial is close enough

If the population is huge compared with the sample, taking out a few items barely changes the proportions, and the
factor $\tfrac{N - n}{N - 1}$ is close to 1. Then the hypergeometric is almost exactly binomial with $p = \tfrac{K}{N}$.

Take a warehouse of $N = 1000$ chargers with 200 faulty, and sample 5:

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| hypergeometric, $N = 1000$ | 0.3269 | 0.4106 | 0.2051 | 0.0509 | 0.0063 | 0.0003 |
| binomial, $p = 0.2$ | 0.3277 | 0.4096 | 0.2048 | 0.0512 | 0.0064 | 0.0003 |

The two rows agree to about two decimal places. A common rule of thumb: if the sample is less than about 5% of the
population, the binomial is a fine approximation. This is why opinion polls of 1000 people from a country of millions
are treated with binomial-style formulas, even though nobody is asked twice.

## Worked examples

**1. A lottery.** In a 6/49 lottery you pick 6 numbers from 1 to 49, and 6 winning numbers are drawn. Here $N = 49$,
$K = 6$ (the winning numbers), $n = 6$ (your numbers). The chance of matching exactly 3:

$$P(X = 3) = \frac{\dbinom63\dbinom{43}{3}}{\dbinom{49}{6}} = \frac{20 \times 12\,341}{13\,983\,816} = \frac{246\,820}{13\,983\,816} \approx 0.0177,$$

about 1 in 57. Matching all 6 is $\tfrac{1}{13\,983\,816}$, the number from [level 6](../level-6/03-combinations-probability.md). Matching 3 or
more is about 0.0186, roughly 1 in 54.

**2. Hearts in a hand.** Deal 5 cards from a 52-card deck. Chance of exactly 2 hearts:
$N = 52$, $K = 13$, $n = 5$.

$$P(X = 2) = \frac{\dbinom{13}{2}\dbinom{39}{3}}{\dbinom{52}{5}} = \frac{78 \times 9139}{2\,598\,960} = \frac{712\,842}{2\,598\,960} \approx 0.274.$$

The binomial with $p = \tfrac14$ would give $\dbinom52 \left(\tfrac14\right)^2\left(\tfrac34\right)^3 \approx 0.264$: close, but
5 cards is almost 10% of the deck, so the difference shows.

**3. A committee by lot.** A club has 6 women and 5 men. A committee of 4 is chosen at random. Chance of exactly 2
women: $\dfrac{\binom62\binom52}{\binom{11}{4}} = \dfrac{15 \times 10}{330} = \dfrac{150}{330} \approx 0.455$.

**4. At least one ace.** Deal 5 cards. $P(\text{no ace}) = \dfrac{\binom{48}{5}}{\binom{52}{5}} \approx 0.659$, so
$P(\text{at least one ace}) \approx 0.341$.

## Try it

1. A bag has 3 red and 7 blue marbles. Take 4 without replacement. Find the chance of exactly 2 red.
2. For the bag in question 1, find the expected number of red marbles, and the variance. Compare the variance with the
   binomial one.
3. In the 6/49 lottery, find the chance of matching exactly 4 numbers.
4. A box of 12 eggs has 2 cracked. You pick 3 eggs at random. Find the chance none is cracked, using a tree, and again
   using combinations.
5. Deal 13 cards (a bridge hand). Find the expected number of aces. Why is this easy even though the distribution is
   awkward?
6. Explain in words why the hypergeometric variance is smaller than the binomial variance with the same $p$.
7. A pond has 1000 fish, 100 of which have been tagged. You catch 20 fish. Use the binomial approximation to find the
   chance that exactly 2 are tagged. Is the approximation reasonable here?
8. In the charger question, the inspector changes the rule: pass the box if **at most one** of the 5 is faulty. Find
   the chance a box with 4 faulty chargers passes. Is that a good rule?

??? note "Answers"
    1. $\dfrac{\binom32\binom72}{\binom{10}{4}} = \dfrac{3 \times 21}{210} = \dfrac{63}{210} = 0.3$.
    2. Mean $4 \times \tfrac{3}{10} = 1.2$. Variance $4 \times 0.3 \times 0.7 \times \tfrac{10 - 4}{10 - 1} = 0.84 \times \tfrac69 = 0.56$.
       The binomial variance would be 0.84: the factor $\tfrac69$ shrinks it by a third.
    3. $\dfrac{\binom64\binom{43}{2}}{\binom{49}{6}} = \dfrac{15 \times 903}{13\,983\,816} = \dfrac{13\,545}{13\,983\,816} \approx 0.00097$,
       about 1 in 1032.
    4. Tree: $\tfrac{10}{12} \cdot \tfrac{9}{11} \cdot \tfrac{8}{10} = \tfrac{720}{1320} = \tfrac{6}{11} \approx 0.545$.
       Combinations: $\dfrac{\binom{10}{3}}{\binom{12}{3}} = \dfrac{120}{220} = \dfrac{6}{11}$. ✓
    5. $13 \times \tfrac{4}{52} = 1$ ace. It is easy because expected values add even for dependent indicators: each
       card dealt is an ace with chance $\tfrac{4}{52}$, by symmetry.
    6. Without replacement, every success drawn makes the next success less likely and every failure makes it more
       likely, so the count is pulled back toward the middle and cannot spread as much. With replacement, the draws are
       independent and nothing pulls them back.
    7. $p = 0.1$, $n = 20$: $\dbinom{20}{2}(0.1)^2(0.9)^{18} = 190 \times 0.01 \times 0.15009 \approx 0.285$. The sample is
       2% of the pond, so the approximation is good. (The exact hypergeometric value is about 0.288.)
    8. $P(X \le 1) = \tfrac{4368 + 7280}{15\,504} = \tfrac{11\,648}{15\,504} \approx 0.751$. A box with 20% faulty chargers
       passes three times out of four: a weak rule. The first rule (pass only if none is faulty) is stricter but still
       passes such a box 28% of the time; a bigger sample would be needed for real protection.

## Common mistake

**Using the binomial for a small population.** If the sample is a large fraction of the population (more than about
5%), the chances change noticeably from draw to draw, and the binomial overstates the spread. Use the hypergeometric.

**Counting ordered samples on the top and unordered ones on the bottom.** Either count ordered sequences everywhere
(the tree method) or unordered groups everywhere (combinations). Mixing them gives answers that are off by a
factorial.

## Where it leads

- Back: [The geometric distribution](05-geometric-distribution.md) · Next: [Uniform distributions and choosing a model](07-choosing-a-model.md)
- [Level 7 page](index.md) · [Probability topic page](../index.md)
- The counting behind it: [Choosing, not arranging](../../counting/level-5/01-choosing-not-arranging.md) in Counting.
- Sampling, polls and the capture-recapture method of estimating a population: [Statistics](../../statistics/index.md).
