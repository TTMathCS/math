---
title: "The divisibility tests explained"
---

# The divisibility tests explained

*Number theory · level 5, lesson 5 of 6*

## A question to start

A student works out $3271 \times 4508$ and gets 14,745,868. Is that right?

You do not need to redo the multiplication. Add the digits of each number, again and again until one digit is left:

- $3271$: $3 + 2 + 7 + 1 = 13$, then $1 + 3 = 4$.
- $4508$: $4 + 5 + 0 + 8 = 17$, then $1 + 7 = 8$.
- Multiply those: $4 \times 8 = 32$, then $3 + 2 = 5$.
- The answer, 14,745,868: $1 + 4 + 7 + 4 + 5 + 8 + 6 + 8 = 43$, then $4 + 3 = 7$.

The answer should give 5 but gives 7, so it is **wrong**. (The true product is 14,745,668: one digit is off.) This old
trick is called **casting out nines**. It is the digit-sum test for 9 from [level 3](../level-3/index.md), used in
a new way. In this lesson you will see why the digit-sum test works, why the test for 11 alternates plus and minus,
and how one number, 1001, gives a test for 7, 11 and 13 all at once.

## The idea

### A number is a sum of powers of 10

Our way of writing numbers is **place value**: each digit is multiplied by a power of 10. For example

$$4725 = 4 \times 1000 + 7 \times 100 + 2 \times 10 + 5.$$

To find the remainder of 4725 on some clock, the big rule from [lesson 3](03-congruence.md) says we may replace each
power of 10 by its remainder on that clock. So **every divisibility test comes from asking: what are the powers of 10
on this clock?**

### Clocks where 10 is 0: tests for 2, 5, 10, 4 and 8

On the mod 2, mod 5 and mod 10 clocks, $10 \equiv 0$. So $100 \equiv 0$, $1000 \equiv 0$, and every place except the
units vanishes:

$$4725 \equiv 0 + 0 + 0 + 5 \pmod 5.$$

**Only the last digit matters** for 2, 5 and 10.

For 4: $10 \equiv 2$ but $100 = 25 \times 4 \equiv 0 \pmod 4$. So every place from the hundreds up vanishes, and only
the **last two digits** matter. For 8: $1000 = 125 \times 8 \equiv 0 \pmod 8$, so only the **last three digits**
matter. In each case the test gives not just "yes or no" but the actual remainder: $4725 \equiv 25 \equiv 1 \pmod 4$.

### Clocks where 10 is 1: tests for 9 and 3

On the mod 9 clock, $10 = 9 + 1 \equiv 1$. Then every power of 10 is also 1, because $10^k \equiv 1^k = 1$. So

$$4725 = 4 \times 10^3 + 7 \times 10^2 + 2 \times 10 + 5 \equiv 4 + 7 + 2 + 5 = 18 \pmod 9.$$

**A number and its digit sum always leave the same remainder when divided by 9.** That is the digit-sum test, now
with its reason in one line. Here $18 \equiv 0$, so 4725 is a multiple of 9 ($4725 = 525 \times 9$).

The same works mod 3, because $10 = 3 \times 3 + 1 \equiv 1 \pmod 3$ as well. A number and its digit sum leave the same
remainder mod 3.

Here is the reason as a picture for a two-digit number like 47. Forty-seven is 4 tens and 7 ones. Each ten is a 9 and
a 1. Take away all the 9s (they are multiples of 9) and what is left is 4 ones and 7 ones: the digit sum, $4 + 7$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 130" role="img" aria-label="Four bars of ten, each split into a blue block of nine and one orange square, next to seven orange ones; removing the nines leaves four plus seven orange squares">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <rect x="20" y="10" width="20" height="90"/><rect x="50" y="10" width="20" height="90"/>
    <rect x="80" y="10" width="20" height="90"/><rect x="110" y="10" width="20" height="90"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <rect x="20" y="100" width="20" height="10"/><rect x="50" y="100" width="20" height="10"/>
    <rect x="80" y="100" width="20" height="10"/><rect x="110" y="100" width="20" height="10"/>
    <rect x="160" y="100" width="20" height="10"/><rect x="185" y="100" width="20" height="10"/>
    <rect x="210" y="100" width="20" height="10"/><rect x="235" y="100" width="20" height="10"/>
    <rect x="260" y="100" width="20" height="10"/><rect x="285" y="100" width="20" height="10"/>
    <rect x="310" y="100" width="20" height="10"/>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="20" y="125">4 tens = 4 nines + 4 ones</text>
    <text x="250" y="125">+ 7 ones</text>
    <text x="160" y="40">blue: multiples of 9, cast out</text>
    <text x="160" y="60">orange: 4 + 7 = 11 left over</text>
    <text x="160" y="80">so 47 ≡ 11 ≡ 2 (mod 9)</text>
  </g>
