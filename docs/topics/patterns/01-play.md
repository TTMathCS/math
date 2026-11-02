---
title: "Play: What comes next?"
---

# Play: What comes next?

*Patterns and sequences · step 1 of 5*

## A question to start

Look at these shapes. Which one comes next?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 60" role="img" aria-label="circle, square, triangle, circle, square, triangle, circle, then a question mark">
  <circle cx="30" cy="30" r="18" fill="#eea66f"/>
  <rect x="62" y="12" width="36" height="36" fill="#9cc9ea"/>
  <polygon points="130,48 150,12 170,48" fill="#7ccf9a"/>
  <circle cx="210" cy="30" r="18" fill="#eea66f"/>
  <rect x="242" y="12" width="36" height="36" fill="#9cc9ea"/>
  <polygon points="310,48 330,12 350,48" fill="#7ccf9a"/>
  <text x="392" y="42" font-size="34" text-anchor="middle" fill="currentColor">?</text>
</svg>
</div>

You probably said "a circle" straight away. Your brain found the rule without being told: *circle, square,
triangle, and then start again*. That rule is a **pattern**, and noticing patterns is one of the most important
things in all of mathematics.

## The idea

There are two kinds of pattern you will meet again and again.

**1. Repeating patterns.** A small group of things, called the **unit**, repeats over and over.

- red, blue, red, blue, red, blue ... The unit is *red, blue*. It is 2 long.
- circle, square, triangle, circle, square, triangle ... The unit is 3 long.
- Days of the week: Monday, Tuesday, ..., Sunday, then Monday again. The unit is 7 long.

**2. Growing patterns.** Each picture or number is bigger than the one before, by a rule.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="Dots in squares: 1 dot, then 2 by 2, then 3 by 3, then 4 by 4">
  <g fill="#eea66f">
    <circle cx="20" cy="90" r="6"/>
    <circle cx="70" cy="90" r="6"/><circle cx="86" cy="90" r="6"/><circle cx="70" cy="74" r="6"/><circle cx="86" cy="74" r="6"/>
    <circle cx="140" cy="90" r="6"/><circle cx="156" cy="90" r="6"/><circle cx="172" cy="90" r="6"/>
    <circle cx="140" cy="74" r="6"/><circle cx="156" cy="74" r="6"/><circle cx="172" cy="74" r="6"/>
    <circle cx="140" cy="58" r="6"/><circle cx="156" cy="58" r="6"/><circle cx="172" cy="58" r="6"/>
    <circle cx="240" cy="90" r="6"/><circle cx="256" cy="90" r="6"/><circle cx="272" cy="90" r="6"/><circle cx="288" cy="90" r="6"/>
    <circle cx="240" cy="74" r="6"/><circle cx="256" cy="74" r="6"/><circle cx="272" cy="74" r="6"/><circle cx="288" cy="74" r="6"/>
    <circle cx="240" cy="58" r="6"/><circle cx="256" cy="58" r="6"/><circle cx="272" cy="58" r="6"/><circle cx="288" cy="58" r="6"/>
    <circle cx="240" cy="42" r="6"/><circle cx="256" cy="42" r="6"/><circle cx="272" cy="42" r="6"/><circle cx="288" cy="42" r="6"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="20" y="108">1</text><text x="78" y="108">4</text><text x="156" y="108">9</text><text x="264" y="108">16</text>
  </g>
  <text x="370" y="80" font-size="34" text-anchor="middle" fill="currentColor">?</text>
</svg>
</div>

The squares of dots hold 1, 4, 9, 16 dots. The next square is 5 dots wide and 5 dots tall, so it holds
5 × 5 = 25 dots.

**How to find a rule.** Ask yourself three questions:

1. Does something **repeat**? Find the unit and count how long it is.
2. Does something **grow**? Look at how it changes from one step to the next.
3. Can I **say the rule in one sentence**? If you can, you can continue the pattern as far as you like.

## Worked example

**The pattern:** 3, 6, 9, 12, ... What comes next, and what is the 10th number?

1. Does it repeat? No, the numbers keep getting bigger.
2. How does it change? From 3 to 6 is +3. From 6 to 9 is +3. From 9 to 12 is +3. It goes up by 3 every time.
3. The rule in one sentence: *start at 3 and add 3 each time.*

So the next number is 12 + 3 = **15**. Carrying on: 18, 21, 24, 27, **30**. The 10th number is 30.

Did you notice? These are the numbers in the 3 times table: 3 × 1, 3 × 2, 3 × 3, ... so the 10th one is
3 × 10 = 30. Seeing a pattern in two different ways is a sign that you really understand it.

## Try it

1. What comes next? 🔴 🔵 🔵 🔴 🔵 🔵 🔴 🔵 ...
2. What are the next two numbers? 5, 10, 15, 20, ...
3. What are the next two numbers? 1, 2, 4, 8, ...
4. A pattern repeats *red, yellow, green*. What colour is the 10th one?
5. Today is Monday. What day will it be in 15 days?

??? note "Answers"
    1. 🔵. The unit is *red, blue, blue*, 3 long. After *red, blue* the unit still needs one more blue.
    2. 25, 30. Add 5 each time.
    3. 16, 32. Each number is **double** the one before. This is a different kind of growing: multiplying, not adding.
    4. Red. The unit is 3 long, so the 3rd, 6th and 9th are green and the 10th starts the unit again: red.
    5. Tuesday. 14 days is exactly 2 weeks, back to Monday; one more day is Tuesday.

## Common mistake

**Guessing the rule from only two numbers.** If you only see 1, 2, ..., the next number could be 3 (add 1) or 4
(double). Always check your rule on **every** number you are given before you trust it.

## Where it leads

- Next step: [Explore: number sequences and their rules](02-explore.md), where patterns get names and tables.
- The question in answer 5 (what day is it in 15 days?) is the beginning of *clock arithmetic*, which keeps
  secret messages safe on [cryptography.akadian.ca](https://cryptography.akadian.ca/).
