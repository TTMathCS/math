---
title: "Congruence"
---

# Congruence

*Number theory · level 5, lesson 3 of 6*

## A question to start

What is the remainder when $2024 \times 2025 \times 2026$ is divided by 7?

The product is 8,303,763,600, a ten-digit number. Dividing that by 7 by hand would be slow and easy to get wrong. But
here is a trick: $2023 = 289 \times 7$ is a multiple of 7, so 2024 leaves remainder 1, 2025 leaves remainder 2 and
2026 leaves remainder 3. Multiply the remainders: $1 \times 2 \times 3 = 6$. The answer is **6**.

It works, and a calculator agrees: $8303763600 = 1186251942 \times 7 + 6$. But **why** is it allowed to swap each
number for its remainder before multiplying? This lesson gives the reason, and the reason is what makes all of clock
arithmetic trustworthy.

## The idea

### Three ways to say the same thing

Let $n$ be a whole number of at least 2. For whole numbers $a$ and $b$, these three statements always mean the same:

1. $a$ and $b$ leave the **same remainder** when divided by $n$.
2. $a$ and $b$ land on the **same position** of the mod $n$ clock.
3. $n$ **divides** $a - b$ (that is, $a - b$ is a multiple of $n$).

When they hold, we say **$a$ is congruent to $b$ modulo $n$**, and write

$$a \equiv b \pmod n.$$

The word "congruent" means "agreeing". Two numbers are congruent mod $n$ when they agree as far as the mod $n$ clock
can tell. For example $38 \equiv 3 \pmod 7$: both leave remainder 3, and $38 - 3 = 35 = 5 \times 7$.

Statements 1 and 2 are the same by the definition of the clock. Why is statement 3 the same as statement 1? Here is
the reason, in both directions.

- **Same remainder means $n$ divides the difference.** Suppose $a = qn + r$ and $b = pn + r$, with the same $r$.
  Subtract: $a - b = qn - pn = (q - p)n$, a multiple of $n$. The remainders cancel.
- **$n$ divides the difference means same remainder.** Suppose $a - b = kn$, so $a = b + kn$. If $b = pn + r$ with
  $0 \le r < n$, then $a = pn + r + kn = (p + k)n + r$, with the same $r$ still between 0 and $n - 1$. So $a$ has
  remainder $r$ too.

Statement 3 is often the quickest to check, because you never have to work out a remainder. Is $1001 \equiv 2002 \pmod{13}$?
The difference is $1001 = 7 \times 11 \times 13$, so yes.

### Congruence behaves like equals

The sign $\equiv$ looks like $=$ with an extra line, and it behaves very like it:

- **Every number is congruent to itself:** $a - a = 0$, and 0 is a multiple of every $n$.
- **It works both ways round:** if $n$ divides $a - b$, it divides $b - a = -(a - b)$ too.
- **It chains:** if $a \equiv b$ and $b \equiv c$, then $a - c = (a - b) + (b - c)$ is the sum of two multiples of
  $n$, so $a \equiv c$.

The chaining rule is what lets us write long lines like $2^{100} = (2^3)^{33} \times 2 \equiv 1^{33} \times 2 = 2 \pmod 7$
and trust the two ends.

### The big rule: reduce whenever you like

> If $a \equiv a'$ and $b \equiv b' \pmod n$, then
> $a + b \equiv a' + b'$, $\;a - b \equiv a' - b'$ and $a \times b \equiv a' \times b' \pmod n$.

In words: **when you add, subtract or multiply, you may swap any number for anything congruent to it**, such as its
remainder, at any moment, and the answer stays on the same clock position.

**Why it is true for adding.** Since $a \equiv a'$, we can write $a = a' + kn$ for some whole number $k$. In the same
way $b = b' + ln$. Then

$$a + b = (a' + b') + (k + l)n.$$

So $a + b$ and $a' + b'$ differ by a multiple of $n$: they are congruent. Subtracting is the same with a minus sign.

**Why it is true for multiplying.** Multiply out the brackets:

$$a \times b = (a' + kn)(b' + ln) = a'b' + a'ln + knb' + kln^2.$$

Every term after $a'b'$ has a factor $n$. So $ab = a'b' + n(a'l + kb' + kln)$, a multiple of $n$ away from $a'b'$.

