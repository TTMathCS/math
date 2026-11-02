---
title: "The geometric distribution"
---

# The geometric distribution

*Probability · level 7, lesson 5 of 7*

## A question to start

In a board game you cannot start moving until you roll a six. On average, how many rolls does it take?

Most people answer 6, and that is right. Now a harder question: what is the **most likely** number of rolls? And what
is the chance you are still waiting after 10 rolls? The answers are surprising. The single most likely result is that
you roll a six **straight away**, on roll 1. And about 1 player in 6 is still waiting after 10 rolls. The average is 6,
the most likely is 1, and the typical player waits about 4. This lesson explains all three numbers.

## The idea

### Waiting for the first success

Repeat independent trials, each with success chance $p$, and **stop at the first success**. Let $X$ be the number of
the trial on which the first success happens. $X$ can be $1, 2, 3, \dots$ with no upper limit. A random variable like
this has a **geometric distribution**, written $X \sim \operatorname{Geo}(p)$.

Compare with the binomial. There, the number of trials was fixed and we counted successes. Here, the number of
successes is fixed (just one) and we count trials.

### The formula

For the first success to be on trial $k$, the first $k - 1$ trials must all fail and trial $k$ must succeed. By
independence, multiply:

$$P(X = k) = \underbrace{(1 - p)(1 - p) \cdots (1 - p)}_{k - 1 \text{ failures}} \cdot p = (1 - p)^{k - 1} p.$$

There is no $\dbinom{n}{k}$ this time: only **one** order is allowed (all the failures first).

For the six: $P(X = 1) = \tfrac16 \approx 0.167$, $P(X = 2) = \tfrac56 \cdot \tfrac16 = \tfrac{5}{36} \approx 0.139$,
$P(X = 3) = \left(\tfrac56\right)^2 \tfrac16 = \tfrac{25}{216} \approx 0.116$, and so on. Each bar is $\tfrac56$ of the
one before it, so the histogram falls away steadily, for ever.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 220" role="img" aria-label="Bar chart of the waiting time for the first six: the bar at 1 is the tallest at 1/6, and each bar is five sixths of the one before">
  <line x1="40" y1="180" x2="448" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="18" x2="40" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <rect x="42.4" y="35.4" width="15.5" height="144.6" fill="#9cc9ea"/>
  <text x="50.2" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="50.2" y="31.4" font-size="10" text-anchor="middle" fill="currentColor">0.167</text>
  <rect x="62.8" y="59.5" width="15.5" height="120.5" fill="#9cc9ea"/>
  <text x="70.6" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="70.6" y="55.5" font-size="10" text-anchor="middle" fill="currentColor">0.139</text>
  <rect x="83.2" y="79.6" width="15.5" height="100.4" fill="#9cc9ea"/>
  <text x="91.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="91.0" y="75.6" font-size="10" text-anchor="middle" fill="currentColor">0.116</text>
  <rect x="103.6" y="96.3" width="15.5" height="83.7" fill="#9cc9ea"/>
  <text x="111.4" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="124.0" y="110.2" width="15.5" height="69.8" fill="#9cc9ea"/>
  <text x="131.8" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="144.4" y="121.9" width="15.5" height="58.1" fill="#eea66f"/>
  <text x="152.2" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="164.8" y="131.6" width="15.5" height="48.4" fill="#9cc9ea"/>
  <rect x="185.2" y="139.6" width="15.5" height="40.4" fill="#9cc9ea"/>
  <text x="193.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="205.6" y="146.4" width="15.5" height="33.6" fill="#9cc9ea"/>
  <rect x="226.0" y="152.0" width="15.5" height="28.0" fill="#9cc9ea"/>
  <text x="233.8" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <rect x="246.4" y="156.6" width="15.5" height="23.4" fill="#9cc9ea"/>
  <rect x="266.8" y="160.5" width="15.5" height="19.5" fill="#9cc9ea"/>
  <text x="274.6" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <rect x="287.2" y="163.8" width="15.5" height="16.2" fill="#9cc9ea"/>
  <rect x="307.6" y="166.5" width="15.5" height="13.5" fill="#9cc9ea"/>
  <text x="315.4" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">14</text>
  <rect x="328.0" y="168.7" width="15.5" height="11.3" fill="#9cc9ea"/>
  <rect x="348.4" y="170.6" width="15.5" height="9.4" fill="#9cc9ea"/>
  <text x="356.2" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">16</text>
  <rect x="368.8" y="172.2" width="15.5" height="7.8" fill="#9cc9ea"/>
  <rect x="389.2" y="173.5" width="15.5" height="6.5" fill="#9cc9ea"/>
  <text x="397.0" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">18</text>
  <rect x="409.6" y="174.6" width="15.5" height="5.4" fill="#9cc9ea"/>
  <rect x="430.0" y="175.5" width="15.5" height="4.5" fill="#9cc9ea"/>
  <text x="437.8" y="195.0" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <text x="244.0" y="214.0" font-size="12" text-anchor="middle" fill="currentColor">roll k on which the first 6 appears</text>
