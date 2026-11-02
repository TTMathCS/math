---
title: "Divisibility by 3 and 9"
---

# Divisibility by 3 and 9

*Number theory · level 3, lesson 3 of 6*

## A question to start

Is 123,456,789 divisible by 9?

Add up its digits: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45. And 45 = 9 × 5. So the answer is **yes**.

Now shuffle the digits any way you like: 987,654,321, or 192,837,465, or 518,273,946. Every one of them is divisible
by 9 too. There are 362,880 different ways to shuffle nine digits, and every single one gives a multiple of 9.

That is very strange. Shuffling digits changes a number completely. 123,456,789 and 987,654,321 are not close at all.
Why should they share this property? This lesson finds the reason, and it is one of the prettiest little proofs in
all of arithmetic.

## The idea

### The test

**A number is divisible by 9 when the sum of its digits is divisible by 9.**

**A number is divisible by 3 when the sum of its digits is divisible by 3.**

The **digit sum** is what you get by adding the digits. The digit sum of 4,725 is 4 + 7 + 2 + 5 = 18. Since 18 is
divisible by 9, so is 4,725. (Check: 4,725 = 9 × 525.)

Notice how different this is from the tests in lessons 1 and 2. For 2, 4, 5, 8 and 10, you only look at the **end**
of the number. For 3 and 9, **every digit counts**.

### Why: a ten is a nine plus one

In lessons 1 and 2 we asked how tens and hundreds share out. Let us ask the same thing for 9.

Share a ten into nines: you get one nine, and **1 left over**. So 10 = 9 + 1.

Here is the number 23 drawn that way. Each ten is a bar of 9 blue squares and 1 orange square.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 150" role="img" aria-label="The number 23 as two bars of ten and three ones. In each bar nine squares are blue and one is orange. The orange squares, 2 from the tens and 3 ones, number 5, the digit sum">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <rect x="20" y="20" width="18" height="18"/><rect x="38" y="20" width="18" height="18"/><rect x="56" y="20" width="18" height="18"/>
    <rect x="74" y="20" width="18" height="18"/><rect x="92" y="20" width="18" height="18"/><rect x="110" y="20" width="18" height="18"/>
    <rect x="128" y="20" width="18" height="18"/><rect x="146" y="20" width="18" height="18"/><rect x="164" y="20" width="18" height="18"/>
    <rect x="20" y="50" width="18" height="18"/><rect x="38" y="50" width="18" height="18"/><rect x="56" y="50" width="18" height="18"/>
    <rect x="74" y="50" width="18" height="18"/><rect x="92" y="50" width="18" height="18"/><rect x="110" y="50" width="18" height="18"/>
    <rect x="128" y="50" width="18" height="18"/><rect x="146" y="50" width="18" height="18"/><rect x="164" y="50" width="18" height="18"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <rect x="182" y="20" width="18" height="18"/>
    <rect x="182" y="50" width="18" height="18"/>
    <rect x="20" y="90" width="18" height="18"/><rect x="38" y="90" width="18" height="18"/><rect x="56" y="90" width="18" height="18"/>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="214" y="34">ten = 9 + 1</text>
    <text x="214" y="64">ten = 9 + 1</text>
    <text x="214" y="104">3 ones</text>
  </g>
  <text x="20" y="138" font-size="12" fill="currentColor">blue: 2 nines = 18 · orange: 2 + 3 = 5, the digit sum</text>
</svg>
</div>

The blue squares make whole nines: 2 of them, 18 squares. The orange squares are everything that is left: one from
each ten (that is 2, the **tens digit**) and the 3 ones (the **ones digit**). So the orange squares number 2 + 3 = 5,
which is exactly the **digit sum**.

So 23 = 18 + 5: a pile of nines, plus the digit sum. That tells us that 23 is not divisible by 9, and it even tells
us the remainder: **5**.

### Hundreds and thousands work the same way

A hundred is 99 + 1. And 99 = 9 × 11, so a hundred is a pile of nines with **1 left over**.

A thousand is 999 + 1, and 999 = 9 × 111. Again a pile of nines with **1 left over**.

The same is true for ten thousand (9,999 + 1), a million (999,999 + 1), and every place in our number system. Each
place is "a row of nines, plus 1".

