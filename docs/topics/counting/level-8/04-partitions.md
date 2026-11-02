---
title: "Partitions of a number"
---

# Partitions of a number

*Counting and combinations · level 8, lesson 4 of 6*

## A question to start

In how many ways can you write 5 as a sum of whole numbers, if the order does not matter? Here they are:

$$5,\quad 4 + 1,\quad 3 + 2,\quad 3 + 1 + 1,\quad 2 + 2 + 1,\quad 2 + 1 + 1 + 1,\quad 1 + 1 + 1 + 1 + 1.$$

That is 7. For 10 there are 42 ways, and for 100 there are 190 569 292. There is no simple formula for these numbers,
and yet they hide some of the most beautiful facts in counting. Here is one to test now. Among the 7 sums for 5,
count the ones that use **only odd numbers**: $5$, $3 + 1 + 1$, $1 + 1 + 1 + 1 + 1$, three of them. Now count the ones
whose numbers are **all different**: $5$, $4 + 1$, $3 + 2$, also three. Coincidence? Try 6, 7, 8: the two counts always
agree. Leonhard Euler proved in 1748 that they always will. By the end of this lesson you will see why.

## The idea

### Partitions and compositions

A **partition** of a whole number $n$ is a way of writing $n$ as a sum of positive whole numbers, called **parts**,
where the order does not matter. To avoid writing the same partition twice we always list the parts from largest to
smallest: $3 + 1 + 1$, never $1 + 3 + 1$. The number of partitions of $n$ is written $p(n)$. So $p(5) = 7$.

If the order **does** matter, the sums are called **compositions**, and they are easy to count. Write $n$ as a row of
$n$ ones: $1\ 1\ 1\ 1\ 1$. A composition is a choice of which of the $n - 1$ gaps get a "+" break and which get glued:
$11 + 1 + 11$ is $2 + 1 + 2$. Each gap is cut or not, so there are $2^{n-1}$ compositions. For 5 that is 16. Partitions
are harder exactly because they forget the order, so many compositions collapse into one partition, and not always
the same number of them.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $p(n)$ | 1 | 2 | 3 | 5 | 7 | 11 | 15 | 22 | 30 | 42 |
| compositions | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 |

### Ferrers diagrams: partitions as pictures

Draw each part as a row of dots, the largest row at the top, all rows starting at the left. This picture is a
**Ferrers diagram**, named after the English mathematician Norman Ferrers. Here are the 7 partitions of 5:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 536 120" role="img" aria-label="Dot pictures of the seven partitions of 5: 5, 4+1, 3+2, 3+1+1, 2+2+1, 2+1+1+1 and 1+1+1+1+1">
  <circle cx="21" cy="26" r="5" fill="#eea66f"/>
  <circle cx="34" cy="26" r="5" fill="#eea66f"/>
  <circle cx="47" cy="26" r="5" fill="#eea66f"/>
  <circle cx="60" cy="26" r="5" fill="#eea66f"/>
  <circle cx="73" cy="26" r="5" fill="#eea66f"/>
  <text x="47.5" y="110" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="98" cy="26" r="5" fill="#eea66f"/>
  <circle cx="111" cy="26" r="5" fill="#eea66f"/>
  <circle cx="124" cy="26" r="5" fill="#eea66f"/>
  <circle cx="137" cy="26" r="5" fill="#eea66f"/>
  <circle cx="98" cy="39" r="5" fill="#eea66f"/>
  <text x="118" y="110" font-size="11" text-anchor="middle" fill="currentColor">4 + 1</text>
  <circle cx="172" cy="26" r="5" fill="#eea66f"/>
  <circle cx="185" cy="26" r="5" fill="#eea66f"/>
  <circle cx="198" cy="26" r="5" fill="#eea66f"/>
  <circle cx="172" cy="39" r="5" fill="#eea66f"/>
  <circle cx="185" cy="39" r="5" fill="#eea66f"/>
  <text x="185.5" y="110" font-size="11" text-anchor="middle" fill="currentColor">3 + 2</text>
  <circle cx="246" cy="26" r="5" fill="#eea66f"/>
  <circle cx="259" cy="26" r="5" fill="#eea66f"/>
  <circle cx="272" cy="26" r="5" fill="#eea66f"/>
  <circle cx="246" cy="39" r="5" fill="#eea66f"/>
  <circle cx="246" cy="52" r="5" fill="#eea66f"/>
  <text x="259.5" y="110" font-size="11" text-anchor="middle" fill="currentColor">3 + 1 + 1</text>
  <circle cx="320" cy="26" r="5" fill="#eea66f"/>
  <circle cx="333" cy="26" r="5" fill="#eea66f"/>
  <circle cx="320" cy="39" r="5" fill="#eea66f"/>
  <circle cx="333" cy="39" r="5" fill="#eea66f"/>
  <circle cx="320" cy="52" r="5" fill="#eea66f"/>
  <text x="327" y="110" font-size="11" text-anchor="middle" fill="currentColor">2 + 2 + 1</text>
  <circle cx="394" cy="26" r="5" fill="#eea66f"/>
  <circle cx="407" cy="26" r="5" fill="#eea66f"/>
  <circle cx="394" cy="39" r="5" fill="#eea66f"/>
  <circle cx="394" cy="52" r="5" fill="#eea66f"/>
  <circle cx="394" cy="65" r="5" fill="#eea66f"/>
  <text x="401" y="110" font-size="11" text-anchor="middle" fill="currentColor">2+1+1+1</text>
  <circle cx="468" cy="26" r="5" fill="#eea66f"/>
  <circle cx="468" cy="39" r="5" fill="#eea66f"/>
  <circle cx="468" cy="52" r="5" fill="#eea66f"/>
  <circle cx="468" cy="65" r="5" fill="#eea66f"/>
  <circle cx="468" cy="78" r="5" fill="#eea66f"/>
  <text x="468.5" y="110" font-size="11" text-anchor="middle" fill="currentColor">1+1+1+1+1</text>
