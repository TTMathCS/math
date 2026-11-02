---
title: "Fussy parts first"
---

# Fussy parts first

*Counting and combinations · level 3, lesson 2 of 6*

## A question to start

How many 3-digit numbers are **even** and have **three different digits**? Numbers like 104, 352 and 986 count. Numbers
like 135 (odd) or 224 (a repeated digit) do not.

Try a quick guess before reading on. There are 900 three-digit numbers (100 to 999), and half of them are even, so
there are 450 even ones. Some of those repeat a digit. Is the answer about 400? About 300?

The answer is **328**, and to get it without listing hundreds of numbers you need one clever habit: **deal with the
fussy parts first**. This lesson is about that habit, and about the digit that causes the most trouble of all: 0.

## The idea

### What is a fussy part?

In the last lesson every slot followed the same rule: "any digit" or "any digit not used yet". In many questions, one
slot has an **extra rule** of its own. We call that a **fussy** slot.

In a 3-digit number:

- the **first** digit (the hundreds) is fussy: it cannot be 0, or 052 would just be the 2-digit number 52;
- for an even number, the **last** digit (the ones) is fussy: it must be 0, 2, 4, 6 or 8.

### Why the order you fill slots in matters

Let us try to count the even numbers with different digits by filling the slots from left to right, and see what goes
wrong.

1. First digit: 1 to 9, so 9 choices. Fine.
2. Middle digit: anything except the first digit, so 9 choices. Fine.
3. Last digit: it must be even, and different from the two digits already used. How many choices?

It depends! If the number so far is 13_, no even digit has been used, so the last digit has all **5** even choices
(0, 2, 4, 6, 8). If it is 24_, two even digits are gone, so only **3** are left (0, 6, 8). If it is 21_, only one
is gone, so **4** are left.

The number of choices is different on different branches of the tree. Then the multiplication rule cannot be used,
because "each branch splits into the same number of branches" is not true any more.

The fix is to fill the **fussiest slot first**, while nothing has been used and you know exactly how many choices it
has.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 130" role="img" aria-label="Three boxes for hundreds, tens and ones. The ones box is filled first, then the hundreds box, then the tens box">
  <rect x="60" y="40" width="80" height="50" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <rect x="170" y="40" width="80" height="50" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <rect x="280" y="40" width="80" height="50" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <text x="100" y="30" font-size="13" text-anchor="middle" fill="currentColor">hundreds</text>
  <text x="210" y="30" font-size="13" text-anchor="middle" fill="currentColor">tens</text>
  <text x="320" y="30" font-size="13" text-anchor="middle" fill="currentColor">ones</text>
  <text x="100" y="72" font-size="16" text-anchor="middle" fill="currentColor">2nd</text>
  <text x="210" y="72" font-size="16" text-anchor="middle" fill="currentColor">3rd</text>
  <text x="320" y="72" font-size="16" text-anchor="middle" fill="currentColor">1st</text>
  <text x="100" y="112" font-size="12" text-anchor="middle" fill="currentColor">not 0, not used</text>
  <text x="210" y="112" font-size="12" text-anchor="middle" fill="currentColor">anything not used</text>
  <text x="320" y="112" font-size="12" text-anchor="middle" fill="currentColor">must be even</text>
</svg>
</div>

The words "1st", "2nd" and "3rd" in the boxes show the order we **fill** the slots, not the order we read them. You
are allowed to fill slots in any order you like; the number is the same however you build it.

### The trouble with 0

Even filling the last digit first is not quite enough. Suppose the last digit is done. How many choices for the first
digit?

- If the last digit is **0**, then 0 is already used up, so the first digit can be any of 1 to 9: **9** choices.
- If the last digit is **2, 4, 6 or 8**, then 0 is still unused, but the first digit is not allowed to be 0 anyway,
  and it cannot be the even digit already used: 10 − 2 = **8** choices.

Again the branches are different. When that happens, **split into cases**: count each kind of branch separately, then
add. Cases are joined by "or": the last digit is 0, **or** it is 2, 4, 6 or 8. And "or" adds.

### Solving the question from the start

**Case A: the last digit is 0.** (1 choice for the last digit.)

- First digit: 1 to 9, all still free: **9** choices.
- Middle digit: anything except the two digits used: **8** choices.
- Case A total: 1 × 9 × 8 = **72**.

**Case B: the last digit is 2, 4, 6 or 8.** (**4** choices.)

- First digit: not 0, and not the even digit used: **8** choices.
- Middle digit: not the two digits used (0 is allowed here): **8** choices.
- Case B total: 4 × 8 × 8 = **256**.

**Answer:** 72 + 256 = **328**.

### Checking a different way

A good counter checks big answers by a second road. All 3-digit numbers with different digits: first digit 9 choices
(not 0), middle 9 (any except the first, and 0 is now allowed), last 8. That is 9 × 9 × 8 = **648**.

Now count the **odd** ones: the last digit is 1, 3, 5, 7 or 9 (**5** choices); the first digit is not 0 and not that
odd digit (**8** choices); the middle is not either of those (**8** choices). That is 5 × 8 × 8 = **320**. No case
split is needed here, because the last digit can never be 0.

Every number is odd or even, so the even ones are 648 − 320 = **328**. The same answer by two roads: now we can trust
it.