</svg>
</div>

### Casting out nines

Because every number is congruent to its digit sum mod 9, you can check a multiplication on the mod 9 clock. If
$a \times b = c$ is right, then (digit sum of $a$) × (digit sum of $b$) must be congruent to (digit sum of $c$) mod 9.
Repeating the digit sum until one digit is left gives the remainder mod 9 directly (with 9 standing for 0). That
single digit is sometimes called the **digital root**.

Casting out nines is a **one-way** test:

- If the two sides **disagree**, the answer is certainly wrong.
- If they **agree**, the answer is probably right, but not certainly. Any mistake that changes the answer by a
  multiple of 9 slips through. The most common one is **swapping two digits**: 14,754,668 has the same digits as
  14,745,668 in a different order, so the same digit sum, and the check cannot tell them apart.

### Clocks where 10 is −1: the test for 11

On the mod 11 clock, $10 = 11 - 1 \equiv -1$. So the powers of 10 go

$$10^0 \equiv 1, \quad 10^1 \equiv -1, \quad 10^2 \equiv 1, \quad 10^3 \equiv -1, \ldots$$

(since $(-1)^k$ is 1 for even $k$ and $-1$ for odd $k$). For $4725$:

$$4725 \equiv -4 + 7 - 2 + 5 = 6 \pmod{11}.$$

**Add and subtract the digits in turn, starting with + at the units digit.** The result is congruent to the number mod
11. If it is a multiple of 11 (including 0 or a negative multiple), so is the number. That is why the test for 11
alternates: the powers of 10 alternate between 1 and $-1$ on the mod 11 clock.

### One test for 7, 11 and 13

Here is a test you may not have seen. Notice that

$$1001 = 7 \times 11 \times 13.$$

So $1000 \equiv -1 \pmod{1001}$. Cut a number into **blocks of three digits** from the right. Each block is multiplied
by a power of 1000, and $1000 \equiv -1$. So:

> **Alternately add and subtract the three-digit blocks, starting with + at the right.** The result is congruent to
> the number mod 1001, and therefore also mod 7, mod 11 and mod 13.

For example, for 123,456,789: $789 - 456 + 123 = 456$. And $456 = 65 \times 7 + 1$, so 123,456,789 leaves remainder
1 when divided by 7. (Why does a congruence mod 1001 give one mod 7? If 1001 divides $a - b$, then so does every
factor of 1001, including 7.) This turns a 9-digit problem into a 3-digit one.

## Worked examples

**1. A remainder by digit sum.** Find the remainder of 87,654,321 on division by 9 and by 3.

- Digit sum: $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$, and $36 = 4 \times 9$.
- So 87,654,321 is a multiple of 9 (remainder **0**), and therefore also of 3 (remainder **0**).

**2. The test for 11.** Is 918,082 divisible by 11?

- From the right, with signs $+, -, +, -, \ldots$: $2 - 8 + 0 - 8 + 1 - 9 = -22$.
- $-22 = -2 \times 11$, a multiple of 11. So **yes**: $918082 = 11 \times 83462$.

**3. Casting out nines, the full check.** Check $2468 \times 1357 = 3{,}349{,}076$.

- $2468$: $2 + 4 + 6 + 8 = 20$, then 2.
- $1357$: $1 + 3 + 5 + 7 = 16$, then 7.
- $2 \times 7 = 14$, then 5.
- $3349076$: $3 + 3 + 4 + 9 + 0 + 7 + 6 = 32$, then 5. The two sides agree, so the answer passes. (It is in fact
  right.)

**4. The 1001 test.** Is 999,999 divisible by 7, 11 and 13?

- Blocks: 999 and 999. Alternating: $999 - 999 = 0$.
- 0 is a multiple of everything, so 999,999 is divisible by 7, by 11 and by 13. (Indeed
  $999999 = 3^3 \times 7 \times 11 \times 13 \times 37$.)

**5. Why the last three digits work for 8.** Find the remainder of 2,026,115 on division by 8.

- $1000 \equiv 0 \pmod 8$, so only the last three digits count: 115.
- $115 = 14 \times 8 + 3$. The remainder is **3**.

