---
title: "Beyond: Recursion and proof by induction"
---

# Beyond: Rules that call themselves, and proof by induction

*Patterns and sequences · step 5 of 5*

## A question to start

Add up the first few odd numbers:

$$1 = 1, \qquad 1 + 3 = 4, \qquad 1 + 3 + 5 = 9, \qquad 1 + 3 + 5 + 7 = 16.$$

Every answer is a square number. Is that true for the first 1000 odd numbers? For the first million? Checking
examples, however many, can never cover **every** number. This page shows a way of proving it once and for all.

## The idea

### Recursive rules

A **recursive** rule defines each term using the terms before it, plus a starting point. The Fibonacci numbers are
the classic example:

$$F_1 = 1, \quad F_2 = 1, \qquad F_{n} = F_{n-1} + F_{n-2} \text{ for } n \ge 3.$$

Arithmetic and geometric sequences can be written recursively too: $a_n = a_{n-1} + d$ and $a_n = r\,a_{n-1}$.
A recursive rule is easy to write and easy for a computer to follow, but to find $F_{100}$ you would have to work out
all 99 terms before it. Turning a recursive rule into a **closed form** (a formula in $n$ alone, like
$a_1 + (n-1)d$) is one of the main jobs of this part of mathematics.

### The golden ratio hiding in Fibonacci

Divide each Fibonacci number by the one before:

| $n$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $F_n / F_{n-1}$ | 1 | 2 | 1.5 | 1.667 | 1.6 | 1.625 | 1.615 | 1.619 | 1.618 |

The ratios swing above and below one number and close in on it:

$$\varphi = \frac{1 + \sqrt5}{2} \approx 1.6180339887\ldots$$

This is the **golden ratio**. Here is why it appears. If the ratio settles on some number $x$, then for large $n$,
$F_n \approx x\,F_{n-1}$ and $F_{n-1} \approx x\,F_{n-2}$. Put these into $F_n = F_{n-1} + F_{n-2}$ and divide by
$F_{n-2}$:

$$x^2 = x + 1.$$

Solving with the quadratic formula gives $x = \dfrac{1 \pm \sqrt5}{2}$, and the positive answer is $\varphi$. The
same idea leads to a closed form for the Fibonacci numbers, Binet's formula:

$$F_n = \frac{\varphi^{\,n} - \psi^{\,n}}{\sqrt5}, \qquad \psi = \frac{1 - \sqrt5}{2} \approx -0.618.$$

It is surprising that a formula full of $\sqrt5$ always gives a whole number, but it does: try $n = 1, 2, 3$.

### Sigma notation

Long sums are written with the Greek capital letter sigma, $\Sigma$, meaning "add up":

$$\sum_{k=1}^{n} k = 1 + 2 + 3 + \cdots + n, \qquad \sum_{k=1}^{n} (2k - 1) = 1 + 3 + 5 + \cdots + (2n - 1).$$

Read it as: *let $k$ run from 1 to $n$, work out the expression for each $k$, and add the results.*

### Proof by induction

Think of an endless row of dominoes. To be sure they **all** fall, you need just two facts:

1. **The first one falls.** (The *base case*.)
2. **Whenever one falls, it knocks over the next one.** (The *inductive step*.)

Then the first knocks the second, the second knocks the third, and so on without end. A proof by induction uses
exactly this to show a statement is true for every whole number $n \ge 1$.

## Worked example: the odd numbers make squares

**Claim.** For every whole number $n \ge 1$, $\displaystyle\sum_{k=1}^{n} (2k - 1) = n^2$.

**Base case, $n = 1$.** The left side is just the first odd number, 1. The right side is $1^2 = 1$. They match.

**Inductive step.** Suppose the claim is true for some number $m$, that is

$$1 + 3 + 5 + \cdots + (2m - 1) = m^2.$$

We must show it is then true for $m + 1$. The sum of the first $m+1$ odd numbers is the sum of the first $m$, plus
the next odd number, $2(m+1) - 1 = 2m + 1$:

$$1 + 3 + \cdots + (2m-1) + (2m+1) = m^2 + 2m + 1 = (m+1)^2.$$

That is exactly the claim for $m + 1$.

**Conclusion.** The claim is true for $n = 1$, and each case makes the next one true, so it is true for every
$n \ge 1$. ∎

The picture behind it is the one from the Explore step: each new odd number is the L-shaped border that turns an
$m \times m$ square into an $(m+1) \times (m+1)$ square.

## Try it

1. Write the first six terms of $a_1 = 2$, $a_n = 3a_{n-1} - 1$.
2. Use Binet's formula with $n = 2$ to check that it gives $F_2 = 1$.
3. Write $2 + 4 + 6 + \cdots + 40$ in sigma notation.
4. Prove by induction that $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ for every $n \ge 1$.
5. What is wrong with this "proof" that all horses are the same colour? *Base case: one horse is one colour.
   Step: in a group of $m+1$ horses, the first $m$ are one colour and the last $m$ are one colour, and the two groups
   overlap, so all $m+1$ are one colour.*

??? note "Answers"
    1. 2, 5, 14, 41, 122, 365.
    2. $\varphi^2 - \psi^2 = (\varphi - \psi)(\varphi + \psi) = \sqrt5 \times 1$, so $F_2 = \dfrac{\sqrt5}{\sqrt5} = 1$.
    3. $\displaystyle\sum_{k=1}^{20} 2k$.
    4. Base case: $1 = \frac{1 \times 2}{2}$. Step: if $1 + \cdots + m = \frac{m(m+1)}{2}$, then adding $m+1$ gives
       $\frac{m(m+1)}{2} + (m+1) = \frac{m(m+1) + 2(m+1)}{2} = \frac{(m+1)(m+2)}{2}$, which is the claim for $m+1$.
       This is Gauss's sum from the Build step, now proved for every $n$.
    5. The step fails going from 1 horse to 2. With $m = 1$, "the first 1" and "the last 1" of two horses do not
       overlap at all, so nothing links their colours. One broken domino stops the whole row.

## Common mistake

**Assuming what you want to prove.** In the inductive step you may assume the claim for $m$ only, and you must
*reach* the claim for $m + 1$ by working it out. Writing down the $m + 1$ case at the start and "checking" it is
circular.

## Where it leads

- Back a step: [Master: geometric sequences](04-master.md)
- Sequences, limits and infinite sums done with full proofs, on the U of T shelf:
  [MAT137 Unit 1 (logic and proofs)](../../uoft/MAT137/unit01.md),
  [Unit 11 (sequences)](../../uoft/MAT137/unit11.md) and [Unit 13 (series)](../../uoft/MAT137/unit13.md).
- The other topics: [all topics](../index.md).
