---
title: "A mind-reading trick"
---

# A mind-reading trick

*Algebra · level 3, lesson 6 of 6*

## A question to start

Try this on a friend. Say:

1. "Think of a number. Don't tell me."
2. "Double it."
3. "Add 10."
4. "Halve the answer."
5. "Now take away the number you first thought of."

Then close your eyes, touch your forehead, and say slowly: "Your answer is ... **5**."

It works whether your friend picked 3, 17 or 1000. How can you know their answer without knowing their number? It is
not magic. It is algebra, and by the end of this lesson you will be able to prove the trick can never fail, and
invent tricks of your own.

## The idea

### Test it first

Before explaining a trick, try it with a few numbers to see what happens.

| Starting number | Double it | Add 10 | Halve it | Take away the start |
| --- | --- | --- | --- | --- |
| 3 | 6 | 16 | 8 | 5 |
| 7 | 14 | 24 | 12 | 5 |
| 20 | 40 | 50 | 25 | 5 |
| 100 | 200 | 210 | 105 | 5 |

Always 5. But trying four numbers is not a proof: maybe some number we did not try breaks it. There are infinitely
many numbers, and we cannot test them all. We need a way to follow **every** number through the trick at once.

### Cups and counters

Here is the idea. We do not know the friend's number, so we hide it in a **cup**. A cup stands for "the secret
number", whatever it is. Loose **counters** stand for numbers we do know. Now follow the steps with cups and
counters instead of numbers:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="Five rows: one cup; two cups; two cups and ten counters; one cup and five counters; five counters">
  <g font-size="12" fill="currentColor">
    <text x="10" y="35">think of a number</text>
    <text x="10" y="88">double it</text>
    <text x="10" y="141">add 10</text>
    <text x="10" y="194">halve it</text>
    <text x="10" y="247">take away the number</text>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <path d="M160,45 L166,15 L190,15 L196,45 Z"/>
    <path d="M160,98 L166,68 L190,68 L196,98 Z"/><path d="M205,98 L211,68 L235,68 L241,98 Z"/>
    <path d="M160,151 L166,121 L190,121 L196,151 Z"/><path d="M205,151 L211,121 L235,121 L241,151 Z"/>
    <path d="M160,204 L166,174 L190,174 L196,204 Z"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="262" cy="128" r="7"/><circle cx="280" cy="128" r="7"/><circle cx="298" cy="128" r="7"/>
    <circle cx="316" cy="128" r="7"/><circle cx="334" cy="128" r="7"/>
    <circle cx="262" cy="145" r="7"/><circle cx="280" cy="145" r="7"/><circle cx="298" cy="145" r="7"/>
    <circle cx="316" cy="145" r="7"/><circle cx="334" cy="145" r="7"/>
    <circle cx="217" cy="190" r="7"/><circle cx="235" cy="190" r="7"/><circle cx="253" cy="190" r="7"/>
    <circle cx="271" cy="190" r="7"/><circle cx="289" cy="190" r="7"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor">
    <circle cx="178" cy="243" r="7"/><circle cx="196" cy="243" r="7"/><circle cx="214" cy="243" r="7"/>
    <circle cx="232" cy="243" r="7"/><circle cx="250" cy="243" r="7"/>
  </g>
</svg>
</div>

Step by step:

1. **Think of a number:** one cup.
2. **Double it:** two cups. Two of the same secret number.
3. **Add 10:** two cups and 10 counters.
4. **Halve it:** split everything into two equal groups. Each group gets **one cup and 5 counters**. Keep one group.
5. **Take away the number you first thought of:** that is the cup. Take it away, and **5 counters** are left.

The cup disappeared! Whatever number was hiding in it does not matter any more. That is why the answer is always 5.
This is a real **proof**: an argument that works for every number at once, because the cup could hold any of them.

### Why halving works so neatly

The clever step is halving. Two cups and 10 counters can be shared fairly into two piles: one cup each, and 5
counters each. It works because we **doubled** first, so there were two cups to share. Then halving undoes the
doubling for the cup part, and it also halves the 10 counters.

That tells us something important: the final answer is **half of the number you added**. Add 10, and the answer is
5. Add 16, and the answer would be 8.

### Making your own version

You can change the trick by changing the number you add. To make the answer 8, add 16 (because half of 16 is 8). To
make the answer 3, add 6. Use an **even** number, so that halving gives a whole number of counters.

You can also change the multiply-and-divide step. "Times 3, then add 12, then divide by 3, then take away your
number" leaves 4: three cups and 12 counters, shared into three equal groups, gives one cup and 4 counters each.

The recipe is always the same:

- multiply the secret number by something;
- add some counters;
- divide by the **same** number you multiplied by (so there is exactly one cup left);
- take the cup away.

### What happens if you get it wrong?

