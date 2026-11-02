---
title: "The binomial distribution"
---

# The binomial distribution

*Probability · level 7, lesson 4 of 7*

## A question to start

A surprise quiz has 10 multiple-choice questions, each with 4 choices. You have not studied at all, so you guess every
answer at random. The pass mark is 5 out of 10.

What is the chance you pass? Half the questions right does not sound like much. But each guess is right only a quarter
of the time, so on average you will get $10 \times \tfrac14 = 2.5$ right. Is passing a 1-in-3 chance? 1 in 10? 1 in
100? This lesson builds the formula that answers it exactly, and that same formula describes free throws, faulty
parts, seeds that sprout and any other count of successes in repeated tries.

## The idea

### Repeated yes-or-no trials

A **trial** is one go at something with two possible results, which we call **success** and **failure** (the words
are labels, not judgements: "success" might be a faulty part). The chance of success in one trial is written $p$,
so the chance of failure is $1 - p$.

A random variable $X$ is called **binomial** when it counts the successes in a situation with all four of these
features (one way to remember them is **BINS**):

- **B**inary: each trial has just two results, success or failure;
- **I**ndependent: the result of one trial does not change the chances for another;
- **N**umber fixed: the number of trials $n$ is decided in advance;
- **S**ame chance: every trial has the same success chance $p$.

We write $X \sim \operatorname{B}(n, p)$, read "$X$ is binomial with $n$ trials and success chance $p$". The guessing
quiz is $\operatorname{B}(10, \tfrac14)$: 10 trials (questions), each a success (right answer) with chance
$\tfrac14$, independent because each guess is made on its own.

### Building the formula with a small case

Take $n = 3$ trials. Write S for success and F for failure. There are $2^3 = 8$ sequences. Because the trials are
independent, the probability of a sequence is the product along it (the multiplication rule from
[level 5](../level-5/index.md)). For example, $P(\text{SFS}) = p \cdot (1 - p) \cdot p = p^2 (1 - p)$.

Now look at the sequences with exactly 2 successes: SSF, SFS, FSS. Each has two factors of $p$ and one factor of
$(1 - p)$, in some order, so each has probability $p^2(1 - p)$. There are 3 of them, so

$$P(X = 2) = 3\,p^2 (1 - p).$$

The order does not change the probability of a sequence; only the **number** of S's and F's matters. So every
probability is (number of sequences with that many S's) times (probability of any one of them).

### The general formula

With $n$ trials and exactly $k$ successes:

1. **How many sequences?** A sequence is fixed once you choose **which** $k$ of the $n$ trial positions are the
   successes. That is a choice of $k$ things from $n$, which can be done in $\dbinom{n}{k}$ ways, the combinations
   from [Counting](../../counting/level-5/01-choosing-not-arranging.md). (Read $\dbinom{n}{k}$ as "$n$ choose $k$";
   $\dbinom{n}{k} = \dfrac{n!}{k!\,(n - k)!}$.)
2. **Probability of each?** $k$ successes and $n - k$ failures, multiplied together: $p^k(1 - p)^{n - k}$.

So for $X \sim \operatorname{B}(n, p)$:

$$P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}, \qquad k = 0, 1, 2, \dots, n.$$

For $n = 3$ this gives $1, 3, 3, 1$ times the matching powers: a row of Pascal's triangle again, which is why the
coin flips in lesson 1 gave $\tfrac18, \tfrac38, \tfrac38, \tfrac18$.

**Do the probabilities add to 1?** Yes, and the reason is the **binomial theorem** (which gives this distribution
its name):

$$\sum_{k=0}^{n} \binom{n}{k} p^k (1 - p)^{n - k} = \big(p + (1 - p)\big)^n = 1^n = 1.$$

Expanding $(p + q)^n$ means choosing $p$ or $q$ from each of $n$ brackets, and the coefficient $\dbinom{n}{k}$ counts
the ways to choose $p$ exactly $k$ times: the very same count as the sequences.

### Mean and variance without any algebra

