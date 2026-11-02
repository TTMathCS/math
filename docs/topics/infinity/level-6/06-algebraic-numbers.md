---
title: "Algebraic numbers are countable"
---

# Algebraic numbers are countable

*Infinity and strange math · level 6, lesson 6 of 6*

## A question to start

$\sqrt2 = 1.41421\ldots$ is not a fraction ([why](../../numbers/level-6/03-root-two-irrational.md)), so it is not in the
list of rationals from [lesson 4](04-rationals-countable.md). But it is still pinned down exactly, by a simple
equation:

$$x^2 = 2.$$

The golden ratio $1.61803\ldots$ is pinned down by $x^2 = x + 1$, and the cube root of 2 by $x^3 = 2$. There are
infinitely many equations like these, of every degree (with $x^2$, $x^3$, $x^{100}$, ...), and many of them have
several solutions.

Is the set of all numbers that solve such equations countable? It feels like it might be far too big: it contains all
the fractions, all the square roots, cube roots, and much stranger numbers. Georg Cantor answered this question in
1874, in the same paper where he first showed that some infinite sets are **not** countable.

## The idea

### Polynomials and their roots

A **polynomial** in $x$ is an expression built from powers of $x$ multiplied by numbers and added up, such as

$$3x^2 - 5x + 2 \qquad\text{or}\qquad x^3 - 2 \qquad\text{or}\qquad 7x + 4.$$

The numbers in front of the powers are the **coefficients** (in $3x^2 - 5x + 2$ they are 3, $-5$ and 2). The highest
power is the **degree** (here 2). A **root** of a polynomial is a number that makes it equal 0. For example 1 is a root
of $3x^2 - 5x + 2$, because $3 - 5 + 2 = 0$. (Polynomials are covered in
[Algebra](../../algebra/level-6/02-polynomials.md).)

In this lesson we only use polynomials whose coefficients are **integers** (whole numbers, positive, negative or 0),
with degree at least 1.

### Algebraic numbers

> A real number is **algebraic** if it is a root of some polynomial with integer coefficients (not all zero).

Examples:

- **Every fraction.** $\frac{p}{q}$ is a root of $qx - p$, since $q \times \frac{p}{q} - p = 0$. So $\frac34$ is a root
  of $4x - 3$, and $-5$ is a root of $x + 5$.
- **$\sqrt2$**, a root of $x^2 - 2$.
- **The golden ratio** $\frac{1 + \sqrt5}{2}$, a root of $x^2 - x - 1$.
- **The cube root of 2**, a root of $x^3 - 2$.
- **$\sqrt2 + \sqrt3$**, which is less obvious. Call it $x$. Then $x^2 = 2 + 2\sqrt6 + 3 = 5 + 2\sqrt6$, so
  $x^2 - 5 = 2\sqrt6$. Square again: $(x^2 - 5)^2 = 24$, which expands to $x^4 - 10x^2 + 25 = 24$. So
  $\sqrt2 + \sqrt3$ is a root of $x^4 - 10x^2 + 1$.

A real number that is **not** algebraic is called **transcendental**: it "goes beyond" algebra.

### Step 1: each polynomial has only finitely many roots

**A polynomial of degree $n$ has at most $n$ roots.** For example $x^3 - x = x(x - 1)(x + 1)$ has exactly the three
roots $0, 1, -1$, and no polynomial of degree 3 can have four.

Here is a sketch of why.

1. If $r$ is a root of a polynomial $p(x)$, then $x - r$ divides $p(x)$ exactly: $p(x) = (x - r) \times q(x)$, where
   $q(x)$ has degree one less. (This is the **factor theorem**. One way to see it: $p(x) = p(x) - p(r)$ because
   $p(r) = 0$, and each piece $x^k - r^k$ of the difference factors as $(x - r)(x^{k-1} + x^{k-2}r + \cdots + r^{k-1})$.
   Try $x^2 - r^2 = (x - r)(x + r)$.)
2. Any **other** root $s$ makes $(s - r) \times q(s) = 0$, and $s - r$ is not 0, so $q(s) = 0$: $s$ is a root of $q$.
3. So each root peels off one factor and lowers the degree by 1. After $n$ roots the degree is 0: what is left is a
   non-zero number, which has no roots at all. So there cannot be more than $n$ roots.

(More on this: [Polynomial functions](../../algebra/level-8/01-polynomial-functions.md).)

### Step 2: a size measure with finitely many polynomials of each size

Give each polynomial a **size**: its degree plus all its coefficients without their signs. For
$a_n x^n + \cdots + a_1 x + a_0$:

$$\text{size} = n + |a_n| + |a_{n-1}| + \cdots + |a_1| + |a_0|.$$

