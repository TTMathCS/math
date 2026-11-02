---
title: "Build: Zeno, limits and sums that never end"
---

# Build: Zeno, limits and sums that never end

*Infinity and strange math · step 3 of 5*

## A question to start

About 2500 years ago, the Greek thinker Zeno of Elea told puzzles about motion that people still argue about. The
most famous one goes like this.

Achilles, the fastest runner in the stories, races a tortoise and gives it a 100 metre head start. By the time
Achilles reaches the place where the tortoise started, the tortoise has crawled a little further. By the time he
reaches *that* place, it has crawled a little further again. And so on, forever. There are infinitely many places
Achilles has to reach, and each time the tortoise is still ahead. So, says Zeno, Achilles can **never** catch the
tortoise.

But of course real runners overtake real tortoises. So where is the mistake? The answer is one of the most
important ideas in mathematics: **infinitely many pieces can add up to a finite amount**.

## The idea

### Halving, again

From the Play step: walk half of the way to a wall, then half of what is left, and so on. If the whole distance is
1, the pieces are $\dfrac12, \dfrac14, \dfrac18, \dfrac1{16}, \ldots$ Add them up a few at a time:

| Pieces added | 1 | 2 | 3 | 4 | 5 | 10 |
| --- | --- | --- | --- | --- | --- | --- |
| Total so far | $\frac12$ | $\frac34$ | $\frac78$ | $\frac{15}{16}$ | $\frac{31}{32}$ | $\frac{1023}{1024}$ |
| As a decimal | 0.5 | 0.75 | 0.875 | 0.9375 | 0.96875 | 0.99902... |

These running totals are called **partial sums**. After $n$ pieces, the gap left to the wall is exactly
$\dfrac{1}{2^n}$, so the total is $1 - \dfrac{1}{2^n}$. The gap halves each time, and it can be made smaller than
any amount you choose: smaller than a thousandth after 10 pieces, smaller than a millionth after 20.

### What a limit is

The totals never *reach* 1 after any number of pieces, but they get as close to 1 as you like, and stay that close.
We say the partial sums **tend to** 1, or that their **limit** is 1, and we define the infinite sum to be that
limit:

$$\frac12 + \frac14 + \frac18 + \frac1{16} + \cdots = 1.$$

This is not rounding. It is what "adding infinitely many numbers" **means**: the number the partial sums close in
on. A sum like this, which has a limit, is said to **converge**.

The same idea works for a list of numbers, not just a sum. The list
$\dfrac12, \dfrac23, \dfrac34, \dfrac45, \ldots$ (the $n$th one is $\dfrac{n}{n+1}$) gets as close to 1 as you like, so its limit is 1.

### Zeno answered

Say Achilles runs 10 m/s and the tortoise 1 m/s. Achilles' runs to "where the tortoise was" are 100 m, then 10 m,
then 1 m, then 0.1 m, ... Each run takes a tenth as long as the one before: 10 s, 1 s, 0.1 s, ... Infinitely many
pieces of time, but they add up to a finite total:

$$10 + 1 + 0.1 + 0.01 + \cdots = 11.111\ldots = \frac{100}{9} \text{ seconds}.$$

After $\dfrac{100}{9} \approx 11.1$ seconds, all of Zeno's infinitely many stages are over, and Achilles passes the
tortoise. Zeno was right that there are infinitely many stages; he was wrong to think that infinitely many stages
must take forever.

You can check with ordinary algebra. After $t$ seconds Achilles has run $10t$ m and the tortoise is at $100 + t$ m.
They are level when $10t = 100 + t$, so $9t = 100$ and $t = \dfrac{100}{9}$.

### Geometric series

Sums where each term is the one before multiplied by the same number $r$ are **geometric series**. If $r$ is between
$-1$ and $1$, they converge, and

$$a + ar + ar^2 + ar^3 + \cdots = \frac{a}{1 - r}.$$

Check: halving has $a = \frac12$ and $r = \frac12$, giving $\dfrac{1/2}{1/2} = 1$. Achilles' times have $a = 10$ and
$r = \dfrac1{10}$, giving $\dfrac{10}{9/10} = \dfrac{100}{9}$. Why the formula works is shown on the
[Master step of Patterns and sequences](../patterns/level-6/index.md).

### Does 0.999... equal 1?

The decimal $0.999\ldots$, with 9s going on forever, means the infinite sum
$\dfrac{9}{10} + \dfrac{9}{100} + \dfrac{9}{1000} + \cdots$. It is geometric with $a = \dfrac{9}{10}$ and
$r = \dfrac{1}{10}$, so it equals $\dfrac{9/10}{9/10} = 1$. Exactly 1.

