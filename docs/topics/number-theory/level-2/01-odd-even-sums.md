---
title: "Odd and even sums"
---

# Odd and even sums

*Number theory · level 2, lesson 1 of 6*

## A question to start

Here are five numbers: 1, 3, 5, 7, 9. Pick exactly **five** of them (you may pick the same number more than once)
so that they add up to **20**.

For example, 9 + 5 + 3 + 1 + 1 = 19. So close! Try 9 + 7 + 1 + 1 + 1 = 19 again. Try 7 + 7 + 3 + 3 + 1 = 21. Too
far. You can try for a long time, but you will **never** get 20. This lesson will show you why, and the reason
fits in one sentence. You will never need to try all the ways.

## The idea

### A quick reminder: pairs of blocks

In level 1 you lined up blocks in **two rows** to see if a number is even or odd.

- An **even** number makes two rows of the same length: a **flat end**. Every block has a partner.
- An **odd** number makes two rows where **one block sticks out**: one block has no partner.

Now we put two numbers together and ask: is the **sum** even or odd? The **sum** is what you get when you add
numbers. The sum of 4 and 6 is 10.

### Even + even

Take 4 blocks and 6 blocks. Each one has a flat end. Push them together.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 105" role="img" aria-label="Four blocks in 2 rows plus six blocks in 2 rows make ten blocks in 2 rows with a flat end">
  <rect x="20" y="30" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="20" y="48" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="38" y="30" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="38" y="48" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="53" font-size="20" text-anchor="middle" fill="currentColor">+</text>
  <rect x="84" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="84" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="102" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="102" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="53" font-size="20" text-anchor="middle" fill="currentColor">=</text>
  <rect x="166" y="30" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="166" y="48" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="184" y="30" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="184" y="48" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="202" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="202" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="238" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="238" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="170.0" y="92" font-size="12" text-anchor="middle" fill="currentColor">10: flat end, even</text>
</svg>
</div>

Every block already had a partner, and pushing the groups together does not take any partners away. So the sum
still has a flat end. **Even + even = even.** 4 + 6 = 10, and 10 is even.

This works for **any** two even numbers, not just 4 and 6. We do not need to know how big they are. All we need to
know is that both have a flat end.

### Odd + even

Take 5 blocks (one sticks out) and 4 blocks (flat end). Push them together.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 105" role="img" aria-label="Five blocks with one sticking out plus four blocks in 2 rows make nine blocks with one sticking out">
  <rect x="20" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="20" y="48" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="38" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="38" y="48" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="56" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="53" font-size="20" text-anchor="middle" fill="currentColor">+</text>
  <rect x="102" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="102" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="53" font-size="20" text-anchor="middle" fill="currentColor">=</text>
  <rect x="166" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="166" y="48" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="184" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="184" y="48" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="202" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="202" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="238" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="170.0" y="92" font-size="12" text-anchor="middle" fill="currentColor">9: one block still sticks out, odd</text>
</svg>
</div>

The 4 blocks bring only pairs. They cannot help the lonely block in the 5, because they have no lonely block of
their own. So one block still sticks out. **Odd + even = odd.** 5 + 4 = 9, and 9 is odd.

The order does not matter: **even + odd = odd** too. 4 + 5 is also 9.

### Odd + odd: the surprise

Now take 5 blocks (one sticks out) and 3 blocks (one sticks out). Two odd numbers. You might expect the answer to
be "very odd"! But look.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 105" role="img" aria-label="Five blocks with one sticking out plus three blocks with one sticking out: the two lonely blocks join into a pair, making eight with a flat end">
  <rect x="20" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="20" y="48" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="38" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="38" y="48" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="56" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="53" font-size="20" text-anchor="middle" fill="currentColor">+</text>
  <rect x="102" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="102" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="120" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="53" font-size="20" text-anchor="middle" fill="currentColor">=</text>
  <rect x="166" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="166" y="48" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="184" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="184" y="48" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="202" y="30" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="202" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="30" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="220" y="48" width="18" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="170.0" y="92" font-size="12" text-anchor="middle" fill="currentColor">8: the two lonely blocks pair up, even</text>
</svg>
</div>

Each group has **one** lonely block. When you push the groups together, the two lonely blocks meet, and they become
**partners**! Now every block has a partner, and the end is flat. **Odd + odd = even.** 5 + 3 = 8, and 8 is even.

This is the heart of the lesson. **Why is odd + odd always even?** Because every odd number is "some pairs and one
extra". Two odd numbers bring two extras, and two extras make one more pair. Nothing is left over.

### The three rules together

| First number | Second number | Sum | Example |
| --- | --- | --- | --- |
| even | even | **even** | 4 + 6 = 10 |
| even | odd | **odd** | 4 + 5 = 9 |
| odd | odd | **even** | 5 + 3 = 8 |

A short way to remember: **the sum is odd only when exactly one of the numbers is odd.**

### Adding many numbers

What about adding three, four or more numbers? Think about the lonely blocks.

- Even numbers bring **no** lonely blocks.
- Each odd number brings **one** lonely block.

The lonely blocks pair up with each other, two at a time. So the only question is: **how many lonely blocks are
there, an even number or an odd number?**

- If you add an **even number of odd numbers** (two odds, four odds, six odds, ...), the lonely blocks all pair up.
  The sum is **even**.
- If you add an **odd number of odd numbers** (one odd, three odds, five odds, ...), one lonely block is left. The
  sum is **odd**.

