---
title: "Codes and locks"
---

# Codes and locks

*Counting and combinations · level 2, lesson 4 of 6*

## A question to start

Max has a little lock on his toy box. It has 2 dials, and each dial shows a digit from 0 to 9. His sister wants to
open it, and she tries one code every 2 seconds: 00, 01, 02, and so on. What is the longest it could take her?

And what if Max buys a lock with **3** dials instead? Does it take one and a half times as long? Twice as long? The
answer is much more surprising than that, and it is the reason real locks and passwords work. Let's find out.

## The idea

### A code is a line-up where repeats are allowed

A **code** is a list of symbols in order, like 3 then 7. Order matters: the code 37 is not the code 73 (try opening
a lock with the digits the wrong way round!). So a code is like a tower or a line-up from level 1.

But there is one big difference from lining up friends. A friend can only stand in one place in a line. A digit can
be used **again**: the code 55 is fine. We say **repeats are allowed**.

### Two dials: 100 codes

Use the multiplication rule. The first dial can show any of **10** digits. Whatever it shows, the second dial can
also show any of **10** digits, because repeats are allowed, so no digit gets used up. Every branch splits into 10:

**10 × 10 = 100 codes.**

Here they all are, in a box: a row for each first digit and a column for each second digit.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 300" role="img" aria-label="A 10 by 10 grid of all two-digit codes. Rows are the first digit 0 to 9, columns are the second digit 0 to 9. The square in row 3, column 7 is coloured: the code 37.">
  <g stroke="currentColor" stroke-width="0.8"><rect x="110" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="134" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="158" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="182" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="206" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="230" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="254" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="278" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="302" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="326" y="30" width="24" height="24" fill="#9cc9ea"/><rect x="110" y="54" width="24" height="24" fill="none"/><rect x="134" y="54" width="24" height="24" fill="none"/><rect x="158" y="54" width="24" height="24" fill="none"/><rect x="182" y="54" width="24" height="24" fill="none"/><rect x="206" y="54" width="24" height="24" fill="none"/><rect x="230" y="54" width="24" height="24" fill="none"/><rect x="254" y="54" width="24" height="24" fill="none"/><rect x="278" y="54" width="24" height="24" fill="none"/><rect x="302" y="54" width="24" height="24" fill="none"/><rect x="326" y="54" width="24" height="24" fill="none"/><rect x="110" y="78" width="24" height="24" fill="none"/><rect x="134" y="78" width="24" height="24" fill="none"/><rect x="158" y="78" width="24" height="24" fill="none"/><rect x="182" y="78" width="24" height="24" fill="none"/><rect x="206" y="78" width="24" height="24" fill="none"/><rect x="230" y="78" width="24" height="24" fill="none"/><rect x="254" y="78" width="24" height="24" fill="none"/><rect x="278" y="78" width="24" height="24" fill="none"/><rect x="302" y="78" width="24" height="24" fill="none"/><rect x="326" y="78" width="24" height="24" fill="none"/><rect x="110" y="102" width="24" height="24" fill="none"/><rect x="134" y="102" width="24" height="24" fill="none"/><rect x="158" y="102" width="24" height="24" fill="none"/><rect x="182" y="102" width="24" height="24" fill="none"/><rect x="206" y="102" width="24" height="24" fill="none"/><rect x="230" y="102" width="24" height="24" fill="none"/><rect x="254" y="102" width="24" height="24" fill="none"/><rect x="278" y="102" width="24" height="24" fill="#eea66f"/><rect x="302" y="102" width="24" height="24" fill="none"/><rect x="326" y="102" width="24" height="24" fill="none"/><rect x="110" y="126" width="24" height="24" fill="none"/><rect x="134" y="126" width="24" height="24" fill="none"/><rect x="158" y="126" width="24" height="24" fill="none"/><rect x="182" y="126" width="24" height="24" fill="none"/><rect x="206" y="126" width="24" height="24" fill="none"/><rect x="230" y="126" width="24" height="24" fill="none"/><rect x="254" y="126" width="24" height="24" fill="none"/><rect x="278" y="126" width="24" height="24" fill="none"/><rect x="302" y="126" width="24" height="24" fill="none"/><rect x="326" y="126" width="24" height="24" fill="none"/><rect x="110" y="150" width="24" height="24" fill="none"/><rect x="134" y="150" width="24" height="24" fill="none"/><rect x="158" y="150" width="24" height="24" fill="none"/><rect x="182" y="150" width="24" height="24" fill="none"/><rect x="206" y="150" width="24" height="24" fill="none"/><rect x="230" y="150" width="24" height="24" fill="none"/><rect x="254" y="150" width="24" height="24" fill="none"/><rect x="278" y="150" width="24" height="24" fill="none"/><rect x="302" y="150" width="24" height="24" fill="none"/><rect x="326" y="150" width="24" height="24" fill="none"/><rect x="110" y="174" width="24" height="24" fill="none"/><rect x="134" y="174" width="24" height="24" fill="none"/><rect x="158" y="174" width="24" height="24" fill="none"/><rect x="182" y="174" width="24" height="24" fill="none"/><rect x="206" y="174" width="24" height="24" fill="none"/><rect x="230" y="174" width="24" height="24" fill="none"/><rect x="254" y="174" width="24" height="24" fill="none"/><rect x="278" y="174" width="24" height="24" fill="none"/><rect x="302" y="174" width="24" height="24" fill="none"/><rect x="326" y="174" width="24" height="24" fill="none"/><rect x="110" y="198" width="24" height="24" fill="none"/><rect x="134" y="198" width="24" height="24" fill="none"/><rect x="158" y="198" width="24" height="24" fill="none"/><rect x="182" y="198" width="24" height="24" fill="none"/><rect x="206" y="198" width="24" height="24" fill="none"/><rect x="230" y="198" width="24" height="24" fill="none"/><rect x="254" y="198" width="24" height="24" fill="none"/><rect x="278" y="198" width="24" height="24" fill="none"/><rect x="302" y="198" width="24" height="24" fill="none"/><rect x="326" y="198" width="24" height="24" fill="none"/><rect x="110" y="222" width="24" height="24" fill="none"/><rect x="134" y="222" width="24" height="24" fill="none"/><rect x="158" y="222" width="24" height="24" fill="none"/><rect x="182" y="222" width="24" height="24" fill="none"/><rect x="206" y="222" width="24" height="24" fill="none"/><rect x="230" y="222" width="24" height="24" fill="none"/><rect x="254" y="222" width="24" height="24" fill="none"/><rect x="278" y="222" width="24" height="24" fill="none"/><rect x="302" y="222" width="24" height="24" fill="none"/><rect x="326" y="222" width="24" height="24" fill="none"/><rect x="110" y="246" width="24" height="24" fill="none"/><rect x="134" y="246" width="24" height="24" fill="none"/><rect x="158" y="246" width="24" height="24" fill="none"/><rect x="182" y="246" width="24" height="24" fill="none"/><rect x="206" y="246" width="24" height="24" fill="none"/><rect x="230" y="246" width="24" height="24" fill="none"/><rect x="254" y="246" width="24" height="24" fill="none"/><rect x="278" y="246" width="24" height="24" fill="none"/><rect x="302" y="246" width="24" height="24" fill="none"/><rect x="326" y="246" width="24" height="24" fill="none"/></g>
  <g font-size="12" fill="currentColor" text-anchor="middle"><text x="122" y="22">0</text><text x="146" y="22">1</text><text x="170" y="22">2</text><text x="194" y="22">3</text><text x="218" y="22">4</text><text x="242" y="22">5</text><text x="266" y="22">6</text><text x="290" y="22">7</text><text x="314" y="22">8</text><text x="338" y="22">9</text><text x="100" y="46">0</text><text x="100" y="70">1</text><text x="100" y="94">2</text><text x="100" y="118">3</text><text x="100" y="142">4</text><text x="100" y="166">5</text><text x="100" y="190">6</text><text x="100" y="214">7</text><text x="100" y="238">8</text><text x="100" y="262">9</text><text x="290" y="118" font-size="10">37</text><text x="122" y="46" font-size="10">00</text><text x="146" y="46" font-size="10">01</text><text x="170" y="46" font-size="10">02</text><text x="194" y="46" font-size="10">03</text><text x="218" y="46" font-size="10">04</text><text x="242" y="46" font-size="10">05</text><text x="266" y="46" font-size="10">06</text><text x="290" y="46" font-size="10">07</text><text x="314" y="46" font-size="10">08</text><text x="338" y="46" font-size="10">09</text></g>
  <g font-size="12" fill="currentColor" text-anchor="middle"><text x="50" y="140">first</text><text x="50" y="155">digit</text><text x="230" y="12">second digit</text><text x="230" y="292">10 rows of 10: 100 codes</text></g>