Notice that the evens (328) and odds (320) are **not** equal, even though half of all whole numbers are even. The extra
even ones come from the numbers ending in 0, which have a free choice for the first digit.

## Worked examples

**1. Odd 3-digit numbers with different digits.** We have just done it: 5 × 8 × 8 = 320. The fussy slots were the last
digit (must be odd) and the first digit (not 0). We filled the last digit first, then the first digit, then the
middle.

**2. Numbers bigger than 500.** How many 3-digit numbers greater than 500 have three different digits?

1. Fussy slot: the first digit must be 5, 6, 7, 8 or 9. **5** choices. (A number like 501 starts with 5 and is
   bigger than 500; the number 500 itself repeats a 0, so it does not count anyway.)
2. Middle digit: any except the first. **9** choices.
3. Last digit: any except the two used. **8** choices.
4. 5 × 9 × 8 = **360**.

**3. Four-digit numbers from 0, 1, 2, 3, 4.** How many 4-digit numbers use four different digits from 0, 1, 2, 3, 4?

1. First digit (fussy, not 0): 1, 2, 3 or 4. **4** choices.
2. Second digit: any of the 5 except the one used. 0 is allowed now. **4** choices.
3. Third digit: **3** choices. Fourth digit: **2** choices.
4. 4 × 4 × 3 × 2 = **96**.

Check by "all minus bad": 4-digit strings of different digits from these 5 digits, 0 in front allowed:
5 × 4 × 3 × 2 = 120. Strings starting with 0: then 4 × 3 × 2 = 24 ways to finish. 120 − 24 = 96. ✓

**4. Even numbers from a small set.** How many 3-digit even numbers with different digits can be made from the digits
0, 1, 2, 3, 4, 5?

The digit 0 is in the set, so split into cases.

1. Case A, last digit 0: first digit any of 1 to 5 (**5**), middle any of the remaining 4 (**4**). 5 × 4 = **20**.
2. Case B, last digit 2 or 4 (**2** choices): first digit not 0 and not the last digit, so 6 − 2 = **4** choices;
   middle any of the remaining 4 digits (**4**). 2 × 4 × 4 = **32**.
3. Total: 20 + 32 = **52**.

## Try it

1. How many 3-digit numbers have a last digit of 5 and three different digits?
2. How many 3-digit numbers less than 400 have three different digits?
3. How many 4-digit numbers can be made from the digits 1, 2, 3, 4, 5 with no repeats, if the number must be even?
4. How many 2-digit numbers have two different digits? (Fill the fussy slot first.)
5. How many 3-digit numbers with different digits can be made from 0, 1, 2, 3? List them to check if you like.
6. How many 3-digit numbers with different digits end in 0 or 5? (Split into two cases.)
7. Explain why, for even 3-digit numbers with different digits, you cannot just do "5 choices for the last digit, then
   8 for the first, then 8 for the middle".

??? note "Answers"
    1. Last digit 5 (1 choice). First digit not 0 and not 5: 8 choices. Middle not those two: 8 choices.
       1 × 8 × 8 = 64.
    2. First digit 1, 2 or 3: 3 choices. Middle: 9 choices. Last: 8 choices. 3 × 9 × 8 = 216.
    3. Last digit 2 or 4: 2 choices. Then the other three places use 3 of the remaining 4 digits: 4 × 3 × 2 = 24.
       2 × 24 = 48. (No 0 in the set, so no case split.)
    4. First digit 1 to 9: 9 choices. Second: any digit except the first: 9 choices. 9 × 9 = 81. (Check: 90 two-digit
       numbers, minus the 9 with repeated digits 11, 22, ..., 99, is 81.)
    5. First digit 1, 2 or 3: 3 choices. Middle: 3 choices (0 now allowed). Last: 2 choices. 3 × 3 × 2 = 18.
    6. Ending in 0: first 9 choices, middle 8: 72. Ending in 5: first not 0 and not 5, 8 choices; middle 8: 64.
       Total 72 + 64 = 136.
    7. If the last digit is 0, the first digit has 9 choices (1 to 9), not 8. The branches split differently, so you
       must split into the "ends in 0" case (72) and the "ends in 2, 4, 6, 8" case (256). Doing 5 × 8 × 8 = 320 gives
       the wrong answer.

## Common mistake

**Filling the slots left to right without thinking.** Reading order and filling order are different things. If a slot
has a special rule, the number of choices it gets can depend on what has already been used. Always ask: *which slot is
fussiest?* and fill that one first.

**Forgetting that 0 is fussy twice.** 0 can be even (it is), and 0 cannot start a number. When 0 is one of the digits
that the fussy slot may take, split into "the fussy slot is 0" and "the fussy slot is not 0".

## Where it leads

- Back: [Repeats allowed or not](01-repeats-or-not.md) · Next: [Counting what you do not want](03-counting-the-rest.md)
- [Level 3 page](index.md) · [Counting topic page](../index.md)
- Checking "all minus the odd ones" is a first taste of the next lesson's big trick.
- Even and odd numbers, and why 0 is even, are part of [Number theory](../../number-theory/index.md).
- In level 4, slots with rules come back as "arrangements with conditions":
  [Arrangements with conditions](../level-4/05-arranging-with-rules.md).
