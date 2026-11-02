---
title: "GCD × LCM = the product"
---

# GCD × LCM = the product

*Number theory · level 4, lesson 3 of 6*

## A question to start

Take two numbers, 12 and 18. Their greatest common divisor is 6, and their least common multiple is 36. Now multiply:

- GCD × LCM = 6 × 36 = **216**.
- The two numbers multiplied: 12 × 18 = **216**.

The same! Try 20 and 45: the GCD is 5, the LCM is 180, and 5 × 180 = 900 = 20 × 45. Try any two whole numbers you like.
It always works.

Is it a coincidence that keeps happening, or is there a reason? There is a reason, and once you see it, it is hard to
imagine it could be any other way. You will see it two ways: with the two-circle picture of primes, and with a
rectangle.

## The idea

### The fact

For any two whole numbers $a$ and $b$ (bigger than 0):

$$\gcd(a, b) \times \operatorname{lcm}(a, b) = a \times b.$$

Here $a$ and $b$ are letters standing for "any number". Writing the fact with letters is a short way of saying that it
works for every pair, not just for 12 and 18.

### Reason 1: the two circles

Put the primes of 12 and 18 into overlapping circles, as in [lesson 1](01-greatest-common-divisor.md):

$12 = 2 \times 2 \times 3$ and $18 = 2 \times 3 \times 3$.

They share one 2 and one 3, so the overlap holds 2 and 3. What is left of 12 is one 2; what is left of 18 is one 3.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 210" role="img" aria-label="Two overlapping circles. The left circle is 12, the right is 18. The left part alone holds 2, the overlap holds 2 and 3, the right part alone holds 3">
  <circle cx="135" cy="105" r="88" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="245" cy="105" r="88" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="95" y="20">12</text>
    <text x="285" y="20">18</text>
    <text x="95" y="110">2</text>
    <text x="190" y="95">2</text><text x="190" y="125">3</text>
    <text x="290" y="110">3</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="85" y="140">left</text><text x="190" y="160">middle</text><text x="295" y="140">right</text>
  </g>
  <text x="190" y="205" font-size="12" fill="currentColor" text-anchor="middle">12 = left × middle · 18 = middle × right</text>
</svg>
</div>

Give the three parts names: **left** = 2, **middle** = 2 × 3 = 6, **right** = 3. Then:

- 12 = left × middle = 2 × 6.
- 18 = middle × right = 6 × 3.
- The GCD is the overlap: **middle** = 6.
- The LCM is everything, with the overlap counted once: **left × middle × right** = 2 × 6 × 3 = 36.

Now multiply the two numbers:

12 × 18 = (left × middle) × (middle × right).

And multiply the GCD and LCM:

GCD × LCM = middle × (left × middle × right).

Both are the same four things multiplied: left, middle, middle, right. Order does not matter in multiplication, so
they are equal. That is the whole reason. **The product of the two numbers counts the shared part twice. So does
GCD × LCM: once in the GCD and once in the LCM.**

### The same reason, one prime at a time

Here is the reason in terms of powers. Look at one prime, say 2. It appears in 12 with power 2 and in 18 with power 1.

- The GCD takes the **smaller** power: 1.
- The LCM takes the **larger** power: 2.
- Together, GCD × LCM has $2^{1 + 2} = 2^3$, and 12 × 18 also has $2^{2 + 1} = 2^3$.

Smaller + larger is always the same as the two powers added, whichever is which. That happens for every prime, so
the two sides have exactly the same primes with exactly the same powers. By the "one recipe" rule, they are the same
number.

### Reason 2: a rectangle

