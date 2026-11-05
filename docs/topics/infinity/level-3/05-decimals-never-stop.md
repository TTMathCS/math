---
title: "Decimals that never stop"
---

# Decimals that never stop

*Infinity and strange math · level 3, lesson 5 of 6*

## A question to start

Share 1 pizza between 4 people: each gets $\frac14$, which as a decimal is 0.25. Share it between 8 people: $\frac18$,
which is 0.125. Those decimals stop.

Now share 1 pizza between 3 people. Type $1 \div 3$ into a calculator. It shows 0.3333333, as many 3s as the screen can
hold. Is the screen just too small, and the 3s stop somewhere off the edge? Or do they really go on **forever**? And if
they go on forever, how can anybody be sure, when nobody can check them all?

## The idea

### Long division, one step at a time

To turn a fraction into a decimal, you divide the top by the bottom. Let us do $1 \div 4$ by long division, the slow
way, so we can watch what happens.

- 4 does not go into 1, so write 0 and a decimal point. Make the 1 into 10 tenths.
- 4 goes into 10 twice ($2 \times 4 = 8$), remainder 2. Write the digit **2**.
- Make the remainder 2 into 20 hundredths. 4 goes into 20 five times, remainder **0**. Write the digit **5**.
- The remainder is 0, so there is nothing left to share. Stop. $\frac14 = 0.25$.

The key thing to watch is the **remainder**, the amount left over after each step. When it becomes 0, the division
stops.

### One divided by three

Now $1 \div 3$.

- Make the 1 into 10 tenths. 3 goes into 10 three times ($3 \times 3 = 9$), remainder **1**. Digit: **3**.
- Make the remainder 1 into 10. 3 goes into 10 three times, remainder **1**. Digit: **3**.
- Make the remainder 1 into 10. 3 goes into 10 three times, remainder **1**. Digit: **3**.

Do you see? The remainder is 1 again, which is exactly where we started. So the next step will be exactly the same as
this one: 3 goes into 10 three times, remainder 1. And the step after that will be the same again. Nothing can ever
change. The remainder is never 0, so the division never stops, and every digit is a 3.

That is how we can be **sure** the 3s go on forever, without checking them all: we caught the division in a loop.
Once a remainder repeats, everything after it repeats too.

We write the answer as $0.333\ldots$ where the three dots mean "and so on forever in the same pattern". Another way is
to put a bar over the digits that repeat: $0.\overline{3}$. Both mean the same thing.

### One divided by seven: a longer loop

Now $1 \div 7$. Keep track of each remainder.

| Step | Divide | Digit | Remainder |
| --- | --- | --- | --- |
| 1 | $10 \div 7$ | 1 | 3 |
| 2 | $30 \div 7$ | 4 | 2 |
| 3 | $20 \div 7$ | 2 | 6 |
| 4 | $60 \div 7$ | 8 | 4 |
| 5 | $40 \div 7$ | 5 | 5 |
| 6 | $50 \div 7$ | 7 | 1 |
| 7 | $10 \div 7$ | 1 | 3 |

At step 6 the remainder is 1 again, the same as at the very start. So step 7 is the same as step 1, step 8 is the same
as step 2, and so on. The six digits 1, 4, 2, 8, 5, 7 come round again and again, like a merry-go-round:

$$\frac17 = 0.142857\,142857\,142857\ldots = 0.\overline{142857}$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 240" role="img" aria-label="The remainders when dividing 1 by 7 go round a circle 1, 3, 2, 6, 4, 5 and back to 1; each step writes one digit of the decimal, 1, 4, 2, 8, 5, 7, so the digits repeat forever">
  <line x1="169.1" y1="51.0" x2="200.2" y2="69.0" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="200.2,69.0 194.2,68.6 196.9,64.0" fill="currentColor"/>
  <circle cx="192.6" cy="46.1" r="10" fill="#eea66f"/>
  <text x="192.641" y="50.1436" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <line x1="219.3" y1="102.0" x2="219.3" y2="138.0" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="219.3,138.0 216.7,132.6 221.9,132.6" fill="currentColor"/>
  <circle cx="235.3" cy="120.0" r="10" fill="#eea66f"/>
  <text x="235.282" y="124" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <line x1="200.2" y1="171.0" x2="169.1" y2="189.0" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="169.1,189.0 172.4,184.0 175.0,188.6" fill="currentColor"/>
  <circle cx="192.6" cy="193.9" r="10" fill="#eea66f"/>
  <text x="192.641" y="197.856" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <line x1="130.9" y1="189.0" x2="99.8" y2="171.0" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="99.8,171.0 105.8,171.4 103.1,176.0" fill="currentColor"/>
  <circle cx="107.4" cy="193.9" r="10" fill="#eea66f"/>
  <text x="107.359" y="197.856" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <line x1="80.7" y1="138.0" x2="80.7" y2="102.0" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="80.7,102.0 83.3,107.4 78.1,107.4" fill="currentColor"/>
  <circle cx="64.7" cy="120.0" r="10" fill="#eea66f"/>
  <text x="64.718" y="124" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <line x1="99.8" y1="69.0" x2="130.9" y2="51.0" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="130.9,51.0 127.6,56.0 125.0,51.4" fill="currentColor"/>
  <circle cx="107.4" cy="46.1" r="10" fill="#eea66f"/>
  <text x="107.359" y="50.1436" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="150.0" cy="40.0" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.3"/>
  <text x="150" y="44" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="219.3" cy="80.0" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.3"/>
  <text x="219.282" y="84" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="219.3" cy="160.0" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.3"/>
  <text x="219.282" y="164" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="150.0" cy="200.0" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.3"/>
  <text x="150" y="204" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="80.7" cy="160.0" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.3"/>
  <text x="80.718" y="164" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="80.7" cy="80.0" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.3"/>
  <text x="80.718" y="84" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="300" y="90" font-size="12" text-anchor="start" fill="currentColor">blue: the remainder</text>
  <text x="300" y="110" font-size="12" text-anchor="start" fill="currentColor">orange: the digit it gives</text>
  <text x="300" y="140" font-size="12" text-anchor="start" fill="currentColor">1/7 = 0.142857 142857 ...</text>
