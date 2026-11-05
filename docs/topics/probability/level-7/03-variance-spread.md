---
title: "Spread of a random variable"
---

# Spread of a random variable

*Probability · level 7, lesson 3 of 7*

## A question to start

You are offered three games, each free to play.

- **Game C:** you are given 1 dollar. No chance involved.
- **Game A:** toss a coin. Heads, you get 2 dollars; tails, nothing.
- **Game B:** roll a die. A six, you get 6 dollars; anything else, nothing.

Work out the expected value of each: Game C gives exactly 1; Game A gives $2 \cdot \tfrac12 = 1$; Game B gives
$6 \cdot \tfrac16 = 1$. All three are worth 1 dollar on average. Yet they clearly do **not** feel the same: Game C is
boring and safe, Game B is a long shot. The expected value cannot tell them apart. What number can?

## The idea

### Deviations from the mean

The **mean** $\mu = E(X)$ tells you where a random variable is centred. To describe how **spread out** it is, look at
how far each value lies from the mean. The **deviation** of a value $x$ is $x - \mu$.

For Game B, $\mu = 1$. The value 6 has deviation $+5$; the value 0 has deviation $-1$.

The obvious idea, "the average deviation", fails completely. By the rules of the last lesson,

$$E(X - \mu) = E(X) - \mu = 0$$

for **every** random variable. The positive and negative deviations always cancel; that is what it means for $\mu$ to
be the balance point. So we need to make the deviations positive before averaging. Squaring does that, and (as you
will see) it gives rules that are much easier to work with than taking absolute values.

### Variance and standard deviation

The **variance** of $X$ is the expected **squared** deviation:

$$\operatorname{Var}(X) = E\big((X - \mu)^2\big) = \sum (x - \mu)^2 \, P(X = x).$$

It is often written $\sigma^2$ (sigma squared). Because the deviations were squared, the variance is in squared units
(dollars squared, which means nothing to anyone). So we take the square root to get back to the original units:

$$\sigma = \operatorname{SD}(X) = \sqrt{\operatorname{Var}(X)},$$

the **standard deviation**. Roughly, $\sigma$ is a typical distance of $X$ from its mean.

Now the three games:

| Game | values and chances | $\operatorname{Var}$ | $\sigma$ |
| --- | --- | --- | --- |
| C | 1 for sure | $(1 - 1)^2 = 0$ | 0 |
| A | 0 or 2, each $\tfrac12$ | $(0 - 1)^2 \cdot \tfrac12 + (2 - 1)^2 \cdot \tfrac12 = 1$ | 1 |
| B | 0 w.p. $\tfrac56$, 6 w.p. $\tfrac16$ | $(0 - 1)^2 \cdot \tfrac56 + (6 - 1)^2 \cdot \tfrac16 = \tfrac{5 + 25}{6} = 5$ | $\sqrt5 \approx 2.24$ |

("w.p." means "with probability".) Same mean, very different spread: Game B's standard deviation is more than twice
Game A's. The picture shows why: Game B puts a small chance a long way from the mean.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 220" role="img" aria-label="Two games with the same mean of 1 dollar. Game A pays 0 or 2 dollars, each with chance one half. Game B pays 0 dollars with chance five sixths or 6 dollars with chance one sixth">
  <line x1="40" y1="180" x2="448" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <text x="50.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="114.7" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="179.3" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="244.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="308.7" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="373.3" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="438.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="250.0" y="214.0" font-size="12" text-anchor="middle" fill="currentColor">payout in dollars</text>
  <rect x="30.0" y="100.0" width="18" height="80.0" fill="#eea66f"/>
  <text x="39.0" y="96.0" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <rect x="159.3" y="100.0" width="18" height="80.0" fill="#eea66f"/>
  <text x="168.3" y="96.0" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <rect x="52.0" y="46.7" width="18" height="133.3" fill="#9cc9ea"/>
  <text x="61.0" y="42.7" font-size="10" text-anchor="middle" fill="currentColor">5/6</text>
  <rect x="440.0" y="153.3" width="18" height="26.7" fill="#9cc9ea"/>
  <text x="449.0" y="149.3" font-size="10" text-anchor="middle" fill="currentColor">1/6</text>
  <line x1="114.7" y1="20" x2="114.7" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="118.7" y="28.0" font-size="11" text-anchor="start" fill="currentColor">mean 1</text>
  <rect x="310" y="20" width="12" height="12" fill="#eea66f"/>
  <text x="328.0" y="30.0" font-size="11" text-anchor="start" fill="currentColor">game A (coin)</text>
  <rect x="310" y="40" width="12" height="12" fill="#9cc9ea"/>
  <text x="328.0" y="50.0" font-size="11" text-anchor="start" fill="currentColor">game B (die)</text>
