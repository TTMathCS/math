---
title: "Clocks of any size"
---

# Clocks of any size

*Number theory · level 5, lesson 2 of 6*

## A question to start

Is there a world where $4 + 4 = 1$ and $3 \times 5 = 1$?

Yes, and you visit it every week. Number the days Monday = 0, Tuesday = 1, ..., Sunday = 6. Four days after Friday
(day 4) is Tuesday (day 1), so in "week arithmetic" $4 + 4 = 1$. And $3 \times 5 = 15$ days is two weeks and one day, so
$3 \times 5$ lands one day on: $3 \times 5 = 1$.

This lesson builds such worlds, one for every whole number, and looks at their addition and multiplication tables.
Some of them behave almost like ordinary numbers. Some of them have very strange habits, like two numbers that are not
zero multiplying to give zero.

## The idea

### A clock with $n$ hours

Take a whole number $n$ of at least 2. The **clock mod $n$** has $n$ positions, numbered $0, 1, 2, \ldots, n - 1$,
going round in a circle. After $n - 1$ comes 0 again. The number $n$ is called the **modulus** (plural **moduli**).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="A clock with seven positions numbered 0 to 6; an arrow shows that going one step past 6 lands back on 0">
  <circle cx="210" cy="85" r="62" fill="none" stroke="#9cc9ea" stroke-width="6"/>
  <g fill="#eea66f">
    <circle cx="210" cy="23" r="13"/><circle cx="258.5" cy="46.3" r="13"/><circle cx="270.4" cy="98.8" r="13"/>
    <circle cx="236.9" cy="140.9" r="13"/><circle cx="183.1" cy="140.9" r="13"/><circle cx="149.6" cy="98.8" r="13"/>
    <circle cx="161.5" cy="46.3" r="13"/>
  </g>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="210" y="28">0</text><text x="258.5" y="51">1</text><text x="270.4" y="104">2</text>
    <text x="236.9" y="146">3</text><text x="183.1" y="146">4</text><text x="149.6" y="104">5</text>
    <text x="161.5" y="51">6</text>
    <text x="70" y="30">6 + 1 = 0 (mod 7)</text>
  </g>
  <path d="M172 34 Q185 14 198 18" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="198,12 206,19 196,24" fill="#7ccf9a"/>
</svg>
</div>

Each position stands for a whole family of numbers from [lesson 1](01-remainders.md): position 3 on the mod 7
clock stands for every number that leaves remainder 3 when divided by 7 (..., −4, 3, 10, 17, ...). So the clock has
exactly $n$ "numbers", and any ordinary whole number can be put on it by taking its remainder.

Some clocks you already use:

- **mod 12**: the hours on a watch face, except that the top is called 12 instead of 0.
- **mod 24**: the hours of the day on a 24-hour clock (00:00 to 23:00).
- **mod 7**: the days of the week.
- **mod 60**: the minutes on the hour. Forty minutes after 10:30 is 11:10, because $30 + 40 = 70$ and
  $70 = 60 + 10$.
- **mod 360**: directions in degrees. Turning 300° and then 100° faces the same way as turning 40°, because
  $400 - 360 = 40$.
- **mod 2**: the smallest useful clock, with only 0 and 1. It is the clock of **even** (0) and **odd** (1).
- **mod 10**: the last digit of a number. The last digit of a sum or product depends only on the last digits
  (lesson 4 uses this).

### Adding on a clock

To add on a clock, **walk round it**. On the mod 12 clock, $9 + 5$ means start at 9 and step on 5 places: 10, 11,
0, 1, 2. So $9 + 5 = 2$ on this clock. In ordinary numbers, $9 + 5 = 14$, and 14 leaves remainder 2 when divided by
12. The two ways always agree: **add in the ordinary way, then take the remainder.**

To **subtract**, walk backwards. $2 - 5$ on the mod 12 clock: back from 2 to 1, 0, 11, 10, 9. So $2 - 5 = 9$. This is
just the remainder of $-3$ mod 12, which is $12 - 3 = 9$.

To write that we are working on the mod $n$ clock, we add "(mod $n$)" at the end:

$$9 + 5 \equiv 2 \pmod{12}, \qquad 2 - 5 \equiv 9 \pmod{12}.$$

