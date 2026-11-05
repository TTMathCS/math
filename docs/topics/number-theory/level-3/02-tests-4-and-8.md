---
title: "Divisibility by 4 and 8"
---

# Divisibility by 4 and 8

*Number theory · level 3, lesson 2 of 6*

## A question to start

Is the number 1,000,000,036 divisible by 4? It has ten digits. Dividing it by 4 the long way would take a while.

Here is a faster way. Look only at the last two digits, **36**. Since 36 = 4 × 9, the whole ten-digit number is
divisible by 4. Done, in one second.

But wait. In the last lesson, only the **last** digit mattered for 2. Why do we need **two** digits for 4? And how
many digits would we need for 8? By the end of this lesson you will be able to answer that for yourself, and you will
also know exactly which years are leap years.

## The idea

### Tens do not split into fours

In [lesson 1](01-tests-2-5-10.md) we split a number into tens and loose ones. That worked for 2 and 5, because a ten
splits perfectly into 2s and into 5s.

Try it with 4. Share a ten among 4 friends: each gets 2, and **2 are left over**. So 10 = 4 + 4 + 2. A ten does
**not** split into fours. That means the tens matter, and the last digit alone cannot tell you the answer.

You can see the problem with two numbers that end in the same digit:

- 12 = 4 × 3 is divisible by 4.
- 22 = 4 × 5 + 2 is not.

Both end in 2. The difference is in the tens.

### But hundreds do split into fours

Now try a hundred. Share 100 squares among 4 friends.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 190" role="img" aria-label="A ten by ten grid of 100 squares split into four five by five corners, one for each of four friends, 25 squares each">
  <rect x="20" y="20" width="70" height="70" fill="#eea66f"/>
  <rect x="90" y="20" width="70" height="70" fill="#9cc9ea"/>
  <rect x="20" y="90" width="70" height="70" fill="#7ccf9a"/>
  <rect x="90" y="90" width="70" height="70" fill="currentColor" fill-opacity="0.18"/>
  <g stroke="currentColor" stroke-width="0.6" stroke-opacity="0.6">
    <line x1="34" y1="20" x2="34" y2="160"/><line x1="48" y1="20" x2="48" y2="160"/>
    <line x1="62" y1="20" x2="62" y2="160"/><line x1="76" y1="20" x2="76" y2="160"/>
    <line x1="104" y1="20" x2="104" y2="160"/><line x1="118" y1="20" x2="118" y2="160"/>
    <line x1="132" y1="20" x2="132" y2="160"/><line x1="146" y1="20" x2="146" y2="160"/>
    <line x1="20" y1="34" x2="160" y2="34"/><line x1="20" y1="48" x2="160" y2="48"/>
    <line x1="20" y1="62" x2="160" y2="62"/><line x1="20" y1="76" x2="160" y2="76"/>
    <line x1="20" y1="104" x2="160" y2="104"/><line x1="20" y1="118" x2="160" y2="118"/>
    <line x1="20" y1="132" x2="160" y2="132"/><line x1="20" y1="146" x2="160" y2="146"/>
  </g>
  <rect x="20" y="20" width="140" height="140" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="20" x2="90" y2="160" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="90" x2="160" y2="90" stroke="currentColor" stroke-width="2"/>
  <g font-size="13" fill="currentColor">
    <text x="180" y="60">100 squares</text>
    <text x="180" y="80">4 friends</text>
    <text x="180" y="100">25 each</text>
    <text x="180" y="120">none left over</text>
  </g>
  <text x="90" y="180" font-size="12" fill="currentColor" text-anchor="middle">100 = 4 × 25</text>
</svg>
</div>

Each friend gets a 5-by-5 corner: 25 squares, and nothing is left. So **100 = 4 × 25**: a hundred always splits into
fours.

And a thousand is 10 hundreds, ten thousand is 100 hundreds, and so on. So any number of hundreds splits into fours.

### The test for 4

Any whole number is some number of **hundreds** plus the number made by its **last two digits**. For example:

- 7,316 is 73 hundreds and 16.
- 1,000,000,036 is 10,000,000 hundreds and 36.

The hundreds always split into fours. So only the last two digits can leave anything over.

**A number is divisible by 4 when the number made by its last two digits is divisible by 4.**

And just as before, you get the **remainder** for free: the remainder when you divide the whole number by 4 is the
remainder when you divide its last two digits by 4.

