---
title: "Master: Clock arithmetic"
---

# Master: Clock arithmetic (modular arithmetic)

*Number theory · step 4 of 5*

## A question to start

It is 9 o'clock now. What will the clock show in 100 hours?

Adding gives 109, but no clock shows 109. Every 12 hours the hands come back to where they started, so all that
matters is what is left over after taking away as many 12s as possible. 108 is 9 × 12, so 109 hours is 9 full turns
of the clock and **1 hour more**: it will show 1 o'clock.

You have just done **modular arithmetic**, the arithmetic of things that go round in circles: clocks, days of the
week, the last digit of a number. It is also the arithmetic that keeps your messages secret on the internet.

## The idea

### Remainders

When you divide a whole number $a$ by a whole number $n$, you get a **quotient** $q$ (how many whole times $n$ fits)
and a **remainder** $r$ (what is left):

$$a = q \times n + r, \qquad 0 \le r < n.$$

For example, $109 = 9 \times 12 + 1$, so dividing 109 by 12 gives quotient 9 and remainder 1. The remainder is
always at least 0 and smaller than $n$.

### Clocks of any size

A 12-hour clock is "arithmetic mod 12". You can make a clock with any number of hours. A **mod 7** clock has
positions 0 to 6, like the days of the week. A **mod 10** clock has positions 0 to 9, like the last digit of a
number. The number $n$ is called the **modulus**.

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
    <text x="80" y="30">6 + 1 = 0 (mod 7)</text>
  </g>
  <path d="M172 34 Q185 14 198 18" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <polygon points="198,12 206,19 196,24" fill="#7ccf9a"/>
</svg>
</div>

### Congruence

Two numbers are **congruent mod $n$** if they land on the same position of the mod $n$ clock, which means they have
the same remainder when divided by $n$. We write

$$17 \equiv 5 \pmod{12}$$

and read it "17 is congruent to 5, mod 12". Both 17 and 5 leave remainder 5 when divided by 12. An equivalent test,
often quicker: $a \equiv b \pmod n$ exactly when $n$ divides $a - b$. Here $17 - 5 = 12$, which 12 divides.

More examples: $100 \equiv 2 \pmod 7$ (since $100 = 14 \times 7 + 2$), and $38 \equiv 0 \pmod{19}$.

Negative numbers fit too. Three hours before 2 o'clock is 11 o'clock, and indeed $2 - 3 = -1 \equiv 11 \pmod{12}$,
because $11 - (-1) = 12$.

### The big rule: reduce whenever you like

Here is what makes modular arithmetic powerful. **When you add, subtract or multiply, you may replace any number by
its remainder first, and the answer's remainder does not change.**

Why? Write $a = q n + r$ and $b = p n + s$. Then

$$a \times b = (qn + r)(pn + s) = \underbrace{qpn^2 + qsn + rpn}_{\text{a multiple of } n} + \; r s,$$

so $ab$ and $rs$ have the same remainder mod $n$. Adding works the same way. In symbols: if $a \equiv r$ and
$b \equiv s \pmod n$, then $a + b \equiv r + s$ and $ab \equiv rs \pmod n$.

This lets you work with gigantic numbers while only ever writing down small ones.

### The divisibility tricks, explained

Because $10 \equiv 1 \pmod 9$, every power of 10 is also $\equiv 1$. So

$$4725 = 4 \cdot 10^3 + 7 \cdot 10^2 + 2 \cdot 10 + 5 \equiv 4 + 7 + 2 + 5 \pmod 9.$$

A number and its digit sum always have the **same remainder** mod 9. That is the digit-sum trick from the Explore
step, now in one line.

For 11, notice $10 \equiv -1 \pmod{11}$, so the powers of 10 go $1, -1, 1, -1, \ldots$ That gives the trick for 11:
**add and subtract the digits in turn, starting from the right.** If the result is divisible by 11, so is the number.

## Worked examples

**1. A huge power.** What is the remainder when $2^{100}$ is divided by 7?

- Look for a small power that is easy: $2^3 = 8 \equiv 1 \pmod 7$.
- $99 = 3 \times 33$, so $2^{99} = (2^3)^{33} \equiv 1^{33} = 1 \pmod 7$.
- $2^{100} = 2^{99} \times 2 \equiv 1 \times 2 = 2 \pmod 7$.

The remainder is **2**, and you never had to write down the 31-digit number $2^{100}$.

