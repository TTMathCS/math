---
title: "Identities from the theorem"
---

# Identities from the theorem

*Counting and combinations · level 7, lesson 3 of 6*

## A question to start

Add up row 4 of Pascal's triangle: $1 + 4 + 6 + 4 + 1 = 16$. Now add it with alternating signs:
$1 - 4 + 6 - 4 + 1 = 0$. Try row 5: $1 + 5 + 10 + 10 + 5 + 1 = 32$, and $1 - 5 + 10 - 10 + 5 - 1 = 0$.

Every row adds to a power of 2, and every alternating sum is 0. Is that luck, or must it happen for row 100 too? The
binomial theorem answers in one line, and then counting answers again, in a way that tells you **why**.

## The idea

### An identity machine

An **identity** is an equation that is true for every value of its letters, such as $(a + b)^2 = a^2 + 2ab + b^2$.
The binomial theorem is an identity:

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{\,n-k} b^{\,k}.$$

Because it holds for **every** $a$ and $b$, you may put in any numbers you like, and each choice gives a new fact
about the binomial coefficients. Choosing good numbers is the trick of this lesson. After each fact we also look for a
**counting reason**, because the algebra shows that a fact is true, but the counting often shows why.

### Put $a = b = 1$: rows add to powers of 2

Every power of 1 is 1, so the right side becomes the plain sum of the coefficients, and the left side is
$(1 + 1)^n = 2^n$:

$$\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n} = 2^n.$$

**The counting reason.** A **subset** of a set is any collection of its members, including the empty collection
$\{\ \}$ and the whole set. A set of $n$ things has $2^n$ subsets, because each thing is either in or out, two choices
for each of $n$ things (level 3). Sort those subsets by size: there are $\dbinom{n}{k}$ subsets of size $k$. Adding
the pile sizes gives the total. Here it is for $\{1, 2, 3\}$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 425 242" role="img" aria-label="The eight subsets of 1, 2, 3 sorted by size: one of size 0, three of size 1, three of size 2, one of size 3">
  <text x="55" y="22" font-size="12" text-anchor="middle" fill="currentColor">size 0</text>
  <rect x="17" y="85" width="76" height="26" rx="6" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="55" y="103" font-size="13" text-anchor="middle" fill="currentColor">{ }</text>
  <text x="55" y="190" font-size="15" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="160" y="22" font-size="12" text-anchor="middle" fill="currentColor">size 1</text>
  <rect x="122" y="45" width="76" height="26" rx="6" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="160" y="63" font-size="13" text-anchor="middle" fill="currentColor">{1}</text>
  <rect x="122" y="85" width="76" height="26" rx="6" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="160" y="103" font-size="13" text-anchor="middle" fill="currentColor">{2}</text>
  <rect x="122" y="125" width="76" height="26" rx="6" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="160" y="143" font-size="13" text-anchor="middle" fill="currentColor">{3}</text>
  <text x="160" y="190" font-size="15" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="265" y="22" font-size="12" text-anchor="middle" fill="currentColor">size 2</text>
  <rect x="227" y="45" width="76" height="26" rx="6" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="265" y="63" font-size="13" text-anchor="middle" fill="currentColor">{1,2}</text>
  <rect x="227" y="85" width="76" height="26" rx="6" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="265" y="103" font-size="13" text-anchor="middle" fill="currentColor">{1,3}</text>
  <rect x="227" y="125" width="76" height="26" rx="6" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="265" y="143" font-size="13" text-anchor="middle" fill="currentColor">{2,3}</text>
  <text x="265" y="190" font-size="15" text-anchor="middle" fill="currentColor" font-weight="bold">3</text>
  <text x="370" y="22" font-size="12" text-anchor="middle" fill="currentColor">size 3</text>
  <rect x="332" y="85" width="76" height="26" rx="6" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="370" y="103" font-size="13" text-anchor="middle" fill="currentColor">{1,2,3}</text>
  <text x="370" y="190" font-size="15" text-anchor="middle" fill="currentColor" font-weight="bold">1</text>
  <text x="212" y="212" font-size="13" text-anchor="middle" fill="currentColor">1 + 3 + 3 + 1 = 8 = 2³</text>
  <text x="212" y="232" font-size="12" text-anchor="middle" fill="currentColor">blue (even size): 1 + 3 = 4     orange (odd size): 3 + 1 = 4</text>
</svg>
</div>

### Put $a = 1$, $b = -1$: the alternating sum is 0

Now $(1 + (-1))^n = 0^n = 0$ for $n \ge 1$, and the terms have signs $(-1)^k$:

