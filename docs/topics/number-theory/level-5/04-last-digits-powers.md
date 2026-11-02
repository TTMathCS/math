---
title: "Last digits and big powers"
---

# Last digits and big powers

*Number theory · level 5, lesson 4 of 6*

## A question to start

The number $7^{100}$ (seven multiplied by itself 100 times) has **85 digits**. No ordinary calculator can show it.
Yet you can find its last digit in your head, in less than a minute. It is 1.

Even more: its last **two** digits are 01. And you can find the last digit of numbers so enormous that writing them
out would need more paper than exists, such as $7^{7^7}$. This lesson shows how, and why it always works.

## The idea

### The last digit is the remainder mod 10

The last digit of a whole number is its remainder when divided by 10. For example $4837 = 483 \times 10 + 7$. So
"finding the last digit" means "working on the mod 10 clock".

By the big rule from [lesson 3](03-congruence.md), when you multiply, only the remainders matter. So **the last digit
of a product depends only on the last digits of the numbers you multiply.** For example $4837 \times 2659$ ends in the
same digit as $7 \times 9 = 63$, which is 3. You can check: $4837 \times 2659 = 12861583$.

In particular, the last digit of $7^{100}$ depends only on the 7s, and each time you multiply by 7 you only need to
keep the last digit.

### Powers go round in cycles

Watch the last digits of the powers of 7. Each new one is the old last digit times 7, keeping only the last digit:

| Power | $7^1$ | $7^2$ | $7^3$ | $7^4$ | $7^5$ | $7^6$ | $7^7$ | $7^8$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Value | 7 | 49 | 343 | 2401 | 16807 | ... | ... | ... |
| Last digit | 7 | 9 | 3 | 1 | 7 | 9 | 3 | 1 |

(For example $9 \times 7 = 63$, keep 3; $3 \times 7 = 21$, keep 1; $1 \times 7 = 7$.) Once we get back to 1, the next
step gives 7 again, and the whole cycle repeats: **7, 9, 3, 1, 7, 9, 3, 1, ...**, with **cycle length** 4.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 180" role="img" aria-label="Four circles in a ring with the digits 7, 9, 3 and 1; arrows labelled times 7 go from 7 to 9, 9 to 3, 3 to 1 and 1 back to 7">
  <g fill="none" stroke="currentColor" stroke-width="2">
    <path d="M 228 32 Q 280 40 290 68"/><path d="M 290 102 Q 280 130 228 138"/>
    <path d="M 192 138 Q 140 130 130 102"/><path d="M 130 68 Q 140 40 192 32"/>
  </g>
  <g fill="currentColor">
    <polygon points="290,72 284,61 296,62"/><polygon points="224,139 234,133 234,145"/>
    <polygon points="130,98 124,109 136,108"/><polygon points="196,31 186,25 186,37"/>
  </g>
  <g fill="#eea66f"><circle cx="210" cy="30" r="17"/></g>
  <g fill="#9cc9ea"><circle cx="300" cy="85" r="17"/><circle cx="210" cy="140" r="17"/></g>
  <g fill="#7ccf9a"><circle cx="120" cy="85" r="17"/></g>
  <g font-size="16" fill="currentColor" text-anchor="middle">
    <text x="210" y="36">7</text><text x="300" y="91">9</text><text x="210" y="146">3</text><text x="120" y="91">1</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="290" y="38">× 7</text><text x="290" y="142">× 7</text><text x="130" y="142">× 7</text><text x="130" y="38">× 7</text>
    <text x="210" y="176">last digits of 7, 7², 7³, 7⁴, ...</text>
  </g>
</svg>
</div>

Now $7^{100}$ is easy. The cycle has length 4, and every power whose exponent is a multiple of 4 sits on 1 (that is
$7^4, 7^8, 7^{12}, \ldots$). Since $100 = 25 \times 4$, the last digit of $7^{100}$ is **1**.

In the language of congruence: $7^4 = 2401 \equiv 1 \pmod{10}$, so $7^{100} = (7^4)^{25} \equiv 1^{25} = 1 \pmod{10}$.

### Why there must be a cycle

Is it luck that the powers of 7 come round in a cycle? No. Two facts force it.

1. **There are only 10 possible last digits**, 0 to 9.
2. **Each last digit decides the next one.** The next power's last digit is (this last digit × 7), keeping only the
   last digit. Nothing else matters.

By fact 1, among the first 11 powers two must share a last digit (11 powers, only 10 digits). By fact 2, from that
moment on, everything repeats exactly as it did the first time. So the last digits must fall into a cycle. This kind
of argument, "more things than boxes, so two share a box", is called the **pigeonhole principle**.