</svg>
</div>

### A quicker formula

Expanding the square gives a formula that is usually faster:

$$\operatorname{Var}(X) = E(X^2) - \mu^2,$$

"the mean of the square minus the square of the mean". Here is why. $(X - \mu)^2 = X^2 - 2\mu X + \mu^2$. Take
expected values using the rules from the last lesson ($\mu$ is just a number):

$$E\big((X - \mu)^2\big) = E(X^2) - 2\mu E(X) + \mu^2 = E(X^2) - 2\mu^2 + \mu^2 = E(X^2) - \mu^2.$$

Here $E(X^2) = \sum x^2 P(X = x)$: square the **values**, keep the probabilities.

**One die.** $\mu = 3.5$ and $E(X^2) = \tfrac{1 + 4 + 9 + 16 + 25 + 36}{6} = \tfrac{91}{6}$. So

$$\operatorname{Var}(X) = \tfrac{91}{6} - \left(\tfrac72\right)^2 = \tfrac{182}{12} - \tfrac{147}{12} = \tfrac{35}{12} \approx 2.92, \qquad \sigma \approx 1.71.$$

Since $\operatorname{Var}(X) \ge 0$ always (it is an average of squares), the formula also proves a fact that looks
surprising at first: $E(X^2) \ge \big(E(X)\big)^2$ for every random variable.

### Rules for variance

**Shifting and scaling.** For numbers $a$ and $b$,

$$\operatorname{Var}(aX + b) = a^2 \operatorname{Var}(X), \qquad \operatorname{SD}(aX + b) = |a| \operatorname{SD}(X).$$

Why: adding $b$ moves every value and the mean by the same amount, so the deviations do not change. Multiplying by
$a$ multiplies every deviation by $a$, so every **squared** deviation by $a^2$. If a stall pays 10 dollars per spot on
a die instead of 1, the standard deviation of the payout grows from 1.71 to 17.1 dollars; charging an entry fee changes
the mean but not the spread at all.

**Adding independent random variables.** If $X$ and $Y$ are **independent** (knowing one tells you nothing about the
other), then

$$\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y).$$

Why: write $X + Y - (\mu_X + \mu_Y) = (X - \mu_X) + (Y - \mu_Y)$ and square:

$$(X - \mu_X)^2 + (Y - \mu_Y)^2 + 2(X - \mu_X)(Y - \mu_Y).$$

The expected value of the first two terms gives the two variances. For independent $X$ and $Y$, the expected value
of a product is the product of the expected values, so the last term has expected value
$2 \cdot E(X - \mu_X) \cdot E(Y - \mu_Y) = 2 \cdot 0 \cdot 0 = 0$.

So for the sum of two dice, $\operatorname{Var} = \tfrac{35}{12} + \tfrac{35}{12} = \tfrac{35}{6} \approx 5.83$ and
$\sigma \approx 2.42$. Notice that **variances** add, **not** standard deviations: $1.71 + 1.71 = 3.42$ would be
wrong. Spreads add "like the sides of a right triangle": $\sigma_{X+Y} = \sqrt{\sigma_X^2 + \sigma_Y^2}$.

Two warnings about this rule. It needs independence: if $Y = X$ (the "same die counted twice"), then
$\operatorname{Var}(2X) = 4\operatorname{Var}(X)$, not $2\operatorname{Var}(X)$. And for a **difference** of
independent variables the variances still **add**: $\operatorname{Var}(X - Y) = \operatorname{Var}(X) + (-1)^2\operatorname{Var}(Y)$.
Subtracting a random amount adds uncertainty; it does not cancel it.