The sign $\equiv$ (three lines) is read "is congruent to". It means "lands on the same position of the clock".
[Lesson 3](03-congruence.md) studies it properly.

### The addition table mod 5

Here is every sum on the mod 5 clock. Each entry is the remainder of the ordinary sum when divided by 5.

| + | **0** | **1** | **2** | **3** | **4** |
| --- | --- | --- | --- | --- | --- |
| **0** | 0 | 1 | 2 | 3 | 4 |
| **1** | 1 | 2 | 3 | 4 | 0 |
| **2** | 2 | 3 | 4 | 0 | 1 |
| **3** | 3 | 4 | 0 | 1 | 2 |
| **4** | 4 | 0 | 1 | 2 | 3 |

Three things to notice, each with its reason:

1. **Every row is a shuffle of 0, 1, 2, 3, 4.** Each number appears exactly once in each row. Why? Adding 3, say, is
   turning the clock 3 places. A turn moves every position to a different position, and no two positions land on the
   same spot.
2. **The row for 0 changes nothing.** Adding 0 is not turning at all. Zero is the "do nothing" number, just as in
   ordinary arithmetic.
3. **Every number has an opposite.** In each row there is exactly one 0. So for each number there is another that
   adds with it to give 0: $1 + 4 \equiv 0$, $2 + 3 \equiv 0$, $0 + 0 \equiv 0$. On the clock, $-1$ **is** 4 and $-2$
   **is** 3. Subtracting 2 is the same as adding 3.

### The multiplication table mod 5

Multiplying works the same way: multiply as usual, then take the remainder. For example $3 \times 4 = 12 = 2 \times 5 + 2$,
so $3 \times 4 \equiv 2 \pmod 5$. On the clock, $3 \times 4$ means "make 4 steps of 3": from 0 to 3, 1, 4, 2.

| × | **0** | **1** | **2** | **3** | **4** |
| --- | --- | --- | --- | --- | --- |
| **0** | 0 | 0 | 0 | 0 | 0 |
| **1** | 0 | 1 | 2 | 3 | 4 |
| **2** | 0 | 2 | 4 | 1 | 3 |
| **3** | 0 | 3 | 1 | 4 | 2 |
| **4** | 0 | 4 | 3 | 2 | 1 |

Look at rows 1 to 4. **Each one is again a shuffle of 0, 1, 2, 3, 4.** And each of those rows has a 1 in it:

$$1 \times 1 \equiv 1, \quad 2 \times 3 \equiv 1, \quad 3 \times 2 \equiv 1, \quad 4 \times 4 \equiv 1 \pmod 5.$$

So on the mod 5 clock, every number except 0 has a partner that multiplies with it to make 1. In ordinary arithmetic
the partner of 2 is $\frac{1}{2}$. On this clock there are no fractions, yet 2 still has a partner: 3. That means you
can **divide** on the mod 5 clock. "Dividing by 2" is the same as "multiplying by 3". For example, $4 \div 2$ should be
2, and indeed $4 \times 3 = 12 \equiv 2$. ✓

Notice also row 4: it is row 1 backwards. That is because $4 \equiv -1 \pmod 5$, and multiplying by $-1$ flips every
number to its opposite.

### A stranger clock: mod 6

Now try the mod 6 clock.

| × | **0** | **1** | **2** | **3** | **4** | **5** |
| --- | --- | --- | --- | --- | --- | --- |
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** | 0 | 1 | 2 | 3 | 4 | 5 |
| **2** | 0 | 2 | 4 | 0 | 2 | 4 |
| **3** | 0 | 3 | 0 | 3 | 0 | 3 |
| **4** | 0 | 4 | 2 | 0 | 4 | 2 |
| **5** | 0 | 5 | 4 | 3 | 2 | 1 |

Something new happens. Row 2 is **not** a shuffle: it is 0, 2, 4, 0, 2, 4, and never reaches 1, 3 or 5. Steps of 2
round a 6-hour clock only ever visit the even positions. And look: $2 \times 3 \equiv 0 \pmod 6$. Two numbers that are
not zero multiply to give zero! In ordinary arithmetic that never happens. Here it does because $6 = 2 \times 3$: the
modulus itself splits into those two factors.

