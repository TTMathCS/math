---
title: "Explore: Factors, multiples and divisibility tricks"
---

# Explore: Factors, multiples and divisibility tricks

*Number theory · step 2 of 5*

## A question to start

Can 123,456,789 sweets be shared equally among 3 children, with none left over? What about 9 children?

You could do a very long division. Or you could add up the digits, 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45, notice
that 45 is in both the 3 times table and the 9 times table, and say "yes, and yes" in ten seconds. By the end of
this page you will know why that trick works.

## The idea

### Factors and multiples

In the Play step, 12 counters made a rectangle of 3 rows of 4. In the language of numbers, that says
3 × 4 = 12. We use two words for this:

- 3 and 4 are **factors** of 12. A factor of a number divides it exactly, with **no remainder** (nothing left over).
- 12 is a **multiple** of 3, and also a multiple of 4. The multiples of 3 are the numbers in the 3 times table:
  3, 6, 9, 12, 15, ...

Another way to say "3 is a factor of 12" is "12 is **divisible** by 3", or "3 **divides** 12".

Every number has 1 and itself as factors, because 1 × 12 = 12. Factors come in **pairs** that multiply to the
number: for 12 the pairs are 1 and 12, 2 and 6, 3 and 4. So the factors of 12 are 1, 2, 3, 4, 6 and 12.

### Primes and composites

A **prime number** is a whole number bigger than 1 whose only factors are 1 and itself. These are the "line-only"
numbers from the Play step: 2, 3, 5, 7, 11, 13, ...

A whole number bigger than 1 that is not prime is called **composite**: it has at least one other factor, so it can
be made into a real rectangle. 4, 6, 8, 9, 10 and 12 are composite.

The number **1 is neither**. It has only one factor (itself), and as you will see in the next step, mathematics works
much more neatly if 1 is left out of the primes.

The number **2 is the only even prime**. Every other even number has 2 as a factor, so it cannot be prime.

### Divisibility tricks

These rules tell you whether a number divides another without doing the division.

| Divisible by | Check this | Example |
| --- | --- | --- |
| 2 | The last digit is even (0, 2, 4, 6, 8) | 3,578 ends in 8: yes |
| 5 | The last digit is 0 or 5 | 1,235 ends in 5: yes |
| 10 | The last digit is 0 | 4,560 ends in 0: yes |
| 4 | The **last two digits** make a number divisible by 4 | 7,316: 16 is divisible by 4, so yes |
| 3 | The **sum of the digits** is divisible by 3 | 2,145: 2 + 1 + 4 + 5 = 12, yes |
| 9 | The **sum of the digits** is divisible by 9 | 4,725: 4 + 7 + 2 + 5 = 18, yes |
| 6 | It passes the test for 2 **and** the test for 3 | 534: even, and 5 + 3 + 4 = 12, yes |

### Why the digit-sum trick works

Each place in a number is worth 10, 100, 1000 and so on. Each of those is **one more than a row of nines**:

- 10 = 9 + 1
- 100 = 99 + 1
- 1000 = 999 + 1

Now split 4,725 into its places:

$$
\begin{aligned}
4725 &= 4 \times 1000 + 7 \times 100 + 2 \times 10 + 5\\
&= \underbrace{4 \times 999 + 7 \times 99 + 2 \times 9}_{\text{made of nines}} + (4 + 7 + 2 + 5)
\end{aligned}
$$

The first three parts are made of nines, so they are always divisible by 9 (and by 3, since 9 = 3 × 3). Whether the
whole number divides by 9 depends **only** on the leftover part, 4 + 7 + 2 + 5, which is the digit sum. Here the
digit sum is 18, which divides by 9, so 4,725 does too. (Check: 4,725 ÷ 9 = 525.)

The rule for 4 works for a similar reason: 100 = 4 × 25, so all the hundreds and thousands are already divisible
by 4, and only the last two digits matter.

### The sieve of Eratosthenes

How do you find all the primes up to 50? A method credited to Eratosthenes, a Greek scholar who worked in Alexandria
over 2,000 years ago, works like a kitchen sieve: you shake out everything that is not prime.