($|a|$ means $a$ without its minus sign.) For example $x^2 - 2$ has size $2 + 1 + 0 + 2 = 5$, and $3x^2 - 5x + 2$ has
size $2 + 3 + 5 + 2 = 12$.

The key fact: **there are only finitely many polynomials of each size.** If the size is $s$, then the degree is less
than $s$, and every coefficient is between $-s$ and $s$. That leaves only finitely many choices. Here are the smallest
sizes:

| Size | Number of polynomials | Examples | New real roots |
| --- | --- | --- | --- |
| 1 | 0 | (none: degree 1 needs a non-zero coefficient too) | |
| 2 | 2 | $x$, $-x$ | $0$ |
| 3 | 8 | $2x$, $x + 1$, $x - 1$, $x^2$, ... | $-1$, $1$ |
| 4 | 22 | $2x + 1$, $x - 2$, $x^2 - 1$, $x^3$, ... | $-2$, $-\frac12$, $\frac12$, $2$ |
| 5 | 56 | $3x - 1$, $x^2 - 2$, $2x^2 - 1$, $x^2 - x - 1$, ... | $\pm\frac13$, $\pm 3$, $\pm\sqrt2$, $\pm\frac{\sqrt2}{2}$, $\frac{\pm 1 \pm \sqrt5}{2}$ |

(Some polynomials, like $x^2 + 1$, have no real roots at all; others repeat roots already found, which we skip.)

### Step 3: list them all

Now list the algebraic numbers:

1. Go through the sizes $s = 2, 3, 4, 5, \ldots$ in order.
2. For each size, go through its finitely many polynomials, and for each one, its finitely many real roots.
3. Write down each root, skipping any number already written.

Writing each size's new roots from smallest to largest, the list begins
$0, -1, 1, -2, -\frac12, \frac12, 2, \ldots$ Every algebraic number is a root of some polynomial, which
has some size $s$, so the number is written down during the (finite) work for size $s$, at a finite position. So:

> **The algebraic numbers are countable.**

You could also say it in one line using [lesson 5](05-countable-unions.md): the algebraic numbers are the union, over
the sizes $s = 2, 3, 4, \ldots$, of finitely many roots of finitely many polynomials, and a countable union of finite
sets is countable.

### Why this matters: a teaser for level 7

The algebraic numbers include every fraction, every square root, cube root and $n$th root of a fraction, every
combination of those, and many numbers that cannot be written with roots at all (some fifth-degree equations, like
$x^5 - x - 1 = 0$, have roots that no formula with roots can express). It is an enormous, rich collection. And it is
still countable, the same size as $\mathbb{N}$.

In [level 7](../level-7/index.md), Cantor's diagonal argument shows that the real numbers are **not** countable. Put
the two facts together: the reals cannot all be algebraic. In fact, almost all real numbers are transcendental.
Cantor proved that transcendental numbers exist without finding a single one.

Individual transcendental numbers are much harder to catch. Joseph Liouville built the first examples in 1844.
Charles Hermite proved in 1873 that $e$ is transcendental, and Ferdinand von Lindemann proved in 1882 that $\pi$ is.
Lindemann's result also settled an ancient Greek problem: with only a compass and straight edge you cannot draw a
square with the same area as a given circle ("squaring the circle"), because that would make $\sqrt\pi$, and so $\pi$,
algebraic.

## Worked examples

**1. A fraction is algebraic.** Show that $\frac34$ is algebraic and find the size of your polynomial.

$\frac34$ is a root of $4x - 3$, since $4 \times \frac34 - 3 = 0$. Size: degree 1, coefficients 4 and $-3$, so
$1 + 4 + 3 = 8$.

**2. The golden ratio.** Check that $\phi = \frac{1 + \sqrt5}{2}$ is a root of $x^2 - x - 1$, and find the size.

1. $\phi^2 = \frac{(1 + \sqrt5)^2}{4} = \frac{1 + 2\sqrt5 + 5}{4} = \frac{6 + 2\sqrt5}{4} = \frac{3 + \sqrt5}{2}$.
2. $\phi^2 - \phi - 1 = \frac{3 + \sqrt5}{2} - \frac{1 + \sqrt5}{2} - 1 = \frac{2}{2} - 1 = 0$. ✓
3. Size: $2 + 1 + 1 + 1 = 5$. So the golden ratio appears in the list during size 5.

**3. All polynomials of size 3.** List them and their real roots.