Write $X$ as a sum of **indicators**: $X = I_1 + I_2 + \dots + I_n$, where $I_j$ is 1 if trial $j$ succeeds and 0 if
not. From the last two lessons, each indicator has mean $p$ and variance $p(1 - p)$, and the indicators are
independent. So:

$$E(X) = np, \qquad \operatorname{Var}(X) = np(1 - p), \qquad \sigma = \sqrt{np(1 - p)}.$$

For the quiz: $E(X) = 10 \cdot \tfrac14 = 2.5$ and $\sigma = \sqrt{10 \cdot \tfrac14 \cdot \tfrac34} = \sqrt{1.875} \approx 1.37$.
Proving $E(X) = np$ straight from the formula needs a page of algebra with factorials; the indicator argument does it in a
line. That is a good lesson in itself: the right way of looking at a problem can make it easy.

### The shape

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 150" role="img" aria-label="Three binomial distributions with n = 10: p = 0.2 leans left, p = 0.5 is symmetric, p = 0.8 leans right">
  <line x1="10" y1="115" x2="142" y2="115" stroke="currentColor" stroke-width="1.2"/>
  <rect x="11.0" y="84.8" width="10" height="30.2" fill="#9cc9ea"/>
  <rect x="23.0" y="39.5" width="10" height="75.5" fill="#9cc9ea"/>
  <rect x="35.0" y="30.1" width="10" height="84.9" fill="#9cc9ea"/>
  <rect x="47.0" y="58.4" width="10" height="56.6" fill="#9cc9ea"/>
  <rect x="59.0" y="90.2" width="10" height="24.8" fill="#9cc9ea"/>
  <rect x="71.0" y="107.6" width="10" height="7.4" fill="#9cc9ea"/>
  <rect x="83.0" y="113.5" width="10" height="1.5" fill="#9cc9ea"/>
  <rect x="95.0" y="114.8" width="10" height="0.2" fill="#9cc9ea"/>
  <rect x="107.0" y="115.0" width="10" height="0.0" fill="#9cc9ea"/>
  <rect x="119.0" y="115.0" width="10" height="0.0" fill="#9cc9ea"/>
  <rect x="131.0" y="115.0" width="10" height="0.0" fill="#9cc9ea"/>
  <text x="16.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="136.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="76.0" y="145.0" font-size="12" text-anchor="middle" fill="currentColor">p = 0.2</text>
  <line x1="160" y1="115" x2="292" y2="115" stroke="currentColor" stroke-width="1.2"/>
  <rect x="161.0" y="114.7" width="10" height="0.3" fill="#7ccf9a"/>
  <rect x="173.0" y="112.3" width="10" height="2.7" fill="#7ccf9a"/>
  <rect x="185.0" y="102.6" width="10" height="12.4" fill="#7ccf9a"/>
  <rect x="197.0" y="82.0" width="10" height="33.0" fill="#7ccf9a"/>
  <rect x="209.0" y="57.3" width="10" height="57.7" fill="#7ccf9a"/>
  <rect x="221.0" y="45.8" width="10" height="69.2" fill="#7ccf9a"/>
  <rect x="233.0" y="57.3" width="10" height="57.7" fill="#7ccf9a"/>
  <rect x="245.0" y="82.0" width="10" height="33.0" fill="#7ccf9a"/>
  <rect x="257.0" y="102.6" width="10" height="12.4" fill="#7ccf9a"/>
  <rect x="269.0" y="112.3" width="10" height="2.7" fill="#7ccf9a"/>
  <rect x="281.0" y="114.7" width="10" height="0.3" fill="#7ccf9a"/>
  <text x="166.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="286.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="226.0" y="145.0" font-size="12" text-anchor="middle" fill="currentColor">p = 0.5</text>
  <line x1="310" y1="115" x2="442" y2="115" stroke="currentColor" stroke-width="1.2"/>
  <rect x="311.0" y="115.0" width="10" height="0.0" fill="#eea66f"/>
  <rect x="323.0" y="115.0" width="10" height="0.0" fill="#eea66f"/>
  <rect x="335.0" y="115.0" width="10" height="0.0" fill="#eea66f"/>
  <rect x="347.0" y="114.8" width="10" height="0.2" fill="#eea66f"/>
  <rect x="359.0" y="113.5" width="10" height="1.5" fill="#eea66f"/>
  <rect x="371.0" y="107.6" width="10" height="7.4" fill="#eea66f"/>
  <rect x="383.0" y="90.2" width="10" height="24.8" fill="#eea66f"/>
  <rect x="395.0" y="58.4" width="10" height="56.6" fill="#eea66f"/>
  <rect x="407.0" y="30.1" width="10" height="84.9" fill="#eea66f"/>
  <rect x="419.0" y="39.5" width="10" height="75.5" fill="#eea66f"/>
  <rect x="431.0" y="84.8" width="10" height="30.2" fill="#eea66f"/>
  <text x="316.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="436.0" y="128.0" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="376.0" y="145.0" font-size="12" text-anchor="middle" fill="currentColor">p = 0.8</text>