</svg>
</div>

This is why the most likely value is always 1: every later value needs one more failure first, and each extra failure
multiplies by $1 - p < 1$. The bars form a **geometric sequence** (each term a fixed multiple of the one before),
which gives the distribution its name.

### The probabilities add to 1

There are infinitely many values, so the check needs an infinite sum: the **geometric series**. For $|r| < 1$,

$$1 + r + r^2 + r^3 + \dots = \frac{1}{1 - r}.$$

(Reason: call the sum $S$. Then $rS = r + r^2 + \dots$ is $S$ without its first term, so $S - rS = 1$ and
$S = \tfrac{1}{1 - r}$.) With $r = 1 - p$:

$$\sum_{k=1}^{\infty} (1 - p)^{k - 1} p = p \cdot \frac{1}{1 - (1 - p)} = p \cdot \frac1p = 1. \checkmark$$

So, with probability 1, a success does eventually come. You will not wait for ever.

### The tail: still waiting after $k$ trials

"Still waiting after $k$ trials" means the first $k$ trials all failed:

$$P(X > k) = (1 - p)^k.$$

This is often the most useful formula. For the six: $P(X > 10) = \left(\tfrac56\right)^{10} \approx 0.162$, about 1
in 6. And $P(X \le k) = 1 - (1 - p)^k$, the chance the success has come by trial $k$.

The **median** wait is the first $k$ with $P(X \le k) \ge \tfrac12$. For the six:
$P(X \le 3) = 1 - \left(\tfrac56\right)^3 \approx 0.421$ and $P(X \le 4) = 1 - \left(\tfrac56\right)^4 \approx 0.518$.
So the median is 4: half the players are moving by their fourth roll.

### The expected wait is $\dfrac1p$

**Proof 1: the first step.** Let $\mu = E(X)$. Make the first trial. With probability $p$ it succeeds and the wait was
1. With probability $1 - p$ it fails; then you have used 1 trial and are **exactly back at the start**, because the
trials are independent, so you expect $\mu$ more. Therefore

$$\mu = p \cdot 1 + (1 - p)(1 + \mu) = 1 + (1 - p)\mu \quad \Longrightarrow \quad p\mu = 1 \quad \Longrightarrow \quad \mu = \frac1p.$$

**Proof 2: adding the tails.** For a random variable taking values $1, 2, 3, \dots$, $X$ counts how many of the
statements "$X > 0$", "$X > 1$", "$X > 2$", ... are true (if $X = 3$, exactly the first three are true). So
$E(X) = \sum_{k \ge 0} P(X > k)$, and

$$E(X) = 1 + (1 - p) + (1 - p)^2 + \dots = \frac{1}{1 - (1 - p)} = \frac1p.$$

For the six, $E(X) = 6$. For an event with chance 1 in 100 per try, you expect to wait 100 tries.

