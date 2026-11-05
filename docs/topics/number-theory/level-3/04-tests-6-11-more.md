---
title: "Divisibility by 6, 11 and others"
---

# Divisibility by 6, 11 and others

*Number theory · level 3, lesson 4 of 6*

## A question to start

Pick any three-digit number, for example 123. Write it twice in a row to make a six-digit number: 123,123.

Now divide it by 7. Then divide the answer by 11. Then divide that answer by 13.

- 123,123 ÷ 7 = 17,589
- 17,589 ÷ 11 = 1,599
- 1,599 ÷ 13 = 123

Every division comes out exactly, with no remainder, and at the end you get back the number you started with. Try it
with your own three-digit number. It always works. Why? The answer is at the end of this lesson's idea section, and
it uses two of the tests you are about to learn.

## The idea

### Joining two tests together: 6

You already have tests for 2 (last digit even) and for 3 (digit sum divisible by 3). What about 6?

**A number is divisible by 6 when it passes the test for 2 and the test for 3.**

Here is why. Write out the multiples of 3, and mark which are even:

3, **6**, 9, **12**, 15, **18**, 21, **24**, ...

They take turns: odd, even, odd, even. (Adding 3, an odd number, always swaps odd and even.) The even ones are
6, 12, 18, 24, ...: exactly the multiples of 6. So "a multiple of 3 that is also even" is the same thing as "a multiple
of 6".

For example, 4,512 is even, and its digit sum is 4 + 5 + 1 + 2 = 12, which is divisible by 3. So 4,512 is divisible
by 6. (4,512 = 6 × 752.)

### When joining tests works, and when it does not

Joining tests works for many numbers:

| Divisible by | Passes both tests for | Example |
| --- | --- | --- |
| 6 | 2 and 3 | 4,512 |
| 12 | 3 and 4 | 5,316 |
| 15 | 3 and 5 | 2,145 |
| 18 | 2 and 9 | 7,236 |
| 24 | 3 and 8 | 9,312 |
| 36 | 4 and 9 | 4,572 |
| 45 | 5 and 9 | 6,795 |

But be careful. You might think "divisible by 4 and by 6 means divisible by 24", because 4 × 6 = 24. Try 12. It is
divisible by 4 and by 6, but **not** by 24. And 36 is divisible by 4 and by 6, but 36 = 24 + 12.

What went wrong? 4 and 6 **share a factor**: both are even, both contain a 2. When you ask for "a multiple of 4 and a
multiple of 6", that shared 2 only has to be there once. The smallest number that is a multiple of both is 12, not 24.

The safe rule: **you may join two tests when the two numbers share no factor except 1.** 2 and 3 share nothing. 3 and 4
share nothing. 4 and 9 share nothing. But 4 and 6 share 2, and 6 and 9 share 3. (In [level 4](../level-4/index.md)
you will learn exactly why this rule works, using the **least common multiple**.)

### The test for 11: plus, minus, plus, minus

For 9, the key fact was that a ten is a nine plus one. For 11, the key fact is that a ten is an eleven **minus** one.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 120" role="img" aria-label="A bar of ten squares beside an empty dashed square: ten is one square short of eleven. Below, ninety-nine plus one is a hundred, so a hundred is nine elevens and one more">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <rect x="20" y="20" width="20" height="20"/><rect x="40" y="20" width="20" height="20"/><rect x="60" y="20" width="20" height="20"/>
    <rect x="80" y="20" width="20" height="20"/><rect x="100" y="20" width="20" height="20"/><rect x="120" y="20" width="20" height="20"/>
    <rect x="140" y="20" width="20" height="20"/><rect x="160" y="20" width="20" height="20"/><rect x="180" y="20" width="20" height="20"/>
    <rect x="200" y="20" width="20" height="20"/>
  </g>
  <rect x="220" y="20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="252" y="35" font-size="12" fill="currentColor">10 = 11 − 1</text>
  <text x="20" y="72" font-size="12" fill="currentColor">a ten is one short of an eleven: it counts as −1</text>
  <text x="20" y="98" font-size="12" fill="currentColor">a hundred = 99 + 1 = nine elevens + 1: it counts as +1</text>
</svg>
</div>

Now go up the places:

