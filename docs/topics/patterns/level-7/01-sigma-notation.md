---
title: "Sigma notation"
---

# Sigma notation

*Patterns and sequences · level 7, lesson 1 of 6*

## A question to start

Here are two long sums:

$$1^2 + 2^2 + 3^2 + 4^2 + \cdots + 99^2 + 100^2$$

$$3 + 5 + 7 + 9 + \cdots + 199 + 201$$

Writing them out in full would take a page each, and the "$\cdots$" in the middle asks the reader to guess the
pattern. Is the second one the odd numbers? Does it have 100 terms or 99? Mathematicians wanted a way to write such a
sum in one short line, with **no guessing at all**: what you add, where you start and where you stop. The answer is a
single Greek letter, and by the end of this lesson you will read and write it as easily as a plus sign.

## The idea

### The symbol

The Greek capital letter **sigma**, $\Sigma$, is the Greek S, for "sum". A sum written with it looks like this:

$$\sum_{k=1}^{5} k^2$$

and you read it as "the sum of $k^2$, for $k$ from 1 to 5". It has four parts.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="The parts of a sigma sum: the top number is where k stops, the bottom says k starts at 1, the expression on the right is what is added for each k">
  <text x="150" y="105" font-size="72" text-anchor="middle" fill="currentColor">Σ</text>
  <text x="150" y="38" font-size="20" text-anchor="middle" fill="currentColor">5</text>
  <text x="150" y="135" font-size="20" text-anchor="middle" fill="currentColor">k = 1</text>
  <text x="215" y="95" font-size="30" text-anchor="middle" fill="currentColor">k²</text>
  <rect x="190" y="65" width="52" height="42" rx="6" fill="#7ccf9a" fill-opacity="0.35"/>
  <rect x="135" y="18" width="30" height="27" rx="6" fill="#eea66f" fill-opacity="0.35"/>
  <rect x="118" y="115" width="64" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.45"/>
  <line x1="165" y1="30" x2="300" y2="30" stroke="currentColor" stroke-width="1"/>
  <text x="305" y="34" font-size="13" fill="currentColor">last value of k</text>
  <line x1="242" y1="86" x2="300" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="305" y="90" font-size="13" fill="currentColor">what you add</text>
  <line x1="182" y1="130" x2="300" y2="140" stroke="currentColor" stroke-width="1"/>
  <text x="305" y="144" font-size="13" fill="currentColor">the index and its</text>
  <text x="305" y="160" font-size="13" fill="currentColor">first value</text>
</svg>
</div>

- The **index** (here $k$) is a counter. It takes whole-number values, one after another.
- The number under the sigma, $k = 1$, is the **first value** (also called the lower limit).
- The number on top, 5, is the **last value** (the upper limit). The index goes up by 1 each time until it reaches it.
- The expression after the sigma, $k^2$, is the **summand**: the thing you work out for each value of $k$ and then add.

So

$$\sum_{k=1}^{5} k^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55.$$

The recipe is always the same: **list the values of the index, put each one into the summand, add the results.**

### The two sums from the start

The first sum is $\displaystyle\sum_{k=1}^{100} k^2$. Short, and nothing is left to guess.

For the second sum, the odd numbers can be written $2k + 1$. When $k = 1$ that is 3, and when $k = 100$ it is 201. So

$$3 + 5 + 7 + \cdots + 201 = \sum_{k=1}^{100} (2k + 1),$$

and now we can **see** that it has exactly 100 terms. Answering "how many terms?" is one of the most useful things the
notation does for you.

### How many terms?

If the index runs from $m$ to $n$ (whole numbers, $m \le n$), the number of terms is

$$n - m + 1.$$

Why the "+1"? Think of fence posts. From $k = 3$ to $k = 7$ the index takes the values 3, 4, 5, 6, 7: that is five
values, but $7 - 3$ is only 4. Subtracting counts the **gaps** between the values; there is always one more value
than gaps.

### The name of the index does not matter

$$\sum_{k=1}^{5} k^2, \qquad \sum_{j=1}^{5} j^2, \qquad \sum_{i=1}^{5} i^2$$

all mean $1 + 4 + 9 + 16 + 25$. The index is a **dummy variable**: it is used up inside the sum and does not appear in
the answer. (The answer 55 has no $k$ in it.) The letters $i$, $j$, $k$, $n$ and $r$ are the usual choices. But be
careful when the summand has **another** letter in it:

$$\sum_{k=1}^{4} (x + k) = (x + 1) + (x + 2) + (x + 3) + (x + 4) = 4x + 10.$$

Here $x$ is not the index. It stays the same in every term, and it does appear in the answer.

### Changing the start (re-indexing)

The same sum can be written with different limits. The powers of 2 from 1 to 16 are

