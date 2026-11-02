---
title: "Powers"
---

# Powers

*Numbers · level 5, lesson 3 of 7*

## A question to start

Take a sheet of paper and fold it in half. It is now 2 layers thick. Fold again: 4 layers. Again: 8 layers. Each fold
doubles the thickness. Ordinary paper is about 0.1 mm thick. If you could fold it 42 times (you cannot: real paper
gives up after about seven folds), how thick would it be?

Make a guess: a metre? The height of a house? The answer is about **440 000 km**, further than the Moon, which is
about 384 000 km away. Forty-two doublings make a number of layers that is over four trillion. Repeated multiplying
grows astonishingly fast, and it needs its own short way of writing. That is what powers are.

## The idea

### Powers: a short way to write repeated multiplying

Multiplication is a short way to write repeated adding: $5 + 5 + 5 = 3 \times 5$. In the same way, a **power** is a
short way to write repeated multiplying:

$$5 \times 5 \times 5 = 5^3$$

The big number at the bottom, 5, is the **base**: the number being multiplied. The small raised number, 3, is the
**exponent** (also called the **index** or the **power**): how many copies of the base are multiplied together. We
read $5^3$ as "five to the power three", or "five cubed".

$$2^5 = 2 \times 2 \times 2 \times 2 \times 2 = 32 \qquad 10^4 = 10 \times 10 \times 10 \times 10 = 10\,000$$

$a^1$ is just $a$ (one copy, nothing to multiply).

### Squares and cubes as pictures

The power 2 and the power 3 have special names, and both come from shapes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 160" role="img" aria-label="Left: a square made of 3 rows of 3 small squares, labelled 3 squared equals 9. Right: a cube made of 2 by 2 by 2 small cubes, labelled 2 cubed equals 8">
  <g stroke="currentColor" stroke-width="1.5" fill="#9cc9ea">
    <rect x="30" y="20" width="35" height="35"/><rect x="65" y="20" width="35" height="35"/><rect x="100" y="20" width="35" height="35"/>
    <rect x="30" y="55" width="35" height="35"/><rect x="65" y="55" width="35" height="35"/><rect x="100" y="55" width="35" height="35"/>
    <rect x="30" y="90" width="35" height="35"/><rect x="65" y="90" width="35" height="35"/><rect x="100" y="90" width="35" height="35"/>
  </g>
  <text x="82" y="148" font-size="13" text-anchor="middle" fill="currentColor">3² = 3 × 3 = 9</text>
  <g stroke="currentColor" stroke-width="1.5">
    <polygon points="230,50 310,50 334,30 254,30" fill="#7ccf9a"/>
    <polygon points="310,50 310,130 334,110 334,30" fill="#eea66f"/>
    <rect x="230" y="50" width="80" height="80" fill="#9cc9ea"/>
    <line x1="270" y1="50" x2="270" y2="130"/><line x1="230" y1="90" x2="310" y2="90"/>
    <line x1="242" y1="40" x2="322" y2="40"/><line x1="270" y1="50" x2="294" y2="30"/>
    <line x1="310" y1="90" x2="334" y2="70"/><line x1="322" y1="40" x2="322" y2="120"/>
  </g>
  <text x="282" y="148" font-size="13" text-anchor="middle" fill="currentColor">2³ = 2 × 2 × 2 = 8</text>
</svg>
</div>

- $3^2$ ("three **squared**") is the number of unit squares in a square 3 units on each side: 9.
- $2^3$ ("two **cubed**") is the number of unit cubes in a cube 2 units along each edge: 8.

The first few squares are $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$ and the first few cubes are $1, 8, 27, 64, 125$.
(Notice 64 is in both lists: $8^2 = 4^3 = 64$.) Powers beyond 3 have no picture in our three-dimensional world, but
they make perfect sense as repeated multiplying.

### Powers of 10

Powers of 10 are the backbone of place value:

| $10^1$ | $10^2$ | $10^3$ | $10^4$ | $10^5$ | $10^6$ | $10^9$ |
| --- | --- | --- | --- | --- | --- | --- |
| 10 | 100 | 1000 | 10 000 | 100 000 | 1 000 000 (a million) | 1 000 000 000 (a billion) |

The exponent counts the zeros after the 1. Each place in a number is worth a power of 10: in 3 507, the 3 means
$3 \times 10^3$ and the 5 means $5 \times 10^2$. You will use this a lot in [scientific notation](05-scientific-notation.md).