### Checking the last two digits quickly

You still have to decide whether a two-digit number divides by 4. Two ways:

**Halve it twice.** Dividing by 4 is the same as halving and halving again. 36 → 18 → 9: whole numbers all the way,
so 36 is divisible by 4. But 46 → 23 → 11½: the second halving fails, so 46 is not.

**Look at the tens digit.** Twenty is 4 × 5, so 20, 40, 60 and 80 are all divisible by 4. That gives a neat rule:

- If the **tens digit is even**, the number is a multiple of 20 plus its last digit. It divides by 4 when the last
  digit is **0, 4 or 8**. (Examples: 24, 48, 60, 84.)
- If the **tens digit is odd**, the number is a multiple of 20, plus 10, plus its last digit. The 10 leaves 2 over, so
  the last digit must make up 2 more to reach a four: it must be **2 or 6**. (Examples: 12, 36, 52, 76, 96.)

### The test for 8

Now try 8. Does a hundred split into eights? 8 × 12 = 96, so 100 = 8 × 12 + 4. No: **4 left over**. So for 8 the
hundreds matter, and two digits are not enough.

What about a thousand? 8 × 125 = 1,000. Yes! **1,000 = 8 × 125**, so a thousand splits exactly into eights, and so does
any number of thousands.

**A number is divisible by 8 when the number made by its last three digits is divisible by 8.**

To check three digits, halve three times. 312 → 156 → 78 → 39: all whole, so 312 is divisible by 8. Or just divide:
312 ÷ 8 = 39.

### The pattern

Put the tests side by side and a pattern jumps out.

| Divide by | Look at | Because |
| --- | --- | --- |
| 2 | the last 1 digit | 10 = 2 × 5 |
| 4 | the last 2 digits | 100 = 4 × 25 |
| 8 | the last 3 digits | 1,000 = 8 × 125 |
| 16 | the last 4 digits | 10,000 = 16 × 625 |

Each time the number doubles, you need one more digit, because each extra 0 on the end of 10, 100, 1,000, ... gives
one more 2 to share out. The same idea gives tests for 25 (last two digits, since 100 = 25 × 4) and for 125 (last
three digits, since 1,000 = 125 × 8). That is why money in quarters works so neatly: a whole number of dollars is
always a whole number of quarters.

### Leap years

Our calendar uses the test for 4. The Earth takes about 365 and a quarter days to go round the Sun. Four quarters make
a whole day, so every fourth year gets an extra day, 29 February. Those are **leap years**, and they are the years
divisible by 4.

That quarter is actually a little too big (the true year is about 365.2422 days), so the calendar skips three leap
days every 400 years. The full rule is:

- A year divisible by 4 is a leap year,
- **except** years ending in 00, which are leap years only if they are divisible by 400.

So 2024 and 2028 are leap years. 1900 was not (it ends in 00 and 1900 is not divisible by 400). 2000 was (2000 =
400 × 5). 2100 will not be.

A year on Mars is much longer: about 687 Earth days, which is about 669 Mars days (called **sols**). Any calendar for
Mars would need leap rules of its own.

<figure class="play" data-play="hundred" data-mode="multiples"><span class="ai-tag">AI-created</span><figcaption><b>Multiples of 4 and 8.</b> Look at the last two digits of each shaded number.</figcaption></figure>

## Worked examples

**1. Is 5,716 divisible by 4?**

Last two digits: 16 = 4 × 4. **Yes.** (5,716 = 4 × 1,429.)

**2. Find the remainder when 9,346 is divided by 4.**

Last two digits: 46. The tens digit 4 is even, so look at the last digit, 6: 6 = 4 + 2. Or directly: 46 = 4 × 11 + 2.
The remainder is **2**. Check: 4 × 2,336 = 9,344, and 9,346 − 9,344 = 2. ✓

**3. Is 15,312 divisible by 8? Is 7,124?**

- 15,312: last three digits 312 = 8 × 39. **Yes.** (15,312 = 8 × 1,914.)
- 7,124: last three digits 124. 8 × 15 = 120, so 124 = 8 × 15 + 4. **No**, remainder 4. But 7,124 **is** divisible by 4,
  since 24 = 4 × 6. Being divisible by 4 does not make a number divisible by 8.

**4. A missing digit.** Which digits can fill the gap in 3,5_6 to make it divisible by 8?

