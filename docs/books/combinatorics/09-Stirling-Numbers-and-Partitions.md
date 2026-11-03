# 9. Stirling numbers and partitions

*Eight students are to be split into study groups. Nobody cares what the groups are called, only who is with whom.
In how many ways can it be done, if there must be exactly three groups? If the number of groups is free? Now seat
the same eight students at round tables: how many seatings use exactly three tables? These questions sound like the
ones of Chapter 2, but the usual tools, factorials and binomial coefficients, do not answer them in one line. Each
needs a new family of numbers: the Stirling numbers of the second kind for groups, the Stirling numbers of the first
kind for tables, and the Bell numbers for "any number of groups". In this chapter you meet all three, find their
recurrences and formulas, see that they are exactly the numbers that convert ordinary powers $x^n$ into "falling
powers" $x(x-1)(x-2)\cdots$ and back, and then turn to splitting a number rather than a set: integer partitions and
compositions.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a partition of a set is, the Stirling numbers of the second kind $S(n,k)$, their recurrence and their inclusion-exclusion formula
    - the Bell numbers $B_n$, their recurrence, Dobiński's formula and their exponential generating function
    - how every permutation splits into cycles, the Stirling numbers of the first kind $c(n,k)$, and why a random permutation has about $\ln n$ cycles
    - the falling and rising factorials, how the two kinds of Stirling numbers convert between them and ordinary powers, and why the two tables are inverse to each other
    - a quick tour of integer partitions (Ferrers diagrams, conjugation, partitions into $k$ parts) and the completed twelvefold way
    - compositions, the ordered cousins of partitions, and their link to the Fibonacci numbers

    **You need:** [Chapter 2](02-Permutations-and-Combinations.md) (factorials, binomial coefficients, stars and
    bars, the twelvefold way), [Chapter 5](05-Inclusion-Exclusion.md) (onto functions),
    [Chapter 6](06-Recurrences.md) (recurrences) and, for one paragraph each, [Chapter 7](07-Generating-Functions.md)
    (exponential generating functions). Gentler versions: [Partitions of a number](../../topics/counting/level-8/04-partitions.md)
    and [Counting with recursion](../../topics/counting/level-8/01-counting-recursion.md) in the Topics shelf.

    **Levels:** 9.1 and 9.2 are intermediate; 9.3 is intermediate to advanced; 9.4 is intermediate (with links to
    the expert material in the Number Theory book); 9.5 is beginner to intermediate.

## 9.1 Set partitions, Stirling numbers of the second kind, Bell numbers

### The question

Four friends, Ann, Ben, Cal and Dee, want to split into two teams for a game. Both teams must have at least one
player, and the teams have no names or colours: "Ann and Ben against Cal and Dee" is the same split as "Cal and Dee
against Ann and Ben". How many splits are there?

List them, writing the friends as $1, 2, 3, 4$. Either one team has a single player (4 choices for who is alone) or
both teams have two players (player 1 chooses a partner: 3 choices):

| one player alone | two and two |
|---|---|
| $\{1\}\{2,3,4\}$, $\{2\}\{1,3,4\}$, $\{3\}\{1,2,4\}$, $\{4\}\{1,2,3\}$ | $\{1,2\}\{3,4\}$, $\{1,3\}\{2,4\}$, $\{1,4\}\{2,3\}$ |

That makes $4 + 3 = 7$. Note what made this different from Chapter 2. If the teams had names (Red and Blue), each
player would choose a team, $2^4 = 16$ ways, minus the 2 ways that leave one team empty, so 14; and since naming the
two teams doubles every unnamed split, there are $14/2 = 7$ unnamed splits. That trick worked because both teams were
non-empty and different, so swapping names never gives the same split. With three or more teams of possibly equal
sizes the bookkeeping gets harder, and we want a general theory.

### Definitions

A **partition of a set** $X$ is a way of cutting $X$ into non-empty, non-overlapping pieces whose union is $X$. The
pieces are called **blocks**. The order of the blocks does not matter, and the order inside a block does not matter.
So $\{1,3\}\{2,4\}$ is a partition of $\{1,2,3,4\}$ into two blocks, and it is the same partition as $\{4,2\}\{3,1\}$.

The **Stirling number of the second kind** $S(n,k)$ is the number of partitions of an $n$-element set into exactly
$k$ blocks. Many books write it as ${n \brace k}$, read "$n$ subset $k$", a notation that Donald Knuth popularised.
We just showed $S(4,2) = 7$.

A few values come straight from the definition:

- $S(n,1) = 1$ for $n \ge 1$: one block holding everything.
- $S(n,n) = 1$: every element alone.
- $S(n,k) = 0$ if $k > n$: you cannot make more non-empty blocks than you have elements.
- $S(0,0) = 1$: the empty set has exactly one partition, with no blocks. (This convention makes the formulas below work
  without exceptions.) And $S(n,0) = 0$ for $n \ge 1$.

**Two blocks.** $S(n,2) = 2^{n-1} - 1$ for $n \ge 1$. *Proof.* Look at the block containing element $n$. The other
block, the one without $n$, is a non-empty subset $A$ of $\{1, \dots, n-1\}$, and the block of $n$ is everything
else. Every non-empty $A$ works, because the block of $n$ contains $n$ and is never empty. So there are
$2^{n-1} - 1$ choices, and each gives a different partition. $\square$ Check: $S(4,2) = 2^3 - 1 = 7$.

**$n-1$ blocks.** $S(n, n-1) = \binom{n}{2}$. *Proof.* With $n$ elements in $n-1$ non-empty blocks, exactly one block
has two elements and all the others are singletons. The partition is fixed by choosing that pair. $\square$

### The recurrence

To fill in a table we need a way to build partitions of $n$ elements from partitions of $n - 1$.

**Theorem 9.1.** For $n \ge 1$ and $k \ge 1$,

$$
S(n,k) = k\,S(n-1,k) + S(n-1,k-1).
$$

*Proof.* Split the partitions of $\{1, \dots, n\}$ into $k$ blocks according to what happens to element $n$.

- If $n$ is alone in its block, removing that block leaves a partition of $\{1, \dots, n-1\}$ into $k-1$ blocks, and
  every such partition arises exactly once. That gives $S(n-1,k-1)$.
- If $n$ shares its block, removing $n$ leaves a partition of $\{1, \dots, n-1\}$ into $k$ blocks (no block became
  empty). Going back, each such partition can receive $n$ into any of its $k$ blocks, and the $k$ results are
  different. That gives $k\,S(n-1,k)$.

The two cases do not overlap and cover everything, so the sum rule gives the formula. $\square$

Here is the table it produces, row $n$, column $k$:

| $n$ | $k=1$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | row sum $B_n$ |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 1 | | | | | | | | 1 |
| 2 | 1 | 1 | | | | | | | 2 |
| 3 | 1 | 3 | 1 | | | | | | 5 |
| 4 | 1 | 7 | 6 | 1 | | | | | 15 |
| 5 | 1 | 15 | 25 | 10 | 1 | | | | 52 |
| 6 | 1 | 31 | 90 | 65 | 15 | 1 | | | 203 |
| 7 | 1 | 63 | 301 | 350 | 140 | 21 | 1 | | 877 |
| 8 | 1 | 127 | 966 | 1701 | 1050 | 266 | 28 | 1 | 4140 |

**Worked example.** $S(5,3) = 3\,S(4,3) + S(4,2) = 3 \cdot 6 + 7 = 25$. And $S(6,3) = 3 \cdot 25 + 15 = 90$.

The opening question, eight students in three groups, is $S(8,3) = 966$.