### Negative bases and brackets

A negative base works with the sign rules from lesson 1: each factor is one flip.

$$(-2)^3 = (-2) \times (-2) \times (-2) = -8 \qquad (-2)^4 = 16$$

An **odd** power of a negative number is negative; an **even** power is positive.

Be careful with brackets. By the order of operations (level 4), powers come before the minus sign in front:

$$-3^2 = -(3 \times 3) = -9 \qquad \text{but} \qquad (-3)^2 = (-3) \times (-3) = 9$$

Fractions work too: $\left(\tfrac23\right)^3 = \tfrac23 \times \tfrac23 \times \tfrac23 = \tfrac{8}{27}$.

### The laws of exponents: write out the factors

There are a few short rules for working with powers. You do not need to memorise them as magic, because each one
explains itself the moment you **write out the factors**. In all of them, $a$ is any number and $m$, $n$ are positive
whole numbers.

**Law 1. Multiplying powers of the same base: add the exponents.**

$$2^3 \times 2^4 = \underbrace{(2 \times 2 \times 2)}_{3} \times \underbrace{(2 \times 2 \times 2 \times 2)}_{4} = 2^7$$

Three 2s and four 2s make seven 2s. In general, $m$ copies and $n$ copies make $m + n$ copies:

$$a^m \times a^n = a^{m+n}$$

**Law 2. Dividing powers of the same base: subtract the exponents.**

$$\frac{2^6}{2^2} = \frac{2 \times 2 \times 2 \times 2 \times 2 \times 2}{2 \times 2} = 2^4$$

Each 2 on the bottom cancels one 2 on top, leaving $6 - 2 = 4$ of them. In general (for now, with $m$ bigger than
$n$ and $a$ not 0):

$$\frac{a^m}{a^n} = a^{m-n}$$

**Law 3. A power of a power: multiply the exponents.**

$$(2^3)^4 = 2^3 \times 2^3 \times 2^3 \times 2^3 = 2^{3+3+3+3} = 2^{12}$$

Four groups of three 2s is $4 \times 3 = 12$ twos. In general

$$(a^m)^n = a^{mn}$$

**Law 4. A power of a product: give the power to each factor.**

$$(2 \times 5)^3 = (2 \times 5)(2 \times 5)(2 \times 5) = (2 \times 2 \times 2)(5 \times 5 \times 5) = 2^3 \times 5^3$$

We can regroup like this because the order of multiplying does not matter. In general $(ab)^n = a^n b^n$, and in the
same way for a fraction, $\left(\tfrac{a}{b}\right)^n = \tfrac{a^n}{b^n}$.

### What the laws do NOT say

The laws are about **multiplying and dividing**. There are no such laws for adding:

- $2^3 + 2^4 = 8 + 16 = 24$, which is not $2^7 = 128$.
- $(2 + 3)^2 = 5^2 = 25$, which is not $2^2 + 3^2 = 13$.

And Law 1 needs the **same base**: $2^3 \times 3^2 = 8 \times 9 = 72$, and there is no way to write it as one power.

## Worked examples

**1. Evaluate** $5^3$, $(-2)^5$ and $\left(\tfrac34\right)^2$.

1. $5^3 = 5 \times 5 \times 5 = 125$.
2. $(-2)^5$: the size is $2^5 = 32$, and an odd power of a negative is negative, so **$-32$**.
3. $\left(\tfrac34\right)^2 = \tfrac{3^2}{4^2} = \tfrac{9}{16}$.

**2. Use the laws.** Write each as a single power, then find its value.

1. $3^4 \times 3^5 = 3^{4+5} = 3^9 = 19\,683$.
2. $\dfrac{7^8}{7^5} = 7^{8-5} = 7^3 = 343$.
3. $(2^3)^4 = 2^{3 \times 4} = 2^{12} = 4096$.

**3. Change the base.** Write $4^3 \times 8^2$ as a power of 2.

1. $4 = 2^2$ and $8 = 2^3$.
2. So $4^3 = (2^2)^3 = 2^6$ and $8^2 = (2^3)^2 = 2^6$ (Law 3).
3. $2^6 \times 2^6 = 2^{12} = 4096$ (Law 1).

**4. A clever product.** Work out $2^5 \times 5^5$ without a calculator.

