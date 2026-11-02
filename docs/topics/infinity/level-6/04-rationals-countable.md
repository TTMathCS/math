---
title: "The rational numbers are countable"
---

# The rational numbers are countable

*Infinity and strange math · level 6, lesson 4 of 6*

## A question to start

Between 0 and 1 there are the fractions $\frac12$, $\frac13$, $\frac23$, $\frac14$, $\frac34$, $\frac15$, ... infinitely many
of them. Between $\frac12$ and $\frac23$ there are infinitely many more. In fact, between **any** two fractions, however
close, there is another one (their average), and so infinitely many ([level 3](../level-3/index.md)). The fractions
are packed so tightly that no fraction has a "next" one.

The counting numbers, by contrast, are spaced out with gaps of 1. There are infinitely many fractions squeezed into
each of those gaps.

So surely there are far **more** fractions than counting numbers? Cantor showed, in the 1870s, that there are not.
This lesson lists every single fraction.

## The idea

### The rational numbers

A **rational number** is a number that can be written as a fraction $\frac{p}{q}$ of two integers, with $q$ not zero.
(The name comes from "ratio".) The set of all rational numbers is written $\mathbb{Q}$, for "quotient", the answer to
a division. It includes the integers ($5 = \frac51$), the negative fractions ($-\frac34$) and 0.

We start with the **positive** rational numbers and bring in 0 and the negatives at the end.

### Why size order is hopeless

For $\mathbb{N}$ we listed from the smallest up. For the positive fractions that is impossible twice over: there is no
smallest positive fraction (halve any fraction and you get a smaller one), and no fraction has a next one. So any list
of the fractions must jump around, not follow the number line. In [lesson 2](02-integers-countable.md) we already
learned that a list does not have to be in size order. Now we use that freedom fully.

### Fractions are pairs

Every positive fraction $\frac{p}{q}$ is named by a pair of counting numbers: top $p$, bottom $q$. And in
[lesson 3](03-pairs-countable.md) we listed all pairs by walking the short diagonals. So put the fractions in a grid,
row $p$ and column $q$, and walk the same diagonals:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 260" role="img" aria-label="A grid of fractions p over q: row p, column q; shaded bands run along each short diagonal; fractions not in lowest terms, such as 2/2, 2/4, 3/3 and 4/2, are crossed out">
  <text x="70.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="145.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="220.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="295.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="370.0" y="18.0" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="22.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="22.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="22.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="22.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="22.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <path d="M 145.0 40.0 L 70.0 85.0" fill="none" stroke="#9cc9ea" stroke-width="6" stroke-linecap="round" stroke-opacity="0.6"/>
  <path d="M 220.0 40.0 L 145.0 85.0 L 70.0 130.0" fill="none" stroke="#9cc9ea" stroke-width="6" stroke-linecap="round" stroke-opacity="0.6"/>
  <path d="M 295.0 40.0 L 220.0 85.0 L 145.0 130.0 L 70.0 175.0" fill="none" stroke="#9cc9ea" stroke-width="6" stroke-linecap="round" stroke-opacity="0.6"/>
  <path d="M 370.0 40.0 L 295.0 85.0 L 220.0 130.0 L 145.0 175.0 L 70.0 220.0" fill="none" stroke="#9cc9ea" stroke-width="6" stroke-linecap="round" stroke-opacity="0.6"/>
  <rect x="50.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1/1</text>
  <rect x="125.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="145.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1/2</text>
  <rect x="200.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="220.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1/3</text>
  <rect x="275.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="295.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1/4</text>
  <rect x="350.0" y="29.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="370.0" y="44.0" font-size="12" text-anchor="middle" fill="currentColor">1/5</text>
  <rect x="50.0" y="74.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2/1</text>
  <text x="145.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2/2</text>
  <line x1="129.0" y1="93.0" x2="161.0" y2="77.0" stroke="currentColor" stroke-width="1.5"/>
  <rect x="200.0" y="74.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="220.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2/3</text>
  <text x="295.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">2/4</text>
  <line x1="279.0" y1="93.0" x2="311.0" y2="77.0" stroke="currentColor" stroke-width="1.5"/>
  <text x="370.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <rect x="50.0" y="119.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">3/1</text>
  <rect x="125.0" y="119.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="145.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">3/2</text>
  <text x="220.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">3/3</text>
  <line x1="204.0" y1="138.0" x2="236.0" y2="122.0" stroke="currentColor" stroke-width="1.5"/>
  <text x="295.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="370.0" y="134.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <rect x="50.0" y="164.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">4/1</text>
  <text x="145.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">4/2</text>
  <line x1="129.0" y1="183.0" x2="161.0" y2="167.0" stroke="currentColor" stroke-width="1.5"/>
  <text x="220.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="295.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="370.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <rect x="50.0" y="209.0" width="40" height="22" rx="5" fill="#eea66f"/>
  <text x="70.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">5/1</text>
  <text x="145.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="220.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="295.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="370.0" y="224.0" font-size="12" text-anchor="middle" fill="currentColor">·</text>
  <text x="220.0" y="250.0" font-size="11" text-anchor="middle" fill="currentColor">row = top number p, column = bottom number q</text>
