---
title: "The binomial theorem"
---

# The binomial theorem

*Counting and combinations · level 7, lesson 2 of 6*

## A question to start

Work out the powers of 11:

$$11^1 = 11, \qquad 11^2 = 121, \qquad 11^3 = 1331, \qquad 11^4 = 14641.$$

The digits are 1 1, then 1 2 1, then 1 3 3 1, then 1 4 6 4 1: the rows of Pascal's triangle. And $101^3 = 1030301$
hides row 3 again, with zeros in between. Why should multiplying by 11 or 101 know anything about choosing teams?
And what goes wrong at $11^5 = 161051$, where the pattern seems to break? This lesson answers both, and gives you a
way to find any single term of an expansion like $(2x - 3)^8$ in one line.

## The idea

### Sigma: a short way to write a long sum

A **binomial** is an expression with two terms, such as $a + b$ or $2x - 3$. In the last lesson you found that
$(a + b)^n$ is a sum of $n + 1$ terms, one for each number of $b$'s from 0 to $n$. Writing them all out with dots
is clumsy, so mathematicians use the Greek capital letter **sigma**, $\Sigma$, which means "sum":

$$\sum_{k=0}^{3} k^2 = 0^2 + 1^2 + 2^2 + 3^2 = 14.$$

Read it as: "let $k$ run through $0, 1, 2, 3$, work out $k^2$ each time, and add the results". The letter $k$ is a
**counter**: it has no value of its own, and any other letter would do just as well.

### The theorem

> **The binomial theorem.** For any whole number $n \ge 0$ and any numbers $a$ and $b$,
>
> $$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{\,n-k} b^{\,k} = a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + b^n.$$

The numbers $\dbinom{n}{k}$ are called **binomial coefficients** because of this theorem, and they are exactly the
entries of row $n$ of Pascal's triangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 280" role="img" aria-label="Pascal's triangle rows 0 to 8 with the entries 56 in row 8 coloured">
  <text x="220" y="25" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="200" y="55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="240" y="55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="180" y="85" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="220" y="85" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="260" y="85" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="160" y="115" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="200" y="115" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="240" y="115" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="280" y="115" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="140" y="145" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="180" y="145" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <text x="220" y="145" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <text x="260" y="145" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <text x="300" y="145" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="120" y="175" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="160" y="175" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="200" y="175" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <text x="240" y="175" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <text x="280" y="175" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="320" y="175" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="100" y="205" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="140" y="205" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <text x="180" y="205" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <text x="220" y="205" font-size="13" text-anchor="middle" fill="currentColor">20</text>
  <text x="260" y="205" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <text x="300" y="205" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <text x="340" y="205" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="80" y="235" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="120" y="235" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <text x="160" y="235" font-size="13" text-anchor="middle" fill="currentColor">21</text>
  <text x="200" y="235" font-size="13" text-anchor="middle" fill="currentColor">35</text>
  <text x="240" y="235" font-size="13" text-anchor="middle" fill="currentColor">35</text>
  <text x="280" y="235" font-size="13" text-anchor="middle" fill="currentColor">21</text>
  <text x="320" y="235" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <text x="360" y="235" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="60" y="265" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="100" y="265" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <text x="140" y="265" font-size="13" text-anchor="middle" fill="currentColor">28</text>
  <circle cx="180" cy="261" r="16.8" fill="#9cc9ea" fill-opacity="0.75"/>
  <text x="180" y="265" font-size="13" text-anchor="middle" fill="currentColor">56</text>
  <text x="220" y="265" font-size="13" text-anchor="middle" fill="currentColor">70</text>
  <circle cx="260" cy="261" r="16.8" fill="#eea66f" fill-opacity="0.75"/>
  <text x="260" y="265" font-size="13" text-anchor="middle" fill="currentColor">56</text>
  <text x="300" y="265" font-size="13" text-anchor="middle" fill="currentColor">28</text>
  <text x="340" y="265" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <text x="380" y="265" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="4" y="265" font-size="11" text-anchor="start" fill="currentColor">row 8</text>
  <text x="4" y="25" font-size="11" text-anchor="start" fill="currentColor">row 0</text>