</svg>
</div>

The power of the pictures is that you can do things to them that are hard to see in the sums.

### Flipping a diagram: the conjugate

Flip a Ferrers diagram across its diagonal (top-left to bottom-right), so rows become columns. The result is another
Ferrers diagram with the same number of dots, called the **conjugate** partition.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 145" role="img" aria-label="The dot picture of 4 plus 2 plus 1 and its flip across the diagonal, which is 3 plus 2 plus 1 plus 1; the first column becomes the first row">
  <circle cx="30" cy="30" r="8" fill="#eea66f"/>
  <circle cx="52" cy="30" r="8" fill="#9cc9ea"/>
  <circle cx="74" cy="30" r="8" fill="#9cc9ea"/>
  <circle cx="96" cy="30" r="8" fill="#9cc9ea"/>
  <circle cx="30" cy="52" r="8" fill="#eea66f"/>
  <circle cx="52" cy="52" r="8" fill="#9cc9ea"/>
  <circle cx="30" cy="74" r="8" fill="#eea66f"/>
  <text x="63" y="132" font-size="12" text-anchor="middle" fill="currentColor">4 + 2 + 1 (read rows)</text>
  <text x="190" y="70" font-size="12" text-anchor="middle" fill="currentColor">flip across</text>
  <text x="190" y="86" font-size="12" text-anchor="middle" fill="currentColor">the diagonal</text>
  <text x="190" y="106" font-size="18" text-anchor="middle" fill="currentColor">⟶</text>
  <circle cx="270" cy="30" r="8" fill="#eea66f"/>
  <circle cx="292" cy="30" r="8" fill="#eea66f"/>
  <circle cx="314" cy="30" r="8" fill="#eea66f"/>
  <circle cx="270" cy="52" r="8" fill="#9cc9ea"/>
  <circle cx="292" cy="52" r="8" fill="#9cc9ea"/>
  <circle cx="270" cy="74" r="8" fill="#9cc9ea"/>
  <circle cx="270" cy="96" r="8" fill="#9cc9ea"/>
  <text x="292" y="132" font-size="12" text-anchor="middle" fill="currentColor">3 + 2 + 1 + 1</text>
</svg>
</div>

To find the conjugate without drawing: its first part is the number of parts, its second part is the number of parts
that are at least 2, its third the number that are at least 3, and so on. For $4 + 2 + 1$: 3 parts, 2 parts at least
2, 1 part at least 3, 1 part at least 4, giving $3 + 2 + 1 + 1$.

Flipping twice gives back the start, so conjugation is a **bijection** from partitions to partitions. And it swaps two
things: the number of **rows** (parts) and the length of the **first row** (the largest part). That proves a theorem
with no calculation at all:

> **The number of partitions of $n$ into at most $k$ parts equals the number of partitions of $n$ whose largest part
> is at most $k$.**

For $n = 5$, $k = 2$: at most 2 parts gives $5$, $4 + 1$, $3 + 2$; largest part at most 2 gives $2 + 2 + 1$,
$2 + 1 + 1 + 1$, $1 + 1 + 1 + 1 + 1$. Three each, and each is the flip of one on the other list.

### Counting partitions with a table

Let $p(n, k)$ be the number of partitions of $n$ with every part at most $k$. Split them by whether a part equal to
$k$ is used:

- **no part equals $k$**: then every part is at most $k - 1$: $p(n, k - 1)$ ways;
- **at least one part equals $k$**: remove one part $k$; what is left is a partition of $n - k$ with parts at most
  $k$: $p(n - k, k)$ ways. (Put the $k$ back to undo it.)