</svg>
</div>

With $n = 10$: when $p = 0.5$ the histogram is symmetric about 5. When $p$ is small it piles up near 0 and has a
long tail to the right (it is **skewed right**); when $p$ is large it is the mirror image. As $n$ grows, every
binomial histogram becomes more and more bell-shaped; that is the subject of
[the normal approximation](../level-8/04-normal-approximation.md) in level 8.

The most likely value (the **mode**) is always close to the mean $np$: it is the whole number $k$ with
$np - (1 - p) \le k \le np + p$. For the quiz, $2.5 - 0.75 = 1.75 \le k \le 2.75$, so the mode is 2.

## Worked examples

**1. The quiz, in full.** $X \sim \operatorname{B}(10, \tfrac14)$. Since $p = \tfrac14$ and $1 - p = \tfrac34$,

$$P(X = k) = \binom{10}{k} \frac{3^{10 - k}}{4^{10}}, \qquad 4^{10} = 1\,048\,576.$$

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $P(X = k)$ | 0.0563 | 0.1877 | 0.2816 | 0.2503 | 0.1460 | 0.0584 | 0.0162 | 0.0031 | 0.0004 | 0.00003 | 0.000001 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 220" role="img" aria-label="Bar chart of the binomial distribution with n = 10 and p = 0.25: tallest bars at 2 and 3 correct, very short bars from 6 upward">
  <line x1="40" y1="180" x2="448" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="18" x2="40" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <rect x="44.5" y="151.1" width="28.2" height="28.9" fill="#9cc9ea"/>
  <text x="58.5" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="58.5" y="147.1" font-size="10" text-anchor="middle" fill="currentColor">0.056</text>
  <rect x="81.5" y="83.6" width="28.2" height="96.4" fill="#9cc9ea"/>
  <text x="95.6" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="95.6" y="79.6" font-size="10" text-anchor="middle" fill="currentColor">0.188</text>
  <rect x="118.6" y="35.4" width="28.2" height="144.6" fill="#9cc9ea"/>
  <text x="132.7" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="132.7" y="31.4" font-size="10" text-anchor="middle" fill="currentColor">0.282</text>
  <rect x="155.7" y="51.4" width="28.2" height="128.6" fill="#9cc9ea"/>
  <text x="169.8" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="169.8" y="47.4" font-size="10" text-anchor="middle" fill="currentColor">0.250</text>
  <rect x="192.8" y="105.0" width="28.2" height="75.0" fill="#9cc9ea"/>
  <text x="206.9" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="206.9" y="101.0" font-size="10" text-anchor="middle" fill="currentColor">0.146</text>
  <rect x="229.9" y="150.0" width="28.2" height="30.0" fill="#eea66f"/>
  <text x="244.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="244.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">0.058</text>
  <rect x="267.0" y="171.7" width="28.2" height="8.3" fill="#eea66f"/>
  <text x="281.1" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="281.1" y="167.7" font-size="10" text-anchor="middle" fill="currentColor">0.016</text>
  <rect x="304.1" y="178.4" width="28.2" height="1.6" fill="#eea66f"/>
  <text x="318.2" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <text x="318.2" y="174.4" font-size="10" text-anchor="middle" fill="currentColor">0.003</text>
  <rect x="341.2" y="179.8" width="28.2" height="0.2" fill="#eea66f"/>
  <text x="355.3" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="378.3" y="180.0" width="28.2" height="0.0" fill="#eea66f"/>
  <text x="392.4" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <rect x="415.4" y="180.0" width="28.2" height="0.0" fill="#eea66f"/>
  <text x="429.5" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <text x="244.0" y="214.0" font-size="12" text-anchor="middle" fill="currentColor">number of correct guesses k</text>
