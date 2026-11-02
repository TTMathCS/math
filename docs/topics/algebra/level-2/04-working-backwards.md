---
title: "Working backwards"
---

# Working backwards

*Algebra · level 2, lesson 4 of 6*

## A question to start

This machine has two parts. The first part **adds 5**. The second part **doubles**. A number went in, and **18** came
out.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 110" role="img" aria-label="A two-part machine: first add 5, then double. A question mark goes in and 18 comes out.">
  <rect x="8" y="35" width="50" height="40" rx="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/><text x="33" y="61" font-size="17" text-anchor="middle" fill="currentColor">?</text>
  <line x1="60" y1="55" x2="84" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="90,55 80,49 80,61" fill="currentColor"/>
  <rect x="92" y="25" width="100" height="60" rx="10" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/><text x="142" y="60" font-size="16" text-anchor="middle" fill="currentColor">add 5</text>
  <line x1="194" y1="55" x2="242" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="248,55 238,49 238,61" fill="currentColor"/>
  <text x="218" y="45" font-size="14" text-anchor="middle" fill="currentColor"></text>
  <rect x="250" y="25" width="100" height="60" rx="10" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/><text x="300" y="60" font-size="16" text-anchor="middle" fill="currentColor">double</text>
  <line x1="352" y1="55" x2="376" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="382,55 372,49 372,61" fill="currentColor"/>
  <rect x="384" y="35" width="50" height="40" rx="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/><text x="409" y="61" font-size="17" text-anchor="middle" fill="currentColor">18</text>
  </svg>
</div>

What number went in? You could try lots of numbers until one works. But there is a much faster way: run the machine
**backwards**. By the end of this lesson you will be able to do it for any machine, and you will know why the order
of the steps matters so much.

## The idea

### Two-step machines

In the [last lesson](03-number-machines.md) each machine did one thing. Now we join two machines together. The number
that comes out of the first part goes straight into the second part.

Let's run the machine **forwards** with 4. The first part adds 5: 4 and 5 more is 9. The 9 goes into the second part,
which doubles it: double 9 is 18. So 4 in gives 18 out.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 110" role="img" aria-label="The same machine run forwards: 4 goes in, the first part makes 9, the second part makes 18.">
  <rect x="8" y="35" width="50" height="40" rx="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/><text x="33" y="61" font-size="17" text-anchor="middle" fill="currentColor">4</text>
  <line x1="60" y1="55" x2="84" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="90,55 80,49 80,61" fill="currentColor"/>
  <rect x="92" y="25" width="100" height="60" rx="10" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/><text x="142" y="60" font-size="16" text-anchor="middle" fill="currentColor">add 5</text>
  <line x1="194" y1="55" x2="242" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="248,55 238,49 238,61" fill="currentColor"/>
  <text x="218" y="45" font-size="14" text-anchor="middle" fill="currentColor">9</text>
  <rect x="250" y="25" width="100" height="60" rx="10" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/><text x="300" y="60" font-size="16" text-anchor="middle" fill="currentColor">double</text>
  <line x1="352" y1="55" x2="376" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="382,55 372,49 372,61" fill="currentColor"/>
  <rect x="384" y="35" width="50" height="40" rx="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/><text x="409" y="61" font-size="17" text-anchor="middle" fill="currentColor">18</text>
  </svg>
</div>

The number in the middle, here 9, is the number **between** the two parts. We cannot see it from outside, but it is
there.

### Every step can be undone

Each thing a machine can do has an **opposite** that undoes it:

| The machine does ... | ... undo it by |
| --- | --- |
| add 5 | taking away 5 |
| take away 3 | adding 3 |
| double | halving |
| halve | doubling |

**Why do they undo each other?** If you put 5 more counters in a pile and then take 5 away, you are back to the pile
you started with. If you make two equal piles out of one pile (doubling) and then keep only one of them (halving), you
are back where you started. Each pair cancels out.

### Undo the steps in reverse order

To run a machine backwards, start at the **out** number and undo the steps, **last step first**.

