---
title: "Master: Powers, roots and the real numbers"
---

# Master: Powers, roots and the real numbers

*Numbers · step 4 of 5*

## A question to start

A square has an area of exactly 2 square metres. How long is each side?

It must be a bit more than 1.4 m, since $1.4 \times 1.4 = 1.96$. And a bit less than 1.42 m, since
$1.42 \times 1.42 = 2.0164$. A calculator says 1.41421356... and keeps going. Here is the surprise: the digits
**never** stop and **never** fall into a repeating pattern. This number, $\sqrt2$, cannot be written as any
fraction at all. By the end of this page you will be able to prove it.

## The idea

### Powers

A **power** is a short way to write the same number multiplied by itself:

$$2^5 = 2 \times 2 \times 2 \times 2 \times 2 = 32$$

The 2 at the bottom is the **base**; the small raised 5 is the **exponent** (or power), and it says how many 2s are
multiplied. $3^2 = 9$ is read "three squared", $3^3 = 27$ is "three cubed", and $3^4 = 81$ is "three to the power 4".

### The rules of exponents

Write the powers out in full and the rules explain themselves.

**Multiplying, same base: add the exponents.** $2^3 \times 2^4 = (2\times2\times2)\times(2\times2\times2\times2) = 2^7$.

**Dividing, same base: subtract the exponents.** $\dfrac{2^6}{2^2}$: two of the six 2s on top cancel with the two
on the bottom, leaving $2^4$.

**A power of a power: multiply the exponents.** $(2^3)^2 = 2^3 \times 2^3 = 2^6$.

In symbols, for any base $a$ that is not zero:

$$a^m \times a^n = a^{m+n} \qquad \frac{a^m}{a^n} = a^{m-n} \qquad (a^m)^n = a^{mn}$$

### Zero and negative exponents

What could $2^0$ or $2^{-3}$ mean? Look at a pattern. Each step to the right divides by 2:

| $2^3$ | $2^2$ | $2^1$ | $2^0$ | $2^{-1}$ | $2^{-2}$ | $2^{-3}$ |
| --- | --- | --- | --- | --- | --- | --- |
| 8 | 4 | 2 | 1 | $\tfrac12$ | $\tfrac14$ | $\tfrac18$ |

Keeping the pattern going forces the answers:

$$a^0 = 1 \qquad a^{-n} = \frac{1}{a^n}$$

The dividing rule agrees: $\dfrac{2^3}{2^3}$ is 1, and also $2^{3-3} = 2^0$. So $2^0$ has to be 1.

### Scientific notation

Powers of ten make huge and tiny numbers easy to write. A number in **scientific notation** looks like

$$\text{(a number from 1 up to, but not including, 10)} \times 10^{\text{a whole number}}$$

- Mars is about 228 000 000 km from the Sun: $2.28 \times 10^8$ km. (Move the decimal point 8 places.)
- Light travels about 300 000 km every second: $3 \times 10^5$ km/s.
- A human hair is about 0.00007 m thick: $7 \times 10^{-5}$ m. A negative exponent means a small number.

To multiply, multiply the front numbers and **add** the exponents. To divide, divide the front numbers and
**subtract** the exponents. Then tidy up so the front number is between 1 and 10.

### Square roots

The **square root** of a number is the number that, multiplied by itself, gives it back. $\sqrt{49} = 7$ because
$7 \times 7 = 49$. Numbers like 1, 4, 9, 16, 25 have whole-number square roots and are called **perfect squares**.

Square roots of other numbers can be **estimated**: $\sqrt{20}$ is between $\sqrt{16} = 4$ and $\sqrt{25} = 5$, and
closer to 4.

They can also be **simplified**, using the rule $\sqrt{ab} = \sqrt a \times \sqrt b$. Look for a perfect square
hiding inside:

$$\sqrt{50} = \sqrt{25 \times 2} = \sqrt{25}\times\sqrt2 = 5\sqrt2$$

### Rational and irrational numbers

A number is **rational** if it can be written as a fraction $\dfrac{p}{q}$ of two whole numbers (with $q$ not 0).
The word comes from *ratio*. Every whole number is rational ($7 = \tfrac71$), and so is every decimal that stops
(0.35) or repeats forever (0.333...).

A number that is **not** rational is **irrational**. Its decimal goes on forever with no repeating block. The most
famous ones are $\sqrt2$, $\sqrt3$ and $\pi$ (the fact that $\pi$ is irrational was proved in the 1700s).

### Proof that $\sqrt2$ is irrational

This proof is over two thousand years old and still a model of how mathematicians think. It works by
**contradiction**: suppose the opposite, and show that leads to something impossible.