- A **one** is just 1.
- A **ten** is 11 − 1: a whole eleven, but **1 short**.
- A **hundred** is 99 + 1, and 99 = 11 × 9: a pile of elevens, plus **1 over**.
- A **thousand** is 1,001 − 1, and 1,001 = 11 × 91: a pile of elevens, **1 short**.
- A **ten thousand** is 9,999 + 1, and 9,999 = 11 × 909: **1 over**.

The places take turns: over, short, over, short. So when you share a number into elevens, each ones digit and
hundreds digit and ten-thousands digit adds to what is left, and each tens digit and thousands digit takes away.

**The test for 11:** starting from the **right**, add and subtract the digits in turn: + ones − tens + hundreds −
thousands + ... If the answer is divisible by 11 (and 0 counts, and so do negative answers like −11 or −22), then so
is the number.

Try 3,729. From the right: 9 − 2 + 7 − 3 = 11. That is divisible by 11, so 3,729 is too. (3,729 = 11 × 339.)

Try 918,082. From the right: 2 − 8 + 0 − 8 + 1 − 9 = −22 = 11 × (−2). So 918,082 is divisible by 11. (918,082 =
11 × 83,462.)

For two-digit numbers the test is very simple: the number is divisible by 11 only when its two digits are equal
(11, 22, 33, ..., 99). The alternating sum, ones − tens, is then 0.

### A test for 7

7 is awkward: a ten is 7 + 3, a hundred is 98 + 2, and there is no simple pattern. But there is a trick.

**Chop off the last digit, double it, and subtract it from what is left.** If the answer is divisible by 7, so was
the number. Repeat if the answer is still big.

Try 343: chop off 3, leaving 34. Double 3 to get 6. 34 − 6 = 28 = 7 × 4. So 343 is divisible by 7 (343 = 7 × 49).

**Why it works** (for the curious). Take 343 again. The trick turned it into 28. Now compare 343 with ten lots of 28:

343 = 280 + 63 = 10 × 28 + 21 × 3.