</svg>
</div>

Each term has three parts: a coefficient $\dbinom{n}{k}$, a power of $a$ that goes **down** from $n$ to 0, and a power
of $b$ that goes **up** from 0 to $n$. In every term the two powers add to $n$. The term with $b^k$ is often called the
**general term**,

$$T_{k+1} = \binom{n}{k} a^{\,n-k} b^{\,k},$$

numbered $k + 1$ because the first term has $k = 0$.

### Proof 1: by choosing

This is the argument of [lesson 1](01-expanding-by-choosing.md), now written as a proof. Expanding
$(a + b)(a + b)\cdots(a + b)$ with $n$ brackets means choosing $a$ or $b$ from each bracket in every possible way and
adding the products. A choice that takes $b$ from exactly $k$ brackets gives $a^{n-k}b^k$. Such a choice is fixed by
the set of $k$ brackets that gave $b$, and there are $\dbinom{n}{k}$ such sets. So $a^{n-k}b^k$ appears exactly
$\dbinom{n}{k}$ times, for each $k$ from 0 to $n$. ∎

### Proof 2: by induction, using Pascal's rule

A second proof shows how the theorem and Pascal's triangle fit together. **Induction** proves a statement for every
$n$ in two moves: show it is true for the first $n$ (the **base case**), then show that **if** it is true for some $n$
it must be true for $n + 1$ (the **step**). Then it is true for $n = 0$, so for 1, so for 2, and on forever, like a
row of dominoes.

*Base case.* For $n = 0$: $(a + b)^0 = 1$, and the sum has one term, $\dbinom{0}{0}a^0b^0 = 1$. ✓

*Step.* Suppose the theorem is true for some $n$. Then

$$(a + b)^{n+1} = (a + b)(a + b)^n = a\,(a + b)^n + b\,(a + b)^n.$$

Using the theorem for $n$, the term $a^{n+1-k}b^k$ can come from two places: $a$ times the term
$\dbinom{n}{k}a^{n-k}b^k$, or $b$ times the term $\dbinom{n}{k-1}a^{n-k+1}b^{k-1}$. So its coefficient is

$$\binom{n}{k} + \binom{n}{k-1} = \binom{n+1}{k},$$

by **Pascal's rule** from level 5: each entry is the sum of the two above it. That is exactly the coefficient the
theorem promises for $n + 1$. ∎

The two proofs say the same thing from two sides. Multiplying by one more bracket $(a + b)$ is exactly what building
one more row of Pascal's triangle does.

### Signs: when $b$ is negative

For $(a - b)^n$, put $-b$ in place of $b$. The term with $(-b)^k$ has the sign of $(-1)^k$: plus when $k$ is even,
minus when $k$ is odd. So the signs alternate:

$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3.$$

### Finding one term without the rest

Often you want just one term, say the $x^5$ term of $(2x - 3)^8$. Expanding all nine terms is slow. Instead:

1. Name the two parts carefully, with their signs: $a = 2x$ and $b = -3$, $n = 8$.
2. Write the general term: $\dbinom{8}{k}(2x)^{8-k}(-3)^k$.
3. Choose $k$ to get the power you want: $x^5$ needs $8 - k = 5$, so $k = 3$.
4. Work it out:

$$\binom{8}{3}(2x)^5(-3)^3 = 56 \times 32x^5 \times (-27) = -48\,384\,x^5.$$

The $x^5$ term is $-48\,384x^5$, and its coefficient is $-48\,384$.

### The powers of 11, explained

$11^n = (10 + 1)^n$. With $a = 10$ and $b = 1$, the term $\dbinom{n}{k}10^{n-k}$ puts the coefficient
$\dbinom{n}{k}$ in the $10^{n-k}$ column, like a digit:

$$11^4 = 1 \cdot 10^4 + 4 \cdot 10^3 + 6 \cdot 10^2 + 4 \cdot 10 + 1 = 14\,641.$$