Compare this triangle with Pascal's. Pascal's rule is $\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}$; the only
change is the factor $k$, and it comes from the $k$ places where the new element can go.

### A formula by inclusion-exclusion

The recurrence is quick for tables, but sometimes we want one value directly. The link is with **onto functions**
(also called **surjections**): functions $f$ from an $n$-set $N$ to a $k$-set $K$ that hit every element of $K$.

**Theorem 9.2.** The number of onto functions from an $n$-set to a $k$-set is $k!\,S(n,k)$, and therefore

$$
S(n,k) = \frac{1}{k!}\sum_{j=0}^{k} (-1)^j \binom{k}{j} (k-j)^n .
$$

*Proof.* An onto function $f\colon N \to K$ cuts $N$ into the $k$ non-empty sets $f^{-1}(y)$ (the elements sent to
$y$), one for each $y \in K$. Forgetting which block goes to which $y$ gives a partition of $N$ into $k$ blocks.
Going back, a partition into $k$ blocks together with a way of matching its $k$ blocks to the $k$ elements of $K$ (there
are $k!$ such matchings) gives exactly one onto function. So there are $k!\,S(n,k)$ onto functions.

In [Chapter 5](05-Inclusion-Exclusion.md) inclusion-exclusion counted the onto functions directly: of the $k^n$
functions, remove those missing some chosen element, add back those missing two, and so on, giving
$\sum_j (-1)^j\binom{k}{j}(k-j)^n$. Divide by $k!$. $\square$

**Worked example.** $S(5,3) = \frac{1}{6}\left(3^5 - 3 \cdot 2^5 + 3 \cdot 1^5 - 0\right) = \frac{243 - 96 + 3}{6} = \frac{150}{6} = 25$.
Check: the table says 25.

The same idea, read the other way, gives a second identity. Every function from an $n$-set to a $k$-set is onto its
image. Sorting the $k^n$ functions by the size $j$ of their image: choose the image ($\binom{k}{j}$ ways), then an onto
function onto it ($j!\,S(n,j)$ ways). So

$$
k^n = \sum_{j=0}^{k} \binom{k}{j}\, j!\, S(n,j).
$$

Check with $n = 3$, $k = 2$: $\binom21 \cdot 1 \cdot 1 + \binom22 \cdot 2 \cdot 3 = 2 + 6 = 8 = 2^3$. This identity
returns in 9.3 in its most useful form.

### Bell numbers

If the number of groups is free, we add a row of the table. The **Bell number** $B_n$ is the number of partitions of
an $n$-set into any number of blocks:

$$
B_n = \sum_{k=0}^{n} S(n,k).
$$

The first values are $B_0 = 1$ and

$$
1,\ 2,\ 5,\ 15,\ 52,\ 203,\ 877,\ 4140,\ 21147,\ 115975, \dots
$$

for $n = 1, 2, \dots, 10$. They are named after Eric Temple Bell, who wrote about them in the 1930s, though they were
known much earlier.

A partition of a set is the same thing as an **equivalence relation** on it (a relation that is reflexive, symmetric
and transitive): the blocks are the equivalence classes. So there are exactly $B_n$ equivalence relations on an
$n$-element set; 15 on a 4-element set.

Another way to see Bell numbers: **rhyme schemes**. A poem of four lines has a rhyme scheme such as AABB or ABAB or
ABBA, where lines with the same letter rhyme. The letters are just labels for blocks of lines, so rhyme schemes of
$n$ lines are set partitions of the lines, written with letters used in order of first appearance. There are 15 for
four lines, from AAAA to ABCD. In the old Japanese incense game *genji-kō*, players smelled five samples and guessed
which were the same; the 52 possible answers, $B_5$, each had a symbol (a *genji-mon*) named after a chapter of *The
Tale of Genji*.

**Theorem 9.3 (Bell recurrence).** $B_0 = 1$ and for $n \ge 0$,

$$
B_{n+1} = \sum_{j=0}^{n} \binom{n}{j} B_j .
$$

*Proof.* Take a partition of $\{1, \dots, n+1\}$ and look at the block containing $n+1$. Say that block contains $i$
other elements; choose them in $\binom{n}{i}$ ways. The remaining $n - i$ elements are partitioned freely, in
$B_{n-i}$ ways. Summing over $i$ gives $\sum_i \binom{n}{i}B_{n-i}$, and putting $j = n - i$ (with
$\binom{n}{i} = \binom{n}{n-i}$) gives the formula. $\square$

**Worked example.** $B_5 = \binom40 B_0 + \binom41 B_1 + \binom42 B_2 + \binom43 B_3 + \binom44 B_4 = 1 + 4 + 12 + 20 + 15 = 52$.

### Dobiński's formula

There is a striking infinite series for $B_n$, published by G. Dobiński in 1877:

$$
B_n = \frac{1}{e}\sum_{m=0}^{\infty} \frac{m^n}{m!}.
$$

*Proof.* Start from Theorem 9.2 and write $S(n,k)$ as a sum over $j$ and $i = k - j$:

$$
S(n,k) = \sum_{i + j = k} \frac{(-1)^j}{j!}\cdot\frac{i^n}{i!},
$$

since $\frac{1}{k!}\binom{k}{j} = \frac{1}{j!\,(k-j)!}$. This holds for every $k \ge 0$, and also gives 0 for $k > n$
(there are no onto functions then). Now add over all $k$. Every pair $(i, j)$ of non-negative integers appears exactly
once, so

$$
B_n = \sum_{k \ge 0} S(n,k) = \left(\sum_{i \ge 0}\frac{i^n}{i!}\right)\left(\sum_{j \ge 0}\frac{(-1)^j}{j!}\right) = \left(\sum_{i \ge 0}\frac{i^n}{i!}\right)\cdot e^{-1}.
$$

Both series converge absolutely, so multiplying them and regrouping is allowed. $\square$

Check with $n = 1$: $\sum_m m/m! = \sum_{m\ge1} 1/(m-1)! = e$, so $B_1 = 1$. With $n = 2$:
$\sum_m m^2/m! = \sum_{m \ge 1} m/(m-1)! = \sum_{r \ge 0}(r+1)/r! = e + e = 2e$, so $B_2 = 2$.

For readers who know a little probability: if $X$ is a Poisson random variable with mean 1, then
$P(X = m) = e^{-1}/m!$, and Dobiński's formula says $B_n$ is the average value of $X^n$, its $n$-th moment.

### The exponential generating function

In [Chapter 7](07-Generating-Functions.md) exponential generating functions counted labelled structures: if $a_n$
counts structures on an $n$-set, its EGF is $\sum a_n x^n/n!$, and a structure that "splits a set into an unordered
collection of non-empty pieces, each carrying a structure counted by $C(x)$" has EGF $e^{C(x)}$. Here each block is a
bare non-empty set; there is one such structure on each non-empty set, with EGF $\sum_{m \ge 1} x^m/m! = e^x - 1$. So

$$
\sum_{n \ge 0} B_n \frac{x^n}{n!} = e^{e^x - 1}, \qquad \sum_{n \ge 0} S(n,k)\frac{x^n}{n!} = \frac{(e^x - 1)^k}{k!}.
$$

The second formula is the "exactly $k$ blocks" version: an ordered list of $k$ blocks has EGF $(e^x-1)^k$, and we
divide by $k!$ to forget the order. Expanding $(e^x - 1)^k$ by the binomial theorem and reading off the coefficient of
$x^n/n!$ gives Theorem 9.2 again, a nice consistency check.

### Try it in Python

