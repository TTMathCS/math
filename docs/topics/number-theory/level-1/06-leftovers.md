---
title: "Leftovers"
---

# Leftovers

*Number theory · level 1, lesson 6 of 6*

## A question to start

Three friends share 10 sweets. They deal them out fairly, one each at a time, until they cannot go on. How many
sweets are left over?

Here is a puzzle to go with it. Kai shares some sweets among **3** friends and says, "There were 5 left over." His
big sister laughs and says, "That can't be right!" She did not see the sweets, and she did not know how many there
were. How could she be so sure?

By the end of this lesson you will know the answer to both questions, and you will know a rule about leftovers
that is true for **every** sharing, with any number of sweets and any number of friends.

## The idea

### What a leftover is

When you share things fairly, everyone must get the **same number**. You deal them out, one each, round after
round. You stop when there are **not enough left for another full round**. The things that are still in the bag
are the **leftover**. (Grown-ups often call it the **remainder**: the part that remains.)

In [lesson 3](03-fair-sharing-two.md) we shared between **two** friends, and the leftover was always 0 or 1. Now we
share among **more** friends.

### Ten sweets among three friends

Ana, Ben and Cat share 10 sweets. Deal them out:

- Round 1: one each. That uses 3 sweets. 7 are left.
- Round 2: one each. That uses 3 more. 4 are left.
- Round 3: one each. That uses 3 more. 1 is left.
- Round 4? We need 3 sweets for a full round, but only 1 is left. **Stop.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 130" role="img" aria-label="Ten sweets shared among three friends: each friend has a row of 3, and 1 green sweet is left over">
  <text x="40" y="34" font-size="13" text-anchor="end" fill="currentColor">Ana</text>
  <text x="40" y="64" font-size="13" text-anchor="end" fill="currentColor">Ben</text>
  <text x="40" y="94" font-size="13" text-anchor="end" fill="currentColor">Cat</text>
  <circle cx="65" cy="30" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="95" cy="30" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="125" cy="30" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="65" cy="60" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="95" cy="60" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="125" cy="60" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="65" cy="90" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="95" cy="90" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="125" cy="90" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="200" cy="60" r="10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="90" font-size="12" text-anchor="middle" fill="currentColor">left over</text>
  <text x="95" y="122" font-size="12" text-anchor="middle" fill="currentColor">3 each</text>
</svg>
</div>

So each friend gets **3 sweets** and **1 sweet is left over**. Check: 3 and 3 and 3 make 9, and 1 more makes 10. ✓

Notice that the picture is a rectangle (3 rows of 3) with one extra sweet. Dealing into rows is sharing, just like
in [Rectangle numbers](05-rectangle-numbers.md). The leftover is the part that sticks out of the rectangle.

### The big rule: the leftover is smaller than the number of friends

Here is the most important idea of this lesson.

> When you share fairly, the leftover is **always smaller** than the number of friends.

Why? Think about what would happen if it were not. Suppose 3 friends share 13 sweets, and somebody stops after
3 rounds, with 4 sweets still in the bag.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 120" role="img" aria-label="Thirteen sweets among three friends. With 3 each, 4 are left, which is enough for another round. After 4 each, only 1 is left.">
  <circle cx="30" cy="30" r="8" fill="#eea66f"/>
  <circle cx="54" cy="30" r="8" fill="#eea66f"/>
  <circle cx="78" cy="30" r="8" fill="#eea66f"/>
  <circle cx="30" cy="54" r="8" fill="#eea66f"/>
  <circle cx="54" cy="54" r="8" fill="#eea66f"/>
  <circle cx="78" cy="54" r="8" fill="#eea66f"/>
  <circle cx="30" cy="78" r="8" fill="#eea66f"/>
  <circle cx="54" cy="78" r="8" fill="#eea66f"/>
  <circle cx="78" cy="78" r="8" fill="#eea66f"/>
  <circle cx="120" cy="30" r="8" fill="#7ccf9a"/>
  <circle cx="144" cy="30" r="8" fill="#7ccf9a"/>
  <circle cx="120" cy="54" r="8" fill="#7ccf9a"/>
  <circle cx="144" cy="54" r="8" fill="#7ccf9a"/>
  <text x="70" y="110" font-size="12" text-anchor="middle" fill="currentColor">3 each, 4 left?</text>
  <path d="M 175 54 L 225 54" stroke="currentColor" stroke-width="2"/>
  <polygon points="233,54 223,49 223,59" fill="currentColor"/>
  <text x="200" y="44" font-size="11" text-anchor="middle" fill="currentColor">one more round</text>
  <circle cx="260" cy="30" r="8" fill="#eea66f"/>
  <circle cx="284" cy="30" r="8" fill="#eea66f"/>
  <circle cx="308" cy="30" r="8" fill="#eea66f"/>
  <circle cx="332" cy="30" r="8" fill="#eea66f"/>
  <circle cx="260" cy="54" r="8" fill="#eea66f"/>
  <circle cx="284" cy="54" r="8" fill="#eea66f"/>
  <circle cx="308" cy="54" r="8" fill="#eea66f"/>
  <circle cx="332" cy="54" r="8" fill="#eea66f"/>
  <circle cx="260" cy="78" r="8" fill="#eea66f"/>
  <circle cx="284" cy="78" r="8" fill="#eea66f"/>
  <circle cx="308" cy="78" r="8" fill="#eea66f"/>
  <circle cx="332" cy="78" r="8" fill="#eea66f"/>
  <circle cx="365" cy="54" r="8" fill="#7ccf9a"/>
  <text x="310" y="110" font-size="12" text-anchor="middle" fill="currentColor">4 each, 1 left</text>