$$\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \binom{n}{3} + \cdots = 0 \qquad (n \ge 1).$$

Move the negative terms to the other side and this says: **a set has as many subsets of even size as of odd size.**
In the picture above, the blue (even) ones and the orange (odd) ones are 4 each.

**The counting reason.** Pair the subsets up with a "light switch" on the thing called 1: if 1 is in the subset,
take it out; if it is out, put it in. So $\{\ \} \leftrightarrow \{1\}$, $\{2\} \leftrightarrow \{1, 2\}$,
$\{3\} \leftrightarrow \{1, 3\}$, $\{2, 3\} \leftrightarrow \{1, 2, 3\}$. Flipping the switch twice gets you back where
you started, so every subset has exactly one partner. Each switch changes the size by 1, so every pair has one even
and one odd subset. The subsets come in pairs with one of each, so there are equally many: $2^{n-1}$ each. This
kind of argument, a perfect matching between two sets, is a **bijection** (level 6), and it is often the best proof of
all.

Why does it need $n \ge 1$? With $n = 0$ there is no thing called 1 to switch, and indeed the only subset (empty)
is even: $\dbinom{0}{0} = 1$, not 0. The algebra agrees, since $0^0 = 1$.

### Put $a = 1$, $b = 2$: a sum that makes $3^n$

$$\sum_{k=0}^{n} \binom{n}{k} 2^k = (1 + 2)^n = 3^n.$$

**The counting reason.** Count the strings of length $n$ made of the digits 0, 1, 2: there are $3^n$. Sort them by how
many digits are **not** 0. For $k$ non-zero digits, choose their places in $\dbinom{n}{k}$ ways, then make each one a
1 or a 2 in $2^k$ ways. Adding over $k$ gives the left side.

You can make many more. With $b = 9$ you get $\sum \binom{n}{k}9^k = 10^n$, which counts all $n$-digit strings by how
many of their digits are non-zero.

### Comparing coefficients

A different trick: write one expression in two ways and compare the coefficient of the same power. Since
$(1 + x)^{2n} = (1 + x)^n(1 + x)^n$, the coefficient of $x^n$ must be equal on both sides.

- On the left it is $\dbinom{2n}{n}$.
- On the right, an $x^n$ comes from $x^k$ in the first bracket-power times $x^{n-k}$ in the second, for each $k$, so it
  is $\sum_k \dbinom{n}{k}\dbinom{n}{n-k}$. Since $\dbinom{n}{n-k} = \dbinom{n}{k}$, this is the sum of the squares.

$$\binom{n}{0}^2 + \binom{n}{1}^2 + \cdots + \binom{n}{n}^2 = \binom{2n}{n}.$$

For row 3: $1 + 9 + 9 + 1 = 20 = \dbinom{6}{3}$. ✓ [Lesson 5](05-double-counting.md) gives a counting reason for
this, with a club of boys and girls.

### The total size of all subsets

How many members do all the subsets of $\{1, \ldots, n\}$ have, added together? That is
$\sum_k k\dbinom{n}{k}$. A pairing answers it. Pair each subset with its **complement**, the subset of everything it
leaves out. A subset of size $k$ and its complement of size $n - k$ have $n$ members between them. There are $2^n$
subsets, so $2^{n-1}$ such pairs, each holding $n$ members:

$$\sum_{k=0}^{n} k\binom{n}{k} = n \cdot 2^{n-1}.$$

For $n = 3$: $0 + 3 + 6 + 3 = 12 = 3 \times 4$. ✓ (Another way: each of the $n$ things is in exactly half the
subsets, $2^{n-1}$ of them.)

<figure class="play" data-play="pascal"><span class="ai-tag">AI-created</span><figcaption><b>Each row adds to a power of 2.</b> Tap any row.</figcaption></figure>

## Worked examples

**1. Subsets with at least two things.** How many subsets of a 10-element set have at least 2 members?

All subsets: $2^{10} = 1024$. Take away the 1 empty subset and the $\dbinom{10}{1} = 10$ one-member subsets:
$1024 - 1 - 10 = 1013$.

**2. Every other entry of a row.** Find $\dbinom{8}{0} + \dbinom{8}{2} + \dbinom{8}{4} + \dbinom{8}{6} + \dbinom{8}{8}$.

These are the even-size subsets of an 8-element set: half of $2^8$, so **128**. Check:
$1 + 28 + 70 + 28 + 1 = 128$. ✓

