---
title: "Odd and even on the number line"
---

# Odd and even on the number line

*Number theory · level 1, lesson 2 of 6*

## A question to start

Is 1,000,001 odd or even?

That is a lot of socks! Nobody wants to line up a million socks two by two. But here is the surprise: you can
answer in one second. You only need to look at **one digit** of the number, the very last one. By the end of this
lesson you will know which digit, and, more importantly, **why** that one digit tells you everything.

## The idea

### The number line

A **number line** is a line with the numbers written along it in order, with the same space between each one. It
starts at 0 and goes on and on. Here it is from 0 to 20. The even numbers have orange dots and the odd numbers have
blue dots.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 90" role="img" aria-label="A number line from 0 to 20. Even numbers 0, 2, 4 up to 20 have orange dots. Odd numbers 1, 3, 5 up to 19 have blue dots. The colours take turns.">
  <line x1="10" y1="40" x2="450" y2="40" stroke="currentColor" stroke-width="2"/>
  <g fill="#eea66f">
    <circle cx="20" cy="40" r="7"/><circle cx="62" cy="40" r="7"/><circle cx="104" cy="40" r="7"/>
    <circle cx="146" cy="40" r="7"/><circle cx="188" cy="40" r="7"/><circle cx="230" cy="40" r="7"/>
    <circle cx="272" cy="40" r="7"/><circle cx="314" cy="40" r="7"/><circle cx="356" cy="40" r="7"/>
    <circle cx="398" cy="40" r="7"/><circle cx="440" cy="40" r="7"/>
  </g>
  <g fill="#9cc9ea">
    <circle cx="41" cy="40" r="7"/><circle cx="83" cy="40" r="7"/><circle cx="125" cy="40" r="7"/>
    <circle cx="167" cy="40" r="7"/><circle cx="209" cy="40" r="7"/><circle cx="251" cy="40" r="7"/>
    <circle cx="293" cy="40" r="7"/><circle cx="335" cy="40" r="7"/><circle cx="377" cy="40" r="7"/>
    <circle cx="419" cy="40" r="7"/>
  </g>
  <g font-size="10" text-anchor="middle" fill="currentColor">
    <text x="20" y="66">0</text><text x="41" y="66">1</text><text x="62" y="66">2</text><text x="83" y="66">3</text>
    <text x="104" y="66">4</text><text x="125" y="66">5</text><text x="146" y="66">6</text><text x="167" y="66">7</text>
    <text x="188" y="66">8</text><text x="209" y="66">9</text><text x="230" y="66">10</text><text x="251" y="66">11</text>
    <text x="272" y="66">12</text><text x="293" y="66">13</text><text x="314" y="66">14</text><text x="335" y="66">15</text>
    <text x="356" y="66">16</text><text x="377" y="66">17</text><text x="398" y="66">18</text><text x="419" y="66">19</text>
    <text x="440" y="66">20</text>
  </g>
  <text x="230" y="86" font-size="12" text-anchor="middle" fill="currentColor">orange = even · blue = odd</text>
</svg>
</div>

Look at the colours: orange, blue, orange, blue, orange, blue ... They **take turns**. There are never two oranges
next to each other, and never two blues.

### Why they take turns

Remember from the last lesson: if you have an even number of socks and add **one more**, the new sock has no
partner, so the number becomes odd. If you have an odd number and add one more, the new sock becomes the partner of
the lonely one, so the number becomes even.

Moving one step to the right on the number line means "one more". So every step **flips** the kind of number:
even, then odd, then even, then odd. It is like a light switch: click, on; click, off; click, on.

And we start at 0, which is even. So 1 is odd, 2 is even, 3 is odd, and so on for ever.

### Hopping by 2

