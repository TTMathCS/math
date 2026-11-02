---
title: "Sums that blow up"
---

# Sums that blow up

*Infinity and strange math · level 4, lesson 3 of 6*

## A question to start

You have a pile of identical books and a table. Stack the books one on top of another, near the edge of the table, so
that each book sticks out a little past the one below it. How far out past the edge of the table can the top book
reach, before the pile falls over?

Most people guess: "Less than one book length. The top book could never be **completely** past the edge." In fact,
with just 4 books the top book can be completely beyond the table. And with enough books, you can reach as far out as
you like: 2 book lengths, 10, a hundred. The reason is one of the most surprising sums in mathematics.

## The idea

### The harmonic series

In the last two lessons, endless sums like $\frac12 + \frac14 + \frac18 + \cdots$ settled on a finite total. Now look
at this one:

$$1 + \frac12 + \frac13 + \frac14 + \frac15 + \frac16 + \cdots$$

Each piece is 1 divided by the next counting number. This is called the **harmonic series**. (The name comes from
music: a string vibrating in halves, thirds, quarters, ... gives the notes called harmonics.)

The pieces get smaller and smaller, shrinking towards 0, just like the halving sum. So you might expect the total to
settle down. Let us look at partial sums.

| Number of pieces | 1 | 2 | 4 | 10 | 100 | 1000 | 1,000,000 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Partial sum (about) | 1 | 1.5 | 2.08 | 2.93 | 5.19 | 7.49 | 14.39 |

It grows, but very slowly. A million pieces only get you to about 14.4. It looks as if it might creep up towards some
limit, maybe 20 or 30. But it does not. The harmonic series grows **past every number**: past 100, past a million,
past anything you name. We say it **diverges**, or "blows up".

How can anyone know that, when the numbers grow so slowly that no computer could ever add enough pieces to reach 100?
With a proof.

### The grouping proof

This proof is about 650 years old. It was found by the French thinker Nicole Oresme, around 1350. The idea is to put
the pieces into groups, where each group adds up to **at least one half**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 232" role="img" aria-label="Bars of height 1, 1/2, 1/3 up to 1/16; the bar for 2 is one group, bars 3 and 4 a second group, bars 5 to 8 a third, bars 9 to 16 a fourth; each group adds to at least one half">
  <rect x="30" y="30.0" width="21" height="160.0" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="40.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <rect x="54" y="110.0" width="21" height="80.0" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="64.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <rect x="78" y="136.7" width="21" height="53.3" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="88.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <rect x="102" y="150.0" width="21" height="40.0" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="112.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <rect x="126" y="158.0" width="21" height="32.0" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="136.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <rect x="150" y="163.3" width="21" height="26.7" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="160.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <rect x="174" y="167.1" width="21" height="22.9" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="184.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">7</text>
  <rect x="198" y="170.0" width="21" height="20.0" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="208.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">8</text>
  <rect x="222" y="172.2" width="21" height="17.8" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="232.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">9</text>
  <rect x="246" y="174.0" width="21" height="16.0" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="256.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <rect x="270" y="175.5" width="21" height="14.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="280.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">11</text>
  <rect x="294" y="176.7" width="21" height="13.3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="304.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">12</text>
  <rect x="318" y="177.7" width="21" height="12.3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="328.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">13</text>
  <rect x="342" y="178.6" width="21" height="11.4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="352.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">14</text>
  <rect x="366" y="179.3" width="21" height="10.7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="376.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">15</text>
  <rect x="390" y="180.0" width="21" height="10.0" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="400.5" y="204" font-size="10" text-anchor="middle" fill="currentColor">16</text>
  <line x1="30" y1="110.0" x2="414" y2="110.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3"/>
  <text x="418" y="114" font-size="11" text-anchor="start" fill="currentColor">1/2</text>
  <text x="222" y="224" font-size="12" text-anchor="middle" fill="currentColor">bar k has height 1/k; each coloured group adds up to at least 1/2</text>
</svg>
</div>

Write the sum like this, with brackets:

