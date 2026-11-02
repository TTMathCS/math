---
title: "Remainders as a new kind of number"
---

# Remainders as a new kind of number

*Number theory · level 5, lesson 1 of 6*

## A question to start

Today is Monday. What day of the week will it be in 100 days?

You could count 100 days on a calendar, but there is a much faster way. The days of the week come round every 7
days, so 7 days from Monday is Monday again, and so is 14 days, 21 days, and every multiple of 7. Take away as many
whole weeks as you can from 100 and only the **leftover** matters.

$100 = 14 \times 7 + 2$. So 100 days is 14 whole weeks and 2 extra days. Monday plus 2 days is **Wednesday**.

That leftover, the 2, is a **remainder**. In this level, remainders stop being "the bit left over that we throw away"
and become numbers in their own right, with their own arithmetic. And here is a puzzle to keep in mind: what day was
it 100 days **ago**? (The answer is at the end of the worked examples.)

## The idea

### Division with remainder

When you share 17 sweets among 5 friends, each friend gets 3 and 2 are left over. In symbols:

$$17 = 3 \times 5 + 2.$$

The words:

- 17 is the **dividend** (the number being divided),
- 5 is the **divisor** (what we divide by),
- 3 is the **quotient** (how many whole times 5 fits into 17),
- 2 is the **remainder** (what is left over).

In general, for a whole number $a$ and a positive whole number $b$, we look for whole numbers $q$ (the quotient) and
$r$ (the remainder) with

$$a = qb + r, \qquad 0 \le r < b.$$

The second part, $0 \le r < b$, is the important rule: **the remainder is never negative and always smaller than
the divisor.**

### A picture: jumping along the number line

Start at 0 and jump forward in steps of 5. You land on 5, 10, 15, 20, ... (the multiples of 5). The number 17 lies
between two landing spots, 15 and 20. The last landing spot that does not pass 17 is $15 = 3 \times 5$. The short
piece from 15 to 17 is the remainder.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 110" role="img" aria-label="A number line from 0 to 20 with three jumps of 5 from 0 to 15, then a short orange piece of length 2 from 15 to 17">
  <line x1="20" y1="70" x2="420" y2="70" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="20" y1="64" x2="20" y2="76"/><line x1="120" y1="64" x2="120" y2="76"/>
    <line x1="220" y1="64" x2="220" y2="76"/><line x1="320" y1="64" x2="320" y2="76"/>
    <line x1="420" y1="64" x2="420" y2="76"/><line x1="360" y1="64" x2="360" y2="76"/>
  </g>
  <g fill="none" stroke="#9cc9ea" stroke-width="3">
    <path d="M 20 66 Q 70 20 120 66"/><path d="M 120 66 Q 170 20 220 66"/><path d="M 220 66 Q 270 20 320 66"/>
  </g>
  <line x1="320" y1="70" x2="360" y2="70" stroke="#eea66f" stroke-width="7"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="20" y="94">0</text><text x="120" y="94">5</text><text x="220" y="94">10</text>
    <text x="320" y="94">15</text><text x="360" y="94">17</text><text x="420" y="94">20</text>
    <text x="70" y="30">jump 1</text><text x="170" y="30">jump 2</text><text x="270" y="30">jump 3</text>
    <text x="340" y="56">r = 2</text>
  </g>
</svg>
</div>

This picture explains **why** there is always exactly one quotient and one remainder. The multiples of $b$ cut the
number line into blocks of length $b$: from 0 to $b$, from $b$ to $2b$, and so on. Every whole number lands in
**exactly one** block. Its block starts at some multiple $qb$, and the distance from that start is the remainder $r$.
Since the block is $b$ long and we count from its start, $r$ can be 0 but never reaches $b$.

Why must the remainder be smaller than $b$? If you had 7 sweets left over with 5 friends, you could give everyone one
more. A "remainder" of 7 just means you stopped sharing too early.

### A short name: mod

