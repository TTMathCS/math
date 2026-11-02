---
title: "Beyond: The binomial theorem"
---

# Beyond: The binomial theorem and proofs by counting

*Counting and combinations · step 5 of 5*

## A question to start

Work out the powers of 11:

$$11^1 = 11, \qquad 11^2 = 121, \qquad 11^3 = 1331, \qquad 11^4 = 14641.$$

Look at the digits: 1 1, then 1 2 1, then 1 3 3 1, then 1 4 6 4 1. They are the rows of Pascal's triangle! Why
should multiplying by 11 have anything to do with choosing groups? (And what goes wrong at $11^5 = 161051$?) The
answer is one of the most useful results in algebra.

## The idea

### Multiplying out brackets by choosing

A **binomial** is an expression with two terms, like $a + b$. Let us multiply out $(a + b)^3$ in a careful way:

$$(a + b)^3 = (a + b)(a + b)(a + b).$$

To multiply out, you pick **one term from each bracket**, multiply your three picks, and do this for every possible
way of picking; then add everything up. Each way of picking is a string of three letters, like $a\,b\,a$, giving
$a^2 b$.

- To get $a^3$ you must pick $a$ from all three brackets: **1** way.
- To get $a^2 b$ you pick $b$ from **one** bracket and $a$ from the other two. Which bracket gives the $b$? There are
  $\dbinom{3}{1} = 3$ choices: $baa$, $aba$, $aab$.
- To get $a b^2$, choose which **two** brackets give $b$: $\dbinom{3}{2} = 3$ ways.
- To get $b^3$: $\dbinom{3}{3} = 1$ way.

So

$$(a + b)^3 = a^3 + 3a^2 b + 3a b^2 + b^3.$$

The numbers in front, called **coefficients**, are 1, 3, 3, 1: row 3 of Pascal's triangle. That is no coincidence.
The coefficient of each term counts **how many ways to choose which brackets supply the $b$s**, and that is a
"choose" number.

### The binomial theorem

The same argument works for any whole number power $n$. The term with $k$ copies of $b$ (and so $n - k$ copies of
$a$) appears once for every way of choosing $k$ brackets out of $n$:

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{\,n-k} b^{\,k} = a^n + \binom{n}{1} a^{n-1} b + \binom{n}{2} a^{n-2} b^2 + \cdots + b^n.$$

The $\Sigma$ means "add up these terms as $k$ runs from 0 to $n$" (the Beyond step of
[Patterns](../patterns/05-beyond.md) introduces this notation).

**The powers of 11.** $11^n = (10 + 1)^n$. Put $a = 10$ and $b = 1$: each coefficient of Pascal's row gets multiplied
by a power of 10, so it lands in its own column, like digits:

$$11^4 = 1 \cdot 10^4 + 4 \cdot 10^3 + 6 \cdot 10^2 + 4 \cdot 10 + 1 = 14641.$$

In row 5 the numbers 10 and 10 are too big to be single digits, so they carry: $1, 5, 10, 10, 5, 1$ becomes 161051.

### Things that fall out of it

Choose values for $a$ and $b$ and the theorem gives facts about Pascal's triangle for free.

**Row sums.** Put $a = b = 1$:

$$2^n = \binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n}.$$

Every row adds up to a power of 2. There is a counting reason too: a set of $n$ things has $2^n$ **subsets** (groups
you can make from it, including the empty group and the whole set), because each thing is either in or out; and
sorting those subsets by their size gives the row of choose numbers.

**Alternating sums.** Put $a = 1$, $b = -1$. The left side is $0^n = 0$ (for $n \ge 1$):

$$\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \cdots = 0.$$

For row 4: $1 - 4 + 6 - 4 + 1 = 0$. ✓

**Quick approximations.** When $x$ is small, the later terms of $(1 + x)^n$ are tiny, so

$$(1 + x)^n \approx 1 + n x + \binom{n}{2} x^2.$$

For example, $1.01^{10} \approx 1 + 10(0.01) + 45(0.0001) = 1.1045$. The true value is $1.10462\ldots$ This is how
people worked out compound interest before calculators.

### Proof by counting

A **combinatorial proof** shows two expressions are equal by explaining that **both count the same thing**. Pascal's
rule from the Master step was one: both sides counted the groups of $r$ chosen from $n$. Here is another
classic.

**Stars and bars.** In how many ways can 10 identical sweets be shared among 3 children, if some children may get
none? Lay the 10 sweets in a row and add 2 dividers, which split the row into 3 parts (child 1, child 2, child 3):

