---
title: "Growing patterns"
---

# Growing patterns

*Patterns and sequences · level 1, lesson 5 of 6*

## A question to start

Look at these towers of blocks.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 138" role="img" aria-label="Towers of 1, 2, 3 and 4 orange blocks standing in a row, then a question mark">
  <g transform="translate(60 0)">
  <rect x="15" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="26.0" y="123" font-size="13" text-anchor="middle" fill="currentColor">1st</text>
  <rect x="67" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="67" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="78.0" y="123" font-size="13" text-anchor="middle" fill="currentColor">2nd</text>
  <rect x="119" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="119" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="119" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="130.0" y="123" font-size="13" text-anchor="middle" fill="currentColor">3rd</text>
  <rect x="171" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="15" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="182.0" y="123" font-size="13" text-anchor="middle" fill="currentColor">4th</text>
  <text x="234.0" y="93" font-size="30" text-anchor="middle" fill="currentColor">?</text>
  <text x="234.0" y="123" font-size="13" text-anchor="middle" fill="currentColor">5th</text>
  </g>
</svg>
</div>

How many blocks are in the next tower? That one is easy: 5.

Now a harder one. How many blocks will be in the **10th** tower? You could build all ten towers and count. But is
there a quicker way, where you just **know**? There is, and by the end of this lesson you will see why it works.

## The idea

### Patterns that grow

In the first four lessons, the patterns **repeated**: the same core again and again, like orange, blue, orange, blue.
A repeating pattern never gets bigger. The 100th core is the same as the 1st.

The towers are different. Each tower is **bigger** than the one before. A pattern where each step gets bigger by a rule
is called a **growing pattern**.

Every growing pattern has two parts:

1. **Where it starts.** Here the 1st tower has 1 block.
2. **How it grows.** Here each tower has **one more** block than the one before.

If you know these two things, you know the whole pattern.

### See the new block

Let us colour the new block in each tower blue.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 160" role="img" aria-label="Towers of 1, 2, 3, 4 and 5 blocks; in each tower the top block is blue, showing the one block added each time">
  <g transform="translate(60 0)">
  <rect x="15" y="103" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="26.0" y="145" font-size="13" text-anchor="middle" fill="currentColor">1st</text>
  <rect x="67" y="103" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="67" y="81" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="78.0" y="145" font-size="13" text-anchor="middle" fill="currentColor">2nd</text>
  <rect x="119" y="103" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="119" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="119" y="59" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="130.0" y="145" font-size="13" text-anchor="middle" fill="currentColor">3rd</text>
  <rect x="171" y="103" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="37" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="182.0" y="145" font-size="13" text-anchor="middle" fill="currentColor">4th</text>
  <rect x="223" y="103" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="223" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="223" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="223" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="223" y="15" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="234.0" y="145" font-size="13" text-anchor="middle" fill="currentColor">5th</text>
  </g>
</svg>
</div>

Each tower is the tower before it, with **one new block on top**. That is what "each time one more" means. To build
the next tower, you do not have to start again: copy the last tower and put one more block on top.

### The quick way to the 10th tower

Look at the towers and their numbers:

- The 1st tower has 1 block.
- The 2nd tower has 2 blocks.
- The 3rd tower has 3 blocks.
- The 4th tower has 4 blocks.

The number of blocks is the **same** as the tower's number! So the 10th tower has **10 blocks**.

But why? Is it just luck that it worked for four towers? Here is the reason. The 1st tower has 1 block. Every time we
go to the next tower, two things go up by one together: the tower's number goes up by one, **and** the number of
blocks goes up by one. They start the same (both 1) and they always go up together, so they **stay** the same,
forever. Like two friends who start on the same step and always climb one step at a time together: they are always on
the same step.

That is a real reason, not a guess. It tells us the 10th tower has 10 blocks, the 20th tower has 20 blocks, and the
100th tower has 100 blocks, without building any of them.

### When it does not start at 1

Now look at these towers. Each one has a green part of 2 blocks at the bottom, and orange blocks on top.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 182" role="img" aria-label="Towers of 3, 4, 5 and 6 blocks; each tower has a green bottom part of 2 blocks and then 1, 2, 3, 4 orange blocks">
  <g transform="translate(86 0)">
  <rect x="15" y="125" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="15" y="103" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="15" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="26.0" y="167" font-size="13" text-anchor="middle" fill="currentColor">1st</text>
  <rect x="67" y="125" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="67" y="103" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="67" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="67" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="78.0" y="167" font-size="13" text-anchor="middle" fill="currentColor">2nd</text>
  <rect x="119" y="125" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="119" y="103" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="119" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="119" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="119" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="130.0" y="167" font-size="13" text-anchor="middle" fill="currentColor">3rd</text>
  <rect x="171" y="125" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="103" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="171" y="15" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="182.0" y="167" font-size="13" text-anchor="middle" fill="currentColor">4th</text>
  </g>
