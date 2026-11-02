---
title: "Strong induction"
---

# Strong induction

*Patterns and sequences · level 8, lesson 3 of 6*

## A question to start

A post office sells only 4-cent and 5-cent stamps. Which postage amounts can you make exactly?

$$4,\ 5,\ 8 = 4 + 4,\ 9 = 4 + 5,\ 10 = 5 + 5,\ 12,\ 13,\ 14,\ 15,\ 16,\ \ldots$$

You cannot make 1, 2, 3, 6, 7 or 11. But from 12 on, every amount seems possible. How could you prove "every amount
from 12 up"? Ordinary induction gets from $m$ to $m + 1$, but knowing how to make 20 cents does not obviously help
you make 21. What does help is knowing how to make **17**: add one 4-cent stamp. The step needs to reach back further
than one place. This lesson gives induction a longer reach.

## The idea

### Strong induction

In ordinary induction, the step assumes only $P(m)$ and proves $P(m + 1)$. In **strong induction** (also called
complete induction) the step may assume **all** the earlier cases:

1. **Base case(s)**: prove $P(1)$ (and any other starting cases the step needs).
2. **Strong inductive step**: for every $m$, **if** $P(1), P(2), \ldots, P(m)$ are all true, **then** $P(m + 1)$ is
   true.

Then $P(n)$ is true for every $n \ge 1$.

In the domino picture: when domino $m + 1$ is about to fall, **every** domino before it has already fallen, so it is
fair to use any of them, not only its nearest neighbour.

### Why strong induction is valid

It is no stronger than ordinary induction, just more convenient. Two reasons.

- **The smallest failure.** Suppose both parts hold but $P$ fails somewhere, and let $s$ be the smallest failure. It
  is not a base case. Every case before $s$ is true (since $s$ is the first failure), so the strong step says $P(s)$
  is true. Contradiction.
- **Ordinary induction in disguise.** Let $Q(n)$ be the statement "$P(1), P(2), \ldots, P(n)$ are all true". Then
  the strong step says exactly: if $Q(m)$ is true, then $P(m + 1)$ is true, and so $Q(m + 1)$ is true. That is
  ordinary induction for $Q$.

### How many base cases?

If the step for $P(m + 1)$ reaches back $k$ places (it uses $P(m + 1 - k)$), then the first $k$ cases have nothing to
reach back to, so they must all be checked by hand. The stamps step reaches back 4 places (it uses the amount 4 cents
less), so it needs 4 base cases. The Fibonacci rule reaches back 2 places, so Fibonacci proofs need 2 base cases.
Forgetting a base case is the most common way strong induction proofs go wrong.

## Worked examples

**1. The stamps.** Prove that every amount of $n \ge 12$ cents can be made from 4-cent and 5-cent stamps.

- **Base cases** (four of them, because the step reaches back 4): $12 = 4 + 4 + 4$, $13 = 4 + 4 + 5$,
  $14 = 4 + 5 + 5$, $15 = 5 + 5 + 5$. ✓
- **Strong step.** Let $m + 1 \ge 16$ and assume every amount from 12 up to $m$ can be made. Then $m + 1 - 4 = m - 3$ is
  at least 12 and at most $m$, so it can be made. Add one 4-cent stamp to make $m + 1$. ✓
- **Conclusion.** By strong induction, every amount from 12 cents up can be made. ∎

The four base cases start four separate chains: 12, 16, 20, ... and 13, 17, 21, ... and 14, 18, ... and 15, 19, ....
Together they cover everything.

**2. Every whole number from 2 up is a product of primes.** A **prime** is a whole number greater than 1 whose only
divisors are 1 and itself: 2, 3, 5, 7, 11, .... We say a single prime counts as a "product" of one prime.

- **Statement.** $P(n)$: $n$ can be written as a product of primes.
- **Base case.** $n = 2$ is prime. ✓
- **Strong step.** Take $m + 1 \ge 3$ and assume every number from 2 to $m$ is a product of primes. There are two cases.
  - If $m + 1$ is prime, it is a product of one prime. ✓
  - If not, it has a divisor other than 1 and itself, so $m + 1 = ab$ with $2 \le a \le m$ and $2 \le b \le m$. By
    the strong hypothesis, $a$ and $b$ are each products of primes, so $ab$ is too (multiply the two lists). ✓