## Try it

1. Find the remainders of 5,551,212 on division by 9 and by 3.
2. Is 37,291,605 divisible by 11? If not, what is its remainder?
3. A friend says $2468 \times 1357 = 3{,}348{,}076$. Use casting out nines to show this is wrong.
4. The four-digit number 7?24 is a multiple of 9. What is the missing digit?
5. Use the 1001 test to decide whether 12,012 is divisible by 7, 11 and 13.
6. Give an example of a wrong answer to $3271 \times 4508$ that casting out nines would **not** catch, and explain why.
7. Since $999 = 27 \times 37$, we have $1000 \equiv 1 \pmod{37}$. Invent a test for 37 using blocks of three digits,
   and use it to check whether 123,321 is a multiple of 37.
8. Harder: (a) show that any number minus its digit-reversal (for example $8352 - 2538$) is a multiple of 9. (b) Show
   that a number with an **even** number of digits plus its reversal (for example $8352 + 2538$) is a multiple of 11.

??? note "Answers"
    1. Digit sum: $5 + 5 + 5 + 1 + 2 + 1 + 2 = 21$. $21 = 2 \times 9 + 3$, so the remainder mod 9 is **3**. And
       $21 = 7 \times 3$, so the remainder mod 3 is **0**.
    2. From the right: $5 - 0 + 6 - 1 + 9 - 2 + 7 - 3 = 21$. $21 = 11 + 10$, so it is **not** divisible by 11; the
       remainder is **10**.
    3. The left side gives 5 (as in worked example 3). The right side: $3 + 3 + 4 + 8 + 0 + 7 + 6 = 31$, then
       $3 + 1 = 4$. Since $4 \ne 5$, the answer is wrong. (The true answer is 3,349,076.)
    4. Digit sum $7 + 2 + 4 + ? = 13 + ?$ must be a multiple of 9. The only digit that works is **5** (giving 18).
       Check: $7524 = 836 \times 9$.
    5. Blocks: 012 and 12. $12 - 12 = 0$, so **yes** to all three. Indeed
       $12012 = 12 \times 1001 = 12 \times 7 \times 11 \times 13$.
    6. For example 14,754,668 (two digits of the true answer 14,745,668 swapped). Its digit sum is still 41, giving
       5, so the check passes. Swapping digits never changes the digit sum, so casting out nines cannot see it. (Any
       answer that differs from the truth by a multiple of 9 passes; a swap of neighbouring digits $x, y$ changes the
       number by $9 \times (x - y)$ times a power of 10.)
    7. Since $1000 \equiv 1$, every power of 1000 is $\equiv 1$, so a number is congruent mod 37 to the **sum** of its
       three-digit blocks. For 123,321: $123 + 321 = 444 = 12 \times 37$. So **yes**, it is a multiple of 37
       ($123321 = 3333 \times 37$).
    8. (a) A number and its reversal have the same digits, so the same digit sum, so they are congruent mod 9. Their
       difference is therefore $\equiv 0 \pmod 9$. ($8352 - 2538 = 5814 = 646 \times 9$.) (b) With an even number of
       digits, reversing moves each digit from an odd place to an even place and back, so every sign in the
       alternating sum flips: the reversal is $\equiv -(\text{the number}) \pmod{11}$. So their sum is
       $\equiv 0 \pmod{11}$. ($8352 + 2538 = 10890 = 990 \times 11$.)

## Common mistake

**Thinking casting out nines proves an answer right.** It can only prove an answer **wrong**. Swapped digits, a
dropped or added 0 or 9, or any error by a multiple of 9 all pass the check.

**Starting the alternating sum from the wrong end.** The units digit always gets +, because it is multiplied by
$10^0 = 1$. If the number has an even number of digits and you start from the left with +, every sign is flipped. You
still get the right yes-or-no answer for divisibility, but the wrong remainder.

## Where it leads

- Back: [Last digits and big powers](04-last-digits-powers.md) · Next: [Check digits](06-check-digits.md), where
  remainders catch typing mistakes in book and card numbers.
- [Level 5 page](index.md) · [Number theory topic page](../index.md)
- The tests themselves, first met without reasons: [Level 3: Divisibility](../level-3/index.md), especially [the tests for 3 and 9](../level-3/03-tests-3-and-9.md) and [for 11](../level-3/04-tests-6-11-more.md).
- Place value, the writing of numbers as sums of powers of 10, is in [Numbers](../../numbers/index.md).
