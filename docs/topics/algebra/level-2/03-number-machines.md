---
title: "Number machines"
---

# Number machines

*Algebra · level 2, lesson 3 of 6*

## A question to start

Here is a number machine. You put a number **in**, the machine does something secret to it, and a number comes
**out**. You put in 3, and out comes 6.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="A number machine with a question mark on it. 3 goes in, 6 comes out.">
  <rect x="140" y="25" width="140" height="70" rx="10" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <circle cx="160" cy="40" r="4" fill="currentColor"/><circle cx="260" cy="40" r="4" fill="currentColor"/>
  <text x="210" y="67" font-size="18" text-anchor="middle" fill="currentColor">?</text>
  <line x1="80" y1="60" x2="132" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="138,60 128,54 128,66" fill="currentColor"/>
  <line x1="282" y1="60" x2="334" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="340,60 330,54 330,66" fill="currentColor"/>
  <rect x="20" y="40" width="56" height="40" rx="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/><text x="48" y="67" font-size="18" text-anchor="middle" fill="currentColor">3</text>
  <rect x="344" y="40" width="56" height="40" rx="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/><text x="372" y="67" font-size="18" text-anchor="middle" fill="currentColor">6</text>
  <text x="48" y="30" font-size="12" text-anchor="middle" fill="currentColor">IN</text><text x="372" y="30" font-size="12" text-anchor="middle" fill="currentColor">OUT</text>
  </svg>
</div>

Leo says: "Easy! The machine **adds 3**." Amy says: "No, the machine **doubles** the number." Who is right?

Here is the surprise: from this one clue, **both** of them could be right. 3 and 3 more is 6, and double 3 is also 6.
How can you find out which rule the machine really uses? (The answer is in the worked examples.)

## The idea

### What a number machine is

A **number machine** takes a number in, follows a **rule**, and gives a number out. The rule is always the same. If
the rule is "add 3", then every number that goes in gets 3 added to it:

- 1 goes in, 4 comes out;
- 5 goes in, 8 comes out;
- 10 goes in, 13 comes out.

The machine never changes its mind. If you put 5 in today and 8 comes out, then 8 will come out every time you put
in 5. One number in always gives **one** number out, and always the same one.

The rule can be any of the things you know how to do to a number. Some favourites:

| Rule | What it does | 4 goes in, ... comes out |
| --- | --- | --- |
| add 3 | puts 3 more on | 7 |
| take away 2 | takes 2 off | 2 |
| double | adds the number to itself (two lots of it) | 8 |
| halve | shares it into two equal parts and keeps one | 2 |
| add 10 | puts 10 more on | 14 |

### In-out tables

We keep track of what goes in and what comes out in an **in-out table**. Here is a table for a mystery machine:

| In | Out |
| --- | --- |
| 2 | 7 |
| 4 | 9 |
| 10 | 15 |

To find the rule, look at each row and ask: "What do I do to the **in** number to get the **out** number?"

- 2 to 7: 5 more.
- 4 to 9: 5 more.
- 10 to 15: 5 more.

Every row says the same thing, so the rule is **add 5**. A rule must work for **every** row, not just one.

### Why one pair is not enough

Back to the starting machine: 3 in, 6 out. Let us make a table for each of the two guesses, for the numbers 1 to 5.

| In | Out if the rule is "add 3" | Out if the rule is "double" |
| --- | --- | --- |
| 1 | 4 | 2 |
| 2 | 5 | 4 |
| 3 | **6** | **6** |
| 4 | 7 | 8 |
| 5 | 8 | 10 |

Look down the two out-columns. The two rules give **different** numbers for every in-number except **3**. At 3 they
happen to meet: both give 6. That is exactly the number we tried! We were unlucky.

So one pair can fit more than one rule. To decide, we need **another pair**, and it should be one where the guesses
disagree. Put in **4**. If 7 comes out, the rule is "add 3". If 8 comes out, the rule is "double".