</svg>
</div>

The box has 10 rows of 10, so 100 squares, and every code has its own square. The code 37 is in row 3, column 7.

There is another way to see it, and it is a lovely check. The codes 00, 01, 02, ..., 99 are just the numbers from 0
to 99, written with two digits each (a 0 in front of the small ones). How many numbers are there from 0 to 99? From
1 to 99 there are 99, and with 0 that makes **100**. ✓ Two completely different ways, the same answer.

So Max's sister needs at most 100 tries. At 2 seconds each, that is 200 seconds: **3 minutes and 20 seconds**.

### Three dials: 1000 codes

With 3 dials, there is one more step, and again every branch splits into 10:

**10 × 10 × 10 = 1000 codes**, from 000 to 999.

At 2 seconds a try, that is 2000 seconds, which is more than **33 minutes**. One extra dial did not add a little bit
of time: it made the job **ten times** as long. Every new dial multiplies the number of codes by 10:

| dials | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| codes | 10 | 100 | 1000 | 10 000 | 100 000 |

A 4-dial bike lock has 10 000 codes: at 2 seconds a try, that is over 5 and a half hours. This is why longer codes
and passwords are much safer: each extra symbol multiplies the work for anyone trying to guess.

### Codes with letters

Now let's make three-letter "words" from the letters A, B and C. They don't have to be real words, and letters **may
repeat**, so AAA and ABA are allowed.

