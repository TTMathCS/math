---
title: "The coin flip experiment"
---

# The coin flip experiment

*Probability · level 1, lesson 5 of 6*

## A question to start

A coin has two sides, heads and tails, and each is just as likely. So if you flip a coin 20 times, you will get 10
heads and 10 tails. Right?

Try it. Flip a coin 20 times and count. Most people do **not** get 10 and 10. They get 12 and 8, or 9 and 11, or
even 14 and 6. Did they do it wrong? Is the coin broken?

No. Something more interesting is going on. This lesson is an **experiment**: you will do it yourself and look
closely at what happens.

## The idea

### What an experiment is

An **experiment** is when you try something to find out what happens, and you write down what you see. Scientists
do experiments. You can too, with one coin and a pencil.

### How to flip fairly

1. Put the coin on your thumb, with your thumb curled under your first finger.
2. Flick your thumb up hard, so the coin spins high in the air.
3. Let it land on a table or the floor, or catch it flat on your hand.
4. Look at the top side: **heads** (H) or **tails** (T).

A good flip spins many times. Do not just turn the coin over in your fingers. That is not a flip; you would be
choosing.

### Keep a tally

Make a chart with two rows, one for heads and one for tails. Every flip, draw one line in the right row. On the
fifth line, draw it across the other four, to make a bundle of five. Bundles make it easy to count at the end.

Here is what one child got from 20 flips. Your result will be different.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 110" role="img" aria-label="A tally chart for 20 flips. Heads: two bundles of five and two more lines, so 12. Tails: one bundle of five and three more lines, so 8.">
  <g font-size="15" fill="currentColor"><text x="10" y="37">H</text><text x="10" y="87">T</text></g>
  <g stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
    <line x1="50" y1="15" x2="50" y2="47"/><line x1="60" y1="15" x2="60" y2="47"/><line x1="70" y1="15" x2="70" y2="47"/><line x1="80" y1="15" x2="80" y2="47"/>
    <line x1="43" y1="42" x2="87" y2="20"/>
    <line x1="110" y1="15" x2="110" y2="47"/><line x1="120" y1="15" x2="120" y2="47"/><line x1="130" y1="15" x2="130" y2="47"/><line x1="140" y1="15" x2="140" y2="47"/>
    <line x1="103" y1="42" x2="147" y2="20"/>
    <line x1="170" y1="15" x2="170" y2="47"/><line x1="180" y1="15" x2="180" y2="47"/>
    <line x1="50" y1="65" x2="50" y2="97"/><line x1="60" y1="65" x2="60" y2="97"/><line x1="70" y1="65" x2="70" y2="97"/><line x1="80" y1="65" x2="80" y2="97"/>
    <line x1="43" y1="92" x2="87" y2="70"/>
    <line x1="110" y1="65" x2="110" y2="97"/><line x1="120" y1="65" x2="120" y2="97"/><line x1="130" y1="65" x2="130" y2="97"/>
  </g>
  <g font-size="15" fill="currentColor"><text x="270" y="37">heads: 12</text><text x="270" y="87">tails: 8</text></g>
</svg>
</div>

Count the bundles in fives: heads is 5, 10, then 11, 12. Tails is 5, then 6, 7, 8. Check: 12 + 8 = 20 flips. ✓

12 and 8, not 10 and 10. Is that strange? Let us find out.

### Two flips: the smallest experiment

To see what is happening, start very small. Flip a coin just **2** times. Here is every way it can turn out.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="The four ways two flips can land: heads heads, heads tails, tails heads, tails tails. The middle two have one head and one tail.">
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="35" cy="45" r="20" fill="#eea66f"/><circle cx="80" cy="45" r="20" fill="#eea66f"/>
    <circle cx="140" cy="45" r="20" fill="#eea66f"/><circle cx="185" cy="45" r="20" fill="#9cc9ea"/>
    <circle cx="245" cy="45" r="20" fill="#9cc9ea"/><circle cx="290" cy="45" r="20" fill="#eea66f"/>
    <circle cx="350" cy="45" r="20" fill="#9cc9ea"/><circle cx="395" cy="45" r="20" fill="#9cc9ea"/>
  </g>
  <rect x="113" y="15" width="200" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="35" y="50">H</text><text x="80" y="50">H</text><text x="140" y="50">H</text><text x="185" y="50">T</text>
    <text x="245" y="50">T</text><text x="290" y="50">H</text><text x="350" y="50">T</text><text x="395" y="50">T</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="57" y="95">2 heads</text><text x="213" y="95">1 head and 1 tail (2 ways)</text><text x="372" y="95">0 heads</text>
  </g>
