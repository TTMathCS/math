---
title: "Beyond: Expected value"
---

# Beyond: What is a game worth? Expected value

*Probability · step 5 of 5*

## A question to start

At a school fair, a stall says: *Pay 1 dollar and roll a dice. Roll a 6 and win 5 dollars!* Should you play?

Most of the time you lose your dollar. Sometimes you win 5 dollars, which feels great. Whether the game is worth playing
depends on what happens **on average**, if you played it many, many times. That average has a name, the **expected
value**, and on this page you will see that this stall takes about 17 cents from each player, every game, in the long
run. You will also see how to make any game fair, and how long you should expect to wait for a 6.

## The idea

### Random variables

A **random variable** is a number whose value is decided by chance: the number a dice shows, the number of heads in
10 tosses, the money you win in a game. We use a capital letter, like $X$, for it. Each value it can take has a
probability, and a table of values and probabilities is its **probability distribution**.

For the school-fair stall, let $X$ be your **profit** in dollars (what you win, minus the 1 dollar you paid):

| Roll | 6 | 1 to 5 |
| --- | --- | --- |
| Profit $x$ | $+4$ | $-1$ |
| Probability | $\tfrac16$ | $\tfrac56$ |

### Expected value: the long-run average

Imagine playing 600 times. You expect about 100 sixes (a profit of 4 dollars each) and about 500 other rolls (losing 1 dollar each).
Total profit: $100 \times 4 + 500 \times (-1) = -100$ dollars. Per game: $-100 \div 600 = -\tfrac16$ of a dollar.

The 600 cancels out, which shows the general rule. The **expected value** of $X$, written $E(X)$, is each value
times its probability, all added up:

$$E(X) = \sum x \cdot P(X = x).$$

For the stall:

$$E(X) = 4 \times \frac16 + (-1) \times \frac56 = \frac{4 - 5}{6} = -\frac16 \approx -0.17.$$

Players lose about 17 cents per game on average. The expected value does **not** have to be a value you can actually
get. For one dice, $E = \dfrac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$, though nobody ever rolls 3.5. It is a long-run
average, not a prediction for one go.

### Fair games, precisely

In the Play step, a fair game was one where everyone had the same chance. With money involved, a better definition
is: a game is **fair** when the expected profit is **0**. Then nobody gains or loses in the long run.

To make the stall fair, choose the prize $w$ so that the expected amount you win equals the 1 dollar you pay:

$$w \times \frac16 = 1 \quad\Longrightarrow\quad w = 6.$$

A prize of 6 dollars makes it fair. Any fair stall would raise no money, which is why fair stalls are rare.

### Adding expected values

A very useful fact: **the expected value of a sum is the sum of the expected values**,

$$E(X + Y) = E(X) + E(Y),$$

and this is true even when $X$ and $Y$ are not independent. Roll two dice: each has expected value 3.5, so the
expected total is $3.5 + 3.5 = 7$. (You can check this the long way with the 36-outcome table from the Explore step:
the totals add to 252, and $252 \div 36 = 7$.)

### The binomial distribution

Repeat the same experiment $n$ times, independently, where each try is a **success** with probability $p$. The
number of successes is a random variable with a famous distribution. To get exactly $k$ successes:

- choose **which** $k$ of the $n$ tries are the successes: $\dbinom{n}{k}$ ways (from
  [Counting](../counting/04-master.md));
- each such pattern has probability $p^k (1 - p)^{n - k}$ (multiply along the path).

$$P(\text{exactly } k \text{ successes}) = \binom{n}{k} p^k (1 - p)^{n - k}.$$

This is the **binomial distribution**. Its expected value is simply $np$: each try contributes $p$ on average, and
expected values add.

**Example.** Toss a coin 10 times. $P(\text{exactly 5 heads}) = \dbinom{10}{5} \left(\tfrac12\right)^{10} = \dfrac{252}{1024} \approx 0.246$.
Even though 5 is the expected number, it happens less than a quarter of the time.

### Waiting for a 6

How many rolls do you expect to need before the first 6? Call the answer $E$. Roll once. With probability
$\tfrac16$ you are done after 1 roll. With probability $\tfrac56$ you have used 1 roll and are back where you started,
still expecting $E$ more. So

$$E = 1 + \frac56 E \quad\Longrightarrow\quad \frac16 E = 1 \quad\Longrightarrow\quad E = 6.$$

In general, if something has probability $p$ each try, you expect to wait $\dfrac1p$ tries.

## Worked examples