</svg>
</div>

The towers have 3, 4, 5, 6 blocks. Each time one more, like before. But this time the number of blocks is **not** the
same as the tower's number. The 1st tower has 3 blocks, not 1.

Look at the colours. The orange part is 1, 2, 3, 4: the same as the tower's number. The green part is always 2. So
every tower is **its number, and 2 more**. The 10th tower is 10 orange blocks and 2 green blocks: **12 blocks**.

So "each time one more" is not the whole story. You also need to know where the pattern **starts**.

### Growing by more than one

A pattern can grow by 2 each time, or 3, or 10. Here the towers grow by 2.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 194" role="img" aria-label="Towers of 2, 4, 6 and 8 blocks; each tower has two blue blocks on top of the one before">
  <g transform="translate(94 0)">
  <rect x="15" y="141" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="15" y="123" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="24.0" y="179" font-size="13" text-anchor="middle" fill="currentColor">1st</text>
  <rect x="63" y="141" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="63" y="123" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="63" y="105" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="63" y="87" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="72.0" y="179" font-size="13" text-anchor="middle" fill="currentColor">2nd</text>
  <rect x="111" y="141" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="111" y="123" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="111" y="105" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="111" y="87" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="111" y="69" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="111" y="51" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="120.0" y="179" font-size="13" text-anchor="middle" fill="currentColor">3rd</text>
  <rect x="159" y="141" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="159" y="123" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="159" y="105" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="159" y="87" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="159" y="69" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="159" y="51" width="18" height="18" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="159" y="33" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="159" y="15" width="18" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="168.0" y="179" font-size="13" text-anchor="middle" fill="currentColor">4th</text>
  </g>
</svg>
</div>

2, 4, 6, 8. Each tower has two new blocks (blue) on top. The next tower has **10**. Can you hear the counting by 2s?
2, 4, 6, 8, 10, 12, ...

### Staircases

Put towers of 1, 2, 3, 4, 5 next to each other, and you get a **staircase**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 130" role="img" aria-label="A staircase of 5 steps made of blocks: columns of 1, 2, 3, 4 and 5 blocks side by side; the last column is blue">
  <g transform="translate(125 0)">
  <rect x="10" y="98" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="32" y="98" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="32" y="76" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="54" y="98" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="54" y="76" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="54" y="54" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="76" y="98" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="76" y="76" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="76" y="54" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="76" y="32" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="98" y="98" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="98" y="76" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="98" y="54" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="98" y="32" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="98" y="10" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  </g>
</svg>
</div>

How many blocks are in this staircase? Count each step and add: 1 + 2 + 3 + 4 + 5. Let us add slowly:

- 1 + 2 = 3
- 3 + 3 = 6
- 6 + 4 = 10
- 10 + 5 = **15**

The staircases themselves make a growing pattern: a staircase of 1 step has 1 block, 2 steps has 3, 3 steps has 6,
4 steps has 10, 5 steps has 15. Each new staircase is the old one with a new tower stuck on the end (the blue one).
And the new tower is one taller each time. So this pattern grows by 2, then by 3, then by 4, then by 5. It grows
faster and faster! You will meet these numbers again: they are called **triangle numbers**.

### Growing patterns you can see

Growing patterns do not have to be towers. Here is a caterpillar that grows a new green body part every day.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 150" role="img" aria-label="A caterpillar on four days: an orange head with 1, then 2, then 3, then 4 green body parts">
  <circle cx="20" cy="25" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="42" cy="25" r="13" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="20" cy="60" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="42" cy="60" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="64" cy="60" r="13" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="20" cy="95" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="42" cy="95" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="64" cy="95" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="86" cy="95" r="13" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="20" cy="130" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="42" cy="130" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="64" cy="130" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="86" cy="130" r="11" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="108" cy="130" r="13" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="200" y="30" font-size="13" fill="currentColor">day 1: 1 green part</text>
  <text x="200" y="65" font-size="13" fill="currentColor">day 2: 2 green parts</text>
  <text x="200" y="100" font-size="13" fill="currentColor">day 3: 3 green parts</text>
  <text x="200" y="135" font-size="13" fill="currentColor">day 4: 4 green parts</text>
</svg>
</div>

On day 1 it has 1 green part, on day 2 it has 2, on day 3 it has 3. It always has **one** orange head. So on day 10
it has 10 green parts and 1 head: 11 circles in all.

### Repeating or growing?

Here is a test to tell them apart.

- **Repeating**: if you cover the start of the pattern, the part further on looks **the same** as the start.
  orange, blue, orange, blue... far along, it is still orange, blue.
- **Growing**: further on, things are **bigger**, or there are **more** of them. Tower 10 looks very different from
  tower 1.