</svg>
</div>

The chance of passing is $P(X \ge 5) = 0.0584 + 0.0162 + 0.0031 + 0.0004 + 0.00003 + 0.000001 \approx 0.078$,
about 1 in 13. (Exactly, it is $\tfrac{81\,922}{1\,048\,576}$.) And the chance of getting **every** answer right is
$\left(\tfrac14\right)^{10}$, less than one in a million.

**2. Exactly three right.** $P(X = 3) = \dbinom{10}{3} \left(\tfrac14\right)^3 \left(\tfrac34\right)^7 = 120 \cdot \tfrac{1}{64} \cdot \tfrac{2187}{16\,384} = \tfrac{262\,440}{1\,048\,576} \approx 0.250$.

**3. Free throws.** A basketball player makes 70% of her free throws, independently. She takes 5. What is the chance
she makes at least 4?

$X \sim \operatorname{B}(5, 0.7)$.

- $P(X = 4) = \dbinom54 (0.7)^4 (0.3)^1 = 5 \times 0.2401 \times 0.3 = 0.36015$.
- $P(X = 5) = (0.7)^5 = 0.16807$.
- $P(X \ge 4) = 0.36015 + 0.16807 \approx 0.528$.

So a 70% shooter makes 4 or 5 out of 5 only about half the time. (Whether real shots are independent is a real
question: see the "hot hand" in [level 5](../level-5/06-gamblers-fallacy.md).)

**4. Seeds.** A packet says 90% of its seeds sprout. You plant 12. Chance at least 10 sprout?
$X \sim \operatorname{B}(12, 0.9)$:

- $P(X = 10) = \dbinom{12}{10}(0.9)^{10}(0.1)^2 = 66 \times 0.34868 \times 0.01 \approx 0.2301$;
- $P(X = 11) = 12 \times (0.9)^{11} \times 0.1 \approx 0.3766$;
- $P(X = 12) = (0.9)^{12} \approx 0.2824$.

Total $\approx 0.889$. Mean $np = 10.8$ seeds; $\sigma = \sqrt{12 \times 0.9 \times 0.1} \approx 1.04$.

**5. Is it binomial?** Check BINS each time.

- Roll a die 20 times, count the sixes: binomial, $\operatorname{B}(20, \tfrac16)$.
- Deal 5 cards, count the hearts: **not** binomial. The cards are not put back, so the chance of a heart changes from
  card to card (not independent, not the same $p$). That is the hypergeometric distribution of
  [lesson 6](06-hypergeometric-distribution.md).
- Roll a die until a six appears, count the rolls: **not** binomial. The number of trials is not fixed; it is what we
  are counting. That is the geometric distribution of [lesson 5](05-geometric-distribution.md).

## Try it

1. A fair coin is tossed 10 times. Find $P(\text{exactly } 5 \text{ heads})$ and $P(\text{at least } 8 \text{ heads})$.
2. $X \sim \operatorname{B}(20, 0.25)$. Find the mean, variance and standard deviation.
3. Roll a die 6 times. Find the chance of exactly one six, and of at least one six.
4. A fair coin is tossed 8 times. What is the chance of exactly 4 heads? Is it surprising that the "expected" result
   happens only about a quarter of the time?