- **Conclusion.** Every $n \ge 2$ is a product of primes. ∎

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 160" role="img" aria-label="A factor tree: 60 splits into 6 and 10; 6 splits into 2 and 3; 10 splits into 2 and 5; the primes 2, 3, 2, 5 are at the bottom">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="150" y1="30" x2="90" y2="70"/><line x1="150" y1="30" x2="210" y2="70"/>
    <line x1="90" y1="80" x2="60" y2="120"/><line x1="90" y1="80" x2="120" y2="120"/>
    <line x1="210" y1="80" x2="180" y2="120"/><line x1="210" y1="80" x2="240" y2="120"/>
  </g>
  <g stroke="currentColor" stroke-width="1">
    <circle cx="150" cy="22" r="16" fill="#9cc9ea"/>
    <circle cx="90" cy="78" r="14" fill="#9cc9ea"/><circle cx="210" cy="78" r="14" fill="#9cc9ea"/>
    <circle cx="60" cy="130" r="13" fill="#eea66f"/><circle cx="120" cy="130" r="13" fill="#eea66f"/>
    <circle cx="180" cy="130" r="13" fill="#eea66f"/><circle cx="240" cy="130" r="13" fill="#eea66f"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="150" y="27">60</text><text x="90" y="83">6</text><text x="210" y="83">10</text>
    <text x="60" y="135">2</text><text x="120" y="135">3</text><text x="180" y="135">2</text><text x="240" y="135">5</text>
  </g>
  <text x="150" y="157" font-size="12" text-anchor="middle" fill="currentColor">60 = 2 × 3 × 2 × 5</text>
</svg>
</div>

A factor tree is this proof in action: each number that is not prime splits into two **smaller** numbers, and the
proof is allowed to use any smaller case, not just $m$. Ordinary induction would be stuck here: knowing that 59 is a
product of primes tells you nothing about 60. (That the product is the **same** however you split, apart from order,
is a different and harder theorem: see [Number theory](../../number-theory/index.md).)

**3. A Fibonacci bound.** Prove that $F_n < 2^n$ for every $n \ge 1$, where $F_1 = F_2 = 1$ and
$F_n = F_{n-1} + F_{n-2}$.

- **Base cases** (two, because the rule reaches back two places): $F_1 = 1 < 2$ and $F_2 = 1 < 4$. ✓
- **Strong step.** For $m + 1 \ge 3$, assume $F_k < 2^k$ for every $k \le m$. Then

$$F_{m+1} = F_m + F_{m-1} < 2^m + 2^{m-1} < 2^m + 2^m = 2^{m+1}.$$

- **Conclusion.** $F_n < 2^n$ for every $n \ge 1$. ∎

The step used $P(m)$ **and** $P(m - 1)$, which is why ordinary induction is not enough and why two base cases are
needed.

**4. A much sharper bound.** The bound $2^n$ is very loose ($F_{10} = 55$ but $2^{10} = 1024$). The golden ratio
$\varphi \approx 1.618$ from [level 7](../level-7/04-golden-ratio.md) does much better: $F_n \le \varphi^{\,n-1}$.

- Base: $F_1 = 1 = \varphi^0$ and $F_2 = 1 \le \varphi^1$. ✓
- Step: $F_{m+1} = F_m + F_{m-1} \le \varphi^{\,m-1} + \varphi^{\,m-2} = \varphi^{\,m-2}(\varphi + 1) = \varphi^{\,m-2} \cdot \varphi^2 = \varphi^{\,m}$,

using $\varphi + 1 = \varphi^2$, the golden ratio's defining property. ∎ The number 2 worked in example 3 because
$2^{m} + 2^{m-1} < 2^{m+1}$ with room to spare; $\varphi$ is the number for which there is **no** room to spare.

**5. Binary.** Prove that every whole number $n \ge 1$ is a sum of **different** powers of 2 (such as
$100 = 64 + 32 + 4$).

- Base: $1 = 2^0$. ✓
- Strong step: take $n = m + 1 \ge 2$ and let $2^j$ be the largest power of 2 with $2^j \le n$. If $n = 2^j$, done.
  Otherwise $r = n - 2^j$ is between 1 and $n - 1$, so by the strong hypothesis $r$ is a sum of different powers of 2.
  Also $r < 2^j$ (otherwise $n \ge 2^{j+1}$, contradicting the choice of $j$), so none of those powers is $2^j$ itself.
  Adding $2^j$ gives $n$ as a sum of different powers of 2. ✓ ∎

This is why every whole number has a binary (base 2) representation.

## Try it

1. Prove that every amount of $n \ge 8$ cents can be made from 3-cent and 5-cent stamps. How many base cases do you
   need, and why? Which amounts below 8 are impossible?
2. A chocolate bar is a grid of $N$ squares. Each break splits one piece into two pieces along a line. Prove by strong
   induction that breaking it into single squares always takes exactly $N - 1$ breaks, however you do it.
3. Write 100 and 77 as sums of different powers of 2.
4. Prove that $F_n \ge \varphi^{\,n-2}$ for every $n \ge 1$.
5. A sequence has $a_1 = 1$, $a_2 = 5$ and $a_n = a_{n-1} + 2a_{n-2}$. Prove that $a_n = 2^n + (-1)^n$.
6. Prove that every whole number $n \ge 1$ is a sum of different Fibonacci numbers, and write 100 that way. (Hint:
   take the largest Fibonacci number $F_j \le n$, and show $n - F_j < F_{j-1}$.)
