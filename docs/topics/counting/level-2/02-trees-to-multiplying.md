---
title: "From trees to multiplying"
---

# From trees to multiplying

*Counting and combinations · level 2, lesson 2 of 6*

## A question to start

A toy shop sells a build-your-own robot. You choose a head (4 kinds), a body (3 kinds), arms (5 kinds) and legs (2
kinds). How many different robots can you build?

You could draw a tree. But it would have 4 branches, then 12, then 60, then... a lot of tips, and your page would be
full long before you finished. In this lesson you will learn to count the tips of a tree **without drawing it**,
using one multiplication. By the end you will be able to answer the robot question in a few seconds. (The answer is
in the worked examples.)

## The idea

### Watch the ends grow

Go back to Lily's lunch tree from the last lesson: 3 sandwiches, 2 drinks, 2 fruits. Instead of counting the tips at
the end, count the **ends** after each step.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 165" role="img" aria-label="Columns of dots showing the ends of the tree after each step: 1 at the start, 3 after the sandwich, 6 after the drink, 12 after the fruit. Arrows between them say times 3, times 2, times 2.">
  <circle cx="30" cy="80" r="6" fill="currentColor"/>
  <g fill="#eea66f"><circle cx="120" cy="50" r="6"/><circle cx="120" cy="80" r="6"/><circle cx="120" cy="110" r="6"/></g>
  <g fill="#9cc9ea"><circle cx="220" cy="30" r="6"/><circle cx="220" cy="50" r="6"/><circle cx="220" cy="70" r="6"/><circle cx="220" cy="90" r="6"/><circle cx="220" cy="110" r="6"/><circle cx="220" cy="130" r="6"/></g>
  <g fill="#7ccf9a"><circle cx="330" cy="14" r="5"/><circle cx="330" cy="26" r="5"/><circle cx="330" cy="38" r="5"/><circle cx="330" cy="50" r="5"/><circle cx="330" cy="62" r="5"/><circle cx="330" cy="74" r="5"/><circle cx="330" cy="86" r="5"/><circle cx="330" cy="98" r="5"/><circle cx="330" cy="110" r="5"/><circle cx="330" cy="122" r="5"/><circle cx="330" cy="134" r="5"/><circle cx="330" cy="146" r="5"/></g>
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="45" y1="80" x2="100" y2="80"/><polyline points="94,75 100,80 94,85"/>
    <line x1="140" y1="80" x2="200" y2="80"/><polyline points="194,75 200,80 194,85"/>
    <line x1="240" y1="80" x2="310" y2="80"/><polyline points="304,75 310,80 304,85"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="72" y="72">× 3</text><text x="170" y="72">× 2</text><text x="275" y="72">× 2</text>
    <text x="30" y="160">start: 1</text><text x="120" y="160">sandwich: 3</text><text x="220" y="160">drink: 6</text><text x="380" y="84">fruit: 12</text>
  </g>
</svg>
</div>

- At the start there is **1** end: the start dot itself.
- After choosing a sandwich, that 1 end has become **3** ends.
- Each of those 3 ends splits into 2 drinks. That makes 3 groups of 2: **6** ends.
- Each of those 6 ends splits into 2 fruits. That makes 6 groups of 2: **12** ends.

In number language: 3 × 2 = 6, and then 6 × 2 = 12. All in one go:

**3 × 2 × 2 = 12.**

### Why it is multiplying

Remember what multiplying means. **3 × 2** means "3 groups of 2", or 2 and 2 and 2. Multiplying is a fast way of
adding **equal groups**.

In a tree, when every end splits the **same** number of ways, each old end turns into the same number of new ends.
So the new ends come in equal groups, one group for each old end. Equal groups are exactly what multiplying counts.
That is the whole reason a tree turns into a multiplication.

So here is the rule. Grown-ups call it the **multiplication principle** (a **principle** is a rule that is always
true and that you can lean on):

> If a choice is made in steps, and at each step every branch splits the **same number** of ways, then the number of
> results is those numbers **multiplied** together.

### The labels can change, the number must not

In the last lesson, the line-up tree for Ana, Ben and Cai had 3 branches, then 2, then 1. The branches after Ana were
labelled B and C, but the branches after Ben were A and C. The labels changed, but **every** second-step end split
into **2**. That is all the rule needs. So:

**3 × 2 × 1 = 6 line-ups.** ✓

And for 4 friends: 4 choices for first, then 3 for second (anyone but the first), then 2, then 1:

**4 × 3 × 2 × 1 = 24.** ✓ That matches level 1, where we found 4 groups of 6.

For 5 friends: 5 × 4 × 3 × 2 × 1 = **120**. No drawing needed.

### Does the order of the steps matter?

What if Lily picks her **drink** first, then her sandwich, then her fruit? Her tree looks different: 2 branches
first, then each splits into 3, then into 2. The multiplication is 2 × 3 × 2. Is that still 12?