</svg>
</div>

### Why every fraction must stop or repeat

Here is the clever part. When you divide by 7, the remainder is always less than 7. It can only be 0, 1, 2, 3, 4, 5
or 6. That is just 7 possibilities.

- If the remainder ever becomes 0, the division stops. The decimal **ends**, like 0.25.
- If it never becomes 0, then it must be one of 1, 2, 3, 4, 5, 6 every time. There are only 6 of those. So within 7
  steps, some remainder **must** come up a second time (you cannot take 7 steps using only 6 different remainders
  without repeating one). And once a remainder repeats, the whole thing goes round in a loop forever.

The same reasoning works for dividing by any number. Dividing by 13, the remainders can only be 0 to 12, so either
the decimal stops, or it repeats in a loop of at most 12 digits. So:

> Every fraction, written as a decimal, either **stops** or **repeats forever**.

It can never go on forever in a pattern that never repeats. (Decimals like that do exist, such as the digits of
$\pi$, but they are not fractions. That is a story for [level 6 of Numbers](../../numbers/level-6/02-rational-irrational.md).)

### Which fractions stop?

Our number system counts in tens, and $10 = 2 \times 5$. A fraction in lowest terms gives a decimal that stops exactly
when its denominator is made only of 2s and 5s multiplied together: 2, 4, 5, 8, 10, 16, 20, 25, 40, ... For example,
$\frac18 = 0.125$ and $\frac3{20} = 0.15$ stop. But 3, 6, 7, 9, 11, 12, 13, ... contain some other factor, and their
fractions repeat forever.

Why? A decimal that stops is a number of tenths, or hundredths, or thousandths. Those have denominators 10, 100, 1000,
which are made only of 2s and 5s. Thirds can never be turned into an exact number of tenths, hundredths or
thousandths, because 10, 100 and 1000 do not divide by 3.

### Sometimes the loop starts later

$\frac16$: 10 divided by 6 is 1, remainder 4. Then 40 divided by 6 is 6, remainder 4. Then 40 again, forever. So
$\frac16 = 0.1666\ldots = 0.1\overline{6}$. The first digit 1 is not part of the loop; the loop starts at the second
digit. That still counts as repeating.

### A Mars example

A day on Mars is called a **sol**. It is a little longer than an Earth day: about 24 hours and 40 minutes. How many
hours is 40 minutes? It is $\frac{40}{60} = \frac23$ of an hour. And $2 \div 3 = 0.666\ldots$ So a sol is about
24.666... hours. The 6s never stop, because thirds never stop. (A sol is really 24 hours 39 minutes and 35 seconds,
so "40 minutes" is already rounded; the 6s are the decimal for the rounded value.)

<figure class="play" data-play="sqrt"><span class="ai-tag">AI-created</span><figcaption><b>Digits that never stop.</b> √2's decimals go on for ever without repeating.</figcaption></figure>

## Worked examples

**1. $\frac23$ as a decimal.** 20 divided by 3 is 6, remainder 2. Then 20 again: 6, remainder 2, forever. So
$\frac23 = 0.666\ldots = 0.\overline{6}$.

**2. $\frac5{6}$ as a decimal.**

- 50 divided by 6 is 8 ($6 \times 8 = 48$), remainder 2. Digit 8.
- 20 divided by 6 is 3 ($6 \times 3 = 18$), remainder 2. Digit 3.
- The remainder is 2 again, so it repeats: $\frac56 = 0.8333\ldots = 0.8\overline{3}$.

**3. $\frac1{11}$ as a decimal.**