The same argument works for **any** base and **any** clock: the powers of $a$ mod $n$ always end up in a cycle,
because there are only $n$ positions and each one decides the next.

### All the cycles mod 10

Here are the last digits of the powers for every possible last digit:

| Last digit of $a$ | Last digits of $a^1, a^2, a^3, a^4, \ldots$ | Cycle length |
| --- | --- | --- |
| 0 | 0, 0, 0, ... | 1 |
| 1 | 1, 1, 1, ... | 1 |
| 2 | 2, 4, 8, 6, 2, 4, 8, 6, ... | 4 |
| 3 | 3, 9, 7, 1, 3, 9, 7, 1, ... | 4 |
| 4 | 4, 6, 4, 6, ... | 2 |
| 5 | 5, 5, 5, ... | 1 |
| 6 | 6, 6, 6, ... | 1 |
| 7 | 7, 9, 3, 1, 7, 9, 3, 1, ... | 4 |
| 8 | 8, 4, 2, 6, 8, 4, 2, 6, ... | 4 |
| 9 | 9, 1, 9, 1, ... | 2 |

Every cycle length is 1, 2 or 4, and each of those divides 4. So **every** row repeats after 4 steps: the 5th power
always has the same last digit as the 1st, the 6th as the 2nd, and so on. In symbols,

$$a^5 \equiv a \pmod{10} \quad \text{for every whole number } a.$$

Try it: $2^5 = 32$, $3^5 = 243$, $8^5 = 32768$. Each ends in the digit it started with. This gives one rule for every
last-digit question:

> To find the last digit of $a^k$ (with $k \ge 1$), find the remainder of $k$ mod 4. If it is 1, 2 or 3, use $a^1$,
> $a^2$ or $a^3$. If it is 0, use $a^4$.

(Why "use $a^4$" and not $a^0 = 1$? Because the rows for 2, 4, 5, 6 and 8 never come back to 1. For them, the
4th power is the one that matches the 8th, 12th, ... power. For example $2^4 = 16$ ends in 6, and so does $2^{100}$.)

### Other clocks

The same idea works on any clock, though the cycle length changes. Mod 7, the powers of 3 go

$$3, \; 2, \; 6, \; 4, \; 5, \; 1, \; 3, \; 2, \ldots$$

(each is the last one times 3, reduced mod 7). The cycle has length 6 and passes through **every** non-zero position.
Mod 7, the powers of 2 go $2, 4, 1, 2, 4, 1, \ldots$ with length 3. In [level 7](../level-7/index.md) you will see why
the cycle length on a prime clock $p$ always divides $p - 1$ (here $p - 1 = 6$, and 6 and 3 both divide it): that is
**Fermat's little theorem**.

### Last two digits

The last two digits are the remainder mod 100, and the same method works with a bigger clock. Since $7^4 = 2401$, we
have $7^4 \equiv 1 \pmod{100}$. So

$$7^{100} = (7^4)^{25} \equiv 1^{25} = 1 \pmod{100},$$

and $7^{100}$ ends in **01**, as promised at the start.

## Worked examples

**1. The last digit of $2^{2026}$.** (This number has 610 digits.)

- The cycle for 2 is 2, 4, 8, 6 (length 4).
- $2026 = 506 \times 4 + 2$, so the remainder of the exponent mod 4 is 2.
- Use $2^2 = 4$. The last digit is **4**.

**2. The last digit of $2026^{2026}$.**

- Only the last digit of the base matters: 6.
- Every power of 6 ends in 6 (cycle length 1). The last digit is **6**.

**3. A remainder on the mod 7 clock.** Find the remainder of $3^{100}$ on division by 7.

- The powers of 3 mod 7 cycle with length 6: 3, 2, 6, 4, 5, 1.
- $100 = 16 \times 6 + 4$, so $3^{100} = (3^6)^{16} \times 3^4 \equiv 1^{16} \times 3^4 \pmod 7$.
- $3^4 = 81 = 11 \times 7 + 4$. The remainder is **4**.

**4. A tower.** Find the last digit of $7^{7^7}$. (The exponent $7^7$ is 823,543. The full number has about 696,000
digits.)

- The last digit of $7^k$ depends on $k$ mod 4. So we need the remainder of $7^7$ mod 4.
- $7 \equiv -1 \pmod 4$, so $7^7 \equiv (-1)^7 = -1 \equiv 3 \pmod 4$.
- So use $7^3 = 343$. The last digit is **3**.

Notice the two different clocks: the exponent lives on the mod 4 clock (the cycle length), while the answer lives on
the mod 10 clock.

**5. Adding big powers.** Find the last digit of $13^{13} + 17^{17}$.

