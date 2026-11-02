---
title: "Euclid's algorithm"
---

# Euclid's algorithm

*Number theory · level 4, lesson 4 of 6*

## A question to start

What is the greatest common divisor of 1,071 and 462?

With the methods so far, you would factorize both numbers first. That takes some work: 1,071 = 3² × 7 × 17 and
462 = 2 × 3 × 7 × 11, so the GCD is 3 × 7 = 21. Fine for four-digit numbers. But the numbers used to keep messages
safe on the internet have **hundreds** of digits, and nobody knows a fast way to factorize numbers that big. Even the
fastest computers would take far longer than a lifetime.

Yet a computer can find the GCD of two such numbers in a tiny fraction of a second. It uses a method written down by
Euclid of Alexandria in his book the *Elements*, around 300 BC. Here it is for 1,071 and 462:

- 1,071 = 2 × 462 + 147
- 462 = 3 × 147 + 21
- 147 = 7 × 21 + 0

The answer is the last remainder before 0: **21**. Three lines, no factorizing. This lesson explains why it works.

## The idea

### The key fact: subtracting does not change the common divisors

Suppose a number $d$ divides both 42 and 15. Then $d$ also divides 42 − 15 = 27.

Why? If 42 is a pile of $d$s and 15 is a pile of $d$s, then taking 15 away from 42 removes whole $d$s and leaves whole
$d$s. (With 3: 42 is fourteen 3s, 15 is five 3s, and 27 is nine 3s.)

And it works backwards too. If $d$ divides 15 and 27, then $d$ divides 15 + 27 = 42.

So the pair (42, 15) and the pair (27, 15) have **exactly the same common divisors**. If they have the same list of
common divisors, they have the same greatest one:

$$\gcd(42, 15) = \gcd(27, 15).$$

**In general: $\gcd(a, b) = \gcd(a - b, b)$.** You can replace the bigger number by the difference, and the GCD does
not change. But the numbers get smaller, which makes the problem easier.

### Keep subtracting

Do it again and again, always taking the smaller number from the bigger:

$$\gcd(42, 15) = \gcd(27, 15) = \gcd(12, 15) = \gcd(12, 3) = \gcd(9, 3) = \gcd(6, 3) = \gcd(3, 3).$$

And $\gcd(3, 3) = 3$, since the biggest number dividing 3 is 3. So $\gcd(42, 15) = 3$.

(Check: 42 = 2 × 3 × 7 and 15 = 3 × 5 share only a 3. ✓) This subtracting version is essentially the way Euclid
himself described the method, in Book VII of the *Elements*.

### The picture: cutting squares from a rectangle

There is a lovely way to see this. Take a rectangle 42 wide and 15 tall. Cut off the biggest square you can, 15 by 15.
That is the subtraction 42 − 15 = 27: what is left is a rectangle 27 by 15. Keep cutting off the biggest square from
what is left.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 175" role="img" aria-label="A 42 by 15 rectangle cut into two 15 by 15 squares, then one 12 by 12 square, then four 3 by 3 squares that fill the last strip exactly">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="20" width="120" height="120" fill="#eea66f" fill-opacity="0.6"/>
    <rect x="140" y="20" width="120" height="120" fill="#eea66f" fill-opacity="0.6"/>
    <rect x="260" y="20" width="96" height="96" fill="#9cc9ea"/>
    <rect x="260" y="116" width="24" height="24" fill="#7ccf9a"/><rect x="284" y="116" width="24" height="24" fill="#7ccf9a"/>
    <rect x="308" y="116" width="24" height="24" fill="#7ccf9a"/><rect x="332" y="116" width="24" height="24" fill="#7ccf9a"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="80" y="85">15</text><text x="200" y="85">15</text><text x="308" y="73">12</text>
  </g>
  <text x="188" y="164" font-size="12" fill="currentColor" text-anchor="middle">42 × 15: two 15-squares, one 12-square, four 3-squares. gcd = 3</text>
</svg>
</div>

- Two 15-squares fit (42 = 2 × 15 + 12), leaving a 12-by-15 rectangle.
- One 12-square fits (15 = 1 × 12 + 3), leaving a 12-by-3 strip.
- Four 3-squares fit exactly (12 = 4 × 3 + 0). Nothing is left.

