---
title: "Unsolved patterns"
---

# Unsolved patterns

*Patterns and sequences · level 8, lesson 6 of 6*

## A question to start

Pick any whole number. Then follow two rules:

- if the number is **even**, halve it;
- if the number is **odd**, multiply it by 3 and add 1.

Repeat. Start with 6: $6 \to 3 \to 10 \to 5 \to 16 \to 8 \to 4 \to 2 \to 1$. Once you reach 1 you go
$1 \to 4 \to 2 \to 1$ forever, so we stop there.

Start with 27 and something wild happens. The numbers climb and fall and climb again, reaching **9232**, before
finally coming down to 1 after **111 steps**. Does **every** starting number end at 1? Computers have checked every
start up to a number with more than twenty digits, and every single one does. Yet nobody in the world can prove it.
This lesson is about that problem, and about why checking, however much, is not proving.

## The idea

### The Collatz problem

The rule is a function on the positive whole numbers:

$$C(n) = \begin{cases} n/2 & \text{if } n \text{ is even,} \\ 3n + 1 & \text{if } n \text{ is odd.} \end{cases}$$

Starting at $n$ and iterating $C$, as in [lesson 5](05-iteration-fixed-points.md), gives the **trajectory** of $n$.
The **Collatz conjecture** says: **every trajectory eventually reaches 1.** A **conjecture** is a statement that
mathematicians believe but have not proved. This one is usually credited to Lothar Collatz, who is said to have
thought of it in the 1930s; it is also called the $3n + 1$ problem.

Here is the trajectory of 27, step by step, drawn as a graph.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 390 205" role="img" aria-label="The trajectory of 27 under the 3n plus 1 rule: the values stay low for a long time, rise in jagged steps to a peak of 9232 at step 77, then fall back to 1 by step 111">
  <g stroke="currentColor" stroke-width="1.2">
    <line x1="40" y1="180" x2="375" y2="180"/>
    <line x1="40" y1="180" x2="40" y2="15"/>
  </g>
  <polyline fill="none" stroke="#eea66f" stroke-width="1.6" points="40.0,179.5 43.0,178.6 45.9,179.3 48.9,177.9 51.9,178.9 54.9,179.5 57.8,178.4 60.8,179.2 63.8,177.5 66.8,178.8 69.7,176.3 72.7,178.1 75.7,174.4 78.6,177.2 81.6,171.6 84.6,175.8 87.6,177.9 90.5,173.7 93.5,176.8 96.5,178.4 99.5,175.3 102.4,177.6 105.4,172.9 108.4,176.4 111.4,178.2 114.3,174.6 117.3,177.3 120.3,171.9 123.2,176.0 126.2,167.9 129.2,173.9 132.2,177.0 135.1,170.9 138.1,175.4 141.1,166.3 144.1,173.2 147.0,159.4 150.0,169.7 153.0,149.2 155.9,164.6 158.9,172.3 161.9,156.8 164.9,168.4 167.8,174.2 170.8,177.1 173.8,171.3 176.8,175.6 179.7,166.9 182.7,173.5 185.7,160.4 188.6,170.2 191.6,175.1 194.6,165.3 197.6,172.6 200.5,157.9 203.5,168.9 206.5,174.5 209.5,163.4 212.4,171.7 215.4,155.1 218.4,167.5 221.4,142.6 224.3,161.3 227.3,123.9 230.3,151.9 233.2,95.8 236.2,137.9 239.2,53.7 242.2,116.8 245.1,148.4 248.1,164.2 251.1,132.6 254.1,156.3 257.0,108.9 260.0,144.5 263.0,73.3 265.9,126.7 268.9,20.0 271.9,100.0 274.9,140.0 277.8,160.0 280.8,170.0 283.8,150.0 286.8,165.0 289.7,172.5 292.7,157.5 295.7,168.7 298.6,174.4 301.6,163.1 304.6,171.5 307.6,175.8 310.5,177.9 313.5,178.9 316.5,176.8 319.5,178.4 322.4,179.2 325.4,179.6 328.4,178.8 331.4,179.4 334.3,178.2 337.3,179.1 340.3,177.2 343.2,178.6 346.2,179.3 349.2,179.7 352.2,179.8 355.1,179.9 358.1,179.7 361.1,179.9 364.1,179.9 367.0,180.0 370.0,180.0"/>
  <circle cx="268.9" cy="20" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <g font-size="11" fill="currentColor">
    <text x="276" y="22">9232 at step 77</text>
    <text x="40" y="195" text-anchor="middle">0</text>
    <text x="370" y="195" text-anchor="middle">111</text>
    <text x="205" y="200" text-anchor="middle">step</text>
    <text x="34" y="184" text-anchor="end">1</text>
    <text x="34" y="24" text-anchor="end">9232</text>
  </g>
</svg>
</div>

### Two ways it could fail

If some trajectory never reaches 1, it must do one of two things.

1. **Fall into a different cycle**: a loop of numbers that repeats forever without containing 1.
2. **Run away**: climb higher and higher without end, never repeating.