$$1 + 2 + 4 + 8 + 16 = \sum_{k=0}^{4} 2^k = \sum_{j=1}^{5} 2^{\,j-1}.$$

The second form comes from the first by putting $j = k + 1$. When $k$ runs 0, 1, 2, 3, 4, the new index $j$ runs
1, 2, 3, 4, 5, and $2^k$ becomes $2^{\,j-1}$. **Shift the limits one way and the summand the other way**, and the sum
is unchanged. This is exactly why the formula for a geometric sequence has $r^{\,n-1}$ when we count from 1, and
$r^{\,n}$ when we count from 0.

### Three rules for working with sums

Every rule below is just ordinary arithmetic (regrouping and the distributive law), written in the new shorthand.

**Rule 1: a constant added up.** If the summand does not change, you are adding the same number again and again:

$$\sum_{k=1}^{n} c = \underbrace{c + c + \cdots + c}_{n \text{ times}} = nc.$$

So $\displaystyle\sum_{k=1}^{10} 4 = 40$, not 4. (A sum from $m$ to $n$ of a constant $c$ is $(n - m + 1)c$.)

**Rule 2: constants come out.** $\displaystyle\sum_{k=1}^{n} c\,a_k = c\sum_{k=1}^{n} a_k$, because
$ca_1 + ca_2 + \cdots + ca_n = c(a_1 + a_2 + \cdots + a_n)$.