The mean (6) is much larger than the median (4) because of the long tail: a few players wait 15, 20 or 30 rolls, and
they pull the average up. This is typical of **skewed** distributions; see the mean and median in
[Statistics](../../statistics/index.md).

The same first-step idea, applied to $E(X^2)$, gives the variance:

$$\operatorname{Var}(X) = \frac{1 - p}{p^2}.$$

(Sketch: $E(X^2) = p \cdot 1 + (1 - p)E\big((1 + X)^2\big)$; expand, use $E(X) = \tfrac1p$, and solve to get
$E(X^2) = \tfrac{2 - p}{p^2}$; subtract $\mu^2 = \tfrac{1}{p^2}$.) For the six, $\operatorname{Var}(X) = \tfrac{5/6}{1/36} = 30$
and $\sigma \approx 5.5$: the waiting time is very spread out.

### No memory

Suppose you have already failed 10 times. What is the chance you wait more than 3 **further** trials?

$$P(X > 13 \mid X > 10) = \frac{P(X > 13)}{P(X > 10)} = \frac{(1 - p)^{13}}{(1 - p)^{10}} = (1 - p)^3 = P(X > 3).$$

Exactly the same as for someone just starting. In general $P(X > m + n \mid X > m) = P(X > n)$. The geometric
distribution is **memoryless**: the past failures do not bring the success any closer. This is the
[gambler's fallacy](../level-5/06-gamblers-fallacy.md) seen precisely. The die is not "due" a six.

### A note on two conventions

Some books let the geometric variable count the **failures before** the first success, $Y = X - 1$, with values
$0, 1, 2, \dots$ and mean $\tfrac1p - 1$. Both are fine; always check which one a calculator or book means.

## Worked examples

**1. First six on the third roll.** $P(X = 3) = \left(\tfrac56\right)^2 \cdot \tfrac16 = \tfrac{25}{216} \approx 0.116$.

**2. Double six (the story goes, a 17th-century puzzle).** The chance of a double six with two dice is
$\tfrac{1}{36}$. The expected wait is 36 throws. Is it a good bet that a double six appears within 24 throws?

$$P(X \le 24) = 1 - \left(\tfrac{35}{36}\right)^{24} \approx 1 - 0.509 = 0.491.$$

Just under a half, so no. With 25 throws, $1 - \left(\tfrac{35}{36}\right)^{25} \approx 0.506$, just over. The story
goes that the gambler Chevalier de Méré lost money on the 24-throw bet and asked Blaise Pascal why; this is a cousin of
the "at least one six in four rolls" puzzle from [level 5](../level-5/04-at-least-one.md).

**3. Free throws until a miss.** A player makes 70% of free throws. She shoots until her first miss. "Success" here is
a **miss**, so $p = 0.3$. Expected number of shots: $\tfrac{1}{0.3} \approx 3.33$. Chance she makes the first 5 and
is still going: $P(X > 5) = 0.7^5 \approx 0.168$.

**4. Collecting all four prizes.** In [level 4](../level-4/05-simulations.md) you simulated buying cereal boxes until you had all
4 prizes (each box has one, equally likely). Now it can be done exactly. Split the wait into stages:

- the first box always gives a new prize: 1 box;
- then a new prize has chance $\tfrac34$ per box: expected wait $\tfrac43$;
- then chance $\tfrac24$: expected $\tfrac42 = 2$;
- then chance $\tfrac14$: expected 4.

Each stage is a geometric wait, and expected values add:

$$1 + \tfrac43 + 2 + 4 = \tfrac{25}{3} \approx 8.33 \text{ boxes}.$$

The last prize takes the longest: on average almost half the total. This is the **coupon collector** problem.

## Try it

1. Toss a fair coin until the first head. Find $P(X = 4)$, $P(X > 3)$ and $E(X)$.
2. Roll two dice until the sum is 7. What is the expected number of rolls?
3. A website crashes with probability 0.05 on any day, independently. Find the expected number of days until the first
   crash, and the chance it goes 30 days without one.
4. For $X \sim \operatorname{Geo}(0.2)$, find the mean, variance and standard deviation.
5. You have rolled a die 8 times without a six. What is the chance the next six comes within the next 2 rolls? Explain
   why the 8 failures do not matter.
6. How many boxes do you expect to buy to collect all 6 equally likely prizes? Which stage takes longest?
7. Find the median waiting time for a double six (chance $\tfrac{1}{36}$ per throw), and compare it with the mean of 36.
8. Show that $P(X \text{ is odd}) = \dfrac{1}{2 - p}$. (Hint: the odd values form a geometric series with ratio
   $(1 - p)^2$.) For a die, who is more likely to roll the first six: the player who rolls first or second, taking
   turns?

??? note "Answers"
    1. $P(X = 4) = \left(\tfrac12\right)^3 \cdot \tfrac12 = \tfrac{1}{16}$. $P(X > 3) = \left(\tfrac12\right)^3 = \tfrac18$.
       $E(X) = \tfrac{1}{1/2} = 2$.
    2. $P(\text{sum } 7) = \tfrac{6}{36} = \tfrac16$, so expect 6 rolls.
    3. Expected $\tfrac{1}{0.05} = 20$ days. No crash in 30 days: $0.95^{30} \approx 0.215$.
    4. Mean $\tfrac{1}{0.2} = 5$. Variance $\tfrac{0.8}{0.04} = 20$. SD $\sqrt{20} \approx 4.47$.
    5. By the memoryless property it is the same as for a fresh start: $P(X \le 2) = 1 - \left(\tfrac56\right)^2 = \tfrac{11}{36} \approx 0.306$.
       The die has no memory; the 8 failures change nothing about the next rolls.
    6. $\tfrac66 + \tfrac65 + \tfrac64 + \tfrac63 + \tfrac62 + \tfrac61 = 6\left(1 + \tfrac12 + \tfrac13 + \tfrac14 + \tfrac15 + \tfrac16\right) = 14.7$
       boxes. The last stage (chance $\tfrac16$ per box) takes longest: 6 boxes on average.
    7. We need the first $k$ with $1 - \left(\tfrac{35}{36}\right)^k \ge \tfrac12$. From worked example 2,
       $k = 24$ gives 0.491 and $k = 25$ gives 0.506, so the median is **25**, well below the mean of 36. The long
       tail pulls the mean up.
    8. $P(X \text{ odd}) = p + (1 - p)^2 p + (1 - p)^4 p + \dots = \dfrac{p}{1 - (1 - p)^2} = \dfrac{p}{p(2 - p)} = \dfrac{1}{2 - p}$.
       The first player wins if the first six is on roll 1, 3, 5, ..., so with chance $\tfrac{1}{2 - 1/6} = \tfrac{6}{11} \approx 0.545$.
       Going first is an advantage.

## Common mistake

**Thinking the most likely wait is the average wait.** For a six, the average wait is 6 rolls, but $P(X = 6)$ is only
about 0.067, and $X = 1$ is the most likely single value. A long tail makes the mean much bigger than the typical
value.

**Believing a success is "due".** After many failures, the chance of success on the next trial is still $p$. The
geometric distribution has no memory, and neither do dice.

## Where it leads

- Back: [The binomial distribution](04-binomial-distribution.md) · Next: [The hypergeometric distribution](06-hypergeometric-distribution.md)
- [Level 7 page](index.md) · [Probability topic page](../index.md)
- Geometric sequences and series: [Patterns](../../patterns/index.md) and [Infinity](../../infinity/index.md); the series
  proof in full is in [U of T MAT137, unit 13](../../../uoft/MAT137/unit13.md).
- The continuous cousin of this memoryless wait (the exponential distribution) appears with continuous random
  variables in [level 8](../level-8/02-continuous-random-variables.md).