Mathematicians write **$a \bmod b$** for the remainder when $a$ is divided by $b$. So $17 \bmod 5 = 2$ and
$100 \bmod 7 = 2$. "Mod" is short for **modulo**, a Latin word meaning roughly "by the measure of". In this level we
will mostly use it as "the remainder on dividing by".

### Remainders of negative numbers

What is the remainder when $-17$ is divided by 5? Many people guess $-2$, because $-17 = -3 \times 5 - 2$. But the
rule says the remainder must be **at least 0**. So we need one more jump to the left: the multiple of 5 just below
$-17$ is $-20$, and

$$-17 = -4 \times 5 + 3.$$

The remainder is **3**. On the number line, jump left from 0 in steps of 5 until you pass $-17$ (you reach $-20$),
then step forward to $-17$. The forward step is 3.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 110" role="img" aria-label="A number line from minus 20 to 5: four jumps of 5 to the left from 0 reach minus 20, then a forward orange piece of length 3 reaches minus 17">
  <line x1="20" y1="70" x2="420" y2="70" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="20" y1="64" x2="20" y2="76"/><line x1="100" y1="64" x2="100" y2="76"/>
    <line x1="180" y1="64" x2="180" y2="76"/><line x1="260" y1="64" x2="260" y2="76"/>
    <line x1="340" y1="64" x2="340" y2="76"/><line x1="420" y1="64" x2="420" y2="76"/>
    <line x1="68" y1="64" x2="68" y2="76"/>
  </g>
  <g fill="none" stroke="#9cc9ea" stroke-width="3">
    <path d="M 340 66 Q 300 24 260 66"/><path d="M 260 66 Q 220 24 180 66"/>
    <path d="M 180 66 Q 140 24 100 66"/><path d="M 100 66 Q 60 24 20 66"/>
  </g>
  <line x1="20" y1="70" x2="68" y2="70" stroke="#eea66f" stroke-width="7"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="20" y="94">−20</text><text x="68" y="94">−17</text><text x="100" y="94">−15</text>
    <text x="180" y="94">−10</text><text x="260" y="94">−5</text><text x="340" y="94">0</text><text x="420" y="94">5</text>
    <text x="44" y="56">r = 3</text>
  </g>
</svg>
</div>

A quick way to get it: work out the remainder as if the number were positive (17 leaves 2), then take that from the
divisor ($5 - 2 = 3$). This works whenever the positive remainder is not 0. (If it is 0, the remainder of the
negative number is also 0: $-15 = -3 \times 5 + 0$.)

Why bother with this rule for negatives? Because it keeps the pattern going. Look at the remainders mod 5 as you
count up through zero:

| Number | −7 | −6 | −5 | −4 | −3 | −2 | −1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Remainder mod 5 | 3 | 4 | 0 | 1 | 2 | 3 | 4 | 0 | 1 | 2 | 3 | 4 | 0 | 1 |

The remainders go 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, ... forever in both directions, with no hiccup at zero. That is
exactly what a calendar does: the day before Monday is always Sunday, whether you count forwards or backwards.

(A warning for programmers: computer languages do not all agree. In Python, `-17 % 5` gives 3, as here. In C and
Java, the same expression gives $-2$. Mathematicians use the rule $0 \le r < b$.)

### Remainders sort numbers into families

Here is the big change of view. Dividing by 3, every whole number has remainder 0, 1 or 2. So every whole number
belongs to **exactly one** of three families:

- remainder 0: ..., −6, −3, 0, 3, 6, 9, 12, ... (the numbers $3k$)
- remainder 1: ..., −5, −2, 1, 4, 7, 10, 13, ... (the numbers $3k + 1$)
- remainder 2: ..., −4, −1, 2, 5, 8, 11, 14, ... (the numbers $3k + 2$)