So $p(n, k) = p(n, k - 1) + p(n - k, k)$, with $p(0, k) = 1$ (the empty partition) and $p(n, k) = p(n, n)$ when
$k > n$. The total is $p(n) = p(n, n)$. A table builds them up:

| $n$ | $k = 1$ | $k = 2$ | $k = 3$ | $k = 4$ | $k = 5$ | $k = 6$ | $k = 7$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 |
| 3 | 1 | 2 | 3 | 3 | 3 | 3 | 3 |
| 4 | 1 | 3 | 4 | 5 | 5 | 5 | 5 |
| 5 | 1 | 3 | 5 | 6 | 7 | 7 | 7 |
| 6 | 1 | 4 | 7 | 9 | 10 | 11 | 11 |
| 7 | 1 | 4 | 8 | 11 | 13 | 14 | 15 |

For example $p(7, 3) = p(7, 2) + p(4, 3) = 4 + 4 = 8$.

### Euler's theorem: odd parts and distinct parts

> **Euler's partition theorem.** For every $n$, the number of partitions of $n$ into **odd** parts equals the number
> of partitions of $n$ into **distinct** (all different) parts.

Here is a proof by matching, found by James Glaisher in 1883.

**From distinct to odd.** Take a partition into distinct parts. Any even part, cut it in half, into two equal parts.
Keep halving every even part until all parts are odd. For example $6 \to 3 + 3$ and $4 \to 2 + 2 \to 1 + 1 + 1 + 1$.
So $4 + 2$ (distinct) becomes $1 + 1 + 1 + 1 + 1 + 1$ (odd).

**From odd to distinct.** Take a partition into odd parts. Whenever two parts are equal, merge them into one part of
double the size. Keep merging equal parts until all parts are different. So $3 + 3 + 3 + 1$ becomes $6 + 3 + 1$.

**Why these undo each other.** Every whole number can be written in exactly one way as (an odd number) × (a power of
2): $12 = 3 \times 4$, $10 = 5 \times 2$, $7 = 7 \times 1$. Halving a part $m \times 2^j$ until it is odd turns it into
$2^j$ copies of the odd number $m$. Going the other way, if the odd part $m$ appears $c$ times, write $c$ in base 2 as
a sum of **different** powers of 2, say $c = 2^{j_1} + 2^{j_2} + \cdots$; merging turns the copies into the different
parts $m \cdot 2^{j_1}, m \cdot 2^{j_2}, \ldots$ Because base-2 writing is unique, each partition on one side matches
exactly one on the other. ∎

For $n = 6$: distinct $6$, $5 + 1$, $4 + 2$, $3 + 2 + 1$ match odd $3 + 3$, $5 + 1$, $1 + 1 + 1 + 1 + 1 + 1$,
$3 + 1 + 1 + 1$. Four each.

### How fast does $p(n)$ grow?

Faster than any power of $n$, slower than $2^n$. In 1918 G. H. Hardy and Srinivasa Ramanujan found the approximation

$$p(n) \approx \frac{1}{4n\sqrt{3}}\,e^{\pi\sqrt{2n/3}}.$$

For $n = 100$ it gives about 199 million, close to the true 190 569 292 (under 5% too big, and the error shrinks as
$n$ grows). To test their deeper exact formula, Percy MacMahon worked out $p(200) = 3\,972\,999\,029\,388$ by hand
with recursions like the one above.

## Worked examples

**1. All partitions of 6.** By largest part: $6$; $5 + 1$; $4 + 2$, $4 + 1 + 1$; $3 + 3$, $3 + 2 + 1$, $3 + 1 + 1 + 1$;
$2 + 2 + 2$, $2 + 2 + 1 + 1$, $2 + 1 + 1 + 1 + 1$; $1 + 1 + 1 + 1 + 1 + 1$. That is $p(6) = 11$. ✓

**2. A conjugate.** The conjugate of $5 + 3 + 3 + 1$ (12 dots): parts at least 1: 4; at least 2: 3; at least 3: 3; at
least 4: 1; at least 5: 1. So it is $4 + 3 + 3 + 1 + 1$, also 12. ✓

**3. At most 3 parts.** How many partitions of 7 have at most 3 parts? By conjugation, the same as those with largest
part at most 3, which is $p(7, 3) = 8$ from the table. Listing the first kind: $7$, $6 + 1$, $5 + 2$, $5 + 1 + 1$,
$4 + 3$, $4 + 2 + 1$, $3 + 3 + 1$, $3 + 2 + 2$. ✓

**4. Euler for $n = 7$.** Distinct parts: $7$, $6 + 1$, $5 + 2$, $4 + 3$, $4 + 2 + 1$. Odd parts: $7$, $5 + 1 + 1$,
$3 + 3 + 1$, $3 + 1 + 1 + 1 + 1$, $1 + 1 + 1 + 1 + 1 + 1 + 1$. Five each. The matching: $7 \leftrightarrow 7$;
$6 + 1 \to 3 + 3 + 1$; $5 + 2 \to 5 + 1 + 1$; $4 + 3 \to 3 + 1 + 1 + 1 + 1$; $4 + 2 + 1 \to$ seven 1s.