That always happens: the number is **ten times the answer, plus 21 times the last digit**. (Ten times "34 minus
twice 3" is 340 minus 60; to get back to 343 you add 60 and 3, which is 63, or 21 lots of 3.) Now 21 = 3 × 7 is a
multiple of 7. So if the answer is a multiple of 7, then ten times the answer is a multiple of 7, and 21 times the last
digit is a multiple of 7, and adding them gives a multiple of 7. (The trick also works the other way round, because
7 shares no factor with 10, but that part is for [level 5](../level-5/index.md).)

### The mystery of 123,123 solved

Writing 123 twice makes 123,123 = 123 × 1,000 + 123 = 123 × 1,001.

Now test 1,001. For 11: 1 − 0 + 0 − 1 = 0. Divisible. For 7: 100 − 2 = 98 = 7 × 14. Divisible. In fact

1,001 = 7 × 11 × 13.

So any three-digit number written twice is that number times 7 × 11 × 13. Dividing by 7, 11 and 13 just takes those
three factors away again, and leaves the number you started with.

<figure class="play" data-play="hundred" data-mode="multiples"><span class="ai-tag">AI-created</span><figcaption><b>Multiples of 6 and 11.</b> 11 runs down a diagonal: 11, 22, 33 …</figcaption></figure>

## Worked examples

**1. Is 5,316 divisible by 12?**

12 = 3 × 4, and 3 and 4 share no factor, so test both.

- For 4: last two digits 16 = 4 × 4. Yes.
- For 3: digit sum 5 + 3 + 1 + 6 = 15 = 3 × 5. Yes.

So **yes**: 5,316 = 12 × 443.

**2. Is 7,920 divisible by 72?**

72 = 8 × 9, and 8 and 9 share no factor.

- For 8: last three digits 920 = 8 × 115. Yes.
- For 9: digit sum 7 + 9 + 2 + 0 = 18. Yes.

So **yes**: 7,920 = 72 × 110.

**3. Test 90,817 for 11.**

From the right: 7 − 1 + 8 − 0 + 9 = 23. 23 is not divisible by 11 (23 = 22 + 1), so **no**. In fact the remainder is 1,
because the alternating sum tells you what is left over, just like the digit sum did for 9.

**4. Is 2,016 divisible by 7?**

Chop off 6 and double it: 201 − 12 = 189. Still big, so again: chop off 9 and double it: 18 − 18 = 0. Zero is divisible
by 7, so **yes**: 2,016 = 7 × 288.

**5. A missing digit for 12.** Fill the gap in 3,_24 so the number is divisible by 12.

The last two digits, 24, are divisible by 4 whatever the gap is. For 3, the digit sum 3 + _ + 2 + 4 = 9 + _ must be a
multiple of 3, so the gap is **0, 3, 6 or 9**: 3,024, 3,324, 3,624, 3,924.

## Try it

1. Which are divisible by 6? 726, 1,234, 9,000.
2. Which are divisible by 11? 5,082, 8,019, 1,234,321.
3. Use the chop-and-double trick to test 581 and 1,234 for 7.
4. Is 2,145 divisible by 15? Is 6,795 divisible by 45?
5. A number is divisible by 6 and by 9. Must it be divisible by 54? Find an example to show your answer.
6. Fill the gap in 4,5_2 so that the number is divisible by 11.
7. Explain why every number like 3,773 or 5,225 (first digit = last digit, middle two digits equal) is divisible by 11.
8. Write your own three-digit number twice, and divide by 7, 11 and 13. Then explain why the answer could have been
   found by dividing by 1,001 just once.

??? note "Answers"
    1. 726: even, digit sum 15: **yes** (726 = 6 × 121). 1,234: even, but digit sum 10 is not a multiple of 3: **no**.
       9,000: even, digit sum 9: **yes**.
    2. 5,082: 2 − 8 + 0 − 5 = −11: **yes** (5,082 = 11 × 462). 8,019: 9 − 1 + 0 − 8 = 0: **yes** (8,019 = 11 × 729).
       1,234,321: 1 − 2 + 3 − 4 + 3 − 2 + 1 = 0: **yes** (1,234,321 = 11 × 112,211).
    3. 581: 58 − 2 = 56 = 7 × 8: **yes** (581 = 7 × 83). 1,234: 123 − 8 = 115, then 11 − 10 = 1: **no**.
    4. 2,145 ends in 5 and has digit sum 12, so it passes the tests for 5 and 3: **yes** (2,145 = 15 × 143). 6,795
       ends in 5 and has digit sum 27, so it passes the tests for 5 and 9: **yes** (6,795 = 45 × 151).
    5. **No.** 6 and 9 share the factor 3, so you cannot just multiply them. 18 is divisible by 6 and by 9, but not by
       54. (A number divisible by 6 and 9 must be divisible by 18.)
    6. From the right: 2 − _ + 5 − 4 = 3 − _. This must be a multiple of 11: the only digit that works is **3**
       (giving 0). So 4,532 = 11 × 412.
    7. For a number with digits a, b, b, a the alternating sum from the right is a − b + b − a = 0. Zero is a multiple
       of 11. (3,773 = 11 × 343 and 5,225 = 11 × 475.)
    8. Dividing by 7, then 11, then 13 is the same as dividing by 7 × 11 × 13 = 1,001 all at once. And the six-digit
       number is your number times 1,001, so the answer is your number.

## Common mistake

**Multiplying two tests that share a factor.** Divisible by 4 and by 6 does not mean divisible by 24 (look at 12).
Divisible by 6 and by 9 does not mean divisible by 54 (look at 18). Only join tests for numbers that share no factor
but 1.

**Starting the alternating sum from the wrong end, or not alternating.** For 11 you must take turns, + − + −. Adding
all the digits is the test for 9, not for 11. (Starting from the left instead of the right only flips the sign of the
answer, so it still gives the right yes or no, but it does not give the right remainder.)

## Where it leads

- Back: [Divisibility by 3 and 9](03-tests-3-and-9.md) · Next: [Prime factorization](05-prime-factorization.md),
  where the tests help you break numbers into primes quickly.
- [Level 3 page](index.md) · [Number theory topic page](../index.md)
- Why "share no factor" is the right rule: [level 4](../level-4/index.md), with the greatest common divisor and least
  common multiple.
- In [level 5](../level-5/index.md) the test for 11 gets a one-line explanation: on a clock with 11 hours, 10 is the
  same as −1.
