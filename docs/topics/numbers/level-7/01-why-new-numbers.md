---
title: "Why each family of numbers was invented"
---

# Why each family of numbers was invented

*Numbers · level 7, lesson 1 of 6*

## A question to start

Here are four equations. Try to solve each one.

$$x + 5 = 2 \qquad\quad 3x = 2 \qquad\quad x^2 = 2 \qquad\quad x^2 = -1$$

The first has the answer $x = -3$, the second $x = \tfrac23$, the third $x = \sqrt2$ (or $-\sqrt2$). The fourth seems
to have no answer at all.

But go back in time. To someone who only knew the counting numbers 1, 2, 3, ..., the first equation had no answer
either: you cannot take 5 away from 2. To someone who only knew whole numbers, the second had no answer. To the
ancient Greeks, who thought every length was a ratio of whole numbers, the third was a shock. Each "impossible"
equation was made possible by inventing a bigger family of numbers. This lesson tells that story as one pattern,
and shows why the fourth equation is the next step on the same ladder.

## The idea

### Being closed under an operation

A family of numbers is **closed** under an operation if doing that operation to any two members of the family always
gives another member. "Closed" means you cannot escape the family by doing that operation.

- The **natural numbers** $\mathbb{N} = \{1, 2, 3, \ldots\}$ (the counting numbers) are closed under addition: add two
  counting numbers and you get a counting number. They are also closed under multiplication.
- They are **not** closed under subtraction: $2 - 5$ is not a counting number.
- They are not closed under division: $2 \div 3$ is not a counting number.

The letters are standard: $\mathbb{N}$ for natural, $\mathbb{Z}$ for the integers (from the German *Zahlen*,
"numbers"), $\mathbb{Q}$ for the rationals (from *quotient*), $\mathbb{R}$ for the reals and $\mathbb{C}$ for the
complex numbers.

The whole history of number systems can be told with one sentence: **each time a family was not closed under an
operation people needed, they built a bigger family that was.** And each time, they insisted that the old rules of
arithmetic must still work in the new family.

### Step 1: subtraction needs the negative numbers

To make subtraction always possible, we add zero and the negatives and get the **integers**

$$\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$$

One neat way to think of a new integer is as a **difference** of two counting numbers that we cannot yet work out.
The pair "2 take away 5" names the number $-3$. So do "1 take away 4" and "10 take away 13". Different pairs can name
the same integer, just as different fractions can name the same number.

Negative numbers were used long ago. The Chinese text *The Nine Chapters on the Mathematical Art* (about 2000 years
old) used red and black counting rods for positive and negative amounts, and the Indian mathematician Brahmagupta
wrote rules for them, as fortunes and debts, in the year 628. Yet in Europe they were distrusted for centuries; some
writers in the 1500s called them "absurd numbers".

**The old rules decide the new facts.** Why is $(-1)\times(-1) = 1$? Nobody voted for it. It is forced, if we want
the distributive law $a(b + c) = ab + ac$ to keep working:

$$0 = (-1)\times 0 = (-1)\times\big(1 + (-1)\big) = (-1)\times 1 + (-1)\times(-1) = -1 + (-1)\times(-1)$$

The only number that adds to $-1$ to give 0 is 1, so $(-1)\times(-1) = 1$. This idea, "keep the old rules and see
what they force", is how every later family is built too.

The integers are closed under addition, subtraction and multiplication. They are still **not** closed under
division: $2 \div 3$ is not an integer.

### Step 2: division needs the fractions

The **rational numbers** $\mathbb{Q}$ are all the numbers $\dfrac{p}{q}$ where $p$ and $q$ are integers and
$q \ne 0$. Again a new number is a **pair** of old ones, and again different pairs can name the same number:
$\dfrac{2}{3} = \dfrac{4}{6} = \dfrac{-10}{-15}$. The test for "same number" is cross-multiplying:

$$\frac{p}{q} = \frac{r}{s} \quad\text{exactly when}\quad ps = qr$$

The rationals are closed under all four operations (apart from dividing by zero, which no family allows). For
example, the sum of two rationals is rational, because

