---
title: "Zero and negative exponents"
---

# Zero and negative exponents

*Numbers · level 5, lesson 4 of 7*

## A question to start

$2^3$ means three 2s multiplied together. $2^1$ means one 2. So what could $2^0$ mean? Zero 2s multiplied together?
That sounds like it should be 0, or like it means nothing at all.

And $2^{-3}$ is stranger still: "minus three 2s multiplied together"? You cannot write down minus three copies of
anything.

Yet a calculator will happily tell you that $2^0 = 1$ and $2^{-3} = 0.125$. Where do these answers come from? Did
someone just decide them? In a sense, yes. But as you will see, they were decided in the **only** way that keeps all
the laws from the last lesson working. Any other choice would break them.

## The idea

### Extending a definition

In the last lesson, $a^n$ meant "$n$ copies of $a$ multiplied together". That only makes sense when $n$ is a positive
whole number (1, 2, 3, ...). To give $a^0$ and $a^{-n}$ a meaning, we have to **extend** the definition: choose
meanings for the new cases.

Mathematicians extend definitions all the time, but they have a rule: the new meanings must **agree with what already
works**. Here, that means two things: the patterns in powers should keep going, and the laws of exponents should stay
true. We will see that these two demands give the same answer.

### Reason 1: the pattern

Write the powers of 2 in a row, going down. Each step to the right **divides by 2**, because there is one fewer 2 in
the product.

| $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ | $2^{-1}$ | $2^{-2}$ | $2^{-3}$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 8 | 4 | 2 | ? | ? | ? | ? |

Keep dividing by 2, and the gaps fill themselves in:

| $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ | $2^{-1}$ | $2^{-2}$ | $2^{-3}$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 8 | 4 | 2 | **1** | $\mathbf{\tfrac12}$ | $\mathbf{\tfrac14}$ | $\mathbf{\tfrac18}$ |

So $2^0 = 1$, and the negative powers are fractions: $2^{-3} = \tfrac18 = \tfrac{1}{2^3}$. The same happens for
any base. For powers of 10 the pattern is place value itself:

| $10^3$ | $10^2$ | $10^1$ | $10^0$ | $10^{-1}$ | $10^{-2}$ | $10^{-3}$ |
| --- | --- | --- | --- | --- | --- | --- |
| 1000 | 100 | 10 | 1 | 0.1 | 0.01 | 0.001 |

Look at a place value chart: thousands, hundreds, tens, **ones**, tenths, hundredths, thousandths. The ones place is
$10^0$, and the places after the decimal point are the negative powers of 10. Our number system has been using zero
and negative exponents all along.

### Reason 2: the dividing law

The dividing law says $\dfrac{a^m}{a^n} = a^{m-n}$. Up to now we only used it when $m$ was bigger than $n$. Let us
see what it says otherwise.

**When $m = n$.** Anything (except 0) divided by itself is 1, so $\dfrac{2^3}{2^3} = 1$. The law says
$\dfrac{2^3}{2^3} = 2^{3-3} = 2^0$. For the law to stay true, we need

$$2^0 = 1$$

**When $m$ is smaller than $n$.** Write out the factors and cancel:

$$\frac{2^3}{2^5} = \frac{2 \times 2 \times 2}{2 \times 2 \times 2 \times 2 \times 2} = \frac{1}{2 \times 2} = \frac{1}{2^2}$$

The law says $\dfrac{2^3}{2^5} = 2^{3-5} = 2^{-2}$. For the law to stay true, we need $2^{-2} = \dfrac{1}{2^2}$.

Both reasons give the same answers. So, for any number $a$ that is not 0, and any positive whole number $n$:

$$a^0 = 1 \qquad\qquad a^{-n} = \frac{1}{a^n}$$

In words: **a zero exponent gives 1**, and **a negative exponent means "one over" the positive power**. The negative
sign in the exponent says "divide", not "make negative". $2^{-3}$ is a small positive number, $\tfrac18$.

