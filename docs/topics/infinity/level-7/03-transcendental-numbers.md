---
title: "Transcendental numbers exist"
---

# Transcendental numbers exist

*Infinity and strange math · level 7, lesson 3 of 6*

## A question to start

The number $\sqrt 2$ is not a fraction, but it is still "tame" in one way: it solves a very simple equation with whole
numbers in it, $x^2 - 2 = 0$. So does the golden ratio, $x^2 - x - 1 = 0$, and so does $\sqrt[3]{5}$, $x^3 - 5 = 0$.

Is **every** real number like that? Does every number solve some equation built from whole numbers and powers of $x$?

For a long time nobody knew a single number that did not. Then, in 1874, Georg Cantor proved that almost **all** real
numbers fail to solve any such equation, using nothing but the counting you have just learned. His proof did not
need to find even one of them. This lesson is about that proof, and about the much harder job of showing that a
**particular** number, like $\pi$, is one of them.

## The idea

### Algebraic numbers

A **polynomial with integer coefficients** is an expression like

$$3x^4 - 7x^2 + x - 12,$$

a sum of whole-number multiples of powers of $x$. The whole numbers in front ($3, -7, 1, -12$) are the
**coefficients**, and the highest power (here 4) is the **degree**.

A number is **algebraic** if it is a root of some polynomial with integer coefficients that is not the zero
polynomial: plugging the number in for $x$ gives 0. Examples:

- every fraction $p/q$ is algebraic, because it is a root of $qx - p$;
- $\sqrt 2$ is algebraic: a root of $x^2 - 2$;
- the golden ratio $\varphi = \tfrac{1 + \sqrt 5}{2}$ is algebraic: a root of $x^2 - x - 1$;
- $\sqrt 2 + \sqrt 3$ is algebraic (worked example 1 finds its polynomial).

A real number that is **not** algebraic is called **transcendental**: it "transcends" (goes beyond) algebra. No
polynomial equation with whole-number coefficients, of any degree, however long, has it as a root.

### Step 1: the algebraic numbers are countable

Level 6 sketched why the algebraic numbers can be listed. Here is the argument again, more carefully.

Give each polynomial a **size**: its degree plus the sum of the sizes (absolute values) of its coefficients. For
example $3x^4 - 7x^2 + x - 12$ has size $4 + 3 + 7 + 1 + 12 = 27$.

- For each size $h$ there are only **finitely many** polynomials. The degree is at most $h$, and each coefficient is a
  whole number between $-h$ and $h$, so there are only finitely many choices.
- Each polynomial (not the zero one) of degree $n$ has **at most $n$ roots**. This is a standard fact of algebra.

So list the roots of all polynomials of size 1, then the new roots from size 2, then size 3, and so on. Each stage
adds finitely many numbers, so each algebraic number gets a definite place on the list. The algebraic numbers are
countable.

### Step 2: so the transcendental numbers are uncountable

Every real number is algebraic or transcendental. Suppose the transcendental numbers were countable. Then the real
numbers would be the union of two countable sets (algebraic and transcendental), and alternating between the two lists
would list all of $\mathbb{R}$. The diagonal argument says that is impossible.

So the transcendental numbers are **uncountable**. In particular they **exist**, and there are far more of them than
algebraic numbers. The algebraic numbers, like the fractions, have measure zero (lesson 2): a dart thrown at the
number line hits a transcendental number with probability 1.

### A proof that finds nothing, or does it?

This argument is sometimes called "non-constructive": it proves that transcendental numbers exist without pointing at
one. But it can be made constructive. Take the list of all algebraic numbers between 0 and 1, $a_1, a_2, a_3, \ldots$,
and run Cantor's diagonal on it: the $n$th digit of a new number $x$ is 4 if the $n$th digit of $a_n$ is 5, and 5
otherwise. Then $x$ is not on the list, so it is not algebraic. In principle a computer could print its digits one at
a time. It would just be a strange, unnamed number that nobody had any other reason to care about.

### The hard part: proving that a famous number is transcendental

Knowing that almost every number is transcendental tells you nothing about a particular number. Proving that $\pi$ or
$e$ is transcendental means showing that **no** polynomial at all, of any degree, has it as a root. That is
much harder, and it took the best mathematicians of the 1800s.

- **1844 and 1851.** Joseph Liouville gave the first numbers proved transcendental. The most famous is
  **Liouville's constant** $L$, shown below.
- **1873.** Charles Hermite proved that $e \approx 2.71828$ is transcendental.
- **1882.** Ferdinand von Lindemann proved that $\pi$ is transcendental.

Lindemann's result settled a problem from ancient Greece. **Squaring the circle** asks for a square with the same area
as a given circle, drawn with only a compass and a straight edge. For a circle of radius 1 the square needs side
$\sqrt{\pi}$. Every length that a compass and straight edge can make from a length of 1 is an algebraic number. If
$\sqrt{\pi}$ were algebraic then $\pi = (\sqrt{\pi})^2$ would be too, and it is not. So the square can never be drawn.