7. "Proof" that $5n = 0$ for every whole number $n \ge 0$: base $5 \times 0 = 0$. Strong step: write $n = a + b$ with
   $a, b < n$; then $5n = 5a + 5b = 0 + 0 = 0$. Find the error.
8. Two players take turns removing 1 or 2 counters from a pile of $n$. Whoever takes the last counter wins. Prove by
   strong induction that the first player can force a win exactly when $n$ is **not** a multiple of 3.

??? note "Answers"
    1. The step "add a 3-cent stamp to the amount 3 less" reaches back 3 places, so you need **3 base cases**:
       $8 = 3 + 5$, $9 = 3 + 3 + 3$, $10 = 5 + 5$. For $m + 1 \ge 11$, the amount $m - 2 \ge 8$ can be made, so add a
       3. ∎ Impossible below 8: **1, 2, 4, 7**.
    2. $P(N)$: any bar of $N$ squares takes $N - 1$ breaks. Base: $N = 1$ needs 0 breaks. ✓ Step: the first break
       splits a bar of $N$ squares into pieces of $a$ and $b$ squares, with $a + b = N$ and $a, b < N$. By the strong
       hypothesis they need $a - 1$ and $b - 1$ more breaks. Total $1 + (a - 1) + (b - 1) = N - 1$. ∎ (Each break makes
       exactly one more piece, and you go from 1 piece to $N$.)
    3. $100 = 64 + 32 + 4$ and $77 = 64 + 8 + 4 + 1$.
    4. Base: $F_1 = 1 \ge \varphi^{-1} \approx 0.618$ and $F_2 = 1 \ge \varphi^0 = 1$. ✓ Step:
       $F_{m+1} = F_m + F_{m-1} \ge \varphi^{\,m-2} + \varphi^{\,m-3} = \varphi^{\,m-3}(\varphi + 1) = \varphi^{\,m-1}$. ∎
       With example 4, $\varphi^{\,n-2} \le F_n \le \varphi^{\,n-1}$: Fibonacci numbers grow like powers of $\varphi$.
    5. Bases: $a_1 = 2 - 1 = 1$ ✓ and $a_2 = 4 + 1 = 5$ ✓. Step: $a_{m+1} = a_m + 2a_{m-1} = 2^m + (-1)^m + 2^m + 2(-1)^{m-1} = 2^{m+1} + (-1)^m - 2(-1)^m = 2^{m+1} - (-1)^m = 2^{m+1} + (-1)^{m+1}$. ∎
    6. Base: $1 = F_1$. Step: let $F_j$ be the largest Fibonacci number $\le n$. If $n = F_j$, done. Otherwise
       $n < F_{j+1} = F_j + F_{j-1}$, so $r = n - F_j < F_{j-1} \le F_j$. By the strong hypothesis $r$ is a sum of
       different Fibonacci numbers, each at most $r < F_j$ (so none equals $F_j$). Add $F_j$. ∎
       $100 = 89 + 11 = 89 + 8 + 3$.
    7. The step fails at $n = 1$: the only ways to write $1 = a + b$ with whole numbers are $0 + 1$ and $1 + 0$, and in
       both, one part is **not** smaller than $n$. So $P(1)$ is never reached. (It is a hidden base case.)
    8. Call $n$ a **losing** pile if the player to move loses with best play. Claim: $n$ is losing exactly when $3 \mid n$.
       Base: $n = 0$ is losing (the player to move has no counter to take; the other player took the last). Step:
       if $n$ is not a multiple of 3, remove 1 or 2 to leave a multiple of 3, which by the hypothesis is losing for the
       opponent. If $n$ is a multiple of 3 (and $n \ge 3$), any move leaves $n - 1$ or $n - 2$, neither a multiple of 3,
       which by the hypothesis is a winning pile for the opponent. ∎

## Common mistake

**Too few base cases.** If the step uses $P(m - 3)$, then $P(1)$, $P(2)$, $P(3)$ and $P(4)$ (or the first four cases
from wherever you start) must all be checked, because the step for them would reach back to cases that do not exist.

**Using a case that is not smaller.** The strong hypothesis covers only cases **before** $m + 1$. In example 2 it
matters that $a$ and $b$ are both less than $m + 1$; if a factor could be $m + 1$ itself, the argument would assume
what it is proving.

## Where it leads

- Back: [More induction](02-more-induction.md) · Next: [Solving recurrences](04-solving-recurrences.md).
- [Level 8 page](index.md) · [Patterns topic page](../index.md)
- Primes, factor trees and why the factorisation is unique: [Number theory](../../number-theory/index.md).
- The stamp problem and the take-away game are classics of [Counting](../../counting/index.md) and [Logic](../../logic/index.md).
- Strong induction in a first-year proofs course: [MAT137 Unit 1](../../../uoft/MAT137/unit01.md).