### What the standard deviation tells you

For many distributions, most of the probability lies within one or two standard deviations of the mean. For the sum
of two dice, $\mu \pm \sigma$ is about $4.6$ to $9.4$, which contains the values 5 to 9, with probability
$\tfrac{4 + 5 + 6 + 5 + 4}{36} = \tfrac{24}{36} = \tfrac23$. For bell-shaped distributions this "about two thirds
within one standard deviation" turns out to be close to a rule, as you will see with the normal distribution in
[level 8](../level-8/index.md).

### Why spread matters

Expected value measures what you get on average. Standard deviation measures **risk**: how far a single result is
likely to be from that average. Investors, insurers and engineers care about both. An insurance company selling
thousands of independent policies faces little risk **per policy** (the variances add, so the standard deviation of
the total grows only like the square root of the number of policies, while the expected total grows in proportion to
it; level 8 explains this), while one household facing one possible large loss faces a lot. That is why insurance can make
sense for both sides even though its expected value favours the insurer.

<figure class="play" data-play="binom"><span class="ai-tag">AI-created</span><figcaption><b>Spread.</b> The variance n p (1 − p) is biggest when p = 0.5.</figcaption></figure>

## Worked examples

**1. Heads in three flips.** From lesson 1, $H$ takes 0, 1, 2, 3 with probabilities $\tfrac18$, $\tfrac38$, $\tfrac38$,
$\tfrac18$.

- $E(H) = \tfrac{0 + 3 + 6 + 3}{8} = \tfrac{12}{8} = 1.5$.
- $E(H^2) = \tfrac{0 \cdot 1 + 1 \cdot 3 + 4 \cdot 3 + 9 \cdot 1}{8} = \tfrac{24}{8} = 3$.
- $\operatorname{Var}(H) = 3 - 1.5^2 = 0.75$, so $\sigma = \sqrt{0.75} \approx 0.87$.

Check with the addition rule: $H$ is the sum of three independent flips, each 0 or 1 with chance $\tfrac12$. One flip
has variance $E(I^2) - (E I)^2 = \tfrac12 - \tfrac14 = \tfrac14$, so three flips have $3 \cdot \tfrac14 = 0.75$. ✓

**2. The spinner.** $X$ is 0, 3 or 12 with probabilities $\tfrac12, \tfrac13, \tfrac16$. The mean is 3 (last lesson).

- $E(X^2) = 0 \cdot \tfrac12 + 9 \cdot \tfrac13 + 144 \cdot \tfrac16 = 3 + 24 = 27$.
- $\operatorname{Var}(X) = 27 - 9 = 18$ and $\sigma = \sqrt{18} \approx 4.24$.

The standard deviation is bigger than the mean: a sign of a long-shot payout.

**3. Scaling.** A game pays $Y = 5X - 2$ dollars, where $X$ is the spinner above. Then $E(Y) = 5 \cdot 3 - 2 = 13$,
$\operatorname{Var}(Y) = 25 \cdot 18 = 450$, $\sigma_Y = 5 \cdot 4.24 \approx 21.2$ dollars.

**4. Three dice.** The sum $T$ of three independent dice has $E(T) = 3 \cdot 3.5 = 10.5$ and
$\operatorname{Var}(T) = 3 \cdot \tfrac{35}{12} = 8.75$, so $\sigma \approx 2.96$. Doing this from the full table of
$6^3 = 216$ outcomes would take a long time; the rules do it in one line.

## Try it

1. $X$ is 1 or 5, each with probability $\tfrac12$. Find $E(X)$, $\operatorname{Var}(X)$ and $\sigma$ without a
   formula sheet. Explain the answer for $\sigma$ in words.
2. Two coins are tossed; $X$ is the number of heads. Find $\operatorname{Var}(X)$.
3. $\operatorname{Var}(X) = 4$. Find $\operatorname{Var}(2X + 5)$ and $\operatorname{SD}(2X + 5)$.
4. Two dice are rolled. Find the variance of (first die) $-$ (second die). Why is it not 0?
5. For the larger of two dice, $E(M) = \tfrac{161}{36}$ and $E(M^2) = \tfrac{791}{36}$. Find $\operatorname{Var}(M)$
   to 3 decimal places. Is $M$ more or less spread out than a single die? Does that make sense?