Liouville's constant has a 1 in decimal places $1!, 2!, 3!, 4!, \ldots$ (that is places 1, 2, 6, 24, 120, ...) and
0s everywhere else:

$$L = 0.110001000000000000000001000\ldots$$

### Why Liouville's number is special

Liouville's idea was that algebraic numbers cannot be approximated **too** well by fractions. The simplest case shows
the flavour. Suppose $\tfrac{a}{b}$ and $\tfrac{p}{q}$ are two **different** fractions. Then

$$\left| \frac{a}{b} - \frac{p}{q} \right| = \frac{|aq - bp|}{bq} \ge \frac{1}{bq},$$

because $aq - bp$ is a whole number that is not 0, so its size is at least 1. A fraction keeps all other fractions
with smallish denominators at a respectful distance.

Liouville's constant breaks that rule spectacularly. Cutting $L$ off after the 1 in place $k!$ gives a fraction with
denominator $10^{k!}$ that is closer to $L$ than about $10^{-(k+1)!}$, absurdly close for the size of its
denominator. Worked example 4 uses the inequality above to prove that $L$ is not a fraction. Liouville proved a
stronger version for algebraic numbers of every degree $n$ (they cannot be closer than about $1/q^n$ to fractions
$p/q$), and $L$ beats every one of those limits, so $L$ is transcendental.

### What is still unknown

Some questions that sound easy are still open. Nobody knows whether $\pi + e$ is transcendental, or even whether it
is irrational, and the same goes for $\pi e$. (Try it question 7 shows that at least one of the two must be
transcendental.)

## Worked examples

**1. Finding a polynomial for $\sqrt 2 + \sqrt 3$.** Let $x = \sqrt 2 + \sqrt 3$. Square both sides:
$x^2 = 2 + 2\sqrt 6 + 3 = 5 + 2\sqrt 6$. Move the 5 across: $x^2 - 5 = 2\sqrt 6$. Square again:
$x^4 - 10x^2 + 25 = 24$. So $x^4 - 10x^2 + 1 = 0$, and $\sqrt 2 + \sqrt 3$ is algebraic, a root of a polynomial of
degree 4. (Check with a calculator: $x \approx 3.14626$, $x^2 \approx 9.89898$, $x^4 \approx 97.9898$, and
$97.9898 - 98.9898 + 1 = 0$.)

**2. The size of a polynomial.** List every polynomial of size 2 (degree plus sum of the sizes of the coefficients
equals 2), ignoring the zero polynomial.

Degree 0 means a constant $c$, size $|c|$, so $c = 2$ or $c = -2$; these constants have no roots. Degree 1 means
$ax + b$ with $a \ne 0$ and $1 + |a| + |b| = 2$, so $|a| = 1$ and $b = 0$: the polynomials $x$ and $-x$, with root 0.
Degree 2 would need size at least $2 + 1 = 3$. So size 2 adds only the number 0 to the list. Each size adds a finite,
if growing, batch.

**3. A transcendental number plus a fraction.** Show that if $t$ is transcendental, so is $t + 1$.

Suppose $t + 1$ were algebraic: a root of some integer polynomial $P(x)$. Then $P(t + 1) = 0$. Now
$Q(x) = P(x + 1)$ is also a polynomial with integer coefficients (expanding $(x+1)^k$ only produces whole numbers), and
it is not zero, and $Q(t) = 0$. So $t$ would be algebraic, which it is not. So $t + 1$ is transcendental. The same
proof works for $t + q$ with any fraction $q$ (multiply through by denominators), and for $qt$ with $q \ne 0$.

**4. Liouville's constant is not a fraction.** Let $L_k$ be $L$ cut off after the 1 in place $k!$. It is a fraction
with denominator $q = 10^{k!}$. The rest of $L$ starts in place $(k+1)!$, so

$$0 < L - L_k < 2 \times 10^{-(k+1)!}.$$

Suppose $L = a/b$, a fraction. Since $L \ne L_k$, the inequality above gives
$L - L_k \ge \dfrac{1}{b \cdot 10^{k!}}$. Putting the two together,

$$\frac{1}{b \cdot 10^{k!}} < \frac{2}{10^{(k+1)!}}, \quad\text{so}\quad 10^{(k+1)! - k!} < 2b.$$

But $(k+1)! - k! = k \cdot k!$, which grows without limit as $k$ grows, while $2b$ is a fixed number. For large $k$
this is false. So $L$ is not a fraction.

**5. Building a transcendental number by the diagonal.** Suppose the list of algebraic numbers in $(0, 1)$ began
$\tfrac12 = 0.5000\ldots$, $\tfrac{\sqrt 2}{2} = 0.7071\ldots$, $\tfrac13 = 0.3333\ldots$, $\varphi - 1 =
0.6180\ldots$ The diagonal digits are 5, 0, 3, 0, so the new number starts $0.4555\ldots$ Carried on forever down the
whole list, it differs from every algebraic number, so it is transcendental.