In row 5 the coefficients are 1, 5, 10, 10, 5, 1. Two of them are not single digits, so they **carry** into the next
column, and 1 5 10 10 5 1 becomes 161051. The pattern never broke; it only got hidden by carrying. With $101 = 100 + 1$
each coefficient gets two columns of room, which is why $101^3 = 1\,030\,301$ shows 1, 3, 3, 1 with zeros between.

### Quick estimates

When $x$ is small, the powers $x^2, x^3, \ldots$ are tiny, so the first few terms of $(1 + x)^n$ are almost the whole
answer:

$$(1 + x)^n \approx 1 + nx + \binom{n}{2}x^2.$$

For example $1.02^8 \approx 1 + 8(0.02) + 28(0.0004) = 1.1712$. The true value is $1.17166\ldots$ This is how
interest on money was estimated before calculators: 2% a year for 8 years grows money by about 17%.

<figure class="play" data-play="pascal"><span class="ai-tag">AI-created</span><figcaption><b>The coefficients of (a + b)ⁿ.</b> Row n of the triangle; tap it to add them up: 2ⁿ.</figcaption></figure>

## Worked examples

**1. Expand $(2x - 1)^5$.** Here $a = 2x$, $b = -1$, $n = 5$, and row 5 is 1, 5, 10, 10, 5, 1.

$$
\begin{aligned}
(2x - 1)^5 &= (2x)^5 - 5(2x)^4 + 10(2x)^3 - 10(2x)^2 + 5(2x) - 1\\
&= 32x^5 - 80x^4 + 80x^3 - 40x^2 + 10x - 1.
\end{aligned}
$$

Check with $x = 1$: the left side is $1^5 = 1$, the right side is $32 - 80 + 80 - 40 + 10 - 1 = 1$. ✓

**2. The $x^5$ term of $(2x - 3)^8$.** Done above: $k = 3$ gives $\dbinom{8}{3}(2x)^5(-3)^3 = -48\,384x^5$. A sign check:
$(-3)^3$ is negative and everything else is positive, so the term is negative. ✓

**3. The term with no $x$.** Find the constant term of $\left(x^2 - \dfrac{1}{x}\right)^9$.

- General term: $\dbinom{9}{k}(x^2)^{9-k}\left(-\dfrac{1}{x}\right)^k = \dbinom{9}{k}(-1)^k x^{18 - 2k - k} = \dbinom{9}{k}(-1)^k x^{18 - 3k}$.
- No $x$ means $18 - 3k = 0$, so $k = 6$.
- The term is $\dbinom{9}{6}(-1)^6 = 84$.

**4. Working backwards.** In $(1 + x)^n$ the coefficient of $x^2$ is 45. Find $n$.

The coefficient is $\dbinom{n}{2} = \dfrac{n(n-1)}{2}$. So $n(n - 1) = 90 = 10 \times 9$, and $n = 10$.

**5. An estimate.** Estimate $1.02^8$ to four decimal places using three terms, then four.
Three terms: $1 + 0.16 + 0.0112 = 1.1712$. The fourth term is $\dbinom{8}{3}(0.02)^3 = 56 \times 0.000008 = 0.000448$,
giving $1.171648$. The true value is $1.1716594\ldots$, so four terms are right to five decimal places.

## Try it

1. Write $(a + b)^6$ with $\Sigma$, then expand it fully.
2. Expand $(x - 2)^4$, and check by putting $x = 1$.
3. Find the coefficient of $x^3$ in $(3 + x)^7$.
4. Find the coefficient of $x^4$ in $(1 - 2x)^9$.
5. In $\left(2x^2 + \dfrac{1}{x}\right)^6$, find the $x^6$ term and the constant term.
6. Estimate $0.98^{10}$ by writing it as $(1 - 0.02)^{10}$ and using four terms.
7. The coefficient of $x^2$ in $(1 + x)^n$ is 66. Find $n$.
8. Show that $(\sqrt{2} + 1)^4 + (\sqrt{2} - 1)^4$ is a whole number, and find it. (Hint: what happens to the odd
   powers of 1?)