### Negative powers of fractions

$\left(\tfrac23\right)^{-2}$ means $\dfrac{1}{\left(\tfrac23\right)^2} = \dfrac{1}{\tfrac49} = \dfrac94$.
Notice what happened: the fraction **flipped**, and then was squared. A power of $-1$ just gives the reciprocal:
$\left(\tfrac23\right)^{-1} = \tfrac32$ and $5^{-1} = \tfrac15$. So, for $a$ and $b$ not 0,

$$\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^{n}$$

### All the laws still work

The point of choosing these meanings was to keep the laws true, and they are: the three laws now hold for **every**
integer exponent, positive, negative or zero. For example:

- $2^5 \times 2^{-3} = 2^{5 + (-3)} = 2^2 = 4$. Check the long way: $32 \times \tfrac18 = 4$. ✓
- $\dfrac{3^{-2}}{3^{-4}} = 3^{-2-(-4)} = 3^2 = 9$. Check: $\tfrac19 \div \tfrac1{81} = \tfrac{81}{9} = 9$. ✓
- $(2^{-1})^{3} = 2^{-3} = \tfrac18$. Check: $\left(\tfrac12\right)^3 = \tfrac18$. ✓

This is the real payoff. You do not need separate rules for positive and negative exponents. One set of laws covers
them all.

### What about zero as the base?

Powers of 0 are fine for positive exponents: $0^1 = 0$, $0^2 = 0$, $0^5 = 0$.

**$0$ to a negative power** has no value: $0^{-2}$ would be $\dfrac{1}{0^2} = \dfrac10$, and you cannot divide by
zero.

**$0^0$** is the most famous puzzle. Two patterns pull in opposite directions:

| pattern | 3 | 2 | 1 | then at 0 |
| --- | --- | --- | --- | --- |
| $a^0$ for $a = 3, 2, 1, \ldots$ | $3^0 = 1$ | $2^0 = 1$ | $1^0 = 1$ | suggests $0^0 = 1$ |
| $0^n$ for $n = 3, 2, 1, \ldots$ | $0^3 = 0$ | $0^2 = 0$ | $0^1 = 0$ | suggests $0^0 = 0$ |

And our dividing reason does not help, because $\dfrac{0^3}{0^3}$ means $\dfrac00$, which has no value. Since there is
no single answer that keeps everything working, **school mathematics leaves $0^0$ undefined**, like $\tfrac{1}{0}$.
(In some later topics, such as counting and power series, mathematicians agree to use $0^0 = 1$ because it makes their
formulas tidy. Many calculators and computer languages also give 1. But that is a convenient agreement for those
settings, not a fact forced by the laws.)

## Worked examples

**1. Evaluate** $5^{-2}$, $(-4)^{-3}$ and $7^0$.

1. $5^{-2} = \dfrac{1}{5^2} = \dfrac{1}{25}$.
2. $(-4)^{-3} = \dfrac{1}{(-4)^3} = \dfrac{1}{-64} = -\dfrac{1}{64}$. The answer is negative because the **base** is
   negative and the power is odd, not because the exponent is negative.
3. $7^0 = 1$.

**2. A fraction to a negative power:** $\left(\tfrac34\right)^{-2}$.

Flip, then square: $\left(\tfrac43\right)^2 = \tfrac{16}{9}$.

**3. Use the laws:** $2^5 \times 2^{-8}$.

1. Add the exponents: $2^{5 + (-8)} = 2^{-3} = \tfrac18$.
2. Check: $2^5 = 32$ and $2^{-8} = \tfrac{1}{256}$, so the product is $\tfrac{32}{256} = \tfrac18$. ✓

**4. Different bases that are secretly the same:** simplify $3^4 \times 9^{-3}$.

1. $9 = 3^2$, so $9^{-3} = (3^2)^{-3} = 3^{-6}$.
2. $3^4 \times 3^{-6} = 3^{-2} = \tfrac19$.