Suppose the trick says "double it, add 10, and take away your number", with no halving. Follow the cups: two cups and
10 counters, take one cup away, and you have **one cup and 10 counters**. A cup is still there, so the answer depends
on the friend's number (it is their number plus 10). The trick only works when the cups vanish.

## Worked examples

**1. Checking a trick.** "Think of a number, add 3, double it, take away 4, halve it, take away your number." What is
the answer?

- Start: 1 cup.
- Add 3: 1 cup and 3 counters.
- Double: 2 cups and 6 counters.
- Take away 4: 2 cups and 2 counters.
- Halve: 1 cup and 1 counter.
- Take away your number: **1 counter**. The answer is always 1.
- Test with 10: $10 + 3 = 13$, $26$, $22$, $11$, $11 - 10 = 1$. ✓

**2. Make the answer 7.** Change "double, add 10, halve, take away" to give 7. Add 14 instead of 10, because half of
14 is 7. Test with 5: $10$, $24$, $12$, $12 - 5 = 7$. ✓

**3. A trick with tripling.** "Think of a number, times 3, add 9, divide by 3, take away your number."

- 3 cups, then 3 cups and 9 counters, then shared into 3 groups: 1 cup and 3 counters, then take the cup: **3**.
- Test with 4: $12$, $21$, $7$, $7 - 4 = 3$. ✓

**4. A trick that gives your number back.** "Think of a number, double it, add 6, halve it, take away 3."

- 2 cups, then 2 cups and 6 counters, then halved: 1 cup and 3 counters, then take away 3 counters: **1 cup**.
- The answer is the number you started with! Test with 9: $18$, $24$, $12$, $9$. ✓

**5. A trick that reads a number.** Ask a friend to think of a number, double it, add 5 and tell you the result. They
say 31. Undo it: $31 - 5 = 26$, $26 \div 2 = 13$. Their number was 13. This is the two-step machine from lesson 2,
dressed up as magic.

## Try it

1. Do the trick from the top of the page with the starting number 12. Show every step.
2. Follow cups and counters through: "think of a number, double it, add 18, halve it, take away your number". What is
   the answer?
3. Change the original trick so the answer is always 10.
4. Follow cups and counters through: "think of a number, add 5, double it, take away 10, halve it". What do you get?
5. A trick says: "think of a number, times 4, add 20, divide by 4, take away your number". What is the answer? Test
   it with the number 6.
6. Why should you add an even number in the doubling trick? What happens if you add 7?
7. Ben's trick: "think of a number, double it, add 8, take away your number". Why is this not a good trick?
8. Invent your own trick with at least four steps where the answer is always 6. Show with cups and counters that it
   works.

??? note "Answers"
    1. $12 \to 24 \to 34 \to 17 \to 17 - 12 = 5$. ✓
    2. 2 cups, then 2 cups and 18 counters, then 1 cup and 9 counters, then **9**.
    3. Add 20 instead of 10 (half of 20 is 10). For example with 4: $8$, $28$, $14$, $14 - 4 = 10$. ✓
    4. 1 cup and 5 counters, then 2 cups and 10 counters, then 2 cups, then **1 cup**: you get your number back.
    5. 4 cups and 20 counters, shared into 4: 1 cup and 5 counters, take the cup: **5**. With 6: $24$, $44$, $11$,
       $11 - 6 = 5$. ✓
    6. Halving 2 cups and 7 counters gives 1 cup and three and a half counters. The trick still "works" (the answer
       is always three and a half), but your friend has to halve an odd number, which is awkward and gives a
       fraction.
    7. Follow the cups: 2 cups and 8 counters, take away 1 cup, leaves **1 cup and 8 counters**. A cup is still
       there, so the answer is the friend's number plus 8, different for every friend.
    8. Many tricks work. One example: "times 2, add 12, halve, take away your number": 2 cups and 12 counters, then
       1 cup and 6 counters, then 6. Another: "times 5, add 30, divide by 5, take away your number" also gives 6.

## Common mistake

**Thinking a few tests prove the trick.** Testing 3, 7 and 20 shows the trick works for those numbers. The cups and
counters show it works for **every** number, because the cup could be hiding any number. Tests find mistakes; a
proof shows there are none.

**Dividing by a different number than you multiplied by.** "Times 3, add 9, halve" leaves one and a half cups, and
the friend's number never disappears. Divide by the same number you multiplied by.

## Where it leads

- Previous: [Formulas in words](05-formulas-in-words.md)
- [Level 3 page](index.md) · [Algebra topic page](../index.md)
- Next level: [Level 4: letters for numbers](../level-4/index.md). Its last lesson writes this trick as
  $\dfrac{2n + 10}{2} - n = 5$, and shows a famous trick that always gives 1089.
- Tricks with cards and dice that always work are in [Logic](../../logic/index.md); "even" and "odd", which decide
  whether halving gives a whole number, are in
  [Number theory level 1: odd and even on the line](../../number-theory/level-1/02-odd-even-line.md).