$$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$$

and the top and bottom are integers, with $bd \ne 0$ because neither $b$ nor $d$ is 0. A family closed under all four
operations, with the usual rules, has a name in university mathematics: a **field**. $\mathbb{Q}$ is the smallest
field that contains the counting numbers.

### Step 3: roots need the irrational numbers

The rationals are closed under $+$, $-$, $\times$ and $\div$, but not under taking square roots. In
[level 6](../level-6/index.md) you proved that $\sqrt2$ is not any fraction. So the equation $x^2 = 2$, which asks for
the side of a square of area 2, has no rational answer.

There is a second, deeper way to see the gap. The decimals

$$1, \quad 1.4, \quad 1.41, \quad 1.414, \quad 1.4142, \quad \ldots$$

are all rational, and their squares get closer and closer to 2. They are heading somewhere, but the place they are
heading is not a rational number. The rational number line is full of holes like this. The **real numbers**
$\mathbb{R}$ fill every hole: every endless decimal is a real number. This "no holes" property is called
**completeness**, and it is what calculus is built on.

Note something new here. The first two steps were driven by equations ($x + 5 = 2$ and $3x = 2$). The real numbers
add far more than roots of equations. The number $\pi$ is not a solution of **any** polynomial equation with whole
number coefficients (this was proved by Ferdinand von Lindemann in 1882), yet it is a perfectly good real number. The
reals are about filling gaps, not only about solving equations.

### Step 4: $x^2 = -1$ needs something new

Now the real numbers. They are closed under $+$, $-$, $\times$, $\div$, and every **positive** real has a square
root. But no real number has a negative square.

**Why not?** Take any real number $x$.

- If $x \ge 0$, then $x \times x$ is a product of two numbers that are not negative, so $x^2 \ge 0$.
- If $x < 0$, then $-x > 0$, and $x^2 = (-x)\times(-x)$ (two minus signs cancel, by step 1), which is positive.

Either way $x^2 \ge 0$. So $x^2 = -1$ has no real solution, and neither does $x^2 = -4$ or $x^2 + 2x + 5 = 0$ (more on
that one in [lesson 5](05-every-quadratic.md)).

The same move as before solves it: **invent a number $i$ with $i^2 = -1$**, keep all the old rules, and see what they
force. That gives the **complex numbers** $\mathbb{C}$, which are the subject of the rest of this level and all of
level 8.

### The families sit inside each other

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Five nested ovals: natural numbers inside integers inside rationals inside reals inside complex numbers, with example numbers in each ring">
  <ellipse cx="210" cy="115" rx="200" ry="108" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="185" cy="122" rx="160" ry="88" fill="#7ccf9a" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="165" cy="130" rx="122" ry="68" fill="#eea66f" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="148" cy="138" rx="86" ry="48" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="132" cy="146" rx="50" ry="28" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="132" y="142">ℕ</text><text x="132" y="160">1, 2, 3</text>
    <text x="200" y="128">ℤ</text><text x="200" y="160">0, −4</text>
    <text x="215" y="82">ℚ</text><text x="238" y="104" font-size="12">2/3, −0.5</text>
    <text x="300" y="70">ℝ</text><text x="314" y="120">√2, π</text>
    <text x="350" y="60">ℂ</text><text x="376" y="118" font-size="12">i, 3 − 2i</text>
  </g>
</svg>
</div>

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

The symbol $\subset$ means "is contained in". Every counting number is an integer, every integer is a fraction
($5 = \tfrac51$), every fraction is a real number, and (as you will see) every real number is a complex number.

### What we gain and what we lose

Each step gains an operation. But each step also **loses** something that the smaller family had.

| Step | We gain | We lose |
| --- | --- | --- |
| $\mathbb{N} \to \mathbb{Z}$ | subtraction always works | a smallest number (there is no smallest integer) |
| $\mathbb{Z} \to \mathbb{Q}$ | division always works (not by 0) | a "next" number (there is no next fraction after $\tfrac12$) |
| $\mathbb{Q} \to \mathbb{R}$ | no holes; limits exist | being listable one by one (see [Infinity](../../infinity/index.md)) |
| $\mathbb{R} \to \mathbb{C}$ | every polynomial equation has a root | order: no "bigger" or "smaller" that fits the rules |