This is the same idea as [What is the rule?](../level-1/05-what-is-rule.md) in level 1: two guesses can fit the same
examples, and a good test is one where the guesses give different answers.

### A clue from going up by one

Here is a clever way to tell an adding rule from a doubling rule. Put in numbers that go up by **one** each time: 1,
2, 3, 4, 5. Then look at how the out-numbers grow.

- For "add 3", the outs are 4, 5, 6, 7, 8. They go up by **1** each time.
- For "double", the outs are 2, 4, 6, 8, 10. They go up by **2** each time.

**Why?** With "add 3", one more going in means one more coming out: the 3 extra stays the same, and only the in-number
grew. With "double", one more going in is doubled too: one more, two times, is **two** more coming out.

So if you put in numbers going up by one and the outs go up by one, it is an adding (or taking away) rule. If the
outs go up by two, it is a doubling rule.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="Dot pictures for doubling: 1 in gives 2 dots, 2 in gives 4 dots, 3 in gives 6 dots. Each step adds two dots, one in each row.">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <circle cx="50" cy="50" r="10"/><circle cx="50" cy="80" r="10"/>
    <circle cx="160" cy="50" r="10"/><circle cx="185" cy="50" r="10"/><circle cx="160" cy="80" r="10"/><circle cx="185" cy="80" r="10"/>
    <circle cx="290" cy="50" r="10"/><circle cx="315" cy="50" r="10"/><circle cx="290" cy="80" r="10"/><circle cx="315" cy="80" r="10"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1"><circle cx="340" cy="50" r="10"/><circle cx="340" cy="80" r="10"/></g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="50" y="120">1 in: 2 out</text><text x="172" y="120">2 in: 4 out</text><text x="315" y="120">3 in: 6 out</text>
    <text x="210" y="155">one more in adds a dot to each row: 2 more out</text>
  </g>
</svg>
</div>

### Machines that take away and halve

A machine that **takes away** makes numbers smaller. If 10 goes in and 7 comes out, and 15 goes in and 12 comes out,
then every out is 3 less than its in. The rule is **take away 3**.

A machine that **halves** also makes numbers smaller, but it makes big numbers **much** smaller. 10 in, 5 out. 20 in,
10 out. 6 in, 3 out. The out is always half of the in. A halving machine likes even numbers, because they share
fairly into two equal parts.

How can you tell "take away 5" from "halve" when 10 goes in and 5 comes out? Again, you need another pair. Put in 20:
"take away 5" gives 15, but "halve" gives 10.

### Making a machine

You can make your own number machine with a friend. One of you secretly writes a rule on a piece of paper. The other
calls out in-numbers, and the rule-keeper says the out-numbers. Write them in a table. Try to find the rule using as
few in-numbers as you can. Small in-numbers, like 0, 1 and 2, are often the most helpful. (What comes out when 0 goes
into an "add 6" machine? What comes out when 0 goes into a "double" machine?)

## Worked examples

**1. Leo and Amy.** The machine gave 6 for 3. "Add 3" and "double" both fit. Test with **4**: "add 3" would give 7,
"double" would give 8. Put 4 in, and out comes **8**. So Amy is right: the rule is **double**. Check the first pair:
double 3 is 6 ✓.

**2. A full table.**

| In | Out |
| --- | --- |
| 1 | 5 |
| 2 | 6 |
| 5 | 9 |

1 to 5 is 4 more. 2 to 6 is 4 more. 5 to 9 is 4 more. Every row agrees, so the rule is **add 4**. What comes out for
10? 10 and 4 more: **14**.

**3. Doubling.**

| In | Out |
| --- | --- |
| 2 | 4 |
| 5 | 10 |
| 7 | 14 |

Is it "add 2"? 2 to 4 is 2 more, but 5 to 10 is 5 more. The rows disagree, so it is not an adding rule. Each out is
two lots of its in: 2 and 2, 5 and 5, 7 and 7. The rule is **double**.

