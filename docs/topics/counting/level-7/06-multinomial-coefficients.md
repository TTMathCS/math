---
title: "Multinomial coefficients"
---

# Multinomial coefficients

*Counting and combinations · level 7, lesson 6 of 6*

## A question to start

How many different "words" can you make by rearranging the letters AABBBC? And what is the coefficient of $a^2b^3c$
when you multiply out $(a + b + c)^6$?

These look like two unrelated questions, one about spelling and one about algebra. They have the same answer, 60,
and by the end of this lesson you will see that they are really the same question, just as $\dbinom{n}{k}$ answered
both "choose a team" and "expand $(a + b)^n$".

## The idea

### Arranging letters that repeat: two ways to count

In level 4 you counted the arrangements of BOOK by dividing: $4!$ arrangements if the O's were different, divided by
$2!$ because swapping the two O's changes nothing. Do the same for AABBBC. If all 6 letters were different
($A_1A_2B_1B_2B_3C$) there would be $6! = 720$ arrangements. Each real word appears many times among those 720: the two
A's can be swapped among themselves in $2!$ ways and the three B's in $3!$ ways, without changing the word. So each word
is counted $2! \times 3! \times 1! = 12$ times, and

$$\frac{6!}{2!\,3!\,1!} = \frac{720}{12} = 60.$$

**A second way: fill the places in stages.** A word is six places. Choose which 2 places hold the A's, then which 3 of
the remaining 4 places hold the B's, and the C goes in the last place:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 278" role="img" aria-label="Six empty places; first two are chosen for the A's, then three of the remaining four for the B's, then the last one for C">
  <rect x="30" y="20" width="50" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="75" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="90" y="20" width="50" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="75" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="150" y="20" width="50" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="175" y="75" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="210" y="20" width="50" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="235" y="75" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="270" y="20" width="50" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="295" y="75" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="330" y="20" width="50" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="355" y="75" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="30" y="94" font-size="12" text-anchor="start" fill="currentColor">choose 2 places for A:  C(6, 2) = 15</text>
  <rect x="30" y="100" width="50" height="30" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="120" font-size="14" text-anchor="middle" fill="currentColor">A</text>
  <rect x="90" y="100" width="50" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="100" width="50" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="210" y="100" width="50" height="30" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="235" y="120" font-size="14" text-anchor="middle" fill="currentColor">A</text>
  <rect x="270" y="100" width="50" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="330" y="100" width="50" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="146" font-size="12" text-anchor="start" fill="currentColor">choose 3 of the other 4 for B:  C(4, 3) = 4</text>
  <rect x="30" y="152" width="50" height="30" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="172" font-size="14" text-anchor="middle" fill="currentColor">A</text>
  <rect x="90" y="152" width="50" height="30" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="172" font-size="14" text-anchor="middle" fill="currentColor">B</text>
  <rect x="150" y="152" width="50" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="210" y="152" width="50" height="30" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="235" y="172" font-size="14" text-anchor="middle" fill="currentColor">A</text>
  <rect x="270" y="152" width="50" height="30" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="295" y="172" font-size="14" text-anchor="middle" fill="currentColor">B</text>
  <rect x="330" y="152" width="50" height="30" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="355" y="172" font-size="14" text-anchor="middle" fill="currentColor">B</text>
  <text x="30" y="198" font-size="12" text-anchor="start" fill="currentColor">C goes in the 1 place left:  C(1, 1) = 1</text>
  <rect x="30" y="204" width="50" height="30" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="224" font-size="14" text-anchor="middle" fill="currentColor">A</text>
  <rect x="90" y="204" width="50" height="30" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="224" font-size="14" text-anchor="middle" fill="currentColor">B</text>
  <rect x="150" y="204" width="50" height="30" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="175" y="224" font-size="14" text-anchor="middle" fill="currentColor">C</text>
  <rect x="210" y="204" width="50" height="30" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="235" y="224" font-size="14" text-anchor="middle" fill="currentColor">A</text>
  <rect x="270" y="204" width="50" height="30" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="295" y="224" font-size="14" text-anchor="middle" fill="currentColor">B</text>
  <rect x="330" y="204" width="50" height="30" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="355" y="224" font-size="14" text-anchor="middle" fill="currentColor">B</text>
  <text x="200" y="268" font-size="12" text-anchor="middle" fill="currentColor">15 × 4 × 1 = 60 arrangements (this one is A B C A B B)</text>
</svg>
</div>

$$\binom{6}{2}\binom{4}{3}\binom{1}{1} = 15 \times 4 \times 1 = 60.$$

The two ways agree, and the algebra shows they always will: in
$\dfrac{6!}{2!\,4!} \times \dfrac{4!}{3!\,1!} \times \dfrac{1!}{1!\,0!}$ the $4!$ and $1!$ cancel, leaving
$\dfrac{6!}{2!\,3!\,1!}$.