The last line is a surprise worth checking. Could we decide that $i > 0$? Then multiplying both sides of $i > 0$ by
the positive number $i$ would give $i^2 > 0$, that is $-1 > 0$. False. Could we decide $i < 0$? Then $-i > 0$, and
$(-i)(-i) > 0$ gives $i^2 > 0$ again, the same contradiction. So there is no way to order the complex numbers that
keeps the usual rules for inequalities. Level 8's last lesson shows that the next step after $\mathbb{C}$ loses even
more.

## Worked examples

**1. Which family do you need?** For each equation, find the smallest family from $\mathbb{N}$, $\mathbb{Z}$,
$\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ that has a solution.

- $x + 7 = 3$. The solution is $x = -4$, an integer: **$\mathbb{Z}$**.
- $5x = -2$. The solution is $x = -\tfrac25$: **$\mathbb{Q}$**.
- $x^3 = -8$. The solution $x = -2$ is an integer: **$\mathbb{Z}$**. (Odd powers of negatives are negative, so cube
  roots of negative numbers are real.)
- $x^2 = 5$. The solutions are $\pm\sqrt5$, irrational: **$\mathbb{R}$**.
- $2x^2 = 8$. Then $x^2 = 4$ and $x = \pm 2$. The answer $x = 2$ is a counting number, so **$\mathbb{N}$** already
  contains a solution.
- $x^2 + 4 = 0$. Then $x^2 = -4$, which no real number solves: **$\mathbb{C}$** (the solutions are $\pm 2i$).

**2. Closed or not?** Is the set of **odd** integers closed under addition? Under multiplication?

1. Addition: $3 + 5 = 8$, which is even. One counterexample is enough: **not closed**.
2. Multiplication: write two odd numbers as $2m + 1$ and $2n + 1$. Their product is
   $4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$, which is odd. This works for every pair, so **closed**.

Notice the difference: to show "not closed" you need one example; to show "closed" you need an argument that covers
every case.

**3. Are the irrational numbers closed under multiplication?** No: $\sqrt2$ is irrational, but
$\sqrt2 \times \sqrt2 = 2$ is rational. Under addition? Also no: $\sqrt2 + (-\sqrt2) = 0$. The irrationals are not a
"family" in the sense of this lesson at all; they are what is left over when you take $\mathbb{Q}$ out of
$\mathbb{R}$.

**4. What the old rules force for $i$.** Suppose $i^2 = -1$ and the usual rules still hold. What must $(2i)^2$ and
$(1 + i)^2$ be?

1. $(2i)^2 = 2^2 \times i^2 = 4 \times (-1) = -4$. So $2i$ is a square root of $-4$.
2. $(1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$. So $1 + i$ is a square root of $2i$, a number that is not even on
   the real line.

We never had to decide these answers; the rules decided them. That is the method of the whole level.

## Try it

1. Is $\mathbb{N}$ closed under the operation "take the larger of the two numbers"? Under "subtract the smaller from
   the larger"?
2. Find the smallest family ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ or $\mathbb{C}$) containing a
   solution of: (a) $4x = 10$; (b) $x + 10 = 4$; (c) $x^2 = 49$; (d) $x^2 = 0.49$; (e) $x^2 = 0.4$; (f) $x^2 + 9 = 0$.
3. Is the set of even integers closed under addition? Under division (when the bottom is not 0)?
4. Show that the product of two rational numbers is rational.
5. Use the distributive law to show that $(-2)\times(-3) = 6$, in the same way as the proof of $(-1)\times(-1) = 1$.
6. The square numbers $\{1, 4, 9, 16, \ldots\}$: closed under multiplication? Under addition?
7. Show that if $x$ is rational and $y$ is irrational, then $x + y$ is irrational. (Hint: suppose $x + y$ were
   rational and look at $(x + y) - x$.)
