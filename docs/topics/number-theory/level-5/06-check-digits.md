---
title: "Check digits"
---

# Check digits

*Number theory · level 5, lesson 6 of 6*

## A question to start

You are typing a long card number into a shop's website, and one finger slips: you type a 4 where there should be a
7. Before the shop even contacts the bank, the page says "This number is not valid".

How can it know? It has never seen your card. It does not know your number. Yet it can tell that the number you typed
is not **any** real card number at all. The secret is a single extra digit at the end, chosen with clock arithmetic.
The same trick protects book numbers, barcodes on groceries and many identity numbers.

## The idea

### What a check digit is

A **check digit** is an extra digit added to the end of an identification number. It carries no information of its
own. It is worked out from the other digits by a fixed rule, so that the whole number passes a test, usually "a
certain weighted sum is $\equiv 0 \pmod{10}$". When someone types the number, a computer redoes the test. If it fails,
there must be a mistake.

The aim is to catch the two commonest typing mistakes:

- **a single wrong digit** (typing 4 instead of 7), and
- **swapping two neighbouring digits** (typing 43 instead of 34).

A check digit cannot **correct** a mistake or say where it is. It only shouts "something is wrong". That is usually
enough: you look again and retype.

### ISBN-13: weights 1 and 3

Every book has an **ISBN** (International Standard Book Number). The modern one has 13 digits. The rule:

> Multiply the digits by $1, 3, 1, 3, \ldots$ in turn (starting from the left) and add. The total must be
> $\equiv 0 \pmod{10}$.

The 13th digit is chosen to make this true. For the ISBN 978-0-306-40615-7 (the dashes are only for reading):

| Digit | 9 | 7 | 8 | 0 | 3 | 0 | 6 | 4 | 0 | 6 | 1 | 5 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Weight | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 | 1 |
| Product | 9 | 21 | 8 | 0 | 3 | 0 | 6 | 12 | 0 | 18 | 1 | 15 | 7 |

The products add to 100, and $100 \equiv 0 \pmod{10}$. ✓ The first twelve products add to 93, so the check digit
had to be 7 to reach a multiple of 10. The same rule, with the same weights, is used for the 13-digit barcodes on
shop goods.

### Why ISBN-13 catches every single wrong digit

Suppose one digit $d$ is typed as $d'$ instead. Every other product stays the same. The one that changes was
$w \times d$ and is now $w \times d'$, where the weight $w$ is 1 or 3. So the total changes by