Draw a rectangle 12 units tall and 18 units wide. Its area is 12 × 18 = 216. Since 6 divides both sides, you can cut it
exactly into squares 6 by 6. There are 12 ÷ 6 = 2 rows and 18 ÷ 6 = 3 columns: 6 squares.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 130" role="img" aria-label="A 12 by 18 rectangle cut into six 6 by 6 squares, two rows of three; the same six squares laid in a single row make a strip 6 tall and 36 long">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="20" width="36" height="36" fill="#eea66f"/><rect x="56" y="20" width="36" height="36" fill="#9cc9ea"/>
    <rect x="92" y="20" width="36" height="36" fill="#7ccf9a"/>
    <rect x="20" y="56" width="36" height="36" fill="#9cc9ea"/><rect x="56" y="56" width="36" height="36" fill="#7ccf9a"/>
    <rect x="92" y="56" width="36" height="36" fill="#eea66f"/>
    <rect x="160" y="38" width="36" height="36" fill="#eea66f"/><rect x="196" y="38" width="36" height="36" fill="#9cc9ea"/>
    <rect x="232" y="38" width="36" height="36" fill="#7ccf9a"/><rect x="268" y="38" width="36" height="36" fill="#9cc9ea"/>
    <rect x="304" y="38" width="36" height="36" fill="#7ccf9a"/><rect x="340" y="38" width="36" height="36" fill="#eea66f"/>
  </g>
  <path d="M 135 56 L 152 56" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <path d="M 147 51 L 153 56 L 147 61" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="74" y="112">12 tall, 18 wide</text>
    <text x="268" y="96">6 tall, 6 × 6 = 36 long</text>
  </g>
</svg>
</div>

Lay the six squares in a single row instead. You get a strip **6 tall** and 6 × 6 = **36 long**. The height is the GCD,
and the length is the LCM! The area has not changed, so

GCD × LCM = 6 × 36 = 216 = 12 × 18.

Why is the length the LCM? The number of squares is 2 × 3, where 2 = 12 ÷ 6 and 3 = 18 ÷ 6 share no factor (dividing by
the GCD always leaves coprime numbers). So the length is 6 × 2 × 3, which is 12 × 3 and also 18 × 2: a multiple of
both. And because 2 and 3 are coprime, nothing smaller will do. It is the LCM.

### The same idea with letters

This picture can be turned into algebra that works for every pair. Write $g = \gcd(a, b)$. Then $a = g \times m$ and
$b = g \times n$, where $m$ and $n$ are coprime (the left and right parts). The LCM is $g \times m \times n$ (left,
middle and right). So

$$\gcd(a, b) \times \operatorname{lcm}(a, b) = g \times (g \times m \times n) = (g \times m) \times (g \times n) = a \times b.$$

### What it is good for

**Finding the LCM from the GCD.** If you know the GCD, the LCM is

$$\operatorname{lcm}(a, b) = \frac{a \times b}{\gcd(a, b)}.$$

This matters because in [the next lesson](04-euclids-algorithm.md) you will learn to find the GCD of huge numbers
quickly, without factorizing. With this formula you then get the LCM quickly too.

**Finding a missing number.** If you know one number, the GCD and the LCM, you can find the other number.

### Careful: only two numbers

The fact is about **two** numbers. For three numbers it usually fails. For 2, 4 and 8: the GCD is 2, the LCM is 8, so
GCD × LCM = 16. But 2 × 4 × 8 = 64. With three numbers, a prime shared by all three is counted three times in the
product, but only twice in GCD × LCM.

## Worked examples

**1. Check it for 20 and 45.**

$20 = 2^2 \times 5$ and $45 = 3^2 \times 5$. GCD: shared prime 5, so 5. LCM: $2^2 \times 3^2 \times 5 = 180$. GCD × LCM
= 5 × 180 = 900, and 20 × 45 = 900. ✓

**2. LCM the fast way.** Find $\operatorname{lcm}(84, 60)$, knowing $\gcd(84, 60) = 12$.

$$\operatorname{lcm}(84, 60) = \frac{84 \times 60}{12} = 84 \times 5 = 420.$$

(Divide first to keep the numbers small: 60 ÷ 12 = 5.)

**3. A missing number.** Two numbers have GCD 6 and LCM 72. One of them is 18. Find the other.

The product of the two numbers is 6 × 72 = 432. So the other is 432 ÷ 18 = **24**. Check: $18 = 2 \times 3^2$ and
$24 = 2^3 \times 3$, so the GCD is $2 \times 3 = 6$ and the LCM is $2^3 \times 3^2 = 72$. ✓

**4. All the pairs.** Find every pair of numbers with GCD 6 and LCM 72.