**2. The last digit.** What is the last digit of $7^{100}$? The last digit is the remainder mod 10, and the powers of
7 go round a little cycle:

| Power | $7^1$ | $7^2$ | $7^3$ | $7^4$ | $7^5$ |
| --- | --- | --- | --- | --- | --- |
| mod 10 | 7 | 9 | 3 | 1 | 7 |

Once you reach 1 the cycle repeats every 4 steps. 100 is a multiple of 4, so $7^{100} \equiv 1 \pmod{10}$. The last
digit is **1**.

**3. Days of the week.** Today is Monday. What day is it in 1000 days? $1000 = 142 \times 7 + 6$, so
$1000 \equiv 6 \pmod 7$. Six days after Monday is **Sunday**.

**4. A check digit.** The last digit of a 13-digit book number (ISBN) is a **check digit**, chosen so that a
mistake in copying the number is usually caught. Multiply the digits by 1, 3, 1, 3, ... in turn and add; the check
digit makes the total $\equiv 0 \pmod{10}$. For 978-0-306-40615-?:

$$9 + 3\cdot7 + 8 + 3\cdot0 + 3 + 3\cdot0 + 6 + 3\cdot4 + 0 + 3\cdot6 + 1 + 3\cdot5 = 93.$$

$93 \equiv 3 \pmod{10}$, so the check digit must be **7** to make 100. If someone types one digit wrong, the total
changes by an amount that is not a multiple of 10, and the computer notices.

## Try it

1. On a 12-hour clock, what time is it 15 hours after 10 o'clock?
2. Find the remainder of 47 mod 5, and of $-8$ mod 5.
3. Find the remainder of $123 \times 456$ when divided by 7, by reducing first.
4. What is the last digit of $3^{2026}$?
5. Is 918,082 divisible by 11?
6. Show that a square number can never be 2 more than a multiple of 4. (Hint: every whole number is $\equiv 0, 1, 2$
   or $3 \pmod 4$. Square each.)

??? note "Answers"
    1. $10 + 15 = 25 = 2 \times 12 + 1$, so **1 o'clock**.
    2. $47 = 9 \times 5 + 2$, remainder **2**. $-8 = (-2) \times 5 + 2$, remainder **2** as well. (Check:
       $47 - (-8) = 55$, which 5 divides, so they are congruent.)
    3. $123 = 17 \times 7 + 4$, so $123 \equiv 4$. $456 = 65 \times 7 + 1$, so $456 \equiv 1$. The product is
       $\equiv 4 \times 1 = 4 \pmod 7$. (Check: $123 \times 456 = 56088 = 8012 \times 7 + 4$.)
    4. The powers of 3 mod 10 cycle 3, 9, 7, 1 every 4 steps. $2026 = 506 \times 4 + 2$, so $3^{2026}$ sits at the
       2nd place in the cycle: the last digit is **9**.
    5. From the right: $2 - 8 + 0 - 8 + 1 - 9 = -22$, which is divisible by 11. So yes: $918082 = 11 \times 83462$.
    6. $0^2 = 0$, $1^2 = 1$, $2^2 = 4 \equiv 0$, $3^2 = 9 \equiv 1 \pmod 4$. So every square is $\equiv 0$ or
       $1 \pmod 4$, never 2. This proves, for example, that no number ending in ...02 or ...06 can be a perfect
       square, since those are $\equiv 2 \pmod 4$.

## Common mistake

**Dividing both sides as if it were ordinary arithmetic.** You may add, subtract and multiply freely, but you may not
always cancel. For example, $2 \times 3 = 6$ and $2 \times 8 = 16$, and $6 \equiv 16 \pmod{10}$. But you cannot cancel
the 2 to get $3 \equiv 8 \pmod{10}$: that is false. Cancelling a number is safe only when it shares no factor with the
modulus (here 2 shares the factor 2 with 10). The next step shows how "dividing" really works on a clock.

## Where it leads

- Next step: [Beyond: Fermat's little theorem and secret codes](05-beyond.md), where a prime-sized clock reveals
  a beautiful pattern in powers.
- Back a step: [Build: prime factors, GCD and Euclid's algorithm](03-build.md)
- Repeating cycles like 7, 9, 3, 1 are [repeating patterns](../patterns/01-play.md) in disguise.
- Codes that shift letters round an alphabet "clock" of 26 are explained on
  [cryptography.akadian.ca](https://cryptography.akadian.ca/).