By Law 4 backwards, $2^5 \times 5^5 = (2 \times 5)^5 = 10^5 = 100\,000$. Pairing each 2 with a 5 makes a 10.

**5. Which is bigger, $2^{30}$ or a billion ($10^9$)?**

1. $2^{10} = 1024$, a little more than $1000 = 10^3$.
2. $2^{30} = (2^{10})^3 = 1024^3$ (Law 3), and $1000^3 = 10^9$.
3. Since $1024 > 1000$, $2^{30}$ is bigger. (In fact $2^{30} = 1\,073\,741\,824$.) The fact that $2^{10}$ is close to
   1000 is why computer memory sizes like "kilo" and "mega" are slightly bigger than a thousand and a million.

## Try it

1. Evaluate: (a) $3^4$ (b) $(-5)^3$ (c) $\left(\tfrac12\right)^5$ (d) $-2^4$
2. Write as a single power: (a) $5^3 \times 5^6$ (b) $a^4 \times a^7$ (c) $10^2 \times 10^3 \times 10$
3. Work out $\dfrac{6^9}{6^7}$ by first writing it as a single power.
4. Work out $(3^2)^3$. Is it the same as $3^{2^3}$, which means $3^8$?
5. Work out $4^3 \times 25^3$ without a calculator.
6. Write $9^4$ as a power of 3, and $27^2$ as a power of 3.
7. Which is bigger, $3^{20}$ or $2^{30}$? Explain without working them out. (Hint: write both as tenth powers.)
8. What is the last digit of $2^{100}$? (Hint: look at the last digits of $2^1, 2^2, 2^3, \ldots$)

??? note "Answers"
    1. (a) $81$. (b) $-125$ (odd power of a negative). (c) $\tfrac{1}{32}$. (d) $-16$: the power comes first, so it
       is $-(2^4)$.
    2. (a) $5^9$. (b) $a^{11}$. (c) $10 = 10^1$, so $10^{2+3+1} = 10^6$.
    3. $6^{9-7} = 6^2 = 36$.
    4. $(3^2)^3 = 3^6 = 729$. It is **not** the same as $3^8 = 6561$. A power of a power multiplies the exponents
       ($2 \times 3 = 6$); a "tower" $3^{2^3}$ means 3 to the power $2^3 = 8$.
    5. $4^3 \times 25^3 = (4 \times 25)^3 = 100^3 = 1\,000\,000$.
    6. $9 = 3^2$, so $9^4 = (3^2)^4 = 3^8$. $27 = 3^3$, so $27^2 = 3^6$.
    7. $3^{20} = (3^2)^{10} = 9^{10}$ and $2^{30} = (2^3)^{10} = 8^{10}$. Ten 9s multiplied make more than ten 8s
       multiplied, so $3^{20}$ is bigger. (Values: $3^{20} = 3\,486\,784\,401$ and $2^{30} = 1\,073\,741\,824$.)
    8. The last digits go $2, 4, 8, 6, 2, 4, 8, 6, \ldots$, repeating every 4, because the last digit of a product only
       depends on the last digits being multiplied. $2^4, 2^8, 2^{12}, \ldots$ all end in 6. Since 100 is a multiple
       of 4, $2^{100}$ ends in **6**.

## Common mistake

**Multiplying the base by the exponent.** $2^3$ is $2 \times 2 \times 2 = 8$, not $2 \times 3 = 6$. The exponent
counts how many copies to multiply; it is not a number to multiply by.

**Using the laws on sums.** $2^3 + 2^4 \ne 2^7$, and $(a + b)^2 \ne a^2 + b^2$. Write out the factors if you are not
sure: the laws only come from multiplying.

## Where it leads

- Back: [Rational numbers](02-rational-numbers.md) · Next: [Zero and negative exponents](04-zero-negative-exponents.md),
  where we ask what $2^0$ and $2^{-3}$ could mean.
- [Level 5 page](index.md) · [Numbers topic page](../index.md)
- Repeated doubling is a geometric sequence: see [Patterns](../../patterns/index.md).
- Writing a number as a product of prime powers, like $72 = 2^3 \times 3^2$: [Number theory](../../number-theory/index.md).
- Squares and cubes as areas and volumes: [Measurement](../../measurement/index.md). Powers with letters, and
  $(a + b)^2 = a^2 + 2ab + b^2$: [Algebra](../../algebra/index.md).