</svg>
</div>

4 sweets left, and only 3 friends. That is **enough for another round**! Give one more to each friend. Now each has
4, and only 1 is left. That one really is too few for another round, so now we stop.

That is the reason. You only stop dealing when there are **too few for one more round**. A round needs one sweet for
each friend. So when you stop, there are fewer sweets left than friends. If there were as many as the friends, or
more, you would not have stopped yet.

So:

- Sharing among **2** friends, the leftover can only be **0 or 1**. (That is even and odd!)
- Sharing among **3** friends, the leftover can only be **0, 1 or 2**.
- Sharing among **4** friends, the leftover can only be **0, 1, 2 or 3**.
- Sharing among **10** friends, the leftover can be anything from **0 to 9**.

Now you know how Kai's sister was so sure. Kai shared among **3** friends, so the leftover had to be 0, 1 or 2. A
leftover of 5 is impossible: with 5 sweets left he could have dealt at least one more round.

### A leftover of zero

Sometimes the sharing comes out perfectly and **nothing** is left. Then the leftover is **0**. For example, 12
sweets among 3 friends: 4 each and 0 left. That is a happy sharing: everyone is equal and nothing is wasted.

A leftover of 0 means the counters make a perfect rectangle (or a line, if each friend gets just one).

### Leftovers take turns

Let us share every number from 0 to 14 among **3** friends and write down the leftover each time.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 110" role="img" aria-label="The numbers 0 to 14 coloured by what is left when they are shared among 3: the leftovers go 0, 1, 2, 0, 1, 2 and repeat">
  <line x1="42" y1="40" x2="448" y2="40" stroke="currentColor" stroke-width="2"/>
  <circle cx="50.0" cy="40" r="8" fill="#eea66f"/>
  <text x="50.0" y="68" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="77.9" cy="40" r="8" fill="#9cc9ea"/>
  <text x="77.9" y="68" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="105.7" cy="40" r="8" fill="#7ccf9a"/>
  <text x="105.7" y="68" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="133.6" cy="40" r="8" fill="#eea66f"/>
  <text x="133.6" y="68" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="161.4" cy="40" r="8" fill="#9cc9ea"/>
  <text x="161.4" y="68" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="189.3" cy="40" r="8" fill="#7ccf9a"/>
  <text x="189.3" y="68" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="217.1" cy="40" r="8" fill="#eea66f"/>
  <text x="217.1" y="68" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="245.0" cy="40" r="8" fill="#9cc9ea"/>
  <text x="245.0" y="68" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="272.9" cy="40" r="8" fill="#7ccf9a"/>
  <text x="272.9" y="68" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="300.7" cy="40" r="8" fill="#eea66f"/>
  <text x="300.7" y="68" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <circle cx="328.6" cy="40" r="8" fill="#9cc9ea"/>
  <text x="328.6" y="68" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="356.4" cy="40" r="8" fill="#7ccf9a"/>
  <text x="356.4" y="68" font-size="12" text-anchor="middle" fill="currentColor">11</text>
  <circle cx="384.3" cy="40" r="8" fill="#eea66f"/>
  <text x="384.3" y="68" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <circle cx="412.1" cy="40" r="8" fill="#9cc9ea"/>
  <text x="412.1" y="68" font-size="12" text-anchor="middle" fill="currentColor">13</text>
  <circle cx="440.0" cy="40" r="8" fill="#7ccf9a"/>
  <text x="440.0" y="68" font-size="12" text-anchor="middle" fill="currentColor">14</text>
  <text x="50.0" y="92" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="77.9" y="92" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="105.7" y="92" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="133.6" y="92" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="161.4" y="92" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="189.3" y="92" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="217.1" y="92" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="245.0" y="92" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="272.9" y="92" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="300.7" y="92" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="328.6" y="92" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="356.4" y="92" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="384.3" y="92" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="412.1" y="92" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="440.0" y="92" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="8" y="92" font-size="11" text-anchor="start" fill="currentColor">left:</text>
</svg>
</div>

| Sweets | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Leftover among 3 | 0 | 1 | 2 | 0 | 1 | 2 | 0 | 1 | 2 | 0 | 1 | 2 | 0 | 1 | 2 |

Look at the leftovers: 0, 1, 2, 0, 1, 2, 0, 1, 2, ... They go round and round like the hands of a clock. Why?

Each extra sweet makes the leftover grow by one: 0, then 1, then 2. But the leftover is not allowed to reach 3, so
when it would become 3, those 3 sweets make a new round (one more for each friend), and the leftover goes back to
0. Then it climbs again.