(A trajectory that stays below some bound visits only finitely many numbers, so it must eventually repeat one, and
from then on it cycles. So these really are the only two ways.) Nobody has ruled out either. Large computer searches
have found no other cycle among the positive numbers and no runaway.

### What the computers have found

Computer searches have checked every starting number up to at least $2^{68}$, which is about $3 \times 10^{20}$,
and every one reaches 1. That is a staggering amount of evidence. It is still not a proof, for the reason in
[lesson 1](01-proof-by-induction.md): there are infinitely many whole numbers, and $3 \times 10^{20}$ of them is
nothing compared with "all".

### Why it is believable: a rough average

When $n$ is odd, $3n + 1$ is even, so an odd step is always followed by at least one halving. Pretend the numbers
behave "at random". Then after an odd step the number is divided by 2 once for sure, by 2 again with chance about
$\frac12$, again with chance about $\frac14$, and so on: on average it is halved about 2 times. So one odd step plus
the halvings after it multiplies the number by roughly

$$3 \times \frac14 = \frac34.$$

On average, then, trajectories **shrink** by a factor of about $\frac34$ per round, like a geometric sequence with
ratio less than 1 (or an attracting fixed point with slope less than 1). This is a good reason to **believe** the
conjecture. It is not a proof, because the numbers are not really random: a single special start could, in
principle, keep getting the lucky odd numbers and climb forever.

The same rough average for the rule "$5n + 1$" gives $5 \times \frac14 = \frac54 > 1$, suggesting that many
trajectories grow without end. And indeed, starting the $5n + 1$ rule at 7 seems to climb forever (though, again,
nobody has proved it does), while starting at 13 falls into a cycle that never reaches 1:

$$13 \to 66 \to 33 \to 166 \to 83 \to 416 \to 208 \to 104 \to 52 \to 26 \to 13.$$

A tiny change to the rule changes everything.

### What has been proved

Mathematicians have proved partial results. In the 1970s it was shown that **almost all** starting numbers (in a
precise sense: all but a vanishing fraction) eventually fall below where they started. In 2019 Terence Tao proved a
much stronger result of the same "almost all" kind. But "almost all" is not "all", and the conjecture remains open.

Here is why "falls below its start" matters. If someone proved that **every** $n \ge 2$ eventually reaches a number
smaller than $n$, the whole conjecture would follow by **strong induction** ([lesson 3](03-strong-induction.md)):
assume every number below $n$ reaches 1; the trajectory of $n$ reaches some smaller number, whose trajectory then
reaches 1.

### Patterns that held for a long time, then broke

The Collatz problem is not the only case where evidence and proof part ways. Sometimes the evidence is wrong.

- **A prime-making formula.** $n^2 + n + 41$ is prime for $n = 0, 1, 2, \ldots, 39$: forty primes in a row. But at
  $n = 40$ it gives $1600 + 40 + 41 = 1681 = 41^2$. (It had to fail at $n = 41$ too: every term is then a multiple of
  41.)
- **Circle regions.** Points on a circle, all joined by chords, cut it into $1, 2, 4, 8, 16$ regions, and then **31**,
  not 32 ([level 3](../level-3/index.md)).
- **Pólya's conjecture.** In 1919 George Pólya conjectured that, for every number $N \ge 2$, at least half of the
  numbers from 1 to $N$ have an odd number of prime factors (counted with repeats). It held for every $N$ anyone
  checked by hand. It is false: the smallest counterexample, found by computer in 1980, is
  $N = 906\,150\,257$.

No amount of checking can tell you whether a pattern is a Collatz (probably true, but unproved), a Pólya (true for
hundreds of millions of cases, then false) or a theorem. Only a proof can.

## Worked examples

**1. A trajectory by hand.** Start at 7:

$$7 \to 22 \to 11 \to 34 \to 17 \to 52 \to 26 \to 13 \to 40 \to 20 \to 10 \to 5 \to 16 \to 8 \to 4 \to 2 \to 1.$$

That is 16 steps, with a highest point of 52.

**2. Easy families.** If $n = 2^k$, the trajectory just halves $k$ times: $2^k \to 2^{k-1} \to \cdots \to 1$. And if
$n = \frac{4^k - 1}{3}$ (that is, $1, 5, 21, 85, 341, \ldots$), then $n$ is odd and $3n + 1 = 4^k$, a power of 2, so it
falls straight to 1. These families prove the conjecture for infinitely many numbers, but infinitely many is still not
all.

**3. Most numbers drop quickly.** Show that every even $n$ and every $n$ of the form $4k + 1$ (with $k \ge 1$) reaches a
number smaller than itself.

- Even: $n \to \frac n2 < n$ in one step.
- $n = 4k + 1$ is odd, so $n \to 12k + 4 \to 6k + 2 \to 3k + 1$, and $3k + 1 < 4k + 1$ when $k \ge 1$.