</svg>
</div>

There is one new problem. Many entries of the grid are the **same number** with a different name: $\frac22 = \frac11$,
$\frac42 = \frac21$, $\frac24 = \frac12$. A list should name each number once, so we **skip** any fraction that is not
in lowest terms (top and bottom with a common factor bigger than 1). Those are the crossed-out ones. The list begins:

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fraction | $\frac11$ | $\frac12$ | $\frac21$ | $\frac13$ | $\frac31$ | $\frac14$ | $\frac23$ | $\frac32$ | $\frac41$ | $\frac15$ | $\frac51$ | $\frac16$ | $\frac25$ | $\frac34$ | $\frac43$ | $\frac52$ | $\frac61$ |

(On the diagonal where $p + q = 4$ we skipped $\frac22$; where $p + q = 5$ nothing; where $p + q = 6$ we skipped
$\frac24$, $\frac33$ and $\frac42$.)

### Why every positive fraction is reached

Take any positive rational number. Write it in lowest terms, $\frac{p}{q}$; there is exactly one way to do that. That
entry of the grid is **not** skipped, and it lies on diagonal $p + q - 1$, after only finitely many entries. So it gets
a finite position: in fact, no later than the position of the pair $(p, q)$ in lesson 3's list, since skipping only
moves things earlier.

And no number appears twice, because each number has only one lowest-terms name. So the list is a one-to-one
correspondence between the positive rationals and $\mathbb{N}$:

> The positive rational numbers are countable.

### All the rational numbers

Now bring in 0 and the negatives with lesson 2's zigzag. If the positive list is $r_1, r_2, r_3, \ldots$, list

$$0,\ r_1,\ -r_1,\ r_2,\ -r_2,\ r_3,\ -r_3,\ \ldots \quad = \quad 0,\ 1,\ -1,\ \tfrac12,\ -\tfrac12,\ 2,\ -2,\ \tfrac13,\ \ldots$$

Then 0 is 1st, $r_k$ is at position $2k$, and $-r_k$ at position $2k + 1$. Every rational number is reached:

> $\mathbb{Q}$ is countable. There are exactly as many fractions as counting numbers.

### Dense, but not bigger

How can a set be so tightly packed and yet no bigger than $\mathbb{N}$? Because "tightly packed" is about the
**order** of the numbers on the line, and "size" is about **pairing**, which ignores order completely. The list above
jumps from $\frac14$ (6th) up to $\frac23$ (7th) and on to $4$ (9th), back down to $\frac15$ (10th). It looks chaotic,
but it never misses anyone.

Being **dense** (between any two there is another) and being **countable** are independent properties. The rationals
have both. The integers are countable but not dense. In [level 7](../level-7/index.md) you will meet a set, the real
numbers, that is not countable, and the difference is not about how tightly packed it is.

### A list with no skipping