**4. Smaller numbers out.**

| In | Out |
| --- | --- |
| 10 | 5 |
| 6 | 3 |
| 20 | 10 |

10 to 5 is 5 less, but 6 to 3 is 3 less. Not a take-away rule. Each out is half of its in. The rule is **halve**. What
goes in to give 8 out? A number whose half is 8: **16**.

**5. A gap in the table.** The rule is "take away 6". Fill the table: 10 in gives **4**; 6 in gives **0**; **15** in
gives 9 (because 15 take away 6 is 9: to find the in, add 6 to the out).

## Try it

1. A machine adds 7. What comes out for 5? For 13? For 0?
2. A machine doubles. What comes out for 6? For 9? For 15?
3. Find the rule: 1 in, 4 out; 3 in, 6 out; 8 in, 11 out.
4. Find the rule: 12 in, 6 out; 8 in, 4 out; 30 in, 15 out.
5. Find the rule: 9 in, 4 out; 12 in, 7 out; 20 in, 15 out.
6. A machine gives 4 for 2. Write **two** different rules it might have. Which in-number would you test next, and why?
7. For the machine "add 10", what number went in if 25 came out?
8. A machine's outs go up by 2 each time its ins go up by 1. Sam thinks it is "add 2". Is he right? What could it be?

??? note "Answers"
    1. 5 and 7 more is **12**. 13 and 7 more is **20**. 0 and 7 more is **7**.
    2. Double 6 is **12**. Double 9 is **18**. Double 15 is **30** (10 and 10 is 20, 5 and 5 is 10, 20 and 10 is 30).
    3. **Add 3**. 1 to 4 is 3 more, 3 to 6 is 3 more, 8 to 11 is 3 more. Every row agrees.
    4. **Halve**. Half of 12 is 6, half of 8 is 4, half of 30 is 15. (It is not "take away 6": 8 take away 6 is 2,
       not 4.)
    5. **Take away 5**. 9 − 5 = 4, 12 − 5 = 7, 20 − 5 = 15.
    6. **Add 2** (2 and 2 more is 4) or **double** (double 2 is 4). Test **3**, or any number other than 2: "add 2"
       gives 5, "double" gives 6, so the answer tells you which rule it is. (Do not test 2 again; you already know what
       comes out.)
    7. **15**. The machine added 10, so take the 10 back off: 25 − 10 = 15. Check: 15 and 10 more is 25 ✓.
    8. **Not "add 2".** An adding rule makes the outs go up by 1 when the ins go up by 1, because only the in-number
       grows. Outs that go up by 2 point to a **doubling** rule. (It could also be "double, then add something", like
       "double and add 1": 1 gives 3, 2 gives 5, 3 gives 7, also going up by 2. You will meet machines like that in the
       next lesson.)

## Common mistake

**Finding a rule from one row only.** One pair, like 3 in and 6 out, can fit many rules. Check your rule on **every**
row of the table, and if there is only one row, test another number before you decide.

**Looking at the in-numbers and the out-numbers separately.** The rule connects each in-number to **its own**
out-number, in the same row. Do not compare the 2 in one row with the 10 in another row.

## Where it leads

- Previous: [The equal sign as a balance](02-equal-as-balance.md) · Next: [Working backwards](04-working-backwards.md),
  where you know what came out and find what went in.
- [Level 2 page](index.md) · [Algebra topic page](../index.md)
- Doubling and halving are explored in Numbers: [Multiplying as equal groups](../../numbers/level-2/04-equal-groups.md)
  and [Fair sharing](../../numbers/level-2/05-fair-sharing.md).
- A rule that turns 1, 2, 3, ... into a list of numbers makes a pattern: see
  [Patterns and sequences](../../patterns/index.md).
- Much later, a number machine gets a grown-up name, a **function**. The idea that one number in always gives one
  number out is exactly what a function means.