<figure class="play" data-play="seq" data-kind="arith"><span class="ai-tag">AI-created</span><figcaption><b>A growing pattern.</b> Add the same each time.</figcaption></figure>

## Worked examples

**Example 1. What comes next?** A pattern of towers has 1, 3, 5, 7 blocks. How many blocks are in the next tower?

1. How does it change? 1 to 3 is 2 more. 3 to 5 is 2 more. 5 to 7 is 2 more.
2. It starts at 1 and grows by **2 each time**.
3. Next: 7 + 2 = **9** blocks.

**Example 2. The 6th tower.** The 1st tower has 2 blocks, and each tower has one more than the one before. How many
blocks are in the 6th tower?

1. Way one: count on. 1st: 2. 2nd: 3. 3rd: 4. 4th: 5. 5th: 6. 6th: **7**.
2. Way two: see the parts. The 1st tower has 2 blocks, so each tower is "its number and 1 more". (Check: 1 and 1 more
   is 2 ✓, 2 and 1 more is 3 ✓.) The 6th tower is 6 and 1 more: **7**. ✓

Both ways agree. Checking with two different ways is a great habit.

**Example 3. A staircase.** How many blocks do you need to build a staircase with 6 steps?

1. A staircase of 6 steps has towers of 1, 2, 3, 4, 5, 6.
2. We know the 5-step staircase uses 15 blocks.
3. The 6-step staircase is the same, with one more tower of 6.
4. 15 + 6 = **21** blocks.

**Example 4. A growing pattern of claps.** Clap once, rest. Clap twice, rest. Clap three times, rest. How many claps
come before the 4th rest?

1. The claps grow: 1, then 2, then 3, then 4.
2. Before the 4th rest you have clapped 1 + 2 + 3 + 4.
3. 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = **10** claps. (It is a staircase made of sounds!)

## Try it

1. Towers have 1, 2, 3, 4, 5 blocks. How many blocks are in the 8th tower?
2. Towers have 5, 6, 7, 8 blocks. How many blocks are in the next tower? How many in the 10th tower?
3. Towers have 3, 6, 9, 12 blocks. How many blocks are in the next tower?
4. Is this pattern repeating or growing? 2, 4, 2, 4, 2, 4.
5. Is this pattern repeating or growing? 2, 4, 6, 8, 10.
6. A caterpillar has an orange head and grows 2 green parts each day. On day 1 it has 2 green parts. How many circles
   (head and parts) does it have on day 3?
7. How many blocks do you need for a staircase of 7 steps?
8. Ella says: "Towers of 10, 9, 8, 7 blocks is a growing pattern." Is she right? What is the next tower?

??? note "Answers"
    1. **8 blocks.** The towers start at 1 and grow by 1, so each tower has the same number of blocks as its number.
    2. Next: **9**. The 1st tower has 5, so each tower is its number and 4 more (1 and 4 is 5 ✓, 2 and 4 is 6 ✓). The
       10th tower has 10 and 4 more: **14 blocks**. (Or count on: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14.)
    3. **15.** The towers grow by 3 each time: 12 + 3 = 15. (It is counting by 3s.)
    4. **Repeating.** The core is *2, 4*. Far along it is still 2, 4, 2, 4.
    5. **Growing.** Each number is 2 more than the one before.
    6. Day 1: 2 parts. Day 2: 4 parts. Day 3: 6 parts. Add the head: 6 + 1 = **7 circles**.
    7. The 6-step staircase has 21 blocks (Example 3). Add a tower of 7: 21 + 7 = **28 blocks**.
    8. It has a rule (one fewer each time), so it is a pattern, but it is **shrinking**, not growing. The next tower
       has **6** blocks. You will meet shrinking patterns in [Level 2](../level-2/02-growing-shrinking.md).

## Common mistake

**Thinking the tower's number and its blocks are always the same.** That is true only when the pattern starts at 1 and
grows by 1. For towers of 3, 4, 5, 6, the 10th tower has 12 blocks, not 10. Always check where it **starts** and how
it **grows**.

**Mixing up "the next one" and "the 10th one".** The next tower after 1, 2, 3, 4 is the 5th tower. The 10th is
further away. Count which tower you are asking about.

## Where it leads

- Previous lesson: [Making your own pattern](04-making-your-own.md). Next lesson: [Patterns in the world](06-patterns-in-world.md).
- This level: [Level 1: What comes next?](index.md). The whole topic: [Patterns and sequences](../index.md).
- Adding one more each time is how counting works: [Counting things](../../numbers/level-1/01-counting-things.md).
- Growing towers come back with toothpicks and tables in [Level 2: Growing shapes](../level-2/05-growing-shapes.md),
  and the staircase numbers (1, 3, 6, 10, 15) come back as triangle numbers in [Level 3](../level-3/index.md).