</svg>
</div>

There are 4 ways, and each is just as likely. Only **2** of the 4 ways give "1 head and 1 tail", which is the
"half and half" result. The other 2 ways give 2 heads or 2 tails.

So even with just 2 flips, "exactly half heads" happens only about **half the time**. The other half of the time you
get both the same.

With 4 flips there are 16 ways the coin can land. Only 6 of them give exactly 2 heads and 2 tails. That is **fewer
than half** of the ways. With more flips, getting **exactly** half becomes even less common.

### What 20 flips usually look like

Now imagine a huge group: **1000 children**, each flipping a coin 20 times and counting their heads. Here is about
how many children would get each number of heads.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 200" role="img" aria-label="A bar chart of how many of 1000 children get each number of heads in 20 flips. The tallest bar is at 10 heads, about 176 children. Bars from 8 to 12 heads are green and together hold about 736 children. Bars far from 10 are tiny.">
  <g stroke="none">
    <rect x="30" y="149.3" width="20" height="0.7" fill="#9cc9ea"/>
    <rect x="56" y="147.1" width="20" height="2.9" fill="#9cc9ea"/>
    <rect x="82" y="140.8" width="20" height="9.2" fill="#9cc9ea"/>
    <rect x="108" y="126.9" width="20" height="23.1" fill="#9cc9ea"/>
    <rect x="134" y="103.8" width="20" height="46.2" fill="#9cc9ea"/>
    <rect x="160" y="75.0" width="20" height="75.0" fill="#7ccf9a"/>
    <rect x="186" y="50.0" width="20" height="100.0" fill="#7ccf9a"/>
    <rect x="212" y="40.0" width="20" height="110.0" fill="#7ccf9a"/>
    <rect x="238" y="50.0" width="20" height="100.0" fill="#7ccf9a"/>
    <rect x="264" y="75.0" width="20" height="75.0" fill="#7ccf9a"/>
    <rect x="290" y="103.8" width="20" height="46.2" fill="#9cc9ea"/>
    <rect x="316" y="126.9" width="20" height="23.1" fill="#9cc9ea"/>
    <rect x="342" y="140.8" width="20" height="9.2" fill="#9cc9ea"/>
    <rect x="368" y="147.1" width="20" height="2.9" fill="#9cc9ea"/>
    <rect x="394" y="149.3" width="20" height="0.7" fill="#9cc9ea"/>
  </g>
  <line x1="25" y1="150" x2="420" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="40" y="166">3</text><text x="66" y="166">4</text><text x="92" y="166">5</text><text x="118" y="166">6</text><text x="144" y="166">7</text><text x="170" y="166">8</text><text x="196" y="166">9</text><text x="222" y="166">10</text><text x="248" y="166">11</text><text x="274" y="166">12</text><text x="300" y="166">13</text><text x="326" y="166">14</text><text x="352" y="166">15</text><text x="378" y="166">16</text><text x="404" y="166">17</text>
    <text x="222" y="34">176</text><text x="196" y="44">160</text><text x="248" y="44">160</text><text x="170" y="69">120</text><text x="274" y="69">120</text>
  </g>
  <text x="222" y="190" font-size="12" fill="currentColor" text-anchor="middle">number of heads in 20 flips</text>
</svg>
</div>

Look carefully at this picture. It tells you three things.

1. **10 heads is the most common result.** Its bar is the tallest. But only about 176 children out of 1000 get it.
   That is fewer than 1 child in 5. So **most** children do **not** get exactly 10.
2. **Close to 10 is very common.** The green bars, from 8 heads to 12 heads, hold about 736 children together. That
   is about 3 children out of every 4. Most people get "close to half".
3. **Far from 10 is rare.** Getting 15 or more heads, or 15 or more tails, happens to only about 41 children out
   of 1000. That is about 1 in 25. Getting all 20 heads is so rare that you would probably never see it in your
   whole life.

So the 12 and 8 from our tally was **completely normal**. It is one of the green bars.

### Why it wobbles

Each flip is its own little maybe. The coin does not know what happened on the last flip. It does not try to "keep
things even". So sometimes heads gets a few lucky flips in a row, and sometimes tails does. Over 20 flips, those
little bits of luck do not cancel out exactly. They leave a wobble of a few either way.

That wobble is not a mistake. It is what chance **looks like**.

### Streaks are normal too

In your 20 flips, look for a **streak**: the same side several times in a row, like H H H H. Many people think streaks
mean something is wrong. But streaks are normal! In 20 flips, getting at least 4 of the same side in a row happens
about 3 times out of 4. Try it and see whether you get one.