The skipping in the grid list is a little untidy. In 2000 the mathematicians Neil Calkin and Herbert Wilf published a
list of the positive rationals in which every one appears exactly once, with no skipping:

$$1,\ \tfrac12,\ 2,\ \tfrac13,\ \tfrac32,\ \tfrac23,\ 3,\ \tfrac14,\ \tfrac43,\ \tfrac35,\ \tfrac52,\ \tfrac25,\ \tfrac53,\ \tfrac34,\ 4,\ \tfrac15,\ \ldots$$

It comes from a family tree: every fraction $\frac{a}{b}$ has two children, $\frac{a}{a + b}$ and $\frac{a + b}{b}$.
Start with $\frac11$ and read the tree row by row. Its children are $\frac12$ and $\frac21$; the children of $\frac12$
are $\frac13$ and $\frac32$; the children of $\frac21$ are $\frac23$ and $\frac31$; and so on. Calkin and Wilf proved
that every positive fraction in lowest terms appears in the tree exactly once.

There is even a one-line rule to get each term from the one before:

$$x \longmapsto \frac{1}{2\lfloor x \rfloor - x + 1},$$

where $\lfloor x \rfloor$ (the **floor** of $x$) means the whole-number part of $x$, rounded down; for example
$\lfloor \frac32 \rfloor = 1$ and $\lfloor \frac23 \rfloor = 0$. You can test it in the worked examples.

### One more way: codes

A third proof, very short. Give the fraction $\frac{p}{q}$ (in lowest terms) the **code** number $2^p \times 3^q$. For
example $\frac23$ gets $2^2 \times 3^3 = 4 \times 27 = 108$. Different fractions get different codes, because a number
breaks into primes in only one way, so you can read $p$ and $q$ back off the code. Now list the fractions **in
increasing order of their codes**: the codes are counting numbers, so lesson 1's argument (any set of counting
numbers can be listed in increasing order) gives every fraction a finite position. Not every counting number is a
code (5 is not), but that does not matter: we only need everyone reached.

This idea is worth remembering: **if you can give the members of a set different counting-number codes, the set is
countable.**

## Worked examples

**1. Position of a fraction.** At which position is $\frac34$ in the grid list?

1. It is in lowest terms, on the diagonal where $p + q = 7$.
2. The diagonals with $p + q = 2, 3, 4, 5, 6$ contribute $1 + 2 + 2 + 4 + 2 = 11$ fractions after skipping (from the
   table: positions 1 to 11).
3. On the diagonal $p + q = 7$ the order is $\frac16, \frac25, \frac34, \ldots$, and none of these is skipped (7 is
   prime). So $\frac34$ is $11 + 3 =$ **14th**.

**2. All the rationals.** At which position is $-\frac23$ in the list $0, r_1, -r_1, r_2, -r_2, \ldots$?

$\frac23$ is 7th in the positive list, so $\frac23 = r_7$ is at position 14 and $-\frac23$ is at position
$2 \times 7 + 1 =$ **15**.

**3. The Calkin-Wilf rule.** Starting from $\frac32$, use the rule to find the next two terms.

1. $x = \frac32$, $\lfloor x \rfloor = 1$: next is $\dfrac{1}{2 - \frac32 + 1} = \dfrac{1}{\frac32} = \dfrac23$.
2. $x = \frac23$, $\lfloor x \rfloor = 0$: next is $\dfrac{1}{0 - \frac23 + 1} = \dfrac{1}{\frac13} = 3$.
3. This matches the list: $\ldots, \frac32, \frac23, 3, \ldots$ ✓

**4. Codes.** Find the code of $\frac52$, and the fraction whose code is 72.

- $\frac52 \mapsto 2^5 \times 3^2 = 32 \times 9 = 288$.
- $72 = 8 \times 9 = 2^3 \times 3^2$, so $p = 3$, $q = 2$: the fraction $\frac32$.

## Try it