So take any number, say 4,725 = 4 thousands + 7 hundreds + 2 tens + 5 ones.

- Each of the 4 thousands is a pile of nines plus 1: that leaves **4** over.
- Each of the 7 hundreds is a pile of nines plus 1: that leaves **7** over.
- Each of the 2 tens is a nine plus 1: that leaves **2** over.
- The 5 ones are **5** over.

All the nines together make a big pile of nines. What is left is 4 + 7 + 2 + 5 = **18**, the digit sum. So

4,725 = (a pile of nines) + 18.

The pile of nines is always divisible by 9. So 4,725 is divisible by 9 exactly when 18 is. It is.

That is the whole proof. Every number is **a pile of nines plus its digit sum**. Whatever the digit sum does with
nines, the number does too.

### Why 3 works too

A pile of nines is also a pile of threes, because 9 = 3 + 3 + 3. So every number is also **a pile of threes plus its
digit sum**. That means a number is divisible by 3 exactly when its digit sum is.

Notice that this does **not** work for other numbers. A ten is 9 + 1, but a ten is not "a pile of fours plus 1" (it is
8 + 2) or "a pile of sevens plus 1" (it is 7 + 3). The digit-sum test is special to 3 and 9, because they are the
numbers that divide 9.

### The remainder, and the digit sum of the digit sum

Since every number is a pile of nines plus its digit sum, **dividing a number by 9 leaves the same remainder as
dividing its digit sum by 9**.

If the digit sum is big, take the digit sum again. For 987,654,321 the digit sum is 45, and the digit sum of 45 is 9.
Keep going until you reach a single digit. That single digit is the remainder on dividing by 9, except that a 9
means remainder 0. (This final single digit is sometimes called the **digital root**.)

For 3 it is even easier: the remainder on dividing by 3 is the remainder of the digit sum on dividing by 3.

### The shuffle mystery, solved

Shuffling the digits of a number does not change its digit sum. The same digits are being added, just in a different
order. So a shuffled number is "a different pile of nines plus **the same** digit sum". That is why all 362,880
shuffles of 123,456,789 are multiples of 9: they all have digit sum 45.

And here is a bonus. Two numbers with the same digit sum leave the same remainder when divided by 9. So their
**difference** is a pile of nines. Try it: 72 − 27 = 45 = 9 × 5, and 91 − 19 = 72 = 9 × 8. A number minus its
reverse is always a multiple of 9.

## Worked examples

**1. Test 51,234 for 3 and 9, and find the remainders.**

Digit sum: 5 + 1 + 2 + 3 + 4 = 15.

- 15 = 3 × 5, so 51,234 **is divisible by 3**.
- 15 is not divisible by 9, so 51,234 **is not divisible by 9**. The digit sum of 15 is 1 + 5 = 6, so the remainder on
  dividing by 9 is **6**. Check: 9 × 5,692 = 51,228, and 51,234 − 51,228 = 6. ✓

**2. Nine ones.** Is 111,111,111 divisible by 9?

Digit sum: 9. **Yes.** In fact 111,111,111 ÷ 9 = 12,345,679, a number with every digit from 1 to 9 except 8.

**3. A missing digit.** Fill the gap in 7_4 so that the number is divisible by 9. Then find every digit that makes it
divisible by 3.

The known digits add to 7 + 4 = 11. For 9, the digit sum must be a multiple of 9. The next one after 11 is 18, so the
missing digit is 18 − 11 = **7**: 774 = 9 × 86. (The one after that is 27, which would need a digit of 16. Too big.)

For 3, the digit sum must be 12, 15 or 18 (the multiples of 3 that 11 plus one digit can reach). So the missing digit
is **1, 4 or 7**: 714, 744, 774.

**4. A mind-reading trick.** Ask a friend to:

1. Write any number with a few digits, for example 5,238.
2. Shuffle its digits to make another number, say 3,852.
3. Take the smaller from the larger: 5,238 − 3,852 = 1,386.
4. Cross out one digit of the answer that is not 0, and read you the rest.