- First letter: 3 choices.
- Second letter: 3 choices (repeats are allowed, so nothing is used up).
- Third letter: 3 choices.

**3 × 3 × 3 = 27 words.**

Let's check with a tidy list. Fix the first letter A. Then the last two letters are a two-letter word from A, B, C,
and there are 3 × 3 = 9 of those:

AAA, AAB, AAC, ABA, ABB, ABC, ACA, ACB, ACC.

That is 9 words starting with A. There are also 9 starting with B and 9 starting with C. 9 + 9 + 9 = **27**. ✓

### When repeats are not allowed

What if each letter can be used **only once**? Then a letter gets used up at every step:

- First letter: 3 choices.
- Second letter: only the 2 letters not used yet.
- Third letter: only the 1 letter left.

**3 × 2 × 1 = 6 words**: ABC, ACB, BAC, BCA, CAB, CBA. These are the line-ups of three friends again, with letters
instead of names!

So the same three letters can make **27** words with repeats, or **6** words without. Before counting a code, always
ask: *can a symbol be used again?*

- **Repeats allowed**: the number of choices stays the **same** at every step.
- **No repeats**: the number of choices goes **down by one** at every step.

## Worked examples

**1. A small lock.** A lock has 2 dials, each showing 1, 2, 3 or 4. How many codes?