1. Write the numbers 2 to 50.
2. Circle 2. Cross out every other multiple of 2: 4, 6, 8, ...
3. The next number not crossed out is 3. Circle it. Cross out its multiples: 6, 9, 12, ...
4. Next is 5. Circle it and cross out its multiples. Then do the same for 7.
5. Everything left is prime.

Why stop at 7? The next prime is 11, and 11 × 11 = 121 is more than 50. Any composite number up to 50 has a factor
pair, and the smaller factor in the pair is at most 7, so it has already been crossed out.

The primes up to 50 are: **2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47**. There are 15 of them.

## Worked example

**Find every factor of 60.**

Work through 1, 2, 3, ... and write each factor together with its partner.

1. 1 × 60 = 60. Pair: 1 and 60.
2. 60 is even: 2 × 30. Pair: 2 and 30.
3. Digit sum 6 + 0 = 6, divisible by 3: 3 × 20. Pair: 3 and 20.
4. Last two digits 60, divisible by 4: 4 × 15. Pair: 4 and 15.
5. Ends in 0: 5 × 12. Pair: 5 and 12.
6. Even and divisible by 3, so divisible by 6: 6 × 10. Pair: 6 and 10.
7. 7 does not divide 60 (7 × 8 = 56, remainder 4).
8. 8 × 7 = 56 and 8 × 8 = 64, so 8 does not divide 60 either. More importantly, 8 × 8 is already bigger than 60,
   so any new pair would have to have both numbers bigger than 7, and that is too big. **Stop.**

The factors of 60 are **1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60**: twelve of them. A number with so many factors is
easy to split up in many ways, which makes 60 a handy number for measuring time: an hour of 60 minutes splits
evenly into halves, thirds, quarters, fifths, sixths, tenths and twelfths.

## Try it

1. Use the tricks to test 1,260 for divisibility by 2, 3, 4, 5, 6, 9 and 10.
2. List every factor of 48.
3. Is 91 prime?
4. What digit can go in the gap so that 52_ is divisible by 9?
5. Which numbers below 30 have an **odd** number of factors? What do they have in common?
6. List the primes between 50 and 70.

??? note "Answers"
    1. All seven. It ends in 0, so it divides by 2, 5 and 10. Its last two digits, 60, divide by 4. Its digit sum is
       1 + 2 + 6 + 0 = 9, so it divides by 3 and by 9. Divisible by 2 and 3 means divisible by 6.
    2. Pairs: 1 × 48, 2 × 24, 3 × 16, 4 × 12, 6 × 8. (5 and 7 do not divide 48, and 7 × 7 = 49 is too big.) So the
       factors are 1, 2, 3, 4, 6, 8, 12, 16, 24, 48: ten of them.
    3. No. 91 = 7 × 13. It looks prime, which is why it catches people out.
    4. 2. The digits so far add to 5 + 2 = 7. The next multiple of 9 is 9, so the missing digit is 2: 522 = 9 × 58.
       (The one after that is 18, which would need a digit of 11, and digits only go up to 9.)
    5. 1, 4, 9, 16 and 25: the square numbers. Factors come in pairs, but in a square one pair is a number with
       itself (like 4 × 4 for 16), so it is only counted once and the total comes out odd.
    6. 53, 59, 61 and 67.

## Common mistake

**Using the digit-sum trick for the wrong number.** It works for 3 and 9 only, because 10, 100, 1000, ... are
each one more than a multiple of 9. It does **not** work for 4, 7 or anything else. For example, 13 has digit sum 4,
but 13 is not divisible by 4.

## Where it leads

- Next step: [Build: prime factors, GCD and Euclid's algorithm](03-build.md), where every number is broken into
  primes, like a molecule into atoms.
- Back a step: [Play: odd, even and rectangle numbers](01-play.md)
- Square numbers and the gaps between them are in [Patterns: number sequences](../patterns/02-explore.md).
- Splitting things into equal parts is the start of [Ratio and rates](../ratio/index.md).