1. Continue the grid list past $\frac51$ (position 11) up to position 17, and check against the table.
2. Which fractions are skipped on the diagonal $p + q = 8$? Which are kept?
3. Find the positions of $\frac52$ and $\frac35$ in the grid list.
4. In the list of all rationals, $0, r_1, -r_1, r_2, -r_2, \ldots$, find the positions of $\frac32$ and $-\frac32$.
5. Use the Calkin-Wilf rule to find the two terms after 4.
6. Find the code $2^p 3^q$ of $\frac34$. Which fraction has code 1944? Is 30 a code?
7. Explain why no list of the positive fractions in increasing order of size can exist.
8. Show that the fractions between 0 and 1 form a countable set. (Hint: start from a list you already have.)

??? note "Answers"
    1. Diagonal $p + q = 7$: $\frac16, \frac25, \frac34, \frac43, \frac52, \frac61$ (none skipped), at positions 12
       to 17. ✓
    2. On $p + q = 8$: $\frac17, \frac26, \frac35, \frac44, \frac53, \frac62, \frac71$. Skipped: $\frac26$, $\frac44$,
       $\frac62$ (common factors 2 or 4). Kept: $\frac17, \frac35, \frac53, \frac71$.
    3. $\frac52$ is on $p + q = 7$, 5th on that diagonal: $11 + 5 =$ **16**. $\frac35$ is on $p + q = 8$; the
       diagonals before hold $11 + 6 = 17$ kept fractions; on its own diagonal the kept ones go $\frac17, \frac35$,
       so $\frac35$ is $17 + 2 =$ **19th**.
    4. $\frac32$ is 8th in the positive list, so $\frac32 = r_8$ is at position $2 \times 8 =$ **16** and $-\frac32$
       at **17**.
    5. $x = 4$, $\lfloor x \rfloor = 4$: $\dfrac{1}{8 - 4 + 1} = \dfrac15$. Then $x = \frac15$, $\lfloor x \rfloor = 0$:
       $\dfrac{1}{0 - \frac15 + 1} = \dfrac{1}{\frac45} = \dfrac54$. So $4, \frac15, \frac54$, matching the list. ✓
    6. $\frac34 \mapsto 2^3 \times 3^4 = 8 \times 81 = 648$. $1944 = 8 \times 243 = 2^3 \times 3^5$, the fraction
       $\frac35$. 30 is $2 \times 3 \times 5$, which has a factor 5, so it is **not** a code.
    7. A list in increasing order would need a first member, the smallest positive fraction. But for any positive
       fraction $x$, the fraction $\frac{x}{2}$ is positive and smaller. So there is no smallest, and no first
       member. (Also, there is no "next" fraction after the first.)
    8. Go through the list of all positive fractions and keep only those between 0 and 1, in the same order:
       $\frac12, \frac13, \frac14, \frac23, \frac15, \ldots$ Each kept fraction had a finite position before, and
       deleting others only moves it earlier, so it still has a finite position. In general: **any part of a
       countable set is countable**.

## Common mistake

**"Between any two fractions there is another, so there must be more fractions than counting numbers."** Density is
about how the numbers sit on the line; size is about pairing. The fractions are dense **and** countable.

**Forgetting to skip repeats, or skipping the wrong ones.** $\frac24$ is skipped because it equals $\frac12$, which
came earlier. $\frac23$ is **not** skipped: 2 and 3 have no common factor. Check with the greatest common divisor.

## Where it leads

- Back: [Pairs are countable](03-pairs-countable.md) · Next: [Countable unions of countable sets](05-countable-unions.md)
- [Level 6 page](index.md) · [Infinity topic page](../index.md)
- Fractions in lowest terms and the greatest common divisor:
  [Number theory level 4](../../number-theory/level-4/01-greatest-common-divisor.md). Rational numbers on the number
  line: [Numbers](../../numbers/level-5/02-rational-numbers.md).
- Coming next in the topic: the real numbers can **not** be listed, by Cantor's diagonal argument
  ([level 7](../level-7/index.md)).
- On the U of T shelf, the rationals, density and the real line:
  [MAT158 Unit 2: real numbers and least upper bounds](../../../uoft/MAT158H1/unit02.md).