```python
from math import comb, factorial

def stirling2(n, k):
    """S(n,k) by the recurrence of Theorem 9.1."""
    S = [[0] * (k + 1) for _ in range(n + 1)]
    S[0][0] = 1
    for m in range(1, n + 1):
        for j in range(1, k + 1):
            S[m][j] = j * S[m - 1][j] + S[m - 1][j - 1]
    return S[n][k]

def stirling2_formula(n, k):
    """S(n,k) by inclusion-exclusion (Theorem 9.2)."""
    return sum((-1)**j * comb(k, j) * (k - j)**n for j in range(k + 1)) // factorial(k)

bell = [1]
for n in range(12):
    bell.append(sum(comb(n, j) * bell[j] for j in range(n + 1)))

print(stirling2(8, 3), stirling2_formula(8, 3))   # 966 966
print(bell)   # [1, 1, 2, 5, 15, 52, 203, 877, 4140, 21147, 115975, 678570, 4213597]
```

## 9.2 Cycles and Stirling numbers of the first kind

### Round tables

Four guests sit at round tables. Two seatings are the same if every guest has the same left-hand neighbour in both;
turning a table does not change a seating. Each table must have at least one guest. In how many ways can the four sit
at exactly two tables?

Try it. A table of three and a table of one: choose the lone guest (4 ways); three people around a table can sit in
$(3-1)! = 2$ ways (fix one person, then the other two are in one of 2 orders). That is $4 \cdot 2 = 8$. Two tables of
two: choose the pairs ($3$ ways, as in 9.1); two people at a table sit in only $(2-1)! = 1$ way. That is 3. Total
$8 + 3 = 11$.

### Permutations are made of cycles

Round tables are a disguise for permutations. A **permutation** of a set $X$ is a bijection $\sigma\colon X \to X$.
Draw each element as a dot and draw an arrow from $x$ to $\sigma(x)$. Every dot has exactly one arrow out and exactly
one arrow in, because $\sigma$ is a bijection. Start at any dot and follow the arrows: $x, \sigma(x), \sigma(\sigma(x)),
\dots$. Since $X$ is finite you must repeat a dot sooner or later, and the first repeated dot must be $x$ itself (any
other dot already has its one incoming arrow used). So the dots fall into closed loops, called **cycles**, and each
dot lies on exactly one cycle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="The permutation sending 1 to 3, 3 to 5, 5 to 1, 2 to 4, 4 to 2 and 6 to itself, drawn as three cycles: a triangle 1, 3, 5, a pair 2, 4 and a loop at 6.">
  <defs>
    <marker id="cmbc9-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
  </defs>
  <line x1="88.2" y1="51.7" x2="119.8" y2="104.8" stroke="currentColor" stroke-width="1.5" marker-end="url(#cmbc9-arr)"/>
  <line x1="114" y1="122" x2="50" y2="122" stroke="currentColor" stroke-width="1.5" marker-end="url(#cmbc9-arr)"/>
  <line x1="38.2" y1="108.3" x2="69.8" y2="55.2" stroke="currentColor" stroke-width="1.5" marker-end="url(#cmbc9-arr)"/>
  <circle cx="80" cy="38" r="14" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="130" cy="122" r="14" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="30" cy="122" r="14" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="80" y="43" text-anchor="middle" font-size="14" fill="currentColor">1</text>
  <text x="130" y="127" text-anchor="middle" font-size="14" fill="currentColor">3</text>
  <text x="30" y="127" text-anchor="middle" font-size="14" fill="currentColor">5</text>
  <path d="M232,60 Q262,90 232,118" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#cmbc9-arr)"/>
  <path d="M208,118 Q178,90 208,60" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#cmbc9-arr)"/>
  <circle cx="220" cy="48" r="14" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="220" cy="130" r="14" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="220" y="53" text-anchor="middle" font-size="14" fill="currentColor">2</text>
  <text x="220" y="135" text-anchor="middle" font-size="14" fill="currentColor">4</text>
  <path d="M331,80 C318,40 362,40 349,80" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#cmbc9-arr)"/>
  <circle cx="340" cy="92" r="14" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="340" y="97" text-anchor="middle" font-size="14" fill="currentColor">6</text>
  <text x="80" y="160" text-anchor="middle" font-size="13" fill="currentColor">(1 3 5)</text>
  <text x="220" y="160" text-anchor="middle" font-size="13" fill="currentColor">(2 4)</text>
  <text x="340" y="160" text-anchor="middle" font-size="13" fill="currentColor">(6)</text>
</svg>
</div>

We write a permutation by listing its cycles in brackets: $(1\,3\,5)(2\,4)(6)$ means $1 \mapsto 3 \mapsto 5 \mapsto 1$,
$2 \mapsto 4 \mapsto 2$ and $6 \mapsto 6$. A cycle of length 1 is a **fixed point**. The notation $(1\,3\,5)$ is the
same cycle as $(3\,5\,1)$ and $(5\,1\,3)$, but not as $(1\,5\,3)$, which goes the other way. That is exactly the rule
for round tables: each table is a cycle, "the person on my left" is $\sigma$ of me, and turning the table is
rewriting the cycle from a different starting point.

The **Stirling number of the first kind** $c(n,k)$ is the number of permutations of an $n$-set with exactly $k$
cycles. (Knuth writes ${n \brack k}$, read "$n$ cycle $k$"; some books write $c(n,k)$ or $|s(n,k)|$.) The round-table
count above says $c(4,2) = 11$.

Easy values:

- $c(n,n) = 1$: only the identity has $n$ cycles (all fixed points).
- $c(n,1) = (n-1)!$: one cycle through all $n$ elements; write it starting with element 1, then the other $n-1$
  elements in any order.
- $c(n, n-1) = \binom{n}{2}$: $n - 1$ cycles means one 2-cycle and the rest fixed points; choose the pair.
- $\sum_k c(n,k) = n!$, since every permutation has some number of cycles.
- $c(0,0) = 1$ and $c(n,0) = 0$ for $n \ge 1$.

### The recurrence

**Theorem 9.4.** For $n \ge 1$ and $k \ge 1$,

$$
c(n,k) = (n-1)\,c(n-1,k) + c(n-1,k-1).
$$

*Proof.* Look at element $n$ in a permutation of $\{1, \dots, n\}$ with $k$ cycles.

- If $n$ is a fixed point, deleting it leaves a permutation of $\{1,\dots,n-1\}$ with $k - 1$ cycles. That gives
  $c(n-1,k-1)$.
- Otherwise $n$ sits in a cycle of length at least 2, right after some element $a$ (that is, $\sigma(a) = n$). Delete
  $n$ from its cycle, joining $a$ directly to $\sigma(n)$. The result is a permutation of $\{1, \dots, n-1\}$, still
  with $k$ cycles. Going back, given such a permutation, we can insert $n$ right after any of the $n - 1$ elements, and
  each choice gives a different permutation. That gives $(n-1)\,c(n-1,k)$. $\square$

The factor is now $n - 1$ (the number of elements $n$ can follow) where Theorem 9.1 had $k$ (the number of blocks
$n$ can join). The table:

| $n$ | $k=1$ | 2 | 3 | 4 | 5 | 6 | 7 | row sum $n!$ |
|---|---|---|---|---|---|---|---|---|
| 1 | 1 | | | | | | | 1 |
| 2 | 1 | 1 | | | | | | 2 |
| 3 | 2 | 3 | 1 | | | | | 6 |
| 4 | 6 | 11 | 6 | 1 | | | | 24 |
| 5 | 24 | 50 | 35 | 10 | 1 | | | 120 |
| 6 | 120 | 274 | 225 | 85 | 15 | 1 | | 720 |
| 7 | 720 | 1764 | 1624 | 735 | 175 | 21 | 1 | 5040 |