Write the numbers as $6 \times m$ and $6 \times n$, with $m$ and $n$ coprime. The LCM is $6 \times m \times n = 72$, so
$m \times n = 12$. The ways to write 12 as a product of two coprime numbers are 1 × 12 and 3 × 4. (2 × 6 does not
count: 2 and 6 share a 2.) So the pairs are

- $6 \times 1 = 6$ and $6 \times 12 = 72$,
- $6 \times 3 = 18$ and $6 \times 4 = 24$.

Check the first: $\gcd(6, 72) = 6$ and $\operatorname{lcm}(6, 72) = 72$. ✓

**5. Coprime numbers.** If $a$ and $b$ are coprime, the GCD is 1, so the formula says
$\operatorname{lcm}(a, b) = a \times b$. That is the rule from [lesson 2](02-least-common-multiple.md) ("coprime: just multiply"), now as a special
case of today's fact.

## Try it

1. Check the fact for 15 and 25.
2. Given $\gcd(56, 98) = 14$, find $\operatorname{lcm}(56, 98)$.
3. Two numbers have GCD 4 and LCM 48. One is 16. Find the other.
4. Can two numbers have GCD 5 and LCM 32? Explain.
5. The product of two numbers is 2,160 and their GCD is 12. Find their LCM. Then find every possible pair.
6. Two coprime numbers multiply to 91. What is their LCM?
7. Find all pairs of numbers with GCD 10 and LCM 300.
8. Show with an example that $\gcd(a, b, c) \times \operatorname{lcm}(a, b, c)$ need not equal $a \times b \times c$, and
   explain what goes wrong.

??? note "Answers"
    1. $15 = 3 \times 5$, $25 = 5^2$. GCD 5, LCM $3 \times 5^2 = 75$. 5 × 75 = 375 and 15 × 25 = 375. ✓
    2. $\frac{56 \times 98}{14} = 56 \times 7 = 392$.
    3. 4 × 48 = 192, and 192 ÷ 16 = **12**. Check: gcd(16, 12) = 4 and lcm(16, 12) = 48. ✓
    4. **No.** The GCD divides both numbers, and both numbers divide the LCM, so the GCD must divide the LCM. But 5
       does not divide 32.
    5. LCM = 2,160 ÷ 12 = **180**. Write the numbers as 12m and 12n with m and n coprime and m × n = 180 ÷ 12 = 15.
       Coprime pairs: 1 × 15 and 3 × 5. So the pairs are **12 and 180**, and **36 and 60**.
    6. Coprime numbers have GCD 1, so the LCM is the product: **91**. (The numbers are 7 and 13, or 1 and 91.)
    7. Write them as 10m and 10n with m and n coprime and m × n = 300 ÷ 10 = 30 = 2 × 3 × 5. Each of the primes 2, 3,
       5 must go wholly to m or to n. The splits are 1 × 30, 2 × 15, 3 × 10, 5 × 6. So the pairs are **10 and 300,
       20 and 150, 30 and 100, 50 and 60**.
    8. For 2, 4, 8: GCD 2, LCM 8, product of GCD and LCM 16, but 2 × 4 × 8 = 64. The prime 2 appears in all three
       numbers. The product of the three numbers counts the shared part three times, but GCD × LCM only twice.

## Common mistake

**Using the formula for three numbers.** GCD × LCM = product is true for **two** numbers. For three or more it is
usually false (see question 8).

**Dividing by the wrong thing.** The LCM is the product **divided by** the GCD: not multiplied by it, and not
divided by anything else. A quick check: the LCM must be at least as big as the bigger
number, and the GCD at most as big as the smaller one.

## Where it leads

- Back: [Least common multiple](02-least-common-multiple.md) · Next: [Euclid's algorithm](04-euclids-algorithm.md), to
  find the GCD of big numbers without factorizing.
- [Level 4 page](index.md) · [Number theory topic page](../index.md)
- Writing a fact with letters so that it covers every case is the heart of [Algebra](../../algebra/index.md).
- The rectangle cut into squares comes back in the next lesson, where Euclid cuts squares of different sizes.
- Areas of rectangles: [Measurement](../../measurement/index.md).