**5. Decimals as powers of 10.** Write $0.0001$ and $0.03$ using powers of 10.

1. $0.0001 = \tfrac{1}{10\,000} = \tfrac{1}{10^4} = 10^{-4}$.
2. $0.03 = 3 \times 0.01 = 3 \times 10^{-2}$. This is the first step towards scientific notation, in the next lesson.

## Try it

1. Evaluate: (a) $3^{-2}$ (b) $10^{-3}$ (c) $(-2)^{-3}$ (d) $4^0$ (e) $(-7)^0$
2. Evaluate: (a) $\left(\tfrac12\right)^{-4}$ (b) $\left(\tfrac25\right)^{-2}$
3. Work out $5^{-3} \times 5^5$.
4. Work out $\dfrac{2^{-3}}{2^{-5}}$.
5. Write $(10^{-2})^3$ as a power of 10 and as a decimal.
6. Write each as a power of 2: (a) $\tfrac{1}{32}$ (b) $0.25$ (c) $\tfrac{1}{64} \times 8$
7. Find $n$: (a) $2^n = \tfrac{1}{16}$ (b) $3^n = 1$ (c) $10^n = 0.00001$
8. Explain why $-3^0$ is $-1$ but $(-3)^0$ is $1$.

??? note "Answers"
    1. (a) $\tfrac19$. (b) $\tfrac{1}{1000} = 0.001$. (c) $\dfrac{1}{(-2)^3} = -\tfrac18$. (d) $1$. (e) $1$: any
       non-zero base to the power 0 is 1, even a negative one.
    2. (a) Flip to $2^4 = 16$. (b) Flip to $\left(\tfrac52\right)^2 = \tfrac{25}{4}$.
    3. $5^{-3+5} = 5^2 = 25$.
    4. $2^{-3-(-5)} = 2^{2} = 4$. Check: $\tfrac18 \div \tfrac{1}{32} = \tfrac{32}{8} = 4$. ✓
    5. $10^{-2 \times 3} = 10^{-6} = 0.000001$.
    6. (a) $32 = 2^5$, so $\tfrac{1}{32} = 2^{-5}$. (b) $0.25 = \tfrac14 = 2^{-2}$. (c) $2^{-6} \times 2^3 = 2^{-3}$.
    7. (a) $16 = 2^4$, so $n = -4$. (b) $n = 0$. (c) $0.00001 = 10^{-5}$, so $n = -5$.
    8. In $-3^0$ the power is done first (order of operations): $-(3^0) = -(1) = -1$. In $(-3)^0$ the base is $-3$,
       and any non-zero number to the power 0 is 1.

## Common mistake

**Thinking a negative exponent makes the answer negative.** $2^{-3}$ is **not** $-8$ and not $-6$. It is
$\tfrac{1}{2^3} = \tfrac18$, a small positive number. A negative exponent means "one over", a reciprocal. Only a
negative **base** can make a power negative.

**Thinking $a^0 = 0$.** Zero copies of $a$ multiplied together is 1, not 0. Think of it this way: multiplying starts
from 1 (the number that changes nothing), and with zero factors to multiply in, you are left with that 1. In the same
way, adding starts from 0, so adding zero numbers gives 0.

## Where it leads

- Back: [Powers](03-powers.md) · Next: [Scientific notation](05-scientific-notation.md), where negative powers of 10
  describe tiny things.
- [Level 5 page](index.md) · [Numbers topic page](../index.md)
- Halving again and again gives $1, \tfrac12, \tfrac14, \tfrac18, \ldots$, a geometric sequence: [Patterns](../../patterns/index.md).
- Exponents that are fractions, like $9^{1/2} = 3$, and the exponential functions $2^x$: [Algebra](../../algebra/index.md).
- Why mathematicians are so careful with $0^0$ and $\tfrac00$: limits, in [Change](../../change/index.md), and at
  university in [MAT137 Unit 2 (limits)](../../../uoft/MAT137/unit02.md).