**Worked example.** $c(5,3) = 4 \cdot c(4,3) + c(4,2) = 4 \cdot 6 + 11 = 35$.

### The generating polynomial

The rows of this table are the coefficients of a famous product.

**Theorem 9.5.** For every $n \ge 0$,

$$
x(x+1)(x+2)\cdots(x+n-1) = \sum_{k=0}^{n} c(n,k)\,x^k .
$$

*Proof by recurrence.* Call the left side $R_n(x)$, with $R_0(x) = 1$. Then $R_n(x) = R_{n-1}(x)\cdot(x + n - 1)$.
Comparing coefficients of $x^k$ on both sides, $[x^k]R_n = (n-1)[x^k]R_{n-1} + [x^{k-1}]R_{n-1}$: the same recurrence
and the same starting values as $c(n,k)$. So the coefficients are the $c(n,k)$. $\square$

*Proof by counting* (for a positive integer $x$). Build a permutation by inserting $1, 2, \dots, n$ in turn, and give
each new cycle one of $x$ colours. Element 1 starts a new cycle: $x$ colour choices. Element $i$ either starts a new
cycle ($x$ colour choices) or goes right after one of the $i-1$ elements already placed ($i - 1$ choices). That gives
$x(x+1)\cdots(x+n-1)$ coloured permutations. On the other hand, a permutation with $k$ cycles can be coloured in $x^k$
ways, so the count is also $\sum_k c(n,k)x^k$. Two polynomials that agree at every positive integer are equal. $\square$

Check $n = 4$: $x(x+1)(x+2)(x+3) = x^4 + 6x^3 + 11x^2 + 6x$, matching the row $6, 11, 6, 1$.

### How many cycles does a random permutation have?

Put $x = 1$ in Theorem 9.5 and you get $n! = \sum_k c(n,k)$. Differentiate first and the derivative at 1 gives
$\sum_k k\,c(n,k)$, the total number of cycles in all $n!$ permutations. Since $R_n(x)$ is a product, its logarithmic
derivative is a sum: $R_n'(x)/R_n(x) = \sum_{i=0}^{n-1} \frac{1}{x+i}$. At $x = 1$,