$$w \times (d' - d).$$

The mistake goes unnoticed only if this change is $\equiv 0 \pmod{10}$, that is, if 10 divides $w(d' - d)$.

- If $w = 1$: 10 would have to divide $d' - d$. But $d$ and $d'$ are different digits from 0 to 9, so $d' - d$ is
  between $-9$ and 9 and not 0. It cannot be a multiple of 10.
- If $w = 3$: 10 would have to divide $3(d' - d)$. Since 3 shares no factor with 10, this happens only if 10 divides
  $d' - d$ itself (look at row 3 of the mod 10 multiplication table: $3 \times 0, 3 \times 1, \ldots, 3 \times 9$ end
  in 0, 3, 6, 9, 2, 5, 8, 1, 4, 7, a shuffle, so only $3 \times 0$ ends in 0). Again impossible.

So **every** single wrong digit is caught. Notice what made it work: both weights, 1 and 3, share no factor with 10.
A weight of 2 would fail: $2 \times 5 = 10 \equiv 0$, so changing a digit by 5 (a 1 to a 6, say) would slip through.

### Which swaps ISBN-13 misses

Now swap two neighbouring digits $a$ and $b$. One sits under weight 1 and the other under weight 3. Before the swap
they contribute $1 \times a + 3 \times b$. After, $1 \times b + 3 \times a$. The change is

$$(b + 3a) - (a + 3b) = 2a - 2b = 2(a - b).$$

This is $\equiv 0 \pmod{10}$ exactly when 5 divides $a - b$, that is, when **$a$ and $b$ differ by 5**: 0 and 5,
1 and 6, 2 and 7, 3 and 8, 4 and 9. All other swaps of different digits are caught. For example, in
978-0-306-40615-7 the neighbours 6 and 1 differ by 5. Swapping them gives 978-0-306-40165-7, whose total is 90,
still a multiple of 10: the mistake slips through.

### The Luhn check: card numbers

Bank card numbers use a cleverer rule, invented by the IBM engineer Hans Peter Luhn in the 1950s and now called the
**Luhn check**. (Canada's Social Insurance Numbers use it too.)

> Starting from the **rightmost** digit (the check digit) and moving left, leave the 1st, 3rd, 5th, ... digits
> alone and **double** the 2nd, 4th, 6th, .... If a doubled digit is 10 or more, add its two digits (which is the
> same as subtracting 9). Add everything up. The total must be $\equiv 0 \pmod{10}$.

Here is the standard example, 79927398713, with the doubled digits marked:

| Digit | 7 | 9 | 9 | 2 | 7 | 3 | 9 | 8 | 7 | 1 | 3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Doubled? | | yes | | yes | | yes | | yes | | yes | |
| Value used | 7 | 18 → 9 | 9 | 4 | 7 | 6 | 9 | 16 → 7 | 7 | 2 | 3 |

Total: $7 + 9 + 9 + 4 + 7 + 6 + 9 + 7 + 7 + 2 + 3 = 70 \equiv 0 \pmod{10}$. ✓ Valid.

### Why Luhn catches every single wrong digit

An undoubled digit changes the total by $d' - d$, never a multiple of 10, as before. For a doubled digit, look at what
each digit turns into:

| Digit $d$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Doubled value | 0 | 2 | 4 | 6 | 8 | 1 | 3 | 5 | 7 | 9 |

The bottom row is a **shuffle** of 0 to 9: no two digits give the same value. So changing a doubled digit always
changes its value, by some amount between $-9$ and 9 that is not 0, never a multiple of 10. Every single wrong digit
is caught.

(Why not simply double and keep the last digit, as in $2 \times 6 = 12 \to 2$? Because then 1 and 6 would both give 2,
and that mistake would slip through. "Add the two digits" keeps the row a shuffle.)

### Why Luhn catches almost every swap

Swap neighbours $a$ and $b$, where one of them is doubled. Write $f(d)$ for the doubled value from the table. Before,
the pair gives $f(a) + b$; after, $a + f(b)$. The swap is missed only when these are congruent mod 10, that is, when
$f(a) - a \equiv f(b) - b$. Work out $f(d) - d$ for each digit:

| Digit $d$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $f(d) - d$ (mod 10) | 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 0 |

The only two digits with the same value are **0 and 9**. So Luhn catches every swap of neighbouring digits
**except 09 ↔ 90**. That is much better than ISBN-13, which misses five kinds of swap.

### A better clock: 11

The old 10-digit ISBN used the **mod 11** clock, with weights $10, 9, 8, \ldots, 1$. Because 11 is prime, every weight
shares no factor with 11, and it catches every single wrong digit **and** every swap of two digits (neighbouring or
not). The price: the check digit can be 10, which needs a new symbol. Those ISBNs use the letter X for 10.

## Worked examples

**1. Finding an ISBN check digit.** Find the last digit of 978-1-86197-876-?.

- Products with weights 1, 3, 1, 3, ...: $9 + 21 + 8 + 3 + 8 + 18 + 1 + 27 + 7 + 24 + 7 + 18 = 151$.
- The next multiple of 10 is 160, so the check digit is $160 - 151 =$ **9**.

**2. Catching a typo.** Someone types the ISBN 978-0-306-40614-7 (a 4 instead of a 5).

- The 12th digit has weight 3. Its product drops from 15 to 12, so the total drops from 100 to 97.
- $97 \not\equiv 0 \pmod{10}$: the computer reports an error.

**3. A Luhn check digit.** Find the check digit $c$ so that 123456789$c$ passes the Luhn check.

- From the right, $c$ is not doubled; then 9 is doubled (18 → 9), 8 is not, 7 is doubled (14 → 5), 6 is not, 5 is
  doubled (10 → 1), 4 is not, 3 is doubled (6), 2 is not, 1 is doubled (2).
- Without $c$: $9 + 8 + 5 + 6 + 1 + 4 + 6 + 2 + 2 = 43$.
- To reach 50, $c =$ **7**. The full number is 1234567897.

**4. Catching a swap with Luhn.** Swap the last two digits of 79927398713 to get 79927398731.

- Now 3 is doubled (6) and 1 is not: the pair gives $6 + 1 = 7$ instead of $2 + 3 = 5$.
- The total becomes 72, not a multiple of 10. Caught.

## Try it

1. Is 978-0-14-044913-6 a correctly formed ISBN-13?
2. Find the check digit of the ISBN-13 that begins 978-0-306-40615 if, by mistake, the 0 after 978 were a 1:
   978-1-306-40615-?.
3. Explain why an ISBN-13 with weights 1 and 3 cannot catch the swap of a 2 and a 7 in neighbouring places.
4. A company wants a check digit mod 10 with weights 1 and 5. Show that this is a bad idea.
5. Is 4012 8888 8888 1881 a valid Luhn number?
6. Find the Luhn check digit for 4417 1234 5678 911?.
7. Explain, using the table of $f(d) - d$, why swapping a neighbouring 0 and 9 is not caught by Luhn.
8. Harder: the old ISBN-10 of the book in the tables is 0-306-40615-2. Check that
   $10 \times 0 + 9 \times 3 + 8 \times 0 + \cdots + 1 \times 2$ is a multiple of 11. Then explain why mod 11 with these weights catches every single wrong
   digit.

??? note "Answers"
    1. Products: $9 + 21 + 8 + 0 + 1 + 12 + 0 + 12 + 4 + 27 + 1 + 9 + 6 = 110$. $110 \equiv 0 \pmod{10}$, so **yes**.
    2. The 4th digit (weight 3) goes from 0 to 1, raising the first twelve products from 93 to 96. To reach 100 the
       check digit must be **4**.
    3. The swap changes the total by $2(a - b) = 2(2 - 7) = -10 \equiv 0 \pmod{10}$. The total stays a multiple of 10,
       so the mistake is not seen. Any two digits that differ by 5 have this problem.
    4. A digit under weight 5 that changes by an even amount (say 2 to 4) changes the total by $5 \times 2 = 10 \equiv 0$.
       So many single wrong digits would slip through. The trouble is that 5 shares the factor 5 with 10.
    5. From the right, doubling every second digit: the digits are 4 0 1 2 8 8 8 8 8 8 8 8 1 8 8 1. Undoubled (1st,
       3rd, ... from the right): 1, 8, 8, 8, 8, 8, 2, 0, sum 43. Doubled (2nd, 4th, ... from the right): 8, 1, 8, 8,
       8, 8, 1, 4 become 16 → 7, 2, 7, 7, 7, 7, 2, 8, sum 47. Total $43 + 47 = 90 \equiv 0$. **Valid.** (This is a
       well-known test number, not a real card.)
    6. Digits before the check: 4 4 1 7 1 2 3 4 5 6 7 8 9 1 1. Since the check digit is the 1st from the right, the
       digits doubled are the 2nd, 4th, ... from the right: 1, 9, 7, 5, 3, 1, 1, 4. Doubled values: 2, 9, 5, 1, 6,
       2, 2, 8, sum 35. The others (3rd, 5th, ... from the right): 1, 8, 6, 4, 2, 7, 4, sum 32. Total 67, so the
       check digit is **3** (to make 70).
    7. In the table, $f(0) - 0 = 0$ and $f(9) - 9 = 9 - 9 = 0$. Swapping is missed exactly when the two digits have
       the same value of $f(d) - d$. Directly: "0 then 9" with the 0 doubled gives $0 + 9 = 9$; "9 then 0" with the 9
       doubled gives $9 + 0 = 9$. Same total.
    8. $0 + 27 + 0 + 42 + 24 + 0 + 24 + 3 + 10 + 2 = 132 = 12 \times 11$. ✓ A single wrong digit changes the total by
       $w(d' - d)$, where $w$ is a weight from 1 to 10 and $d' - d$ is between $-10$ and 10 and not 0. Since 11 is
       prime and divides neither $w$ nor $d' - d$, it does not divide their product (this uses the fact, proved in
       [level 6](../level-6/06-unique-factorisation.md), that a prime dividing a product divides one of the factors).
       So the total is no longer a multiple of 11.

## Common mistake

**Thinking a passing number is a correct number.** A check digit catches most mistakes, not all. Two wrong digits can
cancel out, and some swaps slip through (digits that differ by 5 in ISBN-13, 09 ↔ 90 in Luhn). "Valid" only means
"no mistake of the common kinds was spotted".

**Doubling the wrong digits in Luhn.** Count from the **right**, starting with the check digit as the 1st, undoubled.
Card numbers have different lengths, so counting from the left gives the wrong positions on half of them.

## Where it leads

- Back: [The divisibility tests explained](05-divisibility-tests-explained.md) · Next level:
  [Level 6: Equations in whole numbers](../level-6/index.md), starting with
  [Bézout's identity](../level-6/01-bezout-identity.md).
- [Level 5 page](index.md) · [Number theory topic page](../index.md)
- Check digits **detect** mistakes; secret codes **hide** messages. Both run on clock arithmetic:
  [cryptography.akadian.ca](https://cryptography.akadian.ca/).
- The chance that a random mistake slips through a check is a question for [Probability](../../probability/index.md).