The **smallest square**, 3 by 3, is the GCD. And look: the 3-squares would tile the **whole** original rectangle. They
fit the 12-square (4 by 4 of them), so they fit the 15-squares too (each 15 side is 12 + 3). The smallest square is the
biggest square that tiles the whole rectangle, which is just what the GCD meant in the floor-tiles problem of
[lesson 1](01-greatest-common-divisor.md).

### Speeding it up with division

Subtracting 15 from 42 twice, then subtracting 12 from 15 once, ... is slow when one number is much bigger than the
other. To find gcd(1,000, 7) by subtracting you would take 7 away 142 times!

But "take away 15 as many times as you can" is just **division with remainder**. 42 ÷ 15 = 2 remainder 12, which says
42 = 2 × 15 + 12. The remainder 12 is exactly what is left after all the subtracting. So:

**$\gcd(a, b) = \gcd(b, r)$, where $r$ is the remainder when $a$ is divided by $b$.**

### Euclid's algorithm

An **algorithm** is a recipe: a list of steps that you follow exactly, and that always finishes with the answer.

**To find the GCD of two numbers:**

1. Divide the bigger by the smaller, and find the remainder.
2. Replace the pair with (the smaller number, the remainder).
3. Repeat until the remainder is 0.
4. The **last remainder that was not 0** is the GCD.

### Why it always finishes

Each remainder is **smaller** than the number you divided by (if it were not, you could have subtracted once more). So
the remainders get smaller every step: for 1,071 and 462 they are 147, then 21, then 0. Whole numbers that keep getting
smaller cannot go on forever; they must reach 0. So the algorithm always stops.

### Why the answer is right

Every step keeps the GCD the same: $\gcd(1071, 462) = \gcd(462, 147) = \gcd(147, 21) = \gcd(21, 0)$. And the last one
is easy. Every number divides 0 (0 is 0 lots of anything), so the common divisors of 21 and 0 are just the divisors
of 21, and the biggest is 21 itself.

### How fast is it?