??? note "Answers"
    1. $(a + b)^6 = \sum_{k=0}^{6} \binom{6}{k} a^{6-k} b^k = a^6 + 6a^5b + 15a^4b^2 + 20a^3b^3 + 15a^2b^4 + 6ab^5 + b^6$.
    2. $a = x$, $b = -2$, row 4 is 1, 4, 6, 4, 1:
       $x^4 + 4x^3(-2) + 6x^2(4) + 4x(-8) + 16 = x^4 - 8x^3 + 24x^2 - 32x + 16$.
       Check: $(1 - 2)^4 = 1$ and $1 - 8 + 24 - 32 + 16 = 1$. ✓
    3. $a = 3$, $b = x$: the term with $x^3$ has $k = 3$: $\binom{7}{3}3^4x^3 = 35 \times 81x^3$, so the coefficient is
       **2835**.
    4. $a = 1$, $b = -2x$, $k = 4$: $\binom{9}{4}(-2x)^4 = 126 \times 16x^4$, so the coefficient is **2016** (positive,
       since the power 4 is even).
    5. General term $\binom{6}{k}(2x^2)^{6-k}x^{-k} = \binom{6}{k}2^{6-k}x^{12 - 3k}$. For $x^6$: $12 - 3k = 6$, $k = 2$:
       $15 \times 2^4 = 240$, so the term is $240x^6$. Constant: $12 - 3k = 0$, $k = 4$: $15 \times 2^2 = 60$.
    6. $1 - 10(0.02) + 45(0.0004) - 120(0.000008) = 1 - 0.2 + 0.018 - 0.00096 = 0.81704$. (True value $0.81707\ldots$)
    7. $\frac{n(n-1)}{2} = 66$, so $n(n - 1) = 132 = 12 \times 11$, and $n = 12$.
    8. Expand both with $a = \sqrt{2}$, $b = \pm 1$. The terms with odd powers of $b$ have opposite signs and cancel; the
       even ones double:
       $2\left[(\sqrt{2})^4 + 6(\sqrt{2})^2 + 1\right] = 2(4 + 12 + 1) = 34$. A calculator agrees:
       $(\sqrt{2} + 1)^4 \approx 33.97$ and $(\sqrt{2} - 1)^4 \approx 0.03$, adding to 34.

## Common mistake

**Not raising the whole part to the power.** In $(2x - 3)^8$ the part $a$ is $2x$, so the term contains
$(2x)^5 = 32x^5$, not $2x^5$; and $b$ is $-3$, so the sign comes from $(-3)^3$. Put brackets round each part before you
raise it to a power.

**Using $k$ as the power of $a$.** In the form $\dbinom{n}{k}a^{n-k}b^k$, $k$ is the power of the **second** part. If
you mix them up you will usually still get the right number (because $\dbinom{n}{k} = \dbinom{n}{n-k}$) but the wrong
power of the numbers inside, such as $2^3$ instead of $2^5$.

## Where it leads

- Back: [Expanding by choosing](01-expanding-by-choosing.md) · Next:
  [Identities from the theorem](03-identities-from-theorem.md)
- [Level 7 page](index.md) · [Counting topic page](../index.md)
- With complex numbers, $(\cos\theta + i\sin\theta)^n$ expanded by this theorem gives formulas for $\cos n\theta$:
  see [De Moivre's theorem](../../numbers/level-8/02-de-moivre.md) in Numbers.
- The chance of exactly $k$ heads in $n$ tosses is $\dbinom{n}{k}/2^n$, the start of the binomial distribution in
  [Probability](../../probability/index.md).
- Induction, used in proof 2, is set out carefully in
  [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md). When the power is not a whole number,
  $(1 + x)^n$ becomes an endless sum, a power series: [MAT137 Unit 14](../../../uoft/MAT137/unit14.md).