**5. Merging.** Turn the odd partition $5 + 5 + 5 + 1 + 1 + 1$ of 18 into distinct parts. The part 5 appears 3 times,
and $3 = 2 + 1$, so it becomes $10 + 5$. The part 1 appears 3 times, so it becomes $2 + 1$. Result:
$10 + 5 + 2 + 1 = 18$, all different. ✓

## Try it

1. List the partitions of 4 and the compositions of 4. How many of each?
2. Find the conjugate of $6 + 4 + 1$.
3. How many partitions of 8 have exactly 2 parts?
4. Check Euler's theorem for $n = 8$ by listing both kinds.
5. Apply Glaisher's halving to the distinct partition $8 + 3$ of 11.
6. A partition is **self-conjugate** if flipping it gives itself. Find the self-conjugate partitions of 8.
7. Extend the table with the row $n = 8$, and read off $p(8)$.
8. Explain, using Ferrers diagrams, why the number of partitions of $n$ with **exactly** $k$ parts equals the number
   with largest part **exactly** $k$.

??? note "Answers"
    1. Partitions: $4$, $3 + 1$, $2 + 2$, $2 + 1 + 1$, $1 + 1 + 1 + 1$: **5**. Compositions: $4$, $3 + 1$, $1 + 3$,
       $2 + 2$, $2 + 1 + 1$, $1 + 2 + 1$, $1 + 1 + 2$, $1 + 1 + 1 + 1$: **8** $= 2^3$.
    2. Parts at least 1, 2, 3, 4, 5, 6: 3, 2, 2, 2, 1, 1. Conjugate $3 + 2 + 2 + 2 + 1 + 1$ (11 dots both). ✓
    3. $7 + 1$, $6 + 2$, $5 + 3$, $4 + 4$: **4**.
    4. Distinct: $8$, $7 + 1$, $6 + 2$, $5 + 3$, $5 + 2 + 1$, $4 + 3 + 1$ (6). Odd: $7 + 1$, $5 + 3$, $5 + 1 + 1 + 1$,
       $3 + 3 + 1 + 1$, $3 + 1 + 1 + 1 + 1 + 1$, eight 1s (6). ✓
    5. $8 \to 4 + 4 \to 2 + 2 + 2 + 2 \to$ eight 1s; 3 stays. Result: $3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$ (sum 11). ✓
    6. $4 + 2 + 1 + 1$ (parts at least 1, 2, 3, 4: 4, 2, 1, 1) and $3 + 3 + 2$ (3, 3, 2). There are **2**. (This always equals the
       number of partitions into distinct odd parts: for 8 those are $7 + 1$ and $5 + 3$.)
    7. $p(8, 1) = 1$; $p(8, 2) = p(8, 1) + p(6, 2) = 1 + 4 = 5$; $p(8, 3) = 5 + p(5, 3) = 5 + 5 = 10$;
       $p(8, 4) = 10 + p(4, 4) = 10 + 5 = 15$; $p(8, 5) = 15 + p(3, 3) = 18$; $p(8, 6) = 18 + p(2, 2) = 20$;
       $p(8, 7) = 20 + p(1, 1) = 21$; $p(8, 8) = 21 + p(0, 8) = 22$. So $p(8) = 22$.
    8. A partition with exactly $k$ parts has a Ferrers diagram with exactly $k$ rows. Its flip has exactly $k$
       columns, so its first (longest) row has exactly $k$ dots: its largest part is $k$. Flipping is a bijection, so
       the two sets have the same size.

## Common mistake

**Counting $3 + 1 + 1$ and $1 + 3 + 1$ as different.** Those are different **compositions** but the same
**partition**. Always write the parts from largest to smallest, and a repeat will show up as the same list twice.

**Mixing up "at most" and "exactly".** Partitions into at most 3 parts include those with 1 and 2 parts. In the table,
$p(n, k)$ means "parts at most $k$"; "largest part exactly $k$" is $p(n, k) - p(n, k - 1)$.

## Where it leads

- Back: [Derangements](03-derangements.md) · Next: [Generating functions](05-generating-functions.md), which gives a
  second proof of Euler's theorem in one line.
- [Level 8 page](index.md) · [Counting topic page](../index.md)
- Writing numbers as sums, and base 2, connect to [Number theory](../../number-theory/index.md) and
  [other bases](../../numbers/level-5/07-other-bases.md).
- Sharing identical sweets among children with stars and bars ([level 6](../level-6/index.md)) counts compositions;
  when the $k$ children are identical too, you
  are counting partitions into at most $k$ parts.