The slowest pairs for their size turn out to be neighbours in the **Fibonacci sequence** 1, 1, 2, 3, 5, 8, 13, 21, 34,
55, 89, 144, ..., where each number is the sum of the two before. For 89 and 55, every quotient is 1 until the very
end, and it takes 9 divisions. In 1844 the French mathematician Gabriel Lamé proved that the number of divisions is
never more than **five times the number of digits** of the smaller number. So for numbers with 300 digits, at most
1,500 divisions: nothing for a computer. That is why Euclid's algorithm is used inside the codes that protect
messages online (see [cryptography.akadian.ca](https://cryptography.akadian.ca/)).

## Worked examples

**1. gcd(1071, 462), in a table.**

| Divide | Quotient | Remainder |
| --- | --- | --- |
| 1,071 ÷ 462 | 2 | 1,071 − 924 = 147 |
| 462 ÷ 147 | 3 | 462 − 441 = 21 |
| 147 ÷ 21 | 7 | 147 − 147 = 0 |

Last non-zero remainder: **21**. Check: 1,071 = 21 × 51 and 462 = 21 × 22, and 51 = 3 × 17 and 22 = 2 × 11 are coprime.

**2. gcd(252, 198).**

- 252 = 1 × 198 + 54
- 198 = 3 × 54 + 36
- 54 = 1 × 36 + 18
- 36 = 2 × 18 + 0

The GCD is **18**. (252 = 18 × 14, 198 = 18 × 11.)

**3. gcd(1001, 221).**

- 1,001 = 4 × 221 + 117
- 221 = 1 × 117 + 104
- 117 = 1 × 104 + 13
- 104 = 8 × 13 + 0

The GCD is **13**. Without factorizing, we have found that 1,001 and 221 share the prime 13. (Indeed 1,001 = 7 × 11 ×
13 and 221 = 13 × 17.)

**4. A coprime pair.** gcd(89, 55):

89 = 1 × 55 + 34; 55 = 1 × 34 + 21; 34 = 1 × 21 + 13; 21 = 1 × 13 + 8; 13 = 1 × 8 + 5; 8 = 1 × 5 + 3; 5 = 1 × 3 + 2;
3 = 1 × 2 + 1; 2 = 2 × 1 + 0.

The GCD is **1**: 89 and 55 are coprime. The remainders are the Fibonacci numbers, walking down.

**5. LCM and fractions from Euclid.** Using gcd(1071, 462) = 21:

- $\operatorname{lcm}(1071, 462) = \dfrac{1071 \times 462}{21} = 1071 \times 22 = 23{,}562$ (from [lesson 3](03-gcd-times-lcm.md)).
- $\dfrac{462}{1071} = \dfrac{462 \div 21}{1071 \div 21} = \dfrac{22}{51}$ in lowest terms.

## Try it

1. Find gcd(48, 18) by the subtracting method. Then check it with the dividing method.
2. Use Euclid's algorithm to find gcd(391, 299).
3. Use Euclid's algorithm to find gcd(2024, 1001).
4. Write $\frac{1365}{2002}$ in lowest terms, using Euclid's algorithm to find the GCD.
5. Draw a 21-by-13 rectangle and cut it into squares as in the picture. What sizes of square do you get, and what is
   the GCD?
6. Explain why gcd(a, 0) = a for any whole number a bigger than 0.
7. Use Euclid's algorithm and the GCD × LCM fact to find lcm(391, 299).
8. How many divisions does Euclid's algorithm take for 144 and 89? Check that this is within Lamé's limit.

??? note "Answers"
    1. Subtracting: (48, 18) → (30, 18) → (12, 18) → (12, 6) → (6, 6). So the GCD is **6**. Dividing: 48 = 2 × 18 + 12,
       18 = 1 × 12 + 6, 12 = 2 × 6 + 0. Last non-zero remainder 6. ✓
    2. 391 = 1 × 299 + 92; 299 = 3 × 92 + 23; 92 = 4 × 23 + 0. GCD **23**. (391 = 17 × 23, 299 = 13 × 23.)
    3. 2,024 = 2 × 1,001 + 22; 1,001 = 45 × 22 + 11; 22 = 2 × 11 + 0. GCD **11**.
    4. 2,002 = 1 × 1,365 + 637; 1,365 = 2 × 637 + 91; 637 = 7 × 91 + 0. GCD 91. So
       $\frac{1365}{2002} = \frac{1365 \div 91}{2002 \div 91} = \frac{15}{22}$.
    5. Squares of side 13 (one), 8 (one), 5 (one), 3 (one), 2 (one), then 1 (two). The smallest square is 1 by 1, so
       the GCD is **1**: 21 and 13 are coprime. (21 = 13 + 8, 13 = 8 + 5, 8 = 5 + 3, 5 = 3 + 2, 3 = 2 + 1, 2 = 2 × 1.)
    6. Every whole number divides 0, because 0 = 0 × d. So the common divisors of a and 0 are just the divisors of a,
       and the greatest of those is a itself.
    7. gcd(391, 299) = 23 from question 2. So lcm = 391 × 299 ÷ 23 = 391 × 13 = **5,083**.
    8. 144 = 1 × 89 + 55, then the same nine steps as for 89 and 55: **10 divisions** in all. The smaller number, 89,
       has 2 digits, and 5 × 2 = 10. So it is exactly at Lamé's limit.

## Common mistake

**Giving the last remainder (0) or the last quotient as the answer.** The GCD is the last remainder **before** the 0.
For 1,071 and 462 the steps end "147 = 7 × 21 + 0", and the GCD is 21, not 0 and not 7.

**Pairing the wrong numbers in the next step.** After $a = q \times b + r$, the next pair is **(b, r)**: the old divisor
and the new remainder. Not (a, r), and not (q, r).

## Where it leads

- Back: [GCD × LCM = the product](03-gcd-times-lcm.md) · Next: [There is no biggest prime](05-no-biggest-prime.md),
  another idea from Euclid's *Elements*.
- [Level 4 page](index.md) · [Number theory topic page](../index.md)
- The Fibonacci numbers, which make Euclid slowest: [Patterns](../../patterns/index.md).
- Run the algorithm **backwards** and you can write the GCD as a mix of the two numbers, like 21 = 462 × 7 − 1,071 × 3:
  that is Bézout's identity in [level 6](../level-6/index.md), and it is the step that makes RSA codes work.
- At university the same algorithm works for polynomials, and gives them unique factorization too:
  [U of T MAT240, Unit 9: Polynomials, UFD & Resultants](../../../uoft/MAT240H1/unit09.md).