4 × 4 = **16**. Tidy list by first digit: 11, 12, 13, 14; 21, 22, 23, 24; 31, ...; 41, ..., 44. Four rows of 4.

**2. Two different digits.** How many two-dial codes (digits 0 to 9) use **two different** digits?

First digit: 10 choices. Second: anything except the first, so 9. 10 × 9 = **90**.

Check another way: of all 100 codes, the ones with the **same** digit twice are 00, 11, 22, ..., 99. That is 10 of
them. 100 − 10 = **90**. ✓ (Those 10 codes are the slanting line of squares from the top-left corner of the box to
the bottom-right corner.)

**3. Letters A to E.** Two-letter words from A, B, C, D, E.

- With repeats: 5 × 5 = **25**.
- Without repeats: 5 × 4 = **20**.
- The 5 "missing" words are AA, BB, CC, DD, EE. 25 − 5 = 20. ✓

**4. Starting with B.** How many of the 27 three-letter words from A, B, C start with B? The first letter is fixed
(1 choice), the other two have 3 choices each: 1 × 3 × 3 = **9**.

## Try it

1. A lock has 2 dials, each showing 1, 2 or 3. List all the codes. How many are there?
2. A lock has 3 dials, each showing 0 or 1. How many codes? List them. (Have you seen this list before?)
3. How many two-letter "words" can you make from the 26 letters of the alphabet, repeats allowed?
4. How many three-dial codes (digits 0 to 9) have three **different** digits?
5. A secret knock is a list of 4 knocks, each **loud** or **soft**. How many secret knocks are there?
6. A lock has 3 dials showing 0 to 9. How many codes start with 7?
7. How many of the 100 two-dial codes have **at least one** 5 in them? (Hint: count the codes with **no** 5 first.)

??? note "Answers"
    1. 11, 12, 13, 21, 22, 23, 31, 32, 33. 3 × 3 = **9 codes**.
    2. 2 × 2 × 2 = **8**: 000, 001, 010, 011, 100, 101, 110, 111. It is the same as the 8 towers of orange and blue
       blocks in level 1, with 0 for orange and 1 for blue, and the 8 results of tossing a coin three times.
    3. 26 × 26. Work it out: 26 × 20 = 520 and 26 × 6 = 156, so 520 + 156 = **676**.
    4. 10 × 9 × 8. 10 × 9 = 90 and 90 × 8 = **720**.
    5. 2 × 2 × 2 × 2 = **16**.
    6. The first dial is 7 (1 way), the other two have 10 each: 1 × 10 × 10 = **100**. (They are 700 to 799.)
    7. Codes with **no** 5: each dial has 9 choices (any digit but 5), so 9 × 9 = 81. The rest have at least one 5:
       100 − 81 = **19**. Check by listing: 05, 15, 25, 35, 45, 55, 65, 75, 85, 95 (10 codes with 5 second) and 50,
       51, 52, 53, 54, 56, 57, 58, 59 (9 more with 5 first, not counting 55 again): 10 + 9 = 19. ✓

## Common mistake

**Using up digits when repeats are allowed.** On a lock, a dial does not care what the other dials show, so every
dial has all 10 digits. Writing 10 × 9 for a lock forgets codes like 33 and 77.

**Adding the dials.** "Two dials of 10, so 20 codes" adds instead of multiplying. The two dials work **together**,
one digit **and** another digit, so multiply.

## Where it leads

- Previous: ["And" multiplies, "or" adds](03-and-or.md) · Next: [Handshakes and diagonals](05-handshakes-diagonals.md)
- [Level 2 page](index.md) · [Counting topic page](../index.md)
- Question 7 is a peek at a powerful trick in level 3: count what you do **not** want, then take it away.
- The table 10, 100, 1000, 10 000 is how our place-value number system works: [Numbers](../../numbers/index.md).
- Locks, codes and secret messages grow up into cryptography, which you can explore at
  [cryptography.akadian.ca](https://cryptography.akadian.ca/).