Put your finger on 0 and hop **two** steps at a time: 0, 2, 4, 6, 8, 10, ... You only ever land on orange dots. You
land on all the even numbers and skip all the odd ones.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 110" role="img" aria-label="Hops of 2 starting at 0 land on 0, 2, 4, 6, 8, 10 and 12. Hops of 2 starting at 1 land on 1, 3, 5, 7, 9 and 11.">
  <line x1="10" y1="60" x2="450" y2="60" stroke="currentColor" stroke-width="2"/>
  <g fill="#eea66f">
    <circle cx="20" cy="60" r="6"/><circle cx="90" cy="60" r="6"/><circle cx="160" cy="60" r="6"/>
    <circle cx="230" cy="60" r="6"/><circle cx="300" cy="60" r="6"/><circle cx="370" cy="60" r="6"/><circle cx="440" cy="60" r="6"/>
  </g>
  <g fill="#9cc9ea">
    <circle cx="55" cy="60" r="6"/><circle cx="125" cy="60" r="6"/><circle cx="195" cy="60" r="6"/>
    <circle cx="265" cy="60" r="6"/><circle cx="335" cy="60" r="6"/><circle cx="405" cy="60" r="6"/>
  </g>
  <g fill="none" stroke="#eea66f" stroke-width="2">
    <path d="M 20 52 Q 55 15 90 52"/><path d="M 90 52 Q 125 15 160 52"/><path d="M 160 52 Q 195 15 230 52"/>
    <path d="M 230 52 Q 265 15 300 52"/><path d="M 300 52 Q 335 15 370 52"/><path d="M 370 52 Q 405 15 440 52"/>
  </g>
  <g fill="none" stroke="#9cc9ea" stroke-width="2">
    <path d="M 55 68 Q 90 100 125 68"/><path d="M 125 68 Q 160 100 195 68"/><path d="M 195 68 Q 230 100 265 68"/>
    <path d="M 265 68 Q 300 100 335 68"/><path d="M 335 68 Q 370 100 405 68"/>
  </g>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="20" y="104">0</text><text x="90" y="104">2</text><text x="160" y="104">4</text><text x="230" y="104">6</text>
    <text x="300" y="104">8</text><text x="370" y="104">10</text><text x="440" y="104">12</text>
    <text x="55" y="48">1</text><text x="125" y="48">3</text><text x="195" y="48">5</text><text x="265" y="48">7</text>
    <text x="335" y="48">9</text><text x="405" y="48">11</text>
  </g>
</svg>
</div>

Now start on 1 and hop by 2: 1, 3, 5, 7, 9, 11, ... You only land on blue dots, the odd numbers. Why? A hop of 2
adds **one whole pair**. Adding a pair cannot change whether there is a lonely one at the end. So hopping by 2
never changes even into odd or odd into even.

### The last-digit trick

Now look at the numbers from 10 to 20 on the first number line. Which ones are even?

10, 12, 14, 16, 18, 20.

Look at their **last digit**, the one on the right: 0, 2, 4, 6, 8, 0. And the odd ones, 11, 13, 15, 17, 19, end in
1, 3, 5, 7, 9. The same thing happens from 20 to 30, and from 30 to 40, and for ever. Here is the trick:

- If a number ends in **0, 2, 4, 6 or 8**, it is **even**.
- If a number ends in **1, 3, 5, 7 or 9**, it is **odd**.

That's it! You do not have to look at the other digits at all.

### Why only the last digit matters

Think about the number 36. It is made of **3 tens** and **6 ones**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 140" role="img" aria-label="36 drawn as three columns of ten dots, each ten split into 5 pairs, and 6 more dots in 3 pairs. Everything pairs up.">
  <g fill="#9cc9ea">
    <circle cx="30" cy="20" r="6"/><circle cx="46" cy="20" r="6"/><circle cx="30" cy="40" r="6"/><circle cx="46" cy="40" r="6"/>
    <circle cx="30" cy="60" r="6"/><circle cx="46" cy="60" r="6"/><circle cx="30" cy="80" r="6"/><circle cx="46" cy="80" r="6"/>
    <circle cx="30" cy="100" r="6"/><circle cx="46" cy="100" r="6"/>
    <circle cx="90" cy="20" r="6"/><circle cx="106" cy="20" r="6"/><circle cx="90" cy="40" r="6"/><circle cx="106" cy="40" r="6"/>
    <circle cx="90" cy="60" r="6"/><circle cx="106" cy="60" r="6"/><circle cx="90" cy="80" r="6"/><circle cx="106" cy="80" r="6"/>
    <circle cx="90" cy="100" r="6"/><circle cx="106" cy="100" r="6"/>
    <circle cx="150" cy="20" r="6"/><circle cx="166" cy="20" r="6"/><circle cx="150" cy="40" r="6"/><circle cx="166" cy="40" r="6"/>
    <circle cx="150" cy="60" r="6"/><circle cx="166" cy="60" r="6"/><circle cx="150" cy="80" r="6"/><circle cx="166" cy="80" r="6"/>
    <circle cx="150" cy="100" r="6"/><circle cx="166" cy="100" r="6"/>
  </g>
  <g fill="#eea66f">
    <circle cx="230" cy="60" r="6"/><circle cx="246" cy="60" r="6"/><circle cx="230" cy="80" r="6"/><circle cx="246" cy="80" r="6"/>
    <circle cx="230" cy="100" r="6"/><circle cx="246" cy="100" r="6"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="38" y="128">ten</text><text x="98" y="128">ten</text><text x="158" y="128">ten</text><text x="238" y="128">6 ones</text>
    <text x="340" y="60">every ten is</text><text x="340" y="78">5 pairs</text>
  </g>
</svg>
</div>