In our machine the last step was **double**. So undo it first: halve 18. Half of 18 is **9**. That is the number in the
middle.

The first step was **add 5**. Undo it next: 9 take away 5 is **4**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 110" role="img" aria-label="The backwards machine: 18 goes in, is halved to make 9, then 5 is taken away to make 4.">
  <rect x="8" y="35" width="50" height="40" rx="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/><text x="33" y="61" font-size="17" text-anchor="middle" fill="currentColor">18</text>
  <line x1="60" y1="55" x2="84" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="90,55 80,49 80,61" fill="currentColor"/>
  <rect x="92" y="25" width="100" height="60" rx="10" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/><text x="142" y="60" font-size="16" text-anchor="middle" fill="currentColor">halve</text>
  <line x1="194" y1="55" x2="242" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="248,55 238,49 238,61" fill="currentColor"/>
  <text x="218" y="45" font-size="14" text-anchor="middle" fill="currentColor">9</text>
  <rect x="250" y="25" width="100" height="60" rx="10" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/><text x="300" y="60" font-size="16" text-anchor="middle" fill="currentColor">take away 5</text>
  <line x1="352" y1="55" x2="376" y2="55" stroke="currentColor" stroke-width="2.5"/><polygon points="382,55 372,49 372,61" fill="currentColor"/>
  <rect x="384" y="35" width="50" height="40" rx="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/><text x="409" y="61" font-size="17" text-anchor="middle" fill="currentColor">4</text>
  </svg>
</div>

The backwards machine has the **opposite** steps, in the **opposite** order: halve first, then take away 5.

So the number that went in was **4**. **Always check by running it forwards**: 4 and 5 is 9, double 9 is 18 ✓.

### Why the last step comes first

Think about getting dressed. You put on your **socks** first and your **shoes** second. At bedtime you take off your
**shoes** first and your **socks** second. You cannot take off your socks while your shoes are still on! The last
thing you put on is the first thing you take off.

A machine is the same. The double was the last thing done to the number, so it is "on top". It must come off first.
Only then can you reach the add 5 underneath.

### What goes wrong in the wrong order

Suppose you undo the steps in the **same** order as the machine: first take away 5, then halve. 18 take away 5 is 13.
Half of 13 is six and a half. That is not even a whole number! And if you check it, it does not work: six and a half
and 5 more is eleven and a half, and double that is 23, not 18. Wrong order, wrong answer.

### The order of the steps matters going forwards too

Here are two machines with the **same** two steps in a **different** order. Put 4 into each.

- **Add 5, then double**: 4 and 5 is 9, double 9 is **18**.
- **Double, then add 5**: double 4 is 8, 8 and 5 is **13**.

Different answers! Doubling **after** adding doubles the 5 as well (two lots of 5 is 10 extra). Doubling **before**
adding only doubles the 4, and the 5 is added just once. That is why you must always read a machine's steps in order,
and undo them in reverse order.

### Another way: guess and check

You can also find the in-number by **guessing**, running the machine forwards, and improving your guess.

| Guess | add 5 | double | Too big or too small? |
| --- | --- | --- | --- |
| 10 | 15 | 30 | too big (we want 18) |
| 2 | 7 | 14 | too small |
| 4 | 9 | 18 | just right! |

Guess and check always works if you are patient, and it is a good way to check an answer. But working backwards goes
straight to the answer, with no guessing at all.

## Worked examples

**1. Double, then add 1. Out came 15.**

The last step was add 1, so undo it first: 15 take away 1 is 14. Then undo double: half of 14 is **7**.
Check forwards: double 7 is 14, and 1 more is 15 ✓.

**2. Add 4, then halve. Out came 6.**

Undo halve first: double 6 is 12. Then undo add 4: 12 take away 4 is **8**.
Check: 8 and 4 is 12, half of 12 is 6 ✓.

**3. Take away 3, then double. Out came 10.**

Undo double: half of 10 is 5. Undo take away 3: 5 and 3 is **8**.
Check: 8 take away 3 is 5, double 5 is 10 ✓.

**4. Three steps: add 2, then double, then take away 1. Out came 13.**

