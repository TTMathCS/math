---
title: "Beyond: Cantor's diagonal argument"
---

# Beyond: Cantor's diagonal argument, and bigger infinities

*Infinity and strange math · step 5 of 5*

## A question to start

The Master step listed the integers, all pairs of counting numbers, and even all the fractions. Every infinite set
we have met so far could be squeezed into Hilbert's hotel. So here is the question: **is every infinite set
countable?** Could the manager also find rooms for one guest for every point on a line, that is, for every real
number between 0 and 1, every decimal like $0.5$, $0.333\ldots$, $0.70710678\ldots$ and $0.10110111011110\ldots$?

In 1891 Georg Cantor published a short argument showing that the answer is **no**. There are more real numbers than
counting numbers. Infinity comes in different sizes.

## The idea

### Real numbers as decimals

Every real number between 0 and 1 can be written as an endless decimal $0.d_1 d_2 d_3 d_4 \ldots$, where each $d_i$
is a digit from 0 to 9. Some numbers have two ways of being written, because, as the Build step showed,
$0.1999\ldots = 0.2000\ldots$. We will dodge that small problem by never building a number with the digits 0 or 9 in
it.

### The diagonal argument

Cantor's proof is a **proof by contradiction**, the method from the [Logic Beyond step](../logic/level-7/index.md).

*Suppose* someone claims to have a complete list of all the real numbers between 0 and 1: a 1st, a 2nd, a 3rd, and
so on, with every such number somewhere in it. Write the list out, one decimal per line.

Now build a new number $x = 0.x_1 x_2 x_3 \ldots$ one digit at a time, by looking down the **diagonal**:

- Look at the **1st digit of the 1st number**. Make $x_1$ different from it.
- Look at the **2nd digit of the 2nd number**. Make $x_2$ different from it.
- In general, make the $n$th digit of $x$ different from the $n$th digit of the $n$th number.

A simple rule that does this: *if the diagonal digit is 5, write 4; otherwise write 5.* Then $x$ uses only the
digits 4 and 5, so it has only one decimal form, and it is between 0 and 1.

Is $x$ on the list? It is not the 1st number, because they differ in the 1st digit. It is not the 2nd number,
because they differ in the 2nd digit. It is not the $n$th number for **any** $n$, because they differ in the $n$th
digit. So $x$ is a real number between 0 and 1 that is **missing** from the list. But the list was supposed to be
complete. Contradiction.

So **no** list can contain all the real numbers between 0 and 1. They are **uncountable**. And since they are only
part of the whole real number line $\mathbb{R}$, the real numbers are uncountable too.

### How the trick works

The new number is built to disagree with each listed number in one place. Whatever list you are given, the diagonal
gives you a number that escapes it. It is like the island sentence "I am a liar" in
[Logic and puzzles](../logic/level-1/index.md): a cleverly built object that cannot fit anywhere.

### Infinitely many sizes of infinity

Cantor went further. The **power set** of a set $A$, written $\mathcal{P}(A)$, is the set of all its subsets. If
$A = \{1, 2, 3\}$, its subsets are

$$\varnothing,\ \{1\},\ \{2\},\ \{3\},\ \{1,2\},\ \{1,3\},\ \{2,3\},\ \{1,2,3\},$$

which is 8 of them. A set with $n$ elements has $2^n$ subsets (each element is either in or out), and $2^n$ is
always more than $n$. **Cantor's theorem** says the same is true for every set, even an infinite one: $\mathcal{P}(A)$
is always bigger than $A$.

*Proof sketch.* Suppose each element $a$ of $A$ could be paired with a subset $S_a$, using up every subset. Build the
subset $D$ of all elements $a$ that are **not** in their own partner $S_a$. Then $D$ must be some element's
partner, say $D = S_y$. Is $y$ in $D$? If it is, then by the rule for $D$ it is not in $S_y = D$. If it is not, then
by the same rule it is in $D$. Either way, a contradiction. So no such pairing exists. ∎

It is the diagonal argument again, in a more general form. So $\mathcal{P}(\mathbb{N})$ is bigger than
$\mathbb{N}$; the power set of that is bigger still; and so on, forever. There is no biggest infinity.

### A question with no answer

The size of $\mathbb{N}$ is called $\aleph_0$. The size of $\mathbb{R}$ is called the **continuum**. Is there a size
of infinity strictly between them? Cantor believed not; this is the **continuum hypothesis**. In 1940 Kurt Gödel
showed it cannot be disproved from the usual rules (axioms) of set theory, and in 1963 Paul Cohen showed it cannot
be proved from them either. Using only the standard rules that mathematicians build everything on, the question can
never be settled.