(Here $k$ stands for any whole number, positive, negative or zero.) These families are called **remainder classes**
or **residue classes** ("residue" is another word for remainder). You already know the families for dividing by 2:
they are the **even** numbers ($2k$) and the **odd** numbers ($2k + 1$).

Once you think of each family as a single thing, you can ask: what happens if I add a number from family 1 to a
number from family 2? Try it: $4 + 5 = 9$, $7 + 11 = 18$, $1 + (-1) = 0$. Always family 0. This is like "odd plus odd
is even", but for 3. In the next lessons these families become the numbers on a **clock**, and you will add and
multiply them. That is the "new kind of number" in this lesson's title.

### A proof tool: check every family

Families give a powerful way to prove things. To show something is true for **every** whole number, it is enough to
check one example from each family, as long as you check it in a general way, with $k$.

For example: **can a square number leave remainder 2 when divided by 3?** Every number is $3k$, $3k + 1$ or
$3k + 2$. Square each:

- $(3k)^2 = 9k^2 = 3(3k^2)$, remainder 0.
- $(3k + 1)^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$, remainder 1.
- $(3k + 2)^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$, remainder 1.

So a square always leaves remainder 0 or 1 when divided by 3, **never 2**. This covers every whole number at once,
because every whole number is in one of the three families. So, for example, 2, 5, 8, 11, 14, 17, ... can never be
square numbers, and you know it without checking a single square root.

## Worked examples

**1. The days of the week.** Today is Monday. What day will it be in 1000 days?

- Divide by 7: $1000 = 142 \times 7 + 6$ (since $142 \times 7 = 994$).
- 1000 days is 142 whole weeks and 6 extra days.
- Six days after Monday is **Sunday**.

**2. Negative remainders.** Find the remainder when $-23$ is divided by 7.

- The multiple of 7 just at or below $-23$ is $-28 = -4 \times 7$.
- $-23 = -4 \times 7 + 5$, so the remainder is **5**.
- Shortcut check: 23 leaves 2, and $7 - 2 = 5$. ✓

**3. Your birthday next year.** Your birthday is on a Friday this year. What day is it next year, if no 29 February
comes in between?

- A year of 365 days: $365 = 52 \times 7 + 1$.
- So the date moves on by **one** weekday: Saturday.
- If a 29 February does come in between (366 days), then $366 = 52 \times 7 + 2$, and it moves on by two days, to
  Sunday. This is why your birthday creeps forward through the week year after year, jumping two places after a leap
  day.

**4. Families with algebra.** Show that the product of two consecutive whole numbers is always even.

- Two consecutive numbers are $n$ and $n + 1$. Check the two families mod 2.
- If $n$ is even, $n = 2k$, then $n(n + 1) = 2k(2k + 1)$, a multiple of 2.
- If $n$ is odd, $n = 2k + 1$, then $n + 1 = 2k + 2 = 2(k + 1)$, so $n(n + 1) = (2k + 1) \times 2(k + 1)$, again a
  multiple of 2.
- Every number is even or odd, so the product is always even.

**5. The puzzle from the start.** What day was it 100 days ago, if today is Monday?

- We need the remainder of $-100$ mod 7. Since $100 = 14 \times 7 + 2$, the shortcut gives $7 - 2 = 5$.
- Check: $-100 = -15 \times 7 + 5$ (since $-15 \times 7 = -105$). ✓
- Going back 100 days is the same as going forward 5 days: Monday plus 5 days is **Saturday**.
- Another way to see it: going back 100 days is going back 14 weeks and then 2 more days, and two days before Monday
  is Saturday. Going back 2 is the same as going forward 5, because 2 + 5 = 7, a whole week.

## Try it

1. Write each as $a = qb + r$ with $0 \le r < b$: (a) 47 divided by 6; (b) 100 divided by 9; (c) 6 divided by 11.
2. Find the remainder when $-8$ is divided by 3, and when $-30$ is divided by 6.
3. It is 3 p.m. What time will it be in 50 hours?
4. Today is Thursday. What day of the week will it be in 365 days? In 1,000,000 days?
5. A number leaves remainder 4 when divided by 7. What remainder does it leave when you add 10 to it? When you double
   it?