Undo the steps from the last to the first.

- Undo take away 1: 13 and 1 is 14.
- Undo double: half of 14 is 7.
- Undo add 2: 7 take away 2 is **5**.

Check: 5 and 2 is 7, double 7 is 14, take away 1 is 13 ✓.

**5. The "I'm thinking of a number" game.** "I think of a number. I double it and then add 6. I get 20." This is a
machine: double, then add 6, out came 20. Undo add 6: 20 take away 6 is 14. Undo double: half of 14 is **7**.
Check: double 7 is 14, and 6 more is 20 ✓.

## Try it

1. Add 6, then double. Out came 20. What went in?
2. Double, then add 3. Out came 17. What went in?
3. Halve, then add 5. Out came 9. What went in?
4. Take away 2, then double. Out came 16. What went in?
5. Add 10, then halve. Out came 12. What went in?
6. Double, then add 4, then halve. Out came 9. What went in?
7. A machine is "double, then add 4", and 20 came out. Kim halves first (10) and then takes away 4 (6), and says 6
   went in. Check her answer. What did she do wrong? What is the right answer?
8. Put 3 into "add 2, then double", and into "double, then add 2". Do you get the same out? Explain why or why not.

??? note "Answers"
    1. **4**. Undo double: half of 20 is 10. Undo add 6: 10 − 6 = 4. Check: 4 + 6 = 10, double 10 is 20 ✓.
    2. **7**. Undo add 3: 17 − 3 = 14. Undo double: half of 14 is 7. Check: double 7 is 14, 14 + 3 = 17 ✓.
    3. **8**. Undo add 5: 9 − 5 = 4. Undo halve: double 4 is 8. Check: half of 8 is 4, 4 + 5 = 9 ✓.
    4. **10**. Undo double: half of 16 is 8. Undo take away 2: 8 + 2 = 10. Check: 10 − 2 = 8, double 8 is 16 ✓.
    5. **14**. Undo halve: double 12 is 24. Undo add 10: 24 − 10 = 14. Check: 14 + 10 = 24, half of 24 is 12 ✓.
    6. **7**. Undo halve: double 9 is 18. Undo add 4: 18 − 4 = 14. Undo double: half of 14 is 7. Check: double 7 is
       14, 14 + 4 = 18, half of 18 is 9 ✓.
    7. Check: double 6 is 12, and 12 + 4 is 16, not 20. So 6 is **wrong**. Kim undid the steps in the **same order**
       as the machine. The last step was add 4, so it must be undone **first**: 20 − 4 = 16, then half of 16 is **8**.
       Check: double 8 is 16, 16 + 4 = 20 ✓.
    8. **No.** "Add 2, then double": 3 + 2 = 5, double 5 is **10**. "Double, then add 2": double 3 is 6, 6 + 2 is **8**.
       In the first machine the 2 gets doubled too (2 extra becomes 4 extra). In the second machine the 2 is added only
       once, after the doubling.

## Common mistake

**Undoing the steps in the same order as the machine.** The machine's **last** step must be undone **first**, like
taking off your shoes before your socks. If your answer is not a whole number, or your check does not work, look at
the order.

**Doing the step instead of undoing it.** To undo "double" you must **halve**, not double again. Say the opposite out
loud: "the machine doubled, so I halve".

## Where it leads

- Previous: [Number machines](03-number-machines.md) · Next: [True or false number sentences](05-true-or-false.md)
- [Level 2 page](index.md) · [Algebra topic page](../index.md)
- The first working-backwards puzzles: [I'm thinking of a number](../level-1/01-thinking-of-number.md) in level 1.
- Doubling and halving as equal groups and fair shares: [Multiplying as equal groups](../../numbers/level-2/04-equal-groups.md)
  and [Fair sharing](../../numbers/level-2/05-fair-sharing.md) in Numbers.
- Puzzles that are solved by starting at the end live in [Logic and puzzles](../../logic/index.md).
- In [Level 3](../level-3/index.md) the machines multiply by 3 and add 2, and you undo them the same way: last step
  first.