Only rows 1 and 5 are shuffles, and only 1 and 5 have a partner that makes 1 ($1 \times 1 = 1$, $5 \times 5 = 25 \equiv 1$).
So on the mod 6 clock you can divide by 1 and 5, but not by 2, 3 or 4.

The difference is that 5 is a **prime** and 6 is not. On a clock whose modulus is prime, every row except 0 is a
shuffle, and you can divide by anything except 0. You will prove this in [level 6](../level-6/index.md), where the
rule turns out to be: you can divide by $a$ on the mod $n$ clock exactly when $a$ and $n$ share no factor except 1.

### A Mars clock

A day on Mars, called a **sol**, is about 24 hours 39 minutes 35 seconds long, roughly 40 minutes longer than an Earth
day. People who drive rovers sometimes live on "Mars time" so that their working day matches daylight at the rover.
Then their start time on an Earth clock moves about 40 minutes later every sol. That is arithmetic mod 24 hours: after
enough sols the start time has gone all the way round the Earth clock. Each sol pushes it on by 2375 seconds, and a
full Earth day is 86400 seconds; since $86400 \div 2375$ is about 36.4, it takes about 36 or 37 sols for the start
time to come round to where it began.

<figure class="play" data-play="clock"><span class="ai-tag">AI-created</span><figcaption><b>A clock of any size.</b> Change the number of hours n.</figcaption></figure>

## Worked examples

**1. Hours on a watch.** It is 10 o'clock. What time is it 7 hours later? And 9 hours earlier?

- Later: $10 + 7 = 17 = 12 + 5$, so **5 o'clock**.
- Earlier: $10 - 9 = 1$, so **1 o'clock**.
- 9 hours before 4 o'clock: $4 - 9 = -5 \equiv 7 \pmod{12}$, so **7 o'clock**. (Check by counting back: 3, 2, 1,
  12, 11, 10, 9, 8, 7.)

**2. Solving on a clock.** On the mod 7 clock, which number $x$ makes $x + 5 \equiv 2$?

- Subtract 5 from both sides: $x \equiv 2 - 5 = -3 \equiv 4 \pmod 7$.
- Check: $4 + 5 = 9 = 7 + 2$. ✓ So $x = 4$. (Friday, day 4, plus 5 days is Wednesday, day 2.)

**3. Building one row.** Write the row for 3 in the multiplication table mod 7.

- $3 \times 0, 3 \times 1, \ldots, 3 \times 6$ are 0, 3, 6, 9, 12, 15, 18.
- Remainders mod 7: **0, 3, 6, 2, 5, 1, 4**. Every position appears once: a shuffle, since 7 is prime.
- The 1 is under 5: $3 \times 5 = 15 \equiv 1 \pmod 7$, which explains the question at the start.

**4. Steps round a clock.** On a 12-hour clock you start at 0 and keep stepping by 8 hours. Which positions do you
visit?

- 0, 8, $16 \equiv 4$, $12 \equiv 0$, and then it repeats.
- Only **0, 8 and 4** are ever reached. Steps of 8 on a 12 clock visit only multiples of 4, because 4 is the
  largest number dividing both 8 and 12. (This is the gcd from [level 4](../level-4/index.md) appearing on a clock.)
- With steps of 5 instead you would visit all 12 positions, since 5 and 12 share no factor.

**5. Mod 2 is odd and even.** The mod 2 tables are tiny:

| + | 0 | 1 |
| --- | --- | --- |
| 0 | 0 | 1 |
| 1 | 1 | 0 |

| × | 0 | 1 |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 0 | 1 |

Read 0 as "even" and 1 as "odd": odd + odd = even, odd × odd = odd, even × anything = even. All the odd-and-even rules
from level 2 are just the mod 2 clock.

## Try it

1. On a 12-hour clock: (a) 8 hours after 9 o'clock; (b) 7 hours before 3 o'clock; (c) what is $5 \times 5$ on the mod
   12 clock?
2. Write the row for 2 in the multiplication table mod 7. Where is the 1?
3. On the mod 5 clock, find every $x$ with $x \times x \equiv 4$.
4. On the mod 8 clock, find every $x$ from 0 to 7 with $x \times x \equiv 1$. Is this more or fewer than you expect
   from ordinary numbers?