- 10 divided by 11 is 0, remainder 10. Digit 0.
- 100 divided by 11 is 9 ($11 \times 9 = 99$), remainder 1. Digit 9.
- The remainder is 1, which is where we started. So $\frac1{11} = 0.090909\ldots = 0.\overline{09}$.

**4. Using the merry-go-round for $\frac37$.** Dividing 3 by 7 starts with remainder 3. In the $\frac17$ table,
remainder 3 is where step 2 begins. So $\frac37$ starts the same loop from there: digits 4, 2, 8, 5, 7, 1, then round
again. $\frac37 = 0.428571\,428571\ldots$ Every seventh (except 0) uses the same six digits, starting at a different
place.

## Try it

1. Write $\frac19$ and $\frac29$ as decimals. Can you guess $\frac79$?
2. Find $\frac4{11}$ as a decimal.
3. Find $\frac16$ and $\frac1{12}$ as decimals. Where does each loop start?
4. Which of these decimals stop and which repeat forever: $\frac14$, $\frac1{12}$, $\frac3{20}$, $\frac1{15}$,
   $\frac7{8}$? Explain using their denominators.
5. Use the merry-go-round to write $\frac27$ as a decimal, without doing the long division again.
6. When you divide by 13, what is the longest the repeating loop could possibly be? Why?
7. (Harder) A calculator shows $1 \div 17 = 0.0588235294$. Can you tell from the screen whether the digits repeat? How
   long could the loop be at most?

??? note "Answers"
    1. $\frac19$: 10 divided by 9 is 1, remainder 1, forever: $0.111\ldots$ $\frac29$: 20 divided by 9 is 2, remainder
       2, forever: $0.222\ldots$ So $\frac79 = 0.777\ldots$ (70 divided by 9 is 7, remainder 7, forever).
    2. 40 divided by 11 is 3 ($33$), remainder 7. 70 divided by 11 is 6 ($66$), remainder 4. Back to 4, so
       $\frac4{11} = 0.363636\ldots = 0.\overline{36}$.
    3. $\frac16 = 0.1666\ldots$, the loop (just the 6) starts at the second digit. $\frac1{12}$: 10 divided by 12 is
       0, remainder 10. 100 divided by 12 is 8 ($96$), remainder 4. 40 divided by 12 is 3 ($36$), remainder 4, forever.
       So $\frac1{12} = 0.08333\ldots$, and the loop starts at the third digit.
    4. Stop: $\frac14 = 0.25$ (4 is $2 \times 2$), $\frac3{20} = 0.15$ (20 is $2 \times 2 \times 5$),
       $\frac78 = 0.875$ (8 is $2 \times 2 \times 2$). Repeat: $\frac1{12} = 0.08333\ldots$ (12 has a factor 3) and
       $\frac1{15} = 0.0666\ldots$ (15 has a factor 3).
    5. Dividing 2 by 7 starts with remainder 2. In the table, remainder 2 is where step 3 begins (digit 2, then 8, 5,
       7, 1, 4). So $\frac27 = 0.285714\,285714\ldots$
    6. At most **12** digits. The remainders can only be 1 to 12 (0 would make it stop), so within 13 steps one must
       repeat. (In fact $\frac1{13} = 0.076923\,076923\ldots$ has a loop of 6.)
    7. You cannot tell from the screen: it shows only 10 digits, and no repeat is visible yet. But since $\frac1{17}$
       is a fraction, it must repeat, with a loop of at most **16** digits (the remainders can only be 1 to 16). In fact
       the loop is exactly 16 digits long: $0.0588235294117647$ and then it starts again.

## Common mistake

**Thinking 0.333 equals $\frac13$.** It does not: $0.333 = \frac{333}{1000}$, and $3 \times 0.333 = 0.999$, not 1. Only
the never-ending $0.333\ldots$ equals $\frac13$ exactly. Rounding to a few digits is fine for measuring, but it is not
the same number.

**Thinking a calculator proves the digits go on forever.** A calculator shows only a few digits and then rounds the
last one. The proof that they go on forever is the remainder loop, not the screen.

## Where it leads

- Back: [Numbers between numbers](04-numbers-between.md) · Next: [Zeno's race](06-zenos-race.md).
- [Level 3 page](index.md) · [Infinity topic page](../index.md)
- Long division step by step: [Division with remainders](../../numbers/level-3/04-long-division.md). Fractions to
  decimals and back: [Numbers level 4](../../numbers/level-4/05-fractions-to-decimals.md).
- Turning a repeating decimal back into a fraction: [Repeating decimals to fractions](../../numbers/level-6/01-repeating-decimals.md).
- Is $0.999\ldots$ equal to 1? Find out in [level 4](../level-4/02-does-point-nine.md).
- Why the denominators 2 and 5 are special: prime factors, in [Number theory](../../number-theory/level-3/05-prime-factorization.md).