1. Suppose $\sqrt2 = \dfrac{p}{q}$, a fraction **in lowest terms**, so $p$ and $q$ have no common factor.
2. Squaring both sides, $2 = \dfrac{p^2}{q^2}$, so $p^2 = 2q^2$. That means $p^2$ is even.
3. If $p$ were odd, $p^2$ would be odd (odd times odd is odd). So $p$ is even: $p = 2k$ for some whole number $k$.
4. Then $p^2 = 4k^2$, and $4k^2 = 2q^2$, so $q^2 = 2k^2$. Now $q^2$ is even, so $q$ is even too.
5. But then 2 divides both $p$ and $q$, and we said the fraction was in lowest terms. **Contradiction.**

So no such fraction exists, and $\sqrt2$ is irrational.

### The real numbers

Put all the rational and irrational numbers together and you get the **real numbers**: every point on the number
line. The number families sit inside each other:

- **natural numbers** 1, 2, 3, ... for counting;
- **integers** ..., −2, −1, 0, 1, 2, ... adding zero and the negatives;
- **rational numbers**, adding all the fractions;
- **real numbers**, filling in the gaps with the irrationals.

The rationals look as if they fill the line, since between any two of them there is always another. But they leave
gaps everywhere, at $\sqrt2$, at $\pi$ and at infinitely many other places. The real numbers have no gaps.

## Worked examples

**1. A radio message from Mars.** When Earth and Mars are close, they are about $5.5 \times 10^7$ km apart; when they
are on opposite sides of the Sun, about $4.0 \times 10^8$ km. How long does a message take, at the speed of light?

1. Time is distance divided by speed: $\dfrac{5.5\times10^7}{3\times10^5}$.
2. Divide the fronts and subtract the exponents: $\dfrac{5.5}{3} \times 10^{7-5} \approx 1.83 \times 10^2 = 183$
   seconds, about **3 minutes**.
3. Far apart: $\dfrac{4.0\times10^8}{3\times10^5} \approx 1.33 \times 10^3 = 1330$ seconds, about **22 minutes**.

That is why a rover on Mars cannot be steered live with a joystick: a command and its reply take between about
6 and 44 minutes for the round trip.

**2. Simplify $\sqrt{72}$.** The biggest perfect square that divides 72 is 36. So
$\sqrt{72} = \sqrt{36}\times\sqrt2 = 6\sqrt2$. Check: $6 \times 1.414... \approx 8.49$, and $8.49^2 \approx 72$. ✓

**3. Write $0.272727\ldots$ as a fraction.** Call it $x$. The block "27" repeats, 2 digits long, so multiply by 100:
$100x = 27.2727\ldots$ Subtract $x = 0.2727\ldots$ and the endless tails cancel: $99x = 27$, so
$x = \dfrac{27}{99} = \dfrac{3}{11}$.

## Try it

1. Write $2^3 \times 2^4$ as a single power of 2, and work out its value.
2. Work out $5^{-2}$ and $7^0$.
3. Work out $(3 \times 10^4) \times (2 \times 10^5)$ in scientific notation.
4. Simplify $\sqrt{48}$.
5. Write $0.454545\ldots$ as a fraction in lowest terms.
6. Is $\sqrt{9}$ rational or irrational? What about $\sqrt{2} \times \sqrt{2}$?

??? note "Answers"
    1. $2^{3+4} = 2^7 = 128$.
    2. $5^{-2} = \dfrac{1}{5^2} = \dfrac{1}{25}$, and $7^0 = 1$.
    3. $(3 \times 2) \times 10^{4+5} = 6 \times 10^9$.
    4. $48 = 16 \times 3$, so $\sqrt{48} = 4\sqrt3$.
    5. $x = 0.4545\ldots$, so $100x = 45.4545\ldots$ and $99x = 45$. Then $x = \dfrac{45}{99} = \dfrac{5}{11}$.
    6. $\sqrt9 = 3 = \tfrac31$, rational. And $\sqrt2 \times \sqrt2 = 2$, also rational: two irrational numbers can
       multiply to a rational one.

## Common mistake

**Adding exponents when the bases are different, or adding under a root.** $2^3 \times 3^2$ is not $6^5$: it is
$8 \times 9 = 72$. And $\sqrt{9 + 16}$ is not $\sqrt9 + \sqrt{16} = 7$; it is $\sqrt{25} = 5$. The rule
$\sqrt{ab} = \sqrt a\sqrt b$ is for **multiplying** only.

## Where it leads

- Next step: [Beyond: complex numbers](05-beyond.md), where we finally take the square root of a negative number.
- Back a step: [Build: fractions, decimals and percentages](03-build.md)
- Exponents grow into exponential functions and logarithms: [Algebra](../algebra/index.md).
- Proof by contradiction and other kinds of proof: [Logic and puzzles](../logic/index.md).
- Why the real numbers have no gaps, made exact, on the U of T shelf:
  [MAT158 Unit 2 (real numbers and least upper bounds)](../../uoft/MAT158H1/unit02.md).