$$\star\,\star\,\star \;\big|\; \star\,\star\,\star\,\star\,\star \;\big|\; \star\,\star$$

This one means 3, 5, 2. Every sharing gives exactly one row of 10 stars and 2 bars, and every such row gives one
sharing. A row has 12 positions, and you only have to choose which 2 of them hold the bars:

$$\binom{12}{2} = 66 \text{ ways.}$$

In general, $n$ identical things shared among $k$ people can be done in $\dbinom{n + k - 1}{k - 1}$ ways.

## Worked examples

**1. Expand $(x + 2)^4$.**

Row 4 of Pascal's triangle is 1, 4, 6, 4, 1. With $a = x$ and $b = 2$:

$$
\begin{aligned}
(x + 2)^4 &= 1 \cdot x^4 + 4 \cdot x^3 \cdot 2 + 6 \cdot x^2 \cdot 2^2 + 4 \cdot x \cdot 2^3 + 1 \cdot 2^4\\
&= x^4 + 8x^3 + 24x^2 + 32x + 16.
\end{aligned}
$$

Check with $x = 1$: the left side is $3^4 = 81$, and the right side is $1 + 8 + 24 + 32 + 16 = 81$. ✓

**2. One coefficient only.** Find the coefficient of $x^3$ in $(2x - 1)^7$.

- The term with $x^3$ uses $2x$ from 3 brackets and $-1$ from the other 4.
- It is $\dbinom{7}{3} (2x)^3 (-1)^4 = 35 \times 8x^3 \times 1 = 280x^3$.

The coefficient is **280**.

**3. A term with no $x$.** Find the term that does not contain $x$ in $\left(x + \dfrac{2}{x}\right)^6$.

- A general term is $\dbinom{6}{k} x^{6-k} \left(\dfrac{2}{x}\right)^{k} = \dbinom{6}{k} 2^k x^{6 - 2k}$.
- No $x$ means $6 - 2k = 0$, so $k = 3$.
- The term is $\dbinom{6}{3} \times 2^3 = 20 \times 8 = 160$.

## Try it

1. Expand $(x + 1)^4$.
2. Expand $(2a - b)^3$.
3. Find the coefficient of $x^2$ in $(1 + 3x)^6$.
4. Use the approximation to estimate $0.99^{10}$, writing it as $(1 - 0.01)^{10}$.
5. How many subsets does a set of 10 things have? How many of them have exactly 4 things?
6. In how many ways can 7 identical sweets be shared among 3 children, if some may get none?

??? note "Answers"
    1. Row 4 is 1, 4, 6, 4, 1, so $(x + 1)^4 = x^4 + 4x^3 + 6x^2 + 4x + 1$.
    2. Row 3 is 1, 3, 3, 1, with $a \to 2a$ and $b \to -b$: $(2a)^3 + 3(2a)^2(-b) + 3(2a)(-b)^2 + (-b)^3$, which is
       $8a^3 - 12a^2 b + 6a b^2 - b^3$.
    3. $\dbinom{6}{2} (3x)^2 = 15 \times 9x^2$, so the coefficient is **135**.
    4. $1 + 10(-0.01) + 45(0.0001) = 1 - 0.1 + 0.0045 = 0.9045$. (The true value is $0.90438\ldots$)
    5. $2^{10} = 1024$ subsets, of which $\dbinom{10}{4} = 210$ have exactly 4 things.
    6. 7 stars and 2 bars: 9 positions, choose 2 for the bars: $\dbinom{9}{2} = 36$.

## Common mistake

**Forgetting to raise the whole term to the power.** In $(2x - 1)^7$ the $b$ is $-1$ and the $a$ is $2x$, so a term
contains $(2x)^3 = 8x^3$, not $2x^3$, and $(-1)^4 = 1$, with the sign decided by the power. Put brackets round each
term before you raise it to a power, and the slip disappears.

## Where it leads

- Back a step: [Master: combinations and Pascal's triangle](04-master.md)
- The binomial theorem is the engine behind the binomial distribution in [Probability](../probability/05-beyond.md):
  the chance of exactly $k$ heads in $n$ tosses is $\dbinom{n}{k} \big/ 2^n$.
- Proving identities for every $n$, by counting or by induction, is the theme of
  [MAT137 Unit 1 (logic, sets and proofs)](../../uoft/MAT137/unit01.md). When the power is not a whole number,
  $(1 + x)^n$ becomes an endless sum, a power series: see [MAT137 Unit 14](../../uoft/MAT137/unit14.md).
- The other topics: [all topics](../index.md).