Here is the same reason as a picture. Draw $a \times b$ as a rectangle, with the side $a$ cut into $a'$ and $kn$, and
the side $b$ cut into $b'$ and $ln$. Only the orange corner, $a' \times b'$, is free of $n$. The other three pieces all
have a side that is a multiple of $n$, so their areas are multiples of $n$, and they do not change the clock position.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 220" role="img" aria-label="A rectangle with sides a and b, each split in two; the small corner a prime times b prime is orange, and the three other pieces are blue and marked as multiples of n">
  <rect x="60" y="20" width="90" height="60" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="150" y="20" width="200" height="60" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="80" width="90" height="120" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="150" y="80" width="200" height="120" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="105" y="14">a′</text><text x="250" y="14">k n</text>
    <text x="40" y="55">b′</text><text x="40" y="145">l n</text>
    <text x="105" y="55">a′ b′</text>
    <text x="250" y="55">multiple of n</text>
    <text x="105" y="145">multiple</text><text x="105" y="161">of n</text>
    <text x="250" y="145">multiple of n</text>
  </g>
</svg>
</div>

Because multiplying is allowed, so is raising to a power, which is just multiplying again and again:

> If $a \equiv a' \pmod n$, then $a^k \equiv a'^k \pmod n$ for every whole number $k \ge 1$.

### What you may **not** do

Two moves that look natural are **not** allowed.

**Cancelling (dividing) is not always allowed.** $2 \times 3 = 6$ and $2 \times 8 = 16$, and $6 \equiv 16 \pmod{10}$.
But cancelling the 2 would give $3 \equiv 8 \pmod{10}$, which is false. The proof above only worked for $+$, $-$ and
$\times$. Division is a different story, told in [level 6](../level-6/04-inverses-mod-n.md): you may cancel a
number only when it shares no factor with the modulus except 1.

**Reducing an exponent mod $n$ is not allowed.** $2^5 = 32 \equiv 2 \pmod 3$. If you reduced the exponent 5 mod 3 to
get 2, you would compute $2^2 = 4 \equiv 1 \pmod 3$: a different answer. The base can be reduced mod $n$; the exponent
counts how many times you multiply, and it follows different rules (a cycle, as in [lesson 4](04-last-digits-powers.md)).

### Using negative numbers to make life easy

Since $n - 1 \equiv -1 \pmod n$, it often helps to swap a number for a **negative** one close to 0. For example,
$99 \equiv -1 \pmod{100}$ and $98 \equiv -2 \pmod{100}$, so

$$99 \times 98 \equiv (-1)(-2) = 2 \pmod{100}.$$

So $99 \times 98$ ends in 02. Indeed $99 \times 98 = 9702$. ✓

## Worked examples

**1. Checking congruences.** Which are true?

- $45 \equiv 12 \pmod{11}$: $45 - 12 = 33 = 3 \times 11$. **True.**
- $-4 \equiv 10 \pmod 7$: $10 - (-4) = 14 = 2 \times 7$. **True.**
- $27 \equiv 6 \pmod 4$: $27 - 6 = 21$, not a multiple of 4. **False.** (27 leaves 3, 6 leaves 2.)

**2. The question from the start, written properly.**

- $2024 \equiv 1$, $2025 \equiv 2$, $2026 \equiv 3 \pmod 7$.
- By the big rule, $2024 \times 2025 \times 2026 \equiv 1 \times 2 \times 3 = 6 \pmod 7$.

**3. A big power.** Find the remainder when $2^{100}$ is divided by 7.

- Look for a power of 2 that is easy mod 7: $2^3 = 8 \equiv 1 \pmod 7$.
- $100 = 3 \times 33 + 1$, so $2^{100} = (2^3)^{33} \times 2$.
- Swap $2^3$ for 1 (allowed, it is multiplying): $2^{100} \equiv 1^{33} \times 2 = 2 \pmod 7$.
- The remainder is **2**. The number $2^{100}$ has 31 digits, and you never wrote it down.

**4. Proving something is never a multiple.** Show that $n^2 + n + 1$ is never a multiple of 5.

- By the big rule, the remainder of $n^2 + n + 1$ depends only on the remainder of $n$. So check the five positions
  of the mod 5 clock.
- $n \equiv 0$: $0 + 0 + 1 = 1$. $\;n \equiv 1$: $1 + 1 + 1 = 3$. $\;n \equiv 2$: $4 + 2 + 1 = 7 \equiv 2$.
- $n \equiv 3$: $9 + 3 + 1 = 13 \equiv 3$. $\;n \equiv 4$: $16 + 4 + 1 = 21 \equiv 1$.
- The remainders are 1, 3, 2, 3, 1. None is 0, so $n^2 + n + 1$ is **never** a multiple of 5, for any whole number
  $n$ at all, however large. Five checks cover infinitely many numbers.

**5. Negatives as a shortcut.** Find the remainder of $47 \times 53$ on division by 50.

- $47 \equiv -3$ and $53 \equiv 3 \pmod{50}$.
- $47 \times 53 \equiv (-3)(3) = -9 \equiv 41 \pmod{50}$.
- Check: $47 \times 53 = 2491 = 49 \times 50 + 41$. ✓