1. Degree 1, coefficients adding (without signs) to 2: $2x$, $-2x$, $x + 1$, $x - 1$, $-x + 1$, $-x - 1$.
2. Degree 2, coefficients adding to 1: $x^2$ and $-x^2$.
3. That is 8 polynomials. Roots: 0 (from $\pm 2x$ and $\pm x^2$, already listed at size 2), $-1$ and $1$.

**4. At most n roots.** How many roots can $x^4 - 10x^2 + 1$ have? Find them.

At most 4, since the degree is 4. Treat it as a quadratic in $x^2$: $x^2 = 5 \pm 2\sqrt6$. Since
$5 + 2\sqrt6 = (\sqrt2 + \sqrt3)^2$ and $5 - 2\sqrt6 = (\sqrt3 - \sqrt2)^2$, the four roots are
$\pm(\sqrt2 + \sqrt3)$ and $\pm(\sqrt3 - \sqrt2)$. Exactly 4.

## Try it

1. Show that $-\frac57$ is algebraic. What is the size of your polynomial?
2. Find a polynomial with integer coefficients that has the cube root of 5 as a root, and give its size.
3. Find the sizes of $x^2 - 2$ and $x^2 + x - 1$.
4. List all the polynomials of size 2 and their roots.
5. Show that $1 + \sqrt2$ is algebraic, and find the size of your polynomial.
6. What is the largest number of roots $x^5 - 3x + 1$ could have? Explain why $x^2 + 1$ has no real roots at all.
7. Explain why there are only finitely many polynomials of size 10. (You do not need to count them exactly.)
8. Including complex roots (numbers like $i$, with $i^2 = -1$, from [Numbers level 7](../../numbers/level-7/index.md)),
   is the set of all algebraic numbers still countable? Why?

??? note "Answers"
    1. $-\frac57$ is a root of $7x + 5$, since $7 \times (-\frac57) + 5 = 0$. Size $1 + 7 + 5 = 13$.
    2. $x^3 - 5$: the cube root of 5, cubed, is 5. Size $3 + 1 + 0 + 0 + 5 = 9$.
    3. $x^2 - 2$: $2 + 1 + 0 + 2 = 5$. $x^2 + x - 1$: $2 + 1 + 1 + 1 = 5$.
    4. Size 2 means degree 1 and coefficients adding to 1, so $x$ and $-x$. Both have the single root 0.
    5. Let $x = 1 + \sqrt2$. Then $x - 1 = \sqrt2$, and squaring, $x^2 - 2x + 1 = 2$, so $x^2 - 2x - 1 = 0$. Size
       $2 + 1 + 2 + 1 = 6$.
    6. At most **5**, the degree. For $x^2 + 1$: any real number squared is 0 or positive, so $x^2 + 1$ is at least 1
       and never 0.
    7. A polynomial of size 10 has degree at most 9 (degree plus a non-zero leading coefficient is at most 10), so it
       has at most 10 coefficients, and each one is between $-10$ and 10, a choice of 21 values. That gives at most
       $21^{10}$ choices of coefficients for each of the 9 possible degrees: a huge number, but finite.
    8. **Yes.** The same argument works: a polynomial of degree $n$ has at most $n$ roots even counting complex
       ones (the factor theorem works for complex numbers too), so each size still gives finitely many roots, and the
       list reaches every one.

## Common mistake

**"√2 is not a fraction, so it must be one of the uncountably many numbers."** Being irrational does not make a
number "uncountable". Countability is a property of a **set**, not of a single number. $\sqrt2$ belongs to the
algebraic numbers, a countable set. Almost all real numbers are transcendental, but the irrational numbers you meet
most often in school ($\sqrt2$, $\sqrt3$, the golden ratio) are algebraic.

**Thinking "algebraic" means "can be written with square roots and cube roots".** Every number written with
fractions and roots is algebraic, but not the other way round: some algebraic numbers, like the real root of
$x^5 - x - 1$, cannot be written that way at all. They are algebraic because an equation pins them down.

## Where it leads

- Back: [Countable unions of countable sets](05-countable-unions.md) · Next level: [Level 7: bigger infinities](../level-7/index.md),
  where the diagonal argument shows the real numbers cannot be listed, and transcendental numbers fill almost the
  whole line.
- [Level 6 page](index.md) · [Infinity topic page](../index.md)
- Polynomials and their roots: [Polynomials](../../algebra/level-6/02-polynomials.md) and
  [Polynomial functions](../../algebra/level-8/01-polynomial-functions.md) in Algebra. Every polynomial has a complex
  root: [The fundamental theorem of algebra](../../numbers/level-8/05-fundamental-theorem.md).
- On the U of T shelf, polynomials over fields and their factorisation:
  [MAT240 Unit 9: polynomials, UFD and resultants](../../../uoft/MAT240H1/unit09.md).