$$
\frac{\sum_k k\,c(n,k)}{n!} = \frac{R_n'(1)}{R_n(1)} = 1 + \frac12 + \frac13 + \cdots + \frac1n = H_n .
$$

So **a random permutation of $n$ elements has on average $H_n$ cycles**, the $n$-th harmonic number, which is about
$\ln n + 0.577$. A random shuffle of a 52-card deck has on average $H_{52} \approx 4.54$ cycles.

The same insertion process explains it without calculus: when element $i$ is inserted, it starts a new cycle in
exactly 1 of its $i$ possible choices. So the expected number of new cycles from element $i$ is $1/i$, and adding
these expectations (linearity of expectation, used again in [Chapter 17](17-The-Probabilistic-Method.md)) gives $H_n$.

### Long cycles and a famous puzzle

How many permutations of $\{1, \dots, n\}$ have a cycle of length exactly $k$, for some $k > n/2$? Such a permutation has
only one cycle that long (two would need more than $n$ elements). Choose its elements ($\binom{n}{k}$ ways), arrange
them in a cycle ($(k-1)!$ ways), and permute the rest freely ($(n-k)!$ ways):

$$
\binom{n}{k}(k-1)!\,(n-k)! = \frac{n!}{k}.
$$

So the probability that a random permutation has a cycle of length $k > n/2$ is exactly $1/k$, and the probability
that it has **no** cycle longer than $n/2$ is

$$
1 - \sum_{k = \lfloor n/2 \rfloor + 1}^{n} \frac1k .
$$

For $n = 100$ this is $1 - (H_{100} - H_{50}) \approx 0.3118$; as $n$ grows it tends to $1 - \ln 2 \approx 0.307$.
This number is the heart of the "100 prisoners" puzzle, popularised by Peter Winkler and others in the 2000s: a hundred
prisoners each open 50 of 100 boxes looking for their own number, and a clever strategy (follow the cycle that starts
at your own number) makes them all succeed exactly when the hidden permutation has no cycle longer than 50, about
31% of the time, compared with $2^{-100}$ for guessing at random.

### Signed Stirling numbers

It is often convenient to attach signs: the **signed Stirling numbers of the first kind** are

$$
s(n,k) = (-1)^{n-k}\,c(n,k).
$$

Replace $x$ by $-x$ in Theorem 9.5 and multiply by $(-1)^n$: the product becomes $x(x-1)(x-2)\cdots(x-n+1)$, and
the coefficient of $x^k$ picks up $(-1)^{n-k}$. So

$$
x(x-1)(x-2)\cdots(x-n+1) = \sum_{k=0}^{n} s(n,k)\,x^k .
$$

Check $n = 4$: $x(x-1)(x-2)(x-3) = x^4 - 6x^3 + 11x^2 - 6x$. The signed numbers are the natural partner of $S(n,k)$,
as the next section shows.

## 9.3 Falling factorials and conversions

*Level: intermediate to advanced.*

### Two kinds of powers

The **falling factorial** $x^{\underline{k}}$ (read "$x$ to the $k$ falling") is

$$
x^{\underline{k}} = x(x-1)(x-2)\cdots(x-k+1), \qquad x^{\underline{0}} = 1,
$$

a product of $k$ factors going down by one. For a whole number $x$ it counts the ways to arrange $k$ of $x$ objects in
a row: $5^{\underline{3}} = 5 \cdot 4 \cdot 3 = 60$. It also gives $\binom{x}{k} = x^{\underline{k}}/k!$. The **rising
factorial** $x^{\overline{k}} = x(x+1)\cdots(x+k-1)$ goes up instead. (Older books call them Pochhammer symbols and use
several clashing notations; the underline and overline are Knuth's, and they are unambiguous.)

Why care? Because falling factorials behave under differences the way ordinary powers behave under derivatives. The
**forward difference** of a function is $\Delta f(x) = f(x+1) - f(x)$. Then

$$
\Delta x^{\underline{k}} = (x+1)x\cdots(x-k+2) - x(x-1)\cdots(x-k+1) = x^{\underline{k-1}}\big((x+1) - (x-k+1)\big) = k\,x^{\underline{k-1}},
$$

the exact analogue of $\frac{d}{dx}x^k = k x^{k-1}$. Ordinary powers do not do this: $\Delta x^2 = 2x + 1$, not $2x$.
So for sums (the discrete version of integrals) falling factorials are the right basis, and we need a dictionary
between them and ordinary powers. Stirling numbers are that dictionary.

### From powers to falling factorials

**Theorem 9.6.** For every $n \ge 0$, as polynomials in $x$,

$$
x^n = \sum_{k=0}^{n} S(n,k)\, x^{\underline{k}} .
$$

*Proof.* First let $x$ be a positive integer and count the functions from $N = \{1, \dots, n\}$ to a set $X$ of size
$x$. There are $x^n$ of them. Now sort them by the partition of $N$ they create: two elements of $N$ are in the same
block when they have the same image. If that partition has $k$ blocks, the function is fixed by sending the $k$ blocks
to $k$ *different* elements of $X$, in order: $x^{\underline{k}}$ ways. So the count is also
$\sum_k S(n,k)\,x^{\underline{k}}$.

Both sides are polynomials in $x$ of degree $n$, and they agree at every positive integer. Their difference is a
polynomial with infinitely many roots, so it is the zero polynomial. $\square$

(This is the identity $k^n = \sum_j \binom{k}{j} j!\,S(n,j)$ of 9.1 again, since $\binom{k}{j}j! = k^{\underline{j}}$.)

**Worked example.** With row 3 of the $S$ table, $1, 3, 1$:

$$
x^3 = x^{\underline{1}} + 3x^{\underline{2}} + x^{\underline{3}} = x + 3x(x-1) + x(x-1)(x-2).
$$

Check by expanding: $x + 3x^2 - 3x + x^3 - 3x^2 + 2x = x^3$. Check at $x = 4$: $4 + 36 + 24 = 64$.

### From falling factorials to powers, and orthogonality

The signed formula of 9.2 is the other direction: $x^{\underline{n}} = \sum_k s(n,k)x^k$. Substitute one into the other:

$$
x^n = \sum_k S(n,k)\,x^{\underline{k}} = \sum_k S(n,k)\sum_m s(k,m)\,x^m .
$$

Comparing coefficients of $x^m$ (powers of $x$ are linearly independent) gives the **orthogonality relations**:

$$
\sum_{k} S(n,k)\, s(k,m) = \begin{cases} 1 & n = m,\\ 0 & n \ne m,\end{cases}
\qquad
\sum_{k} s(n,k)\, S(k,m) = \begin{cases} 1 & n = m,\\ 0 & n \ne m.\end{cases}
$$

In matrix language: the lower-triangular matrix of $S(n,k)$ and the lower-triangular matrix of $s(n,k)$ are inverses
of each other. They are the change-of-basis matrices between the basis $1, x, x^2, \dots$ and the basis
$1, x^{\underline1}, x^{\underline2}, \dots$ of the space of polynomials (see the U of T guide on
[change of basis](../../uoft/MAT240H1/unit06.md) for the linear algebra).

**Worked check** with rows and columns $1$ to $4$:

$$
\begin{pmatrix} 1&0&0&0\\ 1&1&0&0\\ 1&3&1&0\\ 1&7&6&1 \end{pmatrix}
\begin{pmatrix} 1&0&0&0\\ -1&1&0&0\\ 2&-3&1&0\\ -6&11&-6&1 \end{pmatrix}
= \begin{pmatrix} 1&0&0&0\\ 0&1&0&0\\ 0&0&1&0\\ 0&0&0&1 \end{pmatrix}.
$$

For instance row 4 times column 1: $1 - 7 + 12 - 6 = 0$; row 4 times column 2: $7 - 18 + 11 = 0$; row 4 times column
3: $6 - 6 = 0$.

The rising factorials fit in too: Theorem 9.5 says $x^{\overline{n}} = \sum_k c(n,k)x^k$, with no signs. A third
family, the **Lah numbers**, converts rising into falling factorials; we leave them to the further reading.

### Sums of powers, the easy way

The payoff: a mechanical way to sum powers. Because $x^{\underline{k}} = k!\binom{x}{k}$, the hockey-stick identity
of [Chapter 3](03-Binomial-Coefficients.md), $\sum_{x=0}^{n-1}\binom{x}{k} = \binom{n}{k+1}$, becomes

$$
\sum_{x=0}^{n-1} x^{\underline{k}} = \frac{n^{\underline{k+1}}}{k+1},
$$

the discrete twin of $\int_0^n x^k\,dx = n^{k+1}/(k+1)$. Now write the power in falling factorials and sum each piece.

**Worked example: squares.** $x^2 = x^{\underline1} + x^{\underline2}$ (row 2 of $S$ is $1, 1$). So

$$
\sum_{x=0}^{n-1} x^2 = \frac{n^{\underline2}}{2} + \frac{n^{\underline3}}{3} = \frac{n(n-1)}{2} + \frac{n(n-1)(n-2)}{3} = \frac{n(n-1)(2n-1)}{6}.
$$

Check with $n = 10$: $0^2 + 1^2 + \cdots + 9^2 = 285$, and $\frac{10 \cdot 9 \cdot 19}{6} = 285$.

**Worked example: cubes.** $x^3 = x^{\underline1} + 3x^{\underline2} + x^{\underline3}$, so

$$
\sum_{x=0}^{n-1} x^3 = \frac{n^{\underline2}}{2} + n^{\underline3} + \frac{n^{\underline4}}{4}.
$$

Check with $n = 10$: $45 + 720 + 5040/4 = 45 + 720 + 1260 = 2025 = 45^2$, which matches the classical fact that the sum
of the first cubes is the square of the sum of the first numbers ($0 + 1 + \cdots + 9 = 45$).

### Stirling numbers in probability

One more use, briefly. The average of $X^{\underline{k}}$ for a random variable $X$ is its $k$-th **factorial moment**,
and for many distributions factorial moments are much simpler than ordinary ones. For a Poisson variable with mean
$\lambda$, the $k$-th factorial moment is $\lambda^k$; Theorem 9.6 then gives the ordinary moments as
$\sum_k S(n,k)\lambda^k$. With $\lambda = 1$ this is $B_n$, which is Dobiński's formula seen from the other side.

## 9.4 Integer partitions, quickly

Now split a *number* instead of a set. The [Number Theory book's Chapter 16](../number-theory/16-Partitions.md)
treats partitions in depth (Euler's pentagonal theorem, Ramanujan's congruences, the Hardy-Ramanujan formula); here
we collect what a combinatorialist uses every day and connect it with the set partitions above.

### Definitions and small values

A **partition of a positive integer** $n$ is a way of writing $n$ as a sum of positive integers where the order does
not matter. We list the **parts** from largest to smallest: the partitions of 5 are

$$
5,\quad 4+1,\quad 3+2,\quad 3+1+1,\quad 2+2+1,\quad 2+1+1+1,\quad 1+1+1+1+1 .
$$

So the **partition number** is $p(5) = 7$. By convention $p(0) = 1$ (the empty partition). The values grow fast but
not as fast as Bell numbers:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $p(n)$ | 1 | 2 | 3 | 5 | 7 | 11 | 15 | 22 | 30 | 42 | 627 | 190569292 |

The difference from 9.1 is that the things being split are now **identical**. Splitting the set $\{1,2,3,4\}$ into
blocks of sizes 2 and 2 can be done in 3 ways; splitting the number 4 into $2 + 2$ in only one.

### Ferrers diagrams and conjugation

Draw a partition as rows of dots, one row per part, longest on top, all rows starting at the left. This is the
**Ferrers diagram** (Norman Ferrers, in the 1850s, as reported by Sylvester). Reading the same dots by **columns**
gives another partition of the same number, the **conjugate**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="Ferrers diagram of 5 plus 3 plus 1, with rows of 5, 3 and 1 dots, and its conjugate 3 plus 2 plus 2 plus 1 plus 1, obtained by reading columns as rows. The first column of the left diagram is highlighted and becomes the first row of the right one.">
  <rect x="29" y="29" width="22" height="66" rx="8" fill="#9cc9ea" fill-opacity="0.5"/>
  <circle cx="40" cy="40" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="62" cy="40" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="84" cy="40" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="106" cy="40" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="128" cy="40" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="40" cy="62" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="62" cy="62" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="84" cy="62" r="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="40" cy="84" r="7" fill="#eea66f" stroke="currentColor"/>
  <text x="84" y="160" text-anchor="middle" font-size="14" fill="currentColor">5 + 3 + 1</text>
  <text x="200" y="75" text-anchor="middle" font-size="22" fill="currentColor">&#8596;</text>
  <rect x="249" y="29" width="66" height="22" rx="8" fill="#9cc9ea" fill-opacity="0.5"/>
  <circle cx="260" cy="40" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="282" cy="40" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="304" cy="40" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="260" cy="62" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="282" cy="62" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="260" cy="84" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="282" cy="84" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="260" cy="106" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="260" cy="128" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <text x="300" y="160" text-anchor="middle" font-size="14" fill="currentColor">3 + 2 + 2 + 1 + 1</text>
</svg>
</div>

Conjugating twice gives back the original, so conjugation is a bijection from partitions to partitions. It swaps "the
number of parts" with "the size of the largest part". This proves, with no algebra:

**Theorem 9.7.** The number of partitions of $n$ into exactly $k$ parts equals the number of partitions of $n$ whose
largest part is exactly $k$. Likewise, partitions into at most $k$ parts are equinumerous with partitions into parts of
size at most $k$. $\square$

### Partitions into $k$ parts

Write $p(n,k)$ for the number of partitions of $n$ into exactly $k$ parts.

**Theorem 9.8.** $p(0,0) = 1$, $p(n,k) = 0$ if $n \le 0$ or $k \le 0$ otherwise, and for $n, k \ge 1$,

$$
p(n,k) = p(n-1,k-1) + p(n-k,k).
$$

*Proof.* Either the smallest part is 1 or every part is at least 2. If the smallest part is 1, delete it: a partition
of $n-1$ into $k-1$ parts, and this is reversible. If every part is at least 2, subtract 1 from each of the $k$ parts:
a partition of $n - k$ into $k$ parts (all still positive), again reversibly. $\square$

| $n$ | $k=1$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | $p(n)$ |
|---|---|---|---|---|---|---|---|---|---|
| 5 | 1 | 2 | 2 | 1 | 1 | | | | 7 |
| 6 | 1 | 3 | 3 | 2 | 1 | 1 | | | 11 |
| 7 | 1 | 3 | 4 | 3 | 2 | 1 | 1 | | 15 |
| 8 | 1 | 4 | 5 | 5 | 3 | 2 | 1 | 1 | 22 |

Small closed forms: $p(n,1) = p(n,n) = 1$; $p(n,2) = \lfloor n/2 \rfloor$ (the smaller part is $1, 2, \dots,
\lfloor n/2 \rfloor$); $p(n, n-1) = 1$ for $n \ge 2$.

### The generating function, and the size of $p(n)$

Choosing how many 1s, how many 2s, how many 3s, and so on, is a product of independent choices, so (as in
[Chapter 7](07-Generating-Functions.md))

$$
\sum_{n \ge 0} p(n)x^n = \prod_{i \ge 1}\frac{1}{1 - x^i} = (1 + x + x^2 + \cdots)(1 + x^2 + x^4 + \cdots)(1 + x^3 + \cdots)\cdots .
$$

From this product come Euler's theorem that partitions into odd parts and into distinct parts are equally many, the
pentagonal number theorem, and the Hardy-Ramanujan formula (1918)

$$
p(n) \sim \frac{1}{4n\sqrt3}\, e^{\pi\sqrt{2n/3}},
$$

all proved in [Number Theory Chapter 16](../number-theory/16-Partitions.md). The exponent grows like $\sqrt n$, far
slower than for $B_n$, whose logarithm grows roughly like $n \ln n$: identical objects collapse many more
arrangements than distinct ones.

### Set partitions and permutations sorted by shape

Integer partitions organise the set partitions of 9.1 and the permutations of 9.2. The block sizes of a set partition
of $\{1, \dots, n\}$, sorted, form a partition $\lambda$ of $n$, its **type**. Similarly the cycle lengths of a
permutation form its **cycle type**. If $\lambda$ has $m_j$ parts equal to $j$:

- the number of set partitions of type $\lambda$ is $\dfrac{n!}{\prod_j (j!)^{m_j}\, m_j!}$;
- the number of permutations of cycle type $\lambda$ is $\dfrac{n!}{\prod_j j^{m_j}\, m_j!}$.

*Proof.* Write the $n$ elements in a row ($n!$ ways) and cut the row into consecutive groups of the sizes in
$\lambda$, largest first. For set partitions, each block's internal order (a factor $j!$ per block of size $j$) and the
order among the $m_j$ blocks of equal size (a factor $m_j!$) do not matter, so each partition was produced
$\prod_j (j!)^{m_j} m_j!$ times. For cycles, a group of size $j$ read as a cycle can start at any of its $j$ places,
and equal-length cycles can be permuted, so each permutation was produced $\prod_j j^{m_j} m_j!$ times. $\square$

**Worked example,** $n = 4$:

| type | set partitions | permutations |
|---|---|---|
| $4$ | $\frac{24}{24} = 1$ | $\frac{24}{4} = 6$ |
| $3+1$ | $\frac{24}{6} = 4$ | $\frac{24}{3} = 8$ |
| $2+2$ | $\frac{24}{2 \cdot 2 \cdot 2} = 3$ | $\frac{24}{2 \cdot 2 \cdot 2} = 3$ |
| $2+1+1$ | $\frac{24}{2 \cdot 2} = 6$ | $\frac{24}{2 \cdot 2} = 6$ |
| $1+1+1+1$ | $\frac{24}{24} = 1$ | $\frac{24}{24} = 1$ |
| total | $15 = B_4$ | $24 = 4!$ |

Grouping by number of parts recovers the Stirling numbers: two blocks means types $3+1$ and $2+2$, so
$S(4,2) = 4 + 3 = 7$, and $c(4,2) = 8 + 3 = 11$. Cycle types are central to the counting with symmetry of
[Chapter 15](15-Counting-with-Symmetry.md), and the permutations of a fixed cycle type form a conjugacy class of the
symmetric group (see the Algebra book, [Chapter 16](../algebra/16-Group-Actions-and-Sylow.md)).

### The twelvefold way, completed

[Chapter 2](02-Permutations-and-Combinations.md) set out the twelvefold way: put $n$ balls into $k$ boxes, where the
balls may be distinct or identical, the boxes distinct or identical, and the rule is "any", "at most one per box" or
"at least one per box". Several entries had to wait for this chapter. Here is the whole table. A bracket $[\ ]$
means "1 if the condition holds, 0 otherwise".

| balls | boxes | any | at most one | at least one |
|---|---|---|---|---|
| distinct | distinct | $k^n$ | $k^{\underline{n}}$ | $k!\,S(n,k)$ |
| identical | distinct | $\binom{n+k-1}{n}$ | $\binom{k}{n}$ | $\binom{n-1}{k-1}$ |
| distinct | identical | $\sum_{j=0}^{k} S(n,j)$ | $[n \le k]$ | $S(n,k)$ |
| identical | identical | $\sum_{j=0}^{k} p(n,j)$ | $[n \le k]$ | $p(n,k)$ |

Read the last row with conjugation in mind: $\sum_{j \le k}p(n,j)$ is also the number of partitions of $n$ into parts of
size at most $k$. The table is due to Gian-Carlo Rota, and the name "twelvefold way" to Joel Spencer; Richard Stanley's
*Enumerative Combinatorics* made it standard.

## 9.5 Compositions

What if order *does* matter? A **composition** of $n$ is an ordered list of positive integers adding to $n$. The
compositions of 4 are

$$
4,\ 3+1,\ 1+3,\ 2+2,\ 2+1+1,\ 1+2+1,\ 1+1+2,\ 1+1+1+1,
$$

eight of them, against five partitions.

**Theorem 9.9.** There are $2^{n-1}$ compositions of $n \ge 1$, and $\binom{n-1}{k-1}$ of them have exactly $k$ parts.

*Proof.* Write $n$ as a row of $n$ ones with $n-1$ gaps between them: $1\,\square\,1\,\square\,1\,\square\,1$. In each
gap either put a bar or not. The bars cut the row into consecutive pieces, and the piece sizes, read left to right, form
a composition. Every composition arises from exactly one choice of bars (put bars at the partial sums). So
compositions match subsets of the $n - 1$ gaps: $2^{n-1}$ of them. A composition with $k$ parts has $k - 1$ bars:
$\binom{n-1}{k-1}$. $\square$

Check $n = 4$, $k = 2$: $\binom31 = 3$, namely $3+1$, $1+3$, $2+2$. Summing $\binom{n-1}{k-1}$ over $k$ gives
$2^{n-1}$, as it should.

If zero parts are allowed (a **weak composition**), add 1 to each of the $k$ parts: weak compositions of $n$ into $k$
parts match compositions of $n + k$ into $k$ parts, so there are $\binom{n+k-1}{k-1}$ of them. This is stars and bars
from [Chapter 2](02-Permutations-and-Combinations.md) again.

### Restricted parts and Fibonacci numbers

Now only allow certain part sizes.

**Parts 1 and 2.** Let $a_n$ be the number of compositions of $n$ into 1s and 2s. The first part is 1 or 2, and what
follows is a composition of $n-1$ or $n-2$, so $a_n = a_{n-1} + a_{n-2}$ with $a_1 = 1$, $a_2 = 2$. These are the
Fibonacci numbers shifted by one: $a_n = F_{n+1}$, with $F_1 = F_2 = 1$. This is the same as tiling a $1 \times n$ strip
with squares and dominoes ([Chapter 6](06-Recurrences.md)): a tiling is a composition into 1s and 2s.

**Odd parts.** Let $b_n$ count compositions of $n$ into odd parts. If the last part is 1, removing it leaves any odd
composition of $n-1$. If the last part is $3$ or more, subtract 2 from it: an odd composition of $n-2$ whose last part
is odd, which is any odd composition of $n - 2$. Both moves are reversible, so $b_n = b_{n-1} + b_{n-2}$ for
$n \ge 3$, with $b_1 = 1$, $b_2 = 1$. So $b_n = F_n$.

**Parts at least 2.** Similarly the number of compositions of $n$ with all parts at least 2 is $F_{n-1}$ for $n \ge 2$
(exercise 9).

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| all compositions | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 |
| parts 1, 2 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 |
| odd parts | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 |
| parts $\ge 2$ | 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 |

### The generating function of compositions

Generating functions make all of this one formula. Let $A(x) = \sum_{a \in A} x^a$ list the allowed part sizes. A
composition with $k$ parts is an ordered choice of $k$ parts, with generating function $A(x)^k$. Summing over
$k \ge 0$ (the empty composition counts once for $n = 0$):

$$
\sum_{n \ge 0} c_A(n)\, x^n = \sum_{k \ge 0} A(x)^k = \frac{1}{1 - A(x)}.
$$

**Worked examples.**

- All positive parts: $A(x) = x/(1-x)$, and $\frac{1}{1 - x/(1-x)} = \frac{1-x}{1-2x} = 1 + x + 2x^2 + 4x^3 + \cdots$,
  giving $2^{n-1}$ for $n \ge 1$.
- Parts 1 and 2: $\frac{1}{1 - x - x^2}$, the Fibonacci generating function of [Chapter 7](07-Generating-Functions.md).
- Odd parts: $A(x) = x/(1-x^2)$, and $\frac{1}{1 - x/(1-x^2)} = \frac{1 - x^2}{1 - x - x^2}$.

Compare with partitions: there the generating function was a *product* of geometric series, one per part size,
because we choose how many of each size; here it is a geometric series *in* $A(x)$, because we choose a sequence. This
"sequence construction" is one of the basic moves of the symbolic method in Flajolet and Sedgewick's *Analytic
Combinatorics*.

### History thread

James Stirling introduced both kinds of numbers that now bear his name in his *Methodus Differentialis* (1730), not as
counts of partitions or cycles but exactly as in 9.3: as the coefficients that convert between powers and factorial
powers, which he used to sum and interpolate series. Their combinatorial meanings came later. Partitions of integers
go back to Euler, who began the subject in the 1740s after a letter from Philippe Naudé asking in how many ways a
number can be written as a sum of a given number of distinct parts. The Bell numbers appear in many places before Bell,
including the Japanese incense game mentioned in 9.1; Bell's papers of the 1930s gave them their modern name. The
falling-factorial notation with an underline was proposed by Knuth and popularised by *Concrete Mathematics* (Graham,
Knuth and Patashnik), whose Chapter 6 is the classic treatment of everything in 9.1 to 9.3.

## Check yourself

??? question "1. Compute $S(5,2)$ from the formula $2^{n-1} - 1$ and from the recurrence, and list the partitions of $\{1,2,3,4,5\}$ into two blocks that have a block of size 2."

    $2^4 - 1 = 15$. Recurrence: $S(5,2) = 2\,S(4,2) + S(4,1) = 2 \cdot 7 + 1 = 15$. The partitions with a 2-block are
    a pair plus the other three: $\binom52 = 10$ of them, $\{1,2\}\{3,4,5\}$, $\{1,3\}\{2,4,5\}$, $\{1,4\}\{2,3,5\}$,
    $\{1,5\}\{2,3,4\}$, $\{2,3\}\{1,4,5\}$, $\{2,4\}\{1,3,5\}$, $\{2,5\}\{1,3,4\}$, $\{3,4\}\{1,2,5\}$,
    $\{3,5\}\{1,2,4\}$, $\{4,5\}\{1,2,3\}$. The other 5 are a single plus a 4-block: $10 + 5 = 15$.

??? question "2. Six different books go into three identical boxes. In how many ways if no box may be empty? If boxes may be empty?"

    No box empty: $S(6,3) = 90$. Boxes may be empty: the books use 1, 2 or 3 boxes, and an empty identical box is
    invisible, so $S(6,1) + S(6,2) + S(6,3) = 1 + 31 + 90 = 122$.

??? question "3. How many onto functions are there from a 6-element set to a 3-element set? Check with inclusion-exclusion."

    $3!\,S(6,3) = 6 \cdot 90 = 540$. Inclusion-exclusion: $3^6 - 3 \cdot 2^6 + 3 \cdot 1^6 = 729 - 192 + 3 = 540$.

??? question "4. Compute $B_6$ from $B_0, \dots, B_5$ using the Bell recurrence."

    $B_6 = \sum_{j=0}^{5}\binom5j B_j = 1 \cdot 1 + 5 \cdot 1 + 10 \cdot 2 + 10 \cdot 5 + 5 \cdot 15 + 1 \cdot 52
    = 1 + 5 + 20 + 50 + 75 + 52 = 203$.

??? question "5. Show that $c(n,2) = (n-1)!\,H_{n-1}$, where $H_m = 1 + \frac12 + \cdots + \frac1m$, and check $n = 6$."

    By Theorem 9.4 with $k = 2$: $c(n,2) = (n-1)c(n-1,2) + (n-2)!$. Divide by $(n-1)!$: with $u_n = c(n,2)/(n-1)!$,
    $u_n = u_{n-1} + \frac{1}{n-1}$, and $u_2 = c(2,2)/1! = 1 = H_1$. So $u_n = H_{n-1}$ by induction. For $n = 6$:
    $5!\,H_5 = 120 \cdot \frac{137}{60} = 274$, matching the table.

??? question "6. Prove that in exactly half of the permutations of $\{1, \dots, n\}$ ($n \ge 2$), the elements 1 and 2 lie in the same cycle."

    Build the permutation by the insertion process of 9.2: insert 1, then 2, ..., then $n$, each element either
    starting a new cycle or going right after an element already placed. Element 2 has exactly two choices: start a new
    cycle, or go after 1. Later insertions never split or merge cycles, so 1 and 2 share a cycle exactly when element 2
    chose "after 1". The process is a bijection with permutations, and the choices for elements $3, \dots, n$ do not
    depend on the choice for 2, so exactly half of the $n!$ permutations have 1 and 2 together. (Check, $n = 3$: 
    $(1\,2)(3)$, $(1\,2\,3)$, $(1\,3\,2)$ out of 6.)

??? question "7. Use $x^4 = \sum_k S(4,k)x^{\underline{k}}$ to find $0^4 + 1^4 + 2^4 + 3^4 + 4^4$."

    Row 4 of $S$ is $1, 7, 6, 1$, so $\sum_{x=0}^{n-1}x^4 = \frac{n^{\underline2}}{2} + \frac{7n^{\underline3}}{3} + \frac{6n^{\underline4}}{4} + \frac{n^{\underline5}}{5}$.
    With $n = 5$: $n^{\underline2} = 20$, $n^{\underline3} = 60$, $n^{\underline4} = 120$, $n^{\underline5} = 120$, so the
    sum is $10 + 140 + 180 + 24 = 354$. Check: $0 + 1 + 16 + 81 + 256 = 354$.

??? question "8. Show that $\sum_{k} s(n,k) = 0$ for $n \ge 2$, and that $\sum_k (-1)^k S(n,k)\,k! = (-1)^n$ for $n \ge 0$."

    Put $x = 1$ in $x^{\underline n} = \sum_k s(n,k)x^k$: the left side $1 \cdot 0 \cdots$ is 0 once $n \ge 2$. For the
    second, put $x = -1$ in $x^n = \sum_k S(n,k)x^{\underline k}$: $(-1)^{\underline k} = (-1)(-2)\cdots(-k) = (-1)^k k!$,
    so $(-1)^n = \sum_k S(n,k)(-1)^k k!$. Check $n = 3$: $-1 + 3 \cdot 2 - 6 = -1$.

??? question "9. How many partitions of 7 have exactly 3 parts? List them, and check with Theorem 9.8. Then show that compositions of $n \ge 2$ with all parts at least 2 number $F_{n-1}$."

    $5+1+1$, $4+2+1$, $3+3+1$, $3+2+2$: four. Theorem 9.8: $p(7,3) = p(6,2) + p(4,3) = 3 + 1 = 4$. For the second part,
    let $d_n$ count compositions of $n$ into parts $\ge 2$. If the last part is exactly 2, removing it leaves such a
    composition of $n-2$ (or the empty one when $n = 2$); if it is at least 3, subtract 1 from it and get such a
    composition of $n-1$. So $d_n = d_{n-1} + d_{n-2}$ for $n \ge 4$, with $d_2 = 1 = F_1$ and $d_3 = 1 = F_2$; hence
    $d_n = F_{n-1}$.

??? question "10. How many compositions of 10 use only the parts 1 and 2? Only odd parts?"

    Parts 1 and 2: $F_{11} = 89$. Odd parts: $F_{10} = 55$. (Fibonacci numbers $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89$.)

??? question "11. A random permutation of 20 elements is chosen. What is the probability that it has a cycle of length exactly 15? Of length at least 11?"

    Lengths above $n/2 = 10$ occur at most once, and the probability of a cycle of length $k > n/2$ is $1/k$. So: $1/15$.
    At least 11: these events are disjoint, so $\frac1{11} + \frac1{12} + \cdots + \frac1{20} = H_{20} - H_{10} \approx 0.6688$.

??? question "12. Using the exponential generating function $\sum_n B_n x^n/n! = e^{e^x - 1}$, prove the Bell recurrence by differentiating."

    Let $F(x) = e^{e^x-1}$. Then $F'(x) = e^x F(x)$. The coefficient of $x^n/n!$ in $F'$ is $B_{n+1}$. The coefficient
    of $x^n/n!$ in a product of two EGFs $\sum a_i x^i/i!$ and $\sum b_j x^j/j!$ is $\sum_j\binom{n}{j}a_{n-j}b_j$; here
    $a_i = 1$ (from $e^x$) and $b_j = B_j$. So $B_{n+1} = \sum_j \binom{n}{j}B_j$.

## What you learned

- A set partition cuts a set into unlabelled non-empty blocks; $S(n,k)$ counts them by number of blocks, obeys
  $S(n,k) = kS(n-1,k) + S(n-1,k-1)$, and $k!S(n,k)$ counts onto functions.
- The Bell numbers $B_n = \sum_k S(n,k)$ count all partitions (and equivalence relations), with
  $B_{n+1} = \sum_j \binom{n}{j}B_j$, Dobiński's formula and the EGF $e^{e^x-1}$.
- Every permutation splits into cycles; $c(n,k)$ counts permutations by cycles, obeys
  $c(n,k) = (n-1)c(n-1,k) + c(n-1,k-1)$, and $\sum_k c(n,k)x^k = x(x+1)\cdots(x+n-1)$.
- A random permutation has $H_n \approx \ln n$ cycles on average, and a cycle of length $k > n/2$ with probability $1/k$.
- Stirling numbers convert between powers and falling factorials; the two signed tables are inverse matrices; with
  $\sum x^{\underline k} = n^{\underline{k+1}}/(k+1)$ they sum powers mechanically.
- Integer partitions count splittings of identical objects; conjugation swaps number of parts with largest part;
  $p(n,k) = p(n-1,k-1) + p(n-k,k)$; types of set partitions and cycle types are counted by explicit formulas.
- Compositions are ordered partitions: $2^{n-1}$ in all, $\binom{n-1}{k-1}$ with $k$ parts, generating function
  $1/(1 - A(x))$, and Fibonacci numbers for parts $\{1,2\}$ or odd parts.

**Next:** [Chapter 10](10-Graphs.md), the start of Part III: graphs, the dots-and-lines pictures behind networks,
maps and much of modern combinatorics.

## Further reading

- R. L. Graham, D. E. Knuth and O. Patashnik, *Concrete Mathematics*, 2nd edition, 1994. Chapter 6 (Special numbers)
  is the classic source for Stirling numbers, falling factorials and the notation used here.
- R. P. Stanley, *Enumerative Combinatorics*, Volume 1, 2nd edition, 2012. Section 1.9 has the twelvefold way.
- M. Bóna, *A Walk Through Combinatorics*, 4th edition, 2017. Friendly chapters on partitions and Stirling numbers.
- G. E. Andrews and K. Eriksson, *Integer Partitions*, 2004. An undergraduate introduction.
- P. Flajolet and R. Sedgewick, *Analytic Combinatorics*, 2009. The symbolic method behind 9.1 and 9.5.
- H. S. Wilf, *generatingfunctionology*, 2nd edition, 1994 (free online from the author's estate).
- J. Stirling, *Methodus Differentialis*, 1730; English translation with commentary by I. Tweddle, *James Stirling's
  Methodus Differentialis*, 2003.
- On this site: the Topics lessons [Partitions of a number](../../topics/counting/level-8/04-partitions.md),
  [Counting with recursion](../../topics/counting/level-8/01-counting-recursion.md) and
  [Generating functions](../../topics/counting/level-8/05-generating-functions.md); the U of T guide
  [Change of basis and similarity](../../uoft/MAT240H1/unit06.md); the Number Theory book's
  [Partitions](../number-theory/16-Partitions.md) chapter; the Algebra book's
  [Group actions](../algebra/16-Group-Actions-and-Sylow.md) for cycle types in the symmetric group.