A ten is 10 things, and 10 is even: it is **5 pairs**. So every ten pairs up perfectly. It does not matter whether
there are 3 tens or 300 tens; all the tens have partners. (A hundred is ten tens, so hundreds pair up too, and so do
thousands.)

So the only part that might have a lonely one is the **ones** at the end. That part is the last digit. If the last
digit is even, everything pairs up. If it is odd, one is left over.

Now you can answer the question from the start. 1,000,001 ends in **1**, so it is **odd**. All the millions and
thousands and hundreds pair up, and that last 1 is left alone.

### Odd and even in the street

In many towns, the houses on one side of a street have odd numbers (1, 3, 5, 7, ...) and the houses on the other
side have even numbers (2, 4, 6, 8, ...). As you walk along one side, the numbers hop by 2, just like on the number
line. So if you are looking for house 47, you know which side to walk on: the odd side, because 47 ends in 7.

<figure class="play" data-play="hundred" data-mode="multiples"><span class="ai-tag">AI-created</span><figcaption><b>Even numbers.</b> Pick 2: every other number is shaded.</figcaption></figure>

## Worked examples

**Example 1. Three numbers.** Is each number odd or even: 47, 350, 2,468?

1. 47 ends in **7**. 7 is odd, so 47 is **odd**.
2. 350 ends in **0**. 0 is even, so 350 is **even**.
3. 2,468 ends in **8**. 8 is even, so 2,468 is **even**.

**Example 2. Neighbours.** What are the two numbers next to 39 on the number line? Are they odd or even?

1. One step left of 39 is 38. One step right is 40.
2. 39 is odd (it ends in 9). Neighbours always have the other kind.
3. So 38 and 40 are both **even**. Check: they end in 8 and 0. ✓

**Example 3. The next even number.** What is the next even number after 57?

1. 57 is odd (it ends in 7).
2. One more than an odd number is even. So the next number, **58**, is even.
3. Check: 58 ends in 8. ✓

**Example 4. The big number.** Is 98,765 odd or even?

1. Do not let the 9 and the 8 at the front fool you.
2. Look only at the last digit: **5**.
3. 5 is odd, so 98,765 is **odd**.

## Try it

1. Say the even numbers from 20 to 30.
2. Is 63 odd or even? What about 64?
3. What number comes just after 99? Is it odd or even?
4. Start at 0 and hop by 2 five times. Where do you land?
5. Start at 1 and hop by 2 five times. Where do you land? Is it odd or even?
6. Which of these are even: 14, 23, 50, 77, 108?
7. A house on the odd side of the street is number 25. What are the numbers of the next two houses on that side?
8. Which is the biggest even number with two digits? Which is the biggest odd number with two digits?

??? note "Answers"
    1. 20, 22, 24, 26, 28, 30. They end in 0, 2, 4, 6, 8, 0.
    2. 63 is **odd** (it ends in 3). 64 is **even** (it ends in 4). They are neighbours, so they are different kinds.
    3. **100**. It ends in 0, so it is **even**. (It is 10 tens, and every ten is 5 pairs.)
    4. **10**. The hops land on 2, 4, 6, 8, 10.
    5. **11**. The hops land on 3, 5, 7, 9, 11. It is **odd**: starting on an odd number and hopping by 2 always
       lands on odd numbers.
    6. **14, 50 and 108**. They end in 4, 0 and 8. 23 and 77 end in 3 and 7, so they are odd.
    7. **27 and 29**. Houses on one side hop by 2: 25, 27, 29.
    8. The biggest two-digit number is 99, which is odd. So the biggest **odd** one is **99**, and the biggest
       **even** one is one less, **98**.

## Common mistake

**Looking at the first digit.** 83 starts with an 8, and 8 is even, but 83 is **odd**. It ends in 3. Only the last
digit decides. The digits in front are tens, hundreds and more, and those always pair up perfectly.

**Thinking 0 is "nothing", so it cannot be even.** 0 is even. On the number line it sits just before 1, and the
colours take turns, so 0 must be the other kind from 1. And numbers ending in 0, like 10, 20 and 100, are all even.

## Where it leads

- Back: [Pairs: everything has a partner](01-pairs-partners.md). Next lesson:
  [Fair sharing between two friends](03-fair-sharing-two.md).
- This level: [Level 1: Odd, even and sharing](index.md). The whole topic: [Number theory](../index.md).
- Tens and ones, and reading big numbers: [Numbers](../../numbers/index.md).
- "Orange, blue, orange, blue" is a repeating pattern: [Patterns](../../patterns/index.md).
- In [Skip counting](04-skip-counting.md) you will hop by 5s and 10s as well as 2s.
- Much later, in level 3, the last-digit idea grows into tests for dividing by 3, 4, 5, 9 and more.