Now look back at the puzzle. Five odd numbers bring five lonely blocks. Five is odd, so after they pair up, one is
still alone. **The sum of five odd numbers is always odd.** And 20 is even. That is why you can never make 20.
You did not need to try every way: one reason settles all of them at once. That is what mathematicians love about
a **proof**: a reason that works every time.

### Taking away

The same rules work for taking away. If you take an even number away from an even number, you remove whole pairs,
so what is left still has a flat end: 10 take away 4 is 6, even. If you take an odd number from an odd number, the
lonely block goes away with the lonely block: 9 take away 3 is 6, even. And odd take away even (or even take away
odd) gives odd: 9 take away 4 is 5.

### A bonus: doubling always gives even

Any number added to **itself** gives an even number. Why? If the number is even, it is even + even. If it is odd,
it is odd + odd. Both give even! So **every double is even**, as you saw in [Fair sharing](../level-1/03-fair-sharing-two.md).

## Worked examples

**Example 1. Without adding.** Is 347 + 589 odd or even?

1. 347 ends in 7, so it is odd.
2. 589 ends in 9, so it is odd.
3. Odd + odd = even. So the sum is **even**.
4. Check by adding: 347 + 589 = 936. It ends in 6, so it is even. ✓

**Example 2. Three numbers.** Is 12 + 15 + 21 odd or even?

1. Count the odd numbers: 15 and 21. That is **two** odd numbers. (12 is even and brings no lonely block.)
2. Two lonely blocks pair up. So the sum is **even**.
3. Check: 12 + 15 + 21 = 48. Even. ✓

**Example 3. Dominoes.** You add up the dots on 6 dominoes, and each domino has an odd number of dots. Is the total
odd or even?

1. Six odd numbers bring six lonely blocks.
2. Six is even, so they all pair up: three new pairs.
3. The total is **even**.

**Example 4. Find the mistake.** Ella added 23 + 45 + 17 and got 84. Without adding again, can you tell if she is
wrong?

1. 23, 45 and 17 are all odd. That is three odd numbers.
2. Three lonely blocks: two pair up, one is left. The sum must be **odd**.
3. 84 is even. So **Ella made a mistake**. (The right sum is 85.)

The odd and even rules are a quick way to catch mistakes in adding. They cannot prove an answer is right, but they
can sometimes prove it is wrong.

## Try it

1. Without adding, is 26 + 48 odd or even? What about 26 + 47?
2. Without adding, is 135 + 263 odd or even?
3. Draw blocks to show 7 + 5. Where do the lonely blocks go?
4. Is 1 + 2 + 3 + 4 odd or even? Count the odd numbers first.
5. Is 1 + 3 + 5 + 7 + 9 + 11 odd or even?
6. Sam says: "I added three odd numbers and got 30." Can he be right?
7. Can you choose **four** numbers from 1, 3, 5, 7, 9 (you may repeat) that add to 20? Can you choose **three**?
8. Two numbers add up to 15. One of them is even. Is the other one even or odd? Explain.

??? note "Answers"
    1. 26 + 48: even + even, so **even** (it is 74). 26 + 47: even + odd, so **odd** (it is 73).
    2. 135 ends in 5 and 263 ends in 3: odd + odd, so **even**. Check: 135 + 263 = 398. ✓
    3. 7 is three pairs and one lonely block. 5 is two pairs and one lonely block. The two lonely blocks become a
       new pair. Total: six pairs, 12, with a flat end.
    4. The odd numbers are 1 and 3: **two** of them. They pair up, so the sum is **even**. Check:
       1 + 2 + 3 + 4 = 10. ✓
    5. Six odd numbers: six lonely blocks pair up into three pairs. **Even**. Check: 1 + 3 + 5 + 7 + 9 + 11 = 36. ✓
    6. **No.** Three odd numbers bring three lonely blocks; two pair up and one is left, so the sum must be odd. 30
       is even.
    7. **Four: yes.** Four odd numbers make an even sum, so 20 is possible: for example 9 + 9 + 1 + 1 = 20, or
       7 + 7 + 3 + 3 = 20, or 9 + 5 + 3 + 3 = 20. **Three: no.** Three odd numbers always make an odd sum, and 20 is
       even.
    8. **Odd.** If the other number were even, even + even would be even, but 15 is odd. So the other number must be
       odd: even + odd = odd. For example, 8 + 7 = 15 or 4 + 11 = 15.

## Common mistake

**Thinking odd + odd is odd.** It sounds right ("odd and odd make odd"), but it is wrong: 3 + 5 = 8. Picture the
two lonely blocks becoming partners.

**Counting all the numbers instead of the odd ones.** To decide if a long sum is odd or even, count only the **odd**
numbers. 2 + 4 + 6 + 8 + 10 has five numbers, but no odd ones, so the sum is even (it is 30).

## Where it leads

- Next lesson: [Multiples](02-multiples.md), where skip counting turns into times tables.
- This level: [Level 2: Factors and multiples](index.md). The whole topic: [Number theory](../index.md).
- Back to level 1: [Pairs: everything has a partner](../level-1/01-pairs-partners.md) and
  [Fair sharing between two friends](../level-1/03-fair-sharing-two.md).
- Adding 1 + 3 + 5 + 7 + ... gives 1, 4, 9, 16, ...: a beautiful pattern you will meet in
  [Square numbers and the locker puzzle](06-square-numbers-lockers.md) and in [Patterns](../../patterns/index.md).
- Proving something is impossible by one clever reason, instead of trying every case, is a big idea in
  [Logic](../../logic/index.md).
