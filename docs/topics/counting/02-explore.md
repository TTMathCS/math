---
title: "Explore: The multiplication principle"
---

# Explore: The multiplication principle

*Counting and combinations · step 2 of 5*

## A question to start

A bike lock has 3 dials, each with the digits 0 to 9. A thief tries one code every second. How long could it take
to open the lock? What if the lock had 4 dials?

You could start listing: 000, 001, 002, ... but you would be at it for a while. By the end of this page you will see
in one line that there are 1,000 codes (under 17 minutes for the thief) and that one extra dial makes 10,000 (nearly
3 hours). Adding one dial multiplies the work by ten.

## The idea

### From trees to multiplying

In the Play step, 3 T-shirts and 2 pairs of shorts made a tree with 3 branches, each splitting into 2. The number of
tips was 3 × 2 = 6. That works every time, and it has a name.

> **The multiplication principle.** If a choice is made in steps, and the first step can be done in $a$ ways, and
> then (whatever happened first) the second step can be done in $b$ ways, then the whole choice can be made in
> $a \times b$ ways.

It keeps going for more steps: three steps with $a$, $b$ and $c$ ways give $a \times b \times c$.

The important words are *whatever happened first*. The **number** of choices for the second step must be the same
on every branch, even if the choices themselves are different.

### "And" multiplies, "or" adds

There is a second rule that sits beside the first.

> **The addition principle.** If you choose **one** thing from group A **or** from group B, and nothing is in both
> groups, the number of ways is (ways in A) + (ways in B).

A café has 3 kinds of sandwich and 4 kinds of soup.

- Lunch is a sandwich **or** a soup: 3 + 4 = **7** choices.
- Lunch is a sandwich **and** a soup: 3 × 4 = **12** choices.

A good habit is to say your choice out loud as a sentence. If it has *and then*, multiply. If it has *or*, add.

### Repeats allowed, or not

**With repeats.** Each dial of the bike lock can show any digit, whatever the others show. So there are 10 choices for
each dial:

$$10 \times 10 \times 10 = 1000 \text{ codes.}$$

A coin tossed 5 times gives $2 \times 2 \times 2 \times 2 \times 2 = 32$ possible sequences of heads and tails.

**Without repeats.** Suppose a 4-digit code must use four **different** digits. The first digit has 10 choices.
Whatever it was, the second digit can be anything except that one: 9 choices. Then 8, then 7:

$$10 \times 9 \times 8 \times 7 = 5040 \text{ codes.}$$

The digits available change from branch to branch, but the **number** of them does not. That is all the
multiplication principle needs.

### Restrictions: do the fussy part first

Sometimes one position has a rule. A three-digit number cannot start with 0 (then it would be a two-digit number).
So the first digit has 9 choices (1 to 9), and the others have 10:

$$9 \times 10 \times 10 = 900.$$

That matches the list 100, 101, ..., 999, which has 999 − 99 = 900 numbers. When a position has a special rule,
**fill that position first**, while you still know exactly how many choices are left.

## Worked examples

**1. Odd three-digit numbers with all different digits.** How many are there?

Two places are fussy: the last digit must be odd, and the first digit cannot be 0.

1. **Last digit first** (the fussiest): it must be 1, 3, 5, 7 or 9. **5 choices.**
2. **First digit next:** it cannot be 0, and it cannot be the digit already used at the end. That leaves 10 − 2 =
   **8 choices.** (The last digit was odd, so it was never 0; we really are removing two different digits.)
3. **Middle digit:** anything except the two digits already used: **8 choices.** (0 is allowed here.)
4. Multiply: $5 \times 8 \times 8 = 320$.

If you had filled the first digit first, you would not know whether it had "used up" an odd digit, and the number of
choices for the last digit would differ from branch to branch. Fussy part first avoids that.

**2. Counting the factors of 360.** In [number theory](../number-theory/level-3/06-counting-factors.md) we found
$360 = 2^3 \times 3^2 \times 5$. Every factor of 360 is made of these same primes, using **no more** of each than 360
has. So building a factor means three choices in a row:

- How many 2s? 0, 1, 2 or 3: **4 choices.**
- How many 3s? 0, 1 or 2: **3 choices.**
- How many 5s? 0 or 1: **2 choices.**

By the multiplication principle, 360 has $4 \times 3 \times 2 = 24$ factors. Listing them all would take a while;
multiplying takes a second.

**3. Routes on a map.** There are 3 roads from town A to town B, 2 roads from B to C, and one direct road from A to
C. How many routes go from A to C?

- Through B: 3 roads **and then** 2 roads: 3 × 2 = 6.
- Direct: 1.
- Through B **or** direct: 6 + 1 = **7 routes.**

## Try it

1. A restaurant offers 4 starters, 5 main courses and 3 desserts. How many three-course meals are possible?
2. A licence plate has 3 letters followed by 3 digits. How many plates are possible? (26 letters, repeats allowed.)
3. How many 4-digit PINs are there? How many if no digit may be repeated?
4. How many three-digit numbers are even?
5. How many factors does $72 = 2^3 \times 3^2$ have? List them to check.
6. A club has 10 members. It needs a president and a different person as secretary. In how many ways can it choose?

??? note "Answers"
    1. $4 \times 5 \times 3 = 60$ meals.
    2. $26 \times 26 \times 26 \times 10 \times 10 \times 10 = 17{,}576{,}000$ plates.
    3. $10 \times 10 \times 10 \times 10 = 10{,}000$ PINs (0000 to 9999). With no repeats,
       $10 \times 9 \times 8 \times 7 = 5040$.
    4. First digit 1 to 9 (9 choices), middle digit anything (10), last digit 0, 2, 4, 6 or 8 (5):
       $9 \times 10 \times 5 = 450$. This is exactly half of 900, as you would expect.
    5. $(3 + 1) \times (2 + 1) = 4 \times 3 = 12$ factors: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.
    6. President: 10 choices. Secretary: anyone else, 9 choices. $10 \times 9 = 90$ ways. Order matters here: Ana as
       president with Ben as secretary is different from the other way round.

## Common mistake

**Adding when you should multiply (or the other way round).** "3 T-shirts and 2 shorts, so 3 + 2 = 5 outfits" is the
classic slip. Ask: *am I choosing one thing from either group (add), or one thing from each group (multiply)?* An
outfit has a T-shirt **and** shorts, so multiply.

## Where it leads

- Next step: [Build: permutations](03-build.md), where "10 × 9 × 8 × ..." gets its own short name and you count
  every way to arrange things in a row.
- Back a step: [Play: how many ways?](01-play.md)
- The coin's 32 sequences become chances in [Probability](../probability/02-explore.md).
- Prime factorizations, which make factor-counting so quick, are explained in
  [Number theory: prime factors](../number-theory/level-3/06-counting-factors.md).