6. Game D pays 100 dollars with probability $\tfrac{1}{100}$ and nothing otherwise. Find its mean and standard
   deviation and compare with Games A and B.
7. Show that the variance of an indicator (1 with probability $p$, 0 otherwise) is $p(1 - p)$. For which $p$ is it
   largest?
8. Explain why $\operatorname{Var}(X) = 0$ only if $X$ takes one value with probability 1.

??? note "Answers"
    1. $E(X) = 3$. Both values are 2 away from the mean, so every squared deviation is 4 and
       $\operatorname{Var}(X) = 4$, $\sigma = 2$. In words: the value is always exactly 2 from the mean, so the
       typical distance is 2.
    2. $E(X) = 1$, $E(X^2) = 0 \cdot \tfrac14 + 1 \cdot \tfrac12 + 4 \cdot \tfrac14 = 1.5$, so
       $\operatorname{Var}(X) = 1.5 - 1 = 0.5$. (Or $2 \times \tfrac14$ by the addition rule.)
    3. $\operatorname{Var}(2X + 5) = 4 \cdot 4 = 16$; $\operatorname{SD} = 4$.
    4. $\operatorname{Var}(X - Y) = \tfrac{35}{12} + \tfrac{35}{12} = \tfrac{35}{6} \approx 5.83$. It is not 0
       because the difference really does vary, from $-5$ to $+5$; subtracting an independent random amount adds
       uncertainty. (Its mean is 0, which is a different thing.)
    5. $\operatorname{Var}(M) = \tfrac{791}{36} - \left(\tfrac{161}{36}\right)^2 = \tfrac{28476 - 25921}{1296} = \tfrac{2555}{1296} \approx 1.971$.
       That is less than a single die's 2.917. It makes sense: $M$ piles up near 5 and 6, so it is more concentrated.
    6. Mean $100 \cdot \tfrac{1}{100} = 1$. $E(X^2) = 10000 \cdot \tfrac{1}{100} = 100$, so
       $\operatorname{Var} = 100 - 1 = 99$ and $\sigma = \sqrt{99} \approx 9.95$. Same mean as A and B, much larger
       spread: it is a lottery.
    7. $E(I) = p$ and $E(I^2) = 1^2 \cdot p + 0 = p$ (since $1^2 = 1$ and $0^2 = 0$). So
       $\operatorname{Var}(I) = p - p^2 = p(1 - p)$. As a function of $p$ this is a parabola opening downward with
       roots 0 and 1, so it is largest halfway, at $p = \tfrac12$, where it is $\tfrac14$. A fair coin is the most
       uncertain yes/no.
    8. $\operatorname{Var}(X)$ is a sum of terms $(x - \mu)^2 P(x)$, none negative. It is 0 only if every term is 0,
       so every value with positive probability has $x - \mu = 0$, that is $x = \mu$. So $X$ always equals $\mu$.

## Common mistake

**Adding standard deviations.** For independent variables, **variances** add. Two dice have
$\sigma = \sqrt{35/6} \approx 2.42$, not $1.71 + 1.71 = 3.42$.

**Forgetting to square the mean.** In $\operatorname{Var}(X) = E(X^2) - \mu^2$, the first term squares each value
before averaging, and the second squares the average. Writing $E(X^2) - \mu$, or computing $E(X^2)$ as $\mu^2$, gives
nonsense (often a negative "variance", which should always set off an alarm).

## Where it leads

- Back: [Expected value](02-expected-value.md) · Next: [The binomial distribution](04-binomial-distribution.md)
- [Level 7 page](index.md) · [Probability topic page](../index.md)
- The standard deviation of data uses the same idea: [Statistics](../../statistics/index.md).
- "Variances add like the sides of a right triangle" is Pythagoras in disguise: see [Geometry](../../geometry/index.md).
- Spread is what the law of large numbers and the normal distribution are built on: [level 8](../level-8/index.md).