## Try it

1. Show that $\sqrt[3]{2}$ and $1 + \sqrt 2$ are algebraic by finding a polynomial for each.
2. Show that $\tfrac12 + \sqrt 3$ is algebraic. (Hint: subtract $\tfrac12$ and square.)
3. What is the size of $2x^3 - x + 5$? List all polynomials of size 3 that have degree 2.
4. Are the transcendental numbers between 0 and 1 countable or uncountable? Explain.
5. Give two transcendental numbers whose sum is a whole number. So is the set of transcendental numbers "closed under
   addition"?
6. Explain why squaring the circle would be possible if $\pi$ were a root of a quadratic like $x^2 - 10 = 0$.
   (Use the fact that the compass and straight edge can construct square roots.)
7. Challenge: prove that $\pi + e$ and $\pi e$ cannot **both** be algebraic. You may use this fact: a root of a
   polynomial whose coefficients are algebraic numbers is itself algebraic. (Hint: which quadratic has roots $\pi$
   and $e$?)

??? note "Answers"
    1. $\sqrt[3]{2}$ is a root of $x^3 - 2$. For $x = 1 + \sqrt 2$: $x - 1 = \sqrt 2$, so $(x-1)^2 = 2$, giving
       $x^2 - 2x + 1 = 2$, that is $x^2 - 2x - 1 = 0$. (Check: $x \approx 2.41421$, $x^2 \approx 5.82843$, and
       $5.82843 - 4.82843 - 1 = 0$.)
    2. $x - \tfrac12 = \sqrt 3$, so $x^2 - x + \tfrac14 = 3$. Multiply by 4 to clear the fraction:
       $4x^2 - 4x + 1 = 12$, so $4x^2 - 4x - 11 = 0$.
    3. Size $3 + 2 + 1 + 5 = 11$. Degree 2 with size 3 means $ax^2 + bx + c$ with $a \ne 0$ and
       $2 + |a| + |b| + |c| = 3$, so $|a| = 1$, $b = c = 0$: the polynomials $x^2$ and $-x^2$.
    4. **Uncountable.** The real numbers in $(0,1)$ are uncountable, and the algebraic ones among them are countable.
       If the transcendental ones were countable too, alternating the two lists would list all of $(0,1)$, which is
       impossible.
    5. $\pi$ and $1 - \pi$. The second is transcendental by worked example 3 (it is $-\pi + 1$; multiplying by $-1$
       and adding 1 keep a number transcendental). Their sum is 1. So no: adding two transcendental numbers can give an
       algebraic one.
    6. Then $\pi = \sqrt{10}$, and $\sqrt{\pi} = \sqrt{\sqrt{10}}$. From a length 1 you can construct 10, then
       $\sqrt{10}$ by one square-root construction, then $\sqrt{\sqrt{10}}$ by another. That would be the side of the
       square. (In fact $\pi \ne \sqrt{10}$: $\sqrt{10} \approx 3.1623$.)
    7. The quadratic $(x - \pi)(x - e) = x^2 - (\pi + e)x + \pi e$ has roots $\pi$ and $e$. If $\pi + e$ and
       $\pi e$ were both algebraic, this would be a polynomial with algebraic coefficients, so by the fact its root
       $\pi$ would be algebraic. But $\pi$ is transcendental. So at least one of $\pi + e$, $\pi e$ is transcendental,
       even though nobody knows which.

## Common mistake

**"Irrational" and "transcendental" are not the same.** $\sqrt 2$ is irrational but algebraic. Every transcendental
number is irrational (fractions are algebraic), but not the other way round.

**"We cannot name them, so there must be few."** The numbers we can easily write down (fractions, roots, sums of
these) are mostly algebraic, so transcendental numbers feel rare. The counting shows the opposite: algebraic numbers
are a countable sprinkle, and transcendental numbers are almost everything.

## Where it leads

- Previous: [Uncountable means a bigger size](02-uncountable-bigger.md). Next:
  [Power sets and Cantor's theorem](04-power-sets.md): a whole ladder of bigger and bigger infinities.
- [Level 7 page](index.md) · [Infinity topic page](../index.md) · How the algebraic numbers were listed:
  [Level 6](../level-6/index.md).
- Polynomials and their roots: [Algebra, level 8](../../algebra/level-8/01-polynomial-functions.md) and
  [the fundamental theorem of algebra](../../numbers/level-8/05-fundamental-theorem.md). Compass and straight edge:
  [Geometry, level 5](../../geometry/level-5/01-compass-straightedge.md). The number $\pi$:
  [Geometry, level 6](../../geometry/level-6/04-pi-circumference.md).
- On the U of T shelf: $e$ and the exponential function in [MAT137 Unit 4](../../../uoft/MAT137/unit04.md).