**Rule 3: sums split.** $\displaystyle\sum_{k=1}^{n} (a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k$, because
you may add the numbers in any order: collect all the $a$'s, then all the $b$'s.

With these three rules and one known sum, $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ (Gauss's sum from
[level 5](../level-5/index.md)), you can add up any summand of the form $pk + q$ in one line.

### Splitting the range

You can also cut the **range** of the index in two:

$$\sum_{k=1}^{20} k = \sum_{k=1}^{9} k + \sum_{k=10}^{20} k.$$

Turned round, this gives a handy way to add a sum that does not start at 1: **the sum from 10 to 20 is the sum from 1
to 20 minus the sum from 1 to 9.** Be careful to subtract up to 9, not up to 10, or you would remove the term 10 that
you want to keep.

### What sigma cannot do

There is **no** rule for products. In general

$$\sum_{k=1}^{n} a_k b_k \ne \left(\sum_{k=1}^{n} a_k\right)\left(\sum_{k=1}^{n} b_k\right).$$

Try $n = 2$ with $a_k = b_k = k$: the left side is $1 + 4 = 5$, the right side is $3 \times 3 = 9$. In the same way,
$\sum k^2$ is not $\left(\sum k\right)^2$. (In lesson 5 you will find the true formula for $\sum k^2$, and a surprise
about $\sum k^3$.)

## Worked examples

**1. Expand and evaluate.** Find $\displaystyle\sum_{k=3}^{7} (2k + 1)$.

- The index takes the values 3, 4, 5, 6, 7: that is $7 - 3 + 1 = 5$ terms.
- The terms are $7, 9, 11, 13, 15$.
- Their sum is $7 + 9 + 11 + 13 + 15 = 55$.

**2. Use the rules.** Find $\displaystyle\sum_{k=1}^{10} (3k + 2)$ without listing the terms.

$$\sum_{k=1}^{10} (3k + 2) = 3\sum_{k=1}^{10} k + \sum_{k=1}^{10} 2 = 3 \times \frac{10 \times 11}{2} + 10 \times 2 = 3 \times 55 + 20 = 185.$$

Check by listing: $5 + 8 + 11 + \cdots + 32$ is an arithmetic sequence with 10 terms, first 5 and last 32, so its sum
is $10 \times \frac{5 + 32}{2} = 185$. ✓

**3. Write a sum in sigma notation.** Write $4 + 7 + 10 + \cdots + 61$ with a sigma.

- The terms go up by 3, so the summand looks like $3k + \text{something}$.
- With $k = 1$ we want 4, so the summand is $3k + 1$.
- The last term: $3k + 1 = 61$ gives $k = 20$.

$$4 + 7 + 10 + \cdots + 61 = \sum_{k=1}^{20} (3k + 1).$$

(Another correct answer is $\displaystyle\sum_{k=0}^{19} (3k + 4)$. Both have 20 terms.)

**4. A sum that does not start at 1.** Find $\displaystyle\sum_{k=10}^{20} k$.

$$\sum_{k=10}^{20} k = \sum_{k=1}^{20} k - \sum_{k=1}^{9} k = \frac{20 \times 21}{2} - \frac{9 \times 10}{2} = 210 - 45 = 165.$$

Check: there are $20 - 10 + 1 = 11$ terms, from 10 to 20, so the sum is $11 \times \frac{10 + 20}{2} = 165$. ✓

**5. A sum that collapses.** Find $\displaystyle\sum_{k=1}^{99} \left(\frac{1}{k} - \frac{1}{k+1}\right)$.

Write out the first few terms and the last:

$$\left(1 - \tfrac12\right) + \left(\tfrac12 - \tfrac13\right) + \left(\tfrac13 - \tfrac14\right) + \cdots + \left(\tfrac{1}{99} - \tfrac{1}{100}\right).$$

Every $-\frac12$ is cancelled by the next $+\frac12$, every $-\frac13$ by the next $+\frac13$, and so on. Only the
very first and very last pieces survive:

$$1 - \frac{1}{100} = \frac{99}{100}.$$

A sum like this, where neighbouring terms cancel, is called **telescoping**, after the old folding telescope that
slides shut. Since $\frac{1}{k} - \frac{1}{k+1} = \frac{1}{k(k+1)}$, this also tells you that
$\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \cdots + \frac{1}{99 \times 100} = \frac{99}{100}$. You will use the
telescoping idea again in lesson 5.

## Try it

1. Expand and evaluate $\displaystyle\sum_{k=1}^{4} (5 - k)$.
2. How many terms does $\displaystyle\sum_{k=7}^{30} k^3$ have?
3. Write in sigma notation: (a) $2 + 4 + 6 + \cdots + 50$; (b) $1 + \tfrac12 + \tfrac14 + \cdots + \tfrac{1}{64}$.
4. Find $\displaystyle\sum_{k=1}^{50} 6$.
5. Use the rules to find $\displaystyle\sum_{k=1}^{20} (4k - 1)$.
6. Find $\displaystyle\sum_{k=21}^{40} k$.
7. Rewrite $\displaystyle\sum_{k=3}^{12} (k - 2)^2$ so that the index starts at 1, and then evaluate it, using
   $1^2 + 2^2 + \cdots + 10^2 = 385$.
8. Show that $\displaystyle\sum_{k=1}^{n} \left(\sqrt{k+1} - \sqrt{k}\right) = \sqrt{n+1} - 1$, and use it to find
   the sum when $n = 99$.

??? note "Answers"
    1. The terms are $4, 3, 2, 1$, so the sum is **10**.
    2. $30 - 7 + 1 =$ **24** terms.
    3. (a) The terms are $2k$ for $k = 1$ to 25: $\displaystyle\sum_{k=1}^{25} 2k$. (b) The terms are powers of
       $\tfrac12$ from $\left(\tfrac12\right)^0$ to $\left(\tfrac12\right)^6$: $\displaystyle\sum_{k=0}^{6} \left(\tfrac12\right)^k$
       (or $\displaystyle\sum_{k=1}^{7} \left(\tfrac12\right)^{k-1}$).
    4. A constant added 50 times: $50 \times 6 =$ **300**.
    5. $4 \times \frac{20 \times 21}{2} - 20 \times 1 = 4 \times 210 - 20 =$ **820**. (Check: first term 3, last 79,
       20 terms, $20 \times \frac{3 + 79}{2} = 820$.)
    6. $\frac{40 \times 41}{2} - \frac{20 \times 21}{2} = 820 - 210 =$ **610**.
    7. Put $j = k - 2$. When $k = 3$, $j = 1$; when $k = 12$, $j = 10$. The sum is
       $\displaystyle\sum_{j=1}^{10} j^2 =$ **385**.
    8. Writing out the terms, $(\sqrt2 - \sqrt1) + (\sqrt3 - \sqrt2) + \cdots + (\sqrt{n+1} - \sqrt{n})$: each
       $+\sqrt{k}$ cancels the $-\sqrt{k}$ in the next term, leaving $\sqrt{n+1} - \sqrt1 = \sqrt{n+1} - 1$. With
       $n = 99$ the sum is $\sqrt{100} - 1 =$ **9**.

## Common mistake

**Treating a constant as a single term.** $\displaystyle\sum_{k=1}^{10} 4$ is $4 + 4 + \cdots + 4 = 40$, not 4. The
same slip happens inside bigger sums: in $\displaystyle\sum_{k=1}^{10} (3k + 2)$ the 2 is added ten times, giving 20.

**Off-by-one counting.** The sum from $k = 10$ to $k = 20$ has 11 terms, not 10. And when you subtract to get it, you
take away the sum up to **9**, not up to 10.

## Where it leads

- Back: [Level 6](../level-6/index.md), geometric sequences · Next: [Arithmetic series, carefully](02-arithmetic-series.md).
- [Level 7 page](index.md) · [Patterns topic page](../index.md)
- The rules of this lesson are the rules of ordinary arithmetic: see [Algebra](../../algebra/index.md).
- Sigma notation is used all through first-year university mathematics, for example in the definition of the integral
  as a limit of sums: [MAT137 Unit 7](../../../uoft/MAT137/unit07.md) and in [Unit 13 (series)](../../../uoft/MAT137/unit13.md).