$$1 + \frac12 + \left(\frac13 + \frac14\right) + \left(\frac15 + \frac16 + \frac17 + \frac18\right) + \left(\frac19 + \cdots + \frac1{16}\right) + \cdots$$

Each group ends at a power of 2 (4, 8, 16, 32, ...), and each group has twice as many pieces as the one before.

- **Group $\frac13 + \frac14$.** Both pieces are at least $\frac14$ (since $\frac13$ is bigger than $\frac14$). Two
  pieces, each at least $\frac14$: the group is at least $2 \times \frac14 = \frac12$.
- **Group $\frac15 + \frac16 + \frac17 + \frac18$.** All four are at least $\frac18$. So the group is at least
  $4 \times \frac18 = \frac12$.
- **Group $\frac19$ to $\frac1{16}$.** Eight pieces, each at least $\frac1{16}$: at least $8 \times \frac1{16} = \frac12$.
- **Every group after that** has twice as many pieces, each at least half as big, so it is always at least $\frac12$.

So the sum is at least

$$1 + \frac12 + \frac12 + \frac12 + \frac12 + \cdots$$

and adding $\frac12$ over and over grows past any number. Two halves make 1, so 200 groups make at least 100, and
2,000,000 groups make at least a million. The harmonic series has no finite total.

We can even say how many pieces are enough. Up to the piece $\frac1{2^k}$, there are the 1, then $k$ groups (the
$\frac12$ counts as the first), each at least $\frac12$. So

$$1 + \frac12 + \frac13 + \cdots + \frac1{2^k} \ge 1 + \frac{k}2.$$

With $k = 4$ (up to $\frac1{16}$), the sum is at least 3. The table agrees: the true value up to $\frac1{16}$ is about
3.38.

### Shrinking pieces are not enough

Here is the big lesson. For an endless sum to have a finite total, the pieces **must** shrink towards 0 (if they did
not, you would keep adding chunks of the same size, and the total would grow forever). But shrinking is **not
enough**. The pieces must shrink **fast enough**.

Compare the two sums piece by piece.

| Piece number | 1 | 2 | 3 | 4 | 5 | 8 | 16 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Halving sum | $\frac12$ | $\frac14$ | $\frac18$ | $\frac1{16}$ | $\frac1{32}$ | $\frac1{256}$ | $\frac1{65536}$ |
| Harmonic sum | 1 | $\frac12$ | $\frac13$ | $\frac14$ | $\frac15$ | $\frac18$ | $\frac1{16}$ |

The halving pieces shrink by half every single step, so they quickly become tiny. The harmonic pieces shrink much
more slowly: the 16th is still $\frac1{16}$. Those slow pieces pile up into groups worth $\frac12$ again and again.

### Stacking books

Now back to the books. Make each book 1 unit long. The trick is to build the pile from the **top** down.

The physics fact we need is about balance. Every object has a **balance point** (scientists call it the centre of
mass): the point where you could balance it on a fingertip. For a book, it is the middle. A pile of books stays up as
long as the balance point of the books above each edge is not past that edge.

- **The top book** can stick out until its middle is right over the edge of the book below: it sticks out $\frac12$.
- **The top two books** together: their balance point is $\frac14$ in from the right end of the second book. (The top
  book's middle is at the second book's edge, and the second book's middle is $\frac12$ in from its edge. Two equal
  weights balance halfway between, $\frac14$ in.) So the second book can stick out $\frac14$ past the third.
- **The top three books**: their balance point is $\frac16$ in from the end of the third book, so the third can stick
  out $\frac16$ past the fourth.