Only the last three digits matter: 5_6. Try the ten choices 506, 516, ..., 596, halving three times or dividing by 8.
Only **536** (= 8 × 67) and **576** (= 8 × 72) work. So the digit is **3** or **7**.

A smarter way: the numbers from 506 to 596 go up in steps of 10, and the multiples of 8 come every 8. The first one
ending in 6 is 536, and the next must be 40 later (40 is the smallest multiple of 8 that ends in 0): 576. The one
after, 616, is too big.

**5. Leap years.** Which of 1996, 2000, 2026, 2100 are leap years?

- 1996: 96 = 4 × 24, and it does not end in 00. **Leap year.**
- 2000: ends in 00, and 2000 = 400 × 5. **Leap year.**
- 2026: 26 = 4 × 6 + 2. **Not** a leap year.
- 2100: ends in 00, and 2100 ÷ 400 = 5 remainder 100. **Not** a leap year.

## Try it

1. Which of these are divisible by 4? 348, 1,000, 2,350, 81,116, 7,006.
2. Which of the numbers in question 1 are divisible by 8?
3. Find the remainder when 123,457 is divided by 4.
4. Use the tens-digit rule to list all the two-digit multiples of 4 that end in 6.
5. Fill the gap so that 2,4_8 is divisible by 8. Find every answer.
6. Is 98,765,432 divisible by 8? Is it divisible by 16?
7. How many leap years are there from 2001 to 2100?
8. Explain why a number divisible by 8 must be divisible by 4. Then explain why a number divisible by 4 need not be
   divisible by 8, with an example.

??? note "Answers"
    1. Look at the last two digits. 48 = 4 × 12: yes. 00: yes. 50 = 4 × 12 + 2: no. 16: yes. 06: no. So **348,
       1,000 and 81,116**.
    2. Look at the last three digits. 348 = 8 × 43 + 4: no. 1,000 = 8 × 125: **yes**. 116 = 8 × 14 + 4: no. (2,350
       and 7,006 are not even divisible by 4, so they cannot be divisible by 8.) Only **1,000**.
    3. Last two digits 57 = 4 × 14 + 1. The remainder is **1**.
    4. Ending in 6 means the tens digit must be odd: **16, 36, 56, 76, 96**.
    5. Last three digits 4_8. The multiples of 8 from 400 to 499 are 400, 408, 416, ... The ones ending in 8 are
       408, 448 and 488 (they come every 40). So the digit is **0, 4 or 8**: 2,408, 2,448, 2,488.
    6. Last three digits 432 = 8 × 54, so **yes** for 8. For 16, look at the last four digits: 5,432 = 16 × 339 + 8,
       so **no**. (Halving 5,432 four times: 2,716, 1,358, 679, then 339½.)
    7. The years divisible by 4 are 2004, 2008, ..., 2100: that is 2100 ÷ 4 − 2000 ÷ 4 = 525 − 500 = 25 years. But
       2100 ends in 00 and is not divisible by 400, so it is not a leap year. That leaves **24**.
    8. If a number is a whole number of eights, each eight is two fours, so it is a whole number of fours. But 12 is
       divisible by 4 and not by 8 (12 = 8 + 4). Fours can be paired into eights only when there is an even number
       of them.

## Common mistake

**Looking only at the last digit for 4.** "It ends in 4, so it divides by 4" is wrong: 14 ends in 4, but 14 = 4 × 3 + 2.
For 4 you need the last **two** digits, and for 8 the last **three**.

**Thinking "divisible by 4" means "divisible by 8".** It is the other way round. Every multiple of 8 is a multiple of 4,
but 4, 12, 20, 28, ... are multiples of 4 that are not multiples of 8.

## Where it leads

- Back: [Divisibility by 2, 5 and 10](01-tests-2-5-10.md) · Next: [Divisibility by 3 and 9](03-tests-3-and-9.md),
  where every digit matters.
- [Level 3 page](index.md) · [Number theory topic page](../index.md)
- The pattern 2, 4, 8, 16 is doubling: more about it in [Patterns](../../patterns/index.md).
- Calendars, days and years are part of [Measurement](../../measurement/index.md).
- In [level 5](../level-5/index.md) you will see these tests again with clock arithmetic, where "100 leaves nothing
  over when shared into fours" becomes a short calculation.