## Try it

1. True or false: (a) $100 \equiv 1 \pmod 9$; (b) $-3 \equiv 18 \pmod 7$; (c) $50 \equiv 5 \pmod 6$.
2. Find the remainder of $1003 \times 2005$ on division by 4, by reducing first.
3. Find the remainder of $3^{20}$ on division by 8. (Start with $3^2$.)
4. Find the last two digits of $97 \times 96$ using negative numbers mod 100.
5. Find every $x$ on the mod 6 clock with $x^2 \equiv x$.
6. Show that $10^n - 1$ is a multiple of 9 for every whole number $n \ge 1$.
7. $4 \times 3 \equiv 4 \times 6 \pmod{12}$. Check it, and explain why this does not show $3 \equiv 6 \pmod{12}$.
8. Harder: list the squares mod 8 (for $x = 0$ to 7). Then show that a sum of three square numbers can never leave
   remainder 7 when divided by 8. (So, for example, 7, 15 and 23 are not sums of three squares.)

??? note "Answers"
    1. (a) **True**: $100 - 1 = 99 = 11 \times 9$. (b) **True**: $18 - (-3) = 21 = 3 \times 7$.
       (c) **False**: $50 - 5 = 45$, which is not a multiple of 6 (50 leaves 2, 5 leaves 5).
    2. $1003 = 250 \times 4 + 3$, so $1003 \equiv 3$; $2005 = 501 \times 4 + 1$, so $2005 \equiv 1$. The product is
       $\equiv 3 \times 1 =$ **3** (mod 4).
    3. $3^2 = 9 \equiv 1 \pmod 8$. So $3^{20} = (3^2)^{10} \equiv 1^{10} =$ **1** (mod 8).
    4. $97 \equiv -3$ and $96 \equiv -4 \pmod{100}$, so $97 \times 96 \equiv (-3)(-4) = 12$. The last two digits are
       **12**. Check: $97 \times 96 = 9312$. ✓
    5. Squares mod 6: $0, 1, 4, 9 \equiv 3, 16 \equiv 4, 25 \equiv 1$. Compare with $x$: equal for
       $x =$ **0, 1, 3, 4**. (In ordinary numbers $x^2 = x$ has only the answers 0 and 1. Again the mod 6 clock has
       extras, because 6 is not prime.)
    6. $10 \equiv 1 \pmod 9$, so $10^n \equiv 1^n = 1$, and $10^n - 1 \equiv 0 \pmod 9$. So $10^n - 1$ (which is
       9, 99, 999, ...) is always a multiple of 9.
    7. $4 \times 3 = 12 \equiv 0$ and $4 \times 6 = 24 \equiv 0 \pmod{12}$, so yes, they are congruent. But
       $6 - 3 = 3$ is not a multiple of 12, so $3 \not\equiv 6$. Cancelling the 4 is not allowed, because 4 shares
       the factor 4 with 12.
    8. Squares mod 8: $0, 1, 4, 9 \equiv 1, 16 \equiv 0, 25 \equiv 1, 36 \equiv 4, 49 \equiv 1$. So every square is
       $\equiv 0$, 1 or 4. A sum of three of them is a sum of three numbers chosen from 0, 1, 4. The possible totals
       are 0, 1, 2, 3, 4, 5, 6, 8, 9, 12; reduced mod 8 these give 0, 1, 2, 3, 4, 5, 6, 0, 1, 4. Never 7.

## Common mistake

**Reducing the exponent.** You may replace the **base** of a power by anything congruent to it, but not the
**exponent**. $2^5 \not\equiv 2^2 \pmod 3$ even though $5 \equiv 2 \pmod 3$. To handle big exponents, find a power
that is $\equiv 1$ and use the cycle, as in worked example 3.

**Cancelling as if it were ordinary equals.** From $ac \equiv bc \pmod n$ you may **not** in general conclude
$a \equiv b$. It is safe only when $c$ shares no factor with $n$ except 1 (proved in level 6).

## Where it leads

- Back: [Clocks of any size](02-clocks-any-size.md) · Next: [Last digits and big powers](04-last-digits-powers.md),
  where the big rule tames numbers with hundreds of digits.
- [Level 5 page](index.md) · [Number theory topic page](../index.md)
- The rectangle picture of $(a' + kn)(b' + ln)$ is the same as multiplying out brackets in
  [Algebra](../../algebra/index.md).
- Congruence is an example of an **equivalence relation** (equal to itself, works both ways, chains), a word you
  meet in first-year proofs: [MAT137 Unit 1: Logic, sets and proofs](../../../uoft/MAT137/unit01.md).