So three-quarters of all numbers drop below their start within three steps. The hard cases are the numbers of the form
$4k + 3$, like 27, and nobody has tamed them all.

**4. A cycle in the negative numbers.** Use the same rule on negative whole numbers. From $-5$:

$$-5 \to -14 \to -7 \to -20 \to -10 \to -5.$$

A cycle that never reaches $-1$. So the conjecture really depends on the numbers being positive; whatever makes it true
(if it is true) must use that.

## Try it

1. Write out the trajectories of 12 and 19. How many steps does each take to reach 1?
2. The trajectory of 97 takes 118 steps, the most of any start below 100. Without computing, explain why the trajectory
   of 194 takes 119 steps.
3. Check that 85 and 341 fall to 1 quickly. How many steps does each take?
4. Show that numbers of the form $4k + 1$ with $k \ge 1$ drop below themselves (as in example 3), and explain why a
   number of the form $4k + 3$ cannot drop below itself within the first two steps.
5. Check that $n^2 + n + 41$ is not prime at $n = 40$ and $n = 41$, by factoring the values.
6. Run the $5n + 1$ rule from 13 and confirm the cycle. Then try the $5n + 1$ rule from 3. What happens?
7. Using the rule on negative numbers, follow $-17$ until it repeats. How long is the cycle?
8. Explain carefully why a proof that "every $n \ge 2$ eventually reaches a number smaller than $n$" would prove the
   Collatz conjecture. Which kind of induction is it?

??? note "Answers"
    1. $12 \to 6 \to 3 \to 10 \to 5 \to 16 \to 8 \to 4 \to 2 \to 1$: **9 steps**.
       $19 \to 58 \to 29 \to 88 \to 44 \to 22 \to 11 \to 34 \to 17 \to 52 \to 26 \to 13 \to 40 \to 20 \to 10 \to 5 \to 16 \to 8 \to 4 \to 2 \to 1$:
       **20 steps**.
    2. 194 is even, so its first step is $194 \to 97$. After that it follows the trajectory of 97 exactly, so it takes
       $1 + 118 = 119$ steps.
    3. $85 \to 256 \to 128 \to 64 \to 32 \to 16 \to 8 \to 4 \to 2 \to 1$: **9 steps**.
       $341 \to 1024 \to 512 \to \cdots \to 1$: $1 + 10 =$ **11 steps** ($1024 = 2^{10}$).
    4. For $4k + 1$: $\to 12k + 4 \to 6k + 2 \to 3k + 1 < 4k + 1$. For $n = 4k + 3$: it is odd, so
       $n \to 12k + 10$, which is bigger. Then $12k + 10 \to 6k + 5$, which is odd and still bigger than $4k + 3$. So
       it has not dropped below $n$ after two steps (and the next step, $18k + 16$, is bigger still).
    5. $n = 40$: $1681 = 41 \times 41$. $n = 41$: $1681 + 41 + 41 = 1763 = 41 \times 43$. Neither is prime.
    6. $13 \to 66 \to 33 \to 166 \to 83 \to 416 \to 208 \to 104 \to 52 \to 26 \to 13$: a cycle of length 10.
       From 3: $3 \to 16 \to 8 \to 4 \to 2 \to 1$, which reaches 1 (and then $1 \to 6 \to 3$, so 1 is in the cycle
       $1, 6, 3, 16, 8, 4, 2$).
    7. $-17 \to -50 \to -25 \to -74 \to -37 \to -110 \to -55 \to -164 \to -82 \to -41 \to -122 \to -61 \to -182 \to -91 \to -272 \to -136 \to -68 \to -34 \to -17$: a cycle of **18** numbers.
    8. Let $P(n)$ be "the trajectory of $n$ reaches 1". $P(1)$ is true. For $n \ge 2$, assume $P(k)$ for every $k$ with
       $1 \le k < n$. By the assumed result, the trajectory of $n$ reaches some number $k < n$, and from there it
       follows the trajectory of $k$, which reaches 1. So $P(n)$ is true. This is **strong induction**, because $k$
       can be any smaller number, not just $n - 1$.

## Common mistake

**"It works for every number we tried, so it is true."** That is evidence, and good evidence can guide you, but the
$n^2 + n + 41$ formula and Pólya's conjecture both passed huge numbers of checks and were false. A proof must cover
every case at once.

**"It is unproved, so it is probably false."** Also wrong. Unproved means unknown. Most mathematicians expect the
Collatz conjecture to be true; they just cannot yet show it.

## Where it leads

- Back: [Iteration and fixed points](05-iteration-fixed-points.md) · This is the last lesson of the Patterns topic.
- [Level 8 page](index.md) · [Patterns topic page](../index.md)
- Primes and their factors: [Number theory](../../number-theory/index.md). What a proof is, and what it is not:
  [Logic](../../logic/index.md). Questions with no end: [Infinity](../../infinity/index.md).
- Proof techniques, including induction, in a first-year course: [MAT137 Unit 1](../../../uoft/MAT137/unit01.md).