## Worked example

**Run the diagonal on a list.** Here are the first five numbers of some list, with the diagonal digits in bold.

| Position | Number |
| --- | --- |
| 1st | 0.**1**4159... |
| 2nd | 0.2**5**000... |
| 3rd | 0.33**3**33... |
| 4th | 0.718**2**8... |
| 5th | 0.6065**9**... |

The diagonal digits are 1, 5, 3, 2, 9. Apply the rule (5 becomes 4, anything else becomes 5):

$$x = 0.54555\ldots$$

Check: $x$ differs from the 1st number in digit 1 (5, not 1), from the 2nd in digit 2 (4, not 5), from the 3rd in
digit 3 (5, not 3), from the 4th in digit 4 (5, not 2), and from the 5th in digit 5 (5, not 9). However long the list
goes on, $x$ keeps being built to differ from every line.

## Try it

1. A list starts $0.2718\ldots$, $0.1515\ldots$, $0.9999\ldots$, $0.5055\ldots$ Use the 5-and-4 rule to write the
   first four digits of a number that is not any of these four.
2. How many subsets does $\{a, b, c, d\}$ have? List the ones with exactly 2 elements.
3. The rational numbers are countable. So why does the diagonal argument not prove that they are uncountable? Run
   the argument on a list of all fractions and see where it fails.
4. Why does the rule avoid making digits 0 and 9? Give an example of two different-looking decimals that are the
   same number.
5. Are there more points on a line segment 2 cm long than on one 1 cm long? Hint: pair each point $x$ (its
   distance from the left end) with something.
6. The real numbers are the rational numbers together with the irrational numbers. Are the irrational numbers
   countable or uncountable? Explain.

??? note "Answers"
    1. The diagonal digits are 2, 5, 9, 5. The rule gives 5, 4, 5, 4: the number $0.5454\ldots$ differs from every
       one of them.
    2. $2^4 = 16$ subsets. The six with 2 elements: $\{a,b\}$, $\{a,c\}$, $\{a,d\}$, $\{b,c\}$, $\{b,d\}$,
       $\{c,d\}$.
    3. The argument builds a new decimal $x$ that is not on the list. But nothing makes $x$ a **fraction**: its
       digits need not repeat, so $x$ is usually irrational. Leaving an irrational number off a list of fractions is
       no contradiction at all. The argument only works when the list is meant to hold **every** real number.
    4. Because some numbers have two decimal forms, such as $0.1999\ldots = 0.2000\ldots$ (or
       $0.4999\ldots = 0.5$). If $x$ could end in all 9s or all 0s, it might differ from a listed number in every digit and still
       be **equal** to it. Using only 4s and 5s makes that impossible.
    5. **No, the same.** Pair the point at distance $x$ on the short segment with the point at distance $2x$ on the
       long one. Every point of each segment gets exactly one partner. Stretching a segment does not add points.
    6. **Uncountable.** If they were countable, then the rationals (countable) and the irrationals together could be
       listed by taking one from each list in turn, like listing the integers. That would make $\mathbb{R}$
       countable, which Cantor proved is false. So "most" real numbers are irrational.

## Common mistake

**Thinking every infinity is the same.** "Infinity is infinity" sounds natural, and for many infinite sets, such as
the even numbers, the integers and the fractions, it is true: they are all the size $\aleph_0$. But the real
numbers are strictly bigger, and power sets are bigger still. Two infinite sets are the same size only if a perfect
pairing can actually be found, and sometimes it can be **proved** that none exists.

## Where it leads

- Back a step: [Master: countable infinity](04-master.md)
- Proofs by contradiction like this one are explained in [Logic and puzzles](../logic/level-7/index.md). Endless
  decimals, rational and irrational numbers are in [Numbers](../numbers/index.md).
- On the U of T shelf, the real numbers, completeness and limits are treated with full proofs in
  [MAT158 Unit 2: real numbers and least upper bounds](../../uoft/MAT158H1/unit02.md) and
  [Unit 3: limits](../../uoft/MAT158H1/unit03.md); sets and proof start in
  [MAT137 Unit 1](../../uoft/MAT137/unit01.md), and infinite sums in
  [MAT159 Unit 5: infinite series](../../uoft/MAT159H1/unit05.md).
- The other topics: [all topics](../index.md).