- In general, the $k$th book from the top can stick out $\frac1{2k}$ past the one below.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 240" role="img" aria-label="Five books stacked on a table edge, each one sticking out further: the top book sticks out 1/2 past the second, which sticks out 1/4 past the third, then 1/6, 1/8 and 1/10; the top book is wholly past the table edge">
  <rect x="20" y="170" width="180" height="40" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="110" y="195" font-size="12" text-anchor="middle" fill="currentColor">table</text>
  <rect x="217.0" y="70" width="120" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="343" y="83" font-size="11" text-anchor="start" fill="currentColor">1/2</text>
  <rect x="157.0" y="90" width="120" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="283" y="103" font-size="11" text-anchor="start" fill="currentColor">1/4</text>
  <rect x="127.0" y="110" width="120" height="18" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="253" y="123" font-size="11" text-anchor="start" fill="currentColor">1/6</text>
  <rect x="107.0" y="130" width="120" height="18" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="233" y="143" font-size="11" text-anchor="start" fill="currentColor">1/8</text>
  <rect x="92.0" y="150" width="120" height="18" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="218" y="163" font-size="11" text-anchor="start" fill="currentColor">1/10</text>
  <line x1="200" y1="56" x2="200" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="320.0" y1="56" x2="320.0" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="260" y="52" font-size="11" text-anchor="middle" fill="currentColor">one book length</text>
  <text x="250" y="230" font-size="12" text-anchor="middle" fill="currentColor">each book sticks out 1/2, 1/4, 1/6, 1/8, 1/10 past the one below</text>
</svg>
</div>

**Why $\frac1{2k}$?** The top $k - 1$ books have their balance point right over the edge of book $k$. Book $k$ itself
has its balance point $\frac12$ in from that edge. So we have $k - 1$ books' worth of weight at the edge and 1 book's
weight $\frac12$ in. The balance point of all $k$ is the average position, weighted by the number of books:

$$\frac{(k - 1) \times 0 + 1 \times \frac12}{k} = \frac1{2k}$$

in from the edge of book $k$. That is how far book $k$ can stick out past book $k + 1$ (or past the table).

So with $n$ books the top one reaches past the table by

$$\frac12 + \frac14 + \frac16 + \cdots + \frac1{2n} = \frac12\left(1 + \frac12 + \frac13 + \cdots + \frac1n\right),$$

which is **half of the harmonic series**. Since the harmonic series grows past every number, so does half of it. With
enough books, the overhang can be as large as you like!

How many books? With 4 books the overhang is $\frac12 \times \left(1 + \frac12 + \frac13 + \frac14\right) = \frac12 \times \frac{25}{12} = \frac{25}{24}$,
a little more than 1. So the top book is completely past the edge. To reach 2 book lengths you need 31 books; to reach
3 you need 227. The harmonic series grows slowly, so the stack gets tall very quickly. (Real books are not perfectly
even, so in practice you leave a little safety margin.)

## Worked examples

**1. The first few partial sums exactly.** Find $1 + \frac12 + \frac13 + \frac14$.

Use twelfths: $\frac{12}{12} + \frac6{12} + \frac4{12} + \frac3{12} = \frac{25}{12}$, which is about 2.08.

**2. Checking one group.** Show that $\frac15 + \frac16 + \frac17 + \frac18 \ge \frac12$, and find how much more it
is.

- Each of the four pieces is at least $\frac18$, so the sum is at least $\frac48 = \frac12$.
- Exactly: with denominator 840, the sum is $\frac{168 + 140 + 120 + 105}{840} = \frac{533}{840}$, about 0.635. So it
  is about 0.135 more than $\frac12$.

**3. Guaranteeing a total of 5.** How many pieces of the harmonic series are certainly enough to pass 5?

- Up to $\frac1{2^k}$ the sum is at least $1 + \frac k2$. We need $1 + \frac k2 \ge 5$, so $\frac k2 \ge 4$, so
  $k = 8$.
- $2^8 = 256$ pieces are enough. (The proof gives a safe answer, not the smallest one. In fact the sum first passes 5
  at the 83rd piece.)

**4. A sum that looks small but blows up.** Does $\frac1{10} + \frac1{20} + \frac1{30} + \frac1{40} + \cdots$ have a
finite total?

- Every piece is $\frac1{10}$ of a harmonic piece: $\frac1{20} = \frac1{10} \times \frac12$.
- So the sum is $\frac1{10}$ of the harmonic series. A tenth of something that grows past every number still grows past
  every number (to pass 100, wait until the harmonic series passes 1000).
- No finite total: it blows up.

**5. Three books.** How far past the table does the top of a 3-book stack reach?

$\frac12 + \frac14 + \frac16 = \frac6{12} + \frac3{12} + \frac2{12} = \frac{11}{12}$ of a book length. Just short of a
whole book. The 4th book is what gets you past 1.