Suppose they cross out the 8 and read you 1, 3, 6. You add: 1 + 3 + 6 = 10. The difference must be a multiple of 9
(the two numbers had the same digit sum), so its digit sum must be a multiple of 9. The next one after 10 is 18, so
the crossed-out digit was 18 − 10 = **8**. (If the digits you hear already add to a multiple of 9, the missing
digit is 9. That is why the friend must not cross out a 0: you could not tell a 0 from a 9.)

**5. A very big number.** What is the remainder when 1 followed by twenty 0s, plus 8, is divided by 9?

The number is 100,000,000,000,000,000,008. Its digit sum is 1 + 8 = 9. So it is divisible by 9: remainder **0**.

## Try it

1. Test each number for 3 and for 9: 2,358, 6,789, 99,999.
2. Find the remainder when 8,765 is divided by 9, and when it is divided by 3.
3. Find every digit that can fill the gap in 3_5 to make it divisible by 3.
4. What is the smallest three-digit number, with three **different** digits, that is divisible by 9?
5. Explain why every number like 444 or 777 (three equal digits) is divisible by 3.
6. Without dividing, explain why 6,512 − 2,156 must be a multiple of 9. Then check.
7. A number is divisible by 9. Is it always divisible by 3? A number is divisible by 3. Is it always divisible by 9?
8. In the mind-reading trick, your friend reads you the digits 4, 0, 5 (after crossing one out). What digit did they
   cross out?

??? note "Answers"
    1. 2,358: digit sum 18, divisible by 3 **and** 9. 6,789: digit sum 30, divisible by 3 but **not** 9 (30 is not a
       multiple of 9). 99,999: digit sum 45, divisible by 3 **and** 9.
    2. Digit sum 8 + 7 + 6 + 5 = 26, and 2 + 6 = 8. So the remainder on dividing by 9 is **8**. For 3: 26 = 3 × 8 + 2,
       so the remainder is **2**. Check: 9 × 973 = 8,757, and 8,765 − 8,757 = 8.
    3. Known digits: 3 + 5 = 8. The digit sum must be 9, 12 or 15, so the digit is **1, 4 or 7**: 315, 345, 375.
    4. **108.** The digit sum must be 9 or 18. Three-digit numbers start at 100. The smallest with digit sum 9 are 108,
       117, ...; 108 has three different digits (1, 0, 8). Anything smaller from 100 to 107 has digit sum 1 to 8.
       Check: 108 = 9 × 12.
    5. The digit sum of a number with three equal digits is 3 times that digit, for example 4 + 4 + 4 = 3 × 4. That
       is always a multiple of 3.
    6. 2,156 is a shuffle of 6,512 (same digits), so both have digit sum 14. Each is "a pile of nines plus 14", so the
       difference is a pile of nines minus another pile of nines: a multiple of 9. Check: 6,512 − 2,156 = 4,356, and
       4,356 = 9 × 484.
    7. **Yes**, because a nine is three threes. **No**: 6 is divisible by 3 but not by 9.
    8. 4 + 0 + 5 = 9, which is already a multiple of 9. The missing digit is not 0 (they were told not to cross out
       a 0), so it must be **9**.

## Common mistake

**Using the digit sum for other numbers.** The test works only for 3 and 9. The digit sum of 16 is 7, but 16 is
divisible by 4 and 8, and 7 is not. The digit sum of 14 is 5, but 14 is not divisible by 5. For other numbers you need
other tests.

**Forgetting that the digit sum is not the remainder for 3.** For 9, the repeated digit sum gives the remainder
directly (with 9 meaning 0). For 3 you must still divide the digit sum by 3. The digit sum of 25 is 7, and the
remainder on dividing 25 by 3 is 1, not 7.

## Where it leads

- Back: [Divisibility by 4 and 8](02-tests-4-and-8.md) · Next: [Divisibility by 6, 11 and others](04-tests-6-11-more.md),
  where 10 = 11 − 1 gives a test with plus and minus signs.
- [Level 3 page](index.md) · [Number theory topic page](../index.md)
- In [level 5](../level-5/index.md), "a ten is a nine plus one" becomes "10 is 1 on a clock with 9 hours", and the
  digit sum becomes a way to check long multiplication, called **casting out nines**.
- Why there are 362,880 shuffles of nine digits is a question for [Counting](../../counting/index.md).