8. Explain why no ordering of $\mathbb{C}$ can have $2i > 0$, using the same idea as the lesson's argument for $i$.

??? note "Answers"
    1. "Take the larger": yes, the larger of two counting numbers is one of them, so it is a counting number.
       "Subtract the smaller from the larger": no, because $3 - 3 = 0$ and 0 is not in $\mathbb{N} = \{1, 2, 3, \ldots\}$.
       (If you count 0 as natural, it is closed.)
    2. (a) $x = \tfrac{10}{4} = \tfrac52$: $\mathbb{Q}$. (b) $x = -6$: $\mathbb{Z}$. (c) $x = 7$: $\mathbb{N}$.
       (d) $x = 0.7 = \tfrac{7}{10}$: $\mathbb{Q}$. (e) $x = \sqrt{0.4} = \sqrt{\tfrac{2}{5}}$, which is irrational
       ($\sqrt{0.4} = \tfrac{\sqrt{10}}{5}$ and $\sqrt{10}$ is irrational): $\mathbb{R}$. (f) $x = \pm 3i$: $\mathbb{C}$.
    3. Addition: $2m + 2n = 2(m + n)$, even, so closed. Division: $2 \div 4 = \tfrac12$, not an integer, so not closed.
    4. $\dfrac{a}{b} \times \dfrac{c}{d} = \dfrac{ac}{bd}$. The top $ac$ and the bottom $bd$ are integers, and
       $bd \ne 0$ because $b \ne 0$ and $d \ne 0$. So the product is rational.
    5. $0 = (-2)\times 0 = (-2)\times\big(3 + (-3)\big) = (-2)\times 3 + (-2)\times(-3) = -6 + (-2)\times(-3)$.
       The only number that adds to $-6$ to give 0 is 6, so $(-2)\times(-3) = 6$.
    6. Multiplication: $a^2 \times b^2 = (ab)^2$, a square, so closed. Addition: $1 + 4 = 5$ is not a square, so
       not closed.
    7. Suppose $x + y = r$ with $r$ rational. Then $y = r - x$. The difference of two rationals is rational (the
       rationals are closed under subtraction), so $y$ would be rational. But $y$ is irrational, a contradiction.
       So $x + y$ is irrational.
    8. Suppose $2i > 0$. Multiplying both sides by the positive number $2i$ keeps the inequality, giving
       $(2i)^2 > 0$, that is $-4 > 0$. False. If instead $2i < 0$, then $-2i > 0$ and $(-2i)^2 > 0$ gives $-4 > 0$
       again. So neither works.

## Common mistake

**Thinking "imaginary" means "fake".** The names "negative", "irrational" and "imaginary" all come from times when
people distrusted the new numbers. Each new family is built from the old one by a precise rule and obeys the same
laws of arithmetic. Complex numbers are as solid as fractions; engineers use them every day for electric circuits and
signals.

**Proving "closed" with examples.** $1 \times 3 = 3$, $3 \times 5 = 15$ and $5 \times 7 = 35$ are all odd, but three
examples prove nothing about all odd numbers. Closure needs an argument for every pair, such as the $2m + 1$
argument in worked example 2. One counterexample, though, is enough to show a family is **not** closed.

## Where it leads

- Next: [The number i](02-the-number-i.md), where we build the new number and meet the people who first used it.
- [Level 7 page](index.md) · [Numbers topic page](../index.md) · Back to [Level 6: the real numbers](../level-6/index.md),
  where $\sqrt2$ was proved irrational.
- Why the real numbers cannot be listed one by one, but the rationals can: [Infinity](../../infinity/index.md).
- Closure, sets and proofs as a language: [Logic](../../logic/index.md).
- On the U of T shelf, "no holes" is made exact as the least upper bound property:
  [MAT158 Unit 2 (real numbers and least upper bounds)](../../../uoft/MAT158H1/unit02.md). Families closed under all
  four operations are the *fields* of [MAT240 Unit 1 (fields and vector spaces)](../../../uoft/MAT240H1/unit01.md).