Among **2** friends the leftovers go 0, 1, 0, 1, 0, 1, ... That is exactly even, odd, even, odd from the number line
in [lesson 2](02-odd-even-line.md). So odd and even are really just "leftovers when you share between 2".

### Too few to go round

What if there are fewer sweets than friends? 10 friends share 7 sweets. There are not even enough for one round. So
each friend gets **0**, and **all 7 are left over**. The rule still works: 7 is smaller than 10.

## Worked examples

**Example 1. Seventeen stickers among five friends.**

1. Deal by rounds. Each round uses 5 stickers.
2. Count by 5s: 5, 10, 15. That is 3 rounds, using 15 stickers. The next round would need 20, which is too many.
3. 17 take away 15 leaves 2.
4. So each friend gets **3 stickers** and **2 are left over**.
5. Check the rule: 2 is smaller than 5. ✓ Check the total: 15 + 2 = 17. ✓

**Example 2. Twenty cards among four friends.**

1. Each round uses 4 cards. Count by 4s: 4, 8, 12, 16, 20. That is 5 rounds.
2. 20 take away 20 leaves 0.
3. So each friend gets **5 cards** and **nothing is left**: 20 makes a perfect rectangle, 4 rows of 5.

**Example 3. Spotting a mistake.** Leo shares 23 marbles among 4 friends. He says, "Each gets 4, and 7 are left."
Is he right?

1. The rule says the leftover must be smaller than 4. But 7 is not smaller than 4. So something is wrong.
2. 7 left is enough for another round of 4. Give one more to each: now each has 5, and 7 take away 4 leaves 3.
3. 3 is smaller than 4, so now we stop.
4. The right answer is **5 each, 3 left over**. Check: 5 + 5 + 5 + 5 = 20, and 20 + 3 = 23. ✓

## Try it

1. Share 7 apples between 2 friends. How many each? How many left?
2. Share 11 sweets among 3 friends. How many each? How many left?
3. Share 15 crayons among 5 friends. How many each? How many left?
4. Share 25 stickers among 6 friends. How many each? How many left?
5. When you share among **4** friends, what leftovers are possible?
6. Lily shares some beads among 5 friends and says 5 are left over. What would you tell her?
7. Share 14 sweets among 3 friends, then 15, then 16. What happens to the leftover each time?
8. What is the **biggest** leftover you could ever get when sharing among 7 friends? Find a number of sweets that
   gives that leftover.

??? note "Answers"
    1. **3 each, 1 left**. 3 + 3 = 6, and 7 take away 6 is 1. (7 is odd.)
    2. Count by 3s: 3, 6, 9. Three rounds use 9 sweets; a fourth would need 12. So **3 each, 2 left**. Check:
       9 + 2 = 11. ✓
    3. Count by 5s: 5, 10, 15. So **3 each, 0 left**. 15 makes a rectangle: 5 rows of 3.
    4. Count by 6s: 6, 12, 18, 24. Four rounds use 24; a fifth would need 30. So **4 each, 1 left**. Check:
       24 + 1 = 25. ✓
    5. **0, 1, 2 or 3**. The leftover must be smaller than 4.
    6. 5 beads left is enough for **one more round**, one bead for each of the 5 friends. After that round, 0 are
       left. A leftover must be smaller than the number of friends, so 5 is never a leftover among 5.
    7. 14: **4 each, 2 left**. 15: **5 each, 0 left** (the extra sweet made a full new round with the 2). 16:
       **5 each, 1 left**. The leftover went 2, then 0, then 1: it climbs to 2, falls back to 0, and climbs again.
    8. The leftover must be smaller than 7, so the biggest is **6**. For example, **6 sweets** (0 each, 6 left), or
       **13 sweets** (1 each, 6 left: 7 + 6 = 13), or 20 sweets (2 each, 6 left: 14 + 6 = 20).

## Common mistake

**Stopping too early.** If the leftover is as big as the number of friends, or bigger, you have not finished. Keep
dealing until the leftover is smaller than the number of friends.

**Mixing up "how many each" and "how many left".** In 10 sweets among 3, the answers are **3 each** and **1 left**.
These are two different numbers with two different meanings. Always say which is which, and check: friends times
each share, plus the leftover, gives back the total. 3 + 3 + 3 + 1 = 10. ✓

## Where it leads

- Back: [Rectangle numbers](05-rectangle-numbers.md). This is the last lesson of level 1.
- This level: [Level 1: Odd, even and sharing](index.md). Next level:
  [Level 2: Factors and multiples](../level-2/index.md). The whole topic: [Number theory](../index.md).
- A leftover of 0 means the number of friends **divides** the number of sweets exactly. That is the start of
  **factors**: [Factors with arrays](../level-2/03-factors-arrays.md).
- Sharing and leftovers become division with remainders in [Numbers](../../numbers/index.md).
- Leftovers that go round and round like a clock (0, 1, 2, 0, 1, 2) grow, in level 5, into **clock arithmetic**,
  the math behind secret codes: see [cryptography.akadian.ca](https://cryptography.akadian.ca/) when you are much
  older.