5. Write the row for 4 in the multiplication table mod 10. Is it a shuffle? Which positions does it reach?
6. A rover team starts work at 8:00 Earth time on one sol. Taking a sol as 24 hours 40 minutes, at about what Earth
   time do they start 10 sols later?
7. On the mod 9 clock, solve (a) $x + 7 \equiv 3$ and (b) $2x \equiv 1$.
8. Harder: on the mod 12 clock, which step sizes from 1 to 11 visit all 12 positions? What do they have in common?

??? note "Answers"
    1. (a) $9 + 8 = 17 = 12 + 5$: **5 o'clock**. (b) $3 - 7 = -4 \equiv 8$: **8 o'clock**. (c) $25 = 2 \times 12 + 1$,
       so $5 \times 5 \equiv$ **1** (mod 12).
    2. $2 \times 0, \ldots, 2 \times 6$ are 0, 2, 4, 6, 8, 10, 12, which mod 7 are **0, 2, 4, 6, 1, 3, 5**. The 1 is
       under 4: $2 \times 4 = 8 \equiv 1 \pmod 7$.
    3. Squares mod 5: $0, 1, 4, 9 \equiv 4, 16 \equiv 1$. So $x = 2$ and $x = 3$. (Note $3 \equiv -2$, and
       $(-2)^2 = 4$, so it makes sense that both work.)
    4. Squares mod 8: $0, 1, 4, 9 \equiv 1, 16 \equiv 0, 25 \equiv 1, 36 \equiv 4, 49 \equiv 1$. So $x = 1, 3, 5, 7$:
       **four** answers. In ordinary numbers $x^2 = 1$ has only two answers (1 and $-1$). Clocks that are not prime
       can have extra square roots.
    5. $4 \times 0, \ldots, 4 \times 9$ are 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, which mod 10 are
       **0, 4, 8, 2, 6, 0, 4, 8, 2, 6**. Not a shuffle: it reaches only the even positions 0, 2, 4, 6, 8, because 4
       and 10 share the factor 2.
    6. Each sol moves the start 40 minutes later: $10 \times 40 = 400$ minutes $= 6$ hours 40 minutes. So about
       **14:40 (2:40 p.m.)** Earth time. (With the exact sol length, 39 minutes 35 seconds per sol, it is about 14:36.)
    7. (a) $x \equiv 3 - 7 = -4 \equiv 5 \pmod 9$. Check: $5 + 7 = 12 \equiv 3$. ✓ (b) Look along the row of 2:
       $2 \times 5 = 10 \equiv 1$, so $x = 5$.
    8. Steps of **1, 5, 7 and 11**. Steps of 2, 4, 6, 8, 10 visit only even positions; steps of 3 and 9 only
       multiples of 3. The four that work are exactly the step sizes that share no factor with 12 except 1.

## Common mistake

**Thinking clock arithmetic is "wrong" arithmetic.** $9 + 5 \equiv 2 \pmod{12}$ does not say $9 + 5 = 2$ as ordinary
numbers. It says they land on the same position of the 12-hour clock. Always say or write which clock you are on:
"(mod 12)". Without it the statement is false.

**Expecting every clock to behave like mod 5.** On a prime clock every non-zero number can be divided by. On clocks
like mod 6 or mod 10, some products of non-zero numbers are 0, and some numbers cannot be divided by. Check the
modulus before you divide.

## Where it leads

- Back: [Remainders as a new kind of number](01-remainders.md) · Next: [Congruence](03-congruence.md), the rule
  that lets you reduce whenever you like, and why it is true.
- [Level 5 page](index.md) · [Number theory topic page](../index.md)
- Turning a shape round and round is clock arithmetic with angles: see
  [Rotational symmetry](../../geometry/level-4/06-rotational-symmetry.md) in Geometry.
- Which numbers you can divide by on a clock is answered in [Level 6: Inverses mod n](../level-6/04-inverses-mod-n.md).
- At university, the clocks with a prime modulus are the first examples of a **field**, a number system where you
  can always divide by anything but 0: [MAT240 Unit 1: Fields and vector spaces](../../../uoft/MAT240H1/unit01.md).