### More flips, closer to half

What if your whole class puts their flips together? Say 10 children each flip 20 times. That is 200 flips.

The count of heads still will not be exactly 100. But compared with 200, it will be **close**: nearly always somewhere
between 90 and 110 heads (that happens about 86 times in 100). The more flips you put together, the closer the
**share** of heads gets to half, even though the exact number still wobbles.

That is a big idea in probability, and you will meet it again and again: **a few tries jump around; many tries settle
down.**

## Worked examples

**Example 1. Reading a tally.**

A tally for 20 flips shows heads as 1 bundle and 4 lines, and tails as 2 bundles and 1 line.

1. Heads: 5 + 4 = 9.
2. Tails: 5 + 5 + 1 = 11.
3. Check: 9 + 11 = 20. ✓
4. Is that normal? Yes: 9 is one of the green bars, close to 10.

**Example 2. Was the coin fair?**

Nina flips a coin 20 times and gets 13 heads. She says the coin is unfair. Is she right?

1. 13 heads is 3 more than 10.
2. From the picture, about 74 children in 1000 get exactly 13 heads. That is not rare; it happens to fair coins all
   the time.
3. So 13 heads is **not** a good reason to say the coin is unfair. A fair coin does this quite often.
4. If she got 20 heads in 20 flips, that would be a different story: a fair coin almost never does that.

**Example 3. Listing two flips.**

Two flips. What is more likely: "both the same" or "one of each"?

1. List the ways: H H, H T, T H, T T. Four ways, each just as likely.
2. Both the same: H H and T T. That is 2 ways.
3. One of each: H T and T H. That is 2 ways.
4. They are **equally likely**: 2 ways each. (Many people think "one of each" is more likely, or less likely. Listing
   the ways shows they are the same.)

## Try it

1. Read this tally of 20 flips: heads has 2 bundles and 3 lines. How many heads? How many tails?
2. You flip a coin 20 times and get 11 heads and 9 tails. Is that normal?
3. Leo flips 20 times and gets 10 heads and 10 tails. Max gets 12 heads and 8 tails. Who did it right?
4. Flip a coin 2 times. What are the 4 ways it can land?
5. You flip a coin 2 times. Is "2 heads" more likely, less likely, or just as likely as "1 head and 1 tail"?
6. In 20 flips, which is more likely: exactly 10 heads, or anything other than exactly 10 heads?
7. Do the experiment yourself. Flip 20 times and keep a tally. Did you get exactly 10 heads? Did you get a streak of
   4 or more?

??? note "Answers"
    1. Heads: 5 + 5 + 3 = **13**. Tails: 20 − 13 = **7**.
    2. **Yes**, very normal. 11 is right next to 10, one of the tallest bars.
    3. **Both did it right.** Both results are normal. A fair coin often gives 12 and 8, and sometimes 10 and 10.
       Neither is a mistake.
    4. **H H, H T, T H, T T.**
    5. **Less likely.** "2 heads" is 1 way (H H). "1 head and 1 tail" is 2 ways (H T and T H). So "1 head and 1 tail"
       is twice as likely.
    6. **Anything other than exactly 10.** Exactly 10 happens to fewer than 1 child in 5. The other results, all put
       together, happen to more than 4 children in 5.
    7. Your own answer! Most people do **not** get exactly 10 heads, and about 3 people in 4 get a streak of at least
       4 the same in a row.

## Common mistake

**Thinking a fair coin gives exactly half.** "Each side is equally likely" does not mean "you get exactly half". It
means that, over many, many flips, the **share** of heads gets close to half. In 20 flips a wobble of a few either way
is normal.

**Thinking a streak means the coin is broken, or that the other side is "due".** Streaks happen all the time with a
fair coin. And after a streak of heads, tails is not more likely next time. The coin has no memory: see
[Chance has no memory](../level-2/05-chance-no-memory.md).

## Where it leads

- Previous lesson: [Spinners](04-spinners.md) · Next lesson: [Rolling a die](06-rolling-a-die.md).
- This level: [Level 1: Maybe, sure or never](index.md). The whole topic: [Probability](../index.md).
- Counting in fives with tally marks, like counting with your fingers: [Counting things](../../numbers/level-1/01-counting-things.md).
- Using many tries to find out what is hidden: [Experiments and tallies](../level-2/03-experiments-and-tallies.md).
- How close to "half" you should expect to be: [Making predictions](../level-2/06-making-predictions.md).
- The bar picture above grows up into the "bell curve", one of the most famous shapes in math: [Statistics](../../statistics/index.md)
  and [level 8](../level-8/index.md).