### The multinomial coefficient

When $n$ things are split into groups of sizes $p$, $q$ and $r$ with $p + q + r = n$, the number of ways is the
**multinomial coefficient**

$$\binom{n}{p,\,q,\,r} = \frac{n!}{p!\,q!\,r!}.$$

It works for any number of groups, not just three: for MISSISSIPPI (1 M, 4 I's, 4 S's, 2 P's, 11 letters),

$$\frac{11!}{1!\,4!\,4!\,2!} = 34\,650.$$

The ordinary choose number is the case of **two** groups: choosing a team of $k$ from $n$ splits the people into "in"
($k$) and "out" ($n - k$), and $\dbinom{n}{k} = \dbinom{n}{k,\ n-k} = \dfrac{n!}{k!\,(n-k)!}$.

### The multinomial theorem

Now expand $(a + b + c)^n$ by choosing, as in [lesson 1](01-expanding-by-choosing.md): from each of the $n$ brackets
choose $a$, $b$ or $c$. Each way of choosing is an $n$-letter word, so there are $3^n$ words in all. The word gives the
product $a^pb^qc^r$ when it has $p$ letters $a$, $q$ letters $b$ and $r$ letters $c$. The number of such words is the
number of arrangements of those letters, $\dfrac{n!}{p!\,q!\,r!}$. So

$$(a + b + c)^n = \sum_{p + q + r = n} \frac{n!}{p!\,q!\,r!}\,a^p b^q c^r,$$

where the sum runs over all whole numbers $p, q, r \ge 0$ that add to $n$. For the opening question: the coefficient
of $a^2b^3c$ in $(a + b + c)^6$ is the number of words with 2 a's, 3 b's and 1 c, the same 60 as AABBBC.

The same reasoning works for any number of terms in the bracket, $(a_1 + a_2 + \cdots + a_m)^n$.

### How many terms, and what they add to

**Number of different terms.** A term of $(a + b + c)^n$ is fixed by $(p, q, r)$ with $p + q + r = n$. Counting those
is the stars-and-bars problem of level 6: $n$ stars and 2 bars, so there are $\dbinom{n+2}{2}$ terms. For $n = 4$, that
is $\dbinom{6}{2} = 15$ terms.

**Sum of the coefficients.** Put $a = b = c = 1$: the coefficients add to $3^n$, the number of words.

### Splitting people into groups

Multinomial coefficients also count ways to split people into **named** groups. Nine people go into a 4-seat car, a
3-seat car and a 2-seat car: choose the passengers of each car in stages, and you get $\dfrac{9!}{4!\,3!\,2!} = 1260$.

Be careful when the groups have **no names** and the same size. Split 9 people into three teams of 3 that are not
labelled. Labelled teams (red, blue, green) give $\dfrac{9!}{3!\,3!\,3!} = 1680$, but every unlabelled split appears
$3! = 6$ times, once for each way to hand out the three labels. So there are $1680 / 6 = 280$ unlabelled splits.

### Paths in three dimensions

In level 5, a path on a grid with 4 steps right and 3 up was a word like RRURUUR, and there were $\dbinom{7}{3} = 35$.
In a 3D grid, a path from $(0, 0, 0)$ to $(2, 2, 2)$ in unit steps along $x$, $y$ or $z$ is a word with 2 X's, 2 Y's
and 2 Z's: $\dfrac{6!}{2!\,2!\,2!} = 90$ paths. Just as Pascal's triangle stacks up the choose numbers, these counts
stack up into a **Pascal's pyramid**, where each number is the sum of the three numbers above it.

## Worked examples

**1. AABBBC.** Done above: $\dfrac{6!}{2!\,3!\,1!} = 60$, or in stages $15 \times 4 \times 1 = 60$.

**2. MISSISSIPPI in stages.** Place the M (11 places), then the 4 I's among the 10 places left, then the 4 S's among
6, then the P's fill the last 2:

$$11 \times \binom{10}{4} \times \binom{6}{4} \times \binom{2}{2} = 11 \times 210 \times 15 \times 1 = 34\,650.$$

**3. Expand $(a + b + c)^4$ by types.** The exponents $(p, q, r)$ add to 4. Sort them by type:

- like $(4, 0, 0)$: coefficient $\dfrac{4!}{4!} = 1$; 3 terms ($a^4, b^4, c^4$);
- like $(3, 1, 0)$: coefficient $\dfrac{4!}{3!\,1!} = 4$; 6 terms ($a^3b, a^3c, b^3a, \ldots$);
- like $(2, 2, 0)$: coefficient $\dfrac{4!}{2!\,2!} = 6$; 3 terms;
- like $(2, 1, 1)$: coefficient $\dfrac{4!}{2!\,1!\,1!} = 12$; 3 terms ($a^2bc, ab^2c, abc^2$).

Terms: $3 + 6 + 3 + 3 = 15 = \dbinom{6}{2}$. ✓ Coefficients:
$3(1) + 6(4) + 3(6) + 3(12) = 3 + 24 + 18 + 36 = 81 = 3^4$. ✓

**4. With numbers inside.** Find the coefficient of $x^3y^2z$ in $(2x - y + 3z)^6$.

Choose $2x$ three times, $-y$ twice and $3z$ once. The number of ways is $\dfrac{6!}{3!\,2!\,1!} = 60$, and each way
gives $(2x)^3(-y)^2(3z) = 8 \times 1 \times 3 \times x^3y^2z = 24x^3y^2z$. The coefficient is $60 \times 24 = 1440$.

**5. Groups with and without names.** In how many ways can 12 students be put into 3 rooms of 4, (a) if the rooms are
named, (b) if they are not?

(a) $\dfrac{12!}{4!\,4!\,4!} = 34\,650$. (b) Divide by the $3! = 6$ ways to name the rooms: $5775$.

## Try it

1. How many arrangements of the letters of BANANA are there?
2. How many words can be made from 4 A's, 3 B's and 2 C's (using all nine)?
3. Find the coefficient of $a^2b^2c$ in $(a + b + c)^5$.
4. How many different terms does $(a + b + c)^5$ have, and what do its coefficients add to?
5. Find the coefficient of $x^2yz^2$ in $(x + 2y - z)^5$.
6. In how many ways can 9 people be split into a group of 4, a group of 3 and a group of 2? Does it matter whether the
   groups have names here? Why?
7. How many shortest paths are there in a 3D grid from $(0, 0, 0)$ to $(3, 2, 1)$?
8. Find the coefficient of $x^4$ in $(1 + x + x^2)^4$. (Hint: decide how many brackets give $1$, $x$ and $x^2$.)

??? note "Answers"
    1. 6 letters: 3 A's, 2 N's, 1 B. $\frac{6!}{3!\,2!\,1!} = \frac{720}{12} = 60$.
    2. $\frac{9!}{4!\,3!\,2!} = \frac{362\,880}{24 \times 6 \times 2} = 1260$.
    3. $\frac{5!}{2!\,2!\,1!} = \frac{120}{4} = 30$.
    4. $\binom{5+2}{2} = 21$ terms; the coefficients add to $3^5 = 243$.
    5. Choose $x$ twice, $2y$ once, $-z$ twice: $\frac{5!}{2!\,1!\,2!} = 30$ ways, each giving
       $x^2 \cdot 2y \cdot (-z)^2 = 2x^2yz^2$. The coefficient is $30 \times 2 = 60$.
    6. $\frac{9!}{4!\,3!\,2!} = 1260$. The groups have different sizes, so they are already told apart by their size:
       naming them changes nothing, and there is nothing to divide by.
    7. A word with 3 X's, 2 Y's and 1 Z: $\frac{6!}{3!\,2!\,1!} = 60$.
    8. Say $p$ brackets give 1, $q$ give $x$ and $r$ give $x^2$, with $p + q + r = 4$ and $q + 2r = 4$. The options are
       $(p, q, r) = (0, 4, 0)$: $\frac{4!}{4!} = 1$; $(1, 2, 1)$: $\frac{4!}{1!\,2!\,1!} = 12$; $(2, 0, 2)$:
       $\frac{4!}{2!\,2!} = 6$. Total $1 + 12 + 6 = 19$.

## Common mistake

**Dividing for groups that are already different.** You divide by $3!$ for "three teams of 3" only because the teams
are the same size and have no names, so they can be swapped without changing anything. Groups of 4, 3 and 2 cannot be
swapped (a group of 4 is not a group of 3), so there is nothing to divide by.

**Forgetting the numbers inside the bracket.** In $(2x - y + 3z)^6$ the multinomial coefficient 60 only counts the
ways of choosing; each choice also brings $2^3$, $(-1)^2$ and $3^1$. Multiply them in.

## Where it leads

- Back: [Proof by counting](05-double-counting.md) · Next level:
  [Level 8: clever counting](../level-8/index.md)
- [Level 7 page](index.md) · [Counting topic page](../index.md)
- Arranging letters with repeats was first met in [level 4](../level-4/index.md); stars and bars, used to count the
  terms, in [level 6](../level-6/index.md).
- The chances of each possible result when a die is rolled many times are multinomial coefficients times powers of
  $\frac16$: [Probability](../../probability/index.md).
- Polynomials in several letters are the business of [Algebra](../../algebra/index.md).