6. Show that a square number always leaves remainder 0 or 1 when divided by 4. (Use the families $2k$ and $2k + 1$.)
7. Use question 6 to explain why 1,000,002 is not a perfect square.
8. Harder: show that $n^3 - n$ is always a multiple of 3. (Factor it as $(n - 1)n(n + 1)$ first, or check the three
   families.)

??? note "Answers"
    1. (a) $47 = 7 \times 6 + 5$. (b) $100 = 11 \times 9 + 1$. (c) $6 = 0 \times 11 + 6$: when the dividend is
       smaller than the divisor, the quotient is 0 and the remainder is the number itself.
    2. $-8 = -3 \times 3 + 1$, remainder **1** (shortcut: 8 leaves 2, and $3 - 2 = 1$). $-30 = -5 \times 6 + 0$,
       remainder **0**, because 30 is a multiple of 6.
    3. $50 = 2 \times 24 + 2$, so 50 hours is 2 whole days and 2 hours: **5 p.m.** (two days later). On a 12-hour
       clock: $50 = 4 \times 12 + 2$, so the hands also show 5, as they should.
    4. $365 = 52 \times 7 + 1$, so **Friday**. For a million days: $1000000 = 142857 \times 7 + 1$, so also
       **Friday**. (A neat fact: $142857 \times 7 = 999999$.)
    5. The number is $7k + 4$. Adding 10 gives $7k + 14 = 7(k + 2) + 0$: remainder **0**. Doubling gives
       $14k + 8 = 7(2k + 1) + 1$: remainder **1**. Notice you can just work with the remainder: $4 + 10 = 14$ leaves
       0, and $2 \times 4 = 8$ leaves 1. Lesson 3 explains why this always works.
    6. If $n = 2k$, then $n^2 = 4k^2$, remainder 0. If $n = 2k + 1$, then $n^2 = 4k^2 + 4k + 1 = 4(k^2 + k) + 1$,
       remainder 1. Every number is even or odd, so every square leaves remainder 0 or 1 when divided by 4.
    7. $1000002 = 1000000 + 2$, and $1000000 = 250000 \times 4$, so 1,000,002 leaves remainder **2** when divided by
       4. By question 6 no square does that, so 1,000,002 is not a square.
    8. $n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)$, three consecutive whole numbers. Among any three consecutive numbers,
       one is in each family mod 3, so one of them is a multiple of 3, and then so is the product. (Checking families
       directly: if $n = 3k$, the factor $n$ is a multiple of 3; if $n = 3k + 1$, the factor $n - 1 = 3k$ is; if
       $n = 3k + 2$, the factor $n + 1 = 3k + 3$ is.)

## Common mistake

**Letting the remainder be negative or too big.** $-17 = -3 \times 5 - 2$ is true arithmetic, but $-2$ is not the
remainder: remainders are never negative. And $17 = 2 \times 5 + 7$ is true too, but 7 is not the remainder: it is not
smaller than 5. Always check $0 \le r < b$.

**Forgetting that the leftover days count from today.** "In 7 days" is the same weekday; "in 1 day" is tomorrow. If
you number the days so that today is 0, the remainder tells you exactly how many days to step on. Starting the count
at 1 instead of 0 is the classic off-by-one slip.

## Where it leads

- Back: [Level 4: GCD, LCM and Euclid](../level-4/index.md), where the remainder drives Euclid's algorithm.
  Next: [Clocks of any size](02-clocks-any-size.md), where the families become the numbers on a clock.
- [Level 5 page](index.md) · [Number theory topic page](../index.md)
- Repeating cycles such as the days of the week are [patterns](../../patterns/index.md) that go round and round.
- Checking every family is a kind of proof by cases: more in [Logic](../../logic/index.md).
