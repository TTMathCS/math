# 2. Permutations and combinations

*In how many orders can a deck of cards be shuffled? How many different hands of five cards can be dealt? How many
ways can ten identical sweets be shared among four children? These are the three basic kinds of counting problem:
arranging, choosing, and distributing. This chapter solves each with a formula and a proof, shows how to recognise
which kind a problem is, and ends with a single table, the twelvefold way, that organises all of them.*

!!! abstract "In this chapter"

    **You will learn:**

    - factorials, and how many ways there are to arrange $n$ things, or $k$ of them
    - how to arrange things when some are identical (permutations of a multiset)
    - binomial coefficients $\binom{n}{k}$: how many ways to choose $k$ things from $n$, with a proof
    - stars and bars: choosing with repetition, and sharing out identical objects
    - arrangements round a circle, and why you divide by $n$
    - the twelvefold way: one table for putting balls into boxes, with an honest account of which entries need later chapters

    **You need:** [Chapter 1](01-Counting-Principles.md) (the sum and product rules, complements and bijections).
    For a gentler version, see the Topics lessons [Factorials](../../topics/counting/level-4/01-factorials.md),
    [Arranging some](../../topics/counting/level-4/02-arranging-some.md),
    [Arranging with identical things](../../topics/counting/level-4/03-identical-things.md),
    [Arranging in a circle](../../topics/counting/level-4/04-arranging-in-circles.md),
    [Choosing, not arranging](../../topics/counting/level-5/01-choosing-not-arranging.md) and
    [Committees with conditions](../../topics/counting/level-5/05-committees-conditions.md).

    **Levels:** 2.1 to 2.3 are beginner; 2.4 and 2.5 are intermediate; 2.6 is intermediate to advanced (an overview,
    with some entries proved only in Chapters 5 and 9).

## 2.1 Factorials and arrangements

**A question.** In how many orders can 5 books stand on a shelf?

Fill the shelf from the left. The first slot can hold any of the 5 books, the second any of the remaining 4, then 3,
then 2, then 1. By the product rule (the number of options at each stage is fixed, even though which books are left
depends on earlier choices) there are $5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120$ orders.

**Definition.** For a whole number $n \ge 1$, **$n$ factorial** is

$$
n! = n \cdot (n-1) \cdot (n-2) \cdots 2 \cdot 1 ,
$$

and we define $0! = 1$. An arrangement of $n$ different objects in a row is called a **permutation** of them, and
the argument above proves:

**Theorem 2.1.** There are $n!$ permutations of $n$ different objects.

**Why $0! = 1$.** It is not an arbitrary convention. There is exactly one way to arrange no objects: do nothing (the
empty arrangement). The definition also keeps the rule $n! = n \cdot (n-1)!$ true for $n = 1$, since $1! = 1 \cdot 0!$,
and, as we will see, it makes every formula in this chapter work at the edges without special cases.

**Factorials grow very fast.**

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 13 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $n!$ | 1 | 2 | 6 | 24 | 120 | 720 | 5040 | 40320 | 3628800 | 6227020800 | about $2.43 \times 10^{18}$ |