- $13^{13}$: last digit of base 3, exponent $13 \equiv 1 \pmod 4$, so it ends like $3^1$: **3**.
- $17^{17}$: last digit of base 7, exponent $17 \equiv 1 \pmod 4$, so it ends like $7^1$: **7**.
- The sum ends like $3 + 7 = 10$: the last digit is **0**.

## Try it

1. Find the last digit of (a) $3^{2026}$; (b) $2^{50}$; (c) $9^{100}$; (d) $4^{99}$.
2. Find the last digit of $8^{2026}$ and of $5^{2026}$.
3. Which digits can be the last digit of a perfect square? (Square each digit 0 to 9.) Is 2,345,678 a square?
4. Find the remainder of $2^{100}$ on division by 5. (Find the cycle of powers of 2 mod 5 first.)
5. Find the remainder of $5^{100}$ on division by 13. (Start with $5^2$.)
6. Check that $3^{20} = 3486784401$. Use this to find the last two digits of $3^{2026}$.
7. Show that $a^5 - a$ always ends in 0, by using the table of cycles.
8. Harder: find the last digit of $3^{3^{3}}$ and of $2^{3^{4}}$. (Be careful: $3^{3^3}$ means $3^{27}$, not
   $27^3$.)

??? note "Answers"
    1. (a) Cycle 3, 9, 7, 1; $2026 = 506 \times 4 + 2$, so like $3^2$: **9**. (b) Cycle 2, 4, 8, 6; $50 = 12 \times 4 + 2$, so like
       $2^2$: **4**. (c) Cycle 9, 1; 100 is even, so **1**. (d) Cycle 4, 6; 99 is odd, so **4**.
    2. Powers of 8 end in 8, 4, 2, 6; $2026 \equiv 2 \pmod 4$, so like $8^2 = 64$: **4**. Every power of 5 ends in
       **5**.
    3. Squares of 0 to 9 end in 0, 1, 4, 9, 6, 5, 6, 9, 4, 1. So a square can only end in **0, 1, 4, 5, 6 or 9**,
       never 2, 3, 7 or 8. 2,345,678 ends in 8, so it is **not** a square.
    4. Powers of 2 mod 5: 2, 4, $8 \equiv 3$, $6 \equiv 1$, then repeat (length 4). $100 = 25 \times 4$, so
       $2^{100} \equiv 1 \pmod 5$. The remainder is **1**.
    5. $5^2 = 25 \equiv -1 \pmod{13}$, so $5^4 \equiv (-1)^2 = 1$. $100 = 25 \times 4$, so
       $5^{100} = (5^4)^{25} \equiv 1$. The remainder is **1**.
    6. $3^{20}$ ends in 01, so $3^{20} \equiv 1 \pmod{100}$. $2026 = 101 \times 20 + 6$, so
       $3^{2026} = (3^{20})^{101} \times 3^6 \equiv 3^6 = 729 \pmod{100}$. The last two digits are **29**.
    7. In every row of the table the 5th entry equals the 1st, so $a^5$ and $a$ have the same last digit. Then
       $a^5 - a$ ends in 0 (for example $3^5 - 3 = 243 - 3 = 240$). For a negative base the same holds, since
       $(-a)^5 - (-a) = -(a^5 - a)$.
    8. $3^{27}$: $27 = 6 \times 4 + 3$, so like $3^3 = 27$: last digit **7**. For $2^{3^4} = 2^{81}$:
       $81 = 20 \times 4 + 1$, so like $2^1$: last digit **2**.

## Common mistake

**Using the exponent itself instead of its place in the cycle.** For $2^{2026}$ some people reason "2026 ends in 6, so
use $2^6$". That is wrong: the cycle has length 4, so what matters is the exponent **mod 4**, not its last digit. The
base is reduced mod 10; the exponent is reduced mod the cycle length.

**Using $a^0 = 1$ when the exponent is a multiple of 4.** For base 2, an exponent that is a multiple of 4 gives last
digit 6, not 1: $2^4 = 16$, $2^8 = 256$. The cycle of 2 never visits 1. Use the 4th entry of the cycle.

## Where it leads

- Back: [Congruence](03-congruence.md) · Next: [The divisibility tests explained](05-divisibility-tests-explained.md),
  where powers of 10 on a clock explain the old tests.
- [Level 5 page](index.md) · [Number theory topic page](../index.md)
- Fast ways to compute powers on a clock, and why the cycle length on a prime clock divides $p - 1$:
  [Level 7: Powers on a clock](../level-7/index.md).
- The "more things than boxes" argument is the **pigeonhole principle**, a counting idea: see
  [Counting](../../counting/index.md).
- Repeating last digits are a [pattern](../../patterns/index.md) that goes round forever.