5. Which of these are binomial? (a) The number of girls among the next 5 babies born in a hospital (take
   $p = 0.49$). (b) The number of red cards when 3 cards are drawn from a deck without replacement. (c) The number of
   times you check your phone before a message arrives.
6. A longer quiz has 20 questions with 4 choices each, and the pass mark is 10. Use a calculator or spreadsheet to
   find the chance of passing by guessing, and compare with the 10-question quiz.
7. Write $P(X = k + 1) \div P(X = k)$ for $X \sim \operatorname{B}(n, p)$ in simplest form. Use it to explain why the
   bars rise while $k < np - (1 - p)$ and fall after.
8. A factory makes chips of which 2% are faulty, independently. In a box of 50, what is the chance that none is
   faulty? That at most one is faulty?

??? note "Answers"
    1. $P(5) = \tfrac{252}{1024} \approx 0.246$. $P(\ge 8) = \tfrac{45 + 10 + 1}{1024} = \tfrac{56}{1024} \approx 0.0547$.
    2. Mean $20 \times 0.25 = 5$. Variance $20 \times 0.25 \times 0.75 = 3.75$. SD $\sqrt{3.75} \approx 1.94$.
    3. Exactly one: $6 \cdot \tfrac16 \cdot \left(\tfrac56\right)^5 = \left(\tfrac56\right)^5 \approx 0.402$. At least
       one: $1 - \left(\tfrac56\right)^6 \approx 1 - 0.335 = 0.665$.
    4. $\dbinom84 / 2^8 = \tfrac{70}{256} \approx 0.273$. It is not surprising once you see that there are 9 possible
       results (0 to 8) sharing the probability; the middle one is the most likely, and 3 or 5 heads together are
       more likely than exactly 4 (112 out of 256 against 70).
    5. (a) Binomial, $\operatorname{B}(5, 0.49)$, if births are independent. (b) Not binomial: without replacement,
       so the chances change (hypergeometric). (c) Not binomial: the number of trials is not fixed.
    6. $P(X \ge 10) = 1 - P(X \le 9) \approx 0.0139$, about 1 in 72. (In a spreadsheet:
       `=1-BINOM.DIST(9,20,0.25,TRUE)`.) Much smaller than 0.078: with more questions, luck evens out and the score
       stays nearer its mean of 5, as the standard deviation $\sqrt{np(1 - p)}$ grows more slowly than $n$.
    7. $\dfrac{P(k + 1)}{P(k)} = \dfrac{\binom{n}{k+1}}{\binom{n}{k}} \cdot \dfrac{p}{1 - p} = \dfrac{n - k}{k + 1} \cdot \dfrac{p}{1 - p}$.
       The bars rise when this is more than 1: $(n - k)p > (k + 1)(1 - p)$, which simplifies to $k < np - (1 - p)$.
       After that the ratio is less than 1 and the bars fall.
    8. None: $0.98^{50} \approx 0.364$. Exactly one: $50 \times 0.02 \times 0.98^{49} \approx 0.372$. At most one:
       $\approx 0.736$.

## Common mistake

**Forgetting the $\dbinom{n}{k}$.** $(0.25)^3(0.75)^7$ is the chance of one **particular** order, such as right,
right, right, then seven wrong. There are 120 orders with three right answers, and every one counts.

**Using the binomial when the trials are not independent or the chance changes.** Drawing without replacement from a
small group, or counting until something happens, breaks BINS. Check the four conditions before reaching for the
formula.

## Where it leads

- Back: [Spread of a random variable](03-variance-spread.md) · Next: [The geometric distribution](05-geometric-distribution.md)
- [Level 7 page](index.md) · [Probability topic page](../index.md)
- Combinations and Pascal's triangle: [Choosing, not arranging](../../counting/level-5/01-choosing-not-arranging.md)
  and [Pascal's triangle](../../counting/level-5/03-pascals-triangle.md) in Counting.
- For large $n$ the binomial looks like a bell curve: [the normal approximation](../level-8/04-normal-approximation.md).
- Testing whether a coin or a die is fair with the binomial: [Statistics](../../statistics/index.md).