## Try it

1. Find $1 + \frac12 + \frac13 + \frac14 + \frac15 + \frac16$ as a fraction.
2. Show that $\frac19 + \frac1{10} + \cdots + \frac1{16}$ (eight pieces) is at least $\frac12$.
3. Using the grouping proof, the sum up to $\frac1{1024}$ is at least what? ($1024 = 2^{10}$.)
4. How far past the table does a 2-book stack reach? A 5-book stack?
5. Does $\frac12 + \frac14 + \frac16 + \frac18 + \cdots$ (one over each even number) have a finite total? Explain.
6. Does $1 + 1 + 1 + \cdots$ have a finite total? Does $1 - 1 + 1 - 1 + \cdots$?
7. (Harder) Without the grouping proof, here is another argument. Suppose the harmonic series had a finite total $H$.
   Use the answer to question 5, together with the odd pieces $1 + \frac13 + \frac15 + \cdots$, to reach a
   contradiction. (Hint: compare each odd piece with the even piece after it.)

??? note "Answers"
    1. With denominator 60: $\frac{60 + 30 + 20 + 15 + 12 + 10}{60} = \frac{147}{60} = \frac{49}{20} = 2.45$.
    2. Each of the eight pieces is at least $\frac1{16}$, so the sum is at least $\frac8{16} = \frac12$.
    3. At least $1 + \frac{10}2 = 6$. (The true value is about 7.5.)
    4. Two books: $\frac12 + \frac14 = \frac34$. Five books: $\frac12 + \frac14 + \frac16 + \frac18 + \frac1{10}$.
       With denominator 120: $\frac{60 + 30 + 20 + 15 + 12}{120} = \frac{137}{120}$, about 1.14 book lengths.
    5. **No.** Each piece is half of a harmonic piece ($\frac1{2k} = \frac12 \times \frac1k$), so the sum is half the
       harmonic series, which grows past every number. It is exactly the book-stack sum.
    6. $1 + 1 + 1 + \cdots$ has partial sums 1, 2, 3, ... which grow forever: no finite total. $1 - 1 + 1 - 1 + \cdots$
       has partial sums 1, 0, 1, 0, ... which never settle on one number, so it has no total either. (Pieces that do
       not shrink to 0 never give a total.)
    7. The even pieces add up to $\frac12 H$ (question 5 shows they are half the harmonic series). Since all the
       pieces add to $H$, the odd pieces $1 + \frac13 + \frac15 + \cdots$ must add up to the other half,
       $\frac12 H$. But each odd piece is **bigger** than the even piece after it: $1 > \frac12$,
       $\frac13 > \frac14$, $\frac15 > \frac16$, and so on. So the odd pieces add to more than the even pieces: more
       than $\frac12 H$, in fact at least $\frac12$ more, since $1 - \frac12 = \frac12$ already. Both cannot be
       $\frac12 H$. The contradiction shows there is no finite total $H$.

## Common mistake

**"The pieces go to zero, so the sum must be finite."** This is the most common mistake about endless sums, and the
harmonic series is the famous counterexample (an example that shows a claim is false). Shrinking to zero is needed,
but it is not enough.

**Trusting a computer's partial sums.** After a million pieces the sum is only about 14.4, and after a billion pieces
about 21. A computer would make it look as if the sum levels off. Only a proof can show it never does.

## Where it leads

- Back: [Does 0.999... equal 1?](02-does-point-nine.md) · Next: [The Sierpinski triangle](04-sierpinski-triangle.md).
- [Level 4 page](index.md) · [Infinity topic page](../index.md)
- Sums that do settle: [Halves that add up to 1](01-halves-add-to-one.md) and
  [Infinite geometric series](../../patterns/level-7/03-infinite-geometric.md). Adding fractions with different
  denominators: [Numbers level 4](../../numbers/level-4/01-adding-fractions.md).
- In level 8, convergence tests tell which sums settle without computing them. At university:
  [MAT137 Unit 13: series](../../../uoft/MAT137/unit13.md), where the harmonic series is a central example.