Another way to see it: $\dfrac13 = 0.333\ldots$. Multiply both sides by 3: $1 = 0.999\ldots$

Many people feel that $0.999\ldots$ must be "just a tiny bit less" than 1. But if two numbers are different, there
is a gap between them, and some number fits in the gap, such as their average. No number fits between
$0.999\ldots$ and 1. They are two ways of writing the same number.

## Worked example

**Turn $0.\overline{36} = 0.363636\ldots$ into a fraction.** (The bar means "repeat these digits forever".)

1. Call the number $x$. So $x = 0.363636\ldots$
2. The repeating block has 2 digits, so multiply by 100: $100x = 36.363636\ldots$
3. Subtract: $100x - x = 36.3636\ldots - 0.3636\ldots = 36$. The endless tails cancel exactly.
4. So $99x = 36$ and $x = \dfrac{36}{99} = \dfrac{4}{11}$.

Check: $4 \div 11 = 0.363636\ldots$ Correct. Every repeating decimal can be turned into a fraction this way, which
is one reason repeating decimals are always rational numbers.

## Try it

1. Write $0.333\ldots$ as a fraction.
2. Write $0.\overline{27} = 0.272727\ldots$ as a fraction in lowest terms.
3. Find the sum $\dfrac13 + \dfrac19 + \dfrac1{27} + \dfrac1{81} + \cdots$
4. A runner at 8 m/s chases a walker at 2 m/s who has a 30 m head start. When does the runner catch up?
5. What is the limit of the list $\dfrac{n}{n+1}$ as $n$ grows? How large must $n$ be for $\dfrac{n}{n+1}$ to be
   within $\dfrac{1}{1000}$ of the limit?
6. Does $1 + 1 + 1 + 1 + \cdots$ converge? What about $1 - 1 + 1 - 1 + \cdots$?

??? note "Answers"
    1. $x = 0.333\ldots$, $10x = 3.333\ldots$, so $9x = 3$ and $x = \dfrac13$.
    2. $100x - x = 27$, so $x = \dfrac{27}{99} = \dfrac{3}{11}$.
    3. Geometric with $a = \dfrac13$, $r = \dfrac13$: $\dfrac{1/3}{2/3} = \dfrac12$.
    4. The gap of 30 m shrinks by $8 - 2 = 6$ m every second, so $30 \div 6 = 5$ seconds. (Check: the runner is
       at 40 m and the walker at $30 + 10 = 40$ m.)
    5. The limit is 1. The gap is $1 - \dfrac{n}{n+1} = \dfrac{1}{n+1}$. This is less than $\dfrac{1}{1000}$ when
       $n + 1 > 1000$, so for every $n \ge 1000$.
    6. $1 + 1 + 1 + \cdots$ has partial sums 1, 2, 3, ... which grow without end: it does **not** converge (it
       **diverges**). $1 - 1 + 1 - 1 + \cdots$ has partial sums 1, 0, 1, 0, ... which never settle on one number,
       so it does not converge either.

## Common mistake

**Thinking that if the pieces shrink to zero, the sum must be finite.** It sounds reasonable, but it is false. The
**harmonic series**

$$1 + \frac12 + \frac13 + \frac14 + \frac15 + \cdots$$

has pieces that shrink towards 0, yet it grows past every number. A medieval proof shows why: group the terms as
$\frac13 + \frac14$ (more than $\frac14 + \frac14 = \frac12$), then $\frac15 + \cdots + \frac18$ (four terms, each
at least $\frac18$, so more than $\frac12$), then the next eight terms (more than $\frac12$ again), and so on. You
can make as many groups worth more than $\frac12$ as you like, so the total has no limit. Shrinking pieces are
**needed** for a finite sum, but they are not **enough**. Halving works because the pieces shrink fast.

## Where it leads

- Next step: [Master: countable infinity](04-master.md), back to Hilbert's hotel with infinitely many buses.
- Back a step: [Explore: Hilbert's hotel](02-explore.md)
- Geometric series in full: [Patterns and sequences, Master step](../patterns/level-6/index.md). Limits are the engine
  of calculus in [Change and motion](../change/index.md). Repeating decimals and rational numbers are in
  [Numbers](../numbers/index.md).
- On the U of T shelf: [MAT137 Unit 11: sequences](../../uoft/MAT137/unit11.md) and
  [Unit 13: series](../../uoft/MAT137/unit13.md), and with full proofs,
  [MAT158 Unit 3: limits](../../uoft/MAT158H1/unit03.md).