A deck of 52 cards can be shuffled in $52! \approx 8.07 \times 10^{67}$ orders. That number is so large that if
every person who has ever lived had shuffled a deck once a second since the Big Bang, the orders produced would be a
vanishingly small fraction of all of them; a well shuffled deck is almost certainly in an order no deck has ever been
in before. [Chapter 3](03-Binomial-Coefficients.md#36-stirlings-approximation) gives Stirling's formula, which
estimates $n!$ without multiplying it out.

**Arranging some of them.** In how many ways can 3 of 8 runners take gold, silver and bronze? Gold: 8 options;
silver: 7; bronze: 6. So $8 \cdot 7 \cdot 6 = 336$. In general the number of ways to arrange $k$ of $n$ different
objects in a row (a **$k$-permutation**) is

$$
P(n, k) = n (n-1) \cdots (n-k+1) = \frac{n!}{(n-k)!} ,
$$

a product of $k$ factors, the falling factorial $n^{\underline{k}}$ of [§1.2](01-Counting-Principles.md#12-the-sum-rule-and-the-product-rule).
The fraction form is true because the factors $(n-k)!$ cancel from the top. With $k = n$ it gives
$n!/0! = n!$, which is one place where $0! = 1$ earns its keep. If $k > n$ the product contains the factor 0, and
$P(n,k) = 0$: you cannot arrange 9 of 8 runners.

**Arrangements with conditions.** Two standard tricks.

*Glue the ones that must be together.* In how many orders can 5 books stand if two particular ones, A and B, must be
next to each other? Glue A and B into one block. Now there are 4 objects (the block and the other 3 books), arranged
in $4! = 24$ ways, and inside the block A and B can be in 2 orders. So $2 \cdot 24 = 48$.

*Use the complement for "not together".* A and B are *not* next to each other in $120 - 48 = 72$ orders. Check by
a second method: arrange the other 3 books ($3! = 6$ ways), which leaves 4 gaps (before, between and after them);
put A in one gap and B in a different gap: $4 \cdot 3 = 12$ ways. So $6 \cdot 12 = 72$. Two methods, one answer.

**Worked example: a queue.** Ten people queue for a bus. In how many orders can they stand so that Ana is somewhere
ahead of Ben? Swapping Ana and Ben is a bijection between the orders with Ana ahead and the orders with Ben ahead,
so exactly half of the $10!$ orders have Ana ahead: $10!/2 = 1\,814\,400$. Symmetry arguments like this save a great
deal of work.

## 2.2 Permutations of a multiset

**A question.** How many different words (strings of letters, meaningful or not) can be made by rearranging the
letters of BANANA?

If the six letters were all different the answer would be $6! = 720$. They are not: there are three As and two Ns.
A **multiset** is a collection in which repetition is allowed, like $\{A, A, A, B, N, N\}$, and we want its
permutations.

**The labelling trick.** Pretend the copies are different by giving them labels: $A_1, A_2, A_3, B, N_1, N_2$. Now
there are $6! = 720$ arrangements. Each real word, such as BANANA itself, appears many times among them: the three
As can be labelled in any of $3! = 6$ orders and the two Ns in any of $2! = 2$ orders, so each word appears
$3! \cdot 2! = 12$ times. Every labelled arrangement erases to exactly one word, and each word comes from exactly 12
labelled arrangements. So the number of words is

$$
\frac{6!}{3! \, 2! \, 1!} = \frac{720}{12} = 60 .
$$

This is the **division principle**, a cousin of the product rule: if a set of $N$ objects is split into groups that
all have the same size $m$, there are $N/m$ groups. (It is the product rule backwards: $N = (\text{number of groups})
\times m$.)

**Theorem 2.2.** If a multiset has $n$ objects, made of $k$ kinds, with $n_1$ copies of the first kind, $n_2$ of the
second, ..., $n_k$ of the $k$th (so $n_1 + \dots + n_k = n$), then it has

$$
\frac{n!}{n_1! \, n_2! \cdots n_k!}
$$

different permutations.

*Proof.* Label the copies to make all $n$ objects different: $n!$ arrangements. Erasing the labels sends each
labelled arrangement to a word. The labelled arrangements that erase to a given word are obtained from any one of
them by permuting the labels within each kind, and that can be done in $n_1! \, n_2! \cdots n_k!$ ways by the
product rule. So every word has exactly that many preimages, and the division principle gives the formula. $\square$

**Worked example 1: MISSISSIPPI.** Eleven letters: M once, I four times, S four times, P twice. So

$$
\frac{11!}{1! \, 4! \, 4! \, 2!} = \frac{39\,916\,800}{1 \cdot 24 \cdot 24 \cdot 2} = 34\,650 .
$$

Check: a computer listing the distinct permutations of the string finds 34650.

**Worked example 2: COMBINATORICS.** Thirteen letters, with C, O and I twice each and the other seven letters once:
$13!/(2!\,2!\,2!) = 6\,227\,020\,800 / 8 = 778\,377\,600$.

**Worked example 3: grid routes.** In [§1.4](01-Counting-Principles.md#14-bijections-the-key-idea) the shortest routes
from $(0,0)$ to $(4,3)$ matched the words with four Rs and three Us. By Theorem 2.2 there are
$7!/(4!\,3!) = 5040/(24 \cdot 6) = 35$ of them. In general there are $(a+b)!/(a!\,b!)$ shortest routes from $(0,0)$
to $(a,b)$. Routes through a given point multiply: the routes from $(0,0)$ to $(6,4)$ that pass through $(2,2)$ number
$\frac{4!}{2!\,2!} \cdot \frac{6!}{4!\,2!} = 6 \cdot 15 = 90$, out of $10!/(6!\,4!) = 210$ in all.

**Worked example 4: no two As together.** How many of the 60 rearrangements of BANANA have no two As next to each
other? Place the other letters first: B, N, N can be arranged in $3!/2! = 3$ ways, and they leave 4 gaps
(\_ B \_ N \_ N \_). The three As must go into three different gaps, and since the As are identical only the choice of
gaps matters. Choosing 3 of 4 gaps can be done in 4 ways (leave one gap out). So $3 \cdot 4 = 12$ words. Check by
listing: a computer finds 12.

## 2.3 Choosing: combinations

**A question.** A lottery draws 6 numbers from 1 to 49. The order of the draw does not matter, only which six numbers
come up. How many different results are possible?

**Definition.** A **$k$-combination** of a set is a subset with $k$ elements: a choice of $k$ elements where order
does not matter. The number of $k$-element subsets of an $n$-element set is written

$$
\binom{n}{k}
$$

and read "$n$ choose $k$". These numbers are the **binomial coefficients**; [Chapter 3](03-Binomial-Coefficients.md)
explains the name.

**Theorem 2.3.** For $0 \le k \le n$,

$$
\binom{n}{k} = \frac{n!}{k! \, (n-k)!} = \frac{n (n-1) \cdots (n-k+1)}{k!} .
$$

*Proof by counting arrangements two ways.* Count the $k$-permutations of an $n$-element set (ordered rows of $k$
different elements). Directly, there are $n!/(n-k)!$ of them. Alternatively, build each one in two stages: first
choose *which* $k$ elements appear ($\binom{n}{k}$ ways), then arrange them in a row ($k!$ ways). Every row arises
exactly once this way, so

$$
\binom{n}{k} \cdot k! = \frac{n!}{(n-k)!} ,
$$

and dividing by $k!$ gives the formula. $\square$

*Second proof, as a multiset permutation.* A $k$-subset of $\{1, \dots, n\}$ matches a word of length $n$ with $k$
letters Y (for "yes, chosen") and $n - k$ letters N, the Y in position $i$ meaning that $i$ is chosen. By
Theorem 2.2 there are $n!/(k!\,(n-k)!)$ such words. $\square$

So the lottery has

$$
\binom{49}{6} = \frac{49 \cdot 48 \cdot 47 \cdot 46 \cdot 45 \cdot 44}{6!} = 13\,983\,816
$$

possible draws: one ticket has about one chance in 14 million.

**Edge cases.** $\binom{n}{0} = 1$ (one way to choose nothing: the empty set) and $\binom{n}{n} = 1$; the formula
gives both correctly because $0! = 1$. For $k > n$ there are no $k$-subsets, and we set $\binom{n}{k} = 0$; the
second form of the formula, $n(n-1)\cdots(n-k+1)/k!$, gives 0 automatically because one factor is 0. Also
$\binom{n}{1} = n$ and $\binom{n}{2} = n(n-1)/2$, which is the handshake number.

**Symmetry.** $\binom{n}{k} = \binom{n}{n-k}$. The formula shows it, but the reason is a bijection: choosing which $k$
people are *in* a team is the same as choosing which $n - k$ are *out*. The map $S \mapsto \overline{S}$
(complement) matches $k$-subsets with $(n-k)$-subsets. So $\binom{49}{43} = \binom{49}{6}$ without any arithmetic.

**Worked example 1: poker hands.** A poker hand is 5 cards from a 52-card deck (13 ranks, from 2 up to ace, in each
of 4 suits). There are $\binom{52}{5} = 2\,598\,960$ hands. How many are of each type? The method is always the
product rule applied to a careful description of the hand.

- *Four of a kind* (four cards of one rank plus any fifth card): choose the rank (13), the fifth card (48 left).
  $13 \cdot 48 = 624$.
- *Full house* (three of one rank and two of another): choose the rank of the three (13) and which three suits
  ($\binom{4}{3} = 4$), then the rank of the pair (12 left) and its suits ($\binom{4}{2} = 6$).
  $13 \cdot 4 \cdot 12 \cdot 6 = 3744$.
- *Two pair*: here the two pair ranks play the same role, so choose them *together*, $\binom{13}{2} = 78$ ways (not
  $13 \cdot 12$, which would count each hand twice). Then suits for each pair, $6 \cdot 6$, and a fifth card of a
  different rank, $44$ ways. $78 \cdot 36 \cdot 44 = 123\,552$.
- *Flush* (all five the same suit): $4 \cdot \binom{13}{5} = 4 \cdot 1287 = 5148$, of which 40 are straight flushes
  (5 consecutive ranks in one suit: 10 starting ranks, ace low or high, times 4 suits); so 5108 flushes that are not
  straight flushes.

The two-pair case shows the commonest error in choosing: **if two choices play the same role, choose them together,
or divide by the number of orders.**

**Worked example 2: committees and a classic mistake.** A committee of 4 is chosen from 6 men and 5 women. How many
committees have at least one woman?

*Right (complement):* all committees $\binom{11}{4} = 330$, minus all-men committees $\binom{6}{4} = 15$, gives
**315**.

*Wrong:* "Choose one woman to guarantee the condition (5 ways), then any 3 of the remaining 10 people
($\binom{10}{3} = 120$ ways): $600$." The trouble is that a committee with two women, say Wanda and Xena, is built
twice: once with Wanda as "the guaranteed woman" and Xena among the others, and once the other way round. The
product rule needs every object to be built exactly once, and here it is not. This mistake is so common that it is
worth testing every "guarantee first" argument on a small case.

*Right (cases):* exactly 1, 2, 3 or 4 women:
$\binom{5}{1}\binom{6}{3} + \binom{5}{2}\binom{6}{2} + \binom{5}{3}\binom{6}{1} + \binom{5}{4}\binom{6}{0}
= 100 + 150 + 60 + 5 = 315$. It agrees.

**Worked example 3: choosing with gaps.** How many ways are there to choose 3 numbers from $\{1, \dots, 20\}$ with no
two consecutive? Write the chosen numbers in order, $a < b < c$, with $b \ge a + 2$ and $c \ge b + 2$. The map
$(a, b, c) \mapsto (a, b - 1, c - 2)$ sends them to three numbers $a < b - 1 < c - 2$ from $\{1, \dots, 18\}$ with no
condition at all, and it can be undone (add 1 and 2 back). So the answer is $\binom{18}{3} = 816$. Bijections that
"squeeze out" gaps like this are standard.

**Try it in Python.** `math.comb` and `math.perm` are in the standard library:

```python
from math import comb, perm, factorial

print(factorial(10), perm(8, 3), comb(49, 6))   # 3628800 336 13983816
print(comb(52, 5), 13 * comb(4, 3) * 12 * comb(4, 2), comb(13, 2) * 6 * 6 * 44)
# 2598960 3744 123552
```

<figure class="play" data-play="arrange" data-mode="comb"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Every group of k chosen from n, order ignored: n choose k of them.</figcaption></figure>

## 2.4 With repetition: stars and bars

*Level: intermediate.*

**A question.** Ten identical sweets are shared among four children, Ana, Ben, Cy and Dee. A child may get none. In
how many ways can it be done?

The sweets are identical, so a sharing is described only by how many each child gets: a list $(x_1, x_2, x_3, x_4)$
of whole numbers $x_i \ge 0$ with

$$
x_1 + x_2 + x_3 + x_4 = 10 .
$$

So the question is how many solutions this equation has in non-negative whole numbers.

**The picture.** Draw the 10 sweets as stars in a row, and put 3 bars among them to separate the four children's
shares. The stars before the first bar are Ana's, those between the first and second bars are Ben's, and so on. Here
is the sharing $(2, 4, 0, 4)$: two bars side by side mean that Cy gets nothing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 130" role="img" aria-label="Stars and bars: ten stars and three bars in a row of thirteen places, read as 2, 4, 0 and 4 sweets for four children">
  <circle cx="30" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="30" y="96" text-anchor="middle" font-size="11" fill="currentColor">1</text>
  <circle cx="60" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="60" y="96" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <line x1="90" y1="28" x2="90" y2="72" stroke="#9cc9ea" stroke-width="6"/>
  <text x="90" y="96" text-anchor="middle" font-size="11" fill="currentColor">3</text>
  <circle cx="120" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="120" y="96" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <circle cx="150" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="150" y="96" text-anchor="middle" font-size="11" fill="currentColor">5</text>
  <circle cx="180" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="180" y="96" text-anchor="middle" font-size="11" fill="currentColor">6</text>
  <circle cx="210" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="210" y="96" text-anchor="middle" font-size="11" fill="currentColor">7</text>
  <line x1="240" y1="28" x2="240" y2="72" stroke="#9cc9ea" stroke-width="6"/>
  <text x="240" y="96" text-anchor="middle" font-size="11" fill="currentColor">8</text>
  <line x1="270" y1="28" x2="270" y2="72" stroke="#9cc9ea" stroke-width="6"/>
  <text x="270" y="96" text-anchor="middle" font-size="11" fill="currentColor">9</text>
  <circle cx="300" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="300" y="96" text-anchor="middle" font-size="11" fill="currentColor">10</text>
  <circle cx="330" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="330" y="96" text-anchor="middle" font-size="11" fill="currentColor">11</text>
  <circle cx="360" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="360" y="96" text-anchor="middle" font-size="11" fill="currentColor">12</text>
  <circle cx="390" cy="50" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="currentColor">13</text>
  <text x="52" y="120" text-anchor="middle" font-size="12" fill="currentColor">Ana: 2</text>
  <text x="165" y="120" text-anchor="middle" font-size="12" fill="currentColor">Ben: 4</text>
  <text x="255" y="120" text-anchor="middle" font-size="12" fill="currentColor">Cy: 0</text>
  <text x="338" y="120" text-anchor="middle" font-size="12" fill="currentColor">Dee: 4</text>
</svg>
</div>

Every sharing gives exactly one row of 10 stars and 3 bars, and every such row gives exactly one sharing. A row is a
line of 13 places, of which we choose the 3 that hold bars. So the number of sharings is

$$
\binom{13}{3} = 286 .
$$

**Theorem 2.4 (stars and bars).** Let $n \ge 0$ and $k \ge 1$.

1. The number of solutions of $x_1 + x_2 + \dots + x_k = n$ in whole numbers $x_i \ge 0$ is
   $\binom{n + k - 1}{k - 1}$.
2. The number of solutions in whole numbers $x_i \ge 1$ is $\binom{n-1}{k-1}$.

*Proof.* (1) Match each solution with the row made of $x_1$ stars, a bar, $x_2$ stars, a bar, ..., a bar, $x_k$
stars. The row has $n$ stars and $k - 1$ bars, so $n + k - 1$ places. Conversely, any row of $n$ stars and $k - 1$
bars gives a solution: $x_i$ is the number of stars between bar $i - 1$ and bar $i$ (before the first bar for $i = 1$,
after the last for $i = k$). These two maps undo each other, so they are bijections, and the rows number
$\binom{n+k-1}{k-1}$, the ways to choose which places hold bars.

(2) Put $y_i = x_i - 1$. Then $x_i \ge 1$ exactly when $y_i \ge 0$, and $x_1 + \dots + x_k = n$ exactly when
$y_1 + \dots + y_k = n - k$. This is a bijection between the two solution sets, so by part (1) the count is
$\binom{(n-k) + k - 1}{k-1} = \binom{n-1}{k-1}$. (For a direct picture: line up $n$ stars, which have $n - 1$ gaps
between them, and choose $k - 1$ of the gaps for bars; no two bars can share a gap, so no part is empty. That is the
compositions picture of [§1.4](01-Counting-Principles.md#14-bijections-the-key-idea), with the number of parts
fixed.) $\square$

If every child must get at least one sweet, the count is $\binom{9}{3} = 84$.

**Choosing with repetition.** A doughnut shop sells 5 kinds of doughnut. How many different boxes of 12 can you buy?
A box is a **multiset** of size 12 from 5 kinds, and it is described by how many of each kind: $x_1 + \dots + x_5 = 12$
with $x_i \ge 0$. So there are $\binom{12 + 4}{4} = \binom{16}{4} = 1820$ boxes. In general:

**Corollary 2.5.** The number of multisets of size $k$ drawn from $n$ kinds (choosing $k$ things from $n$ types, with
repetition allowed and order ignored) is

$$
\binom{n + k - 1}{k} .
$$

It is sometimes written $\left(\!\binom{n}{k}\!\right)$ and read "$n$ multichoose $k$". (By symmetry,
$\binom{n+k-1}{k} = \binom{n+k-1}{n-1}$, which is the form in Theorem 2.4.)

**Worked example 1: dice.** Roll 3 identical dice. How many different outcomes are there, if we only record which
numbers came up and how often (so 1, 1, 5 is the same as 5, 1, 1)? Multisets of size 3 from 6 kinds:
$\binom{8}{3} = 56$. For 4 dice, $\binom{9}{4} = 126$. (These outcomes are not equally likely: 1, 1, 1 can happen in
one way and 1, 2, 3 in six ways. That difference matters in the probability book.)

**Worked example 2: monomials.** How many terms does $(a + b + c)^5$ have after expanding and collecting? Each term is
$a^i b^j c^k$ with $i + j + k = 5$, so there are $\binom{7}{2} = 21$ terms. In general a polynomial of degree $d$ in
$n$ variables can have $\binom{n+d-1}{d}$ terms of top degree.

**Worked example 3: lower bounds.** How many solutions of $x_1 + x_2 + x_3 + x_4 = 20$ in non-negative whole numbers
have $x_1 \ge 2$ and $x_2 \ge 3$? Give the first two variables their minimums in advance: put $y_1 = x_1 - 2$,
$y_2 = x_2 - 3$. Then $y_1 + y_2 + x_3 + x_4 = 15$ with all variables $\ge 0$, so there are $\binom{18}{3} = 816$
solutions.

**Worked example 4: "at most" with a slack variable.** How many solutions of $x_1 + x_2 + x_3 \le 10$ in
non-negative whole numbers? Add a new variable $s = 10 - (x_1 + x_2 + x_3) \ge 0$, the "slack". Then
$x_1 + x_2 + x_3 + s = 10$, with four variables, and there are $\binom{13}{3} = 286$ solutions. (Notice that this is
the same number as the sweets: it *is* the sweets, with $s$ as the fourth child.)

**Upper bounds are harder.** How many solutions of $x_1 + x_2 + x_3 = 10$ have every $x_i \le 6$? Now the
substitution trick does not work, because an upper bound does not shift away. The clean method counts the bad
solutions (some $x_i \ge 7$) with inclusion-exclusion, in [Chapter 5](05-Inclusion-Exclusion.md); generating
functions ([Chapter 7](07-Generating-Functions.md)) give another. (Here only one variable can be 7 or more at a
time, so the answer is $\binom{12}{2} - 3\binom{5}{2} = 66 - 30 = 36$.)

**History.** The count itself is old. The picture was popularised by William Feller's probability textbook *An
Introduction to Probability Theory and Its Applications* (first edition 1950), which drew indistinguishable balls in
cells as stars separated by bars, and the name comes from that picture.

## 2.5 Circular arrangements

*Level: intermediate.*

**A question.** In how many ways can 8 people sit around a round table, if only who sits next to whom matters (all
seats alike, so turning everyone one seat to the left gives the same seating)?

**The counting.** Seat the people in a row first: $8!$ ways. Now bend the row into a circle. A circular seating
comes from exactly 8 rows, one for each choice of who sits in "seat 1" (each rotation of the circle). So, by the
division principle, there are $8!/8 = 7! = 5040$ circular seatings.

**Theorem 2.6.** $n$ different people can be seated around a circle in $(n-1)!$ ways, where seatings that differ by a
rotation count as the same.

*Proof.* The $n!$ arrangements in a row fall into groups of exactly $n$ that are rotations of one another (they are
all different rows, because the people are all different, so no rotation other than the identity fixes a row). Each
group is one circular seating. So there are $n!/n = (n-1)!$. $\square$

An equivalent way to think: fix one person (say the host) in place to break the symmetry, then arrange the other
$n - 1$ in the remaining seats, in order going clockwise from the host: $(n-1)!$ ways.

**Worked example 1: two people not side by side.** Of the 5040 seatings of 8 people, how many keep Ana and Ben apart?
Fix Ana's seat. Ben sits next to her in 2 ways (left or right), and the other 6 fill in $6!$ ways: $2 \cdot 720 = 1440$
seatings with them together. So $5040 - 1440 = 3600$ keep them apart. Check: fixing Ana, Ben can take any of the 5
seats not next to her, and then the rest in $6!$ ways, $5 \cdot 720 = 3600$.

**Worked example 2: alternating.** Four men and four women sit at a round table, alternating men and women. Fix one
man's seat; this fixes which seats are "men's seats". The other 3 men fill their seats in $3! = 6$ ways and the 4
women fill theirs in $4! = 24$ ways: $144$ seatings. (With 6 couples, $5! \cdot 6! = 86\,400$.)

**Necklaces and bracelets.** If the circle can also be **turned over**, as a bracelet of beads can, then each
arrangement is also the same as its mirror image. For $n \ge 3$ different beads, a circular arrangement and its
reflection are always different as circular arrangements (reversing the order changes who is clockwise of whom), so
the $(n-1)!$ circular arrangements pair up, and there are

$$
\frac{(n-1)!}{2}
$$

bracelets. With 7 different beads, $6!/2 = 360$. (For $n = 1$ and $n = 2$ there is just one bracelet, since there
is nothing to reflect.)

**A warning: repeated beads.** If some beads are identical, dividing by $n$ is wrong. A necklace of 4 beads, 2 red
and 2 blue: the row count is $4!/(2!\,2!) = 6$, and $6/4$ is not even a whole number. The reason is that some rows
are fixed by a rotation (RBRB turned by two places is RBRB again), so the groups are not all of size $n$. The correct
count (two necklaces up to rotation: RRBB and RBRB) needs Burnside's lemma, which averages over the rotations; it is
in [Chapter 15](15-Counting-with-Symmetry.md) and, from the group theory side,
[Algebra, chapter 16](../algebra/16-Group-Actions-and-Sylow.md). The division principle works only when every group
has the same size.

## 2.6 The twelvefold way

*Level: intermediate to advanced.*

Almost every problem in this chapter can be stated in one form: **put $k$ balls into $n$ boxes.** Arranging $k$ of
$n$ runners on a podium is putting the 3 medals (balls) onto 8 runners (boxes), at most one per runner. Sharing
sweets is putting 10 identical balls into 4 different boxes. Choosing a 6-subset of 49 numbers is putting 6
identical balls into 49 boxes, at most one per box. Three questions decide the answer:

- Are the balls **distinguishable** (labelled) or **identical**?
- Are the boxes distinguishable or identical?
- Is any distribution allowed, or must each box get **at most one** ball (the map is injective), or **at least one**
  (the map is surjective)?

Two times two times three is twelve: this is the **twelvefold way**. In the language of functions, a distribution of
labelled balls into labelled boxes is a function from the $k$ balls to the $n$ boxes; "identical" balls or boxes
means we count functions only up to relabelling the balls, or the boxes, or both.

The table uses two families of numbers that the book meets properly later.

- The **Stirling number of the second kind** $S(k, n)$ counts the ways to split a $k$-element set into $n$ non-empty
  blocks, with no order on the blocks. For example $S(4, 2) = 7$: the set $\{1,2,3,4\}$ splits into two blocks as
  $1|234$, $2|134$, $3|124$, $4|123$, $12|34$, $13|24$, $14|23$. ([Chapter 9](09-Stirling-Numbers-and-Partitions.md).)
- The **partition number** $p_n(k)$ counts the ways to write $k$ as a sum of exactly $n$ positive whole numbers, with
  order ignored. For example $p_2(4) = 2$, since $4 = 3 + 1 = 2 + 2$.
  ([Chapter 9](09-Stirling-Numbers-and-Partitions.md) and
  [Number theory, chapter 16](../number-theory/16-Partitions.md).)

Here is the table, for $k$ balls and $n$ boxes. The last column gives each entry for $k = 4$ balls and $n = 3$ boxes,
where "any" / "at most one" / "at least one" are listed in that order.

| Balls | Boxes | Any distribution | At most one per box | At least one per box | $k = 4$, $n = 3$ |
|---|---|---|---|---|---|
| labelled | labelled | $n^k$ | $n^{\underline{k}} = n(n-1)\cdots(n-k+1)$ | $n! \, S(k, n)$ | 81 / 0 / 36 |
| identical | labelled | $\binom{n+k-1}{k}$ | $\binom{n}{k}$ | $\binom{k-1}{n-1}$ | 15 / 0 / 3 |
| labelled | identical | $S(k,1) + S(k,2) + \dots + S(k,n)$ | 1 if $k \le n$, else 0 | $S(k, n)$ | 14 / 0 / 6 |
| identical | identical | $p_1(k) + p_2(k) + \dots + p_n(k)$ | 1 if $k \le n$, else 0 | $p_n(k)$ | 4 / 0 / 1 |

(With 4 balls and 3 boxes, "at most one per box" is impossible, so that column is 0 throughout. For $k = 2$, $n = 3$
it would read 6, 3, 1, 1.) Every number in the last column was checked by a computer listing all 81 functions from
4 balls to 3 boxes and grouping them.

**Which entries are proved where.**

- *Row 1.* $n^k$ is the product rule (§1.2) and $n^{\underline{k}}$ is §2.1. The surjective entry: a function onto
  the $n$ boxes splits the balls into $n$ non-empty blocks (the balls in each box), and the blocks then have to be
  assigned to the $n$ labelled boxes, in $n!$ ways. So the count is $n!\,S(k,n)$; for 4 balls and 3 boxes,
  $6 \cdot 6 = 36$. Chapter 5 computes the same number by inclusion-exclusion.
- *Row 2.* These are stars and bars (Theorem 2.4 and Corollary 2.5) and plain choosing (§2.3): identical balls with at
  most one per box amount to choosing which $k$ boxes are occupied.
- *Row 3.* With identical boxes, a distribution of labelled balls is just a splitting of the balls into non-empty
  blocks (the contents of the boxes that are not empty), with at most $n$ blocks. Hence the sums of Stirling numbers;
  for $k = 4$, $n = 3$: $S(4,1) + S(4,2) + S(4,3) = 1 + 7 + 6 = 14$. If at most one ball goes in each box, every ball
  is alone, and since the boxes cannot be told apart there is only one way, provided there are enough boxes.
- *Row 4.* With nothing labelled, all that is left is the list of box sizes, sorted: a partition of $k$. For $k = 4$
  and at most 3 parts: $4$, $3+1$, $2+2$, $2+1+1$, so 4 ways; exactly 3 parts: $2+1+1$ only.

The two "at least one" entries of rows 3 and 4 have no simple closed formula. $S(k,n)$ has a formula as an
alternating sum (Chapter 5) and a recurrence (Chapter 9); the partition numbers have a generating function and a
remarkable asymptotic formula of Hardy and Ramanujan (Number theory, chapter 16), but no formula as simple as
$\binom{n}{k}$. That is not a gap in our knowledge of the table; it is a fact about the world: unlabelled objects are
harder to count.

**Where the name comes from.** The organisation of these twelve problems into one table is due to Gian-Carlo Rota,
and the name "twelvefold way" to Joel Spencer, as Richard Stanley records in *Enumerative Combinatorics*, Volume 1,
whose first chapter is built around it.

**How to use the table.** When you meet a new counting problem, ask the three questions. Is order important among
the things being placed (labelled balls)? Can the places be told apart (labelled boxes)? Is there a restriction to
at most or at least one? Then read off the entry. Some examples:

- Ways to hand out 7 different jobs to 3 different workers so that each worker gets at least one: labelled into
  labelled, onto. $3!\,S(7,3) = 6 \cdot 301 = 1806$.
- Ways to split 7 different jobs into 3 non-empty teams with no names: labelled into identical, onto. $S(7,3) = 301$.
- Ways to write 7 as a sum of 3 positive parts, order ignored: identical into identical, onto. $p_3(7) = 4$, namely
  $5+1+1$, $4+2+1$, $3+3+1$, $3+2+2$.
- Ways to write 7 as a sum of 3 positive parts, order counted: identical into labelled, onto.
  $\binom{6}{2} = 15$.

## Check yourself

??? question "1. In how many ways can 5 people stand in a row if two of them, Ana and Ben, refuse to stand next to each other?"

    All rows: $5! = 120$. Rows with Ana and Ben together: glue them into a block, $4! \cdot 2 = 48$. So
    $120 - 48 = 72$. Check: arrange the other 3 ($6$ ways), then put Ana and Ben in two different gaps of the 4
    available, $4 \cdot 3 = 12$; $6 \cdot 12 = 72$.

??? question "2. How many different words can be made from the letters of COMBINATORICS? From ASSESSES?"

    COMBINATORICS: 13 letters, with C, O and I twice each, so $13!/(2!)^3 = 778\,377\,600$. ASSESSES: 8 letters,
    with S five times, E twice and A once: $8!/(5!\,2!\,1!) = 40320/240 = 168$.

??? question "3. A poker hand is dealt. How many hands are 'four of a kind', and what fraction of all hands is that?"

    Choose the rank of the four (13 ways) and the fifth card (48 ways): $624$ hands. As a fraction of
    $\binom{52}{5} = 2\,598\,960$ it is $624 / 2\,598\,960 = 1/4165$, about $0.024\%$.

??? question "4. A committee of 4 is chosen from 6 men and 5 women. A student says: 'to have at least one woman, choose a woman (5 ways), then any 3 of the other 10 people ($\binom{10}{3} = 120$): so 600.' What is wrong, and what is the right answer?"

    Committees with two or more women are counted more than once: a committee with exactly $w$ women is counted $w$
    times, once for each choice of "the" woman. The right answer is $\binom{11}{4} - \binom{6}{4} = 330 - 15 = 315$.
    Check: $1 \cdot 5 \cdot 20 + 2 \cdot 10 \cdot 15 + 3 \cdot 10 \cdot 6 + 4 \cdot 5 \cdot 1 = 100 + 300 + 180 + 20 = 600$,
    which is exactly the student's number, confirming the diagnosis.

??? question "5. How many shortest grid routes go from $(0,0)$ to $(6,4)$? How many of them pass through $(2,2)$? How many avoid it?"

    All routes: $\binom{10}{4} = 210$. Through $(2,2)$: $\binom{4}{2}$ ways to get there and $\binom{6}{2}$ ways to
    continue to $(6,4)$ (4 more steps right and 2 up), so $6 \cdot 15 = 90$. Avoiding it: $210 - 90 = 120$.

??? question "6. How many solutions does $x_1 + x_2 + x_3 + x_4 = 20$ have in whole numbers with $x_1 \ge 2$, $x_2 \ge 3$ and $x_3, x_4 \ge 0$? In positive whole numbers?"

    Shift: $y_1 = x_1 - 2$, $y_2 = x_2 - 3$, so $y_1 + y_2 + x_3 + x_4 = 15$ with all $\ge 0$: $\binom{18}{3} = 816$.
    In positive whole numbers: $\binom{19}{3} = 969$ by Theorem 2.4(2).

??? question "7. How many terms does $(a + b + c + d)^{10}$ have after collecting like terms?"

    Terms $a^i b^j c^k d^l$ with $i + j + k + l = 10$, all $\ge 0$: $\binom{13}{3} = 286$.

??? question "8. Six couples sit at a round table, men and women alternating. In how many ways? In how many of these does every man sit to the right of his own partner?"

    Fix one man; the other 5 men fill the men's seats in $5!$ ways and the 6 women fill theirs in $6!$ ways:
    $120 \cdot 720 = 86\,400$. If each woman must sit immediately on her partner's left side (so he is to her right),
    then once the men are placed every woman's seat is forced: $5! = 120$ ways.

??? question "9. How many ways are there to choose 3 numbers from $\{1, \dots, 20\}$ so that no two are consecutive? Generalise to $k$ numbers from $\{1, \dots, n\}$."

    The map $(a, b, c) \mapsto (a, b-1, c-2)$ is a bijection to arbitrary 3-subsets of $\{1, \dots, 18\}$, so the
    answer is $\binom{18}{3} = 816$. In general, subtract $0, 1, \dots, k-1$ from the chosen numbers in increasing
    order: $\binom{n-k+1}{k}$.

??? question "10. Seven identical balls go into 3 boxes, none empty. Count the ways if the boxes are (a) labelled, (b) identical. Then do the same for seven labelled balls."

    (a) Stars and bars, positive version: $\binom{6}{2} = 15$. (b) Partitions of 7 into exactly 3 parts:
    $5+1+1$, $4+2+1$, $3+3+1$, $3+2+2$, so 4. Labelled balls: (a) onto functions, $3!\,S(7,3) = 1806$, which
    you can confirm as $3^7 - 3 \cdot 2^7 + 3 \cdot 1^7 = 2187 - 384 + 3 = 1806$ (this is the inclusion-exclusion of
    Chapter 5); (b) $S(7,3) = 1806/6 = 301$.

??? question "11. In how many orders can the letters of BANANA be arranged so that no two As are adjacent?"

    Arrange B, N, N: $3!/2! = 3$ ways. They leave 4 gaps; the 3 identical As go into 3 different gaps:
    $\binom{4}{3} = 4$ ways. Total $3 \cdot 4 = 12$. (BANANA itself is one, and ANABAN and ANANAB are others; a
    computer listing confirms 12.)

??? question "12. Prove, by counting one set in two ways, that $\binom{n}{k}\binom{k}{j} = \binom{n}{j}\binom{n-j}{k-j}$ for $0 \le j \le k \le n$."

    Count the ways to choose a committee of $k$ people from $n$, and then a subcommittee of $j$ from the committee.
    Directly: $\binom{n}{k}\binom{k}{j}$. Alternatively choose the subcommittee first, $\binom{n}{j}$ ways, and then the
    other $k - j$ committee members from the $n - j$ people left, $\binom{n-j}{k-j}$ ways. Both count the same pairs
    (committee, subcommittee), so the two products are equal.

## What you learned

- $n$ different objects can be arranged in $n!$ ways, and $k$ of them in $n!/(n-k)!$; $0! = 1$ because there is one
  empty arrangement.
- A multiset with $n_i$ copies of kind $i$ has $n!/(n_1! \cdots n_k!)$ arrangements: label the copies, then divide.
- $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$ counts the $k$-subsets of an $n$-set; when two choices play the same role,
  choose them together or divide.
- Stars and bars: $x_1 + \dots + x_k = n$ has $\binom{n+k-1}{k-1}$ solutions in non-negative whole numbers and
  $\binom{n-1}{k-1}$ in positive ones; multisets of size $k$ from $n$ kinds number $\binom{n+k-1}{k}$.
- Circular seatings of $n$ people: $(n-1)!$; bracelets: $(n-1)!/2$ for $n \ge 3$. Dividing works only when every
  group has the same size; otherwise use Burnside (Chapter 15).
- The twelvefold way sorts all "balls into boxes" problems by three questions; four of its entries need Stirling and
  partition numbers, which have no simple closed form.

**Next:** [Chapter 3](03-Binomial-Coefficients.md) studies the numbers $\binom{n}{k}$ themselves: Pascal's triangle,
the binomial theorem, identities proved by counting, Lucas' theorem and Stirling's formula.

## Further reading

- Richard P. Stanley, *Enumerative Combinatorics*, Volume 1 (2nd edition, 2012), Chapter 1, Section 1.9 for the
  twelvefold way. The standard graduate text.
- Richard A. Brualdi, *Introductory Combinatorics* (5th edition, 2010), Chapters 2 and 3.
- Miklós Bóna, *A Walk Through Combinatorics* (4th edition, 2017), Chapters 3 and 5.
- William Feller, *An Introduction to Probability Theory and Its Applications*, Volume 1 (3rd edition, 1968),
  Chapter II, for occupancy problems and stars and bars.
- Ronald L. Graham, Donald E. Knuth and Oren Patashnik, *Concrete Mathematics* (2nd edition, 1994), Chapter 5.
- On this site: the Topics lessons [Stars and bars](../../topics/counting/level-6/02-stars-and-bars.md),
  [Arrangements with conditions](../../topics/counting/level-4/05-arranging-with-rules.md),
  [Cards and hands](../../topics/counting/level-5/06-cards-hands.md),
  [Paths on a grid](../../topics/counting/level-5/04-grid-paths.md) and
  [Mixed problems: which rule?](../../topics/counting/level-6/03-mixed-problems.md); the U of T guide
  [CSC148 Unit 5, Recursion](../../uoft/CSC148H1/unit05.md) for generating permutations and combinations by program;
  [Number theory, chapter 16](../number-theory/16-Partitions.md) for partitions.