Yes: 2 × 3 = 6, and 6 × 2 = 12. And it **has** to be, because Lily still has exactly the same lunches to choose
from. Changing the order of the steps redraws the tree, but it does not change the lunches. You may do the steps in
whatever order is easiest.

(This also shows something about multiplying: 3 × 2 × 2 and 2 × 3 × 2 give the same answer. You can multiply numbers
in any order.)

### When the rule does not work

The rule needs **every** end to split the same number of ways. In last lesson's pet shop, cats came in 2 colours but
dogs came in 3. The tree was not even, so we cannot multiply "2 animals × something". Instead we count each part and
**add**: 2 cats and 3 dogs make 5 pets. Before you multiply, always check: *does every branch split the same way?*

## Worked examples

**1. The robot shop.** Head (4 kinds), body (3), arms (5), legs (2). Every head goes with every body, and so on, so
each step splits the same way every time.

4 × 3 = 12, then 12 × 5 = 60, then 60 × 2 = **120 robots**.

Drawing that tree would need 120 tips. Multiplying needed three small steps.

**2. Four coin tosses.** Each toss splits every end into 2 (heads or tails), whatever happened before.

2 × 2 × 2 × 2 = **16** results. Each extra toss **doubles** the number: 2, 4, 8, 16.

**3. A dice and a coin.** You roll a normal dice (6 faces) and toss a coin. 6 × 2 = **12** results, from 1 H, 1 T,
2 H, ... up to 6 T.

**4. Medals.** Five children run a race. How many ways can the gold and silver medals be given out (no ties)?

Gold: any of the 5 runners. Silver: anyone **except** the gold winner, so 4 runners. Every gold branch splits into
4, so 5 × 4 = **20 ways**. The names on the silver branches change, but there are always 4 of them.

**5. Working backwards.** A café has 2 drinks and 3 cakes and some kinds of sandwich. A lunch is one of each, and
there are 30 different lunches. How many kinds of sandwich?

Drinks and cakes make 2 × 3 = 6 ways. Then 6 × (sandwiches) = 30, and 6 × 5 = 30, so there are **5 sandwiches**.

## Try it

1. A restaurant has 5 main dishes and 2 desserts. How many two-course meals?
2. You toss a coin 5 times. How many results?
3. A sandwich is made from 3 kinds of bread and 4 fillings, and you can have it toasted or not toasted. How many
   sandwiches?
4. Lily's school wants 20 different lunches. They have 2 drinks and 2 fruits. How many kinds of sandwich do they
   need?
5. Six friends line up. How many line-ups? (Use the multiplication, not a drawing.)
6. A club has 6 members. It picks a captain and then a different member as vice-captain. How many ways?
7. Sports day: you choose one race (running or swimming). Runners choose short or long. Swimmers choose short,
   medium or long. How many choices? Can you multiply? Why or why not?
8. A password is a coloured shape: one of 4 colours and one of 3 shapes, followed by a number from 1 to 5. How many
   passwords?

??? note "Answers"
    1. 5 × 2 = **10 meals**.
    2. 2 × 2 × 2 × 2 × 2 = **32**.
    3. 3 × 4 × 2 = 12 × 2 = **24 sandwiches**.
    4. 2 × 2 = 4 drink-and-fruit choices. 4 × 5 = 20, so they need **5 kinds of sandwich**.
    5. 6 × 5 × 4 × 3 × 2 × 1. Step by step: 6 × 5 = 30, 30 × 4 = 120, 120 × 3 = 360, 360 × 2 = 720, 720 × 1 = 720.
       **720 line-ups.**
    6. Captain: 6 choices. Vice-captain: the other 5. 6 × 5 = **30 ways**.
    7. You **cannot** multiply, because the running branch splits into 2 but the swimming branch splits into 3. Add
       the parts: 2 and 3 make **5 choices**.
    8. 4 × 3 × 5 = 12 × 5 = **60 passwords**.

## Common mistake

**Multiplying an uneven tree.** If the branches do not all split the same way, the groups are not equal, and
multiplying gives the wrong answer. In question 7, "2 races × 3 lengths = 6" would be wrong, because runners only
have 2 lengths. Count each part and add.

**Forgetting a choice is used up.** In the medal question, the gold winner cannot also win silver, so the second
step has 4 choices, not 5. Always ask: *after the first choice, how many are really left?*

## Where it leads

- Previous: [Tree diagrams](01-tree-diagrams.md) · Next: ["And" multiplies, "or" adds](03-and-or.md), which
  puts the adding from question 7 and the multiplying from this lesson side by side.
- [Level 2 page](index.md) · [Counting topic page](../index.md)
- The line-up numbers 6, 24, 120, 720 come back in level 4 with their own name, **factorials**.
- Multiplying as equal groups, and why you can multiply in any order: [Numbers](../../numbers/index.md).