**1. A raffle.** 500 tickets are sold at 2 dollars each. There is one prize of 100 dollars and four prizes of 25 dollars. What is the expected
profit from one ticket?

- Expected prize money: $100 \times \dfrac{1}{500} + 25 \times \dfrac{4}{500} = \dfrac{100 + 100}{500} = 0.40$ dollars.
- Expected profit: $0.40 - 2 = -1.60$ dollars.

On average, each ticket loses 1.60 dollars. That is fine for a raffle that raises money for a good cause, and it is exactly
how the organisers make $1000 - 200 = 800$ dollars.

**2. Guessing on a test.** A test has 10 questions, each with 4 choices. You guess every answer at random.

- Each question is a success with $p = \tfrac14$. Expected number right: $np = 10 \times \tfrac14 = 2.5$.
- Probability of exactly 3 right: $\dbinom{10}{3} \left(\tfrac14\right)^3 \left(\tfrac34\right)^7 = 120 \times \dfrac{1}{64} \times \dfrac{2187}{16384} \approx 0.250$.

**3. At least two sixes.** Roll a dice 5 times. What is the probability of at least two 6s? Use the complement:
"at least two" is everything except "none" and "exactly one".

- $P(\text{none}) = \left(\tfrac56\right)^5 = \dfrac{3125}{7776}$.
- $P(\text{exactly one}) = \dbinom51 \left(\tfrac16\right)\left(\tfrac56\right)^4 = 5 \times \dfrac{625}{7776} = \dfrac{3125}{7776}$.
- $P(\text{at least two}) = 1 - \dfrac{3125 + 3125}{7776} = \dfrac{1526}{7776} \approx 0.196$.

## Try it

1. A spinner gives 0 points with probability $\tfrac12$, 3 points with probability $\tfrac13$, and 12 points with
   probability $\tfrac16$. What is the expected score?
2. A game costs 2 dollars. You toss two coins and receive 5 dollars if both are heads. Is it fair? What price would make it fair?
3. A coin is tossed 20 times. What is the expected number of heads? What is the probability of exactly 10 heads?
4. On average, how many tosses of a coin do you need to get the first head?
5. A phone costs 300 dollars. There is a 5% chance it breaks in a year. Insurance costs 20 dollars a year. What is the expected
   cost of a broken phone, without insurance? Why might someone still buy the insurance?

??? note "Answers"
    1. $0 \times \dfrac12 + 3 \times \dfrac13 + 12 \times \dfrac16 = 0 + 1 + 2 = 3$ points.
    2. $P(\text{two heads}) = \dfrac14$, so the expected amount received is $5 \times \dfrac14 = 1.25$ dollars. The
       expected profit is $1.25 - 2 = -0.75$ dollars: not fair. A price of 1.25 dollars would make it fair.
    3. Expected heads: $20 \times \dfrac12 = 10$. $P(\text{exactly } 10) = \dbinom{20}{10} \big/ 2^{20} = \dfrac{184756}{1048576} \approx 0.176$.
    4. $p = \dfrac12$, so you expect to wait $\dfrac{1}{1/2} = 2$ tosses.
    5. $300 \times 0.05 = 15$ dollars a year. The insurance costs 20 dollars, so on average the buyer loses 5 dollars a year and
       the company gains it. People still buy it because the expected value is not everything: a sudden bill of 300 dollars
       might be much harder to pay than a steady 20 dollars. How much **risk** you can bear matters too.

## Common mistake

**Thinking the expected value is what will happen.** An expected profit of $-0.17$ does not mean you lose 17 cents
each time; you never lose exactly 17 cents. It means that over many games your **average** gets close to that. In a
few games anything can happen, and that is exactly why games of chance are tempting.

## Where it leads

- Back a step: [Master: conditional probability](04-master.md)
- How spread out a random result is (not just its average) is measured by the variance and standard deviation, and
  the binomial distribution turns into the bell-shaped normal curve for large $n$: see
  [Statistics: distributions and the normal curve](../statistics/04-master.md).
- The waiting-time answer $\dfrac1p$ can also be found by adding up an infinite series,
  $\sum_{k \ge 1} k \left(\tfrac56\right)^{k-1} \tfrac16 = 6$; infinite sums like it are studied on the U of T shelf in
  [MAT137 Unit 13 (series)](../../uoft/MAT137/unit13.md).
- The binomial coefficients come from [Counting: the binomial theorem](../counting/05-beyond.md).
- The other topics: [all topics](../index.md).