**3. A weighted sum.** Find $\sum_{k=0}^{5}\dbinom{5}{k}2^k$.

It is $(1 + 2)^5 = 3^5 = 243$. Check: $1 + 10 + 40 + 80 + 80 + 32 = 243$. ✓

**4. Squares of a row.** Find $1^2 + 6^2 + 15^2 + 20^2 + 15^2 + 6^2 + 1^2$.

It is the sum of the squares of row 6, so $\dbinom{12}{6} = 924$. Check: $1 + 36 + 225 + 400 + 225 + 36 + 1 = 924$. ✓

**5. Choosing which numbers to put in.** Find $\sum_{k=0}^{n}(-1)^k\dbinom{n}{k}2^{n-k}$.

This matches $(a + b)^n$ with $a = 2$, $b = -1$, so it equals $(2 - 1)^n = 1$ for every $n$. For $n = 3$:
$8 - 3 \cdot 4 + 3 \cdot 2 - 1 = 1$. ✓

## Try it

1. What is the sum of the numbers in row 12 of Pascal's triangle?
2. A set has 7 members. How many of its subsets have an odd number of members?
3. Find $\dbinom{9}{1} + \dbinom{9}{3} + \dbinom{9}{5} + \dbinom{9}{7} + \dbinom{9}{9}$.
4. Show that $\sum_{k=0}^{n}\dbinom{n}{k}3^k = 4^n$, check it for $n = 3$, and give a counting reason.
5. Find $\sum_{k=0}^{5}(-1)^k\dbinom{5}{k}2^{5-k}$, and check it by adding the six terms.
6. A pizza shop has 8 toppings. How many different pizzas have an even number of toppings (none counts as even)?
7. Find $\sum_{k=0}^{5}\dbinom{5}{k}^2$ in two ways.
8. A club has 6 members. Every possible committee (of any size, including the empty one) is written down. How many
   names are written in total?

??? note "Answers"
    1. $2^{12} = 4096$.
    2. Half of the $2^7 = 128$ subsets: **64**.
    3. The odd-size subsets of a 9-element set: $2^9 / 2 = 256$. Check: $9 + 84 + 126 + 36 + 1 = 256$. ✓
    4. Put $a = 1$, $b = 3$: $(1 + 3)^n = 4^n$. For $n = 3$: $1 + 3 \cdot 3 + 3 \cdot 9 + 27 = 1 + 9 + 27 + 27 = 64 = 4^3$. ✓
       Counting: strings of length $n$ from the digits 0, 1, 2, 3 number $4^n$; choose the $k$ places of the non-zero
       digits in $\binom{n}{k}$ ways and fill them in $3^k$ ways.
    5. $(2 - 1)^5 = 1$. Terms: $32 - 80 + 80 - 40 + 10 - 1 = 1$. ✓
    6. Even-size subsets of 8 toppings: $2^8 / 2 = 128$.
    7. By the identity, $\binom{10}{5} = 252$. Directly: $1 + 25 + 100 + 100 + 25 + 1 = 252$. ✓
    8. This is $\sum_k k\binom{6}{k} = 6 \times 2^5 = 192$. Reason: each member is on half of the $2^6 = 64$ committees,
       so each name is written 32 times, and $6 \times 32 = 192$.

## Common mistake

**Forgetting the edge cases.** "The alternating sum is 0" needs $n \ge 1$, and "subsets with at least one member"
means $2^n - 1$, not $2^n$. Before you trust an identity, test it on the smallest cases ($n = 0$ and $n = 1$).

**Putting numbers in the wrong place.** In $\sum \binom{n}{k}2^k$ the 2 belongs to $b$, the part whose power is $k$.
If you write it as $(2 + 1)^n$ you still get $3^n$ here, but with $\sum(-1)^k\binom{n}{k}2^{n-k}$ the order matters for
the sign: it is $(2 - 1)^n$, not $(1 - 2)^n$, which would give $(-1)^n$.

## Where it leads

- Back: [The binomial theorem](02-binomial-theorem.md) · Next: [Patterns in Pascal's triangle](04-pascal-patterns.md)
- [Level 7 page](index.md) · [Counting topic page](../index.md)
- Subsets and their sizes are the language of [Logic](../../logic/index.md) and sets.
- "Half of all subsets have even size" is why a fair coin tossed $n$ times gives an even number of heads exactly half
  the time: [Probability](../../probability/index.md).
- Strings of 0s and 1s, counted by $2^n$, are the binary numbers of [other bases](../../numbers/level-5/07-other-bases.md)
  in Numbers.
